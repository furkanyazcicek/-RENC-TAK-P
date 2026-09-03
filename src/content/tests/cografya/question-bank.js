const BANK_ROOT = '/TYT_Cografya_Soru_Kutuphanesi'

const BANK_TOPICS = [
  ['1_Doga_ve_Insan', 'Doğa ve İnsan', 'Doğa ve İnsan'],
  ['2_Dunyanin_Sekli_ve_Hareketleri', 'Dünyanın Şekli ve Hareketleri', 'Dünyanın Şekli ve Hareketleri'],
  ['3_Cografi_Konum', 'Coğrafi Konum', 'Coğrafi Konum'],
  ['4_Harita_Bilgisi', 'Harita Bilgisi', 'Harita Bilgisi'],
  ['5_Atmosfer_ve_Iklim', 'Atmosfer ve İklim', 'Atmosfer ve İklim'],
  ['6_Yerin_Sekillenmesi', 'Yerin Şekillenmesi', 'Yerin Şekillenmesi']
].map(([folder, label, libraryTopic], index) => ({
  folder,
  label,
  libraryTopic,
  order: index + 1,
}))

const BUNDLED_SUBJECT = {
  id: 'bundled-tyt-cografya',
  exam_type: 'TYT',
  name: 'Coğrafya',
  order_index: 20,
}

function testNumber(value) {
  return String(value).padStart(2, '0')
}

function cleanMarkdown(value) {
  return String(value ?? '')
    .replace(/\*\*/g, '')
    .replace(/^---+$/gm, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function answerFrom(content) {
  return content.match(/\*\*Cevap:\s*([A-E])\s*\*\*/i)?.[1]
    ?? content.match(/\*\*Cevap:\*\*\s*([A-E])/i)?.[1]
    ?? ''
}

export function parseQuestionFile(source, { topic, testId } = {}) {
  const chunks = String(source ?? '').replace(/\r\n/g, '\n').split(/\*\*Soru\s+(\d+)\*\*/g)
  const questions = []

  for (let index = 1; index < chunks.length; index += 2) {
    const number = Number(chunks[index])
    const content = chunks[index + 1] ?? ''
    const solutionIndex = content.indexOf('**Çözüm:**')
    const questionBlock = solutionIndex >= 0 ? content.slice(0, solutionIndex) : content
    const solutionBlock = solutionIndex >= 0 ? content.slice(solutionIndex + '**Çözüm:**'.length) : ''
    const firstOptionIndex = questionBlock.search(/(?:^|\s)A\)\s*/m)
    const question = cleanMarkdown(firstOptionIndex >= 0 ? questionBlock.slice(0, firstOptionIndex) : questionBlock)
    const optionBlock = firstOptionIndex >= 0 ? questionBlock.slice(firstOptionIndex).trim() : ''
    const optionMatches = [...optionBlock.matchAll(/(?:^|\s)([A-E])\)\s*([\s\S]*?)(?=\s+[A-E]\)\s*|$)/g)]
    const options = optionMatches.map((match) => ({ id: match[1], text: cleanMarkdown(match[2]) }))
    const correctOptionId = answerFrom(content)
    const explanation = cleanMarkdown(
      solutionBlock
        .replace(/\*\*Cevap:\s*[A-E]\s*\*\*/gi, '')
        .replace(/\*\*Cevap:\*\*\s*[A-E]/gi, '')
    )

    questions.push({
      id: `${testId ?? 'tyt-cografya'}-soru-${testNumber(number)}`,
      question,
      options,
      correctOptionId,
      explanation,
      difficulty: 'medium',
      topic,
    })
  }

  return questions
}

export function withCografyaQuestionBankSubjects(subjects) {
  const exists = subjects.some(
    (subject) => subject.exam_type === BUNDLED_SUBJECT.exam_type
      && subject.name === BUNDLED_SUBJECT.name
  )
  return exists ? subjects : [...subjects, BUNDLED_SUBJECT]
}

export function withCografyaQuestionBankTopics(subjects, topics) {
  const subject = subjects.find((item) => item.exam_type === 'TYT' && item.name === 'Coğrafya')
  if (!subject) return topics

  const nextTopics = [...topics]
  BANK_TOPICS.forEach((topic) => {
    const exists = nextTopics.some(
      (item) => item.subject_id === subject.id && item.name === topic.libraryTopic
    )
    if (exists) return
    nextTopics.push({
      id: `bundled-cografya-topic-${topic.order}`,
      subject_id: subject.id,
      name: topic.libraryTopic,
      order_index: topic.order,
      is_bundled: true,
    })
  })

  return nextTopics
}

export function cografyaQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'TYT' || subjectName !== 'Coğrafya') return []
  const topic = BANK_TOPICS.find((item) => item.libraryTopic === topicName)
  if (!topic) return []

  return Array.from({ length: 20 }, (_, index) => {
    const test = index + 1
    const padded = testNumber(test)
    return {
      id: `tyt-cografya-${topic.order}-test-${padded}`,
      title: `${topic.label} · Test ${padded}`,
      description: '10 soruluk konu testi',
      difficulty: 'medium',
      question_count: 10,
      subject: 'Coğrafya',
      topic: topic.label,
      bankTopic: topic,
      test,
    }
  })
}

export async function loadCografyaQuestionSet(testId) {
  const match = /^tyt-cografya-(\d{1,2})-test-(\d{2})$/.exec(testId)
  if (!match) return null

  const topic = BANK_TOPICS.find((item) => item.order === Number(match[1]))
  const test = Number(match[2])
  if (!topic || test < 1 || test > 20) return null

  const response = await fetch(`${BANK_ROOT}/${topic.folder}/Test_${testNumber(test)}.md`)
  if (!response.ok) return null
  const questions = parseQuestionFile(await response.text(), {
    topic: topic.label,
    testId,
  })

  return {
    id: testId,
    title: `${topic.label} · Test ${testNumber(test)}`,
    description: '10 soruluk konu testi',
    difficulty: 'medium',
    subject: 'Coğrafya',
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}

export const cografyaQuestionBankTopics = BANK_TOPICS
