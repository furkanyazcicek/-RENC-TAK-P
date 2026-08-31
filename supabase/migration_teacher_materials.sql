-- ============================================================
-- ÖĞRETMEN MATERYAL KİTAPLIĞI
-- ============================================================
-- Çalıştırma: Supabase > SQL Editor > yapıştır > Run
--
-- NEDEN GEREKLİ
-- Canlı derse eklenen materyaller `lesson_materials` tablosunda ve O DERSE
-- BAĞLIDIR. Öğretmen aynı PDF'i her hafta yeniden yüklemek zorunda
-- kalıyordu. Bu tablo, öğretmenin KENDİ kalıcı kitaplığıdır: bir kez
-- yüklenir, istenen derste tek dokunuşla açılır.
--
-- Bu dosya güvenle birden fazla kez çalıştırılabilir.
-- ============================================================

begin;

create table if not exists teacher_materials (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references profiles(id) on delete cascade,
  kind text not null default 'pdf'
    check (kind in ('pdf', 'image', 'link', 'note')),
  title text not null,
  url text,
  subject text,
  topic text,
  -- Sayfa sayısı, boyut gibi bilgiler; şema değişikliği gerektirmesin diye
  -- serbest alan.
  meta jsonb not null default '{}'::jsonb,
  -- Öğretmenin sık kullandıkları listenin başına gelsin.
  pinned boolean not null default false,
  last_used_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists teacher_materials_owner_idx
  on teacher_materials (teacher_id, pinned desc, last_used_at desc nulls last, created_at desc);

comment on table teacher_materials is
  'Öğretmenin kalıcı materyal kitaplığı (PDF ders notları, görseller). Yalnızca sahibi görür ve yönetir.';

alter table teacher_materials enable row level security;

-- Kitaplık TAMAMEN özeldir: başka öğretmen, öğrenci veya veli göremez.
-- Öğrenci bir materyali ancak öğretmen onu DERSE eklediğinde görür
-- (lesson_materials, kendi politikalarıyla).
drop policy if exists "Kitaplık yalnız sahibinindir" on teacher_materials;
create policy "Kitaplık yalnız sahibinindir"
  on teacher_materials for all
  using (auth.uid() = teacher_id)
  with check (auth.uid() = teacher_id);

commit;

-- ============================================================
-- DOĞRULAMA
-- ============================================================
-- select count(*) from teacher_materials;
-- select policyname from pg_policies
--  where schemaname='public' and tablename='teacher_materials';
