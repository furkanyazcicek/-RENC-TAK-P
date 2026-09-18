import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.7 Elektrik Yükleri ve Elektrik Enerjisi · 3. ders (Fen’in son dersi)
 * Kazanım : F.8.7.3.1 – F.8.7.3.6
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır) — özet
 *   F.8.7.3.1 → sigortanın önemi; robotların elektrik → hareket dönüşümüne
 *               dayandığı vurgulanır.
 *   F.8.7.3.2 → model tasarımı önce çizimle.
 *   F.8.7.3.3 → hidroelektrik, termik, rüzgâr, jeotermal, nükleer.
 *   F.8.7.3.4 → yarar–zarar ve riskler; fikir üretip savunma.
 *   F.8.7.3.5 → enerji verimliliği çalışmaları; KAÇAK ELEKTRİĞİN ZARARI.
 *   F.8.7.3.6 → elektrik faturasını azaltmaya yönelik uzun süreli çalışma.
 *
 * GÜVENLİK KARARI
 * Model tasarımı bölümünde modellerin YALNIZ pille ve öğretmen gözetiminde
 * yapılacağı, şehir elektriğine (prize) asla bağlanmayacağı açıkça yazıldı.
 *
 * DOĞRULUK KARARI
 * Santrallerin verim, kapasite ve üretim payı gibi yıldan yıla değişen
 * sayıları yazılmadı. Türkiye örnekleri yalnız yeri tartışmasız olanlardan
 * seçildi.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-elektrik-enerjisi-donusumu',
  topic: 'Elektrik Yükleri ve Elektrik Enerjisi',
  order: 3,
  title: 'Elektrik Enerjisi: Dönüşüm, Üretim ve Tasarruf',
  subtitle:
    'Prizden aldığın elektrik bir yerde bir türbinin dönmesiyle üretildi. Evinde ise ısıya, ışığa ve harekete dönüşüyor.',
  minutes: 50,
  kazanimlar: ['F.8.7.3.1', 'F.8.7.3.2', 'F.8.7.3.3', 'F.8.7.3.4', 'F.8.7.3.5', 'F.8.7.3.6'],
  kapsamNotu:
    'Santrallerin kapasite, verim ve üretim payı gibi yıldan yıla değişen sayıları bu notta verilmez. Model tasarımları yalnız pille ve öğretmen gözetiminde yapılır; şehir elektriğine bağlanmaz.',
  prerequisites: [
    { topic: 'Nötr Cisim, Elektroskop ve Topraklama', why: 'Elektrik güvenliği ve topraklama bilgisi bu dersin sigorta bölümüne bağlanır.' },
    { topic: 'Isı ve Hâl Değişimi: Sıcaklık Neden Durur?', why: 'Termik, jeotermal ve nükleer santrallerde suyun buhara dönüşmesi kullanılır.' },
    { topic: 'Madde Döngüleri ve Küresel İklim Değişikliği', why: 'Fosil yakıtlı santrallerin iklim üzerindeki etkisi orada kuruldu.' },
  ],
  outcomes: [
    'Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüştüğü araçlara örnek verebileceksin.',
    'Sigortanın ve topraklamanın güvenlik açısından önemini açıklayabileceksin.',
    'Güç santrallerinde elektriğin nasıl üretildiğini ortak zincirle açıklayabileceksin.',
    'Santrallerin avantaj ve dezavantajlarını gerekçeli olarak tartışabileceksin.',
    'Elektriği tasarruflu kullanmanın aile ve ülke ekonomisine katkısını açıklayıp bir tasarruf planı yapabileceksin.',
  ],

  opening: {
    title: 'Bir düğmeye bastığında',
    lead: 'Odanın ışığını yaktığında elektrik nereden geliyor? Birkaç yüz kilometre ötede bir türbin şu anda senin için dönüyor olabilir.',
    body: `Odanın düğmesine basıyorsun ve ışık yanıyor. Saç kurutma makinesini açıyorsun, sıcak hava çıkıyor. Vantilatörü çalıştırıyorsun, kanatlar dönüyor.

Üç cihaz, üç farklı iş. Ama üçünün de yaptığı şey aynı: **elektrik enerjisini başka bir enerji türüne dönüştürmek.** Lamba ışığa, saç kurutma makinesi ısıya, vantilatör harekete.

Peki prize gelen bu elektrik nereden geliyor? Bir **güç santralinden.** Bir barajda akan su, bir termik santralde yanan kömür, bir tepede dönen rüzgâr türbini ya da yer altından gelen sıcak su… Hepsi farklı görünür; ama hepsinde aynı şey olur: bir şey bir **türbini** döndürür ve türbine bağlı **jeneratör** hareket enerjisini elektrik enerjisine dönüştürür.

Yani senin evinde gerçekleşen dönüşümün tersi santralde gerçekleşir:

- **Santralde:** hareket enerjisi → elektrik enerjisi
- **Evde:** elektrik enerjisi → ısı, ışık, hareket enerjisi

Bu dersin altı kazanımı bu yolculuğun farklı duraklarıdır:

1. Elektriğin evde hangi enerjilere dönüştüğü ve **sigortanın** önemi
2. Bu dönüşümü kullanan bir **model tasarlamak**
3. Santrallerde elektriğin **nasıl üretildiği**
4. Santrallerin **avantaj ve dezavantajları**
5. Tasarrufun **aile ve ülke ekonomisine** önemi; **kaçak elektriğin zararı**
6. Evde elektriği **tasarruflu kullanmak**

Son iki kazanım bir davranış kazanımıdır: ders bittiğinde bilmen kadar **yapman** da beklenir.`,
  },

  concepts: [
    {
      term: 'Enerji dönüşümü',
      body: 'Bir enerji türünün başka bir enerji türüne dönüşmesidir. Enerji yoktan var olmaz, vardan yok olmaz; yalnız biçim değiştirir.',
    },
    {
      term: 'Elektrik motoru',
      body: 'Elektrik enerjisini **hareket enerjisine** dönüştüren düzenektir. Vantilatör, mikser, çamaşır makinesi ve robotların hareketli parçaları elektrik motoruyla çalışır.',
    },
    {
      term: 'Jeneratör',
      body: 'Hareket enerjisini **elektrik enerjisine** dönüştüren düzenektir. Santrallerde türbine bağlıdır; bisiklet dinamosu küçük bir jeneratördür.',
    },
    {
      term: 'Türbin',
      body: 'Akan su, buhar ya da rüzgâr gibi bir akışın etkisiyle dönen kanatlı düzenektir. Döndüğünde jeneratörü de döndürür.',
    },
    {
      term: 'Sigorta',
      body: 'Elektrik devresinden aşırı akım geçtiğinde devreyi **kendiliğinden kesen** güvenlik düzeneğidir. Kabloların aşırı ısınmasını, yangını ve cihazların zarar görmesini önler.',
    },
    {
      term: 'Enerji verimliliği',
      body: 'Aynı işi daha az enerji harcayarak yapmaktır. Örneğin aynı ışığı daha az elektrikle veren bir lamba daha verimlidir.',
    },
    {
      term: 'Kaçak elektrik',
      body: 'Elektriğin sayaçtan geçirilmeden, bedeli ödenmeden ve izinsiz bağlantılarla kullanılmasıdır. Hem ekonomiye zarar verir hem can ve mal güvenliğini tehlikeye atar.',
    },
  ],

  why: {
    question: 'Bir lamba neden ısınır? Enerji dönüşümünde “kayıp” ne demek?',
    body: `Eski tip bir akkor ampule bir süre yanıp söndükten sonra dokunursan elini yakar. Oysa ampulden beklediğimiz şey ısı değil, **ışıktı.** Bu ısı nereden geldi?

Hiçbir enerji dönüşümü tam olarak istediğimiz biçimde gerçekleşmez. Ampul elektrik enerjisini ışığa dönüştürürken, enerjinin bir kısmı istemediğimiz bir biçime, **ısıya** dönüşür. Akkor ampullerde bu “istenmeyen” kısım çok büyüktür: harcanan elektriğin büyük bölümü ışık değil ısı olarak çevreye yayılır.

Burada iki kavramı ayırmak gerekir:

- **Enerji kaybolmaz.** Isıya dönüşen enerji yok olmamıştır; odanın havasına geçmiştir. Toplam enerji korunur.
- **Ama işe yaramaz.** Işık istiyorduk; ısıya dönüşen kısım bizim açımızdan boşa gitmiştir. Günlük dilde buna “kayıp” deriz.

İşte **enerji verimliliği** bu yüzden önemlidir. Aynı ışığı veren iki lambadan, enerjinin daha büyük kısmını ışığa dönüştüren lamba daha verimlidir. LED lambalar aynı ışığı akkor ampullerden çok daha az elektrikle verir ve çok daha az ısınır. Bu yüzden LED’e geçmek, hiçbir şeyden vazgeçmeden elektrik tasarrufu yapmanın en kolay yollarından biridir.

Aynı mantık bütün cihazlar için geçerlidir. Bir elektrik motoru çalışırken de ısınır; bir şarj aleti prize takılıyken de ısınır. Her ısınma, istenmeyen bir dönüşüm demektir.

Şimdi santrale geçelim. Orada da aynı ilke işler: yakıtın ya da suyun enerjisinin tamamı elektriğe dönüşmez; bir kısmı ısı olarak çevreye verilir. Bu yüzden **evde tasarruf edilen her birim elektrik**, santralde çok daha fazla yakıtın ya da kaynağın korunması demektir.

Bu dersin tasarruf bölümünün temeli bu bağlantıdır: senin evdeki küçük davranışın, zincirin en başındaki kaynağa kadar uzanır.`,
  },

  mechanism: {
    title: 'Santralden evine: elektriğin yolculuğu',
    lead: 'Bir türbinin dönmesinden lambanın yanmasına kadar. Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, elektrik enerjisinin üretilip kullanılmasını baştan sona gösterir.',
    steps: [
      {
        title: '1. Bir enerji kaynağı türbini döndürür',
        body: 'Akan su, yakıtla ya da yer altı ısısıyla elde edilen buhar veya esen rüzgâr türbin kanatlarını döndürür.',
      },
      {
        title: '2. Türbin jeneratörü döndürür',
        body: 'Türbine bağlı jeneratör döner. Bu noktada elimizde hareket enerjisi vardır.',
      },
      {
        title: '3. Jeneratör elektrik üretir',
        body: 'Jeneratör hareket enerjisini elektrik enerjisine dönüştürür.',
      },
      {
        title: '4. Elektrik iletim hatlarıyla taşınır',
        body: 'Üretilen elektrik yüksek gerilim hatlarıyla şehirlere, oradan dağıtım hatlarıyla evlere ulaştırılır.',
      },
      {
        title: '5. Sigorta devreyi korur',
        body: 'Evde bir devreden aşırı akım geçerse sigorta devreyi keser; kabloların aşırı ısınması ve yangın önlenir.',
      },
      {
        title: '6. Cihazlar elektriği başka enerjilere dönüştürür',
        body: 'Lamba ışığa, ütü ısıya, vantilatör harekete dönüştürür. Her dönüşümde enerjinin bir kısmı istenmeyen ısıya dönüşür.',
      },
    ],
    takeaway:
      'Zincirin iki ucu birbirinin tersidir: santralde hareket elektriğe, evde elektrik harekete, ısıya ve ışığa dönüşür.',
  },

  comparison: {
    title: 'Elektrik enerjisi neye dönüşüyor?',
    columns: ['Isı enerjisi', 'Işık enerjisi', 'Hareket enerjisi'],
    rows: [
      { label: 'Örnek cihazlar', values: ['Ütü, su ısıtıcısı, fırın, elektrikli ısıtıcı', 'Lamba, LED, ekran', 'Vantilatör, mikser, çamaşır makinesi, robot'] },
      { label: 'Dönüşümü sağlayan', values: ['Isınan direnç teli', 'Lamba ya da LED', 'Elektrik motoru'] },
      { label: 'Yan ürün', values: ['—', 'Isı (akkor ampulde çok, LED’de az)', 'Isı ve ses'] },
      { label: 'Tersi mümkün mü?', values: ['—', '—', 'Evet: jeneratör hareketi elektriğe dönüştürür'] },
    ],
    insight:
      'Son satır dersin iki yarısını bağlar: evdeki motor elektriği harekete, santraldeki jeneratör hareketi elektriğe dönüştürür.',
  },

  traps: [
    {
      title: 'Enerjinin dönüşürken kaybolduğunu sanmak',
      wrong: 'Lamba yanarken elektrik enerjisinin bir kısmı yok olur.',
      right: 'Enerji yok olmaz; bir kısmı istenmeyen biçime, **ısıya** dönüşür ve çevreye yayılır. “Kayıp”, işimize yaramayan dönüşüm demektir.',
      body: 'Enerji verimliliği, enerjinin daha büyük kısmını istediğimiz biçime dönüştürmektir. LED lambaların tercih edilmesinin nedeni budur.',
    },
    {
      title: 'Sigorta atınca onu zorla devrede tutmaya çalışmak',
      wrong: 'Sigorta sürekli atıyorsa onu köprüleyip devrede tutarım.',
      right: 'Sigorta bir **uyarıdır**: devreden güvenli sınırın üzerinde akım geçiyordur. Önce fazla cihaz kapatılmalı; sorun sürerse **yetkili bir elektrikçiye** başvurulmalıdır.',
      body: 'Sigortayı devre dışı bırakmak, yangını önleyen düzeneği ortadan kaldırmak demektir. Program sigortanın güvenlik açısından öneminin üzerinde durulmasını ister.',
    },
    {
      title: 'Santralleri birbirinden tamamen farklı makineler sanmak',
      wrong: 'Her santral elektriği bambaşka bir yöntemle üretir.',
      right: 'Programın saydığı beş santralin beşinde de bir şey **türbini** döndürür ve **jeneratör** elektrik üretir. Onları ayıran şey türbini **neyin** döndürdüğüdür.',
      body: 'Bu ortak zinciri bilen öğrenci beş santrali ayrı ayrı ezberlemek zorunda kalmaz.',
    },
    {
      title: 'Yenilenebilir santrallerin hiç dezavantajı olmadığını sanmak',
      wrong: 'Rüzgâr ve hidroelektrik santralleri yenilenebilir oldukları için hiçbir zararı yoktur.',
      right: 'Her santralin avantajı ve dezavantajı vardır. Hidroelektrik barajlar yerleşim ve tarım alanlarını sular altında bırakabilir; rüzgâr santralleri rüzgâra bağlı olduğu için kesintili üretir.',
      body: 'Program santrallerin yarar, zarar ve riskler yönünden değerlendirilmesini ister. Tek yönlü değerlendirme bu kazanımı karşılamaz.',
    },
  ],

  variables: {
    title: 'Deneyle keşfet: hangi lamba daha verimli?',
    lead:
      'Verimliliği gözle görmenin bir yolu, lambaların ne kadar ısındığına bakmaktır. Çok ısınan lamba enerjisinin büyük kısmını ışık yerine ısıya dönüştürüyordur.',
    question: 'Yaklaşık aynı parlaklıkta ışık veren iki lamba aynı süre yandığında çevrelerini aynı ölçüde ısıtır mı?',
    independent: {
      label: 'Lambanın türü',
      note: 'Ben seçiyorum: akkor ampul / LED lamba',
    },
    setup: {
      label: 'Lambaya eşit uzaklıkta termometre',
      note: 'Lambaya dokunulmaz; yalnız yanındaki hava ölçülür',
    },
    dependent: {
      label: 'Termometredeki sıcaklık artışı',
      note: 'Ölçtüğüm: aynı süre sonundaki artış',
    },
    controlled: [
      'Lambaların yaklaşık aynı parlaklıkta olması',
      'Termometrenin lambaya uzaklığı',
      'Yanma süresi',
      'Odanın başlangıç sıcaklığı',
    ],
    caption:
      'Parlaklık bilerek yaklaşık aynı tutulur. Böylece sıcaklık farkının nedeni, lambaların elektriği ışığa ne kadar verimli dönüştürdüğüdür.',
  },

  experiment: {
    title: 'Lamba verimliliği gözlemi',
    intro:
      'Gözlem öğretmen gözetiminde yapılır. Yanan ya da yeni sönmüş lambalara dokunulmaz; akkor ampuller yakabilecek kadar ısınır.',
    steps: [
      { title: '1. Düzeneği kur', body: 'İki lamba duyuna takılı ve öğretmen tarafından hazırlanmış olarak verilir. Her lambanın yanına, eşit uzaklıkta bir termometre konur.' },
      { title: '2. Başlangıcı ölç', body: 'İki termometrenin başlangıç değeri kaydedilir.' },
      { title: '3. Lambaları yak', body: 'İki lamba aynı anda yakılır ve aynı süre yanık bırakılır.' },
      { title: '4. Sıcaklığı ölç', body: 'Süre sonunda iki termometre okunur ve artış miktarları karşılaştırılır.' },
      { title: '5. Etiketleri incele', body: 'Lambaların kutularındaki enerji etiketleri ve harcadıkları elektrik gücü karşılaştırılır.' },
      { title: '6. Çıkarım yap', body: 'Daha az ısınan ve daha az elektrik harcayan lambanın aynı ışığı daha verimli ürettiği sonucuna varılır.' },
    ],
    takeaway: 'Isınan her cihaz, elektriğin bir kısmını istemediğimiz bir biçime dönüştürüyor demektir.',
  },

  dataTable: {
    title: 'Gözlem kaydı: aynı süre, iki lamba',
    columns: ['Lamba', 'Başlangıç', 'Süre sonu', 'Sıcaklık artışı', 'Ne gösteriyor?'],
    rows: [
      ['Akkor ampul', '22 °C', '31 °C', '9 °C', 'Enerjinin büyük kısmı ısıya dönüşüyor'],
      ['LED lamba', '22 °C', '24 °C', '2 °C', 'Enerjinin daha büyük kısmı ışığa dönüşüyor'],
    ],
    caption:
      'Yaklaşık aynı ışığı veren iki lambadan LED çok daha az ısınmıştır; yani elektriği ışığa daha verimli dönüştürmektedir. *(Kurgulanmış örnek gözlem verisidir; lambanın gücüne ve ölçüm uzaklığına göre değişir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-enerji-evde',
      title: 'Evde elektrik: dönüşüm, sigorta ve robotlar',
      lead: 'F.8.7.3.1 dönüşüm örneklerini, sigortanın önemini ve robotları ister; F.8.7.3.2 bir model tasarımı.',
      blocks: [
        {
          id: 'lgs-fen-enerji-evde-anlatim',
          type: 'prose',
          body: `**Isı enerjisine dönüşüm.** Ütü, su ısıtıcısı, fırın, tost makinesi, saç kurutma makinesi ve elektrikli ısıtıcı elektriği **ısıya** dönüştürür. Bu cihazların içinde, elektrik geçtiğinde ısınan özel teller vardır.

**Işık enerjisine dönüşüm.** Lambalar ve ekranlar elektriği **ışığa** dönüştürür. Daha önce gördüğün gibi, akkor ampuller elektriğin büyük kısmını ısıya harcarken LED lambalar çok daha verimlidir.

**Hareket enerjisine dönüşüm.** Vantilatör, mikser, çamaşır makinesi, elektrikli süpürge, asansör ve elektrikli araçlar elektriği **harekete** dönüştürür. Bu dönüşümü yapan düzeneğe **elektrik motoru** denir.

**Robotlar.** Program, robotların **elektrik enerjisinin hareket enerjisine dönüşümü temel alınarak** geliştirildiğinin vurgulanmasını ister. Bir robot kolunun eklemleri, küçük elektrik motorlarıyla hareket eder. Fabrikalardaki montaj robotları, evdeki robot süpürgeler, tıpta kullanılan robotik sistemler — hepsinin hareketi elektrik motorlarına dayanır. Yani en karmaşık robot da bu dersin temel dönüşümüyle çalışır: **elektrik → hareket.**

**Sigorta.** Evdeki elektrik tesisatı belli bir akıma dayanacak biçimde döşenir. Aynı prize çok sayıda güçlü cihaz takıldığında ya da bir kısa devre oluştuğunda devreden güvenli sınırın üzerinde akım geçer. Bu durumda kablolar aşırı ısınır; yalıtımları eriyebilir ve **yangın** çıkabilir.

**Sigorta** bu tehlikeye karşı devreyi **kendiliğinden keser.** Günümüz evlerinde genellikle otomatik sigortalar bulunur; sigorta attığında sorun giderildikten sonra yeniden kaldırılabilir.

Sigorta attığında doğru davranış şudur:

1. Aynı anda çalışan güçlü cihazların bir kısmını kapat.
2. Sigortayı yeniden kaldır.
3. Sigorta tekrar tekrar atıyorsa bir arıza vardır; **yetkili bir elektrikçiye** başvur.
4. Sigortayı hiçbir zaman tel ya da başka bir şeyle **devre dışı bırakma.**

Sigortanın görevi can ve mal güvenliğidir. Topraklama dersinde öğrendiğin topraklama bağlantısıyla birlikte, evdeki elektrik güvenliğinin iki temel direğini oluşturur.`,
        },
        {
          id: 'lgs-fen-enerji-evde-model',
          type: 'process',
          title: 'Bir model tasarla (F.8.7.3.2)',
          intro:
            'Program tasarımın önce çizimle ifade edilmesini, şartlar uygunsa üç boyutlu modele dönüştürülmesini ister. **Güvenlik kuralı:** modeller yalnız **pil** ile ve öğretmen gözetiminde yapılır; hiçbir model prize ya da şehir elektriğine bağlanmaz.',
          steps: [
            { title: '1. Dönüşümü seç', body: 'Modelin hangi dönüşümü gösterecek? Örnek: elektrik → hareket (küçük bir vantilatör), elektrik → ışık (bir gece lambası).' },
            { title: '2. Problemi bağla', body: 'Model hangi ihtiyacı karşılıyor? Örnek: “Masamda ders çalışırken hafif bir serinlik istiyorum.”' },
            { title: '3. Çiz', body: 'Pil, anahtar, motor ya da LED ve bağlantı kablolarını sade bir çizimle göster; her parçayı etiketle. Enerjinin hangi parçada hangi biçime dönüştüğünü okla belirt.' },
            { title: '4. Malzemeyi belirle', body: 'Pil ve pil yatağı, küçük bir anahtar, küçük bir oyuncak motoru ya da LED, kablo ve karton gibi güvenli malzemeler seç.' },
            { title: '5. Öğretmenle kur ve sına', body: 'Modeli öğretmen gözetiminde kur. Çalışmıyorsa bağlantıları çizimle karşılaştırarak hatayı bul.' },
            { title: '6. Verimliliği değerlendir', body: 'Modelin ısınan bir parçası var mı? Isınma, enerjinin bir kısmının istenmeyen biçime dönüştüğünü gösterir. Nasıl azaltılabileceğini düşün.' },
          ],
        },
        {
          id: 'lgs-fen-enerji-evde-hoca',
          type: 'teacher_note',
          tone: 'warn',
          body:
            'Model tasarımında tek bir kural esnetilmez: **şehir elektriğiyle deney yapılmaz.** Prizdeki elektrik öldürücü olabilir. Pil ile çalışan küçük modeller dönüşümü göstermek için yeterlidir.',
        },
      ],
    },

    {
      id: 'lgs-fen-enerji-santral',
      title: 'Güç santralleri: nasıl çalışır, neye mal olur?',
      lead: 'F.8.7.3.3 santrallerde elektriğin nasıl üretildiğini, F.8.7.3.4 avantaj ve dezavantajları konusunda fikir üretmeyi ister.',
      blocks: [
        {
          id: 'lgs-fen-enerji-santral-sema',
          type: 'figure',
          kind: 'lgs-fen-guc-santralleri',
          title: 'Beş santral, tek zincir',
          width: 'full',
          complexity: 'medium',
          caption:
            'Beş santralin beşinde de türbin döner ve jeneratör hareket enerjisini elektrik enerjisine dönüştürür. Santralleri ayıran tek şey türbini neyin döndürdüğüdür.',
          purpose: 'Beş santral türünü ortak bir zincirde birleştirmek',
          alt:
            'Solda hidroelektrik, termik, rüzgâr, jeotermal ve nükleer santral kutuları; hepsinden çıkan oklar ortak bir “türbin döner” kutusunda birleşir; oradan jeneratöre ve elektrik enerjisine gidilir.',
          data: {},
          focus: [
            { title: 'Hidroelektrik', body: 'Barajda biriken su yüksekten akarak türbini döndürür.' },
            { title: 'Termik', body: 'Kömür ya da doğal gaz yakılarak su ısıtılır; oluşan buhar türbini döndürür.' },
            { title: 'Rüzgâr', body: 'Esen rüzgâr türbinin kanatlarını doğrudan döndürür.' },
            { title: 'Jeotermal', body: 'Yer altından çıkan sıcak su ve buhar türbini döndürür.' },
            { title: 'Nükleer', body: 'Çekirdek tepkimeleriyle açığa çıkan ısı suyu buhara dönüştürür; buhar türbini döndürür.' },
          ],
        },
        {
          id: 'lgs-fen-enerji-santral-anlatim',
          type: 'prose',
          body: `Şemadaki ortak zinciri bildiğin için her santrali tek bir soruyla tanıyabilirsin: **türbini ne döndürüyor?**

**Hidroelektrik santral.** Akarsuyun önüne bir baraj kurulur ve arkasında su birikir. Yüksekte biriken su borulardan aşağı akarken türbini döndürür. Atatürk ve Keban barajları Türkiye’nin büyük hidroelektrik santrallerindendir.

**Termik santral.** Kömür, doğal gaz gibi yakıtlar yakılarak su ısıtılır. Oluşan yüksek basınçlı buhar türbini döndürür. Isı dersinden hatırla: burada suyun hâl değişimi kullanılır.

**Rüzgâr santrali.** Rüzgâr türbinin kanatlarını doğrudan döndürür. Türkiye’de özellikle Ege ve Marmara kıyılarında çok sayıda rüzgâr santrali bulunur.

**Jeotermal santral.** Yer altındaki sıcak su ve buhar yüzeye çıkarılır ve türbini döndürür. Türkiye jeotermal kaynaklar bakımından zengindir; Denizli ve Aydın çevresi bu santrallerin yoğun olduğu bölgelerdendir.

**Nükleer santral.** Özel yakıtların çekirdeklerinde gerçekleşen tepkimelerle çok büyük miktarda ısı açığa çıkar. Bu ısıyla su buhara dönüştürülür ve buhar türbini döndürür. Yani nükleer santral de sonuçta bir “buhar santralidir”; farkı ısının kaynağındadır.

Şimdi dördüncü kazanıma geçelim: **avantaj ve dezavantajlar.** Program santrallerin yarar, zarar ve riskler yönünden değerlendirilmesini, öğrencinin bir fikir üretip savunmasını ister.

Bir santrali değerlendirirken dört soru sor:

1. **Kaynak yenilenebilir mi?** Tükenir mi, tükenmez mi?
2. **Çevreye etkisi ne?** Sera gazı, hava kirliliği, doğal yaşam alanı kaybı var mı?
3. **Üretim sürekli mi?** Hava koşullarına bağlı mı?
4. **Riskleri ve maliyeti ne?** Kaza riski, atık sorunu, kuruluş maliyeti nasıl?

Bu dört soru, biyoteknoloji ve asit yağmurları derslerinde kurduğun iki yönlü değerlendirmenin santrallere uygulanmasıdır. **Hiçbir santral kusursuz değildir;** her biri bir şey kazandırır, bir şeye mal olur. İyi bir değerlendirme, bir bölgenin koşullarına göre hangi santralin daha uygun olduğunu **gerekçesiyle** savunur.`,
        },
        {
          id: 'lgs-fen-enerji-santral-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Santrallerin avantaj ve dezavantajları',
          columns: ['Avantaj', 'Dezavantaj ve risk'],
          rows: [
            { label: 'Hidroelektrik', values: ['Yenilenebilir; sera gazı salımı düşük; baraj suyu sulamada da kullanılabilir', 'Baraj alanında yerleşim, tarım ve tarihî alanlar sular altında kalabilir; kuraklıkta üretim düşer'] },
            { label: 'Termik', values: ['Hava koşullarından bağımsız, sürekli üretim; kurulum yeri esnek', 'Yenilenemez yakıt; sera gazı ve hava kirliliği; asit yağmurlarına katkı; yakıt ithalatı'] },
            { label: 'Rüzgâr', values: ['Yenilenebilir; yakıt gerektirmez; sera gazı salmaz', 'Rüzgâra bağlı kesintili üretim; geniş alan; görüntü, gürültü ve kuşlara etkisi tartışılır'] },
            { label: 'Jeotermal', values: ['Sürekli üretim; yakıt gerektirmez', 'Yalnız jeotermal kaynağı olan bölgelerde kurulabilir; bazı gazlar ve kirleticiler açığa çıkabilir'] },
            { label: 'Nükleer', values: ['Az yakıtla çok enerji; sera gazı salımı düşük; sürekli üretim', 'Radyoaktif atıkların güvenli saklanması; kaza riski; yüksek kuruluş maliyeti'] },
          ],
          insight:
            'Her satırda iki sütun da dolu: kusursuz santral yoktur. Program bu yüzden tek yönlü bir değerlendirme değil, gerekçeli bir fikir ve onun savunulmasını ister.',
        },
      ],
    },

    {
      id: 'lgs-fen-enerji-tasarruf',
      title: 'Bilinçli ve tasarruflu kullanım; kaçak elektrik',
      lead: 'F.8.7.3.5 tasarrufun aile ve ülke ekonomisine önemini ve kaçak elektriğin zararını, F.8.7.3.6 evde tasarrufu ister.',
      blocks: [
        {
          id: 'lgs-fen-enerji-tasarruf-anlatim',
          type: 'prose',
          body: `**Aile ekonomisine katkı.** Evde harcanan her elektrik faturaya yansır. Gereksiz yanan bir lamba, bekleme modunda bırakılan bir cihaz ya da kapağı açık bırakılan bir buzdolabı küçük görünür; ama ay boyunca ve yıl boyunca **toplanır.** Tasarruf, ailenin bütçesinde başka ihtiyaçlara ayrılabilecek bir pay açar.

**Ülke ekonomisine katkı.** Türkiye elektrik üretiminde kullandığı yakıtların, özellikle doğal gazın önemli bir kısmını **ithal eder.** Tasarruf edilen her birim elektrik, daha az yakıt ithalatı ve daha az döviz harcaması demektir. Ayrıca daha az üretim, daha az hava kirliliği ve daha az sera gazı demektir.

**Enerji verimliliği çalışmaları.** Program, bu konuda resmî kurumların ve sivil toplum kuruluşlarının çalışmalarının ve yapılması gerekenlerin belirtilmesini ister. Bu çalışmaların bazı örnekleri şunlardır:

- Enerji alanındaki bakanlık ve kurumların yürüttüğü enerji verimliliği ve bilinçlendirme çalışmaları.
- Elektrikli cihazlar üzerindeki **enerji etiketleri:** cihazın ne kadar verimli olduğunu harf ve renk ölçeğiyle gösterir; satın alırken daha verimli cihazı seçmeyi kolaylaştırır.
- Binalarda yalıtım ve verimli aydınlatma uygulamaları.
- Sivil toplum kuruluşlarının okullarda ve toplumda yürüttüğü bilinçlendirme etkinlikleri.

**Kaçak elektrik.** Program kaçak elektrik kullanımının ülke ekonomisine verdiği zararın özellikle vurgulanmasını ister. Kaçak elektrik, elektriğin sayaçtan geçirilmeden, izinsiz bağlantılarla ve bedeli ödenmeden kullanılmasıdır. Zararları üç yönlüdür:

1. **Ekonomik zarar:** üretilen elektriğin bedeli ödenmez; üretim için harcanan yakıt ve döviz boşa gider. Bu yükün bir kısmı dolaylı olarak elektriğini dürüstçe kullanan herkese yansır.
2. **Şebekeye zarar:** izinsiz bağlantılar şebekeye kontrolsüz yük bindirir; kesintilere ve arızalara yol açabilir.
3. **Can ve mal güvenliğine zarar:** kurallara uygun olmayan bağlantılar elektrik çarpmasına ve yangınlara neden olabilir.

Bu yüzden kaçak elektrik yalnız bir hukuk meselesi değil, bir **güvenlik** ve **toplumsal sorumluluk** meselesidir.

**Evde tasarruf (F.8.7.3.6).** Program öğrencilerin elektrik faturasını azaltmaya yönelik **uzun süreli** çalışmalar yapmasını ve sürecin izlenmesini ister. Aşağıdaki süreç bunun için bir plandır.`,
        },
        {
          id: 'lgs-fen-enerji-tasarruf-surec',
          type: 'process',
          title: 'Ailemizle fatura azaltma planı',
          intro: 'Uzun süreli bir çalışma: birkaç ay boyunca uygulanır ve izlenir.',
          steps: [
            { title: '1. Başlangıcı kaydet', body: 'Son birkaç ayın elektrik faturalarındaki tüketim miktarını (fatura tutarını değil, tüketimi) bir tabloya yaz.' },
            { title: '2. İsrafı bul', body: 'Evi dolaş: boş odada yanan ışıklar, bekleme modunda bırakılan cihazlar, eski tip ampuller, kapağı sık açılan buzdolabı.' },
            { title: '3. Aile kararları al', body: 'LED’e geçiş, kullanılmayan cihazları fişten çekme, çamaşır ve bulaşık makinesini tam dolunca çalıştırma gibi kararları birlikte al.' },
            { title: '4. Uygula ve izle', body: 'Kararları birkaç ay uygula; her ay tüketimi aynı tabloya ekle.' },
            { title: '5. Adil karşılaştır', body: 'Kış aylarında aydınlatma ve bazı cihazların kullanımı artar. Karşılaştırmayı mümkünse bir önceki yılın aynı ayıyla yap.' },
            { title: '6. Sonucu paylaş ve sürdür', body: 'Tasarrufu ailenle paylaş. İşe yarayan alışkanlıkları kalıcı hâle getir.' },
          ],
        },
        {
          id: 'lgs-fen-enerji-tasarruf-tablo',
          type: 'table',
          interactive: true,
          title: 'Evde elektrik tasarrufu: davranış ve etkisi',
          columns: ['Davranış', 'Neden işe yarar?'],
          rows: [
            ['Akkor ampul yerine LED kullanmak', 'Aynı ışık için çok daha az elektrik harcanır'],
            ['Cihazları bekleme modunda bırakmamak', 'Bekleme modunda da elektrik harcanır'],
            ['Buzdolabı kapağını gereksiz açmamak', 'İçeri giren sıcak hava motoru daha çok çalıştırır'],
            ['Makineleri tam doluyken çalıştırmak', 'Aynı elektrikle daha çok iş yapılır'],
            ['Gün ışığından yararlanmak', 'Gündüz aydınlatma ihtiyacı azalır'],
            ['Yeni cihaz alırken enerji etiketine bakmak', 'Verimli cihaz yıllar boyunca daha az elektrik harcar'],
          ],
          caption: 'Satırların hiçbiri bir ihtiyaçtan vazgeçmeyi istemez; hepsi aynı işi daha az elektrikle yapmayı sağlar.',
        },
        {
          id: 'lgs-fen-enerji-tasarruf-baglanti',
          type: 'connection',
          title: 'Fen Bilimleri burada tamamlanıyor',
          body: 'Bu ders Fen Bilimlerinin son dersidir ve yılın pek çok konusunu bir araya getirir.',
          links: [
            'Isı ve hâl değişimi → termik, jeotermal ve nükleer santrallerde buhar üretimi.',
            'Basit makineler → türbin ve jeneratör dönen düzeneklerdir; işten kazanç yoktur.',
            'Asit yağmurları ve iklim → fosil yakıtlı santrallerin çevresel bedeli.',
            'Sürdürülebilir yaşam → tasarruf ve verimli kullanım.',
            'Topraklama → sigortayla birlikte evdeki elektrik güvenliği.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Dönüşümü adlandır',
      prompt:
        'Aşağıdaki cihazlarda elektrik enerjisi hangi enerjiye dönüşür? (a) ütü, (b) vantilatör, (c) LED lamba, (d) robot süpürge.',
      steps: [
        { title: '1. Ütü', body: 'Ütü ısınarak kumaşı düzeltir: elektrik → **ısı.**' },
        { title: '2. Vantilatör', body: 'Kanatlar döner: elektrik → **hareket** (elektrik motoru).' },
        { title: '3. LED lamba', body: 'Işık verir: elektrik → **ışık.** Çok az ısınır; verimlidir.' },
        { title: '4. Robot süpürge', body: 'Tekerlekleri ve fırçaları döner: elektrik → **hareket.** Robotlar elektrik motorlarıyla hareket eder.' },
        { title: '5. Yan ürünleri ekle', body: 'Motorlu cihazlar ve lambalar çalışırken bir miktar ısı da üretir; bu istenmeyen dönüşümdür.' },
      ],
      answer: '(a) ısı, (b) hareket, (c) ışık, (d) hareket.',
      takeaway: 'Robotların hareketi de elektrik motorlarına, yani elektrik → hareket dönüşümüne dayanır.',
    },
    {
      title: 'Seviye 2 — Santrali tanı',
      prompt:
        'Bir santralde yer altından çıkarılan sıcak su ve buhar türbini döndürüyor. Başka bir santralde kömür yakılarak elde edilen buhar türbini döndürüyor. Bu santraller hangileridir? Ortak ve farklı yönleri nelerdir?',
      steps: [
        { title: '1. Birinci santral', body: 'Yer altındaki sıcak su ve buhar kullanılıyor: **jeotermal santral.**' },
        { title: '2. İkinci santral', body: 'Kömür yakılarak buhar elde ediliyor: **termik santral.**' },
        { title: '3. Ortak yönü bul', body: 'İkisinde de buhar türbini döndürür, jeneratör elektrik üretir.' },
        { title: '4. Farkı bul', body: 'Buharı elde etme yolu farklı: jeotermalde ısı yer altından gelir, termikte yakıt yakılır.' },
        { title: '5. Çevresel farkı ekle', body: 'Termik santral yakıt yaktığı için sera gazı ve hava kirliliği üretir; jeotermal santral yakıt yakmaz ama yalnız belirli bölgelerde kurulabilir.' },
      ],
      answer:
        'Birincisi jeotermal, ikincisi termik santraldir. İkisinde de buhar türbini döndürür; fark buharın elde ediliş yolundadır.',
      takeaway: 'Santral sorularının anahtarı: türbini ne döndürüyor?',
    },
    {
      title: 'Seviye 3 — Fikir üret ve savun',
      prompt:
        'Kıyısında sürekli ve güçlü rüzgâr esen, yer altında jeotermal kaynağı bulunmayan, akarsuyu olmayan bir bölgeye bir santral kurulacak. Hangi santrali önerirsin? Önerini avantaj ve dezavantajlarıyla savun.',
      steps: [
        { title: '1. Koşulları listele', body: 'Güçlü ve sürekli rüzgâr var; jeotermal kaynak ve akarsu yok.' },
        { title: '2. Uygun olmayanları ele', body: 'Jeotermal ve hidroelektrik santral bu bölgenin kaynaklarına uygun değildir.' },
        { title: '3. Öneriyi yaz', body: 'Bölgenin en güçlü kaynağı rüzgâr olduğu için **rüzgâr santrali** önerilir.' },
        { title: '4. Avantajları yaz', body: 'Yenilenebilir, yakıt gerektirmez, sera gazı salmaz; bölgenin doğal kaynağını kullanır.' },
        { title: '5. Dezavantajları yaz ve çözüm öner', body: 'Rüzgâr kesildiğinde üretim düşer. Bu yüzden bölge, ulusal şebekeye bağlı kalmalı ve üretim başka kaynaklarla desteklenmelidir. Kuş göç yolları ve yerleşim alanları dikkate alınarak yer seçilmelidir.' },
        { title: '6. Savunmayı toparla', body: 'Rüzgâr santrali bölgenin koşullarına en uygun seçenektir; kesintili üretim sorunu şebeke bağlantısıyla dengelenebilir.' },
      ],
      answer:
        'Rüzgâr santrali önerilir: yenilenebilir ve temizdir, bölgenin güçlü kaynağını kullanır. Kesintili üretim şebeke bağlantısı ve başka kaynaklarla dengelenmelidir.',
      takeaway: 'İyi bir savunma dezavantajı gizlemez; onu kabul eder ve bir çözüm önerir.',
    },
  ],

  dailyLife: {
    title: 'Elektrik enerjisi hayatın neresinde?',
    body: 'Elektrik günlük hayatın neredeyse her anında bir dönüşümle karşımıza çıkar.',
    links: [
      'Mutfaktaki su ısıtıcısı ve fırın elektriği ısıya dönüştürür.',
      'LED lambalar aynı ışığı daha az elektrikle verir.',
      'Asansörler ve elektrikli araçlar elektrik motorlarıyla hareket eder.',
      'Bisiklet dinamosu hareketi elektriğe dönüştürerek lambayı yakar.',
      'Evdeki otomatik sigortalar aşırı akımda devreyi keserek yangını önler.',
      'Cihaz alırken enerji etiketine bakmak yıllar boyunca tasarruf sağlar.',
    ],
  },

  questionClue: {
    concept: 'Elektrik enerjisi ve santral sorusu',
    statement:
      'Soruda ev cihazları, bir santralin çalışma biçimi, santral karşılaştırması, sigorta ya da tasarruf davranışı varsa, ölçülen şey bu dersin kazanımlarıdır.',
    clues: [
      'Cihazların hangi enerjiye dönüşüm yaptığının sorulması',
      '“Türbin”, “jeneratör”, “baraj”, “buhar” sözcükleri',
      'Santrallerin avantaj ve dezavantajlarının karşılaştırılması',
      'Sigorta ya da kaçak elektrikten söz edilmesi',
      'Elektrik faturası ve tasarruf davranışları',
    ],
    reasoning:
      'Bu işaretler dört işlem ister: dönüşümü adlandırmak, santrali “türbini ne döndürüyor?” sorusuyla tanımak, santrali iki yönlü değerlendirmek ve bir davranışın tasarrufa katkısını açıklamak.',
    boundary:
      'Bu ipuçlarını “yenilenebilir santralin hiç zararı yoktur” gibi tek yönlü bir kısayola çevirme. Ayrıca santrallerin kapasite ve üretim payı gibi sayıları bu düzeyde sorulmaz.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu altı kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Cihazların elektrik enerjisini dönüştürdüğü enerji türüyle eşleştirilmesi',
      'Sigortanın görevinin ve güvenlik önemini sorgulayan bir durum',
      'Bir santralin çalışma biçiminden türünün belirlenmesi',
      'Santrallerin avantaj ve dezavantajlarının karşılaştırılması',
      'Bir bölgeye uygun santralin gerekçeli seçimi',
      'Tasarruf davranışlarının ve kaçak elektriğin ekonomiye etkisinin yorumlanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Akkor ampul ile LED lamba aynı ışığı veriyorsa, hangisi daha verimlidir ve bunu nasıl anlarız?',
      hint: 'Hangisi daha çok ısınıyor?',
      answer:
        '**LED lamba** daha verimlidir. Akkor ampul harcadığı elektriğin büyük kısmını ışık yerine **ısıya** dönüştürür; bu yüzden çok ısınır. LED ise aynı ışığı çok daha az elektrikle verir ve az ısınır. Isınma, enerjinin istenmeyen biçime dönüştüğünün işaretidir. Enerji kaybolmaz; ama işimize yaramayan biçime dönüşür.',
    },
    {
      prompt:
        'Beş santral türünün ortak çalışma zinciri nedir? Onları birbirinden ayıran şey nedir?',
      hint: 'Türbin ve jeneratör.',
      answer:
        'Beşinde de bir şey **türbini döndürür**, türbine bağlı **jeneratör** hareket enerjisini **elektrik enerjisine** dönüştürür. Onları ayıran şey türbini **neyin** döndürdüğüdür: hidroelektrikte akan su, termikte yakıtla elde edilen buhar, rüzgârda rüzgâr, jeotermalde yer altından gelen sıcak su ve buhar, nükleerde çekirdek tepkimelerinin ısısıyla elde edilen buhar.',
    },
    {
      prompt:
        'Kaçak elektrik kullanımı neden yalnız kullanan kişiyi değil, bütün toplumu ilgilendirir?',
      hint: 'Ekonomi, şebeke ve güvenlik.',
      answer:
        'Kaçak elektrikte üretilen elektriğin bedeli ödenmez; üretim için harcanan yakıt ve döviz boşa gider ve bu yükün bir kısmı dolaylı olarak dürüst tüketicilere yansır. İzinsiz bağlantılar şebekeye kontrolsüz yük bindirerek kesinti ve arızalara yol açabilir. Kurallara uygun olmayan bağlantılar elektrik çarpmasına ve yangınlara neden olabilir; bu da çevredeki insanları da tehlikeye atar. Program kaçak elektriğin ülke ekonomisine verdiği zararın vurgulanmasını ister.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey dönüşüm, zincir ve iki yönlü değerlendirme',
    body:
      'Altı kazanımın fiilleri geniş bir yelpaze çizer: “örnekler verir”, “model tasarlar”, “açıklar”, “fikirler üretir”, “tartışır”, “özen gösterir”. Programın açıklamaları sigortanın önemini, robotları, beş santral türünü, santrallerin yarar–zarar ve riskler yönünden değerlendirilmesini ve kaçak elektriğin zararını vurgular. Bu yüzden senden sayı değil; dönüşümleri tanıman, santralleri ortak zincirle açıklaman, iki yönlü değerlendirme yapman ve tasarrufu gerekçelendirmen beklenir.',
    measures: [
      'Elektrik enerjisinin ısı, ışık ve hareket enerjisine dönüşümüne örnek verebilme',
      'Sigortanın güvenlik işlevini açıklayabilme',
      'Robotların elektrik → hareket dönüşümüne dayandığını bilme',
      'Santrallerin ortak çalışma zincirini açıklayabilme',
      'Santralleri avantaj, dezavantaj ve risk yönünden değerlendirebilme',
      'Tasarrufun ve kaçak elektriğin ekonomiye etkisini tartışabilme',
    ],
  },

  simulationTable: {
    title: 'Dört santral hakkında bir öğrencinin notları',
    columns: ['Santral', 'Öğrencinin notu'],
    rows: [
      ['Hidroelektrik', 'Yenilenebilirdir; ama baraj alanında yerleşim ve tarım alanları sular altında kalabilir.'],
      ['Termik', 'Hava koşullarından bağımsız üretim yapar; ama sera gazı ve hava kirliliğine yol açar.'],
      ['Rüzgâr', 'Yenilenebilir olduğu için hiçbir dezavantajı yoktur.'],
      ['Nükleer', 'Az yakıtla çok enerji üretir; ama radyoaktif atıkların güvenli saklanması gerekir.'],
    ],
    caption: 'Öğrenci, santralleri avantaj ve dezavantajlarıyla değerlendiren dört not almıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün değerlendirme notları',
    passage: `Bir öğrenci dört santral türünü avantaj ve dezavantajlarıyla değerlendiriyor. Notları yukarıdaki tabloda verilmiştir.

Öğretmen, notlardan birinin programın istediği değerlendirme biçimine uymadığını söylüyor.`,
    question: 'Öğretmenin işaret ettiği not hangisidir ve neden?',
    options: [
      {
        text: 'Hidroelektrik notu; çünkü hidroelektrik santraller yenilenebilir değildir',
        explanation:
          'Hidroelektrik santraller akan suyu kullandığı için yenilenebilir kabul edilir. Not hem avantajı hem dezavantajı içerdiği için doğru biçimdedir.',
      },
      {
        text: 'Termik notu; çünkü termik santraller sürekli üretim yapamaz',
        explanation:
          'Termik santraller yakıt olduğu sürece hava koşullarından bağımsız üretim yapar. Not iki yönlü ve doğrudur.',
      },
      {
        text: 'Rüzgâr notu; çünkü tek yönlüdür ve rüzgâr santrallerinin dezavantajlarını yok sayar',
        explanation:
          'Doğru cevap. Rüzgâr santralleri rüzgâra bağlı olduğu için kesintili üretim yapar, geniş alan kaplar; görüntü, gürültü ve kuşlara etkisi tartışılır. Program santrallerin yarar, zarar ve riskler yönünden değerlendirilmesini ister; “hiçbir dezavantajı yoktur” ifadesi bu değerlendirmeyi yapmaz.',
      },
      {
        text: 'Nükleer notu; çünkü nükleer santraller buhar kullanmaz',
        explanation:
          'Nükleer santraller de çekirdek tepkimelerinin ısısıyla suyu buhara dönüştürür ve buhar türbini döndürür. Not iki yönlü ve doğrudur.',
      },
      {
        text: 'Hiçbiri; dört not da iki yönlüdür',
        explanation:
          'Rüzgâr notu yalnız avantajı yazmış ve dezavantaj olmadığını iddia etmiştir; bu yüzden dört not da iki yönlü değildir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru her notu “iki yönlü mü?” sorusuyla sınamayı istiyor. Yöntem: her notta hem bir yarar hem bir zarar ya da risk bulunuyor mu, bak.',
    critical_point:
      'Kritik nokta “yenilenebilir” sözcüğünün olumlu çağrışımıdır. Öğrenci yenilenebilir olmayı kusursuz olmakla karıştırmıştır. Yenilenebilir bir kaynağın da çevresel ve teknik bedeli olabilir.',
    takeaway: 'Bir enerji kaynağını değerlendirirken iki sütun da dolu olmalı: ne kazandırıyor, neye mal oluyor?',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Güç santralleriyle ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Her santral elektriği tamamen farklı bir yöntemle üretir',
        'Programın saydığı santrallerde türbin döner ve jeneratör hareket enerjisini elektrik enerjisine dönüştürür',
        'Yenilenebilir santrallerin hiçbir dezavantajı yoktur',
        'Nükleer santrallerde buhar kullanılmaz',
      ],
      answer_index: 1,
      explanation:
        'Hidroelektrik, termik, rüzgâr, jeotermal ve nükleer santrallerin hepsinde bir şey türbini döndürür ve jeneratör hareket enerjisini elektrik enerjisine dönüştürür; onları ayıran şey türbini neyin döndürdüğüdür. Yenilenebilir santrallerin de dezavantajları vardır. Nükleer santrallerde çekirdek tepkimelerinin ısısıyla buhar elde edilir.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdaki cihazlardan hangisinde elektrik enerjisi esas olarak hareket enerjisine dönüşür?',
      options: [
        'Su ısıtıcısı',
        'LED lamba',
        'Mikser',
        'Tost makinesi',
      ],
      answer_index: 2,
      explanation:
        'Mikser bir elektrik motoruyla çalışır ve elektrik enerjisini hareket enerjisine dönüştürür. Su ısıtıcısı ve tost makinesi elektriği ısıya, LED lamba ise ışığa dönüştürür.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Sigorta sürekli atıyorsa onu devre dışı bırakırız, sorun çözülür.” diyor. Bu düşüncenin hatası nedir?',
      options: [
        'Sigortanın aşırı akımda devreyi keserek yangını önleyen bir güvenlik düzeneği olduğunu gözden kaçırmak',
        'Sigortanın elektrik ürettiğini sanmak',
        'LED lambaların verimli olduğunu bilmemek',
        'Santrallerin türbin kullandığını bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Sigorta, devreden güvenli sınırın üzerinde akım geçtiğinde devreyi keserek kabloların aşırı ısınmasını ve yangını önler. Sürekli atması bir sorunun işaretidir; önce cihaz yükü azaltılmalı, sorun sürerse yetkili bir elektrikçiye başvurulmalıdır. Sigortayı devre dışı bırakmak yangını önleyen düzeneği ortadan kaldırmak demektir.',
    },
  ],

  summary: [
    'Elektrik enerjisi evde ısı, ışık ve hareket enerjisine dönüşür.',
    'Elektrik motoru elektriği harekete, jeneratör hareketi elektriğe dönüştürür.',
    'Robotlar elektrik enerjisinin hareket enerjisine dönüşümüne dayanarak geliştirilir.',
    'Enerji dönüşürken kaybolmaz; bir kısmı istenmeyen biçime, çoğunlukla ısıya dönüşür.',
    'LED lambalar aynı ışığı akkor ampullerden çok daha az elektrikle verir.',
    'Sigorta aşırı akımda devreyi keserek yangını ve cihaz hasarını önler.',
    'Santrallerde bir şey türbini döndürür, jeneratör elektrik üretir.',
    'Hidroelektrikte su, termikte yakıtla elde edilen buhar, rüzgârda rüzgâr, jeotermalde yer altı buharı, nükleerde çekirdek tepkimesinin ısıttığı buhar türbini döndürür.',
    'Her santralin avantajı ve dezavantajı vardır; değerlendirme iki yönlü yapılır.',
    'Tasarruf aile bütçesine ve ithal yakıta bağımlı ülke ekonomisine katkı sağlar.',
    'Kaçak elektrik ekonomiye, şebekeye ve can–mal güvenliğine zarar verir.',
    'Model tasarımları yalnız pille ve öğretmen gözetiminde yapılır; prize bağlanmaz.',
  ],

  next: [
    'Fen Bilimleri tamamlandı — genel tekrar için ünite derslerine dön',
    'Madde Döngüleri ve Küresel İklim Değişikliği (tekrar için)',
    'Nötr Cisim, Elektroskop ve Topraklama (tekrar için)',
  ],
})

export default lesson
