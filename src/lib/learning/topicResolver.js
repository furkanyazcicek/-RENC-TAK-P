import {
  CURRICULUM_ALIAS_SET_VERSION,
  CURRICULUM_IDENTITY_LEDGER_VERSION,
} from './curriculumIdentityLedger.js'
import {
  findCurriculumIdentityCandidates,
  getCurriculumContextByExamType,
  getCurriculumSubjectByPath,
  getCurriculumTopicById,
  isSourceScopedIdentity,
  normalizeIdentityLabel,
  resolveLegacyTopicId,
  suggestCurriculumIdentityCandidates,
} from './curriculumIdentity.js'

export const TOPIC_RESOLVER_VERSION = 'topic-resolver@1'

export const TOPIC_RESOLUTION_STATUSES = Object.freeze([
  'direct_stable_id',
  'legacy_redirect',
  'verified_alias',
  'unique_with_explicit_context',
  'ambiguous',
  'unmatched',
  'source_scope_only',
  'subject_scope_only',
  'context_scope_only',
  'non_learning_source',
])

const EXPLICIT_CONTEXT_ORIGINS = new Set(['source_record', 'catalog', 'route', 'user_selection'])

const publicCandidate = (candidate) => ({
  canonicalId: candidate.id,
  educationContextId: getCurriculumContextByExamType(candidate.examType)?.id ?? null,
  examType: candidate.examType,
  subjectId: candidate.subjectId,
  subject: candidate.subject,
  topic: candidate.displayName,
})

function result(status, values = {}) {
  return {
    status,
    canonicalId: null,
    educationContextId: null,
    subjectId: null,
    examType: null,
    subject: null,
    topic: null,
    method: status,
    confidence: 0,
    contextOrigin: 'unknown',
    candidates: [],
    suggestions: [],
    legacyRedirect: null,
    quarantineReason: null,
    sourceCode: null,
    identityNamespace: 'curriculum',
    gradeLevel: null,
    language: null,
    atlas: null,
    contentVersion: null,
    objectiveId: null,
    matchedInputLevel: null,
    canonicalPath: null,
    confidenceClass: 'unresolved',
    resolverVersion: TOPIC_RESOLVER_VERSION,
    ledgerVersion: CURRICULUM_IDENTITY_LEDGER_VERSION,
    aliasSetVersion: CURRICULUM_ALIAS_SET_VERSION,
    ...values,
  }
}

function resolved(status, topic, values = {}) {
  const contextId = getCurriculumContextByExamType(topic.examType)?.id ?? null
  return result(status, {
    canonicalId: topic.id,
    educationContextId: contextId,
    subjectId: topic.subjectId,
    examType: topic.examType,
    subject: topic.subject,
    topic: topic.displayName,
    confidence: 1,
    confidenceClass: 'verified',
    candidates: [publicCandidate(topic)],
    canonicalPath: {
      namespace: 'curriculum',
      educationContextId: contextId,
      examType: topic.examType,
      gradeLevel: values.gradeLevel ?? null,
      subjectId: topic.subjectId,
      subject: topic.subject,
      topicId: topic.id,
      topic: topic.displayName,
      objectiveId: null,
      contentVersion: values.contentVersion ?? null,
    },
    ...values,
  })
}

/**
 * Saf ve ihtiyatlı ortak çözümleyici.
 *
 * `profile_hint` yalnız aday sırasını etkiler; eşleşmeyi daraltmaz. Ders
 * verildiyse başka derste arama yapılmaz. İçerme eşleşmeleri yalnız öneridir.
 */
