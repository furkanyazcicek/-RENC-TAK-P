import { hashActionPayload } from '../contentActivity/identity.js'
import { isUuid } from './merge.js'
import { getLanguageDefinition } from './registry.js'

export const LANGUAGE_OUTBOX_VERSION = 1
export const LANGUAGE_OUTBOX_PREFIX = 'drkoc:language-outbox:v1'

export const LANGUAGE_SYNC_STATUS = Object.freeze({
  idle: 'idle', loading: 'loading', saving: 'saving', saved: 'saved',
  retrying: 'retrying', protected_local: 'protected_local', conflict: 'conflict',
  unavailable: 'unavailable', needs_consent: 'needs_consent', importing: 'importing',
})

const ACTIONS = Object.freeze({
  snapshot: {
    rpc: 'save_language_progress_snapshot',
    keys: ['language_code', 'program_context', 'storage_version', 'curriculum_version', 'content_version', 'snapshot', 'private_snapshot', 'snapshot_hash', 'expected_revision', 'client_source'],
  },
  import: {
    rpc: 'import_language_progress_snapshot',
    keys: ['language_code', 'program_context', 'storage_version', 'curriculum_version', 'content_version', 'snapshot', 'private_snapshot', 'snapshot_hash', 'expected_revision', 'client_source', 'import_id'],
  },
  activity: {
    rpc: 'record_language_learning_activity',
    keys: ['language_code', 'program_context', 'activity_type', 'activity_id', 'content_revision', 'skill_domain', 'correct_count', 'incorrect_count', 'blank_count', 'help_count', 'review_outcome', 'completion_status', 'duration_minutes', 'cefr_level', 'occurred_at', 'client_source'],
  },
  delete: {
    rpc: 'delete_my_language_progress',
    keys: ['language_code', 'program_context', 'reset_generation'],
  },
})

const SUCCESS = new Set(['created', 'duplicate', 'accepted', 'deleted', 'empty', 'no_change'])
const PERMANENT = new Set(['idempotency_conflict', 'ownership_conflict', 'validation_rejected', 'unauthorized', 'not_found'])
const FORBIDDEN = new Set(['student_id', 'studentId', 'actor_id', 'answer', 'answers', 'raw_answer', 'writing', 'draft', 'access_token', 'refresh_token', 'jwt'])

function clone(value) { return JSON.parse(JSON.stringify(value)) }

function key(userId) {
  if (!isUuid(userId)) throw new TypeError('language_outbox_user_invalid')
  return `${LANGUAGE_OUTBOX_PREFIX}:${userId}`
}

function read(storage, userId) {
  if (!storage) return []
  try {
    const parsed = JSON.parse(storage.getItem(key(userId)) ?? '[]')
    return Array.isArray(parsed)
      ? parsed.filter((item) => item?.version === LANGUAGE_OUTBOX_VERSION && item?.user_scope === userId)
      : []
  } catch { return [] }
}

function write(storage, userId, items) {
  if (!storage) return
  try { storage.setItem(key(userId), JSON.stringify(items)) } catch { /* Yerel ilerleme ayrıca korunur. */ }
}

function sanitize(type, payload) {
  const spec = ACTIONS[type]
  if (!spec || !payload || typeof payload !== 'object' || Array.isArray(payload)) throw new TypeError('language_outbox_payload_invalid')
  for (const supplied of Object.keys(payload)) {
    if (FORBIDDEN.has(supplied) || !spec.keys.includes(supplied)) throw new TypeError(`language_outbox_field_forbidden:${supplied}`)
  }
  const definition = getLanguageDefinition(payload.language_code)
  if (!definition) throw new TypeError('language_outbox_language_invalid')
  return Object.fromEntries(spec.keys.filter((field) => payload[field] !== undefined).map((field) => [field, clone(payload[field])]))
}

function rpcParams(payload, actionId) {
  return Object.fromEntries([
    ...Object.entries(payload).map(([field, value]) => [`p_${field}`, value]),
    ['p_client_action_id', actionId],
  ])
}

export function languageActionSucceeded(result) {
  return SUCCESS.has(result?.status ?? result?.code)
}

