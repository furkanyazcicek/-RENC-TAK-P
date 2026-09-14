export const HARDENING_BUDGET_VERSION = 'learning-hardening-budgets@1'

export const PERFORMANCE_BUDGETS = Object.freeze({
  event_write_p95_ms: 120,
  projection_small_p95_ms: 350,
  projection_medium_p95_ms: 900,
  projection_intense_p95_ms: 2_500,
  overview_query_p95_ms: 120,
  topic_query_p95_ms: 160,
  coach_first_byte_contract_ms: 4_000,
  coach_total_contract_ms: 60_000,
  coach_context_chars: 12_000,
  coach_tool_calls: 4,
  coach_prompt_tokens: 8_000,
  coach_completion_tokens: 1_200,
  synthetic_model_cost_usd_per_message: 0.01,
  backfill_records_per_second_min: 100,
  phone_outbox_enqueue_p95_ms: 16,
})

export const SYNTHETIC_VOLUME_PROFILES = Object.freeze([
  Object.freeze({ id: 'small', evidence_records: 250, projection_topics: 24, history_messages: 12 }),
  Object.freeze({ id: 'medium', evidence_records: 5_000, projection_topics: 180, history_messages: 300 }),
  Object.freeze({ id: 'intense', evidence_records: 25_000, projection_topics: 600, history_messages: 2_000 }),
])

export function percentile(values, percentileValue = 0.95) {
  const sorted = values.map(Number).filter(Number.isFinite).sort((a, b) => a - b)
  if (!sorted.length) return null
  return sorted[Math.min(sorted.length - 1, Math.max(0, Math.ceil(sorted.length * percentileValue) - 1))]
}

export function evaluatePerformanceBudget(measurements = {}, budgets = PERFORMANCE_BUDGETS) {
  const checks = Object.entries(budgets).map(([metric, budget]) => {
    const actual = Number(measurements[metric])
    const minimumMetric = metric.endsWith('_min')
    return Object.freeze({
      metric,
      budget,
      actual: Number.isFinite(actual) ? actual : null,
      passed: Number.isFinite(actual) && (minimumMetric ? actual >= budget : actual <= budget),
    })
  })
  return Object.freeze({
    version: HARDENING_BUDGET_VERSION,
    status: checks.every((check) => check.passed) ? 'passed' : 'failed',
    checks: Object.freeze(checks),
  })
}

