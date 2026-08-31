const BANK_ROOT = '/TYT_Matematik_Soru_Bankasi'

const BANK_TOPICS = [
  ['01_temel_kavramlar_ve_sayi_kumeleri', 'Temel Kavramlar ve Sayı Kümeleri', 'Matematik', 'Temel Kavramlar'],
  ['02_sayi_basamaklari', 'Sayı Basamakları', 'Matematik', 'Sayı Basamakları'],
  ['03_bolme_bolunebilme_ve_kalan', 'Bölme, Bölünebilme ve Kalan', 'Matematik', 'Bölme ve Bölünebilme'],
  ['04_asal_sayilar_carpanlar_ve_bolen_sayisi', 'Asal Sayılar, Çarpanlar ve Bölen Sayısı', 'Matematik', 'OBEB - OKEK'],
  ['05_ebob_ekok_ve_periyodik_durumlar', 'EBOB, EKOK ve Periyodik Durumlar', 'Matematik', 'OBEB - OKEK'],
  ['06_rasyonel_sayilar_ve_ondalik_gosterimler', 'Rasyonel Sayılar ve Ondalık Gösterimler', 'Matematik', 'Rasyonel Sayılar'],
  ['07_denklemler_ve_denklem_sistemleri', 'Denklemler ve Denklem Sistemleri', 'Matematik', 'Denklem Çözme'],
  ['08_esitsizlikler_ve_araliklar', 'Eşitsizlikler ve Aralıklar', 'Matematik', 'Basit Eşitsizlikler'],
  ['09_mutlak_deger', 'Mutlak Değer', 'Matematik', 'Mutlak Değer'],
  ['10_uslu_ifadeler_ve_bilimsel_gosterim', 'Üslü İfadeler ve Bilimsel Gösterim', 'Matematik', 'Üslü Sayılar'],
  ['11_koklu_ifadeler_ve_irrasyonel_sayilar', 'Köklü İfadeler ve İrrasyonel Sayılar', 'Matematik', 'Köklü Sayılar'],
  ['12_ozdeslikler_ve_carpanlara_ayirma', 'Özdeşlikler ve Çarpanlara Ayırma', 'Matematik', 'Çarpanlara Ayırma'],
  ['13_oran_oranti_ve_olcek', 'Oran, Orantı ve Ölçek', 'Matematik', 'Oran - Orantı'],
  ['14_problem_modelleme', 'Problem Modelleme', 'Matematik', 'Problemler'],
  ['15_kumeler', 'Kümeler', 'Matematik', 'Kümeler'],
  ['16_kartezyen_carpim_ve_baginti', 'Kartezyen Çarpım ve Bağıntı', 'Matematik', 'Kartezyen Çarpım ve Bağıntı'],
  ['17_mantik_ve_algoritmik_akil_yurutme', 'Mantık ve Akıl Yürütme', 'Matematik', 'Mantık ve Akıl Yürütme'],
  ['18_fonksiyonlar', 'Fonksiyonlar', 'Matematik', 'Fonksiyonlar (Temel)'],
  ['19_polinomlar_ve_ikinci_dereceye_giris', 'Polinomlar ve İkinci Dereceye Giriş', 'Matematik', 'Polinomlar ve İkinci Dereceye Giriş'],
  ['20_sayma_yontemleri_ve_permutasyon', 'Sayma Yöntemleri ve Permütasyon', 'Matematik', 'Permütasyon - Kombinasyon - Olasılık'],
  ['21_kombinasyon', 'Kombinasyon', 'Matematik', 'Permütasyon - Kombinasyon - Olasılık'],
  ['22_olasilik', 'Olasılık', 'Matematik', 'Permütasyon - Kombinasyon - Olasılık'],
  ['23_veri_ve_istatistik', 'Veri ve İstatistik', 'Matematik', 'İstatistik ve Veri Analizi'],
  ['24_geometri_temelleri_ve_acilar', 'Geometri Temelleri ve Açılar', 'Geometri', 'Temel Kavramlar ve Doğruda Açılar'],
  ['25_ucgenler', 'Üçgenler', 'Geometri', 'Üçgende Açılar'],
  ['26_ucgende_yardimci_elemanlar_ve_alan', 'Üçgende Yardımcı Elemanlar ve Alan', 'Geometri', 'Açıortay ve Kenarortay'],
  ['27_eslik_ve_benzerlik', 'Eşlik ve Benzerlik', 'Geometri', 'Eşlik ve Benzerlik'],
  ['28_cokgenler', 'Çokgenler', 'Geometri', 'Çokgenler'],
  ['29_dortgenler', 'Dörtgenler', 'Geometri', 'Çokgenler'],
  ['30_cember_ve_daire', 'Çember ve Daire', 'Geometri', 'Çember ve Daire'],
  ['31_analitik_geometri', 'Analitik Geometri', 'Geometri', 'Analitik Geometri (Nokta - Doğru)'],
  ['32_kati_cisimler', 'Katı Cisimler', 'Geometri', 'Katı Cisimler'],
].map(([slug, label, subject, libraryTopic], index) => ({
  number: index + 1,
  slug,
  label,
  subject,
  libraryTopic,
}))

