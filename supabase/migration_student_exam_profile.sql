-- ============================================================
-- ÖĞRENCİ SINAV PROFİLİ
-- ------------------------------------------------------------
-- Anasayfadaki "sınava kalan süre" geri sayımı ve seviyeye göre
-- içerik gösterebilmek için öğrencinin HANGİ sınava, HANGİ yıl
-- gireceğini bilmemiz gerekiyor. Bu bilgi bugüne kadar hiçbir
-- yerde tutulmuyordu.
--
-- Bu dosyayı Supabase → SQL Editor'de bir kez çalıştırın.
-- Tekrar çalıştırmak zarar vermez (idempotent).
--
-- KOLONLAR
--   grade         5–13 arası sınıf. 13 = MEZUN.
--   target_exam   'LGS' | 'YKS' | 'KPSS' | 'YOK'
--                 YKS tek değer olarak tutulur; TYT ve AYT aynı
--                 hafta sonu yapıldığı için geri sayım ortaktır.
--   exam_year     Sınava girilecek yıl (örn. 2027).
--   is_exam_year  Bu yıl sınava mı giriyor (true) yoksa ara sınıf mı (false).
--   exam_date     ÖSYM tarihi açıkladığında girilen KESİN tarih.
--                 Boşsa uygulama tahmini tarih hesaplar ve bunu
--                 arayüzde "tahmini" olarak işaretler
--                 (bkz. src/lib/examProfile.js).
--   exam_profile_updated_at  Anketin doldurulduğu an. Boşsa öğrenciye
--                 Anasayfa'da tek seferlik kurulum kartı gösterilir.
-- ============================================================

alter table profiles add column if not exists grade smallint;
alter table profiles add column if not exists target_exam text;
alter table profiles add column if not exists exam_year smallint;
alter table profiles add column if not exists is_exam_year boolean;
alter table profiles add column if not exists exam_date date;
alter table profiles add column if not exists exam_profile_updated_at timestamptz;

-- Değer kısıtları — yanlış veri girişini veritabanı seviyesinde durdurur.
do $$
begin
  alter table profiles add constraint profiles_target_exam_check
    check (target_exam is null or target_exam in ('LGS', 'YKS', 'KPSS', 'YOK'));
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table profiles add constraint profiles_grade_check
    check (grade is null or (grade >= 5 and grade <= 13));
exception when duplicate_object then null;
end $$;

do $$
begin
  alter table profiles add constraint profiles_exam_year_check
    check (exam_year is null or (exam_year >= 2020 and exam_year <= 2100));
exception when duplicate_object then null;
end $$;

-- RLS notu: profiles tablosunun mevcut politikaları yeterli.
--   * SELECT  → "Herkes tüm profilleri görebilir" (öğretmen, ankete
--     yanıt vermemiş öğrencileri bu sayede listeleyebiliyor).
--   * UPDATE  → "Kullanıcı kendi profilini güncelleyebilir" (anketi
--     öğrencinin KENDİSİ doldurur; öğretmen yalnızca hatırlatma
--     mesajı gönderir, veriyi öğrenci adına yazmaz).
-- Yeni politika eklemeye gerek yoktur.

-- Kimler henüz doldurmamış? (öğretmen için hızlı kontrol sorgusu)
--   select full_name from profiles
--   where role = 'student' and (target_exam is null or exam_year is null);
