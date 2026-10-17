-- Yönetici denetiminde gerçek veritabanı/RLS provası. Bütün test yazıları geri alınır.
-- Bu dosya gerçek öğrenci arayüzü kullanımı veya imzalı JWT testi diye sunulmaz.
begin isolation level repeatable read;
set local lock_timeout='1s';set local statement_timeout='30s';
create temporary table phase10_pilot_result(result jsonb) on commit drop;
do $pilot$
declare
 students uuid[]; c record; items jsonb; item jsonb; i integer;
 baseline uuid; attempt uuid; task uuid; nonce uuid:=gen_random_uuid();
 rec jsonb; r jsonb; outcome jsonb; blocked boolean:=false;
begin
 select array_agg(id order by id) into students from(select id from public.profiles where role='student' order by id limit 2)s;
 if cardinality(students)<2 then raise exception 'PILOT_TWO_STUDENTS_REQUIRED';end if;
 select p.*,m.education_context_id,m.subject_id,m.topic_id into c
 from public.learning_content_revisions p join public.learning_content_topic_mappings m
 using(source_code,content_kind,content_id,content_revision)
 where p.source_code='bundled_question_test' and p.status='published'
 and m.topic_id='drkoc:curriculum:topic:v1:t0066' and p.item_count>=10 limit 1;
 if not found then raise exception 'PILOT_CONTENT_REQUIRED';end if;
 select jsonb_agg(to_jsonb(s)) into items from(select item_id,option_ids,correct_option_id
 from learning_private.learning_content_items where source_code=c.source_code and content_id=c.content_id
 and content_revision=c.content_revision and item_kind='question' order by position limit 10)s;
 if jsonb_array_length(items)<>10 then raise exception 'PILOT_ITEMS_REQUIRED';end if;
 set local role authenticated;
 perform set_config('request.jwt.claim.sub',students[1]::text,true);
 perform set_config('request.jwt.claim.role','authenticated',true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',students[1],'role','authenticated')::text,true);
 if public.learning_coach_own_rollout('coach_analysis') then raise exception 'PILOT_EXPECTED_CLOSED';end if;
 r:=public.create_academic_daily_log(current_date,'Matematik - Fonksiyonlar',10,1,1,0,null,'manual_external_self_report',gen_random_uuid());
 if r->>'status' not in('created','identity_quarantined') then raise exception 'PILOT_SOURCE_WRITE_FAILED';end if;
 reset role;
 update learning_private.learning_feature_flags set enabled=true,mode='enabled',reason_code='PHASE10_ROLLBACK_ONLY_PILOT'
 where feature_key in('source_events','coach_analysis','coach_writes') and scope_type='global';
 set local role authenticated;
 r:=public.start_bundled_question_attempt(c.content_id,c.content_revision,gen_random_uuid());baseline:=(r->>'attempt_id')::uuid;
 for i in 0..9 loop
  item:=items->i;
  r:=public.save_bundled_question_answer(baseline,item->>'item_id',case when i<3 then item->>'correct_option_id'
   else (select value from jsonb_array_elements_text(item->'option_ids') a(value) where value<>item->>'correct_option_id' limit 1) end,gen_random_uuid());
  if r->>'status'<>'created' then raise exception 'PILOT_BASELINE_FAILED';end if;
 end loop;
 rec:=jsonb_build_object('contract_version','coaching-recommendation@1','recommendation_id',gen_random_uuid(),
  'recommendation_version',1,'education_context_id',c.education_context_id,'subject_id',c.subject_id,'topic_id',c.topic_id,
  'subject_label','Matematik','topic_label','Fonksiyonlar','recommendation_type','practice',
  'reason_summary','Yeni soru sonuçlarıyla güncel çalışmayı kontrol et.','evidence_refs','[]'::jsonb,
  'confidence_level','insufficient','data_limitations','["Bu kontrollü test sonucu üretim kabulü içindir."]'::jsonb,
  'suggested_amount','{"kind":"questions","value":10}'::jsonb,
  'target',jsonb_build_object('status','available','target_type','question_set','target_ref',c.content_id,
   'path','/kutuphane/sorular/tyt/matematik/fonksiyonlar-temel','label','Soruları aç','published',true,
   'accessible',true,'level_appropriate',true,'completed',false,'source_code',c.source_code,
   'content_id',c.content_id,'content_revision',c.content_revision,'topic_id',c.topic_id),
  'success_criteria','{"kind":"minimum_count","minimum_count":10,"evidence_types":["question_answered","question_blank"],"source_codes":["bundled_question_test"],"description":"On yeni soru sonucu."}'::jsonb,
  'decision','pending','status','proposed','valid_until',clock_timestamp()+interval '1 day');
 r:=public.confirm_coaching_recommendation(rec,nonce);task:=(r->>'task_id')::uuid;
 if r->>'status'<>'created' or task is null then raise exception 'PILOT_APPROVAL_FAILED';end if;
 r:=public.confirm_coaching_recommendation(rec,nonce);
 if r->>'status'<>'duplicate' then raise exception 'PILOT_APPROVAL_DUPLICATED';end if;
 r:=public.start_bundled_question_attempt(c.content_id,c.content_revision,gen_random_uuid());attempt:=(r->>'attempt_id')::uuid;
 for i in 0..9 loop
  item:=items->i;
  r:=public.save_bundled_question_answer(attempt,item->>'item_id',case when i<9 then item->>'correct_option_id'
   else (select value from jsonb_array_elements_text(item->'option_ids') a(value) where value<>item->>'correct_option_id' limit 1) end,gen_random_uuid());
  if r->>'status'<>'created' then raise exception 'PILOT_QUESTION_FAILED';end if;
 end loop;
 if not exists(select 1 from public.student_coaching_tasks where task_id=task and status='platform_verified' and accumulated_evidence_count=10)
 then raise exception 'PILOT_TASK_NOT_VERIFIED';end if;
 outcome:=public.refresh_coaching_task_outcome(task,null);
 if outcome->>'assessment'<>'useful' or (outcome->>'performance_change')::numeric<>0.6 or (outcome->>'causal_claim')::boolean
 then raise exception 'PILOT_OUTCOME_FAILED';end if;
 perform set_config('request.jwt.claim.sub',students[2]::text,true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',students[2],'role','authenticated')::text,true);
 if exists(select 1 from public.student_coaching_tasks where task_id=task)
 or exists(select 1 from public.learning_evidence_records where student_id=students[1]) then raise exception 'PILOT_RLS_LEAK';end if;
 r:=public.save_bundled_question_answer(attempt,items->0->>'item_id',items->0->>'correct_option_id',gen_random_uuid());
 if r->>'status' not in('not_found','unauthorized') then raise exception 'PILOT_FOREIGN_WRITE';end if;
 perform set_config('request.jwt.claim.sub',students[1]::text,true);
 perform set_config('request.jwt.claims',jsonb_build_object('sub',students[1],'role','authenticated')::text,true);
 item:=items->0;
 r:=public.save_bundled_question_answer(attempt,item->>'item_id',(select value from jsonb_array_elements_text(item->'option_ids') a(value) where value<>item->>'correct_option_id' limit 1),gen_random_uuid());
 if not exists(select 1 from public.student_coaching_tasks where task_id=task and accumulated_evidence_count=10)
 or exists(select 1 from public.student_coaching_outcomes where task_id=task and enough_data) then raise exception 'PILOT_STALE_OUTCOME';end if;
 r:=public.reset_bundled_question_attempt(attempt,gen_random_uuid());
 if not exists(select 1 from public.student_coaching_tasks where task_id=task and status='planned' and accumulated_evidence_count=0)
 then raise exception 'PILOT_RESET_FAILED';end if;
 reset role;
 update learning_private.learning_feature_flags set enabled=false,mode='disabled' where feature_key='coach_writes' and scope_type='global';
 set local role authenticated;
 begin
  perform public.confirm_coaching_recommendation(rec,gen_random_uuid());
 exception when others then blocked:=sqlerrm='COACHING_WRITES_DISABLED';end;
 if not blocked then raise exception 'PILOT_KILL_FAILED';end if;
 reset role;
 insert into phase10_pilot_result values(jsonb_build_object('status','passed','environment','live_supabase_rollback_transaction',
  'approval_duplicate_safe',true,'source_write_with_coach_closed',true,'question_grading',true,'task_verified',true,
  'before_after_verified',true,'rls_foreign_read_denied',true,'foreign_attempt_denied',true,
  'correction_reconciled',true,'reset_reconciled',true,'stale_outcome_invalidated',true,'database_kill_switch',true,
  'paid_model_calls',0,'private_rows_reported',false,'persistent_test_writes',false));
end $pilot$;
select result from phase10_pilot_result;
rollback;
