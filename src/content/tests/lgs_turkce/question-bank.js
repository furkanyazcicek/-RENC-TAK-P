const BANK_ROOT = '/LGS_Turkce_Testleri'

const BANK_TOPICS = [
  ['Cumle_Turleri', 'Cümle Türleri', 'Cümle Türleri'],
  ['Cumlede_Anlam', 'Cümlede Anlam', 'Cümlede Anlam'],
  ['Cumlenin_Ogeleri', 'Cümlenin Öğeleri', 'Cümlenin Öğeleri'],
  ['Fiilde_Cati', 'Fiilde Çatı', 'Fiilde Çatı'],
  ['Fiilimsiler', 'Fiilimsiler', 'Fiilimsiler'],
  ['Gorsel_Okuma', 'Görsel Okuma', 'Görsel Okuma'],
  ['Metin_Turleri', 'Metin Türleri', 'Metin Türleri'],
  ['Noktalama_Isaretleri', 'Noktalama İşaretleri', 'Noktalama İşaretleri'],
  ['Paragrafta_Anlam', 'Paragrafta Anlam ve Yapı', 'Paragrafta Anlam'],
  ['Soz_Sanatlari', 'Söz Sanatları', 'Söz Sanatları'],
  ['Sozcukte_Anlam', 'Sözcükte Anlam', 'Sözcükte Anlam'],
  ['Yazim_Kurallari', 'Yazım Kuralları', 'Yazım Kuralları']
].map(([folder, label, libraryTopic], index) => ({
  folder,
  label,
  libraryTopic,
  order: index + 1,
}))

const BUNDLED_SUBJECT = {
  id: 'bundled-lgs-turkce',
  exam_type: 'LGS',
  name: 'Türkçe',
  order_index: 20,
}

export function withLgsTurkceQuestionBankSubjects(subjects) {
  const exists = subjects.some(
    (subject) => subject.exam_type === BUNDLED_SUBJECT.exam_type
      && subject.name === BUNDLED_SUBJECT.name
  )
  return exists ? subjects : [...subjects, BUNDLED_SUBJECT]
}

export function withLgsTurkceQuestionBankTopics(subjects, topics) {
  const subject = subjects.find((item) => item.exam_type === 'LGS' && item.name === 'Türkçe')
  if (!subject) return topics

  const nextTopics = [...topics]
  BANK_TOPICS.forEach((topic) => {
    const exists = nextTopics.some(
      (item) => item.subject_id === subject.id && item.name === topic.libraryTopic
    )
    if (exists) return
    nextTopics.push({
      id: `bundled-turkce-topic-${topic.order}`,
      subject_id: subject.id,
      name: topic.libraryTopic,
      order_index: topic.order,
      is_bundled: true,
    })
  })

  return nextTopics
}

export function lgsTurkceQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'LGS' || subjectName !== 'Türkçe') return []
  const topic = BANK_TOPICS.find((item) => item.libraryTopic === topicName)
  if (!topic) return []

  const levels = ['Kolay', 'Orta', 'Zor']
  const tests = []
  
  for (const level of levels) {
    let testCount = level === 'Kolay' ? 10 : 1;
    // Fiilde Çatı'nın 10 Orta testi var
    if (topic.folder === 'Fiilde_Cati' && level === 'Orta') {
      testCount = 10;
    }
    
    for (let i = 1; i <= testCount; i++) {
      tests.push({
        id: `lgs-turkce-${topic.order}-test-${level.toLowerCase()}-${i}`,
        title: `${topic.label} · ${level} Test ${i}`,
        description: '10 soruluk konu testi',
        difficulty: level.toLowerCase() === 'kolay' ? 'easy' : level.toLowerCase() === 'orta' ? 'medium' : 'hard',
        question_count: 10,
        subject: 'Türkçe',
        topic: topic.label,
        bankTopic: topic,
        level,
        testIndex: i,
      })
    }
  }
  return tests
}

export async function loadLgsTurkceQuestionSet(testId) {
  const match = /^lgs-turkce-(\d{1,2})-test-(kolay|orta|zor)-(\d{1,2})$/.exec(testId)
  if (!match) return null

  const topic = BANK_TOPICS.find((item) => item.order === Number(match[1]))
  const levelStr = match[2]
  const level = levelStr.charAt(0).toUpperCase() + levelStr.slice(1)
  const test = Number(match[3])
  
  if (!topic) return null

  const response = await fetch(`${BANK_ROOT}/${topic.folder}/${level}_Test_${test}.json`)
  if (!response.ok) return null
  
  const rawData = await response.json()
  const questions = rawData.sorular.map((q) => ({
    id: `${testId}-soru-${q.soru_no}`,
    question: q.soru_metni,
    options: Object.entries(q.secenekler).map(([key, val]) => ({ id: key, text: val })),
    correctOptionId: q.dogru_cevap,
    explanation: q.cozum || '',
    difficulty: levelStr === 'kolay' ? 'easy' : levelStr === 'orta' ? 'medium' : 'hard',
    topic: topic.label,
  }))

  return {
    id: testId,
    title: rawData.test_adi || `${topic.label} · ${level} Test ${test}`,
    description: 'Konu testi',
    difficulty: levelStr === 'kolay' ? 'easy' : levelStr === 'orta' ? 'medium' : 'hard',
    subject: 'Türkçe',
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}

export const lgsTurkceQuestionBankTopics = BANK_TOPICS
