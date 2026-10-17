-- Faz 10 ücretsiz motor: global açılış ve gerçek veritabanı yazma durdurucusu.
begin;
create or replace function public.learning_coach_own_rollout(p_feature_key text)
returns boolean language sql stable security definer set search_path='' as $fn$
 select coalesce(auth.uid() is not null and p_feature_key in ('coach_analysis','coach_writes')
 and exists(select 1 from public.profiles p where p.id=auth.uid() and p.role='student')
 and learning_private.resolve_learning_rollout(p_feature_key,auth.uid(),null,null)
   @> '{"enabled":true,"mode":"enabled"}'::jsonb,false);
$fn$;
revoke all on function public.learning_coach_own_rollout(text) from public,anon,authenticated;
grant execute on function public.learning_coach_own_rollout(text) to authenticated;

create or replace function learning_private.coaching_student_id()
returns uuid language plpgsql stable security definer set search_path='' as $fn$
declare v_student uuid := auth.uid();
begin
 if v_student is null or not exists(select 1 from public.profiles p where p.id=v_student and p.role='student')
 then raise exception 'student_identity_required';end if;
 if not public.learning_coach_own_rollout('coach_analysis')
 or not public.learning_coach_own_rollout('coach_writes')
 then raise exception 'COACHING_WRITES_DISABLED';end if;
 return v_student;
end;
$fn$;
revoke all on function learning_private.coaching_student_id() from public,anon,authenticated;
commit;
