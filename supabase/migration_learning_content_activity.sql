-- ============================================================================
-- DRKOÇ AI Koç — Faz 3 / Ders, soru kütüphanesi ve atlas kanıt ağı
--
-- Tek yetkili Faz 3 DDL kaynağıdır. Faz 2
-- migration_learning_evidence_network.sql dosyasından SONRA uygulanır.
-- Canlı seed veya backfill yapmaz; içerik manifesti ayrı ve deterministiktir.
-- ============================================================================

-- Faz 2 sicilini değiştirmeden M13–M26 için sürümlü uygulama izdüşümü.
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
  'learning-content-registry@1', source_code, matrix_id, classification,
  ingest_allowed, contract_version, data_class, module_owner, authority,
  case source_code
    when 'structured_lesson_activity' then 'server activity family id + revision'
    when 'bundled_lesson_activity' then 'bundled content id + revision + activity family id'
    when 'library_note_exposure' then 'server exposure id'
    when 'db_question_test' then 'attempt id + question id or final'
    when 'bundled_question_test' then 'attempt id + question id or final'
    when 'physics_atlas' then 'student task state id + state revision'
    when 'biology_atlas' then 'student task state id + state revision'
    when 'geography_atlas' then 'student task state id + state revision'
    when 'chemistry_atlas' then 'attempt id + question id or final'
    when 'geometry_pilot' then 'attempt id + question id or final'
    else source_record_key
  end,
  case
    when source_code in ('chemistry_atlas', 'geometry_pilot')
      then array['event', 'snapshot', 'correction', 'tombstone']::text[]
    else record_kinds
  end,
  semantic_event_types, evidence_class_by_event, default_evidence_class,
  allowed_measurements, allowed_metadata, identity_scope, adapter_name,
  case when ingest_allowed then 'learning-content-adapters@1' else adapter_version end,
  resolver_name, resolver_version,
  case when source_code in ('physics_atlas', 'biology_atlas', 'geography_atlas')
    then 'server_after_explicit_account_binding'
    else trust_authority
  end,
  actor_student_relation,
  case
    when source_code in ('structured_lesson_activity', 'bundled_lesson_activity',
      'db_question_test', 'bundled_question_test', 'chemistry_atlas', 'geometry_pilot')
      then 'append_only_with_correction_and_tombstone'
    else mutation_semantics
  end,
  source_locator_policy, retention_class,
  case
    when classification = 'catalog' then 'local_catalog_confirmed'
    when classification = 'derived_readonly' then 'local_derived_confirmed'
    when classification = 'excluded' then 'local_exclusion_confirmed'
    else 'locally_implemented_live_not_applied'
  end
from public.learning_source_contracts
where registry_version = 'learning-source-registry@1'
  and matrix_id between 'M13' and 'M26'
on conflict (registry_version, source_code) do nothing;

-- --------------------------------------------------------------------------
-- M14 — Sürümlü içerik sicili, açık konu eşlemesi ve alias ilişkisi.
-- --------------------------------------------------------------------------

create table if not exists public.learning_content_revisions (
  source_registry_version text not null default 'learning-content-registry@1',
  source_code text not null,
  content_kind text not null,
  content_id text not null,
  content_revision text not null,
  content_hash text not null,
  manifest_version text not null default 'learning-content-manifest@1',
  status text not null default 'published',
  source_owner text not null,
  source_locator_token text not null,
  previous_revision text,
  item_count integer not null default 0,
  published_at timestamptz,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  archived_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  constraint learning_content_revisions_pk
    primary key (source_code, content_kind, content_id, content_revision),
  constraint learning_content_source_fk
    foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_content_registry_check check (
    source_registry_version = 'learning-content-registry@1'
  ),
  constraint learning_content_kind_check check (content_kind in (
    'structured_lesson', 'bundled_lesson', 'library_note',
    'db_question_set', 'bundled_question_set', 'atlas_task',
    'atlas_assessment', 'geometry_assessment'
  )),
  constraint learning_content_id_check check (
    pg_catalog.char_length(content_id) between 1 and 192
    and content_id !~ '[[:cntrl:][:space:]]'
  ),
  constraint learning_content_revision_check check (
    pg_catalog.char_length(content_revision) between 1 and 128
    and content_revision !~ '[[:cntrl:]]'
  ),
  constraint learning_content_hash_check check (content_hash ~ '^[0-9a-f]{64}$'),
  constraint learning_content_manifest_check check (
    manifest_version ~ '^[a-z][a-z0-9-]{1,63}@[0-9]+$'
  ),
  constraint learning_content_status_check check (
    status in ('draft', 'published', 'archived', 'quarantined')
  ),
  constraint learning_content_locator_check check (
    pg_catalog.char_length(source_locator_token) between 8 and 128
    and source_locator_token ~ '^[A-Za-z0-9_-]+$'
  ),
  constraint learning_content_item_count_check check (item_count >= 0),
  constraint learning_content_metadata_check check (
    learning_private.metadata_is_safe(metadata)
  )
);

create unique index if not exists learning_content_hash_identity_uq
  on public.learning_content_revisions (
    source_code, content_kind, content_id, content_hash
  );
create index if not exists learning_content_available_idx
  on public.learning_content_revisions (source_code, status, content_kind, content_id);
create index if not exists learning_content_previous_revision_idx
  on public.learning_content_revisions (source_code, content_id, previous_revision)
  where previous_revision is not null;

create table if not exists public.learning_content_topic_mappings (
  source_code text not null,
  content_kind text not null,
  content_id text not null,
  content_revision text not null,
  mapping_status text not null,
  education_context_id text,
  subject_id text,
  topic_id text,
  objective_ids text[] not null default array[]::text[],
  resolver_version text not null,
  ledger_version text not null,
  aliases_version text not null,
  mapping_method text not null,
  decision_source text not null,
  verified_at timestamptz,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_content_topic_mappings_pk
    primary key (source_code, content_kind, content_id, content_revision),
  constraint learning_content_topic_content_fk
    foreign key (source_code, content_kind, content_id, content_revision)
    references public.learning_content_revisions(
      source_code, content_kind, content_id, content_revision
    ) on delete cascade,
  constraint learning_content_mapping_status_check check (
    mapping_status in ('verified', 'source_scope_only', 'ambiguous', 'unmatched', 'retired')
  ),
  constraint learning_content_mapping_identity_check check (
    (
      mapping_status = 'verified'
      and education_context_id ~ '^drkoc:curriculum:context:v[0-9]+:'
      and subject_id ~ '^drkoc:curriculum:subject:v[0-9]+:'
      and topic_id ~ '^drkoc:curriculum:topic:v[0-9]+:'
      and verified_at is not null
    )
    or (
      mapping_status = 'source_scope_only'
      and education_context_id is null and subject_id is null
      and topic_id ~ '^drkoc:atlas:[^[:space:]]+$'
      and verified_at is not null
    )
    or (
      mapping_status in ('ambiguous', 'unmatched', 'retired')
      and education_context_id is null and subject_id is null and topic_id is null
    )
  ),
  constraint learning_content_mapping_versions_check check (
    resolver_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
    and ledger_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
    and aliases_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
    and mapping_method ~ '^[a-z][a-z0-9._-]{1,63}$'
    and mapping_method !~* '(fuzzy|title_similarity|first_match)'
  )
);

create index if not exists learning_content_topic_mapping_idx
  on public.learning_content_topic_mappings (topic_id, mapping_status, source_code)
  where mapping_status in ('verified', 'source_scope_only');
create index if not exists learning_content_quarantine_mapping_idx
  on public.learning_content_topic_mappings (mapping_status, source_code, content_id)
  where mapping_status in ('ambiguous', 'unmatched');

create table if not exists public.learning_content_aliases (
  source_code text not null,
  content_kind text not null,
  alias_content_id text not null,
  target_content_id text not null,
  target_content_revision text not null,
  alias_version text not null,
  reason text not null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  retired_at timestamptz,
  constraint learning_content_aliases_pk
    primary key (source_code, content_kind, alias_content_id, alias_version),
  constraint learning_content_alias_target_fk
    foreign key (source_code, content_kind, target_content_id, target_content_revision)
    references public.learning_content_revisions(
      source_code, content_kind, content_id, content_revision
    ),
  constraint learning_content_alias_not_self check (alias_content_id <> target_content_id),
  constraint learning_content_alias_version_check check (
    alias_version ~ '^[A-Za-z0-9][A-Za-z0-9._@-]{0,63}$'
  )
);

-- Cevap anahtarı, seçenek ve çözüm öğrenciye açık katalogdan ayrı tutulur.
create table if not exists learning_private.learning_content_items (
  source_code text not null,
  content_kind text not null,
  content_id text not null,
  content_revision text not null,
  item_id text not null,
  item_kind text not null,
  position integer not null,
  required boolean not null default true,
  option_ids text[],
  correct_option_id text,
  explanation text,
  item_hash text not null,
  metadata jsonb not null default '{}'::jsonb,
  constraint learning_content_items_pk primary key (
    source_code, content_kind, content_id, content_revision, item_id
  ),
  constraint learning_content_items_content_fk foreign key (
    source_code, content_kind, content_id, content_revision
  ) references public.learning_content_revisions(
    source_code, content_kind, content_id, content_revision
  ) on delete cascade,
  constraint learning_content_items_kind_check check (
    item_kind in ('section', 'block', 'question', 'task')
  ),
  constraint learning_content_items_position_check check (position >= 0),
  constraint learning_content_items_id_check check (
    pg_catalog.char_length(item_id) between 1 and 192 and item_id !~ '[[:cntrl:]]'
  ),
  constraint learning_content_items_hash_check check (item_hash ~ '^[0-9a-f]{64}$'),
  constraint learning_content_items_answer_check check (
    (item_kind = 'question' and pg_catalog.cardinality(option_ids) >= 2
      and correct_option_id = any(option_ids))
    or (item_kind <> 'question' and option_ids is null and correct_option_id is null)
  ),
  constraint learning_content_items_metadata_check check (
    learning_private.metadata_is_safe(metadata)
  )
);

create index if not exists learning_content_items_order_idx
  on learning_private.learning_content_items (
    source_code, content_id, content_revision, item_kind, position
  );

-- --------------------------------------------------------------------------
-- Ortak action receipt: tekrar güvenliği kaynak satırından önce alınır.
-- --------------------------------------------------------------------------

create table if not exists public.learning_content_action_receipts (
  receipt_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_registry_version text not null default 'learning-content-registry@1',
  source_code text not null,
  client_action_id uuid not null,
  action_kind text not null,
  payload_hash text not null,
  status text not null default 'processing',
  safe_result jsonb,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  constraint learning_content_action_receipt_uq
    unique (student_id, source_code, client_action_id),
  constraint learning_content_action_source_fk
    foreign key (source_registry_version, source_code)
    references public.learning_source_contracts(registry_version, source_code),
  constraint learning_content_action_registry_check check (
    source_registry_version = 'learning-content-registry@1'
  ),
  constraint learning_content_action_kind_check check (
    action_kind ~ '^[a-z][a-z0-9_]{1,63}$'
  ),
  constraint learning_content_action_hash_check check (payload_hash ~ '^[0-9a-f]{64}$'),
  constraint learning_content_action_status_check check (
    status in ('processing', 'completed')
  ),
  constraint learning_content_action_result_check check (
    (status = 'processing' and safe_result is null and completed_at is null)
    or (status = 'completed' and safe_result is not null and completed_at is not null)
  )
);

create index if not exists learning_content_action_student_idx
  on public.learning_content_action_receipts (student_id, created_at desc);

-- --------------------------------------------------------------------------
-- Kaynak alan tabloları.
-- --------------------------------------------------------------------------

-- Temiz kurulumda eski opsiyonel göç yoksa gereken master tablolarını kurar;
-- varsa veri ve kolonları korur.
create table if not exists public.structured_lessons (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  topic_id uuid references public.library_topics(id) on delete cascade,
  teacher_id uuid references public.profiles(id) on delete set null,
  title text not null,
  document jsonb not null default '{"version":1,"sections":[]}'::jsonb,
  status text not null default 'draft',
  content_hash text,
  current_revision integer not null default 1,
  published_at timestamptz,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp()
);

create table if not exists public.structured_lesson_revisions (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  lesson_id uuid not null references public.structured_lessons(id) on delete cascade,
  revision integer not null,
  document jsonb not null,
  change_note text,
  created_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  unique (lesson_id, revision)
);

