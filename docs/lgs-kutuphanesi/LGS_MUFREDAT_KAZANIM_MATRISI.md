# LGS Ders Kütüphanesi — Müfredat ve Kazanım Matrisi

> Dayanak: `LGS_KAYNAK_KAYDI.md`. Kazanım metinleri MEB öğretim programlarından birebirdir.
> Bu dosya içerik üretiminin sözleşmesidir: bir ders notu ancak buradaki bir satıra
> bağlanabiliyorsa yazılır, bir kazanım ancak burada "tamamlandı" işaretliyse bitmiş sayılır.

**Hedef sınav:** 2027 LGS · **Kohort:** 2026-2027 8. sınıf · **Program:** 2018/2019 MEB programları
**Son doğrulama:** 18 Eylül 2026 · **Türkçe kapsamı 18.09.2026 tarihinde %100 tamamlandı**

**Durum kodları:** `planlandı` · `yazılıyor` · `doğrulandı` (testler geçti, önizleme görüldü) · `tamamlandı` · `kapsam dışı` (gerekçeli)

---

## 1. Sıra ve kapı kuralı

1. **Türkçe** → 2. **Fen Bilimleri** → 3. **T.C. İnkılap Tarihi ve Atatürkçülük**

Bir dersin bütün kazanımları `tamamlandı` olmadan sonraki derse geçilmez. Bu kural
`scripts/test-lgs-lessons.mjs` içinde makine tarafından da denetlenir.

---

# 2. TÜRKÇE

**LGS'deki yeri:** Birinci oturum (sözel), **20 soru**.
**Resmî öğrenme alanları:** T.8.1 Dinleme/İzleme · T.8.2 Konuşma · T.8.3 Okuma · T.8.4 Yazma
**Toplam kazanım:** 76

LGS yazılı ve çoktan seçmeli bir sınavdır. Bu yüzden 76 kazanımın tamamı sınavda
**doğrudan** ölçülemez: dinleme, konuşma ve üretimsel yazma kazanımları performansa
dayalıdır. Ancak bu kazanımların **bilgi içeriği** (örneğin düşünceyi geliştirme yolları,
medya metinlerinin amacı) okuma kazanımlarıyla örtüşür ve ilgili ders notuna bağlanır.

## 2.1. Ders notu planı (Türkçe)

| # | Kütüphane konusu | Ders notu başlığı | `slug` | Kazanımlar | Durum |
|---|---|---|---|---|---|
| 1 | Sözcükte Anlam | Bağlamda Sözcük Anlamı: Kanıttan Yoruma ★ **Gold Standard** | `lgs-turkce-baglamda-sozcuk-anlami` | T.8.3.5, T.8.1.2 | tamamlandı |
| 2 | Sözcükte Anlam | Deyim, Atasözü ve Özdeyiş: Metne Ne Katar? | `lgs-turkce-deyim-atasozu-ozdeyis` | T.8.3.6, T.8.4.7 | tamamlandı |
| 3 | Cümlede Anlam | Cümlede Anlam İlişkileri: Neden, Amaç, Koşul, Karşılaştırma | `lgs-turkce-cumlede-anlam-iliskileri` | T.8.3.25 | tamamlandı |
| 4 | Cümlede Anlam | Öznel–Nesnel Yargı ve Yazarın Bakış Açısı | `lgs-turkce-oznel-nesnel-bakis-acisi` | T.8.3.21, T.8.3.24 | tamamlandı |
| 5 | Paragrafta Anlam | Konu, Ana Fikir, Yardımcı Fikir ve Başlık | `lgs-turkce-konu-ana-fikir-baslik` | T.8.3.16, T.8.3.17, T.8.3.18, T.8.3.19, T.8.3.13 | tamamlandı |
| 6 | Paragrafta Anlam | Paragrafın Yapısı ve Akışı | `lgs-turkce-paragraf-yapisi-ve-akisi` | T.8.3.10, T.8.3.12, T.8.3.28, T.8.3.4 | tamamlandı |
| 7 | Paragrafta Anlam | Anlatım Biçimleri | `lgs-turkce-anlatim-bicimleri` | T.8.3.11, T.8.4.9 | tamamlandı |
| 8 | Paragrafta Anlam | Düşünceyi Geliştirme Yolları | `lgs-turkce-dusunceyi-gelistirme-yollari` | T.8.3.34, T.8.1.12 | tamamlandı |
| 9 | Paragrafta Anlam | Metinler Arası Karşılaştırma ve Çıkarım | `lgs-turkce-metinler-arasi-karsilastirma` | T.8.3.23, T.8.3.14, T.8.3.33 | tamamlandı |
| 10 | Söz Sanatları | Söz Sanatları: Benzetme, Kişileştirme, Konuşturma, Karşıtlık, Abartma | `lgs-turkce-soz-sanatlari` | T.8.3.7 | tamamlandı |
| 11 | Fiilimsiler | Fiilimsiler: Cümledeki İşlevi | `lgs-turkce-fiilimsiler` | T.8.3.9 | tamamlandı |
| 12 | Cümlenin Öğeleri | Cümlenin Ögeleri | `lgs-turkce-cumlenin-ogeleri` | T.8.4.18 | tamamlandı |
| 13 | Fiilde Çatı | Fiilde Çatı: Anlama Katkısı | `lgs-turkce-fiilde-cati` | T.8.4.20 | tamamlandı |
| 14 | Yazım Kuralları | Yazım Kuralları | `lgs-turkce-yazim-kurallari` | T.8.4.16 (+ alt sınıf kural tabanı) | tamamlandı |
| 15 | Noktalama İşaretleri | Noktalama İşaretleri | `lgs-turkce-noktalama-isaretleri` | T.8.4.16 (+ alt sınıf kural tabanı), T.8.3.1 | tamamlandı |
| 16 | Metin Türleri | Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan | `lgs-turkce-metin-turleri` | T.8.3.26, T.8.3.20, T.8.3.2 | tamamlandı |
| 17 | Metin Türleri | Medya Metinleri ve Bilgi Kaynağının Güvenilirliği | `lgs-turkce-medya-metinleri-ve-bilgi-guvenilirligi` | T.8.3.29, T.8.3.30, T.8.3.31, T.8.1.11 | tamamlandı |
| 18 | **Anlatım Bozuklukları** *(yeni konu)* | Anlatım Bozuklukları: Dil Bilgisi Yönünden | `lgs-turkce-anlatim-bozukluklari` | T.8.3.8, T.8.4.16a | tamamlandı |
| 19 | **Cümle Türleri** *(yeni konu)* | Cümle Türleri | `lgs-turkce-cumle-turleri` | T.8.4.19 | tamamlandı |
| 20 | **Görsel Okuma** *(yeni konu)* | Görsel, Tablo ve Grafik Okuma | `lgs-turkce-gorsel-tablo-grafik-okuma` | T.8.3.27, T.8.3.32, T.8.3.35 | tamamlandı |

★ *Yeni konu* işaretli üç başlık kütüphane konu ağacında yok. Bkz. §2.5 fark analizi.

## 2.2. T.8.3 OKUMA — kazanım matrisi

