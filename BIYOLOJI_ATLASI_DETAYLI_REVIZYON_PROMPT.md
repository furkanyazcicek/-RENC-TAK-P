# TYT Biyoloji Atlası — kapsamlı düzeltme ve yeniden yapım promptu

Mevcut TYT Biyoloji Atlası teslimini kabul etmiyorum. Bu görev yeni bir konsept yazısı veya ikinci bir yüzeysel prototip üretme görevi değildir. Çalışma alanındaki mevcut Biyoloji Atlasını ayrıntılı biçimde incele, sorunlu yaklaşımı sök, Fizik ve Kimya Atlaslarının ürün kalitesine yaklaştır ve bütün ana simülasyonları gerçekten çalışan öğrenme araçlarına dönüştür.

Yalnız plan çıkarıp durma. Dosyaları doğrudan düzenle, uygulamayı çalıştır, her etkileşimi tarayıcıda kullan, hataları düzelt, testleri geliştir ve doğrulanmış sonucu teslim et.

## Kullanıcı geri bildirimi — tartışmasız öncelik

Kullanıcının mevcut sürüm hakkındaki değerlendirmesi:

- Fizik ve Kimya Atlaslarına benzemiyor; aynı ürün ailesinden geliyormuş hissi vermiyor.
- Simülasyon varmış gibi görünen alanlar gerçekte simülasyon değil.
- Bazı kontroller ya anlamlı sonuç üretmiyor ya da öğrenme alanı çalışmıyor.
- Her ünite için konuya özgü bir etkileşim beklenirken aynı jenerik kart kalıbı tekrar edilmiş.
- Sayfa çok büyük başlıklar ve seyrek kartlardan oluşuyor; bir “atlas/laboratuvar” yerine şablon landing page gibi görünüyor.
- Kullanıcı, her ünite başlığında gerçekten oynanabilen, sonucu değişen ve biyolojik süreci görünür kılan öğrenme alanları istiyor.

Bu geri bildirimi kozmetik rötuşla kapatma. Arka plan rengini değiştirmek, gölge eklemek, daha fazla kart yerleştirmek veya düğmelere hover vermek bu görevin çözümü değildir.

## Önce gerçek bir karşılaştırmalı denetim yap

Kod yazmadan önce aşağıdaki dosyaları çalışarak ve tarayıcıda açarak incele:

### Referans: Fizik Atlası

- `src/pages/FizikAtlasi.jsx`
- `src/components/fizik/AtlasHaritasi.jsx`
- `src/components/fizik/ortak/ModulKabugu.jsx`
- `src/components/fizik/ortak/Kontroller.jsx`
- `src/components/fizik/ortak/Gorseller.jsx`
- `src/components/fizik/ortak/Grafik.jsx`
- `src/components/fizik/ortak/Ogrenme.jsx`
- En az üç gerçek bölge modülü: `HareketBolgesi.jsx`, `DevreBolgesi.jsx`, `BasincBolgesi.jsx` veya benzerleri
- `src/data/fizik/**`, `src/lib/fizik/**`, `src/styles/fizik-atlasi.css`
- `scripts/test-fizik-atlasi.mjs`

Özellikle şunları öğren:

- Simülasyon sahnesi ile kontrol panelinin ayrı ve okunur oluşu
- Oynat/duraklat, adımla, geri al, sıfırla ve hız kontrollerinin ortak davranışı
- Kaydırıcı yanında sayısal değerin ve birimin görünmesi
- Girdi değişince yalnız bir metnin değil, sahnenin/grafiğin/ölçümün değişmesi
- Keşfet → Öğren → Ustalaş seviyeleri
- Tahmin, mini görev, öğrenme kontrolü ve kavram yanılgısı bağlantısı
- URL, lazy loading, ilerleme, favori ve responsive gezinme
- Saf fizik motorlarının UI’dan ayrılması ve değişmezlerinin test edilmesi

### Referans: Kimya Atlası

- `src/pages/KimyaAtlasi.jsx`
- `src/components/kimya/AnalizLaboratuvari.jsx`
- `src/components/kimya/MaddeAtlasi.jsx`
- `src/components/kimya/PeriyodikSistem.jsx`
- `src/components/kimya/MolekulGorunumu.jsx`
- `src/components/kimya/BohrModeli.jsx`
- `src/components/kimya/GlobalArama.jsx`
- `src/components/kimya/KarsilastirmaModu.jsx`
- `src/data/kimya/**`, `src/lib/kimya/**`, `src/styles/kimya-atlasi.css`
- `scripts/test-kimya-atlasi.mjs`

