import { supabase } from './supabaseClient'
import { slugifyLibraryValue } from './libraryRoutes'
import {
  LEGACY_BUNDLED_QUESTION_SETS,
  legacyBundledQuestionSetsForTopic,
} from '../content/tests/bundledCatalog.js'
import { loadMathQuestionSet, mathQuestionSetsForTopic } from '../content/tests/matematik/question-bank.js'
import { loadPhilosophyQuestionSet, philosophyQuestionSetsForTopic } from '../content/tests/felsefe/question-bank.js'
import { loadHistoryQuestionSet, historyQuestionSetsForTopic } from '../content/tests/tarih/question-bank.js'
import { loadDinKulturuQuestionSet, dinKulturuQuestionSetsForTopic } from '../content/tests/din_kulturu/question-bank.js'
import { loadCografyaQuestionSet, cografyaQuestionSetsForTopic } from '../content/tests/cografya/question-bank.js'
import { loadLgsTurkceQuestionSet, lgsTurkceQuestionSetsForTopic } from '../content/tests/lgs_turkce/question-bank.js'
import { describeBundledQuestionSet, publicQuestionSet } from './learning/contentActivity/identity.js'
import { indexLatestQuestionProgress } from './questionProgress.js'

// Geçiş döneminde mevcut kod tabanındaki testler kaybolmasın. Yeni testler
// `library_question_sets` tablosuna yazılır; bu sabit kaynak yalnızca eski
// pilot içeriğin uyumluluk köprüsüdür.
export const BUNDLED_SETS = LEGACY_BUNDLED_QUESTION_SETS

export function bundledQuestionSetsForTopic(topicName, context = {}) {
  return [
    ...legacyBundledQuestionSetsForTopic(slugifyLibraryValue(topicName)),
    ...mathQuestionSetsForTopic(topicName, context),
    ...philosophyQuestionSetsForTopic(topicName, context),
    ...historyQuestionSetsForTopic(topicName, context),
    ...dinKulturuQuestionSetsForTopic(topicName, context),
    ...cografyaQuestionSetsForTopic(topicName, context),
    ...lgsTurkceQuestionSetsForTopic(topicName, context),
  ]
}

async function withBundledIdentity(questionSet) {
  if (!questionSet) return null
  try {
    const descriptor = await describeBundledQuestionSet(questionSet)
    return publicQuestionSet({ ...questionSet, source_code: 'bundled_question_test' }, descriptor)
  } catch {
    // Stable soru/blok kimliği olmayan eski kayıt çalıştırılmaz; manifestte
    // karantinada kalır ve tarayıcıdan güvenilir sonuç üretemez.
    return null
  }
}

export async function loadQuestionSet(testId, topicSlug) {
  const mathSet = await loadMathQuestionSet(testId)
  if (mathSet) return withBundledIdentity(mathSet)

  const philosophySet = await loadPhilosophyQuestionSet(testId)
  if (philosophySet) return withBundledIdentity(philosophySet)

  const historySet = await loadHistoryQuestionSet(testId)
  if (historySet) return withBundledIdentity(historySet)

  const dinKulturuSet = await loadDinKulturuQuestionSet(testId)
  if (dinKulturuSet) return withBundledIdentity(dinKulturuSet)

  const cografyaSet = await loadCografyaQuestionSet(testId)
  if (cografyaSet) return withBundledIdentity(cografyaSet)

  const lgsTurkceSet = await loadLgsTurkceQuestionSet(testId)
  if (lgsTurkceSet) return withBundledIdentity(lgsTurkceSet)

  const bundled = BUNDLED_SETS[topicSlug]?.tests?.find((test) => test.id === testId)
  if (bundled) return withBundledIdentity(bundled)

  const { data, error } = await supabase
    .from('library_question_sets')
    .select('id, title, description, difficulty, questions, question_count, content_revision, content_hash')
    .eq('id', testId)
    .eq('status', 'published')
    .maybeSingle()

  // Migration henüz uygulanmadıysa eski test deneyimi bozulmasın.
  if (error || !data) return null
  return {
    ...data,
    source_code: 'db_question_test',
    content_id: data.id,
    content_revision: `db-${data.content_revision}`,
    questions: data.questions ?? [],
  }
}

export async function loadQuestionProgressForSets(studentId, questionSets = []) {
  const contentIds = [...new Set(questionSets
    .map((questionSet) => questionSet?.content_id ?? questionSet?.id)
    .filter(Boolean)
    .map(String))]

  if (!studentId || contentIds.length === 0) {
    return { status: 'available', progressByKey: {} }
  }

  try {
    const { data, error } = await supabase
      .from('student_question_set_attempts')
      .select('id, source_code, content_id, content_revision, status, marked_count, total_count, correct_count, wrong_count, empty_count, started_at, updated_at')
      .eq('student_id', studentId)
      .in('source_code', ['db_question_test', 'bundled_question_test'])
      .in('status', ['in_progress', 'completed'])
      .in('content_id', contentIds)
      .order('updated_at', { ascending: false })

    if (error) return { status: 'unavailable', progressByKey: {} }
    return {
      status: 'available',
      progressByKey: indexLatestQuestionProgress(data ?? []),
    }
  } catch {
    return { status: 'unavailable', progressByKey: {} }
  }
}
