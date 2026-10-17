/** Faz 10 projeksiyon görünürlüğü: yalnız yerel ve sentetik PostgreSQL. */
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PGlite } from '@electric-sql/pglite'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'
import { replayDiagnosticProjection } from '../src/lib/learning/network/projection.js'
import { replayStudentTopicProjection } from '../src/lib/learning/studentModel/projection.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const migration = readFileSync(join(root, 'supabase/migration_learning_hardening.sql'), 'utf8')
const start = migration.indexOf('create schema if not exists learning_private;')
const end = migration.indexOf('create or replace function learning_private.enforce_learning_source_event_flag()')
assert.ok(start >= 0 && end > start, 'Faz 9 bayrak SQL bölümü bulunmalı')
const rolloutSql = migration.slice(start, end)
const ids = {
  a: 'a0000000-0000-4000-8000-000000000001',
  b: 'a0000000-0000-4000-8000-000000000002',
  legacy: 'a0000000-0000-4000-8000-000000000010',
  global: 'a0000000-0000-4000-8000-000000000011',
  studentA: 'a0000000-0000-4000-8000-000000000012',
  studentB: 'a0000000-0000-4000-8000-000000000013',
  shadow: 'a0000000-0000-4000-8000-000000000014',
  recordA: 'a0000000-0000-4000-8000-000000000021',
  recordB: 'a0000000-0000-4000-8000-000000000022',
  recordLanguage: 'a0000000-0000-4000-8000-000000000023',
  cursor: 'a0000000-0000-4000-8000-000000000030',
  worker: 'a0000000-0000-4000-8000-000000000031',
}
let assertions = 0
function equal(actual, expected, message) {
  assertions += 1
  assert.deepEqual(actual, expected, message)
}
async function rows(db, table, generationId) {
  const result = await db.query(
    `select student_id::text, is_active, consumer_visible from public.${table}
      where generation_id = $1::uuid order by student_id`, [generationId],
  )
  return result.rows.map(({ student_id, is_active, consumer_visible }) => ({
    student_id, is_active, consumer_visible,
  }))
}
async function stage(db, generationId, projectionName, studentId = null) {
  await db.query(
    `insert into public.learning_projection_generations
       (generation_id, projection_name, projection_version, student_id, status)
     values ($1::uuid, $2::text, 'phase10-test@1', $3::uuid, 'building')`,
    [generationId, projectionName, studentId],
  )
  const table = projectionName === 'student_topic_model'
    ? 'student_learning_projection_rows' : 'learning_diagnostic_projection_rows'
  for (const id of studentId ? [studentId] : [ids.a, ids.b]) {
    await db.query(
      `insert into public.${table} (generation_id, student_id)
       values ($1::uuid, $2::uuid)`, [generationId, id],
    )
  }
  return table
}
async function activate(repository, generationId) {
  const result = await repository.activateProjectionGeneration(generationId, {
    checksum: 'phase10-test', rowCount: 2, highWaterMark: 1,
  })
  equal(result.status, 'active', 'nesil etkinleştirilmeli')
}

