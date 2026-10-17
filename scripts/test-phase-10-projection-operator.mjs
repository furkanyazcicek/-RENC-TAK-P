/** Faz 10 işletim yolu: yalnız sentetik bellek deposu, canlı bağlantı yok. */
import assert from 'node:assert/strict'
import { spawnSync } from 'node:child_process'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import EmbeddedPostgres from 'embedded-postgres'
import { createMemoryLearningEvidenceRepository } from '../src/lib/learning/network/memoryRepository.js'
import { runPilotProjectionCycle } from '../api/_lib/learning/pilotProjection.js'
import { freePort } from './test-phase-10-live-volume-rehearsal.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))
const out = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-isletim-provasi.json')
const ids = {
  a: 'd0000000-0000-4000-8000-000000000001',
  b: 'd0000000-0000-4000-8000-000000000002',
  outside: 'd0000000-0000-4000-8000-000000000003',
}
const asOf = '2026-10-08T12:00:00.000Z'
let assertions = 0
function equal(actual, expected, label) { assertions += 1; assert.deepEqual(actual, expected, label) }
async function rejects(action, expected, label) {
  assertions += 1
  await assert.rejects(action, expected, label)
}
function evidence(studentId, number) {
  const recordId = `d1000000-0000-4000-8000-${String(number).padStart(12, '0')}`
  return {
    record_id: recordId, record_kind: 'event', student_id: studentId,
    source_code: 'question_bank', source_record_id: `pilot-${number}`,
    source_revision: 'v1', semantic_event_type: 'question_answered',
    occurred_at: '2026-10-07T12:00:00.000Z', occurred_at_precision: 'exact',
    recorded_at: asOf, education_context_id: 'drkoc:curriculum:context:v1:tyt',
    subject_id: 'drkoc:curriculum:subject:v1:s008',
    topic_id: 'drkoc:curriculum:topic:v1:t0052',
    identity_resolution: { status: 'direct_stable_id', canonicalId: 'drkoc:curriculum:topic:v1:t0052' },
    evidence_class: 'direct_measurement', evidence_strength: 'medium',
    measurement: { correct_count: 4, incorrect_count: 1, blank_count: 0, total_count: 5, difficulty: 'medium' },
    relations: { attempt_id: `pilot-attempt-${number}` }, metadata: {},
    source_locator: `drkoc-ref:v1:question_bank:pilotopaque${number}`,
    dedupe_key: `pilot|${studentId}|${number}`,
  }
}
async function fixture({ installed = true, enabled = [ids.a, ids.b], failSecondModel = false } = {}) {
  const base = createMemoryLearningEvidenceRepository()
  await base.ingest(evidence(ids.a, 1), 'synthetic-fingerprint-a')
  await base.ingest(evidence(ids.b, 2), 'synthetic-fingerprint-b')
  let started = 0
  const revoked = []
  const repository = {
    ...base,
    isProjectionRolloutInstalled: async () => installed,
    isProjectionExecutionEnabled: async (id) => enabled.includes(id),
    beginProjectionGeneration: async (options) => {
      started += 1
      return base.beginProjectionGeneration(options)
    },
    activateProjectionGeneration: async (generationId, summary) => {
      const studentBModel = failSecondModel && generationId === 'memory-generation-4'
      if (studentBModel) throw new Error('synthetic_second_student_failure')
      return base.activateProjectionGeneration(generationId, summary)
    },
    revokeStudentProjectionVisibility: async (id) => { revoked.push(id) },
  }
  return { repository, getStarted: () => started, revoked }
}

