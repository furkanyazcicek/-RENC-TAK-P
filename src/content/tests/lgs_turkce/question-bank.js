import lgsQuestionAvailability from '../../../generated/lgsQuestionAvailability.js'

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

  return lgsQuestionAvailability.entries
    .filter((entry) => entry.folder === topic.folder)
    .map((entry) => ({
      id: `lgs-turkce-${topic.order}-test-${entry.level.toLowerCase()}-${entry.test}`,
      title: `${topic.label} · ${entry.level} Test ${entry.test}`,
      description: `${entry.question_count} soruluk konu testi`,
      difficulty: entry.level === 'Kolay' ? 'easy' : entry.level === 'Orta' ? 'medium' : 'hard',
      question_count: entry.question_count,
      subject: 'Türkçe',
      topic: topic.label,
      bankTopic: topic,
      level: entry.level,
      testIndex: entry.test,
    }))
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
  const rawQuestions = Array.isArray(rawData)
    ? rawData
    : Array.isArray(rawData?.sorular)
      ? rawData.sorular
      : Array.isArray(rawData?.questions)
        ? rawData.questions
        : []

  if (rawQuestions.length === 0) return null

  const questions = rawQuestions.map((q, questionIndex) => {
    const rawOptions = q.secenekler ?? q.options ?? {}
    const options = Array.isArray(rawOptions)
      ? rawOptions.map((option, optionIndex) => ({
          id: typeof option === 'object' && option !== null
            ? String(option.id ?? option.key ?? String.fromCharCode(65 + optionIndex))
            : String.fromCharCode(65 + optionIndex),
          text: typeof option === 'object' && option !== null
            ? String(option.text ?? option.label ?? option.value ?? '')
            : String(option),
        }))
      : Object.entries(rawOptions).map(([key, value]) => ({ id: key, text: String(value) }))

    return {
      id: `${testId}-soru-${q.soru_no ?? q.questionNumber ?? questionIndex + 1}`,
      question: q.soru_metni ?? q.questionText ?? q.question ?? '',
      options,
      correctOptionId: String(q.dogru_cevap ?? q.correctAnswer ?? q.correctOptionId ?? ''),
      explanation: q.cozum ?? q.explanation ?? '',
      difficulty: levelStr === 'kolay' ? 'easy' : levelStr === 'orta' ? 'medium' : 'hard',
      topic: topic.label,
    }
  })

  return {
    id: testId,
    title: rawData?.test_adi ?? rawData?.title ?? `${topic.label} · ${level} Test ${test}`,
    description: 'Konu testi',
    difficulty: levelStr === 'kolay' ? 'easy' : levelStr === 'orta' ? 'medium' : 'hard',
    subject: 'Türkçe',
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}

export const lgsTurkceQuestionBankTopics = BANK_TOPICS
