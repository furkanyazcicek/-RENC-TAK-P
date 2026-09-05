-- Kişisel defter, 5 Eylül 2026. Yalnız yerelde doğrulandı; canlıya uygulanmadı.
-- Mevcut öğrenci tablolarını/verilerini değiştirmez.
-- Geri dönüş: VITE_NOTEBOOK_CLOUD_ENABLED kapatılır, kayıtlar korunur.
-- Veri oluştuktan sonra tabloyu kaldıran otomatik bir geri dönüş YOKTUR.
begin;

create table if not exists public.student_notebooks (
  owner_id uuid not null references auth.users(id),
  id uuid not null,
  document jsonb not null,
  revision integer not null default 1 check (revision > 0),
  last_request_id uuid not null,
  updated_at timestamptz not null default now(),
  primary key (owner_id, id),
  constraint student_notebook_size check (octet_length(document::text) <= 4194304)
);
alter table public.student_notebooks enable row level security;
revoke all on public.student_notebooks from public, anon, authenticated;
grant select on public.student_notebooks to authenticated;
drop policy if exists "Defter yalnız sahibine açık" on public.student_notebooks;
create policy "Defter yalnız sahibine açık" on public.student_notebooks
  for select to authenticated using (owner_id = (select auth.uid()));

-- İstemciye doğrudan UPDATE izni verilmez: revizyon kontrolü atlanamaz.
create or replace function public.save_student_notebook(
  p_id uuid, p_document jsonb, p_expected_revision integer, p_request_id uuid
) returns jsonb
language plpgsql security definer set search_path = '' as $fn$
declare
  v_user uuid := auth.uid();
  v_row public.student_notebooks%rowtype;
begin
  if v_user is null then raise exception 'Oturum gerekli.' using errcode = '42501'; end if;
  if p_id is null or p_request_id is null or p_expected_revision is null or p_expected_revision < 0 then
    raise exception 'Geçersiz kayıt isteği.' using errcode = '22023';
  end if;
  if p_document is null or jsonb_typeof(p_document) <> 'object' or
    (p_document->>'format') is distinct from 'drkoc-defter' or
    (p_document->>'version') is distinct from '1' or
    (p_document->>'id') is distinct from p_id::text or
    jsonb_typeof(p_document->'title') is distinct from 'string' or char_length(p_document->>'title') > 120 or
    jsonb_typeof(p_document->'subject') is distinct from 'string' or char_length(p_document->>'subject') > 80 or
    jsonb_typeof(p_document->'archived') is distinct from 'boolean' or
    jsonb_typeof(p_document->'pages') is distinct from 'array' or octet_length(p_document::text) > 4194304 then
    raise exception 'Defter biçimi geçersiz veya boyutu fazla.' using errcode = '22023';
  end if;
  if jsonb_array_length(p_document->'pages') < 1 or jsonb_array_length(p_document->'pages') > 100 then
    raise exception 'Sayfa sayısı geçersiz.' using errcode = '22023';
  end if;
  if p_expected_revision = 0 then
    insert into public.student_notebooks(owner_id,id,document,last_request_id)
    values(v_user,p_id,p_document,p_request_id) on conflict (owner_id,id) do nothing;
  end if;
  select * into v_row from public.student_notebooks where owner_id=v_user and id=p_id for update;
  if not found then return jsonb_build_object('conflict',true,'revision',0); end if;
  if v_row.last_request_id = p_request_id then
    return jsonb_build_object('conflict',false,'revision',v_row.revision);
  end if;
  if v_row.revision <> p_expected_revision then
    return jsonb_build_object('conflict',true,'revision',v_row.revision);
  end if;
  update public.student_notebooks set document=p_document,revision=revision+1,last_request_id=p_request_id,updated_at=now()
    where owner_id=v_user and id=p_id returning * into v_row;
  return jsonb_build_object('conflict',false,'revision',v_row.revision);
end;
$fn$;
revoke all on function public.save_student_notebook(uuid,jsonb,integer,uuid) from public, anon;
grant execute on function public.save_student_notebook(uuid,jsonb,integer,uuid) to authenticated;
commit;
