-- ============================================================
-- AI KOÇ MODÜLÜ
-- Bu dosyanın tamamını Supabase panelinde "SQL Editor" bölümüne
-- yapıştırıp "RUN" ile çalıştırın.
--
-- MEVCUT HİÇBİR TABLOYA DOKUNULMAZ. Sadece 5 yeni tablo eklenir:
--   ai_conversations    → sohbet başlıkları + sıkıştırılmış özet
--   ai_messages         → sohbet mesajları (konuşma hafızası)
--   ai_student_memory   → uzun vadeli öğrenci tercihleri (hedef sınav vb.)
--   ai_study_tasks      → AI'ın oluşturduğu çalışma planı maddeleri
--   ai_usage_events     → hız sınırı (rate limit) sayacı
--
-- NEDEN `homeworks` KULLANILMADI?
--   `homeworks` tablosunun INSERT politikası yalnızca ÖĞRETMENE izin verir
--   (bkz. migration_v2.sql). Öğrencinin kendisi için oluşturduğu bir çalışma
--   planı oraya yazılamaz ve yazılsaydı öğretmenin verdiği gerçek ödevlerle
--   karışırdı. Bu yüzden plan maddeleri ayrı tutuluyor.
-- ============================================================


-- ------------------------------------------------------------
-- 1) SOHBETLER
--    `summary` alanı, konuşma uzadığında eski mesajların yerine
--    geçen sıkıştırılmış özettir; her istekte tüm geçmişi OpenAI'a
--    göndermemek için kullanılır.
-- ------------------------------------------------------------
create table if not exists ai_conversations (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  title text,
  summary text,
  -- Bu tarihten ESKİ mesajlar `summary` içinde temsil edilir.
  summary_upto timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists ai_conversations_student_idx
  on ai_conversations (student_id, updated_at desc);

alter table ai_conversations enable row level security;

drop policy if exists "Öğrenci kendi sohbetlerini görebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetlerini görebilir"
  on ai_conversations for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi sohbetini açabilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini açabilir"
  on ai_conversations for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi sohbetini güncelleyebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini güncelleyebilir"
  on ai_conversations for update
  using (auth.uid() = student_id)
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi sohbetini silebilir" on ai_conversations;
create policy "Öğrenci kendi sohbetini silebilir"
  on ai_conversations for delete
  using (auth.uid() = student_id);


-- ------------------------------------------------------------
-- 2) MESAJLAR
--    `actions` → asistan mesajına iliştirilen aksiyon kartları
--    (örn. "Planı Oluştur"). Kullanıcı onaylayana kadar hiçbir
--    yazma işlemi yapılmaz; kart yalnızca teklifi taşır.
-- ------------------------------------------------------------
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

alter table ai_messages enable row level security;

drop policy if exists "Öğrenci kendi mesajlarını görebilir" on ai_messages;
create policy "Öğrenci kendi mesajlarını görebilir"
  on ai_messages for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi mesajını ekleyebilir" on ai_messages;
create policy "Öğrenci kendi mesajını ekleyebilir"
  on ai_messages for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi mesajını silebilir" on ai_messages;
create policy "Öğrenci kendi mesajını silebilir"
  on ai_messages for delete
  using (auth.uid() = student_id);


-- ------------------------------------------------------------
-- 3) UZUN VADELİ ÖĞRENCİ HAFIZASI
--    Yalnızca AI koçluğu için anlamlı, sınırlı sayıda anahtar
--    saklanır (hedef sınav, hedef bölüm, çalışma saati tercihi…).
--    Hassas kişisel veri buraya YAZILMAZ — sunucu tarafında
--    anahtar beyaz listesi (whitelist) uygulanır.
-- ------------------------------------------------------------
create table if not exists ai_student_memory (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  key text not null,
  value text not null,
  updated_at timestamptz not null default now(),
  unique (student_id, key)
);

alter table ai_student_memory enable row level security;

drop policy if exists "Öğrenci kendi hafızasını görebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını görebilir"
  on ai_student_memory for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi hafızasını yazabilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını yazabilir"
  on ai_student_memory for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi hafızasını güncelleyebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını güncelleyebilir"
  on ai_student_memory for update
  using (auth.uid() = student_id)
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi hafızasını silebilir" on ai_student_memory;
create policy "Öğrenci kendi hafızasını silebilir"
  on ai_student_memory for delete
  using (auth.uid() = student_id);


-- ------------------------------------------------------------
-- 4) ÇALIŞMA PLANI MADDELERİ
--    Aynı `plan_group` değerini taşıyan satırlar tek bir planı
--    oluşturur. `daily_logs` ile karıştırılmamalı: orası YAPILMIŞ
--    çalışmayı, burası PLANLANMIŞ çalışmayı tutar.
-- ------------------------------------------------------------
create table if not exists ai_study_tasks (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,
  plan_group uuid,
  subject text not null,
  topic text,
  -- Ne tür bir çalışma: soru çözümü, konu tekrarı, yanlış analizi, deneme
  activity text not null default 'soru_cozumu'
    check (activity in ('soru_cozumu', 'konu_tekrari', 'yanlis_analizi', 'deneme')),
  planned_date date not null default current_date,
  duration_minutes int not null default 30
    check (duration_minutes between 5 and 480),
  status text not null default 'planlandı'
    check (status in ('planlandı', 'tamamlandı', 'iptal')),
  created_at timestamptz not null default now(),
  completed_at timestamptz
);

create index if not exists ai_study_tasks_student_date_idx
  on ai_study_tasks (student_id, planned_date);

alter table ai_study_tasks enable row level security;

drop policy if exists "Öğrenci kendi plan maddelerini görebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddelerini görebilir"
  on ai_study_tasks for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi plan maddesini ekleyebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini ekleyebilir"
  on ai_study_tasks for insert
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi plan maddesini güncelleyebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini güncelleyebilir"
  on ai_study_tasks for update
  using (auth.uid() = student_id)
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi plan maddesini silebilir" on ai_study_tasks;
create policy "Öğrenci kendi plan maddesini silebilir"
  on ai_study_tasks for delete
  using (auth.uid() = student_id);


-- ------------------------------------------------------------
-- 5) KULLANIM SAYACI (HIZ SINIRI)
--    DİKKAT: Bu tabloda bilerek UPDATE ve DELETE politikası YOKTUR.
--    RLS varsayılanı "politikası olmayan işlem yasaktır" olduğu için
--    öğrenci kendi kullanım kayıtlarını silip hız sınırını
--    sıfırlayamaz. Sadece okuyabilir ve ekleyebilir.
-- ------------------------------------------------------------
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

alter table ai_usage_events enable row level security;

drop policy if exists "Öğrenci kendi kullanımını görebilir" on ai_usage_events;
create policy "Öğrenci kendi kullanımını görebilir"
  on ai_usage_events for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi kullanımını kaydedebilir" on ai_usage_events;
create policy "Öğrenci kendi kullanımını kaydedebilir"
  on ai_usage_events for insert
  with check (auth.uid() = student_id);

-- (update/delete politikası KASITLI olarak yok — yukarıdaki nota bakın)
