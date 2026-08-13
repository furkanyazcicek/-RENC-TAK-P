-- ============================================================
-- DERS NOTLARI KÜTÜPHANESİ MODÜLÜ
-- Bu dosyanın tamamını Supabase SQL Editor'e yapıştırıp çalıştırın.
-- Mevcut hiçbir tabloya dokunulmaz — 3 yeni tablo + 1 yeni Storage
-- bucket oluşturulur.
--
-- Hiyerarşi: Sınav Türü (library_subjects.exam_type)
--            -> Ders (library_subjects)
--            -> Konu (library_topics)
--            -> İçerik / Not (library_notes)
-- ============================================================

-- 1) DERSLER (her biri bir sınav türüne bağlı: LGS / TYT / AYT / KPSS)
create table if not exists library_subjects (
  id uuid default gen_random_uuid() primary key,
  exam_type text not null check (exam_type in ('LGS', 'TYT', 'AYT', 'KPSS')),
  name text not null,
  order_index int not null default 0,
  created_at timestamp with time zone default now()
);

-- 2) KONULAR (her biri bir derse bağlı)
create table if not exists library_topics (
  id uuid default gen_random_uuid() primary key,
  subject_id uuid references library_subjects(id) on delete cascade not null,
  name text not null,
  order_index int not null default 0,
  created_at timestamp with time zone default now()
);

-- 3) DERS NOTLARI (her biri bir konuya bağlı; yazılı metin ve/veya dosya içerir)
create table if not exists library_notes (
  id uuid default gen_random_uuid() primary key,
  topic_id uuid references library_topics(id) on delete cascade not null,
  teacher_id uuid references profiles(id) on delete set null,
  title text not null,
  content text,
  file_url text,
  file_type text check (file_type in ('pdf', 'image')),
  created_at timestamp with time zone default now()
);

alter table library_subjects enable row level security;
alter table library_topics enable row level security;
alter table library_notes enable row level security;

-- Herkes (giriş yapmış her kullanıcı) hiyerarşiyi ve notları görebilir.
create policy "Giriş yapan herkes dersleri görebilir"
  on library_subjects for select
  using (auth.uid() is not null);

create policy "Giriş yapan herkes konuları görebilir"
  on library_topics for select
  using (auth.uid() is not null);

create policy "Giriş yapan herkes notları görebilir"
  on library_notes for select
  using (auth.uid() is not null);

-- Sadece öğretmen; ders/konu ekleyip düzenleyebilir, not yükleyebilir.
create policy "Öğretmen ders ekleyebilir/düzenleyebilir/silebilir"
  on library_subjects for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

create policy "Öğretmen konu ekleyebilir/düzenleyebilir/silebilir"
  on library_topics for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

create policy "Öğretmen not ekleyebilir/düzenleyebilir/silebilir"
  on library_notes for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

-- 4) DOSYA DEPOLAMA (Storage) — ders notu PDF/görsellerinin yükleneceği yeni bucket.
insert into storage.buckets (id, name, public)
values ('library-files', 'library-files', true)
on conflict (id) do nothing;

create policy "Herkes kütüphane dosyalarını görebilir"
  on storage.objects for select
  using (bucket_id = 'library-files');

create policy "Sadece öğretmen kütüphaneye dosya yükleyebilir"
  on storage.objects for insert
  with check (
    bucket_id = 'library-files'
    and exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Sadece öğretmen kütüphane dosyasını silebilir"
  on storage.objects for delete
  using (
    bucket_id = 'library-files'
    and exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );
