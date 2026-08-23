export default [
  {
    id: 'test-sifatlar-11-kolay',
    title: 'Sıfatlar 11 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (101-110)',
    type: 'comprehension',
    order: 31,
    questions: [
      {
        id: 'q-sf-11-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Kuru yapraklar rüzgârda uçuşuyordu.' },
          { id: 'B', text: 'Tatlı sözlerle herkesi ikna etmeyi başardı.' },
          { id: 'C', text: 'Onunla geçen yıl bu zamanlar tanışmıştık.' },
          { id: 'D', text: 'Yorgun atlar yavaş yavaş ilerliyordu.' },
          { id: 'E', text: 'Yeşil panjurlu bir evde oturuyorlar.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde niteleme sıfatı ("Nasıl?" sorusuna yanıt veren durum, renk, biçim bildiren kelime) yoktur. A (kuru), B (tatlı), D (yorgun), E (yeşil) seçeneklerinde niteleme sıfatı vardır.'
      },
      {
        id: 'q-sf-11-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi işaret sıfatı değildir?',
        options: [
          { id: 'A', text: '_Bu_ soruyu çözmek gerçekten çok zor.' },
          { id: 'B', text: '_Şu_ ağacın altında biraz dinlenelim.' },
          { id: 'C', text: '_O_ günleri hiçbir zaman unutmayacağım.' },
          { id: 'D', text: '_Öteki_ kalemi bana uzatır mısın?' },
          { id: 'E', text: '_Bunu_ daha önce de konuşmuştuk seninle.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Bunu" kelimesi ismin yerini tuttuğu için işaret zamiridir. Diğer şıklardaki kelimeler (bu soru, şu ağaç, o günler, öteki kalem) isimleri belirten işaret sıfatlarıdır.'
      },
      {
        id: 'q-sf-11-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bugün toplantı neden iptal edildi?' },
          { id: 'B', text: 'Hangi takımı tutuyorsun?' },
          { id: 'C', text: 'Toplantıya kimler katılacak?' },
          { id: 'D', text: 'Bunu nasıl yapacağımızı anladın mı?' },
          { id: 'E', text: 'Oraya ne zaman gideceksiniz?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Hangi" soru sözcüğü "takım" ismini belirttiği için soru sıfatıdır ve soru anlamını sağlayan sözcüktür. A (zarf), C (zamir), D (nasıl-zarf, mı-edat) ve E (zarf) şıklarında sıfat yoktur.'
      },
      {
        id: 'q-sf-11-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Masanın üzerine iki kalem bıraktım.' },
          { id: 'B', text: 'Yarışmayı üçüncü sırada tamamladı.' },
          { id: 'C', text: 'Herkese üçer dilim baklava düştü.' },
          { id: 'D', text: 'Şirket bu yıl yüzde yirmi kâr etmiş.' },
          { id: 'E', text: 'Bütün gece uyumadan ders çalıştım.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Bütün" sözcüğü belgisiz sıfattır, sayı bildiren bir sıfat değildir. A (asıl), B (sıra), C (üleştirme) ve D (kesir) seçeneklerinde sayı sıfatları kullanılmıştır.'
      },
      {
        id: 'q-sf-11-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Kimi insanlar böyle şeylere hiç önem vermez.' },
          { id: 'B', text: 'Hiçbiri bu durumdan memnun değildi.' },
          { id: 'C', text: 'Herkes kendi işiyle meşgul olmalı.' },
          { id: 'D', text: 'Başkalarının ne dediğini çok umursama.' },
          { id: 'E', text: 'Bazıları bu habere çok şaşıracak.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Kimi" kelimesi "insanlar" ismini belirsiz bir şekilde belirten belgisiz sıfattır. Diğer şıklardaki kelimeler (hiçbiri, herkes, başkalarının, bazıları) belgisiz zamirdir.'
      },
      {
        id: 'q-sf-11-6',
        difficulty: 'easy',
        questionText: 'Bir isim aynı anda birden fazla sıfatla nitelenebilir. Aşağıdakilerin hangisinde böyle bir örnek vardır?',
        options: [
          { id: 'A', text: 'Eski defterleri ve kitapları yaktı.' },
          { id: 'B', text: 'Kara, kara bulutlar gökyüzünü sardı.' },
          { id: 'C', text: 'Uzun ve sıkıcı bir film izledik.' },
          { id: 'D', text: 'O kırmızı elbiseyi çok beğendim.' },
          { id: 'E', text: 'Sıcak günlerde dışarı çıkmak zor oluyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "film" ismi hem "uzun" hem de "sıkıcı" kelimeleriyle (iki farklı niteleme sıfatı) nitelenmiştir.'
      },
      {
        id: 'q-sf-11-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Zorlu günleri birlikte atlatacağız.' },
          { id: 'B', text: 'Odanın kapısı açık kalmış.' },
          { id: 'C', text: 'Yeni kitaplarımı çok beğendim.' },
          { id: 'D', text: 'Soğuk havalarda kalın giyinmelisin.' },
          { id: 'E', text: 'Şu masa çok eskimiş.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Odanın kapısı" belirtili isim tamlamasıdır. Cümlede ismi niteleyen veya belirten herhangi bir sıfat (ve sıfat tamlaması) yoktur.'
      },
      {
        id: 'q-sf-11-8',
        difficulty: 'easy',
        questionText: '"İyi" sözcüğü aşağıdaki cümlelerin hangisinde sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bugün kendimi çok iyi hissediyorum.' },
          { id: 'B', text: 'Derslerine her zaman iyi çalışırdı.' },
          { id: 'C', text: 'Bizi burada gerçekten iyi karşıladılar.' },
          { id: 'D', text: 'İyi insanlar bu dünyada hep kaybeder mi?' },
          { id: 'E', text: 'Aramızdaki bağ eskisinden daha iyi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "İyi" kelimesi "insanlar" ismini nitelediği için sıfattır. A, B ve C seçeneklerinde zarf, E seçeneğinde ise isim (yüklem) görevindedir.'
      },
      {
        id: 'q-sf-11-9',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Gençler, parkta toplanıp şarkı söylediler.' },
          { id: 'B', text: 'Sıcak çorba içince kendine geldi.' },
          { id: 'C', text: 'Taze meyveleri sepete doldurdu.' },
          { id: 'D', text: 'Güzel günlerin geleceğine hep inandım.' },
          { id: 'E', text: 'Bozuk yollarda araba sürmek yorucuydu.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Genç kişiler/insanlar" anlamındaki "Gençler", önündeki ismin düşmesi ve çokluk eki almasıyla oluşmuş bir adlaşmış sıfattır.'
      },
      {
        id: 'q-sf-11-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde "bir" sözcüğü sayı (adet) bildiren asıl sayı sıfatı görevindedir?',
        options: [
          { id: 'A', text: 'Bir akşam aniden çıkıp gelebilirim.' },
          { id: 'B', text: 'Onunla tam bir saattir burada bekliyoruz.' },
          { id: 'C', text: 'Güzel bir pazar sabahı kahvaltıya gittik.' },
          { id: 'D', text: 'Sana bunu bir adam sordu az önce.' },
          { id: 'E', text: 'Bu işi ancak bir sen başarabilirsin.' }
        ],
        correctOptionId: 'B',
        explanation: '"Bir" sözcüğü sayı, miktar (1 adet) bildirdiğinde sayı sıfatı olur. B seçeneğinde "bir saat" 1 saatlik süreyi belirttiği için sayı sıfatıdır. A, C ve D\'de (herhangi bir anlamında) belgisiz sıfat, E\'de (sadece anlamında) edattır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-11-orta',
    title: 'Sıfatlar 11 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (111-120)',
    type: 'comprehension',
    order: 32,
    questions: [
      {
        id: 'q-sf-11-11',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları isimlerin önüne gelerek anlamı güçlendirir. Aşağıdakilerin hangisinde ikileme yoluyla oluşturulmuş bir pekiştirme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yapayalnız bir adamdı, kimsesi yoktu.' },
          { id: 'B', text: 'Masmavi denize bakarak hayallere daldık.' },
          { id: 'C', text: 'Tertemiz odalarda konaklamak insanı rahatlatıyor.' },
          { id: 'D', text: 'Büyük büyük binalar dikmişler her yere.' },
          { id: 'E', text: 'Sapsarı saçları rüzgârda uçuşuyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki sıfatlar (m, p, r, s) ünsüzleriyle yapılan klasik pekiştirme yöntemiyle oluşturulmuştur. D seçeneğindeki "büyük büyük" sıfatı ise ikileme yoluyla oluşturulmuş pekiştirme sıfatıdır.'
      },
      {
        id: 'q-sf-11-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatı oluşturan eklerden biri de "-msi / -mtırak" ekidir. Aşağıdaki cümlelerin hangisinde bu eklerle oluşturulmuş bir küçültme sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Mayhoşumsu bir tat bıraktı ağzımda.' },
          { id: 'B', text: 'Yeşilimsi gözleri çok dikkat çekiciydi.' },
          { id: 'C', text: 'Sarımtırak yapraklar yere dökülüyordu.' },
          { id: 'D', text: 'Derince bir kuyu kazdılar bahçeye.' },
          { id: 'E', text: 'Ekşimsi yoğurdu kimse yemek istemedi.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Derince" kelimesi küçültme sıfatıdır ancak "-ca/-ce" ekiyle yapılmıştır. Soru kökünde "-msi / -mtırak" ekleriyle yapılmamış olan sorulmaktadır.'
      },
      {
        id: 'q-sf-11-13',
        difficulty: 'medium',
        questionText: 'Bir cümlede birden çok isim tek bir sıfat tarafından ortak nitelenebilir. Aşağıdaki cümlelerin hangisinde böyle bir kullanım söz konusudur?',
        options: [
          { id: 'A', text: 'Sıcak çayları ve soğuk kahveleri getirdi.' },
          { id: 'B', text: 'Eski defterleri, kitapları ve kalemleri çöpe attı.' },
          { id: 'C', text: 'Uzun, siyah ve parlak saçları vardı.' },
          { id: 'D', text: 'Büyük evler, geniş yollar dikkat çekiyordu.' },
          { id: 'E', text: 'Kırmızı gülleri vazoya, sarı laleleri masaya koydu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Eski" niteleme sıfatı; "defterleri", "kitapları" ve "kalemleri" isimlerinin hepsini ortak olarak niteler (Eski defterler, eski kitaplar, eski kalemler).'
      },
      {
        id: 'q-sf-11-14',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfatlardan hangisinin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Saygılı_ çocukları herkes takdir eder.' },
          { id: 'B', text: '_Renkli_ gözleriyle bana bakıyordu.' },
          { id: 'C', text: '_Kırık_ camları değiştirmek için usta çağırdık.' },
          { id: 'D', text: '_Yorgun_ savaşçılar dinlenmeye çekildi.' },
          { id: 'E', text: '_Soğuk_ sulardan içtiği için hastalandı.' }
        ],
        correctOptionId: 'E',
        explanation: 'Bu seçeneklerdeki tüm kelimeler türemiştir. E şıkkındaki "Soğuk" fiilden isim (soğu-k), A şıkkı (say-gı-lı), vb... Bu soruyu farklı yapılarla (basit, türemiş, birleşik) değiştirelim.',
        options: [
          { id: 'A', text: '_Boşboğaz_ insanlarla sırrını paylaşma.' },
          { id: 'B', text: '_Açıkgöz_ adam hemen duruma müdahale etti.' },
          { id: 'C', text: '_Birkaç_ öğrenci sınavdan erken çıktı.' },
          { id: 'D', text: '_Vatansever_ gençler yurdu koruyacak.' },
          { id: 'E', text: '_Güneşli_ günler göreceğiz çocuklar.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerindeki sıfatlar en az iki kelimenin birleşmesiyle oluşmuş "birleşik yapılı" sıfatlardır. E seçeneğindeki "Güneş-li" ise yapım eki aldığı için "türemiş yapılı" bir sıfattır.'
      },
      {
        id: 'q-sf-11-15',
        difficulty: 'medium',
        questionText: 'Soru anlamı cümlede farklı kelimelerle sağlanabilir. Aşağıdakilerin hangisinde soru anlamı soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Bunu ona hangi yüzle anlatacaksın?' },
          { id: 'B', text: 'Bugün neden okula gelmedi?' },
          { id: 'C', text: 'Toplantı ne zaman başlayacakmış?' },
          { id: 'D', text: 'Bunca zamandır kiminle çalışıyordunuz?' },
          { id: 'E', text: 'Sen de bizimle sinemaya gelecek misin?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "hangi" kelimesi "yüz" ismini belirttiği için soru sıfatıdır ve cümleye soru anlamı katmıştır. Diğerlerinde zarf (B, C), zamir (D) ve edat (E) kullanılmıştır.'
      },
      {
        id: 'q-sf-11-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat yan cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'İyiler bu dünyada her zaman kazanmaz.' },
          { id: 'B', text: 'Gelenler, içerideki koltuklara otursun.' },
          { id: 'C', text: 'Eskileri eskiciye satıp yerine yenilerini aldı.' },
          { id: 'D', text: 'Tembeller sınavda çok zorlandı.' },
          { id: 'E', text: 'Suskunlara pek sır verilmez derler.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Eski eşyaları" anlamındaki "Eskileri" kelimesi adlaşmış sıfattır ve ismin -i (belirtme) hal ekini alarak "Neyi satıp?" sorusuna yanıt verdiği için nesne görevindedir (diğer şıklarda özne veya dolaylı tümleç vardır).'
      },
      {
        id: 'q-sf-11-17',
        difficulty: 'medium',
        questionText: 'Sıfatlar bazen belirtisiz isim tamlamasının önüne gelerek o tamlamanın bütününü nitelerler. Aşağıdakilerin hangisinde böyle bir durum vardır?',
        options: [
          { id: 'A', text: 'Eski köy yolları nihayet asfaltlanıyor.' },
          { id: 'B', text: 'Evin büyük kapısı dün boyandı.' },
          { id: 'C', text: 'Masanın kırık bacağını tamir ettim.' },
          { id: 'D', text: 'Odanın açık penceresinden soğuk giriyor.' },
          { id: 'E', text: 'Çocuğun yırtık ayakkabısını diktiler.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "köy yolları" belirtisiz isim tamlamasıdır. "Eski" sıfatı bu tamlamanın tamamını (eski olan köy yollarını) nitelemektedir. Diğer seçeneklerdeki sıfatlar belirtili isim tamlamasının arasına girerek sadece tamlananları nitelemiştir.'
      },
      {
        id: 'q-sf-11-18',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar birkaç farklı kuralla oluşturulabilir. Aşağıdakilerin hangisinde "sıfat tamlaması + lı/li" kuralıyla oluşturulmuş bir birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Uzun boylu gençlerle voleybol oynadık.' },
          { id: 'B', text: 'Geniş omuzlu sporcular takıma seçildi.' },
          { id: 'C', text: 'Mavi kapaklı defterini evde unutmuş.' },
          { id: 'D', text: 'İki günlük dünyada birbirimizi kırmayalım.' },
          { id: 'E', text: 'Siyah saçlı kız bize doğru koştu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "İki gün" sıfat tamlamasına "-lük" eki getirilerek kurallı birleşik sıfat oluşturulmuştur. Soru kökünde "-lı/-li" eki ile yapılmamış olan sorulmuştur. (A: boy-lu, B: omuz-lu, C: kapak-lı, E: saç-lı).'
      },
      {
        id: 'q-sf-11-19',
        difficulty: 'medium',
        questionText: 'Aşağıdaki tamlamalardan hangisinin türü diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Büyük deniz' },
          { id: 'B', text: 'Sıcak hava' },
          { id: 'C', text: 'Yolcu gemisi' },
          { id: 'D', text: 'Tatlı söz' },
          { id: 'E', text: 'Yeni okul' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki tamlamalar bir sıfat ve bir isimden oluşan "sıfat tamlaması"dır. C seçeneğindeki "Yolcu gemisi" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      },
      {
        id: 'q-sf-11-20',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları saygı, makam, meslek veya akrabalık bildirir. Aşağıdakilerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Doktor Ali Bey hastalarını çok severdi.' },
          { id: 'B', text: 'Ayşe Teyze bize kek yapmış.' },
          { id: 'C', text: 'Gazi Mustafa Kemal Paşa yurdu kurtardı.' },
          { id: 'D', text: 'Bakkal Hasan Amca çok iyi biridir.' },
          { id: 'E', text: 'Zavallı adam yolda yürürken düştü.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Doktor, Bey), B (Teyze), C (Gazi, Paşa), D (Bakkal, Amca) kelimeleri özel isimlerle kullanılarak unvan sıfatı olmuşlardır. E seçeneğindeki "Zavallı" ise niteleme sıfatıdır, unvan bildirmez.'
      }
    ]
  },
  {
    id: 'test-sifatlar-11-zor',
    title: 'Sıfatlar 11 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (121-130)',
    type: 'comprehension',
    order: 33,
    questions: [
      {
        id: 'q-sf-11-21',
        difficulty: 'hard',
        questionText: '"Ne" sözcüğü kullanıldığı yere göre zamir, sıfat veya zarf olabilir. Aşağıdakilerin hangisinde "ne" kelimesi soru sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya gidip de ne yapacaksınız?' },
          { id: 'B', text: 'Bugün marketten ne aldığını söyledi mi?' },
          { id: 'C', text: 'Bana ne gün döneceğini tam olarak söylemedi.' },
          { id: 'D', text: 'Ne bağırıp duruyorsun sabahtan beri?' },
          { id: 'E', text: 'Elindeki o büyük pakette ne var?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Ne" kelimesi "hangi" anlamında kullanılarak "gün" ismini belirtmiş ve soru sıfatı olmuştur. A, B ve E\'de soru zamiri, D\'de (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-11-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerde geçen virgüllerden hangisi kaldırılırsa, adlaşmış sıfat niteleme sıfatına dönüşerek cümlenin anlamı (ve kelimenin türü) değişir?',
        options: [
          { id: 'A', text: 'Kör, adama elindeki bastonuyla vurmaya çalıştı.' },
          { id: 'B', text: 'Ahmet, yarın akşam uçakla İzmir\'e gidecekmiş.' },
          { id: 'C', text: 'Tembeller, bu sınavı geçemeyeceklerini anladılar.' },
          { id: 'D', text: 'Çocuklar, öğretmenlerini dikkatle dinliyordu.' },
          { id: 'E', text: 'Bugün, hava dünden daha soğuk olacakmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde virgül kaldırıldığında "Kör adama..." şeklinde bir sıfat tamlaması oluşur. "Kör" kelimesi adlaşmış sıfat (özne) olmaktan çıkar, "adam" isminin niteleme sıfatı haline gelir.'
      },
      {
        id: 'q-sf-11-23',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen fiilleri değil, niteleme sıfatlarını derecelendirir. Aşağıdakilerin hangisinde miktar zarfı bir sıfatı değil, başka bir zarfı derecelendirmiştir?',
        options: [
          { id: 'A', text: 'Oldukça büyük bir eve taşınacaklar.' },
          { id: 'B', text: 'En güzel şiirleri her zaman o yazar.' },
          { id: 'C', text: 'Pek konuşkan bir adam olmadığını anladım.' },
          { id: 'D', text: 'Daha büyük bir arabaya ihtiyacı varmış.' },
          { id: 'E', text: 'Çok hızlı koşarak yanımızdan uzaklaştı.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "hızlı" kelimesi "koşarak" fiilimsisini nitelediği için zarftır. Başındaki "Çok" kelimesi ise sıfatı değil, "hızlı" zarfını derecelendiren bir miktar zarfıdır. Diğerlerinde (Oldukça, En, Pek, Daha) doğrudan sıfatları derecelendirmiştir.'
      },
      {
        id: 'q-sf-11-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki isim veya zarftan sıfat türetme görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Seninki yine ortalıkta görünmüyor.' },
          { id: 'B', text: 'Odamın rengi, salonunkinden çok daha güzel.' },
          { id: 'C', text: 'Sabahki kazada neyse ki kimse yaralanmamış.' },
          { id: 'D', text: 'O kadar yorulmuştum ki hemen uyudum.' },
          { id: 'E', text: 'Evdekiler bu akşam bize misafirliğe gelecek.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "-ki" eki "sabah" zarfına/ismine gelerek onu "kaza" ismini belirten bir sıfata (Sabahki kaza) dönüştürmüştür. A ve B\'de ilgi zamiri, D\'de bağlaç, E\'de adlaşmış sıfat/zamir görevindedir.'
      },
      {
        id: 'q-sf-11-25',
        difficulty: 'hard',
        questionText: 'Kurallı birleşik sıfatlar, bir sıfat tamlamasının yer değiştirmesi ve isme iyelik eki -(s)i getirilmesi yoluyla oluşturulabilir. Aşağıdakilerin hangisinde bu yolla oluşturulmuş bir birleşik sıfat vardır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu sporcular öne çıksın.' },
          { id: 'B', text: 'Rengi soluk elbiseyi giymek istemiyordu.' },
          { id: 'C', text: 'Üç günlük dünyada birbirimizi kırmayalım.' },
          { id: 'D', text: 'Kırmızı kaplı defteri masada unutmuş.' },
          { id: 'E', text: 'Siyah saçlı bir çocuk bizi izliyordu.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "soluk renk" sıfat tamlaması yer değiştirip isme iyelik eki (reng-i soluk) getirilmiş ve "elbise" ismini niteleyen kurallı birleşik sıfat oluşturulmuştur. Diğerleri "-lı/-li" veya "-lık/-lik" kuralıyla yapılmıştır.'
      },
      {
        id: 'q-sf-11-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde, arasına sıfat girmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Büyük şehirlerin ulaşım derdi hiç bitmiyor.' },
          { id: 'B', text: 'Eski köy yolları nihayet asfaltlanıyor.' },
          { id: 'C', text: 'Adamın yırtık paltosu içimizi burktu.' },
          { id: 'D', text: 'Yeni edebiyat öğretmeni derse bugün başlayacak.' },
          { id: 'E', text: 'Sıcak yaz günleri nihayet sona erdi.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Adamın paltosu" belirtili isim tamlamasıdır. "Yırtık" niteleme sıfatı, tamlayan ile tamlanan arasına girerek tamlananı nitelemiştir.'
      },
      {
        id: 'q-sf-11-27',
        difficulty: 'hard',
        questionText: 'Sıfat-fiiller de tıpkı niteleme sıfatları gibi, önlerindeki isim düştüğünde adlaşmış sıfat(fiil) olurlar. Aşağıdakilerin hangisinde adlaşmamış bir sıfat-fiil kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çok okuyan mı bilir, çok gezen mi?' },
          { id: 'B', text: 'Gelen gideni her zaman aratır.' },
          { id: 'C', text: 'Ağlayanın malı gülene hayretmez.' },
          { id: 'D', text: 'Bilenle bilmeyen bir olur mu hiç?' },
          { id: 'E', text: 'İşleyen demir pas tutmaz.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "-en" sıfat-fiil ekini alan "İşleyen" kelimesi, yanındaki "demir" ismini nitelemiştir (İşleyen demir) ve adlaşmamış, doğrudan sıfat görevinde kalmıştır. Diğer seçeneklerdeki kelimeler (okuyan, gezen, gelen, gideni, ağlayanın, gülene, bilen, bilmeyen) önlerindeki ismin düşmesiyle adlaşmıştır.'
      },
      {
        id: 'q-sf-11-28',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat ek fiil (-idi, -imiş, -ise, -dir) alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Benim en sevdiğim mevsim her zaman ilkbahardır.' },
          { id: 'B', text: 'O zamanlar ben sınıfın en çalışkanıydım.' },
          { id: 'C', text: 'Bugün hava dünden daha soğuktu.' },
          { id: 'D', text: 'Bu araba sandığımdan daha hızlıymış.' },
          { id: 'E', text: 'Benim sadık yârim kara topraktır.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "çalışkanıydım" yüklemi, "çalışkan (öğrenci)" adlaşmış sıfatının ismin düşmesi, iyelik ve ek eylem (-idim) almasıyla oluşmuştur.'
      },
      {
        id: 'q-sf-11-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "o" kelimesi bir ismi nitelemek veya belirtmek yerine, bir ismin yerini tutmuştur?',
        options: [
          { id: 'A', text: 'O adamı bir daha bu mahallede görmek istemiyorum.' },
          { id: 'B', text: 'O kitabı yarın bana mutlaka getirmelisin.' },
          { id: 'C', text: 'O, hiçbir zaman bana verdiği sözden dönmedi.' },
          { id: 'D', text: 'O günlerde hepimiz çok zorluk çektik.' },
          { id: 'E', text: 'O köye bir daha yolum düşer mi bilmiyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" kelimesi bir kişinin isminin yerini tuttuğu için kişi zamiri görevindedir. Diğer seçeneklerde ise isimleri (adam, kitap, gün, köy) belirttiği için işaret sıfatıdır.'
      },
      {
        id: 'q-sf-11-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen altı çizili sıfat tamlamalarından hangisi, yapısı bakımından diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Soğuk kış_ günleri nihayet geride kaldı.' },
          { id: 'B', text: '_Büyük ev_ hayaliyle yıllarca para biriktirdi.' },
          { id: 'C', text: '_Yeni araba_ kokusu herkesin hoşuna gider.' },
          { id: 'D', text: '_Kırık dökük_ sandalyelerde oturmaktan yorulduk.' },
          { id: 'E', text: '_Boş sokaklar_ geceleyin insanı ürkütüyor.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (soğuk), B (büyük), C (yeni), E (boş) seçeneklerindeki sıfatlar basit yapıdadır. D seçeneğindeki "Kırık dökük" ise iki kelimeden (ikileme) oluşan, grubu oluşturan kelimeleri de türemiş yapılı olan bir sıfat tamlamasıdır. Yapı bakımından farklı olan budur.'
      }
    ]
  }
];
