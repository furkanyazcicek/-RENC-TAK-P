/**
 * TYT BİYOLOJİ · EKOSİSTEM EKOLOJİSİ
 * Kavram listesini enerji akışı, madde döngüsü ve popülasyon dengesiyle tek sisteme bağlar.
 */

export default {
  slug: 'ekosistem-ekolojisi-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Ekosistem Ekolojisi',
  },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Ekosistem Ekolojisi: Ayrıntılı Temel Not',
  subtitle:
    'Ekolojik organizasyon ve canlı etkileşimlerinden enerji akışı, madde döngüleri, popülasyon dinamikleri ve sürdürülebilirliğe kadar ekosistemin bütün çalışma düzenini öğren.',

  document: {
    version: 1,
    estimated_minutes: 145,
    prerequisites: [
      {
        topic: 'Canlıların Ortak Özellikleri',
        why: 'Beslenme, solunum, homeostazi ve adaptasyonun bireyden ekosisteme yansımasını kullanacağız.',
      },
      {
        topic: 'Canlıların Sınıflandırılması',
        why: 'Tür ve akrabalık kavramlarını popülasyon ile komüniteyi birbirinden ayırırken kullanacağız.',
      },
      {
        topic: 'Fotosentez ve Hücresel Solunum',
        why: 'Enerjinin üreticide kimyasal bağlara aktarılması ve her trofik düzeyde ısıya dönüşmesi bu iki mekanizmaya dayanır.',
      },
    ],
    outcomes: [
      'Organizma, popülasyon, komünite, ekosistem ve biyosfer basamaklarını örnek üzerinde ayırabileceksin.',
      'Biyotik–abiyotik faktörleri, habitatı ve ekolojik nişi birbirine karıştırmayacaksın.',
      'Tür içi ve türler arası etkileşimleri tarafların yarar–zarar durumuna göre sınıflandırıp popülasyon sonuçlarını yorumlayabileceksin.',
      'Besin zinciri oklarının yönünü doğru kurup üretici, tüketici ve ayrıştırıcıların görevini açıklayabileceksin.',
      'Enerji piramidinde üst basamaklara çıkıldıkça enerji ve biyokütlenin neden azaldığını yorumlayabileceksin.',
      'Su, karbon ve azot döngülerindeki temel geçişleri neden–sonuç ilişkisiyle kurabileceksin.',
      'Popülasyon büyüklüğünü değiştiren olayları, taşıma kapasitesini ve sınırlayıcı faktörleri analiz edebileceksin.',
      'Birincil ve ikincil süksesyonu toprağın varlığı üzerinden ayırabileceksin.',
      'Ekolojik sürdürülebilirliği sınırlayan etkenleri ve ekolojik ayak izini küçülten uygulamaları neden–sonuç ilişkisiyle değerlendirebileceksin.',
    ],

    sections: [
      {
        id: 'eko-giris',
        kind: 'opening',
        title: 'Doğa bir canlı listesi değil, çalışan bir ağdır',
        lead: 'Bir ormanı anlamak için oradaki türleri saymak yetmez; aralarındaki enerji, madde ve sınır ilişkisini görmelisin.',
        blocks: [
          {
            id: 'eko-giris-prose',
            type: 'prose',
            body: `Bir göle baktığında balık, sazlık, kurbağa ve kuş görürsün. Ekolog ise bunların yanında ışığı, su sıcaklığını, çözünmüş oksijeni, toprağın mineralini ve bütün bu parçalar arasındaki aktarımı görür. **Ekoloji**, canlıların birbirleriyle ve cansız çevreleriyle ilişkilerini inceleyen bilimdir.

Bu konunun sınavdaki omurgası üç sorudur:

1. **Kim kiminle ve hangi çevrede yaşıyor?** Bu soru ekolojik organizasyonu ve etkileşimleri kurar.
2. **Enerji nereden girip nereye gidiyor?** Güneşten üreticiye, oradan tüketicilere ve sonunda ısıya giden tek yönlü akışı kurar.
3. **Madde nasıl yeniden kullanılıyor?** Su, karbon, azot ve minerallerin canlılarla cansız çevre arasındaki döngüsünü kurar.

Soruda bir tür azalınca diğerinin ne olacağını soruyorsa önce besin ağını; atmosferdeki bir gazın değişimini soruyorsa ilgili madde döngüsünü; birey sayısındaki değişimi soruyorsa doğum, ölüm ve göçleri düşün. ==Sorunun hangi ağı anlattığını bulmadan ezber oran kullanma.==`,
          },
          {
            id: 'eko-giris-why',
            type: 'why',
            question: 'Ekosistem neden yalnız canlılardan oluşamaz?',
            body: `Çünkü canlıların bütün yaşamsal faaliyetleri cansız çevreden gelen kaynaklara bağlıdır. Bitki ışık, su, CO₂ ve mineral olmadan organik madde üretemez; balık sudaki çözünmüş oksijen düştüğünde yaşayamaz; toprak pH’sı değiştiğinde kökün mineral alımı ve mikroorganizma etkinliği değişir.

Komünite yalnız canlı popülasyonlarını kapsar. Bu komüniteyi ışık, su, sıcaklık, hava ve toprakla birlikte değerlendirdiğinde **ekosistem** oluşur. Cansız çevre dekor değil, sistemin çalışan parçasıdır.`,
          },
          {
            id: 'eko-giris-trap',
            type: 'trap',
            title: '“Doğal olan her şey ekosistemdir” demek',
            wrong: 'Bir kaya parçasını veya yalnızca aynı türden oluşan bir sürüyü tek başına ekosistem saymak.',
            right: 'Ekosistem için belirli bir alanda **canlı topluluğu ile cansız çevrenin etkileşimi** gerekir. Yalnız aynı tür bireyler popülasyon, farklı türlerin bütünü komünitedir.',
            body: 'Bir akvaryum da yeterli canlı ve cansız bileşenleriyle insan yapımı bir ekosistem olabilir. “Ekosistem” sözcüğü doğal olmayı değil, sistem ilişkisini anlatır.',
          },
          {
            id: 'eko-giris-audio',
            type: 'audio_script',
            body: `Ekolojide hız kazanmak istiyorsan her soruda üç kalem kullanıyormuş gibi düşün.

Birinci kalem canlıları ve aralarındaki ilişkiyi çizer. İkinci kalem enerjiyi, üçüncü kalem maddeyi izler.

Enerji oku güneşten girer ve ısı olarak çıkar; geri dönmez. Madde oku ise toprağa, havaya ya da suya döner ve yeniden kullanılabilir.

Bu iki oku karıştırmadığında ekosistem sorularının yarısı daha şimdiden çözülmüş olur.`,
          },
        ],
      },

      {
        id: 'eko-yapi',
        kind: 'build',
        title: 'Önce ölçeği kur: bireyden biyosfere',
        lead: 'Aynı ormana farklı büyüklükte çerçeveler koyuyoruz; her çerçeve yeni bir ekolojik düzey açıyor.',
        blocks: [
          {
            id: 'eko-yapi-figure',
            type: 'figure',
            kind: 'ekosistem-anatomisi',
            width: 'full',
            title: 'Ekosistemin anatomisi',
            purpose: 'Ekolojik organizasyon basamaklarını, cansız çevrenin sınırlarını ve habitat–niş ayrımını tek ilişki ağı içinde kurmak.',
            complexity: 'high',
            caption: 'Bir maddeye dokunduğunda ana levha ilgili alanı odaklar; ardından kavramın biyolojik bağlamını gösteren ayrı sahne açılır.',
            focus: [
              {
                title: 'Organizma → popülasyon → komünite',
                body: 'Tek tavşan organizmadır. Aynı alanda ve zamanda yaşayan tavşanlar bir **popülasyon**dur. Tavşan, tilki, ot, mantar ve diğer türlerin popülasyonları birlikte **komüniteyi** oluşturur. Popülasyon tanımında “aynı tür” koşulu vazgeçilmezdir.',
              },
              {
                title: 'Abiyotik faktörler ve tolerans',
                body: 'Işık, sıcaklık, su, pH, tuzluluk, oksijen ve mineraller cansız çevrenin faktörleridir. Bir tür bu değişkenlerin yalnız belirli aralığında yaşayabilir; en yüksek başarı **optimumda**, sınırların dışında ise yaşam mümkün değildir.',
              },
              {
                title: 'Habitat adres, niş görevdir',
                body: 'Habitat canlının yaşadığı fiziksel yerdir. Ekolojik niş; besini, etkinlik zamanı, kaynak kullanımı, rakipleri ve sistemdeki işlevinin tümüdür. “Nerede?” habitatı, “nasıl yaşar ve ne yapar?” nişi buldurur.',
              },
              {
                title: 'Ekosistemden biyosfere',
                body: 'Komüniteye cansız çevre eklendiğinde ekosistem oluşur. Benzer iklim ve baskın bitki örtüsüne sahip büyük ekosistem birlikleri biyomu; Dünya’daki bütün ekosistemlerin toplamı **biyosferi** oluşturur.',
              },
            ],
            audio_script: `Levhanın ilk bölümünde tek bireyden aynı türün popülasyonuna geçiyoruz. İkinci çerçevede farklı türler ekleniyor ve komünite oluşuyor.

Sonra kritik sıçrama geliyor: ışık, su, toprak ve sıcaklık devreye girdiğinde artık ekosistemden söz ediyoruz.

En büyük çerçeve biyosfer. Ama sınavda asıl karıştırılan habitat ve niş. Habitat adres, niş meslektir. Baykuşun ormanı habitatı; gece avlanması ve kemirgenleri tüketmesi nişinin parçasıdır.`,
          },
          {
            id: 'eko-yapi-table',
            type: 'table',
            title: 'Ekolojik düzeyler — küçükten büyüğe',
            columns: ['Düzey', 'Ayırt edici ölçüt', 'Örnek'],
            rows: [
              ['Organizma', 'Tek canlı birey', 'Bir sazan'],
              ['Popülasyon', 'Aynı tür + aynı yer + aynı zaman', 'Bir göldeki sazanlar'],
              ['Komünite', 'Farklı türlerin popülasyonları', 'Göldeki bütün canlılar'],
              ['Ekosistem', 'Komünite + cansız çevre', 'Göl canlıları, su, ışık, sıcaklık ve mineraller'],
              ['Biyom', 'Benzer iklim ve baskın yaşam biçimi', 'Tundra, çöl, tropikal yağmur ormanı'],
              ['Biyosfer', 'Dünya’daki bütün ekosistemler', 'Canlılığın yeryüzündeki bütünü'],
            ],
            caption: 'Sıralama büyüdükçe önce birey sayısı, sonra tür çeşitliliği, ardından cansız çevre ve coğrafi kapsam eklenir.',
          },
          {
            id: 'eko-yapi-check',
            type: 'checkpoint',
            question: 'Bir göldeki bütün kurbağalar, bütün canlılar ve göl suyuyla birlikte bütün canlılar sırasıyla hangi düzeylerdir?',
            hint: '“Aynı tür”, “farklı türler” ve “cansız çevre eklendi” ifadelerini sırayla eşleştir.',
            answer: 'Bütün kurbağalar **popülasyon**, göldeki bütün canlılar **komünite**, canlılarla göl suyu ve diğer cansız bileşenlerin bütünü **ekosistem**dir.',
          },
        ],
      },

      {
        id: 'eko-etkilesimler',
        kind: 'deepen',
        title: 'Canlılar arasındaki etkileşimler: yarar, zarar ve kaynak paylaşımı',
        lead: 'Bir ilişkinin adını ezberlemek yerine her türün büyüme, yaşama veya üreme başarısının nasıl değiştiğini belirle.',
        blocks: [
          {
            id: 'eko-etkilesim-prose',
            type: 'prose',
            body: `Ekolojik ilişkiler **tür içi** veya **türler arası** olabilir. Aynı tür bireyleri eş, besin, alan, ışık ve yuva için rekabet edebilir; sürü oluşturma, iş bölümü, yavru bakımı ve ortak savunma ile iş birliği de yapabilir. Tür içi rekabet genellikle güçlüdür; çünkü bireylerin ekolojik gereksinimleri büyük ölçüde aynıdır.

**Rekabet (−/−)**, sınırlı bir kaynağı kullanan iki tarafın da kaynağa erişim maliyeti yaşamasıdır. Tür içi veya türler arası olabilir. Bitkiler ışık ve mineral, hayvanlar besin, su, alan veya eş için rekabet edebilir. Rekabet mutlaka doğrudan kavga değildir; bir bireyin kaynağı tüketmesi diğerine daha az kaynak bırakır. Aynı nişi bütünüyle kullanan iki tür uzun süre kararlı biçimde birlikte kalamayabilir; rekabet baskısı niş ayrışmasına, göçe veya türlerden birinin yerel olarak elenmesine yol açabilir.

**Av–avcı ilişkisi (+/−)** avcıya besin sağlarken avın yaşam başarısını azaltır. Avcılar av popülasyonunu, av miktarı da avcı sayısını sınırlayabilir; iki popülasyon gecikmeli dalgalanabilir. Avcılık yalnız olumsuz bir “yok etme” olayı değildir: aşırı çoğalan avı sınırlayabilir, hasta bireyleri daha kolay yakalayabilir ve komünite yapısını etkileyebilir. **Otçulluk** bitki dokusunun tüketilmesidir; tüketici yarar görür, bitki zarar görür fakat bitkinin bütünü ölmek zorunda değildir.

**Parazitlik (+/−)** ilişkisinde parazit konaktan besin veya yaşam ortamı sağlar; konağın başarısı azalır. Parazit çoğunlukla konağından küçüktür ve uzun süre onunla yaşar. Tenya gibi iç parazitler vücut içinde, bit gibi dış parazitler yüzeyde yaşar. Parazit konağı hızla öldürürse kendi yaşam ortamını da kaybedebileceğinden avcı–av ilişkisine göre daha uzun süreli bir birliktelik görülebilir. Hastalık yapan her mikroorganizma parazitlik bağlamında değerlendirilebilir fakat bütün mikroorganizmalar zararlı değildir.

**Mutualizm (+/+)**, iki türün de yarar gördüğü ilişkidir. Tozlaştırıcı böcek besin alırken bitkinin polenleri taşınabilir; mikoriza mantarı bitkinin su–mineral alımını artırırken organik besin alır. İlişki zorunluysa taraflar tek başına yaşamını sürdüremeyebilir; gevşek mutualizmde ayrı yaşam mümkündür. **Kommensalizm (+/0)** ilişkisinde bir taraf yarar görür, diğer taraf belirgin biçimde etkilenmez. Köpek balığına tutunan remoranın taşınma ve besin artığı elde etmesi örnektir.

**Amensalizm (−/0)** ilişkisinde bir tür zarar görürken diğeri belirgin biçimde etkilenmez. Bir canlının salgıladığı kimyasalın başka türün gelişimini baskılaması örnek olabilir. **Nötralizm (0/0)** aynı ortamı paylaşan iki tür arasında ölçülebilir doğrudan etkinin bulunmaması olarak kuramsal biçimde tanımlanır; gerçek besin ağlarında dolaylı bağlantılar nedeniyle kesin nötral ilişki göstermek güçtür.

“+”, “−” ve “0” işaretleri bireyin ahlaki durumunu değil, ilişkinin ilgili türün yaşama ve üreme başarısına net etkisini gösterir. İlişkinin sonucu çevre koşullarına göre değişebilir. Kaynak bolluğunda zayıf olan rekabet kuraklıkta şiddetlenebilir; mutualist ortaklardan biri başka kaynak bulduğunda birlikteliğin önemi azalabilir.`,
          },
          {
            id: 'eko-etkilesim-map',
            type: 'concept_map',
            title: 'Canlı etkileşimlerini işaretlerle sınıflandır',
            intro: 'Her tarafın yaşama ve üreme başarısındaki değişimi ayrı değerlendir.',
            nodes: [
              { id: 'sinirli', label: 'Sınırlı kaynak', detail: 'Besin, alan, ışık, su veya eş' },
              { id: 'rekabet', label: 'Rekabet −/−', detail: 'İki tarafın da maliyeti artar' },
              { id: 'tuketim', label: 'Tüketim +/−', detail: 'Avcılık, otçulluk, parazitlik' },
              { id: 'birlik', label: 'Birlikte yaşam', detail: 'Yakın türler arası ilişki' },
              { id: 'mutual', label: 'Mutualizm +/+', detail: 'İki taraf da yararlanır' },
              { id: 'kommensal', label: 'Kommensalizm +/0', detail: 'Bir taraf yarar, diğeri belirgin etkisiz' },
            ],
            links: [
              { from: 'sinirli', to: 'rekabet', label: 'oluşturur' },
              { from: 'sinirli', to: 'tuketim', label: 'besin ilişkisine girer' },
              { from: 'birlik', to: 'mutual', label: 'iki taraf yararlıysa' },
              { from: 'birlik', to: 'kommensal', label: 'tek taraf yararlıysa' },
              { from: 'tuketim', to: 'birlik', label: 'parazitlikte yakın olabilir' },
            ],
            caption: 'İlişkiyi adlandırmanın en güvenli yolu her tür için etki işaretini belirlemektir.',
          },
          {
            id: 'eko-etkilesim-table',
            type: 'table',
            title: 'Türler arası ilişkilerin karşılığı',
            columns: ['İlişki', 'Tür 1', 'Tür 2', 'Temel ölçüt'],
            rows: [
              ['Rekabet', '−', '−', 'Aynı sınırlı kaynağın kullanımı'],
              ['Avcılık / otçulluk / parazitlik', '+', '−', 'Bir taraf besin veya kaynak sağlar'],
              ['Mutualizm', '+', '+', 'İki tarafın başarısı artar'],
              ['Kommensalizm', '+', '0', 'Bir taraf yarar, diğerinde belirgin etki yok'],
              ['Amensalizm', '−', '0', 'Bir taraf zarar, diğerinde belirgin etki yok'],
            ],
            caption: 'İşaretler popülasyon başarısındaki net etkiyi gösterir; ilişkinin günlük dilde iyi veya kötü oluşunu değil.',
          },
          {
            id: 'eko-etkilesim-check',
            type: 'checkpoint',
            question: 'Bir mantar bitki kökünün mineral alımını artırırken bitkiden organik besin alıyorsa ilişki nedir?',
            hint: 'Her iki tarafın kazancını ayrı yaz.',
            answer: 'Bitki daha fazla su/mineral, mantar organik besin aldığı için iki taraf da yarar görür; ilişki mutualizm (+/+)dir.',
          },
          {
            id: 'eko-etkilesim-trap',
            type: 'trap',
            title: 'Kommensalizmde ikinci türün zarar gördüğünü sanmak',
            wrong: '“Bir tür yararlanıyorsa diğer tür mutlaka kaynak kaybettiği için zarar görür.”',
            right: 'Kommensalizmde ikinci tür üzerinde ölçülebilir belirgin etki yoktur (+/0). Zarar varsa ilişki +/− biçiminde yeniden sınıflandırılır.',
            body: 'İlişki adını örnek canlıdan değil, verilen etkiden çıkar.',
          },
        ],
      },

      {
        id: 'eko-enerji',
        kind: 'deepen',
        title: 'Enerji akışı: ok neden hep ileri gider?',
        lead: 'Güneşten gelen enerji ekosisteme girer, canlılar arasında aktarılır ve her basamakta bir bölümü ısıya dönüşür.',
        blocks: [
          {
            id: 'eko-enerji-prose',
            type: 'prose',
            body: `**Üreticiler** ışık veya kimyasal enerjiyi kullanarak inorganik maddelerden organik madde sentezler. Karasal ve sucul ekosistemlerin çoğunda başlangıç enerjisi Güneş’tir. Bitki ışık enerjisini fotosentezle organik maddenin kimyasal bağlarına aktarır; otçul bu maddeyi yer, etçil otçulu tüketir.

Bu aktarım bir **besin zinciri** oluşturur. Doğada bir canlı genellikle tek besinle yetinmediği ve birden çok avcıya sahip olduğu için zincirler birleşerek **besin ağına** dönüşür. Ok her zaman ==besin ve enerjinin gittiği yöne, yani yenenden yiyene== çizilir.

Bir trofik düzeydeki enerji tamamen üst düzeye geçmez. Canlı enerjinin çoğunu solunum, hareket, vücut sıcaklığını koruma ve diğer yaşamsal faaliyetlerde kullanır; enerji çevreye ısı olarak yayılır. Yaklaşık **%10’luk aktarım kuralı** bir modeldir, her ekosistemde kesin oran değildir. Değişmeyen fikir şudur: üst basamağa kullanılabilir enerjinin yalnız bir bölümü ulaşır.`,
          },
          {
            id: 'eko-enerji-figure',
            type: 'figure',
            kind: 'ekosistem-enerji-akisi',
            width: 'full',
            title: 'Besin ağından enerji piramidine',
            purpose: 'Üreticinin enerji dönüşümünü, besin okunun yönünü, trofik kaybı ve ayrıştırıcının gerçek görevini aynı levhada göstermek.',
            complexity: 'high',
            caption: 'Yakınlaştırmanın ardından açılan her yeni sahne, seçtiğin basamağın mekanizmasını gösterir.',
            focus: [
              {
                title: 'Üretici enerjiyi dönüştürür',
                body: 'Bitki güneş enerjisini yaratmaz; fotosentezle organik maddenin bağlarında kimyasal enerjiye dönüştürür. Bu nedenle üretici birinci trofik düzeydedir ve tüketicilere ulaşan enerjinin giriş kapısıdır.',
              },
              {
                title: 'Ok yenenden yiyene gider',
                body: 'Ot → çekirge → kurbağa zincirinde ok, aktarılan organik madde ve enerjinin yönünü gösterir. Okun ucu kurbağaya bakıyorsa kurbağa çekirgeyi tüketir; “kim kimi yer?” sorusunu okun ucundan değil başlangıcından okuyarak çöz.',
              },
              {
                title: 'Üst basamakta enerji azalır',
                body: 'Her düzey kendi yaşamsal faaliyetlerinde enerji kullanır ve ısı verir. Yalnız biyokütlede depolanan bölüm üst düzeye aktarılabilir. Bu yüzden **enerji piramidi her zaman düzgündür** ve zincirler genellikle fazla uzamaz.',
              },
              {
                title: 'Ayrıştırıcı bütün düzeylere bağlıdır',
                body: 'Bakteri ve mantarlar yalnız en üst tüketiciyi değil, her trofik düzeyin atık ve kalıntılarını parçalar. İnorganik maddeleri çevreye kazandırır; enerjiyi döngüye sokmaz.',
              },
            ],
          },
          {
            id: 'eko-piramit-compare',
            type: 'compare',
            title: 'Üç piramidi aynı sanma',
            columns: ['Enerji piramidi', 'Biyokütle piramidi', 'Birey sayısı piramidi'],
            rows: [
              {
                label: 'Neyi gösterir?',
                values: ['Birim zamanda aktarılan kullanılabilir enerji', 'Belirli anda canlı organik madde kütlesi', 'Her düzeydeki birey sayısı'],
              },
              {
                label: 'Genel biçim',
                values: ['Daima üreticiden yukarı daralır', 'Çoğu karasal sistemde daralır; bazı sucul sistemlerde anlık ters olabilir', 'Tek ağaçta çok böcek örneğinde ters olabilir'],
              },
              {
                label: 'Sınav anahtarı',
                values: ['Ters dönmez', 'Stok miktarıdır', 'Canlı büyüklüğünden etkilenir'],
              },
            ],
          },
          {
            id: 'eko-enerji-trap',
            type: 'trap',
            title: 'Üst tüketicide enerji artıyor sanmak',
            wrong: 'Besin zincirinin tepesindeki canlı daha güçlü olduğu için daha fazla enerjiye sahip olduğunu düşünmek.',
            right: 'Trofik düzey yükseldikçe toplam kullanılabilir enerji azalır. Üst tüketicide artabilen şey, parçalanmayan bazı toksinlerin **derişimidir**; buna biyolojik birikim/büyütme denir.',
            body: 'Enerji ile toksin aynı davranmaz. Enerji aktarılırken büyük bölümü ısıya dönüşür; kalıcı toksin ise atılamayıp dokuda birikebilir ve besin zincirinde yukarı doğru yoğunlaşabilir.',
          },
        ],
      },

      {
        id: 'eko-madde',
        kind: 'deepen',
        title: 'Madde döner, enerji dönmez',
        lead: 'Ekosistem enerjiyi sürekli dışarıdan almak zorundadır; fakat atomları tekrar tekrar kullanabilir.',
        blocks: [
          {
            id: 'eko-madde-figure',
            type: 'figure',
            kind: 'ekosistem-madde-donguleri',
            width: 'full',
            title: 'Atmosfer, canlı ve toprak arasında madde',
            purpose: 'Su, karbon ve azot döngülerini ayrı ezberler yerine ortak depo–geçiş mantığıyla kurmak.',
            complexity: 'high',
            caption: 'Her odak, seçilen döngüde maddenin hangi süreçle depo değiştirdiğini ayrı bir mekanizma sahnesinde gösterir.',
            focus: [
              {
                title: 'Su döngüsü: hâl ve depo değişimi',
                body: 'Buharlaşma ve terleme suyu atmosfere taşır; yoğunlaşma bulutu, yağış yüzey suyunu oluşturur. Yüzey akışı ve sızma suyu göl, deniz, toprak ve yer altı depoları arasında taşır.',
              },
              {
                title: 'Karbon döngüsü: fotosentez kapısı',
                body: 'Atmosferdeki CO₂ karbonu fotosentezle organik maddeye girer. Beslenme karbonu tüketicilere taşır; solunum, ayrışma ve yanma yeniden CO₂ oluşturabilir. **Bitki karbonu topraktan almaz.**',
              },
              {
                title: 'Azot döngüsü: bakterisiz olmaz',
                body: 'Bitki atmosferdeki N₂’yi doğrudan kullanamaz. Azot bağlayan ve nitrifikasyon yapan bakteriler kullanılabilir bileşikler oluşturur; ayrıştırıcılar organik azotu toprağa, denitrifikasyon bakterileri atmosfere taşır.',
              },
              {
                title: 'Aynı atom yeniden kullanılabilir',
                body: 'Bir mineral atomu topraktan bitkiye, beslenmeyle hayvana, ölüm ve ayrışmayla yeniden toprağa geçebilir. Madde döngüseldir; enerji ise her aktarımda ısıya dönüştüğü için tek yönlü akar.',
              },
            ],
          },
          {
            id: 'eko-madde-process',
            type: 'process',
            title: 'Bir döngü sorusunu dört adımda çöz',
            intro: 'Okları ezberlemek yerine her olayda maddenin hangi depodan hangi depoya geçtiğini yaz.',
            steps: [
              { title: 'Maddeyi belirle', body: 'Soru suyu mu, karbonu mu, azotu mu izletiyor?' },
              { title: 'Başlangıç deposunu bul', body: 'Atmosfer, toprak, su veya canlı dokudan hangisinde başlıyor?' },
              { title: 'Süreci adlandır', body: 'Fotosentez, solunum, beslenme, ayrışma, buharlaşma veya bakteriyel dönüşüm mü?' },
              { title: 'Yeni depoyu yaz', body: 'Madde işlem sonunda nereye geçti? Aynı atom kaybolmaz, yalnız biçim ve yer değiştirir.' },
            ],
          },
          {
            id: 'eko-madde-example',
            type: 'worked_example',
            title: 'İşaretli karbonu takip et',
            question: 'Atmosferdeki CO₂’nin karbonu radyoaktif işaretleniyor. Bu karbonun bir otçulun dokusunda görülmesi için hangi iki temel olay gerçekleşmelidir?',
            steps: [
              { title: 'Atmosferden üreticiye', body: 'Bitki işaretli CO₂’yi **fotosentezde** kullanır ve karbonu organik molekülüne bağlar.' },
              { title: 'Üreticiden tüketiciye', body: 'Otçul bitkiyi **beslenmeyle** tüketir; sindirim ve özümleme sonrası işaretli karbon dokusuna katılabilir.' },
              { title: 'Sonuç', body: 'Gerekli temel sıra **fotosentez → beslenme**dir. Solunum karbonu canlıya kazandırmaz; organik karbonu CO₂’ye çevirerek ortamına geri verebilir.' },
            ],
            answer: 'Fotosentez ve ardından beslenme.',
          },
          {
            id: 'eko-madde-note',
            type: 'teacher_note',
            tone: 'exam',
            body: '“Ayrıştırıcılar olmasaydı ne olurdu?” sorusunda iki sonucu birlikte düşün: organik atık ve kalıntılar birikir; inorganik maddelerin üreticiye dönüşü yavaşladığı için madde döngüleri aksar. Güneş enerjisinin gelişi ise doğrudan durmaz.',
          },
        ],
      },

      {
        id: 'eko-populasyon',
        kind: 'deepen',
        title: 'Popülasyon neden sonsuza kadar büyümez?',
        lead: 'Birey sayısını artıran ve azaltan dört kapı vardır; çevre bu kapıların hızını sınırlar.',
        blocks: [
          {
            id: 'eko-pop-prose',
            type: 'prose',
            body: `Bir popülasyonun büyüklüğü **doğum ve içe göçle artar; ölüm ve dışa göçle azalır**. Net değişim şu mantıkla bulunur:

**Değişim = (doğum + içe göç) − (ölüm + dışa göç)**

Kaynakların sınırsız olduğu varsayımsal koşulda birey sayısı giderek hızlanarak artar ve J biçimli üstel büyüme görülür. Gerçek ortamda ise besin, su, barınak ve alan sınırlanır; rekabet, hastalık ve avcılık etkisi güçlenir. Bu toplam etkiye **çevre direnci** denir.

Ortamın uzun süre destekleyebileceği yaklaşık en yüksek birey sayısı **taşıma kapasitesi**dir. Bu bir beton tavan değildir. Yağış artarsa kaynak miktarı ve kapasite yükselebilir; kuraklık veya habitat kaybı kapasiteyi düşürebilir. Popülasyon bu değerin çevresinde dalgalanabilir.

Ekosistem yalnız birey sayısında değil, tür bileşiminde de zamanla değişebilir. Bir alanın türlerce sırayla kolonileştirilip topluluğun değişmesine **süksesyon** denir.`,
          },
          {
            id: 'eko-pop-figure',
            type: 'figure',
            kind: 'ekosistem-populasyon-dengesi',
            width: 'full',
            title: 'Büyüme, sınır ve ekolojik değişim',
            purpose: 'Popülasyon artışını yalnız grafik olarak değil, kaynaklar ve çevresel olaylarla birlikte açıklamak.',
            complexity: 'high',
            caption: 'Her odak grafik veya sırayı büyütmekle kalmaz; değişimin arkasındaki ekolojik nedeni ayrı sahnede açar.',
            focus: [
              {
                title: 'J büyüme ile S büyümeyi ayır',
                body: 'Sınırsız kaynak varsayımında üstel büyüme J biçimlidir. Çevre direnci arttığında büyüme yavaşlar ve taşıma kapasitesine yaklaşan S biçimli lojistik büyüme görülür.',
              },
              {
                title: 'Taşıma kapasitesi değişebilir',
                body: 'Kapasitenin üstüne çıkan popülasyonda kaynak yetersizliği ölüm ve dışa göçü artırabilir; sayı azalınca kaynaklar toparlanır. İklim ve habitat değiştiğinde kapasitenin kendisi de değişir.',
              },
              {
                title: 'Sınırlayıcı faktörün türünü bul',
                body: 'Rekabet, bulaşıcı hastalık ve avcılık çoğunlukla yoğunluğa bağlıdır. Sel, yangın ve aşırı sıcaklık gibi olaylar yoğunluktan bağımsız etkileyebilir.',
              },
              {
                title: 'Süksesyonda toprağı kontrol et',
                body: 'Topraksız çıplak yüzeyde başlayan birincil süksesyon yavaştır. Yangın veya tarla terkinden sonra toprak korunmuşsa ikincil süksesyon başlar ve toparlanma daha hızlıdır.',
              },
            ],
          },
          {
            id: 'eko-pop-table',
            type: 'table',
            title: 'Popülasyonu değiştiren olaylar',
            columns: ['Olay', 'Birey sayısına etkisi', 'Sınav yorumu'],
            rows: [
              ['Doğum', 'Artırır', 'Üreme başarısına bağlıdır'],
              ['İçe göç', 'Artırır', 'Başka popülasyondan birey gelir'],
              ['Ölüm', 'Azaltır', 'Hastalık, avcılık ve kaynak kıtlığı etkileyebilir'],
              ['Dışa göç', 'Azaltır', 'Birey başka alana gider'],
              ['Taşıma kapasitesi', 'Doğrudan olay değil, sınırdır', 'Kaynak ve çevre koşullarıyla değişebilir'],
            ],
            caption: 'Göç yalnız yer değişimidir; türün toplam birey sayısını değil, incelenen yerel popülasyonun büyüklüğünü değiştirir.',
          },
          {
            id: 'eko-pop-trap',
            type: 'trap',
            title: 'Her yangını “birincil süksesyon” sanmak',
            wrong: 'Bitki örtüsü yok olduysa süksesyonun her zaman sıfırdan ve topraksız başladığını düşünmek.',
            right: 'Yangın sonrası **toprak, mikroorganizmalar, kökler veya tohum bankası** korunmuşsa ikincil süksesyon görülür. Birincil süksesyonun ayırıcı özelliği başlangıçta toprağın bulunmamasıdır.',
            body: 'Yeni oluşmuş volkanik kaya, geri çekilen buzulun bıraktığı çıplak yüzey birincil; terk edilmiş tarla veya toprak korunmuş yangın alanı ikincil süksesyona örnektir.',
          },
        ],
      },

      {
        id: 'eko-yorum',
        kind: 'practice',
        title: 'Sınav sorusunu sistem üzerinden oku',
        lead: 'Bir değişken oynadığında tek canlıya değil, ağın devamındaki sonuçlara bak.',
        blocks: [
          {
            id: 'eko-yorum-example',
            type: 'worked_example',
            title: 'Besin ağında tilki azalırsa',
            question: 'Ot → tavşan → tilki zincirinde tilki sayısı uzun süre azalırsa ilk aşamada tavşan ve ot miktarı nasıl etkilenir?',
            steps: [
              { title: 'Doğrudan ilişkiyi bul', body: 'Tilki tavşanı tüketir. Avcı azalınca tavşan üzerindeki av baskısı düşer.' },
              { title: 'Bir sonraki oku izle', body: 'Tavşan sayısı ilk aşamada artabilir. Daha çok tavşan daha fazla ot tüketir.' },
              { title: 'Sonucu sınırla', body: 'İlk aşamada tavşan artışı, ot azalması beklenir. Uzun vadede besin kıtlığı tavşan artışını yeniden sınırlayabilir; ekosistem yanıtı tek adımlı değildir.' },
            ],
            answer: 'İlk aşamada tavşan artar, ot azalır; daha uzun sürede kaynak kıtlığı yeni bir denge oluşturabilir.',
          },
          {
            id: 'eko-yorum-exam',
            type: 'exam',
            title: 'Öncülleri şu sırayla ele',
            body: 'Önce tanımın sınırını, sonra okun yönünü, en son dolaylı sonucu kontrol et. Özellikle “kesinlikle”, “daima” ve “yalnız” kelimeleri ekolojide çoğu kez model koşulunu sorgulatır.',
            patterns: [
              'Aynı tür–farklı tür–cansız çevre ayrımı',
              'Besin ağında bir türün artış veya azalış sonucu',
              'Enerji, biyokütle ve toksin miktarının karşılaştırılması',
              'İşaretli karbon veya azotun izlediği yol',
              'Doğum–ölüm–göç verilerinden popülasyon değişimi',
              'Birincil–ikincil süksesyonda toprak ipucu',
            ],
          },
          {
            id: 'eko-yorum-check',
            type: 'checkpoint',
            question: 'Bir gölde üretici biyokütlesi azalırken üst tüketicide kalıcı bir tarım ilacının derişimi artabilir mi?',
            hint: 'Enerji/biyokütle ile parçalanmayan toksinin besin zincirindeki davranışını ayrı değerlendir.',
            answer: 'Evet. Üst trofik düzeylere çıkıldıkça kullanılabilir enerji ve çoğunlukla biyokütle azalır; fakat parçalanmayan ve atılamayan toksinler dokularda birikerek üst tüketicilerde daha yüksek derişime ulaşabilir.',
          },
          {
            id: 'eko-yorum-connection',
            type: 'connection',
            title: 'Ekosistem bilgisi çevre sorunlarına nasıl bağlanır?',
            body: 'Habitat kaybı taşıma kapasitesini düşürür; fosil yakıt kullanımı uzun süre depolanmış karbonu atmosfere taşır; aşırı gübre su sistemlerinde azot yükünü artırır; bir üst tüketicinin kaybı besin ağında trofik kaskat oluşturabilir. Çevre sorularında önce bozulan akışı veya döngüyü bul.',
            links: ['Güncel çevre sorunları', 'Biyoçeşitlilik', 'Karbon ayak izi', 'Sürdürülebilirlik'],
          },
        ],
      },

      {
        id: 'eko-surdurulebilirlik',
        kind: 'deepen',
        title: 'Ekolojik sürdürülebilirlik ve biyoçeşitliliği sınırlayan baskılar',
        lead: 'Sürdürülebilirlik, bugünün gereksinimlerini ekosistemin yenilenme kapasitesini ve gelecek kuşakların olanaklarını tüketmeden karşılamaktır.',
        blocks: [
          {
            id: 'eko-surdur-prose',
            type: 'prose',
            body: `**Ekolojik sürdürülebilirlik**, madde ve enerji kullanımının ekosistemlerin kendini yenileme, atıkları işleme ve canlı çeşitliliğini sürdürme kapasitesiyle uyumlu olmasıdır. Yalnız doğal alanları korumak değil; üretim, tüketim, tarım, enerji, ulaşım, su ve atık kararlarını ekolojik sınırlar içinde düzenlemektir.

**Biyoçeşitlilik** genetik çeşitlilik, tür çeşitliliği ve ekosistem çeşitliliğini kapsar. Genetik çeşitlilik popülasyonun değişen koşullara verebileceği tepkileri artırabilir; tür çeşitliliği besin ağı ve ekosistem işlevlerini; ekosistem çeşitliliği farklı habitat ve süreçleri korur. Belirli bir coğrafyada doğal olarak bulunan ve başka yerde yaşamayan tür **endemik**tir. Yayılışı dar endemik türler habitat kaybına karşı özellikle hassas olabilir.

**Habitat kaybı**, yaşam alanının yok edilmesi; **habitat parçalanması**, büyük ve bağlantılı alanın küçük, birbirinden kopuk parçalara ayrılmasıdır. Parçalanma toplam alan kaybına ek olarak kenar etkisini artırır, göç ve eş bulmayı zorlaştırır, küçük popülasyonlarda genetik çeşitliliği azaltabilir. Ekolojik koridorlar parçalar arasında hareketi ve gen akışını destekleyebilir.

**Kirlilik**, bir madde veya enerji biçiminin çevrede canlılara ve ekosistem işlevlerine zarar verecek düzeyde birikmesidir. Hava, su, toprak, ışık ve gürültü kirliliği farklı mekanizmalarla etkiler. Parçalanmayan yağda çözünen bazı maddeler organizmada **biyolojik birikim**, besin zincirinde üst basamaklara doğru artan derişim **biyolojik büyütme** oluşturabilir.

Azot ve fosfor bakımından zengin gübre veya atık suyun göl ve denize aşırı girişi **ötrofikasyon** oluşturabilir. Alg ve su bitkileri hızla çoğalır; ışık geçirgenliği azalır. Ölen biyokütlenin bakterilerce ayrıştırılması çözünmüş oksijeni tüketir; balık ölümleri ve tür bileşiminin değişmesi görülebilir. “Besin tuzu artışı canlılığı daima artırır” çıkarımı yanlıştır; sistemin oksijen dengesi bozulabilir.

**Erozyon**, toprağın su, rüzgâr ve insan etkisiyle taşınmasıdır. Bitki örtüsünün kaldırılması, yanlış tarım ve aşırı otlatma erozyonu hızlandırır. Verimli üst toprağın kaybı üretimi düşürür; taşınan toprak sucul ortamda bulanıklık ve çökelmeye yol açabilir. Erozyon toprağın taşınması, çölleşme ise kurak alanlarda arazi verimliliğinin uzun süreli azalmasıdır.

Fosil yakıt kullanımı, ormansızlaşma ve arazi değişimi atmosferdeki sera gazlarını artırarak iklim sistemini etkiler. İklim değişikliği sıcaklık ve yağış düzenlerini, yangın ve kuraklık riskini, türlerin dağılımını ve taşıma kapasitesini değiştirebilir. Ozon tabakasının incelmesiyle iklim değişikliği aynı olay değildir; nedenleri ve etkileri ayrı değerlendirilmelidir.

İstilacı yabancı tür, doğal yayılış alanı dışına taşınıp yeni ortamda hızla yayılarak yerli türler ve ekosistem işlevleri üzerinde baskı kurabilir. Doğal düşman eksikliği, yüksek üreme hızı veya kaynakları etkili kullanma yayılmayı kolaylaştırabilir. Her yabancı tür istilacı değildir; ekolojik ve ekonomik zarar oluşturma ölçütü gerekir.`,
          },
          {
            id: 'eko-surdur-map',
            type: 'concept_map',
            title: 'Ekolojik baskıdan sistem sonucuna',
            intro: 'Çevre sorununu adıyla değil, bozduğu süreç ve sonuçla bağla.',
            nodes: [
              { id: 'baski', label: 'İnsan kaynaklı baskı', detail: 'Arazi, enerji, kirlilik, aşırı kullanım' },
              { id: 'habitat', label: 'Habitat kaybı ve parçalanma', detail: 'Alan ve bağlantı azalır' },
              { id: 'dongu', label: 'Madde döngüsü bozulması', detail: 'Karbon, azot, su akışları değişir' },
              { id: 'pop', label: 'Popülasyon etkisi', detail: 'Taşıma kapasitesi ve gen akışı azalabilir' },
              { id: 'biyo', label: 'Biyoçeşitlilik kaybı', detail: 'Gen, tür ve ekosistem düzeyi' },
              { id: 'hizmet', label: 'Ekosistem hizmetlerinde azalma', detail: 'Su, toprak, tozlaşma, iklim düzenleme' },
            ],
            links: [
              { from: 'baski', to: 'habitat', label: 'oluşturabilir' },
              { from: 'baski', to: 'dongu', label: 'değiştirir' },
              { from: 'habitat', to: 'pop', label: 'sınırlar' },
              { from: 'dongu', to: 'pop', label: 'koşulları değiştirir' },
              { from: 'pop', to: 'biyo', label: 'yerel kayıplara dönüşür' },
              { from: 'biyo', to: 'hizmet', label: 'işlevi zayıflatır' },
            ],
            caption: 'Sürdürülebilirlik, baskının kaynağını azaltırken ekosistemin bağlantı ve yenilenme kapasitesini korur.',
          },
          {
            id: 'eko-surdur-compare',
            type: 'compare',
            title: 'Sık karıştırılan çevre süreçleri',
            columns: ['Birinci kavram', 'İkinci kavram'],
            rows: [
              { label: 'Habitat kaybı / parçalanma', values: ['Alan tamamen azalır veya dönüşür', 'Alan küçük ve kopuk parçalara bölünür'] },
              { label: 'Biyolojik birikim / büyütme', values: ['Tek organizmada zamanla artış', 'Besin zincirinde trofik düzeyle derişim artışı'] },
              { label: 'Erozyon / çölleşme', values: ['Toprağın taşınması', 'Arazi üretkenliğinin uzun süreli azalması'] },
              { label: 'İklim değişikliği / ozon incelmesi', values: ['Sera gazı–enerji dengesi', 'Stratosferik ozon kaybı–UV artışı'] },
            ],
            insight: 'İki olay birlikte görülebilir fakat mekanizmaları aynı değildir.',
          },
          {
            id: 'eko-surdur-check',
            type: 'checkpoint',
            question: 'Bir göle gübre kaynaklı azot ve fosfor girdisi arttıktan sonra balık ölümleri neden görülebilir?',
            hint: 'Alg artışından sonra ölü organik maddenin ayrıştırılmasını ve çözünmüş oksijeni izle.',
            answer: 'Besin tuzları alg çoğalmasını artırır. Oluşan büyük biyokütle öldüğünde ayrıştırıcıların solunumu çözünmüş oksijeni tüketir; oksijen yetersizliği balık ölümlerine yol açabilir. Bu süreç ötrofikasyondur.',
          },
        ],
      },

      {
        id: 'eko-ayakizi-atik',
        kind: 'deepen',
        title: 'Ekolojik ayak izi, doğal kaynaklar ve atık yönetimi',
        lead: 'Sürdürülebilir çözüm yalnız atığı toplamak değil, kaynak kullanımını kaynağında azaltıp döngüsel hâle getirmektir.',
        blocks: [
          {
            id: 'eko-ayakizi-prose',
            type: 'prose',
            body: `**Ekolojik ayak izi**, bir kişi, toplum veya faaliyetin tükettiği kaynakları üretmek ve oluşturduğu atıkları, özellikle karbon salımını, karşılamak için gereken biyolojik olarak üretken alan talebini ifade eden göstergedir. **Biyokapasite**, ekosistemlerin yenilenebilir kaynak üretme ve atıkları belirli sınırlar içinde soğurma kapasitesidir. Ekolojik ayak izi biyokapasiteyi uzun süre aşarsa ekolojik açık oluşur; stoklar azalır ve atıklar birikir.

Karbon ayak izi sera gazı salımlarını karbondioksit eşdeğeriyle, su ayak izi bir ürün veya yaşam biçiminin doğrudan ve dolaylı tatlı su kullanımını değerlendirmeye çalışır. Bu göstergeler aynı değildir; bir uygulama bir ayak izini azaltırken diğerini artırabilir. Karar verirken yaşam döngüsü boyunca ham madde çıkarma, üretim, taşıma, kullanım ve bertaraf basamakları değerlendirilmelidir.

Ayak izini küçültmek için enerji verimliliği, düşük karbonlu enerji, toplu taşıma ve aktif ulaşım, gereksiz tüketimin azaltılması, dayanıklı ve onarılabilir ürün seçimi, yerel koşula uygun beslenme, gıda israfının önlenmesi, su verimliliği ve habitatların korunması birlikte ele alınır. Tek bir sembolik davranış bütün etkiyi ortadan kaldırmaz; en büyük tüketim ve emisyon kaynaklarına öncelik verilmelidir.

**Doğal kaynaklar** yenilenebilir ve yenilenemez olarak sınıflandırılabilir. Güneş ve rüzgâr akış kaynaklarıdır; su, orman, balık popülasyonları ve verimli toprak yenilenebilir olsa da kullanım hızı yenilenme hızını aşarsa tükenebilir veya işlevini kaybedebilir. Fosil yakıt ve metal cevherleri insan zaman ölçeğinde sınırlıdır. “Yenilenebilir” sınırsız ve etkisiz demek değildir; enerji ve arazi projelerinin habitat, su ve malzeme etkileri bulunabilir.

Koruma yalnız türü kafes içinde çoğaltmak değildir. **Yerinde koruma** türü doğal habitatı ve etkileşimleriyle korur; millî parklar, tabiat koruma alanları ve ekolojik koridorlar bu yaklaşıma hizmet edebilir. **Alan dışı koruma** tohum/gen bankaları, botanik bahçeleri ve kontrollü üretim programlarını kapsayabilir. Öncelik habitatı ve ekosistem süreçlerini yerinde korumaktır; alan dışı yöntemler tamamlayıcıdır.

Atık yönetiminde öncelik sırası genel olarak **önleme/azaltma → yeniden kullanım → onarım → geri dönüşüm/geri kazanım → enerji geri kazanımı → güvenli bertaraf** biçimindedir. Geri dönüşüm önemlidir fakat gereksiz üretim ve tüketimi önlemekten sonra gelir. Atıkların kaynağında ayrı toplanması, organik atığın kompostlanması, tehlikeli ve elektronik atıkların ayrı işlenmesi, üretici sorumluluğu ve ürünlerin sökülebilir tasarımı döngüsel ekonomi yaklaşımını destekler.

Atık su arıtımı fiziksel ayırma, mikroorganizmalarla organik yükün azaltılması ve gerektiğinde azot–fosfor giderimi/dezenfeksiyon basamaklarını içerebilir. Arıtılmamış atık su oksijen tüketimini, patojen yükünü ve ötrofikasyonu artırabilir. Düzenli depolama alanı sızıntı suyu ve metanı yönetmeyi amaçlar; açıkta yakma toksik kirleticiler oluşturabilir.

Sürdürülebilirlik uygulamalarının etkisi veriyle izlenmelidir. Toplanan atık miktarı tek başına başarı ölçütü değildir; kişi başına oluşan atık, yeniden kullanım oranı, enerji ve su tüketimi, emisyon, habitat bağlantısı ve tür popülasyonlarının durumu birlikte değerlendirilir. Sorun–kaynak–ölçülebilir hedef–uygulama–izleme sırası bilimsel çözüm planının temelidir.`,
          },
          {
            id: 'eko-ayakizi-process',
            type: 'process',
            title: 'Bir sürdürülebilirlik problemini çözme sırası',
            intro: 'Genel slogan yerine ölçülebilir baskı ve sonuç kullan.',
            steps: [
              { title: 'Sistemi ve sınırı tanımla', body: 'Okul, havza, şehir veya ürün yaşam döngüsünden hangisi inceleniyor?' },
              { title: 'Baskı kaynağını ölç', body: 'Enerji, su, ham madde, arazi kullanımı, emisyon ve atık verisini belirle.' },
              { title: 'Önlem hiyerarşisini uygula', body: 'Önce gereksinimi azalt; sonra yeniden kullanım ve geri kazanımı planla.' },
              { title: 'Yan etkileri karşılaştır', body: 'Bir çevresel etki azalırken başka bir etkinin artıp artmadığını yaşam döngüsü boyunca kontrol et.' },
              { title: 'Sonucu izle ve düzelt', body: 'Kişi başına tüketim, emisyon, atık ve biyolojik göstergelerle uygulamayı değerlendir.' },
            ],
          },
          {
            id: 'eko-ayakizi-table',
            type: 'table',
            title: 'Atık hiyerarşisinin mantığı',
            columns: ['Basamak', 'Temel işlem', 'Neden önce/sonra?'],
            rows: [
              ['Önleme–azaltma', 'Atığı hiç oluşturmama', 'Ham madde ve enerji talebini baştan düşürür'],
              ['Yeniden kullanım–onarım', 'Ürünün ömrünü uzatma', 'Yeni ürün ihtiyacını geciktirir'],
              ['Geri dönüşüm', 'Malzemeyi yeni üretime döndürme', 'Toplama ve işlem enerjisi gerektirir'],
              ['Enerji geri kazanımı', 'Uygun atıktan enerji elde etme', 'Malzeme döngüsü korunmaz'],
              ['Bertaraf', 'Güvenli depolama', 'Son seçenektir; kaynak geri kazanılmaz'],
            ],
            caption: 'Geri dönüşüm, önleme ve yeniden kullanımın yerine geçen sınırsız çözüm değildir.',
          },
          {
            id: 'eko-ayakizi-trap',
            type: 'trap',
            title: 'Yenilenebilir kaynağı sınırsız sanmak',
            wrong: '“Su, toprak, orman ve balık yenilenebilir olduğundan tüketim hızı önemli değildir.”',
            right: 'Bir kaynağın yenilenebilirliği, kullanım hızının yenilenme hızını aşamayacağı anlamına gelir. Aşırı kullanım stok ve ekosistem işlevi kaybına yol açabilir.',
            body: 'Sürdürülebilir hasat, doğal yenilenme ve habitat kapasitesiyle sınırlıdır.',
          },
        ],
      },

      {
        id: 'eko-kapanis',
        kind: 'close',
        title: 'Dört cümleyle bütün ekosistemi toparla',
        lead: 'Sorunun ayrıntısı değişebilir; fakat sistemin çalışma ilkeleri değişmez.',
        blocks: [
          {
            id: 'eko-summary',
            type: 'summary',
            title: 'Bu dersten geriye kalması gerekenler',
            points: [
              'Aynı tür bireyler popülasyon, farklı türlerin popülasyonları komünite, komünite ile cansız çevre ekosistemdir.',
              'Habitat canlının yaşadığı yer; niş kaynakları kullanma biçimi ve ekosistemdeki işlevidir.',
              'Besin zinciri oku yenenden yiyene gider ve kimyasal enerji aktarımını gösterir.',
              'Enerji güneşten girer, trofik düzeylerde azalır ve ısı olarak çıkar; döngü yapmaz.',
              'Madde canlı ve cansız çevre arasında döner; ayrıştırıcılar inorganik maddelerin dönüşünü sağlar.',
              'Bitki karbonu CO₂’den alır; atmosferik N₂’nin kullanılabilir hâle gelmesinde bakteriler kritik rol oynar.',
              'Popülasyonu doğum ve içe göç artırır; ölüm ve dışa göç azaltır. Taşıma kapasitesi çevre koşullarıyla değişebilir.',
              'Birincil süksesyon topraksız, ikincil süksesyon toprağın korunduğu yüzeyde başlar.',
            ],
          },
          {
            id: 'eko-memory',
            type: 'memory',
            body: '**Adres–meslek, ok–ısı, döngü–sınır:** Habitat adres, niş meslek; besin oku yenenden yiyene ve enerji sonunda ısıya; madde döngü yapar; popülasyonu çevrenin sınırı durdurur.',
          },
          {
            id: 'eko-final-exam',
            type: 'exam',
            title: 'Son 20 saniyelik kontrol',
            body: `Cevabı işaretlemeden önce şu dört soruyu sor: İncelediğim grup aynı tür mü, farklı türler mi? Ok besinden tüketiciye mi gidiyor? Sorudaki büyüklük enerji mi, biyokütle mi, toksin derişimi mi? Popülasyon değişiminde doğum–ölüm kadar göçleri de hesaba kattım mı?

Madde döngüsünde bir okun adını unutsan bile depoları takip ederek doğru cevaba yaklaşabilirsin. Atmosferden bitkiye karbon geçiyorsa fotosentez; canlıdan atmosfere karbon dönüyorsa solunum veya ayrışma; topraksız yüzeyde topluluk kuruluyorsa birincil süksesyon düşün. Hız, bu neden–sonuç hattını otomatikleştirmekten gelir.`,
          },
          {
            id: 'eko-next',
            type: 'next_step',
            body: 'Bir sonraki aşamada **Sinir Sistemi** temel notuna geçeceksin. Ekolojide kurduğun uyarı–değişim–tepki mantığı, sinir sisteminde reseptörden merkezî işlemeye ve efektör yanıtına hücresel ölçekte yeniden karşına çıkacak.',
            topics: ['Sinir sistemi', 'Nöron ve impuls', 'Merkezî ve çevresel sinir sistemi'],
          },
          {
            id: 'eko-close-audio',
            type: 'audio_script',
            body: `Ders bitti. Şimdi üç cümleyi yüksek sesle tamamla.

Enerji ekosisteme güneşten girer ve sonunda ısı olarak çıkar.

Madde canlılarla cansız çevre arasında döner; bu dönüşte ayrıştırıcılar kritik görev yapar.

Popülasyon sonsuza kadar büyümez; kaynaklar ve çevre direnci onu taşıma kapasitesi çevresinde sınırlar.

Bu üç cümleyi nedenleriyle kurabiliyorsan ekosistem ekolojisinin omurgası tamamdır.`,
          },
        ],
      },
    ],
  },
}
