import {
  buildEvidenceDedupeKey,
  enrichTrustedEvidence,
  validateClientEvidenceDraft,
  validateLearningEvidence,
} from '../evidenceContract.js'
import { SOURCE_ADAPTERS, trustedAdapterClaims } from '../adapters.js'
import { CURRICULUM_IDENTITY_VERSION } from '../curriculumIdentity.js'
import {
  CURRICULUM_ALIAS_SET_VERSION,
  CURRICULUM_IDENTITY_LEDGER_VERSION,
} from '../curriculumIdentityLedger.js'
import { getSourceDefinition, SOURCE_REGISTRY_VERSION } from '../sourceRegistry.js'
import { buildSemanticFingerprint } from './canonical.js'
import { createLearningNetworkMetrics } from './metrics.js'
import { safeNetworkResult } from './errors.js'

const TRUSTED_ONLY_FIELDS = new Set([
  'record_id', 'contract_version', 'schema_version', 'source_registry_version', 'student_id',
  'actor_id', 'actor_role', 'actor_student_relation', 'recorded_at', 'evidence_class',
  'evidence_strength', 'trust_level', 'provenance', 'source_availability',
  'education_context_id', 'subject_id', 'topic_id', 'objective_id', 'identity_resolution',
  'source_adapter_version', 'topic_resolver_version', 'curriculum_identity_version',
  'curriculum_ledger_version', 'curriculum_aliases_version', 'dedupe_key',
  'semantic_fingerprint', 'target_record_id', 'correction_reason', 'tombstone_reason',
  'derivation', 'retention_class', 'origin', 'backfill_run_id', 'ingestion_sequence',
])

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

function validationResult(errors) {
  return safeNetworkResult('validation_rejected', {
    reasonCodes: errors.map((entry) => entry.code),
  })
}

function trustedFieldErrors(draft) {
  if (!draft || typeof draft !== 'object' || Array.isArray(draft)) return []
  return Object.keys(draft)
    .filter((key) => TRUSTED_ONLY_FIELDS.has(key))
    .map(() => ({ code: 'CLIENT_PRIVILEGED_FIELD' }))
}

function verifyBoundary(ownership, sourceCode) {
  if (!ownership || !['source_specific_verified', 'backfill_provider_verified'].includes(ownership.proof)) {
    return safeNetworkResult('unauthorized')
  }
  if (!UUID.test(ownership.studentId ?? '') || !UUID.test(ownership.actorId ?? '')) {
    return safeNetworkResult('unauthorized')
  }
  if (ownership.sourceCode !== sourceCode) return safeNetworkResult('source_record_not_owned')
  if (ownership.principalStudentId && ownership.principalStudentId !== ownership.studentId) {
    return safeNetworkResult('source_record_not_owned')
  }
  if (ownership.actorRole === 'parent') return safeNetworkResult('unauthorized')
  if (ownership.actorRole === 'teacher' && ownership.actorStudentRelation !== 'authorized_teacher') {
    return safeNetworkResult('unauthorized')
  }
  return null
}

function sourcePermission(source, { recordKind = null, eventType = null, baseIngest = true } = {}) {
  if (!source) return safeNetworkResult('source_not_allowed', { reasonCodes: ['EVIDENCE_SOURCE_UNKNOWN'] })
  if (baseIngest && !['emitter', 'conditional_emitter'].includes(source.classification)) {
    return safeNetworkResult('source_not_allowed', { reasonCodes: ['EVIDENCE_SOURCE_NOT_EMITTER'] })
  }
  if (recordKind && !source.record_kinds.includes(recordKind)) {
    return safeNetworkResult('source_not_allowed', { reasonCodes: ['EVIDENCE_RECORD_KIND_INVALID'] })
  }
  if (eventType && !source.semantic_event_types.includes(eventType)) {
    return safeNetworkResult('source_not_allowed', { reasonCodes: ['EVIDENCE_EVENT_TYPE_NOT_ALLOWED'] })
  }
  return null
}

function identityIsUnresolved(adapted) {
  const resolution = adapted?.identityResolution
  return Boolean(
    adapted?.eligibility?.status === 'ineligible' ||
      ['ambiguous', 'unmatched'].includes(resolution?.status) ||
      resolution?.quarantineReason
  )
}

