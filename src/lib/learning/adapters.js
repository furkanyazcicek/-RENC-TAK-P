import { splitSubjectTopic } from '../subjectSplit.js'
import {
  createSourceScopedIdentity,
} from './curriculumIdentity.js'
import { getSourceDefinition } from './sourceRegistry.js'
import { resolveTopicIdentity } from './topicResolver.js'

export const SOURCE_ADAPTER_VERSION = 'learning-source-adapters@1'

const compact = (value) => Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined))
const compactRelations = (value) => Object.fromEntries(Object.entries(value).filter(([, item]) => item != null && item !== ''))
const asCount = (value) => value == null || value === '' ? 0 : Number(value)

function normalizeCompletionStatus(value) {
  const status = String(value ?? '').trim().toLocaleLowerCase('tr')
  if (['completed', 'tamamlandı', 'tamamlandi'].includes(status)) return 'completed'
  if (['not_started', 'pending', 'planlandı', 'planlandi'].includes(status)) return 'not_started'
  if (['in_progress', 'yapılıyor', 'yapiliyor'].includes(status)) return 'in_progress'
  if (['skipped', 'cancelled', 'canceled', 'iptal'].includes(status)) return 'skipped'
  return null
}

function timeFields({ occurredAt = null, occurredOn = null, timePrecision = null, asOf = null, recordKind = 'event' } = {}) {
  const precision = timePrecision ?? (occurredAt ? 'exact' : occurredOn ? 'day' : 'unknown')
  return compact({
    occurred_at_precision: precision,
    occurred_at: precision === 'exact' ? occurredAt : undefined,
    occurred_on: precision === 'day' ? occurredOn : undefined,
    as_of: recordKind === 'snapshot' ? asOf : undefined,
  })
}

function baseDraft({
  sourceCode,
  semanticEventType,
  recordKind = 'event',
  sourceRecordId,
  sourceRevision,
  clientActionId,
  opaqueLocatorToken,
  occurredAt,
  occurredOn,
  timePrecision,
  asOf,
  measurement,
  metadata,
  activityType,
  relations,
}) {
  return compact({
    record_kind: recordKind,
    semantic_event_type: semanticEventType,
    activity_type: activityType ?? semanticEventType,
    source_code: sourceCode,
    source_record_id: sourceRecordId == null ? undefined : String(sourceRecordId),
    source_revision: sourceRevision == null ? undefined : String(sourceRevision),
    client_action_id: clientActionId,
    ...timeFields({ occurredAt, occurredOn, timePrecision, asOf, recordKind }),
    measurement: measurement && Object.keys(measurement).length ? compact(measurement) : undefined,
    metadata: metadata && Object.keys(metadata).length ? compact(metadata) : undefined,
    relations: relations && Object.keys(compactRelations(relations)).length ? compactRelations(relations) : undefined,
    source_locator: opaqueLocatorToken
      ? `drkoc-ref:v1:${sourceCode}:${opaqueLocatorToken}`
      : undefined,
  })
}

function answerCounts(raw, { provenance = 'source_record', includeNet = false, examType = null } = {}) {
  const hasCounts = [
    'correct_count', 'correct', 'incorrect_count', 'incorrect',
    'blank_count', 'empty', 'blank',
  ].some((field) => raw[field] != null && raw[field] !== '')
  if (!hasCounts) return {}
  const correct = asCount(raw.correct_count ?? raw.correct)
  const incorrect = asCount(raw.incorrect_count ?? raw.incorrect)
  const blank = asCount(raw.blank_count ?? raw.empty ?? raw.blank)
  const marked = correct + incorrect
  const total = correct + incorrect + blank
  const measurement = {
    correct_count: correct,
    incorrect_count: incorrect,
    blank_count: blank,
    marked_count: marked,
    total_count: total,
  }
  if (marked > 0) {
    measurement.accuracy = correct / marked
    measurement.accuracy_denominator = 'marked'
    measurement.accuracy_formula = 'correct_count / marked_count'
    measurement.accuracy_formula_version = 'accuracy-marked-v1'
    measurement.accuracy_source = provenance
  }
  if (includeNet && ['LGS', 'TYT', 'AYT', 'KPSS'].includes(String(examType ?? '').toUpperCase())) {
    const normalizedExam = String(examType ?? '').toUpperCase()
    const divisor = normalizedExam === 'LGS' ? 3 : 4
    measurement.net_score = correct - incorrect / divisor
    measurement.net_formula = `correct_count - incorrect_count / ${divisor}`
    measurement.net_formula_version = normalizedExam === 'LGS' ? 'net-lgs-v1' : 'net-standard-v1'
    measurement.net_exam_type = normalizedExam
    measurement.net_source = provenance
  }
  return measurement
}

