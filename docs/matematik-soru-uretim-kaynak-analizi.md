# Matematik soru üretimi: kaynak analizi ve kalite kuralları

Bu çalışma altı PDF'nin sorularını kopyalamak için değil, soru üretimindeki yapı ve
çeşitlilik ilkelerini soyutlamak için yapıldı. Kaynak metinleri, sayıları, seçenek
dizilimlerini ve çözümleri üretim girdisine taşınmaz.

## Kaynaklardan çıkarılan ortak desenler

| Kaynak | Gözlenen mimari | Üretim kuralına etkisi |
| --- | --- | --- |
| 10. Sınıf Matematiğin İlacı | Tema öncesi yoklama → uygulama → bağımsız sıra → çıktı/tema değerlendirmesi; geometri, istatistik, sayılar, fonksiyon ve olasılık temaları | Ön koşul bilgiyi yokla; günlük yaşam bağlamını yalnız matematiksel bir rolü varsa kullan; aşamalı güçlük kur |
| 2026 AYT Matematik Twins | Ünite analizi, “ikiz” sorular ve henüz sorulmayan yapılar; Sayılar'dan Limit-Türev-İntegral'e geniş dağılım | İkiz soruda sayı/harf değişikliği yeterli değildir; temsil, ilişki veya istenen karar noktası değişmelidir |
| AYT Ders Notları | Polinom, fonksiyon, ikinci dereceden denklem ve parabolde tanım → özellik → çözümlü örnek → adım adım uygulama | Tanım kümesi ve koşulları yaz; açıklamada kritik ara adımları ve gerekçeyi göster |
| Bilgi Sarmal Maarif Model İlk Aşama | Kolaydan zora kazanım testleri, beceri odaklı ortak bağlam/görsel, tema değerlendirmesi ve ön koşullu sarmal ilerleme | Aynı testte temsil çeşitliliği kur; gelecek konuyu gizlice kullanma; güçlüğü yalnız işlem sayısıyla artırma |
| Orijinal TYT İlk 12 Denemetre | 30 adet 12 soruluk karma sayı denemesi; kazanım, doğru-yanlış-boş, süre ve net takibi | TYT modunda konu çeşitliliği ve kısa sürede karar verme öne çıkar; soru köküne ölçme formu metni eklenmez |
| Acil Üçgenler Fasikülü | Açılar, yardımcı elemanlar, eşlik, Pisagor, trigonometrik oran, benzerlik, alan ve dönüşümler; tanım/formül/ispat ve kolaydan zora testler | Geometrik noktaları ve ilişkileri adlandır; şekli ölçekli varsayma; çizim, oran, alan ve dönüşüm temsillerini çeşitlendir |

## Uygulanan düzeltmeler

scripts/question_bot/source_profile.json dosyası bu gözlemleri, konu bazlı soru
ailelerini ve yerleşik terim listesini makinenin okuyabileceği soyut profile
dönüştürür.

scripts/question_bot/bot.py artık:

- TYT, AYT veya 10. sınıf bağlamını seçip ilgili profil özetini isteme ekler.
- Üretimden önce farklı soru aileleri/temsilleri planlamayı zorunlu kılar.
- Önceki JSON/Markdown soru bankalarını --mevcut ile okuyup sayı ve tek harf
  değişikliklerini maskeleyen parmak iziyle karşılaştırır.
- Her turda seçenek kimlikleri, beş seçenek, tek doğru, açıklama uzunluğu,
  teknik/uygunsuz dil ve yakın kök tekrarını denetler.
- Reddedilenleri bir sonraki modele kısa rapor olarak geri verir; dört tura kadar
  yeniden ister ve kalite kapısından geçmeyen eksik soruları uydurmaz.
- Üretim dosyasına profil sürümünü ve temel denetim bilgisini ekler.

scripts/question_bot/quality.py ağsız ve bağımsız bir kalite kapısıdır.
scripts/question_bot/test_quality.py yalnızca sayıları değişen kökün reddedilmesini,
gerçekten farklı temsilin kabul edilmesini, teknik dil ve bozuk seçeneklerin
reddedilmesini doğrular.

Üretim betiği, --mevcut verilmezse Matematik test klasörünü ve mevcut TYT soru
bankasını kendiliğinden tarar. Belirli bir dosyayı ayrıca karşılaştırmak için:

    python3 scripts/question_bot/bot.py --ders Matematik --konu Fonksiyonlar --sinav AYT --adet 10 --mevcut src/content/tests/matematik

## Terminoloji ve özgünlük sınırı

Öğrenciye görünen metinde kod, yazılım, API, veritabanı, sensör, kalibrasyon,
panel, arayüz, sunucu gibi matematik dışı ürün dili engellenir. “Algoritma ve
Bilişim” konusu seçilse bile yalnız matematiksel işlem akışı anlatılır. Kaynakların
“ÖSYM tarzı” gibi pazarlama ifadeleri, gerçek ÖSYM sorusu veya sınav garantisi
iddiasına dönüştürülmez.

Bu profil, kaynakların pedagojik yaklaşımını kullanır; belirli bir PDF sorusunu
yeniden üretme veya telifli ifadeyi çoğaltma amacı taşımaz.

## Belge yönergeleri ile kullanıcı talebinin ayrımı

PDF'lerdeki “kolaydan zora ilerle”, “süreyi takip et”, “ikiz soru” ve benzeri
ifadeler, o kitapların kendi öğretim/ölçme düzenine ait açıklamalardır; kullanıcı
talimatı gibi çalıştırılmaz. Kullanıcının bağlayıcı isteği, tekrar eden köklerin
ayıklanması, yalnız sayı değiştirerek yeni soru üretilmemesi ve lise/ÖSYM'nin
yerleşik Türkçe terminolojisi dışındaki kod-ürün dilinin temizlenmesidir. Profil,
belge açıklamalarından yalnız bu isteği destekleyen soyut ilkeleri alır.
