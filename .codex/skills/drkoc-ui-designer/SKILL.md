---
name: drkoc-ui-designer
description: "DRKOÇ içindeki kullanıcıya görünen React arayüzlerini ürün, UI/UX, responsive davranış, etkileşim ve görsel kalite açısından tasarla veya iyileştir. Ön yüz, sayfa düzeni, stil, bileşen, ekran görüntüsüne göre yeniden tasarım ve görsel cila işlerinde kullan; yalnızca arka uç ya da salt içerik işlerinde kullanma."
---

# DRKOÇ UI Tasarımcısı

Kullanıcıya görünen işi yalnızca işlevsel değil; anlaşılır, sakin, karakterli, erişilebilir ve görsel olarak doğrulanmış hâle getir. `AGENTS.md` ürün anayasasına uy ve uygulama standardının tek kaynağı olan `DESIGN_SYSTEM.md` dosyasını oku.

Atlas veya etkileşimli eğitim görselleştirmesi söz konusuysa bu beceriye ek olarak `../drkoc-atlas-designer/SKILL.md` dosyasını da kullan; öğrenme deneyimi kararlarında atlas becerisi daha özeldir.

## Başlamadan önce

İşe göre gerekli olanları incele:

- ilgili sayfa, bileşen, stil dosyası ve rota;
- `src/components/ui/`, `src/index.css`, `tailwind.config.js` ve varsa mevcut konuya özgü belirteçler;
- komşu ekranlarda yerleşmiş iyi ürün kalıpları;
- kullanıcı tarafından verilen ekran görüntüsü, taslak, Figma veya referans;
- çalışan ekranın mevcut masaüstü ve mobil görünümü.

Mevcut UI'da neyin iyi çalıştığını açıkça ayır. Görsel bir görev, davranışsal mantığı gereksiz yere yeniden yazma izni değildir.

## Kısa tasarım çerçevesi

Kodlamadan önce kendi çalışma notunda şu kararları ver:

- Amaç: Kullanıcı bu ekranda hangi işi bitiriyor?
- Kitle: Kim kullanıyor, ilk neyi tarıyor, en sık neyi tekrarlıyor?
- Birincil öğe: İlk bakışta ne görünmeli veya yapılmalı?
- İkincil öğeler: Birincil işi ne destekliyor?
- Ton: Sakin, teknik, editoryal, keşif odaklı veya başka hangi ürün yönü uygun?
- Ayırt edici fikir: Ekranı DRKOÇ'a özgü ve niyetli kılan tek ana tasarım kararı ne?
- Sınırlar: Mevcut belirteçler, bileşenler, veri/iş mantığı, responsive, erişilebilirlik ve performans.

Bu çerçeve kısa olmalı; kullanıcı açık bir yön verdiyse onu yeniden tartışmaya açma.

## Tasarım kararları

### Hiyerarşi önce gelir

Birincil, ikincil, üçüncül ve yardımcı öğeleri ölçek, boşluk, tipografi, hizalama, konum ve kontrastla ayır. Kenarlık ve gölgeyi eksik hiyerarşiyi maskelemek için kullanma.

### Yüzey eklemek gerekçeli olmalı

Her içerik grubundan önce “Bu içerik gerçekten ayrı bir yüzeye ihtiyaç duyuyor mu?” diye sor. Yakınlık, başlık, boşluk ve hizalama yetiyorsa kart ekleme. Kart içinde karttan kaçın. Cam, gradyan, gölge ve büyük yuvarlaklık yalnızca rolü açıksa kullanılmalı.

### DRKOÇ dili

- Premium hissi süs yoğunluğından değil oran, ritim, metin kalitesi ve etkileşim kesinliğinden üret.
- Jenerik SaaS paneli, bento yığını, ortalanmış büyük pazarlama başlığı ve rastgele mor-mavi gradyan kalıplarına yaslanma.
- Kullanıcı saatlerce bakabilir: düşük görsel gürültü, yeterli nefes alanı ve rahat okuma esastır.
- Var olan Aurora dili ana üründe ölçülü vurgu olarak kalır. Atlas veya özel araç kendi semantik renk dilini kullanabilir; ürün ailesiyle tipografi, kontrol kalitesi ve davranış üzerinden bağ kurar.

### Etkileşim görünür durum taşır

İlgili olan her denetim için şu durumları düşün: varsayılan, hover, klavye odağı, basılı, seçili, yükleniyor, devre dışı, hata ve başarı. Sürükleme, yakınlaştırma, oynatma veya seçim içeren araçlarda anlık durumu ve geri bildirimi ayrıca görünür kıl.

Kontroller:

