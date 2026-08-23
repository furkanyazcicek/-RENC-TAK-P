-- ============================================================
-- YENİ PROJE KURULUMU — TEK DOSYADA TAM ŞEMA
-- ============================================================
-- Bu dosyanın tamamını yeni Supabase projesinin SQL Editor'üne
-- yapıştırıp bir kez "RUN" edin. Uygulamanın ihtiyaç duyduğu HER ŞEY
-- kurulur: tablolar, RLS politikaları, Storage bucket'ları ve AI Koç.
--
-- NEDEN AYRI BİR DOSYA?
-- Mevcut supabase/migration_*.sql dosyaları canlı veritabanıyla
-- ÖRTÜŞMÜYOR. 2026-08-13'te canlı şema REST API üzerinden kolon kolon
-- doğrulandı ve şu farklar bulundu:
--
--   • `daily_logs` tablosu hiçbir migration'da YOK (Table Editor'dan
--     elle oluşturulmuş) — burada oluşturuluyor.
--   • `exams` tablosunda `exam_name` ve `score` kolonları canlıda YOK,
--     ama `subject` VAR — migration_branch_exam_upgrade.sql'in tersi.
--   • `profiles.student_id` (veli→öğrenci bağı) ve `'parent'` rolü
--     hiçbir migration'da YOK.
--
-- Bu dosya migration'ları değil, GERÇEĞİ yansıtır. Eski dosyalar
-- geçmiş kaydı olarak duruyor; yeni kurulumda bunu kullanın.
--
-- Çalıştırma sırası: önce bu dosya, sonra scripts/import-data.mjs
-- ============================================================


-- ============================================================
-- 1) PROFİLLER
-- ============================================================
create table if not exists profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text not null,
  -- 'parent' rolü sonradan eklendi; veli, student_id ile bir öğrenciye bağlanır
  role text not null check (role in ('teacher', 'student', 'parent')),
  student_id uuid references profiles(id) on delete set null,
  created_at timestamptz default now()
);

alter table profiles enable row level security;

-- DİKKAT — BU POLİTİKALAR GEÇİCİDİR:
-- Aşağıdaki SELECT politikası `using (true)` olduğu için, publishable
-- anahtara sahip HERKES (giriş yapmamış ziyaretçiler dahil) tüm öğrenci
-- adlarını listeleyebilir. Sebebi Register.jsx'in veli kaydında öğrenci
-- listesini giriş yapmadan okumasıydı.
--
-- BU ARTIK ÇÖZÜLDÜ: veli kayıt ekranındaki öğrenci seçimi kaldırıldı ve
-- `migration_parent_verification.sql` bu üç politikayı daraltıyor
-- (görünürlük kısıtı + rol yükseltme engeli + role/student_id dondurma).
-- O dosyayı bunun HEMEN ARDINDAN çalıştırın; aksi halde proje bu açık
-- politikalarla ayakta kalır.
drop policy if exists "Herkes tüm profilleri görebilir" on profiles;
create policy "Herkes tüm profilleri görebilir"
  on profiles for select using (true);

drop policy if exists "Kullanıcı kendi profilini oluşturabilir" on profiles;
create policy "Kullanıcı kendi profilini oluşturabilir"
  on profiles for insert with check (auth.uid() = id);

drop policy if exists "Kullanıcı kendi profilini güncelleyebilir" on profiles;
create policy "Kullanıcı kendi profilini güncelleyebilir"
  on profiles for update using (auth.uid() = id);


-- ============================================================
-- 2) GÜNLÜK ÇALIŞMA KAYITLARI
--    `topic` "Ders - Konu" biçiminde tek alanda tutulur; ayrı bir
--    `subject` kolonu YOKTUR (src/lib/topicHelpers.js böler).
-- ============================================================
create table if not exists daily_logs (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references profiles(id) on delete cascade not null,
  study_date date not null default current_date,
  topic text not null,
  duration_minutes int not null default 0,
  correct int not null default 0,
  incorrect int not null default 0,
  empty int not null default 0,
  notes text,
  created_at timestamptz default now()
);

create index if not exists daily_logs_student_date_idx
  on daily_logs (student_id, study_date desc);

alter table daily_logs enable row level security;

drop policy if exists "Kendi kayıtlarını veya öğretmen tümünü görebilir" on daily_logs;
create policy "Kendi kayıtlarını veya öğretmen tümünü görebilir"
  on daily_logs for select using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğrenci kendi kaydını ekleyebilir" on daily_logs;
