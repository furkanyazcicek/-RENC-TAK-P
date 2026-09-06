/**
 * AI Soru Çöz geçmişi için saf görünüm kuralları.
 *
 * Bu dosya React veya ağ katmanı bilmez. Geçmişin hangi sekmede
 * görüneceği, hangi sorunun tekrar beklediği ve özet cümlesinin hangi
 * konuyu öne çıkaracağı burada belirlenir; böylece arayüz ile testler aynı
 * kurala dayanır.
 */

export function normalizeHistoryText(value) {
  return String(value ?? '')
    .toLocaleLowerCase('tr-TR')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
}

export function needsReview(item) {
  if (!item || item.status !== 'ok') return false
  if (item.review_status === 'completed') return false

  return (
    item.review_status === 'pending' ||
    item.student_correct === false ||
    Number(item.help_requested ?? 0) > 0 ||
    Boolean(item.error_type)
  )
}

export function historyMatchesTab(item, tab) {
  switch (tab) {
    case 'review':
      return needsReview(item)
    case 'wrong':
      return item.status === 'ok' && item.student_correct === false
    case 'helped':
      return item.status === 'ok' && Number(item.help_requested ?? 0) > 0
    case 'checked':
      return item.status === 'ok' && Boolean(item.error_type)
    case 'failed':
      return item.status !== 'ok'
    default:
      return true
  }
}

export function filterHistory(items, { tab = 'all', query = '', subject = 'all' } = {}) {
  const needle = normalizeHistoryText(query)

  return (items ?? []).filter((item) => {
    if (!historyMatchesTab(item, tab)) return false
    if (subject !== 'all' && item.subject !== subject) return false
    if (!needle) return true

    const haystack = normalizeHistoryText(
      [
        item.subject,
        item.canonical_topic,
        item.topic,
        item.subtopic,
        item.question_text,
      ]
        .filter(Boolean)
        .join(' ')
    )

    return haystack.includes(needle)
  })
}

export function summarizeHistory(items) {
  const solved = (items ?? []).filter((item) => item.status === 'ok')
  const reviewCount = solved.filter(needsReview).length
  const topicScores = new Map()

  solved.forEach((item) => {
    const topic = item.canonical_topic ?? item.topic
    if (!topic) return
    const score = Number(item.help_requested ?? 0) + (item.student_correct === false ? 1 : 0)
    if (score <= 0) return
    topicScores.set(topic, (topicScores.get(topic) ?? 0) + score)
  })

  const focusTopic = [...topicScores.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null
  return { solvedCount: solved.length, reviewCount, focusTopic }
}

export function historyGroupForDate(value, now = new Date()) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Daha önce'

  const startToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  const days = Math.floor((startToday - startDate) / 86_400_000)

  if (days <= 0) return 'Bugün'
  if (days <= 7) return 'Bu hafta'
  return 'Daha önce'
}

const REVIEW_STORAGE_PREFIX = 'drkoc-ai-solve-reviews:'

export function readStoredReviews(userId) {
  if (!userId || typeof window === 'undefined') return {}
  try {
    const parsed = JSON.parse(window.localStorage.getItem(`${REVIEW_STORAGE_PREFIX}${userId}`))
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function rememberReview(userId, sessionId, reviewStatus) {
  if (!userId || !sessionId || typeof window === 'undefined') return
  if (!['none', 'pending', 'completed'].includes(reviewStatus)) return

  try {
    const stored = readStoredReviews(userId)
    window.localStorage.setItem(
      `${REVIEW_STORAGE_PREFIX}${userId}`,
      JSON.stringify({ ...stored, [sessionId]: reviewStatus })
    )
  } catch {
    // Depolama kapalıysa sunucu kaydı yine çalışmaya devam eder.
  }
}

export function mergeStoredReviews(items, storedReviews = {}) {
  return (items ?? []).map((item) => {
    const serverStatus = item.review_status ?? 'none'
    const localStatus = storedReviews[item.id]
    return {
      ...item,
      review_status:
        serverStatus === 'none' && ['pending', 'completed'].includes(localStatus)
          ? localStatus
          : serverStatus,
    }
  })
}
