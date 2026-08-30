import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import {
  loadMathQuestionSet,
  mathQuestionSetsForTopic,
  withMathQuestionBankTopics,
} from '../src/content/tests/matematik/question-bank.js'

const subjects = [
  { id: 'tyt-matematik', exam_type: 'TYT', name: 'Matematik' },
  { id: 'tyt-geometri', exam_type: 'TYT', name: 'Geometri' },
]

const topics = withMathQuestionBankTopics(subjects, [
  { id: 'temel', subject_id: 'tyt-matematik', name: 'Temel Kavramlar' },
])

assert.equal(topics.length, 4, 'Eksik matematik konuları görünüm katmanına eklenmeli.')
assert.equal(
  mathQuestionSetsForTopic('Temel Kavramlar', { examType: 'TYT', subjectName: 'Matematik' }).length,
  50,
  'Temel Kavramlar 50 test taşımalı.'
)
assert.equal(
  mathQuestionSetsForTopic('OBEB - OKEK', { examType: 'TYT', subjectName: 'Matematik' }).length,
  100,
  'Asal sayılar ve EBOB-EKOK bankaları aynı kütüphane başlığında 100 test taşımalı.'
)
assert.equal(
  mathQuestionSetsForTopic('Permütasyon - Kombinasyon - Olasılık', {
    examType: 'TYT',
    subjectName: 'Matematik',
  }).length,
  150,
  'Sayma, kombinasyon ve olasılık bankaları 150 test taşımalı.'
)
assert.equal(
  mathQuestionSetsForTopic('Temel Kavramlar', { examType: 'KPSS', subjectName: 'Matematik' }).length,
  0,
  'TYT soru bankası KPSS alanında görünmemeli.'
)

const originalFetch = globalThis.fetch
globalThis.fetch = async (url) => {
  const relativePath = String(url).replace(/^\//, '')
  try {
    const content = await readFile(join(process.cwd(), relativePath), 'utf8')
    return new Response(content, { status: 200 })
  } catch {
    return new Response('', { status: 404 })
  }
}

try {
  const first = await loadMathQuestionSet(
    'tyt-matematik-01_temel_kavramlar_ve_sayi_kumeleri-test-01'
  )
  const last = await loadMathQuestionSet('tyt-matematik-32_kati_cisimler-test-50')

  for (const test of [first, last]) {
    assert.ok(test, 'Test dosyası yüklenebilmeli.')
    assert.equal(test.questions.length, 10, 'Her test 10 soru taşımalı.')
    test.questions.forEach((question) => {
      assert.equal(question.options.length, 5, 'Her soru beş şık taşımalı.')
      assert.match(question.correctOptionId, /^[A-E]$/, 'Doğru cevap A-E aralığında olmalı.')
      assert.ok(question.explanation, 'Çözüm metni boş olmamalı.')
    })
  }
} finally {
  globalThis.fetch = originalFetch
}

console.log('Matematik soru kütüphanesi: Türkçe ile ortak akış şeması ve uç testler doğrulandı.')
