# Claude için uygulama promptu — TYT Biyoloji Atlası

Bu görevde yalnızca fikir, plan, taslak veya tek ekranlık demo üretme. Aşağıdaki gereksinimleri çalışma alanındaki mevcut React/Vite projesine gerçekten uygula; dosyaları oluştur, entegrasyonu tamamla, doğrula ve çalışan sonucu teslim et.

## Rolün ve hedefin

Sen aynı anda kıdemli bir öğrenme deneyimi tasarımcısı, biyoloji öğretmeni, ölçme-değerlendirme uzmanı, bilgi görselleştirme tasarımcısı ve React mühendisisin. Dr. Koç eğitim platformuna, mevcut Fizik Atlası ve Kimya Atlası kalitesinde fakat biyolojinin doğasına özgü, yüksek etkileşimli bir **TYT Biyoloji Atlası** ekle.

Ürün; ezber kartları yığını veya uzun konu anlatımı değil, öğrencinin canlılığı farklı ölçeklerde görerek, tahmin ederek, değişkenlerle oynayarak, veri okuyarak, model kurarak ve kendi yanılgısını fark ederek öğrenmesini sağlayan bir keşif ortamı olmalı. Ana metafor: **“Hücreden ekosisteme canlılık haritası.”** Öğrenci molekülden hücreye, organizmadan popülasyona ve ekosisteme ölçek değiştirebilmeli; bir düzeydeki değişimin diğer düzeylerdeki sonuçlarını görebilmeli.

Tüm arayüz ve içerik Türkçe olmalı. Dil 14–18 yaş düzeyinde; bilimsel olarak doğru, açık, kısa ve doğrudan olmalı. Gereksiz akademik ayrıntı TYT çekirdeğini boğmamalı.

## Önce mevcut projeyi incele

Kod yazmadan önce ve sadece gerekli olduğu ölçüde şu yapıları incele:

- `src/pages/FizikAtlasi.jsx`, `src/components/fizik/**`, `src/data/fizik/**`, `src/lib/fizik/**`, `src/styles/fizik-atlasi.css`, `scripts/test-fizik-atlasi.mjs`
- `src/pages/KimyaAtlasi.jsx`, `src/components/kimya/**`, `src/data/kimya/**`, `src/lib/kimya/**`, `src/styles/kimya-atlasi.css`, `scripts/test-kimya-atlasi.mjs`
- `src/App.jsx`, `src/pages/LibraryGateway.jsx`, `DESIGN_SYSTEM.md`, `package.json`

Mevcut kullanıcı değişikliklerini koru. İlgisiz dosyaları biçimlendirme, yeniden yazma veya geri alma. Atlası ayrı bir paket olarak lazy-load et; ana paketi gereksiz büyütme. Bölge modüllerini de anlamlı yerlerde ayrı parçalara böl.

### Fizik ve Kimya Atlaslarından alınacak zorunlu dersler

Fizik ve Kimya Atlaslarına yalnız görsel ilham için bakma; çalışan ürün desenlerini çıkar ve Biyoloji Atlasına bilinçli biçimde uyarla. Uygulamaya başlamadan önce kısa bir iç denetim yaparak en az şunları belirle:

- Fizik Atlasındaki keşif haritası, bölge bazlı lazy loading, deney/simülasyon kabukları, URL ile bölge eşleme, ilerleme yüzdesi, Kavram Pusulası, güvenli localStorage ve test edilebilir saf hesap motorları
- Kimya Atlasındaki global arama, temel/detaylı anlatım seviyesi, analiz laboratuvarı, karşılaştırma modu, görsel modeller, “Neden?” açıklamaları ve veri tabanlı mini test sistemi
- Her iki atlastaki masaüstü yan gezinme, mobil gezinme, tema, erişilebilirlik, kapsüllenmiş CSS, responsive davranış ve production build/test yaklaşımı

Bu desenleri kopyala-yapıştır biçiminde çoğaltma. Biyolojinin ayırt edici ihtiyacı olan **ölçekler arası ilişki, canlı sistemlerde neden–sonuç, süreç animasyonu, sınıflandırma, deney tasarımı ve sistem düşüncesi** için yeniden tasarla. Teslim özetinde hangi desenin hangi atlastan öğrenilip Biyoloji Atlasında nasıl dönüştürüldüğünü kısaca belirt.

## Müfredat kapsamı: iki katmanı birlikte yönet

Müfredat geçişini görünür ve doğru biçimde ele al. Tek bir internetteki konu listesini mutlak gerçek kabul etme.

