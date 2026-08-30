# Tarih Atlası v3 mimari kararı

**Durum:** Kabul edildi  
**Tarih:** 27 Ağustos 2026

## Bağlam

Önceki atlas 23 dönemi tek `donemler.json` dosyasında taşıyordu. Ölçülen dosya
17,1 MB, gzip ile 5,7 MB idi ve tüm geometri ilk atlas açılışında indiriliyordu.
Üretim alanı `[-13, 8, 66, 58]` olduğu için dünya görünümünde Avrupa–Kuzey
Afrika–Batı Asya dikdörtgeni dışında siyasi veri yoktu. Şehir, olay, rota ve
idarî bölge katmanları ortak kimliklerle aranabilir bir model oluşturmuyordu.

Uygulama Vite üzerinde statik yayınlanıyor. Bu aşamada bir harita sunucusu veya
çalışan arka uç eklemek ürünün dağıtım biçimini gereksiz yere değiştirirdi.

## Karar

Siyasi dünya geometrisi, her kaynak anlık görüntüsü için ayrı GeoJSON paketi
olarak yayımlanır. Küçük manifest seçili yılı zamansal olarak en yakın gerçek
kaynak yılına bağlar; eşit uzaklıkta eski görüntüyü seçer ve iki taraflı kanıt
aralığını ayrıca taşır. Bu seçim geometri interpolasyonu değildir;
istemci yalnız o dönemi tembel yükler ve paketi oturum içinde önbelleğe alır.
İdarî bölge, yerleşim, olay ve rota gibi ayrıntılar ayrı, katman türüne özgü
paketlerden gelir. Yerel Natural Earth kara GeoJSON'u güvenilir açılış altlığı;
OpenHistoricalMap isteğe bağlı tarihsel bağlam katmanıdır.

Kıyı kesişiminde, kıtasal siyasi kaynağın kanıt ölçeğine uygun Natural Earth
1:50m maske kullanılır. 1:10m kıyının aynı ayrıntısını 23 pakete kopyalamak
tarihsel doğruluğu artırmadan aktarım ve ayrıştırma maliyetini yükseltiyordu.

İlk derin kesit 1600 paketidir: siyasi yapı → modellenmiş eyalet → yerleşim →
Haçova olayı → temsili sefer bağlantısı. Buna ek olarak Orhun–Uygur bağlamı,
1071, 1402, 1453, 1514, 1526, 1699, 1774 ve 1923 için kaynaklı olay/yer
dilimleri vardır. Bunlar siyasî poligon üretmez. Elle çizilmiş 1526 siyasi
maskeleri karantinada kalır ve hiçbir v3 pakete girmez.

Arayüz 0–1960 arasında 197 on yıllık durağa gider. Bu duraklar yeni kaynak
harita değildir: her biri gerçek genel kaynak görüntüsüne bağlanır ve kaynak
yılı farkını taşır. Özel sınır snapshot'ı ancak merkezî kaynak/lisans kataloğu
ile geometri yöntemini geçen kanıt bulunduğunda eklenir.

## Neden şimdi PMTiles değil?

Mevcut 23 kaynak dönemin her biri ayrı yüklendiğinde ham paketler yaklaşık
1,2–4,1 MB, gzip ile yaklaşık 0,47–1,35 MB aralığındadır. Örneğin 1453'te
kullanılan 1400 paketi 1,33 MB / 0,51 MB gzip'tir. Aynı makinede 25 tekrarın
ortanca JSON ayrıştırma süresi eski tek paket için 47,6 ms, 1400 paketi için
2,8 ms ölçüldü. Bu, tek seferde 5,7 MB
gzip indiren eski yapıya göre açılış aktarımını belirgin düşürür ve statik
barındırmayla çalışır. GeoJSON ayrıca mevcut doğrulama ve kaynak izleme hattını
şeffaf tutar.

PMTiles/vector-tile geçişi şu eşiklerden biri oluştuğunda yeniden değerlendirilir:

- tek dönem siyasi paketinin gzip boyutu 2 MB'ı düzenli aşarsa;
- aynı anda yüklenen ayrıntı katmanları toplamı 5 MB'ı aşarsa;
- yerel/şehir ölçeği için çok daha yoğun, kaynaklı sınırlar eklenirse;
- düşük donanımlı telefonda JSON ayrıştırma ve MapLibre kaynak kurma süresi
  kabul edilebilir etkileşim gecikmesini aşarsa.

TopoJSON kaynaklar arası ortak yay ve üretim denetimi için uygundur; ancak
MapLibre'ın doğrudan çizdiği yayın biçimi değildir. Bu yüzden v2 topoloji
denetim hattında korunur, v3 istemci paketi olarak seçilmez.

## Sonuçlar

- Dünya ilk görünümde geometrik olarak kapsanır; eski dikdörtgen kırpma yoktur.
- Seçili yıl ile kaynak yılı birbirine karıştırılmaz.
- Yeni bir olay/şehir katmanı siyasi geometriyi yeniden paketlemeyi gerektirmez.
- On yıllık gezinme sıklığı ile sınır verisinin gerçek kanıt sıklığı birbirine
  karıştırılmaz.
- Statik Vite dağıtımı ve mevcut MapLibre bileşeni korunur.
- Kaynak verinin kıtasal ölçek sınırı değişmez; paketleme tarihsel kesinlik
  kazandırmaz. Ayrıntı yalnız kaynaklı ve kendi ölçeği açık veriyle açılır.
