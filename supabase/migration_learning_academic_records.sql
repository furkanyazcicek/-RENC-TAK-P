-- ============================================================================
-- DRKOÇ AI Koç — Faz 4 / Ana akademik kayıtların güvenli veri ağı
-- Faz 2 ve Faz 3 migration'larından sonra uygulanır. Canlı veri taramaz,
-- backfill veya seed çalıştırmaz. Eski migration dosyalarını değiştirmez.
-- ============================================================================

begin;

-- Faz 1 sicilini yerinde değiştirmeden yalnız Faz 4 kaynaklarını izdüşür.
insert into public.learning_source_contracts (
  registry_version, source_code, matrix_id, classification, ingest_allowed,
  contract_version, data_class, module_owner, authority, source_record_key,
  record_kinds, semantic_event_types, evidence_class_by_event,
  default_evidence_class, allowed_measurements, allowed_metadata,
  identity_scope, adapter_name, adapter_version, resolver_name,
  resolver_version, trust_authority, actor_student_relation,
  mutation_semantics, source_locator_policy, retention_class, decision_status
)
select
  'learning-academic-registry@1', base.source_code, base.matrix_id,
  base.classification, base.ingest_allowed, base.contract_version,
  base.data_class, base.module_owner,
  case base.source_code
    when 'ai_solution_sessions' then 'student_and_narrow_model_server'
    when 'live_lesson_attendance' then 'verified_lesson_membership'
    else base.authority end,
  case base.source_code
    when 'daily_logs' then 'daily_logs.id + academic_revision'
    when 'mock_exam_subjects' then 'mock_exams.id + mock_exam_subjects.id + academic_revision'
    when 'branch_exams' then 'exams.id + academic_revision'
    when 'homeworks' then 'homeworks.id + academic_revision'
    when 'questions_teacher_feedback' then 'questions.id + academic_revision'
    when 'ai_solution_sessions' then 'ai_solution_sessions.id + ai_solution_events.id'
    when 'ai_solution_review' then 'ai_solution_sessions.id + review_revision'
    when 'live_lesson_attendance' then 'lesson_session_id + participant id + attendance_revision'
    when 'live_lesson_shared_summary' then 'lesson_summaries.lesson_session_id + academic_revision'
    when 'student_profile' then 'profiles.id + academic_goal_revision'
    else base.source_record_key end,
  case base.source_code
    when 'live_lesson_attendance' then array['snapshot', 'correction']::text[]
    else base.record_kinds end,
  case base.source_code
    when 'mock_exam_subjects' then array['mock_exam_session_reported', 'mock_exam_subject_result_reported']::text[]
    when 'branch_exams' then array['branch_exam_result_reported', 'branch_exam_result_entered_by_teacher']::text[]
    when 'questions_teacher_feedback' then array['question_submitted', 'teacher_feedback_shared', 'teacher_problem_question_shared']::text[]
    when 'ai_solution_sessions' then array['solution_requested', 'help_requested', 'answer_checked', 'feedback_reported']::text[]
    else base.semantic_event_types end,
  case base.source_code
    when 'mock_exam_subjects' then '{"mock_exam_session_reported":"student_self_report","mock_exam_subject_result_reported":"student_self_report"}'::jsonb
    when 'branch_exams' then '{"branch_exam_result_entered_by_teacher":"teacher_feedback","branch_exam_result_reported":"student_self_report"}'::jsonb
    when 'questions_teacher_feedback' then '{"question_submitted":"exposure","teacher_feedback_shared":"teacher_feedback","teacher_problem_question_shared":"teacher_feedback"}'::jsonb
    when 'ai_solution_sessions' then '{"solution_requested":"exposure","help_requested":"system_observation","answer_checked":"model_inference","feedback_reported":"student_self_report"}'::jsonb
    else base.evidence_class_by_event end,
  base.default_evidence_class,
  base.allowed_measurements,
  case base.source_code
    when 'branch_exams' then array['exam_name', 'legacy_score_present', 'exam_scope']::text[]
    when 'questions_teacher_feedback' then array['status', 'reply_present', 'image_present', 'canvas_present', 'origin']::text[]
    else base.allowed_metadata end,
  base.identity_scope,
  case when base.ingest_allowed then case base.source_code
    when 'daily_logs' then 'adaptAcademicDailyLog'
    when 'mock_exam_subjects' then 'adaptAcademicMockExam'
    when 'branch_exams' then 'adaptAcademicBranchExam'
    when 'homeworks' then 'adaptAcademicHomework'
    when 'questions_teacher_feedback' then 'adaptAcademicQuestion'
    when 'ai_solution_sessions' then 'adaptAcademicAiSolve'
    when 'ai_solution_review' then 'adaptAcademicAiReview'
    when 'live_lesson_attendance' then 'adaptAcademicAttendance'
    when 'live_lesson_shared_summary' then 'adaptAcademicLessonSummary'
    when 'student_profile' then 'adaptAcademicProfile'
  end else null end,
  case when base.ingest_allowed then 'learning-academic-adapters@1' else null end,
  base.resolver_name, base.resolver_version,
  base.trust_authority, base.actor_student_relation,
  case base.source_code
    when 'daily_logs' then 'revisioned_with_tombstone'
    when 'mock_exam_subjects' then 'atomic_parent_children_with_tombstone'
    when 'branch_exams' then 'revisioned_with_tombstone'
    when 'homeworks' then 'assignment_event_and_student_status_snapshot'
    when 'questions_teacher_feedback' then 'bidirectional_question_with_feedback_snapshot'
    when 'ai_solution_sessions' then 'durable_external_claim_and_atomic_finalize'
    when 'ai_solution_review' then 'user_scoped_snapshot'
    when 'live_lesson_attendance' then 'student_only_idempotent_duration_snapshot'
    when 'live_lesson_shared_summary' then 'shared_snapshot_with_unshare_tombstone'
    when 'student_profile' then 'goal_fields_only_snapshot'
    else base.mutation_semantics end,
  base.source_locator_policy, base.retention_class,
  case when base.classification = 'derived_readonly' then 'local_derived_confirmed'
       when base.classification = 'excluded' then 'local_exclusion_confirmed'
       else 'locally_implemented_live_not_applied' end
from public.learning_source_contracts as base
where base.registry_version = 'learning-source-registry@1'
  and base.matrix_id = any(array['M01','M02','M03','M04','M05','M06','M07','M11','M12','M31','M32','M33','M36','M38']::text[])
on conflict (registry_version, source_code) do nothing;

-- Alan tablolarında monoton, timestamp'ten bağımsız kaynak sürümleri.
alter table public.daily_logs add column if not exists academic_revision bigint not null default 0;
alter table public.mock_exams add column if not exists academic_revision bigint not null default 0;
alter table public.mock_exams add column if not exists duration_minutes integer;
alter table public.mock_exam_subjects add column if not exists academic_revision bigint not null default 0;
alter table public.exams add column if not exists academic_revision bigint not null default 0;
alter table public.exams add column if not exists exam_type text;
alter table public.exams add column if not exists duration_minutes integer;
alter table public.homeworks add column if not exists academic_revision bigint not null default 0;
alter table public.questions add column if not exists academic_revision bigint not null default 0;
alter table public.questions add column if not exists teacher_reply text;
alter table public.questions add column if not exists teacher_reply_image_url text;
alter table public.questions add column if not exists teacher_reply_strokes jsonb;
alter table public.questions add column if not exists origin text not null default 'legacy_unknown';
alter table public.questions add column if not exists assigned_by uuid references public.profiles(id) on delete set null;
alter table public.questions add column if not exists image_path text;
alter table public.questions add column if not exists teacher_reply_image_path text;
alter table public.ai_solution_sessions add column if not exists academic_request_id uuid;
alter table public.ai_solution_sessions add column if not exists academic_revision bigint not null default 0;
alter table public.ai_solution_sessions add column if not exists review_revision bigint not null default 0;
alter table public.lesson_participants add column if not exists attendance_revision bigint not null default 0;
alter table public.lesson_summaries add column if not exists academic_revision bigint not null default 0;
alter table public.profiles add column if not exists grade smallint;
alter table public.profiles add column if not exists target_exam text;
alter table public.profiles add column if not exists exam_year smallint;
alter table public.profiles add column if not exists is_exam_year boolean;
alter table public.profiles add column if not exists exam_date date;
alter table public.profiles add column if not exists exam_profile_updated_at timestamptz;
alter table public.profiles add column if not exists academic_goal_revision bigint not null default 0;

do $do$
begin
  if not exists (select 1 from pg_catalog.pg_constraint where conname = 'questions_origin_check' and conrelid = 'public.questions'::pg_catalog.regclass) then
    alter table public.questions add constraint questions_origin_check
      check (origin in ('student_submitted', 'teacher_shared', 'legacy_unknown'));
  end if;
end
$do$;

create unique index if not exists ai_solution_sessions_academic_request_uq
  on public.ai_solution_sessions (student_id, academic_request_id)
  where academic_request_id is not null;

-- İşlem fişi ve denetim kaydı private alandadır; ham içerik saklamaz.
create table if not exists learning_private.learning_academic_action_receipts (
  receipt_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_registry_version text not null default 'learning-academic-registry@1',
  source_code text not null,
  client_action_id uuid not null,
  action_kind text not null,
  payload_hash text not null,
  status text not null default 'processing',
  source_record_id text,
  safe_result jsonb,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  constraint learning_academic_receipt_uq unique (student_id, source_code, client_action_id),
  constraint learning_academic_receipt_source_fk foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_academic_receipt_registry_check check (source_registry_version = 'learning-academic-registry@1'),
  constraint learning_academic_receipt_hash_check check (payload_hash ~ '^[0-9a-f]{64}$'),
  constraint learning_academic_receipt_action_check check (action_kind ~ '^[a-z][a-z0-9_]{1,63}$'),
  constraint learning_academic_receipt_status_check check (status in ('processing', 'completed', 'failed')),
  constraint learning_academic_receipt_safe_result_check check (safe_result is null or (pg_catalog.jsonb_typeof(safe_result) = 'object' and pg_catalog.octet_length(safe_result::text) <= 4096))
);

create index if not exists learning_academic_receipt_student_idx
  on learning_private.learning_academic_action_receipts (student_id, created_at desc);
create index if not exists learning_academic_receipt_pending_idx
  on learning_private.learning_academic_action_receipts (status, updated_at)
  where status = 'processing';

create table if not exists learning_private.learning_academic_source_revisions (
  audit_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  actor_id uuid references auth.users(id) on delete set null,
  source_code text not null,
  source_record_id text not null,
  source_revision bigint not null,
  action_kind text not null,
  semantic_event_type text not null,
  safe_field_hash text not null,
  evidence_record_id uuid references public.learning_evidence_records(record_id) on delete set null,
  target_evidence_record_id uuid references public.learning_evidence_records(record_id) on delete set null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_academic_audit_uq unique (student_id, source_code, source_record_id, source_revision, semantic_event_type),
  constraint learning_academic_audit_revision_check check (source_revision > 0),
  constraint learning_academic_audit_hash_check check (safe_field_hash ~ '^[0-9a-f]{64}$')
);

create index if not exists learning_academic_audit_source_idx
  on learning_private.learning_academic_source_revisions (student_id, source_code, source_record_id, source_revision desc);

create table if not exists learning_private.learning_academic_external_claims (
  claim_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  client_action_id uuid not null,
  request_hash text not null,
  status text not null default 'processing',
  session_id uuid references public.ai_solution_sessions(id) on delete set null,
  result_status text,
  claimed_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  constraint learning_academic_external_claim_uq unique (student_id, client_action_id),
  constraint learning_academic_external_claim_hash_check check (request_hash ~ '^[0-9a-f]{64}$'),
  constraint learning_academic_external_claim_status_check check (status in ('processing', 'completed', 'failed', 'stale'))
);

create index if not exists learning_academic_external_stale_idx
  on learning_private.learning_academic_external_claims (status, updated_at)
  where status = 'processing';

-- Yeni soru medyası private kovada staged/finalized yaşam döngüsüyle izlenir.
create table if not exists public.learning_academic_media (
  media_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  actor_id uuid not null references public.profiles(id) on delete cascade,
  question_id uuid references public.questions(id) on delete cascade,
  client_action_id uuid not null,
  object_path text not null,
  media_kind text not null,
  status text not null default 'staged',
  content_type text not null,
  byte_size integer not null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  finalized_at timestamptz,
  constraint learning_academic_media_path_uq unique (object_path),
  constraint learning_academic_media_action_uq unique (actor_id, client_action_id, media_kind),
  constraint learning_academic_media_kind_check check (media_kind in ('student_question', 'teacher_reply', 'teacher_canvas')),
  constraint learning_academic_media_status_check check (status in ('staged', 'finalized', 'orphaned')),
  constraint learning_academic_media_content_check check (content_type in ('image/jpeg', 'image/png', 'image/webp') and byte_size between 1 and 10485760),
  constraint learning_academic_media_path_check check (object_path ~ '^academic-questions/[0-9a-f-]{36}/[0-9a-f-]{36}/[0-9a-f-]{36}\.(jpg|jpeg|png|webp)$')
);

