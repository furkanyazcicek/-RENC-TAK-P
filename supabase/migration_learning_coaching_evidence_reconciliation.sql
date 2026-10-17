-- Faz 10: kaynak düzeltme/silme sonrasında görevde eski kanıtı sayma.
-- Kaynak kayıtlarını değiştirmez; yalnız yeni türetilmiş görev durumunu düzeltir.
begin;
-- Görevde "bugün", sunucunun UTC günü değil öğrencinin Türkiye günüdür.
alter function public.confirm_coaching_recommendation(jsonb,uuid) set timezone='Europe/Istanbul';
create or replace function learning_private.match_learning_evidence_to_coaching_task()
returns trigger language plpgsql security definer set search_path='' as $fn$
declare
  v_task public.student_coaching_tasks%rowtype;
  v_count integer;
  v_total integer;
  v_verified integer;
  v_platform boolean;
  v_next text;
  v_reconciled boolean := false;
begin
  if new.record_kind in ('correction','tombstone') then
    select task.* into v_task from public.student_coaching_tasks task
      join public.student_coaching_task_evidence link on link.task_id=task.task_id
     where task.student_id=new.student_id and link.student_id=new.student_id
       and link.evidence_record_id=new.target_record_id for update of task;
    v_reconciled := found;
  elsif new.record_kind='snapshot' then
    select task.* into v_task from public.student_coaching_tasks task
      join public.student_coaching_task_evidence link on link.task_id=task.task_id
      join public.learning_evidence_records previous on previous.record_id=link.evidence_record_id
     where task.student_id=new.student_id and link.student_id=new.student_id
       and previous.student_id=new.student_id and previous.source_code=new.source_code
       and previous.source_record_id=new.source_record_id
       and previous.semantic_event_type=new.semantic_event_type
     order by previous.ingestion_sequence desc limit 1 for update of task;
    v_reconciled := found;
  elsif new.record_kind<>'event' then return new;
  end if;
  if not v_reconciled then
    if new.record_kind='tombstone' then return new; end if;
    select task.* into v_task from public.student_coaching_tasks task
     where task.student_id=new.student_id
       and task.status in ('accepted','planned','started','partial','user_reported_complete')
       and coalesce(new.occurred_at,new.as_of) between task.work_window_start and task.work_window_end
       and (task.topic_id is null or task.topic_id=new.topic_id)
       and (task.objective_id is null or task.objective_id=new.objective_id)
       and (cardinality(task.expected_evidence_types)=0 or new.semantic_event_type=any(task.expected_evidence_types))
       and (cardinality(task.expected_source_codes)=0 or new.source_code=any(task.expected_source_codes))
     order by task.created_at,task.task_id limit 1 for update;
    if not found then return new; end if;
  end if;
  if new.record_kind<>'tombstone'
     and v_task.status not in ('cancelled','rejected','expired')
     and (v_task.topic_id is null or v_task.topic_id=new.topic_id)
     and (v_task.objective_id is null or v_task.objective_id=new.objective_id)
     and (cardinality(v_task.expected_evidence_types)=0 or new.semantic_event_type=any(v_task.expected_evidence_types))
     and (cardinality(v_task.expected_source_codes)=0 or new.source_code=any(v_task.expected_source_codes)) then
    v_count := greatest(1,least(200,coalesce(
      nullif(new.measurement->>'total_count','')::integer,
      nullif(new.measurement->>'marked_count','')::integer,
      nullif(new.measurement->>'completed_count','')::integer,1)));
    v_platform := new.evidence_class in ('direct_measurement','system_observation','teacher_feedback');
    insert into public.student_coaching_task_evidence(
      task_id,student_id,evidence_record_id,evidence_class,semantic_event_type,occurred_at,contribution_count,platform_verified
    ) values(v_task.task_id,new.student_id,new.record_id,new.evidence_class,new.semantic_event_type,
      coalesce(new.occurred_at,new.as_of,pg_catalog.clock_timestamp()),v_count,v_platform)
    on conflict(student_id,evidence_record_id) do nothing;
  end if;
  -- Etkin görünüm, düzeltme ve silme zincirini uygular. Eski bağlantılar
  -- denetim izi olarak korunur ama tamamlanma sayısına girmez.
  select coalesce(sum(link.contribution_count),0)::integer,
         coalesce(sum(case when link.platform_verified then link.contribution_count else 0 end),0)::integer
    into v_total,v_verified from public.student_coaching_task_evidence link
    join public.learning_evidence_effective active on active.record_id=link.evidence_record_id
   where link.task_id=v_task.task_id and link.student_id=new.student_id and active.student_id=new.student_id;
  v_next := case when v_task.status in ('cancelled','rejected','expired') then v_task.status
    when v_verified>=v_task.minimum_evidence_count then 'platform_verified'
    when v_total>0 then 'partial' else 'planned' end;
  update public.student_coaching_tasks set status=v_next,accumulated_evidence_count=v_total,
    progress_ratio=least(1,v_total::numeric/minimum_evidence_count),
    platform_verified_at=case when v_next='platform_verified' then pg_catalog.clock_timestamp() else null end,
    evaluated_at=case when v_reconciled then null else evaluated_at end,
    updated_at=pg_catalog.clock_timestamp()
   where task_id=v_task.task_id and student_id=new.student_id;
  update public.student_coaching_recommendations set status=v_next,updated_at=pg_catalog.clock_timestamp()
   where recommendation_id=v_task.recommendation_id and student_id=new.student_id;
  if v_task.ai_study_task_id is not null and v_task.status not in ('cancelled','rejected','expired') then
    update public.ai_study_tasks set status=case when v_next='platform_verified' then 'tamamlandı' else 'planlandı' end,
      completed_at=case when v_next='platform_verified' then pg_catalog.clock_timestamp() else null end
     where id=v_task.ai_study_task_id and student_id=new.student_id;
  end if;
  if v_reconciled then
    update public.student_coaching_outcomes set assessment='unevaluable',enough_data=false,
      performance_change=null,causal_claim=false,after_projection=null,
      explanation='Kaynak kanıtı değişti; sonuç güncel verilerle yeniden değerlendirilmelidir.',updated_at=pg_catalog.clock_timestamp()
     where task_id=v_task.task_id and student_id=new.student_id;
  end if;
  insert into public.student_coaching_task_events(task_id,student_id,from_status,to_status,actor_type,reason_code,task_version)
  values(v_task.task_id,new.student_id,v_task.status,v_next,'system',
    case when v_reconciled then 'source_evidence_changed' else 'matched_learning_evidence' end,v_task.task_version);
  return new;
end;
$fn$;
revoke all on function learning_private.match_learning_evidence_to_coaching_task() from public,anon,authenticated;
commit;
