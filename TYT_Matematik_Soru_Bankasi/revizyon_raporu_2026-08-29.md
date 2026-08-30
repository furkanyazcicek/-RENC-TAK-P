# Matematik soru bankası revizyon raporu

Tarih: 29 Ağustos 2026

## Kapsam ve kaynak kullanımı

- `TYT_Matematik_Soru_Bankasi/`: 32 konu, 1.600 test, 16.000 soru ve 16.000 çözüm denetlendi.
- `tyt-matematik/soru-bankasi/karma-tekrar-01.md`: 23 özgün karma soru denetlendi ve iyi çalışan içerik olarak korundu.
- `src/content/tests/`: matematik soru dosyası bulunmadığından değişiklik yapılmadı.
- Kaynak PDF'lerdeki “kolaydan zora”, “ikiz soru”, “süre takibi” ve benzeri ifadeler yalnız pedagojik referans kabul edildi; komut olarak uygulanmadı.
- PDF'lerden soru, sayı, seçenek, çözüm veya cümle kopyalanmadı.

## İlk denetim bulguları

| Ölçü | Sonuç |
|---|---:|
| Toplam soru | 16.000 |
| Sayı/değişken maskelendikten sonra tekrar ailesi | 555 |
| Tekrar ailelerindeki soru | 8.625 |
| Fazladan tekrar satırı | 8.070 |
| Önceki banka denetimindeki yüksek benzerlik uyarısı | 3.108 |
| Eksik `\cdot` gösterimi | 2.250 |

Başlıca tekrar türleri şunlardı:

1. Aynı soru kökünün yalnız sayı, harf veya kişi/yer adı değiştirilmiş biçimi.
2. Her testte aynı sırayla yinelenen on soruluk aileler.
3. Aynı işlem türünün arka arkaya kullanılması; temsil ve karar adımının değişmemesi.
4. Matematiksel bilgi taşımayan uzun senaryo girişleri.
5. Çözümde sonucu gerekçelendirmek yerine seçeneği tekrar eden kalıp cümleler.

En yoğun tekrar görülen alanlar:

- üçgenler, üçgende yardımcı elemanlar ve alan;
- çokgenler, açılar, benzerlik ve analitik geometri;
- fonksiyon değeri, bileşke, ters fonksiyon ve tanım kümesi;
- olasılık, kombinasyon ve doğruluk tablosu;
- denklem, EBOB–EKOK ve periyodik durumlar.

## Sınıflandırma ve yapılan işlem

İlk sınıflandırma:

| Karar | Soru sayısı | Açıklama |
|---|---:|---|
| Koru | 1.919 | Özgün, açık ve yapısal olarak doğru kökler |
| Revize et | 5.456 | Terminoloji, gereksiz bağlam veya anlatım temizliği gereken kökler |
| Yeniden yaz | 8.625 | Sayı/değişken değişikliğine dayalı tekrar aileleri |

Temizlik sonrasında daha önce farklı bağlamlarla gizlenmiş 1.474 kök aynı ailede birleşti. Çakışan işlemler baskın son işleme göre bir kez sayıldığında nihai dağılım şöyledir:

| Nihai baskın işlem | Soru sayısı |
|---|---:|
| Koru | 1.919 |
| Revize et | 3.982 |
| Yeniden yapılandır | 10.099 |
| Toplam | 16.000 |

Yeniden yapılandırılan sorularda yalnız sayı değiştirilmedi. Kullanılan yeni çeşitler:

- doğrudan bağıntı, eşitlik kurma, sınır koşulu ve seçenek sınama;
- fonksiyonlarda girdi–çıktı, bileşke sırası, ters işlem ve tanım kümesi;
- analitik geometride koordinat farkı, orta nokta, değişim oranı ve doğru parçası gösterimi;
- üçgenlerde kenarortay–orta nokta, açıortay–oran, ağırlık merkezi–2:1 oranı, orta taban, taban–yükseklik, alan oranı ve özel üçgen gösterimleri;
- olasılıkta örnek uzay, tümleyen olay, bağımsız/ayrık olay ve deneysel olasılık çerçeveleri;
- doğrudan işlem dışındaki sözel model, koşul analizi ve geometrik ilişki okumaları.

