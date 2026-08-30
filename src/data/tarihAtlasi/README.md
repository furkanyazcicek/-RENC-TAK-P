# Tarih Atlası verisi

DRKOÇ Tarih Atlası'nın kaynak ve uyumluluk verisi. Yayındaki v3 dünya paketleri
`public/atlas/v3/` altında üretilir; bu klasör üretim girdilerini ve önceki v2
veri hattını barındırır.

## Nasıl çalışıyor

v3'te küçük `manifest.json`, seçili yılı en yakın kaynak anlık görüntüsüne
bağlar. Her kaynak dönemi ayrı tam-dünya GeoJSON paketidir; istemci yalnız
gereken paketi indirir. Böylece eski 16 MB tek dosya açılış yükü kalkar.

Paket seçimi şu koşulla yapılır:

    validFrom ≤ seçilen yıl < validTo

Siyasi paketler, ayrıntı paketlerinden ayrıdır. `details/manifest.json`, seçili
yılı kapsayan kaynaklı olay/yer/idarî kesiti bulur. Orhun–Uygur bağlamı ile
1071, 1402, 1453, 1514, 1526, 1600, 1699, 1774 ve 1923 dilimleri yayımdadır.
`donemler.json` artık yalnız v2
uyumluluk ve topoloji gerileme denetimi içindir; yeni istemci onu yüklemez.

## Dosyalar

| Dosya | Ne |
|---|---|
| `ham/world_<yıl>.geojson` | İndirilen ham dünya anlık görüntüleri. Yedeğe alınmaz. |
| `normalized/*.json` | Kaynaklı ayrıntı araştırma kayıtları; siyasî sınır üretmez. |
| `research/source-catalog.json` | Kurum, tarih, URL, lisans, ölçek, kanıt ve sınırlama kataloğu. |
| `research/snapshot-inventory.json` | 25 öncelikli tarih için kanıt ve yayın engeli envanteri. |
| `public/atlas/v3/manifest.json` | Yıl → kaynak/paket eşlemesi ve veri kapsamı. |
| `public/atlas/v3/political/*.json` | Dönem başına tembel yüklenen tam dünya siyasi paketleri. |
| `public/atlas/v3/details/*.json` | Yıla özgü, tembel yüklenen ayrıntı dilimleri. |
| `donemler.json` | v2 uyumluluk paketi; 23 dönem ve topoloji denetim özetleri. |
| `devletSozlugu.js` | İngilizce adların Türkçe karşılıkları, önem derecesi, renk grubu. |
| `eyaletler.js` | Osmanlı eyaletlerinin merkezleri, kuruluş yılları ve müfredat notları. |
| `eyaletSinirlari.json` | Bu merkezlerden hesaplanan yaklaşık eyalet sınırları. |
| `kilitTarihler.js` | Zaman çizelgesinde işaretli 24 müfredat olayı. |

## Komutlar

```bash
npm run atlas:indir          # ham veriyi indirir (bir kez, ~31 MB)
npm run atlas:dunya-paketle  # v3 dünya manifesti, dönem ve ayrıntı paketlerini üretir
npm run atlas:uret           # donemler.json dosyasını üretir
npm run atlas:veri-dogrula   # şema, kaynak zinciri ve GeoJSON bütünlüğünü denetler
npm run atlas:dogrula        # seçilen yılları SVG haritaya çizip gözle kontrol ettirir
npm run atlas:eyalet         # eyalet sınırlarını hesaplar
npm run atlas:eyalet-dogrula # eyaletleri haritaya çizip gözle kontrol ettirir
```

Doğrulama betiğine bölge de verilebilir; kıyı hizalamasını yakından görmek için:
`node scripts/tarihAtlasiDogrula.mjs 1530 --alan=24,29,40,43`

Doğrulama betiğine yıl verilebilir:
`node scripts/tarihAtlasiDogrula.mjs 1071 1282 1453 1526 1683 1923`

## v3 kayıt alanları

Siyasi özellikler `id`, `name`, `tur`, `altTur`, `entityType`, `validFrom`,
`validTo`, `snapshotYear`, `evidenceStartYear`, `evidenceEndYear`, `sourceIds`,
`geometryMethod`, `confidence`, `boundaryCertainty`, `coverageStatus`,
`reviewStatus`, `onem`, `ton`, `renkIndeksi`, `etiketX` ve `etiketY` taşır. Eski Türkçe alanlar
geçiş uyumluluğu için korunur. Ayrıntı
varlıkları `parent*Id` ve `relatedEntityIds` ile birbirine bağlanır.

## v2 kayıt alanları

| Alan | Ne tutuyor |
|---|---|
| `ad` | Ders kitabı terminolojisiyle Türkçe ad |
| `adEn` | Kaynak verideki İngilizce ad (izini sürebilmek için) |
| `baslangic` / `bitis` | Geçerlilik aralığı — zaman süzgeci bunu kullanır |
| `onem` | Müfredat önem derecesi: 3 merkez, 2 doğrudan geçen, 1 bağlam, 0 müfredat dışı |
| `ton` | Tarihsel/tematik renk ailesi (`osmanli`, `turk`, `bizans`, `islam`, `habsburg`…) |
| `renkIndeksi` | Tüm dönemlerin komşuluk grafiğinde üretilen, aynı kimlik için kararlı siyasî dolgu indeksi |
| `kesinlik` | Sınırın ne kadar güvenilir olduğu: 1 güvenilir, büyüdükçe tahmini |
| `bagli` | Bağlı olduğu üst devlet — Kırım Hanlığı → Osmanlı Devleti gibi |
| `etiketX` / `etiketY` | Devlet adının haritada yazılacağı nokta |