function identityReasonCodes(adapted) {
  return [
    adapted?.eligibility?.reasonCode,
    adapted?.identityResolution?.quarantineReason,
    adapted?.identityResolution?.status === 'ambiguous' ? 'IDENTITY_AMBIGUOUS' : null,
    adapted?.identityResolution?.status === 'unmatched' ? 'IDENTITY_UNMATCHED' : null,
  ].filter(Boolean)
}

function safeIdentitySummary(resolution) {
  if (!resolution || typeof resolution !== 'object') return null
  const allowed = [
    'status', 'canonicalId', 'educationContextId', 'subjectId', 'method',
    'confidence', 'contextOrigin', 'quarantineReason', 'sourceCode',
    'identityNamespace', 'objectiveId', 'matchedInputLevel', 'confidenceClass',
    'resolverVersion', 'ledgerVersion', 'aliasSetVersion',
  ]
  return Object.fromEntries(
    allowed.filter((key) => resolution[key] !== undefined).map((key) => [key, resolution[key]])
  )
}

function addPersistenceClaims(record, source, { origin = 'live', backfillRunId = null } = {}) {
  return {
    ...record,
    identity_resolution: safeIdentitySummary(record.identity_resolution),
    source_registry_version: SOURCE_REGISTRY_VERSION,
    curriculum_identity_version: CURRICULUM_IDENTITY_VERSION,
    curriculum_ledger_version: CURRICULUM_IDENTITY_LEDGER_VERSION,
    curriculum_aliases_version: CURRICULUM_ALIAS_SET_VERSION,
    retention_class: source.retention_class,
    origin,
    backfill_run_id: backfillRunId,
  }
}

/**
 * Kaynak-özel sahiplik sarmalamasından sonra kullanılan tek orkestrasyon girişi.
 * Repository, internal SQL fonksiyonuna erişimi olan dar sunucu katmanıdır.
 */
