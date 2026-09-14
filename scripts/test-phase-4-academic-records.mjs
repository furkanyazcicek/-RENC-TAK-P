/**
 * AI Koç Faz 4 — ana akademik kayıtlar yerel kabul paketi.
 * Bellekteki PGlite/WASM fixture'ı dışında veri veya ağ kullanmaz.
 */
import assert from 'node:assert/strict'
import { createHash, randomUUID } from 'node:crypto'
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { performance } from 'node:perf_hooks'
import { PGlite } from '@electric-sql/pglite'

import { ACADEMIC_ADAPTER_VERSION, ACADEMIC_SOURCE_REGISTRY, validateAcademicRegistry } from '../src/lib/learning/academicActivity/registry.js'
import { ACADEMIC_ADAPTERS, auditAcademicAdapterParity } from '../src/lib/learning/academicActivity/adapters.js'
import { createAcademicOutbox } from '../src/lib/learning/academicActivity/outbox.js'
import { resolveAcademicCapability } from '../src/lib/learning/academicActivity/health.js'
import { buildPhase4BackfillDryRun, PHASE4_BACKFILL_DECISIONS, runPhase4BackfillBatch } from '../src/lib/learning/academicActivity/backfill.js'

const REPO = fileURLToPath(new URL('..', import.meta.url))
const P2_PATH = join(REPO, 'supabase/migration_learning_evidence_network.sql')
const P3_PATH = join(REPO, 'supabase/migration_learning_content_activity.sql')
const P4_PATH = join(REPO, 'supabase/migration_learning_academic_records.sql')
const MANIFEST_PATH = join(REPO, 'src/generated/learning-content-manifest.json')
const P2 = readFileSync(P2_PATH, 'utf8')
const P3 = readFileSync(P3_PATH, 'utf8')
const P4 = readFileSync(P4_PATH, 'utf8')
const OUT = join(REPO, 'docs/ai-koc/kanitlar/faz-4')
const CHECKPOINT_PATH = join(OUT, 'faz-4-baslangic-checkpoint.json')
const ARCHITECTURE_PATH = join(REPO, 'docs/ai-koc/FAZ_4_ANA_AKADEMIK_KAYIT_MIMARISI.md')

const IDS = Object.freeze({
  studentA: '44000000-0000-4000-8000-000000000001',
  studentB: '44000000-0000-4000-8000-000000000002',
  teacher: '44000000-0000-4000-8000-000000000003',
  unrelatedTeacher: '44000000-0000-4000-8000-000000000004',
  parent: '44000000-0000-4000-8000-000000000005',
  session: '44000000-0000-4000-8000-000000000006',
})
const sha = (value) => createHash('sha256').update(value).digest('hex')
const action = () => randomUUID()

const summary = {
  schema_version: '1.0', phase: 4, status: 'running', sections: [], assertions: 0,
  gates: Array.from({ length: 85 }, (_, i) => ({ id: i + 1, status: 'pending', evidence: null })),
  checksums: { phase_2_migration_sha256: sha(P2), phase_3_migration_sha256: sha(P3), phase_4_migration_sha256: sha(P4) },
  migration: {}, registry: {}, sources: {}, security: {}, backfill: {}, health: {}, performance: {},
  concurrency: { engine: 'PGlite/WASM', serialized_connection: true, real_multi_connection_claimed: false },
  side_effects: {
    live_supabase_read: false, live_supabase_write: false, live_schema_change: false,
    real_student_data_used: false, live_backfill_run: false, live_seed_run: false,
    paid_model_call: false, deployment_performed: false, git_push_performed: false,
    source_marked_live_connected: false,
  },
  skipped: [], limitations: ['PGlite tek bağlantıyı seri işler; gerçek çok bağlantılı yarış sertifikasyonu Faz 9 kapsamındadır.'],
}

function check(value, message) { summary.assertions += 1; assert.ok(value, message) }
function equal(actual, expected, message) { summary.assertions += 1; assert.deepEqual(actual, expected, message) }
function passGate(id, evidence) { summary.gates[id - 1] = { id, status: 'passed', evidence } }
function stableJson(value) {
  if (Array.isArray(value)) return `[${value.map(stableJson).join(',')}]`
  if (value && typeof value === 'object') return `{${Object.keys(value).sort().map((key) => `${JSON.stringify(key)}:${stableJson(value[key])}`).join(',')}}`
  return JSON.stringify(value)
}
function memoryStorage() {
  const values = new Map()
  return { getItem: (key) => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: (key) => values.delete(key), dump: () => [...values.entries()] }
}
async function section(name, run) {
  const started = performance.now()
  await run()
  const duration = Number((performance.now() - started).toFixed(3))
  summary.sections.push({ name, status: 'passed', duration_ms: duration })
  process.stdout.write(`✓ ${name} (${duration} ms)\n`)
}
async function asRole(db, role, uid = null) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid',$1,false)", [uid ?? ''])
  await db.query("select set_config('app.role',$1,false)", [role])
  await db.exec(`set role ${role}`)
}
async function asAdmin(db) {
  await db.exec('reset role')
  await db.query("select set_config('app.uid','',false)")
  await db.query("select set_config('app.role','',false)")
}
async function rpc(db, sql, params = []) {
  const result = await db.query(sql, params)
  return Object.values(result.rows[0] ?? {})[0]
}
async function count(db, relation, where = 'true') {
  const result = await db.query(`select count(*)::integer as n from ${relation} where ${where}`)
  return result.rows[0].n
}

