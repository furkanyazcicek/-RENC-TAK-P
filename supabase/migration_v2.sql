-- ============================================================
-- SÜRÜM 2 GENİŞLETMELERİ
-- Bu dosyanın tamamını Supabase panelinde "SQL Editor"e yapıştırıp
-- "RUN" ile çalıştırın. Mevcut tablolara (profiles, exams, questions,
-- daily_logs) DOKUNULMUYOR — sadece yeni tablolar ve yeni bir kolon
-- ekleniyor, hiçbir mevcut özellik bozulmaz.
-- ============================================================

-- ------------------------------------------------------------
-- A) SORUNLU SORULAR: öğretmenin yazılı yanıt verebilmesi için
--    `questions` tablosuna tek bir kolon ekliyoruz.
-- ------------------------------------------------------------
alter table questions add column if not exists teacher_reply text;

-- ------------------------------------------------------------
-- B) ÖDEVLER (homeworks)
-- ------------------------------------------------------------
create table if not exists homeworks (
  id uuid default gen_random_uuid() primary key,
  student_id uuid references profiles(id) on delete cascade not null,
  teacher_id uuid references profiles(id) on delete set null,
  title text not null,
  description text,
  due_date date,
  status text not null default 'Yapılıyor' check (status in ('Yapılıyor', 'Tamamlandı')),
  created_at timestamp with time zone default now()
);

alter table homeworks enable row level security;

create policy "Kendi ödevini veya öğretmen tümünü görebilir"
  on homeworks for select
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğretmen ödev atayabilir"
  on homeworks for insert
  with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğrenci durumunu, öğretmen her şeyi güncelleyebilir"
  on homeworks for update
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğretmen ödev silebilir"
  on homeworks for delete
  using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- ------------------------------------------------------------
-- C) LGS / YKS DENEMELERİ (ders bazlı doğru/yanlış/net)
--    İki tablo: bir "deneme oturumu" (mock_exams) ve ona bağlı
--    "ders sonuçları" (mock_exam_subjects). Bu, MEVCUT `exams`
--    tablosundan tamamen ayrı ve bağımsızdır.
-- ------------------------------------------------------------
create table if not exists mock_exams (
  id uuid default gen_random_uuid() primary key,
  student_id uuid references profiles(id) on delete cascade not null,
  exam_type text not null check (exam_type in ('LGS', 'TYT', 'AYT')),
  exam_name text,
  exam_date date not null default current_date,
  created_at timestamp with time zone default now()
);

create table if not exists mock_exam_subjects (
  id uuid default gen_random_uuid() primary key,
  mock_exam_id uuid references mock_exams(id) on delete cascade not null,
  subject text not null,
  correct integer not null default 0,
  incorrect integer not null default 0,
  empty integer not null default 0,
  net numeric generated always as (correct - incorrect * 0.25) stored
);

alter table mock_exams enable row level security;
alter table mock_exam_subjects enable row level security;

create policy "Kendi denemesini veya öğretmen tümünü görebilir"
  on mock_exams for select
  using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

create policy "Öğrenci kendi denemesini ekleyebilir"
  on mock_exams for insert
  with check (auth.uid() = student_id);

create policy "Öğrenci kendi denemesini silebilir"
  on mock_exams for delete
  using (auth.uid() = student_id);

-- mock_exam_subjects, üst tablodaki (mock_exams) yetkiyi miras alır:
-- bir satırı görebilmek/ekleyebilmek için o denemenin sahibi olmak
-- (ya da öğretmen olmak) yeterlidir.
create policy "Deneme sahibinin ders sonuçlarını görme yetkisi"
  on mock_exam_subjects for select
  using (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
      and (
        mock_exams.student_id = auth.uid()
        or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
      )
    )
  );

create policy "Deneme sahibi ders sonucu ekleyebilir"
  on mock_exam_subjects for insert
  with check (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
      and mock_exams.student_id = auth.uid()
    )
  );

create policy "Deneme sahibi ders sonucunu silebilir"
  on mock_exam_subjects for delete
  using (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
      and mock_exams.student_id = auth.uid()
    )
  );

-- ------------------------------------------------------------
-- D) MESAJLAŞMA (messages)
-- ------------------------------------------------------------
create table if not exists messages (
  id uuid default gen_random_uuid() primary key,
  sender_id uuid references profiles(id) on delete cascade not null,
  receiver_id uuid references profiles(id) on delete cascade not null,
  content text not null,
  created_at timestamp with time zone default now(),
  read_at timestamp with time zone
);

alter table messages enable row level security;

create policy "Kendi mesajlarını görebilir"
  on messages for select
  using (auth.uid() = sender_id or auth.uid() = receiver_id);

create policy "Kullanıcı mesaj gönderebilir"
  on messages for insert
  with check (auth.uid() = sender_id);

create policy "Alıcı okundu bilgisini güncelleyebilir"
  on messages for update
  using (auth.uid() = receiver_id);

-- Mesajların anlık (realtime) gelmesi için:
alter publication supabase_realtime add table messages;
