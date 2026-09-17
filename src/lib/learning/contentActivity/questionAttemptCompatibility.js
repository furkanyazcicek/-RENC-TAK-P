const LOCAL_ATTEMPT_VERSION = 1
const LOCAL_ATTEMPT_PREFIX = 'drkoc:local-question-attempt:v1'

function questionId(question) {
  return String(question?.id ?? '')
}

function optionIds(question) {
  const options = Array.isArray(question?.options)
    ? question.options
    : Array.isArray(question?.secenekler)
      ? question.secenekler
      : []

  return options.map((option, index) => String(
    typeof option === 'string'
      ? String.fromCharCode(65 + index)
      : option?.id ?? option?.value ?? String.fromCharCode(65 + index)
  ))
}

function correctOptionId(question) {
  const ids = optionIds(question)
  const numericAnswer = Number.isInteger(question?.dogru)
    ? ids[question.dogru]
    : Number.isInteger(question?.answer)
      ? ids[question.answer]
      : null

  return String(question?.correctOptionId ?? question?.correctAnswer ?? numericAnswer ?? '')
}

function contentIdentity(test) {
  return {
    source_code: String(test?.source_code ?? ''),
    content_id: String(test?.content_id ?? test?.id ?? ''),
    content_revision: String(test?.content_revision ?? ''),
  }
}

function storageKey(userId, test) {
  const identity = contentIdentity(test)
  if (!userId || !identity.source_code || !identity.content_id || !identity.content_revision) return null
  return [
    LOCAL_ATTEMPT_PREFIX,
    userId,
    identity.source_code,
    identity.content_id,
    identity.content_revision,
  ].map((part) => encodeURIComponent(String(part))).join(':')
}

export function sanitizeLocalQuestionAnswers(test, answers = {}) {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return {}

  const safeAnswers = {}
  for (const question of test?.questions ?? []) {
    const id = questionId(question)
    const selected = answers[id]
    if (id && selected != null && optionIds(question).includes(String(selected))) {
      safeAnswers[id] = String(selected)
    }
  }
  return safeAnswers
}

export function readLocalQuestionAttempt({ storage, userId, test } = {}) {
  const key = storageKey(userId, test)
  if (!storage || !key) return null

  try {
    const saved = JSON.parse(storage.getItem(key) ?? 'null')
    const identity = contentIdentity(test)
    if (saved?.version !== LOCAL_ATTEMPT_VERSION
      || saved.user_scope !== userId
      || saved.source_code !== identity.source_code
      || saved.content_id !== identity.content_id
      || saved.content_revision !== identity.content_revision
      || !['in_progress', 'completed'].includes(saved.status)) {
      return null
    }
    return {
      ...saved,
      answers: sanitizeLocalQuestionAnswers(test, saved.answers),
    }
  } catch {
    return null
  }
}

export function saveLocalQuestionAttempt({
  storage,
  userId,
  test,
  answers,
  status = 'in_progress',
  now = () => new Date().toISOString(),
} = {}) {
  const key = storageKey(userId, test)
  if (!storage || !key || !['in_progress', 'completed'].includes(status)) return null

  const identity = contentIdentity(test)
  const record = {
    version: LOCAL_ATTEMPT_VERSION,
    user_scope: userId,
    ...identity,
    status,
    answers: sanitizeLocalQuestionAnswers(test, answers),
    updated_at: now(),
  }

  try {
    storage.setItem(key, JSON.stringify(record))
    return record
  } catch {
    return null
  }
}

export function clearLocalQuestionAttempt({ storage, userId, test } = {}) {
  const key = storageKey(userId, test)
  if (!storage || !key) return false
  try {
    storage.removeItem(key)
    return true
  } catch {
    return false
  }
}

export function buildLocalQuestionResult(test, answers = {}) {
  const safeAnswers = sanitizeLocalQuestionAnswers(test, answers)
  const questions = test?.questions ?? []
  const details = questions.map((question) => {
    const id = questionId(question)
    const selectedOptionId = safeAnswers[id] ?? null
    const answerId = correctOptionId(question)
    return {
      question_id: id,
      selected_option_id: selectedOptionId,
      correct_option_id: answerId,
      is_correct: selectedOptionId == null ? null : selectedOptionId === answerId,
      explanation: question?.explanation ?? question?.solution ?? question?.aciklama ?? null,
    }
  })
  const markedCount = details.filter((answer) => answer.selected_option_id != null).length
  const correctCount = details.filter((answer) => answer.is_correct === true).length
  const totalCount = details.length

  return {
    local_only: true,
    attempt_status: 'completed',
    ...contentIdentity(test),
    question_ids: questions.map(questionId),
    total_count: totalCount,
    marked_count: markedCount,
    correct_count: correctCount,
    wrong_count: markedCount - correctCount,
    empty_count: totalCount - markedCount,
    accuracy: markedCount > 0 ? correctCount / markedCount : 0,
    detail_available: true,
    answers: details,
  }
}

export function browserLocalStorage() {
  if (typeof window === 'undefined') return null
  try {
    return window.localStorage
  } catch {
    return null
  }
}
