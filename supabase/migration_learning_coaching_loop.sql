-- DRKOÇ AI Koç — Faz 8 kapalı öğrenme döngüsü
-- Yalnız yerel kabul için hazırlanmıştır; canlı uygulama Faz 10 ve açık onay ister.
-- Faz 2–6 migration dosyaları değiştirilmez; bu dosya onların üstüne eklenir.

begin;

create schema if not exists learning_private;

do $phase_8_dependencies$
begin
  if pg_catalog.to_regclass('public.learning_evidence_records') is null
     or pg_catalog.to_regclass('public.student_learning_projection_rows') is null
     or pg_catalog.to_regclass('public.student_coaching_decision_history') is null
     or pg_catalog.to_regclass('public.ai_study_tasks') is null then
    raise exception 'phase_8_dependencies_missing';
  end if;
end
$phase_8_dependencies$;

create table if not exists public.student_coaching_recommendations (
  recommendation_id uuid primary key,
  student_id uuid not null references public.profiles(id) on delete cascade,
  contract_version text not null default 'coaching-recommendation@1',
  recommendation_version integer not null default 1,
  dedupe_key text not null,
  education_context_id text,
  subject_id text,
  topic_id text,
  objective_id text,
  subject_label text,
  topic_label text,
  recommendation_type text not null,
  reason_summary text not null,
  evidence_refs jsonb not null default '[]'::jsonb,
  projection_generation_id uuid references public.learning_projection_generations(generation_id) on delete set null,
  confidence_level text not null,
  data_limitations jsonb not null default '[]'::jsonb,
  suggested_amount jsonb,
  target jsonb not null,
  success_criteria jsonb not null,
  decision text not null default 'pending',
  valid_until timestamptz not null,
  status text not null default 'proposed',
  current_task_id uuid,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint coaching_recommendation_contract_check check (contract_version = 'coaching-recommendation@1'),
  constraint coaching_recommendation_version_check check (recommendation_version >= 1),
  constraint coaching_recommendation_type_check check (recommendation_type in (
    'learn','practice','repeat','review_error','review_exam','language_skill','external_study'
  )),
  constraint coaching_recommendation_confidence_check check (confidence_level in ('insufficient','low','medium','high')),
  constraint coaching_recommendation_decision_check check (decision in ('pending','accepted','rejected','postponed','edited','cancelled')),
  constraint coaching_recommendation_status_check check (status in (
    'proposed','accepted','rejected','planned','started','partial','user_reported_complete',
    'platform_verified','expired','postponed','edited','cancelled','evaluated'
  )),
  constraint coaching_recommendation_text_check check (
    pg_catalog.char_length(reason_summary) between 1 and 280
    and pg_catalog.char_length(coalesce(subject_label,'')) <= 80
    and pg_catalog.char_length(coalesce(topic_label,'')) <= 100
    and reason_summary !~ '[[:cntrl:]]'
  ),
  constraint coaching_recommendation_json_check check (
    pg_catalog.jsonb_typeof(evidence_refs) = 'array'
    and pg_catalog.jsonb_array_length(evidence_refs) <= 12
    and pg_catalog.jsonb_typeof(data_limitations) = 'array'
    and pg_catalog.jsonb_array_length(data_limitations) <= 8
    and pg_catalog.jsonb_typeof(target) = 'object'
    and pg_catalog.jsonb_typeof(success_criteria) = 'object'
    and pg_catalog.octet_length(target::text) <= 4096
    and pg_catalog.octet_length(success_criteria::text) <= 4096
  ),
  constraint coaching_recommendation_target_check check (
    target ->> 'status' in ('available','unavailable')
    and target ->> 'target_type' in (
      'lesson','lesson_filter','question_set','question_filter','ai_solve','problem',
      'homework','exam','atlas','language_lesson','language_review','external_log','none'
    )
    and (
      (target ->> 'status' = 'unavailable' and coalesce(target ->> 'path','') = '')
      or (
        target ->> 'status' = 'available'
        and target ->> 'path' ~ '^/(kutuphane/(notlar|sorular)|soru-coz|sorular|odevler|denemeler|fizik-atlasi|kimya-atlasi|biyoloji-atlasi|cografya-atlasi|geometri-pilot|tarih-atlasi|ingilizce|almanca|fransizca|ispanyolca|gunluk-takip)(/|\?|$)'
        and target ->> 'path' !~ '(^//|://|[[:cntrl:]])'
        and pg_catalog.strpos(target ->> 'path', E'\\') = 0
      )
    )
  ),
  constraint coaching_recommendation_time_check check (valid_until > created_at),
  constraint coaching_recommendation_dedupe_uq unique (student_id, dedupe_key)
);

create index if not exists coaching_recommendation_current_idx
  on public.student_coaching_recommendations (student_id, status, valid_until, created_at desc);
create index if not exists coaching_recommendation_topic_idx
  on public.student_coaching_recommendations (student_id, topic_id, created_at desc);

