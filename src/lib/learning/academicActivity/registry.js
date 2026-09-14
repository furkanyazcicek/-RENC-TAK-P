/** Faz 4 — ana akademik kaynakların eklemeli, sürümlü izdüşümü. */

export const ACADEMIC_REGISTRY_VERSION = 'learning-academic-registry@1'
export const ACADEMIC_ADAPTER_VERSION = 'learning-academic-adapters@1'
export const ACADEMIC_CLIENT_VERSION = 'learning-academic-client@1'

const connected = 'locally_implemented_live_not_applied'
const derived = 'local_derived_confirmed'
const excluded = 'local_exclusion_confirmed'

const define = (matrixId, sourceCode, classification, values = {}) => Object.freeze({
  matrix_id: matrixId,
  source_code: sourceCode,
  classification,
  ingest_allowed: ['emitter', 'conditional_emitter'].includes(classification),
  registry_version: ACADEMIC_REGISTRY_VERSION,
  contract_version: 'learning-evidence@1',
  adapter_version: values.adapter ? ACADEMIC_ADAPTER_VERSION : null,
  resolver_version: values.resolver === false ? null : 'topic-resolver@1',
  decision_status: classification === 'derived_readonly' ? derived : classification === 'excluded' ? excluded : connected,
  identity_scope: values.identity_scope ?? 'curriculum',
  record_kinds: Object.freeze(values.record_kinds ?? []),
  semantic_event_types: Object.freeze(values.semantic_event_types ?? []),
  evidence_class_by_event: Object.freeze(values.evidence_class_by_event ?? {}),
  allowed_measurements: Object.freeze(values.allowed_measurements ?? []),
  allowed_metadata: Object.freeze(values.allowed_metadata ?? []),
  adapter: values.adapter ?? null,
  authority: values.authority ?? 'server_bound_source',
  mutation_semantics: values.mutation_semantics ?? 'append_only',
  historical_strategy: values.historical_strategy ?? 'historical_provider',
  notes: values.notes ?? '',
})

