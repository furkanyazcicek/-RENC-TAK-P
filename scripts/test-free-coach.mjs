import assert from 'node:assert/strict'
import { test } from 'node:test'

import { buildFreeCoachGuide } from '../api/_lib/freeCoach.js'
import { fetchFreeCoachData } from '../api/_lib/freeCoachData.js'
import { buildFacts } from '../api/_lib/context.js'
import { isPaidChatEnabled } from '../api/_lib/paidChatGate.js'
import chatHandler from '../api/ai-coach/chat.js'
import freeGuideHandler, { createFreeGuideHandler } from '../api/ai-coach/free-guide.js'

function facts(overrides = {}) {
  return {
    profile: { firstName: 'Deniz' },
    plan: { today: [] },
    homeworks: { pending: 0, overdue: 0 },
    weakTopics: [],
    study: { logCount: 0, thisWeekMinutes: 0, prevWeekMinutes: 0, thisWeekSolved: 0 },
    exams: { totalMock: 0, recent: [] },
    degraded: false,
    ...overrides,
  }
}

function response() {
  return {
    statusCode: 200,
    headers: {},
    setHeader(name, value) { this.headers[name] = value; return this },
    status(code) { this.statusCode = code; return this },
    json(body) { this.body = body; return this },
  }
}

test('ücretli sohbet kapısı ortam değişkeniyle açılamaz', async () => {
  assert.equal(isPaidChatEnabled(), false)
  const res = response()
  await chatHandler({ method: 'POST', headers: {}, body: { message: 'Merhaba' } }, res)
  assert.equal(res.statusCode, 401)
  assert.equal(res.body.error.code, 'unauthenticated')
})

test('ücretsiz rehber öğrenci oturumu olmadan veri döndürmez', async () => {
  const res = response()
  await freeGuideHandler({ method: 'GET', headers: {} }, res)
  assert.equal(res.statusCode, 401)
  assert.equal(res.headers['Cache-Control'], 'private, no-store')
})

test('rehber istemcinin öğrenci kimliğini değil doğrulanmış oturumu kullanır', async () => {
  const calls = []
  const ownClient = {}
  const handler = createFreeGuideHandler({
    authenticate: async () => ({ ok: true, user: { id: 'ogrenci-a' }, profile: { full_name: 'Deniz' }, supabase: ownClient }),
    fetchFreeCoachData: async (client, studentId) => {
      calls.push({ client, studentId })
      return { degraded: false }
    },
    buildFacts: () => facts(),
  })
  const res = response()
  await handler({ method: 'GET', body: { student_id: 'ogrenci-b' } }, res)
  assert.equal(res.statusCode, 200)
  assert.equal(res.body.version, 'free-coach-guide@1')
  assert.deepEqual(calls, [{ client: ownClient, studentId: 'ogrenci-a' }])
})

test('rehber yalnız gerekli dört kaynağı, dar alanları ve kendi öğrenci filtresini okur', async () => {
  const reads = []
  const supabase = {
    from(table) {
      const record = { table, columns: '', studentId: null }
      reads.push(record)
      const query = {
        select(columns) { record.columns = columns; return query },
        eq(column, value) { if (column === 'student_id') record.studentId = value; return query },
        gte() { return query },
        order() { return query },
        limit() { return query },
        then(resolve) { resolve({ data: [], error: null }) },
      }
      return query
    },
  }
  const result = await fetchFreeCoachData(supabase, 'ogrenci-a')
  assert.equal(result.degraded, false)
  assert.deepEqual(reads.map((item) => item.table), ['daily_logs', 'mock_exams', 'homeworks', 'ai_study_tasks'])
  assert.ok(reads.every((item) => item.studentId === 'ogrenci-a'))
  assert.ok(reads.every((item) => !/notes|description|teacher_reply|email/i.test(item.columns)))
})

test('kaynak satır sınırına ulaşınca eksik listeyi tam kişisel sonuç gibi sunmaz', async () => {
  const supabase = {
    from(table) {
      const query = {
        select() { return query }, eq() { return query }, gte() { return query },
        order() { return query }, limit() { return query },
        then(resolve) {
          resolve({
            data: table === 'homeworks' ? Array.from({ length: 500 }, () => ({})) : [],
            error: null,
          })
        },
      }
      return query
    },
  }
  const result = await fetchFreeCoachData(supabase, 'ogrenci-a')
  assert.equal(result.degraded, true)
})

