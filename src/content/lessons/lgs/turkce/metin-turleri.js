import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Metin Türleri
 * Kazanım : T.8.3.26 · T.8.3.20 · T.8.3.2
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.3.26'nın açıklaması iki şey söyler:
 *   a) "Fıkra (köşe yazısı), makale, deneme, roman, destan türleri
 *      üzerinde durulur."  → BEŞ tür, fazlası değil.
 *   b) "Metin türlerine ilişkin ayrıntılı bilgi verilmemelidir."
 *      → Ansiklopedik tanım ezberi YASAK.
 * Bu yüzden ders, tür tanımı ezberletmez; metinden tanıma testleri kurar.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-metin-turleri',
  topic: 'Metin Türleri',
  order: 1,
  title: 'Metin Türleri: Beş Tür, Üç Soru',
  subtitle:
    'Program ayrıntılı tür bilgisi istemiyor. O hâlde tanımı değil, metinden tanıma yolunu öğreneceğiz.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.26', metin: 'Metin türlerini ayırt eder.' },
    { kod: 'T.8.3.20', metin: 'Okuduğu metinlerdeki hikâye unsurlarını belirler.' },
    { kod: 'T.8.3.2', metin: 'Metni türün özelliklerine uygun biçimde okur.' },
  ],
  prerequisites: [
    { topic: 'Anlatım biçimleri', why: 'Türü tanımak için metnin dokusunu okuyabilmen gerekir.' },
    { topic: 'Öznel–nesnel yargı', why: 'Makale ile denemeyi ayıran ölçüt kanıt kullanımıdır; bu ayrımı orada kurduk.' },
  ],
  outcomes: [
    'Programın saydığı beş metin türünü metinden tanıyabileceksin.',
    'Fıkra, makale ve denemeyi kanıt ve amaç ölçütüyle ayırabileceksin.',
    'Roman ile destanı olay ve kahraman ölçütüyle ayırabileceksin.',
    'Bir anlatı metnindeki hikâye unsurlarını belirleyebileceksin.',
    'Anlatıcı ile yazarı birbirinden ayırabileceksin.',
  ],

  opening: {
    title: 'Tanım ezberi değil, tanıma yolu',
    lead: 'Programın açıklaması nettir: “Metin türlerine ilişkin ayrıntılı bilgi verilmemelidir.” O hâlde metinden tanımayı öğreneceğiz.',
    body: `MEB 8. sınıf programındaki **T.8.3.26** kazanımı, metin türlerinin ayırt edilmesini ister ve iki sınır koyar.

**Birinci sınır:** üzerinde durulacak türler sayılıdır — **fıkra (köşe yazısı), makale, deneme, roman, destan.** Beş tür. Başka türler (şiir, tiyatro, biyografi, gezi yazısı vb.) bu kazanımın kapsamında ayrıca sayılmaz.

**İkinci sınır:** *“Metin türlerine ilişkin ayrıntılı bilgi verilmemelidir.”* Yani yazarın hangi yüzyılda yaşadığı, türün tarihsel gelişimi, alt türleri gibi bilgiler istenmiyor.

O hâlde bu derste ne yapacağız? **Metinden tanımayı** öğreneceğiz. Bir metin verildiğinde, onun hangi tür olduğunu metnin kendisinden çıkaracağız.

Baştan bir yanlış anlamayı düzeltelim. Programdaki **“fıkra”** sözcüğü, güldürü amaçlı kısa anlatı değildir. Açıklamada parantez içinde belirtildiği gibi **köşe yazısı** anlamındadır: gazete ve dergilerde bir yazarın güncel bir konuyu kendi görüşüyle ele aldığı kısa yazı. Bu ayrımı kaçıran öğrenci bütün soruyu kaybeder.

Beş türü tanımak için üç soru soracağız:

**1. Metin kurmaca mı, gerçek bir konuyu mu ele alıyor?**
**2. Kurmacaysa: olaylar olağanüstü mü, gerçeğe yakın mı?**
**3. Düşünce yazısıysa: yazar kanıt getiriyor mu, kendisiyle mi konuşuyor?**

Üç soru, beş tür. Yanına bir de anlatı metinlerini çözümlemek için **hikâye unsurlarını** ekleyeceğiz; bu da ayrı bir kazanımdır (**T.8.3.20**).`,
  },

  concepts: [
    {
      term: 'Fıkra (köşe yazısı)',
      body: 'Bir yazarın gazete ya da dergide **güncel** bir konuyu kendi görüşüyle, kısa ve samimi biçimde ele aldığı yazıdır. Kanıtlama zorunluluğu yoktur. Programdaki “fıkra” bu anlamdadır; güldürü amaçlı kısa anlatı değildir.',
    },
    {
      term: 'Makale',
      body: 'Bir konuyu **kanıtlarla** açıklayan ya da savunan yazıdır. Nesnel dayanaklar kullanır: veri, araştırma, kaynak. Amaç bilgilendirmek ve savı temellendirmektir.',
    },
    {
      term: 'Deneme',
      body: 'Yazarın bir konu üzerinde **kendisiyle konuşur gibi** düşündüğü yazıdır. Kanıtlama kaygısı taşımaz, kesin bir sonuca bağlanmak zorunda değildir; içten ve kişiseldir.',
    },
    {
      term: 'Roman',
      body: 'Kurmaca bir olay örgüsünü geniş bir kişi kadrosuyla, ayrıntılı biçimde anlatan uzun anlatıdır. Olaylar gerçek hayata yakındır; olağanüstülük zorunlu değildir.',
    },
    {
      term: 'Destan',
      body: 'Bir milletin hayatını derinden etkileyen olayları **olağanüstü** ögelerle anlatan uzun anlatıdır. Kahramanlar sıra dışı özellikler taşır; anlatı toplumun ortak hafızasına dayanır.',
    },
    {
      term: 'Hikâye unsurları',
      body: 'Anlatı metinlerini kuran ögelerdir: **olay örgüsü, mekân, zaman, şahıs ve varlık kadrosu, anlatıcı.** Programda T.8.3.20 kazanımı bunların belirlenmesini ister.',
    },
  ],

  why: {
    question: 'Neden tür tanımı ezberlemek bu konuda işe yaramıyor?',
    body: `İki sebeple.

**Birincisi:** program zaten bunu istemiyor. Açıklama açıkça “metin türlerine ilişkin ayrıntılı bilgi verilmemelidir” diyor. Bu yüzden sorular tanım sormaz; bir metin verip “bu hangi türdendir?” diye sorar.

**İkincisi:** tanımlar birbirine benzer. “Makale bir konuyu ele alan yazıdır” ile “deneme bir konuyu ele alan yazıdır” tanımları bir metni ayırmaya yetmez. Ayrımı yapan şey metnin **davranışıdır**: kanıt getiriyor mu, güncel mi, kendiyle mi konuşuyor?

Bir örnek üzerinden görelim. Üç metin de “okuma alışkanlığı” konusunu ele alsın.

**Makale davranışı:** “Yapılan araştırmalara göre düzenli okuyan öğrencilerin kelime dağarcığı, okumayanlara göre belirgin biçimde geniştir. Bu bulgu şunu gösterir: …” Kanıt getiriyor, savını temellendiriyor.

**Fıkra (köşe yazısı) davranışı:** “Geçen hafta açılan mahalle kütüphanesinde gördüğüm manzara bana şunu düşündürdü: çocuklar kitabı değil, kitabın yanındaki sessizliği arıyor.” Güncel bir olaydan yola çıkıyor, kısa, kendi görüşünü söylüyor, kanıtlamaya çalışmıyor.

**Deneme davranışı:** “Okumak nedir, ben de tam bilmiyorum. Kimi zaman kaçmak, kimi zaman durmak gibi geliyor. Belki de bir cevabı yoktur.” Kendisiyle konuşuyor, sonuca bağlamıyor, kanıt aramıyor.

Üç metnin de konusu aynı; davranışları farklı. Sorular tam olarak bu davranış farkını ölçer.

Son olarak “fıkra” sözcüğünün iki anlamını bir kez daha ayıralım: günlük dilde fıkra bir güldürü anlatısıdır; **edebiyat terimi olarak fıkra bir köşe yazısıdır.** Programın parantezi bu yüzden konmuştur.`,
  },

  decision: {
    title: 'Metnin türünü bulma yolu',
    lead: 'Üç soru sırayla sorulur; her soru arama alanını yarıya indirir.',
    intro:
      'Bir metnin türünü belirlerken şu beş durağı uygula.',
    steps: [
      {
        title: '1. Kurmaca mı, düşünce yazısı mı?',
        body: 'Metinde uydurulmuş kişiler ve olaylar mı var, yoksa gerçek bir konu mu tartışılıyor? Kurmacaysa roman ya da destan; düşünce yazısıysa fıkra, makale ya da deneme.',
      },
      {
        title: '2. Kurmacaysa olağanüstülüğe bak',
        body: 'Kahramanlar sıra dışı güçler taşıyor, olaylar bir milletin ortak hafızasına dayanıyorsa destandır. Olaylar günlük gerçekliğe yakınsa ve kişi kadrosu ayrıntılıysa romandır.',
      },
      {
        title: '3. Düşünce yazısıysa kanıt ara',
        body: 'Yazar savını veri, araştırma ya da kaynakla destekliyorsa makaledir. Desteklemiyorsa dördüncü durağa geç.',
      },
      {
        title: '4. Güncellik ve ton kontrolü yap',
        body: 'Metin güncel bir olaydan yola çıkıyor, kısa ve gazete yazısı havasında mı? Fıkradır. Yazar kendisiyle konuşuyor, kesin sonuca bağlamıyor mu? Denemedir.',
      },
      {
        title: '5. Kararını metinden bir cümleyle göster',
        body: '“Makaledir, çünkü şu cümlede bir araştırma verisi kullanılmış.” Gerekçeni gösteremiyorsan kararın tahmindir.',
      },
    ],
    takeaway: 'Türü tanım değil, metnin davranışı belirler.',
  },

  decisionTree: {
    title: 'Üç soruyla beş tür',
    intro:
      'Kontroller sırayla uygulanır. Birinci kontrol beş türü ikiye böler.',
    checks: [
      {
        question: 'Metinde uydurulmuş kişiler ve olaylar mı anlatılıyor?',
        yes: 'Kurmacadır: roman ya da destan. İkinci kontrole geç.',
        no: 'Düşünce yazısıdır: fıkra, makale ya da deneme. Üçüncü kontrole geç.',
      },
      {
        question: 'Kahramanlar olağanüstü özellikler taşıyor ve olaylar bir milletin ortak hafızasına mı dayanıyor?',
        yes: 'Destandır.',
        no: 'Romandır: olaylar gerçek hayata yakın, kişi kadrosu ayrıntılı.',
      },
      {
        question: 'Yazar savını veri, araştırma ya da kaynakla destekliyor mu?',
        yes: 'Makaledir.',
        no: 'Güncel bir olaydan yola çıkıp kısa ve görüş bildiriyorsa fıkra; kendisiyle konuşup sonuca bağlamıyorsa denemedir.',
      },
    ],
    takeaway:
      'Beş tür, üç kontrol. Ansiklopedik bilgi gerekmiyor; metnin davranışı yeterli.',
  },

  comparison: {
    title: 'Üç düşünce yazısını ayır',
    columns: ['Fıkra (köşe yazısı)', 'Makale', 'Deneme'],
    rows: [
      { label: 'Amaç', values: ['Güncel konuda görüş bildirmek', 'Savı kanıtlarla temellendirmek', 'Konu üzerinde düşünmek'] },
      { label: 'Kanıt', values: ['Zorunlu değil', 'Zorunlu: veri, araştırma, kaynak', 'Aranmaz'] },
      { label: 'Ton', values: ['Samimi, doğrudan', 'Ciddi, nesnel', 'İçten, kişisel'] },
      { label: 'Güncellik', values: ['Güncel bir olaya bağlı', 'Güncel olmak zorunda değil', 'Güncel olmak zorunda değil'] },
      { label: 'Sonuç', values: ['Genellikle bir görüşe bağlanır', 'Bir sonuca varır', 'Sonuca bağlanmayabilir'] },
      { label: 'Ayırt edici işaret', values: ['“Geçen hafta…”, “bugünlerde…”', '“Araştırmalara göre…”, sayısal veri', '“Bilmiyorum”, “belki”, “bana kalırsa”'] },
    ],
    insight:
      'Üç türün konusu aynı olabilir. Ayrımı yapan şey konu değil, yazarın metinde nasıl davrandığıdır.',
  },

  traps: [
    {
      title: '“Fıkra” sözcüğünü güldürü anlatısı sanmak',
      wrong: 'Metin komik değil; öyleyse fıkra olamaz.',
      right: 'Programdaki “fıkra”, parantez içinde belirtildiği gibi **köşe yazısıdır**: gazetede güncel bir konunun yazarın görüşüyle ele alındığı kısa yazı.',
      body: 'Günlük dilde fıkra bir güldürü anlatısıdır; edebiyat terimi olarak köşe yazısıdır. Bu ayrımı kaçıran öğrenci seçeneği baştan eler ve soruyu kaybeder.',
    },
    {
      title: 'Makale ile denemeyi konuya göre ayırmak',
      wrong: 'Metin bilimsel bir konudan söz ediyor; öyleyse makaledir.',
      right: 'Konu değil davranış belirleyicidir: yazar savını veri ya da kaynakla destekliyor mu? Desteklemiyorsa bilimsel konuda bile deneme olabilir.',
      body: 'Bir yazar bilim üzerine deneme yazabilir; kanıt getirmeden, kendi düşüncesini paylaşarak. Ölçüt kanıt kullanımıdır.',
    },
    {
      title: 'Anlatıcıyı yazarla karıştırmak',
      wrong: 'Romanda “ben” diyen kişi yazardır.',
      right: 'Anlatıcı, yazarın kurduğu bir sestir; yazarın kendisi değildir. Roman kurmacadır ve anlatıcı da kurmacanın parçasıdır.',
      body: 'Bu ayrım, hikâye unsurları sorularında doğrudan ölçülür. “Anlatıcı kimdir?” sorusunun cevabı “yazar” değildir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-turler-dusunce',
      title: 'Düşünce yazıları: kanıt, güncellik, ton',
      lead: 'Üç tür de bir konuyu ele alır. Ayrımı üç davranış yapar.',
      blocks: [
        {
          id: 'lgs-turler-dusunce-anlatim',
          type: 'prose',
          body: `**Makalenin imzası kanıttır.** Yazar bir sav ileri sürer ve onu destekler: araştırma sonuçları, sayısal veriler, uzman görüşleri, kaynak göstermeler. Metni okuduğunda “bu iddianın dayanağı ne?” sorusunun cevabını bulabilirsin.

Makalede ton ciddidir ve yazarın kişisel duyguları öne çıkmaz. Amaç okuru bilgilendirmek ve savı temellendirmektir. Düşünceyi geliştirme yollarından özellikle **sayısal verilerden yararlanma** ve **tanık gösterme** sık kullanılır — bu bağı Ders 8’de kurmuştuk.

**Fıkranın (köşe yazısının) imzası güncelliktir.** Yazı bir gazete ya da dergi için yazılmıştır; kısa, akıcı ve doğrudandır. Yazar güncel bir olaydan yola çıkar, kendi görüşünü söyler ama bunu kanıtlamak zorunda hissetmez. Ton samimidir; okurla konuşur gibi yazılır.

Fıkrayı tanımanın pratik işaretleri: “geçen hafta”, “bugünlerde”, “dün gazetede okudum” gibi güncel zaman ifadeleri; kısa paragraflar; doğrudan okura seslenme.

**Denemenin imzası içe dönüklüktür.** Yazar bir konu üzerinde düşünür ve bu düşünmeyi okurun önünde yapar. Kesin bir sonuca varmak zorunda değildir; hatta çoğu zaman varmaz. “Bilmiyorum”, “belki”, “bana kalırsa”, “düşünüyorum da” gibi ifadeler sıktır.

Denemede kanıt aranmaz; yazar okuru ikna etmeye de çalışmaz. Amacı paylaşmaktır. Bu yüzden deneme, makaleden **kanıt yokluğuyla**, fıkradan **güncellik yokluğu ve içe dönük tonla** ayrılır.

Üçünü ayırmanın en hızlı yolu şu üç soruyu sırayla sormaktır: **Kanıt var mı?** (varsa makale) — **Güncel bir olaya bağlı mı?** (bağlıysa fıkra) — **Yazar kendisiyle mi konuşuyor?** (konuşuyorsa deneme).

Bir uyarı: bir metin iki türün özelliklerini birden taşıyabilir. Köşe yazısında da veri kullanılabilir. Böyle durumlarda **baskın davranışa** bak: metnin asıl yaptığı iş kanıtlamak mı, güncel bir olaya görüş bildirmek mi?`,
        },
        {
          id: 'lgs-turler-dusunce-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı konu, üç farklı davranış',
          columns: ['Tür', 'Özgün metin başlangıcı', 'Kanıt', 'Tanıma işareti'],
          rows: [
            ['Makale', 'Yapılan bir araştırmada, her gün on dakika okuyan öğrencilerin kelime dağarcığı altı ayda belirgin biçimde genişlemiştir.', 'Var (araştırma)', 'Veri ve kaynak'],
            ['Fıkra (köşe yazısı)', 'Geçen hafta açılan mahalle kütüphanesine uğradım; rafların önünde sessizce bekleyen çocukları görünce…', 'Yok', 'Güncel olay, kısa ve samimi'],
            ['Deneme', 'Okumak nedir, ben de tam olarak bilmiyorum. Kimi zaman kaçmak, kimi zaman durmak gibi geliyor bana.', 'Yok', 'İçe dönük, kesin sonuç yok'],
            ['Karışık örnek', 'Geçen hafta açıklanan araştırmaya göre çocukların okuma süresi azalmış; bence asıl sorun başka yerde.', 'Var ama yardımcı', 'Güncellik baskın → fıkra'],
            ['Yanıltıcı örnek', 'Bilim nedir? Bu soruya kesin bir cevap veremiyorum; belki de vermemeliyiz.', 'Yok', 'Bilimsel konu ama deneme'],
          ],
          caption:
            'Son iki satır ölçütün konu değil davranış olduğunu gösterir: veri içeren bir köşe yazısı da, bilimsel konulu bir deneme de olabilir.',
        },
        {
          id: 'lgs-turler-dusunce-analiz',
          type: 'sentence_analysis',
          title: 'Metnin türünü cümle cümle okumak',
          prompt:
            'Aşağıdaki kısa metnin parçalarına tıklayarak her cümlenin türe dair hangi ipucunu verdiğini gör.',
          segments: [
            {
              text: 'Geçen hafta mahalledeki eski kırtasiye kapandı.',
              label: 'Güncellik ipucu',
              explanation:
                '“Geçen hafta” ifadesi metni güncel bir olaya bağlıyor. Bu, köşe yazısı (fıkra) için güçlü bir işaret; makale ve denemede güncellik zorunlu değildir.',
              tone: 'brand',
            },
            {
              text: 'Yerine açılan yeni dükkânda her şey var ama defter kokusu yok.',
              label: 'Kişisel gözlem',
              explanation:
                'Yazar kendi gözlemini ve duygusunu paylaşıyor. Kanıt getirmiyor. Bu, makale olasılığını zayıflatıyor.',
              tone: 'aqua',
            },
            {
              text: 'Belki de bir mahalleyi mahalle yapan şey, satılan mal değil alışılan kokudur.',
              label: 'Görüş bildirme',
              explanation:
                '“Belki de” ifadesi denemeyi çağrıştırıyor; ama cümle bir görüşe bağlanıyor ve metin güncel bir olaydan yola çıktı. Baskın davranış hâlâ köşe yazısı.',
              tone: 'success',
            },
            {
              text: '(Karşılaştır: “Araştırmalara göre mahalle esnafının yüzde kırkı son beş yılda kapandı.”)',
              label: 'Makale olsaydı',
              explanation:
                'Böyle bir cümle metne kanıt katardı ve makale olasılığını güçlendirirdi. Metinde böyle bir cümle yok.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Tür kararı tek bir cümleyle değil, metnin genel davranışıyla verilir. Güncellik + kanıtsızlık + kısa görüş = köşe yazısı.',
        },
        {
          id: 'lgs-turler-dusunce-hoca',
          type: 'teacher_note',
          tone: 'warning',
          body:
            'Seçeneklerde “fıkra” gördüğünde bunun köşe yazısı anlamında olduğunu hatırla. Güldürü anlatısı bekleyip seçeneği eleyen öğrenci, doğru cevabı kendi eliyle siler.',
        },
      ],
    },

    {
      id: 'lgs-turkce-turler-anlati',
      title: 'Anlatı metinleri ve hikâye unsurları',
      lead: 'Roman ile destanı ayıran şey uzunluk değil, olayların ve kahramanların niteliğidir.',
      blocks: [
        {
          id: 'lgs-turler-anlati-anlatim',
          type: 'prose',
          body: `**Roman**, kurmaca bir olay örgüsünü geniş bir kişi kadrosuyla ve ayrıntılı biçimde anlatır. Olaylar günlük gerçekliğe yakındır; kişilerin iç dünyası, ilişkileri ve gelişimleri üzerinde durulur.

**Destan**, bir milletin hayatını derinden etkileyen olayları **olağanüstü ögelerle** anlatır. Kahramanlar sıra dışı güçler taşır, olaylar toplumun ortak hafızasına dayanır. Anlatı çoğu zaman manzumdur ve kuşaktan kuşağa aktarılmıştır.

İkisini ayıran soru şudur: **kahramanlar ve olaylar gerçek hayatta mümkün mü?** Mümkünse roman, değilse destan.

Şimdi **T.8.3.20** kazanımına gelelim: hikâye unsurları. Program bunları açıkça sayar: **olay örgüsü, mekân, zaman, şahıs ve varlık kadrosu, anlatıcı.**

**Olay örgüsü:** anlatıdaki olayların birbirine bağlanma biçimi. Yalnız “ne oldu?” değil, “hangi olay hangisine yol açtı?” sorusunun cevabı.

**Mekân:** olayların geçtiği yer. Bazen yalnız bir sahnedir, bazen anlatının anlamını taşır.

**Zaman:** olayların geçtiği dönem ve süre. Anlatı zamanı ile olay zamanı farklı olabilir; geriye dönüşler bunu sağlar.

**Şahıs ve varlık kadrosu:** anlatıdaki kişiler ve varlıklar. Masallarda ve destanlarda hayvanlar, doğa güçleri de kadroya girebilir.

**Anlatıcı:** olayı anlatan ses. Burada en sık yapılan hata anlatıcıyı yazarla karıştırmaktır. **Anlatıcı, yazarın kurduğu bir sestir.** Bir romanda “ben” diyen kişi yazar değildir; yazarın yarattığı bir anlatıcıdır.

Anlatıcı iki temel biçimde bulunur. **Kahraman anlatıcı**, olayların içinde yer alır ve “ben” diliyle anlatır. **Gözlemci anlatıcı**, olayların dışındadır ve “o” diliyle anlatır.

Bu unsurları belirlemek, roman ve destan metinlerinde sorulan soruların çoğunu çözer.`,
        },
        {
          id: 'lgs-turler-anlati-tablo',
          type: 'table',
          interactive: true,
          title: 'Hikâye unsurlarını metinden çıkar',
          columns: ['Unsur', 'Sorusu', 'Örnek bulgu', 'Sık yapılan hata'],
          rows: [
            ['Olay örgüsü', 'Hangi olay hangisine yol açtı?', 'Kardeşin hastalanması, ailenin şehre taşınmasına yol açar.', 'Olayları yalnız sıralamak'],
            ['Mekân', 'Olaylar nerede geçiyor?', 'Küçük bir sahil kasabası', 'Mekânı yalnız dekor sanmak'],
            ['Zaman', 'Ne zaman ve ne kadar sürede?', 'Bir kış boyunca', 'Anlatı zamanı ile olay zamanını karıştırmak'],
            ['Şahıs kadrosu', 'Kimler var?', 'Anlatıcı, kardeşi, komşu öğretmen', 'Yalnız baş kişiyi saymak'],
            ['Anlatıcı', 'Olayı kim anlatıyor?', 'Olayların içinde yer alan bir çocuk (“ben”)', 'Anlatıcıyı yazar sanmak'],
          ],
          caption:
            'Anlatıcı satırı en kritiktir: “ben” diyen ses yazarın kendisi değil, yazarın kurduğu bir karakterdir.',
        },
        {
          id: 'lgs-turler-anlati-tuzak',
          type: 'trap',
          title: 'Destanı yalnız uzunluğuyla tanımak',
          wrong: 'Metin uzun ve eski; öyleyse destandır.',
          right: 'Ölçüt uzunluk ya da eskilik değil, olağanüstülüktür: kahramanlar sıra dışı güçler taşıyor mu, olaylar bir milletin ortak hafızasına mı dayanıyor?',
          body: 'Uzun ve eski bir roman da olabilir. Destanı belirleyen şey, olayların ve kişilerin gerçek hayatta mümkün olmamasıdır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-turler-sinir',
      title: 'Program sınırı ve türü metinden okuma',
      lead: 'Program ayrıntılı tür bilgisi istemiyor. Bu, konuyu daraltmakla kalmaz; çalışma yönteminizi de değiştirir.',
      blocks: [
        {
          id: 'lgs-turler-sinir-anlatim',
          type: 'prose',
          body: `Program iki cümleyle çalışma yöntemini belirliyor: beş tür üzerinde durulacak ve ayrıntılı bilgi verilmeyecek.

Bunun pratik karşılığı şudur: **soruda sana bir metin verilir ve türünü sorar.** Yazarın kim olduğu, türün ne zaman ortaya çıktığı, alt türlerinin neler olduğu sorulmaz.

Bu yüzden çalışma yöntemin de değişmeli. Tür tanımlarını ezberlemek yerine, her türden **kısa metinler okuyup davranışlarını tanımak** çok daha verimlidir. Bir köşe yazısını okuduğunda “bu güncel bir olaya bağlanmış” diyebilmen, tanımını ezberlemenden daha değerlidir.

Bir metnin türünü okurken üç şeye bakarsın:

**Birincisi: metin ne yapıyor?** Bir olay mı anlatıyor, bir sav mı savunuyor, bir düşünceyi mi paylaşıyor?
**İkincisi: neye yaslanıyor?** Kanıta mı, güncel bir olaya mı, yazarın kendi düşüncesine mi?
**Üçüncüsü: hangi tonla konuşuyor?** Ciddi ve nesnel mi, samimi ve doğrudan mı, içe dönük ve kararsız mı?

Bu üç soru, beş türü birbirinden ayırmaya yeter.

**T.8.3.2** kazanımı ise bir adım ötesini ister: “Metni türün özelliklerine uygun biçimde okur.” Yani bir şiiri şiir gibi, bir köşe yazısını köşe yazısı gibi okumak. Bunun sınavdaki karşılığı şudur: bir metne başlarken türünü tahmin edersen, neyi arayacağını da bilirsin.

Bir köşe yazısında yazarın görüşünü ararsın. Bir makalede kanıtları ararsın. Bir denemede yazarın düşünme yolunu izlersin. Bir romanda olay örgüsünü ve kişileri izlersin. Bir destanda olağanüstü ögeleri ve kahramanlık değerlerini ararsın.

Türü baştan tanımak, okuma dikkatini nereye yoğunlaştıracağını söyler. Bu, okuma stratejilerinden (**T.8.3.4**) biriyle doğrudan ilgilidir ve Ders 6’da temeli atılmıştı.`,
        },
        {
          id: 'lgs-turler-sinir-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Türü tanıyınca neyi ararsın?',
          columns: ['Düşünce yazıları', 'Anlatı metinleri'],
          rows: [
            { label: 'Aranan', values: ['Sav, kanıt, görüş', 'Olay örgüsü, kişiler, anlatıcı'] },
            { label: 'Okuma odağı', values: ['Yazar ne savunuyor?', 'Olaylar nasıl bağlanıyor?'] },
            { label: 'Türler', values: ['Fıkra, makale, deneme', 'Roman, destan'] },
            { label: 'Ayırt edici soru', values: ['Kanıt var mı? Güncel mi? İçe dönük mü?', 'Olaylar gerçek hayatta mümkün mü?'] },
            { label: 'İlgili kazanım', values: ['T.8.3.26', 'T.8.3.26 + T.8.3.20'] },
          ],
          insight:
            'Türü baştan tahmin etmek, okurken neyi arayacağını belirler. Bu, doğrudan bir okuma stratejisidir.',
        },
        {
          id: 'lgs-turler-sinir-tuzak',
          type: 'trap',
          title: 'Program dışı tür bilgisi ezberlemek',
          wrong: 'Denemenin kurucusu kimdir, hangi yüzyılda ortaya çıkmıştır — bunları da öğrenmeliyim.',
          right: 'Program açıkça “ayrıntılı bilgi verilmemelidir” diyor. Bu düzeyde ölçülen şey, metnin türünü metinden tanıyabilmektir.',
          body: 'Gereksiz ezber yalnız zaman kaybettirmez; asıl becerinin — metinden tanıma — gelişmesini de geciktirir.',
        },
        {
          id: 'lgs-turler-sinir-hafiza',
          type: 'memory',
          title: 'Üç soruluk tür testi',
          body: '**Kurmaca mı?** → roman/destan. **Kanıt var mı?** → makale. **Güncel mi, içe dönük mü?** → fıkra / deneme.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Kanıt var mı?',
      prompt:
        'Şu metnin türünü belirle: “Son yıllarda yapılan çalışmalar, günde en az on beş dakika sesli okuyan öğrencilerin okuduğunu anlama puanlarının belirgin biçimde yükseldiğini göstermektedir. Bu bulgu, sesli okumanın yalnız telaffuz değil anlama becerisini de desteklediğini ortaya koyar.”',
      steps: [
        { title: '1. durak — kurmaca mı?', body: 'Uydurulmuş kişi ya da olay yok; gerçek bir konu ele alınıyor. → Düşünce yazısı.' },
        { title: '2. durak — kanıt var mı?', body: '“Son yıllarda yapılan çalışmalar” ifadesiyle araştırma sonuçlarına dayanılıyor. → Kanıt var.' },
        { title: '3. durak — güncellik ve ton', body: 'Güncel bir olaya bağlanmamış; ton ciddi ve nesnel, yazarın kişisel duyguları yok.' },
        { title: '4. durak — kararı ver', body: 'Kanıt bulunduğu ve sav temellendirildiği için **makale**.' },
        { title: '5. durak — gerekçeyi göster', body: 'Kanıt cümlesi: “Son yıllarda yapılan çalışmalar … göstermektedir.” Bu cümleyi gösterebildiğim için kararım tahmin değil.' },
      ],
      answer: 'Makale.',
      takeaway: 'Makalenin imzası kanıttır; kanıtı metinden gösterebilmelisin.',
    },
    {
      title: 'Seviye 2 — Fıkra mı, deneme mi?',
      prompt:
        'Şu iki metni ayır: (1) “Dün akşam mahallede elektrikler kesildi. Balkonlara çıkan komşuların birbiriyle konuştuğunu duyunca, karanlığın bazen ışıktan daha çok şey gösterdiğini düşündüm.” (2) “Karanlık nedir? Işığın yokluğu mu, yoksa görmenin başka bir biçimi mi? Ben de emin değilim; belki de her seferinde başka bir şeydir.”',
      steps: [
        { title: '(1) güncellik kontrolü', body: '“Dün akşam” ifadesi metni güncel bir olaya bağlıyor. Yazar o olaydan yola çıkıp bir görüş bildiriyor.' },
        { title: '(1) kanıt kontrolü', body: 'Hiçbir veri, araştırma ya da kaynak yok. → Makale değil.' },
        { title: '(1) kararı ver', body: 'Güncel olay + kısa görüş + kanıtsızlık = **fıkra (köşe yazısı)**.' },
        { title: '(2) ton kontrolü', body: '“Ben de emin değilim”, “belki de” ifadeleri içe dönük bir düşünmeyi gösteriyor. Güncel bir olaya bağlanmamış.' },
        { title: '(2) kararı ver', body: 'Kanıt yok, güncellik yok, kesin sonuç yok, yazar kendisiyle konuşuyor = **deneme**.' },
      ],
      answer: '(1) fıkra (köşe yazısı) · (2) deneme',
      takeaway:
        'İkisi de kanıtsızdır. Ayrımı güncellik ve ton yapar: fıkra dışarıdan bir olaya, deneme içeriden bir soruya bağlanır.',
    },
    {
      title: 'Seviye 3 — Hikâye unsurlarını çıkar',
      prompt:
        'Metin: “O kış kasabaya ilk kar aralıkta yağdı. Babam ocağı yaktı, ben pencereden dışarıyı seyrettim. Komşumuz Nazmi Amca kapıyı çaldığında elinde bir kutu vardı; o kutu yüzünden bütün kış boyu konuşulacak bir mesele başlayacaktı.” Hikâye unsurlarını belirle.',
      steps: [
        { title: 'Zaman', body: '“O kış”, “aralıkta”, “bütün kış boyu” — olaylar bir kış mevsiminde geçiyor.' },
        { title: 'Mekân', body: 'Bir kasaba, içinde bir ev; pencere, ocak ve kapı sahneyi kuruyor.' },
        { title: 'Şahıs kadrosu', body: 'Anlatıcı (bir çocuk), babası, komşu Nazmi Amca. Kutu ise varlık kadrosuna girer.' },
        { title: 'Olay örgüsü', body: 'Kar yağıyor → aile evde → komşu bir kutuyla geliyor → kutu yüzünden bir mesele başlıyor. Olaylar birbirine bağlanıyor.' },
        { title: 'Anlatıcı', body: 'Olayların içinde yer alan ve “ben” diliyle anlatan bir kahraman anlatıcı. Dikkat: bu ses yazarın kendisi değil, kurgunun parçası.' },
      ],
      answer:
        'Zaman: bir kış, aralık ayı. Mekân: kasabadaki ev. Şahıs kadrosu: anlatıcı çocuk, baba, Nazmi Amca. Varlık: kutu. Olay örgüsü: karın yağmasından kutunun getirdiği meseleye uzanan bağlantı. Anlatıcı: olayların içindeki kahraman anlatıcı.',
      takeaway:
        'Anlatıcı, kurgunun içindeki bir sestir; “ben” demesi onu yazar yapmaz.',
    },
  ],

  questionClue: {
    concept: 'metin türü sorusu',
    statement:
      'Soru kökünde “bu parça hangi türe aittir”, “aşağıdaki türlerden hangisinden alınmıştır”, “hikâye unsurlarından hangisi” ifadelerinden biri varsa, aranan şey metnin davranışıdır.',
    clues: [
      'Seçeneklerde “fıkra, makale, deneme, roman, destan” terimleri',
      'Metinde “geçen hafta, bugünlerde” gibi güncellik ifadeleri',
      'Metinde araştırma, oran ya da kaynak bulunması',
      '“Belki”, “bilmiyorum”, “bana kalırsa” gibi içe dönük ifadeler',
      'Olağanüstü olaylar ya da sıra dışı kahramanlar',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, metnin türünü metinden okuyup okuyamadığını ölçüyor. Çözüm yolu üç soruyu sırayla sormak ve kararı metinden bir cümleyle gerekçelendirmektir.',
    boundary:
      'Bu ipuçlarını “sayı varsa makale” gibi bir kısayola çevirme. Bir köşe yazısında da veri kullanılabilir; belirleyici olan baskın davranıştır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir parçanın hangi türden alındığının sorulması',
      'Verilen tür özelliklerine uyan parçanın seçtirilmesi',
      'Fıkra ile denemenin ayırt ettirilmesi',
      'Makale ile denemenin kanıt ölçütüyle ayırt ettirilmesi',
      'Bir anlatı metnindeki hikâye unsurlarının sorulması',
      'Anlatıcının kim olduğunun belirlenmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir metinde yazar, bir konuda kesin bir yargıya varmadan düşüncelerini paylaşıyor ve hiçbir kanıt kullanmıyor; metin güncel bir olaya da bağlanmıyor. Bu metin hangi türdendir?',
      hint: 'Üç soruyu sırayla uygula: kanıt, güncellik, ton.',
      answer:
        'Denemedir. Kanıt bulunmadığı için makale değildir; güncel bir olaya bağlanmadığı için fıkra (köşe yazısı) değildir. Yazarın kesin sonuca varmadan kendi düşünme sürecini paylaşması denemenin imzasıdır.',
    },
    {
      prompt:
        'Bir soruda “Bu parça aşağıdaki türlerden hangisinden alınmış olabilir?” deniyor ve seçeneklerden biri “fıkra”. Öğrenci metnin komik olmadığını görüp bu seçeneği eliyor. Doğru mu yapmış?',
      hint: 'Programdaki “fıkra” hangi anlamda?',
      answer:
        'Yanlış yapmıştır. Programın açıklamasında parantez içinde belirtildiği gibi buradaki “fıkra”, **köşe yazısı** anlamındadır: gazetede güncel bir konunun yazarın görüşüyle ele alındığı kısa yazı. Güldürü amacı taşıması gerekmez. Bu yanlış anlama, doğru cevabın baştan elenmesine yol açar.',
    },
    {
      prompt:
        'Bir romandan alınan parçada anlatıcı “ben” diyerek olayları aktarıyor. “Anlatıcı kimdir?” sorusuna “yazarın kendisi” demek doğru olur mu?',
      hint: 'Roman kurmacadır; anlatıcı da kurmacanın parçasıdır.',
      answer:
        'Olmaz. Anlatıcı, yazarın kurduğu bir sestir ve kurgunun parçasıdır. “Ben” diyen kişi, yazarın yarattığı bir karakterdir. Doğru cevap “olayların içinde yer alan bir kahraman anlatıcı” biçiminde verilir. Bu ayrım, hikâye unsurları sorularında doğrudan ölçülür.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tür tanımı değil, metinden tanıma',
    body:
      'Kazanımın açıklaması “metin türlerine ilişkin ayrıntılı bilgi verilmemelidir” diyerek ölçme yönünü de belirler. MEB’in merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sana bir metin verilir ve türünü metnin davranışından çıkarman istenir. Ansiklopedik bilgi ölçülmez.',
    measures: [
      'Bir metnin kurmaca mı düşünce yazısı mı olduğunu ayırabilme',
      'Makaleyi kanıt kullanımından tanıyabilme',
      'Fıkrayı güncellik ve tondan tanıyabilme',
      'Denemeyi içe dönük tonundan tanıyabilme',
      'Roman ile destanı olağanüstülük ölçütüyle ayırabilme',
      'Hikâye unsurlarını metinden çıkarabilme ve anlatıcıyı yazardan ayırabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Bugünlerde herkes zamanın hızlandığından yakınıyor. Geçen hafta bir arkadaşım, “Günler nereye gidiyor?” diye sordu; ben de cevap veremedim. Sonra düşündüm: belki günler bir yere gitmiyor, biz onları bölüyoruz. Sabahı ikiye, öğleni üçe, akşamı beşe bölünce elimizde bütün bir gün kalmıyor. Ne yapmalı, bilmiyorum. Ama önce bölmeyi bırakmayı denemek gerekiyor galiba.`,
    question: 'Bu parça aşağıdaki türlerden hangisinden alınmış olabilir?',
    options: [
      {
        text: 'Makale',
        explanation:
          'Metinde hiçbir araştırma verisi, kaynak ya da uzman görüşü yok. Makalenin imzası kanıttır; yazar burada savını temellendirmiyor, düşünüyor. Ayrıca ton nesnel değil kişisel.',
      },
      {
        text: 'Fıkra (köşe yazısı)',
        explanation:
          'Doğru cevap. Metin güncel bir duruma bağlanıyor (“bugünlerde”, “geçen hafta”), kısa ve samimi bir tonla yazarın kendi görüşünü bildiriyor, kanıt getirmiyor ve bir görüşe bağlanıyor. Köşe yazısının üç imzası da var.',
      },
      {
        text: 'Roman',
        explanation:
          'Kurmaca bir olay örgüsü, kişi kadrosu ve gelişen bir anlatı yok. Metin bir olay anlatmıyor; bir düşünceyi paylaşıyor. Anlatıda geçen arkadaş, olay örgüsünün parçası değil bir örnek.',
      },
      {
        text: 'Destan',
        explanation:
          'Olağanüstü ögeler, sıra dışı kahramanlar ya da bir milletin ortak hafızasına dayanan olaylar yok. Metin günlük bir gözlemden yola çıkıyor.',
      },
      {
        text: 'Deneme',
        explanation:
          'Güçlü bir çeldirici: “bilmiyorum”, “belki”, “galiba” ifadeleri denemeyi çağrıştırıyor. Ancak metin güncel bir duruma bağlanıyor ve sonunda bir öneriye ulaşıyor; denemede güncellik zorunlu değildir ve sonuca bağlanma beklentisi yoktur. Baskın davranış köşe yazısı.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru metnin türünü soruyor. Üç durağı uygulayacağım: kurmaca mı (hayır), kanıt var mı (hayır), güncellik ve ton nasıl (güncel + samimi + görüşe bağlanıyor).',
    critical_point:
      'Kritik nokta, deneme ile köşe yazısının ikisinin de kanıtsız olmasıdır. Ayrımı güncellik yapar: metin “bugünlerde” ve “geçen hafta” ifadeleriyle dışarıdaki bir duruma bağlanıyor ve sonunda bir öneriye ulaşıyor.',
    takeaway:
      'İki tür de kanıtsızsa ayrımı güncellik ve sonuca bağlanma yapar.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Programın 8. sınıf düzeyinde üzerinde durduğu metin türleri aşağıdakilerden hangisinde doğru verilmiştir?',
      options: [
        'Şiir, tiyatro, biyografi, gezi yazısı, günlük',
        'Fıkra (köşe yazısı), makale, deneme, roman, destan',
        'Masal, fabl, efsane, roman, hikâye',
        'Makale, deneme, eleştiri, söyleşi, anı',
      ],
      answer_index: 1,
      explanation:
        'T.8.3.26’nın açıklaması bu beş türü açıkça sayar: fıkra (köşe yazısı), makale, deneme, roman, destan. Ayrıca aynı açıklama türlere ilişkin ayrıntılı bilgi verilmemesini ister. Diğer seçeneklerdeki türler bu kazanımın kapsamında ayrıca sayılmaz.',
    },
    {
      purpose: 'apply',
      question:
        'Bir metinde yazar, savını desteklemek için iki ayrı araştırmanın sonuçlarını ve bir uzmanın görüşünü aktarıyor; ton ciddi ve kişisel duygular öne çıkmıyor. Bu metin hangi türdendir?',
      options: [
        'Deneme',
        'Fıkra (köşe yazısı)',
        'Makale',
        'Destan',
      ],
      answer_index: 2,
      explanation:
        'Araştırma sonuçlarının ve uzman görüşünün kullanılması, savın kanıtla temellendirildiğini gösterir; bu makalenin imzasıdır. Denemede kanıt aranmaz, fıkrada kanıt zorunlu değildir ve güncellik beklenir, destan ise kurmaca bir anlatıdır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, bir romandan alınan parçada “ben” diyen anlatıcıyı yazarın kendisi sanıyor. Bu öğrencinin hatası nedir?',
      options: [
        'Anlatıcının kurgunun parçası olduğunu gözden kaçırmak',
        'Olay örgüsünü yanlış belirlemek',
        'Mekân ile zamanı karıştırmak',
        'Türü yanlış belirlemek',
      ],
      answer_index: 0,
      explanation:
        'Roman kurmaca bir metindir ve anlatıcı da yazarın kurduğu bir sestir. “Ben” demesi onu yazar yapmaz; olayların içinde yer alan bir kahraman anlatıcıdır. Öğrenci türü doğru belirlemiş, olay örgüsü ya da mekân konusunda bir hata yapmamıştır.',
    },
  ],

  summary: [
    'Program beş tür sayar: fıkra (köşe yazısı), makale, deneme, roman, destan — ve ayrıntılı tür bilgisi istemez.',
    'Programdaki “fıkra”, güldürü anlatısı değil **köşe yazısıdır**.',
    'Üç soru beş türü ayırır: kurmaca mı, kanıt var mı, güncel mi / içe dönük mü?',
    'Makalenin imzası kanıttır: veri, araştırma, kaynak.',
    'Fıkranın imzası güncelliktir: bir olaydan yola çıkar, kısa ve samimidir.',
    'Denemenin imzası içe dönüklüktür: kanıt aranmaz, kesin sonuca bağlanmaz.',
    'Roman ile destanı ayıran şey uzunluk değil, olayların ve kahramanların olağanüstülüğüdür.',
    'Hikâye unsurları beştir: olay örgüsü, mekân, zaman, şahıs ve varlık kadrosu, anlatıcı.',
    'Anlatıcı yazarın kendisi değildir; kurgunun içindeki bir sestir.',
    'Türü baştan tanımak, okurken neyi arayacağını belirler.',
  ],

  next: [
    'Medya Metinleri ve Bilgi Kaynağının Güvenilirliği (T.8.3.29, T.8.3.31)',
    'Görsel, Tablo ve Grafik Okuma (T.8.3.27, T.8.3.32)',
    'Anlatım Bozuklukları: Dil Bilgisi Yönünden (T.8.3.8)',
  ],
})

export default lesson
