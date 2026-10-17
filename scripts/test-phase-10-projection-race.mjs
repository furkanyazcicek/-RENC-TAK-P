/** Faz 10 geri dönüş sıralaması: yalnız izole, sentetik çoklu bağlantılı PostgreSQL. */
import assert from 'node:assert/strict'
import { readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { mkdtempSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import EmbeddedPostgres from 'embedded-postgres'
import { createPgLearningEvidenceRepository } from '../api/_lib/learning/repository.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const migration = readFileSync(join(root, 'supabase/migration_learning_hardening.sql'), 'utf8')
const rolloutSql = migration.slice(
  migration.indexOf('create schema if not exists learning_private;'),
  migration.indexOf('create or replace function learning_private.enforce_learning_source_event_flag()'),
)
assert.ok(rolloutSql.includes('resolve_learning_rollout'), 'Faz 9 karar fonksiyonu bulunmalı')
const ids = {
  student: 'b0000000-0000-4000-8000-000000000001',
  baseline: 'b0000000-0000-4000-8000-000000000010',
  first: 'b0000000-0000-4000-8000-000000000011',
  second: 'b0000000-0000-4000-8000-000000000012',
}
let assertions = 0
function equal(actual, expected, message) { assertions++; assert.deepEqual(actual, expected, message) }
async function freePort() {
  const server = createServer()
  await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve))
  const port = server.address().port
  await new Promise((resolve) => server.close(resolve))
  return port
}
async function waitForLock(client, pid) {
  for (let attempt = 0; attempt < 100; attempt++) {
    const result = await client.query(
      `select wait_event_type from pg_catalog.pg_stat_activity where pid = $1`, [pid],
    )
    if (result.rows[0]?.wait_event_type === 'Lock') return
    await new Promise((resolve) => setTimeout(resolve, 20))
  }
  throw new Error('projection_lock_wait_not_observed')
}
async function stage(client, generationId) {
  await client.query(
    `insert into public.learning_projection_generations
       (generation_id, projection_name, projection_version, status)
     values ($1::uuid, 'student_topic_model', 'phase10-race@1', 'building')`, [generationId],
  )
  await client.query(
    `insert into public.student_learning_projection_rows(generation_id, student_id)
     values ($1::uuid, $2::uuid)`, [generationId, ids.student],
  )
}
async function visible(client, generationId) {
  const result = await client.query(
    `select consumer_visible from public.student_learning_projection_rows
      where generation_id = $1::uuid and student_id = $2::uuid`,
    [generationId, ids.student],
  )
  return result.rows[0]?.consumer_visible
}

