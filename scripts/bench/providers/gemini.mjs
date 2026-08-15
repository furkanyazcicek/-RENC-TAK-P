/**
 * Google Gemini adaptörü — generateContent.
 *
 * İKİ SAĞLAYICI FARKI BURADA YUTULUYOR
 * ------------------------------------
 * 1. ŞEMA DİYALEKTİ. Gemini'nin `responseSchema` alanı tam JSON Schema
 *    değil, OpenAPI 3.0'ın bir alt kümesi. `additionalProperties`, `$schema`,
 *    `const`, `strict` gibi anahtarları REDDEDER (400 döner). Aşağıdaki
 *    `toGeminiSchema` bunları ayıklar.
 *
 *    Dikkat: bu bir "prompt ayarlaması" DEĞİLDİR. Görev tanımı ve alan
 *    kümesi aynı kalıyor; yalnızca taşıma biçimi çevriliyor. Sağlayıcı
 *    lehine görev değiştirmek yasak (bkz. providers/index.mjs başlığı).
 *
 * 2. TOKEN MUHASEBESİ. Gemini düşünme token'larını `thoughtsTokenCount`
 *    olarak ayrı raporluyor ve bunlar `candidatesTokenCount` içinde
 *    OLMAYABİLİR. İkisini toplamazsak maliyeti olduğundan düşük gösteririz.
 *
 * Anahtar `x-goog-api-key` başlığına yazılır — URL'ye DEĞİL. URL'ye
 * yazılırsa proxy loglarına ve hata mesajlarına sızar.
 */

import { httpJson, classifyError, parseJsonLoose, emptyUsage } from './index.mjs'

const BASE =
  process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta'

/** Gemini'nin `responseSchema` alanının kabul ETMEDİĞİ anahtarlar. */
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
])

/**
 * JSON Schema → Gemini şeması.
 *
 * `propertyOrdering` eklenmesinin sebebi: Gemini alan sırasını serbest
 * bıraktığında bazen `answer`ı `steps`ten ÖNCE üretiyor, yani cevabı
 * çözümden önce yazıyor. Bu, zincirleme akıl yürütmeyi kırıyor ve
 * doğruluğu düşürüyor. Sırayı sabitlemek prompt değişikliği değil,
 * şemanın zaten ifade ettiği sıranın sağlayıcıya bildirilmesidir.
 */
export function toGeminiSchema(node) {
  if (Array.isArray(node)) return node.map(toGeminiSchema)
  if (node === null || typeof node !== 'object') return node

  const out = {}
  for (const [key, value] of Object.entries(node)) {
    if (UNSUPPORTED.has(key)) continue
    out[key] = toGeminiSchema(value)
  }

  if (out.type === 'object' && out.properties) {
    out.propertyOrdering = Object.keys(out.properties)
  }

  return out
}

export async function solveGoogle(request) {
  const { model, systemPrompt, userPrompt, image, schema, temperature, maxOutputTokens, signal, timeoutMs } = request

  const parts = [{ text: userPrompt }]
  if (image) {
    parts.push({ inline_data: { mime_type: image.mimeType, data: image.base64 } })
  }

  const generationConfig = {
    responseMimeType: 'application/json',
    responseSchema: toGeminiSchema(schema),
    maxOutputTokens,
  }
  if (temperature !== null && temperature !== undefined) {
    generationConfig.temperature = temperature
  }

  const body = {
    systemInstruction: { parts: [{ text: systemPrompt }] },
    contents: [{ role: 'user', parts }],
    generationConfig,
  }

  const response = await httpJson(
    `${BASE}/models/${encodeURIComponent(model.id)}:generateContent`,
    {
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': model.apiKey,
      },
      body,
      signal,
      timeoutMs,
    }
  )

  if (!response.ok) {
    return {
      ok: false,
      parsed: null,
      rawText: '',
      usage: emptyUsage(),
      httpStatus: response.status,
      error: {
        kind: classifyError(response.status, response.body),
        message: response.body,
        status: response.status,
      },
    }
  }

  const candidate = response.json.candidates?.[0]
  const rawText = (candidate?.content?.parts ?? [])
    .map((p) => p.text ?? '')
    .join('')

  const { value, recovered } = parseJsonLoose(rawText)

  const u = response.json.usageMetadata ?? {}
  const thoughts = u.thoughtsTokenCount ?? 0

  return {
    ok: true,
    parsed: value,
    rawText,
    schemaRecovered: recovered,
    truncated: candidate?.finishReason === 'MAX_TOKENS',
    usage: {
      input: u.promptTokenCount ?? 0,
      // Düşünme token'ları faturalanan çıktıya dahildir; ayrıca da
      // raporlanır ki "bu modelin maliyeti neden yüksek" sorusu
      // cevaplanabilsin.
      output: (u.candidatesTokenCount ?? 0) + thoughts,
      reasoning: thoughts,
      cachedInput: u.cachedContentTokenCount ?? 0,
    },
    httpStatus: response.status,
    error: null,
  }
}
