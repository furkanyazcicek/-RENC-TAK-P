# Konu kütüphanesi: paketli anlatımı eksik başlıklar

**Tarih:** 26 Eylül 2026

Bu liste, uygulamanın yerel konu ağacı ile `src/content/lessons/index.js` içindeki paketli konu anlatımlarının **aynı sınav, ders ve konu adıyla** eşleşmesine göre çıkarıldı. Kaynaklar: `supabase/seed_library_curriculum.sql`, `supabase/seed_library_curriculum_v2.sql`, `supabase/migration_lgs_konu_tamamlama.sql`, `src/data/highSchoolCurriculum.js`. PDF/ham bilgi notları ve soru setleri konu anlatımı sayılmadı.

**Kapsam sınırı:** Canlı veritabanındaki öğretmen eklemeleri ve oturum gerektiren notlar doğrulanamadı. Aşağıdaki “eksik”, yerel uygulama paketinde eşleşen yapılandırılmış anlatım bulunmadığı anlamındadır; canlıdaki bütün içeriklerin kesinlikle boş olduğu anlamına gelmez.

## Genel görünüm

| Koleksiyon | Yerel modelde konu | Paketli anlatımı olan | Paketli anlatımı olmayan |
|---|---:|---:|---:|
| LGS | 54 | 29 | 25 |
| TYT | 122 | 122 | 0 |
| AYT | 118 | 14 | 104 |
| KPSS | 53 | 0 | 53 |
| 9. sınıf | 43 | 5 | 38 |
| 10. sınıf | 52 | 12 | 40 |
| 11. sınıf | 46 | 6 | 40 |
| 12. sınıf | 42 | 6 | 36 |

LGS toplamı, veritabanı konularına ek olarak uygulamada görünür hâle gelen üç Türkçe konusunu içerir. Sınıf koleksiyonları mevcut sınav konularına ad eşleşmesiyle bağlanır; aşağıdaki sınıf başlıklarından bazıları ilgili bir TYT/AYT dersinin farklı adlı içeriğine kavramsal olarak yakın olabilir.

## LGS: eksik başlıklar

### Matematik (6/8)

- Kareköklü İfadeler
- Veri Analizi
- Olasılık
- Cebirsel İfadeler ve Özdeşlikler
- Doğrusal Denklemler
- Eşitsizlikler

### Geometri (4/4)

- Üçgenler
- Eşlik ve Benzerlik
- Dönüşüm Geometrisi
- Geometrik Cisimler

### İngilizce (10/10)

- Friendship
- Teen Life
- In the Kitchen
- On the Phone
- The Internet
- Adventures
- Tourism
- Chores
- Science
- Natural Forces

### Din Kültürü ve Ahlak Bilgisi (5/5)

- Kader İnancı
- Zekat ve Sadaka
- Din ve Hayat
- Hz. Muhammed'in Örnekliği
- Kur'an-ı Kerim ve Özellikleri

`Atatürk'ün Ölümü ve Sonrası` başlığındaki kesme işareti uyumsuzluğu giderildi; var olan üç anlatım artık veritabanındaki konu adıyla eşleşiyor. `Çarpanlar ve Katlar` ile `Üslü İfadeler` anlatımları da eklendi.

LGS Türkçe için `Anlatım Bozuklukları`, `Cümle Türleri`, `Görsel Okuma` anlatımları paketlidir ve kütüphanede görünür. Veritabanına eklenmelerini sağlayan geçişin canlıda çalışıp çalışmadığı ayrıca doğrulanamadı.

## TYT

Yerel konu ağacındaki 122 başlığın tamamı paketli anlatıma bağlı.

## AYT: eksik başlıklar

### Matematik (12/12)

- Fonksiyonlar (İleri)
- Polinomlar
- İkinci Dereceden Denklemler
- Karmaşık Sayılar
- Eşitsizlikler (İleri)
- Parabol
- Trigonometri
- Logaritma
- Diziler
- Limit ve Süreklilik
- Türev
- İntegral

### Geometri (6/6)

- Üçgende Trigonometri
- Çemberde Açı ve Uzunluk
- Analitik Geometri (Doğru - Çember)
- Vektörler
- Uzay Geometri (Katı Cisimler İleri)
- Dönüşümler

### Edebiyat (12/12)

