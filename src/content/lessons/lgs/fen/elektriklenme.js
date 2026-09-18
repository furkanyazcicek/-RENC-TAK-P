import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.7 Elektrik Yükleri ve Elektrik Enerjisi · 1. ders
 * Kazanım : F.8.7.1.1 · F.8.7.1.2 · F.8.7.1.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   Bu üç kazanımın açıklaması yoktur. Konu / Kavramlar (F.8.7.1):
 *   "Elektrik yükleri, elektrik yükleri arasındaki itme ve çekme
 *   kuvvetleri, elektriklenme çeşitleri".
 *
 * KAPSAM KARARI
 * Coulomb yasası, yük birimi hesabı ve iletken kürelerde yük paylaşımı
 * hesabı 8. sınıf kazanımında yer almadığı için yazılmadı. Ders,
 * elektriklenmeyi ELEKTRON AKTARIMI fikri üzerine kurar ve üç çeşidi
 * "yük nereye gidiyor?" sorusuyla ayırır. Elektriklenme çeşitleri için
 * yeni bir şema yazıldı (lgs-fen-elektriklenme-cesitleri).
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-elektriklenme',
  topic: 'Elektrik Yükleri ve Elektrik Enerjisi',
  order: 1,
  title: 'Elektriklenme: Elektronun Yolculuğu',
  subtitle:
    'Kazağını çıkarırken duyduğun çıtırtı ile gökyüzünü yaran şimşek aynı olayın iki ölçeğidir: elektronlar bir yerden bir yere geçer.',
  minutes: 44,
  kazanimlar: ['F.8.7.1.1', 'F.8.7.1.2', 'F.8.7.1.3'],
  kapsamNotu:
    'Yük hesabı ve kuvvet bağıntısı 8. sınıf kazanımında yer almadığı için yazılmaz; elektriklenme elektron aktarımı fikriyle anlatılır.',
  prerequisites: [
    { topic: 'Atomun yapısı (7. sınıf)', why: 'Proton, elektron ve nötronu tanımadan elektriklenme açıklanamaz.' },
    { topic: 'İletken ve yalıtkan maddeler (6. sınıf)', why: 'Yüklerin hangi maddelerde hareket edebildiğini bilmek gerekir.' },
  ],
  outcomes: [
    'Elektriklenmeyi elektron aktarımıyla açıklayabileceksin.',
    'Aynı ve zıt cins yüklerin birbirine etkisini söyleyebileceksin.',
    'Sürtünme, dokunma ve etki ile elektriklenmeyi ayırt edebileceksin.',
    'Doğada ve teknolojide elektriklenme örnekleri verebileceksin.',
    'Bir elektriklenme deneyinin sonucunu yorumlayabileceksin.',
  ],

  opening: {
    title: 'Kuru bir kış günü',
    lead: 'Yün kazağını çıkarırken çıtırtılar duyuyorsun, saçların havaya kalkıyor. Sonra kapı koluna dokununca küçük bir çarpılma hissediyorsun. Ne oluyor?',
    body: `Kuru bir kış günü. Yün kazağını başından çıkarıyorsun. Çıtır çıtır sesler geliyor; karanlık bir odadaysan küçük kıvılcımlar bile görebilirsin. Saçların havaya kalkıyor, birbirinden uzaklaşıyor. Sonra kapıya yürüyüp metal kola dokunuyorsun ve parmağında küçük bir çarpılma hissediyorsun.

Bu üç olay bir tesadüf değildir. Hepsinin arkasında aynı olay vardır: **elektriklenme.**

Elektriklenme, cisimler arasında **elektron** alışverişi olmasıdır. Kazak ile saçın birbirine sürtünmesi sırasında elektronlar bir cisimden öbürüne geçer. Artık iki cisim de **yüklüdür.** Saç telleri aynı cins yükle yüklendiği için birbirini **iter** ve havaya kalkar. Vücudunda biriken yük, metal kapı koluna dokunduğunda hızla boşalır; o küçük çarpılma bu boşalmadır.

Aynı olayın dev bir örneğini gökyüzünde görürsün: **şimşek.** Bulutlarda biriken büyük miktarda yük, bulutlar arasında ya da buluttan yere doğru boşalır. Kazağının çıtırtısı ile şimşek, ölçekleri çok farklı olsa da **aynı olayın** iki görünüşüdür.

Bu derste üç soruyu cevaplayacağız:

1. **Elektrik yükü nedir, nereden gelir?**
2. **Yüklü cisimler birbirine nasıl etki eder?** (itme ve çekme)
3. **Bir cisim hangi yollarla elektriklenir?** (sürtünme, dokunma, etki)

Anahtar fikir tek cümledir ve ders boyunca her soruyu çözmek için onu kullanacağız: **katı cisimlerde hareket eden yük elektrondur.** Protonlar çekirdekte sıkıca bağlıdır ve yer değiştirmez.`,
  },

  concepts: [
    {
      term: 'Elektrik yükü',
      body: 'Maddenin yapısındaki taneciklerin sahip olduğu bir özelliktir. İki çeşit yük vardır: **pozitif (+)** ve **negatif (−).** Protonlar pozitif, elektronlar negatif yüklüdür; nötronlar yüksüzdür.',
    },
    {
      term: 'Nötr cisim',
      body: 'Pozitif ve negatif yük miktarları **eşit** olan cisimdir. Nötr cisim yüksüz değildir; içinde çok sayıda yük vardır, ama birbirini dengeler.',
    },
    {
      term: 'Elektriklenme',
      body: 'Cisimler arasında elektron alışverişi sonucunda pozitif ve negatif yük miktarlarının eşitliğinin bozulmasıdır. Elektron alan cisim **negatif**, elektron veren cisim **pozitif** yüklenir.',
    },
    {
      term: 'İtme ve çekme',
      body: '**Aynı cins** yükler birbirini **iter**; **zıt cins** yükler birbirini **çeker.** Yüklü bir cisim nötr bir cismi de çekebilir.',
    },
    {
      term: 'Sürtünme ile elektriklenme',
      body: 'Farklı cins iki madde birbirine sürtüldüğünde elektronların birinden öbürüne geçmesidir. İki cisim **eşit miktarda, zıt cins** yükle yüklenir.',
    },
    {
      term: 'Dokunma ile elektriklenme',
      body: 'Yüklü bir cismin başka bir cisme dokunması sırasında yük aktarılmasıdır. Dokunmadan sonra iki cisim **aynı cins** yükle yüklenir.',
    },
    {
      term: 'Etki ile elektriklenme',
      body: 'Yüklü bir cisim, nötr bir iletkene **dokunmadan** yaklaştırıldığında iletkendeki yüklerin ayrışmasıdır. Yakın uçta **zıt**, uzak uçta **aynı** cins yük toplanır.',
    },
  ],

  why: {
    question: 'Elektriklenmede neden yalnız elektronlar hareket eder?',
    body: `Çünkü atomun yapısında proton ile elektronun yeri çok farklıdır.

7. sınıftan hatırla: atomun merkezinde **çekirdek** vardır; çekirdekte **protonlar** (+) ve **nötronlar** (yüksüz) bulunur. Çekirdeğin çevresinde **elektronlar** (−) hareket eder.

Protonlar çekirdekte güçlü biçimde bağlıdır. Onları yerinden oynatmak için çok büyük enerji gerekir; sürtünme ya da dokunma gibi günlük olaylar bunu yapamaz. Elektronlar ise atomun dış kısmındadır ve bazı maddelerde görece kolay koparılabilir.

Bu yüzden katı cisimlerin elektriklenmesinde **yer değiştiren şey her zaman elektronlardır.**

Bu tek kural bütün elektriklenme sorularını çözer:

- Bir cisim **elektron alırsa**, negatif yükleri pozitif yüklerinden fazla olur → **negatif yüklenir.**
- Bir cisim **elektron verirse**, pozitif yükleri negatif yüklerinden fazla olur → **pozitif yüklenir.**

Dikkat: pozitif yüklenen bir cisim **proton almamıştır;** elektron vermiştir. Bu, sorularda en sık kullanılan çeldiricidir.

Bir kuralı daha ekleyelim: **yük yoktan var olmaz, vardan yok olmaz.** Sürtünme ile elektriklenmede bir cismin kaybettiği elektronları öbür cisim kazanır. Bu yüzden iki cisim **eşit miktarda** ve **zıt cins** yükle yüklenir. Bu, elektriklenmenin bir “yük üretimi” değil, bir **yük aktarımı** olduğunu gösterir.

Son olarak yüklerin birbirine etkisi: **aynı cins yükler birbirini iter, zıt cins yükler birbirini çeker.** Saç tellerinin havaya kalkması itmenin, yüklü bir tarağın kâğıt parçalarını çekmesi çekmenin günlük örnekleridir.

*Kapsam notu: yükler arasındaki kuvvetin büyüklüğünü hesaplayan bağıntı 8. sınıf kazanımında yer almaz; itme ve çekmenin yönünü bilmen yeterlidir.*`,
  },

  mechanism: {
    title: 'Sürtünme ile elektriklenme adım adım',
    lead: 'Bir plastik çubuğu yün kumaşa sürttüğünde neler oluyor? Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, sürtünme ile elektriklenmenin elektron düzeyinde nasıl gerçekleştiğini gösterir.',
    steps: [
      {
        title: '1. İki cisim de başlangıçta nötrdür',
        body: 'Plastik çubukta da yün kumaşta da pozitif ve negatif yük miktarları eşittir.',
      },
      {
        title: '2. Farklı cins maddeler sürtünür',
        body: 'Sürtünme sırasında iki yüzey çok yakın temas eder. Maddelerin elektronları tutma eğilimleri farklıdır.',
      },
      {
        title: '3. Elektronlar bir cisimden öbürüne geçer',
        body: 'Elektronları daha güçlü tutan plastik, yünden elektron alır. Protonlar yerinden oynamaz.',
      },
      {
        title: '4. Plastik negatif yüklenir',
        body: 'Elektron alan plastik çubukta negatif yükler artık pozitif yüklerden fazladır.',
      },
      {
        title: '5. Yün pozitif yüklenir',
        body: 'Elektron veren yün kumaşta pozitif yükler artık negatif yüklerden fazladır.',
      },
      {
        title: '6. Yükler eşit ve zıttır',
        body: 'Yünün kaybettiği elektronları plastik kazanmıştır. Toplam yük değişmemiş; yalnız yer değiştirmiştir.',
      },
    ],
    takeaway:
      'Zincirin kalbi 3. adımdır: yer değiştiren elektrondur. Pozitif yüklenen cisim proton almamış, elektron vermiştir.',
  },

  comparison: {
    title: 'Üç elektriklenme çeşidi',
    columns: ['Sürtünme ile', 'Dokunma ile', 'Etki ile'],
    rows: [
      { label: 'Temas var mı?', values: ['Evet, sürtünürler', 'Evet, dokunurlar', 'Hayır, yalnız yaklaştırılır'] },
      { label: 'Başlangıç', values: ['İki nötr cisim', 'Biri yüklü', 'Biri yüklü, öbürü nötr iletken'] },
      { label: 'Sonuçta yük cinsi', values: ['Zıt cins', 'Aynı cins', 'Yakın uç zıt, uzak uç aynı cins'] },
      { label: 'Elektron aktarımı', values: ['Bir cisimden öbürüne', 'Yüklü cisimden öbürüne ya da tersi', 'Cisimler arasında yok; iletkenin içinde yer değiştirir'] },
      { label: 'Günlük örnek', values: ['Tarağın saça sürtülmesi', 'Yüklü bir cisimle metal küreye dokunmak', 'Yüklü tarağın kâğıt parçalarını çekmesi'] },
    ],
    insight:
      'Üç çeşidi ayırmanın en hızlı yolu “sonuçta yük cinsi” satırıdır: sürtünme zıt, dokunma aynı cins yük verir; etki ise yükleri yalnız ayrıştırır.',
  },

  traps: [
    {
      title: 'Pozitif yüklenmeyi proton almak sanmak',
      wrong: 'Yün kumaş pozitif yüklendi; çünkü plastikten proton aldı.',
      right: 'Protonlar çekirdekte bağlıdır ve yer değiştirmez. Yün **elektron verdiği** için pozitif yüklenmiştir.',
      body: 'Katı cisimlerin elektriklenmesinde hareket eden yük her zaman elektrondur. “Proton geçti” diyen seçenek bu yüzden yanlıştır.',
    },
    {
      title: 'Nötr cismi yüksüz sanmak',
      wrong: 'Nötr bir cisimde hiç elektrik yükü yoktur.',
      right: 'Nötr cisimde çok sayıda pozitif ve negatif yük vardır; ama miktarları **eşit** olduğu için birbirini dengeler.',
      body: 'Bu ayrım bir sonraki derste program tarafından açıkça vurgulanır. Etki ile elektriklenmenin mümkün olması da nötr cisimde yük bulunmasından kaynaklanır.',
    },
    {
      title: 'Sürtünmede iki cismin aynı cins yüklendiğini sanmak',
      wrong: 'Tarak saça sürtülünce ikisi de negatif yüklenir.',
      right: 'Sürtünme ile elektriklenmede biri elektron verir, öbürü alır. Cisimler **zıt cins** ve **eşit miktarda** yüklenir.',
      body: 'Aynı cins yükle yüklenme dokunma ile elektriklenmenin özelliğidir. İki çeşidi bu farkla ayırabilirsin.',
    },
    {
      title: 'Yüklü cismin yalnız zıt yüklü cismi çektiğini sanmak',
      wrong: 'Yüklü bir tarak nötr kâğıt parçalarını çekemez; çünkü kâğıt yüksüzdür.',
      right: 'Yüklü bir cisim nötr bir cismi de **çeker.** Yaklaştırıldığında nötr cismin yakın tarafında zıt cins yükler toplanır ve çekim oluşur.',
      body: 'Bu yüzden “çekme” gözlemi tek başına öbür cismin zıt yüklü olduğunu kanıtlamaz; öbür cisim nötr de olabilir. Kesin kanıt **itmedir**: itme yalnız aynı cins yükler arasında olur.',
    },
  ],

  variables: {
    title: 'Deneyle keşfet: hangi cisimler birbirini iter?',
    lead:
      'Kazanım elektriklenme çeşitlerinin deneylerle fark edilmesini ister. Aynı cins ve zıt cins yüklerin etkisini bir deneyle görelim.',
    question: 'İple asılı yüklü bir çubuğa farklı yüklü çubuklar yaklaştırıldığında asılı çubuk nasıl hareket eder?',
    independent: {
      label: 'Yaklaştırılan çubuğun yük cinsi',
      note: 'Ben seçiyorum: aynı cins / zıt cins / nötr',
    },
    setup: {
      label: 'İple asılmış, yünle sürtülmüş plastik çubuk',
      note: 'Serbestçe dönebilecek biçimde asılır',
    },
    dependent: {
      label: 'Asılı çubuğun hareketi',
      note: 'Gözlediğim: yaklaşır mı, uzaklaşır mı?',
    },
    controlled: [
      'Çubukların sürtülme süresi ve biçimi',
      'Yaklaştırma uzaklığı',
      'Ortamın nemi (kuru ortam)',
      'Aynı asma düzeneği',
    ],
    caption:
      'Nem bilerek sabit ve düşük tutulur: nemli havada yükler kolayca boşalır ve sonuç belirsizleşir.',
  },

  experiment: {
    title: 'İtme–çekme deneyi',
    intro: 'Bu deney sınıfta basit malzemelerle yapılabilir. Kuru bir günde daha net sonuç verir.',
    steps: [
      { title: '1. Asılı çubuğu yükle', body: 'Plastik bir çubuk yün kumaşa sürtülerek yüklenir ve ortasından bir iple serbestçe dönebilecek biçimde asılır.' },
      { title: '2. Aynı cins yükü yaklaştır', body: 'Aynı biçimde yünle sürtülmüş ikinci bir plastik çubuk asılı çubuğun ucuna yaklaştırılır. Asılı çubuğun **uzaklaştığı** gözlenir.' },
      { title: '3. Zıt cins yükü yaklaştır', body: 'İpek kumaşa sürtülmüş bir cam çubuk yaklaştırılır. Asılı çubuğun **yaklaştığı** gözlenir.' },
      { title: '4. Nötr cismi yaklaştır', body: 'Sürtülmemiş bir cisim yaklaştırılır. Asılı yüklü çubuğun yine **yaklaştığı** gözlenir.' },
      { title: '5. Sonuçları karşılaştır', body: 'İtme yalnız aynı cins yükler arasında görüldü; çekme hem zıt yüklü hem nötr cisimde görüldü.' },
      { title: '6. Çıkarım yap', body: 'Bir cismin yük cinsini belirlemek için güvenilir kanıt **itmedir.** Çekme, öbür cismin zıt yüklü ya da nötr olduğunu gösterebilir.' },
    ],
    takeaway: 'Son adım önemli bir bilimsel akıl yürütmedir: iki farklı açıklaması olan bir gözlem, tek başına kesin bir sonuç vermez.',
  },

  dataTable: {
    title: 'Gözlem kaydı: asılı çubuğa yaklaştırılan cisimler',
    columns: ['Yaklaştırılan cisim', 'Yükü', 'Asılı çubuğun hareketi', 'Çıkarım'],
    rows: [
      ['Yünle sürtülmüş plastik çubuk', 'Negatif', 'Uzaklaştı', 'Aynı cins yükler iter'],
      ['İpekle sürtülmüş cam çubuk', 'Pozitif', 'Yaklaştı', 'Zıt cins yükler çeker'],
      ['Sürtülmemiş tahta çubuk', 'Nötr', 'Yaklaştı', 'Yüklü cisim nötr cismi de çeker'],
    ],
    caption:
      'İkinci ve üçüncü satırda aynı hareket görülüyor; bu yüzden yalnız “yaklaştı” gözlemiyle bir cismin yük cinsi belirlenemez. Kesin kanıt ilk satırdaki itmedir.',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-elektrik-cesit',
      title: 'Üç elektriklenme çeşidini tanımak',
      lead: 'Hepsinde aynı soruyu soracağız: elektronlar nereye gitti?',
      blocks: [
        {
          id: 'lgs-fen-elektrik-cesit-sema',
          type: 'figure',
          kind: 'lgs-fen-elektriklenme-cesitleri',
          title: 'Sürtünme, dokunma ve etki ile elektriklenme',
          width: 'full',
          complexity: 'medium',
          caption:
            'Sürtünmede cisimler zıt, dokunmada aynı cins yükle yüklenir; etkide ise yükler iletkenin içinde ayrışır. Her panelde yük işaretlerinin sayısı toplam yükün korunduğunu gösterir.',
          purpose: 'Üç elektriklenme çeşidinde yükün nereye gittiğini karşılaştırmak',
          alt:
            'Üç panel: plastik çubuğun yünle sürtülmesiyle çubuğun eksi, yünün artı yüklenmesi; eksi yüklü kürenin nötr küreye dokunmasıyla iki kürenin de eksi yüklenmesi; eksi yüklü çubuğun nötr küreye yaklaştırılmasıyla kürenin yakın ucunun artı, uzak ucunun eksi yüklenmesi.',
          data: {},
          focus: [
            { title: 'Sürtünme ile', body: 'Elektronlar yünden plastiğe geçer. Plastik eksi, yün artı yüklenir; yükler eşit ve zıttır.' },
            { title: 'Dokunma ile', body: 'Eksi yüklü küreden nötr küreye elektronların bir kısmı geçer. İki küre de eksi yüklenir.' },
            { title: 'Etki ile', body: 'Dokunma yoktur. Nötr kürenin elektronları iterek uzak uca gider; yakın uç artı, uzak uç eksi yüklenir. Küre bir bütün olarak nötr kalır.' },
          ],
        },
        {
          id: 'lgs-fen-elektrik-cesit-anlatim',
          type: 'prose',
          body: `**Sürtünme ile elektriklenme.** Farklı cins iki madde birbirine sürtüldüğünde elektronlar birinden öbürüne geçer. Elektron alan **negatif**, elektron veren **pozitif** yüklenir. İki cisim **eşit miktarda, zıt cins** yükle yüklenir.

Hangi maddenin elektron alacağı maddelerin cinsine bağlıdır. Sık kullanılan iki örnek: **plastik (ya da ebonit) çubuk yün kumaşa sürtüldüğünde çubuk negatif yüklenir; cam çubuk ipek kumaşa sürtüldüğünde çubuk pozitif yüklenir.**

Aynı cins iki madde birbirine sürtülürse (örneğin iki özdeş plastik çubuk) elektron alışverişi olmaz ya da çok az olur; çünkü ikisinin elektronu tutma eğilimi aynıdır.

**Dokunma ile elektriklenme.** Yüklü bir cisim başka bir cisme dokunduğunda yükün bir kısmı aktarılır. Örneğin negatif yüklü bir iletken küre nötr bir iletken küreye dokundurulursa, fazla elektronların bir kısmı nötr küreye geçer. Ayrıldıklarında **iki küre de negatif** yüklenmiştir.

Pozitif yüklü bir cisim nötr bir cisme dokunduğunda ne olur? Pozitif cisimde elektron eksikliği vardır; nötr cisimden **elektron çeker.** Elektron veren nötr cisim de pozitif yüklenir. Sonuçta yine **iki cisim de aynı cins (pozitif)** yüklüdür. Yine hareket eden elektrondur.

**Etki ile elektriklenme.** Yüklü bir cisim nötr bir iletkene **dokunmadan** yaklaştırılır. Örneğin negatif yüklü bir çubuk nötr bir metal küreye yaklaştırıldığında, küredeki elektronlar itilir ve kürenin **uzak ucuna** toplanır. Yakın uçta elektron eksikliği oluşur ve bu uç **pozitif** olur.

Dikkat: küre bir bütün olarak hâlâ **nötrdür;** yükler yalnız yer değiştirmiştir. Çubuk uzaklaştırılırsa yükler yeniden dağılır ve küre eski hâline döner. (Kürenin kalıcı olarak yüklenmesi için topraklama gerekir; bunu bir sonraki derste göreceğiz.)

Etki ile elektriklenme, yüklü bir cismin nötr bir cismi neden çektiğini de açıklar: nötr cismin **yakın tarafında zıt cins** yükler toplanır ve bunlar yüklü cisme daha yakın olduğu için çekim itmeden baskın gelir.`,
        },
        {
          id: 'lgs-fen-elektrik-cesit-karar',
          type: 'decision_tree',
          title: 'Hangi elektriklenme çeşidi?',
          intro: 'Soruları sırayla uygula.',
          checks: [
            {
              question: 'Cisimler birbirine değiyor mu?',
              yes: 'Değiyorsa sürtünme ya da dokunmadır; ikinci soruya geç.',
              no: 'Değmiyorsa ve yüklü cisim yalnız yaklaştırılıyorsa etki ile elektriklenmedir.',
            },
            {
              question: 'Başlangıçta iki cisim de nötr mü ve birbirine sürtülüyor mu?',
              yes: 'Evetse sürtünme ile elektriklenmedir; cisimler zıt cins yüklenir.',
              no: 'Biri önceden yüklüyse ve dokundurulursa dokunma ile elektriklenmedir; cisimler aynı cins yüklenir.',
            },
            {
              question: 'Sonuçta hangi cisim hangi yükü aldı?',
              yes: 'Elektron alan negatif, elektron veren pozitif yüklenir.',
              no: 'Protonların yer değiştirdiğini söyleyen açıklamaları ele.',
            },
          ],
          takeaway:
            'Tek cümlelik kural: **sürtünme zıt, dokunma aynı cins yük verir; etki yükleri ayrıştırır.**',
        },
      ],
    },

    {
      id: 'lgs-fen-elektrik-doga',
      title: 'Doğada ve teknolojide elektriklenme',
      lead: 'Kazanım F.8.7.1.1 elektriklenmenin doğa olayları ve teknoloji örnekleriyle açıklanmasını ister.',
      blocks: [
        {
          id: 'lgs-fen-elektrik-doga-anlatim',
          type: 'prose',
          body: `**Doğada elektriklenme.**

**Şimşek ve yıldırım.** Fırtına bulutlarının içinde hava akımlarıyla sürüklenen buz kristalleri ve su damlacıkları birbirine sürtünür ve bulutlar büyük miktarda yükle yüklenir. Bulutun farklı bölgelerinde zıt cins yükler birikir. Yük farkı çok büyüdüğünde, yükler hava içinden hızla boşalır:

- Boşalma **iki bulut arasında** ya da bulutun içinde olursa buna **şimşek** denir.
- Boşalma **buluttan yere** olursa buna **yıldırım** denir.

Yıldırım çok büyük bir enerji taşır ve tehlikelidir. Korunma yollarını bir sonraki derste, topraklama konusunda göreceğiz.

**Günlük hayatta küçük boşalmalar.** Kazak çıkarırken duyulan çıtırtılar, halıda yürüdükten sonra kapı koluna dokununca hissedilen çarpılma, tarandıktan sonra saçların kabarması, kurutma makinesinden çıkan çamaşırların birbirine yapışması… Hepsi sürtünme ile elektriklenmenin sonuçlarıdır. Bu olaylar **kuru havada** daha sık görülür; nemli havada yükler havadaki su yoluyla kolayca boşalır.

**Teknolojide elektriklenme.**

Elektriklenme yalnız bir rahatsızlık kaynağı değildir; pek çok teknoloji ondan yararlanır.

- **Fotokopi makineleri ve lazer yazıcılar:** yüklenen bir yüzey, zıt yüklü toz mürekkebi yalnız yazı ve resim olan yerlere çeker.
- **Elektrostatik boyama:** otomobil gövdeleri gibi metal yüzeyler boyanırken boya parçacıkları yüklenir ve zıt yüklü yüzeye çekilir; boya düzgün dağılır ve daha az israf olur.
- **Baca filtreleri:** fabrika bacalarındaki bazı filtrelerde duman içindeki toz parçacıkları yüklenir ve zıt yüklü levhalarda tutulur; havaya daha az kirletici karışır.
- **Toz tutucu bezler:** bazı temizlik bezleri sürtünmeyle yüklenerek tozu çeker.

Bu örneklerin ortak mantığı aynıdır: **zıt cins yükler birbirini çeker.** Teknoloji bu çekimi istenen yerde kullanır.`,
        },
        {
          id: 'lgs-fen-elektrik-doga-tablo',
          type: 'table',
          interactive: true,
          title: 'Elektriklenme örnekleri',
          columns: ['Örnek', 'Alan', 'Arkasındaki olay'],
          rows: [
            ['Şimşek ve yıldırım', 'Doğa', 'Bulutlarda biriken yükün boşalması'],
            ['Kapı kolunda çarpılma', 'Günlük hayat', 'Vücutta biriken yükün metal üzerinden boşalması'],
            ['Saçların kabarması', 'Günlük hayat', 'Saç tellerinin aynı cins yüklenip birbirini itmesi'],
            ['Fotokopi ve lazer yazıcı', 'Teknoloji', 'Zıt yüklerin çekimiyle mürekkebin yüzeye tutunması'],
            ['Elektrostatik boyama', 'Teknoloji', 'Yüklü boyanın zıt yüklü yüzeye çekilmesi'],
            ['Baca filtresi', 'Teknoloji', 'Yüklü toz parçacıklarının levhalarda tutulması'],
          ],
          caption: 'Doğadaki örnekler çoğunlukla bir boşalmayla, teknolojideki örnekler çoğunlukla bir çekimle ilgilidir.',
        },
        {
          id: 'lgs-fen-elektrik-doga-baglanti',
          type: 'connection',
          title: 'Bu ders nerelere bağlanıyor?',
          body: 'Elektriklenme, ünitenin sonraki derslerinin temelidir.',
          links: [
            'Elektroskop dersinde bir cismin yüklü olup olmadığını anlamanın aracını göreceksin.',
            'Topraklama dersinde yıldırımdan korunmanın ve yükü boşaltmanın yollarını öğreneceksin.',
            'Elektrik enerjisi dersinde yüklerin hareketinin enerjiye nasıl dönüştüğünü göreceksin.',
            'Asit yağmurları ve iklim derslerindeki baca filtreleri elektriklenmenin çevre uygulamasıdır.',
            '7. sınıftaki atom modeli bu dersin temelini oluşturur.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Yük cinsini belirle',
      prompt:
        'Nötr bir cam çubuk nötr bir ipek kumaşa sürtülüyor ve cam çubuk pozitif yükleniyor. İpek kumaş hangi yükle yüklenir? Elektronlar hangi yöne gitmiştir?',
      steps: [
        { title: '1. Hareket edeni hatırla', body: 'Katı cisimlerde yer değiştiren yük elektrondur.' },
        { title: '2. Cam çubuğu yorumla', body: 'Cam pozitif yüklendiğine göre **elektron vermiştir.**' },
        { title: '3. Elektronların gittiği yeri bul', body: 'Camın verdiği elektronları **ipek** almıştır.' },
        { title: '4. İpeğin yükünü yaz', body: 'Elektron alan ipek **negatif** yüklenir.' },
        { title: '5. Miktarı karşılaştır', body: 'Camın kaybettiği elektron sayısı ipeğin kazandığına eşittir; yükler eşit ve zıttır.' },
      ],
      answer: 'İpek negatif yüklenir; elektronlar camdan ipeğe geçmiştir.',
      takeaway: 'Pozitif yüklenen cisim elektron vermiştir, proton almamıştır.',
    },
    {
      title: 'Seviye 2 — Çeşidi tanı',
      prompt:
        'Negatif yüklü bir metal küre, özdeş ve nötr bir metal küreye dokunduruluyor, sonra ayrılıyor. Bu hangi elektriklenme çeşididir? Sonunda iki kürenin yükleri ne olur?',
      steps: [
        { title: '1. Temas var mı?', body: 'Küreler birbirine dokundurulmuş; temas var.' },
        { title: '2. Başlangıcı incele', body: 'Kürelerden biri önceden yüklü, öbürü nötr. Sürtünme yok.' },
        { title: '3. Çeşidi belirle', body: 'Yüklü bir cismin başka bir cisme dokunmasıyla yük aktarıldığı için bu **dokunma ile elektriklenmedir.**' },
        { title: '4. Elektronların yolunu izle', body: 'Negatif kürenin fazla elektronlarının bir kısmı nötr küreye geçer.' },
        { title: '5. Sonucu yaz', body: 'Ayrıldıklarında **iki küre de negatif** yüklüdür; dokunma ile elektriklenmede cisimler aynı cins yüklenir.' },
      ],
      answer: 'Dokunma ile elektriklenmedir; iki küre de negatif yüklenir.',
      takeaway: 'Dokunma aynı cins, sürtünme zıt cins yük verir.',
    },
    {
      title: 'Seviye 3 — Gözlemden çıkarım',
      prompt:
        'Bir öğrenci yüklü bir çubuğu küçük bir kâğıt parçasına yaklaştırıyor ve kâğıdın çubuğa çekildiğini görüyor. “Kâğıt kesinlikle çubukla zıt cins yüklüdür.” diyor. Bu çıkarım doğru mu?',
      steps: [
        { title: '1. Gözlemi yaz', body: 'Kâğıt yüklü çubuğa çekiliyor.' },
        { title: '2. Çekimin olası nedenlerini say', body: 'Çekim iki durumda görülür: kâğıt çubukla **zıt cins** yüklüyse ya da kâğıt **nötrse.**' },
        { title: '3. Nötr cismin neden çekildiğini açıkla', body: 'Yüklü çubuk nötr kâğıda yaklaşınca kâğıdın yakın tarafında zıt cins yükler toplanır; bunlar çubuğa daha yakın olduğu için çekim oluşur.' },
        { title: '4. Çıkarımı değerlendir', body: 'Gözlemin iki açıklaması olduğu için “kesinlikle zıt yüklüdür” demek yanlıştır.' },
        { title: '5. Kesin kanıtı söyle', body: 'Bir cismin yük cinsini kesin belirlemek için **itme** gözlenmelidir; itme yalnız aynı cins yükler arasında olur.' },
      ],
      answer:
        'Doğru değildir. Kâğıt zıt yüklü olabileceği gibi nötr de olabilir; yüklü cisim nötr cismi de çeker. Kesin kanıt itmedir.',
      takeaway: 'İki açıklaması olan bir gözlemden tek bir kesin sonuç çıkarılamaz.',
    },
  ],

  dailyLife: {
    title: 'Elektriklenme hayatın neresinde?',
    body: 'Elektriklenme evden fabrikaya, gökyüzünden yazıcıya kadar her yerdedir.',
    links: [
      'Kuru kış günlerinde kazak çıkarırken çıtırtı duyulması sürtünme ile elektriklenmedir.',
      'Halıda yürüdükten sonra kapı koluna dokununca hissedilen çarpılma yük boşalmasıdır.',
      'Plastik tarağın küçük kâğıt parçalarını çekmesi yüklü cismin nötr cismi çekmesidir.',
      'Fotokopi makineleri ve lazer yazıcılar zıt yüklerin çekiminden yararlanır.',
      'Otomobil boyamada kullanılan elektrostatik boyama boya israfını azaltır.',
      'Akaryakıt istasyonlarında araçtan inip yakıt dolum tabancasına dokunmadan önce yükün boşaltılması önerilir.',
    ],
  },

  questionClue: {
    concept: 'Elektriklenme sorusu',
    statement:
      'Soruda sürtülen, dokundurulan ya da yaklaştırılan cisimler, yük işaretleri veya itme–çekme gözlemleri varsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Çubuk, kumaş, metal küre gibi cisimlerin birbirine sürtülmesi ya da dokundurulması',
      'Cisimlerin üzerinde + ve − işaretlerinin gösterilmesi',
      'İple asılı bir cismin yaklaşması ya da uzaklaşması',
      '“Nötr”, “yüklü”, “elektron” sözcükleri',
      'Şimşek, yıldırım, fotokopi gibi doğa ve teknoloji örnekleri',
    ],
    reasoning:
      'Bu işaretler üç işlem ister: elektronun nereye gittiğini izlemek, elektriklenme çeşidini temas ve sonuç yüküne göre belirlemek, itme–çekme gözlemini doğru yorumlamak.',
    boundary:
      'Bu ipuçlarını “proton geçti” ya da “çekildiyse kesin zıt yüklüdür” kısayollarına çevirme. Hareket eden yük elektrondur ve çekme, nötr cisimde de görülür.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu üç kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Sürtünme sonrasında cisimlerin yük cinsinin belirlenmesi',
      'Elektriklenme çeşidinin bir düzenekten tanınması',
      'İtme–çekme gözlemlerinden yük cinsi çıkarımı',
      'Nötr cismin yüklü cisimle etkileşiminin yorumlanması',
      'Elektron aktarımının yönünün sorulması',
      'Doğa ve teknolojideki elektriklenme örneklerinin eşleştirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Plastik bir tarak saça sürtüldükten sonra negatif yükleniyor. Saç hangi yükle yüklenir? Saç telleri neden birbirinden uzaklaşır?',
      hint: 'Elektronlar nereye gitti? Saç telleri birbirine göre hangi yükte?',
      answer:
        'Tarak negatif yüklendiğine göre saçtan **elektron almıştır.** Elektron veren saç **pozitif** yüklenir. Bütün saç telleri aynı cins (pozitif) yükle yüklendiği için birbirini **iter** ve birbirinden uzaklaşır; saçların kabarmasının nedeni budur.',
    },
    {
      prompt:
        'Negatif yüklü bir çubuk nötr bir metal küreye dokundurulmadan yaklaştırılıyor. Kürenin yakın ve uzak uçlarında hangi yükler toplanır? Küre bir bütün olarak yüklenmiş midir?',
      hint: 'Dokunma yok; elektronlar küre içinde nereye gider?',
      answer:
        'Negatif çubuk küredeki elektronları iter; elektronlar kürenin **uzak ucuna** toplanır ve orası **negatif** olur. Yakın uçta elektron eksikliği oluşur ve orası **pozitif** olur. Ancak küreye elektron girmediği ve küreden elektron çıkmadığı için küre bir bütün olarak **hâlâ nötrdür;** yükler yalnız yer değiştirmiştir. Bu, etki ile elektriklenmedir.',
    },
    {
      prompt:
        'Kuru bir günde elektriklenme olayları nemli bir güne göre neden daha sık görülür?',
      hint: 'Nemli havada yükler nereye gidebilir?',
      answer:
        'Nemli havada havadaki su, yüklerin cisimlerden kolayca **boşalmasını** sağlar; bu yüzden cisimler uzun süre yüklü kalamaz. Kuru havada ise yükler cisimlerde birikir ve kazak çıkarırken çıtırtı, kapı kolunda çarpılma gibi olaylar daha sık görülür.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey formül değil; elektronun yolu',
    body:
      'Kazanımların fiilleri yön gösteriyor: elektriklenmeyi örneklerle “açıklar”, yükleri sınıflandırarak etkilerini “açıklar”, deneylerle elektriklenme çeşitlerini “fark eder”. Bu yüzden senden yük hesabı değil; elektronun nereye gittiğini izlemen, elektriklenme çeşidini tanıman ve itme–çekme gözlemlerini doğru yorumlaman beklenir.',
    measures: [
      'Elektriklenmeyi elektron aktarımıyla açıklayabilme',
      'Pozitif ve negatif yüklenmenin nedenini söyleyebilme',
      'Aynı ve zıt cins yüklerin etkisini bilme',
      'Sürtünme, dokunma ve etki ile elektriklenmeyi ayırt edebilme',
      'Çekme gözleminin iki olası açıklamasını fark edebilme',
      'Doğa ve teknolojiden elektriklenme örnekleri verebilme',
    ],
  },

  simulationTable: {
    title: 'Dört cisimle yapılan itme–çekme gözlemleri',
    columns: ['Yaklaştırılan iki cisim', 'Gözlem'],
    rows: [
      ['K ile L', 'Birbirini itti'],
      ['L ile M', 'Birbirini çekti'],
      ['K ile N', 'Birbirini çekti'],
      ['M ile N', 'Birbirini itti'],
    ],
    caption: 'K cisminin negatif yüklü olduğu bilinmektedir. Dört cisim de yüklü ya da nötr olabilir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün gözlem kaydı',
    passage: `Bir öğrenci dört cismi ikişer ikişer birbirine yaklaştırıyor ve gözlemlerini yukarıdaki tabloya kaydediyor. K cisminin negatif yüklü olduğu biliniyor.

Öğrenci, kayıttan yararlanarak cisimlerin yükleri hakkında çıkarım yapmak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi kesinlikle doğrudur?',
    options: [
      {
        text: 'L negatif, M ve N pozitif yüklüdür',
        explanation:
          'Doğru cevap. K ile L birbirini ittiğine göre L de negatiftir. M ile N birbirini ittiğine göre ikisi de yüklü ve aynı cinstir; nötr bir cisim itme yapamaz. L (negatif) M’yi çektiğine göre M negatif olamaz; öyleyse M pozitiftir ve M ile aynı cins olan N de pozitiftir.',
      },
      {
        text: 'N nötrdür; çünkü K ile çekişmiştir',
        explanation:
          'Çekme, N’nin nötr olabileceğini düşündürür; ama M ile N birbirini ittiği için N kesinlikle yüklüdür. İtme yalnız yüklü ve aynı cins cisimler arasında olur.',
      },
      {
        text: 'M nötrdür; çünkü L ile çekişmiştir',
        explanation:
          'M ile N birbirini ittiğine göre M yüklüdür; nötr bir cisim başka bir cismi itemez. Bu yüzden M nötr olamaz.',
      },
      {
        text: 'L pozitif yüklüdür; çünkü M ile çekişmiştir',
        explanation:
          'L, negatif yüklü K ile itişmiştir; itme yalnız aynı cins yükler arasında olduğu için L kesinlikle negatiftir.',
      },
      {
        text: 'Kayıttan hiçbir cismin yükü kesin olarak belirlenemez',
        explanation:
          'İtme gözlemleri kesin kanıttır. K ile L’nin itişmesi L’nin, M ile N’nin itişmesi de M ve N’nin yüklü ve aynı cins olduğunu gösterir; L ile M’nin çekişmesi de M’nin cinsini belirler.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru, kesin olanı istiyor. Yöntem: önce itme gözlemlerinden başla; çünkü itme yalnız aynı cins yükler arasında olur ve kesin bilgi verir. Sonra çekme gözlemlerini bu kesin bilgilerle birlikte kullan.',
    critical_point:
      'Kritik nokta çekme gözlemlerini tek başına kullanmamaktır. K ile N’nin çekişmesi N’nin nötr olduğunu düşündürebilir; ama M ile N’nin itişmesi N’nin yüklü olduğunu kesinleştirir.',
    takeaway: 'Yük cinsi sorularında her zaman itmeden başla: itme kesin, çekme şüphelidir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Katı cisimlerin elektriklenmesiyle ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Pozitif yüklenen cisim proton almıştır',
        'Elektriklenmede yer değiştiren yük elektrondur',
        'Nötr cisimde hiç elektrik yükü yoktur',
        'Sürtünme ile elektriklenmede iki cisim aynı cins yüklenir',
      ],
      answer_index: 1,
      explanation:
        'Protonlar çekirdekte bağlıdır ve yer değiştirmez; katı cisimlerin elektriklenmesinde hareket eden yük elektrondur. Pozitif yüklenen cisim elektron vermiştir. Nötr cisimde pozitif ve negatif yükler eşit miktardadır. Sürtünme ile elektriklenmede cisimler zıt cins yüklenir.',
    },
    {
      purpose: 'apply',
      question:
        'Yünle sürtülmüş iki plastik çubuk birbirine yaklaştırıldığında ne gözlenir?',
      options: [
        'Birbirini çeker',
        'Birbirini iter',
        'Hiçbir etki olmaz',
        'Önce çeker sonra iter',
      ],
      answer_index: 1,
      explanation:
        'Yünle sürtülen plastik çubuklar yünden elektron alarak negatif yüklenir. İki çubuk aynı cins (negatif) yükle yüklü olduğu için birbirini iter. Aynı cins yükler iter, zıt cins yükler çeker.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Yüklü bir tarak kâğıt parçalarını çektiğine göre kâğıtlar kesinlikle zıt cins yüklüdür.” diyor. Bu ifadenin hatası nedir?',
      options: [
        'Yüklü bir cismin nötr cisimleri de çekebileceğini gözden kaçırmak',
        'Aynı cins yüklerin birbirini ittiğini bilmemek',
        'Tarağın yük cinsini yanlış belirlemek',
        'Elektronların yer değiştirdiğini bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Yüklü bir cisim nötr bir cisme yaklaştırıldığında nötr cismin yakın tarafında zıt cins yükler toplanır ve çekim oluşur. Bu yüzden kâğıtlar nötr de olabilir. Çekme gözlemi tek başına zıt cins yükü kanıtlamaz; kesin kanıt itmedir.',
    },
  ],

  summary: [
    'Atomda proton pozitif, elektron negatif yüklüdür; nötron yüksüzdür.',
    'Nötr cisimde pozitif ve negatif yükler eşittir; nötr cisim yüksüz değildir.',
    'Katı cisimlerin elektriklenmesinde yer değiştiren yük elektrondur.',
    'Elektron alan cisim negatif, elektron veren cisim pozitif yüklenir.',
    'Aynı cins yükler birbirini iter, zıt cins yükler birbirini çeker.',
    'Yüklü bir cisim nötr bir cismi de çeker.',
    'Sürtünme ile elektriklenmede cisimler eşit miktarda ve zıt cins yüklenir.',
    'Dokunma ile elektriklenmede cisimler aynı cins yükle yüklenir.',
    'Etki ile elektriklenmede yükler iletkenin içinde ayrışır; cisim bir bütün olarak nötr kalır.',
    'Bir cismin yük cinsini kesin belirlemenin kanıtı itmedir.',
    'Şimşek bulutlar arasında, yıldırım buluttan yere olan yük boşalmasıdır.',
    'Fotokopi, elektrostatik boyama ve baca filtreleri elektriklenmeden yararlanır.',
  ],

  next: [
    'Elektroskop, Nötr Cisim ve Topraklama (F.8.7.2.1, F.8.7.2.2)',
    'Elektrik Enerjisinin Dönüşümü ve Güç Santralleri (F.8.7.3.1–F.8.7.3.6)',
    'Atomun yapısı (7. sınıf — tekrar için)',
  ],
})

export default lesson
