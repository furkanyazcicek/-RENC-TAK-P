import turkceSozcukteAnlamTests from '../../content/tests/turkce/sozcukte-anlam.js'
import turkceCumledeAnlamTests from '../../content/tests/turkce/cumlede-anlam.js'
import kimyaBilimiTests from '../../content/tests/kimya/kimya-bilimi.js'
import atomVePeriyodikSistemTests from '../../content/tests/kimya/atom-ve-periyodik-sistem.js'

export const EXPERIENCE_PROFILE = Object.freeze({
  fullName: 'Deniz Kaya',
  initials: 'DK',
  grade: '12. sınıf',
  exam: 'TYT 2027',
  school: 'Örnek öğrenci profili',
})

export const EXPERIENCE_MONTHS = Object.freeze([
  { month: 'Mayıs', solved: 428, accuracy: 61, studyMinutes: 1180, aiSolves: 8, exams: 1 },
  { month: 'Haziran', solved: 512, accuracy: 65, studyMinutes: 1375, aiSolves: 12, exams: 1 },
  { month: 'Temmuz', solved: 604, accuracy: 68, studyMinutes: 1540, aiSolves: 16, exams: 1 },
  { month: 'Ağustos', solved: 731, accuracy: 72, studyMinutes: 1815, aiSolves: 21, exams: 2 },
  { month: 'Eylül', solved: 389, accuracy: 76, studyMinutes: 965, aiSolves: 11, exams: 1 },
])

export const EXPERIENCE_SUBJECTS = Object.freeze([
  { subject: 'Türkçe', solved: 612, pct: 78, accuracy: 78 },
  { subject: 'Matematik', solved: 744, pct: 68, accuracy: 68 },
  { subject: 'Kimya', solved: 436, pct: 74, accuracy: 74 },
  { subject: 'Fizik', solved: 352, pct: 64, accuracy: 64 },
  { subject: 'Biyoloji', solved: 318, pct: 71, accuracy: 71 },
  { subject: 'Tarih', solved: 202, pct: 81, accuracy: 81 },
])

export const EXPERIENCE_EXAMS = Object.freeze([
  {
    id: 'demo-exam-6', date: '2026-09-07', examType: 'TYT', examName: 'Eylül Genel Denemesi', totalNet: 72.5,
    subjects: [
      { subject: 'Türkçe', net: 30.5, correct: 33, incorrect: 10, empty: 0 },
      { subject: 'Matematik', net: 19.25, correct: 23, incorrect: 15, empty: 2 },
      { subject: 'Sosyal', net: 12.75, correct: 14, incorrect: 5, empty: 1 },
      { subject: 'Fen', net: 10, correct: 12, incorrect: 8, empty: 0 },
    ],
  },
  {
    id: 'demo-exam-5', date: '2026-08-24', examType: 'TYT', examName: 'Ağustos Tarama 2', totalNet: 69.25,
    subjects: [
      { subject: 'Türkçe', net: 29.75, correct: 32, incorrect: 9, empty: 2 },
      { subject: 'Matematik', net: 18, correct: 22, incorrect: 16, empty: 2 },
      { subject: 'Sosyal', net: 12, correct: 14, incorrect: 8, empty: 0 },
      { subject: 'Fen', net: 9.5, correct: 11, incorrect: 6, empty: 3 },
    ],
  },
  {
    id: 'demo-exam-4', date: '2026-08-03', examType: 'TYT', examName: 'Ağustos Tarama 1', totalNet: 66.75,
    subjects: [
      { subject: 'Türkçe', net: 28.5, correct: 31, incorrect: 10, empty: 1 },
      { subject: 'Matematik', net: 17.25, correct: 21, incorrect: 15, empty: 4 },
      { subject: 'Sosyal', net: 11.5, correct: 13, incorrect: 6, empty: 1 },
      { subject: 'Fen', net: 9.5, correct: 11, incorrect: 6, empty: 3 },
    ],
  },
  {
    id: 'demo-exam-3', date: '2026-07-13', examType: 'TYT', examName: 'Temmuz Gelişim Denemesi', totalNet: 63.5,
    subjects: [
      { subject: 'Türkçe', net: 27.25, correct: 30, incorrect: 11, empty: 1 },
      { subject: 'Matematik', net: 15.75, correct: 20, incorrect: 17, empty: 3 },
      { subject: 'Sosyal', net: 11.25, correct: 13, incorrect: 7, empty: 0 },
      { subject: 'Fen', net: 9.25, correct: 11, incorrect: 7, empty: 2 },
    ],
  },
  {
    id: 'demo-exam-2', date: '2026-06-15', examType: 'TYT', examName: 'Haziran Genel Denemesi', totalNet: 58.75,
    subjects: [
      { subject: 'Türkçe', net: 25.5, correct: 28, incorrect: 10, empty: 4 },
      { subject: 'Matematik', net: 14, correct: 18, incorrect: 16, empty: 6 },
      { subject: 'Sosyal', net: 10.25, correct: 12, incorrect: 7, empty: 1 },
      { subject: 'Fen', net: 9, correct: 11, incorrect: 8, empty: 1 },
    ],
  },
  {
    id: 'demo-exam-1', date: '2026-05-18', examType: 'TYT', examName: 'Başlangıç Denemesi', totalNet: 53.25,
    subjects: [
      { subject: 'Türkçe', net: 23.25, correct: 26, incorrect: 11, empty: 5 },
      { subject: 'Matematik', net: 11.75, correct: 16, incorrect: 17, empty: 7 },
      { subject: 'Sosyal', net: 10, correct: 12, incorrect: 8, empty: 0 },
      { subject: 'Fen', net: 8.25, correct: 10, incorrect: 7, empty: 3 },
    ],
  },
])

