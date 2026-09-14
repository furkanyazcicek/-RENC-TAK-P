import { sha256Hex, stableStringify } from '../network/canonical.js'
import {
  STUDENT_TOPIC_MODEL_CONFIG,
  STUDENT_TOPIC_MODEL_VERSION,
  STUDENT_TOPIC_PROJECTION_NAME,
  assertStudentTopicModelConfig,
} from './config.js'
import { buildStudentTopicModel } from './model.js'

function normalizedProjection(result) {
  const rows = [...(result?.rows ?? [])]
    .map(({ generation_id: _generation, ...row }) => row)
    .sort((left, right) => `${left.student_id}|${left.scope_key}`.localeCompare(`${right.student_id}|${right.scope_key}`))
  const patterns = [...(result?.patterns ?? [])]
    .sort((left, right) => `${left.student_id}|${left.pattern_code}`.localeCompare(`${right.student_id}|${right.pattern_code}`))
  const refs = [...(result?.evidence_refs ?? [])]
    .sort((left, right) => `${left.student_id}|${left.scope_key}|${left.record_id}`.localeCompare(`${right.student_id}|${right.scope_key}|${right.record_id}`))
  return { rows, patterns, evidence_refs: refs }
}

export async function checksumStudentTopicProjection(result) {
  return sha256Hex(stableStringify(normalizedProjection(result)))
}

export function requiresStudentTopicModelReplay(activeGeneration, config = STUDENT_TOPIC_MODEL_CONFIG) {
  assertStudentTopicModelConfig(config)
  return !activeGeneration || activeGeneration.projection_version !== config.modelVersion
}

export async function compareStudentTopicModelProjections(before, after) {
  const [beforeChecksum, afterChecksum] = await Promise.all([
    checksumStudentTopicProjection(before),
    checksumStudentTopicProjection(after),
  ])
  return Object.freeze({
    before_model_version: before?.model_version ?? before?.rows?.[0]?.model_version ?? null,
    after_model_version: after?.model_version ?? after?.rows?.[0]?.model_version ?? null,
    before_checksum: beforeChecksum,
    after_checksum: afterChecksum,
    row_count_before: before?.rows?.length ?? 0,
    row_count_after: after?.rows?.length ?? 0,
    changed: beforeChecksum !== afterChecksum,
  })
}

async function readStudentLedger(repository, studentId, pageSize) {
  const records = []
  let cursor = 0
  while (true) {
    const page = await repository.listLedgerBatch({ studentId, afterSequence: cursor, limit: pageSize })
    if (!page.length) break
    records.push(...page)
    cursor = Number(page.at(-1).ingestion_sequence) || cursor
    if (page.length < pageSize) break
  }
  return records
}

/**
 * Her öğrenciyi ayrı belleğe alır. Yeni nesil eksiksiz hesaplanmadan etkinleşmez.
 * `asOf` zorunludur; aynı kanıt + aynı referans zamanı aynı checksum'ı üretir.
 */
