# Defterim — ilk çalışan sürüm

5 Eylül 2026. Yerel geliştirme ve doğrulama tamamlandı; canlı yayın yapılmadı.

## Kullanım ve kapsam

- Öğrenci ve öğretmen menüsünde **Defterim**, kişisel `/defterim` ekranını açar.
- Girişsiz deneme yalnız geliştirmede `/defterim-onizleme` üzerinden açılır. Ayrı bir yerel kullanıcı anahtarı kullanır; gerçek hesaba bağlanmaz. Üretim derlemesinde bu rota yoktur.
- Defter oluşturma, ders/konu verme, başlık ve yazılı içerikte arama, arşivleme ve arşivden çıkarma vardır. Kalıcı silme yoktur.
- Çok sayfalı defter, düz/çizgili/kareli/noktalı zemin, kalem, fosforlu kalem, çizginin tamamını silen silgi, seçme/taşıma, metin, çizgi/ok/dikdörtgen/elips, sayfayı çoğaltma, geri alma/yineleme bulunur.
- Yakınlaştırma ve kaydırma; isteğe bağlı parmakla çizim; mevcut DRKOÇ kalem basıncı ve iPad Pencil giriş yaklaşımı kullanılır.
- Telefon için “Sayfa metinleri” görünümü yazılı notları büyük ve düzenlenebilir metin olarak gösterir. El yazısını metne çevirmez.
- Düzenlenebilir `.drkoc.json` yedeği indirilip başka cihazda açılabilir. İçe aktarma yeni kimlik üretir; var olan defteri ezmez. Sayfa PNG olarak indirilebilir.
- PDF ve fotoğraf içe aktarma, PDF üzerine yazma, PDF dışa aktarma, el yazısı tanıma ve paylaşım bu ilk sürümde yoktur. Rnote dosyaları doğrudan açılmaz.

## Kayıt ve eşitleme sınırı

Etkin sürüm notları tarayıcının IndexedDB alanında, hesap kimliğine göre ayrı tutar. Yenileme ve defter geçişlerinde kayıt korunur. Tarayıcı verilerini temizlemek veya cihazı değiştirmek bu kayıtları taşımadığı için arayüz yedek almayı açıkça anlatır. Otomatik cihazlar arası eşitleme **kapalıdır**.

Yazmalar sıraya alınır ve yerel sürüm karşılaştırılır. İki sekme aynı eski defteri değiştirirse ikinci içerik “korunan kopya” olur. Çakışmadan önce sıraya alınmış yazılar da bu kopyaya gider; özgün defter sonradan yeniden düzenlenebilir. Kayıt hatasında başarı mesajı verilmez; yedek alma ve yeniden deneme sunulur.

`VITE_NOTEBOOK_CLOUD_ENABLED=true` olduğunda kullanılacak Supabase adaptörü ile `supabase/migration_student_notebooks.sql` hazırlandı. **Bu ayar değiştirilmedi ve SQL canlı veritabanına uygulanmadı.** SQL yalnız sahibine okuma izni verir; yazma, sahipliği ve beklenen sürümü kontrol eden işlev üzerinden yapılır. Doğrudan güncelleme/silme izni verilmez.

Hesapta eşitlemeyi açmadan önce ayrı bir test ortamında gerçek Supabase oturumları, oturum değişimi, ağ kesintisi/yeniden bağlanma ve iki cihaz birlikte denenmelidir. Yerel PostgreSQL testi bu uçtan uca doğrulamanın yerine geçmez. Yayın ve canlı şema değişikliği ayrıca yetkilendirilmelidir. Geri dönüşte özellik ayarı kapatılır, öğrenci kayıtları korunur.

## Uygulama kararları

- Rnote'dan kod taşınmadı. Referans değerlendirmesi `rnote-incelemesi-ve-ogrenci-not-paneli.md` içindedir.
- React, ortak UI bileşenleri, mevcut tema ve kalem motoru kullanıldı; yeni bağımlılık eklenmedi.
- Ana nesne sayfadır. Kütüphane uygulama kabuğunu kullanır; düzenleyici daha çok yazı alanı bırakmak için kendi sade kabuğuna sahiptir.
- Sayfa koordinatları ekrandan bağımsızdır: 1000 × 1414. Ekran boyutu değişince notun konumu değişmez.
- Etkin çizgi ayrı Canvas katmanında güncellenir; her pointer hareketi React durumunu değiştirmez. Canvas çözünürlüğü katman başına yaklaşık dört milyon pikselle sınırlandırılır.
- Sürüm 1 biçiminde en çok 100 sayfa ve 4 MB defter kabul edilir. Gelen dosya, yerel belge ve uzak belge aynı istemci doğrulamasından geçer. Bilinmeyen sürüm ve geçersiz koordinat reddedilir.
- Klavyeyle metin ekleme/düzenleme, erişilebilir kontrol adları, modal odak yönetimi, görünür seçili/kapalı durumlar ve azaltılmış hareket korunur. Çizim için fare veya dokunmatik/kalem gerekir.

