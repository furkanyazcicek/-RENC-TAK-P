import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.6 Enerji Dönüşümleri ve Çevre Bilimi · 1. ders
 * Kazanım : F.8.6.1.1
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   a) "Parazit besin zincirlerine değinilmez."
 *   b) "Ekoloji piramitlerinde enerji aktarımı, vücut büyüklüğü, birey
 *      sayısı ve biyolojik birikim vurgulanır."
 *   Konu / Kavramlar (F.8.6.1): besin zinciri, besin ağı, üretici,
 *   tüketici, ayrıştırıcı, ekoloji piramidi, biyolojik birikim.
 *
 * Bu yüzden derste parazit besin zinciri ve parazitlerin piramitteki
 * istisnaları anlatılmaz. Piramit için yeni bir şema yazıldı
 * (lgs-fen-ekoloji-piramidi); dört eğilim tek yön kuralıyla verilir.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-besin-zinciri-ve-enerji-akisi',
  topic: 'Enerji Dönüşümleri ve Çevre Bilimi',
  order: 1,
  title: 'Besin Zinciri, Besin Ağı ve Ekoloji Piramidi',
  subtitle:
    'Güneşten başlayan enerji, her halkada biraz azalarak bir canlıdan öbürüne geçer. Zehir ise tersine birikir.',
  minutes: 44,
  kazanimlar: ['F.8.6.1.1'],
  prerequisites: [
    { topic: 'Canlılar ve enerji ilişkileri (6. ve 7. sınıf)', why: 'Canlıların beslenme biçimlerini tanımak besin zincirini kurmayı kolaylaştırır.' },
    { topic: 'Mutasyon, Modifikasyon ve Adaptasyon', why: 'Besin ağındaki dengenin bozulması türlerin çevreye uyumuyla birlikte düşünülür.' },
  ],
  outcomes: [
    'Üretici, tüketici ve ayrıştırıcılara örnek verebileceksin.',
    'Bir besin zincirini doğru yönde kurabileceksin.',
    'Besin ağında bir türün azalmasının öbür türleri nasıl etkileyeceğini söyleyebileceksin.',
    'Ekoloji piramidinde yukarı çıktıkça neyin azalıp neyin arttığını açıklayabileceksin.',
    'Biyolojik birikimin neden en üst basamakta en fazla olduğunu gerekçelendirebileceksin.',
  ],

  opening: {
    title: 'Bir tarladaki ilaç, bir kartalın yumurtasında',
    lead: 'Bir tarlaya zararlı böceklere karşı ilaç atılıyor. Yıllar sonra o bölgedeki yırtıcı kuşların yumurtaları kırılgan çıkmaya başlıyor. İki olay arasında nasıl bir bağ olabilir?',
    body: `Bir tarlada ekinlere zarar veren böcekler var. Çiftçi bunlara karşı bir tarım ilacı kullanıyor. İlaç böcekleri azaltıyor; ama ilacın bir kısmı toprağa, suya ve bitkilere karışıyor.

Aradan zaman geçiyor. Bölgedeki bazı yırtıcı kuşların yumurtalarının kabuğu incelmeye, yavruların bir kısmı çıkamadan yumurtaların kırılmaya başladığı fark ediliyor. Oysa bu kuşlara hiç ilaç atılmadı.

Aradaki bağ bir **besin zinciridir.**

İlaç bitkilere geçer, bitkileri yiyen böceklere geçer, böcekleri yiyen küçük hayvanlara, onları yiyen yırtıcı kuşlara… Ve bazı maddeler vücuttan atılamadığı için her halkada **birikerek** artar. En üstteki canlıda en yüksek düzeye ulaşır.

Bu derste doğadaki beslenme ilişkilerini iki yönde izleyeceğiz:

**Birinci yön — enerji.** Güneşten gelen enerji bitkilerde besine dönüşür ve bir canlıdan öbürüne aktarılır. Her aktarımda enerjinin büyük kısmı harcanır; bu yüzden zincirde yukarı çıktıkça **enerji azalır.**

**İkinci yön — biyolojik birikim.** Bazı zararlı maddeler ise tersine davranır: zincirde yukarı çıktıkça **artar.**

Bu iki ters yönlü hareketi **ekoloji piramidi** üzerinde birleştireceğiz. Program da piramitte dört şeyin vurgulanmasını ister: **enerji aktarımı, vücut büyüklüğü, birey sayısı ve biyolojik birikim.**

Bir kapsam notu: *program **parazit besin zincirlerine değinilmemesini** ister.* Bu yüzden bu derste yalnız avcı–av ilişkisine dayanan besin zincirlerini inceleyeceğiz.`,
  },

  concepts: [
    {
      term: 'Üretici',
      body: 'Kendi besinini fotosentezle üretebilen canlıdır: bitkiler, algler ve fotosentez yapan bazı bakteriler. Her besin zincirinin **ilk halkası** üreticidir.',
    },
    {
      term: 'Tüketici',
      body: 'Besinini kendisi üretemeyen, başka canlılarla beslenen canlıdır. Bitkilerle beslenenler **otçul**, hayvanlarla beslenenler **etçil**, ikisiyle de beslenenler **hepçil** tüketicilerdir.',
    },
    {
      term: 'Ayrıştırıcı',
      body: 'Ölü canlıları ve atıkları ayrıştırarak içlerindeki maddeleri toprağa ve havaya geri kazandıran canlılardır: **bakteriler ve mantarlar.** Zincirin her halkasından gelen kalıntılarla beslenirler.',
    },
    {
      term: 'Besin zinciri',
      body: 'Canlılar arasındaki beslenme ilişkisini gösteren doğrusal sıradır. Ok, **besini yenen canlıdan yiyen canlıya** doğru çizilir; yani enerjinin gittiği yönü gösterir.',
    },
    {
      term: 'Besin ağı',
      body: 'Bir ekosistemdeki birden çok besin zincirinin birbirine bağlanmasıyla oluşan yapıdır. Doğada canlıların çoğu birden fazla canlıyla beslendiği için gerçek ilişkiler zincirden çok ağa benzer.',
    },
    {
      term: 'Ekoloji piramidi',
      body: 'Besin zincirindeki basamakları alttan üste üreticiden son tüketiciye doğru gösteren piramittir. Yukarı çıktıkça enerji ve birey sayısı azalır.',
    },
    {
      term: 'Biyolojik birikim',
      body: 'Vücuttan atılamayan bazı zararlı maddelerin (bazı tarım ilaçları, cıva gibi ağır metaller) besin zincirinde yukarı çıktıkça canlıların vücudunda **artarak birikmesidir.**',
    },
  ],

  why: {
    question: 'Piramitte yukarı çıktıkça enerji neden azalır?',
    body: `Çünkü her canlı aldığı enerjinin **büyük kısmını kendisi için harcar.**

Bir çekirge düşün. Otları yer ve besinin içindeki enerjiyi alır. Ama bu enerjinin çoğunu yaşamak için kullanır: hareket eder, vücut sıcaklığını ve yaşamsal faaliyetlerini sürdürür, solunum yapar. Enerjinin bir kısmı ısı olarak çevreye yayılır. Yenen otun bir kısmı da sindirilemeden atılır.

Çekirgenin vücudunda **depolanan** enerji, aldığı enerjinin yalnız küçük bir kısmıdır. Çekirgeyi yiyen kurbağa ise ancak bu depolanmış enerjiyi alabilir.

Aynı şey her basamakta tekrarlanır. Bu yüzden enerji, piramitte yukarı çıktıkça **her basamakta azalır.** Ekoloji kitaplarında bir üst basamağa aktarılan enerjinin genellikle yaklaşık onda bir olduğu kabul edilir; ama asıl öğrenmen gereken sayı değil, **yönüdür:** enerji her aktarımda azalır.

Bu tek kural, piramidin öbür eğilimlerini de açıklar:

**Birey sayısı neden azalır?** Üst basamaktaki canlılar için daha az enerji kalır. Az enerji ancak az sayıda canlıyı besleyebilir. Bir tarlada milyonlarca ot, binlerce çekirge, yüzlerce kurbağa, birkaç yılan bulunmasının nedeni budur.

**Vücut büyüklüğü neden genellikle artar?** Üst basamaklardaki avcılar genellikle avlarından daha iridir; büyük bir avcı, kendisinden küçük çok sayıda avla beslenir.

**Biyolojik birikim neden artar?** Bu, enerjinin tersine bir durumdur. Enerji harcanır ve azalır; ama vücuttan atılamayan zararlı maddeler harcanmaz, **birikir.** Bir kurbağa hayatı boyunca çok sayıda çekirge yer; her çekirgedeki küçük miktarlar kurbağanın vücudunda toplanır. Bir yılan da çok sayıda kurbağa yer ve hepsindeki birikmiş miktarı kendi vücudunda toplar. Bu yüzden zararlı maddenin miktarı **en üst basamakta en fazladır.**

Dört eğilimi tek cümlede toplayalım:

**Piramitte yukarı çıktıkça enerji ve birey sayısı azalır; vücut büyüklüğü genellikle artar; biyolojik birikim artar.**`,
  },

  mechanism: {
    title: 'Enerji besin zincirinde nasıl akar?',
    lead: 'Güneşten ayrıştırıcılara kadar uzanan yol. Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, enerjinin bir ekosistemde nasıl aktarıldığını gösterir.',
    steps: [
      {
        title: '1. Güneş enerjisi üreticilere ulaşır',
        body: 'Bitkiler ve öbür üreticiler güneş ışığını kullanarak fotosentezle besin üretir. Güneş enerjisi besindeki kimyasal enerjiye dönüşür.',
      },
      {
        title: '2. Otçullar üreticileri yer',
        body: '1. basamak tüketiciler (otçullar) bitkilerle beslenerek besindeki enerjiyi alır.',
      },
      {
        title: '3. Her canlı enerjinin çoğunu harcar',
        body: 'Otçul aldığı enerjinin büyük kısmını yaşamsal faaliyetlerinde kullanır; bir kısmı ısı olarak çevreye yayılır. Vücudunda yalnız küçük bir kısmı depolanır.',
      },
      {
        title: '4. Etçiller depolanan enerjiyi alır',
        body: '2. ve 3. basamak tüketiciler kendilerinden önceki basamaktaki canlıları yiyerek yalnız o canlıların vücudunda depolanmış enerjiyi alabilir.',
      },
      {
        title: '5. Ayrıştırıcılar kalıntıları ayrıştırır',
        body: 'Her basamaktaki ölü canlılar ve atıklar bakteri ve mantarlar tarafından ayrıştırılır; içlerindeki maddeler toprağa geri döner.',
      },
      {
        title: '6. Maddeler döner, enerji dönmez',
        body: 'Ayrıştırıcıların toprağa kazandırdığı maddeler yeniden bitkiler tarafından kullanılır. Enerji ise tek yönlü akar ve her basamakta azalır; ekosistemin sürekli güneş enerjisine ihtiyacı vardır.',
      },
    ],
    takeaway:
      'Zincirin son adımı önemli bir ayrım kurar: maddeler döngü hâlinde döner, enerji ise tek yönlü akar.',
  },

  comparison: {
    title: 'Üç rol, üç görev',
    columns: ['Üretici', 'Tüketici', 'Ayrıştırıcı'],
    rows: [
      { label: 'Besinini nasıl elde eder?', values: ['Fotosentezle kendisi üretir', 'Başka canlıları yiyerek', 'Ölü canlıları ve atıkları ayrıştırarak'] },
      { label: 'Örnek', values: ['Ot, ağaç, alg', 'Çekirge, kurbağa, yılan, kartal', 'Bakteriler, mantarlar'] },
      { label: 'Zincirdeki yeri', values: ['İlk halka', 'Üreticiden sonraki halkalar', 'Her halkadan gelen kalıntılar'] },
      { label: 'Olmasaydı ne olurdu?', values: ['Enerji ekosisteme giremezdi', 'Üretici sayısı denetlenemezdi', 'Maddeler toprağa geri dönemezdi'] },
    ],
    insight:
      'Son satır üç rolün de vazgeçilmez olduğunu gösterir. Özellikle ayrıştırıcılar gözden kaçar; ama onlar olmadan madde döngüsü kurulamaz.',
  },

  traps: [
    {
      title: 'Oku ters yönde çizmek',
      wrong: 'Kurbağa → çekirge: kurbağa çekirgeyi yediği için ok kurbağadan çıkar.',
      right: 'Ok **yenenden yiyene** çizilir: çekirge → kurbağa. Ok, enerjinin gittiği yönü gösterir.',
      body: 'Oku “kim kime gidiyor” diye değil, “enerji nereye gidiyor” diye düşün. Enerji yenilen canlıdan yiyen canlıya aktarılır.',
    },
    {
      title: 'Ayrıştırıcıları zincirin dışında saymak',
      wrong: 'Bakteri ve mantarlar besin zincirinde bir rol oynamaz.',
      right: 'Ayrıştırıcılar **her basamaktan** gelen ölü canlıları ve atıkları ayrıştırır; maddelerin toprağa geri dönmesini sağlar.',
      body: 'Ayrıştırıcılar olmasaydı ölü canlılar birikir, topraktaki maddeler tükenir ve üreticiler besin üretemezdi.',
    },
    {
      title: 'Enerjinin döngü hâlinde döndüğünü sanmak',
      wrong: 'Ayrıştırıcılar ölü canlıları ayrıştırınca enerji de toprağa geri döner.',
      right: 'Ayrıştırıcılar **maddeleri** toprağa geri kazandırır; **enerji** ise her basamakta harcanarak azalır ve geri dönmez. Ekosistem sürekli güneş enerjisine ihtiyaç duyar.',
      body: 'Kuralı iki kelimeyle hatırla: **madde döner, enerji akar.**',
    },
    {
      title: 'Biyolojik birikimin en altta en fazla olduğunu sanmak',
      wrong: 'Tarım ilacı doğrudan bitkilere atıldığı için en çok bitkilerde birikir.',
      right: 'Vücuttan atılamayan zararlı maddeler zincirde yukarı çıktıkça **artar**; en fazla **en üst basamaktaki** canlıda birikir.',
      body: 'Her avcı çok sayıda av yer ve her avdaki küçük miktarlar avcının vücudunda toplanır. Bu yüzden zincirin tepesindeki canlı en çok etkilenir.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-besin-piramit',
      title: 'Ekoloji piramidi: dört eğilim, tek yön',
      lead: 'Programın açıklaması piramitte dört şeyin vurgulanmasını ister. Hepsini aynı yön kuralıyla okuyacağız.',
      blocks: [
        {
          id: 'lgs-fen-besin-piramit-sema',
          type: 'figure',
          kind: 'lgs-fen-ekoloji-piramidi',
          title: 'Dört basamaklı bir ekoloji piramidi',
          width: 'full',
          complexity: 'medium',
          caption:
            'Piramitte yukarı çıktıkça enerji miktarı ve birey sayısı azalır; vücut büyüklüğü genellikle artar; biyolojik birikim artar.',
          purpose: 'Piramidin dört eğilimini tek bakışta görünür kılmak',
          alt:
            'Ekoloji piramidi: altta otlar, üstünde çekirge, onun üstünde kurbağa, en üstte yılan. Yanında yukarı çıktıkça enerji ve birey sayısının azaldığı, vücut büyüklüğü ve biyolojik birikimin arttığı yazılıdır.',
          data: {},
          focus: [
            { title: 'Üreticiler — otlar', body: 'Piramidin tabanı. En çok enerji ve en çok birey bu basamaktadır. Güneş enerjisini besine dönüştürürler.' },
            { title: '1. basamak tüketiciler — çekirge', body: 'Otçullar. Üreticilerin depoladığı enerjinin yalnız küçük bir kısmını alırlar.' },
            { title: '2. basamak tüketiciler — kurbağa', body: 'Etçiller. Birey sayısı daha azdır; vücuttan atılamayan maddeler daha yüksek düzeydedir.' },
            { title: '3. basamak tüketiciler — yılan', body: 'Piramidin tepesi. En az enerji ve en az birey buradadır; biyolojik birikim en yüksek düzeydedir.' },
          ],
        },
        {
          id: 'lgs-fen-besin-piramit-anlatim',
          type: 'prose',
          body: `Ekoloji piramidinin tabanında **üreticiler**, üstüne doğru sırasıyla **1., 2. ve 3. basamak tüketiciler** bulunur. Piramit biçiminin kendisi bir bilgi taşır: taban geniştir, tepe dardır.

Programın vurguladığı dört eğilimi tek tek okuyalım.

**1. Enerji aktarımı → yukarı çıktıkça azalır.** Her canlı aldığı enerjinin büyük kısmını yaşamsal faaliyetlerinde harcar; yalnız küçük bir kısmı üst basamağa geçer. Bu yüzden tabandaki enerji en fazla, tepedeki enerji en azdır.

**2. Birey sayısı → yukarı çıktıkça azalır.** Az enerji ancak az sayıda canlıyı besleyebilir. Tabanda çok sayıda bitki, tepede az sayıda avcı bulunur.

**3. Vücut büyüklüğü → yukarı çıktıkça genellikle artar.** Üst basamaklardaki avcılar genellikle avladıkları canlılardan daha iridir.

**4. Biyolojik birikim → yukarı çıktıkça artar.** Vücuttan atılamayan zararlı maddeler her basamakta birikerek artar; en üst basamakta en yüksek düzeye ulaşır.

Dikkat et: dört eğilimin ikisi **azalır**, ikisi **artar.** Sorular çoğu zaman bu ayrımı ölçer. Bir seçenekte “yukarı çıktıkça biyolojik birikim azalır” ya da “yukarı çıktıkça birey sayısı artar” yazıyorsa, o seçenek yanlıştır.

Bir de piramidin **neden** var olduğunu hatırla: piramidin biçimini belirleyen şey **enerjinin her basamakta azalmasıdır.** Enerji azalmasaydı üst basamaklarda da çok sayıda canlı yaşayabilirdi ve piramit bir dikdörtgene dönerdi.

*Kapsam notu: program parazit besin zincirlerine değinilmemesini istediği için, parazitlerin piramitte oluşturduğu istisnalara bu derste girmiyoruz.*`,
        },
        {
          id: 'lgs-fen-besin-piramit-tablo',
          type: 'table',
          interactive: true,
          title: 'Piramitte yukarı çıktıkça',
          columns: ['Eğilim', 'Yön', 'Neden?'],
          rows: [
            ['Enerji miktarı', 'Azalır', 'Her canlı aldığı enerjinin büyük kısmını harcar'],
            ['Birey sayısı', 'Azalır', 'Az enerji az sayıda canlıyı besleyebilir'],
            ['Vücut büyüklüğü', 'Genellikle artar', 'Avcılar genellikle avlarından iridir'],
            ['Biyolojik birikim', 'Artar', 'Atılamayan maddeler her basamakta birikir'],
          ],
          caption: 'İki eğilim azalır, iki eğilim artar. Soruların çoğu bu ayrımı ölçer.',
        },
        {
          id: 'lgs-fen-besin-piramit-hafiza',
          type: 'memory',
          title: 'Dört eğilimi tek cümlede tut',
          body:
            '**Yukarı çıktıkça:** enerji ve sayı **azalır**; boy ve zehir **artar.**',
        },
      ],
    },

    {
      id: 'lgs-fen-besin-ag',
      title: 'Besin ağı: bir halka koparsa ne olur?',
      lead: 'Doğada ilişkiler zincirden çok ağa benzer. Ağın bir ipi koptuğunda sarsıntı bütün ağa yayılır.',
      blocks: [
        {
          id: 'lgs-fen-besin-ag-anlatim',
          type: 'prose',
          body: `Besin zinciri doğrusal bir sıradır: ot → çekirge → kurbağa → yılan. Ama doğada bir canlı çoğu zaman tek bir canlıyla beslenmez. Çekirgeyi kurbağa da yer, kuş da yer. Yılan kurbağayı da yer, fareyi de yer.

Bu çoklu ilişkiler bir araya geldiğinde **besin ağı** oluşur.

Besin ağını okumanın en önemli becerisi şudur: **bir türün sayısı değişirse öbür türler nasıl etkilenir?**

Bir örnek ağ düşünelim:

- Ot → çekirge, ot → tavşan
- Çekirge → kurbağa, çekirge → kuş
- Kurbağa → yılan, tavşan → tilki, kuş → yılan

Şimdi bu ağda **kurbağaların sayısı** bir hastalık yüzünden azalırsa ne olur? Zinciri iki yönde izle.

**Aşağı doğru (kurbağanın yediği canlı):** Kurbağalar azalınca çekirgeleri daha az avlanır. Çekirgelerin sayısı **artar.** Çekirgeler artınca otlar daha çok yenir ve **azalır.**

**Yukarı doğru (kurbağayı yiyen canlı):** Kurbağaları yiyen yılanın besini azalır. Yılan bu durumda öbür besinine, kuşlara daha çok yönelir. Kuşların sayısı **azalabilir.**

Gördüğün gibi tek bir türün azalması, onunla doğrudan ilişkisi olmayan canlıları bile etkiler. Bu yüzden bir ekosistemde **tür çeşitliliği** önemlidir: bir canlının birden çok besin kaynağı varsa, bunlardan birinin azalması onu daha az etkiler.

Bir uyarı: besin ağı sorularında “kesinlikle” ifadesine dikkat et. Bir türün azalmasının sonuçları çoğu zaman **büyük olasılıkla** gerçekleşir, ama başka etkenler de devreye girebilir. Soruyu verilen ağın içinde kalarak ve en doğrudan etkiyi arayarak cevapla.`,
        },
        {
          id: 'lgs-fen-besin-ag-tablo',
          type: 'table',
          interactive: true,
          title: 'Örnek ağda kurbağalar azalırsa',
          columns: ['Canlı', 'Kurbağayla ilişkisi', 'Beklenen değişim', 'Neden?'],
          rows: [
            ['Çekirge', 'Kurbağanın besini', 'Artar', 'Onu yiyen avcılardan biri azaldı'],
            ['Ot', 'Çekirgenin besini', 'Azalır', 'Artan çekirgeler daha çok ot yer'],
            ['Yılan', 'Kurbağayı yer', 'Besini azalır', 'Besin kaynaklarından biri azaldı'],
            ['Kuş', 'Yılanın öbür besini', 'Azalabilir', 'Yılan kuşlara daha çok yönelir'],
          ],
          caption:
            'Etki iki yönde yayılır: kurbağanın yediği canlıya ve kurbağayı yiyen canlıya. Tabloyu ezberleme; her soruda zinciri iki yönde yeniden izle.',
        },
        {
          id: 'lgs-fen-besin-ag-tuzak',
          type: 'trap',
          title: 'Etkiyi yalnız bir yönde izlemek',
          wrong: 'Kurbağalar azalırsa yalnız yılanlar etkilenir.',
          right: 'Etki **iki yönde** yayılır: kurbağanın avı olan çekirgeler artar, kurbağayla beslenen yılanlar besin sıkıntısı çeker; dolaylı olarak otlar ve kuşlar da etkilenir.',
          body: 'Besin ağı sorusunda önce türün yediği canlıya (aşağı), sonra onu yiyen canlıya (yukarı) bak.',
        },
      ],
    },

    {
      id: 'lgs-fen-besin-birikim',
      title: 'Biyolojik birikim: neden en üstte en fazla?',
      lead: 'Programın ayrıca vurgulanmasını istediği dördüncü eğilim. Enerjinin tam tersine davranır.',
      blocks: [
        {
          id: 'lgs-fen-besin-birikim-anlatim',
          type: 'prose',
          body: `**Biyolojik birikim**, bazı zararlı maddelerin besin zincirinde yukarı çıktıkça canlıların vücudunda artarak birikmesidir.

Hangi maddeler birikir? Canlının vücudunda parçalanamayan ve dışarı atılamayan maddeler: **bazı tarım ilaçları** ve **cıva, kurşun gibi ağır metaller.** Bu maddeler toprağa ve suya karıştığında önce üreticilere, oradan zincirin bütün halkalarına geçer.

Neden yukarı çıktıkça artar? Bir örnekle adım adım görelim.

1. Bir göle az miktarda zararlı madde karışır. Sudaki küçük canlılar bu maddeyi alır; her birinde **çok az** miktarda bulunur.
2. Küçük bir balık hayatı boyunca **çok sayıda** küçük canlı yer. Her birindeki az miktar balığın vücudunda **toplanır**; madde atılamadığı için birikir.
3. Büyük bir balık **çok sayıda** küçük balık yer. Onların hepsindeki birikmiş miktarı kendi vücudunda toplar.
4. Balıkla beslenen bir kuş **çok sayıda** büyük balık yer. Maddenin en yüksek düzeyi bu kuşta görülür.

Her basamakta aynı şey olur: avcı **çok sayıda** av yer ve atılamayan madde **toplanır.** Enerji her basamakta harcanarak azalırken, bu maddeler harcanmadığı için artar.

Bu bilginin iki önemli sonucu vardır:

**Birinci sonuç:** Zararlı bir maddenin en çok etkilediği canlılar, zincirin **tepesindeki** canlılardır. Yırtıcı kuşların ve büyük balıkların bu tür maddelerden en çok etkilenmesinin nedeni budur.

**İkinci sonuç:** İnsan da birçok besin zincirinin tepesinde bulunur. Bu yüzden toprağa ve suya karışan zararlı maddeler, zincir yoluyla sonunda **insana** da ulaşabilir. Tarım ilaçlarının bilinçsiz kullanılmaması ve atıkların doğaya karıştırılmaması bu yüzden önemlidir.`,
        },
        {
          id: 'lgs-fen-besin-birikim-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Enerji ile biyolojik birikim: ters yönlü iki akış',
          columns: ['Enerji', 'Biyolojik birikim'],
          rows: [
            { label: 'Yukarı çıktıkça', values: ['Azalır', 'Artar'] },
            { label: 'Neden?', values: ['Her canlı enerjinin büyük kısmını harcar', 'Atılamayan madde her canlıda toplanır'] },
            { label: 'En fazla nerede?', values: ['Tabanda (üreticiler)', 'Tepede (son tüketici)'] },
            { label: 'Geri döner mi?', values: ['Dönmez; tek yönlü akar', 'Doğada uzun süre kalır'] },
          ],
          insight:
            'İki akış aynı zincirde ama ters yönde işler. Birini doğru kurabilen öğrenci öbürünü de tersine çevirerek bulur.',
        },
        {
          id: 'lgs-fen-besin-birikim-baglanti',
          type: 'connection',
          title: 'Bu ders nerelere bağlanıyor?',
          body: 'Besin zinciri ünitenin öbür derslerinin başlangıç noktasıdır.',
          links: [
            'Fotosentez dersi, üreticilerin güneş enerjisini nasıl besine dönüştürdüğünü açıklar.',
            'Solunum dersi, canlıların aldıkları enerjiyi neden harcadıklarını açıklar.',
            'Madde döngüleri dersi, ayrıştırıcıların toprağa kazandırdığı maddelerin yolculuğunu anlatır.',
            'Sürdürülebilir kalkınma dersi, zararlı maddelerin doğaya karışmasını önlemenin yollarını tartışır.',
            'Asit yağmurları dersi, kirliliğin doğal dengeyi nasıl bozduğunun bir başka örneğidir.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Rolleri belirle ve zinciri kur',
      prompt:
        'Kartal, fare, buğday ve yılan bir besin zincirinin halkalarıdır. Zinciri doğru yönde kur ve her canlının rolünü yaz.',
      steps: [
        { title: '1. Üreticiyi bul', body: 'Fotosentez yapan canlı **buğdaydır.** Zincir buğdayla başlar.' },
        { title: '2. Buğdayı kim yer?', body: 'Buğdayla beslenen **faredir.** Fare otçul, yani 1. basamak tüketicidir.' },
        { title: '3. Fareyi kim yer?', body: 'Fareyle beslenen **yılandır.** Yılan 2. basamak tüketicidir.' },
        { title: '4. Yılanı kim yer?', body: 'Yılanla beslenen **kartaldır.** Kartal 3. basamak tüketicidir.' },
        { title: '5. Okları yenenden yiyene çiz', body: 'Buğday → fare → yılan → kartal. Oklar enerjinin gittiği yönü gösterir.' },
      ],
      answer: 'Buğday (üretici) → fare (1. basamak tüketici) → yılan (2. basamak tüketici) → kartal (3. basamak tüketici).',
      takeaway: 'Zincir her zaman üreticiyle başlar; oklar yenenden yiyene çizilir.',
    },
    {
      title: 'Seviye 2 — Piramitte eğilimleri oku',
      prompt:
        'Yukarıdaki zincire göre kurulan ekoloji piramidinde en fazla enerji, en fazla birey ve en yüksek biyolojik birikim hangi basamaktadır?',
      steps: [
        { title: '1. Piramidi kur', body: 'Taban: buğday; üstü: fare; üstü: yılan; tepe: kartal.' },
        { title: '2. Enerjiyi belirle', body: 'Enerji yukarı çıktıkça azalır. En fazla enerji **tabandadır**: buğday.' },
        { title: '3. Birey sayısını belirle', body: 'Birey sayısı yukarı çıktıkça azalır. En fazla birey **tabandadır**: buğday.' },
        { title: '4. Biyolojik birikimi belirle', body: 'Biyolojik birikim yukarı çıktıkça artar. En yüksek birikim **tepededir**: kartal.' },
        { title: '5. Sonucu yaz', body: 'En fazla enerji ve birey buğdayda; en yüksek biyolojik birikim kartalda.' },
      ],
      answer: 'En fazla enerji ve birey sayısı buğday basamağında, en yüksek biyolojik birikim kartal basamağındadır.',
      takeaway: 'İki eğilim tabanda, iki eğilim tepede en büyüktür.',
    },
    {
      title: 'Seviye 3 — Besin ağında etkiyi izle',
      prompt:
        'Bir ekosistemde ot → tavşan → tilki ve ot → çekirge → kuş → tilki zincirleri birbirine bağlıdır. Avcılık yüzünden tilkilerin sayısı hızla azalırsa kısa sürede ne olması beklenir?',
      steps: [
        { title: '1. Tilkinin besinlerini bul', body: 'Tilki hem tavşanla hem kuşla beslenir.' },
        { title: '2. Aşağı doğru izle', body: 'Tilki azalınca tavşanlar ve kuşlar daha az avlanır; sayıları **artar.**' },
        { title: '3. Bir basamak daha in', body: 'Tavşanlar artınca otlar daha çok yenir. Kuşlar artınca çekirgeler daha çok yenir; çekirgeler **azalır.**' },
        { title: '4. Üreticiye bak', body: 'Otlar iki ters etkiyle karşı karşıya: artan tavşanlar otları **azaltır**, azalan çekirgeler ise otlar üzerindeki baskıyı **hafifletir.** İki etki birbirine ters olduğu için otların sonunda artacağı ya da azalacağı verilen bilgiyle **kesin söylenemez.**' },
        { title: '5. Sonucu yaz', body: 'Kısa sürede tavşan ve kuş sayısının artması, çekirge sayısının azalması beklenir. Otlar hakkında ise ek bilgi olmadan kesin bir yargıya varılamaz.' },
      ],
      answer:
        'Tavşan ve kuş sayısı artar, çekirge sayısı azalır. Otlar üzerinde ters yönlü iki etki olduğu için verilen bilgiyle kesin bir sonuç söylenemez.',
      takeaway: 'Besin ağında etkiyi basamak basamak izle; ters yönlü iki etki bir araya geliyorsa “kesin” deme.',
    },
  ],

  dailyLife: {
    title: 'Bu bilgi hayatın neresinde?',
    body: 'Besin zinciri ve biyolojik birikim, sofrandan tarım politikalarına kadar uzanan kararların temelindedir.',
    links: [
      'Tarım ilaçlarının kontrollü kullanılması biyolojik birikimi azaltmaya yöneliktir.',
      'Atıkların göllere ve denizlere karışmasının önlenmesi besin zincirini korur.',
      'Avcılık yasakları, besin ağındaki dengenin bozulmasını önlemek için konur.',
      'Ormanlarda ve tarlalarda doğal avcıların korunması zararlıların sayısını dengeler.',
      'Kompost yapmak, ayrıştırıcıların işini evde gözlemlemenin bir yoludur.',
    ],
  },

  questionClue: {
    concept: 'Besin zinciri ve piramit sorusu',
    statement:
      'Soruda oklu bir besin zinciri ya da ağı, bir piramit veya bir zararlı maddenin yayılması anlatılıyorsa, ölçülen şey bu dersin eğilimleridir.',
    clues: [
      'Canlıların oklarla birbirine bağlandığı şemalar',
      'Bir türün sayısının azaldığı ya da arttığı bir durum',
      'Basamaklara ayrılmış bir piramit',
      'Tarım ilacı ya da ağır metal gibi bir maddenin anılması',
      '“En fazla”, “en az” ifadeleriyle basamak karşılaştırması',
    ],
    reasoning:
      'Bu işaretler üç işlem ister: okun yönünü doğru okumak, etkiyi iki yönde izlemek ve piramidin dört eğilimini doğru yönde uygulamak.',
    boundary:
      'Bu ipuçlarını “her şey yukarı çıktıkça azalır” gibi tek bir kurala çevirme: biyolojik birikim ve vücut büyüklüğü tersine artar. Ayrıca parazit besin zincirleri bu düzeyde sorulmaz.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.6.1.1 kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir besin ağında üretici, tüketici ve ayrıştırıcının belirlenmesi',
      'Bir türün sayısı değişince öbür türlerin nasıl etkileneceğinin sorulması',
      'Ekoloji piramidinde enerji ve birey sayısının karşılaştırılması',
      'Biyolojik birikimin en fazla olduğu canlının bulunması',
      'Besin zincirinde okların yönünün yorumlanması',
      'Ayrıştırıcıların ekosistemdeki önemiyle ilgili bir çıkarım',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir besin zincirinde oklar neden yenen canlıdan yiyen canlıya doğru çizilir?',
      hint: 'Ok neyin yönünü gösteriyor?',
      answer:
        'Çünkü ok **enerjinin** gittiği yönü gösterir. Bir canlı yenildiğinde vücudunda depolanmış enerji onu yiyen canlıya aktarılır. Bu yüzden ok yenen canlıdan yiyen canlıya çizilir: örneğin ot → çekirge. Oku “kimin kimi yediği” yerine “enerjinin nereye gittiği” diye okursan yönü hiç karıştırmazsın.',
    },
    {
      prompt:
        'Bir gölde az miktarda zararlı madde bulunuyor. Bu madde en çok hangi canlıda birikir: sudaki küçük canlılarda mı, balıklarda mı, balıkla beslenen kuşlarda mı? Neden?',
      hint: 'Her avcı kaç tane av yer?',
      answer:
        'En çok **balıkla beslenen kuşlarda** birikir. Madde vücuttan atılamadığı için her canlıda toplanır. Küçük balık çok sayıda küçük canlı yer, büyük balık çok sayıda küçük balık yer, kuş da çok sayıda balık yer. Her basamakta avcı, avlarının hepsindeki birikmiş miktarı kendi vücudunda toplar. Bu yüzden biyolojik birikim en üst basamakta en fazladır.',
    },
    {
      prompt:
        'Bir ekosistemden bütün ayrıştırıcılar ortadan kalksaydı zamanla ne olurdu?',
      hint: 'Ayrıştırıcılar ölü canlılara ve toprağa ne yapıyordu?',
      answer:
        'Ölü canlılar ve atıklar ayrıştırılamaz ve birikirdi. İçlerindeki maddeler toprağa geri dönemeyeceği için topraktaki besin maddeleri zamanla tükenirdi. Üreticiler bu maddeleri bulamayınca besin üretemez, üretici sayısı azalırdı. Üreticiler azalınca da bütün besin zinciri etkilenirdi. Ayrıştırıcılar madde döngüsünün vazgeçilmez halkasıdır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey liste değil; yön ve etki',
    body:
      'Kazanım üretici, tüketici ve ayrıştırıcılara örnek vermeyi ister; açıklaması da ekoloji piramidinde enerji aktarımı, vücut büyüklüğü, birey sayısı ve biyolojik birikimin vurgulanmasını şart koşar. Bu yüzden senden canlı ezberi değil; bir şemada rolleri belirlemen, eğilimleri doğru yönde uygulaman ve bir değişikliğin etkisini besin ağında izlemen beklenir.',
    measures: [
      'Üretici, tüketici ve ayrıştırıcıyı ayırt edebilme',
      'Besin zincirini doğru yönde kurabilme',
      'Piramitte enerji ve birey sayısının azaldığını açıklayabilme',
      'Vücut büyüklüğü ve biyolojik birikimin arttığını bilme',
      'Besin ağında bir türün değişiminin etkisini iki yönde izleyebilme',
      'Ayrıştırıcıların madde döngüsündeki rolünü açıklayabilme',
    ],
  },

  simulationTable: {
    title: 'Bir göl ekosisteminde yapılan ölçüm',
    columns: ['Canlı', 'Beslenme ilişkisi', 'Vücuttaki zararlı madde düzeyi'],
    rows: [
      ['K', 'Güneş ışığıyla besin üretir', 'Çok düşük'],
      ['L', 'K ile beslenir', 'Düşük'],
      ['M', 'L ile beslenir', 'Orta'],
      ['N', 'M ile beslenir', 'Yüksek'],
    ],
    caption: 'Göle az miktarda, vücuttan atılamayan bir madde karışmıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün göl ölçümü',
    passage: `Bir göle vücuttan atılamayan bir madde karışıyor. Bilim insanları göldeki dört canlıda bu maddenin düzeyini ölçüyor ve yukarıdaki kaydı tutuyor.

Bir öğrenci kayda bakarak besin zinciri ve ekoloji piramidi hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi söylenebilir?',
    options: [
      {
        text: 'K üreticidir; piramitte en fazla enerji K basamağındadır',
        explanation:
          'Doğru cevap. K güneş ışığıyla besin ürettiği için üreticidir ve zincirin ilk halkasıdır. Piramidin tabanında bulunan üreticiler en fazla enerjiye sahiptir.',
      },
      {
        text: 'N’nin birey sayısı K’ninkinden fazladır',
        explanation:
          'N zincirin son halkasıdır. Piramitte yukarı çıktıkça birey sayısı azalır; bu yüzden N’nin birey sayısı K’ninkinden fazla olamaz.',
      },
      {
        text: 'Zararlı madde en çok K’de birikmiştir; çünkü maddeyi ilk alan K’dir',
        explanation:
          'Maddeyi ilk alan üretici olsa da, vücuttan atılamayan madde her basamakta birikerek artar. Kayıt da bunu gösteriyor: en yüksek düzey N’dedir.',
      },
      {
        text: 'M ortadan kalkarsa L’nin sayısı azalır',
        explanation:
          'M, L ile beslenir. M ortadan kalkarsa L’yi avlayan canlı azalır ve L’nin sayısı büyük olasılıkla **artar.**',
      },
      {
        text: 'Enerji N’den K’ye doğru aktarılır',
        explanation:
          'Enerji yenenden yiyene, yani K → L → M → N yönünde aktarılır. N’den K’ye doğru bir enerji aktarımı yoktur.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru kayıttaki iki sütunu birlikte okumayı istiyor. Beslenme ilişkisi sütunundan zinciri kur (K → L → M → N), sonra piramidin dört eğilimini uygula.',
    critical_point:
      'Kritik nokta üçüncü seçenektir. “Maddeyi ilk alan en çok biriktirir” sezgisi mantıklı görünür, ama biyolojik birikim bunun tersini söyler. Kayıttaki son sütun da sezgiyi çürütür.',
    takeaway: 'Zinciri kurduktan sonra her soruyu iki kuralla çöz: enerji yukarı azalır, birikim yukarı artar.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Ekoloji piramidinde yukarı çıktıkça aşağıdakilerden hangisi artar?',
      options: [
        'Enerji miktarı',
        'Birey sayısı',
        'Biyolojik birikim',
        'Üretici sayısı',
      ],
      answer_index: 2,
      explanation:
        'Vücuttan atılamayan zararlı maddeler her basamakta birikerek artar; bu yüzden biyolojik birikim piramitte yukarı çıktıkça artar. Enerji miktarı ve birey sayısı ise yukarı çıktıkça azalır. Üreticiler yalnız piramidin tabanında bulunur.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdakilerden hangisi bir ayrıştırıcıdır?',
      options: [
        'Mantar',
        'Çekirge',
        'Alg',
        'Kurbağa',
      ],
      answer_index: 0,
      explanation:
        'Mantarlar, bakterilerle birlikte ölü canlıları ve atıkları ayrıştırarak içlerindeki maddeleri toprağa geri kazandırır; bu yüzden ayrıştırıcıdır. Alg fotosentez yapan bir üreticidir; çekirge ve kurbağa ise tüketicidir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Ayrıştırıcılar ölü canlıları ayrıştırınca enerji toprağa geri döner ve yeniden kullanılır.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Maddelerin döngü hâlinde döndüğünü, enerjinin ise tek yönlü akıp azaldığını gözden kaçırmak',
        'Ayrıştırıcıların bakteri ve mantarlar olduğunu bilmemek',
        'Üreticilerin fotosentez yaptığını bilmemek',
        'Biyolojik birikimin yukarı çıktıkça arttığını bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Ayrıştırıcılar ölü canlılardaki **maddeleri** toprağa geri kazandırır ve bu maddeler yeniden kullanılır. **Enerji** ise her basamakta harcanarak azalır ve geri dönmez; ekosistem sürekli güneş enerjisine ihtiyaç duyar. Kuralı iki kelimeyle hatırla: madde döner, enerji akar.',
    },
  ],

  summary: [
    'Üreticiler fotosentezle kendi besinini üretir; her besin zinciri üreticiyle başlar.',
    'Tüketiciler başka canlılarla beslenir: otçul, etçil ve hepçil tüketiciler vardır.',
    'Ayrıştırıcılar (bakteri ve mantarlar) ölü canlıları ve atıkları ayrıştırarak maddeleri toprağa geri kazandırır.',
    'Besin zincirinde ok yenenden yiyene çizilir ve enerjinin yönünü gösterir.',
    'Birden çok besin zincirinin birbirine bağlanmasıyla besin ağı oluşur.',
    'Besin ağında bir türün değişimi hem yediği hem onu yiyen canlıları etkiler.',
    'Her canlı aldığı enerjinin büyük kısmını harcar; yalnız küçük bir kısmı üst basamağa geçer.',
    'Piramitte yukarı çıktıkça enerji miktarı ve birey sayısı azalır.',
    'Piramitte yukarı çıktıkça vücut büyüklüğü genellikle artar.',
    'Vücuttan atılamayan zararlı maddeler yukarı çıktıkça birikir; en fazla en üst basamaktadır.',
    'Madde döngü hâlinde döner; enerji tek yönlü akar.',
    'Parazit besin zincirleri bu düzeyde incelenmez.',
  ],

  next: [
    'Fotosentez ve Solunum (F.8.6.2.1–F.8.6.2.3)',
    'Madde Döngüleri ve Küresel İklim Değişikliği (F.8.6.3.1–F.8.6.3.3)',
    'Sürdürülebilir Kalkınma ve Geri Dönüşüm (F.8.6.4.1–F.8.6.4.5)',
  ],
})

export default lesson
