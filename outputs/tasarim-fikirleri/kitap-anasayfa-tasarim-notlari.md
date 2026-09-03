# DRKOÇ — Kitap ana sayfası

## Referanstan uygulamaya

Beğenilen `kitap-gecis-masaustu-v3.png` ve `kitap-gecis-mobil-v2.png` görselleri
incelendi. Önceki önizlemedeki mor ışık, kareli arka plan, metinden kopuk küçük
kitap ve düz dönen yapraklar değiştirildi.

| Görseldeki ayrıntı | Ana sayfadaki karşılığı |
| --- | --- |
| Koyu, mat çalışma masası | Düşük kontrastlı lacivert sahne; ışık kitabı öne çıkarıyor. |
| Bez cilt ve gömme marka | Özel üretilmiş kumaş dokusu, kenar ışığı, sırt oluğu ve kabartma/gömme yazı etkisi. |
| Fiziksel kitap kalınlığı | Ayrı çizilen kâğıt katmanları, sert arka kapak ve temas gölgesi. |
| Sıcak, basılı sayfalar | Fildişi yüzey, ince lif dokusu, sayfa numaraları, üst bilgi ve editoryal başlıklar. |
| Birlikte kıvrılan yapraklar | Cilde bağlı sürekli eğriler; içerik yaprağın yüzeyiyle birlikte şekil değiştiriyor. |
| Beş içerik alanı | Atlaslar, Ders Notu, Soru Çöz, AI Koç ve Analiz. |
| Fizik, yaprak ve çözüm çizimleri | Metinle aynı sayfaya basılan örnek modeller; analiz ve plan verileri tanıtım örneği olarak belirtiliyor. |
| Küçük masa ayrıntıları | Koyu kalem, sade defter, geri planda yaprak dalı ve mor kumaş ayraç. |
| Son sayfada ürün | Kâğıt ve cilt görünümü içinde mevcut çalışan öğrenme sahnesi; kayıt/giriş bağlantıları korunuyor. |
| Mobil fotoğrafın yakın kadrajı | Açık kitabın sağ sayfası telefonda büyütülüyor; bölüm denetimleri altta kalıyor. |

Bu, fotoğrafı arka plana koyan bir maket değil: kitap yerel olarak çiziliyor,
öğrenme araçları gerçek React arayüzü olarak çalışıyor. Bu nedenle üretilmiş
fotoğrafla piksel eşitliği değil, malzeme, hiyerarşi ve hareket uyumu hedeflendi.

## Doğrulama

- Gerçek ana sayfa `/` ve geliştirme önizlemesi `/kitap-gecis-onizleme` aynı bileşeni kullanır.
- 390×844 telefon, 768×1024 tablet ve 1440×900 masaüstü boyutlarında görsel kontrol.
- Kitap bölüm denetimleri, deneyime geçiş ve başa dönüş.
- Fizik açısı: 45° → 46°, tepe 10,0 → 10,3 m.
- Ders notu: aktif taşımada enerji ve yön açıklaması değişiyor.
- Soru çözümü: üçüncü adımda `17 = 17 ✓` kontrolü.
- AI Koç: Fen odağı ilgili kısa rotayı gösteriyor.
- Klavyeyle sekme değişimi; mobil menüde Escape ile kapanış ve odak iadesi.
- Yatay taşma ve tarayıcı hata kontrolleri.
- `scripts/test-book-home.mjs`: bölüm eşleştirmeleri, hareket sürekliliği,
  cilt bağlantısı ve 33.330 sonlu izdüşüm kontrolü.
- Üretim derlemesi başarılı. Projedeki mevcut büyük paket ve PostCSS uyarıları devam ediyor.
- Sistem hareket azaltma tercihi kodda ve CSS’de korunuyor; gerçek işletim
  sistemi ayarı değiştirilmedi. Fiziksel cihaz testi yapılmadı.
- Yayına alınmadı; canlı öğrenci verisine dokunulmadı.

## Doku varlığı ve üretim istemi

Yerleşik görsel üretim aracı kullanıldı; ücretli API/CLI kullanılmadı.
Uygulama varlığı: `public/images/landing/book-cloth-navy.jpg` (626 KB).
Kayıpsız orijinal: `outputs/tasarim-fikirleri/kitap-cilt-dokusu-orijinal.png`.

Kullanılan istem:

> Use case: photorealistic-natural. Asset type: seamless 1024x1024 square material texture for a real-time rendered hardcover book on a sophisticated education website. Primary request: Generate a FULL BLEED closeup of dark midnight navy blue buckram bookbinding cloth, densely fine woven linen/cotton fibers, the expensive tightly bound traditional fabric of a premium scientific encyclopedia. Orthographic directly overhead flat surface, absolutely even lighting, uniform material, dark blue not violet. Fine natural weave visible at microscopic scale, organic subtle fiber irregularities, faint supple variation. Palette predominantly #142034 and #1b293e; subtle thread highlights #29384d. The entire square is only flat fabric material from edge to edge. NO book silhouette, NO spine, NO border, NO text, NO letters, NO objects, NO gradient lighting, NO folds, NO embossing, NO shadows, NO glow, NO panels. Not denim, not leather, not burlap; fine bookbinding cloth. Photorealistic natural material albedo texture, tileable all four edges, high quality macro detail.

Görsel üretim yalnız kumaş malzemesi içindir. Sayfalar, yazılar, modeller,
gölgeler, eğriler ve ürün etkileşimleri uygulamanın kendi çizimi ve bileşenleridir.
