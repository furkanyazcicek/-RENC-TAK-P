/**
 * AI Soru Çözüm Merkezi — Google Gemini istemcisi.
 *
 * KÖKENİ
 * ------
 * Bu dosya `scripts/bench/providers/gemini.mjs` adaptöründen türetildi.
 * O dosya Faz 0 benchmark'ı için yazılmıştı ve kendi başlığında şöyle
 * diyor: "Faz 1'de bu katman api/_lib/llm.js olarak terfi ettirilebilir."
 * Burası o terfi. Benchmark dosyası KOPYALANDI, import EDİLMEDİ: bench'in
 * kendi README'si "ürün kodunu import etmez/etmemeli" diyor ve tersi de
 * doğru — bir deney dosyası değiştiğinde üretim çökmemeli. Ayrıca Vercel
 * sunucusuz paketine `scripts/` klasörü girmez.
 *
 * API ANAHTARI YALNIZCA BURADA OKUNUR. `x-goog-api-key` BAŞLIĞINA yazılır,
 * URL'ye DEĞİL — URL'ye yazılan anahtar proxy loglarına, hata mesajlarına
 * ve tarayıcı geçmişine sızar. Anahtar ne yanıt gövdesine, ne loglara, ne
 * de istemciye giden herhangi bir alana kopyalanır.
 *
 * BAĞIMLILIK EKLENMEDİ: Node 18+ ile gelen global `fetch` kullanılıyor.
 * (`api/_lib/openai.js` ile aynı tercih — soğuk başlama süresi artmasın.)
 */

import { solveConfig, modelIdFor } from './config.js'

/* ==================================================================
   HATA TÜRÜ
   ================================================================== */

/**
 * Yukarı akıştan (Gemini) gelen hata. `code` değeri doğrudan
 * `api/_lib/errors.js` içindeki kullanıcı mesajı anahtarına eşlenir;
 * ham Gemini metni ASLA kullanıcıya gösterilmez.
 */
export class GeminiError extends Error {
  constructor(code, { status = 0, kind = 'unknown', detail = '' } = {}) {
    super(`gemini_${kind}`)
    this.name = 'GeminiError'
    this.code = code
    this.status = status
    this.kind = kind
    // `detail` YALNIZCA sunucu logu içindir. Hiçbir yanıt gövdesine konmaz.
    this.detail = detail
  }
}

/**
 * HTTP durumunu hata sınıfına çevirir. Yeniden denenebilir hataları
 * denenmemesi gerekenlerden ayırmak kritik: bir anahtar hatasında 3 kez
 * aynı 401'i almak yalnızca kullanıcıyı bekletir.
 */
function classify(status, body = '') {
  if (status === 401 || status === 403) return 'auth'
  if (status === 404) return 'model_not_found'
  if (status === 429) {
    return /quota|billing|insufficient|credit|exceeded your current quota/i.test(body)
      ? 'quota'
      : 'rate_limit'
  }
  if (status === 408) return 'timeout'
  if (status >= 500) return 'server'
  if (status === 400) {
    if (/schema|responseSchema|response_mime|json/i.test(body)) return 'schema_rejected'
    if (/image|media|inline_?data|mime/i.test(body)) return 'image_rejected'
    return 'bad_request'
  }
  return 'unknown'
}

/** Bu sınıflarda yeniden denemek anlamsız — hemen vazgeç. */
const FATAL = new Set(['auth', 'model_not_found', 'quota', 'schema_rejected', 'bad_request'])

/**
 * Hata sınıfını `api/_lib/errors.js` mesaj anahtarına eşler.
 *
 * `auth`, `quota` ve `model_not_found` öğrenciye "yapılandırma sorunu"
 * olarak görünür: öğrenciye "geçersiz API anahtarı" ya da "kredi bitti"
 * demek hem anlamsız hem de iş bilgisi sızdırır.
 */
function codeFor(kind) {
  switch (kind) {
    case 'auth':
    case 'quota':
    case 'model_not_found':
    case 'schema_rejected':
    case 'bad_request':
      return 'solve_not_configured'
    case 'rate_limit':
      return 'upstream_rate_limited'
    case 'timeout':
      return 'upstream_timeout'
    case 'image_rejected':
      return 'solve_image_rejected'
    default:
      return 'upstream_error'
  }
}

