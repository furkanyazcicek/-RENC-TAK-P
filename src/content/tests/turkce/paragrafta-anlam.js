export default [
  {
    id: 'test-paragrafta-anlam-kolay',
    title: 'Kavrama Testi 1 (Kolay)',
    description: 'Paragrafta Anlam - Kolay (1-10)',
    type: 'comprehension',
    order: 1,
    questions: [
      {
        id: 'q-pa-k-1',
        difficulty: 'easy',
        questionText: '"Kuşlar göç ederken V şeklinde bir formasyon oluştururlar. En öndeki kuş, havayı yararak arkasındakiler için bir rüzgâr koridoru oluşturur. Öndeki kuş yorulduğunda arkaya geçer ve yerini bir başkası alır. Bu sayede sürü, tek bir kuşun uçabileceği mesafeden çok daha uzağa uçabilir."\n\nBu paragrafın ana düşüncesi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kuşlar göç ederken her zaman V şeklinde uçarlar.' },
          { id: 'B', text: 'En öndeki kuş sürünün en yaşlı ve tecrübeli kuşudur.' },
          { id: 'C', text: 'Dayanışma ve iş birliği, zorlukların üstesinden gelmeyi ve başarıyı artırır.' },
          { id: 'D', text: 'Göçmen kuşların uçuş hızı rüzgarın yönüne bağlıdır.' },
          { id: 'E', text: 'Hayvanlar aleminde sadece kuşlar takım çalışması yapar.' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada kuşların yardımlaşarak ve yer değiştirerek (iş birliğiyle) tek başlarına gidemeyecekleri kadar uzağa gittikleri anlatılmaktadır. Bu da dayanışma ve iş birliğinin önemini vurgular.'
      },
      {
        id: 'q-pa-k-2',
        difficulty: 'easy',
        questionText: '"Gül, güzelliğiyle her zaman edebiyatın baş tacı olmuştur. Kimi zaman aşkın, kimi zaman hüznün sembolü olarak şiirlerde yer almıştır. Ancak gülü sadece bir süs bitkisi olarak görmek ona haksızlık olur. Gül suyu, gül yağı gibi kozmetik ürünlerin yanı sıra gıda sektöründe de tatlılara lezzet katmak için kullanılır."\n\nBu parçada gül ile ilgili aşağıdakilerden hangisine değinilmemiştir?',
        options: [
          { id: 'A', text: 'Edebiyatta farklı duyguları simgelediğine' },
          { id: 'B', text: 'Gıda ve kozmetik alanında kullanıldığına' },
          { id: 'C', text: 'Sadece bir süs bitkisi olarak görülmemesi gerektiğine' },
          { id: 'D', text: 'Yetiştirilmesinin çok zahmetli olduğuna' },
          { id: 'E', text: 'Şiirlere konu olduğuna' }
        ],
        correctOptionId: 'D',
        explanation: 'Parçada gülün edebiyattaki yeri, sembolik anlamları, kozmetik ve gıdadaki kullanımından bahsedilmiştir. Ancak nasıl yetiştirildiği veya bunun zahmetli olup olmadığına değinilmemiştir.'
      },
      {
        id: 'q-pa-k-3',
        difficulty: 'easy',
        questionText: '"Çocukken en çok sevdiğim şey dedemin anlattığı masalları dinlemekti. O, masal anlatırken sadece konuşmaz; elleriyle, yüz mimikleriyle adeta o masalı yaşardı. Ben de kendimi o masalın içinde, devlerin veya perilerin dünyasında bulurdum. Şimdi büyüdüm ama o masalların bana kattığı hayal gücünü her zaman içimde taşıyorum."\n\nParçanın yazarı için aşağıdakilerden hangisi söylenebilir?',
        options: [
          { id: 'A', text: 'Çocukluğunda dedesiyle pek vakit geçirememiştir.' },
          { id: 'B', text: 'Büyüdükten sonra masal okumayı tamamen bırakmıştır.' },
          { id: 'C', text: 'Dedesinin etkileyici anlatımı sayesinde hayal gücü zenginleşmiştir.' },
          { id: 'D', text: 'Kendi çocuklarına da masal anlatmaktadır.' },
          { id: 'E', text: 'Masalların sadece çocuklar için olduğuna inanmaktadır.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, dedesinin yaşayarak anlattığı masallar sayesinde kendini o dünyanın içinde bulduğunu ve bu masalların kendisine kattığı hayal gücünü hala taşıdığını belirtmektedir.'
      },
      {
        id: 'q-pa-k-4',
        difficulty: 'easy',
        questionText: '"Teknoloji hızla gelişiyor, akıllı telefonlar hayatımızın merkezine yerleşti. Artık haberleşmekten bankacılık işlemlerine, alışverişten eğlenceye kadar her şeyi bu küçük ekranlardan yapıyoruz. (I) Ancak bu kolaylığın bir de bedeli var. (II) Aile içi iletişim zayıflıyor, insanlar aynı odada olmalarına rağmen birbirlerinin yüzüne bakmak yerine ekranlara bakıyorlar. (III) Uzmanlar bu durumun ileride ciddi psikolojik sorunlara yol açabileceği konusunda uyarıyor."\n\nBu parçadaki numaralanmış cümlelerden hangisi yazarın yakındığı (şikayet ettiği) asıl durumu ifade etmektedir?',
        options: [
          { id: 'A', text: 'Yalnız I' },
          { id: 'B', text: 'Yalnız II' },
          { id: 'C', text: 'Yalnız III' },
          { id: 'D', text: 'I ve II' },
          { id: 'E', text: 'II ve III' }
        ],
        correctOptionId: 'B',
        explanation: 'Yazarın asıl şikayet ettiği ve yakındığı konu, II. cümlede belirtilen "aile içi iletişimin zayıflaması ve insanların birbirinin yüzüne bakmaması" durumudur.'
      },
      {
        id: 'q-pa-k-5',
        difficulty: 'easy',
        questionText: '"(I) Kahve, dünyada sudan sonra en çok tüketilen içeceklerden biridir. (II) İlk olarak Etiyopya\'da keşfedilen kahve çekirdekleri, daha sonra Yemen üzerinden tüm dünyaya yayılmıştır. (III) Kahvenin uyarıcı etkisi, içindeki kafein maddesinden kaynaklanır. (IV) Aşırı kahve tüketimi kalp çarpıntısı ve uykusuzluk gibi sorunlara yol açabilir. (V) Günümüzde espresso, latte, mocha gibi pek çok farklı kahve çeşidi bulunmaktadır."\n\nBu parçada numaralanmış cümlelerin hangisinde neden-sonuç ilişkisi vardır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'C',
        explanation: 'III. cümlede kahvenin "uyarıcı etkisinin nedeni", "içindeki kafein maddesine" bağlanmıştır.'
      },
      {
        id: 'q-pa-k-6',
        difficulty: 'easy',
        questionText: '"Okumak, sadece basılı sayfalar üzerindeki kelimeleri gözle takip etmek değildir. Gerçek bir okuma eylemi, yazarın dünyasına girmek, onunla tartışmak, anlattıklarını kendi deneyimlerimizle harmanlayıp yeni bir anlam üretmektir. Aksi takdirde okunanlar, zihinde kalıcı bir iz bırakmadan uçup giden kelime yığınlarından ibaret kalır."\n\nBu parçaya göre "gerçek okuma" nasıl olmalıdır?',
        options: [
          { id: 'A', text: 'Günde en az belirli bir sayfa sayısına ulaşarak' },
          { id: 'B', text: 'Okunulan metin üzerinde düşünerek, sorgulayarak ve kendi dünyamızla ilişkilendirerek' },
          { id: 'C', text: 'Sadece ünlü yazarların klasikleşmiş eserlerini tercih ederek' },
          { id: 'D', text: 'Kitaptaki her kelimenin sözlük anlamına bakarak' },
          { id: 'E', text: 'Yazarın hayat hikayesini çok iyi bilerek' }
        ],
        correctOptionId: 'B',
        explanation: 'Parçada gerçek okumanın; yazarla tartışmak, kendi deneyimlerimizle harmanlamak ve yeni anlam üretmek (aktif ve sorgulayıcı okuma) olduğu belirtilmektedir.'
      },
      {
        id: 'q-pa-k-7',
        difficulty: 'easy',
        questionText: '"Zamanın nasıl geçtiğini anlamak istiyorsanız çocuklara bakın. Onların büyümeleri, değişmeleri, dün yapamadıklarını bugün yapabilmeleri bize zamanın akışını en somut şekilde gösterir. Dün kucağınızda taşıdığınız bebek, bugün okula başlıyor; yarın ise kendi ayakları üzerinde duran bir yetişkin oluyor."\n\nBu parçanın konusu aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Çocuk yetiştirmenin zorlukları' },
          { id: 'B', text: 'Çocukların eğitim hayatı' },
          { id: 'C', text: 'Zamanın hızlı ve somut geçişinin çocuklar üzerinden fark edilmesi' },
          { id: 'D', text: 'Ebeveynlerin çocuklarıyla geçirdiği kaliteli zaman' },
          { id: 'E', text: 'İnsan ömrünün kısalığı' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada, zamanın akışını (nasıl geçtiğini) anlamanın en somut yolunun çocukların büyümesini gözlemlemek olduğu anlatılmaktadır.'
      },
      {
        id: 'q-pa-k-8',
        difficulty: 'easy',
        questionText: '"Kutup ayıları, soğuk ve buzlu ortamlara kusursuz bir şekilde uyum sağlamışlardır. Kalın kürkleri ve kürklerinin altındaki kalın yağ tabakası onları dondurucu soğuktan korur. Ayrıca beyaz renkli olmaları, karların içinde kolayca saklanıp avlanmalarını sağlar. Pençeleri ise buz üzerinde kaymadan yürüyebilecek şekilde tasarlanmıştır."\n\nBu paragrafta kutup ayıları ile ilgili aşağıdakilerden hangisi üzerinde durulmuştur?',
        options: [
          { id: 'A', text: 'Beslenme alışkanlıkları ve avları' },
          { id: 'B', text: 'Üreme ve yavru bakımı' },
          { id: 'C', text: 'Soylarının tükenme tehlikesi' },
          { id: 'D', text: 'Zorlu çevre koşullarına fiziksel adaptasyonları (uyumları)' },
          { id: 'E', text: 'Diğer ayı türleriyle olan farklılıkları' }
        ],
        correctOptionId: 'D',
        explanation: 'Parçada kutup ayılarının kalın kürkü, yağ tabakası, beyaz rengi ve pençe yapısı gibi soğuk ve buzlu ortama uyum sağlamalarını (adaptasyon) kolaylaştıran fiziksel özellikleri anlatılmıştır.'
      },
      {
        id: 'q-pa-k-9',
        difficulty: 'easy',
        questionText: '"Bir şehrin ruhunu anlamak istiyorsanız müzelerine değil, pazarlarına gidin. Müzeler, o şehrin geçmişini ve donmuş halini sergilerken; pazarlar, o şehrin bugünü, yaşayan nabzı, kokusu, sesi ve telaşıdır. Pazarcının bağırışında, insanların pazarlığında o halkın gerçek kültürünü görürsünüz."\n\nBu parçaya göre bir şehrin gerçek kültürü nerede daha iyi gözlemlenir?',
        options: [
          { id: 'A', text: 'Tarihi müzelerinde' },
          { id: 'B', text: 'Turistik mekanlarında' },
          { id: 'C', text: 'Şehrin eski mimarisinde' },
          { id: 'D', text: 'Günlük hayatın canlı yaşandığı pazar yerlerinde' },
          { id: 'E', text: 'Kütüphane ve okullarında' }
        ],
        correctOptionId: 'D',
        explanation: 'Yazar, müzelerin şehrin donmuş geçmişi olduğunu, oysa pazarların şehrin yaşayan nabzını ve gerçek halk kültürünü yansıttığını savunmaktadır.'
      },
      {
        id: 'q-pa-k-10',
        difficulty: 'easy',
        questionText: 'Aşağıdaki cümlelerden hangisi bir paragrafın "giriş cümlesi" olmaya en uygundur?',
        options: [
          { id: 'A', text: 'Bununla birlikte, sanayileşme doğaya büyük zararlar vermiştir.' },
          { id: 'B', text: 'İşte bu yüzden çocukların erken yaşta spora yönlendirilmesi gerekir.' },
          { id: 'C', text: 'Dil, bir milletin kültürünü nesilden nesile aktaran en önemli araçtır.' },
          { id: 'D', text: 'Halbuki yazarın son kitabında bu konuya hiç değinilmemiş.' },
          { id: 'E', text: 'Bu gelişmeler ışığında yeni bir eğitim modeline geçilmelidir.' }
        ],
        correctOptionId: 'C',
        explanation: 'Giriş cümleleri bağımsızdır, kendisinden önce başka bir cümlenin varlığına ihtiyaç duymaz. A, B, D ve E seçeneklerinde bağlayıcı (bununla birlikte, işte bu yüzden, halbuki, bu gelişmeler) ifadeler kullanıldığı için bunlar kendinden önceki cümlelere bağlıdır.'
      }
    ]
  },
  {
    id: 'test-paragrafta-anlam-orta',
    title: 'Kavrama Testi 2 (Orta)',
    description: 'Paragrafta Anlam - Orta (11-20)',
    type: 'comprehension',
    order: 2,
    questions: [
      {
        id: 'q-pa-o-1',
        difficulty: 'medium',
        questionText: '"Sanat, gerçeğin kopyası değildir; gerçeğin sanatçı tarafından yeniden yorumlanmasıdır. Fotoğraf makinesi, karşısındaki manzarayı olduğu gibi kaydeder. Ancak bir ressam, aynı manzaraya kendi duygularını, dünya görüşünü ve o andaki ruh halini de katar. Bu yüzden aynı ağacı çizen on farklı ressamdan, on farklı ağaç tablosu ortaya çıkar."\n\nBu parçada asıl anlatılmak istenen düşünce nedir?',
        options: [
          { id: 'A', text: 'Fotoğrafçılık sanatı, resim sanatından daha gerçekçidir ve objektiftir.' },
          { id: 'B', text: 'Sanat eseri, nesnel gerçekliğin sanatçının öznelliği (kendi yorumu) ile harmanlanmasıyla oluşur.' },
          { id: 'C', text: 'Yetenekli bir ressam, manzarayı fotoğraf makinesi kadar kusursuz çizebilmelidir.' },
          { id: 'D', text: 'Sanatta önemli olan, eserin toplum tarafından nasıl anlaşıldığıdır.' },
          { id: 'E', text: 'Her sanatçının etkilendiği farklı bir doğa manzarası vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metinde fotoğraf makinesinin nesnelliğine (olduğu gibi kaydetme) karşılık, sanatçının manzarayı kendi duyguları ve ruh haliyle (öznelliğiyle) yeniden ürettiği vurgulanmaktadır.'
      },
      {
        id: 'q-pa-o-2',
        difficulty: 'medium',
        questionText: '"(I) Kitap okumak, kelime dağarcığını geliştirdiği gibi empati yeteneğini de artırır. (II) Çünkü insan okuduğu romandaki karakterin yerine kendini koyar, onun acılarını ve sevinçlerini yaşar. (III) Bu durum da günlük hayatta insanları daha iyi anlamasını sağlar. (IV) Son yıllarda yayımlanan romanların çoğu maalesef edebi nitelikten yoksun. (V) Empati yeteneği gelişen bir toplumda çatışmalar azalır ve hoşgörü ortamı yeşerir."\n\nBu parçada numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'D',
        explanation: 'Paragrafın I, II, III ve V. cümlelerinde kitap okumanın empati yeteneğine katkısı ve bunun sonuçları anlatılırken; IV. cümlede aniden "son yıllarda yayımlanan romanların edebi kalitesine" geçilerek konu dışına çıkılmış ve akış bozulmuştur.'
      },
      {
        id: 'q-pa-o-3',
        difficulty: 'medium',
        questionText: '"İnsanlar iletişim kurarken kelimeler kadar, hatta bazen kelimelerden daha çok beden dilini kullanırlar. Çaprazlanmış kollar savunmacı bir tavrı, sürekli saate bakmak sıkıntıyı, hafifçe öne eğilerek dinlemek ise ilgi ve saygıyı gösterir. Beden dili yalan söylemez; dudaklar \'harikayım\' dese de, düşük omuzlar gerçeği haykırır."\n\nBu paragraftan çıkarılabilecek en kesin yargı aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Kelimeler iletişimde hiçbir önem taşımaz.' },
          { id: 'B', text: 'İnsanların duygularını anlamanın tek yolu beden dillerini okumaktır.' },
          { id: 'C', text: 'Beden dili, kişinin gerçek duygu ve düşüncelerini sözlü iletişimden daha şeffaf bir şekilde yansıtır.' },
          { id: 'D', text: 'İyi yalan söyleyen kişiler beden dillerini de çok iyi kontrol ederler.' },
          { id: 'E', text: 'Sürekli saate bakan biri mutlaka yalan söylüyordur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada beden dilinin kelimelerden daha dürüst olduğu, sözler yalan söylese bile bedenin (düşük omuzlar) gerçeği yansıtacağı belirtilmiştir. Bu durum, beden dilinin sözlerden daha şeffaf (dürüst) olduğunu gösterir.'
      },
      {
        id: 'q-pa-o-4',
        difficulty: 'medium',
        questionText: '"Özgüven, kişinin yapabileceklerinin farkında olmasıdır; kibir ise yapamayacağı şeyleri bile yapabileceğini iddia edip başkalarını küçümsemesidir. Özgüvenli insan, hatalarını kabul edip onlardan ders çıkarır. Kibirli insan ise her zaman haklı olduğunu düşünür ve suçu başkalarında arar. Özgüven insanları sana çekerken, kibir herkesi senden uzaklaştırır."\n\nBu parçada "özgüven" ve "kibir" ile ilgili olarak aşağıdakilerden hangisine değinilmemiştir?',
        options: [
          { id: 'A', text: 'Özgüvenin gerçekçi bir öz değerlendirmeye dayandığına' },
          { id: 'B', text: 'Kibirli insanların çevreleriyle sorunlar yaşayıp yalnızlaştığına' },
          { id: 'C', text: 'Özgüvenin, kişinin hata yapma ihtimalini ortadan kaldırdığına' },
          { id: 'D', text: 'Kibirli kişilerin hataların sorumluluğunu almaktan kaçtığına' },
          { id: 'E', text: 'Özgüvenli insanların sosyal ilişkilerinde daha başarılı ve çekici olduğuna' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada özgüvenli insanın "hatalarını kabul edip ders çıkardığı" belirtilmiştir. Dolayısıyla hata yapma ihtimalini ortadan kaldırdığına değinilmemiştir, tam tersine hata yapabildiği ve kabul ettiği belirtilmiştir.'
      },
      {
        id: 'q-pa-o-5',
        difficulty: 'medium',
        questionText: '"Deneme türü, yazarın kendi kendisiyle sohbet ediyormuş gibi, içten ve samimi bir dille yazdığı yazılardır. Denemede kesin kurallar, ispatlama kaygısı veya bilimsel bir dil yoktur. Montaigne\'in de dediği gibi \'Denemelerin konusu bizzat benim.\' Yazar, hayatın içinden herhangi bir konuyu kendi duygu süzgecinden geçirerek okura sunar."\n\nBu parçaya göre "deneme" türünün belirleyici özelliği aşağıdakilerden hangisi değildir?',
        options: [
          { id: 'A', text: 'İçten ve samimi (senli benli) bir üslubunun olması' },
          { id: 'B', text: 'Yazarın kendi duygu ve düşüncelerini merkez alması' },
          { id: 'C', text: 'Ele alınan konunun uzmanlık ve nesnel kanıt gerektirmesi' },
          { id: 'D', text: 'Öne sürülen fikirleri ispatlama amacının olmaması' },
          { id: 'E', text: 'Konu sınırının olmaması (hayatın içinden herhangi bir konu olabilmesi)' }
        ],
        correctOptionId: 'C',
        explanation: 'Parçada denemenin ispatlama kaygısı veya bilimsel bir dili olmadığı açıkça belirtilmiştir. Bu nedenle nesnel kanıt veya uzmanlık gerektirmesi, denemenin bir özelliği olamaz (Makalenin özelliğidir).'
      },
      {
        id: 'q-pa-o-6',
        difficulty: 'medium',
        questionText: '"Geleneksel el sanatlarımız, teknolojik üretimlerin hızına yenik düşerek birer birer kayboluyor. Bakırcılık, çinicilik, lüle taşı işlemeciliği gibi yüzyıllık ustalık gerektiren meslekler, yerini fabrikasyon ürünlere bıraktı. Çünkü el emeği göz nuru bir ürün haftalarca sürede ortaya çıkarken, makineler aynı ürünü dakikalar içinde ve çok daha ucuza üretebiliyor. Bu haksız rekabet, çırak bulamayan ustaları kepenk kapatmaya zorluyor."\n\nParçada geleneksel el sanatlarının kaybolmasının temel nedeni olarak ne gösterilmiştir?',
        options: [
          { id: 'A', text: 'Genç neslin el sanatlarına ilgi duymaması' },
          { id: 'B', text: 'Hammadde (bakır, lüle taşı vb.) fiyatlarının aşırı yükselmesi' },
          { id: 'C', text: 'Ustaların meslek sırlarını çıraklarına öğretmek istememesi' },
          { id: 'D', text: 'Seri üretim yapan teknolojinin hızı ve ucuzluğu karşısında el emeğinin rekabet edememesi' },
          { id: 'E', text: 'Devletin geleneksel sanatları yeterince desteklememesi' }
        ],
        correctOptionId: 'D',
        explanation: 'Metinde açıkça el emeğinin haftalar sürmesi, makinelerin ise dakikalar içinde ucuza üretmesi (haksız rekabet / hız) temel neden olarak vurgulanmıştır.'
      },
      {
        id: 'q-pa-o-7',
        difficulty: 'medium',
        questionText: '"Bazı insanlar eleştiriye hiç gelemezler. Onlar için eleştiri, kişiliklerine yapılmış bir saldırıdır. Oysa yıkıcı olmayan, yapıcı ve iyi niyetli bir eleştiri, insanı olgunlaştıran en önemli araçtır. Düşünsenize, aynalar olmasaydı yüzümüzdeki lekeyi nasıl görebilirdik? İşte iyi bir eleştirmen de bizim için bir aynadır."\n\nParçada anlatılmak isteneni en iyi özetleyen cümle aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İnsanlar ancak kendi hatalarını kendileri fark edebilirler.' },
          { id: 'B', text: 'Eleştiri yapan kişilerin kendi hayatlarında kusursuz olmaları gerekir.' },
          { id: 'C', text: 'Yapıcı eleştiriler, hatalarımızı görmemizi sağlayarak bizi geliştirir ve olgunlaştırır.' },
          { id: 'D', text: 'Toplum içinde kimseyi eleştirmemek, en büyük saygı göstergesidir.' },
          { id: 'E', text: 'Sürekli eleştiri alan insanların özgüveni zamanla yok olur.' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar yapıcı eleştiriyi bir aynaya benzetmekte, hataları (yüzdeki lekeyi) gösterip insanı geliştirdiğini (olgunlaştırdığını) savunmaktadır.'
      },
      {
        id: 'q-pa-o-8',
        difficulty: 'medium',
        questionText: 'Aşağıdaki cümlelerden hangisi "Neden bazı kitaplar yıllar geçse de unutulmazken, bazıları birkaç ay içinde tozlu raflarda kaybolur?" sorusuna verilmiş bir cevabın parçası olamaz?',
        options: [
          { id: 'A', text: 'Çünkü evrensel insan duygularına dokunabilen eserler zamana meydan okur.' },
          { id: 'B', text: 'Günübirlik siyasi çekişmeleri anlatan kitapların ömrü, o tartışmalar bitene kadardır.' },
          { id: 'C', text: 'Bir kitabın kapağı ve sayfa kalitesi, onun edebi değerinden çok daha önemlidir.' },
          { id: 'D', text: 'İnsan doğasının derinliklerine inemeyen karakterler, okurun zihninde kalıcı bir yer edinemez.' },
          { id: 'E', text: 'Klasikleşmiş eserler, her dönemde okurun kendi hayatından bir parça bulabildiği kitaplardır.' }
        ],
        correctOptionId: 'C',
        explanation: 'A, B, D ve E seçenekleri kitapların neden unutulup unutulmadığını (içerik, evrensellik, güncellik, derinlik bağlamında) açıklar. C seçeneği ise kapak ve sayfa kalitesinin edebi değerden önemli olduğunu savunan, bu soruya mantıklı bir cevap oluşturmayan absürt bir yargıdır.'
      },
      {
        id: 'q-pa-o-9',
        difficulty: 'medium',
        questionText: '"Sokrates, bir şey bilmediğini bilen tek kişi olduğu için dönemin en bilge adamı kabul edilirdi. Gerçek cehalet, hiçbir şey bilmemek değil; bildiğini zannedip öğrenmeye kendini kapatmaktır. Bir insan \'Her şeyi biliyorum\' dediği an, zihinsel gelişimi durmuş demektir."\n\nBu paragrafta asıl vurgulanan kavram aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Cesaret' },
          { id: 'B', text: 'Öz güven' },
          { id: 'C', text: 'Felsefe' },
          { id: 'D', text: 'Entelektüel tevazu (Öğrenmeye açıklık ve bilmediğini kabul etme)' },
          { id: 'E', text: 'Çok okuma' }
        ],
        correctOptionId: 'D',
        explanation: 'Parçada, kişinin bildiğini zannetmesinin öğrenmeyi durdurduğu, bilmediğini kabul etmenin ise gerçek bilgelik (tevazu/alçakgönüllülük) olduğu vurgulanmıştır.'
      },
      {
        id: 'q-pa-o-10',
        difficulty: 'medium',
        questionText: '"(I) Türkiye\'nin turizm potansiyeli sadece deniz, kum ve güneş üçlüsünden ibaret değildir. (II) Anadolu, Hititlerden Romalılara, Selçuklulardan Osmanlı\'ya kadar pek çok medeniyete ev sahipliği yapmıştır. (III) Bu durum Türkiye\'yi eşsiz bir kültür ve tarih turizmi merkezi haline getirmiştir. (IV) Son zamanlarda kış turizmine yapılan yatırımlar da meyvelerini vermeye başlamıştır. (V) Kapadokya, Göbeklitepe, Efes gibi antik kentler her yıl milyonlarca tarih meraklısını ülkemize çekmektedir."\n\nBu parçada numaralanmış cümlelerden hangisi anlam akışını bozmaktadır?',
        options: [
          { id: 'A', text: 'II' },
          { id: 'B', text: 'III' },
          { id: 'C', text: 'IV' },
          { id: 'D', text: 'V' },
          { id: 'E', text: 'I' }
        ],
        correctOptionId: 'C',
        explanation: 'Paragrafın genel konusu Türkiye\'nin "tarih ve kültür" turizmidir (Hititler, medeniyetler, antik kentler). Araya giren IV. cümlede "kış turizmi" konusuna geçilmesi anlam bütünlüğünü ve akışı bozmuştur.'
      }
    ]
  },
  {
    id: 'test-paragrafta-anlam-zor',
    title: 'Kavrama Testi 3 (Zor)',
    description: 'Paragrafta Anlam - Zor (21-30)',
    type: 'comprehension',
    order: 3,
    questions: [
      {
        id: 'q-pa-z-1',
        difficulty: 'hard',
        questionText: '"Kafka\'nın Dönüşüm adlı eserinde Gregor Samsa\'nın bir sabah kendini dev bir böceğe dönüşmüş olarak bulması, salt fantastik bir öge değildir. Bu dönüşüm; modern kapitalist sistemde insanın makineleşmesini, ailesi ve toplum için sadece bir \'para kazanma aracı\' olduğu gerçeğini yüzüne vuran çarpıcı bir metafordur. Gregor işe gidemediği ve para getiremediği an, en yakınları (ailesi) tarafından dışlanır ve bir böcek gibi iğrenç bulunur."\n\nBu parçadan Kafka\'nın "Dönüşüm" eseriyle ilgili aşağıdaki yargılardan hangisine ulaşılamaz?',
        options: [
          { id: 'A', text: 'Eserdeki böceğe dönüşme olayı sembolik (metaforik) bir anlam taşımaktadır.' },
          { id: 'B', text: 'Modern çalışma sisteminin insanı kendine yabancılaştırdığı ve metalaştırdığı eleştirilmiştir.' },
          { id: 'C', text: 'Toplumsal ve ailevi değerlerin, kişinin ekonomik üretkenliğine bağlı olduğu gösterilmiştir.' },
          { id: 'D', text: 'Gregor Samsa karakteri üzerinden modern insanın yalnızlığı ve işe yaramazlık korkusu işlenmiştir.' },
          { id: 'E', text: 'Eser, edebiyat tarihindeki ilk bilim kurgu romanı olma özelliğini taşımaktadır.' }
        ],
        correctOptionId: 'E',
        explanation: 'Parçada eserin metaforik yapısı, kapitalizm eleştirisi, ailenin ekonomik çıkarcılığı ve yalnızlaşma anlatılmıştır. Ancak eserin "ilk bilim kurgu romanı" olduğuyla ilgili hiçbir bilgi veya iddia yoktur.'
      },
      {
        id: 'q-pa-z-2',
        difficulty: 'hard',
        questionText: '"Dil, yaşayan ve sürekli değişen canlı bir organizmadır. Bir dildeki kelimelerin zamanla anlam daralmasına veya genişlemesine uğraması, başka dillerden kelimeler alınması veya bazı kelimelerin unutulması engellenemez. Türkçenin saflaştırılması adına yüzyıllardır dilimizde olan ve halk tarafından benimsenmiş kelimeleri söküp atmaya çalışmak, bir ağacın yeşermiş dallarını budamak değil, kökünü baltalamaktır."\n\nBu paragrafın yazarının aşağıdakilerden hangisini savunması beklenir?',
        options: [
          { id: 'A', text: 'Dilimizde bulunan yabancı kökenli tüm kelimelerin acilen atılmasını' },
          { id: 'B', text: 'Dildeki değişimin yapay müdahalelerle değil, doğal akışında gerçekleşmesini' },
          { id: 'C', text: 'Yeni türetilen kelimelerin hiçbir zaman halk tarafından kabul görmeyeceğini' },
          { id: 'D', text: 'Bir dilin gücünün kelime sayısının azlığıyla ölçüldüğünü' },
          { id: 'E', text: 'Edebiyat dilinin konuşma dilinden tamamen kopuk olması gerektiğini' }
        ],
        correctOptionId: 'B',
        explanation: 'Yazar, dili canlı bir organizmaya benzetmekte, saflaştırma adı altında halkın benimsediği kelimeleri atmanın dile zarar vereceğini (kökünü baltalamak) savunmaktadır. Dolayısıyla dildeki değişimin doğal akışına bırakılmasını destekler.'
      },
      {
        id: 'q-pa-z-3',
        difficulty: 'hard',
        questionText: '"Bellek (hafıza), sadece geçmişin bir deposu değil; aynı zamanda geleceği inşa ettiğimiz atölyedir. Bizler, geçmişte yaptığımız hataları, tecrübeleri hatırlayarak yarınki adımlarımızı planlarız. Hafızasını kaybeden bir toplum, sadece dünü unutmuş olmaz; pusulasını kaybettiği için yarına dair yönünü de tayin edemez."\n\nBu parçadan çıkarılacak asıl sonuç aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'İnsan beyni, kapasitesi sınırlı bir depolama alanıdır.' },
          { id: 'B', text: 'Geçmişi hatırlamak, insanlara çoğu zaman acı verir.' },
          { id: 'C', text: 'Toplumsal hafıza ve tecrübe birikimi, geleceği sağlıklı kurabilmenin temel şartıdır.' },
          { id: 'D', text: 'Tarih kitapları okumak, hafızamızı canlı tutmanın en iyi yoludur.' },
          { id: 'E', text: 'Sürekli geçmişi düşünmek, anı yaşamamızı engeller.' }
        ],
        correctOptionId: 'C',
        explanation: 'Metinde hafızanın geçmiş deposu olmasının ötesinde geleceği inşa atölyesi olduğu, dünü unutan toplumun yarının yönünü (pusulasını) bulamayacağı vurgulanmıştır. En uygun yargı C seçeneğidir.'
      },
      {
        id: 'q-pa-z-4',
        difficulty: 'hard',
        questionText: '"Bilim kurgu edebiyatı, sadece uzaylıları veya uçan arabaları anlatmaz. O aslında günümüzün toplumsal kaygılarını, etik krizlerini ve teknolojinin getirebileceği tehlikeleri büyüteç altına alır. \'Böyle giderse ne olur?\' sorusunu sorarak bizi distopik bir gelecekle uyarır. Yani bilim kurgu, geleceğe değil, bugüne tutulan devasa bir aynadır."\n\nParçaya göre bilim kurgu edebiyatının temel işlevi aşağıdakilerden hangisidir?',
        options: [
          { id: 'A', text: 'Okuyucuyu gerçek dünyadan uzaklaştırıp hayal dünyasına götürmek' },
          { id: 'B', text: 'Bilim insanlarına yeni teknolojik buluşlar için ilham vermek' },
          { id: 'C', text: 'Bugünkü gidişatın doğurabileceği sonuçları kurgulayarak topluma güncel bir eleştiri/uyarı sunmak' },
          { id: 'D', text: 'Geçmişte yapılmış tarihi hataların tekrarını engellemek' },
          { id: 'E', text: 'Sadece eğlenceli ve aksiyon dolu sinema senaryoları üretmek' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, bilim kurgunun günümüz kaygılarını büyüteç altına aldığını, "böyle giderse ne olur" diyerek uyardığını ve bugüne ayna tuttuğunu belirterek onun aslında bir toplumsal eleştiri aracı olduğunu vurgulamıştır.'
      },
      {
        id: 'q-pa-z-5',
        difficulty: 'hard',
        questionText: '(I) Postmodern roman, klasik romanın çizdiği kalıpları yıkmayı amaçlar. (II) Klasik romandaki serim, düğüm, çözüm gibi mantıksal sıralama postmodern romanda parçalanır. (III) Okuyucu artık pasif bir izleyici değil, anlamı yazarla birlikte yeniden üreten aktif bir katılımcıdır. (IV) Postmodern edebiyatın en önemli temsilcilerinden biri de Oğuz Atay\'dır. (V) Metinlerarasılık, üstkurmaca ve ironi postmodern metinlerin vazgeçilmez yapı taşlarıdır.\n\nBu paragrafın anlam bütünlüğünü sağlamak için numaralanmış cümlelerden hangisi parçadan çıkarılmalıdır?',
        options: [
          { id: 'A', text: 'I' },
          { id: 'B', text: 'II' },
          { id: 'C', text: 'III' },
          { id: 'D', text: 'IV' },
          { id: 'E', text: 'V' }
        ],
        correctOptionId: 'D',
        explanation: 'Paragrafın tamamında (I, II, III ve V) postmodern romanın teorik özellikleri, yapısı ve kuralları (metinlerarasılık, üstkurmaca vb.) anlatılmaktadır. Araya giren IV. cümlede spesifik bir yazara (Oğuz Atay) atıf yapılması, kuramsal anlatımın akışını bozmaktadır.'
      },
      {
        id: 'q-pa-z-6',
        difficulty: 'hard',
        questionText: '"Mimari, sadece barınma ihtiyacını karşılayan yapılar bütünü değildir. Bir şehrin mimarisi, o toplumun inançlarının, sosyal yapısının ve doğayla kurduğu ilişkinin taşlara kazınmış halidir. Betonarme gökdelenlerin güneşi kestiği bir şehirde hırstan ve bireysellikten; avlulu, iç içe geçmiş ahşap evlerin bulunduğu bir şehirde ise dayanışmadan ve komşuluktan söz edebiliriz."\n\nBu parçadan yola çıkarak aşağıdaki yargılardan hangisine ulaşılabilir?',
        options: [
          { id: 'A', text: 'Ahşap evler betonarme yapılara göre depreme daha dayanıklıdır.' },
          { id: 'B', text: 'Mimari formlar ve yapı tercihleri, toplumun sosyokültürel psikolojisinin yansımasıdır.' },
          { id: 'C', text: 'Gökdelenlerin artması şehirlerdeki nüfus yoğunluğunu çözmektedir.' },
          { id: 'D', text: 'Geleneksel mimari, modern mimariden daha ucuza mal olmaktadır.' },
          { id: 'E', text: 'Her toplumun kendine özgü, değişmez bir mimari stili vardır.' }
        ],
        correctOptionId: 'B',
        explanation: 'Metin, mimarinin sadece barınak olmadığını; binaların tarzının (gökdelen=hırs/bireysellik, avlulu ev=dayanışma) o toplumun kültürünü, inancını ve psikolojisini yansıttığını anlatmaktadır.'
      },
      {
        id: 'q-pa-z-7',
        difficulty: 'hard',
        questionText: '"Özgürlük, canının her istediğini yapmak değildir. Gerçek özgürlük, kişinin kendi koyduğu kurallara uyabilmesi, anlık dürtülerine esir olmadan iradesini kullanabilmesidir. Eğer bir insan öfkesine, hırslarına veya arzularına boyun eğiyorsa, o insan özgür değil; kendi zaaflarının kölesidir."\n\nBu parçada "gerçek özgürlük" aşağıdakilerden hangisiyle bağdaştırılmıştır?',
        options: [
          { id: 'A', text: 'Toplumsal kuralları ve kanunları tamamen reddetmekle' },
          { id: 'B', text: 'Kimseye hesap vermeden dilediği gibi yaşamakla' },
          { id: 'C', text: 'Kişinin kendi dürtülerini kontrol edebilmesi ve irade sahibi olmasıyla' },
          { id: 'D', text: 'Maddi olarak hiçbir şeye bağımlı olmamakla' },
          { id: 'E', text: 'Sürekli seyahat edip yeni yerler keşfetmekle' }
        ],
        correctOptionId: 'C',
        explanation: 'Yazar, canının istediğini yapmayı zaafların kölesi olmak olarak nitelendirmiş, asıl özgürlüğü irade kullanabilmek (dürtüleri kontrol etmek) olarak tanımlamıştır.'
      },
      {
        id: 'q-pa-z-8',
        difficulty: 'hard',
        questionText: '"Günümüz dünyasında bilgiye ulaşmak artık saniyeler sürüyor. Eskiden ansiklopedilerde günlerce aranan bir bilgi, şimdi tek bir tıkla karşımızda. Ancak bu hız, bilginin sindirilmesini engelliyor. Bilgi okyanusunda yüzüyoruz ama içmeye bir damla tatlı suyumuz yok. Enformasyon bombardımanı altında, derin düşünme (tefekkür) yeteneğimizi kaybediyoruz."\n\nBu parçada yakınılan (eleştirilen) temel durum nedir?',
        options: [
          { id: 'A', text: 'İnternetteki bilgilerin çoğunun yanlış ve güvenilmez olması' },
          { id: 'B', text: 'Ansiklopedilerin ve basılı kitapların değerini yitirmesi' },
          { id: 'C', text: 'İnternet hızının hala istenilen seviyeye gelmemesi' },
          { id: 'D', text: 'Bilgiye erişimin çok kolay ve yüzeysel olmasının, derinlemesine düşünmeyi (analiz yeteneğini) köreltmesi' },
          { id: 'E', text: 'Gençlerin zamanlarının çoğunu sosyal medyada harcaması' }
        ],
        correctOptionId: 'D',
        explanation: 'Metinde bilginin çok ve hızlı ulaşılabilir olduğu, ancak bu durumun bilginin sindirilmesini ve tefekkür (derin düşünme) yeteneğini yok ettiği vurgulanmıştır.'
      },
      {
        id: 'q-pa-z-9',
        difficulty: 'hard',
        questionText: 'Paragraf oluşturma sorusu: \nI. Bu yüzden de uzay çöplerinin temizlenmesi günümüzün en önemli uzay misyonlarından biri haline gelmiştir. \nII. Çünkü bu çöpler, yörüngedeki aktif uydulara ve Uluslararası Uzay İstasyonu\'na çarparak felaketlere yol açma riski taşımaktadır. \nIII. Uzay araştırmaları başladığından beri, Dünya\'nın yörüngesinde binlerce işlevini yitirmiş uydu ve roket parçası birikmiştir. \nIV. "Uzay çöpü" olarak adlandırılan bu enkaz yığını, saatte binlerce kilometre hızla Dünya\'nın etrafında dönmektedir.\n\nYukarıdaki numaralanmış cümlelerle anlamlı bir paragraf oluşturulmak istendiğinde doğru sıralama nasıl olmalıdır?',
        options: [
          { id: 'A', text: 'III - IV - II - I' },
          { id: 'B', text: 'IV - III - I - II' },
          { id: 'C', text: 'III - I - II - IV' },
          { id: 'D', text: 'I - II - III - IV' },
          { id: 'E', text: 'III - II - IV - I' }
        ],
        correctOptionId: 'A',
        explanation: 'Giriş cümlesi konuyu başlatan III\'tür. Sonra bu parçaların ne adlandırıldığı ve ne yaptığı IV\'te açıklanır. Sonra bunun tehlikesi II (Çünkü... çarparak) açıklanır. Sonuç olarak I (Bu yüzden... temizlenmesi) gelir. Doğru sıralama: III, IV, II, I.'
      },
      {
        id: 'q-pa-z-10',
        difficulty: 'hard',
        questionText: '"Tiyatro, insana insanı insanla ve insanca anlatan bir sanattır. Bu söz, Shakespeare\'den Muhsin Ertuğrul\'a kadar pek çok ustanın dilinden düşmemiştir. Ancak günümüzde sinema ve dijital platformların gölgesinde kalan tiyatro, salonlarının boşalması tehlikesiyle karşı karşıyadır. (....) Oysa tiyatronun o nefes nefese, canlı ve anlık atmosferi hiçbir ekrana sığdırılamaz."\n\nBu parçada boş bırakılan yere düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?',
        options: [
          { id: 'A', text: 'Tiyatro oyuncuları bu yüzden dizilerde oynamayı tercih ediyor.' },
          { id: 'B', text: 'Çünkü seyirciler evlerinin konforunda, istedikleri an filmi durdurup izlemeyi tiyatroya gitmeye tercih ediyorlar.' },
          { id: 'C', text: 'Devletin tiyatroya ayırdığı ödenekler her geçen yıl artırılmalıdır.' },
          { id: 'D', text: 'Bunun nedeni tiyatro biletlerinin sinema biletlerinden daha ucuz olmasıdır.' },
          { id: 'E', text: 'Klasik eserlerin sahnelenmesi gençlerin ilgisini çekmemektedir.' }
        ],
        correctOptionId: 'B',
        explanation: 'Boşluktan önce tiyatro salonlarının dijital platformlar nedeniyle boşaldığı tehlikesi söyleniyor. Boşluktan sonra "Oysa (buna rağmen) canlı atmosfer ekrana sığmaz" diyerek bir zıtlık kuruluyor. Demek ki boşlukta dijital platformların neden tercih edildiğine dair bir neden (B seçeneği: ev konforu, durdurup izleme kolaylığı) bulunmalıdır.'
      }
    ]
  }
]
