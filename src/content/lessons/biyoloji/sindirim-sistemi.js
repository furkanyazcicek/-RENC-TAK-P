/** AYT BİYOLOJİ · SİNDİRİM SİSTEMİ */
export default {
  slug: 'sindirim-sistemi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Sindirim Sistemi' },
  order: 4,
  partLabel: '5. Bölüm',
  goldStandard: true,
  title: 'Sindirim Sistemi: Besinden Hücreye',
  subtitle: 'Organları sırayla saymakla yetinme; besinin ağızdan ince bağırsağa hangi fiziksel ve kimyasal dönüşümlerden geçtiğini, hangi enzimin nerede çalıştığını ve monomerlerin kana ya da lenfe nasıl katıldığını mekanizmayla izle.',
  document: {
    version: 1,
    estimated_minutes: 105,
    prerequisites: [
      { topic: 'Canlıların Temel Bileşenleri', why: 'Karbonhidrat, lipit ve proteinlerin yapı taşları sindirimin ürünlerini belirler.' },
      { topic: 'Proteinler ve Enzimler', why: 'Sindirim, özgül enzimlerin katalizlediği hidroliz tepkimelerinden oluşur.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Monomerlerin bağırsak epitelinden emilimi difüzyon, kolaylaştırılmış difüzyon ve aktif taşıma ilkelerine dayanır.' },
    ],
    outcomes: [
      'Sindirim kanalının organlarını ve yardımcı organları işlev sırasıyla ilişkilendirebileceksin.',
      'Mekanik sindirim, kimyasal sindirim ve emilimi birbirinden kesin biçimde ayırabileceksin.',
      'Karbonhidrat, protein ve yağ sindirimini başlangıç yeri, enzim, ortam ve son ürün bakımından izleyebileceksin.',
      'Mide bezlerinin HCl, pepsinojen ve mukus salgılarını; gastrinle düzenlenmeyi açıklayabileceksin.',
      'Pankreas bikarbonatı ve enzimleri ile karaciğer–safra sisteminin görevlerini karşılaştırabileceksin.',
      'İnce bağırsak villus ve mikrovilluslarının emilim yüzeyini nasıl büyüttüğünü yorumlayabileceksin.',
      'Glikoz ve amino asitlerin kana, yağların büyük bölümünün lenfe katılma yollarını ayırabileceksin.',
      'Sindirim salgılarının sinirsel ve hormonal kontrolünü besinin bulunduğu bölgeyle ilişkilendirebileceksin.',
      'Yaygın sindirim bozukluklarını etkilenen yapı–işlev üzerinden yorumlayabileceksin.',
    ],
    sections: [
      {
        id: 'ss-giris', kind: 'opening', title: 'Sindirim bir borudan geçiş değil, kontrollü bir dönüştürme hattıdır',
        lead: 'Büyük besin molekülü hücre zarından geçemez; kanal boyunca küçültülür, seçilir, emilir ve dolaşımla dokulara dağıtılır.',
        blocks: [
          { id: 'ss-giris-prose', type: 'prose', body: `Yediğin bir lokma ekmek, protein ve yağın hücreye ulaşması için yalnız mideye gitmesi yetmez. Besin önce **mekanik olarak** küçük parçalara ayrılır; bu, temas yüzeyini büyütür fakat kimyasal bağları koparmaz. Sonra enzimler su kullanarak polimer bağlarını kırar: bu **kimyasal sindirimdir**. Ortaya çıkan glikoz, amino asit, yağ asidi ve gliserol/monogliserit gibi küçük ürünler bağırsak epitelinden iç ortama geçtiğinde **emilim** gerçekleşir.

Sindirim kanalı ağız, yutak, yemek borusu, mide, ince bağırsak, kalın bağırsak ve anüsten oluşan kesintisiz bir lümendir. Lümendeki madde henüz vücudun iç ortamına katılmış sayılmaz. Epitel bariyerini geçip kan veya lenfe ulaşması gerekir. Bu ayrım, “besin mideye girdiğinde emilmiş olur” ve “dışkılama boşaltımdır” gibi klasik hataları önler.

Kanal duvarındaki kaslar besini **peristaltik hareketlerle** ileri iter; dairesel ve boyuna kasların düzenli kasılıp gevşemesi içeriği karıştırır ve taşır. Tükürük bezleri, karaciğer, safra kesesi ve pankreas kanalın dışında bulunan yardımcı organlardır; salgılarını kanallarla lümene verirler. Bu nedenle ekzokrin çalışırlar. Her soruda şu zinciri kur: **besin → organ → salgı/enzim → bağ → ürün → emilim yolu.**` },
          { id: 'ss-giris-why', type: 'why', question: 'Sindirim kanalındaki besin neden henüz “vücut içinde” sayılmaz?', body: 'Kanal lümeni dış çevrenin vücut boyunca devam eden uzantısıdır. Bir molekül iç ortama ancak bağırsak epitelini geçip kan veya lenfe katıldığında girmiş olur.' },
          { id: 'ss-giris-trap', type: 'trap', title: 'Mekanik sindirimi kimyasal sindirim sanmak', wrong: 'Çiğneme veya safra ile yağların damlacıklara ayrılmasında moleküler bağların koptuğunu düşünmek.', right: 'Mekanik parçalanma yalnız yüzeyi büyütür. Monomer oluşturan bağ kırılması enzimli hidrolizle gerçekleşir.', body: 'Safra enzim değildir ve yağ bağlarını koparmaz; lipazın çalışacağı yüzeyi artırır.' },
          { id: 'ss-giris-audio', type: 'audio_script', body: `Bir sindirim sorusunu üç fiille çöz: parçala, hidroliz et, em.

Diş ve kaslar parçalar; enzimler hidroliz eder; epitel hücresi seçerek emer.

Bu üç fiilin yeri ve sonucu farklıdır. Soruda hangi fiilin anlatıldığını bulduğunda organı ve ürünü de daha kolay seçersin.` },
        ],
      },
      {
        id: 'ss-kanal', kind: 'build', title: 'Ağızdan anüse: aynı kanal, farklı mikro ortamlar',
        lead: 'Her bölümün biçimi, pH’sı, hareketi ve salgısı o aşamada yapılacak işe göre özelleşmiştir.',
        blocks: [
          { id: 'ss-kanal-figure', type: 'figure', kind: 'sindirim-kanali', width: 'full', title: 'Sindirim yolculuğunun dört işlev istasyonu', purpose: 'Ağız–yutma, peristaltizm, mide ve bağırsak bölümlerini tek beden bağlamında izlemek.', complexity: 'high', caption: 'Bir istasyona dokunduğunda o bölgenin hareketi, salgısı ve besine yaptığı dönüşüm ayrı bir sahnede açılır.', focus: [
            { title: 'Ağız ve yutma', body: 'Dişler yüzeyi büyütür; dil lokmayı biçimlendirir. Tükürük amilazı nişasta sindirimini başlatır; yutma refleksi lokmayı yemek borusuna aktarır.' },
            { title: 'Peristaltik taşıma', body: 'Dairesel ve boyuna düz kasların ardışık kasılması lokmayı yer çekiminden bağımsız ileri iter. Sfinkterler bölmeler arası geçişi düzenler.' },
            { title: 'Mide: depo ve protein başlangıcı', body: 'Kas tabakaları içeriği çalkalar. HCl proteinleri denatüre eder ve pepsini etkinleştiren asidik ortamı kurar; kimus oluşur.' },
            { title: 'İnce ve kalın bağırsak', body: 'Kimyasal sindirimin çoğu ve besin emilimi ince bağırsakta; su–elektrolit geri kazanımı ve dışkı oluşumu kalın bağırsakta gerçekleşir.' },
          ] },
          { id: 'ss-kanal-prose', type: 'prose', body: `Ağızda kesici, köpek, küçük ve büyük azı dişleri farklı mekanik görevler üstlenir. Tükürük su, mukus, bikarbonat, lizozim ve **tükürük amilazı** içerir. Amilaz nişastadaki bazı bağları maltöz ve daha kısa zincirlere doğru parçalamaya başlar; protein ve yağın temel kimyasal sindirimi ağızda başlamaz. Dil lokmayı yutağa iter. Yutma sırasında yumuşak damak burun yolunu, epiglot soluk borusu girişini korur.

Yemek borusunda sindirim enzimi salgılanmaz; esas görev peristaltizmle taşımadır. Alt yemek borusu sfinkteri mide içeriğinin geriye kaçışını sınırlar. **Mide**, geçici depo, güçlü karıştırıcı ve protein sindiriminin başlangıç yeridir. Pilor sfinkteri kimusu onikiparmak bağırsağına küçük porsiyonlar hâlinde verir.

İnce bağırsak duodenum, jejunum ve ileumdan oluşur. Duodenum mide asidini pankreas bikarbonatıyla nötrleştirir; pankreas enzimleri ve safra burada lümene katılır. Fırçamsı kenar enzimleri son bağları epitel yüzeyinde kırar. Jejunum ve ileum geniş emilim alanına sahiptir. Kalın bağırsak çekum, kolon ve rektumu kapsar; kalan su ve iyonların emilimi, mikrobiyota etkinliği ve dışkının yoğunlaştırılması öne çıkar.` },
          { id: 'ss-kanal-table', type: 'table', title: 'Kanal boyunca baskın görev', columns: ['Bölge', 'Baskın olay', 'Kritik ayrım'], rows: [
            ['Ağız', 'Çiğneme, tükürük, nişasta sindiriminin başlangıcı', 'Mekanik + sınırlı kimyasal sindirim'],
            ['Yemek borusu', 'Peristaltik taşıma', 'Sindirim enzimi yok'],
            ['Mide', 'Depo, çalkalama, protein sindiriminin başlangıcı', 'Asit enzim değildir; ortam kurar/denatüre eder'],
            ['İnce bağırsak', 'Sindirim tamamlanması ve çoğu emilim', 'Pankreas + safra + fırçamsı kenar'],
            ['Kalın bağırsak', 'Su–iyon geri kazanımı, dışkı yoğunlaşması', 'Temel besin sindirimi merkezi değildir'],
          ], caption: '“Nerede başlar?” ile “nerede tamamlanır?” sorularını ayrı düşün.' },
          { id: 'ss-kanal-check', type: 'checkpoint', question: 'Baş aşağı duran bir insan suyu nasıl midesine ulaştırabilir?', hint: 'Yemek borusunun işi yalnız yer çekimine bağlı değildir.', answer: 'Yemek borusundaki dairesel ve boyuna kasların koordineli peristaltik dalgası lokmanın arkasında basınç oluşturarak onu mideye iter.' },
        ],
      },
      {
        id: 'ss-mide', kind: 'deepen', title: 'Mide: asitli ortamı kur, proteini aç, kendi dokunu koru',
        lead: 'Midenin gücü yalnız HCl’den değil; salgı hücrelerinin ayrışmış görevlerinden ve mukozal bariyerden gelir.',
        blocks: [
          { id: 'ss-mide-figure', type: 'figure', kind: 'mide-mekanizmasi', width: 'full', title: 'Mide bezinden kimusa', purpose: 'Mide katmanlarını, salgı hücrelerini, pepsin aktivasyonunu ve mukozal korunmayı mekanizmayla göstermek.', complexity: 'high', caption: 'Ana mide kesitindeki her odak, hücre veya molekül ölçeğinde yeni bir açıklayıcı sahneye dönüşür.', focus: [
            { title: 'Kas tabakaları ve çalkalama', body: 'Boyuna, dairesel ve eğik düz kas tabakaları besini mide özsuyuyla karıştırır; mekanik sindirim kimusu oluşturur.' },
            { title: 'HCl ve pepsin aktivasyonu', body: 'Pariyetal hücre HCl, baş hücre pepsinojen salgılar. Asit pepsinojeni pepsine dönüştürür; pepsin proteinlerde peptit bağlarını parçalar.' },
            { title: 'Mukus–bikarbonat bariyeri', body: 'Yüzey hücrelerinin mukus ve bikarbonatı epiteli asit–pepsinden korur; sıkı bağlantılar geri sızıntıyı sınırlar.' },
            { title: 'Gastrin ve geri bildirim', body: 'Besin ve mide gerilmesi gastrini artırır; asit yükseldikçe gastrin baskılanır. Sinirsel ve hormonal kontrol salgı–hareketi öğüne uyarlar.' },
          ] },
          { id: 'ss-mide-prose', type: 'prose', body: `Mide çukurlarına açılan bezlerde farklı hücreler aynı ortamı birlikte kurar. **Pariyetal hücreler** HCl ve B₁₂ emilimi için gerekli intrinsik faktörü salgılar. HCl mikroorganizmaların çoğunu etkisizleştirir, proteinlerin üç boyutlu yapısını açar ve pepsin için düşük pH sağlar. HCl proteinin peptit bağlarını tek başına sindiren enzim değildir.

**Baş hücreler** etkin olmayan pepsinojen salgılar. Asit pepsinojenin bir bölümünü keserek pepsini oluşturur; etkin pepsin başka pepsinojenleri de etkinleştirebilir. Zimojen biçiminde salgılanma, hücrenin kendi proteinlerinin sindirilmesini önleyen güvenlik mekanizmasıdır. **G hücreleri** gastrin salgılar; gastrin mide salgı ve hareketlerini artırır.

Mide neden kendini sindirmez? Kalın mukus tabakası yüzeyde bikarbonat tutar, epitel hücreleri sıkı bağlantılarla asidin dokuya geçişini sınırlar ve yüzey hızla yenilenir. Bariyer bozulduğunda asit ve pepsin dokuyu zedeleyebilir. Helicobacter pylori enfeksiyonu veya bazı ilaçlar ülser riskini artırabilir.

Mideden sınırlı miktarda su, alkol ve bazı ilaçlar emilebilir; fakat temel besin monomerlerinin emilim merkezi ince bağırsaktır. Mide içeriği bir anda değil, pilor yoluyla kontrollü biçimde duodenuma geçer. Yağlı ve asitli kimus duodenal sinyallerle mide boşalmasını yavaşlatabilir.` },
          { id: 'ss-mide-compare', type: 'compare', title: 'Mide salgı hücreleri', columns: ['Salgı', 'İşlev'], rows: [
            { label: 'Pariyetal hücre', values: ['HCl + intrinsik faktör', 'Asit ortam ve B₁₂ emilimine hazırlık'] },
            { label: 'Baş hücre', values: ['Pepsinojen', 'Etkinleşince protein sindirimi'] },
            { label: 'Yüzey/mukus hücresi', values: ['Mukus + HCO₃⁻', 'Epitel bariyeri'] },
            { label: 'G hücresi', values: ['Gastrin', 'Salgı ve hareketin artırılması'] },
          ], insight: 'Asit, enzim ve koruyucu salgı farklı hücrelerden gelir; böylece üretim ve güvenlik ayrı ayrı denetlenir.' },
          { id: 'ss-mide-trap', type: 'trap', title: 'HCl’yi proteaz sanmak', wrong: 'HCl’nin proteinleri doğrudan amino asitlere ayırdığını düşünmek.', right: 'HCl denatürasyon ve pepsin aktivasyonu için ortam kurar; peptit bağlarını hidroliz eden temel mide enzimi pepsindir.', body: 'Mide protein sindirimini başlatır ama amino asitlere kadar tamamlamaz.' },
        ],
      },
      {
        id: 'ss-yardimci', kind: 'deepen', title: 'Karaciğer, safra ve pankreas: duodenumun kimya laboratuvarı',
        lead: 'Mideden gelen asitli kimus, enzimlerin çalışabileceği pH’ya getirilir; yağ yüzeyi büyütülür ve üç besin grubuna özgü enzimler devreye girer.',
        blocks: [
          { id: 'ss-yardimci-figure', type: 'figure', kind: 'yardimci-organlar', width: 'full', title: 'Safra ve pankreas salgısının duodenuma katılması', purpose: 'Karaciğer–safra kesesi–pankreas bağlantısını, bikarbonat nötrleştirmesini, yağ emülsiyonunu ve enzim aktivasyonunu göstermek.', complexity: 'high', caption: 'Her odak ortak kanal bağlamından çıkarılıp kendi kimyasal veya hücresel mekanizmasıyla açıklanır.', focus: [
            { title: 'Karaciğer ve safra döngüsü', body: 'Karaciğer safra üretir; safra kesesi depolayıp yoğunlaştırır. Safra tuzlarının çoğu ileumdan geri emilip karaciğere döner.' },
            { title: 'Bikarbonatla nötrleştirme', body: 'Pankreas kanal hücrelerinin HCO₃⁻ salgısı asitli kimusun pH’sını yükseltir; ince bağırsak epiteli ve pankreas enzimleri korunur.' },
            { title: 'Emülsifikasyon ve misel', body: 'Safra tuzları yağ damlacıklarını küçük damlacıklara ayırıp lipaz yüzeyini artırır; sindirim ürünlerini misellerle epitele taşır.' },
            { title: 'Pankreas enzimleri ve zimojen', body: 'Amilaz, lipaz ve nükleaz etkin; proteazlar çoğunlukla zimojen salgılanır. Enteropeptidaz tripsinojeni tripsine çevirir, tripsin diğerlerini etkinleştirir.' },
          ] },
          { id: 'ss-yardimci-prose', type: 'prose', body: `Karaciğerin ürettiği safra, safra kesesinde depolanır ve yoğunlaştırılır. **Safra tuzları amfipatiktir:** bir yüzleri yağ, diğer yüzleri suyla etkileşir. Büyük yağ damlasını küçük damlacıklara ayırarak toplam yüzeyi büyütür; bu fiziksel işlem **emülsifikasyon**dur. Safrada sindirim enzimi yoktur. Safra tuzları yağ asidi ve gliserol/monogliserit gibi ürünlerle yağda çözünen vitaminleri misel içinde fırçamsı kenara taşır.

Pankreasın ekzokrin bölümü iki kritik katkı verir. Kanal hücrelerinden gelen **bikarbonat**, mide asidini nötrleştirir. Asiner hücreler pankreatik amilaz, lipaz, nükleazlar ve proteaz öncüllerini salgılar. Tripsinojenin bağırsak yüzeyindeki enteropeptidazla tripsine dönüşmesi; tripsinin kimotripsinojen ve diğer zimojenleri etkinleştirmesi, proteazların pankreas içinde çalışmasını önleyen bir güvenlik zinciridir.

Pankreatik amilaz nişasta parçalanmasını sürdürür; fırçamsı kenardaki maltaz, sükraz ve laktaz disakkaritleri monosakkaritlere tamamlar. Tripsin, kimotripsin ve peptidazlar proteinleri küçük peptitlere; yüzey peptidazları amino asit ve küçük peptitlere dönüştürür. AYT düzeyinde pankreatik lipazın trigliseritleri **yağ asidi ve gliserole** ayırdığı kabul edilir; fizyolojik süreçte önemli ürünlerden biri monogliserittir. Nükleaz ve nükleotidazlar nükleik asitleri bileşenlerine kadar parçalar.

Duodenuma yağ ve protein geldiğinde **CCK**, asit geldiğinde **sekretin** salınımı artar. CCK safra kesesini kasar, pankreas enzim salgısını artırır ve mide boşalmasını yavaşlatır. Sekretin pankreas ve safra kanallarından bikarbonat salgısını güçlendirir. Böylece hormonun kaynağı, uyarısı ve hedef cevabı aynı besin akışına bağlanır.` },
          { id: 'ss-yardimci-table', type: 'table', title: 'Besin grubunu son ürüne kadar izle', columns: ['Besin', 'Başlangıç ve ana enzimler', 'Emilebilir ürün'], rows: [
            ['Karbonhidrat', 'Ağız amilazı → pankreas amilazı → disakkaridazlar', 'Monosakkaritler'],
            ['Protein', 'Mide pepsini → pankreas proteazları → peptidazlar', 'Amino asitler ve küçük peptitler'],
            ['Trigliserit', 'Safra emülsiyonu → pankreas lipazı', 'AYT: yağ asidi + gliserol; fizyoloji: monogliserit de oluşur'],
            ['Nükleik asit', 'Pankreas nükleazı → yüzey enzimleri', 'Baz, pentoz, fosfat'],
          ], caption: 'Enzimler polimeri bir anda son ürüne çevirmek zorunda değildir; sindirim ardışık basamaklarla tamamlanır.' },
          { id: 'ss-yardimci-example', type: 'worked_example', title: 'Pankreas kanalı tıkanırsa ne olur?', question: 'Safra akışı sürerken pankreas salgısı duodenuma ulaşamazsa hangi iki temel problem beklenir?', steps: [
            { title: 'pH’yı kontrol et', body: 'Bikarbonat azalır; asitli kimus yeterince nötrleşmez ve enzimler uygun ortam bulamaz.' },
            { title: 'Enzimleri kontrol et', body: 'Amilaz, lipaz, proteaz ve nükleazların lümene geçişi azalır.' },
            { title: 'Sonucu birleştir', body: 'Özellikle yağ olmak üzere birçok makromolekülün sindirimi ve dolayısıyla emilimi bozulur.' },
          ], answer: 'Pankreas hem pH düzenleyici bikarbonatı hem temel sindirim enzimlerini sağlar; kanal tıkanması iki işlevi birlikte kaybettirir.', takeaway: 'Pankreas = uygun ortam + çoklu enzim paketi.' },
        ],
      },
      {
        id: 'ss-besin-izleme', kind: 'deepen', title: 'Dört besin, dört bağ türü, dört sindirim rotası',
        lead: 'Bütün hidrolizler su kullanır; fakat her polimerin bağına uyan enzim, başladığı organ ve emilebilir son ürünü farklıdır.',
        blocks: [
          { id: 'ss-besin-figure', type: 'figure', kind: 'besin-sindirim-haritasi', width: 'full', title: 'Makromolekülden emilebilir ürüne', purpose: 'Karbonhidrat, protein, yağ ve nükleik asit sindirimini organ–enzim–ürün zinciriyle karşılaştırmak.', complexity: 'high', caption: 'Bir besin grubuna dokunduğunda, o molekülün ağız/mide/bağırsak boyunca geçirdiği gerçek hidroliz basamakları ayrı sahnede açılır.', focus: [
            { title: 'Karbonhidrat rotası', body: 'Tükürük amilazı nişastayı başlatır, mide asidinde etkinliği durur; pankreas amilazı sürdürür, fırçamsı kenar enzimleri monosakkaritlere tamamlar.' },
            { title: 'Protein rotası', body: 'Mide asidi proteini açar, pepsin büyük peptitler oluşturur; pankreas proteazları ve bağırsak peptidazları amino asit/küçük peptitlere kadar ilerler.' },
            { title: 'Yağ rotası', body: 'Safra damlacık yüzeyini büyütür; pankreas lipazı trigliseritten yağ asidi ve AYT anlatımında gliserol oluşturur. Fizyolojik monogliserit ürünleri de miselle enterosite ulaşır.' },
            { title: 'Nükleik asit rotası', body: 'Pankreas nükleazları DNA/RNA’yı nükleotitlere, fırçamsı kenar enzimleri baz, pentoz ve fosfat bileşenlerine ayırır.' },
          ] },
          { id: 'ss-besin-prose', type: 'prose', body: `Enzim özgüllüğü nedeniyle “bir sindirim enzimi tüm besinleri parçalar” denemez. Amilaz glikozit bağlarına, proteazlar peptit bağlarına, lipaz ester bağlarına, nükleazlar nükleik asidin omurgasına etki eder. Aynı besin grubunda bile ardışık enzimler farklı büyüklükte ürünlere çalışabilir.

Karbonhidrat ve protein sindirimi kanalın daha üst bölgelerinde başlasa da **tamamlanma ve emilim ağırlıkla ince bağırsaktadır**. Yağ sindiriminin sınavdaki ana merkezi duodenumdur; safra ve pankreas lipazı birlikte verim sağlar. Vitamin, mineral ve su gibi küçük maddeler kimyasal sindirime gerek duymadan emilebilir. Selüloz ise insanda selülaz bulunmadığı için hidroliz edilemez; lif olarak bağırsak hareketlerine ve mikrobiyotaya katkı verir.` },
          { id: 'ss-besin-check', type: 'checkpoint', question: 'Ağızda başlayan nişasta sindirimi midede neden kesintiye uğrar, ince bağırsakta neden yeniden başlar?', hint: 'Aynı substrata çalışan enzimin kaynağı ve pH koşulunu ayrı düşün.', answer: 'Tükürük amilazı mide asidinde denatüre olup etkinliğini kaybeder. Duodenumda bikarbonat pH’yı yükseltir ve pankreas amilazı nişasta sindirimini yeniden sürdürür.' },
        ],
      },
      {
        id: 'ss-emilim', kind: 'deepen', title: 'İnce bağırsakta emilim: aynı villustan iki farklı dolaşım yolu',
        lead: 'Yüzey büyütmek yetmez; epitelin taşıyıcıları, kan kılcalları ve lenf damarı emilen molekülün kimliğine göre farklı rota kurar.',
        blocks: [
          { id: 'ss-emilim-figure', type: 'figure', kind: 'bagirsak-emilim', width: 'full', title: 'Kıvrımdan mikrovillusa, epitelden dolaşıma', purpose: 'Emilim yüzeyinin katlanmasını, şeker–amino asit taşınmasını, yağların şilomikron yolunu ve portal dolaşımı göstermek.', complexity: 'high', caption: 'Villusun bir bölgesine dokunduğunda hücre zarı taşıması veya dolaşım rotası ayrı bir mekanizma sahnesi olarak açılır.', focus: [
            { title: 'Kıvrım–villus–mikrovillus', body: 'Dairesel kıvrımlar, villuslar ve enterosit mikrovillusları yüzeyi kat kat büyütür; ince epitel ve yoğun damar ağı geçiş mesafesini kısaltır.' },
            { title: 'Glikoz ve amino asit taşınması', body: 'Apikal kotransport ve taşıyıcılar monomerleri enterosite alır; bazolateral taşıyıcılarla kan kılcalına geçer. Na⁺ gradyanı dolaylı ATP kullanımına dayanır.' },
            { title: 'Yağ ve şilomikron yolu', body: 'Misel ürünleri enterosite bırakır; lipitler yeniden trigliseride çevrilip proteinlerle şilomikron oluşturur ve lenf kılcalına verilir.' },
            { title: 'Kapı toplardamarı ve karaciğer', body: 'Suda çözünen monomerler villus kanından hepatik portal venle önce karaciğere ulaşır; burada işlenir, depolanır veya genel dolaşıma verilir.' },
          ] },
          { id: 'ss-emilim-prose', type: 'prose', body: `İnce bağırsağın dairesel kıvrımları üzerinde parmak biçimli **villuslar**, enterositlerin apikal yüzeyinde ise **mikrovilluslar** bulunur. Bu hiyerarşik katlanma yüzeyi büyütür. Tek katlı epitel geçiş mesafesini kısaltır; her villusta kan kılcal ağı ve kör uçlu lenf kılcalı, yani lakteal yer alır. Yüzey genişliği, ince bariyer ve akımla taşınma birlikte emilimi hızlandırır.

Glikoz ve galaktoz apikal yüzde Na⁺ ile ortak taşıma; fruktoz kolaylaştırılmış difüzyonla alınır. Na⁺/K⁺ pompası düşük hücre içi Na⁺ düzeyini koruduğu için kotransport dolaylı biçimde ATP’ye bağlıdır. Amino asit ve küçük peptitler de çeşitli taşıyıcılarla enterosite alınır; peptitlerin çoğu hücre içinde amino asitlere ayrılır. Bu suda çözünen ürünler villus kanına, ardından **hepatik portal venle karaciğere** gider.

Yağ sindirim ürünleri miselden enterosite geçer; safra tuzları lümende kalıp çoğunlukla ileumda geri emilir. Enterosit içinde yağ asidi ve monogliseritlerden yeniden trigliserit sentezlenir. Trigliserit, kolesterol ve proteinlerin oluşturduğu **şilomikronlar** kan kılcalına doğrudan giremeyecek kadar büyüktür; lakteale, oradan lenf damarlarıyla göğüs kanalına ve daha sonra kana katılır. Kısa zincirli bazı yağ asitleri doğrudan kana geçebilir; sınavın genel kuralı uzun zincirli yağların lenf yoludur.

Kalın bağırsak sindirilemeyen lif, su, iyon ve mikroorganizmalarla çalışır. Mikrobiyota bazı vitamin ve metabolitleri üretir; bunların bir kısmı emilebilir. Su emilimi sürer, içerik yoğunlaşır. Dışkı sindirilememiş/absorbe edilmemiş artıklar, bakteriler, dökülen hücreler ve su içerir; metabolik atıkların hücreden uzaklaştırılması olan boşaltımla aynı değildir.` },
          { id: 'ss-emilim-compare', type: 'compare', title: 'Kana mı, lenfe mi?', columns: ['İlk damar', 'İlk büyük durak'], rows: [
            { label: 'Glikoz ve diğer monosakkaritler', values: ['Villus kan kılcalı', 'Hepatik portal ven → karaciğer'] },
            { label: 'Amino asitler', values: ['Villus kan kılcalı', 'Hepatik portal ven → karaciğer'] },
            { label: 'Uzun zincirli yağlar/şilomikron', values: ['Lakteal (lenf)', 'Göğüs kanalı → toplardamar'] },
            { label: 'Su ve mineraller', values: ['Kan kılcalı', 'Portal dolaşım'] },
          ], insight: 'Yağ önce lenfe gitse de sonunda kana katılır; fark ilk taşıma yoludur.' },
          { id: 'ss-emilim-check', type: 'checkpoint', question: 'Na⁺–glikoz ortak taşıyıcısı ATP’yi doğrudan parçalamadığı hâlde glikoz emilimi neden aktif taşımaya dolaylı bağlıdır?', hint: 'Apikal kotransportu çalıştıran Na⁺ gradyanının kaynağını bul.', answer: 'Bazolateral Na⁺/K⁺ pompası ATP harcayarak hücre içi Na⁺ düzeyini düşük tutar. Na⁺ bu gradyanla hücreye girerken glikozu birlikte taşır; bu yüzden süreç ikincil aktif taşımadır.' },
        ],
      },
      {
        id: 'ss-kontrol-klinik', kind: 'deepen', title: 'Salgıyı öğüne uyarla, bozukluğu mekanizmadan çöz',
        lead: 'Sinirsel ve hormonal sinyaller kanalı eş zamanlı çalıştırır; bir enzimin, bariyerin veya emilim yüzeyinin kaybı özgül sonuçlar doğurur.',
        blocks: [
          { id: 'ss-kontrol-prose', type: 'prose', body: `Yemeği görmek ve koklamak bile vagus yoluyla tükürük ve mide salgısını hazırlayabilir. Besin mideye ulaşınca gerilme ve peptitler gastrini artırır. Asit yükseldikçe somatostatin gibi frenler gastrini sınırlar. Kimus duodenuma geldiğinde sekretin ve CCK mideyi yavaşlatıp pankreas–safra yanıtını güçlendirir. Böylece kanalın aşağı bölümü, yukarıdan gelen akışı kendi kapasitesine göre düzenler.

Laktaz eksikliğinde laktoz ince bağırsakta emilemez; lümende osmotik su tutar ve kalın bağırsak bakterilerince fermente edilerek gaz oluşturur. Çölyakta glutenle tetiklenen bağışıklık yanıtı villusları zedeler; emilim yüzeyi küçüldüğünden çoklu besin eksiklikleri gelişebilir. Safra akışı bozulduğunda emülsifikasyon ve yağda çözünen A, D, E, K vitaminlerinin emilimi azalabilir. Pankreas enzimi yetersizliği birden çok makromolekülü, özellikle yağ sindirimini etkiler.

Reflüde mide içeriği yemek borusuna kaçar; sorun midenin asit üretmesinin tek başına “fazla” olması değil, bariyer ve sfinkter işlevinin bozulması olabilir. İshalde kanal geçişi hızlandığında su geri emilimi yetersiz; kabızlıkta uzun bekleme ile su emilimi fazla olabilir. Klinik örnekte hastalık adını ezberlemek yerine **etkilenen yapı → kaybolan işlev → lümendeki değişim → belirti** zincirini kur.` },
          { id: 'ss-kontrol-table', type: 'table', title: 'Bozukluğu basamaktan tanı', columns: ['Durum', 'Etkilenen basamak', 'Beklenen sonuç'], rows: [
            ['Laktaz eksikliği', 'Fırçamsı kenarda disakkarit sindirimi', 'Osmotik su, gaz, ishal'],
            ['Safra yolu tıkanması', 'Yağ emülsiyonu ve misel', 'Yağlı dışkı, A-D-E-K emiliminde azalma'],
            ['Pankreas yetmezliği', 'Bikarbonat + çoklu enzim', 'Yetersiz nötrleşme ve yaygın sindirim bozukluğu'],
            ['Çölyak', 'Villus/mikrovillus yüzeyi', 'Malabsorpsiyon'],
            ['Alt özofagus sfinkter zayıflığı', 'Geri kaçışı engelleme', 'Reflü ve epitel hasarı'],
          ], caption: 'Aynı belirti farklı basamaklardan doğabilir; mekanizma, bozukluğun yerini daraltır.' },
          { id: 'ss-kontrol-exam', type: 'exam', title: 'AYT sorusunda dört ayrım', body: 'Asit–enzim, mekanik–kimyasal sindirim, kana–lenfe emilim ve başlangıç–tamamlanma yerlerini karıştırma. Bir salgının hormon mu enzim mi olduğunu; enzimin nereden salgılanıp nerede çalıştığını ayrı ayrı işaretle.', patterns: ['Pepsinojen–pepsin etkinleşmesi', 'Safranın enzim olmaması', 'Sekretin–CCK hedefleri', 'Portal ven–lakteal ayrımı', 'Zimojen güvenliği', 'Emilim yüzeyi–taşıyıcı ilişkisi'] },
        ],
      },
      {
        id: 'ss-quiz', kind: 'practice', title: '10 soruda besinden hücreye',
        lead: 'Hedef 8/10. Her soruda “nerede, hangi salgıyla, hangi ürüne ve hangi yolla?” zincirini tamamla.',
        blocks: [
          { id: 'ss-q1', type: 'quiz', purpose: 'concept', question: 'Mekanik sindirimle ilgili hangisi doğrudur?', options: ['Polimer bağlarını hidroliz eder', 'Monomer oluşturur', 'Besinin yüzey alanını artırır', 'Yalnız enzimlerle gerçekleşir'], answer_index: 2, explanation: 'Mekanik sindirim parçaları küçültüp **yüzey alanını artırır**; moleküler bağları koparmaz.' },
          { id: 'ss-q2', type: 'quiz', purpose: 'recall', question: 'Midede HCl salgılayan hücre hangisidir?', options: ['Baş hücre', 'Pariyetal hücre', 'G hücresi', 'Kadeh hücresi'], answer_index: 1, explanation: '**Pariyetal hücre** HCl ve intrinsik faktör salgılar.' },
          { id: 'ss-q3', type: 'quiz', purpose: 'error', question: 'Safrayla ilgili hangisi yanlıştır?', options: ['Karaciğerde üretilir', 'Safra kesesinde depolanabilir', 'Yağ damlacıklarının yüzeyini büyütür', 'Lipaz enzimi olarak trigliserit bağlarını koparır'], answer_index: 3, explanation: 'Safra **enzim değildir**; emülsifikasyon yapar, kimyasal bağları lipaz koparır.' },
          { id: 'ss-q4', type: 'quiz', purpose: 'apply', question: 'Pankreas bikarbonat salgısı ciddi biçimde azalırsa ilk beklenen sonuç hangisidir?', options: ['Duodenum pH’sının aşırı yükselmesi', 'Asitli kimusun yeterince nötrleşmemesi', 'Ağızda pepsin etkinleşmesi', 'Kalın bağırsakta safra üretimi'], answer_index: 1, explanation: 'HCO₃⁻ mide asidini nötrleştirir; azalması duodenumun asidik kalmasına yol açar.' },
          { id: 'ss-q5', type: 'quiz', purpose: 'concept', question: 'Tripsinojenin etkin olmayan biçimde salgılanmasının temel yararı nedir?', options: ['Nişastayı daha hızlı sindirmek', 'Pankreas dokusunun kendi kendini sindirmesini önlemek', 'Safra üretmek', 'Glikozu kana taşımak'], answer_index: 1, explanation: 'Proteazların **zimojen** salgılanması pankreas içinde protein sindirimini önleyen güvenliktir.' },
          { id: 'ss-q6', type: 'quiz', purpose: 'recall', question: 'Yağ ve protein içeren kimus duodenuma geldiğinde safra kesesi kasılmasını en güçlü artıran hormon hangisidir?', options: ['İnsülin', 'Gastrin', 'CCK', 'ADH'], answer_index: 2, explanation: '**CCK** safra kesesini kasar ve pankreas enzim salgısını artırır.' },
          { id: 'ss-q7', type: 'quiz', purpose: 'apply', question: 'İnce bağırsaktan emilen glikozun ilk büyük durağı hangisidir?', options: ['Lenf düğümü', 'Karaciğer', 'Böbrek', 'Akciğer'], answer_index: 1, explanation: 'Glikoz villus kanına, ardından hepatik portal venle önce **karaciğere** gider.' },
          { id: 'ss-q8', type: 'quiz', purpose: 'concept', question: 'Uzun zincirli yağların emiliminde doğru sıra hangisidir?', options: ['Kan kılcalı → portal ven → karaciğer', 'Enterosit → şilomikron → lakteal → lenf → kan', 'Mide → pankreas → böbrek', 'Misel → doğrudan alyuvar'], answer_index: 1, explanation: 'Enterositte oluşan **şilomikron** lakteale verilir, lenf yoluyla daha sonra kana katılır.' },
          { id: 'ss-q9', type: 'quiz', purpose: 'error', question: 'Aşağıdakilerden hangisi sindirim değil emilim örneğidir?', options: ['Pepsinin proteini peptitlere ayırması', 'Lipazın trigliseridi parçalaması', 'Glikozun bağırsak epitelinden kana geçmesi', 'Dişlerin besini küçültmesi'], answer_index: 2, explanation: 'Epitelden iç ortama geçiş **emilimdir**; bağ kırılması değildir.' },
          { id: 'ss-q10', type: 'quiz', purpose: 'apply', question: 'Laktaz eksikliğinde ishal ve gazın birlikte görülmesinin en uygun açıklaması hangisidir?', options: ['Laktoz tamamen kana geçer', 'Sindirilmemiş laktoz su tutar ve bakterilerce fermente edilir', 'Safra HCl’ye dönüşür', 'Villuslar daha fazla pepsin salgılar'], answer_index: 1, explanation: 'Lümende kalan laktoz **osmotik su tutar**, bakteriyel fermantasyon da gaz üretir.' },
        ],
      },
      {
        id: 'ss-kapanis', kind: 'close', title: 'Sindirim zincirini ürün ve rota ile kapat',
        lead: 'Bir lokmanın hikâyesi, bağın kırılmasıyla değil emilen ürünün dolaşıma katılmasıyla tamamlanır.',
        blocks: [
          { id: 'ss-summary', type: 'summary', title: 'Bu dersten kalması gerekenler', points: [
            'Mekanik sindirim yüzeyi büyütür; kimyasal sindirim enzimli hidrolizle monomer oluşturur; emilim epiteli geçiştir.',
            'Tükürük amilazı nişasta sindirimini ağızda, pepsin protein sindirimini midede başlatır.',
            'HCl pepsin için ortam kurar ve proteini denatüre eder; enzimin kendisi değildir.',
            'Safra karaciğerde üretilir, yağları emülsifiye eder fakat enzim değildir.',
            'Pankreas bikarbonatla pH’yı düzenler; amilaz, lipaz, nükleaz ve proteaz öncüleri sağlar.',
            'Sekretin bikarbonatı; CCK pankreas enzimini ve safra kesesi kasılmasını artırır.',
            'Sindirim ve çoğu emilim ince bağırsakta; su–iyon geri kazanımı kalın bağırsakta baskındır.',
            'Villus ve mikrovillus yüzeyi büyütür; glikoz ve amino asit kana, uzun zincirli yağlar şilomikronla lenfe geçer.',
            'Suda çözünen ürünler portal venle önce karaciğere ulaşır.',
            'Dışkılama sindirilmeyen artığın uzaklaştırılmasıdır; metabolik boşaltımla aynı değildir.',
          ] },
          { id: 'ss-memory', type: 'memory', title: 'Dört sınav kancası', body: '**Ağız amilazla başlatır. Mide asitle açar, pepsinle keser. Safra yüzeyi büyütür; pankreas nötrleştirir ve enzim verir. Şeker–amino asit portal kana, yağ şilomikronla lenfe gider.**' },
          { id: 'ss-final-exam', type: 'exam', title: 'Son 30 saniye kontrolü', body: 'Önce olayın mekanik sindirim, kimyasal sindirim veya emilim olduğunu seç. Sonra enzimin salgılandığı yer ile çalıştığı yeri ayır. Ürünü monomere kadar indir ve ilk dolaşım yolunu kana mı lenfe mi diye kapat.', patterns: ['Organ–salgı–substrat–ürün', 'HCl–pepsin ayrımı', 'Safra–lipaz ayrımı', 'Sekretin–CCK', 'Portal kan–lenf', 'Villus–mikrovillus–taşıyıcı'] },
          { id: 'ss-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Dolaşım ve Bağışıklık Sistemi**. Emilmiş besinlerin kalp–damar ağıyla taşınmasını ve iç ortamın savunulmasını aynı dolaşım bağlamında kuracağız.', topics: ['Kalbin yapısı ve döngüsü', 'Damarlar ve kan basıncı', 'Kan ve lenf', 'Doğuştan–kazanılmış bağışıklık'] },
          { id: 'ss-close-audio', type: 'audio_script', body: `Dersi bir lokmayı izleyerek kapat.

Ağız yüzeyi büyütür ve nişastayı başlatır. Mide proteini asitle açar, pepsinle keser. Duodenum asidi nötrler; safra yağı damlacıklara ayırır, pankreas enzimleri bağları kırar.

İnce bağırsak son ürünleri seçer. Şeker ve amino asit portal kanla karaciğere, uzun zincirli yağ şilomikronla lenfe gider. Zincir burada tamamdır.` },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
