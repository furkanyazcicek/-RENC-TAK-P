# Tarih Atlası Veri Sözleşmesi

Bu belge, DRKOÇ tarih atlasındaki siyasi sınırların hangi koşullarda uygulamaya
girebileceğini tanımlar. Görsel kalite, tarihsel kanıt zincirinin yerine geçmez.

## Değişmez kural

**LLM tarihsel sınır köşesi veya poligonu üretmez.** Bir devletin yayılımını
metinden tahmin edip koordinat listesine çevirmek, birkaç noktayı görsel olarak
makul görünecek biçimde birleştirmek veya çağdaş ülke sınırını tarihsel sınır
yerine kullanmak yasaktır.

Koordinat yalnızca şu yollardan biriyle gelebilir:

1. lisansı ve kapsamı belgelenmiş bir vektör/GIS veri seti;
2. koordinat referansı kurulmuş bir harita veya rasterdan, kullanılan kontrol
   noktaları ve sayısallaştırma notları saklanarak yapılan izlenebilir GIS işi;
3. kaynak geometriden deterministik dönüşüm: kırpma, projeksiyon, kıyı maskesi,
   sadeleştirme, birleştirme veya kesişim;
4. Voronoi gibi açıkça “modellenmiş/tahminî” olarak etiketlenen ve üretim
   sınırından ayrı gösterilen öğretim modeli.

Bir kaynak görseli yalnızca ekranda görüp elle birkaç koordinat yazmak, 2.
madde sayılmaz.

## Mevcut veri hatları

### Üretimdeki çok ölçekli dünya atlası (v3)

`src/data/tarihAtlasi/ham/world_<yıl>.geojson` dosyaları
`aourednik/historical-basemaps` kaynağından indirilir.
`scripts/tarihAtlasiDunyaPaketle.mjs` her anlık görüntüyü tam dünya kapsamlı,
ayrı bir `public/atlas/v3/political/<başlangıç>.json` paketine dönüştürür ve
`manifest.json` içinde geçerlilik aralığına bağlar. İstemci yalnız seçili yılı
kapsayan paketi tembel yükler; React/MapLibre geometri üretmez.

v3 siyasi paketinde kaynak iç sınır koordinatları korunur. Yalnız kıyı
kesiminde kaynak ölçeğine uygun Natural Earth 1:50m kara maskesiyle
deterministik kesişim yapılır. Etiket noktaları aynı geometrinin içinde
deterministik olarak seçilir ve tarihsel kanıt sayılmaz. Yerel zemin de aynı
Natural Earth 1:50m kara geometrisini kullanır; böylece farklı çözünürlükteki
iki kıyı çizgisinin arasında yapay krem şerit oluşmaz. OpenHistoricalMap ancak
kullanıcı açarsa bağlamsal altlık olur.

Siyasi kaydın kıyıya birkaç kilometre kala bittiği yerlerde, etkileşim ve sınır
kanıtı olarak kullanılmayan `coastUnderlay` sunum katmanı devreye girer. Bu
katman kaynak siyasi geometrisini değiştirmez; yalnız kıyıdaki görsel alt
baskıyı ortak kara maskesine kadar uzatır. Seçim, etiket ve sınır çizgileri her
zaman asıl `features` geometrisinden okunur.

Yayın zaman aralığı 0–1960'tır. Tarih yazımında yıl sıfır bulunmadığından,
arayüzdeki `0` değeri MÖ 1 ile MS 1 arasındaki geçişi temsil eder ve kaynağın
`world_bc1.geojson` anlık görüntüsünü kullanır. 100–900 yılları yüz yıllık
kaynak paketleriyle yayınlanır.

`scripts/tarihAtlasiDetayPaketle.mjs`, siyasi katmandan ayrı olarak idarî bölge,
yerleşim, olay ve rota koleksiyonlarını üretir. `details/manifest.json` seçili
yıla uyan dilimi bulur. İlk yayın Orhun–Uygur bağlamı ile 1071, 1402, 1453,
1514, 1526, 1600, 1699, 1774 ve 1923 kesitlerini kapsar. 1600 rotası kaynaklı
duraklar arasındaki temsili bağlantıdır; tarihî yol izi iddiası taşımaz.

`research/source-catalog.json` merkezî kaynak ve lisans kaydıdır. Her kaynakta
üreten kişi/kurum, yayın ve temsil tarihi, URL, erişim tarihi, referans yeri,
coğrafî kapsam, ölçek, tür, lisans, kullanım durumu, kanıtladığı husus,
sınırlama ve güven seviyesi bulunur. Kaynağı veya yeniden kullanım hakkı
belirsiz geometri üretime alınmaz. `research/snapshot-inventory.json`, 25
öncelikli tarihte mevcut kanıtı ve yayın engelini tutar.

