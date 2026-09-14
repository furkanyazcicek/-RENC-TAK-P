import { cleanCoachingText, COACHING_TARGET_TYPES, isCanonicalLearningId } from './contract.js'

const SAFE_ROOTS = Object.freeze([
  '/kutuphane/notlar',
  '/kutuphane/sorular',
  '/soru-coz',
  '/sorular',
  '/odevler',
  '/denemeler',
  '/fizik-atlasi',
  '/kimya-atlasi',
  '/biyoloji-atlasi',
  '/cografya-atlasi',
  '/geometri-pilot',
  '/tarih-atlasi',
  '/ingilizce',
  '/almanca',
  '/fransizca',
  '/ispanyolca',
  '/gunluk-takip',
])

function slug(value) {
  return String(value ?? '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/gu, 'i').replace(/ş/gu, 's').replace(/ğ/gu, 'g')
    .replace(/ü/gu, 'u').replace(/ö/gu, 'o').replace(/ç/gu, 'c')
    .replace(/[^a-z0-9]+/gu, '-').replace(/^-|-$/gu, '')
}

export function isSafeCoachingPath(value) {
  if (typeof value !== 'string' || value.length > 500 || /[\u0000-\u001f\\]/u.test(value)) return false
  if (!value.startsWith('/') || value.startsWith('//') || value.includes('://')) return false
  let parsed
  try { parsed = new URL(value, 'https://drkoc.invalid') } catch { return false }
  if (parsed.origin !== 'https://drkoc.invalid') return false
  return SAFE_ROOTS.some((root) => parsed.pathname === root || parsed.pathname.startsWith(`${root}/`))
}

export function normalizeCoachingTarget(candidate) {
  if (!candidate || typeof candidate !== 'object') return null
  const targetType = COACHING_TARGET_TYPES.includes(candidate.target_type) ? candidate.target_type : null
  const path = isSafeCoachingPath(candidate.path) ? candidate.path : null
  const status = candidate.status === 'unavailable' ? 'unavailable' : path ? 'available' : 'unavailable'
  if (!targetType || targetType === 'none') {
    return {
      status: 'unavailable', target_type: 'none', target_ref: null, path: null,
      label: cleanCoachingText(candidate.label, 100) ?? 'Uygun içerik bulunamadı',
      unavailable_reason: cleanCoachingText(candidate.unavailable_reason, 160) ?? 'Geçerli ve erişilebilir bir hedef doğrulanamadı.',
    }
  }
  return {
    status,
    target_type: targetType,
    target_ref: cleanCoachingText(candidate.target_ref, 180),
    path: status === 'available' ? path : null,
    label: cleanCoachingText(candidate.label, 100) ?? 'Çalışmaya git',
    source_code: cleanCoachingText(candidate.source_code, 64),
    content_id: cleanCoachingText(candidate.content_id, 180),
    content_revision: cleanCoachingText(candidate.content_revision, 96),
    topic_id: isCanonicalLearningId(candidate.topic_id) ? candidate.topic_id : null,
    objective_id: isCanonicalLearningId(candidate.objective_id) ? candidate.objective_id : null,
    published: candidate.published !== false,
    accessible: candidate.accessible !== false,
    level_appropriate: candidate.level_appropriate !== false,
    completed: Boolean(candidate.completed),
    unavailable_reason: status === 'unavailable'
      ? cleanCoachingText(candidate.unavailable_reason, 160) ?? 'Hedef bağlantısı doğrulanamadı.'
      : null,
  }
}

function candidateScore(candidate, recommendation) {
  if (candidate.status !== 'available' || !candidate.published || !candidate.accessible || !candidate.level_appropriate) return -1
  if (candidate.completed && recommendation.recommendation_type !== 'repeat') return -1
  let score = 0
  if (candidate.topic_id && candidate.topic_id === recommendation.topic_id) score += 60
  if (candidate.objective_id && candidate.objective_id === recommendation.objective_id) score += 25
  if (candidate.target_type === 'question_set' && recommendation.recommendation_type === 'practice') score += 20
  if (candidate.target_type === 'lesson' && recommendation.recommendation_type === 'learn') score += 20
  if (candidate.target_type === 'language_lesson' && recommendation.recommendation_type === 'language_skill') score += 20
  if (candidate.target_type === 'atlas' && ['learn', 'practice'].includes(recommendation.recommendation_type)) score += 12
  if (candidate.content_revision) score += 4
  return score
}

export function fallbackCoachingTarget(recommendation) {
  const topic = slug(recommendation.topic_label)
  const subject = slug(recommendation.subject_label)
  const context = String(recommendation.education_context_id ?? '').split(':').at(-1)
  const query = topic ? `?konu=${encodeURIComponent(topic)}` : subject ? `?ders=${encodeURIComponent(subject)}` : ''
  if (recommendation.recommendation_type === 'practice') {
    const segments = [context, subject, topic].filter(Boolean)
    return normalizeCoachingTarget({
      target_type: 'question_filter',
      target_ref: `question-filter:${segments.join(':') || 'all'}`,
      path: `/kutuphane/sorular${segments.length ? `/${segments.join('/')}` : ''}`,
      label: topic ? `${recommendation.topic_label} sorularını aç` : 'Soru kütüphanesini aç',
    })
  }
  if (recommendation.recommendation_type === 'learn' || recommendation.recommendation_type === 'repeat') {
    const segments = [context, subject, topic].filter(Boolean)
    return normalizeCoachingTarget({
      target_type: 'lesson_filter',
      target_ref: `lesson-filter:${segments.join(':') || 'all'}`,
      path: `/kutuphane/notlar${segments.length ? `/${segments.join('/')}` : ''}`,
      label: topic ? `${recommendation.topic_label} içeriklerini aç` : 'Ders kütüphanesini aç',
    })
  }
  if (recommendation.recommendation_type === 'review_error') {
    return normalizeCoachingTarget({ target_type: 'ai_solve', target_ref: 'ai-solve-history', path: `/soru-coz/gecmis${query}`, label: 'Sorunlu çözümleri aç' })
  }
  if (recommendation.recommendation_type === 'review_exam') {
    return normalizeCoachingTarget({ target_type: 'exam', target_ref: 'exam-analysis', path: '/denemeler', label: 'Deneme analizini aç' })
  }
  if (recommendation.recommendation_type === 'language_skill') {
    const language = ['ingilizce', 'almanca', 'fransizca', 'ispanyolca'].find((item) => subject.includes(item))
    if (language) return normalizeCoachingTarget({ target_type: 'language_review', target_ref: `${language}:review`, path: `/${language}/tekrar${query}`, label: `${recommendation.subject_label} tekrarını aç` })
  }
  if (recommendation.recommendation_type === 'external_study') {
    return normalizeCoachingTarget({ target_type: 'external_log', target_ref: 'daily-log:new', path: '/gunluk-takip?yeni=1', label: 'Dış çalışmayı kaydet' })
  }
  return normalizeCoachingTarget({ target_type: 'none', label: 'Uygun içerik bulunamadı', unavailable_reason: 'Bu öneri için doğrulanmış bir içerik hedefi yok.' })
}

export function resolveCoachingTarget(recommendation, candidates = []) {
  const ranked = candidates
    .map(normalizeCoachingTarget)
    .filter(Boolean)
    .map((candidate) => ({ candidate, score: candidateScore(candidate, recommendation) }))
    .filter((item) => item.score >= 0)
    .sort((left, right) => right.score - left.score || String(left.candidate.target_ref).localeCompare(String(right.candidate.target_ref), 'tr'))
  return ranked[0]?.candidate ?? fallbackCoachingTarget(recommendation)
}

