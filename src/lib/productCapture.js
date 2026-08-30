const CAPTURE_VALUE = 'reels'

export function isProductCapture() {
  if (!import.meta.env.DEV || typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('capture') === CAPTURE_VALUE
}

export function captureStudentProfile() {
  return {
    id: 'reels-student',
    role: 'student',
    full_name: 'Deniz Kaya',
  }
}

export function buildAISolveCaptureResult() {
  return {
    status: 'ok',
    sessionId: null,
    question: {
      text: 'Durgun bir araç 3 m/s² ivmeyle 4 saniye hızlanıyor. Son hızı kaç m/s olur?',
      choices: [],
    },
    meta: {
      subject: 'Fizik',
      topic: 'Hareket',
      subtopic: 'Sabit İvmeli Hareket',
      difficulty: 2,
      strategy: 'v = v₀ + at',
      goal: 'Son hızı bulmak',
      givens: ['v₀ = 0', 'a = 3 m/s²', 't = 4 s'],
      unknowns: ['v'],
      concepts: ['Hız', 'İvme', 'Zaman'],
    },
    board: {
      steps: [
        {
          n: 1,
          title: 'Verilenleri yerleştir',
          kind: 'kurulum',
          narration: 'Araç durgun başladığı için ilk hız sıfırdır.',
          actions: [
            {
              type: 'write',
              content: 'v_0 = 0,\\quad a = 3\\,\\text{m/s}^2,\\quad t = 4\\,\\text{s}',
              format: 'latex',
            },
          ],
        },
        {
          n: 2,
          title: 'Hız bağıntısını kullan',
          kind: 'yerine_koyma',
          isKey: true,
          narration: 'Sabit ivmeli harekette hız, ilk hıza ivme ile zamanın çarpımı eklenerek bulunur.',
          actions: [
            { type: 'write', content: 'v = v_0 + a t', format: 'latex' },
            { type: 'write', content: 'v = 0 + 3 \\cdot 4', format: 'latex' },
          ],
        },
        {
          n: 3,
          title: 'Sonucu bul',
          kind: 'sonuc',
          narration: 'Dört saniyenin sonunda aracın hızı saniyede on iki metredir.',
          actions: [
            {
              type: 'box',
              target: 'v = 12\\,\\text{m/s}',
              format: 'latex',
              tone: 'success',
              label: '4 saniye sonraki hız',
            },
          ],
        },
      ],
      answer: { latex: '12\\,\\text{m/s}', unit: 'm/s' },
    },
    verification: {
      status: 'passed',
      selfCheck: '3 × 4 = 12; birim m/s.',
      notes: [],
    },
    help: {
      keyConcept: 'Sabit ivme, hızın her saniye aynı miktarda değişmesi demektir.',
      commonMistake: 'İlk hızı hesaba katmayı veya saniye birimini unutma.',
      shortTip: 'Hız değişimi = ivme × zaman.',
      wrongChoices: [],
    },
  }
}

function dateKey(daysAgo) {
  const date = new Date()
  date.setHours(12, 0, 0, 0)
  date.setDate(date.getDate() - daysAgo)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function examSubjects(rows) {
  return rows.map(([subject, correct, incorrect, empty]) => ({
    subject,
    correct,
    incorrect,
    empty,
    net: Math.round((correct - incorrect / 4) * 100) / 100,
  }))
}

export function buildAnalyticsCaptureData() {
  const sessions = [
    ['Matematik', 'Fonksiyonlar', 78, 31, 7, 2],
    ['Fizik', 'Hareket ve Kuvvet', 64, 24, 5, 1],
    ['Türkçe', 'Paragraf', 52, 36, 6, 0],
    ['Kimya', 'Mol Kavramı', 70, 27, 4, 1],
    ['Biyoloji', 'Hücre', 58, 30, 3, 2],
    ['Matematik', 'Problemler', 82, 34, 5, 1],
    ['Fizik', 'Elektrik', 66, 25, 4, 1],
    ['Türkçe', 'Dil Bilgisi', 48, 28, 7, 1],
    ['Kimya', 'Kimyasal Türler', 74, 29, 4, 1],
    ['Biyoloji', 'Kalıtım', 61, 26, 5, 1],
    ['Matematik', 'Geometri', 76, 32, 5, 1],
    ['Fizik', 'Dalgalar', 63, 23, 5, 2],
    ['Türkçe', 'Paragraf', 54, 35, 5, 0],
    ['Matematik', 'Fonksiyonlar', 72, 29, 6, 1],
  ]

  const dailyLogs = sessions.map(([subject, topic, minutes, correct, incorrect, empty], index) => ({
    id: `capture-log-${index + 1}`,
    study_date: dateKey(index),
    subject,
    topic: `${subject} - ${topic}`,
    duration_minutes: minutes,
    correct,
    incorrect,
    empty,
  }))

  const mockExams = [
    {
      id: 'capture-mock-1',
      exam_type: 'TYT',
      exam_name: 'Genel Deneme 6',
      exam_date: dateKey(2),
      duration_minutes: 165,
      mock_exam_subjects: examSubjects([
        ['Türkçe', 32, 6, 2],
        ['Sosyal Bilimler', 15, 3, 2],
        ['Matematik', 28, 7, 5],
        ['Fen Bilimleri', 15, 3, 2],
      ]),
    },
    {
      id: 'capture-mock-2',
      exam_type: 'TYT',
      exam_name: 'Genel Deneme 5',
      exam_date: dateKey(16),
      duration_minutes: 165,
      mock_exam_subjects: examSubjects([
        ['Türkçe', 30, 7, 3],
        ['Sosyal Bilimler', 14, 4, 2],
        ['Matematik', 25, 8, 7],
        ['Fen Bilimleri', 14, 4, 2],
      ]),
    },
    {
      id: 'capture-mock-3',
      exam_type: 'TYT',
      exam_name: 'Genel Deneme 4',
      exam_date: dateKey(31),
      duration_minutes: 165,
      mock_exam_subjects: examSubjects([
        ['Türkçe', 29, 8, 3],
        ['Sosyal Bilimler', 13, 4, 3],
        ['Matematik', 23, 9, 8],
        ['Fen Bilimleri', 13, 5, 2],
      ]),
    },
  ]

  const branchExams = [
    {
      id: 'capture-branch-1',
      exam_name: 'Matematik Branş Denemesi',
      subject: 'Matematik',
      topic: 'Problemler',
      exam_date: dateKey(5),
      created_at: dateKey(5),
      duration_minutes: 65,
      correct: 31,
      incorrect: 7,
      empty: 2,
      net: 29.25,
      score: 78,
    },
    {
      id: 'capture-branch-2',
      exam_name: 'Türkçe Branş Denemesi',
      subject: 'Türkçe',
      topic: 'Paragraf',
      exam_date: dateKey(9),
      created_at: dateKey(9),
      duration_minutes: 50,
      correct: 34,
      incorrect: 5,
      empty: 1,
      net: 32.75,
      score: 84,
    },
  ]

  return { dailyLogs, mockExams, branchExams }
}