export const ACADEMIC_SOURCE_REGISTRY = Object.freeze([
  define('M01', 'home_summary', 'derived_readonly', { resolver: false, historical_strategy: 'derived_no_evidence' }),
  define('M02', 'analytics_view', 'derived_readonly', { resolver: false, historical_strategy: 'derived_no_evidence' }),
  define('M03', 'daily_logs', 'emitter', {
    adapter: 'adaptAcademicDailyLog', record_kinds: ['event', 'correction', 'tombstone'],
    semantic_event_types: ['study_session_reported', 'question_counts_reported'],
    evidence_class_by_event: { study_session_reported: 'student_self_report', question_counts_reported: 'student_self_report' },
    allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'marked_count', 'total_count', 'accuracy', 'duration_minutes'],
    allowed_metadata: ['note_present', 'entry_origin'], mutation_semantics: 'revisioned_with_tombstone',
  }),
  define('M04', 'mock_exam_subjects', 'emitter', {
    adapter: 'adaptAcademicMockExam', record_kinds: ['event', 'correction', 'tombstone'],
    semantic_event_types: ['mock_exam_session_reported', 'mock_exam_subject_result_reported'],
    evidence_class_by_event: { mock_exam_session_reported: 'student_self_report', mock_exam_subject_result_reported: 'student_self_report' },
    allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'marked_count', 'total_count', 'accuracy', 'net_score', 'duration_minutes'],
    allowed_metadata: ['exam_name', 'exam_scope'], mutation_semantics: 'atomic_parent_children_with_tombstone',
  }),
  define('M05', 'branch_exams', 'emitter', {
    adapter: 'adaptAcademicBranchExam', record_kinds: ['event', 'correction', 'tombstone'],
    semantic_event_types: ['branch_exam_result_reported', 'branch_exam_result_entered_by_teacher'],
    evidence_class_by_event: { branch_exam_result_reported: 'student_self_report', branch_exam_result_entered_by_teacher: 'teacher_feedback' },
    allowed_measurements: ['correct_count', 'incorrect_count', 'blank_count', 'marked_count', 'total_count', 'accuracy', 'net_score', 'duration_minutes'],
    allowed_metadata: ['exam_name', 'legacy_score_present', 'exam_scope'], mutation_semantics: 'revisioned_with_tombstone',
  }),
  define('M06', 'homeworks', 'conditional_emitter', {
    adapter: 'adaptAcademicHomework', record_kinds: ['event', 'snapshot', 'correction', 'tombstone'],
    semantic_event_types: ['homework_assigned', 'homework_status_reported'],
    evidence_class_by_event: { homework_assigned: 'system_observation', homework_status_reported: 'student_self_report' },
    allowed_measurements: ['completion_status'], allowed_metadata: ['due_date_present', 'lesson_session_present'],
    mutation_semantics: 'assignment_event_and_student_status_snapshot',
  }),
  define('M07', 'questions_teacher_feedback', 'conditional_emitter', {
    adapter: 'adaptAcademicQuestion', record_kinds: ['event', 'snapshot', 'correction'],
    semantic_event_types: ['question_submitted', 'teacher_feedback_shared', 'teacher_problem_question_shared'],
    evidence_class_by_event: { question_submitted: 'exposure', teacher_feedback_shared: 'teacher_feedback', teacher_problem_question_shared: 'teacher_feedback' },
    allowed_measurements: ['help_used'], allowed_metadata: ['status', 'reply_present', 'image_present', 'canvas_present', 'origin'],
    mutation_semantics: 'bidirectional_question_with_feedback_snapshot',
  }),
  define('M11', 'ai_solution_sessions', 'conditional_emitter', {
    adapter: 'adaptAcademicAiSolve', record_kinds: ['event', 'snapshot', 'correction'],
    semantic_event_types: ['solution_requested', 'help_requested', 'answer_checked', 'feedback_reported'],
    evidence_class_by_event: { solution_requested: 'exposure', help_requested: 'system_observation', answer_checked: 'model_inference', feedback_reported: 'student_self_report' },
    allowed_measurements: ['help_used', 'student_correct'], allowed_metadata: ['event_type', 'topic_matched', 'review_state'],
    mutation_semantics: 'durable_external_claim_and_atomic_finalize',
  }),
  define('M12', 'ai_solution_review', 'conditional_emitter', {
    adapter: 'adaptAcademicAiReview', record_kinds: ['snapshot', 'correction'],
    semantic_event_types: ['review_state_reported'],
    evidence_class_by_event: { review_state_reported: 'student_self_report' },
    allowed_measurements: ['completion_status'], allowed_metadata: ['review_state', 'storage_scope'],
    mutation_semantics: 'user_scoped_snapshot',
  }),
  define('M31', 'live_lesson_attendance', 'conditional_emitter', {
    adapter: 'adaptAcademicAttendance', record_kinds: ['snapshot', 'correction'],
    semantic_event_types: ['lesson_attendance_state'],
    evidence_class_by_event: { lesson_attendance_state: 'exposure' },
    allowed_measurements: ['duration_minutes'], allowed_metadata: ['session_id', 'attendance_state'],
    mutation_semantics: 'student_only_idempotent_duration_snapshot',
  }),
  define('M32', 'live_lesson_raw_stream', 'excluded', { resolver: false, historical_strategy: 'excluded' }),
  define('M33', 'live_lesson_shared_summary', 'conditional_emitter', {
    adapter: 'adaptAcademicLessonSummary', record_kinds: ['snapshot', 'correction', 'tombstone'],
    semantic_event_types: ['teacher_summary_shared', 'student_feedback_reported'],
    evidence_class_by_event: { teacher_summary_shared: 'teacher_feedback', student_feedback_reported: 'student_self_report' },
    allowed_measurements: ['completion_status'], allowed_metadata: ['session_id', 'shared_with_student', 'feedback_kind'],
    mutation_semantics: 'shared_snapshot_with_unshare_tombstone',
  }),
  define('M36', 'student_profile', 'conditional_emitter', {
    adapter: 'adaptAcademicProfile', identity_scope: 'context_only', record_kinds: ['snapshot', 'correction'],
    semantic_event_types: ['education_goal_snapshot'],
    evidence_class_by_event: { education_goal_snapshot: 'student_self_report' },
    allowed_metadata: ['target_exam', 'grade_level', 'exam_date_precision'],
    mutation_semantics: 'goal_fields_only_snapshot',
  }),
  define('M38', 'teacher_parent_support_routes', 'excluded', { resolver: false, historical_strategy: 'excluded' }),
])

export const ACADEMIC_SOURCE_BY_CODE = Object.freeze(Object.fromEntries(
  ACADEMIC_SOURCE_REGISTRY.map((entry) => [entry.source_code, entry])
))

export function validateAcademicRegistry() {
  const matrix = new Set()
  const sources = new Set()
  for (const entry of ACADEMIC_SOURCE_REGISTRY) {
    if (matrix.has(entry.matrix_id) || sources.has(entry.source_code)) throw new TypeError('academic_registry_duplicate')
    matrix.add(entry.matrix_id)
    sources.add(entry.source_code)
    if (entry.ingest_allowed && (!entry.adapter || entry.semantic_event_types.length === 0)) {
      throw new TypeError(`academic_registry_incomplete:${entry.source_code}`)
    }
  }
  return true
}