### A. “TYT sınav çekirdeği” — ana kapsam

Son yıllardaki ÖSYM TYT biyoloji soru gerçekliği ve sınava hazırlıkta kullanılan ortak kapsamı eksiksiz karşıla:

1. Yaşam bilimi ve bilimsel süreç
   - Biyolojinin önemi, bilimin doğası, bilimsel yöntem, değişkenler, kontrol grubu, veri–kanıt–çıkarım, bilim etiği
   - Canlıların ortak özellikleri; organizasyon, metabolizma, enerji kullanımı, homeostazi, büyüme-gelişme, üreme, uyarılara tepki, varyasyon ve adaptasyon
2. Canlıların temel bileşenleri
   - Su ve mineraller
   - Karbohidrat, lipit, protein, enzim, vitamin, nükleik asit; monomer–polimer, dehidrasyon–hidroliz
   - Besin ayıraçları ve enzim aktivitesine etki eden sıcaklık, pH, enzim/substrat derişimi
3. Hücre ve hücresel organizasyon
   - Prokaryot–ökaryot, bitki–hayvan hücresi, organeller ve organeller arası iş birliği
   - Hücre zarı ve seçici geçirgenlik
   - Basit/kolaylaştırılmış difüzyon, ozmoz, aktif taşıma, endositoz, ekzositoz; yoğunluk, ATP ve molekül büyüklüğü ilişkileri
4. Canlıların sınıflandırılması ve biyoçeşitlilik
   - Modern sınıflandırma, tür, ikili adlandırma, sınıflandırma basamakları
   - Bakteri, arke, ökaryot; protist, bitki, mantar, hayvanların ayırt edici özellikleri
   - Türkiye’nin biyoçeşitliliği ve endemik tür kavramı
5. Hücre bölünmeleri ve üreme
   - Hücre döngüsü, DNA eşlenmesi, mitoz, mayoz, sitokinez
   - Kromozom–kromatit–homolog kromozom ayrımı; kromozom ve DNA miktarı grafikleri
   - Mitoz–mayoz karşılaştırması, genetik çeşitliliğin kaynakları
   - Eşeyli/eşeysiz üreme ve temel üreme örüntüleri
6. Kalıtım
   - Gen, alel, genotip, fenotip; baskın–çekinik, homozigot–heterozigot
   - Monohibrit çaprazlama, olasılık, eş baskınlık/çok alellilik için ABO ve Rh düzeyinde gerekli temel kapsam
   - Cinsiyete bağlı kalıtımın temel mantığı ve soy ağacı yorumlama
   - Kalıtım sorularında “kesin”, “olabilir”, “olamaz” ayrımı
7. Ekoloji ve çevre
   - Birey–popülasyon–komünite–ekosistem–biyosfer
   - Habitat, niş, tür içi/türler arası ilişkiler, rekabet, av–avcı, simbiyotik ilişkiler
   - Popülasyon dinamikleri, taşıma kapasitesi, çevre direnci, süksesyon
   - Besin zinciri/ağı, trofik düzey, enerji piramidi, madde–enerji akışı, biyolojik birikim
   - Su, karbon ve azot döngüleri
   - Biyoçeşitlilik, çevre sorunları, iklim değişikliği, ötrofikasyon, habitat kaybı, sürdürülebilirlik, ekolojik ayak izi, atık yönetimi

### B. “2026 TYMM geçiş kapsamı” — ayrı etiketli katman

Resmî 2026 MEB Biyoloji Öğretim Programında 9. sınıf “Yaşam + Organizasyon”, 10. sınıf “Enerji + Ekoloji” temaları bulunuyor. Bu nedenle atlasın çekirdeğine yukarıdaki konuları koy; ayrıca **“Yeni program / Enerji”** rozetiyle şu modülü ekle:

- ATP’nin enerji aktarımındaki rolü
- Fotosentezin genel modeli; ışığın kullanıldığı/kullanılmadığı tepkimeler; hız faktörleri
- Kemosentezin temel mantığı
- Hücre içi/dışı sindirim, canlılarda sindirim yapıları; insanda sindirim–emilim–taşıma zinciri
- Hücresel solunumun genel modeli: glikoliz, sitrik asit döngüsü, ETS; TYT/10. sınıf düzeyini aşan ara reaksiyon ve protein isimlerine girme
- Besinlerin solunuma katılma yollarının karşılaştırmalı özeti
- Laktik asit ve etil alkol fermantasyonu
- Enerji–metabolizma ilişkisi

