import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.7 Elektrik Yükleri ve Elektrik Enerjisi · 2. ders
 * Kazanım : F.8.7.2.1 · F.8.7.2.2
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.7.2.1 → Nötr cismin yüksüz cisim anlamına gelmediği, nötr
 *               cisimlerde pozitif ve negatif yük miktarlarının eşit olduğu
 *               vurgulanır. Elektroskobun yük ölçümünde kullanıldığı
 *               belirtilir, ÇALIŞMA PRENSİBİNE GİRİLMEZ.
 *   F.8.7.2.2 → Topraklamanın günlük yaşam ve teknolojideki uygulamaları
 *               dikkate alınarak can ve mal güvenliği açısından önemi
 *               vurgulanır.
 *
 * Bu yüzden derste elektroskop yalnız “ne işe yaradığı” düzeyinde tanıtılır;
 * yaprakların neden açıldığı (çalışma prensibi) anlatılmaz ve öğrenciye bunun
 * kapsam dışı olduğu açıkça söylenir. Yük durumları ve topraklama için yeni
 * bir şema yazıldı (lgs-fen-yuk-durumlari).
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-elektroskop-ve-topraklama',
  topic: 'Elektrik Yükleri ve Elektrik Enerjisi',
  order: 2,
  title: 'Nötr Cisim, Elektroskop ve Topraklama',
  subtitle:
    'Nötr cisim yüksüz değildir; yükleri dengededir. Topraklama ise o dengeyi güvenle geri kurmanın yoludur.',
  minutes: 40,
  kazanimlar: ['F.8.7.2.1', 'F.8.7.2.2'],
  prerequisites: [
    { topic: 'Elektriklenme: Elektronun Yolculuğu', why: 'Elektron aktarımı ve yük cinsleri orada kuruldu.' },
    { topic: 'İletken ve yalıtkan maddeler (6. sınıf)', why: 'Topraklama iletken bir yol gerektirir.' },
  ],
  outcomes: [
    'Cisimleri pozitif yüklü, negatif yüklü ve nötr olarak sınıflandırabileceksin.',
    'Nötr cismin neden yüksüz olmadığını açıklayabileceksin.',
    'Elektroskobun ne işe yaradığını söyleyebileceksin.',
    'Topraklamanın ne olduğunu elektron hareketiyle açıklayabileceksin.',
    'Topraklamanın can ve mal güvenliği açısından önemini örneklerle anlatabileceksin.',
  ],

  opening: {
    title: 'Üç uçlu fiş',
    lead: 'Çamaşır makinesinin ya da buzdolabının fişine bakarsan iki metal ucun yanında bir de üçüncü bir metal parça görürsün. O parça ne işe yarar?',
    body: `Evindeki çamaşır makinesinin, buzdolabının ya da fırının fişine dikkatle bak. İki yuvarlak metal ucun yanında, fişin kenarında ayrı bir metal şerit bulunur. Prizlerde de bu şeride denk gelen metal parçalar vardır.

Bu parçanın adı **topraklama** bağlantısıdır. Cihaz normal çalışırken hiçbir iş yapmaz; ama bir arıza olduğunda hayat kurtarabilir.

Diyelim ki makinenin içinde bir kablonun yalıtımı yıprandı ve elektrik akımı cihazın metal gövdesine kaçtı. Topraklama olmasaydı, gövdeye dokunan kişi akımın geçtiği yol olurdu ve çarpılırdı. Topraklama varsa, akım kişinin vücudu yerine **topraklama hattından toprağa** gider.

Bu derste bu güvenlik düzeninin arkasındaki fikri kuracağız. Önce bir temel ayrımla başlayacağız: bir cisim **pozitif yüklü**, **negatif yüklü** ya da **nötr** olabilir. Program burada özellikle bir yanılgının düzeltilmesini ister: **nötr cisim, yüksüz cisim demek değildir.**

Sonra bir cismin yüklü olup olmadığını anlamamızı sağlayan bir aracı tanıyacağız: **elektroskop.**

Son olarak **topraklamayı** göreceğiz: yüklü bir cismin fazla yükünü toprağa aktararak ya da eksiğini topraktan alarak nötr hâle gelmesi. Program topraklamanın **can ve mal güvenliği** açısından öneminin vurgulanmasını ister; bu yüzden dersin son bölümü bir güvenlik bölümüdür.

Bir kapsam notu: *program elektroskobun **çalışma prensibine girilmemesini** ister.* Bu yüzden elektroskobun ne işe yaradığını öğreneceğiz, ama içinde neler olduğunu ayrıntılı incelemeyeceğiz.`,
  },

  concepts: [
    {
      term: 'Pozitif yüklü cisim',
      body: 'Pozitif yük miktarı negatif yük miktarından **fazla** olan cisimdir. Elektron vermiştir; yani elektron eksikliği vardır.',
    },
    {
      term: 'Negatif yüklü cisim',
      body: 'Negatif yük miktarı pozitif yük miktarından **fazla** olan cisimdir. Elektron almıştır; yani elektron fazlalığı vardır.',
    },
    {
      term: 'Nötr cisim',
      body: 'Pozitif ve negatif yük miktarları **eşit** olan cisimdir. İçinde çok sayıda yük vardır; ama birbirini dengeler. **Nötr cisim yüksüz değildir.**',
    },
    {
      term: 'Elektroskop',
      body: 'Bir cismin elektrik yüküyle yüklü olup olmadığını anlamak için kullanılan araçtır. Program bu düzeyde yalnız ne işe yaradığının bilinmesini ister.',
    },
    {
      term: 'Topraklama',
      body: 'Yüklü bir cismin iletken bir yolla toprağa bağlanarak nötr hâle gelmesidir. Negatif cisimdeki fazla elektronlar toprağa akar; pozitif cisme topraktan elektron gelir.',
    },
    {
      term: 'Paratoner (yıldırımsavar)',
      body: 'Yüksek yapıların en üst noktasına yerleştirilen, toprağa iletken bir kabloyla bağlı metal çubuktur. Yıldırımın yükünü binaya zarar vermeden toprağa iletir.',
    },
  ],

  why: {
    question: 'Nötr cisim neden yüksüz değildir?',
    body: `Çünkü her madde atomlardan oluşur ve her atomda yük vardır.

Bir atomu hatırla: çekirdekte **protonlar** (pozitif), çevresinde **elektronlar** (negatif) bulunur. Sıradan bir atomda proton sayısı elektron sayısına eşittir. Bu yüzden atomun toplam yükü sıfırdır; ama içinde yükler **vardır.**

Bir cisim milyarlarca atomdan oluşur. Her atomda pozitif ve negatif yükler bulunduğu için cismin içinde **çok sayıda** yük vardır. Bu yükler eşit sayıda olduğunda birbirini dengeler ve cisim dışarıya yüklü gibi davranmaz. Buna **nötr** denir.

Yani **nötr**, “yükü yok” demek değil, “yükleri dengede” demektir.

Bu ayrım neden bu kadar önemli? Çünkü nötr cisimde yükler bulunmasaydı, bir önceki derste gördüğün iki olay mümkün olmazdı:

1. **Etki ile elektriklenme:** yüklü bir cisim nötr bir iletkene yaklaştırıldığında iletkendeki yükler ayrışır. Yük olmasaydı ayrışacak bir şey de olmazdı.
2. **Yüklü cismin nötr cismi çekmesi:** nötr cismin yakın tarafında zıt cins yükler toplanır. Yine, yükler olmasaydı bu da olmazdı.

Program bu yüzden bu noktanın **özellikle vurgulanmasını** ister.

Şimdi üç yük durumunu tek kuralla bağlayalım:

- **Pozitif yük sayısı > negatif yük sayısı** → pozitif yüklü (elektron eksikliği)
- **Pozitif yük sayısı = negatif yük sayısı** → nötr
- **Pozitif yük sayısı < negatif yük sayısı** → negatif yüklü (elektron fazlalığı)

Dikkat et: üç durumda da cisimde hem pozitif hem negatif yük vardır. Durumları ayıran şey yüklerin **var olup olmaması** değil, **sayılarının karşılaştırılmasıdır.**`,
  },

  mechanism: {
    title: 'Topraklama nasıl gerçekleşir?',
    lead: 'Yüklü bir cisim toprağa bağlandığında ne olur? Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, negatif yüklü bir cismin topraklanmasını elektron hareketiyle anlatır.',
    steps: [
      {
        title: '1. Cisim negatif yüklüdür',
        body: 'Cisimde elektron fazlalığı vardır; negatif yük sayısı pozitif yük sayısından fazladır.',
      },
      {
        title: '2. Cisim iletken bir yolla toprağa bağlanır',
        body: 'Metal bir kablo ya da çubuk cismi toprağa bağlar. Yalıtkan bir yol topraklama sağlamaz.',
      },
      {
        title: '3. Fazla elektronlar toprağa akar',
        body: 'Aynı cins yükler birbirini ittiği için fazla elektronlar birbirinden uzaklaşmak ister ve iletken yol boyunca toprağa geçer.',
      },
      {
        title: '4. Toprak bu yükü dağıtır',
        body: 'Toprak çok büyük olduğu için aldığı yük onu fark edilir biçimde etkilemez; yük toprağa dağılır.',
      },
      {
        title: '5. Cisim nötr hâle gelir',
        body: 'Fazla elektronlar gidince cisimde pozitif ve negatif yükler yeniden eşitlenir.',
      },
      {
        title: '6. Pozitif cisimde yön terstir',
        body: 'Pozitif yüklü bir cisim topraklanırsa bu kez **topraktan cisme elektron gelir** ve cisim nötrleşir. Hareket eden yine elektrondur; proton hareket etmez.',
      },
    ],
    takeaway:
      'Son adım önemli bir yanılgıyı düzeltir: pozitif cisim topraklanınca “pozitif yükler toprağa gitmez”; topraktan elektron gelir.',
  },

  comparison: {
    title: 'Üç yük durumu',
    columns: ['Pozitif yüklü', 'Nötr', 'Negatif yüklü'],
    rows: [
      { label: 'Yük sayıları', values: ['Pozitif > negatif', 'Pozitif = negatif', 'Pozitif < negatif'] },
      { label: 'Elektron durumu', values: ['Elektron eksikliği', 'Denge', 'Elektron fazlalığı'] },
      { label: 'Nasıl oluştu?', values: ['Elektron verdi', 'Başlangıç durumu ya da nötrleşme', 'Elektron aldı'] },
      { label: 'İçinde yük var mı?', values: ['Var', 'Var — ama dengede', 'Var'] },
      { label: 'Topraklanınca', values: ['Topraktan elektron gelir', 'Değişmez', 'Elektronlar toprağa gider'] },
    ],
    insight:
      '“İçinde yük var mı?” satırı üç sütunda da “var” der. Programın vurgulamamızı istediği nokta tam olarak budur: nötr cisim yüksüz değildir.',
  },

  traps: [
    {
      title: 'Nötr cismi yüksüz sanmak',
      wrong: 'Nötr bir cisimde hiç elektrik yükü yoktur.',
      right: 'Nötr cisimde çok sayıda pozitif ve negatif yük vardır; ama sayıları **eşit** olduğu için birbirini dengeler.',
      body: 'Program bu noktanın özellikle vurgulanmasını ister. Etki ile elektriklenmenin ve yüklü cismin nötr cismi çekmesinin mümkün olması, nötr cisimde yük bulunduğunun kanıtıdır.',
    },
    {
      title: 'Pozitif cisim topraklanınca protonların toprağa gittiğini sanmak',
      wrong: 'Pozitif yüklü cisim topraklanınca fazla protonlar toprağa akar.',
      right: 'Protonlar yer değiştirmez. Pozitif yüklü cisim topraklandığında **topraktan cisme elektron gelir** ve cisim nötrleşir.',
      body: 'Elektriklenmede ve topraklamada hareket eden yük her zaman elektrondur.',
    },
    {
      title: 'Yalıtkan bir bağlantıyla topraklama yapılabileceğini sanmak',
      wrong: 'Cismi plastik bir iple toprağa bağlarsam topraklanmış olur.',
      right: 'Topraklama için **iletken** bir yol gerekir; yükler yalıtkan malzemeden geçemez.',
      body: 'Paratonerin kablosu ve prizlerin topraklama hattı bu yüzden metaldir.',
    },
    {
      title: 'Elektroskobun yük miktarını ölçtüğünü sanmak',
      wrong: 'Elektroskop bir cismin tam olarak kaç birim yük taşıdığını gösterir.',
      right: 'Elektroskop, bir cismin **yüklü olup olmadığını** anlamak için kullanılır. Program bu düzeyde çalışma prensibine girilmemesini ister.',
      body: 'Elektroskobu bir “yük var mı?” dedektörü olarak düşün. Nasıl çalıştığının ayrıntısı bu kazanımın kapsamında değildir.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-topraklama-yuk',
      title: 'Yük durumları ve elektroskop',
      lead: 'Önce üç yük durumunu şema üzerinde sayarak karşılaştıralım, sonra elektroskobu tanıyalım.',
      blocks: [
        {
          id: 'lgs-fen-topraklama-yuk-sema',
          type: 'figure',
          kind: 'lgs-fen-yuk-durumlari',
          title: 'Pozitif, nötr, negatif ve topraklama',
          width: 'full',
          complexity: 'medium',
          caption:
            'Üç cisimde de hem artı hem eksi işaretleri vardır; onları ayıran şey işaretlerin sayısıdır. Topraklamada negatif cismin fazla elektronları toprağa akar ve cisim nötrleşir.',
          purpose: 'Nötr cismin yüksüz olmadığını ve topraklamada elektronun hareketini görünür kılmak',
          alt:
            'Dört panel: pozitif yüklü cisimde altı artı üç eksi; nötr cisimde dört artı dört eksi; negatif yüklü cisimde üç artı altı eksi; topraklamada negatif yüklü cisimden toprağa doğru elektron akışı.',
          data: {},
          focus: [
            { title: 'Pozitif yüklü', body: 'Artı işaretleri eksilerden fazla. Cisim elektron vermiş; elektron eksikliği var.' },
            { title: 'Nötr', body: 'Artı ve eksi işaretleri eşit. Cisimde yükler var ama dengede; nötr cisim yüksüz değildir.' },
            { title: 'Negatif yüklü', body: 'Eksi işaretleri artılardan fazla. Cisim elektron almış; elektron fazlalığı var.' },
            { title: 'Topraklama', body: 'Negatif cisim iletkenle toprağa bağlanınca fazla elektronlar toprağa akar ve cisim nötrleşir.' },
          ],
        },
        {
          id: 'lgs-fen-topraklama-yuk-anlatim',
          type: 'prose',
          body: `Şemadaki üç cisme bak ve işaretleri say. Üçünde de **hem artı hem eksi** işaret vardır. Onları birbirinden ayıran tek şey, işaretlerin **sayısıdır.**

Bir cismi sınıflandırmak için tek bir karşılaştırma yeterlidir:

- Artılar fazlaysa → **pozitif yüklü**
- Eşitse → **nötr**
- Eksiler fazlaysa → **negatif yüklü**

Sorularda cisimler genellikle bu biçimde, içlerindeki artı ve eksi işaretleriyle çizilir. Senden yapman beklenen tek şey saymak ve karşılaştırmaktır. İşaret çizilmemiş bir cismi “yüksüz” sanma; soruda nötr olduğu söyleniyorsa içinde eşit sayıda artı ve eksi olduğunu düşün.

**Elektroskop.** Bir cismin yüklü olup olmadığını gözle anlamak zordur. Bu iş için kullanılan araca **elektroskop** denir. Elektroskopta, yüklü bir cisim araca dokundurulduğunda ya da yaklaştırıldığında gözlenebilir bir değişiklik olur; böylece cismin yüklü olduğu anlaşılır. Nötr bir cisim ise bu değişikliğe yol açmaz.

*Program bu kazanımda elektroskobun **yük ölçümünde kullanıldığının belirtilmesini** ve **çalışma prensibine girilmemesini** ister.* Bu yüzden aracın içinde neler olduğunu, parçalarının neden hareket ettiğini burada anlatmıyoruz. Bilmen gereken: **elektroskop, bir cismin yüklü olup olmadığını anlamaya yarayan bir araçtır.**`,
        },
        {
          id: 'lgs-fen-topraklama-yuk-hafiza',
          type: 'memory',
          title: 'Üç durum, tek karşılaştırma',
          body: '**Artı fazla → pozitif. Eşit → nötr. Eksi fazla → negatif.** Üçünde de yük vardır; nötr yüksüz değildir.',
        },
      ],
    },

    {
      id: 'lgs-fen-topraklama-guvenlik',
      title: 'Topraklama ve güvenlik',
      lead: 'Program topraklamanın günlük yaşam ve teknolojideki uygulamalarıyla can ve mal güvenliği açısından öneminin vurgulanmasını ister.',
      blocks: [
        {
          id: 'lgs-fen-topraklama-guvenlik-anlatim',
          type: 'prose',
          body: `Topraklama, yüklü bir cismin iletken bir yolla toprağa bağlanarak nötr hâle gelmesidir. Toprak çok büyük bir iletken gibi davranır: fazla elektronları alabilir, eksik elektronları verebilir; bu alışveriş toprağı fark edilir biçimde etkilemez.

Topraklamanın asıl önemi **güvenliktir.** Günlük hayatta ve teknolojide nerelerde kullanıldığına bakalım.

**1. Evdeki elektrikli cihazlar.** Çamaşır makinesi, buzdolabı, fırın, bulaşık makinesi gibi metal gövdeli cihazların fişlerinde **topraklama bağlantısı** bulunur. Bir arıza sonucu elektrik cihazın metal gövdesine kaçarsa, akım topraklama hattından toprağa gider; gövdeye dokunan kişi çarpılmaz. Bu yüzden bu cihazlar mutlaka **topraklı prize** takılmalıdır.

**2. Binalar ve yıldırım.** Yüksek binaların, minarelerin ve kulelerin en üst noktasına **paratoner (yıldırımsavar)** yerleştirilir. Paratoner, toprağa kalın bir metal kabloyla bağlı sivri uçlu bir metal çubuktur. Yıldırım düştüğünde büyük yük bu yol üzerinden binaya zarar vermeden toprağa iletilir.

**3. Akaryakıt taşıma ve dolum.** Yakıt taşıyan araçlarda ve yakıt dolumu sırasında sürtünmeyle biriken yük bir kıvılcıma yol açarsa yangın ve patlama riski doğar. Bu yüzden bu işlemlerde topraklama yapılır; biriken yük güvenle toprağa aktarılır.

**4. Elektronik üretim ve hastaneler.** Hassas elektronik parçaların üretildiği yerlerde ve bazı sağlık ortamlarında, biriken yükün cihazlara zarar vermemesi ve kıvılcım oluşmaması için topraklama önlemleri alınır.

**Yıldırımdan korunma.** Topraklama bilgisi, yıldırımlı havada nasıl davranmamız gerektiğini de açıklar. Yıldırım genellikle bulunduğu yerdeki **en yüksek** noktaya düşme eğilimindedir. Bu yüzden:

- Açık arazide en yüksek nokta olmamaya çalış; çömelerek alçal.
- Yalnız başına duran **ağaçların altına sığınma.**
- Denizden, gölden, havuzdan **hemen çık.**
- Mümkünse paratonerli bir binanın ya da kapalı bir aracın içine gir.
- Metal direklerden ve tellerden uzak dur.

Bu kuralların hepsinin ortak mantığı, yükün senin vücudunun üzerinden toprağa ulaşmasını önlemektir.`,
        },
        {
          id: 'lgs-fen-topraklama-guvenlik-tablo',
          type: 'table',
          interactive: true,
          title: 'Topraklamanın uygulamaları',
          columns: ['Uygulama', 'Nerede?', 'Neyi korur?'],
          rows: [
            ['Topraklı priz ve fiş', 'Evlerdeki metal gövdeli cihazlar', 'Cihaza dokunan kişiyi elektrik çarpmasından'],
            ['Paratoner', 'Yüksek binalar, kuleler', 'Binayı ve içindekileri yıldırımdan'],
            ['Akaryakıt topraklaması', 'Yakıt tankerleri, dolum noktaları', 'Kıvılcım kaynaklı yangın ve patlamadan'],
            ['Antistatik önlemler', 'Elektronik üretim, bazı sağlık ortamları', 'Hassas cihazları ve ortamı biriken yükten'],
          ],
          caption: 'Dört uygulamanın ortak amacı, biriken ya da kaçan yükün insan ve eşya yerine güvenli bir yoldan toprağa gitmesidir.',
        },
        {
          id: 'lgs-fen-topraklama-guvenlik-hoca',
          type: 'teacher_note',
          tone: 'warn',
          body:
            'Bu bölüm bir sınav konusundan fazlasıdır. Evinde metal gövdeli cihazların topraklı prize takılı olduğundan emin ol; topraklama ucu kırık ya da iptal edilmiş fiş ve uzatma kabloları kullanma. Yıldırımlı havada ağaç altına sığınma.',
        },
        {
          id: 'lgs-fen-topraklama-guvenlik-baglanti',
          type: 'connection',
          title: 'Bu ders nerelere bağlanıyor?',
          body: 'Topraklama, elektrik ünitesinin güvenlik ayağıdır.',
          links: [
            'Elektriklenme dersinde gördüğün şimşek ve yıldırım, paratonerin varlık nedenidir.',
            'Elektrik enerjisi dersinde sigortanın önemini göreceksin; sigorta da bir güvenlik düzeneğidir.',
            'Asitler ve bazlar dersindeki güvenlik kuralları gibi, bu kurallar da evde uygulanır.',
            'İletken ve yalıtkan madde bilgisi topraklama kablosunun neden metal olduğunu açıklar.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Cismi sınıflandır',
      prompt:
        'Üç cisimdeki yük sayıları şöyledir: K cisminde 5 artı, 5 eksi; L cisminde 7 artı, 4 eksi; M cisminde 3 artı, 6 eksi. Her cismi sınıflandır.',
      steps: [
        { title: '1. K’yi karşılaştır', body: '5 artı = 5 eksi. Sayılar eşit → **nötr.** İçinde yük vardır ama dengededir.' },
        { title: '2. L’yi karşılaştır', body: '7 artı > 4 eksi. Artılar fazla → **pozitif yüklü.** Elektron eksikliği var.' },
        { title: '3. M’yi karşılaştır', body: '3 artı < 6 eksi. Eksiler fazla → **negatif yüklü.** Elektron fazlalığı var.' },
        { title: '4. Ortak noktayı yaz', body: 'Üç cisimde de hem artı hem eksi yük bulunuyor.' },
        { title: '5. Sonucu yaz', body: 'K nötr, L pozitif yüklü, M negatif yüklü.' },
      ],
      answer: 'K nötr, L pozitif yüklü, M negatif yüklüdür.',
      takeaway: 'Sınıflandırma yükün varlığına değil, sayıların karşılaştırılmasına dayanır.',
    },
    {
      title: 'Seviye 2 — Topraklamada elektronun yönü',
      prompt:
        'Pozitif yüklü bir metal küre iletken bir telle toprağa bağlanıyor. Elektronlar hangi yöne hareket eder? Küre sonunda hangi yük durumunda olur?',
      steps: [
        { title: '1. Kürenin durumunu yaz', body: 'Küre pozitif yüklü; yani elektron eksikliği var.' },
        { title: '2. Hareket edeni hatırla', body: 'Topraklamada hareket eden yük elektrondur; protonlar yer değiştirmez.' },
        { title: '3. Yönü belirle', body: 'Kürenin eksik elektronları topraktan gelir: elektronlar **topraktan küreye** hareket eder.' },
        { title: '4. Sonucu belirle', body: 'Eksik elektronlar tamamlanınca pozitif ve negatif yükler eşitlenir; küre **nötr** olur.' },
        { title: '5. Yanılgıyı ele', body: '“Protonlar toprağa gider” diyen açıklama yanlıştır.' },
      ],
      answer: 'Elektronlar topraktan küreye hareket eder; küre nötr hâle gelir.',
      takeaway: 'Negatif cisimde elektronlar toprağa gider, pozitif cisme topraktan elektron gelir.',
    },
    {
      title: 'Seviye 3 — Güvenlik durumunu değerlendir',
      prompt:
        'Bir ailenin çamaşır makinesinin fişindeki topraklama ucu kırılmış; makine topraksız bir uzatma kablosuyla çalıştırılıyor. Bu durumun neden tehlikeli olduğunu topraklama bilgisiyle açıkla ve ne yapılması gerektiğini yaz.',
      steps: [
        { title: '1. Topraklamanın görevini yaz', body: 'Topraklama, arıza sonucu cihazın metal gövdesine kaçan elektriği güvenli bir yoldan toprağa iletir.' },
        { title: '2. Topraklama olmadığında ne olur?', body: 'Gövdeye elektrik kaçarsa bu yükün gidebileceği güvenli bir yol yoktur.' },
        { title: '3. Riski belirt', body: 'Gövdeye dokunan kişi akımın toprağa ulaştığı yol olur ve elektrik çarpması yaşanabilir. Çamaşır makinesi su ile çalıştığı için risk daha da artar.' },
        { title: '4. Mal güvenliğini ekle', body: 'Kaçak akım cihaza ve tesisata da zarar verebilir; yangın riski doğabilir.' },
        { title: '5. Çözümü yaz', body: 'Kırık fiş yetkili bir kişiye değiştirilmeli, cihaz topraklı bir prize doğrudan takılmalı, topraksız uzatma kablosu kullanılmamalıdır.' },
      ],
      answer:
        'Topraklama olmadığında gövdeye kaçan elektrik kişinin vücudu üzerinden toprağa ulaşabilir ve çarpılma yaşanabilir. Fiş yetkili kişiye değiştirilmeli, cihaz topraklı prize takılmalıdır.',
      takeaway: 'Topraklama normalde hiçbir şey yapmaz gibi görünür; değerini arıza anında gösterir.',
    },
  ],

  dailyLife: {
    title: 'Topraklama hayatın neresinde?',
    body: 'Topraklama çoğu zaman görünmez; ama evde, sokakta ve iş yerlerinde sürekli seni korur.',
    links: [
      'Metal gövdeli ev aletleri topraklı prize takılır.',
      'Yüksek binaların ve minarelerin tepesindeki paratonerler yıldırıma karşı koruma sağlar.',
      'Akaryakıt dolumu sırasında biriken yükün boşaltılması yangın riskini azaltır.',
      'Elektronik parçalarla çalışanlar biriken yükün cihazlara zarar vermemesi için önlem alır.',
      'Yıldırımlı havada ağaç altına sığınmamak ve sudan çıkmak hayat kurtarır.',
    ],
  },

  questionClue: {
    concept: 'Yük durumu ve topraklama sorusu',
    statement:
      'Soruda içinde artı–eksi işaretleri olan cisimler, toprağa bağlanan bir cisim, elektroskop ya da bir güvenlik durumu varsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Cisimlerin içinde artı ve eksi işaretlerinin sayısıyla verilmesi',
      '“Nötr” sözcüğünün geçmesi',
      'Bir cismin iletken bir telle toprağa bağlanması',
      'Paratoner, topraklı priz, yıldırım gibi örnekler',
      'Elektroskoptan söz edilmesi',
    ],
    reasoning:
      'Bu işaretler üç işlem ister: artı ve eksi sayılarını karşılaştırmak, topraklamada elektronun yönünü belirlemek ve topraklamanın güvenlik işlevini açıklamak.',
    boundary:
      'Bu ipuçlarını “nötr = yüksüz” ya da “pozitif cisimde protonlar toprağa gider” kısayollarına çevirme. Elektroskop sorularında ise çalışma prensibi bu düzeyde sorulmaz; yalnız ne işe yaradığı bilinir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.7.2.1 ve F.8.7.2.2 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'İçindeki yük sayıları verilen cisimlerin sınıflandırılması',
      'Nötr cismin yüksüz olmadığına dair bir yargının değerlendirilmesi',
      'Topraklamada elektronların hareket yönünün sorulması',
      'Topraklamanın günlük hayattaki uygulamalarının eşleştirilmesi',
      'Yıldırımdan korunma ile ilgili doğru davranışın seçilmesi',
      'Elektroskobun ne işe yaradığının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir öğrenci “Nötr cisim, içinde hiç yük olmayan cisimdir.” diyor. Bu ifadeyi düzelt.',
      hint: 'Atomun yapısını hatırla.',
      answer:
        'Doğru değildir. Her madde atomlardan oluşur ve her atomda pozitif yüklü protonlar ile negatif yüklü elektronlar vardır. **Nötr cisimde** pozitif ve negatif yük sayıları **eşittir**; bu yüzden birbirini dengeler. Yani nötr cisim yüksüz değil, yükleri dengede olan cisimdir. Program bu noktanın özellikle vurgulanmasını ister.',
    },
    {
      prompt:
        'Negatif yüklü bir cisim topraklandığında ne olur? Elektronlar hangi yöne hareket eder?',
      hint: 'Fazla olan ne?',
      answer:
        'Negatif yüklü cisimde elektron fazlalığı vardır. Cisim iletken bir yolla toprağa bağlandığında fazla elektronlar **cisimden toprağa** akar. Pozitif ve negatif yük sayıları eşitlenince cisim **nötr** olur.',
    },
    {
      prompt:
        'Paratonerin kablosu neden metalden yapılır ve neden toprağa kadar uzanır?',
      hint: 'Topraklama için nasıl bir yol gerekir?',
      answer:
        'Topraklama için **iletken** bir yol gerekir; yükler yalıtkan malzemeden geçemez. Metal iyi bir iletken olduğu için yıldırımın büyük yükü bu kablo üzerinden hızla ilerleyebilir. Kablo toprağa kadar uzanır; çünkü amaç yükü binaya zarar vermeden **toprağa** aktarmaktır. Böylece bina ve içindekiler korunur.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey sınıflandırma ve güvenlik',
    body:
      'Kazanımlar cisimleri yük bakımından “sınıflandırır” ve topraklamayı “açıklar” diyor. Programın açıklaması nötr cismin yüksüz olmadığının vurgulanmasını, elektroskobun çalışma prensibine girilmemesini ve topraklamanın can ve mal güvenliği açısından öneminin vurgulanmasını ister. Bu yüzden senden artı ve eksi sayılarını karşılaştırman, topraklamada elektronun yönünü belirlemen ve güvenlik uygulamalarını açıklaman beklenir.',
    measures: [
      'Cisimleri pozitif, negatif ve nötr olarak sınıflandırabilme',
      'Nötr cismin yüksüz olmadığını açıklayabilme',
      'Elektroskobun ne işe yaradığını bilme',
      'Topraklamada elektron hareketinin yönünü belirleyebilme',
      'Topraklamanın günlük hayattaki uygulamalarını örnekleyebilme',
      'Yıldırımdan korunma ve elektrik güvenliği kurallarını açıklayabilme',
    ],
  },

  simulationTable: {
    title: 'Dört cismin yük kaydı',
    columns: ['Cisim', 'Artı yük sayısı', 'Eksi yük sayısı'],
    rows: [
      ['K', '8', '8'],
      ['L', '9', '5'],
      ['M', '4', '7'],
      ['N', '6', '6'],
    ],
    caption: 'Tabloda her cismin içindeki artı ve eksi yük sayıları verilmiştir (sayılar temsilîdir).',
  },

  simulation: {
    title: 'Mini uygulama — özgün yük kaydı',
    passage: `Bir öğrenci dört cismin içindeki artı ve eksi yük sayılarını yukarıdaki tabloya kaydediyor.

Öğrenci, bu cisimleri sınıflandırmak ve topraklama hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi doğrudur?',
    options: [
      {
        text: 'K ve N nötrdür; M topraklanırsa elektronlar M’den toprağa gider',
        explanation:
          'Doğru cevap. K ve N’de artı ve eksi sayıları eşittir; ikisi de nötrdür. M’de eksiler fazladır; M negatif yüklüdür ve topraklandığında fazla elektronlar M’den toprağa akar.',
      },
      {
        text: 'K ve N yüksüzdür; çünkü nötrdürler',
        explanation:
          'K’de 8, N’de 6 artı ve eksi yük vardır. Nötr cisimler yüksüz değildir; yükleri dengededir. Program bu noktanın vurgulanmasını ister.',
      },
      {
        text: 'L topraklanırsa protonlar L’den toprağa gider',
        explanation:
          'L pozitif yüklüdür; ama topraklamada protonlar hareket etmez. L topraklanırsa topraktan L’ye elektron gelir.',
      },
      {
        text: 'M pozitif yüklüdür; çünkü içinde artı yük vardır',
        explanation:
          'Bir cismin içinde artı yük bulunması onu pozitif yapmaz; her cisimde artı yük vardır. M’de eksiler (7) artılardan (4) fazladır; M negatif yüklüdür.',
      },
      {
        text: 'L ile M birbirini iter',
        explanation:
          'L pozitif, M negatif yüklüdür; zıt cins yükler birbirini çeker, itmez.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru her cismi sınıflandırıp topraklama ve itme–çekme bilgisiyle birleştirmeyi istiyor. Yöntem: önce her satırda artı ve eksi sayılarını karşılaştır, sonra topraklamada elektronun yönünü belirle.',
    critical_point:
      'Kritik nokta ikinci seçenektir. “Nötr” sözcüğünü “yüksüz” olarak okuyan öğrenci bu seçeneği doğru sanır; oysa tabloda K ve N’nin içinde çok sayıda yük olduğu açıkça görülüyor.',
    takeaway: 'Nötr cisimde yükler vardır ama dengededir; topraklamada her zaman elektron hareket eder.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Nötr cisimle ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'İçinde hiç elektrik yükü yoktur',
        'Pozitif ve negatif yük sayıları eşittir',
        'Yalnız pozitif yük taşır',
        'Yalnız negatif yük taşır',
      ],
      answer_index: 1,
      explanation:
        'Nötr cisimde çok sayıda pozitif ve negatif yük vardır; ama sayıları eşit olduğu için birbirini dengeler. Nötr cisim yüksüz değildir; program bu noktanın özellikle vurgulanmasını ister. Yalnız bir tür yük taşıyan cisim yoktur; her cisimde iki tür yük de bulunur.',
    },
    {
      purpose: 'apply',
      question:
        'Yıldırımlı bir havada açık arazide bulunan biri için aşağıdakilerden hangisi doğru bir davranıştır?',
      options: [
        'Yalnız başına duran bir ağacın altına sığınmak',
        'Arazinin en yüksek noktasına çıkmak',
        'Metal bir direğe yaslanmak',
        'Çömelerek alçalmak ve mümkünse kapalı bir araca girmek',
      ],
      answer_index: 3,
      explanation:
        'Yıldırım genellikle bulunduğu yerdeki en yüksek noktaya düşme eğilimindedir. Bu yüzden alçalmak ve kapalı bir aracın ya da paratonerli bir binanın içine girmek doğru davranıştır. Yalnız başına duran ağaçlar, yüksek noktalar ve metal direkler yıldırımın düşme olasılığını artırır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Pozitif yüklü bir cisim topraklanınca fazla protonlar toprağa akar.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Topraklamada protonların değil elektronların hareket ettiğini gözden kaçırmak',
        'Topraklamanın iletken yol gerektirdiğini bilmemek',
        'Nötr cismi yüksüz sanmak',
        'Paratonerin görevini bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Protonlar çekirdekte bağlıdır ve yer değiştirmez. Pozitif yüklü cisim topraklandığında topraktan cisme elektron gelir ve cisim nötrleşir. Elektriklenmede ve topraklamada hareket eden yük her zaman elektrondur.',
    },
  ],

  summary: [
    'Pozitif yüklü cisimde pozitif yükler, negatif yüklü cisimde negatif yükler fazladır.',
    'Nötr cisimde pozitif ve negatif yük sayıları eşittir; nötr cisim yüksüz değildir.',
    'Her cisimde hem pozitif hem negatif yük vardır; durumları ayıran şey sayıların karşılaştırılmasıdır.',
    'Elektroskop, bir cismin yüklü olup olmadığını anlamak için kullanılan araçtır.',
    'Elektroskobun çalışma prensibi bu düzeyde istenmez.',
    'Topraklama, yüklü bir cismin iletken bir yolla toprağa bağlanarak nötrleşmesidir.',
    'Negatif cisim topraklanınca elektronlar cisimden toprağa gider.',
    'Pozitif cisim topraklanınca topraktan cisme elektron gelir.',
    'Topraklama için iletken bir yol gerekir.',
    'Topraklı prizler, paratonerler ve akaryakıt topraklaması can ve mal güvenliğini korur.',
    'Yıldırımlı havada ağaç altına sığınılmaz, sudan çıkılır, alçalınır ve kapalı bir yere girilir.',
  ],

  next: [
    'Elektrik Enerjisinin Dönüşümü ve Güç Santralleri (F.8.7.3.1–F.8.7.3.6)',
    'Elektriklenme: Elektronun Yolculuğu (tekrar için)',
    'İletken ve yalıtkan maddeler (6. sınıf — tekrar için)',
  ],
})

export default lesson
