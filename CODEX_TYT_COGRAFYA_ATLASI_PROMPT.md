# Codex uygulama promptu — TYT Coğrafya Atlası

Bu görevde yalnızca fikir, analiz, plan, taslak, tek ekranlık demo veya statik konu kartları üretme. Aşağıdaki gereksinimleri mevcut React/Vite projesine gerçekten uygula; gerekli dosyaları oluştur, atlası uygulamaya bağla, çalışan etkileşimleri tamamla, doğrula ve kullanılabilir sonucu teslim et.

## Rolün ve hedefin

Sen aynı anda kıdemli bir öğrenme deneyimi tasarımcısı, TYT coğrafya öğretmeni, ölçme-değerlendirme uzmanı, kartografik bilgi görselleştirme tasarımcısı ve React mühendisisin.

Dr. Koç eğitim platformuna mevcut Tarih, Fizik ve Kimya Atlaslarıyla aynı ürün ailesinde duran; fakat coğrafyanın doğasına özgü, yüksek etkileşimli bir **TYT Coğrafya Atlası** ekle.

Ana metafor: **“Yerelden küresele katmanlı Dünya laboratuvarı.”** Öğrenci haritayı dekor olarak seyretmemeli; ölçeği değiştirmeli, katman açmalı, konum seçmeli, profil çıkarmalı, veri/grafik okumalı, neden–sonuç ilişkisi kurmalı, senaryo kararı vermeli ve kararının mekânsal sonucunu görmelidir.

Her öğrenme alanı şu üç soruyu cevaplatmalıdır:

1. **Nerede ve hangi ölçekte?**
2. **Neden orada / neden bu dağılış oluştu?**
3. **Doğal ve beşerî sonuçları ne?**

Tüm arayüz ve içerik Türkçe olmalı. Dil 14–18 yaş düzeyinde; bilimsel olarak doğru, açık, kısa ve doğrudan olmalı. Ezber listeleri yerine mekânsal düşünme, veri okuryazarlığı ve çok nedenli açıklama geliştirilmelidir.

## Başarı ölçütleri

Sonuç ancak aşağıdakilerin tamamı gerçekse başarılıdır:

- `/cografya-atlasi` doğrudan açılır ve Kütüphane sayfasından ulaşılır.
- Projedeki 10 TYT Coğrafya konusu ana keşif haritasında ayrı ve görünür bölgelerdir.
- Her anlamlı alt başlık gerçek bir etkileşime, nedensel geri bildirime ve transfer görevine bağlıdır.
- Harita, kesit, grafik, profil ve tablo aynı bilginin dekoratif tekrarı değil; farklı coğrafi kanıt türleridir.
- Coğrafi veriler, nokta ve senaryolar JSX içine dağıtılmaz; veri dosyalarından gelir.
- Bilimsel hesaplar ve simülasyon mantığı saf fonksiyonlarda tutulur ve otomatik test edilir.
- Masaüstü, mobil, klavye, ekran okuyucu, açık/koyu tema ve azaltılmış hareket davranışları gerçekten kontrol edilir.
- Atlas, ilgili otomatik testler ve production build hatasız tamamlanır.

## Önce mevcut projeyi incele

Kod yazmadan önce gerekli olduğu ölçüde aşağıdaki yapıları incele ve kısa bir iç denetim çıkar:

- Tarih Atlası: `src/pages/TarihAtlasi.jsx`, `src/styles/tarih-atlasi.css`, `src/data/tarihAtlasi/**`, ilgili üretim/doğrulama betikleri
- Fizik Atlası: `src/pages/FizikAtlasi.jsx`, `src/components/fizik/**`, `src/data/fizik/**`, `src/lib/fizik/**`, `src/styles/fizik-atlasi.css`, `scripts/test-fizik-atlasi.mjs`
- Kimya Atlası: `src/pages/KimyaAtlasi.jsx`, `src/components/kimya/**`, `src/data/kimya/**`, `src/lib/kimya/**`, `src/styles/kimya-atlasi.css`, `scripts/test-kimya-atlasi.mjs`
- Mevcut Coğrafya sistemi: `GEOGRAPHY_NOTES_GOLD_STANDARD.md`, `src/content/lessons/cografya/**`, `src/components/lessons/figures/GeographyAtlasVisuals.jsx`, `src/components/lessons/figures/GeographyVisuals.jsx`, `src/components/lessons/figures/InteractiveGeoImage.jsx`, `public/lesson-assets/cografya/**`
- Entegrasyon: `src/App.jsx`, `src/pages/LibraryGateway.jsx`, `DESIGN_SYSTEM.md`, `package.json`
- Müfredatın proje içi tekil sırası: `supabase/seed_library_curriculum_v2.sql`

