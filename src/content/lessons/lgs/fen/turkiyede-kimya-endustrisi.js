import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 6. ders (ünitenin son dersi)
 * Kazanım : F.8.4.6.1 · F.8.4.6.2
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.4.6.1 → a) Resmî/özel kurum ve sivil toplum kuruluşlarının
 *                  çalışmalarına değinilir.
 *               b) İthal ve ihraç edilen kimyasal ürünlerden birkaç önemli
 *                  örnek verilerek işleyişe değinilir.
 *   F.8.4.6.2 → açıklama yok; kazanımın fiili "araştırır ve öneriler sunar".
 *
 * DOĞRULUK KARARI
 * Kurum kuruluş yılları yalnız kurumların resmî tarihçelerinde ve
 * akademik kaynaklarda doğrulananlardan seçildi (bkz. LGS_KAYNAK_KAYDI.md,
 * doğrulama günlüğü). Yıldan yıla değişen ithalat/ihracat tutarları,
 * sıralamalar ve yüzdeler BİLİNÇLİ OLARAK yazılmadı: ders notu güncelliğini
 * yitirir ve öğrenciye yanlış sayı ezberletir. Bunun yerine öğrenciye
 * güncel veriyi resmî kaynaktan kendisinin bulmasını öğreten bir araştırma
 * yöntemi verildi — kazanımın fiili zaten "araştırır"dır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-turkiyede-kimya-endustrisi',
  topic: 'Madde ve Endüstri',
  order: 6,
  title: 'Türkiye’de Kimya Endüstrisi: Hammaddeden Mesleğe',
  subtitle:
    'Mutfaktaki deterjandan arabanın lastiğine kadar her şey bir kimya zincirinin ürünü. Bu zincirin Türkiye’deki hikâyesi ve içindeki meslekler.',
  minutes: 40,
  kazanimlar: ['F.8.4.6.1', 'F.8.4.6.2'],
  kapsamNotu:
    'Yıldan yıla değişen ithalat ve ihracat tutarları, sıralamalar ve yüzdeler bu notta verilmez; güncel veriye resmî kaynaklardan ulaşmanın yolu öğretilir.',
  prerequisites: [
    { topic: 'Fiziksel ve Kimyasal Değişim: Kimlik Değişti mi?', why: 'Kimya endüstrisinin temel işi, maddeleri kimyasal tepkimelerle yeni ürünlere dönüştürmektir.' },
    { topic: 'Asitler ve Bazlar: Özellik, Ayraç, pH ve Güvenlik', why: 'Temizlik ürünleri ve gübreler gibi birçok endüstriyel ürün bu maddelere dayanır.' },
  ],
  outcomes: [
    'Kimya endüstrisinin ne yaptığını hammadde–işleme–ürün zinciriyle açıklayabileceksin.',
    'Türkiye’de kimya endüstrisinin gelişimine katkı sağlayan kurumlardan örnekler verebileceksin.',
    'İthal ve ihraç edilen kimyasal ürünlere örnekler verip işleyişi açıklayabileceksin.',
    'Güvenilir kaynaklardan araştırma yapmanın adımlarını uygulayabileceksin.',
    'Kimya temelli meslekleri tanıyıp gelecekteki meslek alanları için öneri sunabileceksin.',
  ],

  opening: {
    title: 'Bir sabahın kimya haritası',
    lead: 'Sabah uyandığından okula varana kadar dokunduğun şeylerin kaç tanesi bir kimya fabrikasından geçti?',
    body: `Sabah uyanıyorsun. Diş macununla dişini fırçalıyorsun. Sabunla yüzünü yıkıyorsun. Plastik bir bardaktan su içiyorsun. Okula giderken otobüsün lastikleri asfalta değiyor; otobüs dizel yakıtla çalışıyor. Sınıfta boyalı bir sırada oturuyorsun.

Diş macunu, sabun, plastik, lastik, yakıt, boya… Bunların hepsinin ortak bir yanı var: hepsi bir **kimya endüstrisinin** ürünü.

**Kimya endüstrisi**, doğadan elde edilen hammaddeleri fiziksel ve kimyasal işlemlerle **insanların kullanabileceği ürünlere** dönüştüren sanayi koludur. Ham petrolden yakıt ve plastik, madenden cam ve gübre, bitkilerden ilaç ve boya üretmek bu endüstrinin işidir.

Bu derste iki soru soracağız.

**Birinci soru — Türkiye’de bu endüstri nasıl gelişti?** Bir ülkenin kimya endüstrisi bir günde kurulmaz. Madenlerini araştıran kurumlar, fabrika kuran kuruluşlar, bilimsel araştırmayı destekleyen kurumlar ve sektörün sesini duyuran dernekler bu gelişimin parçasıdır.

**İkinci soru — Bu endüstride kimler çalışır, gelecekte kimler çalışacak?** Kimya yalnız laboratuvarda beyaz önlüklü birinin işi değildir; mühendisten eczacıya, teknikerden kalite uzmanına pek çok meslek bu zincirin içindedir.

Bu konunun kazanımlarının fiiline dikkat et: **araştırır** ve **öneriler sunar.** Yani bu ders sana ezberlenecek bir liste vermekten çok, **nasıl araştıracağını** ve **nasıl gerekçeli öneri sunacağını** öğretecek.

Bir kapsam notu: yıldan yıla değişen ithalat ve ihracat tutarlarını bu derste vermiyoruz. Bu sayılar bir yıl sonra eskir; ezberlemen de gerekmez. Onların yerine, güncel veriyi **resmî kaynaktan kendin bulmayı** öğreneceksin.`,
  },

  concepts: [
    {
      term: 'Kimya endüstrisi',
      body: 'Doğadan elde edilen hammaddeleri fiziksel ve kimyasal işlemlerle kullanılabilir ürünlere dönüştüren sanayi koludur.',
    },
    {
      term: 'Hammadde',
      body: 'Üretimde kullanılmak üzere doğadan elde edilen, henüz işlenmemiş maddedir: ham petrol, doğal gaz, madenler, tuz, bitkisel ürünler gibi.',
    },
    {
      term: 'Petrokimya',
      body: 'Petrol ve doğal gazdan elde edilen maddelerden plastik, sentetik lif, lastik gibi ürünlerin üretildiği kimya endüstrisi dalıdır.',
    },
    {
      term: 'İthalat',
      body: 'Bir ülkenin başka ülkelerden ürün ya da hammadde satın almasıdır. Ülkede yeterince bulunmayan ya da üretilmeyen maddeler ithal edilir.',
    },
    {
      term: 'İhracat',
      body: 'Bir ülkenin ürettiği ürünleri başka ülkelere satmasıdır. İhracat ülke ekonomisine döviz kazandırır.',
    },
    {
      term: 'Katma değer',
      body: 'Bir hammaddenin işlenerek daha değerli bir ürüne dönüşmesiyle kazandığı ek değerdir. Hammaddeyi işlemeden satmak yerine işleyip ürün olarak satmak daha çok katma değer yaratır.',
    },
    {
      term: 'Sivil toplum kuruluşu',
      body: 'Devlete bağlı olmayan, belirli bir amaç için bir araya gelen kişi ya da kurumların oluşturduğu dernek, vakıf, birlik gibi kuruluşlardır.',
    },
  ],

  why: {
    question: 'Bir ülke neden hem ithalat hem ihracat yapar?',
    body: `İlk bakışta tuhaf görünebilir: Türkiye kimya alanında hem dışarıdan ürün alıyor hem dışarıya ürün satıyor. Neden hepsini kendisi üretmiyor ya da neden aldığını satmıyor?

Cevap, **hammadde ile ürün** arasındaki farkta saklı.

Bir ülkenin topraklarında her hammadde bulunmaz. Türkiye örneğin **ham petrol ve doğal gaz** bakımından kendi ihtiyacını karşılayamaz; bu yüzden bunların büyük bölümünü ithal eder. Oysa bu maddeler yalnız yakıt değildir; aynı zamanda plastiklerin ve pek çok kimyasal ürünün hammaddesidir.

Öte yandan Türkiye’nin güçlü olduğu alanlar vardır. Türkiye **dünyanın en büyük bor rezervlerine** sahip ülkedir. Ayrıca cam, boya, deterjan, plastik ürünler, gübre gibi alanlarda gelişmiş bir üretim altyapısına sahiptir.

Şimdi işleyişi kuralım:

1. Ülkede yeterince bulunmayan **hammaddeler ithal edilir.**
2. Bu hammaddeler ülkedeki fabrikalarda **işlenir** ve yeni ürünlere dönüştürülür.
3. Üretilen ürünlerin bir kısmı ülke içinde kullanılır, bir kısmı **ihraç edilir.**

Bu zincirin en önemli kavramı **katma değerdir.** Bir hammaddeyi işlemeden satmak, onu işleyip ürün olarak satmaktan çok daha az kazandırır. Bu yüzden ülkeler hammaddelerini mümkün olduğunca **kendi fabrikalarında işlemeye** çalışır.

Bor iyi bir örnektir. Bor madeni ham hâliyle satılabilir; ama işlenerek temizlik ürünlerinde, camda, seramikte, tarımda ve ileri teknoloji ürünlerinde kullanılan maddelere dönüştürüldüğünde çok daha değerli hâle gelir.

Bu yüzden kimya endüstrisi yalnız bir sanayi kolu değildir; bir ülkenin **hammaddelerini ne kadar iyi değerlendirdiğinin** göstergesidir.

*Kapsam notu: hangi ürünün ne kadar ithal ya da ihraç edildiği yıldan yıla değişir; bu yüzden burada tutar ve sıralama vermiyoruz. Bir sonraki bölümlerde güncel veriyi nereden bulacağını göreceksin.*`,
  },

  mechanism: {
    title: 'Bir kimyasal ürün nasıl ortaya çıkar?',
    lead: 'Hammaddeden rafa uzanan zinciri adım adım izleyelim. Programın istediği “işleyiş” tam olarak budur.',
    intro:
      'Aşağıdaki zincir, bir kimyasal ürünün hammaddeden tüketiciye ulaşana kadar geçtiği aşamaları gösterir.',
    steps: [
      {
        title: '1. Hammadde araştırılır ve bulunur',
        body: 'Madenler, petrol ve doğal gaz yatakları gibi kaynaklar araştırılır. Ülkede bulunmayan hammaddeler için ithalat yoluna gidilir.',
      },
      {
        title: '2. Hammadde çıkarılır ya da ithal edilir',
        body: 'Ülkede bulunan kaynaklar işletilir; bulunmayanlar başka ülkelerden satın alınır.',
      },
      {
        title: '3. Hammadde işlenir',
        body: 'Fabrikalarda fiziksel işlemler (ayırma, saflaştırma, karıştırma) ve kimyasal tepkimelerle hammadde yeni maddelere dönüştürülür.',
      },
      {
        title: '4. Ürün denetlenir',
        body: 'Üretilen ürünün kalitesi ve güvenliği laboratuvarlarda kontrol edilir; insan sağlığına ve çevreye zarar vermediği doğrulanır.',
      },
      {
        title: '5. Ürün pazara ulaşır',
        body: 'Ürün iç pazarda satılır ya da ihraç edilir. İhracat ülkeye döviz kazandırır.',
      },
      {
        title: '6. Atıklar yönetilir',
        body: 'Üretim sırasında ortaya çıkan atıklar arıtılır, geri kazanılır ya da güvenli biçimde bertaraf edilir. Çevreye duyarlı üretim zincirin son ama vazgeçilmez halkasıdır.',
      },
    ],
    takeaway:
      'Zincirin kalbi 3. adımdır: katma değer hammaddenin işlendiği yerde oluşur.',
  },

  causeEffect: {
    title: 'Hammadde eksikliğinden ihracata',
    intro: 'Türkiye kimya endüstrisinin işleyişini tek bir neden–sonuç zincirinde okuyalım.',
    steps: [
      { title: 'Sebep', body: 'Petrol ve doğal gaz gibi bazı hammaddeler ülkede ihtiyacı karşılayacak kadar bulunmaz.' },
      { title: 'Gelişme', body: 'Bu hammaddeler ithal edilir ve ülkedeki rafineri, petrokimya ve kimya fabrikalarında işlenir.' },
      { title: 'Sonuç', body: 'Plastik ürünler, boyalar, temizlik ürünleri gibi katma değeri yüksek ürünler üretilir; bir kısmı ihraç edilir.' },
      { title: 'Sonraki etki', body: 'Ülke hem kendi ihtiyacını karşılar hem döviz kazanır; hammaddeyi işleme kapasitesi arttıkça dışa bağımlılık azalır.' },
    ],
    inference:
      'İthalat ile ihracat birbirinin karşıtı değil, aynı zincirin iki ucudur: hammadde girer, işlenmiş ürün çıkar.',
  },

  comparison: {
    title: 'İthal ve ihraç edilen kimyasal ürünlerden örnekler',
    columns: ['İthal edilenlere örnekler', 'İhraç edilenlere örnekler'],
    rows: [
      { label: 'Enerji ve hammadde', values: ['Ham petrol, doğal gaz', 'İşlenmiş bor ürünleri'] },
      { label: 'Plastik', values: ['Plastik hammaddelerinin önemli bir kısmı', 'Plastikten üretilmiş ürünler'] },
      { label: 'Sağlık', values: ['Bazı ilaç etken maddeleri', 'İlaçlar'] },
      { label: 'Ev ve kişisel bakım', values: ['—', 'Deterjan, sabun, kozmetik ürünleri'] },
      { label: 'Yapı ve tarım', values: ['—', 'Boya, cam ürünleri, gübre'] },
      { label: 'Genel eğilim', values: ['Hammadde ve ara ürün ağırlıklı', 'İşlenmiş ürün ağırlıklı'] },
    ],
    insight:
      'Son satır işleyişi özetler: dışarıdan çoğunlukla hammadde ve ara ürün girer, dışarıya çoğunlukla işlenmiş ürün çıkar. Tutarlar yıldan yıla değiştiği için burada verilmemiştir.',
  },

  traps: [
    {
      title: 'Kimya endüstrisini yalnız laboratuvar işi sanmak',
      wrong: 'Kimya endüstrisi, laboratuvarda deney yapan kimyagerlerden ibarettir.',
      right: 'Kimya endüstrisi madenden fabrikaya, kalite kontrolden satışa kadar uzanan bir **zincirdir** ve bu zincirde çok sayıda farklı meslek çalışır.',
      body: 'Mühendis, tekniker, eczacı, kalite uzmanı, iş güvenliği uzmanı, çevre mühendisi… Hepsi aynı zincirin farklı halkalarında çalışır.',
    },
    {
      title: 'İthalatı her zaman olumsuz saymak',
      wrong: 'Bir ülke ithalat yapıyorsa kendi kendine yetemiyor demektir; bu her zaman kötüdür.',
      right: 'Ülkede bulunmayan bir hammaddeyi ithal edip **işleyerek** daha değerli bir ürüne dönüştürmek ve ihraç etmek ekonomiye katkı sağlar.',
      body: 'Önemli olan ithal edilen maddenin nasıl kullanıldığıdır. Hammadde ithal edip katma değerli ürün ihraç etmek güçlü bir sanayi göstergesidir.',
    },
    {
      title: 'Güncel sayıları ders notundan ezberlemek',
      wrong: 'Bir ürünün ithalat ya da ihracat tutarını bir kez ezberlersem her zaman doğru olur.',
      right: 'Bu tutarlar **her yıl değişir.** Güncel bilgiye resmî kurumların yayımladığı verilerden ulaşılır.',
      body: 'Kazanımın fiili “araştırır”dır. Bu yüzden asıl beceri, güvenilir kaynağı bulmak ve veriyi doğru okumaktır.',
    },
    {
      title: 'Kimya endüstrisini yalnız çevreye zarar veren bir alan sanmak',
      wrong: 'Kimya fabrikaları yalnız kirlilik üretir.',
      right: 'Kimya endüstrisi atık arıtma, geri dönüşüm, su arıtma ve temiz enerji malzemeleri gibi alanlarda **çevrenin korunmasına da** katkı sağlar.',
      body: 'Sorunu tek yönlü değerlendirmek yerine iki yönü birlikte düşün: kontrolsüz üretim çevreye zarar verir; bilinçli ve denetimli üretim çevre sorunlarının çözümünün bir parçasıdır.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-kimya-endustri-tarih',
      title: 'Geçmişten günümüze: kurumlar ve kilometre taşları',
      lead: 'Programın açıklaması, gelişime katkı sağlayan resmî ve özel kurumlarla sivil toplum kuruluşlarının çalışmalarına değinilmesini ister.',
      blocks: [
        {
          id: 'lgs-fen-kimya-endustri-tarih-anlatim',
          type: 'prose',
          body: `Cumhuriyetin ilk yıllarında Türkiye’nin sanayisi oldukça sınırlıydı. Kimya endüstrisinin gelişimi, **devletin öncülüğünde** kurulan kurumlarla başladı ve zamanla özel sektör ile sivil toplum kuruluşlarının katkısıyla büyüdü.

Bu gelişimi üç grupta düşünebilirsin:

**1. Hammaddeyi araştıran ve işleten kurumlar.** Bir kimya endüstrisi kurabilmek için önce ülkenin hangi hammaddelere sahip olduğunu bilmek gerekir. **Maden Tetkik ve Arama (MTA)** bu amaçla kuruldu; madenlerin ve yer altı kaynaklarının araştırılmasını üstlendi. **Etibank** ise maden işletmeciliğini üstlendi; bugün bor gibi önemli madenlerin işletilmesi **Eti Maden** tarafından yürütülür.

**2. Fabrika kuran ve üretim yapan kuruluşlar.** **Sümerbank** dokuma, kâğıt ve benzeri alanlarda fabrikalar kurdu. **Makine ve Kimya Endüstrisi (MKE)** makine ve kimya üretimini bir araya getirdi. Petrol alanında **Türkiye Petrolleri Anonim Ortaklığı (TPAO)** petrol arama ve üretimini üstlendi; ilk büyük rafinerilerden biri olan **İzmit Rafinerisi** hizmete girdi. **PETKİM** ile Türkiye petrokimya üretimine başladı; rafineriler daha sonra **TÜPRAŞ** çatısı altında toplandı. Özel sektörde de cam, boya, ilaç, deterjan gibi alanlarda büyük üretim tesisleri kuruldu.

**3. Bilimi ve sektörü destekleyen kurumlar.** **TÜBİTAK**, bilimsel ve teknolojik araştırmaları destekleyen kurum olarak kuruldu; kimya ve malzeme alanındaki araştırmalar da bu desteğin parçasıdır. Üniversitelerin kimya ve kimya mühendisliği bölümleri bu endüstrinin ihtiyaç duyduğu uzmanları yetiştirir. **Sivil toplum kuruluşları** tarafında ise kimya sanayicilerini ve kimya ihracatçılarını bir araya getiren dernek ve birlikler ile kimyacıların meslek dernekleri, sektörün gelişmesi, eğitim ve standartlar konusunda çalışmalar yürütür.

Aşağıdaki kronoloji, bu kurumların kuruluş yıllarını gösterir. Yılları ezberlemen gerekmez; asıl görmen gereken şey **sıradır:** önce hammaddeyi araştıran kurumlar, sonra üretim yapan kuruluşlar, sonra petrokimya ve ileri üretim.`,
        },
        {
          id: 'lgs-fen-kimya-endustri-tarih-kronoloji',
          type: 'timeline',
          title: 'Türkiye kimya endüstrisinde kilometre taşları',
          intro: 'Kuruluş yılları kurumların resmî tarihçelerinden ve akademik kaynaklardan doğrulanmıştır.',
          items: [
            { title: '1933 — Sümerbank', body: 'Dokuma, kâğıt gibi alanlarda fabrikalar kuran devlet kuruluşu.' },
            { title: '1935 — MTA', body: 'Maden ve yer altı kaynaklarının araştırılması için kuruldu.' },
            { title: '1935 — Etibank', body: 'Maden işletmeciliğini üstlendi; bugünkü Eti Maden’in kökenidir.' },
            { title: '1950 — Makine ve Kimya Endüstrisi (MKE)', body: 'Makine ve kimya üretimini tek çatı altında topladı.' },
            { title: '1954 — TPAO', body: 'Petrol arama ve üretimini üstlendi.' },
            { title: '1961 — İzmit Rafinerisi', body: 'Ham petrolü işleyen büyük rafinerilerden biri olarak hizmete girdi.' },
            { title: '1963 — TÜBİTAK', body: 'Bilimsel ve teknolojik araştırmaları desteklemek için kuruldu.' },
            { title: '1965 — PETKİM', body: 'Türkiye’nin petrokimya üretimine başlaması.' },
            { title: '1983 — TÜPRAŞ', body: 'Rafineriler tek bir kuruluş çatısı altında toplandı.' },
          ],
          takeaway:
            'Sıraya dikkat: önce kaynakları tanıyan kurumlar, sonra işleyen kuruluşlar, sonra ileri üretim. Bir endüstri böyle katman katman kurulur.',
        },
        {
          id: 'lgs-fen-kimya-endustri-tarih-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Bu konuda sorular genellikle kurum adını ve yılını değil, kurumun **ne iş yaptığını** sorar: “Madenlerin araştırılmasından sorumlu kurum hangisidir?” gibi. Kurumları görevleriyle eşleştirmek, yıl ezberlemekten çok daha işe yarar.',
        },
      ],
    },

    {
      id: 'lgs-fen-kimya-endustri-arastirma',
      title: 'Nasıl araştırırsın? Güncel veriye güvenilir yoldan ulaşmak',
      lead: 'Kazanımın fiili “araştırır”. Bu bölüm sana bir araştırmanın adımlarını ve güvenilir kaynağı nasıl seçeceğini öğretir.',
      blocks: [
        {
          id: 'lgs-fen-kimya-endustri-arastirma-anlatim',
          type: 'prose',
          body: `Bu konudaki bilgilerin önemli bir kısmı **zamanla değişir**: hangi ürünün ne kadar ihraç edildiği, hangi yeni tesisin kurulduğu, hangi alanda yatırım yapıldığı… Bu yüzden kazanım senden bilgiyi ezberlemeni değil, **araştırmanı** ister.

İyi bir araştırmanın ilk kuralı **kaynağı doğru seçmektir.** Türkçe dersinde öğrendiğin ölçütler burada da geçerlidir: blog ve kişisel sayfalardaki bilgilere dikkatli yaklaş; resmî kurumların (gov.tr uzantılı) ve üniversitelerin (edu.tr uzantılı) yayımladığı verilere öncelik ver.

Bu konuda başvurabileceğin kaynak türleri:

- **Resmî istatistik kurumları:** dış ticaret verileri resmî istatistik kurumu tarafından yayımlanır.
- **İlgili bakanlıklar:** sanayi, ticaret ve enerji alanındaki bakanlıkların yayımladığı raporlar.
- **Kurumların kendi siteleri:** MTA, Eti Maden, TÜBİTAK gibi kurumların resmî tarihçeleri ve faaliyet raporları.
- **Sektör birlikleri:** ihracatçı birliklerinin yayımladığı sektör raporları.

İkinci kural **veriyi doğru okumaktır.** Bir sayıyı not ederken üç şeyi mutlaka yaz: **hangi yıla ait olduğunu, hangi birimle verildiğini ve kaynağını.** Tarihi ve kaynağı olmayan bir sayı araştırma sonucu sayılmaz.

Üçüncü kural **sonucu karşılaştırarak sınamaktır.** Önemli bir bilgiyi en az iki farklı güvenilir kaynakta doğrula. İki kaynak farklı sayı veriyorsa, hangisinin daha güncel ve daha resmî olduğuna bak.

Bu üç kural yalnız bu konu için değil, bütün araştırmaların için geçerlidir. Fen dersinde bir deneyde “kontrol edilen değişkenleri” nasıl sabit tutuyorsan, araştırmada da kaynağını ve tarihini öyle sabitlersin.`,
        },
        {
          id: 'lgs-fen-kimya-endustri-arastirma-surec',
          type: 'process',
          title: 'Beş adımda bir araştırma',
          intro: 'Örnek soru: “Türkiye’nin ihraç ettiği kimyasal ürünlerden üç örnek nedir ve hangi ülkelere satılır?”',
          steps: [
            { title: '1. Soruyu netleştir', body: 'Neyi arıyorsun? Ürün adı mı, miktar mı, ülke mi? Soruyu tek cümleyle yaz.' },
            { title: '2. Güvenilir kaynağı seç', body: 'Resmî kurumların, bakanlıkların ve sektör birliklerinin yayımladığı verilere öncelik ver.' },
            { title: '3. Veriyi kaydet', body: 'Her bilgiyi yılı, birimi ve kaynağıyla birlikte not et.' },
            { title: '4. İkinci kaynakla doğrula', body: 'Önemli bilgileri en az bir başka güvenilir kaynakta kontrol et.' },
            { title: '5. Sonucu sun', body: 'Bulduklarını kaynaklarıyla birlikte, kısa ve düzenli bir biçimde yaz. Kaynaksız bilgi ekleme.' },
          ],
        },
        {
          id: 'lgs-fen-kimya-endustri-arastirma-tuzak',
          type: 'trap',
          title: 'Tarihi ve kaynağı olmayan sayıyı kullanmak',
          wrong: 'İnternette bir sayı buldum; ödevime yazdım.',
          right: 'Bir sayıyı kullanmadan önce **hangi yıla ait olduğunu, birimini ve kaynağını** bilmelisin. Bunlardan biri eksikse o sayı güvenilir bir araştırma sonucu değildir.',
          body: 'Özellikle dış ticaret verileri her yıl değişir. Beş yıl önceki bir sayı bugünü anlatmaz.',
        },
      ],
    },

    {
      id: 'lgs-fen-kimya-endustri-meslek',
      title: 'Kimya temelli meslekler ve geleceğin meslekleri',
      lead: 'Kazanım F.8.4.6.2 meslek dallarının araştırılmasını ve gelecekteki yeni meslek alanları hakkında öneri sunulmasını ister.',
      blocks: [
        {
          id: 'lgs-fen-kimya-endustri-meslek-anlatim',
          type: 'prose',
          body: `Kimya endüstrisinin zincirini hatırla: hammadde, işleme, denetim, pazar, atık yönetimi. Her halkada farklı meslekler çalışır.

**Hammadde halkasında:** maden mühendisleri, jeoloji mühendisleri, petrol ve doğal gaz mühendisleri kaynakları araştırır ve işletir.

**İşleme halkasında:** kimya mühendisleri üretim süreçlerini tasarlar ve yönetir; kimyagerler yeni maddeler geliştirir; kimya teknikerleri ve teknisyenleri üretimi yürütür. Gıda, ilaç ve kozmetik üretiminde gıda mühendisleri ve eczacılar çalışır. Malzeme alanında metalurji ve malzeme mühendisleri görev alır.

**Denetim halkasında:** kalite kontrol uzmanları ve laborantlar ürünlerin standartlara uygunluğunu test eder. İş sağlığı ve güvenliği uzmanları çalışanların güvenliğini sağlar.

**Atık halkasında:** çevre mühendisleri atıkların arıtılmasını ve geri kazanımını planlar.

Şimdi geleceğe bakalım. Kazanım senden yalnız bugünkü meslekleri değil, **gelecekteki yeni meslek alanları hakkında öneri sunmanı** ister. Bu, biyoteknoloji dersinde öğrendiğin **dayanaklı tahmin** becerisinin aynısıdır: bugünkü duruma ve eğilime bakarak gerekçeli bir öneri kurmak.

Bugünkü eğilimlerden bazıları şunlardır:

- Çevre sorunları arttıkça **atık üretmeyen, daha az enerji harcayan üretim** yöntemlerine ihtiyaç artıyor.
- Plastik atık sorunu büyüdükçe **geri dönüşüm** ve **doğada çözünebilen malzemeler** önem kazanıyor.
- Elektrikli araçlar ve yenilenebilir enerji yaygınlaştıkça **pil ve enerji depolama malzemelerine** talep artıyor.
- Bilgisayarlar geliştikçe yeni maddelerin **bilgisayar ortamında tasarlanması** mümkün hâle geliyor.

Bu eğilimlerden şu meslek önerileri çıkarılabilir: **çevre dostu kimya uzmanı, geri dönüşüm teknolojileri uzmanı, biyoplastik geliştiricisi, pil ve enerji depolama malzemeleri uzmanı, bilgisayar destekli malzeme tasarımcısı.**

Dikkat: bunlar birer **öneridir**, kesinlik değildir. İyi bir öneri üç parçalıdır: **eğilim → ihtiyaç → meslek.** “Plastik atıklar artıyor (eğilim) → doğada çözünebilen malzemelere ihtiyaç var (ihtiyaç) → biyoplastik geliştiricisi gibi uzmanlara ihtiyaç doğabilir (meslek).”`,
        },
        {
          id: 'lgs-fen-kimya-endustri-meslek-tablo',
          type: 'table',
          interactive: true,
          title: 'Zincirin halkaları ve meslekler',
          columns: ['Zincirin halkası', 'Bugünkü mesleklere örnekler', 'Geleceğe yönelik öneriler'],
          rows: [
            ['Hammadde', 'Maden, jeoloji, petrol ve doğal gaz mühendisi', 'Atıklardan hammadde geri kazanım uzmanı'],
            ['İşleme', 'Kimya mühendisi, kimyager, kimya teknikeri, eczacı', 'Bilgisayar destekli malzeme tasarımcısı'],
            ['Denetim', 'Kalite kontrol uzmanı, laborant, iş güvenliği uzmanı', 'Otomatik kalite denetim sistemleri uzmanı'],
            ['Ürün', 'Gıda mühendisi, metalurji ve malzeme mühendisi', 'Biyoplastik geliştiricisi, pil malzemeleri uzmanı'],
            ['Atık', 'Çevre mühendisi', 'Çevre dostu kimya uzmanı, geri dönüşüm teknolojileri uzmanı'],
          ],
          caption:
            'Son sütundaki meslekler bugünkü eğilimlerden çıkarılmış önerilerdir; kesin tahmin değildir. Kazanım da senden bu türden gerekçeli öneriler sunmanı ister.',
        },
        {
          id: 'lgs-fen-kimya-endustri-meslek-baglanti',
          type: 'connection',
          title: 'Ünite nasıl kapanıyor?',
          body: 'Bu ders Madde ve Endüstri ünitesinin son dersidir; ünitenin bütün kavramları burada bir endüstriye dönüşür.',
          links: [
            'Periyodik sistem → endüstride kullanılan element ve hammaddeleri sınıflandırır.',
            'Kimyasal tepkime → hammaddeyi yeni ürüne dönüştüren işlemdir.',
            'Asitler ve bazlar → temizlik ürünleri, gübreler ve pek çok endüstriyel ürünün temelidir.',
            'Asit yağmurları → endüstrinin çevreye etkisini ve önleme sorumluluğunu hatırlatır.',
            'Isı ve hâl değişimi → rafineride petrolün bileşenlerine ayrılması gibi işlemlerin temelidir.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Kurumu göreviyle eşleştir',
      prompt:
        'Türkiye’de madenlerin ve yer altı kaynaklarının araştırılması, petrol arama ve üretimi ve bilimsel araştırmaların desteklenmesi hangi kurumların görevidir?',
      steps: [
        { title: '1. Görevleri ayır', body: 'Üç ayrı görev var: maden araştırma, petrol arama-üretim, bilimsel araştırmayı destekleme.' },
        { title: '2. Maden araştırma', body: 'Madenlerin ve yer altı kaynaklarının araştırılması **Maden Tetkik ve Arama (MTA)** kurumunun görevidir.' },
        { title: '3. Petrol arama ve üretim', body: 'Petrol arama ve üretimi **Türkiye Petrolleri Anonim Ortaklığı (TPAO)** tarafından yürütülür.' },
        { title: '4. Bilimsel araştırma desteği', body: 'Bilimsel ve teknolojik araştırmaların desteklenmesi **TÜBİTAK**’ın görevidir.' },
        { title: '5. Sonucu yaz', body: 'MTA — maden araştırma; TPAO — petrol arama ve üretim; TÜBİTAK — bilimsel araştırma desteği.' },
      ],
      answer: 'MTA maden araştırmasını, TPAO petrol arama ve üretimini, TÜBİTAK bilimsel araştırmaların desteklenmesini üstlenir.',
      takeaway: 'Kurumları yıllarıyla değil, görevleriyle öğrenmek daha kalıcıdır.',
    },
    {
      title: 'Seviye 2 — İşleyişi açıkla',
      prompt:
        'Türkiye ham petrolün büyük bölümünü ithal ettiği hâlde plastik ürün ihraç edebiliyor. Bu durumu hammadde, işleme ve katma değer kavramlarıyla açıkla.',
      steps: [
        { title: '1. Hammadde durumunu yaz', body: 'Ham petrol ülkede ihtiyacı karşılayacak kadar bulunmadığı için ithal edilir.' },
        { title: '2. İşlemeyi yaz', body: 'İthal edilen petrol rafinerilerde işlenir; petrokimya tesislerinde plastik hammaddelerine dönüştürülür.' },
        { title: '3. Ürünü yaz', body: 'Plastik hammaddeleri fabrikalarda şekillendirilerek plastik ürünlere dönüştürülür.' },
        { title: '4. Katma değeri göster', body: 'Her işleme aşamasında ürünün değeri artar. Ham petrol, işlenmiş plastik üründen daha az değerlidir.' },
        { title: '5. İhracatı bağla', body: 'Üretilen plastik ürünlerin bir kısmı ihraç edilir ve ülkeye döviz kazandırır.' },
      ],
      answer:
        'Hammadde ithal edilir, ülkede işlenerek katma değeri yüksek plastik ürünlere dönüştürülür ve bu ürünlerin bir kısmı ihraç edilir.',
      takeaway: 'İthalat ile ihracat aynı zincirin iki ucudur: hammadde girer, işlenmiş ürün çıkar.',
    },
    {
      title: 'Seviye 3 — Gerekçeli meslek önerisi sun',
      prompt:
        'Elektrikli araçların yaygınlaştığı ve kullanılmış pillerin sayısının arttığı bir gelecek düşün. Kimya alanında ortaya çıkabilecek bir meslek öner ve önerini üç parçalı olarak gerekçelendir.',
      steps: [
        { title: '1. Eğilimi yaz', body: 'Elektrikli araçlar yaygınlaşıyor; bu araçlar büyük piller kullanıyor ve kullanım ömrü dolan pillerin sayısı artıyor.' },
        { title: '2. İhtiyacı çıkar', body: 'Kullanılmış pillerin içindeki değerli maddelerin güvenli biçimde geri kazanılmasına ve yeni, daha verimli pil malzemelerinin geliştirilmesine ihtiyaç doğar.' },
        { title: '3. Mesleği öner', body: '**Pil geri dönüşümü ve pil malzemeleri uzmanı** gibi bir mesleğe ihtiyaç doğabilir.' },
        { title: '4. Mesleğin işini tanımla', body: 'Bu uzman, kullanılmış pillerden değerli maddeleri geri kazanır ve yeni pil malzemeleri üzerinde çalışır.' },
        { title: '5. Dili kontrol et', body: '“Kesinlikle olacak” değil, “ihtiyaç doğabilir” dedik. Öneri bir kehanet değil, dayanaklı bir tahmindir.' },
      ],
      answer:
        'Elektrikli araçların yaygınlaşmasıyla kullanılmış pil sayısı artacağından, pil geri dönüşümü ve pil malzemeleri alanında uzmanlara ihtiyaç doğabilir.',
      takeaway: 'İyi bir meslek önerisi üç parçalıdır: eğilim → ihtiyaç → meslek.',
    },
  ],

  dailyLife: {
    title: 'Kimya endüstrisi evinin neresinde?',
    body: 'Evindeki eşyaların pek çoğu bu endüstrinin zincirinden geçti.',
    links: [
      'Deterjan, sabun ve şampuan kimya endüstrisinin temizlik ürünleridir.',
      'Plastik kaplar ve ambalajlar petrokimya ürünlerinden üretilir.',
      'Duvarlardaki boya ve pencerelerdeki cam kimya endüstrisinin ürünleridir.',
      'İlaçlar, kimya ve eczacılığın birlikte çalıştığı bir üretim zincirinden gelir.',
      'Sofraya gelen sebze ve meyvelerin yetiştirilmesinde kullanılan gübreler de bu endüstrinin ürünüdür.',
      'Arabaların lastikleri ve yakıtları petrol ve petrokimya ürünleridir.',
    ],
  },

  questionClue: {
    concept: 'Kimya endüstrisi sorusu',
    statement:
      'Soruda bir kurumun görevi, bir ithalat–ihracat durumu, bir meslek ya da bir gelecek önerisi varsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Bir kurumun görevinin anlatılıp adının sorulması',
      'Hammaddenin ithal edilip işlenerek ihraç edilmesinin anlatılması',
      '“Katma değer” kavramının geçmesi',
      'Bir mesleğin hangi alanda çalıştığının sorulması',
      'Gelecekte ortaya çıkabilecek bir meslek için öneri istenmesi',
    ],
    reasoning:
      'Bu işaretler iki beceri ister: işleyişi hammadde–işleme–ürün zinciriyle açıklamak ve bir öneriyi eğilim–ihtiyaç–meslek yapısıyla gerekçelendirmek.',
    boundary:
      'Bu ipuçlarını sayı ezberine çevirme. Sorular yıldan yıla değişen tutarları değil, işleyişi ve kurumların görevlerini sorar; güncel sayı gerekiyorsa soru bunu bir tablo ya da grafik olarak verir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.4.6.1 ve F.8.4.6.2 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir kurumun görevinin verilip adının sorulması',
      'İthal ve ihraç edilen ürünlere örnek verilmesi',
      'Hammadde ithal edip işlenmiş ürün ihraç etmenin yorumlanması',
      'Bir tablo ya da grafikteki dış ticaret verisinin okunması',
      'Kimya temelli mesleklerin çalıştığı alanların eşleştirilmesi',
      'Gelecekteki bir ihtiyaca göre meslek önerisinin değerlendirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir ülke bir hammaddeyi işlemeden satmak yerine neden kendi fabrikalarında işlemeye çalışır?',
      hint: 'Katma değer kavramını kullan.',
      answer:
        'Çünkü hammadde işlendikçe **katma değer** kazanır: işlenmiş ürün, hammaddenin kendisinden çok daha değerlidir. Hammaddeyi kendi fabrikalarında işleyen ülke hem daha çok kazanç elde eder hem de o alanda iş ve meslek imkânı yaratır. Örneğin bor ham hâliyle satılmak yerine işlenerek temizlik, cam, seramik ve ileri teknoloji ürünlerinde kullanılan maddelere dönüştürüldüğünde çok daha değerli hâle gelir.',
    },
    {
      prompt:
        'Bir arkadaşın ödevine internette bulduğu bir ihracat tutarını tarih ve kaynak belirtmeden yazmış. Bu araştırmanın eksiği nedir?',
      hint: 'Bir sayıyı kaydederken hangi üç bilgiyi yazmalısın?',
      answer:
        'Bir sayıyı kullanırken **hangi yıla ait olduğu, hangi birimle verildiği ve kaynağı** mutlaka belirtilmelidir. Dış ticaret verileri her yıl değiştiği için tarihi olmayan bir sayı bugünü anlatmayabilir; kaynağı olmayan bir sayı ise doğrulanamaz. Güvenilir bir araştırma için resmî kurumların verileri kullanılmalı ve önemli bilgiler ikinci bir kaynakla doğrulanmalıdır.',
    },
    {
      prompt:
        'Kimya endüstrisi yalnız çevreye zarar veren bir alan mıdır? İki yönlü değerlendir.',
      hint: 'Asit yağmurları ve biyoteknoloji derslerindeki iki yönlü düşünmeyi hatırla.',
      answer:
        'Tek yönlü değerlendirmek eksik olur. Kontrolsüz üretim hava, su ve toprak kirliliğine yol açabilir; bu, endüstrinin olumsuz yönüdür. Öte yandan kimya endüstrisi atık arıtma, su arıtma, geri dönüşüm ve temiz enerji malzemeleri gibi alanlarda **çevrenin korunmasına da** katkı sağlar. Bu yüzden asıl mesele, üretimin denetimli ve çevreye duyarlı biçimde yapılmasıdır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey ezber değil, işleyişi anlamak ve araştırmak',
    body:
      'İki kazanımın fiilleri yön gösteriyor: “gelişimini **araştırır**” ve “meslek dallarını **araştırır** ve gelecekteki yeni meslek alanları hakkında **öneriler sunar**.” Programın açıklaması da ithal ve ihraç edilen ürünlerden örnekler verilerek endüstrinin **işleyişine** değinilmesini ister. Bu yüzden senden kurum ve yıl ezberi değil; işleyişi açıklaman, veriyi doğru okuman ve gerekçeli öneri sunman beklenir.',
    measures: [
      'Kimya endüstrisini hammadde–işleme–ürün zinciriyle açıklayabilme',
      'Kurumları görevleriyle eşleştirebilme',
      'İthal ve ihraç edilen ürünlere örnek verip işleyişi yorumlayabilme',
      'Katma değer kavramını kullanabilme',
      'Güvenilir kaynakla araştırma yapmanın adımlarını bilme',
      'Eğilimlere dayanan gerekçeli meslek önerisi sunabilme',
    ],
  },

  simulationTable: {
    title: 'Bir öğrencinin araştırma notları',
    columns: ['Not', 'Bilgi', 'Kaynak ve tarih'],
    rows: [
      ['1', 'Madenlerin araştırılmasından MTA sorumludur.', 'Kurumun resmî sitesi'],
      ['2', 'Türkiye ham petrolün büyük bölümünü ithal eder.', 'Enerji alanındaki resmî rapor, yıl belirtilmiş'],
      ['3', 'Kimya ihracatı her yıl kesinlikle aynı miktarda gerçekleşir.', 'Kaynak ve tarih yok'],
      ['4', 'İşlenmiş ürün ihracatı hammadde ihracatından daha çok katma değer sağlar.', 'Ders kitabı'],
    ],
    caption: 'Öğrenci, Türkiye’de kimya endüstrisi konusunda araştırma yapıp dört not almıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün araştırma notları',
    passage: `Bir öğrenci, Türkiye’de kimya endüstrisi konusunda araştırma yapıyor ve dört not alıyor. Notlar yukarıdaki tabloda verilmiştir.

Öğretmen, notlardan birinin hem bilgi hem kaynak bakımından araştırma ölçütlerine uymadığını söylüyor.`,
    question: 'Öğretmenin işaret ettiği not hangisidir ve neden?',
    options: [
      {
        text: '1. not; çünkü kurumun kendi sitesi güvenilir bir kaynak değildir',
        explanation:
          'Bir kurumun görevine dair bilgi için kurumun resmî sitesi güvenilir bir kaynaktır. Bu not hem doğru hem kaynaklıdır.',
      },
      {
        text: '2. not; çünkü ithalat bilgisi ders konusu değildir',
        explanation:
          'Programın açıklaması ithal ve ihraç edilen ürünlerden örnekler verilmesini ister. Bu not konuyla ilgilidir, resmî bir rapora dayanır ve yılı belirtilmiştir.',
      },
      {
        text: '3. not; çünkü hem yanlış bir kesinlik iddiası taşır hem kaynağı ve tarihi yoktur',
        explanation:
          'Doğru cevap. Dış ticaret miktarları yıldan yıla değişir; “her yıl kesinlikle aynı” ifadesi yanlıştır. Üstelik notta kaynak ve tarih yoktur. Bu not iki ölçüte birden uymaz.',
      },
      {
        text: '4. not; çünkü ders kitabı bir kaynak sayılmaz',
        explanation:
          'Ders kitabı güvenilir bir kaynaktır ve katma değer bilgisi doğrudur. Bu not ölçütlere uygundur.',
      },
      {
        text: 'Hiçbiri; dört not da araştırma ölçütlerine uygundur',
        explanation:
          '3. not hem yanlış bir kesinlik iddiası taşır hem de kaynaksızdır; bu yüzden dört notun dördü birden ölçütlere uygun değildir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru her notu iki ölçütle sınamayı istiyor: bilgi doğru mu, kaynağı ve tarihi var mı? İki ölçütten birine bile uymayan not zayıftır; ikisine birden uymayan not ise açıkça hatalıdır.',
    critical_point:
      'Kritik nokta “kesinlikle” sözcüğüdür. Değişken bir veriyi sabitmiş gibi sunmak, dayanağın izin verdiğinden fazlasını iddia etmektir. Kaynağın ve tarihin olmaması bu hatayı fark edilmesi zor hâle getirir.',
    takeaway:
      'Bir araştırma notu iki soruyu geçmelidir: bilgi doğru mu, kaynağı ve tarihi belli mi?',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Kimya endüstrisi ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Yalnız laboratuvarda deney yapan kimyagerlerden oluşur',
        'Hammaddeleri fiziksel ve kimyasal işlemlerle kullanılabilir ürünlere dönüştürür',
        'Yalnız ithal edilen ürünleri satar',
        'Hiçbir zaman çevrenin korunmasına katkı sağlamaz',
      ],
      answer_index: 1,
      explanation:
        'Kimya endüstrisi, doğadan elde edilen hammaddeleri fiziksel ve kimyasal işlemlerle kullanılabilir ürünlere dönüştüren sanayi koludur. Bu zincirde laboratuvarın yanında maden, üretim, kalite kontrol ve atık yönetimi gibi pek çok alan bulunur. Endüstri ürün üretir ve ihraç eder; ayrıca atık arıtma ve geri dönüşüm gibi alanlarla çevrenin korunmasına da katkı sağlar.',
    },
    {
      purpose: 'apply',
      question:
        'Madenlerin ve yer altı kaynaklarının araştırılmasından sorumlu kurum aşağıdakilerden hangisidir?',
      options: [
        'TÜBİTAK',
        'Maden Tetkik ve Arama (MTA)',
        'PETKİM',
        'TÜPRAŞ',
      ],
      answer_index: 1,
      explanation:
        'Maden Tetkik ve Arama (MTA), ülkenin maden ve yer altı kaynaklarını araştırmak amacıyla kurulmuştur. TÜBİTAK bilimsel ve teknolojik araştırmaları destekler; PETKİM petrokimya üretimi yapar; TÜPRAŞ ise rafineri işletmeciliğini yürütür. Kurumları görevleriyle eşleştirmek bu tür soruların anahtarıdır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Bir ülke ithalat yapıyorsa sanayisi zayıf demektir; ithalat her zaman ekonomiye zarar verir.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Hammaddeyi ithal edip işleyerek katma değerli ürün ihraç etmenin ekonomiye katkısını gözden kaçırmak',
        'İhracatın döviz kazandırdığını bilmemek',
        'Kurumların görevlerini karıştırmak',
        'Kimya endüstrisini yalnız laboratuvar işi sanmak',
      ],
      answer_index: 0,
      explanation:
        'İthalatın ekonomiye etkisi, ithal edilen maddenin nasıl kullanıldığına bağlıdır. Ülkede bulunmayan bir hammaddeyi ithal edip işleyerek katma değeri yüksek bir ürüne dönüştürmek ve bunu ihraç etmek güçlü bir sanayinin göstergesidir. Öğrenci ithalat ile ihracatı aynı zincirin iki ucu olarak görmemiş, ithalatı tek başına değerlendirmiştir.',
    },
  ],

  summary: [
    'Kimya endüstrisi hammaddeleri fiziksel ve kimyasal işlemlerle kullanılabilir ürünlere dönüştürür.',
    'Zincir şöyledir: hammadde → işleme → denetim → pazar → atık yönetimi.',
    'Hammadde işlendikçe katma değer kazanır; işlenmiş ürün hammaddeden daha değerlidir.',
    'Türkiye ham petrol ve doğal gaz gibi bazı hammaddeleri ithal eder.',
    'Türkiye dünyanın en büyük bor rezervlerine sahiptir.',
    'İthalat ve ihracat aynı zincirin iki ucudur: hammadde girer, işlenmiş ürün çıkar.',
    'MTA madenleri araştırır, Eti Maden madenleri işletir, TPAO petrol arar ve üretir.',
    'PETKİM petrokimya üretimi yapar; rafineriler TÜPRAŞ çatısı altında toplanmıştır.',
    'TÜBİTAK bilimsel ve teknolojik araştırmaları destekler.',
    'Sektör birlikleri ve meslek dernekleri gibi sivil toplum kuruluşları da gelişime katkı sağlar.',
    'Güncel veriler yıldan yıla değişir; araştırmada yıl, birim ve kaynak mutlaka yazılır.',
    'Kimya zincirinde mühendisten teknikere, eczacıdan kalite uzmanına pek çok meslek çalışır.',
    'Gelecekteki meslek önerileri eğilim → ihtiyaç → meslek yapısıyla gerekçelendirilir.',
  ],

  next: [
    'Basit Makineler: Kazanç Neyin Kazancı? (F.8.5.1.1, F.8.5.1.2)',
    'Besin Zinciri, Besin Ağı ve Ekoloji Piramidi (F.8.6.1.1)',
    'Sürdürülebilir Kalkınma ve Geri Dönüşüm (F.8.6.4 — aynı zincirin çevre halkası)',
  ],
})

export default lesson
