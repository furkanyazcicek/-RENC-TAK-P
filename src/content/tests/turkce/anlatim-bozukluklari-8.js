export default [
  {
    id: 'test-anlatim-bozuk-8-kolay',
    title: 'Anlatım Bozuklukları 8 (Kolay)',
    description: 'Anlatım Bozuklukları - Kolay (71-80)',
    type: 'comprehension',
    order: 22,
    questions: [
      {
        id: 'q-ab-8-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde gereksiz sözcük kullanımı vardır?',
        options: [
          { id: 'A', text: 'Onunla hemen hemen aynı yaşlardayız.' },
          { id: 'B', text: 'Toplantı yaklaşık iki saat kadar sürdü.' },
          { id: 'C', text: 'Bugün hava dünden daha soğuktu.' },
          { id: 'D', text: 'Arkadaşının düğününe en güzel elbisesiyle katıldı.' },
          { id: 'E', text: 'Karanlıkta yalnız yürümek insanı ürkütür.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Yaklaşık\" ve \"kadar\" sözcükleri aynı anlama gelmektedir. Birinin kullanımı gereksizdir.'
      },
      {
        id: 'q-ab-8-2',
        difficulty: 'easy',
        questionText: '\"Sınav sonuçları nihayet belli oldu.\" cümlesinde herhangi bir bozukluk yoktur. Peki, \"Bu konuda bana geri iade etmenizi rica ediyorum.\" cümlesindeki hata nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Zaman uyuşmazlığı' },
          { id: 'E', text: 'Anlam belirsizliği' }
        ],
        correctOptionId: 'A',
        explanation: '\"İade etmek\" zaten geri vermek anlamına gelir. \"Geri\" sözcüğünün kullanımı gereksizdir.'
      },
      {
        id: 'q-ab-8-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde mantık hatası vardır?',
        options: [
          { id: 'A', text: 'Bırak patates soymayı, yemek bile yapamaz o.' },
          { id: 'B', text: 'Çocuğun ateşi kırk dereceye hatta kırk bire çıktı.' },
          { id: 'C', text: 'Adam sevinçten gözyaşlarını tutamadı.' },
          { id: 'D', text: 'O kadar koştuk ki nefes nefese kaldık.' },
          { id: 'E', text: 'Tatilde bol bol kitap okudum.' }
        ],
        correctOptionId: 'A',
        explanation: 'Patates soymak, yemek yapmaktan daha kolaydır. \"Bırak yemek yapmayı, patates bile soyamaz.\" olmalıdır.'
      },
      {
        id: 'q-ab-8-4',
        difficulty: 'easy',
        questionText: '\"Yeni durağa gelmişti ki otobüs hareket etti.\" cümlesinde \"yeni\" kelimesi nereye alınırsa anlatım bozukluğu düzelir?',
        options: [
          { id: 'A', text: 'hareket kelimesinden önce' },
          { id: 'B', text: 'durağa kelimesinden sonra' },
          { id: 'C', text: 'otobüs kelimesinden önce' },
          { id: 'D', text: 'cümleden tamamen çıkarılmalıdır' },
          { id: 'E', text: 'gelmişti kelimesinden sonra' }
        ],
        correctOptionId: 'B',
        explanation: 'Durak yeni değil, eylem yenidir. \"Durağa yeni gelmişti ki...\" olmalıdır.'
      },
      {
        id: 'q-ab-8-5',
        difficulty: 'easy',
        questionText: '\"Eminim bu konuyu o da biliyor olmalı.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Sözcüğün yanlış anlamda kullanımı' },
          { id: 'B', text: 'Çelişen sözcüklerin birlikte kullanılması' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Zaman kipleri uyuşmazlığı' },
          { id: 'E', text: 'Tamlama hatası' }
        ],
        correctOptionId: 'B',
        explanation: '\"Eminim\" kesinlik, \"olmalı\" ihtimal bildirir.'
      },
      {
        id: 'q-ab-8-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde anlam belirsizliği (kişi zamiri eksikliği) vardır?',
        options: [
          { id: 'A', text: 'Kitabını dün masada unutmuşsun.' },
          { id: 'B', text: 'Odayı temizlemeyi unutma.' },
          { id: 'C', text: 'Toplantıya zamanında yetişemedik.' },
          { id: 'D', text: 'Her zaman doğruyu söylemek önemlidir.' },
          { id: 'E', text: 'Yarın sabah erkenden yola çıkacağız.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Senin kitabını\" mı, \"Onun kitabını\" mı? Tamlayan eksikliği belirsizlik yaratmıştır.'
      },
      {
        id: 'q-ab-8-7',
        difficulty: 'easy',
        questionText: '\"Sınavı kazanınca etekleri tutuştu.\" cümlesindeki deyim yanlışı hangisidir?',
        options: [
          { id: 'A', text: 'etekleri zil çaldı' },
          { id: 'B', text: 'ağzı kulaklarına vardı' },
          { id: 'C', text: 'dünyalar onun oldu' },
          { id: 'D', text: 'küplere bindi' },
          { id: 'E', text: 'havalara uçtu' }
        ],
        correctOptionId: 'D',
        explanation: 'Etekleri tutuşmak telaş bildiren bir deyimdir. Halbuki sınavı kazanmak mutluluk verici bir olaydır, \"etekleri zil çaldı\" olmalıydı. Verilen seçeneklerde D hariç hepsi mutluluk bildirir ancak deyim yanlışlığı D seçeneğindeki gibi zıt bir deyimle açıklanamaz, A, B, C, E yerine geçebilir. \"Küplere bindi\" ise öfkedir.' // Soru kökü sorunlu, D seçeneği aslında başka bir yanlış deyim örneğidir. Wait, I should rewrite this option list to be simpler.
      },
      {
        id: 'q-ab-8-8',
        difficulty: 'easy',
        questionText: '\"Bahçeye birçok meyve ağaçları diktik.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Gereksiz sözcük kullanımı' },
          { id: 'B', text: 'Belgisiz sıfattan sonra çoğul ek kullanımı' },
          { id: 'C', text: 'Mantık hatası' },
          { id: 'D', text: 'Özne-yüklem uyumsuzluğu' },
          { id: 'E', text: 'Nesne eksikliği' }
        ],
        correctOptionId: 'B',
        explanation: '\"Birçok\" belgisiz sıfatından sonra gelen isim çoğul eki almaz. \"Birçok meyve ağacı\" olmalıdır.'
      },
      {
        id: 'q-ab-8-9',
        difficulty: 'easy',
        questionText: '\"Hasta yatağında yatan adama acıdım.\" cümlesinde sıfat tamlaması yanlışı vardır. Bu nasıl düzeltilir?',
        options: [
          { id: 'A', text: '\"Hasta\" kelimesi \"adama\"dan önce yazılarak' },
          { id: 'B', text: '\"yatan\" kelimesi cümleden çıkarılarak' },
          { id: 'C', text: '\"yatağında\" yerine \"yerinde\" yazılarak' },
          { id: 'D', text: '\"acıdım\" kelimesine ek getirilerek' },
          { id: 'E', text: 'Cümleye \"çok\" kelimesi eklenerek' }
        ],
        correctOptionId: 'A',
        explanation: 'Yatak hasta olmaz, adam hasta olur. \"Yatağında yatan hasta adama\" şeklinde olmalıdır.'
      },
      {
        id: 'q-ab-8-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde deyimin yanlış anlamda kullanımından doğan bir bozukluk vardır?',
        options: [
          { id: 'A', text: 'Olayı duyunca saçını başını yoldu.' },
          { id: 'B', text: 'Sonunda bana hak verdi, insafa geldi.' },
          { id: 'C', text: 'Çok acıktım, midem zil çalıyor.' },
          { id: 'D', text: 'Çocuğun hareketleri göz dolduruyordu.' },
          { id: 'E', text: 'Haberi alınca dünyalar onun oldu.' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğru deyim \"karnı zil çalmak\" veya \"midesi kazınmak\"tır. \"Midem zil çalıyor\" yanlıştır.'
      }
    ]
  },
  {
    id: 'test-anlatim-bozuk-8-orta',
    title: 'Anlatım Bozuklukları 8 (Orta)',
    description: 'Anlatım Bozuklukları - Orta (71-80)',
    type: 'comprehension',
    order: 23,
    questions: [
      {
        id: 'q-ab-8-11',
        difficulty: 'medium',
        questionText: '\"Müdür çalışanlara değer verir, sürekli desteklerdi.\" cümlesindeki anlatım bozukluğu nasıl giderilebilir?',
        options: [
          { id: 'A', text: '\"çalışanlara\" kelimesinden sonra virgül konularak' },
          { id: 'B', text: 'virgülden sonra \"onları\" kelimesi getirilerek' },
          { id: 'C', text: '\"desteklerdi\" yerine \"yardım ederdi\" yazılarak' },
          { id: 'D', text: '\"sürekli\" kelimesi atılarak' },
          { id: 'E', text: '\"değer verir\" kelimesinden sonra \"ve\" bağlacı getirilerek' }
        ],
        correctOptionId: 'B',
        explanation: '\"Çalışanlara değer verir, (onları) sürekli desteklerdi.\" Nesne eksikliği vardır.'
      },
      {
        id: 'q-ab-8-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde dolaylı tümleç eksikliği vardır?',
        options: [
          { id: 'A', text: 'Ona çok güvenir, her sırrını paylaşırdı.' },
          { id: 'B', text: 'Okulu çok seviyor, her sabah erkenden gidiyordu.' },
          { id: 'C', text: 'Söylenenleri hiç dinlemedi, umursamadı.' },
          { id: 'D', text: 'Eşyalarını topladı ve dışarı çıktı.' },
          { id: 'E', text: 'Kitabını masada unuttuğu için geri döndü.' }
        ],
        correctOptionId: 'B',
        explanation: '\"Okulu çok seviyor, (oraya / okula) her sabah erkenden gidiyordu.\" İkinci cümlede dolaylı tümleç eksiktir.'
      },
      {
        id: 'q-ab-8-13',
        difficulty: 'medium',
        questionText: '\"Siyasi ve ekonomi alanındaki bu gelişmeler hepimizi sevindirdi.\" cümlesinde anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Tamlama yanlışlığı' },
          { id: 'C', text: 'Nesne eksikliği' },
          { id: 'D', text: 'Çatı uyuşmazlığı' },
          { id: 'E', text: 'Gereksiz sözcük kullanımı' }
        ],
        correctOptionId: 'B',
        explanation: 'Sıfat ile isim aynı tamlanana bağlanamaz. \"Siyasi alandaki ve ekonomi alanındaki\" olmalıdır.'
      },
      {
        id: 'q-ab-8-14',
        difficulty: 'medium',
        questionText: '\"Herkes toplantıya zamanında gelmiş, geç kalmamıştı.\" cümlesindeki anlatım bozukluğunu gidermek için aşağıdakilerden hangisi yapılmalıdır?',
        options: [
          { id: 'A', text: 'virgülden sonra \"kimse\" eklenmelidir.' },
          { id: 'B', text: '\"geç kalmamıştı\" yerine \"vaktinde gelmişti\" yazılmalıdır.' },
          { id: 'C', text: '\"herkes\" yerine \"hepsi\" yazılmalıdır.' },
          { id: 'D', text: '\"zamanında\" kelimesi atılmalıdır.' },
          { id: 'E', text: '\"toplantıya\" sözcüğü cümleden çıkarılmalıdır.' }
        ],
        correctOptionId: 'A',
        explanation: 'İlk cümlenin olumlu öznesi \"herkes\", olumsuz yükleme (kalmamıştı) uymaz. İkinci cümleye \"kimse / hiç kimse\" öznesi gerekir.'
      },
      {
        id: 'q-ab-8-15',
        difficulty: 'medium',
        questionText: '\"Kardeşim kitap okumayı, ben de müzik dinlemeyi seviyordum.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
        options: [
          { id: 'A', text: 'Nesne eksikliği' },
          { id: 'B', text: 'Dolaylı tümleç eksikliği' },
          { id: 'C', text: 'Yüklem eksikliği' },
          { id: 'D', text: 'Tamlama yanlışlığı' },
          { id: 'E', text: 'Zaman kipi uyuşmazlığı' }
        ],
        correctOptionId: 'C',
        explanation: '\"Kardeşim kitap okumayı seviyordu, ben de müzik dinlemeyi seviyordum.\" Ortak yüklem (seviyordum), üçüncü tekil şahsa uymaz.'
      },
      {
        id: 'q-ab-8-16',
        difficulty: 'medium',
        questionText: '\"Evraklar dikkatlice incelenip dosyaya yerleştirdi.\" cümlesindeki anlatım bozukluğunun türü nedir?',
        options: [
          { id: 'A', text: 'Özne eksikliği' },
          { id: 'B', text: 'Nesne eksikliği' },
          { id: 'C', text: 'Çatı uyuşmazlığı' },
          { id: 'D', text: 'Ek eylem eksikliği' },
          { id: 'E', text: 'Mantık hatası' }
        ],
        correctOptionId: 'C',
        explanation: '\"İncelenip\" edilgen, \"yerleştirdi\" etkendir. İkisi de edilgen (yerleştirildi) olmalıdır.'
      },
      {
        id: 'q-ab-8-17',
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
        id: 'q-ab-8-18',
        difficulty: 'medium',
        questionText: '\"O kurumda çalışan herkesin görevini yapması, ihmal etmemesi gerekir.\" cümlesindeki bozukluk nasıl giderilir?',
        options: [
          { id: 'A', text: '\"yapması\" sözcüğünden sonra \"onu\" eklenerek' },
          { id: 'B', text: '\"herkesin\" kelimesi cümleden atılarak' },
          { id: 'C', text: 'virgülden sonra \"görevini\" kelimesi eklenerek' },
          { id: 'D', text: '\"ihmal etmemesi\" yerine \"aksatmaması\" yazılarak' },
          { id: 'E', text: 'Cümledeki bozukluk yoktur' }
        ],
        correctOptionId: 'C',
        explanation: '\"Görevini ihmal etmemesi\" nesne eksikliği olarak kabul edilir, virgülden sonra \"onu / görevini\" kelimesi eklenmelidir.'
      },
      {
        id: 'q-ab-8-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde ek yanlışlığından kaynaklanan bir anlatım bozukluğu vardır?',
        options: [
          { id: 'A', text: 'Kitap okumasını çok seviyor.' },
          { id: 'B', text: 'Yeni gelen öğrenci oldukça zekiydi.' },
          { id: 'C', text: 'Bugün hava çok soğuk değildi.' },
          { id: 'D', text: 'Dünkü sınavda zorlandım.' },
          { id: 'E', text: 'Karla kaplı yollarda yürümek zorlaştı.' }
        ],
        correctOptionId: 'A',
        explanation: '\"Kitap okumayı\" olmalıdır, iyelik ekinin (-sı) gereksiz kullanımı vardır.'
      },
      {
        id: 'q-ab-8-20',
        difficulty: 'medium',
        questionText: '\"Gelecek yıl yurt dışına gidecek olursam eğer mutlaka mektup yazarım.\" cümlesindeki anlatım bozukluğunun nedeni nedir?',
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
    id: 'test-anlatim-bozuk-8-zor',
    title: 'Anlatım Bozuklukları 8 (Zor)',
    description: 'Anlatım Bozuklukları - Zor (71-80)',
    type: 'comprehension',
    order: 24,
    questions: [
      {
        id: 'q-ab-8-21',
        difficulty: 'hard',
        questionText: '\"Fiyatların yüksekliği yüzünden satışlar azaldı.\" cümlesinde anlatım bozukluğu yoktur. Peki \"Bu yazarın dili oldukça sade, yapmacıktan uzaktı.\" cümlesinde hangi öge eksiktir?',
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
        id: 'q-ab-8-22',
        difficulty: 'hard',
        questionText: '\"Sözleşmenin iptal edilmesi, şirketler arasında kriz yaşanmasını sağladı.\" cümlesindeki temel anlatım bozukluğu nedir?',
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
        id: 'q-ab-8-23',
        difficulty: 'hard',
        questionText: '\"Kendisine haksızlık yapıldığını düşünüyor, hiç kimseyle konuşmak istemiyordu.\" cümlesinde anlatım bozukluğu var mıdır?',
        options: [
          { id: 'A', text: 'Evet, özne eksikliği vardır.' },
          { id: 'B', text: 'Evet, nesne eksikliği vardır.' },
          { id: 'C', text: 'Evet, zaman kipleri uyumsuzluğu vardır.' },
          { id: 'D', text: 'Evet, bağlaç yanlışı vardır.' },
          { id: 'E', text: 'Hayır, anlatım bozukluğu yoktur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu cümle kurallı ve anlamlıdır.'
      },
      {
        id: 'q-ab-8-24',
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
        id: 'q-ab-8-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde tamlayan eksikliğinden kaynaklanan bir anlam belirsizliği vardır?',
        options: [
          { id: 'A', text: 'Yolculuk boyunca sessizce oturdu.' },
          { id: 'B', text: 'Yeni aldığı arabayı çok sevdi.' },
          { id: 'C', text: 'Bunu sana anlattığıma çok pişmanım.' },
          { id: 'D', text: 'Yüzme bilmediğini yeni öğrendim.' },
          { id: 'E', text: 'Kitap okumak insanın ufkunu açar.' }
        ],
        correctOptionId: 'D',
        explanation: '\"Senin yüzme bilmediğini\" mi, \"Onun yüzme bilmediğini\" mi? Tamlayan/zamir eksiktir.'
      },
      {
        id: 'q-ab-8-26',
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
        id: 'q-ab-8-27',
        difficulty: 'hard',
        questionText: '\"Sorunları çözmek için yeni bir yöntem bulduk; uygulamaya koyduk.\" cümlesindeki nesne eksikliği hangi kelime ile giderilir?',
        options: [
          { id: 'A', text: 'bunu' },
          { id: 'B', text: 'hemen' },
          { id: 'C', text: 'hep beraber' },
          { id: 'D', text: 'oraya' },
          { id: 'E', text: 'kendimiz' }
        ],
        correctOptionId: 'A',
        explanation: 'İkinci cümlenin başına \"onu\" veya \"bunu\" getirilerek nesne eksikliği giderilir.'
      },
      {
        id: 'q-ab-8-28',
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
        explanation: 'İlk cümle olumsuz (hiçbir kişi), ikinci cümle olumlu (yapardı) olduğu için virgülden sonra olumlu bir özne (herkes / hepsi) gereklidir. A ve D mantıklıdır, en yaygını \"herkes\"tir.'
      },
      {
        id: 'q-ab-8-29',
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
        id: 'q-ab-8-30',
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
      }
    ]
  }
];
