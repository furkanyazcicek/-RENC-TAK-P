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
const EXAM_TYPES = new Set(['LGS', 'TYT', 'AYT', 'KPSS'])

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

function legacyResponse(result, actionId) {
  return { result, status: mapAcademicResult(result), actionId }
}

function validCount(value) {
  return Number.isInteger(value) && value >= 0
}

function validDuration(value) {
  return value == null || (Number.isInteger(value) && value >= 0 && value <= 1440)
}

function missingOptionalColumn(error, body, optionalColumns) {
  if (String(error?.code ?? '') !== 'PGRST204') return null
  const message = [error?.message, error?.details, error?.hint].filter(Boolean).join(' ')
  return optionalColumns.find((column) => Object.hasOwn(body, column) && message.includes(column)) ?? null
}

async function insertLegacyRow(supabase, table, payload, optionalColumns = []) {
  const body = { ...payload }
  const dropped = []

  for (let attempt = 0; attempt <= optionalColumns.length; attempt += 1) {
    const response = await supabase.from(table).insert(body)
    if (!response?.error) return { dropped }

    const missing = missingOptionalColumn(response.error, body, optionalColumns)
    if (!missing) return { error: response.error, dropped }

    delete body[missing]
    dropped.push(missing)
  }

  return { error: { status: 'retryable_failure' }, dropped }
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
    return legacyResponse(result, actionId)
  } catch {
    return legacyResponse({ status: 'retryable_failure' }, actionId)
  }
}

// Faz 4 RPC'leri canlıya alınana kadar mevcut RLS politikalarıyla genel
// denemeyi eski alan tablolarına yazar. Ebeveyn ve ders satırları yeni
// RPC'deki gibi tek transaction olamadığı için ikinci yazım başarısızsa
// ebeveyn kaydı geri silinir; yarım/boş deneme başarılı gösterilmez.
async function createLegacyMockExam({ supabase, userId, payload, actionId }) {
  const examType = String(payload.exam_type ?? '').toUpperCase()
  const subjects = Array.isArray(payload.subjects) ? payload.subjects : []
  const validSubjects = subjects.length >= 1 && subjects.length <= 32 && subjects.every((subject) =>
    typeof subject?.subject === 'string'
    && subject.subject.trim().length >= 1
    && subject.subject.trim().length <= 120
    && validCount(subject.correct)
    && validCount(subject.incorrect)
    && validCount(subject.empty)
  )

  if (!EXAM_TYPES.has(examType) || !payload.exam_date || !validDuration(payload.duration_minutes) || !validSubjects) {
    return legacyResponse({ status: 'validation_rejected' }, actionId)
  }

  try {
    const parent = await insertLegacyRow(supabase, 'mock_exams', {
      id: actionId,
      student_id: userId,
      exam_type: examType,
      exam_name: payload.exam_name?.trim() || null,
      exam_date: payload.exam_date,
      duration_minutes: payload.duration_minutes ?? null,
    }, ['duration_minutes'])

    if (parent.error) return legacyResponse(academicErrorResult(parent.error), actionId)

    const childRows = subjects.map((subject) => ({
      mock_exam_id: actionId,
      subject: subject.subject.trim(),
      correct: subject.correct,
      incorrect: subject.incorrect,
      empty: subject.empty,
    }))
    const children = await supabase.from('mock_exam_subjects').insert(childRows)

    if (children?.error) {
      try {
        await supabase.from('mock_exams').delete().eq('id', actionId)
      } catch {
        // Asıl yazım hatası korunur; kayıt hiçbir durumda başarılı sayılmaz.
      }
      return legacyResponse(academicErrorResult(children.error), actionId)
    }

    return legacyResponse({
      status: 'created',
      record_id: actionId,
      subject_count: childRows.length,
      compatibility_mode: 'legacy_mock_exams',
      dropped_columns: parent.dropped,
    }, actionId)
  } catch {
    return legacyResponse({ status: 'retryable_failure' }, actionId)
  }
}

// Canlıda `exams` tablosunun birden fazla tarihsel sürümü bulunduğu için
// isteğe bağlı yeni kolonlar yoksa yalnız o alanları düşürüp mevcut
// RLS korumalı kayıt yolunu sürdürür. Kimlik yine oturum/RLS tarafından
// denetlenir; yetki veya bağlantı hatasında bu uyumluluk yolu çalışmaz.
async function createLegacyBranchExam({ supabase, userId, payload, actionId }) {
  const subject = String(payload.subject ?? payload.topic ?? '').trim()
  const examType = payload.exam_type == null || payload.exam_type === ''
    ? null
    : String(payload.exam_type).toUpperCase()
  const studentId = payload.student_id ?? userId

  if (!subject || !payload.exam_date || (examType && !EXAM_TYPES.has(examType))
      || !validCount(payload.correct) || !validCount(payload.incorrect)
      || !validCount(payload.empty) || !validDuration(payload.duration_minutes)) {
    return legacyResponse({ status: 'validation_rejected' }, actionId)
  }

  try {
    const response = await insertLegacyRow(supabase, 'exams', {
      id: actionId,
      student_id: studentId,
      subject,
      topic: String(payload.topic ?? subject).trim() || subject,
      exam_type: examType,
      exam_date: payload.exam_date,
      correct: payload.correct,
      incorrect: payload.incorrect,
      empty: payload.empty,
      duration_minutes: payload.duration_minutes ?? null,
    }, ['subject', 'exam_type', 'duration_minutes'])
    const result = response.error
      ? academicErrorResult(response.error)
      : {
          status: 'created',
          record_id: actionId,
          compatibility_mode: 'legacy_branch_exams',
          dropped_columns: response.dropped,
        }
    return legacyResponse(result, actionId)
  } catch {
    return legacyResponse({ status: 'retryable_failure' }, actionId)
  }
}

const LEGACY_CREATE_BY_ACTION = Object.freeze({
  daily_log_create: createLegacyDailyLog,
  mock_exam_create: createLegacyMockExam,
  branch_exam_create: createLegacyBranchExam,
})

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
      const legacyCreate = LEGACY_CREATE_BY_ACTION[type]
      if (legacyCreate && MISSING_RPC_CODES.has(String(response?.error?.code ?? ''))) {
        return legacyCreate({ supabase, userId, payload, actionId })
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
