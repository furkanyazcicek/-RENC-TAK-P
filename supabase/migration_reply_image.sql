-- ============================================================
-- ÖĞRETMEN GÖRSEL YANIT DESTEĞİ
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
-- `questions` tablosuna öğretmenin fotoğraflı yanıt verebilmesi
-- için tek bir kolon ekler. Mevcut sorularınız/yanıtlarınız
-- (teacher_reply, status) hiç etkilenmez.
--
-- NOT: Yeni bir Storage bucket AÇMANIZA GEREK YOK — öğrenciden
-- gelen soru fotoğrafları için zaten kurmuş olduğunuz
-- 'question-images' bucket'ı, öğretmenin yanıt fotoğrafı için de
-- kullanılacak (aynı yükleme izinleri geçerli).
-- ============================================================

alter table questions add column if not exists teacher_reply_image_url text;
