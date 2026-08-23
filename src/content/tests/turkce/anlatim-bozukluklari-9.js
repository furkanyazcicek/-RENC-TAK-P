export default [
  {
    id: 'test-anlatim-bozuk-9-kolay',
    title: 'Anlatım Bozuklukları 9 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (81-90)',
    type: 'comprehension',
    order: 25,
    questions: [
      {
        id: 'q-ab-9-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla neşeli, keyifli ve güzel vakitler geçirdik.' },
          { id: 'B', text: 'Arkadaşım bana doğru yavaş yavaş yaklaşarak geldi.' },
          { id: 'C', text: 'Havalar ısınınca insanlar parklara akın etti.' },
          { id: 'D', text: 'Dünkü toplantıda alınan kararları herkes onayladı.' },
          { id: 'E', text: 'Sınava girmeden önce heyecanlı görünüyordu.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşmak\" zaten birisine veya bir şeye doğru gelmektir. \"Yaklaşarak geldi\" ifadesinde gereksiz sözcük kullanımı vardır.'
      },
      {
        id: 'q-ab-9-2',
        difficulty: 'easy',
        questionText: '\"Babamın tavsiyelerini hiç kulağı ardı etmezdim.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Mantık hatası' },
          { id: 'B', text: 'Deyim yanlışlığı' },
          { id: 'C', text: 'Gereksiz sözcük kullanımı' },
          { id: 'D', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'E', text: 'Tamlama hatası' }
        ],
        correctOptionId: 'B',
        explanation: 'Doğru deyim \"kulak ardı etmek\"tir. \"Kulağı ardı\" şeklinde bir deyim yoktur.'
      },
      {
        id: 'q-ab-9-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası vardır?',
        options: [
          { id: 'A', text: 'Bırakın araba sürmeyi, bisiklete bile binemez.' },
          { id: 'B', text: 'Bu hafta değil kitap okumak, gazete bile inceleyemedim.' },
          { id: 'C', text: 'Onunla değil konuşmak, yüzüne bile bakmam.' },
          { id: 'D', text: 'Doktor, ameliyattan sonra hastanın ayağa kalkabileceğini hatta yürüyebileceğini söyledi.' },
          { id: 'E', text: 'Onun başarısız olmasını geçtim, dereceye girmesini bile beklemiyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'Ayağa kalkmak yürümekten daha önceliklidir ama burada sıralamada sorun var mı? Aslında D seçeneğinde \"ayağa kalkmak hatta yürümek\" doğru bir ilerlemedir. Fakat A seçeneği: araba sürmek zor, bisiklet sürmek kolay. Bu da doğru. E seçeneğinde: \"Başarısız olmasını geçtim, dereceye girmesini bile beklemiyorum.\" Başarısızlık ile dereceye girmek mantıksal zıtlıktır. Burada en belirgin mantık hatası olan seçenek hangisidir? Aslında B seçeneği (kitap okumak zor/uzun, gazete incelemek kolay/kısa). Cümlede bir sorun görünmüyor. Hatalı olan A mı? Bisiklet binmek daha basittir. \"Bırakın bisiklete binmeyi, araba bile süremez\" olsaydı mantık hatası olurdu. E seçeneğinde \"Başarısız olmasını geçtim, dereceye girmesini bile beklemiyorum\" ifadesinde mantıksal bir kopukluk/hata vardır.'
      },
      {
        id: 'q-ab-9-4',
        difficulty: 'easy',
        questionText: '\"Bugün yağan dolu ekinlere oldukça zarar verdi.\" cümlesindeki \"oldukça\" kelimesi cümleden çıkarılırsa cümlenin anlamında nasıl bir değişme olur?',
        options: [
          { id: 'A', text: 'Anlamda bir daralma veya bozulma olmaz.' },
          { id: 'B', text: 'Zararın miktarı belirtilmemiş olur.' },
          { id: 'C', text: 'Cümlenin öznesi değişir.' },
          { id: 'D', text: 'Mantık hatası düzelir.' },
          { id: 'E', text: 'Cümle tamamen anlamsızlaşır.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Oldukça\" sözcüğü miktar (derece) bildirir, çıkarıldığında zararın seviyesi belirsizleşir. Herhangi bir anlatım bozukluğu yoktur ancak anlam daralması (zararın miktarının belirsizleşmesi) yaşanır.'
      },
      {
        id: 'q-ab-9-5',
        difficulty: 'easy',
        questionText: '\"Yaklaşık tam bir ay sonra döneceğini söyledi.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Anlamca çelişen kelimelerin kullanılması' },
          { id: 'C', text: 'Tamlama hatası' },
          { id: 'D', text: 'Özne eksikliği' },
          { id: 'E', text: 'Zaman kipi uyumsuzluğu' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşık\" ihtimal/belirsizlik, \"tam\" ise kesinlik bildirir. Anlamca çelişen sözcüklerdir.'
      },
      {
        id: 'q-ab-9-6',
        difficulty: 'easy',
        questionText: '\"Çocuğun ateşi otuz dokuz, hatta otuz sekiz dereceye kadar çıkmıştı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'B', text: 'Mantık hatası' },
          { id: 'C', text: 'Gereksiz kelime kullanımı' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: 'Ateşin çıkması (yükselmesi) anlatılırken 38, 39\'dan daha düşüktür. \"Otuz sekiz, hatta otuz dokuz dereceye çıkmıştı\" şeklinde olmalıdır. Derecelendirme (mantık) hatası vardır.'
      },
      {
        id: 'q-ab-9-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Dünkü tartışmadan sonra onunla bir daha konuşmadım.' },
          { id: 'B', text: 'Eve geç geldiği için babasından azar işitti.' },
          { id: 'C', text: 'Bunu yapacağını hiç düşünmemiştim.' },
          { id: 'D', text: 'Onu dünkü toplantıda gördüm.' },
          { id: 'E', text: 'Gelecek ay taşınacaklarını söylediler.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Senin bunu yapacağını\" mı yoksa \"Onun bunu yapacağını\" mı belli değildir. Zamir eksikliği anlam belirsizliğine neden olmuştur.'
      },
      {
        id: 'q-ab-9-8',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmiştik ki otobüs kalktı.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"kalktı\" yerine \"hareket etti\" yazılarak' },
          { id: 'B', text: '\"ki\" bağlacı atılarak' },
          { id: 'C', text: '\"yeni\" kelimesi cümleden çıkarılarak' },
          { id: 'D', text: '\"yeni\" kelimesi \"gelmiştik\" kelimesinden önceye alınarak' },
          { id: 'E', text: '\"durağa\" kelimesi cümleden atılarak' }
        ],
        correctOptionId: 'D',
        explanation: 'Durak yeni değildir. Eylemin yeni gerçekleştiği anlatılmak istenmektedir. \"Durağa yeni gelmiştik ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-9-9',
        difficulty: 'easy',
        questionText: '\"Eminim bu olayı sen de duymuş olmalısın.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Tamlama yanlışı' },
          { id: 'B', text: 'Çatı uyuşmazlığı' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Zaman uyuşmazlığı' },
          { id: 'E', text: 'Çelişen kelimelerin bir arada kullanılması' }
        ],
        correctOptionId: 'E',
        explanation: '\"Eminim\" kelimesi kesinlik, \"olmalısın\" kelimesi ise ihtimal anlamı taşır.'
      },
      {
        id: 'q-ab-9-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Bu hafta sonu sinemaya gideceğiz.' },
          { id: 'B', text: 'Birlikte karşılıklı çay içip sohbet ettik.' },
          { id: 'C', text: 'Hava soğuk olduğu için dışarı çıkmadık.' },
          { id: 'D', text: 'Onun başarısını hepimiz takdir ediyoruz.' },
          { id: 'E', text: 'Tatil için planlarımızı çoktan yaptık.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Birlikte\" ve \"karşılıklı\" sözcüklerinden biri gereksizdir; çay içip sohbet etmek zaten birlikte/karşılıklı yapılır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-9-orta',
    title: 'Anlatım Bozuklukları 9 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (81-90)',
    type: 'comprehension',
    order: 26,
    questions: [
      {
        id: 'q-ab-9-11',
        difficulty: 'medium',
        questionText: '\"Müdürümüz bize değer verir, her zaman savunurdu.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilir?',
        options: [
          { id: 'A', text: 'virgülden sonra \"bizi\" kelimesi getirilerek' },
          { id: 'B', text: '\"değer verir\" yerine \"değer verirdi\" yazılarak' },
          { id: 'C', text: '\"bize\" kelimesi çıkarılarak' },
          { id: 'D', text: '\"her zaman\" sözcüğü başa alınarak' },
          { id: 'E', text: '\"Müdürümüz\" kelimesinden sonra virgül konularak' }
        ],
        correctOptionId: 'A',
        explanation: '\"Bize değer verir, (bizi) her zaman savunurdu.\" İkinci cümlenin nesnesi eksiktir.'
      },
      {
        id: 'q-ab-9-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde özne-yüklem uyumsuzluğu vardır?',
        options: [
          { id: 'A', text: 'Kuşlar ağaç dallarında neşeyle ötüşüyorlar.' },
          { id: 'B', text: 'Ben ve o yarın kütüphaneye gideceğiz.' },
          { id: 'C', text: 'Dışarıdaki köpekler durmadan havlıyor.' },
          { id: 'D', text: 'Herkes kendi görevini eksiksiz yaptı.' },
          { id: 'E', text: 'Arabalar hızla yoldan geçiyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'İnsan dışındaki varlıkların (kuşlar) çoğul olduğu durumlarda, kişileştirme yapılmamışsa yüklem tekil olmalıdır (ötüşüyor).'
      },
      {
        id: 'q-ab-9-13',
        difficulty: 'medium',
        questionText: '\"Yabancı kelimelerin Türkçe karşılıklarını bulmalı, dilimizden atmalıyız.\" cümlesinde anlatım bozukluğuna yol açan öge eksikliği nedir?',
        options: [
          { id: 'A', text: 'Özne' },
          { id: 'B', text: 'Dolaylı Tümleç' },
          { id: 'C', text: 'Nesne' },
          { id: 'D', text: 'Zarf Tümleci' },
          { id: 'E', text: 'Ek Fiil' }
        ],
        correctOptionId: 'C',
        explanation: '\"(Yabancı kelimeleri / onları) dilimizden atmalıyız.\" İkinci cümle için nesne eksiktir.'
      },
      {
        id: 'q-ab-9-14',
        difficulty: 'medium',
        questionText: '\"Siyasi ve ekonomi alanındaki bu gelişmeler hepimizi mutlu etti.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: '\"Siyasi alanındaki\" denmez, \"Siyasi alandaki ve ekonomi alanındaki\" şeklinde tamlamalar düzeltilmelidir.'
      },
      {
        id: 'q-ab-9-15',
        difficulty: 'medium',
        questionText: '\"Dünkü toplantıya herkes katılmış, mazeret bildirmemişti.\" cümlesindeki bozukluk nasıl düzeltilir?',
        options: [
          { id: 'A', text: '\"katılmış\" yerine \"katılmıştı\" yazılarak' },
          { id: 'B', text: 'virgülden sonra \"kimse\" kelimesi getirilerek' },
          { id: 'C', text: '\"herkes\" yerine \"hepsi\" yazılarak' },
          { id: 'D', text: '\"mazeret\" kelimesinden önce \"hiçbir\" eklenerek' },
          { id: 'E', text: '\"toplantıya\" sözcüğü kaldırılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Olumsuz yükleme (bildirmemişti) olumlu özne (herkes) uymaz. İkinci cümleye \"kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-9-16',
        difficulty: 'medium',
        questionText: '\"Eşyalar arabaya taşınıp yola çıktık.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Çatı uyuşmazlığı' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Ek eylem eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Taşınıp\" (edilgen) ile \"çıktık\" (etken) fiilleri çatı yönünden uyuşmaz. \"Taşıyıp yola çıktık\" olmalıdır.'
      },
      {
        id: 'q-ab-9-17',
        difficulty: 'medium',
        questionText: '\"Kitabı inceledim ve yazarın dili kullanımı çok hoşuma gitti.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, özne eksikliği vardır.' },
          { id: 'B', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'C', text: 'Evet, tamlama yanlışı vardır.' },
          { id: 'D', text: 'Evet, çatı uyuşmazlığı vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Yazarın dili kullanımı\" değil, \"yazarın dili kullanışı\" veya \"yazarın dil kullanımı\" olmalıdır. Tamlama/kelime yapısı hatası vardır.'
      },
      {
        id: 'q-ab-9-18',
        difficulty: 'medium',
        questionText: '\"Bütün çalışanlar müdürü seviyor, çok saygı duyuyordu.\" cümlesinde anlatım bozukluğu hangi kelimenin eksikliğinden kaynaklanmıştır?',
        options: [
          { id: 'A', text: 'onu' },
          { id: 'B', text: 'ona' },
          { id: 'C', text: 'onlar' },
          { id: 'D', text: 'müdür' },
          { id: 'E', text: 'hepsi' }
        ],
        correctOptionId: 'B',
        explanation: '\"Müdürü seviyor, (ona) çok saygı duyuyordu.\" Dolaylı tümleç eksikliği vardır.'
      },
      {
        id: 'q-ab-9-19',
        difficulty: 'medium',
        questionText: '\"Çocuklar bahçede oynuyor, biz ise onları izliyorduk.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Evet, nesne eksikliği' },
          { id: 'C', text: 'Evet, dolaylı tümleç eksikliği' },
          { id: 'D', text: 'Evet, tamlama yanlışlığı' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle dil bilgisi kurallarına uymaktadır. Öznesi, yüklemi ve diğer ögeleri uyumludur.'
      },
      {
        id: 'q-ab-9-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik ekinin gereksiz kullanımından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Böyle davranmasını hiç doğru bulmuyorum.' },
          { id: 'B', text: 'Sınava iyi hazırlanmasını söyledim.' },
          { id: 'C', text: 'Araba kullanmasını çok iyi biliyor.' },
          { id: 'D', text: 'Yeni evinin odaları çok genişmiş.' },
          { id: 'E', text: 'Çocukların başarılarını hep takdir etti.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Araba kullanmayı\" olmalıdır, üçüncü tekil kişi iyelik eki (-sı) gereksiz yere kullanılmıştır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-9-zor',
    title: 'Anlatım Bozuklukları 9 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (81-90)',
    type: 'comprehension',
    order: 27,
    questions: [
      {
        id: 'q-ab-9-21',
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
        id: 'q-ab-9-22',
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
        id: 'q-ab-9-23',
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
        id: 'q-ab-9-24',
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
        id: 'q-ab-9-25',
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
        id: 'q-ab-9-26',
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
        id: 'q-ab-9-27',
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
        id: 'q-ab-9-28',
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
        id: 'q-ab-9-29',
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
        id: 'q-ab-9-30',
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
