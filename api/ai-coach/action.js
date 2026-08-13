/**
 * POST /api/ai-coach/action
 *
 * Kullanıcı bir aksiyon kartındaki butona bastığında çalışır — yani
 * AI'ın önerdiği yazma işlemi ANCAK BURADA gerçekleşir.
 *
 * Gövde: { action: { type, payload }, conversationId? }
 *
 * GÜVENLİK
 *  - `student_id` her zaman JWT'den alınır; gövdedeki hiçbir kimlik alanı
 *    okunmaz.
 *  - `executeAction` gövdedeki her alanı yeniden doğrular; istemci sahte
 *    bir aksiyon üretse bile yapabileceği en fazla şey, arayüzden zaten
 *    yapabildiği bir kaydı kendi hesabına eklemektir.
 *  - Silme veya başka kullanıcıya dokunan bir aksiyon türü TANIMLI DEĞİL.
 */

import { authenticate } from '../_lib/auth.js'
import { logError, sendError } from '../_lib/errors.js'
import { executeAction } from '../_lib/tools.js'

const ALLOWED_TYPES = new Set([
  'create_study_plan',
  'log_study_session',
  'update_student_memory',
  'complete_study_task',
])

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return sendError(res, 405, 'invalid_request')
  }

  const auth = await authenticate(req)
  if (!auth.ok) return sendError(res, auth.status, auth.code)

  const { user, supabase } = auth

  const body = typeof req.body === 'string' ? safeParse(req.body) : req.body
  const action = body?.action

  if (!action || typeof action !== 'object' || !ALLOWED_TYPES.has(action.type)) {
    return sendError(res, 400, 'action_invalid')
  }

  try {
    const outcome = await executeAction(supabase, user.id, action)
    if (!outcome.ok) {
      const status = outcome.code === 'action_not_found' ? 404 : 400
      return sendError(res, status, outcome.code)
    }

    return res.status(200).json({
      ok: true,
      message: outcome.message,
      result: outcome.result ?? null,
    })
  } catch (error) {
    logError('action', error, { studentId: user.id, type: action.type })
    return sendError(res, 500, 'database_error')
  }
}

function safeParse(value) {
  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}