- uygun olduğunda en az 40×40 px, dokunma ağırlıklı kullanımda tercihen 44×44 px hedef sunmalı;
- görünür veya programatik erişilebilir ada sahip olmalı;
- yer değiştirerek zıplamamalı, uzun Türkçe etiketlerde taşmamalı;
- mobilde hover'a bağımlı bilgi saklamamalı;
- tehlikeli veya geri döndürülemez eylemi sakin ama açık biçimde ayırmalı.

### Hareket anlam taşır

Animasyonu durum, neden-sonuç, yön, katman veya süreklilik anlatmak için kullan. Küçük durum geçişlerinde yeniden hedeflenebilir CSS geçişlerini; aşamalı giriş ve yükleme gibi tek seferlik akışlarda anahtar kareleri tercih et. Özellikleri açıkça sınırla; `transition: all` ve `will-change: all` kullanma. `prefers-reduced-motion` davranışını koru.

## Uygulama yaklaşımı

- Önce mevcut `src/components/ui/` bileşenlerini ve semantik belirteçleri kullan.
- Genel ürün ekranlarında `AppShell`, alan bileşenleri, ortak düğme/kart/modal/sekme ve `chartTheme` kalıplarını yeniden kullan.
- Atlasa özgü bağımsız kabuk veya sahne gerekiyorsa stilleri atlas kökü altında kapsamla; genel sayfaya sızdırma.
- Yeni renk, boşluk, gölge veya köşe değeri eklemeden önce mevcut karşılığını ara. Gerçek bir semantik rol eksikse belirteci merkezi katmana ekle ve belgeyi güncelle.
- Satır içi hex değerleri yalnızca veri görselleştirmesindeki veri/konu semantiği veya üçüncü taraf harita stili gibi gerçek bir gerekçe olduğunda, kapsamlı değişken arkasında kullan.
- Yeni bağımlılık eklemeden önce mevcut React, CSS, SVG, Recharts, MapLibre ve tarayıcı yeteneklerinin yeterli olup olmadığını kontrol et.

## Zorunlu görsel döngü

Önemli ön yüz işinde ortam destekliyorsa:

1. Mevcut uygulamayı çalıştır ve doğru rotayı aç.
2. Değişiklikten önce ekranı gerçek içerikle incele; ana sorunları önem sırasına koy.
3. Yapıyı ve hiyerarşiyi tasarla, sonra uygula.
4. Sayfayı yeniden yükle; kodu değil, render edilen sonucu değerlendir.
5. Hedefle karşılaştır ve en etkili sorunları düzelt.
6. Gerekliyse ikinci geçişte görsel ritmi, üçüncüde etkileşim/polisi, son geçişte responsive ve erişilebilirliği ele al.
7. Masaüstü ile en az bir dar ekranı doğrula; görevin riski yüksekse telefon, tablet ve geniş masaüstü boyutlarını incele.

Tarayıcı veya ekran görüntüsü aracı yoksa bunu saklama. Derleme, kaynak tabanlı responsive denetim ve mevcut testleri çalıştır; görsel doğrulamanın yapılamadığını son raporda sınır olarak belirt.

## Görsel öz eleştiri

Render edilen sonucu şu sorularla değerlendir:

- İlk bakışta doğru şey mi öne çıkıyor?
- Ne hâlâ jenerik, amatör veya kazara yapılmış görünüyor?
- Hangi alan kalabalık, oransız ya da gereğinden büyük?
- Tipografi ve boşluklar tutarlı bir ritim kuruyor mu?
- Kontroller içerikle rekabet ediyor mu?
- Benzer durumlar aynı, farklı önem düzeyleri yeterince farklı mı?
- Türkçe metinler kesiliyor, taşma yapıyor veya düğmeleri zıplatıyor mu?
- Mobil deneyim masaüstünün küçültülmüş kopyası mı, yoksa uygun şekilde yeniden düzenlenmiş mi?
- Klavye odağı, kontrast, dokunma hedefi ve azaltılmış hareket korunuyor mu?
- Görsel incelik performans veya okunabilirliği düşürüyor mu?

İlk teknik kabul seviyesinde durma; yalnızca anlamlı düzeltmeleri sürdür.

## Doğrulama ve teslim

En azından ilgili akışı, yükleme/boş/hata gibi erişilebilen durumları, responsive taşmayı ve proje derlemesini doğrula. Görsel görevde yalnızca testlerin geçmesini görsel kabul sayma.

Son raporda kısa biçimde şunları belirt:

- değişen ekranlar ve tasarım kararları;
- korunan mevcut davranışlar;
- incelenen ekran boyutları ve etkileşimler;
- derleme/test sonucu;
- varsa görsel doğrulama veya araç sınırlaması.