function withDuration(measurement, value, provenance = 'source_record') {
  if (value == null || value === '') return measurement
  return {
    ...measurement,
    duration_minutes: Number(value),
    duration_source: provenance,
  }
}

function topicResolution({ subject, topic, sourceExamType = null, profileExamType = null, topicMatched = true, contextOrigin = null }) {
  return resolveTopicIdentity({
    subject,
    topic,
    examType: sourceExamType,
    contextOrigin: contextOrigin ?? (sourceExamType ? 'source_record' : 'profile_hint'),
    profileExamType,
    topicMatched,
  })
}

function wrapped(adapter, draft, identityResolution = null, recommendations = {}) {
  const source = getSourceDefinition(draft.source_code)
  const eligibility = recommendations.eligible === false
    ? Object.freeze({ status: 'ineligible', reasonCode: recommendations.reasonCode ?? 'SOURCE_CONDITION_NOT_MET' })
    : Object.freeze({ status: 'ready', reasonCode: null })
  return Object.freeze({
    adapter,
    adapterVersion: SOURCE_ADAPTER_VERSION,
    source,
    draft,
    identityResolution,
    eligibility,
    recommendedEvidenceClass: source?.evidence_class_by_event?.[draft.semantic_event_type] ?? recommendations.evidenceClass ?? source?.default_evidence_class ?? null,
    recommendedEvidenceStrength: recommendations.evidenceStrength ?? 'low',
    recommendedActorRole: recommendations.actorRole ?? null,
    recommendedActorStudentRelation: recommendations.actorStudentRelation ?? null,
  })
}

export function trustedIdentityClaims(adapted) {
  const resolution = adapted?.identityResolution
  if (!resolution || ['ambiguous', 'unmatched'].includes(resolution.status)) {
    return { identity_resolution: resolution ?? null }
  }
  return {
    identity_resolution: resolution,
    education_context_id: resolution.educationContextId ?? null,
    subject_id: resolution.subjectId ?? null,
    topic_id: /^(drkoc:curriculum:topic:|drkoc:language:|drkoc:atlas:)/.test(resolution.canonicalId ?? '') ? resolution.canonicalId : null,
  }
}

/** Adaptör önerileri güvenilen kaynak kodundan gelir; istemci taslağına yazılmaz. */
export function trustedAdapterClaims(adapted) {
  const identityClaims = adapted?.eligibility?.status === 'ineligible'
    ? {
        identity_resolution: {
          status: 'unmatched',
          canonicalId: null,
          quarantineReason: adapted.eligibility.reasonCode,
          resolverVersion: 'topic-resolver@1',
        },
        education_context_id: null,
        subject_id: null,
        topic_id: null,
      }
    : trustedIdentityClaims(adapted)
  return {
    ...identityClaims,
    evidence_class: adapted?.recommendedEvidenceClass ?? null,
    evidence_strength: adapted?.recommendedEvidenceStrength ?? 'low',
    source_adapter_version: adapted?.adapterVersion ?? SOURCE_ADAPTER_VERSION,
    ...(adapted?.recommendedActorRole ? { actor_role: adapted.recommendedActorRole } : {}),
    ...(adapted?.recommendedActorStudentRelation ? { actor_student_relation: adapted.recommendedActorStudentRelation } : {}),
  }
}