Özellikle şunları öğren:

- Bilgi kartı değil analiz aracı üretme yaklaşımı
- Aynı verinin tanecik, yapı, grafik ve sözel açıklama olarak çoklu temsili
- Temel/detaylı seviye ayrımı
- Global arama sonucundan ilgili kavram ve laboratuvara doğrudan gitme
- Karşılaştırma modu, adım adım açıklama ve “Neden?” geri bildirimi
- Arayüz yoğunluğu, kart ölçüleri, bölüm başlığı hiyerarşisi ve içerik ritmi

### Mevcut Biyoloji Atlası

Şu dosyaların tümünü incele:

- `src/pages/BiyolojiAtlasi.jsx`
- `src/components/biyoloji/**`
- `src/data/biyoloji/**`
- `src/lib/biyoloji/**`
- `src/styles/biyoloji-atlasi.css`
- `scripts/test-biyoloji-atlasi.mjs`

Tarayıcıda masaüstü ve mobil genişlikte üç atlası yan yana karşılaştır. Biyoloji Atlasında en az şu ekranları açıp kullan: harita, Molekül, Hücre, Bölünme, Kalıtım, Enerji ve Ekosistem.

## Mevcut uygulamada düzeltilmesi zorunlu yapısal problemler

### 1. `KapsamAlanlari.jsx` sahte etkileşim üretiyor

Mevcut `src/components/biyoloji/ortak/KapsamAlanlari.jsx`, çok sayıda alt başlık için aynı kalıbı tekrar ediyor:

- iki tahmin düğmesi,
- dört anlamsız çubuk,
- genel bir açıklama,
- her konuda aynı “Mekanizmayı yeni kanıtla sınarım” transfer seçeneği.

Bu, konuya özgü simülasyon değildir. `SENARYOLAR` içindeki metin değişse bile etkileşim mekaniği değişmiyor. Ötrofikasyon, DNA grafiği, üreme, vezikül taşınması ve habitat/niş aynı dört çubukla öğretilemez.

Zorunlu düzeltme:

- `KapsamAlanlari` içindeki jenerik kart üretimini ana öğrenme alanlarından kaldır.
- Bu bileşen yalnızca müfredat kapsam listesi/ilerleme özeti olarak kalabilir; tamamlanmış etkileşim yerine geçemez.
- Her `etkilesimId` gerçek, konuya özgü bir React bileşenine veya açıkça tanımlanmış konuya özgü bir motor + sahne kombinasyonuna bağlanmalı.
- Etkileşim kaydında yalnız kimlik değil gerçek `componentKey`, `engineKey`, `interactionType` ve davranış testi bulunmalı.
- Aynı bileşen türü farklı konularda kullanılacaksa verisi, fiziksel/biyolojik modeli ve kullanıcı görevi gerçekten farklı olmalı.

### 2. Kapsam manifesti testleri gerçeği ölçmüyor

Mevcut test 44 alt başlığın `etkilesimId` alanına sahip olmasını “etkileşim var” kabul ediyor. `ETKILESIMLER` nesnesi zaten manifestten otomatik üretildiği için bu test dairesel ve anlamsızdır. Bir kimliğin veri nesnesinde bulunması, ekranda çalışan bileşen olduğu anlamına gelmez.

Zorunlu düzeltme:

- Test, her manifest girdisinin gerçek bileşen kaydına bağlandığını doğrulasın.
- Kayıtlı bileşenin bir konuya özgü motoru veya state transition sözleşmesi olmalı.
- Testler en az bir başlangıç durumu, bir kullanıcı girdisi, beklenen ara durum ve sıfırlama durumunu doğrulasın.
- Aynı iki seçenekli jenerik transfer sorusunun bütün konulara kopyalanmasını engelleyen çeşitlilik kontrolü ekle.
- Alt başlıkların gerçek etkileşim bileşenleriyle bire bir eşleşmesini kontrol et.
- Sayfada hiç render edilmeyen `etkilesimId` testten geçmemeli.
- Yalnız `includes(...)` ile dosyada kelime arayan testleri davranış doğrulaması sayma.

### 3. Etkileşim kimlikleri tutarsız

Örnekler:

- Manifestte bilimsel yöntem `deney-tasarim`, gerçek bileşende `bilimsel-yontem`.
- Manifestte besin ayıracı `ayirac-lab`, gerçek bileşende `besin-ayirac`.
- Manifestte enzim `enzim-lab`, gerçek bileşende `enzim`.
- Bazı `haric` dizileri yanlış kimlikleri dışladığı için gerçek alan yanında jenerik kopya da oluşuyor.

