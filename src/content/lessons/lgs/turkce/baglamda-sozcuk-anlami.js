import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — GOLD STANDARD
 * ==================================================================
 * Konu     : Sözcükte Anlam
 * Kazanım  : T.8.3.5 (okuma) · T.8.1.2 (dinleme/izleme — aynı beceri)
 * Dayanak  : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Bu not, sonraki bütün LGS Türkçe notlarının kalite referansıdır.
 * Bütün metinler, örnekler ve sorular DRKOÇ için özgün yazılmıştır;
 * çıkmış soru veya yayınevi sorusu kopyalanmamıştır.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-baglamda-sozcuk-anlami',
  topic: 'Sözcükte Anlam',
  order: 1,
  goldStandard: true,
  title: 'Bağlamda Sözcük Anlamı: Kanıttan Yoruma',
  subtitle:
    'Bilmediğin bir kelimenin anlamını sözlüğe bakmadan, yalnız metnin verdiği kanıtla bul; yakın görünen iki seçeneği kanıtla birbirinden ayır.',
  minutes: 45,
  kazanimlar: [
    { kod: 'T.8.3.5', metin: 'Bağlamdan yararlanarak bilmediği kelime ve kelime gruplarının anlamını tahmin eder.' },
    { kod: 'T.8.1.2', metin: 'Dinlediklerinde/izlediklerinde geçen bilmediği kelimelerin anlamını tahmin eder.' },
  ],
  prerequisites: [
    { topic: 'Cümlede sözcüğün görevi', why: 'Bir sözcüğün neyi nitelediğini göremezsen hangi anlamda kullanıldığını da göremezsin.' },
    { topic: 'Somut ve soyut kavramı', why: 'Aktarmalı kullanımları tanımak için bu ayrım gerekir.' },
  ],
  outcomes: [
    'Bilmediğin bir sözcüğün anlamını, metnin verdiği ipuçlarını sırayla toplayarak tahmin edebileceksin.',
    'Bir sözcüğün temel, yan, mecaz ve terim anlamını cümleden gelen kanıtla ayırt edebileceksin.',
    'Deyim gibi söz gruplarının anlamını tek tek kelimelerden değil, bütünden çıkarabileceksin.',
    'Birbirine çok yakın görünen iki seçenek arasından, metindeki kanıta uyanı seçebileceksin.',
    'Bir seçeneği elerken "kulağa yanlış geliyor" yerine "metinde şu cümle bunu desteklemiyor" diyebileceksin.',
  ],

  opening: {
    title: 'Sözlüğün olmadığı yerde anlam nereden gelir?',
    lead: 'Sınavda da, okuduğun kitapta da yanında sözlük yok. Ama her zaman metin var — ve metin, aradığın anlamı zaten söylüyor.',
    body: `Okurken bilmediğin bir kelimeyle karşılaştığında ilk tepkin genellikle durmak olur. Oysa deneyimli bir okur o noktada durmaz; **çevreye bakar.** Çünkü bir sözcük cümlede tek başına durmaz: kendinden önceki ve sonraki sözcüklerle ilişki kurar, bir varlığı niteler, bir eylemi tamamlar, bir karşıtlığın içine yerleşir. Bu ilişkiler ağına **bağlam** denir ve bir sözcüğün cümlede hangi anlamı taşıdığını bağlam belirler.

Bunu bildiğin kelimelerde zaten yapıyorsun. "Çayı **ağır** ağır içti." dediğinde kimse fincanın kütlesini düşünmez; "Bu kitabın dili çok **ağır**." dediğinde kimse kitabı tartmaz. Aynı beş harf, üç ayrı cümlede üç ayrı anlam taşıyabilir. Sözcük değişmemiştir; sözcüğün çevresi değişmiştir.

Bu dersin konusu tam olarak budur: **bilmediğin bir sözcüğün anlamını, metnin verdiği kanıtla tahmin etmek.** MEB 8. sınıf Türkçe programındaki T.8.3.5 kazanımı bunu açıkça ister ve kazanımın açıklamasında öğrencinin tahminini sonradan sözlükle karşılaştırması önerilir. Yani "tahmin" burada rastgele atmak değildir; kanıta dayanan, sonradan doğrulanabilen bir çıkarımdır.

Bir noktayı baştan netleştirelim. Bağlamdan anlam çıkarmak, **anahtar kelime avcılığı değildir.** "Cümlede *ama* varsa cevap karşıtlıktır" gibi kestirmeler bir süre işe yarar, sonra öğrenciyi yanıltır. Çünkü aynı bağlaç bambaşka bir ilişkiyi de kurabilir. Güvenilir olan tek yol şudur: **seçtiğin anlamın metindeki hangi cümleye dayandığını gösterebilmek.** Gösteremiyorsan, o anlam senin tahminin değil, tahmininin kılık değiştirmiş hâlidir.

Ders boyunca önce bağlamın hangi ipuçlarını verdiğini göreceğiz, sonra bir sözcüğün anlam katmanlarını (temel, yan, mecaz, terim) ayırt etmeyi kuracağız, ardından tek tek kelimelerden anlaşılmayan söz gruplarına geçeceğiz ve en sonunda birbirine çok yakın iki seçeneği kanıtla ayırmayı çalışacağız.`,
  },

  concepts: [
    {
      term: 'Bağlam',
      body: 'Bir sözcüğün çevresindeki sözcükler, cümlenin amacı ve sözün söylendiği durumun tamamıdır. Doğru anlam, bu üç kanıtın birlikte desteklediği anlamdır. Bir anlamı yalnız tek bir kelimeye bakarak seçtiysen henüz bağlama bakmamışsındır.',
    },
    {
      term: 'Temel anlam',
      body: 'Sözcük söylendiğinde zihinde ilk beliren ve öteki anlamların çıkış noktası olan anlamdır. "Çocuğun **ayağı** incindi." cümlesindeki *ayak* budur. Temel anlam her zaman somut olmak zorunda değildir: *umut, kaygı, düşünce* sözcüklerinin temel anlamı soyuttur.',
    },
    {
      term: 'Yan anlam',
      body: 'Temel anlamla biçim, konum ya da işlev benzerliği korunarak oluşan anlamdır. "Masanın **ayağı**" destek olma, "dağın **eteği**" aşağıda bulunma, "şişenin **ağzı**" açıklık olma ilişkisini sürdürür. Sözcük artık insan bedenini göstermese de temel anlamla somut bir bağ kurulabildiği için hâlâ gerçek anlam alanındadır.',
    },
    {
      term: 'Mecaz anlam',
      body: 'Sözcüğün temel anlamındaki bir özelliği soyut bir duruma ya da değerlendirmeye taşımasıdır. "Soğuk bir tavırla karşıladı." cümlesinde *soğuk* sıcaklığı değil ilgisizliği anlatır. Mecazı kanıtlamanın en güvenilir yolu, sözü gerçek kabul ettiğinde cümlede ortaya çıkan mantıksızlığı göstermektir.',
    },
    {
      term: 'Terim anlam',
      body: 'Sözcüğün belirli bir bilim, sanat, spor veya meslek alanında sınırları tanımlanmış bir kavramı karşılamasıdır. "Cümlenin sonuna **nokta** konur." cümlesindeki *nokta* dil bilgisi terimidir. Terimlik sözcüğün kendisinde değil, cümlenin o alanın kavramını gerçekten işletmesindedir.',
    },
    {
      term: 'Söz grubu (kelime grubu)',
      body: 'Birden çok sözcüğün bir araya gelerek tek bir anlam taşıdığı yapıdır. *Göz atmak, eli açık, kulak kesilmek* gibi. Anlamı parçaların toplamından çıkmaz; bu yüzden bağlam söz gruplarında daha da belirleyicidir.',
    },
  ],

  why: {
    question: 'Neden sözlükteki ilk anlamı seçmek çoğu zaman yanlış sonuç verir?',
    body: `Çünkü sözlük bir sözcüğün **olabileceği bütün anlamları** listeler; cümle ise bunlardan **yalnız birini** çalıştırır. Sözlükte "ağır" maddesinin altında kütlesi fazla olan, yavaş, anlaşılması güç, kırıcı, ciddi gibi pek çok karşılık vardır. Sen okurken bu listenin tamamını değil, cümlenin seçtiği tek karşılığı ararsın.

Bu yüzden soru kökü de neredeyse her zaman "bu parçada", "bu cümlede", "aşağıdaki kullanımda" der. Bu ifadeler süs değildir: sana **kanıtın nerede olduğunu** söylerler. Kanıt metnin içindedir. Metnin dışından getirdiğin bir bilgi — daha önce okuduğun bir cümle, bir arkadaşının kullandığı biçim, kulağına hoş gelen bir karşılık — o kanıtın yerine geçemez.

İkinci bir sebep daha var. Sözcüklerin anlamları arasında keskin duvarlar yoktur; anlamlar birbirine yakındır. "Yavaş" ile "ağırbaşlı", "cimri" ile "tutumlu", "ketum" ile "sessiz" birbirine yakın durur ama aynı şey değildir. Bir soruda iki seçenek birden doğruya yakın görünüyorsa, aralarındaki farkı **senin sezgin** değil **metindeki cümle** çözer. Bu dersin sonunda yapmanı istediğim şey tek bir cümleyle söylenebilir: *seçtiğin anlamın altına metinden bir kanıt cümlesi yazabil.*`,
  },

  decision: {
    title: 'Bağlamdan anlam çıkarma yolu',
    lead: 'Sezgiyle seçmek yerine metnin sana verdiği kanıtı sırayla topla. Bu beş durak, her seferinde aynı sırayla uygulanır.',
    intro: 'Bilmediğin veya birden çok anlama gelebilecek bir sözcükle karşılaştığında şu beş durağı uygula. Hiçbirini atlama; her adım bir sonrakinin arama alanını daraltır.',
    steps: [
      {
        title: '1. Sözcüğün bağlandığı ögeyi bul',
        body: 'Sözcük neyi niteliyor, hangi eylemi tamamlıyor, kimin yerine kullanılıyor? Bir insanı mı, bir nesneyi mi, bir düşünceyi mi anlatıyor? Bu soru, olası anlamların yarısını daha baştan eler. "Ketum bir öğrenci" tamlamasında sözcük bir kişiyi nitelediği için aranan şey bir kişilik özelliğidir.',
      },
      {
        title: '2. Çevredeki ipuçlarını topla',
        body: 'Metin çoğu zaman anlamı açıkça söylemese bile gösterir: bir tanım verir, bir örnek sıralar, bir karşıtlık kurar ya da bir sonuç bildirir. Bu ipuçlarını tek tek not et. Bir ipucu yetmez; iki ipucu birbirini destekliyorsa tahminin sağlamlaşır.',
      },
      {
        title: '3. Kendi karşılığını yaz',
        body: 'Seçeneklere bakmadan önce sözcüğün yerine kendi kısa ifadeni koy. "Ketum → sır saklayan" gibi. Bu adım çok önemlidir: kendi karşılığını yazmadan seçeneklere bakarsan, seçenekler senin düşünceni yönlendirir ve çeldirici kolayca inandırıcı görünür.',
      },
      {
        title: '4. Seçeneği metne yerleştir',
        body: 'Her seçeneği sırayla sözcüğün yerine koy ve cümleyi baştan oku. Cümle anlamlı kalıyor mu? Metnin tonu ve ana düşüncesi korunuyor mu? Bir seçenek tek başına doğru görünse de metne yerleştirildiğinde metnin geri kalanıyla çelişiyorsa yanlıştır.',
      },
      {
        title: '5. Kanıt cümlesini göster',
        body: 'Son adımda kendine şunu sor: seçtiğim anlamı metindeki hangi cümle destekliyor? O cümleyi parmağınla gösterebiliyorsan cevabın sağlamdır. Gösteremiyorsan seçimin tahmin değil, tahmin taklididir; geri dön ve ikinci adımı tekrarla.',
      },
    ],
    takeaway: 'Doğru seçenek sözlüğe değil, metnin tamamına uyan seçenektir.',
  },

  decisionTree: {
    title: 'Anlam katmanını belirleme kontrolü',
    intro:
      'Sözcüğün anlamını bulduktan sonra sıra o anlamı adlandırmaya gelir. Aşağıdaki üç kontrolü sırayla uygula; her kontrolde hem "evet" hem "hayır" bir yere çıkar.',
    checks: [
      {
        question: 'Sözcük, belirli bir bilim, sanat, spor veya meslek alanının tanımlı bir kavramını mı karşılıyor?',
        yes: 'Terim anlamdır. Örnek: "Cümlenin sonuna nokta konur." — dil bilgisi terimi.',
        no: 'Terim değildir; ikinci kontrole geç.',
      },
      {
        question: 'Sözü gerçek kabul ettiğinde cümle mantıklı kalıyor mu?',
        yes: 'Gerçek anlam alanındadır; üçüncü kontrole geç.',
        no: 'Mecaz anlamdır: anlam somut bir özellikten soyut bir duruma taşınmıştır. Örnek: "Sözleri içime işledi."',
      },
      {
        question: 'Temel anlamla biçim, konum veya işlev benzerliği kurulabiliyor mu?',
        yes: 'Yan anlamdır. Örnek: "Masanın ayağı kırıldı." — destek olma işlevi sürüyor.',
        no: 'Temel anlamdır. Örnek: "Çocuğun ayağı incindi."',
      },
    ],
    takeaway:
      'Sıra önemlidir. Önce terimi ayırırsan, dil bilgisi ve geometri terimlerini yanlışlıkla mecaz saymazsın.',
  },

  comparison: {
    title: 'Temel, yan ve mecaz anlamı kanıtla ayır',
    columns: ['Temel anlam', 'Yan anlam', 'Mecaz anlam'],
    rows: [
      {
        label: 'Anlam bağı',
        values: [
          'Sözcüğün ilk ve doğrudan karşılığı',
          'Temel anlamla biçim, konum veya işlev benzerliği sürüyor',
          'Temel anlamdaki bir özellik soyut bir duruma taşınmış',
        ],
      },
      {
        label: 'Örnek',
        values: ['Kapının kolunu tuttu.', 'Nehrin bu kolu yazın kuruyor.', 'Bu tavırla gözümden düştü.'],
      },
      {
        label: 'Nasıl kanıtlarım?',
        values: [
          'Sözlükteki ilk karşılık cümleye olduğu gibi uyuyor.',
          'Benzerliği tek cümleyle anlatabiliyorum: "İkisi de destekler / ikisi de dallanır."',
          'Sözü gerçek kabul edince cümle mantıksızlaşıyor ya da konu dışı kalıyor.',
        ],
      },
      {
        label: 'Sık yapılan hata',
        values: [
          'Her somut kullanımı temel anlam sanmak.',
          'Yan anlamı mecaz sanmak.',
          'Her mecazı söz sanatı sanmak.',
        ],
      },
    ],
    insight:
      'Yan anlam hâlâ gerçek anlam alanındadır. Bu yüzden "gerçek anlamının dışında kullanılmıştır" ifadesi ile "mecaz anlamda kullanılmıştır" ifadesi her zaman aynı şeyi sormaz; soru kökünü dikkatle oku.',
  },

  traps: [
    {
      title: 'Sözlükteki ilk anlamı otomatik seçmek',
      wrong: '"Ağır" gördüm, aklıma gelen ilk karşılık "kütlesi fazla" olduğu için onu işaretlerim.',
      right: 'Önce sözcüğün neyi nitelediğine bakarım. Bir kitabın dilini niteliyorsa kütle söz konusu bile değildir.',
      body: 'Sözlük bir sözcüğün bütün olası anlamlarını listeler; cümle bunlardan yalnız birini çalıştırır. Soru kökündeki "bu parçada" ifadesi, kanıtın metinde olduğunu söyler.',
    },
    {
      title: '“Somut anlatım = gerçek anlam” eşitliği',
      wrong: 'Sözcük somut bir varlığı anlatıyorsa gerçek anlamdadır, soyut bir şeyi anlatıyorsa mecazdır.',
      right: 'Temel anlamı zaten soyut olan sözcükler vardır: *umut, kaygı, düşünce, özlem*. Bunlar soyut olduğu hâlde temel anlamlarındadır.',
      body: '"İçinde büyük bir umut vardı." cümlesinde *umut* soyuttur ama mecaz değildir; sözcüğün temel anlamı budur. Ayrım somut–soyut ekseninde değil, anlamın aktarılıp aktarılmadığı ekseninde yapılır.',
    },
    {
      title: 'Terim sözcük listesi ezberi',
      wrong: '"Açı, kök, nokta, özne, perde" sözcüklerini gördüğüm anda terim anlam derim.',
      right: 'Sözcüğün ilgili uzmanlık alanındaki tanımlı kavramı karşılayıp karşılamadığını cümleden denetlerim.',
      body: '"Olaylara farklı bir açıdan bakıyor." cümlesinde *açı* bakış biçimidir, geometri terimi değildir. Terimlik sözcüğün kendisinde değil, cümlenin işlettiği alanda saklıdır.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-baglamda-sozcuk-anlami-ipuclari',
      title: 'Bağlamın verdiği dört ipucu',
      lead: 'Metin anlamı çoğu zaman söylemez ama gösterir. Bu göstergeler dört başlıkta toplanır; birini tanıdığında aramayı nereye yönelteceğini bilirsin.',
      blocks: [
        {
          id: 'lgs-sozcuk-ipucu-anlatim',
          type: 'prose',
          body: `Bağlamdan anlam çıkarırken rastgele bakmazsın. Metin sana dört tür ipucu verir ve bunların her birinin tanınabilir bir işareti vardır.

**Tanım ipucu.** Metin sözcüğün karşılığını neredeyse açıkça söyler. Genellikle *yani, başka bir deyişle, demek ki* gibi ifadelerle ya da iki virgül arasına sıkıştırılmış bir açıklamayla gelir: "Dedem bir **mücellit**, yani kitapları elde ciltleyen bir ustaydı." Burada anlam zaten verilmiştir; senin işin onu görmektir.

**Örnek ipucu.** Metin sözcüğü tanımlamaz, ama kapsamına giren örnekleri sıralar: "Çantasında hep bir **kırtasiye** vardı: kalem, silgi, cetvel, defter." Örnekler ortak bir kümeye işaret eder; sen o kümenin adını çıkarırsın.

**Karşıtlık ipucu.** Metin sözcüğün ne **olmadığını** söyler ve aradığın anlamı karşı uçtan gösterir. Bu ipucu genellikle *değil, oysa, ama, aksine* gibi ifadelerle gelir: "Cömert biri değildi; tam tersine, en küçük harcamada bile **eli sıkıydı**." Karşıtlık ipucunda dikkatli ol: aradığın anlam, karşıtın **tersi**dir, kendisi değil.

**Neden–sonuç ipucu.** Metin sözcüğün anlattığı durumun sebebini veya sonucunu verir: "Günlerdir uyumadığı için gözleri **çukura kaçmıştı**." Sebep (uykusuzluk) sana sonucun ne yönde olduğunu söyler.

Bu dört ipucunun ikisi aynı anda bulunuyorsa tahminin çok güçlüdür. Tek bir ipucu varsa tahminini yine yaparsın, ama dördüncü adımda — seçeneği metne yerleştirme adımında — daha titiz davranırsın.`,
        },
        {
          id: 'lgs-sozcuk-ipucu-tablo',
          type: 'table',
          interactive: true,
          title: 'İpucunu tanı, aramayı yönlendir',
          columns: ['İpucu türü', 'Metindeki işareti', 'Özgün örnek', 'Çıkarılan anlam'],
          rows: [
            ['Tanım', 'yani, başka bir deyişle, iki virgül arası açıklama', 'Babaannem bir **ebe**, yani doğumlarda anneye yardım eden kişiydi.', 'Doğuma yardım eden kişi'],
            ['Örnek', 'iki nokta, sıralama, gibi, örneğin', 'Rafta yalnız **süreli yayınlar** vardı: dergiler, gazeteler, yıllıklar.', 'Belirli aralıklarla çıkan yayın'],
            ['Karşıtlık', 'değil, oysa, ama, aksine, tam tersine', 'Konuşkan biri değildi; toplulukta hep **suskun** kalırdı.', 'Konuşmayan, sessiz duran'],
            ['Neden–sonuç', 'için, bu yüzden, bu nedenle, öyle ki', 'Günlerce yağmur yağmadığı için toprak **çatlamıştı**.', 'Kuruluktan yarılmak'],
            ['Birden çok ipucu', 'iki işaret birlikte', 'Cömert değildi; bir kuruşu bile zor harcadığı için ona **eli sıkı** derlerdi.', 'Cimri, harcamaktan kaçınan'],
          ],
          caption:
            'Son satıra dikkat: karşıtlık ve neden ipucu birlikte geldiğinde tahmin neredeyse kesinleşir. Tek ipucunda ise seçeneği mutlaka metne yerleştirip dene.',
        },
        {
          id: 'lgs-sozcuk-ipucu-cumle-analizi',
          type: 'sentence_analysis',
          title: 'Bir cümlede ipuçlarını parça parça görmek',
          prompt:
            'Aşağıdaki cümlede “ağır” sözcüğünün anlamını, cümlenin öteki parçalarının verdiği kanıtla bulacağız. Her parçaya tıkladığında o parçanın hangi işi yaptığını göreceksin.',
          segments: [
            {
              text: 'Yeni gelen öğrenci suskun değildi;',
              label: 'Karşıtlık ipucu',
              explanation:
                '“Değil” ifadesi bir kapıyı kapatıyor: aradığımız anlam “sessizlik, konuşmama” DEĞİL. Bu, seçeneklerden en az birini daha soruyu okumadan eler.',
              tone: 'danger',
            },
            {
              text: 'sadece konuşmadan önce her cümlesini tarttığı için',
              label: 'Neden ipucu',
              explanation:
                'Sebep açıkça veriliyor: düşünerek konuşmak. Demek ki aranan anlam olumsuz bir kusur değil, düşünceli bir davranış biçimi.',
              tone: 'aqua',
            },
            {
              text: 'ağır',
              label: 'Hedef sözcük',
              explanation:
                'Sözcük bir eylemi (konuşmayı) niteliyor. Demek ki bir kütle değil, bir konuşma biçimi aranıyor. Birinci adım burada tamamlanıyor.',
              tone: 'brand',
            },
            {
              text: 'konuşuyordu.',
              label: 'Bağlandığı eylem',
              explanation:
                'Sözcüğün bağlandığı öge bu. “Ağır kitap” deseydi kütle olabilirdi; “ağır konuşmak” yavaş ve düşünerek konuşmaktır.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Kendi karşılığın: “yavaş ve düşünerek”. Bu karşılığı yazmadan seçeneklere bakarsan, “sıkıcı” ya da “anlaşılması güç” seçenekleri kolayca inandırıcı görünür.',
        },
        {
          id: 'lgs-sozcuk-ipucu-hoca-notu',
          type: 'teacher_note',
          tone: 'warning',
          body:
            'Karşıtlık ipucunda en sık yapılan hata şu: “suskun değildi” cümlesini görüp cevabı “konuşkan” diye işaretlemek. Oysa cümle devam ediyor ve konuşmanın **biçimini** anlatıyor. İpucu aramayı yönlendirir, cevabı tek başına vermez. İpucunu bulduktan sonra da cümlenin sonuna kadar okumaya devam et.',
        },
      ],
    },

    {
      id: 'lgs-turkce-baglamda-sozcuk-anlami-soz-gruplari',
      title: 'Söz gruplarında anlam: parçaların toplamı yetmez',
      lead: 'Bazı anlamlar tek bir sözcükte değil, birkaç sözcüğün oluşturduğu bütünde saklıdır. Kazanım da “kelime ve kelime grupları” der; ikisi aynı derste ölçülür.',
      blocks: [
        {
          id: 'lgs-sozcuk-grup-anlatim',
          type: 'prose',
          body: `"Göz atmak" ifadesinde ne *göz* kendi anlamındadır ne de *atmak*. İkisi birleşince ortaya "kısaca bakmak" anlamı çıkar. Buna **söz grubu** denir ve Türkçede bu yapıların en bilinen türü **deyimlerdir.**

Söz gruplarında bağlam iki kat önemlidir. Çünkü aynı sözcük dizisi bazen gerçek anlamıyla, bazen kalıplaşmış anlamıyla kullanılabilir. "Çocuk elini yıkadı." cümlesi gerçek bir eylemi anlatır; "Bu işten elini yıkadı." cümlesi ise ilgisini kesmeyi anlatır. Aradaki farkı sözcükler değil, **cümlenin anlattığı durum** belirler.

Söz gruplarının anlamını bulurken aynı beş durağı kullanırsın; yalnız birinci adımı biraz genişletirsin: "Bu ifade neyi niteliyor?" sorusunu **grubun tamamı için** sorarsın. Parçaları tek tek çözmeye çalışmak seni yanlış yola sokar.

Programın sınırlarına dikkat: 8. sınıfta **T.8.3.5** bir söz grubunun anlamını bağlamdan **tahmin etmeyi** ister. Aynı deyimin ya da atasözünün metne ne kattığını, anlatımı nasıl güçlendirdiğini değerlendirmek ise ayrı bir kazanımdır (**T.8.3.6**) ve ayrı bir derste işlenir. Bu derste sorumuz "bu deyim ne anlama geliyor?"; diğer derste "bu deyim metne ne katıyor?" olacak.

Bir uyarı daha: bir söz grubunun anlamını ezberlemek, o grubu her metinde doğru okuyacağın anlamına gelmez. Aynı deyim farklı bir bağlamda başka bir tonla kullanılabilir; övgü için de, eleştiri için de. Anlamı bulduktan sonra cümlenin tonunu da kontrol et.`,
        },
        {
          id: 'lgs-sozcuk-grup-tablo',
          type: 'table',
          interactive: true,
          title: 'Aynı söz grubu, iki farklı bağlam',
          columns: ['Söz grubu', 'Gerçek anlamlı kullanım', 'Kalıplaşmış anlamlı kullanım', 'Ayrımı ne sağlıyor?'],
          rows: [
            ['eli yıkamak', 'Yemekten önce ellerini yıkadı.', 'Bu işten elini yıkadı.', 'İkinci cümlede yıkanan bir şey yok; anlatılan bir karar.'],
            ['kulak vermek', 'Kapıya kulağını verip dinledi.', 'Kimse onun uyarısına kulak vermedi.', 'İkinci cümlede fiziksel bir hareket yok; anlatılan ilgi göstermek.'],
            ['göz atmak', '—', 'Ödevine bir göz attı.', 'Bu grup neredeyse her zaman kalıplaşmış anlamdadır: kısaca bakmak.'],
            ['ayağı geri gitmek', '—', 'Sınav sabahı ayağı geri gidiyordu.', 'Gerçek bir yürüme yönü anlatılmıyor; anlatılan isteksizlik.'],
            ['yüz vermek', '—', 'Şakalarına hiç yüz vermedi.', 'Verilen bir yüz yok; anlatılan ilgi göstermemek.'],
          ],
          caption:
            'Tabloda “—” işareti, o grubun gerçek anlamlı kullanımının günlük dilde neredeyse hiç geçmediğini gösterir. Böyle gruplarda kalıplaşmış anlamı doğrudan ararsın.',
        },
        {
          id: 'lgs-sozcuk-grup-tuzak',
          type: 'trap',
          title: 'Deyimi parçalayarak çözmeye çalışmak',
          wrong: '"Ayağı geri gitmek" ifadesinde *ayak* ve *geri* sözcüklerinin anlamlarını birleştirip cevabı bulmaya çalışırım.',
          right: 'Grubun tamamının metinde hangi durumu anlattığına bakarım: sınav sabahı, isteksizlik.',
          body: 'Söz gruplarında anlam parçalara dağılmaz, bütünde toplanır. Parçalara bakmak yalnız zaman kaybettirmez; çoğu zaman tam ters bir anlama götürür.',
        },
      ],
    },

    {
      id: 'lgs-turkce-baglamda-sozcuk-anlami-yakin-secenekler',
      title: 'Yakın anlamlı iki seçeneği kanıtla ayırmak',
      lead: 'Soruların zorlaştığı yer burasıdır: iki seçenek de doğruya yakındır. Doğru olan, metindeki kanıtın gösterdiğidir.',
      blocks: [
        {
          id: 'lgs-sozcuk-yakin-anlatim',
          type: 'prose',
          body: `Bir soruda iki seçenek arasında kaldıysan, bu çoğu zaman iyiye işarettir: üç seçeneği zaten doğru elemişsindir. Kalan ikisi genellikle şöyle kurgulanır: **biri sözcüğün genel çağrışımına uyar, diğeri metindeki duruma uyar.** Doğru cevap ikincisidir.

Türkçede birbirine yakın duran sözcükler aynı yöne bakar ama aynı noktayı göstermez. *Tutumlu* ile *cimri* ikisi de harcamamakla ilgilidir; ama tutumlu olmak gereksiz harcamadan kaçınmak, cimri olmak gereken harcamayı bile yapmamaktır. *Suskun* ile *ketum* ikisi de konuşmamayla ilgilidir; ama suskun kişi genel olarak az konuşur, ketum kişi özellikle **sır** konusunda konuşmaz. *Üzgün* ile *pişman* ikisi de olumsuz duygudur; ama pişmanlıkta kendi yaptığın bir davranış vardır.

Bu farkları ezberlemek zorunda değilsin. Yapman gereken şu: **her seçeneğin metinde karşılığı olan bir kelimeye ya da cümleye dokunup dokunmadığını kontrol et.** Metin "sırrın başka kimseye ulaşmayacağını bilirlerdi" diyorsa, seçeneklerden biri sır konusuna dokunuyor demektir; o seçenek ötekinden daha güçlüdür.

Bir çeldirici genellikle şu üç yoldan biriyle inandırıcı görünür. **Birincisi:** sözcüğün başka bir cümlede taşıdığı doğru anlamı verir, ama bu cümlede değil. **İkincisi:** metnin genel konusuna uyar, sözcüğün anlamına değil. **Üçüncüsü:** doğru anlamı fazla genişletir ya da fazla daraltır. Üçünde de yaptığın kontrol aynıdır: bu seçeneği destekleyen bir cümle metinde var mı?

Son olarak, elediğin seçenekler için de gerekçe kurmayı alışkanlık hâline getir. "Bu olamaz" demek yetmez; "Bu olamaz, çünkü metin tam tersini söylüyor" demek gerekir. Kendi gerekçeni kuramadığın bir eleme, bir sonraki soruda seni yanıltır.`,
        },
        {
          id: 'lgs-sozcuk-yakin-cumle-analizi',
          type: 'sentence_analysis',
          title: 'Kanıt hangi seçeneğe dokunuyor?',
          prompt:
            'Aşağıdaki cümlede “ketum” sözcüğünün anlamını aramak yerine, seçeneklere giden kanıtı arayacağız. Parçalara tıklayarak her birinin hangi seçeneği desteklediğini gör.',
          segments: [
            {
              text: 'Sınıfın en ketum öğrencisiydi Deniz.',
              label: 'Hedef ve bağlanan öge',
              explanation:
                'Sözcük bir öğrenciyi niteliyor: aranan şey bir kişilik özelliği. Bu adım, “gürültülü bir ortam” gibi durum bildiren seçenekleri eler.',
              tone: 'brand',
            },
            {
              text: 'Arkadaşları ona bir sırlarını anlattığında',
              label: 'Konu kanıtı: sır',
              explanation:
                'Metin konuyu açıkça sır üzerine kuruyor. Seçeneklerden biri sır konusuna dokunuyorsa, en güçlü aday odur.',
              tone: 'aqua',
            },
            {
              text: 'o sırrın başka kimseye ulaşmayacağını bilirlerdi;',
              label: 'Sonuç kanıtı',
              explanation:
                'Davranışın sonucu veriliyor: sır aktarılmıyor. “Sessiz” seçeneği bu cümleyi açıklayamaz; “sır saklayan” açıklar.',
              tone: 'success',
            },
            {
              text: 'yıllar geçse de Deniz’in ağzından tek kelime çıkmazdı.',
              label: 'Pekiştirici kanıt',
              explanation:
                'Bu cümle tek başına okunursa “az konuşan” seçeneğini destekler gibi görünür. Ama önceki cümleyle birlikte okunduğunda konu yine sırdır. Çeldirici tam buradan doğar.',
              tone: 'danger',
            },
          ],
          takeaway:
            '“Sessiz / az konuşan” seçeneği metindeki tek bir cümleye dayanır; “sır saklayan” seçeneği metnin üç cümlesine birden dayanır. Daha çok kanıta dokunan seçenek kazanır.',
        },
        {
          id: 'lgs-sozcuk-yakin-tuzak',
          type: 'trap',
          title: 'Tek cümleye dayanıp karar vermek',
          wrong: 'Son cümlede "tek kelime çıkmazdı" yazıyor; öyleyse cevap "az konuşan" olmalı.',
          right: 'Metnin tamamına bakarım. Üç cümle sır konusunu kuruyor, bir cümle konuşma miktarından söz ediyor. Ağırlık sırdadır.',
          body: 'Çeldiriciler çoğu zaman metnin gerçekten içinde bulunan bir ayrıntıya yaslanır; yanlışlıkları bilgi hatası değil, **kapsam** hatasıdır. Bu yüzden eleme yaparken "metinde var mı?" değil, "metnin asıl anlattığı bu mu?" diye sor.',
        },
        {
          id: 'lgs-sozcuk-yakin-hafiza',
          type: 'memory',
          title: 'Üç kelimelik kontrol',
          body: 'Seçeneği işaretlemeden önce kendine şunu sor: **Hangi cümle?** Cevabı gösterebiliyorsan işaretle; gösteremiyorsan metne dön.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Aynı sözcük, dört ayrı katman',
      prompt:
        '“Nokta” sözcüğünün şu dört kullanımını incele ve her birinin anlam katmanını kanıtıyla belirle: (1) Uzakta küçük bir nokta göründü. (2) Cümlenin sonuna nokta konur. (3) Tartışma can alıcı bir noktaya geldi. (4) Bu noktada seninle aynı fikirdeyim.',
      steps: [
        {
          title: '1. cümle: “Uzakta küçük bir nokta göründü.”',
          body: 'Sözcük görülebilen, küçük bir işareti karşılıyor. Sözlükteki ilk karşılık cümleye olduğu gibi uyuyor ve hiçbir aktarma yok. **Temel anlam.**',
        },
        {
          title: '2. cümle: “Cümlenin sonuna nokta konur.”',
          body: 'Burada sözcük dil bilgisinin tanımlı bir kavramını, bir noktalama işaretini karşılıyor. Karar ağacının birinci kontrolü olumlu: belirli bir alanın kavramı. **Terim anlam.**',
        },
        {
          title: '3. cümle: “Tartışma can alıcı bir noktaya geldi.”',
          body: 'Tartışmanın gittiği bir yer yok; sözü gerçek kabul edersek cümle mantıksızlaşır. Küçük bir işaret olma özelliği, bir sürecin belirleyici aşamasına taşınmış. **Mecaz anlam.**',
        },
        {
          title: '4. cümle: “Bu noktada seninle aynı fikirdeyim.”',
          body: 'Yine somut bir işaret yok; sözcük bir konuyu, bir hususu anlatıyor. Aktarma sürüyor. **Mecaz anlam.** Üçüncü cümleyle aynı katmanda ama farklı karşılıkta: biri aşama, biri konu.',
        },
        {
          title: 'Kontrol: sıra neden önemliydi?',
          body: 'İkinci cümleye önce “gerçek mi?” diye sorsaydık kararsız kalırdık; çünkü noktalama işareti de görülebilir bir işarettir. Karar ağacında terim kontrolünü başa koymamızın sebebi tam olarak budur.',
        },
      ],
      answer:
        '(1) Temel · (2) Terim · (3) Mecaz · (4) Mecaz. Aynı biçim, dört cümlede üç farklı katmanda görev almış.',
      takeaway:
        'LGS’de ölçülen şey “nokta sözcüğünün anlamı” değil, her kullanımda bağlamın seçtiği anlamı kanıtla gösterebilmendir.',
    },
    {
      title: 'Seviye 2 — Hiç bilmediğin bir sözcüğü bağlamdan çıkar',
      prompt:
        'Aşağıdaki özgün kısa metinde geçen “ketum” sözcüğünün anlamını, beş durağı sırayla uygulayarak bul: “Sınıfın en ketum öğrencisiydi Deniz. Arkadaşları ona bir sırlarını anlattığında o sırrın başka kimseye ulaşmayacağını bilirlerdi; yıllar geçse de Deniz’in ağzından tek kelime çıkmazdı.”',
      steps: [
        {
          title: '1. durak — Bağlandığı öge',
          body: 'Sözcük “öğrenci”yi niteliyor. Demek ki aranan şey bir nesne özelliği değil, bir **kişilik özelliği**. Bu adım, durum bildiren bütün karşılıkları eler.',
        },
        {
          title: '2. durak — İpuçlarını topla',
          body: 'İki ipucu var. **Sonuç ipucu:** “o sırrın başka kimseye ulaşmayacağını bilirlerdi.” **Pekiştirici ipucu:** “ağzından tek kelime çıkmazdı.” Her ikisi de konuşmamayla ilgili; ama birincisi konuyu sır üzerine kuruyor.',
        },
        {
          title: '3. durak — Kendi karşılığını yaz',
          body: 'Seçeneklere bakmadan yaz: “sır saklayan, sır vermeyen”. Bu adımı atlayıp doğrudan seçeneklere bakarsan, “az konuşan” seçeneği sana doğruymuş gibi görünür.',
        },
        {
          title: '4. durak — Yakın seçenekleri karşılaştır',
          body: '“Az konuşan” karşılığı yalnız son cümleyi açıklar. “Sır saklayan” karşılığı hem sır cümlesini hem son cümleyi açıklar. Daha çok kanıta dokunan karşılık daha güçlüdür.',
        },
        {
          title: '5. durak — Kanıt cümlesini göster',
          body: 'Kanıt cümlesi şudur: “Arkadaşları ona bir sırlarını anlattığında o sırrın başka kimseye ulaşmayacağını bilirlerdi.” Bu cümleyi gösterebildiğin an cevabın sağlamdır.',
        },
      ],
      answer: '“Ketum” = sır saklayan, kendisine söylenen şeyi başkasına aktarmayan.',
      takeaway:
        'Sözcüğü hiç bilmiyor olman bir sorun değil. Kanıtı gösteremiyor olman sorundur.',
    },
    {
      title: 'Seviye 3 — Söz grubunda gerçek mi, kalıplaşmış anlam mı?',
      prompt:
        '“Eli yıkamak” ifadesi aşağıdaki iki cümlede aynı anlamda mı kullanılmıştır? (1) Yemeğe oturmadan önce elini yıkadı. (2) Uzun tartışmalardan sonra bu işten elini yıkadı.',
      steps: [
        {
          title: 'Birinci cümleyi denetle',
          body: 'Ortada gerçekten yıkanan bir el var; eylem fiziksel olarak gerçekleşiyor. Sözü gerçek kabul ettiğinde cümle mantıklı kalıyor. **Gerçek anlamlı kullanım.**',
        },
        {
          title: 'İkinci cümleyi denetle',
          body: '“Bu işten” ifadesi ortada bir el değil bir karar olduğunu gösteriyor. Sözü gerçek kabul edersen cümle anlamsızlaşır: bir işten el yıkanmaz. **Kalıplaşmış (deyim) anlam.**',
        },
        {
          title: 'Ayrımı yapan kanıtı adlandır',
          body: 'Farkı yaratan, sözcükler değil sözcüklerin bağlandığı öge. Birinde eylemin nesnesi “el”, ötekinde bağlam “bu iş”. Birinci durakta yaptığın kontrol burada sonucu doğrudan veriyor.',
        },
        {
          title: 'Tonu da kontrol et',
          body: 'İkinci cümlede yalnız “ilgisini kesti” anlamı yok; “uzun tartışmalardan sonra” ifadesi bir yorgunluk ve vazgeçiş tonu da katıyor. Anlamı bulduktan sonra tonu kontrol etmek, ileride anlatım sorularında işine yarayacak.',
        },
      ],
      answer:
        'Hayır. Birinci cümlede gerçek anlamıyla, ikinci cümlede “ilgisini kesmek, vazgeçmek” anlamındaki kalıplaşmış kullanımıyla geçmiştir.',
      takeaway:
        'Aynı söz dizisi iki farklı anlamda kullanılabilir; ayrımı yapan bağlamdır, ifadenin kendisi değil.',
    },
  ],

  questionClue: {
    concept: 'bağlamdan anlam sorusu',
    statement:
      'Soru kökünde “bu parçada”, “bu cümlede”, “altı çizili sözcüğün bu kullanımdaki anlamı” gibi bir sınırlama varsa, kanıtın metnin içinde olduğu söyleniyor demektir.',
    clues: [
      'Bir sözcüğün altı çizilmiş ya da koyu yazılmış olması',
      '“Bu parçada / bu cümlede” gibi metne sınırlayan ifadeler',
      'Seçeneklerin tamamının sözcüğün gerçekten var olan anlamları olması',
      'İki seçeneğin birbirine çok yakın durması',
      'Metnin içinde tanım, örnek, karşıtlık veya neden ipucu bulunması',
    ],
    reasoning:
      'Bu ipuçları birlikte şunu söyler: soru senden sözcüğün sözlük bilgisini değil, metnin o sözcüğe yüklediği görevi istiyor. Bu yüzden çözüm yolu ezber değil, kanıt toplamaktır. Seçeneklerin hepsi “doğru anlam” olabilir; yalnız biri “bu metindeki anlam”dır.',
    boundary:
      'Bu ipuçlarını bir formüle çevirme. “Altı çizili sözcük varsa cevap mecazdır” gibi bir kısayol yoktur; altı çizili sözcük temel anlamda da olabilir. İpuçları yalnız aramanı yönlendirir.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body:
      'Aşağıdaki biçimler, 8. sınıf kazanımının ölçülebileceği soru kalıplarıdır. Bir kalıbı tanımak cevabı vermez; hangi kanıtı arayacağını söyler.',
    patterns: [
      'Kısa bir parçada altı çizili sözcüğün bu kullanımdaki anlamının sorulması',
      'Bilmediğin bir sözcüğün anlamının, aynı parçadaki tanım veya örnek ipucundan çıkarılması',
      'Bir söz grubunun (deyimin) parçadaki anlamının sorulması',
      'Aynı sözcüğün iki ayrı cümledeki kullanımının aynı anlamda olup olmadığının sorulması',
      'Bir sözcüğün temel, yan, mecaz veya terim anlamlarından hangisiyle kullanıldığının sorulması',
      'Verilen bir açıklamaya uygun kullanımın seçeneklerden bulunması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Şu cümlede iki sözcüğün anlam katmanını belirle: “Bu romanın dili ağır olduğu için ilk elli sayfayı zor bitirdim.” — *dil* ve *ağır* hangi katmandadır?',
      hint: 'Önce her sözcüğün neyi nitelediğini bul. Sonra “sözü gerçek kabul edersem cümle mantıklı kalıyor mu?” diye sor.',
      answer:
        '*Dil* burada organ değil, yazarın anlatım biçimidir; gerçek kabul edilirse cümle mantıksızlaşır → **mecaz anlam**. *Ağır* da kütle değil, anlaşılması güç olmayı anlatır → **mecaz anlam**. Kanıt cümlesi: “ilk elli sayfayı zor bitirdim.” Zorlanma, kütleyle değil anlaşılırlıkla ilgilidir.',
    },
    {
      prompt:
        'Hangisinde terim anlam vardır? (1) “Öğretmen tahtaya bir doğru çizdi.” (2) “Söylediği her söz doğru çıktı.”',
      hint: 'Karar ağacının birinci kontrolünü uygula: sözcük belirli bir alanın tanımlı kavramını mı karşılıyor?',
      answer:
        'Birincisinde. *Doğru* orada geometrinin tanımlı bir kavramıdır → **terim anlam**. İkincisinde ise “gerçeğe uygun” anlamındadır; bir alanın kavramı değildir, sözcüğün genel anlamıdır.',
    },
    {
      prompt:
        '“Cömert biri değildi; küçük bir harcama için bile günlerce düşünürdü.” Bu cümlede altı çizili olsaydı, hangi anlamı taşıyan bir sözcük beklerdin: *eli açık* mı, *eli sıkı* mı? Gerekçeni yaz.',
      hint: 'Karşıtlık ipucunda aradığın anlam, karşıtın kendisi değil tersidir.',
      answer:
        '*Eli sıkı*. Çünkü “cömert değildi” ifadesi cömertliğin tersini gösteriyor ve ikinci cümle bunu pekiştiriyor: küçük harcamada bile tereddüt. “Eli açık” cömert anlamına gelir; metin bunu açıkça reddediyor.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey kelime bilgisi değil, kanıt kullanma becerisi',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak öğrencinin “okuduğunu anlama, yorumlama, sonuç çıkarma, analiz yapma, eleştirel düşünme” becerilerini ölçecek nitelikte hazırlandığını söyler. Bu konuda bunun somut karşılığı şudur: sorular senin kaç kelime bildiğini değil, bilmediğin bir kelimenin karşısında ne yaptığını ölçer. Bilmediğin bir kelimeyi gördüğünde metne dönebiliyor, ipucunu bulabiliyor ve seçimini bir cümleye dayandırabiliyorsan, o kelimeyi hiç duymamış olman sorun değildir.',
    measures: [
      'Bilinmeyen bir sözcüğün anlamını metindeki ipuçlarından çıkarabilme',
      'Sözlük anlamı ile cümlede etkinleşen anlamı ayırabilme',
      'Birbirine yakın iki seçeneği metindeki kanıta göre ayırabilme',
      'Bir söz grubunun anlamını bütünden çıkarabilme',
      'Seçtiği cevabı metinden bir cümleyle gerekçelendirebilme',
      'Elediği seçenekler için de gerekçe kurabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Dedemin atölyesinde her şey yavaştı. Yırtılmış bir kitabın sayfalarını birleştirirken saatlerce aynı masada otururdu. Ben sabırsızlanıp “Bugün bitsin.” dediğimde başını kaldırır, “Acele eden usta, kitabın ömrünü kısaltır.” derdi. Yıllar sonra kendi masamda aynı işi yaparken anladım: onun **ağır** çalışması, işi sevmemesinden değil, attığı her dikişin yıllarca dayanmasını istemesindendi.`,
    question: 'Bu parçada altı çizili “ağır” sözcüğü hangi anlamda kullanılmıştır?',
    options: [
      {
        text: 'Tartıldığında kütlesi fazla olan',
        explanation:
          'Sözcüğün temel anlamı budur ve seçenek bu yüzden inandırıcı görünür. Ancak “ağır” burada bir nesneyi değil bir **çalışma biçimini** niteliyor. Metinde tartılan ya da taşınan hiçbir şey yok. Birinci durakta elenir.',
      },
      {
        text: 'Acele etmeyen, yavaş ilerleyen',
        explanation:
          'Doğru cevap. Kanıt üç yerde: “her şey yavaştı”, “saatlerce aynı masada otururdu” ve “acele eden usta…” sözü. Üç cümle de aynı anlamı destekliyor.',
      },
      {
        text: 'Anlaşılması güç, karmaşık olan',
        explanation:
          '“Ağır” sözcüğünün gerçekten taşıdığı bir anlamdır — ama başka cümlelerde. Bu parçada anlaşılırlıkla ilgili tek bir cümle bile yok. Çeldiricinin birinci türü: doğru anlam, yanlış cümle.',
      },
      {
        text: 'Etkisi büyük, kırıcı olan',
        explanation:
          '“Ağır söz”, “ağır eleştiri” kullanımlarındaki anlamdır. Parçada kimse kimseyi kırmıyor; tam tersine dedeye karşı saygılı bir anlatım var. Metnin tonuyla çelişir.',
      },
      {
        text: 'Önemli ve ciddi olan',
        explanation:
          'Metnin genel havasına uyuyor: usta, emek, kalıcılık. Ama bu, sözcüğün anlamına değil **metnin konusuna** uyan bir seçenek. Çeldiricinin ikinci türü: konuya uyar, sözcüğe uymaz.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökündeki “bu parçada” ifadesi kanıtın nerede olduğunu söylüyor: metnin içinde. Sözcük altı çizili olduğu için birinci durağı hemen uygulayabilirsin — “ağır” burada “çalışma” sözcüğünü niteliyor, yani bir kütle değil bir çalışma biçimi aranıyor.',
    critical_point:
      'Kritik nokta, beş seçeneğin de “ağır” sözcüğünün gerçek anlamlarından biri olması. Hiçbiri uydurma değil. Bu yüzden “hangisi ağırın anlamı?” diye sorarsan hepsi geçer. Doğru soru şudur: “hangisini bu metinden bir cümle destekliyor?”',
    takeaway:
      'Bir seçeneği elerken “bu olamaz” demek yetmez. “Bu olamaz, çünkü metinde bunu destekleyen tek bir cümle yok” diyebildiğinde eleme güvenilir olur.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question:
        '“Kardeşim hiç konuşkan değildi; ama bir konu ilgisini çektiğinde dakikalarca **hararetli** anlatırdı.” Bu cümlede “hararetli” sözcüğünün anlamı aşağıdakilerden hangisidir?',
      options: [
        'Sıcaklığı yüksek olan',
        'Coşkulu ve istekli',
        'Öfkeli ve gergin',
        'Uzun ve ayrıntılı',
      ],
      answer_index: 1,
      explanation:
        'Karşıtlık ipucu (“konuşkan değildi; ama…”) bir değişime işaret ediyor ve “ilgisini çektiğinde” ifadesi bu değişimin olumlu olduğunu söylüyor. “Sıcaklığı yüksek” temel anlamdır, burada anlatılan bir konuşma biçimidir. “Öfkeli” metnin tonuyla çelişir. “Uzun ve ayrıntılı” ise “dakikalarca” sözcüğünün karşılığıdır; “hararetli” sözcüğünün değil — aynı cümlede iki ayrı bilgiyi karıştırmak sık yapılan bir hatadır.',
    },
    {
      purpose: 'concept',
      question:
        'Aşağıdaki cümlelerin hangisinde altı çizili sözcük **terim anlamıyla** kullanılmıştır?',
      options: [
        'Halının **kenarı** yıllar içinde yıpranmıştı.',
        'Bu konuda onunla aynı **görüşte** değiliz.',
        'Üçgenin iç açılarının toplamı 180 derecedir; her **açı** ayrı ölçülür.',
        'Olaya farklı bir **açıdan** bakmayı denedi.',
      ],
      answer_index: 2,
      explanation:
        'Üçüncü cümlede *açı* geometrinin tanımlı bir kavramını karşılıyor: terim anlam. Dördüncü cümlede aynı sözcük “bakış biçimi” anlamındadır ve terim değildir — bu, terim sözcük listesi ezberinin neden çalışmadığını gösterir. Birinci cümledeki *kenar* yan anlamda, ikinci cümledeki *görüş* ise genel anlamındadır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Sınav sabahı ayağı geri gidiyordu.” cümlesindeki söz grubunu “yürürken geriye doğru gitmek” diye açıklıyor. Bu öğrencinin yaptığı hata aşağıdakilerden hangisidir?',
      options: [
        'Söz grubunu parçalarına ayırıp anlamı parçaların toplamından çıkarmaya çalışmak',
        'Cümlenin öznesini yanlış belirlemek',
        'Sözcüğün terim anlamını gözden kaçırmak',
        'Karşıtlık ipucunu fark edememek',
      ],
      answer_index: 0,
      explanation:
        'Söz gruplarında anlam parçalara dağılmaz, bütünde toplanır. “Ayağı geri gitmek” isteksizlik anlatır. Öğrenci *ayak* ve *geri* sözcüklerini ayrı ayrı çözüp birleştirdiği için tam ters bir sonuca ulaşmıştır. Cümlede terim anlam da karşıtlık ipucu da yoktur.',
    },
  ],

  summary: [
    'Bir sözcüğün anlamını sözlük değil, bağlam belirler: çevresindeki sözcükler, cümlenin amacı ve anlatılan durum.',
    'Beş durak sırayla uygulanır: bağlandığı ögeyi bul → ipuçlarını topla → kendi karşılığını yaz → seçeneği metne yerleştir → kanıt cümlesini göster.',
    'Metin dört tür ipucu verir: tanım, örnek, karşıtlık, neden–sonuç. İki ipucu birbirini destekliyorsa tahmin sağlamlaşır.',
    'Anlam katmanı üç kontrolle belirlenir: önce terim mi, sonra gerçek kabul edilince mantıklı kalıyor mu, en son temel anlamla benzerlik var mı.',
    'Yan anlam hâlâ gerçek anlam alanındadır; her aktarmalı kullanım mecaz değildir.',
    '“Somut = gerçek anlam” eşitliği yanlıştır: *umut, kaygı, düşünce* soyuttur ama temel anlamlarındadır.',
    'Söz gruplarında anlam parçaların toplamı değildir; aynı dizi hem gerçek hem kalıplaşmış anlamda kullanılabilir.',
    'İki seçenek arasında kaldığında, metindeki daha çok kanıta dokunan seçeneği seç.',
    'Çeldiriciler üç yolla inandırıcı görünür: doğru anlam–yanlış cümle, metnin konusuna uyma, anlamı fazla genişletme veya daraltma.',
    'Cevabını işaretlemeden önce kendine sor: hangi cümle?',
  ],

  next: [
    'Deyim, Atasözü ve Özdeyiş: Metne Ne Katar? (T.8.3.6)',
    'Cümlede Anlam İlişkileri: Neden, Amaç, Koşul, Karşılaştırma (T.8.3.25)',
    'Söz Sanatları: Benzetme, Kişileştirme, Konuşturma, Karşıtlık, Abartma (T.8.3.7)',
  ],
})

export default lesson
