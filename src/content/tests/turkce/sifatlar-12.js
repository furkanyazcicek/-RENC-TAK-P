export default [
  {
    id: 'test-sifatlar-12-kolay',
    title: 'Sıfatlar 12 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (111-120)',
    type: 'comprehension',
    order: 34,
    questions: [
      {
        id: 'q-sf-12-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde niteleme sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Onu dünkü toplantıda gördün mü?' },
          { id: 'B', text: 'Soğuk havalar yakında başlıyormuş.' },
          { id: 'C', text: 'Çiçekleri vazoya dikkatlice yerleştirdi.' },
          { id: 'D', text: 'Yarın oraya tek başıma gideceğim.' },
          { id: 'E', text: 'Kimse bu işe el atmak istemedi.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Soğuk" kelimesi, "havalar" isminin durumunu nitelediği (Nasıl havalar?) için niteleme sıfatıdır. Diğer seçeneklerde niteleme sıfatı yoktur.'
      },
      {
        id: 'q-sf-12-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili kelimelerden hangisi işaret sıfatıdır?',
        options: [
          { id: 'A', text: '_O_, hiçbir zaman verdiği sözden dönmez.' },
          { id: 'B', text: '_Bu_ evde yıllarca yalnız başına yaşadı.' },
          { id: 'C', text: '_Şunları_ masanın üzerine bırakıver.' },
          { id: 'D', text: '_Burası_ yaz aylarında çok sıcak olur.' },
          { id: 'E', text: '_Ötekini_ daha çok beğendiğimi söylemiştim.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Bu" kelimesi "ev" ismini işaret yoluyla belirttiği için işaret sıfatıdır. Diğer şıklardaki altı çizili kelimeler işaret veya kişi zamiri görevindedir.'
      },
      {
        id: 'q-sf-12-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sayı sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'İkişer dilim karpuz yedik.' },
          { id: 'B', text: 'Yüzünde kocaman bir tebessüm belirdi.' },
          { id: 'C', text: 'Üçüncü sıradaki adama dikkat et.' },
          { id: 'D', text: 'Günde on sayfa kitap okur.' },
          { id: 'E', text: 'Mirasın çeyrek payı ona düştü.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Yüzünde" kelimesi organ ismi olan "yüz"dür, sayı anlamında (100) değildir, sayı sıfatı olarak kullanılmamıştır. A (İkişer), C (Üçüncü), D (on), E (çeyrek) seçeneklerinde sayı sıfatı vardır.'
      },
      {
        id: 'q-sf-12-4',
        difficulty: 'easy',
        questionText: 'Aşağıdakilerin hangisinde soru anlamı sıfatla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden bize haber vermeden gittin?' },
          { id: 'B', text: 'Kaç gün daha burada bekleyeceğiz?' },
          { id: 'C', text: 'Toplantı tam olarak ne zaman başlayacak?' },
          { id: 'D', text: 'Bunu nasıl yapacağımızı anladın mı?' },
          { id: 'E', text: 'Bu paketi sana kim teslim etti?' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Kaç" soru kelimesi, "gün" ismini belirttiği için soru sıfatıdır ve cümleye soru anlamını katmıştır.'
      },
      {
        id: 'q-sf-12-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat yoktur?',
        options: [
          { id: 'A', text: 'Hiçbir mazeret, başarısızlığın nedeni olamaz.' },
          { id: 'B', text: 'Bazı insanlar sadece kendilerini düşünür.' },
          { id: 'C', text: 'Kimsenin kimseye güveni kalmamış artık.' },
          { id: 'D', text: 'Her öğrenci kendi sırasına otursun.' },
          { id: 'E', text: 'Bütün mahalle bu olayı konuşuyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'A (Hiçbir), B (Bazı), D (Her), E (Bütün) seçeneklerindeki kelimeler önlerindeki isimleri belirsiz şekilde belirten belgisiz sıfatlardır. C seçeneğindeki "Kimsenin" ve "kimseye" kelimeleri ise belgisiz zamirdir.'
      },
      {
        id: 'q-sf-12-6',
        difficulty: 'easy',
        questionText: 'Bir isim hem niteleme hem de belirtme sıfatı alabilir. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Şu çocuk sabahtan beri etrafta dolanıyor.' },
          { id: 'B', text: 'Karanlık ve sessiz sokaklardan geçtik.' },
          { id: 'C', text: 'Eski günlerimizi yâd edip hüzünlendik.' },
          { id: 'D', text: 'İki kırmızı elma yedim kahvaltıdan sonra.' },
          { id: 'E', text: 'Şu büyük binanın yapımı ne zaman biter?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "bina" ismi hem işaret/belirtme sıfatı ("Şu") hem de niteleme sıfatı ("büyük") almıştır.'
      },
      {
        id: 'q-sf-12-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Akşam, yine akşam, yine akşam.' },
          { id: 'B', text: 'Yeşil türbesini gezdik dün akşam.' },
          { id: 'C', text: 'Uzun ince bir yoldayım.' },
          { id: 'D', text: 'Kara toprak oldu son durağımız.' },
          { id: 'E', text: 'Bana her şey seni hatırlatıyor.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde sadece isim (akşam) ve zarf (yine) kullanılmıştır; ismi niteleyen veya belirten herhangi bir sıfat yoktur.'
      },
      {
        id: 'q-sf-12-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki altı çizili sözcüklerden hangisi sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: '_Taze_ ekmek kokusu iştahımı kabarttı.' },
          { id: 'B', text: '_Hızlı_ adımlarla merdivenleri indi.' },
          { id: 'C', text: 'Yüzüme çok _sert_ bakıyordu.' },
          { id: 'D', text: 'Bunu ona _açık_ dille anlattım.' },
          { id: 'E', text: '_Geniş_ bir salonda toplantı yaptık.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "sert" kelimesi, "bakıyordu" fiilini nitelediği (Nasıl bakıyordu?) için durum zarfı görevindedir. A, B, D ve E\'deki kelimeler isimleri nitelediği için sıfattır.'
      },
      {
        id: 'q-sf-12-9',
        difficulty: 'easy',
        questionText: '"Bir" kelimesi aşağıdaki cümlelerin hangisinde "herhangi bir" anlamı taşıyarak belgisiz sıfat görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sınava sadece bir hafta kalmıştı.' },
          { id: 'B', text: 'Burada ancak bir gün daha dayanabilirim.' },
          { id: 'C', text: 'Güzel bir bahar günü yola çıktık.' },
          { id: 'D', text: 'Masaya bir tabak daha koyar mısın?' },
          { id: 'E', text: 'Çocuklardan yalnız bir tanesi oyunu kazandı.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bir" kelimesi sayı (adet) belirtmemekte, "herhangi bir" anlamı taşıyarak "bahar günü"nü belirsiz şekilde belirtmektedir (belgisiz sıfat). A, B, D ve E\'de ise adet (1) anlamı taşıdığı için sayı sıfatıdır.'
      },
      {
        id: 'q-sf-12-10',
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
    id: 'test-sifatlar-12-orta',
    title: 'Sıfatlar 12 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (121-130)',
    type: 'comprehension',
    order: 35,
    questions: [
      {
        id: 'q-sf-12-11',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları genellikle ismin anlamını kuvvetlendirir. Aşağıdaki kelimelerden hangisi farklı bir yolla pekiştirilmiş bir sıfattır?',
        options: [
          { id: 'A', text: 'Kocaman kocaman gözleriyle bana baktı.' },
          { id: 'B', text: 'Yapayalnız bir adamdı bizim komşu.' },
          { id: 'C', text: 'Kıpkırmızı güller aldım sana.' },
          { id: 'D', text: 'Tertemiz çarşaflarda uyuduk.' },
          { id: 'E', text: 'Bembeyaz karlar etrafı kapladı.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerinde sıfatlar "m, p, r, s" ünsüzleriyle yapılan pekiştirme yöntemiyle oluşturulmuştur. A seçeneğinde ise sıfat (kocaman kocaman) ikileme yoluyla pekiştirilmiştir.'
      },
      {
        id: 'q-sf-12-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen belirli eklerle oluşturulur. Aşağıdakilerin hangisinde bu eklerden biri kullanılmasına rağmen sözcük küçültme sıfatı olmamıştır?',
        options: [
          { id: 'A', text: 'Büyükçe bir salonda yemek yedik.' },
          { id: 'B', text: 'Küçücük elleriyle bana sıkıca sarıldı.' },
          { id: 'C', text: 'Mavimsi gözleri güneşte daha çok parlıyor.' },
          { id: 'D', text: 'Gelincik tarlalarından koşarak geçtik.' },
          { id: 'E', text: 'Sarımtırak yapraklar yere döküldü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Gelincik" kelimesi -cik ekini almış olsa da, bu kelime bir bitki/çiçek adı olarak kalıplaşmış ve "kalıcı isim" olmuştur. Bir ismi niteleyen küçültme sıfatı değildir.'
      },
      {
        id: 'q-sf-12-13',
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
        id: 'q-sf-12-14',
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
        id: 'q-sf-12-15',
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
        id: 'q-sf-12-16',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar birkaç farklı kuralla oluşturulabilir. Aşağıdakilerin hangisinde "sıfat tamlaması + -lı/-li" kuralıyla oluşturulmuş bir birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Başı dumanlı dağlar engel oldu bize.' },
          { id: 'B', text: 'Uzun boylu gençlerle voleybol oynadık.' },
          { id: 'C', text: 'Kırmızı kaplı defterini evde unutmuş.' },
          { id: 'D', text: 'Geniş omuzlu bir adamdı babası.' },
          { id: 'E', text: 'Üç günlük dünyada birbirimizi kırmayalım.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Başı dumanlı" kurallı birleşik sıfatı, "dumanlı baş" sıfat tamlamasında tamlayan ile tamlananın yer değiştirip ismin "-(s)i" iyelik eki alması (başı dumanlı) kuralıyla oluşturulmuştur. Diğerlerinde ise "uzun boy-lu, kırmızı kap-lı, üç gün-lük" gibi eklentilerle yapılmıştır.'
      },
      {
        id: 'q-sf-12-17',
        difficulty: 'medium',
        questionText: '"Öyle" kelimesi cümlede zamir, sıfat ya da zarf olarak kullanılabilir. Aşağıdakilerin hangisinde bu kelime sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Öyle konuşursan herkesi kendinden uzaklaştırırsın.' },
          { id: 'B', text: 'Bunu ona da öyle anlattığını söyledi.' },
          { id: 'C', text: 'Bana öyle sözler verme, tutamazsın.' },
          { id: 'D', text: 'Herkes öyle düşünüyor sanmıştım.' },
          { id: 'E', text: 'Bugün hava öyle sıcak ki duramıyorum.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "öyle" kelimesi "sözler" ismini belirttiği için sıfat görevindedir. A, B ve D\'de fiili etkilediği için zarf, E\'de ise sıfatı derecelendiren miktar zarfı görevindedir.'
      },
      {
        id: 'q-sf-12-18',
        difficulty: 'medium',
        questionText: 'Aşağıdaki tamlamalardan hangisi türce diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Deniz kıyısı' },
          { id: 'B', text: 'Açıkgöz insan' },
          { id: 'C', text: 'Soğuk hava' },
          { id: 'D', text: 'Büyük şehir' },
          { id: 'E', text: 'Yeni kitap' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki tamlamalar, bir sıfat ve bir isimden oluşan "sıfat tamlaması"dır. A seçeneğindeki "Deniz kıyısı" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      },
      {
        id: 'q-sf-12-19',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları dört gruba ayrılır: asıl, sıra, kesir, üleştirme. Aşağıdaki cümlelerde geçen sayı sıfatları eşleştirildiğinde hangisi dışta kalır?',
        options: [
          { id: 'A', text: 'İkinci katta oturduklarını biliyorum.' },
          { id: 'B', text: 'Her öğrenciye ikişer kalem dağıttı.' },
          { id: 'C', text: 'Çocuklara üçer elma paylaştırdık.' },
          { id: 'D', text: 'Günde beşer sayfa yazarak bitirdi.' },
          { id: 'E', text: 'Birer adım öne çıkın.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki sayı sıfatları (ikişer, üçer, beşer, birer) paylaştırma bildiren "üleştirme sayı sıfatı"dır. A seçeneğindeki "İkinci" kelimesi ise "sıra sayı sıfatı"dır.'
      },
      {
        id: 'q-sf-12-20',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları özel adlara gelerek onların unvanını, rütbesini, akrabalığını belirtir. Aşağıdakilerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Zavallı adam soğuktan titriyordu.' },
          { id: 'B', text: 'Ayşe Teyze bize nefis bir kek yapmış.' },
          { id: 'C', text: 'Bakkal Mehmet Amca çok babacan biridir.' },
          { id: 'D', text: 'Gazi Mustafa Kemal Paşa ülkeyi kurtardı.' },
          { id: 'E', text: 'Doktor Ali Bey hastasını muayene etti.' }
        ],
        correctOptionId: 'A',
        explanation: 'B (Teyze), C (Bakkal, Amca), D (Gazi, Paşa), E (Doktor, Bey) kelimeleri özel isimlerle birlikte kullanılan unvan sıfatlarıdır. A seçeneğindeki "Zavallı" kelimesi ise bir niteleme sıfatıdır, unvan bildirmez.'
      }
    ]
  },
  {
    id: 'test-sifatlar-12-zor',
    title: 'Sıfatlar 12 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (131-140)',
    type: 'comprehension',
    order: 36,
    questions: [
      {
        id: 'q-sf-12-21',
        difficulty: 'hard',
        questionText: '"Ne" kelimesi kullanıldığı yere göre sıfat, zamir veya zarf olabilir. Aşağıdakilerin hangisinde "ne" kelimesi soru sıfatı görevinde kullanılmıştır?',
        options: [
          { id: 'A', text: 'Bana ne gün geleceğini söyledi mi?' },
          { id: 'B', text: 'Oraya gidip de ne yapacaksın?' },
          { id: 'C', text: 'Bugün çarşıdan ne aldın?' },
          { id: 'D', text: 'Ne ağlayıp duruyorsun sabahtan beri?' },
          { id: 'E', text: 'Elindeki kutuda ne saklıyorsun?' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Ne" kelimesi "hangi" anlamında kullanılıp "gün" ismini belirttiği için soru sıfatıdır. B, C ve E\'de soru zamiri, D\'de ise (niçin anlamında) soru zarfıdır.'
      },
      {
        id: 'q-sf-12-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen virgüllerden (,) hangisinin kaldırılması, bir kelimenin adlaşmış sıfat iken niteleme sıfatına dönüşmesine yol açar?',
        options: [
          { id: 'A', text: 'Kör, adama elindeki bastonuyla vurmaya çalıştı.' },
          { id: 'B', text: 'Ahmet, yarın akşam bizimle sinemaya gelecekmiş.' },
          { id: 'C', text: 'Kitap, kapağıyla herkesin dikkatini çekiyordu.' },
          { id: 'D', text: 'Çocuk, annesinin arkasına gizlenerek ağladı.' },
          { id: 'E', text: 'Bugün, hava dünden daha soğuk olacakmış.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde virgül kaldırıldığında "Kör adama..." şeklinde bir sıfat tamlaması oluşur. "Kör" kelimesi, özne (adlaşmış sıfat) olmaktan çıkıp "adam" isminin niteleme sıfatı haline gelir. Bu da anlamın (ve türün) tamamen değişmesine neden olur.'
      },
      {
        id: 'q-sf-12-23',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen bir ismi değil, o ismin sıfatını derecelendirir. Aşağıdakilerin hangisinde bu kurala uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Pek konuşkan biri olmadığını söylemişti.' },
          { id: 'B', text: 'Daha çok çalışarak sınavı kazandı.' },
          { id: 'C', text: 'Az yiyerek kısa sürede zayıfladı.' },
          { id: 'D', text: 'En çok onu sevdiğimi herkes bilir.' },
          { id: 'E', text: 'Toplantıda oldukça sıkıldığını fark ettim.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "konuşkan" kelimesi "biri" (zamirini/ismini) niteleyen bir sıfattır. "Pek" kelimesi ise fiili veya zarfı değil, doğrudan "konuşkan" sıfatını derecelendiren bir miktar zarfıdır (Pek konuşkan). Diğer şıklarda zarflar fiilleri derecelendirmiştir.'
      },
      {
        id: 'q-sf-12-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki isimden sıfat türetme işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Sabahki kazada neyse ki kimse yaralanmamış.' },
          { id: 'B', text: 'Odamın rengi, salonunkinden daha açık.' },
          { id: 'C', text: 'Seninki yine ortalıkta görünmüyor.' },
          { id: 'D', text: 'Anladım ki bu iş burada bitmeyecek.' },
          { id: 'E', text: 'Masadakini alıp hızla dışarı çıktı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "-ki" eki "sabah" isminin/zarfının üzerine gelerek onu "kaza" ismini belirten bir sıfata (Sabahki kaza) çevirmiştir. B ve C\'de ilgi zamiri, D\'de bağlaç, E\'de (masadaki eşyayı) adlaşmış sıfat/zamir görevindedir.'
      },
      {
        id: 'q-sf-12-25',
        difficulty: 'hard',
        questionText: 'Bir cümlede aynı isim, hem isim tamlaması hem de sıfat tamlaması içinde yer alabilir. Aşağıdaki cümlelerin hangisinde, arasına sıfat girmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Çocuğun yırtık ayakkabısını yeniledik.' },
          { id: 'B', text: 'Eski köy evlerinin bacası hiç tütmüyor.' },
          { id: 'C', text: 'Ahşap masanın kırık bacağını zorlukla onardım.' },
          { id: 'D', text: 'Büyük deniz gemileri limana yanaşıyordu.' },
          { id: 'E', text: 'Yeni okul müdürü bugün göreve başladı.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "Çocuğun ayakkabısı" belirtili isim tamlamasıdır. "yırtık" niteleme sıfatı, tamlayan (Çocuğun) ile tamlanan (ayakkabısı) arasına girerek tamlananı nitelemiştir.'
      },
      {
        id: 'q-sf-12-26',
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
        id: 'q-sf-12-27',
        difficulty: 'hard',
        questionText: 'Birleşik sıfatlar anlamca kaynaşmış olabileceği gibi kurallı da olabilir. Aşağıdakilerin hangisinde "isim/sıfat tamlamasına -lı/-li eki getirilmesiyle" oluşmuş bir kurallı birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Kırık dökük eşyaları hurdacıya verdiler.' },
          { id: 'B', text: 'Mavi kapaklı defterleri özenle ayırdı.' },
          { id: 'C', text: 'Geniş omuzlu gençler takıma seçilecek.' },
          { id: 'D', text: 'Uzun boylu bir adam az önce seni sordu.' },
          { id: 'E', text: 'İki günlük dünyada kimseyi incitmeyin.' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerinde (mavi kapak-lı, geniş omuz-lu, uzun boy-lu, iki gün-lük) kurallı birleşik sıfat vardır. A seçeneğindeki "Kırık dökük" ise ikileme yoluyla oluşturulmuş bir niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-12-28',
        difficulty: 'hard',
        questionText: 'Sıfat-fiiller, bir ismi nitelediklerinde sıfat görevini üstlenirler. Aşağıdaki cümlelerin hangisinde sıfat-fiil kullanılmasına rağmen sıfat tamlaması oluşmamış (adlaşmış sıfat olmuştur)?',
        options: [
          { id: 'A', text: 'Sütten ağzı yanan, yoğurdu üfleyerek yer.' },
          { id: 'B', text: 'İşleyen demir ışıldar.' },
          { id: 'C', text: 'Görünmez kazalara karşı dikkatli olmalıyız.' },
          { id: 'D', text: 'Tanıdık yüzler görmek insanı mutlu ediyor.' },
          { id: 'E', text: 'Veren eli herkes öper derler.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "yanan" kelimesi sıfat-fiil (-an) ekini almıştır ancak önündeki isim (kişi) düştüğü için adlaşmış sıfat-fiil (adlaşmış sıfat) olmuş, bir sıfat tamlaması kurmamıştır. B, C, D ve E seçeneklerinde (İşleyen demir, görünmez kaza, tanıdık yüz, veren el) sıfat tamlaması mevcuttur.'
      },
      {
        id: 'q-sf-12-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "o" kelimesi bir ismi nitelemek veya belirtmek yerine, bir ismin yerini tutmuştur?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'B', text: 'O eski günlerin hatırası hala kalbimde.' },
          { id: 'C', text: 'O arabayı almak için çok para biriktirdi.' },
          { id: 'D', text: 'O evde yıllarca yalnız başına oturdu.' },
          { id: 'E', text: 'O kitabı okuduktan sonra hayatım değişti.' }
        ],
        correctOptionId: 'A',
        explanation: 'A seçeneğinde "O" kelimesi bir kişinin (ismin) yerini tuttuğu için kişi zamiridir. B, C, D ve E seçeneklerinde ise isimleri (günler, araba, ev, kitap) belirttiği için işaret sıfatıdır.'
      },
      {
        id: 'q-sf-12-30',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen tamlamalardan hangisi, diğerlerinden farklı türde bir tamlamadır?',
        options: [
          { id: 'A', text: 'Sokak lambası' },
          { id: 'B', text: 'Soğuk rüzgâr' },
          { id: 'C', text: 'Dar sokaklar' },
          { id: 'D', text: 'Tahta kapı' },
          { id: 'E', text: 'Sarı yapraklar' }
        ],
        correctOptionId: 'A',
        explanation: 'B, C, D ve E seçeneklerindeki tamlamalar, ismi niteleyen veya yapıldığı maddeyi bildiren (eski müfredata göre takısız/sıfat) sıfat tamlamalarıdır (D: tahta kapı - sıfat tamlaması kabul edilir). A seçeneğindeki "Sokak lambası" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      }
    ]
  }
];