Bu kaynak kıtasal/geniş bölgesel ölçek içindir. Yerel sınır, cephe hattı veya
şehir çevresi hassasiyeti iddia edilemez. Ara yıllar yeni geometri değildir;
zamansal olarak en yakın kaynak anlık görüntüsünü kullanır. Eşit uzaklıkta eski
kaynak seçilir. Önceki ve sonraki kanıt yılları ile seçili yıl–kaynak yılı
sapması arayüzde birlikte gösterilir; geometri interpolasyonu yapılmaz.

### Uyumluluk veri hattı (v2)

`scripts/tarihAtlasiUret.mjs` tarafından üretilen
`src/data/tarihAtlasi/donemler.json`, topoloji gerileme denetimleri ve önceki
istemciler için korunur. Bu paket Avrupa–Ortadoğu odaklıdır; yeni dünya atlası
istemcisi onu indirmez. v2 verisini değiştirmek v3 yayın paketini, v3 paketini
değiştirmek de v2 kayıt defterini kendiliğinden değiştirmez.

### Karantinadaki 1526 prototipi

`src/data/historicalMaps/source/1526-source.json` içindeki siyasi maskeler,
kaynak haritalara coğrafi kontrol noktalarıyla bağlanmadan elle çizilmiştir.
`publicationStatus: quarantined` ve
`geometryMethod: manual-unreferenced-prototype` olarak tutulur; üretim kayıt
defterine alınmaz. Yeniden sayısallaştırılmadan yayınlanamaz.

### Osmanlı eyalet modeli

`eyaletSinirlari.json`, kaynaklandırılmış merkez noktalarından Voronoi yöntemiyle
üretilmiş öğretim modelidir. Çizgiler idari sınır kanıtı değildir. Haritada ve
bilgi panelinde kesikli/tahminî dilini korumalıdır.

## v3 yayın paketi sözleşmesi

`public/atlas/v3/manifest.json` en az şunları taşır:

- `schemaVersion: 3`, desteklenen yıl aralığı ve varsayılan yıl;
- mimari türü ve kara kullanım semantiği;
- siyasi/kıyı kaynak kataloğu ile ham dosya SHA-256 özetleri;
- 0–1960 arasında her 10 yıl için gerçek kanıt yılı ve kaynak farkını taşıyan
  `decadeStops` envanteri;
- her dönem için `sourceYear`, `validFrom`, `validTo`, URL, dosya boyutu,
  özellik sayısı, veri kapsamı ve varsa tarihsel uyarı;
- katman türüne özgü ayrıntı paketi URL'leri.

Her siyasi `Feature`; kararlı `polity:` kimliği, Türkçe ve kaynak adı, tür/alt
tür, `entityType`, zaman aralığı, `snapshotYear`, kanıt başlangıç/bitiş yılı,
`sourceIds`, `geometryMethod`, `confidence`, `uncertaintyMeters`,
`boundaryCertainty`, `coverageStatus`, `capitalIds`, notlar, `reviewStatus`,
bağlılık ilişkisi, önem/ton ve geometri içi etiket noktası taşır. Tam dünya
paketinin `bounds` değeri `[-180,-90,180,90]` olmalıdır.

Ayrıntı paketindeki her varlık kararlı `admin:`, `settlement:`, `event:` veya
`route:` kimliğine sahiptir. `parentId`, `parentPolityId`, `parentRegionId` ve
`relatedEntityIds` değerleri var olan kimliklere bağlanır. Her varlık geçerlilik
aralığı ve en az bir kaynak kimliği taşır. Modellenmiş geometri hem veri
alanında hem arayüzde uyarısını korur.

## v2 üretim GeoJSON sözleşmesi

`donemler.json` meta alanları en az şunları taşır:

- `schemaSurumu`
- `yayimDurumu`
- `uretimHatti`
- `geometriKaynakTuru`
- `zamansalCozunurluk`
- `uygunOlcek`
- `kaynaklar`
- `kaynakDosyalari` (`dosya`, `kaynakYili`, `sha256`)
- `donemler` (`yil`, `bitis`, `kaynakYili`)

Her siyasi `Feature` en az şunları taşır:

- `ad`, `adEn`
- `baslangic`, `bitis`
- `kaynakId`, `kaynakYili`
- `geometriYontemi`
- `kesinlik`
- `onem`, `ton`, `renkIndeksi`
- `etiketX`, `etiketY`