const BUNDLED_MATH_SUBJECTS = [
  { id: 'bundled-tyt-matematik', exam_type: 'TYT', name: 'Matematik', order_index: 1 },
  { id: 'bundled-tyt-geometri', exam_type: 'TYT', name: 'Geometri', order_index: 2 },
]

const BUNDLED_LIBRARY_TOPICS = BANK_TOPICS.reduce((catalog, topic) => {
  const key = `${topic.subject}:${topic.libraryTopic}`
  if (!catalog.some((item) => item.key === key)) {
    catalog.push({ key, subjectName: topic.subject, topicName: topic.libraryTopic })
  }
  return catalog
}, [])

function testNumber(value) {
  return String(value).padStart(2, '0')
}

function difficultyFor(test) {
  if (test <= 25) return 'easy'
  if (test <= 40) return 'medium'
  return 'hard'
}

function parseQuestionFile(source) {
  const chunks = String(source).split(/\n## Soru (\d+)\s*\n/)
  const questions = []

  for (let index = 1; index < chunks.length; index += 2) {
    const number = Number(chunks[index])
    const content = chunks[index + 1] ?? ''
    const id = content.match(/`([^`]+)`/)?.[1] ?? `Soru ${number}`
    const optionMatches = [...content.matchAll(/^([A-E])\)\s*(.+?)\s*$/gm)]
    const firstOptionIndex = optionMatches[0]?.index ?? content.length
    const question = content.slice(0, firstOptionIndex).replace(/`[^`]+`\s*/, '').trim()
    const options = optionMatches.map((match) => ({ id: match[1], text: match[2].trim() }))
    questions.push({ id, question, options, difficulty: 'medium' })
  }

  return questions
}

