import urinerSistem from './uriner-sistem.js'

const temelEkBolumler = [
  {
    id: 'us-temel-tasima-derin',
    kind: 'deepen',
    title: 'Nefron boyunca ayrıntılı taşıma, karşı akım ve renal klirens',
    lead: 'Her nefron segmenti farklı kanal ve taşıyıcılarla çalışır; son idrar, filtre edilen yükün segment segment değiştirilmiş hâlidir.',
    blocks: [
      {
        id: 'us-temel-tasima-prose',
        type: 'prose',
        body: `Bir maddenin böbrekteki hesabı dört nicelikle yapılır. **Filtre edilen yük = GFR × plazma derişimi** olarak düşünülebilir. Tüpten kana dönen miktar geri emilim, kandan tüpe eklenen miktar salgılamadır. **Atılım = süzülme − geri emilim + salgılama** eşitliği son idrardaki miktarı verir. Bir madde serbestçe süzülüp ne geri emilir ne salgılanırsa klirensi GFR’yi yaklaşık gösterebilir; inülin deneysel örnektir. Kreatinin kas metabolizmasından oluşur, az miktar salgılandığı için klinikte GFR’yi yaklaşık değerlendirmede kullanılır.

**Renal klirens**, böbreğin bir dakikada o maddeden tamamen temizlediği varsayımsal plazma hacmidir. Madde tamamen geri emiliyorsa klirensi sıfıra yaklaşır; yalnız süzülüyorsa GFR’ye yakın; ayrıca salgılanıyorsa GFR’den büyük olabilir. Para-aminohippurat gibi güçlü süzülen ve salgılanan bir maddenin klirensi renal plazma akımını yaklaşık gösterebilir. Klirens gerçek bir plazma paketinin tamamen temizlenmesi değil, atılım hızını plazma derişimiyle ilişkilendiren hesaplamadır.

Proksimal tüp filtre edilen Na⁺ ve suyun yaklaşık üçte ikisini, HCO₃⁻’ın çoğunu ve normal koşullarda glikoz–amino asitlerin neredeyse tümünü geri kazanır. Bazolateral **Na⁺/K⁺ ATPaz** hücre içi Na⁺’yı düşük tutar. Apikal Na⁺–glikoz, Na⁺–amino asit ve Na⁺–H⁺ değiştiricileri bu gradyanı kullanır. Su aquaporinler ve hücreler arası yollarla çözünen maddeleri izler; tüp sıvısı büyük miktar azalmasına rağmen yaklaşık izotonik kalabilir.

Filtre edilen HCO₃⁻ doğrudan apikal zardan kolay geçmez. Tüp lümenine salgılanan H⁺, HCO₃⁻ ile birleşip karbonik aside; fırçamsı kenar karbonik anhidrazıyla CO₂ ve suya dönüşür. CO₂ hücreye girer, yeniden HCO₃⁻ oluşturulur ve kana verilir; H⁺ tekrar lümene salgılanabilir. Böylece H⁺ döngüsel kullanılırken filtre edilmiş bikarbonat geri kazanılır.

Henle kulpunun ince inen kolu suya yüksek geçirgen, NaCl’ye daha az geçirgendir. Medullaya inerken çevre ozmolaritesi arttığı için su çıkar ve tüp sıvısı yoğunlaşır. İnce çıkan kolda NaCl pasif, kalın çıkan kolda **Na⁺–K⁺–2Cl⁻ eş taşıyıcısıyla** aktif biçimde interstisyuma alınır; su geçirgenliği çok düşüktür. Bu nedenle kalın çıkan kol “seyreltici segment”tir. Döngü boyunca zıt yönlü akış, küçük enine ozmotik farkı korteksten iç medullaya büyüyen uzunlamasına gradyana dönüştürür.

**Vasa recta**, medullaya inip çıkan saç tokası biçimli kılcal ağdır. Yavaş ve karşı yönlü kan akımı, inerken su kaybedip çözünen madde alır; çıkarken su alıp çözünen madde bırakır. Böylece geri emilen su dolaşıma taşınırken medulla gradyanı bütünüyle yıkanmaz. Akım aşırı artarsa gradyan zayıflayabilir. Jukstamedüller nefronların uzun Henle kulpu ile vasa recta yoğun idrar üretiminde özellikle önemlidir.

Üre yalnız atık değildir; medulla ozmotik gradyanına katkı verir. ADH varlığında iç medulla toplama kanalının üre geçirgenliği artar; üre interstisyuma çıkar, ince Henle bölümlerine yeniden girip **üre geri dönüşümü** yapabilir. Bu döngü iç medulla ozmolaritesini yükselterek toplama kanalından su geri emilimini destekler. Son idrarda yine üre bulunur; geri dönüşüm tamamının tutulduğu anlamına gelmez.

Erken distal tüp NaCl geri emer ve suya görece geçirimsizdir. Geç distal tüp ve kortikal toplama kanalındaki principal hücrelerde aldosteron, apikal ENaC kanalları ve bazolateral Na⁺/K⁺ pompasını artırarak Na⁺ geri emilimini; elektriksel ve taşıyıcı etkilerle K⁺ salgılanmasını destekler. ADH apikal aquaporin-2 ekletir; bazolateral su kanalları üzerinden su kana geçer. ADH düşükse toplama kanalı suya az geçirgen kalır ve seyreltik idrar oluşur.

Asit–baz kontrolünde α-interkale hücreler asidozda H⁺ salgılar, HCO₃⁻’ı kana verir; β-interkale hücreler alkaloz yönünde HCO₃⁻ salgılayabilir. Fosfat filtre edilen H⁺’ı tamponlar. Proksimal tüp glutaminden NH₄⁺ üretip lümene verirken yeni HCO₃⁻ kana ekleyebilir. Böbrek yalnız filtre edilen bikarbonatı korumaz; net asit atımıyla yeni bikarbonat da oluşturur.

Glikozun filtre edilen yükü plazma glikozuyla artar. Proksimal taşıyıcılar doyana kadar geri emilim artar; **taşıma maksimumu** aşıldığında glikozüri başlar. Tüpte kalan glikoz su geri emilimini azaltır ve osmotik diürez yapar. Aynı mantık bazı ilaçların Na⁺–glikoz taşıyıcısını engelleyerek glikoz atımını artırmasında kullanılır. İdrarda glikoz bulunması yalnız glomerül bariyerinin geçirgenleşmesiyle açıklanmaz; glikoz zaten normalde filtre edilir.

Nefron işlevi tek bir sabit süzgeç değildir. Afferent arteriol genişlerse glomerulus kan akımı ve basıncı artma, daralırsa azalma yönündedir. Efferent arteriolün orta derecede daralması glomerulus basıncını destekleyebilir; aşırı daralma renal akımı azaltıp kılcal protein derişimini yükselterek GFR’yi sonunda düşürebilir. Bu yüzden “efferent daralma her koşulda GFR’yi artırır” genellemesi doğru değildir.`,
      },
      {
        id: 'us-temel-tasima-map',
        type: 'concept_map',
        title: 'Filtrattan son idrara segment–işlem haritası',
        intro: 'Toplu geri kazanım proksimalde, gradyan Henle’de, hormon kontrollü ince ayar distal nefronda yapılır.',
        nodes: [
          { id: 'glomerul', label: 'Glomerulus', detail: 'Basınçla küçük maddeleri süzer' },
          { id: 'proks', label: 'Proksimal tüp', detail: 'Besin, HCO₃⁻, Na⁺ ve su' },
          { id: 'henle', label: 'Henle kulpu', detail: 'İnen su, çıkan NaCl' },
          { id: 'medulla', label: 'Medulla gradyanı', detail: 'NaCl + üre geri dönüşümü' },
          { id: 'distal', label: 'Distal tüp', detail: 'Na⁺, K⁺ ve pH ince ayarı' },
          { id: 'toplama', label: 'Toplama kanalı', detail: 'ADH ile son su ayarı' },
        ],
        links: [
          { from: 'glomerul', to: 'proks', label: 'ilk süzüntü' },
          { from: 'proks', to: 'henle', label: 'toplu geri emilim sonrası' },
          { from: 'henle', to: 'medulla', label: 'karşı akım kurar' },
          { from: 'medulla', to: 'toplama', label: 'suyu ozmozla çeker' },
          { from: 'henle', to: 'distal', label: 'seyrelmiş sıvı' },
          { from: 'distal', to: 'toplama', label: 'hormon kontrollü son bileşim' },
        ],
        caption: 'Yoğun idrar için medulla gradyanı ve ADH ile su geçirgenliği birlikte gerekir.',
      },
      {
        id: 'us-temel-klirens-table',
        type: 'table',
        title: 'Böbrek işlemi klirensi nasıl değiştirir?',
        columns: ['Madde davranışı', 'Atılım–filtrasyon ilişkisi', 'Klirens yorumu'],
        rows: [
          ['Tam geri emilim', 'Atılım ≈ 0', 'Klirens ≈ 0; normal glikoz örneği'],
          ['Yalnız serbest filtrasyon', 'Atılım = filtrasyon', 'Klirens ≈ GFR; inülin'],
          ['Filtrasyon + az salgılama', 'Atılım filtrasyondan biraz büyük', 'Kreatinin GFR’yi az yüksek tahmin edebilir'],
          ['Filtrasyon + güçlü salgılama', 'Atılım filtrasyondan büyük', 'Klirens GFR’den büyük olabilir'],
        ],
        caption: 'Klirens, böbreğin o maddeden temizlediği eşdeğer plazma hacmidir.',
      },
      {
        id: 'us-temel-transport-example',
        type: 'worked_example',
        title: 'Atılım denkleminden işlemi çıkar',
        question: 'Bir maddeden dakikada 100 birim süzülüyor, 80 birim geri emiliyor ve 30 birim salgılanıyor. Kaç birim atılır?',
        steps: [
          { title: 'Süzülen miktarla başla', body: 'Tüp sistemine 100 birim girmiştir.' },
          { title: 'Kana döneni çıkar', body: '80 birim geri emilince tüpte 20 birim kalır.' },
          { title: 'Kandan tüpe ekleneni ekle', body: '30 birim salgılanınca son atılım 50 birim olur.' },
        ],
        answer: '100 − 80 + 30 = 50 birim atılır.',
        takeaway: 'Atılım = filtrasyon − geri emilim + salgılama.',
      },
      {
        id: 'us-temel-transport-trap',
        type: 'trap',
        title: 'Karşı akımı yalnız Henle’deki iki sıvının karışması sanmak',
        wrong: '“İnen ve çıkan kol sıvıları birbirine karışarak idrarı yoğunlaştırır.”',
        right: 'Kollar anatomik olarak ayrıdır; zıt yöndeki akış ve farklı su–NaCl geçirgenliği medulla interstisyumunda gradyan üretir.',
        body: 'Yoğunlaştırma, sıvıların doğrudan karışması değil tüp–interstisyum arasındaki seçici madde hareketidir.',
      },
    ],
  },
  {
    id: 'us-temel-sistemik-klinik',
    kind: 'deepen',
    title: 'Azotlu atıklar, pH–hacim dengesi, miksiyon ve böbrek tedavileri',
    lead: 'Böbrek; karaciğer, akciğer, dolaşım, endokrin ve sinir sistemiyle birlikte çalışır; yetmezlik bu ağın tamamını etkiler.',
    blocks: [
      {
        id: 'us-temel-sistemik-prose',
        type: 'prose',
        body: `Protein ve nükleik asitlerin parçalanması azotlu artıklar oluşturur. Amino asidin amino grubu uzaklaştırıldığında zehirli **amonyak** ortaya çıkabilir. Karaciğer, amonyağı CO₂ ile birleştirip **üre döngüsünde üreye** dönüştürür; üre kana verilir ve böbrekte süzülerek atılır. Nükleik asit purinlerinin yıkımı ürik asit oluşturur; kreatin fosfat metabolizması kreatinine katkı verir. Böbrek bu ürünleri üretmez, çoğunlukla kandan uzaklaştırır.

Hayvanlarda temel azotlu atık yaşama ortamına göre değişebilir. Amonyak çok toksik, suda çok çözünür ve atılması için fazla su gerektirir; birçok sucul hayvan doğrudan atabilir. Üre daha az toksik, orta düzey su gerektirir; memelilerde baskındır. Ürik asit az suda yarı katı atılabilir fakat sentezi daha çok enerji gerektirir; kuş, sürüngen ve böceklerde su korunmasına uygundur. İnsan idrarında ürik asit bulunması insanın ürikotel olduğu anlamına gelmez; baskın azotlu atık üredir.

Vücudun su dengesi yalnız içilen suyla kurulmaz. Besinlerdeki su ve hücresel solunumda oluşan metabolik su giriştir; idrar, ter, dışkı ve solunum havası çıkıştır. Zorunlu su kaybı sürerken ADH idrarı yoğunlaştırarak kaybı azaltabilir ama su yoktan üretemez. Çok sıcak ortam ve egzersizde terleme artar; kan hacmi azalırken ozmolarite yükselebilir, hem ADH–susama hem RAAS etkinleşebilir.

Plazma ozmolaritesini öncelikle etkili çözünen maddeler, özellikle Na⁺ ve eşlik eden anyonlar belirler. Hacim ile ozmolarite aynı sinyal değildir. Saf su kaybında ozmolarite yükselir ve ADH güçlü artar. İzotonik kan kaybında ozmolarite çok değişmeden hacim–basınç düşer; baroreseptör, sempatik sistem, RAAS ve ADH hacim sinyaliyle etkinleşebilir. Bu yüzden ADH yalnız yüksek ozmolaritede salgılanır denemez.

RAAS reninle başlar fakat renin hormon zincirinin son ürünü değildir. Renin karaciğer kaynaklı anjiyotensinojeni anjiyotensin I’e çevirir; ACE büyük ölçüde damar endoteli yüzeyinde anjiyotensin II oluşumunu sağlar. Anjiyotensin II arteriyol daralması, susama ve ADH desteği, proksimal Na⁺ geri emilimi ve adrenal korteksten aldosteronla hacim–basıncı artırır. Geri bildirim renal perfüzyon düzeldiğinde renini sınırlar.

Kandaki K⁺ dar aralıkta tutulmalıdır; küçük sapmalar kalp ve sinir–kas uyarılabilirliğini etkiler. Aldosteron yüksek K⁺ tarafından doğrudan da uyarılabilir ve principal hücrelerde K⁺ salgısını artırır. Ancak distal Na⁺ sunumu, tüp akışı, asit–baz durumu ve ilaçlar da K⁺ atılımını etkiler. Böbrek yetmezliğinde tehlikeli hiperkalemi gelişebilmesinin nedeni yalnız daha az süzülme değil, toplam nefron salgılama kapasitesinin kaybıdır.

Akciğer uçucu asit yükü olan CO₂’yi dakikalar içinde, böbrek sabit asitleri saat–gün içinde düzenler. Böbrek filtre edilen HCO₃⁻’ı geri kazanır, H⁺’ı fosfat ve NH₄⁺ ile atar, yeni HCO₃⁻ üretir. Solunumsal asidozda kronik telafi olarak H⁺ atımı ve HCO₃⁻ korunması artabilir; metabolik asidozda böbrek işlevi sağlamsa net asit atımı yükselir. Ağır böbrek yetmezliği metabolik asidoza yol açabilir.

Mesane dolarken detrüsor düz kası gevşek, iç ve dış sfinkter kapalı kalır. Gerim arttığında sakral omurilikteki **miksiyon refleksi** parasempatik yollarla detrüsoru kasar ve iç sfinkteri gevşetir. Dış üretral sfinkter pudendal sinirle kontrol edilen çizgili kastır; korteks ve beyin sapı uygun zamana kadar refleksi baskılayabilir. Bebekte istemli denetim gelişmemiştir. Üreter peristaltizmi ile miksiyon refleksi ayrı olaylardır.

İdrarın normal bileşimi su, üre, kreatinin, ürik asit, değişken iyonlar ve pigmentlerden oluşur. Normal idrarda belirgin protein, kan hücresi veya glikoz beklenmez. İdrar rengi yalnız yoğunluğa bağlı değildir; pigment, besin, ilaç ve hastalık etkileyebilir. İdrar pH’ı beslenme ve asit–baz yüküne göre değişken; kan pH’ından daha geniş aralıkta olabilir.

Akut böbrek hasarı saat–günler içinde gelişen hızlı GFR düşüşüdür; dolaşım azalması, doğrudan böbrek dokusu hasarı veya idrar yolu tıkanıklığı neden olabilir. Kronik böbrek hastalığında nefron kaybı aylar–yıllar ilerler. Kalan nefronların hiperfiltrasyonu başlangıçta toplam GFR’yi korusa da glomerulus basıncını ve hasarı artırabilir. Sonuçta azotlu atık, K⁺, fosfat, asit ve su birikir; EPO ve aktif D vitamini azalabilir.

Hemodiyalizde kan, yarı geçirgen zarın bir yanında; kontrollü elektrolit bileşimindeki diyalizat karşı tarafta akar. Üre ve fazla K⁺ derişim farkıyla diyalizata geçer; bikarbonat kana kazandırılabilir; fazla su transmembran basıncıyla ultrafiltre edilir. Periton diyalizinde hastanın peritonu zar olarak kullanılır. Diyaliz aralıklı destek verir, EPO–D vitamini gibi endokrin işlevleri tam yerine koymaz ve sağlıklı böbreğin sürekli seçiciliğini taklit edemez.

Böbrek nakli işlevsel nefron ve endokrin görevleri sağlayabilir fakat doku uyumu, cerrahi risk ve bağışıklık baskılama gerektirir. Nakledilen böbrek çoğunlukla pelvis bölgesine yerleştirilir; hastanın böbrekleri zorunlu olmadıkça çıkarılmayabilir. Bağışıklık baskılama reddi azaltırken enfeksiyon ve bazı tümör risklerini artırır. Diyaliz ile nakil “biri iyi biri kötü” değil, hastanın durumuna göre farklı yarar–risk dengeleridir.`,
      },
      {
        id: 'us-temel-homeostazi-map',
        type: 'concept_map',
        title: 'Hacim–ozmolarite–basınç düzenleme ağı',
        intro: 'Osmoreseptör, baroreseptör, böbrek ve kalp aynı sıvı dengesini farklı değişkenlerden izler.',
        nodes: [
          { id: 'ozm', label: 'Yüksek ozmolarite', detail: 'Hipotalamik osmoreseptör' },
          { id: 'hacim', label: 'Düşük hacim/basınç', detail: 'Baroreseptör ve böbrek' },
          { id: 'adh', label: 'ADH–susama', detail: 'Su geri emilimi ve alımı' },
          { id: 'raas', label: 'RAAS–aldosteron', detail: 'Na⁺ tutma, K⁺ atma' },
          { id: 'anp', label: 'ANP', detail: 'Fazla hacimde Na⁺ atımı' },
          { id: 'denge', label: 'Kan hacmi ve ozmolarite', detail: 'Negatif geri bildirim' },
        ],
        links: [
          { from: 'ozm', to: 'adh', label: 'uyarır' },
          { from: 'hacim', to: 'adh', label: 'güçlü düşüşte uyarır' },
          { from: 'hacim', to: 'raas', label: 'reninle başlatır' },
          { from: 'adh', to: 'denge', label: 'su tutar' },
          { from: 'raas', to: 'denge', label: 'Na⁺–su ve damar direnci' },
          { from: 'denge', to: 'anp', label: 'fazla hacimde atriyum gerilir' },
        ],
        caption: 'ADH geçirgenliği, aldosteron iyon taşınmasını, ANP fazla hacmin atılmasını düzenler.',
      },
      {
        id: 'us-temel-azot-table',
        type: 'compare',
        title: 'Azotlu boşaltım ürünleri',
        columns: ['Toksisite ve su gereksinimi', 'Enerji maliyeti ve örnek'],
        rows: [
          { label: 'Amonyak', values: ['Çok toksik; çok su gerekir', 'Düşük sentez maliyeti; birçok sucul canlı'] },
          { label: 'Üre', values: ['Orta toksisite ve su gereksinimi', 'Karaciğerde enerjiyle yapılır; memeliler'] },
          { label: 'Ürik asit', values: ['Az toksik; çok az suyla atılabilir', 'Yüksek enerji maliyeti; kuş, sürüngen, böcek'] },
        ],
        insight: 'Atık türü, toksisite–su korunması–enerji maliyeti arasındaki evrimsel dengedir.',
      },
      {
        id: 'us-temel-asit-check',
        type: 'checkpoint',
        question: 'Kronik solunumsal asidozda böbreğin telafi yanıtı hangi yöndedir?',
        hint: 'CO₂ artışının yükselttiği H⁺’ı ve plazma HCO₃⁻ düzeyini düşün.',
        answer: 'Böbrek H⁺ salgısı ve NH₄⁺/fosfatla net asit atımını artırır; HCO₃⁻ geri kazanımı ve yeni HCO₃⁻ üretimi yükselir. Bu pH’ı normale yaklaştırır fakat solunum bozukluğunu ortadan kaldırmaz.',
      },
      {
        id: 'us-temel-diyaliz-trap',
        type: 'trap',
        title: 'Diyalizin bütün böbrek görevlerini yerine getirdiğini sanmak',
        wrong: '“Diyaliz sağlıklı böbreğin tüm süzme, hormon ve sürekli ince ayar işlevlerini aynen yapar.”',
        right: 'Diyaliz bazı atık, iyon, asit–baz ve sıvı yükünü aralıklı olarak düzenler; EPO, D vitamini ve sürekli seçici tüp işlevlerini tam kopyalamaz.',
        body: 'Diyaliz yaşamı destekleyen tedavidir fakat tam biyolojik böbrek eşdeğeri değildir.',
      },
    ],
  },
]

