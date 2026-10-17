/** Faz 10 projeksiyon uygulama/geri dönüşü: izole gerçek PostgreSQL, sentetik hesaplar. */
import assert from 'node:assert/strict'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import EmbeddedPostgres from 'embedded-postgres'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'
import { runPilotProjectionCycle } from '../api/_lib/learning/pilotProjection.js'
import {
  extractPrelude, seedSyntheticLiveShape, freePort, postgresDb,
  MIGRATIONS, applyMigration,
} from './test-phase-10-live-volume-rehearsal.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))
const output = join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-pg-uygulama.json')
const ids = {
  a: '10000000-0000-4000-8000-000000000002',
  b: '10000000-0000-4000-8000-000000000003',
}
const asOf = '2026-10-08T12:00:00.000Z'
const rolloutMigration = readFileSync(join(root, 'supabase/migration_learning_hardening.sql'), 'utf8')
const rolloutStart = rolloutMigration.indexOf('create schema if not exists learning_private;')
const rolloutEnd = rolloutMigration.indexOf('create or replace function learning_private.enforce_learning_source_event_flag()')
assert.ok(rolloutStart >= 0 && rolloutEnd > rolloutStart, 'Faz 9 öğrenci bayrağı bölümü bulunmalı')
let assertions = 0
function equal(actual, expected, label) { assertions += 1; assert.deepEqual(actual, expected, label) }
async function insertEvidence(client, studentId, number) {
  const recordId = 'd2000000-0000-4000-8000-' + String(number).padStart(12, '0')
  await client.query(`
    insert into public.learning_evidence_records (
      record_id,contract_version,schema_version,source_registry_version,record_kind,student_id,actor_id,
      actor_role,actor_student_relation,source_code,source_record_id,source_revision,semantic_event_type,
      activity_type,occurred_at,occurred_at_precision,recorded_at,education_context_id,subject_id,topic_id,
      identity_resolution,curriculum_identity_version,curriculum_ledger_version,curriculum_aliases_version,
      evidence_class,evidence_strength,trust_level,provenance,source_availability,measurement,relations,metadata,
      source_adapter_version,topic_resolver_version,dedupe_key,semantic_fingerprint,retention_class,record_origin
    ) values (
      $1::uuid,'learning-evidence@1','1.0','learning-source-registry@1','event',$2::uuid,$2::uuid,
      'student','self','daily_logs',$3::text,'v1','study_session_reported',
      'study_session_reported','2026-09-10T12:00:00Z','exact','2026-09-13T12:00:00Z',
      'drkoc:curriculum:context:v1:tyt','drkoc:curriculum:subject:v1:s008',
      'drkoc:curriculum:topic:v1:t0052',
      '{"status":"direct_stable_id","canonicalId":"drkoc:curriculum:topic:v1:t0052"}'::jsonb,
      'curriculum-identity@1','curriculum-ledger@1','curriculum-aliases@1',
      'student_self_report','low','account_bound','authoritative_source','available',
      '{"correct_count":2,"incorrect_count":3,"blank_count":0,"total_count":5}'::jsonb,
      '{}'::jsonb,'{}'::jsonb,'learning-source-adapters@1','topic-resolver@1',
      $4::text,repeat('c',64),'academic_policy_pending','synthetic'
    )
  `, [recordId, studentId, 'phase10-operator-' + number, 'phase10-operator-dedupe-' + number])
}

