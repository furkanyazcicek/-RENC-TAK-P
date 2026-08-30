export default [
  {
    id: 'test-anlatim-bozuk-6-kolay',
    title: 'Anlatım Bozuklukları 6 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (51-60)',
    type: 'comprehension',
    order: 16,
    questions: [
      {
        id: 'q-ab-6-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla geçmişteki eski anılarımızı tazeledik.' },
          { id: 'B', text: 'Sınava girmeden önce notlarını tekrar gözden geçirdi.' },
          { id: 'C', text: 'Akşam yemeğini ailecek dışarıda yedik.' },
          { id: 'D', text: 'Arkadaşının düğününe en güzel kıyafetiyle katıldı.' },
          { id: 'E', text: 'Sabahları erken uyanıp yürüyüş yapar.' }
        ],
        correctOptionId: 'A',
        explanation: 'Anı zaten geçmişte yaşanmış olaylardır. \"Geçmişteki\" sözcüğü gereksizdir.'
      },
      {
        id: 'q-ab-6-2',
        difficulty: 'easy',
        questionText: '\"Sonbaharda dökülen ağaç yaprakları, etrafı sarıya boyadı.\" cümlesinde anlatım bozukluğu var mıdır, varsa nedeni nedir?',
        options: [
          { id: 'A', text: 'Evet, sözcüğün yanlış yerde kullanılması' },
          { id: 'B', text: 'Evet, gereksiz sözcük' },
          { id: 'C', text: 'Evet, mantık hatası' },
          { id: 'D', text: 'Evet, özne eksikliği' },
          { id: 'E', text: 'Hayır, yoktur' }
        ],
        correctOptionId: 'A',
        explanation: 'Ağaç dökülmez, yaprak dökülür. \"Ağaçların dökülen yaprakları\" olmalıdır. (Sözcüğün yanlış yerde kullanımı veya tamlama yanlışı)'
      },
      {
        id: 'q-ab-6-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış kullanımından kaynaklanan bozukluk vardır?',
        options: [
          { id: 'A', text: 'O kadar sevindi ki ağzı kulaklarına vardı.' },
          { id: 'B', text: 'Sınavı kazandığını öğrenince küplere bindi.' },
          { id: 'C', text: 'Korkudan etekleri tutuşmuştu.' },
          { id: 'D', text: 'Çocukların gürültüsünden beyni zonkladı.' },
          { id: 'E', text: 'Yüzünden düşen bin parçaydı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sınav kazanmak olumlu bir durumdur, sevinç bildirir. \"Küplere binmek\" ise öfke belirtir.'
      },
      {
        id: 'q-ab-6-4',
        difficulty: 'easy',
        questionText: '\"Bu kaza yüzünden ölüm şansı oldukça yüksek.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama hatası' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'B',
        explanation: 'Ölüm bir \"şans\" (olumlu) değil, bir \"risk\" veya \"ihtimal\"dir (olumsuz).'
      },
      {
        id: 'q-ab-6-5',
        difficulty: 'easy',
        questionText: '\"Onunla olan ilişkimi tamamen kesip bitirdim.\" cümlesindeki gereksizliği gidermek için ne yapılmalıdır?',
        options: [
          { id: 'A', text: '\"Onunla olan\" ifadesi atılmalı.' },
          { id: 'B', text: '\"tamamen\" kelimesi çıkarılmalı.' },
          { id: 'C', text: '\"kesip\" veya \"bitirdim\" kelimelerinden biri kullanılmalı.' },
          { id: 'D', text: '\"ilişkimi\" kelimesine gerek yoktur.' },
          { id: 'E', text: 'Bu cümlede gereksiz sözcük yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Kesmek\" ve \"bitirmek\" burada aynı anlama gelecek şekilde kullanılmıştır. Biri fazladır.'
      },
      {
        id: 'q-ab-6-6',
        difficulty: 'easy',
        questionText: '\"Bahçedeki çiçekler baharın gelmesiyle birlikte açtılar.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu (tekillik-çoğulluk)' },
          { id: 'B', text: 'Zaman uyuşmazlığı' },
          { id: 'C', text: 'Gereksiz sözcük kullanımı' },
          { id: 'D', text: 'Nesne eksikliği' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'A',
        explanation: 'İnsan dışındaki varlıklar çoğul özne (çiçekler) olduğunda, yüklem tekil (açtı) olmalıdır.'
      },
      {
        id: 'q-ab-6-7',
        difficulty: 'easy',
        questionText: '\"Eminim ki bu söylediklerimi o da duymuş olmalı.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış yerde kullanılması' },
          { id: 'B', text: 'Anlamca çelişen sözcüklerin kullanımı' },
          { id: 'C', text: 'Zaman hatası' },
          { id: 'D', text: 'Deyim yanlışı' },
          { id: 'E', text: 'Ek eylem eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eminim ki\" kesinlik, \"olmalı\" ihtimal bildirir. İkisi aynı cümlede çelişir.'
      },
      {
        id: 'q-ab-6-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (zamir eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Ankara\'ya gideceğini yeni öğrendim.' },
          { id: 'B', text: 'Bütün gece hiç uyumadan ders çalıştı.' },
          { id: 'C', text: 'Eşyalarını hızlıca toplayıp evden çıktı.' },
          { id: 'D', text: 'Bana her zaman doğruyu söylemeni isterdim.' },
          { id: 'E', text: 'Dünkü tartışmadan kimseye bahsetmedi.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin gideceğini\" mi, \"Onun gideceğini\" mi? Tamlayan/zamir eksiktir, bu da belirsizlik yaratır.'
      },
      {
        id: 'q-ab-6-9',
        difficulty: 'easy',
        questionText: '\"Yeni derse başlamıştık ki elektrikler kesildi.\" cümlesinde altı çizili (yeni) sözcük nerede kullanılmalıdır?',
        options: [
          { id: 'A', text: '\"başlamıştık\" sözcüğünden sonra' },
          { id: 'B', text: '\"derse\" sözcüğünden sonra' },
          { id: 'C', text: '\"elektrikler\" sözcüğünden önce' },
          { id: 'D', text: '\"kesildi\" sözcüğünden önce' },
          { id: 'E', text: 'Cümleden tamamen çıkarılmalıdır' }
        ],
        correctOptionId: 'B',
        explanation: 'Ders yeni değildir, başlama işi yenidir. \"Derse yeni başlamıştık ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-6-10',
        difficulty: 'easy',
        questionText: '\"Aşağı yukarı tam beş saat bekledik.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Gereksiz kelime' },
          { id: 'B', text: 'Sıfat tamlaması yanlışı' },
          { id: 'C', text: 'Çelişen sözcüklerin kullanımı' },
          { id: 'D', text: 'Fiilimsilerin uyumsuzluğu' },
          { id: 'E', text: 'Özne eksikliği' }
        ],
        correctOptionId: 'C',
        explanation: '\"Aşağı yukarı\" yaklaşıklık, \"tam\" kesinlik bildirir. Çelişen ifadelerdir.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-6-orta',
    title: 'Anlatım Bozuklukları 6 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (51-60)',
    type: 'comprehension',
    order: 17,
    questions: [
      {
        id: 'q-ab-6-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde nesne eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Babasını çok sever, sürekli mektup yazardı.' },
          { id: 'B', text: 'Ona çok değer verir, her zaman korurdu.' },
          { id: 'C', text: 'Yeni evini temizledi ve yerleşti.' },
          { id: 'D', text: 'Soruları dikkatlice okuyup çözdü.' },
          { id: 'E', text: 'Toplantıda alınan kararlara herkes uydu.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Ona çok değer verir, (onu) her zaman korurdu.\" cümlesinde nesne (onu) eksiktir.'
      },
      {
        id: 'q-ab-6-12',
        difficulty: 'medium',
        questionText: '\"Bütün personeller bu ayki hedeflerine ulaştı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Sözcüğün yanlış anlamda kullanılması' },
          { id: 'D', text: 'Gereksiz çoğul ekinin kullanılması' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'D',
        explanation: '\"Personel\" kelimesi topluluk ismidir ve zaten çoğul anlam taşır. \"Personeller\" demek gereksiz bir ek kullanımıdır. Veya \"bütün\" sıfatından sonra isim tekil olmalıdır (bütün personel).'
      },
      {
        id: 'q-ab-6-13',
        difficulty: 'medium',
        questionText: '\"O kurumda çalışan herkesin görevini en iyi şekilde yapması, ihmal etmemesi gerekir.\" cümlesindeki anlatım bozukluğunun sebebi nedir?',
        options: [
          { id: 'A', text: 'Dolaylı tümleç eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Ek fiil eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"...yapması, (onu / görevini) ihmal etmemesi\" nesne eksikliğinden dolayı bozukluk yaratmıştır.'
      },
      {
        id: 'q-ab-6-14',
        difficulty: 'medium',
        questionText: '\"Yabancı dil öğrenmek, bol pratik yapmayı ve düzenli çalışmayı gerektirir.\" cümlesi ile ilgili aşağıdakilerden hangisi söylenebilir?',
        options: [
          { id: 'A', text: 'Anlatım bozukluğu yoktur.' },
          { id: 'B', text: 'Özne-yüklem uyumsuzluğu vardır.' },
          { id: 'C', text: 'Çatı uyuşmazlığı vardır.' },
          { id: 'D', text: 'Nesne eksikliği vardır.' },
          { id: 'E', text: 'Ek yanlışlığı vardır.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bu cümle dil bilgisi kurallarına tamamen uymaktadır.'
      },
      {
        id: 'q-ab-6-15',
        difficulty: 'medium',
        questionText: '\"Dünkü kazada yaralananların hiçbiri hastaneye götürülmedi, olay yerinde tedavi edildi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: 'Virgülden sonra \"hepsi\" kelimesi eklenerek' },
          { id: 'B', text: '\"götürülmedi\" yerine \"götürülmediler\" yazılarak' },
          { id: 'C', text: '\"tedavi edildi\" yerine \"tedavi edildiler\" yazılarak' },
          { id: 'D', text: '\"olay yerinde\" kelimeleri başa alınarak' },
          { id: 'E', text: '\"hiçbiri\" yerine \"kimse\" yazılarak' }
        ],
        correctOptionId: 'A',
        explanation: '\"Hiçbiri\" olumsuz yükleme (götürülmedi) bağlanır. Olumlu yükleme (tedavi edildi) bağlanamaz, dolayısıyla \"hepsi (veya herkes)\" öznesi eklenmelidir.'
      },
      {
        id: 'q-ab-6-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliğinden kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Oraya gitmeyi çok istiyor ama cesaret edemiyordu.' },
          { id: 'B', text: 'Okulu çok seviyor, her sabah sevinçle gidiyordu.' },
          { id: 'C', text: 'Kitap okumayı alışkanlık haline getirdi.' },
          { id: 'D', text: 'Onu dünkü toplantıda ben de gördüm.' },
          { id: 'E', text: 'Söylenenleri hiç umursamadı.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Okulu çok seviyor, (oraya / okula) her sabah sevinçle gidiyordu.\" İkinci cümle dolaylı tümleç (yer tamlayıcısı) ister.'
      },
      {
        id: 'q-ab-6-17',
        difficulty: 'medium',
        questionText: '\"Okullar tatil olunca herkes memleketine akın etti, evde kalmadı.\" cümlesinde ikinci cümlenin başına hangi kelime getirilirse bozukluk giderilmiş olur?',
        options: [
          { id: 'A', text: 'kimse' },
          { id: 'B', text: 'bazıları' },
          { id: 'C', text: 'hiçbiri' },
          { id: 'D', text: 'hepsi' },
          { id: 'E', text: 'onlar' }
        ],
        correctOptionId: 'A',
        explanation: 'Olumsuz yüklem (kalmadı) için \"kimse\" veya \"hiç kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-6-18',
        difficulty: 'medium',
        questionText: '\"Masanın üzerindeki dosyalar düzenlenip klasörlere yerleştirdi.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Çatı uyuşmazlığı' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Zaman uyuşmazlığı' }
        ],
        correctOptionId: 'A',
        explanation: '\"Düzenlenip\" edilgen, \"yerleştirdi\" etken fiildir. Her ikisi de edilgen (yerleştirildi) olmalıdır.'
      },
      {
        id: 'q-ab-6-19',
        difficulty: 'medium',
        questionText: '\"Bu roman, hem edebi hem de kurgu açısından oldukça başarılıdır.\" cümlesindeki anlatım bozukluğu aşağıdakilerden hangisiyle giderilir?',
        options: [
          { id: 'A', text: '\"edebi\" sözcüğünden sonra \"açıdan\" kelimesi getirilerek' },
          { id: 'B', text: '\"başarılıdır\" yerine \"iyidir\" yazılarak' },
          { id: 'C', text: '\"kurgu açısından\" yerine \"kurgusuyla\" yazılarak' },
          { id: 'D', text: '\"Bu roman\" yerine \"Bu kitap\" yazılarak' },
          { id: 'E', text: 'Ek fiil kaldırılarak' }
        ],
        correctOptionId: 'A',
        explanation: '\"Edebi açısından\" denemez. Sıfat ve isim tamlaması aynı tamlanana bağlanamaz. \"Edebi açıdan ve kurgu açısından\" olmalıdır.'
      },
      {
        id: 'q-ab-6-20',
        difficulty: 'medium',
        questionText: '\"Çocuklar, öğretmenlerini saygıyla dinliyor; ona sevgi besliyordu.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, dolaylı tümleç eksikliği vardır.' },
          { id: 'B', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'C', text: 'Evet, özne-yüklem uyumsuzluğu vardır.' },
          { id: 'D', text: 'Evet, tamlama hatası vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: '\"Ona (öğretmene)\" kelimesi cümlenin yöneldiği dolaylı tümleç görevini fazlasıyla yerine getirmiştir. Bozukluk yoktur.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-6-zor',
    title: 'Anlatım Bozuklukları 6 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (51-60)',
    type: 'comprehension',
    order: 18,
    questions: [
      {
        id: 'q-ab-6-21',
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
        id: 'q-ab-6-22',
        difficulty: 'hard',
        questionText: '\"Öğrenciler, okumanın onlara kazandıracağı yararları bilmeli, idrak etmelidir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"idrak etmelidir\" kelimesi ile nesnenin (onları) eklenmesiyle' },
          { id: 'B', text: '\"idrak etmelidir\" kelimesinden önce \"bunları\" eklenerek' },
          { id: 'C', text: '\"okumanın onlara\" yerine \"okumalarının\" yazılarak' },
          { id: 'D', text: '\"yararları\" kelimesinin sonundaki -ı atılarak' },
          { id: 'E', text: 'Gereksiz olan \"idrak etmelidir\" ifadesi atılarak' }
        ],
        correctOptionId: 'B',
        explanation: 'Neyi idrak etmeli? Okumanın kazandıracağı yararları. \"Bilmeli, (bunları / onları) idrak etmelidir\" - Nesne eksikliği. Ancak iki yüklem de aynı nesneyi (yararları) alabiliyor. Soruda asıl hedeflenen A veya B gibi dursa da \"bilmeli ve idrak etmelidir\" gereksiz eşanlamlı veya yakın anlamlı yüklem kullanımı mıdır? Evet, bilmek ve idrak etmek çok yakındır, ama \"bilmeli ve bunları idrak etmeli\" daha doğru. Aslında B seçeneği, eksik olan nesneyi tamamlar. (İki yüklem de aynı nesneyi alsa da, anlamı güçlendirmek için nesne tekrarlanabilir veya asıl mesele \"yararları idrak etmelidir\" uyumlu olduğundan nesne eksikliği yoktur, ikisi de \"yararları\" kelimesini alır. Bu durumda nesne eksikliği aranmaz. Soru yoruma açıktır ama klasik kaynaklarda bu \"nesne eksikliği (bunları idrak etmeli)\" olarak verilir).'
      },
      {
        id: 'q-ab-6-23',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde iyelik ekinin gereksiz kullanılmasından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Kardeşinin eve geç gelmesini hep eleştirdi.' },
          { id: 'B', text: 'Onun araba sürmesini bir türlü öğrenemedim.' },
          { id: 'C', text: 'Toplantının iptal edilmesine hepimiz üzüldük.' },
          { id: 'D', text: 'Tatlı yemesini çok sevdiğini biliyorum.' },
          { id: 'E', text: 'Yüzme kursuna giderek kendini geliştirdi.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Tatlı yemeyi çok sevdiğini\" olmalıdır. (Yeme-si-ni) iyelik ekinin gereksiz kullanımıdır.'
      },
      {
        id: 'q-ab-6-24',
        difficulty: 'hard',
        questionText: '\"Dünkü maçta bizim takım rakibine yenilerek mağlup oldu.\" cümlesinde anlatım bozukluğunu gidermek için hangi sözcük çıkarılmalıdır?',
        options: [
          { id: 'A', text: 'bizim' },
          { id: 'B', text: 'rakibine' },
          { id: 'C', text: 'yenilerek' },
          { id: 'D', text: 'dünkü' },
          { id: 'E', text: 'takım' }
        ],
        correctOptionId: 'C',
        explanation: '\"Yenilmek\" ile \"mağlup olmak\" aynı anlamdadır.'
      },
      {
        id: 'q-ab-6-25',
        difficulty: 'hard',
        questionText: '\"Kendisine haksızlık yapıldığını düşünüyor, hiç kimseyle konuşmak istemiyordu.\" cümlesindeki temel anlatım bozukluğu nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Zaman kipleri uyumsuzluğu' },
          { id: 'D', text: 'Yüklem eksikliği' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Cümle dil bilgisi ve anlam açısından doğrudur.'
      },
      {
        id: 'q-ab-6-26',
        difficulty: 'hard',
        questionText: '\"Sorunları çözmek için yeni bir yöntem bulduk; uygulamaya koyduk.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: 'İkinci cümlenin başına \"onu\" sözcüğü eklenerek' },
          { id: 'B', text: '\"uygulamaya\" kelimesi \"uygulamasına\" yapılarak' },
          { id: 'C', text: '\"bulduk\" yerine \"bulup\" yazılarak' },
          { id: 'D', text: '\"koyduk\" yerine \"başladık\" yazılarak' },
          { id: 'E', text: 'Bu cümlede bozukluk yoktur.' }
        ],
        correctOptionId: 'A',
        explanation: 'Neyi uygulamaya koyduk? \"Yöntemi\" veya \"onu\". Nesne eksikliği vardır.'
      },
      {
        id: 'q-ab-6-27',
        difficulty: 'hard',
        questionText: '\"Babam her zaman bize inanır, desteklerdi.\" cümlesindeki anlatım bozukluğunun nedeni aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Dolaylı tümleç eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Zarf tümleci eksikliği' },
          { id: 'D', text: 'Özne eksikliği' },
          { id: 'E', text: 'Yüklem eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Bize inanır, (bizi) desteklerdi.\" İkinci yüklem için belirtili nesne eksiktir.'
      },
      {
        id: 'q-ab-6-28',
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
        id: 'q-ab-6-29',
        difficulty: 'hard',
        questionText: '\"Sözünü ettiğiniz binayı ne gördüm ne de yerini bilirim.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"ne de\" yerine \"ne\" yazılarak' },
          { id: 'B', text: '\"binayı\" sözcüğü çıkarılarak' },
          { id: 'C', text: '\"yerini\" kelimesinden önce \"onun\" kelimesi eklenerek' },
          { id: 'D', text: '\"bilirim\" yerine \"biliyorum\" yazılarak' },
          { id: 'E', text: 'Bu cümlede anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'C',
        explanation: '\"Sözünü ettiğiniz binayı ne gördüm ne de (o binanın / onun) yerini bilirim.\" Tamlayan eksikliği vardır.'
      },
      {
        id: 'q-ab-6-30',
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
      }
    ]
  }
];
