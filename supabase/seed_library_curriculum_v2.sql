-- ============================================================
-- MÜFREDAT SEED VERİSİ v2 — Matematik/Geometri HARİÇ tüm dersler
-- Bu dosyayı migration_library.sql VE seed_library_curriculum.sql
-- (v1, Matematik+Geometri) çalıştırıldıktan SONRA çalıştırın.
--
-- Ekler: 
--   LGS   -> Türkçe, Fen Bilimleri, T.C. İnkılap Tarihi ve Atatürkçülük,
--            İngilizce, Din Kültürü ve Ahlak Bilgisi
--   TYT   -> Türkçe, Fizik, Kimya, Biyoloji, Tarih, Coğrafya, Felsefe,
--            Din Kültürü ve Ahlak Bilgisi
--   AYT   -> Edebiyat, Fizik, Kimya, Biyoloji, Tarih, Coğrafya,
--            Felsefe Grubu, Din Kültürü ve Ahlak Bilgisi
--   KPSS  -> Türkçe, Tarih, Coğrafya, Vatandaşlık
--
-- NOT: TYT ve AYT'de aynı ders adı iki kez geçiyor (örn. "Fizik") —
-- bu bilerek yapıldı: TYT konuları temel/9-10. sınıf seviyesini,
-- AYT konuları ileri/11-12. sınıf seviyesini kapsıyor; ikisi ayrı
-- `exam_type` değeriyle ayrı satırlar olduğu için çakışmaz.
--
-- Konu listeleri, sektörde yaygın kabul gören standart MEB/ÖSYM
-- kırılımlarıdır. Kurumunuzun kaynağıyla birebir örtüşmüyorsa
-- öğretmen panelindeki Kütüphane ekranından düzenleyebilir/
-- silebilirsiniz. Bu dosyayı SADECE BİR KEZ çalıştırın.
-- ============================================================

-- ================= LGS =================

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'Türkçe', 3) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Sözcükte Anlam', 1), ('Cümlede Anlam', 2), ('Paragrafta Anlam', 3),
  ('Söz Sanatları', 4), ('Fiilimsiler', 5), ('Cümlenin Öğeleri', 6),
  ('Fiilde Çatı', 7), ('Yazım Kuralları', 8), ('Noktalama İşaretleri', 9),
  ('Metin Türleri', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'Fen Bilimleri', 4) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Mevsimler ve İklim', 1), ('DNA ve Genetik Kod', 2), ('Basınç', 3),
  ('Madde ve Endüstri', 4), ('Basit Makineler', 5),
  ('Enerji Dönüşümleri ve Çevre Bilimi', 6),
  ('Elektrik Yükleri ve Elektrik Enerjisi', 7)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'T.C. İnkılap Tarihi ve Atatürkçülük', 5) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Bir Kahraman Doğuyor', 1),
  ('Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar', 2),
  ('Milli Bir Destan: Ya İstiklal Ya Ölüm', 3),
  ('Atatürkçülük ve Çağdaşlaşan Türkiye', 4),
  ('Demokratikleşme Çabaları', 5),
  ('Atatürk Dönemi Türk Dış Politikası', 6),
  ('Atatürk''ün Ölümü ve Sonrası', 7)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'İngilizce', 6) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Friendship', 1), ('Teen Life', 2), ('In the Kitchen', 3),
  ('On the Phone', 4), ('The Internet', 5), ('Adventures', 6),
  ('Tourism', 7), ('Chores', 8), ('Science', 9), ('Natural Forces', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('LGS', 'Din Kültürü ve Ahlak Bilgisi', 7) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Kader İnancı', 1), ('Zekat ve Sadaka', 2), ('Din ve Hayat', 3),
  ('Hz. Muhammed''in Örnekliği', 4), ('Kur''an-ı Kerim ve Özellikleri', 5)
) as t(name, ord);

