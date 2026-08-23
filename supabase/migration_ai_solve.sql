-- ============================================================
-- AI SORU ÇÖZÜM MERKEZİ
-- Bu dosyanın tamamını Supabase panelinde "SQL Editor" bölümüne
-- yapıştırıp "RUN" ile çalıştırın.
--
-- MEVCUT HİÇBİR TABLOYA DOKUNULMAZ. Sadece 2 yeni tablo eklenir:
--   ai_solution_sessions → çözülen her sorunun tam kaydı
--   ai_solution_events   → o çözüm sırasındaki etkileşimler
--
-- HIZ SINIRI İÇİN YENİ TABLO AÇILMADI: mevcut `ai_usage_events`
-- tablosu kullanılıyor, yalnızca `kind` alanına 'solve' yazılıyor.
-- O tablonun INSERT politikası zaten `auth.uid() = student_id`
-- kontrolü yapıyor ve UPDATE/DELETE politikası BİLEREK yok — yani
-- öğrenci kendi sayacını silip limiti sıfırlayamıyor. Aynı korumayı
-- ikinci kez kurmanın anlamı olmazdı.
--
-- YENİ STORAGE KOVASI AÇILMADI: soru fotoğrafları mevcut
-- `question-images` kovasına, `ai-solve/<kullanıcı-id>/` öneki
-- altına yazılır. Kova ve politikaları `schema.sql` içinde zaten
-- kurulu.
--   ⚠ BİLİNEN SINIR: bu kova PUBLIC READ'tir (öğrencinin öğretmene
--   gönderdiği soru fotoğrafları için baştan böyle kurulmuş). Yani
--   bir dosyanın TAM YOLUNU bilen biri onu görebilir. Yollar uuid +
--   zaman damgası içerdiği için tahmin edilmesi pratikte zordur ama
--   gizli değildir. Sıkılaştırmak isterseniz bu dosyanın en altındaki
--   "İSTEĞE BAĞLI" bölümüne bakın.
-- ============================================================


-- ------------------------------------------------------------
-- 1) ÇÖZÜM OTURUMLARI
--
--    Bir satır = öğrencinin yüklediği bir soru ve onun çözümü.
--    Hem öğrencinin geçmişini hem de §19'daki performans alanlarını
--    hem de §43'teki telemetriyi tek satırda tutar. İkiye bölmek,
--    her okumada join gerektirirdi ve iki tablo da aynı hızda büyürdü.
-- ------------------------------------------------------------
create table if not exists ai_solution_sessions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references profiles(id) on delete cascade,

  -- ---- Sonuç durumu ----
  -- ok          → çözüm üretildi ve gösterildi
  -- unreadable  → görsel/soru okunamadı, çözüm DENENMEDİ
  -- refused     → çözüldü ama güven eşiğini geçemedi, GÖSTERİLMEDİ
  -- error       → teknik hata
  status text not null default 'ok'
    check (status in ('ok', 'unreadable', 'refused', 'error')),

  source text not null default 'photo'
    check (source in ('photo', 'text', 'gallery', 'pdf')),

  -- ---- Soru ----
  -- Depolama yolu (public URL DEĞİL): imzalama/erişim istemcide,
  -- öğrencinin kendi oturumuyla yapılır.
  image_path text,
  question_text text,
  student_note text,

  -- ---- Sınıflandırma (§19, §31) ----
  -- `topic` modelin yazdığı ham ad, `canonical_topic` müfredat
  -- ağacına (src/lib/curriculum/graph.js) eşleşmiş hâli. İkisini de
  -- saklıyoruz: eşleşme başarısızsa bunu görebilmek, sessizce yanlış
  -- bir konuya yazmaktan iyidir.
  subject text,
  topic text,
  subtopic text,
  canonical_topic text,
  topic_matched boolean not null default false,
  exam_type text,
  difficulty int check (difficulty between 1 and 5),
  question_type text,

  -- ---- Cevap ----
  answer_latex text,
  answer_plain text,
  answer_unit text,
  answer_choice text,

  -- ---- İçerik ----
  -- `board` tahtanın derlenmiş hâli (adımlar + action'lar).
  -- `analysis` verilenler/istenen/strateji, `student_help` yaygın
  -- hata + kilit kavram + ipucu.
  board jsonb,
  analysis jsonb,
  student_help jsonb,

  -- ---- Doğrulama ve güven (§13, §22) ----
  verification jsonb,
  confidence numeric check (confidence >= 0 and confidence <= 1),
  refusal_reason text,

  -- ---- Model ve maliyet (§26, §43) ----
  model_role text check (model_role in ('fast', 'pro')),
  model_id text,
  escalated boolean not null default false,
  input_tokens int,
  output_tokens int,
  cost_usd numeric(10, 6),
  duration_ms int,
  -- Hangi aşamada hangi model neden seçildi. Admin metrikleri (§41)
  -- bunun üzerinden hesaplanır.
  routing_log jsonb,

  -- ---- Öğrenci etkileşimi (§19) ----
  -- Kaç kez "Neden?" / "Takıldım" sorduğu: zorlandığı konuların
  -- en dolaysız göstergesi.
  help_requested int not null default 0,
  -- Öğrenci bu soruyu kendisi doğru çözmüş müydü. NULL = söylemedi.
  student_correct boolean,
  -- "Çözümümü kontrol et" akışından çıkan hata türü.
  error_type text,

  -- ---- Geri bildirim (§42) ----
  feedback text check (feedback in ('up', 'down')),
  feedback_reason text,
  feedback_note text,

  created_at timestamptz not null default now()
);

-- Öğrencinin kendi geçmişi (en yeni önce) — en sık sorgu.
create index if not exists ai_solution_sessions_student_idx
  on ai_solution_sessions (student_id, created_at desc);

