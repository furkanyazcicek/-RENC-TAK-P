const BANK_ROOT = '/TYT_Din_Kulturu_Soru_Kutuphanesi'

const BANK_TOPICS = [
  ['1_Allah_Insan_Iliskisi', 'Allah-İnsan İlişkisi', 'Allah-İnsan İlişkisi'],
  ['2_Islamda_Inanc_Esaslari', 'İslam\'da İnanç Esasları', 'İslam\'da İnanç Esasları'],
  ['3_Islamda_Ibadetler', 'İslam\'da İbadetler', 'İslam\'da İbadetler'],
  ['4_Islamda_Ahlak_Ilkeleri', 'İslam\'da Ahlak İlkeleri', 'İslam\'da Ahlak İlkeleri'],
  ['5_Kurana_Gore_Hz_Muhammed', 'Kur\'an\'a Göre Hz. Muhammed', 'Kur\'an\'a Göre Hz. Muhammed'],
  ['6_Islamda_Varlik_ve_Bilgi', 'İslam\'da Varlık ve Bilgi', 'İslam\'da Varlık ve Bilgi'],
  ['7_Allahi_Tanimak', 'Allah\'ı Tanımak', 'Allah\'ı Tanımak'],
  ['8_Islamin_Evrensel_Mesajlari', 'İslam\'ın Evrensel Mesajları', 'İslam\'ın Evrensel Mesajları'],
  ['9_Din_Cevre_ve_Teknoloji', 'Din, Çevre ve Teknoloji', 'Din, Çevre ve Teknoloji'],
  ['10_Islam_Dusuncesinde_Itikadi_Siyasi_ve_Fikhi_Yorumlar', 'İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar', 'İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar'],
  ['11_Kader_Irade_ve_Sorumluluk', 'Kader, İrade ve Sorumluluk', 'Kader, İrade ve Sorumluluk'],
  ['12_Din_Felsefe_Bilim_ve_Sanat', 'Din, Felsefe, Bilim ve Sanat', 'Din, Felsefe, Bilim ve Sanat'],
  ['13_Islam_Medeniyeti_ve_Gonul_Cografyamiz', 'İslam Medeniyeti ve Gönül Coğrafyamız', 'İslam Medeniyeti ve Gönül Coğrafyamız'],
  ['14_Inancla_Ilgili_Meseleler', 'İnançla İlgili Meseleler', 'İnançla İlgili Meseleler'],
  ['15_Yahudilik_ve_Hristiyanlik', 'Yahudilik ve Hristiyanlık', 'Yahudilik ve Hristiyanlık'],
  ['16_Kurani_Kerim', 'Kur’an-ı Kerim', 'Kur’an-ı Kerim'],
  ['17_Din_ve_Aile', 'Din ve Aile', 'Din ve Aile'],
  ['18_Guncel_Dini_Meseleler', 'Güncel Dinî Meseleler', 'Güncel Dinî Meseleler'],
  ['19_Islam_Dusuncesinde_Tasavvufi_Yorumlar', 'İslam Düşüncesinde Tasavvufi Yorumlar', 'İslam Düşüncesinde Tasavvufi Yorumlar'],
  ['20_Hint_ve_Cin_Dinleri', 'Hint ve Çin Dinleri', 'Hint ve Çin Dinleri']
].map(([folder, label, libraryTopic], index) => ({
  folder,
  label,
  libraryTopic,
  order: index + 1,
}))

const BUNDLED_SUBJECT = {
  id: 'bundled-tyt-din-kulturu',
  exam_type: 'TYT',
  name: 'Din Kültürü ve Ahlak Bilgisi',
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
      id: `${testId ?? 'tyt-din-kulturu'}-soru-${testNumber(number)}`,
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

export function withDinKulturuQuestionBankSubjects(subjects) {
  const exists = subjects.some(
    (subject) => subject.exam_type === BUNDLED_SUBJECT.exam_type
      && subject.name === BUNDLED_SUBJECT.name
  )
  return exists ? subjects : [...subjects, BUNDLED_SUBJECT]
}

export function withDinKulturuQuestionBankTopics(subjects, topics) {
  const subject = subjects.find((item) => item.exam_type === 'TYT' && item.name === 'Din Kültürü ve Ahlak Bilgisi')
  if (!subject) return topics

  const nextTopics = [...topics]
  BANK_TOPICS.forEach((topic) => {
    const exists = nextTopics.some(
      (item) => item.subject_id === subject.id && item.name === topic.libraryTopic
    )
    if (exists) return
    nextTopics.push({
      id: `bundled-din-kulturu-topic-${topic.order}`,
      subject_id: subject.id,
      name: topic.libraryTopic,
      order_index: topic.order,
      is_bundled: true,
    })
  })

  return nextTopics
}

export function dinKulturuQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'TYT' || subjectName !== 'Din Kültürü ve Ahlak Bilgisi') return []
  const topic = BANK_TOPICS.find((item) => item.libraryTopic === topicName)
  if (!topic) return []

  return Array.from({ length: 20 }, (_, index) => {
    const test = index + 1
    const padded = testNumber(test)
    return {
      id: `tyt-din-kulturu-${topic.order}-test-${padded}`,
      title: `${topic.label} · Test ${padded}`,
      description: '10 soruluk konu testi',
      difficulty: 'medium',
      question_count: 10,
      subject: 'Din Kültürü ve Ahlak Bilgisi',
      topic: topic.label,
      bankTopic: topic,
      test,
    }
  })
}

export async function loadDinKulturuQuestionSet(testId) {
  const match = /^tyt-din-kulturu-(\d{1,2})-test-(\d{2})$/.exec(testId)
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
    subject: 'Din Kültürü ve Ahlak Bilgisi',
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}

export const dinKulturuQuestionBankTopics = BANK_TOPICS
