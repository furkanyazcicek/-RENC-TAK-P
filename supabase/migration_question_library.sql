-- ============================================================
-- SORU KÜTÜPHANESİ
-- Not içeriklerinden bağımsız, aynı ders/konuyla ilişkilenen test setleri.
-- `library_subjects` ve `library_topics` ortak müfredat kaynağı olarak
-- kullanılmaya devam eder; hiçbir mevcut not veya structured lesson taşınmaz.
-- ============================================================

create table if not exists library_question_sets (
  id uuid primary key default gen_random_uuid(),
  topic_id uuid not null references library_topics(id) on delete cascade,
  created_by uuid references profiles(id) on delete set null,
  title text not null,
  description text,
  content_type text not null default 'test'
    check (content_type in ('question', 'test', 'question_bank', 'mock_exam', 'past_exam')),
  difficulty text check (difficulty in ('very_easy', 'easy', 'medium', 'hard', 'mixed')),
  questions jsonb not null default '[]'::jsonb,
  question_count integer generated always as (jsonb_array_length(questions)) stored,
  order_index integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  source text not null default 'manual'
    check (source in ('manual', 'aggravity', 'codex', 'claude', 'import')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists library_question_sets_topic_published_idx
  on library_question_sets (topic_id, status, order_index, created_at desc);

alter table library_question_sets enable row level security;

drop policy if exists "Giriş yapan herkes yayınlanan soru setlerini görebilir" on library_question_sets;
create policy "Giriş yapan herkes yayınlanan soru setlerini görebilir"
  on library_question_sets for select
  using (auth.uid() is not null and status = 'published');

drop policy if exists "Öğretmen soru setlerini yönetebilir" on library_question_sets;
create policy "Öğretmen soru setlerini yönetebilir"
  on library_question_sets for all
  using (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'))
  with check (exists (select 1 from profiles where id = auth.uid() and role = 'teacher'));

-- İleride öğrenci test ilerlemesi bu tanıma bağlanır. Her çözüm denemesi
-- ayrı saklandığından tekrar çözme, puan ve son çözülme tarihi kaybolmaz.
create table if not exists student_question_set_attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references auth.users(id) on delete cascade,
  question_set_id uuid not null references library_question_sets(id) on delete cascade,
  answers jsonb not null default '{}'::jsonb,
  correct_count integer not null default 0,
  wrong_count integer not null default 0,
  empty_count integer not null default 0,
  success_rate numeric(5, 2),
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists student_question_set_attempts_student_set_idx
  on student_question_set_attempts (student_id, question_set_id, completed_at desc);

alter table student_question_set_attempts enable row level security;

drop policy if exists "Öğrenci kendi test denemelerini görür" on student_question_set_attempts;
create policy "Öğrenci kendi test denemelerini görür"
  on student_question_set_attempts for select using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi test denemesini oluşturur" on student_question_set_attempts;
create policy "Öğrenci kendi test denemesini oluşturur"
  on student_question_set_attempts for insert with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi açık test denemesini günceller" on student_question_set_attempts;
create policy "Öğrenci kendi açık test denemesini günceller"
  on student_question_set_attempts for update using (auth.uid() = student_id);