- Anlam Bilgisi
- Söz Sanatları
- Şiir Bilgisi
- Edebi Akımlar
- İslamiyet Öncesi Türk Edebiyatı
- Halk Edebiyatı
- Divan Edebiyatı
- Tanzimat Edebiyatı
- Servet-i Fünun ve Fecr-i Ati
- Milli Edebiyat
- Cumhuriyet Dönemi Türk Edebiyatı
- Dünya Edebiyatı

### Fizik (16/16)

- Vektörler
- Bağıl Hareket
- Newton'un Hareket Yasaları
- Bir Boyutta Sabit İvmeli Hareket
- Atışlar
- İş, Güç ve Enerji
- Elektrik Alan ve Potansiyel
- Manyetik Alan
- İndüksiyon
- Alternatif Akım
- Çembersel Hareket
- Kütle Çekim ve Kepler Yasaları
- Basit Harmonik Hareket
- Dalga Mekaniği
- Atom Fiziğine Giriş ve Radyoaktivite
- Modern Fizik

### Kimya (13/13)

- Kimya Bilimi
- Atom ve Periyodik Sistem
- Gazlar
- Sıvı Çözeltiler ve Çözünürlük
- Kimyasal Tepkimelerde Enerji
- Kimyasal Tepkimelerde Hız
- Kimyasal Tepkimelerde Denge
- Asit-Baz Dengesi
- Çözünürlük Dengesi
- Elektrokimya
- Karbon Kimyasına Giriş
- Organik Kimya
- Enerji Kaynakları ve Bilimsel Gelişmeler

### Tarih (11/11)

- Türk-İslam Devletlerinde Toplum ve Ekonomi
- Türkiye Tarihi (11-13. Yüzyıl)
- Beylikten Devlete Osmanlı Medeniyeti
- Dünya Gücü Osmanlı Devleti
- Değişen Dünya Dengeleri Karşısında Osmanlı Siyaseti
- Uluslararası İlişkilerde Denge Stratejisi
- XX. Yüzyıl Başlarında Osmanlı Devleti ve Dünya
- Milli Mücadele
- Atatürkçülük ve Türk İnkılabı
- İki Savaş Arası Dönemde Türkiye ve Dünya
- II. Dünya Savaşı Sonrası Dünya ve Türkiye

### Coğrafya (10/10)

- Biyoçeşitlilik
- Ekosistem
- Nüfus Politikaları
- Şehirler ve Etki Alanı
- Türkiye Ekonomisi
- Türkiye'de Tarım, Sanayi ve Ticaret
- Bölgeler ve Ülkeler
- Küresel Ortam: Bölgeler ve Ülkeler
- Çevre ve Toplum
- Doğal Afetler

### Felsefe Grubu (Felsefe, Psikoloji, Sosyoloji, Mantık) (16/16)

- Felsefeyle Tanışma
- Bilgi Felsefesi
- Bilim Felsefesi
- Ahlak Felsefesi
- Din, Sanat ve Siyaset Felsefesi
- Psikoloji Bilimini Tanıma
- Psikolojinin Temel Süreçleri
- Öğrenme, Bellek, Düşünme
- Ruh Sağlığının Temelleri
- Sosyolojiye Giriş
- Birey ve Toplum
- Toplumsal Yapı
- Toplumsal Değişme ve Gelişme
- Mantığa Giriş
- Klasik Mantık
- Mantık ve Dil

### Din Kültürü ve Ahlak Bilgisi (8/8)

- İnanç
- İbadet
- Gençlik, Din ve Değerler
- Hint ve Çin Dinleri
- Yahudilik ve Hristiyanlık
- İslam Düşüncesinde Yorumlar
- Güncel Dini Meseleler
- Hukuki ve Ahlaki Boyutuyla Aile

## KPSS: eksik başlıklar

### Matematik (14/14)

- Temel Kavramlar
- Sayı Basamakları
- Bölme ve Bölünebilme
- OBEB - OKEK
- Rasyonel Sayılar
- Basit Eşitsizlikler
- Mutlak Değer
- Üslü - Köklü Sayılar
- Çarpanlara Ayırma
- Oran - Orantı
- Problemler
- Kümeler
- Permütasyon - Kombinasyon - Olasılık
- İstatistik ve Grafik Yorumlama

### Geometri (5/5)