async function localPostgresCliRehearsal() {
  const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-faz10-projection-operator-'))
  const port = await freePort()
  const password = 'synthetic-projection-local-only'
  const server = new EmbeddedPostgres({
    databaseDir, port, user: 'postgres', password, persistent: false,
    onLog() {}, onError() {},
  })
  let client
  try {
    await server.initialise()
    await server.start()
    client = server.getPgClient()
    await client.connect()
    await client.query(`
      create schema learning_private;
      create table learning_private.learning_student_feature_flags(
        student_id uuid primary key, enabled boolean not null, mode text not null
      );
      create function learning_private.resolve_learning_rollout(
        p_feature_key text, p_student_id uuid, p_source_code text, p_group_key text
      ) returns jsonb language sql stable as $fn$
        select case when p_feature_key = 'projection' and exists (
          select 1 from learning_private.learning_student_feature_flags
           where student_id = p_student_id and enabled and mode in ('enabled','shadow')
        ) then '{"enabled":true,"scope_type":"student","mode":"enabled"}'::jsonb
        else '{"enabled":false,"scope_type":"student","mode":"disabled"}'::jsonb end;
      $fn$;
      create table public.learning_evidence_records(
        record_id uuid primary key, ingestion_sequence bigint not null,
        record_kind text, student_id uuid not null, source_code text not null,
        source_record_id text, source_revision text, semantic_event_type text,
        occurred_at timestamptz, occurred_at_precision text, recorded_at timestamptz,
        education_context_id text, subject_id text, topic_id text,
        identity_resolution jsonb, evidence_class text, evidence_strength text,
        measurement jsonb, relations jsonb, metadata jsonb,
        source_locator text, dedupe_key text
      );
    `)
    await client.query(`
      insert into learning_private.learning_student_feature_flags(student_id, enabled, mode)
      values ($1::uuid, true, 'enabled'), ($2::uuid, false, 'disabled')
    `, [ids.a, ids.b])
    for (const [index, studentId] of [ids.a, ids.b].entries()) {
      const record = evidence(studentId, index + 1)
      await client.query(`
        insert into public.learning_evidence_records(
          record_id, ingestion_sequence, record_kind, student_id, source_code,
          source_record_id, source_revision, semantic_event_type,
          occurred_at, occurred_at_precision, recorded_at,
          education_context_id, subject_id, topic_id, identity_resolution,
          evidence_class, evidence_strength, measurement, relations,
          metadata, source_locator, dedupe_key
        ) values (
          $1::uuid, $2::bigint, $3::text, $4::uuid, $5::text,
          $6::text, $7::text, $8::text, $9::timestamptz, $10::text,
          $11::timestamptz, $12::text, $13::text, $14::text,
          $15::jsonb, $16::text, $17::text, $18::jsonb,
          $19::jsonb, $20::jsonb, $21::text, $22::text
        )
      `, [
        record.record_id, index + 1, record.record_kind, studentId, record.source_code,
        record.source_record_id, record.source_revision, record.semantic_event_type,
        record.occurred_at, record.occurred_at_precision, record.recorded_at,
        record.education_context_id, record.subject_id, record.topic_id,
        record.identity_resolution, record.evidence_class, record.evidence_strength,
        record.measurement, record.relations, record.metadata,
        record.source_locator, record.dedupe_key,
      ])
    }

    const localProbe = join(root, 'scripts/phase-10-projection-dry-run.mjs')
    const connection = 'postgresql://postgres:' + password + '@127.0.0.1:' + port + '/postgres'
    const baseEnv = { ...process.env, DRKOC_PHASE10_LOCAL_DATABASE_URL: connection,
      DRKOC_PHASE10_APPROVED_TEST_IDS: ids.a }
    const successful = spawnSync(process.execPath,
      [localProbe, '--student-id', ids.a, '--as-of', asOf],
      { cwd: root, encoding: 'utf8', env: baseEnv, timeout: 30000 })
    equal(successful.status, 0,
      `gerçek yerel PostgreSQL kuru provası geçmeli: ${successful.stderr.trim()}`)
    const result = JSON.parse(successful.stdout)
    equal(result.mode, 'dry_compare', 'yerel komut yalnız kuru karşılaştırma yapmalı')
    equal(result.student_count, 1, 'yalnız açık test hesabı seçilmeli')
    equal(result.students[0].diagnostic.row_count > 0
      && result.students[0].model.row_count > 0, true,
    'iki projeksiyon gerçek PostgreSQL satırından hesaplanmalı')
    equal(successful.stdout.includes(ids.a) || successful.stdout.includes(ids.b), false,
      'yerel komut öğrenci kimliklerini basmamalı')
    const outside = spawnSync(process.execPath,
      [localProbe, '--student-id', ids.b, '--as-of', asOf],
      { cwd: root, encoding: 'utf8', env: baseEnv, timeout: 30000 })
    equal(outside.status, 1, 'pilot dışı hesap yerel bağlantıda da reddedilmeli')
    equal(outside.stderr.includes('PILOT_STUDENT_NOT_APPROVED'), true,
      'pilot dışı ret sınıfı kişisel içerik olmadan dönmeli')
    const unchanged = (await client.query(`
      select count(*)::integer as total from public.learning_evidence_records
    `)).rows[0].total
    equal(unchanged, 2, 'kuru prova kaynak kanıt satırlarını değiştirmemeli')
    return { engine: 'isolated PostgreSQL', source_records: 2, writes: 0 }
  } finally {
    await client?.end().catch(() => {})
    await server.stop().catch(() => {})
    rmSync(databaseDir, { recursive: true, force: true })
  }
}