export function languageActionPermanent(result) {
  return PERMANENT.has(result?.status ?? result?.code)
}

export function createLanguageOutbox({ storage, userId, rpc, uuid = () => crypto.randomUUID(), now = () => Date.now() } = {}) {
  key(userId)
  if (typeof rpc !== 'function') throw new TypeError('language_outbox_rpc_required')

  async function enqueue(type, payload, { actionId = uuid() } = {}) {
    if (!isUuid(actionId)) throw new TypeError('language_outbox_action_invalid')
    const safePayload = sanitize(type, payload)
    const payloadHash = await hashActionPayload(safePayload)
    const items = read(storage, userId)
    const existing = items.find((item) => item.action_id === actionId)
    if (existing) {
      return existing.type === type && existing.payload_hash === payloadHash
        ? { status: 'duplicate', action_id: actionId, queued: true }
        : { status: 'idempotency_conflict', action_id: actionId }
    }
    items.push({
      version: LANGUAGE_OUTBOX_VERSION, user_scope: userId, action_id: actionId,
      type, payload: safePayload, payload_hash: payloadHash, attempts: 0,
      created_at: now(), next_attempt_at: now(), state: 'pending',
    })
    write(storage, userId, items)
    return { status: 'created', action_id: actionId, queued: true }
  }

  async function send(item) {
    try {
      const response = await rpc(ACTIONS[item.type].rpc, rpcParams(item.payload, item.action_id))
      if (response?.error) {
        const unavailable = ['PGRST202', 'PGRST205', '42P01', '42883'].includes(response.error.code)
        return { status: unavailable ? 'schema_unavailable' : 'retryable_failure' }
      }
      return response?.data ?? { status: 'retryable_failure' }
    } catch { return { status: 'retryable_failure' } }
  }

  async function flush({ force = false } = {}) {
    const items = read(storage, userId)
    const outcomes = []
    for (const item of items) {
      if (!force && item.next_attempt_at > now()) continue
      const result = await send(item)
      outcomes.push({ action_id: item.action_id, type: item.type, result })
      if (languageActionSucceeded(result)) {
        item.state = 'acknowledged'
        continue
      }
      item.attempts += 1
      item.last_code = result?.status ?? result?.code ?? 'retryable_failure'
      item.state = languageActionPermanent(result) || item.last_code === 'revision_conflict' ? 'conflict' : 'pending'
      item.next_attempt_at = now() + Math.min(60_000, 1000 * (2 ** Math.min(item.attempts, 6)))
    }
    write(storage, userId, items.filter((item) => item.state !== 'acknowledged'))
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
    enqueue, flush, sendOrQueue,
    list: () => read(storage, userId).map(clone),
    discard: (actionId) => write(storage, userId, read(storage, userId).filter((item) => item.action_id !== actionId)),
  })
}

export function languageSyncStatusLabel(status) {
  if (status === LANGUAGE_SYNC_STATUS.loading) return 'İlerlemen kontrol ediliyor…'
  if (status === LANGUAGE_SYNC_STATUS.saving) return 'İlerlemen kaydediliyor…'
  if (status === LANGUAGE_SYNC_STATUS.saved) return 'İlerlemen hesabında güncel.'
  if (status === LANGUAGE_SYNC_STATUS.retrying) return 'Bağlantı gelince yeniden denenecek.'
  if (status === LANGUAGE_SYNC_STATUS.protected_local) return 'Son çalışman bu cihazda korundu.'
  if (status === LANGUAGE_SYNC_STATUS.conflict) return 'İki cihazdaki değişiklikler güvenle birleştirilmeyi bekliyor.'
  if (status === LANGUAGE_SYNC_STATUS.unavailable) return 'Hesap kaydı henüz kullanılamıyor; cihaz kaydın korunuyor.'
  if (status === LANGUAGE_SYNC_STATUS.needs_consent) return 'Bu cihazdaki eski ilerleme aktarım onayı bekliyor.'
  if (status === LANGUAGE_SYNC_STATUS.importing) return 'Eski ilerlemen hesabına aktarılıyor…'
  return ''
}
