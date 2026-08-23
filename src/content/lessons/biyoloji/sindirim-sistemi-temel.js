import sindirimSistemi from './sindirim-sistemi.js'

const temelEkBolumler = [
  {
    id: 'ss-temel-duvar-hareket',
    kind: 'deepen',
    title: 'Sindirim kanalı duvarı, hareketler, sfinkterler ve refleksler',
    lead: 'Ağızdan anüse kadar organların görevleri değişse de kanal duvarının temel planı, sinir ağı ve kas hareketleri süreklidir.',
    blocks: [
      {
        id: 'ss-temel-duvar-prose',
        type: 'prose',
        body: `Sindirim kanalının ağız, yutak ve üst yemek borusu gibi bazı bölümleri dışında kalan büyük kısmında ortak bir duvar planı görülür. Lümeni çevreleyen içten dışa dört ana tabaka **mukoza, submukoza, kas tabakası ve seroza/adventisya**dır. Mukoza epitel, lamina propria ve ince düz kas tabakasından oluşur. Epitel; koruma, salgı veya emilim görevine göre bölgeden bölgeye değişir. Lamina propria damar, bağışıklık hücresi ve bağ dokusu taşır. Mukozanın ince kası yüzey hareketlerini düzenler fakat besini tüm kanal boyunca ilerleten ana kas tabakası değildir.

**Submukoza**, daha büyük kan ve lenf damarlarını, bağ dokusunu, bezleri ve submukozal sinir ağını barındırır. Bunun dışında yer alan kas tabakasında çoğunlukla içte dairesel, dışta boyuna düz kas vardır; mide bunlara ek eğik kas tabakasıyla güçlü çalkalama yapar. Kas tabakaları arasındaki miyenterik sinir ağı motiliteyi düzenler. En dıştaki seroza karın boşluğundaki organların sürtünmesini azaltan örtüdür; serozayla örtülü olmayan bazı bölgelerde yapı çevre dokuya adventisyayla tutunur.

Sindirim kanalı kendi duvarında **enterik sinir sistemi** taşır. Bu ağ, gerilme ve lümen içeriğine yanıt veren yerel reflekslerle salgı ve hareketi düzenleyebilir. Parasempatik uyarı genel olarak sindirim hareket ve salgılarını artırıcı, sempatik uyarı azaltıcı yöndedir; ancak gerçek yanıt organ ve reseptöre göre ayrıntılanır. Merkezî sinir sistemi sindirimi etkiler fakat her peristaltik dalga için bilinçli komut gerekmez.

**Peristaltizm**, içeriğin arkasındaki dairesel kasın kasılması ve önündeki bölümün gevşemesiyle ileri itici dalga oluşturur. **Segmentasyon** ise bağırsakta yakın bölgelerin sırayla kasılmasıyla içeriği ileri taşımaktan çok salgılarla karıştırır ve emilim yüzeyiyle temasını artırır. İki hareket birbirinin eş anlamlısı değildir. Açlık dönemindeki göç eden motor kompleks kalıntıları ilerletir; öğün sırasında karıştırma ve yavaş ilerleme baskınlaşır.

Sfinkterler kanal bölümleri arasında tek yönlü ve kontrollü geçiş sağlar. Üst ve alt özofagus sfinkterleri hava girişini ve reflüyü sınırlar; pilor mideden duodenuma boşalmayı porsiyonlar; Oddi sfinkteri safra ve pankreas salgısının duodenuma girişini etkiler; ileoçekal kapak kalın bağırsak içeriğinin geri kaçışını azaltır; iç ve dış anal sfinkter dışkılamayı düzenler. Sfinkterin görevi yalnız “kapatmak” değil, uygun anda açılıp akış hızını ayarlamaktır.

Yutma istemli başlayıp refleksle devam eden üç evrede incelenebilir. **Ağız evresinde** dil lokmayı yutağa iter. **Yutak evresinde** yumuşak damak burun boşluğuna geçişi kapatır, gırtlak yükselir ve epiglot soluk yolunu korumaya yardım eder; üst özofagus sfinkteri açılır. **Yemek borusu evresinde** peristaltik dalga lokmayı mideye taşır. Yutarken solunumun kısa süre durması, besinin hava yoluna kaçmasını azaltan koordinasyonun parçasıdır.

Mide açken kıvrımlı mukozası genişleyebilir. Besin geldiğinde **reseptif gevşeme** depolama kapasitesini artırır. Gövde ve antrumdaki kasılmalar içeriği öğütür; pilora ulaşan büyük parçaların çoğu geri fırlatılarak yeniden karışır. Duodenuma geçen kimusun hızı enerji yoğunluğu, yağ, asitlik ve duodenumun işleme kapasitesine göre sinirsel–hormonal yollarla azaltılabilir. Bu düzenleme ince bağırsağın aşırı asit ve besin yüküyle karşılaşmasını önler.

İnce bağırsak mukozasının kıvrım, villus ve mikrovillusları aynı şey değildir. Dairesel kıvrımlar mukoza ve submukozanın büyük katlarıdır; villuslar mukozanın parmak biçimli uzantıları; mikrovilluslar tek enterositin apikal zar çıkıntılarıdır. Mikrovillusların oluşturduğu **fırçamsı kenarda** disakkaridazlar, peptidazlar ve taşıyıcılar bulunur. Kriptalardaki kök hücreler epiteli sürekli yeniler; Paneth hücreleri mikrobiyal dengeye katkı veren maddeler salgılar, enteroendokrin hücreler hormon üretir.

Kalın bağırsakta villus bulunmaz; derin kriptalar ve çok sayıda mukus salgılayan kadeh hücresi vardır. Kolon segmental hareketlerle su ve iyon emilimine zaman tanır; zaman zaman güçlü kitle hareketleri içeriği rektuma taşır. Rektum gerildiğinde iç anal sfinkter istemsiz gevşer; dış anal sfinkter çizgili kastır ve uygun zamana kadar istemli denetime katkı verir. Dışkılama, sindirilmemiş ve emilmemiş kanal içeriğinin atılmasıdır; hücresel metabolizma atıklarının böbrek, akciğer veya deriyle uzaklaştırıldığı boşaltımla aynı kavram değildir.`,
      },
      {
        id: 'ss-temel-duvar-map',
        type: 'concept_map',
        title: 'Sindirim kanalının ortak duvar ve kontrol planı',
        intro: 'Epitel besinle temas eder; damarlar emileni taşır; kas ve sinir ağları içeriğin zamanını ve yönünü düzenler.',
        nodes: [
          { id: 'mukoza', label: 'Mukoza', detail: 'Koruma, salgı, emilim' },
          { id: 'sub', label: 'Submukoza', detail: 'Damar, bez ve sinir ağı' },
          { id: 'kas', label: 'Kas tabakası', detail: 'Dairesel ve boyuna kas' },
          { id: 'enterik', label: 'Enterik sinir sistemi', detail: 'Yerel refleks ve motilite' },
          { id: 'hareket', label: 'Peristaltizm–segmentasyon', detail: 'İlerletme ve karıştırma' },
          { id: 'sfinkter', label: 'Sfinkterler', detail: 'Bölmeler arası kontrollü akış' },
        ],
        links: [
          { from: 'mukoza', to: 'sub', label: 'emilen ürün damara geçer' },
          { from: 'sub', to: 'enterik', label: 'duyusal ve salgısal ağ taşır' },
          { from: 'enterik', to: 'kas', label: 'kasılmayı düzenler' },
          { from: 'kas', to: 'hareket', label: 'itme ve karıştırma üretir' },
          { from: 'hareket', to: 'sfinkter', label: 'geçişle eşgüdümlenir' },
          { from: 'sfinkter', to: 'mukoza', label: 'uygun ortamı bölgesel tutar' },
        ],
        caption: 'Kanalın her bölümü aynı temel tabakaları farklı oran ve özelleşmelerle kullanır.',
      },
      {
        id: 'ss-temel-hareket-table',
        type: 'compare',
        title: 'Peristaltizm ve segmentasyon',
        columns: ['Peristaltizm', 'Segmentasyon'],
        rows: [
          { label: 'Ana sonuç', values: ['İçeriği ileri iter', 'İçeriği karıştırır'] },
          { label: 'Kas örüntüsü', values: ['Ardışık ilerleyen dalga', 'Komşu segmentlerin dönüşümlü kasılması'] },
          { label: 'Emilime katkı', values: ['Yeni bölgelere taşıma', 'Epitel temasını artırma'] },
          { label: 'Yer çekimi', values: ['Zorunlu değildir', 'Belirleyici değildir'] },
        ],
        insight: 'Taşıma ile karıştırma aynı kas katmanlarını kullanabilir; kasılma örüntüsü işlevi belirler.',
      },
      {
        id: 'ss-temel-yutma-check',
        type: 'checkpoint',
        question: 'Yutma başladıktan sonra lokmanın yemek borusuna geçişi neden yalnız istemli kas hareketi sayılmaz?',
        hint: 'Ağız, yutak ve yemek borusu evrelerini ayır.',
        answer: 'Dil lokmayı istemli olarak geriye iter; fakat yutak ve yemek borusu evreleri büyük ölçüde refleks sinir devreleriyle yürür. Soluk yolunun kapanması, sfinkterlerin açılması ve peristaltizm bilinçli olarak tek tek yönetilmez.',
      },
      {
        id: 'ss-temel-segment-trap',
        type: 'trap',
        title: 'Her bağırsak kasılmasını peristaltizm sanmak',
        wrong: '“Bağırsakta kasılma varsa içerik mutlaka ileri gider.”',
        right: 'Segmentasyon içeriği yerel olarak karıştırıp emilim yüzeyiyle temasını artırabilir; net ileri taşıma peristaltik örüntüyle belirgindir.',
        body: 'Kasın varlığından değil, kasılmanın uzay–zaman düzeninden işlev çıkarılır.',
      },
    ],
  },
  {
    id: 'ss-temel-emilim-sonrasi',
    kind: 'deepen',
    title: 'Vitamin–mineral emilimi, mikrobiyota ve emilim sonrası karaciğer',
    lead: 'Sindirim yalnız makromoleküllerin monomerleşmesi değildir; su, iyon, vitamin ve mikrobiyal ürünlerin seçici emilimi de iç ortamı belirler.',
    blocks: [
      {
        id: 'ss-temel-emilim-sonrasi-prose',
        type: 'prose',
        body: `Su, mineraller ve vitaminler küçük oldukları için enzimle sindirilmez; fakat emilimleri kendiliğinden ve her yerde eşit gerçekleşmez. Su, çözünen madde hareketlerinin oluşturduğu ozmotik gradyanları izleyerek ince ve kalın bağırsakta emilir. Na⁺, Cl⁻, K⁺, Ca²⁺ ve demir gibi iyonların her birinin taşıma ve hormonal kontrolü farklıdır. Çözünen maddelerin etkin emilimi suyun kana geçmesini kolaylaştırır; bağırsakta emilmeyen ozmotik maddeler suyu lümende tutup ishale yol açabilir.

Demirin büyük bölümü duodenum ve üst ince bağırsakta emilir. Enterosite alınan demir hücrede ferritine bağlanarak tutulabilir veya kana verilerek transferrinle taşınabilir. Karaciğer kaynaklı **hepsidin**, demirin enterositten ve depo hücrelerinden kana çıkışını azaltan temel düzenleyicidir. Vücudun demir atma kapasitesi sınırlı olduğundan emilim düzeyindeki kontrol önemlidir.

Ca²⁺ emilimi özellikle ince bağırsakta gerçekleşir ve aktif D vitamini tarafından artırılır. D vitamini yağda çözünen bir vitamin olmakla birlikte Ca²⁺ taşıyıcılarının üretimini etkileyen hormon benzeri etkin bir forma dönüşür. Safra akışının uzun süre bozulması yağ emilimini ve dolaylı olarak D vitamini alımını azaltarak kemik mineral dengesini etkileyebilir. Böylece sindirim, endokrin ve destek–hareket sistemleri birbirine bağlanır.

Yağda çözünen **A, D, E ve K vitaminleri**, lipit sindirim ürünleriyle misellere katılır ve enterosite alınır; çoğu şilomikronla lenfe geçer. Bu nedenle safra veya pankreas lipazı yetersizliğinde yalnız yağ değil bu vitaminlerin emilimi de azalabilir. Suda çözünen B ve C vitaminleri genel olarak taşıyıcılarla portal kana geçer. **B₁₂ vitamini** özel bir istisnadır: midede pariyetal hücrelerin salgıladığı intrinsik faktöre bağlanır ve kompleks terminal ileumda özgül reseptörle emilir. Mide pariyetal hücresi veya ileum hasarı yıllar içinde B₁₂ eksikliğine yol açabilir.

Bağırsak **mikrobiyotası**, özellikle kolonda yaşayan çok çeşitli mikroorganizmalar topluluğudur. İnsan enzimlerinin sindiremediği bazı lifler bakterilerce fermente edilerek asetat, propiyonat ve bütirat gibi kısa zincirli yağ asitlerine dönüştürülebilir. Bu ürünler kolon hücreleri ve diğer dokular için enerji veya sinyal kaynağı olabilir. Mikrobiyota bazı K ve B vitaminlerine katkı verir, patojenlerle yer ve besin rekabeti yapar ve bağışıklık sisteminin gelişimini etkiler.

Mikrobiyota bütün bakterilerin yararlı veya tek tek türlerin daima zararlı olduğu basit bir liste değildir. Beslenme, antibiyotikler, enfeksiyon, yaş ve çevre topluluk yapısını değiştirebilir. Antibiyotikler hedef patojenin yanında yararlı toplulukları da azaltabilir; fırsatçı türlerin çoğalması ve ishal gelişebilir. Probiyotiklerin etkisi suşa ve duruma özgüdür; “her probiyotik herkeste aynı sonucu verir” denemez.

İnce bağırsak epiteli yalnız geçirgen bir süzgeç değildir. Sıkı bağlantılar, mukus, antimikrobiyal maddeler, bağışıklık hücreleri ve kontrollü taşıyıcılar lümenle iç ortam arasındaki seçici bariyeri kurar. Villus hasarında yalnız yüzey azalmaz; fırçamsı kenar enzimleri ve taşıyıcılar da kaybolabilir. Bu nedenle çölyak gibi durumlarda disakkarit sindirimi, vitamin–mineral ve makromolekül ürünü emilimi birlikte etkilenebilir.

Monosakkaritler, amino asitler, kısa zincirli yağ asitlerinin bir bölümü, su ve birçok mineral bağırsak kanından **hepatik portal venle karaciğere** ulaşır. Karaciğer glikozu glikojene çevirebilir veya kana verebilir; amino asitleri protein sentezinde kullanabilir, fazlasının amino grubunu uzaklaştırarak üre oluşumuna katkı verir; zehirli maddeleri biyotransformasyona uğratır; plazma proteinleri, kolesterol ve safra bileşenleri üretir. Böylece karaciğer emilen maddenin genel dolaşıma hangi biçim ve miktarda çıkacağını düzenleyen ilk metabolik duraktır.

Uzun zincirli yağlardan enterositte oluşan şilomikronlar önce lenfe, sonra köprücük altı toplardamar çevresinden kana katılır. Şilomikron trigliseritleri kılcal damarlarda dokulara dağıtıldıktan sonra kalıntıları karaciğer tarafından alınır. “Yağ karaciğere uğramaz” ifadesi yanlıştır; yalnız ilk geçişte portal ven yerine lenf–genel dolaşım yolu kullanılır.

Emilim bozukluğunu çözerken dört basamak ayrılır: lümende sindirim, misel/çözünme, epitelden geçiş ve damar/lenfle taşıma. Pankreas lipazı yoksa yağ hidrolizi; safra yoksa emülsiyon ve misel; villus hasarlıysa yüzey ve taşıyıcı; lenf damarı tıkalıysa şilomikron taşınması bozulur. Benzer yağlı dışkı belirtisi farklı mekanizmalardan doğabilir.`,
      },
      {
        id: 'ss-temel-emilim-map',
        type: 'concept_map',
        title: 'Emilen maddelerin ilk taşıma ve işlenme yolları',
        intro: 'Molekülün suda veya yağda çözünürlüğü, enterositte paketlenmesini ve ilk damar yolunu belirler.',
        nodes: [
          { id: 'suda', label: 'Suda çözünen ürünler', detail: 'Şeker, amino asit, çoğu mineral' },
          { id: 'kan', label: 'Villus kan kılcalı', detail: 'Portal ven yolu' },
          { id: 'karaciger', label: 'Karaciğer', detail: 'İşleme, depolama ve dağıtım' },
          { id: 'yag', label: 'Uzun zincirli lipit', detail: 'Enterositte yeniden trigliserit' },
          { id: 'silo', label: 'Şilomikron', detail: 'Protein–lipit paketi' },
          { id: 'lenf', label: 'Lakteal ve lenf', detail: 'Genel dolaşıma gecikmeli katılım' },
        ],
        links: [
          { from: 'suda', to: 'kan', label: 'epitelden geçer' },
          { from: 'kan', to: 'karaciger', label: 'portal venle' },
          { from: 'yag', to: 'silo', label: 'paketlenir' },
          { from: 'silo', to: 'lenf', label: 'lakteale verilir' },
          { from: 'lenf', to: 'karaciger', label: 'kana ve sonra doku/karaciğere' },
          { from: 'karaciger', to: 'suda', label: 'kan düzeyini düzenler' },
        ],
        caption: 'İlk rota farklı olsa da emilen bütün besinler sonunda dolaşım ve metabolik organlarla bütünleşir.',
      },
      {
        id: 'ss-temel-vitamin-table',
        type: 'table',
        title: 'Özel emilim örnekleri',
        columns: ['Madde', 'Gerekli koşul/yer', 'Bozuklukta beklenen'],
        rows: [
          ['A, D, E, K', 'Safra–misel ve yağ emilimi', 'Yağ malabsorpsiyonunda eksiklik riski'],
          ['B₁₂', 'İntrinsik faktör + terminal ileum', 'Mide/ileum hasarında emilim azalması'],
          ['Demir', 'Duodenum ağırlıklı; hepsidin kontrolü', 'Emilim veya kan kaybı sorununda eksiklik'],
          ['Ca²⁺', 'İnce bağırsak; aktif D vitamini desteği', 'D vitamini veya emilim bozukluğunda azalma'],
          ['Su', 'Ozmotik gradyanı izler', 'Lümende emilmeyen madde varsa ishal'],
        ],
        caption: 'Kimyasal sindirim gerekmemesi, emilimin düzenlenmediği anlamına gelmez.',
      },
      {
        id: 'ss-temel-emilim-example',
        type: 'worked_example',
        title: 'Yağlı dışkının basamağını ayır',
        question: 'Bir kişide pankreas lipazı normal, villus yapısı sağlam; ancak safra kanalı tıkalıdır. Yağ emilimi neden azalır?',
        steps: [
          { title: 'Enzimi kontrol et', body: 'Lipaz üretiliyor olsa da enzimin etkin çalışacağı küçük yağ damlacığı yüzeyi yeterince oluşturulamaz.' },
          { title: 'Taşıma hazırlığını kontrol et', body: 'Safra tuzları azaldığı için sindirim ürünlerinin miselle fırçamsı kenara taşınması bozulur.' },
          { title: 'Sonucu çıkar', body: 'Yağ ve A–D–E–K vitaminlerinin emilimi azalabilir; dışkıda yağ artabilir.' },
        ],
        answer: 'Sorun lipaz veya epitelde değil, yağın emülsifikasyonu ve sindirim ürünlerinin miselle epitele ulaştırılması basamağındadır.',
        takeaway: 'Yağ emilimi = safra ile yüzey/misel + lipaz ile hidroliz + sağlam enterosit + lenf yolu.',
      },
      {
        id: 'ss-temel-mikrop-trap',
        type: 'trap',
        title: 'Mikrobiyotayı sindirim enzimi gibi düşünmek',
        wrong: '“Bağırsak bakterileri insanın bütün sindirimini yapan zorunlu enzim organıdır.”',
        right: 'İnsan enzimleri temel makromolekül sindirimini yürütür; mikrobiyota özellikle sindirilemeyen bazı lifleri fermente eder ve metabolik–bağışıklık katkıları sağlar.',
        body: 'Mikrobiyota önemli bir ortak topluluktur fakat pankreas ve fırçamsı kenar enzimlerinin yerine geçmez.',
      },
    ],
  },
]

