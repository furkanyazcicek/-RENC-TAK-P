---
name: drkoc-atlas-designer
description: "Tüm dersler için DRKOÇ etkileşimli eğitim atlaslarını öğrenme nesnesi merkezli tasarla, geliştir veya denetle. Atlas, simülasyon, etkileşimli görselleştirme, 3B sahne, diyagram, harita, zaman çizelgesi, grafik ve keşif tabanlı eğitim arayüzlerinde kullan; fizik dışındaki alanları da eşit biçimde kapsar."
---

# Evrensel DRKOÇ Etkileşimli Atlas Tasarımcısı

Bu beceri fizik, kimya, biyoloji, anatomi, matematik, geometri, coğrafya, astronomi, tarih, yer bilimleri ve gelecekteki diğer derslerin tamamı içindir. Aynı arayüz şablonunu bütün konulara uygulamaz; ortak DRKOÇ kalitesini korurken deney modelini öğrenilecek içeriğe uyarlar.

Önce `AGENTS.md`, `DESIGN_SYSTEM.md` ve `../drkoc-ui-designer/SKILL.md` dosyalarını oku. Ardından ilgili atlas sayfasını, konu bileşenlerini, veri/model katmanını, kapsamlı stil dosyalarını ve çalışan rotayı incele.

Tarih atlasında sınır/GeoJSON işi varsa `../drkoc-historical-gis/SKILL.md`, tarihsel kaynak ve iddia işi varsa `../drkoc-historical-research/SKILL.md`, kartografik sunum işi varsa `../drkoc-atlas-cartography/SKILL.md` dosyasını da oku. Tarihsel geometriyi görsel tasarım görevi içinde değiştirme.

## Ana ilke

**Öğrenme nesnesi kahramandır.**

Öğrenme nesnesi bir cisim olmak zorunda değildir. Bir kuvvetler dengesi, kimyasal dönüşüm, hücresel süreç, anatomik mekân, fonksiyon ilişkisi, geometrik inşa, coğrafi katman, yörünge ölçeği, tarihsel neden ağı veya öğrencinin zihninde kurması gereken başka bir model olabilir.

Arayüz; bu nesneyi görünür, değiştirilebilir ve anlaşılır kılar. Kendi dekorasyonu, panel sayısı veya kontrol yoğunluğuyla nesneyle yarışmaz.

## 1. Öğrenme modelini teşhis et

Tasarım kararı vermeden önce kısa bir atlas özeti çıkar:

| Karar | Yanıtlanacak soru |
| --- | --- |
| Ders ve düzey | Hangi ders, sınıf/sınav ve ön bilgi düzeyi? |
| Öğrenme hedefi | Öğrenci deney sonunda neyi açıklayabilmeli veya yapabilmeli? |
| Birincil öğrenme nesnesi | Hangi nesne, süreç, ilişki veya kanıt merkezde? |
| Zihinsel model | Öğrenci hangi yanlış veya eksik modeli daha doğru bir modele çevirecek? |
| Ana eylem | Sürükleme, seçme, ölçme, kurma, karşılaştırma, oynatma, gezinme veya sorgulama mı? |
| Neden-sonuç | Kullanıcının eylemi hangi görünür sonucu üretmeli? |
| Mekânsal gereksinim | 2B, 3B, ölçek, konum, katman, yön veya zaman ilişkisi var mı? |
| Bilgi yoğunluğu | Ne sürekli görünmeli, ne bağlamsal açılmalı? |
| Keşif modeli | Serbest keşif, rehberli rota, görev, deney veya ikisinin birleşimi mi? |
| Başarı kanıtı | Öğrencinin anladığını hangi davranış veya transfer sorusu gösterecek? |

Bu kararlar belirsizse mevcut içerik, müfredat, kullanıcı isteği ve atlasın davranışından makul sonuç çıkar. Sonucu önemli ölçüde değiştirecek gerçek bir eksik varsa kullanıcıya sor.

## 2. Deney türünü içerikten seç

Aşağıdaki kalıplar seçeneklerdir; zorunlu kabuk değildir:

