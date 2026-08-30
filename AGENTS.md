# DRKOÇ Ürün Anayasası

Bu dosya, bu depo içinde çalışan tüm Codex oturumları için kalıcı üst düzey ilkeleri tanımlar. Ayrıntılı görsel standartların tek kaynağı `DESIGN_SYSTEM.md`; tekrar kullanılabilir çalışma akışları `.codex/skills/` altındadır. Mevcut ürün ve güvenlik bağlamı için `CLAUDE.md` içindeki yararlı kuralları da koru; çelişki varsa kullanıcının güncel isteği ve bu dosya önceliklidir.

## Ürün ve kullanıcı bağlamı

- DRKOÇ, gerçek öğrencilerin kullandığı canlı bir eğitim ürünüdür. Doğruluk, sakinlik, güven ve öğrenme değeri; özellik sayısından daha önemlidir.
- Kullanıcıyla ve kullanıcıya görünen arayüzde Türkçe iletişim kur. Teknik bir terim gerekiyorsa kısa Türkçe karşılığını da ver.
- Kullanıcı kod okumak zorunda kalmamalı. Sonuçları düz Türkçeyle, kısa ve somut anlat; yalnızca kopyalanması gereken komutları kod bloğunda göster.
- Öğrenci verilerini silme veya toplu değiştirme. Canlı veritabanında geri döndürülemez işlem yapma. Ücretli servis, temel teknoloji değişikliği ve yayına alma için mevcut yetki sınırlarını koru.
- Çalışma alanındaki ilgisiz değişiklikler kullanıcıya aittir. Onları geri alma, üstüne yazma veya biçimlendirme bahanesiyle değiştirme.

## Ürün kalitesi

Codex yalnızca çalışan koddan sorumlu değildir. Kullanıcıya görünen her işte aynı anda ürün tasarımı, UI/UX, etkileşim, eğitim deneyimi, görselleştirme, ön yüz mühendisliği ve görsel kalite bakışıyla çalış.

DRKOÇ arayüzleri şu nitelikleri taşımalıdır:

- zeki, sofistike, çağdaş ve sakin;
- kesin, tutarlı ve erişilebilir;
- etkileşimli fakat gösterişsiz;
- öğrenme amacına bağlı ve görsel olarak niyetli;
- telefon, tablet ve masaüstünde kullanılabilir;
- gerçek cihazlarda akıcı çalışacak kadar ölçülü.

Genel SaaS gösterge paneli, yönetim paneli, Bootstrap şablonu, rastgele kart koleksiyonu veya jenerik yapay zekâ sitesi görünümüne düşme. Cam, gradyan, kenarlık, gölge, yuvarlak kap ve dekorasyonu amaç değil araç olarak kullan. Ürün tasarlanmış görünmeli; bir araya getirilmiş değil.

## Atlasların temel ilkesi

**Öğrenme nesnesi kahramandır.**

Her atlas önce öğrencinin anlaması gereken merkezi nesneyi veya ilişkiyi belirler: deney, kuvvet, molekül, hücre, organ, grafik, geometrik dönüşüm, harita, arazi, gök cismi, zaman çizelgesi, olay ilişkisi veya konuya özgü başka bir model. Arayüz bu nesneyi destekler; onunla yarışmaz.

- Her ders için aynı kabuğu, rengi veya `sol panel + merkez + sağ panel` düzenini dayatma.
- Konu, öğrenme hedefi, öğrenme nesnesi, etkileşim biçimi, mekânsal gereksinim, bilgi yoğunluğu ve keşif akışına göre deney türünü seç.
- Ürün tutarlılığını tipografi, ritim, kontrol kalitesi, durum dili, erişilebilirlik ve görsel ölçülülükle kur. Dersler arasında deneysel aynılık arama.
- Doğrudan manipülasyon, görünür neden-sonuç, karşılaştırma, bağlamsal açıklama ve aşamalı açılımı uzun statik metin ve kalıcı kontrol yığınlarına tercih et.
- Fizik, kimya, biyoloji, anatomi, matematik, geometri, coğrafya, astronomi, tarih, yer bilimleri ve gelecekteki diğer alanlar eşit ölçüde atlas kapsamındadır.

### Tarih atlası için değişmez veri kuralları

- LLM tarihsel sınır koordinatı, poligon veya cephe hattı icat etmez. Geometri yalnız lisanslı vektör veri, kontrol noktaları belgeli sayısallaştırma veya kaynak geometriden deterministik GIS dönüşümüyle üretilebilir.
- Georeferanssız görsele bakarak elle yazılmış koordinatlar `quarantined` kalır ve üretim kayıt defterine alınmaz.
- Tarihsel veri/model ile MapLibre sunum katmanı ayrıdır. Renk, etiket, çizgi ve panel değişikliği geometriyi ya da tarih aralığını değiştiremez.
- Seçili yıl için ayrı kaynak görüntüsü yoksa en yakın görüntü sessizce kesin harita gibi sunulmaz; seçili yıl, kaynak yılı ve fark görünürdür. Veri boşluğu olay noktasıyla anlatılabilir, sınır uydurularak kapatılamaz.
- Kıyı hizalama iç siyasi sınırı doğrulamaz. Voronoi/erişim alanı gibi idari modeller çizgisel kanıt değil, açıkça tahminî öğretim katmanıdır.
- Tarih atlası veri sözleşmesi `docs/tarih-atlasi-veri-sozlesmesi.md`; yayın kapısı `npm run atlas:veri-dogrula` komutudur.

## Tasarım hiyerarşisi

Her önemli ekranda şu sıralamayı bilinçli kur:

