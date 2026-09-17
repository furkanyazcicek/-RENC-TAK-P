import assert from 'node:assert/strict'
import {
  BUNDLED_TURKCE_SUBJECT,
  TURKCE_TOPICS,
  withTurkceQuestionBankSubjects,
  withTurkceQuestionBankTopics,
} from '../src/content/tests/turkce/question-bank.js'
import {
  bundledQuestionSetsForTopic,
  loadQuestionSet,
} from '../src/lib/questionLibrary.js'
import {
  createQuestionLibraryCatalog,
  resolveQuestionLibraryRemoteData,
} from '../src/lib/questionLibraryCatalog.js'

const remoteFallback = resolveQuestionLibraryRemoteData([
  { status: 'fulfilled', value: { data: [], error: null } },
  { status: 'fulfilled', value: { data: [], error: null } },
  {
    status: 'fulfilled',
    value: {
      data: null,
      error: { code: 'PGRST205', message: "Could not find 'public.library_question_sets'" },
    },
  },
])
assert.deepEqual(remoteFallback.questionSets, [])
assert.equal(remoteFallback.hasUnexpectedError, false)

// Paketli soru bankalarının sayfa kataloğunda birlikte kurulabildiğini
// doğrula. Bu zincirdeki tek bir eksik adım ekranı yükleniyor durumunda bırakır.
const catalog = createQuestionLibraryCatalog(remoteFallback.subjects, remoteFallback.topics)
assert.equal(
  catalog.subjects.some((subject) => subject.exam_type === 'TYT' && subject.name === 'Din Kültürü ve Ahlak Bilgisi'),
  true,
  'Din Kültürü soru bankası katalog zincirinde bulunmalı.'
)
assert.equal(
  catalog.subjects.some((subject) => subject.exam_type === 'TYT' && subject.name === 'Türkçe'),
  true,
  'TYT Türkçe soru bankası katalog zincirinde bulunmalı.'
)

// 1. Ders Listesi Doğrulaması
const emptySubjects = withTurkceQuestionBankSubjects([])
assert.equal(
  emptySubjects.some((s) => s.exam_type === 'TYT' && s.name === 'Türkçe'),
  true,
  'Veritabanı boş olsa da TYT Türkçe dersi görünmeli.'
)

const existingSubjects = withTurkceQuestionBankSubjects([
  { id: 'remote-tyt-turkce', exam_type: 'TYT', name: 'Türkçe' },
])
assert.equal(
  existingSubjects.filter((s) => s.exam_type === 'TYT' && s.name === 'Türkçe').length,
  1,
  'Mevcut Türkçe dersi varsa çift kayıt oluşmamalı.'
)

// 2. Konu Listesi Doğrulaması
const topics = withTurkceQuestionBankTopics(emptySubjects, [])
assert.equal(topics.length, 15, 'TYT Türkçe müfredatındaki 15 konu eklenmeli.')

const fiillerTopic = topics.find((t) => t.name === 'Fiiller')
assert.ok(fiillerTopic, 'Fiiller konusu konu listesinde bulunmalı.')
assert.equal(fiillerTopic.order_index, 6, 'Fiiller konusu müfredatta 6. sırada olmalı.')

// 3. Fiiller Test Seti Doğrulaması (42 Test)
const fiillerSets = bundledQuestionSetsForTopic('Fiiller', {
  examType: 'TYT',
  subjectName: 'Türkçe',
})

assert.equal(fiillerSets.length, 42, 'Fiiller başlığı altında tam 42 test bulunmalı.')

const kolaySets = fiillerSets.filter((s) => s.id.includes('kolay') || s.title.includes('Kolay'))
const ortaSets = fiillerSets.filter((s) => s.id.includes('orta') || s.title.includes('Orta'))
const zorSets = fiillerSets.filter((s) => s.id.includes('zor') || s.title.includes('Zor'))

assert.equal(kolaySets.length, 14, '14 Kolay düzey test bulunmalı.')
assert.equal(ortaSets.length, 14, '14 Orta düzey test bulunmalı.')
assert.equal(zorSets.length, 14, '14 Zor düzey test bulunmalı.')

// 4. Soru Sayısı ve Kalite Doğrulaması (420 Soru)
const allQuestionIds = new Set()
let totalQuestionCount = 0

for (const set of fiillerSets) {
  assert.equal(set.questions.length, 10, `${set.id} tam 10 soru taşımalı.`)
  totalQuestionCount += set.questions.length

  for (const q of set.questions) {
    assert.ok(q.id, 'Soru kimliği tanımlı olmalı.')
    assert.equal(allQuestionIds.has(q.id), false, `Yinelenen soru kimliği: ${q.id}`)
    allQuestionIds.add(q.id)

    assert.equal(q.id.includes('revised'), false, `Taslak/revize soru kimliği temizlenmiş olmalı: ${q.id}`)
    assert.ok(q.questionText && q.questionText.trim().length > 10, `${q.id} soru metni geçerli olmalı.`)
    assert.equal(q.options.length, 5, `${q.id} tam 5 seçeneğe (A-E) sahip olmalı.`)

    const optionIds = q.options.map((o) => o.id).join('')
    assert.equal(optionIds, 'ABCDE', `${q.id} seçenek harfleri A-B-C-D-E sıralı olmalı.`)

    const uniqueTexts = new Set(q.options.map((o) => o.text.trim().toLocaleLowerCase('tr-TR')))
    assert.equal(uniqueTexts.size, 5, `${q.id} seçenekleri birbirinden farklı olmalı.`)

    assert.ok(['A', 'B', 'C', 'D', 'E'].includes(q.correctOptionId), `${q.id} doğru cevabı geçerli bir seçenek olmalı.`)
    assert.ok(q.explanation && q.explanation.trim().length > 10, `${q.id} pedagojik açıklaması bulunmalı.`)

    // İç monolog veya taslak kalıntısı olmamalı
    const forbiddenTokens = ['düzeltelim', 'revised', 'YENİDEN:', 'Şimdi doğru cevap', 'Soruyu değiştireyim']
    for (const token of forbiddenTokens) {
      assert.equal(
        q.explanation.includes(token),
        false,
        `${q.id} açıklamasında taslak kalıntısı ("${token}") bulunmamalı.`
      )
    }
  }
}

assert.equal(totalQuestionCount, 420, '42 testte tam 420 soru bulunmalı.')

// 5. loadQuestionSet Entegrasyon Doğrulaması
const sampleTest = await loadQuestionSet('test-fiiller-1-kolay', 'fiiller')
assert.ok(sampleTest, 'test-fiiller-1-kolay başarıyla yüklenebilmeli.')
assert.equal(sampleTest.source_code, 'bundled_question_test')
assert.ok(sampleTest.content_revision.startsWith('sha256-'))
assert.equal(sampleTest.questions.length, 10)

const sampleLastTest = await loadQuestionSet('test-fiiller-14-zor', 'fiiller')
assert.ok(sampleLastTest, 'test-fiiller-14-zor başarıyla yüklenebilmeli.')
assert.equal(sampleLastTest.questions.length, 10)

console.log('✓ TYT Türkçe Soru Kütüphanesi ve Fiiller 42 Test doğrulandı:')
console.log('  - 1 ders, 15 konu eksiksiz')
console.log('  - Fiiller: 42 test (14 Kolay, 14 Orta, 14 Zor)')
console.log('  - 420 soru: A-E seçenekli, pedagojik açıklamalı, ÖSYM/MEB formatında')
console.log('  - questionLibrary yükleyici ve kimlik katmanı tam uyumlu')
