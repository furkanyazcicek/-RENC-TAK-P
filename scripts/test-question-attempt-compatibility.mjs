import assert from 'node:assert/strict'
import test from 'node:test'

import {
  buildLocalQuestionResult,
  clearLocalQuestionAttempt,
  readLocalQuestionAttempt,
  sanitizeLocalQuestionAnswers,
  saveLocalQuestionAttempt,
} from '../src/lib/learning/contentActivity/questionAttemptCompatibility.js'
import { createSupabaseContentActivityClient } from '../src/lib/learning/contentActivity/client.js'

const USER_A = '44000000-0000-4000-8000-000000000001'
const USER_B = '44000000-0000-4000-8000-000000000002'
const questionSet = {
  id: 'test-fiiller-uyumluluk',
  content_id: 'test-fiiller-uyumluluk',
  content_revision: 'sha256-uyumluluk',
  source_code: 'bundled_question_test',
  questions: [
    {
      id: 'q1',
      options: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      correctOptionId: 'B',
      explanation: 'Doğru cevap B seçeneğidir.',
    },
    {
      id: 'q2',
      options: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      correctOptionId: 'A',
      explanation: 'Doğru cevap A seçeneğidir.',
    },
    {
      id: 'q3',
      options: [{ id: 'A' }, { id: 'B' }, { id: 'C' }],
      correctOptionId: 'C',
      explanation: 'Doğru cevap C seçeneğidir.',
    },
  ],
}

function memoryStorage() {
  const values = new Map()
  return {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
    removeItem: (key) => values.delete(key),
  }
}

test('yerel uyumluluk kaydı yalnız geçerli soru ve seçenekleri saklar', () => {
  assert.deepEqual(sanitizeLocalQuestionAnswers(questionSet, {
    q1: 'B', q2: 'Z', bilinmeyen: 'A',
  }), { q1: 'B' })
})

test('yerel deneme hesap ve içerik sürümü kapsamında kalır', () => {
  const storage = memoryStorage()
  saveLocalQuestionAttempt({
    storage,
    userId: USER_A,
    test: questionSet,
    answers: { q1: 'B' },
  })

  assert.deepEqual(readLocalQuestionAttempt({ storage, userId: USER_A, test: questionSet })?.answers, { q1: 'B' })
  assert.equal(readLocalQuestionAttempt({ storage, userId: USER_B, test: questionSet }), null)
  assert.equal(readLocalQuestionAttempt({
    storage,
    userId: USER_A,
    test: { ...questionSet, content_revision: 'sha256-yeni-surum' },
  }), null)
})

test('yerel sonuç kayıtsız olduğunu işaretler ve D/Y/B sayılarını doğru kurar', () => {
  const result = buildLocalQuestionResult(questionSet, { q1: 'B', q2: 'C' })

  assert.equal(result.local_only, true)
  assert.equal(result.attempt_status, 'completed')
  assert.equal(result.total_count, 3)
  assert.equal(result.marked_count, 2)
  assert.equal(result.correct_count, 1)
  assert.equal(result.wrong_count, 1)
  assert.equal(result.empty_count, 1)
  assert.equal(result.accuracy, 0.5)
  assert.equal(result.answers[0].correct_option_id, 'B')
})

test('tamamlanan yerel deneme yeniden açılabilir ve yeni çözümde temizlenir', () => {
  const storage = memoryStorage()
  saveLocalQuestionAttempt({
    storage,
    userId: USER_A,
    test: questionSet,
    answers: { q1: 'B', q2: 'C' },
    status: 'completed',
  })

  assert.equal(readLocalQuestionAttempt({ storage, userId: USER_A, test: questionSet })?.status, 'completed')
  assert.equal(clearLocalQuestionAttempt({ storage, userId: USER_A, test: questionSet }), true)
  assert.equal(readLocalQuestionAttempt({ storage, userId: USER_A, test: questionSet }), null)
})

test('canlıda eksik deneme RPC\'si şema yokluğu olarak ayırt edilir', async () => {
  const client = createSupabaseContentActivityClient({
    supabase: {
      rpc: async () => ({ data: null, error: { code: 'PGRST202' } }),
    },
    storage: memoryStorage(),
    userId: USER_A,
  })

  assert.deepEqual(await client.getAttempt('44000000-0000-4000-8000-000000000010'), {
    status: 'unavailable',
    reason: 'schema_unavailable',
    result: null,
  })
})
