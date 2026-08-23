/**
 * /api/ai-solve/sessions
 *
 *   GET  ?id=<uuid>   → tek çözüm oturumu (tahtasıyla birlikte)
 *   GET               → çözüm geçmişi (özet liste)
 *   POST              → geri bildirim (§42) veya öz-değerlendirme (§19)
 *
 * BU UÇ NOKTA GEMINI'YE HİÇ GİTMEZ. Tamamen kendi veritabanımızdan
 * okur/yazar; bu yüzden hız sınırı da uygulanmaz (`api/ai-coach/
 * briefing.js` ile aynı mantık).
 *
 * ÜÇ İŞ TEK DOSYADA çünkü üçü de aynı kimlik doğrulama + aynı tabloyu
 * kullanıyor ve Vercel'de her dosya ayrı bir sunucusuz fonksiyon.
 */

import { authenticate } from '../_lib/auth.js'
import { logSolveError, userMessage } from '../_lib/errors.js'
import { listSessions, loadSession, saveFeedback, saveSelfReport } from '../_lib/solve/persistence.js'
import { rehydrateBoard } from '../../src/lib/whiteboard/compile.js'

/** §42'deki beğenmeme sebepleri — serbest metin değil, sabit liste. */
const FEEDBACK_REASONS = [
  'yanlis_cozum',
  'anlasilmadi',
  'soru_yanlis_okundu',
  'cok_uzun',
  'cok_kisa',
  'diger',
]

export default async function handler(req, res) {
  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)
  const { user, supabase } = auth

  if (req.method === 'GET') return handleGet(req, res, supabase, user)
  if (req.method === 'POST') return handlePost(req, res, supabase, user)

  res.setHeader('Allow', 'GET, POST')
  return sendError(res, 405, 'invalid_request')
}

/* ================================================================== */

async function handleGet(req, res, supabase, user) {
  const id = req.query?.id

  if (id) {
    if (!isUuid(id)) return sendError(res, 400, 'invalid_request')

    const session = await loadSession(supabase, user.id, id)
    if (!session) return sendError(res, 404, 'solve_session_not_found')

    return res.status(200).json({ session: toClientSession(session) })
  }

  const limit = clampInt(req.query?.limit, 1, 50, 20)
  const offset = clampInt(req.query?.offset, 0, 5000, 0)
  const sessions = await listSessions(supabase, user.id, { limit, offset })

  return res.status(200).json({ sessions })
}

async function handlePost(req, res, supabase, user) {
  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body

  if (!isUuid(body?.sessionId)) return sendError(res, 400, 'invalid_request')

  /* ---- Öz-değerlendirme: "bu soruyu ben doğru çözmüştüm" ---- */
  if (typeof body?.studentCorrect === 'boolean') {
    const ok = await saveSelfReport(supabase, user.id, body.sessionId, body.studentCorrect)
    if (!ok) return sendError(res, 500, 'database_error')
    return res.status(200).json({ ok: true })
  }

  /* ---- 👍 / 👎 ---- */
  const feedback = body?.feedback === 'up' || body?.feedback === 'down' ? body.feedback : null
  if (!feedback) return sendError(res, 400, 'invalid_request')

  const reason = FEEDBACK_REASONS.includes(body?.reason) ? body.reason : null

  const ok = await saveFeedback(supabase, user.id, body.sessionId, {
    feedback,
    reason,
    note: body?.note,
  })
  if (!ok) return sendError(res, 500, 'database_error')

  return res.status(200).json({ ok: true })
}

/* ================================================================== */

/**
 * Kayıtlı satırı istemcinin beklediği biçime çevirir.
 *
 * TAHTA YENİDEN DOĞRULANIR (`rehydrateBoard`). Satırı biz yazdık, yani
 * güvenli olmalı — ama şema sürümü ilerlediğinde ya da elle bir müdahale
 * olduğunda render'ın hazırlıksız yakalanmaması gerekir. Doğrulayıcıdan
 * bir kez daha geçirmek ucuz; geçirmemenin bedeli XSS sınıfı bir hata.
 */
function toClientSession(row) {
  return {
    id: row.id,
    status: row.status,
    createdAt: row.created_at,
    imagePath: row.image_path,
    board: row.status === 'ok' ? rehydrateBoard(row.board) : null,
    question: {
      text: row.question_text,
      choices: row.analysis?.choices ?? [],
      figureDescription: row.analysis?.figureDescription ?? null,
    },
    meta: {
      subject: row.subject,
      topic: row.canonical_topic ?? row.topic,
      subtopic: row.subtopic,
      difficulty: row.difficulty,
      goal: row.analysis?.goal ?? null,
      givens: row.analysis?.givens ?? [],
      unknowns: row.analysis?.unknowns ?? [],
      concepts: row.analysis?.concepts ?? [],
      strategy: row.analysis?.strategy ?? null,
    },
    help: {
      commonMistake: row.student_help?.common_mistake ?? null,
      keyConcept: row.student_help?.key_concept ?? null,
      shortTip: row.student_help?.short_tip ?? null,
      wrongChoices: row.student_help?.wrong_choices ?? [],
    },
    verification: {
      status: row.verification?.status ?? null,
      selfCheck: row.verification?.selfCheck ?? null,
      unitCheck: row.verification?.unitCheck ?? null,
      sanityCheck: row.verification?.sanityCheck ?? null,
      notes: row.verification?.ambiguityNotes ?? [],
    },
    feedback: row.feedback,
    studentCorrect: row.student_correct,
  }
}

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

function clampInt(value, min, max, fallback) {
  const n = Number.parseInt(value, 10)
  if (!Number.isFinite(n)) return fallback
  return n < min ? min : n > max ? max : n
}

function sendError(res, status, code) {
  logSolveError('sessions', `${code}`, { status })
  return res.status(status).json({ error: { code, message: userMessage(code) } })
}
