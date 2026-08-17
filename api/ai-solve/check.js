/**
 * POST /api/ai-solve/check
 *
 * "Çözümümü Kontrol Et" (§18, §38).
 *
 * Öğrenci kendi kâğıdının fotoğrafını yükler; sistem çözümü okur, İLK
 * hatalı adımı bulur, hatanın sebebini açıklar ve o adımdan itibaren
 * doğrusunu tahtaya derler.
 *
 * NEDEN DOĞRUDAN PRO MODEL
 * ------------------------
 * İki zor iş aynı anda: el yazısı okumak ve hatalı akıl yürütmeyi tespit
 * etmek. Ucuz modelle başlayıp yükseltme yapmak burada işe yaramaz —
 * yanlış teşhis, çözüm vermemekten daha zararlıdır. Öğrenciye "burada
 * hata yaptın" deyip aslında hata olmayan bir yeri göstermek güveni
 * doğrudan yok eder. Bu yüzden yönlendirici atlanır (bkz. engine.js >
 * checkStudentWork).
 *
 * Bu akış hız sınırında ana çözümle AYNI kotadan düşer.
 */

import { authenticate } from '../_lib/auth.js'
import { logSolveError, userMessage } from '../_lib/errors.js'
import { checkRateLimit, recordUsage } from '../_lib/ratelimit.js'
import { limitsForProfile, missingSolveConfig } from '../_lib/solve/config.js'
import { totalCost } from '../_lib/solve/cost.js'
import { checkStudentWork } from '../_lib/solve/engine.js'
import { GeminiError } from '../_lib/solve/gemini.js'
import { validatePath } from '../_lib/solve/image.js'
import { loadSession, recordEvent } from '../_lib/solve/persistence.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendError(res, 405, 'invalid_request')
  }

  const missing = missingSolveConfig()
  if (missing.length) {
    logSolveError('config', `eksik ortam değişkenleri: ${missing.join(', ')}`)
    return sendError(res, 503, 'solve_not_configured')
  }

  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)
  const { user, profile, supabase } = auth

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body

  // Öğrencinin çözüm fotoğrafı ZORUNLU; soru fotoğrafı isteğe bağlı
  // (oturumdan da gelebilir).
  const workPath = validatePath(body?.workPath, user.id)
  if (!workPath) return sendError(res, 400, 'solve_invalid_image')

  const sessionId = isUuid(body?.sessionId) ? body.sessionId : null

  let session = null
  if (sessionId) {
    session = await loadSession(supabase, user.id, sessionId)
    if (!session) return sendError(res, 404, 'solve_session_not_found')
  }

  // Soru görseli: ya istekle gelir ya oturumdan. İkisi de istemciden
  // gelen ham değere güvenmez — oturumdaki yol zaten bir kez doğrulanmış
  // olarak kaydedilmiştir.
  const questionPath = session?.image_path ?? validatePath(body?.questionPath, user.id)
  const questionText =
    session?.question_text ?? (typeof body?.text === 'string' ? body.text.trim().slice(0, 2000) : null)

  const limit = await checkRateLimit(supabase, user.id, {
    kind: 'solve',
    limits: limitsForProfile(profile),
  })
  if (!limit.allowed) return sendError(res, 429, limit.code)

  const startedAt = Date.now()
  const abortController = new AbortController()
  req.on?.('close', () => abortController.abort())

  try {
    const result = await checkStudentWork({
      supabase,
      questionPath,
      workPath,
      questionText,
      signal: abortController.signal,
    })

    const cost = totalCost([{ role: result.role, usage: result.usage }])

    await recordUsage(supabase, user.id, {
      kind: 'solve',
      model: result.modelId ?? null,
      prompt_tokens: result.usage?.input ?? null,
      completion_tokens: result.usage?.output ?? null,
    })

    if (session) {
      await recordEvent(supabase, user.id, session.id, {
        kind: 'check',
        answer: result.verdict ?? null,
        role: result.role,
        modelId: result.modelId,
        usage: result.usage,
        costUsd: cost.usd,
        durationMs: Date.now() - startedAt,
      })

      // Öğrencinin bu soruyu doğru çözüp çözmediği ve hangi hatayı
      // yaptığı — §19'daki performans alanları ve §20'deki AI Koç
      // sinyali buradan besleniyor.
      await supabase
        .from('ai_solution_sessions')
        .update({
          student_correct: result.status === 'ok' ? result.verdict === 'dogru' : null,
          error_type: result.firstError?.error_type ?? null,
        })
        .eq('id', session.id)
        .eq('student_id', user.id)
    }

    if (result.status === 'unreadable') {
      return res.status(200).json({ status: 'unreadable', issues: result.issues })
    }

    return res.status(200).json({
      status: 'ok',
      verdict: result.verdict,
      studentSteps: result.studentSteps,
      firstError: result.firstError
        ? {
            stepN: result.firstError.step_n,
            whatWentWrong: result.firstError.what_went_wrong,
            whyItHappened: result.firstError.why_it_happened,
            errorType: result.firstError.error_type,
          }
        : null,
      correction: result.correction,
      encouragement: result.encouragement,
    })
  } catch (error) {
    const code = error instanceof GeminiError ? error.code : 'unknown'
    logSolveError('check', error, { studentId: user.id })
    return sendError(res, 502, code)
  }
}

/* ================================================================== */

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

function isUuid(value) {
  return (
    typeof value === 'string' &&
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(value)
  )
}

function sendError(res, status, code) {
  return res.status(status).json({ error: { code, message: userMessage(code) } })
}
