import { hashActionPayload } from '../contentActivity/identity.js'

export const ACADEMIC_OUTBOX_VERSION = 1
export const ACADEMIC_OUTBOX_PREFIX = 'drkoc:academic-outbox:v1'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const SUCCESS = new Set(['created', 'completed', 'duplicate', 'no_change', 'identity_quarantined'])
const PERMANENT = new Set(['idempotency_conflict', 'unauthorized', 'not_found', 'validation_rejected', 'permission_denied'])

// Yalnız ham içerik taşımayan eylemler kalıcı kuyruğa girebilir.
export const ACADEMIC_ACTIONS = Object.freeze({
  daily_log_update: ['record_id', 'duration_minutes', 'correct', 'incorrect', 'empty'],
  daily_log_delete: ['record_id'],
  mock_exam_delete: ['record_id'],
  branch_exam_delete: ['record_id'],
  homework_status: ['record_id', 'status'],
  homework_delete: ['record_id'],
  question_status: ['record_id', 'status'],
  ai_solve_self_result: ['session_id', 'student_correct'],
  ai_solve_feedback: ['session_id', 'feedback'],
  ai_review: ['session_id', 'review_status'],
  lesson_join: ['session_id'],
  lesson_leave: ['session_id', 'seconds'],
  lesson_feedback: ['session_id', 'feedback'],
  profile_goal: ['target_exam', 'grade', 'exam_year', 'is_exam_year', 'exam_date'],
})

const rpcNames = Object.freeze({
  daily_log_delete: 'delete_academic_daily_log',
  daily_log_update: 'update_academic_daily_log',
  mock_exam_delete: 'delete_academic_mock_exam',
  branch_exam_delete: 'delete_academic_branch_exam',
  homework_status: 'update_academic_homework_status',
  homework_delete: 'delete_academic_homework',
  question_status: 'update_academic_question_status',
  ai_solve_self_result: 'report_academic_ai_solve_result',
  ai_solve_feedback: 'feedback_academic_ai_solve',
  ai_review: 'update_academic_ai_review',
  lesson_join: 'join_academic_lesson',
  lesson_leave: 'leave_academic_lesson',
  lesson_feedback: 'feedback_academic_lesson_summary',
  profile_goal: 'save_academic_student_goal',
})

const storageKey = (userId) => {
  if (!UUID.test(String(userId ?? ''))) throw new TypeError('academic_outbox_user_required')
  return `${ACADEMIC_OUTBOX_PREFIX}:${userId}`
}

function safePayload(type, payload) {
  const keys = ACADEMIC_ACTIONS[type]
  if (!keys || !payload || Array.isArray(payload) || typeof payload !== 'object') throw new TypeError('academic_outbox_payload_invalid')
  const extra = Object.keys(payload).find((key) => !keys.includes(key))
  if (extra) throw new TypeError(`academic_outbox_field_forbidden:${extra}`)
  return Object.fromEntries(keys.filter((key) => payload[key] !== undefined).map((key) => [key, payload[key]]))
}

function read(storage, userId) {
  if (!storage) return []
  try {
    const value = JSON.parse(storage.getItem(storageKey(userId)) ?? '[]')
    return Array.isArray(value) ? value.filter((item) => item.version === ACADEMIC_OUTBOX_VERSION && item.user_scope === userId) : []
  } catch { return [] }
}

function write(storage, userId, value) {
  if (storage) storage.setItem(storageKey(userId), JSON.stringify(value))
}

const params = (payload, actionId) => Object.fromEntries([
  ...Object.entries(payload).map(([key, value]) => [`p_${key}`, value]),
  ['p_client_action_id', actionId],
])

export function createAcademicOutbox({ storage, userId, rpc, uuid = () => globalThis.crypto.randomUUID(), now = () => Date.now() } = {}) {
  storageKey(userId)
  if (typeof rpc !== 'function') throw new TypeError('academic_outbox_rpc_required')

  async function enqueue(type, payload, { actionId = uuid() } = {}) {
    if (!UUID.test(actionId)) throw new TypeError('academic_outbox_action_invalid')
    const clean = safePayload(type, payload)
    const hash = await hashActionPayload(clean)
    const queue = read(storage, userId)
    const existing = queue.find((item) => item.action_id === actionId)
    if (existing) return existing.payload_hash === hash && existing.type === type
      ? { status: 'duplicate', action_id: actionId }
      : { status: 'idempotency_conflict', action_id: actionId }
    queue.push({ version: ACADEMIC_OUTBOX_VERSION, user_scope: userId, type, payload: clean, payload_hash: hash, action_id: actionId, attempts: 0, next_attempt_at: now() })
    write(storage, userId, queue)
    return { status: 'created', action_id: actionId }
  }

  async function flush({ force = false } = {}) {
    const queue = read(storage, userId)
    const results = []
    for (const action of queue) {
      if (!force && action.next_attempt_at > now()) continue
      let result
      try {
        const response = await rpc(rpcNames[action.type], params(action.payload, action.action_id))
        result = response?.error
          ? { status: ['PGRST202', '42883'].includes(response.error.code) ? 'schema_unavailable' : response.error.code === '42501' ? 'permission_denied' : 'retryable_failure' }
          : response?.data ?? { status: 'retryable_failure' }
      } catch { result = { status: 'retryable_failure' } }
      results.push({ action_id: action.action_id, result })
      if (SUCCESS.has(result.status)) action.done = true
      else {
        action.attempts += 1
        action.permanent = PERMANENT.has(result.status)
        action.next_attempt_at = now() + Math.min(60_000, 1000 * 2 ** Math.min(action.attempts, 6))
      }
    }
    write(storage, userId, queue.filter((item) => !item.done))
    return results
  }

  async function sendOrQueue(type, payload, options = {}) {
    const queued = await enqueue(type, payload, options)
    if (queued.status === 'idempotency_conflict') return queued
    const results = await flush({ force: true })
    return results.find((entry) => entry.action_id === queued.action_id)?.result ?? { status: 'retryable_failure', queued: true }
  }

  return Object.freeze({ enqueue, flush, sendOrQueue, list: () => Object.freeze(read(storage, userId)) })
}

export function clearAcademicOutboxForUser(storage, userId) {
  storage?.removeItem(storageKey(userId))
}
