---
name: drkoc-atlas-cartography
description: "DRKOÇ tarih ve coğrafya haritalarında profesyonel kartografi, semboloji, etiket hiyerarşisi, ölçek/zoom, altlık, belirsizlik stili ve MapLibre sunum kalitesi tasarla veya denetle. Geometri doğruluğunu değiştirmez; sınır verisi işi için Historical GIS becerisini kullan."
---

# DRKOÇ Atlas Cartography

Önce `AGENTS.md`, `DESIGN_SYSTEM.md`, UI ve atlas becerileri ile
`docs/tarih-atlasi-veri-sozlesmesi.md` dosyasını oku. Sunum sorununu veri sorunu
gibi, veri sorununu da CSS ile çözülebilir gibi ele alma.

## Kartografik hiyerarşi

Öğrenme nesnesi haritadır. Kalıcı paneller, logo ve kontroller harita alanıyla
yarışmamalı. Uzak zoomda büyük siyasi yapı ve birkaç ana etiket; orta zoomda
komşular, başkentler ve ana fiziksel bağlam; yakın zoomda yerleşim, rota ve yerel
notlar açılmalıdır.

- Siyasi dolgu, kıyı, devlet sınırı, idari sınır, seçim vurgusu ve olay işaretini
  ayrı MapLibre katmanları olarak tut.
- Çizgi kalınlığını zoomla ölçülü değiştir; kalın beyaz/çift konturla her devleti
  eşit derecede bağıran görünüme düşme.
- Kesinlik yalnız renkle anlatılmaz: düz/kesikli çizgi, saydamlık, bulanık bant
  veya açıklayıcı lejant kullan.
- Etiketleri önem, alan ve zooma göre sırala. Çakışmayı engelle; uzun Türkçe
  adları kısaltmak yerine uygun satır/zoom stratejisi kullan. Etiket noktasını
  poligon ortalamasıyla denize veya dışarı düşürme; kaynaklı/hesaplanmış iç nokta kullan.
- Altlığın dili ve ayrıntısı veri etiketlerini bastırıyorsa yer adlarını varsayılan
  kapalı veya ayrı katman yap.
- Projeksiyon, kapsam ve veri ölçeği uyumlu olmalı. Kıtasal veriyi yakın zoomda
  sahte ayrıntıyla sunma.

## Tarihsel dürüstlük

Seçili yıl ile kullanılan kaynak yılı farklıysa ikisini de birincil bağlamda
göster. Kaynak boşluğunu küçük dipnota saklama. UI değişikliği geometriyi,
tarihi veya kesinlik alanını değiştiremez.

## Görsel QA

Gerçek veriyi 375, 768 ve 1440 px genişliklerde incele. En az bir tartışmalı
dönem, uzun kaynak aralığı, yoğun etiket alanı, parçalı `MultiPolygon`, seçili
devlet ve tahminî idari sınır durumu aç. Yükleme, çevrimdışı altlık, klavye,
dokunma, azaltılmış hareket ve düşük güçlü cihaz davranışını kontrol et.
