/** Faz 10 Koç çift kapısı — yalnız sentetik PGlite ve sahte API istemcisi. */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { PGlite } from '@electric-sql/pglite'
import EmbeddedPostgres from 'embedded-postgres'
import {
  applyCoachDatabaseGate, resolveCoachActionMode, resolveCoachChatMode,
  resolveLearningRollout,
} from '../api/_lib/learning/rollout.js'

const root = fileURLToPath(new URL('..', import.meta.url))
const phase9 = readFileSync(join(root, 'supabase/migration_learning_hardening.sql'), 'utf8')
const bridge = readFileSync(join(root, 'supabase/migration_learning_coach_pilot_gate.sql'), 'utf8')
const rolloutSql = phase9.slice(
  phase9.indexOf('create schema if not exists learning_private;'),
  phase9.indexOf('create or replace function learning_private.enforce_learning_source_event_flag()'),
)
const ids = {
  owner: 'c0000000-0000-4000-8000-000000000001',
  outsider: 'c0000000-0000-4000-8000-000000000002',
}
let assertions = 0
function equal(actual, expected, message) { assertions++; assert.deepEqual(actual, expected, message) }
async function decision(db, featureKey) {
  const result = await db.query(
    'select public.learning_coach_own_rollout($1::text) as enabled', [featureKey],
  )
  return result.rows[0].enabled
}
async function freePort() {
  const server = createServer()
  await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve))
  const port = server.address().port
  await new Promise((resolve) => server.close(resolve))
  return port
}
async function testRealPostgres() {
  const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-phase10-coach-gate-'))
  const server = new EmbeddedPostgres({
    databaseDir, port: await freePort(), user: 'postgres', password: 'phase10-local-only',
    persistent: false, onLog: () => {}, onError: () => {},
  })
  let client
  try {
    await server.initialise()
    await server.start()
    client = server.getPgClient()
    await client.connect()
    await client.query(`
      create schema auth;
      create role anon nologin;
      create role authenticated nologin;
      grant usage on schema public, auth to anon, authenticated;
      create or replace function auth.uid() returns uuid language sql stable
        set search_path = '' as $fn$
        select nullif(pg_catalog.current_setting('app.uid', true), '')::uuid;
      $fn$;
      create table public.profiles(id uuid primary key);
      insert into public.profiles(id) values ('${ids.owner}'), ('${ids.outsider}');
    `)
    await client.query(rolloutSql)
    await client.query(bridge)
    await client.query(bridge)
    await client.query(
      `insert into learning_private.learning_student_feature_flags
         (feature_key, student_id, enabled, mode)
       values ('coach_analysis', $1::uuid, true, 'enabled')`, [ids.owner],
    )
    await client.query(`set role authenticated; set app.uid = '${ids.owner}'`)
    equal(await decision(client, 'coach_analysis'), true,
      'gerçek PostgreSQL seçili hesabı açmalı')
    equal(await decision(client, 'coach_writes'), false,
      'gerçek PostgreSQL yazmayı ayrı kapalı tutmalı')
    await client.query(`set app.uid = '${ids.outsider}'`)
    equal(await decision(client, 'coach_analysis'), false,
      'gerçek PostgreSQL diğer hesabı kapalı tutmalı')
    await client.query('reset role; set role anon')
    await assert.rejects(decision(client, 'coach_analysis'), /permission denied/i,
      'gerçek PostgreSQL anon rolü çalıştıramamalı')
    assertions += 1
    summary.scenarios.push('gerçek PostgreSQL yetki ve ikinci uygulama')
    summary.real_postgresql = true
  } finally {
    await client?.end().catch(() => {})
    await server.stop().catch(() => {})
  }
}
const summary = {
  schema_version: 'phase-10-coach-database-gate@1', phase: 10, status: 'running',
  generated_at: null, assertions: 0, scenarios: [],
  migration_sha256: createHash('sha256').update(bridge).digest('hex'),
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, real_student_data_used: false,
    paid_model_call: false, deployment_performed: false, git_push_performed: false,
  },
  limitations: [
    'Yerel sentetik PostgreSQL ve sahte RPC istemcisi doğrulandı; canlı Supabase PostgREST/RLS entegrasyonu ve gerçek model çağrısı yapılmadı.',
  ],
}
const db = new PGlite()
try {
  await db.exec(`
    create schema auth;
    create role anon nologin;
    create role authenticated nologin;
    grant usage on schema public, auth to anon, authenticated;
    create or replace function auth.uid() returns uuid language sql stable
      set search_path = '' as $fn$
      select nullif(pg_catalog.current_setting('app.uid', true), '')::uuid;
    $fn$;
    create table public.profiles(id uuid primary key);
    insert into public.profiles(id) values ('${ids.owner}'), ('${ids.outsider}');
  `)
  await assert.rejects(db.exec(bridge), /LEARNING_PHASE9_ROLLOUT_REQUIRED/,
    'Faz 9 olmadan köprü migration uygulanmamalı')
  assertions += 1
  await db.exec('rollback')
  await db.exec(rolloutSql)
  await db.exec(bridge)
  await db.exec(bridge)
  summary.scenarios.push('ek migration tekrar güvenli')

  await db.exec(`set role authenticated; set app.uid = '${ids.owner}';`)
  equal(await decision(db, 'coach_analysis'), false, 'varsayılan kapalı analiz')
  equal(await decision(db, 'coach_writes'), false, 'varsayılan kapalı yazma')
  await db.exec('reset role')
  await db.query(
    `update learning_private.learning_feature_flags
        set enabled = true, mode = 'enabled'
      where feature_key in ('coach_analysis', 'coach_writes')
        and scope_type = 'global'`,
  )
  await db.exec('set role authenticated')
  equal(await decision(db, 'coach_analysis'), false,
    'geniş küresel bayrak test hesabı pilotunu açmamalı')
  await db.exec('reset role')
  await db.query(
    `insert into learning_private.learning_student_feature_flags
       (feature_key, student_id, enabled, mode)
     values ('coach_analysis', $1::uuid, true, 'enabled'),
            ('coach_writes', $1::uuid, true, 'enabled')`, [ids.owner],
  )
  await db.exec('set role authenticated')
  equal(await decision(db, 'coach_analysis'), true, 'seçili öğrenci analiz bayrağı')
  equal(await decision(db, 'coach_writes'), true, 'seçili öğrenci yazma bayrağı')
  equal(await decision(db, 'source_events'), false, 'yalnız iki Koç özelliği okunabilir')
  await db.exec(`set app.uid = '${ids.outsider}'`)
  equal(await decision(db, 'coach_analysis'), false,
    'başka öğrenci seçili hesabın kararını okuyamaz')
  await db.exec('set app.uid = \'\'')
  equal(await decision(db, 'coach_analysis'), false, 'kimliksiz karar kapalıdır')
  await db.exec('reset role; set role anon')
  await assert.rejects(decision(db, 'coach_analysis'), /permission denied/i,
    'anon çağrısı yasak')
  assertions += 1
  await db.exec('reset role')
  summary.scenarios.push('yalnız kendi öğrenci bayrağı ve dar execute yetkisi')

  const env = {
    AI_COACH_PILOT_STUDENT_IDS: ids.owner,
    AI_COACH_ANALYSIS_MODE: 'enabled',
    AI_COACH_WRITES_ENABLED: 'true',
  }
  const ownerRollout = resolveLearningRollout({ env, studentId: ids.owner })
  const outsiderRollout = resolveLearningRollout({ env, studentId: ids.outsider })
  const calls = []
  const enabledClient = {
    async rpc(name, args) {
      calls.push({ name, args })
      return { data: true, error: null }
    },
  }
  const enabled = await applyCoachDatabaseGate(enabledClient, ownerRollout)
  equal(resolveCoachChatMode(enabled), 'modern', 'iki analiz kapısı modern sohbeti açar')
  equal(resolveCoachActionMode(enabled, 'accept_coaching_recommendation'), 'modern',
    'iki yazma kapısı yeni eylemi açar')
  equal(calls.map((call) => call.args), [
    { p_feature_key: 'coach_analysis' }, { p_feature_key: 'coach_writes' },
  ], 'RPC gövdesinde öğrenci kimliği yoktur')
  const analysisOff = await applyCoachDatabaseGate({
    async rpc() { return { data: false, error: null } },
  }, ownerRollout)
  equal(resolveCoachChatMode(analysisOff), 'legacy', 'DB analizi kapalıysa eski Koç kalır')
  equal(resolveCoachActionMode(analysisOff, 'accept_coaching_recommendation'), 'denied',
    'DB analizi kapalıysa yeni eylem reddedilir')
  const writeOff = await applyCoachDatabaseGate({
    async rpc(_name, args) { return { data: args.p_feature_key === 'coach_analysis', error: null } },
  }, ownerRollout)
  equal(resolveCoachChatMode(writeOff), 'modern', 'yalnız okuma pilotu açık kalır')
  equal(resolveCoachActionMode(writeOff, 'accept_coaching_recommendation'), 'denied',
    'DB yazma bayrağı kapalıysa yeni yazı reddedilir')
  const unavailable = await applyCoachDatabaseGate({
    async rpc() { throw new Error('sentetik bağlantı yok') },
  }, ownerRollout)
  equal(resolveCoachChatMode(unavailable), 'legacy', 'RPC hatası modern analizi kapatır')
  let outsiderRpcCalls = 0
  const outsider = await applyCoachDatabaseGate({
    async rpc() { outsiderRpcCalls++; return { data: true } },
  }, outsiderRollout)
  equal(resolveCoachChatMode(outsider), 'legacy', 'pilot dışı hesap eski Koçta kalır')
  equal(outsiderRpcCalls, 0, 'pilot dışı hesap için private karar bile sorulmaz')
  for (const route of ['chat', 'action', 'briefing']) {
    equal(readFileSync(join(root, `api/ai-coach/${route}.js`), 'utf8')
      .includes('await applyCoachDatabaseGate(supabase,'), true,
    `${route} uç noktası çift kapıyı kullanmalı`)
  }
  summary.scenarios.push('sohbet, eylem ve özet çift kapısı')
  await testRealPostgres()
  summary.status = 'passed'
  summary.assertions = assertions
  console.log(`Faz 10 Koç DB çift kapısı: ${assertions} sentetik doğrulama geçti.`)
} catch (error) {
  summary.status = 'failed'
  summary.assertions = assertions
  summary.error = { code: error.code ?? 'COACH_DB_GATE_FAILED', message: error.message }
  console.error(error)
  process.exitCode = 1
} finally {
  summary.generated_at = new Date().toISOString()
  writeFileSync(join(root, 'docs/ai-koc/kanitlar/faz-10/faz-10-koc-veritabani-kapisi.json'),
    `${JSON.stringify(summary, null, 2)}\n`)
  await db.close()
}