Başlamadan önce `git status` ile mevcut kullanıcı değişikliklerini gör. Kullanıcının mevcut Biyoloji Atlası ve diğer çalışmalarına ait değişiklikleri koru. İlgisiz dosyaları yeniden biçimlendirme, geri alma, silme veya yeniden yazma. `git reset`, `checkout --` ya da benzeri yıkıcı komutlar kullanma.

## Üç atlastan alınacak dersler

Referans atlasların kodunu kopyala-yapıştırma. Çalışan ürün desenini bul ve coğrafyaya dönüştür.

### Tarih Atlasından

- Zaman kaydırıcısının haritayı anında değiştirmesi
- Katman açma/kapama, lejant ve seçili unsur bilgi paneli
- Harita verisi, görsel katman ve açıklama metninin ayrı tutulması
- Kaynak, lisans, şematikleştirme ve tarihsel/coğrafi belirsizliğin açıkça belirtilmesi
- Büyük veriyi gerektiğinde ayrı yükleme ve hata/yükleme durumu gösterme
- “Haritada görünüyor” ile “tarihsel/coğrafi olarak kesin” arasındaki farkı koruma

Coğrafyaya dönüşümü: yıl eksenine ek olarak **ölçek, katman, mevsim ve senaryo** eksenleri kullanılmalı; haritadaki her seçim “nerede–neden–sonuç” kartına bağlanmalıdır.

### Fizik Atlasından

- Ana keşif haritası, ön koşul bağlantıları ve bölge bazlı lazy loading
- URL sorgu parametresiyle bölge açma; geri/ileri tuşlarıyla senkron durum
- Güvenli `localStorage`, ilerleme yüzdesi, kaldığı yer ve onaylı sıfırlama
- Ortak modül kabuğu, kontrol bileşenleri, deney sahnesi, tahmin ve kontrol noktası
- Arayüzden ayrı saf hesap/simülasyon motorları
- Kavram Pusulası, yanılgı kaydı ve otomatik bilimsel tutarlılık testleri

Coğrafyaya dönüşümü: fiziksel değişken yerine **ölçek, koordinat, yükselti, eğim, sıcaklık/yağış, yoğunluk, ulaşılabilirlik ve arazi kullanımı** değişkenleri kullanılmalıdır.

### Kimya Atlasından

- Global arama ve doğrudan kavrama/formüle gitme
- Temel/detaylı anlatım seviyesi
- Analiz laboratuvarı, karşılaştırma modu ve birden çok görsel temsil
- “Neden?” açıklamaları ve kanıt desteklemediğinde veri uydurmama
- Veri tabanlı mini test ve doğrulanmış yapı verisi

Coğrafyaya dönüşümü: arama; yer, kavram, harita türü ve süreci bulabilmeli. Karşılaştırma modu iki bölgeyi, iki iklim grafiğini, iki nüfus piramidini veya iki arazi kullanımını aynı kanıt başlıklarıyla karşılaştırmalıdır.

Teslim özetinde hangi desenin hangi atlastan alınıp Coğrafya Atlasında nasıl dönüştürüldüğünü kısaca belirt.

## Resmî kapsam ve kaynak disiplini

Proje içi konu sırası, mevcut platformla tutarlılık için `supabase/seed_library_curriculum_v2.sql` kaynağından gelmelidir. Ayrıca güncel kapsamı aşağıdaki resmî kaynaklardan doğrula:

- MEB 2026 Coğrafya Dersi Öğretim Programı: `https://tymm.meb.gov.tr/assets/pdf/cografya-dersi_20260819_142604_415.pdf`
- MEB Coğrafya program sayfası: `https://tymm.meb.gov.tr/ogretim-programlari/ders/cografya-dersi`
- 2026 YKS kılavuzu: `https://www.osym.gov.tr/2026yuksekogretim-kurumlari-sinavi-yks-kilavuzu`
- 2026 TYT resmî soru kitapçığı sayfası: `https://www.osym.gov.tr/2026yks-tyt-ayt-ve-ydt-temel-soru-kitapciklari-ve-cevap-anahtarlari`

2026 TYT Sosyal Bilimler testinde Coğrafya 6–10. sorular arasında beş sorudur. ÖSYM sorularını veya telifli metinleri kopyalama. Resmî sorulardan yalnızca ölçülen beceri desenlerini çıkar: harita/grafik yorumlama, mekânsal dağılış, çok nedenli çıkarım, kanıtı aşmayan sonuç ve Türkiye–dünya ölçek geçişi.

Müfredat geçişini iki ayrı katmanda yönet:

### A. TYT sınav çekirdeği

Platformdaki mevcut sırayı eksiksiz koru:

