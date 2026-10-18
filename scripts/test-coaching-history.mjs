import assert from 'node:assert/strict'
import { test } from 'node:test'
import { hydrateCoachingHistory } from '../api/_lib/coachingHistory.js'
import { buildDeterministicCoachingBriefing } from '../src/lib/learning/coachingLoop/briefing.js'

const student = '10000000-0000-4000-8000-000000000001'
const recommendation = '20000000-0000-4000-8000-000000000001'
const other = '30000000-0000-4000-8000-000000000001'
const messages = [{ id: 'message', actions: [{ type: 'accept_coaching_recommendation',
  payload: { recommendation: { recommendation_id: recommendation, suggested_amount: { kind: 'questions', value: 10 } } } }] }]
function database(rows, error = null) {
  const calls = []
  const query = { select(value) { calls.push(['select', value]); return this },
    eq(...args) { calls.push(['eq', ...args]); return this },
    in(...args) { calls.push(['in', ...args]); return this },
    limit(value) { calls.push(['limit', value]); return Promise.resolve({ data: rows, error }) } }
  return { calls, from(table) { calls.push(['from', table]); return query } }
}
test('onaylanan kart yenilendiğinde kayıtlı miktarı ve kararı gösterir; okuma öğrenciyle sınırlıdır', async () => {
  const db = database([{ student_id: student, recommendation_id: recommendation, decision: 'accepted',
    suggested_amount: { kind: 'questions', value: 15 }, success_criteria: { minimum_count: 15 }, target: { status: 'available' } }])
  const [message] = await hydrateCoachingHistory(db, student, messages)
  assert.equal(message.actions[0].execution_state, 'done')
  assert.equal(message.actions[0].payload.recommendation.suggested_amount.value, 15)
  assert.equal(message.actions[0].payload.recommendation.success_criteria.minimum_count, 15)
  assert.ok(db.calls.some((call) => call[0] === 'eq' && call[1] === 'student_id' && call[2] === student))
  assert.equal(messages[0].actions[0].payload.recommendation.suggested_amount.value, 10)
})
test('başka öğrencinin kararı kendi kartına uygulanmaz', async () => {
  const result = await hydrateCoachingHistory(database([{ student_id: other, recommendation_id: recommendation, decision: 'accepted' }]), student, messages)
  assert.equal(result[0].actions[0].execution_state, undefined)
})
test('reddedilmiş kart yenilemede tekrar onaya açılmaz', async () => {
  const result = await hydrateCoachingHistory(database([{ student_id: student, recommendation_id: recommendation, decision: 'rejected' }]), student, messages)
  assert.equal(result[0].actions[0].execution_state, 'rejected')
})
test('henüz onaylanmamış kart değişmez', async () => {
  const result = await hydrateCoachingHistory(database([]), student, messages)
  assert.equal(result[0].actions[0].execution_state, undefined)
})
test('karar okunamadığında yeniden yazma kapalıdır; sohbet korunur', async () => {
  const result = await hydrateCoachingHistory(database([], { code: 'unavailable' }), student, messages)
  assert.equal(result[0].id, 'message')
  assert.equal(result[0].actions[0].execution_state, 'unavailable')
})
test('eski sohbetler için yeni görev tablosu sorgulanmaz', async () => {
  const db = database([])
  const legacy = [{ actions: [{ type: 'create_study_plan' }] }]
  assert.equal(await hydrateCoachingHistory(db, student, legacy), legacy)
  assert.equal(db.calls.length, 0)
})
const task = { task_id: 'task', topic_label: 'Fonksiyonlar', status: 'planned', progress_ratio: 0,
  success_criteria: { description: '15 yeni soru sonucu gerekir.' } }
test('çok sayıda öğretmen ödevi olsa da onaylı Koç görevi görünür kalır', () => {
  const briefing = buildDeterministicCoachingBriefing({ tasks: [task],
    homeworks: Array.from({ length: 8 }, (_, i) => ({ id: String(i), title: 'Ödev', due_date: '2026-01-01' })) })
  assert.equal(briefing.daily.primary.source, 'teacher_commitment')
  assert.equal(briefing.active_task.id, 'task')
  assert.equal(briefing.active_task.progress_ratio, 0)
})
test('platformun doğruladığı çalışma sonuç değerlendirmesinden önce kaybolmaz', () => {
  const briefing = buildDeterministicCoachingBriefing({ tasks: [{ ...task, status: 'platform_verified', progress_ratio: 1 }] })
  assert.equal(briefing.active_task.status, 'platform_verified')
  assert.equal(briefing.active_task.progress_ratio, 1)
})
test('yetersiz önce-sonra ölçümü açıkça gösterilir; başarı uydurulmaz', () => {
  const explanation = 'Karşılaştırılabilir ön ölçüm olmadığı için gelişim değerlendirilemiyor.'
  const briefing = buildDeterministicCoachingBriefing({ tasks: [{ ...task, status: 'evaluated', progress_ratio: 1 }],
    outcomes: [{ task_id: 'task', assessment: 'unevaluable', explanation }] })
  assert.equal(briefing.active_task.outcome, explanation)
  assert.equal(briefing.active_task.status, 'evaluated')
})
test('brifing Türkiye gece yarısını öğrenciyle aynı günde değerlendirir', () => {
  const briefing = buildDeterministicCoachingBriefing({ now: Date.parse('2026-10-18T22:00:00Z') })
  assert.equal(briefing.as_of_date, '2026-10-19')
})
