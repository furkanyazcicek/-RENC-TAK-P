/** Kişisel içerik ve yüksek kardinaliteli öğrenci etiketi tutmayan yerel sayaçlar. */

const SAFE_OUTCOMES = new Set([
  'created', 'duplicate', 'idempotency_conflict', 'validation_rejected',
  'unauthorized', 'source_not_allowed', 'source_record_not_owned',
  'identity_quarantined', 'dependency_unavailable', 'internal_failure',
])

export function createLearningNetworkMetrics() {
  const counts = new Map()
  const lastSuccess = new Map()

  function increment({ sourceCode = 'unknown', eventType = 'unknown', outcome, reasonCode = null }) {
    const safeSource = /^[a-z0-9][a-z0-9._-]{1,63}$/.test(sourceCode) ? sourceCode : 'unknown'
    const safeEvent = /^[a-z][a-z0-9_]{1,63}$/.test(eventType) ? eventType : 'unknown'
    const safeOutcome = SAFE_OUTCOMES.has(outcome) ? outcome : 'internal_failure'
    const safeReason = /^[A-Z][A-Z0-9_]{1,95}$/.test(String(reasonCode ?? '')) ? reasonCode : 'none'
    const key = `${safeSource}|${safeEvent}|${safeOutcome}|${safeReason}`
    counts.set(key, (counts.get(key) ?? 0) + 1)
    if (safeOutcome === 'created') lastSuccess.set(`${safeSource}|${safeEvent}`, new Date().toISOString())
  }

  function snapshot() {
    return Object.freeze({
      counts: Object.freeze(
        [...counts.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, count]) => {
          const [source_code, semantic_event_type, outcome, reason_code] = key.split('|')
          return Object.freeze({ source_code, semantic_event_type, outcome, reason_code, count })
        })
      ),
      last_success: Object.freeze(
        [...lastSuccess.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([key, at]) => {
          const [source_code, semantic_event_type] = key.split('|')
          return Object.freeze({ source_code, semantic_event_type, at })
        })
      ),
    })
  }

  return Object.freeze({ increment, snapshot })
}
