export default [
  {
    id: 'test-anlatim-bozuk-11-kolay',
    title: 'Anlatım Bozuklukları 11 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-ab-11-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Önümüzdeki yıl bu zamanlarda mezun olacağım.' },
          { id: 'B', text: 'Toplantıya o da kendi isteğiyle gönüllü olarak katıldı.' },
          { id: 'C', text: 'Kitaptaki olaylar oldukça sürükleyiciydi.' },
          { id: 'D', text: 'Bugünlerde havalar iyice soğumaya başladı.' },
          { id: 'E', text: 'Sabahları erken kalkmak insana enerji verir.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Kendi isteğiyle\" ve \"gönüllü olarak\" ifadeleri aynı anlama gelir. Birlikte kullanılmaları gereksizdir.'
      },
      {
        id: 'q-ab-11-2',
        difficulty: 'easy',
        questionText: '\"Babası ona güzel ve iyi bir hediye almıştı.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Güzel\" ve \"iyi\" kelimeleri bu cümlede aynı işlevde ve yakın anlamda kullanılmıştır. Birisi gereksizdir.'
      },
      {
        id: 'q-ab-11-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyim yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'O kadar korktu ki dili tutuldu.' },
          { id: 'B', text: 'Çocuğun masumiyeti karşısında yüreği sızladı.' },
          { id: 'C', text: 'Sınavı kazanınca etekleri tutuştu.' },
          { id: 'D', text: 'Beni görünce sevinçten havalara uçtu.' },
          { id: 'E', text: 'Sinirden küplere bindi, ne yapacağını bilemedi.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Etekleri tutuşmak\" telaş, panik ifade eder. Sınav kazanmak mutluluktur, \"etekleri zil çalmak\" deyimi uygundur.'
      },
      {
        id: 'q-ab-11-4',
        difficulty: 'easy',
        questionText: '\"Seninle kesinlikle bir daha görüşmeyebilirim.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Zaman kipi hatası' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Gereksiz kelime' }
        ],
        correctOptionId: 'B',
        explanation: '\"Kesinlikle\" sözcüğü kesinlik, \"görüşmeyebilirim\" ise ihtimal/olasılık bildirir.'
      },
      {
        id: 'q-ab-11-5',
        difficulty: 'easy',
        questionText: '\"Bırakın yürümeyi, koşamaz bile.\" cümlesinde hangi anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Zaman uyumsuzluğu' },
          { id: 'B', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'C', text: 'Gereksiz sözcük' },
          { id: 'D', text: 'Mantık hatası (Sıralama yanlışı)' },
          { id: 'E', text: 'Özne eksikliği' }
        ],
        correctOptionId: 'D',
        explanation: 'Koşmak yürümekten daha zordur. \"Bırakın koşmayı, yürüyemez bile.\" olmalıdır.'
      },
      {
        id: 'q-ab-11-6',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştik ki otobüs hareket etti.\" cümlesinde anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"otobüs\" kelimesi \"gelmiştik\" kelimesinden sonra yazılarak' },
          { id: 'B', text: '\"yeni\" kelimesi \"gelmiştik\" kelimesinden önce yazılarak' },
          { id: 'C', text: '\"durağa\" kelimesi atılarak' },
          { id: 'D', text: '\"ki\" bağlacı atılarak' },
          { id: 'E', text: '\"hareket etti\" yerine \"kalktı\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Durak yeni değildir. Eylemin yeni gerçekleştiği anlatılmak istenmektedir. \"Durağa yeni gelmiştik ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-11-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Tatilde bol bol yüzdü.' },
          { id: 'B', text: 'Akşamları erken yatar.' },
          { id: 'C', text: 'Kardeşini dün parkta gördüm.' },
          { id: 'D', text: 'Sabah erken kalkmayı sevmiyor.' },
          { id: 'E', text: 'Sınava çalışmaktan çok yoruldu.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Senin kardeşini\" mi yoksa \"Onun kardeşini\" mi? Tamlayan/zamir eksikliği anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-ab-11-8',
        difficulty: 'easy',
        questionText: '\"Kendine iyi bak ki hasta olmayasın diye tembihledi.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"ki\" bağlacı ile \"diye\" bağlacı aynı amaçla kullanıldığından biri gereksizdir.'
      },
      {
        id: 'q-ab-11-9',
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
        explanation: 'İnsan dışındaki varlıklar çoğul özne (ağaçlar) olduğunda, yüklem tekil olmalıdır (açar).'
      },
      {
        id: 'q-ab-11-10',
        difficulty: 'easy',
        questionText: '\"Tam üç saat kadar bekledik ama kimse gelmedi.\" cümlesindeki bozukluk türü nedir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Anlamca çelişen kelimelerin kullanımı' },
          { id: 'D', text: 'Özne eksikliği' },
          { id: 'E', text: 'Tamlama yanlışı' }
        ],
        correctOptionId: 'C',
        explanation: '\"Tam\" sözcüğü kesinlik, \"kadar\" sözcüğü yaklaşıklık ifade eder. Birbiriyle çelişir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-11-orta',
    title: 'Anlatım Bozuklukları 11 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (101-110)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-ab-11-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliği vardır?',
        options: [
          { id: 'A', text: 'Babasını çok sever, her zaman saygı duyardı.' },
          { id: 'B', text: 'Kardeşine hiç kızmaz, hep affederdi.' },
          { id: 'C', text: 'Kitabını masada bıraktı ve dışarı çıktı.' },
          { id: 'D', text: 'Soruları tek tek okudu, cevapladı.' },
          { id: 'E', text: 'Eve gelir gelmez ellerini yıkadı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Kardeşine hiç kızmaz, (onu) hep affederdi.\" İkinci cümlede nesne (onu) eksiktir.'
      },
      {
        id: 'q-ab-11-12',
        difficulty: 'medium',
        questionText: '\"Müdür çalışanlara değer verir, sürekli desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
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
        id: 'q-ab-11-13',
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
        id: 'q-ab-11-14',
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
        id: 'q-ab-11-15',
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
        id: 'q-ab-11-16',
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
        id: 'q-ab-11-17',
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
        id: 'q-ab-11-18',
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
        id: 'q-ab-11-19',
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
        id: 'q-ab-11-20',
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
    id: 'test-anlatim-bozuk-11-zor',
    title: 'Anlatım Bozuklukları 11 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (101-110)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-ab-11-21',
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
        id: 'q-ab-11-22',
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
        id: 'q-ab-11-23',
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
        id: 'q-ab-11-24',
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
        id: 'q-ab-11-25',
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
        id: 'q-ab-11-26',
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
        id: 'q-ab-11-27',
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
        id: 'q-ab-11-28',
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
        id: 'q-ab-11-29',
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
        id: 'q-ab-11-30',
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
