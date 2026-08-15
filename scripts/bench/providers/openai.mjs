/**
 * OpenAI adaptörü — Chat Completions.
 *
 * NEDEN Chat Completions, Responses API değil?
 * Mevcut `api/_lib/openai.js` de Chat Completions kullanıyor; aynı yüzeyde
 * kalmak Faz 1'de bu katmanı terfi ettirmeyi kolaylaştırıyor. Reasoning
 * token muhasebesi Chat Completions'ta da veriliyor
 * (`usage.completion_tokens_details.reasoning_tokens`) — maliyet ölçümü
 * için ihtiyacımız olan tek şey buydu.
 *
 * Anahtar YALNIZCA `Authorization` başlığına yazılır; yanıta, loga veya
 * sonuç dosyasına kopyalanmaz.
 */

import { httpJson, classifyError, parseJsonLoose, emptyUsage } from './index.mjs'

const BASE = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1'

/**
 * Reasoning ailesindeki modeller `max_tokens` ve serbest `temperature`
 * kabul etmiyor. `api/_lib/openai.js:98` içindeki `isNextGenModel` ile
 * aynı ayrım — kopyalanmadı, aynı gerekçeyle yeniden yazıldı (benchmark
 * `api/`'yi import etmiyor).
 */
function isReasoningModel(id) {
  return /^(gpt-5|o1|o3|o4)/i.test(String(id))
}

export async function solveOpenAI(request) {
  const { model, systemPrompt, userPrompt, image, schema, temperature, maxOutputTokens, signal, timeoutMs } = request

  const content = [{ type: 'text', text: userPrompt }]

  if (image) {
    content.push({
      type: 'image_url',
      image_url: {
        url: `data:${image.mimeType};base64,${image.base64}`,
        // "high" olmadan model küçük yazıları ve şekil detaylarını kaçırıyor.
        // Bu bir maliyet kararı: yüksek çözünürlük daha çok girdi token'ı
        // demek, ama sınav sorusunu düşük çözünürlükte okutmak benchmark'ı
        // anlamsız kılar.
        detail: 'high',
      },
    })
  }

  const body = {
    model: model.id,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content },
    ],
    response_format: {
      type: 'json_schema',
      json_schema: {
        name: 'solution',
        strict: true,
        schema,
      },
    },
  }

  if (isReasoningModel(model.id)) {
    body.max_completion_tokens = maxOutputTokens
    // temperature bilerek gönderilmiyor — bu modeller varsayılan dışını
    // reddediyor ve 400 dönüyor.
  } else {
    body.max_tokens = maxOutputTokens
    if (temperature !== null && temperature !== undefined) body.temperature = temperature
  }

  const response = await httpJson(`${BASE}/chat/completions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${model.apiKey}`,
    },
    body,
    signal,
    timeoutMs,
  })

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

  const choice = response.json.choices?.[0]
  const rawText = choice?.message?.content ?? ''
  const { value, recovered } = parseJsonLoose(rawText)

  const u = response.json.usage ?? {}

  return {
    ok: true,
    parsed: value,
    rawText,
    schemaRecovered: recovered,
    // Model token tavanına çarparak kesildiyse çözüm yarımdır; bunu
    // "yanlış cevap" diye raporlamak modele haksızlık olur, ayrı sayılır.
    truncated: choice?.finish_reason === 'length',
    usage: {
      input: u.prompt_tokens ?? 0,
      output: u.completion_tokens ?? 0,
      reasoning: u.completion_tokens_details?.reasoning_tokens ?? 0,
      cachedInput: u.prompt_tokens_details?.cached_tokens ?? 0,
    },
    httpStatus: response.status,
    error: null,
  }
}
