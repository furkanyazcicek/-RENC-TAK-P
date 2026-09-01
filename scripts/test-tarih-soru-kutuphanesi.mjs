import {
  historyQuestionBankSets,
  historyQuestionBankTopics,
} from '../src/content/tests/tarih/question-bank.js'

const errors = []
const questionIds = new Set()
const normalizedQuestions = new Set()
const answerCounts = Object.fromEntries(['A', 'B', 'C', 'D', 'E'].map((letter) => [letter, 0]))

if (historyQuestionBankTopics.length !== 10) {
  errors.push(`10 konu yerine ${historyQuestionBankTopics.length} konu bulundu.`)
}

for (const topic of historyQuestionBankTopics) {
  if (!historyQuestionBankSets.some((set) => set.topic === topic.name)) {
    errors.push(`${topic.name}: soru seti yok`)
  }
}

for (const set of historyQuestionBankSets) {
  if (set.questions.length !== 10) errors.push(`${set.id}: 10 yerine ${set.questions.length} soru var`)
  if (set.question_count !== set.questions.length) errors.push(`${set.id}: soru sayısı meta verisi uyuşmuyor`)

  for (const question of set.questions) {
    if (questionIds.has(question.id)) errors.push(`${question.id}: yinelenen soru kimliği`)
    questionIds.add(question.id)

    const normalized = question.question.toLocaleLowerCase('tr-TR').replace(/\s+/g, ' ').trim()
    if (normalizedQuestions.has(normalized)) errors.push(`${question.id}: yinelenen soru kökü`)
    normalizedQuestions.add(normalized)

    if (question.question.length < 20) errors.push(`${question.id}: soru kökü çok kısa`)
    if (question.options.length !== 5) errors.push(`${question.id}: beş seçenek yok`)
    if (question.options.map((option) => option.id).join('') !== 'ABCDE') errors.push(`${question.id}: seçenek kimlikleri hatalı`)
    if (new Set(question.options.map((option) => option.text.toLocaleLowerCase('tr-TR'))).size !== 5) {
      errors.push(`${question.id}: yinelenen seçenek var`)
    }
    if (!question.options.some((option) => option.id === question.correctOptionId)) {
      errors.push(`${question.id}: doğru cevap seçeneklerle eşleşmiyor`)
    }
    if (question.explanation.length < 20) errors.push(`${question.id}: çözüm çok kısa`)
    if (!question.skill) errors.push(`${question.id}: ölçülen beceri eksik`)
    answerCounts[question.correctOptionId] += 1
  }
}

const counts = Object.values(answerCounts)
if (Math.max(...counts) - Math.min(...counts) > 1) {
  errors.push(`Cevap dağılımı dengesiz: ${JSON.stringify(answerCounts)}`)
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`${historyQuestionBankSets.length} test ve ${questionIds.size} özgün soru doğrulandı.`)
console.log(`Cevap dağılımı: ${JSON.stringify(answerCounts)}`)
