-- ============================================================
-- KPSS DENEME TÜRÜ EKLEME
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- mock_exams tablosundaki exam_type kısıtlamasına 'KPSS' ekler.
-- Mevcut LGS/TYT/AYT verileriniz hiç etkilenmez.
-- ============================================================

alter table mock_exams drop constraint if exists mock_exams_exam_type_check;

alter table mock_exams
  add constraint mock_exams_exam_type_check
  check (exam_type in ('LGS', 'TYT', 'AYT', 'KPSS'));
