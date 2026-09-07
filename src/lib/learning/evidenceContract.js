import { getSourceDefinition } from './sourceRegistry.js'
import {
  getCurriculumContextById,
  getCurriculumSubjectById,
  getCurriculumTopicById,
  isSourceScopedIdentity,
} from './curriculumIdentity.js'

export const LEARNING_EVIDENCE_CONTRACT_VERSION = 'learning-evidence@1'
export const LEARNING_EVIDENCE_SCHEMA_VERSION = '1.0'
export const EVIDENCE_RECORD_KINDS = Object.freeze(['event', 'snapshot', 'correction', 'tombstone', 'derived'])
export const EVIDENCE_CLASSES = Object.freeze([
  'direct_measurement',
  'student_self_report',
  'teacher_feedback',
  'exposure',
  'system_observation',
  'model_inference',
  'derived_result',
  'operational_only',
])
export const TIME_PRECISIONS = Object.freeze(['exact', 'day', 'unknown'])
export const SOURCE_AVAILABILITY_STATUSES = Object.freeze(['available', 'empty', 'unavailable', 'degraded'])
export const TOMBSTONE_REASONS = Object.freeze([
  'source_deleted',
  'duplicate',
  'student_requested',
  'account_deleted',
  'retention_expired',
  'source_invalidated',
  'privacy_withdrawal',
])
export const CORRECTION_REASONS = Object.freeze([
  'source_edited',
  'identity_remapped',
  'measurement_corrected',
  'backfill_corrected',
])

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
const UUID_ANYWHERE = /[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i
const DAY = /^\d{4}-\d{2}-\d{2}$/
const INSTANT = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,9})?(?:Z|[+-]\d{2}:\d{2})$/
const SOURCE_ID = /^[a-z0-9][a-z0-9._-]{1,63}$/
const OPAQUE_TOKEN = /^[A-Za-z0-9_-]{8,128}$/
const CANONICAL_FIELD_PATTERNS = Object.freeze({
  education_context_id: /^drkoc:curriculum:context:v\d+:/,
  subject_id: /^drkoc:curriculum:subject:v\d+:/,
  topic_id: /^drkoc:(?:curriculum:topic|language|atlas):[^\s]+$/,
  objective_id: /^drkoc:(?:curriculum:objective|language|atlas):[^\s]+$/,
})
const FORBIDDEN_METADATA_KEY = /(^raw[_-]|question[_-](text|body|prompt|content)$|^(prompt|answer|solution|message)[_-](text|body|content)$|notebook[_-](text|body|content|data)$|transcript|audio[_-](blob|url|content|data)$|video[_-](blob|url|content|data)$|image[_-](blob|url|content|data|base64)$|photo[_-](blob|url|content|data|base64)$|private[_-]?note|teacher[_-]?reply([_-](text|body|content))?$|access[_-]?token|refresh[_-]?token|secret|password|(^|[_-])(script|command|executable|javascript|html)([_-]|$))/i
const PROVENANCE = new Set(['source_record', 'server_computed', 'system_measured', 'teacher_entered', 'student_reported', 'model_inferred', 'client_interaction', 'active_measurement', 'approximate', 'default_estimate', 'unknown'])
const DIRECT_PROVENANCE = new Set(['source_record', 'server_computed', 'system_measured', 'teacher_entered', 'client_interaction', 'active_measurement'])
const DURATION_PROVENANCE = new Set(['active_measurement', 'approximate', 'default_estimate', 'student_reported'])
const STUDENT_CORRECT_PROVENANCE = new Set(['system_measured', 'student_reported', 'teacher_entered', 'model_inferred'])
const RECORD_PROVENANCE = new Set(['client_draft_server_bound', 'authoritative_source', 'backfill_snapshot', 'derived_projection'])
const RELATION_KEYS = new Set(['session_id', 'attempt_id', 'content_id', 'question_id', 'lesson_id', 'homework_id', 'exam_id', 'plan_id'])
const ACTOR_ROLES = new Set(['student', 'teacher', 'parent', 'system', 'model', 'admin'])
const KNOWN_NET_EXAM_TYPES = new Set(['LGS', 'TYT', 'AYT', 'KPSS'])

