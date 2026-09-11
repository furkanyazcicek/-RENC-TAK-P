import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import {
  EXPERIENCE_ACTIVITY,
  EXPERIENCE_CONTENT,
  EXPERIENCE_EXAMS,
  EXPERIENCE_MONTHS,
  EXPERIENCE_PROFILE,
  loadExperienceLesson,
  normalizeExperienceQuestion,
} from '../src/pages/experience/experienceData.js'

assert.equal(EXPERIENCE_CONTENT.length, 4, 'Demo tam olarak dört konu içermeli.')
assert.deepEqual(
  EXPERIENCE_CONTENT.map((item) => item.subject),
  ['Türkçe', 'Türkçe', 'Kimya', 'Kimya'],
  'Demo yalnız TYT Türkçe ve TYT Kimya içermeli.'
)
assert.deepEqual(
  EXPERIENCE_CONTENT.map((item) => item.topic),
  ['Sözcükte Anlam', 'Cümlede Anlam', 'Kimya Bilimi', 'Atom ve Periyodik Sistem'],
  'Her dersin ilk iki konusu sabit kalmalı.'
)

for (const item of EXPERIENCE_CONTENT) {
  assert.ok(item.test, `${item.topic} için bir test olmalı.`)
  assert.ok(item.questionCount > 0, `${item.topic} testi soru içermeli.`)
  assert.ok(item.lessonSlug, `${item.topic} için konu demosu olmalı.`)
  const normalized = item.test.questions.map(normalizeExperienceQuestion)
  assert.ok(normalized.every((question) => question.questionText && question.correctOptionId), `${item.topic} soruları çözülebilir olmalı.`)
  const lesson = await loadExperienceLesson(item.id)
  assert.equal(lesson?.slug, item.lessonSlug, `${item.topic} gerçek paketli ders içeriğine bağlanmalı.`)
}

assert.equal(EXPERIENCE_MONTHS.length, 5, 'Örnek öğrenci geçmişi beş aylık olmalı.')
assert.ok(EXPERIENCE_EXAMS.length >= 5, 'Beş aya yayılan deneme geçmişi olmalı.')
assert.equal(EXPERIENCE_PROFILE.school, 'Örnek öğrenci profili', 'Profil sentetik olduğunu açıkça söylemeli.')
assert.ok(EXPERIENCE_ACTIVITY.every((item) => !Number.isNaN(Date.parse(item.date))), 'Etkinlik tarihleri geçerli olmalı.')

const heroSource = await readFile(new URL('../src/components/landing/book/BookHomeHero.jsx', import.meta.url), 'utf8')
const appSource = await readFile(new URL('../src/App.jsx', import.meta.url), 'utf8')
assert.match(heroSource, /to="\/deneyim"[^>]*>Deneyimle/, 'Hero, Deneyimle bağlantısını göstermeli.')
assert.match(appSource, /path="\/deneyim\/\*"/, 'Deneyim rotası oturum açmadan erişilebilir olmalı.')

const demoFlowFiles = [
  'ExperienceRoutes.jsx',
  'ExperienceShell.jsx',
  'ExperienceDashboard.jsx',
  'ExperienceAnalytics.jsx',
  'ExperienceLibraries.jsx',
  'ExperienceLesson.jsx',
  'ExperienceTest.jsx',
]
const demoFlowSource = (await Promise.all(demoFlowFiles.map((file) => (
  readFile(new URL(`../src/pages/experience/${file}`, import.meta.url), 'utf8')
)))).join('\n')
assert.doesNotMatch(demoFlowSource, /supabaseClient|useContentActivity/, 'Demo akışı canlı veri yazma katmanına bağlanmamalı.')

console.log('Public experience checks passed.')
