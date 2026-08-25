/**
 * Fizik Atlası — Bölge haritası
 * ==================================================================
 * Atlas 13 bölgeden oluşur. Bölgeler bir yönetim paneli listesi değil,
 * birbirine bağlı **keşif bölgeleri** gibi düzenlenmiştir: her bölgenin
 * haritada bir yeri, bir rengi ve önceki bölgelerle bağlantıları vardır.
 *
 * `onKosullar` alanı haritada çizilen okları üretir. Öğrenci kilitlenmez —
 * istediği bölgeye girebilir — ama "buraya girmeden önce şurayı görsen
 * daha kolay olur" bilgisini görsel olarak alır.
 *
 * `konum` değerleri harita SVG'sinde yüzde cinsindendir (0–100).
 */

export const BOLGELER = [
  {
    kod: 'olcme',
    ad: 'Ölçme ve Fiziksel Büyüklükler',
    kisaAd: 'Ölçme',
    ikon: 'Ruler',
    renk: '#38bdf8',
    konum: { x: 12, y: 16 },
    onKosullar: [],
    ozet: 'Fiziğin alfabesi: hangi büyüklükler temel, hangileri türetilmiş, bir ölçüm ne kadar güvenilir?',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de çoğu yıl 1 soru',
      tarz: 'Genellikle bir birimin hangi temel birimlerden kurulduğu, skaler–vektörel ayrımı ya da bir ölçüm aletinin duyarlılığı sorulur. Uzun hesap değil, kavram sorusudur.',
      tuzak: 'Türetilmiş bir birimi temel birim sanmak. Birimi açarak kontrol et: 1 Pa = 1 kg·m⁻¹·s⁻².',
    },
    kazanimlar: [
      'Fizik biliminin alt dallarını ve inceleme alanlarını tanır.',
      'Temel ve türetilmiş büyüklükleri ayırt eder, SI birimlerini kullanır.',
      'Ölçme, duyarlılık ve belirsizlik kavramlarını ölçüm sonuçlarıyla ilişkilendirir.',
      'Skaler ve vektörel büyüklükleri ayırt eder.',
    ],
    deneyler: [
      { kod: 'buyukluk-ayirici', ad: 'Büyüklük Ayırıcı', tanim: 'Her büyüklüğü skaler mi vektörel mi diye ayır.' },
      { kod: 'olcum-tezgahi', ad: 'Ölçüm Tezgâhı', tanim: 'Cetvel, kronometre ve teraziyle ölç; aracın duyarlılığını değiştir.' },
      { kod: 'birim-laboratuvari', ad: 'Birim Dönüşüm Laboratuvarı', tanim: 'Aynı büyüklüğü farklı birimlerde gör.' },
    ],
  },
  {
    kod: 'vektorler',
    ad: 'Vektörler',
    kisaAd: 'Vektörler',
    ikon: 'MoveUpRight',
    renk: '#a78bfa',
    konum: { x: 34, y: 10 },
    onKosullar: ['olcme'],
    ozet: 'Yönü olan büyüklüklerle çalışmayı öğren: topla, çıkar, bileşenlerine ayır, dengeleyicisini bul.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de temel düzeyde; ayrıntılı vektör soruları AYT ağırlıklı',
      tarz: 'TYT\'de çoğunlukla “hangisi vektörel büyüklüktür” ya da alınan yol ile yer değiştirmenin karşılaştırılması biçiminde gelir. Bileşenlere ayırma ve bileşke hesabı AYT\'de karşına çıkar.',
      tuzak: 'Vektörleri sayı gibi toplamak. 6 ve 8 birimlik iki vektörün bileşkesi, aralarındaki açıya göre 2 ile 14 arasında herhangi bir değer olabilir.',
    },
    kazanimlar: [
      'Vektörü büyüklük ve yönüyle tanımlar, dik bileşenlerine ayırır.',
      'Vektörleri uç uca ekleme ve paralelkenar yöntemiyle toplar.',
      'Bileşke ve dengeleyici vektörü belirler.',
      'Vektör çıkarmanın, ters vektörle toplama olduğunu gösterir.',
    ],
    deneyler: [
      { kod: 'vektor-tezgahi', ad: 'Vektör Tezgâhı', tanim: 'Vektörleri sürükle, bileşenlerine ayır, topla ve çıkar.' },
      { kod: 'skaler-vektorel', ad: 'Yol mu, Yer Değiştirme mi?', tanim: 'Rota çiz; alınan yol ile yer değiştirmenin farkını gör.' },
    ],
  },
  {
    kod: 'madde',
    ad: 'Madde ve Özellikleri',
    kisaAd: 'Madde',
    ikon: 'Boxes',
    renk: '#34d399',
    konum: { x: 12, y: 42 },
    onKosullar: ['olcme'],
    ozet: 'Özkütle, dayanıklılık, adezyon–kohezyon, yüzey gerilimi ve kılcallık.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de neredeyse her yıl 1 soru',
      tarz: 'Kütle–hacim grafiğinden özkütle okuma, karışım özkütlesi, kılcallık ve yüzey gerilimi örnekleri. Grafik yorumu çok sık.',
      tuzak: 'Grafiğin eğimini bir noktanın koordinat oranıyla karıştırmak. Doğrusal grafikte ikisi aynıdır, kırıklı grafikte değildir.',
    },
    kazanimlar: [
      'Kütle, hacim ve özkütle arasındaki ilişkiyi grafikle yorumlar.',
      'Özkütlenin ayırt edici bir özellik olduğunu açıklar.',
      'Adezyon, kohezyon, yüzey gerilimi ve kılcallığı günlük olaylarla ilişkilendirir.',
      'Dayanıklılığın kesit alanına bağlılığını açıklar.',
    ],
    deneyler: [
      { kod: 'ozkutle-tezgahi', ad: 'Özkütle Tezgâhı', tanim: 'Kütle ve hacmi değiştir; oranın neden sabit kaldığını gör.' },
      { kod: 'yuzey-kilcallik', ad: 'Yüzey Gerilimi ve Kılcallık', tanim: 'Boru inceldikçe sıvı neden daha çok yükseliyor?' },
      { kod: 'dayaniklilik', ad: 'Dayanıklılık Testi', tanim: 'Kesit alanını değiştir, kopma sınırını bul.' },
    ],
  },
  {
    kod: 'kuvvet-hareket',
    ad: 'Kuvvet ve Hareket',
    kisaAd: 'Kuvvet ve Hareket',
    ikon: 'Gauge',
    renk: '#fb923c',
    konum: { x: 56, y: 18 },
    onKosullar: ['vektorler', 'madde'],
    ozet: 'Konum, hız, ivme, grafikler ve Newton yasaları. Atlasın en geniş bölgesi.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de her yıl 1–2 soru',
      tarz: 'Konum–zaman ve hız–zaman grafiklerinin yorumu, Newton yasalarıyla ivme bulma, sürtünmeli sistemlerde net kuvvet.',
      tuzak: 'Hız–zaman grafiğindeki alanı “alınan yol” sanmak. Alan yer değiştirmedir; yol için eksenin altında kalan alanın mutlak değeri de eklenir.',
    },
    kazanimlar: [
      'Konum, alınan yol, yer değiştirme, sürat ve hız kavramlarını ayırt eder.',
      'Sabit ivmeli hareketi denklemler ve grafiklerle çözümler.',
      'Konum–zaman eğiminin hızı, hız–zaman eğiminin ivmeyi verdiğini gösterir.',
      'Hız–zaman grafiğinde alanın yer değiştirmeye eşit olduğunu kullanır.',
      'Newton yasalarını serbest cisim diyagramıyla uygular.',
      'Statik ve kinetik sürtünmeyi normal kuvvetle ilişkilendirir.',
    ],
    deneyler: [
      { kod: 'hareket-laboratuvari', ad: 'Hareket Laboratuvarı', tanim: 'İlk hız ve ivmeyi seç; üç grafiği eş zamanlı izle.' },
      { kod: 'kuvvet-masasi', ad: 'Kuvvet Masası', tanim: 'Farklı yönlerden kuvvet uygula, net kuvveti ve ivmeyi gör.' },
      { kod: 'surtunme-laboratuvari', ad: 'Sürtünme Laboratuvarı', tanim: 'Cisim neden bazen itmene rağmen hareket etmiyor?' },
    ],
  },
  {
    kod: 'atislar',
    ad: 'Atışlar',
    kisaAd: 'Atışlar',
    ikon: 'Rocket',
    renk: '#f472b6',
    konum: { x: 78, y: 12 },
    onKosullar: ['kuvvet-hareket'],
    ozet: 'Serbest düşme, düşey atışlar, yatay atış ve eğik atış tek bir laboratuvarda.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'AYT ağırlıklı; TYT\'de nadiren ve niteliksel',
      tarz: 'Atışlar 11. sınıf konusudur. AYT\'de yatay ve eğik atışta menzil, uçuş süresi ve tepe noktası hesaplanır; TYT\'de en fazla serbest düşmenin niteliksel yorumu gelir.',
      tuzak: 'Tepe noktasında ivmenin de sıfır olduğunu sanmak. Orada hız sıfırdır, ivme her an aşağı doğru ve g büyüklüğündedir.',
    },
    kazanimlar: [
      'Serbest düşme ve düşey atışlarda hız–zaman ilişkisini çözümler.',
      'Yatay atışta yatay ve düşey hareketin bağımsız olduğunu gösterir.',
      'Eğik atışta menzil, tepe noktası ve uçuş süresini hesaplar.',
      'Hava direncinin yörüngeyi nasıl değiştirdiğini niteliksel olarak açıklar.',
    ],
    deneyler: [
      { kod: 'atis-laboratuvari', ad: 'Atış Laboratuvarı', tanim: 'Beş atış türünü aynı ekranda dene, yörüngeyi ve grafikleri karşılaştır.' },
      { kod: 'menzil-yarismasi', ad: 'Menzil Görevi', tanim: 'Hedefi vurmak için açı ve hızı ayarla.' },
    ],
  },
  {
    kod: 'enerji',
    ad: 'İş, Güç ve Enerji',
    kisaAd: 'Enerji',
    ikon: 'Zap',
    renk: '#facc15',
    konum: { x: 58, y: 44 },
    onKosullar: ['kuvvet-hareket'],
    ozet: 'Enerji yok olmaz; şekil değiştirir. Sürtünmede nereye gittiğini adım adım izle.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de her yıl 1 soru',
      tarz: 'İş–enerji ilişkisi, enerjinin korunumu, sürtünmede ısıya dönüşen pay ve verim. Hesaplar kısa, yorum ağır basar.',
      tuzak: 'İş ile gücü karıştırmak. İş bir miktardır (J); güç bu işin ne kadar sürede yapıldığıdır (W).',
    },
    kazanimlar: [
      'Fiziksel anlamda işi, kuvvet ile yer değiştirme arasındaki açıyla hesaplar.',
      'Kinetik, potansiyel ve esneklik potansiyel enerjilerini ayırt eder.',
      'Enerjinin korunumunu sürtünmeli ve sürtünmesiz sistemlerde uygular.',
      'Gücü, aynı işi farklı sürelerde yapmakla ilişkilendirir.',
      'Verimi enerji dönüşümleriyle açıklar.',
    ],
    deneyler: [
      { kod: 'enerji-parkuru', ad: 'Enerji Parkuru', tanim: 'Lunapark treninde enerjinin nereye gittiğini akış şemasıyla izle.' },
      { kod: 'is-acisi', ad: 'İş ve Açı', tanim: 'Aynı kuvveti farklı açılarla uygula; iş nasıl değişiyor?' },
      { kod: 'yay-firlatici', ad: 'Yay Fırlatıcı', tanim: 'Yayı sıkıştır, enerjinin kinetiğe dönüşünü ölç.' },
    ],
  },
  {
    kod: 'isi',
    ad: 'Isı, Sıcaklık ve Genleşme',
    kisaAd: 'Isı',
    ikon: 'Thermometer',
    renk: '#f87171',
    konum: { x: 34, y: 58 },
    onKosullar: ['madde', 'enerji'],
    ozet: 'Isı ile sıcaklık aynı şey değil. Karıştır, ısıt, erit ve grafiği izle.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de neredeyse her yıl 1 soru',
      tarz: 'Isı alışverişi ve denge sıcaklığı hesabı, ısınma eğrisi yorumu, katı–sıvı genleşmesi örnekleri.',
      tuzak: 'Hâl değişimi sırasında sıcaklığın arttığını sanmak. Erime ve kaynamada verilen ısı bağları koparmaya gider; sıcaklık sabit kalır.',
    },
    kazanimlar: [
      'Isı ile sıcaklığı ayırt eder; ısıyı enerji aktarımı olarak açıklar.',
      'Öz ısı ve ısı sığasını hesaplamalarda kullanır.',
      'Isıl dengeyi alınan–verilen ısı eşitliğiyle çözümler.',
      'Hâl değişimi sırasında sıcaklığın sabit kaldığını grafikle gösterir.',
      'İletim, taşınım ve ışınımı karşılaştırır; genleşmeyi günlük hayatla ilişkilendirir.',
    ],
    deneyler: [
      { kod: 'kalorimetre', ad: 'Kalorimetre', tanim: 'Farklı sıcaklıktaki maddeleri karıştır, denge sıcaklığını bul.' },
      { kod: 'isinma-egrisi', ad: 'Isınma Eğrisi', tanim: 'Buzdan buhara: sıcaklık neden bazı yerlerde sabit kalıyor?' },
      { kod: 'genlesme', ad: 'Genleşme Tezgâhı', tanim: 'Metal çubuk, halka ve bimetal deneyleri.' },
    ],
  },
  {
    kod: 'basinc',
    ad: 'Basınç ve Kaldırma Kuvveti',
    kisaAd: 'Basınç',
    ikon: 'Waves',
    renk: '#22d3ee',
    konum: { x: 12, y: 72 },
    onKosullar: ['madde', 'kuvvet-hareket'],
    ozet: 'Katı, sıvı ve gaz basıncı; Pascal ilkesi ve Arşimet.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de her yıl 1 soru',
      tarz: 'Katı ve sıvı basıncının karşılaştırılması, kapalı kaplarda Pascal ilkesi, yüzen ve batan cisimlerde Arşimet ilkesi.',
      tuzak: 'Sıvı basıncını kabın şekline ya da içindeki sıvının miktarına bağlamak. Basınç yalnızca derinliğe, sıvının özkütlesine ve g\'ye bağlıdır.',
    },
    kazanimlar: [
      'Katı basıncını kuvvet ve temas alanıyla ilişkilendirir.',
      'Sıvı basıncının yalnızca derinlik, özkütle ve g’ye bağlı olduğunu gösterir.',
      'Pascal ilkesini hidrolik sistemlerle açıklar.',
      'Kaldırma kuvvetini batan hacimle ilişkilendirir; yüzme, askıda kalma ve batmayı çözümler.',
    ],
    deneyler: [
      { kod: 'basinc-tezgahi', ad: 'Basınç Tezgâhı', tanim: 'Kap şeklini değiştir; basıncın gerçekten neye bağlı olduğunu sına.' },
      { kod: 'hidrolik-pres', ad: 'Hidrolik Pres', tanim: 'Kuvvet kazan; ama işten kazanabiliyor musun?' },
      { kod: 'arsimet-havuzu', ad: 'Arşimet Havuzu', tanim: 'Cisimleri farklı sıvılara bırak, batan hacmi ölç.' },
    ],
  },
  {
    kod: 'elektrostatik',
    ad: 'Elektrostatik',
    kisaAd: 'Elektrostatik',
    ikon: 'Sparkles',
    renk: '#c084fc',
    konum: { x: 80, y: 42 },
    onKosullar: ['vektorler', 'kuvvet-hareket'],
    ozet: 'Yükler, Coulomb kuvveti, elektrik alan ve elektriklenme yolları.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de çoğu yıl 1 soru',
      tarz: 'Elektriklenme yolları, özdeş kürelerde yük paylaşımı, Coulomb yasasındaki orantıların yorumu ve alan çizgileri.',
      tuzak: 'Etki ile elektriklenmede cismin net yükünün değiştiğini sanmak. Topraklama olmadan cisim nötr kalır, yalnızca yükleri ayrışır.',
    },
    kazanimlar: [
      'Elektrik yükünü ve yükün korunumunu açıklar.',
      'İletken ve yalıtkanları elektron hareketliliğiyle ayırt eder.',
      'Sürtünme, dokunma ve etki ile elektriklenmeyi karşılaştırır.',
      'Coulomb kuvvetinin yük ve uzaklıkla ilişkisini niteliksel olarak yorumlar.',
      'Elektrik alan çizgilerini okur.',
    ],
    deneyler: [
      { kod: 'yuk-alani', ad: 'Yük Alanı', tanim: 'Yükleri sürükle; kuvvet vektörlerini ve alan çizgilerini izle.' },
      { kod: 'elektroskop', ad: 'Elektroskop', tanim: 'Üç elektriklenme yolunu tanecik düzeyinde dene.' },
    ],
  },
  {
    kod: 'devreler',
    ad: 'Elektrik Devreleri',
    kisaAd: 'Devreler',
    ikon: 'CircuitBoard',
    renk: '#4ade80',
    konum: { x: 80, y: 68 },
    onKosullar: ['elektrostatik', 'enerji'],
    ozet: 'Sürükle-bırak devre laboratuvarı: seri, paralel, karışık, açık ve kısa devre.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de her yıl 1 soru',
      tarz: 'Seri ve paralel eşdeğer direnç, ampullerin parlaklığının karşılaştırılması, ampermetre ve voltmetrenin bağlanışı.',
      tuzak: 'Paralel bağlamanın direnci artırdığını sanmak. Paralel eşdeğer direnç, kollardaki en küçük dirençten bile küçüktür.',
    },
    kazanimlar: [
      'Ohm yasasını akım, gerilim ve direnç arasında kullanır.',
      'Seri ve paralel bağlamada eşdeğer direnci hesaplar.',
      'Akım ve gerilimin kollara nasıl dağıldığını çözümler.',
      'Ampermetre ve voltmetrenin doğru bağlanma biçimini gerekçesiyle açıklar.',
      'Elektriksel gücü ve tüketilen enerjiyi hesaplar.',
    ],
    deneyler: [
      { kod: 'devre-tezgahi', ad: 'Devre Tezgâhı', tanim: 'Kendi devreni kur; ölçü aletlerini bağla, sonucu anında gör.' },
      { kod: 'ariza-bul', ad: 'Arızayı Bul', tanim: 'Çalışmayan devrelerde hatayı bul ve nedenini açıkla.' },
    ],
  },
  {
    kod: 'manyetizma',
    ad: 'Manyetizma',
    kisaAd: 'Manyetizma',
    ikon: 'Magnet',
    renk: '#60a5fa',
    konum: { x: 58, y: 82 },
    onKosullar: ['devreler'],
    ozet: 'Mıknatıs alanı, akımın alanı, elektromıknatıs, sağ el kuralı ve indüksiyon.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de ara sıra; çoğunlukla niteliksel',
      tarz: 'Akımın oluşturduğu manyetik alanın yönü (sağ el kuralı), mıknatıs–bobin etkileşimi ve indüksiyon akımının yönü.',
      tuzak: 'Düz telin alanının uzaklığın karesiyle azaldığını sanmak. Düz telde alan 1/r ile azalır; ters kare bağıntısı nokta kaynaklara aittir.',
    },
    kazanimlar: [
      'Mıknatıs kutuplarını ve manyetik alan çizgilerini yorumlar.',
      'Akım geçen telin çevresinde manyetik alan oluştuğunu gösterir.',
      'Bobin ve elektromıknatısın gücünü sarım sayısı ve akımla ilişkilendirir.',
      'Sağ el kuralıyla kuvvetin yönünü belirler.',
      'İndüksiyon akımını değişen manyetik akıyla açıklar.',
    ],
    deneyler: [
      { kod: 'alan-tezgahi', ad: 'Manyetik Alan Tezgâhı', tanim: 'Mıknatısları ve telleri yerleştir, pusulaları izle.' },
      { kod: 'sag-el', ad: 'Sağ El Kuralı', tanim: 'Önce tahmin et, sonra kuvvetin yönünü gör.' },
      { kod: 'induksiyon', ad: 'İndüksiyon Deneyi', tanim: 'Mıknatısı bobine yaklaştır-uzaklaştır; akım ne zaman doğuyor?' },
    ],
  },
  {
    kod: 'dalgalar',
    ad: 'Dalgalar ve Ses',
    kisaAd: 'Dalgalar',
    ikon: 'AudioWaveform',
    renk: '#2dd4bf',
    konum: { x: 34, y: 88 },
    onKosullar: ['enerji'],
    ozet: 'Atma, periyodik dalga, girişim, yansıma, ses ve rezonans.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de çoğu yıl 1 soru',
      tarz: 'v = λ·f bağıntısıyla dalga boyu ve frekans, sabit ve serbest uçtan yansıma, sesin ortama göre değişen hızı, rezonans.',
      tuzak: 'Genlikle frekansı karıştırmak. Genlik sesin gürlüğünü, frekans inceliğini belirler; ikisi birbirinden bağımsızdır.',
    },
    kazanimlar: [
      'Genlik, periyot, frekans, dalga boyu ve hız arasındaki bağıntıyı kullanır.',
      'Enine ve boyuna dalgaları ayırt eder.',
      'Sabit ve serbest uçtan yansımayı karşılaştırır.',
      'İki dalganın üst üste binmesini yorumlar.',
      'Sesin farklı ortamlarda farklı hızla yayıldığını açıklar; rezonansı örneklendirir.',
    ],
    deneyler: [
      { kod: 'dalga-tezgahi', ad: 'Dalga Tezgâhı', tanim: 'Genlik, frekans ve hızı değiştir; dalga boyunu ölç.' },
      { kod: 'yansima-girisim', ad: 'Yansıma ve Girişim', tanim: 'Uç türünü değiştir, iki atmayı çarpıştır.' },
      { kod: 'ses-rezonans', ad: 'Ses ve Rezonans', tanim: 'Ortamı değiştir, doğal frekansı yakala.' },
    ],
  },
  {
    kod: 'optik',
    ad: 'Optik',
    kisaAd: 'Optik',
    ikon: 'Lightbulb',
    renk: '#fbbf24',
    konum: { x: 80, y: 90 },
    onKosullar: ['dalgalar'],
    ozet: 'Gölge, yansıma, aynalar, kırılma, mercekler, prizma ve renk.',
    /* TYT'de bu bölgenin karşılığı — sıklık nitelikseldir, yıllara göre değişir. */
    sinavNotu: {
      siklik: 'TYT\'de neredeyse her yıl 1 soru',
      tarz: 'Gölge ve yarı gölge, düzlem ve küresel aynada görüntü, kırılma yönü, mercekte görüntü özellikleri ve renk karışımı.',
      tuzak: 'Yoğun ortamdan az yoğun ortama geçen ışığın normale yaklaştığını sanmak. Az yoğuna geçişte ışık hızlanır ve normalden uzaklaşır.',
    },
    kazanimlar: [
      'Işığın doğrusal yayıldığını gölge oluşumuyla gösterir.',
      'Yansıma yasasını düzlem ve küresel aynalarda uygular.',
      'Kırılmayı ortam değişimiyle açıklar, sınır açısını belirler.',
      'Mercek ve aynalarda görüntü özelliklerini bulur.',
      'Prizmada ayrışmayı ve renk karışımlarını açıklar.',
    ],
    deneyler: [
      { kod: 'golge-tezgahi', ad: 'Gölge Tezgâhı', tanim: 'Kaynağı büyüt; tam gölge ve yarı gölge nasıl değişiyor?' },
      { kod: 'kirilma-tezgahi', ad: 'Kırılma ve Tam Yansıma', tanim: 'Ortamları değiştir, sınır açısını yakala.' },
      { kod: 'mercek-tezgahi', ad: 'Mercek ve Ayna', tanim: 'Cismi sürükle; görüntünün yerini, yönünü ve boyunu izle.' },
      { kod: 'renk-tezgahi', ad: 'Renk Tezgâhı', tanim: 'Işıkları karıştır, filtrelerden geçir.' },
    ],
  },
]

