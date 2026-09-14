import { createAcademicOutbox } from './outbox.js'

export const ACADEMIC_UI_STATUS = Object.freeze({
  idle: 'idle', validating: 'validating', saving: 'saving', saved: 'saved',
  pending: 'offline_pending', conflict: 'conflict', denied: 'permission_denied',
  degraded: 'degraded', unavailable: 'unavailable', invalid: 'validation_error',
})

const RPC_BY_ACTION = Object.freeze({
  daily_log_create: 'create_academic_daily_log', daily_log_update: 'update_academic_daily_log',
  mock_exam_create: 'create_academic_mock_exam', branch_exam_create: 'create_academic_branch_exam',
  homework_assign: 'assign_academic_homework', question_submit: 'submit_academic_question',
  question_reply: 'reply_academic_question', question_teacher_share: 'share_academic_teacher_question',
  question_canvas_draft: 'save_academic_question_canvas_draft', question_canvas_publish: 'publish_academic_question_canvas',
  ai_solve_claim: 'claim_academic_ai_solve',
  lesson_summary: 'save_academic_lesson_summary',
})

const MISSING_RPC_CODES = new Set(['PGRST202', '42883'])

function rpcParams(payload, actionId) {
  return Object.fromEntries([
    ...Object.entries(payload).filter(([, value]) => value !== undefined).map(([key, value]) => [`p_${key}`, value]),
    ['p_client_action_id', actionId],
  ])
}

export function mapAcademicResult(result) {
  const status = result?.status
  if (['created', 'completed', 'duplicate', 'no_change', 'identity_quarantined'].includes(status)) return ACADEMIC_UI_STATUS.saved
  if (status === 'idempotency_conflict') return ACADEMIC_UI_STATUS.conflict
  if (['unauthorized', 'permission_denied'].includes(status)) return ACADEMIC_UI_STATUS.denied
  if (['schema_unavailable', 'dependency_unavailable'].includes(status)) return ACADEMIC_UI_STATUS.unavailable
  if (status === 'validation_rejected') return ACADEMIC_UI_STATUS.invalid
  return ACADEMIC_UI_STATUS.pending
}

function academicErrorResult(error) {
  if (MISSING_RPC_CODES.has(String(error?.code ?? ''))) return { status: 'schema_unavailable' }
  if (error?.code === '42501') return { status: 'permission_denied' }
  return { status: 'retryable_failure' }
}

// Faz 4 migration'ı canlıya kontrollü biçimde alınana kadar yalnız günlük kayıt
// oluşturmayı mevcut RLS korumalı tablo yoluyla sürdürür. Öğrenci kimliği formdan
// değil doğrulanmış oturumdan gelir; yeni RPC hazır olduğunda bu yol kullanılmaz.
async function createLegacyDailyLog({ supabase, userId, payload, actionId }) {
  try {
    const response = await supabase.from('daily_logs').insert({
      student_id: userId,
      study_date: payload.study_date,
      topic: payload.topic,
      duration_minutes: payload.duration_minutes,
      correct: payload.correct,
      incorrect: payload.incorrect,
      empty: payload.empty,
      notes: payload.notes,
    })
    const result = response?.error
      ? academicErrorResult(response.error)
      : { status: 'created', compatibility_mode: 'legacy_daily_logs' }
    return { result, status: mapAcademicResult(result), actionId }
  } catch {
    return { result: { status: 'retryable_failure' }, status: ACADEMIC_UI_STATUS.pending, actionId }
  }
}

export function academicStatusMessage(status) {
  if (status === ACADEMIC_UI_STATUS.saving) return 'Kaydediliyor…'
  if (status === ACADEMIC_UI_STATUS.saved) return 'Kaydedildi.'
  if (status === ACADEMIC_UI_STATUS.pending) return 'Bağlantı kurulunca yeniden denenecek. Formundaki bilgiler korunuyor.'
  if (status === ACADEMIC_UI_STATUS.conflict) return 'Bu kayıt başka bir değişiklikle çakıştı. Sayfayı yenileyip tekrar dene.'
  if (status === ACADEMIC_UI_STATUS.denied) return 'Bu kaydı değiştirme yetkin yok.'
  if (status === ACADEMIC_UI_STATUS.degraded) return 'Kayıt hizmeti kısıtlı çalışıyor. Daha sonra tekrar dene.'
  if (status === ACADEMIC_UI_STATUS.unavailable) return 'Güvenli kayıt hizmeti henüz hazır değil.'
  if (status === ACADEMIC_UI_STATUS.invalid) return 'Bilgileri kontrol edip tekrar dene.'
  return ''
}

export function createAcademicActivityClient({ supabase, userId, storage = globalThis.localStorage, uuid = () => globalThis.crypto.randomUUID(), now } = {}) {
  if (!supabase?.rpc) throw new TypeError('academic_supabase_required')
  const outbox = createAcademicOutbox({ storage, userId, uuid, now, rpc: (name, params) => supabase.rpc(name, params) })

  async function perform(type, payload, options) {
    const result = await outbox.sendOrQueue(type, payload, options)
    return { result, status: mapAcademicResult(result) }
  }

  // Ham soru, yanıt, not veya model metni yerel kuyruğa yazılmaz.
  async function performSensitive(type, payload, { actionId = uuid() } = {}) {
    const rpc = RPC_BY_ACTION[type]
    if (!rpc) throw new TypeError('academic_sensitive_action_unknown')
    try {
      const response = await supabase.rpc(rpc, rpcParams(payload, actionId))
      if (type === 'daily_log_create' && MISSING_RPC_CODES.has(String(response?.error?.code ?? ''))) {
        return createLegacyDailyLog({ supabase, userId, payload, actionId })
      }
      const result = response?.error
        ? academicErrorResult(response.error)
        : response?.data ?? { status: 'retryable_failure' }
      return { result, status: mapAcademicResult(result), actionId }
    } catch {
      return { result: { status: 'retryable_failure' }, status: ACADEMIC_UI_STATUS.pending, actionId }
    }
  }

  return Object.freeze({ perform, performSensitive, flush: outbox.flush, pending: outbox.list })
}