export const EVIDENCE_ERROR_MESSAGES = Object.freeze({
  EVIDENCE_NOT_OBJECT: 'Kanıt kaydı nesne olmalıdır.',
  EVIDENCE_FIELD_REQUIRED: 'Zorunlu bir kanıt alanı eksik.',
  EVIDENCE_FIELD_INVALID: 'Kanıt alanının biçimi geçersiz.',
  EVIDENCE_CONTRACT_VERSION_INVALID: 'Kanıt sözleşmesi sürümü geçersiz.',
  EVIDENCE_SCHEMA_VERSION_INVALID: 'Kanıt şema sürümü geçersiz.',
  EVIDENCE_RECORD_KIND_INVALID: 'Kanıt kayıt türü geçersiz.',
  EVIDENCE_CLASS_INVALID: 'Kanıt sınıfı geçersiz.',
  EVIDENCE_SOURCE_UNKNOWN: 'Kanıt kaynağı kayıt defterinde bulunamadı.',
  EVIDENCE_SOURCE_NOT_EMITTER: 'Bu kaynak öğrenme kanıtı üretemez.',
  EVIDENCE_SOURCE_UNAVAILABLE: 'Kullanılamayan veya eksik kaynak kanıt olayı üretemez.',
  EVIDENCE_EVENT_TYPE_NOT_ALLOWED: 'Olay türü bu kaynak için izinli değil.',
  EVIDENCE_IDENTITY_UNRESOLVED: 'Konu kimliği belirsiz veya çözümsüz.',
  EVIDENCE_MEASUREMENT_NOT_ALLOWED: 'Ölçüm alanı bu kaynak için izinli değil.',
  EVIDENCE_MEASUREMENT_INVALID: 'Ölçüm biçimi geçersiz.',
  EVIDENCE_COUNT_MISMATCH: 'Doğru, yanlış, boş ve toplam sayıları tutarsız.',
  EVIDENCE_ACCURACY_MISMATCH: 'Başarı oranı ve payda formülü tutarsız.',
  EVIDENCE_NET_MISMATCH: 'Net değeri ve sınav formülü tutarsız.',
  EVIDENCE_PROVENANCE_REQUIRED: 'Ölçümün kaynağı belirtilmelidir.',
  EVIDENCE_PROVENANCE_INVALID: 'Ölçüm kaynağı bu alan için izinli değil.',
  EVIDENCE_DIRECT_PROVENANCE_INVALID: 'Doğrudan ölçüm için güvenilir ölçüm kaynağı gerekir.',
  EVIDENCE_DIRECT_MEASUREMENT_REQUIRED: 'Doğrudan ölçüm için kaydedilmiş bir cevap veya sonuç gerekir.',
  EVIDENCE_CLASS_EVENT_MISMATCH: 'Kanıt sınıfı kaynak olayının izinli anlamıyla uyuşmuyor.',
  EVIDENCE_TIME_INVALID: 'Olay zamanı veya zaman hassasiyeti geçersiz.',
  EVIDENCE_TIME_IN_FUTURE: 'Kanıt zamanı kayıt zamanından sonra olamaz.',
  EVIDENCE_SNAPSHOT_AS_OF_REQUIRED: 'Anlık görüntü için kapsama zamanı gerekir.',
  EVIDENCE_METADATA_NOT_ALLOWED: 'Metadata alanı kaynak izin listesinde değil.',
  EVIDENCE_METADATA_FORBIDDEN: 'Ham veya özel içerik metadata içine alınamaz.',
  EVIDENCE_METADATA_LIMIT: 'Metadata boyut veya derinlik sınırını aşıyor.',
  EVIDENCE_SOURCE_LOCATOR_INVALID: 'Kaynak konumu yalnız opak iç başvuru olabilir.',
  EVIDENCE_DEDUPE_KEY_REQUIRED: 'Tekrar önleme anahtarı üretilemedi.',
  EVIDENCE_DEDUPE_INPUT_INVALID: 'Tekrar önleme girdisi geçersiz.',
  EVIDENCE_CORRECTION_TARGET_REQUIRED: 'Düzeltme hedefi ve nedeni gerekir.',
  EVIDENCE_TOMBSTONE_TARGET_REQUIRED: 'İptal kaydı hedef ve izinli neden gerektirir.',
  EVIDENCE_DERIVATION_REQUIRED: 'Türetilmiş kaydın girdileri ve yöntemi gerekir.',
  CLIENT_PRIVILEGED_FIELD: 'Bu alan yalnız güvenilen sunucu katmanı tarafından yazılabilir.',
  CLIENT_FIELD_NOT_ALLOWED: 'İstemci taslağında izin verilmeyen alan var.',
  CLIENT_SOURCE_MISMATCH: 'İstemci kaynağı sunucunun beklediği kaynakla eşleşmiyor.',
  CLIENT_RECORD_KIND_NOT_ALLOWED: 'Bu kayıt türü istemci tarafından oluşturulamaz.',
  TRUSTED_ENRICHMENT_REQUIRED: 'Güvenilen sunucu zenginleştirmesi eksik.',
})

const CLIENT_ALLOWED_FIELDS = new Set([
  'record_kind', 'semantic_event_type', 'source_code', 'source_record_id',
  'source_revision', 'client_action_id', 'occurred_at', 'occurred_on',
  'occurred_at_precision', 'as_of', 'measurement', 'metadata', 'source_locator',
  'activity_type', 'relations',
])

const CLIENT_PRIVILEGED_FIELDS = new Set([
  'record_id', 'contract_version', 'student_id', 'actor_id', 'actor_role',
  'actor_student_relation', 'recorded_at', 'evidence_class', 'evidence_strength',
  'trust_level', 'education_context_id', 'subject_id', 'topic_id', 'objective_id',
  'identity_resolution', 'dedupe_key', 'target_record_id', 'derivation',
  'schema_version', 'source_adapter_version', 'topic_resolver_version', 'provenance',
  'source_availability',
])

const MEASUREMENT_COMPANIONS = new Set([
  'accuracy_denominator', 'accuracy_formula', 'accuracy_formula_version', 'accuracy_source',
  'net_formula', 'net_formula_version', 'net_exam_type', 'net_source', 'duration_source',
  'difficulty_source', 'help_source', 'student_correct_source', 'completion_source',
])

const error = (code, path = null) => Object.freeze({
  code,
  path,
  message: EVIDENCE_ERROR_MESSAGES[code] ?? 'Kanıt doğrulaması başarısız.',
})

const finish = (errors, value = null) => ({
  ok: errors.length === 0,
  value: errors.length === 0 ? value : null,
  errors,
  quarantine: errors.length
    ? { status: 'quarantined', reasonCodes: [...new Set(errors.map((entry) => entry.code))] }
    : null,
})

const isObject = (value) => Boolean(value) && typeof value === 'object' && !Array.isArray(value)
const isFiniteNumber = (value) => typeof value === 'number' && Number.isFinite(value)
const isNonNegativeInteger = (value) => Number.isInteger(value) && value >= 0
const approx = (a, b) => Math.abs(a - b) <= 0.000001
const parseTime = (value) => typeof value === 'string' && value ? Date.parse(value) : Number.NaN

