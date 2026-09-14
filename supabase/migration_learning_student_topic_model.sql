-- DRKOÇ AI Koç — Faz 6 öğrenci-konu modeli ve dört katmanlı hafıza
-- Yalnız yerel kabul için hazırlanmıştır; canlıya uygulama Faz 10 ve açık onay ister.
-- Bağımlılıklar:
--   Faz 2 migration SHA-256: 993437ba3bb34b5c97e14a5c6e126d482f769e65be34ca2d08d20832b47ebdea
--   Faz 3 migration SHA-256: 8452d4497fc01f35eb8dc7a2c80ec029d6255c4067c548dfacfdce20009c7165
--   Faz 4 migration SHA-256: 06b8381911762c2436bedc0995bae344303f663b5f53566354d79afcee344f3f
--   Faz 5 migration SHA-256: 071e3a91c907729de3a679b18d66f3a434249b9f55a9101b80dafb0e42e09830

begin;

create schema if not exists learning_private;

create table if not exists public.student_model_contracts (
  model_version text primary key,
  config_version text not null unique,
  topic_contract_version text not null,
  evidence_contract_version text not null,
  behavior_rule_version text not null,
  coaching_decision_contract_version text not null,
  status text not null default 'active',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_model_contract_version_check check (
    model_version ~ '^[a-z][a-z0-9._-]{1,63}@[1-9][0-9]*$'
    and config_version ~ '^[a-z][a-z0-9._-]{1,63}@[1-9][0-9]*$'
  ),
  constraint student_model_contract_status_check check (status in ('active', 'retired'))
  ,constraint student_model_contract_tuple_uq unique (
    model_version, config_version, topic_contract_version
  )
);

insert into public.student_model_contracts (
  model_version, config_version, topic_contract_version,
  evidence_contract_version, behavior_rule_version,
  coaching_decision_contract_version, status
) values (
  'student-topic-model@1', 'student-topic-model-config@1', 'curriculum-identity@1',
  'learning-evidence@1', 'student-behavior-rules@1',
  'coaching-decision-history@1', 'active'
)
on conflict (model_version) do nothing;

do $phase_6_contract$
begin
  if not exists (
    select 1 from public.student_model_contracts
     where model_version = 'student-topic-model@1'
       and config_version = 'student-topic-model-config@1'
       and topic_contract_version = 'curriculum-identity@1'
       and evidence_contract_version = 'learning-evidence@1'
       and behavior_rule_version = 'student-behavior-rules@1'
       and coaching_decision_contract_version = 'coaching-decision-history@1'
  ) then
    raise exception 'student_model_contract_immutable_conflict';
  end if;
end
$phase_6_contract$;