const report = {
  schema_version: 'phase-10-projection-pg-apply@1', phase: 10,
  status: 'running', generated_at: null, assertions: 0,
  engine: 'isolated PostgreSQL', synthetic_students: 2,
  side_effects: { live_supabase_read: false, live_supabase_write: false,
    real_student_data_used: false, paid_model_call: false, deployment_performed: false },
  limitations: [
    'Gerçek PostgreSQL üzerinde sentetik yazma/geri dönüş provasıdır; canlı Supabase, gerçek öğrenci pilotu veya üretim zamanlayıcısı kanıtı değildir.',
  ],
}
const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-faz10-projection-apply-'))
const port = await freePort()
const server = new EmbeddedPostgres({
  databaseDir, port, user: 'postgres', password: 'synthetic-projection-apply',
  persistent: false, onLog() {}, onError() {},
})
let client
let failed = false
try {
  await server.initialise()
  await server.start()
  client = server.getPgClient()
  await client.connect()
  const db = postgresDb(client)
  await db.exec(extractPrelude())
  await seedSyntheticLiveShape(db)
  await applyMigration(db, MIGRATIONS.find((item) => item.phase === 2))
  await db.exec(readFileSync(join(root, 'supabase/migration_learning_student_topic_model.sql'), 'utf8'))
  await db.exec(rolloutMigration.slice(rolloutStart, rolloutEnd))
  for (const [index, studentId] of [ids.a, ids.b].entries()) await insertEvidence(client, studentId, index + 1)
  await client.query(`
    insert into learning_private.learning_student_feature_flags
      (feature_key, student_id, enabled, mode)
    values ('projection',$1::uuid,true,'enabled'),
           ('projection',$2::uuid,true,'enabled')
  `, [ids.a, ids.b])
  const repository = createPgLearningEvidenceRepository(client)
  equal(await repository.isProjectionRolloutInstalled(), true, 'Faz 9 bayrağı kurulmuş olmalı')
  const dry = await runPilotProjectionCycle({
    repository, studentIds: [ids.a], approvedStudentIds: [ids.a, ids.b], asOf,
  })
  equal(dry.students[0].diagnostic.row_count > 0, true, 'tanısal kuru hesap satır üretmeli')
  equal(dry.students[0].model.row_count > 0, true, 'model kuru hesap satır üretmeli')
  const applied = await runPilotProjectionCycle({
    repository, studentIds: [ids.a], approvedStudentIds: [ids.a, ids.b],
    asOf, mode: 'apply', allowApply: true,
  })
  equal(applied.students[0].diagnostic.checksum, dry.students[0].diagnostic.checksum,
    'tanısal kuru/yazılan checksum aynı olmalı')
  equal(applied.students[0].model.checksum, dry.students[0].model.checksum,
    'model kuru/yazılan checksum aynı olmalı')
  const visible = await client.query(`
    select (select count(*)::integer from public.learning_diagnostic_projection_rows
             where student_id=$1::uuid and consumer_visible) as diagnostic,
           (select count(*)::integer from public.student_learning_projection_rows
             where student_id=$1::uuid and consumer_visible) as model
  `, [ids.a])
  equal(visible.rows[0].diagnostic > 0 && visible.rows[0].model > 0, true,
    'yazılan seçili hesap iki projeksiyonda görünür olmalı')
  const sourceBefore = (await client.query(
    'select count(*)::integer as total from public.learning_evidence_records',
  )).rows[0].total
  let failingGeneration = null
  const failingRepository = {
    ...repository,
    beginProjectionGeneration: async (options) => {
      const generation = await repository.beginProjectionGeneration(options)
      if (options.studentId === ids.b && options.projectionName === 'student_topic_model') {
        failingGeneration = generation.generation_id
      }
      return generation
    },
    stageStudentModelDetails: async (generationId, details) => {
      if (generationId === failingGeneration) throw new Error('synthetic_model_write_failure')
      return repository.stageStudentModelDetails(generationId, details)
    },
  }
  await assert.rejects(
    runPilotProjectionCycle({
      repository: failingRepository, studentIds: [ids.a, ids.b],
      approvedStudentIds: [ids.a, ids.b], asOf, mode: 'apply', allowApply: true,
    }),
    /synthetic_model_write_failure/,
    'ikinci hesapta hata geri dönüşü başlatmalı',
  )
  assertions += 1
  const flags = await client.query(`
    select student_id::text, enabled, mode
      from learning_private.learning_student_feature_flags
     where feature_key='projection' and student_id=any($1::uuid[])
     order by student_id
  `, [[ids.a, ids.b]])
  equal(flags.rows, [
    { student_id: ids.a, enabled: false, mode: 'disabled' },
    { student_id: ids.b, enabled: false, mode: 'disabled' },
  ], 'kısmi hata iki seçili hesabın bayrağını kapatmalı')
  const hidden = await client.query(`
    select
      (select count(*)::integer from public.learning_diagnostic_projection_rows
        where student_id=any($1::uuid[]) and consumer_visible) as diagnostic,
      (select count(*)::integer from public.student_learning_projection_rows
        where student_id=any($1::uuid[]) and consumer_visible) as model
  `, [[ids.a, ids.b]])
  equal(hidden.rows[0], { diagnostic: 0, model: 0 },
    'geri dönüş önceden görünür satırları da gizlemeli')
  const sourceAfter = (await client.query(
    'select count(*)::integer as total from public.learning_evidence_records',
  )).rows[0].total
  equal(sourceAfter, sourceBefore, 'projeksiyon ve geri dönüş kaynak defteri değiştirmemeli')
  report.status = 'passed'
  report.assertions = assertions
  console.log('Faz 10 gerçek PostgreSQL uygulama/geri dönüş: ' + assertions + ' doğrulama geçti.')
} catch (error) {
  failed = true
  report.status = 'failed'
  report.assertions = assertions
  report.error = { code: error.code ?? 'ASSERTION_FAILED', message: error.message }
  console.error(error)
} finally {
  await client?.end().catch(() => {})
  await server.stop().catch(() => {})
  rmSync(databaseDir, { recursive: true, force: true })
  report.generated_at = new Date().toISOString()
  writeFileSync(output, JSON.stringify(report, null, 2) + '\n')
}
if (failed) process.exit(1)
