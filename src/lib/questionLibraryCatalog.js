import {
  withMathQuestionBankSubjects,
  withMathQuestionBankTopics,
} from '../content/tests/matematik/question-bank.js'
import {
  withPhilosophyQuestionBankSubjects,
  withPhilosophyQuestionBankTopics,
} from '../content/tests/felsefe/question-bank.js'
import {
  withHistoryQuestionBankSubjects,
  withHistoryQuestionBankTopics,
} from '../content/tests/tarih/question-bank.js'
import {
  withDinKulturuQuestionBankSubjects,
  withDinKulturuQuestionBankTopics,
} from '../content/tests/din_kulturu/question-bank.js'
import {
  withCografyaQuestionBankSubjects,
  withCografyaQuestionBankTopics,
} from '../content/tests/cografya/question-bank.js'
import {
  withLgsTurkceQuestionBankSubjects,
  withLgsTurkceQuestionBankTopics,
} from '../content/tests/lgs_turkce/question-bank.js'
import {
  withTurkceQuestionBankSubjects,
  withTurkceQuestionBankTopics,
} from '../content/tests/turkce/question-bank.js'

/**
 * Veritabanındaki kütüphane kayıtlarını paketli soru bankalarıyla
 * tek ve test edilebilir bir zincirde birleştirir.
 */
export function createQuestionLibraryCatalog(remoteSubjects = [], remoteTopics = []) {
  const mathSubjects = withMathQuestionBankSubjects(remoteSubjects)
  const philosophySubjects = withPhilosophyQuestionBankSubjects(mathSubjects)
  const historySubjects = withHistoryQuestionBankSubjects(philosophySubjects)
  const cografyaSubjects = withCografyaQuestionBankSubjects(historySubjects)
  const dinKulturuSubjects = withDinKulturuQuestionBankSubjects(cografyaSubjects)
  const lgsTurkceSubjects = withLgsTurkceQuestionBankSubjects(dinKulturuSubjects)
  const subjects = withTurkceQuestionBankSubjects(lgsTurkceSubjects)

  const mathTopics = withMathQuestionBankTopics(subjects, remoteTopics)
  const philosophyTopics = withPhilosophyQuestionBankTopics(subjects, mathTopics)
  const historyTopics = withHistoryQuestionBankTopics(subjects, philosophyTopics)
  const cografyaTopics = withCografyaQuestionBankTopics(subjects, historyTopics)
  const dinKulturuTopics = withDinKulturuQuestionBankTopics(subjects, cografyaTopics)
  const lgsTurkceTopics = withLgsTurkceQuestionBankTopics(subjects, dinKulturuTopics)
  const topics = withTurkceQuestionBankTopics(subjects, lgsTurkceTopics)

  return { subjects, topics }
}