create policy "Öğrenci kendi kaydını ekleyebilir"
  on daily_logs for insert with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi kaydını düzenleyebilir" on daily_logs;
create policy "Öğrenci kendi kaydını düzenleyebilir"
  on daily_logs for update using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi kaydını silebilir" on daily_logs;
create policy "Öğrenci kendi kaydını silebilir"
  on daily_logs for delete using (auth.uid() = student_id);


-- ============================================================
-- 3) BRANŞ DENEMELERİ (exams)
--    Canlı şemaya göre: exam_name ve score YOK, subject VAR.
-- ============================================================
create table if not exists exams (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references profiles(id) on delete cascade not null,
  subject text,
  topic text not null,
  exam_date date not null default current_date,
  correct int,
  incorrect int,
  empty int,
  net numeric generated always as (
    case when correct is not null and incorrect is not null
      then correct - (incorrect * 0.25)
      else null
    end
  ) stored,
  created_at timestamptz default now()
);

alter table exams enable row level security;

drop policy if exists "Öğrenci kendi sonuçlarını görebilir" on exams;
create policy "Öğrenci kendi sonuçlarını görebilir"
  on exams for select using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğrenci kendi branş denemesini ekleyebilir" on exams;
create policy "Öğrenci kendi branş denemesini ekleyebilir"
  on exams for insert with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi branş denemesini silebilir" on exams;
create policy "Öğrenci kendi branş denemesini silebilir"
  on exams for delete using (auth.uid() = student_id);

drop policy if exists "Öğretmen sonuç güncelleyebilir" on exams;
create policy "Öğretmen sonuç güncelleyebilir"
  on exams for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );


-- ============================================================
-- 4) SORUNLU SORULAR
-- ============================================================
create table if not exists questions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references profiles(id) on delete cascade not null,
  content text,
  image_url text,
  subject text,
  topic text,
  status text not null default 'İnceleniyor'
    check (status in ('İnceleniyor', 'Derste Çözülecek', 'Çözüldü')),
  teacher_reply text,
  teacher_reply_image_url text,
  created_at timestamptz default now()
);

alter table questions enable row level security;

drop policy if exists "Öğrenci kendi sorularını görebilir" on questions;
create policy "Öğrenci kendi sorularını görebilir"
  on questions for select using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğrenci soru gönderebilir" on questions;
create policy "Öğrenci soru gönderebilir"
  on questions for insert with check (auth.uid() = student_id);

drop policy if exists "Öğretmen soru durumunu güncelleyebilir" on questions;
create policy "Öğretmen soru durumunu güncelleyebilir"
  on questions for update using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );


-- ============================================================
-- 5) ÖDEVLER
--    INSERT yalnızca öğretmene açıktır — AI Koç'un plan maddelerinin
--    neden ayrı bir tabloda tutulduğunun sebebi budur.
-- ============================================================
create table if not exists homeworks (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references profiles(id) on delete cascade not null,
  teacher_id uuid references profiles(id) on delete set null,
  title text not null,
  description text,
  due_date date,
  status text not null default 'Yapılıyor' check (status in ('Yapılıyor', 'Tamamlandı')),
  created_at timestamptz default now()
);

alter table homeworks enable row level security;

drop policy if exists "Kendi ödevini veya öğretmen tümünü görebilir" on homeworks;
create policy "Kendi ödevini veya öğretmen tümünü görebilir"
  on homeworks for select using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğretmen ödev atayabilir" on homeworks;
create policy "Öğretmen ödev atayabilir"
  on homeworks for insert with check (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğrenci durumunu, öğretmen her şeyi güncelleyebilir" on homeworks;
create policy "Öğrenci durumunu, öğretmen her şeyi güncelleyebilir"
  on homeworks for update using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğretmen ödev silebilir" on homeworks;
create policy "Öğretmen ödev silebilir"
  on homeworks for delete using (
    exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );


-- ============================================================
-- 6) GENEL DENEMELER (LGS / TYT / AYT / KPSS)
-- ============================================================
create table if not exists mock_exams (
  id uuid primary key default gen_random_uuid(),
  student_id uuid references profiles(id) on delete cascade not null,
  exam_type text not null check (exam_type in ('LGS', 'TYT', 'AYT', 'KPSS')),
  exam_name text,
  exam_date date not null default current_date,
  created_at timestamptz default now()
);

