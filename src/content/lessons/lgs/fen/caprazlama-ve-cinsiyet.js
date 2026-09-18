import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.2 DNA ve Genetik Kod · 3. ders
 * Kazanım : F.8.2.2.2 · F.8.2.2.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.2.2.2 → a) "Çaprazlamalarda sadece bezelye karakterleri kullanılır."
 *               b) "Diğer canlılarda da karakterlerin aktarımının benzer
 *                  olduğu vurgulanır."
 *               c) "İnsanda çocuğun cinsiyetinin babadan gelen eşey
 *                  kromozomu ile belirlendiği vurgulanır."
 *   F.8.2.2.3 → açıklama yok; kazanımın fiili "tartışır".
 *
 * KAPSAM KARARI
 * Çaprazlama örnekleri bezelye ile sınırlı tutuldu. İnsan karakteri
 * (göz rengi, kulak memesi vb.) üzerinden çaprazlama YAPILMADI; bu,
 * programın açık sınırıdır ve piyasadaki kaynakların sık ihlal ettiği
 * noktadır. İnsan yalnız cinsiyetin belirlenmesi ve akraba evliliği
 * bağlamında geçer — ikisi de programın kendi istediği konulardır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-caprazlama-ve-cinsiyet',
  topic: 'DNA ve Genetik Kod',
  order: 3,
  title: 'Çaprazlama, Cinsiyet ve Akraba Evliliği',
  subtitle:
    'Çaprazlama bir kehanet değil, bir olasılık hesabıdır. Bu farkı gören öğrenci sorunun yarısını çözmüştür.',
  minutes: 46,
  kazanimlar: ['F.8.2.2.2', 'F.8.2.2.3'],
  prerequisites: [
    { topic: 'Kalıtım Kavramları: Görünen ve Yazılı Olan', why: 'Genotip, saf döl, melez döl, baskın ve çekinik kavramları kurulmadan çaprazlama yapılamaz.' },
    { topic: 'DNA’nın Yapısı: Nükleotidden Kromozoma', why: 'Kromozom kavramı, cinsiyetin belirlenmesini anlamak için gereklidir.' },
  ],
  outcomes: [
    'İki ebeveynin genotipinden yavruların genotip ve fenotip olasılıklarını bulabileceksin.',
    'Çaprazlama sonucunun bir kesinlik değil, bir olasılık olduğunu açıklayabileceksin.',
    'Cinsiyetin nasıl belirlendiğini eşey kromozomları üzerinden anlatabileceksin.',
    'Cinsiyeti belirleyenin babadan gelen kromozom olduğunu gerekçesiyle söyleyebileceksin.',
    'Akraba evliliğinin çekinik kalıtsal hastalık olasılığını neden artırdığını açıklayabileceksin.',
  ],

  opening: {
    title: 'İki mor çiçekten beyaz bir yavru',
    lead: 'Anne de mor, baba da mor. Yavruların arasında bir beyaz çıkıyor. Bu nasıl olabiliyor?',
    body: `Geçen derste bir kuralı kurduk: melez döl bireyler (Aa) çekinik geni **taşır ama göstermez.** Şimdi bu kuralın sonucunu göreceğiz.

İki mor çiçekli bezelye birleştiğinde yavrular arasında beyaz çiçekli bir bitki çıkabilir. Bunun nedeni, ana babanın ikisinin de görünmeyen bir çekinik gen taşıyor olmasıdır. İkisi de bu geni aynı yavruya verirse, yavruda örtecek baskın gen kalmaz ve çekinik özellik ortaya çıkar.

Peki bu **ne sıklıkla** olur? İşte çaprazlama tam olarak bu soruyu cevaplar.

**Çaprazlama**, iki ebeveynin genotipinden yola çıkarak yavrularda hangi genotip ve fenotiplerin hangi olasılıkla oluşabileceğini bulma işlemidir.

Burada çok önemli bir uyarı var ve bu ders boyunca birkaç kez tekrar edeceğim: **çaprazlama bir kehanet değildir.** Sonuç “dört yavrudan üçü mor olacak” demek değildir. Sonuç “her bir yavrunun mor olma olasılığı dörtte üçtür” demektir. Bu iki cümle aynı şey değildir ve sorular çoğu zaman tam bu farkı ölçer.

Bu derste üç iş yapacağız:

1. Bezelye karakterleriyle tek karakter çaprazlaması yapmayı öğreneceğiz.
2. İnsanda cinsiyetin nasıl belirlendiğini göreceğiz.
3. Akraba evliliğinin genetik sonuçlarını tartışacağız.

Bir kapsam notu: *program, çaprazlamaların **yalnız bezelye karakterleri** üzerinden yapılmasını ister.* Bu yüzden bu derste insan karakterleri (göz rengi, saç biçimi gibi) üzerinden çaprazlama yapmayacağız. İnsan yalnız cinsiyetin belirlenmesi ve akraba evliliği konularında geçecek — ikisi de programın kendi istediği konulardır.`,
  },

  concepts: [
    {
      term: 'Çaprazlama',
      body: 'İki ebeveynin genotipinden yola çıkarak yavrularda oluşabilecek genotip ve fenotipleri ve bunların olasılıklarını belirleme işlemidir.',
    },
    {
      term: 'Üreme hücresi',
      body: 'Ebeveynin yavruya gen aktardığı hücredir. Her üreme hücresi, gen çiftinin **yalnız bir üyesini** taşır. Aa genotipli bir bezelye iki çeşit üreme hücresi oluşturur: A taşıyan ve a taşıyan.',
    },
    {
      term: 'Olasılık',
      body: 'Bir sonucun ortaya çıkma şansıdır; yüzde ya da kesirle gösterilir. Çaprazlamanın verdiği şey bir kesinlik değil, bir olasılıktır.',
    },
    {
      term: 'Eşey kromozomu',
      body: 'İnsanda cinsiyeti belirleyen kromozom çiftidir. İnsanda 23 çift kromozom bulunur; bunların **23. çifti** eşey kromozomudur. Kadında XX, erkekte XY biçimindedir.',
    },
    {
      term: 'Taşıyıcı',
      body: 'Çekinik geni taşıdığı hâlde fenotipinde göstermeyen bireydir (melez döl). Kendisi sağlıklı görünür ama geni yavrusuna aktarabilir.',
    },
    {
      term: 'Akraba evliliği',
      body: 'Aralarında kan bağı bulunan bireylerin evlenmesidir. Ortak atadan gelen aynı çekinik genleri taşıma olasılıkları yüksektir.',
    },
  ],

  why: {
    question: 'Çaprazlama neden bir kesinlik değil, bir olasılık veriyor?',
    body: `Çünkü hangi üreme hücresinin hangisiyle birleşeceği önceden belli değildir.

Adım adım düşünelim. Genotipi **Aa** olan bir bezelye iki çeşit üreme hücresi oluşturur: bazıları **A**, bazıları **a** taşır. Öbür ebeveyn de Aa ise, o da iki çeşit üreme hücresi oluşturur.

Döllenme sırasında hangi ikisinin bir araya geleceğini biz seçmeyiz. Dört farklı birleşme mümkündür ve her biri eşit şanslıdır:

- A (anneden) + A (babadan) → **AA**
- A (anneden) + a (babadan) → **Aa**
- a (anneden) + A (babadan) → **Aa**
- a (anneden) + a (babadan) → **aa**

Dört ihtimalden üçünde en az bir baskın gen var; yani üçü mor çiçekli olur. Yalnız biri (aa) beyaz çiçekli olur.

Buradan şu sonuç çıkar: **her bir yavrunun** mor olma olasılığı dörtte üç (%75), beyaz olma olasılığı dörtte birdir (%25).

Şimdi en kritik noktaya gelelim. Bu sonuç “dört yavrudan tam üçü mor olacak” demek **değildir.**

Neden? Çünkü her yavru bağımsız bir olaydır. Dört yavrunun dördü de mor olabilir; dördü de beyaz olabilir (düşük bir olasılıkla). Olasılık, yavru sayısı arttıkça gerçek orana yaklaşır ama küçük sayılarda sapma gösterir.

Bunu zar atmaya benzetebilirsin: bir zarda 6 gelme olasılığı altıda birdir; ama altı kez zar attığında mutlaka bir kez 6 gelecek diye bir kural yoktur.

Bu ayrım neden bu kadar önemli? Çünkü sorularda sık sık şu kalıp kullanılır: *“Bu çaprazlamadan doğan 4 yavrudan kaçı beyaz çiçekli **olur**?”* Bu soru, cevabı “kesin olarak söylenemez” olan bir soru biçimidir. Doğru yaklaşım her yavru için olasılığı söylemektir.

Son olarak: bu derste yapacağımız bütün çaprazlamalar bezelye karakterleriyle sınırlıdır. Bu bir tercih değil, programın koyduğu bir sınırdır.`,
  },

  mechanism: {
    title: 'Çaprazlama nasıl yapılır?',
    lead: 'Beş adımlık bir işlem. Adımları atlamadan uygularsan hata yapmazsın.',
    intro:
      'Aşağıdaki sıra, tek karakter çaprazlamasının standart çözüm yoludur. Her adım bir öncekinin sonucudur.',
    steps: [
      {
        title: '1. Karakteri ve harfleri belirle',
        body: 'Hangi karakter inceleniyor? Baskın olan hangisi? Baskın için büyük, çekinik için küçük harf seç. Örnek: mor çiçek A, beyaz çiçek a.',
      },
      {
        title: '2. Ebeveynlerin genotipini yaz',
        body: 'Fenotipten genotipe git. Çekinik fenotipli ebeveynin genotipi kesindir (aa). Baskın fenotipli ebeveyn için soruda verilen ek bilgiyi kullan.',
      },
      {
        title: '3. Her ebeveynin üreme hücrelerini çıkar',
        body: 'Her üreme hücresi gen çiftinin yalnız bir üyesini taşır. AA ise tek çeşit (A); Aa ise iki çeşit (A ve a); aa ise tek çeşit (a).',
      },
      {
        title: '4. Tüm birleşmeleri tabloya yaz',
        body: 'Bir ebeveynin üreme hücrelerini satırlara, öbürününkileri sütunlara yaz. Kesişen her kutuya iki geni birleştirerek yavru genotipini yaz.',
      },
      {
        title: '5. Genotip ve fenotip oranlarını say',
        body: 'Tablodaki kutuları say. Kaç tanesi AA, kaç tanesi Aa, kaç tanesi aa? Sonra fenotipe geç: en az bir büyük harf içerenler baskın fenotiplidir.',
      },
      {
        title: '6. Sonucu olasılık diliyle yaz',
        body: '“Yavruların şu kadarı şöyle olur” değil, “her bir yavrunun şöyle olma olasılığı şudur” de. Bu, sonucun doğru okunmasıdır.',
      },
    ],
    takeaway:
      'İşlemin kalbi 3. adımdır: üreme hücrelerini doğru çıkarırsan tablo kendiliğinden dolar.',
  },

  comparison: {
    title: 'Üç temel çaprazlama, üç farklı sonuç',
    columns: ['AA × aa', 'Aa × Aa', 'Aa × aa'],
    rows: [
      { label: 'Ebeveyn fenotipleri', values: ['Mor (saf döl) × Beyaz', 'Mor (melez) × Mor (melez)', 'Mor (melez) × Beyaz'] },
      { label: 'Yavru genotipleri', values: ['Hepsi Aa', 'AA, Aa, Aa, aa', 'Aa, Aa, aa, aa'] },
      { label: 'Genotip olasılıkları', values: ['%100 Aa', '%25 AA · %50 Aa · %25 aa', '%50 Aa · %50 aa'] },
      { label: 'Fenotip olasılıkları', values: ['%100 mor', '%75 mor · %25 beyaz', '%50 mor · %50 beyaz'] },
      { label: 'Beyaz yavru çıkar mı?', values: ['Çıkmaz', 'Çıkabilir (%25)', 'Çıkabilir (%50)'] },
      { label: 'Ne işe yarar?', values: ['Baskın olanı belirlemek', 'Taşıyıcılığı göstermek', 'Bilinmeyen genotipi sınamak'] },
    ],
    insight:
      'Üçüncü sütun özellikle kullanışlıdır: baskın fenotipli bir bireyi çekinik fenotipli bir bireyle çaprazlarsan, yavrular arasında çekinik fenotip çıkması o bireyin melez döl olduğunu gösterir.',
  },

  traps: [
    {
      title: 'Olasılığı kesinlik sanmak',
      wrong: 'Aa × Aa çaprazlamasından doğan 4 yavrunun tam 3’ü mor, 1’i beyaz olur.',
      right: 'Her bir yavrunun mor olma olasılığı %75, beyaz olma olasılığı %25’tir. Dört yavrunun dördü de mor çıkabilir.',
      body: 'Her döllenme bağımsız bir olaydır. Olasılık, yavru sayısı çok arttığında gerçek orana yaklaşır; dört yavruda kesin bir dağılım vermez. Soruda “kesin olarak söylenebilir mi?” ifadesini gördüğünde bu ayrımı hatırla.',
    },
    {
      title: 'Cinsiyeti annenin belirlediğini sanmak',
      wrong: 'Çocuğun kız ya da erkek olmasında annenin payı belirleyicidir.',
      right: 'Anne yalnız **X** kromozomu verebilir. Baba ise **X ya da Y** verebilir. Bu yüzden cinsiyeti belirleyen, babadan gelen eşey kromozomudur.',
      body: 'Program bu noktanın açıkça vurgulanmasını ister. Annenin eşey kromozomları XX olduğu için verebileceği tek seçenek X’tir; belirleyici olan babanın X mi Y mi verdiğidir.',
    },
    {
      title: 'Bir önceki çocuğun sonraki gebeliği etkilediğini sanmak',
      wrong: 'İlk üç çocuk kız olduysa dördüncünün erkek olma olasılığı artar.',
      right: 'Her döllenme bağımsızdır. Önceki çocukların cinsiyeti, sonraki gebeliğin olasılığını **değiştirmez**; olasılık her seferinde %50 kız, %50 erkektir.',
      body: 'Bu, olasılık konusunda en yaygın yanılgıdır. Geçmiş sonuçlar gelecekteki bağımsız bir olayın olasılığını değiştirmez.',
    },
    {
      title: 'Akraba evliliğinin hastalığa “yol açtığını” sanmak',
      wrong: 'Akraba evliliği kalıtsal hastalık üretir.',
      right: 'Akraba evliliği yeni bir hastalık **oluşturmaz**; ailede zaten taşınan çekinik genlerin aynı çocukta bir araya gelme **olasılığını artırır.**',
      body: 'Fark önemlidir: gen zaten ailede vardır. Akrabalık, iki taşıyıcının karşılaşma olasılığını yükselttiği için çekinik hastalıkların görülme sıklığı artar.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-caprazlama-tablo',
      title: 'Çaprazlama tablosunu kurmak',
      lead: 'Tablo bir şekil değil, bir düşünme aracıdır: bütün ihtimalleri atlamadan görmeni sağlar.',
      blocks: [
        {
          id: 'lgs-fen-caprazlama-tablo-anlatim',
          type: 'prose',
          body: `Çaprazlama tablosu, iki ebeveynin üreme hücrelerini kesiştirerek bütün olası yavru genotiplerini gösterir. Neden tabloya ihtiyaç var? Çünkü akıldan sayarken bir ihtimali atlamak çok kolaydır.

Tabloyu kurmanın kuralı basittir: bir ebeveynin üreme hücreleri **üst satıra**, öbürününkiler **sol sütuna** yazılır. Kesişen kutulara iki gen birleştirilerek yavru genotipi yazılır.

**Aa × Aa** çaprazlamasını kuralım.

Anne Aa olduğu için iki çeşit üreme hücresi oluşturur: A ve a. Baba da Aa olduğu için o da A ve a oluşturur. Öyleyse tabloda 2 × 2 = 4 kutu olur.

Kutuları dolduralım: A ile A birleşirse AA; A ile a birleşirse Aa; a ile A birleşirse yine Aa; a ile a birleşirse aa.

Sonuç: **AA, Aa, Aa, aa.**

Şimdi sayalım. Genotip bakımından: dört kutudan biri AA, ikisi Aa, biri aa. Yani genotip olasılıkları %25 AA, %50 Aa, %25 aa’dır.

Fenotip bakımından: en az bir büyük harf içeren kutular baskın fenotiplidir. AA, Aa ve Aa → üç kutu mor. Yalnız aa → bir kutu beyaz. Yani fenotip olasılıkları **%75 mor, %25 beyaz**tır.

Dikkat: genotip oranı ile fenotip oranı **farklıdır**. Genotipte üç çeşit vardır (AA, Aa, aa), fenotipte iki çeşit vardır (mor, beyaz). Sorular çoğu zaman bu ikisini ayırt edip etmediğini ölçer.

Bir de şu ayrımı not et: dört kutu, “dört yavru olacak” demek değildir. Dört kutu, **dört eşit olasılıklı ihtimal** demektir. Bir bitkinin yüzlerce yavrusu olabilir; her birinin olasılığı yine aynıdır.

Son olarak *programın sınırını* tekrar hatırlatalım: bu çaprazlamalar bezelye karakterleriyle sınırlıdır. Bezelyede kullanılan karakterler şunlardır: çiçek rengi (mor–beyaz), tohum rengi (sarı–yeşil), tohum biçimi (düz–buruşuk), bitki boyu (uzun–kısa).

Ama bu sınırı yanlış okuma: çaprazlama **problemleri** bezelyeyle sınırlıdır, **kurallar** değil. Program aynı açıklamada şunun da vurgulanmasını ister: **diğer canlılarda da karakterlerin aktarımı benzerdir.** Genlerin çift hâlde bulunması, her üreme hücresinin çiftin yalnız bir üyesini taşıması, baskın genin çekinik geni örtmesi — bunlar yalnız bezelyeye özgü değildir; hayvanlarda ve insanda da karakterler benzer biçimde aktarılır. Bezelyenin seçilme nedeni, karakterlerinin net olması ve çevreden az etkilenmesidir; kuralların yalnız onda geçerli olması değil.`,
        },
        {
          id: 'lgs-fen-caprazlama-tablo-veri',
          type: 'table',
          interactive: true,
          title: 'Aa × Aa çaprazlama tablosu',
          columns: ['', 'Baba: A', 'Baba: a'],
          rows: [
            ['Anne: A', 'AA → mor', 'Aa → mor'],
            ['Anne: a', 'Aa → mor', 'aa → beyaz'],
          ],
          caption:
            'Dört kutu dört eşit olasılıklı ihtimaldir. Genotip: %25 AA · %50 Aa · %25 aa. Fenotip: %75 mor · %25 beyaz.',
        },
        {
          id: 'lgs-fen-caprazlama-tablo-veri2',
          type: 'table',
          interactive: true,
          title: 'Aa × aa çaprazlama tablosu',
          columns: ['', 'Baba: a', 'Baba: a'],
          rows: [
            ['Anne: A', 'Aa → mor', 'Aa → mor'],
            ['Anne: a', 'aa → beyaz', 'aa → beyaz'],
          ],
          caption:
            'Çekinik fenotipli ebeveyn tek çeşit üreme hücresi verir (a). Sonuç: %50 mor · %50 beyaz. Bu çaprazlama, bilinmeyen bir genotipi sınamak için kullanılır.',
        },
        {
          id: 'lgs-fen-caprazlama-tablo-tuzak',
          type: 'trap',
          title: 'Genotip oranı ile fenotip oranını karıştırmak',
          wrong: 'Aa × Aa çaprazlamasında hem genotip hem fenotip oranı 1:2:1’dir.',
          right: 'Genotip oranı 1 AA : 2 Aa : 1 aa’dır. Fenotip oranı ise **3 mor : 1 beyaz**tır; çünkü AA ile Aa aynı fenotipi verir.',
          body: 'Sorunun “genotip” mi “fenotip” mi sorduğunu okurken işaretle. İki oran farklıdır ve çeldiriciler tam bu farkın üzerine kurulur.',
        },
        {
          id: 'lgs-fen-caprazlama-tablo-hafiza',
          type: 'memory',
          title: 'Üç çaprazlamanın sonucu',
          body:
            '**AA × aa → hepsi Aa (hepsi baskın fenotip).** **Aa × Aa → %75 baskın, %25 çekinik.** **Aa × aa → %50 baskın, %50 çekinik.**',
        },
      ],
    },

    {
      id: 'lgs-fen-caprazlama-cinsiyet',
      title: 'Cinsiyet nasıl belirleniyor?',
      lead: 'Programın açıkça vurgulanmasını istediği nokta burada: belirleyici olan babadan gelen kromozomdur.',
      blocks: [
        {
          id: 'lgs-fen-caprazlama-cinsiyet-anlatim',
          type: 'prose',
          body: `İnsan hücrelerinde **23 çift** kromozom bulunur. Bu çiftlerin 22’si vücut özellikleriyle ilgilidir. **23. çift** ise cinsiyeti belirler ve buna **eşey kromozomu** denir.

Eşey kromozomları iki harfle gösterilir: **X** ve **Y**.

- Kadında eşey kromozomları **XX**’tir.
- Erkekte eşey kromozomları **XY**’dir.

Şimdi üreme hücrelerine bakalım. Her üreme hücresi kromozom çiftinin yalnız bir üyesini taşır.

**Anne XX olduğu için** oluşturduğu üreme hücrelerinin hepsi **X** taşır. Annenin verebileceği başka bir seçenek yoktur.

**Baba XY olduğu için** iki çeşit üreme hücresi oluşturur: bazıları **X**, bazıları **Y** taşır.

Döllenmede anneden gelen X ile babadan gelen kromozom birleşir:

- Babadan **X** gelirse → XX → **kız**
- Babadan **Y** gelirse → XY → **erkek**

İşte bu yüzden **cinsiyeti belirleyen, babadan gelen eşey kromozomudur.** Program bu noktanın vurgulanmasını açıkça ister; çünkü toplumda yaygın olan yanlış inanış bunun tersidir.

Dikkat: bu ifade “annenin katkısı yok” demek değildir. Anne de bir eşey kromozomu verir; ama verebileceği tek seçenek X olduğu için sonucu **değiştiren** taraf o değildir. Belirleyici olan, iki seçeneği bulunan taraftır.

Olasılık hesabı da buradan çıkar. Babanın üreme hücrelerinin yarısı X, yarısı Y taşır. Öyleyse her gebelikte:

- Kız olma olasılığı **%50**
- Erkek olma olasılığı **%50**

Bir kez daha vurgulayalım: her gebelik **bağımsız** bir olaydır. Bir ailede önceki çocukların cinsiyeti, sonraki gebeliğin olasılığını değiştirmez. Üç kız çocuğu olan bir ailede dördüncü çocuğun erkek olma olasılığı yine %50’dir.`,
        },
        {
          id: 'lgs-fen-caprazlama-cinsiyet-veri',
          type: 'table',
          interactive: true,
          title: 'Cinsiyetin belirlenmesi: XX × XY',
          columns: ['', 'Baba: X', 'Baba: Y'],
          rows: [
            ['Anne: X', 'XX → kız', 'XY → erkek'],
            ['Anne: X', 'XX → kız', 'XY → erkek'],
          ],
          caption:
            'Annenin iki satırı da X’tir; annenin verebileceği tek seçenek budur. Sonucu değiştiren sütunlardır, yani babadan gelen kromozom. Olasılık: %50 kız · %50 erkek.',
        },
        {
          id: 'lgs-fen-caprazlama-cinsiyet-neden',
          type: 'cause_effect',
          title: 'Neden belirleyici olan baba?',
          intro: 'Zinciri adım adım kurarsak sonuç bir ezber olmaktan çıkar.',
          steps: [
            { title: 'Sebep', body: 'Kadının eşey kromozomları XX, erkeğinkiler XY’dir.' },
            { title: 'Gelişme', body: 'Üreme hücresi kromozom çiftinin bir üyesini taşır. Anne yalnız X verebilir; baba X ya da Y verebilir.' },
            { title: 'Sonuç', body: 'Yavrunun eşey kromozomu çifti, babadan hangisinin geldiğine göre XX ya da XY olur.' },
            { title: 'Sonraki etki', body: 'Bu yüzden cinsiyetin belirlenmesinde etkili olan, babadan gelen eşey kromozomudur; olasılık her gebelikte %50–%50’dir.' },
          ],
          inference:
            'Belirleyici olan taraf, iki farklı seçenek sunabilen taraftır. Tek seçenek sunan taraf sonucu değiştiremez.',
        },
        {
          id: 'lgs-fen-caprazlama-cinsiyet-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Bu konuda sorular genellikle “cinsiyeti kim belirler?” diye doğrudan sormaz; bir aile örneği verip “aşağıdakilerden hangisi söylenebilir?” diye sorar. Çeldiriciler çoğunlukla annenin belirleyici olduğunu ya da önceki çocukların olasılığı değiştirdiğini söyler.',
        },
      ],
    },

    {
      id: 'lgs-fen-caprazlama-akraba',
      title: 'Akraba evliliğinin genetik sonuçları',
      lead: 'Kazanım bunun tartışılmasını ister. Tartışmanın dayanağı taşıyıcılık kavramıdır.',
      blocks: [
        {
          id: 'lgs-fen-caprazlama-akraba-anlatim',
          type: 'prose',
          body: `Şimdiye kadar öğrendiğimiz iki şeyi birleştireceğiz: **taşıyıcılık** ve **olasılık**.

Hatırla: melez döl bir birey çekinik geni taşır ama fenotipinde göstermez. Yani dışarıdan tamamen sağlıklı görünür. Buna **taşıyıcı** denir.

Çekinik bir kalıtsal hastalığın ortaya çıkması için çocuğun **iki çekinik geni de** alması gerekir; yani hem anneden hem babadan. Anne ve babanın ikisi de taşıyıcıysa bu mümkündür.

Peki akrabalığın bununla ne ilgisi var?

**Akrabalar ortak bir atadan gelir.** Ortak atada bulunan bir çekinik gen, o soydan gelen bireylere aktarılmış olabilir. Bu yüzden akraba olan iki bireyin **aynı çekinik geni taşıma olasılığı**, akraba olmayan iki bireye göre daha yüksektir.

Zinciri kuralım:

Ortak ata → aynı çekinik genin soyda taşınması → iki akrabanın aynı geni taşıma olasılığının yüksek olması → iki taşıyıcının evlenme olasılığının artması → çocukta iki çekinik genin bir araya gelme olasılığının artması → çekinik kalıtsal hastalıkların daha sık görülmesi.

Burada çok önemli bir ayrım var ve bunu doğru kurmak gerekir:

**Akraba evliliği hastalık üretmez.** Yeni bir gen oluşturmaz, var olmayan bir hastalığı yaratmaz. Yaptığı tek şey, ailede **zaten var olan** çekinik genlerin aynı çocukta bir araya gelme **olasılığını artırmaktır.**

Bu yüzden doğru ifade şudur: akraba evliliklerinde çekinik genlerle kalıtılan hastalıkların görülme **olasılığı** artar.

Bir noktayı daha netleştirelim: akrabalık derecesi arttıkça (yani akrabalık ne kadar yakınsa) ortak gen taşıma olasılığı da o kadar yüksek olur.

Peki ne yapılabilir? Evlilik öncesinde yapılan **genetik danışmanlık** ve tarama uygulamaları, ailede taşınan çekinik genlerin belirlenmesine yardımcı olur. Böylece aileler bilgilendirilmiş olur. Ülkemizde evlilik öncesi bazı taramalar yaygın biçimde uygulanmaktadır.

*Kapsam notu: bu kazanımın fiili “tartışır”dır. Senden istenen, sonucu ezberlemek değil, taşıyıcılık ve olasılık kavramlarını kullanarak nedenini açıklayabilmektir.*`,
        },
        {
          id: 'lgs-fen-caprazlama-akraba-tablo',
          type: 'table',
          interactive: true,
          title: 'İki taşıyıcı ebeveynden doğan çocuk için olasılıklar',
          columns: ['', 'Baba: A (sağlam)', 'Baba: a (çekinik)'],
          rows: [
            ['Anne: A (sağlam)', 'AA → sağlıklı, taşıyıcı değil', 'Aa → sağlıklı, taşıyıcı'],
            ['Anne: a (çekinik)', 'Aa → sağlıklı, taşıyıcı', 'aa → hastalık görülür'],
          ],
          caption:
            'İki taşıyıcıdan (Aa × Aa) doğan her çocuk için: %25 taşıyıcı olmayan sağlıklı, %50 taşıyıcı sağlıklı, %25 hastalığın görüldüğü birey. Akrabalık, iki taşıyıcının bir araya gelme olasılığını artırdığı için bu tablo daha sık gündeme gelir.',
        },
        {
          id: 'lgs-fen-caprazlama-akraba-tuzak',
          type: 'trap',
          title: '“Akraba evliliğinden doğan her çocuk hastalanır” sanmak',
          wrong: 'Akraba evliliği yapan çiftlerin çocukları kalıtsal hastalıkla doğar.',
          right: 'İki taşıyıcı ebeveynden doğan her çocuk için hastalığın görülme olasılığı **%25**’tir. Çocukların çoğu sağlıklı olur; ama olasılık akraba olmayan çiftlere göre yüksektir.',
          body: 'Kavramı “kesinlik” diliyle kurmak hem bilimsel olarak yanlıştır hem de gereksiz bir korku üretir. Doğru dil olasılık dilidir.',
        },
        {
          id: 'lgs-fen-caprazlama-akraba-baglanti',
          type: 'connection',
          title: 'Kavramlar nasıl birbirine bağlanıyor?',
          body:
            'Bu bölüm dersin üç parçasını tek zincire bağlar: taşıyıcılık kavramı kalıtım dersinden, olasılık hesabı çaprazlamadan, sonucun yorumlanması ise bu bölümden gelir.',
          links: [
            'Melez döl = taşıyıcı: fenotipte görünmez, genotipte durur.',
            'İki taşıyıcıdan çekinik fenotipli birey çıkma olasılığı %25’tir.',
            'Akrabalık, iki taşıyıcının karşılaşma olasılığını artırır.',
            'Genetik danışmanlık, taşıyıcılığın önceden belirlenmesini sağlar.',
            'Olasılık dili kesinlik dilinden farklıdır; bu fark her soruda ölçülür.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Klasik çaprazlama',
      prompt:
        'Bezelyede mor çiçek rengi (A) baskın, beyaz çiçek rengi (a) çekiniktir. Melez döl iki mor çiçekli bezelye çaprazlandığında yavruların fenotip olasılıkları ne olur?',
      steps: [
        { title: '1. Genotipleri yaz', body: 'Melez döl demek Aa demektir. Çaprazlama: Aa × Aa.' },
        { title: '2. Üreme hücrelerini çıkar', body: 'Aa genotipli her ebeveyn iki çeşit üreme hücresi verir: A ve a.' },
        { title: '3. Tabloyu doldur', body: 'Dört kutu oluşur: AA, Aa, Aa, aa.' },
        { title: '4. Genotipleri say', body: 'Bir AA, iki Aa, bir aa. Genotip olasılıkları: %25 AA, %50 Aa, %25 aa.' },
        { title: '5. Fenotipe geç', body: 'En az bir büyük harf içerenler mor: AA, Aa, Aa → üç kutu. Yalnız aa beyaz → bir kutu.' },
        { title: '6. Olasılık diliyle yaz', body: 'Her bir yavrunun mor olma olasılığı %75, beyaz olma olasılığı %25’tir.' },
      ],
      answer: 'Her yavru için %75 mor çiçekli, %25 beyaz çiçekli olma olasılığı vardır.',
      takeaway:
        'Cevabı “üçü mor biri beyaz olur” diye yazmak yanlıştır; doğru ifade olasılık dilindedir.',
    },
    {
      title: 'Seviye 2 — Bilinmeyen genotipi sınamak',
      prompt:
        'Mor çiçekli bir bezelyenin saf döl mü melez döl mü olduğu bilinmiyor. Bu bitki beyaz çiçekli bir bezelyeyle çaprazlanıyor ve yavrular arasında beyaz çiçekli bitkiler çıkıyor. Bilinmeyen bitkinin genotipi nedir?',
      steps: [
        { title: '1. Bilinen ebeveyni yaz', body: 'Beyaz çiçekli bitki çekinik fenotiplidir; genotipi kesin olarak aa’dır ve yalnız a taşıyan üreme hücresi verir.' },
        { title: '2. İki ihtimali kur', body: 'Bilinmeyen bitki ya AA ya da Aa’dır. İki ihtimali ayrı ayrı sınayacağız.' },
        { title: '3. Birinci ihtimali dene', body: 'AA × aa olsaydı, AA yalnız A verirdi. Bütün yavrular Aa olurdu ve hepsi mor görünürdü. Beyaz yavru çıkmazdı.' },
        { title: '4. İkinci ihtimali dene', body: 'Aa × aa olsaydı, Aa hem A hem a verir. Yavrular Aa ve aa olur; aa olanlar beyaz görünür.' },
        { title: '5. Gözlemle karşılaştır', body: 'Gözlemde beyaz yavrular çıkmış. Bu, birinci ihtimali eler.' },
        { title: '6. Sonucu yaz', body: 'Bilinmeyen bitkinin genotipi **Aa**’dır; yani melez döldür ve çekinik geni taşımaktadır.' },
      ],
      answer: 'Bilinmeyen bitki melez döldür: Aa.',
      takeaway:
        'Bilinmeyen bir genotipi belirlemenin yolu, onu çekinik fenotipli bir bireyle çaprazlamaktır. Bu, sonucu doğrudan okunabilir kılar.',
    },
    {
      title: 'Seviye 3 — Cinsiyet ve olasılık yorumu',
      prompt:
        'Bir ailenin üç çocuğu var ve üçü de kız. Anne ve baba dördüncü çocuklarının erkek olmasını bekliyor. Bu beklenti bilimsel olarak doğru mudur? Gerekçeni yaz.',
      steps: [
        { title: '1. Eşey kromozomlarını yaz', body: 'Anne XX, baba XY’dir. Anne yalnız X verebilir; baba X ya da Y verebilir.' },
        { title: '2. Olasılığı hesapla', body: 'Babanın üreme hücrelerinin yarısı X, yarısı Y taşır. Öyleyse her gebelikte %50 kız, %50 erkek olasılığı vardır.' },
        { title: '3. Bağımsızlığı kontrol et', body: 'Her döllenmede hangi üreme hücresinin birleşeceği önceki gebeliklerden etkilenmez. Olaylar bağımsızdır.' },
        { title: '4. Beklentiyi değerlendir', body: 'Önceki üç çocuğun kız olması, dördüncüde erkek olma olasılığını artırmaz. Olasılık yine %50’dir.' },
        { title: '5. Sonucu yaz', body: 'Beklenti bilimsel olarak doğru değildir. Dördüncü çocuğun erkek olma olasılığı da kız olma olasılığı da %50’dir.' },
      ],
      answer:
        'Doğru değildir. Her gebelik bağımsızdır; dördüncü çocuk için de olasılık %50 kız, %50 erkektir.',
      takeaway:
        'Olasılıkta geçmiş sonuçlar, bağımsız bir sonraki olayın olasılığını değiştirmez.',
    },
  ],

  dailyLife: {
    title: 'Bu bilgi nerelerde kullanılıyor?',
    body:
      'Çaprazlama ve taşıyıcılık kavramları, hem tarımda hem sağlık alanında somut kararların dayanağıdır.',
    links: [
      'Bitki ıslahında istenen özellikte saf döl elde etmek için çaprazlamalar planlanır.',
      'Hayvancılıkta verimi yüksek bireylerin yetiştirilmesinde kalıtım bilgisi kullanılır.',
      'Evlilik öncesi genetik danışmanlıkta taşıyıcılık araştırılır.',
      'Ailede görülen kalıtsal hastalıkların kuşaklar arasındaki dağılımı soy ağacıyla incelenir.',
      'Tohum üreticileri, satacakları tohumun saf döl olup olmadığını çaprazlamayla sınar.',
    ],
  },

  questionClue: {
    concept: 'Çaprazlama ve cinsiyet sorusu',
    statement:
      'Soruda ebeveyn genotipleri, “melez döl / saf döl” ifadeleri, yüzde olasılıklar ya da bir aile örneği varsa, sorulan şey çaprazlama mantığıdır.',
    clues: [
      'İki ebeveynin genotip ya da fenotipinin verilmesi',
      '“Yavruların yüzde kaçı” biçimindeki ifadeler',
      '“Kesin olarak söylenebilir mi?” kalıbı',
      'Bir ailedeki çocukların cinsiyetlerinin sayılması',
      'Akraba evliliği ve taşıyıcılıktan söz edilmesi',
    ],
    reasoning:
      'Bu işaretler sorunun olasılık yorumu istediğini gösterir. Çözüm yolu beş adımı uygulamak ve sonucu **olasılık diliyle** ifade etmektir.',
    boundary:
      'Bu ipuçlarını “tablo gördüm, dört kutu doldururum” refleksine çevirme. Asıl ölçülen, sonucu kesinlik mi olasılık mı diye doğru okuyabilmendir. Ayrıca çaprazlamaların yalnız bezelye karakterleriyle yapıldığını unutma.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.2.2.2 ve F.8.2.2.3 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Ebeveyn genotipleri verilip yavru fenotip olasılığının sorulması',
      'Yavru fenotipinden ebeveyn genotiplerinin bulunması',
      'Genotip oranı ile fenotip oranının ayırt edilmesi',
      'Bir çaprazlama sonucunun kesin mi olasılık mı olduğunun sorgulanması',
      'Bir ailede cinsiyetin belirlenmesiyle ilgili yorum yapılması',
      'Akraba evliliğinde çekinik hastalık olasılığının artma nedeninin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Saf döl mor çiçekli (AA) bir bezelye, beyaz çiçekli (aa) bir bezelye ile çaprazlanıyor. Yavruların genotip ve fenotipi ne olur?',
      hint: 'Her ebeveyn kaç çeşit üreme hücresi veriyor?',
      answer:
        'AA yalnız A taşıyan, aa yalnız a taşıyan üreme hücresi verir. Öyleyse bütün yavrular **Aa** genotipinde olur; yani hepsi melez döldür. Fenotipte hepsi mor çiçekli görünür, çünkü baskın gen çekinik genin etkisini örter. Yavruların hepsi çekinik geni taşır ama göstermez.',
    },
    {
      prompt:
        'Bir ailede iki çocuk var ve ikisi de erkek. Üçüncü çocuğun kız olma olasılığı nedir? Neden?',
      hint: 'Döllenmeler birbirini etkiliyor mu?',
      answer:
        'Olasılık **%50**’dir. Anne yalnız X verebilir; baba X ya da Y verebilir ve üreme hücrelerinin yarısı X, yarısı Y taşır. Her döllenme bağımsız bir olaydır; önceki çocukların erkek olması üçüncünün olasılığını değiştirmez. “İki erkek oldu, artık kız olmalı” düşüncesi yaygın bir yanılgıdır.',
    },
    {
      prompt:
        'Akraba evliliğinde çekinik genlerle kalıtılan hastalıkların görülme olasılığı neden artar? Akraba evliliği bu hastalıkları üretir mi?',
      hint: 'Ortak ata ve taşıyıcılık kavramlarını birlikte kullan.',
      answer:
        'Akrabalar ortak bir atadan geldiği için aynı çekinik geni taşıma olasılıkları yüksektir. İki taşıyıcı birey evlendiğinde, çocuğun iki çekinik geni birden alma olasılığı artar ve çekinik hastalık ortaya çıkabilir. Ancak akraba evliliği bu hastalıkları **üretmez**; gen zaten ailede taşınmaktadır. Yaptığı tek şey, iki çekinik genin aynı çocukta bir araya gelme olasılığını yükseltmektir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey işlem değil, sonucu doğru okumak',
    body:
      'Kazanım “problemler çözerek sonuçlar hakkında **yorum yapar**” diyor. Yani asıl ölçülen, tabloyu doldurmak değil, çıkan sonucun ne anlama geldiğini söyleyebilmek. MEB merkezî sınav kılavuzu da soruların yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: “%25” sonucunu bulmak yetmez; bunun “dört yavrudan biri kesin beyaz olur” demek olmadığını da bilmen gerekir.',
    measures: [
      'Ebeveyn genotiplerinden yavru olasılıklarını çıkarabilme',
      'Genotip oranı ile fenotip oranını ayırt edebilme',
      'Yavru fenotipinden ebeveyn genotipine geri gidebilme',
      'Olasılık ile kesinliği ayırabilme',
      'Cinsiyetin belirlenmesinde babadan gelen kromozomun rolünü açıklayabilme',
      'Akraba evliliğinde riskin neden arttığını taşıyıcılıkla açıklayabilme',
    ],
  },

  simulationTable: {
    title: 'Bir bezelye bahçesinde yapılan üç çaprazlamanın kaydı',
    columns: ['Çaprazlama', 'Ebeveyn fenotipleri', 'Yavrularda gözlenen fenotipler'],
    rows: [
      ['1', 'Mor × Beyaz', 'Hepsi mor'],
      ['2', 'Mor × Mor', 'Çoğu mor, bir kısmı beyaz'],
      ['3', 'Mor × Beyaz', 'Bir kısmı mor, bir kısmı beyaz'],
    ],
    caption:
      'Bezelyede mor çiçek rengi baskın (A), beyaz çiçek rengi çekiniktir (a).',
  },

  simulation: {
    title: 'Mini uygulama — özgün bahçe kaydı',
    passage: `Bir öğrenci bezelye bitkileriyle üç ayrı çaprazlama yapıyor ve yavrularda gözlediği çiçek renklerini yukarıdaki tabloya kaydediyor.

Öğrenci, kaydına bakarak ebeveynlerin genotipleri hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi **kesin olarak** söylenebilir?',
    options: [
      {
        text: '1. çaprazlamadaki mor çiçekli ebeveynin genotipi kesin olarak AA’dır',
        explanation:
          'Yavrular arasında beyaz çıkmaması, mor ebeveynin AA olduğuna güçlü bir işarettir; ama tek başına kesin kanıt değildir. Ebeveyn Aa olsaydı da, az sayıda yavruda şans eseri hiç beyaz çıkmamış olabilirdi.',
      },
      {
        text: '2. çaprazlamadaki ebeveynlerden biri saf döldür',
        explanation:
          'Yavrular arasında beyaz (aa) çıkmışsa her iki ebeveyn de birer çekinik gen vermiştir. İkisi de mor göründüğüne göre ikisi de Aa’dır; yani ikisi de melez döldür, hiçbiri saf döl değildir.',
      },
      {
        text: '3. çaprazlamadaki mor çiçekli ebeveyn çekinik gen taşır',
        explanation:
          'Doğru cevap. Yavrular arasında beyaz (aa) çıkmış. Beyaz ebeveyn zaten a verir; yavrudaki öbür a yalnız mor ebeveynden gelmiş olabilir. Öyleyse mor ebeveyn çekinik geni taşımaktadır ve genotipi Aa’dır.',
      },
      {
        text: '2. çaprazlamada yavruların tam olarak dörtte biri beyaz çiçeklidir',
        explanation:
          'Aa × Aa çaprazlamasında her yavru için beyaz olma olasılığı %25’tir; ama bu, gözlenen yavruların tam dörtte birinin beyaz olacağı anlamına gelmez. Olasılık bir kesinlik değildir.',
      },
      {
        text: '1. ve 3. çaprazlamalar aynı ebeveyn genotipleriyle yapılmıştır',
        explanation:
          'İki çaprazlamada ebeveyn fenotipleri aynı görünüyor (mor × beyaz); ama yavru sonuçları farklı. 3. çaprazlamada beyaz yavru çıktığına göre mor ebeveyn Aa’dır; 1. çaprazlamada ise böyle bir kanıt yoktur. Aynı fenotip aynı genotip demek değildir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru üç kaydı ayrı ayrı değerlendirmeyi istiyor. Yöntem: her satırda beyaz yavru çıkıp çıkmadığına bak. Beyaz yavru **çıkmışsa** her iki ebeveynin de çekinik gen taşıdığı kesindir. Çıkmaması ise kesin bir kanıt vermez.',
    critical_point:
      'Kritik nokta bir asimetridir: çekinik fenotipli bir yavrunun **çıkması** kanıttır, **çıkmaması** kanıt değildir. 1. ve 3. çaprazlamada ebeveyn fenotipleri aynı olduğu hâlde yalnız 3. satır kesin bir çıkarıma izin verir.',
    takeaway:
      'Bir gözlemin yokluğu, o şeyin imkânsız olduğunu göstermez. Kesin çıkarım, çekinik fenotipin gerçekten gözlendiği durumlarda yapılır.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question:
        'Bezelyede mor çiçek rengi baskındır. Melez döl iki mor çiçekli bezelye çaprazlandığında **genotip** olasılıkları nedir?',
      options: [
        '%75 Aa · %25 aa',
        '%25 AA · %50 Aa · %25 aa',
        '%50 AA · %50 aa',
        '%100 Aa',
      ],
      answer_index: 1,
      explanation:
        'Aa × Aa çaprazlamasında dört ihtimal oluşur: AA, Aa, Aa, aa. Buradan genotip olasılıkları %25 AA, %50 Aa, %25 aa olarak çıkar. Birinci seçenek AA’yı atlamış; üçüncü seçenek melez dölü yok saymış; dördüncü seçenek ise AA × aa çaprazlamasının sonucudur. Dikkat: %75–%25 oranı genotipin değil, fenotipin oranıdır.',
    },
    {
      purpose: 'concept',
      question: 'İnsanda cinsiyetin belirlenmesiyle ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Anne X ya da Y verebildiği için cinsiyeti anne belirler',
        'Baba X ya da Y verebildiği için cinsiyeti babadan gelen kromozom belirler',
        'Cinsiyet, anne ve babanın verdiği kromozomların toplamıyla belirlenir ve önceden hesaplanabilir',
        'Bir ailede kız çocuk sayısı arttıkça sonraki çocuğun erkek olma olasılığı artar',
      ],
      answer_index: 1,
      explanation:
        'Annenin eşey kromozomları XX olduğu için verebileceği tek seçenek X’tir. Babanın kromozomları XY olduğu için X ya da Y verebilir; sonucu değiştiren taraf budur. Bu yüzden cinsiyeti belirleyen, babadan gelen eşey kromozomudur. Son seçenek olasılıkta bağımsızlık ilkesine aykırıdır: her gebelik ayrı bir olaydır ve olasılık her seferinde %50–%50’dir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Akraba evliliği kalıtsal hastalıklara yol açar.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Akraba evliliğinin hastalık üretmediğini, yalnız olasılığı artırdığını gözden kaçırmak',
        'Çekinik genlerin taşınamayacağını sanmak',
        'Baskın ve çekinik geni karıştırmak',
        'Eşey kromozomlarının sayısını yanlış bilmek',
      ],
      answer_index: 0,
      explanation:
        'Akraba evliliği yeni bir gen oluşturmaz ve var olmayan bir hastalığı yaratmaz. Söz konusu çekinik gen ailede zaten taşınmaktadır. Akrabalık, aynı çekinik geni taşıyan iki bireyin evlenme olasılığını artırdığı için, çocukta iki çekinik genin bir araya gelme olasılığı yükselir. Doğru ifade kesinlik değil olasılık dilindedir.',
    },
  ],

  summary: [
    'Çaprazlama, iki ebeveynin genotipinden yavru olasılıklarını bulma işlemidir.',
    'Her üreme hücresi gen çiftinin yalnız bir üyesini taşır.',
    'AA × aa → yavruların hepsi Aa olur ve hepsi baskın fenotipi gösterir.',
    'Aa × Aa → genotipte %25 AA, %50 Aa, %25 aa; fenotipte %75 baskın, %25 çekinik.',
    'Aa × aa → fenotipte %50 baskın, %50 çekinik; bilinmeyen genotipi sınamak için kullanılır.',
    'Çaprazlama problemleri bezelyeyle sınırlıdır; ama diğer canlılarda da karakterlerin aktarımı benzerdir.',
    'Genotip oranı ile fenotip oranı farklıdır; sorunun hangisini istediğini oku.',
    'Çaprazlama sonucu bir kesinlik değil, her yavru için geçerli bir olasılıktır.',
    'İnsanda 23. kromozom çifti eşey kromozomudur: kadında XX, erkekte XY.',
    'Anne yalnız X verebildiği için cinsiyeti babadan gelen eşey kromozomu belirler.',
    'Her gebelikte kız ve erkek olma olasılığı %50’dir; önceki çocuklar bunu değiştirmez.',
    'Akraba evliliği hastalık üretmez; ailede taşınan çekinik genlerin bir araya gelme olasılığını artırır.',
    'İki taşıyıcı ebeveynden doğan her çocuk için çekinik hastalığın görülme olasılığı %25’tir.',
  ],

  next: [
    'Mutasyon, Modifikasyon ve Adaptasyon (F.8.2.3.1–F.8.2.4.1)',
    'Genetik Mühendisliği ve Biyoteknoloji (F.8.2.5.1–F.8.2.5.3)',
    'Katı Basıncı ve Değişkenleri (F.8.3.1.1)',
  ],
})

export default lesson