- **Yoğun sahne veya 3B nesne:** anatomi, moleküler yapı, astronomi ve uzamsal geometri gibi döndürme, katman ayırma veya kesit gerektiren konular.
- **Simülasyon çalışma alanı:** fizik deneyleri, kimyasal tepkime, biyolojik geri besleme veya yer bilimi süreçleri gibi parametre ve neden-sonuç ilişkileri.
- **Harita ve mekânsal katmanlar:** coğrafya, tarih, ekoloji, jeoloji ve astronomik gökyüzü haritaları.
- **Zaman çizelgesi ve olay ağı:** tarih, evrim, jeolojik dönemler, süreç evreleri ve sıralı değişim.
- **Grafik veya koordinat düzlemi:** matematiksel fonksiyonlar, istatistik, hareket, değişim oranı ve veri ilişkileri.
- **İnşa veya doğrudan manipülasyon:** geometri, vektör, devre, denklem dengesi ve yapı kurma görevleri.
- **Katmanlı diyagram veya mercek:** hücre, organ sistemi, ekosistem, makine ve çok ölçekli yapılar.
- **Bölünmüş karşılaştırma:** önce/sonra, sağlıklı/hastalıklı, iki yöntem, iki dönem veya iki model.
- **Rehberli keşif:** ön bilgi azsa veya yanlış kavrama riski yüksekse tahmin → dene → gözle → açıkla → aktar akışı.

`sol kenar çubuğu + merkez + sağ denetçi` yalnızca aynı anda gezinme, sahne ve bağlam gerektiren deneylerde kullan. Harita tam ekran ve alt zaman kontrolü isteyebilir; geometri geniş tuval ve bağlamsal araç çubuğu; anatomi 3B sahne ve açılır katman paneli; matematik grafik ile ifade arasında bölünmüş görünüm isteyebilir.

## 3. Dersler arasında tutarlılık, deneylerde özgüllük

Ortak ürün dili şunlardan gelir:

- tipografi ve boşluk ritmi;
- kontrol boyutu, durum davranışı ve geri bildirim kalitesi;
- sakin yüzeyler ve ölçülü vurgu;
- erişilebilirlik ve responsive ilkeleri;
- hata, yükleme, seçim, ilerleme ve sıfırlama dili;
- kaynak doğruluğu ve eğitimsel netlik.

Derse özgü karakter ise öğrenme semantiğinden gelir:

- **Fizik:** hareket, kuvvet, dalga, alan, ölçüm ve deney sonuçları; renk vektör, enerji veya ölçüm rolü taşıyabilir.
- **Kimya:** atom, molekül, bağ, orbital, tanecik ölçeği ve tepkime; makro gözlem ile mikro model arasındaki bağ görünür olmalı.
- **Biyoloji:** hücre, organizma, sistem, süreç ve ölçekler arası ilişki; yapı ile işlev birlikte anlatılmalı.
- **Anatomi:** organ, sistem, komşuluk, yön, katman ve kesit; görünürlük, izolasyon, döndürme ve mekânsal yönelim kritik olabilir.
- **Matematik:** grafik, fonksiyon, değişken, dönüşüm, ispat fikri ve problem; sembolik, sayısal ve görsel gösterimler senkron kalmalı.
- **Geometri:** şekil, inşa, ölçü, dönüşüm ve uzamsal ilişki; doğrudan sürükleme kısıtları ve değişmezler görünür olmalı.
- **Coğrafya:** harita, arazi, ölçek, katman ve insan-doğa ilişkisi; konum ile kanıt arasında bağ kurulmalı.
- **Astronomi:** gök cismi, yörünge, ölçek, zaman ve bakış noktası; ölçek kırılması dürüstçe açıklanmalı.
- **Tarih:** zaman, mekân, kişi, olay, neden, sonuç ve birincil kaynak bağlamı; harita ve zaman seçimi birbirini güncellemeli.
- **Yer bilimleri:** katman, döngü, kesit, zaman ölçeği ve süreç; görünmeyen yer altı ilişkileri kontrollü kesitlerle açılmalı.
- **Diğer dersler:** öğrencinin kurması gereken modeli belirle ve arayüzü onun etrafında şekillendir.

Bu örnekleri renk teması veya sabit düzen tarifi olarak değil, öğrenme nesnesini bulma yardımı olarak kullan.

## 4. Eğitimsel etkileşim tasarla

Önemli bir etkileşim mümkün olduğunda şu öğrenme döngüsünden anlamlı parçalar taşımalı:

1. **Tahmin:** Öğrenci sonucu düşünür veya başlangıç modelini görünür kılar.
2. **Manipüle et:** Değişkeni, nesneyi, katmanı, zamanı veya bakış açısını doğrudan değiştirir.
3. **Gözle:** Sonuç anında, kararlı ve ilgili gösterimlerde görünür olur.
4. **Açıkla:** Kısa bağlamsal metin, etiket veya ilişki nedeni aydınlatır.
5. **Karşılaştır:** Başka durum, ölçek, dönem veya temsille farkı görür.
6. **Aktar:** Yeni bir örnek, görev veya kontrol sorusuyla modeli uygular.