Arayüzde filtre sun: **TYT sınav çekirdeği / 2026 TYMM / Tümü**. Öğrenciye geçiş farkını tek cümleyle açıkla; kafa karıştırma. Sınav çekirdeğini “eski” diye değersizleştirme. İçerik verilerinde her kazanım/modül için `kapsam`, `sinif`, `tema`, `kazanim`, `onKosullar` benzeri alanlar tut.

## Atlas bilgi mimarisi

Ana giriş bir keşif haritası olsun. Haritada birbirine bağlı biyom/adacık/bölge düğümleri ve önerilen öğrenme yolu görünsün. Masaüstünde sol gezinme, mobilde erişilebilir alt gezinme veya çekmece kullan. URL sorgu parametresiyle doğrudan bölge açılabilsin; geri/ileri tuşları doğru çalışsın.

Önerilen bölgeler:

1. **Yaşamın Şifreleri** — bilimsel yöntem + ortak özellikler
2. **Molekül Mutfağı** — temel bileşenler + enzim laboratuvarı
3. **Hücre Şehri** — organeller + hücre tipleri + zar taşınımı
4. **Canlılık Ağacı** — sınıflandırma + üç domain + biyoçeşitlilik
5. **Bölünme Saati** — mitoz, mayoz, DNA/kromozom grafikleri
6. **Kalıtım Dedektifi** — çaprazlama, kan grubu, soy ağacı
7. **Enerji İstasyonu** — 2026 TYMM katmanı: fotosentez–sindirim–solunum–fermantasyon
8. **Ekosistem Ağı** — ilişkiler, enerji/madde akışı, popülasyon, sürdürülebilirlik
9. **Kavram Pusulası** — tüm bölgelere yayılan yanılgı teşhisi
10. **TYT Kampı** — karışık mini sınav, hata defteri, tekrar önerileri

Haritadaki her bölge; tamamlanma yüzdesi, kısa amaç, ön koşul bağlantıları, mini deney sayısı ve kapsam rozeti göstermeli. İlerleme yalnızca yerel tarayıcıda tutulabilir; mevcut Fizik Atlası yaklaşımına benzer güvenli bir localStorage şeması kullan. İlerlemeyi sıfırlama onaylı ve erişilebilir olsun.

## Birincil ürün kuralı: her ünite ve her alt başlık etkileşimli olacak

Bu atlasın en önemli kabul ölçütü budur. Birkaç etkileyici simülasyon yapıp kalan üniteleri metin kartları, akordeonlar veya statik konu özetleriyle geçme. **Müfredat kapsamındaki her ünite başlığı ve her anlamlı alt başlık en az bir çalışan etkileşimli öğrenme alanına bağlanmalı.** Ana keşif haritasında bütün ünite başlıkları görünür olmalı; hiçbir ünite başka bir ünitenin içinde bulunması zor bir metin bölümü olarak saklanmamalı.

“Etkileşimli öğrenme alanı” şu üç parçayı birlikte içermelidir:

1. Öğrenci bir tahmin, seçim, sıralama, sürükleme, model kurma, parametre değiştirme veya deney kararı verir.
2. Bu girdi bilimsel modele göre görünen bir durum, veri, grafik, animasyon ya da ilişki değişimi üretir.
3. Sistem öğrencinin kararına özel nedensel geri bildirim verir ve kısa bir transfer göreviyle anlayışı kontrol eder.

Yalnız sekme değiştirmek, kart açmak, metnin üzerine gelmek, dekoratif animasyon izlemek, cevap görünürlüğünü açmak veya video oynatmak etkileşimli öğrenme alanı sayılmaz.

### Zorunlu ünite–etkileşim kapsam matrisi

Aşağıdaki her satır için ayrı, görünür ve çalışan öğrenme alanları oluştur. Bir öğrenme alanı birden çok alt başlığı bütünleştirebilir; ancak kapsam matrisinde her alt başlık hangi etkileşim tarafından öğretildiğiyle açıkça eşleşmelidir.

1. **Biyoloji Bilimi ve Canlıların Ortak Özellikleri**
   - Bilimsel yöntem/etik: araştırma sorusu, hipotez, bağımsız–bağımlı–kontrollü değişken ve kontrol grubu kurma laboratuvarı
   - Canlıların ortak özellikleri: farklı örnekleri kanıtlara göre sınıflandırma ve virüsler için “kesin canlı/cansız” ikiliğini sorgulama alanı
   - Homeostazi/metabolizma/uyarılara tepki: koşul değişince geri bildirim döngüsünü kurma
