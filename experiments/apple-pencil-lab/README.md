# DRKOÇ Apple Pencil Laboratuvarı

Canlı ders tahtasından tamamen bağımsız Apple Pencil prototipi. Bu klasördeki uygulama React, Supabase, LiveKit, tahta senkronizasyonu ve `perfect-freehand` kullanmaz.

## Test sırası

1. Apple Pencil ile hızlıca `içi`, `AFA`, `Türkçe` ve `minimum` yaz.
2. Noktaları ve harflerin sonradan eklenen kısa kollarını beklemeden peş peşe koy.
3. Basınç açık ve kapalıyken ayrı ayrı dene.
4. Sorun olursa sağ üstteki tanı düğmesine basıp bilgiyi kopyala.

## Entegrasyon kapısı

Bu çekirdek gerçek iPad testinde arka arkaya hızlı temasları kayıpsız göstermeden canlı ders tahtasına taşınmayacak. Başarılı olursa kalem motoru ayrı bir modül olarak paketlenecek; canlı senkronizasyon ve ders kaydı daha sonra bu modülün dışından eklenecek.
