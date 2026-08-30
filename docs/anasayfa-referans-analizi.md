# Ana Sayfa Referans Analizi

İnceleme tarihi: **28 Ağustos 2026**  
Referans: [Phenomenon Studio](https://phenomenonstudio.com/)  
İncelenen referans boyutları: **1280×720** ve **390×844**  
İncelenen DRKOÇ boyutları: **1440×900**, **1280×800**, **768×1024** ve **390×844**

Bu inceleme bir kopyalama çalışması değildir. Referansın renkleri, fontları, metinleri,
görselleri ve birebir kompozisyonu kullanılmaz; yalnız tasarım ilkeleri DRKOÇ'un eğitim
bağlamına dönüştürülür.

## Sistematik gözlemler

- **Hero kompozisyonu:** Koyu zeminde kısa üst etiket, büyük editoryal başlık, iki CTA ve
  hemen altında gerçek ürün/proje medyası var. DRKOÇ'ta medya, öğrencinin dokunabildiği
  öğrenme sahnesine dönüşmeli.
- **Tipografi:** Başlık az kelimeli, büyük ve güçlü satır kırılımlı; gövde metni belirgin
  biçimde daha sakin. DRKOÇ'ta Inter Tight ve Inter korunmalı, başlık mobilde 3–5 satırı
  aşmamalı.
- **Navigasyon:** Üstte sabit, ince ve içerikten daha az baskın. Masaüstünde açık menü,
  telefonda tek menü düğmesi kullanılıyor.
- **CTA ilişkisi:** Birincil CTA dolu vurgu rengi, ikincil CTA koyu yüzey içinde daha sakin.
  Mobilde ikisi de tam genişlikte ve üst üste.
- **Açık/koyu ritim:** Uzun koyu sahneler, geniş beyaz açıklama alanlarıyla kesiliyor.
  Geçişler yalnız renk değil; büyük boşluk ve geometrik alt kenarlarla okunuyor.
- **Medya/metin oranı:** Görsel kanıt süs değil, metin kadar alan kaplayan ana içerik.
  Ürün ekranları kırpılmış ve ölçekli; açıklama metni bunlarla rekabet etmiyor.
- **Asimetrik ızgara:** Küçük sorun etiketi ile büyük çözüm metni, büyük medya ile dar
  açıklama sütunu eşleştiriliyor. Tekdüze kart ızgarası kullanılmıyor.
- **Ürün gösterimi:** Gerçek ürün görüntüsü, sekme/başlık ve bağlamsal CTA ile sunuluyor.
  DRKOÇ'ta otomatik gösteri yerine kullanıcı seçimine bağlı atlas, ders notu, soru çözümü
  ve kişisel rota sahneleri kullanılmalı.
- **Güven ve kanıt:** Referans ödül, müşteri işi ve yorum gösteriyor. DRKOÇ'ta kanıtsız
  başarı metriği yerine çalışan rota, gerçek ürün yeteneği, öğrenci–öğretmen–veli rolleri
  ve örnek verinin açık etiketi kullanılmalı.
- **Kaydırma anlatımı:** Her büyük sahne tek bir işi anlatıyor; içerik ilerledikçe tema ve
  yoğunluk değişiyor. DRKOÇ sayfası referans kadar uzun olmamalı; tekrar eden analiz ve
  özellik listeleri birleştirilmeli.
- **Hover ve odak:** Hover durumları sakin hareket ve yön oku kullanıyor. Referansta bazı
  odak durumları görsel olarak zayıf; DRKOÇ görünür `focus-visible` halkasını korumalı.
- **Mobil sadeleştirme:** Navigasyon kapanıyor, CTA'lar tam genişliğe geçiyor, sahne tek
  odaklı oluyor. Yatay sahne sekmeleri kaydırılabilir ancak seçili durum daima görünür.
- **Hareket yoğunluğu:** Büyük medya ve kaydırma geçişlerinde hareket var; sürekli küçük
  animasyon sınırlı. DRKOÇ'ta hareket yalnız seçim, neden-sonuç ve sahne sürekliliğini
  anlatmalı; azaltılmış hareket tercihinde tamamen sakin alternatif olmalı.
- **Erişilebilirlik:** Semantik başlık ve bağlantı yapısı güçlü; bazı küçük büyük-harfli
  etiketler ve düşük kontrastlı ikincil metinler DRKOÇ'a taşınmamalı.
- **Olası performans maliyeti:** Uzun sayfa, büyük medya, kaydırma tabanlı hareket ve çok
  sayıda proje görseli maliyetli. DRKOÇ; CSS/SVG tabanlı hafif sahneler, görünür alanla
  sınırlı hareket ve bağımlılıksız etkileşim kullanmalı.

## Karar tablosu

| DRKOÇ'a uyarlanacak | DRKOÇ'a dönüştürülerek uygulanacak | Kesinlikle kullanılmayacak |
| --- | --- | --- |
| Büyük, kısa editoryal mesaj | Showreel → seçilebilir etkileşimli öğrenme sahnesi | Turuncu vurgu rengi ve referans fontları |
| Tek ve kontrollü vurgu | Portföy/proje kanıtı → çalışan ürün yeteneği kanıtı | Referansın birebir hero kompozisyonu |
| Gerçek ürün önizlemesi | Koyu/açık yüzey ritmi → öğrenme akışının aşamaları | Kanıtsız ödül, kullanıcı sayısı veya başarı oranı |
| Büyük boşluklarla görsel güven | Asimetrik proje ızgarası → ihtiyaç/etkileşim/kavrayış eşleşmesi | Çok uzun hizmet kataloğu ve SEO tekrarları |
| İnce ayırıcılarla kanıt alanı | Kavisli geçiş → düşük maliyetli CSS geometrisi | Otomatik ve durdurulamayan carousel |
| Sabit ama baskın olmayan navigasyon | Vurgu CTA'sı → DRKOÇ Aurora'sının ölçülü kullanımı | Her bilgi grubunu karta dönüştürmek |
| Ana ve ikincil CTA ayrımı | Kaydırma anlatımı → kısa, yoğun, tekrar etmeyen bölüm ritmi | Mor–mavi yapay zekâ sitesi klişesi |
| Mobilde tam genişlik CTA | Mobil ürün sahnesi → tek odaklı, dokunmaya uygun sahne | Masaüstü ürün ekranını telefonda yalnız küçültmek |
| Hareketin yön/durum anlatması | Hover mikro hareketi → klavye ve dokunma eşdeğeri | Sürekli parallax, ağır video ve dekoratif hareket |

## Mevcut ana sayfa içerik kararı

| Mevcut parça | Karar | Gerekçe |
| --- | --- | --- |
| Giriş, kayıt ve gizlilik bağlantıları | Koru | Temel kullanıcı akışı ve mağaza inceleme gereksinimi |
| LGS, TYT, AYT, KPSS kapsamı | Yeniden yaz | Daha kısa ve sakin bağlam etiketi olarak kalmalı |
| Analiz ürün ekranı | Yeni yapıya taşı | Gerçek ürün kanıtı; hero'daki tek kahraman olmamalı |
| Dört adımlı çalışma akışı | Benzer içerikle birleştir | “Kaydet → anla → uygula → ilerle” anlatısına yoğunlaştırılmalı |
| Öğrenci–veli–öğretmen ayrımı | Koru | Ürünün güven ve şeffaflık modelini somutlaştırıyor |
| Veri masası ve örnek tablolar | Yeniden yaz | Tam tablo yerine kısa, açıkça “örnek veri” etiketli ürün kanıtı yeterli |
| Hakkımda ve iletişim | Yeni yapıya taşı | Sayfa ritmini uzatmadan açılır bilgi alanları ve footer içinde korunmalı |
| Özellik listesi | Benzer içerikle birleştir | Atlas, ders notu, soru çözümü ve koçluk sahnelerinin içine dağıtılmalı |
| Örnek ortalama net artışı ve benzeri metrikler | Kullanma | Canlı ürün sonucu olarak doğrulanamıyor; örnek etiketi olsa da güveni gereksiz zorluyor |
| Telefon/e-posta/konum | Koru | Doğrudan iletişim ve güven için footer ile bilgi penceresinde kalmalı |

## Yeni özellik kanıtı ve ana sayfa kullanımı

| Özellik | Kullanıma hazır olduğuna dair kanıt | Ana sayfada gösterim |
| --- | --- | --- |
| Etkileşimli atlaslar | `/fizik-atlasi`, `/kimya-atlasi`, `/biyoloji-atlasi`, `/cografya-atlasi`, `/tarih-atlasi` rotaları; ilgili gerçek sayfa ve bileşenler; 23–26 Ağustos commit geçmişi | Hero'da ders seçimi ve değişen, kod tabanlı keşif sahnesi |
| AI Soru Çöz | Öğrenci navigasyonundaki `/soru-coz`; `AISolve.jsx`; 17 Ağustos “fotoğraftan tahtada adım adım çözüm” commit'i | Fotoğraftan soruyu analiz → adım adım çöz → kontrol akışı olarak doğru temsil |
| AI Koç | Öğrenci navigasyonundaki `/ai-koc`; `AICoach.jsx`; 13 Ağustos sohbet/plan commit'i | Günlük veriden kısa çalışma rotası oluşturan diyalog sahnesi |
| Etkileşimli ders notları ve testler | `/kutuphane/notlar`, `/kutuphane/sorular`; gerçek ders okuyucu, görsel bileşen ve konu testi rotaları | Kavram seçimiyle anlatım, görsel ve kısa kontrolün birlikte değişmesi |
| Öğrenci–öğretmen–veli ağı | Rol bazlı navigasyon; `/anasayfa`, `/ogretmen`, `/veli`, ödev ve mesaj rotaları | İnce rol çizgileriyle aynı öğrenme döngüsüne bağlanan güven bölümü |

Not: AI araçları ve kişisel paneller hesap gerektirir. Ana sayfadaki önizlemeler veritabanına
yazmaz; yalnız mevcut davranışın doğru, yerel bir temsilidir. Atlas rotaları girişsiz
açılabildiği ölçüde doğrudan incelenebilir.