/* ==================================================================
   ŞEMA ÇEVİRİSİ
   ================================================================== */

/**
 * Gemini'nin `responseSchema` alanı tam JSON Schema DEĞİL, OpenAPI 3.0'ın
 * bir alt kümesidir. `additionalProperties`, `$schema`, `const`, `strict`
 * gibi anahtarları görünce 400 döner. Bunları ayıklıyoruz.
 *
 * `propertyOrdering` eklenmesinin sebebi ölçülmüş bir davranış: Gemini
 * alan sırasını serbest bıraktığında bazen `answer`ı `steps`ten ÖNCE
 * üretiyor — yani cevabı çözümden önce yazıyor. Bu, zincirleme akıl
 * yürütmeyi kırar ve doğruluğu düşürür. Sırayı sabitlemek bir prompt
 * hilesi değil; şemanın zaten ifade ettiği sırayı sağlayıcıya bildirmek.
 *
 * `type: ['string','null']` biçimindeki birleşik tipler de Gemini'de
 * çalışmaz; `nullable: true` ile ifade edilir.
 */
const UNSUPPORTED = new Set([
  'additionalProperties',
  '$schema',
  '$id',
  '$ref',
  'const',
  'strict',
  'default',
  'examples',
  'patternProperties',
  'exclusiveMinimum',
  'exclusiveMaximum',
  'additionalItems',
  'definitions',
])

export function toGeminiSchema(node) {
  if (Array.isArray(node)) return node.map(toGeminiSchema)
  if (node === null || typeof node !== 'object') return node

  const out = {}
  for (const [key, value] of Object.entries(node)) {
    if (UNSUPPORTED.has(key)) continue
    out[key] = toGeminiSchema(value)
  }

  // ['string', 'null'] → { type: 'string', nullable: true }
  if (Array.isArray(out.type)) {
    const nullable = out.type.includes('null')
    const real = out.type.find((t) => t !== 'null')
    out.type = real ?? 'string'
    if (nullable) out.nullable = true
  }

  if (out.type === 'object' && out.properties) {
    out.propertyOrdering = Object.keys(out.properties)
  }

  return out
}

/* ==================================================================
   JSON KURTARMA
   ================================================================== */

/**
 * Structured output zorlanmış olsa bile model bazen JSON'u ```json
 * bloğuna sarıyor ya da başına bir cümle yazıyor. Kurtarmayı tek yerde
 * yapıyoruz; `recovered` bayrağı telemetride "şema uyumu" metriği olarak
 * ayrıca sayılıyor (§43).
 */
export function parseJsonLoose(text) {
  if (typeof text !== 'string' || !text.trim()) {
    return { value: null, recovered: false }
  }

  try {
    return { value: JSON.parse(text), recovered: false }
  } catch {
    /* aşağıda kurtarmayı dene */
  }

  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fenced) {
    try {
      return { value: JSON.parse(fenced[1]), recovered: true }
    } catch {
      /* devam */
    }
  }

  const first = text.indexOf('{')
  const last = text.lastIndexOf('}')
  if (first !== -1 && last > first) {
    try {
      return { value: JSON.parse(text.slice(first, last + 1)), recovered: true }
    } catch {
      /* devam */
    }
  }

  return { value: null, recovered: false }
}

/* ==================================================================
   HTTP
   ================================================================== */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function httpPost(url, { body, signal, timeoutMs }) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  // Çağıranın iptali (öğrenci sekmeyi kapattı) ile zaman aşımını birleştir:
  // boşa token yakmayalım.
  if (signal) {
    if (signal.aborted) controller.abort()
    else signal.addEventListener('abort', () => controller.abort(), { once: true })
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': solveConfig.apiKey,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    const text = await response.text()

    if (!response.ok) {
      return { ok: false, status: response.status, body: text.slice(0, 800) }
    }

    try {
      return { ok: true, status: response.status, json: JSON.parse(text) }
    } catch {
      return { ok: false, status: response.status, body: 'yanıt JSON değil: ' + text.slice(0, 300) }
    }
  } catch (error) {
    const aborted = error?.name === 'AbortError'
    return {
      ok: false,
      status: aborted ? 408 : 0,
      body: aborted ? 'timeout' : String(error?.message ?? error).slice(0, 300),
    }
  } finally {
    clearTimeout(timer)
  }
}