export function adaptDailyLog(record, context = {}) {
  const split = record.subject && record.topic
    ? { subject: record.subject, topic: record.topic }
    : splitSubjectTopic(record.topic)
  const identity = topicResolution({
    subject: split.subject,
    topic: split.topic,
    sourceExamType: record.exam_type ?? null,
    profileExamType: context.profileExamType ?? null,
  })
  const measurement = withDuration(
    answerCounts(record, { provenance: 'student_reported' }),
    record.duration_minutes,
    'student_reported'
  )
  return wrapped('adaptDailyLog', baseDraft({
    sourceCode: 'daily_logs',
    semanticEventType: 'study_session_reported',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredOn: record.study_date,
    timePrecision: record.study_date ? 'day' : 'unknown',
    measurement,
    metadata: {
      note_present: Boolean(record.notes ?? record.note),
      entry_origin: context.entryOrigin ?? 'daily_tracking',
    },
  }), identity, { evidenceClass: 'student_self_report' })
}

export function adaptMockExamSubject(record, context = {}) {
  const examType = String(record.exam_type ?? context.examType ?? '').toUpperCase()
  const identity = resolveTopicIdentity({ examType, subject: record.subject, contextOrigin: 'source_record' })
  return wrapped('adaptMockExamSubject', baseDraft({
    sourceCode: 'mock_exam_subjects',
    semanticEventType: 'mock_exam_subject_result_reported',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredOn: record.exam_date ?? context.examDate,
    timePrecision: record.exam_date || context.examDate ? 'day' : 'unknown',
    measurement: withDuration(answerCounts(record, { provenance: 'student_reported', includeNet: true, examType }), record.duration_minutes, 'student_reported'),
    metadata: { exam_name: String(record.exam_name ?? '').slice(0, 256), exam_scope: 'general' },
    relations: { exam_id: record.mock_exam_id ?? record.exam_id },
  }), identity, { evidenceClass: 'student_self_report' })
}

export function adaptBranchExam(record, context = {}) {
  const examType = String(record.exam_type ?? context.examType ?? '').toUpperCase()
  const { subject, topic } = splitSubjectTopic(record.topic ?? record.subject)
  const identity = topic && topic !== subject
    ? topicResolution({ subject, topic, sourceExamType: examType || null, profileExamType: context.profileExamType })
    : resolveTopicIdentity({ examType, subject, contextOrigin: 'source_record' })
  return wrapped('adaptBranchExam', baseDraft({
    sourceCode: 'branch_exams',
    semanticEventType: 'branch_exam_result_reported',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredOn: record.exam_date,
    timePrecision: record.exam_date ? 'day' : 'unknown',
    measurement: withDuration(answerCounts(record, { provenance: 'student_reported', includeNet: true, examType }), record.duration_minutes, 'student_reported'),
    metadata: { exam_name: String(record.exam_name ?? record.name ?? '').slice(0, 256), legacy_score_present: record.score != null },
    relations: { exam_id: record.id },
  }), identity, { evidenceClass: 'student_self_report' })
}

export function adaptHomework(record, context = {}) {
  const eventType = record.semantic_event_type ?? 'homework_status_reported'
  const isAssignment = eventType === 'homework_assigned'
  const completionStatus = normalizeCompletionStatus(record.status)
  return wrapped('adaptHomework', baseDraft({
    sourceCode: 'homeworks',
    semanticEventType: eventType,
    recordKind: isAssignment ? 'event' : 'snapshot',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: isAssignment ? context.occurredAt : undefined,
    timePrecision: isAssignment && context.occurredAt ? 'exact' : 'unknown',
    asOf: isAssignment ? undefined : context.asOf,
    measurement: isAssignment || !completionStatus ? undefined : { completion_status: completionStatus, completion_source: 'student_reported' },
    metadata: { due_date_present: Boolean(record.due_date), lesson_session_present: Boolean(record.lesson_session_id) },
    relations: { homework_id: record.id, session_id: record.lesson_session_id },
  }), null, isAssignment
    ? { actorRole: 'teacher', actorStudentRelation: 'authorized_teacher' }
    : { actorRole: 'student', actorStudentRelation: 'self', eligible: Boolean(completionStatus), reasonCode: 'HOMEWORK_STATUS_UNKNOWN' })
}