create table if not exists mock_exam_subjects (
  id uuid primary key default gen_random_uuid(),
  mock_exam_id uuid references mock_exams(id) on delete cascade not null,
  subject text not null,
  correct integer not null default 0,
  incorrect integer not null default 0,
  empty integer not null default 0,
  net numeric generated always as (correct - incorrect * 0.25) stored
);

alter table mock_exams enable row level security;
alter table mock_exam_subjects enable row level security;

drop policy if exists "Kendi denemesini veya öğretmen tümünü görebilir" on mock_exams;
create policy "Kendi denemesini veya öğretmen tümünü görebilir"
  on mock_exams for select using (
    auth.uid() = student_id
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğrenci kendi denemesini ekleyebilir" on mock_exams;
create policy "Öğrenci kendi denemesini ekleyebilir"
  on mock_exams for insert with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi denemesini silebilir" on mock_exams;
create policy "Öğrenci kendi denemesini silebilir"
  on mock_exams for delete using (auth.uid() = student_id);

drop policy if exists "Deneme sahibinin ders sonuçlarını görme yetkisi" on mock_exam_subjects;
create policy "Deneme sahibinin ders sonuçlarını görme yetkisi"
  on mock_exam_subjects for select using (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
        and (
          mock_exams.student_id = auth.uid()
          or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
        )
    )
  );

drop policy if exists "Deneme sahibi ders sonucu ekleyebilir" on mock_exam_subjects;
create policy "Deneme sahibi ders sonucu ekleyebilir"
  on mock_exam_subjects for insert with check (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
        and mock_exams.student_id = auth.uid()
    )
  );

drop policy if exists "Deneme sahibi ders sonucunu silebilir" on mock_exam_subjects;
create policy "Deneme sahibi ders sonucunu silebilir"
  on mock_exam_subjects for delete using (
    exists (
      select 1 from mock_exams
      where mock_exams.id = mock_exam_subjects.mock_exam_id
        and mock_exams.student_id = auth.uid()
    )
  );


-- ============================================================
-- 7) MESAJLAŞMA
-- ============================================================
create table if not exists messages (
  id uuid primary key default gen_random_uuid(),
  sender_id uuid references profiles(id) on delete cascade not null,
  receiver_id uuid references profiles(id) on delete cascade not null,
  content text,
  attachment_url text,
  attachment_name text,
  attachment_type text check (attachment_type in ('image', 'pdf', 'file') or attachment_type is null),
  created_at timestamptz default now(),
  read_at timestamptz
);

alter table messages enable row level security;

drop policy if exists "Kendi mesajlarını görebilir" on messages;
create policy "Kendi mesajlarını görebilir"
  on messages for select using (auth.uid() = sender_id or auth.uid() = receiver_id);

drop policy if exists "Kullanıcı mesaj gönderebilir" on messages;
create policy "Kullanıcı mesaj gönderebilir"
  on messages for insert with check (auth.uid() = sender_id);

drop policy if exists "Alıcı okundu bilgisini güncelleyebilir" on messages;
create policy "Alıcı okundu bilgisini güncelleyebilir"
  on messages for update using (auth.uid() = receiver_id);

-- Anlık mesaj için realtime (zaten ekliyse hata vermesin)
do $$
begin
  alter publication supabase_realtime add table messages;
exception when duplicate_object then null;
end $$;


-- ============================================================
-- 8) DERS NOTLARI KÜTÜPHANESİ
-- ============================================================
create table if not exists library_subjects (
  id uuid primary key default gen_random_uuid(),
  exam_type text not null check (exam_type in ('LGS', 'TYT', 'AYT', 'KPSS')),
  name text not null,
  order_index int not null default 0,
  created_at timestamptz default now()
);

create table if not exists library_topics (
  id uuid primary key default gen_random_uuid(),
  subject_id uuid references library_subjects(id) on delete cascade not null,
  name text not null,
  order_index int not null default 0,
  created_at timestamptz default now()
);

create table if not exists library_notes (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid references library_topics(id) on delete cascade not null,
  teacher_id uuid references profiles(id) on delete set null,
  title text not null,
  content text,
  file_url text,
  file_type text check (file_type in ('pdf', 'image')),
  created_at timestamptz default now()
);

alter table library_subjects enable row level security;
alter table library_topics enable row level security;
alter table library_notes enable row level security;

drop policy if exists "Giriş yapan herkes dersleri görebilir" on library_subjects;
create policy "Giriş yapan herkes dersleri görebilir"
  on library_subjects for select using (auth.uid() is not null);

drop policy if exists "Giriş yapan herkes konuları görebilir" on library_topics;
create policy "Giriş yapan herkes konuları görebilir"
  on library_topics for select using (auth.uid() is not null);