Zorunlu düzeltme:

- Bütün kimlikleri tek kaynakta tanımla.
- Manifest, component registry, arama, URL hedefi, ilerleme ve testler aynı kimliği kullansın.
- Yinelenen gerçek/jenerik alan bırakma.
- Geçersiz kimlikte sessiz fallback yapma; geliştirme ortamında açık hata üret.

### 4. Kontrol değiştirmek simülasyon sayılmış

Kaydırıcı veya select bulunması tek başına simülasyon değildir. Mevcut birçok alanda değer değişince yalnız bir sayı, kısa metin veya statik çubuk değişiyor. Öğrenci süreci göremiyor.

Gerçek bir biyoloji simülasyonu şu sözleşmeyi karşılamalı:

1. Açık başlangıç durumu vardır.
2. Öğrenci bir hipotez/tahmin oluşturur.
3. En az bir anlamlı biyolojik değişkeni değiştirir.
4. “Deneyi çalıştır” veya zaman kontrolüyle süreci başlatır.
5. Sahnedeki varlıklar zaman içinde veya adım adım durum değiştirir.
6. Ölçüm, grafik veya sayaç sahneyle eş zamanlı güncellenir.
7. Sonucun biyolojik mekanizması açıklanır.
8. Sıfırla düğmesi bütün state’i başlangıca döndürür.
9. Uç değerler ve imkânsız kombinasyonlar güvenli biçimde ele alınır.
10. Öğrenci görevi yapmadan tamamlanma kaydı oluşmaz.

Hesap makinesi niteliğindeki alanlarda bile giriş → hesap → görsel temsil → yorum → yeni bağlama transfer zinciri görünür olmalı.

### 5. Görsel dil aynı ürün ailesinden değil

Mevcut Biyoloji Atlasında büyük, seyrek ve landing-page benzeri hero alanları baskın. Bölge başlıkları 78 px’e kadar çıkıyor; asıl laboratuvar aşağı itiliyor. Harita bağlantıları görünmüyor (`.ba-baglar { display:none }`) ve düğümler ilişki ağı gibi değil dağınık kartlar gibi duruyor. CSS büyük ölçüde sıkıştırılmış tek satırlı bloklardan oluşuyor; bakımı ve görsel tutarlılığı zor.

Zorunlu düzeltme:

- Fizik/Kimya Atlasındaki üst bar yüksekliği, sol panel genişliği, içerik maksimum genişliği, bölüm başlığı ölçüsü, kart yoğunluğu, sekme/segment, düğme, form alanı, not ve grafik ritmini referans al.
- Biyolojiye özgü renk paleti korunabilir; ancak bileşen anatomisi aynı aileden gelmeli.
- Bölge ekranında dev landing hero yerine Fizik Atlasındaki `fa-bolum-basi` veya Kimya Atlasındaki `ka-bolum-basi` ölçeğinde kompakt bölüm başlığı kullan.
- İlk viewport içinde başlıkla birlikte gerçek simülasyon sahnesi ve ana kontroller görünmeli.
- Harita bağlantılarını erişilebilir SVG ile gerçekten çiz; önerilen rota ve ön koşul ilişkileri görünür olsun.
- CSS’i okunur bölümlere ayır; tek satıra sıkıştırılmış dev kuralları yeniden düzenle.
- Tasarım tokenları, durum renkleri, boşluk, yarıçap, gölge ve responsive kırılımlar tutarlı olsun.
- Görsel hiyerarşide aynı ekranda her kart eşit ağırlıkta olmasın.
- Mobil alt gezinme yalnız dört genel düğmeden ibaret kalmasın; tüm bölgelere erişilebilir çekmece/menü sun.

## Yeni ortak öğrenme ve simülasyon mimarisi

Fizik Atlasını birebir kopyalamadan şu ortak sistemi kur:

### `BiyolojiModulKabugu`

Her ana öğrenme alanı için ortak kabuk:

- `Keşfet`: simülasyon serbestçe oynanır.
- `Öğren`: önce tahmin, sonra deney, ardından biyolojik açıklama ve yanılgı notu.
- `Ustalaş`: konuya özgü görev ve 2–3 öğrenme kontrolü.
- Favoriye ekleme ve tamamlanma durumu.
- Model varsayımları ve temsil ölçeği.

### Ortak kontroller

