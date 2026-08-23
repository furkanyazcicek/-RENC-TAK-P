# Tarihsel harita veri yapısı

Her dönem iki aşamalı tutulur:

- `source/<yıl>-source.json`: Kaynaklara göre sayısallaştırılan siyasi maskeler, şehirler, olaylar ve fiziksel ayrıntılar.
- `<yıl>.json`: Üretim betiğinin siyasi maskeleri Natural Earth 1:50m kara geometrisiyle kesiştirerek oluşturduğu uygulama verisi. Dünya kara katmanı da yalnızca dönemin `bounds` alanına kırpılır.

Bir dönem eklemek için kaynak dosyasını aynı şemayla oluştur, `scripts/buildHistoricalMap.mjs <yıl>` komutunu çalıştır ve oluşan dosyayı `index.js` kayıt tablosuna ekle.

Devlet sınırları GeoJSON `MultiPolygon`, şehir ve olaylar GeoJSON `Point` geometrisidir. `minZoom` alanı şehir ve olayların hangi ayrıntı seviyesinde görüneceğini belirler.

Bu prototipte kıyı çizgileri coğrafi veriye dayanır. Tarihsel iç siyasi sınırlar öğretim amaçlı yaklaşık rekonstrüksiyondur; akademik veya kadastro hassasiyeti iddiası taşımaz.
