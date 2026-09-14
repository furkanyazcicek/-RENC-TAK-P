import { ACTION_STATUS, createContentOutbox, isSuccessfulActionResult } from './outbox.js'

export function createSupabaseContentActivityClient({ supabase, storage, userId, uuid, now } = {}) {
  if (!supabase?.rpc) throw new TypeError('content_activity_supabase_required')
  const outbox = createContentOutbox({
    storage,
    userId,
    uuid,
    now,
    rpc: (name, params) => supabase.rpc(name, params),
  })

  async function perform(type, payload, options) {
    const result = await outbox.sendOrQueue(type, payload, options)
    const code = result?.status ?? result?.code
    return {
      result,
      status: isSuccessfulActionResult(result)
        ? ACTION_STATUS.saved
        : code === 'idempotency_conflict' || code === 'ownership_conflict'
          ? ACTION_STATUS.conflict
          : code === 'schema_unavailable'
            ? ACTION_STATUS.unavailable
            : ACTION_STATUS.protected_local,
    }
  }

  async function getAttempt(attemptId) {
    try {
      const response = await supabase.rpc('get_question_attempt_result', { p_attempt_id: attemptId })
      if (response.error) return { status: 'unavailable', result: null }
      return { status: response.data?.status ?? 'available', result: response.data }
    } catch {
      return { status: 'unavailable', result: null }
    }
  }

  return Object.freeze({ perform, getAttempt, flush: outbox.flush, pending: outbox.list })
}