- Temel Kavramlar
- Üçgenler
- Çokgenler
- Çember ve Daire
- Analitik Geometri (Temel)

### Türkçe (9/9)

- Sözcükte Anlam
- Cümlede Anlam
- Paragraf
- Ses Bilgisi
- Yapı Bilgisi
- Cümlenin Öğeleri
- Anlatım Bozuklukları
- Yazım Kuralları
- Noktalama İşaretleri

### Tarih (9/9)

- İlk ve Orta Çağlarda Türk Tarihi
- İslamiyet ve Türkler
- Türkiye Selçuklu Devleti
- Osmanlı Kuruluş ve Yükseliş Dönemi
- Osmanlı Duraklama ve Gerileme Dönemi
- XX. Yüzyılda Osmanlı Devleti
- Milli Mücadele Dönemi
- Atatürk İlke ve İnkılapları
- Atatürk Sonrası Türkiye ve Dünya

### Coğrafya (7/7)

- Türkiye'nin Yer Şekilleri
- İklim ve Bitki Örtüsü
- Nüfus ve Yerleşme
- Tarım, Hayvancılık ve Ormancılık
- Sanayi, Ulaşım ve Ticaret
- Bölgeler
- Türkiye'nin Jeopolitik Konumu

### Vatandaşlık (9/9)

- Hukukun Temel Kavramları
- Devlet Şekilleri ve Yönetim Biçimleri
- Anayasa Hukukuna Giriş ve Türk Anayasa Tarihi
- Temel Hak ve Ödevler
- Yasama
- Yürütme (Cumhurbaşkanı ve Bakanlar Kurulu)
- Yargı
- İdare Hukukuna Giriş ve Türk İdari Teşkilatı
- Uluslararası Kuruluşlar

## 9–12. sınıf koleksiyonları: anlatıma bağlanmayan başlıklar

Bu başlıklar sınav ağacından ad eşleşmesiyle içerik alır. Eşleşen bağlantı yoksa ilgili sınıf sayfasında paketli anlatım görünmez.

### 9. sınıf

**Matematik (7/7):** Sayılar; Nicelikler ve Değişimler; Geometrik Şekiller; Eşlik ve Benzerlik; Algoritma ve Bilişim; İstatistiksel Araştırma Süreci; Veriden Olasılığa.

**Fizik (4/4):** Fizik Bilimi ve Kariyer Keşfi; Kuvvet ve Hareket; Akışkanlar; Enerji.

**Kimya (3/3):** Etkileşim; Çeşitlilik; Sürdürülebilirlik.

**Biyoloji (2/2):** Yaşam; Organizasyon.

**Türk Dili ve Edebiyatı (4/4):** Sözün İnceliği; Anlam Arayışı; Anlamın Yapı Taşları; Dilin Zenginliği.

**Tarih (3/3):** Geçmişin İnşa Sürecinde Tarih; Eski Çağ Medeniyetleri; Orta Çağ Medeniyetleri.

**Coğrafya (7/7):** Coğrafyanın Doğası; Mekânsal Bilgi Teknolojileri; Doğal Sistemler ve Süreçler; Beşerî Sistemler ve Süreçler; Ekonomik Faaliyetler ve Etkileri; Afetler ve Sürdürülebilir Çevre; Bölgeler, Ülkeler ve Küresel Bağlantılar.

**İngilizce (8/8):** School Life; Classroom Life; Personal Life: Physical Appearance & Personality; Family Life; Life in the House & Neighbourhood; Life in the City & Country; Life in the World & Nature; Life in the Universe & Future.

### 10. sınıf

**Matematik (7/7):** Geometrik Şekiller; İstatistiksel Araştırma Süreci; Sayılar; Nicelikler ve Değişimler; Sayma, Algoritma ve Bilişim; Analitik İnceleme; Veriden Olasılığa.

**Fizik (3/4):** Kuvvet ve Hareket; Enerji; Elektrik.

**Kimya (3/3):** Etkileşim; Çeşitlilik; Sürdürülebilirlik.

**Biyoloji (2/2):** Enerji; Ekoloji.

**Türk Dili ve Edebiyatı (4/4):** Sözün Ezgisi; Kelimelerin Ritmi; Dünden Bugüne; Nesillerin Mirası.

