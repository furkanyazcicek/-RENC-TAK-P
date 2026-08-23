/**
 * SAĞLAYICI SOYUTLAMASI — ortak sözleşme.
 *
 * NEDEN BU KATMAN VAR
 * -------------------
 * Aynı benchmark sorusunu OpenAI, Google ve Anthropic'e AYNI görev tanımıyla
 * göndermemiz gerekiyor. Üç sağlayıcının HTTP biçimi, görüntü kodlaması,
 * structured output mekanizması ve token muhasebesi farklı. Bu farkları
 * adaptörler yutar; benchmark'ın geri kalanı tek bir sözleşme görür.
 *
 * ÖNEMLİ İLKE (kullanıcı talebi §7)
 * ---------------------------------
 * Adaptör YALNIZCA TAŞIMA katmanını çevirir. Görev tanımını, prompt'u ya da
 * şemayı "bu sağlayıcı şöyle daha iyi çalışıyor" diye DEĞİŞTİRMEZ. Bir
 * sağlayıcı lehine prompt ayarlamak, karşılaştırmayı geçersiz kılar.
 *
 * SÖZLEŞME
 * --------
 *   solve(request) → SolveResult
 *
 *   request = {
 *     model,             // resolveModels() çıktısındaki nesne
 *     systemPrompt,      // string
 *     userPrompt,        // string
 *     image,             // { base64, mimeType } | null
 *     schema,            // provider-agnostik JSON Schema
 *     temperature,       // number | null (null = sağlayıcı varsayılanı)
 *     maxOutputTokens,   // number
 *     signal,            // AbortSignal
 *   }
 *
 *   SolveResult = {
 *     ok,                // boolean
 *     rawText,           // modelin ürettiği ham metin (JSON string olmalı)
 *     parsed,            // JSON.parse edilmiş nesne | null
 *     usage: { input, output, reasoning, cachedInput },
 *     latencyMs,
 *     error,             // { kind, message, status } | null
 *     httpStatus,
 *   }
 *
 * Bu dosya `api/_lib/openai.js`'i İMPORT ETMEZ ve DEĞİŞTİRMEZ. Çalışan AI
 * Koç'un tek satırına bile dokunulmuyor; Faz 1'de bu katman `api/_lib/llm.js`
 * olarak terfi ettirilebilir.
 */

import { solveOpenAI } from './openai.mjs'
import { solveGoogle } from './gemini.mjs'
import { solveAnthropic } from './anthropic.mjs'

const ADAPTERS = {
  openai: solveOpenAI,
  google: solveGoogle,
  anthropic: solveAnthropic,
}

export const SUPPORTED_PROVIDERS = Object.keys(ADAPTERS)

/* ==================================================================
   HATA SINIFLANDIRMASI
   Yeniden denenebilir hatalar ile denenmemesi gerekenleri ayırmak,
   benchmark'ın bir anahtar hatası yüzünden 900 kez aynı 401'i almasını
   engeller (eval-ai-coach.mjs'te bizzat yaşanmış bir hata).
   ================================================================== */

export function classifyError(status, body = '') {
  if (status === 401 || status === 403) return 'auth'
  if (status === 404) return 'model_not_found'
  if (status === 429) {
    return /quota|billing|insufficient|credit/i.test(body) ? 'quota' : 'rate_limit'
  }
  if (status >= 500) return 'server'
  if (status === 400) {
    if (/schema|response_format|responseSchema|json/i.test(body)) return 'schema_rejected'
    if (/image|media|inline_data/i.test(body)) return 'image_rejected'
    return 'bad_request'
  }
  return 'unknown'
}

/** Bu hata sınıflarında yeniden denemek anlamsız — hemen vazgeç. */
const FATAL = new Set(['auth', 'model_not_found', 'quota', 'schema_rejected', 'bad_request'])

export function isFatal(kind) {
  return FATAL.has(kind)
}