2. **Canlıların Temel Bileşenleri**
   - İnorganik/organik molekülleri özellik–işlev–yapı ilişkisine göre eşleştirme
   - Monomer–polimer ile dehidrasyon–hidroliz molekül kurucu
   - Besin ayıraçları sanal deney alanı
   - Enzim–substrat modeli ve sıcaklık, pH, enzim/substrat derişimi grafikleri
3. **Hücre**
   - Prokaryot–ökaryot ve bitki–hayvan hücresi karşılaştırma merceği
   - Tıklanabilir organel atlası yanında organeller arası üretim/taşıma iş akışı
   - Yüzey alanı/hacim oranını hücre boyutu değiştikçe gösteren model
4. **Hücre Zarından Madde Geçişleri**
   - Basit difüzyon, kolaylaştırılmış difüzyon, ozmoz ve aktif taşıma karar laboratuvarı
   - ATP, derişim farkı, molekül boyutu ve kanal/taşıyıcı değişkenleri
   - Bitki/hayvan hücresinde hipotonik–izotonik–hipertonik ortam karşılaştırması
   - Endositoz–ekzositoz süreç sıralama ve yük seçme görevi
5. **Canlıların Sınıflandırılması ve Biyoçeşitlilik**
   - Sınıflandırma basamaklarında yakınlık–benzerlik–birey sayısı değişim merceği
   - Üç domain ve ökaryot grupları için dallanan canlılık ağacı
   - Bilinmeyen canlıyı özellik seçerek sınıflandırma/dallanmış anahtar görevi
   - Türkiye biyoçeşitliliği ve endemik türleri kanıt/veri üzerinden yorumlama alanı
6. **Hücre Bölünmeleri**
   - Hücre döngüsü ile mitoz/mayoz zaman makinesi
   - Homolog kromozom, kardeş kromatit, crossing-over ve ayrılma olaylarını sürükleyerek kurma
   - Evrelere göre DNA miktarı, kromozom/kromatit ve hücre sayısı grafiği oluşturma
   - Mitoz–mayoz sonuçlarını parametrelerden türeten karşılaştırma simülasyonu
7. **Üreme**
   - Eşeyli/eşeysiz üreme örneklerini mekanizmasına göre sınıflandırma
   - Üreme biçimi değiştiğinde genetik çeşitlilik, hız, enerji maliyeti ve çevreye uyum sonuçlarını karşılaştırma
   - Temel yaşam döngüsü/süreç sıralama alanı
8. **Kalıtım**
   - Gamet kurucu, sürüklemeli Punnett karesi ve olasılık görselleştirmesi
   - Genotip–fenotip, baskın–çekinik, homozigot–heterozigot kavram ağı
   - ABO/Rh temel çaprazlamaları
   - Otozomal ve X’e bağlı modeller için soyağacı dedektifi; kesin/olabilir/olamaz çıkarımları
9. **Ekosistem Ekolojisi**
   - Organizasyon düzeyleri, habitat ve niş eşleştirmesi
   - Tür içi/türler arası etkileşimler ve ekolojik ilişki senaryoları
   - Kurulabilir besin ağı, ok yönü ve tür değişiminin dolaylı etkileri
   - Enerji/biyokütle/birey piramitleri ile biyolojik birikim deneyi
   - Popülasyon dinamikleri, taşıma kapasitesi, çevre direnci ve süksesyon simülatörü
   - Su, karbon ve azot döngülerini eksik bağlantılarla tamamlama
10. **Güncel Çevre Sorunları ve Sürdürülebilirlik**
   - Habitat kaybı, kirlilik, iklim değişikliği, ötrofikasyon ve biyoçeşitlilik kaybı için neden–sonuç ağı
   - Atık yönetiminde seçeneklerin etkisini karşılaştıran karar alanı
   - Ekolojik ayak izi değişkenleri ve çözüm senaryoları
   - Yerel bir çevre verisini grafik/harita üzerinden yorumlama görevi
11. **Enerji Dönüşümleri — 2026 TYMM geçiş modülü**
   - ATP enerji aktarım modeli
   - Fotosentez hızını etkileyen faktörler ve sınırlayıcı faktör laboratuvarı
   - Fotosentez–kemosentez karşılaştırması
   - Sindirim–emilim–taşıma–hücresel solunum molekül yolculuğu
   - Hücresel solunum ve fermantasyon koşul/ürün karşılaştırması