-- ================= TYT =================

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Türkçe', 3) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Sözcükte Anlam', 1), ('Cümlede Anlam', 2),
  ('Paragrafta Anlam ve Yapı', 3),
  ('Paragrafta Düşünceyi Geliştirme Yolları', 4),
  ('Cümlenin Öğeleri', 5), ('Fiilimsi', 6), ('Cümle Türleri', 7),
  ('Anlatım Bozuklukları', 8), ('Yazım Kuralları', 9),
  ('Noktalama İşaretleri', 10), ('Ses Bilgisi', 11), ('Yapı Bilgisi', 12)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Fizik', 5) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Fizik Bilimine Giriş', 1), ('Madde ve Özellikleri', 2),
  ('Sıvıların Kaldırma Kuvveti', 3), ('Basınç', 4),
  ('Isı, Sıcaklık ve Genleşme', 5), ('Hareket ve Kuvvet', 6),
  ('İş, Güç ve Enerji', 7), ('Elektrostatik', 8),
  ('Elektrik Devreleri', 9), ('Manyetizma', 10),
  ('Dalgalar', 11), ('Optik', 12)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Kimya', 6) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Kimya Bilimi', 1), ('Atom ve Periyodik Sistem', 2),
  ('Kimyasal Türler Arası Etkileşimler', 3), ('Maddenin Halleri', 4),
  ('Doğa ve Kimya', 5), ('Kimyanın Temel Kanunları', 6),
  ('Mol Kavramı', 7), ('Karışımlar', 8), ('Asit, Baz ve Tuz', 9),
  ('Kimya Her Yerde', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Biyoloji', 7) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Canlıların Ortak Özellikleri', 1), ('Canlıların Temel Bileşenleri', 2),
  ('Hücre', 3), ('Canlıların Sınıflandırılması', 4),
  ('Hücre Bölünmeleri', 5), ('Kalıtım', 6), ('Ekosistem Ekolojisi', 7)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Tarih', 8) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Tarih ve Zaman', 1), ('İnsanlığın İlk Dönemleri', 2),
  ('Ortaçağda Dünya', 3), ('İlk ve Orta Çağlarda Türk Dünyası', 4),
  ('İslam Medeniyeti ve Türkler', 5), ('Türk-İslam Devletleri', 6),
  ('Beylikten Devlete Osmanlı', 7), ('Dünya Gücü Osmanlı', 8),
  ('Arayış Yılları', 9),
  ('Devrimler Çağında Değişen Devlet-Toplum İlişkileri', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Coğrafya', 9) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Doğa ve İnsan', 1), ('Dünya''nın Şekli ve Hareketleri', 2),
  ('Coğrafi Konum', 3), ('Harita Bilgisi', 4),
  ('Atmosfer ve İklim', 5),
  ('Yerin Şekillenmesi (İç ve Dış Kuvvetler)', 6),
  ('Su, Toprak ve Bitkiler', 7), ('Nüfus', 8), ('Yerleşme', 9),
  ('Ekonomik Faaliyetler', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Felsefe', 10) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Felsefenin Konusu', 1), ('Bilgi Felsefesi', 2), ('Varlık Felsefesi', 3),
  ('Ahlak Felsefesi', 4), ('Sanat Felsefesi', 5), ('Din Felsefesi', 6),
  ('Siyaset Felsefesi', 7), ('Bilim Felsefesi', 8)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('TYT', 'Din Kültürü ve Ahlak Bilgisi', 11) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Bilgi ve İnanç', 1), ('İslam ve İbadet', 2), ('Gençlik ve Değerler', 3),
  ('Din ve Hayat', 4), ('Ahlaki Tutum ve Davranışlar', 5),
  ('Din, Kültür ve Sanat', 6)
) as t(name, ord);

