export default [
  {
    id: 'test-sifatlar-13-kolay',
    title: 'Sıfatlar 13 (Kolay)',
    description: 'Sözcük Türleri Sıfatlar - Kolay Seviye (121-130)',
    type: 'comprehension',
    order: 37,
    questions: [
      {
        id: 'q-sf-13-1',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde altı çizili kelime sıfat görevinde kullanılmamıştır?',
        options: [
          { id: 'A', text: '_Büyük_ lokma ye, büyük söz söyleme.' },
          { id: 'B', text: '_Acı_ kahvesini yudumlayarak gazeteye göz attı.' },
          { id: 'C', text: '_Eski_ günleri ne çok özlemişti.' },
          { id: 'D', text: '_Güzel_ konuşarak herkesi etkilemeyi başardı.' },
          { id: 'E', text: '_Tatlı_ bir bahar rüzgârı esiyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Güzel" kelimesi, "konuşarak" fiilimsi(zarf-fiili)ni nitelediği için (Nasıl konuşarak?) durum zarfı görevindedir. Diğer seçeneklerdeki altı çizili kelimeler isimleri (lokma, söz, kahve, günler, rüzgâr) nitelediği için sıfattır.'
      },
      {
        id: 'q-sf-13-2',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde işaret sıfatı yoktur?',
        options: [
          { id: 'A', text: 'Bu konuyu seninle daha sonra görüşelim.' },
          { id: 'B', text: 'Oraya ulaşmak için şu yolu takip etmelisin.' },
          { id: 'C', text: 'O adamı bir daha buralarda görmeyeyim.' },
          { id: 'D', text: 'Buraya ne zaman taşındığınızı hatırlamıyorum.' },
          { id: 'E', text: 'Öteki masaya geçerseniz daha rahat edersiniz.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Buraya" kelimesi ismin yerini tuttuğu için işaret zamiridir; ismi belirten bir sıfat değildir. A (Bu konu), B (şu yol), C (O adam), E (Öteki masa) seçeneklerinde işaret sıfatı kullanılmıştır.'
      },
      {
        id: 'q-sf-13-3',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde soru anlamı soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Neden bize daha önce haber vermedin?' },
          { id: 'B', text: 'Toplantı tam olarak nerede yapılacak?' },
          { id: 'C', text: 'Bunu ona kimin anlattığını biliyor musun?' },
          { id: 'D', text: 'Hangi takımı tuttuğunu hiç söylemedin mi?' },
          { id: 'E', text: 'Kaç gün sonra İstanbul\'a döneceksiniz?' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğindeki "Kaç" soru kelimesi, "gün" ismini belirttiği için soru sıfatıdır ve cümlenin temel soru anlamını sağlayan kelimedir (D şıkkında "mi" edatı soruyu sağlamıştır). A\'da zarf, B\'de zamir, C\'de (musun) edat vardır.'
      },
      {
        id: 'q-sf-13-4',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde sıra sayı sıfatı kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yarım elma, gönül alma.' },
          { id: 'B', text: 'Beşer kişilik gruplar oluşturuldu.' },
          { id: 'C', text: 'Sonuncu yarışmacı da bitiş çizgisine ulaştı.' },
          { id: 'D', text: 'Günde on sayfa kitap okurum.' },
          { id: 'E', text: 'Yüzde yirmi kâr marjıyla satış yapılıyor.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Sonuncu" kelimesi (tıpkı birinci, ikinci gibi) ismin (yarışmacı) sırasını belirttiği için sıra sayı sıfatıdır.'
      },
      {
        id: 'q-sf-13-5',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde belgisiz sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Hiçbiri bu karara itiraz etmedi.' },
          { id: 'B', text: 'Bütün sokaklar bayraklarla donatıldı.' },
          { id: 'C', text: 'Herkes kendi hatasını kabul etmeli.' },
          { id: 'D', text: 'Kimsenin kimseye tahammülü kalmamış.' },
          { id: 'E', text: 'Başkalarının ne dediği umurumda değil.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Bütün" kelimesi "sokaklar" ismini belirterek belgisiz sıfat görevinde kullanılmıştır. Diğer seçeneklerdeki kelimeler (hiçbiri, herkes, kimsenin, başkalarının) belgisiz zamirdir.'
      },
      {
        id: 'q-sf-13-6',
        difficulty: 'easy',
        questionText: 'Bir cümlede birden fazla sıfat aynı ismi niteleyebilir veya belirtebilir. Aşağıdakilerin hangisinde bu kullanıma bir örnek vardır?',
        options: [
          { id: 'A', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'B', text: 'Eski defterleri ve kitapları çöpe attı.' },
          { id: 'C', text: 'Şu büyük binanın yapımı ne zaman biter?' },
          { id: 'D', text: 'Kırmızı ve beyaz gülleri vazoya koydu.' },
          { id: 'E', text: 'Derin denizlerde yüzmek tehlikelidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bina" ismi, hem işaret/belirtme sıfatı ("Şu") hem de niteleme sıfatı ("büyük") almıştır; yani bir isim birden fazla sıfat tarafından nitelenmiş/belirtilmiştir.'
      },
      {
        id: 'q-sf-13-7',
        difficulty: 'easy',
        questionText: 'Aşağıdaki dizelerin hangisinde sıfat tamlaması yoktur?',
        options: [
          { id: 'A', text: 'Uzun ince bir yoldayım.' },
          { id: 'B', text: 'Yeşil türbesini gezdik dün akşam.' },
          { id: 'C', text: 'Kara toprak oldu son durağımız.' },
          { id: 'D', text: 'Benim sadık yârim kara topraktır.' },
          { id: 'E', text: 'Akşam, yine akşam, yine akşam.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde sadece isim (akşam) ve zarf (yine) kullanılmıştır; ismi niteleyen veya belirten herhangi bir sıfat (sıfat tamlaması) yoktur.'
      },
      {
        id: 'q-sf-13-8',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerin hangisinde adlaşmış sıfat kullanılmıştır?',
        options: [
          { id: 'A', text: 'Yaşlı teyze karşıya geçmeye çalışıyordu.' },
          { id: 'B', text: 'Gelenler salondaki yerlerini aldı.' },
          { id: 'C', text: 'Kirli bardakları makineye dizdim.' },
          { id: 'D', text: 'Zorlu günleri geride bıraktık.' },
          { id: 'E', text: 'Soğuk havalar yakında başlıyor.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğindeki "Gelen (kişiler)" tamlamasındaki isim düşmüş, "gelen" kelimesi çoğul ekini (-ler) alarak ismin yerini tutmuş ve adlaşmış sıfat(fiil) olmuştur.'
      },
      {
        id: 'q-sf-13-9',
        difficulty: 'easy',
        questionText: '"Bir" sözcüğü aşağıdaki cümlelerin hangisinde "herhangi bir" anlamında belgisiz sıfat olarak kullanılmıştır?',
        options: [
          { id: 'A', text: 'Günde sadece bir fincan kahve içer.' },
          { id: 'B', text: 'Sınava ancak bir hafta kalmıştı.' },
          { id: 'C', text: 'Güzel bir bahar günü yola çıktık.' },
          { id: 'D', text: 'Masaya bir tabak daha koyar mısın?' },
          { id: 'E', text: 'Oraya ulaşmak tam bir saat sürdü.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "bir" kelimesi sayı (adet) belirtmemekte, "herhangi bir" anlamı taşıyarak "bahar günü"nü belirsiz şekilde belirtmektedir (belgisiz sıfat). A, B, D ve E\'de ise adet (1) anlamı taşıdığı için sayı sıfatıdır.'
      },
      {
        id: 'q-sf-13-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki tamlamalardan hangisi diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: 'Mavi gökyüzü' },
          { id: 'B', text: 'Yeni kitap' },
          { id: 'C', text: 'Sıcak hava' },
          { id: 'D', text: 'Evin kapısı' },
          { id: 'E', text: 'Büyük deniz' }
        ],
        correctOptionId: 'D',
        explanation: 'A, B, C ve E seçeneklerindeki tamlamalar bir sıfat ve bir isimden oluşan "sıfat tamlaması"dır. D seçeneğindeki "Evin kapısı" ise iki isimden oluşan "belirtili isim tamlaması"dır.'
      }
    ]
  },
  {
    id: 'test-sifatlar-13-orta',
    title: 'Sıfatlar 13 (Orta)',
    description: 'Sözcük Türleri Sıfatlar - Orta Seviye (131-140)',
    type: 'comprehension',
    order: 38,
    questions: [
      {
        id: 'q-sf-13-11',
        difficulty: 'medium',
        questionText: 'Pekiştirme sıfatları genellikle ismin anlamını kuvvetlendirir. Aşağıdaki kelimelerden hangisi pekiştirilmiş bir sıfattır?',
        options: [
          { id: 'A', text: 'Geniş omuzlu gençler öne çıksın.' },
          { id: 'B', text: 'Kırmızı kaplı defterini evde unutmuş.' },
          { id: 'C', text: 'Sapsarı saçları rüzgârda uçuşuyordu.' },
          { id: 'D', text: 'Büyük büyük binalar dikmişler her yere.' },
          { id: 'E', text: 'Eski püskü kıyafetlerle geziyordu.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğindeki "Sapsarı" kelimesi, "sarı" sıfatının ilk hecesine "p" ünsüzü getirilerek pekiştirilmiş halidir (pekiştirme sıfatı). A ve B kurallı birleşik sıfat, D ve E ikilemelerle yapılmış sıfatlardır.'
      },
      {
        id: 'q-sf-13-12',
        difficulty: 'medium',
        questionText: 'Küçültme sıfatları isimlere gelen "-cık, -ce, -msi, -mtırak" ekleriyle yapılır. Aşağıdakilerin hangisinde altı çizili sözcük küçültme sıfatı değildir?',
        options: [
          { id: 'A', text: '_Ufacık_ elleriyle annesine tutundu.' },
          { id: 'B', text: '_Mayhoşumsu_ elmalardan bir kilo aldık.' },
          { id: 'C', text: 'Evimizin önünde _küçücük_ bir bahçe vardı.' },
          { id: 'D', text: '_Gelincik_ tarlası kızıla boyanmıştı.' },
          { id: 'E', text: '_Yeşilimsi_ gözleri çok dikkat çekiyordu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğindeki "Gelincik" kelimesi, bir çiçek adı olarak kalıplaşmış ve kalıcı isim olmuştur. Küçültme sıfatı görevinde değildir.'
      },
      {
        id: 'q-sf-13-13',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerde geçen altı çizili sıfatlardan hangisinin yapısı diğerlerinden farklıdır?',
        options: [
          { id: 'A', text: '_Saygılı_ çocukları herkes takdir eder.' },
          { id: 'B', text: '_Renkli_ gözleriyle bana bakıyordu.' },
          { id: 'C', text: '_Kırık_ camları değiştirmek için usta çağırdık.' },
          { id: 'D', text: '_Sıcak_ çaylarımızı yudumlayarak sohbet ettik.' },
          { id: 'E', text: '_Yorgun_ savaşçılar dinlenmeye çekildi.' }
        ],
        correctOptionId: 'D',
        explanation: 'A (saygı-lı), B (renk-li), C (kır-ık) ve E (yor-gun) seçeneklerindeki sıfatlar yapım eki alarak oluşmuş türemiş sıfatlardır. D seçeneğindeki "Sıcak" kelimesi ise yapım eki almamıştır, basit sıfattır.'
      },
      {
        id: 'q-sf-13-14',
        difficulty: 'medium',
        questionText: 'Unvan sıfatları özel adlara gelerek onların unvanını, rütbesini, akrabalığını belirtir. Aşağıdakilerin hangisinde unvan sıfatı kullanılmamıştır?',
        options: [
          { id: 'A', text: 'Doktor Ali Bey hastasını muayene etti.' },
          { id: 'B', text: 'Bakkal Mehmet Amca çok babacan biridir.' },
          { id: 'C', text: 'Gazi Mustafa Kemal Paşa ülkeyi kurtardı.' },
          { id: 'D', text: 'Ayşe Teyze bize nefis bir kek yapmış.' },
          { id: 'E', text: 'Zavallı adam soğuktan titriyordu.' }
        ],
        correctOptionId: 'E',
        explanation: 'A (Doktor, Bey), B (Bakkal, Amca), C (Gazi, Paşa), D (Teyze) kelimeleri özel isimlerle birlikte kullanılan unvan sıfatlarıdır. E seçeneğindeki "Zavallı" kelimesi ise bir niteleme sıfatıdır, unvan bildirmez.'
      },
      {
        id: 'q-sf-13-15',
        difficulty: 'medium',
        questionText: 'Sıfat tamlamalarında sıfat, bazen belirtisiz isim tamlamasının arasına giremez, başına gelerek tamlamanın bütününü niteler. Aşağıdakilerin hangisinde bu duruma uyan bir örnek vardır?',
        options: [
          { id: 'A', text: 'Masanın kırık bacağını tamir etti.' },
          { id: 'B', text: 'Evin büyük kapısı dün boyandı.' },
          { id: 'C', text: 'Çocuğun yırtık ayakkabısını diktiler.' },
          { id: 'D', text: 'Ahşap köy evleri çok dikkat çekiyor.' },
          { id: 'E', text: 'Ağacın kurumuş yaprakları döküldü.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "köy evleri" belirtisiz isim tamlamasıdır ve "Ahşap" kelimesi başa gelerek tamlamanın bütününü nitelemiştir. A, B, C ve E seçeneklerinde ise belirtili isim tamlamalarının arasına girerek tamlananı niteleyen sıfatlar vardır.'
      },
      {
        id: 'q-sf-13-16',
        difficulty: 'medium',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat, cümlenin nesnesi görevindedir?',
        options: [
          { id: 'A', text: 'Tembeller bu sınavdan da kötü not aldı.' },
          { id: 'B', text: 'Eskileri eskiciye yok pahasına verdik.' },
          { id: 'C', text: 'Yaşlılar her zaman saygı görmelidir.' },
          { id: 'D', text: 'Gelenler, içerideki boş yerlere otursun.' },
          { id: 'E', text: 'İyiler bu dünyada her zaman kazanmaz.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde "Eski eşyaları" anlamındaki "Eskileri" kelimesi adlaşmış sıfattır ve "Neyi verdik?" sorusuna cevap vererek cümlede belirtili nesne görevinde kullanılmıştır. Diğer şıklardakiler cümlenin öznesi konumundadır.'
      },
      {
        id: 'q-sf-13-17',
        difficulty: 'medium',
        questionText: 'Kurallı birleşik sıfatlar birkaç farklı kuralla oluşturulabilir. Aşağıdakilerin hangisinde "sıfat tamlaması + -lı/-li" kuralıyla oluşturulmuş bir birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Uzun boylu gençlerle voleybol oynadık.' },
          { id: 'B', text: 'Kırmızı kaplı defterini evde unutmuş.' },
          { id: 'C', text: 'Geniş omuzlu bir adamdı babası.' },
          { id: 'D', text: 'Başı dumanlı dağlar engel oldu bize.' },
          { id: 'E', text: 'Sarı saçlı kız bize doğru koştu.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "Başı dumanlı" kurallı birleşik sıfatı, "dumanlı baş" sıfat tamlamasında tamlayan ile tamlananın yer değiştirip ismin "-(s)i" iyelik eki alması (başı dumanlı) kuralıyla oluşturulmuştur. Diğerlerinde ise "uzun boy-lu, kırmızı kap-lı, vb." gibi eklentilerle yapılmıştır.'
      },
      {
        id: 'q-sf-13-18',
        difficulty: 'medium',
        questionText: '"Öyle" kelimesi cümlede zamir, sıfat ya da zarf olarak kullanılabilir. Aşağıdakilerin hangisinde bu kelime sıfat görevindedir?',
        options: [
          { id: 'A', text: 'Öyle konuşursan herkesi kendinden uzaklaştırırsın.' },
          { id: 'B', text: 'Bunu ona da öyle anlattığını söyledi.' },
          { id: 'C', text: 'Herkes öyle düşünüyor sanmıştım.' },
          { id: 'D', text: 'Bana öyle sözler verme, tutamazsın.' },
          { id: 'E', text: 'Bugün hava öyle sıcak ki duramıyorum.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "öyle" kelimesi "sözler" ismini belirttiği için sıfat görevindedir. A, B ve C\'de fiili etkilediği için zarf, E\'de ise sıfatı derecelendiren miktar zarfı görevindedir.'
      },
      {
        id: 'q-sf-13-19',
        difficulty: 'medium',
        questionText: 'Sayı sıfatları dört gruba ayrılır: asıl, sıra, kesir, üleştirme. Aşağıdaki cümlelerde geçen sayı sıfatları eşleştirildiğinde hangisi dışta kalır?',
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
        id: 'q-sf-13-20',
        difficulty: 'medium',
        questionText: 'Soru anlamı cümlede farklı kelimelerle sağlanabilir. Aşağıdakilerin hangisinde soru anlamı soru sıfatıyla sağlanmıştır?',
        options: [
          { id: 'A', text: 'Toplantı ne zaman başlayacakmış?' },
          { id: 'B', text: 'Bunca zamandır neden beni aramadın?' },
          { id: 'C', text: 'Bunu ona hangi yüzle söyleyeceksin?' },
          { id: 'D', text: 'Sen de benimle gelecek misin?' },
          { id: 'E', text: 'Bu güzel hediyeyi kimden aldın?' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "hangi" kelimesi "yüz" ismini belirttiği için soru sıfatıdır ve cümlenin soru anlamını sağlayan kelimedir.'
      }
    ]
  },
  {
    id: 'test-sifatlar-13-zor',
    title: 'Sıfatlar 13 (Zor)',
    description: 'Sözcük Türleri Sıfatlar - Zor Seviye (141-150)',
    type: 'comprehension',
    order: 39,
    questions: [
      {
        id: 'q-sf-13-21',
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
        id: 'q-sf-13-22',
        difficulty: 'hard',
        questionText: 'Aşağıdaki parçada geçen virgüllerden (,) hangisinin kaldırılması, bir kelimenin adlaşmış sıfat iken niteleme sıfatına dönüşmesine yol açar?',
        options: [
          { id: 'A', text: 'Ahmet, yarın akşam bizimle sinemaya gelecekmiş.' },
          { id: 'B', text: 'Kör, adama elindeki bastonuyla vurmaya çalıştı.' },
          { id: 'C', text: 'Kitap, kapağıyla herkesin dikkatini çekiyordu.' },
          { id: 'D', text: 'Çocuk, annesinin arkasına gizlenerek ağladı.' },
          { id: 'E', text: 'Bugün, hava dünden daha soğuk olacakmış.' }
        ],
        correctOptionId: 'B',
        explanation: 'B seçeneğinde virgül kaldırıldığında "Kör adama..." şeklinde bir sıfat tamlaması oluşur. "Kör" kelimesi, özne (adlaşmış sıfat) olmaktan çıkıp "adam" isminin niteleme sıfatı haline gelir. Bu da anlamın (ve türün) tamamen değişmesine neden olur.'
      },
      {
        id: 'q-sf-13-23',
        difficulty: 'hard',
        questionText: 'Miktar zarfları bazen bir ismi değil, o ismin sıfatını derecelendirir. Aşağıdakilerin hangisinde bu kurala uyan bir kullanım vardır?',
        options: [
          { id: 'A', text: 'Daha çok çalışarak sınavı kazandı.' },
          { id: 'B', text: 'Az yiyerek kısa sürede zayıfladı.' },
          { id: 'C', text: 'Pek konuşkan biri olmadığını söylemişti.' },
          { id: 'D', text: 'En çok onu sevdiğimi herkes bilir.' },
          { id: 'E', text: 'Toplantıda oldukça sıkıldığını fark ettim.' }
        ],
        correctOptionId: 'C',
        explanation: 'C seçeneğinde "konuşkan" kelimesi "biri" (zamirini/ismini) niteleyen bir sıfattır. "Pek" kelimesi ise fiili veya zarfı değil, doğrudan "konuşkan" sıfatını derecelendiren bir miktar zarfıdır (Pek konuşkan). Diğer şıklarda zarflar fiilleri derecelendirmiştir.'
      },
      {
        id: 'q-sf-13-24',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "-ki" eki isimden sıfat türetme işleviyle kullanılmıştır?',
        options: [
          { id: 'A', text: 'Odamın rengi, salonunkinden daha açık.' },
          { id: 'B', text: 'Seninki yine ortalıkta görünmüyor.' },
          { id: 'C', text: 'Anladım ki bu iş burada bitmeyecek.' },
          { id: 'D', text: 'Sabahki kazada neyse ki kimse yaralanmamış.' },
          { id: 'E', text: 'Masadakini alıp hızla dışarı çıktı.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "-ki" eki "sabah" isminin/zarfının üzerine gelerek onu "kaza" ismini belirten bir sıfata (Sabahki kaza) çevirmiştir. A ve B\'de ilgi zamiri, C\'de bağlaç, E\'de (masadaki eşyayı) adlaşmış sıfat/zamir görevindedir.'
      },
      {
        id: 'q-sf-13-25',
        difficulty: 'hard',
        questionText: 'Bir cümlede aynı isim, hem isim tamlaması hem de sıfat tamlaması içinde yer alabilir. Aşağıdaki cümlelerin hangisinde, arasına sıfat girmiş bir belirtili isim tamlaması vardır?',
        options: [
          { id: 'A', text: 'Eski köy evlerinin bacası hiç tütmüyor.' },
          { id: 'B', text: 'Ahşap masanın kırık bacağını zorlukla onardım.' },
          { id: 'C', text: 'Büyük deniz gemileri limana yanaşıyordu.' },
          { id: 'D', text: 'Yeni okul müdürü bugün göreve başladı.' },
          { id: 'E', text: 'Çocuğun yırtık ayakkabısını yeniledik.' }
        ],
        correctOptionId: 'E',
        explanation: 'E seçeneğinde "Çocuğun ayakkabısı" belirtili isim tamlamasıdır. "yırtık" niteleme sıfatı, tamlayan (Çocuğun) ile tamlanan (ayakkabısı) arasına girerek tamlananı nitelemiştir.'
      },
      {
        id: 'q-sf-13-26',
        difficulty: 'hard',
        questionText: 'Aşağıdaki dizelerin hangisinde adlaşmış sıfat ek fiil (-idi, -imiş, -ise, -dir) alarak yüklem olmuştur?',
        options: [
          { id: 'A', text: 'Bugün hava her zamankinden daha soğuktu.' },
          { id: 'B', text: 'En sevdiğim mevsim her zaman ilkbahardır.' },
          { id: 'C', text: 'Bu araba sandığımdan daha hızlıymış.' },
          { id: 'D', text: 'O zamanlar ben de çok çalışkandım.' },
          { id: 'E', text: 'Benim en iyi dostum sensin.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "çalışkandım" yüklemi, "çalışkan (öğrenciydim)" şeklindeki niteleme sıfatının isminin düşmesi ve ek fiil (çalışkan idim) almasıyla oluşmuş bir adlaşmış sıfattır.'
      },
      {
        id: 'q-sf-13-27',
        difficulty: 'hard',
        questionText: 'Birleşik sıfatlar anlamca kaynaşmış olabileceği gibi kurallı da olabilir. Aşağıdakilerin hangisinde "isim/sıfat tamlamasına -lı/-li eki getirilmesiyle" oluşmuş bir kurallı birleşik sıfat yoktur?',
        options: [
          { id: 'A', text: 'Mavi kapaklı defterleri özenle ayırdı.' },
          { id: 'B', text: 'Kırık dökük eşyaları hurdacıya verdiler.' },
          { id: 'C', text: 'Geniş omuzlu gençler takıma seçilecek.' },
          { id: 'D', text: 'Uzun boylu bir adam az önce seni sordu.' },
          { id: 'E', text: 'İki günlük dünyada kimseyi incitmeyin.' }
        ],
        correctOptionId: 'B',
        explanation: 'A, C, D ve E seçeneklerinde (mavi kapak-lı, geniş omuz-lu, uzun boy-lu, iki gün-lük) kurallı birleşik sıfat vardır. B seçeneğindeki "Kırık dökük" ise ikileme yoluyla oluşturulmuş bir niteleme sıfatıdır.'
      },
      {
        id: 'q-sf-13-28',
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
        explanation: 'E seçeneğinde "yanan" kelimesi sıfat-fiil (-an) ekini almıştır ancak önündeki isim (kişi) düştüğü için adlaşmış sıfat-fiil (adlaşmış sıfat) olmuş, bir sıfat tamlaması kurmamıştır. Diğerlerinde sıfat tamlaması mevcuttur.'
      },
      {
        id: 'q-sf-13-29',
        difficulty: 'hard',
        questionText: 'Aşağıdaki cümlelerin hangisinde "o" kelimesi bir ismi nitelemek veya belirtmek yerine, bir ismin yerini tutmuştur?',
        options: [
          { id: 'A', text: 'O eski günlerin hatırası hala kalbimde.' },
          { id: 'B', text: 'O arabayı almak için çok para biriktirdi.' },
          { id: 'C', text: 'O evde yıllarca yalnız başına oturdu.' },
          { id: 'D', text: 'O, hiçbir zaman yalan söylemezdi.' },
          { id: 'E', text: 'O kitabı okuduktan sonra hayatım değişti.' }
        ],
        correctOptionId: 'D',
        explanation: 'D seçeneğinde "O" kelimesi bir kişinin (ismin) yerini tuttuğu için kişi zamiridir. Diğer seçeneklerde ise isimleri (günler, araba, ev, kitap) belirttiği için işaret sıfatıdır.'
      },
      {
        id: 'q-sf-13-30',
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
        explanation: 'A, B, C ve E seçeneklerindeki tamlamalar, ismi niteleyen veya yapıldığı maddeyi bildiren (eski müfredata göre takısız/sıfat) sıfat tamlamalarıdır. D seçeneğindeki "Sokak lambası" ise iki isimden oluşan "belirtisiz isim tamlaması"dır.'
      }
    ]
  }
];
