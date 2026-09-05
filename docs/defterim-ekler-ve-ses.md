# Defterim — kaynaklar, ekler ve sesli notlar

5 Eylül 2026. Yayın adayı hazırlandı; canlı veritabanı değişikliği gerektirmez. Önceki sürümün kapsamını `defterim-ilk-surum.md` anlatır; yeni özellikler için bu belge geçerlidir.

## Öğrencinin akışı

- **Ekle → Kütüphane:** Uygulamayla gelen ders notları aranıp deftere alınabilir. Hesapla girişte, erişim kurallarının izin verdiği kütüphane PDF/fotoğrafları ve yayımlanmış dersler de aranır. Etkileşimli notun tam belge kopyası ile kişisel Cornell sayfası oluşturulur. “Kaynak notu aç” içeriği Defterim içinde açar. Kaynaktaki etkileşimler korunur; kaynak üzerindeki alıştırma seçimleri bu defter yedeğine kaydedilmez. Kaynak görsellerinin bir kısmı uygulamanın varlıklarına bağlıdır.
- **Ekle → Dosya:** PDF’in her sayfası yazılabilir, yerinden kaymayan bir görsel altlık olur. Özgün PDF ikili dosyası ayrıca tutulmaz; metin seçme/OCR ve PDF dışa aktarma yoktur. Fotoğraflar taşınabilir öğelerdir. Seçili fotoğraf ve şekil +/− düğmeleriyle boyutlandırılır, ok tuşlarıyla taşınabilir.
- **Ekle → Şekil:** Çizgi, ok, dikdörtgen, kare, daire ve üçgen tek dokunuşla yerleştirilir. Mevcut serbest çizim ve basılı tutarak şekil düzeltme korunur.
- **Ekle → Şablon:** Düz, çizgili, kareli ve noktalı sayfalara Cornell, izometrik, nota kâğıdı, haftalık plan, kelime çalışması, soru–çözüm eklenmiştir. Toplam 10 zemin. Sayfa içeriği değişmeden zemin değiştirilir. Görsel dışa aktarım aynı zemini kullanır.
- **Sesli not:** Mikrofon izni sonrası başlatma, duraklatma, sürdürme, bitirme; kayıt adına müdahale, oynatma ve hız seçimi vardır. Yazı/çizim eklenmesi ve sayfa geçişleri kayıt zamanına bağlanır. Oynatma ilgili sayfayı açar, öğeyi seçer ve görünür alana kaydırır. Takip kapatılabilir. Öğrenci ayrıca “Bu anı işaretle” kullanabilir.
- **Üst/alt başlıklar:** Defter oluştururken ve ayarlardan başlık verilir; ana listede başlığa göre filtrelenir ve aranır. Defter içindeki sayfaların ayrıca üst ve alt başlıkları vardır. Sayfa çekmecesi bu başlıkları açılıp kapanan bir ağaçta gösterir. Yeni sayfa mevcut bölüm bilgisini devralır.

## Kayıt ve sınırlar

- Kişisel ekler sunucuya veya herkese açık bir dosya kovasına yüklenmez. Önceki hesap bazlı IndexedDB kaydı kullanılır; tarayıcı verisi temizlenirse kayıtlar kaybolabilir. Otomatik cihazlar arası kayıt hâlâ kapalıdır.
- Ekler defterin `assets` alanında tek kopya, sayfalarda kimlikle tutulur. Sayfa geri alma geçmişi büyük ikili ekleri çoğaltmaz. Düzenlenebilir JSON yedeği sesleri, görselleri, kaynak belge kopyalarını ve zaman işaretlerini içerir.
- Defter başına 100 sayfa ve 32 MB; dışarıdan seçilen dosya başına 20 MB. Fotoğraflar en uzun kenarı 1800 piksel olacak şekilde küçültülür; PDF sayfaları en çok 1600×2200 pikselde işlenir. İşlenmiş PDF toplamı 24 MB ile sınırlıdır; aşımda yarım içe aktarma yapılmaz.
- Ses 48 kbit/sn hedefiyle alınır; gerçek tarayıcı biçimi/boyutu değişebilir. Kayıt başına en fazla 60 dakika veya yaklaşık 10 MB, defter başına 50 kayıt. Her 10 saniyede o ana kadarki ses yazılır; olağandışı tarayıcı kapanışında son parça kaybolabilir. Arka plana geçiş kaydı tamamlar.
- Kayıt hatasında ses indirme yolu sunulur; kurtarılmamış ses varken yeni kayıt onu ezemez. Mikrofon reddi, bulunamaması, desteklenmeyen tarayıcı ve oynatma hatası görünürdür.
- Mevcut, henüz uygulanmamış bulut SQL’i 4 MB sınırındadır. İstemci bu sınırı aşan belgeyi sunucuya yollamadan açıklayıcı hata verir; yerel içerik korunur. Bulutta büyük ekleri desteklemek ayrı özel dosya depolaması ve erişim testleri gerektirir. Canlı şema ve özellik ayarı değiştirilmedi.
- Eski sürüm 1 yedekleri açılmaya devam eder. Yeni alanlar isteğe bağlıdır. Yeni özellikleri taşıyan yedeğin eski uygulama sürümünde açılması desteklenmez.

## Doğrulama

- Model, yedek, kayıt çakışması, Pencil ve şekil testleri: 37 kontrol geçti.
- Ortak kalem motoru: 65 kontrol geçti.
- Tarayıcıda toplam 15 ek/ses kontrolü geçti: oynatıcıdan nota ve ikinci sayfaya gitme, mikrofon izni reddi, kayıt hatasında indirme ve kurtarılmamış sesin yeni kayıtla ezilmemesi dahil. Sonuçlar `work/defterim-ekler-qa/tarayici-testleri.txt` içinde.
- Gerçek tarayıcıda PDF ve fotoğraf çözme, kilitli PDF altlığı, aşan sayfa sınırı ve desteklenmeyen dosya reddi sınandı.
- Tarayıcıda üretilmiş sessiz sesle gerçek MediaRecorder kullanıldı; gerçek mikrofon erişimi alınmadı. Ara kaydetme, duraklatma zamanı, not/sayfa zaman işaretleri, IndexedDB ve yedekten geri açma, üretilen sesin çözümlenebilmesi sınandı.
- Gerçek arayüzde defter oluşturma ve üst/alt başlık verme, kütüphaneden ders alma ve tam kaynak içeriğini açma, şekil ekleme, dosya seçiciyle iki sayfalı PDF alma, PDF üzerine yazı, yenileme sonrası korunma ve mobil başlık ağacı kontrol edildi.
- Üretim derlemesi başarılı; mevcut genel paket boyutu/PostCSS uyarıları sürüyor. 1440×960 masaüstü, 834×1112 tablet ve 390×844 telefon incelendi; yatay belge taşması yok. Şablon değişimi çizimleri korudu; hazır şekil boyutlandırma ve klavyeyle taşıma denendi.
- Fiziksel iPad/Apple Pencil/mikrofon ve hesapla giriş yapılmış uzak kütüphane akışı bu oturumda sınanmadı. Önizleme gerçek öğrenci hesabına bağlanmaz.

Yerel testler ve ekran görüntüleri: `work/defterim-ekler-qa/`. Başlangıç dosyalarının kopyası: `work/defterim-yedek-20260905/`. Test HTML/JSX dosyaları üretim uygulamasına dahil değildir.
