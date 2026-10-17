/**
 * Faz 10 — canlıda yalnız katalog istatistikleriyle görülen Faz 4 hacmini,
 * kişisel veri kullanmadan PGlite ve izole PostgreSQL üzerinde tekrar kurup
 * migration zincirini dener.
 */
import assert from 'node:assert/strict'
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync } from 'node:fs'
import { createServer } from 'node:net'
import { tmpdir } from 'node:os'
import { dirname, join, relative, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'
import { PGlite } from '@electric-sql/pglite'
import EmbeddedPostgres from 'embedded-postgres'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const PHASE4_TEST_PATH = join(ROOT, 'scripts/test-phase-4-academic-records.mjs')
const LIVE_SCHEMA_PATH = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-uyumluluk.json')
const LIVE_SCHEMA_CONTRACT_PATH = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-sema-sozlesmesi.json')
const OUTPUT_PATH = join(ROOT, 'docs/ai-koc/kanitlar/faz-10/faz-10-canli-hacim-yerel-prova.json')
const MIGRATIONS = [
  { phase: 2, path: join(ROOT, 'supabase/migration_learning_evidence_network.sql'), wrapsTransaction: false },
  { phase: 3, path: join(ROOT, 'supabase/migration_learning_content_activity.sql'), wrapsTransaction: true },
  { phase: 4, path: join(ROOT, 'supabase/migration_learning_academic_records.sql'), wrapsTransaction: false },
  { phase: 5, path: join(ROOT, 'supabase/migration_learning_language_progress.sql'), wrapsTransaction: false },
  { phase: 6, path: join(ROOT, 'supabase/migration_learning_student_topic_model.sql'), wrapsTransaction: false },
  { phase: 8, path: join(ROOT, 'supabase/migration_learning_coaching_loop.sql'), wrapsTransaction: false },
  { phase: 9, path: join(ROOT, 'supabase/migration_learning_hardening.sql'), wrapsTransaction: false },
]

const LIVE_COUNTS = Object.freeze({
  profiles: 15,
  daily_logs: 572,
  questions: 51,
  homeworks: 1,
  mock_exam_subjects: 86,
  lesson_participants: 33,
})
const PHASE4_COLUMNS_ADDED_ON_LIVE = Object.freeze([
  'ai_solution_sessions.academic_request_id',
  'ai_solution_sessions.academic_revision',
  'ai_solution_sessions.review_revision',
  'daily_logs.academic_revision',
  'exams.academic_revision',
  'homeworks.academic_revision',
  'lesson_participants.attendance_revision',
  'lesson_summaries.academic_revision',
  'mock_exam_subjects.academic_revision',
  'mock_exams.academic_revision',
  'profiles.academic_goal_revision',
  'questions.academic_revision',
  'questions.assigned_by',
  'questions.image_path',
  'questions.origin',
  'questions.teacher_reply_image_path',
])
const PHASE4_COLUMNS_ALREADY_ON_LIVE = Object.freeze([
  'exams.duration_minutes',
  'exams.exam_type',
  'mock_exams.duration_minutes',
  'profiles.exam_date',
  'profiles.exam_profile_updated_at',
  'profiles.exam_year',
  'profiles.grade',
  'profiles.is_exam_year',
  'profiles.target_exam',
  'questions.teacher_reply',
  'questions.teacher_reply_image_url',
  'questions.teacher_reply_strokes',
])
const PHASE4_TARGET_COLUMNS = Object.freeze([
  ...PHASE4_COLUMNS_ADDED_ON_LIVE,
  ...PHASE4_COLUMNS_ALREADY_ON_LIVE,
].sort())

function extractPrelude() {
  const source = readFileSync(PHASE4_TEST_PATH, 'utf8')
  const functionStart = source.indexOf('async function installPrelude(db) {')
  const marker = 'await db.exec(`'
  const sqlStart = source.indexOf(marker, functionStart) + marker.length
  const sqlEnd = source.indexOf('\n  `)\n}', sqlStart)
  assert.ok(functionStart >= 0 && sqlStart >= marker.length && sqlEnd > sqlStart, 'Faz 4 PGlite şema ön hazırlığı bulunamadı')
  const sql = source.slice(sqlStart, sqlEnd)
  assert.equal(sql.includes('${'), false, 'Şema ön hazırlığı dinamik template ifadesi içermemeli')
  return sql
}

const uuidFor = (number) => `10000000-0000-4000-8000-${String(number).padStart(12, '0')}`

async function countRows(db, table) {
  const result = await db.query(`select count(*)::integer as count from public.${table}`)
  return result.rows[0].count
}

async function snapshotCounts(db) {
  const entries = []
  for (const table of Object.keys(LIVE_COUNTS)) entries.push([table, await countRows(db, table)])
  return Object.fromEntries(entries)
}

async function existingTargetColumns(db) {
  const result = await db.query(`
    select table_name || '.' || column_name as qualified_name
      from information_schema.columns
     where table_schema = 'public'
       and table_name || '.' || column_name = any($1::text[])
     order by table_name || '.' || column_name
  `, [[...PHASE4_TARGET_COLUMNS]])
  return result.rows.map((row) => row.qualified_name)
}

async function applyMigration(db, migration) {
  const sql = readFileSync(migration.path, 'utf8')
  const started = performance.now()
  if (migration.wrapsTransaction) await db.exec(`begin;\n${sql}\ncommit;`)
  else await db.exec(sql)
  return Number((performance.now() - started).toFixed(3))
}

async function freePort() {
  const server = createServer()
  await new Promise((resolve, reject) => server.once('error', reject).listen(0, '127.0.0.1', resolve))
  const port = server.address().port
  await new Promise((resolve) => server.close(resolve))
  return port
}

async function seedSyntheticLiveShape(db) {
  await db.exec(`
    insert into auth.users(id,email)
    select ('10000000-0000-4000-8000-' || lpad(n::text,12,'0'))::uuid,
           'sentetik-' || n::text || '@example.invalid'
      from generate_series(1,15) as generated(n);

    insert into public.profiles(id,full_name,role)
    select id, 'Sentetik ' || row_number() over (order by id)::text,
           case when row_number() over (order by id) = 1 then 'teacher' else 'student' end
      from auth.users;

    insert into public.teacher_students(teacher_id,student_id,status)
    select '${uuidFor(1)}'::uuid, id, 'active'
      from public.profiles where role = 'student';

    create table public.ai_study_tasks(
      id uuid primary key default gen_random_uuid(),
      student_id uuid not null references public.profiles(id) on delete cascade,
      plan_group uuid,
      subject text not null,
      topic text,
      activity text not null default 'soru_cozumu'
        check (activity in ('soru_cozumu','konu_tekrari','yanlis_analizi','deneme')),
      planned_date date not null default current_date,
      duration_minutes integer not null default 30 check (duration_minutes between 5 and 480),
      status text not null default 'planlandı' check (status in ('planlandı','tamamlandı','iptal')),
      created_at timestamptz not null default now(),
      completed_at timestamptz
    );
    create index ai_study_tasks_student_date_idx
      on public.ai_study_tasks(student_id,planned_date);
    alter table public.ai_study_tasks enable row level security;
    create policy "Öğrenci kendi plan maddelerini görebilir" on public.ai_study_tasks
      for select using (auth.uid()=student_id);
    create policy "Öğrenci kendi plan maddesini ekleyebilir" on public.ai_study_tasks
      for insert with check (auth.uid()=student_id);
    create policy "Öğrenci kendi plan maddesini güncelleyebilir" on public.ai_study_tasks
      for update using (auth.uid()=student_id) with check (auth.uid()=student_id);
    create policy "Öğrenci kendi plan maddesini silebilir" on public.ai_study_tasks
      for delete using (auth.uid()=student_id);
    grant select,insert,update,delete on public.ai_study_tasks to anon,authenticated,service_role;

    with students as (
      select id, row_number() over (order by id)::integer as ordinal
        from public.profiles where role = 'student'
    )
    insert into public.daily_logs(student_id,study_date,topic,duration_minutes,correct,incorrect,empty,notes)
    select students.id, current_date - ((series.n - 1) % 30),
           'Sentetik konu ' || ((series.n - 1) % 12 + 1)::text,
           15 + ((series.n - 1) % 75), (series.n - 1) % 20, (series.n - 1) % 7,
           (series.n - 1) % 4, null
      from generate_series(1,572) as series(n)
      join students on students.ordinal = ((series.n - 1) % 14) + 1;

    with students as (
      select id, row_number() over (order by id)::integer as ordinal
        from public.profiles where role = 'student'
    )
    insert into public.questions(student_id,content,subject,topic,status,teacher_reply)
    select students.id, 'Sentetik soru ' || series.n::text, 'Matematik',
           'Sentetik konu', 'İnceleniyor', null
      from generate_series(1,51) as series(n)
      join students on students.ordinal = ((series.n - 1) % 14) + 1;

    insert into public.homeworks(student_id,teacher_id,title,description,due_date,status)
    values ('${uuidFor(2)}'::uuid, '${uuidFor(1)}'::uuid,
            'Sentetik ödev', 'Kişisel veri içermez', current_date + 7, 'Yapılıyor');

    insert into public.mock_exams(id,student_id,exam_type,exam_name,exam_date)
    values
      ('20000000-0000-4000-8000-000000000001'::uuid, '${uuidFor(2)}'::uuid, 'TYT', 'Sentetik Deneme 1', current_date - 7),
      ('20000000-0000-4000-8000-000000000002'::uuid, '${uuidFor(3)}'::uuid, 'TYT', 'Sentetik Deneme 2', current_date - 3);

    insert into public.mock_exam_subjects(mock_exam_id,subject,correct,incorrect,empty)
    select case when series.n % 2 = 0
                then '20000000-0000-4000-8000-000000000001'::uuid
                else '20000000-0000-4000-8000-000000000002'::uuid end,
           'Sentetik ders ' || ((series.n - 1) % 8 + 1)::text,
           (series.n - 1) % 30, (series.n - 1) % 10, (series.n - 1) % 5
      from generate_series(1,86) as series(n);

    insert into public.lesson_sessions(id,teacher_id,student_id,title,subject,topic,scheduled_start,scheduled_end,status,provider_room_id)
    values
      ('30000000-0000-4000-8000-000000000001'::uuid, '${uuidFor(1)}'::uuid, '${uuidFor(2)}'::uuid, 'Sentetik ders 1', 'Matematik', 'Konu 1', now() - interval '3 days', now() - interval '3 days' + interval '1 hour', 'completed', 'synthetic-room-1'),
      ('30000000-0000-4000-8000-000000000002'::uuid, '${uuidFor(1)}'::uuid, '${uuidFor(3)}'::uuid, 'Sentetik ders 2', 'Matematik', 'Konu 2', now() - interval '2 days', now() - interval '2 days' + interval '1 hour', 'completed', 'synthetic-room-2'),
      ('30000000-0000-4000-8000-000000000003'::uuid, '${uuidFor(1)}'::uuid, '${uuidFor(4)}'::uuid, 'Sentetik ders 3', 'Matematik', 'Konu 3', now() - interval '1 day', now() - interval '1 day' + interval '1 hour', 'completed', 'synthetic-room-3');

    with pairs as (
      select sessions.id as lesson_session_id, profiles.id as user_id,
             case when profiles.role = 'teacher' then 'teacher' else 'student' end as participant_role,
             row_number() over (order by sessions.id, profiles.id) as ordinal
        from public.lesson_sessions as sessions cross join public.profiles as profiles
    )
    insert into public.lesson_participants(lesson_session_id,user_id,role,first_joined_at,last_left_at,total_seconds,attended)
    select lesson_session_id,user_id,participant_role,now() - interval '1 hour',now(),2700,true
      from pairs where ordinal <= 33;

    insert into public.lesson_summaries(lesson_session_id,teacher_id,student_id,covered_topics,public_note,shared_with_student,completed_at)
    select id,teacher_id,student_id,topic,'Sentetik ders özeti',true,scheduled_end
      from public.lesson_sessions;

    -- Canlı sözleşmede Faz 4 öncesinde zaten var olduğu doğrulanan 12 alan.
    alter table public.exams add column if not exists exam_type text;
    alter table public.exams add column if not exists duration_minutes integer;
    alter table public.mock_exams add column if not exists duration_minutes integer;
    alter table public.profiles add column if not exists grade smallint;
    alter table public.profiles add column if not exists target_exam text;
    alter table public.profiles add column if not exists exam_year smallint;
    alter table public.profiles add column if not exists is_exam_year boolean;
    alter table public.profiles add column if not exists exam_date date;
    alter table public.profiles add column if not exists exam_profile_updated_at timestamptz;
    alter table public.questions add column if not exists teacher_reply_strokes jsonb;

    alter table public.exams add constraint exams_exam_type_check
      check (exam_type is null or exam_type = any(array['LGS','TYT','AYT','KPSS']::text[]));
    alter table public.exams add constraint exams_duration_minutes_check
      check (duration_minutes is null or duration_minutes between 0 and 1440);
    alter table public.mock_exams add constraint mock_exams_duration_minutes_check
      check (duration_minutes is null or duration_minutes between 0 and 1440);
    alter table public.profiles add constraint profiles_grade_check
      check (grade is null or grade between 5 and 13);
    alter table public.profiles add constraint profiles_exam_year_check
      check (exam_year is null or exam_year between 2020 and 2100);
    alter table public.profiles add constraint profiles_target_exam_check
      check (target_exam is null or target_exam in ('LGS','YKS','KPSS','YOK'));

    alter table public.profiles enable row level security;
    alter table public.daily_logs enable row level security;
    alter table public.exams enable row level security;
    alter table public.questions enable row level security;
    alter table public.homeworks enable row level security;
    alter table public.mock_exams enable row level security;
    alter table public.mock_exam_subjects enable row level security;
    alter table public.ai_solution_sessions enable row level security;
    alter table public.lesson_participants enable row level security;
    alter table public.lesson_summaries enable row level security;
  `)
}

async function runRehearsal(db, liveSchemaContract, engine) {
  await db.exec(extractPrelude())
  await seedSyntheticLiveShape(db)

  const before = await snapshotCounts(db)
  assert.deepEqual(before, LIVE_COUNTS)
  assert.equal(Object.values(before).reduce((sum, value) => sum + value, 0), 758)
  const phase4ColumnsBefore = await existingTargetColumns(db)
  assert.deepEqual(phase4ColumnsBefore, [...PHASE4_COLUMNS_ALREADY_ON_LIVE].sort())
  assert.deepEqual(
    PHASE4_TARGET_COLUMNS.filter((column) => !phase4ColumnsBefore.includes(column)),
    [...PHASE4_COLUMNS_ADDED_ON_LIVE].sort(),
  )
  const expectedAiStudyTaskColumns = liveSchemaContract.tables
    .find((table) => table.table_name === 'ai_study_tasks').columns
    .map((column) => column.name)
  const localAiStudyTaskColumns = (await db.query(`
    select column_name
      from information_schema.columns
     where table_schema='public' and table_name='ai_study_tasks'
     order by ordinal_position
  `)).rows.map((row) => row.column_name)
  assert.deepEqual(localAiStudyTaskColumns, expectedAiStudyTaskColumns)

  const firstApply = []
  for (const migration of MIGRATIONS) {
    firstApply.push({ phase: migration.phase, duration_ms: await applyMigration(db, migration) })
  }

  const afterFirst = await snapshotCounts(db)
  assert.deepEqual(afterFirst, before)

  const phase4ColumnsAfter = await existingTargetColumns(db)
  assert.deepEqual(phase4ColumnsAfter, PHASE4_TARGET_COLUMNS)

  const legacyDefaults = await db.query(`
    select
      (select count(*)::integer from public.daily_logs where academic_revision = 0) as daily_logs,
      (select count(*)::integer from public.questions where academic_revision = 0 and origin = 'legacy_unknown') as questions,
      (select count(*)::integer from public.homeworks where academic_revision = 0) as homeworks,
      (select count(*)::integer from public.mock_exam_subjects where academic_revision = 0) as mock_exam_subjects,
      (select count(*)::integer from public.profiles where academic_goal_revision = 0) as profiles
  `)
  assert.deepEqual(legacyDefaults.rows[0], {
    daily_logs: 572,
    questions: 51,
    homeworks: 1,
    mock_exam_subjects: 86,
    profiles: 15,
  })

  const registryAfterFirst = await db.query(`
    select count(*)::integer as count
      from public.learning_source_contracts
     where registry_version = 'learning-academic-registry@1'
  `)

  const secondApply = []
  for (const migration of MIGRATIONS) {
    secondApply.push({ phase: migration.phase, duration_ms: await applyMigration(db, migration) })
  }

  const afterSecond = await snapshotCounts(db)
  assert.deepEqual(afterSecond, before)
  const registryAfterSecond = await db.query(`
    select count(*)::integer as count
      from public.learning_source_contracts
     where registry_version = 'learning-academic-registry@1'
  `)
  assert.equal(registryAfterSecond.rows[0].count, registryAfterFirst.rows[0].count)

  const rls = await db.query(`
    select count(*)::integer as enabled
      from pg_catalog.pg_class as relation
      join pg_catalog.pg_namespace as namespace on namespace.oid = relation.relnamespace
     where namespace.nspname = 'public'
       and relation.relname = any($1::text[])
       and relation.relrowsecurity
  `, [[
    'profiles', 'daily_logs', 'exams', 'questions', 'homeworks', 'mock_exams',
    'mock_exam_subjects', 'ai_solution_sessions', 'lesson_participants', 'lesson_summaries',
  ]])
  assert.equal(rls.rows[0].enabled, 10)

  return {
    engine,
    ordered_phases: MIGRATIONS.map((migration) => migration.phase),
    first_apply: firstApply,
    second_apply: secondApply,
    row_counts_before_apply: before,
    row_counts_after_first_apply: afterFirst,
    row_counts_after_second_apply: afterSecond,
    rows_preserved: true,
    idempotent_second_apply: true,
    phase_4_live_existing_columns_modeled: phase4ColumnsBefore.length,
    phase_4_live_target_columns_after_apply: phase4ColumnsAfter.length,
    phase_4_live_missing_columns_covered: PHASE4_COLUMNS_ADDED_ON_LIVE.length,
    phase_4_live_missing_columns_expected: PHASE4_COLUMNS_ADDED_ON_LIVE.length,
    live_prerequisite_ai_study_tasks_columns_modeled: localAiStudyTaskColumns.length,
    legacy_default_rows_verified: legacyDefaults.rows[0],
    academic_registry_rows: registryAfterSecond.rows[0].count,
    base_tables_with_rls_enabled: rls.rows[0].enabled,
  }
}

function postgresDb(client) {
  return {
    exec: async (sql) => { await client.query(sql) },
    query: (sql, params = []) => client.query(sql, params),
  }
}

async function runLockContentionRehearsal() {
  const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-faz10-lock-pg-'))
  const port = await freePort()
  const server = new EmbeddedPostgres({
    databaseDir,
    port,
    user: 'postgres',
    password: 'phase10-lock-local-only',
    persistent: false,
    onLog: () => {},
    onError: () => {},
  })
  const clients = []
  try {
    await server.initialise()
    await server.start()
    const setup = server.getPgClient()
    const locker = server.getPgClient()
    const migrator = server.getPgClient()
    clients.push(setup, locker, migrator)
    await Promise.all(clients.map((client) => client.connect()))
    const setupDb = postgresDb(setup)
    const migratorDb = postgresDb(migrator)
    await setupDb.exec(extractPrelude())
    await seedSyntheticLiveShape(setupDb)
    await applyMigration(setupDb, MIGRATIONS.find((migration) => migration.phase === 2))
    await applyMigration(setupDb, MIGRATIONS.find((migration) => migration.phase === 3))
    const before = await snapshotCounts(setupDb)

    await locker.query('begin')
    await locker.query('select count(*) from public.daily_logs')
    await migrator.query("set lock_timeout='150ms'")
    let lockError = null
    try {
      await applyMigration(migratorDb, MIGRATIONS.find((migration) => migration.phase === 4))
    } catch (error) {
      lockError = error
      await migrator.query('rollback')
    }
    assert.ok(lockError, 'Faz 4 kilit altında zaman aşımına uğramalı')
    assert.equal(lockError.code, '55P03')
    const rolledBack = await setup.query(`
      select pg_catalog.to_regclass('public.learning_academic_media') is null as ok,
             (select count(*)::integer from public.learning_source_contracts
               where registry_version='learning-academic-registry@1') as registry_rows
    `)
    assert.equal(rolledBack.rows[0].ok, true)
    assert.equal(rolledBack.rows[0].registry_rows, 0)
    assert.deepEqual(await snapshotCounts(setupDb), before)

    await locker.query('rollback')
    await migrator.query("set lock_timeout='0'")
    const retryDuration = await applyMigration(migratorDb, MIGRATIONS.find((migration) => migration.phase === 4))
    const applied = await setup.query(`
      select pg_catalog.to_regclass('public.learning_academic_media') is not null as ok
    `)
    assert.equal(applied.rows[0].ok, true)
    assert.deepEqual(await snapshotCounts(setupDb), before)
    return {
      engine: 'PostgreSQL 18 embedded',
      simultaneous_connections: clients.length,
      held_lock: 'daily_logs AccessShareLock via open read transaction',
      migration_lock_timeout_ms: 150,
      expected_error_code: lockError.code,
      transaction_rolled_back: true,
      partial_phase_4_registry_rows_after_failure: rolledBack.rows[0].registry_rows,
      source_rows_preserved_after_failure: true,
      retry_after_lock_release: 'passed',
      retry_duration_ms: retryDuration,
      source_rows_preserved_after_retry: true,
    }
  } finally {
    await Promise.all(clients.map((client) => client.end().catch(() => {})))
    await server.stop().catch(() => {})
  }
}

async function main() {
  const liveSchema = JSON.parse(readFileSync(LIVE_SCHEMA_PATH, 'utf8'))
  const liveSchemaContract = JSON.parse(readFileSync(LIVE_SCHEMA_CONTRACT_PATH, 'utf8'))
  assert.equal(liveSchema.status, 'passed_read_only_live_schema_compatibility')
  assert.equal(liveSchema.prerequisite_tables?.by_phase?.find((item) => item.phase === 4)?.estimated_rows, 758)
  assert.equal(liveSchema.phase_4_column_impact?.to_add, 16)
  assert.deepEqual(liveSchema.phase_4_column_impact?.missing_columns, PHASE4_COLUMNS_ADDED_ON_LIVE)
  assert.equal(liveSchemaContract.status, 'passed_read_only_live_schema_contract')
  assert.equal(liveSchemaContract.totals?.tables, 13)
  assert.equal(liveSchemaContract.totals?.nonnegative_estimated_rows, 758)
  assert.equal(liveSchemaContract.privacy?.table_rows_selected, false)

  const pglite = new PGlite()
  let pgliteRehearsal
  try {
    pgliteRehearsal = await runRehearsal(pglite, liveSchemaContract, {
      name: 'PGlite/WASM',
      real_postgresql_server: false,
      serialized_connection: true,
    })
  } finally {
    await pglite.close()
  }

  const databaseDir = mkdtempSync(join(tmpdir(), 'drkoc-faz10-live-shape-pg-'))
  const port = await freePort()
  const server = new EmbeddedPostgres({
    databaseDir,
    port,
    user: 'postgres',
    password: 'phase10-local-only',
    persistent: false,
    onLog: () => {},
    onError: () => {},
  })
  let client = null
  let postgresRehearsal
  try {
    await server.initialise()
    await server.start()
    client = server.getPgClient()
    await client.connect()
    postgresRehearsal = await runRehearsal(postgresDb(client), liveSchemaContract, {
      name: 'PostgreSQL 18 embedded',
      real_postgresql_server: true,
      serialized_connection: false,
    })
  } finally {
    if (client) await client.end().catch(() => {})
    await server.stop().catch(() => {})
  }

  assert.deepEqual(postgresRehearsal.row_counts_before_apply, pgliteRehearsal.row_counts_before_apply)
  assert.deepEqual(postgresRehearsal.row_counts_after_second_apply, pgliteRehearsal.row_counts_after_second_apply)
  assert.deepEqual(postgresRehearsal.ordered_phases, pgliteRehearsal.ordered_phases)
  const lockContentionRehearsal = await runLockContentionRehearsal()

  const before = postgresRehearsal.row_counts_before_apply

  const report = {
    schema_version: 'phase-10-live-volume-local-rehearsal@1',
    phase: 10,
    status: 'passed_synthetic_live_shape_rehearsal',
    generated_at: new Date().toISOString(),
    evidence_basis: {
      live_schema_compatibility: relative(ROOT, LIVE_SCHEMA_PATH),
      live_schema_contract: relative(ROOT, LIVE_SCHEMA_CONTRACT_PATH),
      live_schema_contract_checksum: liveSchemaContract.contract_checksum,
      live_schema_tables: liveSchemaContract.totals.tables,
      live_catalog_estimate_rows: 758,
      student_rows_read_from_live: false,
      synthetic_data_only: true,
    },
    fixture: {
      row_counts: before,
      total_live_shaped_rows: 758,
      placeholder_email_domain: 'example.invalid',
      real_student_data_used: false,
    },
    migration_rehearsal: postgresRehearsal,
    secondary_pglite_rehearsal: pgliteRehearsal,
    lock_contention_rehearsal: lockContentionRehearsal,
    conclusion: {
      no_cost_local_risk_reduction_complete: true,
      local_lock_failure_and_retry_verified: true,
      live_migration_rehearsal_complete: false,
      live_lock_duration_measured: false,
      recovery_copy_rehearsal_complete: false,
      ready_for_live_write: false,
      blocking_gate: 'RECOVERY_DRILL_AND_LONG_PILOT_DEFERRED_BY_USER',
    },
    limitations: [
      'Gerçek PostgreSQL motoru kullanılsa da bu prova canlı Supabase kilit davranışını veya geri-yükleme süresini ölçmez.',
      'Canlı tablo istatistikleri yaklaşık olabilir; öğrenci satırları okunmadan yalnız katalog tahminleri kullanıldı.',
      'Ücretli geri kazanım kopyası ve uzun pilot kullanıcı isteğiyle atlandı; bu kapılar geçmiş sayılmadı.',
    ],
    side_effects: {
      live_connection: false,
      live_write: false,
      live_schema_change: false,
      real_student_data_used: false,
      paid_service_used: false,
      deployment_or_push: false,
    },
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true })
  writeFileSync(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`)
  console.log('Faz 10 sentetik canlı-hacim provası PGlite ve PostgreSQL 18 üzerinde geçti.')
  console.log(`Korunan kayıt: ${Object.values(before).reduce((sum, value) => sum + value, 0)}; canlı yazma: 0; ücretli işlem: 0.`)
}

// Yedek provası aynı sentetik kaynağı kullanır; import eski koşuyu başlatmaz.
export { extractPrelude, seedSyntheticLiveShape, freePort, postgresDb, MIGRATIONS, applyMigration }

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
}