export function adaptTeacherQuestionFeedback(record, context = {}) {
  const identity = topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
  const eventType = record.semantic_event_type ?? (record.teacher_reply ? 'teacher_feedback_shared' : 'question_submitted')
  const isFeedback = eventType === 'teacher_feedback_shared'
  return wrapped('adaptTeacherQuestionFeedback', baseDraft({
    sourceCode: 'questions_teacher_feedback',
    semanticEventType: eventType,
    recordKind: isFeedback ? 'snapshot' : 'event',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: isFeedback ? undefined : context.occurredAt,
    timePrecision: isFeedback ? 'unknown' : context.occurredAt ? 'exact' : 'unknown',
    asOf: isFeedback ? context.asOf : undefined,
    measurement: isFeedback ? compact({
      help_used: true,
      help_source: 'teacher_entered',
      student_correct: typeof context.studentCorrect === 'boolean' ? context.studentCorrect : undefined,
      student_correct_source: typeof context.studentCorrect === 'boolean' ? 'teacher_entered' : undefined,
    }) : undefined,
    metadata: { status: record.status ?? 'answered', reply_present: Boolean(record.teacher_reply), image_present: Boolean(record.image_url) },
    relations: { question_id: record.id },
  }), identity, {
    evidenceClass: isFeedback ? 'teacher_feedback' : 'exposure',
    actorRole: isFeedback ? 'teacher' : 'student',
    actorStudentRelation: isFeedback ? 'authorized_teacher' : 'self',
    eligible: !isFeedback || Boolean(record.teacher_reply),
    reasonCode: 'TEACHER_FEEDBACK_NOT_SHARED',
  })
}

export function adaptCoachAction(record, context = {}) {
  const eventType = record.semantic_event_type ?? 'study_task_status_changed'
  const completionStatus = normalizeCompletionStatus(record.status)
  const identity = record.subject && record.topic
    ? topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
    : null
  return wrapped('adaptCoachAction', baseDraft({
    sourceCode: 'ai_coach_actions',
    semanticEventType: eventType,
    recordKind: record.record_kind ?? 'event',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: context.occurredAt,
    timePrecision: context.occurredAt ? 'exact' : 'unknown',
    asOf: context.asOf,
    measurement: compact({
      completion_status: eventType === 'study_task_status_changed' ? completionStatus ?? undefined : undefined,
      completion_source: eventType === 'study_task_status_changed' && completionStatus ? 'student_reported' : undefined,
      duration_minutes: record.duration_minutes,
      duration_source: record.duration_minutes == null ? undefined : 'student_reported',
    }),
    metadata: { plan_group_present: Boolean(record.plan_group_id), memory_key: record.memory_key ?? 'none' },
    relations: { plan_id: record.plan_group_id },
  }), identity, {
    evidenceClass: 'student_self_report',
    eligible: eventType !== 'study_task_status_changed' || Boolean(completionStatus),
    reasonCode: 'STUDY_TASK_STATUS_UNKNOWN',
  })
}