create index if not exists learning_academic_media_student_idx
  on public.learning_academic_media (student_id, status, created_at desc);

-- Salt düşük kardinaliteli, kişisel verisiz capability/uzlaştırma özeti.
create or replace view public.learning_academic_source_health
with (security_invoker = true, security_barrier = true)
as
select contract.matrix_id, contract.source_code, contract.classification,
       contract.decision_status,
       case when contract.classification = 'excluded' then 'excluded'
            when contract.classification = 'derived_readonly' then 'derived'
            when pending.pending_count > 0 then 'degraded'
            else 'available' end as capability_status,
       coalesce(pending.pending_count, 0)::bigint as pending_receipt_count,
       coalesce(evidence.evidence_count, 0)::bigint as evidence_count
  from public.learning_source_contracts as contract
  left join (
    select source_code, pg_catalog.count(*) as pending_count
      from learning_private.learning_academic_action_receipts
     where status = 'processing' group by source_code
  ) as pending on pending.source_code = contract.source_code
  left join (
    select source_code, pg_catalog.count(*) as evidence_count
      from public.learning_evidence_records
     where source_registry_version = 'learning-academic-registry@1'
     group by source_code
  ) as evidence on evidence.source_code = contract.source_code
 where contract.registry_version = 'learning-academic-registry@1';

-- Canonical JSON hash; sıralı jsonb metni aynı anlamda aynı sonucu verir.
create or replace function learning_private.academic_sha256(p_value jsonb)
returns text language sql immutable set search_path = '' as $fn$
  select pg_catalog.encode(pg_catalog.sha256(pg_catalog.convert_to(p_value::text, 'UTF8')), 'hex');
$fn$;

create or replace function learning_private.academic_current_actor()
returns table (actor_id uuid, actor_role text)
language sql stable security definer set search_path = '' as $fn$
  select profile.id, profile.role
    from public.profiles as profile
   where profile.id = auth.uid();
$fn$;

create or replace function learning_private.academic_teacher_authorized(p_teacher uuid, p_student uuid)
returns boolean language sql stable security definer set search_path = '' as $fn$
  select p_teacher is not null and p_student is not null and exists (
    select 1 from public.teacher_students as link
     where link.teacher_id = p_teacher and link.student_id = p_student and link.status = 'active'
  );
$fn$;

