/** Faz 10: yalnız açıkça seçilmiş öğrenci hesaplarında kontrollü projeksiyon provası. */
import { replayDiagnosticProjection } from '../../../src/lib/learning/network/projection.js'
import { replayStudentTopicProjection } from '../../../src/lib/learning/studentModel/projection.js'

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function exactStudentIds(value, label) {
  if (!Array.isArray(value) || value.length < 1 || value.length > 5
      || value.some((id) => typeof id !== 'string' || !UUID.test(id))) {
    throw new TypeError(`${label}_invalid`)
  }
  const ids = value.map((id) => id.toLowerCase())
  if (new Set(ids).size !== ids.length) throw new TypeError(`${label}_duplicate`)
  return ids
}

function counts(result, projection) {
  return Object.freeze({
    projection,
    row_count: result.row_count,
    pattern_count: result.pattern_count ?? 0,
    evidence_ref_count: result.evidence_ref_count ?? 0,
    high_water_mark: result.high_water_mark,
    checksum: result.checksum,
  })
}

function pilotError(code) {
  return Object.assign(new Error(code.toLowerCase()), { code })
}

/**
 * İlk geçiş bütün seçili hesapları yalnız okur. Yazma istenirse her hesap için
 * aynı sonucu yeniden üretir; fark/hata halinde o hesabın görünürlüğünü kapatır.
 * Ham kayıtlar, öğrencinin kimliği ve model satırları sonuç nesnesine girmez.
 */
export async function runPilotProjectionCycle({
  repository,
  studentIds,
  approvedStudentIds,
  asOf,
  mode = 'dry_compare',
  allowApply = false,
  signal = null,
} = {}) {
  const selected = exactStudentIds(studentIds, 'pilot_students')
  const approved = new Set(exactStudentIds(approvedStudentIds, 'approved_pilot_students'))
  if (selected.some((id) => !approved.has(id))) throw pilotError('PILOT_STUDENT_NOT_APPROVED')
  if (mode !== 'dry_compare' && mode !== 'apply') throw new TypeError('pilot_projection_mode_invalid')
  if (mode === 'apply' && allowApply !== true) throw pilotError('PILOT_APPLY_NOT_AUTHORIZED')
  if (!Number.isFinite(Date.parse(asOf)) || new Date(asOf).toISOString() !== asOf) {
    throw new TypeError('pilot_projection_as_of_invalid')
  }
  if (!repository?.isProjectionRolloutInstalled || !repository?.isProjectionExecutionEnabled
      || !repository?.listLedgerBatch || !repository?.listReplayStudents
      || (mode === 'apply' && !repository?.revokeStudentProjectionVisibility)) {
    throw new TypeError('pilot_projection_repository_contract_required')
  }
  if (!await repository.isProjectionRolloutInstalled()) {
    throw pilotError('PILOT_PROJECTION_ROLLOUT_SCHEMA_MISSING')
  }
  for (const id of selected) {
    if (signal?.aborted) throw pilotError('PILOT_PROJECTION_CANCELLED')
    if (!await repository.isProjectionExecutionEnabled(id)) {
      throw pilotError('PILOT_PROJECTION_FLAG_DISABLED')
    }
  }

  const dry = []
  for (const id of selected) {
    if (signal?.aborted) throw pilotError('PILOT_PROJECTION_CANCELLED')
    const diagnostic = await replayDiagnosticProjection({
      repository, studentId: id, dryCompare: true, signal,
    })
    const model = await replayStudentTopicProjection({
      repository, studentId: id, asOf, dryCompare: true, signal,
    })
    dry.push({ diagnostic: counts(diagnostic, 'diagnostic'), model: counts(model, 'student_topic_model') })
  }
  if (mode === 'dry_compare') {
    return Object.freeze({ mode, student_count: selected.length,
      students: Object.freeze(dry.map((item, index) => Object.freeze({ ordinal: index + 1, ...item }))) })
  }

  const applied = []
  const affectedIds = []
  try {
    for (const [index, id] of selected.entries()) {
      if (signal?.aborted) throw pilotError('PILOT_PROJECTION_CANCELLED')
      if (!await repository.isProjectionExecutionEnabled(id)) {
        throw pilotError('PILOT_PROJECTION_FLAG_DISABLED')
      }
      affectedIds.push(id)
      const diagnostic = counts(await replayDiagnosticProjection({
        repository, studentId: id, signal,
      }), 'diagnostic')
      const model = counts(await replayStudentTopicProjection({
        repository, studentId: id, asOf, signal,
      }), 'student_topic_model')
      if (diagnostic.checksum !== dry[index].diagnostic.checksum
          || model.checksum !== dry[index].model.checksum) {
        throw pilotError('PILOT_PROJECTION_COMPARISON_CHANGED')
      }
      applied.push(Object.freeze({ ordinal: index + 1, diagnostic, model }))
    }
  } catch (error) {
    let rollbackFailed = false
    for (const id of affectedIds.reverse()) {
      try {
        await repository.revokeStudentProjectionVisibility(id)
      } catch {
        rollbackFailed = true
      }
    }
    if (rollbackFailed) throw pilotError('PILOT_PROJECTION_ROLLBACK_FAILED')
    throw error
  }
  return Object.freeze({ mode, student_count: selected.length, students: Object.freeze(applied) })
}