`onem` alanı, haritada hangi etiketin öne çıkacağını belirler: uzaktan
bakıldığında yalnızca müfredatın merkezindeki devletler görünür, yaklaştıkça
bağlam devletleri açılır.

## Kapsanan dönemler

0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1279,
1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815,
1880, 1900, 1914, 1920, 1930, 1938, 1945 ve 1960 gerçek genel kaynak
görüntüleridir. Arayüz ayrıca 0–1960 arasında **197 adet 10 yıllık gezinme
durağı** üretir. Bir durağın kendi kaynak görüntüsü yoksa en yakın gerçek
görüntü, yıl farkı ve kanıt aralığıyla gösterilir; yeni geometri türetilmez.

### Dönem aralıklarının müfredata denk gelmediği yerler

Kaydırıcı bir yıla getirildiğinde zamansal olarak en yakın kaynak görüntüsü
gösterilir; eşit uzaklıkta eski kaynak seçilir. Örnekler:

| Konu | Gösterilen harita | Sapma |
|---|---|---|
| Malazgirt (1071) | 1100 | 29 yıl — kaynakta Anadolu Selçuklu eksik; olay noktası ayrı yayımlanır |
| Miryokefalon (1176) | 1200 | 24 yıl |
| 93 Harbi (1877) | 1880 | 3 yıl |

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
4. **Malazgirt için özel sınır yok.** 1071 seçildiğinde en yakın 1100 genel
   görüntüsü uyarıyla, 26 Ağustos 1071 olay noktası ise ayrı kaynaklı katmanda gösterilir.
5. **Mohaç sonrası Macaristan ayrımı yok.** 1530–1700 arasında Erdel Beyliği
   ve Kraliyet Macaristanı ayrı gösterilmiyor.
6. **1920 ve 1930 sınırları aynı.** Kaynak veri Sevr ile Lozan arasındaki
   farkı ayırmamış.
7. **Anadolu beylikleri toplu gösteriliyor.** Yalnızca Aydınoğulları ayrı;
   Karamanoğulları, Dulkadiroğulları ve diğerleri "Anadolu Beylikleri"
   adı altında tek parça.

Bu boşluklar serbest elle polygon çizerek kapatılmaz. Lisanslı vektör veya
kontrol noktaları belgeli georeferanslı sayısallaştırma tamamlandıkça özel
dönem katmanları eklenir.

## Topoloji ve kıyı hizalama

Kaynak verinin kıyı çizgisi kabadır; harita altlığının karası daha ayrıntılıdır.
İç siyasi sınır ve kıyı iki ayrı işlem olarak korunur:

1. Devletler Natural Earth 1:50m kara maskesiyle kesilir; büyütme toleransı
   `0°`dir. Kıyı için devlet büyütmek iç siyasi sınırı değiştireceğinden yapılmaz.
2. İç siyasi koordinatlar kaynak hâliyle korunur; komşu polygonlar bağımsız
   sadeleştirilmez. Görsel kıyı alt baskısı seçilemez ve tarihsel kanıt sayılmaz.
3. Sınırlar belirsizliği gizleyecek şekilde otomatik doldurulmaz; no-data kara
   nötr desenle kalır.

`atlas:veri-dogrula`; yeni mikro boşluk, yeni çakışma, çok küçük sliver
parça, açık/geçersiz halka ve denize taşmayı kaynak dönemle karşılaştırır.
Büyük veya kaynakta var olan tarihsel boşluklar otomatik olarak kapatılmaz.
Hiçbir devlete ait olmayan topraklar ayrı nötr toprak tonuyla gösterilir;
geometri hatasını gizlemek için devlet rengiyle boyanmaz.

## Eyalet sınırları

Tarihsel eyalet sınırlarının kesin koordinatları hiçbir açık veri setinde yok.
`eyaletler.js` her eyaletin gerçek merkezini ve ağırlık noktalarını tutar;
`atlas:eyalet` betiği bu noktalardan en yakın komşu bölgeleri hesaplar
(Voronoi), merkezden 3,2 dereceden uzağa taşan kısımları atar ve sonucu
Osmanlı'nın o dönemki sınırıyla keser.

- **Dönem:** 1590–1699 (Osmanlı taşra teşkilatının en geniş hâli)
- **Kapsam:** 35 eyalet
- **Merkezler ve kuruluş yılları** kaynaklara dayanır, **çizgiler tahminîdir**

Erişim mesafesi sınırı bilinçlidir: Garp Ocakları fiilen kıyı şeridini
yönetirdi, çöl içleri kabile bölgesiydi. Sınır olmadan Sahra'nın ortası da
bir eyalete atanıyor ve gerçek dışı uzantılar çıkıyordu.

Kefe eyaleti üretiliyor ama haritaya alınmıyor: bu veride Kırım Hanlığı ayrı
bir devlet sayıldığı için Osmanlı poligonuyla yeterince kesişmiyor.

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

Merkezî katalog `research/source-catalog.json` içindedir. Genel siyasi veri
[aourednik/historical-basemaps](https://github.com/aourednik/historical-basemaps)
(GPL-3.0), kıyı maskesi Natural Earth (public domain), açık noktalar Wikidata
(CC0) kaynaklıdır. Akademik/kurumsal başvuru kayıtları yeniden yayımlanmaz;
yalnız kanıt zinciri olarak bağlanır.

Kaynak proje akademik hassasiyet iddia etmez ve sınırlar kaynaklar arasında
farklılık gösterir. Eğitim atlası için yeterlidir; haritanın altında bu notun
görünmesi gerekir.
