import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.3 Basınç · 1. ders
 * Kazanım : F.8.3.1.1
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAM SINIRI — BAĞLAYICI VE SERT
 *   F.8.3.1.1 → "Katı basıncını etkileyen değişkenleri deneyerek keşfeder."
 *               a) Basınç birimi olarak PASCAL verilir.
 *               b) MATEMATİKSEL BAĞINTILARA GİRİLMEZ.
 *
 * Bu yüzden derste P = F / A bağıntısı HİÇ YAZILMAZ ve sayısal basınç
 * hesabı yapılmaz. `formula` alanı bilinçli olarak kullanılmadı.
 * İlişki yalnız NİTEL olarak kurulur: "ağırlık artarsa basınç artar,
 * yüzey alanı artarsa basınç azalır".
 *
 * Kazanımın fiili "deneyerek keşfeder" olduğu için dersin omurgası
 * değişken kontrolü üzerine kuruldu: tek seferde tek değişken.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-kati-basinci',
  topic: 'Basınç',
  order: 1,
  title: 'Katı Basıncı: Ağırlık mı, Yüzey mi?',
  subtitle:
    'Aynı ağırlık, farklı yüzey, farklı sonuç. Basınç bir kuvvet değil; kuvvetin yüzeye nasıl dağıldığıdır.',
  minutes: 42,
  kazanimlar: [
    {
      kod: 'F.8.3.1.1',
      metin: 'Katı basıncını etkileyen değişkenleri deneyerek keşfeder.',
      sinir:
        'Basınç birimi olarak Pascal verilir. **Matematiksel bağıntılara girilmez**; bu yüzden bu derste formül yazılmaz ve sayısal basınç hesabı yapılmaz.',
    },
  ],
  prerequisites: [
    { topic: 'Kuvvet ve ağırlık', why: 'Basıncı kuvvetten ayırabilmek için kuvvet kavramı gereklidir.' },
    { topic: 'Yüzey alanı', why: 'Temas yüzeyinin büyüklüğü basıncı etkileyen iki değişkenden biridir.' },
  ],
  outcomes: [
    'Basıncın ne olduğunu kuvvetten ayırarak açıklayabileceksin.',
    'Katı basıncını etkileyen iki değişkeni söyleyebileceksin.',
    'Bir deneyde tek değişkeni değiştirip ötekileri sabit tutmanın neden zorunlu olduğunu anlatabileceksin.',
    'Bir gözlem kaydından hangi değişkenin etkisinin sınandığını çıkarabileceksin.',
    'Günlük hayattaki tasarımların hangi değişkeni kullandığını açıklayabileceksin.',
  ],

  opening: {
    title: 'Aynı insan, aynı kar, farklı sonuç',
    lead: 'Karda yürürken ayakların batıyor. Kar ayakkabısı giyince batmıyor. Ağırlığın değişmedi; peki ne değişti?',
    body: `Kalın kar örtüsünde yürümeyi dene: her adımda ayakların dizine kadar batar. Şimdi ayağına geniş tabanlı bir **kar ayakkabısı** tak. Aynı karda, aynı sen, ama artık batmıyorsun.

Burada dikkat: **ağırlığın değişmedi.** Değişen tek şey, ağırlığının kara temas ettiği **yüzeyin büyüklüğü.**

Aynı olayın tersini de günlük hayatta görürsün. Bir raptiyeyi duvara bastırırken ucunun sivri olması işini kolaylaştırır. Ucu küt olsaydı aynı kuvvetle bastırdığında girmezdi. Yine ağırlık ya da kuvvet değil, **yüzey** belirleyicidir.

İki örnek de aynı şeyi söylüyor: bir cismin yüzeye ne kadar “batacağını” belirleyen şey yalnız kuvvet değildir; kuvvetin **ne kadar yüzeye dağıldığıdır.**

İşte bu dersin konusu budur: **basınç.**

Basınç, bir yüzeye dik olarak etki eden kuvvetin, o yüzeyin birimine düşen miktarıdır. Kısaca: **kuvvetin yüzeye dağılımı.**

Bu derste kazanımın fiiline özellikle dikkat edeceğiz: *“değişkenleri **deneyerek keşfeder**.”* Yani senden istenen şey bir tanımı ezberlemek değil; bir deney kurup hangi değişkenin etkili olduğunu bulmak.

Bu yüzden ders boyunca tek bir soruyu tekrar tekrar soracağız: **“Bu deneyde neyi değiştirdim, neyi sabit tuttum?”**

Bir kapsam uyarısı: *program bu kazanımda **matematiksel bağıntılara girilmemesini** ister.* Bu yüzden bu derste basınç formülü yazmayacağız ve sayısal basınç hesabı yapmayacağız. Senden istenen, ilişkiyi **yönüyle** bilmek: hangi değişken artınca basınç artar, hangisi artınca azalır.

Birimi ise programda açıkça verilir: basınç biriminin adı **Pascal**tır ve kısaca **Pa** ile gösterilir.`,
  },

  concepts: [
    {
      term: 'Basınç',
      body: 'Bir yüzeye dik olarak etki eden kuvvetin, birim yüzeye düşen miktarıdır. Kuvvetin kendisi değil, kuvvetin **yüzeye dağılımıdır**.',
    },
    {
      term: 'Pascal (Pa)',
      body: 'Basıncın birimidir. Program bu kazanımda birim olarak yalnız Pascal’ın verilmesini ister.',
    },
    {
      term: 'Katı basıncını etkileyen değişkenler',
      body: 'İki tanedir: cismin **ağırlığı** (yüzeye uyguladığı kuvvet) ve **temas yüzeyinin alanı**. Başka bir değişken bu düzeyde istenmez.',
    },
    {
      term: 'Temas yüzeyi',
      body: 'Cismin zemine gerçekten değdiği yüzeydir. Cismin toplam yüzeyi değil, **değdiği** yüzey önemlidir.',
    },
    {
      term: 'Batma miktarı',
      body: 'Yumuşak bir zeminde (kum, un, köpük) cismin ne kadar içeri girdiğidir. Basıncı doğrudan ölçemediğimiz durumlarda basıncın **göstergesi** olarak kullanılır.',
    },
  ],

  why: {
    question: 'Basınç ile kuvvet neden aynı şey değil?',
    body: `Çünkü aynı kuvvet, farklı yüzeylere dağıldığında farklı sonuç doğurur.

Bir düşünce deneyi yapalım. Elinde bir tuğla var. Tuğlayı kum üzerine iki farklı şekilde koyabilirsin:

- **Geniş yüzeyi üzerine** yatırarak
- **Dar yüzeyi üzerine** dikerek

Her iki durumda da tuğlanın **ağırlığı aynıdır**; yani kuma uyguladığı kuvvet değişmez. Ama sonuç değişir: dar yüzeyi üzerine dikildiğinde tuğla kuma **daha çok batar.**

Demek ki kuma batmayı belirleyen şey yalnız kuvvet değil. Aynı kuvvet dar bir yüzeye dağıldığında etkisi yoğunlaşır; geniş bir yüzeye dağıldığında etkisi seyrelir.

İşte bu “yoğunlaşma” basınçtır.

Şimdi iki ilişkiyi kuralım. *Bunları formülle değil, yönüyle kuracağız; çünkü program bu düzeyde matematiksel bağıntı istemez.*

**İlişki 1 — Ağırlık arttıkça basınç artar.** Temas yüzeyi aynı kalmak koşuluyla, cismin ağırlığı arttıkça yüzeye uyguladığı basınç da artar. Üzerine oturduğun bir minderin daha çok çökmesi bunun günlük hayattaki karşılığıdır.

**İlişki 2 — Temas yüzeyi arttıkça basınç azalır.** Ağırlık aynı kalmak koşuluyla, temas yüzeyi büyüdükçe basınç azalır. Kar ayakkabısı tam olarak bunu yapar.

Dikkat edilecek nokta: iki ilişkinin yönü **ters**tir. Biri “artarsa artar”, öbürü “artarsa azalır”. Bu yüzden iki değişkeni aynı anda değiştiren bir durumda sonucu tahmin etmek zorlaşır.

Son olarak dersin asıl becerisine gelelim. Kazanım “**deneyerek keşfeder**” diyor. Bir deneyde iki değişkeni aynı anda değiştirirsen, sonuçtaki değişikliğin hangisinden kaynaklandığını **bilemezsin.**

Bu yüzden bilimsel çalışmanın temel kuralı şudur: **tek seferde tek değişken.** Birini değiştir, öbürünü sabit tut. Bu kural bu dersin merkezidir ve Fen dersinin başka konularında da tekrar karşına çıkacaktır.`,
  },

  mechanism: {
    title: 'Aynı kuvvet nasıl farklı sonuç doğuruyor?',
    lead: 'Zinciri adım adım kurduğunda basıncın neden kuvvetten farklı olduğunu görürsün.',
    intro:
      'Aşağıdaki adımlar, bir cismin yüzeye nasıl etki ettiğini gösterir. Her adım bir öncekinin sonucudur.',
    steps: [
      {
        title: '1. Cismin bir ağırlığı vardır',
        body: 'Cisim, üzerinde durduğu yüzeye dik doğrultuda bir kuvvet uygular. Bu kuvvet cismin ağırlığıdır.',
      },
      {
        title: '2. Kuvvet temas yüzeyine dağılır',
        body: 'Kuvvet tek bir noktada değil, cismin zemine değdiği yüzeyin tamamına dağılır.',
      },
      {
        title: '3. Yüzey darsa etki yoğunlaşır',
        body: 'Aynı kuvvet dar bir yüzeye dağıldığında, yüzeyin her birimine daha büyük bir pay düşer. Basınç artar.',
      },
      {
        title: '4. Yüzey genişse etki seyrelir',
        body: 'Aynı kuvvet geniş bir yüzeye dağıldığında, yüzeyin her birimine daha küçük bir pay düşer. Basınç azalır.',
      },
      {
        title: '5. Zemin basınca göre tepki verir',
        body: 'Yumuşak bir zeminde basınç arttıkça batma miktarı artar. Bu yüzden batma miktarı, basıncın gözlenebilir bir göstergesidir.',
      },
      {
        title: '6. Sonuç gözlemle okunur',
        body: 'Basıncı doğrudan göremeyiz; ama batma miktarını ölçerek karşılaştırma yapabiliriz. Deneyde “ölçtüğümüz” şey budur.',
      },
    ],
    takeaway:
      'Zincirin kalbi 2. adımdır: kuvvet yüzeye dağılır. Basınç, bu dağılımın yoğunluğudur.',
  },

  comparison: {
    title: 'İki değişken, iki ters yön',
    columns: ['Ağırlık (uygulanan kuvvet)', 'Temas yüzeyinin alanı'],
    rows: [
      { label: 'Değişken artarsa basınç', values: ['Artar', 'Azalır'] },
      { label: 'Değişken azalırsa basınç', values: ['Azalır', 'Artar'] },
      { label: 'İlişkinin yönü', values: ['Aynı yönlü', 'Ters yönlü'] },
      { label: 'Günlük örnek', values: ['Sırt çantasına kitap eklemek', 'Kar ayakkabısı giymek'] },
      { label: 'Tasarımda nasıl kullanılır?', values: ['Batırmak isteniyorsa kuvvet artırılır', 'Batırmamak isteniyorsa yüzey genişletilir'] },
      { label: 'Deneyde nasıl sınanır?', values: ['Yüzey sabit, ağırlık değiştirilir', 'Ağırlık sabit, yüzey değiştirilir'] },
    ],
    insight:
      'Son satır bu dersin özüdür: bir değişkenin etkisini sınamak için öbürünü sabit tutmak zorundasın. İkisini birden değiştiren bir deney hiçbir şey kanıtlamaz.',
  },

  traps: [
    {
      title: 'Basınç ile kuvveti aynı sanmak',
      wrong: 'Ağır olan cisim her zaman daha çok basınç uygular.',
      right: 'Basınç, kuvvetin **yüzeye dağılımıdır**. Ağır bir cisim geniş bir yüzeye basıyorsa, hafif ama sivri bir cisimden daha **az** basınç uygulayabilir.',
      body: 'Bu yüzden ağırlığı çok olan paletli bir iş makinesi yumuşak zemine batmadan ilerleyebilirken, çok daha hafif bir topuklu ayakkabı aynı zemine batabilir. Belirleyici olan ikisinin birlikte değerlendirilmesidir.',
    },
    {
      title: 'Cismin bütün yüzeyini hesaba katmak',
      wrong: 'Basınç, cismin toplam yüzey alanına göre belirlenir.',
      right: 'Önemli olan cismin **zemine değdiği** yüzeydir. Havada kalan yüzeyler basıncı etkilemez.',
      body: 'Bir tuğlayı yan çevirdiğinde cismin toplam yüzeyi değişmez; değişen yalnız temas yüzeyidir. Sonucun değişmesi bu yüzden önemlidir.',
    },
    {
      title: 'Deneyde iki değişkeni birden değiştirmek',
      wrong: 'Daha ağır ve daha dar tabanlı bir cisim kullandım, daha çok battı; demek ki ağırlık basıncı artırıyor.',
      right: 'Bu deney hiçbir şey kanıtlamaz. İki değişken birden değiştiği için batmanın hangisinden kaynaklandığı bilinemez.',
      body: 'Kazanım “deneyerek keşfeder” diyor; keşfin geçerli olması için **tek seferde tek değişken** kuralına uymak zorunludur. Sorularda en çok bu ölçülür.',
    },
    {
      title: 'Basınç birimini karıştırmak',
      wrong: 'Basıncın birimi Newton’dur.',
      right: 'Newton **kuvvetin** birimidir. Basıncın birimi **Pascal**dır ve kısaca **Pa** ile gösterilir.',
      body: 'Program bu kazanımda birim olarak yalnız Pascal’ın verilmesini ister. Birimi doğru bilmek, basınç ile kuvveti ayırt ettiğini de gösterir.',
    },
  ],

  variables: {
    title: 'Deneyi kur: hangi değişkeni sınıyorum?',
    lead:
      'Kazanım “deneyerek keşfeder” diyor. Öyleyse önce deneyin değişkenlerini ayırmamız gerekiyor.',
    question: 'Ağırlığı aynı olan bir cismin temas yüzeyi değiştirilirse kuma batma miktarı değişir mi?',
    independent: {
      label: 'Cismin zemine değen yüzeyinin alanı',
      note: 'Ben değiştiriyorum: geniş yüzey / dar yüzey',
    },
    setup: {
      label: 'Düzgün serilmiş kum kabı',
      note: 'Cisim kumun üzerine serbest bırakılır',
    },
    dependent: {
      label: 'Cismin kuma batma miktarı',
      note: 'Ölçtüğüm: cetvelle batma derinliği',
    },
    controlled: [
      'Cismin ağırlığı (aynı cisim kullanılır)',
      'Kumun cinsi ve sıkılığı',
      'Cismin bırakıldığı yükseklik',
      'Ölçüm yöntemi ve ölçüm anı',
    ],
    caption:
      'Ağırlık bilerek sabit tutulur: aynı cismin farklı yüzeyleri kullanılır. Böylece batmadaki farkın tek olası nedeni yüzey alanı olur.',
  },

  experiment: {
    title: 'İki deney, iki değişken',
    intro:
      'Aşağıdaki iki deney ayrı ayrı yapılır. Birincisi yüzey alanının, ikincisi ağırlığın etkisini sınar. İkisini birleştirmek sonucu okunamaz hâle getirir.',
    steps: [
      { title: '1. Kumu hazırla', body: 'Geniş bir kaba kum düzgün biçimde serilir ve yüzeyi düzleştirilir. Her denemeden önce kum yeniden düzleştirilir.' },
      { title: '2. A deneyi — yüzeyi değiştir', body: 'Aynı tuğla, önce geniş yüzeyi üzerine, sonra dar yüzeyi üzerine bırakılır. Ağırlık değişmez, yalnız temas yüzeyi değişir.' },
      { title: '3. Batma miktarını ölç', body: 'Her denemede tuğlanın kuma batma derinliği cetvelle ölçülüp kaydedilir.' },
      { title: '4. B deneyi — ağırlığı değiştir', body: 'Tuğla hep aynı yüzeyi üzerinde durur; üzerine sırayla ağırlıklar eklenir. Temas yüzeyi değişmez, yalnız ağırlık değişir.' },
      { title: '5. Yine ölç ve kaydet', body: 'Her ağırlık için batma derinliği ölçülür. Ölçüm yöntemi iki deneyde de aynı tutulur.' },
      { title: '6. İki deneyi ayrı ayrı yorumla', body: 'A deneyi yüzeyin, B deneyi ağırlığın etkisini gösterir. Sonuçlar birbirine karıştırılmadan okunur.' },
    ],
    takeaway:
      'İki ayrı deney kurmamızın nedeni tek: her deneyde yalnız bir değişken değişsin ki sonucun nedeni belirlenebilsin.',
  },

  dataTable: {
    title: 'Gözlem kaydı: iki deneyin sonuçları',
    columns: ['Deney', 'Değiştirilen', 'Sabit tutulan', 'Batma miktarı', 'Çıkarım'],
    rows: [
      ['A-1', 'Geniş yüzey üzerinde', 'Ağırlık aynı', '4 mm', 'Yüzey genişken batma az'],
      ['A-2', 'Dar yüzey üzerinde', 'Ağırlık aynı', '11 mm', 'Yüzey daralınca batma arttı'],
      ['B-1', 'Tek tuğla', 'Yüzey aynı', '4 mm', 'Başlangıç ölçümü'],
      ['B-2', 'Üzerine bir tuğla daha', 'Yüzey aynı', '8 mm', 'Ağırlık artınca batma arttı'],
      ['B-3', 'Üzerine iki tuğla daha', 'Yüzey aynı', '12 mm', 'Ağırlık arttıkça batma artmayı sürdürdü'],
    ],
    caption:
      'A satırları yüzey alanının, B satırları ağırlığın etkisini gösterir. İki grup birbirinden bağımsız okunur. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir; basınç hesabı yapılmamıştır.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-kati-basinci-tek-degisken',
      title: 'Tek seferde tek değişken: neden zorunlu?',
      lead: 'Bu, yalnız bu konunun değil bütün Fen dersinin kuralıdır.',
      blocks: [
        {
          id: 'lgs-fen-kati-basinci-degisken-anlatim',
          type: 'prose',
          body: `Bir deneyde amacımız, bir değişkenin sonucu nasıl etkilediğini görmektir. Bunu yapabilmek için tek bir şartı sağlamamız gerekir: **sonuçtaki değişikliğin başka bir nedeni olmamalı.**

Bir örnek üzerinden görelim. Diyelim ki iki deneme yaptın:

- **1. deneme:** Hafif ve geniş tabanlı bir cisim → 3 mm battı
- **2. deneme:** Ağır ve dar tabanlı bir cisim → 12 mm battı

Batma arttı. Peki neden arttı? Ağırlık arttığı için mi, yüzey daraldığı için mi? **Bilemezsin.** İki değişken de aynı anda değişti; ikisi de batmayı artırma yönünde etki eder.

Bu deney bir sonuç vermez. Elinde bir gözlem var ama bir **çıkarım** yok.

Şimdi doğru kurulmuş bir deneye bakalım:

- **1. deneme:** Aynı tuğla, geniş yüzeyi üzerinde → 4 mm
- **2. deneme:** Aynı tuğla, dar yüzeyi üzerinde → 11 mm

Burada ağırlık değişmedi; aynı tuğlayı kullandık. Değişen tek şey temas yüzeyi. Öyleyse batmadaki artışın tek olası nedeni yüzeyin daralmasıdır. Bu bir **çıkarımdır.**

Şimdi değişkenleri adlandıralım. Bu adlandırma programda birçok kazanımda açıkça isteniyor:

- **Bağımsız değişken:** benim değiştirdiğim. (Burada: temas yüzeyinin alanı.)
- **Bağımlı değişken:** benim ölçtüğüm; bağımsız değişkene bağlı olarak değişen. (Burada: batma miktarı.)
- **Kontrol edilen değişkenler:** deney boyunca sabit tuttuklarım. (Burada: ağırlık, kumun cinsi, bırakma yüksekliği, ölçüm yöntemi.)

Kontrol edilen değişkenler listesine dikkat et. Yalnız “ağırlık” yazmak yeterli değildir. Kumun sıkılığı değişirse batma değişir; cisim daha yüksekten bırakılırsa batma değişir. Sonucu etkileyebilecek **her şey** sabit tutulmalıdır.

Bir soruda “bu deneyde hangi değişken sabit tutulmalıdır?” diye sorulduğunda, doğru cevap çoğu zaman öğrencilerin atladığı ayrıntıdır: kumun durumu, bırakma yüksekliği, ölçüm anı.

Son bir not: bu kural bu ünitenin dışında da geçerlidir. Isınma, fotosentez hızı, sıvı basıncı gibi konularda da aynı kural işler. Bir kez kurduğunda bütün yıl işine yarar.`,
        },
        {
          id: 'lgs-fen-kati-basinci-degisken-tablo',
          type: 'table',
          interactive: true,
          title: 'İki deneyin değişken çözümlemesi',
          columns: ['Deney', 'Bağımsız değişken', 'Bağımlı değişken', 'Kontrol edilenler'],
          rows: [
            [
              'A — yüzeyin etkisi',
              'Temas yüzeyinin alanı',
              'Batma miktarı',
              'Ağırlık, kumun cinsi, bırakma yüksekliği',
            ],
            [
              'B — ağırlığın etkisi',
              'Cismin ağırlığı',
              'Batma miktarı',
              'Temas yüzeyi, kumun cinsi, bırakma yüksekliği',
            ],
          ],
          caption:
            'İki satırı karşılaştır: A deneyinde ağırlık kontrol edilen değişken, B deneyinde bağımsız değişken. Aynı büyüklük, deneyin amacına göre rol değiştirir.',
        },
        {
          id: 'lgs-fen-kati-basinci-degisken-tuzak',
          type: 'trap',
          title: 'Kontrol edilen değişkenleri eksik saymak',
          wrong: 'Ağırlığı sabit tuttum, deney geçerlidir.',
          right: 'Sonucu etkileyebilecek **her şey** sabit tutulmalıdır: kumun sıkılığı, bırakma yüksekliği, ölçüm yöntemi.',
          body: 'Cismi farklı yükseklikten bırakırsan batma değişir ve bu fark yüzeyden değil yükseklikten gelir. Eksik kontrol, deneyi geçersiz kılar.',
        },
        {
          id: 'lgs-fen-kati-basinci-degisken-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda sık kullanılan bir kalıp var: iki düzenek verilir ve “hangi değişkenin etkisi araştırılmaktadır?” diye sorulur. Çözüm yolu tek: iki düzenek arasında **farklı olan** tek şeyi bul. Araştırılan değişken odur.',
        },
      ],
    },

    {
      id: 'lgs-fen-kati-basinci-tasarim',
      title: 'Günlük hayattaki tasarımlar hangi değişkeni kullanıyor?',
      lead: 'Her tasarım bir karar verir: basıncı artırmak mı istiyorum, azaltmak mı?',
      blocks: [
        {
          id: 'lgs-fen-kati-basinci-tasarim-anlatim',
          type: 'prose',
          body: `Çevrendeki pek çok nesne, basınç bilgisiyle tasarlanmıştır. Bu tasarımları iki gruba ayırabilirsin.

**Grup 1 — Basıncı azaltmak isteyenler.** Amaç batmayı, zarar vermeyi ya da zemine gömülmeyi önlemektir. Yöntem: **temas yüzeyini genişletmek.**

- **Kar ayakkabısı:** ayağın kara temas ettiği yüzeyi genişletir; kişi batmadan yürür.
- **Paletli iş makineleri ve traktörlerin geniş tekerlekleri:** ağır araçların yumuşak zemine gömülmesini önler.
- **Kamyonların çok tekerlekli olması:** yükün ağırlığı daha çok tekere dağıtılır; yola uygulanan basınç azalır.
- **Develerin geniş tabanları:** kuma batmadan yürümelerini sağlar.
- **Binaların geniş temelleri:** yapının ağırlığı geniş bir yüzeye dağıtılır; zemine uygulanan basınç azalır.
- **Sırt çantasının geniş askıları:** aynı ağırlık omuzda daha geniş bir yüzeye dağılır, omuz daha az acır.

**Grup 2 — Basıncı artırmak isteyenler.** Amaç kesmek, delmek ya da batmaktır. Yöntem: **temas yüzeyini daraltmak.**

- **Bıçağın keskin olması:** aynı kuvvet çok dar bir yüzeye dağılır; kesme kolaylaşır.
- **Çivi ve raptiyenin sivri ucu:** aynı kuvvetle daha kolay batar.
- **İğnenin inceliği:** kumaşa ya da deriye kolay girmesini sağlar.
- **Buz pateninin ince bıçağı:** buza uygulanan basıncı artırır.
- **Hayvanların sivri diş ve tırnakları:** aynı kuvvetle daha etkili olur.

Şimdi bu listeye bir kez daha bak ve şunu fark et: **hiçbirinde ağırlık değiştirilmiyor.** Hepsi **yüzey** üzerinden çözüm üretiyor.

Bunun nedeni basit: ağırlığı değiştirmek çoğu zaman elimizde değildir. Bir kamyonun taşıdığı yükü azaltamayız ama tekerlek sayısını artırabiliriz. Bir insanın ağırlığını değiştiremeyiz ama ayakkabısının tabanını genişletebiliriz.

Bu, mühendislikte sık karşılaşılan bir durumdur: değiştiremediğin değişkeni kabul eder, değiştirebildiğin değişken üzerinden çözüm kurarsın.

Son olarak bir soru sorma alışkanlığı kazan: bir tasarım gördüğünde kendine sor — **“Bu nesne basıncı artırmak için mi, azaltmak için mi böyle yapılmış?”** Cevabı çoğu zaman temas yüzeyine bakarak bulursun.`,
        },
        {
          id: 'lgs-fen-kati-basinci-tasarim-tablo',
          type: 'table',
          interactive: true,
          title: 'Tasarımları amacına göre ayır',
          columns: ['Nesne', 'Amaç', 'Kullanılan değişken', 'Nasıl?'],
          rows: [
            ['Kar ayakkabısı', 'Basıncı azaltmak', 'Temas yüzeyi', 'Yüzey genişletilir'],
            ['Paletli iş makinesi', 'Basıncı azaltmak', 'Temas yüzeyi', 'Palet zemine geniş temas eder'],
            ['Binanın geniş temeli', 'Basıncı azaltmak', 'Temas yüzeyi', 'Ağırlık geniş yüzeye dağıtılır'],
            ['Bıçağın keskin ağzı', 'Basıncı artırmak', 'Temas yüzeyi', 'Yüzey daraltılır'],
            ['Raptiyenin sivri ucu', 'Basıncı artırmak', 'Temas yüzeyi', 'Yüzey daraltılır'],
            ['Buz pateninin bıçağı', 'Basıncı artırmak', 'Temas yüzeyi', 'Çok ince bir yüzeyle temas edilir'],
          ],
          caption:
            'Altı örneğin altısında da kullanılan değişken aynı: temas yüzeyi. Değişen yalnız amaç.',
        },
        {
          id: 'lgs-fen-kati-basinci-tasarim-hafiza',
          type: 'memory',
          title: 'Tek cümlelik kural',
          body:
            '**Batmak istemiyorsan yüzeyi genişlet, batmak istiyorsan yüzeyi daralt.** Ağırlık çoğu zaman elinde değildir; yüzey elindedir.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Hangi değişken araştırılıyor?',
      prompt:
        'Bir öğrenci aynı tuğlayı önce geniş yüzeyi, sonra dar yüzeyi üzerine kum dolu bir kaba bırakıyor ve her seferinde batma miktarını ölçüyor. Bu deneyde hangi değişkenin etkisi araştırılmaktadır?',
      steps: [
        { title: '1. İki denemeyi karşılaştır', body: 'Birinci denemede geniş yüzey, ikinci denemede dar yüzey kullanılmış.' },
        { title: '2. Farklı olanı bul', body: 'Aynı tuğla kullanıldığına göre ağırlık değişmemiş. Değişen tek şey temas yüzeyinin alanı.' },
        { title: '3. Bağımsız değişkeni adlandır', body: 'Öğrencinin bilerek değiştirdiği büyüklük temas yüzeyinin alanıdır; bağımsız değişken budur.' },
        { title: '4. Bağımlı değişkeni adlandır', body: 'Ölçülen büyüklük batma miktarıdır; bağımlı değişken budur.' },
        { title: '5. Soruyu cevapla', body: 'Bu deneyde **temas yüzeyinin alanının** basınca etkisi araştırılmaktadır.' },
      ],
      answer: 'Temas yüzeyinin alanının etkisi araştırılmaktadır.',
      takeaway:
        'Araştırılan değişkeni bulmanın yolu tek: iki düzenek arasında farklı olan şeyi bul.',
    },
    {
      title: 'Seviye 2 — Geçersiz deneyi düzelt',
      prompt:
        'Bir öğrenci, ağırlığın basınca etkisini araştırmak için önce hafif ve geniş tabanlı bir kutuyu, sonra ağır ve dar tabanlı bir kutuyu kuma bırakıyor. İkinci kutu daha çok batıyor ve öğrenci “ağırlık basıncı artırır” sonucuna varıyor. Bu deneyin hatası nedir? Nasıl düzeltilir?',
      steps: [
        { title: '1. Öğrencinin amacını yaz', body: 'Amaç, ağırlığın basınca etkisini görmek. Öyleyse bağımsız değişken ağırlık olmalı.' },
        { title: '2. Neyin değiştiğine bak', body: 'İki kutu arasında hem ağırlık hem taban alanı farklı. İki değişken birden değişmiş.' },
        { title: '3. Sonucun neden okunamadığını göster', body: 'Batmadaki artış ağırlığın artmasından da, tabanın daralmasından da kaynaklanabilir. İkisi de batmayı artırma yönünde etki eder.' },
        { title: '4. Hatayı adlandır', body: 'Kontrol edilmesi gereken bir değişken (taban alanı) sabit tutulmamış. Deney geçersizdir; çıkarım yapılamaz.' },
        { title: '5. Düzeltmeyi kur', body: 'Taban alanı aynı olan kutular kullanılmalı; ya da aynı kutu hep aynı yüzeyi üzerinde tutulup üzerine ağırlık eklenmeli.' },
        { title: '6. Doğru deneyi yaz', body: 'Aynı kutu, hep aynı yüzeyi üzerinde. Üzerine sırayla ağırlıklar ekleniyor ve her seferinde batma ölçülüyor. Şimdi tek değişken ağırlıktır.' },
      ],
      answer:
        'Hata, iki değişkenin birden değiştirilmesidir. Taban alanı sabit tutularak yalnız ağırlık değiştirilmelidir.',
      takeaway:
        'Bir çıkarımın geçerli olması, deneyin kurulumuna bağlıdır. Yanlış kurulmuş bir deneyin doğru görünen sonucu da geçersizdir.',
    },
    {
      title: 'Seviye 3 — Tasarımı gerekçelendir',
      prompt:
        'Yumuşak ve çamurlu bir arazide çalışacak bir iş makinesi tasarlanıyor. Makinenin ağırlığı azaltılamıyor. Makinenin çamura gömülmemesi için ne yapılmalıdır? Gerekçeni değişkenlerle kur.',
      steps: [
        { title: '1. İstenen sonucu yaz', body: 'Makinenin zemine uyguladığı basınç azaltılmalı; böylece çamura gömülmez.' },
        { title: '2. Değişkenleri listele', body: 'Katı basıncını iki değişken etkiler: ağırlık ve temas yüzeyinin alanı.' },
        { title: '3. Elde olmayanı ele', body: 'Soruda ağırlığın azaltılamayacağı söylenmiş. Öyleyse bu değişken üzerinden çözüm kurulamaz.' },
        { title: '4. Kalan değişkeni kullan', body: 'Geriye temas yüzeyi kalıyor. Ağırlık sabitken temas yüzeyi büyüdükçe basınç azalır.' },
        { title: '5. Tasarımı öner', body: 'Makineye zemine geniş temas eden paletler ya da geniş tekerlekler takılmalıdır.' },
        { title: '6. Gerekçeyi tamamla', body: 'Aynı ağırlık daha geniş bir yüzeye dağılınca yüzeyin her birimine düşen pay azalır; zemine uygulanan basınç düşer ve makine gömülmez.' },
      ],
      answer:
        'Zemine geniş temas eden paletler ya da geniş tekerlekler kullanılmalıdır. Ağırlık sabitken temas yüzeyi büyüdükçe basınç azalır.',
      takeaway:
        'Mühendislik kararları çoğu zaman şöyle kurulur: değiştiremediğin değişkeni kabul et, değiştirebildiğin değişken üzerinden çöz.',
    },
  ],

  dailyLife: {
    title: 'Basınç günlük hayatın neresinde?',
    body:
      'Aşağıdaki örneklerin hepsinde aynı iki değişken iş başındadır: ağırlık ve temas yüzeyi.',
    links: [
      'Kar ayakkabısı ve geniş tabanlı botlar batmayı azaltır.',
      'Traktör ve iş makinelerinin geniş tekerlekleri toprağa gömülmeyi önler.',
      'Binaların temeli, yapının ağırlığını geniş bir yüzeye dağıtır.',
      'Bıçak, makas ve iğne gibi araçlar ince yapılarıyla basıncı artırır.',
      'Sırt çantasının geniş askıları omuza uygulanan basıncı azaltır.',
      'Kamyonların çok tekerlekli olması yola uygulanan basıncı düşürür.',
    ],
  },

  questionClue: {
    concept: 'Katı basıncı sorusu',
    statement:
      'Soruda iki düzenek, bir batma gözlemi ya da bir tasarım anlatılıyorsa, ölçülen şey değişken ayrımıdır.',
    clues: [
      'İki ya da daha çok düzeneğin karşılaştırılması',
      'Kum, un ya da köpük gibi yumuşak bir zeminden söz edilmesi',
      '“Hangi değişkenin etkisi araştırılmaktadır?” kalıbı',
      'Bir nesnenin neden geniş ya da sivri yapıldığının sorulması',
      '“Sabit tutulmalıdır” ifadesi',
    ],
    reasoning:
      'Bu işaretler tek bir işlemi ister: düzenekler arasında **farklı olan** tek şeyi bulmak. Farklı olan bağımsız değişkendir; ölçülen bağımlı değişkendir; geri kalan her şey kontrol edilen değişkendir.',
    boundary:
      'Bu ipuçlarını “ağır olan çok batar” gibi bir kısayola çevirme. Ağırlık tek başına belirleyici değildir; temas yüzeyiyle birlikte değerlendirilir. Ayrıca bu düzeyde sayısal basınç hesabı istenmez.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.3.1.1 kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'İki düzenek verilip araştırılan değişkenin sorulması',
      'Bir deneyde sabit tutulması gereken değişkenlerin belirlenmesi',
      'Yanlış kurulmuş bir deneyin hatasının bulunması',
      'Bir tasarımın basıncı artırmak mı azaltmak mı istediğinin sorulması',
      'Gözlem verisinden değişken ilişkisinin çıkarılması',
      'Basınç ile kuvvetin ayırt edilmesi ve biriminin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Aynı tuğlayı geniş yüzeyi ve dar yüzeyi üzerine koyduğumuzda kuma farklı miktarda batıyor. Tuğlanın ağırlığı değişmediğine göre bu farkın nedeni nedir?',
      hint: 'Değişen tek büyüklük hangisi?',
      answer:
        'Farkın nedeni **temas yüzeyinin alanıdır.** Tuğlanın ağırlığı, yani kuma uyguladığı kuvvet değişmemiştir; değişen tek şey kuvvetin dağıldığı yüzeydir. Aynı kuvvet dar bir yüzeye dağıldığında yüzeyin her birimine daha büyük bir pay düşer, yani basınç artar ve batma artar. Geniş yüzeyde ise kuvvet daha çok yüzeye dağılır, basınç azalır ve batma azalır.',
    },
    {
      prompt:
        'Bir öğrenci ağırlığın etkisini araştırmak istiyor ama her denemede farklı taban alanına sahip kutular kullanıyor. Bu deneyden geçerli bir sonuç çıkar mı?',
      hint: 'Kaç değişken aynı anda değişiyor?',
      answer:
        'Çıkmaz. Bu deneyde iki değişken birden değişmektedir: hem ağırlık hem taban alanı. Batma miktarındaki değişikliğin hangisinden kaynaklandığı belirlenemez; çünkü ikisi de batmayı etkiler. Geçerli bir sonuç için taban alanı sabit tutulmalı, yalnız ağırlık değiştirilmelidir. Kazanımın istediği “deneyerek keşfetme” ancak bu koşulda mümkündür.',
    },
    {
      prompt:
        'Ağır bir paletli iş makinesi çamura gömülmezken, çok daha hafif bir kişi aynı zemine batabiliyor. Bu durum “ağır cisim daha çok basınç uygular” ifadesiyle çelişir mi?',
      hint: 'Basınç yalnız ağırlığa mı bağlı?',
      answer:
        'Çelişmez; çünkü o ifade zaten eksiktir. Basınç yalnız ağırlığa değil, ağırlığın dağıldığı **temas yüzeyine** de bağlıdır. Paletli makinenin ağırlığı çok geniş bir yüzeye dağıldığı için zemine uyguladığı basınç düşüktür. Kişinin ağırlığı ise çok küçük bir ayak yüzeyine dağılır ve basınç yüksek olur. Doğru ifade şudur: temas yüzeyi aynı kalmak koşuluyla ağırlık arttıkça basınç artar.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey hesap değil, değişken ayrımı',
    body:
      'Kazanımın fiili açık: “değişkenleri **deneyerek keşfeder**.” Program ayrıca bu kazanımda matematiksel bağıntılara girilmemesini ister. İkisi birlikte şunu söyler: bu konuda senden bir hesap beklenmez; bir deneyi okuyup hangi değişkenin sınandığını, hangilerinin sabit tutulması gerektiğini belirlemen beklenir. MEB merkezî sınav kılavuzu da soruların yorumlama, analiz ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir.',
    measures: [
      'Basınç ile kuvveti ayırt edebilme',
      'Katı basıncını etkileyen iki değişkeni bilme',
      'İki düzenek arasında araştırılan değişkeni belirleyebilme',
      'Sabit tutulması gereken değişkenleri eksiksiz sayabilme',
      'Yanlış kurulmuş bir deneyin neden sonuç vermediğini açıklayabilme',
      'Günlük hayattaki tasarımların hangi değişkeni kullandığını çözümleyebilme',
    ],
  },

  simulationTable: {
    title: 'Dört düzenekle yapılan bir çalışmanın kaydı',
    columns: ['Düzenek', 'Cismin ağırlığı', 'Temas yüzeyi', 'Kuma batma miktarı'],
    rows: [
      ['1', 'Az', 'Geniş', '3 mm'],
      ['2', 'Az', 'Dar', '9 mm'],
      ['3', 'Çok', 'Geniş', '7 mm'],
      ['4', 'Çok', 'Dar', '18 mm'],
    ],
    caption:
      'Dört düzenekte de aynı kum kabı kullanılmış, cisimler aynı yükseklikten bırakılmış ve batma miktarı aynı yöntemle ölçülmüştür.',
  },

  simulation: {
    title: 'Mini uygulama — özgün düzenek kaydı',
    passage: `Bir öğrenci dört farklı düzenek kurup her birinde cismin kuma batma miktarını ölçüyor ve yukarıdaki kaydı tutuyor.

Öğrenci, yalnız **temas yüzeyinin** etkisini gösteren bir karşılaştırma yapmak istiyor.`,
    question: 'Öğrenci bu amaç için hangi iki düzeneği karşılaştırmalıdır?',
    options: [
      {
        text: '1 ve 3',
        explanation:
          'Bu iki düzenekte temas yüzeyi aynı (geniş), ağırlık farklı. Bu karşılaştırma yüzeyin değil, **ağırlığın** etkisini gösterir.',
      },
      {
        text: '1 ve 2',
        explanation:
          'Doğru cevap. İki düzenekte de ağırlık aynı (az); değişen tek şey temas yüzeyi (geniş → dar). Batmanın 3 mm’den 9 mm’ye çıkması, tek değişkenin yüzey olduğu bir karşılaştırmadan gelir.',
      },
      {
        text: '1 ve 4',
        explanation:
          'Bu iki düzenekte hem ağırlık hem temas yüzeyi farklı. İki değişken birden değiştiği için batmadaki artışın hangisinden geldiği belirlenemez.',
      },
      {
        text: '2 ve 3',
        explanation:
          'Bu iki düzenekte de hem ağırlık hem temas yüzeyi farklı. Üstelik iki değişken ters yönde değişmiş; böyle bir karşılaştırmadan hiçbir çıkarım yapılamaz.',
      },
      {
        text: 'Dördü birden karşılaştırılmalıdır',
        explanation:
          'Dört düzeneği birlikte okumak genel bir izlenim verir; ama tek bir değişkenin etkisini göstermez. Bir değişkenin etkisini göstermek için öbürünün sabit olduğu iki düzenek seçilir.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru, bir amaç için doğru karşılaştırmayı seçmeyi istiyor. Yöntem: amaçlanan değişkenin **farklı**, öbür değişkenin **aynı** olduğu iki satırı bul. Bu bir hesap değil, bir eşleştirme işidir.',
    critical_point:
      'Kritik nokta 2 ve 4 numaralı düzeneklerin de bir çift oluşturmasıdır: ikisinde de yüzey dar, ağırlık farklı — yani onlar ağırlığın etkisini gösterir. Yüzey için ise ağırlığın eşit olduğu çiftler gerekir: 1–2 ya da 3–4.',
    takeaway:
      'Bir değişkenin etkisi, ancak öbür değişkenin sabit olduğu bir karşılaştırmayla gösterilebilir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Katı basıncı ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Basınç, cismin ağırlığıyla aynı anlama gelir',
        'Basınç, kuvvetin temas yüzeyine dağılımıdır ve birimi Pascal’dır',
        'Basınç yalnız cismin toplam yüzey alanına bağlıdır',
        'Basıncın birimi Newton’dur ve yalnız ağırlığa bağlıdır',
      ],
      answer_index: 1,
      explanation:
        'Basınç, bir yüzeye dik olarak etki eden kuvvetin birim yüzeye düşen miktarıdır; yani kuvvetin yüzeye dağılımıdır. Birimi Pascal’dır (Pa). Newton kuvvetin birimidir, basıncın değil. Ayrıca belirleyici olan cismin toplam yüzeyi değil, zemine **değdiği** yüzeydir.',
    },
    {
      purpose: 'apply',
      question:
        'Aynı ağırlıktaki bir cismin zemine değen yüzeyi genişletilirse zemine uyguladığı basınç nasıl değişir?',
      options: [
        'Artar',
        'Azalır',
        'Değişmez',
        'Önce artar sonra azalır',
      ],
      answer_index: 1,
      explanation:
        'Ağırlık sabitken temas yüzeyi büyüdükçe aynı kuvvet daha çok yüzeye dağılır; yüzeyin her birimine düşen pay azalır ve basınç düşer. Kar ayakkabısının çalışma mantığı budur. Basıncın değişmemesi için ikisinin de sabit kalması gerekirdi.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, yüzey alanının etkisini araştırmak için hem farklı ağırlıkta hem farklı tabanda cisimler kullanıyor. Bu deneyin hatası nedir?',
      options: [
        'Kontrol edilmesi gereken değişkeni sabit tutmamak',
        'Bağımlı değişkeni ölçmemek',
        'Yanlış birim kullanmak',
        'Deneyi yeterince tekrar etmemek',
      ],
      answer_index: 0,
      explanation:
        'Yüzey alanının etkisini araştırmak için ağırlık kontrol edilen değişken olmalı, yani sabit tutulmalıdır. İki değişken birden değiştiğinde batmadaki değişikliğin hangisinden kaynaklandığı belirlenemez ve deneyden geçerli bir çıkarım yapılamaz. Öğrenci bağımlı değişkeni (batma miktarı) ölçmüştür; sorun ölçümde değil, kurulumda.',
    },
  ],

  summary: [
    'Basınç, bir yüzeye dik olarak etki eden kuvvetin birim yüzeye düşen miktarıdır.',
    'Basınç kuvvetle aynı şey değildir; kuvvetin yüzeye dağılımıdır.',
    'Basıncın birimi Pascal’dır ve kısaca Pa ile gösterilir.',
    'Katı basıncını iki değişken etkiler: cismin ağırlığı ve temas yüzeyinin alanı.',
    'Temas yüzeyi sabitken ağırlık arttıkça basınç artar.',
    'Ağırlık sabitken temas yüzeyi arttıkça basınç azalır.',
    'Belirleyici olan cismin toplam yüzeyi değil, zemine değdiği yüzeydir.',
    'Bir değişkenin etkisini sınamak için öbürü sabit tutulmalıdır: tek seferde tek değişken.',
    'Kontrol edilen değişkenler eksiksiz sayılmalıdır: kumun durumu, bırakma yüksekliği, ölçüm yöntemi.',
    'Basıncı azaltmak için yüzey genişletilir, artırmak için yüzey daraltılır.',
    'Bu düzeyde basınç formülü ve sayısal basınç hesabı istenmez.',
  ],

  next: [
    'Sıvı ve Gaz Basıncı, Günlük Yaşam Uygulamaları (F.8.3.1.2, F.8.3.1.3)',
    'Periyodik Sistem: Grup, Periyot, Metal–Ametal (F.8.4.1.1)',
    'Maddenin Isı ile Etkileşimi (F.8.4.5.1 — aynı değişken kuralı burada da işler)',
  ],
})

export default lesson