| Kod | Resmî kazanım ifadesi | Açıklama / sınır | Ön koşul | LGS'de ölçülen beceri | Sık yapılan hata | Ders | Durum |
|---|---|---|---|---|---|---|---|
| T.8.3.1 | Noktalama işaretlerine dikkat ederek sesli ve sessiz okur. | — | 7. sınıf akıcı okuma | Dolaylı: noktalamanın anlamı değiştirmesi | Noktalamayı süs sanma | 15 | tamamlandı |
| T.8.3.2 | Metni türün özelliklerine uygun biçimde okur. | Edebî değeri olan şiir ve kısa yazılar | Metin türü bilgisi | Dolaylı | — | 16 | tamamlandı |
| T.8.3.3 | Farklı yazı karakterleri ile yazılmış yazıları okur. | — | — | Sınıf içi beceri | — | *kapsam dışı* | kapsam dışı — çoktan seçmeli sınavda ölçülemez |
| T.8.3.4 | Okuma stratejilerini kullanır. | Göz atarak, özetleyerek, not alarak, tartışarak, eleştirerek okuma | — | Soru çözüm hızı ve doğruluğu | Her paragrafı aynı hızda okumak | 6 | tamamlandı |
| **T.8.3.5** | **Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.** | a) Sözlük, atasözü ve deyimler sözlüğü kullanılabilir. b) Öğrencinin kendi sözlüğünü oluşturması teşvik edilir. | Sözcük, cümle kavramı | Bağlamdan anlam çıkarma, yakın seçenekleri kanıtla eleme | Sözlükteki ilk anlamı otomatik seçmek | **1 ★** | **tamamlandı** |
| T.8.3.6 | Deyim, atasözü ve özdeyişlerin metne katkısını belirler. | — | Sözcükte anlam | Kalıp sözün metindeki işlevini görme | Deyimi ezberden tanımlamak, metne katkısını atlamak | 2 | tamamlandı |
| T.8.3.7 | Metindeki söz sanatlarını tespit eder. | Benzetme (teşbih), kişileştirme (teşhis), konuşturma (intak), karşıtlık (tezat), abartma (mübalağa) — **yalnız bu beşi** | Mecaz anlam | Sanatı bağlamda tanıma | Her mecazı benzetme sanmak; program dışı sanat aramak | 10 | tamamlandı |
| T.8.3.8 | Metindeki anlatım bozukluklarını belirler. | **Dil bilgisi yönünden** anlatım bozuklukları üzerinde durulur | Cümlenin ögeleri, çatı | Bozuk cümleyi ve kaynağını görme | Anlama dayalı bozuklukla karıştırmak (o 7. sınıf) | 18 | tamamlandı |
| T.8.3.9 | Fiilimsilerin cümledeki işlevlerini kavrar. | Türleri fark ettirilir, **ekler ezberletilmez** | Fiil, isim, sıfat, zarf | İşlev ve yan cümle kurma | Ek listesi ezberi; "-me/-ma" olumsuzluk ekiyle karıştırma | 11 | tamamlandı |
| T.8.3.10 | Geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısını değerlendirir. | Oysaki, başka bir deyişle, özellikle, kısaca, böylece, ilk olarak, son olarak | — | Paragraf akışını izleme | Bağlacı yalnız "bağlaç" diye etiketlemek | 6 | tamamlandı |
| T.8.3.11 | Metindeki anlatım biçimlerini belirler. | — | Metin türü | Açıklayıcı/öyküleyici/betimleyici/tartışmacı ayrımı | Betimleme ile öykülemeyi karıştırmak | 7 | tamamlandı |
| T.8.3.12 | Görsel ve başlıktan hareketle okuyacağı metnin konusunu tahmin eder. | — | — | Ön tahmin | — | 6 | tamamlandı |
| T.8.3.13 | Okuduklarını özetler. | — | Ana/yardımcı fikir | Öz çıkarma | Özet yerine ilk cümleyi almak | 5 | tamamlandı |
| T.8.3.14 | Metinle ilgili soruları cevaplar. | **Metin içi ve metin dışı anlam ilişkisi** kurulur | — | Metinden kanıt gösterme | Metinde olmayanı "mantıklı" diye seçmek | 9 | tamamlandı |
| T.8.3.15 | Metinle ilgili sorular sorar. | — | — | Sınıf içi üretim | — | *kapsam dışı* | kapsam dışı — üretimsel, çoktan seçmeli ölçmede yok |
| T.8.3.16 | Metnin konusunu belirler. | — | — | Konu–ana fikir ayrımı | Konuyu ana fikir sanmak | 5 | tamamlandı |
| T.8.3.17 | Metnin ana fikrini/ana duygusunu belirler. | — | Konu | Ana fikri metnin tamamından çıkarma | Tek cümleye bakıp karar vermek | 5 | tamamlandı |
| T.8.3.18 | Metindeki yardımcı fikirleri belirler. | — | Ana fikir | Destekleyici yargı ayrımı | Yardımcı fikri ana fikir sanmak | 5 | tamamlandı |
| T.8.3.19 | Metnin içeriğine uygun başlık/başlıklar belirler. | — | Ana fikir | Kapsam denetimi | Fazla dar / fazla geniş başlık seçmek | 5 | tamamlandı |
| T.8.3.20 | Okuduğu metinlerdeki hikâye unsurlarını belirler. | Olay örgüsü, mekân, zaman, şahıs ve varlık kadrosu, anlatıcı | — | Anlatı çözümleme | Anlatıcı ile yazarı karıştırmak | 16 | tamamlandı |
| T.8.3.21 | Metnin içeriğini yorumlar. | a) Yazarın bakış açısı b) Öznel ve nesnel yaklaşımlar c) Örnek ve ayrıntılara atıf | — | Öznel/nesnel ayrımı, bakış açısı | Kanıtlanabilir yargıyı öznel sanmak | 4 | tamamlandı |
| T.8.3.22 | Metinde ele alınan sorunlara farklı çözümler üretir. | — | — | Sınıf içi üretim | — | *kapsam dışı* | kapsam dışı — üretimsel |
| T.8.3.23 | Metinler arasında karşılaştırma yapar. | Aynı metnin çeviri, farklı baskı vb. özellikleri | — | İki metni ortak eksende okuma | Tek metne bakıp genelleme | 9 | tamamlandı |
| T.8.3.24 | Metindeki gerçek ve kurgusal unsurları ayırt eder. | — | — | Gerçeklik denetimi | Gerçekçi anlatımı "gerçek" sanmak | 4 | tamamlandı |
| **T.8.3.25** | **Okudukları ile ilgili çıkarımlarda bulunur.** | Neden-sonuç, amaç-sonuç, koşul, karşılaştırma, benzetme, örneklendirme, abartma, nesnel, öznel ve duygu belirten ifadeler | Cümle yapısı | Cümledeki anlam ilişkisini adlandırma | Amaç-sonuç ile neden-sonucu karıştırmak | 3 | tamamlandı |
| T.8.3.26 | Metin türlerini ayırt eder. | a) Fıkra (köşe yazısı), makale, deneme, roman, destan b) **Ayrıntılı bilgi verilmemelidir** | — | Tür ipucunu metinden okuma | Ansiklopedik tür tanımı ezberi | 16 | tamamlandı |
| T.8.3.27 | Görsellerle ilgili soruları cevaplar. | a) Çizgi roman ve karikatür yorumu b) Görsel yorumcuların haberi nasıl ilettiği | — | Görselden çıkarım | Karikatürü yalnız "komik" okumak | 20 | tamamlandı |
| T.8.3.28 | Metinde önemli noktaların vurgulanış biçimlerini kavrar. | Altını çizme, koyu/italik yazma, renklendirme, farklı punto/font | — | Biçimsel vurgunun işlevi | Vurguyu süs sanmak | 6 | tamamlandı |
| T.8.3.29 | Medya metinlerini analiz eder. | Amaçlar: kültür aktarma, olay yorumlama, bilgilendirme, eğlendirme, ikna etme | — | Metnin amacını belirleme | Her medya metnini "bilgilendirme" saymak | 17 | tamamlandı |
| T.8.3.30 | Bilgi kaynaklarını etkili bir şekilde kullanır. | — | — | Kaynak seçimi | — | 17 | tamamlandı |
| T.8.3.31 | Bilgi kaynaklarının güvenilirliğini sorgular. | a) Blog ve şahsi sayfaların güvenilirliği b) "edu" ve "gov" uzantılı siteler | — | Güvenilirlik ölçütü uygulama | Çok paylaşılanı güvenilir sanmak | 17 | tamamlandı |
| **T.8.3.32** | **Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.** | — | Sayı okuma | Veriden çıkarım, veriyle desteklenmeyeni eleme | Grafikte olmayanı yorumlamak | 20 | tamamlandı |
| T.8.3.33 | Edebî eserin yazılı metni ile medya sunumunu karşılaştırır. | Kahraman, mekân, zaman, olay yönünden | — | Uyarlama karşılaştırması | — | 9 | tamamlandı |
| **T.8.3.34** | **Okuduklarında kullanılan düşünceyi geliştirme yollarını belirler.** | — | Anlatım biçimleri | Tanımlama, örneklendirme, tanık gösterme, sayısal veri, karşılaştırma, benzetme ayrımı | Tanık gösterme ile örneklendirmeyi karıştırmak | 8 | tamamlandı |
| T.8.3.35 | Metindeki iş ve işlem basamaklarını kavrar. | Kullanım kılavuzları inceletilir | — | Yönerge okuma | Basamak sırasını atlamak | 20 | tamamlandı |