-- ================= AYT =================

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Edebiyat', 3) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Anlam Bilgisi', 1), ('Söz Sanatları', 2), ('Şiir Bilgisi', 3),
  ('Edebi Akımlar', 4), ('İslamiyet Öncesi Türk Edebiyatı', 5),
  ('Halk Edebiyatı', 6), ('Divan Edebiyatı', 7),
  ('Tanzimat Edebiyatı', 8), ('Servet-i Fünun ve Fecr-i Ati', 9),
  ('Milli Edebiyat', 10), ('Cumhuriyet Dönemi Türk Edebiyatı', 11),
  ('Dünya Edebiyatı', 12)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Fizik', 5) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Vektörler', 1), ('Bağıl Hareket', 2), ('Newton''un Hareket Yasaları', 3),
  ('Bir Boyutta Sabit İvmeli Hareket', 4), ('Atışlar', 5),
  ('İş, Güç ve Enerji', 6), ('Elektrik Alan ve Potansiyel', 7),
  ('Manyetik Alan', 8), ('İndüksiyon', 9), ('Alternatif Akım', 10),
  ('Çembersel Hareket', 11), ('Kütle Çekim ve Kepler Yasaları', 12),
  ('Basit Harmonik Hareket', 13), ('Dalga Mekaniği', 14),
  ('Atom Fiziğine Giriş ve Radyoaktivite', 15), ('Modern Fizik', 16)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Kimya', 6) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Kimya Bilimi', 1), ('Atom ve Periyodik Sistem', 2), ('Gazlar', 3),
  ('Sıvı Çözeltiler ve Çözünürlük', 4),
  ('Kimyasal Tepkimelerde Enerji', 5),
  ('Kimyasal Tepkimelerde Hız', 6), ('Kimyasal Tepkimelerde Denge', 7),
  ('Asit-Baz Dengesi', 8), ('Çözünürlük Dengesi', 9), ('Elektrokimya', 10),
  ('Karbon Kimyasına Giriş', 11), ('Organik Kimya', 12),
  ('Enerji Kaynakları ve Bilimsel Gelişmeler', 13)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Biyoloji', 7) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Sinir Sistemi', 1), ('Endokrin Sistem ve Hormonlar', 2),
  ('Duyu Organları', 3), ('Destek ve Hareket Sistemi', 4),
  ('Sindirim Sistemi', 5), ('Dolaşım ve Bağışıklık Sistemi', 6),
  ('Solunum Sistemi', 7), ('Üriner Sistem', 8),
  ('Üreme Sistemi ve Embriyonik Gelişim', 9),
  ('Komünite ve Popülasyon Ekolojisi', 10), ('Genden Proteine', 11),
  ('Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)', 12),
  ('Bitki Biyolojisi', 13), ('Canlılar ve Çevre', 14)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Tarih', 8) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Türk-İslam Devletlerinde Toplum ve Ekonomi', 1),
  ('Türkiye Tarihi (11-13. Yüzyıl)', 2),
  ('Beylikten Devlete Osmanlı Medeniyeti', 3),
  ('Dünya Gücü Osmanlı Devleti', 4),
  ('Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti', 5),
  ('Uluslararası İlişkilerde Denge Stratejisi', 6),
  ('XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya', 7),
  ('Milli Mücadele', 8), ('Atatürkçülük ve Türk İnkılabı', 9),
  ('İki Savaş Arası Dönemde Türkiye ve Dünya', 10),
  ('II. Dünya Savaşı Sonrası Dünya ve Türkiye', 11)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Coğrafya', 9) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Biyoçeşitlilik', 1), ('Ekosistem', 2), ('Nüfus Politikaları', 3),
  ('Şehirler ve Etki Alanı', 4), ('Türkiye Ekonomisi', 5),
  ('Türkiye''de Tarım, Sanayi ve Ticaret', 6),
  ('Bölgeler ve Ülkeler', 7),
  ('Küresel Ortam: Bölgeler ve Ülkeler', 8),
  ('Çevre ve Toplum', 9), ('Doğal Afetler', 10)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık)', 10) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Felsefeyle Tanışma', 1), ('Bilgi Felsefesi', 2), ('Bilim Felsefesi', 3),
  ('Ahlak Felsefesi', 4), ('Din, Sanat ve Siyaset Felsefesi', 5),
  ('Psikoloji Bilimini Tanıma', 6), ('Psikolojinin Temel Süreçleri', 7),
  ('Öğrenme, Bellek, Düşünme', 8), ('Ruh Sağlığının Temelleri', 9),
  ('Sosyolojiye Giriş', 10), ('Birey ve Toplum', 11),
  ('Toplumsal Yapı', 12), ('Toplumsal Değişme ve Gelişme', 13),
  ('Mantığa Giriş', 14), ('Klasik Mantık', 15), ('Mantık ve Dil', 16)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('AYT', 'Din Kültürü ve Ahlak Bilgisi', 11) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('İnanç', 1), ('İbadet', 2), ('Gençlik, Din ve Değerler', 3),
  ('Hint ve Çin Dinleri', 4), ('Yahudilik ve Hristiyanlık', 5),
  ('İslam Düşüncesinde Yorumlar', 6), ('Güncel Dini Meseleler', 7),
  ('Hukuki ve Ahlaki Boyutuyla Aile', 8)
) as t(name, ord);

-- ================= KPSS =================

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Türkçe', 3) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Sözcükte Anlam', 1), ('Cümlede Anlam', 2), ('Paragraf', 3),
  ('Ses Bilgisi', 4), ('Yapı Bilgisi', 5), ('Cümlenin Öğeleri', 6),
  ('Anlatım Bozuklukları', 7), ('Yazım Kuralları', 8),
  ('Noktalama İşaretleri', 9)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Tarih', 4) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('İlk ve Orta Çağlarda Türk Tarihi', 1), ('İslamiyet ve Türkler', 2),
  ('Türkiye Selçuklu Devleti', 3),
  ('Osmanlı Kuruluş ve Yükseliş Dönemi', 4),
  ('Osmanlı Duraklama ve Gerileme Dönemi', 5),
  ('XX. Yüzyılda Osmanlı Devleti', 6), ('Milli Mücadele Dönemi', 7),
  ('Atatürk İlke ve İnkılapları', 8),
  ('Atatürk Sonrası Türkiye ve Dünya', 9)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Coğrafya', 5) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Türkiye''nin Yer Şekilleri', 1), ('İklim ve Bitki Örtüsü', 2),
  ('Nüfus ve Yerleşme', 3),
  ('Tarım, Hayvancılık ve Ormancılık', 4),
  ('Sanayi, Ulaşım ve Ticaret', 5), ('Bölgeler', 6),
  ('Türkiye''nin Jeopolitik Konumu', 7)
) as t(name, ord);

with s as (
  insert into library_subjects (exam_type, name, order_index) values ('KPSS', 'Vatandaşlık', 6) returning id
)
insert into library_topics (subject_id, name, order_index)
select s.id, t.name, t.ord from s, (values
  ('Hukukun Temel Kavramları', 1),
  ('Devlet Şekilleri ve Yönetim Biçimleri', 2),
  ('Anayasa Hukukuna Giriş ve Türk Anayasa Tarihi', 3),
  ('Temel Hak ve Ödevler', 4), ('Yasama', 5),
  ('Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)', 6), ('Yargı', 7),
  ('İdare Hukukuna Giriş ve Türk İdari Teşkilatı', 8),
  ('Uluslararası Kuruluşlar', 9)
) as t(name, ord);