1. Doğa ve İnsan
2. Dünya’nın Şekli ve Hareketleri
3. Coğrafi Konum
4. Harita Bilgisi
5. Atmosfer ve İklim
6. Yerin Şekillenmesi (İç ve Dış Kuvvetler)
7. Su, Toprak ve Bitkiler
8. Nüfus
9. Yerleşme
10. Ekonomik Faaliyetler

### B. 2026 TYMM beceri ve ünite katmanı

MEB programındaki yedi üniteyi ayrı `2026 TYMM` etiketiyle atlas içindeki mevcut bölgelere eşle:

- Coğrafyanın Doğası
- Mekânsal Bilgi Teknolojileri
- Doğal Sistemler ve Süreçler
- Beşerî Sistemler ve Süreçler
- Ekonomik Faaliyetler ve Etkileri
- Afetler ve Sürdürülebilir Çevre
- Bölgeler, Ülkeler ve Küresel Bağlantılar

Arayüzde filtre sun: **TYT sınav çekirdeği / 2026 TYMM / Tümü**. Geçiş farkını tek, açık bir cümleyle anlat. Sınav çekirdeğini “eski” diye değersizleştirme; resmî programın beceri boyutunu da gereksiz ek konu gibi sunma.

## Bilgi mimarisi

Ana giriş, Dünya sistemlerinin ve öğrenme ön koşullarının göründüğü bir **keşif haritası** olsun. Öğrenci istediği bölgeden başlayabilsin; oklar kilit değil önerilen rota olsun.

Masaüstünde sol gezinme; mobilde erişilebilir alt gezinme ve/veya çekmece kullan. URL sorgu parametresiyle doğrudan bölge ve gerekirse etkileşim açılabilsin:

- `/cografya-atlasi?bolge=iklim`
- `/cografya-atlasi?bolge=harita-bilgisi&etkilesim=izohips-profili`
- `/cografya-atlasi?kapsam=tymm`

Tarayıcı geri/ileri tuşları adres ve ekran durumunu birlikte değiştirsin. Geçersiz parametre güvenli biçimde keşif haritasına dönsün.

Önerilen bölge adları:

1. **Dünya Sistemleri** — Doğa ve İnsan
2. **Gezegen Saati** — Dünya’nın Şekli ve Hareketleri
3. **Konum Laboratuvarı** — Coğrafi Konum
4. **Harita Atölyesi** — Harita Bilgisi
5. **Atmosfer Gözlemevi** — Atmosfer ve İklim
6. **Yerküre Dinamikleri** — İç ve Dış Kuvvetler
7. **Yaşam Kuşakları** — Su, Toprak ve Bitkiler
8. **Nüfus Merceği** — Nüfus
9. **Yerleşme Ağları** — Yerleşme
10. **Üretim ve Bağlantılar** — Ekonomik Faaliyetler
11. **Afet ve Sürdürülebilirlik Merkezi** — TYMM katmanı ve konular arası transfer
12. **Kavram Pusulası** — yanılgı teşhisi ve tekrar
13. **TYT Kampı** — karışık veri/harita soruları, hata defteri ve tekrar rotası

İlk 10 konu, müfredat ekranında ve keşif haritasında mutlaka ayrı görünmelidir. Yardımcı merkezler bir konuyu saklayan klasöre dönüşmemelidir.

## Birleştirici etkileşim: Coğrafi Mercek

Atlasın ana birleştirici aracı **Coğrafi Mercek** olsun:

- Ölçek: yerel → bölgesel → Türkiye → kıta → küresel
- Katman: doğal → beşerî → ekonomik → risk → bağlantı
- Zaman: gün → mevsim → yıl → uzun dönem; yalnızca konu anlamlıysa
- Kanıt türü: harita ↔ kesit ↔ grafik ↔ tablo ↔ uydu/peyzaj görünümü

Ölçek veya katman değiştiğinde yalnızca yakınlaştırma yapma; gösterilen veri, uygun genelleştirme, açıklama ve sorulabilecek coğrafi soru da değişsin. Yerel bir durumdan küresel kesinlik, küresel ortalamadan yerel kesinlik çıkarılamayacağını göster.

## Gerçek etkileşim tanımı

Bir alanın “etkileşimli” sayılması için dört parçanın tamamı gerekir:

1. Öğrenci tahmin, seçim, sıralama, çizim, katman, nokta, değişken veya senaryo kararı verir.
2. Girdi harita, profil, grafik, dağılış, akış veya sonuçta görünür ve anlamlı bir değişim üretir.
3. Sistem öğrencinin kararına özel, nedensel geri bildirim verir.
4. Kısa bir transfer görevi aynı ilkeyi yeni bir mekân veya veri türünde kontrol eder.

Yalnızca sekme değiştirmek, kart açmak, hover ile metin görmek, cevabı göster/gizle yapmak, dekoratif animasyon izlemek veya sabit haritada marker tıklamak tek başına etkileşim sayılmaz.