export function createLearningEvidenceIngestor({
  repository,
  now = () => new Date(),
  uuid = () => globalThis.crypto.randomUUID(),
  metrics = createLearningNetworkMetrics(),
} = {}) {
  if (!repository?.ingest || !repository?.quarantine) throw new TypeError('learning_repository_required')

  async function quarantine(adapted, ownership, source, origin, backfillRunId, dryRun = false) {
    const reasons = [...new Set(identityReasonCodes(adapted))]
    const identityStatus = adapted?.identityResolution?.status === 'ambiguous'
      ? 'ambiguous'
      : 'unmatched'
    const safeRecord = {
      ...adapted.draft,
      student_id: ownership.studentId,
      source_registry_version: SOURCE_REGISTRY_VERSION,
      identity_resolution: safeIdentitySummary(adapted?.identityResolution),
    }
    delete safeRecord.client_action_id
    const dedupe = buildEvidenceDedupeKey(safeRecord)
    if (!dedupe.ok) return validationResult(dedupe.errors)
    const semanticFingerprint = await buildSemanticFingerprint(safeRecord)
    if (!dryRun) {
      const outcome = await repository.quarantine({
        student_id: ownership.studentId,
        source_code: source.source_code,
        source_registry_version: SOURCE_REGISTRY_VERSION,
        source_record_id: adapted.draft.source_record_id,
        source_revision: adapted.draft.source_revision,
        semantic_event_type: adapted.draft.semantic_event_type,
        source_locator: adapted.draft.source_locator ?? null,
        dedupe_key: dedupe.key,
        semantic_fingerprint: semanticFingerprint,
        identity_status: identityStatus,
        reason_codes: reasons,
        record_origin: origin,
        backfill_run_id: backfillRunId,
      })
      if (outcome?.code !== 'identity_quarantined') {
        const result = safeNetworkResult(outcome?.code, {
          created: outcome?.created,
          reasonCodes: outcome?.reason_codes,
        })
        metrics.increment({
          sourceCode: source.source_code,
          eventType: adapted?.draft?.semantic_event_type,
          outcome: result.code,
          reasonCode: result.reason_codes?.[0],
        })
        return result
      }
    }
    if (!dryRun) {
      metrics.increment({
        sourceCode: source.source_code,
        eventType: adapted?.draft?.semantic_event_type,
        outcome: 'identity_quarantined',
        reasonCode: reasons[0],
      })
    }
    return safeNetworkResult('identity_quarantined', { reasonCodes: reasons })
  }

  async function persist(record, source, { origin, backfillRunId, dryRun = false } = {}) {
    const enriched = addPersistenceClaims(record, source, { origin, backfillRunId })
    const fingerprint = await buildSemanticFingerprint(enriched)
    if (dryRun) {
      const duplicate = await repository.inspectIdempotency?.(enriched, fingerprint)
      if (duplicate?.code === 'idempotency_conflict') return duplicate
      if (duplicate?.code === 'duplicate') return duplicate
      return Object.freeze({ ...safeNetworkResult('created', { created: true }), dry_run: true, record: enriched, semantic_fingerprint: fingerprint })
    }
    try {
      const outcome = await repository.ingest(enriched, fingerprint, { origin, backfillRunId })
      const result = safeNetworkResult(outcome.code, {
        recordId: outcome.record_id,
        created: outcome.created,
        reasonCodes: outcome.reason_codes,
      })
      metrics.increment({ sourceCode: source.source_code, eventType: record.semantic_event_type, outcome: result.code, reasonCode: result.reason_codes?.[0] })
      return result
    } catch {
      metrics.increment({ sourceCode: source.source_code, eventType: record.semantic_event_type, outcome: 'internal_failure' })
      return safeNetworkResult('internal_failure')
    }
  }

  async function prepareSourceRecord({
    sourceCode,
    sourceRecord,
    adapterContext = {},
    ownership,
    origin = 'live',
    backfillRunId = null,
    clientDraft = false,
    dryRun = false,
  }) {
    const boundaryError = verifyBoundary(ownership, sourceCode)
    if (boundaryError) return { result: boundaryError }
    const source = getSourceDefinition(sourceCode)
    const sourceError = sourcePermission(source)
    if (sourceError) return { result: sourceError }
    const adapter = SOURCE_ADAPTERS[source.adapter]
    if (!adapter) return { result: safeNetworkResult('source_not_allowed', { reasonCodes: ['SOURCE_ADAPTER_UNAVAILABLE'] }) }

    let adapted
    try {
      adapted = adapter(sourceRecord, { ...adapterContext, sourceCode })
    } catch {
      return { result: safeNetworkResult('validation_rejected', { reasonCodes: ['SOURCE_ADAPTER_REJECTED'] }) }
    }
    if (adapted?.draft?.source_code !== sourceCode) {
      return { result: safeNetworkResult('source_not_allowed', { reasonCodes: ['CLIENT_SOURCE_MISMATCH'] }) }
    }
    const permissionError = sourcePermission(source, {
      recordKind: adapted.draft.record_kind,
      eventType: adapted.draft.semantic_event_type,
    })
    if (permissionError) return { result: permissionError }
    if (clientDraft) {
      const privileged = trustedFieldErrors(sourceRecord)
      if (privileged.length) return { result: validationResult(privileged) }
      const clientValidation = validateClientEvidenceDraft(adapted.draft, { expectedSourceCode: sourceCode })
      if (!clientValidation.ok) return { result: validationResult(clientValidation.errors) }
    }
    if (identityIsUnresolved(adapted)) {
      return {
        result: await quarantine(adapted, ownership, source, origin, backfillRunId, dryRun),
      }
    }

    const recordedAt = now().toISOString()
    const adapterClaims = trustedAdapterClaims(adapted)
    if (
      (adapterClaims.actor_role && adapterClaims.actor_role !== ownership.actorRole) ||
      (adapterClaims.actor_student_relation &&
        adapterClaims.actor_student_relation !== ownership.actorStudentRelation)
    ) {
      return { result: safeNetworkResult('unauthorized') }
    }
    const trusted = {
      ...adapterClaims,
      record_id: uuid(),
      student_id: ownership.studentId,
      actor_id: ownership.actorId,
      actor_role: ownership.actorRole,
      actor_student_relation: ownership.actorStudentRelation,
      recorded_at: recordedAt,
      provenance: origin === 'backfill' ? 'backfill_snapshot' : clientDraft ? 'client_draft_server_bound' : 'authoritative_source',
      source_availability: 'available',
      trust_level: ownership.trustLevel ?? 'account_bound',
    }
    const materialized = enrichTrustedEvidence(adapted.draft, trusted, {
      expectedSourceCode: sourceCode,
      now: now(),
    })
    if (!materialized.ok) return { result: validationResult(materialized.errors) }
    return { result: null, record: materialized.value, source, origin, backfillRunId }
  }

  async function ingestSourceRecord(options) {
    const prepared = await prepareSourceRecord(options)
    if (prepared.result) {
      if (
        !options.dryRun &&
        !['identity_quarantined', 'idempotency_conflict'].includes(prepared.result.code)
      ) {
        metrics.increment({
          sourceCode: options.sourceCode,
          eventType: 'unknown',
          outcome: prepared.result.code,
          reasonCode: prepared.result.reason_codes?.[0],
        })
      }
      return prepared.result
    }
    return persist(prepared.record, prepared.source, {
      origin: prepared.origin,
      backfillRunId: prepared.backfillRunId,
      dryRun: options.dryRun,
    })
  }

  async function ingestTrustedMutation({
    kind,
    targetRecordId,
    sourceRevision,
    reason,
    measurement,
    metadata,
    ownership,
    occurredAtPrecision = 'unknown',
    occurredAt = null,
    occurredOn = null,
    asOf = null,
    origin = 'live',
    dryRun = false,
  }) {
    if (!['correction', 'tombstone'].includes(kind) || !UUID.test(targetRecordId ?? '')) {
      return safeNetworkResult('validation_rejected', { reasonCodes: ['EVIDENCE_FIELD_INVALID'] })
    }
    const target = await repository.getRecord(targetRecordId)
    if (!target || target.student_id !== ownership?.studentId) return safeNetworkResult('source_record_not_owned')
    const boundaryError = verifyBoundary(ownership, target.source_code)
    if (boundaryError) return boundaryError
    const source = getSourceDefinition(target.source_code)
    const permissionError = sourcePermission(source, { recordKind: kind, eventType: target.semantic_event_type })
    if (permissionError) return permissionError
    const record = {
      record_id: uuid(),
      contract_version: target.contract_version,
      schema_version: target.schema_version,
      record_kind: kind,
      student_id: ownership.studentId,
      actor_id: ownership.actorId,
      actor_role: ownership.actorRole,
      actor_student_relation: ownership.actorStudentRelation,
      recorded_at: now().toISOString(),
      source_code: target.source_code,
      source_record_id: target.source_record_id,
      source_revision: String(sourceRevision),
      source_locator: target.source_locator ?? undefined,
      semantic_event_type: target.semantic_event_type,
      activity_type: target.semantic_event_type,
      occurred_at_precision: occurredAtPrecision,
      occurred_at: occurredAtPrecision === 'exact' ? occurredAt : undefined,
      occurred_on: occurredAtPrecision === 'day' ? occurredOn : undefined,
      as_of: kind === 'correction' && target.record_kind === 'snapshot' ? (asOf ?? target.as_of) : undefined,
      education_context_id: target.education_context_id,
      subject_id: target.subject_id,
      topic_id: target.topic_id,
      objective_id: null,
      identity_resolution: target.identity_resolution,
      evidence_class: target.evidence_class,
      evidence_strength: target.evidence_strength,
      trust_level: ownership.trustLevel ?? target.trust_level,
      provenance: origin === 'backfill' ? 'backfill_snapshot' : 'authoritative_source',
      source_availability: 'available',
      measurement: kind === 'correction' ? measurement : undefined,
      metadata: kind === 'correction' ? metadata : undefined,
      relations: target.relations ?? undefined,
      source_adapter_version: target.source_adapter_version,
      topic_resolver_version: target.topic_resolver_version,
      target_record_id: targetRecordId,
      correction_reason: kind === 'correction' ? reason : undefined,
      tombstone_reason: kind === 'tombstone' ? reason : undefined,
    }
    Object.keys(record).forEach((key) => record[key] === undefined && delete record[key])
    const dedupe = buildEvidenceDedupeKey(record)
    if (!dedupe.ok) return validationResult(dedupe.errors)
    record.dedupe_key = dedupe.key
    const validated = validateLearningEvidence(record, { now: now() })
    if (!validated.ok) return validationResult(validated.errors)
    return persist(validated.value, source, { origin, dryRun })
  }

  return Object.freeze({
    prepareSourceRecord,
    ingestSourceRecord,
    ingestTrustedMutation,
    metrics,
  })
}

export const CLIENT_TRUSTED_ONLY_FIELDS = Object.freeze([...TRUSTED_ONLY_FIELDS])
