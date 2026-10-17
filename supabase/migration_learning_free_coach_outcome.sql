-- Faz 10: ücretli model/işçi gerektirmeden doğrulanmış soru ölçümlerini karşılaştır.
begin;
create or replace function learning_private.free_coach_question_snapshot(
  p_student uuid,p_topic text,p_start timestamptz,p_end timestamptz,p_sources text[]
) returns jsonb language sql stable security definer set search_path='' as $fn$
  with measured as (
    select e.record_id,e.source_code,
      case when e.measurement->>'student_correct'='true' then 1 else 0 end correct,
      case when e.measurement->>'student_correct' in ('true','false') then 1 else 0 end marked
    from public.learning_evidence_effective e
    where e.student_id=p_student and e.topic_id=p_topic and e.evidence_class='direct_measurement'
      and e.semantic_event_type in ('question_answered','mini_quiz_answered','question_blank')
      and e.occurred_at > p_start and e.occurred_at <= p_end
      and (cardinality(p_sources)=0 or e.source_code=any(p_sources))
  )
  select jsonb_build_object('model_version','free-coach-outcome@1','topic_id',p_topic,
    'correct_count',coalesce(sum(correct),0),'marked_count',coalesce(sum(marked),0),
    'performance_score',sum(correct)::numeric/nullif(sum(marked),0),
    'source_codes',coalesce(jsonb_agg(distinct source_code order by source_code),'[]'::jsonb),
    'computed_at',pg_catalog.clock_timestamp(),'window_start',p_start,'window_end',p_end)
  from measured;
$fn$;
revoke all on function learning_private.free_coach_question_snapshot(uuid,text,timestamptz,timestamptz,text[]) from public,anon,authenticated;
create or replace function learning_private.capture_free_coach_baseline()
returns trigger language plpgsql security definer set search_path='' as $fn$
begin
  if new.before_projection is null and new.topic_id is not null then
    new.before_projection := learning_private.free_coach_question_snapshot(
      new.student_id,new.topic_id,new.created_at-interval '30 days',new.created_at,new.expected_source_codes);
  end if;
  return new;
end;
$fn$;
revoke all on function learning_private.capture_free_coach_baseline() from public,anon,authenticated;
drop trigger if exists coaching_free_baseline on public.student_coaching_tasks;
create trigger coaching_free_baseline before insert on public.student_coaching_tasks
for each row execute function learning_private.capture_free_coach_baseline();
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
  v_before_json jsonb;
  v_after_json jsonb;
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
  if v_task.before_projection ->> 'model_version' = 'free-coach-outcome@1' then
    -- Kaynak düzeltmesi eski başlangıç ölçümünü de değiştirebilir.
    v_before_json := learning_private.free_coach_question_snapshot(
      v_student_id,v_task.topic_id,v_task.created_at-interval '30 days',v_task.created_at,
      v_task.expected_source_codes
    );
    v_after_json := learning_private.free_coach_question_snapshot(
      v_student_id,v_task.topic_id,v_task.created_at,v_task.work_window_end,
      v_task.expected_source_codes
    );
    v_before_score := nullif(v_before_json ->> 'performance_score','')::numeric;
    v_after_score := nullif(v_after_json ->> 'performance_score','')::numeric;
    v_enough := (v_before_json ->> 'marked_count')::integer >= 10
      and (v_after_json ->> 'marked_count')::integer >= 10
      and v_before_json -> 'source_codes' = v_after_json -> 'source_codes'
      and v_before_score is not null and v_after_score is not null;
  else
    v_before_json := v_task.before_projection;
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
    v_after_json := case when v_after.row_id is null then null else jsonb_build_object(
      'generation_id',v_after.generation_id,'topic_id',v_after.topic_id,
      'performance_score',v_after.performance_score,'confidence_level',v_after.confidence_level,
      'computed_at',v_after.computed_at,'row_checksum',v_after.row_checksum) end;
  end if;
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
    p_task_id,v_student_id,v_task.topic_id,v_before_json,v_after_json,
    p_student_feedback,v_assessment,v_enough,v_change,false,v_explanation
  ) on conflict (task_id) do update set
    before_projection=excluded.before_projection,after_projection=excluded.after_projection,student_feedback=excluded.student_feedback,
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

commit;
