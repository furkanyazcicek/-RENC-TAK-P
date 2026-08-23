-- ============================================================
-- VELİ DOĞRULAMA — ARTIK POLİTİKA TEMİZLİĞİ
-- ============================================================
-- migration_parent_verification.sql'DEN SONRA çalıştırılır.
--
-- NEDEN AYRI BİR DOSYA GEREKTİ
-- Canlı veritabanında, bu depodaki hiçbir .sql dosyasında BULUNMAYAN
-- politikalar vardı — zamanla Supabase panelinden elle eklenmişler.
-- 2026-08-16'da pg_policies dökümüyle ortaya çıktılar.
--
-- PostgreSQL'de aynı komut için birden fazla PERMISSIVE politika
-- VEYA'lanır: içlerinden biri bile "true" derse satır görünür. Yani
-- yeni ve dar politikalar yazmak yetmiyor, eskileri DÜŞÜRMEK gerekiyor.
-- Aksi halde sıkılaştırma hiçbir işe yaramaz.
--
-- BURADA DÜŞÜRÜLENLER VE GERÇEK ETKİLERİ
--
--   profiles / "Kullanıcılar kendi profillerini görebilir"
--     Adı "kendi profilini" diyor ama koşulu düpedüz `true`. Giriş
--     yapmamış herkesin tüm öğrenci ad ve id'lerini listeleyebilmesinin
--     sebebi buydu.
--
--   profiles / "Kayıt ekranı için öğrenci listesi"  (role = 'student')
--     Kaldırılan veli kayıt açılır listesi içindi. Artık gereksiz.
--
--   profiles / "Kullanıcılar profil ekleyebilir"
--   profiles / "Yeni uyeler profil ekleyebilir"
--     Rol kısıtı yok. Bunlar dururken kullanıcı kendini 'teacher'
--     olarak ekleyip bütün öğrencilerin verisini okuyabiliyor.
--
--   profiles / "Kullanıcılar kendi profillerini güncelleyebilir"
--     WITH CHECK'i olmayan kopya.
--
--   daily_logs / "Veliler çocuklarının günlük loglarını görebilir"
--   mock_exams / "Veliler çocuklarının sınavlarını görebilir"
--     EN ÖNEMLİLERİ. Erişimi `profiles.student_id`'ye dayandırıyorlar,
--     yani öğrencinin onayına HİÇ bakmıyorlar. Bunlar dururken
--     "öğrenci onaylamadan veli veri göremez" kuralı geçersiz.
--     Mevcut veliler erişim kaybetmez: bağları önceki göçte
--     parent_links'e 'active' olarak taşındı ve yeni politikalar
--     (is_linked_parent_of) onları kapsıyor.
-- ============================================================

begin;

-- ---- profiles ----
drop policy if exists "Kullanıcılar kendi profillerini görebilir" on profiles;
drop policy if exists "Kayıt ekranı için öğrenci listesi" on profiles;
drop policy if exists "Kullanıcılar profil ekleyebilir" on profiles;
drop policy if exists "Yeni uyeler profil ekleyebilir" on profiles;
drop policy if exists "Kullanıcılar kendi profillerini güncelleyebilir" on profiles;

-- ---- eski, onay tanımayan veli yolları ----
drop policy if exists "Veliler çocuklarının günlük loglarını görebilir" on daily_logs;
drop policy if exists "Veliler çocuklarının sınavlarını görebilir" on mock_exams;
-- Aynı desenin başka tablolarda kalmış olabilecek kopyaları:
drop policy if exists "Veliler çocuklarının ödevlerini görebilir" on homeworks;
drop policy if exists "Veliler çocuklarının sorularını görebilir" on questions;
drop policy if exists "Veliler çocuklarının ders sonuçlarını görebilir" on mock_exam_subjects;
drop policy if exists "Veliler çocuklarının branş denemelerini görebilir" on exams;

commit;


-- ============================================================
-- DOĞRULAMA — aşağıdaki iki sorgunun çıktısını kontrol edin
-- ============================================================

-- 1) profiles üzerinde SELECT politikası TEK BAŞINA "Profil görünürlüğü"
--    olmalı ve koşulu `auth.uid() IS NOT NULL ...` ile başlamalı.
--    `qual = true` olan bir satır kalırsa sıkılaştırma çalışmaz.
select tablename, cmd, policyname, qual::text as kosul, with_check::text as ekleme_kosulu
  from pg_policies
 where schemaname = 'public'
   and tablename = 'profiles'
 order by cmd, policyname;

-- 2) Tüm tablolarda `profiles.student_id`'ye dayanan (yani öğrenci
--    onayını atlayan) politika kalmamalı. Bu sorgu BOŞ dönmeli.
select tablename, policyname, cmd, qual::text as kosul
  from pg_policies
 where schemaname = 'public'
   and qual::text like '%student_id%'
   and qual::text like '%parent%'
   and qual::text not like '%is_linked_parent_of%'
 order by tablename, policyname;