## Zorunlu konu–etkileşim matrisi

Aşağıdaki her satır için çalışan bir öğrenme alanı oluştur. Bir alan birden çok alt başlığı birleştirebilir; ancak kapsam manifestinde her alt başlığın hangi etkileşim tarafından öğretildiği açık olmalıdır.

### 1. Doğa ve İnsan

- Atmosfer, hidrosfer, litosfer, biyosfer ve beşerî sistem katmanlarını kurma
- Bir vaka için doğal koşul → insan cevabı → geri etki zinciri oluşturma
- Aynı doğal koşulda teknoloji, sermaye, kültür ve politika değişince farklı sonuçlar üretme
- “Doğa her şeyi belirler” ve “insan doğadan bağımsızdır” uçlarını kanıtla sorgulama

### 2. Dünya’nın Şekli ve Hareketleri

- Eksen eğikliği, enlem ve tarih değişkenli Dünya–Güneş modeli
- Gece–gündüz süresi, Güneş açısı, gölge yönü/uzunluğu ve mevsim karşılaştırması
- Günlük hareket ile yıllık hareket sonuçlarını ayırma
- Kuzey ve Güney Yarım Küre’de aynı tarihin sonucunu karşılaştırma

### 3. Coğrafi Konum

- Enlem–boylam seçerek yarım küre, kuşak ve yerel saat sonucu üretme
- Boylam farkından yerel saat hesaplama; yön ve tarih değişimini doğrulama
- Matematik konum ile göreceli konumu kanıta göre sınıflandırma
- Türkiye’nin 36°–42° Kuzey ve 26°–45° Doğu konumundan doğrudan çıkanlarla çıkmayanları ayırma
- Nokta, çizgi, alan ve yakınlık ilişkisini kullanan temel mekânsal bilgi teknolojisi görevi

### 4. Harita Bilgisi

- Kesir ve çizgi ölçeğiyle harita–gerçek uzaklık hesaplama
- Ölçek değişince alan, ayrıntı, genelleştirme ve hata ilişkisini gösterme
- Kullanıcının izohips üzerinde A–B hattı seçip topografik profil çıkarması
- Vadi, sırt, tepe, boyun, falez, delta, eğim ve akış yönü tanıma
- Farklı projeksiyonlarda alan, açı ve biçim bozulmasını amaca göre karşılaştırma
- Lejant, yön, koordinat ve kaynak bilgisi eksik haritayı eleştirme

### 5. Atmosfer ve İklim

- Atmosfer katmanlarını olay ve işlevleriyle eşleştirme
- Enlem, yükselti, kara–deniz, akıntı, bakı ve rüzgâr değişkenleriyle sıcaklık karşılaştırması
- Basınç farkından rüzgâr yönü ve temel hava hareketi kurma
- Mutlak nem, bağıl nem ve doyma mantığını nitel/sayısal senaryoyla ayırma
- Konveksiyonel, orografik ve cephe yağışını süreç olarak kurma
- Sıcaklık–yağış grafiğinden yarım küre, mevsim, rejim ve olası iklim yorumu; kesin kent adı uydurmama
- Hava durumu ile iklimi zaman ölçeği ve kanıt türüyle ayırma

### 6. Yerin Şekillenmesi

- Levha sınırı türü seçildiğinde deprem, volkanizma ve yer şekli sonucunu gösteren model
- Kayaç döngüsü ve iç/dış kuvvet ayrımı
- Akarsu, rüzgâr, buzul, dalga/akıntı ve yer altı suları için aşınım–taşınım–birikim zinciri
- Eğim, akım, kayaç ve iklim değişkenlerinden olası yer şekli üretme
- Yer şekli fotoğrafı/kesiti ile oluşum mekanizmasını eşleştirme
- Tehlike, maruziyet, kırılganlık ve afet kavramlarını birbirinden ayırma

### 7. Su, Toprak ve Bitkiler

- Havza, su bölümü, akarsu ağı ve ağız tipini harita/kesit üzerinde kurma
- Akarsu rejimini yağış, sıcaklık, kar erimesi ve yer altı suyu kanıtıyla yorumlama
- Toprak profilinde horizonlar ve oluşum etkenleri; tek etkene indirgememe
- İklim–toprak–bitki ilişkisini aynı bölgesel vaka üzerinde kurma
- Biyom/bitki örtüsünü yalnız sıcaklıkla değil yağış rejimi ve mevsimsellikle birlikte yorumlama
- Su kullanımı ve arazi kararının ekosistem geri etkisini gösterme

### 8. Nüfus