## Doğrulama

- `npm run build`: geçti. Mevcut PostCSS uyarısı ve genel paket boyutu uyarıları sürüyor. Defter ekranı ayrı yüklenir; son JS çıktısı yaklaşık 37 KB, gzip 13,5 KB.
- `node --test scripts/test-defter.mjs`: 7 test geçti. Dosya doğrulama, yeni kimlikle içe aktarma, kayıt hatası, iki sekme çakışması, geciken ağ yanıtı ve uzak sürüm çakışması sınandı.
- `node scripts/test-defter-rls.mjs`: mevcut PGlite ile geçici, ağsız PostgreSQL ortamında geçti. Tekrar kurulum, sahiplik, doğrudan yazma/silme yasağı, yinelenen istek, eski sürüm, geçersiz belge ve anonim erişim sınandı.
- `npm run test:ink`: mevcut kalem motorunun 65 kontrolü geçti.
- `git diff --check`: geçti. İlgisiz çalışma alanı değişiklikleri korundu.
- Tarayıcıda masaüstü 1440 × 960, tablet 834 piksel genişlik ve telefon 390 × 844 düzenleri görsel olarak incelendi; yatay sayfa taşması yoktu. 390 pikselde ana araçlar yaklaşık 44 × 44 dokunma alanına sahip.
- Gerçek UI üzerinden oluşturma, metin ekleme/düzenleme, yenileme sonrası kayıt, kalem/fosforlu/silgi, geri alma/yineleme, çizgiyi taşıma, şekil çizme, sayfa değiştirme, zemin değiştirme, içerikte arama ve arşivden çıkarma denendi.
- Gerçek yedek indirilip dosya seçiciyle yeniden açıldı; iki sayfa ve dört öğe korundu. PNG dosyası indirilip görsel olarak incelendi.
- Tarayıcı aracının indirme olayı bildirimi zaman aşımına uğradı; dosyanın İndirilenler'de oluşması ve tekrar açılmasıyla indirme doğrulandı.
- Fiziksel telefon/tablet ve Apple Pencil üzerinde deneme yapılmadı. Dokunma/kalem yolları mevcut motor ve kod kontrollerine dayanır; gerçek cihaz kabulü yayın öncesinde gereklidir.

Ekran görüntüleri ve deneme yedeği `work/defterim-qa/` klasöründedir; yalnız örnek fizik notu içerir.

## Apple Pencil karşılaştırması ve düzeltmesi

Canlı ders tahtasındaki `LessonBoard.jsx` ve ortak `iosTouchInput.js` ile karşılaştırıldı. Defterim'de doğrudan, pasif olmayan iOS Touch dinleyicileri zaten vardı. Eksik olan temas ömrü korumaları tamamlandı; canlı ders tahtası değiştirilmedi.

- iPadOS masaüstü site kipinde de tanınır. Pencil Touch yolunda, Android/Windows kalemleri Pointer yolunda kalır.
- `touchcancel` alınmış yazıyı artık silmez; canlı tahtadaki gibi tamamlar.
- Bitiş olayının `changedTouches` alanı eksikse etkin `touches` listesi kontrol edilir; giriş takılı kalmaz.
- Önceki kalkış kayıpsa yeni temas önceki yazıyı koruyarak ayrı bir iz başlatır. Aynı temas kimliğinin tekrar kullanılması da sınanır.
- Avuç/parmak ve uyumluluk Pointer olayları Pencil izini üstlenemez.
- Odak kaybı, görünürlüğün kaybolması ve araç kapanışı etkin izi tamamlayıp kalem kilidini kaldırır. Sayfa üstünde yerel `selectstart` engellenir.
- Aynı karedeki hızlı izler React güncellemesini beklemeden birikir. Araç değişimi sırasında eski sayfa verisi son izi geri alamaz.
- `node --test scripts/test-defter-pencil.mjs scripts/test-defter.mjs`: 17 test geçti; 10'u yeni Pencil yaşam döngüsü testidir. Mevcut 65 kalem kontrolü de geçti.
- `work/defterim-qa/pencil-input-test.html`: gerçek NoteCanvas bileşeninde 8 tarayıcı senaryosu geçti; aynı karede 100 kısa çizgi, iptal, eksik/kayıp bitiş, avuç/Pointer çakışması, odak kaybı, araç kapanışı ve metin seçimi denendi. Test sayfası yapay iPadOS ortamı/Touch olayları kullanır, gerçek defter verisine bağlanmaz ve üretim uygulamasına dahil değildir.

Bu doğrulama fiziksel iPad + Apple Pencil testinin yerine geçmez. Gerçek cihazda hızlı el yazısı, noktalı harfler, avuç dayama ve uygulamadan çıkıp dönme ayrıca denenmelidir.
