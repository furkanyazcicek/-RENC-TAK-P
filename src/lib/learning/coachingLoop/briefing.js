const PRIORITY = Object.freeze({
  teacher_commitment_overdue: 100,
  teacher_commitment_due: 95,
  coaching_task_active: 90,
  repeat_due: 80,
  topic_needs_support: 70,
  measurement_needed: 60,
  recent_outcome: 40,
})

function keyOf(item) {
  return [item.kind, item.due_at ?? '', item.topic_id ?? '', item.id ?? '', item.title ?? ''].join('|')
}

function compare(left, right) {
  return (right.score - left.score)
    || String(left.due_at ?? '9999').localeCompare(String(right.due_at ?? '9999'))
    || keyOf(left).localeCompare(keyOf(right), 'tr')
}

export function buildDeterministicCoachingBriefing({ tasks = [], homeworks = [], projections = [], outcomes = [], now = Date.now() } = {}) {
  const today = new Date(now).toISOString().slice(0, 10)
  const items = []
  homeworks.forEach((homework) => {
    if (['Tamamlandı', 'completed'].includes(homework.status)) return
    const overdue = homework.due_date && homework.due_date < today
    items.push({
      kind: overdue ? 'teacher_commitment_overdue' : 'teacher_commitment_due',
      score: overdue ? PRIORITY.teacher_commitment_overdue : PRIORITY.teacher_commitment_due,
      id: homework.id,
      title: homework.title ?? 'Öğretmen ödevi',
      detail: overdue ? 'Teslim tarihi geçti; planlamada önce görünür tutuldu.' : 'Yaklaşan öğretmen taahhüdü.',
      due_at: homework.due_date,
      target: { status: 'available', path: `/odevler?gorev=${encodeURIComponent(homework.id)}`, label: 'Ödevi aç' },
      source: 'teacher_commitment',
    })
  })
  tasks.forEach((task) => {
    if (!['accepted', 'planned', 'started', 'partial', 'user_reported_complete'].includes(task.status)) return
    items.push({
      kind: 'coaching_task_active', score: PRIORITY.coaching_task_active, id: task.task_id,
      title: task.title ?? task.topic_label ?? 'Koçluk görevi',
      detail: task.status === 'user_reported_complete'
        ? 'Sen tamamladığını bildirdin; platform kanıtı henüz bekleniyor.'
        : task.success_criteria?.description ?? 'Hedef çalışmayı tamamla.',
      due_at: task.work_window_end ?? task.expires_at,
      topic_id: task.topic_id,
      target: task.target,
      status: task.status,
      recommendation_id: task.recommendation_id ?? null,
      success_criteria: task.success_criteria ?? null,
      progress_ratio: Number(task.progress_ratio ?? 0),
      source: 'coaching_task',
    })
  })
  projections.forEach((projection) => {
    if (projection.scope_type !== 'topic') return
    if (projection.repeat_due_at && projection.repeat_due_at.slice(0, 10) <= today) {
      items.push({ kind: 'repeat_due', score: PRIORITY.repeat_due, id: projection.scope_key, title: 'Tekrar zamanı geldi', detail: 'Kalıcılığı yeniden ölçmek için kısa bir tekrar yap.', due_at: projection.repeat_due_at, topic_id: projection.topic_id, source: 'student_model' })
    } else if (['needs_support', 'developing'].includes(projection.performance_state)) {
      items.push({ kind: 'topic_needs_support', score: PRIORITY.topic_needs_support, id: projection.scope_key, title: 'Desteğe ihtiyaç duyulan konu', detail: projection.explanation?.confidence_reason ?? 'Konu kanıtlarında destek ihtiyacı görülüyor.', topic_id: projection.topic_id, source: 'student_model' })
    } else if (projection.data_state === 'insufficient') {
      items.push({ kind: 'measurement_needed', score: PRIORITY.measurement_needed, id: projection.scope_key, title: 'Önce kısa bir ölçüm yap', detail: 'Kişisel öneri için yeterli doğrudan sonuç yok.', topic_id: projection.topic_id, source: 'student_model' })
    }
  })
  outcomes.slice(0, 2).forEach((outcome) => {
    items.push({ kind: 'recent_outcome', score: PRIORITY.recent_outcome, id: outcome.outcome_id ?? outcome.task_id, title: 'Son çalışmanın sonucu', detail: outcome.explanation, topic_id: outcome.topic_id, source: 'coaching_outcome' })
  })
  const unique = [...new Map(items.sort(compare).map((item) => [keyOf(item), item])).values()]
  return {
    contract_version: 'coaching-briefing@1',
    as_of_date: today,
    daily: { primary: unique[0] ?? null, secondary: unique[1] ?? null, count: Math.min(2, unique.length) },
    weekly: unique.slice(0, 5),
    stable_order_key: unique.slice(0, 5).map(keyOf).join('||'),
    limitations: unique.length ? [] : ['Henüz yönlendirme üretecek yeterli görev veya öğrenme kanıtı yok.'],
  }
}