- Aritmetik, fizyolojik ve tarımsal yoğunluğu aynı veri setinde hesaplayıp anlamlarını ayırma
- Nüfus dağılışını doğal ve beşerî etken katmanlarıyla açıklama
- Yaş ve cinsiyet değerleriyle nüfus piramidi oluşturma/karşılaştırma
- Doğum, ölüm ve göç değişince piramit, bağımlılık ve hizmet ihtiyacı sonucunu görme
- Göçte itici–çekici etken, ağ, varış ve çıkış yeri sonuçlarını birlikte inceleme
- Yoğun nüfus ile gelişmişlik arasında otomatik eşitlik kurmama

### 9. Yerleşme

- Su, eğim, zemin, ulaşım, savunma ve ekonomik işlevle kuruluş yeri seçme
- Toplu, dağınık ve çizgisel kırsal yerleşme desenini arazi koşulundan türetme
- Sit ve situasyon ayrımı
- Kent fonksiyonu, ulaşım ağı ve etki alanı ilişkisi
- Hızlı kentleşme senaryosunda konut, ulaşım, su, yeşil alan ve afet riskini dengeleme
- Yerleşme fotoğrafı/haritasından kanıtı aşmayan çıkarım yapma

### 10. Ekonomik Faaliyetler

- Birincil, ikincil, üçüncül ve bilgi yoğun sektörleri değer zincirinde konumlandırma
- Tarım ürünü için iklim, toprak, su, teknoloji, pazar ve ulaşım değişkenleriyle yer seçimi
- Sanayi kuruluş yerinde hammadde, enerji, iş gücü, pazar, sermaye ve ulaşımı tartma
- Ulaşım türünü mesafe, maliyet, hız ve yük niteliğine göre seçme
- Liman–hinterlant, ticaret ağı ve bölgesel gelişme ilişkisi
- Turizm ve enerji kararlarında ekonomik yarar ile taşıma kapasitesi/çevresel etkiyi birlikte gösterme
- “Yenilenebilir = etkisiz” yanılgısını senaryoyla sorgulama

### 11. Afetler ve sürdürülebilirlik transfer alanı

- Tehlike haritası ile nüfus/yapı/maruz kalma katmanını birleştirip risk önceliği belirleme
- Afet öncesi zarar azaltma, hazırlık, müdahale ve iyileştirme adımlarını sıralama
- Kuraklık, sel, heyelan, deprem, orman yangını ve kıyı riski için yerel karar senaryoları
- Arazi kullanımı, su, enerji, atık ve ulaşım seçeneklerini sürdürülebilirlik ölçütleriyle karşılaştırma
- Yerel kararın bölgesel/küresel geri etkisini Coğrafi Mercek ile gösterme

## Her bölgenin pedagojik döngüsü

Her bölge aynı temel öğrenme ritmini izlesin; içerik türüne göre görsel temsil değişsin:

1. **Merak sorusu** — gerçek bir mekânsal problem
2. **Tahmin** — öğrenci ilk kararını verir
3. **Kanıtla oyna** — katman, ölçek, değişken, profil veya veri değişir
4. **Neden?** — sonuç mekanizmayla açıklanır
5. **Karşılaştır** — ikinci bölge/veri türüyle genelleme sınanır
6. **Yanılgı durağı** — yaygı hatalı kural görünür kılınır
7. **Transfer görevi** — yeni harita/grafik/kesitte aynı ilke uygulanır
8. **TYT bağı** — kısa, özgün ve telifsiz soru deseni

Bir bölgenin ilerlemesi yalnızca sayfayı açmakla artmasın. Temel etkileşim gerçekleştirilip kontrol noktası yanıtlandığında kaydedilsin.

## Kavram Pusulası

En az şu yanılgıları hedefle:

- Büyük ölçekli harita daha büyük alan gösterir.
- İzohipslerin sık olduğu yer mutlaka en yüksek yerdir.
- Boylam iklimi, enlem yerel saati belirler.
- Aynı enlemdeki her yerin iklimi aynıdır.
- Yazın Dünya Güneş’e daha yakın olduğu için sıcaktır.
- Sıcak hava her zaman yüksek basınçtır.
- Bağıl nem yüksekse havadaki su buharı miktarı mutlaka fazladır.
- Akarsular haritada aşağı/yön olarak güneye akar.
- Bir yer şeklinin adı fotoğraftan biliniyorsa oluşum süreci de kanıtlanmıştır.
- Nüfus yoğunluğu yüksek yer mutlaka gelişmiştir.
- Kıyıdaki her yerleşme büyük liman kentidir.
- Doğal tehlike tek başına afettir.
- Yenilenebilir enerji çevresel etki oluşturmaz.
- Doğal koşul insan faaliyetini tek başına belirler.

Pusula yalnızca doğru/yanlış listesi olmasın. Hatalı cevabın hangi kanıtı atladığını kaydetsin ve ilgili bölgedeki kısa tekrar etkileşimine bağlasın.

## Harita ve veri sözleşmesi

