/**
 * POST /api/ai-solve/ask
 *
 * Çözüm gösterildikten SONRAKİ etkileşimler (§10, §11, §12, §36):
 *
 *   kind: 'why'          → "Bu işlemi neden yaptık?" derinleştirme
 *   kind: 'stuck'        → "Burada takıldım"
 *   kind: 'chat'         → serbest takip sorusu
 *   kind: 'alternative'  → "Başka yöntem"
 *
 * DÖRT AKIŞ TEK UÇ NOKTADA. Sebep pratik: Vercel'de `/api` altındaki her
 * dosya ayrı bir sunucusuz fonksiyondur ve plan başına fonksiyon limiti
 * vardır. Dördü de aynı kimlik doğrulama, aynı hız sınırı ve aynı oturum
 * yüklemesini paylaşıyor; ayırmak dört kopya ortak kod demekti.
 *
 * MALİYET KARARI (§26, §36)
 * -------------------------
 * SORU GÖRSELİ BURAYA HİÇ GELMEZ. Bağlam olarak ilk çözümde modelin
 * kendi okuduğu soru metni ve ilgili adımlar kullanılıyor. Görsel token'ı
 * en pahalı girdidir; öğrencinin sorduğu her "neden"de yeniden ödemek
 * tek bir sorunun maliyetini 5-10 katına çıkarırdı.
 *
 * Ayrıca "Neden?" düğmesi ÇOĞU ZAMAN BU UÇ NOKTAYA HİÇ GELMEZ: her adımın
 * gerekçesi ilk çözümde `why` alanında üretiliyor ve istemcide anında
 * gösteriliyor. Buraya yalnızca öğrenci "daha fazla açıkla" derse gelinir.
 */

import { authenticate } from '../_lib/auth.js'
import { logSolveError, userMessage } from '../_lib/errors.js'
import { checkRateLimit, recordUsage } from '../_lib/ratelimit.js'
import { limitsForProfile, missingSolveConfig, solveConfig } from '../_lib/solve/config.js'
import { alternativeSolution, explainStep } from '../_lib/solve/engine.js'
import { GeminiError } from '../_lib/solve/gemini.js'
import { loadSession, recordEvent } from '../_lib/solve/persistence.js'
import { totalCost } from '../_lib/solve/cost.js'

const KINDS = ['why', 'stuck', 'chat', 'alternative']

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendError(res, 405, 'invalid_request')
  }

  const missing = missingSolveConfig()
  if (missing.length) {
    logSolveError('config', `eksik ortam değişkenleri: ${missing.join(', ')}`)
    return sendError(res, 503, 'not_configured')
  }

  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)
  const { user, profile, supabase } = auth

  /* ---------- Girdi ---------- */
  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body

  const kind = KINDS.includes(body?.kind) ? body.kind : null
  if (!kind) return sendError(res, 400, 'invalid_request')

  if (!isUuid(body?.sessionId)) return sendError(res, 400, 'invalid_request')

  const question = typeof body?.question === 'string' ? body.question.trim() : ''
  if (kind === 'chat' && !question) return sendError(res, 400, 'invalid_request')
  if (question.length > solveConfig.maxAskChars) {
    return sendError(res, 400, 'solve_ask_too_long')
  }

  const stepIndex = Number.isInteger(body?.stepIndex) && body.stepIndex >= 0 ? body.stepIndex : null
  if ((kind === 'why' || kind === 'stuck') && stepIndex === null) {
    return sendError(res, 400, 'invalid_request')
  }

  /* ---------- Hız sınırı ---------- */
  // Takip soruları ana çözümden ucuzdur ama bedava değildir; aynı kotadan
  // düşerler. Ayrı ve gevşek bir kota açmak, kotayı buradan tüketip
  // sistemi bedava kullanmanın kapısını açardı.
  const limit = await checkRateLimit(supabase, user.id, {
    kind: 'solve',
    limits: limitsForProfile(profile),
  })
  if (!limit.allowed) return sendError(res, 429, limit.code)

  /* ---------- Oturum ---------- */
  // Oturum ÖĞRENCİNİN KENDİ JWT'siyle okunur; başkasının oturumu RLS
  // tarafından zaten döndürülmez, ek olarak `student_id` filtresi de var.
  const session = await loadSession(supabase, user.id, body.sessionId)
  if (!session) return sendError(res, 404, 'solve_session_not_found')

  if (session.status !== 'ok' || !session.board?.steps?.length) {
    return sendError(res, 400, 'solve_session_not_found')
  }

  if ((session.help_requested ?? 0) >= solveConfig.maxAsksPerSession) {
    return sendError(res, 429, 'solve_too_many_asks')
  }

  if (stepIndex !== null && stepIndex >= session.board.steps.length) {
    return sendError(res, 400, 'solve_step_not_found')
  }

  /* ---------- Çalıştır ---------- */
  const startedAt = Date.now()
  const abortController = new AbortController()
  req.on?.('close', () => abortController.abort())

  try {
    if (kind === 'alternative') {
      const result = await alternativeSolution({ session, signal: abortController.signal })
      const cost = totalCost([{ role: result.role, usage: result.usage }])

      await recordEvent(supabase, user.id, session.id, {
        kind: 'alternative',
        answer: result.methodName ?? null,
        role: result.role,
        modelId: result.modelId,
        usage: result.usage,
        costUsd: cost.usd,
        durationMs: Date.now() - startedAt,
      })
      await recordUsage(supabase, user.id, {
        kind: 'solve',
        model: result.modelId ?? null,
        prompt_tokens: result.usage?.input ?? null,
        completion_tokens: result.usage?.output ?? null,
      })

      if (!result.hasAlternative) {
        return res.status(200).json({
          hasAlternative: false,
          message: userMessage('solve_no_alternative'),
        })
      }

      return res.status(200).json({
        hasAlternative: true,
        methodName: result.methodName,
        whyUseful: result.whyUseful,
        board: result.board,
      })
    }

    const result = await explainStep({
      session,
      stepIndex: stepIndex ?? 0,
      kind,
      question,
      signal: abortController.signal,
    })

    await recordEvent(supabase, user.id, session.id, {
      kind,
      stepIndex,
      question: question || null,
      answer: result.answer,
      role: result.role,
      modelId: result.modelId,
      usage: result.usage,
      costUsd: result.cost?.usd ?? null,
      durationMs: Date.now() - startedAt,
    })
    await recordUsage(supabase, user.id, {
      kind: 'solve',
      model: result.modelId ?? null,
      prompt_tokens: result.usage?.input ?? null,
      completion_tokens: result.usage?.output ?? null,
    })

    // Model kimliği, token sayısı ve maliyet İSTEMCİYE GİTMEZ.
    return res.status(200).json({
      answer: result.answer,
      math: result.math,
      followUp: result.followUp,
    })
  } catch (error) {
    const code = error instanceof GeminiError ? error.code : 'unknown'
    logSolveError('ask', error, { studentId: user.id, kind })
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