function byteLength(value) {
  const text = JSON.stringify(value)
  if (typeof TextEncoder !== 'undefined') return new TextEncoder().encode(text).length
  return unescape(encodeURIComponent(text)).length
}

function metadataShape(value, depth = 0, state = { keys: 0 }) {
  if (depth > 2) return false
  if (value === null || typeof value === 'boolean' || typeof value === 'number') return true
  if (typeof value === 'string') return value.length <= 256
  if (Array.isArray(value)) return value.length <= 12 && value.every((item) => metadataShape(item, depth + 1, state))
  if (!isObject(value)) return false
  const entries = Object.entries(value)
  state.keys += entries.length
  if (state.keys > 12) return false
  return entries.every(([key, item]) => key.length <= 64 && metadataShape(item, depth + 1, state))
}

function forbiddenMetadataPaths(value, path = 'metadata', errors = []) {
  if (Array.isArray(value)) {
    value.forEach((item, index) => forbiddenMetadataPaths(item, `${path}.${index}`, errors))
    return errors
  }
  if (!isObject(value)) return errors
  Object.entries(value).forEach(([key, item]) => {
    const itemPath = `${path}.${key}`
    if (FORBIDDEN_METADATA_KEY.test(key)) errors.push(error('EVIDENCE_METADATA_FORBIDDEN', itemPath))
    forbiddenMetadataPaths(item, itemPath, errors)
  })
  return errors
}

export function validateEvidenceMetadata(metadata, allowedMetadata = []) {
  const errors = []
  if (metadata == null) return errors
  if (!isObject(metadata)) return [error('EVIDENCE_FIELD_INVALID', 'metadata')]
  const allowed = new Set(allowedMetadata)
  for (const key of Object.keys(metadata)) {
    if (!allowed.has(key)) errors.push(error('EVIDENCE_METADATA_NOT_ALLOWED', `metadata.${key}`))
  }
  errors.push(...forbiddenMetadataPaths(metadata))
  if (!metadataShape(metadata) || byteLength(metadata) > 2048) {
    errors.push(error('EVIDENCE_METADATA_LIMIT', 'metadata'))
  }
  return errors
}

function validateProvenance(measurement, field, evidenceClass, errors) {
  const provenance = measurement[`${field}_source`]
  if (!PROVENANCE.has(provenance)) {
    errors.push(error('EVIDENCE_PROVENANCE_REQUIRED', `measurement.${field}_source`))
    return
  }
  if (evidenceClass === 'direct_measurement' && !DIRECT_PROVENANCE.has(provenance)) {
    errors.push(error('EVIDENCE_DIRECT_PROVENANCE_INVALID', `measurement.${field}_source`))
  }
}

export function validateEvidenceMeasurement(measurement, { allowedMeasurements = [], evidenceClass = null } = {}) {
  const errors = []
  if (measurement == null) return errors
  if (!isObject(measurement)) return [error('EVIDENCE_MEASUREMENT_INVALID', 'measurement')]
  const allowed = new Set(allowedMeasurements)
  for (const field of Object.keys(measurement)) {
    if (!allowed.has(field) && !MEASUREMENT_COMPANIONS.has(field)) {
      errors.push(error('EVIDENCE_MEASUREMENT_NOT_ALLOWED', `measurement.${field}`))
    }
  }

  const countFields = ['correct_count', 'incorrect_count', 'blank_count', 'marked_count', 'total_count']
  countFields.forEach((field) => {
    if (field in measurement && !isNonNegativeInteger(measurement[field])) {
      errors.push(error('EVIDENCE_MEASUREMENT_INVALID', `measurement.${field}`))
    }
  })
  const hasAnswerCounts = ['correct_count', 'incorrect_count', 'blank_count'].some((field) => field in measurement)
  if (hasAnswerCounts) {
    const correct = measurement.correct_count ?? 0
    const incorrect = measurement.incorrect_count ?? 0
    const blank = measurement.blank_count ?? 0
    if (measurement.marked_count != null && measurement.marked_count !== correct + incorrect) {
      errors.push(error('EVIDENCE_COUNT_MISMATCH', 'measurement.marked_count'))
    }
    if (measurement.total_count != null && measurement.total_count !== correct + incorrect + blank) {
      errors.push(error('EVIDENCE_COUNT_MISMATCH', 'measurement.total_count'))
    }
  }

  if ('accuracy' in measurement) {
    if (!isFiniteNumber(measurement.accuracy) || measurement.accuracy < 0 || measurement.accuracy > 1) {
      errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.accuracy'))
    } else {
      const denominatorKind = measurement.accuracy_denominator
      const denominator = denominatorKind === 'marked' ? measurement.marked_count : denominatorKind === 'total' ? measurement.total_count : null
      const expectedFormula = denominatorKind === 'marked' ? 'correct_count / marked_count' : denominatorKind === 'total' ? 'correct_count / total_count' : null
      const expectedVersion = denominatorKind === 'marked' ? 'accuracy-marked-v1' : denominatorKind === 'total' ? 'accuracy-total-v1' : null
      if (!denominator || measurement.accuracy_formula !== expectedFormula || measurement.accuracy_formula_version !== expectedVersion || !approx(measurement.accuracy, measurement.correct_count / denominator)) {
        errors.push(error('EVIDENCE_ACCURACY_MISMATCH', 'measurement.accuracy'))
      }
      validateProvenance(measurement, 'accuracy', evidenceClass, errors)
    }
  }

  if ('net_score' in measurement) {
    const examType = String(measurement.net_exam_type ?? '').toUpperCase()
    const divisor = examType === 'LGS' ? 3 : 4
    const formula = `correct_count - incorrect_count / ${divisor}`
    if (
      !KNOWN_NET_EXAM_TYPES.has(examType) ||
      !isFiniteNumber(measurement.net_score) ||
      !isNonNegativeInteger(measurement.correct_count) ||
      !isNonNegativeInteger(measurement.incorrect_count) ||
      measurement.net_formula !== formula ||
      measurement.net_formula_version !== (examType === 'LGS' ? 'net-lgs-v1' : 'net-standard-v1') ||
      !approx(measurement.net_score, measurement.correct_count - measurement.incorrect_count / divisor)
    ) {
      errors.push(error('EVIDENCE_NET_MISMATCH', 'measurement.net_score'))
    }
    validateProvenance(measurement, 'net', evidenceClass, errors)
  }

  if ('duration_minutes' in measurement) {
    if (!isFiniteNumber(measurement.duration_minutes) || measurement.duration_minutes < 0 || measurement.duration_minutes > 1440) {
      errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.duration_minutes'))
    }
    validateProvenance(measurement, 'duration', evidenceClass, errors)
    if (!DURATION_PROVENANCE.has(measurement.duration_source)) errors.push(error('EVIDENCE_PROVENANCE_INVALID', 'measurement.duration_source'))
  }
  if ('difficulty' in measurement) {
    if (!isFiniteNumber(measurement.difficulty) || measurement.difficulty < 1 || measurement.difficulty > 5) {
      errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.difficulty'))
    }
    validateProvenance(measurement, 'difficulty', evidenceClass, errors)
  }
  if ('help_used' in measurement) {
    if (typeof measurement.help_used !== 'boolean') errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.help_used'))
    validateProvenance(measurement, 'help', evidenceClass, errors)
  }
  if ('student_correct' in measurement) {
    if (typeof measurement.student_correct !== 'boolean') errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.student_correct'))
    validateProvenance(measurement, 'student_correct', evidenceClass, errors)
    if (!STUDENT_CORRECT_PROVENANCE.has(measurement.student_correct_source)) errors.push(error('EVIDENCE_PROVENANCE_INVALID', 'measurement.student_correct_source'))
  }
  if ('completion_status' in measurement) {
    if (!['not_started', 'in_progress', 'completed', 'skipped'].includes(measurement.completion_status)) {
      errors.push(error('EVIDENCE_MEASUREMENT_INVALID', 'measurement.completion_status'))
    }
    validateProvenance(measurement, 'completion', evidenceClass, errors)
  }
  return errors
}