- Etiketli kaydırıcı + sayısal değer + birim
- Seçim şeridi
- Aç/kapat anahtarı
- Oynat / duraklat / adımla / geri adımla / sıfırla
- 0,25× / 0,5× / 1× / 2× hız
- Deney durumu: “hazır”, “çalışıyor”, “dengeye ulaştı”, “koşul uygun değil”

### Ortak sahne bileşenleri

- Parçacık sahnesi
- Hücre ve organel katmanlı SVG sahnesi
- Süreç/zaman çizelgesi
- Bağlantı ağı
- Ölçüm paneli
- Eksen, birim, grid ve erişilebilir açıklaması olan grafik

### Motor ayrımı

Her simülasyonun biyolojik hesap/durum mantığı `src/lib/biyoloji/` altında saf fonksiyon veya açık state machine olmalı. React bileşeni bilimsel hesabı kendi JSX satırları içine gömmesin.

## Ünite bazında zorunlu gerçek etkileşimler

Aşağıdaki alanların her biri çalışır olmalı. “Kart + iki cevap + dört çubuk” çözümü kabul edilmez.

### 1. Yaşamın Şifreleri

#### Bilimsel araştırma laboratuvarı

- Araştırma sorusu seçme/yazma
- Hipotez kurma
- Bağımsız, bağımlı ve kontrollü değişkenleri sürükleyerek yerleştirme
- Kontrol ve deney grubu kurma
- Tekrar sayısı ve ölçüm aralığı seçme
- “Deneyi çalıştır” sonrasında nokta grafiği ve ortalama üretme
- Karıştırıcı değişken varsa veri yine oluşsun fakat sistem neden güvenilir çıkarım yapılamadığını göstersin
- Etik senaryoda izin, zarar, veri uydurma ve kaynak gösterme kararları

#### Canlılık kanıtları

- Hücresel yapı, metabolizma, homeostazi, çoğalma ve kalıtsal materyal kanıt kartları
- Bakteri, tohum, virüs ve steril hücre örneklerini tek etikete değil kanıt setine göre değerlendirme
- Virüs için “kesin canlı/cansız” yerine bağlama bağlı bilimsel tartışmayı gösterme

#### Homeostazi döngüsü

- Vücut sıcaklığı/kan şekeri gibi bir değişken bozulsun
- Reseptör → kontrol merkezi → efektör bloklarını öğrenci sıraya koysun
- Negatif geri bildirim çalışırken değer hedef aralığa dönsün; zaman grafiği eş zamanlı ilerlesin

### 2. Molekül Mutfağı

#### Molekül kurucu

- Monomerleri sürükleyip polimer oluşturma
- Bağ kurulurken su çıkışını, hidrolizde su kullanımını parçacık düzeyinde gösterme
- Karbohidrat/lipit/protein için yapı–işlev farklılıklarını karşılaştırma

#### Besin ayıracı laboratuvarı

- Besin, ayıraç ve gerekiyorsa ısı seçimi
- Pipet/ayıraç ekleme ve deneyi başlatma
- Tüp rengi zaman içinde değişsin; yalnız CSS sınıfı aniden değişmesin
- Pozitif/negatif kontrol tüpleri
- Birden fazla besin bileşeni içeren örneklerde her test ayrı kanıt üretsin
- Sonuç tablosuna gözlem kaydetme ve çıkarım yapma

#### Enzim laboratuvarı

- Enzim ve substrat parçacıkları sahnede çarpışıp ürün oluştursun
- Sıcaklık hareket hızını, aşırı sıcaklık enzim biçimini; pH aktif bölge uyumunu etkilesin
- Enzim/substrat derişimi ve süre grafikleri
- Deneyi çalıştırmadan yalnız kaydırıcı oynatmak sonuç kaydetmesin
- Optimumdan sonra düşüş, doygunluk ve enzim tükenmeme olgusu sahnede görülsün
- Sıfırla bütün parçacıkları, zamanı, ürünü ve grafiği temizlesin

### 3. Hücre Şehri

#### Hücre karşılaştırma merceği

- Prokaryot, bitki ve hayvan hücreleri ayrı katmanlı SVG modelleri
- Hücre tipi seçilince gerçekten farklı yapı ve organeller
- Organele tıklayınca yapı, görev, kimlerde bulunduğu ve iş birliği bağlantıları
- Göster/gizle katmanları; etiketli ve etiketsiz sınama modu

#### Organel iş akışı

- Protein salgılama görevinde çekirdek → ribozom → granüllü ER → Golgi → vezikül → zar adımlarını öğrenci sıraya koysun
- Molekül/vezikül sahnede adımlar arasında hareket etsin
- Yanlış rotada ilgili organelin neden uygun olmadığı açıklansın

