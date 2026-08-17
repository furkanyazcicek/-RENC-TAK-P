/**
 * AI Soru Çözüm Merkezi — istemci tarafı API katmanı.
 *
 * Buradaki hiçbir fonksiyon Gemini'ye DOĞRUDAN gitmez; hepsi kendi
 * sunucumuzdaki `/api/ai-solve/*` uç noktalarına gider. GEMINI_API_KEY
 * tarayıcıya hiç ulaşmaz, paket çıktısında bulunmaz.
 *
 * Her istek, Supabase oturumundan alınan erişim jetonunu `Authorization`
 * başlığında taşır. Sunucu öğrencinin kim olduğunu YALNIZCA bu jetondan
 * belirler — gövdede öğrenci kimliği göndermeyiz, gönderilse de sunucu
 * dikkate almaz. (`src/lib/aiCoach.js` ile birebir aynı desen.)
 */

import { supabase } from './supabaseClient'

const BASE = '/api/ai-solve'

/** Kullanıcıya gösterilebilecek, teknik ayrıntı içermeyen hata. */
export class AISolveError extends Error {
  constructor(message, code) {
    super(message)
    this.name = 'AISolveError'
    this.code = code
  }
}

const GENERIC_ERROR =
  'Soru çözüm servisi şu anda yanıt veremiyor. Birkaç saniye sonra tekrar deneyebilirsin.'

async function authHeaders() {
  const { data } = await supabase.auth.getSession()
  const token = data?.session?.access_token
  if (!token) {
    throw new AISolveError(
      'Oturumun sona ermiş görünüyor. Sayfayı yenileyip tekrar giriş yapar mısın?',
      'unauthenticated'
    )
  }
  return { Authorization: `Bearer ${token}` }
}

/**
 * Sunucudan gelen hata gövdesini okur. Gövde okunamazsa (ör. fonksiyon
 * hiç çalışmadı, HTML döndü) genel mesaj kullanılır — ham HTML'i
 * kullanıcıya göstermek anlamsız olurdu.
 */
async function readError(response) {
  try {
    const data = await response.json()
    if (data?.error?.message) return new AISolveError(data.error.message, data.error.code)
  } catch {
    /* JSON değil */
  }
  if (response.status === 404) {
    return new AISolveError(
      'Soru çözüm servisi bulunamadı. Uygulama sunucusu çalışmıyor olabilir.',
      'not_found'
    )
  }
  return new AISolveError(GENERIC_ERROR, 'unknown')
}

/* ==================================================================
   ÇÖZÜM — akışlı (SSE)
   ================================================================== */

/**
 * Soruyu çözdürür. Aşamalar akış hâlinde gelir (§40).
 *
 * @param {object} params
 * @param {string?} params.imagePath   Yüklenmiş görselin depolama yolu
 * @param {string?} params.text        Metinle girilen soru
 * @param {string?} params.note        "Nerede takıldım" notu
 * @param {string}  params.source      'photo' | 'gallery' | 'text'
 * @param {object}  params.handlers    { onStage, onResult, onError }
 * @param {AbortSignal?} params.signal
 */
export async function solveQuestion({ imagePath, text, note, source = 'photo', handlers = {}, signal }) {
  const headers = await authHeaders()

  let response
  try {
    response = await fetch(`${BASE}/solve`, {
      method: 'POST',
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        imagePath: imagePath ?? null,
        text: text ?? null,
        note: note ?? null,
        source,
      }),
      signal,
    })
  } catch (error) {
    if (error?.name === 'AbortError') throw error
    throw new AISolveError(
      'Sunucuya ulaşılamadı. İnternet bağlantını kontrol edip tekrar dener misin?',
      'network'
    )
  }

  // Akış başlamadan reddedildiyse (401, 429, 503…) gövde JSON'dur.
  if (!response.ok || !response.body) {
    throw await readError(response)
  }

  await readSSE(response, (event, payload) => {
    switch (event) {
      case 'stage':
        handlers.onStage?.(payload.key, payload.text)
        break
      case 'result':
        handlers.onResult?.(payload)
        break
      case 'done':
        handlers.onDone?.(payload)
        break
      case 'error':
        handlers.onError?.(new AISolveError(payload.message ?? GENERIC_ERROR, payload.code))
        break
      default:
        break
    }
  })
}