export function adaptAiSolveEvent(record, context = {}) {
  const identity = topicResolution({
    subject: record.subject,
    topic: record.topic,
    sourceExamType: record.exam_type,
    profileExamType: context.profileExamType,
    topicMatched: record.topic_matched !== false,
    contextOrigin: context.examContextOrigin ?? (record.exam_context_origin || (record.exam_type ? 'inferred' : 'unknown')),
  })
  const eventType = record.semantic_event_type ?? 'solution_requested'
  const evidenceClass = eventType === 'solution_requested'
    ? 'exposure'
    : eventType === 'answer_checked'
      ? 'model_inference'
      : eventType === 'feedback_reported'
        ? 'student_self_report'
        : 'system_observation'
  const carriesStudentCorrect = typeof record.student_correct === 'boolean' && ['answer_checked', 'feedback_reported'].includes(eventType)
  return wrapped('adaptAiSolveEvent', baseDraft({
    sourceCode: 'ai_solution_sessions',
    semanticEventType: eventType,
    sourceRecordId: record.event_id ?? record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: record.created_at ?? context.occurredAt,
    timePrecision: record.created_at || context.occurredAt ? 'exact' : 'unknown',
    measurement: compact({
      help_used: ['help_requested', 'solution_requested'].includes(eventType) ? true : undefined,
      help_source: ['help_requested', 'solution_requested'].includes(eventType) ? 'source_record' : undefined,
      student_correct: carriesStudentCorrect ? record.student_correct : undefined,
      student_correct_source: carriesStudentCorrect
        ? eventType === 'answer_checked' ? 'model_inferred' : eventType === 'feedback_reported' ? 'student_reported' : 'client_interaction'
        : undefined,
    }),
    metadata: { event_type: eventType, topic_matched: typeof record.topic_matched === 'boolean' ? record.topic_matched : undefined, review_state: record.review_state ?? 'none' },
    relations: { session_id: record.session_id ?? record.id },
  }), identity, {
    evidenceClass,
    actorRole: eventType === 'answer_checked' ? 'model' : 'student',
    actorStudentRelation: eventType === 'answer_checked' ? 'service_for_student' : 'self',
  })
}

export function adaptAiSolveReview(record, context = {}) {
  return wrapped('adaptAiSolveReview', baseDraft({
    sourceCode: 'ai_solution_review',
    semanticEventType: 'review_state_reported',
    recordKind: 'snapshot',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    timePrecision: 'unknown',
    asOf: context.asOf,
    measurement: { completion_status: record.reviewed ? 'completed' : 'in_progress', completion_source: 'student_reported' },
    metadata: { review_state: record.reviewed ? 'reviewed' : 'needed', storage_scope: context.storageScope ?? 'server' },
    relations: { session_id: record.id },
  }), null, { evidenceClass: 'student_self_report' })
}

function adaptLesson(record, context, bundled) {
  const sourceCode = bundled ? 'bundled_lesson_activity' : 'structured_lesson_activity'
  const identity = topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
  const eventType = record.event_type ?? 'lesson_opened'
  const isAnswer = eventType === 'quiz_answered' || eventType === 'osym_simulation_answered'
  const measurement = compact({
    student_correct: isAnswer && typeof record.is_correct === 'boolean' ? record.is_correct : undefined,
    student_correct_source: isAnswer && typeof record.is_correct === 'boolean' ? 'system_measured' : undefined,
    completion_status: eventType === 'lesson_completed' ? 'completed' : undefined,
    completion_source: eventType === 'lesson_completed' ? 'client_interaction' : undefined,
    duration_minutes: record.duration_minutes,
    duration_source: record.duration_minutes == null ? undefined : (context.durationSource ?? 'active_measurement'),
  })
  const evidenceClass = isAnswer
    ? 'direct_measurement'
    : eventType === 'lesson_opened' || eventType.startsWith('audio_') || eventType === 'visual_audio_clicked'
      ? 'exposure'
      : 'system_observation'
  const sourceIdentityReady = bundled
    ? Boolean(record.lesson_id && (context.contentRevision ?? context.sourceRevision))
    : Boolean(record.event_id)
  const answerReady = !isAnswer || Boolean(record.block_id && typeof record.is_correct === 'boolean')
  return wrapped(bundled ? 'adaptBundledLessonEvent' : 'adaptStructuredLessonEvent', baseDraft({
    sourceCode,
    semanticEventType: eventType,
    sourceRecordId: bundled ? `${record.lesson_id}:${record.block_id ?? eventType}` : record.event_id,
    sourceRevision: context.sourceRevision ?? (bundled ? context.contentRevision : undefined),
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: context.occurredAt,
    timePrecision: context.occurredAt ? 'exact' : 'unknown',
    measurement,
    metadata: bundled
      ? { lesson_slug: record.lesson_id, content_revision: context.contentRevision ?? 'v1', block_id: record.block_id ?? 'none', section_id: record.section_id ?? 'none' }
      : { lesson_kind: 'database', block_id: record.block_id ?? 'none', section_id: record.section_id ?? 'none', event_type: eventType },
    relations: { lesson_id: record.lesson_id, content_id: record.block_id },
  }), identity, {
    evidenceClass,
    eligible: sourceIdentityReady && answerReady,
    reasonCode: isAnswer ? 'LESSON_ANSWER_ID_OR_RESULT_REQUIRED' : 'LESSON_CONTENT_IDENTITY_REQUIRED',
  })
}