const summary = {
  schema_version: 'phase-10-projection-race@1', phase: 10, status: 'running',
  generated_at: null, assertions: 0, scenarios: [],
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, real_student_data_used: false,
    live_backfill_run: false, paid_model_call: false, deployment_performed: false,
    git_push_performed: false,
  },
  limitations: ['İzole PostgreSQL kilit sıralaması kanıtıdır; canlı platform yetkisi veya gerçek pilot değildir.'],
}
const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-phase10-projection-race-'))
const server = new EmbeddedPostgres({
  databaseDir, port: await freePort(), user: 'postgres', password: 'phase10-local-only',
  persistent: false, onLog: () => {}, onError: () => {},
})
const clients = []
try {
  await server.initialise()
  await server.start()
  const admin = server.getPgClient()
  const writer = server.getPgClient()
  const revoker = server.getPgClient()
  clients.push(admin, writer, revoker)
  await Promise.all(clients.map((client) => client.connect()))
  await admin.query(`
    create role anon nologin;
    create role authenticated nologin;
    create table public.profiles(id uuid primary key);
    insert into public.profiles(id) values ('${ids.student}');
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
  await admin.query(rolloutSql)
  await admin.query(
    `insert into learning_private.learning_student_feature_flags
       (feature_key, student_id, enabled, mode)
     values ('projection', $1::uuid, true, 'enabled')`, [ids.student],
  )
  await stage(admin, ids.baseline)
  await createPgLearningEvidenceRepository(admin).activateProjectionGeneration(ids.baseline, {
    checksum: 'baseline', rowCount: 1, highWaterMark: 0,
  })
  equal(await visible(admin, ids.baseline), true, 'başlangıç nesli görünür olmalı')
  await stage(admin, ids.first)
  const writerPid = (await writer.query('select pg_backend_pid() as pid')).rows[0].pid
  const revokerPid = (await revoker.query('select pg_backend_pid() as pid')).rows[0].pid

  await revoker.query('begin')
  await revoker.query(
    `update learning_private.learning_student_feature_flags
        set enabled = false, mode = 'disabled'
      where feature_key = 'projection' and student_id = $1::uuid`, [ids.student],
  )
  await revoker.query(
    `update public.student_learning_projection_rows set consumer_visible = false
      where student_id = $1::uuid and consumer_visible`, [ids.student],
  )
  const firstActivation = createPgLearningEvidenceRepository(writer)
    .activateProjectionGeneration(ids.first, { checksum: 'first', rowCount: 1, highWaterMark: 1 })
  try {
    await waitForLock(admin, writerPid)
  } finally {
    await revoker.query('commit')
  }
  await firstActivation
  equal(await visible(admin, ids.first), false,
    'geri dönüş kilidi önceyse sonraki etkinleştirme görünmez kalmalı')
  summary.scenarios.push('geri dönüş bayrağı önce kilitlenir')

  await admin.query(
    `update learning_private.learning_student_feature_flags
        set enabled = true, mode = 'enabled'
      where feature_key = 'projection' and student_id = $1::uuid`, [ids.student],
  )
  await stage(admin, ids.second)
  let releaseDecision
  const decisionGate = new Promise((resolve) => { releaseDecision = resolve })
  let reachedDecision
  const reachedGate = new Promise((resolve) => { reachedDecision = resolve })
  let pauseOnce = true
  const gatedWriter = {
    query: async (sql, params) => {
      if (pauseOnce && String(sql).includes('from pg_catalog.unnest')) {
        pauseOnce = false
        reachedDecision()
        await decisionGate
      }
      return writer.query(sql, params)
    },
  }
  const secondActivation = createPgLearningEvidenceRepository(gatedWriter)
    .activateProjectionGeneration(ids.second, { checksum: 'second', rowCount: 1, highWaterMark: 2 })
  await reachedGate
  const revoke = createPgLearningEvidenceRepository(revoker)
    .revokeStudentProjectionVisibility(ids.student)
  try {
    await waitForLock(admin, revokerPid)
  } finally {
    releaseDecision()
  }
  await Promise.all([secondActivation, revoke])
  equal(await visible(admin, ids.second), false,
    'etkinleştirme önceyse geri dönüş görünür satırı gizlemeli')
  equal((await admin.query(
    `select enabled from learning_private.learning_student_feature_flags
      where feature_key = 'projection' and student_id = $1::uuid`, [ids.student],
  )).rows[0].enabled, false, 'geri dönüş bayrağı kapalı kalmalı')
  summary.scenarios.push('etkinleştirme bayrağı önce kilitler')
  summary.status = 'passed'
  summary.assertions = assertions
  console.log(`Faz 10 projeksiyon yarış provası: ${assertions} doğrulama, 2 kilit sırası geçti.`)
} catch (error) {
  summary.status = 'failed'
  summary.assertions = assertions
  summary.error = { code: error.code ?? 'PROJECTION_RACE_FAILED', message: error.message }
  console.error(error)
  process.exitCode = 1
} finally {
  summary.generated_at = new Date().toISOString()
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-projeksiyon-yaris.json'),
    `${JSON.stringify(summary, null, 2)}\n`)
  await Promise.all(clients.map((client) => client.end().catch(() => {})))
  await server.stop().catch(() => {})
}