`src/data/biyoloji/` altında tek kaynak niteliğinde bir kapsam manifesti oluştur. Her ünite ve alt başlık en az şu alanları taşısın: `id`, `baslik`, `kapsam`, `kazanim`, `etkilesimId`, `yanilgiIdleri`, `transferGoreviId`, `onKosullar`. Otomatik test; herhangi bir alt başlıkta geçerli bir `etkilesimId`, geri bildirim veya transfer görevi yoksa başarısız olsun. Bu matris aynı zamanda atlas içindeki “Müfredat kapsamı” ekranını beslesin; öğrenci hangi başlıkların tamamlandığını görebilsin.

Bir ünitenin tamamlanması yalnız sayfayı açmakla gerçekleşmesin. Öğrenci o ünitedeki temel etkileşimi yapıp kontrol noktasını yanıtladıktan sonra ilerleme kaydedilsin.

## Zorunlu etkileşimler

Statik metin ve dekoratif animasyon etkileşim sayılmaz. Aşağıdaki mekaniklerin çalışan sürümlerini üret:

### 1. Ölçek merceği

Molekül → organel → hücre → organizma → popülasyon → ekosistem ölçek kaydırıcısı. Ölçek değişince sahne, açıklama, ilgili kavramlar ve “bir üst düzeyde sonucu ne olur?” ilişkileri değişsin. Bu, atlasın ana birleştirici etkileşimi olsun.

### 2. Molekül ve enzim laboratuvarı

- Besin örneği ve ayıraç seçimi; gözlenen renk/değişim üzerinden karbohidrat–protein–lipit çıkarımı
- Enzim simülasyonunda sıcaklık, pH, enzim ve substrat derişimi kontrolleri; öğrenci önce hız grafiğini tahmin etsin, sonra deneyi çalıştırıp gözlesin
- Denatürasyonun “enzim bitti/tükendi” olmadığını açıkça göster
- Bağımsız, bağımlı ve kontrol edilen değişkenleri öğrenci seçsin

### 3. Hücre karşılaştırma ve zar laboratuvarı

- Prokaryot / bitki / hayvan hücresini katmanlı SVG ile karşılaştır; organellere tıklayınca yalnız görev değil, diğer organellerle iş akışı görünsün
- Protein salgılama gibi bir görevi çekirdek → ribozom → ER → Golgi → vezikül → zar rotasında canlandır
- Zar laboratuvarında molekül türü/büyüklüğü, derişim farkı, ATP varlığı ve taşıyıcı/kanal seçimi değiştirilebilsin
- Öğrenci taşıma türünü önce seçsin; moleküller hareket etsin; net akış, denge ve ATP tüketimi anlık gösterilsin
- Hipotonik/izotonik/hipertonik ortamda bitki ve hayvan hücresini karşılaştır; lizis, plazmoliz, turgor gibi sonuçları doğru bağlamla göster

### 4. Canlılık ağacı ve sınıflandırma oyunu

- Üç domaini ve ökaryot gruplarını dallanan, yakınlaştırılabilir bir ağaçla göster
- Öğrenci gözlenebilir özelliklerden ölçüt seçerek bilinmeyen canlıyı sınıflandırsın
- “Benzer görünmek = yakın akraba” yanılgısını homolog özellik/veri örneğiyle düzelt
- Sınıflandırma basamaklarında aşağı/yukarı gidildikçe benzerlik, ortak özellik ve birey sayısının nasıl değiştiğini görselleştir

### 5. Bölünme zaman makinesi

- Mitoz ve mayoz için oynat/duraklat, hız, adım adım ilerleme ve geri sarma
- Kromozomları sadece renkli X ikonları olarak bırakma; homolog çift, kardeş kromatit, sentromer ve crossing-over ilişkilerini ayırt ettir
- Her evrede hücre başına kromozom sayısı, kromatit/DNA miktarı ve hücre sayısını güncelle
- Öğrencinin grafik noktalarını sürükleyerek DNA miktarı grafiği kurduğu görev ekle; “kromozom sayısı DNA eşlenince iki katına çıkar” yanılgısını hedefle
- Mitoz–mayoz karşılaştırmasını ezber tablosu yanında sonuç üreten simülasyonla kur

### 6. Kalıtım dedektifi

- Genotip seçilince gametler ve Punnett karesi otomatik değil, önce öğrenci sürükleyip yerleştirecek; sonra doğrulama yapılacak
- Olasılıkları sayı, kesir, yüzde ve görsel dağılım olarak birlikte göster
- Soyağacında “kesin/olabilir/olamaz” çıkarım modu; öğrenci bir bireye olası genotip etiketleri bırakabilsin
- Otosomal baskın/çekinik ve X’e bağlı çekinik modeller arasında geçiş; modelle çelişen kişileri sahnede vurgula
- Kan grubu etkileşimi TYT sınırında, bilimsel ve açık olsun; tıbbi karar aracı gibi sunulmasın