#### Yüzey alanı / hacim

- Hücre boyutu değiştikçe küp/temsil büyüsün
- Yüzey alanı, hacim ve oran ayrı sayaçlarda doğru hesaplansın
- Aynı toplam hacimde tek büyük hücre ile çok küçük hücre karşılaştırılsın

### 4. Zar Taşınım Laboratuvarı

Bu alan öncelikli ve yüksek kaliteli olmalı.

- Zarın iki tarafında hareket eden gerçek parçacıklar
- Molekül: O₂, CO₂, su, glikoz, iyon, protein
- İç/dış derişim
- Kanal/taşıyıcı varlığı
- ATP varlığı
- Taşıma yönü
- Başlat, duraklat, adımla, sıfırla
- Net akış sayacı ve iki tarafın anlık derişimi
- Dengeye gelince parçacık hareketi durmasın; yalnız net akış sıfıra yaklaşsın
- Basit difüzyon, kolaylaştırılmış difüzyon, ozmoz ve aktif taşıma sahnede farklı mekanizma olarak görünsün
- ATP yokken gradyana karşı aktif taşıma başlamasın ve nedeni açıklansın
- Büyük maddede endositoz/ekzositoz için zarın şekil değişimi ve vezikül oluşumu görülsün
- Hipotonik/izotonik/hipertonik modunda bitki ve hayvan hücresi şekli zamanla değişsin

### 5. Canlılık Ağacı

- Statik üç kutu ve CSS `scale()` gerçek yakınlaştırılabilir ağaç sayılmaz
- Dalları SVG ile çizilmiş, genişletilip daraltılabilen üç-domain ağacı kur
- Düğümler açılınca ayırt edici özellikler ve ortak ata ilişkisi görünsün
- Takson basamakları merceğinde örnek canlı grubu gerçekten filtrelensin
- Dallanmış anahtarda öğrenci ölçütü kendi seçsin; yalnız önceden verilen dört özelliğe bakıp şık seçmesin
- Görünüş benzerliği ile moleküler/homolog kanıt çelişen örnek sunulsun
- Türkiye biyoçeşitliliği için en az birkaç bölge/tür verisini etkileşimli harita veya veri grafiğinde yorumlama görevi olsun

### 6. Bölünme Saati

- Şu anki birkaç CSS çizgisinden oluşan kromozom görünümü yeterli değil
- Kromozom, iki kardeş kromatit, sentromer, homolog çift ve iğ iplikleri ayrı görsel öğeler olsun
- Mitoz ve mayoz evreleri oynat/duraklat/adımla/geri al/sıfırla ile ilerlesin
- Profaz I’de sinapsis ve crossing-over parça değişimi görünür olsun
- Metafaz dizilimi ve anafaz ayrılmaları konumsal olarak canlandırılsın
- Hücre zarı/sitokinez değişimi gösterilsin
- Her evrede hücre başına kromozom, kromatit, DNA miktarı, ploidy ve toplam hücre sayısı doğru güncellensin
- Öğrenci grafik noktalarını sürükleyerek S evresi, mitoz ve mayoz DNA grafiği kursun; hazır çizgiyi yalnız izlemesin
- Hatalı grafikte hangi evrenin neden yanlış olduğu gösterilsin

### 7. Üreme

- Eşeyli/eşeysiz örnekleri sürükleyerek mekanizmaya göre sınıflandırma
- Tomurcuklanma, rejenerasyon, vejetatif üreme, bölünme ve sporla üreme örnekleri
- Çevre kararlılığı, değişim hızı, enerji maliyeti ve eş bulma koşulları değişince iki stratejinin temsili sonuçları karşılaştırılsın
- “Eşeysiz = daima tamamen aynı” gibi mutlak ifadelerin mutasyon bağlamı açıklansın

### 8. Kalıtım Dedektifi

#### Punnett alanı

- Gametler öğrenci tarafından oluşturulsun
- Gametler tablo başlıklarına sürüklenip hücreler doldurulsun
- Uygulama başlangıçta sonucu otomatik doldurmasın
- Tamamlandıktan sonra genotip/fenotip oranı; kesir, yüzde ve görsel dağılım olarak gösterilsin
- Hatalı hücreye özel geri bildirim

#### Kan grubu

- ABO alelleri ve Rh ayrı açık modeller
- Ebeveyn genotiplerinden olası çocuk fenotipleri
- “Bu eğitim modelidir, tıbbi karar aracı değildir” notu

#### Soyağacı

