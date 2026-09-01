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
  const displayed = displayOrder.map((itemIndex, index) => `${['I', 'II', 'III', 'IV'][index]}. ${clean(items[itemIndex].title)} — ${compact(items[itemIndex].body, 145)}`)
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
  const summary = blocks.find((block) => block.type === 'summary' && block.id?.endsWith('-summary') && block.points?.length)
    ?? blocks.find((block) => block.type === 'summary' && block.points?.length)
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

const CATEGORY_SKILLS = {
  Kavram: 'kavram bilgisi',
  Kronoloji: 'kronoloji',
  'Kişi ve rol': 'kişi-olay eşleştirme',
  'Dönüm noktası': 'dönem bilgisi',
  Süreç: 'neden-sonuç',
  'Eş zamanlılık': 'eş zamanlı düşünme',
  Karşılaştırma: 'karşılaştırma',
  'Neden-sonuç': 'çok nedenli açıklama',
  'Yorum sınırı': 'yanlış genellemeyi ayırt etme',
  Özet: 'büyük resmi kurma',
  Bağlantı: 'değişim ve süreklilik',
}

function conciseLabel(value, wordLimit = 7) {
  const words = clean(value).split(' ')
  const clipped = words.slice(0, wordLimit).join(' ')
  return words.length > wordLimit ? `Ana fikir: ${clipped}…` : `Ana fikir: ${clipped}`
}

