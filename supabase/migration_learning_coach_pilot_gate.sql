-- Faz 10: Öğrencinin yalnız kendi Koç açılış kararını okuyabildiği dar kapı.
-- Faz 2–9 migrationları değişmez; bu dosya onların ardından uygulanır.
begin;

do $fn$
begin
  if pg_catalog.to_regprocedure(
    'learning_private.resolve_learning_rollout(text,uuid,text,text)'
  ) is null then
    raise exception using errcode = 'P0001', message = 'LEARNING_PHASE9_ROLLOUT_REQUIRED';
  end if;
end;
$fn$;

create or replace function public.learning_coach_own_rollout(p_feature_key text)
returns boolean
language sql
stable
security definer
set search_path = ''
as $fn$
  select coalesce(
    auth.uid() is not null
    and p_feature_key in ('coach_analysis', 'coach_writes')
    and learning_private.resolve_learning_rollout(
      p_feature_key, auth.uid(), null, null
    ) @> '{"enabled": true, "mode": "enabled", "scope_type": "student"}'::jsonb,
    false
  );
$fn$;

revoke all on function public.learning_coach_own_rollout(text)
  from public, anon, authenticated;
grant execute on function public.learning_coach_own_rollout(text)
  to authenticated;

comment on function public.learning_coach_own_rollout(text) is
  'Yalnız oturumdaki öğrencinin Faz 10 koç bayrağını döndürür; başka öğrenci kimliği parametresi yoktur.';

commit;
