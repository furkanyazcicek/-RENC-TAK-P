export default [
  {
    id: 'test-anlatim-bozuk-14-kolay',
    title: 'Anlatım Bozuklukları 14 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (131-140)',
    type: 'comprehension',
    order: 40,
    questions: [
      {
        id: 'q-ab-14-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla yolda aniden tesadüfen karşılaştık.' },
          { id: 'B', text: 'Sabahattin Ali\'nin kitaplarını çok severim.' },
          { id: 'C', text: 'Okuldaki arkadaşlarıyla arası çok iyiydi.' },
          { id: 'D', text: 'Yeni aldığı ev oldukça büyük ve ferahtı.' },
          { id: 'E', text: 'Tatil planlarını şimdiden yapmaya başladılar.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Tesadüfen\" karşılaşmak zaten aniden/planlanmamış olan bir şeydir. İkisinin bir arada kullanımı gereksizdir. (Karşılaşmak zaten tesadüfidir, aniden ifadesi de bu durumu pekiştirse de aynı bağlamda fazla sözcüktür.)' // A bit repetitive with batch 1, let me change this. Wait, I will just let it be, but technically it's a good easy question.
      },
      {
        id: 'q-ab-14-2',
        difficulty: 'easy',
        questionText: '\"Dünkü sınavda bizim sınıf rakibine mağlup olarak yenildi.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Özne eksikliği' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Mağlup olmak\" ve \"yenilmek\" aynı anlama gelir. Birinin kullanılması yeterlidir.'
      },
      {
        id: 'q-ab-14-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış anlamda kullanılmasından kaynaklanan bozukluk vardır?',
        options: [
          { id: 'A', text: 'Onun bana yaptığı bu iyiliği duyunca küplere bindim.' },
          { id: 'B', text: 'Çok acıktım, midem kazınıyor.' },
          { id: 'C', text: 'Sınavı kazandığını duyunca ağzı kulaklarına vardı.' },
          { id: 'D', text: 'İşi bitirene kadar akla karayı seçtik.' },
          { id: 'E', text: 'Haberi alınca etekleri tutuştu.' }
        ],
        correctOptionId: 'A',
        explanation: 'İyilik karşısında sevinilir veya minnettar kalınır; \"küplere binmek\" ise çok sinirlenmek demektir.'
      },
      {
        id: 'q-ab-14-4',
        difficulty: 'easy',
        questionText: '\"Bu kaza, yaralanma şansını çok artırdı.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'D', text: 'Gereksiz sözcük' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'A',
        explanation: 'Yaralanmak bir \"şans\" (olumlu) değil, \"risk\" veya \"ihtimal\"dir (olumsuz).'
      },
      {
        id: 'q-ab-14-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?',
        options: [
          { id: 'A', text: 'Kitaplarım dünden beri masanın üzerinde duruyorlar.' },
          { id: 'B', text: 'Rüzgâr bugün çok sert esiyor.' },
          { id: 'C', text: 'Ben ve Ahmet bu projeyi tamamlayacağız.' },
          { id: 'D', text: 'Öğrenciler teneffüste bahçeye çıktılar.' },
          { id: 'E', text: 'Annem ve babam yarın bize gelecekler.' }
        ],
        correctOptionId: 'A',
        explanation: 'İnsan dışındaki varlıklar (kitaplar) çoğul özne olduğunda kişileştirme yoksa yüklem tekil olmalıdır (duruyor).'
      },
      {
        id: 'q-ab-14-6',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştim ki otobüs hareket etti.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"yeni\" kelimesi \"durağa\" kelimesinden sonra getirilerek' },
          { id: 'B', text: '\"hareket etti\" yerine \"kalktı\" yazılarak' },
          { id: 'C', text: '\"gelmiştim ki\" yerine \"geldiğimde\" yazılarak' },
          { id: 'D', text: '\"otobüs\" kelimesi başa alınarak' },
          { id: 'E', text: 'Cümledeki \"ki\" bağlacı atılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'Durak yeni değildir, gelme işi yenidir. \"Durağa yeni gelmiştim ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-14-7',
        difficulty: 'easy',
        questionText: '\"Kendine iyi bak ki hasta olmayasın diye bize öğüt verdi.\" cümlesindeki gereksizlik nasıl giderilir?',
        options: [
          { id: 'A', text: '\"ki\" veya \"diye\" bağlaçlarından biri atılarak' },
          { id: 'B', text: '\"bize\" kelimesi atılarak' },
          { id: 'C', text: '\"öğüt verdi\" yerine \"söyledi\" yazılarak' },
          { id: 'D', text: '\"hasta\" yerine \"kötü\" yazılarak' },
          { id: 'E', text: '\"kendine\" kelimesi atılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'Aynı işleve sahip olan \"ki\" ve \"diye\" bağlaçlarının ikisini birden kullanmak gereksizdir.'
      },
      {
        id: 'q-ab-14-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (zamir eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Geldiğini hiç kimseye söylemedim.' },
          { id: 'B', text: 'Sınav sonuçları nihayet açıklandı.' },
          { id: 'C', text: 'Bütün gece ders çalıştığı için yorgundu.' },
          { id: 'D', text: 'Onu dünkü toplantıda ben de gördüm.' },
          { id: 'E', text: 'Havalar ısınınca denize gireceğiz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin geldiğini\" mi, \"Onun geldiğini\" mi? Tamlayan/zamir eksikliği anlam belirsizliği yapmıştır.'
      },
      {
        id: 'q-ab-14-9',
        difficulty: 'easy',
        questionText: '\"Kulağıma eğilerek alçak sesle bir şeyler fısıldadı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Tamlama yanlışı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Fısıldamak\" zaten alçak sesle yapılır. \"Alçak sesle\" ifadesi gereksizdir.'
      },
      {
        id: 'q-ab-14-10',
        difficulty: 'easy',
        questionText: '\"Belki de onu bir daha hiç göremeyebilirim ihtimali beni üzüyor.\" cümlesindeki bozukluk türü nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanılması' },
          { id: 'B', text: 'Tamlama hatası' },
          { id: 'C', text: 'Ek eylem eksikliği' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Özne-yüklem uyumsuzluğu' }
        ],
        correctOptionId: 'A',
        explanation: '\"Belki\", \"-ebil-\" ve \"ihtimal\" sözcükleri aynı anlamı ifade eder, bir arada kullanımları gereksizdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-14-orta',
    title: 'Anlatım Bozuklukları 14 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (131-140)',
    type: 'comprehension',
    order: 41,
    questions: [
      {
        id: 'q-ab-14-11',
        difficulty: 'medium',
        questionText: '\"Ona çok güvenir ve her zaman desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"onu\" sözcüğü getirilerek' },
          { id: 'B', text: '\"çok\" sözcüğü atılarak' },
          { id: 'C', text: '\"her zaman\" sözcüğü başa alınarak' },
          { id: 'D', text: '\"desteklerdi\" yerine \"destekliyordu\" yazılarak' },
          { id: 'E', text: '\"ve\" bağlacı çıkarılarak' }
        ],
        correctOptionId: 'A',
        explanation: '\"Ona güvenir\" uygundur ancak \"ona desteklerdi\" olmaz. Nesne eksikliği vardır, \"(onu) desteklerdi\" olmalıdır.'
      },
      {
        id: 'q-ab-14-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Eski mahallesini hiç unutmamış, sık sık ziyarete gitmişti.' },
          { id: 'B', text: 'Kitaplarını topladı, çantasına koydu.' },
          { id: 'C', text: 'Eve gelir gelmez ellerini yıkadı.' },
          { id: 'D', text: 'Soruları dikkatlice okuyarak çözdü.' },
          { id: 'E', text: 'Onu dünkü törende göremedim.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Eski mahallesini unutmamış, (oraya) sık sık gitmişti.\" İkinci cümlede dolaylı tümleç eksiktir.'
      },
      {
        id: 'q-ab-14-13',
        difficulty: 'medium',
        questionText: '\"Siyasi, ekonomi ve kültürel alanda önemli adımlar atılacak.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Tamlama yanlışlığı' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Bağlaç hatası' }
        ],
        correctOptionId: 'A',
        explanation: '\"Siyasi alanda, ekonomi alanında ve kültürel alanda\" olması gerekirken sıfatlar ve isim aynı tamlanana bağlanmıştır.'
      },
      {
        id: 'q-ab-14-14',
        difficulty: 'medium',
        questionText: '\"Bırakın liseyi bitirmeyi, üniversiteyi bile kazanamaz.\" cümlesindeki yanlışlığın türü nedir?',
        options: [
          { id: 'A', text: 'Mantık hatası' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Tamlama hatası' },
          { id: 'D', text: 'Çatı uyumsuzluğu' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'A',
        explanation: 'Üniversiteyi kazanmak liseyi bitirmekten daha zordur. Sıralama yanlışı/mantık hatası yapılmıştır.'
      },
      {
        id: 'q-ab-14-15',
        difficulty: 'medium',
        questionText: '\"Herkes bu olaya çok üzülmüş, tek kelime bile etmemişti.\" cümlesinde anlatım bozukluğunu gidermek için virgülden sonra hangi kelime getirilmelidir?',
        options: [
          { id: 'A', text: 'kimse' },
          { id: 'B', text: 'hiçbiri' },
          { id: 'C', text: 'herkes' },
          { id: 'D', text: 'onlar' },
          { id: 'E', text: 'hepsi' }
        ],
        correctOptionId: 'A',
        explanation: 'İkinci cümle olumsuzdur (etmemişti), bu yüzden öznesi \"kimse\" veya \"hiç kimse\" olmalıdır.'
      },
      {
        id: 'q-ab-14-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde çatı uyuşmazlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Toplantı salonuna girilerek yerine oturdu.' },
          { id: 'B', text: 'Bütün gün çalışarak raporu bitirdik.' },
          { id: 'C', text: 'Bahçe temizlenip çöpler atıldı.' },
          { id: 'D', text: 'Sınav kağıtları toplanıp idareye teslim edildi.' },
          { id: 'E', text: 'Öğrenciler sessizce dinleyip not aldılar.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Girilerek\" edilgen, \"oturdu\" etkendir. \"Toplantı salonuna girilerek yerlere oturuldu\" veya \"Toplantı salonuna girip yerine oturdu\" olmalıdır.'
      },
      {
        id: 'q-ab-14-17',
        difficulty: 'medium',
        questionText: '\"Kitaptaki hatalar düzeltildi ve ikinci baskıya gönderildi.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Yüklem eksikliği' },
          { id: 'D', text: 'Dolaylı tümleç eksikliği' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: 'Birinci cümlenin öznesi \"hatalar\", ikinci cümleye uymaz. Hatalar baskıya gönderilmez, \"kitap\" gönderilir. (Kitap ikinci baskıya gönderildi) - Özne eksikliği.'
      },
      {
        id: 'q-ab-14-18',
        difficulty: 'medium',
        questionText: '\"Hiç şüphesiz bu yılki yarışmayı da o kazanabilir.\" cümlesindeki anlatım bozukluğunun türü aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Mantık hatası' },
          { id: 'E', text: 'Sözcüğün yanlış yerde kullanımı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Hiç şüphesiz\" kesinlik bildirirken, \"kazanabilir\" ihtimal bildirir.'
      },
      {
        id: 'q-ab-14-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz ek kullanımından (iyelik eki) kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Otomobil kullanmasını çok iyi biliyor.' },
          { id: 'B', text: 'Öğrencinin ders çalışması gerekir.' },
          { id: 'C', text: 'Bugün hava sıcaklığı oldukça düşüktü.' },
          { id: 'D', text: 'Tatil için İzmir\'e gitmeye karar verdik.' },
          { id: 'E', text: 'Gelecek hafta yeni bir projeye başlıyoruz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Otomobil kullanmayı\" olmalıdır. (Kullanma-sı-nı) iyelik eki gereksiz kullanılmıştır.'
      },
      {
        id: 'q-ab-14-20',
        difficulty: 'medium',
        questionText: '\"Onunla ne kadar çok görüşürseniz, fikirlerinden o derece faydalanırsınız.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Evet, nesne eksikliği' },
          { id: 'C', text: 'Evet, dolaylı tümleç eksikliği' },
          { id: 'D', text: 'Evet, tamlama hatası' },
          { id: 'E', text: 'Hayır, yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle dil bilgisi kurallarına uygundur ve anlatım bozukluğu içermez.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-14-zor',
    title: 'Anlatım Bozuklukları 14 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (131-140)',
    type: 'comprehension',
    order: 42,
    questions: [
      {
        id: 'q-ab-14-21',
        difficulty: 'hard',
        questionText: '\"Dünkü toplantıda şirketin yeni müdürü ve yönetim kurulu üyeleriyle tanıştım.\" cümlesinde anlam belirsizliği var mıdır? Varsa nasıl giderilir?',
        options: [
          { id: 'A', text: 'Vardır, \"müdürü\" yerine \"müdürüyle\" yazılarak giderilir.' },
          { id: 'B', text: 'Yoktur.' },
          { id: 'C', text: 'Vardır, \"yönetim kurulu\" önüne \"şirketin\" eklenerek giderilir.' },
          { id: 'D', text: 'Vardır, \"Dünkü toplantıda\" başa değil sona alınarak giderilir.' },
          { id: 'E', text: 'Vardır, \"üyeleriyle\" sözcüğünden \"ile\" eki atılarak giderilir.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Müdürü ve üyeleriyle\" dendiğinde \"ile\" edatı ortaktır ancak anlam netleşmesi için \"müdürüyle ve yönetim kurulu üyeleriyle\" denmelidir (Edat eksikliği).'
      },
      {
        id: 'q-ab-14-22',
        difficulty: 'hard',
        questionText: '\"Kardeşim müzik dinlemesini çok sever, odasından hiç çıkmazdı.\" cümlesindeki altı çizili (müzik dinlemesini) kısımdaki bozukluk nedir?',
        options: [
          { id: 'A', text: 'Gereksiz iyelik eki kullanılması' },
          { id: 'B', text: 'Tamlayan eksikliği' },
          { id: 'C', text: 'Eylemsi eki yanlışlığı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Dolaylı tümleç eksikliği' }
        ],
        correctOptionId: 'A',
        explanation: '\"Müzik dinlemeyi\" olmalıdır. 3. tekil şahıs iyelik ekinin (-si) gereksiz kullanımı söz konusudur.'
      },
      {
        id: 'q-ab-14-23',
        difficulty: 'hard',
        questionText: '\"Onun bu işi başaramayacağına ve yarı yolda bırakacağına eminim.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"bırakacağına\" kelimesinden önce \"bizi\" veya \"işi\" getirilerek' },
          { id: 'B', text: '\"başaramayacağına\" kelimesindeki olumsuzluk eki atılarak' },
          { id: 'C', text: '\"yarı yolda\" yerine \"bizi\" eklenerek' },
          { id: 'D', text: '\"eminim\" yerine \"sanıyorum\" yazılarak' },
          { id: 'E', text: '\"ve\" bağlacı atılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'Neyi/kimi yarı yolda bırakacak? (Bizi/işi vb.) Nesne eksikliği vardır.'
      },
      {
        id: 'q-ab-14-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek fiil eksikliğinden kaynaklanan bir anlatım bozukluğu yapılmıştır?',
        options: [
          { id: 'A', text: 'Hava soğuk, yollar buzlu değildi.' },
          { id: 'B', text: 'Gözleri mavi, saçları sarıydı.' },
          { id: 'C', text: 'O zamanlar ben öğrenci, o ise öğretmendi.' },
          { id: 'D', text: 'Adam yaşlı, boyu pek uzun değildi.' },
          { id: 'E', text: 'Elleri küçük, ayakları büyüktü.' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin yüklemi (soğuk) olumlu olmalıdır ancak ek fiil düşürülünce \"soğuk değildi\" anlamı çıkar ve anlam bozulur. \"Hava soğuktu\" olmalıdır.'
      },
      {
        id: 'q-ab-14-25',
        difficulty: 'hard',
        questionText: '\"Ekonomik kriz yüzünden üretim azaldı, fabrikalar işçilerini çıkarmaya başladı.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Hayır, anlatım bozukluğu yoktur.' },
          { id: 'B', text: 'Evet, özne eksikliği vardır.' },
          { id: 'C', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'D', text: 'Evet, dolaylı tümleç eksikliği vardır.' },
          { id: 'E', text: 'Evet, tamlama hatası vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Dil bilgisi ve anlam açısından hiçbir sorun yoktur.'
      },
      {
        id: 'q-ab-14-26',
        difficulty: 'hard',
        questionText: '\"İnsanların birbirlerine karşı saygılı davranması, kırıcı olmaması gerekir.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Dolaylı tümleç eksikliği' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Zarf tümleci eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"(Birbirine) kırıcı olmaması gerekir.\" Dolaylı tümleç eksikliği vardır.'
      },
      {
        id: 'q-ab-14-27',
        difficulty: 'hard',
        questionText: '\"Olayın neden bu boyuta ulaştığını, kimin suçlu olduğunu araştırıyoruz.\" cümlesinde bir anlatım bozukluğu vardır. Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Hiçbiri (Bozukluk yoktur)' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'A',
        explanation: 'Bu cümle tamamen kurallı ve hatasızdır.'
      },
      {
        id: 'q-ab-14-28',
        difficulty: 'hard',
        questionText: '\"Yazarın yeni romanı basıldı ve raflardaki yerini aldı.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Anlatım bozukluğu yoktur.' },
          { id: 'B', text: 'Dolaylı tümleç eksikliği vardır.' },
          { id: 'C', text: 'Nesne eksikliği vardır.' },
          { id: 'D', text: 'Çatı uyumsuzluğu vardır.' },
          { id: 'E', text: 'Özne eksikliği vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Ortak özne (yeni romanı) her iki cümleye (basıldı, yerini aldı) uygundur, bozukluk yoktur.'
      },
      {
        id: 'q-ab-14-29',
        difficulty: 'hard',
        questionText: '\"Fiyatların yüksekliği yüzünden satışlar geçen yıla oranla epeyce azaldı.\" cümlesi kurallıdır. Peki, \"Elmaların fiyatı çok pahalı olduğu için almadım.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Tamlama yanlışlığı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Özne eksikliği' }
        ],
        correctOptionId: 'A',
        explanation: 'Fiyat \"pahalı\" veya \"ucuz\" olmaz; \"yüksek\" veya \"düşük\" olur.'
      },
      {
        id: 'q-ab-14-30',
        difficulty: 'hard',
        questionText: '\"Öğrenciler, okumanın onlara kazandıracağı yararları bilmeli, idrak etmelidir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"idrak etmelidir\" kelimesinden önce \"bunları\" eklenerek' },
          { id: 'B', text: '\"idrak etmelidir\" kelimesi ile nesnenin (onları) eklenmesiyle' },
          { id: 'C', text: '\"okumanın onlara\" yerine \"okumalarının\" yazılarak' },
          { id: 'D', text: '\"yararları\" kelimesinin sonundaki -ı atılarak' },
          { id: 'E', text: 'Gereksiz olan \"idrak etmelidir\" ifadesi atılarak' }
        ],
        correctOptionId: 'A',
        explanation: 'Neyi idrak etmeli? Okumanın kazandıracağı yararları. \"Bilmeli, (bunları / onları) idrak etmelidir\" - Nesne eksikliği.'
      }
    ]
  }
];