- En az 3 kuşak ve birden çok aile senaryosu
- Otozomal baskın, otozomal çekinik, X’e bağlı çekinik model seçimi
- Öğrenci bireylere olası genotip etiketleri sürüklesin
- Model çelişkisi bulunan ilk birey vurgulansın
- “Kesin / olabilir / olamaz” ayrımı yalnız düğme seçimi değil kanıt zinciriyle açıklansın

### 9. Enerji İstasyonu

#### Fotosentez

- Işık, CO₂, sıcaklık ve su değişkenleri
- Deneyi başlatınca zaman içinde O₂/ürün veya hız ölçümü
- Sınırlayıcı faktör değiştikçe grafik ve sahne birlikte değişsin
- Işık rengi/pigment ayrıntısı varsayılan TYT düzeyini aşmasın

#### ATP modeli

- ATP ↔ ADP + Pi dönüşümünü hücresel işlerle eşleştirme
- Kasılma, aktif taşıma ve sentez gibi işlere enerji aktarımı
- ATP’yi uzun süreli depo gibi gösterme

#### Glikoz yolculuğu

- Ağız → sindirim → emilim → kanla taşıma → hücre → mitokondri adımlarında tek glikozu takip etme
- Her adımda molekülün bulunduğu yer ve gerçekleşen süreç değişsin
- Öğrenci sırayı kurmadan otomatik ilerlemesin

#### Solunum ve fermantasyon

- Oksijen koşulu ve canlı türü değişince yol ayrımı
- Oksijenli solunum, laktik asit ve etil alkol fermantasyonu ürün/yer/enerji verimi karşılaştırması
- Bitkilerin de hücresel solunum yaptığı açıkça görülsün

### 10. Ekosistem Ağı

#### Besin ağı kurucu

- Tür kartlarını öğrenci sahneye sürüklesin
- Besin ilişkilerini öğrenci ok çizerek kursun
- Ok yönü enerji/besin kaynağından tüketiciye doğru doğrulansın
- Hazır statik dört katman besin ağı yeterli değil
- Tür artışı/azalışı başladığında etkiler zaman adımlarıyla ağda yayılsın
- Doğrudan ve dolaylı etkiler farklı çizgi biçimiyle gösterilsin
- Model katsayılarının temsili olduğu belirtilsin

#### Trofik piramit ve biyolojik birikim

- Enerji, biyokütle ve birey sayısı ayrı veri setleri
- Basamakların genişliği ve etiketleri doğru sırada
- Toksin parçacıkları üreticiden tepe avcıya ilerledikçe birikim görseli
- Enerji azalması ile toksin derişimi artışının farklı mekanizmaları açıklansın

#### Popülasyon

- Doğum, ölüm, iç/dış göç, kaynak ve taşıma kapasitesi
- Çalıştırılabilir zaman modeli; yalnız kaydırıcıya bağlı anlık hazır grafik değil
- Üstel ve lojistik büyümeyi karşılaştırma
- Taşıma kapasitesi değişirse yeni dengeye yaklaşım

#### Madde döngüleri ve çevre

- Su, karbon ve azot döngüsünde sürüklenebilir süreç etiketleri ve oklar
- Ötrofikasyon neden–sonuç zinciri kurulabilsin
- Habitat kaybı/iklim/kirlilik senaryosunda bağlantılı sonuç ağı
- Atık hiyerarşisi karar oyunu ve ekolojik ayak izi için varsayımları açık karşılaştırma

## Etkileşim tasarım kuralları

- Simülasyon sonucu başlangıçta açık olmasın; öğrenci tahmin edip çalıştırsın.
- Yanlış tahminde doğru cevap hemen ezber cümlesi olarak verilmesin; deneyde bakacağı değişkene yönlendirilsin.
- Kontrol değişirken sonuçlar bilimsel olarak monoton olması gereken yerde monoton, optimum gereken yerde optimum, denge gereken yerde asimptotik davranmalı.
- Her sahnede neyin temsilî ve neyin ölçülebilir olduğu yazsın.
- Renk tek bilgi taşıyıcısı olmasın; şekil, desen, ikon veya etiket ekle.
- Animasyonlar açıklayıcı olsun; dekoratif sallanma/parlama yapma.
- `prefers-reduced-motion` etkinse adım tabanlı eşdeğer görünüm sun.
- Klavyeyle sürükle-bırak görevleri için seç–taşı–yerleştir alternatifi sağla.
- Her simülasyonda sıfırlama güvenilir olsun.
- Zamanlayıcıları ve `requestAnimationFrame` döngülerini unmount sırasında temizle.
- Render sırasında rastgele sayı üretme; deney tohumunu state’te tut.