const db = new PGlite()
const summary = {
  schema_version: 'phase-10-projection-visibility@1', phase: 10, status: 'running',
  generated_at: null, assertions: 0, scenarios: [],
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, real_student_data_used: false,
    live_backfill_run: false, paid_model_call: false, deployment_performed: false,
    git_push_performed: false,
  },
  limitations: [
    'Bu test yerel nesil etkinleştirme, toplu tekrar seçimi ve artımlı claim yolunu doğrular; üretim yürütücüsü/gölge işleme entegrasyonu kanıtı değildir.',
    'Geri dönüş yordamı bu sentetik bağlantıda doğrulandı; çoklu bağlantı yarışı ayrı yerel provada geçse de canlı yetkiler ve üretim operasyon çağrısı henüz kanıtlanmadı.',
  ],
}
try {
  await db.exec(`
    create role anon nologin;
    create role authenticated nologin;
    create table public.profiles(id uuid primary key);
    insert into public.profiles(id) values ('${ids.a}'), ('${ids.b}');
    create table public.learning_evidence_records(
      record_id uuid primary key, student_id uuid not null, source_code text not null,
      ingestion_sequence bigint not null
    );
    insert into public.learning_evidence_records(record_id, student_id, source_code, ingestion_sequence)
    values ('${ids.recordA}', '${ids.a}', 'question_bank', 1),
           ('${ids.recordB}', '${ids.b}', 'question_bank', 2);
    create table public.learning_projection_cursors(
      cursor_id uuid primary key default '${ids.cursor}',
      projection_name text not null, projection_version text not null,
      student_id uuid, source_code text, last_ingestion_sequence bigint not null default 0,
      generation_id uuid, claimed_by uuid, claim_expires_at timestamptz,
      updated_at timestamptz
    );
    create table public.learning_evidence_processing(
      cursor_id uuid not null, projection_name text not null,
      projection_version text not null, record_id uuid not null,
      ingestion_sequence bigint not null, generation_id uuid,
      status text, retry_count integer, claimed_by uuid,
      claim_expires_at timestamptz, next_retry_at timestamptz,
      last_error_code text, processed_at timestamptz,
      updated_at timestamptz,
      unique(cursor_id, record_id)
    );
    create table public.learning_projection_generations(
      generation_id uuid primary key, projection_name text not null,
      projection_version text not null, student_id uuid, source_code text,
      status text not null, end_ingestion_sequence bigint, row_count bigint,
      checksum text, completed_at timestamptz, activated_at timestamptz,
      last_error_code text
    );
    create table public.learning_diagnostic_projection_rows(
      generation_id uuid not null, student_id uuid not null,
      is_active boolean not null default false,
      consumer_visible boolean not null default false,
      updated_at timestamptz
    );
    create table public.student_learning_projection_rows(
      generation_id uuid not null, student_id uuid not null,
      is_active boolean not null default false,
      consumer_visible boolean not null default false
    );
    create table public.student_behavior_patterns(
      generation_id uuid not null, student_id uuid not null,
      is_active boolean not null default false,
      consumer_visible boolean not null default false
    );
  `)
  const repository = createPgLearningEvidenceRepository(db)
  equal(await repository.listReplayStudents(), [ids.a, ids.b],
    'Faz 9 öncesi toplu tekrar iki hesabı da bulmalı')
  const legacyTable = await stage(db, ids.legacy, 'diagnostic')
  await activate(repository, ids.legacy)
  equal((await rows(db, legacyTable, ids.legacy)).map((row) => row.consumer_visible),
    [true, true], 'Faz 9 öncesi küresel davranış korunmalı')
  summary.scenarios.push('Faz 9 öncesi küresel davranış')

  await db.exec(rolloutSql)
  await db.query(
    `insert into learning_private.learning_student_feature_flags
       (feature_key, student_id, enabled, mode)
    values ('projection', $1::uuid, true, 'enabled')`, [ids.a],
  )
  equal(await repository.listReplayStudents(), [ids.a],
    'Faz 9 sonrası toplu tekrar yalnız açılan hesabı seçmeli')
  equal(await repository.isProjectionExecutionEnabled(ids.a), true,
    'seçili öğrenci hesaplanabilir')
  equal(await repository.isProjectionExecutionEnabled(ids.b), false,
    'pilot dışı öğrenci hesaplanamaz')
  await assert.rejects(
    replayStudentTopicProjection({ repository, studentId: ids.b,
      asOf: '2026-10-07T00:00:00.000Z' }),
    { code: 'PROJECTION_FLAG_DISABLED' },
    'açıkça istenen pilot dışı tekrar da reddedilmeli',
  )
  assertions += 1
  const disabledCount = (await db.query(
    'select count(*)::integer as total from public.learning_projection_generations',
  )).rows[0].total
  await assert.rejects(
    replayDiagnosticProjection({ repository, studentId: ids.b }),
    { code: 'PROJECTION_FLAG_DISABLED' },
    'tanısal tekrar pilot dışı öğrenciyi nesil açmadan reddetmeli',
  )
  assertions += 1
  equal((await db.query(
    'select count(*)::integer as total from public.learning_projection_generations',
  )).rows[0].total, disabledCount, 'reddedilen tanısal tekrar yeni nesil yazmamalı')
  const cursorCount = (await db.query(
    'select count(*)::integer as total from public.learning_projection_cursors',
  )).rows[0].total
  let blockedHandlerCalled = false
  const blockedClaim = await repository.runProjectionClaim({
    projectionName: 'diagnostic', projectionVersion: 'phase10-test@1',
    workerId: ids.worker, batchSize: 10, studentId: ids.b,
  }, async () => { blockedHandlerCalled = true; return {} })
  equal(blockedClaim.code, 'projection_flag_disabled',
    'açıkça istenen pilot dışı artımlı işleme ön kapıda durmalı')
  equal(blockedHandlerCalled, false,
    'pilot dışı hesabın işleyicisi çalıştırılmamalı')
  equal((await db.query(
    'select count(*)::integer as total from public.learning_projection_cursors',
  )).rows[0].total, cursorCount,
  'pilot dışı artımlı işleme imleç oluşturmamalı')
  summary.scenarios.push('toplu tekrar seçimi')
  const globalTable = await stage(db, ids.global, 'diagnostic')
  await activate(repository, ids.global)
  equal((await rows(db, globalTable, ids.global)).map((row) => row.consumer_visible),
    [true, false], 'küresel nesilde yalnız seçili öğrenci görünmeli')
  summary.scenarios.push('küresel nesilde öğrenci bazlı görünürlük')

  const claim = await repository.runProjectionClaim({
    projectionName: 'diagnostic', projectionVersion: 'phase10-test@1',
    workerId: ids.worker, batchSize: 10,
  }, async ({ records }) => ({
    rows: [], replaceStudentIds: [], patterns: [], evidenceRefs: [],
    quarantinedRecordIds: [], selectedRecordIds: records.map((row) => row.record_id),
    lastSequence: records.at(-1)?.ingestion_sequence ?? 0,
  }))
  equal(claim.selectedRecordIds, [ids.recordA],
    'artımlı yürütücü pilot dışı kaydı seçmemeli')
  equal((await db.query('select record_id::text from public.learning_evidence_processing')).rows
    .map((row) => row.record_id), [ids.recordA],
  'pilot dışı kayıt işleme defterine yazılmamalı')
  summary.scenarios.push('artımlı yürütücü seçimi')

  const modelTable = await stage(db, ids.studentA, 'student_topic_model', ids.a)
  await db.query(
    `insert into public.student_behavior_patterns(generation_id, student_id)
     values ($1::uuid, $2::uuid)`, [ids.studentA, ids.a],
  )
  await activate(repository, ids.studentA)
  equal((await rows(db, modelTable, ids.studentA)).map((row) => row.consumer_visible),
    [true], 'seçili öğrencinin öğrenci kapsamlı modeli görünmeli')
  equal((await rows(db, 'student_behavior_patterns', ids.studentA)).map((row) => row.consumer_visible),
    [true], 'seçili öğrencinin örüntüsü görünmeli')
  summary.scenarios.push('öğrenci kapsamlı model ve örüntü')

  await stage(db, ids.studentB, 'student_topic_model', ids.b)
  await activate(repository, ids.studentB)
  equal((await rows(db, modelTable, ids.studentB)).map((row) => row.consumer_visible),
    [false], 'seçilmeyen öğrenci görünmemeli')
  summary.scenarios.push('pilot dışı hesap görünmez')

  await db.query(
    `update learning_private.learning_student_feature_flags
        set mode = 'shadow' where feature_key = 'projection' and student_id = $1::uuid`,
    [ids.a],
  )
  equal(await repository.listReplayStudents(), [ids.a],
    'gölge kipte hesaplama sürer')
  equal(await repository.isProjectionExecutionEnabled(ids.a), true,
    'gölge kipte açık hesap işlenebilir')
  await stage(db, ids.shadow, 'diagnostic')
  await activate(repository, ids.shadow)
  equal((await rows(db, globalTable, ids.shadow)).map((row) => row.consumer_visible),
    [false, false], 'gölge kipte yeni nesil görünmemeli')
  summary.scenarios.push('gölge kipte görünmezlik')

  const revoked = await repository.revokeStudentProjectionVisibility(ids.a)
  equal(revoked.model_rows_hidden, 1, 'geri dönüş model satırını gizlemeli')
  equal(revoked.pattern_rows_hidden, 1, 'geri dönüş örüntüyü gizlemeli')
  equal((await rows(db, modelTable, ids.studentA)).map((row) => row.consumer_visible),
    [false], 'önceden görünür model satırı artık görünmemeli')
  equal((await rows(db, 'student_behavior_patterns', ids.studentA)).map((row) => row.consumer_visible),
    [false], 'önceden görünür örüntü artık görünmemeli')
  equal((await db.query(
    `select enabled, mode from learning_private.learning_student_feature_flags
      where feature_key = 'projection' and student_id = $1::uuid`, [ids.a],
  )).rows[0], { enabled: false, mode: 'disabled' },
  'geri dönüş bayrağı aynı işlemde kapatmalı')
  equal(await repository.listReplayStudents(), [],
    'bayrak kapalıyken toplu tekrar listesi boş olmalı')
  const countBefore = (await db.query('select count(*)::integer as total from public.learning_projection_generations')).rows[0].total
  await assert.rejects(
    replayStudentTopicProjection({ repository, asOf: '2026-10-07T00:00:00.000Z' }),
    { code: 'PROJECTION_NO_ELIGIBLE_STUDENTS' },
    'hiç uygun öğrenci yokken boş nesil etkinleştirilmemeli',
  )
  assertions += 1
  equal((await db.query('select count(*)::integer as total from public.learning_projection_generations')).rows[0].total,
    countBefore, 'kapalı bayrakta yeni nesil yazılmamalı')
  await assert.rejects(
    replayDiagnosticProjection({ repository }),
    { code: 'PROJECTION_NO_ELIGIBLE_STUDENTS' },
    'tanısal toplu tekrar uygun öğrenci yokken boş nesil etkinleştirmemeli',
  )
  assertions += 1
  equal((await db.query('select count(*)::integer as total from public.learning_projection_generations')).rows[0].total,
    countBefore, 'tanısal toplu tekrar da kapalı bayrakta yeni nesil yazmamalı')
  summary.scenarios.push('kapalı bayrakta işleme yok')

  await db.query(
    `insert into public.learning_evidence_records(record_id, student_id, source_code, ingestion_sequence)
     values ($1::uuid, $2::uuid, 'language_progress', 3)`,
    [ids.recordLanguage, ids.b],
  )
  await db.query(
    `insert into learning_private.learning_feature_flags
       (feature_key, scope_type, scope_key, enabled, mode)
     values ('projection', 'source', 'question_bank', true, 'enabled')`,
  )
  equal(await repository.listReplayStudents(), [],
    'geniş kaynak bayrağı öğrenciye özel pilot sınırını aşmamalı')
  equal((await repository.listLedgerBatch({ studentId: ids.b })).map((row) => row.record_id),
    [], 'geniş kaynak ve kapalı dil kayıtları model girdisine alınmamalı')
  equal(await repository.isProjectionExecutionEnabled(ids.b), false,
    'geniş kaynak bayrağı pilot dışı öğrenciyi açmamalı')
  summary.scenarios.push('geniş kaynak bayrağı pilot sınırını aşamaz')

  summary.status = 'passed'
  summary.assertions = assertions
  console.log(`Faz 10 projeksiyon görünürlüğü: ${assertions} doğrulama geçti.`)
} catch (error) {
  summary.status = 'failed'
  summary.assertions = assertions
  summary.error = { code: error.code ?? 'ASSERTION_FAILED', message: error.message }
  console.error(error)
  process.exitCode = 1
} finally {
  summary.generated_at = new Date().toISOString()
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-gorunurlugu.json'),
    `${JSON.stringify(summary, null, 2)}\n`)
  await db.close()
}
