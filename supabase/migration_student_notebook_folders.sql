-- Defter klasörleri ve bulut ekleri, 13 Eylül 2026.
-- Ön koşul: migration_student_notebooks.sql (önce o, sonra bu dosya).
--
-- Mevcut öğrenci tablolarını ve verilerini DEĞİŞTİRMEZ. Yalnız şunları ekler:
--   1) student_notebook_folders tablosu (yalnız sahibine okunur)
--   2) save_student_notebook_folders işlevi (son yazan kazanır, sahip kontrollü)
--   3) "defter-ekleri" özel dosya kovası ve iki kural (yalnız kendi klasörü)
--
-- Tekrar çalıştırılabilir. Geri dönüş: Vercel'de VITE_NOTEBOOK_CLOUD_ENABLED=false;
-- kayıtlar korunur. Veri oluştuktan sonra tabloyu kaldıran otomatik geri dönüş YOKTUR.
begin;

create table if not exists public.student_notebook_folders (
  owner_id uuid not null references auth.users(id),
  id uuid not null,
  name text not null check (char_length(btrim(name)) between 1 and 60),
  color text not null check (color in ('kirmizi','turuncu','yesil','camgobegi','mavi','mor','pembe','gri')),
  parent_id uuid,
  sort_order double precision not null default 0,
  deleted boolean not null default false,
  client_updated_at timestamptz not null,
  updated_at timestamptz not null default now(),
  primary key (owner_id, id),
  constraint student_notebook_folder_parent check (parent_id is null or parent_id <> id)
);
alter table public.student_notebook_folders enable row level security;
revoke all on public.student_notebook_folders from public, anon, authenticated;
grant select on public.student_notebook_folders to authenticated;
drop policy if exists "Klasör yalnız sahibine açık" on public.student_notebook_folders;
create policy "Klasör yalnız sahibine açık" on public.student_notebook_folders
  for select to authenticated using (owner_id = (select auth.uid()));

-- İstemciye doğrudan yazma izni verilmez; sahiplik ve sıralama işlevde denetlenir.
create or replace function public.save_student_notebook_folders(p_folders jsonb)
returns integer
language plpgsql security definer set search_path = '' as $fn$
declare
  v_user uuid := auth.uid();
  v_item jsonb;
  v_count integer := 0;
  v_rows integer;
  v_total integer;
  v_uuid constant text := '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$';
begin
  if v_user is null then raise exception 'Oturum gerekli.' using errcode = '42501'; end if;
  if p_folders is null or jsonb_typeof(p_folders) <> 'array' or jsonb_array_length(p_folders) > 200 then
    raise exception 'Geçersiz klasör isteği.' using errcode = '22023';
  end if;
  for v_item in select value from jsonb_array_elements(p_folders) loop
    if jsonb_typeof(v_item) is distinct from 'object'
      or coalesce(v_item->>'id', '') !~* v_uuid
      or jsonb_typeof(v_item->'name') is distinct from 'string'
      or char_length(btrim(v_item->>'name')) not between 1 and 60
      or coalesce(v_item->>'color', '') not in ('kirmizi','turuncu','yesil','camgobegi','mavi','mor','pembe','gri')
      or coalesce(jsonb_typeof(v_item->'parent_id'), 'null') not in ('null', 'string')
      or (jsonb_typeof(v_item->'parent_id') = 'string' and (v_item->>'parent_id') !~* v_uuid)
      or (v_item->>'parent_id') = (v_item->>'id')
      or jsonb_typeof(v_item->'sort_order') is distinct from 'number'
      or jsonb_typeof(v_item->'deleted') is distinct from 'boolean'
      or jsonb_typeof(v_item->'client_updated_at') is distinct from 'string' then
      raise exception 'Klasör biçimi geçersiz.' using errcode = '22023';
    end if;
    insert into public.student_notebook_folders as f
      (owner_id, id, name, color, parent_id, sort_order, deleted, client_updated_at)
    values (
      v_user, (v_item->>'id')::uuid, btrim(v_item->>'name'), v_item->>'color',
      (v_item->>'parent_id')::uuid, (v_item->>'sort_order')::double precision,
      (v_item->>'deleted')::boolean,
      -- Saati ileri kurulmuş bir cihaz klasörü sonsuza dek "kilitleyemesin".
      least((v_item->>'client_updated_at')::timestamptz, now() + interval '1 day')
    )
    on conflict (owner_id, id) do update set
      name = excluded.name, color = excluded.color, parent_id = excluded.parent_id,
      sort_order = excluded.sort_order, deleted = excluded.deleted,
      client_updated_at = excluded.client_updated_at, updated_at = now()
    where f.client_updated_at < excluded.client_updated_at;
    get diagnostics v_rows = row_count;
    v_count := v_count + v_rows;
  end loop;
  select count(*) into v_total from public.student_notebook_folders where owner_id = v_user;
  if v_total > 300 then raise exception 'Klasör sınırına ulaşıldı.' using errcode = '22023'; end if;
  return v_count;
end;
$fn$;
revoke all on function public.save_student_notebook_folders(jsonb) from public, anon;
grant execute on function public.save_student_notebook_folders(jsonb) to authenticated;

-- Defter ekleri (PDF sayfası, fotoğraf, ses). Yol: {sahip}/{ek}-{sürüm}.{uzantı}
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('defter-ekleri', 'defter-ekleri', false, 26214400,
  array['image/jpeg','image/png','image/webp','audio/webm','audio/mp4','audio/x-m4a','audio/ogg','audio/mpeg','audio/wav'])
on conflict (id) do nothing;

drop policy if exists "Defter eki yalnız sahibine görünür" on storage.objects;
create policy "Defter eki yalnız sahibine görünür" on storage.objects
  for select to authenticated using (
    bucket_id = 'defter-ekleri'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

-- Güncelleme ve silme kuralı bilinçli olarak yok: yollar sürümlü, dosya ezilmez.
drop policy if exists "Defter eki yalnız sahibinin klasörüne yüklenir" on storage.objects;
create policy "Defter eki yalnız sahibinin klasörüne yüklenir" on storage.objects
  for insert to authenticated with check (
    bucket_id = 'defter-ekleri'
    and (storage.foldername(name))[1] = (select auth.uid())::text
  );

commit;