/* ==================================================================
   ANA GİRİŞ
   ================================================================== */

/**
 * @typedef {object} GeminiImage
 * @property {string} base64
 * @property {string} mimeType
 */

/**
 * Yapılandırılmış (JSON) bir yanıt üretir.
 *
 * @param {object} params
 * @param {'fast'|'pro'} params.role
 * @param {string} params.system              Sistem talimatı
 * @param {string} params.user                Kullanıcı istemi
 * @param {GeminiImage[]} [params.images]     Soru / öğrenci çözümü görselleri
 * @param {object} params.schema              Sağlayıcı-bağımsız JSON Schema
 * @param {number} [params.maxOutputTokens]
 * @param {string} [params.thinkingLevel]
 * @param {number} [params.timeoutMs]
 * @param {AbortSignal} [params.signal]
 *
 * @returns {Promise<{
 *   data: object, role: string, modelId: string, usage: object,
 *   recovered: boolean, truncated: boolean, latencyMs: number, attempts: number
 * }>}
 * @throws {GeminiError}
 */
export async function generateStructured({
  role,
  system,
  user,
  images = [],
  schema,
  maxOutputTokens = solveConfig.maxOutputTokens,
  thinkingLevel,
  timeoutMs = solveConfig.requestTimeoutMs,
  signal,
}) {
  if (!solveConfig.apiKey) {
    throw new GeminiError('solve_not_configured', { kind: 'auth', detail: 'GEMINI_API_KEY tanımsız' })
  }

  const modelId = modelIdFor(role)

  const parts = [{ text: user }]
  for (const image of images) {
    if (!image?.base64) continue
    parts.push({ inline_data: { mime_type: image.mimeType, data: image.base64 } })
  }

  const generationConfig = {
    responseMimeType: 'application/json',
    responseSchema: toGeminiSchema(schema),
    maxOutputTokens,
    temperature: solveConfig.temperature,
  }

  // Düşünme düzeyi yalnızca AÇIKÇA verildiğinde gönderilir.
  //
  // ⚠️ Bu alan sağlayıcı tarafında bir kez zaten değişti (bkz. config.js).
  // Desteklemeyen bir modele gönderilirse istek 400 ile TAMAMEN reddedilir;
  // model ortam değişkeniyle değiştirilebildiği için bu sürekli bir risk.
  // Aşağıdaki döngü, 400 alınca düşünme alanı olmadan bir kez daha dener.
  if (thinkingLevel) {
    generationConfig.thinkingLevel = thinkingLevel
  }

  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents: [{ role: 'user', parts }],
    generationConfig,
  }

  const url = `${solveConfig.baseUrl}/models/${encodeURIComponent(modelId)}:generateContent`

  let lastError = null

  for (let attempt = 1; attempt <= solveConfig.maxRetries + 1; attempt += 1) {
    const started = Date.now()
    const response = await httpPost(url, { body, signal, timeoutMs })

    if (response.ok) {
      const parsed = readCandidate(response.json)

      // Şemaya rağmen ayrıştırılamayan çıktı: bir kez daha denemeye değer
      // (§29 "structured output parse error → retry / repair"), ama
      // sonsuza kadar değil.
      if (!parsed.data) {
        lastError = new GeminiError('solve_parse_failed', {
          status: 200,
          kind: 'unparsable',
          detail: parsed.rawText.slice(0, 200),
        })
        if (attempt <= solveConfig.maxRetries) {
          await sleep(backoffMs(attempt))
          continue
        }
        throw lastError
      }

      return {
        data: parsed.data,
        role,
        modelId,
        usage: parsed.usage,
        recovered: parsed.recovered,
        truncated: parsed.truncated,
        latencyMs: Date.now() - started,
        attempts: attempt,
      }
    }

    const kind = classify(response.status, response.body)

    // Anahtar/kimlik/şema hataları sunucu loguna DETAYLI yazılır — bunlar
    // geliştiricinin görmesi gereken şeyler. Kullanıcıya sade mesaj gider.
    console.error(
      `[ai-solve:gemini] ${modelId} HTTP ${response.status} (${kind}) ${response.body?.slice(0, 300) ?? ''}`
    )

    /* ---------- KENDİNİ TOPARLAYAN YEDEK ----------
       400, isteğin tamamının reddedilmesi demek. Sağlayıcının kabul
       etmediği tek bir alan yüzünden ÖZELLİĞİN TAMAMI çalışmaz hâle
       geliyor — Gemini 3'te `thinkingBudget` → `thinkingLevel` değişikliği
       tam olarak buna yol açtı.

       Bu yüzden 400 alındığında düşünme alanını atıp BİR KEZ daha
       deniyoruz. Düşünme düzeyi bir optimizasyondur; onsuz çözüm biraz
       daha pahalı olabilir ama ÇALIŞIR. Sağlayıcı alan adını yine
       değiştirirse öğrenci bunu hiç fark etmez, biz logdan görürüz. */
    if (response.status === 400 && generationConfig.thinkingLevel) {
      console.error(
        `[ai-solve:gemini] ${modelId} düşünme düzeyi reddedildi ` +
          `(thinkingLevel="${generationConfig.thinkingLevel}") — alansız yeniden deneniyor`
      )
      delete generationConfig.thinkingLevel
      continue
    }

    lastError = new GeminiError(codeFor(kind), {
      status: response.status,
      kind,
      detail: response.body,
    })

    if (FATAL.has(kind)) throw lastError
    if (attempt > solveConfig.maxRetries) throw lastError

    // Üstel geri çekilme + jitter: hız sınırına çarpmışken sağlayıcıyı
    // dövmek yalnızca öğrenciyi bekletir.
    await sleep(backoffMs(attempt))
  }

  throw lastError ?? new GeminiError('upstream_error', { kind: 'unknown' })
}

