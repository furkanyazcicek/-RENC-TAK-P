-- ============================================================================
-- AI KOÇ FAZ 9 — SERTLEŞTİRME, ÖZELLİK BAYRAĞI VE GÖZLEM SÖZLEŞMESİ
-- ============================================================================
-- Bu migration canlı veri taramaz, backfill/pilot başlatmaz ve hiçbir
-- öğrenciye yeni davranış açmaz. Önceki migration dosyaları değiştirilmez.
-- ============================================================================

begin;

create schema if not exists learning_private;
revoke all on schema learning_private from public, anon, authenticated;

create table if not exists learning_private.learning_feature_flags (
  feature_key text not null,
  scope_type text not null,
  scope_key text not null,
  enabled boolean not null,
  mode text not null default 'enabled',
  config_version text not null default 'learning-rollout-flags@1',
  reason_code text not null default 'PHASE9_DEFAULT',
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  primary key (feature_key, scope_type, scope_key),
  constraint learning_feature_key_check check (
    feature_key in ('source_events', 'projection', 'coach_analysis', 'coach_writes', 'safe_fallback')
  ),
  constraint learning_feature_scope_check check (
    scope_type in ('global', 'source', 'test_group')
    and pg_catalog.char_length(scope_key) between 1 and 128
    and scope_key !~ '[[:cntrl:]]'
  ),
  constraint learning_feature_mode_check check (mode in ('disabled', 'shadow', 'enabled')),
  constraint learning_feature_version_check check (config_version ~ '^[a-z][a-z0-9-]{1,63}@[0-9]+$'),
  constraint learning_feature_reason_check check (reason_code ~ '^[A-Z][A-Z0-9_]{2,63}$')
);

comment on table learning_private.learning_feature_flags is
  'Yalnız güvenilir sunucu/operasyon rolünün değiştirebildiği kontrollü geçiş bayrakları; istemci rolleri erişemez.';

revoke all on table learning_private.learning_feature_flags from public, anon, authenticated;

create table if not exists learning_private.learning_student_feature_flags (
  feature_key text not null,
  student_id uuid not null references public.profiles(id) on delete cascade,
  enabled boolean not null,
  mode text not null default 'enabled',
  config_version text not null default 'learning-rollout-flags@1',
  reason_code text not null default 'PHASE9_TEST_ACCOUNT',
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  primary key (feature_key, student_id),
  constraint learning_student_feature_key_check check (
    feature_key in ('source_events', 'projection', 'coach_analysis', 'coach_writes', 'safe_fallback')
  ),
  constraint learning_student_feature_mode_check check (mode in ('disabled', 'shadow', 'enabled')),
  constraint learning_student_feature_version_check check (config_version ~ '^[a-z][a-z0-9-]{1,63}@[0-9]+$'),
  constraint learning_student_feature_reason_check check (reason_code ~ '^[A-Z][A-Z0-9_]{2,63}$')
);

revoke all on table learning_private.learning_student_feature_flags from public, anon, authenticated;

insert into learning_private.learning_feature_flags (
  feature_key, scope_type, scope_key, enabled, mode, reason_code
) values
  ('source_events', 'global', '*', false, 'disabled', 'PHASE9_SAFE_DEFAULT'),
  ('projection', 'global', '*', false, 'disabled', 'PHASE9_SAFE_DEFAULT'),
  ('coach_analysis', 'global', '*', false, 'disabled', 'PHASE9_SAFE_DEFAULT'),
  ('coach_writes', 'global', '*', false, 'disabled', 'PHASE9_SAFE_DEFAULT'),
  ('safe_fallback', 'global', '*', true, 'enabled', 'PHASE9_SAFE_DEFAULT')
on conflict (feature_key, scope_type, scope_key) do nothing;

create or replace function learning_private.resolve_learning_rollout(
  p_feature_key text,
  p_student_id uuid default null,
  p_source_code text default null,
  p_test_group text default null
)
returns jsonb
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_flag learning_private.learning_feature_flags%rowtype;
  v_student_flag learning_private.learning_student_feature_flags%rowtype;
begin
  if p_feature_key not in ('source_events', 'projection', 'coach_analysis', 'coach_writes', 'safe_fallback') then
    return pg_catalog.jsonb_build_object(
      'enabled', false, 'mode', 'disabled', 'scope_type', 'invalid',
      'config_version', 'learning-rollout-flags@1', 'reason_code', 'FEATURE_UNKNOWN'
    );
  end if;

  if p_student_id is not null then
    select flag.* into v_student_flag
      from learning_private.learning_student_feature_flags as flag
     where flag.feature_key = p_feature_key
       and flag.student_id = p_student_id
     limit 1;
    if found then
      return pg_catalog.jsonb_build_object(
        'enabled', v_student_flag.enabled,
        'mode', case when v_student_flag.enabled then v_student_flag.mode else 'disabled' end,
        'scope_type', 'student',
        'config_version', v_student_flag.config_version,
        'reason_code', v_student_flag.reason_code
      );
    end if;
  end if;

  select flag.* into v_flag
    from learning_private.learning_feature_flags as flag
   where flag.feature_key = p_feature_key
     and (
       (p_test_group is not null and flag.scope_type = 'test_group' and flag.scope_key = p_test_group)
       or (p_source_code is not null and flag.scope_type = 'source' and flag.scope_key = p_source_code)
       or (flag.scope_type = 'global' and flag.scope_key = '*')
     )
   order by case flag.scope_type
     when 'test_group' then 1 when 'source' then 2 else 3 end
   limit 1;

  if not found then
    return pg_catalog.jsonb_build_object(
      'enabled', false, 'mode', 'disabled', 'scope_type', 'default',
      'config_version', 'learning-rollout-flags@1', 'reason_code', 'SAFE_DEFAULT_OFF'
    );
  end if;

  return pg_catalog.jsonb_build_object(
    'enabled', v_flag.enabled,
    'mode', case when v_flag.enabled then v_flag.mode else 'disabled' end,
    'scope_type', v_flag.scope_type,
    'config_version', v_flag.config_version,
    'reason_code', v_flag.reason_code
  );
