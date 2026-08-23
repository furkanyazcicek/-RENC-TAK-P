/**
 * AI Koç — OpenAI istemcisi.
 *
 * Bağımlılık eklenmedi: Node 18+ ile gelen global `fetch` kullanılıyor.
 * Böylece `package.json` büyümüyor ve sunucusuz fonksiyonun soğuk başlama
 * (cold start) süresi artmıyor.
 *
 * API ANAHTARI YALNIZCA BURADA OKUNUR ve yalnızca giden isteğin
 * `Authorization` başlığına yazılır. Ne yanıt gövdesine, ne loglara, ne de
 * istemciye giden herhangi bir alana kopyalanmaz.
 */

import { config } from './config.js'
import { mapUpstreamStatus } from './errors.js'

/** Zaman aşımı olan hata — çağıran taraf `upstream_timeout` olarak eşler. */
export class UpstreamError extends Error {
  constructor(code, status) {
    super(`openai_${code}`)
    this.name = 'UpstreamError'
    this.code = code
    this.status = status
  }
}

async function callOpenAI(body, { signal } = {}) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), config.requestTimeoutMs)

  // Çağıranın iptali (kullanıcı sekmeyi kapattı) ile zaman aşımını birleştir.
  if (signal) {
    if (signal.aborted) controller.abort()
    else signal.addEventListener('abort', () => controller.abort(), { once: true })
  }

  try {
    const response = await fetch(`${config.openaiBaseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.openaiApiKey}`,
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    })

    if (!response.ok) {
      // Gövdeyi okuyup logluyoruz ama ASLA kullanıcıya iletmiyoruz.
      let detail = ''
      try {
        detail = (await response.text()).slice(0, 500)
      } catch {
        /* gövde okunamadı */
      }
      console.error(`[ai-coach:openai] HTTP ${response.status} ${detail}`)

      // OpenAI, "kredi bitti" durumunu da 429 ile bildirir — hız sınırıyla
      // aynı kod. Ama ikisi çok farklı: hız sınırı birkaç saniyede geçer,
      // kredi bitmesi kendiliğinden düzelmez. Ayırmazsak öğrenciye sonsuza
      // kadar "birkaç saniye sonra tekrar dene" dedirtmiş oluruz.
      const quotaExhausted = /insufficient_quota|credit_balance_exhausted|billing/i.test(detail)
      const code = quotaExhausted ? 'not_configured' : mapUpstreamStatus(response.status)

      throw new UpstreamError(code, response.status)
    }

    return response
  } catch (error) {
    clearTimeout(timeout)
    if (error instanceof UpstreamError) throw error
    if (error?.name === 'AbortError') throw new UpstreamError('upstream_timeout', 408)
    console.error('[ai-coach:openai] network', error?.message)
    throw new UpstreamError('upstream_error', 502)
  } finally {
    clearTimeout(timeout)
  }
}

/**
 * Akış (streaming) modunda bir tur çalıştırır.
 *
 * `onText` her metin parçasında çağrılır — kullanıcı cevabı yazılırken görür.
 * Araç çağrıları parça parça geldiği için `index` anahtarıyla biriktirilir;
 * OpenAI aynı çağrının adını ilk parçada, argümanlarını sonraki parçalarda
 * gönderir.
 *
 * Dönüş: { content, toolCalls, finishReason, usage }
 */
/**
 * Yeni nesil (gpt-5 / o-serisi) modeller Chat Completions'ta farklı
 * parametre bekler:
 *   • `max_tokens` yerine `max_completion_tokens`
 *   • `temperature` yalnızca varsayılan değerde kabul edilir
 *
 * Bunu ayırmazsak `AI_MODEL` değiştirildiği anda istek 400 döner ve
 * "modeli tek değişkenle değiştirebilirsin" sözü tutmaz.
 */
function isNextGenModel(model) {
  return /^(gpt-5|o1|o3|o4)/i.test(String(model))
}

function applyModelParams(body, model) {
  if (isNextGenModel(model)) {
    body.max_completion_tokens = config.maxOutputTokens
    // temperature bilerek gönderilmiyor — bu modeller yalnızca
    // varsayılanı kabul ediyor.
  } else {
    body.max_tokens = config.maxOutputTokens
    body.temperature = config.temperature
  }
  return body
}

export async function streamChat({ messages, tools, onText, signal }) {
  const body = applyModelParams(
    {
      model: config.model,
      messages,
      stream: true,
      // Kullanımı da akışın sonunda alalım — maliyet takibi için.
      stream_options: { include_usage: true },
    },
    config.model
  )

  if (tools?.length) {
    body.tools = tools
    body.tool_choice = 'auto'
    body.parallel_tool_calls = true
  }

  const response = await callOpenAI(body, { signal })

  const decoder = new TextDecoder()
  let buffer = ''
  let content = ''
  let finishReason = null
  let usage = null
  const toolCallsByIndex = new Map()

  for await (const chunk of response.body) {
    buffer += decoder.decode(chunk, { stream: true })

    // SSE çerçeveleri satır satır gelir; yarım kalan son satırı sakla.
    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''

    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed.startsWith('data:')) continue

      const payload = trimmed.slice(5).trim()
      if (payload === '[DONE]') continue

      let parsed
      try {
        parsed = JSON.parse(payload)
      } catch {
        continue // bozuk çerçeve — akışı bozmadan atla
      }

      if (parsed.usage) usage = parsed.usage

      const choice = parsed.choices?.[0]
      if (!choice) continue

      if (choice.finish_reason) finishReason = choice.finish_reason

      const delta = choice.delta
      if (!delta) continue

      if (delta.content) {
        content += delta.content
        onText?.(delta.content)
      }

      for (const call of delta.tool_calls ?? []) {
        const index = call.index ?? 0
        if (!toolCallsByIndex.has(index)) {
          toolCallsByIndex.set(index, { id: '', type: 'function', function: { name: '', arguments: '' } })
        }
        const acc = toolCallsByIndex.get(index)
        if (call.id) acc.id = call.id
        if (call.function?.name) acc.function.name += call.function.name
        if (call.function?.arguments) acc.function.arguments += call.function.arguments
      }
    }
  }

  return {
    content,
    toolCalls: [...toolCallsByIndex.values()].filter((c) => c.function.name),
    finishReason,
    usage,
  }
}

/**
 * Akışsız, tek seferlik kısa çağrı (sohbet başlığı üretmek gibi işler için).
 * Başarısız olursa `null` döner — çağıran taraf akışı bozmadan devam eder.
 */
export async function quickCompletion({ system, user, maxTokens = 24, model, temperature = 0.3 }) {
  try {
    // `model` verilmezse davranış eskisiyle birebir aynıdır. Parametre,
    // ders içeriği üretimi gibi daha güçlü model isteyen işler için var:
    // sohbet başlığı üretmekle bir biyoloji bölümü yazmak aynı modeli
    // hak etmiyor ve ikisini tek değişkene bağlamak ya kaliteyi ya
    // maliyeti feda ediyordu.
    const selectedModel = model || config.utilityModel
    const body = {
      model: selectedModel,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: user },
      ],
    }

    // streamChat ile aynı ayrım — yardımcı model de değiştirilebilir olmalı.
    if (isNextGenModel(selectedModel)) {
      body.max_completion_tokens = maxTokens
    } else {
      body.max_tokens = maxTokens
      body.temperature = temperature
    }

    const response = await callOpenAI(body)
    const data = await response.json()
    const text = data.choices?.[0]?.message?.content?.trim()
    return text || null
  } catch {
    return null
  }
}
