import { sha256Hex, stableStringify } from '../network/canonical.js'

export const CONTENT_MANIFEST_VERSION = 'learning-content-manifest@1'
export const PHASE3_SOURCE_REGISTRY_VERSION = 'learning-content-registry@1'
export const PHASE3_ADAPTER_VERSION = 'learning-content-adapters@1'

const CONTENT_ID = /^[a-z0-9][a-z0-9._:/-]{1,191}$/
const SAFE_ITEM_ID = /^[^\s\p{C}][^\p{C}]{0,191}$/u

function compact(value) {
  if (Array.isArray(value)) return value.map(compact)
  if (!value || typeof value !== 'object') return value
  return Object.fromEntries(
    Object.entries(value)
      .filter(([, item]) => item !== undefined)
      .map(([key, item]) => [key, compact(item)])
  )
}

function optionId(option, index) {
  if (typeof option === 'string') return String.fromCharCode(65 + index)
  return String(option?.id ?? option?.value ?? String.fromCharCode(65 + index))
}

export function normalizeAssessmentQuestion(question, index = 0) {
  const id = String(question?.id ?? '')
  if (!SAFE_ITEM_ID.test(id)) throw new TypeError(`content_question_id_invalid:${index}`)
  const options = Array.isArray(question?.options)
    ? question.options
    : Array.isArray(question?.secenekler)
      ? question.secenekler
      : []
  const optionIds = options.map(optionId)
  if (optionIds.length < 2 || new Set(optionIds).size !== optionIds.length) {
    throw new TypeError(`content_question_options_invalid:${id}`)
  }
  const numericAnswer = Number.isInteger(question?.dogru)
    ? optionIds[question.dogru]
    : Number.isInteger(question?.answer)
      ? optionIds[question.answer]
      : null
  const correctOptionId = String(
    question?.correctOptionId ?? question?.correctAnswer ?? numericAnswer ?? ''
  )
  if (!optionIds.includes(correctOptionId)) {
    throw new TypeError(`content_question_answer_invalid:${id}`)
  }
  return compact({
    id,
    option_ids: optionIds,
    correct_option_id: correctOptionId,
    body: question?.question ?? question?.questionText ?? question?.soru ?? question?.text ?? '',
    explanation: question?.explanation ?? question?.solution ?? question?.aciklama ?? '',
    topic: question?.topic ?? question?.konu,
  })
}

export function normalizeQuestionSetForIdentity(questionSet) {
  const id = String(questionSet?.id ?? '')
  if (!CONTENT_ID.test(id)) throw new TypeError('content_set_id_invalid')
  const questions = (questionSet?.questions ?? []).map(normalizeAssessmentQuestion)
  if (!questions.length) throw new TypeError(`content_set_empty:${id}`)
  const ids = questions.map((question) => question.id)
  if (new Set(ids).size !== ids.length) throw new TypeError(`content_question_id_duplicate:${id}`)
  return compact({
    id,
    subject: questionSet.subject,
    topic: questionSet.topic,
    questions,
  })
}

export function normalizeLessonForIdentity(lesson) {
  const id = String(lesson?.slug ?? lesson?.id ?? '')
  if (!CONTENT_ID.test(id)) throw new TypeError('content_lesson_id_invalid')
  const sections = lesson?.document?.sections ?? []
  const blockIds = []
  const normalizedSections = sections.map((section, sectionIndex) => {
    const sectionId = String(section?.id ?? '')
    if (!SAFE_ITEM_ID.test(sectionId)) throw new TypeError(`content_section_id_invalid:${sectionIndex}`)
    return {
      id: sectionId,
      kind: section.kind ?? null,
      blocks: (section.blocks ?? []).map((block, blockIndex) => {
        const blockId = String(block?.id ?? '')
        if (!SAFE_ITEM_ID.test(blockId)) {
          throw new TypeError(`content_block_id_invalid:${sectionId}:${blockIndex}`)
        }
        blockIds.push(blockId)
        return compact(block)
      }),
    }
  })
  if (new Set(blockIds).size !== blockIds.length) throw new TypeError(`content_block_id_duplicate:${id}`)
  return compact({
    id,
    placement: lesson.placement,
    learning_mode: lesson.learningMode ?? lesson.learning_mode ?? 'interactive',
    document: {
      version: lesson.document?.version ?? 1,
      prerequisites: lesson.document?.prerequisites ?? [],
      outcomes: lesson.document?.outcomes ?? [],
      sections: normalizedSections,
    },
  })
}

export async function describeContent({
  sourceCode,
  contentKind,
  contentId,
  value,
  normalize = (item) => item,
  sourceOwner,
  mapping = null,
} = {}) {
  if (!CONTENT_ID.test(String(contentId ?? ''))) throw new TypeError('content_id_invalid')
  const normalized = normalize(value)
  const contentHash = await sha256Hex(stableStringify(normalized))
  return Object.freeze({
    manifest_version: CONTENT_MANIFEST_VERSION,
    source_code: sourceCode,
    content_kind: contentKind,
    content_id: String(contentId),
    content_revision: `sha256-${contentHash.slice(0, 24)}`,
    content_hash: contentHash,
    source_owner: sourceOwner,
    mapping,
  })
}

export function publicQuestionSet(questionSet, descriptor) {
  return {
    ...questionSet,
    source_code: descriptor.source_code,
    content_kind: descriptor.content_kind,
    content_id: descriptor.content_id,
    content_revision: descriptor.content_revision,
    content_hash: descriptor.content_hash,
  }
}

export async function describeBundledQuestionSet(questionSet) {
  return describeContent({
    sourceCode: 'bundled_question_test',
    contentKind: 'bundled_question_set',
    contentId: questionSet.id,
    value: questionSet,
    normalize: normalizeQuestionSetForIdentity,
    sourceOwner: 'src/content/tests',
  })
}

export async function describeBundledLesson(lesson) {
  return describeContent({
    sourceCode: 'bundled_lesson_activity',
    contentKind: 'bundled_lesson',
    contentId: lesson.slug,
    value: lesson,
    normalize: normalizeLessonForIdentity,
    sourceOwner: 'src/content/lessons',
  })
}

export async function hashActionPayload(payload) {
  return sha256Hex(stableStringify(payload))
}