end;
$fn$;

revoke all on function learning_private.resolve_learning_rollout(text, uuid, text, text)
  from public, anon, authenticated;

create or replace function learning_private.enforce_learning_source_event_flag()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_decision jsonb;
begin
  v_decision := learning_private.resolve_learning_rollout(
    'source_events', new.student_id, new.source_code, null
  );
  if coalesce((v_decision ->> 'enabled')::boolean, false) is not true
     or coalesce(v_decision ->> 'mode', 'disabled') = 'disabled' then
    raise exception using
      errcode = 'P0001',
      message = 'LEARNING_SOURCE_DISABLED',
      detail = new.source_code;
  end if;
  return new;
end;
$fn$;

drop trigger if exists learning_evidence_source_event_flag on public.learning_evidence_records;
create trigger learning_evidence_source_event_flag
before insert on public.learning_evidence_records
for each row execute function learning_private.enforce_learning_source_event_flag();

create table if not exists learning_private.learning_rollout_observations (
  observation_id bigint generated always as identity primary key,
  observed_at timestamptz not null default pg_catalog.clock_timestamp(),
  feature_key text not null,
  source_code text,
  scope_type text not null,
  scope_token text,
  decision text not null,
  rollout_version text not null,
  event_contract_version text,
  model_version text,
  count bigint not null default 1,
  constraint learning_rollout_observation_feature_check check (
    feature_key in ('source_events', 'projection', 'coach_analysis', 'coach_writes', 'safe_fallback')
  ),
  constraint learning_rollout_observation_scope_check check (
    scope_type in ('global', 'source', 'student_hash', 'test_group')
    and (scope_token is null or scope_token ~ '^[A-Za-z0-9:_-]{6,96}$')
  ),
  constraint learning_rollout_observation_decision_check check (decision in ('disabled', 'shadow', 'enabled')),
  constraint learning_rollout_observation_version_check check (rollout_version = 'learning-rollout-flags@1'),
  constraint learning_rollout_observation_count_check check (count > 0)
);

comment on table learning_private.learning_rollout_observations is
  'Ham içerik ve öğrenci kimliği taşımayan sürüm/bayrak gözlemleri; student_hash geri döndürülemez kısa belirteçtir.';

revoke all on table learning_private.learning_rollout_observations from public, anon, authenticated;

create table if not exists learning_private.learning_retention_policy_draft (
  data_class text primary key,
  duration_days integer,
  duration_rule text,
  delete_path text not null,
  policy_owner text not null,
  review_status text not null default 'product_owner_and_legal_review_required',
  automatic_delete_enabled boolean not null default false,
  constraint learning_retention_duration_check check (
    (duration_days is not null and duration_days between 1 and 3650 and duration_rule is null)
    or (duration_days is null and duration_rule is not null)
  ),
  constraint learning_retention_review_check check (
    review_status = 'product_owner_and_legal_review_required'
  )
);

revoke all on table learning_private.learning_retention_policy_draft from public, anon, authenticated;

insert into learning_private.learning_retention_policy_draft (
  data_class, duration_days, duration_rule, delete_path, policy_owner
) values
  ('learning_evidence', null, 'active_account', 'account_cascade_or_source_tombstone', 'product_owner'),
  ('derived_projection', 90, null, 'recompute_or_account_cascade', 'learning_platform'),
  ('approved_memory', null, 'until_student_forgets_or_account_deleted', 'student_forget_action_or_account_cascade', 'product_owner'),
  ('coaching_action_receipt', 90, null, 'scheduled_private_cleanup_or_account_cascade', 'learning_platform'),
  ('operational_metrics', 30, null, 'scheduled_aggregate_cleanup', 'operations'),
  ('shadow_comparison_metadata', 7, null, 'scheduled_private_cleanup', 'ai_quality')
on conflict (data_class) do update set
  duration_days = excluded.duration_days,
  duration_rule = excluded.duration_rule,
  delete_path = excluded.delete_path,
  policy_owner = excluded.policy_owner,
  review_status = excluded.review_status,
  automatic_delete_enabled = false;

commit;
