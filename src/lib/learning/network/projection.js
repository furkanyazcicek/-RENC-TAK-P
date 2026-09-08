import { deriveEffectiveEvidence } from './effective.js'
import { sha256Hex, stableStringify } from './canonical.js'

export const DIAGNOSTIC_PROJECTION_NAME = 'learning_evidence_probe'
export const DIAGNOSTIC_PROJECTION_VERSION = 'learning-evidence-probe@1'

const SUM_FIELDS = Object.freeze([
  'correct_count',
  'incorrect_count',
  'blank_count',
  'total_count',
  'marked_count',
  'duration_minutes',
])

function groupKey(record) {
  return [
    record.student_id,
    record.source_code,
    record.education_context_id ?? '',
    record.subject_id ?? '',
    record.topic_id ?? '',
    record.evidence_class,
  ].join('|')
}

/** Yalnız sayım/toplam üretir; ustalık, risk veya öneri üretmez. */
export function buildDiagnosticProjection(records, {
  generationId = null,
  projectionVersion = DIAGNOSTIC_PROJECTION_VERSION,
} = {}) {
  const effective = deriveEffectiveEvidence(records)
  const groups = new Map()
  for (const record of effective.active) {
    const key = groupKey(record)
    const current = groups.get(key) ?? {
      generation_id: generationId,
      projection_name: DIAGNOSTIC_PROJECTION_NAME,
      projection_version: projectionVersion,
      student_id: record.student_id,
      source_code: record.source_code,
      education_context_id: record.education_context_id ?? null,
      subject_id: record.subject_id ?? null,
      topic_id: record.topic_id ?? null,
      evidence_class: record.evidence_class,
      active_record_count: 0,
      measured_record_count: 0,
      measurement_totals: {},
      max_ingestion_sequence: 0,
    }
    current.active_record_count += 1
    current.max_ingestion_sequence = Math.max(
      current.max_ingestion_sequence,
      Number(record.ingestion_sequence) || 0
    )
    let measured = false
    for (const field of SUM_FIELDS) {
      const value = record.measurement?.[field]
      if (typeof value === 'number' && Number.isFinite(value)) {
        measured = true
        current.measurement_totals[field] = (current.measurement_totals[field] ?? 0) + value
      }
    }
    if (measured) current.measured_record_count += 1
    groups.set(key, current)
  }
  return Object.freeze(
    [...groups.values()]
      .sort((left, right) => groupKey(left).localeCompare(groupKey(right)))
      .map((row) => Object.freeze({ ...row, measurement_totals: Object.freeze(row.measurement_totals) }))
  )
}

export async function checksumDiagnosticRows(rows) {
  const normalized = rows.map(({ generation_id: _generation, ...row }) => row)
  return sha256Hex(stableStringify(normalized))
}

/**
 * Bir seferde yalnız tek öğrencinin defterini belleğe alır. Yeni nesil ancak
 * eksiksiz oluştuğunda etkinleşir; başarısız rebuild eski nesli korur.
 */
export async function replayDiagnosticProjection({
  repository,
  studentId = null,
  sourceCode = null,
  projectionVersion = DIAGNOSTIC_PROJECTION_VERSION,
  batchSize = 500,
  startSequence = 0,
  dryCompare = false,
  signal = null,
} = {}) {
  if (!repository?.listReplayStudents || !repository?.listLedgerBatch) {
    throw new TypeError('replay_repository_contract_required')
  }
  const normalizedStartSequence = Number(startSequence)
  if (!Number.isSafeInteger(normalizedStartSequence) || normalizedStartSequence < 0) {
    throw new TypeError('projection_start_sequence_invalid')
  }
  const pageSize = Math.min(Math.max(Number(batchSize) || 1, 1), 1000)
  const generation = dryCompare
    ? { generation_id: null }
    : await repository.beginProjectionGeneration({
        projectionName: DIAGNOSTIC_PROJECTION_NAME,
        projectionVersion,
        sourceCode,
        studentId,
        startSequence: normalizedStartSequence,
      })
  const allRows = []
  let highWaterMark = 0
  try {
    const studentIds = studentId
      ? [studentId]
      : await repository.listReplayStudents({ sourceCode, afterSequence: 0 })
    for (const currentStudentId of studentIds) {
      if (signal?.aborted) throw Object.assign(new Error('projection_cancelled'), { code: 'PROJECTION_CANCELLED' })
      let cursor = 0
      const studentRecords = []
      while (true) {
        const page = await repository.listLedgerBatch({
          studentId: currentStudentId,
          sourceCode,
          afterSequence: cursor,
          limit: pageSize,
        })
        if (!page.length) break
        studentRecords.push(...page)
        cursor = Number(page.at(-1).ingestion_sequence)
        highWaterMark = Math.max(highWaterMark, cursor)
        if (page.length < pageSize) break
      }
      const rows = buildDiagnosticProjection(studentRecords, {
        generationId: generation.generation_id,
        projectionVersion,
      })
      allRows.push(...rows)
      if (!dryCompare && rows.length) await repository.stageProjectionRows(generation.generation_id, rows)
    }
    if (normalizedStartSequence > highWaterMark) {
      throw Object.assign(new Error('projection_start_sequence_ahead'), {
        code: 'PROJECTION_START_SEQUENCE_AHEAD',
      })
    }
    const checksum = await checksumDiagnosticRows(allRows)
    if (!dryCompare) {
      await repository.activateProjectionGeneration(generation.generation_id, {
        checksum,
        rowCount: allRows.length,
        highWaterMark,
      })
    }
    return Object.freeze({
      generation_id: generation.generation_id,
      row_count: allRows.length,
      high_water_mark: highWaterMark,
      start_sequence: normalizedStartSequence,
      checksum,
      dry_compare: dryCompare,
      rows: Object.freeze(allRows),
    })
  } catch (error) {
    if (!dryCompare && generation?.generation_id) {
      await repository.failProjectionGeneration(generation.generation_id, error?.code ?? 'PROJECTION_REPLAY_FAILED')
    }
    throw error
  }
}

/** Claim ve cursor güncellemesi repository transaction'ında olmalıdır. */
export async function processDiagnosticBatch({
  repository,
  workerId,
  batchSize = 100,
  studentId = null,
  sourceCode = null,
} = {}) {
  return repository.runProjectionClaim(
    {
      projectionName: DIAGNOSTIC_PROJECTION_NAME,
      projectionVersion: DIAGNOSTIC_PROJECTION_VERSION,
      workerId,
      batchSize: Math.min(Math.max(batchSize, 1), 500),
      studentId,
      sourceCode,
    },
    async (claim) => {
      const affectedStudentIds = [
        ...new Set(claim.records.map((record) => record.student_id)),
      ].sort()
      const rows = []
      for (const studentId of affectedStudentIds) {
        let cursor = 0
        const history = []
        while (true) {
          const page = await (claim.repository ?? repository).listLedgerBatch({
            studentId,
            afterSequence: cursor,
            limit: 500,
          })
          if (!page.length) break
          history.push(...page)
          cursor = Number(page.at(-1).ingestion_sequence)
          if (page.length < 500) break
        }
        rows.push(...buildDiagnosticProjection(history, {
          generationId: claim.generation_id,
        }))
      }
      return {
        rows,
        replaceStudentIds: affectedStudentIds,
        lastSequence: claim.records.at(-1)?.ingestion_sequence ?? claim.cursor,
      }
    }
  )
}
