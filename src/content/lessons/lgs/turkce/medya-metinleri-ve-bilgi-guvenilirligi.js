import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Medya Metinleri ve Bilgi Güvenilirliği
 * Kazanım : T.8.3.29 · T.8.3.30 · T.8.3.31 · T.8.1.11
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI
 * T.8.3.29'un açıklaması beş amacı AÇIKÇA sayar: kültür aktarma, olay
 * yorumlama, bilgilendirme, eğlendirme, ikna etme.
 * T.8.3.31'in açıklaması iki ölçüt verir: blog ve şahsi internet
 * sayfalarının güvenilirliği; bilimsel çalışmalarda "edu" ve "gov"
 * uzantılı sitelerin kullanıldığı vurgusu.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-medya-metinleri-ve-bilgi-guvenilirligi',
  topic: 'Metin Türleri',
  order: 2,
  title: 'Medya Metinleri ve Bilgi Kaynağının Güvenilirliği',
  subtitle:
    'Her medya metni bir amaçla yazılır. Amacı görmeden içeriği değerlendirmek, ikna edilmeyi fark etmemektir.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.29', metin: 'Medya metinlerini analiz eder.' },
    { kod: 'T.8.3.30', metin: 'Bilgi kaynaklarını etkili bir şekilde kullanır.' },
    { kod: 'T.8.3.31', metin: 'Bilgi kaynaklarının güvenilirliğini sorgular.' },
    { kod: 'T.8.1.11', metin: 'Dinledikleri/izledikleri medya metinlerini değerlendirir.' },
  ],
  prerequisites: [
    { topic: 'Öznel–nesnel yargı ve bakış açısı', why: 'Medya metninin tutumunu görmek bu ayrımı gerektirir.' },
    { topic: 'Metin türleri', why: 'Medya metinleri de bir tür içinde yazılır; türü tanımak amacı görmeyi kolaylaştırır.' },
  ],
  outcomes: [
    'Bir medya metninin amacını programın saydığı beş amaçtan biriyle adlandırabileceksin.',
    'Bilgi veren bir metnin aslında ikna etmeyi amaçlayıp amaçlamadığını ayırabileceksin.',
    'Bir bilgi kaynağının güvenilirliğini ölçütlerle sorgulayabileceksin.',
    'Blog ve şahsi sayfalarla kurumsal kaynakları ayırabileceksin.',
    'Medya metinlerinde failin gizlenmesi gibi dil tercihlerini fark edebileceksin.',
  ],

  opening: {
    title: 'Bu metin benden ne istiyor?',
    lead: 'Medya metinleri seni bilgilendirmek için yazılmış olabilir — ya da bir şeye ikna etmek için. İkisi aynı görünür.',
    body: `Bir afişte şunu okuduğunu düşün: “Çocukların yüzde sekseni günde iki saatten fazla ekran karşısında. Yeni kitap kulübümüz her cumartesi açık.”

Birinci cümle bir bilgi veriyor. İkinci cümle bir davet. İkisi yan yana konduğunda ortaya çıkan metin yalnız bilgilendirmiyor; seni bir şeye **yönlendiriyor**. Bilgi burada bir araç.

İşte medya metinlerini okumanın kalbi budur: **bu metin benden ne istiyor?**

MEB 8. sınıf programındaki **T.8.3.29** kazanımı medya metinlerinin analizini ister ve açıklamasında beş amacı **açıkça sayar**: **kültür aktarma, olay yorumlama, bilgilendirme, eğlendirme, ikna etme.** Bu beş amaç, konunun çerçevesidir.

Yanına iki kazanım daha eklenir. **T.8.3.30**, bilgi kaynaklarının etkili kullanılmasını ister. **T.8.3.31** ise kaynakların güvenilirliğinin sorgulanmasını ve açıklamasında iki somut ölçüt verir: blog ve şahsi internet sayfalarındaki bilgilerin güvenilirliği üzerine çalışılması; bilimsel çalışmalarda ağırlıklı olarak **“edu”** ve **“gov”** uzantılı sitelerin kullanıldığının vurgulanması.

Dinleme tarafında **T.8.1.11** aynı beceriyi ister: dinlenen ve izlenen medya metinlerinin amacının ve kaynağının sorgulanması.

Bu ders iki soruyu kuracak:

**1. Bu metnin amacı ne?** (beş amaçtan hangisi)
**2. Bu bilgiye neden güvenmeliyim?** (kaynak sorgusu)

İki soru, dört kazanım. Ve ikisi de aynı alışkanlığı kuruyor: metne inanmadan önce ona bakmak.`,
  },

  concepts: [
    {
      term: 'Medya metni',
      body: 'Gazete haberi, köşe yazısı, reklam, afiş, karikatür, broşür, internet sayfası, sosyal medya paylaşımı gibi kitle iletişim araçlarıyla yayılan metinlerdir. Yazılı olabileceği gibi görsel ve işitsel de olabilir.',
    },
    {
      term: 'Bilgilendirme amacı',
      body: 'Metnin okuru bir konu hakkında haberdar etmesidir: hava durumu, duyuru, tarife, ansiklopedi maddesi. Ton tarafsızdır ve bir görüş dayatılmaz.',
    },
    {
      term: 'İkna etme amacı',
      body: 'Okuru bir düşünceye ya da davranışa yöneltmektir: reklam, kampanya afişi, çağrı metni. Bilgi kullanabilir; ama bilgi burada amaç değil araçtır.',
    },
    {
      term: 'Olay yorumlama amacı',
      body: 'Gerçekleşmiş bir olayın nedenleri ve sonuçları üzerine yazarın değerlendirmesini sunmaktır. Köşe yazıları ve haber yorumları bu amaca hizmet eder.',
    },
    {
      term: 'Kültür aktarma ve eğlendirme',
      body: '**Kültür aktarma**, bir toplumun değerlerini, geleneklerini ve birikimini yeni kuşaklara taşır: belgesel, halk hikâyesi derlemesi. **Eğlendirme**, okurun hoşça vakit geçirmesini amaçlar: mizah köşesi, karikatür.',
    },
    {
      term: 'Kaynak güvenilirliği',
      body: 'Bir bilginin kim tarafından, hangi amaçla ve hangi dayanakla yayımlandığının sorgulanmasıdır. Programın ölçütleri: blog ve şahsi sayfalara dikkat; bilimsel çalışmalarda “edu” ve “gov” uzantılı siteler.',
    },
  ],

  why: {
    question: 'Neden “bilgi veriyor” demek bir metni güvenilir yapmaz?',
    body: `Çünkü bilgi vermek bir **amaç** olabileceği gibi bir **araç** da olabilir.

Bir reklamı düşün: “Bu kalem, yazarken yüzde otuz daha az basınç gerektirir.” Cümle bir bilgi veriyor ve büyük olasılıkla doğru. Ama metnin amacı seni bilgilendirmek değil, kalemi almaya **ikna etmek**. Bilgi, ikna aracının parçası.

Aynı şey kampanya afişlerinde, tanıtım broşürlerinde ve pek çok sosyal medya paylaşımında geçerlidir. Bu metinler yalan söylemek zorunda değildir; **seçerek doğru söylemek** yeterlidir. Ürünün iyi yanları anlatılır, zayıf yanları anlatılmaz.

Bu yüzden amacı belirlemek, içeriği değerlendirmenin ilk adımıdır. Amacı görmeden içeriğe inanan okur, seçilmiş bir doğruyu bütün gerçek sanır.

İkinci soru kaynak sorusudur. Programın **T.8.3.31** kazanımı bunu açıkça ister ve iki somut ölçüt verir.

**Birinci ölçüt:** blog ve şahsi internet sayfalarındaki bilgiler denetimden geçmemiş olabilir. Bir kişi kendi sayfasında istediğini yazabilir; onu denetleyen bir kurum yoktur. Bu, o bilginin yanlış olduğu anlamına gelmez; **doğruluğunun garanti altında olmadığı** anlamına gelir.

**İkinci ölçüt:** bilimsel çalışmalarda ağırlıklı olarak “edu” (eğitim kurumları) ve “gov” (resmî kurumlar) uzantılı siteler kullanılır. Bu uzantılar, arkasında bir kurumun bulunduğunu ve bilginin bir denetimden geçtiğini gösterir.

Bir uyarı: uzantı tek başına mutlak bir garanti değildir. Ama bir ilk elemedir ve 8. sınıf düzeyinde programın verdiği ölçüt budur.

Üçüncü bir alışkanlık daha kur: **paylaşım sayısı güvenilirlik göstergesi değildir.** Bir bilginin çok paylaşılması, çok kişinin ona inandığını gösterir; doğru olduğunu değil.`,
  },

  decision: {
    title: 'Medya metnini çözümleme yolu',
    lead: 'Önce amacı, sonra kaynağı, en sonunda içeriği değerlendir. Sıra değişirse yanılırsın.',
    intro:
      'Bir medya metniyle karşılaştığında şu beş durağı uygula.',
    steps: [
      {
        title: '1. Metnin kanalını belirle',
        body: 'Bu bir haber mi, reklam mı, afiş mi, karikatür mü, sosyal medya paylaşımı mı? Kanal, amaç hakkında ilk ipucunu verir.',
      },
      {
        title: '2. “Bu metin benden ne istiyor?” sor',
        body: 'Beş amacı sırayla dene: bilgilendirme, ikna etme, olay yorumlama, eğlendirme, kültür aktarma. Metin bir davranış ya da görüş benimsetmeye çalışıyorsa amaç ikna etmedir.',
      },
      {
        title: '3. Kaynağı sor',
        body: 'Kim yazdı? Arkasında bir kurum var mı? Kişisel bir sayfa mı, kurumsal bir site mi? Kaynağı bulamıyorsan bu başlı başına bir uyarıdır.',
      },
      {
        title: '4. Güvenilirlik ölçütlerini uygula',
        body: 'Blog ya da şahsi sayfa mı? Bilimsel bir iddia için “edu” ya da “gov” uzantılı bir kaynak var mı? Bilgi başka bir kaynakta doğrulanabiliyor mu?',
      },
      {
        title: '5. Dil tercihlerini kontrol et',
        body: 'Metin failini gizliyor mu (“yapıldı”, “belirtiliyor”)? Yüklü sözcükler mi seçilmiş? Bu tercihler amacı ele verir.',
      },
    ],
    takeaway: 'Bir metne inanmadan önce ona bak: amacı ne, kaynağı kim?',
  },

  decisionTree: {
    title: 'Metnin amacı hangisi?',
    intro:
      'Üç kontrol, beş amacı ayırır. Birinci kontrol en sık karıştırılan ikiliyi çözer.',
    checks: [
      {
        question: 'Metin, okuru bir davranışa ya da görüşe yöneltmeye mi çalışıyor?',
        yes: 'Amaç **ikna etmedir** — metin bilgi verse bile. Örnek: reklam, kampanya afişi.',
        no: 'Yönlendirme yok; ikinci kontrole geç.',
      },
      {
        question: 'Metin gerçekleşmiş bir olayı değerlendiriyor mu?',
        yes: 'Amaç **olay yorumlamadır**. Örnek: köşe yazısı, haber yorumu.',
        no: 'Değerlendirme yok; üçüncü kontrole geç.',
      },
      {
        question: 'Metin okuru hoşça vakit geçirtmeye mi, bir geleneği aktarmaya mı çalışıyor?',
        yes: 'Hoşça vakit geçirtiyorsa **eğlendirme**, gelenek ve değer aktarıyorsa **kültür aktarmadır**.',
        no: 'Geriye **bilgilendirme** kalır: metin yalnız haberdar ediyordur.',
      },
    ],
    takeaway:
      'Bilgilendirmeyi sona koyduk; çünkü öteki dördü bulunmadığında kalan amaç odur. Öğrencilerin en sık hatası, ikna etmeyi bilgilendirme sanmaktır.',
  },

  comparison: {
    title: 'En çok karıştırılan üç amaç',
    columns: ['Bilgilendirme', 'İkna etme', 'Olay yorumlama'],
    rows: [
      { label: 'Metin ne yapıyor?', values: ['Haberdar ediyor', 'Yönlendiriyor', 'Değerlendiriyor'] },
      { label: 'Bilgi kullanımı', values: ['Amaç', 'Araç', 'Dayanak'] },
      { label: 'Örnek', values: ['Hava durumu, tarife, duyuru', 'Reklam, kampanya afişi', 'Köşe yazısı, haber yorumu'] },
      { label: 'Ton', values: ['Tarafsız', 'Olumlu yanları öne çıkaran', 'Görüş bildiren'] },
      { label: 'Tanıma sorusu', values: ['Benden bir şey isteniyor mu? Hayır.', 'Bir davranışa mı yöneltiyor?', 'Gerçekleşmiş bir olay mı değerlendiriliyor?'] },
      { label: 'Sık yapılan hata', values: ['—', 'Bilgi verdiği için bilgilendirme sanmak', 'Haber metni sanmak'] },
    ],
    insight:
      'Reklam da doğru bilgi verebilir. Amacı belirleyen şey bilginin doğruluğu değil, metnin okurdan ne istediğidir.',
  },

  traps: [
    {
      title: 'Bilgi veren her metni bilgilendirme saymak',
      wrong: 'Reklamda bir oran verilmiş; öyleyse metnin amacı bilgilendirmedir.',
      right: 'Metin beni bir ürüne yöneltiyorsa amacı ikna etmedir; verdiği bilgi bu amacın aracıdır.',
      body: 'Ölçüt bilginin varlığı değil, metnin okurdan ne istediğidir. “Bu metin benden ne istiyor?” sorusu bunu her seferinde ayırır.',
    },
    {
      title: 'Paylaşım sayısını güvenilirlik saymak',
      wrong: 'Bu bilgi binlerce kez paylaşılmış; doğru olmalı.',
      right: 'Paylaşım sayısı, çok kişinin inandığını gösterir; bilginin doğru olduğunu değil. Kaynağa bakarım.',
      body: 'Yaygınlık bir kanıt değildir. Kaynağı belirsiz bir bilgi, ne kadar yayılırsa yayılsın doğrulanmamış kalır.',
    },
    {
      title: 'Kaynağı hiç sormamak',
      wrong: 'Metin mantıklı görünüyor; kaynağına bakmama gerek yok.',
      right: 'Kaynağı bulamadığım bir bilgiyi doğrulanmış saymam. Kaynak sorusu, içerik değerlendirmesinden önce gelir.',
      body: 'Program T.8.3.31 kazanımıyla bunu doğrudan ister: bilgi kaynaklarının güvenilirliğinin sorgulanması.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-medya-amaclar',
      title: 'Beş amaç ve nasıl tanınır',
      lead: 'Program beş amacı açıkça sayıyor. Her birinin metinde bıraktığı bir iz var.',
      blocks: [
        {
          id: 'lgs-medya-amac-anlatim',
          type: 'prose',
          body: `**Bilgilendirme.** Metin okuru bir konuda haberdar eder ve bir görüş dayatmaz. Hava durumu, otobüs tarifesi, okul duyurusu, ansiklopedi maddesi. Tonu tarafsızdır; yargı bildiren sözcükler azdır. Tanıma sorusu: “Benden bir şey isteniyor mu?” Hayırsa bilgilendirme olabilir.

**İkna etme.** Metin okuru bir davranışa ya da görüşe yöneltir. Reklamlar, kampanya afişleri, bağış çağrıları, tanıtım broşürleri. Bu metinler bilgi verebilir; ama bilgi seçilmiştir: olumlu yanlar öne çıkarılır. Tanıma işaretleri: emir ve öneri cümleleri (“hemen başvurun”, “kaçırmayın”), abartılı sıfatlar, çağrı ifadeleri.

**Olay yorumlama.** Gerçekleşmiş bir olay üzerine yazarın değerlendirmesi sunulur. Köşe yazıları ve haber yorumları bu amaca hizmet eder. Haber metninden farkı, yazarın **görüş bildirmesidir**. Haber “ne oldu?” sorusunu cevaplar; yorum “bu ne anlama geliyor?” sorusunu.

**Eğlendirme.** Metnin amacı okurun hoşça vakit geçirmesidir: mizah köşeleri, karikatürler, eğlence programları. Bu metinler bir görüş de bildirebilir; ama baskın amaç eğlendirmedir.

**Kültür aktarma.** Bir toplumun değerlerini, geleneklerini ve birikimini yeni kuşaklara taşır: halk hikâyesi derlemeleri, gelenekleri anlatan belgeseller, yöresel tanıtım yazıları.

Bu beşi ayırırken en çok zorlanacağın yer **bilgilendirme ile ikna etme** arasıdır; çünkü ikna eden metinler neredeyse her zaman bilgi verir. Ayrımı yapan soru şudur: metin bittiğinde benden bir şey **yapmam** bekleniyor mu?

İkinci zorluk **olay yorumlama ile bilgilendirme** arasındadır. Bir haber metni olayı aktarır (bilgilendirme); bir köşe yazısı aynı olayı değerlendirir (olay yorumlama). Ayrımı, yazarın görüş bildirip bildirmediği yapar — bu ayrımı öznel–nesnel dersinde kurmuştuk.

Bir metin birden çok amaca hizmet edebilir. Soru genellikle **baskın amacı** sorar: metnin varlık sebebi ne?`,
        },
        {
          id: 'lgs-medya-amac-tablo',
          type: 'table',
          interactive: true,
          title: 'Amacı metindeki izinden tanı',
          columns: ['Amaç', 'Metindeki izi', 'Özgün örnek', 'Tanıma sorusu'],
          rows: [
            ['Bilgilendirme', 'Tarafsız ton, yargı yok', 'Kütüphane 12 Eylül’de açılacak; çalışma saatleri 09.00–17.00.', 'Benden bir şey isteniyor mu?'],
            ['İkna etme', 'Çağrı, öneri, seçilmiş bilgi', 'Yeni kitap kulübümüze hemen katıl; ilk ay ücretsiz!', 'Bir davranışa mı yöneltiyor?'],
            ['Olay yorumlama', 'Gerçekleşmiş olay + görüş', 'Kütüphanenin açılması güzel; asıl soru raflarda ne olacağı.', 'Olay değerlendiriliyor mu?'],
            ['Eğlendirme', 'Mizah, şaşırtma, oyun', 'Kütüphanede sessizliğin rekorunu kıran öğrenciye madalya verilecekmiş!', 'Hoşça vakit mi geçirtiyor?'],
            ['Kültür aktarma', 'Gelenek, değer, birikim', 'Kasabada kitapların elden ele dolaştığı “okuma odaları” geleneği yüz yıllıktır.', 'Bir birikim mi aktarılıyor?'],
          ],
          caption:
            'Beş satır da aynı konuyu (kütüphane) ele alıyor. Amacı belirleyen şey konu değil, metnin okurdan ne istediğidir.',
        },
        {
          id: 'lgs-medya-amac-analiz',
          type: 'sentence_analysis',
          title: 'Bir afişte amaç nerede belli oluyor?',
          prompt:
            'Aşağıdaki afiş metnini parçalara ayırdık. Her parçaya tıklayarak amacın hangi adımda belli olduğunu gör.',
          segments: [
            {
              text: 'Araştırmalara göre günde yirmi dakika okuyan öğrenciler,',
              label: 'Bilgi gibi başlıyor',
              explanation:
                'Metin bir veriyle açılıyor. Bu, güven kurmanın klasik yoludur. Buraya kadar metin bilgilendirme gibi görünüyor.',
              tone: 'aqua',
            },
            {
              text: 'okuduğunu anlama sınavlarında daha başarılı oluyor.',
              label: 'Bilgi sürüyor',
              explanation:
                'Veri tamamlanıyor. Hâlâ bir yönlendirme yok. Öğrencilerin çoğu metni burada “bilgilendirme” diye etiketleyip durur.',
              tone: 'muted',
            },
            {
              text: 'Sen de kulübümüze katıl:',
              label: 'Amaç ortaya çıkıyor',
              explanation:
                'İşte yönlendirme. Metin artık benden bir şey istiyor. Amaç bilgilendirme değil **ikna etme**; önceki iki cümle bu amacın aracıydı.',
              tone: 'brand',
            },
            {
              text: 'her cumartesi 10.00’da, okul kütüphanesinde!',
              label: 'Çağrıyı tamamlayan ayrıntı',
              explanation:
                'Yer ve zaman bilgisi, çağrının uygulanabilir olmasını sağlıyor. Ünlem de çağrı tonunu pekiştiriyor.',
              tone: 'success',
            },
          ],
          takeaway:
            'Metnin amacı çoğu zaman son cümlede belli olur. Bu yüzden metni sonuna kadar okumadan amaç kararı verme.',
        },
        {
          id: 'lgs-medya-amac-hoca',
          type: 'teacher_note',
          tone: 'warning',
          body:
            'İkna etmeyi amaçlayan metinler genellikle bilgiyle başlar. Bunun sebebi güven kurmaktır. Metni sonuna kadar okumadan “bilgilendirme” demek, en sık yapılan hatadır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-medya-kaynak',
      title: 'Kaynak güvenilirliği: programın verdiği ölçütler',
      lead: 'Program iki somut ölçüt veriyor. Onlara birkaç pratik soru ekleyeceğiz.',
      blocks: [
        {
          id: 'lgs-medya-kaynak-anlatim',
          type: 'prose',
          body: `**T.8.3.31** kazanımının açıklaması iki şey söyler:

**a)** Blog ve şahsi internet sayfalarındaki bilgilerin güvenilirliği konusunda çalışmalar yapılır.
**b)** Bilimsel çalışmalarda ağırlıklı olarak **“edu”** ve **“gov”** uzantılı sitelerin kullanıldığı vurgulanır.

Bu iki ölçütü açalım.

**Blog ve şahsi sayfalar.** Bir kişi kendi sayfasında istediğini yazabilir ve onu denetleyen bir kurum yoktur. Bu, yazılanların yanlış olduğu anlamına gelmez; **doğruluğunun bir kurum tarafından güvence altına alınmadığı** anlamına gelir. Bir bilgiyi böyle bir kaynaktan aldıysan, onu ikinci bir kaynaktan doğrulaman gerekir.

**“edu” ve “gov” uzantıları.** “edu” eğitim kurumlarına, “gov” resmî devlet kurumlarına aittir. Türkiye’de bu uzantılar “edu.tr” ve “gov.tr” biçiminde kullanılır. Bu uzantılar, arkasında bir kurumun bulunduğunu ve içeriğin bir denetimden geçtiğini gösterir.

Bu ölçütlerin yanına dört pratik soru ekleyebilirsin.

**Kim yazdı?** Yazarın adı ve uzmanlığı belirtilmiş mi? Belirtilmemişse bu bir uyarı işaretidir.
**Ne zaman yazıldı?** Bilgi güncel mi? Bazı konularda beş yıllık bir bilgi artık geçerli olmayabilir.
**Dayanağı ne?** İddia bir kaynağa mı dayanıyor, yoksa yalnız yazarın görüşüne mi?
**Başka yerde doğrulanabiliyor mu?** Aynı bilgi bağımsız bir kaynakta da var mı?

Bir uyarı: uzantı tek başına mutlak garanti değildir; bir **ilk elemedir**. Bir devlet sitesinde de eski bir bilgi bulunabilir. Ama 8. sınıf düzeyinde programın verdiği ölçüt budur ve iyi bir başlangıçtır.

**T.8.3.30** kazanımı ise kaynakların **etkili kullanılmasını** ister. Bunun karşılığı şudur: bir araştırma yaparken önce ne aradığını netleştir, sonra kaynağı seç, en sonunda bilgiyi kendi cümlelerinle aktar ve kaynağı belirt. Kaynak göstermek, hem doğruluk hem dürüstlük meselesidir.`,
        },
        {
          id: 'lgs-medya-kaynak-tablo',
          type: 'table',
          interactive: true,
          title: 'Kaynağı sorgula',
          columns: ['Soru', 'Güvenilirliği artıran', 'Güvenilirliği azaltan', 'Ne yapmalı?'],
          rows: [
            ['Kim yazdı?', 'Adı ve uzmanlığı belirtilmiş', 'Yazarı belirsiz', 'Yazarı bulunamıyorsa ikinci kaynak ara'],
            ['Arkasında kurum var mı?', '“edu.tr”, “gov.tr” uzantılı', 'Şahsi blog, kişisel sayfa', 'Kurumsal bir kaynakta doğrula'],
            ['Ne zaman yazıldı?', 'Tarih belirtilmiş ve güncel', 'Tarih yok ya da çok eski', 'Güncel bir kaynakla karşılaştır'],
            ['Dayanağı ne?', 'Kaynak gösterilmiş', 'Yalnız yazarın görüşü', 'Dayanağı olmayan iddiayı aktarma'],
            ['Doğrulanabiliyor mu?', 'Bağımsız kaynakta da var', 'Yalnız tek yerde geçiyor', 'Tek kaynağa dayanma'],
            ['Amacı ne?', 'Bilgilendirme', 'İkna etme ya da satış', 'Amacı gördükten sonra içeriği değerlendir'],
          ],
          caption:
            'Altı soru bir kontrol listesi gibi kullanılabilir. Üçünden fazlasına olumsuz cevap geliyorsa kaynağa dayanma.',
        },
        {
          id: 'lgs-medya-kaynak-tuzak',
          type: 'trap',
          title: '“Blog demek yanlış demek” sanmak',
          wrong: 'Bilgi bir blogda yazıyor; öyleyse yanlıştır.',
          right: 'Blogdaki bilgi yanlış olmak zorunda değildir; yalnız bir kurum tarafından denetlenmemiştir. Doğrulamak gerekir.',
          body: 'Program “güvenilirliğini sorgular” diyor, “kullanmaz” demiyor. Sorgulamak, reddetmek değil denetlemektir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-medya-dil',
      title: 'Medya metinlerinde dil tercihleri',
      lead: 'Amaç yalnız içerikte değil, dilde de görünür. Üç tercih, metnin niyetini ele verir.',
      blocks: [
        {
          id: 'lgs-medya-dil-anlatim',
          type: 'prose',
          body: `Bir metnin amacını anlamak için içeriğine bakmak yetmez; **nasıl yazıldığına** da bakmak gerekir. Üç dil tercihi özellikle bilgi verir.

**Birinci tercih: failin gizlenmesi.** Fiilde Çatı dersinde gördük: “Bazı hatalar yapıldı.” cümlesinde kimin hata yaptığı söylenmiyor. Medya metinlerinde bu tercih sorumluluk görünmesin diye kullanılabilir. “Karar alındı” ile “Kurul karar aldı” aynı olayı anlatır; birincisi karar alanı gizler.

Bunu her gördüğünde metin kötü niyetlidir demek doğru olmaz. Bazen fail gerçekten bilinmez, bazen önemsizdir. Ama fark etmen gerekir: **kim yaptı sorusunun cevabı verilmiş mi?**

**İkinci tercih: yüklü sözcükler.** Aynı olay farklı sözcüklerle anlatılabilir ve her sözcük bir tutum taşır. “Yenilendi”, “elden geçirildi”, “aceleye getirildi” — üçü de bir onarımı anlatır, üçü farklı bir yargı bildirir. Bakış Açısı dersinde bu ayrımı kurmuştuk; medya metinlerinde doğrudan işine yarar.

**Üçüncü tercih: ayrıntı seçimi.** Bir metin neyi anlatmayı seçmişse, seni oraya baktırıyordur. Bir tanıtım yazısı yalnız olumlu ayrıntıları seçer; bir eleştiri yazısı yalnız sorunlu olanları. İkisi de yalan söylemeyebilir; ama ikisi de eksik anlatır.

Bu üç tercih birlikte okunduğunda metnin amacı neredeyse her zaman görünür hâle gelir.

Son olarak **görsellerin** rolünü ekleyelim. Bir haberin yanına konan fotoğraf, metinde yazmayan bir yargı taşıyabilir. Bir afişteki renk ve punto seçimi, hangi bilgiyi öne çıkardığını gösterir. Görsel okuma bir sonraki derste ayrı bir konu olarak işlenecek; şimdilik şunu not et: **medya metninde görsel de metnin parçasıdır.**

Bütün bu çözümleme tek bir alışkanlığa dayanır: metne inanmadan önce ona bakmak. Program bunu “analiz eder” ve “sorgular” fiilleriyle ister.`,
        },
        {
          id: 'lgs-medya-dil-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Aynı olay, iki metin',
          columns: ['Fail görünür, tarafsız', 'Fail gizli, yüklü'],
          rows: [
            { label: 'Cümle', values: ['Kurul, bakım çalışmasını haziranda başlattı.', 'Bakım çalışması nihayet başlatıldı.'] },
            { label: 'Fail', values: ['Belirtilmiş: kurul', 'Gizlenmiş'] },
            { label: 'Yüklü sözcük', values: ['Yok', '“Nihayet” bir sabırsızlık yargısı taşıyor'] },
            { label: 'Okurda bıraktığı', values: ['Bilgi', 'Bilgi + değerlendirme'] },
            { label: 'Baskın amaç', values: ['Bilgilendirme', 'Olay yorumlama'] },
          ],
          insight:
            'İki cümle de doğru olabilir. Fark, okurun neyi görmesinin istendiğidir.',
        },
        {
          id: 'lgs-medya-dil-tuzak',
          type: 'trap',
          title: 'Edilgen her cümleyi “gizleme” saymak',
          wrong: '“Sınav sonuçları açıklandı.” — fail gizlenmiş, demek ki bir şey saklanıyor.',
          right: 'Burada failin kim olduğu bilgi değeri taşımıyor. Failin gizlenmesi her zaman kötü niyet değildir; bazen gereksizdir.',
          body: 'Doğru alışkanlık, failin gizlendiğini **fark etmek** ve gerekiyorsa sormaktır — her seferinde suçlamak değil.',
        },
        {
          id: 'lgs-medya-dil-hafiza',
          type: 'memory',
          title: 'İki soruluk medya kontrolü',
          body: '**Bu metin benden ne istiyor?** · **Bu bilgiye neden güvenmeliyim?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Amacı belirle',
      prompt:
        'Metin: “Okul kütüphanemiz 12 Eylül Pazartesi günü hizmete açılacaktır. Çalışma saatleri hafta içi 09.00–17.00, cumartesi 10.00–14.00 olarak belirlenmiştir.” Bu metnin amacı nedir?',
      steps: [
        { title: '1. durak — kanal', body: 'Bir okul duyurusu. Duyurular genellikle bilgilendirme amacı taşır ama bu yeterli değil.' },
        { title: '2. durak — benden bir şey isteniyor mu?', body: 'Hayır. Metin bir davranışa yöneltmiyor, yalnız haberdar ediyor. → İkna etme değil.' },
        { title: '3. durak — olay değerlendiriliyor mu?', body: 'Hayır; hiçbir yargı yok. → Olay yorumlama değil.' },
        { title: '4. durak — eğlendirme ya da kültür aktarma var mı?', body: 'Hayır. Mizah yok, gelenek aktarımı yok.' },
        { title: '5. durak — kararı ver', body: 'Geriye **bilgilendirme** kalıyor. Ton tarafsız, yargı yok, çağrı yok.' },
      ],
      answer: 'Bilgilendirme.',
      takeaway: 'Bilgilendirme, öteki dört amaç bulunmadığında kalan amaçtır.',
    },
    {
      title: 'Seviye 2 — Bilgi mi, ikna mı?',
      prompt:
        'Metin: “Bir araştırmaya göre düzenli okuyan öğrencilerin kelime dağarcığı daha geniş. Yeni okuma kulübümüz her cumartesi açık; ilk ay katılım ücretsiz. Yerini ayırt!” Bu metnin amacı nedir?',
      steps: [
        { title: 'Metni sonuna kadar oku', body: 'İlk cümle bilgi veriyor. Karar vermek için sonu beklemek gerekiyor.' },
        { title: 'Yönlendirme var mı?', body: '“Yerini ayırt!” bir emir cümlesi ve doğrudan bir davranış çağrısı. → Yönlendirme var.' },
        { title: 'Bilginin rolünü belirle', body: 'İlk cümledeki araştırma verisi, çağrıya zemin hazırlıyor. Bilgi burada amaç değil araç.' },
        { title: 'Çeldiriciyi öngör', body: '“Bilgilendirme” seçeneği inandırıcı görünür; çünkü metin gerçekten bilgi veriyor. Ama metnin varlık sebebi bu değil.' },
        { title: 'Kararı ver', body: 'Baskın amaç **ikna etmedir**. Doğru bilgi vermesi bu sonucu değiştirmez.' },
      ],
      answer: 'İkna etme.',
      takeaway:
        'İkna eden metinler neredeyse her zaman bilgiyle başlar. Metni sonuna kadar okumadan karar verme.',
    },
    {
      title: 'Seviye 3 — Kaynağı sorgula',
      prompt:
        'Bir öğrenci ödevi için şu bilgiyi buluyor: “Türkiye’de ortaokul öğrencilerinin yüzde yetmişi haftada en az bir kitap okuyor.” Bilgi, yazarı belirtilmemiş bir kişisel blogda, tarihsiz bir yazıda geçiyor. Öğrenci ne yapmalı?',
      steps: [
        { title: 'Kim yazdı?', body: 'Yazar belirtilmemiş. Birinci uyarı işareti.' },
        { title: 'Arkasında kurum var mı?', body: 'Kişisel blog; “edu.tr” ya da “gov.tr” uzantılı bir kurum kaynağı değil. İkinci uyarı işareti.' },
        { title: 'Ne zaman yazıldı?', body: 'Tarih yok. Bilginin güncelliği bilinmiyor. Üçüncü uyarı işareti.' },
        { title: 'Dayanağı ne?', body: 'Oran veriliyor ama hangi araştırmadan alındığı söylenmiyor. Dördüncü uyarı işareti.' },
        { title: 'Ne yapmalı?', body: 'Bu bilgiyi olduğu gibi kullanmamalı. Aynı veriyi resmî bir kurum kaynağında (örneğin bir bakanlık ya da üniversite sitesinde) aramalı; bulamazsa ödevinde bu iddiaya yer vermemeli.' },
      ],
      answer:
        'Bilgiyi kullanmadan önce kurumsal ve tarihli bir kaynakta doğrulamalı; doğrulayamazsa kullanmamalı.',
      takeaway:
        'Dört uyarı işaretinden üçü birden varsa kaynağa dayanmak risklidir. Sorgulamak, reddetmek değil denetlemektir.',
    },
  ],

  questionClue: {
    concept: 'medya metni ve kaynak sorusu',
    statement:
      'Soru kökünde “bu metnin amacı”, “hangi amaçla yazılmıştır”, “kaynağın güvenilirliği”, “hangisi doğrulanmalıdır” ifadelerinden biri varsa, sorulan şey içerik değil niyet ve kaynaktır.',
    clues: [
      'Metnin bir afiş, reklam, duyuru ya da haber biçiminde verilmesi',
      'Metinde çağrı ve emir cümlelerinin bulunması',
      'Soru kökünde “amaç / kaynak / güvenilirlik” terimleri',
      'İnternet adresi ya da site uzantısının verilmesi',
      'Aynı olayın iki farklı metinde anlatılması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, metnin bilgi vermesiyle amacını karıştırıp karıştırmadığını ölçüyor. Çözüm yolu metni sonuna kadar okuyup “bu metin benden ne istiyor?” sorusunu cevaplamaktır.',
    boundary:
      'Bu ipuçlarını “veri varsa bilgilendirme” gibi bir kısayola çevirme. Reklamlar da veri kullanır; belirleyici olan metnin okurdan ne istediğidir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir afiş, duyuru ya da reklam metninin amacının sorulması',
      'Aynı olayı anlatan iki metnin amaç farkının sorulması',
      'Bir bilgi kaynağının güvenilirliğinin değerlendirilmesi',
      'Hangi kaynağın bilimsel bir çalışmada tercih edileceğinin sorulması',
      'Bir metinde hangi bilginin doğrulanması gerektiğinin sorulması',
      'Medya metnindeki dil tercihlerinin (fail gizleme, yüklü sözcük) fark ettirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir broşürde “Bu spor salonunda haftada üç gün antrenman yapanların dayanıklılığı altı ayda belirgin biçimde artıyor. Hemen üye ol!” yazıyor. Metnin amacı nedir?',
      hint: 'Metin bittiğinde benden bir şey yapmam bekleniyor mu?',
      answer:
        'İkna etme. İlk cümle bir bilgi veriyor ama ikinci cümle doğrudan bir davranış çağrısı: “Hemen üye ol!” Bilgi burada amacın aracıdır. Metin bilgi verdiği için “bilgilendirme” demek, en sık yapılan hatadır; belirleyici olan metnin okurdan ne istediğidir.',
    },
    {
      prompt:
        'Bir öğrenci bilimsel bir ödev için kaynak arıyor. Elinde iki seçenek var: bir üniversitenin “edu.tr” uzantılı sayfası ve çok okunan bir kişisel blog. Hangisini tercih etmeli, neden?',
      hint: 'Programın verdiği ölçüt nedir?',
      answer:
        'Üniversitenin “edu.tr” uzantılı sayfasını. Program, bilimsel çalışmalarda ağırlıklı olarak “edu” ve “gov” uzantılı sitelerin kullanıldığını vurgular; bu uzantılar arkada bir kurumun bulunduğunu ve içeriğin denetimden geçtiğini gösterir. Blogun çok okunması güvenilirlik göstergesi değildir; okunma sayısı doğruluk kanıtı olmaz.',
    },
    {
      prompt:
        'Bir haber metninde “Çalışma tamamlandı.” yazıyor. Bu cümlede dikkat edilmesi gereken dil tercihi nedir?',
      hint: 'Fiilde Çatı dersinde öğrendiğin ayrımı hatırla.',
      answer:
        'Failin belirtilmemiş olması. Çalışmayı kimin tamamladığı söylenmiyor. Bu her zaman kötü niyet değildir — fail bilinmiyor ya da önemsiz olabilir. Ama okurun bunu fark etmesi gerekir: “Kim yaptı?” sorusunun cevabı metinde var mı? Yoksa ve konu sorumluluk gerektiriyorsa bu bir soru işaretidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey metni okumak değil, metni sorgulamak',
    body:
      'Kazanımların fiilleri bunu doğrudan söyler: “analiz eder” (T.8.3.29), “sorgular” (T.8.3.31), “değerlendirir” (T.8.1.11). MEB’in merkezî sınav kılavuzu da soruların eleştirel düşünme becerisini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: metnin ne dediğini anlamak yetmez; neden öyle dediğini ve kime dayandığını sorabilmen gerekir.',
    measures: [
      'Bir medya metninin baskın amacını belirleyebilme',
      'Bilgi vermekle ikna etmeyi ayırabilme',
      'Bir kaynağın güvenilirliğini ölçütlerle sorgulayabilme',
      'Kurumsal kaynakla kişisel kaynağı ayırabilme',
      'Paylaşım sayısını kanıt saymama',
      'Failin gizlenmesi gibi dil tercihlerini fark edebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün metin',
    passage: `**MAHALLE BÜLTENİ — 3. SAYI**
Geçen ay açılan yeni park, mahallenin en çok konuşulan konusu oldu. Belediye, yürüyüş yolunun 800 metre olduğunu duyurdu. Parkta üç oyun alanı ve iki bank grubu bulunuyor. **Ne var ki gölgelik alan neredeyse hiç düşünülmemiş; yaz aylarında bu parkın nasıl kullanılacağını doğrusu merak ediyorum.**`,
    question: 'Bu metinde altı çizili bölümün amacı aşağıdakilerden hangisidir?',
    options: [
      {
        text: 'Bilgilendirme',
        explanation:
          'Metnin ilk üç cümlesi bilgilendiriyor (açılış tarihi, 800 metre, oyun alanı sayısı). Ama altı çizili bölümde tarafsız bilgi yok; bir eksiklik saptanıyor ve yazar kendi merakını dile getiriyor.',
      },
      {
        text: 'Olay yorumlama',
        explanation:
          'Doğru cevap. Gerçekleşmiş bir olay (parkın açılması) yazarın değerlendirmesiyle ele alınıyor: “neredeyse hiç düşünülmemiş”, “doğrusu merak ediyorum”. Bu ifadeler bilgi değil görüş bildiriyor.',
      },
      {
        text: 'İkna etme',
        explanation:
          'İkna etme için okurun bir davranışa ya da görüşe yöneltilmesi gerekir: bir çağrı, bir öneri, bir emir. Altı çizili bölümde böyle bir yönlendirme yok; yazar yalnız değerlendiriyor.',
      },
      {
        text: 'Eğlendirme',
        explanation:
          'Metinde mizah, şaşırtma ya da oyun amacı yok. Ton eleştireldir, eğlendirici değil. Bültenin biçimi bu seçeneği çağrıştırsa da içerik desteklemiyor.',
      },
      {
        text: 'Kültür aktarma',
        explanation:
          'Bir gelenek, değer ya da toplumsal birikim aktarılmıyor. Metin güncel bir düzenlemeyi değerlendiriyor; kuşaklar arası bir aktarım söz konusu değil.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü altı çizili bölümü işaret ediyor; metnin tamamındaki amaç değil, o bölümün amacı soruluyor. İlk iş bölümü yalıtıp beş amacı sırayla denemek.',
    critical_point:
      'Kritik nokta, metnin ilk bölümünün gerçekten bilgilendirici olması: tarih, uzunluk, sayı. Bu nesnel çerçeve, altı çizili bölümü de bilgilendirme gibi gösteriyor. Oysa orada iki değerlendirme ifadesi var: “neredeyse hiç düşünülmemiş” ve “merak ediyorum”.',
    takeaway:
      'Bir metnin bir bölümü bilgilendirirken başka bir bölümü yorumlayabilir. Soru hangi bölümü işaret ediyorsa amacı orada ara.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Programın 8. sınıf düzeyinde saydığı medya metni amaçları aşağıdakilerden hangisinde doğru verilmiştir?',
      options: [
        'Bilgilendirme, eğlendirme, tanıtma, satma, uyarma',
        'Kültür aktarma, olay yorumlama, bilgilendirme, eğlendirme, ikna etme',
        'Haber verme, yorumlama, eleştirme, savunma, tanıtma',
        'Öğretme, eğlendirme, uyarma, yönlendirme, tanıtma',
      ],
      answer_index: 1,
      explanation:
        'T.8.3.29’un açıklaması bu beş amacı açıkça sayar: kültür aktarma, olay yorumlama, bilgilendirme, eğlendirme, ikna etme. Diğer seçeneklerdeki adlar günlük dilde kullanılabilir ama kazanımın belirlediği çerçeve bu beşidir.',
    },
    {
      purpose: 'apply',
      question:
        'Bir öğrenci, deprem konulu ödevinde kullanacağı bilgi için iki kaynak buluyor. Hangisini tercih etmelidir?',
      options: [
        'Çok beğeni alan bir sosyal medya paylaşımı',
        'Bir kamu kurumunun “gov.tr” uzantılı resmî sayfası',
        'Yazarı belirtilmemiş bir kişisel blog yazısı',
        'Konuyla ilgili bir reklam broşürü',
      ],
      answer_index: 1,
      explanation:
        'Program, bilimsel çalışmalarda ağırlıklı olarak “edu” ve “gov” uzantılı sitelerin kullanıldığını vurgular; bu uzantılar arkada bir kurum bulunduğunu gösterir. Beğeni sayısı güvenilirlik kanıtı değildir; yazarı belirsiz blog denetimden geçmemiştir; reklam broşürünün amacı ikna etmedir, bilgilendirme değil.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, içinde araştırma verisi bulunan bir reklam metni için “amacı bilgilendirmedir” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Bilginin amaç mı araç mı olduğunu sınamamak',
        'Metnin kaynağını araştırmamak',
        'Metnin türünü yanlış belirlemek',
        'Failin gizlendiğini fark edememek',
      ],
      answer_index: 0,
      explanation:
        'Reklamda verilen bilgi doğru olabilir; ama metnin amacı okuru bir ürüne ya da davranışa yöneltmektir. Bilgi burada amacın aracıdır. Ölçüt bilginin varlığı değil, metnin okurdan ne istediğidir: “Bu metin benden ne istiyor?” sorusu bunu ayırır.',
    },
  ],

  summary: [
    'Program beş amaç sayar: kültür aktarma, olay yorumlama, bilgilendirme, eğlendirme, ikna etme.',
    'Bilgi vermek bir amaç olabileceği gibi bir araç da olabilir; reklamlar da doğru bilgi verir.',
    'Amacı belirleyen soru: “Bu metin benden ne istiyor?”',
    'Metnin amacı çoğu zaman son cümlede belli olur; sonuna kadar okumadan karar verme.',
    'Bilgilendirme, öteki dört amaç bulunmadığında kalan amaçtır.',
    'Program iki kaynak ölçütü verir: blog ve şahsi sayfalara dikkat; bilimsel çalışmalarda “edu” ve “gov” uzantıları.',
    'Sorgulamak reddetmek değildir; blogdaki bilgi yanlış olmak zorunda değil, yalnız doğrulanması gerekir.',
    'Paylaşım ve beğeni sayısı güvenilirlik kanıtı değildir.',
    'Dört pratik soru: kim yazdı, ne zaman yazıldı, dayanağı ne, başka yerde doğrulanıyor mu?',
    'Failin gizlenmesi, yüklü sözcükler ve ayrıntı seçimi metnin amacını ele verir.',
  ],

  next: [
    'Görsel, Tablo ve Grafik Okuma (T.8.3.27, T.8.3.32)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
    'Cümle Türleri (T.8.4.19)',
  ],
})

export default lesson