export async function replayStudentTopicProjection({
  repository,
  studentId = null,
  config = STUDENT_TOPIC_MODEL_CONFIG,
  modelVersion = config.modelVersion,
  asOf,
  batchSize = 500,
  startSequence = 0,
  dryCompare = false,
  signal = null,
} = {}) {
  if (!repository?.listReplayStudents || !repository?.listLedgerBatch) {
    throw new TypeError('student_model_repository_contract_required')
  }
  assertStudentTopicModelConfig(config)
  if (modelVersion !== config.modelVersion) throw new TypeError('student_model_version_config_mismatch')
  const start = Number(startSequence)
  if (!Number.isSafeInteger(start) || start < 0) throw new TypeError('student_model_start_sequence_invalid')
  const pageSize = Math.min(Math.max(Number(batchSize) || 1, 1), 1000)
  const generation = dryCompare
    ? { generation_id: null }
    : await repository.beginProjectionGeneration({
        projectionName: STUDENT_TOPIC_PROJECTION_NAME,
        projectionVersion: modelVersion,
        studentId,
        sourceCode: null,
        startSequence: start,
      })
  const combined = { rows: [], patterns: [], evidence_refs: [] }
  let highWaterMark = 0
  try {
    const studentIds = studentId ? [studentId] : await repository.listReplayStudents({ afterSequence: 0 })
    for (const currentStudentId of studentIds) {
      if (signal?.aborted) throw Object.assign(new Error('student_model_projection_cancelled'), { code: 'STUDENT_MODEL_PROJECTION_CANCELLED' })
      const records = await readStudentLedger(repository, currentStudentId, pageSize)
      highWaterMark = Math.max(highWaterMark, ...records.map((record) => Number(record.ingestion_sequence) || 0))
      const result = buildStudentTopicModel(records, { studentId: currentStudentId, asOf, config })
      const rows = result.rows.map((row) => ({ ...row, generation_id: generation.generation_id }))
      combined.rows.push(...rows)
      combined.patterns.push(...result.patterns.map((row) => ({ ...row, generation_id: generation.generation_id })))
      combined.evidence_refs.push(...result.evidence_refs.map((row) => ({ ...row, generation_id: generation.generation_id })))
      if (!dryCompare && rows.length) await repository.stageProjectionRows(generation.generation_id, rows)
      if (!dryCompare && repository.stageStudentModelDetails) {
        await repository.stageStudentModelDetails(generation.generation_id, {
          patterns: result.patterns,
          evidenceRefs: result.evidence_refs,
        })
      }
    }
    if (start > highWaterMark) throw Object.assign(new Error('student_model_start_sequence_ahead'), { code: 'STUDENT_MODEL_START_SEQUENCE_AHEAD' })
    const checksum = await checksumStudentTopicProjection(combined)
    if (!dryCompare) {
      await repository.activateProjectionGeneration(generation.generation_id, {
        checksum,
        rowCount: combined.rows.length,
        highWaterMark,
      })
    }
    return Object.freeze({
      generation_id: generation.generation_id,
      row_count: combined.rows.length,
      pattern_count: combined.patterns.length,
      evidence_ref_count: combined.evidence_refs.length,
      high_water_mark: highWaterMark,
      start_sequence: start,
      checksum,
      model_version: modelVersion,
      config_version: config.configVersion,
      dry_compare: dryCompare,
      ...Object.fromEntries(Object.entries(combined).map(([key, value]) => [key, Object.freeze(value)])),
    })
  } catch (error) {
    if (!dryCompare && generation.generation_id) {
      await repository.failProjectionGeneration(generation.generation_id, error?.code ?? 'STUDENT_MODEL_REPLAY_FAILED')
    }
    throw error
  }
}

/** Etkilenen öğrencilerin bütün geçmişini yeniden kurar; cursor yalnız başarıda ilerler. */
export async function processStudentTopicBatch({ repository, workerId, batchSize = 100, studentId = null, asOf } = {}) {
  return repository.runProjectionClaim(
    {
      projectionName: STUDENT_TOPIC_PROJECTION_NAME,
      projectionVersion: STUDENT_TOPIC_MODEL_VERSION,
      workerId,
      batchSize: Math.min(Math.max(Number(batchSize) || 1, 1), 500),
      studentId,
      sourceCode: null,
    },
    async (claim) => {
      const affectedStudentIds = [...new Set(claim.records.map((record) => record.student_id))].sort()
      const rows = []
      const patterns = []
      const evidenceRefs = []
      const quarantinedRecordIds = []
      for (const currentStudentId of affectedStudentIds) {
        try {
          const records = await readStudentLedger(claim.repository ?? repository, currentStudentId, 500)
          const result = buildStudentTopicModel(records, { studentId: currentStudentId, asOf })
          rows.push(...result.rows.map((row) => ({ ...row, generation_id: claim.generation_id })))
          patterns.push(...result.patterns)
          evidenceRefs.push(...result.evidence_refs)
        } catch {
          quarantinedRecordIds.push(...claim.records.filter((record) => record.student_id === currentStudentId).map((record) => record.record_id))
        }
      }
      return {
        rows,
        patterns,
        evidenceRefs,
        replaceStudentIds: affectedStudentIds,
        quarantinedRecordIds,
        lastSequence: claim.records.at(-1)?.ingestion_sequence ?? claim.cursor,
      }
    }
  )
}