export function validateSourceLocator(locator, sourceCode) {
  if (locator == null) return []
  if (typeof locator !== 'string' || locator.includes('://')) return [error('EVIDENCE_SOURCE_LOCATOR_INVALID', 'source_locator')]
  const match = locator.match(/^drkoc-ref:v1:([a-z0-9][a-z0-9._-]{1,63}):([A-Za-z0-9_-]{8,128})$/)
  if (!match || match[1] !== sourceCode || !SOURCE_ID.test(match[1]) || !OPAQUE_TOKEN.test(match[2]) || UUID_ANYWHERE.test(match[2])) {
    return [error('EVIDENCE_SOURCE_LOCATOR_INVALID', 'source_locator')]
  }
  return []
}

export function validateEvidenceRelations(relations) {
  if (relations == null) return []
  if (!isObject(relations)) return [error('EVIDENCE_FIELD_INVALID', 'relations')]
  const errors = []
  for (const [key, value] of Object.entries(relations)) {
    if (!RELATION_KEYS.has(key) || typeof value !== 'string' || !/^[A-Za-z0-9][A-Za-z0-9._:-]{0,127}$/.test(value)) {
      errors.push(error('EVIDENCE_FIELD_INVALID', `relations.${key}`))
    }
  }
  return errors
}

/** Boş kaynak ile okunamayan kaynağı aynı sonuca indirmeyen okuma zarfı. */
export function validateSourceAvailability(value) {
  if (!isObject(value) || !SOURCE_AVAILABILITY_STATUSES.includes(value.status)) {
    return finish([error('EVIDENCE_FIELD_INVALID', 'source_availability')])
  }
  if (value.status === 'empty' && value.record_count !== 0) {
    return finish([error('EVIDENCE_FIELD_INVALID', 'source_availability.record_count')])
  }
  if (value.status === 'available' && (!Number.isInteger(value.record_count) || value.record_count < 0)) {
    return finish([error('EVIDENCE_FIELD_INVALID', 'source_availability.record_count')])
  }
  if (['unavailable', 'degraded'].includes(value.status) && (typeof value.reason_code !== 'string' || !value.reason_code.trim())) {
    return finish([error('EVIDENCE_FIELD_REQUIRED', 'source_availability.reason_code')])
  }
  return finish([], value)
}

function isValidInstant(value) {
  return typeof value === 'string' && INSTANT.test(value) && Number.isFinite(Date.parse(value))
}

function isValidDay(value) {
  if (typeof value !== 'string' || !DAY.test(value)) return false
  const [year, month, day] = value.split('-').map(Number)
  const date = new Date(Date.UTC(year, month - 1, day))
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
}

function istanbulDay(timestamp) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Istanbul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(timestamp))
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]))
  return `${values.year}-${values.month}-${values.day}`
}

