import { TYT_HISTORY_LESSONS } from '../../lessons/tarih/tyt-tarih-kutuphanesi.js'

const LETTERS = ['A', 'B', 'C', 'D', 'E']

const TOPICS = [
  ['Tarih ve Zaman', 'Tarih ve Zaman'],
  ['İnsanlığın İlk Dönemleri', 'İnsanlığın İlk Dönemleri'],
  ['Ortaçağda Dünya', 'Ortaçağda Dünya'],
  ['İlk ve Orta Çağlarda Türk Dünyası', 'İlk ve Orta Çağlarda Türk Dünyası'],
  ['İslam Medeniyeti ve Türkler', 'İslam Medeniyeti ve Türkler'],
  ['Türk-İslam Devletleri', 'Türk-İslam Devletleri'],
  ['Beylikten Devlete Osmanlı', 'Beylikten Devlete Osmanlı'],
  ['Dünya Gücü Osmanlı', 'Dünya Gücü Osmanlı'],
  ['Arayış Yılları', 'Arayış Yılları'],
  ['Devrimler Çağında Değişen Devlet-Toplum İlişkileri', 'Devrimler Çağında Değişen Devlet-Toplum İlişkileri'],
].map(([name, libraryTopic], index) => ({ name, libraryTopic, order: index + 1 }))

const BUNDLED_HISTORY_SUBJECT = {
  id: 'bundled-tyt-tarih',
  exam_type: 'TYT',
  name: 'Tarih',
  order_index: 8,
}

const SOURCE_REFERENCES = [
  {
    id: 'meb-tarih-programi-2025',
    title: 'MEB Tarih Dersi Öğretim Programı',
    url: 'https://mufredat.meb.gov.tr/Dosyalar/202582695425908-tarih.pdf',
    role: 'Kapsam, tarihsel düşünme ve kanıta dayalı çıkarım becerileri',
  },
  {
    id: 'osym-tyt-2025',
    title: '2025-YKS TYT Temel Soru Kitapçığı',
    url: 'https://www.osym.gov.tr/2025yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari',
    role: 'Yalnız ölçme dili ve çıkarım düzeyi; soru metni kopyalanmamıştır',
  },
]