/**
 * SSE çerçevelerini ayrıştırır. Biçim: "event: <ad>\ndata: <json>\n\n"
 * (`src/lib/aiCoach.js` içindeki ayrıştırıcının aynısı.)
 */
async function readSSE(response, dispatch) {
  const reader = response.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  const handleFrame = (frame) => {
    let event = 'message'
    const dataLines = []

    frame.split('\n').forEach((line) => {
      if (line.startsWith('event:')) event = line.slice(6).trim()
      else if (line.startsWith('data:')) dataLines.push(line.slice(5).trim())
    })

    if (!dataLines.length) return
    try {
      dispatch(event, JSON.parse(dataLines.join('\n')))
    } catch {
      /* bozuk çerçeve — akışı bozmadan atla */
    }
  }

  for (;;) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })

    // Çerçeveler boş satırla ayrılır; yarım kalan son çerçeveyi sakla.
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''
    frames.forEach((frame) => {
      if (frame.trim()) handleFrame(frame)
    })
  }

  if (buffer.trim()) handleFrame(buffer)
}

/* ==================================================================
   ETKİLEŞİMLER
   ================================================================== */

async function postJson(path, body, signal) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}${path}`, {
    method: 'POST',
    headers: { ...headers, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    signal,
  })
  if (!response.ok) throw await readError(response)
  return response.json()
}

/** "Bu işlemi neden yaptık?" — adımın kendi `why` alanı yetmediğinde. */
export function askWhy({ sessionId, stepIndex, signal }) {
  return postJson('/ask', { kind: 'why', sessionId, stepIndex }, signal)
}

/** "Burada takıldım" (§11). */
export function askStuck({ sessionId, stepIndex, signal }) {
  return postJson('/ask', { kind: 'stuck', sessionId, stepIndex }, signal)
}

/** Serbest takip sorusu (§36). */
export function askQuestion({ sessionId, stepIndex, question, signal }) {
  return postJson('/ask', { kind: 'chat', sessionId, stepIndex, question }, signal)
}

/** "Başka yöntem" (§12). */
export function askAlternative({ sessionId, signal }) {
  return postJson('/ask', { kind: 'alternative', sessionId }, signal)
}

/** "Çözümümü kontrol et" (§18, §38). */
export function checkMyWork({ sessionId, workPath, questionPath, text, signal }) {
  return postJson('/check', { sessionId, workPath, questionPath, text }, signal)
}

/* ==================================================================
   OTURUMLAR
   ================================================================== */

export async function listSolutions({ limit = 20, offset = 0 } = {}) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/sessions?limit=${limit}&offset=${offset}`, { headers })
  if (!response.ok) throw await readError(response)
  const data = await response.json()
  return data.sessions ?? []
}

export async function getSolution(id) {
  const headers = await authHeaders()
  const response = await fetch(`${BASE}/sessions?id=${encodeURIComponent(id)}`, { headers })
  if (!response.ok) throw await readError(response)
  const data = await response.json()
  return data.session
}

/** 👍 / 👎 (§42). */
export function sendFeedback({ sessionId, feedback, reason, note }) {
  return postJson('/sessions', { sessionId, feedback, reason, note })
}

/** "Bu soruyu ben doğru çözmüştüm / çözememiştim" (§19). */
export function reportSelfResult({ sessionId, studentCorrect }) {
  return postJson('/sessions', { sessionId, studentCorrect })
}

/** §42'deki beğenmeme sebepleri — sunucudaki liste ile aynı olmalı. */
export const FEEDBACK_REASONS = [
  { value: 'yanlis_cozum', label: 'Çözüm yanlış' },
  { value: 'soru_yanlis_okundu', label: 'Soruyu yanlış okudu' },
  { value: 'anlasilmadi', label: 'Anlamadım' },
  { value: 'cok_uzun', label: 'Çok uzun' },
  { value: 'cok_kisa', label: 'Çok kısa' },
  { value: 'diger', label: 'Başka' },
]
