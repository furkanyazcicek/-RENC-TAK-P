const BANK_ROOT = '/TYT_Felsefe_Soru_Kutuphanesi'

const BANK_TOPICS = [
  ['1_Felsefeyi_Tanima', 'Felsefeyi Tanıma', 'Felsefenin Konusu'],
  ['2_Felsefe_Ile_Dusunme', 'Felsefe ile Düşünme', 'Felsefi Düşüncenin Özellikleri'],
  ['3_Varlik_Felsefesi', 'Varlık Felsefesi', 'Varlık Felsefesi'],
  ['4_Bilgi_Felsefesi', 'Bilgi Felsefesi', 'Bilgi Felsefesi'],
  ['5_Bilim_Felsefesi', 'Bilim Felsefesi', 'Bilim Felsefesi'],
  ['6_Ahlak_Felsefesi', 'Ahlak Felsefesi', 'Ahlak Felsefesi'],
  ['7_Din_Felsefesi', 'Din Felsefesi', 'Din Felsefesi'],
  ['8_Siyaset_Felsefesi', 'Siyaset Felsefesi', 'Siyaset Felsefesi'],
  ['9_Sanat_Felsefesi', 'Sanat Felsefesi', 'Sanat Felsefesi'],
  ['10_Ilk_Cag_Felsefesi', 'MÖ 6. Yüzyıl - MS 2. Yüzyıl Felsefesi', 'MÖ 6. Yüzyıl - MS 2. Yüzyıl Felsefesi'],
  ['11_Orta_Cag_Felsefesi', 'MS 2. Yüzyıl - MS 15. Yüzyıl Felsefesi', 'MS 2. Yüzyıl - MS 15. Yüzyıl Felsefesi'],
  ['12_Ronesans_Felsefesi', '15. Yüzyıl - 17. Yüzyıl Felsefesi', '15. Yüzyıl - 17. Yüzyıl Felsefesi'],
  ['13_Aydinlanma_Felsefesi', '18. Yüzyıl - 19. Yüzyıl Felsefesi', '18. Yüzyıl - 19. Yüzyıl Felsefesi'],
  ['14_Yirminci_Yuzyil_Felsefesi', '20. Yüzyıl Felsefesi', '20. Yüzyıl Felsefesi'],
].map(([folder, label, libraryTopic], index) => ({
  folder,
  label,
  libraryTopic,
  order: index + 1,
}))

const BUNDLED_PHILOSOPHY_SUBJECT = {
  id: 'bundled-tyt-felsefe',
  exam_type: 'TYT',
  name: 'Felsefe',
  order_index: 10,
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

/** Ham Markdown dosyasını soru çözme ekranının ortak veri biçimine çevirir. */
export function parsePhilosophyQuestionFile(source, { topic, testId } = {}) {
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
      id: `${testId ?? 'tyt-felsefe'}-soru-${testNumber(number)}`,
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

export function withPhilosophyQuestionBankSubjects(subjects) {
  const exists = subjects.some(
    (subject) => subject.exam_type === BUNDLED_PHILOSOPHY_SUBJECT.exam_type
      && subject.name === BUNDLED_PHILOSOPHY_SUBJECT.name
  )
  return exists ? subjects : [...subjects, BUNDLED_PHILOSOPHY_SUBJECT]
}

export function withPhilosophyQuestionBankTopics(subjects, topics) {
  const subject = subjects.find((item) => item.exam_type === 'TYT' && item.name === 'Felsefe')
  if (!subject) return topics

  const nextTopics = [...topics]
  BANK_TOPICS.forEach((topic) => {
    const exists = nextTopics.some(
      (item) => item.subject_id === subject.id && item.name === topic.libraryTopic
    )
    if (exists) return
    nextTopics.push({
      id: `bundled-philosophy-topic-${topic.order}`,
      subject_id: subject.id,
      name: topic.libraryTopic,
      order_index: topic.order,
      is_bundled: true,
    })
  })

  return nextTopics
}

export function philosophyQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'TYT' || subjectName !== 'Felsefe') return []
  const topic = BANK_TOPICS.find((item) => item.libraryTopic === topicName)
  if (!topic) return []

  return Array.from({ length: 20 }, (_, index) => {
    const test = index + 1
    const padded = testNumber(test)
    return {
      id: `tyt-felsefe-${topic.order}-test-${padded}`,
      title: `${topic.label} · Test ${padded}`,
      description: '10 soruluk konu testi',
      difficulty: 'medium',
      question_count: 10,
      subject: 'Felsefe',
      topic: topic.label,
      bankTopic: topic,
      test,
    }
  })
}

export async function loadPhilosophyQuestionSet(testId) {
  const match = /^tyt-felsefe-(\d{1,2})-test-(\d{2})$/.exec(testId)
  if (!match) return null

  const topic = BANK_TOPICS.find((item) => item.order === Number(match[1]))
  const test = Number(match[2])
  if (!topic || test < 1 || test > 20) return null

  const response = await fetch(`${BANK_ROOT}/${topic.folder}/Test_${testNumber(test)}.md`)
  if (!response.ok) return null
  const questions = parsePhilosophyQuestionFile(await response.text(), {
    topic: topic.label,
    testId,
  })

  return {
    id: testId,
    title: `${topic.label} · Test ${testNumber(test)}`,
    description: '10 soruluk konu testi',
    difficulty: 'medium',
    subject: 'Felsefe',
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}

export const philosophyQuestionBankTopics = BANK_TOPICS
