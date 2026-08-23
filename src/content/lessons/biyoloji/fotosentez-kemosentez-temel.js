import fotosentezKemosentez from './fotosentez-kemosentez.js'

const temelEkBolumler = [
  {
    id: 'fk-temel-c3-c4-cam',
    kind: 'deepen',
    title: 'Fotorespirasyon ve karbon yoğunlaştırma: C3, C4 ve CAM yolları',
    lead: 'RuBisCO yalnız CO₂ ile değil O₂ ile de tepkimeye girebilir; sıcak ve kurak koşullardaki bitkiler karbonu yoğunlaştırarak bu kaybı sınırlar.',
    blocks: [
      {
        id: 'fk-temel-c3-c4-cam-prose',
        type: 'prose',
        body: `Calvin döngüsünde CO₂’yi RuBP’ye bağlayan **RuBisCO**, karboksilaz etkinliğinin yanında oksijenaz etkinliği de gösterebilir. Enzim CO₂ yerine O₂’yi RuBP’ye bağladığında bir üç karbonlu ürün ile iki karbonlu fosfoglikolat oluşur. Fosfoglikolat kloroplast, peroksizom ve mitokondri arasında ilerleyen geri kazanım yoluna girer; ATP ve indirgeme gücü harcanır, daha önce bağlanmış karbonun bir bölümü CO₂ olarak kaybedilir. Işıkta başlayan ve O₂ tüketip CO₂ çıkarabilen bu süreç **fotorespirasyon**dur.

Fotorespirasyon mitokondrideki hücresel solunumla aynı değildir. Şekerden yüksek miktarda ATP elde etmez; RuBisCO’nun oksijenaz tepkimesinin ürünlerini kurtarmaya çalışan maliyetli bir yoldur. Yine de tamamen “işlevsiz hata” sayılmaz; bazı koşullarda aşırı indirgenme ve ışık hasarını azaltmaya, azot metabolizmasıyla bağlantı kurmaya katkıda bulunabilir. Sınav düzeyindeki temel sonuç, net karbon kazanımını ve fotosentetik verimi düşürmesidir.

RuBisCO’nun CO₂ ve O₂ arasında seçimi yaprak içindeki gaz oranına ve sıcaklığa bağlıdır. Sıcaklık yükseldikçe CO₂’nin suda çözünürlüğü O₂’ye göre daha hızlı azalır ve enzimin CO₂ seçiciliği düşer. Kuraklıkta stomalar kapanınca dışarıdan CO₂ girişi azalır; ışık tepkimelerinde ve fotorespirasyonda O₂ bulunmaya devam eder. Yaprak içi CO₂/O₂ oranı düştüğünde fotorespirasyon artar. Bu nedenle sıcak, aydınlık ve kurak koşullar C3 bitkileri için özellikle elverişsizdir.

**C3 bitkilerinde** CO₂ doğrudan mezofil hücresinin Calvin döngüsünde RuBisCO tarafından bağlanır. İlk kararlı ürün üç karbonlu olduğu için C3 adı verilir. Buğday, pirinç, arpa, patates ve çoğu ılıman bölge bitkisi C3’tür. Serin–nemli koşullarda ve CO₂ yeterliyken ek bir karbon yoğunlaştırma mekanizmasının enerji maliyetini taşımadıkları için verimli olabilirler. Sıcak ve kurak koşulda stomaların kapanması fotorespirasyonu artırır.

**C4 bitkilerinde** karbon fiksasyonu mekânsal olarak iki hücre tipi arasında ayrılır. Mezofil hücresinde PEP karboksilaz CO₂’den oluşan bikarbonatı üç karbonlu PEP’e bağlar ve dört karbonlu oksaloasetat oluşturur; bu molekül malat veya aspartata çevrilir. Dört karbonlu bileşik demet kını hücresine taşınır, burada CO₂ bırakır. Calvin döngüsü ve RuBisCO yüksek CO₂ derişimli demet kını hücresinde çalışır. Üç karbonlu taşıyıcı mezofile döner, ATP harcanarak PEP yenilenir.

PEP karboksilazın CO₂’ye ilgisi yüksektir ve oksijenaz etkinliği yoktur. Demet kınında CO₂ yoğunlaştırılması RuBisCO çevresindeki CO₂/O₂ oranını artırır ve fotorespirasyonu büyük ölçüde azaltır. Mısır, şeker kamışı ve sorgum C4 örnekleridir. Yaprak damarlarını çevreleyen belirgin demet kını ve onun dışındaki mezofil halkası **Kranz anatomisi** olarak adlandırılır. C4 yolu her bağlanan karbon için ek ATP gerektirir; buna karşılık sıcak, güçlü ışıklı ve suyun sınırlı olduğu koşullarda fotorespirasyon kaybını azaltarak avantaj sağlar.

**CAM bitkilerinde** ilk CO₂ fiksasyonu ile Calvin döngüsü aynı hücrede fakat farklı zamanlarda gerçekleşir. Gece stomalar açılır; PEP karboksilaz CO₂’yi dört karbonlu organik aside bağlar ve asit vakuolde depolanır. Gündüz stomalar kapalıyken organik asit parçalanır, açığa çıkan CO₂ RuBisCO ve Calvin döngüsüne verilir. Böylece gaz alışverişi serin ve nemli geceye taşınır, gündüz su kaybı azalır. Kaktüs, ananas ve birçok sukulent CAM örneğidir.

C4 ile CAM’ın ortak noktası, CO₂’yi ilk olarak PEP karboksilazla dört karbonlu bileşiğe bağlayıp RuBisCO yakınında yoğunlaştırmalarıdır. Ayrım, **C4’te mekânsal**, **CAM’da zamansal** iş bölümüdür. C4’te mezofil ve demet kını hücreleri aynı anda; CAM’da aynı hücre gece ve gündüz farklı görev yapar. CAM çok yüksek su kullanım verimi sağlar fakat gece alınabilen CO₂ ve depolama kapasitesi büyümeyi sınırlayabilir.

Su kullanım verimi, kaybedilen su başına kazanılan karbonla değerlendirilir. C4 ve özellikle CAM bitkileri stomaları daha az açık tutarak suyu korur. Ancak “C4 her koşulda C3’ten hızlıdır” yanlıştır. Serin, gölgeli, su ve CO₂ bakımından uygun ortamda C4’ün ek ATP maliyeti avantajı azaltabilir. C3–C4–CAM ayrımı üstünlük sıralaması değil, farklı çevresel koşullarda enerji, karbon ve su arasındaki takastır.

Atmosferik CO₂ artışı C3 bitkilerinde RuBisCO’nun karboksilaz tepkimesini destekleyip fotorespirasyonu azaltabilir; fakat büyüme sonsuz artmaz. Azot, fosfor, su, sıcaklık, kök alanı ve ürünlerin taşınması yeni sınırlayıcı olur. C4 bitkileri zaten CO₂ yoğunlaştırdığı için yalnız CO₂ artışına C3 kadar güçlü yanıt vermeyebilir. Tarımsal üretim sorularında minimum yasası her zaman geçerlidir.`,
      },
      {
        id: 'fk-temel-c3-map',
        type: 'concept_map',
        title: 'Kuraklık koşulundan karbon kaybına ve uyuma',
        intro: 'Stoma davranışı yaprak içi gaz oranını; gaz oranı RuBisCO’nun hangi tepkimeyi yapacağını belirler.',
        nodes: [
          { id: 'kurak', label: 'Sıcaklık ve su kaybı', detail: 'Stoma kapanma baskısı' },
          { id: 'stoma', label: 'Stomalar kapanır', detail: 'CO₂ difüzyonu azalır' },
          { id: 'oran', label: 'CO₂/O₂ oranı düşer', detail: 'RuBisCO çevresi' },
          { id: 'foto', label: 'Fotorespirasyon artar', detail: 'ATP harcanır, CO₂ kaybedilir' },
          { id: 'c4', label: 'C4: mekânsal yoğunlaştırma', detail: 'Mezofil → demet kını' },
          { id: 'cam', label: 'CAM: zamansal yoğunlaştırma', detail: 'Gece → gündüz' },
          { id: 'net', label: 'Net karbon kazanımı', detail: 'Çevre ve enerji maliyetine bağlı' },
        ],
        links: [
          { from: 'kurak', to: 'stoma', label: 'su koruma yanıtı' },
          { from: 'stoma', to: 'oran', label: 'CO₂ girişini sınırlar' },
          { from: 'oran', to: 'foto', label: 'oksijenazı destekler' },
          { from: 'foto', to: 'net', label: 'azaltır' },
          { from: 'c4', to: 'oran', label: 'RuBisCO çevresinde CO₂ artırır' },
          { from: 'cam', to: 'stoma', label: 'gaz alışverişini geceye taşır' },
          { from: 'c4', to: 'net', label: 'ek ATP maliyeti taşır' },
          { from: 'cam', to: 'net', label: 'su korur, alım hızını sınırlar' },
        ],
        caption: 'Karbon yoğunlaştırma fotorespirasyonu azaltır; bunun karşılığında enerji veya büyüme hızı maliyeti oluşur.',
      },
      {
        id: 'fk-temel-c-yollari-compare',
        type: 'compare',
        title: 'C3, C4 ve CAM karbon bağlama stratejileri',
        columns: ['C3', 'C4', 'CAM'],
        rows: [
          { label: 'İlk bağlayan enzim', values: ['RuBisCO', 'PEP karboksilaz', 'PEP karboksilaz (gece)'] },
          { label: 'İlk kararlı ürün', values: ['3 karbonlu', '4 karbonlu', '4 karbonlu organik asit'] },
          { label: 'İş bölümü', values: ['Ayrı yoğunlaştırma yok', 'Mezofil–demet kını arasında mekânsal', 'Gece–gündüz arasında zamansal'] },
          { label: 'Stoma davranışı', values: ['Genellikle gündüz açık', 'Gündüz daha sınırlı açıklık yeterli', 'Gece açık, gündüz kapalı'] },
          { label: 'Güçlü olduğu koşul', values: ['Serin/nemli, orta ışık', 'Sıcak, güçlü ışık', 'Çok kurak ortam'] },
          { label: 'Temel maliyet', values: ['Fotorespirasyon riski', 'Ek ATP', 'Yavaş CO₂ alımı/depolama sınırı'] },
        ],
        insight: 'C4 mekânı, CAM zamanı ayırır; ikisi de RuBisCO’ya yoğun CO₂ sunmayı amaçlar.',
      },
      {
        id: 'fk-temel-cam-check',
        type: 'checkpoint',
        question: 'Bir CAM bitkisinde gece CO₂ alınmasına rağmen Calvin döngüsünün başlıca gündüz sürmesi nasıl mümkündür?',
        hint: 'Gece alınan karbonun vakuolde hangi biçimde tutulduğunu düşün.',
        answer: 'Gece PEP karboksilazla bağlanan karbon organik asit olarak depolanır. Gündüz asit parçalanıp CO₂ salar; ışık tepkimelerinin ATP ve NADPH’siyle Calvin döngüsü çalışır.',
      },
    ],
  },
  {
    id: 'fk-temel-olcum-uretim',
    kind: 'deepen',
    title: 'Fotosentezi ölçmek ve kanıtlamak: gaz değişimi, ürün birikimi ve birincil üretim',
    lead: 'Fotosentez doğrudan tek bir cihazla “görülmez”; CO₂ tüketimi, O₂ üretimi, kuru kütle, pigment sinyali ve işaretli atomlar farklı basamakları ölçer.',
    blocks: [
      {
        id: 'fk-temel-olcum-prose',
        type: 'prose',
        body: `Fotosentez hızı birim zaman ve çoğu kez birim yaprak alanı başına **CO₂ alımı**, **O₂ çıkışı** veya organik madde birikimiyle tahmin edilir. Hiçbiri her koşulda sürecin tamamını kusursuz göstermez. Gaz değişimi hızlı yanıt verir fakat fotosentezle birlikte solunum ve fotorespirasyon da gazları değiştirir. Kuru kütle daha uzun dönem net karbon birikimini gösterir fakat mineral alımı ve başlangıç depoları dikkate alınmalıdır.

Işıkta ölçülen net CO₂ alımı, brüt fotosentetik karbon fiksasyonundan solunum ve diğer karbon kayıpları çıkarıldıktan sonra kalan değerdir. Basitleştirilmiş biçimde **net fotosentez = brüt fotosentez − solunum** denir. Karanlıkta fotosentez durduğu için ölçülen CO₂ çıkışı yaklaşık solunum hızını verebilir; fakat ışıkta solunumun karanlıktakiyle tamamen aynı kaldığı varsayımı her zaman kesin değildir. Deney sorularında verilen varsayıma göre işlem yapılmalıdır.

**Işık kompensasyon noktası**, fotosentezle bağlanan CO₂ miktarının solunumla çıkarılan CO₂’ye eşit olduğu ışık düzeyidir; net gaz alışverişi sıfırdır. Bu noktada fotosentez ve solunum durmaz, karşılıklı akışlar eşitlenir. Kompensasyon noktasının altında bitki depolarını tüketir; üstünde net organik madde biriktirebilir. Gölge bitkileri düşük ışıkta çalışmaya uyumlu olduklarından çoğu kez daha düşük kompensasyon noktasına sahiptir.

**Işık doygunluk noktası**, ışık artışının artık fotosentez hızını artırmadığı düzeydir. Bu plato pigmentlerin zorunlu olarak bozulduğu anlamına gelmez; CO₂ sunumu, sıcaklık, enzim kapasitesi veya elektron alıcılarının yenilenmesi sınırlayıcı olmuştur. Çok yüksek ışık, fotosistemlerin işleyebileceğinden fazla enerji verir ve **fotoinhibisyon** oluşturabilir. Karotenoidler, ksantofil döngüsü, ısı olarak enerji dağıtımı ve hasarlı FS II proteinlerinin yenilenmesi fotokoruma mekanizmalarıdır.

Sıcaklığın etkisi ışığı soğurma basamağından çok enzimatik karbon tepkimeleri, zar özellikleri, stoma davranışı ve fotorespirasyon üzerinden görülür. Düşük sıcaklık enzim hızını azaltır; optimumun üzerinde protein işlevi ve su dengesi bozulur, stomalar kapanabilir. Eğri çoğu kez optimumludur. Işık ve CO₂ yeterli değilse sıcaklığın artırılması belirgin sonuç vermeyebilir; çünkü sınırlayıcı başka etmendir.

Su hem fotolizin substratı hem hücresel turgorun kaynağıdır; fakat kuraklığın fotosenteze ilk büyük etkisi çoğu kez fotolizde su kalmaması değil stomaların kapanıp CO₂ girişini azaltmasıdır. Uzun kuraklık klorofil, tilakoit, enzim ve yaprak alanını da etkiler. Mineral eksikliklerinde azot enzim ve klorofil sentezini; magnezyum klorofil yapısını; demir elektron taşıma ve klorofil oluşumunu; fosfor ATP ve nükleik asit metabolizmasını sınırlar. Bir mineral klorofilin doğrudan atomu olmasa da sentez için gerekli olabilir.

Bir deneyde yalnız incelenen faktör değiştirilir, diğerleri kontrol edilir. Işık şiddetini lambayı yaklaştırarak artırmak aynı zamanda sıcaklığı yükseltebilir; su banyosu sıcaklık kontrolü sağlar. Su bitkisinden çıkan kabarcık sayısı O₂ üretimine yaklaşık gösterge olabilir ama kabarcık hacimleri eşit olmayabilir ve O₂’nin bir bölümü suda çözünür. Daha güvenilir ölçümde gaz hacmi, çözünmüş oksijen probu veya CO₂ sensörü kullanılır. Tekrar, rastgeleleştirme ve hata çubukları biyolojik değişkenliği görünür kılar.

Pigmentlerin **soğurma spektrumu** saf pigment çözeltisine farklı dalga boyları gönderilerek; **etki spektrumu** farklı dalga boylarında fotosentez hızı ölçülerek bulunur. İki grafiğin benzerliği pigmentlerin fotosenteze katkısını destekler. Engelmann deneyinde ipliksi algin farklı renklerle aydınlatılan bölgelerine oksijen seven bakterilerin toplanması, yerel O₂ üretimini biyolojik gösterge olarak kullanır. Deney fotosentezin kırmızı ve mor-mavi ışıkta yüksek olduğunu gösterir; bakterilerin fotosentez yaptığını göstermez.

İşaretli izotoplar atom kaynağını belirler. H₂¹⁸O kullanıldığında çıkan O₂’de ağır oksijen görülmesi oksijen gazının sudan geldiğini; ¹⁴CO₂ kullanıldığında işaretin önce üç karbonlu ürünlerde, sonra şeker ve diğer organiklerde görülmesi karbon yolunu gösterir. Hill tepkimesinde izole kloroplastların uygun elektron alıcısı ve ışıkta CO₂ olmadan O₂ çıkarabilmesi, suyun parçalanması ve elektron aktarımının karbon fiksasyonundan ayrılabildiğini kanıtlar.

Bir ekosistemde ototrofların belirli zaman ve alanda bağladığı toplam enerji veya organik karbon **brüt birincil üretim (BÜÜ/GPP)** olarak adlandırılır. Üreticilerin kendi solunumu çıkarıldığında **net birincil üretim (NÜÜ/NPP = GPP − R)** kalır. NPP, üretici biyokütlesinde büyüme ve üremeye ayrılan; otçul ve ayrıştırıcılara aktarılabilecek enerji–madde payıdır. Yüksek GPP her zaman yüksek NPP demek değildir; sıcak ortamda üretici solunumu da yüksek olabilir.

Sucul sistemlerde açık–koyu şişe yöntemi kullanılabilir. Başlangıç O₂’si ölçülür. Aydınlık şişede fotosentez ve solunum birlikte gerçekleştiğinden O₂ değişimi net üretimi; karanlık şişede yalnız solunum baskın olduğundan O₂ azalması solunumu gösterir. Basitleştirilmiş hesapta brüt üretim, aydınlık şişedeki net değişime karanlık şişedeki tüketim eklenerek bulunur. Şişeler sıcaklık, süre, plankton yoğunluğu ve diğer koşullar bakımından eş olmalıdır.

Karasal ekosistemlerde biyokütle artışı hasat ve kuru kütleyle; küresel ölçekte uydu yansıması, yaprak alanı, gaz akısı ve modellerle tahmin edilir. Verim kavramı ölçeğe bağlıdır: tek yaprağın anlık CO₂ alımı, bitkinin mevsimlik kuru kütlesi ve ekosistemin yıllık NPP’si aynı ölçüm değildir. Grafiği yorumlarken y ekseninin brüt mü net mi, yaprak alanına mı toplam bitkiye mi, anlık mı dönemsel mi olduğunu kontrol etmek gerekir.

Fotosentez, solunum ve depolama aynı anda düşünülmelidir. Bir bitki gündüz fotosentez ve solunum; gece yalnız solunum yapar. Yirmi dört saatlik net kazanç, aydınlık dönemdeki net üretimin karanlık dönemdeki solunum kaybını aşmasına bağlıdır. Bir yaprak gündüz kısa süre pozitif gaz alışverişi gösterse bile bütün bitkinin kök, gövde ve üreme organlarının solunumu hesaba katıldığında toplam karbon dengesi farklı olabilir.`,
      },
      {
        id: 'fk-temel-olcum-map',
        type: 'concept_map',
        title: 'Ölçülen sinyalden biyolojik sonuca',
        intro: 'Her yöntem fotosentezin başka bir çıktısını izler; net ve brüt değerler aynı değildir.',
        nodes: [
          { id: 'isik', label: 'Işık ve çevre koşulları', detail: 'Bağımsız değişkenler' },
          { id: 'isiktep', label: 'Işık tepkimeleri', detail: 'O₂, ATP, NADPH' },
          { id: 'karbon', label: 'Karbon fiksasyonu', detail: 'CO₂ alımı ve organik ürün' },
          { id: 'solunum', label: 'Solunum', detail: 'O₂ tüketimi ve CO₂ çıkışı' },
          { id: 'gaz', label: 'Net gaz değişimi', detail: 'Fotosentez ile kayıpların bileşkesi' },
          { id: 'gpp', label: 'Brüt birincil üretim', detail: 'Toplam bağlanan enerji/karbon' },
          { id: 'npp', label: 'Net birincil üretim', detail: 'GPP − üretici solunumu' },
        ],
        links: [
          { from: 'isik', to: 'isiktep', label: 'foton ve sınırlayıcılar' },
          { from: 'isiktep', to: 'karbon', label: 'ATP ve NADPH sağlar' },
          { from: 'karbon', to: 'gpp', label: 'toplam fiksasyon' },
          { from: 'karbon', to: 'gaz', label: 'CO₂ tüketir' },
          { from: 'solunum', to: 'gaz', label: 'karşıt gaz akışı' },
          { from: 'gpp', to: 'npp', label: 'solunum çıkarılır' },
          { from: 'solunum', to: 'npp', label: 'üretici maliyeti' },
        ],
        caption: 'Gaz probunun verdiği değer çoğu kez net değişimdir; brüt üretim için solunum ayrıca hesaba katılır.',
      },
      {
        id: 'fk-temel-sise-example',
        type: 'worked_example',
        title: 'Açık–koyu şişeden brüt üretimi bul',
        question: 'Başlangıç O₂’si 8 mg/L. Aynı sürede aydınlık şişe 11 mg/L, karanlık şişe 6 mg/L oluyor. Net üretim, solunum ve brüt üretim nedir?',
        steps: [
          { title: 'Aydınlık şişede net değişimi bul', body: '11 − 8 = +3 mg O₂/L; fotosentez ile solunumun net sonucudur.' },
          { title: 'Karanlık şişede solunumu bul', body: '8 − 6 = 2 mg O₂/L tüketilmiştir.' },
          { title: 'Brüt üretimi hesapla', body: 'Brüt = net + solunum = 3 + 2 = 5 mg O₂/L.' },
        ],
        answer: 'Net üretim 3, solunum 2, brüt üretim 5 mg O₂/L’dir.',
        takeaway: 'Karanlık şişedeki azalma solunum maliyetini; aydınlıktaki artış yalnız net kazanımı gösterir.',
      },
      {
        id: 'fk-temel-kompensasyon-trap',
        type: 'trap',
        title: 'Kompensasyon noktasında metabolizmanın durduğunu sanmak',
        wrong: 'Net O₂ veya CO₂ değişimi sıfırsa fotosentez ve solunumun ikisi de sıfırdır.',
        right: 'İki süreç sürer; gaz üretim ve tüketim hızları eşit olduğu için net değişim sıfırdır.',
        body: 'Net değer karşıt akışların farkıdır, olayların yokluğu değildir.',
      },
      {
        id: 'fk-temel-brut-net-check',
        type: 'checkpoint',
        question: 'Bir ekosistemde brüt birincil üretim artarken net birincil üretim neden azalabilir?',
        hint: 'Net üretimin denkleminde brüt üretim dışında hangi akış bulunduğunu düşün.',
        answer: 'Üreticilerin solunum kaybı brüt üretimdeki artıştan daha fazla yükselirse NPP = GPP − R gereği net üretim azalabilir. Sıcaklık artışı solunumu güçlü biçimde yükseltebilir.',
      },
    ],
  },
]

