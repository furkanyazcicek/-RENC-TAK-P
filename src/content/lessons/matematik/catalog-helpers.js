import { createMathLesson } from './factory.js'

export const step = (title, body) => ({ title, body })

export function defineLesson(data, order) {
  const subject = data.subject || 'Matematik'
  const topic = data.topic
  const questions = data.questions.map((question) => ({
    purpose: 'apply',
    ...question,
  }))

  return createMathLesson({
    subject,
    topic,
    title: data.title || `${topic}: Mantık, Yöntem ve TYT Uygulaması`,
    subtitle: data.subtitle,
    minutes: data.minutes || 55,
    prerequisites: data.prerequisites,
    connections: data.connections,
    outcomes: data.outcomes || [
      `${topic} kavramlarını kendi cümleleriyle açıklayabilir.`,
      'Soru kökündeki verileri uygun matematiksel temsile dönüştürebilir.',
      'Yöntemin kullanım koşulunu ve en sık yapılan hatayı ayırt edebilir.',
      'Orta düzey ve özgün TYT tarzı soruları gerekçeli biçimde çözebilir.',
    ],
    mapCore: data.mapCore,
    openingTitle: data.openingTitle || `${topic} neyi düzenler?`,
    openingLead: data.openingLead,
    introduction: data.introduction,
    tytUse: data.tytUse,
    struggle: data.struggle,
    osym: {
      body: data.osymBody,
      measures: data.osymMeasures,
      patternBody: data.patternBody,
      patterns: data.patterns,
    },
    readiness: data.readiness,
    concepts: data.concepts,
    why: data.why,
    formulas: data.formulas || [],
    certainInfo: data.certainInfo,
    examples: data.examples,
    recognitionIntro: data.recognitionIntro,
    decisionTree: data.decisionTree,
    recognitionTakeaway: data.recognitionTakeaway,
    tactic: data.tactic,
    traps: data.traps,
    questions,
    simulation: data.simulation,
    summary: data.summary,
    nextBody: data.nextBody,
  }, order)
}

export const option = (text, explanation = '') => ({ text, explanation })