drop policy if exists "Giriş yapan herkes notları görebilir" on library_notes;
create policy "Giriş yapan herkes notları görebilir"
  on library_notes for select using (auth.uid() is not null);

drop policy if exists "Öğretmen ders ekleyebilir/düzenleyebilir/silebilir" on library_subjects;
create policy "Öğretmen ders ekleyebilir/düzenleyebilir/silebilir"
  on library_subjects for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğretmen konu ekleyebilir/düzenleyebilir/silebilir" on library_topics;
create policy "Öğretmen konu ekleyebilir/düzenleyebilir/silebilir"
  on library_topics for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğretmen not ekleyebilir/düzenleyebilir/silebilir" on library_notes;
create policy "Öğretmen not ekleyebilir/düzenleyebilir/silebilir"
  on library_notes for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));


-- ============================================================
-- 9) PUSH BİLDİRİM ABONELİKLERİ
-- ============================================================
create table if not exists push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references profiles(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  created_at timestamptz not null default now()
);

alter table push_subscriptions enable row level security;

drop policy if exists "Kullanıcı kendi aboneliğini ekleyebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini ekleyebilir"
  on push_subscriptions for insert with check (auth.uid() = user_id);

drop policy if exists "Kullanıcı kendi aboneliğini görebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini görebilir"
  on push_subscriptions for select using (auth.uid() = user_id);

drop policy if exists "Kullanıcı kendi aboneliğini silebilir" on push_subscriptions;
create policy "Kullanıcı kendi aboneliğini silebilir"
  on push_subscriptions for delete using (auth.uid() = user_id);


-- ============================================================
-- 10) STORAGE BUCKET'LARI
-- ============================================================
insert into storage.buckets (id, name, public) values
  ('question-images', 'question-images', true),
  ('library-files', 'library-files', true),
  ('chat-attachments', 'chat-attachments', false)
on conflict (id) do nothing;

drop policy if exists "Herkes soru fotoğraflarını görebilir" on storage.objects;
create policy "Herkes soru fotoğraflarını görebilir"
  on storage.objects for select using (bucket_id = 'question-images');

drop policy if exists "Giriş yapan kullanıcılar fotoğraf yükleyebilir" on storage.objects;
create policy "Giriş yapan kullanıcılar fotoğraf yükleyebilir"
  on storage.objects for insert
  with check (bucket_id = 'question-images' and auth.role() = 'authenticated');

drop policy if exists "Herkes kütüphane dosyalarını görebilir" on storage.objects;
create policy "Herkes kütüphane dosyalarını görebilir"
  on storage.objects for select using (bucket_id = 'library-files');