## 2.3. T.8.4 YAZMA — LGS'de ölçülen kazanımlar

| Kod | Resmî kazanım ifadesi | Açıklama / sınır | Ders | Durum |
|---|---|---|---|---|
| T.8.4.7 | Yazılarını zenginleştirmek için atasözleri, deyimler ve özdeyişler kullanır. | — | 2 | tamamlandı |
| T.8.4.9 | Yazılarında anlatım biçimlerini kullanır. | — | 7 | tamamlandı |
| **T.8.4.16** | **Yazdıklarını düzenler.** | a) **Dil bilgisine dayalı anlatım bozuklukları** bakımından gözden geçirme b) **Metinde yer alan yazım ve noktalama kuralları ile sınırlı tutulur** | 14, 15, 18 | tamamlandı |
| **T.8.4.18** | **Cümlenin ögelerini ayırt eder.** | — | 12 | tamamlandı |
| **T.8.4.19** | **Cümle türlerini tanır.** | **Kavramsal tanımlamalara girilmez** | 19 | tamamlandı |
| **T.8.4.20** | **Fiillerin çatı özelliklerinin anlama olan katkısını kavrar.** | **Kavram tanımlarına girilmeden anlamsal farklılıklara değinilir** | 13 | tamamlandı |

**Kapsam dışı (gerekçeli):** T.8.4.1 (şiir yazar), T.8.4.2 (bilgilendirici metin yazar),
T.8.4.3 (hikâye edici metin yazar), T.8.4.4 (yazma stratejileri), T.8.4.5 (grafik/tablo
kullanır), T.8.4.6 (işlem basamaklarına göre yazar), T.8.4.8 (mizahi ögeler), T.8.4.10
(yabancı kelimelerin Türkçesi), T.8.4.11 (form doldurur), T.8.4.12 (kısa metinler yazar),
T.8.4.13 (başlık belirler), T.8.4.14 (araştırma sonucu sunar), T.8.4.15 (geçiş ve bağlantı
ifadeleri kullanır), T.8.4.17 (yazdıklarını paylaşır).
**Gerekçe:** Bunlar **üretimsel yazma** kazanımlarıdır; öğrencinin metin üretmesini ister ve
çoktan seçmeli merkezî sınavda ölçülemez. Bilgi tarafları ilgili okuma derslerinde işlenir
(örn. T.8.4.15'in içeriği Ders 6'da geçiş ifadeleri olarak, T.8.4.13'ün içeriği Ders 5'te
başlık belirleme olarak). Yazdırılabilir çalışma notlarında bu kazanımlara kalem-kâğıt
etkinliği olarak yer verilebilir.

## 2.4. T.8.1 ve T.8.2 — Dinleme/İzleme ve Konuşma

| Kod | Kazanım | Karar |
|---|---|---|
| T.8.1.2 | Dinlediklerinde/izlediklerinde geçen bilmediği kelimelerin anlamını tahmin eder. | **Bağlandı → Ders 1.** Beceri T.8.3.5 ile aynıdır, yalnız kanal farklıdır. |
| T.8.1.11 | Dinledikleri/izledikleri medya metinlerini değerlendirir. | **Bağlandı → Ders 17.** Medya metninin amacı ve kaynağı ortak içeriktir. |
| T.8.1.12 | Dinlediklerinde/izlediklerinde başvurulan düşünceyi geliştirme yollarını tespit eder. | **Bağlandı → Ders 8.** Örneklendirme, tanık gösterme ve sayısal veri ortak içeriktir. |
| T.8.1.1, T.8.1.3–T.8.1.10, T.8.1.13, T.8.1.14 | Dinleme/izleme kazanımları | **Kapsam dışı.** Sesli/görüntülü uyaran ve sınıf içi performans gerektirir; yazılı çoktan seçmeli sınavda ölçülemez. |
| T.8.2.1 – T.8.2.7 | Konuşma kazanımları | **Kapsam dışı.** Sözlü performans kazanımlarıdır. |

## 2.5. Fark analizi — kütüphane konu ağacı vs. resmî program

**Veritabanındaki mevcut LGS Türkçe konuları** (`supabase/seed_library_curriculum_v2.sql`):
Sözcükte Anlam · Cümlede Anlam · Paragrafta Anlam · Söz Sanatları · Fiilimsiler ·
Cümlenin Öğeleri · Fiilde Çatı · Yazım Kuralları · Noktalama İşaretleri · Metin Türleri

### Tespit edilen sorunlar

| # | Sorun | Kanıt | Etki |
|---|---|---|---|
| F1 | **Anlatım Bozuklukları** başlığı yok | T.8.3.8 açık bir 8. sınıf kazanımıdır | Kazanım hiçbir konuya bağlanamıyor |
| F2 | **Cümle Türleri** başlığı yok | T.8.4.19 açık bir 8. sınıf kazanımıdır | Aynı |
| F3 | **Görsel Okuma** başlığı yok | T.8.3.27 ve T.8.3.32 açık kazanımlardır; LGS'de grafik/tablo yorumlama doğrudan sorulur | Aynı |
| F4 | Konu adları resmî öğrenme alanı adları değil | Program "Okuma / Yazma" der; kütüphane LGS çalışma başlıkları kullanır | **Sorun değil.** Öğrencinin aradığı ad budur; kazanım eşlemesi bu matriste tutulduğu sürece bilgi kaybı yoktur. |

> F1–F3'ün kanıtı ayrıca projenin kendi içindedir: `LGS_Turkce_Testleri/` soru bankası
> klasöründe **`Cumle_Turleri`** ve **`Gorsel_Okuma`** klasörleri zaten mevcut. Yani soru
> tarafı bu başlıkları tanıyor, ders notu tarafındaki konu ağacı tanımıyor.

### Çözüm kararı

