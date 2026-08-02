-- ============================================================
-- ÖĞRENCİ TAKİP UYGULAMASI - SUPABASE VERİTABANI ŞEMASI
-- Bu dosyanın tamamını Supabase panelinde "SQL Editor" bölümüne
-- yapıştırıp "RUN" butonuna basmanız yeterli.
-- ============================================================

-- 1) PROFİLLER TABLOSU
-- Her kullanıcının adı ve rolünü (öğretmen/öğrenci) tutar.
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  role text not null check (role in ('teacher', 'student')),
  created_at timestamp with time zone default now()
);

alter table profiles enable row level security;

create policy "Herkes tüm profilleri görebilir"
  on profiles for select
  using (true);

create policy "Kullanıcı kendi profilini oluşturabilir"
  on profiles for insert
  with check (auth.uid() = id);

create policy "Kullanıcı kendi profilini güncelleyebilir"
  on profiles for update
  using (auth.uid() = id);

-- 2) DENEME SINAVLARI TABLOSU
-- Her satır, bir öğrencinin bir konudaki bir deneme sonucunu temsil eder.
create table if not exists exams (
  id uuid default gen_random_uuid() primary key,
  student_id uuid references profiles(id) on delete cascade not null,
  exam_name text,
  topic text not null,
  score numeric not null check (score >= 0 and score <= 100),
  created_at timestamp with time zone default now()
);

alter table exams enable row level security;

create policy "Öğrenci kendi sonuçlarını görebilir"
  on exams for select
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğretmen sonuç ekleyebilir"
  on exams for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğretmen sonuç güncelleyebilir"
  on exams for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- 3) SORULAR TABLOSU
-- Öğrencilerin öğretmenlerine gönderdiği çözülemeyen sorular.
create table if not exists questions (
  id uuid default gen_random_uuid() primary key,
  student_id uuid references profiles(id) on delete cascade not null,
  content text,
  image_url text,
  status text not null default 'İnceleniyor' check (status in ('İnceleniyor', 'Derste Çözülecek', 'Çözüldü')),
  created_at timestamp with time zone default now()
);

alter table questions enable row level security;

create policy "Öğrenci kendi sorularını görebilir"
  on questions for select
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğrenci soru gönderebilir"
  on questions for insert
  with check (auth.uid() = student_id);

create policy "Öğretmen soru durumunu güncelleyebilir"
  on questions for update
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- 4) FOTOĞRAF DEPOLAMA ALANI (STORAGE BUCKET)
-- Öğrencilerin soru fotoğraflarını yükleyebilmesi için.
insert into storage.buckets (id, name, public)
values ('question-images', 'question-images', true)
on conflict (id) do nothing;

create policy "Herkes soru fotoğraflarını görebilir"
  on storage.objects for select
  using (bucket_id = 'question-images');

create policy "Giriş yapan kullanıcılar fotoğraf yükleyebilir"
  on storage.objects for insert
  with check (bucket_id = 'question-images' and auth.role() = 'authenticated');

-- ============================================================
-- (İSTEĞE BAĞLI) TEST İÇİN ÖRNEK VERİ EKLEMEK İSTERSENİZ:
-- Önce uygulamadan gerçek bir öğrenci hesabı oluşturun, sonra
-- o hesabın id'sini aşağıdaki satırlarda 'BURAYA-OGRENCI-ID' yerine yapıştırıp çalıştırın.
--
-- insert into exams (student_id, exam_name, topic, score) values
--   ('BURAYA-OGRENCI-ID', 'Ağustos Denemesi 1', 'Trigonometri', 62),
--   ('BURAYA-OGRENCI-ID', 'Ağustos Denemesi 1', 'Polinomlar', 78),
--   ('BURAYA-OGRENCI-ID', 'Ağustos Denemesi 1', 'Geometri', 45),
--   ('BURAYA-OGRENCI-ID', 'Ağustos Denemesi 2', 'Trigonometri', 71);
-- ============================================================
