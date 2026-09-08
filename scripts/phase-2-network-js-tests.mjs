import assert from 'node:assert/strict'
import { pathToFileURL } from 'node:url'

import {
  adaptDailyLog,
  adaptMockExamSubject,
} from '../src/lib/learning/adapters.js'
import {
  validateClientEvidenceDraft,
} from '../src/lib/learning/evidenceContract.js'
import { SOURCE_REGISTRY_VERSION } from '../src/lib/learning/sourceRegistry.js'
import { resolveTopicIdentity } from '../src/lib/learning/topicResolver.js'
import {
  SEMANTIC_EVIDENCE_FIELDS,
  SOURCE_CONTRACT_COLUMNS,
  SOURCE_CONTRACT_ROWS,
  auditSourceContractParity,
  auditSourceContractProjection,
  buildDiagnosticProjection,
  buildSemanticFingerprint,
  buildSourceContractParitySql,
  buildSourceContractSeedSql,
  checksumDiagnosticRows,
  classifySourceRead,
  createBackfillProviderRegistry,
  createLearningEvidenceIngestor,
  createMemoryBackfillRunStore,
  createMemoryLearningEvidenceRepository,
  deriveEffectiveEvidence,
  runBackfill,
  semanticEvidencePayload,
  stableStringify,
  sumEffectiveCorrectCount,
  validateHealthEnvelope,
} from '../src/lib/learning/network/index.js'

const FIXED_NOW_ISO = '2026-09-08T09:00:00.000Z'
const STUDENT_A = '10000000-0000-4000-8000-000000000001'
const STUDENT_B = '10000000-0000-4000-8000-000000000002'
const TEACHER_A = '10000000-0000-4000-8000-000000000003'

const uuid = (family, value) =>
  `${String(family).padStart(8, '0')}-0000-4000-8000-${String(value).padStart(12, '0')}`

function createUuidGenerator(family = 90000000, start = 1) {
  let current = start
  return () => uuid(family, current++)
}

function fixedNow() {
  return new Date(FIXED_NOW_ISO)
}

function ownership(sourceCode, {
  studentId = STUDENT_A,
  actorId = studentId,
  actorRole = 'student',
  actorStudentRelation = actorRole === 'teacher' ? 'authorized_teacher' : 'self',
  principalStudentId = studentId,
  proof = 'source_specific_verified',
  trustLevel = 'account_bound',
} = {}) {
  return {
    proof,
    sourceCode,
    studentId,
    principalStudentId,
    actorId,
    actorRole,
    actorStudentRelation,
    trustLevel,
  }
}

function createHarness({ family = 90000000, start = 1 } = {}) {
  const repository = createMemoryLearningEvidenceRepository()
  const ingestor = createLearningEvidenceIngestor({
    repository,
    now: fixedNow,
    uuid: createUuidGenerator(family, start),
  })
  return { repository, ingestor }
}

function dailyRecord(id, values = {}) {
  return {
    id,
    exam_type: 'TYT',
    subject: 'Matematik',
    topic: 'Temel Kavramlar',
    study_date: '2026-09-07',
    correct: 8,
    incorrect: 2,
    empty: 0,
    duration_minutes: 30,
    ...values,
  }
}

function dailyContext(values = {}) {
  return {
    sourceRevision: 'v1',
    entryOrigin: 'phase_2_synthetic_test',
    ...values,
  }
}

async function ingestDaily(ingestor, {
  id,
  record = {},
  context = {},
  owner = ownership('daily_logs'),
  clientDraft = false,
  origin = 'live',
  backfillRunId = null,
  dryRun = false,
} = {}) {
  return ingestor.ingestSourceRecord({
    sourceCode: 'daily_logs',
    sourceRecord: dailyRecord(id, record),
    adapterContext: dailyContext(context),
    ownership: owner,
    clientDraft,
    origin,
    backfillRunId,
    dryRun,
  })
}

function assertionHarness() {
  let assertions = 0
  const sections = []

  const check = (condition, message) => {
    assertions += 1
    assert.ok(condition, message)
  }
  const equal = (actual, expected, message) => {
    assertions += 1
    assert.deepEqual(actual, expected, message)
  }
  const match = (actual, expected, message) => {
    assertions += 1
    assert.match(actual, expected, message)
  }
  const section = async (name, callback) => {
    await callback()
    sections.push(name)
    console.log(`✓ ${name}`)
  }

  return {
    check,
    equal,
    match,
    section,
    summary: () => ({ assertions, sections: [...sections] }),
  }
}

