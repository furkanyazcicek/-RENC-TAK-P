import dolasimBagisiklikSistemi from './dolasim-bagisiklik-sistemi.js'

const temelEkBolumler = [
  {
    id: 'db-temel-kan-hemostaz',
    kind: 'deepen',
    title: 'Kanın ayrıntılı yapısı, kan hücresi üretimi, kan grupları ve hemostaz',
    lead: 'Kan; çözünmüş maddeleri taşıyan plazma ile farklı ömür ve görevdeki şekilli elemanların dengeli bir karışımıdır.',
    blocks: [
      {
        id: 'db-temel-kan-prose',
        type: 'prose',
        body: `Kan, sıvı bağ dokudur. Hacminin yaklaşık yarıdan biraz fazlasını **plazma**, kalanını şekilli elemanlar oluşturur. Plazmanın büyük bölümü sudur; proteinler, iyonlar, besinler, hormonlar, gazlar ve metabolik ürünler bu sıvıda taşınır. **Albümin** plazma kolloid ozmotik basıncının korunmasına ve birçok maddenin taşınmasına; **globulinler** taşıma ve antikor işlevlerine; **fibrinojen** pıhtılaşmaya katkı verir. Pıhtılaşma proteinleri uzaklaştırılmış plazmaya serum denir.

Şekilli elemanların hacimce büyük çoğunluğu **alyuvarlardır**. Alyuvarın bikonkav biçimi yüzey/hacim oranını artırır ve dar kılcallardan geçerken esnemesini sağlar. Olgun insan alyuvarı çekirdek ve mitokondri taşımaz; ATP’sini glikolizden sağlar, taşıdığı O₂’yi kendi mitokondrisinde tüketmez. Hemoglobin O₂’yi hem grubundaki Fe²⁺ ile geri dönüşümlü bağlar. Alyuvar ayrıca karbonik anhidraz ve hemoglobin tampon sistemiyle CO₂ taşınması ve pH düzenine katılır.

Alyuvarlar kırmızı kemik iliğinde hematopoetik kök hücrelerden üretilir. Böbrek dokusu O₂ sunumunun azaldığını algıladığında **eritropoietin (EPO)** salgısını artırır; EPO kemik iliğinde alyuvar üretimini uyarır. Demir, B₁₂, folat, protein ve işlevsel kemik iliği gereklidir. Alyuvarlar yaklaşık 120 gün sonra özellikle dalak ve karaciğerde makrofajlarca parçalanır. Demir geri kullanılır; hem halkasının geri kalanı bilirubine dönüştürülüp safra yoluyla uzaklaştırılabilir.

**Akyuvarlar** çekirdeklidir ve dolaşımla dokular arasında geçebilir. Nötrofiller hızlı fagositoz yapan kısa ömürlü hücrelerdir; eozinofiller parazit yanıtı ve alerjide, bazofiller histamin gibi mediyatörlerde, monositlerden gelişen makrofajlar fagositoz–antijen sunumunda, lenfositler ise doğal öldürücü veya özgül B–T yanıtında görev alır. Akyuvar sayısının artması tek başına özgül hastalık adı vermez; hücre alt tipi ve klinik bağlam gerekir.

**Trombositler**, kemik iliğindeki megakaryositlerin sitoplazmik parçalarıdır. Damar hasarından sonra hemostaz üç bağlantılı aşamada yürür. İlk olarak damar düz kası büzülerek kan kaybını azaltır. Açığa çıkan kollajene von Willebrand faktörü aracılığıyla trombositler tutunur, biçim değiştirir ve salgılarıyla yeni trombositleri çağırarak geçici tıkaç oluşturur. Ardından pıhtılaşma faktörleri zinciri protrombini trombine; trombin çözünür fibrinojeni çözünmez **fibrine** dönüştürür. Fibrin ağı tıkacı sağlamlaştırır.

Pıhtı oluşumu kadar yalnız hasarlı bölgeyle sınırlanması ve daha sonra kaldırılması da önemlidir. Sağlam endotel trombosit etkinleşmesini baskılayan sinyaller üretir. Antitrombin ve başka düzenleyiciler pıhtılaşma enzimlerini sınırlar. Doku onarıldıktan sonra plazmin fibrin ağını parçalayarak **fibrinoliz** yapar. Hemostaz yetersizse kanama, gereksiz damar içi pıhtılaşma varsa tromboz riski doğar. Damarda oluşan pıhtı trombüs; kopup başka damarı tıkayan parça emboli olarak adlandırılır.

ABO kan grubu, alyuvar zarındaki A ve B antijenleriyle plazmadaki doğal antikorlara göre belirlenir. A grubunda A antijeni ve anti-B; B grubunda B antijeni ve anti-A; AB grubunda A+B antijeni fakat anti-A/anti-B yok; O grubunda bu iki antijen yok, iki antikor da bulunur. Yanlış alyuvar verildiğinde alıcının antikorları verici alyuvar antijenlerine bağlanıp aglütinasyon ve hemolize yol açabilir.

“O herkese verir, AB herkesten alır” ifadesi yalnız **ABO açısından alyuvar transfüzyonunun** sadeleştirilmiş kuralıdır. Gerçek transfüzyonda Rh ve çok sayıda başka antijen, antikor taraması ve çapraz karşılaştırma dikkate alınır; plazma transfüzyonunda uygunluk mantığı ters yönde değerlendirilir. En güvenli yaklaşım aynı grubun uyumlu bileşenini vermektir.

Rh sisteminde en önemli antijenlerden biri D antijenidir. D taşıyan kişi Rh pozitif, taşımayan Rh negatiftir. Rh negatif birey D antijeniyle karşılaşınca anti-D üretebilir; bu antikor ABO antikorları gibi doğuştan yüksek düzeyde bulunmaz. Rh negatif annenin Rh pozitif fetüse ait alyuvarlarla duyarlanması sonucunda sonraki Rh pozitif gebelikte IgG tipi anti-D plasentadan geçip fetüs alyuvarlarını parçalayabilir. Uygun anti-D immünglobulin uygulaması annenin bağışıklık hafızası geliştirmesini önlemeye yardımcı olan **pasif bağışıklama** örneğidir.

Kan grubu sorusunda önce kimin alyuvarı kimin plazmasına girecek diye yön belirlenir. Vericinin alyuvar antijeni ile alıcının plazma antikoru karşılaşmamalıdır. A grubu alyuvar, anti-A taşıyan B veya O alıcıya verilirse çökelme beklenir; O alyuvarında A–B antijeni olmadığı için ABO bakımından daha geniş uyumluluk vardır.`,
      },
      {
        id: 'db-temel-kan-map',
        type: 'concept_map',
        title: 'Kan bileşeninden taşıma, savunma ve onarıma',
        intro: 'Plazma ve şekilli elemanlar aynı damar içinde farklı görevleri tamamlar.',
        nodes: [
          { id: 'plazma', label: 'Plazma', detail: 'Su, protein ve çözünmüş maddeler' },
          { id: 'alyuvar', label: 'Alyuvar', detail: 'Hemoglobinle gaz taşıma' },
          { id: 'akyuvar', label: 'Akyuvar', detail: 'Doğal ve özgül savunma' },
          { id: 'trombosit', label: 'Trombosit', detail: 'Geçici tıkaç' },
          { id: 'fibrin', label: 'Fibrin ağı', detail: 'Pıhtıyı sağlamlaştırma' },
          { id: 'ilik', label: 'Kırmızı kemik iliği', detail: 'Hematopoetik kök hücre' },
        ],
        links: [
          { from: 'ilik', to: 'alyuvar', label: 'EPO ile üretim' },
          { from: 'ilik', to: 'akyuvar', label: 'savunma soyları' },
          { from: 'ilik', to: 'trombosit', label: 'megakaryosit parçaları' },
          { from: 'plazma', to: 'fibrin', label: 'fibrinojen taşır' },
          { from: 'trombosit', to: 'fibrin', label: 'pıhtı yüzeyi ve tıkaç' },
          { from: 'akyuvar', to: 'plazma', label: 'sitokin ve antikorlarla iletişim' },
        ],
        caption: 'Kan hücreleri kemik iliğinde üretilir; plazma ortamında taşınır ve doku gereksinimine göre etkinleşir.',
      },
      {
        id: 'db-temel-abo-table',
        type: 'table',
        title: 'ABO alyuvar transfüzyonu mantığı',
        columns: ['Kan grubu', 'Alyuvar antijeni', 'Plazma antikoru', 'ABO bakımından alyuvar alabilir'],
        rows: [
          ['A', 'A', 'Anti-B', 'A, O'],
          ['B', 'B', 'Anti-A', 'B, O'],
          ['AB', 'A ve B', 'Yok', 'A, B, AB, O'],
          ['O', 'A/B yok', 'Anti-A ve anti-B', 'O'],
        ],
        caption: 'Tablo yalnız ABO açısından alyuvar bileşeni içindir; Rh ve çapraz karşılaştırma ayrıca gerekir.',
      },
      {
        id: 'db-temel-kan-example',
        type: 'worked_example',
        title: 'Transfüzyon uyumunu antijen–antikorla çöz',
        question: 'A Rh(+) alyuvarı, B Rh(−) bir alıcıya verilebilir mi?',
        steps: [
          { title: 'ABO antijenini bul', body: 'Verici alyuvar A antijeni taşır.' },
          { title: 'Alıcının antikorunu bul', body: 'B grubu alıcının plazmasında anti-A bulunur; verici alyuvarla reaksiyon verir.' },
          { title: 'Rh durumunu ekle', body: 'Alıcı Rh negatif, verici Rh pozitif olduğundan D antijeni de uyumsuzluk ve duyarlanma riski taşır.' },
        ],
        answer: 'Hayır. ABO yönünden anti-A ile A antijeni karşılaşır; Rh yönünden de uygun değildir.',
        takeaway: 'Önce ABO, sonra Rh; her zaman verici alyuvar antijeni–alıcı plazma antikoru yönünde düşün.',
      },
      {
        id: 'db-temel-kan-trap',
        type: 'trap',
        title: 'Serum ile plazmayı aynı sanmak',
        wrong: '“Serum, kan hücreleri uzaklaştırılmış ve bütün pıhtılaşma proteinlerini taşıyan plazmadır.”',
        right: 'Plazma pıhtılaşma faktörlerini içerir; serum pıhtılaşma sonrası geriye kalan, fibrinojen gibi tüketilmiş faktörleri taşımayan sıvıdır.',
        body: 'İki sıvının hücre içermemesi, protein içeriklerinin tamamen aynı olduğu anlamına gelmez.',
      },
    ],
  },
  {
    id: 'db-temel-kontrol-immunoloji',
    kind: 'deepen',
    title: 'Dolaşım kontrolü, lenfoid organlar ve özgül bağışıklığın hücresel ayrıntısı',
    lead: 'Basınç–akım dengesi sinir, böbrek ve hormonlarla; bağışıklık dengesi ise antijen sunumu, klonal seçilim ve toleransla korunur.',
    blocks: [
      {
        id: 'db-temel-kontrol-immunoloji-prose',
        type: 'prose',
        body: `Bir organdan geçen kan akımı kabaca basınç farkının damar direncine oranına bağlıdır. Damar yarıçapındaki küçük değişim direnci güçlü biçimde değiştirir; bu nedenle arteriyol düz kası organ dağılımının ana ayarlayıcısıdır. Yerel CO₂, H⁺, düşük O₂, adenozin ve ısı artışı birçok dokuda arteriyol genişlemesine katkı vererek metabolik gereksinime uygun akımı artırır. Sempatik sinir sistemi ve hormonlar ise organlar arasında daha genel dağılım yapabilir.

Atardamar basıncının temel belirleyicileri **kalp debisi × toplam periferik direnç** olarak özetlenebilir. Kalp debisi kalp hızı ile atım hacminin çarpımıdır. Atım hacmi; dolum sonu hacmi yani ön yük, kasılma gücü ve kanın karşı pompalandığı art yükten etkilenir. Venöz dönüş arttığında kalp lifleri fizyolojik sınırlarda daha çok gerilir ve daha güçlü kasılır; bu Frank–Starling mekanizması iki ventrikülün debisini eşlemeye yardım eder.

Aort kavsi ve karotis sinüsündeki **baroreseptörler** damar duvarı gerilmesini algılar. Basınç aniden yükselirse beyin sapına giden impuls artar; sempatik etkinlik azalır, parasempatik etkinlik artar, kalp hızı–kasılma gücü ve damar direnci düşme yönüne gider. Basınç düşünce yanıt tersine döner. Barorefleks saniyeler–dakikalar içinde çalışan kısa süreli düzenlemedir; uzun süreli ortalama basıncın temel kontrolünde böbreğin Na⁺–su dengesi belirleyicidir.

Böbreğe giden kan veya NaCl sunumu azaldığında renin salınabilir. Renin–anjiyotensin–aldosteron sistemi anjiyotensin II ile damar daralmasını, aldosteron ve başka yollarla Na⁺–su tutulmasını artırarak basıncı destekler. ADH su geri emilimini artırabilir; kalp kulakçıklarının gerilmesiyle salınan natriüretik peptitler Na⁺–su atımını destekleyici karşı düzenleme sağlar. “Tansiyon yalnız kalbin hızıdır” yanlıştır; damar direnci ve dolaşan hacim de zorunlu değişkenlerdir.

Lenf sistemi sıvı dönüşü dışında bağışıklık hücrelerinin örgütlendiği bir ağdır. **Birincil lenfoid organlar** kemik iliği ve timustur. B lenfositler kemik iliğinde, T lenfosit öncüleri timusta olgunlaşır ve öz yapılara aşırı tepki veren klonların önemli bölümü elenir. **İkincil lenfoid organlar** lenf düğümleri, dalak ve mukozayla ilişkili lenfoid dokulardır; olgun lenfositlerin antijenle karşılaşma ve çoğalma alanlarıdır.

Lenf düğümü doku sıvısından gelen lenfi süzer; dalak ise kanı süzer, yaşlı alyuvarların kaldırılmasına ve kanda taşınan antijenlere karşı yanıta katılır. Timus çocuklukta daha aktiftir; yaşla küçülmesi T hücrelerinin tamamen yok olduğu anlamına gelmez. Bademcik ve bağırsak lenfoid dokuları giriş yüzeylerinde örnekleme yapar. Lenfoid organlar mikrobu mekanik bir filtre gibi tek başına yok etmez; hücrelerin karşılaşma, sunum ve klonal çoğalma olasılığını artırır.

Doğal bağışıklık hücreleri mikroplara ait ortak moleküler örüntüleri örüntü tanıma reseptörleriyle algılar. Fagosit mikrobu yutar, lizozomla parçalar ve bazı parçaları yüzeyindeki **MHC II** üzerinde yardımcı T hücresine sunabilir. Yardımcı T hücresi kendi özgül reseptörüyle antijen–MHC birleşimini ve gerekli eş uyarıları tanıdığında çoğalır; sitokinleri B hücresi, makrofaj ve sitotoksik T yanıtını düzenler.

Çekirdekli vücut hücrelerinin çoğu hücre içinde üretilen protein parçalarını **MHC I** üzerinde sergiler. Virüsle enfekte veya anormal hücrede yabancı parça MHC I ile gösterildiğinde uygun sitotoksik T klonu hedef hücreyi apoptoza yöneltebilir. Sitotoksik T hücresi serbest virüsü antikor gibi bağlayıp etkisizleştirmez; enfekte hücreyi ortadan kaldırarak üretim kaynağını keser. Doğal öldürücü hücreler ise klasik antijene özgü klonal seçilim gerektirmeden stresli veya MHC I ifadesi bozulmuş hücreleri öldürebilir.

B hücresi kendi yüzey reseptörüne uygun antijeni bağlar, içeri alıp MHC II ile sunabilir. Uygun yardımcı T desteğiyle klonal çoğalma başlar; **plazma hücreleri** çok miktarda antikor salgılar, **hafıza B hücreleri** uzun süre kalır. Antikorun antijene bağlanan değişken bölgesi özgüllüğü, sabit bölgesi fagosit ve komplemanla etkileşimi belirler. Antikorlar nötralizasyon, kümelendirme, çöktürme, opsonizasyon ve kompleman etkinleşmesi yapabilir; mikrobu doğrudan fagosite etmez.

Birincil yanıtta özgül klonların seçilip çoğalması zaman alır; önce IgM, sonra sınıf değişimiyle başka antikor tipleri görülebilir. Hafıza hücreleri nedeniyle ikincil yanıt daha kısa gecikmeli, daha yüksek ve daha uzun sürelidir. Rapel aşı dozu bu hafıza yanıtını güçlendirebilir. Aşı mikropla hiç karşılaşılmayacağı garantisi değil; hastalık ve ağır sonuç riskini azaltacak hazır hafıza oluşturma stratejisidir.

Bağışıklık **toleransı**, lenfositlerin öz yapılara zarar vermemesini sağlayan eleme ve baskılama mekanizmalarıdır. Gelişim sırasında öz antijene güçlü bağlanan birçok klon öldürülür veya işlevsizleştirilir; düzenleyici T hücreleri çevresel toleransa katkı verir. Tolerans bozulursa otoimmünite, zararsız çevresel antijene orantısız yanıt gelişirse alerji, patojen ya da tümöre yeterli yanıt oluşmazsa bağışıklık yetersizliği söz konusu olabilir.

İnflamasyon doğal savunmanın koruyucu yanıtıdır. Histamin ve başka mediyatörler damar genişlemesi–geçirgenlik artışı yapar; kızarıklık, ısı, şişlik ve ağrı oluşur. Ateş, hipotalamustaki ayar noktasının sitokin–prostaglandin etkisiyle yükselmesidir; vücut bu yeni noktaya ulaşana kadar üşüme ve titreme görülebilir. Her inflamasyon enfeksiyon değildir; travma ve otoimmün hasar da inflamasyon oluşturabilir.`,
      },
      {
        id: 'db-temel-immun-map',
        type: 'concept_map',
        title: 'Antijen girişinden hafıza yanıtına bağışıklık ağı',
        intro: 'Doğal yanıt etkeni sınırlar ve özgül klonlara bilgi taşır; özgül yanıt hedefe göre antikor veya hücre öldürme kolunu seçer.',
        nodes: [
          { id: 'bariyer', label: 'Bariyer ve doğal tanıma', detail: 'Deri, mukoza, fagosit' },
          { id: 'sunum', label: 'Antijen sunumu', detail: 'MHC II ve yardımcı T' },
          { id: 'b', label: 'B lenfosit', detail: 'Plazma ve hafıza B' },
          { id: 'antikor', label: 'Antikor', detail: 'Nötralizasyon ve işaretleme' },
          { id: 'tc', label: 'Sitotoksik T', detail: 'MHC I üzerinden hedef hücre' },
          { id: 'hafiza', label: 'İmmün hafıza', detail: 'Hızlı ikincil yanıt' },
        ],
        links: [
          { from: 'bariyer', to: 'sunum', label: 'fagositoz ve işleme' },
          { from: 'sunum', to: 'b', label: 'yardımcı T desteği' },
          { from: 'b', to: 'antikor', label: 'plazma hücresi salgılar' },
          { from: 'sunum', to: 'tc', label: 'klonal etkinleşmeyi destekler' },
          { from: 'b', to: 'hafiza', label: 'hafıza B bırakır' },
          { from: 'tc', to: 'hafiza', label: 'hafıza T bırakır' },
        ],
        caption: 'Doğal ve özgül bağışıklık ayrı duvarlar değil, antijen sunumu ve sitokinlerle bağlanan savunma katmanlarıdır.',
      },
      {
        id: 'db-temel-mhc-compare',
        type: 'compare',
        title: 'MHC I ve MHC II üzerinden iki T hücresi yolu',
        columns: ['MHC I', 'MHC II'],
        rows: [
          { label: 'Başlıca taşıyan hücre', values: ['Çekirdekli vücut hücrelerinin çoğu', 'Profesyonel antijen sunan hücreler'] },
          { label: 'Gösterilen kaynak', values: ['Hücre içi protein parçaları', 'Yutulup işlenmiş dış kaynaklı antijen'] },
          { label: 'Tanıyan T hücresi', values: ['Sitotoksik T', 'Yardımcı T'] },
          { label: 'Temel sonuç', values: ['Enfekte/anormal hedefin öldürülmesi', 'B, T ve makrofaj yanıtının düzenlenmesi'] },
        ],
        insight: 'MHC, antijen parçasını T hücresine sergileyen platformdur; antijenin serbest hâlde dolaşması T hücresinin etkinleşmesi için tek başına yeterli değildir.',
      },
      {
        id: 'db-temel-basinç-check',
        type: 'checkpoint',
        question: 'Ayağa hızla kalkınca arter basıncı kısa süre düşerse barorefleks hangi yönde yanıt verir?',
        hint: 'Karotis–aort gerilimi, sempatik etkinlik ve kalp debisini sırala.',
        answer: 'Baroreseptör gerilimi ve beyin sapına impuls azalır. Sempatik etkinlik artıp parasempatik etkinlik azalır; kalp hızı ve kasılma gücü, venöz tonus ve birçok damarda direnç artarak basıncı toparlar.',
      },
      {
        id: 'db-temel-immun-trap',
        type: 'trap',
        title: 'Antikorun enfekte hücreyi fagosite ettiğini sanmak',
        wrong: '“Antikor mikrobu ve enfekte hücreyi içine alıp sindirir.”',
        right: 'Antikor bağlanıp nötralize veya işaretleme yapar; fagositozu nötrofil–makrofaj, enfekte hücrenin özgül öldürülmesini sitotoksik T yürütür.',
        body: 'Moleküler tanıma ürünüyle hücresel yok etme mekanizmasını ayır.',
      },
    ],
  },
]

