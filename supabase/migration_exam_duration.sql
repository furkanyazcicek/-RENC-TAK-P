-- ============================================================
-- DENEMELERE SÜRE ALANI
-- ============================================================
-- Çalıştırma: Supabase SQL Editor'e yapıştırıp RUN, ya da
--   node scripts/run-migration.mjs supabase/migration_exam_duration.sql
--
-- NEDEN
-- Deneme sonuçları günlük çalışma istatistiklerine (toplam süre, çözülen
-- soru, isabet oranı, kesintisiz seri) dahil edilecek. Soru sayıları
-- zaten kayıtlı ama SÜRE hiçbir yerde tutulmuyordu — ne kolon vardı ne
-- form alanı. Bu göç kolonu açıyor.
--
-- NULL BIRAKILABİLİR VE BU BİLİNÇLİ
-- Boş bırakılan süre, sınav türünün standart süresinden TAHMİN edilir
-- (bkz. src/lib/examDuration.js). Arayüz tahmini süreleri "~" ile
-- işaretler, böylece gerçek ölçümle karışmaz. Geçmiş denemelerin hepsi
-- NULL olduğu için tahminle sayılacaklar; öğrenci dilerse sonradan
-- gerçek süreyi girip tahmini değiştirebilir.
-- ============================================================

begin;

alter table exams
  add column if not exists duration_minutes int
  check (duration_minutes is null or (duration_minutes >= 0 and duration_minutes <= 1440));

alter table mock_exams
  add column if not exists duration_minutes int
  check (duration_minutes is null or (duration_minutes >= 0 and duration_minutes <= 1440));

comment on column exams.duration_minutes is
  'Denemenin sürdüğü dakika. NULL ise sınav türünün soru başına süresinden tahmin edilir (src/lib/examDuration.js).';
comment on column mock_exams.duration_minutes is
  'Denemenin sürdüğü dakika. NULL ise sınav türünün standart süresi kullanılır (TYT 165, AYT 180, LGS 155, KPSS 130).';

commit;

-- Doğrulama:
--   select column_name, data_type from information_schema.columns
--    where table_schema='public' and table_name in ('exams','mock_exams')
--      and column_name='duration_minutes';
--   → 2 satır dönmeli.
