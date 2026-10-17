begin read only;
select jsonb_build_object(
 'observed_at',clock_timestamp(),
 'migration_receipts',(select jsonb_agg(jsonb_build_object('name',migration_name,'sha256',sha256,'applied_at',applied_at) order by applied_at) from learning_private.phase10_migration_receipts),
 'logical_chunks',(select count(*) from learning_private.phase10_catalog_receipts where manifest_checksum='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9'),
 'content_revisions',(select count(*) from public.learning_content_revisions where metadata->>'manifest_checksum'='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9'),
 'topic_mappings',(select count(*) from public.learning_content_topic_mappings m join public.learning_content_revisions c using(source_code,content_kind,content_id,content_revision) where c.metadata->>'manifest_checksum'='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9'),
 'private_items',(select count(*) from learning_private.learning_content_items i join public.learning_content_revisions c using(source_code,content_kind,content_id,content_revision) where c.metadata->>'manifest_checksum'='3a4875885df96de0271b97c5157b5caeac8edc70baffc3a704beb6cd771c5dc9'),
 'persistent_pilot_recommendations',(select count(*) from public.student_coaching_recommendations where data_limitations @> '["Bu kontrollü test sonucu üretim kabulü içindir."]'::jsonb),
 'global_flags',(select jsonb_agg(jsonb_build_object('feature',feature_key,'enabled',enabled,'mode',mode) order by feature_key) from learning_private.learning_feature_flags where scope_type='global' and scope_key='*' and feature_key in('coach_analysis','coach_writes','source_events')),
 'private_items_student_can_read',has_table_privilege('authenticated','learning_private.learning_content_items','SELECT'),
 'private_items_anon_can_read',has_table_privilege('anon','learning_private.learning_content_items','SELECT'),
 'own_gate_anon_can_execute',has_function_privilege('anon','public.learning_coach_own_rollout(text)','EXECUTE'),
 'coaching_tables_force_rls',(select bool_and(relrowsecurity and relforcerowsecurity) from pg_catalog.pg_class where relnamespace='public'::regnamespace and relname in('learning_evidence_records','student_coaching_tasks','student_coaching_recommendations','student_coaching_outcomes'))
) result;
commit;
