import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.6 Enerji Dönüşümleri ve Çevre Bilimi · 3. ders
 * Kazanım : F.8.6.3.1 · F.8.6.3.2 · F.8.6.3.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır) — F.8.6.3.3 özeti
 *   a) Sera etkisi açıklanır.
 *   b) Çevre sorunlarının Dünya’nın geleceğine ve insan yaşamına etkisi
 *      sorgulanır.
 *   c) Öngörüler sanatsal yollarla ifade ettirilir.
 *   ç) Öğrencinin ekolojik ayak izini hesaplaması sağlanır (güvenli
 *      sitelerden yararlanılabilir).
 *   d) Ülkelerin aldığı önlemlere (ör. Kyoto Protokolü) değinilir.
 *   Konu / Kavramlar (F.8.6.3): su döngüsü, oksijen döngüsü, azot döngüsü,
 *   karbon döngüsü, ozon tabakası, küresel ısınma.
 *
 * DOĞRULUK KARARI
 * Sıcaklık artışı, deniz seviyesi, karbondioksit derişimi gibi yıldan
 * yıla güncellenen sayılar bu notta verilmez; güncel veriye güvenilir
 * kurumların yayınlarından ulaşılması öğretilir. Ekolojik ayak izi için
 * de sayı verilmez; ölçmenin mantığı ve hesaplama adımları anlatılır.
 * Ozon tabakasının incelmesi ile sera etkisi, öğrencilerin en sık
 * karıştırdığı iki olay olduğu için ayrı bir karşılaştırmayla ayrılır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-madde-donguleri-ve-iklim',
  topic: 'Enerji Dönüşümleri ve Çevre Bilimi',
  order: 3,
  title: 'Madde Döngüleri ve Küresel İklim Değişikliği',
  subtitle:
    'Doğada madde kaybolmaz, döner. Döngülerden biri bozulduğunda sonuç bütün gezegende hissedilir.',
  minutes: 50,
  kazanimlar: ['F.8.6.3.1', 'F.8.6.3.2', 'F.8.6.3.3'],
  kapsamNotu:
    'Yıldan yıla güncellenen iklim ölçümleri (sıcaklık artışı, deniz seviyesi, karbondioksit miktarı) bu notta sayıyla verilmez; güncel veriye güvenilir kaynaklardan ulaşmanın yolu öğretilir.',
  prerequisites: [
    { topic: 'Fotosentez ve Solunum: Enerjinin İki Yüzü', why: 'Karbon ve oksijen döngüsü fotosentez ve solunum üzerine kuruludur.' },
    { topic: 'Isı ve Hâl Değişimi: Sıcaklık Neden Durur?', why: 'Su döngüsündeki buharlaşma ve yoğuşma hâl değişimleridir.' },
    { topic: 'Asit Yağmurları: Zinciri Nerede Kırabiliriz?', why: 'Fosil yakıtların çevreye etkisini ve çözüm önerisi kurmayı orada gördük.' },
  ],
  outcomes: [
    'Su, karbon, oksijen ve azot döngülerini şema üzerinde gösterebileceksin.',
    'Madde döngülerinin yaşam açısından önemini sorgulayabileceksin.',
    'Sera etkisini ve küresel ısınmayı birbirinden ayırarak açıklayabileceksin.',
    'Ozon tabakasının incelmesini sera etkisinden ayırt edebileceksin.',
    'Ekolojik ayak izini ve uluslararası önlemleri örnekleyebileceksin.',
  ],

  opening: {
    title: 'Senin içtiğin su, bir dinozorun içtiği su',
    lead: 'Bugün içtiğin bir yudum suyun molekülleri milyonlarca yıldır doğada dönüp duruyor olabilir.',
    body: `Bir bardak su içtiğinde aklına şu gelmez: bu suyun molekülleri, milyonlarca yıl önce bir dinozorun içtiği suyun parçası olabilir.

Bu bir abartı değildir. Dünya’daki su yoktan var olmaz, vardan yok olmaz. Denizlerden buharlaşır, bulut olur, yağmur olarak yağar, nehirlerden denize döner. Canlıların vücuduna girer, terle ve solunumla geri çıkar. Aynı su **döngü hâlinde** tekrar tekrar kullanılır.

Yalnız su değil. **Karbon, oksijen ve azot** da doğada döngü hâlinde dolaşır. Bir yaprakta bulunan karbon, yarın bir tavşanın vücudunda, ertesi gün havada, bir yıl sonra bir ağacın gövdesinde olabilir.

Besin zinciri dersinde bir kural kurmuştuk: **madde döner, enerji akar.** Bu derste maddenin nasıl döndüğünü göreceğiz. Program da bunu açıkça ister: madde döngülerini **şema üzerinde göstererek** açıklamak.

Sonra dersin ikinci büyük sorusuna geçeceğiz: **bu döngülerden biri bozulursa ne olur?**

İnsanlar son yüzyıllarda fosil yakıtları yoğun biçimde yakarak ve ormanları keserek karbon döngüsünü etkiledi. Havaya karışan karbondioksit arttı. Bunun sonucunda **küresel iklim değişikliği** gündeme geldi.

Bu konuda üç şeyi birbirinden ayırmayı öğreneceğiz; çünkü öğrencilerin çoğu bunları karıştırır:

- **Sera etkisi** — Dünya’yı yaşanabilir kılan doğal bir olay.
- **Küresel ısınma** — sera etkisinin güçlenmesiyle ortalama sıcaklığın artması.
- **Ozon tabakasının incelmesi** — bambaşka bir sorun; zararlı ışınlarla ilgili.

Son olarak, kazanımın istediği gibi, kendi **ekolojik ayak izimizi** ve ülkelerin aldığı önlemleri tartışacağız.`,
  },

  concepts: [
    {
      term: 'Madde döngüsü',
      body: 'Bir maddenin canlılar ile cansız çevre (hava, su, toprak) arasında sürekli dolaşmasıdır. Döngüler sayesinde maddeler tükenmez, yeniden kullanılır.',
    },
    {
      term: 'Su döngüsü',
      body: 'Suyun buharlaşma, yoğuşma, yağış ve akış yoluyla deniz, hava, kara ve canlılar arasında dolaşmasıdır. Canlılar suyu terleme ve solunumla da döngüye katar.',
    },
    {
      term: 'Karbon ve oksijen döngüsü',
      body: 'Karbon ve oksijenin fotosentez, solunum, ayrıştırma ve yanma ile hava ve canlılar arasında dolaşmasıdır. İki döngü birbirine sıkıca bağlıdır.',
    },
    {
      term: 'Azot döngüsü',
      body: 'Azotun hava, toprak ve canlılar arasında dolaşmasıdır. Canlılar azotu protein yapımında kullanır; ama havadaki azotu bitkiler doğrudan kullanamaz. Topraktaki bazı bakteriler ve şimşekler azotu kullanılabilir hâle getirir.',
    },
    {
      term: 'Sera etkisi',
      body: 'Atmosferdeki bazı gazların (sera gazları) yeryüzünden yayılan ısının bir kısmını tutarak Dünya’yı ısıtmasıdır. **Doğal sera etkisi** olmasaydı Dünya yaşanamayacak kadar soğuk olurdu.',
    },
    {
      term: 'Küresel ısınma',
      body: 'Sera gazlarının artmasıyla sera etkisinin güçlenmesi ve Dünya’nın ortalama sıcaklığının yükselmesidir. Küresel iklim değişikliğinin temel nedenlerinden biridir.',
    },
    {
      term: 'Ozon tabakası',
      body: 'Atmosferin üst katmanlarında bulunan, Güneş’ten gelen zararlı **morötesi (ultraviyole) ışınların** büyük kısmını tutan tabakadır. İncelmesi sera etkisinden **farklı** bir sorundur.',
    },
    {
      term: 'Ekolojik ayak izi',
      body: 'Bir kişinin, bir topluluğun ya da bir ülkenin tükettiği kaynakları üretmek ve oluşturduğu atıkları yok etmek için gereken biyolojik olarak verimli alanın ölçüsüdür. Tüketim arttıkça ayak izi büyür.',
    },
  ],

  why: {
    question: 'Madde döngüleri yaşam için neden vazgeçilmezdir?',
    body: `Çünkü Dünya’ya dışarıdan neredeyse hiç madde gelmez. Güneş bize **enerji** gönderir; ama **madde** göndermez. Canlıların kullandığı su, karbon, oksijen ve azot, Dünya’da zaten bulunan sınırlı miktardadır.

Bir düşünce deneyi yapalım. Maddeler döngü hâlinde dönmeseydi ne olurdu?

- Bitkiler fotosentez için havadaki karbondioksiti kullanır. Karbondioksit geri dönmeseydi zamanla tükenir ve fotosentez dururdu.
- Canlılar solunum için oksijen kullanır. Fotosentez oksijeni yenilemeseydi oksijen tükenirdi.
- Ölü canlılar ayrıştırılmasaydı içlerindeki azot ve öbür maddeler toprağa dönemez, toprak zamanla verimsizleşirdi.
- Su yağış olarak geri dönmeseydi karalar kururdu.

Her durumda sonuç aynı: **yaşam sürdürülemezdi.**

Döngüler sayesinde aynı madde tekrar tekrar kullanılır. Bu yüzden döngüler, sınırlı maddeyle sınırsız gibi görünen bir yaşamı mümkün kılar.

Şimdi dersin ikinci yarısına köprü kuralım. Döngüler bir **denge** içinde çalışır: havaya karışan karbondioksit ile havadan alınan karbondioksit uzun süre birbirini dengeler. İnsan etkinlikleri bu dengeyi iki yönden bozdu:

1. **Fosil yakıtların yakılması** havaya fazladan karbondioksit karıştırdı. Kömür, petrol ve doğal gaz milyonlarca yıl önce yaşamış canlıların kalıntılarıdır; içlerindeki karbon uzun süre yer altında depolanmıştı. Yakıldıklarında bu karbon kısa sürede havaya döndü.
2. **Ormanların yok edilmesi** havadan karbondioksit alan fotosentezi azalttı.

Birinde havaya giden artıyor, öbüründe havadan alınan azalıyor. Sonuç: havadaki karbondioksit artıyor. Bir sonraki bölümde bunun **sera etkisini** nasıl güçlendirdiğini göreceğiz.`,
  },

  mechanism: {
    title: 'Küresel ısınma nasıl oluşuyor?',
    lead: 'Doğal bir olaydan bir çevre sorununa uzanan zincir. Her halka bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, sera etkisinin nasıl işlediğini ve güçlendiğinde neler olduğunu gösterir.',
    steps: [
      {
        title: '1. Güneş ışığı yeryüzüne ulaşır',
        body: 'Güneş’ten gelen ışığın büyük kısmı atmosferden geçerek yeryüzünü ısıtır.',
      },
      {
        title: '2. Yeryüzü ısıyı geri yayar',
        body: 'Isınan yeryüzü, aldığı enerjinin bir kısmını ısı olarak atmosfere doğru geri yayar.',
      },
      {
        title: '3. Sera gazları ısının bir kısmını tutar',
        body: 'Atmosferdeki karbondioksit, su buharı ve metan gibi sera gazları bu ısının bir kısmını tutar. Bu **doğal sera etkisidir** ve Dünya’yı yaşanabilir sıcaklıkta tutar.',
      },
      {
        title: '4. Sera gazları artar',
        body: 'Fosil yakıtların yakılması, ormansızlaşma ve bazı tarım ve hayvancılık etkinlikleri havadaki sera gazlarını artırır.',
      },
      {
        title: '5. Sera etkisi güçlenir',
        body: 'Daha çok sera gazı daha çok ısı tutar. Dünya’nın ortalama sıcaklığı yükselir; buna **küresel ısınma** denir.',
      },
      {
        title: '6. İklim değişir',
        body: 'Ortalama sıcaklığın yükselmesi buzulların erimesine, deniz seviyesinin yükselmesine, kuraklık ve aşırı hava olaylarının artmasına yol açabilir.',
      },
    ],
    takeaway:
      'Zincirin kritik ayrımı 3. ve 5. adımlar arasındadır: sera etkisi doğal ve gereklidir; sorun onun güçlenmesidir.',
  },

  causeEffect: {
    title: 'Sebep, gelişme, sonuç ve sonraki etki',
    intro: 'Küresel iklim değişikliğini dört aşamada okuyalım. Kazanım nedenlerin ve olası sonuçların tartışılmasını ister.',
    steps: [
      { title: 'Sebep', body: 'Fosil yakıtların yoğun kullanılması ve ormanların yok edilmesi havadaki karbondioksiti artırır.' },
      { title: 'Gelişme', body: 'Artan sera gazları yeryüzünden yayılan ısının daha büyük kısmını tutar; sera etkisi güçlenir.' },
      { title: 'Sonuç', body: 'Dünya’nın ortalama sıcaklığı yükselir; buzullar erir, deniz seviyesi yükselir, hava olayları aşırılaşabilir.' },
      { title: 'Sonraki etki', body: 'Tarım, su kaynakları, kıyı yerleşimleri, canlı türleri ve insan sağlığı etkilenebilir; bazı türlerin yaşam alanları daralabilir.' },
    ],
    inference:
      'Zincirin başı insan etkinlikleridir; bu yüzden sorun da çözüm de insan kararlarına bağlıdır. Asit yağmurlarında öğrendiğin gibi, kalıcı çözüm zincirin başına yerleşir.',
  },

  comparison: {
    title: 'Sera etkisi, küresel ısınma ve ozon tabakasının incelmesi',
    columns: ['Sera etkisi', 'Küresel ısınma', 'Ozon tabakasının incelmesi'],
    rows: [
      { label: 'Nedir?', values: ['Sera gazlarının ısının bir kısmını tutması', 'Sera etkisinin güçlenmesiyle ortalama sıcaklığın artması', 'Zararlı ışınları tutan tabakanın incelmesi'] },
      { label: 'Doğal mı?', values: ['Evet, doğal ve gerekli', 'Hayır, insan etkisiyle hızlanan bir sorun', 'Hayır, insan kaynaklı bir sorun'] },
      { label: 'Neden olan gazlar', values: ['Karbondioksit, su buharı, metan', 'Artan sera gazları', 'Bazı soğutucu ve sprey gazları'] },
      { label: 'Ne ile ilgili?', values: ['Isının tutulması', 'Isının fazla tutulması', 'Morötesi ışınların geçmesi'] },
      { label: 'Olası sonucu', values: ['Dünya’nın yaşanabilir sıcaklıkta kalması', 'Buzul erimesi, deniz seviyesinin yükselmesi', 'Cilt ve göz hastalıklarının artması'] },
    ],
    insight:
      'Üç sütun sık karıştırılır. Ayırmanın yolu: sera etkisi ve küresel ısınma **ısıyla**, ozon incelmesi **zararlı ışınlarla** ilgilidir.',
  },

  traps: [
    {
      title: 'Sera etkisini tamamen kötü bir şey sanmak',
      wrong: 'Sera etkisi Dünya’ya zarar veren bir çevre sorunudur.',
      right: '**Doğal sera etkisi** Dünya’yı yaşanabilir sıcaklıkta tutar; olmasaydı Dünya çok soğuk olurdu. Sorun, sera gazlarının artmasıyla bu etkinin **güçlenmesidir.**',
      body: 'Program sera etkisinin açıklanmasını ister. Doğru açıklama iki parçalıdır: doğal sera etkisi gereklidir; güçlenmiş sera etkisi küresel ısınmaya yol açar.',
    },
    {
      title: 'Ozon deliğini küresel ısınmanın nedeni sanmak',
      wrong: 'Ozon tabakası delindiği için Güneş’in ısısı içeri giriyor ve Dünya ısınıyor.',
      right: 'Ozon tabakasının incelmesi **zararlı morötesi ışınların** daha çok ulaşmasına yol açar. Küresel ısınmanın temel nedeni ise **sera gazlarının artmasıdır.** İki ayrı sorundur.',
      body: 'Bu, bu konudaki en yaygın yanılgıdır. İki sorunun ortak yanı insan kaynaklı gazlarla ilgili olmalarıdır; ama gazlar da etkiler de farklıdır.',
    },
    {
      title: 'Madde döngülerinde maddenin tükendiğini sanmak',
      wrong: 'Canlılar kullandıkça su, karbon ve azot azalır.',
      right: 'Döngüler sayesinde madde tükenmez; **yeniden kullanılır.** Sorun maddenin tükenmesi değil, döngünün **dengesinin** bozulmasıdır.',
      body: 'Örneğin karbon yok olmuyor; ama yer altında milyonlarca yıl depolanmış karbon kısa sürede havaya karışınca denge bozuluyor.',
    },
    {
      title: 'Bitkilerin havadaki azotu doğrudan kullandığını sanmak',
      wrong: 'Hava büyük ölçüde azottan oluştuğu için bitkiler azotu doğrudan havadan alır.',
      right: 'Bitkiler havadaki azotu **doğrudan kullanamaz.** Topraktaki bazı bakteriler ve şimşekler azotu bitkilerin kullanabileceği hâle getirir; bitkiler azotu kökleriyle topraktan alır.',
      body: 'Bu yüzden ayrıştırıcılar ve toprak bakterileri azot döngüsünün vazgeçilmez halkalarıdır.',
    },
  ],

  variables: {
    title: 'Model deneyle keşfet: sera etkisi',
    lead:
      'Sera etkisini sınıfta basit bir modelle gözlemleyebiliriz. Model gerçeğin kendisi değildir; ama mantığını gösterir.',
    question: 'Aynı ışık altında üzeri kapalı ve açık iki kaptaki havanın sıcaklığı aynı artar mı?',
    independent: {
      label: 'Kabın üzerinin kapalı olup olmaması',
      note: 'Ben değiştiriyorum: kapalı kap / açık kap',
    },
    setup: {
      label: 'İki özdeş cam kap ve termometre',
      note: 'İkisi de aynı lambanın altında',
    },
    dependent: {
      label: 'Kaptaki havanın sıcaklık artışı',
      note: 'Ölçtüğüm: belli sürelerde termometre değeri',
    },
    controlled: [
      'Lambanın kaplara uzaklığı ve gücü',
      'Kapların cinsi ve büyüklüğü',
      'Başlangıç sıcaklığı',
      'Ölçüm süresi',
    ],
    caption:
      'Lamba ve kaplar bilerek aynı tutulur. Sıcaklık farkının tek olası nedeni kabın üzerinin kapalı olmasıdır.',
  },

  experiment: {
    title: 'Sera etkisi modeli',
    intro:
      'Bu deney öğretmen gözetiminde yapılır; lamba ve cam kaplar ısınacağı için çıplak elle dokunulmaz.',
    steps: [
      { title: '1. İki kabı hazırla', body: 'İki özdeş cam kabın içine birer termometre yerleştirilir. Başlangıç sıcaklıkları kaydedilir.' },
      { title: '2. Birinin üzerini kapat', body: 'Kaplardan birinin ağzı şeffaf bir kapakla ya da streç filmle kapatılır; öbürü açık bırakılır.' },
      { title: '3. Aynı ışığa koy', body: 'İki kap aynı lambanın altına, lambaya eşit uzaklıkta yerleştirilir.' },
      { title: '4. Düzenli ölç', body: 'Belirli aralıklarla iki termometre okunur ve kaydedilir.' },
      { title: '5. Karşılaştır', body: 'Üzeri kapalı kaptaki sıcaklığın daha çok arttığı gözlenir: kapak, ısının kaçmasını zorlaştırır.' },
      { title: '6. Modelin sınırını yaz', body: 'Gerçek atmosferde cam kapak yoktur; ısıyı sera gazları tutar. Model yalnız “ısının tutulması” fikrini gösterir.' },
    ],
    takeaway:
      'Bir model deneyin son adımı her zaman modelin sınırını yazmaktır: model neyi gösteriyor, neyi göstermiyor?',
  },

  dataTable: {
    title: 'Gözlem kaydı: kapalı ve açık kap',
    columns: ['Süre', 'Açık kap', 'Üzeri kapalı kap'],
    rows: [
      ['Başlangıç', '22 °C', '22 °C'],
      ['5. dakika', '24 °C', '26 °C'],
      ['10. dakika', '25 °C', '29 °C'],
      ['15. dakika', '26 °C', '32 °C'],
    ],
    caption:
      'Üzeri kapalı kapta sıcaklık daha çok artmıştır. Kapak, sera gazlarının ısıyı tutmasına benzer bir rol oynar. *(Kurgulanmış örnek gözlem verisidir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-dongu-sema',
      title: 'Madde döngülerini şema üzerinde okumak',
      lead: 'Kazanım döngülerin şema üzerinde gösterilmesini ister. Karbon ve oksijen döngüsüyle başlayalım, sonra su ve azota geçelim.',
      blocks: [
        {
          id: 'lgs-fen-dongu-sema-karbon',
          type: 'figure',
          kind: 'lgs-fen-karbon-dongusu',
          title: 'Karbon ve oksijen döngüsü',
          width: 'full',
          complexity: 'medium',
          caption:
            'Fotosentez havadan karbondioksit alır, oksijen verir; solunum ve ayrıştırma havaya karbondioksit verir. Fosil yakıtların yakılması, milyonlarca yıl yer altında kalmış karbonu kısa sürede havaya karıştırır.',
          purpose: 'Karbon ve oksijenin hava ile canlılar arasındaki yolculuğunu tek şemada göstermek',
          alt:
            'Karbon ve oksijen döngüsü: hava, bitkiler, hayvanlar, ayrıştırıcılar ve fosil yakıtlar arasında fotosentez, solunum, ayrıştırma ve yanma okları.',
          data: {},
          focus: [
            { title: 'Fotosentez', body: 'Bitkiler havadan karbondioksit alır, havaya oksijen verir. Karbon besine dönüşür.' },
            { title: 'Solunum', body: 'Bitkiler ve hayvanlar havadan oksijen alır, havaya karbondioksit verir.' },
            { title: 'Ayrıştırma', body: 'Bakteri ve mantarlar ölü canlıları ayrıştırırken karbonu karbondioksit olarak havaya geri verir.' },
            { title: 'Yanma', body: 'Fosil yakıtların yakılması havaya karbondioksit verir ve oksijen harcar. İnsan etkisinin en güçlü olduğu halkadır.' },
          ],
        },
        {
          id: 'lgs-fen-dongu-sema-anlatim',
          type: 'prose',
          body: `**Karbon ve oksijen döngüsü** birbirine sıkıca bağlıdır; çünkü ikisini de aynı dört olay yürütür.

- **Fotosentez** karbonu havadan alıp besine bağlar ve havaya oksijen verir.
- **Solunum** besindeki karbonu karbondioksit olarak havaya geri verir ve oksijen harcar.
- **Ayrıştırma**, ölü canlılardaki karbonu karbondioksit olarak havaya döndürür.
- **Yanma**, yakıtlardaki karbonu havaya verir ve oksijen harcar.

**Su döngüsü** güneş enerjisiyle çalışır:

1. **Buharlaşma:** denizlerden, göllerden ve topraktan su buharlaşır.
2. **Terleme:** bitkiler yapraklarından su buharı verir; canlılar da solunum ve terlemeyle döngüye su katar.
3. **Yoğuşma:** yükselen su buharı soğuyarak bulutları oluşturur.
4. **Yağış:** bulutlardaki su yağmur, kar ya da dolu olarak yere düşer.
5. **Akış ve sızma:** yağan su akarsularla denizlere ulaşır ya da toprağa sızarak yer altı sularına karışır.

Isı dersinden hatırla: buharlaşma ısı alan, yoğuşma ısı veren bir hâl değişimidir. Su döngüsü bu yüzden aynı zamanda bir **ısı taşıma** düzeneğidir.

**Azot döngüsü** biraz farklıdır; çünkü havada en bol bulunan gaz azot olduğu hâlde canlılar onu doğrudan kullanamaz.

1. **Bağlanma:** topraktaki bazı bakteriler ve şimşekler, havadaki azotu bitkilerin kullanabileceği azotlu maddelere dönüştürür.
2. **Bitkiler:** bitkiler bu maddeleri kökleriyle topraktan alır ve protein yapımında kullanır.
3. **Hayvanlar:** hayvanlar azotu bitkileri yiyerek alır.
4. **Ayrıştırma:** ölü canlılar ve atıklar ayrıştırılınca azotlu maddeler toprağa geri döner.
5. **Havaya dönüş:** bazı bakteriler topraktaki azotlu maddeleri yeniden azot gazına dönüştürerek havaya verir.

Azot döngüsünün ders olarak özü şudur: **bakteriler olmasaydı canlılar havadaki azottan yararlanamazdı.** Çiftçilerin baklagil yetiştirerek toprağı zenginleştirmesi, bu bakterilerin bazılarının baklagil köklerinde yaşamasından kaynaklanır.`,
        },
        {
          id: 'lgs-fen-dongu-sema-tablo',
          type: 'table',
          interactive: true,
          title: 'Dört döngü, dört anahtar',
          columns: ['Döngü', 'Anahtar olaylar', 'Canlılar için önemi'],
          rows: [
            ['Su döngüsü', 'Buharlaşma, terleme, yoğuşma, yağış, akış', 'Canlıların su ihtiyacını sürekli karşılar'],
            ['Karbon döngüsü', 'Fotosentez, solunum, ayrıştırma, yanma', 'Besinin yapıtaşını sağlar'],
            ['Oksijen döngüsü', 'Fotosentez ve solunum', 'Solunum için gereken oksijeni yeniler'],
            ['Azot döngüsü', 'Bakterilerle bağlanma, ayrıştırma, havaya dönüş', 'Protein yapımı için gereken azotu sağlar'],
          ],
          caption:
            'Dört döngünün ortak halkası ayrıştırıcılardır: ölü canlılardaki maddeleri çevreye geri kazandırırlar.',
        },
      ],
    },

    {
      id: 'lgs-fen-dongu-iklim',
      title: 'Küresel iklim değişikliği: nedenler, sonuçlar ve önlemler',
      lead: 'Kazanım nedenlerin ve olası sonuçların tartışılmasını, ülkelerin aldığı önlemlere değinilmesini ister.',
      blocks: [
        {
          id: 'lgs-fen-dongu-iklim-anlatim',
          type: 'prose',
          body: `**Nedenler.** Küresel iklim değişikliğinin temel nedeni, havadaki sera gazlarının artmasıdır. Bu artışın başlıca kaynakları şunlardır:

- **Fosil yakıtların yakılması:** elektrik üretimi, ulaşım, sanayi ve ısınmada kömür, petrol ve doğal gaz kullanılması.
- **Ormansızlaşma:** ormanlar kesildiğinde havadan karbondioksit alan fotosentez azalır; ağaçlar yakıldığında da karbon havaya karışır.
- **Bazı tarım ve hayvancılık etkinlikleri:** bu etkinlikler metan gibi sera gazlarının artmasına katkıda bulunur.
- **Atıklar:** çöp alanlarında atıkların ayrışması da sera gazı oluşturur.

**Olası sonuçlar.** Program bu sonuçların Dünya’nın geleceğine ve insan yaşamına etkisinin sorgulanmasını ister. Bilim insanlarının öne çıkardığı olası sonuçlar şunlardır:

- Buzulların erimesi ve deniz seviyesinin yükselmesi; kıyı yerleşimlerinin risk altına girmesi.
- Kuraklığın artması; su kaynaklarının azalması.
- Sıcak hava dalgaları, şiddetli yağışlar ve seller gibi aşırı hava olaylarının sıklaşabilmesi.
- Tarımsal üretimin etkilenmesi.
- Bazı canlı türlerinin yaşam alanlarının daralması ve türlerin yok olma riskinin artması.

“Olası” sözcüğüne dikkat et. Bu sonuçların nerede, ne zaman ve ne ölçüde gerçekleşeceği bilimsel olarak incelenmeye devam ediyor. Biyoteknoloji dersinde öğrendiğin dayanaklı tahmin dili burada da geçerlidir.

**Önlemler.** Küresel iklim değişikliği bir ülkenin tek başına çözebileceği bir sorun değildir; çünkü sera gazları sınır tanımaz. Bu yüzden ülkeler **uluslararası anlaşmalar** yaparak önlem almaya çalışır:

- **Kyoto Protokolü (1997):** gelişmiş ülkelerin sera gazı salımlarını azaltma yükümlülüğü üstlendiği ilk kapsamlı uluslararası anlaşmalardan biridir. Program bu protokole değinilmesini açıkça ister.
- **Paris Anlaşması (2015):** ülkelerin küresel sıcaklık artışını sınırlamak için kendi azaltım hedeflerini belirlediği anlaşmadır. Türkiye de bu anlaşmaya taraftır.

Bu anlaşmaların ortak mantığı asit yağmurlarında kurduğun zincirle aynıdır: **kalıcı çözüm zincirin başına yerleşir.** Fosil yakıt kullanımını azaltmak, yenilenebilir enerjiye geçmek, ormanları korumak ve enerjiyi verimli kullanmak önleyici çözümlerdir.

*Kapsam notu: sıcaklık artışı ve deniz seviyesi gibi güncel ölçümleri burada sayıyla vermiyoruz; bu veriler sürekli güncellenir. Araştırmak istersen güvenilir bilim kurumlarının ve resmî kuruluşların yayınlarına başvur.*`,
        },
        {
          id: 'lgs-fen-dongu-iklim-ozon',
          type: 'prose',
          body: `**Ozon tabakası** ayrı bir başlığı hak ediyor; çünkü öğrencilerin en sık karıştırdığı konudur.

Ozon tabakası atmosferin üst katmanlarında bulunur ve Güneş’ten gelen **zararlı morötesi ışınların** büyük kısmını tutar. Bu ışınlar cilt hastalıklarına, göz hastalıklarına ve canlılarda başka zararlara yol açabilir.

Geçmişte buzdolaplarında, klimalarda ve spreylerde kullanılan bazı gazların ozon tabakasını incelttiği anlaşıldı. Bunun üzerine ülkeler bu gazların kullanımını sınırlayan uluslararası kararlar aldı ve kullanımları büyük ölçüde azaltıldı.

Şimdi ayrımı kesinleştirelim:

- **Sera etkisi ve küresel ısınma** → **ısının tutulmasıyla** ilgilidir.
- **Ozon tabakasının incelmesi** → **zararlı ışınların geçmesiyle** ilgilidir.

İkisi de insan kaynaklı gazlarla ilgilidir; ama gazlar da sonuçlar da farklıdır. “Ozon deliği yüzünden Dünya ısınıyor” cümlesi bu yüzden **yanlıştır.**`,
        },
        {
          id: 'lgs-fen-dongu-iklim-tuzak',
          type: 'trap',
          title: 'Tek bir ülkenin önlemini yeterli sanmak',
          wrong: 'Bir ülke sera gazı salımını azaltırsa kendi ülkesinde iklim değişikliğini durdurur.',
          right: 'Sera gazları havada bütün Dünya’ya yayılır; bu yüzden küresel iklim değişikliği **ortak önlem** gerektirir. Kyoto Protokolü ve Paris Anlaşması bu ortaklığın ürünüdür.',
          body: 'Bu, asit yağmurlarında gördüğün “kirlilik sınır tanımaz” fikrinin küresel ölçekteki karşılığıdır.',
        },
      ],
    },

    {
      id: 'lgs-fen-dongu-ayakizi',
      title: 'Ekolojik ayak izi ve senin katkın',
      lead: 'Program öğrencinin kendi ekolojik ayak izini hesaplamasını ve öngörülerini sanatsal yollarla ifade etmesini ister.',
      blocks: [
        {
          id: 'lgs-fen-dongu-ayakizi-anlatim',
          type: 'prose',
          body: `**Ekolojik ayak izi**, bir kişinin tükettiği her şeyin doğada bıraktığı izin ölçüsüdür. Yediğin besin, kullandığın enerji, yaptığın yolculuklar, satın aldığın eşyalar ve ürettiğin atıklar… Hepsinin üretilmesi ve atıklarının yok edilmesi için doğanın belli bir alana ihtiyacı vardır. Bu alanın büyüklüğü senin ayak izindir.

Ayak izini büyüten başlıca etkenler şunlardır:

- **Enerji:** evde ve okulda harcanan elektrik ve ısınma için yakılan yakıt.
- **Ulaşım:** özel araçla yapılan yolculuklar, uçak yolculukları.
- **Beslenme:** üretimi çok kaynak gerektiren besinlerin fazla tüketilmesi, israf edilen yiyecekler.
- **Tüketim ve atık:** gereğinden fazla eşya almak, geri dönüştürülmeyen atıklar.

**Nasıl hesaplanır?** Program bu konuda güvenli sitelerden yararlanılabileceğini belirtir. Hesaplayıcılar sana beslenme, enerji, ulaşım ve tüketim alışkanlıklarınla ilgili sorular sorar ve bir sonuç verir. Hesaplamayı yaparken şu adımları izle:

1. Güvenilir bir kurumun hazırladığı hesaplayıcıyı seç.
2. Soruları dürüstçe, kendi gerçek alışkanlıklarına göre cevapla.
3. Sonucunu kaydet ve hangi alanın ayak izini en çok büyüttüğüne bak.
4. O alanda yapabileceğin bir değişiklik belirle.
5. Bir süre sonra aynı hesaplayıcıyla yeniden ölç ve karşılaştır.

Burada önemli olan sonucun sayısı değil, **hangi alanın** ayak izini büyüttüğünü görmek ve oraya yönelik bir değişiklik yapmaktır.

**Sanatsal ifade.** Program, öğrencilerin çevre sorunlarının Dünya’nın geleceğine etkisine yönelik öngörülerini **sanatsal yollarla** ifade etmesini ister. Bir afiş, bir şiir, kısa bir hikâye, bir karikatür ya da bir fotoğraf çalışması hazırlayabilirsin. İyi bir sanatsal çalışma da bir bilimsel tahmin gibi **dayanaklı** olmalıdır: hangi nedene, hangi olası sonuca dikkat çektiğin açık olsun.`,
        },
        {
          id: 'lgs-fen-dongu-ayakizi-tablo',
          type: 'table',
          interactive: true,
          title: 'Ayak izini küçültmek için neler yapılabilir?',
          columns: ['Alan', 'Ayak izini büyüten', 'Küçültmek için'],
          rows: [
            ['Enerji', 'Boş odada yanan ışıklar, bekleme modunda bırakılan cihazlar', 'Kullanılmayan cihazları kapatmak'],
            ['Ulaşım', 'Kısa mesafede özel araç kullanmak', 'Yürümek, bisiklet ve toplu taşıma'],
            ['Beslenme', 'Yiyecek israfı', 'İhtiyaç kadar almak, artanı değerlendirmek'],
            ['Tüketim', 'Gereğinden fazla eşya almak', 'Onarmak, paylaşmak, yeniden kullanmak'],
            ['Atık', 'Karışık atılan çöpler', 'Atıkları ayrıştırıp geri dönüşüme katmak'],
          ],
          caption:
            'Her satırdaki değişiklik, karbon döngüsündeki “yanma” halkasına ya da kaynak tüketimine dokunur.',
        },
        {
          id: 'lgs-fen-dongu-ayakizi-baglanti',
          type: 'connection',
          title: 'Bu ders nerelere bağlanıyor?',
          body: 'Madde döngüleri ünitenin öbür derslerini tek bir büyük resimde toplar.',
          links: [
            'Fotosentez ve solunum, karbon ve oksijen döngüsünün iki motorudur.',
            'Besin zincirindeki ayrıştırıcılar dört döngünün ortak halkasıdır.',
            'Isı dersindeki buharlaşma ve yoğuşma, su döngüsünün temelidir.',
            'Asit yağmurlarında öğrendiğin çözüm zinciri iklim değişikliğine de uygulanır.',
            'Sürdürülebilir kalkınma dersi, ayak izini küçültmenin yollarını ayrıntılı tartışır.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Döngüdeki olayı adlandır',
      prompt:
        'Aşağıdaki olayların her birinin hangi madde döngüsüne ait olduğunu ve döngüde ne işe yaradığını yaz: (a) bitkinin yapraklarından su buharı çıkması, (b) toprak bakterilerinin havadaki azotu kullanılabilir hâle getirmesi, (c) bir ağacın fotosentez yapması.',
      steps: [
        { title: '1. (a)’yı incele', body: 'Bitkinin yapraklarından su buharı çıkması **terlemedir.** Su döngüsüne aittir; suyu havaya geri kazandırır.' },
        { title: '2. (b)’yi incele', body: 'Bakterilerin havadaki azotu bitkilerin kullanabileceği hâle getirmesi **azot döngüsüne** aittir. Bu olmadan bitkiler azottan yararlanamaz.' },
        { title: '3. (c)’yi incele', body: 'Fotosentez **karbon ve oksijen döngüsüne** aittir: havadan karbondioksit alır, havaya oksijen verir.' },
        { title: '4. Ortak noktayı bul', body: 'Üç olayda da canlılar ile cansız çevre arasında madde alışverişi vardır.' },
        { title: '5. Sonucu yaz', body: '(a) su döngüsü, (b) azot döngüsü, (c) karbon ve oksijen döngüsü.' },
      ],
      answer: '(a) su döngüsü — terleme; (b) azot döngüsü — azotun bağlanması; (c) karbon ve oksijen döngüsü — fotosentez.',
      takeaway: 'Bir olayı döngüye yerleştirmek için sor: hangi madde hareket ediyor, nereden nereye?',
    },
    {
      title: 'Seviye 2 — Sera etkisini ozondan ayır',
      prompt:
        'Bir öğrenci “Ozon tabakası delindiği için Güneş’in ısısı daha çok giriyor ve Dünya ısınıyor.” diyor. Bu açıklamadaki hatayı bul ve doğrusunu yaz.',
      steps: [
        { title: '1. İki olayı ayır', body: 'Ozon tabakasının incelmesi ve küresel ısınma iki ayrı sorundur.' },
        { title: '2. Ozonun görevini yaz', body: 'Ozon tabakası Güneş’ten gelen **zararlı morötesi ışınları** tutar. İncelmesi bu ışınların daha çok ulaşmasına yol açar.' },
        { title: '3. Isınmanın nedenini yaz', body: 'Küresel ısınmanın temel nedeni havadaki **sera gazlarının artmasıdır.** Sera gazları yeryüzünden yayılan ısıyı tutar.' },
        { title: '4. Hatayı adlandır', body: 'Öğrenci iki farklı olayı birbirine bağlamış; ozon incelmesini ısınmanın nedeni saymıştır.' },
        { title: '5. Doğrusunu kur', body: 'Dünya’nın ısınmasının temel nedeni sera gazlarının artmasıdır; ozon incelmesi ise zararlı ışınlarla ilgili ayrı bir sorundur.' },
      ],
      answer:
        'Hata, ozon incelmesini küresel ısınmanın nedeni saymaktır. Küresel ısınmanın temel nedeni sera gazlarının artmasıdır; ozon incelmesi zararlı morötesi ışınlarla ilgili ayrı bir sorundur.',
      takeaway: 'Isı → sera gazları; zararlı ışın → ozon. İki anahtar iki sorunu ayırır.',
    },
    {
      title: 'Seviye 3 — Döngü dengesini tartış',
      prompt:
        'Bir bölgede geniş bir orman yakılarak tarım alanına dönüştürülüyor. Bu olayın karbon döngüsüne ve küresel iklime olası etkilerini neden–sonuç zinciriyle tartış.',
      steps: [
        { title: '1. Yanmayı değerlendir', body: 'Ağaçlar yakıldığında içlerinde depolanmış karbon karbondioksit olarak **havaya karışır.**' },
        { title: '2. Fotosentezi değerlendir', body: 'Orman ortadan kalktığında havadan karbondioksit alan fotosentez **azalır.**' },
        { title: '3. İki etkiyi birleştir', body: 'Havaya giden karbondioksit artarken havadan alınan azalır. Havadaki karbondioksit **artar.**' },
        { title: '4. Sera etkisine bağla', body: 'Artan karbondioksit sera etkisini güçlendirir ve küresel ısınmaya katkıda bulunur.' },
        { title: '5. Öbür etkileri ekle', body: 'Ormandaki canlıların yaşam alanı yok olur; toprak erozyona açık hâle gelir; bölgenin su döngüsü de etkilenebilir.' },
        { title: '6. Dili kontrol et', body: 'Bu sonuçları “olası” diliyle yaz: etkinin büyüklüğü ormanın genişliğine ve bölgenin koşullarına bağlıdır.' },
      ],
      answer:
        'Yanma havaya karbondioksit karıştırır, fotosentez azalır; havadaki karbondioksit artar ve sera etkisi güçlenerek küresel ısınmaya katkıda bulunabilir. Ayrıca canlıların yaşam alanı yok olur ve toprak zarar görebilir.',
      takeaway: 'Ormansızlaşma karbon dengesini iki yönden bozar: havaya gideni artırır, havadan alınanı azaltır.',
    },
  ],

  dailyLife: {
    title: 'Bu bilgi hayatın neresinde?',
    body: 'Madde döngüleri ve iklim değişikliği, günlük kararlarından ülkelerin politikalarına kadar her yerdedir.',
    links: [
      'Ağaçlandırma çalışmaları havadaki karbondioksitin azaltılmasına katkı sağlar.',
      'Çiftçiler baklagil yetiştirerek toprağı azot bakımından zenginleştirir.',
      'Güneşli günlerde koruyucu krem ve gözlük kullanmak morötesi ışınlara karşı korunmanın yoludur.',
      'Toplu taşıma ve bisiklet kullanımı ulaşım kaynaklı sera gazlarını azaltır.',
      'Kompost yapmak ayrıştırıcıların işini hızlandırıp atıkları toprağa geri kazandırır.',
    ],
  },

  questionClue: {
    concept: 'Madde döngüleri ve iklim sorusu',
    statement:
      'Soruda bir döngü şeması, sera etkisi modeli, ozon tabakası, orman kaybı ya da uluslararası bir anlaşma varsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Oklarla gösterilmiş bir su, karbon ya da azot döngüsü',
      'Üzeri kapalı ve açık kaplarla yapılan bir sera modeli',
      '“Sera etkisi”, “küresel ısınma”, “ozon tabakası” sözcüklerinin birlikte geçmesi',
      'Ormansızlaşma ya da fosil yakıt kullanımının anlatılması',
      'Kyoto Protokolü ya da ekolojik ayak izinden söz edilmesi',
    ],
    reasoning:
      'Bu işaretler üç beceri ister: şemadaki bir oku doğru olayla eşleştirmek, sera etkisi–küresel ısınma–ozon incelmesini ayırmak ve bir insan etkinliğinin döngü dengesini nasıl bozduğunu zincirle açıklamak.',
    boundary:
      'Bu ipuçlarını “ozon delindi, Dünya ısındı” gibi bir kısayola çevirme; bu, konunun en yaygın yanılgısıdır. Ayrıca doğal sera etkisini bir sorun olarak sunan seçeneklere dikkat et.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu üç kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir döngü şemasında numaralı okların hangi olayı gösterdiğinin sorulması',
      'Madde döngülerinin yaşam açısından öneminin yorumlanması',
      'Bir sera etkisi model deneyinin değişkenlerinin ve sonucunun yorumlanması',
      'Sera etkisi, küresel ısınma ve ozon incelmesinin ayırt edilmesi',
      'Bir insan etkinliğinin karbon dengesine etkisinin tartışılması',
      'Uluslararası önlemler ve ekolojik ayak izi ile ilgili bir çıkarım',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Doğal sera etkisi olmasaydı Dünya nasıl bir yer olurdu? Sera etkisi neden bir sorun olarak anılıyor?',
      hint: 'Sorun sera etkisinin kendisi mi, güçlenmesi mi?',
      answer:
        'Doğal sera etkisi olmasaydı yeryüzünden yayılan ısının neredeyse tamamı uzaya kaçar ve Dünya **çok soğuk**, yaşamın sürdürülemeyeceği bir yer olurdu. Yani doğal sera etkisi gereklidir. Sorun olarak anılan şey, insan etkinlikleriyle sera gazlarının artması ve sera etkisinin **güçlenmesidir**; bu güçlenme Dünya’nın ortalama sıcaklığını yükselterek küresel ısınmaya yol açar.',
    },
    {
      prompt:
        'Havadaki gazların büyük kısmı azot olduğu hâlde bitkiler neden azot eksikliği yaşayabilir?',
      hint: 'Bitkiler azotu hangi biçimde kullanabilir?',
      answer:
        'Çünkü bitkiler havadaki azot gazını **doğrudan kullanamaz.** Azotu ancak topraktaki bazı bakterilerin ve şimşeklerin oluşturduğu azotlu maddeler biçiminde, kökleriyle topraktan alabilirler. Toprakta bu maddeler azsa bitki, havada bol azot olsa bile azot eksikliği yaşayabilir. Ayrıştırıcıların ölü canlıları ayrıştırarak azotu toprağa geri kazandırması bu yüzden önemlidir.',
    },
    {
      prompt:
        'Küresel iklim değişikliğini önlemek için neden uluslararası anlaşmalar yapılır? Bir örnek ver.',
      hint: 'Sera gazları bir ülkenin sınırında kalır mı?',
      answer:
        'Sera gazları havada bütün Dünya’ya yayıldığı için bir ülkenin tek başına aldığı önlem yeterli olmaz; sorun **ortak önlem** gerektirir. Bu yüzden ülkeler uluslararası anlaşmalar yapar. **Kyoto Protokolü (1997)** gelişmiş ülkelerin sera gazı salımlarını azaltma yükümlülüğü üstlendiği ilk kapsamlı anlaşmalardan biridir; **Paris Anlaşması (2015)** ise ülkelerin kendi azaltım hedeflerini belirlediği daha kapsamlı bir anlaşmadır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey liste değil; şema okuma ve ayrım yapma',
    body:
      'Kazanımların fiilleri yön gösteriyor: döngüleri “şema üzerinde göstererek açıklar”, önemini “sorgular”, küresel iklim değişikliğinin nedenlerini ve sonuçlarını “tartışır”. Programın açıklaması sera etkisinin açıklanmasını, ekolojik ayak izinin hesaplanmasını ve uluslararası önlemlere değinilmesini ister. Bu yüzden senden sayı ezberi değil; bir döngü şemasını okuman, sera etkisini ozon incelmesinden ayırman ve bir insan etkinliğinin sonuçlarını gerekçeli biçimde tartışman beklenir.',
    measures: [
      'Su, karbon, oksijen ve azot döngülerini şema üzerinde gösterebilme',
      'Madde döngülerinin yaşam açısından önemini açıklayabilme',
      'Doğal sera etkisini güçlenmiş sera etkisinden ayırabilme',
      'Sera etkisi ile ozon incelmesini ayırt edebilme',
      'Küresel iklim değişikliğinin nedenlerini ve olası sonuçlarını tartışabilme',
      'Ekolojik ayak izi ve uluslararası önlemleri örnekleyebilme',
    ],
  },

  simulationTable: {
    title: 'Bir öğrencinin iklim konusundaki dört notu',
    columns: ['Not', 'Öğrencinin yazdığı'],
    rows: [
      ['1', 'Doğal sera etkisi Dünya’yı yaşanabilir sıcaklıkta tutar.'],
      ['2', 'Fosil yakıtların yakılması havadaki karbondioksiti artırır.'],
      ['3', 'Ozon tabakasının incelmesi küresel ısınmanın temel nedenidir.'],
      ['4', 'Ormanların korunması havadaki karbondioksitin artışını yavaşlatır.'],
    ],
    caption: 'Öğrenci, küresel iklim değişikliği konusunda çalışırken dört not almıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün öğrenci notları',
    passage: `Bir öğrenci küresel iklim değişikliği konusunda dört not alıyor. Notlar yukarıdaki tabloda verilmiştir.

Öğretmen, notlardan birinin bilimsel olarak hatalı olduğunu söylüyor.`,
    question: 'Öğretmenin işaret ettiği hatalı not hangisidir?',
    options: [
      {
        text: '1. not',
        explanation:
          'Doğal sera etkisi gerçekten Dünya’yı yaşanabilir sıcaklıkta tutar. Sorun onun varlığı değil, güçlenmesidir. Not doğrudur.',
      },
      {
        text: '2. not',
        explanation:
          'Fosil yakıtlar yakıldığında içlerindeki karbon karbondioksit olarak havaya karışır. Not doğrudur.',
      },
      {
        text: '3. not',
        explanation:
          'Doğru cevap. Ozon tabakasının incelmesi zararlı morötesi ışınlarla ilgili ayrı bir sorundur. Küresel ısınmanın temel nedeni sera gazlarının artmasıdır.',
      },
      {
        text: '4. not',
        explanation:
          'Ormanlar fotosentezle havadan karbondioksit alır. Korunmaları, havadaki karbondioksitin artışını yavaşlatır. Not doğrudur.',
      },
      {
        text: 'Hiçbiri; dört not da doğrudur',
        explanation:
          '3. not ozon incelmesini küresel ısınmanın nedeni saydığı için hatalıdır. İki sorun birbirinden farklıdır.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru dört notu tek tek sınamayı istiyor. Yöntem: her notta hangi olayın hangi sonuçla bağlandığına bak. Isıyla ilgili sonuç sera gazlarına, zararlı ışınla ilgili sonuç ozona bağlanmalıdır.',
    critical_point:
      'Kritik nokta 1. nottur. “Sera etkisi” sözcüğü olumsuz bir çağrışım yaptığı için öğrenciler doğal sera etkisini de yanlış sanabilir. Oysa doğal sera etkisi yaşam için gereklidir.',
    takeaway: 'Isı sorunu sera gazlarına, zararlı ışın sorunu ozona bağlanır. Doğal sera etkisi ise bir sorun değil, bir gerekliliktir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Madde döngüleri ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Madde döngüleri sayesinde maddeler tükenmez ve yeniden kullanılır',
        'Enerji de maddeler gibi döngü hâlinde döner',
        'Bitkiler havadaki azotu doğrudan kullanır',
        'Su döngüsünde canlıların hiçbir rolü yoktur',
      ],
      answer_index: 0,
      explanation:
        'Döngüler sayesinde su, karbon, oksijen ve azot tükenmez; canlılar ile çevre arasında dolaşarak tekrar tekrar kullanılır. Enerji ise döngü hâlinde dönmez; tek yönlü akar ve her basamakta azalır. Bitkiler havadaki azotu doğrudan kullanamaz. Canlılar terleme ve solunumla su döngüsüne katkıda bulunur.',
    },
    {
      purpose: 'apply',
      question:
        'Bir karbon döngüsü şemasında havadan bitkilere doğru çizilmiş bir karbondioksit oku hangi olayı gösterir?',
      options: [
        'Solunum',
        'Fotosentez',
        'Ayrıştırma',
        'Yanma',
      ],
      answer_index: 1,
      explanation:
        'Havadan karbondioksit alan olay fotosentezdir; bitkiler bu karbondioksiti besine dönüştürür ve havaya oksijen verir. Solunum, ayrıştırma ve yanma ise tersine havaya karbondioksit verir. Şemada okun yönünü okumak, olayı belirlemenin anahtarıdır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Sera etkisi tamamen insan kaynaklı ve zararlı bir olaydır.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Doğal sera etkisinin Dünya’yı yaşanabilir kıldığını gözden kaçırmak',
        'Ozon tabakasının görevini yanlış bilmek',
        'Azot döngüsünü karbon döngüsüyle karıştırmak',
        'Kyoto Protokolünü bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Sera etkisi doğal bir olaydır ve Dünya’yı yaşanabilir sıcaklıkta tutar; olmasaydı Dünya çok soğuk olurdu. İnsan etkinlikleri sera gazlarını artırarak bu etkiyi **güçlendirir** ve küresel ısınmaya yol açar. Sorun sera etkisinin varlığı değil, güçlenmesidir.',
    },
  ],

  summary: [
    'Madde döngüleri sayesinde su, karbon, oksijen ve azot tükenmez; tekrar tekrar kullanılır.',
    'Su döngüsü buharlaşma, terleme, yoğuşma, yağış ve akış ile güneş enerjisiyle çalışır.',
    'Karbon ve oksijen döngüsünü fotosentez, solunum, ayrıştırma ve yanma yürütür.',
    'Bitkiler havadaki azotu doğrudan kullanamaz; toprak bakterileri ve şimşekler azotu kullanılabilir hâle getirir.',
    'Dört döngünün ortak halkası ayrıştırıcılardır.',
    'Doğal sera etkisi Dünya’yı yaşanabilir sıcaklıkta tutar.',
    'Sera gazlarının artmasıyla sera etkisi güçlenir ve küresel ısınma oluşur.',
    'Fosil yakıt kullanımı ve ormansızlaşma havadaki karbondioksiti artırır.',
    'Küresel ısınmanın olası sonuçları buzul erimesi, deniz seviyesinin yükselmesi, kuraklık ve aşırı hava olaylarıdır.',
    'Ozon tabakası zararlı morötesi ışınları tutar; incelmesi küresel ısınmadan farklı bir sorundur.',
    'Kyoto Protokolü ve Paris Anlaşması iklim değişikliğine karşı ortak uluslararası önlemlerdir.',
    'Ekolojik ayak izi tüketimimizin doğada bıraktığı izin ölçüsüdür; tüketim azaldıkça küçülür.',
  ],

  next: [
    'Sürdürülebilir Kalkınma ve Geri Dönüşüm (F.8.6.4.1–F.8.6.4.5)',
    'Elektrik Enerjisinin Dönüşümü ve Güç Santralleri (F.8.7.3 — enerji kaynakları)',
    'Asit Yağmurları: Zinciri Nerede Kırabiliriz? (tekrar için)',
  ],
})

export default lesson