/** Kod ile bölge bulma. */
export const bolgeBul = (kod) => BOLGELER.find((b) => b.kod === kod) ?? null

/** Haritada çizilecek ön koşul okları: [{ from, to }] */
export const BAGLANTILAR = BOLGELER.flatMap((b) =>
  b.onKosullar.map((ok) => ({ from: ok, to: b.kod })),
)

/** Toplam MEB kazanımı — atlasın müfredat kapsamını gösterir. */
export const TOPLAM_KAZANIM = BOLGELER.reduce((t, b) => t + b.kazanimlar.length, 0)

/** Toplam deney sayısı — genel ilerleme yüzdesi için. */
export const TOPLAM_DENEY = BOLGELER.reduce((t, b) => t + b.deneyler.length, 0)

/**
 * "Arızayı Bul" deneyindeki arıza kodları.
 * Devre Tamircisi rozetinin kuralı buna bakar; deneye yeni bir arıza
 * eklenirse rozet de kendiliğinden onu bekler.
 */
export const DEVRE_ARIZALARI = ['anahtar-acik', 'kisa-devre', 'voltmetre-seri', 'ampermetre-paralel']

/**
 * Rozet tanımları. Rozet, öğrenciyi yarıştırmak için değil, ilerlemeyi
 * görünür kılmak için.
 *
 * `aciklama` metni rozetin gerçek kuralını anlatır (kural `lib/fizik/
 * ilerleme.js` içindedir). İkisi ayrışırsa öğrenciye ulaşamayacağı bir
 * rozet gösterilmiş olur; testler bunu denetler.
 */