function jsonBackedContractRows() {
  const jsonColumns = new Set([
    'record_kinds',
    'semantic_event_types',
    'evidence_class_by_event',
    'allowed_measurements',
    'allowed_metadata',
  ])
  return SOURCE_CONTRACT_ROWS.map((row) => Object.fromEntries(
    SOURCE_CONTRACT_COLUMNS.map((column) => [
      column,
      jsonColumns.has(column)
        ? JSON.stringify(row[column])
        : column === 'ingest_allowed'
          ? row[column] ? 't' : 'f'
          : row[column],
    ])
  ))
}

function measurementForCorrectCount(correctCount) {
  return {
    correct_count: correctCount,
    incorrect_count: 0,
    blank_count: 0,
    marked_count: correctCount,
    total_count: correctCount,
    accuracy: 1,
    accuracy_denominator: 'marked',
    accuracy_formula: 'correct_count / marked_count',
    accuracy_formula_version: 'accuracy-marked-v1',
    accuracy_source: 'student_reported',
  }
}

function createDailyBackfillProvider(records, { studentId = STUDENT_A } = {}) {
  return {
    sourceCode: 'daily_logs',
    adapterName: 'adaptDailyLog',
    maxBatchSize: 2,
    async readPage({ cursor, limit }) {
      const start = cursor == null ? 0 : Number(cursor)
      const page = records.slice(start, start + limit)
      const next = start + page.length
      return {
        records: page,
        nextCursor: String(next),
        done: next >= records.length,
      }
    },
    async verifyOwnership() {
      return ownership('daily_logs', {
        studentId,
        actorId: studentId,
        proof: 'backfill_provider_verified',
      })
    },
    adapterContext() {
      return dailyContext({ sourceRevision: 'v1' })
    },
  }
}

async function createBackfillRun(runStore, {
  runId,
  mode,
  studentId = STUDENT_A,
} = {}) {
  return runStore.create({
    run_id: runId,
    source_code: 'daily_logs',
    source_registry_version: SOURCE_REGISTRY_VERSION,
    mode,
    student_scope: { student_id: studentId },
  })
}

