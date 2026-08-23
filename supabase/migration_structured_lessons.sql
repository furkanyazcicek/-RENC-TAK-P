-- ============================================================
-- DrKoç — Structured Lessons MVP
--
-- Bu migration mevcut library_notes kayıtlarını değiştirmez. Eski PDF ve
-- yazılı notlar çalışmaya devam eder; yeni öğretmen kalitesindeki dersler
-- ayrı, sürümlü bir master lesson olarak saklanır.
-- ============================================================

create table if not exists structured_lessons (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references library_topics(id) on delete cascade,
  teacher_id uuid references profiles(id) on delete set null,
  title text not null,
  subtitle text,
  document jsonb not null default '{"version":1,"sections":[]}'::jsonb,
  status text not null default 'draft'
    check (status in ('draft', 'published', 'archived')),
  is_gold_standard boolean not null default false,
  quality_scores jsonb,
  content_hash text,
  current_revision integer not null default 1 check (current_revision > 0),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists structured_lessons_topic_idx
  on structured_lessons (topic_id, status, updated_at desc);

create index if not exists structured_lessons_gold_idx
  on structured_lessons (is_gold_standard) where is_gold_standard;

create table if not exists structured_lesson_revisions (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references structured_lessons(id) on delete cascade,
  revision integer not null check (revision > 0),
  document jsonb not null,
  change_note text,
  created_by uuid references profiles(id) on delete set null,
  created_at timestamptz not null default now(),
  unique (lesson_id, revision)
);

create index if not exists structured_lesson_revisions_lesson_idx
  on structured_lesson_revisions (lesson_id, revision desc);

-- Master lesson değişmeden öğrenciye küçük bir öğretim katmanı eklenir.
-- `profile_hash`, kaynak öğrenci sinyali değişince cache'in geçersizleşmesini
-- sağlar; burada gereksiz ham öğrenci verisi saklanmaz.
create table if not exists lesson_personalizations (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references structured_lessons(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  profile_hash text not null,
  overlay jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lesson_id, student_id, profile_hash)
);

create index if not exists lesson_personalizations_student_idx
  on lesson_personalizations (student_id, lesson_id, updated_at desc);

-- Aynı cache key ile ikinci kez TTS üretilmesini veritabanı katmanı da
-- engeller. Audio üretimi sonraki fazda sunucu tarafında yapılacaktır.
create table if not exists lesson_audio_assets (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references structured_lessons(id) on delete cascade,
  section_id text,
  block_id text,
  student_id uuid references profiles(id) on delete cascade,
  scope text not null check (scope in ('master', 'personalized', 'visual')),
  cache_key text not null unique,
  content_hash text not null,
  voice_id text,
  provider text,
  model text,
  language text not null default 'tr-TR',
  storage_path text,
  duration_seconds numeric,
  status text not null default 'pending'
    check (status in ('pending', 'ready', 'failed')),
  failure_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists lesson_audio_assets_lookup_idx
  on lesson_audio_assets (lesson_id, section_id, block_id, student_id, status);

create table if not exists lesson_generation_runs (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid references structured_lessons(id) on delete cascade,
  initiated_by uuid references profiles(id) on delete set null,
  student_id uuid references profiles(id) on delete set null,
  kind text not null check (kind in ('lesson', 'section', 'personalization', 'audio', 'visual_audio', 'quality')),
  status text not null default 'started' check (status in ('started', 'succeeded', 'failed')),
  provider text,
  model text,
  input_tokens integer,
  output_tokens integer,
  cost_usd numeric(10, 6),
  error_code text,
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create table if not exists lesson_activity_events (
  id uuid primary key default gen_random_uuid(),
  lesson_id uuid not null references structured_lessons(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,
  event_name text not null check (event_name in (
    'lesson_opened', 'lesson_completed', 'audio_started', 'audio_completed',
    'visual_audio_clicked', 'quiz_answered', 'personalized_section_viewed'
  )),
  block_id text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists lesson_activity_events_student_idx
  on lesson_activity_events (student_id, lesson_id, created_at desc);

alter table structured_lessons enable row level security;
alter table structured_lesson_revisions enable row level security;
alter table lesson_personalizations enable row level security;
alter table lesson_audio_assets enable row level security;
alter table lesson_generation_runs enable row level security;
alter table lesson_activity_events enable row level security;

-- Ders taslakları yalnızca öğretmene; yayınlanan master içerik öğrenci ve
-- öğretmene açıktır. Veli için kişiselleştirilmiş ders okuması varsayılan
-- olarak kapalıdır.
drop policy if exists "Yayınlanan structured lessonlar görülebilir" on structured_lessons;
create policy "Yayınlanan structured lessonlar görülebilir"
  on structured_lessons for select
  using (
    (status = 'published' and exists (
      select 1 from profiles where id = auth.uid() and role in ('student', 'teacher')
    ))
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğretmen structured lesson yönetebilir" on structured_lessons;
create policy "Öğretmen structured lesson yönetebilir"
  on structured_lessons for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğretmen lesson revizyonlarını yönetebilir" on structured_lesson_revisions;
create policy "Öğretmen lesson revizyonlarını yönetebilir"
  on structured_lesson_revisions for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğrenci kendi lesson kişiselleştirmesini görür" on lesson_personalizations;
create policy "Öğrenci kendi lesson kişiselleştirmesini görür"
  on lesson_personalizations for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi lesson kişiselleştirmesini yazabilir" on lesson_personalizations;
create policy "Öğrenci kendi lesson kişiselleştirmesini yazabilir"
  on lesson_personalizations for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi lesson kişiselleştirmesini güncelleyebilir" on lesson_personalizations;
create policy "Öğrenci kendi lesson kişiselleştirmesini güncelleyebilir"
  on lesson_personalizations for update
  using (auth.uid() = student_id)
  with check (auth.uid() = student_id);

drop policy if exists "Lesson audio erişimi" on lesson_audio_assets;
create policy "Lesson audio erişimi"
  on lesson_audio_assets for select
  using (
    student_id is null
    or student_id = auth.uid()
    or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

drop policy if exists "Öğretmen lesson audio yönetebilir" on lesson_audio_assets;
create policy "Öğretmen lesson audio yönetebilir"
  on lesson_audio_assets for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğretmen lesson üretim kayıtlarını yönetebilir" on lesson_generation_runs;
create policy "Öğretmen lesson üretim kayıtlarını yönetebilir"
  on lesson_generation_runs for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

drop policy if exists "Öğrenci kendi lesson etkinliğini görür" on lesson_activity_events;
create policy "Öğrenci kendi lesson etkinliğini görür"
  on lesson_activity_events for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi lesson etkinliğini yazar" on lesson_activity_events;
create policy "Öğrenci kendi lesson etkinliğini yazar"
  on lesson_activity_events for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğretmen lesson etkinliğini görür" on lesson_activity_events;
create policy "Öğretmen lesson etkinliğini görür"
  on lesson_activity_events for select
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

-- Öğrenciye özel ses asla public `library-files` bucket'ına yazılmaz.
insert into storage.buckets (id, name, public)
values ('lesson-audio', 'lesson-audio', false)
on conflict (id) do nothing;

drop policy if exists "Ders sesi sahipleri görebilir" on storage.objects;
create policy "Ders sesi sahipleri görebilir"
  on storage.objects for select
  using (
    bucket_id = 'lesson-audio'
    and (
      (storage.foldername(name))[1] = 'master'
      or (storage.foldername(name))[1] = auth.uid()::text
      or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
    )
  );

drop policy if exists "Öğretmen master ders sesi yükleyebilir" on storage.objects;
create policy "Öğretmen master ders sesi yükleyebilir"
  on storage.objects for insert
  with check (
    bucket_id = 'lesson-audio'
    and exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
  );

-- `updated_at` trigger'ı mevcut şemaya bağımlı olmamak için burada eklenmedi;
-- uygulama güncelleme anında bu alanı açıkça yazar.