Mevcut `GEOGRAPHY_NOTES_GOLD_STANDARD.md` kurallarını atlas için de koru. Her öğretici harita noktası en az şu alanları taşısın:

```js
{
  id,
  x,
  y,
  region,
  title,
  summary,
  significance,
  result,
  examTip,
  sourceId,
  scale,
  schematic,
}
```

`x` ve `y` 0–100 normalize koordinatlarıdır ve bileşen güvenli aralığa sıkıştırır. Noktalar JSX içine gömülmez. Aynı anda tek bilgi kartı açık olur. Marker gerçek `button`, en az 44 px hedef, görünür focus, `aria-label` ve `aria-pressed` taşır. Hover bilgiye ulaşmanın tek yolu olamaz.

Her harita/grafik veri seti şunları taşımalıdır:

- kaynak ve erişim tarihi
- ölçek veya zaman aralığı
- birim
- şematikleştirme/genelleştirme notu
- varsa eksik veri veya belirsizlik
- telif/lisans durumu

Şematik harita kesin sınır veya koordinat iddiası üretmemelidir. İklim normali ile tek yılı, korelasyon ile nedeni, tehlike ile afeti, siyasi/idari sınır ile doğal bölgeyi karıştırma. Kanıt yetmiyorsa “kesin olarak belirlenemez” de; veri uydurma.

Tam CBS/zoom gerekmiyorsa mevcut hafif SVG ve yerel TopoJSON yaklaşımını kullan. Projede zaten bulunan `world-atlas` ve `topojson-client` yeterliyse yeni ağır harita bağımlılığı ekleme. MapLibre’ı yalnızca öğrenme hedefi gerçekten serbest yakınlaştırma/katman sorgusu gerektiriyorsa kullan; ağ veya altlık hatasında anlamlı yerel geri dönüş sağla.

## Kapsam manifesti ve veri mimarisi

`src/data/cografya/` altında tek kaynak niteliğinde bir kapsam manifesti oluştur. Her konu ve alt başlık en az şu alanları taşısın:

```js
{
  id,
  baslik,
  konu,
  bolge,
  kapsam,          // tyt | tymm | ortak
  sinif,
  tema,
  kazanim,
  etkilesimId,
  motorId,
  yanilgiIdleri,
  transferGoreviId,
  onKosullar,
  kaynakIdleri,
}
```

Etkileşim registry’si, kapsam manifesti, bölge kartları ve ilerleme sistemi aynı kimlikleri kullanmalıdır. Her alt başlık geçerli bir etkileşime, geri bildirime ve transfer görevine bağlı değilse test başarısız olmalıdır. Manifest aynı zamanda atlas içindeki **Müfredat Kapsamı** ekranını beslesin.

## Teknik mimari

En az şu yapıyı kur; proje incelemesi daha iyi bir adlandırma gösterirse uyarlayabilirsin:

```text
src/pages/CografyaAtlasi.jsx
src/styles/cografya-atlasi.css
src/components/cografya/AtlasHaritasi.jsx
src/components/cografya/CografiMercek.jsx
src/components/cografya/MufredatKapsami.jsx
src/components/cografya/ortak/**
src/components/cografya/bolgeler/**
src/data/cografya/bolgeler.js
src/data/cografya/kapsam.js
src/data/cografya/yanilgilar.js
src/data/cografya/kaynaklar.js
src/data/cografya/vakalar/**
src/lib/cografya/ilerleme.js
src/lib/cografya/koordinat.js
src/lib/cografya/olcek.js
src/lib/cografya/izohips.js
src/lib/cografya/iklim.js
src/lib/cografya/nufus.js
scripts/test-cografya-atlasi.mjs
```

Kurallar:

- Atlas sayfasını `src/App.jsx` içinde lazy-load et.
- Bölge modüllerini Fizik Atlasındaki gibi ayrı paketlere böl.
- `src/pages/LibraryGateway.jsx` içine aynı ürün ailesinde bir Coğrafya Atlası kartı ekle.
- `package.json` içine `test:cografya` komutu ekle.
- Coğrafya CSS’ini `.cografya-atlasi` kökü altında kapsülle; global stilleri bozma.
- Ortak UI: `CografyaModulKabugu`, `KatmanliHarita`, `VeriOkumaGorevi`, `NedenKutusu`, `Karsilastirma`, `KontrolNoktasi`, `IlerlemeCubugu`, `KaynakNotu` gibi az sayıda gerçek reusable primitive kullan.
- Tek bir dev bölge bileşeni veya her konu için kopyalanmış aynı kontrol dizisi oluşturma.
- Hesap, veri dönüşümü ve simülasyon mantığı JSX içinde dağılmasın; saf motorlara taşınsın.
- Mevcut coğrafya ders görsellerini ve veri dilini yeniden kullan; fakat ders okuma sistemiyle sıkı CSS bağı oluşturma. Aynı hotspot motorunu kopyalamak yerine güvenliyse ortaklaştır veya atlas için ince bir adapter yaz.
- Yeni görsel gerektiğinde önce kod tabanlı SVG/canvas, mevcut yerel varlık ve veri odaklı çözümü tercih et. Görsel içine uzun metin gömme.
- Tarayıcı depolaması kapalı/bozuksa atlas çökmemeli.
- Geliştirme için sahte tamamlanma veya `TODO` kartını nihai ürün gibi bırakma.