export function validateEvidenceTime(record, { now = new Date() } = {}) {
  const errors = []
  if (!TIME_PRECISIONS.includes(record.occurred_at_precision)) {
    errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at_precision'))
    return errors
  }
  const recorded = isValidInstant(record.recorded_at) ? parseTime(record.recorded_at) : Number.NaN
  if (!Number.isFinite(recorded)) errors.push(error('EVIDENCE_TIME_INVALID', 'recorded_at'))
  else if (recorded > now.getTime() + 5 * 60 * 1000) errors.push(error('EVIDENCE_TIME_IN_FUTURE', 'recorded_at'))

  if (record.occurred_at_precision === 'exact') {
    const occurred = isValidInstant(record.occurred_at) ? parseTime(record.occurred_at) : Number.NaN
    if (!Number.isFinite(occurred)) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at'))
    else if (Number.isFinite(recorded) && occurred > recorded + 5 * 60 * 1000) errors.push(error('EVIDENCE_TIME_IN_FUTURE', 'occurred_at'))
    if (record.occurred_on != null) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_on'))
  }
  if (record.occurred_at_precision === 'day') {
    if (!isValidDay(record.occurred_on) || record.occurred_at != null) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_on'))
    if (Number.isFinite(recorded) && isValidDay(record.occurred_on) && record.occurred_on > istanbulDay(recorded + 5 * 60 * 1000)) {
      errors.push(error('EVIDENCE_TIME_IN_FUTURE', 'occurred_on'))
    }
  }
  if (record.occurred_at_precision === 'unknown' && (record.occurred_at != null || record.occurred_on != null)) {
    errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at_precision'))
  }

  if (record.record_kind === 'snapshot') {
    const asOf = isValidInstant(record.as_of) ? parseTime(record.as_of) : Number.NaN
    if (!Number.isFinite(asOf)) errors.push(error('EVIDENCE_SNAPSHOT_AS_OF_REQUIRED', 'as_of'))
    else if (Number.isFinite(recorded) && asOf > recorded + 5 * 60 * 1000) errors.push(error('EVIDENCE_TIME_IN_FUTURE', 'as_of'))
  }
  return errors
}

function suspiciousDedupePart(value) {
  const text = String(value ?? '')
  return !text || /^\d{4}-\d{2}-\d{2}T/.test(text) || /^[a-f0-9]{32,128}$/i.test(text)
}

export function buildEvidenceDedupeKey(record) {
  if (!record?.student_id || !SOURCE_ID.test(record?.source_code ?? '')) {
    return { ok: false, key: null, errors: [error('EVIDENCE_DEDUPE_INPUT_INVALID', 'dedupe_key')] }
  }
  if (record.client_action_id != null) {
    if (!UUID.test(record.client_action_id)) {
      return { ok: false, key: null, errors: [error('EVIDENCE_DEDUPE_INPUT_INVALID', 'client_action_id')] }
    }
    return { ok: true, key: `client:${encodeURIComponent(record.student_id)}:${encodeURIComponent(record.source_code)}:${encodeURIComponent(record.client_action_id)}`, errors: [] }
  }
  if (
    suspiciousDedupePart(record.source_record_id) ||
    !String(record.source_revision ?? '') ||
    !record.semantic_event_type
  ) {
    return { ok: false, key: null, errors: [error('EVIDENCE_DEDUPE_KEY_REQUIRED', 'dedupe_key')] }
  }
  return {
    ok: true,
    key: `source:${[record.student_id, record.source_code, record.source_record_id, record.source_revision, record.semantic_event_type].map((part) => encodeURIComponent(String(part))).join(':')}`,
    errors: [],
  }
}

function validateKindSemantics(record) {
  const errors = []
  if (record.record_kind === 'correction' && (!record.target_record_id || !CORRECTION_REASONS.includes(record.correction_reason))) {
    errors.push(error('EVIDENCE_CORRECTION_TARGET_REQUIRED', 'target_record_id'))
  }
  if (record.record_kind === 'correction' && record.target_record_id && !UUID.test(record.target_record_id)) {
    errors.push(error('EVIDENCE_FIELD_INVALID', 'target_record_id'))
  }
  if (record.record_kind === 'tombstone' && (!record.target_record_id || !TOMBSTONE_REASONS.includes(record.tombstone_reason))) {
    errors.push(error('EVIDENCE_TOMBSTONE_TARGET_REQUIRED', 'target_record_id'))
  }
  if (record.record_kind === 'tombstone' && record.target_record_id && !UUID.test(record.target_record_id)) {
    errors.push(error('EVIDENCE_FIELD_INVALID', 'target_record_id'))
  }
  if (record.record_kind === 'derived') {
    const valid = isObject(record.derivation) && Array.isArray(record.derivation.input_record_ids) && record.derivation.input_record_ids.length > 0 && typeof record.derivation.method === 'string' && typeof record.derivation.version === 'string'
    if (!valid) errors.push(error('EVIDENCE_DERIVATION_REQUIRED', 'derivation'))
    else if (!record.derivation.input_record_ids.every((id) => UUID.test(id))) errors.push(error('EVIDENCE_FIELD_INVALID', 'derivation.input_record_ids'))
  }
  return errors
}

