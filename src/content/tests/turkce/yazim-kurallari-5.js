export default [
  {
    id: 'test-yazim-kurallari-5-kolay',
    title: 'Yazım Kuralları 5 (Kolay)',
    description: 'Yazım Kuralları - Kolay (41-50)',
    type: 'comprehension',
    order: 13,
    questions: [
      {
        id: 'q-yk-5-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sabahları köpeğim Karabaş ile yürüyüşe çıkarız.' },
          { id: 'B', text: 'Teyzemler her sene ege bölgesine tatile gider.' },
          { id: 'C', text: 'Dayım yarın Almanya\'dan dönüyor.' },
          { id: 'D', text: 'Yeni edebiyat öğretmenimiz Ahmet Bey çok bilgili.' },
          { id: 'E', text: 'Ay, Dünya\'nın tek doğal uydusudur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bölge adlarının her kelimesi büyük harfle başlar. "Ege Bölgesi\'ne" şeklinde yazılmalıdır.'
      },
      {
        id: 'q-yk-5-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Sen ki bu işlerin en iyisisin, nasıl yapamazsın?' },
          { id: 'B', text: 'Bir de baktım ki herkes gitmiş.' },
          { id: 'C', text: 'Sokakta ki köpekler çok acıkmış görünüyordu.' },
          { id: 'D', text: 'Benim ödevim bitti, seninki ne durumda?' },
          { id: 'E', text: 'Dünkü olaydan sonra kimse konuşmadı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Bulunma durumu (yer) bildiren sözcüklere eklenen "-ki" sıfat yapan ki\'dir ve daima bitişik yazılır. "Sokaktaki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-5-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de/da"nın yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Bu güzel geziye bende katılmak istiyorum.' },
          { id: 'B', text: 'Çantamı okulda unutmuşum.' },
          { id: 'C', text: 'Filmin sonunu da hep birlikte izleyelim.' },
          { id: 'D', text: 'Akşam hava çok da sıcak değildi.' },
          { id: 'E', text: 'Söylediklerinde hiç de haksız değilsin.' }
        ],
        correctOptionId: 'A',
        explanation: 'Bağlaç olan "de/da" ayrı yazılır. A seçeneğinde "ben de" (dahi, bile anlamında) bağlaçtır ve ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-5-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı doğrudur?',
        options: [
          { id: 'A', text: 'Pek çok' },
          { id: 'B', text: 'Herşey' },
          { id: 'C', text: 'Bir kaç' },
          { id: 'D', text: 'Herkez' },
          { id: 'E', text: 'Bü gün' }
        ],
        correctOptionId: 'A',
        explanation: '"Pek çok" sözcüğü ayrı yazılır, yazımı doğrudur. (Diğerleri: her şey, birkaç, herkes, bugün olmalıdır).'
      },
      {
        id: 'q-yk-5-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde tarihlerin yazımıyla ilgili bir hata yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınavımız 20 Haziran\'da yapılacak.' },
          { id: 'B', text: 'Cumhuriyet 29 ekim 1923\'te ilan edildi.' },
          { id: 'C', text: 'Aralık ayının soğuğu iliklerimize işledi.' },
          { id: 'D', text: 'Her pazar sabahı spor yaparım.' },
          { id: 'E', text: 'Kardeşim 2012 yılında dünyaya geldi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Belirli bir tarihi (rakamla) bildiren ay ve gün adları büyük harfle başlar. "29 Ekim 1923\'te" şeklinde E büyük olmalıdır.'
      },
      {
        id: 'q-yk-5-6',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Her zaman doğruyu söylemek gerekir.' },
          { id: 'B', text: 'Bugün okuldan sonra kütüphaneye gideceğiz.' },
          { id: 'C', text: 'Hiç bir zaman bu kuralı unutmamalısın.' },
          { id: 'D', text: 'Annem doğum günümde bana sürpriz yaptı.' },
          { id: 'E', text: 'Yanlış anlaşıldığım için kendimi kötü hissettim.' }
        ],
        correctOptionId: 'C',
        explanation: '"Hiçbir" kelimesi daima bitişik yazılır. "Hiç bir" şeklindeki ayrı yazım yanlıştır.'
      },
      {
        id: 'q-yk-5-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınıfta yirmi beş öğrenci bulunuyor.' },
          { id: 'B', text: 'Yarışmayı 3\'üncü sırada tamamladı.' },
          { id: 'C', text: 'Toplantı 15.00\'te başlayacak.' },
          { id: 'D', text: 'Çocuklara 5\'er tane ceviz paylaştırdı.' },
          { id: 'E', text: 'Bugün otuz üç yaşına bastı.' }
        ],
        correctOptionId: 'D',
        explanation: 'Üleştirme (paylaştırma) sayıları rakamla değil, daima yazıyla (harfle) yazılır. "beşer" şeklinde olmalıydı.'
      },
      {
        id: 'q-yk-5-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru eki "mi / mı"nın yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Bunu yaparken hiç zorlanmıyor musun?' },
          { id: 'B', text: 'Sen de bizimle konsere gidecekmisin?' },
          { id: 'C', text: 'Yağmur yağdı mı herkes içeri kaçar.' },
          { id: 'D', text: 'Bu haberi daha önce duymuş muydun?' },
          { id: 'E', text: 'Uzun mu uzun bir yolculuğa çıktık.' }
        ],
        correctOptionId: 'B',
        explanation: 'Soru eki "mi" her zaman kendinden önceki kelimeden ayrı yazılır. "gidecek misin?" şeklinde yazılmalıdır.'
      },
      {
        id: 'q-yk-5-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Kirpik' },
          { id: 'B', text: 'Kibrit' },
          { id: 'C', text: 'Şoför' },
          { id: 'D', text: 'Sarmısak' },
          { id: 'E', text: 'Makine' }
        ],
        correctOptionId: 'D',
        explanation: 'Kelimenin doğru yazımı "sarımsak" şeklindedir (a ve ı harflerinin yer değiştirdiği "sarmısak" yanlıştır).'
      },
      {
        id: 'q-yk-5-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde kısaltmaların yazımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'TBMM\'nin açılışı büyük bir coşkuyla kutlandı.' },
          { id: 'B', text: 'TDK\'nun yayımladığı son kılavuzu aldım.' },
          { id: 'C', text: 'İTÜ\'den mezun olmayı çok istiyordu.' },
          { id: 'D', text: 'THY\'ye ait bir uçakla seyahat ettik.' },
          { id: 'E', text: 'ABD\'nin ekonomik kararları tüm dünyayı etkiledi.' }
        ],
        correctOptionId: 'B',
        explanation: 'Büyük harflerle yapılan kısaltmalara getirilen ekler, son harfin okunuşuna göre gelir. "K" harfi "ke" olarak okunur. Bu yüzden "TDK\'nin" olmalıdır.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-5-orta',
    title: 'Yazım Kuralları 5 (Orta)',
    description: 'Yazım Kuralları - Orta (41-50)',
    type: 'comprehension',
    order: 14,
    questions: [
      {
        id: 'q-yk-5-11',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik kelimelerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Verilen ödevleri kısa sürede halletti.' },
          { id: 'B', text: 'Durumu amirine hemen arzedeceğini söyledi.' },
          { id: 'C', text: 'Bana yapılan bu haksızlığı kabul edemem.' },
          { id: 'D', text: 'Eşyalarını toplayıp orayı terk etti.' },
          { id: 'E', text: 'Onun da geleceğini zannediyordum.' }
        ],
        correctOptionId: 'B',
        explanation: 'Yardımcı fiille kurulan birleşik fiillerde ses düşmesi veya türemesi yoksa ayrı yazılır. "Arz etmek" şeklinde ayrı yazılmalıdır.'
      },
      {
        id: 'q-yk-5-12',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili sözcüğün yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'O, <u>yapayalnız</u> kalmış eski bir çınardı.' },
          { id: 'B', text: 'Konferansta <u>art arda</u> önemli sorular soruldu.' },
          { id: 'C', text: 'Karanlıkta <u>el ele</u> tutuşarak ilerlediler.' },
          { id: 'D', text: 'Düşman ordusu <u>birden bire</u> karşılarına çıktı.' },
          { id: 'E', text: 'Kitapları <u>yan yana</u> dizmeyi çok sever.' }
        ],
        correctOptionId: 'D',
        explanation: '"Birdenbire" kelimesi anlamca kaynaşmış birleşik kelime olduğu için bitişik yazılır. Ayrı yazımı yanlıştır.'
      },
      {
        id: 'q-yk-5-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde büyük harflerin yazımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Yaz tatilinde Van Gölü çevresini dolaştık.' },
          { id: 'B', text: 'Ablam, Ankara üniversitesinden dereceyle mezun oldu.' },
          { id: 'C', text: 'Doktor Ali Bey hastalarla çok yakından ilgileniyor.' },
          { id: 'D', text: 'Türkiye\'nin İç Anadolu Bölgesi tahıl ambarıdır.' },
          { id: 'E', text: 'Türk Dil Kurumu 1932\'de kurulmuştur.' }
        ],
        correctOptionId: 'B',
        explanation: 'Kurum ve kuruluş adlarının her kelimesi büyük harfle başlar. "Ankara Üniversitesi" şeklinde Ü büyük yazılmalıdır.'
      },
      {
        id: 'q-yk-5-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı yanlıştır?',
        options: [
          { id: 'A', text: 'Kolektif' },
          { id: 'B', text: 'Orijinal' },
          { id: 'C', text: 'Entellektüel' },
          { id: 'D', text: 'Menü' },
          { id: 'E', text: 'Laboratuvar' }
        ],
        correctOptionId: 'C',
        explanation: 'Doğru yazım "entelektüel" şeklindedir (tek "l" ile).'
      },
      {
        id: 'q-yk-5-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Anlıyorum ki bana çok kırılmışsın.' },
          { id: 'B', text: 'Oysaki biz ona ne kadar güvenmiştik.' },
          { id: 'C', text: 'Yarın ki maça gitmeyi çok istiyorum.' },
          { id: 'D', text: 'Benim kalemim kırıldı, seninki sağlam mı?' },
          { id: 'E', text: 'Öyle hızlı koştu ki kimse yetişemedi.' }
        ],
        correctOptionId: 'C',
        explanation: 'Zaman bildiren sözcüklere eklenen "-ki" yapım ekidir ve bitişik yazılır. "Yarınki" şeklinde bitişik olmalıydı.'
      },
      {
        id: 'q-yk-5-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde kesme işaretinin (\') kullanımıyla ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'İstanbul\'un fethi 1453 yılında gerçekleşmiştir.' },
          { id: 'B', text: 'Atatürk\'ün Söylev\'ini defalarca okudum.' },
          { id: 'C', text: 'Türkçe\'nin kurallarını öğrenmek çok önemlidir.' },
          { id: 'D', text: 'Cumhuriyet, 1923\'te ilan edildi.' },
          { id: 'E', text: 'Türkiye Büyük Millet Meclisi\'ne dilekçe verdik.' }
        ],
        correctOptionId: 'C',
        explanation: 'Özel adlara getirilen yapım ekleri ve bunlardan sonra gelen çekim ekleri kesme ile ayrılmaz. "Türkçenin" şeklinde kesmesiz olmalıdır.'
      },
      {
        id: 'q-yk-5-17',
        difficulty: 'medium',
        questionText: 'Yön adlarının yazımıyla ilgili aşağıdaki cümlelerin hangisinde yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Karadeniz\'in doğusu çay tarımı için çok elverişlidir.' },
          { id: 'B', text: 'Bugün rüzgar kuzeydoğudan şiddetli esecekmiş.' },
          { id: 'C', text: 'Batı medeniyeti, Doğu medeniyetinden çok etkilenmiştir.' },
          { id: 'D', text: 'Güneydoğu Anadolu\'da kuraklık riski artıyor.' },
          { id: 'E', text: 'Evin Kuzey cephesi kışın çok soğuk olur.' }
        ],
        correctOptionId: 'E',
        explanation: 'Yön adları özel adın ardından geliyorsa veya tek başına kullanılıyorsa küçük harfle başlar. "Evin kuzey cephesi" şeklinde küçük k ile yazılmalıydı.'
      },
      {
        id: 'q-yk-5-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki birleşik sözcüklerden hangisi yanlış yazılmıştır?',
        options: [
          { id: 'A', text: 'Vatansever' },
          { id: 'B', text: 'Gözyaşı' },
          { id: 'C', text: 'Altyapı' },
          { id: 'D', text: 'İşbirliği' },
          { id: 'E', text: 'Kuzeybatı' }
        ],
        correctOptionId: 'D',
        explanation: '"İş birliği" sözcüğü daima ayrı yazılır. Bitişik yazılması yanlıştır.'
      },
      {
        id: 'q-yk-5-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde "mi" ekinin yazımında yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sınavın ne zaman olacağını biliyor musun?' },
          { id: 'B', text: 'Hava soğudu mu göçmen kuşlar güneye uçar.' },
          { id: 'C', text: 'Oraya daha önce gitmiş miydin?' },
          { id: 'D', text: 'Bunu sana o mu anlattı?' },
          { id: 'E', text: 'Akşam bizimle yemeğe gelirmisin?' }
        ],
        correctOptionId: 'E',
        explanation: 'Soru eki "mi" her zaman kendinden önceki kelimeden ayrı yazılır. "gelir misin" şeklinde olmalıydı.'
      },
      {
        id: 'q-yk-5-20',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımıyla ilgili bir kural hatası vardır?',
        options: [
          { id: 'A', text: 'Maçın kırk beşinci dakikasında gol oldu.' },
          { id: 'B', text: 'Şirket tam onbeş milyon lira kar etmiş.' },
          { id: 'C', text: 'Çocuklara ikişer ceviz paylaştırdı.' },
          { id: 'D', text: 'Toplantı saat 14.15\'te yapılacak.' },
          { id: 'E', text: 'Babası bugün elli yaşına bastı.' }
        ],
        correctOptionId: 'B',
        explanation: 'Sayılar yazıyla yazıldığında her kelime ayrı yazılır. "on beş" şeklinde ayrı yazılmalıydı.'
      }
    ]
  },
  {
    id: 'test-yazim-kurallari-5-zor',
    title: 'Yazım Kuralları 5 (Zor)',
    description: 'Yazım Kuralları - Zor (41-50)',
    type: 'comprehension',
    order: 15,
    questions: [
      {
        id: 'q-yk-5-21',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde birleşik fiillerin yazımıyla ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Bu zor günlerin geçeceğini ümit ediyorum.' },
          { id: 'B', text: 'Kendisine yapılan bu haksızlığı sineye çekemem dedi.' },
          { id: 'C', text: 'Konuyu ona daha dün farketmiştim.' },
          { id: 'D', text: 'Onun da bizimle geleceğini zannediyordum.' },
          { id: 'E', text: 'Verilen görevleri başarıyla halletti.' }
        ],
        correctOptionId: 'C',
        explanation: '"Fark etmek" fiilinde herhangi bir ses düşmesi veya türemesi olmadığı için ayrı yazılması gerekir: "fark etmiştim".'
      },
      {
        id: 'q-yk-5-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Toplantıda yeni bir <u>iş birliği</u> anlaşması imzalandı.' },
          { id: 'B', text: 'Öğrenciler dersleri <u>çevrim içi</u> platformdan takip etti.' },
          { id: 'C', text: 'Trafiği rahatlatmak için <u>çevre yolu</u> çalışması başladı.' },
          { id: 'D', text: 'Alınan kararlar <u>oy birliği</u> ile kabul edildi.' },
          { id: 'E', text: 'Bahçedeki <u>aslan ağzı</u> çiçekleri çok güzel açmış.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bitki adlarından biri veya ikisi anlam kaymasına uğrayarak kendi anlamından uzaklaşmışsa bitişik yazılır. "Aslanağzı" bitişik olmalıydı.'
      },
      {
        id: 'q-yk-5-23',
        difficulty: 'hard',
        questionText: 'Yer, millet ve kişi adlarıyla kurulan birleşik kelimelerde sadece özel adlar büyük harfle başlar. Aşağıdakilerin hangisinde bu kurala uyulmamıştır?',
        options: [
          { id: 'A', text: 'Dondurmacıdan külah külah Maraş dondurması aldık.' },
          { id: 'B', text: 'Teyzem bahçesinde güzel bir Van kedisi besliyor.' },
          { id: 'C', text: 'Babam İngiliz anahtarını alet çantasında bulamadı.' },
          { id: 'D', text: 'Tatlı için yarım kilo Antep Fıstığı sipariş ettik.' },
          { id: 'E', text: 'Tarladaki Hint keneviri bitkileri söküldü.' }
        ],
        correctOptionId: 'D',
        explanation: '"Antep fıstığı" şeklinde fıstığın "f"si küçük yazılmalıdır. Sadece özel ad (Antep) büyük yazılır.'
      },
      {
        id: 'q-yk-5-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "ki" nin yazımı ile ilgili yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'Sana güveniyorum ki bu sırrımı paylaşıyorum.' },
          { id: 'B', text: 'Dünkü toplantı gerçekten çok verimliydi.' },
          { id: 'C', text: 'Halbuki ona ne kadar çok yardım etmiştim.' },
          { id: 'D', text: 'Benim şemsiyem bozuk, seninki çalışıyor mu?' },
          { id: 'E', text: 'O kadar yorulmuştu ki, ev de ki koltuğa yığılıverdi.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "ev de ki" ifadesinde hem bulunma eki olan -de hem de ilgi/sıfat yapan -ki yanlış ayrılmıştır. "evdeki" şeklinde tamamen bitişik yazılmalıdır.'
      },
      {
        id: 'q-yk-5-25',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde yazım yanlışı yoktur?',
        options: [
          { id: 'A', text: 'Birtakım insanlar bu kurala uymakta zorlanıyor.' },
          { id: 'B', text: 'Hiçkimse onun bu kadar başarılı olacağını beklemiyordu.' },
          { id: 'C', text: 'Haftasonu ailesiyle birlikte pikniğe gidecekler.' },
          { id: 'D', text: 'Başbaşa verip bu sorunun üstesinden gelecekler.' },
          { id: 'E', text: 'Herşeyin bir zamanı olduğunu asla unutmamalıyız.' }
        ],
        correctOptionId: 'A',
        explanation: 'A şıkkında "birtakım" kelimesi "bazı" anlamında kullanıldığı için bitişik yazılmıştır ve doğrudur. Diğerlerindeki hatalar: B\'de "Hiç kimse" (ayrı), C\'de "Hafta sonu" (ayrı), D\'de "Baş başa" (ayrı), E\'de "Her şey" (ayrı) olmalıdır.'
      },
      {
        id: 'q-yk-5-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki altı çizili sözcüklerin hangisinde büyük harflerin kullanımı ile ilgili bir yanlışlık vardır?',
        options: [
          { id: 'A', text: 'Milli Eğitim Bakanı yarın <u>Okulumuzu</u> ziyaret edecek.' },
          { id: 'B', text: 'Yeni tasarı yarın <u>Bakanlar Kurulu\'nda</u> görüşülecek.' },
          { id: 'C', text: 'Batı <u>Anadolu\'nun</u> tarihi güzellikleri herkesi büyüler.' },
          { id: 'D', text: 'Toplantıda <u>Kaymakam</u> Bey önemli açıklamalar yaptı.' },
          { id: 'E', text: 'Son yıllarda <u>Uzak Doğu</u> mutfağına olan ilgi arttı.' }
        ],
        correctOptionId: 'A',
        explanation: 'Özel isim olmayan ve belirli bir kurumu özel olarak kastetmeyen (cümle başı olmayan) cins isimler küçük harfle başlar. "okulumuzu" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-5-27',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayıların yazımı ile ilgili bir yazım yanlışı vardır?',
        options: [
          { id: 'A', text: 'Cumhuriyetin yüzüncü yılı büyük bir coşkuyla kutlandı.' },
          { id: 'B', text: 'Sınıftaki öğrencileri 5\'erli gruplara ayırdı.' },
          { id: 'C', text: 'Kızım bu yıl sekizinci sınıfa geçti.' },
          { id: 'D', text: 'Toplantıya tam yirmi beş farklı ülkeden delege katıldı.' },
          { id: 'E', text: 'Saat 15.30\'da meydanda buluşacağız.' }
        ],
        correctOptionId: 'B',
        explanation: 'Üleştirme sayıları rakamla değil yazıyla (harfle) belirtilir. "beşerli" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-5-28',
        difficulty: 'hard',
        questionText: 'Tarihi olay, çağ ve dönem adları büyük harfle başlar. Buna göre aşağıdakilerin hangisinde yazım yanlışı yapılmıştır?',
        options: [
          { id: 'A', text: 'Avrupa, Orta Çağ\'da skolastik düşüncenin etkisinde kalmıştır.' },
          { id: 'B', text: 'Kurtuluş Savaşı\'mız destansı bir mücadelenin ürünüdür.' },
          { id: 'C', text: 'Servetifünun Dönemi, şiirin çok geliştiği bir dönemdir.' },
          { id: 'D', text: 'Cilalı Taş Devri\'nde insanlar tarımla uğraşmaya başlamıştır.' },
          { id: 'E', text: 'Milli edebiyat dönemi sanatçıları halkı eğitmeyi amaçlamıştır.' }
        ],
        correctOptionId: 'E',
        explanation: 'Tarihi dönem adlarının tüm kelimeleri büyük harfle başlar. "Milli Edebiyat Dönemi" şeklinde E ve D harfleri büyük yazılmalıdır.'
      },
      {
        id: 'q-yk-5-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "de/da" bağlacının yazımı ile ilgili bir yanlışlık yapılmıştır?',
        options: [
          { id: 'A', text: 'O kadar yorgunum ki ayakta duracak halim de kalmadı.' },
          { id: 'B', text: 'Bu işi bitirsekte eve gitsek diye bekliyoruz.' },
          { id: 'C', text: 'Senin de bizimle aynı fikirde olmana çok sevindim.' },
          { id: 'D', text: 'Kitap da okudu, film de izledi ama can sıkıntısı geçmedi.' },
          { id: 'E', text: 'Evde de okulda da hep aynı sessizliği koruyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'Bağlaç olan "de/da" ayrı yazılır ve sertleşme (ünsüz benzeşmesi) kuralına uyarak "te/ta" şekline dönüşmez. "bitirsek de" şeklinde yazılmalıydı.'
      },
      {
        id: 'q-yk-5-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki kelimelerden hangisinin yazımı TDK kurallarına göre doğrudur?',
        options: [
          { id: 'A', text: 'İnsiyatif' },
          { id: 'B', text: 'Ateşböceği' },
          { id: 'C', text: 'Kareografi' },
          { id: 'D', text: 'Süpriz' },
          { id: 'E', text: 'Röportaj' }
        ],
        correctOptionId: 'E',
        explanation: '"Röportaj" kelimesinin yazımı doğrudur. Yanlışların doğruları: İnisiyatif, Ateş böceği (ayrı), Koreografi, Sürpriz.'
      }
    ]
  }
];