-- AI Koç'un "bu öğrenci hangi konuda zorlanıyor" sorgusu (§20).
create index if not exists ai_solution_sessions_topic_idx
  on ai_solution_sessions (student_id, subject, canonical_topic);

alter table ai_solution_sessions enable row level security;

drop policy if exists "Öğrenci kendi çözümlerini görebilir" on ai_solution_sessions;
create policy "Öğrenci kendi çözümlerini görebilir"
  on ai_solution_sessions for select
  using (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi çözümünü kaydedebilir" on ai_solution_sessions;
create policy "Öğrenci kendi çözümünü kaydedebilir"
  on ai_solution_sessions for insert
  with check (auth.uid() = student_id);

-- Güncelleme yalnızca geri bildirim ve etkileşim sayaçları için gerekli.
drop policy if exists "Öğrenci kendi çözümünü güncelleyebilir" on ai_solution_sessions;
create policy "Öğrenci kendi çözümünü güncelleyebilir"
  on ai_solution_sessions for update
  using (auth.uid() = student_id)
  with check (auth.uid() = student_id);

drop policy if exists "Öğrenci kendi çözümünü silebilir" on ai_solution_sessions;
create policy "Öğrenci kendi çözümünü silebilir"
  on ai_solution_sessions for delete
  using (auth.uid() = student_id);


-- ------------------------------------------------------------
-- 2) ÇÖZÜM ETKİLEŞİMLERİ
--
--    "Neden?", "Burada takıldım", serbest soru, alternatif yöntem
--    ve "çözümümü kontrol et" çağrılarının kaydı.
--
--    NEDEN AYRI TABLO: bunlar bire-çok. Oturum satırına dizi olarak
--    yazsaydık her yeni soruda tüm satırı okuyup yeniden yazmak
--    gerekirdi (yarış koşulu + gereksiz trafik).
-- ------------------------------------------------------------
create table if not exists ai_solution_events (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references ai_solution_sessions(id) on delete cascade,
  student_id uuid not null references profiles(id) on delete cascade,

  kind text not null
    check (kind in ('why', 'stuck', 'chat', 'alternative', 'check', 'feedback')),

  -- Hangi adımda soruldu (0 tabanlı). Adıma bağlı değilse NULL.
  step_index int,
  question text,
  answer text,

  model_role text,
  model_id text,
  input_tokens int,
  output_tokens int,
  cost_usd numeric(10, 6),
  duration_ms int,

  created_at timestamptz not null default now()
);

create index if not exists ai_solution_events_session_idx
  on ai_solution_events (session_id, created_at);

create index if not exists ai_solution_events_student_idx
  on ai_solution_events (student_id, created_at desc);

alter table ai_solution_events enable row level security;

drop policy if exists "Öğrenci kendi etkileşimlerini görebilir" on ai_solution_events;
create policy "Öğrenci kendi etkileşimlerini görebilir"
  on ai_solution_events for select
  using (auth.uid() = student_id);

-- INSERT'te yalnızca `student_id` kontrolü yetmez: öğrenci kendi
-- kimliğiyle BAŞKASININ oturumuna satır yazabilirdi. Oturumun da
-- kendisine ait olduğu doğrulanır.
drop policy if exists "Öğrenci kendi etkileşimini kaydedebilir" on ai_solution_events;
create policy "Öğrenci kendi etkileşimini kaydedebilir"
  on ai_solution_events for insert
  with check (
    auth.uid() = student_id
    and exists (
      select 1 from ai_solution_sessions s
      where s.id = session_id and s.student_id = auth.uid()
    )
  );

drop policy if exists "Öğrenci kendi etkileşimini silebilir" on ai_solution_events;
create policy "Öğrenci kendi etkileşimini silebilir"
  on ai_solution_events for delete
  using (auth.uid() = student_id);

-- (UPDATE politikası KASITLI olarak yok: bir etkileşim kaydı olmuş
--  bitmiş bir olaydır, sonradan değiştirilmesinin meşru bir sebebi
--  yok ve telemetriyi bozar.)


-- ============================================================
-- GERİ ALMA (§50: her migration reversible olmalı)
-- ------------------------------------------------------------
-- Aşağıdaki iki satırı çalıştırmak bu göçü tamamen geri alır.
-- Politikalar ve indeksler tabloyla birlikte düşer.
-- DİKKAT: çözüm geçmişi de silinir.
--
-- drop table if exists ai_solution_events;
-- drop table if exists ai_solution_sessions;
-- ============================================================


-- ============================================================
-- İSTEĞE BAĞLI — SORU FOTOĞRAFLARINI GİZLİLEŞTİRME
-- ------------------------------------------------------------
-- `question-images` kovası şu an herkese açık okunabilir. Bunu
-- yalnızca sahibine ve öğretmene açmak isterseniz aşağıyı
-- çalıştırın. ⚠ ÖNCE OKUYUN: bu, ÖĞRETMENİN SORU EKRANINI DA
-- etkiler (src/pages/Questions.jsx ve components/solve/SolveBoard.jsx
-- public URL kullanıyor). Uygulama kodunda imzalı URL'e geçmeden
-- çalıştırmayın.
--
-- drop policy if exists "Herkes soru fotoğraflarını görebilir" on storage.objects;
-- create policy "Sahibi ve öğretmen soru fotoğrafını görebilir"
--   on storage.objects for select
--   using (
--     bucket_id = 'question-images'
--     and (
--       (storage.foldername(name))[1] = auth.uid()::text
--       or (storage.foldername(name))[2] = auth.uid()::text
--       or exists (select 1 from profiles where id = auth.uid() and role = 'teacher')
--     )
--   );
-- ============================================================