## İlerleme ve ölçme

- İlk girişte isteğe bağlı, 5–6 görevli kısa tanılama sun. Sonuç yalnız puan değil, konu/kanıt türü başlangıç profili üretsin.
- Her bölgede en az bir tahmin sorusu, bir ana etkileşim, bir yanılgı durağı ve bir transfer görevi olsun.
- TYT Kampında harita, grafik, tablo, kesit ve kısa vaka soruları dengeli olsun.
- Sorular ÖSYM metnini kopyalamasın; özgün ve telifsiz olsun.
- Hata defteri yalnız yanlış seçeneği değil, atlanan kanıtı veya kurulan hatalı genellemeyi kaydetsin.
- Tekrar önerisi, son ziyaret yerine kanıtlanan eksik kavrama dayansın.
- İlerlemeyi sıfırlama onaylı, erişilebilir ve yalnızca Coğrafya Atlası anahtarlarını temizleyen bir işlem olsun.

## Görsel tasarım ve erişilebilirlik

Atlas; Tarih, Fizik ve Kimya Atlaslarıyla akraba ama kendine özgü olmalı. Ana görsel dil **topografik kâğıt + katmanlı veri + doğal sistem tonları** olabilir. Yeni renk sistemi yaratırken proje tasarım tokenlarıyla uyumlu kal; doygun renkleri işlevsel katman/uyarı için kullan.

- Bilgi kartları ve kontrol alanları haritayla yarışmasın.
- Masaüstünde harita + yan bilgi paneli; dar ekranda harita + alt kart düzenine in.
- Harita marker’larına ek olarak mobilde yatay kaydırılabilir nokta adları sun.
- Karşılaştırmalar iki sütundan tek sütuna düşsün.
- Mobilde yatay taşma, kırık lejant, okunmayacak küçük harita yazısı ve hover-only bilgi olmasın.
- Tüm kontroller klavye ile çalışsın; anlamlı focus sırası ve görünür focus stili olsun.
- Renk tek bilgi taşıyıcı olmasın; desen, etiket, simge veya metinle destekle.
- Grafiklerde eksen adı, birim, lejant ve erişilebilir metin özeti bulunsun.
- Hareket yalnızca öğrenmeye hizmet etsin; `prefers-reduced-motion` ile kapanabilsin.
- Açık ve koyu temada harita, çizgi, metin ve seçili durum kontrastını kontrol et.

## Bilimsel doğruluk sınırları

- Coğrafi determinizm kurma; doğal koşulu olanak/sınır, insan kararını teknoloji–ekonomi–kültür–politika bağlamında ele al.
- Tek nedenli açıklamayı ancak gerçekten doğruysa kullan.
- Aynı enlem, kıyı, yükselti veya nüfus yoğunluğundan gereğinden fazla sonuç çıkarma.
- Güncel istatistik kullanıyorsan yıl ve kaynak belirt; zamanla değişen sayıyı sabit gerçek gibi gömme.
- Ülke/bölge sınırları, tartışmalı alanlar ve adlandırmalarda tarafsız kaynak notu kullan.
- Şematik kesitte mesafe, yükseklik ve açı oranlarının gerçek ölçek olmadığını belirt.
- Ortalama iklim değeri ile anlık hava olayını, risk ile gerçekleşmiş afet kaybını ayır.
- Basitleştirilmiş modelin varsayımını arayüzde kısa ve anlaşılır yaz.

## Test ve doğrulama

`scripts/test-cografya-atlasi.mjs` yalnızca dosya veya anahtar kelime varlığını kontrol etmesin. En az şunları davranışsal/veri düzeyinde doğrulasın:

### Saf motor testleri

- Boylam farkı × 4 dakika ve doğu/batı yönü
- Harita uzunluğu ↔ gerçek uzunluk ölçek dönüşümleri
- Ölçek paydası–alan–ayrıntı ilişkisi
- İzohips aralığı, yükselti, eğim ve profil noktalarının deterministik sonucu
- İklim grafiği için yıllık toplam/ortalama ve yarım küre desenleri
- Aritmetik, fizyolojik ve tarımsal nüfus yoğunluğu
- Geçersiz, eksik, sıfıra bölen veya fiziksel olarak anlamsız girdilerin güvenli reddi

