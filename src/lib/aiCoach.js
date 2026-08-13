/**
 * AI Koç — istemci tarafı API katmanı.
 *
 * Buradaki hiçbir fonksiyon OpenAI'a DOĞRUDAN gitmez; hepsi kendi
 * sunucumuzdaki `/api/ai-coach/*` uç noktalarına gider. OpenAI anahtarı
 * tarayıcıya hiç ulaşmaz.
 *
 * Her istek, Supabase oturumundan alınan erişim jetonunu `Authorization`
 * başlığında taşır. Sunucu öğrencinin kim olduğunu YALNIZCA bu jetondan
 * belirler — gövdede öğrenci kimliği göndermeyiz, gönderilse de sunucu
 * dikkate almaz.
 */

import { supabase } from './supabaseClient'

const BASE = '/api/ai-coach'

/** Kullanıcıya gösterilebilecek, teknik ayrıntı içermeyen hata. */
export class AICoachError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'AICoachError'
    this.code = code
  }
}

const GENERIC_ERROR = 'AI Koç şu anda yanıt veremiyor. Birkaç saniye sonra tekrar deneyebilirsin.'

async function authHeaders() {
  const { data } = await supabase.auth.getSession()
  const token = data?.session?.access_token
  if (!token) {
    throw new AICoachError(
      'Oturumun sona ermiş görünüyor. Sayfayı yenileyip tekrar giriş yapar mısın?',
      'unauthenticated'
    )
  }
  return { Authorization: `Bearer ${token}` }
}

/**
 * Sunucudan gelen hata gövdesini okur.
 * Gövde okunamazsa (ör. fonksiyon hiç çalışmadı, HTML döndü) genel mesaj
 * kullanılır — ham HTML'i kullanıcıya göstermek anlamsız olurdu.
 */
async function readError(response) {
  try {
    const data = await response.json()
    if (data?.error?.message) return new AICoachError(data.error.message, data.error.code)
  } catch {
    /* JSON değil */
  }
  if (response.status === 404) {
    return new AICoachError(
      'AI Koç servisi bulunamadı. Uygulama sunucusu çalışmıyor olabilir.',
      'not_found'
    )
  }
  return new AICoachError(GENERIC_ERROR, 'unknown')
}

/* ==================================================================
   SOHBET — akışlı (streaming)
   ================================================================== */

/**
 * Mesaj gönderir ve cevabı parça parça alır.
 *
 * @param {object}   params
 * @param {string}   params.message
 * @param {string?}  params.conversationId
 * @param {object}   params.handlers  { onMeta, onStatus, onDelta, onActions, onTitle, onDone, onError }
 * @param {AbortSignal?} params.signal
 */
export async function sendMessage({ message, conversationId, handlers = {}, signal }) {
  const headers = await authHeaders()

  let response
  try {
    response = await fetch(`${BASE}/chat`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, conversationId: conversationId ?? null }),
      signal,
    })
  } catch (error) {
    if (error?.name === 'AbortError') throw error
    throw new AICoachError(
      'Sunucuya ulaşılamadı. İnternet bağlantını kontrol edip tekrar dener misin?',
      'network'
    )
  }

  // Akış başlamadan reddedildiyse (401, 429, 503…) gövde JSON'dur.
  if (!response.ok || !response.body) {
    throw await readError(response)
  }

  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  // SSE çerçevesi: "event: <ad>\ndata: <json>\n\n"
  const dispatch = (frame) => {
    let event = 'message'
    const dataLines = []

    frame.split('\n').forEach((line) => {
      if (line.startsWith('event:')) event = line.slice(6).trim()
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
    })

    if (!dataLines.length) return
    let payload
    try {
      payload = JSON.parse(dataLines.join('\n'))
    } catch {
      return
    }

    switch (event) {
      case 'meta':
        handlers.onMeta?.(payload)
        break
      case 'status':
        handlers.onStatus?.(payload.text)
        break
      case 'delta':
        handlers.onDelta?.(payload.text)
        break
      case 'actions':
        handlers.onActions?.(payload.actions ?? [])
        break
      case 'title':
        handlers.onTitle?.(payload.title)
        break
      case 'done':
        handlers.onDone?.(payload)
        break
      case 'error':
        handlers.onError?.(new AICoachError(payload.message ?? GENERIC_ERROR, payload.code))
        break
      default:
        break
    }
  }

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })

    // Çerçeveler boş satırla ayrılır; yarım kalan son çerçeveyi sakla.
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''
    frames.forEach((frame) => {
      if (frame.trim()) dispatch(frame)
    })
  }

  if (buffer.trim()) dispatch(buffer)
}

/* ==================================================================
   SOHBET GEÇMİŞİ
   ================================================================== */

export async function listConversations() {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/conversations`, { headers })
  if (!response.ok) throw await readError(response)
  const data = await response.json()
  return data.conversations ?? []
}

export async function getConversation(id) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/conversations?id=${encodeURIComponent(id)}`, { headers })
  if (!response.ok) throw await readError(response)
  return response.json()
}

export async function deleteConversation(id) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/conversations?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
    headers,
  })
  if (!response.ok) throw await readError(response)
  return true
}

export async function deleteAllConversations() {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/conversations?all=1`, { method: 'DELETE', headers })
  if (!response.ok) throw await readError(response)
  return true
}

/* ==================================================================
   AKSİYONLAR VE PANEL KARTI
   ================================================================== */

/** Kullanıcı aksiyon kartını onayladığında gerçek yazma işlemini tetikler. */
export async function runAction(action) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/action`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify({ action }),
  })
  if (!response.ok) throw await readError(response)
  return response.json()
}

/** Panel kartının verisi (OpenAI çağrısı yapmaz — tamamen kendi verimizden). */
export async function getBriefing() {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/briefing`, { headers })
  if (!response.ok) throw await readError(response)
  return response.json()
}

/* ==================================================================
   HAZIR SORULAR
   ================================================================== */

/**
 * Hızlı aksiyon butonları. Her biri GERÇEK bir AI isteği gönderir —
 * hiçbiri sabit/hazır cevap göstermez.
 */
export const QUICK_PROMPTS = [
  { label: 'Bugün ne çalışmalıyım?', prompt: 'Bugün ne çalışmalıyım? Verilerime göre öner.' },
  {
    label: 'Bu haftaki performansım',
    prompt: 'Bu haftaki performansımı analiz et. Geçen haftayla karşılaştır.',
  },
  {
    label: 'Çalışma planı oluştur',
    prompt: 'Önümüzdeki 7 gün için bana gerçekçi bir çalışma planı oluştur.',
  },
  { label: 'Zayıf konularım', prompt: 'Zayıf konularımı göster ve nereden başlamam gerektiğini söyle.' },
  {
    label: 'Sıradaki konum ne?',
    prompt:
      'Müfredat sırasına göre şu an hangi konuyu çalışmalıyım? Ön koşullarımı kontrol et ve neden o konu olduğunu açıkla.',
  },
  {
    label: 'Son denememi analiz et',
    prompt: 'Son denememi ders ders analiz et. Nerede net kaybettim?',
  },
  {
    label: 'Sınavıma göre program',
    prompt: 'Hazırlandığım sınava göre bu haftaya bir çalışma programı çıkar.',
  },
  { label: 'Nerede eksik kaldım?', prompt: 'Son bir ayda nerede eksik kaldım? Somut örneklerle anlat.' },
]