function validateCanonicalIdentityFields(record) {
  const errors = []
  if (record.education_context_id && !getCurriculumContextById(record.education_context_id)) {
    errors.push(error('EVIDENCE_FIELD_INVALID', 'education_context_id'))
  }
  if (record.subject_id && !getCurriculumSubjectById(record.subject_id)) {
    errors.push(error('EVIDENCE_FIELD_INVALID', 'subject_id'))
  }
  if (record.topic_id) {
    const validCurriculumTopic = record.topic_id.startsWith('drkoc:curriculum:topic:') && Boolean(getCurriculumTopicById(record.topic_id))
    const validSourceTopic = (isSourceScopedIdentity(record.topic_id, 'language') || isSourceScopedIdentity(record.topic_id, 'atlas')) &&
      record.topic_id.startsWith(`drkoc:${record.topic_id.split(':')[1]}:${record.source_code}:`)
    if (!validCurriculumTopic && !validSourceTopic) errors.push(error('EVIDENCE_FIELD_INVALID', 'topic_id'))
  }

  // Faz 1'de doğrulanmış kazanım defteri yoktur. Alan şemada vardır fakat
  // görünür etiketten veya istemciden bir kazanım kimliği uydurulamaz.
  if (record.objective_id != null) errors.push(error('EVIDENCE_IDENTITY_UNRESOLVED', 'objective_id'))

  const resolution = record.identity_resolution
  if (isObject(resolution) && !['ambiguous', 'unmatched'].includes(resolution.status)) {
    if (resolution.educationContextId != null && record.education_context_id !== resolution.educationContextId) {
      errors.push(error('EVIDENCE_FIELD_INVALID', 'education_context_id'))
    }
    if (resolution.subjectId != null && record.subject_id !== resolution.subjectId) {
      errors.push(error('EVIDENCE_FIELD_INVALID', 'subject_id'))
    }
    const resolvedTopicId = /^(drkoc:curriculum:topic:|drkoc:language:|drkoc:atlas:)/.test(resolution.canonicalId ?? '')
      ? resolution.canonicalId
      : null
    if (record.topic_id !== resolvedTopicId) errors.push(error('EVIDENCE_FIELD_INVALID', 'topic_id'))
  } else if (!resolution && (record.education_context_id || record.subject_id || record.topic_id || record.objective_id)) {
    errors.push(error('EVIDENCE_IDENTITY_UNRESOLVED', 'identity_resolution'))
  }
  return errors
}

export function validateClientEvidenceDraft(draft, { expectedSourceCode = null } = {}) {
  if (!isObject(draft)) return finish([error('EVIDENCE_NOT_OBJECT')])
  const errors = []
  for (const key of Object.keys(draft)) {
    if (CLIENT_PRIVILEGED_FIELDS.has(key)) errors.push(error('CLIENT_PRIVILEGED_FIELD', key))
    else if (!CLIENT_ALLOWED_FIELDS.has(key)) errors.push(error('CLIENT_FIELD_NOT_ALLOWED', key))
  }
  ;['record_kind', 'semantic_event_type', 'activity_type', 'source_code', 'source_record_id', 'source_revision', 'occurred_at_precision'].forEach((field) => {
    if (draft[field] == null || draft[field] === '') errors.push(error('EVIDENCE_FIELD_REQUIRED', field))
  })
  if (!['event', 'snapshot'].includes(draft.record_kind)) errors.push(error('CLIENT_RECORD_KIND_NOT_ALLOWED', 'record_kind'))
  if (draft.activity_type !== draft.semantic_event_type) errors.push(error('EVIDENCE_FIELD_INVALID', 'activity_type'))
  if (expectedSourceCode && draft.source_code !== expectedSourceCode) errors.push(error('CLIENT_SOURCE_MISMATCH', 'source_code'))
  const source = getSourceDefinition(draft.source_code)
  if (!source) errors.push(error('EVIDENCE_SOURCE_UNKNOWN', 'source_code'))
  else {
    if (!['emitter', 'conditional_emitter'].includes(source.classification)) errors.push(error('EVIDENCE_SOURCE_NOT_EMITTER', 'source_code'))
    if (!source.record_kinds.includes(draft.record_kind)) errors.push(error('CLIENT_RECORD_KIND_NOT_ALLOWED', 'record_kind'))
    if (!source.semantic_event_types.includes(draft.semantic_event_type)) errors.push(error('EVIDENCE_EVENT_TYPE_NOT_ALLOWED', 'semantic_event_type'))
    errors.push(...validateEvidenceMeasurement(draft.measurement, { allowedMeasurements: source.allowed_measurements }))
    errors.push(...validateEvidenceMetadata(draft.metadata, source.allowed_metadata))
    errors.push(...validateSourceLocator(draft.source_locator, draft.source_code))
    errors.push(...validateEvidenceRelations(draft.relations))
  }
  if (draft.client_action_id != null && !UUID.test(draft.client_action_id)) errors.push(error('EVIDENCE_FIELD_INVALID', 'client_action_id'))
  if (!TIME_PRECISIONS.includes(draft.occurred_at_precision)) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at_precision'))
  if (draft.occurred_at_precision === 'exact' && !Number.isFinite(parseTime(draft.occurred_at))) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at'))
  if (draft.occurred_at_precision === 'day' && (!DAY.test(draft.occurred_on ?? '') || draft.occurred_at != null)) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_on'))
  if (draft.occurred_at_precision === 'unknown' && (draft.occurred_at != null || draft.occurred_on != null)) errors.push(error('EVIDENCE_TIME_INVALID', 'occurred_at_precision'))
  if (draft.record_kind === 'snapshot' && !Number.isFinite(parseTime(draft.as_of))) errors.push(error('EVIDENCE_SNAPSHOT_AS_OF_REQUIRED', 'as_of'))
  return finish(errors, draft)
}

