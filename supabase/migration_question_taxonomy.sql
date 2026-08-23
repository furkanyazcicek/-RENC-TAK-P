-- ============================================================
-- SORUNLU SORULAR: DERS / KONU SINIFLANDIRMASI
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- Mevcut sorularınız etkilenmez — subject/topic NULL olarak kalır,
-- öğrenci/öğretmen "Tümü" filtresinde görmeye devam eder.
-- ============================================================

alter table questions add column if not exists subject text;
alter table questions add column if not exists topic text;
