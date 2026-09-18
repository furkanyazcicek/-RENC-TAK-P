import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.5 Basit Makineler · tek ders (ünitenin tamamı)
 * Kazanım : F.8.5.1.1 · F.8.5.1.2
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.5.1.1 → a) Sabit makara, hareketli makara, palanga, kaldıraç, eğik
 *                  düzlem ve çıkrık üzerinde durulur.
 *               b) Dişli çark, vida ve kasnağın basit makine olduğu
 *                  görsellerle belirtilir, ayrıntıya girilmez.
 *               c) İşten kazanç olmadığı vurgulanır.
 *               ç) Matematiksel bağıntılara girilmez.
 *   F.8.5.1.2 → Tasarım önce çizimle ifade edilir; şartlar uygunsa üç
 *               boyutlu modele dönüştürülür.
 *
 * Bu yüzden derste kuvvet–yol bağıntısı, moment ya da verim formülü
 * YAZILMAZ. İlişkiler nitel kurulur: "kuvvetten kazanç varsa yoldan
 * kayıp vardır". Gözlem tablolarındaki sayılar ölçüm örneğidir, bağıntı
 * değildir. Dişli, vida ve kasnak için ayrı bir şema yazıldı ve ayrıntıya
 * girilmedi. Kaldıraç türleri için ayrı bir şema yazıldı.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-basit-makineler',
  topic: 'Basit Makineler',
  order: 1,
  title: 'Basit Makineler: Kazanç Neyin Kazancı?',
  subtitle:
    'Basit makineler işi azaltmaz, kolaylaştırır. Kuvvetten kazandığını yoldan ödersin.',
  minutes: 46,
  kazanimlar: ['F.8.5.1.1', 'F.8.5.1.2'],
  prerequisites: [
    { topic: 'Kuvvet ve fiziksel anlamda iş (7. sınıf)', why: 'İşten kazanç olmadığını anlamak için fiziksel anlamda işin ne olduğunu bilmek gerekir.' },
    { topic: 'Katı Basıncı: Ağırlık mı, Yüzey mi?', why: 'Değişken kontrolü kuralı bu dersin deneyinde de kullanılır.' },
  ],
  outcomes: [
    'Basit makinelerin sağladığı avantajları örneklerle açıklayabileceksin.',
    'Sabit makara, hareketli makara, palanga, kaldıraç, eğik düzlem ve çıkrığı tanıyabileceksin.',
    'Kaldıracın türünü destek, yük ve kuvvetin yerleşiminden belirleyebileceksin.',
    'Basit makinelerde işten kazanç olmadığını gerekçesiyle açıklayabileceksin.',
    'Günlük bir iş için basit makine kullanan bir düzenek tasarlayabileceksin.',
  ],

  opening: {
    title: 'Aynı kova, iki yol',
    lead: 'Kuyudan bir kova su çekmek istiyorsun. İpi doğrudan çekmek mi kolay, bir çıkrığın kolunu çevirmek mi?',
    body: `Eski bir köy evinin avlusundasın. Kuyunun başında bir kova ve ip var. İpi elinle doğrudan çekersen dolu kovayı yukarı çıkarmak zordur; kolların çabuk yorulur.

Kuyunun üzerinde bir de **çıkrık** var: ipin sarıldığı bir silindir ve ona bağlı uzun bir kol. Kolu çevirdiğinde kova yavaş yavaş yukarı çıkar ve çok daha **az kuvvet** harcarsın.

Ama dikkat et: kolu **birçok tur** çevirmen gerekir. Elin, kovanın yükseldiği mesafeden çok daha uzun bir yol alır.

İşte basit makinelerin bütün hikâyesi bu gözlemde saklı:

**Basit makine sana kuvvetten kazandırıyorsa, karşılığında yoldan kaybettirir.**

Yani yaptığın iş azalmaz; yalnız **kolaylaşır.** Program bu noktanın özellikle vurgulanmasını ister: basit makinelerde **işten kazanç yoktur.**

Bu derste altı basit makineyi tanıyacağız: **sabit makara, hareketli makara, palanga, kaldıraç, eğik düzlem ve çıkrık.** Her birinin sana hangi avantajı sağladığını göreceğiz. Ardından **dişli çark, vida ve kasnağın** da birer basit makine olduğunu tanıyacağız — programın istediği gibi, ayrıntıya girmeden.

Son olarak ikinci kazanımın istediğini yapacağız: günlük hayattaki bir işi kolaylaştıracak bir **düzenek tasarlayacağız.**

Bir kapsam notu: *program bu konuda **matematiksel bağıntılara girilmemesini** ister.* Bu yüzden bu derste formül yazmayacağız. Senden istenen, her makinenin sağladığı avantajı ve kuvvet–yol ilişkisini **yönüyle** bilmek.`,
  },

  concepts: [
    {
      term: 'Basit makine',
      body: 'Kuvvetin büyüklüğünü, yönünü ya da uygulandığı yeri değiştirerek iş yapmayı kolaylaştıran araçtır.',
    },
    {
      term: 'Kuvvetten kazanç',
      body: 'Bir yükü, yükün ağırlığından **daha küçük** bir kuvvetle kaldırabilmek ya da hareket ettirebilmektir.',
    },
    {
      term: 'Yoldan kayıp',
      body: 'Kuvvetten kazanç sağlandığında kuvvetin **daha uzun bir yol** boyunca uygulanması gerekmesidir. Kuvvetten kazanç ile yoldan kayıp her zaman birlikte gelir.',
    },
    {
      term: 'İşten kazanç',
      body: 'Basit makinelerde **işten kazanç yoktur.** Makine kuvveti azaltabilir, yönünü değiştirebilir; ama yapılması gereken işi azaltamaz.',
    },
    {
      term: 'Makara',
      body: 'Çevresinde ip geçen bir oluk bulunan, kendi ekseni etrafında dönebilen tekerlektir. **Sabit makara** yerinde durur; **hareketli makara** yükle birlikte hareket eder.',
    },
    {
      term: 'Palanga',
      body: 'Sabit ve hareketli makaraların birlikte kullanıldığı düzenektir. Hem kuvvetten kazanç hem kuvvetin yönünü değiştirme avantajı sağlar.',
    },
    {
      term: 'Kaldıraç',
      body: 'Bir destek noktası etrafında dönebilen sert bir çubuktur. Üç öğesi vardır: **destek noktası, yük ve kuvvet.**',
    },
    {
      term: 'Eğik düzlem ve çıkrık',
      body: '**Eğik düzlem** yükü dikey kaldırmak yerine eğimli bir yüzey üzerinde yukarı taşımayı sağlar. **Çıkrık** bir silindire bağlı kolun çevrilmesiyle yük kaldıran düzenektir.',
    },
  ],

  why: {
    question: 'Makine kuvveti azaltıyorsa neden işi de azaltmıyor?',
    body: `Çünkü fiziksel anlamda iş, yalnız kuvvete değil, kuvvetin **uygulandığı yola** da bağlıdır. 7. sınıfta öğrendiğin gibi: bir kuvvet bir cismi kendi doğrultusunda hareket ettirdiğinde iş yapılmış olur. Kuvvet ne kadar büyük ve yol ne kadar uzunsa yapılan iş o kadar büyüktür.

Şimdi bir yükü yerden bir masanın üstüne çıkarmak istediğini düşün. Yükü masaya çıkarmak için yapılması gereken iş, yükün ağırlığı ve masanın yüksekliğiyle belirlenir. Bunu nasıl yaptığın bu işi değiştirmez.

**Yol 1 — Doğrudan kaldırmak.** Yükü kucaklayıp dikey olarak kaldırırsın. Kuvvetin büyüktür (yükün ağırlığı kadar), ama yolun kısadır (masanın yüksekliği kadar).

**Yol 2 — Bir rampa kullanmak.** Yükü eğimli bir tahta üzerinde itersin. Kuvvetin küçüktür; ama yolun uzundur (rampanın boyu kadar).

İki yolda da yük aynı yüksekliğe çıktı. Yapılan iş aynıdır. Değişen tek şey, **işin nasıl paylaştırıldığıdır:** birinde büyük kuvvet ve kısa yol, öbüründe küçük kuvvet ve uzun yol.

İşte basit makinelerin sırrı budur. Makine işi **azaltmaz;** onu **daha kolay bir biçime** sokar. Kuvvetten kazandırır, yoldan kaybettirir. Ya da tersi: bazı makineler kuvvetten kaybettirir ama yoldan (ve hızdan) kazandırır.

Gerçek hayatta durum biraz daha zordur: sürtünme yüzünden makineyle yapılan iş, doğrudan yapılan işten bir miktar **fazla** olur. Yani makine işi azaltmak şöyle dursun, sürtünme yüzünden biraz artırır. Buna rağmen makineleri kullanırız; çünkü küçük bir kuvvetle büyük bir yükü taşıyabilmek ya da kuvvetin yönünü değiştirebilmek işi **kolaylaştırır.**

Basit makinelerin sağladığı avantajları dörde ayırabilirsin:

1. **Kuvvetten kazanç:** daha küçük kuvvetle iş görmek.
2. **Yön değiştirme:** kuvveti daha rahat bir yönde uygulamak (ör. aşağı çekerek yük kaldırmak).
3. **Yoldan ya da hızdan kazanç:** küçük bir hareketle uçta büyük bir hareket elde etmek.
4. **İş kolaylığı ve güvenlik:** işi daha rahat ve güvenli yapmak.

*Kapsam notu: program bu ilişkiler için bağıntı kullanılmamasını ister; bu yüzden kuvvet ile yolun ilişkisini yönüyle kurduk.*`,
  },

  mechanism: {
    title: 'Bir basit makine nasıl çalışır?',
    lead: 'Her basit makine aynı mantıkla çalışır; altı adımda izleyelim.',
    intro: 'Aşağıdaki zincir, basit bir makinenin işi nasıl kolaylaştırdığını gösterir.',
    steps: [
      {
        title: '1. Yapılacak iş bellidir',
        body: 'Bir yükü belli bir yüksekliğe çıkarmak ya da belli bir mesafe taşımak gerekir. Bu işi makine değiştiremez.',
      },
      {
        title: '2. Makine kuvveti yeniden düzenler',
        body: 'Makine kuvvetin büyüklüğünü, yönünü ya da uygulandığı yeri değiştirir.',
      },
      {
        title: '3. Kuvvet azalıyorsa yol uzar',
        body: 'Makine uygulanması gereken kuvveti azaltıyorsa, bu kuvvet daha uzun bir yol boyunca uygulanmak zorundadır.',
      },
      {
        title: '4. Kuvvet artıyorsa yol kısalır',
        body: 'Bazı makineler daha büyük kuvvet ister ama uçta daha uzun ve hızlı bir hareket sağlar. Bu da bir avantajdır.',
      },
      {
        title: '5. Sürtünme işi biraz artırır',
        body: 'Gerçek makinelerde sürtünme olduğu için makineyle yapılan iş, doğrudan yapılan işten biraz fazla olur.',
      },
      {
        title: '6. Sonuç: iş kolaylaşır, azalmaz',
        body: 'Makine işten kazanç sağlamaz; ama işi insanın yapabileceği bir biçime sokar. Avantaj buradadır.',
      },
    ],
    takeaway:
      'Zincirin kalbi 3. adımdır: kuvvetten kazanç ile yoldan kayıp aynı madalyonun iki yüzüdür.',
  },

  comparison: {
    title: 'Altı basit makine, altı avantaj',
    columns: ['Kuvvetten kazanç', 'Yön değiştirme', 'Günlük örnek'],
    rows: [
      { label: 'Sabit makara', values: ['Sağlamaz', 'Sağlar', 'Bayrak direği, perde ipi'] },
      { label: 'Hareketli makara', values: ['Sağlar', 'Sağlamaz', 'İnşaatta yük kaldırma düzenekleri'] },
      { label: 'Palanga', values: ['Sağlar', 'Sağlar', 'Vinçler, yelkenli ip düzenekleri'] },
      { label: 'Kaldıraç', values: ['Türüne göre sağlar ya da sağlamaz', 'Türüne göre değişir', 'Tahterevalli, el arabası, cımbız'] },
      { label: 'Eğik düzlem', values: ['Sağlar', 'Kuvveti eğik yüzey boyunca uygulatır', 'Rampa, dolambaçlı dağ yolu'] },
      { label: 'Çıkrık', values: ['Sağlar', 'Döndürme hareketine çevirir', 'Kuyu çıkrığı, kapı kolu, direksiyon'] },
    ],
    insight:
      'Tabloda “işten kazanç” diye bir sütun yok; çünkü hiçbir satırda işten kazanç yoktur. Kuvvetten kazanç sağlayan her makinede yoldan kayıp vardır.',
  },

  traps: [
    {
      title: 'Basit makinelerin işi azalttığını sanmak',
      wrong: 'Hareketli makara kullandığımda daha az kuvvet harcıyorum; demek ki daha az iş yapıyorum.',
      right: 'Kuvvet azalır ama ipi **daha uzun** çekersin. Yapılan iş azalmaz; basit makinelerde **işten kazanç yoktur.**',
      body: 'Program bu noktanın vurgulanmasını açıkça ister. Sürtünme hesaba katıldığında makineyle yapılan iş doğrudan yapılan işten biraz fazladır bile.',
    },
    {
      title: 'Sabit makaranın kuvvetten kazanç sağladığını sanmak',
      wrong: 'Sabit makara kullanınca yük daha hafif gelir.',
      right: 'Sabit makara **kuvvetten kazanç sağlamaz**; yalnız kuvvetin **yönünü** değiştirir. Yükü aşağı doğru çekerek kaldırmanı sağlar.',
      body: 'Aşağı doğru çekmek, kendi ağırlığını da kullanabildiğin için daha rahattır. Bu bir kolaylıktır ama kuvvetten kazanç değildir.',
    },
    {
      title: 'Her kaldıracın kuvvetten kazanç sağladığını sanmak',
      wrong: 'Kaldıraç her zaman daha az kuvvetle iş yapmayı sağlar.',
      right: 'Kaldıracın kuvvetten kazanç sağlayıp sağlamadığı **destek noktasının yerine** bağlıdır. Kuvvetin ortada olduğu kaldıraçlar (cımbız, maşa) kuvvetten kazanç sağlamaz; yoldan ve hızdan kazandırır.',
      body: 'Kaldıraç sorularında önce türü belirle: ortada ne duruyor? Destek mi, yük mü, kuvvet mi?',
    },
    {
      title: 'Eğik düzlemde eğimi artırmanın işi kolaylaştıracağını sanmak',
      wrong: 'Rampa ne kadar dik olursa yükü o kadar kolay çıkarırım; çünkü yol kısalır.',
      right: 'Rampa dikleştikçe yol kısalır ama gereken kuvvet **artar.** Kuvveti azaltmak için rampanın **daha uzun ve daha az eğimli** olması gerekir.',
      body: 'Dağ yollarının dolambaçlı yapılmasının nedeni budur: yol uzar, ama araçların tırmanması için gereken kuvvet azalır.',
    },
  ],

  variables: {
    title: 'Deneyle keşfet: destek noktasının yeri neyi değiştirir?',
    lead:
      'Kaldıraçta tek bir değişkeni değiştirip sonucu ölçelim. Bu, kaldıracın neden bazen kuvvetten kazandırıp bazen kaybettirdiğini gösterir.',
    question: 'Destek noktası yüke yaklaştırıldığında yükü dengelemek için gereken kuvvet değişir mi?',
    independent: {
      label: 'Destek noktasının yüke uzaklığı',
      note: 'Ben değiştiriyorum: yüke yakın / ortada / kuvvete yakın',
    },
    setup: {
      label: 'Cetvel kaldıraç ve dinamometre',
      note: 'Yük bir uca asılır, öbür uçtan dinamometreyle çekilir',
    },
    dependent: {
      label: 'Dengeyi sağlayan kuvvet',
      note: 'Ölçtüğüm: dinamometrenin gösterdiği değer',
    },
    controlled: [
      'Yükün ağırlığı (aynı yük)',
      'Kullanılan çubuk (aynı cetvel)',
      'Yükün ve kuvvetin çubuktaki yeri (iki uç)',
      'Dinamometre ve okuma yöntemi',
    ],
    caption:
      'Yük ve çubuk bilerek sabit tutulur. Böylece dinamometredeki değerin değişmesinin tek olası nedeni destek noktasının yeridir.',
  },

  experiment: {
    title: 'Kaldıraç ve makara deneyleri',
    intro:
      'İki deney ayrı ayrı yapılır. Birincisi kaldıraçta destek noktasının, ikincisi makara türünün etkisini gösterir.',
    steps: [
      { title: '1. Kaldıracı kur', body: 'Bir cetvel, ortasından ya da farklı noktalarından bir destek üzerine konur. Cetvelin bir ucuna yük asılır.' },
      { title: '2. Destek yüke yakınken ölç', body: 'Destek yüke yakın yerleştirilir; öbür uçtan dinamometreyle çekilerek dengeyi sağlayan kuvvet okunur.' },
      { title: '3. Desteği kaydır ve tekrar ölç', body: 'Destek önce ortaya, sonra kuvvete yakın bir yere kaydırılır; her konumda kuvvet ölçülür. Yük değiştirilmez.' },
      { title: '4. Makara deneyini kur', body: 'Aynı yük önce doğrudan, sonra sabit makarayla, sonra hareketli makarayla ve son olarak palangayla kaldırılır.' },
      { title: '5. Kuvveti ve ip uzunluğunu kaydet', body: 'Her düzenekte dinamometrenin gösterdiği kuvvet ve yük belli bir yüksekliğe çıkarken çekilen ipin uzunluğu kaydedilir.' },
      { title: '6. İki deneyi ayrı ayrı yorumla', body: 'Kaldıraç deneyi destek noktasının etkisini, makara deneyi kuvvetten kazanç ile yoldan kayıp arasındaki ilişkiyi gösterir.' },
    ],
    takeaway:
      'Makara deneyinde kuvvet azaldıkça çekilen ipin uzadığını göreceksin. Bu, işten kazanç olmadığının gözlenebilir kanıtıdır.',
  },

  dataTable: {
    title: 'Gözlem kaydı: aynı yük (10 N), farklı düzenekler',
    columns: ['Düzenek', 'Dinamometredeki kuvvet', 'Yük 1 m yükselirken çekilen ip', 'Kuvvetin yönü'],
    rows: [
      ['Doğrudan kaldırma', '10 N', '1 m', 'Yukarı'],
      ['Sabit makara', 'Yaklaşık 10 N', '1 m', 'Aşağı (yön değişti)'],
      ['Hareketli makara', 'Yaklaşık 5 N', '2 m', 'Yukarı'],
      ['Palanga (bir sabit, bir hareketli)', 'Yaklaşık 5 N', '2 m', 'Aşağı (yön değişti)'],
    ],
    caption:
      'Kuvvetin azaldığı satırlarda çekilen ip uzamıştır: kuvvetten kazanç, yoldan kayıpla birlikte gelir. “Yaklaşık” ifadesi, makara ağırlığı ve sürtünme nedeniyle ölçümlerin tam değerlerden biraz sapmasını anlatır. *(Değerler bu ders için kurgulanmış örnek ölçümlerdir; bağıntı olarak ezberlenmez.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-makine-kaldirac',
      title: 'Kaldıraç: ortada ne duruyor?',
      lead: 'Kaldıraç türünü belirlemek için tek bir soru yeter: destek, yük ve kuvvetten hangisi ortada?',
      blocks: [
        {
          id: 'lgs-fen-makine-kaldirac-sema',
          type: 'figure',
          kind: 'lgs-fen-kaldirac-turleri',
          title: 'Üç kaldıraç türü',
          width: 'full',
          complexity: 'medium',
          caption:
            'Kaldıracın türünü ortada duran öğe belirler. Şemada uzunluk ya da sayı yoktur; program bu konuda bağıntıya girilmemesini ister.',
          purpose: 'Destek, yük ve kuvvetin yerleşimini tek bakışta karşılaştırmak',
          alt:
            'Üç panel. Birincide destek noktası ortada, yük ve kuvvet uçlarda. İkincide yük ortada, destek bir uçta, kuvvet öbür uçta. Üçüncüde kuvvet ortada, destek bir uçta, yük öbür uçta.',
          data: {},
          focus: [
            { title: 'Destek ortada', body: 'Tahterevalli, makas, pense. Destek yüke yakınsa kuvvetten kazanç sağlar; kuvvete yakınsa sağlamaz.' },
            { title: 'Yük ortada', body: 'El arabası, gazoz açacağı, fındık kıracağı. Kuvvet destek noktasına yükten her zaman daha uzak olduğu için kuvvetten kazanç sağlar.' },
            { title: 'Kuvvet ortada', body: 'Cımbız, maşa, olta. Kuvvetten kazanç sağlamaz; uçta daha uzun ve hızlı bir hareket elde edilir.' },
          ],
        },
        {
          id: 'lgs-fen-makine-kaldirac-anlatim',
          type: 'prose',
          body: `Kaldıraç, bir **destek noktası** etrafında dönebilen sert bir çubuktur. Üzerinde üç öğe bulunur: **destek noktası**, **yük** ve **kuvvet.** Bu üç öğenin çubuk üzerindeki sırası kaldıracın türünü belirler.

**1. tür — Destek ortada.** Tahterevalli, makas, pense bu türdendir. Bu kaldıraçlar kuvvetten kazanç sağlayabilir de sağlamayabilir de. Kural şudur: **destek noktası yüke ne kadar yakınsa, gereken kuvvet o kadar azdır.** Pensenin ağzının (yükün tutulduğu yer) eksene yakın, sapının uzun olması bu yüzdendir.

**2. tür — Yük ortada.** El arabası, gazoz açacağı, fındık kıracağı bu türdendir. Bu kaldıraçlarda kuvvet, destek noktasına göre her zaman yükten **daha uzakta** uygulanır; bu yüzden **kuvvetten kazanç sağlarlar.** El arabasıyla ağır bir yükü kolayca taşıyabilmen bu yüzdendir.

**3. tür — Kuvvet ortada.** Cımbız, maşa, olta bu türdendir. Bu kaldıraçlarda kuvvet destek noktasına yükten **daha yakın** uygulanır; bu yüzden **kuvvetten kazanç sağlamazlar.** Peki neden kullanılırlar? Çünkü elin küçük bir hareketi, uçta **daha uzun ve hızlı** bir harekete dönüşür. Olta ile küçük bir bilek hareketiyle ipin ucunu uzağa savurabilmen bundandır. Cımbızda ise amaç kuvvet değil, **hassas tutma**dır.

Şimdi dersin ana fikrini kaldıraçta bir kez daha görelim: kuvvetten kazanç sağlayan kaldıraçta kuvveti uyguladığın uç **uzun bir yay** çizer, yük ise kısa bir yol alır. Kuvvetten kazanç sağlamayan kaldıraçta ise tersi olur. Her durumda **işten kazanç yoktur.**

Deney tablosuna bakarsan bu kuralı somut olarak görürsün: destek noktası yüke yaklaştıkça dinamometrenin gösterdiği kuvvet azalır.

*Kapsam notu: destek noktasının yerine göre kuvvetin nasıl değiştiğini yönüyle öğreniyoruz; program bu konuda bağıntı kullanılmamasını ister.*`,
        },
        {
          id: 'lgs-fen-makine-kaldirac-tablo',
          type: 'table',
          interactive: true,
          title: 'Gözlem kaydı: destek noktasının yeri (yük 10 N)',
          columns: ['Destek noktasının yeri', 'Dengeyi sağlayan kuvvet', 'Kuvvetten kazanç'],
          rows: [
            ['Yüke yakın', 'Yaklaşık 4 N', 'Var'],
            ['Tam ortada', 'Yaklaşık 10 N', 'Yok'],
            ['Kuvvete yakın', 'Yaklaşık 24 N', 'Yok — kuvvetten kayıp var'],
          ],
          caption:
            'Destek yüke yaklaştıkça gereken kuvvet azalır. Ortada kuvvet yükle yaklaşık aynıdır; kuvvete yakınken yükten büyüktür. *(Kurgulanmış örnek ölçümler; bağıntı olarak ezberlenmez.)*',
        },
        {
          id: 'lgs-fen-makine-kaldirac-hafiza',
          type: 'memory',
          title: 'Kaldıraçta tek soru',
          body:
            '**Ortada ne duruyor?** Destek ortadaysa türüne bak; yük ortadaysa kuvvetten kazanç var; kuvvet ortadaysa kuvvetten kazanç yok, hızdan kazanç var.',
        },
      ],
    },

    {
      id: 'lgs-fen-makine-makara',
      title: 'Makaralar, eğik düzlem ve çıkrık',
      lead: 'Programın saydığı öbür beş makine. Her birinde aynı soruyu soracağız: ne kazandırıyor, ne kaybettiriyor?',
      blocks: [
        {
          id: 'lgs-fen-makine-makara-anlatim',
          type: 'prose',
          body: `**Sabit makara.** Bir yere tutturulmuş, yerinde dönen makaradır. İp makaranın üzerinden geçer; bir ucuna yük bağlanır, öbür ucundan çekilir. Sabit makara **kuvvetten kazanç sağlamaz**; yükü kaldırmak için yaklaşık yükün ağırlığı kadar kuvvet gerekir. Peki ne işe yarar? **Kuvvetin yönünü değiştirir.** Bayrak direğinde bayrağı yukarı çıkarmak için ipi **aşağı** çekersin. Aşağı çekmek, vücut ağırlığını da kullanabildiğin için daha rahattır.

**Hareketli makara.** Yükle birlikte hareket eden makaradır; yük makaraya asılır ve ip makaranın altından geçer. Yük iki ip parçasıyla taşındığı için gereken kuvvet **azalır**: hareketli makara **kuvvetten kazanç sağlar.** Ama bedeli vardır: yükü belli bir yüksekliğe çıkarmak için ipi **daha uzun** çekmen gerekir. Kuvvetin yönü değişmez; ipi yukarı çekersin.

**Palanga.** Sabit ve hareketli makaraların birlikte kullanıldığı düzenektir. Hareketli makaralar kuvvetten kazanç sağlar, sabit makaralar kuvvetin yönünü değiştirir. Böylece palanga **iki avantajı birlikte** sunar. Vinçler ve büyük yük kaldırma düzenekleri palanga mantığıyla çalışır. Yükü taşıyan ip sayısı arttıkça gereken kuvvet azalır, ama çekilmesi gereken ip uzar.

**Eğik düzlem.** Bir yükü dikey kaldırmak yerine eğimli bir yüzey üzerinde yukarı taşımayı sağlar. Aynı yüksekliğe çıkmak için rampa **ne kadar uzun ve az eğimliyse** gereken kuvvet o kadar **azalır**; ama alınan yol uzar. Rampalar, yükleme platformları ve dağlardaki dolambaçlı yollar eğik düzlem örnekleridir. Bıçak, balta ve çivinin ucu gibi **kama** biçimli araçlar da eğik düzlem mantığıyla çalışır.

**Çıkrık.** Bir silindire bağlı, silindirden daha büyük bir kolun çevrilmesiyle çalışır. Kol, silindirden **daha büyük bir daire** çizer. Bu yüzden elin daha uzun bir yol alırken silindire sarılan ip kısa bir yol alır ve **kuvvetten kazanç sağlanır.** Kol ne kadar uzunsa gereken kuvvet o kadar azdır. Kuyu çıkrığı, kapı kolu, direksiyon, tornavida ve musluk çıkrık örnekleridir.

Beş makinenin ortak sonucuna dikkat et: kuvvetten kazanç sağlayan her makinede **yoldan kayıp** vardır. Program da bu noktanın vurgulanmasını ister: **basit makinelerde işten kazanç yoktur.**`,
        },
        {
          id: 'lgs-fen-makine-makara-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Kazanç ve bedel',
          columns: ['Neyi kazandırır?', 'Bedeli nedir?'],
          rows: [
            { label: 'Sabit makara', values: ['Kuvvetin yönünü değiştirir', 'Kuvvetten kazanç sağlamaz'] },
            { label: 'Hareketli makara', values: ['Kuvvetten kazanç', 'İp daha uzun çekilir'] },
            { label: 'Palanga', values: ['Kuvvetten kazanç ve yön değiştirme', 'İp daha da uzun çekilir'] },
            { label: 'Eğik düzlem', values: ['Kuvvetten kazanç', 'Daha uzun yol alınır'] },
            { label: 'Çıkrık', values: ['Kuvvetten kazanç', 'Kol daha büyük daireler çizer'] },
          ],
          insight:
            'İkinci sütunun hiçbir satırı boş değil: her kazancın bir bedeli var. İşten kazanç olmamasının anlamı budur.',
        },
        {
          id: 'lgs-fen-makine-makara-tuzak',
          type: 'trap',
          title: 'Yükü taşıyan ip sayısını görmezden gelmek',
          wrong: 'Palangada makara sayısı arttıkça ipi daha kısa çekerim.',
          right: 'Yükü taşıyan ip sayısı arttıkça gereken kuvvet **azalır**, ama çekilmesi gereken ip **uzar.**',
          body: 'Palanga sorularında makaraların sayısını değil, **hareketli makarayı taşıyan ip parçalarını** say. Kuvvetten kazanç arttıkça yoldan kayıp da artar.',
        },
      ],
    },

    {
      id: 'lgs-fen-makine-tasarim',
      title: 'Dişli, vida, kasnak ve kendi düzeneğini tasarlamak',
      lead: 'Önce programın “görsellerle belirtilir” dediği üç makineyi tanıyalım; sonra ikinci kazanımın istediği tasarımı yapalım.',
      blocks: [
        {
          id: 'lgs-fen-makine-tasarim-sema',
          type: 'figure',
          kind: 'lgs-fen-disli-vida-kasnak',
          title: 'Dişli çark, vida ve kasnak',
          width: 'full',
          complexity: 'basic',
          caption:
            'Bu üç araç da birer basit makinedir. Program bu makinelerin ayrıntısına girilmemesini ister; bilmen gereken, onları tanıyabilmek ve günlük örneklerini söyleyebilmektir.',
          purpose: 'Dişli çark, vida ve kasnağı ayrıntıya girmeden tanıtmak',
          alt:
            'Üç panel. Dişli çark: dişleri birbirine geçen iki tekerlek. Vida: silindire sarılmış eğik düzlem. Kasnak: bir kayışla birbirine bağlı iki tekerlek.',
          data: {},
          focus: [
            { title: 'Dişli çark', body: 'Dişleri birbirine geçen tekerlekler hareketi aktarır. Bisiklet, saat, el matkabı.' },
            { title: 'Vida', body: 'Bir silindirin çevresine sarılmış eğik düzlemdir. Vida, kavanoz kapağı, burgu.' },
            { title: 'Kasnak', body: 'Bir kayışla birbirine bağlı tekerleklerdir. Dikiş makinesi, çamaşır makinesi.' },
          ],
        },
        {
          id: 'lgs-fen-makine-tasarim-anlatim',
          type: 'prose',
          body: `Şimdi ikinci kazanıma geçelim: **basit makinelerden yararlanarak günlük yaşamda iş kolaylığı sağlayacak bir düzenek tasarlamak.** Programın açıklaması tasarımın **önce çizimle** ifade edilmesini ister; şartlar uygunsa üç boyutlu bir modele dönüştürülebilir.

İyi bir tasarım rastgele başlamaz; bir **problemle** başlar. Şu sırayı izle:

**1. Problemi tanımla.** Hangi iş zor? Kim için zor? Örnek: “Apartmanın üçüncü katında oturan yaşlı komşum market alışverişini merdivenden taşımakta zorlanıyor.”

**2. İhtiyacı belirle.** Problemde hangi avantaja ihtiyaç var? Kuvvetten kazanç mı, yön değiştirme mi, ikisi birden mi? Örnekte hem kuvvetten kazanç (yük ağır) hem yön değiştirme (aşağıdan çekmek daha rahat) işe yarar.

**3. Makineyi seç.** İhtiyaca uyan basit makineyi ya da makineleri seç. Örnekte bir **palanga** hem kuvvetten kazanç hem yön değiştirme sağlar.

**4. Çiz.** Düzeneğini sade bir çizimle göster: makaraların yeri, ipin geçtiği yol, yükün asıldığı nokta, kuvvetin uygulandığı yer ve yönü. Her parçayı etiketle.

**5. Bedeli yaz.** Tasarımın neyi kazandırdığını ve neyi kaybettirdiğini açıkça yaz. “Kuvvet azalır ama ip daha uzun çekilir.” Bu cümle, işten kazanç olmadığını bildiğini gösterir.

**6. Güvenliği düşün.** İp yükü taşıyabilir mi? Yük düşerse ne olur? Bir kilitleme ya da fren gerekir mi?

**7. Sına ve geliştir.** Mümkünse basit malzemelerle bir model kur (makara yerine iplik makarası, ip yerine sicim). Çalışmayan kısmı bul ve düzelt.

Tasarımda yaratıcılığın sınırı yoktur; ama bir kural değişmez: hangi makineyi kullanırsan kullan, **işten kazanç sağlayamazsın.** Tasarımının değeri, işi **daha kolay, daha güvenli ya da daha rahat** hâle getirmesinden gelir.`,
        },
        {
          id: 'lgs-fen-makine-tasarim-surec',
          type: 'process',
          title: 'Tasarım kontrol listesi',
          intro: 'Çizimini bitirdiğinde bu beş soruya “evet” diyebiliyor olmalısın.',
          steps: [
            { title: 'Problem açık mı?', body: 'Tasarımın hangi işi, kim için kolaylaştırdığını tek cümleyle söyleyebiliyor musun?' },
            { title: 'Makine gerekçeli mi?', body: 'Seçtiğin makinenin hangi avantajı sağladığını yazdın mı?' },
            { title: 'Çizim okunur mu?', body: 'Destek, yük, kuvvet ya da makaralar ve ipin yolu çizimde etiketli mi?' },
            { title: 'Bedel yazıldı mı?', body: 'Kuvvetten kazanç varsa yoldan kaybı belirttin mi?' },
            { title: 'Güvenli mi?', body: 'Yükün düşmesine, ipin kopmasına karşı bir önlem düşündün mü?' },
          ],
        },
        {
          id: 'lgs-fen-makine-tasarim-baglanti',
          type: 'connection',
          title: 'Basit makineler başka nerelerde?',
          body: 'Karmaşık makinelerin çoğu, birden çok basit makinenin bir araya gelmesiyle oluşur.',
          links: [
            'Bisiklet: pedallar çıkrık, zincir ve dişliler dişli çark, frenler kaldıraç mantığıyla çalışır.',
            'Makas: iki kaldıraç ve ağızlarında kama biçiminde eğik düzlem vardır.',
            'Vinç: palanga ve çıkrık birlikte kullanılır.',
            'Vücudumuz: kol ve bacaklarımız kas–kemik düzeniyle kaldıraç gibi çalışır.',
            'Elektrik dersinde robotların hareketi de bu mekanizmalara dayanır.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Kaldıracın türünü bul',
      prompt:
        'Bir el arabasında tekerlek, taşınan yük ve kolların tutulduğu yer nerededir? El arabası hangi tür kaldıraçtır ve kuvvetten kazanç sağlar mı?',
      steps: [
        { title: '1. Destek noktasını bul', body: 'El arabası tekerleğin etrafında döner. Destek noktası **tekerlektir** ve bir uçtadır.' },
        { title: '2. Yükü bul', body: 'Taşınan yük arabanın kasasındadır; tekerlek ile kollar **arasında** durur.' },
        { title: '3. Kuvveti bul', body: 'Kuvvet kolların tutulduğu yerde, öbür uçta uygulanır.' },
        { title: '4. Ortadakini söyle', body: 'Ortada duran öğe **yüktür.** Öyleyse el arabası yük ortada olan kaldıraçtır.' },
        { title: '5. Kazancı belirle', body: 'Bu türde kuvvet destek noktasından her zaman yükten daha uzakta uygulanır; bu yüzden **kuvvetten kazanç sağlar.**' },
      ],
      answer: 'El arabası yük ortada olan kaldıraçtır ve kuvvetten kazanç sağlar.',
      takeaway: 'Kaldıraç sorusunun anahtarı tek sorudur: ortada ne duruyor?',
    },
    {
      title: 'Seviye 2 — İşten kazanç var mı?',
      prompt:
        'Bir öğrenci 10 N ağırlığındaki yükü hareketli makarayla yaklaşık 5 N kuvvetle 1 m yukarı kaldırıyor ve “Makara işimi yarıya indirdi.” diyor. Bu ifade doğru mu? Gözlem tablosundaki verilerle değerlendir.',
      steps: [
        { title: '1. Kuvveti karşılaştır', body: 'Doğrudan kaldırırken 10 N, hareketli makarayla yaklaşık 5 N kuvvet gerekir. Kuvvetten kazanç vardır.' },
        { title: '2. Yolu karşılaştır', body: 'Doğrudan kaldırırken ip 1 m çekilir; hareketli makarayla yük 1 m yükselirken ip 2 m çekilir. Yoldan kayıp vardır.' },
        { title: '3. İki sonucu birleştir', body: 'Kuvvet azalırken yol uzamıştır. Makine işi azaltmamış, farklı biçimde paylaştırmıştır.' },
        { title: '4. Sürtünmeyi hatırla', body: 'Gerçekte makara ağırlığı ve sürtünme nedeniyle yapılan iş, doğrudan kaldırmaya göre biraz daha fazladır.' },
        { title: '5. Sonucu yaz', body: 'İfade yanlıştır. Hareketli makara kuvvetten kazanç sağlar ama yoldan kaybettirir; işten kazanç yoktur.' },
      ],
      answer:
        'İfade yanlıştır: hareketli makara kuvvetten kazandırır ama ip daha uzun çekildiği için yoldan kaybettirir. Basit makinelerde işten kazanç yoktur.',
      takeaway: 'Kuvvetin azaldığını görünce yola bak: yol mutlaka uzamıştır.',
    },
    {
      title: 'Seviye 3 — Düzenek tasarla',
      prompt:
        'Bir çiftçi, ağır su bidonlarını ahırın yüksek bir rafına kaldırmakta zorlanıyor. Raf duvara sabit ve üzerinde bir kiriş var. Basit makinelerle bir düzenek tasarla ve kazancını ile bedelini yaz.',
      steps: [
        { title: '1. Problemi tanımla', body: 'Ağır bidonları yukarıdaki rafa kaldırmak zor; doğrudan kaldırmak hem yorucu hem tehlikeli.' },
        { title: '2. İhtiyacı belirle', body: 'Kuvvetten kazanç (bidon ağır) ve yön değiştirme (aşağıdan çekmek daha rahat ve güvenli) gerekir.' },
        { title: '3. Makineyi seç', body: 'Kirişe bir sabit makara, bidona bir hareketli makara bağlanarak bir **palanga** kurulur.' },
        { title: '4. Çizimi tarif et', body: 'Kirişte sabit makara, bidonun sapında hareketli makara; ip kirişten başlayıp hareketli makaranın altından ve sabit makaranın üstünden geçerek çiftçinin eline iner.' },
        { title: '5. Kazancı ve bedeli yaz', body: 'Kazanç: daha az kuvvet ve ipi aşağı doğru çekme rahatlığı. Bedel: ipi, bidonun yükseldiği mesafeden daha uzun çekmek gerekir.' },
        { title: '6. Güvenliği ekle', body: 'İp bidonun ağırlığını taşıyacak sağlamlıkta seçilir; ip bir kancaya sabitlenerek bidonun düşmesi önlenir.' },
      ],
      answer:
        'Bir sabit ve bir hareketli makaradan oluşan palanga kurulur: kuvvet azalır ve ip aşağı doğru çekilir; buna karşılık ip daha uzun çekilir. İşten kazanç yoktur, iş kolaylaşır.',
      takeaway: 'İyi bir tasarım, kazancı kadar bedelini de açıkça yazar.',
    },
  ],

  dailyLife: {
    title: 'Basit makinelerin kullanım alanları',
    body: 'Evde, okulda, inşaatta, tarımda ve ulaşımda sürekli basit makine kullanılır; çoğu zaman farkına bile varmadan.',
    links: [
      'Kapı kolu ve musluk çıkrık ilkesiyle çalışır.',
      'Makas ve pense destek ortada olan kaldıraçlardır.',
      'Gazoz açacağı ve el arabası yük ortada olan kaldıraçlardır.',
      'Cımbız ve maşa kuvvet ortada olan kaldıraçlardır; hassas tutmayı sağlar.',
      'Engelli rampaları ve yükleme rampaları eğik düzlemdir.',
      'Bayrak direğindeki makara sabit makaradır; bayrak ip aşağı çekilerek yükseltilir.',
    ],
  },

  questionClue: {
    concept: 'Basit makine sorusu',
    statement:
      'Soruda makaralı bir düzenek, bir kaldıraç çizimi, bir rampa ya da bir günlük araç varsa, ölçülen şey makinenin avantajı ve işten kazanç olmadığı bilgisidir.',
    clues: [
      'Makaraların ve ipin geçtiği yolun çizildiği düzenekler',
      'Destek noktası, yük ve kuvvetin gösterildiği bir çubuk',
      'Farklı uzunlukta ya da eğimde rampalar',
      '“Kuvvetten kazanç”, “işten kazanç”, “yön değiştirme” ifadeleri',
      'Günlük araçların (makas, cımbız, el arabası) sınıflandırılması',
    ],
    reasoning:
      'Bu işaretler iki soruyu ister: makine neyi kazandırıyor, bedeli ne? Kaldıraçta ortadaki öğeye, makarada yükü taşıyan ip sayısına, rampada eğime bak.',
    boundary:
      'Bu ipuçlarını formül uygulamaya çevirme; program bu konuda matematiksel bağıntıya girilmemesini ister. Ayrıca “işten kazanç” seçeneğini gördüğünde dikkat et: basit makinelerde işten kazanç yoktur.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.5.1.1 ve F.8.5.1.2 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Günlük araçların kaldıraç türüne göre sınıflandırılması',
      'Makaralı düzeneklerde hangisinin daha az kuvvet gerektirdiğinin karşılaştırılması',
      'Bir makinenin yön değiştirme ya da kuvvetten kazanç sağlayıp sağlamadığının sorulması',
      'Farklı eğimli rampalarda gereken kuvvetin karşılaştırılması',
      '“İşten kazanç sağlanır” gibi bir yanılgının bulunması',
      'Bir problem için uygun basit makinenin ya da düzeneğin seçilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Sabit makara kuvvetten kazanç sağlamadığına göre neden kullanılır?',
      hint: 'Kuvvetin yönüne ne oluyor?',
      answer:
        'Sabit makara **kuvvetin yönünü değiştirir.** Yükü yukarı kaldırmak için ipi aşağı doğru çekmeni sağlar. Aşağı çekmek, vücut ağırlığını da kullanabildiğin için daha rahat ve güvenlidir. Bu bir kolaylıktır; ama kuvvetten kazanç değildir: yükü kaldırmak için yaklaşık yükün ağırlığı kadar kuvvet gerekir.',
    },
    {
      prompt:
        'Cımbız kuvvetten kazanç sağlamadığı hâlde neden kaldıraç olarak işe yarar?',
      hint: 'Cımbızda ortada ne duruyor, amaç ne?',
      answer:
        'Cımbız **kuvvetin ortada** olduğu bir kaldıraçtır; bu türde kuvvet destek noktasına yükten daha yakın uygulandığı için kuvvetten kazanç yoktur. Ama cımbızın amacı büyük kuvvet uygulamak değil, küçük nesneleri **hassas biçimde tutmaktır.** Parmağın küçük hareketi uçta kontrollü bir kapanmaya dönüşür. Bu da bir avantajdır.',
    },
    {
      prompt:
        'Dağ yolları neden düz bir çizgi hâlinde değil de dolambaçlı yapılır? Basit makine bilgisiyle açıkla.',
      hint: 'Dolambaçlı yol hangi basit makineye benzer?',
      answer:
        'Dolambaçlı yol bir **eğik düzlem** gibi çalışır. Aynı yüksekliğe düz ve dik bir yolla çıkmak yerine daha uzun ve daha az eğimli bir yolla çıkıldığında araçların tırmanması için gereken kuvvet **azalır.** Bedeli ise yolun uzamasıdır. Kuvvetten kazanç, yoldan kayıpla birlikte gelir; işten kazanç yoktur.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey formül değil; kazanç ve bedel',
    body:
      'Kazanım “basit makinelerin sağladığı avantajları örnekler üzerinden açıklar” diyor; açıklaması da işten kazanç olmadığının vurgulanmasını ve matematiksel bağıntılara girilmemesini ister. İkinci kazanım ise bir düzenek tasarlamayı ister. Bu yüzden senden bir hesap değil; makinenin neyi kazandırıp neyi kaybettirdiğini söylemen, günlük araçları sınıflandırman ve bir problem için uygun makineyi seçmen beklenir.',
    measures: [
      'Altı basit makineyi tanıyabilme',
      'Kaldıraç türünü destek, yük ve kuvvetin yerleşiminden belirleyebilme',
      'Bir makinenin kuvvetten kazanç ya da yön değiştirme avantajını söyleyebilme',
      'Kuvvetten kazanç ile yoldan kayıp arasındaki ilişkiyi yönüyle açıklayabilme',
      'Basit makinelerde işten kazanç olmadığını gerekçelendirebilme',
      'Bir problem için uygun basit makineyi seçip düzenek tasarlayabilme',
    ],
  },

  simulationTable: {
    title: 'Bir öğrencinin dört düzenek hakkındaki notları',
    columns: ['Düzenek', 'Öğrencinin notu'],
    rows: [
      ['Sabit makara', 'Kuvvetin yönünü değiştirdi; kuvvetten kazanç sağlamadı.'],
      ['Hareketli makara', 'Kuvvetten kazanç sağladı; ipi daha uzun çektim.'],
      ['Cımbız', 'Kuvvetten kazanç sağlamadı; hassas tutmayı kolaylaştırdı.'],
      ['Palanga', 'Hem kuvvetten hem işten kazanç sağladı.'],
    ],
    caption: 'Öğrenci dört düzeneği denemiş ve gözlemlerini not etmiştir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün gözlem notları',
    passage: `Bir öğrenci dört basit makineyi deniyor ve her biri hakkında bir not yazıyor. Notlar yukarıdaki tabloda verilmiştir.

Öğretmen, notlardan birinin bilimsel olarak hatalı olduğunu söylüyor.`,
    question: 'Öğretmenin işaret ettiği hatalı not hangisidir?',
    options: [
      {
        text: 'Sabit makaraya ait not',
        explanation:
          'Sabit makara kuvvetin yönünü değiştirir ve kuvvetten kazanç sağlamaz. Not doğrudur.',
      },
      {
        text: 'Hareketli makaraya ait not',
        explanation:
          'Hareketli makara kuvvetten kazanç sağlar; bunun bedeli ipin daha uzun çekilmesidir. Not hem kazancı hem bedeli doğru yazmıştır.',
      },
      {
        text: 'Cımbıza ait not',
        explanation:
          'Cımbız kuvvetin ortada olduğu bir kaldıraçtır; kuvvetten kazanç sağlamaz ama hassas tutmayı kolaylaştırır. Not doğrudur.',
      },
      {
        text: 'Palangaya ait not',
        explanation:
          'Doğru cevap. Palanga kuvvetten kazanç ve yön değiştirme sağlar; ama hiçbir basit makine işten kazanç sağlamaz. Kuvvet azalırken çekilmesi gereken ip uzar.',
      },
      {
        text: 'Hiçbiri; dört not da doğrudur',
        explanation:
          'Palangaya ait not “işten kazanç” iddia ettiği için hatalıdır. Program basit makinelerde işten kazanç olmadığının vurgulanmasını ister.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru dört notu tek tek sınamayı istiyor. Yöntem: her notta “kazanç” sözcüğünü bul ve neyin kazancı olduğuna bak. Kuvvetten kazanç ve yön değiştirme mümkündür; işten kazanç hiçbir zaman mümkün değildir.',
    critical_point:
      'Kritik nokta palanganın gerçekten güçlü bir makine olmasıdır. İki avantajı birden sağladığı için öğrenci ona üçüncü bir avantaj daha yakıştırıyor. Oysa makine ne kadar güçlü olursa olsun işten kazanç sağlayamaz.',
    takeaway: '“Kazanç” sözcüğünü gördüğünde hep sor: neyin kazancı? İşin kazancı hiçbir zaman olmaz.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Basit makinelerle ilgili aşağıdakilerden hangisi her zaman doğrudur?',
      options: [
        'Kuvvetten kazanç sağlarlar',
        'Kuvvetin yönünü değiştirirler',
        'İşten kazanç sağlamazlar',
        'Yoldan kazanç sağlarlar',
      ],
      answer_index: 2,
      explanation:
        'Basit makinelerin hiçbiri işten kazanç sağlamaz; program da bu noktanın vurgulanmasını ister. Öbür seçenekler bazı makineler için doğru, bazıları için yanlıştır: örneğin sabit makara kuvvetten kazanç sağlamaz, hareketli makara yön değiştirmez, kuvvetten kazanç sağlayan makineler ise yoldan kaybettirir.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdaki araçlardan hangisi yük ortada olan bir kaldıraçtır?',
      options: [
        'Makas',
        'Cımbız',
        'Tahterevalli',
        'El arabası',
      ],
      answer_index: 3,
      explanation:
        'El arabasında destek noktası tekerlek, kuvvet kolların tutulduğu uç, yük ise ikisinin arasındaki kasadır. Ortada yük durduğu için el arabası yük ortada olan kaldıraçtır ve kuvvetten kazanç sağlar. Makas ve tahterevalli destek ortada, cımbız ise kuvvet ortada olan kaldıraçlardır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Rampayı daha dik yaparsam yol kısalacağı için yükü daha az kuvvetle çıkarırım.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Eğim arttıkça gereken kuvvetin de arttığını gözden kaçırmak',
        'Rampanın bir basit makine olmadığını sanmak',
        'Sabit makarayı hareketli makarayla karıştırmak',
        'Kaldıracın türünü yanlış belirlemek',
      ],
      answer_index: 0,
      explanation:
        'Rampa dikleştikçe yol kısalır ama yükü çıkarmak için gereken kuvvet **artar.** Kuvveti azaltmak için rampanın daha uzun ve daha az eğimli olması gerekir. Öğrenci kısa yolu kolaylıkla karıştırmıştır; oysa kuvvetten kazanç her zaman yoldan kayıpla birlikte gelir.',
    },
  ],

  summary: [
    'Basit makineler kuvvetin büyüklüğünü, yönünü ya da uygulandığı yeri değiştirerek işi kolaylaştırır.',
    'Basit makinelerde işten kazanç yoktur; kuvvetten kazanç varsa yoldan kayıp vardır.',
    'Sürtünme nedeniyle makineyle yapılan iş, doğrudan yapılan işten biraz fazladır.',
    'Sabit makara kuvvetin yönünü değiştirir, kuvvetten kazanç sağlamaz.',
    'Hareketli makara kuvvetten kazanç sağlar, ip daha uzun çekilir; yön değişmez.',
    'Palanga hem kuvvetten kazanç hem yön değiştirme sağlar.',
    'Kaldıracın türünü ortada duran öğe belirler: destek, yük ya da kuvvet.',
    'Yük ortada olan kaldıraçlar kuvvetten kazanç sağlar; kuvvet ortada olanlar sağlamaz.',
    'Destek ortada olan kaldıraçta destek yüke yaklaştıkça gereken kuvvet azalır.',
    'Eğik düzlem uzadıkça ve eğimi azaldıkça gereken kuvvet azalır, yol uzar.',
    'Çıkrıkta kol uzadıkça gereken kuvvet azalır.',
    'Dişli çark, vida ve kasnak da birer basit makinedir.',
    'Tasarım bir problemle başlar; önce çizilir, kazanç ve bedel birlikte yazılır.',
  ],

  next: [
    'Besin Zinciri, Besin Ağı ve Ekoloji Piramidi (F.8.6.1.1)',
    'Elektrik Enerjisinin Dönüşümü (F.8.7.3 — robotlar ve hareket enerjisi)',
    'Katı Basıncı: Ağırlık mı, Yüzey mi? (tekrar için — kama ve bıçak)',
  ],
})

export default lesson
