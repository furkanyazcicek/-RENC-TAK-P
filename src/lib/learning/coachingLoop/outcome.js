import { COACHING_OUTCOME_CONTRACT_VERSION } from './contract.js'

function scoreOf(projection) {
  const value = Number(projection?.performance_score)
  return Number.isFinite(value) && value >= 0 && value <= 1 ? value : null
}

export function evaluateCoachingOutcome({ task, beforeProjection, afterProjection, delayedProjection = null, feedback = null, now = Date.now() }) {
  const before = scoreOf(beforeProjection)
  const after = scoreOf(afterProjection)
  const delayed = scoreOf(delayedProjection)
  const enoughData = before != null && after != null
    && ['medium', 'high'].includes(afterProjection?.confidence_level)
    && (!task?.topic_id || afterProjection?.topic_id === task.topic_id)
  let assessment = 'unevaluable'
  let change = null
  if (enoughData) {
    change = Number((after - before).toFixed(4))
    if (change >= 0.08 || (delayed != null && delayed - before >= 0.08)) assessment = 'useful'
    else if (change <= 0.02 && feedback === 'not_helpful') assessment = 'ineffective'
  }
  const language = assessment === 'useful'
    ? 'Çalışmanın sonrasında ölçümlerde iyileşme görüldü; bu ilişki tek başına neden-sonuç kanıtı değildir.'
    : assessment === 'ineffective'
      ? 'Çalışmanın sonrasında yeterli gelişim görülmedi; bu sonuç yaklaşımın tek başına etkisiz olduğunu kanıtlamaz.'
      : 'Önerinin sonucunu değerlendirmek için henüz yeterli ve karşılaştırılabilir ölçüm yok.'
  return {
    contract_version: COACHING_OUTCOME_CONTRACT_VERSION,
    task_id: task?.task_id ?? null,
    student_id: task?.student_id ?? null,
    topic_id: task?.topic_id ?? null,
    before: before == null ? null : { performance_score: before, confidence_level: beforeProjection?.confidence_level ?? null, computed_at: beforeProjection?.computed_at ?? null },
    after: after == null ? null : { performance_score: after, confidence_level: afterProjection?.confidence_level ?? null, computed_at: afterProjection?.computed_at ?? null },
    delayed: delayed == null ? null : { performance_score: delayed, confidence_level: delayedProjection?.confidence_level ?? null, computed_at: delayedProjection?.computed_at ?? null },
    feedback,
    enough_data: enoughData,
    assessment,
    performance_change: change,
    causal_claim: false,
    explanation: language,
    evaluated_at: new Date(now).toISOString(),
  }
}

