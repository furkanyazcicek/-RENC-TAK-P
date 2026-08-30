# Coğrafya Atlası Veri ve Kaynak Kataloğu

Son doğrulama: 29 Ağustos 2026

Makinece okunabilir kayıt defteri **src/data/cografya/kaynaklar.js** dosyasındadır. Her kayıt şu alanları taşır: kaynak kimliği, kurum, veri seti, URL, erişim tarihi, dönem, mekânsal çözünürlük, güncelleme sıklığı, lisans, birim, sözlük, yöntem, güven, sınırlamalar, bağlı modüller ve kullanım durumu.

| Kaynak | Amaç | Durum | Temel sınır |
|---|---|---|---|
| MEB 2026 Coğrafya Programı | 9–12 çıktı omurgası | Kullanılıyor | Program çıktısı, ürün sorusu değildir |
| ÖSYM 2026 TYT | Soru sayısı ve beceri deseni | Kullanılıyor | Soru metni kopyalanmaz |
| Natural Earth / world-atlas | Küresel bağlam geometrisi | Kullanılıyor | Yerel ayrıntı kanıtı değildir |
| DRKOÇ şematik modelleri | Mekanizma öğretimi | Kullanılıyor | Gerçek sınır/ölçek iddiası taşımaz |
| MGM | İstasyon iklim serileri | Aday | İstasyon tüm ili temsil etmez |
| TÜİK | Nüfus ve yerleşme göstergeleri | Aday | İdarî sınır değişimleri izlenir |
| AFAD | Deprem tehlike katmanı | Aday | **Risk haritası değildir** |
| MTA | Diri fay/yerbilimi | Aday | Yakınlık, deprem zamanı veya riski göstermez |
| DSİ | Havza ve akım | Aday | Model ve ölçüm ayrılır |
| Tarım ve Orman Bakanlığı | Tarım/arazi | Aday | Açıklık düzeyine göre genellenir |
| Copernicus / NASA | Uzaktan algılama | Aday | Tarih, çözünürlük ve belirsizlik görünürdür |
| World Bank / UN / FAO / UNESCO | Küresel gösterge | Aday | Sınıflandırmalar doğrudan birleştirilmez |
| OpenStreetMap | Ulaşım/yerleşme bağlamı | Aday | ODbL atfı ve kesit tarihi gerekir |

“Aday” veri, lisans ve üretim yöntemi doğrulanana kadar arayüzde gerçek veri gibi sunulmaz. Veri bulunmadığı yerde sınır veya sayı uydurulmaz; şematik model açıkça etiketlenir.

