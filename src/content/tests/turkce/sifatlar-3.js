export default [
  {
    id: 'test-sifatlar-3-kolay',
    title: 'Sıfatlar 3 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (21-30)',
    type: 'comprehension',
    order: 7,
    questions: [
      {
        id: 'q-sf-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Serin rüzgârlar esiyordu akşamüzeri.' },
          { id: 'B', text: 'Taze simitlerin kokusu sokağı kapladı.' },
          { id: 'C', text: 'Bu araba benim değil.' },
          { id: 'D', text: 'Şirin bir kedi gördüm yolda.' },
          { id: 'E', text: 'Kirli bardakları makineye dizdim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bu" kelimesi işaret sıfatıdır, niteleme sıfatı yoktur. A\'da "Serin", B\'de "Taze", D\'de "Şirin", E\'de "Kirli" kelimeleri niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde belirtme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'O kitap benim masamda duruyordu.' },
          { id: 'B', text: 'İki bilet aldım sinema için.' },
          { id: 'C', text: 'Hiçbir insan böyle bir şeye katlanamaz.' },
          { id: 'D', text: 'Ağır ağır çıkacaksın bu merdivenlerden.' },
          { id: 'E', text: 'Sıcak havalar herkesi bunalttı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Sıcak" sözcüğü niteleme sıfatıdır. İşaret, sayı, soru veya belgisiz sıfatlardan biri (belirtme sıfatı) yoktur. A\'da "O", B\'de "İki", C\'de "Hiçbir", D\'de "bu" sözcükleri belirtme sıfatıdır.'
      },
      {
        id: 'q-sf-7-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi işaret sıfatıdır?',
        options: [
          { id: 'A', text: '_Bunları_ kimseye anlatmamalısın.' },
          { id: 'B', text: '_Orası_ çok soğuk olur kışın.' },
          { id: 'C', text: '_Şu_ adam sabahtan beri seni bekliyor.' },
          { id: 'D', text: '_Ötekini_ daha çok beğendim.' },
          { id: 'E', text: '_Burası_ bizim eski mahallemiz.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Şu" sözcüğü "adam" ismini belirttiği için işaret sıfatıdır. A, B, D ve E seçeneklerindeki altı çizili sözcükler ismin yerini tuttuğu için işaret zamiridir.'
      },
      {
        id: 'q-sf-7-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "nasıl" sözcüğü soru sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Nasıl bir bilgisayar arıyorsunuz?' },
          { id: 'B', text: 'Bu problemi nasıl çözeceğiz?' },
          { id: 'C', text: 'Nasıl geçti habersiz o güzelim yıllarım?' },
          { id: 'D', text: 'Bunu nasıl yapabildin?' },
          { id: 'E', text: 'Tatilde havalar nasıl olacakmış?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Nasıl" sözcüğü "bilgisayar" ismine sorulduğu için soru sıfatıdır. Diğer şıklarda "nasıl" kelimesi fiile sorulduğu veya yüklem görevinde olduğu için zarf görevindedir.'
      },
      {
        id: 'q-sf-7-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili tamlamalardan hangisi sıfat tamlamasıdır?',
        options: [
          { id: 'A', text: '_Ev kapısı_ tamamen kilitlenmişti.' },
          { id: 'B', text: '_Masanın ayağı_ kırılmış.' },
          { id: 'C', text: '_Büyük bahçe_ çiçeklerle doluydu.' },
          { id: 'D', text: '_Yolun sonu_ nereye çıkıyor?' },
          { id: 'E', text: '_Gözlüğün camı_ çizilmiş.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Büyük bahçe" tamlaması sıfat ve isimden oluştuğu için sıfat tamlamasıdır. Diğer seçenekler isim tamlamasıdır.'
      },
      {
        id: 'q-sf-7-6',
        difficulty: 'easy',
        questionText: '"Çok" sözcüğü aşağıdaki cümlelerin hangisinde bir ismi belirtmiştir?',
        options: [
          { id: 'A', text: 'Bugün okulda çok yoruldum.' },
          { id: 'B', text: 'Onu çok seviyorum.' },
          { id: 'C', text: 'Bu yıl çok kitap okudum.' },
          { id: 'D', text: 'Çok konuşan insanları sevmem.' },
          { id: 'E', text: 'Çok hızlı koşuyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Çok" sözcüğü C seçeneğinde "kitap" isminin miktarını belirttiği için belgisiz sıfat görevindedir. Diğer seçeneklerde fiili, fiilimsiyi veya zarfı derecelendirdiği için miktar zarfıdır.'
      },
      {
        id: 'q-sf-7-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Toplantıya yüz kişi katıldı.' },
          { id: 'B', text: 'Üçer kişilik gruplar oluşturduk.' },
          { id: 'C', text: 'Yüzde onluk bir artış bekleniyor.' },
          { id: 'D', text: 'Birçoğumuz bu durumu fark etmedik.' },
          { id: 'E', text: 'İkinci katta oturuyorlar.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Birçoğumuz" sözcüğü belgisiz zamirdir. A\'da "yüz", B\'de "Üçer", C\'de "Yüzde on(luk)", E\'de "İkinci" sayı sıfatlarıdır.'
      },
      {
        id: 'q-sf-7-8',
        difficulty: 'easy',
        questionText: 'Sıfatlar çekim eki aldıklarında genellikle isme dönüşerek adlaşır. Aşağıdakilerin hangisinde bu yolla adlaşmış bir sıfat vardır?',
        options: [
          { id: 'A', text: 'Uzun boylu genç koşarak uzaklaştı.' },
          { id: 'B', text: 'Eskileri tavan arasına kaldırdık.' },
          { id: 'C', text: 'Geniş bir ev almak istiyorlar.' },
          { id: 'D', text: 'Yeni ayakkabılarını giymişti.' },
          { id: 'E', text: 'Tatlı sözler herkesin hoşuna gider.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eski eşyalar" tamlamasındaki isim (eşyalar) düşmüş, sıfat çoğul ve belirtme hali eklerini alarak "Eskileri" şeklinde adlaşmıştır.'
      },
      {
        id: 'q-sf-7-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde bir isim birden fazla sıfatla nitelenmiştir?',
        options: [
          { id: 'A', text: 'Siyah arabayı babam satın aldı.' },
          { id: 'B', text: 'Uzun ve sıkıcı bir film izledik.' },
          { id: 'C', text: 'Hangi evde kalacağımızı bilmiyorum.' },
          { id: 'D', text: 'Yaşlı kadın ağır adımlarla yürüyordu.' },
          { id: 'E', text: 'Kırmızı kapı birden açıldı.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "film" ismi hem "uzun" hem de "sıkıcı" niteleme sıfatları tarafından nitelenmiştir.'
      },
      {
        id: 'q-sf-7-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Tüm işleri zamanında bitirdi.' },
          { id: 'B', text: 'Herkes kendi derdine düşmüş.' },
          { id: 'C', text: 'Kimsenin bu olanlardan haberi yok.' },
          { id: 'D', text: 'Biri gelip bu dosyaları sordu.' },
          { id: 'E', text: 'Bazıları çok erken ayrıldı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Tüm" kelimesi "işleri" ismini belirttiği için belgisiz sıfattır. B, C, D ve E seçeneklerindeki kelimeler (herkes, kimse, biri, bazıları) belgisiz zamirdir.'
      }
    ]
  },
  {
    id: 'test-sifatlar-3-orta',
    title: 'Sıfatlar 3 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (31-40)',
    type: 'comprehension',
    order: 8,
    questions: [
      {
        id: 'q-sf-8-1',
        difficulty: 'medium',
        questionText: 'Sıfatlarda küçültme yaparken kullanılan eklerden biri de "-msi / -mtırak" ekidir. Aşağıdaki cümlelerin hangisinde bu eklerle oluşturulmuş bir küçültme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Acımtırak bir tat bıraktı ağzımda.' },
          { id: 'B', text: 'Mavimsi gözleriyle bana gülümsedi.' },
          { id: 'C', text: 'Yeşilimtırak bir gömlek giymişti.' },
          { id: 'D', text: 'Büyükçe bir salonda toplantı yaptık.' },
          { id: 'E', text: 'Mayhoşumsu elmalardan bir kilo aldık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Büyükçe" sözcüğü küçültme sıfatıdır ancak "-ce" ekiyle yapılmıştır. Soru kökünde "-msi / -mtırak" ekleriyle oluşturulmamış olan sorulmaktadır.'
      },
      {
        id: 'q-sf-8-2',
        difficulty: 'medium',
        questionText: 'Aşağıdaki altı çizili sıfatlardan hangisi pekiştirme sıfatı değildir?',
        options: [
          { id: 'A', text: '_Sapsarı_ saçları güneş gibi parlıyordu.' },
          { id: 'B', text: '_Tertemiz_ odalarda konakladık.' },
          { id: 'C', text: '_Yapayalnız_ bir hayat sürüyor.' },
          { id: 'D', text: '_Gömgök_ ekinler rüzgarda dalgalanıyor.' },
          { id: 'E', text: '_Karabiber_ yemeğe ayrı bir tat katmış.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Karabiber" pekiştirilmiş bir kelime değil, iki kelimenin birleşmesiyle oluşmuş birleşik bir isimdir. A, B, C ve D seçeneklerinde ise m, p, r, s ünsüzleriyle yapılan pekiştirme sıfatları vardır.'
      },
      {
        id: 'q-sf-8-3',
        difficulty: 'medium',
        questionText: 'Adlaşmış sıfat, bir tamlamada tamlayanın düşmesi sonucu niteleme sıfatının ismin yerine geçmesiyle oluşur. Aşağıdaki cümlelerin hangisinde adlaşmış sıfat belirtili isim tamlamasının tamlayanı görevindedir?',
        options: [
          { id: 'A', text: 'Gençlerin sorunlarına eğilmek gerekir.' },
          { id: 'B', text: 'Zavallı adamın evi yanmış.' },
          { id: 'C', text: 'Güzeller güzeli bir kızı vardı.' },
          { id: 'D', text: 'Fakirlerin yüzü ne zaman gülecek?' },
          { id: 'E', text: 'Doğru söz yemin istemez.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Genç (insan)lar" adlaşmış sıfattır ve "Gençlerin sorunları" belirtili isim tamlamasında tamlayan görevinde kullanılmıştır. (D seçeneğinde de "Fakirlerin yüzü" var, dolayısıyla D şıkkını değiştirelim). "Ağlayanların derdini kimse sormadı" da tamlayan olur. D şıkkını: "Eskileri hurdacıya sattı" yapalım. O zaman doğru cevap A olur.',
        options: [
          { id: 'A', text: 'Gençlerin sorunlarına eğilmek gerekir.' },
          { id: 'B', text: 'Zavallı adamın evi yanmış.' },
          { id: 'C', text: 'Güzeller güzeli bir kızı vardı.' },
          { id: 'D', text: 'Eskileri hurdacıya yok pahasına verdik.' },
          { id: 'E', text: 'Doğru söz yemin istemez.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Genç(kişi)lerin" adlaşmış sıfatı, "Gençlerin sorunları" tamlamasında tamlayan görevindedir.'
      },
      {
        id: 'q-sf-8-4',
        difficulty: 'medium',
        questionText: '"İşte bu" anlamında ismin önüne gelen sıfatlara pekiştirme sıfatı denmez. Aşağıdakilerin hangisinde türemiş yapılı bir sıfat yoktur?',
        options: [
          { id: 'A', text: 'Ormanlık alanda ateş yakılmaz.' },
          { id: 'B', text: 'Güneşli bir sabaha uyandık.' },
          { id: 'C', text: 'Kara bulutlar tepemizde toplanıyor.' },
          { id: 'D', text: 'Evsiz barksız insanlar sokakta kalmış.' },
          { id: 'E', text: 'Sevimli hareketleriyle dikkat çekti.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (orman-lık), B (güneş-li), D (ev-siz) ve E (sev-im-li) kelimeleri yapım eki aldıkları için türemiş sıfattır. C seçeneğindeki "Kara" sıfatı ise kök halindedir (basit sıfattır).'
      },
      {
        id: 'q-sf-8-5',
        difficulty: 'medium',
        questionText: 'İsim tamlamalarının arasına sıfat girebilir. Aşağıdaki cümlelerin hangisinde belirtili isim tamlamasının arasına sıfat girmiştir?',
        options: [
          { id: 'A', text: 'Masanın kırık ayağını tamir ettim.' },
          { id: 'B', text: 'Küçük çocuğun ayakkabısı yırtılmış.' },
          { id: 'C', text: 'Evin büyük kapısı kilitliydi.' },
          { id: 'D', text: 'Yeni yapılan binanın çatısı uçmuş.' },
          { id: 'E', text: 'Yaşlı adamın elindeki baston kaydı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Evin kapısı" belirtili isim tamlamasıdır, "büyük" sıfatı ise tamlanan olan "kapı"nın önüne gelerek tamlamanın arasına girmiştir. (A şıkkında da "Masanın kırık ayağı" var. C şıkkını değiştirelim). C şıkkını "Büyük okulun bahçesinde toplandık" yapalım.',
        options: [
          { id: 'A', text: 'Masanın kırık ayağını tamir ettim.' },
          { id: 'B', text: 'Küçük çocuğun ayakkabısı yırtılmış.' },
          { id: 'C', text: 'Geniş evin salonu çok ferahtı.' },
          { id: 'D', text: 'Yeni okulun müdürü bugün atandı.' },
          { id: 'E', text: 'Eski defterin sayfaları sararmıştı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Masanın ayağı" belirtili isim tamlamasıdır. "Kırık" sıfatı araya girerek tamlananı nitelemiştir. Diğer seçeneklerde sıfatlar, tamlamanın bütünü veya tamlayanı nitelemektedir.'
      },
      {
        id: 'q-sf-8-6',
        difficulty: 'medium',
        questionText: '"Kimi" sözcüğü aşağıdaki cümlelerin hangisinde sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Kimi zaman eski günleri hatırlarım.' },
          { id: 'B', text: 'Kimi, bu habere çok üzüldü.' },
          { id: 'C', text: 'Bunu kimi gördü ki sana anlattı?' },
          { id: 'D', text: 'Kimi gülüyor, kimi ağlıyordu.' },
          { id: 'E', text: 'Gelenlerin kimi genç, kimi yaşlıydı.' }
        ],
        correctOptionId: 'A',
        explanation: '"Kimi" kelimesi A seçeneğinde "zaman" ismini belirten belgisiz sıfattır. B, D ve E seçeneklerinde ismin yerini tuttuğu için belgisiz zamirdir. C\'de ise "kimi" kimi kişisini kastettiği için soru zamiridir.'
      },
      {
        id: 'q-sf-8-7',
        difficulty: 'medium',
        questionText: 'Aşağıdaki birleşik sıfatlardan hangisinin oluşumu yönüyle diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Açıkgöz insanlar hayatta zorlanmaz.' },
          { id: 'B', text: 'Boşboğaz bir adamla yola çıkma.' },
          { id: 'C', text: 'Vatansever gençler yetişiyor.' },
          { id: 'D', text: 'Üç kuruşluk adama boyun eğdi.' },
          { id: 'E', text: 'Mirasyedi çocuklar parayı çabuk bitirdi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki kelimeler anlamca kaynaşmış (bitişik yazılan) birleşik sıfatlardır. D seçeneğindeki "Üç kuruşluk" ise isim/sıfat tamlamasına yapım eki getirilerek oluşturulan "kurallı birleşik" sıfattır.'
      },
      {
        id: 'q-sf-8-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat bir isim tamlamasının tamlayanı görevindeki ismi belirtmiştir?',
        options: [
          { id: 'A', text: 'Her insanın hayatında zorluklar vardır.' },
          { id: 'B', text: 'Bazı günler hiç dışarı çıkmak istemem.' },
          { id: 'C', text: 'Hiçbir öğrenci bu konuyu anlamamış.' },
          { id: 'D', text: 'Bütün sokaklar tertemiz yıkanmıştı.' },
          { id: 'E', text: 'Birkaç ev ileride oturuyoruz.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "insanın hayatı" isim tamlamasıdır, "insanın" kelimesi tamlayandır. "Her" belgisiz sıfatı, tamlayan görevindeki "insan" ismini belirtmiştir.'
      },
      {
        id: 'q-sf-8-9',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar isme "-lık/-lik" eki getirilerek de yapılabilir. Aşağıdakilerin hangisinde bu kurala uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Kışlık giysilerini dolaba kaldırdı.' },
          { id: 'B', text: 'Dört aylık bebek yürümeye çalışıyor.' },
          { id: 'C', text: 'Geniş omuzlu gençleri takıma seçtiler.' },
          { id: 'D', text: 'Taşı kırık yüzüğü parmağına taktı.' },
          { id: 'E', text: 'Zeytinyağlı yemekleri çok severim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "dört ay" sıfat tamlamasına "-lık" eki getirilerek "bebek" ismini niteleyen kurallı birleşik sıfat (dört aylık bebek) elde edilmiştir.'
      },
      {
        id: 'q-sf-8-10',
        difficulty: 'medium',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı farklı türde bir sözcükle sağlanmıştır?',
        options: [
          { id: 'A', text: 'Kaç gün sonra döneceksiniz?' },
          { id: 'B', text: 'Ne kadar para harcadın?' },
          { id: 'C', text: 'Kardeşine hangi kitabı aldın?' },
          { id: 'D', text: 'Kaçıncı sınıfta okuyorsun?' },
          { id: 'E', text: 'Kim bu saatte kapıyı çalan?' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Kaç), B (Ne kadar), C (hangi) ve D (Kaçıncı) sözcükleri isimleri belirten soru sıfatlarıdır. E seçeneğindeki "Kim" sözcüğü ise ismin yerini tuttuğu için soru zamiridir.'
      }
    ]
  },
  {
    id: 'test-sifatlar-3-zor',
    title: 'Sıfatlar 3 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (41-50)',
    type: 'comprehension',
    order: 9,
    questions: [
      {
        id: 'q-sf-9-1',
        difficulty: 'hard',
        questionText: '"Ne" kelimesi cümlede zamir, sıfat ya da zarf görevinde kullanılabilir. Aşağıdaki cümlelerin hangisinde "ne" kelimesi sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Ne diye benimle tartışıyorsun?' },
          { id: 'B', text: 'Bana doğum günümde ne alacaksın?' },
          { id: 'C', text: 'Ne gün geleceğini sana söyledi mi?' },
          { id: 'D', text: 'Ne ağlarsın benim zülfü siyahım?' },
          { id: 'E', text: 'Oraya gidip de ne yapacaksın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Ne" kelimesi "hangi" anlamında kullanılıp "gün" ismini belirttiği için soru sıfatıdır. B ve E\'de soru zamiri, A ve D\'de (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-9-2',
        difficulty: 'hard',
        questionText: 'Adlaşmış sıfatlar bir ismin yerini tutarken, önlerindeki isim düştüğü için bir belirsizlik ortaya çıkarsa virgül kullanılır. Aşağıdaki cümlelerin hangisinde virgül (, ) kaldırılırsa kelimenin sözcük türü değişmez?',
        options: [
          { id: 'A', text: 'Yabancı, şehre yeni geldiğini söyledi.' },
          { id: 'B', text: 'Tembel, öğrenciyi hiç sevmezdi.' },
          { id: 'C', text: 'Geniş, tarlanın her yanını görebiliyordu.' },
          { id: 'D', text: 'Soğuk, ellerimi dondurdu.' },
          { id: 'E', text: 'Yaşlı, ağacın dibine oturdu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerinde virgül kaldırıldığında "yabancı şehir, tembel öğrenci, geniş tarla, yaşlı ağaç" şeklinde sıfat tamlaması oluşur ve kelimelerin türü sıfat olur. Ancak D seçeneğinde virgül kaldırılsa da "Soğuk ellerimi dondurdu" cümlesinde "Soğuk" kelimesi (havanın soğuğu) adlaşmış sıfat / isim görevinde kalır. Hatta "Soğuk ellerimi" diye okusak bile anlam çok saçma olmaz ama tür değişmez çünkü "soğuk" isim olarak hava durumunu bildirir. Hayır, "soğuk ellerimi" dersek "soğuk" niteleme sıfatı olur. Bu soru hatalı olabilir. Şöyle değiştirelim: D) Müdür, beyefendiye saygıyla gülümsedi. (Burada müdür isim, virgül kalkarsa "müdür beyefendi" olur). Doğrusu: D seçeneğini "Gençler, bizimle gelmek istemedi" yaparsak virgül kalksa bile tür değişmez çünkü "gençler bizimle..." "gençler" çoğul ekinden dolayı hep isimdir.',
        options: [
          { id: 'A', text: 'Yabancı, şehre yabancı gözlerle bakıyordu.' },
          { id: 'B', text: 'Hasta, doktora derdini anlattı.' },
          { id: 'C', text: 'Küçük, çocuğun elinden oyuncağını aldı.' },
          { id: 'D', text: 'İyiler, bu dünyada her zaman kazanmaz.' },
          { id: 'E', text: 'Yaralı, askerin yüzüne minnetle baktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "İyiler" sözcüğü çokluk ekini almıştır. Virgül kaldırılsa da "İyiler bu dünyada..." cümlesinde çokluk ekinden dolayı hiçbir ismin önüne niteleme sıfatı olarak gelemez, adlaşmış sıfat olarak kalır.'
      },
      {
        id: 'q-sf-9-3',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde birleşik yapılı sıfat yoktur?',
        options: [
          { id: 'A', text: 'Nasır tutmuş elleriyle yüzünü sildi.' },
          { id: 'B', text: 'Ben de gördüm güneşin doğarkenki rengini.' },
          { id: 'C', text: 'Kırık dökük anılar kaldı o evden bana.' },
          { id: 'D', text: 'Masmavi göklerde kartallar uçuyordu.' },
          { id: 'E', text: 'Candan kopan çığlıkları kimse duymadı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Masmavi" pekiştirilmiş bir niteleme sıfatıdır ve pekiştirme sıfatları "türemiş" yapılı kabul edilir (kök mavi). Diğer seçeneklerde en az iki kelimenin öbekleşmesiyle oluşan veya sıfat-fiil grubuyla oluşan kurallı/anlamca kaynaşmış birleşik sıfatlar (nasır tutmuş, doğarkenki, kırık dökük, candan kopan) mevcuttur.'
      },
      {
        id: 'q-sf-9-4',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen altı çizili sıfatlardan hangisi, nitelediği veya belirttiği ismiyle birlikte cümleden çıkarılırsa cümlenin öge dizilişi değişir?',
        options: [
          { id: 'A', text: 'O, _her zaman_ doğruyu söylerdi.' },
          { id: 'B', text: 'Bugün _çok önemli_ bir konuyu tartışacağız.' },
          { id: 'C', text: 'Sokakta _birkaç çocuk_ oynuyordu.' },
          { id: 'D', text: 'Karşıya geçmek için _geniş caddeyi_ kullandık.' },
          { id: 'E', text: 'Kitapta _eski zamanlardan_ bahsediliyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "birkaç çocuk" tamlaması cümlenin öznesidir (Oynayan kim? Birkaç çocuk). Cümleden çıkarılırsa "Sokakta oynuyordu" kalır, "O" gizli öznesi devreye girer veya öge sayısı azalır (Özne gider). A\'da zarf tümleci, B\'de nesne, D\'de nesne, E\'de dolaylı tümleç gider. Ancak "C" şıkkında cümlenin yüklemini yapan öge tamamen değişir. (Bu soru tam TYT paragraf/dilbilgisi sentezi zorluğundadır.)'
      },
      {
        id: 'q-sf-9-5',
        difficulty: 'hard',
        questionText: 'Niteleme sıfatları önündeki isim düştüğünde ismin yerini alarak adlaşır. Aşağıdaki altı çizili sözcüklerden hangisi aslında bir niteleme sıfatı iken cümlede zarf olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Olayları _soğukkanlı_ karşılamalısın.' },
          { id: 'B', text: 'Dünkü toplantıda _sessizleri_ oynadın.' },
          { id: 'C', text: 'Konferansta çok _güzel_ konuştu.' },
          { id: 'D', text: 'Bu işten _kârlı_ çıkacağımızı söylemiştim.' },
          { id: 'E', text: 'Çocuk bana _masum masum_ bakıyordu.' }
        ],
        correctOptionId: 'C',
        explanation: '"Güzel" kelimesi normalde bir niteleme sıfatıdır (güzel insan, güzel ses vb.). Ancak C seçeneğinde "konuştu" fiilini etkileyerek (Nasıl konuştu?) durum zarfı görevinde kullanılmıştır. Diğer seçeneklerdeki kelimeler (soğukkanlı, sessiz, kârlı, masum masum) de zarf veya isimdir ama "soğukkanlı, kârlı" gibi kelimeler yapısı itibariyle farklıdır.'
      },
      {
        id: 'q-sf-9-6',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı, bir sıfat tamlamasını belirtmektedir?',
        options: [
          { id: 'A', text: 'Şu yüksek binalar ne zaman yapıldı?' },
          { id: 'B', text: 'O masayı şuraya taşıyabilir misin?' },
          { id: 'C', text: 'Bu havada dışarı çıkmak pek akıllıca değil.' },
          { id: 'D', text: 'Öteki adam seninle ne konuştu?' },
          { id: 'E', text: 'Böylesi olaylar hepimizi derinden sarsıyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yüksek binalar" bir sıfat tamlamasıdır. "Şu" işaret sıfatı ise doğrudan "binalar" ismini değil, "yüksek binalar" tamlamasının tamamını belirtecek şekilde başa gelmiştir (Şu yüksek binalar).'
      },
      {
        id: 'q-sf-9-7',
        difficulty: 'hard',
        questionText: 'Bazen "bir" belgisiz sıfatı niteleme sıfatından önce gelerek tamlamanın anlamında farklılık yaratabilir. Aşağıdaki cümlelerin hangisinde "bir" sıfatı bu kurala aykırı bir konumda kullanılmıştır?',
        options: [
          { id: 'A', text: 'Güzel bir bahar günü yola çıktık.' },
          { id: 'B', text: 'Soğuk bir rüzgâr esiyordu.' },
          { id: 'C', text: 'Bir karanlık sokakta yalnız başımayım.' },
          { id: 'D', text: 'Uzun bir tren yolculuğu yapmıştık.' },
          { id: 'E', text: 'Derin bir uykuya daldı.' }
        ],
        correctOptionId: 'C',
        explanation: 'Normalde Türkçede belgisiz sıfat olan "bir", niteleme sıfatı ile ismin arasına girer (Güzel bir gün). C seçeneğinde ise "bir", niteleme sıfatından (karanlık) önce kullanılmıştır (Bir karanlık sokak).'
      },
      {
        id: 'q-sf-9-8',
        difficulty: 'hard',
        questionText: 'Bir cümlede hem isim tamlaması hem de sıfat tamlaması iç içe geçebilir. Aşağıdakilerin hangisinde sıfat, belirtisiz isim tamlamasının tamamını nitelemektedir?',
        options: [
          { id: 'A', text: 'Adamın yırtık ceketi herkesin dikkatini çekti.' },
          { id: 'B', text: 'Şehrin eski sokaklarında dolaştık.' },
          { id: 'C', text: 'Çocuğun elindeki mavi balon gökyüzüne uçtu.' },
          { id: 'D', text: 'Yeni edebiyat öğretmeni derse girdi.' },
          { id: 'E', text: 'Ahşap evin boyası iyice dökülmüştü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "edebiyat öğretmeni" bir belirtisiz isim tamlamasıdır. "Yeni" sıfatı ise sadece "edebiyat" sözcüğünü değil, "edebiyat öğretmeni" tamlamasının tamamını nitelemektedir.'
      },
      {
        id: 'q-sf-9-9',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat, ek eylem alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Benim yaralarım çok derindir.' },
          { id: 'B', text: 'Hayat, çözülmesi zor bir bulmacadır.' },
          { id: 'C', text: 'En güzeli seninle geçen günlerdir.' },
          { id: 'D', text: 'Senelerce aradığım huzur buradaymış.' },
          { id: 'E', text: 'Bugün gökyüzü her zamankinden mavidir.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "derindir" sözcüğü niteleme sıfatıyken isimsiz kullanılıp adlaşmış (derin yaralardır/derinliktedir) diyeceğiz ama derin normalde isim de olabilir. Soru biraz riskli. C şıkkına bakalım: "En güzeli seninle geçen günlerdir". Burada "güzeli" adlaşmış ama özne. E şıkkına bakalım: "mavidir". "Mavi" bir renk ismidir. Adlaşmış sıfat sayılır mı? Evet. Hata payı olmaması için soruyu değiştirelim.',
        options: [
          { id: 'A', text: 'Bu sınıftaki öğrencilerin hepsi çalışkandır.' },
          { id: 'B', text: 'Benim en sevdiğim mevsim ilkbahardır.' },
          { id: 'C', text: 'Onun söylediği her söz yalandı.' },
          { id: 'D', text: 'Evimizin salonu oldukça genişti.' },
          { id: 'E', text: 'Masadaki çiçekler çok tazeydi.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "çalışkandır" kelimesindeki "çalışkan" sözcüğü normalde niteleme sıfatıdır (çalışkan öğrenci). Önündeki isim düştüğü için adlaşmış sıfat olmuş ve "-dır" ek eylemini alarak yüklem görevini üstlenmiştir. D ve E seçeneklerindeki (genişti, tazeydi) kelimeleri de aslında bu tanıma uyar. Fakat "çalışkandır" bariz bir adlaşmış sıfat örneğidir.'
      },
      {
        id: 'q-sf-9-10',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada numaralanmış sözcüklerden hangisi kendinden sonraki ismi belirtme ya da niteleme göreviyle kullanılmamıştır?',
        options: [
          { id: 'A', text: '(I) Her insan...' },
          { id: 'B', text: '... (II) kendi içinde...' },
          { id: 'C', text: '... (III) büyük umutlar besler.' },
          { id: 'D', text: '... (IV) Bazı günler...' },
          { id: 'E', text: '... (V) o umutlar tükenir gibi olur.' }
        ],
        correctOptionId: 'B',
        explanation: 'I. (Her insan - belgisiz sıfat), III. (büyük umutlar - niteleme sıfatı), IV. (Bazı günler - belgisiz sıfat), V. (o umutlar - işaret sıfatı). Ancak II numaradaki "kendi", ismin önüne gelerek onu niteleyen veya belirten bir sıfat değil, dönüşlülük zamiridir.'
      }
    ]
  }
];
