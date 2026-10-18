import assert from 'node:assert/strict'
import { test } from 'node:test'
import { readPublishedQuestionSets } from '../src/lib/questionLibraryRemote.js'

const minimumColumns = ['id', 'topic_id', 'title', 'questions', 'content_revision', 'content_hash', 'status', 'created_at']
function database({ minimal = true, error = null, rows = [{ id: 'set', title: 'Test', questions: [{ id: 'one' }, { id: 'two' }] }] } = {}) {
  const requests = []
  const columns = new Set(minimal ? minimumColumns : [...minimumColumns, 'description', 'difficulty', 'question_count', 'order_index'])
  return { requests, from(table) {
    const request = { table, filters: [] }; requests.push(request)
    function execute(single) {
      if (error) return { data: null, error }
      const missing = [...request.columns, ...(request.order ? [request.order] : [])].find((column) => !columns.has(column))
      if (missing) return { data: null, error: { code: '42703', message: `column ${missing} does not exist` } }
      const data = rows.filter((row) => request.filters.every(([key, value]) => key === 'status' ? value === 'published' : row[key] === value))
      return { data: single ? data[0] ?? null : data, error: null }
    }
    return { select(value) { request.columns = value.split(','); return this },
      eq(...args) { request.filters.push(args); return this },
      order(column) { request.order = column; return Promise.resolve(execute(false)) },
      maybeSingle() { return Promise.resolve(execute(true)) } }
  } }
}
test('Faz 3 asgari canlı şemasında katalog ve gerçek soru sayısı okunur', async () => {
  const db = database()
  const result = await readPublishedQuestionSets(db)
  assert.equal(result.error, null)
  assert.equal(result.data[0].question_count, 2)
  assert.equal(result.data[0].difficulty, null)
  assert.equal(db.requests.length, 2)
  assert.ok(db.requests.every((request) => request.filters.some(([key, value]) => key === 'status' && value === 'published')))
})
test('asgari şemada tek test yüklenirken yayın ve test kimliği sınırları korunur', async () => {
  const db = database()
  const result = await readPublishedQuestionSets(db, { id: 'set' })
  assert.equal(result.error, null)
  assert.equal(result.data.id, 'set')
  assert.ok(db.requests.every((request) => request.filters.some(([key, value]) => key === 'id' && value === 'set')))
})
test('zengin şemanın açıklaması, zorluğu ve soru sayısı korunur; ikinci sorgu yapılmaz', async () => {
  const db = database({ minimal: false, rows: [{ id: 'set', description: 'Açıklama', difficulty: 'hard', question_count: 12 }] })
  const result = await readPublishedQuestionSets(db)
  assert.equal(result.data[0].description, 'Açıklama')
  assert.equal(result.data[0].difficulty, 'hard')
  assert.equal(result.data[0].question_count, 12)
  assert.equal(db.requests.length, 1)
})
test('ağ veya yetki hatası boş katalog gibi gizlenmez', async () => {
  for (const code of ['42501', 'NETWORK_ERROR']) {
    const db = database({ error: { code } })
    const result = await readPublishedQuestionSets(db)
    assert.equal(result.error.code, code)
    assert.equal(result.data, null)
    assert.equal(db.requests.length, 1)
  }
})
test('asgari şema da eksikse hata korunur ve tekrar sınırlıdır', async () => {
  const db = database({ error: { code: '42703' } })
  const result = await readPublishedQuestionSets(db)
  assert.equal(result.error.code, '42703')
  assert.equal(db.requests.length, 2)
})
test('bulunmayan veya yayınlanmamış test boş sonuç verir', async () => {
  assert.equal((await readPublishedQuestionSets(database({ rows: [] }), { id: 'missing' })).data, null)
})