### 7. Enerji istasyonu

- Fotosentezde ışık şiddeti, CO₂, sıcaklık ve su değişkenleri; sınırlayıcı faktörü gösteren canlı grafik
- Fotosentez ve solunumu “bitkiler yalnız fotosentez yapar” yanılgısını düzeltecek ortak madde/enerji akışında karşılaştır
- Sindirim → emilim → taşıma → hücresel solunum zincirinde bir glikoz molekülünü takip et
- Oksijen koşuluna göre hücresel solunum / laktik asit fermantasyonu / etil alkol fermantasyonu sonuçlarını karşılaştır
- Düzey aşan ayrıntıları “Meraklısına” katmanına taşı; varsayılan görünüm öğrenme çıktısına sadık kalsın

### 8. Ekosistem simülatörü

- Öğrencinin türleri sürükleyerek besin ağı kurması; ok yönünü doğru açıklayan anlık geribildirim
- Bir popülasyonu artırıp/azaltınca doğrudan ve dolaylı etkiler ağ üzerinde yayılsın; “tek neden–tek sonuç” yerine sistem düşüncesi kazandırsın
- Trofik piramitlerde enerji, biyokütle ve birey sayısını ayrı modlarda göster; birbirine karıştırılmadığını ölç
- Toksik madde ekleyerek biyolojik birikimi trofik düzeylerde gözlemlet
- Su/karbon/azot döngüsünde eksik düğüm/ok tamamlama
- Lojistik popülasyon grafiğinde doğum, ölüm, göç, kaynak ve taşıma kapasitesi kontrolleri
- Ekolojik ayak izi etkinliğinde yargılayıcı dil kullanmadan, varsayımları görünür basit bir model ve çözüm karşılaştırması sun

## Her bölgenin pedagojik döngüsü

Her modül şu kısa döngüyü izlesin:

1. **Merak uyandır:** Günlük yaşam veya sınav bağlamlı tek güçlü soru.
2. **Tahmin et:** Öğrenci seçim yapmadan simülasyon sonucunu gösterme.
3. **Dene / değiştir:** En az iki anlamlı değişkenle oynasın.
4. **Gözle ve veri oku:** Sayı, grafik, diyagram veya durum değişikliği görsün.
5. **Nedenini açıkla:** Öğrenciden kısa seçim/sıralama/model kurma bekle.
6. **Yanılgıyı düzelt:** Yanlış seçeneğe özel, nedensel geri bildirim ver; yalnız “yanlış” deme.
7. **Transfer et:** Aynı ilkeyi yeni, ÖSYM tarzı fakat tamamen özgün bir bağlamda uygulasın.
8. **Hatırla:** Bölüm sonunda 2–4 kısa geri getirme sorusu; sonra gecikmeli tekrar kuyruğuna ekle.

Pedagojik tasarımda şu ilkeleri gerçekten davranışa dönüştür: aktif geri getirme, aralıklı tekrar, konular arası karışık alıştırma, tahmin–gözlem–açıklama, çift kodlama, çoklu temsil, örnekten bağımsız probleme kademeli geçiş, bilişsel yükü azaltan parçalara bölme, öz açıklama, anlık biçimlendirici değerlendirme, yakın ve uzak transfer. Uzun metin bloklarıyla “pedagoji varmış” gibi yapma.

## Kavram Pusulası: hedef yanılgılar

En az şu yanılgıları veri tabanında açık `yanilgi`, `nedenCazip`, `kanit`, `duzeltme`, `transferSorusu` alanlarıyla işle:

- Virüsler kesin olarak canlıdır / kesin olarak cansızdır.
- Bitkiler yalnız fotosentez yapar, solunum yapmaz.
- Enzimler tepkimede tükenir veya tepkimenin dengesini değiştirir.
- Sıcaklık arttıkça enzim hızı daima artar.
- Dengeye gelince molekül hareketi durur.
- Ozmozda çözünen madde hareket eder.
- Aktif taşıma her zaman çok yoğun ortamdan aza doğrudur.
- Hücre büyüdükçe yüzey/hacim avantajı artar.
- DNA eşlenince kromozom sayısı iki katına çıkar.
- Mitoz her zaman iki özdeş hücre üretir ifadesinin mutasyon/çevre bağlamı göz ardı edilerek mutlaklaştırılması.
- Mayoz yalnız kromozom sayısını yarıya indirmek içindir.
- Baskın alel toplumda daha yaygındır veya daha güçlüdür.
- Çekinik özellik mutlaka bir nesil atlar.
- Fenotipten genotip her zaman kesin bulunur.
- Besin zincirindeki ok “kim kimi yer?” yönünü gösterir.
- Enerji ekosistemde madde gibi döngü yapar.
- Trofik düzey yükseldikçe enerji artar.
- Biyolojik birikim yalnız bireyin yaşıyla açıklanır.