export async function runPhase2NetworkJsTests() {
  const t = assertionHarness()

  await t.section('Kanonik serileştirme ve semantik fingerprint', async () => {
    const left = {
      source_code: 'daily_logs',
      measurement: { incorrect_count: 2, correct_count: 8 },
      metadata: { entry_origin: 'synthetic', note_present: false },
    }
    const right = {
      metadata: { note_present: false, entry_origin: 'synthetic' },
      measurement: { correct_count: 8, incorrect_count: 2 },
      source_code: 'daily_logs',
    }
    t.equal(stableStringify(left), stableStringify(right))

    const semanticBase = {
      ...left,
      contract_version: 'learning-evidence@1',
      schema_version: '1.0',
      source_registry_version: SOURCE_REGISTRY_VERSION,
      record_kind: 'event',
      student_id: STUDENT_A,
      actor_id: STUDENT_A,
      actor_role: 'student',
      actor_student_relation: 'self',
      source_record_id: 'fingerprint-source-1',
      source_revision: 'v1',
      semantic_event_type: 'study_session_reported',
      activity_type: 'study_session_reported',
      occurred_at_precision: 'unknown',
      evidence_class: 'student_self_report',
      evidence_strength: 'low',
      trust_level: 'account_bound',
      provenance: 'authoritative_source',
      source_availability: 'available',
      source_adapter_version: 'learning-source-adapters@1',
      topic_resolver_version: 'topic-resolver@1',
      retention_class: 'academic_policy_pending',
    }
    const first = {
      ...semanticBase,
      record_id: uuid(91000000, 1),
      recorded_at: FIXED_NOW_ISO,
      dedupe_key: 'server-key-a',
      semantic_fingerprint: 'server-fingerprint-a',
      ingestion_sequence: 1,
    }
    const retry = {
      ...semanticBase,
      measurement: { correct_count: 8, incorrect_count: 2 },
      metadata: { note_present: false, entry_origin: 'synthetic' },
      record_id: uuid(91000000, 2),
      recorded_at: '2026-09-08T09:01:00.000Z',
      dedupe_key: 'server-key-b',
      semantic_fingerprint: 'server-fingerprint-b',
      ingestion_sequence: 2,
    }
    t.equal(await buildSemanticFingerprint(first), await buildSemanticFingerprint(retry))
    t.check(
      await buildSemanticFingerprint(first) !==
        await buildSemanticFingerprint({ ...retry, measurement: { correct_count: 7, incorrect_count: 3 } })
    )
    const payload = semanticEvidencePayload(first)
    for (const serverField of ['record_id', 'recorded_at', 'dedupe_key', 'semantic_fingerprint', 'ingestion_sequence']) {
      t.check(!(serverField in payload), `${serverField} fingerprint girdisi olmamalı.`)
      t.check(!SEMANTIC_EVIDENCE_FIELDS.includes(serverField), `${serverField} semantik allowlist'te olmamalı.`)
    }
  })

  await t.section('SOURCE_CONTRACT — 38 satır ve immutable parity', async () => {
    const projectionAudit = auditSourceContractProjection()
    t.check(projectionAudit.ok, JSON.stringify(projectionAudit.errors))
    t.equal(SOURCE_CONTRACT_ROWS.length, 38)
    t.equal(SOURCE_CONTRACT_ROWS.filter((row) => row.ingest_allowed).length, 25)
    t.check(Object.isFrozen(SOURCE_CONTRACT_ROWS))
    t.check(Object.isFrozen(SOURCE_CONTRACT_ROWS[2].record_kinds))
    t.check(Object.isFrozen(SOURCE_CONTRACT_ROWS[2].evidence_class_by_event))

    const persistedAudit = auditSourceContractParity(jsonBackedContractRows())
    t.check(persistedAudit.ok, JSON.stringify(persistedAudit.errors))
    const changed = SOURCE_CONTRACT_ROWS.map((row) => ({ ...row }))
    changed[2] = { ...changed[2], classification: 'excluded' }
    const changedAudit = auditSourceContractParity(changed)
    t.check(!changedAudit.ok)
    t.check(changedAudit.errors.some((error) => error.code === 'SOURCE_CONTRACT_VALUE_MISMATCH'))

    const seedSql = buildSourceContractSeedSql()
    const paritySql = buildSourceContractParitySql()
    t.match(seedSql, /on conflict \("registry_version", "source_code"\) do nothing;$/)
    t.check(!/do update/i.test(seedSql))
    t.match(paritySql, /missing_or_changed/)
    t.match(paritySql, /unexpected_or_changed/)
  })

  await t.section('M03 — adaptDailyLog ve doğrulanmış sahiplik alımı', async () => {
    const adapted = adaptDailyLog(
      dailyRecord('m03-adapter-1'),
      dailyContext({ clientActionId: uuid(20000000, 1) })
    )
    t.equal(adapted.source.matrix_id, 'M03')
    t.equal(adapted.draft.source_code, 'daily_logs')
    t.equal(adapted.identityResolution.status, 'unique_with_explicit_context')
    t.equal(adapted.draft.measurement.total_count, 10)
    t.equal(adapted.draft.measurement.accuracy, 0.8)

    const { repository, ingestor } = createHarness({ family: 92000000 })
    const result = await ingestDaily(ingestor, {
      id: 'm03-owned-1',
      context: { clientActionId: uuid(20000000, 2) },
      clientDraft: true,
    })
    t.equal(result.code, 'created')
    const [stored] = repository.snapshot().records
    t.equal(stored.record_id, result.record_id)
    t.equal(stored.student_id, STUDENT_A)
    t.equal(stored.actor_id, STUDENT_A)
    t.equal(stored.recorded_at, FIXED_NOW_ISO)
    t.equal(stored.source_registry_version, SOURCE_REGISTRY_VERSION)
    t.equal(stored.identity_resolution.status, 'unique_with_explicit_context')
    t.check(Boolean(stored.topic_id))
    t.check(!('notes' in stored.metadata))
  })

  await t.section('İstemci ayrıcalıklı alan reddi', async () => {
    const adapted = adaptDailyLog(
      dailyRecord('privileged-draft-1'),
      dailyContext({ clientActionId: uuid(20000000, 3) })
    )
    const direct = validateClientEvidenceDraft(
      { ...adapted.draft, student_id: STUDENT_B },
      { expectedSourceCode: 'daily_logs' }
    )
    t.check(!direct.ok)
    t.check(direct.errors.some((error) => error.code === 'CLIENT_PRIVILEGED_FIELD'))

    const { repository, ingestor } = createHarness({ family: 93000000 })
    const result = await ingestDaily(ingestor, {
      id: 'privileged-ingest-1',
      record: { student_id: STUDENT_B },
      context: { clientActionId: uuid(20000000, 4) },
      clientDraft: true,
    })
    t.equal(result.code, 'validation_rejected')
    t.check(result.reason_codes.includes('CLIENT_PRIVILEGED_FIELD'))
    t.equal(repository.snapshot().records.length, 0)
  })

  let idempotencyRecords = []
  await t.section('Tekilleştirme — duplicate, conflict ve iki gerçek istemci eylemi', async () => {
    const { repository, ingestor } = createHarness({ family: 94000000 })
    const actionA = uuid(20000000, 10)
    const actionB = uuid(20000000, 11)
    const first = await ingestDaily(ingestor, {
      id: 'idempotency-record-1',
      context: { clientActionId: actionA },
      clientDraft: true,
    })
    const duplicate = await ingestDaily(ingestor, {
      id: 'idempotency-record-1',
      context: { clientActionId: actionA },
      clientDraft: true,
    })
    const conflict = await ingestDaily(ingestor, {
      id: 'idempotency-record-1',
      record: { correct: 7, incorrect: 3 },
      context: { clientActionId: actionA },
      clientDraft: true,
    })
    const secondAction = await ingestDaily(ingestor, {
      id: 'idempotency-record-1',
      context: { clientActionId: actionB },
      clientDraft: true,
    })
    t.equal(first.code, 'created')
    t.equal(duplicate.code, 'duplicate')
    t.equal(duplicate.record_id, first.record_id)
    t.equal(conflict.code, 'idempotency_conflict')
    t.equal(secondAction.code, 'created')
    t.check(secondAction.record_id !== first.record_id)
    idempotencyRecords = [...repository.snapshot().records]
    t.equal(idempotencyRecords.length, 2)
  })

  await t.section('Kimlik karantinası ve konu projeksiyonu dışlama', async () => {
    const { repository, ingestor } = createHarness({ family: 95000000 })
    const ambiguous = await ingestDaily(ingestor, {
      id: 'ambiguous-topic-1',
      record: { exam_type: null, topic: 'Fonksiyonlar' },
    })
    t.equal(ambiguous.code, 'identity_quarantined')
    t.check(ambiguous.reason_codes.includes('IDENTITY_AMBIGUOUS'))

    const unmatched = await ingestor.ingestSourceRecord({
      sourceCode: 'ai_solution_sessions',
      sourceRecord: {
        event_id: 'unmatched-solve-event-1',
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'eşleşmeyen-sentetik-konu',
        topic_matched: false,
        semantic_event_type: 'solution_requested',
        created_at: '2026-09-07T12:00:00.000Z',
      },
      adapterContext: { sourceRevision: 'v1', examContextOrigin: 'source_record' },
      ownership: ownership('ai_solution_sessions'),
    })
    t.equal(unmatched.code, 'identity_quarantined')
    t.check(unmatched.reason_codes.includes('SOURCE_TOPIC_MATCH_FALSE'))
    t.equal(repository.snapshot().records.length, 0)
    t.equal(repository.snapshot().quarantines.length, 2)

    const valid = idempotencyRecords[0]
    const projected = deriveEffectiveEvidence([
      valid,
      {
        ...valid,
        record_id: uuid(95000000, 50),
        dedupe_key: 'synthetic-ambiguous-projection-key',
        identity_resolution: { status: 'ambiguous' },
      },
      {
        ...valid,
        record_id: uuid(95000000, 51),
        dedupe_key: 'synthetic-unmatched-projection-key',
        identity_resolution: { status: 'unmatched' },
      },
    ], { topicProjection: true })
    t.equal(projected.active.length, 1)
    t.equal(projected.active[0].record_id, valid.record_id)
  })

  await t.section('Kaynak health — available/empty/unavailable/degraded', async () => {
    const states = {
      available: classifySourceRead({ rows: [{ synthetic: true }] }),
      empty: classifySourceRead({ rows: [] }),
      unavailable: classifySourceRead({ error: { code: '42P01' } }),
      degraded: classifySourceRead({ rows: [], capability: 'legacy', expectedCapability: 'current' }),
    }
    t.equal(Object.fromEntries(Object.entries(states).map(([key, value]) => [key, value.status])), {
      available: 'available',
      empty: 'empty',
      unavailable: 'unavailable',
      degraded: 'degraded',
    })
    for (const state of Object.values(states)) t.check(validateHealthEnvelope(state).ok)
    t.equal(states.empty.record_count, 0)
    t.equal(states.unavailable.reason_code, 'DEPENDENCY_UNAVAILABLE')
    t.equal(states.degraded.reason_code, 'SOURCE_CAPABILITY_OLD')
  })

  await t.section('S02 — aynı kanonik konu farklı kaynaklarda ayrı provenance', async () => {
    const { repository, ingestor } = createHarness({ family: 96000000 })
    const outside = await ingestDaily(ingestor, {
      id: 's02-daily-1',
      context: { clientActionId: uuid(20000000, 20) },
      clientDraft: true,
    })
    const lesson = await ingestor.ingestSourceRecord({
      sourceCode: 'bundled_lesson_activity',
      sourceRecord: {
        lesson_id: 'temel-kavramlar-sentetik',
        event_type: 'lesson_completed',
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'Temel Kavramlar',
        section_id: 'all',
      },
      adapterContext: {
        sourceRevision: 'content-v1',
        contentRevision: 'content-v1',
        occurredAt: '2026-09-07T12:00:00.000Z',
      },
      ownership: ownership('bundled_lesson_activity'),
    })
    t.equal(outside.code, 'created')
    t.equal(lesson.code, 'created')
    const rows = repository.snapshot().records
    t.equal(rows.length, 2)
    t.equal(new Set(rows.map((row) => row.topic_id)).size, 1)
    t.equal(new Set(rows.map((row) => row.source_code)).size, 2)
    t.equal(new Set(rows.map((row) => row.provenance)).size, 2)
    t.equal(deriveEffectiveEvidence(rows).active.length, 2)
  })

  await t.section('S05 — belirsizlik karantinası ve düşük örneklem', async () => {
    const { repository, ingestor } = createHarness({ family: 97000000 })
    const ambiguous = await ingestDaily(ingestor, {
      id: 's05-ambiguous-1',
      record: { exam_type: null, topic: 'Fonksiyonlar' },
    })
    t.equal(ambiguous.code, 'identity_quarantined')
    const oneAnswer = await ingestor.ingestSourceRecord({
      sourceCode: 'db_question_test',
      sourceRecord: {
        attempt_id: 's05-attempt-1',
        question_set_id: 's05-set-1',
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'Temel Kavramlar',
        correct: 1,
        incorrect: 0,
        empty: 0,
        student_correct: true,
      },
      adapterContext: {
        sourceRevision: 'content-v1',
        contentRevision: 'content-v1',
        occurredAt: '2026-09-07T12:00:00.000Z',
      },
      ownership: ownership('db_question_test'),
    })
    t.equal(oneAnswer.code, 'created')
    const [stored] = repository.snapshot().records
    t.equal(stored.measurement.total_count, 1)
    t.equal(stored.evidence_strength, 'low')
    t.check(!('mastery' in stored))
  })

  await t.section('S07 — topic_matched=false ve net formülü sınırı', async () => {
    const { repository, ingestor } = createHarness({ family: 98000000 })
    const unmatched = await ingestor.ingestSourceRecord({
      sourceCode: 'ai_solution_sessions',
      sourceRecord: {
        event_id: 's07-solve-event-1',
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'Temel Kavramlar',
        topic_matched: false,
        semantic_event_type: 'solution_requested',
        created_at: '2026-09-07T12:00:00.000Z',
      },
      adapterContext: { sourceRevision: 'v1', examContextOrigin: 'source_record' },
      ownership: ownership('ai_solution_sessions'),
    })
    t.equal(unmatched.code, 'identity_quarantined')
    t.equal(repository.snapshot().records.length, 0)

    const lgs = adaptMockExamSubject(
      { id: 's07-lgs-1', exam_type: 'LGS', subject: 'Matematik', exam_date: '2026-09-07', correct: 15, incorrect: 3, empty: 2 },
      { sourceRevision: 'v1' }
    )
    const tyt = adaptMockExamSubject(
      { id: 's07-tyt-1', exam_type: 'TYT', subject: 'Matematik', exam_date: '2026-09-07', correct: 24, incorrect: 8, empty: 8 },
      { sourceRevision: 'v1' }
    )
    t.equal(lgs.draft.measurement.net_score, 14)
    t.equal(lgs.draft.measurement.net_formula_version, 'net-lgs-v1')
    t.equal(tyt.draft.measurement.net_score, 22)
    t.equal(tyt.draft.measurement.net_formula_version, 'net-standard-v1')
  })

  await t.section('S08 — doğrulanmış öğretmen ilişkisi ve paylaşılabilir dar alan', async () => {
    const { repository, ingestor } = createHarness({ family: 99000000 })
    const sourceRecord = {
      lesson_session_id: 's08-shared-session-1',
      shared_with_student: true,
      exam_type: 'TYT',
      subject: 'Matematik',
      topic: 'Temel Kavramlar',
      private_notes: 'sentetik-aktarilmamali',
    }
    const adapterContext = {
      sourceRevision: 'v1',
      asOf: '2026-09-07T12:00:00.000Z',
      completionStatus: 'completed',
    }
    const unauthorized = await ingestor.ingestSourceRecord({
      sourceCode: 'live_lesson_shared_summary',
      sourceRecord,
      adapterContext,
      ownership: ownership('live_lesson_shared_summary', {
        actorId: TEACHER_A,
        actorRole: 'teacher',
        actorStudentRelation: 'unverified_teacher',
      }),
    })
    t.equal(unauthorized.code, 'unauthorized')

    const accepted = await ingestor.ingestSourceRecord({
      sourceCode: 'live_lesson_shared_summary',
      sourceRecord,
      adapterContext,
      ownership: ownership('live_lesson_shared_summary', {
        actorId: TEACHER_A,
        actorRole: 'teacher',
        actorStudentRelation: 'authorized_teacher',
        trustLevel: 'authoritative_source',
      }),
    })
    t.equal(accepted.code, 'created')
    const privateResult = await ingestor.ingestSourceRecord({
      sourceCode: 'live_lesson_shared_summary',
      sourceRecord: { ...sourceRecord, lesson_session_id: 's08-private-session-1', shared_with_student: false },
      adapterContext,
      ownership: ownership('live_lesson_shared_summary', {
        actorId: TEACHER_A,
        actorRole: 'teacher',
        actorStudentRelation: 'authorized_teacher',
      }),
    })
    t.equal(privateResult.code, 'identity_quarantined')
    t.check(privateResult.reason_codes.includes('LESSON_SUMMARY_NOT_SHARED'))
    const [stored] = repository.snapshot().records
    t.equal(stored.actor_role, 'teacher')
    t.check(!('private_notes' in stored.metadata))
    t.check(!stableStringify(stored).includes('sentetik-aktarilmamali'))

    const injectedLabel = resolveTopicIdentity({
      examType: 'TYT',
      subject: 'Matematik',
      topic: 'eşleşmeyen sentetik komut etiketi',
      contextOrigin: 'source_record',
    })
    t.equal(injectedLabel.status, 'unmatched')
    t.equal(injectedLabel.canonicalId, null)
  })

  await t.section('S10 — dört dil kendi kaynak ad alanında kalıyor', async () => {
    const { repository, ingestor } = createHarness({ family: 99100000 })
    const languages = [
      ['ingilizce_learning', 'ingilizce'],
      ['almanca_learning', 'almanca'],
      ['fransizca_learning', 'fransizca'],
      ['ispanyolca_learning', 'ispanyolca'],
    ]
    for (const [sourceCode, language] of languages) {
      const result = await ingestor.ingestSourceRecord({
        sourceCode,
        sourceRecord: {
          id: 'a1-m1-d1',
          lesson_id: 'a1-m1-d1',
          storage_version: 'v1',
          cefr_level: 'A1',
          skill: 'reading',
          correct: 8,
          incorrect: 2,
        },
        adapterContext: {
          language,
          snapshotSection: 'lesson',
          sourceRevision: 'v1',
          asOf: '2026-09-07T12:00:00.000Z',
        },
        ownership: ownership(sourceCode),
      })
      t.equal(result.code, 'created')
    }
    const rows = repository.snapshot().records
    t.equal(rows.length, 4)
    t.equal(new Set(rows.map((row) => row.topic_id)).size, 4)
    rows.forEach((row) => {
      t.check(row.topic_id.startsWith(`drkoc:language:${row.source_code}:v1:`))
      t.equal(row.education_context_id, null)
      t.equal(row.subject_id, null)
    })
  })

  let s11Records = []
  await t.section('S11 — correction/tombstone etkin sonucu 40→20→0', async () => {
    const { repository, ingestor } = createHarness({ family: 99200000 })
    const owner = ownership('daily_logs', { trustLevel: 'authoritative_source' })
    const first = await ingestDaily(ingestor, {
      id: 's11-daily-1',
      record: { correct: 40, incorrect: 0, empty: 0, duration_minutes: 40 },
      owner,
    })
    t.equal(first.code, 'created')
    t.equal(sumEffectiveCorrectCount(repository.snapshot().records), 40)

    const correction = await ingestor.ingestTrustedMutation({
      kind: 'correction',
      targetRecordId: first.record_id,
      sourceRevision: 'v2',
      reason: 'source_edited',
      measurement: measurementForCorrectCount(20),
      ownership: owner,
    })
    t.equal(correction.code, 'created')
    t.equal(sumEffectiveCorrectCount(repository.snapshot().records), 20)

    const tombstone = await ingestor.ingestTrustedMutation({
      kind: 'tombstone',
      targetRecordId: correction.record_id,
      sourceRevision: 'v3',
      reason: 'source_deleted',
      ownership: owner,
    })
    t.equal(tombstone.code, 'created')
    s11Records = [...repository.snapshot().records]
    t.equal(s11Records.length, 3)
    t.equal(sumEffectiveCorrectCount(s11Records), 0)
    t.equal(deriveEffectiveEvidence(s11Records).tombstoned.length, 1)
  })

  await t.section('S14 — öğrenci kapsamı ve sahiplik ayrımı', async () => {
    const { repository, ingestor } = createHarness({ family: 99300000 })
    const sourceRecord = dailyRecord('s14-shared-source-record-1')
    const first = await ingestor.ingestSourceRecord({
      sourceCode: 'daily_logs',
      sourceRecord,
      adapterContext: dailyContext(),
      ownership: ownership('daily_logs', { studentId: STUDENT_A }),
    })
    const second = await ingestor.ingestSourceRecord({
      sourceCode: 'daily_logs',
      sourceRecord,
      adapterContext: dailyContext(),
      ownership: ownership('daily_logs', { studentId: STUDENT_B }),
    })
    t.equal(first.code, 'created')
    t.equal(second.code, 'created')
    t.check(first.record_id !== second.record_id)
    const firstRows = await repository.listLedgerBatch({ studentId: STUDENT_A })
    const secondRows = await repository.listLedgerBatch({ studentId: STUDENT_B })
    t.equal(firstRows.length, 1)
    t.equal(secondRows.length, 1)
    t.equal(firstRows[0].student_id, STUDENT_A)
    t.equal(secondRows[0].student_id, STUDENT_B)

    const forged = await ingestor.ingestSourceRecord({
      sourceCode: 'daily_logs',
      sourceRecord: dailyRecord('s14-forged-source-1'),
      adapterContext: dailyContext(),
      ownership: ownership('daily_logs', {
        studentId: STUDENT_B,
        principalStudentId: STUDENT_A,
      }),
    })
    t.equal(forged.code, 'source_record_not_owned')
    t.equal(repository.snapshot().records.length, 2)
  })

  await t.section('Deterministik diagnostic projection checksum', async () => {
    const firstRows = buildDiagnosticProjection(idempotencyRecords, { generationId: 'generation-a' })
    const replayRows = buildDiagnosticProjection([...idempotencyRecords].reverse(), { generationId: 'generation-b' })
    t.check(firstRows.length > 0)
    t.equal(firstRows.length, replayRows.length)
    const firstChecksum = await checksumDiagnosticRows(firstRows)
    const replayChecksum = await checksumDiagnosticRows(replayRows)
    t.equal(firstChecksum, replayChecksum)
    t.match(firstChecksum, /^[a-f0-9]{64}$/)
    t.equal(await checksumDiagnosticRows(firstRows), firstChecksum)
    t.equal(buildDiagnosticProjection(s11Records).length, 0)
  })

  await t.section('Backfill — dry-run/apply/retry/pause-resume/cancel/poison', async () => {
    const records = [
      dailyRecord('backfill-valid-1', { study_date: '2026-09-05' }),
      dailyRecord('backfill-poison-1', { study_date: '2026-09-06', correct: -1, incorrect: 2 }),
      dailyRecord('backfill-valid-2', { study_date: '2026-09-07', correct: 6, incorrect: 4 }),
    ]
    const provider = createDailyBackfillProvider(records)
    const providerRegistry = createBackfillProviderRegistry([provider])
    t.equal(providerRegistry.list(), ['daily_logs'])

    const { repository, ingestor } = createHarness({ family: 99400000 })
    const runStore = createMemoryBackfillRunStore()
    const dryRunId = uuid(30000000, 1)
    const secondDryRunId = uuid(30000000, 2)
    const applyRunId = uuid(30000000, 3)
    const secondApplyRunId = uuid(30000000, 4)
    await createBackfillRun(runStore, { runId: dryRunId, mode: 'dry_run' })
    await createBackfillRun(runStore, { runId: secondDryRunId, mode: 'dry_run' })
    const dryRun = await runBackfill({ runId: dryRunId, providerRegistry, ingestor, runStore, batchSize: 2 })
    const secondDryRun = await runBackfill({ runId: secondDryRunId, providerRegistry, ingestor, runStore, batchSize: 2 })
    t.equal(dryRun.status, 'completed')
    t.equal(dryRun.counts.scanned, 3)
    t.equal(dryRun.counts.would_create, 2)
    t.equal(dryRun.counts.error, 1)
    t.equal(dryRun.counts, secondDryRun.counts)
    t.equal(repository.snapshot().records.length, 0)
    t.equal(repository.snapshot().quarantines.length, 0)

    await createBackfillRun(runStore, { runId: applyRunId, mode: 'apply' })
    const apply = await runBackfill({ runId: applyRunId, providerRegistry, ingestor, runStore, batchSize: 2 })
    t.equal(apply.status, 'completed')
    t.equal(apply.counts.created, 2)
    t.equal(apply.counts.error, 1)
    t.equal(repository.snapshot().records.length, 2)
    t.check(repository.snapshot().records.some((row) => row.source_record_id === 'backfill-valid-2'))

    await createBackfillRun(runStore, { runId: secondApplyRunId, mode: 'apply' })
    const secondApply = await runBackfill({ runId: secondApplyRunId, providerRegistry, ingestor, runStore, batchSize: 2 })
    t.equal(secondApply.status, 'completed')
    t.equal(secondApply.counts.created, 0)
    t.equal(secondApply.counts.duplicate, 2)
    t.equal(secondApply.counts.error, 1)
    t.equal(repository.snapshot().records.length, 2)

    const pausedHarness = createHarness({ family: 99500000 })
    const pausedStore = createMemoryBackfillRunStore()
    const pausedRunId = uuid(30000000, 5)
    await createBackfillRun(pausedStore, { runId: pausedRunId, mode: 'apply' })
    const paused = await runBackfill({
      runId: pausedRunId,
      providerRegistry,
      ingestor: pausedHarness.ingestor,
      runStore: pausedStore,
      batchSize: 1,
      stopAfterPages: 1,
    })
    t.equal(paused.status, 'paused')
    t.equal(paused.cursor, '1')
    t.equal(paused.counts.scanned, 1)
    const resumed = await runBackfill({
      runId: pausedRunId,
      providerRegistry,
      ingestor: pausedHarness.ingestor,
      runStore: pausedStore,
      batchSize: 1,
    })
    t.equal(resumed.status, 'completed')
    t.equal(resumed.resumed, true)
    t.equal(resumed.counts.scanned, 3)
    t.equal(resumed.counts.created, 2)
    t.equal(resumed.counts.error, 1)
    t.equal(pausedHarness.repository.snapshot().records.length, 2)

    const cancelledRunId = uuid(30000000, 6)
    await createBackfillRun(pausedStore, { runId: cancelledRunId, mode: 'apply' })
    await pausedStore.cancel(cancelledRunId)
    const beforeCancel = pausedHarness.repository.snapshot().records.length
    const cancelled = await runBackfill({
      runId: cancelledRunId,
      providerRegistry,
      ingestor: pausedHarness.ingestor,
      runStore: pausedStore,
    })
    t.equal(cancelled.status, 'cancelled')
    t.equal(cancelled.resumed, false)
    t.equal(pausedHarness.repository.snapshot().records.length, beforeCancel)
  })

  const result = t.summary()
  const scenarioNames = result.sections
    .filter((name) => /^S(?:02|05|07|08|10|11|14)\b/.test(name))
    .map((name) => name.slice(0, 3))
  const summary = Object.freeze({
    status: 'passed',
    sections: result.sections.length,
    assertions: result.assertions,
    scenarios: Object.freeze(scenarioNames),
  })
  console.log(`\nFaz 2 JavaScript testleri geçti: ${summary.sections} bölüm, ${summary.assertions} doğrulama.`)
  return summary
}

const directRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href
if (directRun) {
  runPhase2NetworkJsTests()
    .then((summary) => console.log(JSON.stringify(summary)))
    .catch((error) => {
      console.error(error?.stack ?? String(error))
      process.exitCode = 1
    })
}
