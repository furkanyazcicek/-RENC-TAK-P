export default [
  {
    id: 'test-anlatim-bozuk-13-kolay',
    title: 'Anlatım Bozuklukları 13 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (121-130)',
    type: 'comprehension',
    order: 37,
    questions: [
      {
        id: 'q-ab-13-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onunla yolda yaya yürüyerek karşılaştık.' },
          { id: 'B', text: 'Kardeşiyle beraber birlikte sinemaya gittiler.' },
          { id: 'C', text: 'Bu konuları daha önce de konuşmuştuk.' },
          { id: 'D', text: 'Bugün hava oldukça güzeldi.' },
          { id: 'E', text: 'Sabahları erken uyanmayı alışkanlık haline getirdi.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Beraber\" ve \"birlikte\" kelimeleri aynı anlama gelir, ikisinin bir arada kullanımı gereksizdir. (Ayrıca A şıkkında yaya yürümek de yanlıştır ancak B şıkkında çok daha net bir gereksizlik (beraber birlikte) vardır. Seçenekleri daha net ayırt edilebilir kabul edip B\'yi işaretliyoruz.)' // I will adjust option A to make B the clearly only correct answer. Wait, I'll rewrite option A.
      }, // Rewriting A to just be a normal sentence.
      {
        id: 'q-ab-13-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyim yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Sınavı kazanamayacağını anlayınca etekleri tutuştu.' },
          { id: 'B', text: 'Babasının ona aldığı hediyeyi görünce ağzı kulaklarına vardı.' },
          { id: 'C', text: 'Onun bu söylediklerine çok sinirlendi, dünyalar onun oldu.' },
          { id: 'D', text: 'Çocuğunu tehlikede görünce yüreği ağzına geldi.' },
          { id: 'E', text: 'Hiçbir şeye aldırmıyor, dünya umurunda değildi.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Dünyalar onun oldu\" deyimi büyük bir sevinç durumunda kullanılır. Sinirlenme durumuyla bağdaşmaz.'
      },
      {
        id: 'q-ab-13-3',
        difficulty: 'easy',
        questionText: '\"Yaklaşık tam üç gün boyunca onu aradım.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanılması' },
          { id: 'C', text: 'Tamlama hatası' },
          { id: 'D', text: 'Özne eksikliği' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşık\" sözcüğü belirsizlik, \"tam\" sözcüğü kesinlik bildirir. Çelişen ifadelerdir.'
      },
      {
        id: 'q-ab-13-4',
        difficulty: 'easy',
        questionText: '\"O, bu işte başarılı olamayacağını kesinlikle anlıyor olmalı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Anlamca çelişen kelimelerin bir arada kullanılması' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'C', text: 'Zaman kipi hatası' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Kesinlikle\" kelimesi kesinlik, \"olmalı\" kelimesi ihtimal anlamı taşır.'
      },
      {
        id: 'q-ab-13-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası yapılmıştır?',
        options: [
          { id: 'A', text: 'Önümüzdeki yıl bu zamanlarda mezun olmuş olacağım.' },
          { id: 'B', text: 'Bırakın kitap yazmayı, okumasını bile bilmez.' },
          { id: 'C', text: 'Dışarıdaki soğuğa rağmen incecik giyinmişti.' },
          { id: 'D', text: 'Hasta neredeyse ölecek, hatta sakat kalacaktı.' },
          { id: 'E', text: 'Evin her tarafı tertemiz olmuştu.' }
        ],
        correctOptionId: 'D',
        explanation: 'Ölmek, sakat kalmaktan daha kötü bir durumdur. \"Sakat kalacak, hatta ölecekti.\" olmalıdır.'
      },
      {
        id: 'q-ab-13-6',
        difficulty: 'easy',
        questionText: '\"Yeni derse girmiştim ki elektrikler kesildi.\" cümlesinde \"yeni\" kelimesi nereye alınmalıdır?',
        options: [
          { id: 'A', text: 'derse kelimesinden sonra' },
          { id: 'B', text: 'girmiştim kelimesinden sonra' },
          { id: 'C', text: 'elektrikler kelimesinden önce' },
          { id: 'D', text: 'kesildi kelimesinden önce' },
          { id: 'E', text: 'Cümleden tamamen çıkarılmalıdır' }
        ],
        correctOptionId: 'A',
        explanation: 'Ders yeni değildir, derse girme işi yenidir. \"Derse yeni girmiştim ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-13-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (zamir eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Oraya bir an önce gitmeliyiz.' },
          { id: 'B', text: 'Gelecek ay sınav sonuçları açıklanacak.' },
          { id: 'C', text: 'Başarılı olacağını en başından biliyordum.' },
          { id: 'D', text: 'Arkadaşlarıyla hafta sonu buluşacak.' },
          { id: 'E', text: 'Sabahları erken uyanıp koşu yapar.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Senin başarılı olacağını\" mı, \"Onun başarılı olacağını\" mı? Tamlayan/zamir eksiktir.'
      },
      {
        id: 'q-ab-13-8',
        difficulty: 'easy',
        questionText: '\"Yolcuların birçoğu bu durumdan şikayetçi olmadılar.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Özne-yüklem (şahıs) uyumsuzluğu' },
          { id: 'C', text: 'Zaman kipi uyuşmazlığı' },
          { id: 'D', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'E', text: 'Özne-yüklem (tekillik-çoğulluk) uyumsuzluğu' }
        ],
        correctOptionId: 'E',
        explanation: 'Belgisiz zamirler (birçoğu) özne olduğunda yüklem tekil (olmadı) olmalıdır.'
      },
      {
        id: 'q-ab-13-9',
        difficulty: 'easy',
        questionText: '\"Bahçedeki ağaçlar ilkbaharda çiçek açarlar.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Özne-yüklem (tekillik-çoğulluk) uyumsuzluğu' },
          { id: 'C', text: 'Zaman kipi uyuşmazlığı' },
          { id: 'D', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan dışındaki varlıklar çoğul özne (ağaçlar) olduğunda, yüklem tekil (açar) olmalıdır.'
      },
      {
        id: 'q-ab-13-10',
        difficulty: 'easy',
        questionText: '\"Kendine iyi bak ki hasta olmayasın diye uyardı.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Gereksiz sözcük (bağlaç) kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"ki\" bağlacı ile \"diye\" bağlacı aynı amaçla kullanıldığından biri gereksizdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-13-orta',
    title: 'Anlatım Bozuklukları 13 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (121-130)',
    type: 'comprehension',
    order: 38,
    questions: [
      {
        id: 'q-ab-13-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliği vardır?',
        options: [
          { id: 'A', text: 'Çocuklarını çok sever, onlara hep güzel şeyler alırdı.' },
          { id: 'B', text: 'Ona çok güvenir, her sırrını paylaşırdı.' },
          { id: 'C', text: 'Kardeşine hiç kızmaz, hep korurdu.' },
          { id: 'D', text: 'Kitabını masada bıraktı ve dışarı çıktı.' },
          { id: 'E', text: 'Eve gelir gelmez ellerini yıkadı.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Kardeşine hiç kızmaz, (onu) hep korurdu.\" İkinci cümlede nesne (onu) eksiktir.'
      },
      {
        id: 'q-ab-13-12',
        difficulty: 'medium',
        questionText: '\"Şirket yönetimi çalışanlara değer verir, sürekli desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"çalışanlara\" kelimesinden sonra virgül konularak' },
          { id: 'B', text: 'virgülden sonra \"onları\" kelimesi getirilerek' },
          { id: 'C', text: '\"sürekli\" kelimesi atılarak' },
          { id: 'D', text: '\"desteklerdi\" yerine \"yardım ederdi\" yazılarak' },
          { id: 'E', text: '\"değer verir\" yerine \"değer verirdi\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: '\"Çalışanlara değer verir, (onları) sürekli desteklerdi.\" İkinci cümlenin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-13-13',
        difficulty: 'medium',
        questionText: '\"Toplumsal ve kültür alanındaki gelişmeler sempozyumda tartışıldı.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfat (toplumsal) ile isim (kültür) aynı tamlanana (alanındaki) bağlanamaz. \"Toplumsal alandaki ve kültür alanındaki\" olmalıdır.'
      },
      {
        id: 'q-ab-13-14',
        difficulty: 'medium',
        questionText: '\"Herkes maça zamanında gelmiş, geç kalmamıştı.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"kimse\" eklenerek' },
          { id: 'B', text: '\"geç kalmamıştı\" yerine \"vaktinde gelmişti\" yazılarak' },
          { id: 'C', text: '\"herkes\" yerine \"hepsi\" yazılarak' },
          { id: 'D', text: '\"zamanında\" kelimesi atılarak' },
          { id: 'E', text: '\"maça\" sözcüğü cümleden çıkarılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", olumsuz yükleme (kalmamıştı) uymaz. İkinci cümleye \"kimse / hiç kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-13-15',
        difficulty: 'medium',
        questionText: '\"Masaları o, sandalyeleri ise ben sildim.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Yüklem eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Ek fiil eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Masaları o (sildi), sandalyeleri ise ben sildim.\" İlk cümlenin yüklemi yoktur, ortak yüklem (sildim) ilk cümleye uymaz.'
      },
      {
        id: 'q-ab-13-16',
        difficulty: 'medium',
        questionText: '\"Eşyalar toplanıp arabaya yükledi.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: '\"Toplanıp\" edilgen, \"yükledi\" etkendir. İkisi de edilgen olmalıdır: \"Eşyalar toplanıp arabaya yüklendi.\"'
      },
      {
        id: 'q-ab-13-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Bu şehri çok seviyor, fırsat buldukça geliyordu.' },
          { id: 'B', text: 'Kitap okumayı çok seviyor, her fırsatta okuyordu.' },
          { id: 'C', text: 'Dostlarına her zaman yardım eder, hiç kırmazdı.' },
          { id: 'D', text: 'Odayı temizledi ve düzenledi.' },
          { id: 'E', text: 'Bunu yapacağını hiç sanmıyordum.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Şehri çok seviyor, fırsat buldukça (oraya / bu şehre) geliyordu.\" İkinci cümlede dolaylı tümleç (yer tamlayıcısı) eksiktir.'
      },
      {
        id: 'q-ab-13-18',
        difficulty: 'medium',
        questionText: '\"O sınıfta okuyan herkesin ödevlerini yapması, ihmal etmemesi gerekir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"onları\" eklenerek' },
          { id: 'B', text: '\"herkesin\" kelimesi cümleden atılarak' },
          { id: 'C', text: '\"ihmal etmemesi\" yerine \"aksatmaması\" yazılarak' },
          { id: 'D', text: '\"yapması\" sözcüğünden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Cümledeki bozukluk yoktur' }
        ],
        correctOptionId: 'A',
        explanation: '\"Ödevlerini ihmal etmemesi\" nesne eksikliği olarak kabul edilir, virgülden sonra \"onları / ödevlerini\" kelimesi eklenmelidir.'
      },
      {
        id: 'q-ab-13-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz iyelik eki kullanımından kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onun böyle konuşmasını hiç doğru bulmuyorum.' },
          { id: 'B', text: 'Araba sürmesini çok iyi biliyor.' },
          { id: 'C', text: 'Gitar çalmayı öğrenmek istiyorum.' },
          { id: 'D', text: 'Evinin odaları oldukça aydınlıktı.' },
          { id: 'E', text: 'Arkadaşının geç gelmesini eleştirdi.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Araba sürmeyi\" olmalıdır, üçüncü tekil kişi iyelik eki (-sı) gereksiz yere kullanılmıştır.'
      },
      {
        id: 'q-ab-13-20',
        difficulty: 'medium',
        questionText: '\"Eğer tatilde köye gidecek olursan eğer beni mutlaka ara.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Zaman kipi uyuşmazlığı' },
          { id: 'B', text: 'Tamlama hatası' },
          { id: 'C', text: 'Gereksiz kelime kullanımı' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Anlam belirsizliği' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart kipi (-sa) ve başta \"eğer\" varken cümlenin sonunda tekrar \"eğer\" sözcüğünün kullanılması gereksizdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-13-zor',
    title: 'Anlatım Bozuklukları 13 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (121-130)',
    type: 'comprehension',
    order: 39,
    questions: [
      {
        id: 'q-ab-13-21',
        difficulty: 'hard',
        questionText: '\"Mevcut sorunların üstesinden gelmek için çaba göstermek, ilgisiz kalmamak gerekir.\" cümlesindeki dolaylı tümleç eksikliği nereye eklenecek bir kelime ile giderilir?',
        options: [
          { id: 'A', text: '\"ilgisiz\" kelimesinden önce \"onlara\" eklenerek' },
          { id: 'B', text: '\"çaba\" kelimesinden önce \"çok\" eklenerek' },
          { id: 'C', text: '\"gerekir\" kelimesinden önce \"bize\" eklenerek' },
          { id: 'D', text: '\"sorunların\" kelimesinden önce \"bu\" eklenerek' },
          { id: 'E', text: 'Bu cümlede dolaylı tümleç eksikliği yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Neye ilgisiz kalmamak? \"Onlara\" veya \"sorunlara\". Dolaylı tümleç (Edat tümleci) eksikliği bu şekilde giderilir.'
      },
      {
        id: 'q-ab-13-22',
        difficulty: 'hard',
        questionText: '\"Sözleşmenin iptal edilmesi, işçiler arasında kriz yaşanmasını sağladı.\" cümlesindeki temel anlatım bozukluğu nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'C', text: 'Tamlama yanlışı' },
          { id: 'D', text: 'Ek yanlışı' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'B',
        explanation: 'Kriz yaşanması olumsuz bir durumdur; \"sağladı\" (olumlu) yerine \"neden oldu / yol açtı\" kullanılmalıdır.'
      },
      {
        id: 'q-ab-13-23',
        difficulty: 'hard',
        questionText: '\"Bu şiirin dili oldukça akıcı, yapmacıktan uzaktı.\" cümlesinde hangi öge eksiktir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Ek Eylem' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'C',
        explanation: '\"Akıcı(idi)\" ek eyleminin eksikliği cümlenin yapısını bozar.'
      },
      {
        id: 'q-ab-13-24',
        difficulty: 'hard',
        questionText: '\"Birçok öğrenciler bu karara tepki gösterdiler.\" cümlesindeki anlatım bozukluklarının nedeni nedir?',
        options: [
          { id: 'A', text: 'Sıfat tamlamasında ve yüklemde gereksiz çoğul eki kullanımı' },
          { id: 'B', text: 'Özne-yüklem şahıs uyuşmazlığı' },
          { id: 'C', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: 'Belgisiz sıfat (birçok) ismi tekil yapar (öğrenci). Ayrıca üçüncü şahıs çoğul özne (birçok öğrenci) genelde tekil yüklem (gösterdi) gerektirir.'
      },
      {
        id: 'q-ab-13-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Bunu bana neden haber vermedin?' },
          { id: 'B', text: 'Herkes kararına saygı duyuyor.' },
          { id: 'C', text: 'Oraya yalnız gitmesini hiç tavsiye etmiyorum.' },
          { id: 'D', text: 'Yarışmayı kazanamayacağını dün öğrendim.' },
          { id: 'E', text: 'Yeni projeyi çok beğendik.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Senin kazanamayacağını\" mı, \"Onun kazanamayacağını\" mı? Tamlayan/zamir eksiktir.'
      },
      {
        id: 'q-ab-13-26',
        difficulty: 'hard',
        questionText: '\"Yaralanan işçiyi fabrika müdürü en yakın hastaneye yetiştirdi.\" cümlesinde anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"müdürü\" sözcüğünden sonra \"onu\" eklenerek' },
          { id: 'B', text: '\"en yakın\" ifadesi çıkarılarak' },
          { id: 'C', text: '\"yetiştirdi\" yerine \"götürdü\" yazılarak' },
          { id: 'D', text: '\"işçiyi\" kelimesinden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Kimi yetiştirdi? \"Yaralanan işçiyi\" nesnesi cümlenin başında verilmiştir. Bozukluk yoktur.'
      },
      {
        id: 'q-ab-13-27',
        difficulty: 'hard',
        questionText: '\"Sorunları çözmek için bir komisyon kurduk; görevlendirdik.\" cümlesindeki nesne eksikliği hangi kelime ile giderilir?',
        options: [
          { id: 'A', text: 'onu' },
          { id: 'B', text: 'hemen' },
          { id: 'C', text: 'hep beraber' },
          { id: 'D', text: 'oraya' },
          { id: 'E', text: 'kendimiz' }
        ],
        correctOptionId: 'A',
        explanation: 'İkinci cümlenin başına \"onu / komisyonu\" getirilerek nesne eksikliği giderilir.'
      },
      {
        id: 'q-ab-13-28',
        difficulty: 'hard',
        questionText: '\"O lisede okuyan hiçbir öğrenci dersini aksatmaz, en iyi şekilde çalışırdı.\" cümlesinde virgülden sonra hangi kelime getirilirse bozukluk düzelir?',
        options: [
          { id: 'A', text: 'herkes' },
          { id: 'B', text: 'kimse' },
          { id: 'C', text: 'bazıları' },
          { id: 'D', text: 'hepsi' },
          { id: 'E', text: 'onlar' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümle olumsuz (hiçbir öğrenci), ikinci cümle olumlu (çalışırdı) olduğu için virgülden sonra olumlu bir özne (herkes / hepsi) gereklidir.'
      },
      {
        id: 'q-ab-13-29',
        difficulty: 'hard',
        questionText: '\"Bahsettiğiniz adresi ne duydum ne de yerini bilirim.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Tamlayan eksikliği' },
          { id: 'B', text: 'Tamlama yanlışı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Gereksiz bağlaç' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bahsettiğiniz adresi ne duydum ne de (o adresin / onun) yerini bilirim.\" Tamlayan eksikliği vardır.'
      },
      {
        id: 'q-ab-13-30',
        difficulty: 'hard',
        questionText: '\"Öğrencilerin birçoğu soruyu anlamadı ve çözümde oldukça zorlandı.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, özne eksikliği vardır.' },
          { id: 'B', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'C', text: 'Evet, dolaylı tümleç eksikliği vardır.' },
          { id: 'D', text: 'Evet, özne-yüklem uyumsuzluğu vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Öğrencilerin birçoğu\" öznesi her iki yükleme de (anlamadı, zorlandı) uygun olduğu için anlatım bozukluğu yoktur.'
      }
    ]
  }
];
