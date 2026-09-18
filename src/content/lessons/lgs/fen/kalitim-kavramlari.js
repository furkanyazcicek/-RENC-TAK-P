import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.2 DNA ve Genetik Kod · 2. ders
 * Kazanım : F.8.2.2.1
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.2.2.1 → a) "Gen, fenotip, genotip, saf döl ve melez döl
 *                  kavramlarına değinilir."
 *               b) "Baskın ve çekinik gen kavramlarına değinilir."
 *   "Homozigot/heterozigot" karşılıkları programda geçmez; derste yalnız
 *   ayraç içinde, öğrencinin başka kaynaklarda karşılaşacağı için verilir.
 *
 * KAPSAM KARARI
 * Bu ders yalnız KAVRAMLARI kurar. Çaprazlama problemleri ve oran
 * hesapları bir sonraki kazanımın (F.8.2.2.2) işidir; buraya
 * taşınmaz. Kavramlar oturmadan çaprazlamaya geçmek, öğrencinin
 * "kareli tablo doldurma" refleksi geliştirip ne yaptığını
 * anlamamasına yol açıyor — bu, sahada en sık görülen sorun.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-kalitim-kavramlari',
  topic: 'DNA ve Genetik Kod',
  order: 2,
  title: 'Kalıtım Kavramları: Görünen ve Yazılı Olan',
  subtitle:
    'Genotip yazılı olandır, fenotip görünen. Bu iki sözcüğü ayırdığın anda kalıtımın yarısı çözülür.',
  minutes: 41,
  kazanimlar: ['F.8.2.2.1'],
  prerequisites: [
    { topic: 'DNA’nın Yapısı: Nükleotidden Kromozoma', why: 'Gen kavramı kurulmadan genotip tanımlanamaz.' },
    { topic: 'Kromozom ve gen ilişkisi', why: 'Genlerin neden çiftler hâlinde bulunduğu buradan anlaşılır.' },
  ],
  outcomes: [
    'Genotip ile fenotipi birbirinden ayırabileceksin.',
    'Saf döl ve melez dölü bir gen çifti üzerinde gösterebileceksin.',
    'Baskın ve çekinik geni büyük ve küçük harfle doğru yazabileceksin.',
    'Bir fenotipten genotipin ne zaman kesin bilinebileceğini söyleyebileceksin.',
    'Çevrenin fenotipi etkileyebileceğini örnekle açıklayabileceksin.',
  ],

  opening: {
    title: 'Aynı görünüş, farklı yazılış',
    lead: 'İki bezelye bitkisinin ikisi de mor çiçekli olabilir; ama genlerinde yazan aynı olmayabilir.',
    body: `Bir sınıfta iki öğrenci düşün. İkisinin de gözleri kahverengi. Dışarıdan bakan biri “ikisi de aynı” der. Oysa genlerinde yazan aynı olmak zorunda değildir.

Kalıtımın en temel ayrımı budur: **görünen** ile **yazılı olan** aynı şey değildir.

- **Görünen**: kahverengi göz. Buna **fenotip** denir.
- **Yazılı olan**: genlerde ne yazdığı. Buna **genotip** denir.

Bu ayrım kurulmadığında öğrenci şunu yapar: fenotipi görür, genotipin ne olduğunu kesin biliyormuş gibi davranır. Oysa çoğu zaman fenotipten genotipe gitmek **tek yönlü değildir**: aynı görünüşün arkasında iki farklı genotip olabilir.

Neden böyle? Çünkü bir özelliği belirleyen genler canlıda **çift hâlde** bulunur. Bir tanesi anneden, bir tanesi babadan gelir. İki gen aynı şeyi söylüyorsa sorun yok. Peki farklı şey söylüyorlarsa hangisi dışarı yansır?

İşte bu soru **baskın** ve **çekinik** kavramlarını doğurur.

Bu derste altı kavramı kuracağız: **genotip, fenotip, saf döl, melez döl, baskın, çekinik.** MEB programı bu kazanımda tam olarak bu kavramları ister.

Bir uyarı: bu derste **çaprazlama problemi çözmeyeceğiz.** Çaprazlama bir sonraki kazanımın (F.8.2.2.2) konusudur. Öğrencilerin çoğu kavramlar oturmadan kareli tablo doldurmayı öğreniyor ve ne yaptığını anlamıyor. Önce kavramlar, sonra işlem.`,
  },

  concepts: [
    {
      term: 'Karakter',
      body: 'Canlıda kalıtılan bir özelliktir: göz rengi, çiçek rengi, tohum biçimi gibi. Bir karakterin farklı görünüşleri olabilir (mor çiçek / beyaz çiçek).',
    },
    {
      term: 'Gen',
      body: 'DNA üzerinde bir karakteri belirleyen anlamlı bölümdür. Bir karakteri belirleyen genler canlıda **çift** hâlde bulunur: biri anneden, biri babadan gelir.',
    },
    {
      term: 'Genotip',
      body: 'Bir canlının bir karakter bakımından taşıdığı **gen çiftidir**; yani “yazılı olan”. Harflerle gösterilir: AA, Aa, aa gibi.',
    },
    {
      term: 'Fenotip',
      body: 'Genotipin dışarıdan **görünen** hâlidir: mor çiçek, kahverengi göz, uzun boy. Gözlemlenebilir olan budur.',
    },
    {
      term: 'Baskın gen',
      body: 'Gen çiftinde yanındaki genin etkisini örten, tek başına bile fenotipte görünen gendir. **Büyük harfle** gösterilir: A.',
    },
    {
      term: 'Çekinik gen',
      body: 'Etkisi baskın gen tarafından örtülen gendir. Fenotipte görünebilmesi için **çift** olması gerekir. **Küçük harfle** gösterilir: a.',
    },
    {
      term: 'Saf döl (homozigot)',
      body: 'Gen çiftinin **ikisi de aynı** olan canlıdır: AA ya da aa. Yani aynı bilgiyi iki kez taşır.',
    },
    {
      term: 'Melez döl (heterozigot)',
      body: 'Gen çiftinin **biri baskın, biri çekinik** olan canlıdır: Aa. Fenotipte baskın olan görünür; çekinik gen taşınır ama görünmez.',
    },
  ],

  why: {
    question: 'Neden aynı fenotipin arkasında iki farklı genotip olabiliyor?',
    body: `Çünkü baskın gen, yanındaki çekinik geni **örter.**

Bunu somutlaştıralım. Bezelyede mor çiçek rengi baskın (A), beyaz çiçek rengi çekiniktir (a). Üç genotip mümkündür:

- **AA** → iki baskın gen → fenotip: mor
- **Aa** → bir baskın, bir çekinik → baskın örter → fenotip: **yine mor**
- **aa** → iki çekinik gen → örtecek baskın gen yok → fenotip: beyaz

Şimdi dikkat: **AA ve Aa farklı genotiplerdir ama aynı fenotipi verir.** İkisi de mordur. Dışarıdan bakarak bu ikisini ayırt edemezsin.

Buradan iki önemli sonuç çıkar.

**Birinci sonuç: fenotipten genotipe gitmek her zaman mümkün değildir.** Mor bir çiçek gördüğünde genotipin AA mı Aa mı olduğunu söyleyemezsin. İki ihtimal vardır.

**İkinci sonuç: çekinik fenotipte durum farklıdır.** Beyaz bir çiçek gördüğünde genotipi **kesin olarak** bilirsin: aa. Çünkü çekinik özelliğin görünebilmesinin tek yolu, gen çiftinin ikisinin de çekinik olmasıdır. Yanında tek bir baskın gen olsaydı beyaz görünmezdi.

Bu asimetriyi kavramak, bu konudaki soruların büyük bölümünü çözer:

**Çekinik fenotip → genotip kesindir (aa).**
**Baskın fenotip → genotip iki ihtimallidir (AA ya da Aa).**

Son bir nokta. Genotip fenotipi belirler ama tek belirleyici her zaman o değildir. Bazı karakterlerde **çevre koşulları** da fenotipi etkiler. Aynı genotipe sahip iki bitki farklı toprakta farklı boyda olabilir. Bu, fenotipin “genotip + çevre” ile ortaya çıktığı anlamına gelir. Çevrenin etkisiyle oluşan bu değişiklikleri **modifikasyon** dersinde ayrıntılı göreceğiz.`,
  },

  mechanism: {
    title: 'Bir gen çifti nasıl oluşuyor ve fenotipe nasıl yansıyor?',
    lead:
      'Genotipten fenotipe giden yol beş adımdır. Her adımı gördüğünde harflerin ne anlama geldiği netleşir.',
    intro:
      'Aşağıdaki zincir, anne ve babadan gelen genlerin nasıl bir araya geldiğini ve fenotipin nasıl belirlendiğini gösterir.',
    steps: [
      {
        title: '1. Karakteri belirleyen genler çift hâlde bulunur',
        body: 'Bir karakteri belirleyen genler canlıda ikişer tanedir. Bunun nedeni kromozomların da çiftler hâlinde bulunmasıdır.',
      },
      {
        title: '2. Genlerin biri anneden, biri babadan gelir',
        body: 'Yavru, gen çiftinin bir üyesini anneden, öbür üyesini babadan alır. Bu yüzden yavru hem anneye hem babaya benzeyen özellikler taşıyabilir.',
      },
      {
        title: '3. İki gen bir araya gelerek genotipi oluşturur',
        body: 'Anneden A, babadan a gelmişse genotip Aa olur. İkisi de A ise AA, ikisi de a ise aa olur. Genotip “yazılı olan”dır.',
      },
      {
        title: '4. Baskın gen varsa etkisini gösterir',
        body: 'Gen çiftinde en az bir baskın gen varsa (AA ya da Aa), fenotipte baskın özellik görünür. Çekinik gen taşınmaya devam eder ama görünmez.',
      },
      {
        title: '5. Çekinik özellik ancak çift olduğunda görünür',
        body: 'Fenotipte çekinik özelliğin görünmesi için gen çiftinin ikisinin de çekinik olması gerekir (aa). Tek bir baskın gen bile bunu engeller.',
      },
      {
        title: '6. Fenotip ortaya çıkar',
        body: 'Görünen özellik budur. Bazı karakterlerde çevre koşulları da fenotipi etkileyebilir; ama genotipte yazılı olan değişmez.',
      },
    ],
    takeaway:
      'Zincirin yönü tek yönlüdür: genotip fenotipi belirler. Ters yönde, fenotipten genotipe gitmek her zaman kesin sonuç vermez.',
  },

  comparison: {
    title: 'Altı kavram, iki sütun',
    columns: ['Saf döl (homozigot)', 'Melez döl (heterozigot)'],
    rows: [
      { label: 'Gen çifti', values: ['İkisi de aynı: AA ya da aa', 'Biri baskın biri çekinik: Aa'] },
      { label: 'Kaç çeşit genotipi olabilir?', values: ['İki: AA ve aa', 'Bir: Aa'] },
      { label: 'Fenotip', values: ['AA baskın özellik · aa çekinik özellik', 'Her zaman baskın özellik'] },
      { label: 'Çekinik gen taşır mı?', values: ['aa taşır · AA taşımaz', 'Taşır ama fenotipte görünmez'] },
      { label: 'Fenotipten anlaşılır mı?', values: ['aa olan kesin anlaşılır', 'Doğrudan anlaşılmaz'] },
      { label: 'Başka adı', values: ['Arı döl', 'Hibrit'] },
    ],
    insight:
      'En kritik satır sonuncudan bir öncekidir: melez dölü fenotipe bakarak ayırt edemezsin; çünkü AA ile aynı görünür.',
  },

  traps: [
    {
      title: 'Genotip ile fenotipi karıştırmak',
      wrong: 'Genotip mor çiçek, fenotip Aa’dır.',
      right: 'Tam tersi. **Genotip** gen çiftidir (Aa); **fenotip** görünen özelliktir (mor çiçek).',
      body: 'Karıştırmamak için şunu hatırla: **fen**otip = görünen (gözle görürsün), **gen**otip = genlerde yazan. Sözcüğün içindeki “gen” hecesi sana genotipin genlerle ilgili olduğunu söyler.',
    },
    {
      title: 'Melez dölün fenotipte ara bir özellik göstereceğini sanmak',
      wrong: 'Mor (AA) ile beyaz (aa) birleşince melez döl pembe olur.',
      right: 'Baskın–çekinik ilişkisinde ara renk oluşmaz. Aa genotipli birey **tam olarak mor** görünür; çünkü baskın gen çekiniğin etkisini örter.',
      body: 'Öğrencilerin çoğu renkleri boya gibi düşünüp karıştırıyor. Genler karışmaz; biri öbürünün etkisini örter. Bu, 8. sınıf düzeyinde geçerli olan kuraldır.',
    },
    {
      title: 'Baskın özelliğin “daha sık görülen” özellik olduğunu sanmak',
      wrong: 'Baskın özellik toplumda daha yaygın olan özelliktir.',
      right: 'Baskınlık yaygınlıkla ilgili değildir. Baskınlık, bir genin gen çiftindeki **öbür genin etkisini örtmesi** demektir.',
      body: 'Bir özellik baskın olduğu hâlde toplumda az görülebilir; çekinik olduğu hâlde çok görülebilir. İki kavramı ayrı tut: baskınlık bir örtme ilişkisidir, yaygınlık ise bir sayı meselesidir.',
    },
    {
      title: 'Çekinik geni “yok olan gen” sanmak',
      wrong: 'Melez dölde çekinik gen görünmediğine göre kaybolmuştur.',
      right: 'Çekinik gen kaybolmaz; **taşınır.** Fenotipte görünmez ama genotipte durur ve yavruya aktarılabilir.',
      body: 'Bu yüzden iki mor çiçekli bitkiden beyaz çiçekli bir yavru çıkabilir: ikisi de Aa ise, ikisi de taşıdıkları çekinik geni aktarabilir.',
    },
  ],

  variables: {
    title: 'Gözlemle kur: hangi özellik baskın?',
    lead:
      'Baskın olanı ezberlemek yerine, bir gözlemle nasıl belirlendiğini görelim. Bu, kavramın nereden geldiğini anlatan bölümdür.',
    question: 'İki saf döl bitki birleştirildiğinde yavruların hepsi hangi özelliği gösteriyor?',
    independent: {
      label: 'Birleştirilen saf döl bitkilerin özellikleri',
      note: 'Ben seçiyorum: mor çiçekli saf döl × beyaz çiçekli saf döl',
    },
    setup: {
      label: 'Kontrollü tozlaşma ve yavruların yetiştirilmesi',
      note: 'Aynı koşullarda yetiştirilen bitkiler',
    },
    dependent: {
      label: 'Yavru bitkilerin çiçek rengi',
      note: 'Ölçtüğüm: hangi renk görünüyor?',
    },
    controlled: [
      'İncelenen karakter (yalnız çiçek rengi)',
      'Toprak, su ve ışık koşulları',
      'Bitki türü (bezelye)',
      'Gözlem zamanı ve yöntemi',
    ],
    caption:
      'Koşullar sabit tutulmasaydı, yavrulardaki farkın genden mi çevreden mi geldiğini söyleyemezdik. Kontrol değişkenleri bu yüzden var.',
  },

  experiment: {
    title: 'Gözlem nasıl yapılır?',
    intro:
      'Bu, bezelye bitkisiyle yapılan klasik bir gözlem tasarımıdır. Amaç bir hesap yapmak değil, hangi özelliğin öbürünü örttüğünü belirlemektir.',
    steps: [
      { title: '1. Saf döl bitkileri belirle', body: 'Kuşaklar boyunca hep mor çiçek veren bitkiler saf dölü (AA), hep beyaz çiçek verenler ise saf dölü (aa) temsil eder.' },
      { title: '2. İki saf dölü birleştir', body: 'Mor çiçekli saf döl ile beyaz çiçekli saf döl bitkiler kontrollü biçimde tozlaştırılır.' },
      { title: '3. Koşulları sabit tut', body: 'Yavrular aynı toprakta, aynı su ve ışık koşullarında yetiştirilir. Böylece renk farkının çevreden gelmediğinden emin oluruz.' },
      { title: '4. Yavruların rengini gözle', body: 'Yavruların hepsinin çiçek rengi kaydedilir. Gözlem sonucu: yavruların tamamı mor çiçeklidir.' },
      { title: '5. Sonucu yorumla', body: 'Yavruların genotipi Aa’dır; çünkü her birinin bir geni mor çiçekli ebeveynden, öbür geni beyaz çiçekli ebeveynden gelmiştir.' },
      { title: '6. Baskın olanı belirle', body: 'Aa genotipli yavrular mor görünüyorsa, mor çiçek rengini belirleyen gen **baskındır**; beyaz çiçek rengini belirleyen gen **çekiniktir**.' },
    ],
    takeaway:
      'Baskınlık ezberlenen bir etiket değil, gözlemle belirlenen bir ilişkidir: melez dölde hangi özellik görünüyorsa o baskındır.',
  },

  dataTable: {
    title: 'Gözlem kaydı: üç genotip, iki fenotip',
    columns: ['Genotip', 'Döl tipi', 'Fenotip', 'Çekinik gen taşıyor mu?'],
    rows: [
      ['AA', 'Saf döl', 'Mor çiçek', 'Hayır'],
      ['Aa', 'Melez döl', 'Mor çiçek', 'Evet, taşıyor ama görünmüyor'],
      ['aa', 'Saf döl', 'Beyaz çiçek', 'Evet, iki tane'],
    ],
    caption:
      'Tablonun ilk iki satırı aynı fenotipi, farklı genotipi gösterir. Bu satır çifti, “fenotipten genotipe gitmek her zaman kesin değildir” kuralının kanıtıdır.',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-kalitim-harf',
      title: 'Harflerle gösterim: neden büyük ve küçük?',
      lead: 'Gösterim keyfi değildir; büyük–küçük harf ilişkisi baskınlık ilişkisini taşır.',
      blocks: [
        {
          id: 'lgs-fen-kalitim-harf-anlatim',
          type: 'prose',
          body: `Kalıtımda genler harflerle gösterilir. Bu gösterimin iki kuralı vardır ve ikisi de anlamlıdır.

**Kural 1 — Aynı karakter, aynı harf.** Bir karakteri belirleyen genler aynı harfle gösterilir. Çiçek rengi için A harfini seçtiysek, hem mor hem beyaz için A harfini kullanırız. Farklı harf kullanmak farklı karakter anlamına gelirdi.

**Kural 2 — Baskın büyük, çekinik küçük.** Baskın gen büyük harfle (A), çekinik gen küçük harfle (a) yazılır. Büyük harf, “bu gen öbürünün etkisini örter” demenin kısa yoludur.

Bu iki kuraldan üç genotip çıkar: **AA, Aa, aa.** Dördüncü bir ihtimal yoktur; çünkü aA yazmak Aa yazmakla aynı şeydir. Yazarken alışkanlık olarak baskın gen önce yazılır.

Şimdi bu gösterimi okumayı öğrenelim. Bir genotip gördüğünde üç soruyu art arda sor:

**Soru 1 — İki harf aynı mı?** Aynıysa **saf döldür** (AA ya da aa). Farklıysa **melez döldür** (Aa).

**Soru 2 — İçinde en az bir büyük harf var mı?** Varsa fenotip **baskın özelliktir**. Yoksa fenotip **çekinik özelliktir**.

**Soru 3 — İçinde küçük harf var mı?** Varsa birey çekinik geni **taşıyordur**; fenotipte görünmese bile yavruya aktarabilir.

Üç soruyu AA, Aa, aa için sırayla uygula; kavramların hepsi tek tabloda yerine oturur.

Bir noktaya dikkat: harfler bir hesap aracı değil, bir **gösterim** aracıdır. Bu düzeyde senden istenen, harflerle gösterimi okuyabilmek ve kavramları adlandırabilmektir.`,
        },
        {
          id: 'lgs-fen-kalitim-harf-tablo',
          type: 'table',
          interactive: true,
          title: 'Üç genotip, üç soru',
          columns: ['Genotip', 'İki harf aynı mı?', 'Büyük harf var mı?', 'Küçük harf var mı?', 'Sonuç'],
          rows: [
            ['AA', 'Evet → saf döl', 'Evet → baskın fenotip', 'Hayır → taşımıyor', 'Saf döl, baskın özellik'],
            ['Aa', 'Hayır → melez döl', 'Evet → baskın fenotip', 'Evet → taşıyor', 'Melez döl, baskın özellik, çekinik taşıyıcı'],
            ['aa', 'Evet → saf döl', 'Hayır → çekinik fenotip', 'Evet → iki tane', 'Saf döl, çekinik özellik'],
          ],
          caption:
            'Bu üç satır bu dersin tamamıdır. Bir genotip verildiğinde satırı bulup okumak yeterlidir.',
        },
        {
          id: 'lgs-fen-kalitim-harf-hafiza',
          type: 'memory',
          title: 'Gösterimi hatırlamanın kısa yolu',
          body: '**Büyük harf örter, küçük harf örtülür.** İki küçük harf yan yana geldiğinde örtecek kimse kalmaz; çekinik özellik ancak o zaman görünür.',
        },
        {
          id: 'lgs-fen-kalitim-harf-tuzak',
          type: 'trap',
          title: 'Farklı karakterler için aynı harfi kullanmak',
          wrong: 'Çiçek rengi için A, tohum biçimi için de A harfini kullanabilirim.',
          right: 'Her karakter için **ayrı bir harf** seçilir. Aynı harf aynı karakteri gösterir; farklı karakterler karışmamalıdır.',
          body: 'Örneğin çiçek rengi A/a ile, tohum biçimi B/b ile gösterilir. Bu ayrım, birden çok karakterin birlikte incelendiği durumlarda karışıklığı önler.',
        },
      ],
    },

    {
      id: 'lgs-fen-kalitim-yon',
      title: 'Fenotipten genotipe gitmek: ne zaman kesin, ne zaman değil?',
      lead: 'Bu bölüm, bu konudaki soruların çoğunun döndüğü noktadır.',
      blocks: [
        {
          id: 'lgs-fen-kalitim-yon-anlatim',
          type: 'prose',
          body: `Genotipten fenotipe gitmek kolaydır ve her zaman kesindir. Genotipi biliyorsan fenotipi söyleyebilirsin:

- AA → baskın özellik
- Aa → baskın özellik
- aa → çekinik özellik

Ters yön ise her zaman kesin değildir. Fenotipi biliyorsan genotipi bazen söyleyebilirsin, bazen söyleyemezsin.

**Durum 1 — Çekinik fenotip gördün.** Genotip kesindir: **aa.** Başka ihtimal yoktur; çünkü yanında tek bir baskın gen olsaydı çekinik özellik görünmezdi. Beyaz çiçekli bir bezelye gördüğünde genotipini tereddütsüz yazabilirsin.

**Durum 2 — Baskın fenotip gördün.** Genotip **iki ihtimallidir: AA ya da Aa.** Dışarıdan bakarak hangisi olduğunu söyleyemezsin. Mor çiçekli bir bezelyenin saf döl mü melez döl mü olduğu bilinmez.

Bu asimetri neden önemli? Çünkü sorular genellikle tam bu noktayı ölçer. Soruda “kesin olarak bilinebilir mi?” diye sorulduğunda cevap, fenotipin baskın mı çekinik mi olduğuna bakılarak verilir.

Peki baskın fenotipli bir bireyin genotipi hiç mi belirlenemez? Belirlenebilir — ama bunun için ek bilgi gerekir. Örneğin o bireyin **çekinik fenotipli bir yavrusu** varsa, o yavru çekinik genlerinden birini bu bireyden almış olmalıdır. Öyleyse birey çekinik gen taşıyordur; genotipi **Aa**’dır.

Bu akıl yürütmeyi dikkatle oku: sonuca fenotipe bakarak değil, **yavrudan geriye giderek** ulaştık. Kalıtım sorularında en çok ölçülen düşünme becerisi budur — verilen bilgiden yola çıkarak görünmeyen bir bilgiye ulaşmak.

*Kapsam notu: bu dersin kazanımı kavramları tanımlamaktır. Çaprazlama problemleri ve oran hesapları bir sonraki kazanımın (F.8.2.2.2) konusudur ve orada bezelye karakterleriyle sınırlı olarak işlenir.*`,
        },
        {
          id: 'lgs-fen-kalitim-yon-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'İki yön, iki farklı kesinlik',
          columns: ['Genotipten fenotipe', 'Fenotipten genotipe'],
          rows: [
            { label: 'Kesin mi?', values: ['Her zaman kesin', 'Her zaman kesin değil'] },
            { label: 'Baskın durumda', values: ['AA ve Aa → baskın özellik', 'Baskın özellik → AA ya da Aa'] },
            { label: 'Çekinik durumda', values: ['aa → çekinik özellik', 'Çekinik özellik → kesin aa'] },
            { label: 'Kaç ihtimal?', values: ['Tek sonuç', 'Baskında iki, çekinikte tek'] },
            { label: 'Ek bilgi gerekir mi?', values: ['Gerekmez', 'Baskın fenotipte gerekebilir'] },
          ],
          insight:
            'Sağ sütunun üçüncü satırı sorularda en çok işine yarayan bilgidir: çekinik fenotip gördüğünde genotipi tereddütsüz yaz.',
        },
        {
          id: 'lgs-fen-kalitim-yon-tuzak',
          type: 'trap',
          title: 'Baskın fenotipli bireyi saf döl varsaymak',
          wrong: 'Mor çiçekli bitki gördüm, demek ki genotipi AA.',
          right: 'Mor çiçekli bitkinin genotipi AA **ya da** Aa olabilir. Fenotip ikisini ayırmaz.',
          body: 'Bu varsayım, kalıtım sorularında en sık yapılan hatadır. “Kesin olarak bilinebilir” ifadesini gördüğünde önce fenotipin çekinik olup olmadığına bak.',
        },
      ],
    },

    {
      id: 'lgs-fen-kalitim-cevre',
      title: 'Fenotipi yalnız genotip mi belirler?',
      lead: 'Çoğu kaynak bu soruyu atlıyor; oysa fenotipin tanımı burada tamamlanıyor.',
      blocks: [
        {
          id: 'lgs-fen-kalitim-cevre-anlatim',
          type: 'prose',
          body: `Şimdiye kadar fenotipi “genotipin görünen hâli” diye tanımladık. Bu tanım doğru ama eksiktir. Bazı karakterlerde **çevre koşulları** da fenotipe katkıda bulunur.

Birkaç örnek üzerinden görelim.

**Örnek 1 — Bitki boyu.** Aynı genotipe sahip iki bitki düşün. Biri besince zengin toprakta, öbürü kıraç toprakta yetişsin. İkisinin genotipi aynı olduğu hâlde boyları farklı olur. Genotip aynıdır; fenotip farklıdır.

**Örnek 2 — Kaslılık.** Bir insanın kas yapısı genlerinden etkilenir; ama beslenme ve egzersiz de fenotipi belirgin biçimde değiştirir.

**Örnek 3 — Yaprak rengi.** Bazı bitkilerin yaprak rengi ışık miktarına göre değişebilir. Bitkinin genleri değişmemiştir; görünüşü değişmiştir.

Bu örneklerin ortak noktası şudur: **çevre fenotipi etkiler ama genotipi değiştirmez.** Genlerde yazan aynı kalır. Bu yüzden çevrenin yol açtığı değişiklikler yavrulara aktarılmaz.

Bunu bir cümlede toplarsak:

**Fenotip = genotip + çevre etkisi**

Çevrenin yol açtığı bu değişikliklere **modifikasyon** denir ve ayrı bir kazanımın konusudur (F.8.2.3.2). Şimdilik bilmen gereken, fenotipin her zaman doğrudan genotipin aynası olmadığıdır.

Bir karşı örnek de verelim ki sınır netleşsin: bezelyenin çiçek rengi çevreden belirgin biçimde etkilenmez. Mor çiçekli bir bezelye kıraç toprakta da mor kalır. Bu yüzden kalıtım örneklerinde bezelye tercih edilir: karakterleri nettir ve çevreden az etkilenir.

Bu tercihin kendisi bilimsel bir yöntem kararıdır. Çevreden çok etkilenen bir karakter seçilseydi, gözlenen farkın genden mi çevreden mi geldiğini ayırt edemezdik.`,
        },
        {
          id: 'lgs-fen-kalitim-cevre-tablo',
          type: 'table',
          interactive: true,
          title: 'Çevre neyi değiştirir, neyi değiştirmez?',
          columns: ['Durum', 'Genotip', 'Fenotip', 'Yavruya aktarılır mı?'],
          rows: [
            ['Bol besinli toprakta yetişen bitki', 'Değişmez', 'Daha uzun boylu', 'Hayır'],
            ['Kıraç toprakta yetişen aynı genotip', 'Değişmez', 'Daha kısa boylu', 'Hayır'],
            ['Anneden gelen çekinik gen', 'Genotipin parçası', 'Baskın varsa görünmez', 'Evet'],
            ['Bezelyede çiçek rengi', 'Belirleyici', 'Çevreden az etkilenir', 'Evet'],
          ],
          caption:
            'İlk iki satır aynı genotipin iki farklı fenotip verebileceğini gösterir. Son sütun, çevre kaynaklı değişikliklerin neden aktarılmadığını özetler.',
        },
        {
          id: 'lgs-fen-kalitim-cevre-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Bir soruda “aynı genotipe sahip iki birey neden farklı görünüyor?” diye soruluyorsa cevap çevre etkisidir. “Aynı fenotipe sahip iki bireyin genotipi farklı olabilir mi?” diye soruluyorsa cevap baskınlık ilişkisidir. İki soruyu birbirine karıştırma.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Genotipi oku',
      prompt:
        'Bezelyede mor çiçek rengi (A) baskın, beyaz çiçek rengi (a) çekiniktir. Genotipi **Aa** olan bir bitki için şunları belirle: döl tipi, fenotip, çekinik gen taşıyıp taşımadığı.',
      steps: [
        { title: '1. İki harf aynı mı?', body: 'A ve a farklı harfler. Öyleyse bu bitki **melez döldür** (heterozigot).' },
        { title: '2. Büyük harf var mı?', body: 'Evet, bir tane A var. Baskın gen bulunduğuna göre fenotipte baskın özellik görünür.' },
        { title: '3. Fenotipi yaz', body: 'Baskın özellik mor çiçek rengidir. Fenotip: **mor çiçek.**' },
        { title: '4. Küçük harf var mı?', body: 'Evet, bir tane a var. Öyleyse bitki çekinik geni **taşıyor** ama fenotipte göstermiyor.' },
        { title: '5. Sonucu topla', body: 'Melez döl · mor çiçekli · çekinik gen taşıyıcısı. Üç sorunun üçü de tek genotipten okundu.' },
      ],
      answer: 'Melez döl (heterozigot), fenotipi mor çiçek, çekinik geni taşıyor ama göstermiyor.',
      takeaway: 'Bir genotipi okumak üç soruluk bir işlemdir; ezber gerektirmez.',
    },
    {
      title: 'Seviye 2 — Fenotipten genotipe',
      prompt:
        'Bir bahçede iki bezelye var: biri mor çiçekli, öbürü beyaz çiçekli. Hangisinin genotipi kesin olarak bilinebilir? Gerekçeni yaz.',
      steps: [
        { title: '1. Hangi özellik baskın?', body: 'Mor çiçek rengi baskın (A), beyaz çiçek rengi çekiniktir (a).' },
        { title: '2. Beyaz çiçekliyi incele', body: 'Beyaz çekinik özelliktir. Çekinik özelliğin görünmesi için gen çiftinin ikisinin de çekinik olması gerekir.' },
        { title: '3. Beyaz için sonucu yaz', body: 'Genotip kesin olarak **aa**’dır. Başka ihtimal yoktur; yanında bir A olsaydı bitki mor görünürdü.' },
        { title: '4. Mor çiçekliyi incele', body: 'Mor baskın özelliktir. Fenotipte mor görünmesi için en az bir A yeterlidir: AA da olabilir, Aa da.' },
        { title: '5. Mor için sonucu yaz', body: 'Genotip **iki ihtimallidir**: AA ya da Aa. Dışarıdan bakarak ayırt edilemez.' },
        { title: '6. Soruyu cevapla', body: 'Kesin olarak bilinebilen, **beyaz çiçekli** bitkinin genotipidir: aa.' },
      ],
      answer: 'Beyaz çiçekli bitkinin genotipi kesin olarak bilinir: aa. Mor çiçekli için AA ya da Aa olmak üzere iki ihtimal vardır.',
      takeaway:
        'Kural kısa: çekinik fenotip → genotip kesin; baskın fenotip → genotip iki ihtimalli.',
    },
    {
      title: 'Seviye 3 — Yavrudan geriye git',
      prompt:
        'Mor çiçekli iki bezelye bitkisinin yavruları arasında **beyaz çiçekli** bir bitki var. Ana ve babanın genotipleri ne olabilir? Gerekçeni adım adım yaz.',
      steps: [
        { title: '1. Yavrunun genotipini belirle', body: 'Yavru beyaz çiçekli, yani çekinik fenotipli. Öyleyse genotipi kesin olarak **aa**’dır.' },
        { title: '2. Genlerin nereden geldiğini düşün', body: 'Yavrudaki gen çiftinin biri anneden, biri babadan gelir. Yavru aa ise, bir a anneden bir a babadan gelmiştir.' },
        { title: '3. Ana babanın taşıdıklarını çıkar', body: 'Hem anne hem baba en az bir çekinik gen (a) taşımak zorundadır; yoksa yavruya a veremezlerdi.' },
        { title: '4. Ana babanın fenotipini kullan', body: 'Ama ikisi de mor çiçekli. Mor görünmeleri için en az bir baskın gen (A) taşımaları gerekir.' },
        { title: '5. İki koşulu birleştir', body: 'Hem A hem a taşımak zorundalar. Bunu sağlayan tek genotip **Aa**’dır.' },
        { title: '6. Sonucu yaz', body: 'Ana ve babanın ikisi de melez döldür: **Aa × Aa.** İkisi de çekinik geni taşıyor ama fenotipte göstermiyor.' },
      ],
      answer: 'Anne ve babanın ikisi de Aa (melez döl) genotipindedir.',
      takeaway:
        'Görünmeyen bilgiye yavrudan geriye giderek ulaştık. Kalıtım sorularında en çok ölçülen düşünme becerisi budur.',
    },
  ],

  dailyLife: {
    title: 'Bu kavramlar günlük hayatta nerede karşına çıkıyor?',
    body:
      'Kalıtım kavramları yalnız bezelyelerle ilgili değildir; ailedeki benzerlikleri ve farkları açıklamak için de kullanılır.',
    links: [
      'Bir ailede anne ve babada görülmeyen bir özelliğin çocukta çıkması, çekinik genlerin taşındığını gösterir.',
      'Hayvan yetiştiriciliğinde istenen özellikte saf döl elde etmeye çalışılır.',
      'Bitki ıslahında verimi yüksek çeşitler seçilerek yetiştirilir.',
      'Bazı kalıtsal hastalıkların neden kuşak atlayabildiği, çekinik gen taşıyıcılığıyla açıklanır.',
      'Aynı genotipli bitkilerin farklı topraklarda farklı boyda olması, çevrenin fenotipe etkisini gösterir.',
    ],
  },

  questionClue: {
    concept: 'Kalıtım kavramları sorusu',
    statement:
      'Soruda genotip harfleri, “saf döl / melez döl” ifadeleri ya da “kesin olarak bilinebilir mi” kalıbı varsa, sorulan şey kavramların ayrımıdır.',
    clues: [
      'AA, Aa, aa biçiminde harf gösterimlerinin verilmesi',
      '“Saf döl”, “melez döl”, “taşıyıcı” sözcüklerinin geçmesi',
      '“Kesin olarak bilinebilir” ya da “belirlenemez” ifadeleri',
      'Ana babada görünmeyen bir özelliğin yavruda çıkması',
      'Aynı genotipli bireylerin farklı görünmesi (çevre etkisi)',
    ],
    reasoning:
      'Bu işaretler, sorunun bir hesap değil bir **çıkarım** istediğini gösterir. Çözüm yolu üç soruyu sırayla uygulamaktır: harfler aynı mı, büyük harf var mı, küçük harf var mı.',
    boundary:
      'Bu ipuçlarını “harf gördüm, kareli tablo doldurayım” refleksine çevirme. Bu kazanım kavramları tanımlamayı ister; çaprazlama işlemi bir sonraki kazanımın konusudur.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.2.2.1 kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Verilen bir genotipin döl tipinin ve fenotipinin sorulması',
      'Aynı fenotipli iki bireyin genotipinin farklı olabileceğinin sorgulanması',
      'Hangi bireyin genotipinin kesin olarak bilinebileceğinin sorulması',
      'Ana babada görünmeyen bir özelliğin yavruda çıkmasının açıklanması',
      'Bir öğrenci açıklamasındaki genotip–fenotip karışıklığının bulunması',
      'Aynı genotipli bireylerin farklı görünmesinin çevre etkisiyle açıklanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Genotipi AA olan bir bezelye ile genotipi Aa olan bir bezelye aynı fenotipi gösterir mi? Neden?',
      hint: 'Fenotipte baskın özelliğin görünmesi için kaç baskın gen yeterli?',
      answer:
        'Evet, ikisi de aynı fenotipi gösterir: mor çiçek. Baskın özelliğin görünmesi için gen çiftinde **en az bir** baskın gen bulunması yeterlidir. AA’da iki, Aa’da bir baskın gen vardır; ikisinde de baskın özellik görünür. Aralarındaki fark genotiptedir: Aa çekinik geni taşır, AA taşımaz. Bu yüzden dışarıdan bakarak ikisini ayırt edemezsin.',
    },
    {
      prompt:
        'Bir öğrenci “Beyaz çiçekli bir bezelyenin genotipi Aa da olabilir.” diyor. Bu ifade doğru mu?',
      hint: 'Çekinik özelliğin görünmesi için gen çiftinde ne gerekir?',
      answer:
        'Doğru değildir. Beyaz çiçek çekinik özelliktir ve çekinik özelliğin fenotipte görünmesi için gen çiftinin **ikisinin de çekinik** olması gerekir. Genotip Aa olsaydı, yanındaki baskın gen (A) çekinik genin etkisini örter ve bitki mor görünürdü. Öyleyse beyaz çiçekli bir bezelyenin genotipi kesin olarak **aa**’dır.',
    },
    {
      prompt:
        'Aynı genotipe sahip iki bitki farklı boyda olabilir mi? Cevabın evetse, bu durum genotiplerinin değiştiği anlamına gelir mi?',
      hint: 'Fenotipi yalnız genotip mi belirliyor?',
      answer:
        'Evet, olabilir. Bitki boyu gibi bazı karakterlerde çevre koşulları (toprak, su, ışık, besin) fenotipi etkiler. Aynı genotipli iki bitki farklı koşullarda farklı boyda olabilir. Ancak bu, genotiplerinin değiştiği anlamına **gelmez**: genlerde yazan aynı kalır. Çevrenin yol açtığı bu değişiklikler yavrulara aktarılmaz.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, kavramları ayırt etme',
    body:
      'Kazanım “kalıtım ile ilgili kavramları tanımlar” diyor; ama sorular tanımı ezberden yazmanı değil, bir durumda **doğru kavramı seçmeni** ister. MEB merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konudaki somut karşılığı şudur: verilen bir durumda genotiple fenotipi, saf dölle melez dölü ayırabilmen ve hangisinin kesin bilinebileceğini söyleyebilmen gerekir.',
    measures: [
      'Genotip ile fenotipi doğru ayırt edebilme',
      'Bir genotipin saf döl mü melez döl mü olduğunu belirleyebilme',
      'Baskın ve çekinik geni harf gösteriminden okuyabilme',
      'Hangi fenotipte genotipin kesin bilinebileceğini söyleyebilme',
      'Ana babada görünmeyen özelliğin yavruda çıkışını açıklayabilme',
      'Çevrenin fenotipe etkisini genotipten ayırabilme',
    ],
  },

  simulationTable: {
    title: 'Bir bahçedeki dört bezelye bitkisinin kaydı',
    columns: ['Bitki', 'Çiçek rengi (fenotip)', 'Bilinen ek bilgi'],
    rows: [
      ['K', 'Mor', 'Beyaz çiçekli bir yavrusu var'],
      ['L', 'Mor', 'Yavruları hakkında bilgi yok'],
      ['M', 'Beyaz', 'Yavruları hakkında bilgi yok'],
      ['N', 'Beyaz', 'Ana babasının ikisi de mor çiçekli'],
    ],
    caption:
      'Bezelyede mor çiçek rengi baskın (A), beyaz çiçek rengi çekiniktir (a).',
  },

  simulation: {
    title: 'Mini uygulama — özgün bahçe kaydı',
    passage: `Bir öğrenci bahçesindeki dört bezelye bitkisini inceliyor ve yukarıdaki kaydı tutuyor.

Öğrenci, kaydına bakarak “Genotipini kesin olarak bilemeyeceğim tek bitki var.” diyor.`,
    question: 'Öğrencinin genotipini kesin olarak **bilemeyeceği** bitki hangisidir?',
    options: [
      {
        text: 'K bitkisi',
        explanation:
          'K mor çiçekli ama beyaz çiçekli (aa) bir yavrusu var. Yavrunun çekinik genlerinden biri K’den gelmiş olmalı. Öyleyse K çekinik gen taşıyor ve mor göründüğüne göre genotipi kesin olarak Aa’dır.',
      },
      {
        text: 'L bitkisi',
        explanation:
          'Doğru cevap. L mor çiçekli, yani baskın fenotipli; ve hakkında başka bilgi yok. Baskın fenotip AA ile Aa genotiplerinin ikisinde de görünür. Ek bilgi olmadığı için hangisi olduğu belirlenemez.',
      },
      {
        text: 'M bitkisi',
        explanation:
          'M beyaz çiçekli, yani çekinik fenotipli. Çekinik özelliğin görünmesi için gen çiftinin ikisinin de çekinik olması gerekir. Genotipi ek bilgiye gerek kalmadan aa olarak bilinir.',
      },
      {
        text: 'N bitkisi',
        explanation:
          'N beyaz çiçekli, yani çekinik fenotipli; genotipi zaten aa olarak kesindir. Ana babasının mor çiçekli olması bu sonucu değiştirmez, yalnız onların çekinik gen taşıdığını gösterir.',
      },
      {
        text: 'Hem K hem L bitkisi',
        explanation:
          'K için ek bilgi verilmiştir: beyaz çiçekli yavrusu olması genotipini Aa olarak belirler. Belirsizlik yalnız L’dedir; bu yüzden iki bitkiyi birlikte saymak yanlıştır.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru dört bitkiyi tek tek değerlendirmeyi istiyor. Yöntem: önce fenotipe bak (çekinikse genotip kesindir), baskınsa ek bilgi olup olmadığına bak. Bu bir hesap değil, bir eleme işidir.',
    critical_point:
      'Kritik nokta K ile L’nin farkı. İkisi de mor çiçekli; ama K’nin beyaz çiçekli bir yavrusu olduğu bilgisi verilmiş. Bu tek cümle K’nin genotipini belirliyor. Ek bilgiyi fark etmeyen öğrenci K’yi de belirsiz sayar ve yanılır.',
    takeaway:
      'Baskın fenotipli bir bireyin genotipi, ancak ek bir bilgi (örneğin çekinik fenotipli bir yavrusu) varsa belirlenebilir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Genotipi **aa** olan bir birey için aşağıdakilerden hangisi doğrudur?',
      options: [
        'Melez döldür ve baskın özelliği gösterir',
        'Saf döldür ve çekinik özelliği gösterir',
        'Saf döldür ve baskın özelliği gösterir',
        'Melez döldür ve çekinik özelliği gösterir',
      ],
      answer_index: 1,
      explanation:
        'Gen çiftinin iki üyesi de aynı olduğu için birey saf döldür (homozigot). İki gen de çekinik olduğundan etkiyi örtecek baskın gen yoktur; bu yüzden fenotipte çekinik özellik görünür. Melez döl ifadesi yalnız Aa için kullanılır, bu yüzden melez içeren seçenekler elenir.',
    },
    {
      purpose: 'apply',
      question:
        'Bezelyede mor çiçek rengi baskın, beyaz çiçek rengi çekiniktir. Beyaz çiçekli bir bezelyenin genotipi hakkında ne söylenebilir?',
      options: [
        'Kesin olarak aa’dır',
        'AA ya da Aa olabilir',
        'Kesin olarak Aa’dır',
        'Ek bilgi olmadan hiçbir şey söylenemez',
      ],
      answer_index: 0,
      explanation:
        'Beyaz çiçek çekinik özelliktir. Çekinik özelliğin fenotipte görünebilmesi için gen çiftinin ikisinin de çekinik olması gerekir; yanında tek bir baskın gen bulunsaydı bitki mor görünürdü. Bu yüzden genotip ek bilgiye gerek kalmadan aa olarak belirlenir. İki ihtimal, baskın fenotipli bireyler için geçerlidir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Melez döl bireyler, baskın ve çekinik özelliğin karışımı olan ara bir görünüşe sahiptir.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Melez dölün gen çiftini yanlış yazmak',
        'Baskın genin çekinik genin etkisini örttüğünü gözden kaçırmak',
        'Genotip ile karakteri karıştırmak',
        'Çevrenin fenotipe etkisini yok saymak',
      ],
      answer_index: 1,
      explanation:
        'Baskın–çekinik ilişkisinde genler boya gibi karışmaz; baskın gen çekinik genin etkisini örter. Bu yüzden Aa genotipli birey ara bir görünüş değil, tam olarak baskın özelliği gösterir. Öğrenci gen çiftini doğru anlamış, ancak örtme ilişkisini karışım sanmıştır.',
    },
  ],

  summary: [
    'Bir karakteri belirleyen genler canlıda çift hâlde bulunur; biri anneden, biri babadan gelir.',
    'Genotip gen çiftidir (yazılı olan); fenotip görünen özelliktir.',
    'Baskın gen büyük harfle (A), çekinik gen küçük harfle (a) gösterilir.',
    'Baskın gen, gen çiftindeki çekinik genin etkisini örter.',
    'Saf döl (homozigot): gen çiftinin ikisi de aynı — AA ya da aa.',
    'Melez döl (heterozigot): gen çiftinin biri baskın biri çekinik — Aa.',
    'Melez döl fenotipte baskın özelliği gösterir; çekinik geni taşır ama göstermez.',
    'Çekinik fenotip görüldüğünde genotip kesindir: aa.',
    'Baskın fenotip görüldüğünde genotip iki ihtimallidir: AA ya da Aa.',
    'Bazı karakterlerde çevre de fenotipi etkiler; ama genotipi değiştirmez ve bu etki yavruya aktarılmaz.',
  ],

  next: [
    'Tek Karakter Çaprazlamaları ve Cinsiyetin Belirlenmesi (F.8.2.2.2, F.8.2.2.3)',
    'Mutasyon, Modifikasyon ve Adaptasyon (F.8.2.3.1–F.8.2.4.1)',
    'Genetik Mühendisliği ve Biyoteknoloji (F.8.2.5.1)',
  ],
})

export default lesson