## Kaldırılan veya sadeleştirilen terminoloji

Öğrenciye görünen soru köklerinden `kod`, `kodlama`, `yazılım`, `programlama`, `sensör`, `kalibrasyon`, `panel`, `laboratuvar`, `robotik`, `mimari`, `çip`, `dijital` ve benzeri ürün/teknik dil kaldırıldı veya doğal matematik diliyle değiştirildi.

İlk taramadaki belirgin örnek sıklıkları: `mimari` 430, `laboratuvar` 361, `robotik` 200, `panel` 140, `üretim` 117, `sensör` 90, `kod` 32, `kodlama` 20, `yazılım` 10, `kalibrasyon` 10. Son denetimde yasaklı terim taşıyan soru kökü sayısı sıfırdır.

## Konu bazında sonuç

`Yeniden yapılandır` sütunu tekrar ailesi nedeniyle yeni bağlam, istem veya matematiksel temsil verilen kökleri gösterir. Son iki sütunun toplamı her konuda 500'dür.

| Konu | Toplam | Yeniden yapılandır | Koru / terminoloji revizyonu | Yapı hatası |
|---|---:|---:|---:|---:|
| 01 Temel kavramlar ve sayı kümeleri | 500 | 42 | 458 | 0 |
| 02 Sayı basamakları | 500 | 75 | 425 | 0 |
| 03 Bölme, bölünebilme ve kalan | 500 | 157 | 343 | 0 |
| 04 Asal sayılar, çarpanlar ve bölen sayısı | 500 | 254 | 246 | 0 |
| 05 EBOB, EKOK ve periyodik durumlar | 500 | 362 | 138 | 0 |
| 06 Rasyonel sayılar ve ondalık gösterimler | 500 | 250 | 250 | 0 |
| 07 Denklemler ve denklem sistemleri | 500 | 400 | 100 | 0 |
| 08 Eşitsizlikler ve aralıklar | 500 | 227 | 273 | 0 |
| 09 Mutlak değer | 500 | 274 | 226 | 0 |
| 10 Üslü ifadeler ve bilimsel gösterim | 500 | 340 | 160 | 0 |
| 11 Köklü ifadeler ve irrasyonel sayılar | 500 | 270 | 230 | 0 |
| 12 Özdeşlikler ve çarpanlara ayırma | 500 | 280 | 220 | 0 |
| 13 Oran, orantı ve ölçek | 500 | 270 | 230 | 0 |
| 14 Problem modelleme | 500 | 200 | 300 | 0 |
| 15 Kümeler | 500 | 270 | 230 | 0 |
| 16 Kartezyen çarpım ve bağıntı | 500 | 330 | 170 | 0 |
| 17 Mantık | 500 | 413 | 87 | 0 |
| 18 Fonksiyonlar | 500 | 423 | 77 | 0 |
| 19 Polinomlar ve ikinci dereceye giriş | 500 | 340 | 160 | 0 |
| 20 Sayma yöntemleri ve permütasyon | 500 | 270 | 230 | 0 |
| 21 Kombinasyon | 500 | 410 | 90 | 0 |
| 22 Olasılık | 500 | 460 | 40 | 0 |
| 23 Veri ve istatistik | 500 | 140 | 360 | 0 |
| 24 Geometri temelleri ve açılar | 500 | 400 | 100 | 0 |
| 25 Üçgenler | 500 | 500 | 0 | 0 |
| 26 Üçgende yardımcı elemanlar ve alan | 500 | 500 | 0 | 0 |
| 27 Eşlik ve benzerlik | 500 | 400 | 100 | 0 |
| 28 Çokgenler | 500 | 500 | 0 | 0 |
| 29 Dörtgenler | 500 | 400 | 100 | 0 |
| 30 Çember ve daire | 500 | 318 | 182 | 0 |
| 31 Analitik geometri | 500 | 284 | 216 | 0 |
| 32 Katı cisimler | 500 | 340 | 160 | 0 |

