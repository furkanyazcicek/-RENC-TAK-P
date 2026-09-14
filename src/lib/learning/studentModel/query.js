function own(rows, studentId) {
  return (rows ?? []).filter((row) => row.student_id === studentId)
}

export function getStudentOverview(rows, studentId) {
  return own(rows, studentId).find((row) => row.scope_type === 'general') ?? null
}

export function getTopicEvidenceSummary(rows, studentId, topicId) {
  return own(rows, studentId).find((row) => row.scope_type === 'topic' && row.topic_id === topicId) ?? null
}

export function listNeedsSupportTopics(rows, studentId, limit = 10) {
  return own(rows, studentId)
    .filter((row) => row.scope_type === 'topic' && ['needs_support', 'developing'].includes(row.dimensions?.performance?.state))
    .sort((left, right) =>
      (right.dimensions?.struggle?.explicit_signals ?? 0) - (left.dimensions?.struggle?.explicit_signals ?? 0) ||
      (left.dimensions?.performance?.weighted_accuracy ?? 1) - (right.dimensions?.performance?.weighted_accuracy ?? 1) ||
      String(left.topic_id).localeCompare(String(right.topic_id))
    )
    .slice(0, Math.min(Math.max(limit, 1), 100))
}

export function listChangedTopics(rows, studentId, direction, limit = 10) {
  const expected = direction === 'strengthened' ? 'strengthened' : 'regressed'
  return own(rows, studentId)
    .filter((row) => row.scope_type === 'topic' && row.dimensions?.performance?.trend?.state === expected)
    .sort((left, right) => Math.abs(right.dimensions.performance.trend.change) - Math.abs(left.dimensions.performance.trend.change))
    .slice(0, Math.min(Math.max(limit, 1), 100))
}

export function listInsufficientTopics(rows, studentId, limit = 20) {
  return own(rows, studentId)
    .filter((row) => row.scope_type === 'topic' && ['insufficient', 'limited'].includes(row.data_state))
    .sort((left, right) => String(left.topic_id).localeCompare(String(right.topic_id)))
    .slice(0, Math.min(Math.max(limit, 1), 100))
}

export function listRepeatDueTopics(rows, studentId, asOf, limit = 10) {
  const cutoff = Date.parse(asOf)
  return own(rows, studentId)
    .filter((row) => row.scope_type === 'topic' && row.repeat_due_at && Date.parse(row.repeat_due_at) <= cutoff)
    .sort((left, right) => Date.parse(left.repeat_due_at) - Date.parse(right.repeat_due_at))
    .slice(0, Math.min(Math.max(limit, 1), 100))
}

export function listLanguageSkillProgress(rows, studentId, language) {
  return own(rows, studentId)
    .filter((row) => row.scope_type === 'topic' && String(row.topic_id ?? '').startsWith(`drkoc:language:${language}`))
    .sort((left, right) => String(left.topic_id).localeCompare(String(right.topic_id)))
}

export function explainProjectionClaim(rows, refs, studentId, scopeKey) {
  const row = own(rows, studentId).find((item) => item.scope_key === scopeKey) ?? null
  if (!row) return null
  return {
    scope: {
      scope_type: row.scope_type,
      education_context_id: row.education_context_id ?? null,
      subject_id: row.subject_id ?? null,
      topic_id: row.topic_id ?? null,
      objective_id: row.objective_id ?? null,
    },
    date_range: { oldest: row.oldest_evidence_at, newest: row.newest_evidence_at },
    sources: row.source_summaries,
    independent_direct_evidence: row.explanation?.independent_direct_evidence ?? 0,
    help_factored: row.explanation?.help_factored === true,
    exclusions: row.explanation?.excluded_counts ?? {},
    confidence: { level: row.confidence_level, reasons: row.explanation?.confidence_reasons ?? [] },
    conflict: row.explanation?.conflict ?? { conflict: false },
    evidence_refs: own(refs, studentId).filter((ref) => ref.scope_key === scopeKey),
  }
}

