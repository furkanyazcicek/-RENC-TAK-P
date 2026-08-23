-- Kademeli Kavrama Sistemi için veritabanı tabloları

-- 1. Öğrencinin konudaki genel test ilerlemesi
CREATE TABLE IF NOT EXISTS student_topic_test_progress (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_slug text NOT NULL,
  completed_tests text[] DEFAULT '{}', -- tamamlanan test ID'leri (örn: ['test-1', 'test-2'])
  mastery_unlocked boolean DEFAULT false,
  overall_success_rate numeric(5, 2) DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(student_id, topic_slug)
);

ALTER TABLE student_topic_test_progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their own topic test progress"
  ON student_topic_test_progress FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Students can insert their own topic test progress"
  ON student_topic_test_progress FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can update their own topic test progress"
  ON student_topic_test_progress FOR UPDATE
  USING (auth.uid() = student_id);


-- 2. Öğrencinin her bir soruya verdiği cevaplar (AI Koç ve Analiz için)
CREATE TABLE IF NOT EXISTS student_test_answers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  topic_slug text NOT NULL,
  test_id text NOT NULL,
  question_id text NOT NULL,
  selected_option_id text,
  is_correct boolean NOT NULL,
  concept_tags text[] DEFAULT '{}',
  misconception_tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  -- Basitlik için en son çözümü saklamak amacıyla unique index
  UNIQUE(student_id, topic_slug, test_id, question_id)
);

ALTER TABLE student_test_answers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Students can view their own test answers"
  ON student_test_answers FOR SELECT
  USING (auth.uid() = student_id);

CREATE POLICY "Students can insert their own test answers"
  ON student_test_answers FOR INSERT
  WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students can update their own test answers"
  ON student_test_answers FOR UPDATE
  USING (auth.uid() = student_id);
