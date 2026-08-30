# Tarihsel harita prototipleri

Bu klasör v3 dünya atlasının üretim kaynağı değildir. Buradaki dosyalar yerel,
döneme özel araştırma ve sayısallaştırma prototipleridir; ancak yayın kapısını
geçenler ileride `public/atlas/v3/details/` üretim hattına alınabilir.

Her dönem iki aşamalı tutulur:

- `source/<yıl>-source.json`: Kaynaklara göre sayısallaştırılan veya henüz
  araştırılan siyasi maskeler, şehirler, olaylar ve fiziksel ayrıntılar.
- `<yıl>.json`: Eski prototip üreticisinin yerel uygulama çıktısı; v3 istemcisi
  tarafından okunmaz.

Bir dönem eklemek için önce `docs/tarih-atlasi-veri-sozlesmesi.md` içindeki
kaynak ve yayın kapısını uygula. Kaynak dosyasını aynı şemayla oluştur,
`scripts/buildHistoricalMap.mjs <yıl>` komutunu çalıştır ve yalnız
`publicationStatus: published` incelemesi tamamlandıysa oluşan dosyayı v3
ayrıntı paketleyicisine aç.

Devlet sınırları GeoJSON `MultiPolygon`, şehir ve olaylar GeoJSON `Point` geometrisidir. `minZoom` alanı şehir ve olayların hangi ayrıntı seviyesinde görüneceğini belirler.

1526 prototipinin kıyı çizgileri coğrafi veriye dayanır; iç siyasi sınırları ise georeferanssız elle çizilmiştir. Bu nedenle `quarantined` durumundadır ve üretim atlasında kullanılamaz. Kaynak haritalarla kontrol noktaları kurularak yeniden sayısallaştırılmadan yayınlanmamalıdır.
