export default [
  {
    id: 'test-anlatim-bozuk-1-kolay',
    title: 'Anlatım Bozuklukları 1 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-ab-1-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onunla ilk tanıştığımız günü hiç unutamam.' },
          { id: 'B', text: 'Yarın sabah erkenden yola çıkacağız.' },
          { id: 'C', text: 'Kitap okumayı her zaman çok sevmişimdir.' },
          { id: 'D', text: 'Bu konuyu seninle tekrar görüşmek istiyorum.' },
          { id: 'E', text: 'Çocuklar bahçede neşeyle koşuşturuyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Tanışmak eylemi zaten \"ilk\" kez yapılan bir eylemdir. Bu nedenle \"ilk\" sözcüğü gereksizdir.'
      },
      {
        id: 'q-ab-1-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Bugün hava çok güzel.' },
          { id: 'B', text: 'Babam işten henüz gelmedi.' },
          { id: 'C', text: 'Eminim ki o da bizimle gelebilir.' },
          { id: 'D', text: 'Masadaki kitapları tek tek inceledi.' },
          { id: 'E', text: 'Gözlüklerini takmadan gazete okuyamıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Eminim ki\" kesinlik, \"gelebilir\" ihtimal bildirir. Aynı cümlede birbiriyle çelişen sözcüklerin kullanılması anlatım bozukluğuna yol açar.'
      },
      {
        id: 'q-ab-1-3',
        difficulty: 'easy',
        questionText: '\"Sınavı kazandığını duyunca etekleri zil çaldı.\" cümlesindeki altı çizili deyim yerine aşağıdakilerden hangisi getirilirse cümlenin anlamı bozulmaz?',
        options: [
          { id: 'A', text: 'etekleri tutuştu' },
          { id: 'B', text: 'ağzı kulaklarına vardı' },
          { id: 'C', text: 'küplere bindi' },
          { id: 'D', text: 'dili tutuldu' },
          { id: 'E', text: 'gözdağı verdi' }
        ],
        correctOptionId: 'B',
        explanation: '\"Etekleri zil çalmak\" ve \"ağzı kulaklarına varmak\" çok sevinmek anlamındadır.'
      },
      {
        id: 'q-ab-1-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sözcüğün yanlış anlamda kullanılmasından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Kardeşimin saçları çok büyümüş.' },
          { id: 'B', text: 'Ağacın dalları fırtınada kırıldı.' },
          { id: 'C', text: 'Çiçekler baharın gelişini müjdeliyor.' },
          { id: 'D', text: 'Gölün suyu bu mevsimde çok soğuk olur.' },
          { id: 'E', text: 'Kuşlar gökyüzünde özgürce uçuyordu.' }
        ],
        correctOptionId: 'A',
        explanation: 'Saçlar \"büyümez\", \"uzar\". Sözcüğün yanlış anlamda kullanımı vardır.'
      },
      {
        id: 'q-ab-1-5',
        difficulty: 'easy',
        questionText: '\"Bu olay karşısında nasıl davranacağımı şaşırdım kaldım.\" cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Çelişen sözcüklerin kullanılması' }
        ],
        correctOptionId: 'B',
        explanation: '\"Şaşırmak\" ve \"kalmak\" aynı durumu ifade eder. \"Şaşırdım\" demek yeterlidir.'
      },
      {
        id: 'q-ab-1-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlatım bozukluğu yoktur?',
        options: [
          { id: 'A', text: 'Karşılıklı mektuplaşmalarımız yıllarca sürdü.' },
          { id: 'B', text: 'Oraya gitmemizin tek nedeni onu görmek içindi.' },
          { id: 'C', text: 'Dünkü toplantıya birçok kişiler katıldı.' },
          { id: 'D', text: 'Onun bu başarıya ulaşacağını biliyordum.' },
          { id: 'E', text: 'Hiç şüphesiz bu sorunu da çözebiliriz belki.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde herhangi bir anlatım bozukluğu yoktur. Diğerlerinde sırasıyla: \"Karşılıklı\" gereksiz (A), \"nedeni... içindi\" fazla (B), \"birçok kişiler\" uyumsuz (C), \"şüphesiz/belki\" çelişkili (E).'
      },
      {
        id: 'q-ab-1-7',
        difficulty: 'easy',
        questionText: '\"Bence sen de onun gibi düşünüyorsun diye zannediyorum.\" cümlesindeki anlatım bozukluğunu gidermek için aşağıdakilerden hangisi yapılmalıdır?',
        options: [
          { id: 'A', text: '\"Bence\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'B', text: '\"gibi\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'C', text: '\"diye\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'D', text: '\"sen de\" yerine \"siz de\" yazılmalıdır.' },
          { id: 'E', text: '\"düşünüyorsun\" yerine \"düşünürsün\" yazılmalıdır.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bence\" ve \"zannediyorum\" aynı anlamı taşır. Birinin çıkarılması gerekir.'
      },
      {
        id: 'q-ab-1-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Okula gitmeyeceğini söyledi.' },
          { id: 'B', text: 'Kitabını masanın üzerinde unuttum.' },
          { id: 'C', text: 'Yarışmada birinci olduğuna sevindim.' },
          { id: 'D', text: 'Geleceğini bana neden haber vermedin?' },
          { id: 'E', text: 'Bu konuda sana yardımcı olacağım.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Geleceğini\" sözcüğü hem \"senin geleceğini\" hem de \"onun geleceğini\" anlamında olabilir. Kişi zamiri eksikliği anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-ab-1-9',
        difficulty: 'easy',
        questionText: '\"Öğrenci sayısının kalabalık olması eğitimi olumsuz etkiliyor.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Zamir eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Sayı \"kalabalık\" olmaz, sayı \"fazla\" veya \"çok\" olur.'
      },
      {
        id: 'q-ab-1-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış kullanılmasından kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'O kadar korktu ki yüzünden düşen bin parçaydı.' },
          { id: 'B', text: 'Çok acıktım, midem zil çalıyor.' },
          { id: 'C', text: 'Bu işi başarana kadar akla karayı seçtik.' },
          { id: 'D', text: 'Söylenenleri duyunca kulaklarına inanamadı.' },
          { id: 'E', text: 'Her şeye burun kıvırıyor, hiçbir şeyi beğenmiyor.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Yüzünden düşen bin parça olmak\" üzüntü ve mutsuzluk belirtir, korku belirtmez. Korku için \"beti benzi atmak\" vb. deyimler kullanılır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-1-orta',
    title: 'Anlatım Bozuklukları 1 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (1-10)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-ab-1-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?',
        options: [
          { id: 'A', text: 'Ben ve o, yarın tiyatroya gideceğiz.' },
          { id: 'B', text: 'Kuşlar gökyüzünde neşeyle uçuşuyorlar.' },
          { id: 'C', text: 'Sen ve kardeşin bu işi başarabilirsiniz.' },
          { id: 'D', text: 'Herkes kendi görevini eksiksiz yerine getirdi.' },
          { id: 'E', text: 'Ağaçlar ilkbaharda çiçek açar.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan dışındaki varlıkların çoğul olduğu durumlarda, kişileştirme yoksa yüklem tekil olmalıdır. \"Uçuşuyor\" olmalıdır.'
      },
      {
        id: 'q-ab-1-12',
        difficulty: 'medium',
        questionText: '\"Bu kurumda herkesin düşüncesine saygı gösterilir, küçümsenmezdi.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilebilir?',
        options: [
          { id: 'A', text: '\"kurumda\" kelimesi atılarak' },
          { id: 'B', text: '\"saygı gösterilir\" kelimesinden sonra \"ve\" getirilerek' },
          { id: 'C', text: '\"küçümsenmezdi\" kelimesinden önce \"kimse\" getirilerek' },
          { id: 'D', text: '\"düşüncesine\" yerine \"fikrine\" getirilerek' },
          { id: 'E', text: '\"herkesin\" kelimesi \"herkes\" yapılarak' }
        ],
        correctOptionId: 'C',
        explanation: 'İlk cümlenin öznesi olan \"herkesin düşüncesine\" kısmı ikinci cümleye uymaz. İkinci cümlenin öznesi eksiktir, \"kimse (veya kimsenin düşüncesi)\" getirilmelidir.'
      },
      {
        id: 'q-ab-1-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliğinden kaynaklanan anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Kitabını masada unuttu ve bir daha bulamadı.' },
          { id: 'B', text: 'Ona çok güvenir ve her zaman desteklerdi.' },
          { id: 'C', text: 'Babasını çok sever, her bayram ziyaret ederdi.' },
          { id: 'D', text: 'Kardeşine kızdı, bir daha konuşmadı.' },
          { id: 'E', text: 'Arkadaşlarına yardım eder, her fırsatta korurdu.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Ona çok güvenir ve (onu) her zaman desteklerdi.\" cümlesinde ikinci yüklemin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-1-14',
        difficulty: 'medium',
        questionText: '\"Siyasi ve ekonomi alanında yapılan reformlar etkisini gösterdi.\" cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Tamlama yanlışlığı' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Gereksiz sözcük kullanımı' },
          { id: 'D', text: 'Ek fiil eksikliği' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Siyasi alanında\" denmez. Doğrusu: \"Siyasi alanda ve ekonomi alanında\" şeklinde tamlamanın ayrılması gerekir. Tamlama yanlışlığı vardır.'
      },
      {
        id: 'q-ab-1-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç (yer tamlayıcısı) eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Köyünü çok özlüyor, bir an önce gitmek istiyordu.' },
          { id: 'B', text: 'Dosyaları inceledi ve müdüre teslim etti.' },
          { id: 'C', text: 'Kitabı okudum ve çok beğendim.' },
          { id: 'D', text: 'Bana yardım ettiler, çok teşekkür ettim.' },
          { id: 'E', text: 'Odanın temizliğini yaptı ve havalandırdı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Köyünü çok özlüyor, bir an önce (oraya / köye) gitmek istiyordu.\" İkinci cümlede dolaylı tümleç eksiktir.'
      },
      {
        id: 'q-ab-1-16',
        difficulty: 'medium',
        questionText: '\"Birçok sanatçılarımız, edebiyatımızın gelişmesi için çaba harcamıştır.\" cümlesindeki anlatım bozukluğunu gidermek için aşağıdakilerden hangisi yapılmalıdır?',
        options: [
          { id: 'A', text: '\"Birçok\" sözcüğü atılmalıdır.' },
          { id: 'B', text: '\"sanatçılarımız\" sözcüğündeki çoğul eki atılmalıdır.' },
          { id: 'C', text: '\"edebiyatımızın\" yerine \"edebiyat\" yazılmalıdır.' },
          { id: 'D', text: '\"gelişmesi için\" yerine \"gelişmesine\" yazılmalıdır.' },
          { id: 'E', text: '\"harcamıştır\" yerine \"harcamışlardır\" yazılmalıdır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Belgisiz sıfat olan \"birçok\" kelimesi çokluk bildirdiği için isim çoğul eki almaz. Doğrusu \"Birçok sanatçımız\" olmalıdır.'
      },
      {
        id: 'q-ab-1-17',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası ve sıralama yanlışlığı vardır?',
        options: [
          { id: 'A', text: 'Bırak patates doğramayı, yemek bile yapamaz o.' },
          { id: 'B', text: 'Gelecek yıl okulu bitirirsem tatile çıkacağım.' },
          { id: 'C', text: 'Önümüzdeki hafta sınav sonuçları açıklanabilir.' },
          { id: 'D', text: 'Adam sevinçten ne yapacağını bilemedi.' },
          { id: 'E', text: 'Bugünlerde havalar iyice soğumaya başladı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bırak yemek yapmayı, patates bile doğrayamaz o.\" şeklinde olmalıdır. Zor olandan kolay olana doğru bir mantık hatası yapılmıştır.'
      },
      {
        id: 'q-ab-1-18',
        difficulty: 'medium',
        questionText: '\"Yemekleri ben, tatlıları ise kardeşim hazırladı.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Yüklem eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Ek fiil eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Yemekleri ben hazırladım, tatlıları ise kardeşim hazırladı.\" olmalıdır. Ortak yüklem kullanımı, birinci cümledeki özne ile uyuşmamaktadır (ben hazırladı olmaz).'
      },
      {
        id: 'q-ab-1-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde çatı uyuşmazlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Evler temizlenip boya yapıldı.' },
          { id: 'B', text: 'Soruları dikkatlice okuyarak cevapladı.' },
          { id: 'C', text: 'Çocuklar bahçede oyun oynarken birden yağmur başladı.' },
          { id: 'D', text: 'Bütün hazırlıklar tamamlanıp yola çıktık.' },
          { id: 'E', text: 'Toplantı salonuna girildi ve herkes yerine oturdu.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Tamamlanıp\" edilgen, \"çıktık\" etken çatılıdır. \"Tamamlayıp yola çıktık\" veya \"Tamamlanıp yola çıkıldı\" olmalıdır.'
      },
      {
        id: 'q-ab-1-20',
        difficulty: 'medium',
        questionText: '\"Herkes onu suçluyor, onu savunmuyordu.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilebilir?',
        options: [
          { id: 'A', text: '\"Herkes\" kelimesinden sonra \"hiç kimse\" getirilerek' },
          { id: 'B', text: '\"onu\" kelimelerinden biri atılarak' },
          { id: 'C', text: 'Virgülden sonra \"kimse\" kelimesi getirilerek' },
          { id: 'D', text: '\"suçluyor\" yerine \"suçluyordu\" getirilerek' },
          { id: 'E', text: '\"savunmuyordu\" yerine \"savunuyordu\" getirilerek' }
        ],
        correctOptionId: 'C',
        explanation: 'Olumlu bir özne olan \"herkes\", olumsuz bir yüklem olan \"savunmuyordu\" fiili ile kullanılamaz. İkinci cümlenin öznesi \"kimse\" veya \"hiç kimse\" olmalıdır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-1-zor',
    title: 'Anlatım Bozuklukları 1 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (1-10)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-ab-1-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek yanlışlığı veya eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Bu yazarımızın en sevdiğim özelliği, olayları tarafsız anlatmasıdır.' },
          { id: 'B', text: 'Son okuduğum kitap, dönemin siyasi yapısına ışık tutuyor.' },
          { id: 'C', text: 'Öğrenciler, okumanın onlara kazandıracağı yararları bilmelidir.' },
          { id: 'D', text: 'Bizim amacımız sınavı kazanmak ve iyi bir üniversiteye gitmek istiyoruz.' },
          { id: 'E', text: 'Ahmet Bey\'in başarısının sırrı, düzenli çalışmasından kaynaklanıyor.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Sırrı... çalışmasıdır\" ya da \"Başarısı... çalışmasından kaynaklanıyor\" olmalıdır. \"Sırrı... kaynaklanıyor\" ifadesinde ek ve kullanım bozukluğu vardır.'
      },
      {
        id: 'q-ab-1-22',
        difficulty: 'hard',
        questionText: '\"Gazetelerde çıkan bu haberler, halkın paniğe kapılmasına ve endişe etmesine yol açtı.\" cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği' },
          { id: 'E', text: 'Anlatım bozukluğu yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu cümlede herhangi bir anlatım bozukluğu bulunmamaktadır. Dil bilgisi ve anlam açısından doğru bir cümledir.'
      },
      {
        id: 'q-ab-1-23',
        difficulty: 'hard',
        questionText: '\"Fiyatların yüksekliği yüzünden satışlar geçen yıla oranla azaldı.\" cümlesinde altı çizili sözcükte anlatım bozukluğu yoktur; ancak aşağıdaki cümlelerin hangisinde buna benzer bir kelime kullanım hatası yapılmıştır?',
        options: [
          { id: 'A', text: 'Elmaların fiyatı çok pahalı olduğu için almadım.' },
          { id: 'B', text: 'Arabanın ücretini peşin olarak ödedi.' },
          { id: 'C', text: 'Maaşının azlığından sürekli şikayet ediyordu.' },
          { id: 'D', text: 'Tiyatro biletleri çok uygun fiyatlıydı.' },
          { id: 'E', text: 'Kitapların sayısının fazla olması taşımayı zorlaştırdı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Fiyat \"yüksek\" veya \"düşük\" olur; \"pahalı\" veya \"ucuz\" olan üründür. \"Elmaların fiyatı çok pahalı\" ifadesi yanlıştır, \"Elmalar çok pahalı\" veya \"Elmaların fiyatı çok yüksek\" olmalıdır.'
      },
      {
        id: 'q-ab-1-24',
        difficulty: 'hard',
        questionText: '\"Öğretmen, öğrencilerin sorunlarını dinler, çözüm yolu bulmaya çalışırdı.\" cümlesindeki virgülün yerine \"ve\" bağlacı getirildiğinde oluşan anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Dolaylı tümleç eksikliği' },
          { id: 'D', text: 'Zarf tümleci eksikliği' },
          { id: 'E', text: 'Yüklem eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Öğrencilerin sorunlarını dinler ve (onlara / bu sorunlara) çözüm yolu bulmaya çalışırdı.\" Dolaylı tümleç eksikliği ortaya çıkar.'
      },
      {
        id: 'q-ab-1-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik ekinin gereksiz kullanılmasından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Onun da bizimle birlikte gelmesini isterdim.' },
          { id: 'B', text: 'Yemek yapmasını pek beceremez.' },
          { id: 'C', text: 'Sınavı kazandığını duyunca çok mutlu oldum.' },
          { id: 'D', text: 'Yeni evinizin hayırlı olmasını dilerim.' },
          { id: 'E', text: 'Benim söyleyeceklerim şimdilik bu kadar.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yemek yapmayı pek beceremez\" olmalıdır. \"Yemek yapması-n-ı\" şeklinde üçüncü tekil şahıs iyelik eki gereksiz kullanılmıştır.'
      },
      {
        id: 'q-ab-1-26',
        difficulty: 'hard',
        questionText: '\"Dünkü maçta bizim takım rakibine yenilerek mağlup oldu.\" cümlesindeki anlatım bozukluğunu düzeltmek için aşağıdakilerden hangisi yapılmalıdır?',
        options: [
          { id: 'A', text: '\"Dünkü maçta\" yerine \"Dün oynanan maçta\" yazılmalıdır.' },
          { id: 'B', text: '\"bizim\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'C', text: '\"rakibine\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'D', text: '\"yenilerek\" sözcüğü cümleden çıkarılmalıdır.' },
          { id: 'E', text: '\"mağlup oldu\" yerine \"yenildi\" yazılmalıdır.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Yenilmek\" ve \"mağlup olmak\" aynı anlamdadır. \"Yenilerek mağlup oldu\" gereksiz sözcük kullanımıdır.'
      },
      {
        id: 'q-ab-1-27',
        difficulty: 'hard',
        questionText: '\"Hiçbiri bu karara itiraz etmedi, aksine memnuniyetle kabul etti.\" cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Yüklem eksikliği' },
          { id: 'E', text: 'Bağlaç yanlışı' }
        ],
        correctOptionId: 'B',
        explanation: 'İkinci cümlenin yüklemi olumlu (kabul etti) olduğu için öznesi \"hepsi\" veya \"herkes\" olmalıdır. \"Hiçbiri\" öznesi ikinci cümleye uymaz, özne eksikliği vardır.'
      },
      {
        id: 'q-ab-1-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Yolculuk boyunca pencereden dışarıyı izledi.' },
          { id: 'B', text: 'Arabasını dün akşam kapının önünden çalmışlar.' },
          { id: 'C', text: 'Yeni aldığı elbiseyi dün geceki davette giydi.' },
          { id: 'D', text: 'Bahçedeki çiçekleri her sabah özenle sulardı.' },
          { id: 'E', text: 'Sorunları çözmek için yeni bir yöntem denedi.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Senin arabanı mı?\" yoksa \"Onun arabasını mı?\" belli değildir. Tamlayan eksikliği anlam belirsizliği yaratmıştır.'
      },
      {
        id: 'q-ab-1-29',
        difficulty: 'hard',
        questionText: '\"Yolcuların birçoğu uyuyor, bazıları ise kitap okuyorlardı.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Dolaylı tümleç eksikliği' },
          { id: 'D', text: 'Ek fiil eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bazıları\" belgisiz zamiri özne olduğunda, yüklem tekil olmalıdır. \"Kitap okuyordu\" olmalıdır.'
      },
      {
        id: 'q-ab-1-30',
        difficulty: 'hard',
        questionText: '\"Bu roman, hem edebi hem de kurgu açısından oldukça başarılı bir eserdir.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilebilir?',
        options: [
          { id: 'A', text: '\"Bu roman\" yerine \"Bu kitap\" yazarak' },
          { id: 'B', text: '\"edebi\" kelimesinden sonra \"açıdan\" kelimesi getirerek' },
          { id: 'C', text: '\"kurgu açısından\" yerine \"kurgusuyla\" yazarak' },
          { id: 'D', text: '\"başarılı\" yerine \"güzel\" yazarak' },
          { id: 'E', text: '\"eserdir\" kelimesinden ek fiili atarak' }
        ],
        correctOptionId: 'B',
        explanation: '\"Edebi açısından\" denilemeyeceği için tamlama hatası vardır. \"Hem edebi açıdan hem de kurgu açısından\" şeklinde düzeltilmelidir.'
      }
    ]
  }
];