1. **Mevcut hiçbir konu silinmez, yeniden adlandırılmaz, sırası değiştirilmez.** Canlı
   kütüphanede öğrenci ilerlemesi bu adlara bağlı.
2. Eksik üç başlık **yalnız yoksa eklenir** biçiminde, tekrar çalıştırılabilir bir dosyaya
   yazıldı: `supabase/migration_lgs_konu_tamamlama.sql`. **Canlı veritabanında
   çalıştırılmadı.**
3. "Resmî üniteyi üst konu yapıp alt kazanımları aynı konu içinde sıralı derslere bölmek
   daha güvenli mi?" sorusu değerlendirildi:
   - **Türkçe için cevap: kısmen.** Paragrafta Anlam gibi geniş başlıklar zaten tek konu
     altında 5 sıralı ders olarak bölündü (Ders 5–9). Bu, yeni konu açmadan derinlik
     sağlıyor ve tercih edilen yoldur.
   - **Ancak F1–F3 bu yolla çözülemez:** Anlatım Bozuklukları'nı "Cümlenin Öğeleri" altına
     saklamak müfredat ağacını yanlış gösterir ve öğrenci aradığını bulamaz. Bu üç başlık
     gerçekten eksiktir ve eklenmelidir.
4. Üç yeni konu onaylanana kadar ilgili dersler (18, 19, 20) **yazılır ve testten geçer**,
   fakat veritabanına yazma aşamasında `seed-lessons.mjs` konuyu bulamazsa dersi **atlar**
   (betiğin mevcut güvenlik davranışı). Sessiz bir bozulma oluşmaz.

---

# 3. FEN BİLİMLERİ

**LGS'deki yeri:** İkinci oturum (sayısal), **20 soru**.
**Toplam kazanım:** 61 · **7 ünite** · Program ders saati: 144

Ünite adları veritabanındaki konu ağacı ile **birebir örtüşüyor**; Fen tarafında konu ağacı
düzeltmesi gerekmiyor.

| Ünite | Resmî ad | Konu alanı | Kazanım | Ders saati | Oran |
|---|---|---|---|---|---|
| F.8.1 | Mevsimler ve İklim | Dünya ve Evren | 3 | 14 | %9,7 |
| F.8.2 | DNA ve Genetik Kod | Canlılar ve Yaşam | 13 | 22 | %15,3 |
| F.8.3 | Basınç | Fiziksel Olaylar | 3 | 10 | %6,9 |
| F.8.4 | Madde ve Endüstri | Madde ve Doğası | 17 | 28 | %19,4 |
| F.8.5 | Basit Makineler | Fiziksel Olaylar | 2 | 10 | %6,9 |
| F.8.6 | Enerji Dönüşümleri ve Çevre Bilimi | Canlılar ve Yaşam | 12 | 24 | %16,7 |
| F.8.7 | Elektrik Yükleri ve Elektrik Enerjisi | Fiziksel Olaylar | 11 | 24 | %16,7 |

## 3.1. Ders notu planı (Fen Bilimleri)

| # | Konu | Ders notu başlığı | `slug` | Kazanımlar | Durum |
|---|---|---|---|---|---|
| 1 | Mevsimler ve İklim | Mevsimler Nasıl Oluşur? Eksen Eğikliği ve Birim Yüzeye Düşen Enerji ★ **Gold Standard adayı** | `lgs-fen-mevsimlerin-olusumu` | F.8.1.1.1 | ✅ tamamlandı |
| 2 | Mevsimler ve İklim | İklim ve Hava Olayları: Aynı Şey Değil | `lgs-fen-iklim-ve-hava-olaylari` | F.8.1.2.1, F.8.1.2.2 | ✅ tamamlandı |
| 3 | DNA ve Genetik Kod | DNA'nın Yapısı: Nükleotidden Kromozoma | `lgs-fen-dna-yapisi` | F.8.2.1.1, F.8.2.1.2, F.8.2.1.3 | ✅ tamamlandı |
| 4 | DNA ve Genetik Kod | Kalıtım Kavramları: Gen, Genotip, Fenotip, Baskın, Çekinik | `lgs-fen-kalitim-kavramlari` | F.8.2.2.1 | ✅ tamamlandı |
| 5 | DNA ve Genetik Kod | Çaprazlama, Cinsiyet ve Akraba Evliliği | `lgs-fen-caprazlama-ve-cinsiyet` | F.8.2.2.2, F.8.2.2.3 | ✅ tamamlandı |
| 6 | DNA ve Genetik Kod | Mutasyon, Modifikasyon ve Adaptasyon | `lgs-fen-mutasyon-modifikasyon-adaptasyon` | F.8.2.3.1, F.8.2.3.2, F.8.2.3.3, F.8.2.4.1 | ✅ tamamlandı |
| 7 | DNA ve Genetik Kod | Genetik Mühendisliği ve Biyoteknoloji | `lgs-fen-biyoteknoloji` | F.8.2.5.1, F.8.2.5.2, F.8.2.5.3 | ✅ tamamlandı |
| 8 | Basınç | Katı Basıncı ve Değişkenleri | `lgs-fen-kati-basinci` | F.8.3.1.1 | ✅ tamamlandı |
| 9 | Basınç | Sıvı ve Gaz Basıncı, Günlük Yaşam Uygulamaları | `lgs-fen-sivi-ve-gaz-basinci` | F.8.3.1.2, F.8.3.1.3 | ✅ tamamlandı |
| 10 | Madde ve Endüstri | Periyodik Sistem: Grup, Periyot, Metal–Ametal | `lgs-fen-periyodik-sistem` | F.8.4.1.1, F.8.4.1.2 | ✅ tamamlandı |
| 11 | Madde ve Endüstri | Fiziksel ve Kimyasal Değişim | `lgs-fen-fiziksel-kimyasal-degisim` | F.8.4.2.1, F.8.4.3.1 | ✅ tamamlandı |
| 12 | Madde ve Endüstri | Asitler ve Bazlar: Özellikler, pH, Güvenlik | `lgs-fen-asitler-ve-bazlar` | F.8.4.4.1–F.8.4.4.6 | ✅ tamamlandı |
| 13 | Madde ve Endüstri | Asit Yağmurları | `lgs-fen-asit-yagmurlari` | F.8.4.4.7 | ✅ tamamlandı |
| 14 | Madde ve Endüstri | Maddenin Isı ile Etkileşimi ve Hâl Değişim Grafikleri | `lgs-fen-isi-ve-hal-degisimi` | F.8.4.5.1–F.8.4.5.4 | ✅ tamamlandı |
| 15 | Madde ve Endüstri | Türkiye'de Kimya Endüstrisi | `lgs-fen-turkiyede-kimya-endustrisi` | F.8.4.6.1, F.8.4.6.2 | ✅ tamamlandı |
| 16 | Basit Makineler | Basit Makineler: Kazanç Neyin Kazancı? | `lgs-fen-basit-makineler` | F.8.5.1.1, F.8.5.1.2 | ✅ tamamlandı |
| 17 | Enerji Dönüşümleri ve Çevre Bilimi | Besin Zinciri, Besin Ağı ve Ekoloji Piramidi | `lgs-fen-besin-zinciri-ve-enerji-akisi` | F.8.6.1.1 | ✅ tamamlandı |
| 18 | Enerji Dönüşümleri ve Çevre Bilimi | Fotosentez ve Solunum | `lgs-fen-fotosentez-ve-solunum` | F.8.6.2.1, F.8.6.2.2, F.8.6.2.3 | ✅ tamamlandı |
| 19 | Enerji Dönüşümleri ve Çevre Bilimi | Madde Döngüleri ve Küresel İklim Değişikliği | `lgs-fen-madde-donguleri-ve-iklim` | F.8.6.3.1, F.8.6.3.2, F.8.6.3.3 | ✅ tamamlandı |
| 20 | Enerji Dönüşümleri ve Çevre Bilimi | Sürdürülebilir Kalkınma ve Geri Dönüşüm | `lgs-fen-surdurulebilir-kalkinma` | F.8.6.4.1–F.8.6.4.5 | ✅ tamamlandı |
| 21 | Elektrik Yükleri ve Elektrik Enerjisi | Elektriklenme ve Elektrik Yükleri | `lgs-fen-elektriklenme` | F.8.7.1.1, F.8.7.1.2, F.8.7.1.3 | ✅ tamamlandı |
| 22 | Elektrik Yükleri ve Elektrik Enerjisi | Yüklü Cisimler, Elektroskop ve Topraklama | `lgs-fen-elektroskop-ve-topraklama` | F.8.7.2.1, F.8.7.2.2 | ✅ tamamlandı |
| 23 | Elektrik Yükleri ve Elektrik Enerjisi | Elektrik Enerjisinin Dönüşümü ve Güç Santralleri | `lgs-fen-elektrik-enerjisi-donusumu` | F.8.7.3.1–F.8.7.3.6 | ✅ tamamlandı |

