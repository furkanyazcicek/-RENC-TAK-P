import destekHareketSistemi from './destek-hareket-sistemi.js'

const temelEkBolumler = [
  {
    id: 'dh-temel-iskelet-anatomi',
    kind: 'deepen',
    title: 'İskeletin ayrıntılı düzeni, kemik çeşitleri, büyüme ve onarım',
    lead: 'İskelet; eksen ve üyeler bölümlerinin, farklı biçimdeki kemiklerin ve yaşam boyu yenilenen kemik dokunun birlikte çalıştığı canlı bir sistemdir.',
    blocks: [
      {
        id: 'dh-temel-iskelet-prose',
        type: 'prose',
        body: `Erişkin insan iskeleti genel olarak **eksen iskeleti** ve **üyeler iskeleti** olmak üzere iki bölümde incelenir. Eksen iskeleti kafatası, omurga ve göğüs kafesinden oluşur. Kafatası beyni ve baştaki duyu organlarını korur; omurga gövdenin ana eksenini oluşturur ve omuriliği çevreler; kaburgalar ile göğüs kemiği kalp ve akciğerleri koruyan göğüs kafesini kurar. Üyeler iskeleti omuz kemeri, kollar, kalça kemeri ve bacakları kapsar. Omuz kemeri üst üyeye geniş hareket alanı kazandırırken kalça kemeri gövde ağırlığını alt üyeye aktaracak biçimde daha sağlam bir bağlantı kurar.

Kemikler biçimlerine göre **uzun, kısa, yassı ve düzensiz** olarak sınıflandırılabilir. Uzun kemiklerde boy en ve kalınlıktan fazladır; kol ve bacak kemikleri örnektir. Kısa kemiklerin üç boyutu birbirine yakındır; el ve ayak bileği kemikleri dar alanda çok yönlü küçük hareketlere izin verir. Yassı kemikler geniş yüzeyleriyle koruma ve kas tutunması sağlar; kafatası kemikleri, kaburgalar, sternum ve kürek kemiği örnektir. Omurlar gibi belirgin bir geometrik sınıfa girmeyenler düzensiz kemiktir. Bir kemiğin adı, yalnız içindeki dokuyu değil bütün organı belirtir: kemik dokuya ek olarak kıkırdak, ilik, damar, sinir ve bağ dokusu da içerir.

Uzun kemiğin gövdesi **diyafiz**, uçları **epifiz**tir. Diyafizin kalın kompakt kemik duvarı eğilme yüküne dayanır; içteki öz boşluğu erişkinde çoğunlukla sarı ilik taşır. Epifizlerde süngerimsi kemik belirgindir; trabeküller yük çizgilerine göre düzenlenir ve aralarındaki boşluklarda kırmızı ilik bulunabilir. Eklem yüzleri sürtünmeyi azaltan hiyalin kıkırdakla örtülüdür. Eklem yüzleri dışında kemiğin dışını saran **periost** damar, sinir ve kemik yapıcı hücreler taşır; kemiğin enine büyümesi ve kırık onarımında önemlidir. İç yüzlerdeki **endost** da yeniden şekillenmeye katılan hücreler barındırır.

Kompakt kemiğin temel yapısal birimi **osteon**dur. Merkezî Havers kanalında damar ve sinirler ilerler; kanal çevresinde mineralize matriks halkaları yani lameller bulunur. Osteositler lakünlerde yer alır, ince kanalcıklardaki uzantılarıyla birbirine ve besin kaynağına bağlanır. Enine uzanan Volkmann kanalları komşu merkez kanalları ve periost damarlarını birleştirir. Süngerimsi kemikte tipik osteonlar belirgin değildir; ince trabeküller ilik boşluklarına yakın olduğundan hücreler difüzyonla beslenebilir.

Kemik matriksinin organik bölümünde başta kollajen olmak üzere proteinler vardır; bunlar kemiğe çekme kuvvetine karşı tokluk ve belli ölçüde esneklik verir. İnorganik bölümde kalsiyum–fosfatça zengin hidroksiapatit kristalleri bulunur ve basınca karşı sertliği artırır. Organik bölüm olmadan kemik kolay kırılan, mineral bölüm olmadan kolay bükülen bir yapıya dönüşür. Sağlıklı kemiğin dayanıklılığı iki bölümün kompozit düzeninden doğar.

**Osteoblast** yeni organik matriks üretir ve mineral çökelmesine ortam hazırlar. Matriks içinde kalan osteoblast olgunlaşıp **osteosite** dönüşür; osteosit bulunduğu matriksi sürdürür ve mekanik yükü algılayan bir ağın parçasıdır. **Osteoklast** çok çekirdekli, kemik matriksini asit ve enzimlerle parçalayan hücredir. Kemik yapımı ve yıkımı aynı dokunun yenilenme döngüsüdür; eski veya mikrohasarlı bölgenin kaldırılması, yeni matriksle değiştirilmesi ve kan mineral dengesinin düzenlenmesi için ikisi de gerekir.

Uzun kemik çocukluk ve ergenlikte epifiz ile diyafiz arasındaki **büyüme plağından** boyuna uzar. Plakta kıkırdak hücreleri çoğalır, matriks büyür; diyafize yakın tarafta kıkırdak yerini kemik dokuya bırakır. Eşey hormonlarının ergenlik sonundaki etkisiyle plak kemikleştiğinde boyuna büyüme sona erer. Enine büyümede periost tarafında osteoblastlar yeni kemik eklerken iç yüzeyde osteoklastların uygun yıkımı öz boşluğunun orantısını korur.

Kırık onarımında önce kan damarlarının yırtılmasıyla **hematom** oluşur ve iltihabi hücreler hasarlı dokuyu temizler. Ardından kollajen ve kıkırdakça zengin yumuşak kallus kırık uçlarını birleştirir. Osteoblastların oluşturduğu sert kemiksi kallus geçici bağlantıyı güçlendirir. Son aşamada osteoblast–osteoklast eş güdümüyle doku yük yönlerine göre yeniden şekillenir. Kırığın kaynaması yalnız kalsiyuma bağlı değildir; yeterli kanlanma, protein, vitaminler, hormonlar, mekanik kararlılık ve zaman gerekir.

Kemik mineral dengesi hormonlarla bağlantılıdır. Kan Ca²⁺ düzeyi düştüğünde parathormon kemikten mineral serbestleşmesini, böbrekten Ca²⁺ geri emilimini ve D vitamininin etkinleşmesini destekleyebilir. Aktif D vitamini bağırsaktan Ca²⁺ emilimini artırır. Kalsitonin bazı koşullarda osteoklast etkinliğini azaltıcı yönde etki gösterebilir. Bu bilgiler “hormon kemiği doğrudan büyütür” şeklinde tek okla değil; bağırsak–böbrek–kemik arasındaki homeostatik ağla yorumlanmalıdır. Mekanik yük de kemiğin korunması için uyarıdır; uzun süre hareketsizlikte yapım–yıkım dengesi kemik kaybı yönüne kayabilir.`,
      },
      {
        id: 'dh-temel-iskelet-map',
        type: 'concept_map',
        title: 'Kemik organının yapı–işlev–yenilenme ağı',
        intro: 'Kemiğin mekanik dayanıklılığı, kan hücresi üretimi ve mineral dengesi farklı yapıların ortak sonucudur.',
        nodes: [
          { id: 'periost', label: 'Periost', detail: 'Damar, sinir, enine büyüme ve onarım' },
          { id: 'kompakt', label: 'Kompakt kemik', detail: 'Osteonlu yoğun dayanıklılık' },
          { id: 'sunger', label: 'Süngerimsi kemik', detail: 'Trabekül ve ilik boşlukları' },
          { id: 'matriks', label: 'Kemik matriksi', detail: 'Kollajen + mineral kristali' },
          { id: 'hucre', label: 'Kemik hücreleri', detail: 'Osteoblast, osteosit, osteoklast' },
          { id: 'denge', label: 'Yenilenme ve homeostazi', detail: 'Yük, hormon, beslenme ve yaş' },
        ],
        links: [
          { from: 'periost', to: 'kompakt', label: 'dıştan yeni doku ekler' },
          { from: 'kompakt', to: 'sunger', label: 'aynı organın iki mimarisi' },
          { from: 'matriks', to: 'kompakt', label: 'sertlik ve tokluk verir' },
          { from: 'hucre', to: 'matriks', label: 'yapar, sürdürür, yıkar' },
          { from: 'hucre', to: 'denge', label: 'yeniden şekillenmeyi yürütür' },
          { from: 'sunger', to: 'denge', label: 'ilik ve mineral deposuyla bağlanır' },
        ],
        caption: 'Kemik sert bir depo değil; hücrelerin matriksi sürekli yenilediği, damarlı ve metabolik olarak etkin bir organdır.',
      },
      {
        id: 'dh-temel-kemik-table',
        type: 'table',
        title: 'Kemik çeşitleri ve ayırt ettiren özellikler',
        columns: ['Kemik tipi', 'Biçimsel özellik', 'Örnek', 'Baskın işlev'],
        rows: [
          ['Uzun', 'Boyu en ve kalınlıktan fazla', 'Kol ve bacak kemikleri', 'Kaldıraç ve geniş hareket'],
          ['Kısa', 'Üç boyutu birbirine yakın', 'El–ayak bileği kemikleri', 'Kararlılık ve küçük çok yönlü hareket'],
          ['Yassı', 'İnce ve geniş yüzeyli', 'Kafatası, sternum, kaburga', 'Koruma ve geniş kas tutunması'],
          ['Düzensiz', 'Diğer sınıflara uymaz', 'Omurlar', 'Özel destek ve koruma'],
        ],
        caption: 'Kemik biçimi, bulunduğu yerdeki mekanik ve koruyucu gereksinimle ilişkilidir.',
      },
      {
        id: 'dh-temel-kirik-check',
        type: 'checkpoint',
        question: 'Kırık hattında yeni kemik oluşmuş olsa bile kemiğin eski biçim ve dayanıklılığına hemen dönememesinin nedeni nedir?',
        hint: 'Sert kallus ile son yeniden şekillenme evresini ayır.',
        answer: 'İlk oluşan sert kallus düzensiz ve geçici bir örgütlenmedir. Osteoblast ve osteoklastların mekanik yük çizgilerine göre yaptığı uzun süreli yeniden şekillenme tamamlanmadan kemiğin eski mimarisi ve dayanıklılığı tam kurulmaz.',
      },
      {
        id: 'dh-temel-kemik-trap',
        type: 'trap',
        title: 'Süngerimsi kemiği yumuşak sanmak',
        wrong: '“Süngerimsi kemik, kıkırdak gibi yumuşak bir dokudur.”',
        right: 'Süngerimsi kemik de mineralize kemik dokudur; adı, trabeküller arasındaki boşluklu mimarisinden gelir.',
        body: 'Kompakt ve süngerimsi kemiğin matriks türü değil, mekânsal örgütlenmesi farklıdır.',
      },
    ],
  },
  {
    id: 'dh-temel-kasilma-butunlesme',
    kind: 'deepen',
    title: 'Sinirsel uyarıdan kasılmaya tam zincir, kasılma çeşitleri ve sistem sağlığı',
    lead: 'Kas kuvveti; motor nöronun uyarısı, sarkolemma–T tübülü iletimi, Ca²⁺ kontrolü, çapraz köprü döngüsü ve ATP yenilenmesinin kesintisiz zinciridir.',
    blocks: [
      {
        id: 'dh-temel-kasilma-prose',
        type: 'prose',
        body: `Bir iskelet kası lifi, motor nöronun akson ucuyla **nöromüsküler kavşakta** bağlantı kurar. Sinir impulsu akson ucuna ulaştığında voltaj kapılı Ca²⁺ kanalları açılır; hücre içine giren Ca²⁺, asetilkolin taşıyan keseciklerin zarla kaynaşmasını sağlar. **Asetilkolin (ACh)** sinaptik aralığa salınır, motor uç plakta reseptörlerine bağlanır ve katyon kanallarını açar. Yeterli depolarizasyon kas lifinde aksiyon potansiyeli başlatır. Asetilkolinesteraz ACh’yi parçalayarak uyarının sürekli kalmasını önler.

Kas aksiyon potansiyeli **sarkolemma** boyunca ve hücrenin içine uzanan **T tübüllerinde** yayılır. T tübülü zarındaki voltaj algılayıcı proteinler sarkoplazmik retikulumun terminal sisternalarındaki Ca²⁺ salım kanallarını etkiler. Depolanmış Ca²⁺ sitozole çıkar. Bu olay elektriksel uyarının kimyasal düzenleyiciye bağlandığı **uyarılma–kasılma eşleşmesi**dir. Motor nöron çalışıp ACh salınsa bile T tübülü veya sarkoplazmik retikulum işlevsizse sarkomerler yeterince etkinleşemez.

İnce filament; aktin, tropomiyozin ve troponinden oluşur. Dinlenmede tropomiyozin, aktin üzerindeki miyozin bağlanma bölgelerini örter. Ca²⁺ troponine bağlanınca troponin biçim değiştirir ve tropomiyozin kenara çekilir. Enerji yüklü miyozin başı aktine bağlanır; fosfatın ve ardından ADP’nin ayrılmasıyla güç vuruşu gerçekleşir, aktin sarkomerin merkezine doğru çekilir. Yeni ATP miyozine bağlanınca miyozin aktinden ayrılır. ATP’nin parçalanması başı yeniden enerji yüklü konuma getirir. Ca²⁺ ve ATP bulunduğu sürece çevrim tekrarlanabilir.

ATP yalnız güç vuruşu için kullanılan genel bir “yakıt” değildir. Miyozinin aktinden **ayrılması**, miyozin başının yeniden kurulması ve Ca²⁺’ın sarkoplazmik retikuluma **aktif pompalanması** için gereklidir. Ölümden sonra ATP üretimi durduğunda miyozin başları aktinden ayrılamaz ve Ca²⁺ dengesi bozulur; geçici ölüm katılığı bununla ilişkilidir. Gevşeme pasif bir kapanma değildir: ACh etkisi sonlanmalı, zar uyarısı bitmeli ve Ca²⁺ pompalarla depoya geri alınmalıdır.

Kayma iplikçikleri modelinde aktin ve miyozin filamentlerinin boyu değişmez. İnce filamentler kalın filamentlerin arasına daha çok sokulur; sarkomerin Z çizgileri yaklaşır. Yalnız ince filament bulunan **I bandı** daralır; yalnız kalın filament bulunan **H bölgesi** daralır veya kaybolabilir. Kalın filament uzunluğunu gösteren **A bandı** değişmez. Sarkomerler seri biçimde kısaldığında miyofibril, kas lifi ve uygun koşulda bütün kas kısalır. Ancak kas kuvvet üretirken eklem hareket etmeyebilir; bu durumda uzunluk ile gerilim ayrımı yapılmalıdır.

**İzometrik kasılmada** kasın gerilimi artar fakat toplam uzunluğu belirgin değişmez; ağır bir yükü sabit tutmak veya duvarı itmek örnektir. **Konsantrik kasılmada** kas kuvvet üretirken kısalır; dambılı yukarı kaldıran biseps gibi. **Eksantrik kasılmada** etkin kas dış yükün etkisiyle kontrollü biçimde uzar; dambılı yavaşça indirirken bisepsin yaptığı gibi. “Kasılma varsa kas kesin kısalır” önermesi bu yüzden yanlıştır.

Bir motor nöron ve onun uyardığı bütün kas lifleri **motor birim**dir. Tek bir kas lifinin aksiyon potansiyeli ya hep ya hiç ilkesine uyar; fakat bütün kasın kuvveti derecelidir. Merkezî sinir sistemi daha çok motor birimi devreye alarak **katılımı**, aynı birimlerin uyarı sıklığını artırarak **zamansal toplamayı** yükseltir. Küçük motor birimler göz ve parmak gibi ince denetim gereken yerlerde, büyük motor birimler kaba ve güçlü hareketlerde avantajlıdır. Motor birimler çoğunlukla küçükten büyüğe katılır; bu düzen kuvvetin hassas artırılmasını sağlar.

Tek uyarıya verilen kısa mekanik yanıt **kas sarsısıdır**; gizli dönem, kasılma ve gevşeme evreleri bulunur. Yeni uyarı gevşeme tamamlanmadan gelirse Ca²⁺ bütünüyle depoya dönmeden yeni kuvvet eklenir ve dalga toplamı oluşur. Uyarı sıklığı çok yükselirse kasılmalar birleşerek tetanik kasılma oluşturabilir. Buradaki fizyolojik tetanos, Clostridium tetani bakterisinin oluşturduğu hastalıkla aynı değildir.

Kasın hazır ATP’si çok azdır. İlk saniyelerde kreatin fosfat ADP’ye fosfat vererek ATP’yi hızla yeniler. Yoğun kısa işte glikoliz hızlı ama sınırlı ATP sağlar; pirüvatın laktata dönüşmesi NAD⁺ yenilenmesini sürdürür. Uzun süreli etkinlikte oksijenli solunumun toplam ATP verimi yüksektir; yağ asitleri de önemli yakıt olabilir. Bu yollar sırayla açılan kapılar değildir, aynı anda çalışır; şiddet ve süre katkı oranlarını değiştirir.

Kas yorgunluğu tek nedenli değildir. Motor merkezden gelen sürüşün azalması, nöromüsküler iletim değişiklikleri, hücre dışı ve içi iyon dengesinin bozulması, glikojen azalması, inorganik fosfat ve metabolit değişimleri, ısı artışı, sıvı kaybı ve mikrohasar birlikte rol oynayabilir. Laktat, yorgunluğun tek ve zorunlu nedeni değildir; dolaşımla uzaklaştırılabilir, karaciğerde glikoza çevrilebilir veya dokularda enerji kaynağı olarak kullanılabilir.

İskelet kası lifleri metabolik ve kasılma özellikleri bakımından farklılaşır. **Yavaş oksidatif lifler** miyoglobin, mitokondri ve kılcal damar bakımından zengindir; daha yavaş kuvvet üretir, uzun süre dayanır. **Hızlı glikolitik lifler** daha büyük ve hızlı kuvvet üretebilir, glikolitik kapasitesi yüksek fakat daha çabuk yorulur. Çoğu kas farklı lif tiplerini birlikte taşır. Antrenman mitokondri, kılcal damar, enzim ve lif çapı gibi özellikleri etkileyebilir; sinirsel katılım becerisi de kuvvet artışına katkı verir.

Hareket sistemi sağlığında düzenli ağırlık taşıyan egzersiz kemiğe yapım yönünde mekanik uyarı, direnç egzersizi kas protein sentezi için uyaran sağlar. Yeterli enerji, protein, kalsiyum, fosfor ve D vitamini önemlidir; fakat tek bir besin egzersiz ve hormonal denge olmadan sistemi korumaz. Ani ve hazırlıksız aşırı yük tendon, ligament, kas veya kemiği farklı biçimlerde yaralayabilir. **Burkulma** çoğunlukla ligamentin, **zorlanma** kas veya tendonun aşırı gerilmesiyle ilişkilidir; çıkıkta eklem yüzleri normal ilişkisini kaybeder. Osteoporoz kemik kütlesi ve mikro mimarisinin bozulmasıyla kırık riskini artırır; artrit ise tek hastalık değil, farklı nedenlerle eklemde ağrı–iltihap veya dejenerasyon oluşturan durumlar grubudur.`,
      },
      {
        id: 'dh-temel-kasilma-map',
        type: 'concept_map',
        title: 'Motor komuttan eklem hareketine neden–sonuç zinciri',
        intro: 'Her basamak bir sonraki için gereklidir; zincirin kesildiği yer hareket kaybının mekanizmasını belirler.',
        nodes: [
          { id: 'motor', label: 'Motor nöron impulsu', detail: 'Akson ucunda Ca²⁺ girişi' },
          { id: 'ach', label: 'ACh ve uç plak', detail: 'Kas aksiyon potansiyeli' },
          { id: 't', label: 'Sarkolemma–T tübülü', detail: 'Uyarıyı lif içine taşır' },
          { id: 'ca', label: 'SR’den Ca²⁺', detail: 'Troponin–tropomiyozin kontrolü' },
          { id: 'kopru', label: 'Çapraz köprü döngüsü', detail: 'Aktin–miyozin ve ATP' },
          { id: 'hareket', label: 'Tendon–kemik–eklem', detail: 'Kuvvetin harekete aktarılması' },
        ],
        links: [
          { from: 'motor', to: 'ach', label: 'ACh salgılatır' },
          { from: 'ach', to: 't', label: 'aksiyon potansiyeli başlatır' },
          { from: 't', to: 'ca', label: 'SR kanalını etkiler' },
          { from: 'ca', to: 'kopru', label: 'bağlanma bölgesini açar' },
          { from: 'kopru', to: 'hareket', label: 'kuvvet üretip aktarır' },
          { from: 'hareket', to: 'motor', label: 'propriyoseptif geri bildirim' },
        ],
        caption: 'Kasılma açık bir doğrusal yol gibi başlar; duyu geri bildirimiyle kapalı bir motor kontrol döngüsüne dönüşür.',
      },
      {
        id: 'dh-temel-kasilma-table',
        type: 'compare',
        title: 'Kasılma biçimleri',
        columns: ['Kas uzunluğu', 'Yükün hareketi', 'Örnek'],
        rows: [
          { label: 'İzometrik', values: ['Belirgin değişmez', 'Hareket etmeyebilir', 'Duvarı itme, postürü koruma'] },
          { label: 'Konsantrik', values: ['Kısalır', 'Kasın çekiş yönünde hareket eder', 'Dambılı kaldırma'] },
          { label: 'Eksantrik', values: ['Etkin olduğu hâlde uzar', 'Dış yük kontrollü ilerler', 'Dambılı yavaş indirme'] },
        ],
        insight: 'Kasın etkinliği kuvvet üretmesiyle tanımlanır; net uzunluk değişimi dış yükle üretilen kuvvetin ilişkisine bağlıdır.',
      },
      {
        id: 'dh-temel-kasilma-example',
        type: 'worked_example',
        title: 'Basamak hasarından sonucu çıkar',
        question: 'Bir kas lifinde ACh reseptörleri çalışıyor ve aksiyon potansiyeli oluşuyor; fakat sarkoplazmik retikulumdan Ca²⁺ salınamıyor. Hangi olaylar aksar?',
        steps: [
          { title: 'Sağlam basamağı belirle', body: 'Nöromüsküler iletim ve sarkolemma uyarılması gerçekleşmiştir.' },
          { title: 'Kesilen halkayı bul', body: 'Sitozol Ca²⁺ düzeyi yeterince artmadığı için troponin etkinleşemez ve tropomiyozin bağlanma bölgelerini kapalı tutar.' },
          { title: 'Mekanik sonucu çıkar', body: 'Aktin–miyozin çapraz köprülerinin sayısı ciddi biçimde azalır; sarkomer yeterli kuvvet üretemez.' },
        ],
        answer: 'Elektriksel uyarı oluşsa da uyarılma–kasılma eşleşmesi kesilir; bağlanma bölgeleri açılmadığı için çapraz köprü ve kas kuvveti azalır.',
        takeaway: 'İmpulsun kasa ulaşması, Ca²⁺ aracılı kasılmanın mutlaka gerçekleştiği anlamına gelmez.',
      },
      {
        id: 'dh-temel-kasilma-trap',
        type: 'trap',
        title: 'ATP’nin yalnız kasılma için gerektiğini sanmak',
        wrong: '“ATP biterse kas gevşer; çünkü kasılacak enerjisi kalmaz.”',
        right: 'ATP miyozinin aktinden ayrılması ve Ca²⁺’ın depoya pompalanması için de gereklidir; ATP yokluğu gevşemeyi engelleyebilir.',
        body: 'Kasılma ve gevşeme karşıt görünse de ikisi de aktif moleküler süreçler içerir.',
      },
    ],
  },
]

