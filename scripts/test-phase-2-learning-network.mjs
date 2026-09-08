/**
 * AI Koç Faz 2 — güvenli veri ağı çekirdeği yerel kabul paketi.
 *
 * Canlı Supabase'e, gerçek öğrenci verisine veya ürün kaynaklarına bağlanmaz.
 * Göç ve RLS sınamaları bellekte çalışan PostgreSQL uyumlu PGlite üzerindedir.
 */
import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { join } from 'node:path'
import { performance } from 'node:perf_hooks'

import { PGlite } from '@electric-sql/pglite'

import {
  buildDiagnosticProjection,
  buildSemanticFingerprint,
  createBackfillProviderRegistry,
  createLearningEvidenceIngestor,
  processDiagnosticBatch,
  replayDiagnosticProjection,
  runBackfill,
} from '../src/lib/learning/network/index.js'
import {
  SOURCE_CONTRACT_COLUMNS,
  SOURCE_CONTRACT_ROWS,
  auditSourceContractParity,
} from '../src/lib/learning/network/sourceContracts.js'
import {
  DIAGNOSTIC_PROJECTION_NAME,
  DIAGNOSTIC_PROJECTION_VERSION,
} from '../src/lib/learning/network/projection.js'
import { projectEvidenceHistory } from '../src/lib/learning/evidenceContract.js'
import {
  SOURCE_REGISTRY_VERSION,
  validateSourceRegistry,
} from '../src/lib/learning/sourceRegistry.js'
import {
  createPgBackfillRunStore,
  createPgLearningEvidenceRepository,
  probePgLearningEvidenceRepository,
} from '../api/_lib/learning/repository.js'
import { runPhase2NetworkJsTests } from './phase-2-network-js-tests.mjs'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const MIGRATION_PATH = join(REPO, 'supabase', 'migration_learning_evidence_network.sql')
const SETUP_PATH = join(REPO, 'supabase', 'setup_new_project.sql')
const PARENT_MIGRATION_PATH = join(REPO, 'supabase', 'migration_parent_verification.sql')
const PHASE_ONE_ACCEPTANCE_PATH = join(
  REPO,
  'docs',
  'ai-koc',
  'kanitlar',
  'faz-1',
  'faz-1-kabul-sonucu.json'
)

const MIGRATION_SQL = readFileSync(MIGRATION_PATH, 'utf8')
const SETUP_SQL = readFileSync(SETUP_PATH, 'utf8')
const PARENT_MIGRATION_SQL = readFileSync(PARENT_MIGRATION_PATH, 'utf8')
const PHASE_ONE_ACCEPTANCE = JSON.parse(readFileSync(PHASE_ONE_ACCEPTANCE_PATH, 'utf8'))

const STUDENT_A = '10000000-0000-4000-8000-000000000001'
const STUDENT_B = '10000000-0000-4000-8000-000000000002'
const STUDENT_DELETE = '10000000-0000-4000-8000-000000000003'
const TEACHER_A = '10000000-0000-4000-8000-000000000004'
const FIXED_NOW = '2026-09-08T09:00:00.000Z'

const summary = {
  schema_version: '1.0',
  status: 'running',
  environment: {
    engine: 'PGlite/WASM',
    serialized_connection: true,
    production_sla_claimed: false,
  },
  sections: [],
  assertions: 0,
  scenarios: {},
  migration: {},
  dedupe: {},
  rls: {},
  replay: {},
  backfill: {},
  health: {},
  observability: {},
  benchmark: {},
  skipped: [],
}

function check(condition, message) {
  summary.assertions += 1
  assert.ok(condition, message)
}

function equal(actual, expected, message) {
  summary.assertions += 1
  assert.deepEqual(actual, expected, message)
}

async function section(name, callback) {
  const started = performance.now()
  await callback()
  const durationMs = Number((performance.now() - started).toFixed(3))
  summary.sections.push({ name, status: 'passed', duration_ms: durationMs })
  console.log(`✓ ${name} (${durationMs} ms)`)
}

async function expectDatabaseRejection(callback, message) {
  let rejected = false
  try {
    await callback()
  } catch {
    rejected = true
  }
  check(rejected, message)
}

function uuid(family, value) {
  return `${String(family).padStart(8, '0')}-0000-4000-8000-${String(value).padStart(12, '0')}`
}

function uuidGenerator(family, start = 1) {
  let value = start
  return () => uuid(family, value++)
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
    sourceCode,
    studentId,
    actorId,
    actorRole,
    actorStudentRelation,
    principalStudentId,
    proof,
    trustLevel,
  }
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
    entryOrigin: 'phase_2_pglite_test',
    ...values,
  }
}

function createIngestor(repository, family = 50000000) {
  return createLearningEvidenceIngestor({
    repository,
    now: () => new Date(FIXED_NOW),
    uuid: uuidGenerator(family),
  })
}