function backoffMs(attempt) {
  return Math.min(8000, 800 * 2 ** (attempt - 1)) + Math.random() * 400
}

/**
 * Yanıt gövdesinden içeriği ve kullanım sayaçlarını çıkarır.
 *
 * TOKEN MUHASEBESİ: Gemini düşünme token'larını `thoughtsTokenCount`
 * olarak ayrı raporlar ve bunlar `candidatesTokenCount` içinde OLMAYABİLİR.
 * Toplamazsak maliyeti sistematik olarak düşük gösteririz.
 */
function readCandidate(json) {
  const candidate = json?.candidates?.[0]
  const rawText = (candidate?.content?.parts ?? []).map((p) => p.text ?? '').join('')

  const { value, recovered } = parseJsonLoose(rawText)

  const u = json?.usageMetadata ?? {}
  const thoughts = u.thoughtsTokenCount ?? 0

  return {
    data: value,
    rawText,
    recovered,
    // MAX_TOKENS ile biten yanıt YARIM bir çözümdür. Ayrıştırılabilse bile
    // güvenilmez; çağıran taraf bunu reddeder (bkz. solutionEngine).
    truncated: candidate?.finishReason === 'MAX_TOKENS',
    usage: {
      input: u.promptTokenCount ?? 0,
      output: (u.candidatesTokenCount ?? 0) + thoughts,
      reasoning: thoughts,
      cachedInput: u.cachedContentTokenCount ?? 0,
    },
  }
}

/**
 * Yapılandırılmış üretim, ama model erişilemezse diğer role düşer (§30).
 *
 * Fallback SESSİZ DEĞİLDİR: hangi modelin kullanıldığı ve neden düşüldüğü
 * dönen nesnede taşınır, çağıran taraf güven eşiğini buna göre sertleştirir.
 * "Pro yoktu, Flash cevapladı, öğrenci bilmiyor" durumu §30'un açıkça
 * yasakladığı şey.
 */
export async function generateWithFallback(params) {
  const primary = params.role
  const backup = primary === 'pro' ? 'fast' : null

  try {
    return await generateStructured(params)
  } catch (error) {
    const recoverable =
      error instanceof GeminiError &&
      ['model_not_found', 'server', 'rate_limit', 'timeout', 'unknown'].includes(error.kind)

    if (!backup || !recoverable) throw error

    console.error(
      `[ai-solve:gemini] ${primary} kullanılamadı (${error.kind}) → ${backup} ile deneniyor`
    )

    const result = await generateStructured({
      ...params,
      role: backup,
      thinkingLevel: solveConfig.thinkingLevel[backup],
    })

    return { ...result, fallbackFrom: primary, fallbackReason: error.kind }
  }
}