1. Birincil: Öğrencinin ilk görmesi veya üzerinde çalışması gereken öğrenme nesnesi.
2. İkincil: Nesneyi değiştiren veya anlamayı kolaylaştıran kontroller ve açıklamalar.
3. Üçüncül: Gerektiğinde açılan bağlam, ayrıntı, kaynak ve karşılaştırmalar.
4. Yardımcı: Geri dönme, tema, sıfırlama ve benzeri sistem işlevleri.

Hiyerarşiyi önce ölçek, boşluk, tipografi, hizalama, yakınlık, konum ve kontrastla çöz. Her bilgi parçasını karta dönüştürme; iç içe kartlardan kaçın. Arayüz mümkün olduğunca geri çekilmeli ve öğrenme nesnesine yararlı alan bırakmalıdır.

## Beceri yönlendirmesi

- Ön yüz, UI, UX, düzen, stil, bileşen, responsive davranış, etkileşim, ekran görüntüsüne göre tasarım veya görsel cila işi için `.codex/skills/drkoc-ui-designer/SKILL.md` becerisini kullan.
- Atlas, simülasyon, etkileşimli görselleştirme, 3B öğrenme sahnesi, diyagram, harita, zaman çizelgesi, grafik veya keşif arayüzü için önce UI becerisini, ardından `.codex/skills/drkoc-atlas-designer/SKILL.md` becerisini kullan.
- Tarihsel sınır/GeoJSON/veri üretimi için ayrıca `.codex/skills/drkoc-historical-gis/SKILL.md`; tarihsel iddia ve kaynak araştırması için `.codex/skills/drkoc-historical-research/SKILL.md`; harita sembolojisi, etiket ve kartografik sunum için `.codex/skills/drkoc-atlas-cartography/SKILL.md` becerisini kullan.
- Uygulama standardı için `DESIGN_SYSTEM.md` dosyasını oku. Atlaslara özgü renk ve sahne dili bu sistemden kopmamalı, ancak konuya anlam taşıyacak biçimde uyarlanabilir.
- İlgili alt klasörde başka bir `AGENTS.md` varsa onun daha yerel kurallarını da uygula.

## Görsel geliştirme ve tanım gereği bitiş

Önemli bir görsel görevde, ortam desteklediğinde şu döngüyü uygula:

**Anla → mevcut uygulamayı incele → çalıştır → ilgili ekranı aç → görsel sorunları belirle → tasarla → uygula → yeniden yükle → karşılaştır → iyileştir → doğrula.**

- Kaynak kodun doğru görünmesine dayanarak görsel sonucu varsayma.
- Tarayıcı, önizleme ve ekran görüntüsü araçları varsa kullan. Değişikliği uygun masaüstü ve mobil boyutlarda incele.
- Büyük UI işlerinde gerektiği kadar yapı/hiyerarşi, görsel inceltme, etkileşim ve responsive/erişilebilirlik geçişleri yap. Geçiş sayısını doldurmak için anlamsız değişiklik yapma.
- Kullanıcının ekran görüntüsündeki işaretleri ve “fazla büyük”, “kalabalık”, “premium değil” gibi alan odaklı geri bildirimlerini o alan için yetkili tasarım girdisi kabul et.
- İlk teknik olarak kabul edilebilir sonuçta durma. Nelerin jenerik, kalabalık, tesadüfi veya öğrenme nesnesiyle rekabet hâlinde olduğunu sor ve anlamlı düzeltmeleri yap.

Görsel bir iş yalnızca derleme geçtiği, CSS değiştiği veya hata görünmediği için bitmiş sayılmaz. Bitmiş sayılması için:

- temel öğrenme/kullanıcı akışı çalışır;
- görsel hiyerarşi ve etkileşim durumları bilinçlidir;
- responsive yerleşim ve dokunma kullanımı doğrulanmıştır;
- semantik HTML, klavye, odak, kontrast ve azaltılmış hareket dikkate alınmıştır;
- yükleme, boş, hata, devre dışı, seçili ve sürükleme/oynatma gibi ilgili durumlar ele alınmıştır;
- performans, özellikle SVG/Canvas/WebGL/harita/simülasyon işlerinde gözlenmiştir;
- mümkünse işleyen ekran görsel olarak incelenmiş ve son bir öz eleştiriden geçirilmiştir.

## Tasarımı koruma ve mühendislik sınırları

- Görsel görevden önce neyin zaten iyi çalıştığını belirle. Simülasyon mantığını, veri akışını, API'leri, durum yönetimini, erişilebilirlik davranışını ve yerleşmiş iyi kalıpları koru.
- Tasarım sorununu mühendislik sorunundan ayır. Görsel bir iyileştirme bahanesiyle gereksiz mimari yeniden yazım yapma.
- Mevcut React + Vite + Tailwind yapısını, `src/components/ui/` bileşenlerini, `src/index.css` ve `tailwind.config.js` belirteçlerini kullan. Atlasa özgü sahne stillerini ilgili kapsamlı stil dosyasında tut.
- Yeni ağır görselleştirme bağımlılığı yalnızca öğrenme modelini belirgin biçimde iyileştiriyorsa düşün; süs için teknoloji ekleme.
- SVG, Canvas, MapLibre, Recharts, animasyon veya büyük veri kullanırken gereksiz yeniden çizim, DOM karmaşıklığı, pahalı efekt ve büyük varlıklardan kaçın.

## Son rapor

İş sonunda neyin değiştiğini, hangi doğrulamaların geçtiğini ve varsa araç/önizleme sınırlamasını kısa maddelerle bildir. Görsel değişiklik yaptıysan mümkün olduğunda ekran görüntüsü veya açılabilir önizleme sun. Yayına alma ayrıca istenmedikçe yerel doğrulamayla kal.