const interaktifBolumler = urinerSistem.document.sections
  .filter((section) => section.id !== 'us-quiz' && section.id !== 'us-kapanis')
const kapanis = urinerSistem.document.sections.find((section) => section.id === 'us-kapanis')

export default {
  ...urinerSistem,
  slug: 'uriner-sistem-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Üriner Sistem: Ayrıntılı Temel Not',
  subtitle: 'Böbrek anatomisini, nefron taşımalarını, karşı akımı ve su–iyon–pH homeostazını moleküler ayrıntılarıyla eksiksiz öğren.',
  document: {
    ...urinerSistem.document,
    estimated_minutes: 195,
    outcomes: [
      ...urinerSistem.document.outcomes,
      'Filtre edilen yük, atılım ve renal klirens kavramlarını geri emilim–salgılama miktarlarıyla hesaplayabileceksin.',
      'Proksimal tüp, kalın çıkan Henle, distal tüp ve toplama kanalındaki temel taşıyıcıları işlevleriyle eşleştirebileceksin.',
      'Vasa recta, üre geri dönüşümü ve ADH’nin medulla gradyanını koruyup kullanmadaki rollerini açıklayabileceksin.',
      'Azotlu atıkları toksisite, su gereksinimi ve enerji maliyeti bakımından karşılaştırabileceksin.',
      'Böbreğin asit–baz telafisini, miksiyon refleksini ve diyaliz–nakil ayrımını mekanizmayla yorumlayabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 4),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(4),
      temelEkBolumler[1],
      kapanis,
    ],
  },
}