export const adaptStructuredLessonEvent = (record, context = {}) => adaptLesson(record, context, false)
export const adaptBundledLessonEvent = (record, context = {}) => adaptLesson(record, context, true)

export function adaptContentExposure(record, context = {}) {
  const identity = topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
  return wrapped('adaptContentExposure', baseDraft({
    sourceCode: 'library_note_exposure',
    semanticEventType: 'note_opened',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: context.occurredAt,
    timePrecision: context.occurredAt ? 'exact' : 'unknown',
    metadata: { content_kind: record.content_kind ?? 'note', content_revision: context.contentRevision ?? 'v1' },
    relations: { content_id: record.id },
  }), identity, { evidenceClass: 'exposure' })
}

export function adaptQuestionTestResult(record, context = {}) {
  const sourceCode = context.sourceCode ?? 'db_question_test'
  const identity = topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
  const measurement = withDuration(answerCounts(record, { provenance: 'system_measured' }), record.duration_minutes, context.durationSource ?? 'active_measurement')
  if (typeof record.student_correct === 'boolean') {
    measurement.student_correct = record.student_correct
    measurement.student_correct_source = 'system_measured'
  }
  return wrapped('adaptQuestionTestResult', baseDraft({
    sourceCode,
    semanticEventType: record.semantic_event_type ?? 'test_completed',
    recordKind: record.record_kind ?? 'event',
    sourceRecordId: record.attempt_id ?? record.id,
    sourceRevision: context.sourceRevision ?? context.contentRevision,
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: context.occurredAt,
    timePrecision: context.occurredAt ? 'exact' : 'unknown',
    asOf: context.asOf,
    measurement,
    metadata: compact({ question_set_id: record.question_set_id ?? record.set_id, content_revision: context.contentRevision ?? 'v1', attempt_scope: context.attemptScope ?? 'complete' }),
    relations: { attempt_id: record.attempt_id ?? record.id, content_id: record.question_set_id ?? record.set_id, question_id: record.question_id },
  }), identity, { evidenceClass: 'direct_measurement' })
}