## 3.2. Fen — kazanım listesi ve bağlayıcı sınırlar

> **Program sınırları içerik sınırıdır.** Aşağıdaki "girilmez / değinilmez" ifadeleri ders
> notunda da uygulanır. Matematiksel bağıntı yasaklanmış bir kazanıma formül yazmak, notu
> müfredat dışına çıkarır ve öğrenciyi LGS'de olmayan bir işleme hazırlar.

**F.8.1 Mevsimler ve İklim**
- `F.8.1.1.1` Mevsimlerin oluşumuna yönelik tahminlerde bulunur. *(a: dönme ekseni; b: eksen–dolanma düzlemi ilişkisi; c: birim yüzeye düşen enerji)*
- `F.8.1.2.1` İklim ve hava olayları arasındaki farkı açıklar.
- `F.8.1.2.2` İklim biliminin (klimatoloji) bir bilim dalı olduğunu ve uzmanına iklim bilimci (klimatolog) dendiğini söyler.

**F.8.2 DNA ve Genetik Kod**
- `F.8.2.1.1` Nükleotid, gen, DNA ve kromozom kavramlarını açıklayarak ilişki kurar. *(pürin/pirimidin ayrımına girilmez)*
- `F.8.2.1.2` DNA'nın yapısını model üzerinde gösterir. *(bağ türlerine girilmez; **nükleotid hesaplamaları verilmez**)*
- `F.8.2.1.3` DNA'nın kendini nasıl eşlediğini ifade eder. *("replikasyon" kullanılmaz; **hesaplama sorularına girilmez**)*
- `F.8.2.2.1` Kalıtım ile ilgili kavramları tanımlar. *(gen, fenotip, genotip, saf döl, melez döl, baskın, çekinik)*
- `F.8.2.2.2` Tek karakter çaprazlamaları ile problem çözer ve yorumlar. *(**yalnız bezelye karakterleri**; cinsiyeti babadan gelen eşey kromozomunun belirlediği vurgulanır)*
- `F.8.2.2.3` Akraba evliliklerinin genetik sonuçlarını tartışır.
- `F.8.2.3.1` Örneklerden yola çıkarak mutasyonu açıklar.
- `F.8.2.3.2` Örneklerden yola çıkarak modifikasyonu açıklar.
- `F.8.2.3.3` Mutasyonla modifikasyon arasındaki farklar ile ilgili çıkarımda bulunur.
- `F.8.2.4.1` Canlıların yaşadıkları çevreye uyumlarını gözlem yaparak açıklar. *(adaptasyonların kalıtsal olduğu vurgulanır)*
- `F.8.2.5.1` Genetik mühendisliğini ve biyoteknolojiyi ilişkilendirir. *(ıslah, aşılama, gen aktarımı, klonlama, gen tedavisi)*
- `F.8.2.5.2` Biyoteknolojik uygulamaların yararlı ve zararlı yönlerini tartışır.
- `F.8.2.5.3` Gelecekteki uygulamalar hakkında tahminde bulunur.

**F.8.3 Basınç**
- `F.8.3.1.1` Katı basıncını etkileyen değişkenleri deneyerek keşfeder. *(birim Pascal verilir; **matematiksel bağıntılara girilmez**)*
- `F.8.3.1.2` Sıvı basıncını etkileyen değişkenleri tahmin eder ve test eder. *(gazların da basınç uyguladığı; açık hava basıncı; **bağıntı ve gaz basıncı değişkenleri yok**)*
- `F.8.3.1.3` Katı, sıvı ve gaz basınçlarının günlük yaşam ve teknolojideki uygulamalarına örnek verir. *(Pascal prensibi; ilke ve prensip kavramı)*

**F.8.4 Madde ve Endüstri**
- `F.8.4.1.1` Periyodik sistemde grup ve periyotların nasıl oluşturulduğunu açıklar.
- `F.8.4.1.2` Elementleri metal, yarımetal ve ametal olarak sınıflandırır. *(**element özelliklerine girilmez**; soygazlar üzerinde durulur)*
- `F.8.4.2.1` Fiziksel ve kimyasal değişim farklarını gözlemleyerek açıklar.
- `F.8.4.3.1` Bileşiklerin kimyasal tepkime sonucunda oluştuğunu bilir. *(**formüllü denklem yazılmaz**)*
- `F.8.4.4.1` Asit ve bazların genel özelliklerini ifade eder.
- `F.8.4.4.2` Asit ve bazlara günlük yaşamdan örnekler verir.
- `F.8.4.4.3` Günlük malzemeleri asit-baz ayracı olarak kullanır.
- `F.8.4.4.4` pH değerlerini kullanarak asitlik/bazlık çıkarımı yapar.
- `F.8.4.4.5` Asit ve bazların çeşitli maddeler üzerindeki etkilerini gözlemler.
- `F.8.4.4.6` Temizlik malzemesi kullanımında tedbir alır.
- `F.8.4.4.7` Asit yağmurlarının önlenmesine çözüm önerir.
- `F.8.4.5.1` Isınmanın maddenin cinsine, kütlesine ve/veya sıcaklık değişimine bağlı olduğunu keşfeder. *(**Q=m·c·Δt bağıntısına girilmez**; bağımlı/bağımsız/kontrol edilen değişken örneklerle açıklanır)*
- `F.8.4.5.2` Hâl değiştirme ısısının madde cinsi ve kütleyle ilişkisini keşfeder. *(**matematiksel hesaplama yok**)*
- `F.8.4.5.3` Hâl değişimi ve ısınma grafiğini çizerek yorumlar.
- `F.8.4.5.4` Günlük yaşamdaki hâl değişimleri ile ısı alışverişini ilişkilendirir.
- `F.8.4.6.1` Türkiye'deki kimya endüstrisinin gelişimini araştırır.
- `F.8.4.6.2` Kimya endüstrisindeki meslek dallarını araştırır.

