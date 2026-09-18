import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — GOLD STANDARD
 * ==================================================================
 * Ünite    : F.8.1 Mevsimler ve İklim
 * Kazanım  : F.8.1.1.1
 * Dayanak  : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * KAZANIM AÇIKLAMASI (birebir)
 *   a. Dünya'nın dönme ekseni olduğuna değinilir.
 *   b. Dünya'nın dönme ekseni ile Güneş etrafındaki dolanma düzlemi
 *      arasındaki ilişkiye değinilir.
 *   c. Işığın birim yüzeye düşen enerji miktarının mevsimler üzerindeki
 *      etkisine değinilir.
 *
 * Konu/Kavramlar (programdan): Dünya'nın dönme ekseni, dolanma düzlemi,
 * ısı enerjisi, mevsimler. Belirli tarihlerin (21 Aralık vb.) ezberi
 * kavram listesinde YOKTUR; ders bunu öğrenciye açıkça söyler.
 *
 * Bu not, sonraki bütün LGS Fen notlarının kalite referansıdır.
 * Bütün metinler, örnekler ve sorular DRKOÇ için özgün yazılmıştır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-mevsimlerin-olusumu',
  topic: 'Mevsimler ve İklim',
  order: 1,
  goldStandard: true,
  title: 'Mevsimlerin Oluşumu: Uzaklık Değil, Açı',
  subtitle:
    'Aynı anda bir yarım kürede yaz, ötekinde kış yaşanıyor. Uzaklık ikisi için de aynıysa farkı ne yaratıyor?',
  minutes: 45,
  kazanimlar: [
    {
      kod: 'F.8.1.1.1',
      metin: 'Mevsimlerin oluşumuna yönelik tahminlerde bulunur.',
      sinir:
        'Program üç noktaya değinilmesini ister: Dünya’nın dönme ekseni, eksen ile dolanma düzlemi arasındaki ilişki ve ışığın birim yüzeye düşen enerji miktarının etkisi. Kavram listesinde belirli tarih ezberi yoktur.',
    },
  ],
  prerequisites: [
    { topic: 'Dünya’nın kendi ekseni etrafında dönmesi', why: 'Eksen kavramını bilmeden eksen eğikliğini kuramazsın.' },
    { topic: 'Işık ve enerji ilişkisi', why: 'Işığın yüzeye enerji taşıdığını bilmek, birim yüzey hesabının temelidir.' },
  ],
  outcomes: [
    'Mevsimlerin Güneş’e uzaklıkla oluşmadığını bir gözlemle kanıtlayabileceksin.',
    'Eksen eğikliğinden mevsime uzanan neden-sonuç zincirini kurabileceksin.',
    'Işığın geliş açısı ile birim yüzeye düşen enerji arasındaki ilişkiyi açıklayabileceksin.',
    'Bir ışık açısı deneyinde bağımsız, bağımlı ve kontrol edilen değişkenleri ayırabileceksin.',
    'Verilen bir konum ve tarih için hangi mevsimin yaşandığını tahmin edebileceksin.',
  ],

  opening: {
    title: 'Aynı gün, aynı Güneş, iki farklı mevsim',
    lead: 'Aralık ayında Türkiye’de kar yağarken Avustralya’da denize giriliyor. İki ülke de aynı Dünya’nın üzerinde ve aynı Güneş’ten ışık alıyor.',
    body: `Bunu bir gözlem olarak alalım, çünkü gerçekten gözlemlenebilir: **aynı tarihte, Dünya’nın iki farklı yerinde iki farklı mevsim yaşanır.** Aralıkta Türkiye’de kış, Avustralya’da yaz olur. Haziranda tam tersi.

Şimdi çoğu öğrencinin verdiği açıklamayı deneyelim: “Mevsimler, Dünya Güneş’e yaklaşıp uzaklaştığı için oluşur.”

Bu açıklamayı gözlemle sınayalım. Dünya bir bütündür; Güneş’e yaklaştığında **her tarafı** birden yaklaşır, uzaklaştığında **her tarafı** birden uzaklaşır. Eğer mevsimleri uzaklık belirleseydi, aynı anda bütün Dünya’da aynı mevsimin yaşanması gerekirdi.

Ama gözlem bunu söylemiyor. Aralıkta iki yarım kürede iki farklı mevsim var. **Demek ki açıklama yanlış.** Bu, bilimin çalışma biçimidir: bir açıklama, gözlemle çelişiyorsa bırakılır.

O hâlde gerçek sebep ne? Dünya’nın kendi etrafında döndüğü hayalî bir çizgi vardır; buna **dönme ekseni** denir. Bu eksen, Dünya’nın Güneş çevresinde dolandığı düzleme **dik değildir; eğiktir.** Ve Dünya yıl boyunca dolanırken bu eğikliğin yönü değişmez.

Eğiklik değişmeyince şu olur: yılın bir bölümünde Kuzey Yarım Küre Güneş’e daha dönük durur, öteki bölümünde Güney Yarım Küre. Güneş’e daha dönük olan yarım kürede ışık yüzeye daha **dik** gelir. Dik gelen ışık, dar bir alana yayılır; yani **birim yüzeye düşen enerji artar.** Enerji artınca yüzey daha çok ısınır: yaz.

Bu derste tam olarak bu zinciri kuracağız: **eksen eğikliği → ışığın geliş açısı → birim yüzeye düşen enerji → sıcaklık → mevsim.** Ardından bu ilişkiyi bir deneyle ölçeceğiz.`,
  },

  concepts: [
    {
      term: 'Dönme ekseni',
      body: 'Dünya’nın kendi etrafında döndüğü hayalî çizgidir; kuzey ve güney kutbundan geçer. Gerçek bir çubuk değildir, bir dönüş çizgisidir. Programın kazanım açıklamasının **a** maddesi bu kavrama değinilmesini ister.',
    },
    {
      term: 'Dolanma düzlemi',
      body: 'Dünya’nın Güneş çevresinde dolanırken çizdiği yolun oluşturduğu düzlemdir. Dönme ekseni bu düzleme **dik değildir**, yaklaşık 23,5 derece eğiktir. Kazanım açıklamasının **b** maddesi bu ilişkiyi ister.',
    },
    {
      term: 'Işığın geliş açısı',
      body: 'Işık ışınlarının yüzeyle yaptığı açıdır. Açı 90 dereceye yaklaştıkça ışık **dik**, küçüldükçe **eğik** gelir. Aynı ışık demeti, eğik geldiğinde daha geniş bir alana yayılır.',
    },
    {
      term: 'Birim yüzeye düşen enerji',
      body: 'Belirli büyüklükteki bir alana (örneğin bir metrekareye) düşen ışık enerjisi miktarıdır. Aynı toplam enerji geniş alana yayılırsa birim yüzeye düşen miktar azalır. Kazanım açıklamasının **c** maddesi doğrudan bunu ister.',
    },
    {
      term: 'Yarım küre',
      body: 'Ekvatorun ayırdığı iki yarıdan her biridir: Kuzey Yarım Küre ve Güney Yarım Küre. Eksen eğikliği yüzünden bu iki yarı, Güneş’e aynı anda aynı ölçüde dönük olamaz.',
    },
    {
      term: 'Isı enerjisi',
      body: 'Yüzeye ulaşan ışık enerjisinin yüzeyi ısıtan biçimidir. Birim yüzeye düşen enerji arttıkça yüzeyin ısınması da artar. Bu kavram programın konu/kavram listesinde açıkça yer alır.',
    },
  ],

  why: {
    question: 'Neden “Güneş’e uzaklık” açıklaması çöküyor?',
    body: `Çünkü bir açıklama, gözlemin tamamını açıklamak zorundadır. Uzaklık açıklaması ise gözlemin yarısıyla bile uyuşmuyor.

Şöyle düşün: Dünya tek parça bir gök cismidir. Güneş’e yaklaştığında Türkiye de Avustralya da birlikte yaklaşır; uzaklaştığında birlikte uzaklaşır. İkisi arasındaki uzaklık farkı, Dünya’nın çapı kadardır ve Güneş’e olan uzaklığın yanında yok denecek kadar küçüktür.

Eğer mevsimleri uzaklık belirleseydi, aynı tarihte **bütün Dünya’da aynı mevsim** yaşanırdı. Oysa Aralıkta bir yarım kürede kış, ötekinde yaz var. Tek bir gözlem, açıklamayı çürütüyor.

Bu, kazanımın fiiliyle de uyuşuyor: program “mevsimlerin oluşumuna yönelik **tahminlerde bulunur**” diyor. Tahmin, ezberlenmiş bir cümleyi tekrarlamak değildir; bir modelden yola çıkıp henüz söylenmemiş bir sonucu söyleyebilmektir. Uzaklık modeliyle tahmin yaparsan yanlış tahmin edersin.

Doğru modelde ise tahmin çalışır. Model şunu söyler: **Güneş’e daha dönük olan yarım kürede ışık daha dik gelir; dik gelen ışıkta birim yüzeye düşen enerji artar; enerji artınca yüzey daha çok ısınır.** Bu modelden, hiç bilmediğin bir tarih ve konum için bile tahmin üretebilirsin.

Bir uyarı daha: “dik ışık daha yakın demektir” diye düşünme. Dik gelmek uzaklıkla ilgili değildir; ışığın yüzeyle yaptığı **açıyla** ilgilidir. Bu dersin tamamı bu ayrımın üzerine kuruludur.`,
  },

  mechanism: {
    title: 'Eksen eğikliğinden mevsime uzanan zincir',
    lead: 'Altı halka. Bir halkayı atlarsan mevsimi ezberlemiş ama açıklamamış olursun.',
    intro:
      'Mevsimlerin oluşumu tek bir sebebe değil, birbirini doğuran bir zincire dayanır. Zinciri baştan sona kurabiliyorsan tahmin de yapabilirsin.',
    steps: [
      {
        title: '1. Dünya’nın bir dönme ekseni vardır',
        body: 'Dünya kendi etrafında, kutuplardan geçen hayalî bir çizgi çevresinde döner. Bu çizgi bir gün boyunca gece ile gündüzü doğurur.',
      },
      {
        title: '2. Eksen, dolanma düzlemine dik değildir',
        body: 'Eksen ile Dünya’nın Güneş çevresindeki yolunun düzlemi arasında yaklaşık 23,5 derecelik bir eğiklik vardır. Eksen dik olsaydı mevsimler oluşmazdı.',
      },
      {
        title: '3. Eğikliğin yönü yıl boyunca değişmez',
        body: 'Dünya dolanırken eksen sürekli aynı yönü gösterir. Bu yüzden Dünya yolunun bir tarafındayken Kuzey Yarım Küre Güneş’e dönük olur; karşı tarafa geçtiğinde Güney Yarım Küre dönük olur.',
      },
      {
        title: '4. Işık, dönük yarım küreye daha dik gelir',
        body: 'Güneş’e dönük duran yarım kürede ışınlar yüzeyle daha büyük bir açı yapar. Öteki yarım kürede aynı ışınlar yüzeye eğik gelir.',
      },
      {
        title: '5. Dik ışıkta birim yüzeye düşen enerji artar',
        body: 'Aynı ışık demeti dik geldiğinde dar bir alana düşer; eğik geldiğinde aynı enerji daha geniş bir alana yayılır. Böylece bir metrekareye düşen enerji miktarı değişir.',
      },
      {
        title: '6. Enerji farkı sıcaklık farkını, sıcaklık farkı mevsimi doğurur',
        body: 'Birim yüzeye daha çok enerji düşen yarım küre daha çok ısınır: yaz yaşanır. Daha az enerji düşen yarım kürede kış yaşanır.',
      },
    ],
    takeaway: 'Mevsimi doğuran şey uzaklık değil, ışığın yüzeye geliş açısıdır.',
  },

  causeEffect: {
    title: 'Tek bir sebep, dört basamaklı sonuç',
    intro: 'Zinciri kısaltalım: her kutu bir öncekinin sonucu, bir sonrakinin sebebidir.',
    steps: [
      { title: 'Sebep', body: 'Dönme ekseninin dolanma düzlemine eğik olması ve bu eğikliğin yönünün değişmemesi.' },
      { title: 'Doğrudan sonuç', body: 'Yıl boyunca bir yarım küre Güneş’e daha dönük, öteki daha az dönük durur.' },
      { title: 'Ölçülebilir sonuç', body: 'Dönük yarım kürede ışık daha dik gelir; birim yüzeye düşen enerji artar.' },
      { title: 'Gözlenen sonuç', body: 'Birim yüzeye düşen enerji arttıkça yüzey daha çok ısınır; mevsim yaza döner.' },
    ],
    inference:
      'Zincirin ilk halkası kalksaydı — yani eksen dik olsaydı — hiçbir halka gerçekleşmez ve mevsimler oluşmazdı.',
  },

  comparison: {
    title: 'Aynı anda iki yarım küre',
    columns: ['Güneş’e dönük yarım küre', 'Güneş’e daha az dönük yarım küre'],
    rows: [
      { label: 'Işığın geliş açısı', values: ['Dike yakın', 'Eğik'] },
      { label: 'Aynı ışığın yayıldığı alan', values: ['Dar', 'Geniş'] },
      { label: 'Birim yüzeye düşen enerji', values: ['Çok', 'Az'] },
      { label: 'Yüzeyin ısınması', values: ['Fazla', 'Az'] },
      { label: 'Gündüz süresi', values: ['Uzun', 'Kısa'] },
      { label: 'Yaşanan mevsim', values: ['Yaz', 'Kış'] },
    ],
    insight:
      'İki sütun da aynı Güneş’ten, aynı uzaklıktan ışık alıyor. Bütün fark ışığın yüzeyle yaptığı açıdan doğuyor.',
  },

  traps: [
    {
      title: 'Mevsimleri Güneş’e uzaklıkla açıklamak',
      wrong: 'Dünya Güneş’e yaklaşınca yaz, uzaklaşınca kış olur.',
      right: 'Dünya bir bütündür; yaklaştığında her tarafı birden yaklaşır. Aynı anda iki yarım kürede farklı mevsim yaşanması bu açıklamayı çürütür.',
      body: 'Bu, konunun en yaygın kavram yanılgısıdır ve tek bir gözlemle kırılır: Aralıkta Türkiye’de kış, Avustralya’da yaz yaşanır. Uzaklık ikisi için de aynıdır.',
    },
    {
      title: 'Eksen eğikliğinin yıl içinde değiştiğini sanmak',
      wrong: 'Dünya dolanırken ekseni bir yana bir öbür yana yatar; mevsimler böyle değişir.',
      right: 'Eksen sürekli **aynı yönü** gösterir. Değişen şey, Dünya’nın yol üzerindeki konumudur; eksenin yönü değil.',
      body: 'Eksen yıl içinde yön değiştirseydi, Dünya yolun her yerinde aynı yarım küreyi Güneş’e dönük tutabilirdi ve mevsim döngüsü oluşmazdı. Sabitlik, döngünün sebebidir.',
    },
    {
      title: '“Dik ışık = daha yakın Güneş” sanmak',
      wrong: 'Işık dik geliyorsa Güneş o bölgeye daha yakın demektir.',
      right: 'Dik gelmek uzaklıkla değil, ışığın yüzeyle yaptığı **açıyla** ilgilidir. Uzaklık aynı kalırken açı değişebilir.',
      body: 'El feneriyle yapılan deney bunu doğrudan gösterir: fenerin yüzeye uzaklığı hiç değişmeden yalnız açı değiştirildiğinde aydınlanan alan ve parlaklık değişir.',
    },
  ],

  variables: {
    title: 'Deneyle ölçelim: açı değişince ne değişiyor?',
    lead:
      'Kazanım açıklamasının **c** maddesi birim yüzeye düşen enerjiyi ister. Bunu sınıfta ölçebileceğin bir düzenekle inceleyeceğiz.',
    question: 'Işığın yüzeye geliş açısı değiştiğinde, birim alana düşen ışık enerjisi nasıl değişir?',
    independent: {
      label: 'Işığın yüzeyle yaptığı açı',
      note: 'Feneri ben eğiyorum: 90°, 60°, 45°, 30°',
    },
    setup: {
      label: 'Sabit uzaklıktaki fener ve kareli yüzey',
      note: 'Aydınlanan kare sayısını sayarız',
    },
    dependent: {
      label: 'Aydınlanan alan ve bir kareye düşen ışık',
      note: 'Ölçtüğüm: kaç kare aydınlandı?',
    },
    controlled: [
      'Fenerin gücü ve pil durumu',
      'Fener ile yüzey arasındaki uzaklık',
      'Odanın karartılmış olması',
      'Yüzeyin cinsi ve rengi',
    ],
    caption:
      'Fenerin uzaklığı bilerek sabit tutulur. Böylece sonuçtaki değişimin tek olası sebebi açı olur — bu, deneyin kanıt değeri taşımasını sağlar.',
  },

  experiment: {
    title: 'Deney düzeneği: dört açı, dört ölçüm',
    intro:
      'Bu deney sınıfta beş dakikada kurulur ve kazanımın c maddesini doğrudan ölçer. Adımların sırası, kontrol edilen değişkenleri korumak için önemlidir.',
    steps: [
      { title: '1. Yüzeyi hazırla', body: 'Masaya kareli bir kâğıt serilir. Kareler eşit büyüklükte olmalıdır; aydınlanan kare sayısını sayarak alanı ölçeceğiz.' },
      { title: '2. Uzaklığı sabitle', body: 'Fener, yüzeyden belirli bir yükseklikte (örneğin 30 cm) bir tutacağa sabitlenir. Bu uzaklık deney boyunca hiç değişmeyecek.' },
      { title: '3. Odayı karart', body: 'Ortam ışığı ölçümü bozar. Karartma, kontrol edilen bir değişkendir; deneyin her ayağında aynı olmalıdır.' },
      { title: '4. Açıyı değiştir ve say', body: 'Fener sırasıyla 90°, 60°, 45° ve 30° açıyla tutulur. Her açıda aydınlanan kare sayısı sayılır ve kaydedilir.' },
      { title: '5. Birim kareye düşen ışığı hesapla', body: 'Fenerin toplam ışığı sabit olduğu için, bu ışığın aydınlanan kare sayısına bölünmesi bir kareye düşen ışığı verir. Alan büyüdükçe bu değer küçülür.' },
      { title: '6. Sonucu modelle karşılaştır', body: 'Elde edilen değerler, Dünya’nın dönük ve dönük olmayan yarım küreleri için beklediğimiz yönle uyuşuyor mu? Uyuşuyorsa model deneyle desteklenmiş olur.' },
    ],
    takeaway: 'Deneyde Güneş’e uzaklık hiç değişmedi; yalnız açı değişti ve sonuç değişti.',
  },

  dataTable: {
    title: 'Deney sonuçları: açı, aydınlanan alan ve bir kareye düşen ışık',
    columns: ['Işığın geliş açısı', 'Aydınlanan kare sayısı', 'Bir kareye düşen ışık (göreli)', 'Yorum'],
    rows: [
      ['90° (dik)', '10', '100', 'Işık en dar alana düşüyor; kare başına enerji en yüksek'],
      ['60°', '12', '83', 'Alan genişledi; kare başına enerji azaldı'],
      ['45°', '14', '71', 'Alan genişlemeyi sürdürüyor'],
      ['30° (çok eğik)', '20', '50', 'Aynı ışık iki kat alana yayıldı; kare başına enerji yarıya indi'],
    ],
    caption:
      'Fenerin toplam ışığı her ölçümde aynıdır (1.000 göreli birim kabul edilmiştir); değerler yuvarlanmıştır. Tablo tek bir ilişkiyi gösteriyor: açı küçüldükçe alan büyür, alan büyüdükçe bir kareye düşen enerji azalır.',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-mevsim-eksen-yonu',
      title: 'Eksenin yönü neden sabit kalıyor?',
      lead: 'Mevsim döngüsünün sırrı eğikliğin kendisinde değil, eğikliğin yönünün değişmemesindedir.',
      blocks: [
        {
          id: 'lgs-fen-mevsim-yon-anlatim',
          type: 'prose',
          body: `Eksen eğik olsa ama yönü sürekli değişse ne olurdu? Dünya yolun her yerindeyken aynı yarım küreyi Güneş’e dönük tutabilirdi; o zaman bir yarım küre sürekli yaz, öteki sürekli kış yaşardı. Mevsim **döngüsü** oluşmazdı.

Oysa eksen, Dünya Güneş çevresinde dolanırken hep **aynı yönü** gösterir. Bunu şöyle canlandırabilirsin: elindeki bir kalemi hafifçe eğik tutup masanın çevresinde yürü. Kalem hep aynı yöne bakmaya devam eder; ama sen masanın öteki tarafına geçtiğinde kalemin masaya göre durumu değişmiştir.

Dünya için de aynısı geçerlidir. Yolun bir tarafındayken eksenin üst ucu Güneş’e doğru eğik olur: **Kuzey Yarım Küre** Güneş’e daha dönüktür. Dünya yolun karşı tarafına geçtiğinde eksen hâlâ aynı yöne bakmaktadır; ama artık üst uç Güneş’ten uzağa bakmaktadır. Şimdi **Güney Yarım Küre** daha dönüktür.

Bu iki uç konumun arasında, her iki yarım kürenin de eşit ölçüde aydınlandığı konumlar bulunur. O dönemlerde iki yarım kürede de ara mevsimler yaşanır.

Bir not: programın konu/kavram listesinde **belirli tarihlerin ezberi yoktur.** Liste şu kavramları sayar: Dünya’nın dönme ekseni, dolanma düzlemi, ısı enerjisi, mevsimler. Yani bu konuda senden istenen şey “21 Aralık’ta ne olur?” sorusunun ezberi değil, **modelden tahmin üretebilmendir.** Modeli kurduğunda tarih zaten gerekmez: sana Dünya’nın yol üzerindeki konumu verildiğinde hangi yarım kürede hangi mevsimin yaşandığını söyleyebilirsin.

Son bir uyarı: eksenin eğikliği yaklaşık 23,5 derecedir ve bu sayı bir ezber değil, eğikliğin büyüklüğünü anlatan bir ölçüdür. Sayıyı hatırlamasan da modelin çalışır; ama eğikliğin **var olduğunu** ve **yönünün değişmediğini** bilmen zorunludur.`,
        },
        {
          id: 'lgs-fen-mevsim-yon-tablo',
          type: 'table',
          interactive: true,
          title: 'Dünya yol üzerinde ilerledikçe ne değişiyor?',
          columns: ['Dünya’nın konumu', 'Eksenin üst ucu', 'Kuzey Yarım Küre', 'Güney Yarım Küre'],
          rows: [
            ['Yolun bir ucu', 'Güneş’e doğru eğik', 'Işık dik gelir · yaz', 'Işık eğik gelir · kış'],
            ['Ara konum', 'Yana bakar', 'Ara mevsim', 'Ara mevsim'],
            ['Yolun karşı ucu', 'Güneş’ten uzağa eğik', 'Işık eğik gelir · kış', 'Işık dik gelir · yaz'],
            ['Öteki ara konum', 'Yana bakar', 'Ara mevsim', 'Ara mevsim'],
            ['Her konumda', 'Yön hiç değişmez', '—', '—'],
          ],
          caption:
            'Son satır tablonun anahtarıdır: değişen şey eksenin yönü değil, Dünya’nın yol üzerindeki konumudur.',
        },
        {
          id: 'lgs-fen-mevsim-yon-tuzak',
          type: 'trap',
          title: 'Eksen dik olsaydı ne olurdu sorusunu atlamak',
          wrong: 'Eksen eğikliği bir ayrıntıdır; mevsimler yine oluşurdu.',
          right: 'Eksen dik olsaydı, iki yarım küre de yıl boyunca Güneş’e aynı ölçüde dönük kalırdı; ışığın geliş açısı değişmez ve mevsimler oluşmazdı.',
          body: 'Bir nedenin gerçek neden olup olmadığını sınamanın yolu şudur: onu kaldır ve sonucun hâlâ oluşup oluşmadığına bak. Eksen eğikliğini kaldırdığımızda mevsim kalmıyor; demek ki gerçek neden budur.',
        },
        {
          id: 'lgs-fen-mevsim-yon-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Model kurmanın pratik ölçütü şudur: sana hiç sorulmamış bir durum verildiğinde cevap üretebiliyor musun? “Dünya yolun şu tarafındayken Güney Yarım Küre’de hangi mevsim yaşanır?” sorusuna ezber olmadan cevap verebiliyorsan model çalışıyordur.',
        },
      ],
    },

    {
      id: 'lgs-fen-mevsim-birim-yuzey',
      title: 'Aynı ışık, farklı alan: birim yüzeye düşen enerji',
      lead: 'Kazanım açıklamasının c maddesi tam olarak bunu ister. Deney verisini burada yorumlayacağız.',
      blocks: [
        {
          id: 'lgs-fen-mevsim-birim-anlatim',
          type: 'prose',
          body: `Bir el fenerini duvara dik tuttuğunda küçük ve parlak bir daire görürsün. Feneri eğdiğinde aynı ışık daha geniş, sönük bir leke hâline gelir. Fenerin gücü değişmedi, uzaklığı değişmedi; yalnız **açı** değişti.

Burada olan şey şudur: fenerden çıkan **toplam ışık enerjisi sabittir.** Bu enerji dar bir alana düşerse, o alanın her santimetrekaresine çok enerji düşer. Aynı enerji geniş bir alana yayılırsa, her santimetrekareye daha az enerji düşer.

İşte “birim yüzeye düşen enerji” bunu anlatır: bir metrekareye (ya da deneyimizde bir kareye) düşen enerji miktarı.

Deney tablomuz bu ilişkiyi sayılarla gösteriyor. Işık 90 derece ile, yani dik geldiğinde 10 kare aydınlanıyor ve bir kareye 100 birim ışık düşüyor. Açı 30 dereceye indiğinde aydınlanan alan 20 kareye çıkıyor ve bir kareye düşen ışık 50 birime iniyor: **alan iki katına çıkınca birim alana düşen enerji yarıya iniyor.**

Bu ters orantı, mevsimlerin oluşumunun ölçülebilir çekirdeğidir. Yaz yaşanan yarım kürede toprağın her metrekaresine daha çok enerji düşer; toprak daha çok ısınır, havayı daha çok ısıtır.

Aynı ilişkiyi günlük hayatta da görürsün. Kışın gölgeler uzundur, yazın kısadır. Gölgenin uzunluğu, ışığın geliş açısının doğrudan bir göstergesidir: ışık eğik geldiğinde gölge uzar. Yani her kış günü, dışarı çıktığında bu dersin kanıtını görüyorsun.

Son olarak bir ayrım: **enerji** ile **sıcaklık** aynı şey değildir. Yüzeye düşen enerji sıcaklığı doğurur ama aralarında zaman farkı vardır; toprak ve deniz ısınmak için zaman ister. Bu yüzden en sıcak günler, ışığın en dik geldiği günden biraz sonra yaşanır.`,
        },
        {
          id: 'lgs-fen-mevsim-birim-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Dik ışık ile eğik ışığı karşılaştır',
          columns: ['Dik gelen ışık', 'Eğik gelen ışık'],
          rows: [
            { label: 'Işığın yüzeyle açısı', values: ['90°’ye yakın', 'Küçük'] },
            { label: 'Toplam enerji', values: ['Aynı', 'Aynı'] },
            { label: 'Yayıldığı alan', values: ['Dar', 'Geniş'] },
            { label: 'Birim yüzeye düşen enerji', values: ['Çok', 'Az'] },
            { label: 'Gölge uzunluğu', values: ['Kısa', 'Uzun'] },
            { label: 'Yüzeyin ısınması', values: ['Fazla', 'Az'] },
          ],
          insight:
            'İkinci satır kritiktir: toplam enerji iki durumda da aynıdır. Değişen tek şey, o enerjinin kaç birim alana dağıldığıdır.',
        },
        {
          id: 'lgs-fen-mevsim-birim-tuzak',
          type: 'trap',
          title: 'Toplam enerji ile birim yüzeye düşen enerjiyi karıştırmak',
          wrong: 'Işık eğik geldiğinde Güneş daha az enerji gönderiyor.',
          right: 'Güneş aynı enerjiyi gönderiyor. Değişen şey, bu enerjinin ne kadar geniş bir alana yayıldığıdır.',
          body: 'Deneyde fenerin gücü hiç değiştirilmedi; yalnız açı değiştirildi ve bir kareye düşen ışık değişti. Bu, iki kavramın farkını doğrudan gösteren kanıttır.',
        },
        {
          id: 'lgs-fen-mevsim-birim-hafiza',
          type: 'memory',
          title: 'Tek cümlelik model',
          body: '**Aynı enerji, geniş alana yayılırsa birim alana az düşer.**',
        },
      ],
    },

    {
      id: 'lgs-fen-mevsim-ikinci-etki',
      title: 'Aynı sebebin ikinci sonucu: gündüz süresi',
      lead: 'Eksen eğikliği yalnız açıyı değil, gündüzün uzunluğunu da değiştirir. İkisi aynı yönde çalışır.',
      blocks: [
        {
          id: 'lgs-fen-mevsim-ikinci-anlatim',
          type: 'prose',
          body: `Yaz aylarında akşamların geç olduğunu, kışın ise erken karardığını fark etmişsindir. Bu da eksen eğikliğinin bir sonucudur.

Güneş’e dönük duran yarım kürede, Dünya kendi etrafında dönerken o bölge günün daha büyük bir bölümünü aydınlık tarafta geçirir. Yani **gündüz uzar.** Az dönük yarım kürede ise gündüz kısalır.

Bu ikinci etki, birincisiyle **aynı yönde** çalışır. Yaz yaşanan yarım kürede hem ışık daha dik gelir (birim yüzeye daha çok enerji düşer) hem de bu enerji daha uzun süre düşer. İki etki üst üste binince sıcaklık farkı belirginleşir.

Kazanım açıklaması **c** maddesinde birim yüzeye düşen enerjiyi öne çıkarır; gündüz süresi bu enerjinin ne kadar süre etkidiğini belirler. İkisini birlikte düşünmek, mevsim farkının neden bu kadar büyük olduğunu açıklar.

Şimdi modelden iki tahmin üretelim — kazanımın istediği şey tam olarak budur.

**Birinci tahmin: Ekvator çevresinde mevsim farkı az olmalıdır.** Çünkü Ekvator, Dünya yolun neresinde olursa olsun Güneş’e benzer bir açıyla bakar; ışığın geliş açısı yıl boyunca fazla değişmez. Gerçekten de Ekvator çevresinde sıcaklık yıl boyunca birbirine yakındır.

**İkinci tahmin: Kutuplara yaklaştıkça mevsim farkı büyümelidir.** Çünkü eksen eğikliğinin etkisi orada en güçlüdür; ışığın geliş açısı ve gündüz süresi yıl içinde çok daha fazla değişir. Gerçekten de kutuplara yakın bölgelerde yazın gündüz çok uzun, kışın çok kısadır.

İki tahmin de gözlemle uyuşuyor. Bir model, kendisinden türetilen tahminler gözlemle uyuştuğunda güçlenir. Bilimsel düşünmenin çalışma biçimi budur ve bu konuda senden istenen beceri de budur.`,
        },
        {
          id: 'lgs-fen-mevsim-ikinci-tablo',
          type: 'table',
          interactive: true,
          title: 'Modelden üretilen tahminler ve gözlemle karşılaştırma',
          columns: ['Bölge', 'Modelin tahmini', 'Gerekçe', 'Gözlem'],
          rows: [
            ['Ekvator çevresi', 'Mevsim farkı az olur', 'Işığın geliş açısı yıl boyunca az değişir', 'Sıcaklık yıl boyunca birbirine yakın'],
            ['Orta kuşak', 'Dört mevsim belirgin yaşanır', 'Açı ve gündüz süresi yıl içinde belirgin değişir', 'Belirgin mevsim döngüsü'],
            ['Kutuplara yakın bölgeler', 'Mevsim farkı en büyük olur', 'Eğikliğin etkisi burada en güçlüdür', 'Yazın çok uzun, kışın çok kısa gündüz'],
            ['Aynı enlem, iki yarım küre', 'Mevsimler zıt olur', 'Aynı anda biri dönük, öteki az dönüktür', 'Aralıkta biri yaz, öteki kış'],
          ],
          caption:
            'Dört satırda da önce model konuşuyor, sonra gözlem doğruluyor. Kazanımın istediği “tahminde bulunma” becerisi tam olarak budur.',
        },
        {
          id: 'lgs-fen-mevsim-ikinci-tuzak',
          type: 'trap',
          title: 'Gündüz süresini mevsimin tek sebebi sanmak',
          wrong: 'Yaz sıcak, çünkü gündüzler uzun.',
          right: 'Gündüz süresi etkilerden biridir; ama programın öne çıkardığı sebep ışığın **birim yüzeye düşen enerjisidir.** İkisi aynı sebepten doğar ve birlikte çalışır.',
          body: 'Yalnız gündüz süresiyle açıklarsan, aynı gündüz süresine sahip iki bölgede neden farklı sıcaklıklar olduğunu açıklayamazsın. Açı olmadan model eksik kalır.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Yanlış açıklamayı gözlemle çürüt',
      prompt:
        'Bir öğrenci şöyle diyor: “Aralık ayında hava soğuk, çünkü Dünya Güneş’ten uzaklaşmış.” Bu açıklamayı tek bir gözlemle nasıl çürütürsün?',
      steps: [
        { title: '1. Açıklamanın öngörüsünü yaz', body: 'Bu açıklama doğru olsaydı ne beklerdik? Uzaklık Dünya’nın tamamı için aynı olduğuna göre, **aynı anda bütün Dünya’da aynı mevsim** yaşanmasını beklerdik.' },
        { title: '2. Gözlemi getir', body: 'Aralık ayında Türkiye’de kış yaşanırken Avustralya’da yaz yaşanır. Aynı tarihte iki farklı mevsim var.' },
        { title: '3. Öngörü ile gözlemi karşılaştır', body: 'Öngörü “her yerde aynı mevsim” diyordu; gözlem “iki farklı mevsim” diyor. Öngörü ile gözlem çelişiyor.' },
        { title: '4. Sonucu yaz', body: 'Bir açıklama, gözlemle çeliştiğinde bırakılır. Öyleyse mevsimler Güneş’e uzaklıkla açıklanamaz.' },
        { title: '5. Doğru açıklamayı kur', body: 'Gözlemi açıklayabilen model şudur: eksen eğikliği yüzünden iki yarım küre Güneş’e aynı anda aynı ölçüde dönük olamaz; ışık birine dik, ötekine eğik gelir.' },
      ],
      answer:
        'Aynı tarihte iki yarım kürede iki farklı mevsim yaşanması, uzaklık açıklamasını çürütür; çünkü uzaklık iki yarım küre için de aynıdır.',
      takeaway:
        'Bir açıklamayı sınamanın yolu, onun öngörüsünü yazıp gözlemle karşılaştırmaktır.',
    },
    {
      title: 'Seviye 2 — Deney verisini yorumla',
      prompt:
        'Yukarıdaki deney tablosunda 90° açıda 10 kare, 30° açıda 20 kare aydınlanıyor. Bir kareye düşen ışık 100’den 50’ye iniyor. Bu iki satır arasındaki ilişkiyi açıkla ve mevsimlerle bağlantısını kur.',
      steps: [
        { title: '1. Neyin sabit olduğunu belirle', body: 'Fenerin gücü ve uzaklığı sabit. Demek ki yüzeye ulaşan **toplam ışık** iki ölçümde de aynı.' },
        { title: '2. Neyin değiştiğini belirle', body: 'Yalnız açı değişti: 90°’den 30°’ye indi. Bu, deneyin bağımsız değişkeni.' },
        { title: '3. Sonucu oku', body: 'Aydınlanan alan 10 kareden 20 kareye çıktı, yani iki katına. Bir kareye düşen ışık 100’den 50’ye indi, yani yarıya.' },
        { title: '4. İlişkiyi adlandır', body: 'Alan iki katına çıkınca birim alana düşen enerji yarıya iniyor. Aralarında ters bir ilişki var: alan büyüdükçe birim alana düşen enerji azalıyor.' },
        { title: '5. Mevsimlerle bağla', body: 'Güneş’e dönük yarım kürede ışık dike yakın gelir: 90° satırı gibi. Az dönük yarım kürede eğik gelir: 30° satırı gibi. Aynı Güneş, aynı uzaklık — farkı yalnız açı yaratıyor.' },
      ],
      answer:
        'Açı küçüldükçe aynı ışık daha geniş alana yayılır ve birim alana düşen enerji azalır. Mevsim farkının ölçülebilir sebebi budur.',
      takeaway:
        'Deneyde uzaklık hiç değişmedi. Sonucu değiştiren tek değişken açıydı; bu, deneyin kanıt değerini oluşturur.',
    },
    {
      title: 'Seviye 3 — Modelden tahmin üret',
      prompt:
        'Bir gözlemci, Güney Yarım Küre’de bir şehirde yaşıyor ve gölgelerin yıl içindeki en kısa hâlinde olduğunu, gündüzlerin de en uzun olduğunu görüyor. Aynı tarihte Kuzey Yarım Küre’deki bir şehirde hangi mevsim yaşanır? Gerekçeni zincirle kur.',
      steps: [
        { title: '1. Gözlemi modele çevir', body: 'Gölgelerin kısa olması, ışığın **dik** geldiğini gösterir. Gündüzün uzun olması da aynı yönü işaret eder: bu yarım küre Güneş’e dönük.' },
        { title: '2. Eksen kuralını uygula', body: 'Eksen eğikliğinin yönü değişmediği için iki yarım küre aynı anda aynı ölçüde dönük olamaz. Güney dönükse Kuzey daha az dönüktür.' },
        { title: '3. Açıyı türet', body: 'Kuzey Yarım Küre’de ışık eğik gelir. Eğik gelen ışık daha geniş alana yayılır.' },
        { title: '4. Enerjiyi türet', body: 'Alan genişlediği için birim yüzeye düşen enerji azalır; yüzey daha az ısınır.' },
        { title: '5. Mevsimi söyle ve kontrol et', body: 'Kuzey Yarım Küre’de kış yaşanır. Kontrol: gündüz süresi de kısa olmalı ve gölgeler uzun olmalı. İki beklenti de modelle uyumlu.' },
      ],
      answer:
        'Kuzey Yarım Küre’de kış yaşanır; çünkü Güney dönükken Kuzey’e ışık eğik gelir ve birim yüzeye düşen enerji azalır.',
      takeaway:
        'Kazanımın istediği beceri budur: verilen bir gözlemden modele geçip henüz söylenmemiş bir sonucu tahmin etmek.',
    },
  ],

  dailyLife: {
    title: 'Bu ilişki günlük hayatta nerede karşına çıkıyor?',
    body:
      'Işığın geliş açısı ile birim yüzeye düşen enerji arasındaki ilişki yalnız mevsimlerde değil, çevrende kurduğun pek çok şeyde iş görür. Aşağıdaki örneklerin hepsinde aynı model çalışır: aynı enerjiyi daha dar bir alana düşürmek.',
    links: [
      'Güneş panelleri düz değil, ışığı daha dik alacak açıyla yerleştirilir.',
      'Seralar, kış güneşini daha dik alacak biçimde konumlandırılır.',
      'Kışın gölgeler uzar, yazın kısalır — gölge uzunluğu geliş açısının göstergesidir.',
      'Dağ yamaçlarında güneşe dönük yüzler daha erken karsız kalır.',
      'Bir odada pencereye yakın yer, ışığı daha dik aldığı için daha çabuk ısınır.',
    ],
  },

  questionClue: {
    concept: 'mevsimlerin oluşumu sorusu',
    statement:
      'Soruda Dünya’nın yörüngesindeki konumları, bir el feneri deneyi ya da iki yarım küredeki sıcaklık farkı veriliyorsa, sorulan şey açı–enerji ilişkisidir.',
    clues: [
      'Dünya’nın yol üzerindeki farklı konumlarının gösterilmesi',
      'Aynı tarihte iki yarım küreden söz edilmesi',
      'El feneri, kareli kâğıt ya da aydınlanan alan verilmesi',
      'Gölge uzunluğu ya da gündüz süresinden söz edilmesi',
      'Seçeneklerde “Güneş’e uzaklık” ifadesinin bulunması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, uzaklık yanılgısına düşüp düşmediğini ölçüyor. Çözüm yolu zinciri kurmaktır: eksen eğikliği → geliş açısı → birim yüzeye düşen enerji → sıcaklık → mevsim.',
    boundary:
      'Bu ipuçlarını “gölge uzunsa kıştır” gibi bir kısayola çevirme. Gölge uzunluğu günün saatine göre de değişir; karar, hangi değişkenin sabit tutulduğuna bakılarak verilir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir. Kalıbı tanımak cevabı vermez; hangi zinciri kuracağını söyler.',
    patterns: [
      'Dünya’nın yörüngedeki konumu verilip hangi yarım kürede hangi mevsimin yaşandığının sorulması',
      'El feneri deneyinde bağımsız, bağımlı ve kontrol edilen değişkenlerin sorulması',
      'Aydınlanan alan ile birim alana düşen enerji arasındaki ilişkinin yorumlanması',
      'Uzaklık yanılgısını içeren bir öğrenci açıklamasının değerlendirilmesi',
      'Ekvator ve kutuplarda mevsim farkının neden değiştiğinin sorulması',
      'Gölge uzunluğundan ışığın geliş açısına ulaşılması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'El feneri deneyinde bir öğrenci açıyı değiştirirken feneri de yüzeye yaklaştırıyor. Deneyin sonucu neden güvenilmez olur?',
      hint: 'Aynı anda kaç değişken değişti?',
      answer:
        'Çünkü aynı anda iki değişken değişmiş oldu: açı ve uzaklık. Aydınlanan alan değiştiğinde bunun sebebinin açı mı uzaklık mı olduğunu söyleyemeyiz. Uzaklık bu deneyde **kontrol edilen** bir değişkendir ve sabit tutulmalıdır. Bir deneyin kanıt değeri, yalnız tek bir değişkenin değişmesinden gelir.',
    },
    {
      prompt:
        'Eksen eğikliği olmasaydı — yani eksen dolanma düzlemine dik olsaydı — mevsimler oluşur muydu? Gerekçeni zincirle kur.',
      hint: 'Zincirin ilk halkasını kaldır ve sonrakilere ne olduğuna bak.',
      answer:
        'Oluşmazdı. Eksen dik olsaydı iki yarım küre de yıl boyunca Güneş’e aynı ölçüde dönük kalırdı; ışığın geliş açısı yıl içinde değişmezdi. Açı değişmeyince birim yüzeye düşen enerji de değişmez, sıcaklık farkı ve mevsim döngüsü oluşmazdı. Zincirin ilk halkası kalkınca sonrakilerin hiçbiri gerçekleşmez.',
    },
    {
      prompt:
        'Bir öğrenci “Yaz aylarında Güneş daha çok enerji yayıyor.” diyor. Bu açıklama deney verisiyle uyuşuyor mu?',
      hint: 'Deneyde fenerin gücü değişti mi?',
      answer:
        'Uyuşmuyor. Deneyde fenerin gücü hiç değiştirilmedi; yalnız açı değiştirildi ve bir kareye düşen ışık değişti. Bu, toplam enerjinin değişmeden de birim yüzeye düşen enerjinin değişebileceğini gösterir. Güneş’in yaydığı toplam enerji değil, o enerjinin kaç birim alana dağıldığı belirleyicidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, model kurma ve tahmin',
    body:
      'Kazanımın fiili “tahminlerde bulunur” biçimindedir; yani ezberlenmiş bir cümle değil, bir modelden sonuç üretme becerisi ölçülür. MEB’in merkezî sınav kılavuzu da soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma, problem çözme, analiz yapma ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: sana bir konum, bir deney ya da bir gözlem verilir; senden zinciri kurup sonucu söylemen istenir.',
    measures: [
      'Uzaklık yanılgısını bir gözlemle çürütebilme',
      'Eksen eğikliğinden mevsime uzanan zinciri kurabilme',
      'Işığın geliş açısı ile birim yüzeye düşen enerji ilişkisini açıklayabilme',
      'Bir deneyde bağımsız, bağımlı ve kontrol edilen değişkenleri ayırabilme',
      'Deney verisini okuyup ilişkiyi adlandırabilme',
      'Modelden yeni bir durum için tahmin üretebilme',
    ],
  },

  simulationTable: {
    title: 'Bir öğrencinin el feneri deneyi kaydı',
    columns: ['Deneme', 'Fener–yüzey uzaklığı', 'Fenerin açısı', 'Aydınlanan kare sayısı'],
    rows: [
      ['1', '30 cm', '90°', '10'],
      ['2', '30 cm', '60°', '12'],
      ['3', '30 cm', '45°', '14'],
      ['4', '30 cm', '30°', '20'],
    ],
    caption: 'Oda karartılmış, aynı fener ve aynı kareli kâğıt kullanılmıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün deney kaydı',
    passage: `Bir öğrenci, mevsimlerin oluşumunu açıklamak için yukarıdaki deneyi kuruyor. Fenerin toplam ışığı her denemede aynıdır. Öğrenci dört denemenin sonunda şu notu yazıyor:

“Fenerin yüzeye olan uzaklığını hiç değiştirmedim. Yalnız fenerin açısını değiştirdim ve aydınlanan kare sayısını saydım. Kare sayısı arttıkça bir kareye düşen ışığın azaldığını gördüm.”`,
    question: 'Bu deneyle ilgili aşağıdakilerden hangisi söylenemez?',
    options: [
      {
        text: 'Deneyin bağımsız değişkeni fenerin yüzeyle yaptığı açıdır',
        explanation:
          'Söylenebilir. Öğrencinin bilerek değiştirdiği tek şey açıdır: 90°, 60°, 45°, 30°. Bağımsız değişkenin tanımı zaten budur — araştırmacının değiştirdiği değişken.',
      },
      {
        text: 'Fener ile yüzey arasındaki uzaklık kontrol edilen bir değişkendir',
        explanation:
          'Söylenebilir. Tabloda dört denemede de uzaklık 30 cm olarak sabit tutulmuş ve öğrenci bunu notunda ayrıca belirtmiş. Sabit tutulan değişkenler kontrol edilen değişkenlerdir.',
      },
      {
        text: 'Açı küçüldükçe aynı ışık daha geniş bir alana yayılmaktadır',
        explanation:
          'Söylenebilir. Tablo bunu doğrudan gösteriyor: 90°’de 10 kare, 30°’de 20 kare aydınlanıyor. Toplam ışık sabit olduğuna göre aynı enerji daha geniş alana dağılmıştır.',
      },
      {
        text: 'Güneş yaz aylarında kışa göre daha fazla enerji yaymaktadır',
        explanation:
          'Doğru cevap — söylenemez. Deneyde fenerin gücü hiç değiştirilmedi; deney, kaynağın yaydığı enerji hakkında hiçbir ölçüm yapmıyor. Üstelik deneyin gösterdiği şey tam tersidir: toplam enerji sabitken bile birim alana düşen enerji değişebilir.',
      },
      {
        text: 'Bir kareye düşen ışık miktarı, aydınlanan alanla ters yönde değişmektedir',
        explanation:
          'Söylenebilir. Kare sayısı 10’dan 20’ye çıkarken bir kareye düşen ışık azalmaktadır; öğrenci bunu notunda da yazmış. Toplam ışık sabit olduğu için alan ile birim alana düşen enerji ters yönde değişir.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “söylenemez” diyor; yani dört seçeneğin deneyden çıktığını gösterip çıkmayanı işaretleyeceğim. Önce deneyin çerçevesini okuyorum: neyi değiştirdi (açı), neyi sabit tuttu (uzaklık, fener, kâğıt, karanlık), neyi ölçtü (aydınlanan kare sayısı).',
    critical_point:
      'Kritik nokta, dördüncü seçeneğin konuyla ilgili ve tanıdık bir cümle olması. Ama deney, Güneş’in yaydığı enerjiyi ölçmüyor; ölçtüğü şey aynı enerjinin nasıl dağıldığı. Bir deneyden ancak onun ölçtüğü şey hakkında sonuç çıkarılabilir.',
    takeaway:
      'Bir deneyden çıkarılabilecek sonuçlar, o deneyin ölçtüğü değişkenlerle sınırlıdır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Mevsimlerin oluşumunun temel sebebi aşağıdakilerden hangisidir?',
      options: [
        'Dünya’nın Güneş’e olan uzaklığının yıl içinde değişmesi',
        'Dünya’nın dönme ekseninin dolanma düzlemine eğik olması',
        'Güneş’in yaydığı enerji miktarının mevsimlere göre değişmesi',
        'Dünya’nın kendi etrafındaki dönüş hızının değişmesi',
      ],
      answer_index: 1,
      explanation:
        'Mevsimleri doğuran zincirin ilk halkası eksen eğikliğidir: eksen eğik olduğu ve yönü değişmediği için iki yarım küre Güneş’e aynı anda aynı ölçüde dönük olamaz. Uzaklık açıklaması, aynı tarihte iki yarım kürede farklı mevsim yaşanmasıyla çürütülür. Güneş’in yaydığı enerji mevsime göre değişmez; Dünya’nın dönüş hızı da mevsimle ilgili değildir.',
    },
    {
      purpose: 'apply',
      question:
        'El feneri deneyinde fenerin açısı 90°’den 30°’ye indirildiğinde aydınlanan alan iki katına çıkıyor. Bu durumda bir kareye düşen ışık için ne söylenebilir?',
      options: [
        'İki katına çıkar',
        'Değişmez',
        'Yarıya iner',
        'Dört katına çıkar',
      ],
      answer_index: 2,
      explanation:
        'Fenerin toplam ışığı sabittir. Aynı toplam enerji iki kat geniş bir alana yayılırsa, birim alana düşen enerji yarıya iner. Tablo da bunu gösterir: 90°’de bir kareye 100 birim, 30°’de 50 birim düşmektedir. Alan ile birim alana düşen enerji ters yönde değişir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Kışın gölgeler uzun olduğu için hava soğuktur.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Gölge uzunluğunu sebep sanmak; oysa o da aynı sebebin sonucudur',
        'Gölge uzunluğunun kışın uzadığını yanlış bilmek',
        'Işığın geliş açısını hesaba katmamak',
        'Gündüz süresini gözden kaçırmak',
      ],
      answer_index: 0,
      explanation:
        'Gölgenin uzun olması havanın soğumasına yol açmaz; ikisi de aynı sebebin — ışığın eğik gelmesinin — sonucudur. Işık eğik geldiğinde hem gölgeler uzar hem birim yüzeye düşen enerji azalır. Öğrenci iki sonucu birbirine sebep-sonuç ilişkisiyle bağlamıştır; oysa aralarındaki bağ ortak bir sebepten gelir.',
    },
  ],

  summary: [
    'Mevsimler Güneş’e uzaklıkla açıklanamaz: aynı tarihte iki yarım kürede iki farklı mevsim yaşanır.',
    'Dünya’nın kutuplardan geçen bir dönme ekseni vardır.',
    'Bu eksen, Dünya’nın Güneş çevresindeki dolanma düzlemine dik değildir; yaklaşık 23,5 derece eğiktir.',
    'Eğikliğin **yönü** yıl boyunca değişmez; değişen şey Dünya’nın yol üzerindeki konumudur.',
    'Güneş’e daha dönük yarım kürede ışık yüzeye daha dik gelir.',
    'Dik gelen ışık dar bir alana düşer; birim yüzeye düşen enerji artar.',
    'Eğik gelen ışıkta aynı enerji geniş alana yayılır; birim yüzeye düşen enerji azalır.',
    'Toplam enerji ile birim yüzeye düşen enerji farklı şeylerdir; deneyde fenerin gücü hiç değişmedi.',
    'Gündüz süresi de aynı sebebin sonucudur ve açıyla aynı yönde çalışır.',
    'Modelden tahmin üretilebilir: Ekvator’da mevsim farkı az, kutuplara doğru büyüktür.',
  ],

  next: [
    'İklim ve Hava Olayları: Aynı Şey Değil (F.8.1.2.1)',
    'DNA’nın Yapısı: Nükleotidden Kromozoma (F.8.2.1.1)',
    'Katı Basıncı ve Değişkenleri (F.8.3.1.1)',
  ],
})

export default lesson
