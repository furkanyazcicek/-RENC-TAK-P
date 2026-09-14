export const HARDENING_OBSERVABILITY_VERSION = 'learning-hardening-observability@1'

export const OPERATIONAL_THRESHOLDS = Object.freeze([
  Object.freeze({ metric: 'source_last_success_age_minutes', operator: 'max', threshold: 60, owner: 'learning_platform' }),
  Object.freeze({ metric: 'event_rejection_rate', operator: 'max', threshold: 0.02, owner: 'source_owner' }),
  Object.freeze({ metric: 'queue_lag_minutes', operator: 'max', threshold: 5, owner: 'learning_platform' }),
  Object.freeze({ metric: 'projection_age_minutes', operator: 'max', threshold: 15, owner: 'learning_platform' }),
  Object.freeze({ metric: 'quarantine_rate', operator: 'max', threshold: 0.01, owner: 'data_quality' }),
  Object.freeze({ metric: 'reconciliation_difference', operator: 'max_abs', threshold: 0, owner: 'data_quality' }),
  Object.freeze({ metric: 'ai_tool_error_rate', operator: 'max', threshold: 0.02, owner: 'ai_platform' }),
  Object.freeze({ metric: 'claim_validation_rejection_rate', operator: 'max', threshold: 0.01, owner: 'ai_quality' }),
  Object.freeze({ metric: 'coach_response_p95_ms', operator: 'max', threshold: 60_000, owner: 'ai_platform' }),
  Object.freeze({ metric: 'coach_cost_usd_p95', operator: 'max', threshold: 0.01, owner: 'product_owner' }),
  Object.freeze({ metric: 'broken_task_target_rate', operator: 'max', threshold: 0.005, owner: 'product_engineering' }),
  Object.freeze({ metric: 'language_transfer_error_rate', operator: 'max', threshold: 0.02, owner: 'language_platform' }),
])

const safeMetric = (value) => /^[a-z][a-z0-9_]{2,63}$/.test(String(value ?? ''))

export function evaluateOperationalMetrics(metrics = {}, thresholds = OPERATIONAL_THRESHOLDS) {
  const checks = thresholds.map((rule) => {
    const actual = Number(metrics[rule.metric])
    const breached = !Number.isFinite(actual)
      || (rule.operator === 'max_abs' ? Math.abs(actual) > rule.threshold : actual > rule.threshold)
    return Object.freeze({ ...rule, actual: Number.isFinite(actual) ? actual : null, breached })
  })
  return Object.freeze({
    version: HARDENING_OBSERVABILITY_VERSION,
    status: checks.some((check) => check.breached) ? 'alarm' : 'healthy',
    checks: Object.freeze(checks),
    alarm_payload_fields: Object.freeze(['metric', 'actual', 'threshold', 'owner', 'source_code', 'reason_code']),
    raw_student_text_allowed: false,
    raw_source_content_allowed: false,
  })
}

export function sanitizeOperationalObservation(observation = {}) {
  return Object.freeze({
    metric: safeMetric(observation.metric) ? observation.metric : 'invalid_metric',
    value: Number.isFinite(Number(observation.value)) ? Number(observation.value) : null,
    source_code: /^[a-z0-9][a-z0-9._-]{1,63}$/.test(String(observation.source_code ?? '')) ? observation.source_code : 'unknown',
    reason_code: /^[A-Z][A-Z0-9_]{1,95}$/.test(String(observation.reason_code ?? '')) ? observation.reason_code : 'NONE',
    contains_personal_content: false,
  })
}