create or replace function learning_private.claim_academic_action(
  p_student_id uuid, p_source_code text, p_client_action_id uuid,
  p_action_kind text, p_payload jsonb
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_hash text;
  v_id uuid;
  v_receipt learning_private.learning_academic_action_receipts%rowtype;
begin
  if p_student_id is null or p_client_action_id is null
     or p_action_kind !~ '^[a-z][a-z0-9_]{1,63}$'
     or p_payload is null or pg_catalog.jsonb_typeof(p_payload) <> 'object' then
    return '{"claim_status":"validation_rejected"}'::jsonb;
  end if;
  v_hash := learning_private.academic_sha256(p_payload);
  insert into learning_private.learning_academic_action_receipts (
    student_id, source_code, client_action_id, action_kind, payload_hash
  ) values (p_student_id, p_source_code, p_client_action_id, p_action_kind, v_hash)
  on conflict (student_id, source_code, client_action_id) do nothing
  returning receipt_id into v_id;
  if v_id is not null then
    return pg_catalog.jsonb_build_object('claim_status', 'claimed', 'receipt_id', v_id, 'payload_hash', v_hash);
  end if;
  select receipt.* into v_receipt
    from learning_private.learning_academic_action_receipts as receipt
   where receipt.student_id = p_student_id and receipt.source_code = p_source_code
     and receipt.client_action_id = p_client_action_id for update;
  if v_receipt.payload_hash is distinct from v_hash or v_receipt.action_kind is distinct from p_action_kind then
    return '{"claim_status":"idempotency_conflict"}'::jsonb;
  end if;
  if v_receipt.status = 'completed' then
    return pg_catalog.jsonb_build_object('claim_status', 'duplicate', 'result', v_receipt.safe_result);
  end if;
  return '{"claim_status":"processing"}'::jsonb;
end;
$fn$;

-- M06 — atama öğretmen olayı, durum ise yalnız öğrenci snapshot'ıdır.
create or replace function public.assign_academic_homework(
  p_student_id uuid, p_title text, p_description text, p_due_date date,
  p_lesson_session_id uuid, p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_role text; v_id uuid:=pg_catalog.gen_random_uuid();
  v_claim jsonb; v_early jsonb; v_evidence jsonb; v_result jsonb;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_teacher;
  if v_role<>'teacher' or not learning_private.academic_teacher_authorized(v_teacher,p_student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if nullif(pg_catalog.btrim(coalesce(p_title,'')),'') is null or pg_catalog.char_length(p_title)>240 then return '{"status":"validation_rejected"}'::jsonb; end if;
  if p_lesson_session_id is not null and not exists(select 1 from public.lesson_sessions as session where session.id=p_lesson_session_id and session.teacher_id=v_teacher and session.student_id=p_student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(p_student_id,'homeworks',p_client_action_id,'homework_assign',
    pg_catalog.jsonb_build_object('student',p_student_id,'title',p_title,'description',p_description,'due_date',p_due_date,'session',p_lesson_session_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.homeworks(id,student_id,teacher_id,title,description,due_date,status,lesson_session_id,academic_revision)
  values(v_id,p_student_id,v_teacher,pg_catalog.btrim(p_title),nullif(pg_catalog.btrim(coalesce(p_description,'')),''),p_due_date,'Yapılıyor',p_lesson_session_id,1);
  v_evidence:=learning_private.emit_academic_evidence(p_student_id,v_teacher,'teacher','homeworks',v_id::text,1,'homework_assigned','event','{}'::jsonb,
    pg_catalog.jsonb_build_object('due_date_present',p_due_date is not null,'lesson_session_present',p_lesson_session_id is not null),
    pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('homework_id',v_id::text,'session_id',p_lesson_session_id::text)));
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_id,'source_revision',1);
  return learning_private.complete_academic_action(p_student_id,'homeworks',p_client_action_id,v_id::text,v_result);
end;
$fn$;

create or replace function public.update_academic_homework_status(p_record_id uuid,p_status text,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_row public.homeworks%rowtype; v_claim jsonb; v_early jsonb;
  v_revision bigint; v_target uuid; v_kind text:='snapshot'; v_evidence jsonb; v_result jsonb;
begin
  select * into v_row from public.homeworks where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_student<>v_row.student_id then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_status<>all(array['Yapılıyor','Tamamlandı']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_row.status=p_status then return pg_catalog.jsonb_build_object('status','no_change','record_id',p_record_id,'source_revision',v_row.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_student,'homeworks',p_client_action_id,'homework_status',pg_catalog.jsonb_build_object('record_id',p_record_id,'status',p_status));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_revision+1;
  v_target:=learning_private.academic_active_evidence(v_student,'homeworks',p_record_id::text,'homework_status_reported');
  if v_target is not null then v_kind:='correction'; end if;
  update public.homeworks set status=p_status,academic_revision=v_revision where id=p_record_id;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','homeworks',p_record_id::text,v_revision,'homework_status_reported',v_kind,
    pg_catalog.jsonb_build_object('completion_status',case when p_status='Tamamlandı' then 'completed' else 'in_progress' end,'completion_source','student_reported'),
    pg_catalog.jsonb_build_object('due_date_present',v_row.due_date is not null,'lesson_session_present',v_row.lesson_session_id is not null),
    pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('homework_id',p_record_id::text,'session_id',v_row.lesson_session_id::text)),null,null,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',p_record_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_student,'homeworks',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function public.delete_academic_homework(p_record_id uuid,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_row public.homeworks%rowtype; v_target uuid; v_claim jsonb; v_early jsonb; v_result jsonb;
begin
  select * into v_row from public.homeworks where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not learning_private.academic_teacher_authorized(v_teacher,v_row.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'homeworks',p_client_action_id,'homework_delete',pg_catalog.jsonb_build_object('record_id',p_record_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_target:=learning_private.academic_active_evidence(v_row.student_id,'homeworks',p_record_id::text,'homework_assigned');
  if v_target is null then raise exception using errcode='P4001',message='phase4_homework_tombstone_target_missing'; end if;
  perform learning_private.emit_academic_evidence(v_row.student_id,v_teacher,'teacher','homeworks',p_record_id::text,v_row.academic_revision+1,'homework_assigned','tombstone','{}'::jsonb,
    pg_catalog.jsonb_build_object('due_date_present',v_row.due_date is not null,'lesson_session_present',v_row.lesson_session_id is not null),
    pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('homework_id',p_record_id::text,'session_id',v_row.lesson_session_id::text)),null,null,v_target);
  delete from public.homeworks where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',p_record_id);
  return learning_private.complete_academic_action(v_row.student_id,'homeworks',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

-- Yeni private medya kaydı; ham yol ortak kanıta veya sağlık loguna girmez.
create or replace function public.stage_academic_question_media(
  p_student_id uuid,p_media_kind text,p_object_path text,p_content_type text,
  p_byte_size integer,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare v_actor uuid:=auth.uid(); v_role text; v_id uuid;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_actor;
  if v_role='student' and p_student_id<>v_actor then return '{"status":"unauthorized"}'::jsonb;
  elsif v_role='teacher' and not learning_private.academic_teacher_authorized(v_actor,p_student_id) then return '{"status":"unauthorized"}'::jsonb;
  elsif v_role<>all(array['student','teacher']::text[]) then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_media_kind<>all(array['student_question','teacher_reply','teacher_canvas']::text[])
     or (v_role='student' and p_media_kind<>'student_question')
     or p_object_path !~ ('^academic-questions/'||p_student_id::text||'/'||v_actor::text||'/'||p_client_action_id::text||'\.(jpg|jpeg|png|webp)$') then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  insert into public.learning_academic_media(student_id,actor_id,client_action_id,object_path,media_kind,content_type,byte_size)
  values(p_student_id,v_actor,p_client_action_id,p_object_path,p_media_kind,p_content_type,p_byte_size)
  on conflict(actor_id,client_action_id,media_kind) do nothing returning media_id into v_id;
  if v_id is null then
    select media_id into v_id from public.learning_academic_media where actor_id=v_actor and client_action_id=p_client_action_id and media_kind=p_media_kind and object_path=p_object_path;
    if v_id is null then return '{"status":"idempotency_conflict"}'::jsonb; end if;
    return pg_catalog.jsonb_build_object('status','duplicate','media_id',v_id);
  end if;
  return pg_catalog.jsonb_build_object('status','created','media_id',v_id);
end;
$fn$;

create or replace function learning_private.finalize_academic_media(
  p_student_id uuid,p_actor_id uuid,p_client_action_id uuid,p_media_kind text,p_question_id uuid
)
returns text language plpgsql security definer set search_path = '' as $fn$
declare v_path text;
begin
  update public.learning_academic_media set status='finalized',question_id=p_question_id,finalized_at=pg_catalog.clock_timestamp()
   where student_id=p_student_id and actor_id=p_actor_id and client_action_id=p_client_action_id
     and media_kind=p_media_kind and status in ('staged','finalized') returning object_path into v_path;
  if v_path is null then raise exception using errcode='P4001',message='phase4_media_not_staged'; end if;
  return v_path;
end;
$fn$;

-- M07 — iki yönlü sorunlu soru ve paylaşılabilir öğretmen geri bildirimi.
create or replace function public.submit_academic_question(
  p_content text,p_subject text,p_topic text,p_media_action_id uuid,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_role text; v_id uuid:=pg_catalog.gen_random_uuid(); v_path text;
  v_claim jsonb; v_early jsonb; v_evidence jsonb; v_result jsonb;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_student;
  if v_role<>'student' then return '{"status":"unauthorized"}'::jsonb; end if;
  if nullif(pg_catalog.btrim(coalesce(p_content,'')),'') is null and p_media_action_id is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_student,'questions_teacher_feedback',p_client_action_id,'question_submit',
    pg_catalog.jsonb_build_object('content_hash',case when nullif(pg_catalog.btrim(coalesce(p_content,'')),'') is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(pg_catalog.btrim(p_content))) end,'subject',p_subject,'topic',p_topic,'image_present',p_media_action_id is not null));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  if p_media_action_id is not null then v_path:=learning_private.finalize_academic_media(v_student,v_student,p_media_action_id,'student_question',v_id); end if;
  insert into public.questions(id,student_id,content,image_path,subject,topic,status,origin,academic_revision)
  values(v_id,v_student,nullif(pg_catalog.btrim(coalesce(p_content,'')),''),v_path,nullif(pg_catalog.btrim(coalesce(p_subject,'')),''),nullif(pg_catalog.btrim(coalesce(p_topic,'')),''),'İnceleniyor','student_submitted',1);
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','questions_teacher_feedback',v_id::text,1,'question_submitted','event','{}'::jsonb,
    pg_catalog.jsonb_build_object('status','İnceleniyor','reply_present',false,'image_present',v_path is not null,'canvas_present',false,'origin','student_submitted'),pg_catalog.jsonb_build_object('question_id',v_id::text));
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_id,'source_revision',1);
  return learning_private.complete_academic_action(v_student,'questions_teacher_feedback',p_client_action_id,v_id::text,v_result);
end;
$fn$;

create or replace function public.share_academic_teacher_question(
  p_student_id uuid,p_content text,p_subject text,p_topic text,p_media_action_id uuid,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_id uuid:=pg_catalog.gen_random_uuid(); v_path text;
  v_claim jsonb; v_early jsonb; v_evidence jsonb; v_result jsonb;
begin
  if not learning_private.academic_teacher_authorized(v_teacher,p_student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if nullif(pg_catalog.btrim(coalesce(p_content,'')),'') is null and p_media_action_id is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(p_student_id,'questions_teacher_feedback',p_client_action_id,'teacher_problem_question_share',
    pg_catalog.jsonb_build_object('student',p_student_id,'content_hash',case when nullif(pg_catalog.btrim(coalesce(p_content,'')),'') is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(pg_catalog.btrim(p_content))) end,'subject',p_subject,'topic',p_topic,'image_present',p_media_action_id is not null));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  if p_media_action_id is not null then v_path:=learning_private.finalize_academic_media(p_student_id,v_teacher,p_media_action_id,'student_question',v_id); end if;
  insert into public.questions(id,student_id,content,image_path,subject,topic,status,origin,assigned_by,academic_revision)
  values(v_id,p_student_id,nullif(pg_catalog.btrim(coalesce(p_content,'')),''),v_path,nullif(pg_catalog.btrim(coalesce(p_subject,'')),''),nullif(pg_catalog.btrim(coalesce(p_topic,'')),''),'Derste Çözülecek','teacher_shared',v_teacher,1);
  v_evidence:=learning_private.emit_academic_evidence(p_student_id,v_teacher,'teacher','questions_teacher_feedback',v_id::text,1,'teacher_problem_question_shared','event','{}'::jsonb,
    pg_catalog.jsonb_build_object('status','Derste Çözülecek','reply_present',false,'image_present',v_path is not null,'canvas_present',false,'origin','teacher_shared'),pg_catalog.jsonb_build_object('question_id',v_id::text));
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_id,'source_revision',1);
  return learning_private.complete_academic_action(p_student_id,'questions_teacher_feedback',p_client_action_id,v_id::text,v_result);
end;
$fn$;

create or replace function public.reply_academic_question(
  p_record_id uuid,p_reply text,p_media_action_id uuid,p_status text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_row public.questions%rowtype; v_path text; v_revision bigint;
  v_claim jsonb; v_early jsonb; v_target uuid; v_kind text:='snapshot'; v_evidence jsonb; v_result jsonb;
begin
  select * into v_row from public.questions where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not learning_private.academic_teacher_authorized(v_teacher,v_row.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_status<>all(array['İnceleniyor','Derste Çözülecek','Çözüldü']::text[])
     or (nullif(pg_catalog.btrim(coalesce(p_reply,'')),'') is null and p_media_action_id is null) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  if p_media_action_id is null
     and v_row.teacher_reply is not distinct from nullif(pg_catalog.btrim(coalesce(p_reply,'')),'')
     and v_row.status=p_status then
    return pg_catalog.jsonb_build_object('status','no_change','record_id',p_record_id,'source_revision',v_row.academic_revision);
  end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,'question_reply',
    pg_catalog.jsonb_build_object('record_id',p_record_id,'reply_hash',case when nullif(pg_catalog.btrim(coalesce(p_reply,'')),'') is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(pg_catalog.btrim(p_reply))) end,'image_present',p_media_action_id is not null,'status',p_status));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  if p_media_action_id is not null then v_path:=learning_private.finalize_academic_media(v_row.student_id,v_teacher,p_media_action_id,'teacher_reply',p_record_id); end if;
  v_revision:=v_row.academic_revision+1;
  v_target:=learning_private.academic_active_evidence(v_row.student_id,'questions_teacher_feedback',p_record_id::text,'teacher_feedback_shared');
  if v_target is not null then v_kind:='correction'; end if;
  update public.questions set teacher_reply=nullif(pg_catalog.btrim(coalesce(p_reply,'')),''),
    teacher_reply_image_path=coalesce(v_path,teacher_reply_image_path),status=p_status,academic_revision=v_revision where id=p_record_id;
  v_evidence:=learning_private.emit_academic_evidence(v_row.student_id,v_teacher,'teacher','questions_teacher_feedback',p_record_id::text,v_revision,'teacher_feedback_shared',v_kind,'{}'::jsonb,
    pg_catalog.jsonb_build_object('status',p_status,'reply_present',nullif(pg_catalog.btrim(coalesce(p_reply,'')),'') is not null,'image_present',coalesce(v_path,v_row.teacher_reply_image_path) is not null,'canvas_present',v_row.teacher_reply_strokes is not null,'origin',v_row.origin),
    pg_catalog.jsonb_build_object('question_id',p_record_id::text),null,null,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',p_record_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function public.update_academic_question_status(
  p_record_id uuid,p_status text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare v_teacher uuid:=auth.uid(); v_row public.questions%rowtype; v_claim jsonb; v_early jsonb; v_revision bigint; v_result jsonb;
begin
  select * into v_row from public.questions where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not learning_private.academic_teacher_authorized(v_teacher,v_row.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_status<>all(array['İnceleniyor','Derste Çözülecek','Çözüldü']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_row.status=p_status then return pg_catalog.jsonb_build_object('status','no_change','record_id',p_record_id,'source_revision',v_row.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,'question_status',pg_catalog.jsonb_build_object('record_id',p_record_id,'status',p_status));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_revision+1;
  update public.questions set status=p_status,academic_revision=v_revision where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',p_record_id,'source_revision',v_revision,'evidence_created',false);
  return learning_private.complete_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function public.save_academic_question_canvas_draft(
  p_record_id uuid,p_strokes jsonb,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare v_teacher uuid:=auth.uid(); v_row public.questions%rowtype; v_claim jsonb; v_early jsonb; v_revision bigint; v_result jsonb;
begin
  select * into v_row from public.questions where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not learning_private.academic_teacher_authorized(v_teacher,v_row.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_strokes is null or pg_catalog.jsonb_typeof(p_strokes)<>'object'
     or pg_catalog.jsonb_typeof(p_strokes->'strokes')<>'array' or pg_catalog.octet_length(p_strokes::text)>1048576 then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_row.teacher_reply_strokes is not distinct from p_strokes then return pg_catalog.jsonb_build_object('status','no_change','record_id',p_record_id,'source_revision',v_row.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,'question_canvas_draft',pg_catalog.jsonb_build_object('record_id',p_record_id,'strokes_hash',learning_private.academic_sha256(p_strokes)));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_revision+1;
  update public.questions set teacher_reply_strokes=p_strokes,academic_revision=v_revision where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',p_record_id,'source_revision',v_revision,'evidence_created',false);
  return learning_private.complete_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function public.publish_academic_question_canvas(
  p_record_id uuid,p_media_action_id uuid,p_status text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_row public.questions%rowtype; v_path text; v_revision bigint;
  v_claim jsonb; v_early jsonb; v_target uuid; v_kind text:='snapshot'; v_evidence jsonb; v_result jsonb;
begin
  select * into v_row from public.questions where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not learning_private.academic_teacher_authorized(v_teacher,v_row.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_status<>all(array['Derste Çözülecek','Çözüldü']::text[])
     or v_row.teacher_reply_strokes is null or pg_catalog.jsonb_typeof(v_row.teacher_reply_strokes->'strokes')<>'array'
     or pg_catalog.jsonb_array_length(v_row.teacher_reply_strokes->'strokes')=0 then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,'question_canvas_publish',pg_catalog.jsonb_build_object('record_id',p_record_id,'canvas_hash',learning_private.academic_sha256(v_row.teacher_reply_strokes),'image_present',p_media_action_id is not null,'status',p_status));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  if p_media_action_id is not null then v_path:=learning_private.finalize_academic_media(v_row.student_id,v_teacher,p_media_action_id,'teacher_canvas',p_record_id); end if;
  v_revision:=v_row.academic_revision+1;
  v_target:=learning_private.academic_active_evidence(v_row.student_id,'questions_teacher_feedback',p_record_id::text,'teacher_feedback_shared');
  if v_target is not null then v_kind:='correction'; end if;
  update public.questions set teacher_reply_image_path=coalesce(v_path,teacher_reply_image_path),status=p_status,academic_revision=v_revision where id=p_record_id;
  v_evidence:=learning_private.emit_academic_evidence(v_row.student_id,v_teacher,'teacher','questions_teacher_feedback',p_record_id::text,v_revision,'teacher_feedback_shared',v_kind,'{}'::jsonb,
    pg_catalog.jsonb_build_object('status',p_status,'reply_present',v_row.teacher_reply is not null,'image_present',coalesce(v_path,v_row.teacher_reply_image_path) is not null,'canvas_present',true,'origin',v_row.origin),
    pg_catalog.jsonb_build_object('question_id',p_record_id::text),null,null,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',p_record_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_row.student_id,'questions_teacher_feedback',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

-- M04 — parent, ders satırları ve kanıtlar tek transaction'da.
create or replace function public.create_academic_mock_exam(
  p_exam_type text, p_exam_name text, p_exam_date date,
  p_duration_minutes integer, p_subjects jsonb, p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_role text; v_exam_type text:=pg_catalog.upper(coalesce(p_exam_type,''));
  v_claim jsonb; v_early jsonb; v_exam_id uuid:=pg_catalog.gen_random_uuid();
  v_subject jsonb; v_subject_id uuid; v_child_count integer:=0; v_evidence jsonb; v_result jsonb;
  v_correct integer; v_incorrect integer; v_empty integer; v_subject_name text;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_student;
  if v_role<>'student' then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_exam_type<>all(array['LGS','TYT','AYT','KPSS']::text[]) or p_exam_date is null
     or p_exam_date>(pg_catalog.clock_timestamp() at time zone 'Europe/Istanbul')::date
     or p_subjects is null or pg_catalog.jsonb_typeof(p_subjects)<>'array'
     or pg_catalog.jsonb_array_length(p_subjects) not between 1 and 32
     or p_duration_minutes<0 or p_duration_minutes>1440 then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_student,'mock_exam_subjects',p_client_action_id,'mock_exam_create',
    pg_catalog.jsonb_build_object('exam_type',v_exam_type,'exam_name',nullif(pg_catalog.btrim(coalesce(p_exam_name,'')),''),'exam_date',p_exam_date,'duration',p_duration_minutes,'subjects',p_subjects));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.mock_exams(id,student_id,exam_type,exam_name,exam_date,duration_minutes,academic_revision)
  values(v_exam_id,v_student,v_exam_type,nullif(pg_catalog.btrim(coalesce(p_exam_name,'')),''),p_exam_date,p_duration_minutes,1);
  if p_duration_minutes is not null then
    v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','mock_exam_subjects','session:'||v_exam_id::text,1,'mock_exam_session_reported','event',
      pg_catalog.jsonb_build_object('duration_minutes',p_duration_minutes,'duration_source','student_reported'),
      pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('exam_name',nullif(pg_catalog.btrim(coalesce(p_exam_name,'')),''),'exam_scope','general')),
      pg_catalog.jsonb_build_object('exam_id',v_exam_id::text),p_exam_date);
  end if;
  for v_subject in select value from pg_catalog.jsonb_array_elements(p_subjects) loop
    if pg_catalog.jsonb_typeof(v_subject)<>'object' then raise exception using errcode='22023',message='phase4_mock_subject_invalid'; end if;
    v_subject_name:=nullif(pg_catalog.btrim(v_subject->>'subject'),'');
    begin
      v_correct:=coalesce((v_subject->>'correct')::integer,0);
      v_incorrect:=coalesce((v_subject->>'incorrect')::integer,0);
      v_empty:=coalesce((v_subject->>'empty')::integer,0);
    exception when others then raise exception using errcode='22023',message='phase4_mock_subject_invalid'; end;
    if v_subject_name is null or pg_catalog.char_length(v_subject_name)>120 or v_correct<0 or v_incorrect<0 or v_empty<0 then
      raise exception using errcode='22023',message='phase4_mock_subject_invalid';
    end if;
    v_subject_id:=pg_catalog.gen_random_uuid();
    insert into public.mock_exam_subjects(id,mock_exam_id,subject,correct,incorrect,empty,academic_revision)
    values(v_subject_id,v_exam_id,v_subject_name,v_correct,v_incorrect,v_empty,1);
    v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','mock_exam_subjects','subject:'||v_subject_id::text,1,'mock_exam_subject_result_reported','event',
      learning_private.academic_answer_measurement(v_correct,v_incorrect,v_empty,v_exam_type,null,'student_reported'),
      pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('exam_name',nullif(pg_catalog.btrim(coalesce(p_exam_name,'')),''),'exam_scope','subject')),
      pg_catalog.jsonb_build_object('exam_id',v_exam_id::text),p_exam_date);
    v_child_count:=v_child_count+1;
  end loop;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',v_exam_id,'subject_count',v_child_count,'source_revision',1);
  return learning_private.complete_academic_action(v_student,'mock_exam_subjects',p_client_action_id,v_exam_id::text,v_result);
end;
$fn$;

create or replace function public.delete_academic_mock_exam(p_record_id uuid,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_exam public.mock_exams%rowtype; v_subject public.mock_exam_subjects%rowtype;
  v_claim jsonb; v_early jsonb; v_target uuid; v_revision bigint; v_count integer:=0; v_result jsonb;
begin
  select * into v_exam from public.mock_exams where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_student<>v_exam.student_id then return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_student,'mock_exam_subjects',p_client_action_id,'mock_exam_delete',pg_catalog.jsonb_build_object('record_id',p_record_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  for v_subject in select * from public.mock_exam_subjects where mock_exam_id=p_record_id order by id for update loop
    v_revision:=v_subject.academic_revision+1;
    v_target:=learning_private.academic_active_evidence(v_student,'mock_exam_subjects','subject:'||v_subject.id::text,'mock_exam_subject_result_reported');
    if v_target is null then raise exception using errcode='P4001',message='phase4_mock_tombstone_target_missing'; end if;
    perform learning_private.emit_academic_evidence(v_student,v_student,'student','mock_exam_subjects','subject:'||v_subject.id::text,v_revision,'mock_exam_subject_result_reported','tombstone','{}'::jsonb,
      pg_catalog.jsonb_build_object('exam_scope','subject'),pg_catalog.jsonb_build_object('exam_id',p_record_id::text),null,null,v_target);
    v_count:=v_count+1;
  end loop;
  v_target:=learning_private.academic_active_evidence(v_student,'mock_exam_subjects','session:'||p_record_id::text,'mock_exam_session_reported');
  if v_target is not null then
    perform learning_private.emit_academic_evidence(v_student,v_student,'student','mock_exam_subjects','session:'||p_record_id::text,v_exam.academic_revision+1,'mock_exam_session_reported','tombstone','{}'::jsonb,
      pg_catalog.jsonb_build_object('exam_scope','general'),pg_catalog.jsonb_build_object('exam_id',p_record_id::text),null,null,v_target);
  end if;
  delete from public.mock_exams where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',p_record_id,'tombstoned_subject_count',v_count);
  return learning_private.complete_academic_action(v_student,'mock_exam_subjects',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

-- M05 — öğrenci ve yetkili öğretmen kökeni birbirinden ayrıdır.
create or replace function public.create_academic_branch_exam(
  p_student_id uuid, p_subject text, p_topic text, p_exam_type text,
  p_exam_date date, p_correct integer, p_incorrect integer, p_empty integer,
  p_duration_minutes integer, p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid:=auth.uid(); v_role text; v_student uuid; v_exam_type text:=nullif(pg_catalog.upper(coalesce(p_exam_type,'')),'');
  v_id uuid:=pg_catalog.gen_random_uuid(); v_claim jsonb; v_early jsonb; v_event text; v_evidence jsonb; v_result jsonb;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_actor;
  if v_role='student' then v_student:=v_actor;
  elsif v_role='teacher' and learning_private.academic_teacher_authorized(v_actor,p_student_id) then v_student:=p_student_id;
  else return '{"status":"unauthorized"}'::jsonb; end if;
  if nullif(pg_catalog.btrim(coalesce(p_subject,'')),'') is null or p_exam_date is null
     or (v_exam_type is not null and v_exam_type<>all(array['LGS','TYT','AYT','KPSS']::text[]))
     or p_exam_date>(pg_catalog.clock_timestamp() at time zone 'Europe/Istanbul')::date then return '{"status":"validation_rejected"}'::jsonb; end if;
  perform learning_private.academic_answer_measurement(p_correct,p_incorrect,p_empty,v_exam_type,p_duration_minutes,case when v_role='teacher' then 'teacher_entered' else 'student_reported' end);
  v_claim:=learning_private.claim_academic_action(v_student,'branch_exams',p_client_action_id,'branch_exam_create',
    pg_catalog.jsonb_build_object('student',v_student,'subject',p_subject,'topic',p_topic,'exam_type',v_exam_type,'date',p_exam_date,'correct',p_correct,'incorrect',p_incorrect,'empty',p_empty,'duration',p_duration_minutes,'actor_role',v_role));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.exams(id,student_id,subject,topic,exam_type,exam_date,correct,incorrect,empty,duration_minutes,academic_revision)
  values(v_id,v_student,nullif(pg_catalog.btrim(coalesce(p_subject,'')),''),coalesce(nullif(pg_catalog.btrim(coalesce(p_topic,'')),''),pg_catalog.btrim(p_subject)),v_exam_type,p_exam_date,coalesce(p_correct,0),coalesce(p_incorrect,0),coalesce(p_empty,0),p_duration_minutes,1);
  v_event:=case when v_role='teacher' then 'branch_exam_result_entered_by_teacher' else 'branch_exam_result_reported' end;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_actor,v_role,'branch_exams',v_id::text,1,v_event,'event',
    learning_private.academic_answer_measurement(p_correct,p_incorrect,p_empty,v_exam_type,p_duration_minutes,case when v_role='teacher' then 'teacher_entered' else 'student_reported' end),
    pg_catalog.jsonb_build_object('legacy_score_present',false,'exam_scope','branch'),'{}'::jsonb,p_exam_date);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_id,'source_revision',1,'actor_role',v_role);
  return learning_private.complete_academic_action(v_student,'branch_exams',p_client_action_id,v_id::text,v_result);
end;
$fn$;

create or replace function public.delete_academic_branch_exam(p_record_id uuid,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid:=auth.uid(); v_role text; v_exam public.exams%rowtype; v_event text; v_target uuid; v_claim jsonb; v_early jsonb; v_result jsonb;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_actor;
  select * into v_exam from public.exams where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not (v_actor=v_exam.student_id or (v_role='teacher' and learning_private.academic_teacher_authorized(v_actor,v_exam.student_id))) then return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_exam.student_id,'branch_exams',p_client_action_id,'branch_exam_delete',pg_catalog.jsonb_build_object('record_id',p_record_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_event:=case when exists(select 1 from learning_private.learning_academic_source_revisions where student_id=v_exam.student_id and source_code='branch_exams' and source_record_id=p_record_id::text and semantic_event_type='branch_exam_result_entered_by_teacher') then 'branch_exam_result_entered_by_teacher' else 'branch_exam_result_reported' end;
  v_target:=learning_private.academic_active_evidence(v_exam.student_id,'branch_exams',p_record_id::text,v_event);
  if v_target is null then raise exception using errcode='P4001',message='phase4_branch_tombstone_target_missing'; end if;
  perform learning_private.emit_academic_evidence(v_exam.student_id,v_actor,v_role,'branch_exams',p_record_id::text,v_exam.academic_revision+1,v_event,'tombstone','{}'::jsonb,
    pg_catalog.jsonb_build_object('legacy_score_present',false,'exam_scope','branch'),'{}'::jsonb,null,null,v_target);
  delete from public.exams where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','record_id',p_record_id);
  return learning_private.complete_academic_action(v_exam.student_id,'branch_exams',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function learning_private.academic_active_evidence(
  p_student_id uuid, p_source_code text, p_source_record_id text,
  p_semantic_event_type text
)
returns uuid language sql stable security definer set search_path = '' as $fn$
  select evidence.record_id
    from public.learning_evidence_effective as evidence
   where evidence.student_id = p_student_id
     and evidence.source_registry_version = 'learning-academic-registry@1'
     and evidence.source_code = p_source_code
     and evidence.source_record_id = p_source_record_id
     and evidence.semantic_event_type = p_semantic_event_type
   order by evidence.ingestion_sequence desc limit 1;
$fn$;

create or replace function learning_private.emit_academic_evidence(
  p_student_id uuid, p_actor_id uuid, p_actor_role text,
  p_source_code text, p_source_record_id text, p_source_revision bigint,
  p_semantic_event_type text, p_record_kind text,
  p_measurement jsonb default '{}'::jsonb,
  p_metadata jsonb default '{}'::jsonb,
  p_relations jsonb default '{}'::jsonb,
  p_occurred_on date default null,
  p_topic_id text default null,
  p_target_record_id uuid default null,
  p_origin text default 'live',
  p_backfill_run_id uuid default null
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_contract public.learning_source_contracts%rowtype;
  v_class text;
  v_record jsonb;
  v_result jsonb;
  v_now timestamptz := pg_catalog.clock_timestamp();
  v_identity jsonb;
  v_relation text;
  v_fingerprint text;
begin
  select contract.* into v_contract
    from public.learning_source_contracts as contract
   where contract.registry_version = 'learning-academic-registry@1'
     and contract.source_code = p_source_code;
  if not found or not v_contract.ingest_allowed then
    raise exception using errcode = 'P4001', message = 'phase4_source_not_allowed';
  end if;
  if p_record_kind in ('correction','tombstone') then
    if p_target_record_id is null or not exists (
      select 1 from public.learning_evidence_records as target
       where target.record_id=p_target_record_id and target.student_id=p_student_id
         and target.source_registry_version='learning-academic-registry@1'
         and target.source_code=p_source_code and target.source_record_id=p_source_record_id
         and target.semantic_event_type=p_semantic_event_type and target.record_kind<>'tombstone'
    ) then
      raise exception using errcode='P4001',message='phase4_correction_target_invalid';
    end if;
    if exists (
      select 1 from public.learning_evidence_records as modifier
       where modifier.target_record_id=p_target_record_id
    ) then
      raise exception using errcode='P4001',message='phase4_correction_fork_rejected';
    end if;
  elsif p_target_record_id is not null then
    raise exception using errcode='P4001',message='phase4_unexpected_target';
  end if;
  v_class := coalesce(v_contract.evidence_class_by_event ->> p_semantic_event_type, v_contract.default_evidence_class);
  v_relation := case when p_actor_role = 'teacher' then 'authorized_teacher'
                     when p_actor_role = 'model' then 'server_model_for_student'
                     else 'self' end;
  if p_topic_id is not null then
    if p_topic_id !~ '^drkoc:curriculum:topic:v[0-9]+:' then
      raise exception using errcode = '22023', message = 'phase4_topic_invalid';
    end if;
    v_identity := pg_catalog.jsonb_build_object(
      'status', 'verified', 'canonicalId', p_topic_id,
      'resolverVersion', 'topic-resolver@1', 'method', 'explicit_verified_selection'
    );
  end if;
  v_record := pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
    'contract_version', 'learning-evidence@1', 'schema_version', '1.0',
    'source_registry_version', 'learning-academic-registry@1',
    'record_kind', p_record_kind, 'student_id', p_student_id,
    'actor_id', p_actor_id, 'actor_role', p_actor_role,
    'actor_student_relation', v_relation,
    'source_code', p_source_code, 'source_record_id', p_source_record_id,
    'source_revision', p_source_revision::text,
    'source_locator', 'drkoc-ref:v1:' || p_source_code || ':' ||
      pg_catalog.substr(learning_private.academic_sha256(pg_catalog.jsonb_build_object(
        'student', p_student_id, 'source', p_source_code, 'record', p_source_record_id
      )), 1, 32),
    'semantic_event_type', p_semantic_event_type, 'activity_type', p_semantic_event_type,
    'occurred_on', case when p_occurred_on is not null and p_record_kind in ('event', 'correction') then p_occurred_on end,
    'occurred_at', case when p_occurred_on is null and p_record_kind <> 'snapshot' then v_now end,
    'occurred_at_precision', case when p_record_kind = 'snapshot' then 'unknown' when p_occurred_on is not null then 'day' else 'exact' end,
    'as_of', case when p_record_kind = 'snapshot' then v_now end,
    'topic_id', p_topic_id, 'identity_resolution', v_identity,
    'curriculum_identity_version', 'curriculum-identity@1',
    'curriculum_ledger_version', 'curriculum-ledger@1',
    'curriculum_aliases_version', 'curriculum-aliases@1',
    'evidence_class', v_class,
    'evidence_strength', case when v_class in ('model_inference', 'system_observation') then 'medium' else 'low' end,
    'trust_level', 'authoritative_source',
    'provenance', case when p_origin = 'backfill' then 'backfill_snapshot' else 'authoritative_source' end,
    'source_availability', 'available',
    'measurement', coalesce(p_measurement, '{}'::jsonb),
    'relations', coalesce(p_relations, '{}'::jsonb),
    'metadata', coalesce(p_metadata, '{}'::jsonb),
    'source_adapter_version', 'learning-academic-adapters@1',
    'topic_resolver_version', 'topic-resolver@1',
    'target_record_id', p_target_record_id,
    'correction_reason', case when p_record_kind = 'correction' then 'source_edited' end,
    'tombstone_reason', case when p_record_kind = 'tombstone' then 'source_deleted' end
  ));
  v_fingerprint := learning_private.academic_sha256(v_record);
  v_result := learning_private.ingest_evidence(v_record, v_fingerprint, p_origin, p_backfill_run_id);
  if coalesce(v_result ->> 'status', '') <> all(array['created','duplicate','identity_quarantined']::text[]) then
    raise exception using errcode = 'P4001', message = 'phase4_evidence_rejected:' || coalesce(v_result ->> 'code', v_result ->> 'status', 'unknown');
  end if;
  insert into learning_private.learning_academic_source_revisions (
    student_id, actor_id, source_code, source_record_id, source_revision,
    action_kind, semantic_event_type, safe_field_hash, evidence_record_id,
    target_evidence_record_id
  ) values (
    p_student_id, p_actor_id, p_source_code, p_source_record_id,
    p_source_revision, p_record_kind, p_semantic_event_type, v_fingerprint,
    case when v_result ->> 'record_id' is null then null else (v_result ->> 'record_id')::uuid end,
    p_target_record_id
  ) on conflict (student_id, source_code, source_record_id, source_revision, semantic_event_type) do nothing;
  return v_result;
end;
$fn$;

create or replace function learning_private.academic_answer_measurement(
  p_correct integer, p_incorrect integer, p_empty integer,
  p_exam_type text default null, p_duration integer default null,
  p_source text default 'student_reported'
)
returns jsonb language plpgsql immutable set search_path = '' as $fn$
declare
  v_correct integer := coalesce(p_correct, 0);
  v_incorrect integer := coalesce(p_incorrect, 0);
  v_empty integer := coalesce(p_empty, 0);
  v_marked integer;
  v_total integer;
  v_exam text := pg_catalog.upper(coalesce(p_exam_type, ''));
  v_divisor integer;
  v_result jsonb;
begin
  if v_correct < 0 or v_incorrect < 0 or v_empty < 0 or p_duration < 0 or p_duration > 1440 then
    raise exception using errcode = '22023', message = 'phase4_measurement_invalid';
  end if;
  v_marked := v_correct + v_incorrect;
  v_total := v_marked + v_empty;
  v_result := pg_catalog.jsonb_build_object(
    'correct_count', v_correct, 'incorrect_count', v_incorrect,
    'blank_count', v_empty, 'marked_count', v_marked, 'total_count', v_total
  );
  if v_marked > 0 then
    v_result := v_result || pg_catalog.jsonb_build_object(
      'accuracy', v_correct::numeric / v_marked::numeric,
      'accuracy_denominator', 'marked', 'accuracy_formula', 'correct_count / marked_count',
      'accuracy_formula_version', 'accuracy-marked-v1', 'accuracy_source', p_source
    );
  end if;
  if v_exam = any(array['LGS','TYT','AYT','KPSS']::text[]) then
    v_divisor := case when v_exam = 'LGS' then 3 else 4 end;
    v_result := v_result || pg_catalog.jsonb_build_object(
      'net_score', v_correct::numeric - v_incorrect::numeric / v_divisor::numeric,
      'net_formula', 'correct_count - incorrect_count / ' || v_divisor::text,
      'net_formula_version', case when v_exam = 'LGS' then 'net-lgs-v1' else 'net-standard-v1' end,
      'net_exam_type', v_exam, 'net_source', case when p_source = 'teacher_entered' then 'teacher_entered' else 'server_computed' end
    );
  end if;
  if p_duration is not null then
    v_result := v_result || pg_catalog.jsonb_build_object('duration_minutes', p_duration, 'duration_source', case when p_source='teacher_entered' then 'student_reported' else p_source end);
  end if;
  return v_result;
end;
$fn$;

-- M11 — model çağrısı öncesi kalıcı claim; model alanları yalnız service_role finalize eder.
create or replace function public.claim_academic_ai_solve(
  p_source text,p_input_fingerprint text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_role text; v_hash text; v_id uuid;
  v_claim learning_private.learning_academic_external_claims%rowtype;
begin
  select profile.role into v_role from public.profiles as profile where profile.id=v_student;
  if v_role<>'student' then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_source<>all(array['photo','text','gallery','pdf']::text[])
     or p_input_fingerprint !~ '^[0-9a-f]{64}$' or p_client_action_id is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_hash:=learning_private.academic_sha256(pg_catalog.jsonb_build_object('source',p_source,'input_fingerprint',p_input_fingerprint));
  insert into learning_private.learning_academic_external_claims(student_id,client_action_id,request_hash)
  values(v_student,p_client_action_id,v_hash) on conflict(student_id,client_action_id) do nothing returning claim_id into v_id;
  if v_id is not null then return pg_catalog.jsonb_build_object('status','claimed','claim_id',v_id); end if;
  select * into v_claim from learning_private.learning_academic_external_claims
   where student_id=v_student and client_action_id=p_client_action_id for update;
  if v_claim.request_hash is distinct from v_hash then return '{"status":"idempotency_conflict"}'::jsonb; end if;
  if v_claim.status='completed' then return pg_catalog.jsonb_build_object('status','duplicate','session_id',v_claim.session_id,'result_status',v_claim.result_status); end if;
  return pg_catalog.jsonb_build_object('status','processing','claim_id',v_claim.claim_id);
end;
$fn$;

create or replace function public.finalize_academic_ai_solve(
  p_student_id uuid,p_client_action_id uuid,p_result jsonb
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_claim learning_private.learning_academic_external_claims%rowtype;
  v_session uuid:=pg_catalog.gen_random_uuid(); v_evidence jsonb; v_topic text; v_status text; v_source text;
begin
  if coalesce(auth.role(),'')<>'service_role' then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_result is null or pg_catalog.jsonb_typeof(p_result)<>'object' then return '{"status":"validation_rejected"}'::jsonb; end if;
  select * into v_claim from learning_private.learning_academic_external_claims
   where student_id=p_student_id and client_action_id=p_client_action_id for update;
  if not found then return '{"status":"claim_missing"}'::jsonb; end if;
  if v_claim.status='completed' then return pg_catalog.jsonb_build_object('status','duplicate','session_id',v_claim.session_id,'result_status',v_claim.result_status); end if;
  if v_claim.status<>'processing' then return '{"status":"retryable_failure"}'::jsonb; end if;
  v_status:=coalesce(p_result->>'status','error'); v_source:=coalesce(p_result->>'source','text');
  if v_status<>all(array['ok','unreadable','refused','error']::text[]) or v_source<>all(array['photo','text','gallery','pdf']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if coalesce((p_result->>'topic_matched')::boolean,false)
     and coalesce(p_result->>'canonical_topic','') ~ '^drkoc:curriculum:topic:v[0-9]+:' then v_topic:=p_result->>'canonical_topic'; end if;
  insert into public.ai_solution_sessions(
    id,student_id,status,source,image_path,question_text,student_note,subject,topic,subtopic,
    canonical_topic,topic_matched,exam_type,difficulty,question_type,answer_latex,answer_plain,
    answer_unit,answer_choice,board,analysis,student_help,verification,confidence,refusal_reason,
    model_role,model_id,escalated,input_tokens,output_tokens,cost_usd,duration_ms,routing_log,
    academic_request_id,academic_revision
  ) values (
    v_session,p_student_id,v_status,v_source,p_result->>'image_path',p_result->>'question_text',p_result->>'student_note',
    p_result->>'subject',p_result->>'topic',p_result->>'subtopic',p_result->>'canonical_topic',coalesce((p_result->>'topic_matched')::boolean,false),
    p_result->>'exam_type',nullif(p_result->>'difficulty','')::integer,p_result->>'question_type',p_result->>'answer_latex',
    p_result->>'answer_plain',p_result->>'answer_unit',p_result->>'answer_choice',p_result->'board',p_result->'analysis',
    p_result->'student_help',p_result->'verification',nullif(p_result->>'confidence','')::numeric,p_result->>'refusal_reason',
    p_result->>'model_role',p_result->>'model_id',coalesce((p_result->>'escalated')::boolean,false),
    nullif(p_result->>'input_tokens','')::integer,nullif(p_result->>'output_tokens','')::integer,
    nullif(p_result->>'cost_usd','')::numeric,nullif(p_result->>'duration_ms','')::integer,p_result->'routing_log',
    p_client_action_id,1
  );
  v_evidence:=learning_private.emit_academic_evidence(p_student_id,p_student_id,'model','ai_solution_sessions','session:'||v_session::text,1,'solution_requested','event','{}'::jsonb,
    pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('event_type','solution_requested','topic_matched',case when v_topic is not null then true end,'review_state','none')),
    pg_catalog.jsonb_build_object('session_id',v_session::text),null,v_topic);
  update learning_private.learning_academic_external_claims set status='completed',session_id=v_session,
    result_status=v_status,updated_at=pg_catalog.clock_timestamp(),completed_at=pg_catalog.clock_timestamp()
   where claim_id=v_claim.claim_id;
  return pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',v_session,'result_status',v_status);
end;
$fn$;

create or replace function public.record_academic_ai_solve_help(
  p_student_id uuid,p_session_id uuid,p_kind text,p_step_index integer,p_question text,p_answer text,
  p_model_role text,p_model_id text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=p_student_id; v_session public.ai_solution_sessions%rowtype; v_event uuid:=pg_catalog.gen_random_uuid();
  v_claim jsonb; v_early jsonb; v_evidence jsonb; v_result jsonb; v_topic text;
begin
  if coalesce(auth.role(),'')<>'service_role' then return '{"status":"unauthorized"}'::jsonb; end if;
  select * into v_session from public.ai_solution_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_session.student_id<>v_student then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_kind<>all(array['why','stuck','chat','alternative']::text[]) or p_step_index < 0 then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'ai_solve_help',
    pg_catalog.jsonb_build_object('session_id',p_session_id,'kind',p_kind,'step_index',p_step_index,'question_hash',case when p_question is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_question)) end,'answer_hash',case when p_answer is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_answer)) end,'model_role',p_model_role,'model_id',p_model_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.ai_solution_events(id,session_id,student_id,kind,step_index,question,answer,model_role,model_id)
  values(v_event,p_session_id,v_student,p_kind,p_step_index,p_question,p_answer,p_model_role,p_model_id);
  update public.ai_solution_sessions set help_requested=help_requested+case when p_kind in ('why','stuck') then 1 else 0 end,
    academic_revision=academic_revision+1 where id=p_session_id;
  if v_session.topic_matched and coalesce(v_session.canonical_topic,'') ~ '^drkoc:curriculum:topic:v[0-9]+:' then v_topic:=v_session.canonical_topic; end if;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','ai_solution_sessions','event:'||v_event::text,1,'help_requested','event',
    pg_catalog.jsonb_build_object('help_used',p_kind in ('why','stuck'),'help_source','client_interaction'),pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('event_type',p_kind,'topic_matched',case when v_topic is not null then true end,'review_state',coalesce(v_session.review_status,'none'))),
    pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,v_topic);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',p_session_id,'event_id',v_event,'help_requested',v_session.help_requested+case when p_kind in ('why','stuck') then 1 else 0 end);
  return learning_private.complete_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'event:'||v_event::text,v_result);
end;
$fn$;

create or replace function public.record_academic_ai_solve_check(
  p_student_id uuid,p_session_id uuid,p_student_correct boolean,p_event_payload jsonb,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_session public.ai_solution_sessions%rowtype; v_event uuid:=pg_catalog.gen_random_uuid();
  v_claim jsonb; v_early jsonb; v_evidence jsonb; v_result jsonb; v_topic text;
begin
  if coalesce(auth.role(),'')<>'service_role' then return '{"status":"unauthorized"}'::jsonb; end if;
  select * into v_session from public.ai_solution_sessions where id=p_session_id and student_id=p_student_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if p_student_correct is null or p_event_payload is null or pg_catalog.jsonb_typeof(p_event_payload)<>'object' then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(p_student_id,'ai_solution_sessions',p_client_action_id,'ai_solve_check',
    pg_catalog.jsonb_build_object('session_id',p_session_id,'student_correct',p_student_correct,'payload_hash',learning_private.academic_sha256(p_event_payload)));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.ai_solution_events(id,session_id,student_id,kind,question,answer,model_role,model_id)
  values(v_event,p_session_id,p_student_id,'check',p_event_payload->>'question',p_event_payload->>'answer',p_event_payload->>'model_role',p_event_payload->>'model_id');
  update public.ai_solution_sessions set error_type=p_event_payload->>'error_type',academic_revision=academic_revision+1 where id=p_session_id;
  if v_session.topic_matched and coalesce(v_session.canonical_topic,'') ~ '^drkoc:curriculum:topic:v[0-9]+:' then v_topic:=v_session.canonical_topic; end if;
  v_evidence:=learning_private.emit_academic_evidence(p_student_id,p_student_id,'model','ai_solution_sessions','event:'||v_event::text,1,'answer_checked','event',
    pg_catalog.jsonb_build_object('student_correct',p_student_correct),pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('event_type','check','topic_matched',case when v_topic is not null then true end,'review_state',coalesce(v_session.review_status,'none'))),
    pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,v_topic);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',p_session_id,'event_id',v_event);
  return learning_private.complete_academic_action(p_student_id,'ai_solution_sessions',p_client_action_id,'event:'||v_event::text,v_result);
end;
$fn$;

create or replace function public.report_academic_ai_solve_result(
  p_session_id uuid,p_student_correct boolean,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_session public.ai_solution_sessions%rowtype; v_claim jsonb; v_early jsonb;
  v_target uuid; v_kind text:='snapshot'; v_revision bigint; v_evidence jsonb; v_result jsonb; v_topic text;
begin
  select * into v_session from public.ai_solution_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_session.student_id<>v_student then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_student_correct is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_session.student_correct is not distinct from p_student_correct then return pg_catalog.jsonb_build_object('status','no_change','session_id',p_session_id,'source_revision',v_session.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'ai_solve_self_result',pg_catalog.jsonb_build_object('session_id',p_session_id,'student_correct',p_student_correct));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_session.academic_revision+1; v_target:=learning_private.academic_active_evidence(v_student,'ai_solution_sessions','self-result:'||p_session_id::text,'feedback_reported');
  if v_target is not null then v_kind:='correction'; end if;
  update public.ai_solution_sessions set student_correct=p_student_correct,academic_revision=v_revision where id=p_session_id;
  if v_session.topic_matched and coalesce(v_session.canonical_topic,'') ~ '^drkoc:curriculum:topic:v[0-9]+:' then v_topic:=v_session.canonical_topic; end if;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','ai_solution_sessions','self-result:'||p_session_id::text,v_revision,'feedback_reported',v_kind,
    pg_catalog.jsonb_build_object('student_correct',p_student_correct),pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('event_type','self_result','topic_matched',case when v_topic is not null then true end,'review_state',coalesce(v_session.review_status,'none'))),
    pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,v_topic,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',p_session_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'self-result:'||p_session_id::text,v_result);
end;
$fn$;

create or replace function public.feedback_academic_ai_solve(
  p_session_id uuid,p_feedback text,p_reason text,p_note text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_session public.ai_solution_sessions%rowtype; v_claim jsonb; v_early jsonb;
  v_revision bigint; v_result jsonb;
begin
  select * into v_session from public.ai_solution_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_session.student_id<>v_student then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_feedback<>all(array['up','down']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_session.feedback is not distinct from p_feedback and v_session.feedback_reason is not distinct from nullif(pg_catalog.btrim(coalesce(p_reason,'')),'') and v_session.feedback_note is not distinct from nullif(pg_catalog.btrim(coalesce(p_note,'')),'') then
    return pg_catalog.jsonb_build_object('status','no_change','session_id',p_session_id,'source_revision',v_session.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'ai_solve_feedback',
    pg_catalog.jsonb_build_object('session_id',p_session_id,'feedback',p_feedback,'reason_hash',case when p_reason is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_reason)) end,'note_hash',case when p_note is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_note)) end));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_session.academic_revision+1;
  update public.ai_solution_sessions set feedback=p_feedback,feedback_reason=nullif(pg_catalog.btrim(coalesce(p_reason,'')),''),feedback_note=nullif(pg_catalog.btrim(coalesce(p_note,'')),''),academic_revision=v_revision where id=p_session_id;
  v_result:=pg_catalog.jsonb_build_object('status','created','session_id',p_session_id,'source_revision',v_revision,'evidence_created',false);
  return learning_private.complete_academic_action(v_student,'ai_solution_sessions',p_client_action_id,'feedback:'||p_session_id::text,v_result);
end;
$fn$;

-- M12 — tekrar durumu sunucu snapshot/correction zinciri.
create or replace function public.update_academic_ai_review(
  p_session_id uuid,p_review_status text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_session public.ai_solution_sessions%rowtype; v_claim jsonb; v_early jsonb;
  v_target uuid; v_kind text:='snapshot'; v_revision bigint; v_evidence jsonb; v_result jsonb; v_topic text;
begin
  select * into v_session from public.ai_solution_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_session.student_id<>v_student then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_review_status<>all(array['none','pending','completed']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_session.review_status=p_review_status then return pg_catalog.jsonb_build_object('status','no_change','session_id',p_session_id,'source_revision',v_session.review_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_student,'ai_solution_review',p_client_action_id,'ai_review_update',pg_catalog.jsonb_build_object('session_id',p_session_id,'review_status',p_review_status));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_session.review_revision+1; v_target:=learning_private.academic_active_evidence(v_student,'ai_solution_review',p_session_id::text,'review_state_reported');
  if v_target is not null then v_kind:='correction'; end if;
  update public.ai_solution_sessions set review_status=p_review_status,
    reviewed_at=case when p_review_status='completed' then pg_catalog.clock_timestamp() else null end,review_revision=v_revision where id=p_session_id;
  if v_session.topic_matched and coalesce(v_session.canonical_topic,'') ~ '^drkoc:curriculum:topic:v[0-9]+:' then v_topic:=v_session.canonical_topic; end if;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','ai_solution_review',p_session_id::text,v_revision,'review_state_reported',v_kind,
    pg_catalog.jsonb_build_object('completion_status',case p_review_status when 'completed' then 'completed' when 'pending' then 'in_progress' else 'not_started' end,'completion_source','student_reported'),pg_catalog.jsonb_build_object('review_state',p_review_status,'storage_scope','server'),
    pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,v_topic,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',p_session_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_student,'ai_solution_review',p_client_action_id,p_session_id::text,v_result);
end;
$fn$;

-- M31 — mevcut ders yetkisini koruyan, action-id ile tekrar güvenli katılım.
create or replace function public.join_academic_lesson(p_session_id uuid,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid:=auth.uid(); v_session public.lesson_sessions%rowtype; v_role text; v_claim jsonb; v_early jsonb;
  v_join record; v_participant public.lesson_participants%rowtype; v_evidence jsonb; v_result jsonb; v_created boolean:=false;
begin
  select * into v_session from public.lesson_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_actor=v_session.student_id then v_role:='student'; elsif v_actor=v_session.teacher_id then v_role:='teacher'; else return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_session.student_id,'live_lesson_attendance',p_client_action_id,'lesson_join_'||v_role,
    pg_catalog.jsonb_build_object('session_id',p_session_id,'actor',v_actor,'role',v_role));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  select * into v_join from public.lesson_join(p_session_id);
  select * into v_participant from public.lesson_participants where lesson_session_id=p_session_id and user_id=v_actor for update;
  if v_role='student' and learning_private.academic_active_evidence(v_session.student_id,'live_lesson_attendance',v_participant.id::text,'lesson_attendance_state') is null then
    update public.lesson_participants set attendance_revision=1 where id=v_participant.id;
    v_evidence:=learning_private.emit_academic_evidence(v_session.student_id,v_actor,'student','live_lesson_attendance',v_participant.id::text,1,'lesson_attendance_state','snapshot',
      pg_catalog.jsonb_build_object('duration_minutes',v_participant.total_seconds::numeric/60,'duration_source','active_measurement'),
      pg_catalog.jsonb_build_object('session_id',p_session_id::text,'attendance_state','joined'),pg_catalog.jsonb_build_object('session_id',p_session_id::text));
    v_created:=true;
  end if;
  v_result:=pg_catalog.jsonb_build_object('status',case when v_created then coalesce(v_evidence->>'status','created') else 'created' end,
    'session_id',p_session_id,'participant_id',v_participant.id,'participant_role',v_role,'lesson_status',v_join.lesson_status,'evidence_created',v_created);
  return learning_private.complete_academic_action(v_session.student_id,'live_lesson_attendance',p_client_action_id,v_participant.id::text,v_result);
end;
$fn$;

create or replace function public.leave_academic_lesson(p_session_id uuid,p_seconds integer,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid:=auth.uid(); v_session public.lesson_sessions%rowtype; v_role text; v_before public.lesson_participants%rowtype;
  v_after public.lesson_participants%rowtype; v_claim jsonb; v_early jsonb; v_target uuid; v_revision bigint; v_evidence jsonb; v_result jsonb; v_created boolean:=false;
begin
  select * into v_session from public.lesson_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_actor=v_session.student_id then v_role:='student'; elsif v_actor=v_session.teacher_id then v_role:='teacher'; else return '{"status":"unauthorized"}'::jsonb; end if;
  select * into v_before from public.lesson_participants where lesson_session_id=p_session_id and user_id=v_actor for update;
  if not found then return '{"status":"not_joined"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_session.student_id,'live_lesson_attendance',p_client_action_id,'lesson_leave_'||v_role,
    pg_catalog.jsonb_build_object('session_id',p_session_id,'actor',v_actor,'role',v_role,'seconds',p_seconds));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  perform public.lesson_leave(p_session_id,p_seconds);
  select * into v_after from public.lesson_participants where id=v_before.id for update;
  if v_role='student' and v_after.total_seconds<>v_before.total_seconds then
    v_target:=learning_private.academic_active_evidence(v_session.student_id,'live_lesson_attendance',v_after.id::text,'lesson_attendance_state');
    if v_target is null then raise exception using errcode='P4001',message='phase4_attendance_target_missing'; end if;
    v_revision:=greatest(v_before.attendance_revision,1)+1;
    update public.lesson_participants set attendance_revision=v_revision where id=v_after.id;
    v_evidence:=learning_private.emit_academic_evidence(v_session.student_id,v_actor,'student','live_lesson_attendance',v_after.id::text,v_revision,'lesson_attendance_state','correction',
      pg_catalog.jsonb_build_object('duration_minutes',v_after.total_seconds::numeric/60,'duration_source','active_measurement'),
      pg_catalog.jsonb_build_object('session_id',p_session_id::text,'attendance_state','left'),pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,null,v_target);
    v_created:=true;
  end if;
  v_result:=pg_catalog.jsonb_build_object('status',case when v_created then coalesce(v_evidence->>'status','created') else 'created' end,
    'session_id',p_session_id,'participant_id',v_after.id,'participant_role',v_role,'total_seconds',v_after.total_seconds,'evidence_created',v_created);
  return learning_private.complete_academic_action(v_session.student_id,'live_lesson_attendance',p_client_action_id,v_after.id::text,v_result);
end;
$fn$;

-- M33 — session kimliklerinden türetilen paylaşılmış özet ve dar öğrenci feedback'i.
create or replace function public.save_academic_lesson_summary(
  p_session_id uuid,p_covered_topics text,p_public_note text,p_next_goal text,
  p_board_image_url text,p_board_snapshot jsonb,p_shared_with_student boolean,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_teacher uuid:=auth.uid(); v_session public.lesson_sessions%rowtype; v_row public.lesson_summaries%rowtype; v_exists boolean;
  v_claim jsonb; v_early jsonb; v_revision bigint; v_target uuid; v_kind text; v_evidence jsonb; v_result jsonb; v_evidence_created boolean:=false;
begin
  select * into v_session from public.lesson_sessions where id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_session.teacher_id<>v_teacher or not learning_private.academic_teacher_authorized(v_teacher,v_session.student_id) then return '{"status":"unauthorized"}'::jsonb; end if;
  select * into v_row from public.lesson_summaries where lesson_session_id=p_session_id for update; v_exists:=found;
  if v_exists and v_row.covered_topics is not distinct from nullif(pg_catalog.btrim(coalesce(p_covered_topics,'')),'')
     and v_row.public_note is not distinct from nullif(pg_catalog.btrim(coalesce(p_public_note,'')),'')
     and v_row.next_goal is not distinct from nullif(pg_catalog.btrim(coalesce(p_next_goal,'')),'')
     and v_row.board_image_url is not distinct from p_board_image_url and v_row.board_snapshot is not distinct from p_board_snapshot
     and v_row.shared_with_student is not distinct from coalesce(p_shared_with_student,false) then
    return pg_catalog.jsonb_build_object('status','no_change','session_id',p_session_id,'source_revision',v_row.academic_revision);
  end if;
  v_claim:=learning_private.claim_academic_action(v_session.student_id,'live_lesson_shared_summary',p_client_action_id,'lesson_summary_save',
    pg_catalog.jsonb_build_object('session_id',p_session_id,'covered_hash',case when p_covered_topics is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_covered_topics)) end,'note_hash',case when p_public_note is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_public_note)) end,'goal_hash',case when p_next_goal is null then null else learning_private.academic_sha256(pg_catalog.to_jsonb(p_next_goal)) end,'board_image_present',p_board_image_url is not null,'board_present',p_board_snapshot is not null,'shared',coalesce(p_shared_with_student,false)));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=case when v_exists then v_row.academic_revision+1 else 1 end;
  insert into public.lesson_summaries(lesson_session_id,teacher_id,student_id,covered_topics,public_note,next_goal,board_image_url,board_snapshot,shared_with_student,completed_at,academic_revision)
  values(p_session_id,v_teacher,v_session.student_id,nullif(pg_catalog.btrim(coalesce(p_covered_topics,'')),''),nullif(pg_catalog.btrim(coalesce(p_public_note,'')),''),nullif(pg_catalog.btrim(coalesce(p_next_goal,'')),''),p_board_image_url,p_board_snapshot,coalesce(p_shared_with_student,false),case when p_shared_with_student then pg_catalog.clock_timestamp() end,v_revision)
  on conflict(lesson_session_id) do update set covered_topics=excluded.covered_topics,public_note=excluded.public_note,next_goal=excluded.next_goal,
    board_image_url=excluded.board_image_url,board_snapshot=excluded.board_snapshot,shared_with_student=excluded.shared_with_student,
    completed_at=case when excluded.shared_with_student then coalesce(public.lesson_summaries.completed_at,pg_catalog.clock_timestamp()) else public.lesson_summaries.completed_at end,
    academic_revision=excluded.academic_revision;
  v_target:=learning_private.academic_active_evidence(v_session.student_id,'live_lesson_shared_summary','summary:'||p_session_id::text,'teacher_summary_shared');
  if coalesce(p_shared_with_student,false) then
    v_kind:=case when v_target is null then 'snapshot' else 'correction' end;
    v_evidence:=learning_private.emit_academic_evidence(v_session.student_id,v_teacher,'teacher','live_lesson_shared_summary','summary:'||p_session_id::text,v_revision,'teacher_summary_shared',v_kind,
      '{"completion_status":"completed","completion_source":"teacher_entered"}'::jsonb,pg_catalog.jsonb_build_object('session_id',p_session_id::text,'shared_with_student',true),
      pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,null,v_target); v_evidence_created:=true;
  elsif v_exists and v_row.shared_with_student and v_target is not null then
    v_evidence:=learning_private.emit_academic_evidence(v_session.student_id,v_teacher,'teacher','live_lesson_shared_summary','summary:'||p_session_id::text,v_revision,'teacher_summary_shared','tombstone','{}'::jsonb,
      pg_catalog.jsonb_build_object('session_id',p_session_id::text,'shared_with_student',false),pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,null,v_target); v_evidence_created:=true;
  end if;
  v_result:=pg_catalog.jsonb_build_object('status',case when v_evidence_created then coalesce(v_evidence->>'status','created') else 'created' end,
    'session_id',p_session_id,'source_revision',v_revision,'shared_with_student',coalesce(p_shared_with_student,false),'evidence_created',v_evidence_created);
  return learning_private.complete_academic_action(v_session.student_id,'live_lesson_shared_summary',p_client_action_id,'summary:'||p_session_id::text,v_result);
end;
$fn$;

create or replace function public.feedback_academic_lesson_summary(
  p_session_id uuid,p_feedback text,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_row public.lesson_summaries%rowtype; v_claim jsonb; v_early jsonb;
  v_target uuid; v_kind text:='snapshot'; v_revision bigint; v_evidence jsonb; v_result jsonb;
begin
  if p_feedback<>all(array['anladim','tekrar_gerekli','yeniden_anlatilmali']::text[]) then return '{"status":"validation_rejected"}'::jsonb; end if;
  select * into v_row from public.lesson_summaries where lesson_session_id=p_session_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_row.student_id<>v_student or not v_row.shared_with_student then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_row.student_feedback is not distinct from p_feedback then return pg_catalog.jsonb_build_object('status','no_change','session_id',p_session_id,'source_revision',v_row.academic_revision); end if;
  v_claim:=learning_private.claim_academic_action(v_student,'live_lesson_shared_summary',p_client_action_id,'lesson_summary_feedback',pg_catalog.jsonb_build_object('session_id',p_session_id,'feedback',p_feedback));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_revision+1; v_target:=learning_private.academic_active_evidence(v_student,'live_lesson_shared_summary','feedback:'||p_session_id::text,'student_feedback_reported');
  if v_target is not null then v_kind:='correction'; end if;
  update public.lesson_summaries set student_feedback=p_feedback,student_feedback_at=pg_catalog.clock_timestamp(),academic_revision=v_revision where lesson_session_id=p_session_id;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','live_lesson_shared_summary','feedback:'||p_session_id::text,v_revision,'student_feedback_reported',v_kind,
    pg_catalog.jsonb_build_object('completion_status','completed','completion_source','student_reported'),pg_catalog.jsonb_build_object('session_id',p_session_id::text,'shared_with_student',true,'feedback_kind',p_feedback),
    pg_catalog.jsonb_build_object('session_id',p_session_id::text),null,null,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','session_id',p_session_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_student,'live_lesson_shared_summary',p_client_action_id,'feedback:'||p_session_id::text,v_result);
end;
$fn$;

-- M36 — başka profil kolonlarını kabul etmeyen context_only hedef snapshot'ı.
create or replace function public.save_academic_student_goal(
  p_grade smallint,p_target_exam text,p_is_exam_year boolean,p_exam_year smallint,p_exam_date date,p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid:=auth.uid(); v_row public.profiles%rowtype; v_claim jsonb; v_early jsonb;
  v_target uuid; v_kind text:='snapshot'; v_revision bigint; v_evidence jsonb; v_result jsonb; v_precision text;
begin
  select * into v_row from public.profiles where id=v_student for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_row.role<>'student' then return '{"status":"unauthorized"}'::jsonb; end if;
  if (p_grade is not null and p_grade not between 5 and 13)
     or (p_target_exam is not null and p_target_exam<>all(array['LGS','YKS','KPSS','YOK']::text[]))
     or (p_exam_year is not null and p_exam_year not between 2020 and 2100)
     or (p_target_exam='YOK' and (p_is_exam_year is not null or p_exam_year is not null or p_exam_date is not null)) then return '{"status":"validation_rejected"}'::jsonb; end if;
  if v_row.grade is not distinct from p_grade and v_row.target_exam is not distinct from p_target_exam
     and v_row.is_exam_year is not distinct from p_is_exam_year and v_row.exam_year is not distinct from p_exam_year
     and v_row.exam_date is not distinct from p_exam_date then
    return pg_catalog.jsonb_build_object('status','no_change','record_id',v_student,'source_revision',v_row.academic_goal_revision);
  end if;
  v_claim:=learning_private.claim_academic_action(v_student,'student_profile',p_client_action_id,'student_goal_save',
    pg_catalog.jsonb_build_object('grade',p_grade,'target_exam',p_target_exam,'is_exam_year',p_is_exam_year,'exam_year',p_exam_year,'exam_date',p_exam_date));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_goal_revision+1; v_target:=learning_private.academic_active_evidence(v_student,'student_profile',v_student::text,'education_goal_snapshot');
  if v_target is not null then v_kind:='correction'; end if;
  v_precision:=case when p_exam_date is not null then 'exact_date' when p_exam_year is not null then 'estimated_year' else 'unknown' end;
  update public.profiles set grade=p_grade,target_exam=p_target_exam,is_exam_year=p_is_exam_year,exam_year=p_exam_year,exam_date=p_exam_date,
    exam_profile_updated_at=pg_catalog.clock_timestamp(),academic_goal_revision=v_revision where id=v_student;
  v_evidence:=learning_private.emit_academic_evidence(v_student,v_student,'student','student_profile',v_student::text,v_revision,'education_goal_snapshot',v_kind,'{}'::jsonb,
    pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object('target_exam',p_target_exam,'grade_level',p_grade,'exam_date_precision',v_precision)),'{}'::jsonb,null,null,v_target);
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_student,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_student,'student_profile',p_client_action_id,v_student::text,v_result);
end;
$fn$;

-- M03 — günlük çalışma.
create or replace function public.create_academic_daily_log(
  p_study_date date, p_topic text, p_duration_minutes integer,
  p_correct integer, p_incorrect integer, p_empty integer,
  p_notes text, p_entry_origin text, p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_student uuid := auth.uid(); v_role text; v_claim jsonb; v_early jsonb;
  v_id uuid := pg_catalog.gen_random_uuid(); v_evidence jsonb; v_result jsonb; v_event text;
begin
  select profile.role into v_role from public.profiles as profile where profile.id = v_student;
  if v_role <> 'student' then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_study_date is null or p_study_date > (pg_catalog.clock_timestamp() at time zone 'Europe/Istanbul')::date
     or nullif(pg_catalog.btrim(coalesce(p_topic,'')), '') is null
     or p_entry_origin<>all(array['manual_external_self_report','manual_platform_self_report','ai_coach_confirmed','legacy_unknown']::text[])
     or (coalesce(p_duration_minutes,0) = 0 and coalesce(p_correct,0) + coalesce(p_incorrect,0) + coalesce(p_empty,0) = 0) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_event:=case when coalesce(p_duration_minutes,0)>0 then 'study_session_reported' else 'question_counts_reported' end;
  v_claim := learning_private.claim_academic_action(v_student, 'daily_logs', p_client_action_id, 'daily_log_create',
    pg_catalog.jsonb_build_object('date',p_study_date,'topic',p_topic,'duration',p_duration_minutes,'correct',p_correct,'incorrect',p_incorrect,'empty',p_empty,'note_present',nullif(pg_catalog.btrim(coalesce(p_notes,'')),'') is not null,'entry_origin',p_entry_origin));
  v_early := learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  insert into public.daily_logs (id, student_id, study_date, topic, duration_minutes, correct, incorrect, empty, notes, academic_revision)
  values (v_id, v_student, p_study_date, pg_catalog.btrim(p_topic), coalesce(p_duration_minutes,0), coalesce(p_correct,0), coalesce(p_incorrect,0), coalesce(p_empty,0), nullif(pg_catalog.btrim(coalesce(p_notes,'')),''), 1);
  v_evidence := learning_private.emit_academic_evidence(v_student,v_student,'student','daily_logs',v_id::text,1,v_event,'event',
    learning_private.academic_answer_measurement(p_correct,p_incorrect,p_empty,null,p_duration_minutes,'student_reported'),
    pg_catalog.jsonb_build_object('note_present',nullif(pg_catalog.btrim(coalesce(p_notes,'')),'') is not null,'entry_origin',p_entry_origin), '{}'::jsonb,p_study_date);
  v_result := pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',v_id,'source_revision',1);
  return learning_private.complete_academic_action(v_student,'daily_logs',p_client_action_id,v_id::text,v_result);
end;
$fn$;

create or replace function public.update_academic_daily_log(
  p_record_id uuid, p_duration_minutes integer, p_correct integer,
  p_incorrect integer, p_empty integer, p_client_action_id uuid
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid := auth.uid(); v_role text; v_row public.daily_logs%rowtype;
  v_claim jsonb; v_early jsonb; v_revision bigint; v_target uuid; v_evidence jsonb; v_result jsonb; v_event text;
begin
  select profile.role into v_role from public.profiles as profile where profile.id = v_actor;
  select * into v_row from public.daily_logs where id = p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if not (v_actor = v_row.student_id or (v_role='teacher' and learning_private.academic_teacher_authorized(v_actor,v_row.student_id))) then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_row.duration_minutes = coalesce(p_duration_minutes,0) and v_row.correct = coalesce(p_correct,0)
     and v_row.incorrect = coalesce(p_incorrect,0) and v_row.empty = coalesce(p_empty,0) then
    return pg_catalog.jsonb_build_object('status','no_change','record_id',p_record_id,'source_revision',v_row.academic_revision);
  end if;
  v_claim := learning_private.claim_academic_action(v_row.student_id,'daily_logs',p_client_action_id,'daily_log_update',
    pg_catalog.jsonb_build_object('record_id',p_record_id,'duration',p_duration_minutes,'correct',p_correct,'incorrect',p_incorrect,'empty',p_empty));
  v_early := learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision := v_row.academic_revision + 1;
  select semantic_event_type into v_event from public.learning_evidence_effective where student_id=v_row.student_id and source_code='daily_logs' and source_record_id=p_record_id::text limit 1;
  v_target := learning_private.academic_active_evidence(v_row.student_id,'daily_logs',p_record_id::text,v_event);
  if v_target is null then raise exception using errcode='P4001', message='phase4_correction_target_missing'; end if;
  update public.daily_logs set duration_minutes=coalesce(p_duration_minutes,0),correct=coalesce(p_correct,0),incorrect=coalesce(p_incorrect,0),empty=coalesce(p_empty,0),academic_revision=v_revision where id=p_record_id;
  v_evidence := learning_private.emit_academic_evidence(v_row.student_id,v_actor,v_role,'daily_logs',p_record_id::text,v_revision,v_event,'correction',
    learning_private.academic_answer_measurement(p_correct,p_incorrect,p_empty,null,p_duration_minutes,case when v_role='teacher' then 'teacher_entered' else 'student_reported' end),
    pg_catalog.jsonb_build_object('note_present',v_row.notes is not null,'entry_origin',case when v_role='teacher' then 'teacher_correction' else 'manual_external_self_report' end),'{}'::jsonb,v_row.study_date,null,v_target);
  v_result := pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',p_record_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_row.student_id,'daily_logs',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function public.delete_academic_daily_log(p_record_id uuid,p_client_action_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
declare
  v_actor uuid:=auth.uid(); v_row public.daily_logs%rowtype; v_claim jsonb; v_early jsonb;
  v_target uuid; v_revision bigint; v_evidence jsonb; v_result jsonb; v_event text;
begin
  select * into v_row from public.daily_logs where id=p_record_id for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  if v_actor<>v_row.student_id then return '{"status":"unauthorized"}'::jsonb; end if;
  v_claim:=learning_private.claim_academic_action(v_row.student_id,'daily_logs',p_client_action_id,'daily_log_delete',pg_catalog.jsonb_build_object('record_id',p_record_id));
  v_early:=learning_private.academic_claim_result(v_claim); if v_early is not null then return v_early; end if;
  v_revision:=v_row.academic_revision+1;
  select semantic_event_type into v_event from public.learning_evidence_effective where student_id=v_row.student_id and source_code='daily_logs' and source_record_id=p_record_id::text limit 1;
  v_target:=learning_private.academic_active_evidence(v_row.student_id,'daily_logs',p_record_id::text,v_event);
  if v_target is null then raise exception using errcode='P4001',message='phase4_tombstone_target_missing'; end if;
  v_evidence:=learning_private.emit_academic_evidence(v_row.student_id,v_actor,'student','daily_logs',p_record_id::text,v_revision,v_event,'tombstone','{}'::jsonb,
    pg_catalog.jsonb_build_object('note_present',v_row.notes is not null,'entry_origin','manual_external_self_report'),'{}'::jsonb,null,null,v_target);
  delete from public.daily_logs where id=p_record_id;
  v_result:=pg_catalog.jsonb_build_object('status',v_evidence->>'status','record_id',p_record_id,'source_revision',v_revision);
  return learning_private.complete_academic_action(v_row.student_id,'daily_logs',p_client_action_id,p_record_id::text,v_result);
end;
$fn$;

create or replace function learning_private.academic_claim_result(p_claim jsonb)
returns jsonb language sql immutable set search_path = '' as $fn$
  select case p_claim ->> 'claim_status'
    when 'duplicate' then coalesce(p_claim -> 'result', '{"status":"duplicate"}'::jsonb)
    when 'idempotency_conflict' then '{"status":"idempotency_conflict"}'::jsonb
    when 'processing' then '{"status":"retryable_failure"}'::jsonb
    when 'validation_rejected' then '{"status":"validation_rejected"}'::jsonb
    else null end;
$fn$;

create or replace function learning_private.complete_academic_action(
  p_student_id uuid, p_source_code text, p_client_action_id uuid,
  p_source_record_id text, p_result jsonb
)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin
  if p_result is null or pg_catalog.jsonb_typeof(p_result) <> 'object'
     or pg_catalog.octet_length(p_result::text) > 4096 then
    raise exception using errcode = 'P4001', message = 'phase4_safe_result_invalid';
  end if;
  update learning_private.learning_academic_action_receipts
     set status = 'completed', source_record_id = p_source_record_id,
         safe_result = p_result, completed_at = pg_catalog.clock_timestamp(),
         updated_at = pg_catalog.clock_timestamp()
   where student_id = p_student_id and source_code = p_source_code
     and client_action_id = p_client_action_id and status = 'processing';
  if not found then raise exception using errcode = 'P4001', message = 'phase4_receipt_missing'; end if;
  return p_result;
end;
$fn$;

-- Kısıtlara eski profil migration'ı uygulanmamış yerel kurulumlarda da aynı anlamı ver.
do $do$
begin
  if not exists (select 1 from pg_catalog.pg_constraint where conname='profiles_target_exam_check' and conrelid='public.profiles'::pg_catalog.regclass) then
    alter table public.profiles add constraint profiles_target_exam_check check (target_exam is null or target_exam in ('LGS','YKS','KPSS','YOK'));
  end if;
  if not exists (select 1 from pg_catalog.pg_constraint where conname='profiles_grade_check' and conrelid='public.profiles'::pg_catalog.regclass) then
    alter table public.profiles add constraint profiles_grade_check check (grade is null or grade between 5 and 13);
  end if;
  if not exists (select 1 from pg_catalog.pg_constraint where conname='profiles_exam_year_check' and conrelid='public.profiles'::pg_catalog.regclass) then
    alter table public.profiles add constraint profiles_exam_year_check check (exam_year is null or exam_year between 2020 and 2100);
  end if;
end
$do$;

-- Storage nesnesi yalnız private kovadadır. Object path ortak kanıta girmez.
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types)
values('academic-question-images','academic-question-images',false,10485760,array['image/jpeg','image/png','image/webp']::text[])
on conflict(id) do update set public=false,file_size_limit=excluded.file_size_limit,allowed_mime_types=excluded.allowed_mime_types;

alter table public.learning_academic_media enable row level security;
alter table public.learning_academic_media force row level security;
drop policy if exists academic_media_member_read on public.learning_academic_media;
create policy academic_media_member_read on public.learning_academic_media for select to authenticated using (
  auth.uid()=student_id or auth.uid()=actor_id or learning_private.academic_teacher_authorized(auth.uid(),student_id)
);

drop policy if exists academic_question_object_read on storage.objects;
create policy academic_question_object_read on storage.objects for select to authenticated using (
  bucket_id='academic-question-images' and (
    auth.uid()::text=(storage.foldername(name))[2]
    or auth.uid()::text=(storage.foldername(name))[3]
    or learning_private.academic_teacher_authorized(auth.uid(),((storage.foldername(name))[2])::uuid)
  )
);
drop policy if exists academic_question_object_insert on storage.objects;
create policy academic_question_object_insert on storage.objects for insert to authenticated with check (
  bucket_id='academic-question-images'
  and auth.uid()::text=(storage.foldername(name))[3]
  and (auth.uid()::text=(storage.foldername(name))[2]
    or learning_private.academic_teacher_authorized(auth.uid(),((storage.foldername(name))[2])::uuid))
);
drop policy if exists academic_question_object_update on storage.objects;
create policy academic_question_object_update on storage.objects for update to authenticated using (
  bucket_id='academic-question-images' and auth.uid()::text=(storage.foldername(name))[3]
) with check (bucket_id='academic-question-images' and auth.uid()::text=(storage.foldername(name))[3]);
drop policy if exists academic_question_object_delete on storage.objects;
create policy academic_question_object_delete on storage.objects for delete to authenticated using (
  bucket_id='academic-question-images' and auth.uid()::text=(storage.foldername(name))[3]
);

-- Private işlem fişi/denetim/claim tabloları normal rollere hiç açılmaz.
alter table learning_private.learning_academic_action_receipts enable row level security;
alter table learning_private.learning_academic_action_receipts force row level security;
alter table learning_private.learning_academic_source_revisions enable row level security;
alter table learning_private.learning_academic_source_revisions force row level security;
alter table learning_private.learning_academic_external_claims enable row level security;
alter table learning_private.learning_academic_external_claims force row level security;
revoke all on schema learning_private from public,anon,authenticated;
revoke all on learning_private.learning_academic_action_receipts from public,anon,authenticated;
revoke all on learning_private.learning_academic_source_revisions from public,anon,authenticated;
revoke all on learning_private.learning_academic_external_claims from public,anon,authenticated;

-- Eski doğrudan DML politikaları kalsa bile tablo yetkisi kaynak-RPC sınırını atlayamaz.
revoke insert,update,delete on public.daily_logs,public.mock_exams,public.mock_exam_subjects,
  public.exams,public.homeworks,public.questions,public.ai_solution_sessions,public.ai_solution_events,
  public.lesson_participants,public.lesson_summaries,public.learning_academic_media from anon,authenticated;
revoke update on public.profiles from anon,authenticated;
grant update(full_name) on public.profiles to authenticated;

-- Eski katılım ve summary writer'ları action-id taşımadığı için tarayıcıya kapalıdır.
revoke execute on function public.lesson_join(uuid) from public,anon,authenticated;
revoke execute on function public.lesson_leave(uuid,integer) from public,anon,authenticated;
revoke execute on function public.lesson_student_feedback(uuid,text) from public,anon,authenticated;

revoke execute on function public.create_academic_daily_log(date,text,integer,integer,integer,integer,text,text,uuid) from public,anon,authenticated;
revoke execute on function public.update_academic_daily_log(uuid,integer,integer,integer,integer,uuid) from public,anon,authenticated;
revoke execute on function public.delete_academic_daily_log(uuid,uuid) from public,anon,authenticated;
revoke execute on function public.create_academic_mock_exam(text,text,date,integer,jsonb,uuid) from public,anon,authenticated;
revoke execute on function public.delete_academic_mock_exam(uuid,uuid) from public,anon,authenticated;
revoke execute on function public.create_academic_branch_exam(uuid,text,text,text,date,integer,integer,integer,integer,uuid) from public,anon,authenticated;
revoke execute on function public.delete_academic_branch_exam(uuid,uuid) from public,anon,authenticated;
revoke execute on function public.assign_academic_homework(uuid,text,text,date,uuid,uuid) from public,anon,authenticated;
revoke execute on function public.update_academic_homework_status(uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.delete_academic_homework(uuid,uuid) from public,anon,authenticated;
revoke execute on function public.stage_academic_question_media(uuid,text,text,text,integer,uuid) from public,anon,authenticated;
revoke execute on function public.submit_academic_question(text,text,text,uuid,uuid) from public,anon,authenticated;
revoke execute on function public.share_academic_teacher_question(uuid,text,text,text,uuid,uuid) from public,anon,authenticated;
revoke execute on function public.reply_academic_question(uuid,text,uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.update_academic_question_status(uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.save_academic_question_canvas_draft(uuid,jsonb,uuid) from public,anon,authenticated;
revoke execute on function public.publish_academic_question_canvas(uuid,uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.claim_academic_ai_solve(text,text,uuid) from public,anon,authenticated;
revoke execute on function public.finalize_academic_ai_solve(uuid,uuid,jsonb) from public,anon,authenticated;
revoke execute on function public.record_academic_ai_solve_help(uuid,uuid,text,integer,text,text,text,text,uuid) from public,anon,authenticated;
revoke execute on function public.record_academic_ai_solve_check(uuid,uuid,boolean,jsonb,uuid) from public,anon,authenticated;
revoke execute on function public.report_academic_ai_solve_result(uuid,boolean,uuid) from public,anon,authenticated;
revoke execute on function public.feedback_academic_ai_solve(uuid,text,text,text,uuid) from public,anon,authenticated;
revoke execute on function public.update_academic_ai_review(uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.join_academic_lesson(uuid,uuid) from public,anon,authenticated;
revoke execute on function public.leave_academic_lesson(uuid,integer,uuid) from public,anon,authenticated;
revoke execute on function public.save_academic_lesson_summary(uuid,text,text,text,text,jsonb,boolean,uuid) from public,anon,authenticated;
revoke execute on function public.feedback_academic_lesson_summary(uuid,text,uuid) from public,anon,authenticated;
revoke execute on function public.save_academic_student_goal(smallint,text,boolean,smallint,date,uuid) from public,anon,authenticated;

grant execute on function public.create_academic_daily_log(date,text,integer,integer,integer,integer,text,text,uuid),
  public.update_academic_daily_log(uuid,integer,integer,integer,integer,uuid),public.delete_academic_daily_log(uuid,uuid),
  public.create_academic_mock_exam(text,text,date,integer,jsonb,uuid),public.delete_academic_mock_exam(uuid,uuid),
  public.create_academic_branch_exam(uuid,text,text,text,date,integer,integer,integer,integer,uuid),public.delete_academic_branch_exam(uuid,uuid),
  public.assign_academic_homework(uuid,text,text,date,uuid,uuid),public.update_academic_homework_status(uuid,text,uuid),public.delete_academic_homework(uuid,uuid),
  public.stage_academic_question_media(uuid,text,text,text,integer,uuid),public.submit_academic_question(text,text,text,uuid,uuid),
  public.share_academic_teacher_question(uuid,text,text,text,uuid,uuid),public.reply_academic_question(uuid,text,uuid,text,uuid),
  public.update_academic_question_status(uuid,text,uuid),public.save_academic_question_canvas_draft(uuid,jsonb,uuid),public.publish_academic_question_canvas(uuid,uuid,text,uuid),
  public.claim_academic_ai_solve(text,text,uuid),public.report_academic_ai_solve_result(uuid,boolean,uuid),
  public.feedback_academic_ai_solve(uuid,text,text,text,uuid),public.update_academic_ai_review(uuid,text,uuid),
  public.join_academic_lesson(uuid,uuid),public.leave_academic_lesson(uuid,integer,uuid),
  public.save_academic_lesson_summary(uuid,text,text,text,text,jsonb,boolean,uuid),public.feedback_academic_lesson_summary(uuid,text,uuid),
  public.save_academic_student_goal(smallint,text,boolean,smallint,date,uuid)
to authenticated;

grant execute on function public.finalize_academic_ai_solve(uuid,uuid,jsonb),
  public.record_academic_ai_solve_help(uuid,uuid,text,integer,text,text,text,text,uuid),
  public.record_academic_ai_solve_check(uuid,uuid,boolean,jsonb,uuid)
to service_role;

commit;
