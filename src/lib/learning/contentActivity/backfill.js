/**
 * Faz 3 geriye doldurma kararı salt-okunurdur. Bu modül veri tabanı yazmaz;
 * yalnız hangi tarihsel satırın anlamı kanıtlanabildiğini sınıflandırır.
 */

export const PHASE3_BACKFILL_VERSION = 'phase-3-backfill@1'

export const PHASE3_BACKFILL_DECISIONS = Object.freeze([
  ['M13', 'library_gateway', 'catalog_only', 'navigation_is_not_learning_evidence'],
  ['M14', 'library_catalog', 'catalog_only', 'content_identity_only'],
  ['M15', 'structured_lesson_activity', 'historical_provider', 'only_rows_with_pinned_revision_and_verified_meaning'],
  ['M16', 'bundled_lesson_activity', 'no_historical_source', 'no_persistent_source_before_phase_3'],
  ['M17', 'library_note_exposure', 'no_historical_source', 'viewer_open_was_not_recorded'],
  ['M18', 'lesson_personalization', 'derived_no_evidence', 'cache_overlay_is_derived'],
  ['M19', 'db_question_test', 'historical_provider', 'only_completed_attempts_with_pinned_revision'],
  ['M20', 'bundled_question_test', 'no_historical_source', 'route_state_was_not_authoritative'],
  ['M21', 'physics_atlas', 'explicit_device_import_only', 'ownerless_device_data_requires_consent'],
  ['M22', 'biology_atlas', 'explicit_device_import_only', 'ownerless_device_data_requires_consent'],
  ['M23', 'geography_atlas', 'explicit_device_import_only', 'aggregate_scores_are_not_direct_measurement'],
  ['M24', 'chemistry_atlas', 'no_historical_source', 'no_versioned_attempt_source'],
  ['M25', 'history_atlas_navigation', 'excluded', 'navigation_and_audio_are_not_learning_evidence'],
  ['M26', 'geometry_pilot', 'no_historical_source', 'no_versioned_attempt_source'],
].map(([matrix_id, source_code, strategy, historical_authority]) => Object.freeze({
  matrix_id,
  source_code,
  strategy,
  provider_name: strategy === 'historical_provider'
    ? source_code === 'structured_lesson_activity'
      ? 'phase3StructuredLessonEvents'
      : 'phase3DbQuestionAttempts'
    : null,
  historical_authority,
  live_apply_allowed: false,
  decision_version: PHASE3_BACKFILL_VERSION,
})))

const LESSON_EVENTS = new Set([
  'lesson_opened', 'quiz_answered', 'osym_simulation_answered',
  'lesson_completed', 'audio_started', 'audio_completed', 'visual_audio_clicked',
])

function safeId(value) {
  return typeof value === 'string' && value.length > 0
}

function classifyStructuredEvent(row) {
  if (!row || typeof row !== 'object') return 'record_invalid'
  if (!safeId(row.id) || !safeId(row.student_id)) return 'ownership_or_id_missing'
  if (!safeId(row.content_revision)) return 'content_revision_missing'
  if (!LESSON_EVENTS.has(row.event_name)) return 'semantic_event_unverified'
  if (['quiz_answered', 'osym_simulation_answered'].includes(row.event_name)
    && typeof row.is_correct !== 'boolean') return 'server_correctness_missing'
  return null
}

function classifyDbAttempt(row) {
  if (!row || typeof row !== 'object') return 'record_invalid'
  if (!safeId(row.id) || !safeId(row.student_id)) return 'ownership_or_id_missing'
  if (row.status !== 'completed' && row.completed_at == null) return 'attempt_not_completed'
  if (!safeId(row.content_revision)) return 'content_revision_missing'
  const counts = ['correct_count', 'wrong_count', 'empty_count']
    .map((key) => Number(row[key]))
  if (!counts.every(Number.isInteger) || counts.some((value) => value < 0)) {
    return 'server_counts_missing'
  }
  return null
}

function inspect(records, classify) {
  const ready = []
  const quarantined = []
  for (const row of Array.isArray(records) ? records : []) {
    const reason_code = classify(row)
    if (reason_code) quarantined.push({ source_record_id: row?.id ?? null, reason_code })
    else ready.push({ source_record_id: row.id, student_id: row.student_id })
  }
  return { scanned: ready.length + quarantined.length, ready, quarantined }
}

export function buildPhase3BackfillDryRun({ structuredEvents = [], dbAttempts = [] } = {}) {
  const structured = inspect(structuredEvents, classifyStructuredEvent)
  const db = inspect(dbAttempts, classifyDbAttempt)
  return Object.freeze({
    schema_version: '1.0',
    decision_version: PHASE3_BACKFILL_VERSION,
    mode: 'dry_run',
    writes_performed: 0,
    scanned_count: structured.scanned + db.scanned,
    ready_count: structured.ready.length + db.ready.length,
    quarantined_count: structured.quarantined.length + db.quarantined.length,
    sources: Object.freeze({
      structured_lesson_activity: Object.freeze(structured),
      db_question_test: Object.freeze(db),
    }),
    decisions: PHASE3_BACKFILL_DECISIONS,
  })
}

/**
 * Faz 2 createBackfillProviderRegistry ile kullanılabilecek iki kapalı provider.
 * Okuma callback'leri çağıran tarafından sabit SQL ile sağlanır; bu katman
 * tablo/kolon adı ya da keyfi sorgu kabul etmez.
 */
export function createPhase3BackfillProviders({ readStructuredPage, readDbAttemptPage } = {}) {
  const providers = []
  if (typeof readStructuredPage === 'function') {
    providers.push(Object.freeze({
      sourceCode: 'structured_lesson_activity',
      adapterName: 'adaptStructuredLessonEvent',
      maxBatchSize: 500,
      readPage: readStructuredPage,
      verifyOwnership(record) {
        const reason = classifyStructuredEvent(record)
        if (reason) throw Object.assign(new TypeError(reason), { code: 'PHASE3_HISTORY_UNVERIFIED' })
        return {
          studentId: record.student_id,
          actorId: record.student_id,
          actorRole: 'student',
          actorStudentRelation: 'authenticated_student',
          principalStudentId: record.student_id,
          trustLevel: 'authoritative_source',
        }
      },
      adapterContext: (record) => ({ contentRevision: record.content_revision }),
    }))
  }
  if (typeof readDbAttemptPage === 'function') {
    providers.push(Object.freeze({
      sourceCode: 'db_question_test',
      adapterName: 'adaptQuestionTestResult',
      maxBatchSize: 500,
      readPage: readDbAttemptPage,
      verifyOwnership(record) {
        const reason = classifyDbAttempt(record)
        if (reason) throw Object.assign(new TypeError(reason), { code: 'PHASE3_HISTORY_UNVERIFIED' })
        return {
          studentId: record.student_id,
          actorId: record.student_id,
          actorRole: 'student',
          actorStudentRelation: 'authenticated_student',
          principalStudentId: record.student_id,
          trustLevel: 'authoritative_source',
        }
      },
      adapterContext: (record) => ({ contentRevision: record.content_revision }),
    }))
  }
  return Object.freeze(providers)
}
