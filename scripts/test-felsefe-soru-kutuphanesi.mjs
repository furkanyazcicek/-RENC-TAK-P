import fs from 'node:fs'
import path from 'node:path'
import {
  parsePhilosophyQuestionFile,
  philosophyQuestionBankTopics,
} from '../src/content/tests/felsefe/question-bank.js'

const errors = []
const questionIds = new Set()
let fileCount = 0
let questionCount = 0

for (const topic of philosophyQuestionBankTopics) {
  for (let test = 1; test <= 20; test += 1) {
    const padded = String(test).padStart(2, '0')
    const file = path.join(
      process.cwd(),
      'TYT_Felsefe_Soru_Kutuphanesi',
      topic.folder,
      `Test_${padded}.md`
    )
    const testId = `tyt-felsefe-${topic.order}-test-${padded}`

    if (!fs.existsSync(file)) {
      errors.push(`${file}: dosya bulunamadı`)
      continue
    }

    fileCount += 1
    const questions = parsePhilosophyQuestionFile(fs.readFileSync(file, 'utf8'), {
      topic: topic.label,
      testId,
    })

    if (questions.length !== 10) errors.push(`${file}: ${questions.length} soru bulundu`)

    questions.forEach((question) => {
      questionCount += 1
      if (!question.question) errors.push(`${question.id}: soru metni eksik`)
      if (question.options.length !== 5) errors.push(`${question.id}: beş seçenek yok`)
      if (!question.correctOptionId) errors.push(`${question.id}: doğru cevap eksik`)
      if (!question.options.some((option) => option.id === question.correctOptionId)) {
        errors.push(`${question.id}: doğru cevap seçeneklerle eşleşmiyor`)
      }
      if (!question.explanation) errors.push(`${question.id}: çözüm eksik`)
      if (questionIds.has(question.id)) errors.push(`${question.id}: yinelenen soru kimliği`)
      questionIds.add(question.id)
    })
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`${fileCount} test dosyası ve ${questionCount} soru doğrulandı.`)
