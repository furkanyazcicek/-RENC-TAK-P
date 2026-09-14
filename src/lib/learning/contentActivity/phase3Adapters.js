import {
  adaptAtlasSnapshot,
  adaptBundledLessonEvent,
  adaptContentExposure,
  adaptQuestionTestResult,
  adaptStructuredLessonEvent,
} from '../adapters.js'
import { PHASE3_ADAPTER_VERSION, PHASE3_SOURCE_REGISTRY_VERSION } from './identity.js'

function withPhase3Identity(adapted, sourceRecordId, sourceRevision, recordKind) {
  return Object.freeze({
    ...adapted,
    adapterVersion: PHASE3_ADAPTER_VERSION,
    draft: Object.freeze({
      ...adapted.draft,
      source_record_id: sourceRecordId,
      source_revision: sourceRevision,
      record_kind: recordKind ?? adapted.draft.record_kind,
    }),
    persistence: Object.freeze({
      source_registry_version: PHASE3_SOURCE_REGISTRY_VERSION,
      source_adapter_version: PHASE3_ADAPTER_VERSION,
      topic_resolver_version: 'topic-resolver@1',
    }),
  })
}

export function adaptPhase3LessonEvent(record, context = {}) {
  const adapted = record.is_bundled
    ? adaptBundledLessonEvent(record, context)
    : adaptStructuredLessonEvent(record, context)
  if (!record.activity_id) throw new TypeError('lesson_activity_id_required')
  return withPhase3Identity(
    adapted,
    String(record.activity_id),
    String(context.contentRevision ?? context.sourceRevision),
    record.record_kind
  )
}

export function adaptPhase3NoteOpen(record, context = {}) {
  const adapted = adaptContentExposure(record, context)
  if (!record.exposure_id) throw new TypeError('note_exposure_id_required')
  return withPhase3Identity(adapted, String(record.exposure_id), String(context.contentRevision))
}

export function adaptPhase3QuestionResult(record, context = {}) {
  const adapted = adaptQuestionTestResult(record, context)
  if (!record.attempt_id) throw new TypeError('question_attempt_id_required')
  const isAnswer = (record.semantic_event_type ?? 'test_completed') === 'question_answered'
  if (isAnswer && !record.question_id) throw new TypeError('question_id_required')
  const sourceRecordId = isAnswer
    ? `${record.attempt_id}:${record.question_id}`
    : String(record.attempt_id)
  const revisionSuffix = isAnswer ? `:answer-${record.answer_revision ?? 1}` : ':final'
  return withPhase3Identity(
    adapted,
    sourceRecordId,
    `${context.contentRevision}${revisionSuffix}`,
    record.record_kind
  )
}

export function adaptPhase3AtlasState(record, context = {}) {
  const adapted = adaptAtlasSnapshot(record, context)
  if (!record.state_id) throw new TypeError('atlas_state_id_required')
  return withPhase3Identity(
    adapted,
    String(record.state_id),
    `${context.contentRevision}:state-${record.state_revision ?? 1}`,
    record.record_kind
  )
}