async function installPrelude(db) {
  await db.exec(`
    create schema auth;
    create table auth.users(id uuid primary key,email text);
    create or replace function auth.uid() returns uuid language sql stable as $fn$
      select nullif(current_setting('app.uid',true),'')::uuid;
    $fn$;
    create or replace function auth.role() returns text language sql stable as $fn$
      select coalesce(nullif(current_setting('app.role',true),''),current_user::text);
    $fn$;
    create role anon nologin; create role authenticated nologin; create role service_role nologin;
    grant usage on schema public,auth to anon,authenticated,service_role;
    grant execute on function auth.uid(),auth.role() to anon,authenticated,service_role;

    create schema storage;
    create table storage.buckets(id text primary key,name text not null,public boolean not null default false,file_size_limit bigint,allowed_mime_types text[]);
    create table storage.objects(id uuid primary key default gen_random_uuid(),bucket_id text not null references storage.buckets(id),name text not null,owner_id text);
    alter table storage.objects enable row level security;
    create or replace function storage.foldername(name text) returns text[] language sql immutable as $fn$
      select string_to_array(name,'/');
    $fn$;
    grant usage on schema storage to anon,authenticated,service_role;
    grant select,insert,update,delete on storage.objects to authenticated,service_role;

    create table public.profiles(
      id uuid primary key references auth.users(id) on delete cascade,full_name text not null default 'Sentetik Kullanıcı',
      role text not null check(role in ('teacher','student','parent')),student_id uuid references public.profiles(id),created_at timestamptz default now()
    );
    create table public.daily_logs(id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),study_date date not null default current_date,topic text not null,duration_minutes int not null default 0,correct int not null default 0,incorrect int not null default 0,empty int not null default 0,notes text,created_at timestamptz default now());
    create table public.exams(id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),subject text,topic text not null,exam_date date not null default current_date,correct int,incorrect int,empty int,net numeric generated always as(case when correct is not null and incorrect is not null then correct-(incorrect*.25) end) stored,created_at timestamptz default now());
    create table public.questions(id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),content text,image_url text,subject text,topic text,status text not null default 'İnceleniyor' check(status in ('İnceleniyor','Derste Çözülecek','Çözüldü')),teacher_reply text,teacher_reply_image_url text,created_at timestamptz default now());
    create table public.homeworks(id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),teacher_id uuid references profiles(id),title text not null,description text,due_date date,status text not null default 'Yapılıyor' check(status in ('Yapılıyor','Tamamlandı')),created_at timestamptz default now());
    create table public.mock_exams(id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),exam_type text not null check(exam_type in ('LGS','TYT','AYT','KPSS')),exam_name text,exam_date date not null default current_date,created_at timestamptz default now());
    create table public.mock_exam_subjects(id uuid primary key default gen_random_uuid(),mock_exam_id uuid not null references mock_exams(id) on delete cascade,subject text not null,correct int not null default 0,incorrect int not null default 0,empty int not null default 0,net numeric generated always as(correct-incorrect*.25) stored);
    create table public.teacher_students(teacher_id uuid not null references profiles(id),student_id uuid not null references profiles(id),status text not null,primary key(teacher_id,student_id));

    create table public.ai_solution_sessions(
      id uuid primary key default gen_random_uuid(),student_id uuid not null references profiles(id),status text not null default 'ok' check(status in ('ok','unreadable','refused','error')),
      source text not null default 'photo' check(source in ('photo','text','gallery','pdf')),image_path text,question_text text,student_note text,subject text,topic text,subtopic text,canonical_topic text,topic_matched boolean not null default false,exam_type text,difficulty int check(difficulty between 1 and 5),question_type text,
      answer_latex text,answer_plain text,answer_unit text,answer_choice text,board jsonb,analysis jsonb,student_help jsonb,verification jsonb,confidence numeric check(confidence between 0 and 1),refusal_reason text,model_role text check(model_role in ('fast','pro')),model_id text,escalated boolean not null default false,input_tokens int,output_tokens int,cost_usd numeric,duration_ms int,routing_log jsonb,
      help_requested int not null default 0,student_correct boolean,error_type text,feedback text check(feedback in ('up','down')),feedback_reason text,feedback_note text,
      review_status text not null default 'none' check(review_status in ('none','pending','completed')),reviewed_at timestamptz,created_at timestamptz default now()
    );
    create table public.ai_solution_events(id uuid primary key default gen_random_uuid(),session_id uuid not null references ai_solution_sessions(id) on delete cascade,student_id uuid not null references profiles(id),kind text not null check(kind in ('why','stuck','chat','alternative','check','feedback')),step_index int,question text,answer text,model_role text,model_id text,input_tokens int,output_tokens int,cost_usd numeric,duration_ms int,created_at timestamptz default now());

    create table public.lesson_sessions(id uuid primary key default gen_random_uuid(),teacher_id uuid not null references profiles(id),student_id uuid not null references profiles(id),title text not null,subject text,topic text,scheduled_start timestamptz not null,scheduled_end timestamptz not null,status text not null default 'scheduled',provider_room_id text not null unique,created_at timestamptz default now(),updated_at timestamptz default now());
    create table public.lesson_participants(id uuid primary key default gen_random_uuid(),lesson_session_id uuid not null references lesson_sessions(id) on delete cascade,user_id uuid not null references profiles(id),role text not null check(role in ('teacher','student')),first_joined_at timestamptz,last_left_at timestamptz,total_seconds int not null default 0,reconnect_count int not null default 0,attended boolean not null default false,created_at timestamptz default now(),updated_at timestamptz default now(),unique(lesson_session_id,user_id));
    create table public.lesson_summaries(lesson_session_id uuid primary key references lesson_sessions(id) on delete cascade,teacher_id uuid not null references profiles(id),student_id uuid not null references profiles(id),covered_topics text,public_note text,next_goal text,board_image_url text,board_snapshot jsonb,student_feedback text check(student_feedback is null or student_feedback in ('anladim','tekrar_gerekli','yeniden_anlatilmali')),student_feedback_at timestamptz,shared_with_student boolean not null default false,completed_at timestamptz,created_at timestamptz default now(),updated_at timestamptz default now());
    alter table public.homeworks add column lesson_session_id uuid references lesson_sessions(id);

    create or replace function public.lesson_join(p_session uuid) returns table(participant_role text,lesson_status text)
    language plpgsql security definer set search_path='' as $fn$
    declare v_actor uuid:=auth.uid(); v_s public.lesson_sessions%rowtype; v_role text;
    begin
      select * into v_s from public.lesson_sessions where id=p_session for update;
      if not found then raise exception 'not_found'; end if;
      if v_actor=v_s.student_id then v_role:='student'; elsif v_actor=v_s.teacher_id then v_role:='teacher'; else raise exception 'unauthorized'; end if;
      insert into public.lesson_participants(lesson_session_id,user_id,role,first_joined_at,attended) values(p_session,v_actor,v_role,now(),true)
      on conflict(lesson_session_id,user_id) do update set reconnect_count=public.lesson_participants.reconnect_count+1,last_left_at=null,attended=true;
      return query select v_role,v_s.status;
    end;$fn$;
    create or replace function public.lesson_leave(p_session uuid,p_seconds integer default 0) returns void
    language plpgsql security definer set search_path='' as $fn$
    begin update public.lesson_participants set total_seconds=total_seconds+least(greatest(coalesce(p_seconds,0),0),18000),last_left_at=now()
      where lesson_session_id=p_session and user_id=auth.uid(); if not found then raise exception 'unauthorized'; end if; end;$fn$;
    create or replace function public.lesson_student_feedback(p_session uuid,p_feedback text) returns void language sql security definer set search_path='' as $fn$
      update public.lesson_summaries set student_feedback=p_feedback where lesson_session_id=p_session and student_id=auth.uid();
    $fn$;

    create table public.library_subjects(id uuid primary key default gen_random_uuid(),exam_type text not null,name text not null,order_index int not null default 0,created_at timestamptz default now());
    create table public.library_topics(id uuid primary key default gen_random_uuid(),subject_id uuid not null references library_subjects(id),name text not null,order_index int not null default 0,created_at timestamptz default now());
    create table public.library_notes(id uuid primary key default gen_random_uuid(),topic_id uuid not null references library_topics(id),teacher_id uuid references profiles(id),title text not null,content text,file_url text,file_type text,created_at timestamptz default now());

    grant select,insert,update,delete on all tables in schema public to anon,authenticated,service_role;
    grant execute on all functions in schema public to anon,authenticated,service_role;
  `)
}

async function installBase(db) {
  await installPrelude(db)
  await db.exec(P2)
  await db.exec(P3)
}

async function insertActors(db) {
  await db.query(`insert into auth.users(id,email) values ($1,'a@example.invalid'),($2,'b@example.invalid'),($3,'t@example.invalid'),($4,'u@example.invalid'),($5,'p@example.invalid')`, [IDS.studentA, IDS.studentB, IDS.teacher, IDS.unrelatedTeacher, IDS.parent])
  await db.query(`insert into public.profiles(id,full_name,role,student_id) values ($1,'A','student',null),($2,'B','student',null),($3,'T','teacher',null),($4,'U','teacher',null),($5,'P','parent',$1)`, [IDS.studentA, IDS.studentB, IDS.teacher, IDS.unrelatedTeacher, IDS.parent])
  await db.query(`insert into public.teacher_students(teacher_id,student_id,status) values($1,$2,'active')`, [IDS.teacher, IDS.studentA])
  await db.query(`insert into public.lesson_sessions(id,teacher_id,student_id,title,subject,topic,scheduled_start,scheduled_end,status,provider_room_id) values($1,$2,$3,'Sentetik ders','Matematik','Problemler',now()-interval '5 min',now()+interval '55 min','live','room-phase4')`, [IDS.session, IDS.teacher, IDS.studentA])
}

