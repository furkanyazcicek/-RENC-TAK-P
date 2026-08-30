# Tarih Atlası pilot araştırma raporu

**Sürüm:** v3 kaynaklı ayrıntı pilotu  
**Kapsam:** 0–1960 dünya görünümü, Türk/Osmanlı tarihi odaklı derin kesitler

## Sonuç

Atlasın zaman kaydırıcısı yıl düzeyinde çalışır ve 0–1960 arasında 197 adet
10 yıllık gezinme durağı içerir. Genel siyasî katmanda 34 gerçek kaynak
görüntüsü vardır. Kendi görüntüsü olmayan on yıllarda yeni sınır üretilmez;
en yakın kaynak görüntüsü, kanıt yılı ve farkı açıkça gösterilir.

Kaynaklı ayrıntı dilimleri:

| Dönem/yıl | Yayınlanan ayrıntı | Bilerek yayınlanmayan |
|---|---|---|
| 552–840 | Orhun Vadisi ve Ordu-Balık bağlam noktaları | Göktürk/Uygur kesin siyasî sınırı |
| 1071 | Malazgirt olay noktası | 1071 özel devlet sınırı |
| 1402 | Ankara Savaşı noktası ve tarih ihtilafı | Fetret Devri polygonu |
| 1453 | Konstantinopolis ve fetih olayı | 29 Mayıs öncesi/sonrası özel sınır |
| 1514 | Çaldıran olay noktası | Savaş sonrası nüfuz/sınır polygonu |
| 1526 | Mohaç olay noktası | Georeferanssız eski elle çizilmiş prototip |
| 1590–1699 | 35 tahminî eyalet, dört yer, Haçova olayı, temsili rota | Kesin eyalet sınırı ve gerçek yol izi |
| 1699 | Karlofça antlaşma noktası | 1699–1701 sınır komisyonu hattı |
| 1774 | Küçük Kaynarca yer/olay noktası ve tarih aralığı | 1774 özel siyasî sınırı |
| 1923 | Birinci Meclis ve Cumhuriyet'in ilanı | 1930 kaynağını 1923 diye yeniden adlandırmak |

## Kritik bulgular

- Genel kaynak akademik yerel sınır kesinliği iddia etmez. 1100 ve 1200
  Anadolu görüntülerinde bilinen tarihsel eksikler vardır ve uyarı korunur.
- `public/atlas/v3/political/1923.json` adlı eski dosyanın varlığı 1923 kanıtı
  değildir; dosya adıyla içerik kaynağı birbirine karıştırılmamalıdır.
- Karadeniz, Ege ve Rusya çevresindeki önceki beyaz şerit sorunu sunum katmanı
  ve ortak kıyı maskesiyle azaltılabilir; fakat kaynakta gerçekten kayıt olmayan
  kara, komşu devlete rastgele verilmez ve no-data olarak kalır.
- CShapes daha sık tarih çözünürlüğü sağlayabilir; ancak CC-BY-NC-SA lisansı
  yüzünden DRKOÇ'un kullanım biçimi netleşmeden üretime eklenmemiştir.

## Sonraki araştırma sırası

1. 1299 kuruluş bağlamı ve erken Osmanlı merkezleri;
2. 1517 Mısır'ın fethi ve idarî statü değişimi;
3. 1571 İnebahtı, 1683 Viyana ve 1878 Berlin;
4. 1913–1923 arasında hukukî iddia, işgal ve fiilî denetimi ayrı katmanlar;
5. lisansı uygun, georeferanslı haritalardan kontrol noktaları belgeli özel sınır sayısallaştırmaları.

Her yeni siyasî snapshot, iki bağımsız tarih incelemesi ve bir GIS/topoloji
incelemesi tamamlanmadan `reviewed/published` durumuna yükseltilmemelidir.
