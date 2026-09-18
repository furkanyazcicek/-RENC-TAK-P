import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 5. ders
 * Kazanım : F.8.4.5.1 · F.8.4.5.2 · F.8.4.5.3 · F.8.4.5.4
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.4.5.1 → a) "Q=m.c. Δt bağıntısına girilmez."
 *               b) "Bağımlı, bağımsız ve kontrol edilen değişkenler
 *                  örneklerle açıklanır."
 *   F.8.4.5.2 → a) "Saf maddelerin hâl değişimi sırasında sıcaklığının
 *                  sabit kaldığına değinilir."
 *               b) "Matematiksel hesaplamalara girilmez."
 *   Konu / Kavramlar (F.8.4.5): "Isı ve öz ısının bağlı olduğu faktörler"
 *
 * Bu yüzden derste bağıntı yazılmaz, hiçbir sayısal ısı hesabı yapılmaz.
 * Öz ısı yalnız bir madde özelliği olarak, nitel biçimde tanıtılır.
 * Grafik için yeni bir şema (lgs-fen-isinma-grafigi) yazıldı; F.8.4.5.3
 * grafiği "çizerek yorumlamayı" istediği için ders ayrıca ölçüm
 * verisinden grafik çizme adımlarını verir.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-isi-ve-hal-degisimi',
  topic: 'Madde ve Endüstri',
  order: 5,
  title: 'Isı ve Hâl Değişimi: Sıcaklık Neden Durur?',
  subtitle:
    'Kaynayan suya ısı vermeye devam edersin ama termometre yerinden kıpırdamaz. Isı nereye gidiyor?',
  minutes: 48,
  kazanimlar: ['F.8.4.5.1', 'F.8.4.5.2', 'F.8.4.5.3', 'F.8.4.5.4'],
  kapsamNotu:
    'Öz ısı, programın konu/kavram listesinde yer aldığı için bir madde özelliği olarak tanıtılır; sayısal değer ve hesap verilmez.',
  prerequisites: [
    { topic: 'Isı ve sıcaklık (7. sınıf)', why: 'Isının bir enerji, sıcaklığın bir ölçüm olduğu ayrımı bu dersin temelidir.' },
    { topic: 'Maddenin hâlleri ve tanecikli yapısı', why: 'Hâl değişimini tanecik hareketiyle açıklayabilmek için gereklidir.' },
    { topic: 'Katı Basıncı: Ağırlık mı, Yüzey mi?', why: 'Bağımlı, bağımsız ve kontrol edilen değişken ayrımı orada kuruldu.' },
  ],
  outcomes: [
    'Isı ile sıcaklığı birbirinden ayırabileceksin.',
    'Isınmanın maddenin cinsine, kütlesine ve sıcaklık değişimine bağlı olduğunu bir deneyle gösterebileceksin.',
    'Hâl değişimi sırasında saf maddelerin sıcaklığının neden sabit kaldığını açıklayabileceksin.',
    'Ölçüm verisinden ısınma grafiği çizip yorumlayabileceksin.',
    'Günlük hayattaki hâl değişimlerini ısı alma ya da ısı verme olarak sınıflandırabileceksin.',
  ],

  opening: {
    title: 'Aynı güneş, sıcak kum, serin deniz',
    lead: 'Yaz öğleninde kumsalda yalın ayak yürümek zordur; ama birkaç adım ötedeki deniz serindir. İkisi de aynı güneşin altında, aynı süre durdu.',
    body: `Bir yaz günü kumsalda düşün. Öğlen saatinde kum ayağını yakar. Oysa birkaç adım ötedeki deniz serindir. İkisi de aynı güneşin altında, aynı süre boyunca ısı aldı. Neden biri çok ısınırken öbürü az ısındı?

Şimdi mutfağa geç. Bir tencere suyu ocağa koyuyorsun. Termometre yükseliyor: 40, 60, 80, 100… Sonra su kaynamaya başlıyor ve bir şey oluyor: ocak yanmaya devam ettiği hâlde termometre **100’de duruyor.** Su dakikalarca kaynıyor, ısı almayı sürdürüyor, ama sıcaklığı yükselmiyor.

İki gözlem de aynı soruya çıkıyor: **verilen ısı her zaman sıcaklığı aynı ölçüde artırmıyor.** Neden?

Bu derste bu sorunun cevabını iki parçada kuracağız.

**Birinci parça:** Bir maddenin ne kadar ısınacağı üç şeye bağlıdır: **maddenin cinsine, kütlesine ve sıcaklığının ne kadar değişmesini istediğine.** Kum ile suyun farkı, maddenin cinsinden gelir.

**İkinci parça:** Madde **hâl değiştirirken** aldığı ısı sıcaklığı artırmaya değil, hâli değiştirmeye harcanır. Bu yüzden saf bir maddenin sıcaklığı hâl değişimi boyunca **sabit kalır.**

Bu iki fikri bir **grafik** üzerinde birleştireceğiz. Grafik bu konunun kalbidir; çünkü kazanım grafiği “çizerek yorumlamanı” ister.

Son olarak günlük hayata döneceğiz: terleyince neden serinleriz, kolonya neden serinletir, çiftçiler don gecesinden önce meyve bahçelerini neden sular?

İki kapsam notu: *program bu konuda **bağıntıya ve matematiksel hesaplamaya girilmemesini** ister.* Bu yüzden bu derste formül yazmayacağız ve sayısal ısı hesabı yapmayacağız. Senden istenen, ilişkileri **yönüyle** kurmak ve grafiği okuyabilmek.`,
  },

  concepts: [
    {
      term: 'Isı',
      body: 'Sıcaklıkları farklı maddeler arasında, sıcak olandan soğuk olana aktarılan **enerjidir.** Termometreyle ölçülmez; birimi joule (J) ya da kaloridir.',
    },
    {
      term: 'Sıcaklık',
      body: 'Bir maddenin taneciklerinin ortalama hareket enerjisinin göstergesidir. **Termometreyle ölçülür**; birimi santigrat derecedir (°C).',
    },
    {
      term: 'Öz ısı',
      body: 'Bir maddenin ısınmaya karşı gösterdiği direnci anlatan ayırt edici özelliktir. **Maddenin cinsine ve hâline bağlıdır, kütlesine bağlı değildir**; örneğin buzun öz ısısı suyunkinden farklıdır. Öz ısısı büyük olan madde, aynı ısıyı aldığında daha az ısınır. Suyun öz ısısı büyüktür; bu yüzden su geç ısınır ve geç soğur.',
    },
    {
      term: 'Hâl değişimi',
      body: 'Maddenin katı, sıvı ve gaz hâlleri arasında geçiş yapmasıdır: erime, donma, buharlaşma, yoğuşma, süblimleşme ve kırağılaşma. Hâl değişimi bir **fiziksel değişimdir.**',
    },
    {
      term: 'Erime ve kaynama noktası',
      body: 'Saf bir katının eridiği sıcaklık **erime noktası**, saf bir sıvının kaynadığı sıcaklık **kaynama noktasıdır.** Saf maddeler için bu sıcaklıklar ayırt edici özelliktir. Aynı maddenin erime noktası donma noktasına eşittir.',
    },
    {
      term: 'Hâl değiştirme ısısı',
      body: 'Bir maddenin hâl değiştirmesi için alması ya da vermesi gereken ısıdır. **Maddenin cinsine ve kütlesine bağlıdır**: kütle arttıkça gereken ısı da artar.',
    },
  ],

  why: {
    question: 'Isı ile sıcaklık neden aynı şey değil?',
    body: `Çünkü biri bir **enerji aktarımıdır**, öbürü bir **ölçümdür.**

Bunu bir örnekle görelim. Elinde iki kap var: birinde bir bardak su, öbüründe bir kova su. İkisinin sıcaklığı da 20 °C. Şimdi ikisini aynı ocakta, aynı süre ısıtıyorsun.

Bardaktaki su hızla ısınır; kovadaki su çok yavaş ısınır. İkisi de aynı ısıyı aldı. Ama sıcaklık artışları farklı.

Neden? Çünkü kovada **çok daha fazla su** var. Aynı ısı daha fazla maddeye paylaştırılınca her bir parçaya düşen pay azalır ve sıcaklık daha az yükselir.

Şimdi tersini düşün: kovadaki suyu da bardaktaki su kadar ısıtmak istiyorsan ne yaparsın? Daha uzun süre ısıtırsın; yani **daha çok ısı** verirsin.

Buradan ilk ilişki çıkar: **aynı sıcaklık artışı için, kütle arttıkça gereken ısı artar.**

İkinci ilişki de aynı mantıktadır: **aynı madde ve aynı kütle için, sıcaklığı daha çok artırmak istiyorsan daha çok ısı vermen gerekir.** Suyu 20 °C’den 40 °C’ye çıkarmak, 20 °C’den 80 °C’ye çıkarmaktan daha az ısı ister.

Üçüncü ilişki kumsaldaki gözlemi açıklar: **aynı kütle ve aynı ısı için, farklı maddeler farklı miktarda ısınır.** Kum ile su aynı ısıyı aldı; ama kumun öz ısısı küçük, suyunki büyük olduğu için kum çok ısındı, su az ısındı.

Bu üç ilişkiyi toplarsak kazanımın cümlesine ulaşırız: **ısınma, maddenin cinsine, kütlesine ve sıcaklık değişimine bağlıdır.**

Şimdi sıcaklığın durduğu kaynama anına dönelim. O sırada ısı nereye gidiyor?

Kaynayan suyun tanecikleri birbirinden kopup gaz hâline geçiyor. Bu kopma işi **enerji ister.** Ocağın verdiği ısı, taneciklerin daha hızlı hareket etmesine (yani sıcaklığın artmasına) değil, **taneciklerin birbirinden ayrılmasına** harcanır. Bu yüzden su kaynadığı sürece sıcaklık sabit kalır.

Son tanecik de gaz hâline geçtikten sonra verilen ısı yeniden sıcaklığı artırmaya başlar. Bir sonraki bölümde bu hikâyeyi bir grafik üzerinde göreceğiz.

*Kapsam notu: program bu ilişkiler için bir bağıntı kullanılmamasını ister; bu yüzden hepsini yönüyle kurduk.*`,
  },

  mechanism: {
    title: 'Isı verilen bir maddede ne olur?',
    lead: 'Buzdan buhara giden yolu tanecik düzeyinde izleyelim. Her aşama bir öncekinin sonucudur.',
    intro:
      'Aşağıdaki adımlar, −20 °C’deki bir buz parçasına sürekli ısı verildiğinde yaşananları sırasıyla anlatır.',
    steps: [
      {
        title: '1. Katı ısınır',
        body: 'Buz ısı alır; taneciklerinin titreşimi artar. Bu artış termometrede sıcaklık yükselişi olarak görülür. Madde hâlâ katıdır.',
      },
      {
        title: '2. Erime başlar, sıcaklık durur',
        body: 'Sıcaklık 0 °C’ye ulaşınca verilen ısı tanecikler arasındaki düzeni bozmaya harcanır. Buz erir; erime sürdükçe sıcaklık 0 °C’de sabit kalır. Kapta katı ve sıvı birlikte bulunur.',
      },
      {
        title: '3. Sıvı ısınır',
        body: 'Buzun tamamı eriyince verilen ısı yeniden taneciklerin hareketini artırır. Suyun sıcaklığı yükselir.',
      },
      {
        title: '4. Kaynama başlar, sıcaklık yine durur',
        body: 'Sıcaklık 100 °C’ye ulaşınca verilen ısı tanecikleri birbirinden koparmaya harcanır. Su kaynar; kaynama sürdükçe sıcaklık 100 °C’de sabit kalır. Kapta sıvı ve gaz birlikte bulunur.',
      },
      {
        title: '5. Gaz ısınır',
        body: 'Suyun tamamı buhar hâline geçince verilen ısı yeniden sıcaklığı artırır.',
      },
      {
        title: '6. Ters yönde ısı verilir',
        body: 'Aynı yol ters yönde de yürür: buhar yoğuşurken ve su donarken madde çevresine ısı verir; bu sırada da saf maddenin sıcaklığı sabit kalır.',
      },
    ],
    takeaway:
      'Zincirin kalbi 2. ve 4. adımlardır: hâl değişimi sırasında verilen ısı sıcaklığı değil, hâli değiştirir.',
  },

  comparison: {
    title: 'Isı ile sıcaklığın farkı',
    columns: ['Isı', 'Sıcaklık'],
    rows: [
      { label: 'Nedir?', values: ['Aktarılan enerji', 'Taneciklerin ortalama hareket enerjisinin göstergesi'] },
      { label: 'Nasıl ölçülür?', values: ['Termometreyle ölçülmez; ısı miktarı başka yollarla belirlenir', 'Termometreyle ölçülür'] },
      { label: 'Birimi', values: ['Joule (J) ya da kalori', 'Santigrat derece (°C)'] },
      { label: 'Kütleye bağlı mı?', values: ['Evet — daha çok madde daha çok ısı taşır', 'Hayır — bir bardak ile bir kova su aynı sıcaklıkta olabilir'] },
      { label: 'Yönü', values: ['Sıcaktan soğuğa aktarılır', 'Aktarılmaz; bir durumu gösterir'] },
      { label: 'Hâl değişimi sırasında', values: ['Alınmaya ya da verilmeye devam eder', 'Saf maddede sabit kalır'] },
    ],
    insight:
      'Son satır bu dersin özüdür: kaynama sırasında ısı alınmaya devam eder ama sıcaklık değişmez. İkisi aynı şey olsaydı bu mümkün olmazdı.',
  },

  traps: [
    {
      title: 'Isı ile sıcaklığı aynı sanmak',
      wrong: 'Kovadaki su ile bardaktaki su aynı sıcaklıktaysa aynı ısıya sahiptir.',
      right: 'Aynı sıcaklıktaki iki maddeden **kütlesi büyük olan** daha çok ısı enerjisi taşır. Sıcaklık bir ölçüm, ısı bir enerji aktarımıdır.',
      body: 'Bu yüzden bir kova sıcak su, bir bardak sıcak sudan daha uzun süre soğumaz: çevresine verecek daha çok ısısı vardır.',
    },
    {
      title: 'Kaynama sırasında ısı alınmadığını sanmak',
      wrong: 'Su kaynarken sıcaklığı değişmediğine göre artık ısı almıyordur.',
      right: 'Su kaynarken **ısı almaya devam eder**; bu ısı sıcaklığı artırmaya değil, taneciklerin sıvıdan gaz hâline geçmesine harcanır.',
      body: 'Ocağı kapattığında kaynamanın durması bunun kanıtıdır: ısı gelmezse hâl değişimi de sürmez.',
    },
    {
      title: 'Grafikteki yatay bölümü “hiçbir şey olmuyor” diye okumak',
      wrong: 'Grafikte çizginin düz gittiği yerde madde değişmiyor.',
      right: 'Yatay bölüm, maddenin **hâl değiştirdiği** yerdir: iki hâl birlikte bulunur ve verilen ısı hâli değiştirmeye harcanır.',
      body: 'Grafikte en çok şey yatay bölümlerde olur. Soru “hangi aralıkta madde hem katı hem sıvıdır?” diye sorduğunda cevabı yatay bölümde ararsın.',
    },
    {
      title: 'Donmanın ısı aldığını sanmak',
      wrong: 'Su donarken soğuduğu için ısı alır.',
      right: 'Su donarken çevresine **ısı verir.** Erime, buharlaşma ve süblimleşme ısı alır; donma, yoğuşma ve kırağılaşma ısı verir.',
      body: 'Kuralı hatırlamanın yolu şudur: taneciklerin **dağıldığı** değişimler ısı alır, taneciklerin **toplandığı** değişimler ısı verir.',
    },
  ],

  variables: {
    title: 'Deneyle keşfet: ısınma maddenin cinsine bağlı mı?',
    lead:
      'Kazanım F.8.4.5.1 bu ilişkinin “deney yaparak keşfedilmesini” ister ve açıklaması değişkenlerin örneklerle açıklanmasını şart koşar.',
    question: 'Eşit kütledeki iki farklı sıvıya aynı süre ısı verilirse sıcaklıkları aynı miktarda artar mı?',
    independent: {
      label: 'Isıtılan sıvının cinsi',
      note: 'Ben seçiyorum: su / zeytinyağı',
    },
    setup: {
      label: 'Özdeş ısıtıcı ve özdeş kaplar',
      note: 'İki sıvı aynı ısıtıcıyla sırayla ısıtılır',
    },
    dependent: {
      label: 'Sıvının sıcaklık artışı',
      note: 'Ölçtüğüm: termometreyle başlangıç ve son sıcaklık',
    },
    controlled: [
      'Sıvıların kütlesi (eşit)',
      'Isıtma süresi ve ısıtıcının gücü',
      'Başlangıç sıcaklığı',
      'Kapların cinsi ve büyüklüğü',
    ],
    caption:
      'Kütle ve ısıtma süresi bilerek eşit tutulur. Böylece sıcaklık artışındaki farkın tek olası nedeni sıvının cinsi olur.',
  },

  experiment: {
    title: 'İki deney: cins ve kütle',
    intro:
      'Deney öğretmen gözetiminde yapılır. Yağ düşük sıcaklıkta ısıtılır ve hiçbir zaman kızgın hâle getirilmez; sıcak kaplara çıplak elle dokunulmaz.',
    steps: [
      { title: '1. Tahminini yaz', body: 'Deneyden önce yaz: “Aynı ısıyı alan su ile zeytinyağından hangisinin sıcaklığı daha çok artar?” Tahmin, sonucu kendine göre yorumlamanı engeller.' },
      { title: '2. A deneyi — eşit kütleleri hazırla', body: 'Özdeş iki kaba eşit kütlede su ve zeytinyağı konur. Başlangıç sıcaklıkları ölçülüp kaydedilir.' },
      { title: '3. Aynı süre ısıt', body: 'İki sıvı aynı ısıtıcıyla, aynı süre boyunca ısıtılır. Böylece ikisine verilen ısı eşit kabul edilir.' },
      { title: '4. Sıcaklık artışını ölç', body: 'Süre sonunda iki sıvının sıcaklığı ölçülür ve artış miktarları karşılaştırılır.' },
      { title: '5. B deneyi — kütleyi değiştir', body: 'Bu kez iki kaba da su konur; ama birindeki suyun kütlesi öbürünün iki katıdır. İkisi aynı süre ısıtılır.' },
      { title: '6. İki deneyi ayrı ayrı yorumla', body: 'A deneyi maddenin cinsinin, B deneyi kütlenin etkisini gösterir. Her deneyde yalnız bir değişken değiştiği için sonuçların nedeni belirlenebilir.' },
    ],
    takeaway:
      'İki ayrı deney kurmamızın nedeni tek: her deneyde yalnız bir değişken değişsin ki sonucun nedeni belirlenebilsin.',
  },

  dataTable: {
    title: 'Gözlem kaydı: aynı süre, aynı ısıtıcı',
    columns: ['Deney', 'Sıvı', 'Kütle', 'Başlangıç', 'Süre sonu', 'Sıcaklık artışı'],
    rows: [
      ['A-1', 'Su', '100 g', '20 °C', '32 °C', '12 °C'],
      ['A-2', 'Zeytinyağı', '100 g', '20 °C', '44 °C', '24 °C'],
      ['B-1', 'Su', '100 g', '20 °C', '32 °C', '12 °C'],
      ['B-2', 'Su', '200 g', '20 °C', '26 °C', '6 °C'],
    ],
    caption:
      'A satırları: aynı kütle ve aynı ısıda zeytinyağı sudan daha çok ısınmıştır; suyun öz ısısı daha büyüktür. B satırları: aynı madde ve aynı ısıda kütlesi büyük olan su daha az ısınmıştır. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir; ısı hesabı yapılmamıştır.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-isi-grafik',
      title: 'Isınma grafiği: çiz, sonra oku',
      lead: 'Kazanım F.8.4.5.3 grafiği “çizerek yorumlamanı” ister. Önce nasıl çizileceğini, sonra nasıl okunacağını görelim.',
      blocks: [
        {
          id: 'lgs-fen-isi-grafik-olcum',
          type: 'table',
          interactive: true,
          title: 'Bir buz parçasının ısıtılması: ölçüm kaydı',
          columns: ['Zaman (dakika)', 'Sıcaklık (°C)', 'Kaptaki durum'],
          rows: [
            ['0', '−20', 'Yalnız buz'],
            ['3', '0', 'Buz erimeye başladı'],
            ['5', '0', 'Buz ve su birlikte'],
            ['7', '0', 'Son buz parçası eridi'],
            ['12', '100', 'Su kaynamaya başladı'],
            ['16', '100', 'Su ve buhar birlikte'],
            ['20', '100', 'Son su buharlaştı'],
            ['23', '120', 'Yalnız buhar'],
          ],
          caption:
            'Bu tablo grafiğin ham verisidir. Üçüncü sütuna dikkat et: sıcaklığın sabit kaldığı satırların hepsinde kapta iki hâl birlikte bulunuyor. *(Sıcaklıklar deniz seviyesinde saf su içindir. Süreler grafiğin biçimini göstermek için seçilmiştir, ölçekli değildir: gerçekte kaynama bölümü erime bölümünden çok daha uzun sürer. Buharın ısıtılması kapalı bir düzenek gerektirir.)*',
        },
        {
          id: 'lgs-fen-isi-grafik-cizim',
          type: 'process',
          title: 'Ölçüm tablosundan grafik nasıl çizilir?',
          intro: 'Beş adımda, kareli bir kâğıt üzerinde.',
          steps: [
            { title: '1. Eksenleri belirle', body: 'Yatay eksene zamanı, dikey eksene sıcaklığı yaz. Zaman bağımsız değişkendir; sıcaklık ona bağlı olarak değişir.' },
            { title: '2. Ölçeği seç', body: 'En küçük ve en büyük değerlerin kâğıda sığacağı bir ölçek seç. Sıcaklık ekseninde eksi değerler de olacağı için sıfırı biraz yukarıda başlat.' },
            { title: '3. Noktaları işaretle', body: 'Tablodaki her satırı bir nokta olarak yerleştir: önce zamanı yatayda bul, sonra sıcaklığı dikeyde bul.' },
            { title: '4. Noktaları sırayla birleştir', body: 'Noktaları zaman sırasıyla düz çizgilerle birleştir. Sıcaklığın aynı kaldığı noktalar yatay bir çizgi oluşturur.' },
            { title: '5. Bölümleri adlandır', body: 'Her eğimli bölümün yanına hangi hâlin ısındığını, her yatay bölümün üstüne hangi hâl değişiminin gerçekleştiğini yaz.' },
          ],
        },
        {
          id: 'lgs-fen-isi-grafik-sema',
          type: 'figure',
          kind: 'lgs-fen-isinma-grafigi',
          title: 'Saf suyun ısınma grafiği',
          width: 'full',
          complexity: 'medium',
          caption:
            'Eğimli bölümlerde tek hâl vardır ve sıcaklık artar. Yatay bölümlerde iki hâl birlikte bulunur ve sıcaklık sabit kalır; verilen ısı hâl değiştirmeye harcanır. Zaman ekseni ölçekli değildir.',
          purpose: 'Eğimli ve yatay bölümlerin anlamını tek bakışta görünür kılmak',
          alt:
            'Saf suyun sıcaklık–zaman grafiği. Buz −20 °C’den 0 °C’ye ısınır; 0 °C’de erime boyunca sıcaklık sabittir. Su 0 °C’den 100 °C’ye ısınır; 100 °C’de kaynama boyunca sıcaklık sabittir. Ardından buhar 120 °C’ye ısınır.',
          data: {},
          focus: [
            { title: 'Katı ısınıyor', body: 'Yalnız buz var. Verilen ısı taneciklerin titreşimini artırır; sıcaklık −20 °C’den 0 °C’ye yükselir.' },
            { title: 'Erime', body: 'Buz ve su birlikte. Verilen ısı katı düzeni bozmaya harcanır; sıcaklık 0 °C’de sabit kalır.' },
            { title: 'Sıvı ısınıyor', body: 'Yalnız su var. Sıcaklık 0 °C’den 100 °C’ye yükselir.' },
            { title: 'Kaynama', body: 'Su ve buhar birlikte. Verilen ısı tanecikleri birbirinden koparmaya harcanır; sıcaklık 100 °C’de sabit kalır.' },
            { title: 'Gaz ısınıyor', body: 'Yalnız buhar var. Verilen ısı yeniden sıcaklığı artırır.' },
          ],
        },
        {
          id: 'lgs-fen-isi-grafik-anlatim',
          type: 'prose',
          body: `Grafiği okumanın tek kuralı vardır: **çizginin eğimine bak.**

**Eğimli bölüm** → maddenin **tek** bir hâli vardır ve verilen ısı sıcaklığı artırır.

**Yatay bölüm** → madde **hâl değiştiriyordur**; iki hâl birlikte bulunur ve verilen ısı sıcaklığı değil hâli değiştirir.

Bu kuralla grafikten şu bilgileri doğrudan okursun:

- **Erime noktası:** ilk yatay bölümün sıcaklığı. Saf su için 0 °C.
- **Kaynama noktası:** ikinci yatay bölümün sıcaklığı. Saf su için deniz seviyesinde 100 °C.
- **Maddenin hangi aralıkta hangi hâlde olduğu:** yatay bölümlerin arasında ve dışında kalan eğimli bölümlere bakarak.
- **Hâl değişiminin ne kadar sürdüğü:** yatay bölümün uzunluğu.

Son madde önemli bir çıkarıma kapı açar. Aynı ısıtıcıyla ısıtılan bir maddede yatay bölüm **ne kadar uzunsa**, o hâl değişimi için **o kadar çok ısı** gerekmiş demektir. Suyun grafiğinde kaynama bölümü erime bölümünden daha uzundur: aynı kütlede suyu buharlaştırmak, buzu eritmekten daha çok ısı ister.

Şimdi dikkat edilmesi gereken bir nokta. Grafiğin sıcaklık değerleri **saf maddeler** içindir. Program da “saf maddelerin hâl değişimi sırasında sıcaklığının sabit kaldığına” değinilmesini ister. Tuzlu su gibi bir karışımda yatay bölüm bu kadar düz olmaz; bu yüzden erime ve kaynama noktası saf maddeler için **ayırt edici** bir özelliktir.

Son olarak, grafiği ters yönde okumayı da öğren. Soğutulan bir maddenin grafiği aşağı iner: yine yatay bölümler vardır, ama bu kez madde yoğuşur ya da donar ve **çevresine ısı verir.** Sıcaklık yine sabittir.`,
        },
        {
          id: 'lgs-fen-isi-grafik-tuzak',
          type: 'trap',
          title: 'Yatay bölümün uzunluğunu önemsememek',
          wrong: 'Grafikte yatay bölümlerin uzunluğu bir şey anlatmaz; önemli olan sıcaklık değeridir.',
          right: 'Aynı ısıtıcıyla ısıtılan bir maddede yatay bölümün uzunluğu, o hâl değişimi için gereken ısının **göreli büyüklüğünü** gösterir.',
          body: 'Uzun yatay bölüm, daha çok ısı gerektiği anlamına gelir. Sorular bu karşılaştırmayı sayısal hesap istemeden, yalnız grafik okuyarak sorabilir.',
        },
      ],
    },

    {
      id: 'lgs-fen-isi-hal-isisi',
      title: 'Hâl değiştirmek için gereken ısı neye bağlı?',
      lead: 'Kazanım F.8.4.5.2: bu ısı maddenin cinsi ve kütlesiyle ilişkilidir. Hesap yok; ilişki var.',
      blocks: [
        {
          id: 'lgs-fen-isi-hal-isisi-anlatim',
          type: 'prose',
          body: `Bir maddenin hâl değiştirmesi için ısı alması ya da vermesi gerekir. Bu ısının miktarı **iki şeye** bağlıdır.

**1. Maddenin kütlesine.** Bir buz küpünü eritmek kolaydır; bir buz kalıbını eritmek çok daha uzun sürer. İkisi de aynı madde, ikisi de 0 °C’de erir; ama kütlesi büyük olan buzun erimesi için **daha çok ısı** gerekir. Grafikte bu, erime bölümünün **daha uzun** olması demektir.

Dikkat: kütle değişince **erime noktası değişmez.** Büyük buz kalıbı da 0 °C’de erir. Değişen şey, erimenin ne kadar ısı gerektirdiği ve ne kadar sürdüğüdür.

**2. Maddenin cinsine.** Farklı maddelerin eşit kütlelerini eritmek için farklı miktarlarda ısı gerekir. Bu yüzden eşit kütlede iki farklı katı aynı ısıtıcıyla eritildiğinde erime süreleri farklı olur.

Bu iki ilişkiyi karıştırmamak için bir tabloyla ayıralım:

- **Erime ve kaynama noktası** → yalnız maddenin **cinsine** bağlıdır; kütleye bağlı değildir.
- **Hâl değiştirmek için gereken ısı** → hem maddenin **cinsine** hem **kütlesine** bağlıdır.

Bu ayrım sorularda çok sık ölçülür. “Kütle iki katına çıkarsa erime noktası ne olur?” sorusunun cevabı **değişmez**; “erimesi için gereken ısı ne olur?” sorusunun cevabı **artar.**

Son olarak bir bağlantı kuralım: hâl değişimi **ısı alan** ve **ısı veren** değişimler olarak ikiye ayrılır.

- **Isı alan:** erime (katı → sıvı), buharlaşma (sıvı → gaz), süblimleşme (katı → gaz)
- **Isı veren:** donma (sıvı → katı), yoğuşma (gaz → sıvı), kırağılaşma (gaz → katı)

Bir madde bir yönde hâl değiştirirken ne kadar ısı alıyorsa, ters yönde değiştirirken o kadar ısı verir. Donarken verilen ısı, erirken alınan ısıya eşittir.

*Kapsam notu: program bu kazanımda matematiksel hesaplamalara girilmemesini ister; bu yüzden hiçbir ısı miktarını sayıyla vermedik.*`,
        },
        {
          id: 'lgs-fen-isi-hal-isisi-tablo',
          type: 'table',
          interactive: true,
          title: 'Isı ve öz ısının bağlı olduğu faktörler',
          columns: ['Büyüklük', 'Maddenin cinsine bağlı mı?', 'Kütlesine bağlı mı?', 'Grafikte nerede görülür?'],
          rows: [
            ['Öz ısı', 'Evet (maddenin hâline de bağlı)', 'Hayır', 'Aynı kütle ve ısıtıcıda eğimli bölümün dikliği'],
            ['Erime noktası', 'Evet', 'Hayır', 'İlk yatay bölümün sıcaklığı'],
            ['Kaynama noktası', 'Evet', 'Hayır', 'İkinci yatay bölümün sıcaklığı'],
            ['Erimek için gereken ısı', 'Evet', 'Evet', 'İlk yatay bölümün uzunluğu'],
            ['Kaynamak için gereken ısı', 'Evet', 'Evet', 'İkinci yatay bölümün uzunluğu'],
            ['Isınma miktarı (aynı ısıda)', 'Evet — öz ısı', 'Evet', 'Eğimli bölümün dikliği'],
          ],
          caption:
            'İlk iki satır ile sonraki satırlar arasındaki fark bu bölümün asıl bilgisidir: sıcaklık değerleri kütleye bağlı değildir, ısı miktarları bağlıdır.',
        },
        {
          id: 'lgs-fen-isi-hal-isisi-tuzak',
          type: 'trap',
          title: 'Kütle artınca erime noktasının değiştiğini sanmak',
          wrong: 'Buz kalıbı büyük olduğu için daha yüksek bir sıcaklıkta erir.',
          right: 'Erime noktası maddenin cinsine bağlıdır, kütlesine bağlı değildir. Büyük buz kalıbı da **0 °C’de** erir; yalnız erimesi için **daha çok ısı** gerekir ve daha uzun sürer.',
          body: 'Grafikte kütle artınca yatay bölüm uzar ama **yukarı kaymaz.** Yatay bölümün yüksekliği sıcaklığı, uzunluğu gereken ısıyı gösterir.',
        },
      ],
    },

    {
      id: 'lgs-fen-isi-gunluk',
      title: 'Günlük hayatta hâl değişimi ve ısı alışverişi',
      lead: 'Kazanım F.8.4.5.4 bu ilişkinin günlük olaylarla kurulmasını ister. Tek soru yeter: madde ısı mı alıyor, ısı mı veriyor?',
      blocks: [
        {
          id: 'lgs-fen-isi-gunluk-anlatim',
          type: 'prose',
          body: `Günlük hayatta hâl değişimlerini fark etmek kolaydır; asıl beceri, bu değişimin **çevreyi ısıttığını mı soğuttuğunu mu** söyleyebilmektir.

Kural basittir: **ısı alan bir hâl değişimi çevresini soğutur, ısı veren bir hâl değişimi çevresini ısıtır.** Çünkü madde ısıyı çevresinden alır ya da çevresine verir.

**Çevreyi soğutan olaylar (ısı alan değişimler):**

- **Terleme ile serinleme.** Ter buharlaşırken ısıyı cildimizden alır; vücut serinler.
- **Kolonyanın serinletmesi.** Kolonyadaki alkol hızla buharlaşır ve cildin ısısını alır.
- **Yağmurdan sonra havanın serinlemesi.** Yerdeki suyun buharlaşması çevreden ısı alır.
- **Yaz günü evin önünün sulanması.** Su buharlaşırken çevresini serinletir.
- **Buzun içeceği soğutması.** Buz erirken içecekten ısı alır.
- **Toprak testide suyun serin kalması.** Testinin gözeneklerinden sızan su buharlaşır ve testiyi soğutur.

**Çevreyi ısıtan olaylar (ısı veren değişimler):**

- **Don gecesinden önce meyve bahçelerinin sulanması.** Su donarken çevresine ısı verir; bu, tomurcukların donmasını geciktirir.
- **Kışın mahzene su dolu kaplar konması.** Su donarken verdiği ısı, sebze ve meyvelerin donmasını geciktirir.
- **Kar yağarken havanın biraz ılıması.** Su buharının kristalleşerek kar hâline gelmesi çevreye ısı verir.
- **Buhar yanığının kaynar su yanığından daha tehlikeli olması.** Buhar ciltte yoğuşurken ek olarak ısı verir.

Son madde iyi bir örnek: 100 °C’deki buhar ile 100 °C’deki su aynı sıcaklıktadır. Ama buhar cilde değip yoğuşurken **ayrıca** yoğuşma ısısını da verir. Bu yüzden buhar yanığı daha ciddi olur. Aynı sıcaklık, farklı ısı: dersin ana fikri bir kez daha.

Bir de ters yönde düşün: buzdolabının arka kısmının ılık olması da aynı mantığa dayanır. Buzdolabı içeriden aldığı ısıyı dışarıya verir; bu sırada içindeki soğutucu madde hâl değiştirir.

Bu örnekleri ezberlemene gerek yok. Her yeni örnekte iki soruyu sor:

1. **Hangi hâl değişimi oluyor?**
2. **Bu değişim ısı alıyor mu, veriyor mu?** Alıyorsa çevre soğur, veriyorsa çevre ısınır.`,
        },
        {
          id: 'lgs-fen-isi-gunluk-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Isı alan ve ısı veren hâl değişimleri',
          columns: ['Isı alan (çevreyi soğutur)', 'Isı veren (çevreyi ısıtır)'],
          rows: [
            { label: 'Hâl değişimleri', values: ['Erime, buharlaşma, süblimleşme', 'Donma, yoğuşma, kırağılaşma'] },
            { label: 'Taneciklere ne olur?', values: ['Birbirinden uzaklaşır, dağılır', 'Birbirine yaklaşır, toplanır'] },
            { label: 'Günlük örnek', values: ['Terleme ile serinleme, kolonyanın serinletmesi', 'Meyve bahçelerinin don öncesi sulanması'] },
            { label: 'Saf maddede sıcaklık', values: ['Değişim boyunca sabit', 'Değişim boyunca sabit'] },
          ],
          insight:
            'Son satır iki sütunu birleştirir: ısı alsın ya da versin, saf bir madde hâl değiştirirken sıcaklığı sabit kalır.',
        },
        {
          id: 'lgs-fen-isi-gunluk-hafiza',
          type: 'memory',
          title: 'Tek cümlelik kural',
          body:
            '**Tanecikler dağılıyorsa ısı alır ve çevre soğur; tanecikler toplanıyorsa ısı verir ve çevre ısınır.**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Değişkenleri adlandır',
      prompt:
        'Bir öğrenci eşit kütlede su ve zeytinyağını özdeş ısıtıcılarla aynı süre ısıtıyor ve sıcaklık artışlarını ölçüyor. Bu deneyde bağımsız, bağımlı ve kontrol edilen değişkenler nelerdir?',
      steps: [
        { title: '1. Değiştirilen şeyi bul', body: 'Öğrenci iki farklı sıvı kullanıyor. Bilerek değiştirdiği şey **sıvının cinsidir**; bağımsız değişken budur.' },
        { title: '2. Ölçülen şeyi bul', body: 'Öğrenci sıcaklık artışını ölçüyor. Ölçülen ve cinse bağlı olarak değişen şey **sıcaklık artışıdır**; bağımlı değişken budur.' },
        { title: '3. Sabit tutulanları say', body: 'Kütleler eşit, ısıtıcılar özdeş, süre aynı. Bunlar **kontrol edilen değişkenlerdir.**' },
        { title: '4. Eksik kontrolü düşün', body: 'Başlangıç sıcaklığı ve kapların türü de aynı olmalıdır; yoksa sonuç etkilenebilir.' },
        { title: '5. Sonucu yaz', body: 'Bağımsız: sıvının cinsi. Bağımlı: sıcaklık artışı. Kontrol edilen: kütle, ısıtıcı, süre, başlangıç sıcaklığı, kap.' },
      ],
      answer:
        'Bağımsız değişken sıvının cinsi, bağımlı değişken sıcaklık artışı; kütle, ısıtıcı, süre, başlangıç sıcaklığı ve kap kontrol edilen değişkenlerdir.',
      takeaway:
        'Program bu kazanımda değişkenlerin örneklerle açıklanmasını ister; bu soru tam olarak o beceriyi ölçer.',
    },
    {
      title: 'Seviye 2 — Grafikten bilgi çıkar',
      prompt:
        'Saf bir maddenin ısınma grafiğinde ilk yatay bölüm 60 °C’de, ikinci yatay bölüm 180 °C’de. İkinci yatay bölüm birincisinden daha uzun. Bu maddenin erime ve kaynama noktası nedir? 100 °C’de hangi hâldedir? Hangi hâl değişimi daha çok ısı gerektirmiştir?',
      steps: [
        { title: '1. Erime noktasını oku', body: 'İlk yatay bölüm erimeyi gösterir. Erime noktası **60 °C**’dir.' },
        { title: '2. Kaynama noktasını oku', body: 'İkinci yatay bölüm kaynamayı gösterir. Kaynama noktası **180 °C**’dir.' },
        { title: '3. 100 °C’yi konumlandır', body: '100 °C, 60 °C ile 180 °C arasındadır. Bu aralık iki yatay bölüm arasındaki eğimli bölüme düşer.' },
        { title: '4. Hâli belirle', body: 'Erime bitmiş, kaynama başlamamıştır. Madde 100 °C’de **sıvı** hâldedir.' },
        { title: '5. Yatay bölümleri karşılaştır', body: 'İkinci yatay bölüm daha uzundur. Aynı ısıtıcı kullanıldığında daha uzun süre, daha çok ısı demektir.' },
        { title: '6. Sonucu yaz', body: 'Kaynama, erimeden **daha çok ısı** gerektirmiştir.' },
      ],
      answer:
        'Erime noktası 60 °C, kaynama noktası 180 °C’dir. Madde 100 °C’de sıvıdır. Kaynama daha çok ısı gerektirmiştir.',
      takeaway:
        'Grafikten üç bilgi okunur: yatay bölümün yüksekliği sıcaklığı, uzunluğu gereken ısıyı, eğimli bölümler hâli gösterir.',
    },
    {
      title: 'Seviye 3 — Günlük olayı açıkla',
      prompt:
        'Bir çiftçi, don olacağı haber verilen gecenin akşamında meyve ağaçlarını suluyor. Bu uygulamanın ağaçları nasıl koruduğunu hâl değişimi ve ısı alışverişi üzerinden açıkla.',
      steps: [
        { title: '1. Olayı tanımla', body: 'Gece sıcaklık 0 °C’nin altına inecek. Ağaçların üzerindeki ve çevresindeki su donacak.' },
        { title: '2. Hâl değişimini adlandır', body: 'Su sıvıdan katıya geçiyor: bu bir **donma**dır.' },
        { title: '3. Isı alışverişini belirle', body: 'Donma, taneciklerin toplandığı bir değişimdir; madde çevresine **ısı verir.**' },
        { title: '4. Çevreye etkisini söyle', body: 'Donan suyun verdiği ısı, tomurcukların ve dalların çevresini ısıtır.' },
        { title: '5. Sıcaklık sabitliğini kullan', body: 'Su donarken sıcaklığı 0 °C’de sabit kalır. Bu sürede tomurcukların sıcaklığı da daha aşağı inmekte gecikir.' },
        { title: '6. Sonucu yaz', body: 'Donma sırasında açığa çıkan ısı, ağaçların zarar görmesini geciktirir.' },
      ],
      answer:
        'Su donarken çevresine ısı verir ve donma sürdükçe sıcaklığı 0 °C’de sabit kalır; bu ısı tomurcukların donmasını geciktirir.',
      takeaway:
        'Günlük olayı açıklamanın iki sorusu: hangi hâl değişimi oluyor, ısı alıyor mu veriyor mu?',
    },
  ],

  dailyLife: {
    title: 'Bu bilgi hayatın neresinde?',
    body:
      'Isınma ve hâl değişimi, mutfaktan tarıma, iklimden sağlığa kadar her yerde karşına çıkar.',
    links: [
      'Kıyı bölgelerinde gece ile gündüz arasındaki sıcaklık farkı azdır; çünkü suyun öz ısısı büyüktür.',
      'Arabaların soğutma sisteminde su kullanılır; su çok ısı alarak az ısınır.',
      'Terleme vücudumuzun serinleme yoludur; ter buharlaşırken ısı alır.',
      'Don gecelerinde meyve bahçeleri sulanır; su donarken ısı verir.',
      'Buhar yanıkları kaynar su yanıklarından daha ciddidir; buhar yoğuşurken ek ısı verir.',
      'Yemek pişirirken su kaynadıktan sonra ocağı kısmak enerji tasarrufu sağlar; sıcaklık zaten artmaz.',
    ],
  },

  questionClue: {
    concept: 'Isı ve hâl değişimi sorusu',
    statement:
      'Soruda bir sıcaklık–zaman grafiği, özdeş ısıtıcılarla yapılan bir deney ya da bir günlük hâl değişimi varsa, ölçülen şey bu dersin ilişkileridir.',
    clues: [
      'Sıcaklık–zaman grafiği ve yatay bölümler',
      '“Özdeş ısıtıcılarla, eşit süre” ifadesi',
      'Kütlesi ya da cinsi farklı maddelerin karşılaştırılması',
      '“Hangi aralıkta madde hem katı hem sıvıdır?” kalıbı',
      'Terleme, kolonya, don, buhar yanığı gibi günlük olaylar',
    ],
    reasoning:
      'Bu işaretler üç işlem ister: grafikte eğime bakmak, deneyde değişkenleri ayırmak, günlük olayda ısı alışverişinin yönünü belirlemek.',
    boundary:
      'Bu ipuçlarını sayısal hesaba çevirme; program bu konuda bağıntı ve hesap istemez. Ayrıca “düz çizgi = hiçbir şey olmuyor” yanılgısına düşme: yatay bölüm hâl değişimidir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu dört kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir deneyde bağımlı, bağımsız ve kontrol edilen değişkenlerin belirlenmesi',
      'Özdeş ısıtıcılarla ısıtılan maddelerin sıcaklık artışlarının karşılaştırılması',
      'Isınma grafiğinden erime ve kaynama noktasının okunması',
      'Grafikte maddenin belirli bir aralıktaki hâlinin sorulması',
      'Kütle değişince erime noktasının ve gereken ısının nasıl değiştiğinin sorulması',
      'Günlük bir olayın ısı alan ya da ısı veren hâl değişimiyle açıklanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Kaynayan bir tencere suya ısı vermeye devam edildiği hâlde sıcaklık 100 °C’de kalıyor. Verilen ısı nereye gidiyor?',
      hint: 'Kaynama sırasında taneciklere ne oluyor?',
      answer:
        'Verilen ısı sıcaklığı artırmaya değil, **suyun sıvıdan gaz hâline geçmesine** harcanıyor. Kaynama sırasında tanecikler birbirinden koparak buhar hâline geçer ve bu kopma enerji ister. Bu yüzden saf suyun sıcaklığı kaynama boyunca sabit kalır. Suyun tamamı buharlaştıktan sonra verilen ısı yeniden sıcaklığı artırmaya başlar.',
    },
    {
      prompt:
        'Bir buz küpü ile büyük bir buz kalıbı aynı ortamda eriyor. Hangisi daha yüksek sıcaklıkta erir? Hangisinin erimesi için daha çok ısı gerekir?',
      hint: 'Erime noktası neye bağlı, gereken ısı neye bağlı?',
      answer:
        'İkisi de **aynı sıcaklıkta (0 °C)** erir; çünkü erime noktası maddenin cinsine bağlıdır, kütlesine bağlı değildir. Ama büyük buz kalıbının erimesi için **daha çok ısı** gerekir; çünkü hâl değiştirmek için gereken ısı kütleye bağlıdır. Grafikte kalıbın erime bölümü daha uzun olur ama aynı yükseklikte kalır.',
    },
    {
      prompt:
        'Kolonya sürdüğümüzde cildimiz neden serinler? Cevabını ısı alışverişiyle açıkla.',
      hint: 'Kolonya ciltte hangi hâl değişimini geçiriyor?',
      answer:
        'Kolonya ciltte **buharlaşır.** Buharlaşma, taneciklerin birbirinden uzaklaştığı ve ısı alan bir hâl değişimidir. Kolonya bu ısıyı **cildimizden** alır; ısı kaybeden cilt serinler. Terlemeyle serinlememiz de aynı mantığa dayanır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey hesap değil; değişken, grafik ve yön',
    body:
      'Dört kazanımın fiillerine bak: “deney yaparak keşfeder”, “deney yaparak keşfeder”, “grafiğini çizerek yorumlar”, “ilişkilendirir”. Programın açıklamaları da bağıntıya ve hesaplamaya girilmemesini, değişkenlerin örneklerle açıklanmasını ister. Bu yüzden senden bir ısı hesabı değil; deneyde değişkenleri ayırman, grafiği okuman ve günlük bir olayda ısı alışverişinin yönünü söylemen beklenir. MEB merkezî sınav kılavuzu da soruların yorumlama, analiz ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir.',
    measures: [
      'Isı ile sıcaklığı ayırt edebilme',
      'Isınmanın madde cinsi, kütle ve sıcaklık değişimine bağlılığını deneyle gösterebilme',
      'Bir deneyde bağımlı, bağımsız ve kontrol edilen değişkenleri belirleyebilme',
      'Ölçüm verisinden ısınma grafiği çizip okuyabilme',
      'Hâl değişimi sırasında saf maddelerin sıcaklığının sabit kaldığını açıklayabilme',
      'Günlük olaylarda ısı alan ve ısı veren hâl değişimlerini ayırabilme',
    ],
  },

  simulationTable: {
    title: 'Saf bir X maddesinin ısıtılması: ölçüm kaydı',
    columns: ['Zaman (dakika)', '0', '2', '4', '6', '8', '10', '12', '14'],
    rows: [
      ['Sıcaklık (°C)', '10', '30', '30', '30', '50', '70', '90', '90'],
    ],
    caption: 'X maddesi özdeş bir ısıtıcıyla sürekli ısıtılmıştır; 14. dakikada ölçüm sona ermiştir.',
  },

  simulation: {
    title: 'Mini uygulama — özgün ölçüm kaydı',
    passage: `Bir öğrenci saf bir X maddesini sürekli ısıtıyor ve iki dakikada bir sıcaklığını ölçüp yukarıdaki kaydı tutuyor.

Öğrenci, kaydı kullanarak X maddesinin ısınma grafiğini çizmek ve yorumlamak istiyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi kesinlikle doğrudur?',
    options: [
      {
        text: 'X maddesi 2. ile 6. dakikalar arasında hâl değiştirmektedir',
        explanation:
          'Doğru cevap. 2. ile 6. dakikalar arasında ısı verilmeye devam ettiği hâlde sıcaklık 30 °C’de sabit kalmıştır. Saf bir maddede ısı alındığı hâlde sıcaklığın sabit kalması, hâl değişiminin göstergesidir.',
      },
      {
        text: 'X maddesi 2. ile 6. dakikalar arasında ısı almamıştır',
        explanation:
          'Isıtma sürekli yapılmıştır; madde bu aralıkta da ısı almıştır. Aldığı ısı sıcaklığı artırmaya değil, hâl değiştirmeye harcanmıştır.',
      },
      {
        text: 'X maddesinin kaynama noktası 90 °C’dir',
        explanation:
          '90 °C’de de sıcaklık sabitlenmiş görünüyor; ama kayıtta yalnız iki ölçüm (12. ve 14. dakika) var ve ölçüm burada kesilmiş. Bu, bir hâl değişiminin başladığına işaret eder; ancak bu değişimin kaynama olduğunu ve ne kadar süreceğini kayıt tek başına kesinleştirmez.',
      },
      {
        text: 'X maddesi 0. dakikada sıvı hâldedir',
        explanation:
          'Kayda göre madde ilk kez 30 °C’de hâl değiştiriyor. Isıtılan bir maddede ilk hâl değişimi genellikle erimedir; bu da 0. dakikada maddenin katı olduğunu düşündürür. Sıvı olduğunu kesin söyleyecek bir bilgi yoktur.',
      },
      {
        text: 'X maddesinin kütlesi artırılsaydı sabit sıcaklık 30 °C’den daha yüksek olurdu',
        explanation:
          'Hâl değişimi sıcaklığı maddenin cinsine bağlıdır, kütlesine bağlı değildir. Kütle artsaydı yatay bölüm uzardı ama yine 30 °C’de kalırdı.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru “kesinlikle doğru” olanı istiyor. Yöntem: kayıttaki sayıları grafiğe çevir ve yalnız verinin **kesin olarak** söylediğini seç. Sıcaklığın sabit kaldığı aralık, ısıtma sürdüğü için hâl değişimidir.',
    critical_point:
      'Kritik nokta üçüncü seçenektir. 90 °C’de de sıcaklık sabitlenmiş görünüyor ve öğrenci bunu hemen kaynama noktası sanıyor. Oysa ölçüm burada kesilmiştir; “kesinlikle” sözcüğü, verinin söylemediğini iddia etmeyi yasaklar.',
    takeaway:
      'Bir kayıttan çıkarım yaparken iki şeyi ayır: verinin kesin olarak gösterdiği ile yalnız düşündürdüğü.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Saf bir madde hâl değiştirirken aşağıdakilerden hangisi doğrudur?',
      options: [
        'Madde ısı almaz ve sıcaklığı sabit kalır',
        'Madde ısı alır ya da verir ve sıcaklığı sabit kalır',
        'Madde ısı alır ve sıcaklığı düzenli olarak artar',
        'Madde ısı verir ve sıcaklığı düzenli olarak azalır',
      ],
      answer_index: 1,
      explanation:
        'Hâl değişimi sırasında madde ısı alır (erime, buharlaşma, süblimleşme) ya da verir (donma, yoğuşma, kırağılaşma). Bu ısı sıcaklığı değiştirmeye değil hâli değiştirmeye harcandığı için saf bir maddenin sıcaklığı hâl değişimi boyunca sabit kalır. Birinci seçenek, ısının alınmaya devam ettiğini gözden kaçırır.',
    },
    {
      purpose: 'apply',
      question:
        'Eşit kütledeki K ve L sıvıları özdeş ısıtıcılarla aynı süre ısıtıldığında K’nin sıcaklığı 10 °C, L’nin sıcaklığı 25 °C artıyor. Bu gözleme göre ne söylenebilir?',
      options: [
        'K’nin öz ısısı L’ninkinden büyüktür',
        'L’nin öz ısısı K’ninkinden büyüktür',
        'K ve L aynı maddedir',
        'K daha az ısı almıştır',
      ],
      answer_index: 0,
      explanation:
        'Kütleler ve verilen ısı eşittir; değişen tek şey maddenin cinsidir. Aynı ısıyı alan maddelerden daha az ısınan, öz ısısı büyük olandır. K daha az ısındığı için K’nin öz ısısı daha büyüktür. Özdeş ısıtıcılar aynı süre çalıştığı için iki sıvı eşit ısı almıştır; dördüncü seçenek bu yüzden yanlıştır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Su donarken soğuduğu için çevresinden ısı alır.” diyor. Bu ifadenin hatası nedir?',
      options: [
        'Donmanın çevreye ısı veren bir hâl değişimi olduğunu gözden kaçırmak',
        'Donma noktasının kütleye bağlı olduğunu sanmak',
        'Isı ile sıcaklığı aynı saymamak',
        'Donmayı kimyasal değişim sanmak',
      ],
      answer_index: 0,
      explanation:
        'Donma, taneciklerin birbirine yaklaştığı ve düzenli hâle geldiği bir değişimdir; madde bu sırada çevresine **ısı verir.** Don gecelerinde meyve bahçelerinin sulanması da bu yüzden işe yarar. Öğrenci “soğumak” ile “ısı almak” kavramlarını karıştırmıştır: donan su ısı kaybeder, yani ısı verir.',
    },
  ],

  summary: [
    'Isı, sıcaklıkları farklı maddeler arasında aktarılan enerjidir; sıcaklık termometreyle ölçülen bir göstergedir.',
    'Isınma maddenin cinsine, kütlesine ve istenen sıcaklık değişimine bağlıdır.',
    'Aynı ısıyı alan eşit kütledeki maddelerden öz ısısı büyük olan daha az ısınır.',
    'Suyun öz ısısı büyüktür; su geç ısınır, geç soğur.',
    'Bir deneyde yalnız bir değişken değiştirilir; öbürleri kontrol edilen değişken olarak sabit tutulur.',
    'Saf bir madde hâl değiştirirken ısı almaya ya da vermeye devam eder ama sıcaklığı sabit kalır.',
    'Isınma grafiğinde eğimli bölüm tek hâli, yatay bölüm hâl değişimini gösterir.',
    'Yatay bölümün yüksekliği erime ya da kaynama noktasını, uzunluğu gereken ısının büyüklüğünü gösterir.',
    'Erime ve kaynama noktası kütleye bağlı değildir; hâl değiştirmek için gereken ısı kütleye bağlıdır.',
    'Erime, buharlaşma ve süblimleşme ısı alır; donma, yoğuşma ve kırağılaşma ısı verir.',
    'Isı alan hâl değişimi çevreyi soğutur, ısı veren hâl değişimi çevreyi ısıtır.',
    'Bu düzeyde ısı bağıntısı ve sayısal hesap istenmez.',
  ],

  next: [
    'Türkiye’de Kimya Endüstrisi (F.8.4.6.1, F.8.4.6.2)',
    'Basit Makineler: Kazanç Neyin Kazancı? (F.8.5.1.1)',
    'Madde Döngüleri ve Küresel İklim Değişikliği (F.8.6.3 — su döngüsünde hâl değişimleri)',
  ],
})

export default lesson