Her konu altı adımın tamamını gerektirmez. Etkileşimi test tiyatrosuna çevirmeden, öğrenme hedefini güçlendiren en kısa akışı seç.

- Eylem ile sonuç arasındaki gecikmeyi düşük tut.
- Bir değişken değiştiğinde ilişkili tüm gösterimleri senkron güncelle.
- Yanlış cevabı yalnız kırmızıyla işaretleme; nedenini ve bir sonraki anlamlı hamleyi göster.
- Uzun açıklamayı sahnenin üzerine yığma; bağlamsal etiket, kısa açıklama, açılır ayrıntı ve rehberli vurgu kullan.
- Sıfırlama, geri alma veya güvenli başlangıç durumunu karmaşık deneylerde ulaşılabilir tut.
- İlerlemeyi yalnız tıklama sayısıyla değil, anlamlı keşif veya kanıtla ilişkilendir.

## 5. Arayüz geri çekilsin

Sürekli görünmesi gerekenleri en aza indir:

- Ana manipülasyonlar keşfedilebilir ve yakın olmalı.
- Nadiren kullanılan katman, kaynak, ayrıntı ve ayarlar bağlamsal panel, çekmece veya alt sayfada açılabilir.
- Kontrol paneli sahneden daha güçlü kontrast, daha büyük yüzey veya daha yoğun dekorasyon taşımamalı.
- Etiketler veriyi örtmemeli; çakışma, yakınlaştırma ve dar ekran davranışı tasarlanmalı.
- Görsel alanı kartlarla bölmeden önce sahnenin bütünlük gereksinimini değerlendir.

## 6. Durum ve hareket

Atlasın türüne göre şunları açıkça ele al:

- hover, klavye odağı, aktif, seçili ve devre dışı;
- veri/model yükleniyor, boş, hata ve çevrimdışı;
- sürükleniyor, bırakılabilir/bırakılamaz, yakınlaştırılıyor ve sınırda;
- oynatılıyor, duraklatıldı, bitti, hız ve zaman konumu;
- seçili nesne, karşılaştırılan nesne ve görünür katmanlar;
- deney başlangıcı, değiştirilmiş durum, doğrulandı ve sıfırlandı.

Animasyon yalnızca durum, nedensellik, yörünge, katman, ölçek veya geçişi anlatmalı. Öğrencinin sonucu okuyacağı anda süs hareketiyle dikkati bölme. Azaltılmış hareket tercihinde anlam kaybolmamalı.

## 7. Görselleştirme teknolojisini amaca göre seç

Mevcut depodaki araçları önce değerlendir:

- **HTML/CSS:** küçük durum modelleri, kontroller, etiketler ve erişilebilir yapılar.
- **SVG:** sınırlı sayıda etkileşimli şekil, vektör, grafik, diyagram ve tıklanabilir bilimsel öğe. Erişilebilir ad ve klavye eşdeğeri eklemek kolaydır.
- **Canvas:** çok sayıda hareketli öğe veya çizim performansı gerektiğinde; erişilebilir alternatif ve DOM tabanlı kontrol katmanı ayrıca gerekir.
- **MapLibre:** kaydırma, yakınlaştırma, katman ve zaman süzgeci gerektiren haritalar.
- **Recharts veya mevcut grafik teması:** standart veri grafikleri; kavramsal doğrudan manipülasyon gerekiyorsa özel SVG daha uygun olabilir.
- **WebGL/3B:** gerçek derinlik, döndürme, kesit veya yüksek sahne karmaşıklığı öğrenme için zorunluysa. Sırf premium görünmek için ekleme.

Teknoloji seçerken öğe sayısı, yeniden çizim sıklığı, düşük güçlü telefonlar, varlık boyutu, klavye/ekran okuyucu alternatifi ve yeni bağımlılık maliyetini birlikte değerlendir. Ağır bir bağımlılık öğrenme değerini belirgin biçimde artırmıyorsa mevcut araçlarla kal.

## 8. Responsive deney yeniden düzenlenir

Masaüstü düzenini küçültme:

- **Masaüstü:** geniş sahne, eş zamanlı temel kontroller ve bağlamsal denetçi sunabilir.
- **Tablet:** ikincil paneller katlanabilir; araçlar sahnenin çevresinde veya alt şeritte toplanabilir.
- **Telefon:** tek odak modu, alt sayfa/çekmece, bağlamsal kontrol, büyük dokunma hedefi ve azaltılmış kalıcı krom kullanabilir.