const interaktifBolumler = destekHareketSistemi.document.sections
  .filter((section) => section.id !== 'dh-quiz' && section.id !== 'dh-kapanis')
const kapanis = destekHareketSistemi.document.sections.find((section) => section.id === 'dh-kapanis')

export default {
  ...destekHareketSistemi,
  slug: 'destek-hareket-sistemi-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Destek ve Hareket Sistemi: Ayrıntılı Temel Not',
  subtitle: 'İskelet, kemik ve kıkırdak dokuyu; eklemleri, kas dokularını ve kasılmanın moleküler mekanizmasını eksiksiz ve neden–sonuç ilişkileriyle öğren.',
  document: {
    ...destekHareketSistemi.document,
    estimated_minutes: 175,
    outcomes: [
      ...destekHareketSistemi.document.outcomes,
      'Kemikleri biçimlerine göre sınıflandırıp eksen–üyeler iskeletinin yapılarını ve işlevlerini açıklayabileceksin.',
      'Epifiz plağında boyuna büyümeyi, periostta enine büyümeyi ve kırık onarımının temel evrelerini sıralayabileceksin.',
      'Nöromüsküler kavşaktan T tübülü ve sarkoplazmik retikuluma uzanan uyarılma–kasılma eşleşmesini açıklayabileceksin.',
      'İzometrik, konsantrik ve eksantrik kasılmayı; motor birim katılımı ve kas lifi tiplerini karşılaştırabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 3),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(3),
      temelEkBolumler[1],
      kapanis,
    ],
  },
}