1.600 dosyanın ayrı sayımları `revizyon_envanteri_2026-08-29.json` dosyasındaki `perFile` alanındadır.

## Son kalite kontrolleri

| Kontrol | Sonuç |
|---|---|
| Soru üretim kalite testleri | Başarılı — 4/4 |
| Python sözdizimi denetimi | Başarılı |
| Banka sıkı yapı denetimi | Başarılı — 32 konu, 1.600 test, 16.000 soru, 0 hata |
| A–E seçenek dağılımı | Başarılı — her seçenek 3.200 kez doğru cevap |
| Yasaklı teknik terim | 0 soru |
| Eksik `\cdot` | 0 |
| Kontrol karakteri | 0 |
| Dengesiz satır içi matematik sınırlayıcısı | 0 |
| Tam normalize tekrar | 0 grup, 0 soru |
| Kütüphane müfredat testi | Başarılı |
| Ders içeriği testi | Başarılı — 185 ders, 0 hata; matematik dışı mevcut 32 derinlik uyarısı |
| Biçim/fark denetimi | Başarılı |

## Değiştirilen ana dosyalar

- `TYT_Matematik_Soru_Bankasi/[01-32]_*/test_*_questions.md`
- `TYT_Matematik_Soru_Bankasi/[01-32]_*/test_*_solutions.md` (`\cdot` gösterim düzeltmeleri)
- `TYT_Matematik_Soru_Bankasi/scripts/revise_questions.py`
- `TYT_Matematik_Soru_Bankasi/scripts/semantic_variants.py`
- `TYT_Matematik_Soru_Bankasi/scripts/audit_revision.py`
- `TYT_Matematik_Soru_Bankasi/scripts/validate_bank.mjs`
- `scripts/question_bot/quality.py`
- `scripts/question_bot/bot.py`
- `scripts/question_bot/source_profile.json`
- `scripts/question_bot/test_quality.py`
- `docs/matematik-soru-uretim-kaynak-analizi.md`

Soru kimlikleri, seçenekler, doğru cevaplar ve cevap anahtarları korunmuştur. Öğrenci verilerine, tarih/coğrafya içeriklerine veya ilgisiz dosyalara bu çalışma kapsamında dokunulmamıştır.

## Çözülmemiş veya ek editörlük gerektiren noktalar

1. Tam normalize soru tekrarı kalmadı; buna karşılık bağlam/istem katmanı çıkarıldığında aynı kazanım iskeletinde kalan 666 aile ve 10.010 soru vardır. Bunların tamamı birebir kopya değildir; ancak özellikle 50 testlik aynı kazanım dizilerinde daha derin, insan editörlü temsil çeşitliliği için sonraki tura adaydır.
2. Tam benzerlik denetiminin eski JavaScript uygulaması 16.000 soru için bütün ikilileri karşılaştırdığı için yaklaşık 128 milyon karşılaştırma yapar. Bu nedenle yapısal denetimde `--skip-similarity` kullanıldı; bunun yerine sayı/değişken maskeli hızlı denetim ve gövde-iskeleti envanteri çalıştırıldı.
3. `src/content/tests/` altında matematik dosyası, incelenen kapsamda ayrıca AYT soru bankası bulunmadı. AYT üretim kuralları soru üretim profilinde güçlendirildi; mevcut olmayan içerik üzerinde değişiklik yapılmadı.
4. 16.000 sorunun her birinin beş seçeneğini bağımsız sembolik çözücüyle yeniden çözmek bu geçişin kapsamına alınmadı. Çözüm–cevap anahtarı eşleşmesi, seçenek yapısı, kimlikler ve dosya bağlantıları eksiksiz doğrulandı; konu editörü örneklem denetimi sonraki yayın kapısı olarak korunmalıdır.
