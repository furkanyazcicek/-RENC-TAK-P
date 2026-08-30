export default [
  {
    id: 'test-sifatlar-7-kolay',
    title: 'Sıfatlar 7 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (61-70)',
    type: 'comprehension',
    order: 19,
    questions: [
      {
        id: 'q-sf-7-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Çiçekleri vazoya dikkatlice yerleştirdi.' },
          { id: 'B', text: 'Soğuk havalar yakında başlıyormuş.' },
          { id: 'C', text: 'Onu dünkü toplantıda gördün mü?' },
          { id: 'D', text: 'Kimse bu işe el atmak istemedi.' },
          { id: 'E', text: 'Yarın oraya tek başıma gideceğim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Soğuk" kelimesi, "havalar" isminin durumunu nitelediği (Nasıl havalar?) için niteleme sıfatıdır. Diğer seçeneklerde niteleme sıfatı yoktur.'
      },
      {
        id: 'q-sf-7-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi işaret sıfatıdır?',
        options: [
          { id: 'A', text: '_O_, hiçbir zaman verdiği sözden dönmez.' },
          { id: 'B', text: '_Şunları_ masanın üzerine bırakıver.' },
          { id: 'C', text: '_Bu_ evde yıllarca yalnız başına yaşadı.' },
          { id: 'D', text: '_Ötekini_ daha çok beğendiğimi söylemiştim.' },
          { id: 'E', text: '_Burası_ yaz aylarında çok sıcak olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Bu" kelimesi "ev" ismini işaret yoluyla belirttiği için işaret sıfatıdır. Diğer şıklardaki altı çizili kelimeler işaret veya kişi zamiri görevindedir.'
      },
      {
        id: 'q-sf-7-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yüzünde kocaman bir tebessüm belirdi.' },
          { id: 'B', text: 'İkişer dilim karpuz yedik.' },
          { id: 'C', text: 'Üçüncü sıradaki adama dikkat et.' },
          { id: 'D', text: 'Günde on sayfa kitap okur.' },
          { id: 'E', text: 'Mirasın çeyrek payı ona düştü.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğindeki "Yüzünde" kelimesi organ ismi olan "yüz"dür, sayı anlamında (100) değildir, sayı sıfatı olarak kullanılmamıştır. B (İkişer), C (Üçüncü), D (on), E (çeyrek) seçeneklerinde sayı sıfatı vardır.'
      },
      {
        id: 'q-sf-7-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden bize haber vermeden gittin?' },
          { id: 'B', text: 'Toplantı tam olarak ne zaman başlayacak?' },
          { id: 'C', text: 'Kaç gün daha burada bekleyeceğiz?' },
          { id: 'D', text: 'Bu paketi sana kim teslim etti?' },
          { id: 'E', text: 'Bunu nasıl yapacağımızı anladın mı?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Kaç" soru kelimesi, "gün" ismini belirttiği için soru sıfatıdır ve cümleye soru anlamını katmıştır.'
      },
      {
        id: 'q-sf-7-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat yoktur?',
        options: [
          { id: 'A', text: 'Hiçbir mazeret, başarısızlığın nedeni olamaz.' },
          { id: 'B', text: 'Bazı insanlar sadece kendilerini düşünür.' },
          { id: 'C', text: 'Her öğrenci kendi sırasına otursun.' },
          { id: 'D', text: 'Bütün mahalle bu olayı konuşuyor.' },
          { id: 'E', text: 'Kimsenin kimseye güveni kalmamış artık.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Hiçbir), B (Bazı), C (Her), D (Bütün) seçeneklerindeki kelimeler önlerindeki isimleri belirsiz şekilde belirten belgisiz sıfatlardır. E seçeneğindeki "Kimsenin" ve "kimseye" kelimeleri ise belgisiz zamirdir.'
      },
      {
        id: 'q-sf-7-6',
        difficulty: 'easy',
        questionText: 'Bir isim hem niteleme hem de belirtme sıfatı alabilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Şu çocuk sabahtan beri etrafta dolanıyor.' },
          { id: 'B', text: 'Karanlık ve sessiz sokaklardan geçtik.' },
          { id: 'C', text: 'Eski günlerimizi yâd edip hüzünlendik.' },
          { id: 'D', text: 'Şu büyük binanın yapımı ne zaman biter?' },
          { id: 'E', text: 'İki kırmızı elma yedim kahvaltıdan sonra.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "bina" ismi hem işaret/belirtme sıfatı ("Şu") hem de niteleme sıfatı ("büyük") almıştır.'
      },
      {
        id: 'q-sf-7-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Yeşil türbesini gezdik dün akşam.' },
          { id: 'B', text: 'Uzun ince bir yoldayım.' },
          { id: 'C', text: 'Kara toprak oldu son durağımız.' },
          { id: 'D', text: 'Bana her şey seni hatırlatıyor.' },
          { id: 'E', text: 'Akşam, yine akşam, yine akşam.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde sadece isim (akşam) ve zarf (yine) kullanılmıştır; ismi niteleyen veya belirten herhangi bir sıfat yoktur.'
      },
      {
        id: 'q-sf-7-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: '_Taze_ ekmek kokusu iştahımı kabarttı.' },
          { id: 'B', text: '_Hızlı_ adımlarla merdivenleri indi.' },
          { id: 'C', text: 'Bunu ona _açık_ dille anlattım.' },
          { id: 'D', text: 'Yüzüme çok _sert_ bakıyordu.' },
          { id: 'E', text: '_Geniş_ bir salonda toplantı yaptık.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "sert" kelimesi, "bakıyordu" fiilini nitelediği (Nasıl bakıyordu?) için durum zarfı görevindedir. A, B, C ve E\'deki kelimeler isimleri nitelediği için sıfattır.'
      },
      {
        id: 'q-sf-7-9',
        difficulty: 'easy',
        questionText: '"Bir" kelimesi aşağıdaki cümlelerin hangisinde "herhangi bir" anlamı taşıyarak belgisiz sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Burada ancak bir gün daha dayanabilirim.' },
          { id: 'B', text: 'Sınava sadece bir hafta kalmıştı.' },
          { id: 'C', text: 'Güzel bir bahar günü yola çıktık.' },
          { id: 'D', text: 'Çocuklardan yalnız bir tanesi oyunu kazandı.' },
          { id: 'E', text: 'Masaya bir tabak daha koyar mısın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bir" kelimesi sayı (adet) belirtmemekte, "herhangi bir" anlamı taşıyarak "bahar günü"nü belirsiz şekilde belirtmektedir (belgisiz sıfat). A, B, D ve E\'de ise adet (1) anlamı taşıdığı için sayı sıfatıdır.'
      },
      {
        id: 'q-sf-7-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat vardır?',
        options: [
          { id: 'A', text: 'Tembeller bu hayatta her zaman geride kalır.' },
          { id: 'B', text: 'Yeni elbiselerini dün dolaba asmıştı.' },
          { id: 'C', text: 'Küçük çocuk annesini kaybedince ağladı.' },
          { id: 'D', text: 'İhtiyar adam yavaşça bastonuna dayandı.' },
          { id: 'E', text: 'Geniş bir ev satın almayı planlıyorlar.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Tembel öğrenciler/insanlar" anlamındaki "Tembeller", ismin düşmesi ve kelimenin ek almasıyla adlaşmış sıfat olmuştur.'
      }
    ]
  },
  {
    id: 'test-sifatlar-7-orta',
    title: 'Sıfatlar 7 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (71-80)',
    type: 'comprehension',
    order: 20,
    questions: [
      {
        id: 'q-sf-7-11',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları genellikle ismin anlamını kuvvetlendirir. Aşağıdaki kelimelerden hangisi farklı bir yolla pekiştirilmiş bir sıfattır?',
        options: [
          { id: 'A', text: 'Yapayalnız bir adamdı bizim komşu.' },
          { id: 'B', text: 'Kıpkırmızı güller aldım sana.' },
          { id: 'C', text: 'Tertemiz çarşaflarda uyuduk.' },
          { id: 'D', text: 'Bembeyaz karlar etrafı kapladı.' },
          { id: 'E', text: 'Kocaman kocaman gözleriyle bana baktı.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde sıfatlar "m, p, r, s" ünsüzleriyle yapılan pekiştirme yöntemiyle oluşturulmuştur. E seçeneğinde ise sıfat (kocaman kocaman) ikileme yoluyla pekiştirilmiştir.'
      },
      {
        id: 'q-sf-7-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen belirli eklerle oluşturulur. Aşağıdakilerin hangisinde bu eklerden biri kullanılmasına rağmen sözcük küçültme sıfatı olmamıştır?',
        options: [
          { id: 'A', text: 'Büyükçe bir salonda yemek yedik.' },
          { id: 'B', text: 'Küçücük elleriyle bana sıkıca sarıldı.' },
          { id: 'C', text: 'Mavimsi gözleri güneşte daha çok parlıyor.' },
          { id: 'D', text: 'Sarımtırak yapraklar yere döküldü.' },
          { id: 'E', text: 'Gelincik tarlalarından koşarak geçtik.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Gelincik" kelimesi -cik ekini almış olsa da, bu kelime bir bitki/çiçek adı olarak kalıplaşmış ve "kalıcı isim" olmuştur. Bir ismi niteleyen küçültme sıfatı değildir.'
      },
      {
        id: 'q-sf-7-13',
        difficulty: 'medium',
        questionText: 'Bir ismin önüne birden çok belirtme sıfatı gelebilir. Aşağıdaki cümlelerin hangisinde bir isim iki farklı belirtme sıfatı almıştır?',
        options: [
          { id: 'A', text: 'Şu iki adam seni sabahtan beri bekliyor.' },
          { id: 'B', text: 'O eski günlerin özlemini çok çekiyoruz.' },
          { id: 'C', text: 'Kırmızı ve beyaz gülleri vazoya koydu.' },
          { id: 'D', text: 'Yeni arabasıyla geniş yollarda dolaşıyor.' },
          { id: 'E', text: 'Hangi uzun yoldan geldiniz buraya?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "adam" ismi hem işaret sıfatı (Şu) hem de sayı sıfatı (iki) alarak iki farklı belirtme sıfatı almıştır. (B, C, D ve E seçeneklerinde niteleme sıfatları da vardır, ancak ikisi de belirtme olan tek şık A\'dır).'
      },
      {
        id: 'q-sf-7-14',
        difficulty: 'medium',
        questionText: 'Sıfat tamlamalarında sıfat, bazen belirtisiz isim tamlamasının arasına giremez, başına gelerek tamlamanın bütününü niteler. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Masanın kırık bacağını tamir etti.' },
          { id: 'B', text: 'Evin büyük kapısı dün boyandı.' },
          { id: 'C', text: 'Ahşap köy evleri çok dikkat çekiyor.' },
          { id: 'D', text: 'Çocuğun yırtık ayakkabısını diktiler.' },
          { id: 'E', text: 'Ağacın kurumuş yaprakları döküldü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "köy evleri" belirtisiz isim tamlamasıdır ve "Ahşap" kelimesi başa gelerek tamlamanın bütününü nitelemiştir. A, B, D ve E seçeneklerinde ise belirtili isim tamlamalarının arasına girerek tamlananı niteleyen sıfatlar vardır.'
      },
      {
        id: 'q-sf-7-15',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat, cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Tembeller bu sınavdan da kötü not aldı.' },
          { id: 'B', text: 'Yaşlılar her zaman saygı görmelidir.' },
          { id: 'C', text: 'Eskileri eskiciye yok pahasına verdik.' },
          { id: 'D', text: 'Gelenler, içerideki boş yerlere otursun.' },
          { id: 'E', text: 'Güzeli sevmek insanın doğasında var.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Eski eşyaları" anlamındaki "Eskileri" kelimesi adlaşmış sıfattır ve "Neyi verdik?" sorusuna cevap vererek cümlede belirtili nesne görevinde kullanılmıştır. (E şıkkında "Güzeli" nesnedir ama yan cümlenin nesnesidir, temel cümlenin değil, C en net olanıdır).'
      },
      {
        id: 'q-sf-7-16',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar birkaç farklı kuralla oluşturulabilir. Aşağıdakilerin hangisinde "sıfat tamlaması + -lı/-li" kuralıyla oluşturulmuş bir birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Uzun boylu gençlerle voleybol oynadık.' },
          { id: 'B', text: 'Kırmızı kaplı defterini evde unutmuş.' },
          { id: 'C', text: 'Geniş omuzlu bir adamdı babası.' },
          { id: 'D', text: 'Başı dumanlı dağlar engel oldu bize.' },
          { id: 'E', text: 'Üç günlük dünyada birbirimizi kırmayalım.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Başı dumanlı" kurallı birleşik sıfatı, "dumanlı baş" sıfat tamlamasında tamlayan ile tamlananın yer değiştirip ismin "-(s)i" iyelik eki alması (başı dumanlı) kuralıyla oluşturulmuştur. Diğerlerinde ise "uzun boy-lu, kırmızı kap-lı, üç gün-lük" gibi eklentilerle yapılmıştır.'
      },
      {
        id: 'q-sf-7-17',
        difficulty: 'medium',
        questionText: '"Öyle" kelimesi cümlede zamir, sıfat ya da zarf olarak kullanılabilir. Aşağıdakilerin hangisinde bu kelime sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Öyle konuşursan herkesi kendinden uzaklaştırırsın.' },
          { id: 'B', text: 'Bana öyle sözler verme, tutamazsın.' },
          { id: 'C', text: 'Bunu ona da öyle anlattığını söyledi.' },
          { id: 'D', text: 'Herkes öyle düşünüyor sanmıştım.' },
          { id: 'E', text: 'Bugün hava öyle sıcak ki duramıyorum.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "öyle" kelimesi "sözler" ismini belirttiği için sıfat görevindedir. A, C ve D\'de fiili etkilediği için zarf, E\'de ise sıfatı derecelendiren miktar zarfı görevindedir.'
      },
      {
        id: 'q-sf-7-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki tamlamalardan hangisi türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Açıkgöz insan' },
          { id: 'B', text: 'Soğuk hava' },
          { id: 'C', text: 'Deniz kıyısı' },
          { id: 'D', text: 'Büyük şehir' },
          { id: 'E', text: 'Yeni kitap' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçeneklerindeki tamlamalar, bir sıfat ve bir isimden oluşan "sıfat tamlaması"dır. C seçeneğindeki "Deniz kıyısı" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      },
      {
        id: 'q-sf-7-19',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları dört gruba ayrılır: asıl, sıra, kesir, üleştirme. Aşağıdaki cümlelerde geçen sayı sıfatlarından hangisi türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Her öğrenciye ikişer kalem dağıttı.' },
          { id: 'B', text: 'Çocuklara üçer elma paylaştırdık.' },
          { id: 'C', text: 'Günde beşer sayfa yazarak bitirdi.' },
          { id: 'D', text: 'Birer adım öne çıkın.' },
          { id: 'E', text: 'İkinci katta oturduklarını biliyorum.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerindeki sayı sıfatları (ikişer, üçer, beşer, birer) paylaştırma bildiren "üleştirme sayı sıfatı"dır. E seçeneğindeki "İkinci" kelimesi ise "sıra sayı sıfatı"dır.'
      },
      {
        id: 'q-sf-7-20',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları özel adlara gelerek onların unvanını, rütbesini, akrabalığını belirtir. Aşağıdakilerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Ayşe Teyze bize nefis bir kek yapmış.' },
          { id: 'B', text: 'Bakkal Mehmet Amca çok babacan biridir.' },
          { id: 'C', text: 'Gazi Mustafa Kemal Paşa ülkeyi kurtardı.' },
          { id: 'D', text: 'Zavallı adam soğuktan titriyordu.' },
          { id: 'E', text: 'Doktor Ali Bey hastasını muayene etti.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (Teyze), B (Bakkal, Amca), C (Gazi, Paşa), E (Doktor, Bey) kelimeleri özel isimlerle birlikte kullanılan unvan sıfatlarıdır. D seçeneğindeki "Zavallı" kelimesi ise bir niteleme sıfatıdır, unvan bildirmez.'
      }
    ]
  },
  {
    id: 'test-sifatlar-7-zor',
    title: 'Sıfatlar 7 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (81-90)',
    type: 'comprehension',
    order: 21,
    questions: [
      {
        id: 'q-sf-7-21',
        difficulty: 'hard',
        questionText: '"Ne" kelimesi kullanıldığı yere göre sıfat, zamir veya zarf olabilir. Aşağıdakilerin hangisinde "ne" kelimesi soru sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Oraya gidip de ne yapacaksın?' },
          { id: 'B', text: 'Bugün çarşıdan ne aldın?' },
          { id: 'C', text: 'Bana ne gün geleceğini söyledi mi?' },
          { id: 'D', text: 'Ne ağlayıp duruyorsun sabahtan beri?' },
          { id: 'E', text: 'Elindeki kutuda ne saklıyorsun?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "Ne" kelimesi "hangi" anlamında kullanılıp "gün" ismini belirttiği için soru sıfatıdır. A, B ve E\'de soru zamiri, D\'de ise (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-7-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen virgüllerden (,) hangisinin kaldırılması, bir kelimenin adlaşmış sıfat iken niteleme sıfatına dönüşmesine yol açar?',
        options: [
          { id: 'A', text: 'Ahmet, yarın akşam bizimle sinemaya gelecekmiş.' },
          { id: 'B', text: 'Kitap, kapağıyla herkesin dikkatini çekiyordu.' },
          { id: 'C', text: 'Çocuk, annesinin arkasına gizlenerek ağladı.' },
          { id: 'D', text: 'Kör, adama elindeki bastonuyla vurmaya çalıştı.' },
          { id: 'E', text: 'Bugün, hava dünden daha soğuk olacakmış.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde virgül kaldırıldığında "Kör adama..." şeklinde bir sıfat tamlaması oluşur. "Kör" kelimesi, özne (adlaşmış sıfat) olmaktan çıkıp "adam" isminin niteleme sıfatı haline gelir. Bu da anlamın (ve türün) tamamen değişmesine neden olur.'
      },
      {
        id: 'q-sf-7-23',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen bir ismi değil, o ismin sıfatını derecelendirir. Aşağıdakilerin hangisinde bu kurala uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Daha çok çalışarak sınavı kazandı.' },
          { id: 'B', text: 'Pek konuşkan biri olmadığını söylemişti.' },
          { id: 'C', text: 'Az yiyerek kısa sürede zayıfladı.' },
          { id: 'D', text: 'En çok onu sevdiğimi herkes bilir.' },
          { id: 'E', text: 'Toplantıda oldukça sıkıldığını fark ettim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "konuşkan" kelimesi "biri" (zamirini/ismini) niteleyen bir sıfattır. "Pek" kelimesi ise fiili veya zarfı değil, doğrudan "konuşkan" sıfatını derecelendiren bir miktar zarfıdır (Pek konuşkan). Diğer şıklarda zarflar fiilleri derecelendirmiştir.'
      },
      {
        id: 'q-sf-7-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki isimden sıfat türetme işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odamın rengi, salonunkinden daha açık.' },
          { id: 'B', text: 'Seninki yine ortalıkta görünmüyor.' },
          { id: 'C', text: 'Sabahki kazada neyse ki kimse yaralanmamış.' },
          { id: 'D', text: 'Anladım ki bu iş burada bitmeyecek.' },
          { id: 'E', text: 'Masadakini alıp hızla dışarı çıktı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "-ki" eki "sabah" isminin/zarfının üzerine gelerek onu "kaza" ismini belirten bir sıfata (Sabahki kaza) çevirmiştir. A ve B\'de ilgi zamiri, D\'de bağlaç, E\'de (masadaki eşyayı) adlaşmış sıfat/zamir görevindedir.'
      },
      {
        id: 'q-sf-7-25',
        difficulty: 'hard',
        questionText: 'Bir cümlede aynı isim, hem isim tamlaması hem de sıfat tamlaması içinde yer alabilir. Aşağıdaki cümlelerin hangisinde, arasına sıfat girmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski köy evlerinin bacası hiç tütmüyor.' },
          { id: 'B', text: 'Ahşap masanın kırık bacağını zorlukla onardım.' },
          { id: 'C', text: 'Büyük deniz gemileri limana yanaşıyordu.' },
          { id: 'D', text: 'Çocuğun yırtık ayakkabısını yeniledik.' },
          { id: 'E', text: 'Yeni okul müdürü bugün göreve başladı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Çocuğun ayakkabısı" belirtili isim tamlamasıdır. "yırtık" niteleme sıfatı, tamlayan (Çocuğun) ile tamlanan (ayakkabısı) arasına girerek tamlananı nitelemiştir. (B şıkkında da benzer durum var "masanın kırık bacağı" ama o cümlede "Ahşap" kelimesi tamlayanın sıfatıdır, D şıkkı saf bir örnektir).'
      },
      {
        id: 'q-sf-7-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat ek fiil (-idi, -imiş, -ise, -dir) alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'O zamanlar ben de çok çalışkandım.' },
          { id: 'B', text: 'Bugün hava her zamankinden daha soğuktu.' },
          { id: 'C', text: 'En sevdiğim mevsim her zaman ilkbahardır.' },
          { id: 'D', text: 'Bu araba sandığımdan daha hızlıymış.' },
          { id: 'E', text: 'Benim en iyi dostum sensin.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "çalışkandım" yüklemi, "çalışkan (öğrenciydim)" şeklindeki niteleme sıfatının isminin düşmesi ve ek fiil (çalışkan idim) almasıyla oluşmuş bir adlaşmış sıfattır.'
      },
      {
        id: 'q-sf-7-27',
        difficulty: 'hard',
        questionText: 'Birleşik sıfatlar anlamca kaynaşmış olabileceği gibi kurallı da olabilir. Aşağıdakilerin hangisinde "isim/sıfat tamlamasına -lı/-li eki getirilmesiyle" oluşmuş bir kurallı birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Mavi kapaklı defterleri özenle ayırdı.' },
          { id: 'B', text: 'Geniş omuzlu gençler takıma seçilecek.' },
          { id: 'C', text: 'Uzun boylu bir adam az önce seni sordu.' },
          { id: 'D', text: 'İki günlük dünyada kimseyi incitmeyin.' },
          { id: 'E', text: 'Kırık dökük eşyaları hurdacıya verdiler.' }
        ],
        correctOptionId: 'E',
        explanation: 'A, B, C ve D seçeneklerinde (mavi kapak-lı, geniş omuz-lu, uzun boy-lu, iki gün-lük) kurallı birleşik sıfat vardır. E seçeneğindeki "Kırık dökük" ise ikileme yoluyla oluşturulmuş bir niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-7-28',
        difficulty: 'hard',
        questionText: 'Sıfat-fiiller, bir ismi nitelediklerinde sıfat görevini üstlenirler. Aşağıdaki cümlelerin hangisinde sıfat-fiil kullanılmasına rağmen sıfat tamlaması oluşmamış (adlaşmış sıfat olmuştur)?',
        options: [
          { id: 'A', text: 'İşleyen demir ışıldar.' },
          { id: 'B', text: 'Görünmez kazalara karşı dikkatli olmalıyız.' },
          { id: 'C', text: 'Tanıdık yüzler görmek insanı mutlu ediyor.' },
          { id: 'D', text: 'Veren eli herkes öper derler.' },
          { id: 'E', text: 'Sütten ağzı yanan, yoğurdu üfleyerek yer.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "yanan" kelimesi sıfat-fiil (-an) ekini almıştır ancak önündeki isim (kişi) düştüğü için adlaşmış sıfat-fiil (adlaşmış sıfat) olmuş, bir sıfat tamlaması kurmamıştır. A, B, C ve D seçeneklerinde (İşleyen demir, görünmez kaza, tanıdık yüz, veren el) sıfat tamlaması mevcuttur.'
      },
      {
        id: 'q-sf-7-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "o" kelimesi bir ismi nitelemek veya belirtmek yerine, bir ismin yerini tutmuştur?',
        options: [
          { id: 'A', text: 'O eski günlerin hatırası hala kalbimde.' },
          { id: 'B', text: 'O arabayı almak için çok para biriktirdi.' },
          { id: 'C', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'D', text: 'O evde yıllarca yalnız başına oturdu.' },
          { id: 'E', text: 'O kitabı okuduktan sonra hayatım değişti.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "O" kelimesi bir kişinin (ismin) yerini tuttuğu için kişi zamiridir. A, B, D ve E seçeneklerinde ise isimleri (günler, araba, ev, kitap) belirttiği için işaret sıfatıdır.'
      },
      {
        id: 'q-sf-7-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen tamlamalardan hangisi, diğerlerinden farklı türde bir tamlamadır?',
        options: [
          { id: 'A', text: 'Soğuk rüzgâr' },
          { id: 'B', text: 'Dar sokaklar' },
          { id: 'C', text: 'Tahta kapı' },
          { id: 'D', text: 'Sokak lambası' },
          { id: 'E', text: 'Sarı yapraklar' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki tamlamalar, ismi niteleyen veya yapıldığı maddeyi bildiren (eski müfredata göre takısız/sıfat) sıfat tamlamalarıdır (C: tahta kapı - sıfat tamlaması kabul edilir). D seçeneğindeki "Sokak lambası" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      }
    ]
  }
];
