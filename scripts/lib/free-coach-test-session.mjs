/** Yalnız sentetik yerel test hesabı; gerçek Supabase bağlantısı açmaz. */
import { randomUUID } from 'node:crypto'
import { buildFacts } from '../../api/_lib/context.js'
import { buildFreeCoachSnapshot } from '../../api/_lib/freeCoachEngine.js'

export const TEST_STUDENT = '10000000-0000-4000-8000-000000000001'
export function createFreeCoachTestSession() {
  const tables = { ai_conversations: [], ai_messages: [], ai_usage_events: [] }
  const reads = []
  const supabase = { from(table) {
    let predicates = [], operation = 'read', payload = null
    const query = {
      select() { return query }, eq(key, value) { predicates.push([key, value]); return query },
      gte() { return query }, order() { return query }, limit() { return query },
      insert(value) { operation = 'insert'; payload = value; return query },
      update(value) { operation = 'update'; payload = value; return query },
      async single() { return run(true) }, async maybeSingle() { return run(true) },
      then(resolve, reject) { return Promise.resolve(run(false)).then(resolve, reject) },
    }
    function run(single) {
      reads.push({ table, operation, predicates })
      const source = tables[table] ?? []
      let data
      if (operation === 'insert') {
        data = (Array.isArray(payload) ? payload : [payload]).map((value) => ({ id: randomUUID(), ...value }))
        tables[table] = [...source, ...data]
      } else {
        data = source.filter((row) => predicates.every(([key, value]) => row[key] === value))
        if (operation === 'update') data.forEach((row) => Object.assign(row, payload))
      }
      return { data: single ? data[0] ?? null : data, error: null }
    }
    return query
  } }
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Istanbul' })
  const now = new Date().toISOString()
  const raw = { logs: [{ id: randomUUID(), topic: 'Matematik - Fonksiyonlar', study_date: today, correct: 18, incorrect: 2, empty: 0, duration_minutes: 30 }], mockExams: [], branchExams: [], homeworks: [], questions: [], memory: [{ key: 'hedef_sinav', value: 'TYT' }], tasks: [], solveSessions: [], degraded: false }
  const record = { record_id: randomUUID(), student_id: TEST_STUDENT, source_code: 'bundled_question_test', source_record_id: 'free-coach-fixture-question', source_revision: '1', dedupe_key: 'free-coach-fixture-question', source_locator: 'drkoc-ref:v1:bundled_question_test:freeCoachFixture01', record_kind: 'event', semantic_event_type: 'question_answered', topic_id: 'drkoc:curriculum:topic:v1:t0066', subject_id: 'drkoc:curriculum:subject:v1:s008', education_context_id: 'drkoc:curriculum:context:v1:tyt', identity_resolution: { status: 'matched' }, evidence_class: 'direct_measurement', occurred_at: now, ingestion_sequence: 1, measurement: { correct_count: 3, incorrect_count: 7, total_count: 10 } }
  const profile = { id: TEST_STUDENT, full_name: 'Deniz Kaya', role: 'student' }
  const snapshot = buildFreeCoachSnapshot({ studentId: TEST_STUDENT, raw, facts: buildFacts(profile, raw), records: [record], asOf: now })
  snapshot.coachingAnalysisEnabled=true
  return { tables, reads, supabase, snapshot, authenticate: async () => ({ ok: true, user: { id: TEST_STUDENT }, profile, supabase }) }
}
