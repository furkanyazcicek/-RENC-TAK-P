import assert from 'node:assert/strict'

import {
  indexLatestQuestionProgress,
  progressForQuestionSet,
  questionProgressKey,
  summarizeQuestionProgress,
} from '../src/lib/questionProgress.js'

const rows = [
  {
    id: 'attempt-old',
    source_code: 'bundled_question_test',
    content_id: 'hareket-test-1',
    status: 'in_progress',
    marked_count: 2,
    total_count: 10,
    started_at: '2026-09-10T10:00:00.000Z',
    updated_at: '2026-09-10T10:05:00.000Z',
  },
  {
    id: 'attempt-current',
    source_code: 'bundled_question_test',
    content_id: 'hareket-test-1',
    status: 'in_progress',
    marked_count: 12,
    total_count: 10,
    started_at: '2026-09-11T10:00:00.000Z',
    updated_at: '2026-09-11T10:08:00.000Z',
  },
  {
    id: 'attempt-completed',
    source_code: 'db_question_test',
    content_id: '33000000-0000-4000-8000-000000000002',
    status: 'completed',
    marked_count: 8,
    total_count: 10,
    correct_count: 6,
    wrong_count: 2,
    empty_count: 2,
    started_at: '2026-09-12T10:00:00.000Z',
    updated_at: '2026-09-12T10:12:00.000Z',
  },
  {
    id: 'attempt-abandoned',
    source_code: 'bundled_question_test',
    content_id: 'ignored-test',
    status: 'abandoned',
    marked_count: 4,
    total_count: 5,
    updated_at: '2026-09-13T10:00:00.000Z',
  },
]

const progressByKey = indexLatestQuestionProgress(rows)
const bundledKey = questionProgressKey('bundled_question_test', 'hareket-test-1')
assert.equal(progressByKey[bundledKey].attemptId, 'attempt-current')
assert.equal(progressByKey[bundledKey].answeredCount, 10)
assert.equal(Object.keys(progressByKey).length, 2)

const questionSets = [
  { id: 'hareket-test-1', source_code: 'bundled_question_test' },
  { id: '33000000-0000-4000-8000-000000000002', source_code: 'db_question_test' },
  { id: 'baslanmayan-test', source_code: 'bundled_question_test' },
]

assert.equal(
  progressForQuestionSet(progressByKey, questionSets[1]).attemptId,
  'attempt-completed'
)
assert.deepEqual(summarizeQuestionProgress(questionSets, progressByKey), {
  total: 3,
  completed: 1,
  inProgress: 1,
  notStarted: 1,
})

console.log('Soru kütüphanesi ilerleme kontrolleri geçti.')
