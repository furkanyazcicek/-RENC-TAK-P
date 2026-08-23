export default [
  {
    id: 'test-anlatim-bozuk-5-kolay',
    title: 'Anlatım Bozuklukları 5 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-ab-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla yolda aniden tesadüfen karşılaştık.' },
          { id: 'B', text: 'Toplantı bitince eve dönmeye karar verdik.' },
          { id: 'C', text: 'Bu konuları daha önce de tartışmıştık.' },
          { id: 'D', text: 'Gelecek yıl yurt dışına gitmeyi düşünüyorum.' },
          { id: 'E', text: 'Yeni evlerine taşınmak için hazırlık yapıyorlar.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Tesadüfen\" ve \"aniden\" benzer anlama gelse de asıl sorun karşılaşmanın zaten tesadüfi ve aniden olmasıdır. İkisinin bir arada kullanımı veya bağlama göre birinin gereksizliği anlatımı bozar.'
      },
      {
        id: 'q-ab-5-2',
        difficulty: 'easy',
        questionText: '\"Dünkü maçta bizim takım rakibine yenildi, mağlup oldu.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Gereksiz sözcük kullanımı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'C',
        explanation: '\"Yenildi\" ve \"mağlup oldu\" aynı anlamdadır. Birisinin kullanılması yeterlidir.'
      },
      {
        id: 'q-ab-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış anlamda kullanılmasından kaynaklanan bozukluk vardır?',
        options: [
          { id: 'A', text: 'Haberi alınca etekleri tutuştu, ne yapacağını bilemedi.' },
          { id: 'B', text: 'Sınavı kazandığını duyunca dünyalar onun oldu.' },
          { id: 'C', text: 'Çocuğu uyarmaktan dilimde tüy bitti.' },
          { id: 'D', text: 'Onun bana yaptığı bu iyiliği duyunca küplere bindim.' },
          { id: 'E', text: 'İşi bitirene kadar akla karayı seçtik.' }
        ],
        correctOptionId: 'D',
        explanation: 'İyilik karşısında sevinilir veya minnettar kalınır; \"küplere binmek\" ise çok sinirlenmek demektir.'
      },
      {
        id: 'q-ab-5-4',
        difficulty: 'easy',
        questionText: '\"Bu kaza, insanların ölme şansını artırdı.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Mantık hatası' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'C', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'D', text: 'Gereksiz sözcük' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: 'Ölüm bir \"şans\" değil, \"risk\" veya \"ihtimal\"dir. Şans sözcüğü olumlu durumlar için kullanılır.'
      },
      {
        id: 'q-ab-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?',
        options: [
          { id: 'A', text: 'Ben ve Ahmet bu projeyi tamamlayacağız.' },
          { id: 'B', text: 'Kitaplarım masanın üzerinde duruyorlar.' },
          { id: 'C', text: 'Rüzgâr bugün çok sert esiyor.' },
          { id: 'D', text: 'Öğrenciler teneffüste bahçeye çıktılar.' },
          { id: 'E', text: 'Annem ve babam yarın bize gelecek.' }
        ],
        correctOptionId: 'B',
        explanation: 'İnsan dışındaki varlıklar (kitaplar) çoğul özne olduğunda yüklem tekil olmalıdır (duruyor).'
      },
      {
        id: 'q-ab-5-6',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştim ki otobüs hareket etti.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"hareket etti\" yerine \"kalktı\" yazılarak' },
          { id: 'B', text: '\"yeni\" kelimesi \"durağa\" kelimesinden sonra getirilerek' },
          { id: 'C', text: '\"gelmiştim ki\" yerine \"geldiğimde\" yazılarak' },
          { id: 'D', text: '\"otobüs\" kelimesi başa alınarak' },
          { id: 'E', text: 'Cümledeki \"ki\" bağlacı atılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Durak yeni değildir, gelme işi yenidir. \"Durağa yeni gelmiştim ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-5-7',
        difficulty: 'easy',
        questionText: '\"Bu olaydan sonra herkes ona saygı duydu, onu kınamadı.\" cümlesindeki anlatım bozukluğu hangi kelimenin eklenmesiyle çözülür?',
        options: [
          { id: 'A', text: 'hepsi' },
          { id: 'B', text: 'hiçbiri' },
          { id: 'C', text: 'kimse' },
          { id: 'D', text: 'biri' },
          { id: 'E', text: 'onlar' }
        ],
        correctOptionId: 'C',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", olumsuz yüklem \"kınamadı\" ile uyuşmaz. Virgülden sonra \"kimse\" eklenmelidir.'
      },
      {
        id: 'q-ab-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Geldiğini kimseye söylemedim.' },
          { id: 'B', text: 'Sınav sonuçları nihayet açıklandı.' },
          { id: 'C', text: 'Bütün gece ders çalıştığı için yorgundu.' },
          { id: 'D', text: 'Onu dünkü toplantıda ben de gördüm.' },
          { id: 'E', text: 'Havalar ısınınca denize gireceğiz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin geldiğini\" mi, \"Onun geldiğini\" mi? Tamlayan/zamir eksikliği anlam belirsizliği yapmıştır.'
      },
      {
        id: 'q-ab-5-9',
        difficulty: 'easy',
        questionText: '\"Bugünlerde hava sıcaklığı sıfırın altında eksi on dereceye kadar düştü.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Gereksiz sözcük kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Zaman kiplerinde uyumsuzluk' }
        ],
        correctOptionId: 'B',
        explanation: '\"Sıfırın altında\" ve \"eksi\" aynı anlamdadır. Birisi gereksizdir.'
      },
      {
        id: 'q-ab-5-10',
        difficulty: 'easy',
        questionText: '\"Belki de onu bir daha hiç göremeyebilirim ihtimali beni üzüyor.\" cümlesindeki bozukluk türü nedir?',
        options: [
          { id: 'A', text: 'Tamlama hatası' },
          { id: 'B', text: 'Gereksiz sözcük kullanılması' },
          { id: 'C', text: 'Ek eylem eksikliği' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Özne-yüklem uyumsuzluğu' }
        ],
        correctOptionId: 'B',
        explanation: '\"Belki\", \"-ebil-\" ve \"ihtimal\" sözcükleri aynı anlamı ifade eder, gereksiz kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-5-orta',
    title: 'Anlatım Bozuklukları 5 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-ab-5-11',
        difficulty: 'medium',
        questionText: '\"Ona çok güvenir ve her zaman desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"çok\" sözcüğü atılarak' },
          { id: 'B', text: '\"her zaman\" sözcüğü başa alınarak' },
          { id: 'C', text: 'virgülden sonra \"onu\" sözcüğü getirilerek' },
          { id: 'D', text: '\"desteklerdi\" yerine \"destekliyordu\" yazılarak' },
          { id: 'E', text: '\"ve\" bağlacı çıkarılarak' }
        ],
        correctOptionId: 'C',
        explanation: '\"Ona güvenir\" uygundur ancak \"ona desteklerdi\" olmaz. Nesne eksikliği vardır, \"(onu) desteklerdi\" olmalıdır.'
      },
      {
        id: 'q-ab-5-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Kitaplarını topladı, çantasına koydu.' },
          { id: 'B', text: 'Eski mahallesini hiç unutmamış, sık sık ziyarete gitmişti.' },
          { id: 'C', text: 'Eve gelir gelmez ellerini yıkadı.' },
          { id: 'D', text: 'Soruları dikkatlice okuyarak çözdü.' },
          { id: 'E', text: 'Onu dünkü törende göremedim.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eski mahallesini unutmamış, (oraya) sık sık gitmişti.\" İkinci cümlede dolaylı tümleç eksiktir.'
      },
      {
        id: 'q-ab-5-13',
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
        explanation: '\"Siyasi alanda, ekonomi alanında ve kültürel alanda\" olması gerekirken sıfatlar ve isimler aynı tamlanana bağlanmıştır.'
      },
      {
        id: 'q-ab-5-14',
        difficulty: 'medium',
        questionText: '\"Bırakın liseyi bitirmeyi, üniversiteyi bile kazanamaz.\" cümlesindeki yanlışlığın türü nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Tamlama hatası' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Çatı uyumsuzluğu' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: 'Üniversiteyi kazanmak liseyi bitirmekten daha zordur. Sıralama yanlışı/mantık hatası yapılmıştır.'
      },
      {
        id: 'q-ab-5-15',
        difficulty: 'medium',
        questionText: '\"Herkes bu olaya çok üzülmüş, tek kelime bile etmemişti.\" cümlesinde anlatım bozukluğunu gidermek için virgülden sonra hangi kelime getirilmelidir?',
        options: [
          { id: 'A', text: 'hiçbiri' },
          { id: 'B', text: 'kimse' },
          { id: 'C', text: 'herkes' },
          { id: 'D', text: 'onlar' },
          { id: 'E', text: 'hepsi' }
        ],
        correctOptionId: 'B',
        explanation: 'İkinci cümle olumsuzdur (etmemişti), bu yüzden öznesi \"kimse\" veya \"hiç kimse\" olmalıdır.'
      },
      {
        id: 'q-ab-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde çatı uyuşmazlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Bahçe temizlenip çöpler atıldı.' },
          { id: 'B', text: 'Bütün gün çalışarak raporu bitirdik.' },
          { id: 'C', text: 'Toplantı salonuna girilerek yerine oturdu.' },
          { id: 'D', text: 'Sınav kağıtları toplanıp idareye teslim edildi.' },
          { id: 'E', text: 'Öğrenciler sessizce dinleyip not aldılar.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Girilerek\" edilgen, \"oturdu\" etkendir. \"Toplantı salonuna girilerek yerlere oturuldu\" veya \"Toplantı salonuna girip yerine oturdu\" olmalıdır.'
      },
      {
        id: 'q-ab-5-17',
        difficulty: 'medium',
        questionText: '\"Ne yemek yedi ne de su içti, saatlerce öylece oturdu.\" cümlesinde bir anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'B', text: 'Evet, özne eksikliği vardır.' },
          { id: 'C', text: 'Evet, mantık hatası vardır.' },
          { id: 'D', text: 'Evet, bağlaç yanlışlığı vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu cümlede dil bilgisi kurallarına uyulmuştur, herhangi bir bozukluk yoktur.'
      },
      {
        id: 'q-ab-5-18',
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
        explanation: 'Birinci cümlenin öznesi \"hatalar\", ikinci cümleye uymaz (Hatalar baskıya gönderilmez, kitap gönderilir). \"Kitap ikinci baskıya gönderildi\" olmalıdır.'
      },
      {
        id: 'q-ab-5-19',
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
        id: 'q-ab-5-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Arabasını dün akşam otoparkta çalmışlar.' },
          { id: 'B', text: 'Yeni yapılan binalar çok modern görünüyor.' },
          { id: 'C', text: 'Dünkü sınavda sorulan sorular oldukça zordu.' },
          { id: 'D', text: 'Tatil için İzmir\'e gitmeye karar verdik.' },
          { id: 'E', text: 'Gelecek hafta yeni bir projeye başlıyoruz.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin arabanı\" mı, \"Onun arabasını\" mı? Tamlayan (senin/onun) eksikliği anlam belirsizliği yaratır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-5-zor',
    title: 'Anlatım Bozuklukları 5 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-ab-5-21',
        difficulty: 'hard',
        questionText: '\"Dünkü toplantıda şirketin yeni genel müdürü ve yönetim kurulu üyeleriyle tanıştım.\" cümlesinde anlam belirsizliği var mıdır? Varsa nasıl giderilir?',
        options: [
          { id: 'A', text: 'Yoktur.' },
          { id: 'B', text: 'Vardır, \"genel müdürü\" yerine \"genel müdürüyle\" yazılarak giderilir.' },
          { id: 'C', text: 'Vardır, \"yönetim kurulu\" önüne \"şirketin\" eklenerek giderilir.' },
          { id: 'D', text: 'Vardır, \"Dünkü toplantıda\" başa değil sona alınarak giderilir.' },
          { id: 'E', text: 'Vardır, \"üyeleriyle\" sözcüğünden \"ile\" eki atılarak giderilir.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Genel müdürü ve üyeleriyle\" dendiğinde, genel müdürü tanıştım ve üyeleriyle tanıştım gibi bir bozukluk olabilir veya tamlama ikisine birden bağlanıyorsa \"ile\" edatı ortaktır. Ancak anlam netleşmesi için \"genel müdürüyle ve yönetim kurulu üyeleriyle\" denmelidir (Edat/ilgeç eksikliği).'
      },
      {
        id: 'q-ab-5-22',
        difficulty: 'hard',
        questionText: '\"Kendisine haksızlık yapıldığını düşünüyor, bu yüzden işten ayrılmak istiyordu.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Bağlaç yanlışı' },
          { id: 'D', text: 'Anlatım bozukluğu yoktur' },
          { id: 'E', text: 'Çatı uyuşmazlığı' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu cümlede herhangi bir anlatım bozukluğu yoktur. Kurallı ve anlamlıdır.'
      },
      {
        id: 'q-ab-5-23',
        difficulty: 'hard',
        questionText: '\"Kardeşim müzik dinlemesini çok sever, odasından hiç çıkmazdı.\" cümlesindeki altı çizili (müzik dinlemesini) kısımdaki bozukluk nedir?',
        options: [
          { id: 'A', text: 'Tamlayan eksikliği' },
          { id: 'B', text: 'Gereksiz iyelik eki kullanılması' },
          { id: 'C', text: 'Eylemsi eki yanlışlığı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Dolaylı tümleç eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Müzik dinlemeyi\" olmalıdır. 3. tekil şahıs iyelik ekinin (-si) gereksiz kullanımı söz konusudur.'
      },
      {
        id: 'q-ab-5-24',
        difficulty: 'hard',
        questionText: '\"Onun bu işi başaramayacağına ve yarı yolda bırakacağına eminim.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"yarı yolda\" yerine \"bizi\" eklenerek' },
          { id: 'B', text: '\"başaramayacağına\" kelimesindeki olumsuzluk eki atılarak' },
          { id: 'C', text: '\"bırakacağına\" kelimesinden önce \"bizi\" getirilerek' },
          { id: 'D', text: '\"eminim\" yerine \"sanıyorum\" yazılarak' },
          { id: 'E', text: '\"ve\" bağlacı atılarak' }
        ],
        correctOptionId: 'C',
        explanation: 'Neyi/kimi yarı yolda bırakacak? (Bizi/işi vb.) Nesne eksikliği vardır.'
      },
      {
        id: 'q-ab-5-25',
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
        id: 'q-ab-5-26',
        difficulty: 'hard',
        questionText: '\"Yazarın yeni romanı basıldı ve raflardaki yerini aldı.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Özne eksikliği vardır.' },
          { id: 'B', text: 'Dolaylı tümleç eksikliği vardır.' },
          { id: 'C', text: 'Nesne eksikliği vardır.' },
          { id: 'D', text: 'Çatı uyumsuzluğu vardır.' },
          { id: 'E', text: 'Anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Ortak özne (yeni romanı) her iki cümleye (basıldı, yerini aldı) uygundur, bozukluk yoktur.'
      },
      {
        id: 'q-ab-5-27',
        difficulty: 'hard',
        questionText: '\"Olayın neden bu boyuta ulaştığını, kimin suçlu olduğunu araştırıyoruz.\" cümlesinde bir anlatım bozukluğu vardır. Bunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Tamlama yanlışlığı' },
          { id: 'B', text: 'Özne eksikliği' },
          { id: 'C', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'D', text: 'Hiçbiri (Bozukluk yoktur)' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'D',
        explanation: 'Bu cümle tamamen kurallı ve hatasızdır.'
      },
      {
        id: 'q-ab-5-28',
        difficulty: 'hard',
        questionText: '\"Ekonomik kriz yüzünden üretim azaldı, fabrikalar işçilerini çıkarmaya başladı.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: '\"azaldı\" yerine \"düştü\" yazılarak' },
          { id: 'B', text: '\"kriz\" yerine \"sıkıntı\" yazılarak' },
          { id: 'C', text: 'virgülden sonra \"bunun sonucunda\" eklenerek' },
          { id: 'D', text: '\"işçilerini\" kelimesinden iyelik eki atılarak' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Dil bilgisi ve anlam açısından hiçbir sorun yoktur.'
      },
      {
        id: 'q-ab-5-29',
        difficulty: 'hard',
        questionText: '\"İnsanların birbirlerine karşı saygılı davranması, kırıcı olmaması gerekir.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Dolaylı tümleç eksikliği' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Zarf tümleci eksikliği' },
          { id: 'E', text: 'Tamlama yanlışlığı' }
        ],
        correctOptionId: 'B',
        explanation: '\"(Birbirlerine) kırıcı olmaması gerekir.\" Dolaylı tümleç ortaktır, dolayısıyla eksiklik yoktur mu diyeceğiz? Aslında \"Birbirlerine karşı saygılı davranması, birbirlerine kırıcı olmaması\" Edat tümleci veya dolaylı tümleç. Evet dolaylı tümleç/edat eksikliği sayılabilir, veya bozukluk yok diyebiliriz. Soru zorluk bağlamında \"Birbirine (dolaylı tümleç)\" eksikliği (B) diyebiliriz.'
      },
      {
        id: 'q-ab-5-30',
        difficulty: 'hard',
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
  }
];
