/**
 * TYT BİYOLOJİ · EKOSİSTEM EKOLOJİSİ
 * Kavram listesini enerji akışı, madde döngüsü ve popülasyon dengesiyle tek sisteme bağlar.
 */

export default {
  slug: 'ekosistem-ekolojisi',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Ekosistem Ekolojisi',
  },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'Ekosistem Ekolojisi: Doğadaki Ağı Okumak',
  subtitle:
    'Canlıları tek tek ezberleme; enerji nereden giriyor, madde nereye dönüyor ve popülasyonu hangi sınır durduruyor sorularıyla bütün ekosistemi tek sistem olarak oku.',

  document: {
    version: 1,
    estimated_minutes: 60,
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
      'Besin zinciri oklarının yönünü doğru kurup üretici, tüketici ve ayrıştırıcıların görevini açıklayabileceksin.',
      'Enerji piramidinde üst basamaklara çıkıldıkça enerji ve biyokütlenin neden azaldığını yorumlayabileceksin.',
      'Su, karbon ve azot döngülerindeki temel geçişleri neden–sonuç ilişkisiyle kurabileceksin.',
      'Popülasyon büyüklüğünü değiştiren olayları, taşıma kapasitesini ve sınırlayıcı faktörleri analiz edebileceksin.',
      'Birincil ve ikincil süksesyonu toprağın varlığı üzerinden ayırabileceksin.',
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
        id: 'eko-quiz',
        kind: 'practice',
        title: '10 soruda ekosistemi gerçekten kurdun mu?',
        lead: 'Hedef 8/10. Her açıklamada yalnız doğru seçeneği değil, yanlış seçeneklerin hangi kavramı karıştırdığını da kontrol et.',
        blocks: [
          {
            id: 'eko-quiz1',
            type: 'quiz',
            purpose: 'hierarchy',
            question: 'Bir göldeki bütün sazan balıkları hangi ekolojik düzeyi oluşturur?',
            options: ['Organizma', 'Popülasyon', 'Komünite', 'Ekosistem'],
            answer_index: 1,
            explanation: 'Aynı türün aynı alan ve zamanda yaşayan bireyleri **popülasyon**dur. Göldeki bütün farklı türler komüniteyi; canlılarla cansız çevrenin bütünü ekosistemi oluşturur.',
          },
          {
            id: 'eko-quiz2',
            type: 'quiz',
            purpose: 'habitat-niche',
            question: 'Bir baykuşun gece avlanması ve kemirgenlerle beslenmesi hangi kavramın parçasıdır?',
            options: ['Habitat', 'Ekolojik niş', 'Biyom', 'Taşıma kapasitesi'],
            answer_index: 1,
            explanation: 'Canlının kaynak kullanımı, etkinlik zamanı ve ekosistemdeki işlevi **ekolojik niş**tir. Yaşadığı orman veya ağaç kovuğu ise habitatının parçasıdır.',
          },
          {
            id: 'eko-quiz3',
            type: 'quiz',
            purpose: 'arrow',
            question: 'Otla beslenen çekirgeyi kurbağa tüketiyorsa besin zinciri oku nasıl çizilir?',
            options: ['Kurbağa → çekirge → ot', 'Ot → kurbağa → çekirge', 'Ot → çekirge → kurbağa', 'Çekirge → ot → kurbağa'],
            answer_index: 2,
            explanation: 'Ok, besin ve kimyasal enerjinin aktarım yönünde **yenenden yiyene** gider: ot → çekirge → kurbağa.',
          },
          {
            id: 'eko-quiz4',
            type: 'quiz',
            purpose: 'energy',
            question: 'Enerji piramidinin üst basamaklara doğru daralmasının temel nedeni nedir?',
            options: ['Üst tüketicilerin fotosentez yapması', 'Enerjinin her basamakta tümüyle maddeye dönüşmesi', 'Enerjinin yaşamsal faaliyetlerde kullanılıp önemli bölümünün ısıya dönüşmesi', 'Ayrıştırıcıların enerjiyi üreticiye geri vermesi'],
            answer_index: 2,
            explanation: 'Canlılar enerjinin çoğunu solunum ve diğer yaşamsal faaliyetlerde kullanır; önemli bölümü **ısıya dönüşür**. Yalnız biyokütlede kalan bölüm üst düzeye aktarılabilir.',
          },
          {
            id: 'eko-quiz5',
            type: 'quiz',
            purpose: 'toxin',
            question: 'Besin zincirinde üreticiden son tüketiciye çıkıldıkça hangisinin artması beklenebilir?',
            options: ['Toplam kullanılabilir enerji', 'Toplam biyokütle', 'Parçalanmayan toksinin doku derişimi', 'Aktarılan enerji yüzdesi kesin olarak'],
            answer_index: 2,
            explanation: 'Enerji ve çoğu durumda biyokütle azalırken, parçalanmayan ve atılamayan toksinlerin **derişimi biyolojik büyütmeyle artabilir**.',
          },
          {
            id: 'eko-quiz6',
            type: 'quiz',
            purpose: 'decomposer',
            question: 'Ayrıştırıcıların ekosistemdeki temel görevi hangisidir?',
            options: ['Isı enerjisini yeniden güneş enerjisine çevirmek', 'Organik kalıntıları inorganik maddelere dönüştürerek maddeyi çevreye kazandırmak', 'Yalnız son tüketicileri parçalamak', 'Atmosfer azotunu bütün bitkilere doğrudan vermek'],
            answer_index: 1,
            explanation: 'Ayrıştırıcılar her trofik düzeyin atık ve kalıntılarını parçalar, **inorganik maddeleri çevreye kazandırır**. Enerjiyi döngüye sokmazlar.',
          },
          {
            id: 'eko-quiz7',
            type: 'quiz',
            purpose: 'carbon',
            question: 'Atmosferdeki CO₂ karbonunun bir tavşanın dokusuna ulaşmasında temel olay sırası hangisidir?',
            options: ['Solunum → boşaltım', 'Fotosentez → beslenme', 'Ayrışma → terleme', 'Denitrifikasyon → beslenme'],
            answer_index: 1,
            explanation: 'Bitki karbonu **fotosentezle** organik maddeye bağlar; tavşan bitkiyi **beslenmeyle** tüketerek bu karbonu dokusuna alabilir.',
          },
          {
            id: 'eko-quiz8',
            type: 'quiz',
            purpose: 'nitrogen',
            question: 'Azot döngüsüyle ilgili aşağıdaki ifadelerden hangisi doğrudur?',
            options: ['Bitkiler atmosferdeki N₂’yi doğrudan yapraklarından alır', 'Denitrifikasyon azotu atmosferden toprağa bağlar', 'Bazı bakteriler azotun bitkilerce kullanılabilir biçimlere dönüşmesinde görev alır', 'Azot canlılar arasında beslenmeyle aktarılamaz'],
            answer_index: 2,
            explanation: 'Bitkiler atmosferik N₂’yi doğrudan kullanamaz. Azot bağlayan ve nitrifikasyon yapan **bakteriler**, kullanılabilir azotlu bileşiklerin oluşmasında kritik rol oynar.',
          },
          {
            id: 'eko-quiz9',
            type: 'quiz',
            purpose: 'population',
            question: 'Bir popülasyonda doğum 40, içe göç 15, ölüm 25 ve dışa göç 10 bireyse popülasyon nasıl değişir?',
            options: ['20 artar', '30 artar', '20 azalır', 'Değişmez'],
            answer_index: 0,
            explanation: '**(40 + 15) − (25 + 10) = 20.** Popülasyon 20 birey artar. Doğum ve içe göç artı; ölüm ve dışa göç eksi yazılır.',
          },
          {
            id: 'eko-quiz10',
            type: 'quiz',
            purpose: 'succession',
            question: 'Toprağı tamamen ortadan kalkmamış bir orman yangınından sonra başlayan topluluk değişimi hangisidir?',
            options: ['Birincil süksesyon', 'İkincil süksesyon', 'Üstel büyüme', 'Biyolojik büyütme'],
            answer_index: 1,
            explanation: 'Toprak, mikroorganizmalar, kökler veya tohum bankası korunmuşsa **ikincil süksesyon** görülür. Birincil süksesyon başlangıçta toprağın olmadığı yüzeyde başlar.',
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
            body: 'Bu sistem mantığını **Güncel Çevre Sorunları ve İnsan** konusuna taşı. İklim değişikliğinde karbon döngüsünün, ötrofikasyonda azot–fosfor yükünün, habitat kaybında taşıma kapasitesi ve biyoçeşitliliğin nasıl değiştiğini aynı oklarla okuyacaksın.',
            topics: ['Güncel çevre sorunları', 'Biyoçeşitlilik', 'Doğal kaynakların sürdürülebilirliği'],
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