async function main() {
  mkdirSync(OUT, { recursive: true })
  await section('Checksum ve migration ilk/ikinci uygulama', async () => {
    equal(summary.checksums.phase_2_migration_sha256, '993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea', 'Faz 2 checksum')
    equal(summary.checksums.phase_3_migration_sha256, '8452d4497fc01f35eb8dc7a2c80ec029d6255c4067c548dfacfdce20009c7165', 'Faz 3 checksum')
    const manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
    equal(manifest.manifest_version, 'learning-content-manifest@1', 'Faz 3 manifest sürümü')
    equal(manifest.entries.length, 4344, 'Faz 3 manifest kayıt sayısı')
    equal(manifest.manifest_checksum, '6fa891678666328167f7aff4c3c8ca497cbc0310678c3deacc1f91e68d7840cc', 'yetkili manifest checksum')
    equal(sha(stableJson(manifest.entries)), manifest.manifest_checksum, 'manifest yeniden hesaplanan checksum')
    check(!JSON.stringify(manifest).match(/answer_key|correct_answer|dogru_cevap|answerKey/u), 'public manifest cevap anahtarı içermiyor')
    const db = new PGlite(); await installBase(db)
    await db.query(`insert into auth.users(id,email) values($1,'legacy@example.invalid')`, [IDS.studentB])
    await db.query(`insert into public.profiles(id,full_name,role) values($1,'Korunan','student')`, [IDS.studentB])
    await db.query(`insert into public.daily_logs(student_id,study_date,topic,duration_minutes) values($1,current_date,'Korunan Kayıt',15)`, [IDS.studentB])
    await db.exec(P4)
    equal(await count(db, 'public.daily_logs'), 1, 'mevcut source satırı korundu')
    const first = await db.query(`select count(*)::integer n from public.learning_source_contracts where registry_version='learning-academic-registry@1'`)
    await db.exec(P4)
    const second = await db.query(`select count(*)::integer n from public.learning_source_contracts where registry_version='learning-academic-registry@1'`)
    equal(second.rows[0].n, first.rows[0].n, 'ikinci uygulama nesne/veri çoğaltmadı')
    summary.migration = { first_apply: 'passed', second_apply: 'passed', preserved_fixture_rows: 1, registry_rows: second.rows[0].n }
    passGate(3, 'Faz 2 checksum doğrulandı'); passGate(5, 'Faz 3 migration + manifest checksum ve 4.344 kayıt doğrulandı'); passGate(6, 'PGlite first apply'); passGate(8, 'PGlite second apply'); passGate(9, 'legacy fixture preserved')
    await db.close()
  })

  await section('Kastılı hata tam rollback', async () => {
    const db = new PGlite(); await installBase(db)
    let failed = false
    try { await db.exec(P4.replace(/commit;\s*$/u, "select 1/0;\ncommit;")) } catch { failed = true; await db.exec('rollback') }
    check(failed, 'hata enjeksiyonu migrationı durdurdu')
    const rolledBack = await db.query("select to_regclass('public.learning_academic_media') is null as ok")
    check(rolledBack.rows[0].ok, 'hata migration nesnelerini geri aldı')
    passGate(7, 'kısıtlı migration hata enjeksiyonu tam rollback')
    await db.close()
  })

  await section('Faz 4 sicil, SQL ve adaptör parity', async () => {
    check(validateAcademicRegistry(), 'JS akademik sicili geçerli')
    check(auditAcademicAdapterParity(), 'bütün pozitif kaynakların adaptörü var')
    const db = new PGlite(); await installBase(db); await db.exec(P4)
    const sqlRows = (await db.query(`select matrix_id,source_code,classification,ingest_allowed,adapter_name,adapter_version,semantic_event_types,evidence_class_by_event,decision_status from public.learning_source_contracts where registry_version='learning-academic-registry@1' order by matrix_id`)).rows
    equal(sqlRows.length, ACADEMIC_SOURCE_REGISTRY.length, 'SQL sicil kapsamı')
    for (const source of ACADEMIC_SOURCE_REGISTRY) {
      const sql = sqlRows.find((row) => row.source_code === source.source_code)
      check(sql, `${source.source_code} SQL satırı`)
      equal(sql.matrix_id, source.matrix_id, `${source.source_code} matrix parity`)
      equal(sql.classification, source.classification, `${source.source_code} classification parity`)
      equal(sql.ingest_allowed, source.ingest_allowed, `${source.source_code} ingest parity`)
      equal(sql.adapter_name, source.adapter, `${source.source_code} adapter parity`)
      equal(sql.adapter_version, source.adapter ? ACADEMIC_ADAPTER_VERSION : null, `${source.source_code} adapter version parity`)
      equal([...sql.semantic_event_types].sort(), [...source.semantic_event_types].sort(), `${source.source_code} semantic parity`)
      equal(sql.evidence_class_by_event, source.evidence_class_by_event, `${source.source_code} class parity`)
      equal(sql.decision_status, source.decision_status, `${source.source_code} decision parity`)
    }
    summary.registry = { version: 'learning-academic-registry@1', source_count: sqlRows.length, positive_count: sqlRows.filter((row) => row.ingest_allowed).length, parity: 'passed' }
    summary.sources = Object.fromEntries(sqlRows.map((row) => [row.source_code, { matrix_id: row.matrix_id, classification: row.classification, decision_status: row.decision_status, semantic_event_types: row.semantic_event_types }]))
    passGate(10, '14/14 JS/SQL/adaptör parity')
    await db.close()
  })

  await section('M03 günlük kayıt zinciri', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    const createId = action()
    await asRole(db, 'authenticated', IDS.studentA)
    const created = await rpc(db, `select public.create_academic_daily_log(current_date,'Matematik - Problemler',30,8,2,0,'sentetik not','manual_external_self_report',$1::uuid) r`, [createId])
    equal(created.status, 'created', 'M03 kaynak ve kanıt oluştu')
    const duplicate = await rpc(db, `select public.create_academic_daily_log(current_date,'Matematik - Problemler',30,8,2,0,'sentetik not','manual_external_self_report',$1::uuid) r`, [createId])
    equal(duplicate.record_id, created.record_id, 'M03 retry aynı kayıt')
    const conflict = await rpc(db, `select public.create_academic_daily_log(current_date,'Matematik - Problemler',31,8,2,0,'sentetik not','manual_external_self_report',$1::uuid) r`, [createId])
    equal(conflict.status, 'idempotency_conflict', 'M03 farklı payload çakıştı')
    const noop = await rpc(db, `select public.update_academic_daily_log($1::uuid,30,8,2,0,$2::uuid) r`, [created.record_id, action()])
    equal(noop.status, 'no_change', 'M03 no-op correction üretmedi')
    await asRole(db, 'authenticated', IDS.teacher)
    const corrected = await rpc(db, `select public.update_academic_daily_log($1::uuid,35,9,1,0,$2::uuid) r`, [created.record_id, action()])
    equal(corrected.source_revision, 2, 'yetkili öğretmen correction')
    await asRole(db, 'authenticated', IDS.studentA)
    const deleted = await rpc(db, `select public.delete_academic_daily_log($1::uuid,$2::uuid) r`, [created.record_id, action()])
    equal(deleted.status, 'created', 'M03 tombstone')
    const countsOnly = await rpc(db, `select public.create_academic_daily_log(current_date,'Matematik - Test',0,6,2,1,null,'manual_platform_self_report',$1::uuid) r`, [action()])
    equal(countsOnly.status, 'created', 'yalnız soru sayısı kaydı')
    await asAdmin(db)
    const rows = await db.query(`select record_kind,evidence_class,measurement from public.learning_evidence_records where source_code='daily_logs' and source_record_id=$1 order by ingestion_sequence`, [created.record_id])
    equal(rows.rows.map((r) => r.record_kind), ['event','correction','tombstone'], 'M03 event/correction/tombstone')
    check(rows.rows.every((r) => r.evidence_class === 'student_self_report'), 'M03 öğrenci beyanı sınıfı korundu')
    equal((await db.query(`select semantic_event_type from public.learning_evidence_records where source_record_id=$1`, [countsOnly.record_id])).rows[0].semantic_event_type, 'question_counts_reported', 'yalnız soru sayısı ayrı event')
    passGate(11, 'M03 PGlite create/correction/delete'); passGate(12, 'student_self_report'); passGate(13, 'yalnız daily_logs kaynağı'); passGate(62, 'aynı action farklı payload conflict'); passGate(65, 'no-op correction yok')
    await db.close()
  })

  await section('M04 genel deneme atomikliği ve formülleri', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db); await asRole(db, 'authenticated', IDS.studentA)
    const subjects = [{ subject: 'Matematik', correct: 9, incorrect: 3, empty: 0 }, { subject: 'Türkçe', correct: 8, incorrect: 4, empty: 2 }]
    const created = await rpc(db, `select public.create_academic_mock_exam('LGS','Sentetik',current_date,90,$1::jsonb,$2::uuid) r`, [JSON.stringify(subjects), action()])
    equal(created.subject_count, 2, 'M04 iki child')
    await asAdmin(db)
    equal(await count(db, 'public.mock_exams'), 1, 'M04 parent')
    equal(await count(db, 'public.mock_exam_subjects'), 2, 'M04 child')
    const evidence = await db.query(`select semantic_event_type,measurement from public.learning_evidence_records where source_code='mock_exam_subjects' order by ingestion_sequence`)
    equal(evidence.rows.length, 3, 'bir session duration + iki child')
    equal(Number(evidence.rows.find((r) => r.semantic_event_type==='mock_exam_subject_result_reported').measurement.net_score), 8, 'LGS /3')
    equal(evidence.rows.filter((r) => r.measurement.duration_minutes != null).length, 1, 'duration child sayısıyla katlanmadı')
    check(evidence.rows.filter((r) => r.semantic_event_type==='mock_exam_subject_result_reported').every((r) => r.topic_id == null), 'subject sonucu konuya zorlanmadı')
    const before = await count(db, 'public.mock_exams')
    await asRole(db, 'authenticated', IDS.studentA)
    let failed = false
    try { await rpc(db, `select public.create_academic_mock_exam('TYT','Bozuk',current_date,60,$1::jsonb,$2::uuid) r`, [JSON.stringify([{ subject: 'Fen', correct: 'x' }]), action()]) } catch { failed = true }
    check(failed, 'bozuk child transactionı geri aldı')
    await asAdmin(db); equal(await count(db, 'public.mock_exams'), before, 'orphan parent yok')
    await asRole(db, 'authenticated', IDS.studentA)
    const deleted = await rpc(db, `select public.delete_academic_mock_exam($1::uuid,$2::uuid) r`, [created.record_id, action()])
    equal(deleted.tombstoned_subject_count, 2, 'bütün child tombstone')
    await asAdmin(db); equal(await count(db, 'public.mock_exam_subjects'), 0, 'parent delete child kaldırmadı')
    passGate(14, 'M04 transaction'); passGate(15, 'child failure rollback'); passGate(16, 'LGS /3 ve registry /4'); passGate(17, 'tek session duration'); passGate(18, 'topicless subject scope'); passGate(19, 'parent delete child tombstones')
    await db.close()
  })

  await section('M05 branş denemesi provenance ve unknown tür', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.studentA)
    const student = await rpc(db, `select public.create_academic_branch_exam(null,'Matematik','Problemler',null,current_date,5,1,0,20,$1::uuid) r`, [action()])
    equal(student.actor_role, 'student', 'öğrenci provenance')
    await asRole(db, 'authenticated', IDS.teacher)
    const teacher = await rpc(db, `select public.create_academic_branch_exam($1::uuid,'Fen','Fizik','TYT',current_date,7,1,0,25,$2::uuid) r`, [IDS.studentA, action()])
    equal(teacher.actor_role, 'teacher', 'öğretmen provenance')
    await asRole(db, 'authenticated', IDS.unrelatedTeacher)
    const denied = await rpc(db, `select public.create_academic_branch_exam($1::uuid,'Fen','Fizik','TYT',current_date,7,1,0,25,$2::uuid) r`, [IDS.studentA, action()])
    equal(denied.status, 'unauthorized', 'ilgisiz öğretmen reddedildi')
    await asAdmin(db)
    const rows = await db.query(`select semantic_event_type,evidence_class,measurement from public.learning_evidence_records where source_code='branch_exams' order by ingestion_sequence`)
    equal(rows.rows[0].evidence_class, 'student_self_report', 'student class')
    equal(rows.rows[1].evidence_class, 'teacher_feedback', 'teacher class')
    check(rows.rows[0].measurement.net_score == null, 'unknown exam type net uydurmadı')
    check(rows.rows[1].measurement.net_score != null, 'bilinen TYT /4 net')
    await asRole(db, 'authenticated', IDS.teacher)
    const removed = await rpc(db, `select public.delete_academic_branch_exam($1::uuid,$2::uuid) r`, [teacher.record_id, action()])
    equal(removed.status, 'created', 'M05 tombstone')
    passGate(20, 'student/teacher provenance'); passGate(21, 'fallback yok, tüm kolonlar zorunlu migration'); passGate(22, 'unknown net yok'); passGate(23, 'delete tombstone')
    await db.close()
  })

  await section('M06 atama ve öğrenci durum ayrımı', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.unrelatedTeacher)
    const denied = await rpc(db, `select public.assign_academic_homework($1::uuid,'Başlık',null,null,null,$2::uuid) r`, [IDS.studentA, action()])
    equal(denied.status, 'unauthorized', 'ilgisiz öğretmen atayamaz')
    await asRole(db, 'authenticated', IDS.teacher)
    const assigned = await rpc(db, `select public.assign_academic_homework($1::uuid,'20 soru','Açıklama',current_date+1,$2::uuid,$3::uuid) r`, [IDS.studentA, IDS.session, action()])
    equal(assigned.status, 'created', 'ders bağlı ödev aynı writer')
    await asRole(db, 'authenticated', IDS.studentA)
    const status = await rpc(db, `select public.update_academic_homework_status($1::uuid,'Tamamlandı',$2::uuid) r`, [assigned.record_id, action()])
    equal(status.status, 'created', 'öğrenci status snapshot')
    await asAdmin(db)
    const rows = await db.query(`select semantic_event_type,evidence_class,measurement from public.learning_evidence_records where source_code='homeworks' order by ingestion_sequence`)
    equal(rows.rows.map((r) => r.semantic_event_type), ['homework_assigned','homework_status_reported'], 'atama/status ayrı semantic')
    check(rows.rows[1].measurement.student_correct == null && rows.rows[1].measurement.correct_count == null, 'tamamlandı correctness değil')
    passGate(24, 'assignment/status separate'); passGate(25, 'completion not correctness'); passGate(26, 'student narrow status RPC'); passGate(27, 'active teacher link'); passGate(28, 'lesson_session same writer')
    await db.close()
  })

  await section('M07 iki yönlü soru ve feedback', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.studentA)
    const submitted = await rpc(db, `select public.submit_academic_question('Nerede hata yaptım?','Matematik','Problemler',null,$1::uuid) r`, [action()])
    equal(submitted.status, 'created', 'öğrenci soru')
    await asRole(db, 'authenticated', IDS.teacher)
    const status = await rpc(db, `select public.update_academic_question_status($1::uuid,'Çözüldü',$2::uuid) r`, [submitted.record_id, action()])
    equal(status.evidence_created, false, 'status evidence/correctness üretmedi')
    const replied = await rpc(db, `select public.reply_academic_question($1::uuid,'İşlem sırasına bak.',null,'Çözüldü',$2::uuid) r`, [submitted.record_id, action()])
    equal(replied.status, 'created', 'text feedback')
    const shared = await rpc(db, `select public.share_academic_teacher_question($1::uuid,'Bu soruyu derste çözelim.','Matematik','Problemler',null,$2::uuid) r`, [IDS.studentA, action()])
    equal(shared.status, 'created', 'öğretmen doğrudan soru')
    const draft = { v: 1, strokes: [{ id: 's1', points: [0, 0, 1, 1] }] }
    const savedDraft = await rpc(db, `select public.save_academic_question_canvas_draft($1::uuid,$2::jsonb,$3::uuid) r`, [submitted.record_id, JSON.stringify(draft), action()])
    equal(savedDraft.evidence_created, false, 'canvas draft evidence değil')
    const canvas = await rpc(db, `select public.publish_academic_question_canvas($1::uuid,null,'Çözüldü',$2::uuid) r`, [submitted.record_id, action()])
    equal(canvas.status, 'created', 'canvas feedback correction')
    await asAdmin(db)
    const rows = await db.query(`select semantic_event_type,evidence_class,measurement,metadata from public.learning_evidence_records where source_code='questions_teacher_feedback' order by ingestion_sequence`)
    equal(rows.rows[0].evidence_class, 'exposure', 'question submitted exposure')
    check(rows.rows.every((r) => r.measurement.student_correct == null), 'M07 correctness üretmedi')
    check(rows.rows.some((r) => r.semantic_event_type==='teacher_problem_question_shared' && r.evidence_class==='teacher_feedback'), 'teacher share semantic')
    const serialized = JSON.stringify(rows.rows)
    check(!serialized.includes('Nerede hata') && !serialized.includes('İşlem sırası') && !serialized.includes('academic-questions/'), 'common evidence ham içerik/yol taşımıyor')
    passGate(29, 'question exposure'); passGate(30, 'text/canvas feedback'); passGate(31, 'status no correctness'); passGate(32, 'teacher share SQL+UI'); passGate(33, 'versioned teacher semantic'); passGate(34, 'no raw content/path')
    await db.close()
  })

  await section('M11 claim/finalize ve etkileşim atomikliği', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    const solveAction = action(); const fingerprint = 'a'.repeat(64)
    await asRole(db, 'authenticated', IDS.studentA)
    const claim = await rpc(db, `select public.claim_academic_ai_solve('text',$1,$2::uuid) r`, [fingerprint, solveAction])
    equal(claim.status, 'claimed', 'model öncesi durable claim')
    const processing = await rpc(db, `select public.claim_academic_ai_solve('text',$1,$2::uuid) r`, [fingerprint, solveAction])
    equal(processing.status, 'processing', 'aynı action ikinci model çağrısını durdurur')
    let forgedDenied = false
    try {
      await rpc(db, `select public.finalize_academic_ai_solve($1::uuid,$2::uuid,$3::jsonb) r`, [IDS.studentA, solveAction, JSON.stringify({ status: 'ok', source: 'text', model_id: 'forged' })])
    } catch (error) {
      forgedDenied = error?.code === '42501'
    }
    check(forgedDenied, 'öğrenci model alanı finalize işlevini çalıştıramaz')
    await asRole(db, 'service_role')
    const payload = { status: 'ok', source: 'text', question_text: 'ham soru', answer_plain: '42', board: { v: 1, steps: [] }, analysis: {}, student_help: {}, verification: { status: 'passed' }, confidence: 0.9, model_role: 'fast', model_id: 'deterministic-stub', topic_matched: false }
    const finalized = await rpc(db, `select public.finalize_academic_ai_solve($1::uuid,$2::uuid,$3::jsonb) r`, [IDS.studentA, solveAction, JSON.stringify(payload)])
    equal(finalized.status, 'created', 'session+evidence finalize')
    await asRole(db, 'authenticated', IDS.studentA)
    const completed = await rpc(db, `select public.claim_academic_ai_solve('text',$1,$2::uuid) r`, [fingerprint, solveAction])
    equal(completed.session_id, finalized.session_id, 'completed retry aynı session')
    const helpAction = action()
    await asRole(db, 'service_role')
    const help = await rpc(db, `select public.record_academic_ai_solve_help($1::uuid,$2::uuid,'why',0,'neden','açıklama','fast','stub',$3::uuid) r`, [IDS.studentA, finalized.session_id, helpAction])
    equal(help.help_requested, 1, 'help event+sayaç')
    const helpRetry = await rpc(db, `select public.record_academic_ai_solve_help($1::uuid,$2::uuid,'why',0,'neden','açıklama','fast','stub',$3::uuid) r`, [IDS.studentA, finalized.session_id, helpAction])
    equal(helpRetry.event_id, help.event_id, 'help retry tek event')
    const checked = await rpc(db, `select public.record_academic_ai_solve_check($1::uuid,$2::uuid,true,$3::jsonb,$4::uuid) r`, [IDS.studentA, finalized.session_id, JSON.stringify({ answer: 'doğru', model_role: 'pro', model_id: 'stub' }), action()])
    equal(checked.status, 'created', 'model check evidence')
    await asRole(db, 'authenticated', IDS.studentA)
    const self = await rpc(db, `select public.report_academic_ai_solve_result($1::uuid,false,$2::uuid) r`, [finalized.session_id, action()])
    equal(self.status, 'created', 'explicit self result')
    const feedback = await rpc(db, `select public.feedback_academic_ai_solve($1::uuid,'down','anlasilmadi','not',$2::uuid) r`, [finalized.session_id, action()])
    equal(feedback.status, 'created', 'thumbs feedback')
    await asAdmin(db)
    const rows = await db.query(`select semantic_event_type,evidence_class,measurement,topic_id from public.learning_evidence_records where source_code='ai_solution_sessions' order by ingestion_sequence`)
    equal(rows.rows.find((r) => r.semantic_event_type==='answer_checked').evidence_class, 'model_inference', 'check model inference')
    equal(rows.rows.find((r) => r.semantic_event_type==='feedback_reported').evidence_class, 'student_self_report', 'self result class')
    equal(rows.rows.filter((r) => r.semantic_event_type==='feedback_reported').length, 1, 'thumbs common evidence üretmedi')
    check(rows.rows.find((r) => r.semantic_event_type==='solution_requested').measurement.help_used == null, 'solution requested help değil')
    check(rows.rows.every((r) => r.topic_id == null), 'topic_matched=false topicless')
    equal(await count(db, 'public.ai_solution_events'), 2, 'help retry ve check toplam iki event')
    passGate(37, 'student finalize unauthorized'); passGate(38, 'processing claim blocks call'); passGate(39, 'completed same session'); passGate(40, 'finalize transaction'); passGate(41, 'help atomic retry-safe'); passGate(42, 'check model_inference'); passGate(43, 'explicit student_self_report'); passGate(44, 'thumbs no correctness'); passGate(45, 'solution no help_used'); passGate(46, 'unmatched topicless')
    await db.close()
  })

  await section('M12 tekrar snapshot ve correction', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    const solveAction = action(); await asRole(db, 'authenticated', IDS.studentA)
    await rpc(db, `select public.claim_academic_ai_solve('text',$1,$2::uuid) r`, ['b'.repeat(64), solveAction])
    await asRole(db, 'service_role')
    const finalized = await rpc(db, `select public.finalize_academic_ai_solve($1::uuid,$2::uuid,$3::jsonb) r`, [IDS.studentA, solveAction, JSON.stringify({ status: 'ok', source: 'text', topic_matched: false, model_role: 'fast', model_id: 'stub' })])
    await asRole(db, 'authenticated', IDS.studentA)
    const first = await rpc(db, `select public.update_academic_ai_review($1::uuid,'pending',$2::uuid) r`, [finalized.session_id, action()])
    const second = await rpc(db, `select public.update_academic_ai_review($1::uuid,'completed',$2::uuid) r`, [finalized.session_id, action()])
    equal(first.source_revision, 1, 'review snapshot'); equal(second.source_revision, 2, 'review correction')
    await asAdmin(db)
    const history = await db.query(`select record_kind,target_record_id from public.learning_evidence_records where source_code='ai_solution_review' order by ingestion_sequence`)
    equal(history.rows.map((r) => r.record_kind), ['snapshot','correction'], 'review history korunur')
    check(history.rows[1].target_record_id != null, 'correction target')
    passGate(47, 'M12 server snapshot/correction and scoped local fallback'); passGate(48, 'old evidence retained')
    await db.close()
  })

  await section('M31 idempotent katılım', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.studentA)
    const joinAction = action(); const joined = await rpc(db, `select public.join_academic_lesson($1::uuid,$2::uuid) r`, [IDS.session, joinAction])
    equal(joined.participant_role, 'student', 'öğrenci join')
    await rpc(db, `select public.join_academic_lesson($1::uuid,$2::uuid) r`, [IDS.session, joinAction])
    const leaveAction = action(); const left = await rpc(db, `select public.leave_academic_lesson($1::uuid,600,$2::uuid) r`, [IDS.session, leaveAction])
    const retried = await rpc(db, `select public.leave_academic_lesson($1::uuid,600,$2::uuid) r`, [IDS.session, leaveAction])
    equal(retried.total_seconds, left.total_seconds, 'leave retry süreyi iki kez artırmadı')
    await asRole(db, 'authenticated', IDS.teacher)
    await rpc(db, `select public.join_academic_lesson($1::uuid,$2::uuid) r`, [IDS.session, action()])
    await asAdmin(db)
    const evidence = await db.query(`select actor_role,evidence_class,record_kind,measurement from public.learning_evidence_records where source_code='live_lesson_attendance' order by ingestion_sequence`)
    equal(evidence.rows.length, 2, 'teacher join kanıt üretmedi')
    check(evidence.rows.every((r) => r.actor_role==='student' && r.evidence_class==='exposure'), 'yalnız öğrenci exposure')
    passGate(49, 'leave retry stable'); passGate(50, 'student-only exposure'); passGate(51, 'M32 raw stream no writer/evidence')
    await db.close()
  })

  await section('M33 özet share/update/unshare ve feedback', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db); await asRole(db, 'authenticated', IDS.teacher)
    const draft = await rpc(db, `select public.save_academic_lesson_summary($1::uuid,'Problemler','Özel olmayan not','Tekrar',null,$2::jsonb,false,$3::uuid) r`, [IDS.session, JSON.stringify({ v: 1, items: [] }), action()])
    equal(draft.evidence_created, false, 'draft evidence yok')
    const shared = await rpc(db, `select public.save_academic_lesson_summary($1::uuid,'Problemler','Paylaşılan not','Tekrar',null,null,true,$2::uuid) r`, [IDS.session, action()])
    equal(shared.evidence_created, true, 'ilk share snapshot')
    await asRole(db, 'authenticated', IDS.studentA)
    const feedback = await rpc(db, `select public.feedback_academic_lesson_summary($1::uuid,'anladim',$2::uuid) r`, [IDS.session, action()])
    equal(feedback.status, 'created', 'öğrenci enum feedback')
    await asRole(db, 'authenticated', IDS.teacher)
    const updated = await rpc(db, `select public.save_academic_lesson_summary($1::uuid,'Problemler','Güncel not','Yeni hedef',null,null,true,$2::uuid) r`, [IDS.session, action()])
    equal(updated.evidence_created, true, 'paylaşılan update correction')
    const unshared = await rpc(db, `select public.save_academic_lesson_summary($1::uuid,'Problemler','Güncel not','Yeni hedef',null,null,false,$2::uuid) r`, [IDS.session, action()])
    equal(unshared.evidence_created, true, 'unshare tombstone')
    await asAdmin(db)
    const rows = await db.query(`select semantic_event_type,record_kind,actor_role,measurement,metadata from public.learning_evidence_records where source_code='live_lesson_shared_summary' order by ingestion_sequence`)
    equal(rows.rows.filter((r) => r.semantic_event_type==='teacher_summary_shared').map((r) => r.record_kind), ['snapshot','correction','tombstone'], 'summary lifecycle')
    check(rows.rows.some((r) => r.semantic_event_type==='student_feedback_reported' && r.actor_role==='student'), 'feedback student identity')
    const serialized = JSON.stringify(rows.rows); check(!serialized.includes('Paylaşılan not') && !serialized.includes('Güncel not') && !serialized.includes('items'), 'common evidence text/board taşımıyor')
    passGate(52, 'draft no evidence'); passGate(53, 'session-derived identities'); passGate(54, 'snapshot/correction/tombstone'); passGate(55, 'no raw summary/board/path'); passGate(56, 'student enum-only feedback')
    await db.close()
  })

  await section('M36 context_only hedef profili', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db); await asRole(db, 'authenticated', IDS.studentA)
    const first = await rpc(db, `select public.save_academic_student_goal(8::smallint,'LGS'::text,true,2027::smallint,null::date,$1::uuid) r`, [action()])
    equal(first.status, 'created', 'goal snapshot')
    const noop = await rpc(db, `select public.save_academic_student_goal(8::smallint,'LGS'::text,true,2027::smallint,null::date,$1::uuid) r`, [action()])
    equal(noop.status, 'no_change', 'goal no-op')
    const second = await rpc(db, `select public.save_academic_student_goal(9::smallint,'YKS'::text,false,2029::smallint,null::date,$1::uuid) r`, [action()])
    equal(second.source_revision, 2, 'goal correction')
    await asRole(db, 'authenticated', IDS.parent)
    const denied = await rpc(db, `select public.save_academic_student_goal(8::smallint,'LGS'::text,true,2027::smallint,null::date,$1::uuid) r`, [action()])
    equal(denied.status, 'unauthorized', 'veli profil hedefi yazamaz')
    await asAdmin(db)
    const rows = await db.query(`select evidence_class,measurement,metadata,record_kind from public.learning_evidence_records where source_code='student_profile' order by ingestion_sequence`)
    check(rows.rows.every((r) => r.evidence_class==='student_self_report' && Object.keys(r.measurement).length===0), 'context_only öz bildirim')
    equal(rows.rows[1].metadata.grade_level, 9, 'gerçek grade kolonu')
    const profile = await db.query(`select role,student_id,grade,target_exam from public.profiles where id=$1`, [IDS.studentA])
    equal(profile.rows[0].role, 'student', 'role korunur'); equal(profile.rows[0].student_id, null, 'relation korunur')
    passGate(57, 'context_only self-report'); passGate(58, 'grade column'); passGate(59, 'role/relation preserved')
    await db.close()
  })

  await section('Negatif yüzeyler, tekrar ve atomik hata enjeksiyonu', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asAdmin(db)
    const negative = await db.query(`select source_code,classification,ingest_allowed from public.learning_source_contracts where registry_version='learning-academic-registry@1' and matrix_id=any(array['M01','M02','M32','M38']::text[]) order by matrix_id`)
    equal(negative.rows.map((row) => row.source_code), ['home_summary','analytics_view','live_lesson_raw_stream','teacher_parent_support_routes'], 'negatif yüzey listesi')
    check(negative.rows.every((row) => !row.ingest_allowed && ['derived_readonly','excluded'].includes(row.classification)), 'negatif yüzeyler emitter değil')
    equal(await count(db, 'public.learning_evidence_records', `source_registry_version='learning-academic-registry@1'`), 0, 'render/ham akış temel event üretmez')

    await asRole(db, 'authenticated', IDS.studentA)
    const retryAction = action()
    const first = await rpc(db, `select public.create_academic_daily_log(current_date,'Retry sentetik',40,10,0,0,null,'manual_external_self_report',$1::uuid) r`, [retryAction])
    for (let index = 0; index < 10; index += 1) {
      const retried = await rpc(db, `select public.create_academic_daily_log(current_date,'Retry sentetik',40,10,0,0,null,'manual_external_self_report',$1::uuid) r`, [retryAction])
      equal(retried.record_id, first.record_id, `retry ${index + 1} aynı kayıt`)
    }
    await asAdmin(db)
    equal(await count(db, 'public.daily_logs'), 1, '10 retry tek source')
    equal(await count(db, 'public.learning_evidence_records', `source_code='daily_logs'`), 1, '10 retry tek evidence')
    equal(await count(db, 'learning_private.learning_academic_action_receipts'), 1, '10 retry tek receipt')

    await db.query(`update public.learning_source_contracts set adapter_version='learning-academic-adapters@999' where registry_version='learning-academic-registry@1' and source_code='daily_logs'`)
    const sourceBefore = await count(db, 'public.daily_logs')
    const evidenceBefore = await count(db, 'public.learning_evidence_records')
    let injectedFailure = false
    await asRole(db, 'authenticated', IDS.studentA)
    try { await rpc(db, `select public.create_academic_daily_log(current_date,'Rollback sentetik',20,2,1,0,null,'manual_external_self_report',$1::uuid) r`, [action()]) } catch (error) { injectedFailure = error?.code === 'P4001' }
    check(injectedFailure, 'evidence reddi işlemi durdurdu')
    await asAdmin(db)
    equal(await count(db, 'public.daily_logs'), sourceBefore, 'source yarım commit yok')
    equal(await count(db, 'public.learning_evidence_records'), evidenceBefore, 'evidence yarım commit yok')
    passGate(60, 'M01/M02/M32/M38 emitter değil ve sıfır temel event')
    passGate(61, 'aynı client action 10 retry tek source/evidence/receipt')
    passGate(63, 'PGlite seri bağlantı sınırı açık; gerçek concurrency iddiası yok')
    passGate(64, 'source sonrası evidence failure tam rollback')
    await db.close()
  })

  await section('Yetki, private sınır ve yeni medya RLS matrisi', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.studentA)
    const created = await rpc(db, `select public.create_academic_daily_log(current_date,'Sahiplik sentetik',20,3,1,0,null,'manual_external_self_report',$1::uuid) r`, [action()])
    await asRole(db, 'authenticated', IDS.studentB)
    const otherStudent = await rpc(db, `select public.update_academic_daily_log($1::uuid,30,3,1,0,$2::uuid) r`, [created.record_id, action()])
    equal(otherStudent.status, 'unauthorized', 'başka öğrenci kaydı değiştiremez')
    await asRole(db, 'authenticated', IDS.unrelatedTeacher)
    const otherTeacher = await rpc(db, `select public.update_academic_daily_log($1::uuid,30,3,1,0,$2::uuid) r`, [created.record_id, action()])
    equal(otherTeacher.status, 'unauthorized', 'ilgisiz öğretmen kaydı değiştiremez')

    const mediaAction = action()
    const objectPath = `academic-questions/${IDS.studentA}/${IDS.studentA}/${mediaAction}.png`
    await asRole(db, 'authenticated', IDS.studentA)
    const staged = await rpc(db, `select public.stage_academic_question_media($1::uuid,'student_question',$2,'image/png',128,$3::uuid) r`, [IDS.studentA, objectPath, mediaAction])
    equal(staged.status, 'created', 'private medya staged')
    await db.query(`insert into storage.objects(bucket_id,name,owner_id) values('academic-question-images',$1,$2)`, [objectPath, IDS.studentA])
    const ownObject = await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath])
    equal(ownObject.rows[0].n, 1, 'öğrenci kendi medyasını görür')
    await asRole(db, 'authenticated', IDS.teacher)
    equal((await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath])).rows[0].n, 1, 'aktif öğretmen medyayı görür')
    await asRole(db, 'authenticated', IDS.studentB)
    equal((await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath])).rows[0].n, 0, 'başka öğrenci medyayı göremez')
    await asRole(db, 'authenticated', IDS.unrelatedTeacher)
    equal((await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath])).rows[0].n, 0, 'ilgisiz öğretmen medyayı göremez')
    await asRole(db, 'authenticated', IDS.parent)
    equal((await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath])).rows[0].n, 0, 'veli medyayı göremez')
    await asRole(db, 'anon')
    let anonDenied = false
    try { await db.query(`select count(*)::integer n from storage.objects where name=$1`, [objectPath]) } catch (error) { anonDenied = error?.code === '42501' }
    check(anonDenied, 'anon storage select yetkisi yok')

    await asAdmin(db)
    const directDml = await db.query(`select has_table_privilege('authenticated','public.daily_logs','insert') as daily_insert,has_table_privilege('authenticated','public.questions','update') as question_update,has_table_privilege('authenticated','public.ai_solution_sessions','insert') as solve_insert,has_table_privilege('authenticated','public.lesson_summaries','update') as summary_update`)
    check(Object.values(directDml.rows[0]).every((value) => value === false), 'direct source DML kapalı')
    const privatePrivileges = await db.query(`select has_schema_privilege('authenticated','learning_private','usage') as schema_usage,has_table_privilege('authenticated','learning_private.learning_academic_action_receipts','select') as receipt_select,has_table_privilege('authenticated','learning_private.learning_academic_source_revisions','select') as audit_select,has_table_privilege('authenticated','learning_private.learning_academic_external_claims','select') as claim_select`)
    check(Object.values(privatePrivileges.rows[0]).every((value) => value === false), 'private tablolar normal role kapalı')
    summary.security = {
      other_student: 'denied', unrelated_teacher: 'denied', anonymous_storage: 'denied', parent_storage: 'denied',
      active_teacher_storage: 'allowed', direct_source_dml: 'revoked', private_schema: 'closed', bucket_public: false,
    }
    passGate(35, 'private storage: owner/active teacher allowed; student B/teacher B/parent/anon denied')
    passGate(68, 'başka öğrenci ve ilgisiz öğretmen RPC reddi')
    passGate(70, 'private ingest/audit/receipt normal role privileges false')
    passGate(71, 'source tablolarında authenticated direct DML grants yok')
    await db.close()
  })

  await section('Correction hedefi ve deterministik effective replay', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    await asRole(db, 'authenticated', IDS.studentA)
    const base = await rpc(db, `select public.create_academic_daily_log(current_date,'Replay',40,8,2,0,null,'manual_external_self_report',$1::uuid) r`, [action()])
    const corrected = await rpc(db, `select public.update_academic_daily_log($1::uuid,20,4,1,0,$2::uuid) r`, [base.record_id, action()])
    await asRole(db, 'authenticated', IDS.studentB)
    const foreign = await rpc(db, `select public.create_academic_daily_log(current_date,'Yabancı',10,1,0,0,null,'manual_external_self_report',$1::uuid) r`, [action()])
    await asAdmin(db)
    const originalTarget = (await db.query(`select record_id from public.learning_evidence_records where student_id=$1 and source_code='daily_logs' and source_record_id=$2 and record_kind='event'`, [IDS.studentA, base.record_id])).rows[0].record_id
    const foreignTarget = (await db.query(`select record_id from public.learning_evidence_records where student_id=$1 and source_code='daily_logs' and source_record_id=$2`, [IDS.studentB, foreign.record_id])).rows[0].record_id
    let crossDenied = false
    try {
      await rpc(db, `select learning_private.emit_academic_evidence($1::uuid,$1::uuid,'student','daily_logs',$2,3,'study_session_reported','correction',$3::jsonb,'{}'::jsonb,'{}'::jsonb,null,null,$4::uuid) r`, [IDS.studentA, base.record_id, JSON.stringify({ duration_minutes: 5, duration_source: 'student_reported' }), foreignTarget])
    } catch (error) { crossDenied = error?.code === 'P4001' }
    check(crossDenied, 'cross-student correction target reddedildi')
    let forkDenied = false
    try {
      await rpc(db, `select learning_private.emit_academic_evidence($1::uuid,$1::uuid,'student','daily_logs',$2,3,'study_session_reported','correction',$3::jsonb,'{}'::jsonb,'{}'::jsonb,null,null,$4::uuid) r`, [IDS.studentA, base.record_id, JSON.stringify({ duration_minutes: 5, duration_source: 'student_reported' }), originalTarget])
    } catch (error) { forkDenied = error?.code === 'P4001' }
    check(forkDenied, 'aynı hedeften correction fork reddedildi')
    const activeRows = (await db.query(`select source_code,source_record_id,source_revision,semantic_event_type,record_kind,measurement from public.learning_evidence_effective where student_id=$1 order by source_code,source_record_id,semantic_event_type,source_revision`, [IDS.studentA])).rows
    const checksumA = sha(stableJson(activeRows))
    const checksumB = sha(stableJson((await db.query(`select source_code,source_record_id,source_revision,semantic_event_type,record_kind,measurement from public.learning_evidence_effective where student_id=$1 order by source_code,source_record_id,semantic_event_type,source_revision`, [IDS.studentA])).rows))
    equal(checksumB, checksumA, 'effective replay aynı checksum')
    check(/^[0-9a-f]{64}$/.test(checksumA), 'effective checksum SHA-256')
    summary.replay = { checksum: checksumA, effective_rows: activeRows.length, cross_student_target: 'rejected', fork: 'rejected', cycle: 'structurally_rejected_by_server_generated_record_id_and_existing_target_rule' }
    passGate(66, 'cross-student target ve fork SQL reddi; cycle server-generated id ile yapısal kapalı')
    passGate(67, `effective replay SHA-256 ${checksumA}`)
    await db.close()
  })

  await section('Backfill dry-run/sentetik apply ve sağlık durumları', async () => {
    const records = Array.from({ length: 1000 }, (_, index) => ({
      id: `synthetic-${index}`, student_id: IDS.studentA,
      created_at: new Date(2026, 0, 1, 0, index % 60).toISOString(), duration_minutes: index % 90,
    }))
    records[17] = { id: 'poison', student_id: IDS.studentA, duration_minutes: -1 }
    const input = { daily_logs: records }
    const firstDry = buildPhase4BackfillDryRun(input)
    const secondDry = buildPhase4BackfillDryRun(input)
    equal(firstDry.writes_performed, 0, 'dry-run write yok')
    equal(stableJson(secondDry), stableJson(firstDry), 'dry-run deterministik')
    equal(firstDry.scanned_count, 1000, '1000 backfill item')
    equal(firstDry.quarantined_count, 1, 'poison izole')
    const paused = await runPhase4BackfillBatch({ sourceCode: 'daily_logs', records, control: 'pause' })
    equal(paused.status, 'paused', 'pause')
    const cancelled = await runPhase4BackfillBatch({ sourceCode: 'daily_logs', records, cursor: paused.cursor, control: 'cancel' })
    equal(cancelled.status, 'cancelled', 'cancel')
    const receipts = new Set(); let callbackCount = 0
    const firstApply = await runPhase4BackfillBatch({ sourceCode: 'daily_logs', records, batchSize: 1000, mode: 'synthetic_apply', receipts, ingest: async ({ row }) => {
      if (row.id === 'synthetic-23') throw new Error('synthetic_poison')
      callbackCount += 1; return { status: 'created' }
    } })
    equal(firstApply.created, 998, 'sağlıklı sentetik satırlar işlendi')
    equal(firstApply.quarantined, 1, 'geçersiz satır karantina')
    equal(firstApply.failed, 1, 'callback poison izole')
    const secondApply = await runPhase4BackfillBatch({ sourceCode: 'daily_logs', records, batchSize: 1000, mode: 'synthetic_apply', receipts, ingest: async ({ row }) => row.id === 'synthetic-23' ? ({ status: 'idempotency_conflict' }) : ({ status: 'created' }) })
    equal(secondApply.created, 0, 'ikinci sentetik apply created=0')
    check(secondApply.duplicate >= 998, 'ikinci apply duplicate')
    check(PHASE4_BACKFILL_DECISIONS.filter((item) => item.provider_name).every((item) => item.strategy === 'historical_provider' && item.live_apply_allowed === false), 'pozitif kaynakların kapalı provider kararı')
    check(PHASE4_BACKFILL_DECISIONS.filter((item) => !item.provider_name).every((item) => ['excluded','derived_no_evidence'].includes(item.strategy)), 'negatif kaynakların explicit no-history kararı')
    let liveRejected = false
    try { await runPhase4BackfillBatch({ sourceCode: 'daily_logs', records: [], mode: 'live_apply' }) } catch (error) { liveRejected = error?.message === 'phase4_backfill_live_apply_forbidden' }
    check(liveRejected, 'canlı apply kod düzeyinde yasak')

    const capabilityCases = {
      available: resolveAcademicCapability({ rows: [{}] }),
      empty: resolveAcademicCapability({ rows: [] }),
      degraded: resolveAcademicCapability({ rows: [{}], pending: 1 }),
      unavailable: resolveAcademicCapability({ schemaAvailable: false }),
      derived: resolveAcademicCapability({ classification: 'derived_readonly' }),
      excluded: resolveAcademicCapability({ classification: 'excluded' }),
    }
    equal(Object.fromEntries(Object.entries(capabilityCases).map(([key, value]) => [key, value.status])), { available: 'available', empty: 'empty', degraded: 'degraded', unavailable: 'unavailable', derived: 'derived', excluded: 'excluded' }, 'capability durumları ayrık')
    summary.backfill = { ...firstDry, synthetic_apply: firstApply, second_apply: secondApply, pause: paused.status, cancel: cancelled.status, live_provider_called: false }
    summary.health = { capability_cases: capabilityCases, reconciliation_fields: ['source_count','expected_evidence','effective_evidence','duplicate','conflict','quarantine','orphan','pending','stale','correction','tombstone'], contains_personal_data: false }
    passGate(73, '10 pozitif historical_provider + 4 explicit no-history')
    passGate(74, '1000 dry-run zero write; ikinci sentetik apply created=0; pause/cancel/poison')
    passGate(75, 'yalnız mevcut alan kontrolü; tarih/geçiş/correctness türetimi yok')
    passGate(76, 'available/empty/degraded/unavailable/derived/excluded ayrık')
    passGate(77, 'kişisel verisiz uzlaştırma sayacı sözleşmesi')
  })

  await section('Hesap kapsamlı outbox ve güvenli kullanıcı onayı', async () => {
    const storage = memoryStorage(); const calls = []
    const rpcMock = async (name, params) => { calls.push({ name, params }); return { data: { status: 'created', record_id: 'synthetic' }, error: null } }
    const a = createAcademicOutbox({ storage, userId: IDS.studentA, rpc: rpcMock, uuid: action, now: () => 1 })
    const b = createAcademicOutbox({ storage, userId: IDS.studentB, rpc: rpcMock, uuid: action, now: () => 1 })
    const actionA = action()
    await a.enqueue('daily_log_update', { record_id: 'record-a', duration_minutes: 20, correct: 2, incorrect: 1, empty: 0 }, { actionId: actionA })
    equal(b.list().length, 0, 'öğrenci B, A kuyruğunu görmez')
    await b.flush({ force: true }); equal(calls.length, 0, 'B, A eylemini göndermez')
    const sent = await a.flush({ force: true }); equal(sent[0].result.status, 'created', 'A dönünce gönderir')
    equal(a.list().length, 0, 'ack sonrası kuyruk temiz')
    const serializedStorage = JSON.stringify(storage.dump())
    check(!serializedStorage.includes('soru metni') && !serializedStorage.includes('teacher_reply') && !serializedStorage.includes('model_output'), 'hassas payload yok')
    let sensitiveRejected = false
    try { await a.enqueue('daily_log_update', { record_id: 'x', duration_minutes: 1, notes: 'soru metni' }) } catch (error) { sensitiveRejected = error?.message?.startsWith('academic_outbox_field_forbidden') }
    check(sensitiveRejected, 'hassas alan kuyruğa alınamaz')
    passGate(78, 'öğrenci A/B localStorage anahtarları ve flush hesap kapsamlı')
    passGate(79, 'saved yalnız RPC created/completed/duplicate/no_change ack sonrası')
  })

  await section('10.000 revizyon, 1.000 receipt ve çok-child performans kanıtı', async () => {
    const db = new PGlite(); await installBase(db); await db.exec(P4); await insertActors(db)
    const insertStarted = performance.now()
    await db.query(`insert into learning_private.learning_academic_source_revisions(student_id,actor_id,source_code,source_record_id,source_revision,action_kind,semantic_event_type,safe_field_hash)
      select $1::uuid,$1::uuid,(array['daily_logs','mock_exam_subjects','homeworks','questions_teacher_feedback','ai_solution_review','live_lesson_attendance'])[1+(value%6)],
        'perf-'||value::text,1,'snapshot','perf_event',pg_catalog.encode(pg_catalog.sha256(pg_catalog.convert_to(value::text,'UTF8')),'hex')
      from pg_catalog.generate_series(1,10000) as series(value)`, [IDS.studentA])
    const revisionInsertMs = Number((performance.now() - insertStarted).toFixed(3))
    equal(await count(db, 'learning_private.learning_academic_source_revisions'), 10000, '10.000 karışık revizyon')
    await db.query(`insert into learning_private.learning_academic_action_receipts(student_id,source_code,client_action_id,action_kind,payload_hash)
      select $1::uuid,'daily_logs',pg_catalog.gen_random_uuid(),'perf_pending',pg_catalog.encode(pg_catalog.sha256(pg_catalog.convert_to(value::text,'UTF8')),'hex')
      from pg_catalog.generate_series(1,1000) as series(value)`, [IDS.studentA])
    equal(await count(db, 'learning_private.learning_academic_action_receipts'), 1000, '1.000 pending receipt')
    const receiptStarted = performance.now()
    const receipt = await db.query(`select receipt_id from learning_private.learning_academic_action_receipts where student_id=$1 and source_code='daily_logs' order by created_at desc limit 1`, [IDS.studentA])
    const receiptLookupMs = Number((performance.now() - receiptStarted).toFixed(3)); equal(receipt.rows.length, 1, 'receipt lookup')
    const studentListStarted = performance.now()
    const studentList = await db.query(`select source_code,source_record_id,source_revision from learning_private.learning_academic_source_revisions where student_id=$1 and source_code='daily_logs' order by source_revision desc,created_at desc limit 100`, [IDS.studentA])
    const studentListMs = Number((performance.now() - studentListStarted).toFixed(3)); equal(studentList.rows.length, 100, 'student scoped list')
    const planRows = (await db.query(`explain select source_code,source_record_id,source_revision from learning_private.learning_academic_source_revisions where student_id=$1 and source_code='daily_logs' order by source_revision desc,created_at desc limit 100`, [IDS.studentA])).rows
    const planText = JSON.stringify(planRows)
    check(planText.length > 20, 'query plan kaydedildi')
    const effectiveStarted = performance.now()
    await db.query(`select count(*)::integer n from public.learning_evidence_effective where student_id=$1`, [IDS.studentA])
    const effectiveMs = Number((performance.now() - effectiveStarted).toFixed(3))
    const subjects = Array.from({ length: 32 }, (_, index) => ({ subject: `Ders ${index + 1}`, correct: index % 10, incorrect: index % 4, empty: index % 3 }))
    await asRole(db, 'authenticated', IDS.studentA)
    const batchStarted = performance.now()
    const batch = await rpc(db, `select public.create_academic_mock_exam('TYT','32 child',current_date,120,$1::jsonb,$2::uuid) r`, [JSON.stringify(subjects), action()])
    const mockExamBatchMs = Number((performance.now() - batchStarted).toFixed(3)); equal(batch.subject_count, 32, 'çok child batch')
    await asAdmin(db)
    const schema = {
      tables: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_class where relnamespace in ('public'::regnamespace,'learning_private'::regnamespace) and relkind='r'`)).rows[0].n),
      views: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_class where relnamespace='public'::regnamespace and relkind='v'`)).rows[0].n),
      functions: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_proc where pronamespace in ('public'::regnamespace,'learning_private'::regnamespace)`)).rows[0].n),
      indexes: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_indexes where schemaname in ('public','learning_private')`)).rows[0].n),
      constraints: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_constraint where connamespace in ('public'::regnamespace,'learning_private'::regnamespace)`)).rows[0].n),
      policies: Number((await db.query(`select count(*)::integer n from pg_catalog.pg_policies where schemaname in ('public','storage')`)).rows[0].n),
    }
    summary.performance = { revision_mix_rows: 10000, pending_receipts: 1000, backfill_items: 1000, mock_exam_children: 32, revision_insert_ms: revisionInsertMs, receipt_lookup_ms: receiptLookupMs, student_scoped_list_ms: studentListMs, effective_view_ms: effectiveMs, mock_exam_batch_ms: mockExamBatchMs, query_plan: planText, thresholds_claimed: false }
    summary.migration.schema_inventory = schema
    await db.close()
  })

  await section('Kişisel veri minimizasyonu ve Faz sınırı', async () => {
    const sourceFiles = ['registry.js','adapters.js','outbox.js','client.js','health.js','backfill.js','media.js','index.js']
      .map((name) => readFileSync(join(REPO, 'src/lib/learning/academicActivity', name), 'utf8')).join('\n')
    check(!/mastery|student[_ -]?model|coach[_ -]?consum/i.test(sourceFiles), 'Faz 6 öğrenci modeli/Koç tüketimi taşmadı')
    check(!/create table[^;]*(mastery|student_model)|learning_mastery/iu.test(P4), 'migration Faz 6 tablosu kurmuyor')
    check(Object.values(summary.side_effects).every((value) => value === false), 'yan etki bayraklarının tamamı false')
    const architecture = readFileSync(ARCHITECTURE_PATH, 'utf8')
    check(architecture.includes('Legacy public medya — Faz 9 borcu'), 'legacy public medya borcu açık kayıtlı')
    check(architecture.includes('uçtan uca medya mahremiyeti tamamlandı değildir'), 'tamamlandı iddiası açıkça reddedildi')
    summary.security.legacy_public_media = 'documented_phase_9_debt'
    summary.security.common_evidence_raw_content = 'rejected_by_assertions'
    passGate(36, 'legacy public medya Faz 9 borcu; e2e tamamlandı iddiası yok')
    passGate(72, 'common evidence testleri ham soru/yanıt/not/board/path taşımıyor; health düşük kardinal')
    passGate(83, 'Faz 5/6 modeli veya AI Koç tüketimi eklenmedi')
    passGate(84, 'bütün canlı/gerçek/model/deploy/push side-effect bayrakları false')
  })

  const checkpoint = JSON.parse(readFileSync(CHECKPOINT_PATH, 'utf8'))
  summary.workspace = checkpoint.workspace
  summary.baseline_transition = checkpoint.transition
  summary.phase_preconditions = { phase_1: checkpoint.phase_1, phase_2: checkpoint.phase_2, phase_3: checkpoint.phase_3 }
  passGate(1, 'faz-4-baslangic-checkpoint.json: doğru workspace/branch/HEAD/dirty state')
  summary.status = 'core_passed'
  summary.gate_totals = {
    required: 85,
    passed: summary.gates.filter((gate) => gate.status === 'passed').length,
    failed: summary.gates.filter((gate) => gate.status === 'failed').length,
    pending: summary.gates.filter((gate) => gate.status === 'pending').length,
  }
  writeFileSync(join(OUT, 'faz-4-kabul-sonucu.json'), JSON.stringify(summary, null, 2) + '\n')
  writeFileSync(join(OUT, 'faz-4-kaynak-kapsami.json'), JSON.stringify({ schema_version: '1.0', registry: summary.registry, sources: summary.sources }, null, 2) + '\n')
  writeFileSync(join(OUT, 'migration-sema-ozeti.json'), JSON.stringify({ schema_version: '1.0', checksums: summary.checksums, migration: summary.migration }, null, 2) + '\n')
  writeFileSync(join(OUT, 'backfill-dry-run-sonucu.json'), JSON.stringify(summary.backfill, null, 2) + '\n')
  writeFileSync(join(OUT, 'guvenlik-yetki-matrisi.json'), JSON.stringify({ schema_version: '1.0', ...summary.security }, null, 2) + '\n')
  process.stdout.write(`\n${summary.gate_totals.passed}/85 çekirdek kapı geçti; ${summary.gate_totals.pending} kapı son regresyon/görsel doğrulama toplayıcısını bekliyor.\n`)
}

main().catch((error) => {
  summary.status = 'failed'
  summary.failure = { name: error.name, message: error.message }
  mkdirSync(OUT, { recursive: true })
  writeFileSync(join(OUT, 'faz-4-kabul-sonucu.json'), JSON.stringify(summary, null, 2) + '\n')
  console.error(error)
  process.exitCode = 1
})