function stripOuterQuotes(value) {
  return clean(value)
    .replace(/^[“”"'‘’]+/, '')
    .replace(/[“”"'‘’]+$/, '')
    .replace(/[.!?;:]+$/, '')
    .trim()
}

function compact(value, maxLength = 300) {
  const normalized = clean(value)
  if (normalized.length <= maxLength) return normalized

  const excerpt = normalized.slice(0, maxLength + 1)
  const sentenceEnd = Math.max(excerpt.lastIndexOf('. '), excerpt.lastIndexOf('; '))
  if (sentenceEnd >= Math.floor(maxLength * 0.55)) return `${excerpt.slice(0, sentenceEnd + 1).trim()}…`

  const wordEnd = excerpt.lastIndexOf(' ')
  return `${excerpt.slice(0, wordEnd > 0 ? wordEnd : maxLength).trim()}…`
}

function asSentence(value) {
  const normalized = clean(value)
  return /[.!?…]$/.test(normalized) ? normalized : `${normalized}.`
}

function factRecordsForLesson(lesson) {
  const blocks = allBlocks(lesson)
  const facts = []
  const add = ({ label, text, detail, category }) => {
    const normalizedLabel = stripOuterQuotes(label)
    const normalizedText = clean(text)
    const normalizedDetail = clean(detail || lesson.subtitle)
    if (!normalizedLabel || !normalizedText) return
    facts.push({
      key: `${lesson.slug}-${facts.length + 1}`,
      lessonSlug: lesson.slug,
      lessonTitle: lesson.title,
      topic: lesson.placement.topic,
      label: normalizedLabel,
      text: normalizedText,
      detail: normalizedDetail,
      category,
      skill: CATEGORY_SKILLS[category] ?? 'tarihsel çıkarım',
    })
  }

  blocks.filter((block) => block.type === 'concept').forEach((block) => add({
    label: block.term,
    text: block.body,
    detail: lesson.subtitle,
    category: 'Kavram',
  }))

  blocks.filter((block) => block.type === 'timeline' && block.id?.endsWith('-timeline')).forEach((block) => {
    ;(block.items ?? []).forEach((item) => add({
      label: item.title,
      text: item.body,
      detail: block.takeaway,
      category: 'Kronoloji',
    }))
  })

  blocks.filter((block) => block.type === 'historical_figures').forEach((block) => {
    ;(block.figures ?? []).forEach((figure) => add({
      label: figure.name,
      text: figure.contribution,
      detail: `${figure.period} döneminde ${figure.position}`,
      category: 'Kişi ve rol',
    }))
  })

  blocks.filter((block) => block.type === 'period_summary').forEach((block) => {
    ;(block.turning_points ?? []).forEach((point) => add({
      label: point,
      text: block.body,
      detail: `${block.title} (${block.range})`,
      category: 'Dönüm noktası',
    }))
  })

  blocks.filter((block) => block.type === 'cause_effect').forEach((block) => {
    ;(block.steps ?? []).forEach((step) => add({
      label: step.title,
      text: step.body,
      detail: block.inference,
      category: 'Süreç',
    }))
  })

  blocks.filter((block) => block.type === 'table' && block.title?.includes('Aynı dönemde')).forEach((block) => {
    ;(block.rows ?? []).forEach((row) => add({
      label: row[0],
      text: row[1],
      detail: row[2],
      category: 'Eş zamanlılık',
    }))
  })

  blocks.filter((block) => block.type === 'compare').forEach((block) => {
    ;(block.rows ?? []).forEach((row) => add({
      label: `${block.title} · ${row.label}`,
      text: `${block.columns[0]}: ${row.values[0]} — ${block.columns[1]}: ${row.values[1]}`,
      detail: block.insight,
      category: 'Karşılaştırma',
    }))
  })

  blocks.filter((block) => block.type === 'why' && !block.id?.includes('curriculum-method')).forEach((block) => add({
    label: block.question,
    text: block.body,
    detail: blocks.find((item) => item.type === 'cause_effect')?.inference,
    category: 'Neden-sonuç',
  }))

  blocks.filter((block) => block.type === 'checkpoint').forEach((block) => add({
    label: block.prompt,
    text: block.answer,
    detail: `Çözüm ipucu: ${block.hint}`,
    category: 'Neden-sonuç',
  }))

  blocks.filter((block) => block.type === 'trap').forEach((block) => add({
    label: block.wrong,
    text: block.right,
    detail: block.body,
    category: 'Yorum sınırı',
  }))

  blocks.filter((block) => block.type === 'summary' && block.id?.endsWith('-summary')).forEach((block) => {
    ;(block.points ?? []).forEach((point) => add({
      label: conciseLabel(point),
      text: point,
      detail: block.body,
      category: 'Özet',
    }))
  })

  blocks.filter((block) => block.type === 'connection' && block.title === 'Neden önemli?').forEach((block) => add({
    label: lesson.title,
    text: block.body,
    detail: (block.links ?? []).join(', '),
    category: 'Bağlantı',
  }))

  const seen = new Set()
  return facts.filter((fact) => {
    const signature = `${fact.lessonSlug}|${fact.label}|${fact.text}`.toLocaleLowerCase('tr-TR')
    if (seen.has(signature)) return false
    seen.add(signature)
    return true
  })
}

const ALL_HISTORY_FACTS = TYT_HISTORY_LESSONS.flatMap(factRecordsForLesson)
const ALL_LESSON_TITLES = unique(TYT_HISTORY_LESSONS.map((lesson) => lesson.title))
const BASE_FACT_POOLS = new Map()

function orderedFactPool(fact, offset) {
  if (!BASE_FACT_POOLS.has(fact.key)) {
    const candidates = [
      ...ALL_HISTORY_FACTS.filter((candidate) => candidate.topic === fact.topic && candidate.category === fact.category),
      ...ALL_HISTORY_FACTS.filter((candidate) => candidate.topic === fact.topic),
      ...ALL_HISTORY_FACTS.filter((candidate) => candidate.category === fact.category),
      ...ALL_HISTORY_FACTS,
    ]
    const seen = new Set([fact.key])
    BASE_FACT_POOLS.set(fact.key, candidates.filter((candidate) => {
      if (seen.has(candidate.key)) return false
      seen.add(candidate.key)
      return true
    }))
  }
  return rotate(BASE_FACT_POOLS.get(fact.key), offset)
}

function factPool(fact, field, offset, maxLength = 300) {
  return unique(
    orderedFactPool(fact, offset).slice(0, 36).map((candidate) => compact(candidate[field], maxLength))
  ).slice(0, 12)
}

function mismatchedPairs(fact, offset) {
  const pool = orderedFactPool(fact, offset).slice(0, 20)
  if (pool.length < 2) return []

  return unique(pool.map((candidate, index) => {
    const other = pool[(index + 1) % pool.length]
    return `${compact(candidate.label, 150)} — ${compact(other.text, 240)}`
  })).slice(0, 12)
}

function mismatchedContextPairs(fact, offset) {
  const pool = orderedFactPool(fact, offset).slice(0, 20)
  if (pool.length < 2) return []

  return unique(pool.map((candidate, index) => {
    const other = pool[(index + 1) % pool.length]
    return `${compact(candidate.label, 150)} — ${compact(other.detail, 240)}`
  })).slice(0, 12)
}

function lessonPairs(fact, offset) {
  return unique(orderedFactPool(fact, offset).slice(0, 24).map((candidate) => (
    `${compact(candidate.label, 150)} — ${candidate.lessonTitle}`
  ))).slice(0, 12)
}

function processQuestionCandidate(fact, variant, offset) {
  const label = compact(fact.label, 80)
  const text = compact(fact.text, 300)
  const detail = compact(fact.detail, 300)
  const stageDistractors = ['Neden', 'Olay', 'Sonuç', 'Sonraki etki'].filter((stage) => stage !== label)

  if (variant === 0) return {
    question: `${asSentence(text)}\n\nBu gelişme neden–olay–sonuç zincirinin hangi aşamasını oluşturmaktadır?`,
    correct: label,
    distractors: stageDistractors,
    explanation: `${text}, zincirin “${label}” aşamasıdır. ${detail}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 1) return {
    question: `${asSentence(detail)}\n\nBu çıkarımı somutlaştıran gelişme aşağıdakilerden hangisidir?`,
    correct: text,
    distractors: factPool(fact, 'text', offset),
    explanation: `${text} gelişmesi verilen çıkarımı somutlaştırır.`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 2) return {
    question: `${asSentence(text)}\n\nBu gelişmeden hareketle aşağıdaki yargılardan hangisine ulaşılabilir?`,
    correct: detail,
    distractors: factPool(fact, 'detail', offset),
    explanation: `${detail} yargısı, verilen gelişmenin neden–sonuç bağını açıklar.`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 3) return {
    question: `“${fact.lessonTitle}” sürecindeki neden–sonuç ilişkisi göz önüne alındığında aşağıdaki eşleştirmelerden hangisi doğrudur?`,
    correct: `${label} — ${text}`,
    distractors: mismatchedPairs(fact, offset),
    explanation: `${label} — ${text} eşleştirmesi süreçteki doğru aşamayı gösterir. ${detail}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 4) return {
    question: `${asSentence(text)}\n\nBu gelişme aşağıdaki tarihsel süreçlerden hangisiyle en doğrudan ilişkilidir?`,
    correct: fact.lessonTitle,
    distractors: rotate(ALL_LESSON_TITLES, offset),
    explanation: `Bu gelişme “${fact.lessonTitle}” sürecinde ele alınır. ${detail}`,
    difficulty: 'easy',
    skill: fact.skill,
  }
  if (variant === 5) return {
    question: `${asSentence(detail)}\n\nBu ilişkinin “${label.toLocaleLowerCase('tr-TR')}” aşamasını gösteren gelişme hangisidir?`,
    correct: text,
    distractors: factPool(fact, 'text', offset + 11),
    explanation: `${text}, verilen ilişkinin “${label}” aşamasını oluşturur.`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 6) return {
    question: `${asSentence(text)}\n\nBu gelişmenin süreç içindeki rolü ve ait olduğu konu hangisinde doğru verilmiştir?`,
    correct: `${label} — ${fact.lessonTitle}`,
    distractors: lessonPairs(fact, offset),
    explanation: `Bu gelişme “${fact.lessonTitle}” sürecinin “${label}” aşamasıdır.`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  return {
    question: `“${fact.topic}” ünitesi kapsamında aşağıdakilerden hangisi sürecin “${label.toLocaleLowerCase('tr-TR')}” aşamasına örnektir?`,
    correct: text,
    distractors: factPool(fact, 'text', offset + 17),
    explanation: `${text}, “${label}” aşamasının doğru örneğidir. ${detail}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
}

function trapQuestionCandidate(fact, variant, offset) {
  const wrong = compact(fact.label, 260)
  const right = compact(fact.text, 300)
  const reason = compact(fact.detail, 300)

  if (variant === 0) return {
    question: `“${wrong}” yargısını tarihsel bağlama uygun biçimde düzelten seçenek hangisidir?`,
    correct: right,
    distractors: factPool(fact, 'text', offset),
    explanation: `${right} ${reason}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 1) return {
    question: `${asSentence(right)}\n\nBu açıklamayla düzeltilen yanlış genelleme aşağıdakilerden hangisidir?`,
    correct: wrong,
    distractors: factPool(fact, 'label', offset, 260),
    explanation: `Düzeltilen yanlış genelleme “${wrong}” yargısıdır. ${reason}`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 2) return {
    question: `“${wrong}” yargısının neden eksik ya da hatalı olduğunu en iyi açıklayan seçenek hangisidir?`,
    correct: reason,
    distractors: factPool(fact, 'detail', offset),
    explanation: `${reason} Bu nedenle doğru ifade şöyledir: ${right}`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 3) return {
    question: `${asSentence(reason)}\n\nBu uyarıya uygun tarihsel yargı aşağıdakilerden hangisidir?`,
    correct: right,
    distractors: factPool(fact, 'text', offset + 7),
    explanation: `${right} yargısı, verilen yorum sınırına uygundur.`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 4) return {
    question: `“${wrong}” yargısıyla ilgili aşağıdaki değerlendirmelerden hangisi doğrudur?`,
    correct: right,
    distractors: factPool(fact, 'text', offset + 13),
    explanation: `${right} ${reason}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 5) return {
    question: `${asSentence(right)}\n\nBu düzeltme aşağıdaki tarihsel süreçlerden hangisiyle ilgilidir?`,
    correct: fact.lessonTitle,
    distractors: rotate(ALL_LESSON_TITLES, offset),
    explanation: `Bu düzeltme “${fact.lessonTitle}” sürecine aittir. ${reason}`,
    difficulty: 'easy',
    skill: fact.skill,
  }
  if (variant === 6) return {
    question: `Aşağıdaki yanlış yargı–düzeltme eşleştirmelerinden hangisi tarihsel bağlama uygundur?`,
    correct: `${wrong} — ${right}`,
    distractors: mismatchedPairs(fact, offset),
    explanation: `${wrong} yargısının doğru düzeltmesi şudur: ${right}`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  return {
    question: `${asSentence(reason)}\n\nBu açıklamanın düzelttiği yargı ve ilgili olduğu süreç hangisinde doğru verilmiştir?`,
    correct: `${wrong} — ${fact.lessonTitle}`,
    distractors: lessonPairs(fact, offset),
    explanation: `${wrong} yargısı “${fact.lessonTitle}” bağlamında bu gerekçeyle düzeltilir: ${right}`,
    difficulty: 'hard',
    skill: fact.skill,
  }
}

function questionCandidate(fact, variant, offset) {
  const label = compact(fact.label, 180)
  const text = compact(fact.text, 300)
  const detail = compact(fact.detail, 300)
  const pair = `${label} — ${text}`

  if (fact.category === 'Süreç') return processQuestionCandidate(fact, variant, offset)
  if (fact.category === 'Yorum sınırı') return trapQuestionCandidate(fact, variant, offset)

  if (fact.category === 'Özet') {
    if (variant === 0) return {
      question: `“${fact.lessonTitle}” sürecinin ana özelliklerinden biri aşağıdakilerden hangisidir?`,
      correct: text,
      distractors: factPool(fact, 'text', offset),
      explanation: `${text} ${detail}`,
      difficulty: 'medium',
      skill: fact.skill,
    }
    if (variant === 1) return {
      question: `${asSentence(detail)}\n\nBu genel çerçeveyi destekleyen yargı aşağıdakilerden hangisidir?`,
      correct: text,
      distractors: factPool(fact, 'text', offset + 7),
      explanation: `${text} yargısı verilen genel çerçeveyle uyumludur.`,
      difficulty: 'hard',
      skill: fact.skill,
    }
    if (variant === 2) return {
      question: `${asSentence(text)}\n\nBu yargı aşağıdaki tarihsel süreçlerden hangisiyle en doğrudan ilişkilidir?`,
      correct: fact.lessonTitle,
      distractors: rotate(ALL_LESSON_TITLES, offset),
      explanation: `Bu yargı “${fact.lessonTitle}” başlığı altında ele alınır. ${detail}`,
      difficulty: 'easy',
      skill: fact.skill,
    }
    if (variant === 3) return {
      question: `“${fact.topic}” ünitesiyle ilgili aşağıdaki genel yargılardan hangisi doğrudur?`,
      correct: text,
      distractors: factPool(fact, 'text', offset + 13),
      explanation: `${text} ${detail}`,
      difficulty: 'medium',
      skill: fact.skill,
    }
    if (variant === 4) return {
      question: `${asSentence(text)}\n\nBu çıkarımı tarihsel bağlamına yerleştiren açıklama hangisidir?`,
      correct: detail,
      distractors: factPool(fact, 'detail', offset),
      explanation: `${detail} Bu çerçeve verilen çıkarımın dönem içindeki yerini gösterir.`,
      difficulty: 'hard',
      skill: fact.skill,
    }
    if (variant === 5) return {
      question: `${asSentence(detail)}\n\n“${fact.lessonTitle}” süreci için bu çerçeveden çıkarılabilecek sonuç hangisidir?`,
      correct: text,
      distractors: factPool(fact, 'text', offset + 19),
      explanation: `${text} sonucu, verilen tarihsel çerçeveyle uyumludur.`,
      difficulty: 'hard',
      skill: fact.skill,
    }
    return {
      question: `${asSentence(text)}\n\nBu yargının ait olduğu süreç ve ünite aşağıdakilerin hangisinde birlikte verilmiştir?`,
      correct: `${fact.lessonTitle} — ${fact.topic}`,
      distractors: rotate(TYT_HISTORY_LESSONS, offset).map((lesson) => `${lesson.title} — ${lesson.placement.topic}`),
      explanation: `Bu yargı “${fact.topic}” ünitesindeki “${fact.lessonTitle}” sürecine aittir.`,
      difficulty: 'medium',
      skill: fact.skill,
    }
  }

  if (variant === 0) return {
    question: `${asSentence(text)}\n\nBu açıklamada sözü edilen kavram, kişi ya da gelişme aşağıdakilerden hangisidir?`,
    correct: label,
    distractors: factPool(fact, 'label', offset, 180),
    explanation: `${label}: ${text} ${detail}`,
    difficulty: 'easy',
    skill: fact.skill,
  }
  if (variant === 1) return {
    question: `“${label}” ile ilgili aşağıdaki bilgilerden hangisi doğrudur?`,
    correct: text,
    distractors: factPool(fact, 'text', offset),
    explanation: `${label} için doğru bilgi şudur: ${text} ${detail}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 2) return {
    question: `“${label}: ${text}” bilgisi aşağıdaki açıklamalardan hangisiyle birlikte değerlendirildiğinde tarihsel bağlamına doğru yerleştirilmiş olur?`,
    correct: detail,
    distractors: factPool(fact, 'detail', offset),
    explanation: `${detail} Yorum, verilen bilginin ve dönem bağlamının taşıdığı sınırı aşmamalıdır.`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 3) return {
    question: `“${fact.lessonTitle}” konusu göz önüne alındığında aşağıdaki eşleştirmelerden hangisi doğrudur?`,
    correct: pair,
    distractors: mismatchedPairs(fact, offset),
    explanation: `${pair} eşleştirmesi tarihsel bilgiyle uyumludur. ${detail}`,
    difficulty: 'medium',
    skill: fact.skill,
  }
  if (variant === 4) return {
    question: `“${label}” hakkında şu bilgi verilmiştir:\n\n${asSentence(detail)}\n\nBu bilgi aşağıdaki yargılardan hangisini destekler?`,
    correct: text,
    distractors: factPool(fact, 'text', offset + 11),
    explanation: `${detail} bilgisi, ${label} hakkında şu yargıyı destekler: ${text}`,
    difficulty: 'hard',
    skill: fact.skill,
  }
  if (variant === 5) return {
    question: `${asSentence(text)}\n\nBu gelişme ya da özellik aşağıdaki tarihsel süreçlerden hangisiyle en doğrudan ilişkilidir?`,
    correct: fact.lessonTitle,
    distractors: rotate(ALL_LESSON_TITLES, offset),
    difficulty: 'medium',
    skill: fact.skill,
    explanation: `Bu bilgi “${fact.lessonTitle}” başlığı altında ele alınır. ${detail}`,
  }
  if (variant === 6) return {
    question: `${asSentence(text)}\n\nBu bilgiye ait başlık ile tarihsel bağlam aşağıdakilerin hangisinde doğru eşleştirilmiştir?`,
    correct: `${label} — ${detail}`,
    distractors: mismatchedContextPairs(fact, offset),
    difficulty: 'hard',
    skill: fact.skill,
    explanation: `${label} başlığı için doğru tarihsel bağlam şudur: ${detail}`,
  }
  if (variant === 7) return {
    question: `${asSentence(text)}\n\nBu açıklamanın tarihsel kapsamını doğru belirleyen seçenek hangisidir?`,
    correct: `${label}; ${detail}`,
    distractors: mismatchedContextPairs(fact, offset + 17).map((item) => item.replace(' — ', '; ')),
    difficulty: 'hard',
    skill: fact.skill,
    explanation: `${label}, şu tarihsel kapsam içinde değerlendirilmelidir: ${detail}`,
  }
  if (variant === 8) return {
    question: `“${label}” ile aşağıdaki tarihsel bağlam birlikte düşünüldüğünde bu ilişkiyi somutlaştıran bilgi hangisidir?\n\n${asSentence(detail)}`,
    correct: text,
    distractors: factPool(fact, 'text', offset + 23),
    difficulty: 'hard',
    skill: fact.skill,
    explanation: `${text} bilgisi, ${label} ile verilen tarihsel bağlam arasındaki ilişkiyi somutlaştırır.`,
  }
  return {
    question: `${asSentence(text)}\n\nBu açıklamanın adı ve ait olduğu tarihsel süreç aşağıdakilerin hangisinde doğru verilmiştir?`,
    correct: `${label} — ${fact.lessonTitle}`,
    distractors: lessonPairs(fact, offset),
    difficulty: 'medium',
    skill: fact.skill,
    explanation: `${label}, “${fact.lessonTitle}” süreci içinde ele alınır. ${detail}`,
  }
}

function stableHash(value) {
  let hash = 2166136261
  for (const char of String(value)) {
    hash ^= char.codePointAt(0)
    hash = Math.imul(hash, 16777619)
  }
  return hash >>> 0
}

function generatedQuestionsForTopic(topic, lessons, existingQuestions, needed, claimedRoots) {
  const facts = lessons.flatMap(factRecordsForLesson)
  const existingRoots = new Set([
    ...claimedRoots,
    ...existingQuestions.map((question) => clean(question.question).toLocaleLowerCase('tr-TR')),
  ])
  const candidates = []
  facts.forEach((fact, factIndex) => {
    const variantCount = fact.category === 'Özet'
      ? 7
      : ['Süreç', 'Yorum sınırı'].includes(fact.category)
        ? 8
        : 10
    for (let variant = 0; variant < variantCount; variant += 1) {
      const candidate = questionCandidate(fact, variant, topic.order * 1000 + factIndex * 10 + variant)
      const normalizedQuestion = clean(candidate.question).toLocaleLowerCase('tr-TR')
      const normalizedAnswer = clean(candidate.correct).toLocaleLowerCase('tr-TR')
      if (normalizedAnswer.length > 8 && normalizedQuestion.includes(normalizedAnswer)) continue
      candidates.push(candidate)
    }
  })
  candidates.sort((left, right) => stableHash(`${topic.order}|${left.question}`) - stableHash(`${topic.order}|${right.question}`))

  const uniqueCandidates = []
  const seen = new Set(existingRoots)
  for (const candidate of candidates) {
    const root = clean(candidate.question).toLocaleLowerCase('tr-TR')
    if (seen.has(root)) continue
    seen.add(root)
    claimedRoots.add(root)
    uniqueCandidates.push(candidate)
    if (uniqueCandidates.length === needed) break
  }
  if (uniqueCandidates.length < needed) {
    throw new Error(`${topic.name} için ${needed} yeni soru gerekirken ${uniqueCandidates.length} özgün kök üretildi.`)
  }

  return uniqueCandidates.map((candidate, index) => makeQuestion({
    ...candidate,
    id: `tyt-tarih-${topic.order}-tamamlama-soru-${String(index + 1).padStart(3, '0')}`,
    correctIndex: (existingQuestions.length + index) % 5,
  }))
}

const SETS = []
const SETS_BY_ID = new Map()
const CLAIMED_QUESTION_ROOTS = new Set()

TOPICS.forEach((topic) => {
  const lessons = TYT_HISTORY_LESSONS.filter((lesson) => lesson.placement.topic === topic.name)
  const preservedQuestions = lessons.flatMap((lesson, lessonIndex) => lessonQuestions(lesson, lessonIndex))
  preservedQuestions.forEach((question) => CLAIMED_QUESTION_ROOTS.add(clean(question.question).toLocaleLowerCase('tr-TR')))
  const generatedQuestions = generatedQuestionsForTopic(
    topic,
    lessons,
    preservedQuestions,
    200 - preservedQuestions.length,
    CLAIMED_QUESTION_ROOTS,
  )
  const topicQuestions = [...preservedQuestions, ...generatedQuestions]

  for (let test = 1; test <= 20; test += 1) {
    const lesson = lessons[test - 1]
    const testId = `tyt-tarih-${topic.order}-test-${String(test).padStart(2, '0')}`
    const questions = topicQuestions.slice((test - 1) * 10, test * 10)
    const set = {
      id: testId,
      title: lesson ? `${lesson.title} · Test ${String(test).padStart(2, '0')}` : `${topic.name} · Test ${String(test).padStart(2, '0')}`,
      description: lesson ? `${lesson.subtitle} · 10 özgün soru` : 'Kavram, kronoloji, neden-sonuç ve yorum odaklı 10 özgün soru',
      difficulty: 'medium',
      question_count: questions.length,
      subject: 'Tarih',
      topic: topic.name,
      sourceReferences: SOURCE_REFERENCES,
      sourceLesson: lesson?.slug ?? lessons.map((item) => item.slug).join(','),
      questions,
    }
    SETS.push(set)
    SETS_BY_ID.set(testId, set)
  }
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