create table if not exists public.student_coaching_tasks (
  task_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  recommendation_id uuid not null references public.student_coaching_recommendations(recommendation_id) on delete cascade,
  recommendation_version integer not null,
  ai_study_task_id uuid references public.ai_study_tasks(id) on delete set null,
  contract_version text not null default 'coaching-task@1',
  task_version integer not null default 1,
  title text not null,
  status text not null default 'planned',
  target jsonb not null,
  education_context_id text,
  subject_id text,
  topic_id text,
  objective_id text,
  completion_mode text not null,
  expected_evidence_types text[] not null default '{}',
  expected_source_codes text[] not null default '{}',
  minimum_evidence_count integer not null default 1,
  accumulated_evidence_count integer not null default 0,
  progress_ratio numeric not null default 0,
  work_window_start timestamptz not null default pg_catalog.clock_timestamp(),
  work_window_end timestamptz not null,
  before_projection jsonb,
  user_reported_at timestamptz,
  platform_verified_at timestamptz,
  evaluated_at timestamptz,
  cancelled_at timestamptz,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint coaching_task_contract_check check (contract_version = 'coaching-task@1'),
  constraint coaching_task_version_check check (task_version >= 1),
  constraint coaching_task_status_check check (status in (
    'accepted','planned','started','partial','user_reported_complete','platform_verified',
    'expired','postponed','edited','cancelled','evaluated'
  )),
  constraint coaching_task_completion_mode_check check (completion_mode in ('platform','student_report','mixed')),
  constraint coaching_task_counts_check check (
    minimum_evidence_count between 1 and 200
    and accumulated_evidence_count >= 0
    and progress_ratio between 0 and 1
  ),
  constraint coaching_task_arrays_check check (
    pg_catalog.cardinality(expected_evidence_types) <= 12
    and pg_catalog.cardinality(expected_source_codes) <= 12
    and pg_catalog.array_position(expected_evidence_types, null) is null
    and pg_catalog.array_position(expected_source_codes, null) is null
  ),
  constraint coaching_task_time_check check (work_window_end > work_window_start),
  constraint coaching_task_recommendation_uq unique (recommendation_id, recommendation_version)
);

alter table public.student_coaching_recommendations
  drop constraint if exists coaching_recommendation_current_task_fk;
alter table public.student_coaching_recommendations
  add constraint coaching_recommendation_current_task_fk
  foreign key (current_task_id) references public.student_coaching_tasks(task_id) on delete set null;

create index if not exists coaching_task_current_idx
  on public.student_coaching_tasks (student_id, status, work_window_end, created_at desc);
create index if not exists coaching_task_match_idx
  on public.student_coaching_tasks (student_id, topic_id, status, work_window_start, work_window_end);