export const ROZETLER = [
  { kod: 'ilk-adim', ad: 'İlk Adım', aciklama: 'İlk deneyini tamamladın.', ikon: 'Footprints' },
  { kod: 'vektor-ustasi', ad: 'Vektör Ustası', aciklama: 'Vektörler bölgesinin üç seviyesini de bitirdin.', ikon: 'MoveUpRight' },
  { kod: 'grafik-okuru', ad: 'Grafik Okuru', aciklama: 'Kuvvet ve Hareket öğrenme kontrolünü tek hata yapmadan bitirdin.', ikon: 'LineChart' },
  { kod: 'nisanci', ad: 'Nişancı', aciklama: 'Menzil Görevi\'nde hedefi vurdun.', ikon: 'Target' },
  { kod: 'enerji-dedektifi', ad: 'Enerji Dedektifi', aciklama: 'İş, Güç ve Enerji bölgesinin üç seviyesini de bitirdin.', ikon: 'Search' },
  { kod: 'devre-tamircisi', ad: 'Devre Tamircisi', aciklama: 'Arızayı Bul deneyindeki dört arızayı da onardın.', ikon: 'Wrench' },
  { kod: 'kasif', ad: 'Kâşif', aciklama: 'On üç bölgenin hepsine uğradın.', ikon: 'Compass' },
  { kod: 'atlas-ustasi', ad: 'Atlas Ustası', aciklama: 'Atlasın tamamını %100 bitirdin.', ikon: 'Award' },
]
