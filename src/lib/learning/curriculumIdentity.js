import { foldTr } from '../subjectSplit.js'
import {
  CURRICULUM_ALIAS_SET_VERSION,
  CURRICULUM_CONTEXT_LEDGER,
  CURRICULUM_IDENTITY_LEDGER_VERSION,
  CURRICULUM_SUBJECT_LEDGER,
  CURRICULUM_TOPIC_LEDGER,
} from './curriculumIdentityLedger.js'

export const CURRICULUM_IDENTITY_VERSION = 'curriculum-identity@1'

export function normalizeIdentityLabel(value) {
  return foldTr(String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

const contextRecords = CURRICULUM_CONTEXT_LEDGER.map(([id, examType, displayName]) =>
  Object.freeze({ id, examType, displayName })
)

const subjectRecords = CURRICULUM_SUBJECT_LEDGER.map(([id, examType, displayName]) =>
  Object.freeze({ id, examType, displayName })
)

const topicRecords = CURRICULUM_TOPIC_LEDGER.map(
  ([id, examType, subjectId, subject, displayName, aliases, prerequisiteIds]) =>
    Object.freeze({
      id,
      examType,
      subjectId,
      subject,
      displayName,
      aliases: Object.freeze([...aliases]),
      prerequisiteIds: Object.freeze([...prerequisiteIds]),
      legacyId: legacyTopicKey(examType, subject, displayName),
    })
)

const contextsById = new Map(contextRecords.map((row) => [row.id, row]))
const contextsByExamType = new Map(contextRecords.map((row) => [row.examType, row]))
const subjectsById = new Map(subjectRecords.map((row) => [row.id, row]))
const topicsById = new Map(topicRecords.map((row) => [row.id, row]))
const topicsByLegacyId = new Map()
for (const topic of topicRecords) {
  for (const label of [topic.displayName, ...topic.aliases]) {
    const key = legacyTopicKey(topic.examType, topic.subject, label)
    const candidates = topicsByLegacyId.get(key) ?? []
    if (!candidates.some((candidate) => candidate.id === topic.id)) candidates.push(topic)
    topicsByLegacyId.set(key, candidates)
  }
}

const exactIndex = new Map()
for (const topic of topicRecords) {
  const subjectKey = normalizeIdentityLabel(topic.subject)
  const labels = [topic.displayName, ...topic.aliases]
  labels.forEach((label, position) => {
    const labelKey = normalizeIdentityLabel(label)
    if (!labelKey) return
    const key = `${subjectKey}|${labelKey}`
    const current = exactIndex.get(key) ?? []
    if (!current.some((candidate) => candidate.topic.id === topic.id)) {
      current.push({ topic, matchKind: position === 0 ? 'canonical_label' : 'verified_alias' })
      exactIndex.set(key, current)
    }
  })
}

export function legacyTopicKey(examType, subject, topic) {
  return `${String(examType ?? '').trim()}|${String(subject ?? '').trim()}|${String(topic ?? '').trim()}`
}

export function getCurriculumContextById(id) {
  return contextsById.get(id) ?? null
}

export function getCurriculumContextByExamType(examType) {
  return contextsByExamType.get(String(examType ?? '').trim().toUpperCase()) ?? null
}

export function getCurriculumSubjectById(id) {
  return subjectsById.get(id) ?? null
}

export function getCurriculumSubjectByPath(examType, subject) {
  const wantedExam = String(examType ?? '').trim().toUpperCase()
  const wantedSubject = normalizeIdentityLabel(subject)
  if (!wantedExam || !wantedSubject) return null
  return subjectRecords.find(
    (record) =>
      record.examType === wantedExam &&
      normalizeIdentityLabel(record.displayName) === wantedSubject
  ) ?? null
}

export function resolveCurriculumSubjectIdentity({ examType, subject, contextOrigin = 'source_record' }) {
  const context = getCurriculumContextByExamType(examType)
  const subjectRecord = context ? getCurriculumSubjectByPath(context.examType, subject) : null
  if (!context || !subjectRecord) {
    return Object.freeze({
      status: 'unmatched',
      educationContextId: context?.id ?? null,
      subjectId: null,
      contextOrigin,
      ledgerVersion: CURRICULUM_IDENTITY_LEDGER_VERSION,
    })
  }
  return Object.freeze({
    status: 'subject_scope_only',
    educationContextId: context.id,
    subjectId: subjectRecord.id,
    examType: context.examType,
    subject: subjectRecord.displayName,
    contextOrigin,
    ledgerVersion: CURRICULUM_IDENTITY_LEDGER_VERSION,
  })
}

export function getCurriculumTopicById(id) {
  return topicsById.get(id) ?? null
}

export function canonicalTopicIdForLegacyPath(examType, subject, topic) {
  const candidates = topicsByLegacyId.get(legacyTopicKey(examType, subject, topic)) ?? []
  return candidates.length === 1 ? candidates[0].id : null
}

export function resolveLegacyTopicId(legacyId) {
  const requestedLegacyId = String(legacyId ?? '').trim()
  const candidates = topicsByLegacyId.get(requestedLegacyId) ?? []
  if (candidates.length !== 1) return null
  const [topic] = candidates
  return Object.freeze({
    legacyId: requestedLegacyId,
    canonicalLegacyId: topic.legacyId,
    canonicalId: topic.id,
    redirectType: topic.legacyId === requestedLegacyId ? 'permanent' : 'versioned_alias',
    ledgerVersion: CURRICULUM_IDENTITY_LEDGER_VERSION,
  })
}

export function listCurriculumTopics({ examTypes = null, subject = null } = {}) {
  const allowed = examTypes ? new Set(examTypes.map((value) => String(value).toUpperCase())) : null
  const subjectKey = subject ? normalizeIdentityLabel(subject) : null
  return topicRecords.filter(
    (topic) =>
      (!allowed || allowed.has(topic.examType)) &&
      (!subjectKey || normalizeIdentityLabel(topic.subject) === subjectKey)
  )
}

/**
 * Yalnız kayıtlı ad ve takma adları döndürür. İçerme/benzerlik hiçbir zaman
 * kanonik kimlik üretmez; o tür sonuçlar yalnız öneri olarak ayrı tutulur.
 */
export function findCurriculumIdentityCandidates({ subject, topic, examTypes = null }) {
  const subjectKey = normalizeIdentityLabel(subject)
  const topicKey = normalizeIdentityLabel(topic)
  if (!subjectKey || !topicKey) return []
  const allowed = examTypes ? new Set(examTypes.map((value) => String(value).toUpperCase())) : null
  return (exactIndex.get(`${subjectKey}|${topicKey}`) ?? []).filter(
    ({ topic: candidate }) => !allowed || allowed.has(candidate.examType)
  )
}

export function suggestCurriculumIdentityCandidates({ subject, topic, examTypes = null, limit = 8 }) {
  const subjectKey = normalizeIdentityLabel(subject)
  const topicKey = normalizeIdentityLabel(topic)
  if (!subjectKey || topicKey.length < 5) return []
  return listCurriculumTopics({ examTypes, subject })
    .filter((candidate) => {
      const keys = [candidate.displayName, ...candidate.aliases].map(normalizeIdentityLabel)
      return keys.some((key) => key.includes(topicKey) || topicKey.includes(key))
    })
    .slice(0, Math.max(0, limit))
}

export function createSourceScopedIdentity({ scope, sourceCode, localId }) {
  const normalizedScope = String(scope ?? '').toLowerCase()
  const normalizedSource = String(sourceCode ?? '').toLowerCase()
  const normalizedLocal = String(localId ?? '').trim()
  if (!['language', 'atlas'].includes(normalizedScope)) return null
  if (!/^[a-z0-9][a-z0-9._-]{1,63}$/.test(normalizedSource)) return null
  if (!/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(normalizedLocal)) return null
  return `drkoc:${normalizedScope}:${normalizedSource}:v1:${normalizedLocal}`
}

export function isSourceScopedIdentity(value, scope = null) {
  const match = String(value ?? '').match(/^drkoc:(language|atlas):[a-z0-9][a-z0-9._-]{1,63}:v1:[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/)
  return Boolean(match && (!scope || match[1] === scope))
}

/** Yapısal denetim; testlerde güncel graph ile ayrıca karşılaştırılır. */
export function validateCurriculumIdentityLedger() {
  const errors = []
  const ids = new Set()
  for (const record of [...contextRecords, ...subjectRecords, ...topicRecords]) {
    if (ids.has(record.id)) errors.push({ code: 'IDENTITY_DUPLICATE_ID', id: record.id })
    ids.add(record.id)
  }
  for (const topic of topicRecords) {
    if (!contextsByExamType.has(topic.examType)) {
      errors.push({ code: 'IDENTITY_CONTEXT_NOT_FOUND', id: topic.id })
    }
    if (!subjectsById.has(topic.subjectId)) {
      errors.push({ code: 'IDENTITY_SUBJECT_NOT_FOUND', id: topic.id })
    }
    topic.prerequisiteIds.forEach((id) => {
      if (!id || !topicsById.has(id)) errors.push({ code: 'IDENTITY_PREREQUISITE_NOT_FOUND', id: topic.id })
    })
  }
  return {
    ok: errors.length === 0,
    errors,
    counts: {
      contexts: contextRecords.length,
      subjects: subjectRecords.length,
      topics: topicRecords.length,
      aliases: topicRecords.reduce((sum, topic) => sum + topic.aliases.length, 0),
      prerequisites: topicRecords.reduce((sum, topic) => sum + topic.prerequisiteIds.length, 0),
      unresolvedPrerequisites: topicRecords.reduce(
        (sum, topic) => sum + topic.prerequisiteIds.filter((id) => !id || !topicsById.has(id)).length,
        0
      ),
      legacyRedirects: [...topicsByLegacyId.values()].filter((candidates) => candidates.length === 1).length,
    },
    ledgerVersion: CURRICULUM_IDENTITY_LEDGER_VERSION,
    aliasSetVersion: CURRICULUM_ALIAS_SET_VERSION,
  }
}

export const CURRICULUM_CONTEXTS = Object.freeze(contextRecords)
export const CURRICULUM_SUBJECTS = Object.freeze(subjectRecords)
export const CURRICULUM_TOPICS = Object.freeze(topicRecords)
