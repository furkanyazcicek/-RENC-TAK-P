export const COACHING_RECOMMENDATION_CONTRACT_VERSION = 'coaching-recommendation@1'
export const COACHING_TASK_CONTRACT_VERSION = 'coaching-task@1'
export const COACHING_OUTCOME_CONTRACT_VERSION = 'coaching-outcome@1'

export const COACHING_RECOMMENDATION_TYPES = Object.freeze([
  'learn',
  'practice',
  'repeat',
  'review_error',
  'review_exam',
  'language_skill',
  'external_study',
])

export const COACHING_CONFIDENCE_LEVELS = Object.freeze([
  'insufficient',
  'low',
  'medium',
  'high',
])

export const COACHING_TARGET_TYPES = Object.freeze([
  'lesson',
  'lesson_filter',
  'question_set',
  'question_filter',
  'ai_solve',
  'problem',
  'homework',
  'exam',
  'atlas',
  'language_lesson',
  'language_review',
  'external_log',
  'none',
])

const AMOUNT_KINDS = new Set(['minutes', 'questions', 'activities'])
const CRITERIA_KINDS = new Set([
  'content_completion',
  'minimum_count',
  'practice_result',
  'student_report',
])
const EVIDENCE_REF = /^drkoc-ref:v1:[a-z0-9._-]+:[A-Za-z0-9_-]{8,128}$/
const CANONICAL_ID = /^drkoc:[a-z0-9:_-]{4,240}$/
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const EVENT_CODE = /^[a-z][a-z0-9_]{1,63}$/
const FORBIDDEN_INSTRUCTION = /(?:ignore\s+(?:all\s+)?previous|system\s+prompt|developer\s+message|drop\s+table|service[_ -]?role|<script|javascript:|data:text\/html)/iu

export function cleanCoachingText(value, maxLength = 240) {
  if (typeof value !== 'string') return null
  const clean = value.replace(/[\u0000-\u001f\u007f]/gu, ' ').replace(/\s+/gu, ' ').trim()
  if (!clean || FORBIDDEN_INSTRUCTION.test(clean)) return null
  return clean.slice(0, maxLength)
}

export function isCanonicalLearningId(value) {
  return typeof value === 'string' && CANONICAL_ID.test(value)
}

export function isOpaqueEvidenceRef(value) {
  return typeof value === 'string' && EVIDENCE_REF.test(value)
}

export function normalizeCoachingAmount(value, fallback = null) {
  if (!value || typeof value !== 'object') return fallback
  const kind = AMOUNT_KINDS.has(value.kind) ? value.kind : null
  const amount = Math.floor(Number(value.value))
  if (!kind || !Number.isFinite(amount) || amount < 1) return fallback
  const maximum = kind === 'minutes' ? 240 : kind === 'questions' ? 200 : 30
  return { kind, value: Math.min(maximum, amount) }
}

export function normalizeSuccessCriteria(value, recommendationType) {
  const source = value && typeof value === 'object' ? value : {}
  const kind = CRITERIA_KINDS.has(source.kind)
    ? source.kind
    : recommendationType === 'external_study'
      ? 'student_report'
      : 'content_completion'
  const minimumCount = Math.max(1, Math.min(200, Math.floor(Number(source.minimum_count) || 1)))
  const evidenceTypes = [...new Set((Array.isArray(source.evidence_types) ? source.evidence_types : [])
    .filter((item) => typeof item === 'string' && EVENT_CODE.test(item)))]
    .slice(0, 12)
  const sourceCodes = [...new Set((Array.isArray(source.source_codes) ? source.source_codes : [])
    .filter((item) => typeof item === 'string' && EVENT_CODE.test(item)))]
    .slice(0, 12)
  const description = cleanCoachingText(source.description, 180)
    ?? (kind === 'student_report'
      ? 'Çalışmayı yaptığını açıkça bildirmenle tamamlanır; platform doğrulaması sayılmaz.'
      : minimumCount > 1
        ? `En az ${minimumCount} uygun çalışma kaydı oluştuğunda tamamlanır.`
        : 'Hedef çalışmadan yeni bir tamamlanma kanıtı geldiğinde tamamlanır.')
  return {
    kind,
    minimum_count: minimumCount,
    evidence_types: evidenceTypes,
    source_codes: sourceCodes,
    description,
  }
}