Sunum alanları (`ton`, `renkIndeksi`, `onem`, etiket noktası) geometri kanıtı değildir ve
poligonu değiştiremez.

`renkIndeksi`, `global-stable-adjacency-v1` politikasıyla bütün dönemlerin
birleşik komşuluk grafiğinde üretilir. Aynı siyasî kimlik dönemler arasında
kararlı kalır; doğrulayıcı ortak sınır paylaşan iki yapının aynı renk indeksine
düşmesini yayın hatası sayar. Bu alan geometriyi veya tarihsel sınıflandırmayı
değiştirmez.

## Araştırma ve yayın durumları

- `quarantined`: kaynaksız, eksik veya yöntem denetimi yapılmamış; uygulamaya girmez.
- `draft`: kaynaklar kayıtlı, sayısallaştırma veya karşılaştırma sürüyor.
- `reviewed`: geometri, tarih aralığı ve kaynaklar bağımsız gözden geçirilmiş.
- `published`: veri doğrulaması geçmiş ve üretim kayıt defterine alınabilir.
- `kaynak-turevi`: dış veri setinden deterministik üretilen dönem paketi; kendi
  kaynak sınırlamalarıyla yayınlanır.

`published` durumu yalnız dosyada bir kelime değiştirilerek verilmez. Kaynak
karşılaştırması ve görsel GIS incelemesi tamamlanmış olmalıdır.

## Zaman doğruluğu

- Seçili yılın kendi kaynağı yoksa arayüz seçili yılı, kullanılan en yakın
  kaynak yılını, önceki/sonraki kanıt aralığını ve yıl sapmasını görünür gösterir.
- Zaman çizelgesindeki 10 yıllık durak bir veri çözünürlüğü iddiası değildir;
  `exact-source-snapshot` veya `nearest-source-snapshot` olarak kaydedilir.
- 30–100 yıllık aralık tek bir sınırın o süre boyunca değişmediği anlamına gelmez.
- Malazgirt, İstanbul’un Fethi, Mohaç gibi kilit tarihler için doğru anlık
  görüntü yoksa olay noktası gösterilebilir; sınır uydurulamaz.
- Kritik yıllar zaman içinde ayrı, kaynaklandırılmış katmanlarla kapatılmalıdır.

## Sunum ve kartografik belirsizlik

- Daha güvenilir sınır düz çizgi, tahminî sınır kesikli veya yumuşatılmış çizgi
  ile gösterilir; yalnız renk kullanılmaz.
- Kıyıya oturtma yalnız kıyı uyumunu düzeltir, iç siyasi sınırı doğrulamaz.
- Sadeleştirme toleransı hedef zoom ve ölçekle belgelenir; yerel ayrıntıyı yok
  eden çıktı yerel harita gibi sunulmaz.
- Üretim hattında kıyı büyütme toleransı `0°`, topoloji kuantizasyonu
  `10.000.000` kademe ve ortak-yay sadeleştirme eşiği `2,5×10⁻¹⁰ sr`dir.
  Bu kapsamda kuantizasyon en fazla yaklaşık 1 m, sadeleştirme yaklaşık
  0,01 km² etkili alan düzeyindedir; hedef zoom 4,2–7'de piksel altında kalır.
- Ortak-yay dönüşümü kaynak çakışmasını 2 km²'den fazla artırırsa
  o kaynak dönemi sadeleştirilmeden korunur. Büyük veya kaynakta bulunan
  tarihsel boşluk otomatik olarak bir devlete atanmaz.
- Etiket, renk, çizgi kalınlığı ve altlık değişikliği veri dosyasına tarihsel
  gerçek ekleyemez.

## Zorunlu doğrulama

Veri üretildikten sonra:

```bash
npm run atlas:dunya-paketle
npm run atlas:veri-dogrula
npm run test:tarih
npm run atlas:dogrula -- 1071 1282 1453 1526 1683 1923
npm run build
```

Makine denetimi şema, kaynak zinciri, zaman aralığı ve temel GeoJSON bütünlüğünü
kontrol eder. Ayrıca v3 dönemlerinin kesintisizliğini, tam dünya kapsamını,
paket boyutu/özellik sayısını, ebeveyn–ilişki kimliklerini ve karantina
geometrisinin yayına sızmadığını denetler. Sonraki adım masaüstü, tablet ve
telefonda görsel inceleme; ardından bir tarih/GIS gözden geçirmesidir.