**F.8.5 Basit Makineler**
- `F.8.5.1.1` Basit makinelerin sağladığı avantajları örneklerle açıklar. *(sabit makara, hareketli makara, palanga, kaldıraç, eğik düzlem, çıkrık; **işten kazanç olmadığı vurgulanır**; **matematiksel bağıntılara girilmez**)*
- `F.8.5.1.2` İş kolaylığı sağlayacak bir düzenek tasarlar.

**F.8.6 Enerji Dönüşümleri ve Çevre Bilimi**
- `F.8.6.1.1` Besin zincirindeki üretici, tüketici, ayrıştırıcılara örnek verir. *(**parazit besin zincirlerine değinilmez**; ekoloji piramidinde enerji aktarımı, vücut büyüklüğü, birey sayısı, biyolojik birikim)*
- `F.8.6.2.1` Fotosentezin önemini fark eder. *(**kimyasal denkleme girilmez**; yapay ışıkta da olabileceği)*
- `F.8.6.2.2` Fotosentez hızını etkileyen faktörler hakkında çıkarım yapar. *(ışık rengi, CO₂ miktarı, su miktarı, ışık şiddeti, sıcaklık)*
- `F.8.6.2.3` Canlılarda solunumun önemini belirtir. *(**denkleme girilmez**; bitkilerin gece-gündüz solunumu; **enerji miktarları sayısal verilmez**; ATP'nin yapısına girilmez)*
- `F.8.6.3.1` Madde döngülerini şema üzerinde gösterir.
- `F.8.6.3.2` Madde döngülerinin önemini sorgular.
- `F.8.6.3.3` Küresel iklim değişikliğinin neden ve sonuçlarını tartışır. *(sera etkisi; ekolojik ayak izi; Kyoto Protokolü)*
- `F.8.6.4.1` Kaynak kullanımında tasarrufa özen gösterir.
- `F.8.6.4.2` Tasarrufa yönelik proje tasarlar.
- `F.8.6.4.3` Katı atıkların ayrıştırılmasının önemini açıklar.
- `F.8.6.4.4` Geri dönüşümün ülke ekonomisine katkısını araştırma verisiyle sunar.
- `F.8.6.4.5` Tasarrufsuz kullanımın gelecekteki problemlerini belirtip çözüm önerir.

**F.8.7 Elektrik Yükleri ve Elektrik Enerjisi**
- `F.8.7.1.1` Elektriklenmeyi doğa olayları ve teknoloji örnekleriyle açıklar.
- `F.8.7.1.2` Elektrik yüklerini sınıflandırır, itme-çekme etkisini açıklar.
- `F.8.7.1.3` Deneyler yaparak elektriklenme çeşitlerini fark eder.
- `F.8.7.2.1` Cisimleri elektrik yükleri bakımından sınıflandırır. *(**nötr ≠ yüksüz**; nötrde + ve − eşit; elektroskopun **çalışma prensibine girilmez**)*
- `F.8.7.2.2` Topraklamayı açıklar.
- `F.8.7.3.1` Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüşümüne örnek verir. *(sigortanın önemi; robotlar)*
- `F.8.7.3.2` Bu dönüşümü temel alan bir model tasarlar.
- `F.8.7.3.3` Güç santrallerinde elektriğin nasıl üretildiğini açıklar. *(hidroelektrik, termik, rüzgâr, jeotermal, nükleer)*
- `F.8.7.3.4` Güç santrallerinin avantaj ve dezavantajları hakkında fikir üretir.
- `F.8.7.3.5` Elektriğin bilinçli kullanımının aile ve ülke ekonomisine önemini tartışır.
- `F.8.7.3.6` Evlerde elektriği tasarruflu kullanmaya özen gösterir.

> **Fen, Mühendislik ve Girişimcilik Uygulamaları** (ünite 0) yıl içi proje çalışmasıdır,
> merkezî sınavda çoktan seçmeli soruyla ölçülmez; ders notu yerine tasarım etkinliği
> olarak ilgili ünitelerin içine gömülür (F.8.5.1.2, F.8.6.4.2, F.8.7.3.2).

---

# 4. T.C. İNKILAP TARİHİ VE ATATÜRKÇÜLÜK

**LGS'deki yeri:** Birinci oturum (sözel), **10 soru**.
**Toplam kazanım:** 39 · **7 ünite** · Program ders saati: 72

| Ünite | Resmî ad | Kazanım | Ders saati | Oran | Veritabanındaki konu adı |
|---|---|---|---|---|---|
| İTA.8.1 | Bir Kahraman Doğuyor | 4 | 8 | %11,1 | Bir Kahraman Doğuyor ✔ |
| İTA.8.2 | Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar | 8 | 18 | %25 | `Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar` (imla farkı) |
| İTA.8.3 | Millî Bir Destan: Ya İstiklal Ya Ölüm! | 7 | 14 | %19,5 | `Milli Bir Destan: Ya İstiklal Ya Ölüm` (imla + ünlem farkı) |
| İTA.8.4 | Atatürkçülük ve Çağdaşlaşan Türkiye | 9 | 12 | %16,7 | Atatürkçülük ve Çağdaşlaşan Türkiye ✔ |
| İTA.8.5 | Demokratikleşme Çabaları | 3 | 6 | %8,3 | Demokratikleşme Çabaları ✔ |
| İTA.8.6 | Atatürk Dönemi Türk Dış Politikası | 3 | 6 | %8,3 | Atatürk Dönemi Türk Dış Politikası ✔ |
| İTA.8.7 | Atatürk'ün Ölümü ve Sonrası | 5 | 8 | %11,1 | Atatürk'ün Ölümü ve Sonrası ✔ |

**İmla farkı kararı:** Konu adları **değiştirilmiyor**. `placement.topic` veritabanındaki
hâliyle eşlenir; ders başlığında ve metinde resmî imla (Millî, "…Ölüm!") kullanılır.
Konu adını düzeltmek canlı kütüphanede bağlantı kırar; kazanç risk etmez.

## 4.1. Ders notu planı (İnkılap Tarihi)

| # | Ünite | Ders notu başlığı | `slug` | Kazanımlar | Durum |
|---|---|---|---|---|---|
| 1 | İTA.8.1 | 20. Yüzyıl Başında Osmanlı Devleti ve Fikir Akımları ★ **Gold Standard adayı** | `lgs-tarih-yirminci-yuzyil-basinda-osmanli` | İTA.8.1.1 | ✅ tamamlandı |
| 2 | İTA.8.1 | Mustafa Kemal'in Yetişmesi: Çocukluk, Öğrenim, Fikir Hayatı | `lgs-tarih-mustafa-kemalin-yetismesi` | İTA.8.1.2, İTA.8.1.3 | ✅ tamamlandı |
| 3 | İTA.8.1 | Mustafa Kemal'in Askerlik Hayatı | `lgs-tarih-mustafa-kemal-askerlik-hayati` | İTA.8.1.4 | ✅ tamamlandı |
| 4 | İTA.8.2 | I. Dünya Savaşı: Sebepler ve Bloklaşma | `lgs-tarih-birinci-dunya-savasi-sebepler` | İTA.8.2.1 | ✅ tamamlandı |
| 5 | İTA.8.2 | I. Dünya Savaşı'nda Osmanlı Cepheleri | `lgs-tarih-osmanli-cepheleri` | İTA.8.2.2 | ✅ tamamlandı |
| 6 | İTA.8.2 | Mondros Ateşkes Antlaşması ve İşgaller Karşısında Tutumlar | `lgs-tarih-mondros-ve-tutumlar` | İTA.8.2.3 | planlandı |
| 7 | İTA.8.2 | Kuvâ-yı Millîye ve Cemiyetler | `lgs-tarih-kuvayi-milliye-ve-cemiyetler` | İTA.8.2.4 | planlandı |
| 8 | İTA.8.2 | Millî Mücadele'nin Hazırlık Dönemi: Genelgeler ve Kongreler | `lgs-tarih-hazirlik-donemi-genelgeler-kongreler` | İTA.8.2.5 | planlandı |
| 9 | İTA.8.2 | Misakımillî ve Büyük Millet Meclisi'nin Açılışı | `lgs-tarih-misakimilli-ve-bmm` | İTA.8.2.6, İTA.8.2.7 | planlandı |
| 10 | İTA.8.2 | Sevr Antlaşması ve Tepkiler | `lgs-tarih-sevr-ve-tepkiler` | İTA.8.2.8 | planlandı |
| 11 | İTA.8.3 | Doğu ve Güney Cepheleri | `lgs-tarih-dogu-ve-guney-cepheleri` | İTA.8.3.1 | planlandı |
| 12 | İTA.8.3 | Batı Cephesi: Düzenli Ordu ve İnönü Muharebeleri | `lgs-tarih-bati-cephesi` | İTA.8.3.2, İTA.8.3.3 | planlandı |
| 13 | İTA.8.3 | Tekalif-i Millîye, Sakarya ve Büyük Taarruz | `lgs-tarih-sakarya-ve-buyuk-taarruz` | İTA.8.3.4, İTA.8.3.5 | planlandı |
| 14 | İTA.8.3 | Lozan Antlaşması | `lgs-tarih-lozan-antlasmasi` | İTA.8.3.6, İTA.8.3.7 | planlandı |
| 15 | İTA.8.4 | Atatürk İlkeleri ve Temel Esaslar | `lgs-tarih-ataturk-ilkeleri` | İTA.8.4.1, İTA.8.4.9 | planlandı |
| 16 | İTA.8.4 | Siyasi Alanda İnkılaplar | `lgs-tarih-siyasi-inkilaplar` | İTA.8.4.2 | planlandı |
| 17 | İTA.8.4 | Hukuk, Eğitim ve Kültür Alanında İnkılaplar | `lgs-tarih-hukuk-egitim-kultur-inkilaplari` | İTA.8.4.3, İTA.8.4.4 | planlandı |
| 18 | İTA.8.4 | Toplumsal ve Ekonomik Alanda İnkılaplar | `lgs-tarih-toplumsal-ve-ekonomik-inkilaplar` | İTA.8.4.5, İTA.8.4.6, İTA.8.4.7 | planlandı |
| 19 | İTA.8.4 | Cumhuriyet'in Kazanımları ve Atatürk'ün Hedefleri | `lgs-tarih-cumhuriyetin-kazanimlari` | İTA.8.4.8 | planlandı |
| 20 | İTA.8.5 | Demokratikleşme Çabaları: Partiler, Suikast Girişimi, Tehditler | `lgs-tarih-demokratiklesme-cabalari` | İTA.8.5.1, İTA.8.5.2, İTA.8.5.3 | planlandı |
| 21 | İTA.8.6 | Atatürk Dönemi Dış Politikası: İlkeler ve Gelişmeler | `lgs-tarih-ataturk-donemi-dis-politika` | İTA.8.6.1, İTA.8.6.2 | planlandı |
| 22 | İTA.8.6 | Hatay'ın Anavatana Katılması | `lgs-tarih-hatayin-anavatana-katilmasi` | İTA.8.6.3 | planlandı |
| 23 | İTA.8.7 | Atatürk'ün Ölümü ve Bıraktığı Eserler | `lgs-tarih-ataturkun-olumu-ve-eserleri` | İTA.8.7.1, İTA.8.7.2 | planlandı |
| 24 | İTA.8.7 | II. Dünya Savaşı ve Türkiye'nin Denge Siyaseti | `lgs-tarih-ikinci-dunya-savasi-ve-turkiye` | İTA.8.7.3, İTA.8.7.4 | planlandı |
| 25 | İTA.8.7 | Çok Partili Siyasi Hayata Geçiş | `lgs-tarih-cok-partili-hayata-gecis` | İTA.8.7.5 | planlandı |

## 4.2. İnkılap Tarihi — kazanım listesi ve bağlayıcı sınırlar

**İTA.8.1 Bir Kahraman Doğuyor**
- `İTA.8.1.1` Avrupa'daki gelişmelerin yansımaları bağlamında Osmanlı Devleti'nin yirminci yüzyılın başlarındaki siyasi ve sosyal durumunu kavrar. *(a: Fransız İhtilali, sömürgecilik, Tanzimat–Meşrutiyet — **kısaca**; b: harita üzerinde gösterim; c: Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık — **kısaca**)*
- `İTA.8.1.2` Mustafa Kemal'in çocukluk ve öğrenim hayatından hareketle kişilik özelliklerinin oluşumu hakkında çıkarımda bulunur.
- `İTA.8.1.3` Gençlik döneminde fikir hayatını etkileyen önemli kişileri ve olayları kavrar.
- `İTA.8.1.4` Askerlik hayatı ile ilgili olay ve olguları kişilik özellikleriyle ilişkilendirir. *(31 Mart Olayı, Trablusgarp, Balkan Savaşları — **kısaca**)*

**İTA.8.2 Millî Uyanış: Bağımsızlık Yolunda Atılan Adımlar**
- `İTA.8.2.1` I. Dünya Savaşı'nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri kavrar. *(bloklaşmalar)*
- `İTA.8.2.2` I. Dünya Savaşı'nda Osmanlı Devleti'nin durumu hakkında çıkarımda bulunur. *(a: Kafkas, Kanal, Çanakkale, Hicaz-Yemen, Irak, Suriye cepheleri **harita üzerinde**, taarruz/savunma niteliğiyle; b: Çanakkale deniz ve kara zaferleri, Kut'ül-Amâre, Sarıkamış; c: alıntılar üzerinden şahsiyetler; ç: 1915 Olayları ve Tehcir Kanunu; d: savaşın sonuçları)*
- `İTA.8.2.3` Mondros Ateşkes Antlaşması karşısında Osmanlı yönetiminin, Mustafa Kemal'in ve halkın tutumunu analiz eder.
- `İTA.8.2.4` Kuvâ-yı Millîye'nin oluşum sürecini ve sonrasındaki gelişmeleri kavrar. *(millî cemiyetler ve millî varlığa düşman cemiyetler)*
- `İTA.8.2.5` Hazırlık döneminde Mustafa Kemal'in çalışmalarını analiz eder. *(Samsun'a çıkış, Havza, Amasya Genelgesi, Erzurum ve Sivas Kongreleri, Amasya Görüşmeleri; basının rolü)*
- `İTA.8.2.6` Misakımillî'nin kabulünü ve BMM'nin açılışını vatanın bütünlüğü, **ulusal egemenlik** ve **tam bağımsızlık** ilkeleriyle ilişkilendirir.
- `İTA.8.2.7` BMM'ye karşı ayaklanmalar ile alınan tedbirleri analiz eder. *(Hıyanet-i Vataniye Kanunu)*
- `İTA.8.2.8` Mustafa Kemal'in ve Türk milletinin Sevr Antlaşması'na karşı tepkilerini değerlendirir.

**İTA.8.3 Millî Bir Destan: Ya İstiklal Ya Ölüm!**
- `İTA.8.3.1` Doğu ve Güney Cephesi'ndeki gelişmeleri kavrar. *(millî ve yerel kahramanlar)*
- `İTA.8.3.2` Batı Cephesi'ndeki gelişmeleri kavrar. *(düzenli ordu, I. ve II. İnönü, Kütahya-Eskişehir; Teşkilat-ı Esasiye, Londra Konferansı, Afganistan Dostluk Antlaşması, İstiklal Marşı, Moskova Antlaşması)*
- `İTA.8.3.3` Maarif Kongresi üzerinden Atatürk'ün millî ve çağdaş eğitime verdiği önemi kavrar.
- `İTA.8.3.4` Tekalif-i Millîye Emirleri doğrultusundaki uygulamaları analiz eder.
- `İTA.8.3.5` Sakarya Meydan Savaşı ve Büyük Taarruz'da Mustafa Kemal'in rolüne ilişkin çıkarımda bulunur. *(Kars, Ankara, Mudanya)*
- `İTA.8.3.6` Lozan Antlaşması'nın sağladığı kazanımları analiz eder.
- `İTA.8.3.7` Dönemin olaylarının sanat ve edebiyat ürünlerine yansımalarına **kanıtlar gösterir**.

**İTA.8.4 Atatürkçülük ve Çağdaşlaşan Türkiye**
- `İTA.8.4.1` Atatürk ilkelerini açıklar. *(Cumhuriyetçilik, Milliyetçilik, Halkçılık, Devletçilik, Laiklik, İnkılapçılık — kavramsal düzeyde)*
- `İTA.8.4.2` Siyasi alandaki gelişmeleri kavrar. *(saltanatın kaldırılması, Ankara'nın başkent oluşu, Cumhuriyet'in ilanı, halifeliğin kaldırılması, Şeriye ve Evkâf Vekâleti ile Erkân-ı Harbiye Vekâleti'nin kaldırılması; 1924 Anayasası)*
- `İTA.8.4.3` Hukuk alanındaki gelişmelerin toplumsal yansımalarını kavrar. *(Türk Medeni Kanunu ve kadının statüsü)*
- `İTA.8.4.4` Eğitim ve kültür alanındaki inkılapları kavrar. *(Tevhid-i Tedrisat, Harf İnkılabı, Millet Mektepleri, TTK, TDK; 1933 Üniversite Reformu; güzel sanatlar ve spor)*
- `İTA.8.4.5` Toplumsal alandaki inkılapları kavrar. *(şapka ve kıyafet, tekke-zaviye-türbeler, takvim-saat-ölçü, Soyadı Kanunu; Türk kadınına sağlanan haklar, **diğer ülkelerle karşılaştırma**)*
- `İTA.8.4.6` Ekonomi alanındaki gelişmeleri kavrar. *(İzmir İktisat Kongresi; tarım, sanayi, ticaret, denizcilik; 1929 Dünya Ekonomik Bunalımı)*
- `İTA.8.4.7` Sağlık alanındaki çalışmaları devletin temel görevleriyle ilişkilendirir.
- `İTA.8.4.8` Cumhuriyet'in kazanımlarını ve Atatürk'ün hedeflerini analiz eder. *(Büyük Nutuk, Onuncu Yıl Nutku, Gençliğe Hitabe)*
- `İTA.8.4.9` Atatürk ilke ve inkılaplarını oluşturan temel esasları kavrar. *(millî tarih bilinci, bağımsızlık ve özgürlük, egemenliğin millete ait olması, millî kültür, çağdaş uygarlık düzeyinin üzerine çıkma, millî birlik ve ülke bütünlüğü)*

**İTA.8.5 Demokratikleşme Çabaları**
- `İTA.8.5.1` Atatürk Dönemi'ndeki demokratikleşme adımlarını açıklar. *(CHF, TCF, SCF; Büyük Nutuk'tan **kanıtlar**)*
- `İTA.8.5.2` Mustafa Kemal'e suikast girişimini analiz eder.
- `İTA.8.5.3` Cumhuriyetin ilk yıllarında Türkiye Cumhuriyetine yönelik tehditleri analiz eder.

**İTA.8.6 Atatürk Dönemi Türk Dış Politikası**
- `İTA.8.6.1` Dış politikanın temel ilkelerini ve amaçlarını açıklar. *(tam bağımsızlık, gerçekçilik, akılcılık, mütekabiliyet, barış, millî menfaat, kamuoyunu dikkate alma)*
- `İTA.8.6.2` Dış politikadaki gelişmeleri analiz eder. *(Lozan; yabancı okullar, dış borçlar, Musul, nüfus mübadelesi, Montrö; Milletler Cemiyeti; Balkan Antantı, Sadabat Paktı)*
- `İTA.8.6.3` Hatay konusunda yapılanlara ve özveriye **kanıtlar gösterir**.

**İTA.8.7 Atatürk'ün Ölümü ve Sonrası**
- `İTA.8.7.1` Atatürk'ün ölümüne ilişkin yansımalardan hareketle fikir ve eserlerinin evrensel değerine ilişkin çıkarımda bulunur. *(yerli ve yabancı basın; İsmet İnönü'nün cumhurbaşkanı seçilmesi)*
- `İTA.8.7.2` Atatürk'ün Türk milletine bıraktığı eserlerden örnekler verir.
- `İTA.8.7.3` Atatürk'ün II. Dünya Savaşı öncesi tespitlerini Türkiye'nin denge siyasetiyle ilişkilendirir.
- `İTA.8.7.4` II. Dünya Savaşı'nın sonuçlarının Türkiye'ye etkilerini analiz eder. *(siyasi, sosyal, ekonomik)*
- `İTA.8.7.5` Çok partili siyasi hayata geçişi hızlandıran gelişmeleri analiz eder. *(1946 ilk çok partili genel seçim)*

