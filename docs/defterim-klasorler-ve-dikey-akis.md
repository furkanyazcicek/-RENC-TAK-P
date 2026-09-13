# Defterim — not uygulaması düzeni, klasörler, dikey akış ve hesap eşitlemesi

13 Eylül 2026. Önizlemede doğrulandı. Canlı veritabanı değişikliği ve yayın ayrıca onaylanacak.

## Ne değişti

### Kütüphane (`/defterim`)
- Tam ekran not uygulaması düzeni: solda **Klasörler** ağacı, sağda büyük başlık, **Tüm Notlar · En Yeniler · Favoriler · Dosyalanmamış** sekmeleri ve sayfa önizlemeli not kartları.
- Klasörler renkli, en fazla üç kat iç içe. Yeni klasör, alt klasör, ad/renk düzenleme, klasör silme. Silinen klasördeki notlar **silinmez**, "Dosyalanmamış"a düşer.
- Not menüsü: favori, klasöre taşı, yeniden adlandır, çoğalt, yedeğini indir, arşivle. Masaüstünde kart klasöre sürüklenebilir.
- **+ Yeni**: yeni not (seçili klasörde), yeni klasör, PDF/fotoğraftan not, yedek dosyası aç.
- Arama; not adı, klasör, sayfa başlığı ve klavyeyle yazılan metinde çalışır. Seçili klasör ve sekme adres çubuğunda durur; geri tuşu çalışır.
- Telefonda klasörler soldan açılan çekmecede, kartlar iki sütun.
- İlk sürümdeki "üst başlık / alt başlık" alanları bir kez klasöre çevrilir; aynı ad iki cihazda aynı klasör kimliğini üretir.

### Düzenleyici
- Yüzen araç çubuğu: kalem, fosforlu kalem, silgi, metin, seç, şekil, kaydır · ekle, sesli not, parmakla çiz · geri al, yinele, paylaş, sayfalar, ayarlar. Kalem/fosforlu/şekil seçiliyken ikinci satırda renk ve kalınlık.
- Sayfalar **dikey belge** olarak alt alta: tek parmakla sürükle, bırakınca ivmeyle süzülür; iki parmakla odak noktası etrafında yakınlaştır; fare tekerleği ve Ctrl + tekerlek; PageUp/PageDown/Home/End. Canlı ders tahtasındaki `pageFlow.js` hesapları kullanılır.
- Kalem hangi sayfaya değerse oraya yazar; iz komşu sayfaya taşınmaz.
- Belge sonunda **Standart · Çizgili · Kareli · Noktalı · İçeri Aktar · Tara · Şablonlar** şeridi. "Tara" telefonda kamerayı açar, fotoğraf yazılabilir sayfa olur.
- Son sayfanın alt %20'sine yazınca yeni sayfa kendiliğinden eklenir (100 sayfa sınırı).
- Sayfalar paneli: önizleme ızgarası, çoğalt, yukarı/aşağı taşı, sil (onaylı).
- Geri alma bütün notta ortak (son 100 adım).

Apple Pencil Touch yolu, avuç reddi, basınç, tahmin katmanı ve şekil düzeltme motoru değiştirilmedi; yalnız kaydırma/yakınlaştırma sayfadan akışa taşındı.

## Kayıt ve eşitleme