function clean(value) {
  return String(value ?? '')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function allBlocks(lesson) {
  return lesson.document.sections.flatMap((section) => section.blocks ?? [])
}

function blockOf(lesson, type, predicate = () => true) {
  return allBlocks(lesson).find((block) => block.type === type && predicate(block))
}

function blocksOf(lesson, type) {
  return allBlocks(lesson).filter((block) => block.type === type)
}

function unique(values) {
  const seen = new Set()
  return values.map(clean).filter((value) => {
    const key = value.toLocaleLowerCase('tr-TR')
    if (!value || seen.has(key)) return false
    seen.add(key)
    return true
  })
}

function rotate(values, offset) {
  if (!values.length) return []
  const start = ((offset % values.length) + values.length) % values.length
  return [...values.slice(start), ...values.slice(0, start)]
}

function optionSet(correct, distractors, correctIndex) {
  const pool = unique([
    ...distractors,
    'Bu konuda verilen bilgilerden böyle bir sonuca ulaşılamaz.',
    'Gelişme yalnız askerî koşullarla açıklanabilir.',
    'Bu durum bütün dönemler için değişmeden geçerli olmuştur.',
    'Olayın sonuçları ortaya çıktığı anda bütünüyle sona ermiştir.',
    'Verilen gelişme merkezî otoriteyi hiçbir biçimde etkilememiştir.',
  ]).filter((value) => value !== clean(correct))

  const chosen = pool.slice(0, 4)
  const arranged = [...chosen]
  arranged.splice(correctIndex, 0, clean(correct))
  return arranged.slice(0, 5).map((text, index) => ({ id: LETTERS[index], text }))
}

function makeQuestion({ id, question, correct, distractors, correctIndex, explanation, difficulty, skill }) {
  return {
    id,
    question: clean(question),
    options: optionSet(correct, distractors, correctIndex),
    correctOptionId: LETTERS[correctIndex],
    explanation: clean(explanation),
    difficulty,
    skill,
  }
}

function globalPool(type, selector) {
  return TYT_HISTORY_LESSONS.flatMap((lesson) => blocksOf(lesson, type).flatMap((block) => selector(block) ?? []))
}

const CONCEPT_TERMS = globalPool('concept', (block) => [block.term])
const FIGURES = globalPool('historical_figures', (block) => block.figures ?? [])
const TURNING_POINTS = globalPool('period_summary', (block) => block.turning_points ?? [])
const TRAP_RIGHTS = globalPool('trap', (block) => [block.right])
const TIMELINE_TITLES = globalPool('timeline', (block) => block.id?.endsWith('-timeline') ? (block.items ?? []).map((item) => item.title) : [])

function permutationsForFour() {
  return [
    [0, 1, 2, 3],
    [0, 2, 1, 3],
    [1, 0, 3, 2],
    [2, 0, 1, 3],
    [3, 1, 0, 2],
  ]
}

function chronologyQuestion(lesson, id, correctIndex) {
  const timeline = blockOf(lesson, 'timeline', (block) => (block.items?.length ?? 0) >= 4)
  const items = timeline.items.slice(0, 4)
  const displayOrder = [2, 0, 3, 1]
  const displayed = displayOrder.map((itemIndex, index) => `${['I', 'II', 'III', 'IV'][index]}. ${clean(items[itemIndex].title)} — ${clean(items[itemIndex].body)}`)
  const chronological = items.map((_, originalIndex) => ['I', 'II', 'III', 'IV'][displayOrder.indexOf(originalIndex)]).join(' - ')
  const sequences = permutationsForFour()
    .map((order) => order.map((index) => ['I', 'II', 'III', 'IV'][index]).join(' - '))
    .filter((sequence) => sequence !== chronological)

  return makeQuestion({
    id,
    question: `${displayed.join('\n')}\n\nBu gelişmelerin kronolojik ya da süreç içindeki doğru sıralaması aşağıdakilerden hangisidir?`,
    correct: chronological,
    distractors: sequences,
    correctIndex,
    explanation: `${items.map((item) => clean(item.title)).join(' → ')} sırası izlenir. ${clean(timeline.takeaway)}`,
    difficulty: 'medium',
    skill: 'kronoloji',
  })
}

function lessonQuestions(lesson, testIndex) {
  const blocks = allBlocks(lesson)
  const concept = blocks.find((block) => block.type === 'concept')
  const checkpoint = blocks.find((block) => block.type === 'checkpoint')
  const chain = blocks.find((block) => block.type === 'cause_effect')
  const figuresBlock = blocks.find((block) => block.type === 'historical_figures' && block.figures?.length)
  const period = blocks.find((block) => block.type === 'period_summary')
  const trap = blocks.find((block) => block.type === 'trap')
  const compare = blocks.find((block) => block.type === 'compare' && block.rows?.length)
  const why = blocks.find((block) => block.type === 'why' && block.question && !block.id?.includes('curriculum-method'))
  const summary = blocks.find((block) => block.type === 'summary' && block.points?.length)
  const seed = testIndex * 10
  const answerIndex = (offset) => (seed + offset) % 5
  const questionId = (offset) => `tyt-tarih-${lesson.slug}-soru-${String(offset + 1).padStart(2, '0')}`

  const conceptDistractors = rotate(CONCEPT_TERMS, seed).filter((term) => clean(term) !== clean(concept.term))
  const figure = figuresBlock.figures[testIndex % figuresBlock.figures.length]
  const figureDistractors = rotate(FIGURES.map((item) => item.name), seed + 3).filter((name) => clean(name) !== clean(figure.name))
  const periodPoint = period.turning_points[testIndex % period.turning_points.length]
  const periodDistractors = rotate(TURNING_POINTS, seed + 5).filter((point) => clean(point) !== clean(periodPoint) && !(period.turning_points ?? []).includes(point))
  const stepBodies = chain.steps.map((step) => step.body)
  const compareRow = compare?.rows[testIndex % compare.rows.length]
  const timeline = blockOf(lesson, 'timeline', (block) => block.id?.endsWith('-timeline'))
  const timelineItem = timeline.items[(testIndex + 2) % timeline.items.length]
  const timelineDistractors = rotate(TIMELINE_TITLES, seed + 7).filter((title) => clean(title) !== clean(timelineItem.title) && !(timeline.items ?? []).some((item) => clean(item.title) === clean(title)))

  return [
    makeQuestion({
      id: questionId(0),
      question: `Aşağıdaki açıklama hangi kavramla doğrudan ilişkilidir?\n\n${clean(concept.body)}`,
      correct: concept.term,
      distractors: conceptDistractors,
      correctIndex: answerIndex(0),
      explanation: `${clean(concept.term)} kavramının ayırt edici yönü şudur: ${clean(concept.body)}`,
      difficulty: 'easy',
      skill: 'kavram bilgisi',
    }),
    makeQuestion({
      id: questionId(1),
      question: why.question,
      correct: why.body,
      distractors: [trap.wrong, trap.body, period.body, chain.inference, checkpoint.answer],
      correctIndex: answerIndex(1),
      explanation: why.body,
      difficulty: 'hard',
      skill: 'çok nedenli açıklama',
    }),
    makeQuestion({
      id: questionId(2),
      question: checkpoint.prompt,
      correct: checkpoint.answer,
      distractors: [trap.wrong, trap.body, why.body, chain.inference, period.body],
      correctIndex: answerIndex(2),
      explanation: checkpoint.answer,
      difficulty: 'hard',
      skill: 'neden-sonuç',
    }),
    chronologyQuestion(lesson, questionId(3), answerIndex(3)),
    makeQuestion({
      id: questionId(4),
      question: `${clean(chain.steps[0].body)} → ${clean(chain.steps[1].body)} → ? → ${clean(chain.steps[3].body)}\n\nVerilen neden-sonuç zincirinde soru işaretinin yerine hangisi getirilmelidir?`,
      correct: chain.steps[2].body,
      distractors: [chain.steps[0].body, chain.steps[1].body, chain.steps[3].body, trap.wrong, ...stepBodies],
      correctIndex: answerIndex(4),
      explanation: `${chain.steps.map((step) => `${clean(step.title)}: ${clean(step.body)}`).join(' → ')}. ${clean(chain.inference)}`,
      difficulty: 'medium',
      skill: 'süreç ilişkisi',
    }),
    makeQuestion({
      id: questionId(5),
      question: `${clean(figure.contribution)}\n\nBu açıklamada rolü belirtilen tarihî kişi aşağıdakilerden hangisidir?`,
      correct: figure.name,
      distractors: figureDistractors,
      correctIndex: answerIndex(5),
      explanation: `${clean(figure.name)}, ${clean(figure.period)} döneminde ${clean(figure.position)} olarak ${clean(figure.contribution)}`,
      difficulty: 'easy',
      skill: 'kişi-olay eşleştirme',
    }),
    makeQuestion({
      id: questionId(6),
      question: compareRow
        ? `${clean(compare.title)} karşılaştırmasında “${clean(compareRow.label)}” ölçütü için hangi eşleştirme doğrudur?`
        : `${clean(lesson.title)} dersindeki “${clean(summary.title)}” başlığına göre hangi yargı ana çıkarımla uyumludur?`,
      correct: compareRow
        ? `${clean(compare.columns[0])}: ${clean(compareRow.values[0])} — ${clean(compare.columns[1])}: ${clean(compareRow.values[1])}`
        : summary.points[0],
      distractors: compareRow
        ? [
            `${clean(compare.columns[0])}: ${clean(compareRow.values[1])} — ${clean(compare.columns[1])}: ${clean(compareRow.values[0])}`,
            `${clean(compare.columns[0])}: ${clean(compareRow.values[0])} — ${clean(compare.columns[1])}: ${clean(compareRow.values[0])}`,
            `${clean(compare.columns[0])}: ${clean(compareRow.values[1])} — ${clean(compare.columns[1])}: ${clean(compareRow.values[1])}`,
            trap.wrong,
          ]
        : [trap.wrong, trap.body, ...summary.points.slice(1)],
      correctIndex: answerIndex(6),
      explanation: compareRow ? `${clean(compare.insight)} Bu nedenle doğru eşleştirme seçeneklerde verilen biçimdedir.` : clean(summary.body),
      difficulty: 'medium',
      skill: 'karşılaştırma',
    }),
    makeQuestion({
      id: questionId(7),
      question: `${clean(period.title)} (${clean(period.range)}) ele alınırken aşağıdakilerden hangisi bu dönemin temel dönüm noktalarından biri olarak gösterilebilir?`,
      correct: periodPoint,
      distractors: periodDistractors,
      correctIndex: answerIndex(7),
      explanation: `${clean(periodPoint)}, ${clean(period.title)} başlığının temel dönüm noktalarındandır. ${clean(period.body)}`,
      difficulty: 'easy',
      skill: 'dönem bilgisi',
    }),
    makeQuestion({
      id: questionId(8),
      question: `${clean(timelineItem.body)}\n\nBu açıklama aşağıdaki gelişme veya aşamalardan hangisine aittir?`,
      correct: timelineItem.title,
      distractors: timelineDistractors,
      correctIndex: answerIndex(8),
      explanation: `${clean(timelineItem.title)}: ${clean(timelineItem.body)} ${clean(timeline.takeaway)}`,
      difficulty: 'medium',
      skill: 'olay-açıklama eşleştirme',
    }),
    makeQuestion({
      id: questionId(9),
      question: `${clean(trap.wrong)}\n\nBu yargıyı tarihsel bağlama uygun biçimde düzelten seçenek hangisidir?`,
      correct: trap.right,
      distractors: [trap.wrong, trap.body, why?.body, ...rotate(TRAP_RIGHTS, seed + 8)],
      correctIndex: answerIndex(9),
      explanation: `${clean(trap.right)} ${clean(trap.body)}`,
      difficulty: 'medium',
      skill: 'yanlış genellemeyi ayırt etme',
    }),
  ]
}

const SETS = []
const SETS_BY_ID = new Map()

TOPICS.forEach((topic) => {
  const lessons = TYT_HISTORY_LESSONS.filter((lesson) => lesson.placement.topic === topic.name)
  lessons.forEach((lesson, lessonIndex) => {
    const test = lessonIndex + 1
    const testId = `tyt-tarih-${topic.order}-test-${String(test).padStart(2, '0')}`
    const questions = lessonQuestions(lesson, lessonIndex)
    const set = {
      id: testId,
      title: `${lesson.title} · Test ${String(test).padStart(2, '0')}`,
      description: `${lesson.subtitle} · 10 özgün soru`,
      difficulty: 'medium',
      question_count: questions.length,
      subject: 'Tarih',
      topic: topic.name,
      sourceReferences: SOURCE_REFERENCES,
      sourceLesson: lesson.slug,
      questions,
    }
    SETS.push(set)
    SETS_BY_ID.set(testId, set)
  })
})

export function withHistoryQuestionBankSubjects(subjects) {
  const exists = subjects.some((subject) => subject.exam_type === 'TYT' && subject.name === 'Tarih')
  return exists ? subjects : [...subjects, BUNDLED_HISTORY_SUBJECT]
}

export function withHistoryQuestionBankTopics(subjects, topics) {
  const subject = subjects.find((item) => item.exam_type === 'TYT' && item.name === 'Tarih')
  if (!subject) return topics

  const nextTopics = [...topics]
  TOPICS.forEach((topic) => {
    if (nextTopics.some((item) => item.subject_id === subject.id && item.name === topic.libraryTopic)) return
    nextTopics.push({
      id: `bundled-history-topic-${topic.order}`,
      subject_id: subject.id,
      name: topic.libraryTopic,
      order_index: topic.order,
      is_bundled: true,
    })
  })
  return nextTopics
}

export function historyQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'TYT' || subjectName !== 'Tarih') return []
  return SETS.filter((set) => set.topic === topicName).map(({ questions, sourceReferences, ...set }) => set)
}

export async function loadHistoryQuestionSet(testId) {
  return SETS_BY_ID.get(testId) ?? null
}

export const historyQuestionBankTopics = TOPICS
export const historyQuestionBankSets = SETS
export const historyQuestionBankSources = SOURCE_REFERENCES