## 4.3. Tarih haritası politikası

`AGENTS.md` ve proje veri sözleşmesi gereği:

- Ölçekli siyasi sınır, cephe hattı veya poligon **uydurulmaz**.
- Bu derslerde `historical_map` bloğu kullanılacaksa **şematik** olduğu açıkça yazılır ve
  `source_note` alanı zorunludur (şema doğrulaması bunu zaten dayatıyor).
- Cephe konumu gibi İTA.8.2.2'nin açıkça istediği "harita üzerinde gösterim" ihtiyacı,
  ölçekli harita yerine **şematik konum + kaynak notu** ile karşılanır; coğrafi kesinlik
  iddiası taşımaz.
- Coğrafi kesinlik gerekmiyorsa zaman çizelgesi (`timeline`), neden-sonuç zinciri
  (`cause_effect`) ve karşılaştırma (`compare`) tercih edilir.

---

## 5. Toplam kapsam özeti

| Ders | Resmî kazanım | Derse bağlanan | Gerekçeli kapsam dışı | Planlanan ders notu | Tamamlanan |
|---|---|---|---|---|---|
| Türkçe | 76 | 41 | 35 | 20 | **20 (tamamlandı · 41/41)** |
| Fen Bilimleri | 61 | 61 | 0 | 23 | **23 (tamamlandı · 61/61)** |
| T.C. İnkılap Tarihi ve Atatürkçülük | 39 | 39 | 0 | 25 | 5 (sürüyor · 6/39) |
| **Toplam** | **176** | **141** | **35** | **68** | **48** |

*Sayılar `npm run test:lgs` çıktısından alınır (mufredat.js: Türkçe 41 ölçülür + 35 gerekçeli
kapsam dışı).*

Güncel durum için: `LGS_ICERIK_URETIM_DURUMU.md`