## Soru ve ölçme tasarımı

- ÖSYM’nin telifli sorularını kopyalama veya küçük değişiklikle yeniden üretme. Tamamen özgün sorular yaz.
- TYT Fen’de biyoloji için 6 soru olduğu sınav gerçekliğini “6’lı TYT turu” moduna yansıt; ayrıca 10 ve 20 soruluk çalışma setleri sun.
- Sorular bilgi hatırlamanın yanında grafik/tablo/deney düzeni/soy ağacı/besin ağı yorumlama, kontrollü değişken, olasılık ve “hangisi kesin/olabilir/yapılamaz?” muhakemesini ölçsün.
- En az 60 özgün soru üret; konu, kazanım, güçlük, beceri, yanlış seçenek gerekçesi ve kapsam etiketiyle veri dosyasında tut.
- Her yanlış seçenek belirli bir yanılgıya bağlanabilsin. Yanıt sonrası doğru seçeneğin yanı sıra neden ve “bu soruda hangi ipucunu kaçırdın?” geri bildirimi göster.
- İlk girişte 6 soruluk tanılama sun; sonuç yalnız puan değil, kavram alanı bazlı başlangıç haritası oluştursun.
- Hata defteri, favoriler, son çalışılan bölge ve konu ustalığı localStorage’da saklansın.
- Rastgeleleştirme tekrar üretilebilir olsun; test edilebilir saf yardımcı fonksiyonlar kullan.

## Görsel ve etkileşim tasarımı

- Mevcut Dr. Koç tasarım sistemiyle akraba, biyolojiye özgü bir görsel dil kur: koyu orman/okyanus zemini, kontrollü yeşil–turkuaz–amber biyolüminesans vurgular, atlas/topografya dokusu, hücresel katman hissi. “Her yer neon” veya çocuk oyunu görünümü oluşturma.
- Atlas kendi kapsayıcı sınıfı altında stillensin (`.biyoloji-atlasi` gibi); genel sayfaları etkilemesin. Açık ve koyu tema destekle.
- Kart hiyerarşisi belirgin olsun; bir ekranda en fazla bir baskın gradient panel kullan.
- Bilimsel görselleri mümkün olduğunca erişilebilir inline SVG/CSS/canvas ile üret. Görseldeki her renk tek başına anlam taşımasın; şekil, etiket veya desenle destekle.
- Hareket açıklayıcı olmalı. `prefers-reduced-motion` durumunda animasyonları durdur veya sadeleştir.
- Masaüstü, tablet ve 360 px mobilde çalışmalı. Dokunma hedefleri en az 44×44 px. Yatay taşma olmamalı.
- Klavye ile tüm temel görevler yapılabilsin. Belirgin odak halkası, doğru semantik öğeler, ARIA etiketleri ve gerektiğinde `aria-live` kullan. SVG için başlık/açıklama ekle.
- Metin kontrastı WCAG AA düzeyini karşılasın. Renk körlüğü için kırmızı/yeşil ikilisini tek gösterge yapma.

## Teknik mimari

- React 18, Vite ve projedeki mevcut bağımlılıklarla çalış. Gerekmedikçe yeni paket ekleme.
- Önerilen yapı:
  - `src/pages/BiyolojiAtlasi.jsx`
  - `src/components/biyoloji/**`
  - `src/components/biyoloji/bolgeler/**`
  - `src/components/biyoloji/ortak/**`
  - `src/data/biyoloji/**`
  - `src/lib/biyoloji/**`
  - `src/styles/biyoloji-atlasi.css`
  - `scripts/test-biyoloji-atlasi.mjs`
