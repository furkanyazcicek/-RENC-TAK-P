import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Söz Sanatları
 * Kazanım : T.8.3.7
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * PROGRAM SINIRI — BAĞLAYICI
 * T.8.3.7'nin açıklaması beş sanatı AÇIKÇA sayar ve sınırlar:
 * benzetme (teşbih), kişileştirme (teşhis), konuşturma (intak),
 * karşıtlık (tezat), abartma (mübalağa). Bu ders yalnız bu beşi işler;
 * program dışı sanatlar (kinaye, tevriye, telmih vb.) LGS kazanımı
 * gibi sunulmaz. Bu sınır derste öğrenciye açıkça söylenir.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-soz-sanatlari',
  topic: 'Söz Sanatları',
  order: 1,
  title: 'Söz Sanatları: Beş Sanat, Beş Ölçüt',
  subtitle:
    'Program beş sanatla sınırlar: benzetme, kişileştirme, konuşturma, karşıtlık, abartma. Her birinin tek ve kesin bir ölçütü var.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.7', metin: 'Metindeki söz sanatlarını tespit eder.' },
  ],
  prerequisites: [
    { topic: 'Mecaz anlam', why: 'Söz sanatlarının tamamı gerçek anlamın dışına çıkan kullanımlara dayanır.' },
    { topic: 'Cümlede anlam ilişkileri', why: 'Benzetme, karşılaştırma ve abartma ayrımını orada kurduk; burada derinleştireceğiz.' },
  ],
  outcomes: [
    'Programın saydığı beş söz sanatını kesin ölçütlerle tanıyabileceksin.',
    'Benzetmenin ögelerini bir cümlede gösterebileceksin.',
    'Kişileştirme ile konuşturmayı ayırabileceksin.',
    'Karşıtlık ile abartmanın imzalarını ayırt edebileceksin.',
    'Bir cümlede birden çok sanat bulunabileceğini fark edebileceksin.',
  ],

  opening: {
    title: 'Beş sanat, beş soru',
    lead: 'Söz sanatları sonsuz değildir — en azından 8. sınıf programında değil. Program beş tanesini açıkça sayar.',
    body: `Söz sanatları konusu öğrencileri korkutur, çünkü internette ve bazı kaynaklarda onlarca sanat adı dolaşır: kinaye, tevriye, telmih, tenasüp, hüsn-i talil… Oysa MEB 8. sınıf Türkçe programındaki **T.8.3.7** kazanımının açıklaması son derece nettir ve **beş** sanatı sayar:

**benzetme (teşbih), kişileştirme (teşhis), konuşturma (intak), karşıtlık (tezat), abartma (mübalağa).**

Bu beşi tanıdığında 8. sınıf düzeyinde ölçülen her şeyi tanımış olursun. Diğer sanatlar lise programlarının konusudur ve bu derste zorunlu kazanım gibi sunulmaz.

Beşinin ortak yanı şu: hepsi sözü **gerçek anlamının dışına** taşır. Bir kitap gerçekten konuşmaz, bir ses gerçekten kadife olmaz, kimsenin gözyaşı gerçekten deniz oluşturmaz. Bu yüzden söz sanatlarını aramaya başlarken ilk yapacağın şey hep aynıdır: **sözü gerçek kabul et ve mantıksızlığı gör.**

Mantıksızlığı gördükten sonra beş ölçütü sırayla uygularsın. Cansız bir varlık konuşuyor mu? İnsana ait bir özellik mi verilmiş? İki karşıt kavram bir arada mı? Bir özellik gerçek dışı ölçüde mi büyütülmüş? Bir varlık, başka bir varlığın özelliğiyle mi anlatılıyor?

Bir uyarı: bir cümlede birden çok sanat bulunabilir. “Ağaçlar rüzgârda ‘üşüyoruz’ diye fısıldıyordu.” cümlesinde hem kişileştirme (ağaçların üşümesi, fısıldaması) hem konuşturma (ağaçların konuşması) vardır. Soru “hangi sanat vardır?” diyorsa hepsini ara; “hangisi yoktur?” diyorsa beşini tek tek tara.`,
  },

  concepts: [
    {
      term: 'Benzetme (teşbih)',
      body: 'Bir varlığın, bir özelliği bakımından kendinden daha güçlü bir başkasına benzetilmesidir: “Sesi kadife gibiydi.” Dört ögesi vardır: **benzeyen** (ses), **kendisine benzetilen** (kadife), **benzetme yönü** (yumuşaklık), **benzetme edatı** (gibi).',
    },
    {
      term: 'Güçlü benzetme (teşbih-i beliğ)',
      body: 'Yalnız benzeyen ile kendisine benzetilenin bulunduğu, yön ve edatın söylenmediği benzetmedir: “Ordunun aslanları.” Edat yoksa benzetme yok sanmak, bu konudaki en yaygın hatadır.',
    },
    {
      term: 'Kişileştirme (teşhis)',
      body: 'İnsan dışındaki bir varlığa insana özgü bir nitelik ya da davranış verilmesidir: “Rüzgâr kapıyı öfkeyle çarptı.” Öfke insana özgüdür; rüzgâra verilmiştir.',
    },
    {
      term: 'Konuşturma (intak)',
      body: 'İnsan dışındaki bir varlığın **konuşturulmasıdır**: “Ağaç, ‘Yorgunum.’ dedi.” Konuşturma her zaman kişileştirmeyi de içerir; ama her kişileştirmede konuşturma yoktur.',
    },
    {
      term: 'Karşıtlık (tezat)',
      body: 'Birbirine karşıt iki kavram, durum veya niteliğin bir arada kullanılmasıdır: “Gülerken içim ağlıyordu.” Karşıtlığın anlamlı olması için iki kavramın **aynı eksende** karşıt olması gerekir.',
    },
    {
      term: 'Abartma (mübalağa)',
      body: 'Bir özelliğin gerçekte olabileceğinden çok daha büyük ya da küçük gösterilmesidir: “Sesi dağları inletti.” Ölçüt, söylenenin gerçek dünyada mümkün olmamasıdır.',
    },
  ],

  why: {
    question: 'Neden “gibi” aramak bu konuda yetmez?',
    body: `Çünkü benzetme her zaman bir edatla gelmez. “Ordunun aslanları” dediğinde ortada ne “gibi” ne “sanki” vardır; ama açık bir benzetme yapılmıştır: askerler aslana benzetilmiştir. Buna **güçlü benzetme** denir ve sorularda özellikle kullanılır, çünkü edat arayan öğrenciyi eler.

Aynı sorun tersinden de vardır: “gibi” geçtiği hâlde benzetme olmayan cümleler. “Dediğin gibi yaptım.” cümlesinde “gibi” bir uygunluk bildirir. “Yağmur yağacak gibi.” cümlesinde bir tahmin bildirir. İkisinde de benzetme yoktur.

Aynı ezber tuzağı kişileştirme ile konuşturmada da işler. Öğrencilerin çoğu “insan özelliği verilmişse kişileştirme, tırnak varsa konuşturma” diye öğrenir. İkincisi kabaca doğrudur ama eksiktir: konuşturma için tırnak şart değildir. “Deniz bana gitme diye seslendi.” cümlesinde tırnak yoktur, konuşturma vardır.

Üçüncü ezber tuzağı abartmadadır: sayılar. “Bin kere söyledim.” bir abartmadır; ama “Bin öğrenci katıldı.” bir bilgidir. Ayrımı yapan şey sayının büyüklüğü değil, söylenenin gerçekte mümkün olup olmadığıdır.

Bu yüzden bu derste sana vereceğim şey bir sözcük listesi değil, **beş ölçüt** olacak. Her sanatın tek bir ayırt edici sorusu var ve o soruyu sorduğunda cevap kesinleşiyor:

Konuşuyor mu? İnsan özelliği verilmiş mi? İki karşıt bir arada mı? Gerçekte mümkün mü? Bir varlık başkasının özelliğiyle mi anlatılıyor?`,
  },

  decision: {
    title: 'Söz sanatını bulma yolu',
    lead: 'Önce mantıksızlığı gör, sonra beş ölçütü sırayla uygula.',
    intro:
      'Bir cümlede söz sanatı ararken şu beş durağı uygula. Sıra önemlidir: en dar ölçüt başta, en genişi sonda.',
    steps: [
      {
        title: '1. Sözü gerçek kabul et',
        body: 'Cümleyi olduğu gibi doğru varsay ve bir mantıksızlık ara. “Rüzgâr kapıyı öfkeyle çarptı” — rüzgâr öfkelenemez. Mantıksızlık yoksa söz sanatı da büyük ihtimalle yoktur.',
      },
      {
        title: '2. Konuşma var mı?',
        body: 'İnsan dışı bir varlık bir şey söylüyor mu? Söylüyorsa **konuşturma** vardır ve yanında mutlaka kişileştirme de bulunur. Tırnak işareti şart değildir.',
      },
      {
        title: '3. İnsan özelliği verilmiş mi?',
        body: 'İnsan dışı bir varlığa insana özgü bir duygu, düşünce ya da davranış yüklenmiş mi? Yüklendiyse **kişileştirme** vardır.',
      },
      {
        title: '4. İki karşıt bir arada mı?',
        body: 'Aynı eksende karşıt iki kavram bir arada kullanılmış mı? Kullanıldıysa **karşıtlık** vardır. Karşıtlığın anlamlı olması için iki kavramın gerçekten zıt olması gerekir.',
      },
      {
        title: '5. Gerçek dışı ölçü mü, benzetme mi?',
        body: 'Bir özellik gerçekte mümkün olmayacak ölçüde büyütülmüşse **abartma**; bir varlık başka bir varlığın özelliğiyle anlatılıyorsa **benzetme** vardır. İkisi aynı cümlede birlikte bulunabilir.',
      },
    ],
    takeaway: 'Söz sanatını edat değil, cümlenin yaptığı iş belirler.',
  },

  decisionTree: {
    title: 'Beş sanatı ayıran üç kontrol',
    intro:
      'En sık karıştırılan üçlü için sıralı kontrol. Kalan ikisi (karşıtlık ve abartma) kendi imzalarıyla ayrılır.',
    checks: [
      {
        question: 'İnsan dışı bir varlık konuşuyor mu?',
        yes: 'Konuşturma vardır (ve mutlaka kişileştirme de). Örnek: “Deniz bana gitme diye seslendi.”',
        no: 'Konuşma yok; ikinci kontrole geç.',
      },
      {
        question: 'İnsan dışı bir varlığa insana özgü bir nitelik veya davranış verilmiş mi?',
        yes: 'Kişileştirme vardır. Örnek: “Rüzgâr kapıyı öfkeyle çarptı.”',
        no: 'Kişileştirme yok; üçüncü kontrole geç.',
      },
      {
        question: 'Bir varlık, başka bir varlığın özelliğiyle mi anlatılıyor?',
        yes: 'Benzetme vardır. Edat bulunmayabilir: “Ordunun aslanları.”',
        no: 'Bu üçünden biri değil; karşıtlık veya abartma olabilir.',
      },
    ],
    takeaway:
      'Konuşturma kontrolünü başa koymamızın sebebi, konuşturmanın kişileştirmeyi zaten içermesidir: en dar ölçüt en başa konur.',
  },

  comparison: {
    title: 'En çok karıştırılan üçlü',
    columns: ['Kişileştirme', 'Konuşturma', 'Benzetme'],
    rows: [
      { label: 'Ölçüt', values: ['İnsan özelliği verilir', 'İnsan dışı varlık konuşturulur', 'Bir varlık başkasının özelliğiyle anlatılır'] },
      { label: 'Konuşma', values: ['Yok', 'Var', 'Gerekmez'] },
      { label: 'Örnek', values: ['Yapraklar rüzgârda titriyordu.', 'Yaprak, “Üşüdüm.” dedi.', 'Yapraklar altın gibi parlıyordu.'] },
      { label: 'Birlikte bulunma', values: ['Tek başına olabilir', 'Kişileştirmeyi zorunlu olarak içerir', 'Kişileştirmeyle birlikte olabilir'] },
      { label: 'Sık yapılan hata', values: ['Her hareketi kişileştirme sanmak', 'Tırnak yoksa yok sanmak', '“Gibi” yoksa yok sanmak'] },
    ],
    insight:
      'Konuşturma, kişileştirmenin özel bir hâlidir. Konuşturma varsa kişileştirme de vardır; ama kişileştirme varsa konuşturma olmak zorunda değildir.',
  },

  traps: [
    {
      title: '“Gibi” yoksa benzetme yoktur sanmak',
      wrong: '“Ordunun aslanları geri döndü.” cümlesinde “gibi” yok; benzetme de yok.',
      right: 'Bu bir **güçlü benzetmedir**: askerler aslana benzetilmiş, yön ve edat söylenmemiştir. Benzetme için edat şart değildir.',
      body: 'Sorular özellikle edatsız benzetmeler kullanır; çünkü edat arayan öğrenciyi ayırmanın en kolay yolu budur.',
    },
    {
      title: 'Her kişileştirmede konuşturma aramak',
      wrong: '“Ağaçlar rüzgârda titriyordu.” — kişileştirme var; öyleyse konuşturma da vardır.',
      right: 'Konuşturma için varlığın **konuşması** gerekir. Titremek bir davranıştır, konuşma değildir. Burada yalnız kişileştirme vardır.',
      body: 'Ters yön doğrudur: konuşturma varsa kişileştirme de vardır. Ama bu ilişki tek yönlüdür.',
    },
    {
      title: 'Programda olmayan sanatları aramak',
      wrong: 'Bu cümlede kinaye var; onu işaretlerim.',
      right: 'Program 8. sınıf için beş sanat sayar: benzetme, kişileştirme, konuşturma, karşıtlık, abartma. Seçeneklerde başka bir ad varsa, bu ders düzeyinde aranan cevap değildir.',
      body: 'Program dışı sanat adları öğrencinin kafasını karıştırmak için değil, farklı düzeylerdeki kaynaklardan sızarak gelir. Kazanımın sınırını bilmek zaman kazandırır.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-soz-benzetme',
      title: 'Benzetme: dört öge ve güçlü benzetme',
      lead: 'Benzetmeyi tanımak için ögelerini görmek gerekir; çünkü sorular çoğu zaman eksik ögeli benzetmeler kullanır.',
      blocks: [
        {
          id: 'lgs-soz-benzetme-anlatim',
          type: 'prose',
          body: `Bir benzetmede dört öge bulunabilir.

**Benzeyen:** özelliği anlatılan, daha zayıf olan taraf. “Sesi kadife gibi yumuşaktı.” cümlesinde *ses*.
**Kendisine benzetilen:** özelliği ödünç verilen, daha güçlü olan taraf. Burada *kadife*.
**Benzetme yönü:** hangi özellik bakımından benzetildiği. Burada *yumuşaklık*.
**Benzetme edatı:** benzetmeyi kuran sözcük. Burada *gibi*. Diğerleri: *sanki, kadar, andırmak, gibi, tıpkı*.

Bu dört öge her zaman bulunmaz. Yön ve edat düşerse geriye yalnız iki taraf kalır ve buna **güçlü benzetme (teşbih-i beliğ)** denir: “Ordunun aslanları”, “Hayat denizi”, “Aslan parçası”. Türkçede bu yapı çoğu zaman bir tamlama biçiminde görünür.

Benzetmeyi tanımanın en güvenilir yolu edat aramak değil, şu soruyu sormaktır: **Bir varlık, başka bir varlığın özelliğiyle mi anlatılıyor?** Cevap evetse benzetme vardır; edat bulunsun ya da bulunmasın.

Ters yönde de dikkatli ol. “Gibi” sözcüğü Türkçede dört ayrı iş yapar: benzetme (“kadife gibi”), uygunluk (“dediğin gibi”), yaklaşıklık (“beş kilo gibi”) ve tahmin (“yağacak gibi”). Yalnız birincisi söz sanatıdır.

Son olarak, benzetme ile **karşılaştırmayı** ayırmayı hatırla — bu ayrımı Cümlede Anlam dersinde kurmuştuk. Karşılaştırmada iki taraf aynı eksende ölçülür ve biri üstün çıkar: “Bu kumaş ötekinden daha yumuşak.” Benzetmede ölçme yoktur; biri ötekini anlatmak için kullanılır: “Bu kumaş kadife gibi yumuşak.”`,
        },
        {
          id: 'lgs-soz-benzetme-tablo',
          type: 'table',
          interactive: true,
          title: 'Benzetmenin ögelerini bul',
          columns: ['Cümle', 'Benzeyen', 'Kendisine benzetilen', 'Yön / edat'],
          rows: [
            ['Sesi kadife gibi yumuşaktı.', 'ses', 'kadife', 'yumuşaklık / gibi'],
            ['Çocuk, bir kelebek gibi koşuyordu.', 'çocuk', 'kelebek', 'hafiflik / gibi'],
            ['Ordunun aslanları geri döndü.', 'askerler', 'aslan', 'yok / yok → güçlü benzetme'],
            ['Hayat denizinde yol alıyoruz.', 'hayat', 'deniz', 'yok / yok → güçlü benzetme'],
            ['Dediğin gibi yaptım.', '—', '—', 'Benzetme yok: uygunluk bildiriyor'],
            ['Yağmur yağacak gibi.', '—', '—', 'Benzetme yok: tahmin bildiriyor'],
          ],
          caption:
            'Son iki satır “gibi” tuzağını gösterir. Edat bulunması benzetmeyi kanıtlamaz; iki tarafın bulunması kanıtlar.',
        },
        {
          id: 'lgs-soz-benzetme-analiz',
          type: 'sentence_analysis',
          title: 'Bir cümlede ögeleri ayırmak',
          prompt:
            'Aşağıdaki cümlenin parçalarına tıklayarak benzetmenin ögelerini tek tek gör.',
          segments: [
            {
              text: 'Kütüphanenin sessizliği',
              label: 'Benzeyen',
              explanation:
                'Anlatılmak istenen, özelliği açıklanacak olan taraf. Soyut bir kavram: sessizlik.',
              tone: 'brand',
            },
            {
              text: 'derin bir kuyu',
              label: 'Kendisine benzetilen',
              explanation:
                'Özelliği ödünç verilen taraf. Kuyunun derinliği, sessizliği anlatmak için kullanılıyor.',
              tone: 'aqua',
            },
            {
              text: 'gibi',
              label: 'Benzetme edatı',
              explanation:
                'Benzetmeyi kuran sözcük. Bu cümlede var; ama olmasaydı da benzetme var olurdu (“Kütüphanenin sessizlik kuyusu”).',
              tone: 'muted',
            },
            {
              text: 'insanı içine çekiyordu.',
              label: 'Benzetme yönü',
              explanation:
                'Hangi özellik bakımından benzetildiğini söylüyor: içine çekme, derinlik. Dört öge de tamam.',
              tone: 'success',
            },
          ],
          takeaway:
            'Dört öge birlikte bulunduğunda benzetme açıktır. Yön ve edat düştüğünde de benzetme sürer; yalnız adı “güçlü benzetme” olur.',
        },
        {
          id: 'lgs-soz-benzetme-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Sorularda “aşağıdaki cümlelerin hangisinde benzetme yoktur?” biçimi sık kullanılır ve çeldiriciler genellikle “gibi” içeren ama benzetme kurmayan cümlelerdir. Edata değil, iki tarafın varlığına bak.',
        },
      ],
    },

    {
      id: 'lgs-turkce-soz-kisilestirme-konusturma',
      title: 'Kişileştirme ve konuşturma: tek yönlü bir ilişki',
      lead: 'Konuşturma her zaman kişileştirmeyi içerir; kişileştirme konuşturmayı içermez. Bu tek yönlülük soruların merkezindedir.',
      blocks: [
        {
          id: 'lgs-soz-kisilestirme-anlatim',
          type: 'prose',
          body: `**Kişileştirme**, insan dışındaki bir varlığa insana özgü bir nitelik ya da davranış vermektir. Önemli olan, verilen özelliğin **yalnız insana ait** olmasıdır.

“Yapraklar rüzgârda titriyordu.” cümlesinde kişileştirme var mıdır? Titremek yalnız insana özgü bir eylem değildir; yapraklar gerçekten titrer. Burada kişileştirme yoktur.

“Yapraklar rüzgârda korkuyla titriyordu.” cümlesinde ise korku insana özgü bir duygudur. Kişileştirme vardır.

Bu ayrım önemlidir: **her hareket kişileştirme değildir.** Ölçüt, verilen özelliğin insana özgü olup olmadığıdır. Rüzgârın esmesi doğaldır; rüzgârın “öfkelenmesi” insana özgüdür.

**Konuşturma**, insan dışı varlığın konuşmasıdır. “Ağaç, ‘Yorgunum.’ dedi.” Burada hem konuşturma hem kişileştirme vardır: konuşmak insana özgüdür ve varlık bir şey söylemiştir.

Tırnak işareti konuşturmanın şartı değildir. “Deniz bana gitme diye seslendi.” cümlesinde tırnak yoktur ama deniz seslenmektedir; konuşturma vardır. Aynı biçimde “Rüzgâr pencereden bana bir şeyler fısıldadı.” cümlesinde de konuşturma vardır.

Peki fısıldamak konuşma sayılır mı? Bir şey söyleniyorsa evet. “Rüzgâr fısıldıyordu.” cümlesinde bir söz aktarılmıyor, yalnız bir ses benzetmesi var; burada kişileştirme vardır, konuşturma yoktur. “Rüzgâr ‘geç kalma’ diye fısıldadı.” cümlesinde ise bir söz aktarılıyor; konuşturma vardır.

Ölçütü tek cümleye indir: **bir söz aktarılıyor mu?** Aktarılıyorsa konuşturma, aktarılmıyorsa yalnız kişileştirme.`,
        },
        {
          id: 'lgs-soz-kisilestirme-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'İki sanatı ölçütle ayır',
          columns: ['Yalnız kişileştirme', 'Kişileştirme + konuşturma'],
          rows: [
            { label: 'Ölçüt', values: ['İnsana özgü nitelik verilmiş', 'İnsana özgü nitelik + söz aktarımı'] },
            { label: 'Örnek', values: ['Rüzgâr kapıyı öfkeyle çarptı.', 'Rüzgâr, “Kapıyı kapat.” dedi.'] },
            { label: 'Tırnak', values: ['Yok', 'Olabilir ama şart değil'] },
            { label: 'Test', values: ['Bu özellik yalnız insana mı ait?', 'Bir söz aktarılıyor mu?'] },
            { label: 'Sık yapılan hata', values: ['Her hareketi kişileştirme sanmak', 'Tırnak yoksa yok sanmak'] },
          ],
          insight:
            'Konuşturma bulunan her cümlede kişileştirme de vardır. Soru “yalnız kişileştirme vardır” diyorsa, söz aktarımı olmadığını kontrol et.',
        },
        {
          id: 'lgs-soz-kisilestirme-tuzak',
          type: 'trap',
          title: 'Doğal hareketi kişileştirme sanmak',
          wrong: '“Dalgalar kıyıya vuruyordu.” — dalgalar bir şey yapıyor; kişileştirme var.',
          right: 'Dalgaların kıyıya vurması doğal bir olaydır ve insana özgü değildir. Kişileştirme için verilen özelliğin yalnız insana ait olması gerekir.',
          body: '“Dalgalar kıyıya öfkeyle saldırıyordu.” deseydi kişileştirme olurdu; çünkü öfke ve saldırma niyeti insana özgüdür.',
        },
      ],
    },

    {
      id: 'lgs-turkce-soz-karsitlik-abartma',
      title: 'Karşıtlık ve abartma',
      lead: 'İki sanat da ölçüyle ilgilidir: biri iki uç arasında, öteki tek bir ucun ötesinde çalışır.',
      blocks: [
        {
          id: 'lgs-soz-karsitlik-anlatim',
          type: 'prose',
          body: `**Karşıtlık (tezat)**, birbirine karşıt iki kavramın bir arada kullanılmasıdır: “Gülerken içim ağlıyordu.”, “En kalabalık yerde en yalnız insandım.”

Karşıtlığın geçerli olması için iki kavramın **aynı eksende** karşıt olması gerekir. *Gülmek–ağlamak* aynı eksende (duygu dışavurumu) karşıttır. *Gülmek–oturmak* karşıt değildir; yalnız farklıdır.

Karşıtlık ile **karşılaştırmayı** karıştırma. Karşılaştırmada iki taraf ölçülür ve biri üstün çıkar: “Bu oda ötekinden daha aydınlık.” Karşıtlıkta ise iki uç bir arada tutulur ve genellikle bir çelişki, bir ironi ya da bir iç gerilim anlatılır.

**Abartma (mübalağa)**, bir özelliğin gerçekte olabileceğinden çok büyük ya da küçük gösterilmesidir: “Sesi dağları inletti.”, “Gözyaşlarıyla denizi doldurdu.”, “Bir saniyede eve vardım.”

Abartmanın ölçütü **gerçekte mümkün olmamasıdır.** Bu yüzden abartmayı test etmek kolaydır: söyleneni harfiyen doğru kabul et; fiziksel olarak mümkün mü? Değilse ve yazar bunu bilerek yapıyorsa abartma vardır.

Sayılar burada özel bir dikkat ister. “Bin kere söyledim.” bir abartmadır; kimse bin kez söylemez. “Bin öğrenci katıldı.” bir bilgidir; bin öğrencinin katılması mümkündür. Sayının büyüklüğü değil, **gerçekleşebilirliği** belirleyicidir.

Son olarak, abartma ile benzetme aynı cümlede birlikte bulunabilir: “Sesi, dağları yerinden oynatan bir gürleme gibiydi.” Burada hem benzetme (ses–gürleme) hem abartma (dağları yerinden oynatmak) vardır. Soru “hangisi vardır?” diyorsa ikisini de işaretle.

Programın saydığı beş sanatın dışına çıkmadığımızı bir kez daha hatırlatalım: kinaye, tevriye, telmih gibi adlar bu düzeyde aranmaz.`,
        },
        {
          id: 'lgs-soz-karsitlik-tablo',
          type: 'table',
          interactive: true,
          title: 'Karşıtlık ve abartmayı testle ayır',
          columns: ['Cümle', 'Gerçekte mümkün mü?', 'İki karşıt var mı?', 'Sanat'],
          rows: [
            ['Gülerken içim ağlıyordu.', 'Mecazi olarak evet', 'Var (gülmek–ağlamak)', 'Karşıtlık'],
            ['Sesi dağları inletti.', 'Hayır', 'Yok', 'Abartma'],
            ['En kalabalık yerde en yalnız insandım.', 'Evet', 'Var (kalabalık–yalnız)', 'Karşıtlık'],
            ['Bir saniyede eve vardım.', 'Hayır', 'Yok', 'Abartma'],
            ['Bin öğrenci katıldı.', 'Evet', 'Yok', 'Sanat yok — bilgi'],
            ['Bu küçük odaya kocaman bir dünya sığdırmıştı.', 'Hayır', 'Var (küçük–kocaman)', 'Karşıtlık + abartma'],
          ],
          caption:
            'Son satır iki sanatın bir arada bulunabileceğini gösterir. Beşinci satır ise her sayının abartma olmadığını.',
        },
        {
          id: 'lgs-soz-karsitlik-tuzak',
          type: 'trap',
          title: 'Farklı olanı karşıt sanmak',
          wrong: '“Kardeşim resim yapıyor, ben kitap okuyorum.” — iki farklı şey var; karşıtlık sanatı vardır.',
          right: 'Karşıtlık için iki kavramın aynı eksende zıt olması gerekir. Resim yapmak ile kitap okumak farklıdır ama zıt değildir.',
          body: 'Farklılık ile zıtlık ayrı şeylerdir. Zıtlık ölçütü: iki kavram aynı ölçünün iki ucunda mı duruyor?',
        },
        {
          id: 'lgs-soz-karsitlik-hafiza',
          type: 'memory',
          title: 'Beş soruluk tarama',
          body: '**Konuşuyor mu?** → konuşturma. **İnsan özelliği mi?** → kişileştirme. **İki zıt bir arada mı?** → karşıtlık. **Mümkün mü?** → değilse abartma. **Başkasının özelliğiyle mi anlatılıyor?** → benzetme.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Beş sanatı tek tek tara',
      prompt:
        'Cümle: “Akşam olunca sokak lambaları uykulu gözlerini açtı ve ‘Hoş geldin.’ der gibi titreşti.” Bu cümlede hangi söz sanatları vardır?',
      steps: [
        { title: 'Mantıksızlığı gör', body: 'Lambaların gözü olmaz, uykusu gelmez, konuşmaz. Birden çok sanat adayı var.' },
        { title: 'Konuşma var mı?', body: '“Hoş geldin.” der gibi — bir söz aktarılıyor. → **Konuşturma var**.' },
        { title: 'İnsan özelliği var mı?', body: 'Uykulu gözler ve gözlerini açmak insana özgü. → **Kişileştirme var** (konuşturma zaten bunu içeriyor).' },
        { title: 'Karşıtlık var mı?', body: 'Aynı eksende zıt iki kavram yok. → Yok.' },
        { title: 'Abartma ve benzetme var mı?', body: 'Gerçek dışı bir ölçü büyütmesi yok → abartma yok. Bir varlık başkasının özelliğiyle anlatılmıyor → benzetme yok. (“Der gibi” bir konuşturma aktarımıdır, benzetme kurmaz.)' },
      ],
      answer: 'Kişileştirme ve konuşturma vardır; karşıtlık, abartma ve benzetme yoktur.',
      takeaway:
        'Beşini tek tek taramak, “hangisi yoktur?” sorularında da aynı süreyi alır ve kesin sonuç verir.',
    },
    {
      title: 'Seviye 2 — Edatsız benzetmeyi yakala',
      prompt:
        'Şu cümlelerde benzetme var mı? (1) “Sınıfın aslanı yine birinci oldu.” (2) “Bu iş dediğin gibi olmadı.” (3) “Yolun sonunda bir umut kapısı vardı.”',
      steps: [
        { title: '(1) iki taraf var mı?', body: 'Bir öğrenci aslana benzetiliyor: benzeyen (öğrenci) ve kendisine benzetilen (aslan). Edat ve yön yok. → **Güçlü benzetme**.' },
        { title: '(2) “gibi” ne iş yapıyor?', body: 'Bir uygunluk bildiriyor: söylenene uygun olmadı. İki taraf yok, özellik ödünç alınmıyor. → **Benzetme yok**.' },
        { title: '(3) iki taraf var mı?', body: 'Umut, kapıya benzetiliyor: soyut bir kavram somut bir nesnenin özelliğiyle anlatılıyor. Edat yok. → **Güçlü benzetme**.' },
        { title: 'Ortak dersi çıkar', body: 'İki benzetmede de edat yoktu; benzetme olmayan cümlede ise edat vardı. Edat, benzetmenin kanıtı değildir.' },
        { title: 'Sınavda nasıl görünür?', body: '“Hangisinde benzetme yoktur?” sorusunda üç seçeneğe edatsız benzetme, bir seçeneğe edatlı ama benzetmesiz cümle konulur. Edat arayan öğrenci ters cevabı verir.' },
      ],
      answer: '(1) ve (3)’te güçlü benzetme var; (2)’de benzetme yok.',
      takeaway: 'Benzetmenin kanıtı iki tarafın varlığıdır, edatın varlığı değil.',
    },
    {
      title: 'Seviye 3 — Abartma mı, bilgi mi, karşıtlık mı?',
      prompt:
        'Şu cümleleri sınıflandır: (1) “Bu çantayı taşımaktan kolum kopacaktı.” (2) “Salonda üç yüz kişi vardı.” (3) “O kadar hızlı konuşuyordu ki sessizliği duyar gibi oldum.”',
      steps: [
        { title: '(1) mümkün mü?', body: 'Bir çanta taşımaktan kol kopmaz. Gerçek dışı bir ölçü büyütmesi var. → **Abartma**.' },
        { title: '(2) mümkün mü?', body: 'Üç yüz kişilik bir salon mümkündür. Büyük bir sayı olması abartma yapmaz. → **Sanat yok**.' },
        { title: '(3) önce mümkünlüğü sına', body: 'Hızlı konuşmanın sessizlik duyurması mümkün değil. → **Abartma var**.' },
        { title: '(3) karşıtlık var mı?', body: '“Hızlı konuşmak” ile “sessizlik” aynı eksende (ses varlığı) zıt duruyor. → **Karşıtlık da var**.' },
        { title: 'Çoklu sanatı not et', body: 'Üçüncü cümlede iki sanat birden var. Soru “hangisi vardır?” diyorsa ikisini de ara; “yalnız hangisi vardır?” diyorsa seçeneklere dikkat et.' },
      ],
      answer: '(1) abartma · (2) sanat yok · (3) abartma + karşıtlık',
      takeaway: 'Sayının büyüklüğü değil, söylenenin gerçekleşebilirliği abartmayı belirler.',
    },
  ],

  questionClue: {
    concept: 'söz sanatı sorusu',
    statement:
      'Soru kökünde “söz sanatı”, “hangi sanata başvurulmuştur”, “hangisinde … sanatı yoktur” ifadelerinden biri varsa, aranan şey programın saydığı beş sanattan biridir.',
    clues: [
      'Seçeneklerde “benzetme, kişileştirme, konuşturma, karşıtlık, abartma” terimleri',
      'Cümlede insan dışı bir varlığa insana özgü bir davranış verilmesi',
      'Tırnak içinde ya da “diye” ile aktarılan bir söz',
      'Gerçekte mümkün olmayan bir ölçü',
      'Aynı cümlede zıt iki kavramın bir arada bulunması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, beş sanatı ölçütle ayırıp ayıramadığını sınıyor. Çözüm yolu sözü gerçek kabul edip mantıksızlığı görmek, sonra beş ölçütü sırayla uygulamaktır.',
    boundary:
      'Bu ipuçlarını “gibi varsa benzetme, tırnak varsa konuşturma” gibi bir kısayola çevirme. Edatsız benzetme ve tırnaksız konuşturma sorularda özellikle kullanılır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir dizede ya da cümlede hangi söz sanatının bulunduğunun sorulması',
      'Dört cümleden hangisinde belirli bir sanatın bulunmadığının sorulması',
      'Aynı sanatın kullanıldığı iki cümlenin eşleştirilmesi',
      'Bir parçada birden çok sanatın birlikte bulunmasının sorulması',
      'Verilen bir tanıma uyan örneğin seçtirilmesi',
      'Kişileştirme ile konuşturmanın ayırt ettirilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Kuşlar sabahtan beri dallarda cıvıldıyordu.” Bu cümlede kişileştirme var mıdır?',
      hint: 'Verilen özellik yalnız insana mı ait?',
      answer:
        'Yoktur. Cıvıldamak kuşların doğal davranışıdır; insana özgü bir nitelik değildir. Kişileştirme için insana özgü bir duygu, düşünce ya da davranışın insan dışı bir varlığa verilmesi gerekir. “Kuşlar sabahtan beri sevinçle şarkı söylüyordu.” deseydi kişileştirme olurdu.',
    },
    {
      prompt:
        '“Rüzgâr bana ‘acele et’ diye fısıldadı.” Bu cümlede hangi sanatlar vardır?',
      hint: 'Bir söz aktarılıyor mu?',
      answer:
        'Hem konuşturma hem kişileştirme vardır. Rüzgâr insan dışı bir varlıktır ve bir söz aktarıyor (“acele et”); bu konuşturmadır. Konuşmak insana özgü olduğu için aynı zamanda kişileştirme de bulunur. Tırnak işaretinin varlığı belirleyici değildir; belirleyici olan bir sözün aktarılmasıdır.',
    },
    {
      prompt:
        '“Bu sınavda iki yüz soru çözdüm.” cümlesinde abartma var mıdır? “Bu sınavda bin yıl geçti sandım.” cümlesinde?',
      hint: 'Söylenen gerçekte mümkün mü?',
      answer:
        'Birincide abartma yoktur: iki yüz soru çözmek mümkündür, büyük bir sayı olması abartma yapmaz. İkincide abartma vardır: bir sınavda bin yıl geçmesi mümkün değildir ve yazar bunu bilerek söylüyor. Ölçüt sayının büyüklüğü değil, söylenenin gerçekleşebilirliğidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey sanat adı ezberi değil, ölçüt uygulaması',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: beş sanatın adını bilmek yetmez; her biri için bir ölçüt uygulayabilmen gerekir. Çeldiriciler de bu yüzden edatsız benzetmelerden, doğal hareketlerden ve gerçekleşebilir sayılardan üretilir.',
    measures: [
      'Sözü gerçek kabul edip mantıksızlığı görebilme',
      'Benzetmeyi edattan bağımsız olarak tanıyabilme',
      'Kişileştirme için insana özgülük ölçütünü uygulayabilme',
      'Konuşturma için söz aktarımı ölçütünü uygulayabilme',
      'Karşıtlıkta aynı eksende zıtlık arayabilme',
      'Abartmada gerçekleşebilirlik testini uygulayabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Kasabanın eski saat kulesi yıllardır susuyordu. Yağmurlu bir akşam, kulenin çanı birden çaldı ve sanki bütün kasabaya “Hâlâ buradayım.” dedi. **O gece kimse uyumadı; en derin sessizlikte en gürültülü sevinç yaşandı.**`,
    question: 'Bu parçada altı çizili cümlede hangi söz sanatı vardır?',
    options: [
      {
        text: 'Konuşturma',
        explanation:
          'Konuşturma parçada var ama altı çizili cümlede değil: “Hâlâ buradayım.” sözü bir önceki cümlede geçiyor. Soru kökünün sınırladığı yere sadık kal.',
      },
      {
        text: 'Karşıtlık',
        explanation:
          'Doğru cevap. “En derin sessizlik” ile “en gürültülü sevinç” aynı eksende (ses varlığı) zıt iki kavram ve bir arada kullanılmış. Karşıtlığın ölçütü tam olarak budur.',
      },
      {
        text: 'Benzetme',
        explanation:
          'Altı çizili cümlede bir varlık başka bir varlığın özelliğiyle anlatılmıyor; benzeyen–kendisine benzetilen ikilisi yok. Bir önceki cümledeki “sanki” sözcüğü benzetme değil, konuşturmayı yumuşatan bir ifadedir.',
      },
      {
        text: 'Kişileştirme',
        explanation:
          'Parçanın başında kişileştirme var (“kule yıllardır susuyordu”), ama altı çizili cümlede insan dışı bir varlığa insana özgü bir nitelik verilmiyor; cümlede zaten insanlardan söz ediliyor.',
      },
      {
        text: 'Abartma',
        explanation:
          'Cümlede gerçekte mümkün olmayan bir ölçü yok: bir kasabada kimsenin uyumaması ve sevinç yaşanması mümkündür. “En” sözcükleri bir üstünlük bildiriyor, gerçek dışı bir büyütme değil.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü altı çizili cümleyi işaret ediyor; parçanın tamamında birkaç sanat bulunsa da yalnız o cümledeki sanat sorulacak. İlk iş cümleyi yalıtıp beş ölçütü sırayla uygulamak.',
    critical_point:
      'Kritik nokta, parçanın öteki cümlelerinde gerçekten konuşturma ve kişileştirme bulunması. Bu iki sanat en tanıdık olanlar olduğu için seçeneklerde güçlü çeldirici oluşturuyor. Sanat aramayı soru kökünün gösterdiği cümleyle sınırla.',
    takeaway:
      'Bir parçada birden çok sanat bulunabilir; soru hangi cümleyi işaret ediyorsa taramayı orada yap.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdaki cümlelerin hangisinde **benzetme** vardır?',
      options: [
        'Söylediğin gibi bir plan yaptık.',
        'Sınıfın kütüphane faresi yine ilk sırada oturuyordu.',
        'Yağmur yağacak gibi görünüyor.',
        'Yaklaşık beş kilo gibi bir ağırlıktı.',
      ],
      answer_index: 1,
      explanation:
        'İkinci cümlede bir öğrenci fareye benzetiliyor: benzeyen (öğrenci) ve kendisine benzetilen (fare) var, edat yok. Bu bir güçlü benzetmedir. Diğer üç cümlede “gibi” geçiyor ama benzetme kurmuyor: birincide uygunluk, üçüncüde tahmin, dördüncüde yaklaşıklık bildiriyor.',
    },
    {
      purpose: 'apply',
      question: 'Aşağıdaki cümlelerin hangisinde **kişileştirme yoktur**?',
      options: [
        'Ağaçlar rüzgârda üşüyordu.',
        'Deniz bütün gece kıyıya vurdu.',
        'Güneş bulutların arkasına saklandı.',
        'Ay, pencereden içeri merakla baktı.',
      ],
      answer_index: 1,
      explanation:
        'Denizin kıyıya vurması doğal bir olaydır; insana özgü bir nitelik taşımaz. Diğerlerinde insana özgü özellikler var: üşümek (duygu/duyum), saklanmak (niyetli davranış), merakla bakmak (duygu). Kişileştirmenin ölçütü hareket değil, verilen özelliğin insana özgü olmasıdır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Odada bin kitap vardı.” cümlesi için “abartma yapılmış” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Sayının büyüklüğünü gerçekleşebilirlik testinin yerine koymak',
        'Benzetmeyi fark edememek',
        'Karşıtlığı gözden kaçırmak',
        'Kişileştirmeyi konuşturma sanmak',
      ],
      answer_index: 0,
      explanation:
        'Bir odada bin kitap bulunması mümkündür; bu bir bilgidir, abartma değildir. Abartma için söylenenin gerçekte mümkün olmaması gerekir: “Bin kere söyledim.” abartmadır çünkü kimse bin kez söylemez. Cümlede benzetme, karşıtlık ya da kişileştirme bulunmuyor.',
    },
  ],

  summary: [
    'Program 8. sınıf için beş söz sanatı sayar: benzetme, kişileştirme, konuşturma, karşıtlık, abartma.',
    'Bu beşin dışındaki sanat adları (kinaye, tevriye, telmih…) bu düzeyde aranmaz.',
    'Her söz sanatı aramasına aynı adımla başla: sözü gerçek kabul et, mantıksızlığı gör.',
    'Benzetmenin kanıtı iki tarafın varlığıdır; “gibi” edatı şart değildir.',
    'Edatsız benzetmeye güçlü benzetme (teşbih-i beliğ) denir ve sorularda sık kullanılır.',
    '“Gibi” Türkçede benzetme, uygunluk, yaklaşıklık ve tahmin bildirebilir; yalnız birincisi sanattır.',
    'Kişileştirmenin ölçütü, verilen özelliğin yalnız insana ait olmasıdır; her hareket kişileştirme değildir.',
    'Konuşturma için bir söz aktarılmalıdır; tırnak işareti şart değildir.',
    'Konuşturma varsa kişileştirme de vardır; ters yönde bu zorunlu değildir.',
    'Karşıtlık için iki kavramın aynı eksende zıt olması gerekir; abartma için söylenenin gerçekte mümkün olmaması.',
  ],

  next: [
    'Fiilimsiler: Cümledeki İşlevi (T.8.3.9)',
    'Metin Türleri: Fıkra, Makale, Deneme, Roman, Destan (T.8.3.26)',
    'Deyim, Atasözü ve Özdeyiş: Metne Ne Katar? (T.8.3.6)',
  ],
})

export default lesson
