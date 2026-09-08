import { projectEvidenceHistory } from '../evidenceContract.js'

const unresolved = (record) => ['ambiguous', 'unmatched'].includes(record?.identity_resolution?.status)

/** Faz 1 saf semantiğini korur; konu projeksiyonu için karantina kayıtlarını ayırır. */
export function deriveEffectiveEvidence(records, { topicProjection = false } = {}) {
  const projected = projectEvidenceHistory(records)
  const active = topicProjection
    ? projected.active.filter((record) => record.topic_id && !unresolved(record))
    : projected.active.filter((record) => !unresolved(record))
  return Object.freeze({ ...projected, active: Object.freeze(active) })
}

export function sumEffectiveCorrectCount(records) {
  return deriveEffectiveEvidence(records).active.reduce(
    (total, record) => total + (Number(record.measurement?.correct_count) || 0),
    0
  )
}
