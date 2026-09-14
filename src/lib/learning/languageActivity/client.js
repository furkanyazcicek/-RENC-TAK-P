import { hashActionPayload } from '../contentActivity/identity.js'
import { createLanguageOutbox, languageActionSucceeded } from './outbox.js'
import { splitSensitiveLanguageProgress, summarizeLanguageProgress } from './merge.js'
import { getLanguageDefinition } from './registry.js'

function clientSource() {
  if (typeof window === 'undefined') return 'web'
  return window.matchMedia?.('(display-mode: standalone)').matches ? 'pwa' : 'web'
}

export function createLanguageActivityClient({ supabase, storage, userId, uuid, now } = {}) {
  if (!supabase?.rpc) throw new TypeError('language_activity_supabase_required')
  const outbox = createLanguageOutbox({ storage, userId, uuid, now, rpc: (name, params) => supabase.rpc(name, params) })

  async function load(language) {
    const definition = getLanguageDefinition(language)
    if (!definition) return { status: 'validation_rejected', snapshot: null }
    try {
      const response = await supabase.rpc('get_my_language_progress', { p_language_code: definition.code })
      if (response.error) {
        return { status: ['PGRST202', 'PGRST205', '42P01', '42883'].includes(response.error.code) ? 'schema_unavailable' : 'retryable_failure', snapshot: null }
      }
      return response.data ?? { status: 'empty', snapshot: null, private_snapshot: null, revision: 0 }
    } catch { return { status: 'retryable_failure', snapshot: null } }
  }

  async function snapshotPayload(language, snapshot, revision = 0) {
    const definition = getLanguageDefinition(language)
    const split = splitSensitiveLanguageProgress(snapshot, { language: definition?.code })
    if (!definition || !split.ok) throw new TypeError('language_snapshot_invalid')
    return {
      language_code: definition.code,
      program_context: definition.programContext,
      storage_version: definition.storageVersion,
      curriculum_version: definition.curriculumVersion,
      content_version: definition.contentVersion,
      snapshot: split.progress,
      private_snapshot: split.privateWork,
      snapshot_hash: await hashActionPayload({ progress: split.progress, privateWork: split.privateWork }),
      expected_revision: Number(revision) || 0,
      client_source: clientSource(),
    }
  }

  async function save(language, snapshot, revision, options) {
    return outbox.sendOrQueue('snapshot', await snapshotPayload(language, snapshot, revision), options)
  }

  async function importLegacy(language, snapshot, revision, importId, options) {
    const payload = await snapshotPayload(language, snapshot, revision)
    return outbox.sendOrQueue('import', { ...payload, import_id: importId }, options)
  }

  async function recordActivity(language, activity, options) {
    const definition = getLanguageDefinition(language)
    if (!definition) throw new TypeError('language_activity_invalid')
    return outbox.sendOrQueue('activity', {
      language_code: definition.code,
      program_context: definition.programContext,
      activity_type: activity.activityType,
      activity_id: activity.activityId,
      content_revision: String(activity.contentRevision ?? definition.contentVersion),
      skill_domain: activity.skillDomain ?? 'general',
      correct_count: activity.correctCount,
      incorrect_count: activity.incorrectCount,
      blank_count: activity.blankCount,
      help_count: activity.helpCount,
      review_outcome: activity.reviewOutcome,
      completion_status: activity.completionStatus,
      duration_minutes: activity.durationMinutes,
      cefr_level: activity.cefrLevel,
      occurred_at: activity.occurredAt ?? new Date().toISOString(),
      client_source: clientSource(),
    }, options)
  }

  async function deleteProgress(language, resetGeneration, options) {
    const definition = getLanguageDefinition(language)
    if (!definition) throw new TypeError('language_delete_invalid')
    return outbox.sendOrQueue('delete', {
      language_code: definition.code,
      program_context: definition.programContext,
      reset_generation: Number(resetGeneration) || 1,
    }, options)
  }

  return Object.freeze({
    load, save, importLegacy, recordActivity, deleteProgress,
    flush: outbox.flush, pending: outbox.list, discard: outbox.discard,
    summarize: (language, snapshot) => summarizeLanguageProgress(snapshot, { language }),
    succeeded: languageActionSucceeded,
  })
}