export function validateLearningEvidence(record, { now = new Date() } = {}) {
  if (!isObject(record)) return finish([error('EVIDENCE_NOT_OBJECT')])
  const errors = []
  if (record.contract_version !== LEARNING_EVIDENCE_CONTRACT_VERSION) errors.push(error('EVIDENCE_CONTRACT_VERSION_INVALID', 'contract_version'))
  if (record.schema_version !== LEARNING_EVIDENCE_SCHEMA_VERSION) errors.push(error('EVIDENCE_SCHEMA_VERSION_INVALID', 'schema_version'))
  if (!EVIDENCE_RECORD_KINDS.includes(record.record_kind)) errors.push(error('EVIDENCE_RECORD_KIND_INVALID', 'record_kind'))
  if (!EVIDENCE_CLASSES.includes(record.evidence_class)) errors.push(error('EVIDENCE_CLASS_INVALID', 'evidence_class'))
  ;['record_id', 'student_id', 'actor_id', 'actor_role', 'actor_student_relation', 'recorded_at', 'source_code', 'source_record_id', 'source_revision', 'semantic_event_type', 'activity_type', 'source_adapter_version', 'topic_resolver_version', 'provenance', 'source_availability'].forEach((field) => {
    if (!record[field]) errors.push(error('EVIDENCE_FIELD_REQUIRED', field))
  })
  if (record.record_id && !UUID.test(record.record_id)) errors.push(error('EVIDENCE_FIELD_INVALID', 'record_id'))
  if (record.student_id && !UUID.test(record.student_id)) errors.push(error('EVIDENCE_FIELD_INVALID', 'student_id'))
  if (record.actor_id && !UUID.test(record.actor_id)) errors.push(error('EVIDENCE_FIELD_INVALID', 'actor_id'))
  if (record.actor_role && !ACTOR_ROLES.has(record.actor_role)) errors.push(error('EVIDENCE_FIELD_INVALID', 'actor_role'))
  if (record.actor_student_relation && (typeof record.actor_student_relation !== 'string' || !/^[a-z][a-z0-9_]{1,63}$/.test(record.actor_student_relation))) errors.push(error('EVIDENCE_FIELD_INVALID', 'actor_student_relation'))
  if (record.source_record_id && (typeof record.source_record_id !== 'string' || record.source_record_id.length > 256 || /[\u0000-\u001f]/.test(record.source_record_id))) errors.push(error('EVIDENCE_FIELD_INVALID', 'source_record_id'))
  if (record.source_revision && (typeof record.source_revision !== 'string' || record.source_revision.length > 128 || /[\u0000-\u001f]/.test(record.source_revision))) errors.push(error('EVIDENCE_FIELD_INVALID', 'source_revision'))
  if (record.activity_type && !/^[a-z][a-z0-9_]{1,63}$/.test(record.activity_type)) errors.push(error('EVIDENCE_FIELD_INVALID', 'activity_type'))
  if (record.activity_type && record.activity_type !== record.semantic_event_type) errors.push(error('EVIDENCE_FIELD_INVALID', 'activity_type'))
  if (record.provenance && !RECORD_PROVENANCE.has(record.provenance)) errors.push(error('EVIDENCE_FIELD_INVALID', 'provenance'))
  if (record.source_availability && record.source_availability !== 'available') errors.push(error('EVIDENCE_SOURCE_UNAVAILABLE', 'source_availability'))
  const source = getSourceDefinition(record.source_code)
  if (!source) errors.push(error('EVIDENCE_SOURCE_UNKNOWN', 'source_code'))
  else {
    const isDerived = source.classification === 'derived_readonly' && record.record_kind === 'derived'
    if (!isDerived && !['emitter', 'conditional_emitter'].includes(source.classification)) errors.push(error('EVIDENCE_SOURCE_NOT_EMITTER', 'source_code'))
    if (!source.record_kinds.includes(record.record_kind)) errors.push(error('EVIDENCE_RECORD_KIND_INVALID', 'record_kind'))
    if (source.semantic_event_types.length && !source.semantic_event_types.includes(record.semantic_event_type)) errors.push(error('EVIDENCE_EVENT_TYPE_NOT_ALLOWED', 'semantic_event_type'))
    const expectedEvidenceClass = source.evidence_class_by_event?.[record.semantic_event_type]
    if (expectedEvidenceClass && record.evidence_class !== expectedEvidenceClass) errors.push(error('EVIDENCE_CLASS_EVENT_MISMATCH', 'evidence_class'))
    if (isDerived && record.evidence_class !== source.default_evidence_class) errors.push(error('EVIDENCE_CLASS_EVENT_MISMATCH', 'evidence_class'))
    errors.push(...validateEvidenceMeasurement(record.measurement, { allowedMeasurements: source.allowed_measurements, evidenceClass: record.evidence_class }))
    errors.push(...validateEvidenceMetadata(record.metadata, source.allowed_metadata))
    errors.push(...validateSourceLocator(record.source_locator, record.source_code))
    errors.push(...validateEvidenceRelations(record.relations))
  }
  if (record.identity_resolution && ['ambiguous', 'unmatched'].includes(record.identity_resolution.status)) {
    errors.push(error('EVIDENCE_IDENTITY_UNRESOLVED', 'identity_resolution'))
  }
  Object.entries(CANONICAL_FIELD_PATTERNS).forEach(([field, pattern]) => {
    if (record[field] != null && !pattern.test(record[field])) errors.push(error('EVIDENCE_FIELD_INVALID', field))
  })
  errors.push(...validateCanonicalIdentityFields(record))
  if (record.evidence_class === 'direct_measurement' && record.record_kind !== 'tombstone') {
    const measured = isObject(record.measurement) && (
      typeof record.measurement.student_correct === 'boolean' ||
      (isFiniteNumber(record.measurement.total_count) && record.measurement.total_count > 0) ||
      (isFiniteNumber(record.measurement.marked_count) && record.measurement.marked_count > 0)
    )
    if (!measured) errors.push(error('EVIDENCE_DIRECT_MEASUREMENT_REQUIRED', 'measurement'))
  }
  if (!['low', 'medium', 'high'].includes(record.evidence_strength)) errors.push(error('EVIDENCE_FIELD_INVALID', 'evidence_strength'))
  if (!['untrusted_client', 'account_bound', 'authoritative_source'].includes(record.trust_level)) errors.push(error('EVIDENCE_FIELD_INVALID', 'trust_level'))
  if (record.evidence_strength === 'high' && record.trust_level === 'untrusted_client') errors.push(error('EVIDENCE_FIELD_INVALID', 'evidence_strength'))
  errors.push(...validateEvidenceTime(record, { now }))
  errors.push(...validateKindSemantics(record))
  const dedupe = buildEvidenceDedupeKey(record)
  if (!dedupe.ok) errors.push(...dedupe.errors)
  else if (record.dedupe_key !== dedupe.key) errors.push(error('EVIDENCE_DEDUPE_INPUT_INVALID', 'dedupe_key'))
  return finish(errors, record)
}

