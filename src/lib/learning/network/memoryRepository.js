import { deriveEffectiveEvidence } from './effective.js'
import { getSourceDefinition, SOURCE_REGISTRY_VERSION } from '../sourceRegistry.js'

function naturalKey(record) {
  return record.client_action_id
    ? `client|${record.student_id}|${record.source_code}|${record.client_action_id}`
    : `source|${record.student_id}|${record.source_code}|${record.source_record_id}|${record.source_revision}|${record.semantic_event_type}`
}

/** Saf servis ve backfill testleri için; PostgreSQL kabul testinin yerine geçmez. */
export function createMemoryLearningEvidenceRepository() {
  const records = []
  const byId = new Map()
  const byKey = new Map()
  const quarantines = []
  const quarantineByKey = new Map()
  const generations = new Map()
  const projectionCursors = new Map()
  const processing = new Map()
  const projectionClaims = new Set()
  let sequence = 0
  let generationSequence = 0

  async function ingest(record, semanticFingerprint) {
    const key = naturalKey(record)
    const existing = byKey.get(key)
    if (existing) {
      return existing.semantic_fingerprint === semanticFingerprint
        ? { code: 'duplicate', created: false, record_id: existing.record_id }
        : { code: 'idempotency_conflict', created: false, record_id: null }
    }
    const stored = Object.freeze({
      ...record,
      ingestion_sequence: ++sequence,
      semantic_fingerprint: semanticFingerprint,
    })
    records.push(stored)
    byId.set(stored.record_id, stored)
    byKey.set(key, stored)
    return { code: 'created', created: true, record_id: stored.record_id }
  }

  async function inspectIdempotency(record, semanticFingerprint) {
    const existing = byKey.get(naturalKey(record))
    if (!existing) return null
    return existing.semantic_fingerprint === semanticFingerprint
      ? { code: 'duplicate', created: false, record_id: existing.record_id }
      : { code: 'idempotency_conflict', created: false }
  }

  async function quarantine(entry) {
    const key = `${entry.student_id}|${entry.dedupe_key}`
    const existing = quarantineByKey.get(key)
    if (existing) {
      return existing.semantic_fingerprint === entry.semantic_fingerprint
        ? { code: 'identity_quarantined', created: false, quarantine_id: existing.quarantine_id }
        : { code: 'idempotency_conflict', created: false }
    }
    const stored = Object.freeze({
      ...entry,
      quarantine_id: quarantines.length + 1,
    })
    quarantines.push(stored)
    quarantineByKey.set(key, stored)
    return { code: 'identity_quarantined', created: true, quarantine_id: stored.quarantine_id }
  }

  async function listLedgerBatch({ studentId = null, sourceCode = null, afterSequence = 0, limit = 500 } = {}) {
    return records
      .filter((row) => (!studentId || row.student_id === studentId) && (!sourceCode || row.source_code === sourceCode) && row.ingestion_sequence > afterSequence)
      .sort((a, b) => a.ingestion_sequence - b.ingestion_sequence)
      .slice(0, limit)
  }

  async function listEffective({ studentId, sourceCode = null, afterSequence = 0, limit = 500 } = {}) {
    return deriveEffectiveEvidence(records)
      .active.filter((row) => row.student_id === studentId && (!sourceCode || row.source_code === sourceCode) && row.ingestion_sequence > afterSequence)
      .sort((a, b) => a.ingestion_sequence - b.ingestion_sequence)
      .slice(0, limit)
  }

  async function listReplayStudents({ sourceCode = null, afterSequence = 0 } = {}) {
    return [...new Set(records
      .filter((row) =>
        (!sourceCode || row.source_code === sourceCode) &&
        row.ingestion_sequence > afterSequence
      )
      .map((row) => row.student_id))].sort()
  }

  async function beginProjectionGeneration(scope) {
    const generationId = `memory-generation-${++generationSequence}`
    const source = scope.sourceCode ? getSourceDefinition(scope.sourceCode) : null
    if (scope.sourceCode && !source) throw new TypeError('projection_source_unknown')
    const generation = {
      ...scope,
      source_registry_version: SOURCE_REGISTRY_VERSION,
      source_adapter_version: source?.adapter_version ?? null,
      generation_id: generationId,
      status: 'building',
      rows: [],
    }
    generations.set(generationId, generation)
    return {
      generation_id: generationId,
      status: generation.status,
      source_registry_version: generation.source_registry_version,
      source_code: scope.sourceCode ?? null,
      source_adapter_version: generation.source_adapter_version,
    }
  }

  async function stageProjectionRows(generationId, rows) {
    const generation = generations.get(generationId)
    if (!generation || generation.status !== 'building') throw new TypeError('projection_generation_not_building')
    generation.rows.push(...rows.map((row) => ({ ...row })))
  }

  async function activateProjectionGeneration(generationId, summary) {
    const generation = generations.get(generationId)
    if (!generation || generation.status !== 'building') throw new TypeError('projection_generation_not_building')
    for (const item of generations.values()) {
      if (
        item.status === 'active' &&
        item.projectionName === generation.projectionName &&
        item.projectionVersion === generation.projectionVersion &&
        (item.studentId ?? null) === (generation.studentId ?? null) &&
        (item.sourceCode ?? null) === (generation.sourceCode ?? null)
      ) item.status = 'superseded'
    }
    Object.assign(generation, summary, { status: 'active' })
  }

  async function failProjectionGeneration(generationId, errorCode) {
    const generation = generations.get(generationId)
    if (generation) Object.assign(generation, { status: 'failed', last_error_code: errorCode })
  }

  async function runProjectionClaim(options, handler) {
    const key = [
      options.projectionName,
      options.projectionVersion,
      options.studentId ?? '',
      options.sourceCode ?? '',
    ].join('|')
    if (projectionClaims.has(key)) {
      return { claimed: false, code: 'projection_already_claimed', rows: [] }
    }
    projectionClaims.add(key)
    const cursor = projectionCursors.get(key) ?? 0
    try {
      const claimRecords = records
        .filter((row) =>
          row.ingestion_sequence > cursor &&
          (!options.studentId || row.student_id === options.studentId) &&
          (!options.sourceCode || row.source_code === options.sourceCode)
        )
        .sort((a, b) => a.ingestion_sequence - b.ingestion_sequence)
        .slice(0, options.batchSize)
      const active = [...generations.values()].find((generation) =>
        generation.status === 'active' &&
        generation.projectionName === options.projectionName &&
        generation.projectionVersion === options.projectionVersion &&
        (generation.studentId ?? null) === (options.studentId ?? null) &&
        (generation.sourceCode ?? null) === (options.sourceCode ?? null)
      )
      if (!active) return { claimed: false, code: 'projection_generation_unavailable', rows: [] }
      for (const record of claimRecords) {
        const processingKey = `${key}|${record.record_id}`
        processing.set(processingKey, {
          projection_name: options.projectionName,
          projection_version: options.projectionVersion,
          record_id: record.record_id,
          ingestion_sequence: record.ingestion_sequence,
          generation_id: active.generation_id,
          status: 'processing',
          retry_count: processing.get(processingKey)?.retry_count ?? 0,
        })
      }
      let outcome
      try {
        outcome = await handler({
          cursor,
          records: claimRecords,
          generation_id: active.generation_id,
          repository: {
            listLedgerBatch,
            listEffective,
          },
          source_code: options.sourceCode ?? null,
        })
      } catch (error) {
        for (const record of claimRecords) {
          const processingKey = `${key}|${record.record_id}`
          const previous = processing.get(processingKey)
          processing.set(processingKey, {
            ...previous,
            status: 'retry',
            retry_count: (previous?.retry_count ?? 0) + 1,
            last_error_code: error?.code ?? 'projection_batch_failed',
          })
        }
        throw error
      }
      const replaceStudents = new Set(outcome.replaceStudentIds ?? [])
      if (replaceStudents.size) {
        active.rows = active.rows.filter((row) => !replaceStudents.has(row.student_id))
      }
      active.rows.push(...(outcome.rows ?? []).map((row) => ({ ...row })))
      const quarantined = new Set(outcome.quarantinedRecordIds ?? [])
      for (const record of claimRecords) {
        const processingKey = `${key}|${record.record_id}`
        processing.set(processingKey, {
          ...processing.get(processingKey),
          status: quarantined.has(record.record_id) ? 'quarantined' : 'succeeded',
          processed_at: new Date().toISOString(),
          last_error_code: quarantined.has(record.record_id)
            ? 'projection_record_quarantined'
            : null,
        })
      }
      projectionCursors.set(key, Number(outcome.lastSequence) || cursor)
      return { claimed: true, ...outcome }
    } finally {
      projectionClaims.delete(key)
    }
  }

  return Object.freeze({
    ingest,
    inspectIdempotency,
    quarantine,
    getRecord: async (recordId) => byId.get(recordId) ?? null,
    listLedgerBatch,
    listEffective,
    listReplayStudents,
    beginProjectionGeneration,
    stageProjectionRows,
    activateProjectionGeneration,
    failProjectionGeneration,
    runProjectionClaim,
    runInTransaction: async (callback) => callback(),
    snapshot: () => Object.freeze({
      records: Object.freeze([...records]),
      quarantines: Object.freeze([...quarantines]),
      generations: Object.freeze([...generations.values()].map((generation) => Object.freeze({ ...generation }))),
      projection_cursors: Object.freeze([...projectionCursors.entries()]),
      processing: Object.freeze([...processing.values()].map((item) => Object.freeze({ ...item }))),
    }),
  })
}