export function chooseCoachingAmount({ requested, confidence, recentLoadMinutes = 0, availableMinutes = null }) {
  const normalized = normalizeCoachingAmount(requested)
  if (normalized?.kind !== 'minutes') return normalized
  const confidenceCap = confidence === 'high' ? 90 : confidence === 'medium' ? 60 : 35
  const capacityCap = Number.isFinite(Number(availableMinutes)) && Number(availableMinutes) > 0
    ? Math.max(10, Math.floor(Number(availableMinutes)))
    : confidenceCap
  const loadCap = Number(recentLoadMinutes) >= 600 ? 30 : Number(recentLoadMinutes) >= 360 ? 45 : confidenceCap
  return { kind: 'minutes', value: Math.max(5, Math.min(normalized.value, confidenceCap, capacityCap, loadCap)) }
}

export function normalizeRecommendation(input, options = {}) {
  const now = new Date(options.now ?? Date.now())
  const recommendationId = typeof input?.recommendation_id === 'string' && UUID.test(input.recommendation_id)
    ? input.recommendation_id
    : options.createId?.()
  const type = COACHING_RECOMMENDATION_TYPES.includes(input?.recommendation_type)
    ? input.recommendation_type
    : null
  const subjectId = isCanonicalLearningId(input?.subject_id) ? input.subject_id : null
  const topicId = isCanonicalLearningId(input?.topic_id) ? input.topic_id : null
  const objectiveId = isCanonicalLearningId(input?.objective_id) ? input.objective_id : null
  const subjectLabel = cleanCoachingText(input?.subject_label, 80)
  const topicLabel = cleanCoachingText(input?.topic_label, 100)
  const reasonSummary = cleanCoachingText(input?.reason_summary, 280)
  const confidence = COACHING_CONFIDENCE_LEVELS.includes(input?.confidence_level)
    ? input.confidence_level
    : 'insufficient'
  const evidenceRefs = [...new Set((Array.isArray(input?.evidence_refs) ? input.evidence_refs : [])
    .filter(isOpaqueEvidenceRef))]
    .slice(0, 12)
  const limitations = [...new Set((Array.isArray(input?.data_limitations) ? input.data_limitations : [])
    .map((item) => cleanCoachingText(item, 120))
    .filter(Boolean))]
    .slice(0, 8)
  const validUntilCandidate = new Date(input?.valid_until ?? now.getTime() + 7 * 86_400_000)
  const latestValidUntil = new Date(now.getTime() + 30 * 86_400_000)
  const validUntil = Number.isNaN(validUntilCandidate.getTime()) || validUntilCandidate <= now
    ? new Date(now.getTime() + 7 * 86_400_000)
    : validUntilCandidate > latestValidUntil
      ? latestValidUntil
      : validUntilCandidate

  const errors = []
  if (!recommendationId) errors.push('recommendation_id_invalid')
  if (!type) errors.push('recommendation_type_invalid')
  if (!subjectLabel && !subjectId && type !== 'external_study') errors.push('subject_required')
  if (!reasonSummary) errors.push('reason_summary_invalid')
  if (confidence !== 'insufficient' && evidenceRefs.length === 0) errors.push('evidence_reference_required')
  if (!topicId && ['practice', 'repeat', 'review_error', 'language_skill'].includes(type)) {
    limitations.push('Kanonik konu bağı doğrulanamadı; görev genel hedefle sınırlandı.')
  }

  const amount = chooseCoachingAmount({
    requested: input?.suggested_amount,
    confidence,
    recentLoadMinutes: options.recentLoadMinutes,
    availableMinutes: options.availableMinutes,
  })
  const criteria = normalizeSuccessCriteria(input?.success_criteria, type)

  return {
    ok: errors.length === 0,
    errors,
    value: {
      contract_version: COACHING_RECOMMENDATION_CONTRACT_VERSION,
      recommendation_id: recommendationId ?? null,
      recommendation_version: Math.max(1, Math.floor(Number(input?.recommendation_version) || 1)),
      student_id: options.studentId ?? null,
      created_at: now.toISOString(),
      education_context_id: isCanonicalLearningId(input?.education_context_id) ? input.education_context_id : null,
      subject_id: subjectId,
      topic_id: topicId,
      objective_id: objectiveId,
      subject_label: subjectLabel,
      topic_label: topicLabel,
      recommendation_type: type,
      reason_summary: reasonSummary,
      evidence_refs: evidenceRefs,
      projection_generation_id: typeof input?.projection_generation_id === 'string' && UUID.test(input.projection_generation_id)
        ? input.projection_generation_id
        : null,
      confidence_level: confidence,
      data_limitations: limitations,
      suggested_amount: amount,
      success_criteria: criteria,
      decision: 'pending',
      valid_until: validUntil.toISOString(),
      status: 'proposed',
    },
  }
}