- İçerik verisini UI bileşenlerinden ayır. Biyolojik hesap/mantık motorlarını saf fonksiyonlara taşı: zar taşıma kararı, enzim hız modeli, mitoz/mayoz durumları, kalıtım olasılıkları, soy ağacı uyumluluğu, besin ağı etkileri, popülasyon modeli, ustalık hesabı.
- Simülasyonlar bilimsel modelin basitleştirmelerini arayüzde “Model varsayımları” altında açıkça belirtmeli. Sahte hassasiyet üretme.
- React anahtarları kararlı olsun; render sırasında rastgele sayı üretme. Zamanlayıcıları temizle. Efekt bağımlılıklarını doğru yönet.
- Bölge bazlı lazy loading ve Suspense kullan. Arama parametresiyle seçili bölgeyi yönet; dışarıdan URL değişimiyle durumu senkronla.
- Tema, ilerleme ve tercihler için sürümlenmiş localStorage şeması, güvenli okuma ve bozuk veri fallback’i kullan.
- İç arama ekle: kavram, organel, süreç, deney ve soru sonucundan ilgili bölge/etkileşime gidebilsin.
- Uygulamada `/biyoloji-atlasi` public rotasını lazy-load ederek ekle. `LibraryGateway.jsx` içine Kimya ve Fizik kartlarıyla uyumlu Biyoloji Atlası kartı ekle.
- Mevcut dosyalarda ilgili olmayan değişiklik yapma. Var olan kirli çalışma ağacını koru.

## İçerik doğruluğu sınırları

- Hücresel solunum ATP verimini tek mutlak sayı olarak ezberletme; TYT düzeyinde nitel ilişkiye odaklan.
- Enzim, ozmoz, aktif taşıma, kromozom/DNA miktarı, baskınlık, akrabalık, enerji akışı ve biyolojik birikimde yaygın hatalı genellemelerden kaçın.
- Analojiler “birebir aynıdır” gibi sunulmasın; her analojide “nerede işe yarar / nerede bozulur?” kısa notu olsun.
- Öğrenciye sağlık teşhisi, diyet veya tıbbi karar önerisi verme. Kan grubu ve kalıtım modüllerini eğitim simülasyonu olarak etiketle.
- Canlı görsellerinde ölçeklerin temsili olduğunu belirt; molekül, organel ve hücre boyutlarını aynı gerçek ölçekteymiş gibi göstermeme.

## Tamamlanma ölçütleri

Görevi tamamlanmış sayabilmek için:

1. `/biyoloji-atlasi` açılıyor ve keşif haritası çalışıyor.
2. Yukarıdaki zorunlu ünite–etkileşim kapsam matrisindeki her ünite ve anlamlı alt başlık geçerli bir çalışan etkileşim, girdiye özel geri bildirim ve transfer göreviyle eşleşiyor; hiçbir ünite yalnız statik anlatımdan oluşmuyor.
3. Ölçek merceği, hücre/zar laboratuvarı, bölünme zaman makinesi, kalıtım dedektifi ve ekosistem ağı gerçekten etkileşimli.
4. En az 60 özgün soru veri doğrulamasından geçiyor; 6’lı TYT turu çalışıyor.
5. Müfredat filtreleri ve kazanım etiketleri çalışıyor.
6. İlerleme, hata defteri, favoriler ve tema kalıcı; sıfırlama akışı çalışıyor.
7. Masaüstü ve mobil gezinme, klavye kullanımı, azaltılmış hareket ve temel ekran okuyucu etiketleri doğrulanmış.
8. Yeni test dosyası; veri bütünlüğü, bilimsel invariants ve saf motor fonksiyonlarını kontrol ediyor.
9. `npm run test:biyoloji` betiği eklenmiş ve geçiyor.
10. Mevcut Kimya/Fizik atlas testleri ve genel production build geçiyor.
11. Konsolda hata/uyarı yok; kırık import, taşma ve anlamsız boş durum yok.
12. Kapsam manifestini doğrulayan test; ünitesi, kazanımı, etkileşimi, yanılgı bağlantısı veya transfer görevi eksik hiçbir alt başlık bırakılmadığını kanıtlıyor.

## Çalışma ve teslim biçimi

Önce kısa bir uygulama planı çıkar, sonra kesintisiz biçimde uygula. Her ana aşamadan sonra ilgili testi çalıştır. İlk sürümü yüzeysel bırakıp “devam edebilirim” deme; kapsamı bitir. Bir gereksinimi teknik nedenle sadeleştirirsen çalışan en yakın çözümü uygula ve teslim özetinde açıkça belirt.

Son mesajında yalnızca:

- çalışan ana özelliklerin özeti,
- eklenen/değiştirilen temel dosyalar,
- çalıştırdığın testler ve sonuçları,
- varsa dürüstçe kalan sınırlamalar

yer alsın. Kod bloklarına bütün dosyaları kopyalama; dosyaları doğrudan çalışma alanına yaz.