export function resolveTopicIdentity(input = {}) {
  const contextOrigin = input.contextOrigin ?? 'unknown'
  const envelope = {
    sourceCode: input.sourceCode ?? null,
    gradeLevel: input.gradeLevel ?? input.level ?? null,
    language: input.language ?? null,
    atlas: input.atlas ?? null,
    contentVersion: input.contentVersion ?? null,
  }

  if (input.topicMatched === false) {
    return result('unmatched', {
      ...envelope,
      method: 'source_declared_unmatched',
      contextOrigin,
      quarantineReason: 'SOURCE_TOPIC_MATCH_FALSE',
    })
  }

  if (input.identityScope === 'non_learning') {
    return result('non_learning_source', {
      ...envelope,
      identityNamespace: 'non_learning',
      method: 'registry_exclusion',
      contextOrigin,
      quarantineReason: 'NON_LEARNING_SOURCE',
    })
  }

  if (input.identityScope === 'language' || input.identityScope === 'atlas') {
    const expectedSourcePrefix = input.sourceCode
      ? `drkoc:${input.identityScope}:${String(input.sourceCode).toLowerCase()}:`
      : null
    if (
      !isSourceScopedIdentity(input.sourceScopedId, input.identityScope) ||
      (expectedSourcePrefix && !String(input.sourceScopedId).startsWith(expectedSourcePrefix))
    ) {
      return result('unmatched', {
        ...envelope,
        identityNamespace: input.identityScope,
        method: 'invalid_source_scoped_id',
        contextOrigin,
        quarantineReason: 'INVALID_SOURCE_SCOPED_ID',
      })
    }
    const related = input.relatedCurriculumVerified === true && input.relatedCurriculumId
      ? getCurriculumTopicById(input.relatedCurriculumId)
      : null
    return result('source_scope_only', {
      ...envelope,
      identityNamespace: input.identityScope,
      canonicalId: input.sourceScopedId,
      method: `${input.identityScope}_local_identity`,
      confidence: 1,
      contextOrigin,
      relatedCurriculumId: related?.id ?? null,
      confidenceClass: 'verified',
      canonicalPath: {
        namespace: input.identityScope,
        educationContextId: null,
        examType: null,
        gradeLevel: envelope.gradeLevel,
        subjectId: null,
        subject: input.subject ?? null,
        topicId: input.sourceScopedId,
        topic: input.topic ?? null,
        objectiveId: null,
        language: envelope.language,
        atlas: envelope.atlas,
        contentVersion: envelope.contentVersion,
        relatedCurriculumId: related?.id ?? null,
      },
    })
  }

  const contextMayBeAuthoritative = EXPLICIT_CONTEXT_ORIGINS.has(contextOrigin)
  const suppliedExam = String(input.examType ?? '').trim().toUpperCase()
  const context = contextMayBeAuthoritative && suppliedExam
    ? getCurriculumContextByExamType(suppliedExam)
    : null
  if (contextMayBeAuthoritative && suppliedExam && !context) {
    return result('unmatched', {
      ...envelope,
      method: 'invalid_explicit_context',
      contextOrigin,
      quarantineReason: 'UNKNOWN_EDUCATION_CONTEXT',
    })
  }
  const explicitContext = Boolean(context)
  const explicitExam = context?.examType ?? null

  const conflictsWithExplicitPath = (topic) => explicitContext && (
    topic.examType !== explicitExam ||
    (String(input.subject ?? '').trim() && normalizeIdentityLabel(topic.subject) !== normalizeIdentityLabel(input.subject))
  )

  // Genel deneme gibi yalnız program/ders bilgisi taşıyan kaynaklar burada
  // durur; sahte konu veya kazanım üretilmez.
  if (!input.canonicalTopicId && !input.legacyTopicId && !String(input.topic ?? '').trim() && !String(input.subtopic ?? '').trim()) {
    const subject = context && input.subject
      ? getCurriculumSubjectByPath(context.examType, input.subject)
      : null
    if (subject) {
      return result('subject_scope_only', {
        ...envelope,
        canonicalId: subject.id,
        educationContextId: context.id,
        subjectId: subject.id,
        examType: context.examType,
        subject: subject.displayName,
        method: 'explicit_subject_context',
        confidence: 1,
        confidenceClass: 'verified',
        contextOrigin,
        canonicalPath: {
          namespace: 'curriculum', educationContextId: context.id,
          examType: context.examType, gradeLevel: envelope.gradeLevel,
          subjectId: subject.id, subject: subject.displayName,
          topicId: null, topic: null, objectiveId: null,
          contentVersion: envelope.contentVersion,
        },
      })
    }
    if (context) {
      return result('context_scope_only', {
        ...envelope,
        canonicalId: context.id,
        educationContextId: context.id,
        examType: context.examType,
        method: 'explicit_program_context',
        confidence: 1,
        confidenceClass: 'verified',
        contextOrigin,
        canonicalPath: {
          namespace: 'curriculum', educationContextId: context.id,
          examType: context.examType, gradeLevel: envelope.gradeLevel,
          subjectId: null, subject: null, topicId: null, topic: null,
          objectiveId: null, contentVersion: envelope.contentVersion,
        },
      })
    }
  }

  if (input.canonicalTopicId) {
    const direct = getCurriculumTopicById(input.canonicalTopicId)
    if (!direct) {
      return result('unmatched', {
        ...envelope,
        method: 'unknown_stable_id',
        contextOrigin,
        quarantineReason: 'UNKNOWN_CANONICAL_TOPIC_ID',
      })
    }
    if (conflictsWithExplicitPath(direct)) {
      return result('unmatched', {
        ...envelope,
        method: 'stable_id_context_conflict',
        contextOrigin,
        candidates: [publicCandidate(direct)],
        quarantineReason: 'CANONICAL_CONTEXT_CONFLICT',
      })
    }
    return resolved('direct_stable_id', direct, { ...envelope, contextOrigin })
  }

  if (input.legacyTopicId) {
    const redirect = resolveLegacyTopicId(input.legacyTopicId)
    const topic = redirect ? getCurriculumTopicById(redirect.canonicalId) : null
    if (!topic) {
      return result('unmatched', {
        ...envelope,
        method: 'unknown_legacy_id',
        contextOrigin,
        quarantineReason: 'UNKNOWN_LEGACY_TOPIC_ID',
      })
    }
    if (conflictsWithExplicitPath(topic)) {
      return result('unmatched', {
        ...envelope,
        method: 'legacy_id_context_conflict',
        contextOrigin,
        candidates: [publicCandidate(topic)],
        legacyRedirect: redirect,
        quarantineReason: 'LEGACY_CONTEXT_CONFLICT',
      })
    }
    return resolved('legacy_redirect', topic, {
      ...envelope,
      contextOrigin,
      legacyRedirect: redirect,
    })
  }

  const examTypes = explicitExam && getCurriculumContextByExamType(explicitExam) ? [explicitExam] : null
  let matches = []
  let matchedInputLevel = null
  for (const [level, value] of [['subtopic', input.subtopic], ['topic', input.topic]]) {
    if (!String(value ?? '').trim()) continue
    const candidates = findCurriculumIdentityCandidates({ subject: input.subject, topic: value, examTypes })
    if (candidates.length) {
      matches = candidates
      matchedInputLevel = level
      break
    }
  }

  // Profil yalnız sunum sırasıdır; iki bağlamdan birini sessizce seçemez.
  const profileExam = String(input.profileExamType ?? '').toUpperCase()
  if (profileExam) {
    matches = [...matches].sort(
      (a, b) => Number(b.topic.examType === profileExam) - Number(a.topic.examType === profileExam)
    )
  }

  if (matches.length === 1) {
    const [{ topic, matchKind }] = matches
    return resolved(explicitContext ? 'unique_with_explicit_context' : 'verified_alias', topic, {
      ...envelope,
      method: matchKind,
      confidence: matchKind === 'canonical_label' ? 1 : 0.98,
      contextOrigin,
      matchedInputLevel,
    })
  }

  if (matches.length > 1) {
    return result('ambiguous', {
      ...envelope,
      method: 'multiple_verified_candidates',
      contextOrigin,
      candidates: matches.map(({ topic }) => publicCandidate(topic)),
      quarantineReason: 'AMBIGUOUS_TOPIC_IDENTITY',
      matchedInputLevel,
      confidenceClass: 'ambiguous',
    })
  }

  const suggestions = suggestCurriculumIdentityCandidates({
    subject: input.subject,
    topic: input.subtopic ?? input.topic,
    examTypes,
  }).map(publicCandidate)

  return result('unmatched', {
    ...envelope,
    method: suggestions.length ? 'unverified_containment_suggestion' : 'no_verified_candidate',
    contextOrigin,
    suggestions,
    quarantineReason: suggestions.length ? 'UNVERIFIED_TOPIC_SIMILARITY' : 'TOPIC_NOT_FOUND',
  })
}
