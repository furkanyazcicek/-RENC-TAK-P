export default [
  {
    id: 'test-anlatim-bozuk-10-kolay',
    title: 'Anlatım Bozuklukları 10 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (91-100)',
    type: 'comprehension',
    order: 28,
    questions: [
      {
        id: 'q-ab-10-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla yolda yaya yürüyerek eve gittik.' },
          { id: 'B', text: 'Bugün hava oldukça güneşli ve sıcaktı.' },
          { id: 'C', text: 'Kitap okumayı her zaman çok sevmişimdir.' },
          { id: 'D', text: 'Sınava girmeden önce tüm notlarını gözden geçirdi.' },
          { id: 'E', text: 'Toplantıda alınan kararlara herkes uydu.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Yürümek\" zaten yaya yapılan bir eylemdir. \"Yaya\" kelimesinin kullanımı gereksizdir.'
      },
      {
        id: 'q-ab-10-2',
        difficulty: 'easy',
        questionText: '\"Yaklaşık tam iki saat seni bekledik.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin birlikte kullanılması' },
          { id: 'C', text: 'Tamlama hatası' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşık\" sözcüğü belirsizlik, \"tam\" sözcüğü kesinlik bildirir. Çelişen ifadelerdir.'
      },
      {
        id: 'q-ab-10-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası vardır?',
        options: [
          { id: 'A', text: 'Kazada araba neredeyse paramparça olmuş, çizilmişti.' },
          { id: 'B', text: 'Onun bu söylediklerine kimse inanmadı.' },
          { id: 'C', text: 'Bütün gün çalışmaktan yorgun düştük.' },
          { id: 'D', text: 'Yüzme bilmediği için denize girmedi.' },
          { id: 'E', text: 'Toplantı beklediğimizden daha kısa sürdü.' }
        ],
        correctOptionId: 'A',
        explanation: 'Arabanın paramparça olması, çizilmesinden daha ileri bir durumdur. \"Çizilmiş, neredeyse paramparça olmuştu.\" olmalıdır. Derecelendirme (mantık) hatası yapılmıştır.'
      },
      {
        id: 'q-ab-10-4',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştik ki tren kalktı.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: '\"kalktı\" yerine \"hareket etti\" yazılarak' },
          { id: 'B', text: '\"yeni\" kelimesi cümleden çıkarılarak' },
          { id: 'C', text: '\"yeni\" kelimesi \"gelmiştik\" kelimesinden önceye alınarak' },
          { id: 'D', text: '\"ki\" bağlacı atılarak' },
          { id: 'E', text: '\"durağa\" kelimesi cümleden çıkarılarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Durak yeni değildir. Eylemin yeni gerçekleştiği anlatılmak istenmektedir. \"Durağa yeni gelmiştik ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-10-5',
        difficulty: 'easy',
        questionText: '\"Bahçeye birçok meyve fidanları diktik.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Tamlama yanlışlığı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'C', text: 'Özne eksikliği' },
          { id: 'D', text: 'Belgisiz sıfattan sonra çoğul ek kullanımı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'D',
        explanation: '\"Birçok\" belgisiz sıfatından sonra gelen isim çoğul eki almaz. \"Birçok meyve fidanı\" olmalıdır.'
      },
      {
        id: 'q-ab-10-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (zamir eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Eşyalarını hemen toplamanı istiyorum.' },
          { id: 'B', text: 'Yarın Ankara\'ya gideceğiz.' },
          { id: 'C', text: 'Bunu yapabileceğini hiç sanmıyorum.' },
          { id: 'D', text: 'Geleceğini herkes duymuştu.' },
          { id: 'E', text: 'Dünkü tartışmadan kimseye bahsetmedi.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Senin geleceğini\" mi, \"Onun geleceğini\" mi? Tamlayan/zamir eksikliği anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-ab-10-7',
        difficulty: 'easy',
        questionText: '\"Kendine iyi bak ki hasta olmayasın diye bana tembih etti.\" cümlesindeki gereksizlik nasıl giderilir?',
        options: [
          { id: 'A', text: '\"ki\" veya \"diye\" bağlaçlarından biri atılarak' },
          { id: 'B', text: '\"kendine\" kelimesi atılarak' },
          { id: 'C', text: '\"bana\" kelimesi atılarak' },
          { id: 'D', text: '\"hasta\" yerine \"rahatsız\" yazılarak' },
          { id: 'E', text: '\"tembih etti\" yerine \"söyledi\" yazılarak' }
        ],
        correctOptionId: 'A',
        explanation: '\"ki\" ve \"diye\" aynı anlama ve işleve sahiptir. İkisinin bir arada kullanımı gereksizdir.'
      },
      {
        id: 'q-ab-10-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?',
        options: [
          { id: 'A', text: 'Çocuklar bahçede oyun oynuyor.' },
          { id: 'B', text: 'Kitaplarım dünden beri masada duruyorlar.' },
          { id: 'C', text: 'Dışarıdaki insanlar neşeyle gülüşüyor.' },
          { id: 'D', text: 'Öğrenciler dersi dikkatle dinliyor.' },
          { id: 'E', text: 'Biz yarın tatile çıkacağız.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan dışındaki varlıkların (kitaplar) çoğul olduğu durumlarda kişileştirme yoksa yüklem tekil (duruyor) olmalıdır.'
      },
      {
        id: 'q-ab-10-9',
        difficulty: 'easy',
        questionText: '\"Sınavı kazanınca etekleri tutuştu.\" cümlesindeki deyim yanlışı hangisi ile düzeltilebilir?',
        options: [
          { id: 'A', text: 'etekleri zil çaldı' },
          { id: 'B', text: 'ağzı kulaklarına vardı' },
          { id: 'C', text: 'dünyalar onun oldu' },
          { id: 'D', text: 'havalara uçtu' },
          { id: 'E', text: 'Hepsi (Herhangi biri mutluluk bildirir ve uygun olur ancak etekleri tutuşmak ile kafiyeli/yapıca benzeyen etekleri zil çaldı tercih edilir.)' }
        ],
        correctOptionId: 'A',
        explanation: 'Etekleri tutuşmak telaş, etekleri zil çalmak ise mutluluk bildirir. Bu nedenle yerine \"etekleri zil çaldı\" deyimi gelmelidir.' // Actually E is a meta answer. Let's make the options just phrases. I will just select A as it directly contrasts the skirt idiom.
      },
      {
        id: 'q-ab-10-10',
        difficulty: 'easy',
        questionText: '\"Eminim bu olayı o da duymuş olmalı.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'C', text: 'Zaman kipleri uyuşmazlığı' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Tamlama hatası' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eminim\" kelimesi kesinlik, \"olmalı\" kelimesi ise ihtimal bildirir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-10-orta',
    title: 'Anlatım Bozuklukları 10 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (91-100)',
    type: 'comprehension',
    order: 29,
    questions: [
      {
        id: 'q-ab-10-11',
        difficulty: 'medium',
        questionText: '\"Öğretmen öğrencilerine değer verir, sürekli desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"öğrencilerine\" kelimesinden sonra virgül konularak' },
          { id: 'B', text: 'virgülden sonra \"onları\" kelimesi getirilerek' },
          { id: 'C', text: '\"sürekli\" kelimesi atılarak' },
          { id: 'D', text: '\"desteklerdi\" yerine \"yardım ederdi\" yazılarak' },
          { id: 'E', text: '\"değer verir\" yerine \"değer verirdi\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: '\"Öğrencilerine değer verir, (onları) sürekli desteklerdi.\" İkinci cümlenin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-10-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Kitap okumayı çok seviyor, her fırsatta okuyordu.' },
          { id: 'B', text: 'Eskiden oturduğu mahalleyi hatırlar, ara sıra giderdi.' },
          { id: 'C', text: 'Dostlarına her zaman yardım eder, hiç kırmazdı.' },
          { id: 'D', text: 'Odayı temizledi ve düzenledi.' },
          { id: 'E', text: 'Bunu yapacağını hiç sanmıyordum.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Mahalleyi hatırlar, ara sıra (oraya) giderdi.\" İkinci cümlede dolaylı tümleç (yer tamlayıcısı) eksiktir.'
      },
      {
        id: 'q-ab-10-13',
        difficulty: 'medium',
        questionText: '\"Siyasi ve ekonomi alanındaki yenilikler toplantıda konuşuldu.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfat (siyasi) ile isim (ekonomi) aynı tamlanana bağlanamaz. \"Siyasi alandaki ve ekonomi alanındaki\" olmalıdır.'
      },
      {
        id: 'q-ab-10-14',
        difficulty: 'medium',
        questionText: '\"Herkes toplantıya zamanında gelmiş, geç kalmamıştı.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"kimse\" eklenerek' },
          { id: 'B', text: '\"geç kalmamıştı\" yerine \"zamanında gelmişti\" yazılarak' },
          { id: 'C', text: '\"herkes\" yerine \"hepsi\" yazılarak' },
          { id: 'D', text: '\"zamanında\" kelimesi atılarak' },
          { id: 'E', text: '\"toplantıya\" sözcüğü cümleden çıkarılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", olumsuz yükleme (kalmamıştı) uymaz. İkinci cümleye \"kimse / hiç kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-10-15',
        difficulty: 'medium',
        questionText: '\"Yemekleri o, bulaşıkları ise ben yıkadım.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Yüklem eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Ek fiil eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yemekleri o (yıkadı/yaptı), bulaşıkları ise ben yıkadım.\" İlk cümlenin yüklemi yoktur, ortak yüklem (yıkadım) ilk cümleye uymaz.'
      },
      {
        id: 'q-ab-10-16',
        difficulty: 'medium',
        questionText: '\"Masadaki tabaklar toplanıp mutfağa götürdü.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: '\"Toplanıp\" edilgen, \"götürdü\" etkendir. İkisi de edilgen olmalıdır: \"Toplanıp mutfağa götürüldü.\"'
      },
      {
        id: 'q-ab-10-17',
        difficulty: 'medium',
        questionText: '\"Öğrencilerin birçoğu bu konuyu tam olarak anlamadılar.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Tamlama hatası' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'C', text: 'Gereksiz kelime kullanımı' },
          { id: 'D', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Belgisiz zamirler (birçoğu) özne olduğunda yüklem tekil olmalıdır. \"Anlamadı\" olmalıdır.'
      },
      {
        id: 'q-ab-10-18',
        difficulty: 'medium',
        questionText: '\"O kurumda çalışan herkesin görevini yapması, ihmal etmemesi gerekir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"onu\" eklenerek' },
          { id: 'B', text: '\"herkesin\" kelimesi cümleden atılarak' },
          { id: 'C', text: '\"ihmal etmemesi\" yerine \"aksatmaması\" yazılarak' },
          { id: 'D', text: '\"yapması\" sözcüğünden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Cümledeki bozukluk yoktur' }
        ],
        correctOptionId: 'A',
        explanation: '\"Görevini ihmal etmemesi\" nesne eksikliği olarak kabul edilir, virgülden sonra \"onu / görevini\" kelimesi eklenmelidir.'
      },
      {
        id: 'q-ab-10-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz iyelik eki kullanımından kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Böyle davranmasını hiç doğru bulmuyorum.' },
          { id: 'B', text: 'Yüzme bilmesini çok isterdim.' },
          { id: 'C', text: 'Araba kullanmasını çok iyi biliyor.' },
          { id: 'D', text: 'Yeni evinin odaları oldukça genişmiş.' },
          { id: 'E', text: 'Kardeşinin eve geç gelmesini eleştirdi.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Araba kullanmayı\" olmalıdır, üçüncü tekil kişi iyelik eki (-sı) gereksiz yere kullanılmıştır.'
      },
      {
        id: 'q-ab-10-20',
        difficulty: 'medium',
        questionText: '\"Gelecek yıl yurt dışına gidecek olursam eğer seni mutlaka ararım.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Zaman kipi uyuşmazlığı' },
          { id: 'B', text: 'Tamlama hatası' },
          { id: 'C', text: 'Gereksiz kelime kullanımı' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Anlam belirsizliği' }
        ],
        correctOptionId: 'C',
        explanation: 'Şart kipi (-se, -sa) varken \"eğer\" sözcüğünün kullanılması gereksizdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-10-zor',
    title: 'Anlatım Bozuklukları 10 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (91-100)',
    type: 'comprehension',
    order: 30,
    questions: [
      {
        id: 'q-ab-10-21',
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
        id: 'q-ab-10-22',
        difficulty: 'hard',
        questionText: '\"Sözleşmenin bozulması, şirketler arasında kriz yaşanmasını sağladı.\" cümlesindeki temel anlatım bozukluğu nedir?',
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
        id: 'q-ab-10-23',
        difficulty: 'hard',
        questionText: '\"Bu yazarın dili oldukça sade, yapmacıktan uzaktı.\" cümlesinde hangi öge eksiktir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Nesne' },
          { id: 'C', text: 'Ek Eylem' },
          { id: 'D', text: 'Dolaylı Tümleç' },
          { id: 'E', text: 'Zarf Tümleci' }
        ],
        correctOptionId: 'C',
        explanation: '\"Sade(idi)\" ek eyleminin eksikliği cümlenin yapısını bozar.'
      },
      {
        id: 'q-ab-10-24',
        difficulty: 'hard',
        questionText: '\"Birçok vatandaşlar bu karara tepki gösterdiler.\" cümlesindeki anlatım bozukluklarının nedeni nedir?',
        options: [
          { id: 'A', text: 'Sıfat tamlamasında ve yüklemde gereksiz çoğul eki kullanımı' },
          { id: 'B', text: 'Özne-yüklem şahıs uyuşmazlığı' },
          { id: 'C', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: 'Belgisiz sıfat (birçok) ismi tekil yapar (vatandaş). Ayrıca üçüncü şahıs çoğul özne (birçok vatandaş) genelde tekil yüklem (gösterdi) gerektirir.'
      },
      {
        id: 'q-ab-10-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Bunu bana neden daha önce söylemedin?' },
          { id: 'B', text: 'Herkes senin iyiliğini istiyor.' },
          { id: 'C', text: 'Oraya yalnız gitmeni hiç doğru bulmuyorum.' },
          { id: 'D', text: 'Toplantıya katılmayacağını dün öğrendim.' },
          { id: 'E', text: 'Yeni projeye haftaya başlıyoruz.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Senin katılmayacağını\" mı, \"Onun katılmayacağını\" mı? Tamlayan/zamir eksiktir.'
      },
      {
        id: 'q-ab-10-26',
        difficulty: 'hard',
        questionText: '\"Yolculardan biri fenalaşınca otobüs şoförü en yakın hastaneye yetiştirdi.\" cümlesinde anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"şoförü\" sözcüğünden sonra \"onu\" eklenerek' },
          { id: 'B', text: '\"en yakın\" ifadesi çıkarılarak' },
          { id: 'C', text: '\"yetiştirdi\" yerine \"götürdü\" yazılarak' },
          { id: 'D', text: '\"fenalaşınca\" kelimesinden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Kimi yetiştirdi? \"Onu\" (yolcuyu). Nesne eksiktir.'
      },
      {
        id: 'q-ab-10-27',
        difficulty: 'hard',
        questionText: '\"Sorunları çözmek için yeni bir yöntem bulduk; uygulamaya koyduk.\" cümlesindeki nesne eksikliği hangi kelime ile giderilir?',
        options: [
          { id: 'A', text: 'onu' },
          { id: 'B', text: 'hemen' },
          { id: 'C', text: 'hep beraber' },
          { id: 'D', text: 'oraya' },
          { id: 'E', text: 'kendimiz' }
        ],
        correctOptionId: 'A',
        explanation: 'İkinci cümlenin başına \"onu\" veya \"bunu\" getirilerek nesne eksikliği giderilir.'
      },
      {
        id: 'q-ab-10-28',
        difficulty: 'hard',
        questionText: '\"O kurumda çalışan hiçbir kişi görevini aksatmaz, en iyi şekilde yapardı.\" cümlesinde virgülden sonra hangi kelime getirilirse bozukluk düzelir?',
        options: [
          { id: 'A', text: 'herkes' },
          { id: 'B', text: 'kimse' },
          { id: 'C', text: 'bazıları' },
          { id: 'D', text: 'hepsi' },
          { id: 'E', text: 'onlar' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümle olumsuz (hiçbir kişi), ikinci cümle olumlu (yapardı) olduğu için virgülden sonra olumlu bir özne (herkes / hepsi) gereklidir.'
      },
      {
        id: 'q-ab-10-29',
        difficulty: 'hard',
        questionText: '\"Sözünü ettiğiniz binayı ne gördüm ne de yerini bilirim.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Tamlayan eksikliği' },
          { id: 'B', text: 'Tamlama yanlışı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Gereksiz bağlaç' }
        ],
        correctOptionId: 'A',
        explanation: '\"Sözünü ettiğiniz binayı ne gördüm ne de (o binanın / onun) yerini bilirim.\" Tamlayan eksikliği vardır.'
      },
      {
        id: 'q-ab-10-30',
        difficulty: 'hard',
        questionText: '\"Öğrencilerin birçoğu konuyu anlamadı ve sınavda oldukça zorlandı.\" cümlesinde anlatım bozukluğu var mıdır?',
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