drop policy if exists "Sadece öğretmen kütüphaneye dosya yükleyebilir" on storage.objects;
create policy "Sadece öğretmen kütüphaneye dosya yükleyebilir"
  on storage.objects for insert with check (
    bucket_id = 'library-files'
    and exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Sadece öğretmen kütüphane dosyasını silebilir" on storage.objects;
create policy "Sadece öğretmen kütüphane dosyasını silebilir"
  on storage.objects for delete using (
    bucket_id = 'library-files'
    and exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- Sohbet ekleri PRIVATE: yol {gönderen}/{alıcı}/... olduğu için yalnızca
-- konuşmanın iki tarafı erişebilir.
drop policy if exists "Konuşmanın tarafı dosyayı görebilir" on storage.objects;
create policy "Konuşmanın tarafı dosyayı görebilir"
  on storage.objects for select using (
    bucket_id = 'chat-attachments'
    and (
      auth.uid()::text = (storage.foldername(name))[1]
      or auth.uid()::text = (storage.foldername(name))[2]
    )
  );

drop policy if exists "Gönderen kendi adına dosya yükleyebilir" on storage.objects;
create policy "Gönderen kendi adına dosya yükleyebilir"
  on storage.objects for insert with check (
    bucket_id = 'chat-attachments'
    and auth.uid()::text = (storage.foldername(name))[1]
  );


-- ============================================================
-- 11) AI KOÇ
--     Ayrıntılı açıklamalar için supabase/migration_ai_coach.sql
-- ============================================================
create table if not exists ai_conversations (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  title text,
  summary text,
  summary_upto timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ai_conversations_student_idx
  on ai_conversations (student_id, updated_at desc);

create table if not exists ai_messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references ai_conversations(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  role text not null check (role in ('user', 'assistant')),
  content text not null default '',
  actions jsonb,
  created_at timestamptz not null default now()
);

create index if not exists ai_messages_conversation_idx
  on ai_messages (conversation_id, created_at);

create table if not exists ai_student_memory (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  key text not null,
  value text not null,
  updated_at timestamptz not null default now(),
  unique (student_id, key)
);

create table if not exists ai_study_tasks (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  plan_group uuid,
  subject text not null,
  topic text,
  activity text not null default 'soru_cozumu'
    check (activity in ('soru_cozumu', 'konu_tekrari', 'yanlis_analizi', 'deneme')),
  planned_date date not null default current_date,
  duration_minutes int not null default 30 check (duration_minutes between 5 and 480),
  status text not null default 'planlandı' check (status in ('planlandı', 'tamamlandı', 'iptal')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists ai_study_tasks_student_date_idx
  on ai_study_tasks (student_id, planned_date);

create table if not exists ai_usage_events (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  kind text not null default 'chat',
  model text,
  prompt_tokens int,
  completion_tokens int,
  created_at timestamptz not null default now()
);

create index if not exists ai_usage_events_student_time_idx
  on ai_usage_events (student_id, created_at desc);

alter table ai_conversations enable row level security;
alter table ai_messages enable row level security;
alter table ai_student_memory enable row level security;
alter table ai_study_tasks enable row level security;
alter table ai_usage_events enable row level security;

drop policy if exists "Öğrenci kendi sohbetlerini görebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetlerini görebilir"
  on ai_conversations for select using (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi sohbetini açabilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini açabilir"
  on ai_conversations for insert with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi sohbetini güncelleyebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini güncelleyebilir"
  on ai_conversations for update using (auth.uid() = student_id) with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi sohbetini silebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini silebilir"
  on ai_conversations for delete using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi mesajlarını görebilir" on ai_messages;
create policy "Öğrenci kendi mesajlarını görebilir"
  on ai_messages for select using (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi mesajını ekleyebilir" on ai_messages;
create policy "Öğrenci kendi mesajını ekleyebilir"
  on ai_messages for insert with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi mesajını silebilir" on ai_messages;
create policy "Öğrenci kendi mesajını silebilir"
  on ai_messages for delete using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi hafızasını görebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını görebilir"
  on ai_student_memory for select using (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi hafızasını yazabilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını yazabilir"
  on ai_student_memory for insert with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi hafızasını güncelleyebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını güncelleyebilir"
  on ai_student_memory for update using (auth.uid() = student_id) with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi hafızasını silebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını silebilir"
  on ai_student_memory for delete using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi plan maddelerini görebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddelerini görebilir"
  on ai_study_tasks for select using (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi plan maddesini ekleyebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini ekleyebilir"
  on ai_study_tasks for insert with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi plan maddesini güncelleyebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini güncelleyebilir"
  on ai_study_tasks for update using (auth.uid() = student_id) with check (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi plan maddesini silebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini silebilir"
  on ai_study_tasks for delete using (auth.uid() = student_id);

-- ai_usage_events: UPDATE/DELETE politikası BİLEREK yok — öğrenci kendi
-- kullanım sayacını silip hız sınırını sıfırlayamasın diye.
drop policy if exists "Öğrenci kendi kullanımını görebilir" on ai_usage_events;
create policy "Öğrenci kendi kullanımını görebilir"
  on ai_usage_events for select using (auth.uid() = student_id);
drop policy if exists "Öğrenci kendi kullanımını kaydedebilir" on ai_usage_events;
create policy "Öğrenci kendi kullanımını kaydedebilir"
  on ai_usage_events for insert with check (auth.uid() = student_id);


-- ============================================================
-- BİTTİ — ama bir dosya daha çalıştırın:
--
--   supabase/migration_parent_verification.sql
--
-- Veli doğrulama sistemi (parent_links, davet kodları, veliye veri
-- okuma izni) ve profil politikalarının sıkılaştırılmış hâli orada.
-- Bu dosyadaki `profiles` politikaları (özellikle SELECT `using (true)`)
-- o göç tarafından DEĞİŞTİRİLİR — sıralama önemlidir: önce bu dosya,
-- sonra migration_parent_verification.sql, en son scripts/import-data.mjs.
--
-- Doğrulama:
--   select table_name from information_schema.tables
--    where table_schema = 'public' order by table_name;
--   → bu dosyadan sonra 17, veli göçünden sonra 20 tablo görmelisiniz.
-- ============================================================
