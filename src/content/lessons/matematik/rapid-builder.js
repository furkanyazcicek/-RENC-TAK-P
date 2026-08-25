import { defineLesson, option, step } from './catalog-helpers.js'

const makeReadiness = (item, topic) => ({
  prompt: item.prompt,
  answer: item.answer,
  review: item.review || `${topic} dersindeki ilk kavram ve çözümlü örneğe dön; aynı soruyu işlem basamaklarını sesli söyleyerek yeniden çöz.`,
})

const makeExample = (item) => ({
  title: item.title,
  prompt: item.prompt,
  steps: item.steps.map(([title, body]) => step(title, body)),
  answer: item.answer,
  takeaway: item.takeaway,
  check: item.check,
})

const makeQuestion = (item) => ({
  level: item.level,
  question: item.question,
  options: item.options,
  answer: item.answer,
  idea: item.idea,
  solution: item.solution,
  wrong: item.wrong,
  check: item.check,
})

/**
 * Katalogun ikinci halkası için yoğun ama eksiksiz ders üreticisi.
 * Matematiksel iddialar, örnekler ve sorular `data` içinde konuya özgüdür;
 * yalnız pedagojik akış ve sınav dili ortaklaştırılır.
 */
export function buildTopic(data, order) {
  const subject = data.subject || 'Matematik'
  const topic = data.topic
  const recognition = data.recognition || [
    'İstenen niceliği ve verilen koşulları ayrı satırlara yaz.',
    'Temsili seçmeden önce değişkenin kümesini ve yöntemin koşulunu kontrol et.',
    'Bulduğun sonucu soru kökündeki bütün koşullara geri yerleştir.',
  ]

  return defineLesson({
    subject,
    topic,
    title: data.title || `${topic}: Kavramdan TYT Akıl Yürütmesine`,
    subtitle: data.subtitle,
    minutes: data.minutes || 60,
    prerequisites: data.prerequisites,
    connections: data.connections,
    mapCore: data.mapCore,
    openingLead: data.openingLead || `${topic}, yalnız bir işlem tekniği değil; verilen koşulları uygun bir matematiksel modele dönüştürme aracıdır.`,
    introduction: `${data.introduction}\n\nBu derste önce kavramın sınırı kurulacak, ardından kolay örnekten seçici örneğe geçilecek. Her çözümde “neden bu yöntem?” ve “sonucu nasıl kontrol ederim?” soruları görünür tutulacak.`,
    tytUse: data.tytUse,
    struggle: data.struggle,
    osymBody: `${data.osymBody} Bu değerlendirme 2018-2026 resmî TYT kitapçıklarının soru metinleri yeniden yayımlanmadan incelenmesine dayanır.`,
    osymMeasures: data.osymMeasures,
    patternBody: `${data.patternBody} Sunum biçimi değişse de değişmeyen çekirdek, koşulu doğru temsil edip gereksiz işlemi eleme becerisidir.`,
    patterns: data.patterns,
    readiness: data.readiness.map((item) => makeReadiness(item, topic)),
    concepts: data.concepts,
    why: data.why,
    formulas: data.formulas || [],
    certainInfo: data.certainInfo,
    examples: data.examples.map(makeExample),
    recognitionIntro: 'Sorunun dış görünüşü konu adını söylemeyebilir. Aşağıdaki karar sırası, yüzeydeki hikâyeden matematiksel yapıya geçmek içindir.',
    decisionTree: [
      { question: data.decisionQuestions?.[0] || 'Doğrudan bir kural koşulu var mı?', yes: recognition[0], no: 'Veriyi tablo, şekil, eşitlik veya aralık olarak yeniden temsil et.' },
      { question: data.decisionQuestions?.[1] || 'Birden fazla koşul birlikte mi çalışıyor?', yes: recognition[1], no: 'Tek koşulu uygulayıp sonucu yorumla.' },
      { question: data.decisionQuestions?.[2] || 'Sonuç seçeneklerle veya sınır değerle denetlenebilir mi?', yes: recognition[2], no: 'Ters işlem, yaklaşık değer veya özel durumla kontrol et.' },
    ],
    recognitionTakeaway: data.recognitionTakeaway || 'Adı değil yapıyı tanı: verilen → temsil → koşul → işlem → kontrol.',
    tactic: {
      title: data.tactic.title,
      logic: data.tactic.logic,
      works: data.tactic.works,
      risk: data.tactic.risk,
      steps: data.tactic.steps.map(([title, body]) => step(title, body)),
    },
    traps: data.traps.map((trap) => ({
      ...trap,
      cause: trap.cause || 'Kuralın koşulunu yazmadan otomatik işlem yapmak.',
      check: trap.check || 'Sonucu tanıma veya soru kökündeki koşullara geri yerleştir.',
    })),
    questions: data.questions.map(makeQuestion),
    simulation: {
      ...data.simulation,
      options: data.simulation.options.map((item) => option(item[0], item[1])),
    },
    summary: data.summary,
    nextBody: data.nextBody,
  }, order)
}
