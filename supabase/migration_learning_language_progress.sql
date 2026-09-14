-- ============================================================================
-- DRKOÇ AI Koç — Faz 5 / Hesaba bağlı dil ilerlemesi
--
-- Faz 2 migration_learning_evidence_network.sql dosyasından SONRA uygulanır.
-- Canlı veri taramaz, cihaz localStorage verisine erişmez ve backfill çalıştırmaz.
-- Eski cihaz kaydı yalnız öğrencinin açık onayıyla public RPC üzerinden aktarılır.
-- ============================================================================

begin;

-- Faz 2 sicil satırları değişmez. Faz 5, M27–M30 için ayrı ve sürümlü bir
-- çalışma zamanı izdüşümü kurar.
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
  'learning-language-registry@1', source_code, matrix_id, classification, true,
  contract_version, 'account_bound_language_progress', module_owner,
  'authenticated_student_runtime', 'account + language + client action id',
  array['event', 'snapshot', 'correction', 'tombstone']::text[],
  semantic_event_types, evidence_class_by_event, default_evidence_class,
  array['correct_count', 'incorrect_count', 'blank_count', 'total_count',
    'marked_count', 'accuracy', 'duration_minutes', 'completion_status',
    'help_used']::text[],
  array['language', 'cefr_level', 'lesson_id', 'skill', 'storage_version',
    'snapshot_section', 'program_context', 'review_outcome', 'activity_id',
    'content_revision']::text[],
  'language_program', 'adaptLanguageSnapshot', 'learning-language-adapters@1',
  'topic-resolver@1', 'topic-resolver@1', 'server_after_account_binding',
  'authenticated_student', 'event_log_plus_versioned_snapshot',
  source_locator_policy, retention_class, 'locally_implemented_live_not_applied'
from public.learning_source_contracts
where registry_version = 'learning-source-registry@1'
  and matrix_id in ('M27', 'M28', 'M29', 'M30')
on conflict (registry_version, source_code) do nothing;

create or replace function learning_private.language_canonical_jsonb_text(p_value jsonb)
returns text
language plpgsql
immutable
strict
set search_path = ''
as $fn$
declare
  v_type text := pg_catalog.jsonb_typeof(p_value);
  v_result text;
begin
  if v_type = 'object' then
    select '{' || coalesce(pg_catalog.string_agg(
      pg_catalog.to_jsonb(item.key)::text || ':'
        || learning_private.language_canonical_jsonb_text(item.value),
      ',' order by item.key collate "C"
    ), '') || '}' into v_result
      from pg_catalog.jsonb_each(p_value) as item;
    return v_result;
  elsif v_type = 'array' then
    select '[' || coalesce(pg_catalog.string_agg(
      learning_private.language_canonical_jsonb_text(item.value),
      ',' order by item.ordinality
    ), '') || ']' into v_result
      from pg_catalog.jsonb_array_elements(p_value) with ordinality as item(value, ordinality);
    return v_result;
  end if;
  return p_value::text;
end;
$fn$;

create or replace function learning_private.language_sha256_jsonb(p_value jsonb)
returns text
language sql
immutable
strict
set search_path = ''
as $fn$
  select pg_catalog.encode(pg_catalog.sha256(pg_catalog.convert_to(
    learning_private.language_canonical_jsonb_text(p_value), 'UTF8'
  )), 'hex');
$fn$;

create or replace function learning_private.language_current_student_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $fn$
  select profile.id from public.profiles as profile
   where profile.id = auth.uid() and profile.role = 'student';
$fn$;

create or replace function learning_private.language_source_code(p_language text)
returns text
language sql
immutable
set search_path = ''
as $fn$
  select case p_language
    when 'en' then 'ingilizce_learning'
    when 'de' then 'almanca_learning'
    when 'fr' then 'fransizca_learning'
    when 'es' then 'ispanyolca_learning'
  end;
$fn$;

create or replace function learning_private.language_public_snapshot_is_valid(p_snapshot jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_key text;
  v_allowed constant text[] := array[
    'surum', 'profil', 'tespit', 'dersler', 'kartlar', 'beceriler', 'izler',
    'gunluk', 'yazmalar', 'favoriler', 'sonDers', 'arayuz', 'kartDesteleri',
    'kartFavorileri', '_sync'
  ]::text[];
begin
  if p_snapshot is null or pg_catalog.jsonb_typeof(p_snapshot) <> 'object'
     or pg_catalog.octet_length(p_snapshot::text) > 1500000
     or p_snapshot ->> 'surum' <> '1'
     or coalesce(p_snapshot -> 'yazmalar', '{}'::jsonb) <> '{}'::jsonb
     or p_snapshot #> '{tespit,yazma,metin}' is not null then
    return false;
  end if;
  for v_key in select key from pg_catalog.jsonb_object_keys(p_snapshot) as keys(key) loop
    if not (v_key = any(v_allowed)) then return false; end if;
  end loop;
  if p_snapshot -> 'dersler' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'dersler') <> 'object' then return false; end if;
  if p_snapshot -> 'kartlar' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'kartlar') <> 'object' then return false; end if;
  if p_snapshot -> 'beceriler' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'beceriler') <> 'object' then return false; end if;
  if p_snapshot -> 'gunluk' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'gunluk') <> 'object' then return false; end if;
  if p_snapshot::text ~* '"(answer|answers|answer_key|raw_answer|dogru_cevap|correct_answer)"[[:space:]]*:' then
    return false;
  end if;
  return true;
