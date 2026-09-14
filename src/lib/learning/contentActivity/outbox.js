import { hashActionPayload } from './identity.js'

export const OUTBOX_VERSION = 1
export const OUTBOX_PREFIX = 'drkoc:learning-outbox:v1'

export const ACTION_STATUS = Object.freeze({
  idle: 'idle',
  saving: 'saving',
  saved: 'saved',
  retrying: 'retrying',
  protected_local: 'protected_local',
  conflict: 'conflict',
  unavailable: 'unavailable',
})

const SUCCESS = new Set(['created', 'duplicate', 'identity_quarantined'])
const PERMANENT = new Set([
  'idempotency_conflict',
  'content_revision_mismatch',
  'not_found',
  'unauthorized',
  'invalid_state',
  'validation_rejected',
  'ownership_conflict',
])
const FORBIDDEN_KEYS = new Set([
  'student_id', 'studentId', 'actor_id', 'actorId', 'is_correct', 'correct',
  'correct_count', 'wrong_count', 'empty_count', 'total_count', 'accuracy',
  'evidence_class', 'trust_level', 'provenance', 'source_registry_version',
  'access_token', 'refresh_token', 'jwt', 'question_text', 'solution',
])
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

export const CONTENT_ACTIONS = Object.freeze({
  structured_lesson_event: {
    rpc: 'record_structured_lesson_event',
    keys: ['lesson_id', 'content_revision', 'event_name', 'block_id', 'section_id', 'selected_option_id'],
  },
  bundled_lesson_event: {
    rpc: 'record_bundled_lesson_event',
    keys: ['content_id', 'content_revision', 'event_name', 'block_id', 'section_id', 'selected_option_id'],
  },
  structured_lesson_progress: {
    rpc: 'save_structured_lesson_progress',
    keys: ['lesson_id', 'content_revision', 'section_id', 'completed_section_ids'],
  },
  bundled_lesson_progress: {
    rpc: 'save_bundled_lesson_progress',
    keys: ['content_id', 'content_revision', 'section_id', 'completed_section_ids'],
  },
  library_note_open: {
    rpc: 'record_library_note_open',
    keys: ['content_id', 'content_revision', 'content_kind'],
  },
  db_question_start: {
    rpc: 'start_db_question_attempt',
    keys: ['content_id', 'content_revision'],
  },
  bundled_question_start: {
    rpc: 'start_bundled_question_attempt',
    keys: ['content_id', 'content_revision'],
  },
  db_question_answer: {
    rpc: 'save_db_question_answer',
    keys: ['attempt_id', 'question_id', 'selected_option_id'],
  },
  bundled_question_answer: {
    rpc: 'save_bundled_question_answer',
    keys: ['attempt_id', 'question_id', 'selected_option_id'],
  },
  db_question_finalize: {
    rpc: 'finalize_db_question_attempt',
    keys: ['attempt_id'],
  },
  bundled_question_finalize: {
    rpc: 'finalize_bundled_question_attempt',
    keys: ['attempt_id'],
  },
  db_question_reset: {
    rpc: 'reset_db_question_attempt',
    keys: ['attempt_id'],
  },
  bundled_question_reset: {
    rpc: 'reset_bundled_question_attempt',
    keys: ['attempt_id'],
  },
  physics_atlas_snapshot: {
    rpc: 'record_physics_atlas_snapshot',
    keys: ['content_id', 'content_revision', 'task_id', 'completed', 'prediction_used'],
  },
  biology_atlas_snapshot: {
    rpc: 'record_biology_atlas_snapshot',
    keys: ['content_id', 'content_revision', 'task_id', 'completed', 'prediction_used'],
  },
  geography_atlas_snapshot: {
    rpc: 'record_geography_atlas_snapshot',
    keys: ['content_id', 'content_revision', 'task_id', 'completed', 'prediction_used'],
  },
  physics_atlas_import: {
    rpc: 'import_physics_atlas_snapshot',
    keys: ['snapshot', 'snapshot_hash'],
  },
  biology_atlas_import: {
    rpc: 'import_biology_atlas_snapshot',
    keys: ['snapshot', 'snapshot_hash'],
  },
  geography_atlas_import: {
    rpc: 'import_geography_atlas_snapshot',
    keys: ['snapshot', 'snapshot_hash'],
  },
  geography_question_start: {
    rpc: 'start_geography_timed_attempt',
    keys: ['content_id', 'content_revision'],
  },
  geography_question_answer: {
    rpc: 'save_geography_timed_answer',
    keys: ['attempt_id', 'question_id', 'selected_option_id'],
  },
  geography_question_finalize: {
    rpc: 'finalize_geography_timed_attempt',
    keys: ['attempt_id'],
  },
  chemistry_question_start: {
    rpc: 'start_chemistry_atlas_attempt',
    keys: ['content_id', 'content_revision'],
  },
  chemistry_question_answer: {
    rpc: 'save_chemistry_atlas_answer',
    keys: ['attempt_id', 'question_id', 'selected_option_id'],
  },
  chemistry_question_finalize: {
    rpc: 'finalize_chemistry_atlas_attempt',
    keys: ['attempt_id'],
  },
  chemistry_question_reset: {
    rpc: 'reset_chemistry_atlas_attempt',
    keys: ['attempt_id'],
  },
  geometry_question_start: {
    rpc: 'start_geometry_pilot_attempt',
    keys: ['content_id', 'content_revision'],
  },
  geometry_question_answer: {
    rpc: 'save_geometry_pilot_answer',
    keys: ['attempt_id', 'question_id', 'selected_option_id'],
  },
  geometry_question_finalize: {
    rpc: 'finalize_geometry_pilot_attempt',
    keys: ['attempt_id'],
  },
  geometry_question_reset: {
    rpc: 'reset_geometry_pilot_attempt',
    keys: ['attempt_id'],
  },
  geography_question_reset: {
    rpc: 'reset_geography_timed_attempt',
    keys: ['attempt_id'],
  },
})

