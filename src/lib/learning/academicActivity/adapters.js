import { ACADEMIC_ADAPTER_VERSION, ACADEMIC_SOURCE_BY_CODE } from './registry.js'

const number = (value) => value == null || value === '' ? 0 : Number(value)
const compact = (value) => Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined))

export function answerMeasurement(row, { examType = null, duration = row.duration_minutes } = {}) {
  const correct = number(row.correct)
  const incorrect = number(row.incorrect)
  const blank = number(row.empty ?? row.blank)
  const marked = correct + incorrect
  const measurement = {
    correct_count: correct, incorrect_count: incorrect, blank_count: blank,
    marked_count: marked, total_count: marked + blank,
  }
  if (marked > 0) Object.assign(measurement, {
    accuracy: correct / marked, accuracy_denominator: 'marked',
    accuracy_formula: 'correct_count / marked_count', accuracy_formula_version: 'accuracy-marked-v1',
    accuracy_source: 'student_reported',
  })
  const kind = String(examType ?? '').toUpperCase()
  if (['LGS', 'TYT', 'AYT', 'KPSS'].includes(kind)) {
    const divisor = kind === 'LGS' ? 3 : 4
    Object.assign(measurement, {
      net_score: correct - incorrect / divisor,
      net_formula: `correct_count - incorrect_count / ${divisor}`,
      net_formula_version: kind === 'LGS' ? 'net-lgs-v1' : 'net-standard-v1',
      net_exam_type: kind, net_source: 'server_computed',
    })
  }
  if (duration != null && duration !== '') Object.assign(measurement, {
    duration_minutes: Number(duration), duration_source: 'student_reported',
  })
  return measurement
}

function wrap(sourceCode, semanticEventType, recordKind, measurement = {}, metadata = {}) {
  const source = ACADEMIC_SOURCE_BY_CODE[sourceCode]
  if (!source?.semantic_event_types.includes(semanticEventType)) throw new TypeError('academic_event_not_allowed')
  return Object.freeze({
    adapter_version: ACADEMIC_ADAPTER_VERSION,
    source_registry_version: source.registry_version,
    source_code: sourceCode,
    semantic_event_type: semanticEventType,
    record_kind: recordKind,
    evidence_class: source.evidence_class_by_event[semanticEventType],
    measurement: compact(measurement),
    metadata: compact(metadata),
  })
}

export const ACADEMIC_ADAPTERS = Object.freeze({
  adaptAcademicDailyLog: (row) => wrap('daily_logs', number(row.duration_minutes) > 0 ? 'study_session_reported' : 'question_counts_reported', 'event', answerMeasurement(row), { note_present: Boolean(row.notes), entry_origin: row.entry_origin ?? 'legacy_unknown' }),
  adaptAcademicMockExam: (row) => wrap('mock_exam_subjects', row.subject ? 'mock_exam_subject_result_reported' : 'mock_exam_session_reported', 'event', row.subject ? answerMeasurement(row, { examType: row.exam_type, duration: null }) : compact({ duration_minutes: row.duration_minutes, duration_source: row.duration_minutes == null ? undefined : 'student_reported' }), { exam_name: row.exam_name || undefined, exam_scope: row.subject ? 'subject' : 'session' }),
  adaptAcademicBranchExam: (row, context = {}) => wrap('branch_exams', context.actorRole === 'teacher' ? 'branch_exam_result_entered_by_teacher' : 'branch_exam_result_reported', 'event', answerMeasurement(row, { examType: row.exam_type }), { exam_scope: 'branch', legacy_score_present: row.score != null }),
  adaptAcademicHomework: (row, context = {}) => wrap('homeworks', context.assignment ? 'homework_assigned' : 'homework_status_reported', context.assignment ? 'event' : 'snapshot', context.assignment ? {} : { completion_status: row.status === 'Tamamlandı' ? 'completed' : 'in_progress', completion_source: 'student_reported' }, { due_date_present: Boolean(row.due_date), lesson_session_present: Boolean(row.lesson_session_id) }),
  adaptAcademicQuestion: (row, context = {}) => wrap('questions_teacher_feedback', context.semanticEventType ?? 'question_submitted', context.semanticEventType === 'question_submitted' || context.semanticEventType === 'teacher_problem_question_shared' ? 'event' : 'snapshot', context.semanticEventType === 'teacher_feedback_shared' ? { help_used: true, help_source: 'teacher_entered' } : {}, { status: row.status, reply_present: Boolean(row.teacher_reply), image_present: Boolean(row.image_path ?? row.image_url), canvas_present: Boolean(row.teacher_reply_strokes), origin: row.origin ?? 'legacy_unknown' }),
  adaptAcademicAiSolve: (row, context = {}) => wrap('ai_solution_sessions', context.semanticEventType ?? 'solution_requested', 'event', compact({ help_used: context.helpUsed, help_source: context.helpUsed == null ? undefined : 'client_interaction', student_correct: context.studentCorrect, student_correct_source: context.studentCorrect == null ? undefined : context.semanticEventType === 'answer_checked' ? 'model_inferred' : 'student_reported' }), compact({ event_type: context.semanticEventType ?? 'solution_requested', topic_matched: row.topic_matched === true ? true : undefined, review_state: row.review_status ?? 'none' })),
  adaptAcademicAiReview: (row) => wrap('ai_solution_review', 'review_state_reported', 'snapshot', { completion_status: row.review_status === 'completed' ? 'completed' : row.review_status === 'pending' ? 'in_progress' : 'not_started', completion_source: 'student_reported' }, { review_state: row.review_status, storage_scope: 'server' }),
  adaptAcademicAttendance: (row) => wrap('live_lesson_attendance', 'lesson_attendance_state', 'snapshot', { duration_minutes: number(row.total_seconds) / 60, duration_source: 'active_measurement' }, { session_id: row.lesson_session_id, attendance_state: row.last_left_at ? 'left' : 'joined' }),
  adaptAcademicLessonSummary: (row, context = {}) => wrap('live_lesson_shared_summary', context.semanticEventType ?? 'teacher_summary_shared', 'snapshot', context.semanticEventType === 'student_feedback_reported' ? { completion_status: 'completed', completion_source: 'student_reported' } : {}, { session_id: row.lesson_session_id, shared_with_student: row.shared_with_student === true, feedback_kind: context.feedbackKind ?? 'summary' }),
  adaptAcademicProfile: (row) => wrap('student_profile', 'education_goal_snapshot', 'snapshot', {}, { target_exam: row.target_exam, grade_level: row.grade == null ? undefined : Number(row.grade), exam_date_precision: row.exam_date ? 'exact_date' : row.exam_year ? 'estimated_year' : 'unknown' }),
})

export function auditAcademicAdapterParity() {
  return ACADEMIC_SOURCE_BY_CODE && Object.values(ACADEMIC_SOURCE_BY_CODE)
    .filter((source) => source.ingest_allowed)
    .every((source) => typeof ACADEMIC_ADAPTERS[source.adapter] === 'function')
}