/**
 * İstemci alanlarını önce doğrular, sonra yalnız güvenilen sunucu iddialarını
 * ekler. Çakışan ayrıcalıklı alanlar sessizce üzerine yazılmaz: taslak baştan
 * reddedilir.
 */
export function enrichTrustedEvidence(draft, trusted, { expectedSourceCode = null, now = new Date() } = {}) {
  const client = validateClientEvidenceDraft(draft, { expectedSourceCode })
  if (!client.ok) return client
  if (!isObject(trusted) || !trusted.record_id || !trusted.student_id || !trusted.actor_id || !trusted.recorded_at) {
    return finish([error('TRUSTED_ENRICHMENT_REQUIRED')])
  }
  const source = getSourceDefinition(draft.source_code)
  const record = {
    ...draft,
    record_id: trusted.record_id,
    contract_version: LEARNING_EVIDENCE_CONTRACT_VERSION,
    schema_version: LEARNING_EVIDENCE_SCHEMA_VERSION,
    student_id: trusted.student_id,
    actor_id: trusted.actor_id,
    actor_role: trusted.actor_role ?? 'student',
    actor_student_relation: trusted.actor_student_relation ?? source?.actor_student_relation ?? 'authenticated_student',
    recorded_at: trusted.recorded_at,
    activity_type: draft.activity_type ?? draft.semantic_event_type,
    source_adapter_version: trusted.source_adapter_version ?? 'learning-source-adapters@1',
    topic_resolver_version: trusted.topic_resolver_version ?? 'topic-resolver@1',
    provenance: trusted.provenance ?? 'client_draft_server_bound',
    source_availability: trusted.source_availability ?? 'available',
    evidence_class: trusted.evidence_class ?? source?.default_evidence_class,
    evidence_strength: trusted.evidence_strength ?? 'low',
    trust_level: trusted.trust_level ?? 'account_bound',
    education_context_id: trusted.education_context_id ?? null,
    subject_id: trusted.subject_id ?? null,
    topic_id: trusted.topic_id ?? null,
    objective_id: trusted.objective_id ?? null,
    identity_resolution: trusted.identity_resolution ?? null,
  }
  const dedupe = buildEvidenceDedupeKey(record)
  if (!dedupe.ok) return finish(dedupe.errors)
  record.dedupe_key = dedupe.key
  return validateLearningEvidence(record, { now })
}

/**
 * Salt okunur güncel görünüm: event append edilir, snapshot'ın yalnız son
 * sürümü etkin kalır, correction hedefini değiştirir, tombstone hedefi
 * geri getirilemeyecek biçimde görünümden çıkarır. Kaynak kayıtları silinmez.
 */
export function projectEvidenceHistory(records = []) {
  const ordered = [...records].sort((a, b) => {
    const time = parseTime(a.recorded_at) - parseTime(b.recorded_at)
    return time || String(a.record_id).localeCompare(String(b.record_id))
  })
  const seenDedupe = new Set()
  const active = new Map()
  const latestSnapshot = new Map()
  const snapshotFamilyByRecord = new Map()
  const duplicates = []
  const superseded = []
  const tombstoned = []

  for (const record of ordered) {
    if (!record?.record_id || !record?.dedupe_key) continue
    if (seenDedupe.has(record.dedupe_key)) {
      duplicates.push(record.record_id)
      continue
    }
    seenDedupe.add(record.dedupe_key)

    if (record.record_kind === 'tombstone') {
      if (active.delete(record.target_record_id)) tombstoned.push(record.target_record_id)
      const family = snapshotFamilyByRecord.get(record.target_record_id)
      if (family && latestSnapshot.get(family) === record.target_record_id) latestSnapshot.delete(family)
      continue
    }
    if (record.record_kind === 'correction') {
      if (active.delete(record.target_record_id)) superseded.push(record.target_record_id)
      const family = snapshotFamilyByRecord.get(record.target_record_id)
      if (family) {
        const previous = latestSnapshot.get(family)
        if (previous && previous !== record.target_record_id && active.delete(previous)) superseded.push(previous)
        latestSnapshot.set(family, record.record_id)
        snapshotFamilyByRecord.set(record.record_id, family)
      }
      active.set(record.record_id, record)
      continue
    }
    if (record.record_kind === 'snapshot') {
      const key = `${record.student_id}|${record.source_code}|${record.source_record_id}|${record.semantic_event_type}`
      const previous = latestSnapshot.get(key)
      if (previous && active.delete(previous)) superseded.push(previous)
      latestSnapshot.set(key, record.record_id)
      snapshotFamilyByRecord.set(record.record_id, key)
    }
    active.set(record.record_id, record)
  }

  return Object.freeze({
    active: Object.freeze([...active.values()]),
    duplicates: Object.freeze(duplicates),
    superseded: Object.freeze(superseded),
    tombstoned: Object.freeze(tombstoned),
  })
}
