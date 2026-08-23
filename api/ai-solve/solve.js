/**
 * POST /api/ai-solve/solve
 *
 * AI Soru Çözüm Merkezi'nin ana uç noktası. Sunucu tarafında çalışır;
 * GEMINI_API_KEY bu süreçten dışarı ÇIKMAZ.
 *
 * AKIŞ
 *  1. Yapılandırma kontrolü
 *  2. JWT doğrula → öğrenciyi belirle (istemciden gelen kimliğe güvenilmez)
 *  3. Girdi doğrula (görsel yolu ÖĞRENCİNİN KENDİ klasöründe mi)
 *  4. Hız sınırı
 *  5. Motoru çalıştır, aşamaları SSE ile bildir
 *  6. Oturumu kaydet
 *
 * YANIT BİÇİMİ: Server-Sent Events (`api/ai-coach/chat.js` ile aynı desen)
 *   stage  → { key, text }        gerçek işlem aşaması (§40)
 *   result → { … }                çözüm / okunamadı / reddedildi
 *   error  → { code, message }    kullanıcı dostu; teknik ayrıntı içermez
 *
 * NEDEN SSE: çözüm 10-40 saniye sürebiliyor. Tek bir JSON beklemek, o süre
 * boyunca öğrenciye dönen bir çark göstermek demek. SSE ile "Soruyu
 * okuyorum → Konusunu belirliyorum → Çözüyorum" satırları GERÇEK aşamalara
 * bağlı olarak akıyor (§40: sahte ilerleme gösterme).
 */

