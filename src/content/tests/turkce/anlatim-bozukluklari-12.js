export default [
  {
    id: 'test-anlatim-bozuk-12-kolay',
    title: 'Anlatım Bozuklukları 12 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-ab-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla hemen hemen yaklaşık iki saat konuştuk.' },
          { id: 'B', text: 'Toplantı beklediğimizden daha erken bitti.' },
          { id: 'C', text: 'Bugün hava düne göre oldukça soğuktu.' },
          { id: 'D', text: 'Arkadaşının düğününe en şık kıyafetiyle katıldı.' },
          { id: 'E', text: 'Sabahları erken uyanıp kitap okur.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Hemen hemen\" ve \"yaklaşık\" ifadeleri aynı anlama gelir. Birlikte kullanılmaları gereksizdir.'
      },
      {
        id: 'q-ab-12-2',
        difficulty: 'easy',
        questionText: '\"Kendisi çok alçakgönüllü ve mütevazı bir insandır.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Alçakgönüllü\" ve \"mütevazı\" aynı anlama gelir. Birisi gereksizdir.'
      },
      {
        id: 'q-ab-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyim yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Korkudan etekleri zil çaldı.' },
          { id: 'B', text: 'Sınavı kazandığını öğrenince dünyalar onun oldu.' },
          { id: 'C', text: 'Adamın pişkinliği karşısında donakaldım.' },
          { id: 'D', text: 'Bu iyiliğini hiçbir zaman unutmayacağım.' },
          { id: 'E', text: 'Sinirden küplere bindi, ne yapacağını şaşırdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Korku durumunda \"etekleri tutuşmak\" deyimi kullanılır. \"Etekleri zil çalmak\" ise sevinç ifade eder.'
      },
      {
        id: 'q-ab-12-4',
        difficulty: 'easy',
        questionText: '\"Seninle kesinlikle bir daha asla konuşmayacağım.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Zaman kipi hatası' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Anlamca çelişen sözcüklerin kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Kesinlikle\" ve \"asla\" sözcükleri aynı anlamdadır, birlikte kullanılmaları gereksizdir.'
      },
      {
        id: 'q-ab-12-5',
        difficulty: 'easy',
        questionText: '\"Bırakın ağaç dikmeyi, tohum bile ekemez o.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Zaman uyumsuzluğu' },
          { id: 'B', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'C', text: 'Gereksiz sözcük' },
          { id: 'D', text: 'Mantık hatası (Sıralama yanlışı)' },
          { id: 'E', text: 'Anlatım bozukluğu yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Ağaç dikmek tohum ekmekten daha zordur. Bu nedenle sıralamada bir mantık hatası veya bozukluk yoktur.'
      },
      {
        id: 'q-ab-12-6',
        difficulty: 'easy',
        questionText: '\"Yeni salona geçmiştik ki film başladı.\" cümlesinde anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"film\" kelimesi \"geçmiştik\" kelimesinden sonra yazılarak' },
          { id: 'B', text: '\"yeni\" kelimesi \"geçmiştik\" kelimesinden önce yazılarak' },
          { id: 'C', text: '\"salona\" kelimesi atılarak' },
          { id: 'D', text: '\"ki\" bağlacı atılarak' },
          { id: 'E', text: '\"başladı\" yerine \"gösterildi\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Salon yeni değildir. Eylemin yeni gerçekleştiği anlatılmak istenmektedir. \"Salona yeni geçmiştik ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (zamir eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Hemen yanıma gelmeni istiyorum.' },
          { id: 'B', text: 'Gece geç yattığı için sabah uyanamadı.' },
          { id: 'C', text: 'Yazılarını çok severek okuyorum.' },
          { id: 'D', text: 'Erken kalkmayı bir türlü öğrenemedi.' },
          { id: 'E', text: 'Maçı izlemekten çok keyif aldık.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Senin yazılarını\" mı yoksa \"Onun yazılarını\" mı? Tamlayan/zamir eksikliği anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-ab-12-8',
        difficulty: 'easy',
        questionText: '\"Eminim bu olayı mutlaka duymuş olmalı.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eminim / mutlaka\" kelimeleri kesinlik, \"olmalı\" ise ihtimal bildirir.'
      },
      {
        id: 'q-ab-12-9',
        difficulty: 'easy',
        questionText: '\"Bahçedeki çiçekler ilkbaharda açarlar.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Özne-yüklem (tekillik-çoğulluk) uyumsuzluğu' },
          { id: 'C', text: 'Zaman kipi uyuşmazlığı' },
          { id: 'D', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan dışındaki varlıklar çoğul özne (çiçekler) olduğunda, yüklem tekil olmalıdır (açar).'
      },
      {
        id: 'q-ab-12-10',
        difficulty: 'easy',
        questionText: '\"Tam beş saat kadar bekledik ama kimse gelmedi.\" cümlesindeki bozukluk türü nedir?',
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
    id: 'test-anlatim-bozuk-12-orta',
    title: 'Anlatım Bozuklukları 12 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (111-120)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-ab-12-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliği vardır?',
        options: [
          { id: 'A', text: 'Annesini çok sever, her zaman saygı duyardı.' },
          { id: 'B', text: 'Ona hiç kızmaz, hep affederdi.' },
          { id: 'C', text: 'Cüzdanını masada bıraktı ve evden çıktı.' },
          { id: 'D', text: 'Dosyaları inceledi, onayladı.' },
          { id: 'E', text: 'Eve geldiğinde ellerini yıkadı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Ona hiç kızmaz, (onu) hep affederdi.\" İkinci cümlede nesne (onu) eksiktir.'
      },
      {
        id: 'q-ab-12-12',
        difficulty: 'medium',
        questionText: '\"Patron işçilere değer verir, sürekli desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"işçilere\" kelimesinden sonra virgül konularak' },
          { id: 'B', text: 'virgülden sonra \"onları\" kelimesi getirilerek' },
          { id: 'C', text: '\"sürekli\" kelimesi atılarak' },
          { id: 'D', text: '\"desteklerdi\" yerine \"yardım ederdi\" yazılarak' },
          { id: 'E', text: '\"değer verir\" yerine \"değer verirdi\" yazılarak' }
        ],
        correctOptionId: 'B',
        explanation: '\"İşçilere değer verir, (onları) sürekli desteklerdi.\" İkinci cümlenin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-12-13',
        difficulty: 'medium',
        questionText: '\"Sanatsal ve dil alanındaki gelişmeler konferansta tartışıldı.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfat (sanatsal) ile isim (dil) aynı tamlanana bağlanamaz. \"Sanatsal alandaki ve dil alanındaki\" olmalıdır.'
      },
      {
        id: 'q-ab-12-14',
        difficulty: 'medium',
        questionText: '\"Herkes sınava zamanında gelmiş, geç kalmamıştı.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"kimse\" eklenerek' },
          { id: 'B', text: '\"geç kalmamıştı\" yerine \"zamanında gelmişti\" yazılarak' },
          { id: 'C', text: '\"herkes\" yerine \"hepsi\" yazılarak' },
          { id: 'D', text: '\"zamanında\" kelimesi atılarak' },
          { id: 'E', text: '\"sınava\" sözcüğü cümleden çıkarılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", olumsuz yükleme (kalmamıştı) uymaz. İkinci cümleye \"kimse / hiç kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-12-15',
        difficulty: 'medium',
        questionText: '\"Biletleri o, patlamış mısırları ise ben aldım.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Yüklem eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Ek fiil eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Biletleri o (aldı), patlamış mısırları ise ben aldım.\" İlk cümlenin yüklemi yoktur, ortak yüklem (aldım) ilk cümleye uymaz.'
      },
      {
        id: 'q-ab-12-16',
        difficulty: 'medium',
        questionText: '\"Yerdeki çöpler toplanıp çöp tenekesine attı.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: '\"Toplanıp\" edilgen, \"attı\" etkendir. İkisi de edilgen olmalıdır: \"Toplanıp çöp tenekesine atıldı.\"'
      },
      {
        id: 'q-ab-12-17',
        difficulty: 'medium',
        questionText: '\"İnsanların birçoğu bu durumu tam olarak kabullenmediler.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Tamlama hatası' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'C', text: 'Gereksiz kelime kullanımı' },
          { id: 'D', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Belgisiz zamirler (birçoğu) özne olduğunda yüklem tekil olmalıdır. \"Kabullenmedi\" olmalıdır.'
      },
      {
        id: 'q-ab-12-18',
        difficulty: 'medium',
        questionText: '\"O sınıfta okuyan herkesin derslerine çalışması, ihmal etmemesi gerekir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"onları\" eklenerek' },
          { id: 'B', text: '\"herkesin\" kelimesi cümleden atılarak' },
          { id: 'C', text: '\"ihmal etmemesi\" yerine \"aksatmaması\" yazılarak' },
          { id: 'D', text: '\"çalışması\" sözcüğünden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Cümledeki bozukluk yoktur' }
        ],
        correctOptionId: 'A',
        explanation: '\"Derslerini ihmal etmemesi\" nesne eksikliği olarak kabul edilir, virgülden sonra \"onları / derslerini\" kelimesi eklenmelidir.'
      },
      {
        id: 'q-ab-12-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz iyelik eki kullanımından kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onun böyle konuşmasını hiç doğru bulmuyorum.' },
          { id: 'B', text: 'Araba sürmesini çok isterdim.' },
          { id: 'C', text: 'Bisiklet kullanmasını çok iyi biliyor.' },
          { id: 'D', text: 'Evinin odaları oldukça aydınlıktı.' },
          { id: 'E', text: 'Arkadaşının geç gelmesini eleştirdi.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Bisiklet kullanmayı\" olmalıdır, üçüncü tekil kişi iyelik eki (-sı) gereksiz yere kullanılmıştır.'
      },
      {
        id: 'q-ab-12-20',
        difficulty: 'medium',
        questionText: '\"Yarın sinemaya gidecek olursam eğer seni mutlaka ararım.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
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
    id: 'test-anlatim-bozuk-12-zor',
    title: 'Anlatım Bozuklukları 12 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (111-120)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-ab-12-21',
        difficulty: 'hard',
        questionText: '\"Mevcut krizin üstesinden gelmek için önlem almak, duyarsız kalmamak gerekir.\" cümlesindeki dolaylı tümleç eksikliği nereye eklenecek bir kelime ile giderilir?',
        options: [
          { id: 'A', text: '\"duyarsız\" kelimesinden önce \"ona\" eklenerek' },
          { id: 'B', text: '\"önlem\" kelimesinden önce \"çok\" eklenerek' },
          { id: 'C', text: '\"gerekir\" kelimesinden önce \"bize\" eklenerek' },
          { id: 'D', text: '\"krizin\" kelimesinden önce \"bu\" eklenerek' },
          { id: 'E', text: 'Bu cümlede dolaylı tümleç eksikliği yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Neye duyarsız kalmamak? \"Ona\" veya \"krize\". Dolaylı tümleç (Edat tümleci) eksikliği bu şekilde giderilir.'
      },
      {
        id: 'q-ab-12-22',
        difficulty: 'hard',
        questionText: '\"Olayın bu boyuta gelmesi, şirketler arasında kriz yaşanmasını sağladı.\" cümlesindeki temel anlatım bozukluğu nedir?',
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
        id: 'q-ab-12-23',
        difficulty: 'hard',
        questionText: '\"Bu kitabın dili oldukça akıcı, yapmacıktan uzaktı.\" cümlesinde hangi öge eksiktir?',
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
        id: 'q-ab-12-24',
        difficulty: 'hard',
        questionText: '\"Birçok insanlar bu durumu protesto ettiler.\" cümlesindeki anlatım bozukluklarının nedeni nedir?',
        options: [
          { id: 'A', text: 'Sıfat tamlamasında ve yüklemde gereksiz çoğul eki kullanımı' },
          { id: 'B', text: 'Özne-yüklem şahıs uyuşmazlığı' },
          { id: 'C', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: 'Belgisiz sıfat (birçok) ismi tekil yapar (insan). Ayrıca üçüncü şahıs çoğul özne (birçok insan) genelde tekil yüklem (etti) gerektirir.'
      },
      {
        id: 'q-ab-12-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Bunu bana neden haber vermedin?' },
          { id: 'B', text: 'Herkes senin kararına saygı duyuyor.' },
          { id: 'C', text: 'Oraya yalnız gitmeni hiç tavsiye etmiyorum.' },
          { id: 'D', text: 'İşe alınmayacağını dün öğrendim.' },
          { id: 'E', text: 'Yeni projeyi çok beğendik.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Senin alınmayacağını\" mı, \"Onun alınmayacağını\" mı? Tamlayan/zamir eksiktir.'
      },
      {
        id: 'q-ab-12-26',
        difficulty: 'hard',
        questionText: '\"Hastalanan yolcuyu otobüs şoförü en yakın hastaneye yetiştirdi.\" cümlesinde anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"şoförü\" sözcüğünden sonra \"onu\" eklenerek' },
          { id: 'B', text: '\"en yakın\" ifadesi çıkarılarak' },
          { id: 'C', text: '\"yetiştirdi\" yerine \"götürdü\" yazılarak' },
          { id: 'D', text: '\"hastalanan\" kelimesinden sonra virgül kaldırılarak' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Kimi yetiştirdi? \"Hastalanan yolcuyu\" nesnesi cümlenin başında verilmiştir. Bozukluk yoktur.'
      },
      {
        id: 'q-ab-12-27',
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
        id: 'q-ab-12-28',
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
        id: 'q-ab-12-29',
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
        id: 'q-ab-12-30',
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