async function ingestDaily(ingestor, id, {
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

async function installSupabasePrelude(db, { includeProfiles = true } = {}) {
  await db.exec(`
    create schema auth;
    create table auth.users (
      id uuid primary key,
      email text
    );
    create or replace function auth.uid() returns uuid
    language sql stable
    as $fn$
      select nullif(current_setting('app.uid', true), '')::uuid;
    $fn$;
    create or replace function auth.role() returns text
    language sql stable
    as $fn$
      select coalesce(nullif(current_setting('app.role', true), ''), current_user::text);
    $fn$;

    create role anon nologin;
    create role authenticated nologin;
    grant usage on schema public, auth to anon, authenticated;
    grant execute on function auth.uid(), auth.role() to anon, authenticated;
  `)
  if (includeProfiles) {
    await db.exec(`
      create table public.profiles (
        id uuid primary key references auth.users(id) on delete cascade,
        full_name text not null default 'Sentetik Kullanıcı',
        role text not null check (role in ('teacher', 'student', 'parent')),
        student_id uuid references public.profiles(id) on delete set null,
        created_at timestamptz not null default pg_catalog.clock_timestamp()
      );
    `)
  }
}

async function installStorageAndRealtimePrelude(db) {
  await db.exec(`
    create schema storage;
    create table storage.buckets (
      id text primary key,
      name text not null,
      public boolean not null default false
    );
    create table storage.objects (
      id uuid primary key default pg_catalog.gen_random_uuid(),
      bucket_id text,
      name text not null
    );
    alter table storage.objects enable row level security;
    create or replace function storage.foldername(p_name text)
    returns text[]
    language sql immutable
    as $fn$
      select pg_catalog.string_to_array(p_name, '/');
    $fn$;
    create publication supabase_realtime;
    grant usage on schema storage to anon, authenticated;
  `)
}

async function asRole(db, role, uid = null) {
  if (!['anon', 'authenticated'].includes(role)) throw new TypeError('test_role_invalid')
  await db.exec('reset role')
  await db.query(`select set_config('app.uid', $1, false)`, [uid ?? ''])
  await db.query(`select set_config('app.role', $1, false)`, [role])
  await db.exec(`set role ${role}`)
}

async function asAdmin(db) {
  await db.exec('reset role')
  await db.query(`select set_config('app.uid', '', false)`)
  await db.query(`select set_config('app.role', '', false)`)
}

async function insertAccounts(db) {
  await db.query(
    `insert into auth.users (id, email) values
      ($1::uuid, 'a@example.invalid'),
      ($2::uuid, 'b@example.invalid'),
      ($3::uuid, 'delete@example.invalid'),
      ($4::uuid, 'teacher@example.invalid')`,
    [STUDENT_A, STUDENT_B, STUDENT_DELETE, TEACHER_A]
  )
  await db.query(
    `insert into public.profiles (id, full_name, role) values
      ($1::uuid, 'Sentetik A', 'student'),
      ($2::uuid, 'Sentetik B', 'student'),
      ($3::uuid, 'Silinecek Sentetik', 'student'),
      ($4::uuid, 'Sentetik Öğretmen', 'teacher')`,
    [STUDENT_A, STUDENT_B, STUDENT_DELETE, TEACHER_A]
  )
}

async function inventory(db) {
  const [tables, views, functions, constraints, indexes, policies, rls] = await Promise.all([
    db.query(`select table_name from information_schema.tables
      where table_schema = 'public' and table_type = 'BASE TABLE'
        and table_name like 'learning_%' order by table_name`),
    db.query(`select table_name from information_schema.views
      where table_schema = 'public' and table_name like 'learning_%'
      order by table_name`),
    db.query(`select p.proname as function_name,
                     pg_catalog.pg_get_function_identity_arguments(p.oid) as arguments
      from pg_catalog.pg_proc p
      join pg_catalog.pg_namespace n on n.oid = p.pronamespace
      where n.nspname = 'learning_private'
      order by p.proname, arguments`),
    db.query(`select c.conname as constraint_name, t.relname as table_name
      from pg_catalog.pg_constraint c
      join pg_catalog.pg_class t on t.oid = c.conrelid
      join pg_catalog.pg_namespace n on n.oid = t.relnamespace
      where n.nspname = 'public' and t.relname like 'learning_%'
      order by t.relname, c.conname`),
    db.query(`select indexname from pg_catalog.pg_indexes
      where schemaname = 'public' and tablename like 'learning_%'
      order by indexname`),
    db.query(`select tablename, policyname, roles, cmd
      from pg_catalog.pg_policies
      where schemaname = 'public' and tablename like 'learning_%'
      order by tablename, policyname`),
    db.query(`select c.relname as table_name, c.relrowsecurity, c.relforcerowsecurity
      from pg_catalog.pg_class c
      join pg_catalog.pg_namespace n on n.oid = c.relnamespace
      where n.nspname = 'public' and c.relkind = 'r'
        and c.relname like 'learning_%'
      order by c.relname`),
  ])
  return {
    tables: tables.rows.map((row) => row.table_name),
    views: views.rows.map((row) => row.table_name),
    functions: functions.rows.map((row) => `${row.function_name}(${row.arguments})`),
    constraints: constraints.rows.map((row) => `${row.table_name}.${row.constraint_name}`),
    indexes: indexes.rows.map((row) => row.indexname),
    policies: policies.rows.map((row) => ({
      table: row.tablename,
      name: row.policyname,
      roles: row.roles,
      command: row.cmd,
    })),
    rls: rls.rows,
  }
}

async function queryCount(db, sql, params = []) {
  return Number((await db.query(sql, params)).rows[0]?.count ?? 0)
}

const db = new PGlite()
let pgRepository
let mainIngestor
let migrationInventory
let baseRecordId
let studentBRecordId
let s11RecordIds = []

try {
  await section('Ön koşullar ve Faz 1/2 saf sözleşme paketi', async () => {
    equal(PHASE_ONE_ACCEPTANCE.acceptance.result, 'passed')
    equal(PHASE_ONE_ACCEPTANCE.evidence_contract.contract_version, 'learning-evidence@1')
    equal(PHASE_ONE_ACCEPTANCE.evidence_contract.schema_version, '1.0')
    equal(PHASE_ONE_ACCEPTANCE.source_registry.version, SOURCE_REGISTRY_VERSION)
    const registry = validateSourceRegistry()
    check(registry.ok, JSON.stringify(registry.errors))
    equal(registry.counts.sources, 38)
    const jsSummary = await runPhase2NetworkJsTests()
    equal(jsSummary.status, 'passed')
    equal(jsSummary.scenarios, ['S02', 'S05', 'S07', 'S08', 'S10', 'S11', 'S14'])
    jsSummary.scenarios.forEach((scenario) => {
      summary.scenarios[scenario] = 'passed'
    })
    summary.phase_one = {
      acceptance: 'passed',
      evidence_contract_version: 'learning-evidence@1',
      evidence_schema_version: '1.0',
      source_registry_version: SOURCE_REGISTRY_VERSION,
    }
    summary.javascript = jsSummary
  })

  await section('Migration, 38/38 parity ve şema envanteri', async () => {
    await installSupabasePrelude(db)
    await db.exec(MIGRATION_SQL)
    const version = (await db.query('select version()')).rows[0].version
    summary.environment.postgresql_compatibility = version
    migrationInventory = await inventory(db)
    const expectedTables = [
      'learning_diagnostic_projection_rows',
      'learning_evidence_backfill_runs',
      'learning_evidence_processing',
      'learning_evidence_quarantine',
      'learning_evidence_records',
      'learning_projection_cursors',
      'learning_projection_generations',
      'learning_source_contracts',
      'learning_source_health',
    ]
    equal(migrationInventory.tables, expectedTables)
    equal(migrationInventory.views, ['learning_evidence_effective'])
    check(migrationInventory.functions.some((name) => name.startsWith('ingest_evidence(')))
    check(migrationInventory.functions.some((name) => name.startsWith('quarantine_evidence(')))
    check(migrationInventory.rls.length === expectedTables.length)
    check(migrationInventory.rls.every((row) => row.relrowsecurity && row.relforcerowsecurity))

    const persisted = await db.query(
      `select ${SOURCE_CONTRACT_COLUMNS.map((column) => `"${column}"`).join(', ')}
         from public.learning_source_contracts
        where registry_version = $1::text
        order by matrix_id`,
      [SOURCE_REGISTRY_VERSION]
    )
    const parity = auditSourceContractParity(persisted.rows)
    check(parity.ok, JSON.stringify(parity.errors))
    equal(persisted.rows.length, 38)
    equal(persisted.rows.filter((row) => row.ingest_allowed).length, 25)
    equal(
      persisted.rows.filter((row) => row.decision_status === 'decided_not_connected').length,
      38
    )
    equal(SOURCE_CONTRACT_ROWS.length, 38)
    const learningIndexDefinitions = await db.query(
      `select indexname, indexdef
         from pg_catalog.pg_indexes
        where schemaname = 'public' and indexname like 'learning_%'
        order by indexname`
    )
    check(
      learningIndexDefinitions.rows.every((row) => !/\busing\s+gin\b/iu.test(row.indexdef)),
      'Faz 2 indekslerinde ölçülmemiş geniş GIN kullanılmamalı.'
    )

    summary.migration = {
      file: 'supabase/migration_learning_evidence_network.sql',
      sha256: createHash('sha256').update(MIGRATION_SQL).digest('hex'),
      first_apply: 'passed',
      tables: migrationInventory.tables,
      views: migrationInventory.views,
      functions: migrationInventory.functions,
      constraints: migrationInventory.constraints,
      indexes: migrationInventory.indexes,
      policies: migrationInventory.policies,
      rls_force_tables: migrationInventory.rls.map((row) => row.table_name),
      source_contract_rows: persisted.rows.length,
      source_contract_ingest_allowed: persisted.rows.filter((row) => row.ingest_allowed).length,
      source_contract_decided_not_connected: persisted.rows.filter(
        (row) => row.decision_status === 'decided_not_connected'
      ).length,
      source_contract_parity: 'passed',
      broad_gin_indexes: 0,
    }
  })

  await section('Hatalı migration tam rollback ve yeni proje kurulum parity', async () => {
    const rollbackDb = new PGlite()
    try {
      await installSupabasePrelude(rollbackDb)
      const broken = MIGRATION_SQL.replace(
        /commit;\s*$/u,
        'select * from learning_private.intentional_phase_2_failure;\ncommit;'
      )
      await expectDatabaseRejection(
        () => rollbackDb.exec(broken),
        'Hatalı migration reddedilmeliydi.'
      )
      await rollbackDb.exec('rollback')
      const leftover = await rollbackDb.query(
        `select pg_catalog.to_regclass('public.learning_evidence_records') as relation`
      )
      equal(leftover.rows[0].relation, null, 'Transaction yarım Faz 2 nesnesi bırakmamalı.')
    } finally {
      await rollbackDb.close()
    }

    const setupDb = new PGlite()
    try {
      await installSupabasePrelude(setupDb, { includeProfiles: false })
      await installStorageAndRealtimePrelude(setupDb)
      await setupDb.exec(SETUP_SQL)
      await setupDb.exec(PARENT_MIGRATION_SQL)
      await setupDb.exec(MIGRATION_SQL)
      const setupInventory = await inventory(setupDb)
      equal(setupInventory.tables, migrationInventory.tables)
      equal(setupInventory.views, migrationInventory.views)
      equal(setupInventory.functions, migrationInventory.functions)
      equal(setupInventory.constraints, migrationInventory.constraints)
      equal(setupInventory.indexes, migrationInventory.indexes)
      equal(setupInventory.policies, migrationInventory.policies)
      summary.migration.rollback_on_failure = 'passed'
      summary.migration.new_project_setup_parity = 'passed'
      summary.migration.new_project_sequence = [
        'setup_new_project.sql',
        'migration_parent_verification.sql',
        'migration_learning_evidence_network.sql',
      ]
    } finally {
      await setupDb.close()
    }
  })

  await section('M03: auth.uid sahiplik sarmalayıcısından gerçek PG alımı', async () => {
    await insertAccounts(db)
    await db.exec(`
      create schema phase2_test;
      create table phase2_test.daily_logs (
        source_record_id uuid primary key default pg_catalog.gen_random_uuid(),
        student_id uuid not null references public.profiles(id) on delete cascade,
        client_action_id uuid not null,
        source_revision text not null,
        payload jsonb not null,
        unique (student_id, client_action_id)
      );
    `)
    pgRepository = createPgLearningEvidenceRepository(db)
    mainIngestor = createIngestor(pgRepository, 51000000)
    let wrapperActionSequence = 100

    async function studentDailyWrapper(sessionUid, body, adapterContext = {}) {
      const clientActionId = adapterContext.clientActionId ?? uuid(21000000, wrapperActionSequence++)
      try {
        return await db.transaction(async (transaction) => {
          await transaction.query(
            `select pg_catalog.set_config('app.uid', $1::text, true)`,
            [sessionUid]
          )
          const authUid = (
            await transaction.query('select auth.uid() as uid')
          ).rows[0]?.uid
          if (authUid !== sessionUid) {
            throw Object.assign(new Error('test_wrapper_auth_failed'), {
              safeResult: { code: 'unauthorized' },
            })
          }

          const { id: _untrustedId, ...sourcePayload } = structuredClone(body)
          const inserted = await transaction.query(
            `insert into phase2_test.daily_logs (
               student_id, client_action_id, source_revision, payload
             ) values ($1::uuid, $2::uuid, $3::text, $4::jsonb)
             returning source_record_id, student_id, source_revision, payload`,
            [
              authUid,
              clientActionId,
              adapterContext.sourceRevision ?? 'v1',
              JSON.stringify(sourcePayload),
            ]
          )
          const sourceRow = (
            await transaction.query(
              `select source_record_id, student_id, source_revision, payload
                 from phase2_test.daily_logs
                where source_record_id = $1::uuid
                  and student_id = (select auth.uid())`,
              [inserted.rows[0].source_record_id]
            )
          ).rows[0]
          if (!sourceRow) {
            throw Object.assign(new Error('test_wrapper_source_not_owned'), {
              safeResult: { code: 'source_record_not_owned' },
            })
          }

          const transactionRepository = createPgLearningEvidenceRepository(transaction)
          const transactionIngestor = createIngestor(transactionRepository, 51100000)
          const result = await transactionIngestor.ingestSourceRecord({
            sourceCode: 'daily_logs',
            sourceRecord: {
              ...sourceRow.payload,
              id: sourceRow.source_record_id,
            },
            adapterContext: dailyContext({
              ...adapterContext,
              clientActionId,
              sourceRevision: sourceRow.source_revision,
            }),
            ownership: ownership('daily_logs', {
              studentId: authUid,
              actorId: authUid,
              principalStudentId: authUid,
            }),
            clientDraft: true,
          })
          if (!['created', 'duplicate', 'identity_quarantined'].includes(result.code)) {
            throw Object.assign(new Error('test_wrapper_ingest_rejected'), {
              safeResult: result,
            })
          }
          return result
        })
      } catch (error) {
        if (error?.safeResult) return error.safeResult
        throw error
      }
    }

    const payload = dailyRecord('m03-pglite-valid-1', {
      notes: 'Bu ham not ortak kanıta girmemeli.',
    })
    const created = await studentDailyWrapper(STUDENT_A, payload, {
      clientActionId: uuid(21000000, 1),
    })
    equal(created.code, 'created')
    check(Boolean(created.record_id))
    baseRecordId = created.record_id
    const stored = (
      await db.query(
        'select * from public.learning_evidence_records where record_id = $1::uuid',
        [created.record_id]
      )
    ).rows[0]
    equal(stored.record_id, created.record_id)
    equal(stored.student_id, STUDENT_A)
    equal(stored.actor_id, STUDENT_A)
    equal(stored.actor_role, 'student')
    equal(stored.actor_student_relation, 'self')
    equal(stored.source_code, 'daily_logs')
    check(stored.source_record_id !== payload.id)
    equal(stored.source_registry_version, SOURCE_REGISTRY_VERSION)
    equal(stored.evidence_class, 'student_self_report')
    equal(stored.measurement.total_count, 10)
    check(Boolean(stored.topic_id))
    check(!JSON.stringify(stored).includes('Bu ham not'))
    check(stored.record_id !== uuid(51000000, 1), 'record_id veritabanı üretmelidir.')
    check(new Date(stored.recorded_at).toString() !== 'Invalid Date')

    const forgedActionId = uuid(21000000, 2)
    const forged = await studentDailyWrapper(
      STUDENT_A,
      {
        ...dailyRecord('m03-forged-student-1'),
        student_id: STUDENT_B,
      },
      { clientActionId: forgedActionId }
    )
    equal(forged.code, 'validation_rejected')
    check(forged.reason_codes.includes('CLIENT_PRIVILEGED_FIELD'))
    equal(
      await queryCount(
        db,
        `select count(*) from phase2_test.daily_logs
          where client_action_id = $1::uuid`,
        [forgedActionId]
      ),
      0
    )
    summary.valid_ingest = {
      status: 'passed',
      source: 'M03/daily_logs',
      record_id_matches_persisted: true,
      database_generated_record_id: true,
      raw_note_persisted: false,
      canonical_topic_resolved: true,
      auth_uid_wrapper_verified: true,
      source_record_id_database_generated: true,
      source_and_evidence_same_transaction_rollback_verified: true,
    }
  })

  await section('Migration ikinci uygulama: veri korunumu ve nesne tekilliği', async () => {
    const before = await queryCount(
      db,
      'select count(*) from public.learning_evidence_records where record_id = $1::uuid',
      [baseRecordId]
    )
    await db.exec(MIGRATION_SQL)
    const after = await queryCount(
      db,
      'select count(*) from public.learning_evidence_records where record_id = $1::uuid',
      [baseRecordId]
    )
    equal(before, 1)
    equal(after, 1)
    const secondInventory = await inventory(db)
    equal(secondInventory.tables, migrationInventory.tables)
    equal(secondInventory.views, migrationInventory.views)
    equal(secondInventory.functions, migrationInventory.functions)
    equal(secondInventory.indexes, migrationInventory.indexes)
    equal(secondInventory.policies, migrationInventory.policies)
    summary.migration.second_apply = 'passed'
    summary.migration.existing_data_preserved = true
    summary.migration.policy_or_function_duplication = false
  })

  await section('DB tekilleştirme: 2, 10, paralel 10, retry ve conflict', async () => {
    const twice = await Promise.all([
      ingestDaily(mainIngestor, 'dedupe-twice-1'),
      ingestDaily(mainIngestor, 'dedupe-twice-1'),
    ])
    equal(twice.filter((result) => result.code === 'created').length, 1)
    equal(twice.filter((result) => result.code === 'duplicate').length, 1)
    equal(new Set(twice.map((result) => result.record_id)).size, 1)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_code = 'daily_logs' and source_record_id = 'dedupe-twice-1'`
      ),
      1
    )

    const sequential = []
    for (let index = 0; index < 10; index += 1) {
      sequential.push(await ingestDaily(mainIngestor, 'dedupe-sequential-10'))
    }
    equal(sequential.filter((result) => result.code === 'created').length, 1)
    equal(sequential.filter((result) => result.code === 'duplicate').length, 9)
    equal(new Set(sequential.map((result) => result.record_id)).size, 1)

    const parallel = await Promise.all(
      Array.from({ length: 10 }, () => ingestDaily(mainIngestor, 'dedupe-parallel-10'))
    )
    equal(parallel.filter((result) => result.code === 'created').length, 1)
    equal(parallel.filter((result) => result.code === 'duplicate').length, 9)
    equal(new Set(parallel.map((result) => result.record_id)).size, 1)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 'dedupe-parallel-10'`
      ),
      1
    )

    let lostRecordId = null
    let dropResponse = true
    const lossyRepository = {
      ...pgRepository,
      async ingest(...args) {
        const result = await pgRepository.ingest(...args)
        if (dropResponse) {
          dropResponse = false
          lostRecordId = result.record_id
          throw new Error('synthetic_response_lost')
        }
        return result
      },
    }
    const lossyIngestor = createIngestor(lossyRepository, 52000000)
    const lost = await ingestDaily(lossyIngestor, 'dedupe-response-loss')
    equal(lost.code, 'internal_failure')
    const replayed = await ingestDaily(lossyIngestor, 'dedupe-response-loss')
    equal(replayed.code, 'duplicate')
    equal(replayed.record_id, lostRecordId)

    const firstConflict = await ingestDaily(mainIngestor, 'dedupe-conflict-1')
    const conflict = await ingestDaily(mainIngestor, 'dedupe-conflict-1', {
      record: { correct: 7, incorrect: 3 },
    })
    equal(firstConflict.code, 'created')
    equal(conflict.code, 'idempotency_conflict')
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 'dedupe-conflict-1'`
      ),
      1
    )

    const actionA = await ingestDaily(mainIngestor, 'same-source-two-actions', {
      context: { clientActionId: uuid(22000000, 1) },
      clientDraft: true,
    })
    const actionB = await ingestDaily(mainIngestor, 'same-source-two-actions', {
      context: { clientActionId: uuid(22000000, 2) },
      clientDraft: true,
    })
    equal(actionA.code, 'created')
    equal(actionB.code, 'created')
    check(actionA.record_id !== actionB.record_id)

    const studentA = await ingestDaily(mainIngestor, 'same-record-two-students')
    const studentB = await ingestDaily(mainIngestor, 'same-record-two-students', {
      owner: ownership('daily_logs', { studentId: STUDENT_B }),
    })
    equal(studentA.code, 'created')
    equal(studentB.code, 'created')
    studentBRecordId = studentB.record_id
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 'same-record-two-students'`
      ),
      2
    )

    summary.dedupe = {
      sequential_2: { rows: 1, created: 1, duplicates: 1 },
      sequential_10: { rows: 1, created: 1, duplicates: 9 },
      concurrent_10_pglite: { rows: 1, created: 1, duplicates: 9 },
      concurrent_engine_limit:
        'PGlite tek bağlantıda çağrıları serileştirebilir; gerçek çoklu bağlantılı PostgreSQL yarışı iddia edilmez.',
      response_loss_retry_original_record_id: true,
      same_key_different_payload: 'idempotency_conflict',
      different_client_actions_are_distinct: true,
      same_source_record_different_students_are_distinct: true,
      database_unique_indexes_verified: [
        'learning_evidence_client_idempotency_uq',
        'learning_evidence_source_idempotency_uq',
      ],
    }
  })

  await section('Karantina, ayrıcalıklı alanlar ve SQL şema sınırları', async () => {
    let capturedDaily = null
    const captureRepository = {
      async ingest(record, fingerprint) {
        capturedDaily = { record, fingerprint }
        return { code: 'created', created: true, record_id: record.record_id }
      },
      async quarantine() {
        return { code: 'identity_quarantined', created: true }
      },
    }
    const captureIngestor = createIngestor(captureRepository, 53000000)
    const capturedResult = await ingestDaily(captureIngestor, 'sql-validation-template')
    equal(capturedResult.code, 'created')
    check(Boolean(capturedDaily?.record))

    let invalidSequence = 0
    async function sendMutated(label, mutate) {
      invalidSequence += 1
      const record = structuredClone(capturedDaily.record)
      record.source_record_id = `invalid-${label}-${invalidSequence}`
      delete record.client_action_id
      mutate(record)
      const fingerprint = await buildSemanticFingerprint(record)
      return pgRepository.ingest(record, fingerprint)
    }

    const unknown = await sendMutated('unknown-source', (record) => {
      record.source_code = 'unknown_source'
    })
    equal(unknown.code, 'source_not_allowed')
    const catalog = await sendMutated('catalog', (record) => {
      record.source_code = 'library_gateway'
    })
    equal(catalog.code, 'source_not_allowed')
    const derived = await sendMutated('derived', (record) => {
      record.source_code = 'home_summary'
      record.record_kind = 'derived'
    })
    equal(derived.code, 'source_not_allowed')
    const excluded = await sendMutated('excluded', (record) => {
      record.source_code = 'private_messages'
    })
    equal(excluded.code, 'source_not_allowed')
    equal((await sendMutated('event', (record) => {
      record.semantic_event_type = 'not_allowed_event'
      record.activity_type = 'not_allowed_event'
    })).code, 'source_not_allowed')
    equal((await sendMutated('kind', (record) => {
      record.record_kind = 'snapshot'
      record.as_of = '2026-09-07T10:00:00.000Z'
    })).code, 'source_not_allowed')
    equal((await sendMutated('class', (record) => {
      record.evidence_class = 'direct_measurement'
    })).code, 'validation_rejected')
    equal((await sendMutated('metadata-extra', (record) => {
      record.metadata = { unexpected_key: true }
    })).code, 'validation_rejected')
    equal((await sendMutated('metadata-deep', (record) => {
      record.metadata = { entry_origin: { nested: { too_deep: { value: true } } } }
    })).code, 'validation_rejected')
    equal((await sendMutated('metadata-long', (record) => {
      record.metadata = { entry_origin: 'x'.repeat(257) }
    })).code, 'validation_rejected')
    equal((await sendMutated('metadata-2k', (record) => {
      record.metadata = { entry_origin: 'x'.repeat(2100) }
    })).code, 'validation_rejected')
    equal((await sendMutated('metadata-forbidden', (record) => {
      record.metadata = { entry_origin: { question_text: 'saklanmamali' } }
    })).code, 'validation_rejected')
    equal((await sendMutated('measurement-extra', (record) => {
      record.measurement = { ...record.measurement, raw_score: 90 }
    })).code, 'validation_rejected')
    equal((await sendMutated('measurement-counts', (record) => {
      record.measurement = { ...record.measurement, total_count: 999 }
    })).code, 'validation_rejected')
    equal((await sendMutated('future-time', (record) => {
      record.occurred_at_precision = 'exact'
      record.occurred_at = '2099-01-01T00:00:00.000Z'
      delete record.occurred_on
    })).code, 'validation_rejected')
    equal((await sendMutated('time-union', (record) => {
      record.occurred_at_precision = 'unknown'
      record.occurred_at = '2026-09-07T00:00:00.000Z'
      delete record.occurred_on
    })).code, 'validation_rejected')
    equal((await sendMutated('locator', (record) => {
      record.source_locator = 'https://example.invalid/private'
    })).code, 'validation_rejected')
    equal((await sendMutated('objective', (record) => {
      record.objective_id = 'keyfi-kazanim'
    })).code, 'validation_rejected')
    equal((await sendMutated('availability', (record) => {
      record.source_availability = 'unavailable'
    })).code, 'validation_rejected')
    equal((await sendMutated('teacher-relation', (record) => {
      record.actor_id = TEACHER_A
      record.actor_role = 'teacher'
      record.actor_student_relation = 'unverified_teacher'
    })).code, 'unauthorized')
    equal((await sendMutated('student-actor', (record) => {
      record.actor_id = STUDENT_B
      record.actor_role = 'student'
      record.actor_student_relation = 'self'
    })).code, 'unauthorized')

    const unsupportedPayload = {
      ...capturedDaily.record,
      record_id: uuid(99000000, 1),
    }
    const unsupportedFingerprint = await buildSemanticFingerprint(unsupportedPayload)
    const unsupportedResult = (
      await db.query(
        `select learning_private.ingest_evidence(
          $1::jsonb, $2::text, 'live', null
        ) as outcome`,
        [JSON.stringify(unsupportedPayload), unsupportedFingerprint]
      )
    ).rows[0].outcome
    equal(unsupportedResult.status, 'validation_rejected')
    equal(unsupportedResult.code, 'unsupported_field')

    const privilegedFields = [
      'record_id',
      'contract_version',
      'schema_version',
      'student_id',
      'actor_id',
      'actor_role',
      'actor_student_relation',
      'recorded_at',
      'evidence_class',
      'trust_level',
      'source_registry_version',
      'dedupe_key',
      'semantic_fingerprint',
      'target_record_id',
      'derivation',
    ]
    for (const field of privilegedFields) {
      const result = await ingestDaily(mainIngestor, `privileged-${field}`, {
        record: { [field]: field === 'student_id' ? STUDENT_B : 'forged' },
        clientDraft: true,
      })
      equal(result.code, 'validation_rejected', `${field} reddedilmeliydi.`)
      check(result.reason_codes.includes('CLIENT_PRIVILEGED_FIELD'))
    }

    const ambiguousArgs = {
      record: { exam_type: null, topic: 'Fonksiyonlar' },
    }
    const ambiguous = await ingestDaily(mainIngestor, 'quarantine-ambiguous-1', ambiguousArgs)
    equal(ambiguous.code, 'identity_quarantined')
    const quarantineCount = await queryCount(
      db,
      `select count(*) from public.learning_evidence_quarantine
        where source_record_id = 'quarantine-ambiguous-1'`
    )
    check(quarantineCount >= 1)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 'quarantine-ambiguous-1'`
      ),
      0
    )
    const ambiguousRetry = await ingestDaily(
      mainIngestor,
      'quarantine-ambiguous-1',
      ambiguousArgs
    )
    equal(ambiguousRetry.code, 'identity_quarantined')
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_quarantine
          where source_record_id = 'quarantine-ambiguous-1'`
      ),
      quarantineCount
    )
    const ambiguousConflict = await ingestDaily(
      mainIngestor,
      'quarantine-ambiguous-1',
      {
        ...ambiguousArgs,
        record: {
          ...ambiguousArgs.record,
          correct: 7,
          incorrect: 3,
        },
      }
    )
    equal(ambiguousConflict.code, 'idempotency_conflict')
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_quarantine
          where source_record_id = 'quarantine-ambiguous-1'`
      ),
      quarantineCount
    )

    const unmatched = await mainIngestor.ingestSourceRecord({
      sourceCode: 'ai_solution_sessions',
      sourceRecord: {
        event_id: 'quarantine-unmatched-ai-1',
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'Temel Kavramlar',
        topic_matched: false,
        semantic_event_type: 'solution_requested',
        created_at: '2026-09-07T12:00:00.000Z',
      },
      adapterContext: {
        sourceRevision: 'v1',
        examContextOrigin: 'source_record',
      },
      ownership: ownership('ai_solution_sessions'),
    })
    equal(unmatched.code, 'identity_quarantined')
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 'quarantine-unmatched-ai-1'`
      ),
      0
    )
    const quarantineColumns = (
      await db.query(
        `select column_name from information_schema.columns
          where table_schema = 'public'
            and table_name = 'learning_evidence_quarantine'
          order by ordinal_position`
      )
    ).rows.map((row) => row.column_name)
    for (const forbidden of ['payload', 'metadata', 'measurement', 'raw_content', 'message']) {
      check(!quarantineColumns.includes(forbidden))
    }
    const quarantineText = JSON.stringify(
      (
        await db.query(
          `select * from public.learning_evidence_quarantine
            where source_record_id in (
              'quarantine-ambiguous-1', 'quarantine-unmatched-ai-1'
            )`
        )
      ).rows
    )
    check(!quarantineText.includes('Temel Kavramlar'))
    check(!quarantineText.includes('Fonksiyonlar'))
    summary.security_validation = {
      privileged_client_fields_rejected: privilegedFields.length,
      unknown_catalog_excluded_derived_sources_rejected: true,
      event_kind_class_allowlists_enforced: true,
      metadata_recursive_and_2k_limits_enforced: true,
      measurement_consistency_enforced: true,
      time_union_and_future_limit_enforced: true,
      opaque_locator_enforced: true,
      arbitrary_objective_rejected: true,
      identity_quarantine_excludes_ledger: true,
      quarantine_conflict_is_not_silent_duplicate: true,
      quarantine_raw_payload_columns: false,
    }
  })

  await section('Correction/tombstone 40→20→0 ve SQL/JS etkin görünüm parity', async () => {
    const owner = ownership('daily_logs', { trustLevel: 'authoritative_source' })
    const first = await ingestDaily(mainIngestor, 's11-pg-40-20-0', {
      record: {
        correct: 40,
        incorrect: 0,
        empty: 0,
        duration_minutes: 40,
      },
      owner,
    })
    equal(first.code, 'created')
    const sum = async () =>
      Number(
        (
          await db.query(
            `select coalesce(sum((measurement ->> 'correct_count')::integer), 0)::integer as value
               from public.learning_evidence_effective
              where student_id = $1::uuid
                and source_record_id = 's11-pg-40-20-0'`,
            [STUDENT_A]
          )
        ).rows[0].value
      )
    equal(await sum(), 40)

    const correctionMeasurement = {
      correct_count: 20,
      incorrect_count: 0,
      blank_count: 0,
      marked_count: 20,
      total_count: 20,
      accuracy: 1,
      accuracy_denominator: 'marked',
      accuracy_formula: 'correct_count / marked_count',
      accuracy_formula_version: 'accuracy-marked-v1',
      accuracy_source: 'student_reported',
    }
    const correction = await mainIngestor.ingestTrustedMutation({
      kind: 'correction',
      targetRecordId: first.record_id,
      sourceRevision: 'v2',
      reason: 'source_edited',
      measurement: correctionMeasurement,
      ownership: owner,
    })
    equal(correction.code, 'created')
    equal(await sum(), 20)
    const correctionRetry = await mainIngestor.ingestTrustedMutation({
      kind: 'correction',
      targetRecordId: first.record_id,
      sourceRevision: 'v2',
      reason: 'source_edited',
      measurement: correctionMeasurement,
      ownership: owner,
    })
    equal(correctionRetry.code, 'duplicate')
    equal(correctionRetry.record_id, correction.record_id)

    const tombstone = await mainIngestor.ingestTrustedMutation({
      kind: 'tombstone',
      targetRecordId: correction.record_id,
      sourceRevision: 'v3',
      reason: 'source_deleted',
      ownership: owner,
    })
    equal(tombstone.code, 'created')
    equal(await sum(), 0)
    const tombstoneRetry = await mainIngestor.ingestTrustedMutation({
      kind: 'tombstone',
      targetRecordId: correction.record_id,
      sourceRevision: 'v3',
      reason: 'source_deleted',
      ownership: owner,
    })
    equal(tombstoneRetry.code, 'duplicate')

    const auditRows = (
      await db.query(
        `select * from public.learning_evidence_records
          where student_id = $1::uuid
            and source_record_id = 's11-pg-40-20-0'
          order by ingestion_sequence`,
        [STUDENT_A]
      )
    ).rows
    equal(auditRows.length, 3)
    equal(auditRows.map((row) => row.record_kind), ['event', 'correction', 'tombstone'])
    s11RecordIds = auditRows.map((row) => row.record_id)
    const sqlActiveIds = (
      await db.query(
        `select record_id from public.learning_evidence_effective
          where student_id = $1::uuid
            and source_record_id = 's11-pg-40-20-0'
          order by record_id`,
        [STUDENT_A]
      )
    ).rows.map((row) => row.record_id)
    const jsActiveIds = projectEvidenceHistory(auditRows).active
      .map((row) => row.record_id)
      .sort()
    equal(sqlActiveIds, jsActiveIds)
    equal(sqlActiveIds, [])

    const missing = await mainIngestor.ingestTrustedMutation({
      kind: 'correction',
      targetRecordId: uuid(88000000, 1),
      sourceRevision: 'missing',
      reason: 'source_edited',
      measurement: correctionMeasurement,
      ownership: owner,
    })
    equal(missing.code, 'source_record_not_owned')
    const crossStudent = await mainIngestor.ingestTrustedMutation({
      kind: 'correction',
      targetRecordId: studentBRecordId,
      sourceRevision: 'cross-student',
      reason: 'source_edited',
      measurement: correctionMeasurement,
      ownership: owner,
    })
    equal(crossStudent.code, 'source_record_not_owned')
    const tombstoneTarget = await mainIngestor.ingestTrustedMutation({
      kind: 'tombstone',
      targetRecordId: tombstone.record_id,
      sourceRevision: 'v4',
      reason: 'source_deleted',
      ownership: owner,
    })
    equal(tombstoneTarget.code, 'validation_rejected')
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id = 's11-pg-40-20-0'`
      ),
      3
    )
    summary.correction_tombstone = {
      effective_sequence: [40, 20, 0],
      audit_rows: 3,
      duplicate_mutations_add_rows: false,
      missing_and_cross_student_targets_rejected: true,
      self_or_forward_cycle:
        'record_id DB tarafından üretildiği ve yalnız mevcut hedef kabul edildiği için yapısal olarak oluşturulamaz; istemci record_id alanı ayrıca reddedilir.',
      sql_js_effective_view_parity: true,
    }
  })

  await section('Snapshot son-sürüm ve geç-gelen ordering semantiği', async () => {
    const languageOwner = ownership('ingilizce_learning')
    const sourceRecord = {
      id: 'snapshot-family-pg-1',
      lesson_id: 'a1-m1-d1',
      storage_version: 'v1',
      cefr_level: 'A1',
      skill: 'reading',
      correct: 8,
      incorrect: 2,
    }
    const first = await mainIngestor.ingestSourceRecord({
      sourceCode: 'ingilizce_learning',
      sourceRecord,
      adapterContext: {
        language: 'ingilizce',
        snapshotSection: 'lesson',
        sourceRevision: 'v1',
        asOf: '2026-09-07T12:00:00.000Z',
      },
      ownership: languageOwner,
    })
    equal(first.code, 'created')
    const lateOlderSnapshot = await mainIngestor.ingestSourceRecord({
      sourceCode: 'ingilizce_learning',
      sourceRecord: { ...sourceRecord, correct: 6, incorrect: 4 },
      adapterContext: {
        language: 'ingilizce',
        snapshotSection: 'lesson',
        sourceRevision: 'v2',
        asOf: '2026-09-06T12:00:00.000Z',
      },
      ownership: languageOwner,
    })
    equal(lateOlderSnapshot.code, 'created')
    const snapshotFamilyId = (
      await pgRepository.getRecord(lateOlderSnapshot.record_id)
    ).source_record_id
    const effective = (
      await db.query(
        `select record_id, source_revision, measurement
           from public.learning_evidence_effective
          where student_id = $1::uuid
            and source_code = 'ingilizce_learning'
            and source_record_id = $2::text`,
        [STUDENT_A, snapshotFamilyId]
      )
    ).rows
    equal(effective.length, 1)
    equal(effective[0].record_id, lateOlderSnapshot.record_id)
    equal(effective[0].source_revision, 'v2')
    equal(effective[0].measurement.correct_count, 6)
    const snapshotAudit = (
      await db.query(
        `select * from public.learning_evidence_records
          where student_id = $1::uuid
            and source_code = 'ingilizce_learning'
            and source_record_id = $2::text`,
        [STUDENT_A, snapshotFamilyId]
      )
    ).rows
    const jsEffective = projectEvidenceHistory(snapshotAudit).active
      .map((row) => row.record_id)
      .sort()
    equal(jsEffective, effective.map((row) => row.record_id).sort())
    const duplicate = await mainIngestor.ingestSourceRecord({
      sourceCode: 'ingilizce_learning',
      sourceRecord: { ...sourceRecord, correct: 6, incorrect: 4 },
      adapterContext: {
        language: 'ingilizce',
        snapshotSection: 'lesson',
        sourceRevision: 'v2',
        asOf: '2026-09-06T12:00:00.000Z',
      },
      ownership: languageOwner,
    })
    equal(duplicate.code, 'duplicate')

    let capturedSnapshot = null
    const captureRepository = {
      async ingest(record, fingerprint) {
        capturedSnapshot = { record, fingerprint }
        return { code: 'created', created: true, record_id: record.record_id }
      },
      async quarantine() {
        return { code: 'identity_quarantined' }
      },
    }
    const captureIngestor = createIngestor(captureRepository, 54000000)
    await captureIngestor.ingestSourceRecord({
      sourceCode: 'ingilizce_learning',
      sourceRecord: { ...sourceRecord, id: 'snapshot-asof-missing' },
      adapterContext: {
        language: 'ingilizce',
        snapshotSection: 'lesson',
        sourceRevision: 'v1',
        asOf: '2026-09-07T12:00:00.000Z',
      },
      ownership: languageOwner,
    })
    const missingAsOfRecord = structuredClone(capturedSnapshot.record)
    delete missingAsOfRecord.as_of
    missingAsOfRecord.source_record_id = 'snapshot-asof-missing-db'
    const missingAsOf = await pgRepository.ingest(
      missingAsOfRecord,
      await buildSemanticFingerprint(missingAsOfRecord)
    )
    equal(missingAsOf.code, 'validation_rejected')
    summary.snapshot = {
      active_rows_in_family: 1,
      late_arrival_rule:
        'persistent ingestion_sequence; legacy fixtures fall back to recorded_at then record_id',
      late_older_as_of_insert_wins: true,
      missing_as_of_rejected: true,
      sql_js_parity: true,
    }
  })

  await section('Diagnostic projection: replay, generation, cursor, retry ve claim', async () => {
    const ledgerBefore = await queryCount(
      db,
      'select count(*) from public.learning_evidence_records'
    )
    const firstReplay = await replayDiagnosticProjection({
      repository: pgRepository,
      batchSize: 3,
    })
    check(firstReplay.row_count > 0)
    check(firstReplay.high_water_mark > 0)
    check(/^[0-9a-f]{64}$/.test(firstReplay.checksum))
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_projection_generations
          where generation_id = $1::uuid and status = 'active'`,
        [firstReplay.generation_id]
      ),
      1
    )
    const dryComparison = await replayDiagnosticProjection({
      repository: pgRepository,
      batchSize: 2,
      dryCompare: true,
    })
    equal(dryComparison.checksum, firstReplay.checksum)
    equal(dryComparison.row_count, firstReplay.row_count)
    equal(dryComparison.generation_id, null)

    const secondReplay = await replayDiagnosticProjection({
      repository: pgRepository,
      batchSize: 4,
    })
    equal(secondReplay.checksum, firstReplay.checksum)
    equal(secondReplay.row_count, firstReplay.row_count)
    check(secondReplay.generation_id !== firstReplay.generation_id)
    const generationStates = (
      await db.query(
        `select generation_id, status
           from public.learning_projection_generations
          where projection_name = $1::text and projection_version = $2::text
          order by started_at, generation_id`,
        [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
      )
    ).rows
    equal(generationStates.filter((row) => row.status === 'active').length, 1)
    check(
      generationStates.some(
        (row) => row.generation_id === firstReplay.generation_id && row.status === 'superseded'
      )
    )

    const cursorComparison = await replayDiagnosticProjection({
      repository: pgRepository,
      startSequence: Math.max(1, firstReplay.high_water_mark - 1),
      dryCompare: true,
      batchSize: 2,
    })
    equal(cursorComparison.checksum, firstReplay.checksum)
    equal(cursorComparison.row_count, firstReplay.row_count)
    equal(cursorComparison.start_sequence, Math.max(1, firstReplay.high_water_mark - 1))
    let futureCursorRejected = false
    try {
      await replayDiagnosticProjection({
        repository: pgRepository,
        startSequence: firstReplay.high_water_mark + 1,
        dryCompare: true,
      })
    } catch (error) {
      futureCursorRejected = error?.code === 'PROJECTION_START_SEQUENCE_AHEAD'
    }
    check(futureCursorRejected)

    const sourceReplay = await replayDiagnosticProjection({
      repository: pgRepository,
      sourceCode: 'daily_logs',
      projectionVersion: DIAGNOSTIC_PROJECTION_VERSION,
      batchSize: 2,
    })
    check(sourceReplay.row_count > 0)
    check(sourceReplay.rows.every((row) => row.source_code === 'daily_logs'))
    const sourceGeneration = (
      await db.query(
        `select source_registry_version, source_code, source_adapter_version
           from public.learning_projection_generations
          where generation_id = $1::uuid`,
        [sourceReplay.generation_id]
      )
    ).rows[0]
    equal(sourceGeneration.source_registry_version, SOURCE_REGISTRY_VERSION)
    equal(sourceGeneration.source_code, 'daily_logs')
    equal(sourceGeneration.source_adapter_version, 'learning-source-adapters@1')

    const studentComparison = await replayDiagnosticProjection({
      repository: pgRepository,
      studentId: STUDENT_B,
      dryCompare: true,
      batchSize: 1,
    })
    check(studentComparison.row_count > 0)
    check(studentComparison.rows.every((row) => row.student_id === STUDENT_B))

    const failingRepository = {
      ...pgRepository,
      async listLedgerBatch() {
        throw Object.assign(new Error('synthetic_replay_failure'), {
          code: 'PROJECTION_REPLAY_FAILED',
        })
      },
    }
    let failedReplay = false
    try {
      await replayDiagnosticProjection({ repository: failingRepository })
    } catch {
      failedReplay = true
    }
    check(failedReplay)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_projection_generations
          where projection_name = $1::text
            and projection_version = $2::text
            and status = 'active'
            and student_id is null and source_code is null`,
        [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
      ),
      1
    )
    check(
      (await queryCount(
        db,
        `select count(*) from public.learning_projection_generations
          where projection_name = $1::text
            and projection_version = $2::text
            and status = 'failed'
            and student_id is null and source_code is null`,
        [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
      )) >= 1
    )

    const firstBatch = await processDiagnosticBatch({
      repository: pgRepository,
      workerId: uuid(61000000, 1),
      batchSize: 2,
    })
    check(firstBatch.claimed)
    equal(firstBatch.lastSequence, 2)
    const cursorBeforeFailure = Number(
      (
        await db.query(
          `select last_ingestion_sequence
             from public.learning_projection_cursors
            where projection_name = $1::text and projection_version = $2::text
              and student_id is null and source_code is null`,
          [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
        )
      ).rows[0].last_ingestion_sequence
    )
    let batchFailed = false
    try {
      await pgRepository.runProjectionClaim(
        {
          projectionName: DIAGNOSTIC_PROJECTION_NAME,
          projectionVersion: DIAGNOSTIC_PROJECTION_VERSION,
          workerId: uuid(61000000, 2),
          batchSize: 1,
        },
        async () => {
          throw Object.assign(new Error('synthetic_worker_crash'), {
            code: 'SYNTHETIC_WORKER_CRASH',
          })
        }
      )
    } catch {
      batchFailed = true
    }
    check(batchFailed)
    const cursorAfterFailure = Number(
      (
        await db.query(
          `select last_ingestion_sequence
             from public.learning_projection_cursors
            where projection_name = $1::text and projection_version = $2::text
              and student_id is null and source_code is null`,
          [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
        )
      ).rows[0].last_ingestion_sequence
    )
    equal(cursorAfterFailure, cursorBeforeFailure)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_processing
          where projection_name = $1::text
            and projection_version = $2::text
            and status = 'retry' and retry_count = 1`,
        [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION]
      ),
      1
    )
    const nextPersistedSequence = Number(
      (
        await db.query(
          `select min(ingestion_sequence) as ingestion_sequence
             from public.learning_evidence_records
            where ingestion_sequence > $1::bigint`,
          [cursorBeforeFailure]
        )
      ).rows[0].ingestion_sequence
    )
    const recovered = await processDiagnosticBatch({
      repository: pgRepository,
      workerId: uuid(61000000, 3),
      batchSize: 1,
    })
    check(recovered.claimed)
    equal(recovered.lastSequence, nextPersistedSequence)

    await ingestDaily(mainIngestor, 'projection-worker-race-a')
    await ingestDaily(mainIngestor, 'projection-worker-race-b')
    const workerResults = await Promise.all([
      processDiagnosticBatch({
        repository: pgRepository,
        workerId: uuid(61000000, 4),
        batchSize: 1,
      }),
      processDiagnosticBatch({
        repository: pgRepository,
        workerId: uuid(61000000, 5),
        batchSize: 1,
      }),
    ])
    check(workerResults.every((result) => result.claimed))
    check(workerResults[0].lastSequence !== workerResults[1].lastSequence)

    const poison = await ingestDaily(mainIngestor, 'projection-poison-marker')
    const healthyAfterPoison = await ingestDaily(mainIngestor, 'projection-healthy-after-poison')
    equal(poison.code, 'created')
    equal(healthyAfterPoison.code, 'created')
    let poisonProcessed = false
    while (!poisonProcessed) {
      const claim = await pgRepository.runProjectionClaim(
        {
          projectionName: DIAGNOSTIC_PROJECTION_NAME,
          projectionVersion: DIAGNOSTIC_PROJECTION_VERSION,
          workerId: uuid(61000000, 10 + Number(poisonProcessed)),
          batchSize: 50,
        },
        async (batch) => {
          const affected = [...new Set(batch.records.map((record) => record.student_id))].sort()
          const rows = []
          for (const studentId of affected) {
            let cursor = 0
            const history = []
            while (true) {
              const page = await batch.repository.listLedgerBatch({
                studentId,
                afterSequence: cursor,
                limit: 500,
              })
              if (!page.length) break
              history.push(...page)
              cursor = Number(page.at(-1).ingestion_sequence)
              if (page.length < 500) break
            }
            rows.push(...buildDiagnosticProjection(history, {
              generationId: batch.generation_id,
            }))
          }
          return {
            rows,
            replaceStudentIds: affected,
            quarantinedRecordIds: batch.records
              .filter((record) => record.record_id === poison.record_id)
              .map((record) => record.record_id),
            lastSequence: batch.records.at(-1)?.ingestion_sequence ?? batch.cursor,
          }
        }
      )
      poisonProcessed = (
        await queryCount(
          db,
          `select count(*) from public.learning_evidence_processing
            where projection_name = $1::text
              and projection_version = $2::text
              and record_id = $3::uuid and status = 'quarantined'`,
          [DIAGNOSTIC_PROJECTION_NAME, DIAGNOSTIC_PROJECTION_VERSION, poison.record_id]
        )
      ) === 1
      if (!claim.rows.length && !poisonProcessed) {
        throw new Error('projection_poison_fixture_not_reached')
      }
    }
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_processing
          where projection_name = $1::text
            and projection_version = $2::text
            and record_id = $3::uuid and status = 'succeeded'`,
        [
          DIAGNOSTIC_PROJECTION_NAME,
          DIAGNOSTIC_PROJECTION_VERSION,
          healthyAfterPoison.record_id,
        ]
      ),
      1
    )

    const finalDry = await replayDiagnosticProjection({
      repository: pgRepository,
      dryCompare: true,
      batchSize: 5,
    })
    const finalReplay = await replayDiagnosticProjection({
      repository: pgRepository,
      batchSize: 5,
    })
    equal(finalReplay.checksum, finalDry.checksum)
    equal(finalReplay.row_count, finalDry.row_count)
    equal(
      await queryCount(db, 'select count(*) from public.learning_evidence_records'),
      ledgerBefore + 4
    )

    // PostgreSQL sequence değerleri commit sırası değildir. Gerçek çoklu bağlantı
    // bu ortamda yok; cursor'un gerisinde sonradan görünür olan işlenmemiş kaydı
    // deterministik olarak canlandırıp anti-join kurtarma yolunu kanıtla.
    const lateVisibilityOwner = ownership('daily_logs', { studentId: STUDENT_DELETE })
    const lateVisibility = await ingestDaily(
      mainIngestor,
      'projection-late-visible-lower-sequence',
      { owner: lateVisibilityOwner }
    )
    equal(lateVisibility.code, 'created')
    const lateVisibilitySequence = Number(
      (
        await db.query(
          `select ingestion_sequence
             from public.learning_evidence_records
            where record_id = $1::uuid`,
          [lateVisibility.record_id]
        )
      ).rows[0].ingestion_sequence
    )
    const lateVisibilityGeneration = await replayDiagnosticProjection({
      repository: pgRepository,
      studentId: STUDENT_DELETE,
      batchSize: 1,
    })
    await db.query(
      `insert into public.learning_projection_cursors (
         projection_name, projection_version, student_id, generation_id,
         last_ingestion_sequence
       ) values ($1::text, $2::text, $3::uuid, $4::uuid, $5::bigint)`,
      [
        DIAGNOSTIC_PROJECTION_NAME,
        DIAGNOSTIC_PROJECTION_VERSION,
        STUDENT_DELETE,
        lateVisibilityGeneration.generation_id,
        lateVisibilitySequence + 1,
      ]
    )
    const lateVisibilityCatchup = await processDiagnosticBatch({
      repository: pgRepository,
      workerId: uuid(61000000, 60),
      batchSize: 1,
      studentId: STUDENT_DELETE,
    })
    check(lateVisibilityCatchup.claimed)
    equal(lateVisibilityCatchup.lastSequence, lateVisibilitySequence + 1)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_processing
          where projection_name = $1::text
            and projection_version = $2::text
            and record_id = $3::uuid and status = 'succeeded'`,
        [
          DIAGNOSTIC_PROJECTION_NAME,
          DIAGNOSTIC_PROJECTION_VERSION,
          lateVisibility.record_id,
        ]
      ),
      1
    )
    const globalLateVisibilityCatchup = await processDiagnosticBatch({
      repository: pgRepository,
      workerId: uuid(61000000, 61),
      batchSize: 1,
    })
    check(globalLateVisibilityCatchup.claimed)
    equal(
      await queryCount(
        db,
        `select count(distinct cursor_id) from public.learning_evidence_processing
          where projection_name = $1::text
            and projection_version = $2::text
            and record_id = $3::uuid and status = 'succeeded'`,
        [
          DIAGNOSTIC_PROJECTION_NAME,
          DIAGNOSTIC_PROJECTION_VERSION,
          lateVisibility.record_id,
        ]
      ),
      2
    )
    summary.replay = {
      initial_rows: firstReplay.row_count,
      initial_checksum: firstReplay.checksum,
      deterministic_second_replay: true,
      dry_compare_equal: true,
      student_source_version_and_start_cursor_modes: true,
      source_registry_and_adapter_version_recorded: true,
      future_start_cursor_rejected: true,
      failed_generation_preserved_previous_active: true,
      cursor_unchanged_on_worker_failure: true,
      retry_recovered: true,
      two_worker_claim_duplicate_effect: false,
      late_visible_lower_sequence_recovered: true,
      processing_scope_isolation_verified: true,
      permanent_poison_advanced_to_healthy_record: true,
      final_rows: finalReplay.row_count,
      final_checksum: finalReplay.checksum,
      ledger_mutated_by_replay: false,
    }
  })

  await section('Backfill: PG run store, dry-run, apply, retry, cursor ve iptal', async () => {
    const sourceRows = [
      dailyRecord('backfill-pg-valid-1', { study_date: '2026-09-04' }),
      dailyRecord('backfill-pg-ambiguous-1', {
        study_date: '2026-09-05',
        exam_type: null,
        topic: 'Fonksiyonlar',
      }),
      dailyRecord('backfill-pg-invalid-1', {
        study_date: '2026-09-06',
        correct: -1,
      }),
      dailyRecord('backfill-pg-valid-2', {
        study_date: '2026-09-07',
        correct: 6,
        incorrect: 4,
      }),
    ]
    const sourceBefore = JSON.stringify(sourceRows)
    const provider = {
      sourceCode: 'daily_logs',
      adapterName: 'adaptDailyLog',
      maxBatchSize: 2,
      async readPage({ cursor, limit }) {
        const start = cursor == null ? 0 : Number(cursor)
        const records = sourceRows.slice(start, start + limit)
        const next = start + records.length
        return {
          records,
          nextCursor: String(next),
          done: next >= sourceRows.length,
        }
      },
      async verifyOwnership() {
        return ownership('daily_logs', {
          proof: 'backfill_provider_verified',
        })
      },
      adapterContext() {
        return dailyContext({ sourceRevision: 'backfill-v1' })
      },
    }
    const providerRegistry = createBackfillProviderRegistry([provider])
    const runStore = createPgBackfillRunStore(db)
    const createRun = (runId, mode) =>
      runStore.create({
        run_id: runId,
        source_code: 'daily_logs',
        source_registry_version: SOURCE_REGISTRY_VERSION,
        mode,
        student_scope: { student_id: STUDENT_A },
        batch_size: 2,
      })

    const dryRunId = uuid(62000000, 1)
    const dryRunTwoId = uuid(62000000, 2)
    await createRun(dryRunId, 'dry_run')
    await createRun(dryRunTwoId, 'dry_run')
    const beforeDryLedger = await queryCount(
      db,
      'select count(*) from public.learning_evidence_records'
    )
    const beforeDryQuarantine = await queryCount(
      db,
      'select count(*) from public.learning_evidence_quarantine'
    )
    const dryRun = await runBackfill({
      runId: dryRunId,
      providerRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 2,
    })
    const dryRunTwo = await runBackfill({
      runId: dryRunTwoId,
      providerRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 2,
    })
    equal(dryRun.status, 'completed')
    equal(dryRun.counts, dryRunTwo.counts)
    equal(dryRun.counts.scanned, 4)
    equal(dryRun.counts.would_create, 2)
    equal(dryRun.counts.quarantine, 1)
    equal(dryRun.counts.error, 1)
    equal(
      await queryCount(db, 'select count(*) from public.learning_evidence_records'),
      beforeDryLedger
    )
    equal(
      await queryCount(db, 'select count(*) from public.learning_evidence_quarantine'),
      beforeDryQuarantine
    )

    const applyRunId = uuid(62000000, 3)
    await createRun(applyRunId, 'apply')
    const apply = await runBackfill({
      runId: applyRunId,
      providerRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 2,
    })
    equal(apply.status, 'completed')
    equal(apply.counts.created, 2)
    equal(apply.counts.quarantine, 1)
    equal(apply.counts.error, 1)

    const secondApplyRunId = uuid(62000000, 4)
    await createRun(secondApplyRunId, 'apply')
    const secondApply = await runBackfill({
      runId: secondApplyRunId,
      providerRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 2,
    })
    equal(secondApply.status, 'completed')
    equal(secondApply.counts.created, 0)
    equal(secondApply.counts.duplicate, 2)
    equal(secondApply.counts.quarantine, 1)
    equal(secondApply.counts.error, 1)
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where source_record_id like 'backfill-pg-valid-%'`
      ),
      2
    )

    const resumeRows = [
      dailyRecord('backfill-resume-valid-1'),
      dailyRecord('backfill-resume-valid-2'),
    ]
    const resumeProvider = {
      ...provider,
      async readPage({ cursor, limit }) {
        const start = cursor == null ? 0 : Number(cursor)
        const records = resumeRows.slice(start, start + limit)
        const next = start + records.length
        return { records, nextCursor: String(next), done: next >= resumeRows.length }
      },
    }
    const resumeRegistry = createBackfillProviderRegistry([resumeProvider])
    const resumeRunId = uuid(62000000, 5)
    await createRun(resumeRunId, 'apply')
    const paused = await runBackfill({
      runId: resumeRunId,
      providerRegistry: resumeRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 1,
      stopAfterPages: 1,
    })
    equal(paused.status, 'paused')
    equal(paused.cursor, '1')
    const resumed = await runBackfill({
      runId: resumeRunId,
      providerRegistry: resumeRegistry,
      ingestor: mainIngestor,
      runStore,
      batchSize: 1,
    })
    equal(resumed.status, 'completed')
    equal(resumed.resumed, true)
    equal(resumed.restart_count, 1)
    equal(resumed.counts.created, 2)

    const versionMismatchRunId = uuid(62000000, 7)
    await createRun(versionMismatchRunId, 'apply')
    await db.query(
      `update public.learning_evidence_backfill_runs
          set source_adapter_version = 'stale-adapter@1'
        where run_id = $1::uuid`,
      [versionMismatchRunId]
    )
    let versionMismatchRejected = false
    try {
      await runBackfill({
        runId: versionMismatchRunId,
        providerRegistry,
        ingestor: mainIngestor,
        runStore,
      })
    } catch (error) {
      versionMismatchRejected = error?.code === 'BACKFILL_RUN_VERSION_MISMATCH'
    }
    check(versionMismatchRejected)
    equal((await runStore.get(versionMismatchRunId)).status, 'pending')

    const failedRunId = uuid(62000000, 8)
    await createRun(failedRunId, 'apply')
    const invalidPageRegistry = createBackfillProviderRegistry([{
      ...provider,
      async readPage() {
        return { records: null, nextCursor: null, done: false }
      },
    }])
    let invalidPageRejected = false
    try {
      await runBackfill({
        runId: failedRunId,
        providerRegistry: invalidPageRegistry,
        ingestor: mainIngestor,
        runStore,
      })
    } catch (error) {
      invalidPageRejected = error?.code === 'BACKFILL_PAGE_INVALID'
    }
    check(invalidPageRejected)
    const failedRun = await runStore.get(failedRunId)
    equal(failedRun.status, 'failed')
    equal(failedRun.last_error_code, 'backfill_page_invalid')
    equal(failedRun.counts.error, 1)

    const cancelRunId = uuid(62000000, 6)
    await createRun(cancelRunId, 'apply')
    await runStore.cancel(cancelRunId)
    const beforeCancel = await queryCount(
      db,
      'select count(*) from public.learning_evidence_records'
    )
    const cancelled = await runBackfill({
      runId: cancelRunId,
      providerRegistry,
      ingestor: mainIngestor,
      runStore,
    })
    equal(cancelled.status, 'cancelled')
    equal(
      await queryCount(db, 'select count(*) from public.learning_evidence_records'),
      beforeCancel
    )
    equal(JSON.stringify(sourceRows), sourceBefore)
    const persistedRun = await runStore.get(applyRunId)
    equal(persistedRun.counts.created, 2)
    check(!JSON.stringify(persistedRun).includes('Temel Kavramlar'))
    check(!JSON.stringify(persistedRun).includes('Fonksiyonlar'))
    summary.backfill = {
      dry_run: dryRun.counts,
      second_dry_run_equal: true,
      apply: apply.counts,
      second_apply: secondApply.counts,
      paused_cursor: paused.cursor,
      resumed_restart_count: resumed.restart_count,
      version_mismatch_rejected_before_start: true,
      safe_pg_failure_code: failedRun.last_error_code,
      cancelled_without_restart: true,
      source_rows_mutated: false,
      persistent_pg_run_store: true,
      real_product_data_read_or_written: false,
    }
  })

  await section('Kısmi şema ve source health dört durum ayrımı', async () => {
    await db.query(
      `insert into public.learning_source_health (
         student_id, source_registry_version, source_code, capability_version,
         status, record_count, last_success_at, stale_after, last_error_code
       ) values
         ($1::uuid, $2::text, 'daily_logs', 'current@1', 'available', 2,
          pg_catalog.clock_timestamp(), pg_catalog.clock_timestamp() + interval '1 hour', null),
         ($1::uuid, $2::text, 'mock_exam_subjects', 'current@1', 'empty', 0,
          pg_catalog.clock_timestamp(), pg_catalog.clock_timestamp() + interval '1 hour', null),
         ($1::uuid, $2::text, 'branch_exams', 'current@1', 'unavailable', null,
          null, pg_catalog.clock_timestamp() + interval '5 minutes', 'dependency_unavailable'),
         ($1::uuid, $2::text, 'homeworks', 'legacy@1', 'degraded', 0,
          pg_catalog.clock_timestamp(), pg_catalog.clock_timestamp() + interval '5 minutes', 'source_capability_old')`,
      [STUDENT_A, SOURCE_REGISTRY_VERSION]
    )
    const states = (
      await db.query(
        `select status, record_count, last_error_code
           from public.learning_source_health
          where student_id = $1::uuid
          order by status`,
        [STUDENT_A]
      )
    ).rows
    equal(
      [...new Set(states.map((row) => row.status))].sort(),
      ['available', 'degraded', 'empty', 'unavailable']
    )
    equal(states.find((row) => row.status === 'empty').record_count, 0)
    equal(states.find((row) => row.status === 'unavailable').record_count, null)
    equal(states.find((row) => row.status === 'degraded').record_count, 0)

    const missingDb = new PGlite()
    try {
      await installSupabasePrelude(missingDb)
      const missing = await probePgLearningEvidenceRepository(missingDb)
      equal(missing.status, 'unavailable')
      equal(missing.reason_code, 'dependency_unavailable')
    } finally {
      await missingDb.close()
    }
    const empty = await probePgLearningEvidenceRepository({
      async query() {
        return { rows: [] }
      },
    })
    equal(empty.status, 'degraded')
    equal(empty.reason_code, 'SOURCE_CONTRACTS_EMPTY')
    const unauthorized = await probePgLearningEvidenceRepository({
      async query() {
        throw Object.assign(new Error('hidden'), { code: '42501' })
      },
    })
    equal(unauthorized.status, 'unavailable')
    equal(unauthorized.reason_code, 'unauthorized')
    const available = await probePgLearningEvidenceRepository(db)
    equal(available.status, 'available')
    equal(Number(available.capability.source_count), 38)
    summary.health = {
      available: 'passed',
      empty: 'passed',
      unavailable: 'passed',
      degraded: 'passed',
      missing_table_is_not_empty: true,
      unauthorized_is_not_empty: true,
      registry_capability_rows: 38,
    }
  })

  await section('Kişisel verisiz operasyonel ölçüm özeti', async () => {
    const ingestMetrics = mainIngestor.metrics.snapshot()
    check(ingestMetrics.counts.some((item) => item.outcome === 'created'))
    check(ingestMetrics.counts.some((item) => item.outcome === 'duplicate'))
    check(ingestMetrics.counts.some((item) => item.outcome === 'idempotency_conflict'))
    check(ingestMetrics.counts.some((item) => item.outcome === 'identity_quarantined'))
    check(ingestMetrics.counts.some((item) => item.outcome === 'validation_rejected'))

    const operational = await pgRepository.readOperationalSummary()
    check(operational.accepted_by_source_event.length > 0)
    check(operational.identity_resolution_by_status.some(
      (item) => item.identity_status === 'ambiguous'
    ))
    check(operational.processing_by_status.length > 0)
    check(operational.projection_cursor_lag.length > 0)
    equal(
      [...new Set(operational.source_health_by_status.map((item) => item.status))].sort(),
      ['available', 'degraded', 'empty', 'unavailable']
    )
    check(operational.backfill_by_status.length > 0)
    check(operational.projection_generations.length > 0)
    equal(typeof operational.replay_comparison.comparable, 'boolean')

    const safeText = JSON.stringify({ ingestMetrics, operational })
    for (const forbidden of [
      STUDENT_A,
      STUDENT_B,
      STUDENT_DELETE,
      'Temel Kavramlar',
      'Fonksiyonlar',
      'dedupe-conflict-1',
    ]) {
      check(!safeText.includes(forbidden))
    }
    summary.observability = {
      accepted_source_event_groups: operational.accepted_by_source_event.length,
      identity_status_groups: operational.identity_resolution_by_status.length,
      processing_status_groups: operational.processing_by_status.length,
      cursor_lag_groups: operational.projection_cursor_lag.length,
      source_health_statuses: [...new Set(
        operational.source_health_by_status.map((item) => item.status)
      )].sort(),
      backfill_status_groups: operational.backfill_by_status.length,
      replay_comparison_available: operational.replay_comparison.comparable,
      high_cardinality_student_labels: false,
      raw_content_in_summary: false,
    }
  })

  await section('RLS, grant/revoke ve SECURITY DEFINER arama yolu', async () => {
    const expectedVisibleProjectionRows = await queryCount(
      db,
      `select count(*)
         from public.learning_diagnostic_projection_rows as row
         join public.learning_projection_generations as generation
           on generation.generation_id = row.generation_id
        where row.student_id = $1::uuid
          and row.consumer_visible
          and row.is_active
          and generation.status = 'active'
          and generation.student_id is null
          and generation.source_code is null`,
      [STUDENT_A]
    )
    check(expectedVisibleProjectionRows > 0)
    check(
      await queryCount(
        db,
        `select count(*) from public.learning_diagnostic_projection_rows
          where student_id = $1::uuid and not consumer_visible`,
        [STUDENT_A]
      ) > 0
    )
    await db.query(
      `insert into public.learning_source_health (
         student_id, source_registry_version, source_code, capability_version,
         status, record_count, last_success_at
       ) values (
         $1::uuid, $2::text, 'daily_logs', 'student-b@1',
         'available', 1, pg_catalog.clock_timestamp()
       )`,
      [STUDENT_B, SOURCE_REGISTRY_VERSION]
    )
    await asRole(db, 'authenticated', STUDENT_A)
    const ownRows = await db.query('select student_id from public.learning_evidence_records')
    check(ownRows.rows.length > 0)
    check(ownRows.rows.every((row) => row.student_id === STUDENT_A))
    const ownEffective = await db.query('select student_id from public.learning_evidence_effective')
    check(ownEffective.rows.every((row) => row.student_id === STUDENT_A))
    const ownProjection = await db.query(
      `select student_id, is_active, consumer_visible
         from public.learning_diagnostic_projection_rows`
    )
    equal(ownProjection.rows.length, expectedVisibleProjectionRows)
    check(ownProjection.rows.every((row) => row.student_id === STUDENT_A))
    check(ownProjection.rows.every((row) => row.is_active && row.consumer_visible))
    const ownHealth = await db.query('select student_id from public.learning_source_health')
    check(ownHealth.rows.every((row) => row.student_id === STUDENT_A))

    await expectDatabaseRejection(
      () => db.query('select * from public.learning_evidence_quarantine'),
      'Authenticated rol karantinayı doğrudan okuyamamalı.'
    )
    await expectDatabaseRejection(
      () => db.query('select * from public.learning_source_contracts'),
      'Authenticated rol kaynak sözleşmesini doğrudan okuyamamalı.'
    )
    await expectDatabaseRejection(
      () =>
        db.query(
          `insert into public.learning_evidence_records (
             contract_version, schema_version, source_registry_version,
             record_kind, student_id
           ) values ('learning-evidence@1', '1.0', $1, 'event', $2::uuid)`,
          [SOURCE_REGISTRY_VERSION, STUDENT_A]
        ),
      'Öğrenci deftere doğrudan INSERT yapamamalı.'
    )
    await expectDatabaseRejection(
      () =>
        db.query(
          `update public.learning_evidence_records
              set evidence_strength = 'high'
            where record_id = $1::uuid`,
          [baseRecordId]
        ),
      'Öğrenci defteri UPDATE edememeli.'
    )
    await expectDatabaseRejection(
      () =>
        db.query(
          'delete from public.learning_evidence_records where record_id = $1::uuid',
          [baseRecordId]
        ),
      'Öğrenci defteri DELETE edememeli.'
    )
    await expectDatabaseRejection(
      () =>
        db.query(
          `select learning_private.ingest_evidence(
             '{}'::jsonb, repeat('0', 64), 'live', null
           )`
        ),
      'Öğrenci private ingest fonksiyonunu çağıramamalı.'
    )

    await asRole(db, 'authenticated', TEACHER_A)
    equal((await db.query('select * from public.learning_evidence_records')).rows.length, 0)
    equal((await db.query('select * from public.learning_evidence_effective')).rows.length, 0)
    equal(
      (await db.query('select * from public.learning_diagnostic_projection_rows')).rows.length,
      0
    )
    equal((await db.query('select * from public.learning_source_health')).rows.length, 0)

    await asRole(db, 'anon')
    await expectDatabaseRejection(
      () => db.query('select * from public.learning_evidence_records'),
      'Anon defteri okuyamamalı.'
    )
    await expectDatabaseRejection(
      () => db.query('select * from public.learning_evidence_effective'),
      'Anon etkin görünümü okuyamamalı.'
    )
    await expectDatabaseRejection(
      () =>
        db.query(
          `select learning_private.quarantine_evidence('{}'::jsonb)`
        ),
      'Anon private karantina fonksiyonunu çağıramamalı.'
    )

    await asAdmin(db)
    const securityDefiners = (
      await db.query(
        `select p.proname, p.proconfig
           from pg_catalog.pg_proc p
           join pg_catalog.pg_namespace n on n.oid = p.pronamespace
          where n.nspname = 'learning_private' and p.prosecdef
          order by p.proname`
      )
    ).rows
    equal(
      securityDefiners.map((row) => row.proname),
      ['ingest_evidence', 'quarantine_evidence']
    )
    check(
      securityDefiners.every((row) =>
        (row.proconfig ?? []).some((setting) => setting === 'search_path=""')
      )
    )
    await db.exec(`
      create schema malicious_phase_2;
      create function malicious_phase_2.uri_component(text)
      returns text language sql immutable
      as $fn$ select 'hijacked'::text $fn$;
      set search_path = malicious_phase_2, public, pg_catalog;
    `)
    const shadowRetry = await ingestDaily(mainIngestor, 'dedupe-sequential-10')
    equal(shadowRetry.code, 'duplicate')
    const shadowRow = (
      await db.query(
        `select dedupe_key from public.learning_evidence_records
          where source_record_id = 'dedupe-sequential-10'`
      )
    ).rows[0]
    check(!shadowRow.dedupe_key.includes('hijacked'))
    await db.exec('set search_path = public, pg_catalog')

    summary.rls = {
      force_rls_table_count: migrationInventory.rls.length,
      student_reads_only_own_raw_and_effective: true,
      student_reads_only_own_projection_and_health: true,
      student_projection_reads_only_active_global_generation: true,
      cross_student_rows_visible: 0,
      direct_insert_update_delete_blocked: true,
      quarantine_and_contract_tables_private: true,
      anonymous_access_blocked: true,
      teacher_blanket_access: false,
      internal_function_execute_for_product_roles: false,
      security_invoker_view_verified: true,
      security_definer_search_path_empty: true,
      shadowing_attack_changed_result: false,
    }
  })

  await section('Hesap silme cascade ve actor ON DELETE SET NULL', async () => {
    const deleteOwner = ownership('daily_logs', { studentId: STUDENT_DELETE })
    const deleteEvidence = await ingestDaily(mainIngestor, 'account-delete-ledger-1', {
      owner: deleteOwner,
    })
    equal(deleteEvidence.code, 'created')
    const deleteQuarantine = await ingestDaily(
      mainIngestor,
      'account-delete-quarantine-1',
      {
        record: { exam_type: null, topic: 'Fonksiyonlar' },
        owner: deleteOwner,
      }
    )
    equal(deleteQuarantine.code, 'identity_quarantined')
    await db.query(
      `insert into public.learning_source_health (
         student_id, source_registry_version, source_code, capability_version,
         status, record_count, last_success_at
       ) values (
         $1::uuid, $2::text, 'daily_logs', 'delete-test@1',
         'available', 1, pg_catalog.clock_timestamp()
       )`,
      [STUDENT_DELETE, SOURCE_REGISTRY_VERSION]
    )
    const deleteRunStore = createPgBackfillRunStore(db)
    await deleteRunStore.create({
      run_id: uuid(63000000, 1),
      source_code: 'daily_logs',
      source_registry_version: SOURCE_REGISTRY_VERSION,
      mode: 'dry_run',
      student_scope: { student_id: STUDENT_DELETE },
    })
    const scopedReplay = await replayDiagnosticProjection({
      repository: pgRepository,
      studentId: STUDENT_DELETE,
    })
    check(scopedReplay.row_count > 0)
    await processDiagnosticBatch({
      repository: pgRepository,
      workerId: uuid(63000000, 2),
      batchSize: 10,
      studentId: STUDENT_DELETE,
    })
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_projection_cursors
          where student_id = $1::uuid`,
        [STUDENT_DELETE]
      ),
      1
    )

    const teacherEvidence = await mainIngestor.ingestSourceRecord({
      sourceCode: 'live_lesson_shared_summary',
      sourceRecord: {
        lesson_session_id: 'actor-delete-shared-summary-1',
        shared_with_student: true,
        exam_type: 'TYT',
        subject: 'Matematik',
        topic: 'Temel Kavramlar',
      },
      adapterContext: {
        sourceRevision: 'v1',
        asOf: '2026-09-07T12:00:00.000Z',
        completionStatus: 'completed',
      },
      ownership: ownership('live_lesson_shared_summary', {
        actorId: TEACHER_A,
        actorRole: 'teacher',
        actorStudentRelation: 'authorized_teacher',
        trustLevel: 'authoritative_source',
      }),
    })
    equal(teacherEvidence.code, 'created')
    await db.query('delete from auth.users where id = $1::uuid', [TEACHER_A])
    const teacherRecordAfterDelete = (
      await db.query(
        `select actor_id, student_id
           from public.learning_evidence_records
          where record_id = $1::uuid`,
        [teacherEvidence.record_id]
      )
    ).rows[0]
    equal(teacherRecordAfterDelete.student_id, STUDENT_A)
    equal(teacherRecordAfterDelete.actor_id, null)

    const otherBefore = await queryCount(
      db,
      `select count(*) from public.learning_evidence_records
        where student_id in ($1::uuid, $2::uuid)`,
      [STUDENT_A, STUDENT_B]
    )
    await db.query('delete from auth.users where id = $1::uuid', [STUDENT_DELETE])
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_evidence_records where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_evidence_quarantine where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_diagnostic_projection_rows where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_projection_generations where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_projection_cursors where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_source_health where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        'select count(*) from public.learning_evidence_backfill_runs where student_id = $1::uuid',
        [STUDENT_DELETE]
      ),
      0
    )
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where student_id in ($1::uuid, $2::uuid)`,
        [STUDENT_A, STUDENT_B]
      ),
      otherBefore
    )
    equal(
      await queryCount(
        db,
        'select count(*) from auth.users where id = $1::uuid',
        [STUDENT_A]
      ),
      1
    )
    summary.account_deletion = {
      deleted_student_ledger_rows: 0,
      deleted_student_quarantine_rows: 0,
      deleted_student_projection_rows: 0,
      deleted_student_scoped_generation_cursor_health_backfill_rows: 0,
      other_students_preserved: true,
      deleted_teacher_actor_id_set_null: true,
      teacher_evidence_preserved: true,
      source_tombstone_deleted_account: false,
    }
  })

  await section('10.000 sentetik kanıt: indeksli sorgular ve sınırlı batch', async () => {
    const insertStarted = performance.now()
    await db.query(
      `insert into public.learning_evidence_records (
         contract_version, schema_version, source_registry_version, record_kind,
         student_id, actor_id, actor_role, actor_student_relation,
         source_code, source_record_id, source_revision, source_locator,
         semantic_event_type, activity_type, client_action_id,
         occurred_at, occurred_on, occurred_at_precision, as_of, recorded_at,
         education_context_id, subject_id, topic_id, objective_id,
         identity_resolution, curriculum_identity_version,
         curriculum_ledger_version, curriculum_aliases_version,
         evidence_class, evidence_strength, trust_level, provenance,
         source_availability, measurement, relations, metadata,
         source_adapter_version, topic_resolver_version, dedupe_key,
         semantic_fingerprint, target_record_id, correction_reason,
         tombstone_reason, derivation, retention_class, record_origin,
         backfill_run_id
       )
       select
         'learning-evidence@1', '1.0', $1::text, 'event',
         $2::uuid, $2::uuid, 'student', 'self',
         'daily_logs', 'benchmark-' || series.value::text, 'benchmark-v1', null,
         'study_session_reported', 'study_session_reported', null,
         null, '2026-09-01'::date, 'day', null,
         '2026-09-01T00:00:00Z'::timestamptz + series.value * interval '1 second',
         'drkoc:curriculum:context:v1:tyt',
         'drkoc:curriculum:subject:v1:s008',
         'drkoc:curriculum:topic:v1:t0052',
         null,
         pg_catalog.jsonb_build_object(
           'status', 'direct_stable_id',
           'canonicalId', 'drkoc:curriculum:topic:v1:t0052'
         ),
         'curriculum-identity@1', 'curriculum-ledger@1', 'curriculum-aliases@1',
         'student_self_report', 'low', 'account_bound', 'authoritative_source',
         'available',
         pg_catalog.jsonb_build_object(
           'correct_count', 1, 'incorrect_count', 0, 'blank_count', 0,
           'marked_count', 1, 'total_count', 1
         ),
         '{}'::jsonb, '{}'::jsonb,
         'learning-source-adapters@1', 'topic-resolver@1',
         'source:' || $2::text || ':daily_logs:benchmark-' ||
           series.value::text || ':benchmark-v1:study_session_reported',
         pg_catalog.lpad(pg_catalog.to_hex(series.value::bigint), 64, '0'),
         null, null, null, null,
         'academic_policy_pending', 'synthetic', null
       from pg_catalog.generate_series(1, 10000) as series(value)`,
      [SOURCE_REGISTRY_VERSION, STUDENT_B]
    )
    const insertMs = Number((performance.now() - insertStarted).toFixed(3))
    equal(
      await queryCount(
        db,
        `select count(*) from public.learning_evidence_records
          where student_id = $1::uuid and source_record_id like 'benchmark-%'`,
        [STUDENT_B]
      ),
      10000
    )
    await db.exec(`
      analyze public.learning_evidence_records;
      analyze public.learning_evidence_processing;
      analyze public.learning_evidence_quarantine;
    `)

    const benchmarkQueries = [
      {
        name: 'student_time',
        sql: `select record_id from public.learning_evidence_records
          where student_id = $1::uuid
          order by recorded_at desc, record_id desc limit 50`,
        params: [STUDENT_B],
        expectedIndex: 'learning_evidence_student_time_idx',
      },
      {
        name: 'student_topic_time',
        sql: `select record_id from public.learning_evidence_records
          where student_id = $1::uuid
            and topic_id = 'drkoc:curriculum:topic:v1:t0052'
          order by recorded_at desc limit 50`,
        params: [STUDENT_B],
        expectedIndex: 'learning_evidence_student_topic_time_idx',
      },
      {
        name: 'student_source',
        sql: `select record_id from public.learning_evidence_records
          where student_id = $1::uuid and source_code = 'daily_logs'
          order by recorded_at desc limit 50`,
        params: [STUDENT_B],
        expectedIndex: 'learning_evidence_student_source_time_idx',
      },
      {
        name: 'source_record',
        sql: `select record_id from public.learning_evidence_records
          where student_id = $1::uuid and source_code = 'daily_logs'
            and source_record_id = 'benchmark-5000'
            and source_revision = 'benchmark-v1'
            and semantic_event_type = 'study_session_reported'`,
        params: [STUDENT_B],
        expectedIndex: 'learning_evidence_source_record_idx',
      },
    ]
    const queryResults = []
    for (const query of benchmarkQueries) {
      const started = performance.now()
      const result = await db.query(query.sql, query.params)
      const durationMs = Number((performance.now() - started).toFixed(3))
      const planResult = await db.query(
        `explain (analyze, format json) ${query.sql}`,
        query.params
      )
      const plan = JSON.stringify(planResult.rows)
      queryResults.push({
        name: query.name,
        duration_ms: durationMs,
        rows: result.rows.length,
        expected_index: query.expectedIndex,
        index_present: migrationInventory.indexes.includes(query.expectedIndex),
        plan_mentions_expected_index: plan.includes(query.expectedIndex),
        plan_node_index_scan: /Index (Only )?Scan/.test(plan),
      })
      check(migrationInventory.indexes.includes(query.expectedIndex))
      check(result.rows.length > 0)
    }
    check(queryResults.some((result) => result.plan_node_index_scan))

    const benchmarkRecordIds = (
      await db.query(
        `select record_id, ingestion_sequence
           from public.learning_evidence_records
          where student_id = $1::uuid and source_record_id like 'benchmark-%'
          order by ingestion_sequence limit 10`,
        [STUDENT_B]
      )
    ).rows
    const benchmarkCursorId = (
      await db.query(
        `insert into public.learning_projection_cursors (
           projection_name, projection_version, last_ingestion_sequence
         ) values ('benchmark_probe', 'benchmark@1', 0)
         returning cursor_id`
      )
    ).rows[0].cursor_id
    for (const record of benchmarkRecordIds) {
      await db.query(
        `insert into public.learning_evidence_processing (
           cursor_id, projection_name, projection_version, record_id, ingestion_sequence,
           status, retry_count
         ) values ($1::uuid, 'benchmark_probe', 'benchmark@1', $2::uuid, $3::bigint, 'pending', 0)
         on conflict do nothing`,
        [benchmarkCursorId, record.record_id, record.ingestion_sequence]
      )
    }
    const processingPlan = JSON.stringify(
      (
        await db.query(
          `explain (analyze, format json)
           select record_id from public.learning_evidence_processing
            where projection_name = 'benchmark_probe'
              and projection_version = 'benchmark@1'
              and status in ('pending', 'retry', 'processing')
            order by ingestion_sequence limit 10`
        )
      ).rows
    )
    const quarantinePlan = JSON.stringify(
      (
        await db.query(
          `explain (analyze, format json)
           select quarantine_id from public.learning_evidence_quarantine
            where status = 'pending' and reason_code = 'IDENTITY_AMBIGUOUS'
            order by first_seen_at limit 10`
        )
      ).rows
    )
    check(migrationInventory.indexes.includes('learning_processing_claim_idx'))
    check(migrationInventory.indexes.includes('learning_quarantine_status_reason_idx'))
    const firstBenchmarkSequence = Math.min(
      ...benchmarkRecordIds.map((record) => Number(record.ingestion_sequence))
    )
    const boundedBatch = await pgRepository.listLedgerBatch({
      studentId: STUDENT_B,
      afterSequence: firstBenchmarkSequence - 1,
      limit: 500,
    })
    equal(boundedBatch.length, 500)
    summary.benchmark = {
      synthetic_records: 10000,
      insert_ms: insertMs,
      engine: summary.environment.postgresql_compatibility,
      production_sla_claimed: false,
      queries: queryResults,
      processing_query_worked: processingPlan.length > 0,
      quarantine_query_worked: quarantinePlan.length > 0,
      processing_index_present: true,
      quarantine_index_present: true,
      replay_batch_limit_verified: 500,
    }
  })

  await section('Yerel eşzamanlılık sınırı ve yan etki denetimi', async () => {
    const postgresBinary = spawnSync(
      'sh',
      ['-lc', 'command -v postgres || command -v pg_ctl || true'],
      { encoding: 'utf8' }
    ).stdout.trim()
    if (!postgresBinary) {
      summary.skipped.push({
        check: 'real_multi_connection_postgresql_race',
        reason:
          'İzole yerel PostgreSQL sunucusu/ikilisi yok. PGlite tek bağlantıda çağrıları serileştirebilir; gerçek çoklu bağlantı yarışı Faz 9 provasına taşındı.',
        treated_as_passed: false,
        blocks_local_phase_two: false,
      })
    } else {
      summary.skipped.push({
        check: 'real_multi_connection_postgresql_race',
        reason:
          'Bir PostgreSQL ikilisi bulundu ancak güvenli, izole ve bu test için ayrılmış bir sunucu/DSN yok; bilinmeyen yerel veritabanına bağlanılmadı. Faz 9 provasına taşındı.',
        detected_binary: postgresBinary,
        treated_as_passed: false,
        blocks_local_phase_two: false,
      })
    }
    summary.dedupe = {
      sequential_2: { rows: 1, created: 1, duplicate: 1 },
      sequential_10: { rows: 1, created: 1, duplicate: 9 },
      parallel_10_pglite: { rows: 1, created: 1, duplicate: 9 },
      response_loss_retry_returns_original_id: true,
      same_key_different_payload: 'idempotency_conflict',
      different_client_action_ids_remain_distinct: true,
      same_source_record_different_students_remain_distinct: true,
      database_unique_indexes: [
        'learning_evidence_client_idempotency_uq',
        'learning_evidence_source_idempotency_uq',
      ],
      actual_multi_connection_postgresql_race: 'not_run',
      pglite_parallelism_limit_explicit: true,
    }
    summary.side_effects = {
      live_supabase_read: false,
      live_supabase_write: false,
      live_schema_change: false,
      real_source_binding: false,
      real_data_read: false,
      real_backfill: false,
      seed_command_run: false,
      paid_model_call: false,
      deployment: false,
    }
    check(MIGRATION_SQL.includes('begin;'))
    check(MIGRATION_SQL.trimEnd().endsWith('commit;'))
  })

  summary.status = 'passed'
  summary.sections_passed = summary.sections.length
  summary.assertions_total = summary.assertions
  console.log(
    `\nFaz 2 veri ağı kabul testleri geçti: ${summary.sections_passed} bölüm, ${summary.assertions_total} doğrulama.`
  )
  console.log(`FAZ2_RESULT_JSON=${JSON.stringify(summary)}`)
} catch (error) {
  summary.status = 'failed'
  summary.error = {
    name: error?.name ?? 'Error',
    message: error?.message ?? String(error),
  }
  console.error(error?.stack ?? String(error))
  console.error(`FAZ2_RESULT_JSON=${JSON.stringify(summary)}`)
  process.exitCode = 1
} finally {
  await db.close()
}