## İçerik ve pedagojik düzeltmeler

- Bütün transfer görevlerini aynı “kanıtı ve mekanizmayı kullanırım” seçeneğine bağlama.
- Her transfer sorusu konuya özgü yeni bir bağlam, farklı sayısal/deneysel veri veya yeni canlı içersin.
- Doğru ve yanlış geri bildirimleri manifestteki genel cümleden değil gerçek öğrenci seçimi ve simülasyon durumundan üretilsin.
- Yanılgı bağlantıları görünür olsun: öğrenci hangi düşünce hatasına düştüğünü ve kanıtın bunu nasıl çürüttüğünü görsün.
- Tamamlanma için tahmin seçmek yetmez. Ana görevin hedef durumu başarıyla oluşturulmalı ve kontrol sorusu çözülmeli.
- Öğrenme kontrolünde ilk yanlışta ipucu, ikinci yanlışta çözüm yaklaşımı göster.
- Uzun metin bloklarını kısalt; açıklamayı sahneye, ölçüme ve öğrenci eylemine yakın yerleştir.

## Görsel yeniden tasarım kabul ölçütleri

Biyoloji Atlası, Fizik ve Kimya Atlaslarının birebir renk kopyası olmayacak; fakat aynı Dr. Koç ürün ailesi olduğu ilk bakışta anlaşılacak.

- Üst bar, marka alanı, arama, tema düğmesi ve gezinme yoğunluğu referans atlaslarla uyumlu.
- Sol panelde aktif bölge, ilerleme ve dönüş bağlantısı aynı kalite düzeyinde.
- Bölge başlıkları kompakt; başlık laboratuvarı aşağı itmeyecek.
- Simülasyon düzeni masaüstünde tercihen `kontrol paneli + sahne/ölçüm`, mobilde tek kolon.
- Sahne için belirgin bir görsel çerçeve; kontroller için ayrı panel.
- Grafikler eksen, değer, birim ve açıklama içerecek; dört dekoratif çubuk grafik sayılmayacak.
- Boşluklar, köşe yarıçapları ve tipografi Kimya/Fizik Atlasındaki ölçekle uyumlu.
- 360 px, 768 px, 1024 px ve geniş masaüstünde yatay taşma olmayacak.
- Açık ve koyu temada bütün metinler okunur olacak.
- İlk viewport ekran görüntüsü, landing page değil çalışan laboratuvar izlenimi verecek.

## Test ve doğrulama — yalnız build yetmez

Mevcut `npm run test:biyoloji` ve production build’in geçmesi gereklidir ama yeterli değildir.

### Saf motor testleri

Her ana motor için sınır ve değişmez testleri ekle:

- Enzim: optimum, denatürasyon, doygunluk, negatif olmayan hız, reset
- Zar: gradyan, kanal, ATP, büyük molekül, net akış ve denge
- Homeostazi: sapmanın hedef aralığa dönmesi
- Bölünme: her evrede kromozom/kromatit/DNA/ploidy ve hücre sayısı
- Kalıtım: Punnett toplam olasılığı, farklı çaprazlamalar, soy ağacı model çelişkileri
- Fotosentez: sınırlayıcı faktör ve optimum sıcaklık
- Popülasyon: negatif olmayan değer, kapasiteye yaklaşma ve kapasite değişimi
- Besin ağı: doğrudan/dolaylı etkiler ve döngü güvenliği

### Davranış testleri

En az aşağıdaki kullanıcı akışlarını doğrula:

1. Enzim deneyinde 37 °C ve 60 °C sonuçları farklıdır; ürün sayacı ve grafik değişir; reset sıfırlar.
2. Zar deneyinde O₂ gradyana doğru ATP olmadan geçer; parçacık sayıları değişir.
3. İyon gradyana karşı ATP yokken hareket etmez; ATP açılınca taşıma başlar.
4. Ozmozda denge sonrası moleküler hareket sürerken net akış yaklaşık sıfırdır.
5. Mitoz oynat düğmesi evreyi ilerletir, duraklat durdurur, reset G1’e döner.
6. Mayoz I sonunda homologlar; mayoz II sonunda kardeş kromatitler ayrılmıştır.
7. Punnett karesi öğrenci yerleştirmeden dolmaz; doğru yerleşimde oran hesaplanır.
8. Besin ağı bağlantısı yanlış yönde çizilirse kabul edilmez ve neden açıklanır.
9. Popülasyon çalıştırıldığında zaman ilerler; yalnız slider oynatınca tamamlanmış sayılmaz.
10. Müfredat filtresi görünür bölgeleri/etiketleri gerçekten değiştirir.
11. Global arama sonucu doğru gerçek etkileşime kaydırır; jenerik kopyaya gitmez.
12. Bir etkileşim ancak görev + kontrol tamamlanınca ilerlemeye yazılır.