/* ==================================================================
   ORTAK HTTP YARDIMCISI
   Zaman aşımı + iptal birleştirme. Adaptörler bunu kullanır.
   ================================================================== */

export async function httpJson(url, { method = 'POST', headers, body, signal, timeoutMs }) {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(new Error('timeout')), timeoutMs)

  if (signal) {
    if (signal.aborted) controller.abort()
    else signal.addEventListener('abort', () => controller.abort(), { once: true })
  }

  try {
    const response = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    const text = await response.text()

    if (!response.ok) {
      return {
        ok: false,
        status: response.status,
        // Gövde loglanır ama ASLA anahtar içerebilecek başlıklar loglanmaz.
        body: text.slice(0, 800),
      }
    }

    let json
    try {
      json = JSON.parse(text)
    } catch {
      return { ok: false, status: response.status, body: 'yanıt JSON değil: ' + text.slice(0, 300) }
    }

    return { ok: true, status: response.status, json }
  } catch (error) {
    const isTimeout = error?.name === 'AbortError' || /timeout/i.test(error?.message ?? '')
    return {
      ok: false,
      status: isTimeout ? 408 : 0,
      body: isTimeout ? 'timeout' : String(error?.message ?? error),
      network: true,
    }
  } finally {
    clearTimeout(timer)
  }
}

/* ==================================================================
   ANA GİRİŞ — yeniden deneme ve süre ölçümü burada
   ================================================================== */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

/**
 * Bir soruyu bir modele çözdürür.
 *
 * Süre ölçümü TÜM denemeleri kapsar mı? Hayır — `latencyMs` yalnızca
 * BAŞARILI denemenin süresidir. Rate limit yüzünden beklemeyi modelin
 * gecikmesi diye raporlamak yanıltıcı olurdu. Toplam duvar saati süresi
 * ayrıca `wallMs` olarak döner.
 */
export async function solve(request, { maxRetries = 3 } = {}) {
  const adapter = ADAPTERS[request.model.provider]
  if (!adapter) {
    return {
      ok: false,
      parsed: null,
      rawText: '',
      usage: emptyUsage(),
      latencyMs: 0,
      wallMs: 0,
      attempts: 0,
      error: { kind: 'unsupported_provider', message: `bilinmeyen sağlayıcı: ${request.model.provider}` },
    }
  }

  if (!request.model.apiKey) {
    return {
      ok: false,
      parsed: null,
      rawText: '',
      usage: emptyUsage(),
      latencyMs: 0,
      wallMs: 0,
      attempts: 0,
      error: { kind: 'auth', message: `${request.model.provider} için API anahtarı yok` },
    }
  }

  const wallStart = Date.now()
  let last = null

  for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
    const started = Date.now()
    const result = await adapter(request)
    result.latencyMs = Date.now() - started
    result.attempts = attempt
    result.wallMs = Date.now() - wallStart

    if (result.ok) return result

    last = result

    if (isFatal(result.error?.kind)) break
    if (attempt === maxRetries) break

    // Üstel geri çekilme + jitter. Rate limit'te sağlayıcıyı dövmek
    // benchmark'ı yavaşlatmaktan başka işe yaramaz.
    const backoff = Math.min(30_000, 1500 * 2 ** (attempt - 1)) + Math.random() * 1000
    await sleep(backoff)
  }

  last.wallMs = Date.now() - wallStart
  return last
}

export function emptyUsage() {
  return { input: 0, output: 0, reasoning: 0, cachedInput: 0 }
}

/**
 * Model bazen JSON'u ```json bloğu içine sarar ya da başına açıklama yazar.
 * Structured output zorlanmış olsa bile bu olabiliyor; kurtarmayı tek yerde
 * yapıyoruz ki her adaptör kendi versiyonunu uydurmasın.
 *
 * Kurtarma yapıldıysa bunu `recovered: true` ile bildiririz — çünkü
 * "structured output uyumu" başlı başına bir model kalite metriği.
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