create table if not exists public.lesson_activity_events (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  lesson_id uuid not null references public.structured_lessons(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  event_name text not null,
  block_id text,
  metadata jsonb,
  created_at timestamptz not null default pg_catalog.clock_timestamp()
);

alter table public.lesson_activity_events
  add column if not exists content_revision text,
  add column if not exists section_id text,
  add column if not exists selected_option_id text,
  add column if not exists is_correct boolean,
  add column if not exists record_kind text not null default 'event',
  add column if not exists source_record_id text,
  add column if not exists source_revision integer not null default 1,
  add column if not exists target_event_id uuid,
  add column if not exists client_action_id uuid,
  add column if not exists evidence_record_id uuid;

do $do$
begin
  if exists (
    select 1 from pg_catalog.pg_constraint
    where conrelid = 'public.lesson_activity_events'::pg_catalog.regclass
      and conname = 'lesson_activity_events_event_name_check'
  ) then
    alter table public.lesson_activity_events
      drop constraint lesson_activity_events_event_name_check;
  end if;
end
$do$;

-- SQL-language public uçlar aşağıda tanımlanırken PostgreSQL imza çözümü
-- yapar. Gerçek gövdeler kaynak tablolarından sonra CREATE OR REPLACE edilir;
-- bu dar ileri bildirimler yalnız kurulum sırasını idempotent tutar.
create or replace function learning_private.record_lesson_event(
  p_source_code text, p_content_kind text, p_content_id text,
  p_content_revision text, p_event_name text, p_block_id text,
  p_section_id text, p_selected_option_id text, p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.save_lesson_progress(
  p_source_code text, p_content_kind text, p_content_id text,
  p_content_revision text, p_section_id text,
  p_completed_section_ids text[], p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.record_note_open(
  p_content_id text, p_content_revision text, p_content_kind text,
  p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.start_question_attempt(
  p_source_code text, p_content_id text, p_content_revision text,
  p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.save_question_answer(
  p_source_code text, p_attempt_id uuid, p_question_id text,
  p_selected_option_id text, p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.finalize_question_attempt(
  p_source_code text, p_attempt_id uuid, p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.reset_question_attempt(
  p_source_code text, p_attempt_id uuid, p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.record_atlas_snapshot(
  p_source_code text, p_content_id text, p_content_revision text,
  p_task_id text, p_completed boolean, p_prediction_used boolean,
  p_client_action_id uuid, p_origin text default 'live'
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function learning_private.import_atlas_snapshot(
  p_source_code text, p_snapshot jsonb, p_snapshot_hash text,
  p_client_action_id uuid
) returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;
create or replace function public.get_question_attempt_result(p_attempt_id uuid)
returns jsonb language plpgsql security definer set search_path = '' as $fn$
begin return '{"status":"dependency_unavailable"}'::jsonb; end $fn$;

-- --------------------------------------------------------------------------
-- Public kaynak-özel RPC uçları. İstemci öğrenci/kanıt sınıfı/doğruluk/
-- toplam/topic/zaman/kayıt türü gönderemez.
-- --------------------------------------------------------------------------

create or replace function public.record_structured_lesson_event(
  p_lesson_id uuid,
  p_content_revision text,
  p_event_name text,
  p_client_action_id uuid,
  p_block_id text default null,
  p_section_id text default null,
  p_selected_option_id text default null
)
returns jsonb
language sql
security definer
set search_path = ''
as $fn$
  select learning_private.record_lesson_event(
    'structured_lesson_activity', 'structured_lesson', p_lesson_id::text,
    p_content_revision, p_event_name, p_block_id, p_section_id,
    p_selected_option_id, p_client_action_id
  );
$fn$;

create or replace function public.record_bundled_lesson_event(
  p_content_id text,
  p_content_revision text,
  p_event_name text,
  p_client_action_id uuid,
  p_block_id text default null,
  p_section_id text default null,
  p_selected_option_id text default null
)
returns jsonb
language sql
security definer
set search_path = ''
as $fn$
  select learning_private.record_lesson_event(
    'bundled_lesson_activity', 'bundled_lesson', p_content_id,
    p_content_revision, p_event_name, p_block_id, p_section_id,
    p_selected_option_id, p_client_action_id
  );
$fn$;

create or replace function public.save_structured_lesson_progress(
  p_lesson_id uuid,
  p_content_revision text,
  p_completed_section_ids text[],
  p_client_action_id uuid,
  p_section_id text default null
)
returns jsonb
language sql
security definer
set search_path = ''
as $fn$
  select learning_private.save_lesson_progress(
    'structured_lesson_activity', 'structured_lesson', p_lesson_id::text,
    p_content_revision, p_section_id, p_completed_section_ids,
    p_client_action_id
  );
$fn$;

create or replace function public.save_bundled_lesson_progress(
  p_content_id text,
  p_content_revision text,
  p_completed_section_ids text[],
  p_client_action_id uuid,
  p_section_id text default null
)
returns jsonb
language sql
security definer
set search_path = ''
as $fn$
  select learning_private.save_lesson_progress(
    'bundled_lesson_activity', 'bundled_lesson', p_content_id,
    p_content_revision, p_section_id, p_completed_section_ids,
    p_client_action_id
  );
$fn$;

create or replace function public.record_library_note_open(
  p_content_id text,
  p_content_revision text,
  p_content_kind text,
  p_client_action_id uuid
)
returns jsonb
language sql
security definer
set search_path = ''
as $fn$
  select learning_private.record_note_open(
    p_content_id, p_content_revision, p_content_kind, p_client_action_id
  );
$fn$;

create or replace function public.start_db_question_attempt(
  p_content_id text, p_content_revision text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.start_question_attempt(
    'db_question_test', p_content_id, p_content_revision, p_client_action_id
  );
$fn$;
create or replace function public.start_bundled_question_attempt(
  p_content_id text, p_content_revision text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.start_question_attempt(
    'bundled_question_test', p_content_id, p_content_revision, p_client_action_id
  );
$fn$;
create or replace function public.start_chemistry_atlas_attempt(
  p_content_id text, p_content_revision text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.start_question_attempt(
    'chemistry_atlas', p_content_id, p_content_revision, p_client_action_id
  );
$fn$;
create or replace function public.start_geometry_pilot_attempt(
  p_content_id text, p_content_revision text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.start_question_attempt(
    'geometry_pilot', p_content_id, p_content_revision, p_client_action_id
  );
$fn$;
create or replace function public.start_geography_timed_attempt(
  p_content_id text, p_content_revision text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.start_question_attempt(
    'geography_atlas', p_content_id, p_content_revision, p_client_action_id
  );
$fn$;

create or replace function public.save_db_question_answer(
  p_attempt_id uuid, p_question_id text, p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.save_question_answer(
    'db_question_test', p_attempt_id, p_question_id, p_selected_option_id,
    p_client_action_id
  );
$fn$;
create or replace function public.save_bundled_question_answer(
  p_attempt_id uuid, p_question_id text, p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.save_question_answer(
    'bundled_question_test', p_attempt_id, p_question_id, p_selected_option_id,
    p_client_action_id
  );
$fn$;
create or replace function public.save_chemistry_atlas_answer(
  p_attempt_id uuid, p_question_id text, p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.save_question_answer(
    'chemistry_atlas', p_attempt_id, p_question_id, p_selected_option_id,
    p_client_action_id
  );
$fn$;
create or replace function public.save_geometry_pilot_answer(
  p_attempt_id uuid, p_question_id text, p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.save_question_answer(
    'geometry_pilot', p_attempt_id, p_question_id, p_selected_option_id,
    p_client_action_id
  );
$fn$;
create or replace function public.save_geography_timed_answer(
  p_attempt_id uuid, p_question_id text, p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.save_question_answer(
    'geography_atlas', p_attempt_id, p_question_id, p_selected_option_id,
    p_client_action_id
  );
$fn$;

create or replace function public.finalize_db_question_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.finalize_question_attempt(
    'db_question_test', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.finalize_bundled_question_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.finalize_question_attempt(
    'bundled_question_test', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.finalize_chemistry_atlas_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.finalize_question_attempt(
    'chemistry_atlas', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.finalize_geometry_pilot_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.finalize_question_attempt(
    'geometry_pilot', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.finalize_geography_timed_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.finalize_question_attempt(
    'geography_atlas', p_attempt_id, p_client_action_id
  );
$fn$;

create or replace function public.reset_db_question_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.reset_question_attempt(
    'db_question_test', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.reset_bundled_question_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.reset_question_attempt(
    'bundled_question_test', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.reset_chemistry_atlas_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.reset_question_attempt(
    'chemistry_atlas', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.reset_geometry_pilot_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.reset_question_attempt(
    'geometry_pilot', p_attempt_id, p_client_action_id
  );
$fn$;
create or replace function public.reset_geography_timed_attempt(
  p_attempt_id uuid, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.reset_question_attempt(
    'geography_atlas', p_attempt_id, p_client_action_id
  );
$fn$;

create or replace function public.record_physics_atlas_snapshot(
  p_content_id text, p_content_revision text, p_task_id text,
  p_completed boolean, p_prediction_used boolean, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.record_atlas_snapshot(
    'physics_atlas', p_content_id, p_content_revision, p_task_id,
    p_completed, p_prediction_used, p_client_action_id, 'live'
  );
$fn$;
create or replace function public.record_biology_atlas_snapshot(
  p_content_id text, p_content_revision text, p_task_id text,
  p_completed boolean, p_prediction_used boolean, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.record_atlas_snapshot(
    'biology_atlas', p_content_id, p_content_revision, p_task_id,
    p_completed, p_prediction_used, p_client_action_id, 'live'
  );
$fn$;
create or replace function public.record_geography_atlas_snapshot(
  p_content_id text, p_content_revision text, p_task_id text,
  p_completed boolean, p_prediction_used boolean, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.record_atlas_snapshot(
    'geography_atlas', p_content_id, p_content_revision, p_task_id,
    p_completed, p_prediction_used, p_client_action_id, 'live'
  );
$fn$;

create or replace function public.import_physics_atlas_snapshot(
  p_snapshot jsonb, p_snapshot_hash text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.import_atlas_snapshot(
    'physics_atlas', p_snapshot, p_snapshot_hash, p_client_action_id
  );
$fn$;
create or replace function public.import_biology_atlas_snapshot(
  p_snapshot jsonb, p_snapshot_hash text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.import_atlas_snapshot(
    'biology_atlas', p_snapshot, p_snapshot_hash, p_client_action_id
  );
$fn$;
create or replace function public.import_geography_atlas_snapshot(
  p_snapshot jsonb, p_snapshot_hash text, p_client_action_id uuid
)
returns jsonb language sql security definer set search_path = '' as $fn$
  select learning_private.import_atlas_snapshot(
    'geography_atlas', p_snapshot, p_snapshot_hash, p_client_action_id
  );
$fn$;

create or replace function public.get_learning_content_capability(p_source_code text)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_contract public.learning_source_contracts%rowtype;
  v_total integer;
  v_problem integer;
begin
  if auth.uid() is null then return '{"status":"unavailable"}'::jsonb; end if;
  select contract.* into v_contract
    from public.learning_source_contracts as contract
   where contract.registry_version = 'learning-content-registry@1'
     and contract.source_code = p_source_code;
  if not found then return '{"status":"unavailable"}'::jsonb; end if;
  if v_contract.classification in ('excluded', 'catalog', 'derived_readonly') then
    return pg_catalog.jsonb_build_object(
      'status', 'available', 'capability_version', 'learning-content-capability@1',
      'source_code', p_source_code, 'classification', v_contract.classification,
      'decision_status', v_contract.decision_status
    );
  end if;
  select pg_catalog.count(*)::integer,
         pg_catalog.count(*) filter (where content.status <> 'published'
           or mapping.mapping_status in ('ambiguous', 'unmatched'))::integer
    into v_total, v_problem
    from public.learning_content_revisions as content
    left join public.learning_content_topic_mappings as mapping
      on mapping.source_code = content.source_code
     and mapping.content_kind = content.content_kind
     and mapping.content_id = content.content_id
     and mapping.content_revision = content.content_revision
   where content.source_code = p_source_code;
  return pg_catalog.jsonb_build_object(
    'status', case when v_total = 0 then 'empty'
      when v_problem > 0 then 'degraded' else 'available' end,
    'capability_version', 'learning-content-capability@1',
    'source_code', p_source_code, 'content_count', v_total,
    'problem_count', v_problem
  );
end;
$fn$;

-- Varsayılan PostgreSQL EXECUTE yetkisi PUBLIC'tir; private yüzey bütünüyle
-- kapatılır, yalnız açık public RPC listesi authenticated role verilir.
revoke all on all functions in schema learning_private from public, anon, authenticated;

revoke all on function
  public.record_structured_lesson_event(uuid, text, text, uuid, text, text, text),
  public.record_bundled_lesson_event(text, text, text, uuid, text, text, text),
  public.save_structured_lesson_progress(uuid, text, text[], uuid, text),
  public.save_bundled_lesson_progress(text, text, text[], uuid, text),
  public.record_library_note_open(text, text, text, uuid),
  public.start_db_question_attempt(text, text, uuid),
  public.start_bundled_question_attempt(text, text, uuid),
  public.start_chemistry_atlas_attempt(text, text, uuid),
  public.start_geometry_pilot_attempt(text, text, uuid),
  public.start_geography_timed_attempt(text, text, uuid),
  public.save_db_question_answer(uuid, text, text, uuid),
  public.save_bundled_question_answer(uuid, text, text, uuid),
  public.save_chemistry_atlas_answer(uuid, text, text, uuid),
  public.save_geometry_pilot_answer(uuid, text, text, uuid),
  public.save_geography_timed_answer(uuid, text, text, uuid),
  public.finalize_db_question_attempt(uuid, uuid),
  public.finalize_bundled_question_attempt(uuid, uuid),
  public.finalize_chemistry_atlas_attempt(uuid, uuid),
  public.finalize_geometry_pilot_attempt(uuid, uuid),
  public.finalize_geography_timed_attempt(uuid, uuid),
  public.reset_db_question_attempt(uuid, uuid),
  public.reset_bundled_question_attempt(uuid, uuid),
  public.reset_chemistry_atlas_attempt(uuid, uuid),
  public.reset_geometry_pilot_attempt(uuid, uuid),
  public.reset_geography_timed_attempt(uuid, uuid),
  public.record_physics_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.record_biology_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.record_geography_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.import_physics_atlas_snapshot(jsonb, text, uuid),
  public.import_biology_atlas_snapshot(jsonb, text, uuid),
  public.import_geography_atlas_snapshot(jsonb, text, uuid),
  public.get_question_attempt_result(uuid),
  public.get_learning_content_capability(text)
from public, anon, authenticated;

grant execute on function
  public.record_structured_lesson_event(uuid, text, text, uuid, text, text, text),
  public.record_bundled_lesson_event(text, text, text, uuid, text, text, text),
  public.save_structured_lesson_progress(uuid, text, text[], uuid, text),
  public.save_bundled_lesson_progress(text, text, text[], uuid, text),
  public.record_library_note_open(text, text, text, uuid),
  public.start_db_question_attempt(text, text, uuid),
  public.start_bundled_question_attempt(text, text, uuid),
  public.start_chemistry_atlas_attempt(text, text, uuid),
  public.start_geometry_pilot_attempt(text, text, uuid),
  public.start_geography_timed_attempt(text, text, uuid),
  public.save_db_question_answer(uuid, text, text, uuid),
  public.save_bundled_question_answer(uuid, text, text, uuid),
  public.save_chemistry_atlas_answer(uuid, text, text, uuid),
  public.save_geometry_pilot_answer(uuid, text, text, uuid),
  public.save_geography_timed_answer(uuid, text, text, uuid),
  public.finalize_db_question_attempt(uuid, uuid),
  public.finalize_bundled_question_attempt(uuid, uuid),
  public.finalize_chemistry_atlas_attempt(uuid, uuid),
  public.finalize_geometry_pilot_attempt(uuid, uuid),
  public.finalize_geography_timed_attempt(uuid, uuid),
  public.reset_db_question_attempt(uuid, uuid),
  public.reset_bundled_question_attempt(uuid, uuid),
  public.reset_chemistry_atlas_attempt(uuid, uuid),
  public.reset_geometry_pilot_attempt(uuid, uuid),
  public.reset_geography_timed_attempt(uuid, uuid),
  public.record_physics_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.record_biology_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.record_geography_atlas_snapshot(text, text, text, boolean, boolean, uuid),
  public.import_physics_atlas_snapshot(jsonb, text, uuid),
  public.import_biology_atlas_snapshot(jsonb, text, uuid),
  public.import_geography_atlas_snapshot(jsonb, text, uuid),
  public.get_question_attempt_result(uuid),
  public.get_learning_content_capability(text)
to authenticated;

-- --------------------------------------------------------------------------
-- Transaction içi ortak yardımcılar. Bu fonksiyonların hiçbiri ürün rolüne
-- açılmaz; public uçlar kaynak-özel ve dar parametreli kalır.
-- --------------------------------------------------------------------------

create or replace function learning_private.claim_content_action(
  p_student_id uuid,
  p_source_code text,
  p_client_action_id uuid,
  p_action_kind text,
  p_payload jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_hash text;
  v_receipt public.learning_content_action_receipts%rowtype;
  v_inserted uuid;
begin
  if p_student_id is null or p_client_action_id is null
     or p_action_kind !~ '^[a-z][a-z0-9_]{1,63}$'
     or p_payload is null or pg_catalog.jsonb_typeof(p_payload) <> 'object' then
    return pg_catalog.jsonb_build_object('claim_status', 'validation_rejected');
  end if;
  v_hash := learning_private.sha256_jsonb(p_payload);
  insert into public.learning_content_action_receipts (
    student_id, source_code, client_action_id, action_kind, payload_hash
  ) values (
    p_student_id, p_source_code, p_client_action_id, p_action_kind, v_hash
  ) on conflict (student_id, source_code, client_action_id) do nothing
  returning receipt_id into v_inserted;

  if v_inserted is not null then
    return pg_catalog.jsonb_build_object(
      'claim_status', 'claimed', 'payload_hash', v_hash, 'receipt_id', v_inserted
    );
  end if;

  select receipt.* into v_receipt
    from public.learning_content_action_receipts as receipt
   where receipt.student_id = p_student_id
     and receipt.source_code = p_source_code
     and receipt.client_action_id = p_client_action_id
   for update;
  if v_receipt.payload_hash is distinct from v_hash
     or v_receipt.action_kind is distinct from p_action_kind then
    return pg_catalog.jsonb_build_object('claim_status', 'idempotency_conflict');
  end if;
  if v_receipt.status = 'completed' then
    return pg_catalog.jsonb_build_object(
      'claim_status', 'duplicate', 'result', v_receipt.safe_result
    );
  end if;
  return pg_catalog.jsonb_build_object('claim_status', 'processing');
end;
$fn$;

create or replace function learning_private.complete_content_action(
  p_student_id uuid,
  p_source_code text,
  p_client_action_id uuid,
  p_result jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if p_result is null or pg_catalog.jsonb_typeof(p_result) <> 'object'
     or pg_catalog.octet_length(p_result::text) > 8192 then
    raise exception using errcode = 'P3001', message = 'phase3_safe_result_invalid';
  end if;
  update public.learning_content_action_receipts
     set status = 'completed', safe_result = p_result,
         completed_at = pg_catalog.clock_timestamp()
   where student_id = p_student_id and source_code = p_source_code
     and client_action_id = p_client_action_id and status = 'processing';
  if not found then
    raise exception using errcode = 'P3001', message = 'phase3_receipt_missing';
  end if;
  return p_result;
end;
$fn$;

create or replace function learning_private.action_claim_result(p_claim jsonb)
returns jsonb
language sql
immutable
set search_path = ''
as $fn$
  select case p_claim ->> 'claim_status'
    when 'duplicate' then coalesce(p_claim -> 'result', '{"status":"duplicate"}'::jsonb)
    when 'idempotency_conflict' then '{"status":"idempotency_conflict"}'::jsonb
    when 'processing' then '{"status":"retryable_failure"}'::jsonb
    when 'validation_rejected' then '{"status":"validation_rejected"}'::jsonb
    else null
  end;
$fn$;

create or replace function learning_private.emit_content_evidence(
  p_student_id uuid,
  p_source_code text,
  p_content_kind text,
  p_content_id text,
  p_content_revision text,
  p_source_record_id text,
  p_source_revision text,
  p_semantic_event_type text,
  p_record_kind text,
  p_client_action_id uuid,
  p_measurement jsonb,
  p_metadata jsonb,
  p_relations jsonb,
  p_target_record_id uuid default null
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_content public.learning_content_revisions%rowtype;
  v_mapping public.learning_content_topic_mappings%rowtype;
  v_contract public.learning_source_contracts%rowtype;
  v_identity jsonb;
  v_record jsonb;
  v_result jsonb;
  v_now timestamptz := pg_catalog.clock_timestamp();
  v_class text;
begin
  select content.* into v_content
    from public.learning_content_revisions as content
   where content.source_code = p_source_code
     and content.content_kind = p_content_kind
     and content.content_id = p_content_id
     and content.content_revision = p_content_revision;
  if not found then
    raise exception using errcode = 'P3001', message = 'phase3_content_missing';
  end if;

  select contract.* into v_contract
    from public.learning_source_contracts as contract
   where contract.registry_version = 'learning-content-registry@1'
     and contract.source_code = p_source_code;
  if not found or not v_contract.ingest_allowed then
    raise exception using errcode = 'P3001', message = 'phase3_source_not_allowed';
  end if;
  v_class := coalesce(
    v_contract.evidence_class_by_event ->> p_semantic_event_type,
    v_contract.default_evidence_class
  );

  select mapping.* into v_mapping
    from public.learning_content_topic_mappings as mapping
   where mapping.source_code = p_source_code
     and mapping.content_kind = p_content_kind
     and mapping.content_id = p_content_id
     and mapping.content_revision = p_content_revision;

  if not found or v_mapping.mapping_status in ('unmatched', 'retired') then
    v_identity := pg_catalog.jsonb_build_object(
      'status', 'unmatched', 'canonicalId', null,
      'resolverVersion', 'topic-resolver@1',
      'quarantineReason', case when not found
        then 'CONTENT_MAPPING_MISSING' else 'CONTENT_MAPPING_UNMATCHED' end
    );
  elsif v_mapping.mapping_status = 'ambiguous' then
    v_identity := pg_catalog.jsonb_build_object(
      'status', 'ambiguous', 'canonicalId', null,
      'resolverVersion', v_mapping.resolver_version,
      'quarantineReason', 'CONTENT_MAPPING_AMBIGUOUS'
    );
  else
    v_identity := pg_catalog.jsonb_build_object(
      'status', v_mapping.mapping_status,
      'canonicalId', v_mapping.topic_id,
      'educationContextId', v_mapping.education_context_id,
      'subjectId', v_mapping.subject_id,
      'resolverVersion', v_mapping.resolver_version,
      'method', v_mapping.mapping_method
    );
  end if;

  v_record := pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
    'contract_version', 'learning-evidence@1',
    'schema_version', '1.0',
    'source_registry_version', 'learning-content-registry@1',
    'record_kind', p_record_kind,
    'student_id', p_student_id,
    'actor_id', p_student_id,
    'actor_role', 'student',
    'actor_student_relation', 'authenticated_student',
    'source_code', p_source_code,
    'source_record_id', p_source_record_id,
    'source_revision', p_source_revision,
    'source_locator', 'drkoc-ref:v1:' || p_source_code || ':'
      || v_content.source_locator_token,
    'semantic_event_type', p_semantic_event_type,
    'activity_type', p_semantic_event_type,
    'client_action_id', p_client_action_id,
    'occurred_at', case when p_record_kind <> 'snapshot' then v_now end,
    'occurred_at_precision', case when p_record_kind <> 'snapshot' then 'exact' else 'unknown' end,
    'as_of', case when p_record_kind = 'snapshot' then v_now end,
    'education_context_id', case when v_mapping.mapping_status = 'verified'
      then v_mapping.education_context_id end,
    'subject_id', case when v_mapping.mapping_status = 'verified'
      then v_mapping.subject_id end,
    'topic_id', case when v_mapping.mapping_status in ('verified', 'source_scope_only')
      then v_mapping.topic_id end,
    'identity_resolution', v_identity,
    'curriculum_identity_version', 'curriculum-identity@1',
    'curriculum_ledger_version', coalesce(v_mapping.ledger_version, 'curriculum-ledger@1'),
    'curriculum_aliases_version', coalesce(v_mapping.aliases_version, 'curriculum-aliases@1'),
    'evidence_class', v_class,
    'evidence_strength', case
      when v_class = 'direct_measurement' then 'high'
      when v_class = 'system_observation' then 'medium'
      else 'low'
    end,
    'trust_level', 'authoritative_source',
    'provenance', 'authoritative_source',
    'source_availability', 'available',
    'measurement', coalesce(p_measurement, '{}'::jsonb),
    'relations', coalesce(p_relations, '{}'::jsonb),
    'metadata', coalesce(p_metadata, '{}'::jsonb),
    'source_adapter_version', 'learning-content-adapters@1',
    'topic_resolver_version', 'topic-resolver@1',
    'target_record_id', p_target_record_id,
    'correction_reason', case when p_record_kind = 'correction'
      then 'measurement_corrected' end,
    'tombstone_reason', case when p_record_kind = 'tombstone'
      then 'student_requested' end
  ));

  v_result := learning_private.ingest_evidence(
    v_record,
    learning_private.sha256_jsonb(v_record),
    'live',
    null
  );
  if coalesce(v_result ->> 'status', '')
       <> all(array['created', 'duplicate', 'identity_quarantined']::text[]) then
    raise exception using errcode = 'P3001', message = 'phase3_evidence_rejected';
  end if;
  return v_result;
end;
$fn$;

create or replace function learning_private.record_lesson_event(
  p_source_code text,
  p_content_kind text,
  p_content_id text,
  p_content_revision text,
  p_event_name text,
  p_block_id text,
  p_section_id text,
  p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_claim jsonb;
  v_early jsonb;
  v_content public.learning_content_revisions%rowtype;
  v_item learning_private.learning_content_items%rowtype;
  v_previous_id uuid;
  v_previous_evidence uuid;
  v_previous_option text;
  v_previous_revision integer;
  v_event_id uuid := pg_catalog.gen_random_uuid();
  v_source_record_id text;
  v_source_revision integer := 1;
  v_record_kind text := 'event';
  v_is_correct boolean;
  v_measurement jsonb := '{}'::jsonb;
  v_metadata jsonb;
  v_relations jsonb := '{}'::jsonb;
  v_evidence jsonb;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if (p_source_code, p_content_kind) not in (
    ('structured_lesson_activity', 'structured_lesson'),
    ('bundled_lesson_activity', 'bundled_lesson')
  ) then return '{"status":"validation_rejected"}'::jsonb; end if;

  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'lesson_event',
    pg_catalog.jsonb_build_object(
      'content_kind', p_content_kind, 'content_id', p_content_id,
      'content_revision', p_content_revision, 'event_name', p_event_name,
      'block_id', p_block_id, 'section_id', p_section_id,
      'selected_option_id', p_selected_option_id
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;

  select content.* into v_content
    from public.learning_content_revisions as content
   where content.source_code = p_source_code
     and content.content_kind = p_content_kind
     and content.content_id = p_content_id
     and content.content_revision = p_content_revision
     and content.status = 'published';
  if not found then
    v_result := case when exists (
      select 1 from public.learning_content_revisions as candidate
       where candidate.source_code = p_source_code
         and candidate.content_kind = p_content_kind
         and candidate.content_id = p_content_id
    ) then '{"status":"content_revision_mismatch"}'::jsonb
      else '{"status":"not_found"}'::jsonb end;
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id, v_result
    );
  end if;
  if p_source_code = 'structured_lesson_activity' and not exists (
    select 1 from public.structured_lessons as lesson
     where lesson.id::text = p_content_id and lesson.status = 'published'
  ) then return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, '{"status":"not_found"}'::jsonb
  ); end if;

  if p_source_code = 'structured_lesson_activity' then
    if not (p_event_name = any(array[
      'lesson_opened', 'quiz_answered', 'osym_simulation_answered',
      'lesson_completed', 'audio_started', 'audio_completed',
      'visual_audio_clicked'
    ]::text[])) then return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"validation_rejected"}'::jsonb
    ); end if;
  elsif not (p_event_name = any(array[
    'lesson_opened', 'quiz_answered', 'lesson_completed'
  ]::text[])) then return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id,
    '{"status":"validation_rejected"}'::jsonb
  );
  end if;

  if p_event_name in ('quiz_answered', 'osym_simulation_answered') then
    if coalesce(p_block_id, '') = '' or coalesce(p_selected_option_id, '') = '' then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        '{"status":"validation_rejected"}'::jsonb
      );
    end if;
    select item.* into v_item
      from learning_private.learning_content_items as item
     where item.source_code = p_source_code and item.content_kind = p_content_kind
       and item.content_id = p_content_id and item.content_revision = p_content_revision
       and item.item_id = p_block_id and item.item_kind = 'question';
    if not found or not (p_selected_option_id = any(v_item.option_ids)) then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        '{"status":"not_found"}'::jsonb
      );
    end if;
    v_is_correct := p_selected_option_id = v_item.correct_option_id;
    v_source_record_id := 'lesson-answer:' || pg_catalog.substr(
      learning_private.sha256_jsonb(pg_catalog.jsonb_build_object(
        'source', p_source_code, 'content', p_content_id,
        'revision', p_content_revision, 'block', p_block_id
      )), 1, 40
    );
    if p_source_code = 'structured_lesson_activity' then
      select event.id, event.evidence_record_id, event.selected_option_id,
             event.source_revision
        into v_previous_id, v_previous_evidence, v_previous_option, v_previous_revision
        from public.lesson_activity_events as event
       where event.student_id = v_student and event.lesson_id::text = p_content_id
         and event.content_revision = p_content_revision
         and event.source_record_id = v_source_record_id
         and event.record_kind <> 'tombstone'
       order by event.source_revision desc limit 1 for update;
    else
      select event.id, event.evidence_record_id, event.selected_option_id,
             event.source_revision
        into v_previous_id, v_previous_evidence, v_previous_option, v_previous_revision
        from public.bundled_lesson_activity_events as event
       where event.student_id = v_student and event.content_id = p_content_id
         and event.content_revision = p_content_revision
         and event.source_record_id = v_source_record_id
         and event.record_kind <> 'tombstone'
       order by event.source_revision desc limit 1 for update;
    end if;
    if found and v_previous_option = p_selected_option_id then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        pg_catalog.jsonb_build_object('status', 'duplicate', 'event_id', v_previous_id)
      );
    elsif v_previous_id is not null then
      v_source_revision := v_previous_revision + 1;
      if v_previous_evidence is not null then v_record_kind := 'correction'; end if;
    end if;
    v_measurement := pg_catalog.jsonb_build_object(
      'student_correct', v_is_correct,
      'student_correct_source', 'system_measured'
    );
  elsif p_event_name = 'lesson_completed' then
    v_source_record_id := 'lesson-complete:' || pg_catalog.substr(
      learning_private.sha256_jsonb(pg_catalog.jsonb_build_object(
        'source', p_source_code, 'content', p_content_id,
        'revision', p_content_revision
      )), 1, 40
    );
    if p_source_code = 'structured_lesson_activity' then
      select event.id into v_previous_id
        from public.lesson_activity_events as event
       where event.student_id = v_student and event.lesson_id::text = p_content_id
         and event.content_revision = p_content_revision
         and event.source_record_id = v_source_record_id
         and event.record_kind <> 'tombstone' limit 1;
    else
      select event.id into v_previous_id
        from public.bundled_lesson_activity_events as event
       where event.student_id = v_student and event.content_id = p_content_id
         and event.content_revision = p_content_revision
         and event.source_record_id = v_source_record_id
         and event.record_kind <> 'tombstone' limit 1;
    end if;
    if v_previous_id is not null then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        pg_catalog.jsonb_build_object('status', 'duplicate', 'event_id', v_previous_id)
      );
    end if;
    v_measurement := pg_catalog.jsonb_build_object(
      'completion_status', 'completed',
      'completion_source', 'client_interaction'
    );
  else
    v_source_record_id := v_event_id::text;
  end if;

  if p_source_code = 'structured_lesson_activity' then
    v_metadata := pg_catalog.jsonb_build_object(
      'lesson_kind', 'database', 'block_id', coalesce(p_block_id, 'none'),
      'section_id', coalesce(p_section_id, 'none'), 'event_type', p_event_name
    );
    v_relations := pg_catalog.jsonb_build_object('lesson_id', p_content_id);
    insert into public.lesson_activity_events (
      id, lesson_id, student_id, event_name, block_id, section_id,
      selected_option_id, is_correct, record_kind, source_record_id,
      source_revision, target_event_id, client_action_id, content_revision,
      metadata
    ) values (
      v_event_id, p_content_id::uuid, v_student, p_event_name, p_block_id,
      p_section_id, p_selected_option_id, v_is_correct, v_record_kind,
      v_source_record_id, v_source_revision, v_previous_id,
      p_client_action_id, p_content_revision, '{}'::jsonb
    );
  else
    v_metadata := pg_catalog.jsonb_build_object(
      'lesson_slug', p_content_id, 'content_revision', p_content_revision,
      'block_id', coalesce(p_block_id, 'none'),
      'section_id', coalesce(p_section_id, 'none')
    );
    insert into public.bundled_lesson_activity_events (
      id, student_id, content_id, content_revision, event_name, block_id,
      section_id, selected_option_id, is_correct, record_kind,
      source_record_id, source_revision, target_event_id, client_action_id
    ) values (
      v_event_id, v_student, p_content_id, p_content_revision, p_event_name,
      p_block_id, p_section_id, p_selected_option_id, v_is_correct,
      v_record_kind, v_source_record_id, v_source_revision, v_previous_id,
      p_client_action_id
    );
  end if;

  v_evidence := learning_private.emit_content_evidence(
    v_student, p_source_code, p_content_kind, p_content_id, p_content_revision,
    v_source_record_id, p_content_revision || ':event-' || v_source_revision::text,
    p_event_name, v_record_kind, p_client_action_id, v_measurement,
    v_metadata, v_relations, v_previous_evidence
  );
  if p_source_code = 'structured_lesson_activity' then
    update public.lesson_activity_events
       set evidence_record_id = (v_evidence ->> 'record_id')::uuid
     where id = v_event_id and v_evidence ->> 'record_id' is not null;
  else
    update public.bundled_lesson_activity_events
       set evidence_record_id = (v_evidence ->> 'record_id')::uuid
     where id = v_event_id and v_evidence ->> 'record_id' is not null;
  end if;
  v_result := pg_catalog.jsonb_build_object(
    'status', v_evidence ->> 'status', 'event_id', v_event_id,
    'record_kind', v_record_kind
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.save_lesson_progress(
  p_source_code text,
  p_content_kind text,
  p_content_id text,
  p_content_revision text,
  p_section_id text,
  p_completed_section_ids text[],
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_claim jsonb;
  v_early jsonb;
  v_sections text[];
  v_required integer;
  v_completed integer;
  v_status text;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if (p_source_code, p_content_kind) not in (
    ('structured_lesson_activity', 'structured_lesson'),
    ('bundled_lesson_activity', 'bundled_lesson')
  ) then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'lesson_progress',
    pg_catalog.jsonb_build_object(
      'content_id', p_content_id, 'content_revision', p_content_revision,
      'section_id', p_section_id,
      'completed_section_ids', coalesce(p_completed_section_ids, array[]::text[])
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;
  if not exists (
    select 1 from public.learning_content_revisions as content
     where content.source_code = p_source_code and content.content_kind = p_content_kind
       and content.content_id = p_content_id
       and content.content_revision = p_content_revision and content.status = 'published'
  ) then return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id,
    '{"status":"content_revision_mismatch"}'::jsonb
  ); end if;

  select coalesce(pg_catalog.array_agg(section_id order by section_id), array[]::text[])
    into v_sections
    from (
      select distinct pg_catalog.unnest(
        coalesce(p_completed_section_ids, array[]::text[])
      ) as section_id
    ) as unique_sections
   where section_id is not null and section_id <> '';
  if exists (
    select 1 from pg_catalog.unnest(v_sections) as supplied(section_id)
     where not exists (
       select 1 from learning_private.learning_content_items as item
        where item.source_code = p_source_code and item.content_kind = p_content_kind
          and item.content_id = p_content_id and item.content_revision = p_content_revision
          and item.item_kind = 'section' and item.item_id = supplied.section_id
     )
  ) or (p_section_id is not null and not exists (
    select 1 from learning_private.learning_content_items as item
     where item.source_code = p_source_code and item.content_kind = p_content_kind
       and item.content_id = p_content_id and item.content_revision = p_content_revision
       and item.item_kind = 'section' and item.item_id = p_section_id
  )) then return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id,
    '{"status":"not_found"}'::jsonb
  ); end if;

  select pg_catalog.count(*)::integer into v_required
    from learning_private.learning_content_items as item
   where item.source_code = p_source_code and item.content_kind = p_content_kind
     and item.content_id = p_content_id and item.content_revision = p_content_revision
     and item.item_kind = 'section' and item.required;
  v_completed := pg_catalog.cardinality(v_sections);
  v_status := case when v_required > 0 and v_completed >= v_required
    then 'completed' else 'in_progress' end;

  insert into public.student_lesson_progress (
    student_id, source_code, content_kind, content_id, content_revision,
    current_section_id, completed_section_ids, status, last_client_action_id,
    completed_at
  ) values (
    v_student, p_source_code, p_content_kind, p_content_id, p_content_revision,
    p_section_id, v_sections, v_status, p_client_action_id,
    case when v_status = 'completed' then pg_catalog.clock_timestamp() end
  ) on conflict (student_id, source_code, content_id, content_revision)
  do update set
    current_section_id = excluded.current_section_id,
    completed_section_ids = excluded.completed_section_ids,
    status = excluded.status,
    last_client_action_id = excluded.last_client_action_id,
    updated_at = pg_catalog.clock_timestamp(),
    completed_at = coalesce(public.student_lesson_progress.completed_at, excluded.completed_at);

  v_result := pg_catalog.jsonb_build_object(
    'status', 'created', 'progress_status', v_status,
    'current_section_id', p_section_id,
    'completed_section_ids', pg_catalog.to_jsonb(v_sections),
    'required_section_count', v_required
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.record_note_open(
  p_content_id text,
  p_content_revision text,
  p_content_kind text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_claim jsonb;
  v_early jsonb;
  v_event_id uuid := pg_catalog.gen_random_uuid();
  v_evidence jsonb;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if p_content_kind <> 'library_note' then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_claim := learning_private.claim_content_action(
    v_student, 'library_note_exposure', p_client_action_id, 'note_open',
    pg_catalog.jsonb_build_object(
      'content_id', p_content_id, 'content_revision', p_content_revision,
      'content_kind', p_content_kind
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;
  if not exists (
    select 1 from public.learning_content_revisions as content
     where content.source_code = 'library_note_exposure'
       and content.content_kind = p_content_kind and content.content_id = p_content_id
       and content.content_revision = p_content_revision and content.status = 'published'
  ) then return learning_private.complete_content_action(
    v_student, 'library_note_exposure', p_client_action_id,
    '{"status":"not_found"}'::jsonb
  ); end if;
  if p_content_revision like 'db-%' and not exists (
    select 1 from public.library_notes as note
     where note.id::text = p_content_id and note.status = 'published'
  ) then return learning_private.complete_content_action(
    v_student, 'library_note_exposure', p_client_action_id,
    '{"status":"not_found"}'::jsonb
  ); end if;

  insert into public.library_note_exposure_events (
    id, student_id, content_kind, content_id, content_revision,
    client_action_id
  ) values (
    v_event_id, v_student, p_content_kind, p_content_id,
    p_content_revision, p_client_action_id
  );
  v_evidence := learning_private.emit_content_evidence(
    v_student, 'library_note_exposure', p_content_kind, p_content_id,
    p_content_revision, v_event_id::text, p_content_revision,
    'note_opened', 'event', p_client_action_id, '{}'::jsonb,
    pg_catalog.jsonb_build_object(
      'content_kind', p_content_kind, 'content_revision', p_content_revision
    ), '{}'::jsonb, null
  );
  update public.library_note_exposure_events
     set evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where id = v_event_id and v_evidence ->> 'record_id' is not null;
  v_result := pg_catalog.jsonb_build_object(
    'status', v_evidence ->> 'status', 'exposure_id', v_event_id
  );
  return learning_private.complete_content_action(
    v_student, 'library_note_exposure', p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.question_source_spec(
  p_source_code text
)
returns jsonb
language sql
immutable
set search_path = ''
as $fn$
  select case p_source_code
    when 'db_question_test' then pg_catalog.jsonb_build_object(
      'content_kind', 'db_question_set',
      'answer_event', 'question_answered', 'final_event', 'test_completed'
    )
    when 'bundled_question_test' then pg_catalog.jsonb_build_object(
      'content_kind', 'bundled_question_set',
      'answer_event', 'question_answered', 'final_event', 'test_completed'
    )
    when 'chemistry_atlas' then pg_catalog.jsonb_build_object(
      'content_kind', 'atlas_assessment',
      'answer_event', 'concept_check_answered', 'final_event', 'mini_test_completed'
    )
    when 'geometry_pilot' then pg_catalog.jsonb_build_object(
      'content_kind', 'geometry_assessment',
      'answer_event', 'question_answered', 'final_event', 'test_completed'
    )
    when 'geography_atlas' then pg_catalog.jsonb_build_object(
      'content_kind', 'atlas_assessment',
      'answer_event', null, 'final_event', 'timed_test_completed',
      'time_limit_seconds', 300
    )
    else null
  end;
$fn$;

create or replace function learning_private.start_question_attempt(
  p_source_code text,
  p_content_id text,
  p_content_revision text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_spec jsonb := learning_private.question_source_spec(p_source_code);
  v_kind text := v_spec ->> 'content_kind';
  v_claim jsonb;
  v_early jsonb;
  v_content public.learning_content_revisions%rowtype;
  v_catalog_total integer;
  v_total integer;
  v_question_ids text[];
  v_time_limit_seconds integer;
  v_expires_at timestamptz;
  v_attempt_id uuid := pg_catalog.gen_random_uuid();
  v_question_set_id uuid;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_spec is null then return '{"status":"validation_rejected"}'::jsonb; end if;
  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'question_attempt_start',
    pg_catalog.jsonb_build_object(
      'content_id', p_content_id, 'content_revision', p_content_revision
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;

  select content.* into v_content
    from public.learning_content_revisions as content
   where content.source_code = p_source_code and content.content_kind = v_kind
     and content.content_id = p_content_id
     and content.content_revision = p_content_revision
     and content.status = 'published';
  if not found then
    v_result := case when exists (
      select 1 from public.learning_content_revisions as candidate
       where candidate.source_code = p_source_code
         and candidate.content_kind = v_kind and candidate.content_id = p_content_id
    ) then '{"status":"content_revision_mismatch"}'::jsonb
      else '{"status":"not_found"}'::jsonb end;
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id, v_result
    );
  end if;
  select pg_catalog.count(*)::integer into v_catalog_total
    from learning_private.learning_content_items as item
   where item.source_code = p_source_code and item.content_kind = v_kind
     and item.content_id = p_content_id and item.content_revision = p_content_revision
     and item.item_kind = 'question';
  if v_catalog_total = 0 or v_catalog_total <> v_content.item_count then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"invalid_state"}'::jsonb
    );
  end if;
  if p_source_code = 'chemistry_atlas' then
    select pg_catalog.array_agg(selected.item_id order by selected.rank_key)
      into v_question_ids
      from (
        select item.item_id,
               pg_catalog.md5(p_client_action_id::text || ':' || item.item_id) as rank_key
          from learning_private.learning_content_items as item
         where item.source_code = p_source_code and item.content_kind = v_kind
           and item.content_id = p_content_id
           and item.content_revision = p_content_revision
           and item.item_kind = 'question'
         order by rank_key, item.item_id
         limit 8
      ) as selected;
  else
    select pg_catalog.array_agg(item.item_id order by item.position, item.item_id)
      into v_question_ids
      from learning_private.learning_content_items as item
     where item.source_code = p_source_code and item.content_kind = v_kind
       and item.content_id = p_content_id
       and item.content_revision = p_content_revision
       and item.item_kind = 'question';
  end if;
  v_total := pg_catalog.cardinality(v_question_ids);
  v_time_limit_seconds := nullif(v_spec ->> 'time_limit_seconds', '')::integer;
  v_expires_at := case when v_time_limit_seconds is not null
    then pg_catalog.clock_timestamp() + pg_catalog.make_interval(secs => v_time_limit_seconds)
  end;
  if p_source_code = 'db_question_test' then
    begin v_question_set_id := p_content_id::uuid;
    exception when invalid_text_representation then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        '{"status":"not_found"}'::jsonb
      );
    end;
    if not exists (
      select 1 from public.library_question_sets as question_set
       where question_set.id = v_question_set_id and question_set.status = 'published'
    ) then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        '{"status":"not_found"}'::jsonb
      );
    end if;
  end if;

  insert into public.student_question_set_attempts (
    id, student_id, question_set_id, source_code, content_kind,
    content_id, content_revision, manifest_hash, status, total_count,
    empty_count, question_ids, time_limit_seconds, expires_at,
    start_client_action_id
  ) values (
    v_attempt_id, v_student, v_question_set_id, p_source_code, v_kind,
    p_content_id, p_content_revision, v_content.content_hash, 'in_progress',
    v_total, v_total, v_question_ids, v_time_limit_seconds, v_expires_at,
    p_client_action_id
  );
  v_result := pg_catalog.jsonb_build_object(
    'status', 'created', 'attempt_id', v_attempt_id,
    'attempt_status', 'in_progress', 'content_id', p_content_id,
    'content_revision', p_content_revision, 'total_count', v_total,
    'question_ids', pg_catalog.to_jsonb(v_question_ids),
    'time_limit_seconds', v_time_limit_seconds,
    'expires_at', v_expires_at,
    'answers', '{}'::jsonb
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.save_question_answer(
  p_source_code text,
  p_attempt_id uuid,
  p_question_id text,
  p_selected_option_id text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_spec jsonb := learning_private.question_source_spec(p_source_code);
  v_attempt record;
  v_question learning_private.learning_content_items%rowtype;
  v_current record;
  v_previous_revision_id uuid;
  v_claim jsonb;
  v_early jsonb;
  v_revision_id uuid := pg_catalog.gen_random_uuid();
  v_answer_revision integer := 1;
  v_record_kind text := 'event';
  v_correct boolean;
  v_evidence jsonb;
  v_result jsonb;
  v_source_record_id text;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_spec is null or p_attempt_id is null or coalesce(p_question_id, '') = ''
     or coalesce(p_selected_option_id, '') = '' then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  select attempt.* into v_attempt
    from public.student_question_set_attempts as attempt
   where attempt.id = p_attempt_id and attempt.student_id = v_student
     and attempt.source_code = p_source_code
   for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;

  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'question_answer',
    pg_catalog.jsonb_build_object(
      'attempt_id', p_attempt_id, 'question_id', p_question_id,
      'selected_option_id', p_selected_option_id
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;
  if v_attempt.status <> 'in_progress' then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"invalid_state"}'::jsonb
    );
  end if;
  if v_attempt.expires_at is not null
     and pg_catalog.clock_timestamp() > v_attempt.expires_at then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"invalid_state"}'::jsonb
    );
  end if;

  select item.* into v_question
    from learning_private.learning_content_items as item
   where item.source_code = p_source_code
     and item.content_kind = v_attempt.content_kind
     and item.content_id = v_attempt.content_id
     and item.content_revision = v_attempt.content_revision
     and item.item_id = p_question_id and item.item_kind = 'question'
     and (v_attempt.question_ids is null
       or p_question_id = any(v_attempt.question_ids));
  if not found or not (p_selected_option_id = any(v_question.option_ids)) then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"not_found"}'::jsonb
    );
  end if;
  v_correct := p_selected_option_id = v_question.correct_option_id;
  select answer.* into v_current
    from public.student_question_attempt_answers as answer
   where answer.attempt_id = p_attempt_id and answer.question_id = p_question_id
   for update;
  if found then
    if v_current.active and v_current.selected_option_id = p_selected_option_id then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        pg_catalog.jsonb_build_object(
          'status', 'duplicate', 'attempt_id', p_attempt_id,
          'question_id', p_question_id, 'answer_revision', v_current.answer_revision
        )
      );
    end if;
    v_answer_revision := v_current.answer_revision + 1;
    v_record_kind := case when v_current.evidence_record_id is null
      then 'event' else 'correction' end;
    select revision.revision_id into v_previous_revision_id
      from public.student_question_answer_revisions as revision
     where revision.attempt_id = p_attempt_id
       and revision.question_id = p_question_id
       and revision.answer_revision = v_current.answer_revision;
  end if;
  v_source_record_id := p_attempt_id::text || ':' || p_question_id;

  insert into public.student_question_answer_revisions (
    revision_id, attempt_id, student_id, question_id, answer_revision,
    selected_option_id, is_correct, record_kind, client_action_id,
    target_revision_id
  ) values (
    v_revision_id, p_attempt_id, v_student, p_question_id,
    v_answer_revision, p_selected_option_id, v_correct, v_record_kind,
    p_client_action_id, v_previous_revision_id
  );

  insert into public.student_question_attempt_answers (
    attempt_id, student_id, question_id, selected_option_id, is_correct,
    answer_revision, active, client_action_id
  ) values (
    p_attempt_id, v_student, p_question_id, p_selected_option_id,
    v_correct, v_answer_revision, true, p_client_action_id
  ) on conflict (attempt_id, question_id) do update set
    selected_option_id = excluded.selected_option_id,
    is_correct = excluded.is_correct,
    answer_revision = excluded.answer_revision,
    active = true,
    client_action_id = excluded.client_action_id,
    updated_at = pg_catalog.clock_timestamp();

  update public.student_question_set_attempts
     set answers = pg_catalog.jsonb_set(
       answers, array[p_question_id], pg_catalog.to_jsonb(p_selected_option_id), true
     ), updated_at = pg_catalog.clock_timestamp()
   where id = p_attempt_id;

  if v_spec ->> 'answer_event' is not null then
    v_evidence := learning_private.emit_content_evidence(
      v_student, p_source_code, v_attempt.content_kind, v_attempt.content_id,
      v_attempt.content_revision, v_source_record_id,
      v_attempt.content_revision || ':answer-' || v_answer_revision::text,
      v_spec ->> 'answer_event', v_record_kind, p_client_action_id,
      pg_catalog.jsonb_build_object(
        'student_correct', v_correct, 'student_correct_source', 'system_measured'
      ),
      case when p_source_code in ('chemistry_atlas') then
        pg_catalog.jsonb_build_object(
          'atlas', 'chemistry', 'region_code', 'global',
          'task_code', p_question_id, 'storage_version', v_attempt.content_revision,
          'timed', false
        )
      when p_source_code = 'geometry_pilot' then
        pg_catalog.jsonb_build_object(
          'content_revision', v_attempt.content_revision, 'attempt_scope', 'question'
        )
      else
        pg_catalog.jsonb_build_object(
          'question_set_id', v_attempt.content_id,
          'content_revision', v_attempt.content_revision,
          'attempt_scope', 'question'
        )
      end,
      pg_catalog.jsonb_build_object(
        'attempt_id', p_attempt_id::text, 'content_id', v_attempt.content_id,
        'question_id', p_question_id
      ),
      case when v_record_kind = 'correction' then v_current.evidence_record_id end
    );
  else
    v_evidence := '{"status":"created"}'::jsonb;
  end if;

  update public.student_question_attempt_answers
     set evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where attempt_id = p_attempt_id and question_id = p_question_id
     and v_evidence ->> 'record_id' is not null;
  update public.student_question_answer_revisions
     set evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where revision_id = v_revision_id and v_evidence ->> 'record_id' is not null;
  v_result := pg_catalog.jsonb_build_object(
    'status', v_evidence ->> 'status', 'attempt_id', p_attempt_id,
    'question_id', p_question_id, 'answer_revision', v_answer_revision,
    'selected_option_id', p_selected_option_id
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.finalize_question_attempt(
  p_source_code text,
  p_attempt_id uuid,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_spec jsonb := learning_private.question_source_spec(p_source_code);
  v_attempt record;
  v_claim jsonb;
  v_early jsonb;
  v_total integer;
  v_correct integer;
  v_incorrect integer;
  v_marked integer;
  v_blank integer;
  v_duration_seconds integer;
  v_measurement jsonb;
  v_evidence jsonb;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_spec is null or p_attempt_id is null then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  select attempt.* into v_attempt
    from public.student_question_set_attempts as attempt
   where attempt.id = p_attempt_id and attempt.student_id = v_student
     and attempt.source_code = p_source_code
   for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'question_attempt_finalize',
    pg_catalog.jsonb_build_object('attempt_id', p_attempt_id)
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;

  if v_attempt.status = 'completed' then
    v_result := pg_catalog.jsonb_build_object(
      'status', 'duplicate', 'attempt_id', v_attempt.id,
      'attempt_status', 'completed', 'correct_count', v_attempt.correct_count,
      'wrong_count', v_attempt.wrong_count, 'empty_count', v_attempt.empty_count,
      'marked_count', v_attempt.marked_count, 'total_count', v_attempt.total_count,
      'accuracy', v_attempt.success_rate
    );
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id, v_result
    );
  elsif v_attempt.status <> 'in_progress' then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"invalid_state"}'::jsonb
    );
  end if;
  select pg_catalog.count(*)::integer into v_total
    from learning_private.learning_content_items as item
   where item.source_code = p_source_code and item.content_kind = v_attempt.content_kind
     and item.content_id = v_attempt.content_id
     and item.content_revision = v_attempt.content_revision
     and item.item_kind = 'question'
     and (v_attempt.question_ids is null
       or item.item_id = any(v_attempt.question_ids));
  if v_total = 0 or v_total <> v_attempt.total_count then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"content_revision_mismatch"}'::jsonb
    );
  end if;
  select
    pg_catalog.count(*) filter (where answer.is_correct)::integer,
    pg_catalog.count(*) filter (where not answer.is_correct)::integer,
    pg_catalog.count(*)::integer
    into v_correct, v_incorrect, v_marked
    from public.student_question_attempt_answers as answer
   where answer.attempt_id = p_attempt_id and answer.student_id = v_student
     and answer.active;
  v_blank := v_total - v_marked;
  v_duration_seconds := greatest(
    0, extract(epoch from (pg_catalog.clock_timestamp() - v_attempt.started_at))::integer
  );
  if v_attempt.time_limit_seconds is not null then
    v_duration_seconds := least(v_duration_seconds, v_attempt.time_limit_seconds);
  end if;
  v_measurement := pg_catalog.jsonb_build_object(
    'correct_count', v_correct, 'incorrect_count', v_incorrect,
    'blank_count', v_blank, 'marked_count', v_marked,
    'total_count', v_total
  );
  if v_marked > 0 then
    v_measurement := v_measurement || pg_catalog.jsonb_build_object(
      'accuracy', v_correct::numeric / v_marked::numeric,
      'accuracy_denominator', 'marked',
      'accuracy_formula', 'correct_count / marked_count',
      'accuracy_formula_version', 'accuracy-marked-v1',
      'accuracy_source', 'server_computed'
    );
  end if;
  if v_duration_seconds > 0 then
    v_measurement := v_measurement || pg_catalog.jsonb_build_object(
      'duration_minutes', v_duration_seconds::numeric / 60,
      'duration_source', 'active_measurement'
    );
  end if;

  update public.student_question_set_attempts
     set correct_count = v_correct, wrong_count = v_incorrect,
         empty_count = v_blank, marked_count = v_marked, total_count = v_total,
         success_rate = case when v_marked > 0
           then v_correct::numeric / v_marked::numeric else null end,
         duration_seconds = v_duration_seconds, status = 'completed',
         finalize_client_action_id = p_client_action_id,
         completed_at = pg_catalog.clock_timestamp(),
         updated_at = pg_catalog.clock_timestamp()
   where id = p_attempt_id;

  v_evidence := learning_private.emit_content_evidence(
    v_student, p_source_code, v_attempt.content_kind, v_attempt.content_id,
    v_attempt.content_revision, p_attempt_id::text,
    v_attempt.content_revision || ':final', v_spec ->> 'final_event',
    'event', p_client_action_id, v_measurement,
    case when p_source_code = 'chemistry_atlas' then
      pg_catalog.jsonb_build_object(
        'atlas', 'chemistry', 'region_code', 'global',
        'task_code', v_attempt.content_id,
        'storage_version', v_attempt.content_revision, 'timed', false
      )
    when p_source_code = 'geometry_pilot' then
      pg_catalog.jsonb_build_object(
        'content_revision', v_attempt.content_revision, 'attempt_scope', 'complete'
      )
    when p_source_code = 'geography_atlas' then
      pg_catalog.jsonb_build_object(
        'atlas', 'geography', 'region_code', 'kamp',
        'task_code', v_attempt.content_id,
        'storage_version', v_attempt.content_revision, 'timed', true
      )
    else pg_catalog.jsonb_build_object(
      'question_set_id', v_attempt.content_id,
      'content_revision', v_attempt.content_revision, 'attempt_scope', 'complete'
    ) end,
    pg_catalog.jsonb_build_object(
      'attempt_id', p_attempt_id::text, 'content_id', v_attempt.content_id
    ), null
  );
  update public.student_question_set_attempts
     set completion_evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where id = p_attempt_id and v_evidence ->> 'record_id' is not null;
  v_result := pg_catalog.jsonb_build_object(
    'status', v_evidence ->> 'status', 'attempt_id', p_attempt_id,
    'attempt_status', 'completed', 'correct_count', v_correct,
    'wrong_count', v_incorrect, 'empty_count', v_blank,
    'marked_count', v_marked, 'total_count', v_total,
    'duration_seconds', v_duration_seconds,
    'accuracy', case when v_marked > 0
      then v_correct::numeric / v_marked::numeric else null end
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.reset_question_attempt(
  p_source_code text,
  p_attempt_id uuid,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_spec jsonb := learning_private.question_source_spec(p_source_code);
  v_attempt record;
  v_answer record;
  v_claim jsonb;
  v_early jsonb;
  v_evidence jsonb;
  v_tombstones integer := 0;
  v_result jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if v_spec is null or p_attempt_id is null then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  select attempt.* into v_attempt
    from public.student_question_set_attempts as attempt
   where attempt.id = p_attempt_id and attempt.student_id = v_student
     and attempt.source_code = p_source_code
   for update;
  if not found then return '{"status":"not_found"}'::jsonb; end if;
  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'question_attempt_reset',
    pg_catalog.jsonb_build_object('attempt_id', p_attempt_id)
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;
  if v_attempt.status = 'abandoned' then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      pg_catalog.jsonb_build_object(
        'status', 'duplicate', 'attempt_id', p_attempt_id,
        'attempt_status', 'abandoned'
      )
    );
  end if;

  for v_answer in
    select answer.*, revision.revision_id
      from public.student_question_attempt_answers as answer
      join public.student_question_answer_revisions as revision
        on revision.attempt_id = answer.attempt_id
       and revision.question_id = answer.question_id
       and revision.answer_revision = answer.answer_revision
     where answer.attempt_id = p_attempt_id and answer.student_id = v_student
       and answer.active and answer.evidence_record_id is not null
     order by answer.question_id
  loop
    insert into public.student_question_answer_revisions (
      attempt_id, student_id, question_id, answer_revision,
      record_kind, target_revision_id
    ) values (
      p_attempt_id, v_student, v_answer.question_id,
      v_answer.answer_revision + 1, 'tombstone', v_answer.revision_id
    );
    v_evidence := learning_private.emit_content_evidence(
      v_student, p_source_code, v_attempt.content_kind, v_attempt.content_id,
      v_attempt.content_revision,
      p_attempt_id::text || ':' || v_answer.question_id,
      v_attempt.content_revision || ':answer-' || (v_answer.answer_revision + 1)::text,
      v_spec ->> 'answer_event', 'tombstone', null, '{}'::jsonb,
      case when p_source_code = 'chemistry_atlas' then
        pg_catalog.jsonb_build_object(
          'atlas', 'chemistry', 'region_code', 'global',
          'task_code', v_answer.question_id,
          'storage_version', v_attempt.content_revision, 'timed', false
        )
      when p_source_code = 'geometry_pilot' then
        pg_catalog.jsonb_build_object(
          'content_revision', v_attempt.content_revision, 'attempt_scope', 'question'
        )
      else pg_catalog.jsonb_build_object(
        'question_set_id', v_attempt.content_id,
        'content_revision', v_attempt.content_revision, 'attempt_scope', 'question'
      ) end,
      pg_catalog.jsonb_build_object(
        'attempt_id', p_attempt_id::text, 'content_id', v_attempt.content_id,
        'question_id', v_answer.question_id
      ), v_answer.evidence_record_id
    );
    update public.student_question_answer_revisions
       set evidence_record_id = (v_evidence ->> 'record_id')::uuid
     where attempt_id = p_attempt_id and question_id = v_answer.question_id
       and answer_revision = v_answer.answer_revision + 1
       and v_evidence ->> 'record_id' is not null;
    v_tombstones := v_tombstones + 1;
  end loop;

  if v_attempt.completion_evidence_record_id is not null then
    v_evidence := learning_private.emit_content_evidence(
      v_student, p_source_code, v_attempt.content_kind, v_attempt.content_id,
      v_attempt.content_revision, p_attempt_id::text,
      v_attempt.content_revision || ':reset-' || (v_attempt.reset_count + 1)::text,
      v_spec ->> 'final_event', 'tombstone', null, '{}'::jsonb,
      case when p_source_code = 'chemistry_atlas' then
        pg_catalog.jsonb_build_object(
          'atlas', 'chemistry', 'region_code', 'global',
          'task_code', v_attempt.content_id,
          'storage_version', v_attempt.content_revision, 'timed', false
        )
      when p_source_code = 'geometry_pilot' then
        pg_catalog.jsonb_build_object(
          'content_revision', v_attempt.content_revision, 'attempt_scope', 'complete'
        )
      when p_source_code = 'geography_atlas' then
        pg_catalog.jsonb_build_object(
          'atlas', 'geography', 'region_code', 'kamp',
          'task_code', v_attempt.content_id,
          'storage_version', v_attempt.content_revision, 'timed', true
        )
      else pg_catalog.jsonb_build_object(
        'question_set_id', v_attempt.content_id,
        'content_revision', v_attempt.content_revision, 'attempt_scope', 'complete'
      ) end,
      pg_catalog.jsonb_build_object(
        'attempt_id', p_attempt_id::text, 'content_id', v_attempt.content_id
      ), v_attempt.completion_evidence_record_id
    );
    v_tombstones := v_tombstones + 1;
  end if;

  update public.student_question_attempt_answers
     set active = false, updated_at = pg_catalog.clock_timestamp()
   where attempt_id = p_attempt_id and student_id = v_student;
  update public.student_question_set_attempts
     set answers = '{}'::jsonb, status = 'abandoned', correct_count = 0,
         wrong_count = 0, empty_count = 0, marked_count = 0, total_count = 0,
         success_rate = null, reset_count = reset_count + 1,
         abandoned_at = pg_catalog.clock_timestamp(),
         updated_at = pg_catalog.clock_timestamp()
   where id = p_attempt_id;
  v_result := pg_catalog.jsonb_build_object(
    'status', 'created', 'attempt_id', p_attempt_id,
    'attempt_status', 'abandoned', 'tombstone_count', v_tombstones
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function public.get_question_attempt_result(p_attempt_id uuid)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_attempt record;
  v_answers jsonb;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  select attempt.* into v_attempt
    from public.student_question_set_attempts as attempt
   where attempt.id = p_attempt_id and attempt.student_id = v_student;
  if not found then return '{"status":"not_found"}'::jsonb; end if;

  if v_attempt.status = 'completed' then
    select coalesce(pg_catalog.jsonb_agg(pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
      'question_id', item.item_id,
      'selected_option_id', answer.selected_option_id,
      'is_correct', answer.is_correct,
      'correct_option_id', item.correct_option_id,
      'explanation', item.explanation,
      'answer_revision', answer.answer_revision
    )) order by coalesce(
      pg_catalog.array_position(v_attempt.question_ids, item.item_id),
      item.position + 1
    )), '[]'::jsonb) into v_answers
      from learning_private.learning_content_items as item
      left join public.student_question_attempt_answers as answer
        on answer.attempt_id = p_attempt_id and answer.active
       and answer.question_id = item.item_id
     where item.source_code = v_attempt.source_code
       and item.content_kind = v_attempt.content_kind
       and item.content_id = v_attempt.content_id
       and item.content_revision = v_attempt.content_revision
       and item.item_kind = 'question'
       and (v_attempt.question_ids is null
         or item.item_id = any(v_attempt.question_ids));
  else
    select coalesce(pg_catalog.jsonb_agg(pg_catalog.jsonb_build_object(
      'question_id', answer.question_id,
      'selected_option_id', answer.selected_option_id,
      'answer_revision', answer.answer_revision
    ) order by item.position), '[]'::jsonb) into v_answers
      from public.student_question_attempt_answers as answer
      join learning_private.learning_content_items as item
        on item.source_code = v_attempt.source_code
       and item.content_kind = v_attempt.content_kind
       and item.content_id = v_attempt.content_id
       and item.content_revision = v_attempt.content_revision
       and item.item_id = answer.question_id
     where answer.attempt_id = p_attempt_id and answer.active;
  end if;
  return pg_catalog.jsonb_strip_nulls(pg_catalog.jsonb_build_object(
    'status', 'available', 'attempt_id', v_attempt.id,
    'attempt_status', v_attempt.status, 'source_code', v_attempt.source_code,
    'content_id', v_attempt.content_id,
    'content_revision', v_attempt.content_revision,
    'question_ids', pg_catalog.to_jsonb(v_attempt.question_ids),
    'time_limit_seconds', v_attempt.time_limit_seconds,
    'expires_at', v_attempt.expires_at,
    'duration_seconds', case when v_attempt.status = 'completed'
      then v_attempt.duration_seconds end,
    'correct_count', case when v_attempt.status = 'completed' then v_attempt.correct_count end,
    'wrong_count', case when v_attempt.status = 'completed' then v_attempt.wrong_count end,
    'empty_count', case when v_attempt.status = 'completed' then v_attempt.empty_count end,
    'marked_count', case when v_attempt.status = 'completed' then v_attempt.marked_count end,
    'total_count', v_attempt.total_count,
    'accuracy', case when v_attempt.status = 'completed' then v_attempt.success_rate end,
    'answers', v_answers,
    'detail_available', exists (
      select 1 from public.learning_content_revisions as content
       where content.source_code = v_attempt.source_code
         and content.content_kind = v_attempt.content_kind
         and content.content_id = v_attempt.content_id
         and content.content_revision = v_attempt.content_revision
    )
  ));
end;
$fn$;

create or replace function learning_private.deterministic_action_uuid(p_value text)
returns uuid
language plpgsql
immutable
strict
set search_path = ''
as $fn$
declare
  v_hash text := pg_catalog.encode(
    pg_catalog.sha256(pg_catalog.convert_to(p_value, 'UTF8')), 'hex'
  );
begin
  return (
    pg_catalog.substr(v_hash, 1, 8) || '-' ||
    pg_catalog.substr(v_hash, 9, 4) || '-4' ||
    pg_catalog.substr(v_hash, 14, 3) || '-8' ||
    pg_catalog.substr(v_hash, 18, 3) || '-' ||
    pg_catalog.substr(v_hash, 21, 12)
  )::uuid;
end;
$fn$;

create or replace function learning_private.record_atlas_snapshot(
  p_source_code text,
  p_content_id text,
  p_content_revision text,
  p_task_id text,
  p_completed boolean,
  p_prediction_used boolean,
  p_client_action_id uuid,
  p_origin text default 'live'
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_claim jsonb;
  v_early jsonb;
  v_state record;
  v_previous_revision_id uuid;
  v_state_id uuid := pg_catalog.gen_random_uuid();
  v_revision_id uuid := pg_catalog.gen_random_uuid();
  v_state_revision integer := 1;
  v_record_kind text := 'snapshot';
  v_evidence jsonb;
  v_result jsonb;
  v_atlas text;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if not (p_source_code = any(array[
    'physics_atlas', 'biology_atlas', 'geography_atlas'
  ]::text[])) or p_completed is null or p_prediction_used is null
     or p_origin not in ('live', 'explicit_device_import') then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  v_atlas := case p_source_code
    when 'physics_atlas' then 'physics'
    when 'biology_atlas' then 'biology'
    else 'geography'
  end;
  v_claim := learning_private.claim_content_action(
    v_student, p_source_code, p_client_action_id, 'atlas_task_snapshot',
    pg_catalog.jsonb_build_object(
      'content_id', p_content_id, 'content_revision', p_content_revision,
      'task_id', p_task_id, 'completed', p_completed,
      'prediction_used', p_prediction_used, 'origin', p_origin
    )
  );
  v_early := learning_private.action_claim_result(v_claim);
  if v_early is not null then return v_early; end if;
  if not exists (
    select 1 from public.learning_content_revisions as content
     where content.source_code = p_source_code
       and content.content_kind = 'atlas_task'
       and content.content_id = p_content_id
       and content.content_revision = p_content_revision
       and content.status = 'published'
  ) then
    v_result := case when exists (
      select 1 from public.learning_content_revisions as candidate
       where candidate.source_code = p_source_code
         and candidate.content_kind = 'atlas_task'
         and candidate.content_id = p_content_id
    ) then '{"status":"content_revision_mismatch"}'::jsonb
      else '{"status":"not_found"}'::jsonb end;
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id, v_result
    );
  end if;
  if not exists (
    select 1 from learning_private.learning_content_items as item
     where item.source_code = p_source_code and item.content_kind = 'atlas_task'
       and item.content_id = p_content_id and item.content_revision = p_content_revision
       and item.item_kind = 'task' and item.item_id = p_task_id
  ) then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"not_found"}'::jsonb
    );
  end if;
  -- Biyoloji tamamlanması, görevde bilinçli kontrol/tahmin adımı olmadan
  -- üretilmez; favori ve yerel "ustalık" alanları bu uca kabul edilmez.
  if p_source_code = 'biology_atlas' and p_completed and not p_prediction_used then
    return learning_private.complete_content_action(
      v_student, p_source_code, p_client_action_id,
      '{"status":"invalid_state"}'::jsonb
    );
  end if;

  select state.* into v_state
    from public.student_atlas_task_states as state
   where state.student_id = v_student and state.source_code = p_source_code
     and state.content_id = p_content_id
     and state.content_revision = p_content_revision
     and state.task_id = p_task_id
   for update;
  if found then
    v_state_id := v_state.state_id;
    if v_state.active and v_state.completed = p_completed
       and v_state.prediction_used = p_prediction_used then
      return learning_private.complete_content_action(
        v_student, p_source_code, p_client_action_id,
        pg_catalog.jsonb_build_object(
          'status', 'duplicate', 'state_id', v_state_id,
          'state_revision', v_state.state_revision
        )
      );
    end if;
    v_state_revision := v_state.state_revision + 1;
    v_record_kind := case when v_state.evidence_record_id is null
      then 'snapshot' else 'correction' end;
    select revision.revision_id into v_previous_revision_id
      from public.student_atlas_task_state_revisions as revision
     where revision.state_id = v_state_id
       and revision.state_revision = v_state.state_revision;
    update public.student_atlas_task_states
       set state_revision = v_state_revision, completed = p_completed,
           prediction_used = p_prediction_used, active = true,
           origin = p_origin, client_action_id = p_client_action_id,
           updated_at = pg_catalog.clock_timestamp()
     where state_id = v_state_id;
  else
    insert into public.student_atlas_task_states (
      state_id, student_id, source_code, content_id, content_revision,
      task_id, state_revision, completed, prediction_used, origin,
      client_action_id
    ) values (
      v_state_id, v_student, p_source_code, p_content_id,
      p_content_revision, p_task_id, v_state_revision, p_completed,
      p_prediction_used, p_origin, p_client_action_id
    );
  end if;

  insert into public.student_atlas_task_state_revisions (
    revision_id, state_id, student_id, state_revision, completed,
    prediction_used, record_kind, client_action_id, target_revision_id
  ) values (
    v_revision_id, v_state_id, v_student, v_state_revision, p_completed,
    p_prediction_used, v_record_kind, p_client_action_id,
    v_previous_revision_id
  );
  v_evidence := learning_private.emit_content_evidence(
    v_student, p_source_code, 'atlas_task', p_content_id,
    p_content_revision, v_state_id::text,
    p_content_revision || ':state-' || v_state_revision::text,
    'atlas_task_state', v_record_kind, p_client_action_id,
    pg_catalog.jsonb_build_object(
      'completion_status', case when p_completed then 'completed' else 'in_progress' end,
      'completion_source', 'system_measured'
    ),
    pg_catalog.jsonb_build_object(
      'atlas', v_atlas, 'region_code', 'global', 'task_code', p_task_id,
      'storage_version', p_content_revision, 'timed', false
    ),
    -- Atlas içerik kimlikleri kaynakta `bölge/deney` taşıyabilir.
    -- Ortak relation sözleşmesi slash kabul etmediğinden kimliği bozup
    -- takma ad üretmeyiz; opak source_locator zaten yetkili hedefi bağlar.
    '{}'::jsonb,
    case when v_record_kind = 'correction' then v_state.evidence_record_id end
  );
  update public.student_atlas_task_states
     set evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where state_id = v_state_id and v_evidence ->> 'record_id' is not null;
  update public.student_atlas_task_state_revisions
     set evidence_record_id = (v_evidence ->> 'record_id')::uuid
   where revision_id = v_revision_id and v_evidence ->> 'record_id' is not null;
  v_result := pg_catalog.jsonb_build_object(
    'status', v_evidence ->> 'status', 'state_id', v_state_id,
    'state_revision', v_state_revision, 'completed', p_completed
  );
  return learning_private.complete_content_action(
    v_student, p_source_code, p_client_action_id, v_result
  );
end;
$fn$;

create or replace function learning_private.import_atlas_snapshot(
  p_source_code text,
  p_snapshot jsonb,
  p_snapshot_hash text,
  p_client_action_id uuid
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student uuid := learning_private.current_student_id();
  v_owner uuid;
  v_import_id uuid := pg_catalog.gen_random_uuid();
  v_inserted_id uuid;
  v_task jsonb;
  v_task_result jsonb;
  v_child_action uuid;
  v_allowed integer;
  v_excluded integer;
  v_processed integer;
  v_rejected integer;
  v_cursor integer;
  v_receipt_allowed integer;
  v_receipt_excluded integer;
  v_receipt_device_import_id text;
  v_receipt_schema_version text;
  v_receipt_status text;
  v_receipt_result jsonb;
  v_result jsonb;
  v_consented_at timestamptz;
  v_ordinality bigint;
  v_batch_size constant integer := 25;
begin
  if v_student is null then return '{"status":"unauthorized"}'::jsonb; end if;
  if not (p_source_code = any(array[
    'physics_atlas', 'biology_atlas', 'geography_atlas'
  ]::text[])) or p_snapshot is null
     or pg_catalog.jsonb_typeof(p_snapshot) <> 'object'
     or p_client_action_id is null
     or coalesce(p_snapshot_hash, '') !~ '^[0-9a-f]{64}$' then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  if exists (
    select 1 from pg_catalog.jsonb_object_keys(p_snapshot) as supplied(key)
     where not (supplied.key = any(array[
       'schema_version', 'device_import_id', 'consented_at',
       'tasks', 'excluded_count'
     ]::text[]))
  ) or p_snapshot ->> 'schema_version' <> '1.0'
     or coalesce(p_snapshot ->> 'device_import_id', '') !~ '^[A-Za-z0-9_-]{8,128}$'
     or pg_catalog.jsonb_typeof(p_snapshot -> 'tasks') <> 'array'
     or pg_catalog.jsonb_array_length(p_snapshot -> 'tasks') > 500
     or coalesce(p_snapshot ->> 'excluded_count', '') !~ '^\d+$' then
    return case when p_snapshot ->> 'schema_version' is distinct from '1.0'
      then '{"status":"unsupported_version"}'::jsonb
      else '{"status":"validation_rejected"}'::jsonb end;
  end if;
  if (p_snapshot ->> 'excluded_count')::numeric > 1000000 then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  -- Yapısal olarak bozuk bir satır, daha önce tamamlanmış bir paketin önünde
  -- kalıcı bir engel oluşturmamalı. Bu nedenle manifestin tamamı receipt
  -- alınmadan önce doğrulanır; öğrenme alanı dışındaki anahtarlar kabul edilmez.
  if exists (
    select 1
      from pg_catalog.jsonb_array_elements(p_snapshot -> 'tasks') as task(value)
     where pg_catalog.jsonb_typeof(task.value) is distinct from 'object'
  ) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  if exists (
    select 1
      from pg_catalog.jsonb_array_elements(p_snapshot -> 'tasks') as task(value)
     where exists (
       select 1 from pg_catalog.jsonb_object_keys(task.value) as supplied(key)
        where not (supplied.key = any(array[
          'content_id', 'content_revision', 'task_id',
          'completed', 'prediction_used'
        ]::text[]))
     )
        or pg_catalog.jsonb_typeof(task.value -> 'content_id') is distinct from 'string'
        or pg_catalog.char_length(task.value ->> 'content_id') not between 1 and 192
        or (task.value ->> 'content_id') ~ '[[:cntrl:][:space:]]'
        or pg_catalog.jsonb_typeof(task.value -> 'content_revision') is distinct from 'string'
        or pg_catalog.char_length(task.value ->> 'content_revision') not between 1 and 128
        or (task.value ->> 'content_revision') ~ '[[:cntrl:]]'
        or pg_catalog.jsonb_typeof(task.value -> 'task_id') is distinct from 'string'
        or pg_catalog.char_length(task.value ->> 'task_id') not between 1 and 192
        or (task.value ->> 'task_id') ~ '[[:cntrl:]]'
        or pg_catalog.jsonb_typeof(task.value -> 'completed') is distinct from 'boolean'
        or pg_catalog.jsonb_typeof(task.value -> 'prediction_used') is distinct from 'boolean'
  ) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  if exists (
    select 1
      from pg_catalog.jsonb_array_elements(p_snapshot -> 'tasks') as task(value)
     group by task.value ->> 'content_id', task.value ->> 'content_revision',
              task.value ->> 'task_id'
    having pg_catalog.count(*) > 1
  ) then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;
  if learning_private.sha256_jsonb(p_snapshot) <> p_snapshot_hash then
    return '{"status":"idempotency_conflict"}'::jsonb;
  end if;
  begin
    v_consented_at := (p_snapshot ->> 'consented_at')::timestamptz;
  exception when others then
    return '{"status":"validation_rejected"}'::jsonb;
  end;
  if v_consented_at is null
     or v_consented_at > pg_catalog.clock_timestamp() + interval '5 minutes' then
    return '{"status":"validation_rejected"}'::jsonb;
  end if;

  v_allowed := pg_catalog.jsonb_array_length(p_snapshot -> 'tasks');
  v_excluded := (p_snapshot ->> 'excluded_count')::integer;
  -- Import receipt, çok çağrılı aktarımın tek idempotency otoritesidir. Genel
  -- action receipt burada kullanılmaz: ilk paket sonrasında onu completed yapmak
  -- devamı engeller, processing bırakmak ise retry'ı sonsuza kadar kilitler.
  insert into public.student_atlas_import_receipts (
    import_id, student_id, source_code, device_import_id, schema_version,
    snapshot_hash, client_action_id, status, allowed_count, excluded_count,
    consented_at
  ) values (
    v_import_id, v_student, p_source_code,
    p_snapshot ->> 'device_import_id', '1.0', p_snapshot_hash,
    p_client_action_id, 'partial', v_allowed, v_excluded, v_consented_at
  ) on conflict do nothing
  returning import_id into v_inserted_id;

  -- ON CONFLICT, hash sahipliği yarışında ikinci işlemi ilk commit'e kadar
  -- bekletir. Ardından aynı satırı kilitlemek, paralel resume çağrılarının aynı
  -- cursor paketini iki kez çalışmasını önler.
  select receipt.import_id, receipt.student_id, receipt.device_import_id,
         receipt.schema_version, receipt.status, receipt.allowed_count,
         receipt.excluded_count, receipt.processed_count,
         receipt.rejected_count, receipt.cursor, receipt.result
    into v_import_id, v_owner, v_receipt_device_import_id,
         v_receipt_schema_version, v_receipt_status, v_receipt_allowed,
         v_receipt_excluded, v_processed, v_rejected, v_cursor,
         v_receipt_result
    from public.student_atlas_import_receipts as receipt
   where receipt.source_code = p_source_code
     and receipt.snapshot_hash = p_snapshot_hash
   for update;

  if not found then
    -- Aynı öğrenci/source içinde device_import_id veya client_action_id farklı
    -- bir manifestte kullanılmıştır. Çakışan satırın ayrıntısını açığa çıkarma.
    return '{"status":"idempotency_conflict"}'::jsonb;
  end if;
  if v_owner <> v_student then
    return '{"status":"ownership_conflict"}'::jsonb;
  end if;
  if v_receipt_device_import_id is distinct from p_snapshot ->> 'device_import_id'
     or v_receipt_schema_version is distinct from '1.0'
     or v_receipt_allowed is distinct from v_allowed
     or v_receipt_excluded is distinct from v_excluded
     or v_cursor > v_allowed or v_processed > v_allowed then
    return '{"status":"idempotency_conflict"}'::jsonb;
  end if;
  if v_receipt_status = 'completed' then
    return coalesce(v_receipt_result, pg_catalog.jsonb_build_object(
      'import_id', v_import_id, 'import_status', 'completed',
      'processed_count', v_processed, 'excluded_count', v_excluded,
      'rejected_count', v_rejected, 'cursor', v_cursor
    )) || '{"status":"duplicate"}'::jsonb;
  end if;

  for v_task, v_ordinality in
    select task.value, task.ordinality
      from pg_catalog.jsonb_array_elements(p_snapshot -> 'tasks')
           with ordinality as task(value, ordinality)
     where task.ordinality > v_cursor
       and task.ordinality <= v_cursor + v_batch_size
     order by task.ordinality
  loop
    v_child_action := learning_private.deterministic_action_uuid(
      p_source_code || ':' || p_snapshot_hash || ':'
      || (v_task ->> 'content_id') || ':' || (v_task ->> 'content_revision')
      || ':' || (v_task ->> 'task_id')
    );
    v_task_result := learning_private.record_atlas_snapshot(
      p_source_code, v_task ->> 'content_id', v_task ->> 'content_revision',
      v_task ->> 'task_id', (v_task ->> 'completed')::boolean,
      (v_task ->> 'prediction_used')::boolean, v_child_action,
      'explicit_device_import'
    );
    if coalesce(v_task_result ->> 'status', '')
         <> all(array['created', 'duplicate', 'identity_quarantined']::text[]) then
      raise exception using errcode = 'P3001', message = 'phase3_import_task_rejected';
    end if;
    v_processed := v_ordinality::integer;
    v_cursor := v_ordinality::integer;
  end loop;

  v_result := pg_catalog.jsonb_build_object(
    'status', case when v_cursor >= v_allowed then 'created' else 'partial' end,
    'import_id', v_import_id,
    'import_status', case when v_cursor >= v_allowed then 'completed' else 'partial' end,
    'processed_count', v_processed, 'excluded_count', v_excluded,
    'rejected_count', v_rejected, 'cursor', v_cursor,
    'remaining_count', greatest(0, v_allowed - v_cursor)
  );
  update public.student_atlas_import_receipts
     set status = case when v_cursor >= v_allowed then 'completed' else 'partial' end,
         processed_count = v_processed, rejected_count = v_rejected,
         cursor = v_processed, result = v_result,
         updated_at = pg_catalog.clock_timestamp(),
         completed_at = case when v_cursor >= v_allowed
           then pg_catalog.clock_timestamp() else null end
   where import_id = v_import_id and student_id = v_student;
  return v_result;
end;
$fn$;

alter table public.lesson_activity_events
  drop constraint if exists lesson_activity_events_phase3_event_check;
alter table public.lesson_activity_events
  add constraint lesson_activity_events_phase3_event_check check (event_name in (
    'lesson_opened', 'lesson_completed', 'audio_started', 'audio_completed',
    'visual_audio_clicked', 'quiz_answered', 'osym_simulation_answered',
    'personalized_section_viewed'
  ));
alter table public.lesson_activity_events
  drop constraint if exists lesson_activity_events_phase3_kind_check;
alter table public.lesson_activity_events
  add constraint lesson_activity_events_phase3_kind_check check (
    record_kind in ('event', 'correction', 'tombstone')
  );

create unique index if not exists lesson_activity_events_action_uq
  on public.lesson_activity_events (student_id, client_action_id)
  where client_action_id is not null;
create index if not exists lesson_activity_events_family_idx
  on public.lesson_activity_events (
    student_id, lesson_id, content_revision, source_record_id, source_revision desc
  );

create table if not exists public.bundled_lesson_activity_events (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  content_id text not null,
  content_revision text not null,
  event_name text not null check (event_name in (
    'lesson_opened', 'lesson_completed', 'quiz_answered'
  )),
  block_id text,
  section_id text,
  selected_option_id text,
  is_correct boolean,
  record_kind text not null default 'event'
    check (record_kind in ('event', 'correction', 'tombstone')),
  source_record_id text not null,
  source_revision integer not null default 1 check (source_revision > 0),
  target_event_id uuid references public.bundled_lesson_activity_events(id),
  client_action_id uuid,
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint bundled_lesson_activity_action_uq unique (student_id, client_action_id)
);

create index if not exists bundled_lesson_activity_family_idx
  on public.bundled_lesson_activity_events (
    student_id, content_id, content_revision, source_record_id, source_revision desc
  );

create table if not exists public.student_lesson_progress (
  progress_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null check (
    source_code in ('structured_lesson_activity', 'bundled_lesson_activity')
  ),
  content_kind text not null check (
    content_kind in ('structured_lesson', 'bundled_lesson')
  ),
  content_id text not null,
  content_revision text not null,
  current_section_id text,
  completed_section_ids text[] not null default array[]::text[],
  status text not null default 'in_progress'
    check (status in ('in_progress', 'completed', 'reset')),
  completion_event_id uuid,
  last_client_action_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  constraint student_lesson_progress_uq unique (
    student_id, source_code, content_id, content_revision
  )
);

create index if not exists student_lesson_progress_student_idx
  on public.student_lesson_progress (student_id, updated_at desc);

create table if not exists public.library_note_exposure_events (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  content_kind text not null check (content_kind = 'library_note'),
  content_id text not null,
  content_revision text not null,
  client_action_id uuid not null,
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint library_note_exposure_action_uq unique (student_id, client_action_id)
);

create index if not exists library_note_exposure_student_idx
  on public.library_note_exposure_events (student_id, created_at desc);

alter table public.library_notes
  add column if not exists content_revision integer not null default 1,
  add column if not exists content_hash text,
  add column if not exists status text not null default 'published',
  add column if not exists updated_at timestamptz not null default pg_catalog.clock_timestamp();

create table if not exists public.library_question_sets (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  topic_id uuid not null references public.library_topics(id) on delete cascade,
  created_by uuid references public.profiles(id) on delete set null,
  title text not null,
  questions jsonb not null default '[]'::jsonb,
  status text not null default 'draft',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp()
);

alter table public.library_question_sets
  add column if not exists content_revision integer not null default 1,
  add column if not exists content_hash text,
  add column if not exists manifest_hash text;

create table if not exists public.student_question_set_attempts (
  id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  question_set_id uuid references public.library_question_sets(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  empty_count integer not null default 0,
  success_rate numeric(7, 4),
  started_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz
);

alter table public.student_question_set_attempts
  alter column question_set_id drop not null,
  add column if not exists source_code text,
  add column if not exists content_kind text,
  add column if not exists content_id text,
  add column if not exists content_revision text,
  add column if not exists manifest_hash text,
  add column if not exists status text not null default 'legacy',
  add column if not exists marked_count integer not null default 0,
  add column if not exists total_count integer not null default 0,
  add column if not exists duration_seconds integer,
  add column if not exists question_ids text[],
  add column if not exists time_limit_seconds integer,
  add column if not exists expires_at timestamptz,
  add column if not exists start_client_action_id uuid,
  add column if not exists finalize_client_action_id uuid,
  add column if not exists completion_evidence_record_id uuid,
  add column if not exists reset_count integer not null default 0,
  add column if not exists abandoned_at timestamptz,
  add column if not exists updated_at timestamptz not null default pg_catalog.clock_timestamp();

alter table public.student_question_set_attempts
  drop constraint if exists student_question_attempt_phase3_status_check;
alter table public.student_question_set_attempts
  add constraint student_question_attempt_phase3_status_check check (
    status in ('legacy', 'in_progress', 'completed', 'abandoned')
  );
alter table public.student_question_set_attempts
  drop constraint if exists student_question_attempt_phase3_counts_check;
alter table public.student_question_set_attempts
  add constraint student_question_attempt_phase3_counts_check check (
    correct_count >= 0 and wrong_count >= 0 and empty_count >= 0
    and marked_count >= 0 and total_count >= 0
    and (status = 'legacy' or (
      total_count = correct_count + wrong_count + empty_count
      and marked_count = correct_count + wrong_count
    ))
  );

alter table public.student_question_set_attempts
  drop constraint if exists student_question_attempt_phase3_timer_check;
alter table public.student_question_set_attempts
  add constraint student_question_attempt_phase3_timer_check check (
    (time_limit_seconds is null and expires_at is null)
    or (time_limit_seconds > 0 and expires_at is not null)
  );

create unique index if not exists student_question_attempt_start_action_uq
  on public.student_question_set_attempts (student_id, source_code, start_client_action_id)
  where start_client_action_id is not null;
create unique index if not exists student_question_attempt_identity_uq
  on public.student_question_set_attempts (
    student_id, source_code, content_id, content_revision, id
  ) where source_code is not null;
create unique index if not exists student_question_attempt_id_student_uq
  on public.student_question_set_attempts (id, student_id);
create index if not exists student_question_attempt_student_status_idx
  on public.student_question_set_attempts (student_id, status, updated_at desc);

create table if not exists public.student_question_attempt_answers (
  attempt_id uuid not null references public.student_question_set_attempts(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  question_id text not null,
  selected_option_id text not null,
  is_correct boolean not null,
  answer_revision integer not null default 1 check (answer_revision > 0),
  active boolean not null default true,
  client_action_id uuid not null,
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_question_attempt_answers_pk primary key (attempt_id, question_id),
  constraint student_question_answer_attempt_student_fk foreign key (attempt_id, student_id)
    references public.student_question_set_attempts(id, student_id) on delete cascade,
  constraint student_question_answer_action_uq unique (student_id, client_action_id)
);

create index if not exists student_question_answers_student_idx
  on public.student_question_attempt_answers (student_id, attempt_id, active);

create table if not exists public.student_question_answer_revisions (
  revision_id uuid primary key default pg_catalog.gen_random_uuid(),
  attempt_id uuid not null,
  student_id uuid not null,
  question_id text not null,
  answer_revision integer not null check (answer_revision > 0),
  selected_option_id text,
  is_correct boolean,
  record_kind text not null check (record_kind in ('event', 'correction', 'tombstone')),
  client_action_id uuid,
  target_revision_id uuid references public.student_question_answer_revisions(revision_id),
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_question_answer_revisions_uq unique (
    attempt_id, question_id, answer_revision
  ),
  constraint student_question_answer_revision_attempt_fk foreign key (attempt_id, student_id)
    references public.student_question_set_attempts(id, student_id) on delete cascade
);

create index if not exists student_question_answer_revision_student_idx
  on public.student_question_answer_revisions (
    student_id, attempt_id, question_id, answer_revision desc
  );

create table if not exists public.student_atlas_task_states (
  state_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null check (
    source_code in ('physics_atlas', 'biology_atlas', 'geography_atlas')
  ),
  content_id text not null,
  content_revision text not null,
  task_id text not null,
  state_revision integer not null default 1 check (state_revision > 0),
  completed boolean not null,
  prediction_used boolean not null default false,
  active boolean not null default true,
  origin text not null default 'live' check (origin in ('live', 'explicit_device_import')),
  client_action_id uuid,
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_atlas_task_state_uq unique (
    student_id, source_code, content_id, content_revision, task_id
  ),
  constraint student_atlas_task_action_uq unique (student_id, source_code, client_action_id)
);

create index if not exists student_atlas_task_student_idx
  on public.student_atlas_task_states (student_id, source_code, updated_at desc);

create table if not exists public.student_atlas_task_state_revisions (
  revision_id uuid primary key default pg_catalog.gen_random_uuid(),
  state_id uuid not null references public.student_atlas_task_states(state_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  state_revision integer not null check (state_revision > 0),
  completed boolean not null,
  prediction_used boolean not null,
  record_kind text not null check (record_kind in ('snapshot', 'correction', 'tombstone')),
  client_action_id uuid,
  target_revision_id uuid references public.student_atlas_task_state_revisions(revision_id),
  evidence_record_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_atlas_state_revision_uq unique (state_id, state_revision)
);

create index if not exists student_atlas_state_revision_student_idx
  on public.student_atlas_task_state_revisions (
    student_id, state_id, state_revision desc
  );

create table if not exists public.student_atlas_import_receipts (
  import_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  source_code text not null check (
    source_code in ('physics_atlas', 'biology_atlas', 'geography_atlas')
  ),
  device_import_id text not null,
  schema_version text not null,
  snapshot_hash text not null,
  client_action_id uuid not null,
  status text not null default 'processing'
    check (status in ('processing', 'partial', 'completed')),
  allowed_count integer not null default 0,
  excluded_count integer not null default 0,
  processed_count integer not null default 0,
  rejected_count integer not null default 0,
  consented_at timestamptz not null,
  cursor integer not null default 0,
  result jsonb,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  completed_at timestamptz,
  constraint student_atlas_import_student_hash_uq unique (
    student_id, source_code, snapshot_hash
  ),
  constraint student_atlas_import_global_hash_uq unique (source_code, snapshot_hash),
  constraint student_atlas_import_device_uq unique (
    student_id, source_code, device_import_id
  ),
  constraint student_atlas_import_action_uq unique (
    student_id, source_code, client_action_id
  ),
  constraint student_atlas_import_hash_check check (snapshot_hash ~ '^[0-9a-f]{64}$'),
  constraint student_atlas_import_counts_check check (
    allowed_count >= 0 and excluded_count >= 0 and processed_count >= 0
    and rejected_count >= 0 and cursor >= 0
  )
);

create index if not exists student_atlas_import_student_idx
  on public.student_atlas_import_receipts (student_id, source_code, updated_at desc);

create table if not exists public.learning_content_backfill_decisions (
  matrix_id text primary key,
  source_code text not null unique,
  strategy text not null check (strategy in (
    'catalog_only', 'historical_provider', 'no_historical_source',
    'explicit_device_import_only', 'derived_no_evidence', 'excluded'
  )),
  provider_name text,
  historical_authority text not null,
  live_apply_allowed boolean not null default false,
  decision_version text not null default 'phase-3-backfill@1',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint learning_content_backfill_matrix_check check (
    matrix_id ~ '^M(1[3-9]|2[0-6])$'
  ),
  constraint learning_content_backfill_provider_check check (
    (strategy = 'historical_provider' and provider_name is not null)
    or (strategy <> 'historical_provider' and provider_name is null)
  )
);

insert into public.learning_content_backfill_decisions (
  matrix_id, source_code, strategy, provider_name, historical_authority
) values
  ('M13', 'library_gateway', 'catalog_only', null, 'navigation_is_not_learning_evidence'),
  ('M14', 'library_catalog', 'catalog_only', null, 'content_identity_only'),
  ('M15', 'structured_lesson_activity', 'historical_provider', 'phase3StructuredLessonEvents', 'only_rows_with_pinned_revision_and_verified_meaning'),
  ('M16', 'bundled_lesson_activity', 'no_historical_source', null, 'no_persistent_source_before_phase_3'),
  ('M17', 'library_note_exposure', 'no_historical_source', null, 'viewer_open_was_not_recorded'),
  ('M18', 'lesson_personalization', 'derived_no_evidence', null, 'cache_overlay_is_derived'),
  ('M19', 'db_question_test', 'historical_provider', 'phase3DbQuestionAttempts', 'only_completed_attempts_with_pinned_revision'),
  ('M20', 'bundled_question_test', 'no_historical_source', null, 'route_state_was_not_authoritative'),
  ('M21', 'physics_atlas', 'explicit_device_import_only', null, 'ownerless_device_data_requires_consent'),
  ('M22', 'biology_atlas', 'explicit_device_import_only', null, 'ownerless_device_data_requires_consent'),
  ('M23', 'geography_atlas', 'explicit_device_import_only', null, 'aggregate_scores_are_not_direct_measurement'),
  ('M24', 'chemistry_atlas', 'no_historical_source', null, 'no_versioned_attempt_source'),
  ('M25', 'history_atlas_navigation', 'excluded', null, 'navigation_and_audio_are_not_learning_evidence'),
  ('M26', 'geometry_pilot', 'no_historical_source', null, 'no_versioned_attempt_source')
on conflict (matrix_id) do nothing;

-- --------------------------------------------------------------------------
-- Kararlı hash, içerik yaşam döngüsü ve dar iç yardımcılar.
-- --------------------------------------------------------------------------

create or replace function learning_private.canonical_jsonb_text(p_value jsonb)
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
        || learning_private.canonical_jsonb_text(item.value),
      ',' order by item.key collate "C"
    ), '') || '}'
      into v_result
      from pg_catalog.jsonb_each(p_value) as item;
    return v_result;
  elsif v_type = 'array' then
    select '[' || coalesce(pg_catalog.string_agg(
      learning_private.canonical_jsonb_text(item.value),
      ',' order by item.ordinality
    ), '') || ']'
      into v_result
      from pg_catalog.jsonb_array_elements(p_value) with ordinality as item(value, ordinality);
    return v_result;
  end if;
  return p_value::text;
end;
$fn$;

create or replace function learning_private.sha256_jsonb(p_value jsonb)
returns text
language sql
immutable
strict
set search_path = ''
as $fn$
  select pg_catalog.encode(
    pg_catalog.sha256(pg_catalog.convert_to(
      learning_private.canonical_jsonb_text(p_value), 'UTF8'
    )),
    'hex'
  );
$fn$;

create or replace function learning_private.current_student_id()
returns uuid
language sql
stable
security definer
set search_path = ''
as $fn$
  select profile.id
    from public.profiles as profile
   where profile.id = auth.uid() and profile.role = 'student';
$fn$;

create or replace function learning_private.question_option_ids(p_question jsonb)
returns text[]
language sql
immutable
set search_path = ''
as $fn$
  select case
    when pg_catalog.jsonb_typeof(p_question -> 'options') = 'array' then
      array(
        select case
          when pg_catalog.jsonb_typeof(option.value) = 'object'
            then coalesce(option.value ->> 'id', option.value ->> 'value',
              pg_catalog.chr(64 + option.ordinality::integer))
          else pg_catalog.chr(64 + option.ordinality::integer)
        end
        from pg_catalog.jsonb_array_elements(p_question -> 'options')
          with ordinality as option(value, ordinality)
        order by option.ordinality
      )
    when pg_catalog.jsonb_typeof(p_question -> 'secenekler') = 'array' then
      array(
        select pg_catalog.chr(64 + option.ordinality::integer)
        from pg_catalog.jsonb_array_elements(p_question -> 'secenekler')
          with ordinality as option(value, ordinality)
        order by option.ordinality
      )
    when pg_catalog.jsonb_typeof(p_question -> 'secenekler') = 'object' then
      array(
        select option.key
        from pg_catalog.jsonb_each(p_question -> 'secenekler') as option
        order by option.key collate "C"
      )
    else array[]::text[]
  end;
$fn$;

create or replace function learning_private.question_correct_option(
  p_question jsonb,
  p_option_ids text[]
)
returns text
language plpgsql
immutable
set search_path = ''
as $fn$
declare
  v_index integer;
begin
  if p_question ->> 'correctOptionId' is not null then
    return p_question ->> 'correctOptionId';
  elsif p_question ->> 'correctAnswer' is not null then
    return p_question ->> 'correctAnswer';
  elsif p_question ->> 'dogru_cevap' is not null then
    return p_question ->> 'dogru_cevap';
  elsif p_question ->> 'answer_index' ~ '^\d+$' then
    v_index := (p_question ->> 'answer_index')::integer + 1;
    return p_option_ids[v_index];
  elsif p_question ->> 'answerIndex' ~ '^\d+$' then
    v_index := (p_question ->> 'answerIndex')::integer + 1;
    return p_option_ids[v_index];
  elsif pg_catalog.jsonb_typeof(p_question -> 'answer') = 'number' then
    v_index := (p_question ->> 'answer')::integer + 1;
    return p_option_ids[v_index];
  end if;
  return null;
end;
$fn$;

-- Yapılandırılmış dersin master satırı, immutable revizyonu, açık
-- içerik sicili ve private cevap kataloğu tek PostgreSQL statement'ında
-- birlikte oluşur. İstemcinin gönderdiği hash/cevap doğruluğu yetkili
-- kabul edilmez; hash ve cevap anahtarı JSON belgesinden yeniden türetilir.
create or replace function learning_private.sync_structured_lesson_before_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_hash text;
begin
  v_hash := learning_private.sha256_jsonb(
    coalesce(new.document, '{"version":1,"sections":[]}'::jsonb)
  );
  if tg_op = 'INSERT' then
    new.current_revision := greatest(coalesce(new.current_revision, 1), 1);
  elsif old.content_hash is distinct from v_hash then
    new.current_revision := old.current_revision + 1;
  else
    new.current_revision := old.current_revision;
  end if;
  new.content_hash := v_hash;
  new.updated_at := pg_catalog.clock_timestamp();
  return new;
end;
$fn$;

create or replace function learning_private.sync_structured_lesson_after_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_revision text := 'db-' || new.current_revision::text;
  v_document jsonb := coalesce(new.document, '{"version":1,"sections":[]}'::jsonb);
  v_hash text := learning_private.sha256_jsonb(
    coalesce(new.document, '{"version":1,"sections":[]}'::jsonb)
  );
  v_existing_hash text;
  v_section jsonb;
  v_block jsonb;
  v_options text[];
  v_correct text;
  v_section_position integer;
  v_block_position integer := 0;
  v_expected_count integer := 0;
  v_valid_count integer := 0;
  v_catalog_status text;
begin
  select content.content_hash into v_existing_hash
    from public.learning_content_revisions as content
   where content.source_code = 'structured_lesson_activity'
     and content.content_kind = 'structured_lesson'
     and content.content_id = new.id::text
     and content.content_revision = v_revision;
  if found and v_existing_hash is distinct from v_hash then
    raise exception using errcode = 'P3001', message = 'structured_revision_immutable';
  end if;

  v_catalog_status := case new.status
    when 'published' then 'published'
    when 'archived' then 'archived'
    else 'draft'
  end;
  if pg_catalog.jsonb_typeof(v_document -> 'sections') <> 'array' then
    v_catalog_status := 'quarantined';
  end if;

  if pg_catalog.jsonb_typeof(v_document -> 'sections') = 'array' then
    select pg_catalog.count(*)::integer
      + coalesce(pg_catalog.sum(pg_catalog.jsonb_array_length(
          case when pg_catalog.jsonb_typeof(section.value -> 'blocks') = 'array'
            then section.value -> 'blocks' else '[]'::jsonb end
        )), 0)::integer
      into v_expected_count
      from pg_catalog.jsonb_array_elements(v_document -> 'sections') as section(value);
  end if;

  insert into public.structured_lesson_revisions (
    lesson_id, revision, document, change_note, created_by
  ) values (
    new.id, new.current_revision, v_document,
    'Faz 3 atomik içerik revizyonu', new.teacher_id
  ) on conflict (lesson_id, revision) do nothing;

  select learning_private.sha256_jsonb(revision.document)
    into v_existing_hash
    from public.structured_lesson_revisions as revision
   where revision.lesson_id = new.id and revision.revision = new.current_revision;
  if v_existing_hash is distinct from v_hash then
    raise exception using errcode = 'P3001', message = 'structured_revision_document_conflict';
  end if;

  insert into public.learning_content_revisions (
    source_code, content_kind, content_id, content_revision, content_hash,
    status, source_owner, source_locator_token, previous_revision,
    item_count, published_at, archived_at
  ) values (
    'structured_lesson_activity', 'structured_lesson', new.id::text,
    v_revision, v_hash, v_catalog_status, 'public.structured_lesson_revisions',
    pg_catalog.substr(v_hash, 1, 32),
    case when new.current_revision > 1
      then 'db-' || (new.current_revision - 1)::text end,
    v_expected_count,
    case when v_catalog_status = 'published'
      then coalesce(new.published_at, pg_catalog.clock_timestamp()) end,
    case when v_catalog_status = 'archived'
      then pg_catalog.clock_timestamp() end
  ) on conflict (source_code, content_kind, content_id, content_revision)
    do update set
      status = excluded.status,
      published_at = coalesce(
        public.learning_content_revisions.published_at, excluded.published_at
      ),
      archived_at = excluded.archived_at,
      item_count = excluded.item_count;

  insert into public.learning_content_topic_mappings (
    source_code, content_kind, content_id, content_revision, mapping_status,
    resolver_version, ledger_version, aliases_version, mapping_method,
    decision_source
  ) values (
    'structured_lesson_activity', 'structured_lesson', new.id::text,
    v_revision, 'unmatched', 'topic-resolver@1', 'curriculum-ledger@1',
    'curriculum-aliases@1', 'explicit_mapping_required',
    'library_topic_uuid_is_not_canonical'
  ) on conflict (source_code, content_kind, content_id, content_revision) do nothing;

  if pg_catalog.jsonb_typeof(v_document -> 'sections') = 'array' then
    for v_section, v_section_position in
      select section.value, section.ordinality::integer - 1
        from pg_catalog.jsonb_array_elements(v_document -> 'sections')
          with ordinality as section(value, ordinality)
    loop
      if coalesce(v_section ->> 'id', '') <> ''
         and pg_catalog.char_length(v_section ->> 'id') <= 192
         and (v_section ->> 'id') !~ '[[:cntrl:]]' then
        insert into learning_private.learning_content_items (
          source_code, content_kind, content_id, content_revision,
          item_id, item_kind, position, required, item_hash
        ) values (
          'structured_lesson_activity', 'structured_lesson', new.id::text,
          v_revision, v_section ->> 'id', 'section', v_section_position,
          coalesce((v_section ->> 'required')::boolean, true),
          learning_private.sha256_jsonb(pg_catalog.jsonb_build_object(
            'id', v_section ->> 'id', 'kind', v_section ->> 'kind',
            'required', coalesce((v_section ->> 'required')::boolean, true)
          ))
        ) on conflict do nothing;
      end if;

      if pg_catalog.jsonb_typeof(v_section -> 'blocks') = 'array' then
        for v_block in
          select block.value
            from pg_catalog.jsonb_array_elements(v_section -> 'blocks')
              with ordinality as block(value, ordinality)
            order by block.ordinality
        loop
          if coalesce(v_block ->> 'id', '') <> ''
             and pg_catalog.char_length(v_block ->> 'id') <= 192
             and (v_block ->> 'id') !~ '[[:cntrl:]]' then
            if v_block ->> 'type' in ('quiz', 'osym_simulation') then
              v_options := learning_private.question_option_ids(v_block);
              v_correct := learning_private.question_correct_option(v_block, v_options);
              if pg_catalog.cardinality(v_options) >= 2
                 and v_correct = any(v_options) then
                insert into learning_private.learning_content_items (
                  source_code, content_kind, content_id, content_revision,
                  item_id, item_kind, position, required, option_ids,
                  correct_option_id, explanation, item_hash
                ) values (
                  'structured_lesson_activity', 'structured_lesson', new.id::text,
                  v_revision, v_block ->> 'id', 'question', v_block_position,
                  true, v_options, v_correct,
                  coalesce(v_block ->> 'explanation', v_block ->> 'solution', ''),
                  learning_private.sha256_jsonb(v_block)
                ) on conflict do nothing;
              end if;
            else
              insert into learning_private.learning_content_items (
                source_code, content_kind, content_id, content_revision,
                item_id, item_kind, position, required, item_hash
              ) values (
                'structured_lesson_activity', 'structured_lesson', new.id::text,
                v_revision, v_block ->> 'id', 'block', v_block_position,
                false, learning_private.sha256_jsonb(v_block)
              ) on conflict do nothing;
            end if;
          end if;
          v_block_position := v_block_position + 1;
        end loop;
      end if;
    end loop;
  end if;

  select pg_catalog.count(*)::integer into v_valid_count
    from learning_private.learning_content_items as item
   where item.source_code = 'structured_lesson_activity'
     and item.content_kind = 'structured_lesson'
     and item.content_id = new.id::text and item.content_revision = v_revision;
  if v_valid_count <> v_expected_count then
    update public.learning_content_revisions
       set status = 'quarantined',
           metadata = pg_catalog.jsonb_build_object(
             'catalog_validation', 'section_or_block_invalid',
             'expected_item_count', v_expected_count,
             'valid_item_count', v_valid_count
           )
     where source_code = 'structured_lesson_activity'
       and content_kind = 'structured_lesson'
       and content_id = new.id::text and content_revision = v_revision;
  end if;
  return null;
end;
$fn$;

drop trigger if exists learning_structured_lesson_phase3_before_write
  on public.structured_lessons;
create trigger learning_structured_lesson_phase3_before_write
before insert or update of topic_id, document, status, current_revision
on public.structured_lessons for each row
execute function learning_private.sync_structured_lesson_before_write();

drop trigger if exists learning_structured_lesson_phase3_after_write
  on public.structured_lessons;
create trigger learning_structured_lesson_phase3_after_write
after insert or update of topic_id, document, status, current_revision
on public.structured_lessons for each row
execute function learning_private.sync_structured_lesson_after_write();

create or replace function learning_private.sync_library_note_before_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_payload jsonb;
  v_hash text;
begin
  v_payload := pg_catalog.jsonb_build_object(
    'topic_id', new.topic_id::text,
    'content', coalesce(new.content, ''),
    'file_url', coalesce(new.file_url, ''),
    'file_type', coalesce(new.file_type, '')
  );
  v_hash := learning_private.sha256_jsonb(v_payload);
  if tg_op = 'INSERT' then
    new.content_revision := greatest(coalesce(new.content_revision, 1), 1);
  elsif old.content_hash is distinct from v_hash then
    new.content_revision := old.content_revision + 1;
  else
    new.content_revision := old.content_revision;
  end if;
  new.content_hash := v_hash;
  new.updated_at := pg_catalog.clock_timestamp();
  return new;
end;
$fn$;

create or replace function learning_private.sync_library_note_after_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_revision text := 'db-' || new.content_revision::text;
begin
  insert into public.learning_content_revisions (
    source_code, content_kind, content_id, content_revision, content_hash,
    status, source_owner, source_locator_token, previous_revision,
    item_count, published_at
  ) values (
    'library_note_exposure', 'library_note', new.id::text, v_revision,
    new.content_hash,
    case when new.status = 'published' then 'published' else 'archived' end,
    'public.library_notes', pg_catalog.substr(new.content_hash, 1, 32),
    case when new.content_revision > 1 then 'db-' || (new.content_revision - 1)::text end,
    0, case when new.status = 'published' then pg_catalog.clock_timestamp() end
  ) on conflict (source_code, content_kind, content_id, content_revision)
    do update set status = excluded.status, archived_at = case
      when excluded.status = 'archived' then pg_catalog.clock_timestamp()
      else null
    end;

  insert into public.learning_content_topic_mappings (
    source_code, content_kind, content_id, content_revision, mapping_status,
    resolver_version, ledger_version, aliases_version, mapping_method,
    decision_source
  ) values (
    'library_note_exposure', 'library_note', new.id::text, v_revision,
    'unmatched', 'topic-resolver@1', 'curriculum-ledger@1',
    'curriculum-aliases@1', 'explicit_mapping_required',
    'library_topic_uuid_is_not_canonical'
  ) on conflict (source_code, content_kind, content_id, content_revision) do nothing;
  return null;
end;
$fn$;

drop trigger if exists learning_note_phase3_before_write on public.library_notes;
create trigger learning_note_phase3_before_write
before insert or update of topic_id, content, file_url, file_type, status
on public.library_notes for each row
execute function learning_private.sync_library_note_before_write();

drop trigger if exists learning_note_phase3_after_write on public.library_notes;
create trigger learning_note_phase3_after_write
after insert or update of topic_id, content, file_url, file_type, status
on public.library_notes for each row
execute function learning_private.sync_library_note_after_write();

create or replace function learning_private.sync_question_set_before_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_payload jsonb;
  v_hash text;
begin
  v_payload := pg_catalog.jsonb_build_object(
    'topic_id', new.topic_id::text,
    'questions', coalesce(new.questions, '[]'::jsonb)
  );
  v_hash := learning_private.sha256_jsonb(v_payload);
  if tg_op = 'INSERT' then
    new.content_revision := greatest(coalesce(new.content_revision, 1), 1);
  elsif old.content_hash is distinct from v_hash then
    new.content_revision := old.content_revision + 1;
  else
    new.content_revision := old.content_revision;
  end if;
  new.content_hash := v_hash;
  new.manifest_hash := learning_private.sha256_jsonb(coalesce(new.questions, '[]'::jsonb));
  new.updated_at := pg_catalog.clock_timestamp();
  return new;
end;
$fn$;

create or replace function learning_private.sync_question_set_after_write()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_revision text := 'db-' || new.content_revision::text;
  v_question jsonb;
  v_options text[];
  v_correct text;
  v_position integer := 0;
  v_valid_count integer := 0;
begin
  insert into public.learning_content_revisions (
    source_code, content_kind, content_id, content_revision, content_hash,
    status, source_owner, source_locator_token, previous_revision,
    item_count, published_at
  ) values (
    'db_question_test', 'db_question_set', new.id::text, v_revision,
    new.content_hash,
    case when new.status = 'published' then 'published' else 'archived' end,
    'public.library_question_sets', pg_catalog.substr(new.content_hash, 1, 32),
    case when new.content_revision > 1 then 'db-' || (new.content_revision - 1)::text end,
    pg_catalog.jsonb_array_length(coalesce(new.questions, '[]'::jsonb)),
    case when new.status = 'published' then pg_catalog.clock_timestamp() end
  ) on conflict (source_code, content_kind, content_id, content_revision)
    do update set status = excluded.status, archived_at = case
      when excluded.status = 'archived' then pg_catalog.clock_timestamp()
      else null
    end;

  insert into public.learning_content_topic_mappings (
    source_code, content_kind, content_id, content_revision, mapping_status,
    resolver_version, ledger_version, aliases_version, mapping_method,
    decision_source
  ) values (
    'db_question_test', 'db_question_set', new.id::text, v_revision,
    'unmatched', 'topic-resolver@1', 'curriculum-ledger@1',
    'curriculum-aliases@1', 'explicit_mapping_required',
    'library_topic_uuid_is_not_canonical'
  ) on conflict (source_code, content_kind, content_id, content_revision) do nothing;

  if pg_catalog.jsonb_typeof(new.questions) = 'array' then
    for v_question in select value from pg_catalog.jsonb_array_elements(new.questions) loop
      v_position := v_position + 1;
      v_options := learning_private.question_option_ids(v_question);
      v_correct := learning_private.question_correct_option(v_question, v_options);
      if coalesce(v_question ->> 'id', '') <> ''
         and pg_catalog.cardinality(v_options) >= 2
         and v_correct = any(v_options) then
        insert into learning_private.learning_content_items (
          source_code, content_kind, content_id, content_revision,
          item_id, item_kind, position, option_ids, correct_option_id,
          explanation, item_hash
        ) values (
          'db_question_test', 'db_question_set', new.id::text, v_revision,
          v_question ->> 'id', 'question', v_position, v_options, v_correct,
          coalesce(v_question ->> 'explanation', v_question ->> 'solution', ''),
          learning_private.sha256_jsonb(v_question)
        ) on conflict do nothing;
        v_valid_count := v_valid_count + 1;
      end if;
    end loop;
  end if;

  if v_valid_count <> pg_catalog.jsonb_array_length(coalesce(new.questions, '[]'::jsonb)) then
    update public.learning_content_revisions
       set status = 'quarantined'
     where source_code = 'db_question_test'
       and content_kind = 'db_question_set'
       and content_id = new.id::text and content_revision = v_revision;
  end if;
  return null;
end;
$fn$;

drop trigger if exists learning_question_set_phase3_before_write on public.library_question_sets;
create trigger learning_question_set_phase3_before_write
before insert or update of topic_id, questions, status
on public.library_question_sets for each row
execute function learning_private.sync_question_set_before_write();

drop trigger if exists learning_question_set_phase3_after_write on public.library_question_sets;
create trigger learning_question_set_phase3_after_write
after insert or update of topic_id, questions, status
on public.library_question_sets for each row
execute function learning_private.sync_question_set_after_write();

-- Yeni migration uygulanırken var olan DB içeriklerini silmeden sicile alır.
update public.library_notes
   set status = status
 where content_hash is null;
update public.library_question_sets
   set status = status
 where content_hash is null or manifest_hash is null;

-- --------------------------------------------------------------------------
-- RLS: öğrenci yalnız kendi kayıtlarını okuyabilir; trusted sonuçlara DML yok.
-- --------------------------------------------------------------------------

alter table public.learning_content_revisions enable row level security;
alter table public.learning_content_revisions force row level security;
alter table public.learning_content_topic_mappings enable row level security;
alter table public.learning_content_topic_mappings force row level security;
alter table public.learning_content_aliases enable row level security;
alter table public.learning_content_aliases force row level security;
alter table public.learning_content_action_receipts enable row level security;
alter table public.learning_content_action_receipts force row level security;
alter table public.lesson_activity_events enable row level security;
alter table public.lesson_activity_events force row level security;
alter table public.bundled_lesson_activity_events enable row level security;
alter table public.bundled_lesson_activity_events force row level security;
alter table public.student_lesson_progress enable row level security;
alter table public.student_lesson_progress force row level security;
alter table public.library_note_exposure_events enable row level security;
alter table public.library_note_exposure_events force row level security;
alter table public.student_question_set_attempts enable row level security;
alter table public.student_question_set_attempts force row level security;
alter table public.student_question_attempt_answers enable row level security;
alter table public.student_question_attempt_answers force row level security;
alter table public.student_question_answer_revisions enable row level security;
alter table public.student_question_answer_revisions force row level security;
alter table public.student_atlas_task_states enable row level security;
alter table public.student_atlas_task_states force row level security;
alter table public.student_atlas_task_state_revisions enable row level security;
alter table public.student_atlas_task_state_revisions force row level security;
alter table public.student_atlas_import_receipts enable row level security;
alter table public.student_atlas_import_receipts force row level security;
alter table public.learning_content_backfill_decisions enable row level security;
alter table public.learning_content_backfill_decisions force row level security;

drop policy if exists "Faz 3 içerik sicili okunur" on public.learning_content_revisions;
create policy "Faz 3 içerik sicili okunur" on public.learning_content_revisions
  for select using (auth.uid() is not null);
drop policy if exists "Faz 3 konu eşlemesi okunur" on public.learning_content_topic_mappings;
create policy "Faz 3 konu eşlemesi okunur" on public.learning_content_topic_mappings
  for select using (auth.uid() is not null);
drop policy if exists "Faz 3 içerik aliası okunur" on public.learning_content_aliases;
create policy "Faz 3 içerik aliası okunur" on public.learning_content_aliases
  for select using (auth.uid() is not null);
drop policy if exists "Faz 3 backfill kararı okunur" on public.learning_content_backfill_decisions;
create policy "Faz 3 backfill kararı okunur" on public.learning_content_backfill_decisions
  for select using (auth.uid() is not null);

drop policy if exists "Faz 3 öğrenci action kaydını görür" on public.learning_content_action_receipts;
create policy "Faz 3 öğrenci action kaydını görür" on public.learning_content_action_receipts
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci structured etkinliğini görür" on public.lesson_activity_events;
create policy "Faz 3 öğrenci structured etkinliğini görür" on public.lesson_activity_events
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci paketli etkinliğini görür" on public.bundled_lesson_activity_events;
create policy "Faz 3 öğrenci paketli etkinliğini görür" on public.bundled_lesson_activity_events
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci ders ilerlemesini görür" on public.student_lesson_progress;
create policy "Faz 3 öğrenci ders ilerlemesini görür" on public.student_lesson_progress
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci not açılışını görür" on public.library_note_exposure_events;
create policy "Faz 3 öğrenci not açılışını görür" on public.library_note_exposure_events
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci girişimini görür" on public.student_question_set_attempts;
create policy "Faz 3 öğrenci girişimini görür" on public.student_question_set_attempts
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci etkin cevaplarını görür" on public.student_question_attempt_answers;
create policy "Faz 3 öğrenci etkin cevaplarını görür" on public.student_question_attempt_answers
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci cevap geçmişini görür" on public.student_question_answer_revisions;
create policy "Faz 3 öğrenci cevap geçmişini görür" on public.student_question_answer_revisions
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci atlas state görür" on public.student_atlas_task_states;
create policy "Faz 3 öğrenci atlas state görür" on public.student_atlas_task_states
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci atlas state geçmişini görür" on public.student_atlas_task_state_revisions;
create policy "Faz 3 öğrenci atlas state geçmişini görür" on public.student_atlas_task_state_revisions
  for select using (auth.uid() = student_id);
drop policy if exists "Faz 3 öğrenci atlas aktarımını görür" on public.student_atlas_import_receipts;
create policy "Faz 3 öğrenci atlas aktarımını görür" on public.student_atlas_import_receipts
  for select using (auth.uid() = student_id);

-- Eski doğrudan öğrenci yazarları kaldırılır; SECURITY DEFINER RPC tek yoldur.
drop policy if exists "Öğrenci kendi lesson etkinliğini yazar" on public.lesson_activity_events;
drop policy if exists "Öğrenci kendi test denemesini oluşturur" on public.student_question_set_attempts;
drop policy if exists "Öğrenci kendi açık test denemesini günceller" on public.student_question_set_attempts;

revoke all on table learning_private.learning_content_items from public, anon, authenticated;
revoke insert, update, delete, truncate on table
  public.learning_content_revisions,
  public.learning_content_topic_mappings,
  public.learning_content_aliases,
  public.learning_content_action_receipts,
  public.lesson_activity_events,
  public.bundled_lesson_activity_events,
  public.student_lesson_progress,
  public.library_note_exposure_events,
  public.student_question_set_attempts,
  public.student_question_attempt_answers,
  public.student_question_answer_revisions,
  public.student_atlas_task_states,
  public.student_atlas_task_state_revisions,
  public.student_atlas_import_receipts,
  public.learning_content_backfill_decisions
from anon, authenticated;

grant select on table
  public.learning_content_revisions,
  public.learning_content_topic_mappings,
  public.learning_content_aliases,
  public.learning_content_action_receipts,
  public.lesson_activity_events,
  public.bundled_lesson_activity_events,
  public.student_lesson_progress,
  public.library_note_exposure_events,
  public.student_question_set_attempts,
  public.student_question_attempt_answers,
  public.student_question_answer_revisions,
  public.student_atlas_task_states,
  public.student_atlas_task_state_revisions,
  public.student_atlas_import_receipts,
  public.learning_content_backfill_decisions
to authenticated;

do $do$
begin
  if pg_catalog.to_regclass('public.student_topic_test_progress') is not null then
    execute 'alter table public.student_topic_test_progress enable row level security';
    execute 'revoke insert, update, delete, truncate on public.student_topic_test_progress from anon, authenticated';
  end if;
  if pg_catalog.to_regclass('public.student_test_answers') is not null then
    execute 'alter table public.student_test_answers enable row level security';
    execute 'revoke insert, update, delete, truncate on public.student_test_answers from anon, authenticated';
  end if;
end
$do$;

-- Sonradan CREATE OR REPLACE edilen bütün iç yardımcıların varsayılan PUBLIC
-- EXECUTE yetkisini de kesin olarak kapatır.
revoke all on all functions in schema learning_private from public, anon, authenticated;