- Notlar ve klasörler önce cihaza (IndexedDB) yazılır. Kalem kalkışı ağ beklemez.
- Hesapla eşitleme varsayılan **açık**. Vercel'de `VITE_NOTEBOOK_CLOUD_ENABLED=false` ile kapatılır.
- Tablo/işlev/kova canlıda yoksa hata gösterilmez: notlar cihazda kalır, 5 dakikada bir yeniden denenir. Kod veritabanından önce yayına alınabilir.
- Her 5 saniyede yalnız **kimlik + revizyon** listesi iner; içerik yalnız başka cihazda değişen not için indirilir.
- Yazarken not her eşitlemede gönderilmez: yazma 4 sn durunca ya da en geç 30 sn'de bir; sekmeden/uygulamadan çıkınca hemen.
- Sekme gizliyken zamanlı eşitleme çalışmaz; sekmeye dönünce çalışır.
- PDF sayfası, fotoğraf ve ses **ayrı dosya** olarak `defter-ekleri` özel kovasına yüklenir; not belgesinde yalnız yolu kalır. Cihazdaki kopya veriyi korur; diğer cihaz eki bir kez indirip önbelleğe alır. Büyüyen ses kaydı 30 sn değişmeden kalınca yüklenir.
- Tek bir not bulut sınırını (4 MB, ekler hariç) aşarsa yalnız o not cihazda kalır, kartında "Bu cihazda" yazar; diğer notların eşitlenmesi durmaz (eski sürümde duruyordu).
- Kalem koordinatları 2, basınç 3 ondalığa kısaltılır; belge yaklaşık üçte birine iner.
- Çakışma: iki cihaz aynı eski notu değiştirirse bu cihazdaki sürüm "korunan kopya" olarak saklanır; hiçbir sürüm sessizce silinmez. Klasörlerde son yazan kazanır.

## Canlıya uygulanacak SQL

Sırayla, Supabase SQL Editor'de:

1. `supabase/migration_student_notebooks.sql` — not tablosu + revizyon kontrollü kaydetme işlevi
2. `supabase/migration_student_notebook_folders.sql` — klasör tablosu + kaydetme işlevi + `defter-ekleri` özel kovası ve iki kural

İkisi de yalnız yeni nesne ekler, mevcut tablolara ve öğrenci verisine dokunmaz, tekrar çalıştırılabilir. İstemciye doğrudan yazma/silme izni yoktur; kova kuralı yalnız kendi klasörüne yükleme ve okuma verir.

**Geri dönüş:** `VITE_NOTEBOOK_CLOUD_ENABLED=false` + yeniden yayın. Kayıtlar korunur. Veri oluştuktan sonra tabloyu kaldıran otomatik geri dönüş yoktur.

**Maliyet notu:** Ek dosyaları Supabase dosya depolama kotasını kullanır (PDF sayfası ~150–400 KB, 10 dk ses ~3–4 MB).

## Doğrulama

- `npm run test:defter`: 79 test (14'ü klasör/eşitleme/akış için yeni).
- `node scripts/test-defter-rls.mjs` ve `node scripts/test-defter-klasor-rls.mjs`: ağsız PostgreSQL'de sahiplik, doğrudan yazma engeli, son yazan kazanır, mezar taşı, bozuk klasör, 200 sınırı, özel kova ve anonim erişim.
- `npm run build`: geçti (bilinen büyük paket uyarıları dışında uyarı yok).
- Önizleme (`/defterim-onizleme`, 1024×1366 tablet ve 375×812 telefon):
  - Kütüphane: klasör ağacı, sekmeler, 8 kartın 8'inde önizleme; telefonda iki sütun, yatay taşma yok.
  - Arayüzden klasör oluşturma, klasöre geçiş, notu menüyle klasöre taşıma, sayaç.
  - Düzenleyici: 3 sayfa alt alta, yalnız ekrana yakın 2 sayfanın tuvali açık, canlı iz tuvali yalnız etkin sayfada.
  - Parmakla 300 px sürükleme + bırakınca 476 px ivme ve durma; iki parmakla %300 yakınlaştırma ve bırakınca net yeniden çizim; yakınlaştırmada yanlış çizgi oluşmadı.
  - Kalem olaylarıyla çizilen iz sayfaya işlendi (35 → 36 öğe).
  - Telefonda üst alan 178 px (ekranın %23'ü), 40 px altında düğme yok.
- Fiziksel iPad + Apple Pencil ve iki gerçek cihaz arasında eşitleme **henüz denenmedi**; canlı tablo kurulduktan sonra yapılmalıdır.
