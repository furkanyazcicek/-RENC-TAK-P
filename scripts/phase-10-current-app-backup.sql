-- Salt okunur uygulama yedeği; kalıcı veya geçici tablo oluşturmaz.
begin isolation level repeatable read read only;
set local statement_timeout='30s';
with snapshot as materialized (select convert_to(jsonb_build_object(
 'version','phase-10-current-app-backup@1','captured_at',clock_timestamp(),
 'tables',(select jsonb_agg(jsonb_build_object(
  'name',c.relname,'rls',c.relrowsecurity,'force_rls',c.relforcerowsecurity,'rows',d.rows,
  'columns',(select coalesce(jsonb_agg(jsonb_build_object('name',a.attname,'type',pg_catalog.format_type(a.atttypid,a.atttypmod),'not_null',a.attnotnull,'default',pg_catalog.pg_get_expr(x.adbin,x.adrelid),'identity',a.attidentity,'generated',a.attgenerated) order by a.attnum),'[]'::jsonb)
    from pg_catalog.pg_attribute a left join pg_catalog.pg_attrdef x on x.adrelid=a.attrelid and x.adnum=a.attnum where a.attrelid=c.oid and a.attnum>0 and not a.attisdropped),
  'constraints',(select coalesce(jsonb_agg(jsonb_build_object('name',k.conname,'type',k.contype,'definition',pg_catalog.pg_get_constraintdef(k.oid,true)) order by k.conname),'[]'::jsonb) from pg_catalog.pg_constraint k where k.conrelid=c.oid)
 ) order by c.relname) from pg_catalog.pg_class c join pg_catalog.pg_namespace n on n.oid=c.relnamespace join (select 'ai_conversations'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_conversations" r
union all
select 'ai_messages'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_messages" r
union all
select 'ai_solution_events'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_solution_events" r
union all
select 'ai_solution_sessions'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_solution_sessions" r
union all
select 'ai_student_memory'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_student_memory" r
union all
select 'ai_study_tasks'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_study_tasks" r
union all
select 'ai_usage_events'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."ai_usage_events" r
union all
select 'daily_logs'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."daily_logs" r
union all
select 'exams'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."exams" r
union all
select 'homeworks'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."homeworks" r
union all
select 'lesson_board_pages'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_board_pages" r
union all
select 'lesson_materials'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_materials" r
union all
select 'lesson_participants'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_participants" r
union all
select 'lesson_private_notes'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_private_notes" r
union all
select 'lesson_sessions'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_sessions" r
union all
select 'lesson_summaries'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."lesson_summaries" r
union all
select 'library_notes'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."library_notes" r
union all
select 'library_subjects'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."library_subjects" r
union all
select 'library_topics'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."library_topics" r
union all
select 'messages'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."messages" r
union all
select 'mock_exam_subjects'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."mock_exam_subjects" r
union all
select 'mock_exams'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."mock_exams" r
union all
select 'parent_link_attempts'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."parent_link_attempts" r
union all
select 'parent_link_codes'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."parent_link_codes" r
union all
select 'parent_links'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."parent_links" r
union all
select 'profiles'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."profiles" r
union all
select 'push_subscriptions'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."push_subscriptions" r
union all
select 'questions'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."questions" r
union all
select 'teacher_invite_attempts'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."teacher_invite_attempts" r
union all
select 'teacher_invites'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."teacher_invites" r
union all
select 'teacher_students'::text as name,coalesce(jsonb_agg(to_jsonb(r)),'[]'::jsonb) as rows from public."teacher_students" r) d on d.name=c.relname where n.nspname='public' and c.relkind='r'),
 'functions',(select coalesce(jsonb_agg(pg_catalog.pg_get_functiondef(p.oid)),'[]'::jsonb) from pg_catalog.pg_proc p join pg_catalog.pg_namespace n on n.oid=p.pronamespace where n.nspname='public' and p.prokind='f' and not exists(select 1 from pg_catalog.pg_depend d where d.objid=p.oid and d.deptype='e')),
 'enums',(select coalesce(jsonb_agg(jsonb_build_object('name',t.typname,'labels',t.labels)),'[]'::jsonb) from (select y.typname,jsonb_agg(e.enumlabel order by e.enumsortorder) labels from pg_catalog.pg_type y join pg_catalog.pg_namespace n on n.oid=y.typnamespace join pg_catalog.pg_enum e on e.enumtypid=y.oid where n.nspname='public' group by y.typname) t),
 'policies',(select coalesce(jsonb_agg(to_jsonb(p)),'[]'::jsonb) from pg_catalog.pg_policies p where p.schemaname='public'),
 'indexes',(select coalesce(jsonb_agg(indexdef),'[]'::jsonb) from pg_catalog.pg_indexes where schemaname='public'),
 'triggers',(select coalesce(jsonb_agg(pg_catalog.pg_get_triggerdef(t.oid)),'[]'::jsonb) from pg_catalog.pg_trigger t join pg_catalog.pg_class c on c.oid=t.tgrelid join pg_catalog.pg_namespace n on n.oid=c.relnamespace where n.nspname='public' and not t.tgisinternal)
)::text,'UTF8') as payload),
stats as materialized (select payload,octet_length(payload) as archive_bytes,md5(payload) as archive_md5 from snapshot)
select chunk_number,archive_bytes,archive_md5,
 encode(substring(payload from chunk_number*4500+1 for 4500),'base64') as private_payload_chunk
from stats cross join lateral generate_series(0,(archive_bytes-1)/4500) as chunk_number
order by chunk_number;
commit;