test('dar veri sözleşmesi gerçek özetleyiciyle boş kayıtta çalışır', () => {
  const raw = {
    logs: [], mockExams: [], homeworks: [], tasks: [],
    branchExams: [], questions: [], memory: [], solveSessions: [], degraded: false,
  }
  const guide = buildFreeCoachGuide(buildFacts({ full_name: 'Deniz Kaya', created_at: '2026-01-01' }, raw))
  assert.equal(guide.firstName, 'Deniz')
  assert.equal(guide.today.kind, 'start')
})

test('kaynak okuması eksikse uç nokta kişisel sonuç göndermez', async () => {
  const handler = createFreeGuideHandler({
    authenticate: async () => ({ ok: true, user: { id: 'ogrenci-a' }, profile: {}, supabase: {} }),
    fetchFreeCoachData: async () => ({ degraded: true }),
    buildFacts: () => facts({ degraded: true }),
  })
  const res = response()
  await handler({ method: 'GET' }, res)
  assert.equal(res.statusCode, 503)
  assert.equal(res.body.error.code, 'data_unavailable')
  assert.equal(res.body.today, undefined)
})

test('eksik kaynakta kişisel öneri üretmez', () => {
  const guide = buildFreeCoachGuide(facts({ degraded: true }))
  assert.equal(guide.status, 'unavailable')
  assert.equal(guide.today, undefined)
})

test('boş kayıtta ilk adımı gösterir ve başarı uydurmaz', () => {
  const guide = buildFreeCoachGuide(facts())
  assert.equal(guide.today.kind, 'start')
  assert.equal(guide.topics.length, 0)
  assert.equal(guide.latestExam, null)
})

test('kayıtlı plan önceliklidir ve yalnız mevcut adımları listeler', () => {
  const guide = buildFreeCoachGuide(facts({
    plan: { today: [{ subject: 'Matematik', topic: 'Fonksiyonlar', minutes: 30 }] },
    homeworks: { pending: 2, overdue: 1 },
  }))
  assert.equal(guide.today.kind, 'plan')
  assert.deepEqual(guide.today.items, [{ subject: 'Matematik', topic: 'Fonksiyonlar', minutes: 30 }])
})

test('gecikmiş ödev zayıf konu çıkarımından önce gelir', () => {
  const guide = buildFreeCoachGuide(facts({
    homeworks: { pending: 2, overdue: 1 },
    weakTopics: [{ subject: 'Matematik', topic: 'Fonksiyonlar', attempted: 20, accuracy: 60 }],
  }))
  assert.equal(guide.today.kind, 'homework')
})

test('zayıf konu için en az on beyan edilmiş soru gerekir', () => {
  const weakTopics = [{ subject: 'Matematik', topic: 'Fonksiyonlar', attempted: 9, accuracy: 40 }]
  const small = buildFreeCoachGuide(facts({ weakTopics, study: { logCount: 1 } }))
  assert.equal(small.today.kind, 'review')
  assert.equal(small.topics.length, 0)
  const enough = buildFreeCoachGuide(facts({
    weakTopics: [{ ...weakTopics[0], attempted: 10 }], study: { logCount: 1 },
  }))
  assert.equal(enough.today.kind, 'practice')
  assert.equal(enough.topics.length, 1)
})

test('denemeyi yalnız kayıtlı sınav türüyle ve karşılaştırma iddiası olmadan gösterir', () => {
  const guide = buildFreeCoachGuide(facts({
    exams: { totalMock: 1, recent: [{ type: 'TYT', name: 'TYT 1', date: '2026-10-10', totalNet: 68.5,
      subjects: [{ subject: 'Matematik', net: 18.5 }] }] },
  }))
  assert.equal(guide.latestExam.type, 'TYT')
  assert.equal(guide.latestExam.totalNet, 68.5)
  assert.match(guide.latestExam.source, /farklı sınav türleri karşılaştırılmaz/)
})