const interaktifBolumler = dolasimBagisiklikSistemi.document.sections
  .filter((section) => section.id !== 'db-quiz' && section.id !== 'db-kapanis')
const kapanis = dolasimBagisiklikSistemi.document.sections.find((section) => section.id === 'db-kapanis')

export default {
  ...dolasimBagisiklikSistemi,
  slug: 'dolasim-bagisiklik-sistemi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Dolaşım ve Bağışıklık Sistemi: Ayrıntılı Temel Not',
  subtitle: 'Kalp ve damar akımını, kan–lenf dengesini, hemostazı ve doğal–özgül bağışıklığı yapıdan moleküle eksiksiz öğren.',
  document: {
    ...dolasimBagisiklikSistemi.document,
    estimated_minutes: 195,
    outcomes: [
      ...dolasimBagisiklikSistemi.document.outcomes,
      'ABO ve Rh kan gruplarında antijen–antikor ilişkisini ve alyuvar transfüzyon uyumunu çözebileceksin.',
      'Hematopoez, EPO kontrolü, trombosit tıkacı, pıhtılaşma ve fibrinoliz basamaklarını ilişkilendirebileceksin.',
      'Kalp debisi, periferik direnç, barorefleks ve böbrek–hormon kontrolüyle kan basıncını açıklayabileceksin.',
      'Birincil ve ikincil lenfoid organları olgunlaşma ve antijenle karşılaşma işlevleriyle ayırabileceksin.',
      'MHC I–sitotoksik T ve MHC II–yardımcı T yollarını; antikor işlevleri ve toleransla birlikte yorumlayabileceksin.',
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