const report = {
  schema_version: 'phase-10-projection-operator@1', phase: 10,
  status: 'running', generated_at: null, assertions: 0, scenarios: [],
  side_effects: { live_supabase_read: false, live_supabase_write: false,
    real_student_data_used: false, paid_model_call: false, deployment_performed: false },
  limitations: [
    'Yazma/geri dönüş akışı sentetik bellek deposunda, salt okunur CLI izole gerçek PostgreSQL üzerinde sınandı; canlı yürütücü, canlı yetki ve gerçek öğrenci pilotu kanıtı değildir.',
    'localhost adresi bir tünele yönlendirilebilir; komut salt okunur işlem ve sunucunun bildirdiği yerel adresi de denetler, fakat hedef kimliğinin bağımsız doğrulamasının yerini almaz.',
  ],
}
let failed = false
try {
  const { repository, getStarted } = await fixture()
  await rejects(() => runPilotProjectionCycle({ repository, studentIds: [ids.a, ids.outside],
    approvedStudentIds: [ids.a, ids.b], asOf }), { code: 'PILOT_STUDENT_NOT_APPROVED' },
  'onaylı liste dışı öğrenci reddedilmeli')
  await rejects(() => runPilotProjectionCycle({ repository, studentIds: [ids.a, ids.a],
    approvedStudentIds: [ids.a, ids.b], asOf }), /pilot_students_duplicate/,
  'çift öğrenci kimliği reddedilmeli')
  await rejects(() => runPilotProjectionCycle({ repository, studentIds: [ids.a],
    approvedStudentIds: [ids.a, ids.b], asOf, mode: 'apply' }),
  { code: 'PILOT_APPLY_NOT_AUTHORIZED' }, 'yazma ayrıca açılmadıkça reddedilmeli')
  equal(getStarted(), 0, 'ön kapı reddi nesil açmamalı')
  report.scenarios.push('kesin hesap listesi ve ayrı yazma kapısı')

  const unavailable = await fixture({ installed: false })
  await rejects(() => runPilotProjectionCycle({ repository: unavailable.repository,
    studentIds: [ids.a], approvedStudentIds: [ids.a], asOf }),
  { code: 'PILOT_PROJECTION_ROLLOUT_SCHEMA_MISSING' },
  'Faz 9 karar şeması olmadan pilot çalışmamalı')
  equal(unavailable.getStarted(), 0, 'eksik şema nesil açmamalı')
  const disabled = await fixture({ enabled: [ids.a] })
  await rejects(() => runPilotProjectionCycle({ repository: disabled.repository,
    studentIds: [ids.a, ids.b], approvedStudentIds: [ids.a, ids.b], asOf }),
  { code: 'PILOT_PROJECTION_FLAG_DISABLED' },
  'seçili listedeki kapalı öğrenci bütün çevrimi durdurmalı')
  equal(disabled.getStarted(), 0, 'kapalı hesap ön kontrolde nesil açmamalı')
  report.scenarios.push('Faz 9 şema ve öğrenci bayrağı zorunlu')

  const dry = await runPilotProjectionCycle({ repository, studentIds: [ids.a, ids.b],
    approvedStudentIds: [ids.a, ids.b], asOf })
  equal(dry.mode, 'dry_compare', 'varsayılan yalnız kuru karşılaştırma olmalı')
  equal(dry.student_count, 2, 'yalnız iki seçili hesap işlenmeli')
  equal(getStarted(), 0, 'kuru karşılaştırma nesil açmamalı')
  equal(dry.students.every((student) => student.diagnostic.row_count > 0
    && student.model.row_count > 0), true, 'iki projeksiyon sonuç üretmeli')
  equal(JSON.stringify(dry).includes(ids.a) || JSON.stringify(dry).includes(ids.b), false,
    'rapor gerçek öğrenci kimliği içermemeli')
  equal(dry.students.some((student) => 'rows' in student.model), false,
    'rapor ham model satırı içermemeli')
  report.scenarios.push('öğrenci bazlı kuru karşılaştırma ve gizli özet')

  const applied = await runPilotProjectionCycle({ repository, studentIds: [ids.a, ids.b],
    approvedStudentIds: [ids.a, ids.b], asOf, mode: 'apply', allowApply: true })
  equal(applied.mode, 'apply', 'yerel yazma yolu açıkça seçilmeli')
  equal(getStarted(), 4, 'iki öğrenci için iki ayrı projeksiyon nesli oluşmalı')
  equal(applied.students.map((student) => student.model.checksum),
    dry.students.map((student) => student.model.checksum),
    'kuru/yazılan öğrenci modeli checksumları aynı olmalı')
  equal(applied.students.map((student) => student.diagnostic.checksum),
    dry.students.map((student) => student.diagnostic.checksum),
    'kuru/yazılan tanısal checksumlar aynı olmalı')
  report.scenarios.push('karşılaştırma sonrası öğrenci bazlı yazma eşitliği')

  const failing = await fixture({ failSecondModel: true })
  await rejects(() => runPilotProjectionCycle({ repository: failing.repository,
    studentIds: [ids.a, ids.b], approvedStudentIds: [ids.a, ids.b], asOf,
    mode: 'apply', allowApply: true }), /synthetic_second_student_failure/,
  'ikinci öğrencide hata işletimi durdurmalı')
  equal(failing.revoked, [ids.b, ids.a], 'hata mevcut ve önceki öğrenciyi kapatmalı')
  report.scenarios.push('kısmi başarısızlıkta seçili hesapları kapatma')

  const localProbe = join(root, 'scripts/phase-10-projection-dry-run.mjs')
  const commandArgs = [localProbe, '--student-id', ids.a, '--as-of', asOf]
  const missingConnection = spawnSync(process.execPath, commandArgs, {
    cwd: root, encoding: 'utf8',
    env: { ...process.env, DRKOC_PHASE10_LOCAL_DATABASE_URL: '' },
  })
  equal(missingConnection.status, 1, 'bağlantı yoksa yerel CLI durmalı')
  equal(missingConnection.stderr.includes('local_database_url_required'), true,
    'bağlantı yokluğu güvenli hata sınıfıyla anlatılmalı')
  const remoteTarget = spawnSync(process.execPath, commandArgs, {
    cwd: root, encoding: 'utf8',
    env: { ...process.env, DRKOC_PHASE10_LOCAL_DATABASE_URL: 'postgresql://synthetic:synthetic@db.example.invalid/postgres' },
  })
  equal(remoteTarget.status, 1, 'uzak veritabanı hedefi açılmamalı')
  equal(remoteTarget.stderr.includes('local_database_target_required'), true,
    'uzak hedef ağ bağlantısından önce reddedilmeli')
  report.scenarios.push('yerel salt okunur CLI hedef kapısı')

  report.local_postgres = await localPostgresCliRehearsal()
  report.scenarios.push('gerçek yerel PostgreSQL üzerinde yalnız seçili hesap kuru provası')

  report.status = 'passed'
  report.assertions = assertions
  console.log(`Faz 10 projeksiyon işletim provası: ${assertions} doğrulama geçti.`)
} catch (error) {
  report.status = 'failed'
  report.assertions = assertions
  report.error = { code: error.code ?? 'ASSERTION_FAILED', message: error.message }
  console.error(error)
  failed = true
} finally {
  report.generated_at = new Date().toISOString()
  writeFileSync(out, `${JSON.stringify(report, null, 2)}\n`)
}
if (failed) process.exit(1)