export const EXPERIENCE_PROBLEMS = Object.freeze([
  { id: 'p-1', subject: 'Matematik', topic: 'Problemler', note: 'Oran kurmadan işleme geçiyor.', attempts: 4, status: 'Bugün tekrar' },
  { id: 'p-2', subject: 'Kimya', topic: 'Atom ve Periyodik Sistem', note: 'İyon yükünde elektron sayısını ters yorumluyor.', attempts: 3, status: 'Koç planında' },
  { id: 'p-3', subject: 'Türkçe', topic: 'Cümlede Anlam', note: 'Amaç–neden ilişkisini yakın şıklarda karıştırıyor.', attempts: 3, status: 'Yarın tekrar' },
  { id: 'p-4', subject: 'Fizik', topic: 'Hareket ve Kuvvet', note: 'Grafiğin eğimini hız yerine konum sanıyor.', attempts: 2, status: 'Çözüm izlendi' },
  { id: 'p-5', subject: 'Biyoloji', topic: 'Hücre', note: 'Aktif ve pasif taşımada ATP ölçütünü atlıyor.', attempts: 2, status: 'Pekiştirilecek' },
])

export const EXPERIENCE_AI_SOLVES = Object.freeze([
  { id: 'ai-1', subject: 'Kimya', topic: 'Periyodik özellikler', date: '10 Eylül', result: 'Çözüm yolu tamamlandı', duration: '6 dk' },
  { id: 'ai-2', subject: 'Matematik', topic: 'Yaş problemleri', date: '9 Eylül', result: 'İlk hata bulundu', duration: '9 dk' },
  { id: 'ai-3', subject: 'Türkçe', topic: 'Cümlede anlam', date: '8 Eylül', result: 'İki seçenek karşılaştırıldı', duration: '4 dk' },
  { id: 'ai-4', subject: 'Fizik', topic: 'Hız–zaman grafiği', date: '6 Eylül', result: 'Grafik yeniden çizildi', duration: '8 dk' },
])

const activityMinutes = [35, 0, 48, 62, 26, 74, 0, 42, 55, 68, 31, 0, 83, 46, 52, 37, 71, 0, 29, 64, 88, 43, 56, 0, 77, 34, 61, 49]
export const EXPERIENCE_ACTIVITY = Object.freeze(activityMinutes.map((minutes, index) => {
  const dayNumber = index + 15
  const inAugust = dayNumber <= 31
  const day = inAugust ? dayNumber : dayNumber - 31
  const month = inAugust ? '08' : '09'
  const monthLabel = inAugust ? 'Ağustos' : 'Eylül'
  return {
    date: `2026-${month}-${String(day).padStart(2, '0')}`,
    label: `${day} ${monthLabel}`,
    minutes,
    solved: minutes ? Math.round(minutes * 0.72) : 0,
  }
}))

const rawContent = [
  {
    id: 'turkce-sozcukte-anlam', subject: 'Türkçe', subjectCode: 'TYT Türkçe', topic: 'Sözcükte Anlam',
    lessonSlug: 'turkce-sozcukte-anlam', lessonTitle: 'Sözcükte Anlam: Anlamı Bağlamdan Kurmak',
    lessonMinutes: 44, test: turkceSozcukteAnlamTests[0], tone: 'peach',
  },
  {
    id: 'turkce-cumlede-anlam', subject: 'Türkçe', subjectCode: 'TYT Türkçe', topic: 'Cümlede Anlam',
    lessonSlug: 'turkce-cumlede-anlam', lessonTitle: 'Cümlede Anlam: Yargı, Tutum ve İlişki',
    lessonMinutes: 48, test: turkceCumledeAnlamTests[0], tone: 'peach',
  },
  {
    id: 'kimya-bilimi', subject: 'Kimya', subjectCode: 'TYT Kimya', topic: 'Kimya Bilimi',
    lessonSlug: 'kimya-bilimi', lessonTitle: 'Kimya Bilimi: Maddeden Kanıta',
    lessonMinutes: 58, test: kimyaBilimiTests[0], tone: 'aqua',
  },
  {
    id: 'atom-ve-periyodik-sistem', subject: 'Kimya', subjectCode: 'TYT Kimya', topic: 'Atom ve Periyodik Sistem',
    lessonSlug: 'atom-ve-periyodik-sistem', lessonTitle: 'Atom ve Periyodik Sistem: Kimlikten Düzene',
    lessonMinutes: 72, test: atomVePeriyodikSistemTests[0], tone: 'aqua',
  },
]

export const EXPERIENCE_CONTENT = Object.freeze(rawContent.map((item) => Object.freeze({
  ...item,
  test: Object.freeze(item.test),
  questionCount: item.test?.questions?.length ?? 0,
})))

export function experienceContentById(id) {
  return EXPERIENCE_CONTENT.find((item) => item.id === id) ?? null
}

export async function loadExperienceLesson(id) {
  const item = experienceContentById(id)
  if (!item) return null

  if (item.subject === 'Türkçe') {
    const { TURKISH_LESSONS } = await import('../../content/lessons/turkce/catalog.js')
    return TURKISH_LESSONS.find((lesson) => lesson.slug === item.lessonSlug) ?? null
  }

  const lessonModule = item.id === 'kimya-bilimi'
    ? await import('../../content/lessons/kimya/kimya-bilimi.js')
    : await import('../../content/lessons/kimya/atom-ve-periyodik-sistem.js')
  return lessonModule.default ?? null
}

export function normalizeExperienceQuestion(question) {
  return {
    ...question,
    questionText: question.questionText ?? question.question ?? '',
    correctOptionId: question.correctOptionId ?? question.correctAnswer ?? '',
    explanation: question.explanation ?? question.solution ?? '',
  }
}
