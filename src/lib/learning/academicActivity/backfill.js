import { ACADEMIC_REGISTRY_VERSION, ACADEMIC_SOURCE_REGISTRY } from './registry.js'

export const PHASE4_BACKFILL_VERSION = 'phase-4-academic-backfill@1'

const noHistory = new Map([
  ['teacher_parent_support_routes', 'excluded'], ['live_lesson_raw_stream', 'excluded'],
  ['home_summary', 'derived_no_evidence'], ['analytics_view', 'derived_no_evidence'],
])

export const PHASE4_BACKFILL_DECISIONS = Object.freeze(ACADEMIC_SOURCE_REGISTRY.map((source) => Object.freeze({
  matrix_id: source.matrix_id,
  source_code: source.source_code,
  strategy: noHistory.get(source.source_code) ?? source.historical_strategy,
  provider_name: source.ingest_allowed ? `phase4_${source.source_code}` : null,
  decision_version: PHASE4_BACKFILL_VERSION,
  source_registry_version: ACADEMIC_REGISTRY_VERSION,
  live_apply_allowed: false,
})))

export function inspectPhase4BackfillRow(row) {
  if (!row || typeof row !== 'object' || !row.id || !row.student_id) return { ready: false, reason_code: 'OWNERSHIP_OR_ID_MISSING' }
  if (row.created_at && Number.isNaN(Date.parse(row.created_at))) return { ready: false, reason_code: 'TIME_INVALID' }
  if (row.study_date && Number.isNaN(Date.parse(`${row.study_date}T00:00:00Z`))) return { ready: false, reason_code: 'TIME_INVALID' }
  for (const key of ['duration_minutes', 'correct', 'incorrect', 'empty', 'total_seconds']) {
    if (row[key] != null && (!Number.isFinite(Number(row[key])) || Number(row[key]) < 0)) return { ready: false, reason_code: 'MEASUREMENT_INVALID' }
  }
  return { ready: true, source_record_id: String(row.id), student_id: row.student_id }
}

const encodeCursor = (sourceCode, offset) => globalThis.btoa(JSON.stringify({ v: 1, s: sourceCode, o: offset }))
const decodeCursor = (sourceCode, cursor) => {
  if (!cursor) return 0
  try {
    const value = JSON.parse(globalThis.atob(cursor))
    if (value?.v !== 1 || value?.s !== sourceCode || !Number.isInteger(value?.o) || value.o < 0) throw new Error('invalid')
    return value.o
  } catch { throw new TypeError('phase4_backfill_cursor_invalid') }
}

export async function runPhase4BackfillBatch({
  sourceCode, records = [], cursor = null, batchSize = 100, mode = 'dry_run',
  control = 'run', receipts = new Set(), ingest = async () => ({ status: 'created' }),
} = {}) {
  const decision = PHASE4_BACKFILL_DECISIONS.find((item) => item.source_code === sourceCode)
  if (!decision?.provider_name) throw new TypeError('phase4_backfill_provider_not_registered')
  if (!['dry_run', 'synthetic_apply'].includes(mode)) throw new TypeError('phase4_backfill_live_apply_forbidden')
  if (!['run', 'pause', 'cancel'].includes(control)) throw new TypeError('phase4_backfill_control_invalid')
  const offset = decodeCursor(sourceCode, cursor)
  if (control !== 'run') return Object.freeze({
    status: control === 'pause' ? 'paused' : 'cancelled', source_code: sourceCode, mode,
    cursor: encodeCursor(sourceCode, offset), scanned: 0, created: 0, duplicate: 0,
    conflict: 0, quarantined: 0, failed: 0, writes_performed: 0,
  })
  const page = records.slice(offset, offset + Math.max(1, Math.min(Number(batchSize) || 100, 1000)))
  const counts = { scanned: page.length, created: 0, duplicate: 0, conflict: 0, quarantined: 0, failed: 0 }
  for (const row of page) {
    const inspected = inspectPhase4BackfillRow(row)
    if (!inspected.ready) { counts.quarantined += 1; continue }
    const key = `${PHASE4_BACKFILL_VERSION}:${sourceCode}:${inspected.student_id}:${inspected.source_record_id}`
    if (receipts.has(key)) { counts.duplicate += 1; continue }
    if (mode === 'dry_run') continue
    try {
      const result = await ingest({ sourceCode, row, identity: inspected, origin: 'backfill' })
      if (result?.status === 'created') { receipts.add(key); counts.created += 1 }
      else if (result?.status === 'duplicate') { receipts.add(key); counts.duplicate += 1 }
      else if (result?.status === 'idempotency_conflict') counts.conflict += 1
      else counts.failed += 1
    } catch { counts.failed += 1 }
  }
  const nextOffset = offset + page.length
  return Object.freeze({
    status: nextOffset >= records.length ? 'completed' : 'processing', source_code: sourceCode, mode,
    cursor: encodeCursor(sourceCode, nextOffset), ...counts,
    writes_performed: mode === 'synthetic_apply' ? counts.created : 0,
  })
}

export function buildPhase4BackfillDryRun(recordsBySource = {}) {
  const sources = {}
  let scanned = 0
  let ready = 0
  let quarantined = 0
  for (const decision of PHASE4_BACKFILL_DECISIONS) {
    const records = decision.provider_name ? recordsBySource[decision.source_code] ?? [] : []
    const result = { scanned: records.length, ready: [], quarantined: [] }
    for (const row of records) {
      const inspected = inspectPhase4BackfillRow(row)
      if (inspected.ready) result.ready.push(inspected)
      else result.quarantined.push({ source_record_id: row?.id ?? null, reason_code: inspected.reason_code })
    }
    scanned += result.scanned
    ready += result.ready.length
    quarantined += result.quarantined.length
    sources[decision.source_code] = result
  }
  return Object.freeze({ schema_version: '1.0', decision_version: PHASE4_BACKFILL_VERSION, mode: 'dry_run', writes_performed: 0, scanned_count: scanned, ready_count: ready, quarantined_count: quarantined, decisions: PHASE4_BACKFILL_DECISIONS, sources: Object.freeze(sources) })
}
