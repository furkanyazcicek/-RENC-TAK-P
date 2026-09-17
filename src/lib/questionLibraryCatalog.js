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

const MISSING_SCHEMA_CODES = new Set(['42P01', '42883', 'PGRST202', 'PGRST205'])

export function isQuestionLibrarySchemaMissing(error) {
  return MISSING_SCHEMA_CODES.has(String(error?.code ?? ''))
}

/**
 * Supabase tabloları henüz kurulmamış veya ağ geçici olarak kapalı olsa da
 * paketli soru bankalarının açılabilmesi için uzak yanıtları güvenli boş
 * listelere indirger. Şema eksikliği beklenen uyumluluk durumudur; diğer
 * hatalar içerik gizlenmeden, arayüzde uyarı gösterilmek üzere işaretlenir.
 */
export function resolveQuestionLibraryRemoteData(results = []) {
  const responses = [0, 1, 2].map((index) => {
    const result = results[index]
    if (result?.status === 'fulfilled') return result.value ?? { data: [], error: null }
    if (result?.status === 'rejected') return { data: [], error: result.reason }
    return { data: [], error: null }
  })
  const errors = responses.map((response) => response.error).filter(Boolean)

  return {
    subjects: responses[0].data ?? [],
    topics: responses[1].data ?? [],
    questionSets: responses[2].data ?? [],
    errors,
    hasUnexpectedError: errors.some((error) => !isQuestionLibrarySchemaMissing(error)),
  }
}

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