**Tarih (3/3):** Türkistan’dan Türkiye’ye (1040-1299); Beylikten Devlete Osmanlı (1299-1453); Cihan Devleti Osmanlı (1453-1683).

**Coğrafya (7/7):** Coğrafyanın Doğası; Mekânsal Bilgi Teknolojileri; Doğal Sistemler ve Süreçler; Beşerî Sistemler ve Süreçler; Ekonomik Faaliyetler ve Etkileri; Afetler ve Sürdürülebilir Çevre; Bölgeler, Ülkeler ve Küresel Bağlantılar.

**Felsefe (3/9):** Felsefenin Doğası; Felsefe, Mantık ve Argümantasyon; Estetik ve Sanat Felsefesi.

**İngilizce (8/8):** School Life & Education; Classroom Life & Learning; Personal Life & Well-Being; Family Life & Home; Life in the Neighbourhood, City & Social Life; Life in the World & Culture; Life in Nature & Global Problems; Life in the Universe & the Future.

### 11. sınıf

**Matematik (5/5):** İstatistiksel Araştırma Süreci; Geometrik Şekiller; Nicelikler ve Değişimler (1); Nicelikler ve Değişimler (2); Nicelikler ve Değişimler (3).

**Fizik (2/3):** Kuvvet ve Hareket; Elektrik ve Manyetizma.

**Kimya (3/3):** Etkileşim; Çeşitlilik; Sürdürülebilirlik.

**Biyoloji (2/2):** Tepki; Homeostazi.

**Türk Dili ve Edebiyatı (4/4):** Bir Diyeceğim Var!; Kültür Yolculuğu; Yaşamın İzinde; Hayatın Aynası.

**Tarih (3/3):** Değişen Dünyada Osmanlı Devleti (1683-1789); Dönüşüm Sürecinde Osmanlı (1789-1908); Savaşlar Sarmalında Osmanlı (1908-1918).

**Coğrafya (7/7):** Coğrafyanın Doğası; Mekânsal Bilgi Teknolojileri; Doğal Sistemler ve Süreçler; Beşerî Sistemler ve Süreçler; Ekonomik Faaliyetler ve Etkileri; Afetler ve Sürdürülebilir Çevre; Bölgeler, Ülkeler ve Küresel Bağlantılar.

**Felsefe (6/6):** Çevre Sorunları ve Felsefe; Teknoloji ve Hayat; Akıl ve İnanç; Edebiyat ve Felsefe; Hayatın Anlamı; Hukuk ve Felsefe.

**İngilizce (8/8):** School Life & Education; Classroom Life & Learning; Personal Life & Well-Being; Family Life & Home; Life in the Neighbourhood, City & Social Life; Life in the World & Culture; Life in Nature & Global Problems; Life in the Universe & Future.

### 12. sınıf

**Matematik (8/8):** Nicelikler ve Değişimler (1); Nicelikler ve Değişimler (2); Geometrik Şekiller; Geometrik Cisimler; Değişimin Matematiği (1); Değişimin Matematiği (2); Değişimin Matematiği (3); Hazır Veriler Üzerinde Çalışma.

**Fizik (3/4):** Kuvvet ve Hareket; Enerji; Madde ve Doğası.

**Kimya (3/3):** Etkileşim; Çeşitlilik; Sürdürülebilirlik.

**Biyoloji (2/2):** Üreme; Gen.

**Türk Dili ve Edebiyatı (4/4):** Benim Yolculuğum; Toplumun Ahengi; Hayatın Dengesi; Hayalimdeki Yarın.

**T.C. İnkılap Tarihi ve Atatürkçülük (3/3):** Modern Türk Devletinin Doğuşu; Türk İnkılabı ve Atatürkçülük; II. Dünya Savaşı’ndan Küreselleşme Sürecine Türkiye.

**Coğrafya (7/7):** Coğrafyanın Doğası; Mekânsal Bilgi Teknolojileri; Doğal Sistemler ve Süreçler; Beşerî Sistemler ve Süreçler; Ekonomik Faaliyetler ve Etkileri; Afetler ve Sürdürülebilir Çevre; Bölgeler, Ülkeler ve Küresel Bağlantılar.

**İngilizce (6/6):** School Life, Classroom Life & Education; Personal Life & Well-Being; Family Life & Home; City & Social Life; Life in the Cultural and Natural World; Life in the Universe & Future.
