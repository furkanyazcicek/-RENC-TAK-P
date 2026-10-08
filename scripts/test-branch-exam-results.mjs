import assert from 'node:assert/strict'
import { formatBranchExamResult, resolveBranchExamNet } from '../src/lib/examHelpers.js'

const noAnswers = { correct: 0, incorrect: 0, empty: 0, net: 0 }
assert.equal(resolveBranchExamNet(noAnswers), null)
assert.equal(formatBranchExamResult(noAnswers), 'Sonuç girilmemiş')

const allBlank = { correct: 0, incorrect: 0, empty: 20, net: 0 }
assert.equal(resolveBranchExamNet(allBlank), 0)
assert.equal(formatBranchExamResult(allBlank), '0.00 net')

assert.equal(resolveBranchExamNet({ correct: 10, incorrect: 3, empty: 2, exam_type: 'LGS', net: 9.25 }), 9)
assert.equal(formatBranchExamResult({ correct: null, incorrect: null, empty: null, score: 65 }), '%65 (eski kayıt)')

console.log('Branş denemesi sonuç ayrımı doğrulandı.')