export function adaptLanguageSnapshot(record, context = {}) {
  const sourceCode = context.sourceCode
  const rawLocalId = record.lesson_id ?? record.exercise_id ?? record.word_id ?? record.id
  const localId = rawLocalId == null ? '' : String(rawLocalId)
  const scopedId = createSourceScopedIdentity({ scope: 'language', sourceCode, localId })
  const identity = resolveTopicIdentity({
    identityScope: 'language',
    sourceScopedId: scopedId,
    sourceCode,
    language: context.language,
    level: record.cefr_level,
    contentVersion: context.contentRevision ?? record.storage_version,
  })
  const eventType = context.semanticEventType ?? record.semantic_event_type ?? 'lesson_result_snapshot'
  const evidenceClass = eventType === 'self_report_snapshot'
    ? 'student_self_report'
    : 'system_observation'
  return wrapped('adaptLanguageSnapshot', baseDraft({
    sourceCode,
    semanticEventType: eventType,
    recordKind: 'snapshot',
    sourceRecordId: `${context.snapshotSection ?? 'lesson'}:${localId}`,
    sourceRevision: context.sourceRevision ?? record.storage_version ?? 'v1',
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    timePrecision: 'unknown',
    asOf: context.asOf,
    measurement: withDuration(answerCounts(record, { provenance: 'system_measured' }), record.duration_minutes, context.durationSource ?? 'approximate'),
    metadata: { language: context.language, cefr_level: record.cefr_level ?? 'unknown', lesson_id: localId, skill: record.skill ?? 'general', storage_version: record.storage_version ?? 'v1', snapshot_section: context.snapshotSection ?? 'lesson' },
    relations: { lesson_id: record.lesson_id, content_id: record.exercise_id ?? record.word_id },
  }), identity, { evidenceClass })
}

export function adaptAtlasSnapshot(record, context = {}) {
  const sourceCode = context.sourceCode
  const rawLocalId = record.task_code ?? record.question_id ?? record.id
  const localId = rawLocalId == null ? '' : String(rawLocalId)
  const scopedId = createSourceScopedIdentity({ scope: 'atlas', sourceCode, localId })
  const identity = resolveTopicIdentity({ identityScope: 'atlas', sourceScopedId: scopedId, relatedCurriculumId: context.relatedCurriculumId, relatedCurriculumVerified: context.relatedCurriculumVerified === true, sourceCode, atlas: context.atlas, contentVersion: context.contentRevision ?? record.storage_version })
  const measurement = compact({
    ...answerCounts(record, { provenance: 'system_measured' }),
    completion_status: record.completed === true ? 'completed' : record.completed === false ? 'in_progress' : undefined,
    completion_source: typeof record.completed === 'boolean' ? 'system_measured' : undefined,
    duration_minutes: record.duration_minutes,
    duration_source: record.duration_minutes == null ? undefined : (context.durationSource ?? 'active_measurement'),
  })
  const eventType = context.semanticEventType ?? record.semantic_event_type ?? 'atlas_task_state'
  const evidenceClass = ['concept_check_answered', 'mini_test_completed', 'timed_test_completed'].includes(eventType)
    ? 'direct_measurement'
    : 'system_observation'
  const requiresVersionedAttempt = sourceCode === 'chemistry_atlas'
  const hasVersionedAttempt = Boolean((context.contentRevision ?? record.storage_version) && (record.attempt_id ?? record.id))
  return wrapped('adaptAtlasSnapshot', baseDraft({
    sourceCode,
    semanticEventType: eventType,
    recordKind: context.recordKind ?? 'snapshot',
    sourceRecordId: `${context.regionCode ?? 'global'}:${localId}`,
    sourceRevision: context.sourceRevision ?? record.storage_version ?? 'v1',
    clientActionId: context.clientActionId,
    opaqueLocatorToken: context.opaqueLocatorToken,
    occurredAt: context.occurredAt,
    timePrecision: context.recordKind === 'event' && context.occurredAt ? 'exact' : 'unknown',
    asOf: context.asOf,
    measurement,
    metadata: { atlas: context.atlas, region_code: context.regionCode ?? 'global', task_code: localId, storage_version: record.storage_version ?? 'v1', timed: Boolean(record.timed) },
    relations: { attempt_id: record.attempt_id, question_id: record.question_id, content_id: record.task_code ?? record.id },
  }), identity, {
    evidenceClass,
    eligible: !requiresVersionedAttempt || hasVersionedAttempt,
    reasonCode: 'ATLAS_VERSIONED_ATTEMPT_REQUIRED',
  })
}

