-- ============================================================
-- ÖĞRETMEN DİJİTAL KALEM ÇÖZÜMÜ (SolveBoard)
-- Bu dosyayı Supabase SQL Editor'e yapıştırıp çalıştırın.
--
-- NE YAPAR: `questions` tablosuna tek bir jsonb kolonu ekler.
-- Öğretmenin tablet kalemiyle çizdiği çizgiler burada VEKTÖR olarak
-- (stroke/path listesi) durur; böylece çözüm statik bir fotoğraf
-- olmaktan çıkar, sonradan tekrar açılıp düzenlenebilir.
--
-- NE YAPMAZ: mevcut hiçbir şeye dokunmaz.
--   • teacher_reply           → yazılı yanıt, aynen duruyor
--   • teacher_reply_image_url → öğrenciye giden çözüm görseli, aynen duruyor
--   • status                  → İnceleniyor / Derste Çözülecek / Çözüldü, aynen
--   • image_url               → öğrencinin sorusu, ASLA değişmez
--
-- Öğretmen "Çözümü Gönder" dediğinde soru görseli + çizimler tek bir
-- görsele düzleştirilip mevcut `teacher_reply_image_url` alanına yazılır.
-- Yani öğrenci tarafı ve gönderme akışı hiç değişmez; bu kolon yalnızca
-- öğretmenin çizimi sonradan düzenleyebilmesi için tutulan kaynaktır.
--
-- Yeni bir Storage bucket'a da GEREK YOK — düzleştirilmiş çözüm görseli,
-- öğretmenin fotoğraflı yanıtı için zaten kullanılan 'question-images'
-- bucket'ına, aynı 'replies/<öğretmen-id>/...' yoluna yüklenir.
-- ============================================================

alter table questions add column if not exists teacher_reply_strokes jsonb;

comment on column questions.teacher_reply_strokes is
  'Öğretmenin dijital kalemle yaptığı çözümün vektör kaydı: '
  '{ v, board:{w,h,imgW,imgH}, strokes:[{t,c,w,p:[x,y,basınç,...]}] }. '
  'Koordinatlar soru görselinin kendi piksel uzayındadır (zoom''dan bağımsız). '
  'Öğrenciye giden düzleştirilmiş görsel teacher_reply_image_url alanındadır.';
