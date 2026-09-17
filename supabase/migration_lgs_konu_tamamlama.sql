-- ============================================================
-- LGS KONU AĞACI TAMAMLAMA — EKSİK BAŞLIKLARI EKLER
-- ============================================================
--
-- NE YAPAR?
-- MEB 8. sınıf Türkçe Dersi Öğretim Programı'nda açık kazanımı olduğu
-- hâlde kütüphane konu ağacında bulunmayan üç başlığı ekler:
--
--   • Anlatım Bozuklukları   → T.8.3.8  "Metindeki anlatım bozukluklarını belirler."
--   • Cümle Türleri          → T.8.4.19 "Cümle türlerini tanır."
--   • Görsel Okuma           → T.8.3.27 "Görsellerle ilgili soruları cevaplar."
--                              T.8.3.32 "Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar."
--
-- NE YAPMAZ?
--   · Hiçbir konuyu SİLMEZ.
--   · Hiçbir konuyu YENİDEN ADLANDIRMAZ.
--   · Mevcut konuların sırasını DEĞİŞTİRMEZ.
--   · Öğrenci verisine DOKUNMAZ.
--
-- GÜVENLİK
--   · Tekrar çalıştırılabilir: konu zaten varsa hiçbir şey yapmaz
--     (`where not exists`).
--   · Tek bir işlem (transaction) içinde çalışır; bir satır hata verirse
--     hiçbiri uygulanmaz.
--   · Sıra numaraları mevcut en büyük sıradan devam eder; böylece
--     kütüphanedeki mevcut dizilim bozulmaz.
--
-- DURUM: CANLI VERİTABANINDA ÇALIŞTIRILMADI. Kullanıcı onayı bekliyor.
--
-- NASIL ÇALIŞTIRILIR? (onay verildiğinde)
--   Supabase panelinde  SQL Editor → bu dosyanın içeriğini yapıştır → Run
--   Ardından:  npm run seed:lessons -- --dry     (önce kuru prova)
--              npm run seed:lessons              (onay sonrası gerçek yazım)
--
-- DAYANAK: docs/lgs-kutuphanesi/LGS_MUFREDAT_KAZANIM_MATRISI.md §2.5
-- ============================================================

begin;

-- Eklenecek başlıklar, mevcut en büyük sıra numarasından sonra dizilir.
with hedef as (
  select id
  from library_subjects
  where exam_type = 'LGS' and name = 'Türkçe'
  limit 1
),
son_sira as (
  select coalesce(max(t.order_index), 0) as deger
  from library_topics t
  join hedef s on t.subject_id = s.id
),
yeni as (
  select * from (values
    ('Anlatım Bozuklukları', 1),
    ('Cümle Türleri',        2),
    ('Görsel Okuma',         3)
  ) as v(name, ofset)
)
insert into library_topics (subject_id, name, order_index)
select hedef.id, yeni.name, son_sira.deger + yeni.ofset
from hedef, son_sira, yeni
where not exists (
  select 1
  from library_topics mevcut
  where mevcut.subject_id = hedef.id
    and mevcut.name = yeni.name
);

commit;

-- ------------------------------------------------------------
-- DOĞRULAMA (isteğe bağlı, yazma yapmaz)
-- Çalıştırdıktan sonra 13 satır dönmelidir.
-- ------------------------------------------------------------
-- select t.order_index, t.name
-- from library_topics t
-- join library_subjects s on s.id = t.subject_id
-- where s.exam_type = 'LGS' and s.name = 'Türkçe'
-- order by t.order_index;
