const TRACKED_STATUSES = new Set(['in_progress', 'completed'])

function safeCount(value) {
  const number = Number(value)
  return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0
}

function timestamp(value) {
  const parsed = Date.parse(value ?? '')
  return Number.isFinite(parsed) ? parsed : 0
}

export function questionProgressKey(sourceCode, contentId) {
  if (!sourceCode || contentId == null) return null
  return `${sourceCode}:${String(contentId)}`
}

export function indexLatestQuestionProgress(rows = []) {
  const latestByKey = {}
  const ordered = [...rows].sort((left, right) => {
    const updatedDifference = timestamp(right.updated_at) - timestamp(left.updated_at)
    if (updatedDifference) return updatedDifference
    return timestamp(right.started_at) - timestamp(left.started_at)
  })

  for (const row of ordered) {
    if (!TRACKED_STATUSES.has(row?.status) || !row?.id) continue
    const key = questionProgressKey(row.source_code, row.content_id)
    if (!key || latestByKey[key]) continue

    const totalCount = safeCount(row.total_count)
    const answeredCount = Math.min(totalCount, safeCount(row.marked_count))
    latestByKey[key] = {
      attemptId: row.id,
      status: row.status,
      contentRevision: row.content_revision ?? null,
      answeredCount,
      totalCount,
      correctCount: safeCount(row.correct_count),
      wrongCount: safeCount(row.wrong_count),
      emptyCount: safeCount(row.empty_count),
      updatedAt: row.updated_at ?? row.started_at ?? null,
    }
  }

  return latestByKey
}

export function progressForQuestionSet(progressByKey, questionSet) {
  const key = questionProgressKey(
    questionSet?.source_code,
    questionSet?.content_id ?? questionSet?.id
  )
  return key ? progressByKey?.[key] ?? null : null
}

export function summarizeQuestionProgress(questionSets = [], progressByKey = {}) {
  return questionSets.reduce((summary, questionSet) => {
    const progress = progressForQuestionSet(progressByKey, questionSet)
    if (progress?.status === 'completed') summary.completed += 1
    else if (progress?.status === 'in_progress') summary.inProgress += 1
    else summary.notStarted += 1
    return summary
  }, {
    total: questionSets.length,
    completed: 0,
    inProgress: 0,
    notStarted: 0,
  })
}