create table if not exists public.student_coaching_task_events (
  event_id uuid primary key default pg_catalog.gen_random_uuid(),
  task_id uuid not null references public.student_coaching_tasks(task_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  from_status text,
  to_status text not null,
  actor_type text not null,
  reason_code text,
  task_version integer not null,
  occurred_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint coaching_task_event_status_check check (
    (from_status is null or from_status in ('proposed','accepted','planned','started','partial','user_reported_complete','platform_verified','expired','postponed','edited','cancelled','evaluated'))
    and to_status in ('accepted','planned','started','partial','user_reported_complete','platform_verified','expired','postponed','edited','cancelled','evaluated')
  ),
  constraint coaching_task_event_actor_check check (actor_type in ('student','system','teacher'))
);

create index if not exists coaching_task_events_timeline_idx
  on public.student_coaching_task_events (student_id, task_id, occurred_at);

create table if not exists public.student_coaching_task_evidence (
  task_id uuid not null references public.student_coaching_tasks(task_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  evidence_record_id uuid not null references public.learning_evidence_records(record_id) on delete cascade,
  evidence_class text not null,
  semantic_event_type text not null,
  occurred_at timestamptz not null,
  contribution_count integer not null default 1,
  platform_verified boolean not null default false,
  matched_at timestamptz not null default pg_catalog.clock_timestamp(),
  primary key (task_id, evidence_record_id),
  constraint coaching_task_evidence_once_uq unique (student_id, evidence_record_id),
  constraint coaching_task_evidence_count_check check (contribution_count between 1 and 200)
);

create index if not exists coaching_task_evidence_task_idx
  on public.student_coaching_task_evidence (student_id, task_id, occurred_at);

create table if not exists public.student_coaching_outcomes (
  outcome_id uuid primary key default pg_catalog.gen_random_uuid(),
  task_id uuid not null unique references public.student_coaching_tasks(task_id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  contract_version text not null default 'coaching-outcome@1',
  topic_id text,
  before_projection jsonb,
  after_projection jsonb,
  delayed_projection jsonb,
  student_feedback text,
  assessment text not null,
  enough_data boolean not null,
  performance_change numeric,
  causal_claim boolean not null default false,
  explanation text not null,
  evaluated_at timestamptz not null default pg_catalog.clock_timestamp(),
  updated_at timestamptz not null default pg_catalog.clock_timestamp(),
  constraint coaching_outcome_contract_check check (contract_version = 'coaching-outcome@1'),
  constraint coaching_outcome_assessment_check check (assessment in ('useful','ineffective','unevaluable')),
  constraint coaching_outcome_feedback_check check (student_feedback is null or student_feedback in ('helpful','not_helpful','unsure')),
  constraint coaching_outcome_causality_check check (not causal_claim),
  constraint coaching_outcome_change_check check (performance_change is null or performance_change between -1 and 1),
  constraint coaching_outcome_explanation_check check (
    pg_catalog.char_length(explanation) between 1 and 320
    and explanation !~* '(kesin olarak neden|sayesinde kesin|garanti)'
  )
);

create index if not exists coaching_outcome_student_idx
  on public.student_coaching_outcomes (student_id, evaluated_at desc);

create table if not exists public.student_coaching_feedback (
  feedback_id uuid primary key default pg_catalog.gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  recommendation_id uuid references public.student_coaching_recommendations(recommendation_id) on delete cascade,
  task_id uuid references public.student_coaching_tasks(task_id) on delete cascade,
  reason_code text not null,
  status text not null default 'open',
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  resolved_at timestamptz,
  constraint coaching_feedback_target_check check (recommendation_id is not null or task_id is not null),
  constraint coaching_feedback_reason_check check (reason_code in (
    'recommendation_irrelevant','target_unavailable','evidence_mismatched','result_incorrect','other_without_free_text'
  )),
  constraint coaching_feedback_status_check check (status in ('open','resolved','dismissed'))
);

create unique index if not exists coaching_feedback_open_uq
  on public.student_coaching_feedback (student_id, coalesce(recommendation_id, '00000000-0000-0000-0000-000000000000'::uuid), coalesce(task_id, '00000000-0000-0000-0000-000000000000'::uuid), reason_code)
  where status = 'open';

create table if not exists learning_private.coaching_action_receipts (
  student_id uuid not null references public.profiles(id) on delete cascade,
  client_action_id uuid not null,
  action_type text not null,
  payload_fingerprint text not null,
  result jsonb not null,
  created_at timestamptz not null default pg_catalog.clock_timestamp(),
  primary key (student_id, client_action_id)
);

create or replace function learning_private.coaching_student_id()
returns uuid
language plpgsql
stable
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := (select auth.uid());
begin
  if v_student_id is null or not exists (
    select 1 from public.profiles as profile where profile.id = v_student_id and profile.role = 'student'
  ) then raise exception 'student_identity_required'; end if;
  return v_student_id;
end
$fn$;

create or replace function learning_private.coaching_transition_allowed(p_from text, p_to text)
returns boolean
language sql
immutable
set search_path = ''
as $fn$
  select case p_from
    when 'proposed' then p_to = any(array['accepted','rejected','edited','expired'])
    when 'accepted' then p_to = any(array['planned','rejected','postponed','edited','cancelled'])
    when 'planned' then p_to = any(array['started','partial','user_reported_complete','platform_verified','postponed','edited','cancelled','expired'])
    when 'started' then p_to = any(array['partial','user_reported_complete','platform_verified','postponed','edited','cancelled','expired'])
    when 'partial' then p_to = any(array['started','user_reported_complete','platform_verified','postponed','edited','cancelled','expired'])
    when 'user_reported_complete' then p_to = any(array['platform_verified','evaluated','edited','cancelled'])
    when 'platform_verified' then p_to = 'evaluated'
    when 'postponed' then p_to = any(array['planned','edited','cancelled','expired'])
    when 'edited' then p_to = any(array['accepted','planned','rejected','cancelled'])
    else false
  end;
$fn$;

create or replace function public.confirm_coaching_recommendation(
  p_recommendation jsonb,
  p_client_action_id uuid
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := learning_private.coaching_student_id();
  v_fingerprint text := pg_catalog.md5(coalesce(p_recommendation::text,''));
  v_receipt learning_private.coaching_action_receipts%rowtype;
  v_recommendation_id uuid;
  v_existing public.student_coaching_recommendations%rowtype;
  v_ai_task_id uuid;
  v_task_id uuid;
  v_type text;
  v_target jsonb;
  v_criteria jsonb;
  v_amount jsonb;
  v_topic_id text;
  v_objective_id text;
  v_subject_label text;
  v_topic_label text;
  v_reason text;
  v_confidence text;
  v_evidence_refs jsonb;
  v_valid_until timestamptz;
  v_dedupe text;
  v_before jsonb;
  v_expected text[];
  v_sources text[];
  v_minimum integer;
  v_duration integer;
  v_activity text;
  v_result jsonb;
begin
  if p_client_action_id is null or pg_catalog.jsonb_typeof(p_recommendation) <> 'object' then
    raise exception 'coaching_action_invalid';
  end if;
  select * into v_receipt from learning_private.coaching_action_receipts
   where student_id = v_student_id and client_action_id = p_client_action_id;
  if found then
    if v_receipt.action_type <> 'confirm' or v_receipt.payload_fingerprint <> v_fingerprint then
      raise exception 'coaching_action_idempotency_conflict';
    end if;
    return v_receipt.result || jsonb_build_object('status','duplicate');
  end if;

  begin v_recommendation_id := (p_recommendation ->> 'recommendation_id')::uuid;
  exception when others then raise exception 'recommendation_id_invalid'; end;
  if p_recommendation ->> 'contract_version' <> 'coaching-recommendation@1' then raise exception 'recommendation_contract_invalid'; end if;
  v_type := p_recommendation ->> 'recommendation_type';
  v_target := p_recommendation -> 'target';
  v_criteria := p_recommendation -> 'success_criteria';
  v_amount := p_recommendation -> 'suggested_amount';
  v_topic_id := nullif(p_recommendation ->> 'topic_id','');
  v_objective_id := nullif(p_recommendation ->> 'objective_id','');
  v_subject_label := nullif(pg_catalog.btrim(p_recommendation ->> 'subject_label'),'');
  v_topic_label := nullif(pg_catalog.btrim(p_recommendation ->> 'topic_label'),'');
  v_reason := nullif(pg_catalog.btrim(p_recommendation ->> 'reason_summary'),'');
  v_confidence := p_recommendation ->> 'confidence_level';
  v_evidence_refs := coalesce(p_recommendation -> 'evidence_refs','[]'::jsonb);
  begin v_valid_until := (p_recommendation ->> 'valid_until')::timestamptz;
  exception when others then raise exception 'recommendation_time_invalid'; end;
  if v_type not in ('learn','practice','repeat','review_error','review_exam','language_skill','external_study')
     or v_confidence not in ('insufficient','low','medium','high')
     or v_reason is null or pg_catalog.char_length(v_reason) > 280
     or v_reason ~* '(ignore[[:space:]]+(all[[:space:]]+)?previous|system[[:space:]]+prompt|drop[[:space:]]+table|service[_ -]?role|<script|javascript:)'
     or v_valid_until <= pg_catalog.clock_timestamp()
     or pg_catalog.jsonb_typeof(v_target) <> 'object'
     or pg_catalog.jsonb_typeof(v_criteria) <> 'object'
     or v_target ->> 'status' not in ('available','unavailable') then
    raise exception 'recommendation_schema_invalid';
  end if;
  if v_target ->> 'status' = 'available' and (
    coalesce(v_target ->> 'path','') !~ '^/(kutuphane/(notlar|sorular)|soru-coz|sorular|odevler|denemeler|fizik-atlasi|kimya-atlasi|biyoloji-atlasi|cografya-atlasi|geometri-pilot|tarih-atlasi|ingilizce|almanca|fransizca|ispanyolca|gunluk-takip)(/|\?|$)'
    or v_target ->> 'path' ~ '(^//|://|[[:cntrl:]])'
    or pg_catalog.strpos(v_target ->> 'path', E'\\') > 0
    or coalesce(v_target ->> 'published','false') <> 'true'
    or coalesce(v_target ->> 'accessible','false') <> 'true'
    or coalesce(v_target ->> 'level_appropriate','false') <> 'true'
    or coalesce(v_target ->> 'completed','false') = 'true' and v_type <> 'repeat'
  ) then raise exception 'recommendation_target_invalid'; end if;

  if pg_catalog.jsonb_typeof(v_evidence_refs) <> 'array'
     or pg_catalog.jsonb_array_length(v_evidence_refs) > 12
     or exists (
       select 1 from pg_catalog.jsonb_array_elements_text(v_evidence_refs) as evidence_ref(value)
        where evidence_ref.value !~ '^drkoc-ref:v1:[a-z0-9._-]+:[A-Za-z0-9_-]{8,128}$'
     )
     or (v_confidence <> 'insufficient' and pg_catalog.jsonb_array_length(v_evidence_refs) = 0) then
    raise exception 'recommendation_evidence_invalid';
  end if;
  if exists (
    select 1
      from pg_catalog.jsonb_array_elements_text(v_evidence_refs) as requested(value)
      left join public.student_learning_projection_evidence_refs as evidence_ref
        on evidence_ref.student_id = v_student_id
       and evidence_ref.source_locator = requested.value
       and evidence_ref.included
       and (
         nullif(p_recommendation ->> 'projection_generation_id','') is null
         or evidence_ref.generation_id = (p_recommendation ->> 'projection_generation_id')::uuid
       )
     where evidence_ref.record_id is null
  ) then
    raise exception 'recommendation_evidence_unknown';
  end if;

  select coalesce(array_agg(value), '{}') into v_expected
    from jsonb_array_elements_text(coalesce(v_criteria -> 'evidence_types','[]'::jsonb)) as value
   where value ~ '^[a-z][a-z0-9_]{1,63}$';
  select coalesce(array_agg(value), '{}') into v_sources
    from jsonb_array_elements_text(coalesce(v_criteria -> 'source_codes','[]'::jsonb)) as value
   where value ~ '^[a-z][a-z0-9_]{1,63}$';
  v_minimum := greatest(1, least(200, coalesce((v_criteria ->> 'minimum_count')::integer,1)));
  v_duration := case when v_amount ->> 'kind' = 'minutes' then greatest(5,least(240,(v_amount ->> 'value')::integer)) else 30 end;
  v_activity := case v_type when 'learn' then 'konu_tekrari' when 'repeat' then 'konu_tekrari' when 'review_error' then 'yanlis_analizi' when 'review_exam' then 'deneme' else 'soru_cozumu' end;
  v_dedupe := pg_catalog.md5(pg_catalog.concat_ws('|',v_type,coalesce(v_topic_id,''),coalesce(v_target ->> 'target_ref',''),v_valid_until::date::text,v_criteria::text));

  select * into v_existing from public.student_coaching_recommendations
   where student_id = v_student_id and dedupe_key = v_dedupe;
  if found then
    v_result := jsonb_build_object('status','deduplicated','recommendation_id',v_existing.recommendation_id,'task_id',v_existing.current_task_id);
    insert into learning_private.coaching_action_receipts(student_id,client_action_id,action_type,payload_fingerprint,result)
    values(v_student_id,p_client_action_id,'confirm',v_fingerprint,v_result);
    return v_result;
  end if;

  if v_topic_id is not null then
    select jsonb_build_object(
      'generation_id',row.generation_id,'topic_id',row.topic_id,'performance_score',row.performance_score,
      'performance_state',row.performance_state,'confidence_level',row.confidence_level,
      'computed_at',row.computed_at,'row_checksum',row.row_checksum
    ) into v_before
      from public.student_learning_projection_rows as row
     where row.student_id = v_student_id and row.topic_id = v_topic_id
       and row.scope_type = 'topic' and row.is_active and row.consumer_visible
     order by row.computed_at desc limit 1;
  end if;

  insert into public.student_coaching_recommendations(
    recommendation_id,student_id,recommendation_version,dedupe_key,education_context_id,
    subject_id,topic_id,objective_id,subject_label,topic_label,recommendation_type,
    reason_summary,evidence_refs,projection_generation_id,confidence_level,data_limitations,
    suggested_amount,target,success_criteria,decision,valid_until,status
  ) values (
    v_recommendation_id,v_student_id,coalesce((p_recommendation ->> 'recommendation_version')::integer,1),v_dedupe,
    nullif(p_recommendation ->> 'education_context_id',''),nullif(p_recommendation ->> 'subject_id',''),v_topic_id,v_objective_id,
    v_subject_label,v_topic_label,v_type,v_reason,v_evidence_refs,
    nullif(p_recommendation ->> 'projection_generation_id','')::uuid,v_confidence,
    coalesce(p_recommendation -> 'data_limitations','[]'::jsonb),v_amount,v_target,v_criteria,
    'accepted',v_valid_until,'planned'
  );

  insert into public.ai_study_tasks(student_id,plan_group,subject,topic,activity,planned_date,duration_minutes,status)
  values(v_student_id,v_recommendation_id,coalesce(v_subject_label,'Kişisel çalışma'),v_topic_label,v_activity,current_date,v_duration,'planlandı')
  returning id into v_ai_task_id;

  insert into public.student_coaching_tasks(
    student_id,recommendation_id,recommendation_version,ai_study_task_id,title,status,target,
    education_context_id,subject_id,topic_id,objective_id,completion_mode,
    expected_evidence_types,expected_source_codes,minimum_evidence_count,work_window_end,before_projection
  ) values (
    v_student_id,v_recommendation_id,coalesce((p_recommendation ->> 'recommendation_version')::integer,1),v_ai_task_id,
    coalesce(v_topic_label,v_subject_label,'Koçluk görevi'),'planned',v_target,
    nullif(p_recommendation ->> 'education_context_id',''),nullif(p_recommendation ->> 'subject_id',''),v_topic_id,v_objective_id,
    case when v_type = 'external_study' then 'student_report' else 'mixed' end,
    v_expected,v_sources,v_minimum,v_valid_until,v_before
  ) returning task_id into v_task_id;

  update public.student_coaching_recommendations set current_task_id = v_task_id,updated_at = pg_catalog.clock_timestamp()
   where recommendation_id = v_recommendation_id;
  insert into public.student_coaching_task_events(task_id,student_id,from_status,to_status,actor_type,reason_code,task_version)
  values(v_task_id,v_student_id,'accepted','planned','student','explicit_confirmation',1);
  insert into public.student_coaching_decision_history(
    student_id,decision_type,status,scope_key,projection_generation_id,recommendation_ref,plan_id,accepted_at
  ) values (
    v_student_id,'recommendation','accepted',case when v_topic_id is null then null else 'topic|' || v_topic_id end,
    nullif(p_recommendation ->> 'projection_generation_id','')::uuid,
    'drkoc-ref:v1:coaching_recommendation:' || pg_catalog.replace(v_recommendation_id::text,'-',''),v_ai_task_id,pg_catalog.clock_timestamp()
  );

  v_result := jsonb_build_object('status','created','recommendation_id',v_recommendation_id,'task_id',v_task_id,'ai_study_task_id',v_ai_task_id,'target',v_target);
  insert into learning_private.coaching_action_receipts(student_id,client_action_id,action_type,payload_fingerprint,result)
  values(v_student_id,p_client_action_id,'confirm',v_fingerprint,v_result);
  return v_result;
end
$fn$;

create or replace function public.reject_coaching_recommendation(
  p_recommendation jsonb,
  p_client_action_id uuid,
  p_reason_code text default 'not_relevant'
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := learning_private.coaching_student_id();
  v_id uuid;
  v_fingerprint text := pg_catalog.md5(coalesce(p_recommendation::text,'') || coalesce(p_reason_code,''));
  v_receipt learning_private.coaching_action_receipts%rowtype;
  v_result jsonb;
begin
  if p_reason_code not in ('not_relevant','already_done','wrong_topic','too_much','prefer_other') then raise exception 'rejection_reason_invalid'; end if;
  begin v_id := (p_recommendation ->> 'recommendation_id')::uuid;
  exception when others then raise exception 'recommendation_id_invalid'; end;
  select * into v_receipt from learning_private.coaching_action_receipts where student_id=v_student_id and client_action_id=p_client_action_id;
  if found then
    if v_receipt.action_type <> 'reject' or v_receipt.payload_fingerprint <> v_fingerprint then raise exception 'coaching_action_idempotency_conflict'; end if;
    return v_receipt.result || jsonb_build_object('status','duplicate');
  end if;
  insert into public.student_coaching_recommendations(
    recommendation_id,student_id,recommendation_version,dedupe_key,education_context_id,subject_id,topic_id,objective_id,
    subject_label,topic_label,recommendation_type,reason_summary,evidence_refs,projection_generation_id,
    confidence_level,data_limitations,suggested_amount,target,success_criteria,decision,valid_until,status
  ) values (
    v_id,v_student_id,coalesce((p_recommendation ->> 'recommendation_version')::integer,1),
    pg_catalog.md5('rejected|' || v_id::text),nullif(p_recommendation ->> 'education_context_id',''),nullif(p_recommendation ->> 'subject_id',''),
    nullif(p_recommendation ->> 'topic_id',''),nullif(p_recommendation ->> 'objective_id',''),
    nullif(p_recommendation ->> 'subject_label',''),nullif(p_recommendation ->> 'topic_label',''),
    p_recommendation ->> 'recommendation_type',pg_catalog.left(coalesce(p_recommendation ->> 'reason_summary','İlgisiz öneri'),280),
    coalesce(p_recommendation -> 'evidence_refs','[]'::jsonb),nullif(p_recommendation ->> 'projection_generation_id','')::uuid,
    coalesce(p_recommendation ->> 'confidence_level','insufficient'),coalesce(p_recommendation -> 'data_limitations','[]'::jsonb),
    p_recommendation -> 'suggested_amount',coalesce(p_recommendation -> 'target','{"status":"unavailable","target_type":"none"}'::jsonb),
    coalesce(p_recommendation -> 'success_criteria','{"kind":"student_report","minimum_count":1}'::jsonb),
    'rejected',coalesce(nullif(p_recommendation ->> 'valid_until','')::timestamptz,pg_catalog.clock_timestamp()+interval '7 days'),'rejected'
  ) on conflict (recommendation_id) do update set decision='rejected',status='rejected',updated_at=pg_catalog.clock_timestamp()
    where public.student_coaching_recommendations.student_id=v_student_id;
  insert into public.student_coaching_decision_history(student_id,decision_type,status,scope_key,recommendation_ref)
  values(v_student_id,'recommendation','declined',case when p_recommendation ->> 'topic_id' is null then null else 'topic|' || (p_recommendation ->> 'topic_id') end,
    'drkoc-ref:v1:coaching_recommendation:' || pg_catalog.replace(v_id::text,'-',''));
  v_result := jsonb_build_object('status','rejected','recommendation_id',v_id,'reason_code',p_reason_code);
  insert into learning_private.coaching_action_receipts(student_id,client_action_id,action_type,payload_fingerprint,result)
  values(v_student_id,p_client_action_id,'reject',v_fingerprint,v_result);
  return v_result;
end
$fn$;

create or replace function public.transition_coaching_task(
  p_task_id uuid,
  p_to_status text,
  p_client_action_id uuid,
  p_reason_code text default null,
  p_patch jsonb default '{}'::jsonb
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := learning_private.coaching_student_id();
  v_task public.student_coaching_tasks%rowtype;
  v_new_end timestamptz;
  v_result jsonb;
  v_fingerprint text := pg_catalog.md5(coalesce(p_task_id::text,'') || '|' || coalesce(p_to_status,'') || '|' || coalesce(p_patch::text,''));
  v_receipt learning_private.coaching_action_receipts%rowtype;
begin
  select * into v_receipt from learning_private.coaching_action_receipts where student_id=v_student_id and client_action_id=p_client_action_id;
  if found then
    if v_receipt.action_type <> 'transition' or v_receipt.payload_fingerprint <> v_fingerprint then raise exception 'coaching_action_idempotency_conflict'; end if;
    return v_receipt.result || jsonb_build_object('status','duplicate');
  end if;
  select * into v_task from public.student_coaching_tasks where task_id=p_task_id and student_id=v_student_id for update;
  if not found then raise exception 'coaching_task_not_found'; end if;
  if not learning_private.coaching_transition_allowed(v_task.status,p_to_status) then raise exception 'coaching_task_transition_invalid'; end if;
  v_new_end := v_task.work_window_end;
  if p_to_status in ('postponed','edited') and p_patch ? 'work_window_end' then
    begin v_new_end := (p_patch ->> 'work_window_end')::timestamptz;
    exception when others then raise exception 'coaching_task_time_invalid'; end;
    if v_new_end <= pg_catalog.clock_timestamp() then raise exception 'coaching_task_time_invalid'; end if;
  end if;
  update public.student_coaching_tasks set
    status=p_to_status,
    task_version=case when p_to_status='edited' then task_version+1 else task_version end,
    work_window_end=v_new_end,
    user_reported_at=case when p_to_status='user_reported_complete' then pg_catalog.clock_timestamp() else user_reported_at end,
    cancelled_at=case when p_to_status='cancelled' then pg_catalog.clock_timestamp() else cancelled_at end,
    updated_at=pg_catalog.clock_timestamp()
   where task_id=p_task_id;
  update public.student_coaching_recommendations set
    status=p_to_status,
    decision=case p_to_status when 'postponed' then 'postponed' when 'edited' then 'edited' when 'cancelled' then 'cancelled' else decision end,
    recommendation_version=case when p_to_status='edited' then recommendation_version+1 else recommendation_version end,
    valid_until=v_new_end,updated_at=pg_catalog.clock_timestamp()
   where recommendation_id=v_task.recommendation_id and student_id=v_student_id;
  if v_task.ai_study_task_id is not null then
    update public.ai_study_tasks set
      status=case when p_to_status='cancelled' then 'iptal' when p_to_status in ('user_reported_complete','platform_verified','evaluated') then 'tamamlandı' else 'planlandı' end,
      completed_at=case when p_to_status in ('user_reported_complete','platform_verified','evaluated') then pg_catalog.clock_timestamp() else null end,
      planned_date=case when p_to_status in ('postponed','edited') then v_new_end::date else planned_date end
     where id=v_task.ai_study_task_id and student_id=v_student_id;
  end if;
  insert into public.student_coaching_task_events(task_id,student_id,from_status,to_status,actor_type,reason_code,task_version)
  values(p_task_id,v_student_id,v_task.status,p_to_status,'student',p_reason_code,
    case when p_to_status='edited' then v_task.task_version+1 else v_task.task_version end);
  v_result := jsonb_build_object('status','updated','task_id',p_task_id,'from_status',v_task.status,'to_status',p_to_status,'work_window_end',v_new_end);
  insert into learning_private.coaching_action_receipts(student_id,client_action_id,action_type,payload_fingerprint,result)
  values(v_student_id,p_client_action_id,'transition',v_fingerprint,v_result);
  return v_result;
end
$fn$;

create or replace function learning_private.match_learning_evidence_to_coaching_task()
returns trigger
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_task public.student_coaching_tasks%rowtype;
  v_count integer := 1;
  v_inserted uuid;
  v_total integer;
  v_platform boolean;
  v_next text;
begin
  if new.record_kind not in ('event','snapshot') then return new; end if;
  select task.* into v_task
    from public.student_coaching_tasks as task
   where task.student_id=new.student_id
     and task.status in ('accepted','planned','started','partial','user_reported_complete')
     and new.occurred_at >= task.work_window_start and new.occurred_at <= task.work_window_end
     and (task.topic_id is null or task.topic_id=new.topic_id)
     and (task.objective_id is null or task.objective_id=new.objective_id)
     and (pg_catalog.cardinality(task.expected_evidence_types)=0 or new.semantic_event_type=any(task.expected_evidence_types))
     and (pg_catalog.cardinality(task.expected_source_codes)=0 or new.source_code=any(task.expected_source_codes))
   order by task.created_at asc,task.task_id asc limit 1;
  if not found then return new; end if;
  v_count := greatest(1,least(200,coalesce(
    nullif(new.measurement ->> 'total_count','')::integer,
    nullif(new.measurement ->> 'marked_count','')::integer,
    nullif(new.measurement ->> 'completed_count','')::integer,1
  )));
  v_platform := new.evidence_class in ('direct_measurement','system_observation','teacher_feedback');
  insert into public.student_coaching_task_evidence(
    task_id,student_id,evidence_record_id,evidence_class,semantic_event_type,occurred_at,contribution_count,platform_verified
  ) values(v_task.task_id,new.student_id,new.record_id,new.evidence_class,new.semantic_event_type,new.occurred_at,v_count,v_platform)
  on conflict (student_id,evidence_record_id) do nothing returning evidence_record_id into v_inserted;
  if v_inserted is null then return new; end if;
  select coalesce(sum(contribution_count),0)::integer into v_total
    from public.student_coaching_task_evidence where task_id=v_task.task_id;
  v_next := case when v_platform and v_total >= v_task.minimum_evidence_count then 'platform_verified' else 'partial' end;
  update public.student_coaching_tasks set status=v_next,accumulated_evidence_count=v_total,
    progress_ratio=least(1,v_total::numeric/minimum_evidence_count),
    platform_verified_at=case when v_next='platform_verified' then pg_catalog.clock_timestamp() else platform_verified_at end,
    updated_at=pg_catalog.clock_timestamp() where task_id=v_task.task_id;
  update public.student_coaching_recommendations set status=v_next,updated_at=pg_catalog.clock_timestamp()
   where recommendation_id=v_task.recommendation_id;
  if v_task.ai_study_task_id is not null and v_next='platform_verified' then
    update public.ai_study_tasks set status='tamamlandı',completed_at=pg_catalog.clock_timestamp()
     where id=v_task.ai_study_task_id and student_id=new.student_id;
  end if;
  insert into public.student_coaching_task_events(task_id,student_id,from_status,to_status,actor_type,reason_code,task_version)
  values(v_task.task_id,new.student_id,v_task.status,v_next,'system','matched_learning_evidence',v_task.task_version);
  return new;
end
$fn$;

drop trigger if exists learning_evidence_coaching_match on public.learning_evidence_records;
create trigger learning_evidence_coaching_match
after insert on public.learning_evidence_records
for each row execute function learning_private.match_learning_evidence_to_coaching_task();

create or replace function public.refresh_coaching_task_outcome(
  p_task_id uuid,
  p_student_feedback text default null
) returns jsonb
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := learning_private.coaching_student_id();
  v_task public.student_coaching_tasks%rowtype;
  v_after public.student_learning_projection_rows%rowtype;
  v_before_score numeric;
  v_after_score numeric;
  v_change numeric;
  v_enough boolean := false;
  v_assessment text := 'unevaluable';
  v_explanation text;
  v_outcome_id uuid;
begin
  if p_student_feedback is not null and p_student_feedback not in ('helpful','not_helpful','unsure') then raise exception 'coaching_feedback_invalid'; end if;
  select * into v_task from public.student_coaching_tasks where task_id=p_task_id and student_id=v_student_id for update;
  if not found or v_task.status not in ('user_reported_complete','platform_verified','evaluated') then raise exception 'coaching_task_not_ready_for_evaluation'; end if;
  if v_task.topic_id is not null then
    select * into v_after from public.student_learning_projection_rows
     where student_id=v_student_id and topic_id=v_task.topic_id and scope_type='topic'
       and is_active and consumer_visible order by computed_at desc limit 1;
  end if;
  begin v_before_score := nullif(v_task.before_projection ->> 'performance_score','')::numeric;
  exception when others then v_before_score := null; end;
  v_after_score := v_after.performance_score;
  v_enough := v_before_score is not null and v_after_score is not null
    and v_after.confidence_level in ('medium','high') and v_after.computed_at >= v_task.created_at;
  if v_enough then
    v_change := v_after_score-v_before_score;
    if v_change >= 0.08 then v_assessment := 'useful';
    elsif v_change <= 0.02 and p_student_feedback='not_helpful' then v_assessment := 'ineffective';
    end if;
  end if;
  v_explanation := case v_assessment
    when 'useful' then 'Çalışmanın sonrasında ölçümlerde iyileşme görüldü; bu ilişki tek başına neden-sonuç kanıtı değildir.'
    when 'ineffective' then 'Çalışmanın sonrasında yeterli gelişim görülmedi; bu sonuç yaklaşımın tek başına etkisiz olduğunu kanıtlamaz.'
    else 'Önerinin sonucunu değerlendirmek için henüz yeterli ve karşılaştırılabilir ölçüm yok.' end;
  insert into public.student_coaching_outcomes(
    task_id,student_id,topic_id,before_projection,after_projection,student_feedback,
    assessment,enough_data,performance_change,causal_claim,explanation
  ) values (
    p_task_id,v_student_id,v_task.topic_id,v_task.before_projection,
    case when v_after.row_id is null then null else jsonb_build_object('generation_id',v_after.generation_id,'topic_id',v_after.topic_id,'performance_score',v_after.performance_score,'confidence_level',v_after.confidence_level,'computed_at',v_after.computed_at,'row_checksum',v_after.row_checksum) end,
    p_student_feedback,v_assessment,v_enough,v_change,false,v_explanation
  ) on conflict (task_id) do update set
    after_projection=excluded.after_projection,student_feedback=excluded.student_feedback,
    assessment=excluded.assessment,enough_data=excluded.enough_data,performance_change=excluded.performance_change,
    causal_claim=false,explanation=excluded.explanation,updated_at=pg_catalog.clock_timestamp()
  returning outcome_id into v_outcome_id;
  if v_task.status <> 'evaluated' then
    update public.student_coaching_tasks set status='evaluated',evaluated_at=pg_catalog.clock_timestamp(),updated_at=pg_catalog.clock_timestamp() where task_id=p_task_id;
    update public.student_coaching_recommendations set status='evaluated',updated_at=pg_catalog.clock_timestamp() where recommendation_id=v_task.recommendation_id;
    insert into public.student_coaching_task_events(task_id,student_id,from_status,to_status,actor_type,reason_code,task_version)
    values(p_task_id,v_student_id,v_task.status,'evaluated','system','outcome_refreshed',v_task.task_version);
  end if;
  insert into public.student_coaching_decision_history(student_id,decision_type,status,scope_key,recommendation_ref,plan_id,completed_at,outcome_evidence_record_ids)
  values(v_student_id,'review','completed',case when v_task.topic_id is null then null else 'topic|' || v_task.topic_id end,
    'drkoc-ref:v1:coaching_outcome:' || pg_catalog.replace(v_outcome_id::text,'-',''),v_task.ai_study_task_id,pg_catalog.clock_timestamp(),
    coalesce((select array_agg(evidence_record_id) from public.student_coaching_task_evidence where task_id=p_task_id),'{}'));
  return jsonb_build_object('status','evaluated','outcome_id',v_outcome_id,'assessment',v_assessment,'enough_data',v_enough,'performance_change',v_change,'causal_claim',false,'explanation',v_explanation);
end
$fn$;

create or replace function public.report_coaching_feedback(
  p_recommendation_id uuid,
  p_task_id uuid,
  p_reason_code text
) returns uuid
language plpgsql
security definer
set search_path = ''
as $fn$
declare
  v_student_id uuid := learning_private.coaching_student_id();
  v_id uuid;
begin
  if p_reason_code not in ('recommendation_irrelevant','target_unavailable','evidence_mismatched','result_incorrect','other_without_free_text') then raise exception 'coaching_feedback_invalid'; end if;
  if p_recommendation_id is not null and not exists(select 1 from public.student_coaching_recommendations where recommendation_id=p_recommendation_id and student_id=v_student_id) then raise exception 'coaching_recommendation_not_found'; end if;
  if p_task_id is not null and not exists(select 1 from public.student_coaching_tasks where task_id=p_task_id and student_id=v_student_id) then raise exception 'coaching_task_not_found'; end if;
  if p_recommendation_id is null and p_task_id is null then raise exception 'coaching_feedback_target_required'; end if;
  insert into public.student_coaching_feedback(student_id,recommendation_id,task_id,reason_code)
  values(v_student_id,p_recommendation_id,p_task_id,p_reason_code)
  on conflict (student_id,coalesce(recommendation_id,'00000000-0000-0000-0000-000000000000'::uuid),coalesce(task_id,'00000000-0000-0000-0000-000000000000'::uuid),reason_code) where status='open'
  do update set created_at=public.student_coaching_feedback.created_at
  returning feedback_id into v_id;
  return v_id;
end
$fn$;

alter table public.student_coaching_decision_history drop constraint if exists student_coaching_decision_status_check;
alter table public.student_coaching_decision_history add constraint student_coaching_decision_status_check
  check (status in ('proposed','accepted','declined','in_progress','completed','expired','superseded','postponed','cancelled','evaluated'));

alter table public.student_coaching_recommendations enable row level security;
alter table public.student_coaching_recommendations force row level security;
alter table public.student_coaching_tasks enable row level security;
alter table public.student_coaching_tasks force row level security;
alter table public.student_coaching_task_events enable row level security;
alter table public.student_coaching_task_events force row level security;
alter table public.student_coaching_task_evidence enable row level security;
alter table public.student_coaching_task_evidence force row level security;
alter table public.student_coaching_outcomes enable row level security;
alter table public.student_coaching_outcomes force row level security;
alter table public.student_coaching_feedback enable row level security;
alter table public.student_coaching_feedback force row level security;

drop policy if exists coaching_recommendation_own_read on public.student_coaching_recommendations;
create policy coaching_recommendation_own_read on public.student_coaching_recommendations for select to authenticated using(student_id=(select auth.uid()));
drop policy if exists coaching_task_own_read on public.student_coaching_tasks;
create policy coaching_task_own_read on public.student_coaching_tasks for select to authenticated using(student_id=(select auth.uid()));
drop policy if exists coaching_task_event_own_read on public.student_coaching_task_events;
create policy coaching_task_event_own_read on public.student_coaching_task_events for select to authenticated using(student_id=(select auth.uid()));
drop policy if exists coaching_task_evidence_own_read on public.student_coaching_task_evidence;
create policy coaching_task_evidence_own_read on public.student_coaching_task_evidence for select to authenticated using(student_id=(select auth.uid()));
drop policy if exists coaching_outcome_own_read on public.student_coaching_outcomes;
create policy coaching_outcome_own_read on public.student_coaching_outcomes for select to authenticated using(student_id=(select auth.uid()));
drop policy if exists coaching_feedback_own_read on public.student_coaching_feedback;
create policy coaching_feedback_own_read on public.student_coaching_feedback for select to authenticated using(student_id=(select auth.uid()));

revoke all on table public.student_coaching_recommendations,public.student_coaching_tasks,
  public.student_coaching_task_events,public.student_coaching_task_evidence,
  public.student_coaching_outcomes,public.student_coaching_feedback
from public,anon,authenticated;
grant select on table public.student_coaching_recommendations,public.student_coaching_tasks,
  public.student_coaching_task_events,public.student_coaching_task_evidence,
  public.student_coaching_outcomes,public.student_coaching_feedback
to authenticated;

revoke all on function public.confirm_coaching_recommendation(jsonb,uuid) from public,anon,authenticated;
revoke all on function public.reject_coaching_recommendation(jsonb,uuid,text) from public,anon,authenticated;
revoke all on function public.transition_coaching_task(uuid,text,uuid,text,jsonb) from public,anon,authenticated;
revoke all on function public.refresh_coaching_task_outcome(uuid,text) from public,anon,authenticated;
revoke all on function public.report_coaching_feedback(uuid,uuid,text) from public,anon,authenticated;
grant execute on function public.confirm_coaching_recommendation(jsonb,uuid) to authenticated;
grant execute on function public.reject_coaching_recommendation(jsonb,uuid,text) to authenticated;
grant execute on function public.transition_coaching_task(uuid,text,uuid,text,jsonb) to authenticated;
grant execute on function public.refresh_coaching_task_outcome(uuid,text) to authenticated;
grant execute on function public.report_coaching_feedback(uuid,uuid,text) to authenticated;

comment on table public.student_coaching_recommendations is 'Faz 8: kanıtlı, sürümlü ve açık kararlı koçluk önerileri.';
comment on table public.student_coaching_tasks is 'Faz 8: AI plan maddesine bağlı, sunucu geçişli koçluk görevi yaşam döngüsü.';
comment on table public.student_coaching_task_evidence is 'Faz 8: aynı kanıtı yalnız bir göreve bağlayan çalışma eşlemesi.';
comment on table public.student_coaching_outcomes is 'Faz 8: nedensellik iddiası taşımayan önce/sonra/gecikmeli sonuç değerlendirmesi.';

commit;
