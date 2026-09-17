import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Cümlede Anlam · 1. ders
 * Kazanım : T.8.3.25
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Kazanım açıklaması şu ilişkileri sayar: neden-sonuç, amaç-sonuç, koşul,
 * karşılaştırma, benzetme, örneklendirme, abartma, nesnel, öznel ve duygu
 * belirten ifadeler. Bu ders ilk yedisini işler; öznel/nesnel ve duygu
 * ayrımı aynı kazanımın devamı olarak bir sonraki derste ele alınır.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-cumlede-anlam-iliskileri',
  topic: 'Cümlede Anlam',
  order: 1,
  title: 'Cümlede Anlam İlişkileri: Neden, Amaç, Koşul, Karşılaştırma',
  subtitle:
    'İlişkiyi bağlaç değil anlam kurar. “İçin” bazen neden bazen amaç bildirir; ayrımı gerçekleşme testi yapar.',
  minutes: 44,
  kazanimlar: [
    { kod: 'T.8.3.25', metin: 'Okudukları ile ilgili çıkarımlarda bulunur.' },
  ],
  prerequisites: [
    { topic: 'Cümlede yargı kavramı', why: 'İlişkiyi bulmak için önce cümledeki iki ayrı yargıyı görmen gerekir.' },
    { topic: 'Bağlamda sözcük anlamı', why: 'Aynı bağlacın farklı anlamlar taşıdığını ancak bağlamla ayırabilirsin.' },
  ],
  outcomes: [
    'Bir cümledeki iki yargıyı ayırıp aralarındaki ilişkiyi adlandırabileceksin.',
    'Neden-sonuç ile amaç-sonuç ilişkisini gerçekleşme testiyle ayırabileceksin.',
    'Koşul ilişkisinin “olmazsa olmaz” niteliğini gösterebileceksin.',
    'Karşılaştırma, benzetme, örneklendirme ve abartmayı birbirinden ayırabileceksin.',
    'Aynı bağlacın farklı ilişkiler kurabildiğini örnekle açıklayabileceksin.',
  ],

  opening: {
    title: 'Aynı sözcük, iki ayrı ilişki',
    lead: 'Bir cümlede “için” görmek yetmez. O sözcük bir cümlede nedeni, başka bir cümlede amacı bildirir.',
    body: `Şu iki cümleye bak: “Yağmur yağdığı **için** ıslandı.” ve “Islanmamak **için** şemsiye aldı.” İkisinde de aynı sözcük var, ama kurulan ilişki bambaşka. Birincide ıslanmak **gerçekleşmiş** bir sonuçtur ve yağmur onun sebebidir. İkincide ıslanmamak henüz gerçekleşmemiş bir **hedeftir**; kişi o hedefe ulaşmak için bir şey yapmıştır.

Bu fark, cümlede anlam sorularının tamamının kurulduğu zemindir. MEB 8. sınıf programındaki **T.8.3.25** kazanımı, öğrencinin okudukları ile ilgili çıkarımlarda bulunmasını ister ve açıklamasında neden-sonuç, amaç-sonuç, koşul, karşılaştırma, benzetme, örneklendirme, abartma gibi ilişkileri açıkça sayar.

Burada baştan uyarmam gereken bir şey var: bu ilişkileri **bağlaç listesi ezberleyerek** çözemezsin. “Çünkü varsa neden, için varsa amaç, -sa varsa koşul” gibi kestirmeler ilk on soruda işe yarar, sonra seni yanıltır. Çünkü Türkçede aynı ek ve aynı bağlaç birden fazla ilişki kurabilir. “Erken kalkarsa yetişir.” cümlesinde *-sa* koşul bildirir; “Ne zaman baksam uyuyordu.” cümlesinde aynı ek koşul bildirmez.

O hâlde neye bakacağız? **Yargıların kendisine.** Her ilişkili cümlede en az iki yargı vardır ve ilişki, o iki yargı arasındaki bağdır. Bu yüzden ilk işimiz cümleyi ikiye ayırmak, ikinci işimiz aralarındaki bağın türünü sormak olacak.

Ders boyunca önce iki yargıyı ayırmayı, sonra beş duraklı bir karar yolunu, ardından neden–amaç–koşul üçlüsünü kesin bir testle ayırmayı çalışacağız. Son bölümde karşılaştırma, benzetme, örneklendirme ve abartmayı tek tek tanıyacağız.`,
  },

  concepts: [
    {
      term: 'Neden-sonuç ilişkisi',
      body: 'Bir yargının başka bir yargıyı doğurmasıdır. **İki yargı da gerçekleşmiştir.** “Otobüsü kaçırdığı için derse geç kaldı.” Kaçırma da olmuş, geç kalma da. Sorusu: “Neden?”',
    },
    {
      term: 'Amaç-sonuç ilişkisi',
      body: 'Bir eylemin belirli bir hedefe ulaşmak için yapılmasıdır. **Hedef henüz gerçekleşmemiş olabilir.** “Derse geç kalmamak için erken çıktı.” Erken çıkma olmuş; geç kalmama ise istenen sonuçtur. Sorusu: “Ne amaçla?”',
    },
    {
      term: 'Koşul (şart) ilişkisi',
      body: 'Bir yargının gerçekleşmesinin başka bir yargıya bağlanmasıdır. Koşul yerine gelmezse sonuç da olmaz. “Ödevini bitirirse dışarı çıkabilir.” Sorusu: “Hangi şartla?”',
    },
    {
      term: 'Karşılaştırma',
      body: 'İki varlık, durum veya kavramın ortak bir özellik bakımından üstünlük, eşitlik veya farklılık yönünden bir arada değerlendirilmesidir. “Bu kitap ötekinden daha akıcı.” Karşılaştırmada **iki taraf** bulunmak zorundadır.',
    },
    {
      term: 'Benzetme',
      body: 'Bir varlığın, bir özelliği bakımından kendinden güçlü bir başkasına benzetilmesidir. “Sesi kadife gibiydi.” Karşılaştırmadan farkı: taraflar eşit değildir, biri ötekine örnek olarak kullanılır ve amaç ölçmek değil anlatmaktır.',
    },
    {
      term: 'Örneklendirme',
      body: 'Söylenen genel bir yargının somut bir örnekle desteklenmesidir. “Bazı kuşlar göç eder; leylekler buna iyi bir örnektir.” Örnek, yargının kapsamına giren gerçek bir durumdur.',
    },
    {
      term: 'Abartma',
      body: 'Bir özelliğin gerçekte olabileceğinden çok daha büyük ya da küçük gösterilmesidir. “Bu çantayı taşımaktan kolum kopacaktı.” Gerçek bir ölçü değil, etkiyi büyütme amacı taşır.',
    },
  ],

  why: {
    question: 'Neden bağlaç ezberi bu konuda çöker?',
    body: `Çünkü Türkçede ilişkiyi taşıyan sözcükler **çok görevlidir**. Bir sözcük, bulunduğu cümleye göre farklı bir bağ kurar. En bilinen üç örnek şunlar:

**“İçin”** hem neden hem amaç bildirebilir. “Hasta olduğu için gelmedi.” (neden) — “İyileşmek için ilaç içti.” (amaç). Ayrımı yapan şey sözcük değil, ikinci yargının gerçekleşmiş olup olmamasıdır.

**“-mek/-mak” mastarı ve “diye”** çoğu zaman amaç bildirir ama her zaman değil: “Gelir diye bekledi.” cümlesinde bir beklenti, “Yağmur yağıyor diye çıkmadı.” cümlesinde bir sebep vardır.

**“-se/-sa” eki** çoğu zaman koşul bildirir, ama “İstesen de olmaz.” cümlesinde bir karşıtlık, “Ne zaman baksam uyuyordu.” cümlesinde bir zaman ilişkisi kurar.

Bu yüzden soruyu çözen şey ezber değil, **test**tir. Dersteki bütün yol şu tek fikre dayanır: cümledeki iki yargıyı ayır, sonra ikisinin birbirine nasıl bağlandığını gerçekleşme ve bağımlılık açısından sına.

Bir de ölçme tarafından bakalım. Soru hazırlayanlar tam olarak bu çok görevliliği kullanır. Bir soruda dört cümlenin dördünde de “için” geçiyorsa, o sorunun amacı “için” sözcüğünü tanıyıp tanımadığını ölçmek değildir — ilişkinin **anlamını** ayırt edip edemediğini ölçmektir. Bağlaç ezberleyen öğrenci o soruda dördünü de aynı sayar ve elenir.`,
  },

  decision: {
    title: 'İlişkiyi adlandırma yolu',
    lead: 'Önce cümleyi böl, sonra bağı sına. Sıra değişirse sonuç da değişir.',
    intro:
      'İlişki sorusunda şu beş durağı uygula. İkinci ve üçüncü duraklar bu dersin ayırt edici testleridir.',
    steps: [
      {
        title: '1. Cümleyi iki yargıya ayır',
        body: 'Cümlede kaç ayrı iş, oluş ya da durum bildiriliyor? Her birini kısa bir cümleye çevir. “Otobüsü kaçırdığı için geç kaldı.” → (1) Otobüsü kaçırdı. (2) Geç kaldı. İlişki hep bu ikisi arasındadır.',
      },
      {
        title: '2. Gerçekleşme testini uygula',
        body: 'İki yargı da gerçekleşmiş mi? İkisi de olduysa neden-sonuç adayıdır. İkincisi henüz olmamış, istenen bir hedefse amaç-sonuç adayıdır. Bu tek test, neden ile amacı ayırır.',
      },
      {
        title: '3. Bağımlılık testini uygula',
        body: 'Birinci yargı gerçekleşmezse ikincisi kesinlikle olmaz mı? Olmuyorsa ilişki koşuldur. Koşulda birinci yargı henüz gerçekleşmemiştir; bir kapı gibi önde durur.',
      },
      {
        title: '4. Bağlacı değil anlamı doğrula',
        body: 'Bulduğun ilişkiyi bağlaca değil cümlenin anlamına dayandır. Kendine sor: bu cümleden bağlacı çıkarıp “çünkü / …mak amacıyla / …şartıyla” koysam anlam bozulur mu? Bozulmuyorsa adlandırman doğrudur.',
      },
      {
        title: '5. Karşıt örnekle sına',
        body: 'Aynı bağlaçla farklı bir ilişki kuran bir cümle düşün. Düşünebiliyorsan, adlandırmanı bağlaca değil anlama dayandırmışsın demektir. Düşünemiyorsan ezbere kaymış olabilirsin; ikinci durağa dön.',
      },
    ],
    takeaway: 'İlişkiyi bağlaç değil, iki yargı arasındaki bağın türü belirler.',
  },

  decisionTree: {
    title: 'Neden mi, amaç mı, koşul mu?',
    intro:
      'Üçü de “bir yargı öteki yargıya bağlanıyor” görüntüsü verir. Aşağıdaki üç kontrol sırayla uygulandığında ayrım kesinleşir.',
    checks: [
      {
        question: 'İkinci yargı, henüz gerçekleşmemiş bir istek veya hedef mi?',
        yes: 'Amaç-sonuç ilişkisidir. Örnek: “Sınavı kazanmak için her gün çalıştı.” — kazanmak henüz olmamış olabilir.',
        no: 'Amaç değildir; ikinci kontrole geç.',
      },
      {
        question: 'Birinci yargı gerçekleşmezse ikincisi kesinlikle olmaz mı?',
        yes: 'Koşul ilişkisidir. Örnek: “Ödevini bitirirse dışarı çıkabilir.” — bitirmezse çıkamaz.',
        no: 'Koşul değildir; üçüncü kontrole geç.',
      },
      {
        question: 'İki yargı da gerçekleşmiş ve biri ötekini doğurmuş mu?',
        yes: 'Neden-sonuç ilişkisidir. Örnek: “Yolda kaldığı için toplantıya yetişemedi.”',
        no: 'İlişki bu üçünden biri değildir; karşılaştırma, benzetme, örneklendirme veya abartma olabilir.',
      },
    ],
    takeaway:
      'Sıra önemlidir. Amaç kontrolünü başa koymamızın sebebi, amaç cümlelerinin çoğunda “için” geçmesi ve o sözcüğün nedenle karışmasıdır.',
  },

  comparison: {
    title: 'Neden, amaç ve koşulu testle ayır',
    columns: ['Neden-sonuç', 'Amaç-sonuç', 'Koşul'],
    rows: [
      { label: 'Sorusu', values: ['Neden? Niçin oldu?', 'Ne amaçla? Hangi hedefle?', 'Hangi şartla?'] },
      { label: 'Gerçekleşme', values: ['İki yargı da gerçekleşmiş', 'Hedef gerçekleşmemiş olabilir', 'Koşul henüz gerçekleşmemiş'] },
      { label: 'Örnek', values: ['Yolda kaldığı için geç kaldı.', 'Geç kalmamak için erken çıktı.', 'Erken çıkarsa geç kalmaz.'] },
      { label: 'Tipik taşıyıcı', values: ['için, -dığından, yüzünden, çünkü', 'için, -mek üzere, diye, amacıyla', '-se/-sa, şartıyla, takdirde'] },
      { label: 'Yanıltıcı yanı', values: ['“İçin” amaç sanılır', '“İçin” neden sanılır', '“-sa” karşıtlık veya zaman bildirebilir'] },
      { label: 'Kesin test', values: ['İkisi de oldu mu?', 'İkincisi istenen bir hedef mi?', 'Biri olmazsa öteki olmaz mı?'] },
    ],
    insight:
      'Üç ilişkinin de taşıyıcısı ortak olabilir; ayıran şey taşıyıcı değil, yargıların gerçekleşme durumudur.',
  },

  traps: [
    {
      title: '“İçin” gördüğü an amaç demek',
      wrong: '“Hasta olduğu için okula gelmedi.” cümlesinde “için” var; demek ki amaç-sonuç.',
      right: 'Gerçekleşme testini uygularım: hasta olmak da gelmemek de gerçekleşmiş. Öyleyse **neden-sonuç**.',
      body: '“İçin” Türkçede hem sebep hem amaç taşır. Ayrımı yapan sözcük değil, ikinci yargının gerçekleşip gerçekleşmediğidir.',
    },
    {
      title: '“-se/-sa” gördüğü an koşul demek',
      wrong: '“Ne zaman arasam meşguldü.” cümlesinde “-sa” var; öyleyse koşul.',
      right: 'Bağımlılık testini uygularım: aramamak meşgul olmamayı doğurmaz. Burada bir **zaman** ilişkisi var, koşul yok.',
      body: 'Ek çok görevlidir. Koşulun ölçütü ekin varlığı değil, birinci yargının ikincisi için zorunlu olmasıdır.',
    },
    {
      title: 'Benzetmeyi karşılaştırma sanmak',
      wrong: '“Sesi kadife gibiydi.” cümlesinde iki şey yan yana; demek ki karşılaştırma.',
      right: 'Karşılaştırmada iki taraf aynı eksende ölçülür ve biri üstün, eşit ya da farklı çıkar. Burada ölçme yok; ses, kadifenin bir özelliğiyle **anlatılıyor**. Bu bir benzetmedir.',
      body: 'Ayırt etmenin hızlı yolu: cümlede “daha, en, kadar, göre” gibi bir ölçü ifadesi var mı? Varsa karşılaştırma ihtimali yüksektir. “Gibi, sanki, andırmak” varsa benzetme ihtimali yüksektir — ama bunu da anlamla doğrula.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-cumlede-anlam-gerceklesme-testi',
      title: 'Gerçekleşme testi: neden ile amacı ayıran tek soru',
      lead: 'Bu bölümde tek bir sözcüğün — “için” — nasıl iki ayrı ilişki kurduğunu ve testin nasıl çalıştığını göreceğiz.',
      blocks: [
        {
          id: 'lgs-cumle-gerceklesme-anlatim',
          type: 'prose',
          body: `Neden-sonuç ilişkisinde olaylar zaten olmuştur. “Otobüsü kaçırdığı için derse geç kaldı.” cümlesinde kaçırma gerçekleşmiştir, geç kalma da gerçekleşmiştir. İkisi arasında bir **doğurma** ilişkisi vardır: birincisi ikincisini üretmiştir.

Amaç-sonuç ilişkisinde ise durum farklıdır. “Derse geç kalmamak için erken çıktı.” cümlesinde erken çıkma gerçekleşmiştir; ama geç kalmama, kişinin **ulaşmak istediği** sonuçtur. Belki ulaşmıştır, belki ulaşamamıştır — cümle bunu söylemez. İşte bu belirsizlik amaç ilişkisinin imzasıdır.

Testi şöyle uygula: cümleyi ikiye ayır, ikinci yargıyı al ve kendine sor — **“Bu gerçekten oldu mu, yoksa istenen bir şey mi?”** Olduysa neden, istendiyse amaç.

Bu testin güzel yanı, bağlaçtan tamamen bağımsız çalışmasıdır. “Yorulduğundan erken yattı.” cümlesinde “için” yok ama test yine çalışır: yorulma da erken yatma da olmuş → neden-sonuç. “Dinlenmek üzere erken yattı.” cümlesinde de test çalışır: dinlenmek istenen sonuç → amaç-sonuç.

Bir ayrıntı daha: Türkçede bazı cümleler hem neden hem amaç gibi okunabilir. “Sağlıklı olmak için yürüyüş yapıyor.” cümlesinde sağlıklı olmak bir hedeftir, dolayısıyla amaçtır. Ama “Sağlıklı olduğu için yürüyüş yapabiliyor.” cümlesinde sağlıklı olmak gerçekleşmiş bir durumdur ve yürüyüşü mümkün kılar; bu nedendir. İki cümle arasındaki tek fark ekin kendisi değil, o ekin yarattığı gerçekleşme durumudur.

Son bir uyarı: “niçin” ve “neden” soru sözcükleri günlük dilde hem sebep hem amaç sormak için kullanılır. Bu yüzden “Cümleye niçin sorusunu sorabiliyorsam nedendir.” kuralı güvenilmezdir. Güvenilir olan tek şey gerçekleşme testidir.`,
        },
        {
          id: 'lgs-cumle-gerceklesme-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı taşıyıcı, farklı ilişki',
          columns: ['Cümle', 'Birinci yargı', 'İkinci yargı', 'Gerçekleşti mi?', 'İlişki'],
          rows: [
            ['Yağmur yağdığı için ıslandı.', 'Yağmur yağdı', 'Islandı', 'İkisi de oldu', 'Neden-sonuç'],
            ['Islanmamak için şemsiye aldı.', 'Şemsiye aldı', 'Islanmamak', 'İkincisi hedef', 'Amaç-sonuç'],
            ['Yorulduğundan erken yattı.', 'Yoruldu', 'Erken yattı', 'İkisi de oldu', 'Neden-sonuç'],
            ['Dinlenmek üzere erken yattı.', 'Erken yattı', 'Dinlenmek', 'İkincisi hedef', 'Amaç-sonuç'],
            ['Erken yatarsa dinlenir.', 'Erken yatmak', 'Dinlenmek', 'İkisi de olmadı', 'Koşul'],
            ['Kitabı bitirmek istediği için hızlı okudu.', 'Bitirmek istedi', 'Hızlı okudu', 'İkisi de oldu', 'Neden-sonuç'],
          ],
          caption:
            'Son satıra dikkat: “istemek” fiili cümlede gerçekleşmiş bir durumdur. İstek, hedefi değil sebebi oluşturuyorsa ilişki yine nedendir.',
        },
        {
          id: 'lgs-cumle-gerceklesme-analiz',
          type: 'sentence_analysis',
          title: 'Bir cümlede iki yargıyı ayırmak',
          prompt:
            'Aşağıdaki cümleyi parçalara ayırıp ilişkiyi adım adım kuracağız. Her parçaya tıkladığında o parçanın testteki rolünü göreceksin.',
          segments: [
            {
              text: 'Sabah erkenden yola çıktı,',
              label: 'Birinci yargı — gerçekleşmiş',
              explanation:
                'Bu iş yapılmış. Testin birinci ayağı tamam: elimizde gerçekleşmiş bir eylem var.',
              tone: 'brand',
            },
            {
              text: 'çünkü',
              label: 'Taşıyıcı (tek başına kanıt değil)',
              explanation:
                '“Çünkü” güçlü bir sebep işaretidir ama yine de anlamla doğrulanmalı. Adlandırmayı bu sözcüğe değil, bir sonraki parçanın gerçekleşme durumuna dayandıracağız.',
              tone: 'muted',
            },
            {
              text: 'trenin kalkış saati değişmişti.',
              label: 'İkinci yargı — gerçekleşmiş',
              explanation:
                'Saat değişikliği olmuş bitmiş bir durum. İkisi de gerçekleştiği için ilişki **neden-sonuç**.',
              tone: 'aqua',
            },
            {
              text: '(Karşılaştır: “Treni kaçırmamak için erkenden yola çıktı.”)',
              label: 'Karşıt örnek',
              explanation:
                'Aynı eylem, farklı ikinci yargı. Burada “treni kaçırmamak” istenen sonuçtur, gerçekleşmiş bir durum değil. İlişki **amaç-sonuç**a döner.',
              tone: 'success',
            },
          ],
          takeaway:
            'Birinci yargı iki cümlede de aynı. Değişen tek şey ikinci yargının gerçekleşme durumu — ve ilişki tamamen değişiyor.',
        },
        {
          id: 'lgs-cumle-gerceklesme-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Soruda dört seçeneğin dördünde de aynı bağlaç geçiyorsa, o soru bağlaç bilgisini değil ilişki ayrımını ölçüyordur. Böyle bir soruyla karşılaştığında doğrudan gerçekleşme testine geç; bağlaca bakarak zaman kaybetme.',
        },
      ],
    },

    {
      id: 'lgs-turkce-cumlede-anlam-kosul',
      title: 'Koşul: önde duran kapı',
      lead: 'Koşul, neden ve amaçtan farklı bir iş yapar: bir olayın önüne bir kapı koyar. Kapı açılmazsa arkadaki olay hiç gerçekleşmez.',
      blocks: [
        {
          id: 'lgs-cumle-kosul-anlatim',
          type: 'prose',
          body: `Koşul cümlesinde iki yargı vardır ve ikincisi tamamen birincisine bağlıdır. “Ödevini bitirirse dışarı çıkabilir.” cümlesinde dışarı çıkmak, ödevin bitmesine bağlanmıştır. Ödev bitmezse çıkma gerçekleşmez.

Koşulu neden-sonuçtan ayıran şey **zamandır**. Neden-sonuçta olaylar olmuştur ve geriye dönüp bakarız. Koşulda olaylar henüz olmamıştır ve ileriye bakarız. Bu yüzden koşul cümleleri çoğu zaman gelecek veya olasılık bildirir: “gelirse”, “çalışırsa”, “isterse”.

Koşulun taşıyıcıları genellikle **-se/-sa** eki, “şartıyla”, “takdirde”, “yeter ki”, “ancak … ise” gibi ifadelerdir. Ama daha önce gördüğümüz gibi bunlar çok görevlidir. “İstesen de gelmem.” cümlesinde *-sa* koşul değil **karşıtlık** kurar; istemek gelmeyi doğurmuyor, tersine, isteğe rağmen gelmeme bildiriliyor.

Bir de koşula çok benzeyen ama koşul olmayan bir yapı var: **zaman ilişkisi**. “Ne zaman baksam uyuyordu.” cümlesinde bakmak uyumayı sağlamaz; iki olay aynı anda gerçekleşmiştir. Testi uygula: bakmasaydı uyumayacak mıydı? Hayır. Öyleyse koşul yok.

Koşul sorularında en çok işine yarayacak cümle şudur: **“Birincisi olmazsa ikincisi olmaz mı?”** Cevabın kesin “evet” ise koşuldur. “Belki yine olur” diyorsan koşul değildir; muhtemelen neden ya da zaman ilişkisidir.

Son olarak, koşul bildiren cümlelerde sıklıkla bir **yetki, izin veya olanak** ifadesi bulunur: “çıkabilir”, “kazanır”, “alabilirsin”. Bu ifadeler, koşulun sonucunun bir imkân olduğunu gösterir. Bu, koşulu tanımanın hızlı bir ikinci işaretidir — ama yine tek başına kanıt değil, yalnızca bir işarettir.`,
        },
        {
          id: 'lgs-cumle-kosul-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Koşul ile karıştırılan iki yapı',
          columns: ['Koşul', 'Karşıtlık', 'Zaman'],
          rows: [
            { label: 'Örnek', values: ['Erken gelirse yetişir.', 'Erken gelse de yetişemez.', 'Ne zaman gelse kapı kapalıydı.'] },
            { label: 'Bağ', values: ['İkincisi birincisine bağlı', 'İkincisi birincisine rağmen', 'İkisi aynı anda oluyor'] },
            { label: 'Test sonucu', values: ['Birincisi olmazsa ikincisi olmaz', 'Birincisi olsa da ikincisi olmaz', 'Birincisi ikincisini etkilemiyor'] },
            { label: 'Taşıyıcı', values: ['-se/-sa, şartıyla, takdirde', '-se de, -sa da, rağmen', 'ne zaman -sa, -dıkça'] },
          ],
          insight:
            'Üçünde de “-se/-sa” geçebilir. Ayrımı ek değil, yargılar arasındaki bağın yönü yapar: bağlı mı, rağmen mi, eş zamanlı mı?',
        },
        {
          id: 'lgs-cumle-kosul-tuzak',
          type: 'trap',
          title: '“Yeter ki” ifadesini gözden kaçırmak',
          wrong: '“Başarırsın, yeter ki vazgeçme.” cümlesinde koşul yok; sadece bir öğüt var.',
          right: '“Yeter ki” tam bir koşul taşıyıcısıdır: vazgeçmeme, başarmanın şartı olarak konuluyor.',
          body: 'Koşul her zaman cümlenin başında durmaz. Sonda, “yeter ki”, “ancak … ise”, “… şartıyla” gibi ifadelerle de gelebilir. Cümlenin tamamını okumadan karar verme.',
        },
      ],
    },

    {
      id: 'lgs-turkce-cumlede-anlam-dort-iliski',
      title: 'Karşılaştırma, benzetme, örneklendirme, abartma',
      lead: 'Bu dördü neden–amaç–koşul üçlüsünden farklı bir iş yapar: yargılar arasında değil, **anlatım biçiminde** kurulan ilişkilerdir.',
      blocks: [
        {
          id: 'lgs-cumle-dort-anlatim',
          type: 'prose',
          body: `**Karşılaştırma**, iki tarafı aynı eksende değerlendirir ve bir sonuç bildirir: üstünlük, eşitlik ya da farklılık. “Bu roman ötekinden **daha** akıcı.” (üstünlük) — “İkisi de **aynı** ölçüde ilgi çekiciydi.” (eşitlik) — “Bu yazarın dili, diğerine **göre** daha sade.” (farklılık). Karşılaştırmanın olmazsa olmazı **iki taraftır**; tek taraf varsa karşılaştırma yoktur.

**Benzetme**, bir varlığı başka bir varlığın özelliğiyle anlatır. Taraflar eşit değildir: biri anlatılan, öteki anlatmaya yarayan araçtır. “Sesi **kadife gibi**ydi.” Burada ses ile kadife yarıştırılmaz; kadifenin yumuşaklığı sesi anlatmak için ödünç alınır. Benzetme, söz sanatlarının da konusudur ve Ders 10’da daha ayrıntılı ele alınacaktır.

**Örneklendirme**, genel bir yargının somut bir durumla desteklenmesidir. “Bazı besinler uzun süre bozulmaz; **bal buna örnektir**.” Örneğin işlevi kanıtlamak değil, soyut olanı gözle görülür kılmaktır. Örneklendirme aynı zamanda düşünceyi geliştirme yollarından biridir ve Ders 8’de tekrar karşına çıkacak.

**Abartma**, bir özelliği gerçekte olabileceğinden çok büyük ya da küçük göstermektir. “Bu çantayı taşımaktan **kolum kopacaktı**.” Kol gerçekten kopmamıştır; amaç ölçü vermek değil, etkiyi büyütmektir. Abartmayı tanımanın hızlı yolu şudur: söylenen şey **fiziksel olarak mümkün mü?** Değilse ve yazar da bunu bilerek yapıyorsa abartma vardır.

Bu dördünü ayırırken en çok işine yarayacak soru şudur: **cümlede kaç taraf var ve ne yapılıyor?** İki taraf ölçülüyorsa karşılaştırma; bir taraf ötekiyle anlatılıyorsa benzetme; bir genel yargı somutla destekleniyorsa örneklendirme; bir özellik gerçek dışı ölçüde büyütülüyorsa abartma.`,
        },
        {
          id: 'lgs-cumle-dort-tablo',
          type: 'table',
          interactive: true,
          title: 'Dört ilişkiyi tek soruyla ayır',
          columns: ['İlişki', 'Cümledeki yapı', 'Özgün örnek', 'Ayırt edici soru'],
          rows: [
            ['Karşılaştırma', 'İki taraf + ölçü ifadesi', 'Yeni kütüphane, eskisinden daha aydınlıktı.', 'İki taraf aynı eksende ölçülüyor mu?'],
            ['Benzetme', 'Anlatılan + benzetilen', 'Sınıfın sessizliği bir kütüphane gibiydi.', 'Biri ötekini anlatmak için mi kullanılıyor?'],
            ['Örneklendirme', 'Genel yargı + somut örnek', 'Bazı kuşlar mevsime göre göç eder; leylek bunlardan biridir.', 'Somut olan, genel yargının kapsamına mı giriyor?'],
            ['Abartma', 'Gerçek dışı ölçü', 'Merdivenleri çıkarken bin yıl geçti sandım.', 'Söylenen fiziksel olarak mümkün mü?'],
            ['Karşılaştırma + benzetme', 'İkisi bir arada', 'Yeni salon, eskisi gibi karanlık değildi; daha ferahtı.', 'Hem ölçü hem benzetme aracı var mı?'],
          ],
          caption:
            'Son satır, iki ilişkinin aynı cümlede bulunabileceğini gösterir. Soru “hangisi vardır” diyorsa hepsini işaretle; “ağırlıklı olarak hangisi” diyorsa cümlenin asıl işini seç.',
        },
        {
          id: 'lgs-cumle-dort-tuzak',
          type: 'trap',
          title: '“Gibi” gördüğü an benzetme demek',
          wrong: '“Dediğin gibi yaptım.” cümlesinde “gibi” var; öyleyse benzetme.',
          right: '“Gibi” burada bir uygunluk bildiriyor: söylenene uygun davranmak. Benzetme için bir varlığın başka bir varlığın özelliğiyle anlatılması gerekir; burada öyle bir şey yok.',
          body: '“Gibi” Türkçede benzetme, uygunluk, yaklaşıklık ve tahmin bildirebilir: “Hava yağacak gibi.” (tahmin), “Beş kilo gibi bir şey.” (yaklaşıklık). Sözcüğü değil, cümlenin ne yaptığını oku.',
        },
        {
          id: 'lgs-cumle-dort-hafiza',
          type: 'memory',
          title: 'Üç soruluk özet',
          body: '**İkisi de oldu mu?** → neden. **İkincisi hedef mi?** → amaç. **Biri olmazsa öteki olmaz mı?** → koşul.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Dört cümlede de “için” var',
      prompt:
        'Aşağıdaki dört cümledeki ilişkiyi belirle: (1) Sınavı kazanmak için her gün çalıştı. (2) Sınavı kazandığı için ailesi sevindi. (3) Otobüs geç kaldığı için yürüdü. (4) Yorulmamak için ara verdi.',
      steps: [
        { title: '(1) cümlesini test et', body: 'Yargılar: çalıştı / sınavı kazanmak. Kazanmak henüz gerçekleşmemiş bir hedef. → **Amaç-sonuç**.' },
        { title: '(2) cümlesini test et', body: 'Yargılar: kazandı / ailesi sevindi. İkisi de olmuş, birincisi ikincisini doğurmuş. → **Neden-sonuç**.' },
        { title: '(3) cümlesini test et', body: 'Yargılar: otobüs geç kaldı / yürüdü. İkisi de olmuş. → **Neden-sonuç**.' },
        { title: '(4) cümlesini test et', body: 'Yargılar: ara verdi / yorulmamak. Yorulmamak istenen sonuç. → **Amaç-sonuç**.' },
        { title: 'Sonucu oku', body: 'Dört cümlede de aynı sözcük geçiyor ama iki farklı ilişki var. Bağlaç ezberi burada dördünü de aynı sayardı ve soru kaybedilirdi.' },
      ],
      answer: '(1) amaç · (2) neden · (3) neden · (4) amaç',
      takeaway: 'Aynı taşıyıcı, farklı ilişki. Ayrımı yapan tek şey gerçekleşme testidir.',
    },
    {
      title: 'Seviye 2 — Koşul mu, neden mi, zaman mı?',
      prompt:
        'Şu üç cümleyi ayır: (1) Erken kalkarsa otobüse yetişir. (2) Erken kalktığı için otobüse yetişti. (3) Ne zaman erken kalksa otobüs dolu oluyordu.',
      steps: [
        { title: '(1) — bağımlılık testi', body: 'Erken kalkmazsa yetişmez mi? Evet, cümle bunu söylüyor. Ayrıca iki yargı da henüz gerçekleşmemiş. → **Koşul**.' },
        { title: '(2) — gerçekleşme testi', body: 'Kalkmak da yetişmek de gerçekleşmiş. Biri ötekini doğurmuş. → **Neden-sonuç**.' },
        { title: '(3) — bağımlılık testini uygula', body: 'Erken kalkmamak otobüsün dolu olmamasını sağlar mı? Hayır; otobüsün doluluğu kişinin kalkmasına bağlı değil. İki olay yalnızca aynı anda gerçekleşiyor. → **Zaman ilişkisi**, koşul değil.' },
        { title: 'Ortak noktayı gör', body: 'Üçünde de “-sa/-dı” ekleri dolaşıyor. Üç farklı ilişki çıktı. Ek, ilişkiyi belirlemiyor.' },
        { title: 'Kendini sına', body: '(3) cümlesini koşula çevirmek istesen ne yazardın? “Erken kalkarsa otobüs dolu olur.” — Bu cümle anlamsızlaşır; çünkü aralarında gerçek bir bağımlılık yoktur. Bu da testinin doğru çalıştığını gösterir.' },
      ],
      answer: '(1) koşul · (2) neden-sonuç · (3) zaman ilişkisi',
      takeaway:
        'Koşulun ölçütü ek değil zorunluluktur: birincisi olmazsa ikincisi kesinlikle olmamalı.',
    },
    {
      title: 'Seviye 3 — Anlatım ilişkilerini ayır',
      prompt:
        'Şu cümlelerdeki ilişkiyi adlandır: (1) Bu kitabın dili, öncekine göre daha sade. (2) Anlattıkları bir masal gibiydi. (3) Bazı ağaçlar kışın yaprak dökmez; çam bunlardan biridir. (4) O gün o kadar yürüdük ki ayakkabımın tabanı eridi.',
      steps: [
        { title: '(1) Taraf sayısını gör', body: 'İki kitap var, ikisi aynı eksende (dil sadeliği) ölçülüyor ve biri üstün çıkıyor. → **Karşılaştırma**.' },
        { title: '(2) Kim kimi anlatıyor?', body: 'Anlatılanlar masalla yarıştırılmıyor; masalın gerçek dışılığı ödünç alınarak anlatılıyor. → **Benzetme**.' },
        { title: '(3) Genel mi, somut mu?', body: 'Önce genel bir yargı, sonra kapsamına giren somut bir durum veriliyor. → **Örneklendirme**.' },
        { title: '(4) Mümkün mü?', body: 'Bir günlük yürüyüşte ayakkabı tabanı erimez. Yazar bunu bilerek büyütüyor. → **Abartma**.' },
        { title: 'Yanlış yola sapmamak için', body: '(2) cümlesinde “gibi” var diye benzetme dedik ama asıl gerekçemiz “gibi” değildi: taraflardan birinin ötekini anlatmak için kullanılmasıydı. Gerekçeyi sözcüğe değil işleve bağlamak, sonraki sorularda seni korur.' },
      ],
      answer: '(1) karşılaştırma · (2) benzetme · (3) örneklendirme · (4) abartma',
      takeaway:
        'Dört ilişkiyi ayıran soru şudur: kaç taraf var ve o taraflarla ne yapılıyor — ölçülüyor mu, anlatılıyor mu, destekleniyor mu, büyütülüyor mu?',
    },
  ],

  questionClue: {
    concept: 'cümlede anlam ilişkisi sorusu',
    statement:
      'Soru kökünde “aşağıdaki cümlelerin hangisinde … ilişkisi vardır”, “hangisinde farklı bir ilişki kurulmuştur” gibi ifadeler varsa, ölçülen şey bağlaç bilgisi değil yargılar arası bağdır.',
    clues: [
      'Seçeneklerin tamamının kısa, bağımsız cümleler olması',
      'Birden fazla seçenekte aynı bağlacın geçmesi',
      '“Hangisinde farklı bir ilişki vardır” biçimindeki soru kökleri',
      'Bir parçadan alınmış altı çizili bir cümle',
      'Seçeneklerde “neden-sonuç, amaç-sonuç, koşul, karşılaştırma” gibi terimlerin geçmesi',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, seçeneklerdeki ortak sözcüğün seni yanıltmasını bekliyor. Çözüm yolu her seçenekte cümleyi iki yargıya ayırıp gerçekleşme ve bağımlılık testlerini uygulamaktır.',
    boundary:
      'Bu ipuçlarını “aynı bağlaç varsa farklı olan cevaptır” gibi bir kısayola çevirme. Bazen dört seçenekte dört farklı bağlaç bulunur ve ilişki yine aynıdır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Bu kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir. Kalıbı tanımak cevabı vermez; hangi testi uygulayacağını söyler.',
    patterns: [
      'Dört cümleden hangisinde farklı bir anlam ilişkisi kurulduğunun sorulması',
      'Bir parçadaki altı çizili cümlede hangi ilişkinin bulunduğunun sorulması',
      'Verilen bir ilişki tanımına uyan cümlenin seçtirilmesi',
      'Aynı bağlacın farklı ilişkiler kurduğu cümlelerin ayırt ettirilmesi',
      'Bir parçada karşılaştırma, örneklendirme ve abartmadan hangilerinin bulunduğunun sorulması',
      'Neden-sonuç ile amaç-sonuç ilişkisinin doğrudan ayırt ettirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Kütüphane kapanmasın diye imza topladılar.” Bu cümledeki ilişki nedir? Kararını gerçekleşme testiyle gerekçelendir.',
      hint: 'İkinci yargıyı yalıt: “kütüphane kapanmasın” gerçekleşmiş bir durum mu, istenen bir sonuç mu?',
      answer:
        'Amaç-sonuç. Yargılar: (1) imza topladılar — gerçekleşmiş. (2) kütüphanenin kapanmaması — istenen sonuç; cümle bunun olup olmadığını söylemiyor. İkinci yargı bir hedef olduğu için ilişki amaçtır. “Diye” bağlacı burada amaç taşıyor, ama kararı veren şey bağlaç değil testtir.',
    },
    {
      prompt:
        '“Ne kadar erken çıkarsan çık, bu trafikte zamanında varamazsın.” Bu cümlede koşul ilişkisi var mıdır?',
      hint: 'Bağımlılık testini uygula: erken çıkmak zamanında varmayı sağlıyor mu?',
      answer:
        'Hayır. Burada koşul değil **karşıtlık** vardır. Cümle, erken çıkmanın sonucu değiştirmeyeceğini söylüyor: birinci yargı gerçekleşse de ikincisi olmuyor. Koşulda birinci yargı ikincisinin şartıdır; burada tam tersine, birincisi işe yaramıyor.',
    },
    {
      prompt:
        '“Yeni kalemim, eskisi gibi çabuk bitmiyor.” Bu cümlede karşılaştırma mı, benzetme mi vardır? Gerekçeni yaz.',
      hint: 'Kaç taraf var ve o taraflarla ne yapılıyor — ölçülüyor mu, anlatılıyor mu?',
      answer:
        'Karşılaştırma. İki kalem aynı eksende (çabuk bitme) değerlendiriliyor ve aralarında bir farklılık bildiriliyor. “Gibi” sözcüğü burada benzetme değil, ölçü karşılaştırması taşıyor. Benzetme olsaydı kalemlerden biri ötekini anlatmak için kullanılırdı, ölçülmezdi.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey bağlaç bilgisi değil, ilişki çözümlemesi',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda bunun somut karşılığı şudur: sorular kaç bağlaç bildiğini değil, iki yargı arasındaki bağı adlandırabilip adlandıramadığını ölçer. Nitekim soruların çoğunda seçeneklerin birkaçında aynı bağlaç geçer; ezberleyen öğrenci hepsini aynı sayar.',
    measures: [
      'Bir cümleyi iki yargıya ayırabilme',
      'Gerçekleşme testiyle neden ile amacı ayırabilme',
      'Bağımlılık testiyle koşulu tanıyabilme',
      'Aynı bağlacın farklı ilişkiler kurduğunu fark edebilme',
      'Karşılaştırma, benzetme, örneklendirme ve abartmayı işleve göre ayırabilme',
      'Adlandırmasını bağlaca değil anlama dayandırabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Kasabanın tek fırını sabah beşte açardı. Fırıncı Halil Usta, hamuru bir gece önceden yoğurur, sabaha kadar dinlenmeye bırakırdı. “Ekmek bekletilmeden olmaz.” derdi. Bir defasında siparişler yetişmesin diye erken kalkmış, hamuru yeterince dinlendirmeden fırına vermişti. **O gün çıkan ekmekler yeterince kabarmadığı için akşama kalmadan sertleşti.**`,
    question: 'Bu parçada altı çizili cümlede aşağıdaki anlam ilişkilerinden hangisi vardır?',
    options: [
      {
        text: 'Amaç-sonuç',
        explanation:
          'Amaç olsaydı ikinci yargının henüz gerçekleşmemiş bir hedef olması gerekirdi. Oysa “sertleşti” olmuş bitmiş bir sonuçtur. Parçada amaç ilişkisi var ama başka bir cümlede: “siparişler yetişmesin diye erken kalkmış.”',
      },
      {
        text: 'Neden-sonuç',
        explanation:
          'Doğru cevap. İki yargı da gerçekleşmiş: ekmekler yeterince kabarmadı, ekmekler sertleşti. Birincisi ikincisini doğurmuş. Gerçekleşme testi tek başına bu sonucu veriyor.',
      },
      {
        text: 'Koşul',
        explanation:
          'Bağımlılık testini uygula: kabarmama olmasaydı sertleşme kesinlikle olmaz mıydı? Cümle bunu bir şart olarak kurmuyor; olmuş bitmiş bir olayı anlatıyor. Ayrıca koşul cümlelerinde olaylar henüz gerçekleşmemiş olur.',
      },
      {
        text: 'Karşılaştırma',
        explanation:
          'Karşılaştırma için iki tarafın aynı eksende ölçülmesi gerekir. Altı çizili cümlede tek bir ekmek partisinden söz ediliyor, kıyaslanan ikinci bir taraf yok. Parçanın bütününde örtük bir kıyas hissedilse de cümlede ölçü ifadesi bulunmuyor.',
      },
      {
        text: 'Abartma',
        explanation:
          'Abartma için söylenenin gerçekte mümkün olmayacak ölçüde büyütülmesi gerekir. “Akşama kalmadan sertleşti” fazlasıyla mümkün bir durumdur; burada büyütme yok, gözlem var.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü altı çizili **cümleyi** işaret ediyor; yani parçanın tamamındaki ilişkiler değil, o cümledeki ilişki soruluyor. İlk iş cümleyi iki yargıya ayırmak: (1) ekmekler yeterince kabarmadı, (2) akşama kalmadan sertleşti.',
    critical_point:
      'Kritik nokta, parçanın başka bir cümlesinde gerçekten amaç ilişkisi bulunması: “siparişler yetişmesin diye erken kalkmış.” Bu, A seçeneğini inandırıcı kılar. Ama soru o cümleyi değil, altı çizili cümleyi soruyor. Soru kökünün sınırladığı yere sadık kal.',
    takeaway:
      'Parçada birden çok ilişki bulunabilir. Soru hangi cümleyi işaret ediyorsa testi yalnız o cümleye uygula.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde **amaç-sonuç** ilişkisi vardır?',
      options: [
        'Kar yağdığı için okullar tatil edildi.',
        'Sınıfı temiz tutmak için nöbet listesi hazırladılar.',
        'Zili duymadığı için derse geç girdi.',
        'Işıklar söndüğü için proje yarım kaldı.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümlede “sınıfı temiz tutmak” istenen bir sonuçtur; gerçekleşip gerçekleşmediğini cümle söylemez. Diğer üç cümlede her iki yargı da gerçekleşmiştir: kar yağdı–tatil edildi, zili duymadı–geç girdi, ışıklar söndü–proje yarım kaldı. Dördünde de “için” geçiyor; ayrımı yapan bağlaç değil, gerçekleşme testidir.',
    },
    {
      purpose: 'concept',
      question: '“Bu yolu bir saatte yürüdük ama yokuş öyle dikti ki dağa tırmanmış gibi olduk.” Bu cümlede aşağıdaki ilişkilerden hangisi **yoktur**?',
      options: [
        'Benzetme',
        'Abartma',
        'Koşul',
        'Karşıtlık',
      ],
      answer_index: 2,
      explanation:
        'Cümlede koşul yoktur: hiçbir yargı başka bir yargının şartı olarak konulmamış, “bir şey olmazsa öteki olmaz” yapısı kurulmamıştır. Benzetme var (“dağa tırmanmış gibi”), abartma var (bir saatlik yolun dağa tırmanmaya benzetilmesi), karşıtlık var (“ama” ile kurulan kısa süre–büyük zorluk karşıtlığı).',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Ne zaman kitap açsam telefon çalıyordu.” cümlesi için “koşul ilişkisi var, çünkü -sa eki kullanılmış” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'İlişkiyi ekten çıkarıp bağımlılık testini uygulamamak',
        'Cümledeki iki yargıyı yanlış belirlemek',
        'Benzetme ile karşılaştırmayı karıştırmak',
        'Abartmayı fark edememek',
      ],
      answer_index: 0,
      explanation:
        'Öğrenci yargıları doğru görüyor: kitap açmak ve telefonun çalması. Hatası, ilişkiyi ekin varlığından çıkarması. Bağımlılık testini uygulasaydı görecekti: kitap açmamak telefonun çalmamasını sağlamaz. İki olay yalnızca aynı anda gerçekleşiyor; bu bir zaman ilişkisidir. Cümlede benzetme de abartma da bulunmuyor.',
    },
  ],

  summary: [
    'Her ilişki cümlesinde en az iki yargı vardır; ilişki bu iki yargı arasındadır.',
    'İlişkiyi bağlaç belirlemez: “için” hem neden hem amaç, “-sa” hem koşul hem zaman hem karşıtlık taşıyabilir.',
    'Gerçekleşme testi: iki yargı da olduysa neden, ikincisi istenen hedefse amaç.',
    'Bağımlılık testi: birincisi olmazsa ikincisi kesinlikle olmuyorsa koşul.',
    'Koşulda olaylar henüz gerçekleşmemiştir; neden-sonuçta olup bitmiştir.',
    '“Yeter ki”, “şartıyla”, “takdirde” de koşul taşıyıcısıdır ve cümlenin sonunda gelebilir.',
    'Karşılaştırmada iki taraf aynı eksende ölçülür; benzetmede biri ötekini anlatmak için kullanılır.',
    'Örneklendirmede somut örnek, genel yargının kapsamına girer.',
    'Abartmada söylenen şey fiziksel olarak mümkün değildir ve bu bilerek yapılır.',
    'Bir cümlede birden çok ilişki bulunabilir; soru hangi cümleyi işaret ediyorsa testi yalnız ona uygula.',
  ],

  next: [
    'Öznel–Nesnel Yargı ve Yazarın Bakış Açısı (T.8.3.21)',
    'Konu, Ana Fikir, Yardımcı Fikir ve Başlık (T.8.3.16–19)',
    'Söz Sanatları: Benzetme, Kişileştirme, Konuşturma, Karşıtlık, Abartma (T.8.3.7)',
  ],
})

export default lesson