end;
$fn$;

create or replace function learning_private.language_private_snapshot_is_valid(p_snapshot jsonb)
returns boolean
language plpgsql
immutable
set search_path = ''
as $fn$
declare v_key text;
begin
  if p_snapshot is null or pg_catalog.jsonb_typeof(p_snapshot) <> 'object'
     or pg_catalog.octet_length(p_snapshot::text) > 1500000 then return false; end if;
  for v_key in select key from pg_catalog.jsonb_object_keys(p_snapshot) as keys(key) loop
    if v_key <> all(array['yazmalar', 'placementWriting']::text[]) then return false; end if;
  end loop;
  if p_snapshot -> 'yazmalar' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'yazmalar') <> 'object' then return false; end if;
  if p_snapshot -> 'placementWriting' is not null
     and pg_catalog.jsonb_typeof(p_snapshot -> 'placementWriting') not in ('string', 'null') then return false; end if;
  if pg_catalog.char_length(coalesce(p_snapshot ->> 'placementWriting', '')) > 20000 then return false; end if;
  return true;
end;
$fn$;

create or replace function learning_private.language_progress_summary(
  p_language text,
  p_program text,
  p_snapshot jsonb
)
returns jsonb
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_lesson_count integer := 0;
  v_review_count integer := 0;
  v_completed integer := 0;
  v_mastered integer := 0;
  v_active_days integer := 0;
  v_minutes integer := 0;