### Veri ve kapsam testleri

- 10 TYT konusunun proje içi sırayla eksiksiz bulunması
- Her alt başlığın geçerli `etkilesimId`, geri bildirim, transfer görevi ve kaynak bağı taşıması
- Harita noktalarının tam veri sözleşmesine ve 0–100 koordinat aralığına uyması
- Etkileşim registry’si ile manifest kimliklerinin birebir tutarlı olması
- İlerleme yüzdesinin sayfa açılmasıyla değil tamamlanma olayıyla artması
- Yalnız atlasın kendi depolama anahtarlarını temizleyen sıfırlama davranışı

### Tarayıcı QA

Atlası gerçek tarayıcıda en az şu durumlarda aç ve kullan:

- Keşif haritası
- Coğrafi Mercek
- Gezegen Saati
- Konum Laboratuvarı
- İzohips/profil alanı
- İklim grafiği laboratuvarı
- Yerküre Dinamikleri
- Nüfus piramidi
- Yerleşme karar alanı
- Ekonomik kuruluş yeri senaryosu
- Afet risk katmanı
- Kavram Pusulası ve TYT Kampı

Masaüstü ve yaklaşık 390 px mobil genişlikte kontrol et. URL ile derin bağlantı, geri/ileri, klavye kullanımı, tema, ilerleme kaydı, sıfırlama onayı, yükleme/hata durumu ve yatay taşmayı dene.

Son olarak şunları çalıştır:

```bash
npm run test:cografya
npm run test:lesson-content
npm run build
```

Değiştirdiğin ortak yapılar başka atlasları etkiliyorsa ilgili mevcut atlas testlerini de çalıştır. Test veya tarayıcı kontrolü çalıştırılamıyorsa bunu gizleme; nedenini ve en iyi alternatif kontrolü teslim mesajında belirt.

## Çalışma biçimi ve durma kuralları

- Önce kısa bir kullanıcı güncellemesi ver; sonra gerekli dosyaları incele ve uygulamaya geç.
- Bağımsız okumaları ve testleri güvenliyse paralel yürüt; birbirine bağlı kararları sıralı yap.
- Küçük, geri döndürülebilir ve kapsam içi yerel değişiklikler için onay bekleme.
- Haricî yazma, satın alma, yıkıcı işlem veya maddi kapsam genişlemesi için onay iste.
- Bir pilot yapıp durma. Ortak mimariyi kurduktan sonra 10 TYT konusunu ve zorunlu transfer alanlarını tamamla.
- Görsel cilayı, içerik ve gerçek etkileşim tamamlanmadan “bitti” sayma.
- Bir sonuçtan sonra temel istek gerekli kanıtla karşılanabiliyorsa gereksiz araştırma döngüsü açma; eksik zorunlu bilgi varsa en küçük anlamlı geri dönüşü kullan.

## Kesin tamamlanma tanımı

Görevi ancak aşağıdakilerin tamamı olduğunda bitmiş say:

1. Coğrafya Atlası route’u ve Kütüphane kartı çalışıyor.
2. 10 TYT konusu keşif haritasında ve müfredat ekranında eksiksiz.
3. Her alt başlık kapsam manifestinde gerçek etkileşime bağlı.
4. Coğrafi Mercek ölçek, katman ve kanıt türü değişimini gerçekten gösteriyor.
5. En az zorunlu harita, profil, iklim grafiği, nüfus piramidi, karar senaryosu ve risk katmanı çalışıyor.
6. İlerleme, Kavram Pusulası, hata defteri ve TYT Kampı davranışsal olarak çalışıyor.
7. Kaynak, ölçek, birim, şematiklik ve belirsizlik notları veri sözleşmesinde mevcut.
8. Masaüstü, mobil, klavye, tema ve azaltılmış hareket kontrolleri yapıldı.
9. `npm run test:cografya`, `npm run test:lesson-content` ve `npm run build` geçti.
10. Kullanıcının ilgisiz mevcut değişiklikleri korunuyor.

## Teslim mesajı

Son mesajda sonucu önce söyle ve kısaca şunları ver:

- Oluşturulan atlasın ana deneyimi
- Tarih, Fizik ve Kimya Atlaslarından alınıp coğrafyaya dönüştürülen desenler
- Eklenen ana dosya ve modüller
- Tamamlanan müfredat/etkileşim kapsamı
- Çalıştırılan testler ve tarayıcı kontrolleri
- Varsa kalan gerçek sınırlama; genel “daha da geliştirilebilir” cümlesi değil, somut sınırlama

Plan veya ekran görüntüsüyle yetinme; çalışan, doğrulanmış ve projeye entegre edilmiş **TYT Coğrafya Atlasını** teslim et.