Telefon görünümünde merkezi etkileşim hâlâ yapılabilir olmalı. Hover bilgisine bağımlı kalma. Harita, grafik ve sahnede yanlışlıkla sayfa kaydırma ile nesne sürüklemeyi ayır; `touch-action` kararını bilinçli ver. Güvenli alanları, sanal klavyeyi, yön değişimini ve uzun Türkçe etiketleri düşün.

## 9. Erişilebilirlik ve doğruluk

- Semantik sayfa bölgeleri ve gerçek düğme/bağlantılar kullan.
- Sahne için kısa ve güncel erişilebilir açıklama sağla; karmaşık görselin kritik sonucunu metin olarak da sun.
- Yalnız renkle kodlama yapma. Renk rolünü etiket, şekil, desen veya simgeyle destekle.
- Tüm temel eylemler klavyeyle yapılabilmeli veya eşdeğer bir kontrol sunmalı.
- Odak sırası görsel ve öğrenme sırasını izlemeli; açılan panel odağı yönetmeli ve kapatınca geri vermeli.
- Kontrast, 40–44 px hedefler ve azaltılmış hareket standartlarını koru.
- Bilimsel/tarihsel belirsizliği kesin bilgi gibi gösterme; ölçek, varsayım, model sınırı ve kaynak bağlamını gerektiğinde görünür kıl.

## 10. Performans bütçesi düşüncesi

- Konu modüllerini gerektiğinde tembel yükle; ilk atlas görünümüne tüm deneyleri yığma.
- Animasyon döngülerini görünmeyen veya duraklatılmış sahnede çalıştırma.
- Hızlı değişen değerleri gereksiz React yeniden render'ına dönüştürme; uygun olduğunda çizim katmanını ayır.
- Büyük SVG DOM'larını, filtre/blur/gölge yığınlarını ve sürekli layout ölçümünü sınırlı tut.
- Büyük harita, veri ve medya varlıklarında yükleme durumu, önbellek ve hata davranışı tasarla.
- Etkileşim sırasında görsel doğruluk kadar giriş gecikmesi ve kare kararlılığını da gözle.

## 11. Görsel geliştirme döngüsü

Önemli atlas/UI görevinde ortam destekliyorsa:

1. Atlası çalıştır, doğru rota ve öğrenme durumunu aç.
2. Mevcut sahneyi gerçek içerikle masaüstü ve dar ekranda incele.
3. Öğrenme nesnesini örten, küçülten veya onunla yarışan sorunları önce sırala.
4. Yapı/hiyerarşi kararını uygula; simülasyon ve veri mantığını koru.
5. Yeniden yükle ve gerçek etkileşimi kullan: seç, sürükle, oynat, yakınlaştır, sıfırla veya konuya uygun ana eylemi tamamla.
6. Sebep-sonucun okunurluğunu, durum dilini ve görsel sakinliği eleştir.
7. Gerekli görsel, etkileşim ve responsive/erişilebilirlik iyileştirmelerini yap.
8. Derleme ve ilgili atlas testlerine ek olarak son render'i yeniden incele.

Özellikle şunları sor:

- Öğrenme nesnesi ilk bakışta gerçekten kahraman mı?
- Öğrenci neyi değiştirebileceğini ve değişimin ne yaptığını anlıyor mu?
- Arayüz fazla yer kaplıyor veya her şeyi aynı önem seviyesinde mi gösteriyor?
- Dersin özgün zihinsel modeli görünür mü, yoksa yalnızca DRKOÇ kabuğu mu görünüyor?
- Mobilde deney hâlâ yapılabiliyor mu?
- Süs, hareket veya renk öğrenme sinyalini bastırıyor mu?
- Model ve kaynak sınırları dürüst mü?

## 12. Teslim ölçütü

Atlas işi ancak şu kanıtlar uygun olduğunda biter:

- ana öğrenme eylemi ve ilgili durumlar çalışıyor;
- konuya uygun UX stratejisi seçilmiş, şablon refleksiyle dayatılmamış;
- öğrenme nesnesi görsel ve etkileşimsel merkezde;
- ürün ailesiyle tutarlılık var, dersler arasında zoraki aynılık yok;
- dar ve geniş ekranda temel etkileşim kullanılabilir;
- klavye, odak, renk dışı anlam ve azaltılmış hareket ele alınmış;
- performans açısından sahne akıcı ve gereksiz yükten arınmış;
- render edilen sonuç görsel olarak incelenmiş veya bu incelemenin araç nedeniyle yapılamadığı açıkça bildirilmiş;
- ilgili testler ve proje derlemesi geçmiştir.

Son raporda seçilen öğrenme modelini, kullanılan deney türünü, korunan mevcut mantığı, görsel/etkileşim doğrulamasını ve varsa araç sınırlamasını kısaca belirt.
