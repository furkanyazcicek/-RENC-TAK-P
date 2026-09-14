import { COACHING_TASK_CONTRACT_VERSION } from './contract.js'

export const COACHING_TASK_STATUSES = Object.freeze([
  'proposed', 'accepted', 'rejected', 'planned', 'started', 'partial',
  'user_reported_complete', 'platform_verified', 'expired', 'postponed',
  'edited', 'cancelled', 'evaluated',
])

const TRANSITIONS = Object.freeze({
  proposed: ['accepted', 'rejected', 'edited', 'expired'],
  accepted: ['planned', 'rejected', 'postponed', 'edited', 'cancelled'],
  planned: ['started', 'partial', 'user_reported_complete', 'platform_verified', 'postponed', 'edited', 'cancelled', 'expired'],
  started: ['partial', 'user_reported_complete', 'platform_verified', 'postponed', 'edited', 'cancelled', 'expired'],
  partial: ['started', 'user_reported_complete', 'platform_verified', 'postponed', 'edited', 'cancelled', 'expired'],
  user_reported_complete: ['platform_verified', 'evaluated', 'edited', 'cancelled'],
  platform_verified: ['evaluated'],
  postponed: ['planned', 'edited', 'cancelled', 'expired'],
  edited: ['accepted', 'planned', 'rejected', 'cancelled'],
  rejected: [], expired: [], cancelled: [], evaluated: [],
})

export function canTransitionCoachingTask(from, to) {
  return COACHING_TASK_STATUSES.includes(from)
    && COACHING_TASK_STATUSES.includes(to)
    && (TRANSITIONS[from] ?? []).includes(to)
}

export function transitionCoachingTask(task, toStatus, options = {}) {
  if (!canTransitionCoachingTask(task?.status, toStatus)) {
    return { ok: false, code: 'task_transition_invalid', task }
  }
  const now = new Date(options.now ?? Date.now()).toISOString()
  const next = {
    ...task,
    contract_version: task.contract_version ?? COACHING_TASK_CONTRACT_VERSION,
    status: toStatus,
    updated_at: now,
    task_version: toStatus === 'edited' ? Number(task.task_version ?? 1) + 1 : Number(task.task_version ?? 1),
  }
  if (toStatus === 'started' && !next.started_at) next.started_at = now
  if (toStatus === 'user_reported_complete') next.user_reported_at = now
  if (toStatus === 'platform_verified') next.platform_verified_at = now
  if (toStatus === 'evaluated') next.evaluated_at = now
  if (toStatus === 'cancelled') next.cancelled_at = now
  return { ok: true, task: next, event: { from_status: task.status, to_status: toStatus, occurred_at: now, actor_type: options.actorType ?? 'student', reason_code: options.reasonCode ?? null } }
}

function evidenceCount(evidence) {
  const measurement = evidence?.measurement ?? {}
  for (const key of ['total_count', 'marked_count', 'completed_count']) {
    const value = Math.floor(Number(measurement[key]))
    if (Number.isFinite(value) && value > 0) return value
  }
  return measurement.student_correct === true || measurement.completion_status === 'completed' ? 1 : 1
}

export function matchEvidenceToCoachingTask(task, evidence, options = {}) {
  if (!task || !evidence) return { matched: false, reason: 'missing_input' }
  if (task.student_id !== evidence.student_id) return { matched: false, reason: 'student_mismatch' }
  if (!['accepted', 'planned', 'started', 'partial', 'user_reported_complete'].includes(task.status)) return { matched: false, reason: 'task_inactive' }
  if (options.usedEvidenceIds?.has(evidence.record_id)) return { matched: false, reason: 'evidence_already_consumed' }
  const occurred = Date.parse(evidence.occurred_at)
  const starts = Date.parse(task.work_window_start ?? task.created_at)
  const ends = Date.parse(task.work_window_end ?? task.expires_at ?? '9999-12-31T23:59:59.999Z')
  if (!Number.isFinite(occurred) || occurred < starts) return { matched: false, reason: 'evidence_before_task' }
  if (Number.isFinite(ends) && occurred > ends) return { matched: false, reason: 'evidence_after_window' }
  if (task.topic_id && task.topic_id !== evidence.topic_id) return { matched: false, reason: 'topic_mismatch' }
  if (task.objective_id && task.objective_id !== evidence.objective_id) return { matched: false, reason: 'objective_mismatch' }
  if (Array.isArray(task.expected_evidence_types) && task.expected_evidence_types.length
      && !task.expected_evidence_types.includes(evidence.semantic_event_type)) {
    return { matched: false, reason: 'event_type_mismatch' }
  }
  if (Array.isArray(task.expected_source_codes) && task.expected_source_codes.length
      && !task.expected_source_codes.includes(evidence.source_code)) {
    return { matched: false, reason: 'source_mismatch' }
  }
  const platformVerified = ['direct_measurement', 'system_observation', 'teacher_feedback'].includes(evidence.evidence_class)
  return {
    matched: true,
    platform_verified: platformVerified,
    evidence_count: evidenceCount(evidence),
    progress_kind: platformVerified ? 'platform_evidence' : 'student_report',
  }
}

export function applyEvidenceToCoachingTask(task, match, options = {}) {
  if (!match?.matched) return { ok: false, code: match?.reason ?? 'evidence_not_matched', task }
  const minimum = Math.max(1, Number(task.minimum_evidence_count ?? task.success_criteria?.minimum_count ?? 1))
  const accumulated = Number(task.accumulated_evidence_count ?? 0) + Number(match.evidence_count ?? 1)
  const nextStatus = match.platform_verified && accumulated >= minimum ? 'platform_verified' : 'partial'
  return {
    ok: true,
    task: {
      ...task,
      accumulated_evidence_count: accumulated,
      progress_ratio: Math.min(1, accumulated / minimum),
      status: nextStatus,
      updated_at: new Date(options.now ?? Date.now()).toISOString(),
      ...(nextStatus === 'platform_verified' ? { platform_verified_at: new Date(options.now ?? Date.now()).toISOString() } : {}),
    },
  }
}