function safeClone(value) {
  return JSON.parse(JSON.stringify(value))
}

function storageKey(userId) {
  if (!UUID.test(String(userId ?? ''))) throw new TypeError('outbox_user_required')
  return `${OUTBOX_PREFIX}:${userId}`
}

function read(storage, userId) {
  if (!storage) return []
  try {
    const parsed = JSON.parse(storage.getItem(storageKey(userId)) ?? '[]')
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item) => item?.version === OUTBOX_VERSION && item?.user_scope === userId)
  } catch {
    return []
  }
}

function write(storage, userId, actions) {
  if (!storage) return
  storage.setItem(storageKey(userId), JSON.stringify(actions))
}

function sanitizePayload(type, payload) {
  const spec = CONTENT_ACTIONS[type]
  if (!spec) throw new TypeError('outbox_action_unknown')
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new TypeError('outbox_payload_invalid')
  }
  for (const key of Object.keys(payload)) {
    if (FORBIDDEN_KEYS.has(key) || !spec.keys.includes(key)) throw new TypeError(`outbox_field_forbidden:${key}`)
  }
  return Object.fromEntries(spec.keys.filter((key) => payload[key] !== undefined).map((key) => [key, safeClone(payload[key])]))
}

function rpcParams(payload, actionId) {
  return Object.fromEntries([
    ...Object.entries(payload).map(([key, value]) => [`p_${key}`, value]),
    ['p_client_action_id', actionId],
  ])
}

export function isSuccessfulActionResult(result) {
  return SUCCESS.has(result?.status ?? result?.code)
}

export function isPermanentActionResult(result) {
  return PERMANENT.has(result?.status ?? result?.code)
}

export function createContentOutbox({
  storage,
  userId,
  rpc,
  uuid = () => globalThis.crypto.randomUUID(),
  now = () => Date.now(),
} = {}) {
  storageKey(userId)
  if (typeof rpc !== 'function') throw new TypeError('outbox_rpc_required')

  async function enqueue(type, payload, { actionId = uuid() } = {}) {
    if (!UUID.test(actionId)) throw new TypeError('outbox_action_id_invalid')
    const safePayload = sanitizePayload(type, payload)
    const payloadHash = await hashActionPayload(safePayload)
    const actions = read(storage, userId)
    const existing = actions.find((item) => item.action_id === actionId)
    if (existing) {
      if (existing.type !== type || existing.payload_hash !== payloadHash) {
        return { status: 'idempotency_conflict', action_id: actionId }
      }
      return { status: 'duplicate', action_id: actionId, queued: true }
    }
    actions.push({
      version: OUTBOX_VERSION,
      user_scope: userId,
      action_id: actionId,
      type,
      payload: safePayload,
      payload_hash: payloadHash,
      attempts: 0,
      created_at: now(),
      next_attempt_at: now(),
      state: 'pending',
    })
    write(storage, userId, actions)
    return { status: 'created', action_id: actionId, queued: true }
  }

  async function send(action) {
    const spec = CONTENT_ACTIONS[action.type]
    try {
      const response = await rpc(spec.rpc, rpcParams(action.payload, action.action_id))
      if (response?.error) {
        return {
          status: ['PGRST202', '42883'].includes(response.error.code) ? 'schema_unavailable' : 'retryable_failure',
        }
      }
      return response?.data ?? { status: 'retryable_failure' }
    } catch {
      return { status: 'retryable_failure' }
    }
  }

  async function flush({ force = false } = {}) {
    const actions = read(storage, userId)
    const outcomes = []
    for (const action of actions) {
      if (!force && action.next_attempt_at > now()) continue
      const result = await send(action)
      outcomes.push({ action_id: action.action_id, type: action.type, result })
      if (isSuccessfulActionResult(result)) {
        action.state = 'acknowledged'
        action.result = result
        continue
      }
      action.attempts += 1
      action.state = isPermanentActionResult(result) ? 'conflict' : 'pending'
      action.last_code = result?.status ?? result?.code ?? 'retryable_failure'
      action.next_attempt_at = now() + Math.min(60_000, 1000 * (2 ** Math.min(action.attempts, 6)))
    }
    write(storage, userId, actions.filter((action) => action.state !== 'acknowledged'))
    return outcomes
  }

  async function sendOrQueue(type, payload, options = {}) {
    const queued = await enqueue(type, payload, options)
    if (queued.status === 'idempotency_conflict') return queued
    const outcomes = await flush({ force: true })
    return outcomes.find((entry) => entry.action_id === queued.action_id)?.result
      ?? { status: 'retryable_failure', queued: true, action_id: queued.action_id }
  }

  return Object.freeze({
    enqueue,
    flush,
    sendOrQueue,
    list: () => Object.freeze(read(storage, userId).map((item) => Object.freeze(safeClone(item)))),
    clearAcknowledged: () => write(storage, userId, read(storage, userId).filter((item) => item.state !== 'acknowledged')),
  })
}

export function actionStatusLabel(status) {
  if (status === ACTION_STATUS.saving) return 'Kaydediliyor…'
  if (status === ACTION_STATUS.saved) return 'Kaydedildi'
  if (status === ACTION_STATUS.retrying) return 'Bağlantı sorunu — yeniden denenecek'
  if (status === ACTION_STATUS.protected_local) return 'Cevabın bu cihazda korunuyor'
  if (status === ACTION_STATUS.conflict) return 'Kayıt çakışması — yeniden açman gerekiyor'
  if (status === ACTION_STATUS.unavailable) return 'Kayıt servisi henüz hazır değil'
  return ''
}
