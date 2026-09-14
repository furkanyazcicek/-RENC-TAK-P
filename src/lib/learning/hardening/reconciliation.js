export const RECONCILIATION_REPORT_VERSION = 'learning-source-reconciliation@1'

const SAFE_CODE = /^[a-z0-9][a-z0-9._-]{1,63}$/

function count(value) {
  const number = Number(value)
  return Number.isInteger(number) && number >= 0 ? number : 0
}

function safeToken(value) {
  const token = String(value ?? '')
  return /^[A-Za-z0-9:_-]{6,96}$/.test(token) ? token : null
}

export function reconcileLearningSources({ sources = [], generatedAt = new Date().toISOString() } = {}) {
  const rows = sources.map((source) => {
    const fieldRows = count(source.field_record_count)
    const expected = count(source.expected_event_count)
    const actual = count(source.actual_event_count)
    const valid = count(source.valid_evidence_count)
    const quarantined = count(source.quarantined_count)
    const invalidated = count(source.invalidated_or_corrected_count)
    const duplicates = count(source.duplicate_attempt_count)
    const failed = count(source.unprocessed_or_failed_count)
    const difference = actual + failed + quarantined - expected
    const sourceCode = SAFE_CODE.test(String(source.source_code ?? '')) ? source.source_code : 'unknown'
    return Object.freeze({
      source_code: sourceCode,
      field_record_count: fieldRows,
      expected_event_count: expected,
      actual_event_count: actual,
      valid_evidence_count: valid,
      quarantined_count: quarantined,
      invalidated_or_corrected_count: invalidated,
      duplicate_attempt_count: duplicates,
      unprocessed_or_failed_count: failed,
      reconciliation_difference: difference,
      projection_updated_at: typeof source.projection_updated_at === 'string' ? source.projection_updated_at : null,
      sample_source_tokens: Object.freeze((source.sample_source_tokens ?? []).map(safeToken).filter(Boolean).slice(0, 5)),
      contains_personal_content: false,
      status: difference === 0 && valid <= actual && invalidated <= actual ? 'matched' : 'mismatch',
    })
  })
  return Object.freeze({
    version: RECONCILIATION_REPORT_VERSION,
    generated_at: generatedAt,
    status: rows.every((row) => row.status === 'matched') ? 'passed' : 'failed',
    rows: Object.freeze(rows),
    totals: Object.freeze(rows.reduce((acc, row) => {
      for (const key of [
        'field_record_count', 'expected_event_count', 'actual_event_count',
        'valid_evidence_count', 'quarantined_count',
        'invalidated_or_corrected_count', 'duplicate_attempt_count',
        'unprocessed_or_failed_count', 'reconciliation_difference',
      ]) acc[key] += row[key]
      return acc
    }, {
      field_record_count: 0, expected_event_count: 0, actual_event_count: 0,
      valid_evidence_count: 0, quarantined_count: 0,
      invalidated_or_corrected_count: 0, duplicate_attempt_count: 0,
      unprocessed_or_failed_count: 0, reconciliation_difference: 0,
    })),
  })
}

export function compareProjectionReplay({ fullRows = [], incrementalRows = [] } = {}) {
  const canonical = (rows) => [...rows]
    .map((row) => ({ scope_key: row.scope_key, row_checksum: row.row_checksum }))
    .sort((a, b) => String(a.scope_key).localeCompare(String(b.scope_key)))
  const full = canonical(fullRows)
  const incremental = canonical(incrementalRows)
  return Object.freeze({
    exact_match: JSON.stringify(full) === JSON.stringify(incremental),
    full_row_count: full.length,
    incremental_row_count: incremental.length,
    deleted_or_corrected_residue_count: full.filter((row) => row.row_checksum == null).length,
  })
}