function field(content, label, nextLabels = []) {
  const alternatives = nextLabels.map((item) => `\\*\\*${item}:\\*\\*`).join('|')
  const end = alternatives ? `(?=\\n(?:${alternatives})|$)` : '$'
  return content.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([\\s\\S]*?)${end}`, 'm'))?.[1]?.trim() ?? ''
}

function parseSolutionFile(source) {
  const chunks = String(source).split(/\n## Soru (\d+)\s*\n/)
  const solutions = new Map()

  for (let index = 1; index < chunks.length; index += 2) {
    const number = Number(chunks[index])
    const content = chunks[index + 1] ?? ''
    const answer = content.match(/\*\*Doğru cevap:\*\*\s*([A-E])/)?.[1] ?? ''
    const skill = field(content, 'Kazanım', ['Çözüm'])
    const solution = field(content, 'Çözüm', ['Neden doğru\\?', 'Çeldirici notu'])
    const rationale = field(content, 'Neden doğru\\?', ['Çeldirici notu'])
    const distractor = field(content, 'Çeldirici notu')
    const explanation = [skill && `Kazanım: ${skill}`, solution, rationale, distractor]
      .filter(Boolean)
      .join('\n\n')
    solutions.set(number, { answer, explanation })
  }

  return solutions
}

export function withMathQuestionBankSubjects(subjects) {
  const nextSubjects = [...subjects]

  BUNDLED_MATH_SUBJECTS.forEach((subject) => {
    const exists = nextSubjects.some(
      (item) => item.exam_type === subject.exam_type && item.name === subject.name
    )
    if (!exists) nextSubjects.push(subject)
  })

  return nextSubjects
}

export function withMathQuestionBankTopics(subjects, topics) {
  const nextTopics = [...topics]

  BUNDLED_LIBRARY_TOPICS.forEach(({ subjectName, topicName }, index) => {
    const subject = subjects.find(
      (item) => item.exam_type === 'TYT' && item.name === subjectName
    )
    if (!subject) return
    const exists = nextTopics.some((item) => item.subject_id === subject.id && item.name === topicName)
    if (exists) return
    nextTopics.push({
      id: `bundled-math-topic-${subjectName === 'Matematik' ? 'matematik' : 'geometri'}-${index + 1}`,
      subject_id: subject.id,
      name: topicName,
      order_index: index + 1,
      is_bundled: true,
    })
  })

  return nextTopics
}

export function mathQuestionSetsForTopic(topicName, { examType, subjectName } = {}) {
  if (examType !== 'TYT' || !subjectName) return []

  return BANK_TOPICS
    .filter((topic) => topic.subject === subjectName && topic.libraryTopic === topicName)
    .flatMap((topic) => Array.from({ length: 50 }, (_, index) => {
      const test = index + 1
      const padded = testNumber(test)
      return {
        id: `tyt-matematik-${topic.slug}-test-${padded}`,
        title: `${topic.label} · Test ${padded}`,
        description: test <= 25 ? 'Temel düzey' : test <= 40 ? 'Gelişim düzeyi' : 'İleri düzey',
        difficulty: difficultyFor(test),
        question_count: 10,
        subject: topic.subject,
        bankTopic: topic,
        test,
      }
    }))
}

export async function loadMathQuestionSet(testId) {
  const match = /^tyt-matematik-(.+)-test-(\d{2})$/.exec(testId)
  if (!match) return null

  const topic = BANK_TOPICS.find((item) => item.slug === match[1])
  const test = Number(match[2])
  if (!topic || test < 1 || test > 50) return null

  const fileStem = `test_${testNumber(test)}`
  const basePath = `${BANK_ROOT}/${topic.slug}`
  const [questionResponse, solutionResponse] = await Promise.all([
    fetch(`${basePath}/${fileStem}_questions.md`),
    fetch(`${basePath}/${fileStem}_solutions.md`),
  ])
  if (!questionResponse.ok || !solutionResponse.ok) return null

  const [questionSource, solutionSource] = await Promise.all([
    questionResponse.text(),
    solutionResponse.text(),
  ])
  const questions = parseQuestionFile(questionSource)
  const solutions = parseSolutionFile(solutionSource)
  const difficulty = difficultyFor(test)

  questions.forEach((question, index) => {
    const solution = solutions.get(index + 1)
    question.correctOptionId = solution?.answer ?? ''
    question.explanation = solution?.explanation ?? ''
    question.difficulty = difficulty
  })

  return {
    id: testId,
    title: `${topic.label} · Test ${testNumber(test)}`,
    description: test <= 25 ? 'Temel düzey' : test <= 40 ? 'Gelişim düzeyi' : 'İleri düzey',
    difficulty,
    subject: topic.subject,
    topic: topic.label,
    questions,
    question_count: questions.length,
  }
}