export function adaptLiveLessonAttendance(record, context = {}) {
  const identity = record.subject && record.topic
    ? topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
    : null
  return wrapped('adaptLiveLessonAttendance', baseDraft({
    sourceCode: 'live_lesson_attendance',
    semanticEventType: 'lesson_attendance_state',
    recordKind: 'snapshot',
    sourceRecordId: `${record.session_id}:${record.participant_id}`,
    sourceRevision: context.sourceRevision,
    opaqueLocatorToken: context.opaqueLocatorToken,
    timePrecision: 'unknown',
    asOf: context.asOf,
    measurement: record.duration_minutes == null
      ? undefined
      : { duration_minutes: Number(record.duration_minutes), duration_source: 'active_measurement' },
    metadata: { session_id: record.session_id, attendance_state: record.state ?? 'joined' },
    relations: { session_id: record.session_id },
  }), identity, {
    evidenceClass: 'exposure',
    eligible: Boolean(record.session_id && record.participant_id),
    reasonCode: 'ATTENDANCE_MEMBERSHIP_ID_REQUIRED',
  })
}

export function adaptSharedLessonSummary(record, context = {}) {
  const identity = record.subject && record.topic
    ? topicResolution({ subject: record.subject, topic: record.topic, sourceExamType: record.exam_type, profileExamType: context.profileExamType })
    : null
  const eventType = context.semanticEventType ?? 'teacher_summary_shared'
  const isShared = record.shared_with_student === true
  return wrapped('adaptSharedLessonSummary', baseDraft({
    sourceCode: 'live_lesson_shared_summary',
    semanticEventType: eventType,
    recordKind: 'snapshot',
    sourceRecordId: record.lesson_session_id,
    sourceRevision: context.sourceRevision,
    opaqueLocatorToken: context.opaqueLocatorToken,
    timePrecision: 'unknown',
    asOf: context.asOf,
    measurement: context.completionStatus ? { completion_status: context.completionStatus, completion_source: eventType === 'teacher_summary_shared' ? 'teacher_entered' : 'student_reported' } : undefined,
    metadata: { session_id: record.lesson_session_id, shared_with_student: record.shared_with_student === true, feedback_kind: context.feedbackKind ?? 'summary' },
    relations: { session_id: record.lesson_session_id },
  }), identity, {
    evidenceClass: eventType === 'student_feedback_reported' ? 'student_self_report' : 'teacher_feedback',
    eligible: isShared,
    reasonCode: 'LESSON_SUMMARY_NOT_SHARED',
    actorRole: eventType === 'student_feedback_reported' ? 'student' : 'teacher',
    actorStudentRelation: eventType === 'student_feedback_reported' ? 'self' : 'authorized_teacher',
  })
}

export function adaptProfileSnapshot(record, context = {}) {
  const examType = String(record.target_exam ?? '').toUpperCase()
  const identity = resolveTopicIdentity({ examType, contextOrigin: 'user_selection' })
  return wrapped('adaptProfileSnapshot', baseDraft({
    sourceCode: 'student_profile',
    semanticEventType: 'education_goal_snapshot',
    recordKind: 'snapshot',
    sourceRecordId: record.id,
    sourceRevision: context.sourceRevision,
    opaqueLocatorToken: context.opaqueLocatorToken,
    timePrecision: 'unknown',
    asOf: context.asOf,
    metadata: { target_exam: examType, grade_level: record.grade_level ?? 'unknown', exam_date_precision: record.exam_date ? 'day' : 'unknown' },
  }), identity, { evidenceClass: 'student_self_report' })
}

export const SOURCE_ADAPTERS = Object.freeze({
  adaptDailyLog,
  adaptMockExamSubject,
  adaptBranchExam,
  adaptHomework,
  adaptTeacherQuestionFeedback,
  adaptCoachAction,
  adaptAiSolveEvent,
  adaptAiSolveReview,
  adaptStructuredLessonEvent,
  adaptBundledLessonEvent,
  adaptContentExposure,
  adaptQuestionTestResult,
  adaptLanguageSnapshot,
  adaptAtlasSnapshot,
  adaptLiveLessonAttendance,
  adaptSharedLessonSummary,
  adaptProfileSnapshot,
})
