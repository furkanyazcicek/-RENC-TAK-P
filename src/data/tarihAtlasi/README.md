# Tarih Atlası verisi

Dr. Koç Tarih Atlası'nın dönem verisi. Kaydırıcı bir yıla getirildiğinde
haritanın anında değişmesini sağlayan yapı burada üretilir.

## Nasıl çalışıyor

Alışıldık yöntem her yıl için ayrı harita dosyası hazırlamaktır — yavaş ve
yüzlerce dosya demektir. Burada tersi yapılır: **bütün dönemler tek dosyada
durur ve her sınıra iki damga vurulur — başlangıç yılı ve bitiş yılı.**

Zaman kaydırıcısı oynatıldığında yeni veri indirilmez; yalnızca şu süzgeç
güncellenir:

    başlangıç ≤ seçilen yıl < bitiş

Bu koşulu sağlayan sınırlar çizilir, ötekiler gizlenir.

## Dosyalar

| Dosya | Ne |
|---|---|
| `ham/world_<yıl>.geojson` | İndirilen ham dünya anlık görüntüleri. Yedeğe alınmaz. |
| `donemler.json` | Uygulamanın kullandığı tek dosya. 23 dönem, 1367 kayıt, sıkıştırılmış ~650 KB. |
| `devletSozlugu.js` | İngilizce adların Türkçe karşılıkları, önem derecesi, renk grubu. |

## Komutlar

```bash
npm run atlas:indir    # ham veriyi indirir (bir kez, ~31 MB)
npm run atlas:uret     # donemler.json dosyasını üretir
npm run atlas:dogrula  # seçilen yılları SVG haritaya çizip gözle kontrol ettirir
```

Doğrulama betiğine yıl verilebilir: `node scripts/tarihAtlasiDogrula.mjs 1071 1453 1683`

## Kayıt alanları

| Alan | Ne tutuyor |
|---|---|
| `ad` | Ders kitabı terminolojisiyle Türkçe ad |
| `adEn` | Kaynak verideki İngilizce ad (izini sürebilmek için) |
| `baslangic` / `bitis` | Geçerlilik aralığı — zaman süzgeci bunu kullanır |
| `onem` | Müfredat önem derecesi: 3 merkez, 2 doğrudan geçen, 1 bağlam, 0 müfredat dışı |
| `ton` | Renk grubu (`osmanli`, `turk`, `bizans`, `islam`, `habsburg`…) |
| `kesinlik` | Sınırın ne kadar güvenilir olduğu: 1 güvenilir, büyüdükçe tahmini |
| `bagli` | Bağlı olduğu üst devlet — Kırım Hanlığı → Osmanlı Devleti gibi |
| `etiketX` / `etiketY` | Devlet adının haritada yazılacağı nokta |

`onem` alanı, haritada hangi etiketin öne çıkacağını belirler: uzaktan
bakıldığında yalnızca müfredatın merkezindeki devletler görünür, yaklaştıkça
bağlam devletleri açılır.

## Kapsanan dönemler

1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715,
1783, 1800, 1815, 1880, 1900, 1914, 1920, 1930, 1938, 1945 — son dönem 1960'a
kadar geçerli sayılır.

### Dönem aralıklarının müfredata denk gelmediği yerler

Kaydırıcı bir yıla getirildiğinde, o yılı kapsayan en yakın önceki dönem
gösterilir. Çoğu konuda sapma küçüktür; üç yerde büyüktür ve arayüzde
öğrenciye açıkça söylenmelidir:

| Konu | Gösterilen harita | Sapma |
|---|---|---|
| Malazgirt (1071) | 1000 | 71 yıl — Büyük Selçuklu haritada henüz yok |
| Miryokefalon (1176) | 1100 | 76 yıl |
| 93 Harbi (1877) | 1815 | 62 yıl — Tanzimat ve Kırım Savaşı da bu haritada |

## Bilinen sınırlamalar

Bunlar kaynak verinin sınırlarıdır, üretim hatası değil. Öğrenciye sunulurken
dürüstçe belirtilmelidir.

1. **Osmanlı'nın kuruluşu (1299) haritada yok.** Kaynak verinin 1300 anlık
   görüntüsünde Osmanlı Beyliği yer almıyor; ilk 1400'de görünüyor. Kuruluş
   dönemi sınır çizerek değil, olay noktası koyarak anlatılmalı.
2. **1100 anlık görüntüsünde Anadolu bütünüyle Bizans.** Oysa 1075'ten itibaren
   İç Anadolu Anadolu Selçuklu'nun elindeydi. Bu dönem `uyari` ile işaretlidir.
3. **1200 anlık görüntüsü tarihsel olarak tutarsız.** Kaynak veri o tarihte
   Fatımi (1171'de yıkıldı) ve Büveyhi (1055'te yıkıldı) devletlerini
   gösteriyor, Anadolu Selçuklu'yu ise hiç göstermiyor. Bu dönem de `uyari`
   ile işaretlidir.
4. **Malazgirt için harita yok.** Kaynak veride 1000 ile 1100 arası boş.
   1071 seçildiğinde 1000 haritası gösterilir ve Büyük Selçuklu görünmez.
5. **Mohaç sonrası Macaristan ayrımı yok.** 1530–1700 arasında Erdel Beyliği
   ve Kraliyet Macaristanı ayrı gösterilmiyor.
6. **1920 ve 1930 sınırları aynı.** Kaynak veri Sevr ile Lozan arasındaki
   farkı ayırmamış.
7. **Anadolu beylikleri toplu gösteriliyor.** Yalnızca Aydınoğulları ayrı;
   Karamanoğulları, Dulkadiroğulları ve diğerleri "Anadolu Beylikleri"
   adı altında tek parça.

Bu boşluklar, kendi elimizle hazırlanacak dönem katmanlarıyla kapatılabilir.

## Kaynak verideki hatalar için düzeltme mekanizması

`scripts/tarihAtlasiUret.mjs` içindeki `YILA_OZEL_DUZELTME` tablosu, kaynak
verideki yanlış adları yıl bazında düzeltir. Şu an düzeltilenler:

| Kaynak veri | Yıl | Düzeltilmiş hâli | Neden |
|---|---|---|---|
| Ottoman Sultanate | 1930 | Türkiye Cumhuriyeti | Cumhuriyet 1923'te ilan edildi |
| Ottoman Sultanate | 1920 | Osmanlı Devleti (Millî Mücadele dönemi) | Dönemin adı netleştirildi |
| Seljuk Caliphate | 1400 | Anadolu Beylikleri | Anadolu Selçuklu 1308'de yıkıldı |
| Bulgar Khanate | 1200–1300 | İkinci Bulgar Devleti | Ders kitabı ayrımı |
| Bulgar Khanate | 1400 | Bulgaristan | Osmanlı'ya bağlıydı |

Yeni bir hata fark edilirse bu tabloya bir satır eklemek yeterli.

## Kaynak ve lisans

Ham veri: [aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps) — GPL-3.0.
Adlar Türkçeleştirildi, müfredat önem derecesi ve dönem damgaları eklendi.

Kaynak proje akademik hassasiyet iddia etmez ve sınırlar kaynaklar arasında
farklılık gösterir. Eğitim atlası için yeterlidir; haritanın altında bu notun
görünmesi gerekir.