begin
  select count(*),
    count(*) filter (where lesson.value ->> 'durum' in ('tamamlandi','gucleniyor','ustalasildi','tekrar-gerekli')
    or lesson.value ->> 'tamamlandiMi' = 'true'),
    count(*) filter (where lesson.value ->> 'durum' = 'ustalasildi')
    into v_lesson_count, v_completed, v_mastered
    from pg_catalog.jsonb_each(coalesce(p_snapshot -> 'dersler', '{}'::jsonb)) as lesson;
  select count(*) into v_review_count
    from pg_catalog.jsonb_each(coalesce(p_snapshot -> 'kartlar', '{}'::jsonb));
  select count(*) filter (where coalesce((day.value ->> 'alistirma')::integer, 0) > 0),
    coalesce(sum(coalesce((day.value ->> 'dakika')::integer, 0)), 0)
    into v_active_days, v_minutes
    from pg_catalog.jsonb_each(coalesce(p_snapshot -> 'gunluk', '{}'::jsonb)) as day;
  return pg_catalog.jsonb_build_object(
    'schema_version', 'language-progress-summary@1',
    'language', p_language,
    'program_context', p_program,
    'cefr_level', p_snapshot #>> '{tespit,genelSeviye}',
    'lesson_count', v_lesson_count,
    'completed_lesson_count', v_completed,
    'mastered_lesson_count', v_mastered,
    'review_item_count', v_review_count,
    'skill_summary', coalesce(p_snapshot -> 'beceriler', '{}'::jsonb),
    'active_days', v_active_days,
    'total_minutes_snapshot', v_minutes,
    'unresolved_conflict_count', pg_catalog.jsonb_array_length(coalesce(p_snapshot #> '{_sync,conflicts}', '[]'::jsonb)),
    'reset_generation', coalesce((p_snapshot #>> '{_sync,generation}')::integer, 0)
  );
exception when invalid_text_representation or numeric_value_out_of_range then
  return null;
end;
$fn$;

create table if not exists public.student_language_progress_states (
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null,
  program_context text not null default 'independent_language_learning',
  storage_version integer not null,
  curriculum_version text not null,
  content_version text not null,
  revision integer not null default 1,
  reset_generation integer not null default 0,
  progress_snapshot jsonb not null,
  progress_summary jsonb not null,
  snapshot_hash text not null,
  client_source text not null,
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  deleted_at timestamptz,
  primary key (student_id, language_code, program_context),
  constraint language_state_language_check check (language_code in ('en','de','fr','es')),
  constraint language_state_program_check check (program_context = 'independent_language_learning'),
  constraint language_state_storage_check check (storage_version = 1),
  constraint language_state_revision_check check (revision > 0 and reset_generation >= 0),
  constraint language_state_version_check check (
    curriculum_version = 'drkoc-language-curriculum@1'
    and content_version = 'drkoc-language-content@1'
  ),
  constraint language_state_snapshot_check check (learning_private.language_public_snapshot_is_valid(progress_snapshot)),
  constraint language_state_summary_check check (
    pg_catalog.jsonb_typeof(progress_summary) = 'object'
    and progress_summary ->> 'schema_version' = 'language-progress-summary@1'
    and progress_summary ->> 'language' = language_code
    and progress_summary ->> 'program_context' = program_context
  ),
  constraint language_state_hash_check check (snapshot_hash ~ '^[0-9a-f]{64}$'),
  constraint language_state_client_check check (client_source in ('web','pwa'))
);

create index if not exists student_language_progress_updated_idx
  on public.student_language_progress_states(student_id, updated_at desc)
  where deleted_at is null;

create table if not exists learning_private.student_language_private_work (
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null check (language_code in ('en','de','fr','es')),
  program_context text not null check (program_context = 'independent_language_learning'),
  revision integer not null check (revision > 0),
  private_snapshot jsonb not null check (learning_private.language_private_snapshot_is_valid(private_snapshot)),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  primary key (student_id, language_code, program_context),
  foreign key (student_id, language_code, program_context)
    references public.student_language_progress_states(student_id, language_code, program_context)
    on delete cascade
);

create table if not exists public.student_language_progress_revisions (
  revision_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null check (language_code in ('en','de','fr','es')),
  program_context text not null check (program_context = 'independent_language_learning'),
  revision integer not null check (revision > 0),
  reset_generation integer not null check (reset_generation >= 0),
  snapshot_hash text not null check (snapshot_hash ~ '^[0-9a-f]{64}$'),
  client_action_id uuid not null,
  client_source text not null check (client_source in ('web','pwa')),
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  unique (student_id, language_code, program_context, revision),
  unique (student_id, language_code, client_action_id)
);

create table if not exists public.student_language_activity_events (
  event_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null,
  language_code text not null check (language_code in ('en','de','fr','es')),
  program_context text not null check (program_context = 'independent_language_learning'),
  activity_type text not null check (activity_type in (
    'placement_snapshot','lesson_result_snapshot','review_result_snapshot',
    'skill_snapshot','self_report_snapshot'
  )),
  activity_id text not null check (
    pg_catalog.char_length(activity_id) between 1 and 192
    and activity_id ~ '^[A-Za-z0-9][A-Za-z0-9._:-]{0,191}$'
  ),
  content_revision text not null check (
    pg_catalog.char_length(content_revision) between 1 and 128
    and content_revision !~ '[[:cntrl:]]'
  ),
  skill_domain text not null check (skill_domain in (
    'general','kelime','gramer','dizim','okuma','dinleme','yazma','telaffuz',
    'dusunme','tanima','baglam','tamamlama','uretim'
  )),
  correct_count integer check (correct_count between 0 and 10000),
  incorrect_count integer check (incorrect_count between 0 and 10000),
  blank_count integer check (blank_count between 0 and 10000),
  help_count integer check (help_count between 0 and 10000),
  review_outcome text check (review_outcome in ('recalled','forgotten')),
  completion_status text check (completion_status in ('answered','updated','completed','skipped')),
  duration_minutes numeric check (duration_minutes between 0 and 1440),
  cefr_level text check (cefr_level in ('Pre-A1','A1','A2','B1','B2','C1','C2')),
  occurred_at timestamptz not null,
  client_source text not null check (client_source in ('web','pwa')),
  client_action_id uuid not null,
  evidence_record_id uuid references public.learning_evidence_records(record_id),
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  unique (student_id, source_code, client_action_id),
  constraint language_activity_source_check check (
    source_code = learning_private.language_source_code(language_code)
  )
);

create index if not exists student_language_activity_student_time_idx
  on public.student_language_activity_events(student_id, language_code, occurred_at desc);

create table if not exists public.student_language_sync_conflicts (
  conflict_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null check (language_code in ('en','de','fr','es')),
  program_context text not null check (program_context = 'independent_language_learning'),
  client_action_id uuid not null,
  expected_revision integer not null,
  current_revision integer not null,
  payload_hash text not null check (payload_hash ~ '^[0-9a-f]{64}$'),
  resolution_status text not null default 'pending' check (resolution_status in ('pending','resolved')),
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  resolved_at timestamptz,
  unique (student_id, language_code, client_action_id)
);

create table if not exists public.student_language_import_receipts (
  import_id uuid primary key,
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null check (language_code in ('en','de','fr','es')),
  storage_version integer not null check (storage_version = 1),
  snapshot_hash text not null check (snapshot_hash ~ '^[0-9a-f]{64}$'),
  accepted_revision integer not null check (accepted_revision > 0),
  imported_at timestamptz not null default pg_catalog.clock_timestamp()
);

create table if not exists learning_private.student_language_import_claims (
  import_id uuid primary key,
  student_id uuid not null references public.profiles(id) on delete cascade,
  language_code text not null check (language_code in ('en','de','fr','es')),
  status text not null default 'pending' check (status in ('pending','accepted')),
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp()
);

create table if not exists learning_private.student_language_action_receipts (
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null,
  client_action_id uuid not null,
  action_kind text not null check (action_kind in ('snapshot','activity','delete')),
  payload_hash text not null check (payload_hash ~ '^[0-9a-f]{64}$'),
  result jsonb,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  primary key (student_id, source_code, client_action_id)
);

create or replace function learning_private.claim_language_action(
  p_student uuid, p_source text, p_action uuid, p_kind text, p_payload_hash text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare v_existing learning_private.student_language_action_receipts%rowtype;
begin
  insert into learning_private.student_language_action_receipts(
    student_id, source_code, client_action_id, action_kind, payload_hash
  ) values (p_student, p_source, p_action, p_kind, p_payload_hash)
  on conflict do nothing;
  if found then return '{"status":"claimed"}'::jsonb; end if;
  select * into v_existing from learning_private.student_language_action_receipts
   where student_id=p_student and source_code=p_source and client_action_id=p_action;
  if v_existing.action_kind is distinct from p_kind
     or v_existing.payload_hash is distinct from p_payload_hash then
    return '{"status":"idempotency_conflict"}'::jsonb;
  end if;
  if v_existing.result is null then return '{"status":"retryable_failure"}'::jsonb; end if;
  return v_existing.result;
end;
$fn$;

create or replace function learning_private.complete_language_action(
  p_student uuid, p_source text, p_action uuid, p_result jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  update learning_private.student_language_action_receipts
     set result=p_result, completed_at=pg_catalog.clock_timestamp()
   where student_id=p_student and source_code=p_source and client_action_id=p_action;
  if not found then raise exception 'phase5_receipt_missing'; end if;
  return p_result;
end;
$fn$;

create or replace function public.get_my_language_progress(p_language_code text)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.language_current_student_id();
  v_state public.student_language_progress_states%rowtype;
  v_private jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if learning_private.language_source_code(p_language_code) is null then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  select * into v_state from public.student_language_progress_states
   where student_id=v_student and language_code=p_language_code
     and program_context='independent_language_learning';
  if not found then return '{"status":"empty","revision":0}'::jsonb; end if;
  if v_state.deleted_at is not null then return pg_catalog.jsonb_build_object(
    'status','empty','revision',v_state.revision,
    'reset_generation',v_state.reset_generation,'deleted_at',v_state.deleted_at
  ); end if;
  select private_snapshot into v_private
    from learning_private.student_language_private_work
   where student_id=v_student and language_code=p_language_code
     and program_context='independent_language_learning';
  return pg_catalog.jsonb_build_object(
    'status','available','snapshot',v_state.progress_snapshot,
    'private_snapshot',coalesce(v_private,'{"yazmalar":{},"placementWriting":null}'::jsonb),
    'summary',v_state.progress_summary,'revision',v_state.revision,
    'updated_at',v_state.updated_at
  );
end;
$fn$;

create or replace function public.get_my_language_progress_summary(p_language_code text default null)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare v_student uuid := learning_private.language_current_student_id(); v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_language_code is not null and learning_private.language_source_code(p_language_code) is null then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  select coalesce(pg_catalog.jsonb_agg(state.progress_summary order by state.language_code),'[]'::jsonb)
    into v_result from public.student_language_progress_states as state
   where state.student_id=v_student and state.deleted_at is null
     and (p_language_code is null or state.language_code=p_language_code);
  return pg_catalog.jsonb_build_object('status','available','summaries',v_result);
end;
$fn$;

create or replace function public.save_language_progress_snapshot(
  p_language_code text,
  p_program_context text,
  p_storage_version integer,
  p_curriculum_version text,
  p_content_version text,
  p_snapshot jsonb,
  p_private_snapshot jsonb,
  p_snapshot_hash text,
  p_expected_revision integer,
  p_client_source text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.language_current_student_id();
  v_source text := learning_private.language_source_code(p_language_code);
  v_payload_hash text;
  v_claim jsonb;
  v_existing public.student_language_progress_states%rowtype;
  v_revision integer;
  v_generation integer;
  v_summary jsonb;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_source is null or p_program_context <> 'independent_language_learning'
     or p_storage_version <> 1
     or p_curriculum_version <> 'drkoc-language-curriculum@1'
     or p_content_version <> 'drkoc-language-content@1'
     or p_expected_revision < 0 or p_client_action_id is null
     or p_client_source not in ('web','pwa')
     or not learning_private.language_public_snapshot_is_valid(p_snapshot)
     or not learning_private.language_private_snapshot_is_valid(p_private_snapshot) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_payload_hash := learning_private.language_sha256_jsonb(pg_catalog.jsonb_build_object(
    'progress',p_snapshot,'privateWork',p_private_snapshot
  ));
  if p_snapshot_hash is distinct from v_payload_hash then
    return '{"status":"validation_rejected","code":"snapshot_hash_mismatch"}'::jsonb;
  end if;
  v_claim := learning_private.claim_language_action(v_student,v_source,p_client_action_id,'snapshot',
    learning_private.language_sha256_jsonb(pg_catalog.jsonb_build_object(
      'language',p_language_code,'program',p_program_context,'snapshot_hash',p_snapshot_hash,
      'expected_revision',p_expected_revision,'client_source',p_client_source
    )));
  if v_claim ->> 'status' <> 'claimed' then return v_claim; end if;

  select * into v_existing from public.student_language_progress_states
   where student_id=v_student and language_code=p_language_code
     and program_context=p_program_context for update;
  if (found and v_existing.revision <> p_expected_revision)
     or (not found and p_expected_revision <> 0) then
    insert into public.student_language_sync_conflicts(
      student_id,language_code,program_context,client_action_id,
      expected_revision,current_revision,payload_hash
    ) values (v_student,p_language_code,p_program_context,p_client_action_id,
      p_expected_revision,coalesce(v_existing.revision,0),p_snapshot_hash)
    on conflict do nothing;
    return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
      pg_catalog.jsonb_build_object('status','revision_conflict','revision',coalesce(v_existing.revision,0)));
  end if;
  v_revision := coalesce(v_existing.revision,0)+1;
  v_generation := coalesce((p_snapshot #>> '{_sync,generation}')::integer,0);
  if v_existing.student_id is not null and v_generation < v_existing.reset_generation then
    return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
      pg_catalog.jsonb_build_object('status','revision_conflict','revision',v_existing.revision,'code','reset_generation_stale'));
  end if;
  v_summary := learning_private.language_progress_summary(p_language_code,p_program_context,p_snapshot);
  if v_summary is null then
    return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
      '{"status":"validation_rejected","code":"summary_invalid"}'::jsonb);
  end if;

  insert into public.student_language_progress_states(
    student_id,language_code,program_context,storage_version,curriculum_version,
    content_version,revision,reset_generation,progress_snapshot,progress_summary,
    snapshot_hash,client_source,updated_at,deleted_at
  ) values (v_student,p_language_code,p_program_context,p_storage_version,p_curriculum_version,
    p_content_version,v_revision,v_generation,p_snapshot,v_summary,p_snapshot_hash,
    p_client_source,pg_catalog.clock_timestamp(),null)
  on conflict (student_id,language_code,program_context) do update set
    storage_version=excluded.storage_version,curriculum_version=excluded.curriculum_version,
    content_version=excluded.content_version,revision=excluded.revision,
    reset_generation=excluded.reset_generation,progress_snapshot=excluded.progress_snapshot,
    progress_summary=excluded.progress_summary,snapshot_hash=excluded.snapshot_hash,
    client_source=excluded.client_source,updated_at=excluded.updated_at,deleted_at=null;
  insert into learning_private.student_language_private_work(
    student_id,language_code,program_context,revision,private_snapshot,updated_at
  ) values (v_student,p_language_code,p_program_context,v_revision,p_private_snapshot,pg_catalog.clock_timestamp())
  on conflict (student_id,language_code,program_context) do update set
    revision=excluded.revision,private_snapshot=excluded.private_snapshot,updated_at=excluded.updated_at;
  insert into public.student_language_progress_revisions(
    student_id,language_code,program_context,revision,reset_generation,
    snapshot_hash,client_action_id,client_source
  ) values (v_student,p_language_code,p_program_context,v_revision,v_generation,
    p_snapshot_hash,p_client_action_id,p_client_source);
  update public.student_language_sync_conflicts set
    resolution_status='resolved',resolved_at=pg_catalog.clock_timestamp()
   where student_id=v_student and language_code=p_language_code
     and program_context=p_program_context and resolution_status='pending';
  v_result := pg_catalog.jsonb_build_object('status','accepted','revision',v_revision,'summary',v_summary);
  return learning_private.complete_language_action(v_student,v_source,p_client_action_id,v_result);
exception when invalid_text_representation or numeric_value_out_of_range then
  return '{"status":"validation_rejected"}'::jsonb;
end;
$fn$;

create or replace function public.import_language_progress_snapshot(
  p_language_code text,
  p_program_context text,
  p_storage_version integer,
  p_curriculum_version text,
  p_content_version text,
  p_snapshot jsonb,
  p_private_snapshot jsonb,
  p_snapshot_hash text,
  p_expected_revision integer,
  p_client_source text,
  p_import_id uuid,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.language_current_student_id();
  v_claim learning_private.student_language_import_claims%rowtype;
  v_receipt public.student_language_import_receipts%rowtype;
  v_saved jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_import_id is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  select * into v_receipt from public.student_language_import_receipts where import_id=p_import_id;
  if found then
    if v_receipt.student_id <> v_student then return '{"status":"ownership_conflict"}'::jsonb; end if;
    return pg_catalog.jsonb_build_object('status','duplicate','revision',v_receipt.accepted_revision);
  end if;
  insert into learning_private.student_language_import_claims(import_id,student_id,language_code)
    values(p_import_id,v_student,p_language_code) on conflict do nothing;
  select * into v_claim from learning_private.student_language_import_claims
   where import_id=p_import_id for update;
  if v_claim.student_id <> v_student or v_claim.language_code <> p_language_code then
    return '{"status":"ownership_conflict"}'::jsonb;
  end if;
  v_saved := public.save_language_progress_snapshot(
    p_language_code,p_program_context,p_storage_version,p_curriculum_version,
    p_content_version,p_snapshot,p_private_snapshot,p_snapshot_hash,
    p_expected_revision,p_client_source,p_client_action_id
  );
  if v_saved ->> 'status' not in ('accepted','duplicate') then return v_saved; end if;
  insert into public.student_language_import_receipts(
    import_id,student_id,language_code,storage_version,snapshot_hash,accepted_revision
  ) values (p_import_id,v_student,p_language_code,p_storage_version,p_snapshot_hash,
    (v_saved ->> 'revision')::integer) on conflict do nothing;
  update learning_private.student_language_import_claims
     set status='accepted',updated_at=pg_catalog.clock_timestamp()
   where import_id=p_import_id;
  return pg_catalog.jsonb_build_object('status','accepted','revision',(v_saved ->> 'revision')::integer,'import_id',p_import_id);
end;
$fn$;

create or replace function public.record_language_learning_activity(
  p_language_code text,
  p_program_context text,
  p_activity_type text,
  p_activity_id text,
  p_content_revision text,
  p_skill_domain text,
  p_correct_count integer default null,
  p_incorrect_count integer default null,
  p_blank_count integer default null,
  p_help_count integer default null,
  p_review_outcome text default null,
  p_completion_status text default null,
  p_duration_minutes numeric default null,
  p_cefr_level text default null,
  p_occurred_at timestamptz default null,
  p_client_source text default 'web',
  p_client_action_id uuid default null
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.language_current_student_id();
  v_source text := learning_private.language_source_code(p_language_code);
  v_now timestamptz := pg_catalog.clock_timestamp();
  v_when timestamptz := coalesce(p_occurred_at,v_now);
  v_payload_hash text;
  v_claim jsonb;
  v_event uuid := pg_catalog.gen_random_uuid();
  v_measurement jsonb := '{}'::jsonb;
  v_metadata jsonb;
  v_record jsonb;
  v_evidence jsonb;
  v_total integer := coalesce(p_correct_count,0)+coalesce(p_incorrect_count,0)+coalesce(p_blank_count,0);
  v_marked integer := coalesce(p_correct_count,0)+coalesce(p_incorrect_count,0);
  v_class text;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_source is null or p_program_context <> 'independent_language_learning'
     or p_activity_type not in ('placement_snapshot','lesson_result_snapshot','review_result_snapshot','skill_snapshot','self_report_snapshot')
     or coalesce(p_activity_id,'') !~ '^[A-Za-z0-9][A-Za-z0-9._:-]{0,191}$'
     or pg_catalog.char_length(coalesce(p_content_revision,'')) not between 1 and 128
     or coalesce(p_skill_domain,'') not in ('general','kelime','gramer','dizim','okuma','dinleme','yazma','telaffuz','dusunme','tanima','baglam','tamamlama','uretim')
     or p_client_source not in ('web','pwa') or p_client_action_id is null
     or v_when > v_now + interval '5 minutes'
     or coalesce(p_correct_count,0) not between 0 and 10000
     or coalesce(p_incorrect_count,0) not between 0 and 10000
     or coalesce(p_blank_count,0) not between 0 and 10000
     or coalesce(p_help_count,0) not between 0 and 10000
     or (p_review_outcome is not null and p_review_outcome not in ('recalled','forgotten'))
     or (p_completion_status is not null and p_completion_status not in ('answered','updated','completed','skipped'))
     or (p_duration_minutes is not null and p_duration_minutes not between 0 and 1440)
     or (p_cefr_level is not null and p_cefr_level not in ('Pre-A1','A1','A2','B1','B2','C1','C2')) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_payload_hash := learning_private.language_sha256_jsonb(pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
    'language',p_language_code,'program',p_program_context,'type',p_activity_type,
    'activity',p_activity_id,'revision',p_content_revision,'skill',p_skill_domain,
    'correct',p_correct_count,'incorrect',p_incorrect_count,'blank',p_blank_count,
    'help',p_help_count,'review',p_review_outcome,'completion',p_completion_status,
    'duration',p_duration_minutes,'cefr',p_cefr_level,'occurred_at',v_when,'client',p_client_source
  )));
  v_claim := learning_private.claim_language_action(v_student,v_source,p_client_action_id,'activity',v_payload_hash);
  if v_claim ->> 'status' <> 'claimed' then return v_claim; end if;
  insert into public.student_language_activity_events(
    event_id,student_id,source_code,language_code,program_context,activity_type,
    activity_id,content_revision,skill_domain,correct_count,incorrect_count,
    blank_count,help_count,review_outcome,completion_status,duration_minutes,
    cefr_level,occurred_at,client_source,client_action_id
  ) values (v_event,v_student,v_source,p_language_code,p_program_context,p_activity_type,
    p_activity_id,p_content_revision,p_skill_domain,p_correct_count,p_incorrect_count,
    p_blank_count,p_help_count,p_review_outcome,p_completion_status,p_duration_minutes,
    p_cefr_level,v_when,p_client_source,p_client_action_id);
  if p_correct_count is not null or p_incorrect_count is not null or p_blank_count is not null then
    v_measurement := v_measurement || pg_catalog.jsonb_build_object(
      'correct_count',coalesce(p_correct_count,0),'incorrect_count',coalesce(p_incorrect_count,0),
      'blank_count',coalesce(p_blank_count,0),'marked_count',v_marked,'total_count',v_total
    );
    if v_total > 0 then v_measurement := v_measurement || pg_catalog.jsonb_build_object(
      'accuracy',coalesce(p_correct_count,0)::numeric/v_total,'accuracy_denominator','total',
      'accuracy_formula','correct_count / total_count','accuracy_formula_version','accuracy-total-v1',
      'accuracy_source','system_measured'
    ); end if;
  end if;
  if p_help_count is not null then v_measurement := v_measurement || pg_catalog.jsonb_build_object(
    'help_used',p_help_count>0,'help_source','client_interaction'
  ); end if;
  if p_duration_minutes is not null then v_measurement := v_measurement || pg_catalog.jsonb_build_object(
    'duration_minutes',p_duration_minutes,'duration_source','active_measurement'
  ); end if;
  if p_completion_status='completed' then v_measurement := v_measurement || pg_catalog.jsonb_build_object(
    'completion_status','completed','completion_source','client_interaction'
  ); end if;
  v_metadata := pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
    'language',p_language_code,'program_context',p_program_context,
    'skill',p_skill_domain,'activity_id',p_activity_id,
    'content_revision',p_content_revision,'review_outcome',p_review_outcome,
    'cefr_level',p_cefr_level,
    'lesson_id',case when p_activity_type='lesson_result_snapshot' then pg_catalog.split_part(p_activity_id,':',1) end,
    'storage_version','1'
  ));
  select coalesce(contract.evidence_class_by_event ->> p_activity_type,contract.default_evidence_class)
    into v_class from public.learning_source_contracts as contract
   where contract.registry_version='learning-language-registry@1' and contract.source_code=v_source;
  v_record := pg_catalog.jsonb_build_object(
    'contract_version','learning-evidence@1','schema_version','1.0',
    'source_registry_version','learning-language-registry@1','record_kind','event',
    'student_id',v_student,'actor_id',v_student,'actor_role','student',
    'actor_student_relation','authenticated_student','source_code',v_source,
    'source_record_id','language-event:'||p_language_code||':'||p_client_action_id::text,
    'source_revision',p_content_revision,
    'source_locator','drkoc-ref:v1:'||v_source||':languageprogress',
    'semantic_event_type',p_activity_type,'activity_type',p_activity_type,
    'client_action_id',p_client_action_id,'occurred_at',v_when,
    'occurred_at_precision','exact','topic_id','drkoc:language:'||p_language_code||':'||p_program_context,
    'identity_resolution',pg_catalog.jsonb_build_object(
      'status','source_scope_only','canonicalId','drkoc:language:'||p_language_code||':'||p_program_context,
      'resolverVersion','topic-resolver@1','method','explicit_program_context'
    ),
    'curriculum_identity_version','curriculum-identity@1',
    'curriculum_ledger_version','curriculum-ledger@1','curriculum_aliases_version','curriculum-aliases@1',
    'evidence_class',v_class,'evidence_strength',case when v_class='student_self_report' then 'low' else 'medium' end,
    'trust_level','account_bound','provenance','client_draft_server_bound','source_availability','available',
    'measurement',v_measurement,'relations','{}'::jsonb,'metadata',v_metadata,
    'source_adapter_version','learning-language-adapters@1','topic_resolver_version','topic-resolver@1'
  );
  v_evidence := learning_private.ingest_evidence(v_record,learning_private.language_sha256_jsonb(v_record),'live',null);
  if v_evidence ->> 'status' not in ('created','duplicate','identity_quarantined') then
    raise exception 'phase5_evidence_rejected';
  end if;
  update public.student_language_activity_events
     set evidence_record_id=(v_evidence ->> 'record_id')::uuid where event_id=v_event;
  return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
    pg_catalog.jsonb_build_object('status','accepted','event_id',v_event,
      'evidence_record_id',v_evidence ->> 'record_id'));
end;
$fn$;

create or replace function public.delete_my_language_progress(
  p_language_code text,
  p_program_context text,
  p_reset_generation integer,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.language_current_student_id();
  v_source text := learning_private.language_source_code(p_language_code);
  v_claim jsonb;
  v_state public.student_language_progress_states%rowtype;
  v_revision integer;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_source is null or p_program_context <> 'independent_language_learning'
     or p_reset_generation < 1 or p_client_action_id is null then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_claim := learning_private.claim_language_action(v_student,v_source,p_client_action_id,'delete',
    learning_private.language_sha256_jsonb(pg_catalog.jsonb_build_object(
      'language',p_language_code,'program',p_program_context,'generation',p_reset_generation
    )));
  if v_claim ->> 'status' <> 'claimed' then return v_claim; end if;
  select * into v_state from public.student_language_progress_states
   where student_id=v_student and language_code=p_language_code
     and program_context=p_program_context for update;
  if not found then
    return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
      '{"status":"empty","revision":0}'::jsonb);
  end if;
  if p_reset_generation <= v_state.reset_generation then
    return learning_private.complete_language_action(v_student,v_source,p_client_action_id,
      pg_catalog.jsonb_build_object('status','duplicate','revision',v_state.revision));
  end if;
  v_revision := v_state.revision+1;
  update public.student_language_progress_states set
    revision=v_revision,reset_generation=p_reset_generation,
    deleted_at=pg_catalog.clock_timestamp(),updated_at=pg_catalog.clock_timestamp()
   where student_id=v_student and language_code=p_language_code and program_context=p_program_context;
  delete from learning_private.student_language_private_work
   where student_id=v_student and language_code=p_language_code and program_context=p_program_context;
  insert into public.student_language_progress_revisions(
    student_id,language_code,program_context,revision,reset_generation,
    snapshot_hash,client_action_id,client_source
  ) values(v_student,p_language_code,p_program_context,v_revision,p_reset_generation,
    v_state.snapshot_hash,p_client_action_id,v_state.client_source);
  v_result := pg_catalog.jsonb_build_object('status','deleted','revision',v_revision,'reset_generation',p_reset_generation);
  return learning_private.complete_language_action(v_student,v_source,p_client_action_id,v_result);
end;
$fn$;

alter table public.student_language_progress_states enable row level security;
alter table public.student_language_progress_states force row level security;
alter table public.student_language_progress_revisions enable row level security;
alter table public.student_language_progress_revisions force row level security;
alter table public.student_language_activity_events enable row level security;
alter table public.student_language_activity_events force row level security;
alter table public.student_language_sync_conflicts enable row level security;
alter table public.student_language_sync_conflicts force row level security;
alter table public.student_language_import_receipts enable row level security;
alter table public.student_language_import_receipts force row level security;

drop policy if exists language_states_select_own on public.student_language_progress_states;
create policy language_states_select_own on public.student_language_progress_states
  for select to authenticated using (student_id=auth.uid());
drop policy if exists language_revisions_select_own on public.student_language_progress_revisions;
create policy language_revisions_select_own on public.student_language_progress_revisions
  for select to authenticated using (student_id=auth.uid());
drop policy if exists language_activity_select_own on public.student_language_activity_events;
create policy language_activity_select_own on public.student_language_activity_events
  for select to authenticated using (student_id=auth.uid());
drop policy if exists language_conflicts_select_own on public.student_language_sync_conflicts;
create policy language_conflicts_select_own on public.student_language_sync_conflicts
  for select to authenticated using (student_id=auth.uid());
drop policy if exists language_imports_select_own on public.student_language_import_receipts;
create policy language_imports_select_own on public.student_language_import_receipts
  for select to authenticated using (student_id=auth.uid());

revoke all on public.student_language_progress_states,
  public.student_language_progress_revisions,
  public.student_language_activity_events,
  public.student_language_sync_conflicts,
  public.student_language_import_receipts from public,anon,authenticated;
grant select on public.student_language_progress_states,
  public.student_language_progress_revisions,
  public.student_language_activity_events,
  public.student_language_sync_conflicts,
  public.student_language_import_receipts to authenticated;

revoke all on function public.get_my_language_progress(text) from public,anon;
revoke all on function public.get_my_language_progress_summary(text) from public,anon;
revoke all on function public.save_language_progress_snapshot(text,text,integer,text,text,jsonb,jsonb,text,integer,text,uuid) from public,anon;
revoke all on function public.import_language_progress_snapshot(text,text,integer,text,text,jsonb,jsonb,text,integer,text,uuid,uuid) from public,anon;
revoke all on function public.record_language_learning_activity(text,text,text,text,text,text,integer,integer,integer,integer,text,text,numeric,text,timestamptz,text,uuid) from public,anon;
revoke all on function public.delete_my_language_progress(text,text,integer,uuid) from public,anon;
grant execute on function public.get_my_language_progress(text) to authenticated;
grant execute on function public.get_my_language_progress_summary(text) to authenticated;
grant execute on function public.save_language_progress_snapshot(text,text,integer,text,text,jsonb,jsonb,text,integer,text,uuid) to authenticated;
grant execute on function public.import_language_progress_snapshot(text,text,integer,text,text,jsonb,jsonb,text,integer,text,uuid,uuid) to authenticated;
grant execute on function public.record_language_learning_activity(text,text,text,text,text,text,integer,integer,integer,integer,text,text,numeric,text,timestamptz,text,uuid) to authenticated;
grant execute on function public.delete_my_language_progress(text,text,integer,uuid) to authenticated;

revoke all on function learning_private.language_canonical_jsonb_text(jsonb) from public,anon,authenticated;
revoke all on function learning_private.language_sha256_jsonb(jsonb) from public,anon,authenticated;
revoke all on function learning_private.language_current_student_id() from public,anon,authenticated;
revoke all on function learning_private.language_source_code(text) from public,anon,authenticated;
revoke all on function learning_private.language_public_snapshot_is_valid(jsonb) from public,anon,authenticated;
revoke all on function learning_private.language_private_snapshot_is_valid(jsonb) from public,anon,authenticated;
revoke all on function learning_private.language_progress_summary(text,text,jsonb) from public,anon,authenticated;
revoke all on function learning_private.claim_language_action(uuid,text,uuid,text,text) from public,anon,authenticated;
revoke all on function learning_private.complete_language_action(uuid,text,uuid,jsonb) from public,anon,authenticated;

commit;