### Tarayıcıyla görsel ve işlevsel QA

- Uygulamayı gerçekten aç.
- Her ana bölgede en az bir tam deney akışını fare ve klavyeyle tamamla.
- Masaüstü ve mobil ekran görüntülerini incele.
- Tarayıcı konsolunda hata/uyarı, sonsuz render, bozuk SVG, `NaN`, taşma ve hydration sorunu olmadığını kontrol et.
- Fizik, Kimya ve Biyoloji Atlaslarının giriş ve bir bölge ekranını karşılaştır.
- Yalnız DOM’da düğmenin bulunmasını değil, tıklama sonrası beklenen state değişimini doğrula.

## Çalışma sırası

1. Mevcut üç atlası çalıştır ve karşılaştırmalı sorun listesini çıkar.
2. Biyoloji Atlasındaki kimlik/registry/manifest tutarsızlıklarını düzelt.
3. Jenerik `KapsamAlanlari` sahte etkileşimlerini kaldır.
4. Ortak `BiyolojiModulKabugu`, kontrol, sahne ve grafik altyapısını kur.
5. Önce üç kalite çıpasını tamamla: Enzim Laboratuvarı, Zar Taşınım Laboratuvarı, Bölünme Zaman Makinesi.
6. Bu üç alanı tarayıcıda doğrula; görsel dil ve etkileşim standardını sabitle.
7. Diğer üniteleri aynı standarda taşı.
8. İlerleme, arama, kapsam ve mobil gezinmeyi bağla.
9. Testleri sahte varlık kontrolünden davranış kontrolüne dönüştür.
10. Production build ve üç atlasın regresyon testlerini çalıştır.
11. Son görsel/işlevsel QA yapmadan işi tamamlandı sayma.

Bir aşamayı tamamlamadan yalnız dosya sayısı artırarak sonraki aşamaya geçme. Özellikle ilk üç kalite çıpası gerçekten çalışmıyorsa diğer 40 kartı üretmeye çalışma.

## Kesin tamamlanma tanımı

Görev ancak şu koşullarda tamamlanmıştır:

- Biyoloji Atlası ilk bakışta Fizik/Kimya Atlaslarıyla aynı ürün ailesindedir.
- Landing-page benzeri dev ve seyrek düzen ortadan kalkmıştır.
- Her ünitenin gerçek, konuya özgü en az bir ana etkileşim alanı vardır.
- Manifestteki hiçbir alt başlık jenerik dört çubuk kartıyla geçiştirilmemiştir.
- Enzim, zar, bölünme, kalıtım, fotosentez, popülasyon ve besin ağı simülasyonları zaman/durum değişimiyle gerçekten çalışır.
- Bütün ana simülasyonlarda başlat/duraklat veya adım tabanlı süreç ve güvenilir reset vardır.
- Öğrenci eylemi sahne, ölçüm ve grafikte tutarlı sonuç üretir.
- Tamamlanma, yalnız tıklama veya sayfayı açma ile verilmez.
- Davranış testleri ve tarayıcı QA geçmiştir.
- `npm run test:biyoloji`, mevcut Fizik/Kimya testleri ve `npm run build` geçmiştir.
- Mevcut kullanıcı değişiklikleri ve ilgisiz dosyalar korunmuştur.

## Teslim mesajı

Son mesajda genel ifadeler kullanma. Şunları somut biçimde yaz:

- Hangi jenerik/sahte etkileşimlerin kaldırıldığı
- Hangi gerçek simülasyonların yapıldığı
- Her simülasyonda öğrencinin değiştirdiği değişken ve gözlediği sonuç
- Fizik/Kimya Atlaslarından hangi ürün desenlerinin uyarlandığı
- Tarayıcıda test edilen kesin akışlar
- Çalıştırılan test komutları ve sonuçları
- Hâlâ eksik veya sadeleştirilmiş bir alan varsa açık listesi

“Tüm gereksinimler karşılandı” demek için yukarıdaki davranışları gerçekten göstermiş ol. Bir düğmenin veya `etkilesimId` alanının varlığı çalışan simülasyon kanıtı değildir.