import { authenticate } from '../_lib/auth.js'
import { logSolveError, userMessage } from '../_lib/errors.js'
import { checkRateLimit, recordUsage } from '../_lib/ratelimit.js'
import { limitsForProfile, missingSolveConfig, solveConfig } from '../_lib/solve/config.js'
import { solveQuestion } from '../_lib/solve/engine.js'
import { GeminiError } from '../_lib/solve/gemini.js'
import { validatePath } from '../_lib/solve/image.js'
import { saveSession, sessionRowFromResult } from '../_lib/solve/persistence.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendJsonError(res, 405, 'invalid_request')
  }

  /* ---------- 0) Yapılandırma ---------- */
  const missing = missingSolveConfig()
  if (missing.length) {
    logSolveError('config', `eksik ortam değişkenleri: ${missing.join(', ')}`)
    return sendJsonError(res, 503, 'solve_not_configured')
  }

  /* ---------- 1) Kimlik ---------- */
  const auth = await authenticate(req)
  if (!auth.ok) return sendJsonError(res, auth.status, auth.code)
  const { user, profile, supabase } = auth

  /* ---------- 2) Girdi ---------- */
  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body

  const text = typeof body?.text === 'string' ? body.text.trim() : ''
  const studentNote = typeof body?.note === 'string' ? body.note.trim().slice(0, 300) : ''
  const source = ['photo', 'gallery', 'text', 'pdf'].includes(body?.source) ? body.source : 'photo'

  if (text.length > solveConfig.maxQuestionChars) {
    return sendJsonError(res, 400, 'solve_question_too_long')
  }

  // GÖRSEL YOLU DOĞRULAMASI — güvenliğin can alıcı noktası.
  // `validatePath` yolun `ai-solve/<bu kullanıcının id'si>/` ile
  // başladığını doğrular. Bu olmadan bir öğrenci başkasının yüklediği
  // görseli kendi oturumunda çözdürebilirdi.
  const rawPath = body?.imagePath
  const imagePath = rawPath ? validatePath(rawPath, user.id) : null
  if (rawPath && !imagePath) {
    logSolveError('path', 'geçersiz görsel yolu', { studentId: user.id })
    return sendJsonError(res, 400, 'solve_invalid_image')
  }

  if (!imagePath && !text) {
    return sendJsonError(res, 400, 'solve_no_input')
  }

  /* ---------- 3) Hız sınırı ---------- */
  const limit = await checkRateLimit(supabase, user.id, {
    kind: 'solve',
    limits: limitsForProfile(profile),
  })
  if (!limit.allowed) return sendJsonError(res, 429, limit.code)

  /* ---------- 4) SSE başlat ---------- */
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    // Ara katmanların (proxy) akışı tamponlamasını engeller.
    'X-Accel-Buffering': 'no',
  })
  res.flushHeaders?.()

  const send = (event, data) => {
    if (res.writableEnded) return
    res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`)
  }

  // İstemci bağlantıyı kapatırsa Gemini çağrısını da iptal et — boşa
  // token yakmayalım (`api/ai-coach/chat.js` ile aynı davranış).
  const abortController = new AbortController()
  req.on?.('close', () => abortController.abort())

  try {
    // Öğrencinin hedef sınavı konu eşleştirmesini keskinleştirir (TYT
    // Türev ≠ AYT Türev). AYRI SORGU olarak alınıyor çünkü bu kolonlar
    // `migration_student_exam_profile.sql` ile geliyor ve o göç
    // çalıştırılmamışsa `select` hata verir. Hata yutulur, eşleştirme
    // biraz daha genel yapılır — akış durmaz.
    const examType = await readTargetExam(supabase, user.id)

    const result = await solveQuestion({
      supabase,
      userId: user.id,
      examType,
      text: text || null,
      imagePaths: imagePath ? [imagePath] : [],
      studentNote: studentNote || null,
      onStage: (key, message) => send('stage', { key, text: message }),
      signal: abortController.signal,
    })

    /* ---------- 5) Kaydet ---------- */
    // Kayıt BAŞARISIZ OLSA BİLE çözüm gösterilir (bkz. persistence.js).
    const row = sessionRowFromResult(result, {
      source,
      imagePath,
      questionText: text || null,
      studentNote: studentNote || null,
    })
    const saved = await saveSession(supabase, user.id, row)

    // Hız sınırı sayacı: yalnızca gerçekten model çağrısı yapıldığında.
    await recordUsage(supabase, user.id, {
      kind: 'solve',
      model: result.modelId ?? null,
      prompt_tokens: result.telemetry?.inputTokens ?? null,
      completion_tokens: result.telemetry?.outputTokens ?? null,
    })

    send('result', toClientResult(result, saved))
    send('done', { sessionId: saved?.id ?? null })
  } catch (error) {
    const code = error instanceof GeminiError ? error.code : 'unknown'
    // Ham hata detayı YALNIZCA sunucu loguna. Kullanıcı sade cümle görür.
    logSolveError('solve', error, { studentId: user.id, detail: error?.detail })
    send('error', { code, message: userMessage(code) })
  } finally {
    if (!res.writableEnded) res.end()
  }
}

/* ================================================================== */

/**
 * Motor çıktısından İSTEMCİYE GİDEN nesneyi üretir.
 *
 * BURADA NE YOKSA İSTEMCİDE DE YOKTUR. Bilinçli olarak dışarıda bırakılan
 * alanlar: `routing_log`, model kimliği, token sayıları, maliyet,
 * doğrulama iddialarının ifadeleri. Bunlar iç işleyiş bilgisidir; §3
 * "öğrencinin ekranında teknik model detaylarını göstermek zorunda
 * değilsin" ve §26 "fiyatları frontend'e koyma" bunu istiyor.
 */
function toClientResult(result, saved) {
  if (result.status === 'unreadable') {
    return {
      status: 'unreadable',
      // Enum'dan çevrilmiş, öğrenciye NE YAPACAĞINI söyleyen cümleler.
      issues: result.issues,
      sessionId: saved?.id ?? null,
    }
  }

  if (result.status === 'refused') {
    return {
      status: 'refused',
      // Gerekçenin kendisi teknik ("güven 0.31 < 0.4"); öğrenciye
      // gösterilmez, yerine sabit ve dürüst bir cümle gider.
      message: userMessage('solve_low_confidence'),
      sessionId: saved?.id ?? null,
    }
  }

  const { solution, board, topic } = result

  return {
    status: 'ok',
    sessionId: saved?.id ?? null,
    board,
    question: {
      text: solution.reading?.question_text ?? null,
      choices: solution.reading?.choices ?? [],
      figureDescription: solution.reading?.figure_description ?? null,
    },
    meta: {
      subject: topic.subject,
      topic: topic.canonicalTopic ?? topic.topic,
      subtopic: topic.subtopic,
      difficulty: solution.analysis?.difficulty ?? null,
      goal: solution.analysis?.goal ?? null,
      givens: solution.analysis?.givens ?? [],
      unknowns: solution.analysis?.unknowns ?? [],
      concepts: solution.analysis?.required_concepts ?? [],
      strategy: solution.analysis?.strategy ?? null,
    },
    help: {
      commonMistake: solution.student_help?.common_mistake ?? null,
      keyConcept: solution.student_help?.key_concept ?? null,
      shortTip: solution.student_help?.short_tip ?? null,
      wrongChoices: solution.student_help?.wrong_choices ?? [],
    },
    // Doğrulamanın SONUCU gösterilir (öğrenci "kontrol edildi mi"
    // bilmeli), iddiaların kendisi gösterilmez.
    verification: {
      status: result.verification?.status ?? null,
      selfCheck: solution.verification?.self_check ?? null,
      unitCheck: solution.verification?.unit_check ?? null,
      sanityCheck: solution.verification?.sanity_check ?? null,
      notes: solution.verification?.ambiguity_notes ?? [],
    },
  }
}

async function readTargetExam(supabase, userId) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('target_exam')
      .eq('id', userId)
      .maybeSingle()
    if (error) return null
    return data?.target_exam ?? null
  } catch {
    return null
  }
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function sendJsonError(res, status, code) {
  return res.status(status).json({ error: { code, message: userMessage(code) } })
}
