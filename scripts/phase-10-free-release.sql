-- Güncel ücretsiz Koç sürümü; öğrenci kayıtlarını değiştirmez.
begin;
set local lock_timeout='1s';set local statement_timeout='15s';
do $verify$
begin
 if (select count(*) from learning_private.phase10_migration_receipts)<>11
 or (select count(*) from learning_private.phase10_catalog_receipts where manifest_checksum='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9')<>73
 then raise exception 'FREE_COACH_RELEASE_RECEIPTS_INCOMPLETE';end if;
 if (select count(*) from public.learning_content_revisions where metadata->>'manifest_checksum'='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9')<>4414
 or (select count(*) from learning_private.learning_content_items i join public.learning_content_revisions c using(source_code,content_kind,content_id,content_revision)
 where c.metadata->>'manifest_checksum'='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9')<>49474
 then raise exception 'FREE_COACH_RELEASE_CATALOG_INCOMPLETE';end if;
 if has_table_privilege('anon','learning_private.learning_content_items','SELECT')
 or has_table_privilege('authenticated','learning_private.learning_content_items','SELECT')
 or has_table_privilege('authenticated','public.student_coaching_tasks','INSERT')
 or has_function_privilege('anon','public.learning_coach_own_rollout(text)','EXECUTE')
 then raise exception 'FREE_COACH_RELEASE_PERMISSION_UNSAFE';end if;
 if not(select bool_and(relrowsecurity and relforcerowsecurity) from pg_catalog.pg_class
 where relnamespace='public'::regnamespace and relname in('learning_evidence_records','student_coaching_tasks','student_coaching_recommendations','student_coaching_outcomes'))
 then raise exception 'FREE_COACH_RELEASE_RLS_UNSAFE';end if;
end $verify$;
update learning_private.learning_feature_flags set enabled=true,mode='enabled',reason_code='PHASE10_FREE_RELEASE_VERIFIED',updated_at=clock_timestamp()
where feature_key in('coach_analysis','coach_writes') and scope_type='global' and scope_key='*';
notify pgrst,'reload schema';
commit;
select jsonb_build_object('status','opened','method','free-evidence-coach@1','manifest_checksum','3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9',
 'migrations',11,'catalog_chunks',73,'content_revisions',4414,'private_items',49474,'paid_model_calls',0,
 'source_records_changed',false,'analysis_enabled',true,'writes_require_student_approval',true,'opened_at',clock_timestamp()) result;