-- Katman 2: yalnız kanıt defterinden deterministik üretilen durum.
create table if not exists public.student_learning_projection_rows (
  row_id uuid primary key default pg_catalog.gen_random_uuid(),
  generation_id uuid not null references public.learning_projection_generations(generation_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  model_version text not null,
  config_version text not null,
  topic_contract_version text not null,
  scope_type text not null,
  scope_key text not null,
  education_context_id text,
  subject_id text,
  topic_id text,
  objective_id text,
  data_state text not null,
  confidence_level text not null,
  performance_state text not null,
  performance_score numeric,
  trend_state text not null,
  conflict_flag boolean not null default false,
  source_diversity integer not null default 0,
  oldest_evidence_at timestamptz,
  newest_evidence_at timestamptz,
  repeat_due_at timestamptz,
  excluded_evidence_count integer not null default 0,
  unmatched_evidence_count integer not null default 0,
  max_ingestion_sequence bigint not null default 0,
  evidence_counts jsonb not null default '{}'::jsonb,
  dimensions jsonb not null default '{}'::jsonb,
  source_summaries jsonb not null default '[]'::jsonb,
  explanation jsonb not null default '{}'::jsonb,
  row_checksum text not null,
  computed_at timestamptz not null,
  reference_time timestamptz not null,
  is_active boolean not null default false,
  consumer_visible boolean not null default false,
  constraint student_learning_projection_scope_check check (
    scope_type in ('general', 'program', 'subject', 'topic', 'objective')
    and pg_catalog.char_length(scope_key) between 1 and 512
    and scope_key !~ '[[:cntrl:]]'
  ),
  constraint student_learning_projection_scope_identity_check check (
    (scope_type = 'general' and education_context_id is null and subject_id is null and topic_id is null and objective_id is null)
    or (scope_type = 'program' and education_context_id is not null and subject_id is null and topic_id is null and objective_id is null)
    or (scope_type = 'subject' and subject_id is not null and topic_id is null and objective_id is null)
    or (scope_type = 'topic' and topic_id is not null and objective_id is null)
    or (scope_type = 'objective' and topic_id is not null and objective_id is not null)
  ),
  constraint student_learning_projection_state_check check (
    data_state in ('insufficient', 'limited', 'available', 'conflicted', 'stale')
    and confidence_level in ('insufficient', 'low', 'medium', 'high')
    and performance_state in ('insufficient', 'reported_only', 'source_summaries_only', 'needs_support', 'developing', 'secure', 'strong')
    and trend_state in ('insufficient', 'not_comparable', 'strengthened', 'regressed', 'stable')
  ),
  constraint student_learning_projection_score_check check (performance_score is null or performance_score between 0 and 1),
  constraint student_learning_projection_counts_check check (
    source_diversity >= 0 and excluded_evidence_count >= 0
    and unmatched_evidence_count >= 0 and max_ingestion_sequence >= 0
  ),
  constraint student_learning_projection_json_check check (
    pg_catalog.jsonb_typeof(evidence_counts) = 'object'
    and pg_catalog.jsonb_typeof(dimensions) = 'object'
    and pg_catalog.jsonb_typeof(source_summaries) = 'array'
    and pg_catalog.jsonb_typeof(explanation) = 'object'
    and pg_catalog.octet_length(evidence_counts::text) <= 4096
    and pg_catalog.octet_length(dimensions::text) <= 32768
    and pg_catalog.octet_length(source_summaries::text) <= 32768
    and pg_catalog.octet_length(explanation::text) <= 16384
  ),
  constraint student_learning_projection_checksum_check check (row_checksum ~ '^[0-9a-f]{64}$'),
  constraint student_learning_projection_visibility_check check (not consumer_visible or is_active),
  constraint student_learning_projection_dates_check check (oldest_evidence_at is null or newest_evidence_at is null or oldest_evidence_at <= newest_evidence_at),
  constraint student_learning_projection_contract_fk foreign key (
    model_version, config_version, topic_contract_version
  ) references public.student_model_contracts (
    model_version, config_version, topic_contract_version
  ),
  constraint student_learning_projection_generation_scope_uq unique (generation_id, student_id, scope_key)
);

create index if not exists student_learning_projection_student_scope_idx
  on public.student_learning_projection_rows (student_id, scope_type, topic_id)
  where is_active and consumer_visible;
create index if not exists student_learning_projection_support_idx
  on public.student_learning_projection_rows (student_id, performance_state, confidence_level, newest_evidence_at desc)
  where is_active and consumer_visible and scope_type = 'topic';
create index if not exists student_learning_projection_trend_idx
  on public.student_learning_projection_rows (student_id, trend_state, newest_evidence_at desc)
  where is_active and consumer_visible and scope_type = 'topic';
create index if not exists student_learning_projection_repeat_idx
  on public.student_learning_projection_rows (student_id, repeat_due_at)
  where is_active and consumer_visible and repeat_due_at is not null;
create index if not exists student_learning_projection_program_idx
  on public.student_learning_projection_rows (student_id, education_context_id, scope_type)
  where is_active and consumer_visible;

-- Açıklama bağlantıları yalnız opak konum ve izinli özet taşır; ham içerik taşımaz.
create table if not exists public.student_learning_projection_evidence_refs (
  generation_id uuid not null references public.learning_projection_generations(generation_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  scope_key text not null,
  record_id uuid not null references public.learning_evidence_records(record_id) on delete cascade,
  source_code text not null,
  source_locator text,
  evidence_class text not null,
  occurred_at timestamptz,
  included boolean not null,
  exclusion_reason text,
  primary key (generation_id, student_id, scope_key, record_id),
  constraint student_learning_ref_locator_check check (learning_private.source_locator_is_valid(source_locator, source_code)),
  constraint student_learning_ref_class_check check (evidence_class in (
    'direct_measurement', 'student_self_report', 'teacher_feedback',
    'exposure', 'system_observation', 'model_inference'
  )),
  constraint student_learning_ref_exclusion_check check (
    (included and exclusion_reason is null)
    or (not included and exclusion_reason in ('correlated_same_attempt', 'context_only', 'unmatched_identity', 'operational_only'))
  )
);

create index if not exists student_learning_ref_claim_idx
  on public.student_learning_projection_evidence_refs (student_id, scope_key, included, occurred_at desc);

-- Katman 3: kişilik/teşhis değil, sürümlü ve süreli davranış örüntüsü.
create table if not exists public.student_behavior_patterns (
  pattern_id uuid primary key default pg_catalog.gen_random_uuid(),
  generation_id uuid not null references public.learning_projection_generations(generation_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  pattern_code text not null,
  rule_version text not null,
  state text not null,
  confidence_level text not null,
  sample_count integer not null,
  supporting_record_ids uuid[] not null default '{}',
  refuting_record_ids uuid[] not null default '{}',
  last_verified_at timestamptz not null,
  valid_until timestamptz not null,
  is_active boolean not null default false,
  consumer_visible boolean not null default false,
  constraint student_behavior_pattern_code_check check (pattern_code in (
    'repeated_learning_friction', 'reported_plan_follow_through', 'multi_day_study_consistency'
  )),
  constraint student_behavior_pattern_state_check check (state in ('observed', 'consistent', 'mixed', 'limited')),
  constraint student_behavior_pattern_confidence_check check (confidence_level in ('low', 'medium', 'high')),
  constraint student_behavior_pattern_rule_check check (rule_version = 'student-behavior-rules@1'),
  constraint student_behavior_pattern_sample_check check (sample_count >= 3),
  constraint student_behavior_pattern_refs_check check (
    sample_count <= pg_catalog.cardinality(supporting_record_ids)
      + pg_catalog.cardinality(refuting_record_ids)
  ),
  constraint student_behavior_pattern_time_check check (valid_until > last_verified_at),
  constraint student_behavior_pattern_visibility_check check (not consumer_visible or is_active),
  unique (generation_id, student_id, pattern_code)
);

create index if not exists student_behavior_pattern_current_idx
  on public.student_behavior_patterns (student_id, valid_until, pattern_code)
  where is_active and consumer_visible;

create or replace function learning_private.validate_student_behavior_pattern_refs()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
begin
  if exists (
    select 1
      from pg_catalog.unnest(new.supporting_record_ids || new.refuting_record_ids) as ref(record_id)
      left join public.learning_evidence_records as evidence
        on evidence.record_id = ref.record_id
       and evidence.student_id = new.student_id
     where evidence.record_id is null
  ) then
    raise exception 'student_behavior_pattern_cross_student_or_missing_ref';
  end if;
  return new;
end
$fn$;

drop trigger if exists student_behavior_pattern_refs_guard on public.student_behavior_patterns;
create trigger student_behavior_pattern_refs_guard
before insert or update of student_id, supporting_record_ids, refuting_record_ids
on public.student_behavior_patterns
for each row execute function learning_private.validate_student_behavior_pattern_refs();

-- Katman 4: Faz 8'in tamamlayacağı ilişki sözleşmesi. Bu faz karar üretmez.
create table if not exists public.student_coaching_decision_history (
  decision_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  contract_version text not null default 'coaching-decision-history@1',
  decision_type text not null,
  status text not null default 'proposed',
  scope_key text,
  projection_generation_id uuid references public.learning_projection_generations(generation_id) on delete set null,
  recommendation_ref text,
  plan_id uuid,
  accepted_at timestamptz,
  completed_at timestamptz,
  outcome_evidence_record_ids uuid[] not null default '{}',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint student_coaching_decision_contract_check check (contract_version = 'coaching-decision-history@1'),
  constraint student_coaching_decision_type_check check (decision_type in ('recommendation', 'plan', 'review')),
  constraint student_coaching_decision_status_check check (status in ('proposed', 'accepted', 'declined', 'in_progress', 'completed', 'expired', 'superseded')),
  constraint student_coaching_decision_ref_check check (
    recommendation_ref is null or recommendation_ref ~ '^drkoc-ref:v1:[a-z0-9._-]+:[A-Za-z0-9_-]{8,128}$'
  )
);

create index if not exists student_coaching_decision_current_idx
  on public.student_coaching_decision_history (student_id, status, created_at desc);

-- Öğrenci türetilen puanı yazamaz; yalnız kaynak düzeltmesi dışında itiraz bırakabilir.
create table if not exists public.student_learning_projection_disputes (
  dispute_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  scope_key text not null,
  reason_code text not null,
  status text not null default 'open',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  resolved_at timestamptz,
  constraint student_learning_dispute_reason_check check (reason_code in (
    'source_record_incorrect', 'topic_mapping_incorrect', 'result_not_representative', 'other_without_free_text'
  )),
  constraint student_learning_dispute_status_check check (status in ('open', 'resolved', 'dismissed')),
  constraint student_learning_dispute_time_check check (
    (status = 'open' and resolved_at is null) or (status <> 'open' and resolved_at is not null)
  )
);

create unique index if not exists student_learning_dispute_open_uq
  on public.student_learning_projection_disputes (student_id, scope_key, reason_code)
  where status = 'open';

create or replace function public.create_student_learning_projection_dispute(
  p_scope_key text,
  p_reason_code text
) returns uuid
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := (select auth.uid());
  v_role text;
  v_id uuid;
begin
  select profile.role into v_role from public.profiles as profile where profile.id = v_student_id;
  if v_student_id is null or v_role <> 'student' then raise exception 'student_identity_required'; end if;
  if pg_catalog.char_length(coalesce(p_scope_key, '')) not between 1 and 512 then raise exception 'scope_key_invalid'; end if;
  if p_reason_code not in ('source_record_incorrect', 'topic_mapping_incorrect', 'result_not_representative', 'other_without_free_text') then
    raise exception 'reason_code_invalid';
  end if;
  if not exists (
    select 1 from public.student_learning_projection_rows as row
     where row.student_id = v_student_id and row.scope_key = p_scope_key
       and row.is_active and row.consumer_visible
  ) then raise exception 'projection_scope_not_found'; end if;
  insert into public.student_learning_projection_disputes (student_id, scope_key, reason_code)
  values (v_student_id, p_scope_key, p_reason_code)
  on conflict (student_id, scope_key, reason_code) where status = 'open'
  do update set created_at = public.student_learning_projection_disputes.created_at
  returning dispute_id into v_id;
  return v_id;
end
$fn$;

alter table public.student_model_contracts enable row level security;
alter table public.student_model_contracts force row level security;
alter table public.student_learning_projection_rows enable row level security;
alter table public.student_learning_projection_rows force row level security;
alter table public.student_learning_projection_evidence_refs enable row level security;
alter table public.student_learning_projection_evidence_refs force row level security;
alter table public.student_behavior_patterns enable row level security;
alter table public.student_behavior_patterns force row level security;
alter table public.student_coaching_decision_history enable row level security;
alter table public.student_coaching_decision_history force row level security;
alter table public.student_learning_projection_disputes enable row level security;
alter table public.student_learning_projection_disputes force row level security;

drop policy if exists student_learning_projection_own_read on public.student_learning_projection_rows;
create policy student_learning_projection_own_read on public.student_learning_projection_rows
  for select to authenticated
  using (student_id = (select auth.uid()) and is_active and consumer_visible);

drop policy if exists student_learning_ref_own_read on public.student_learning_projection_evidence_refs;
create policy student_learning_ref_own_read on public.student_learning_projection_evidence_refs
  for select to authenticated
  using (student_id = (select auth.uid()) and exists (
    select 1 from public.student_learning_projection_rows as row
     where row.generation_id = student_learning_projection_evidence_refs.generation_id
       and row.student_id = student_learning_projection_evidence_refs.student_id
       and row.scope_key = student_learning_projection_evidence_refs.scope_key
       and row.is_active and row.consumer_visible
  ));

drop policy if exists student_behavior_pattern_own_read on public.student_behavior_patterns;
create policy student_behavior_pattern_own_read on public.student_behavior_patterns
  for select to authenticated
  using (student_id = (select auth.uid()) and is_active and consumer_visible and valid_until > pg_catalog.clock_timestamp());

drop policy if exists student_coaching_decision_own_read on public.student_coaching_decision_history;
create policy student_coaching_decision_own_read on public.student_coaching_decision_history
  for select to authenticated using (student_id = (select auth.uid()));

drop policy if exists student_learning_dispute_own_read on public.student_learning_projection_disputes;
create policy student_learning_dispute_own_read on public.student_learning_projection_disputes
  for select to authenticated using (student_id = (select auth.uid()));

revoke all on table
  public.student_model_contracts,
  public.student_learning_projection_rows,
  public.student_learning_projection_evidence_refs,
  public.student_behavior_patterns,
  public.student_coaching_decision_history,
  public.student_learning_projection_disputes
from public, anon, authenticated;

grant select on table public.student_learning_projection_rows to authenticated;
grant select on table public.student_learning_projection_evidence_refs to authenticated;
grant select on table public.student_behavior_patterns to authenticated;
grant select on table public.student_coaching_decision_history to authenticated;
grant select on table public.student_learning_projection_disputes to authenticated;

revoke all on function public.create_student_learning_projection_dispute(text, text)
  from public, anon, authenticated;
grant execute on function public.create_student_learning_projection_dispute(text, text)
  to authenticated;

comment on table public.student_model_contracts is 'Faz 6 sürümlü deterministik öğrenci modeli sözleşmeleri.';
comment on table public.student_learning_projection_rows is 'Katman 2: kanıttan üretilen genel/program/ders/konu/kazanım projeksiyonu; öğrenci doğrudan yazamaz.';
comment on table public.student_behavior_patterns is 'Katman 3: destekleyen/çürüten kanıtlı, süreli ve teşhis içermeyen davranış örüntüleri.';
comment on table public.student_coaching_decision_history is 'Katman 4 ilişki sözleşmesi; öneri döngüsünü Faz 8 tamamlar.';
comment on table public.student_learning_projection_disputes is 'Türetilen skoru değiştirmeyen, kaynak düzeltmesine yönelten öğrenci itiraz işareti.';

commit;
