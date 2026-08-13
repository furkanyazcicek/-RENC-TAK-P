-- ============================================================
-- MÜFREDAT SEED VERİSİ — LGS / TYT / AYT / KPSS Matematik & Geometri
-- Bu dosyayı migration_library.sql'den SONRA çalıştırın.
--
-- Kaynak: MEB 8. sınıf matematik müfredatı (LGS) ve ÖSYM TYT/AYT/KPSS
-- güncel konu dağılımları. Bu liste sektörde yaygın kabul gören
-- standart bir konu kırılımıdır — okulunuzun/kurumunuzun kullandığı
-- kaynakla birebir örtüşmeyen bir konu adı görürseniz, Öğretmen
-- panelindeki Kütüphane ekranından tek tıkla düzenleyip
-- yeniden adlandırabilir ya da silebilirsiniz.
--
-- Bu dosyayı SADECE BİR KEZ çalıştırın (tekrar çalıştırırsanız
-- konular ikinci kez eklenir, mükerrer kayıt oluşur).
-- ============================================================

-- ---------- LGS — Matematik ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'Matematik', 1)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Çarpanlar ve Katlar', 1),
  ('Üslü İfadeler', 2),
  ('Kareköklü İfadeler', 3),
  ('Veri Analizi', 4),
  ('Olasılık', 5),
  ('Cebirsel İfadeler ve Özdeşlikler', 6),
  ('Doğrusal Denklemler', 7),
  ('Eşitsizlikler', 8)
) as t(name, ord);

-- ---------- LGS — Geometri ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'Geometri', 2)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Üçgenler', 1),
  ('Eşlik ve Benzerlik', 2),
  ('Dönüşüm Geometrisi', 3),
  ('Geometrik Cisimler', 4)
) as t(name, ord);

-- ---------- TYT — Matematik ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Matematik', 1)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Temel Kavramlar', 1),
  ('Sayı Basamakları', 2),
  ('Bölme ve Bölünebilme', 3),
  ('OBEB - OKEK', 4),
  ('Rasyonel Sayılar', 5),
  ('Basit Eşitsizlikler', 6),
  ('Mutlak Değer', 7),
  ('Üslü Sayılar', 8),
  ('Köklü Sayılar', 9),
  ('Çarpanlara Ayırma', 10),
  ('Oran - Orantı', 11),
  ('Denklem Çözme', 12),
  ('Problemler', 13),
  ('Kümeler', 14),
  ('Fonksiyonlar (Temel)', 15),
  ('Permütasyon - Kombinasyon - Olasılık', 16),
  ('İstatistik ve Veri Analizi', 17)
) as t(name, ord);

-- ---------- TYT — Geometri ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Geometri', 2)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Temel Kavramlar ve Doğruda Açılar', 1),
  ('Üçgende Açılar', 2),
  ('Özel Üçgenler (Dik, İkizkenar, Eşkenar)', 3),
  ('Üçgende Alan', 4),
  ('Açıortay ve Kenarortay', 5),
  ('Eşlik ve Benzerlik', 6),
  ('Çokgenler', 7),
  ('Çember ve Daire', 8),
  ('Katı Cisimler', 9),
  ('Analitik Geometri (Nokta - Doğru)', 10)
) as t(name, ord);

-- ---------- AYT — Matematik ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Matematik', 1)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Fonksiyonlar (İleri)', 1),
  ('Polinomlar', 2),
  ('İkinci Dereceden Denklemler', 3),
  ('Karmaşık Sayılar', 4),
  ('Eşitsizlikler (İleri)', 5),
  ('Parabol', 6),
  ('Trigonometri', 7),
  ('Logaritma', 8),
  ('Diziler', 9),
  ('Limit ve Süreklilik', 10),
  ('Türev', 11),
  ('İntegral', 12)
) as t(name, ord);

-- ---------- AYT — Geometri ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Geometri', 2)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Üçgende Trigonometri', 1),
  ('Çemberde Açı ve Uzunluk', 2),
  ('Analitik Geometri (Doğru - Çember)', 3),
  ('Vektörler', 4),
  ('Uzay Geometri (Katı Cisimler İleri)', 5),
  ('Dönüşümler', 6)
) as t(name, ord);

-- ---------- KPSS — Matematik ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Matematik', 1)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Temel Kavramlar', 1),
  ('Sayı Basamakları', 2),
  ('Bölme ve Bölünebilme', 3),
  ('OBEB - OKEK', 4),
  ('Rasyonel Sayılar', 5),
  ('Basit Eşitsizlikler', 6),
  ('Mutlak Değer', 7),
  ('Üslü - Köklü Sayılar', 8),
  ('Çarpanlara Ayırma', 9),
  ('Oran - Orantı', 10),
  ('Problemler', 11),
  ('Kümeler', 12),
  ('Permütasyon - Kombinasyon - Olasılık', 13),
  ('İstatistik ve Grafik Yorumlama', 14)
) as t(name, ord);

-- ---------- KPSS — Geometri ----------
with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Geometri', 2)
  returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Temel Kavramlar', 1),
  ('Üçgenler', 2),
  ('Çokgenler', 3),
  ('Çember ve Daire', 4),
  ('Analitik Geometri (Temel)', 5)
) as t(name, ord);