const interaktifBolumler = fotosentezKemosentez.document.sections
  .filter((section) => section.id !== 'fk-quiz' && section.id !== 'fk-kapanis')
const kapanis = fotosentezKemosentez.document.sections.find((section) => section.id === 'fk-kapanis')

export default {
  ...fotosentezKemosentez,
  slug: 'enerji-donusumleri-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Canlılarda Enerji Dönüşümleri: Ayrıntılı Temel Not',
  subtitle: 'Işığın yakalanmasından elektron ve proton akışına, karbon fiksasyonundan C3–C4–CAM yollarına, üretim ölçümlerinden kemosenteze kadar bütün mekanizmayı öğren.',
  document: {
    ...fotosentezKemosentez.document,
    estimated_minutes: 235,
    outcomes: [
      ...fotosentezKemosentez.document.outcomes,
      'Fotorespirasyonu RuBisCO’nun oksijenaz etkinliği, sıcaklık ve stoma kapanmasıyla açıklayabileceksin.',
      'C3, C4 ve CAM bitkilerini ilk enzim, ürün, mekânsal/zamansal ayrım, enerji ve su maliyetiyle karşılaştırabileceksin.',
      'Kompensasyon ve doygunluk noktalarını net gaz değişimi ve sınırlayıcı faktör mantığıyla yorumlayabileceksin.',
      'Gaz değişimi, kuru kütle, etki spektrumu ve işaretli atom deneylerinin neyi doğrudan ölçtüğünü ayırabileceksin.',
      'Brüt ve net birincil üretimi üretici solunumu üzerinden hesaplayabileceksin.',
      'Açık–koyu şişe verilerinden net üretim, solunum ve brüt üretim çıkarabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 4),
      temelEkBolumler[0],
      interaktifBolumler[4],
      temelEkBolumler[1],
      ...interaktifBolumler.slice(5),
      kapanis,
    ],
  },
}