const interaktifBolumler = sindirimSistemi.document.sections
  .filter((section) => section.id !== 'ss-quiz' && section.id !== 'ss-kapanis')
const kapanis = sindirimSistemi.document.sections.find((section) => section.id === 'ss-kapanis')

export default {
  ...sindirimSistemi,
  slug: 'sindirim-sistemi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Sindirim Sistemi: Ayrıntılı Temel Not',
  subtitle: 'Sindirim kanalını, yardımcı organları, enzimleri, emilim yollarını ve sinirsel–hormonal kontrolü yapıdan moleküle eksiksiz öğren.',
  document: {
    ...sindirimSistemi.document,
    estimated_minutes: 180,
    outcomes: [
      ...sindirimSistemi.document.outcomes,
      'Sindirim kanalı duvarının dört temel tabakasını ve enterik sinir sisteminin hareket–salgı kontrolünü açıklayabileceksin.',
      'Peristaltizm ile segmentasyonu; yutma ve dışkılama reflekslerini işlevleri bakımından ayırabileceksin.',
      'Yağda ve suda çözünen vitaminlerin, B₁₂, demir ve Ca²⁺ emilimindeki özel koşulları yorumlayabileceksin.',
      'Mikrobiyotanın lif fermantasyonu, bariyer ve bağışıklık üzerindeki temel katkılarını açıklayabileceksin.',
      'Portal dolaşım ve lenf yoluyla gelen ürünlerin karaciğerdeki ilk metabolik işlemlerini ilişkilendirebileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 2),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(2),
      temelEkBolumler[1],
      kapanis,
    ],
  },
}
