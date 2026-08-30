/**
 * TYT BİYOLOJİ · HAM / TEMEL ÖĞRENME NOTU
 *
 * Gold standard: biology-v1
 * Konunun bilgi tabanını tek akışta kurar. Sesli anlatım, animasyon ve
 * yoğun soru pratiği aynı topic altındaki dört interactive notun görevidir.
 */

export default {
  slug: 'canlilarin-temel-bilesenleri-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'TYT', subject: 'Biyoloji', topic: 'Canlıların Temel Bileşenleri' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  title: 'Canlıların Temel Bileşenleri: Ayrıntılı Temel Not',
  subtitle: 'Su ve minerallerden enzim, DNA, vitamin ve ATP’ye kadar bütün bileşikleri yapı–görev–tepkime ilişkisiyle tek bilgi sistemi içinde öğren.',

  document: {
    version: 2,
    estimated_minutes: 120,
    prerequisites: [
      { topic: 'Canlıların Ortak Özellikleri', why: 'Metabolizma, hücresel yapı, beslenme ve ATP kavramlarının genel anlamı bilinmelidir.' },
      { topic: 'Temel kimya dili', why: 'Atom, element, molekül, iyon, bağ, asit ve baz sözcükleri bu not içinde kısaca açıklanır; ileri kimya hesabı gerekmez.' },
    ],
    outcomes: [
      'İnorganik ve organik bileşikleri yapı, üretim ve görev bakımından ayırt edebileceksin.',
      'Suyun kutupluluğundan canlılar için önemli fiziksel özelliklerini çıkarabileceksin.',
      'Karbonhidrat, lipit ve proteinlerin yapı taşlarını, bağlarını, çeşitlerini ve görevlerini karşılaştırabileceksin.',
      'Enzimlerin çalışma ilkesini ve enzim hızını etkileyen faktörlerin grafiklerini yorumlayabileceksin.',
      'Vitaminleri çözünürlüklerine, temel görevlerine ve eksiklik sonuçlarına göre sınıflandırabileceksin.',
      'Nükleotit, DNA, RNA ve ATP arasındaki yapısal benzerlik ile işlev farkını açıklayabileceksin.',
      'Dehidrasyon–hidroliz ve ATP–ADP dönüşümlerinde su, enerji ve enzim ilişkisini kurabileceksin.',
      'ÖSYM öncüllerindeki enerji verir, düzenleyicidir, yapıya katılır, sindirilir ve depolanır ifadelerini doğru kapsamda değerlendirebileceksin.',
    ],

    sections: [
      {
        id: 'tb-kapsam', kind: 'opening', title: 'Madde, element, bileşik ve temel sınıflandırma',
        lead: 'Canlı vücudu özel bir maddeden değil, cansız çevrede de bulunan elementlerin belirli bağlarla ve düzenle bir araya gelmesinden oluşur.',
        blocks: [
          {
            id: 'tb-kapsam-prose', type: 'prose',
            body: `**Madde**, kütlesi ve hacmi olan her şeydir. Maddeyi oluşturan temel kimyasal türler atomlardır. Aynı proton sayısına sahip atomlar bir **elementi** oluşturur. Karbon (C), hidrojen (H), oksijen (O), azot (N), fosfor (P), kükürt (S), kalsiyum (Ca), sodyum (Na), potasyum (K), magnezyum (Mg), demir (Fe), klor (Cl) ve iyot (I) canlı yapısında sık karşılaşılan elementlerdir.

İki veya daha fazla atom kimyasal bağlarla birleştiğinde **molekül** oluşabilir. Farklı elementlerin belirli oranlarda birleşmesiyle oluşan saf maddelere **bileşik** denir. Su H₂O, karbondioksit CO₂, glikoz C₆H₁₂O₆ formülüyle gösterilir. Bir bileşiğin özellikleri, onu oluşturan serbest elementlerin özelliklerinden farklıdır.

Canlıların temel bileşenleri **inorganik** ve **organik** bileşikler olarak incelenir. İnorganik bileşikler su, mineraller, asitler, bazlar ve tuzlardır. Organik bileşiklerin temel iskeletinde karbon bulunur; karbonhidratlar, lipitler, proteinler, enzimler, vitaminler, nükleik asitler ve ATP bu başlıkta ele alınır. “Karbon içerir” ifadesi tek başına organik olmayı garanti etmez; CO₂, CO ve karbonat gibi bazı karbonlu maddeler biyolojide inorganik kabul edilir.

İnorganik maddeler genellikle sindirilmeden hücre zarından geçebilecek kadar küçüktür. Mineraller canlı tarafından üretilemez ve çevreden alınır; su da temel olarak çevreden alınır fakat bazı metabolik tepkimelerde su oluşabilir. Organik maddelerin bir bölümü canlı tarafından sentezlenebilir; büyük olanların çoğu hücre zarından geçmeden önce sindirimle küçük birimlere ayrılır. Bu ayrımlar genel kuraldır; her organik molekül polimer değildir, her organik molekül enerji vermez ve her organik molekül sindirilmez.`
          },
          {
            id: 'tb-ana-harita', type: 'concept_map', title: 'Temel bileşiklerin ana haritası',
            intro: 'Sınıflandırma, yalnız adları değil yapı ve görev ilişkilerini de gösterir.',
            nodes: [
              { id: 'bilesik', label: 'Canlı bileşikleri', detail: 'Hücresel yapı ve metabolizmanın maddeleri' },
              { id: 'inorganik', label: 'İnorganik', detail: 'Su, mineral, asit, baz, tuz' },
              { id: 'organik', label: 'Organik', detail: 'Karbon iskeletli temel biyomoleküller' },
              { id: 'enerji', label: 'Enerji verenler', detail: 'Karbonhidrat, lipit, gerektiğinde protein' },
              { id: 'yapi', label: 'Yapıya katılanlar', detail: 'Su, mineral ve birçok organik bileşik' },
              { id: 'duzenleme', label: 'Düzenleyiciler', detail: 'Su, mineral, enzim, vitamin' },
            ],
            links: [
              { from: 'bilesik', to: 'inorganik', label: 'iki ana gruptan biri' },
              { from: 'bilesik', to: 'organik', label: 'iki ana gruptan biri' },
              { from: 'organik', to: 'enerji', label: 'bazıları' },
              { from: 'inorganik', to: 'yapi', label: 'katılabilir' },
              { from: 'organik', to: 'yapi', label: 'katılabilir' },
              { from: 'inorganik', to: 'duzenleme', label: 'görev alabilir' },
              { from: 'organik', to: 'duzenleme', label: 'görev alabilir' },
            ],
            caption: 'Bir madde tek görev sınıfına mahkûm değildir: su hem yapısal hem düzenleyici, proteinler hem yapısal hem işlevsel olabilir.'
          },
          {
            id: 'tb-sinif-trap', type: 'trap', title: 'Organik–inorganik ayrımında aşırı genelleme',
            wrong: '“Karbon içeren her bileşik organiktir; organiklerin hepsi enerji verir ve sindirilir.”',
            right: 'CO₂ gibi karbonlu inorganikler vardır. Vitamin ve enzimler enerji vermez; glikoz ve vitamin gibi küçük organikler sindirilmeden emilebilir.',
            body: 'Öncülde “hepsi” veya “yalnızca” varsa molekülün yapısı ve görevi ayrı ayrı denetlenmelidir.'
          },
        ],
      },

      {
        id: 'tb-su', kind: 'build', title: '1. Su: yapı, çözücülük ve sıcaklık dengesi',
        lead: 'Suyun canlılık için önemi miktarından önce molekül yapısından doğar.',
        blocks: [
          {
            id: 'tb-su-prose', type: 'prose',
            body: `Su molekülünde oksijen, ortak elektronları hidrojenlerden daha güçlü çeker. Molekül açılı olduğu için yük dağılımı dengelenmez; oksijen tarafı kısmen negatif, hidrojen tarafları kısmen pozitif kalır. Bu yapıya **polar yapı** denir. Komşu su moleküllerinin zıt kısmi yükleri arasında **hidrojen bağları** kurulur. Hidrojen bağı, molekül içindeki O–H kovalent bağından daha zayıftır; çok sayıda olduğunda suyun fiziksel özelliklerini belirler.

Su; iyonları ve polar molekülleri çevreleyerek çözer. Böylece minerallerin, glikozun, amino asitlerin ve birçok atığın kan, doku sıvısı, sitoplazma veya bitki öz suyunda taşınmasına ortam sağlar. Su bütün maddeleri iyi çözmez; yağlar gibi apolar maddeler suda çözünmez. Bu seçicilik hücre zarındaki fosfolipitlerin düzenlenmesinde önemlidir.

Suyun **özgül ısısı yüksektir**; sıcaklığını değiştirmek için çok enerji gerekir. Canlı vücudunda ve sucul ortamlarda ani sıcaklık değişimleri sınırlanır. **Buharlaşma ısısı yüksektir**; su buharlaşırken çevreden ısı alır. Terleme ve bitkilerde terleme yoluyla su kaybı serinletici etki oluşturur. Katı suyun yoğunluğu sıvı sudan düşük olduğu için buz yüzeyde kalır; üstteki buz tabakası alttaki suyu yalıtır ve sucul yaşamın kışın sürmesine katkı sağlar.

Su moleküllerinin birbirini çekmesine **kohezyon**, başka polar yüzeylere tutunmasına **adezyon** denir. Kohezyon yüzey gerilimine, kohezyon ve adezyon birlikte dar borularda kılcallığa katkı verir. Bitkilerde suyun ksilemde kesintisiz sütun hâlinde taşınması yalnız kılcallıkla açıklanmaz; terleme çekimi, kohezyon ve adezyon birlikte etkilidir.

Su birçok metabolik tepkimenin maddesidir. **Hidrolizde** bağ koparken su kullanılır. Bazı **dehidrasyon sentezi** tepkimelerinde bağ kurulurken su açığa çıkar. Fotosentezde su elektron ve hidrojen kaynağı olabilir; oksijenli solunumun sonunda su oluşur. Bu nedenle su yalnız çözücü veya dolgu maddesi değildir.`
          },
          {
            id: 'tb-su-figure', type: 'figure', kind: 'su-polarlik', title: 'Suyun kutupluluğu ve hidrojen bağları',
            purpose: 'Suyun makroskobik özelliklerini molekülün yük dağılımına bağlamak.', width: 'wide', complexity: 'medium',
            caption: 'Molekül içindeki O–H bağı kovalent, farklı su molekülleri arasındaki çekim hidrojen bağıdır.',
            focus: [
              { title: 'Kutupluluk', body: 'Oksijen ve hidrojen taraflarındaki kısmi yükleri ayır.' },
              { title: 'Moleküller arası bağ', body: 'Hidrojen bağının iki farklı su molekülü arasında kurulduğunu izle.' },
            ],
          },
          {
            id: 'tb-su-why', type: 'why', question: 'Su neden sıcaklık değişimlerini yavaşlatır?',
            body: 'Verilen ısının bir bölümü önce su molekülleri arasındaki hidrojen bağlarının gevşetilmesine gider. Moleküllerin hareket enerjisi ve dolayısıyla sıcaklık daha yavaş artar. Soğurken hidrojen bağlarının kurulması çevreye enerji verir; sıcaklık düşüşü de yavaşlar.'
          },
          {
            id: 'tb-su-check', type: 'checkpoint',
            prompt: 'Buz suyun dibine batsaydı, göl ekosistemlerinde kış koşullarının sonucu nasıl değişirdi?',
            hint: 'Donmanın yüzeyden mi dipten mi ilerleyeceğini düşün.',
            answer: 'Buz dibe çökseydi yüzeyde oluşan her yeni buz tabakası da batabilir, donma derine doğru ilerleyebilirdi. Yüzeyde yalıtıcı buz tabakası oluşmadığı için gölün büyük bölümü donabilir ve sıvı yaşam alanı daralabilirdi.'
          },
        ],
      },

      {
        id: 'tb-mineral-ph', kind: 'build', title: '2. Mineraller, asitler, bazlar, tuzlar ve pH',
        lead: 'Az miktarda bulunmaları, minerallerin önemsiz olduğu anlamına gelmez; birçok yapı ve tepkime için zorunludurlar.',
        blocks: [
          {
            id: 'tb-mineral-prose', type: 'prose',
            body: `**Mineraller**, canlıların sentezleyemediği ve çevreden hazır aldığı inorganik maddelerdir. Enerji vermez, sindirilmez ve türlerine göre yapıya katılır ya da düzenleyici görev yapar. Eksiklikleri belirli işlevleri aksatır; fazlalıkları da iyon dengesi, sinir iletimi veya organ çalışması üzerinde zararlı olabilir.

Kalsiyum ve fosfor kemik ve diş yapısına katılır; kalsiyum ayrıca kas kasılması, sinaptik iletim ve kan pıhtılaşmasında görev alır. Fosfor ATP’nin, nükleotitlerin ve fosfolipitlerin yapısındadır. Demir hemoglobinin yapısına katılarak oksijen taşınmasında rol oynar. Magnezyum bitkilerde klorofilin merkezindedir ve birçok enzimin çalışmasına yardım eder. İyot tiroit hormonlarının sentezi için gereklidir. Sodyum ve potasyum sinir hücrelerinde elektriksel potansiyelin ve su dengesinin kurulmasında önem taşır. Klor, iyon ve asit–baz dengesine katılır; mide öz suyundaki hidroklorik asidin bileşenidir. Flor diş minesinin dayanıklılığıyla, çinko çok sayıda enzim ve proteinle ilişkilidir.

Suda çözündüğünde H⁺ derişimini artıran maddeler **asit**, OH⁻ derişimini artıran veya H⁺ alan maddeler **baz** olarak tanımlanabilir. **pH**, çözeltinin asitlik–bazlık durumunu gösteren logaritmik ölçektir. 25 °C için pH 7 nötr, 7’den küçük asidik, 7’den büyük baziktir. Ölçek logaritmik olduğundan pH 3 ile pH 4 arasında H⁺ derişimi bakımından on kat fark vardır.

Hücreler ve enzimler belirli pH aralıklarında çalışır. **Tampon sistemler**, ortama az miktarda asit veya baz eklendiğinde H⁺ alıp vererek pH değişimini sınırlar; pH’ı mutlak biçimde sabitlemez. **Tuzlar**, asit ile bazın tepkimesinden oluşabilir ve suda iyonlarına ayrılabilir. NaCl gibi tuzlar ozmotik dengeye ve iyon gereksinimine katkı sağlar. Asit, baz ve tuzlar enerji kaynağı değildir.`
          },
          {
            id: 'tb-mineral-table', type: 'table', title: 'Başlıca mineraller ve biyolojik görevleri',
            columns: ['Mineral', 'Temel görevler', 'Eksiklikle ilişkilendirilen sonuç'],
            rows: [
              ['Ca', 'Kemik–diş, kasılma, pıhtılaşma, hücresel sinyal', 'Kemik zayıflığı, kas ve iletim bozuklukları'],
              ['P', 'ATP, DNA–RNA, fosfolipit, kemik–diş', 'Enerji ve yapı süreçlerinde aksama'],
              ['Fe', 'Hemoglobin ve bazı enzimler', 'Demir eksikliği anemisi, oksijen taşımanın azalması'],
              ['Mg', 'Klorofil, enzimlerin çalışması', 'Bitkide kloroz; metabolik aksama'],
              ['I', 'Tiroit hormonları', 'Guatr ve metabolizma düzeninin bozulması'],
              ['Na–K', 'Sinir iletimi, kasılma, ozmotik denge', 'İletim ve sıvı dengesi sorunları'],
              ['Cl', 'İyon dengesi, mide HCl’si', 'Sindirim ve sıvı dengesi sorunları'],
              ['Zn', 'Enzimler, protein sentezi, onarım', 'Büyüme ve iyileşmede yavaşlama'],
            ],
            caption: 'Eksiklik sonuçları tek nedene özgü tanı değildir; tabloda TYT düzeyindeki temel biyolojik bağlantılar verilmiştir.'
          },
          {
            id: 'tb-ph-figure', type: 'figure', kind: 'ph-skalasi', title: 'pH skalası ve enzim ortamları',
            purpose: 'Asidik, nötr ve bazik bölgeleri logaritmik ölçek üzerinde ayırmak.', width: 'wide', complexity: 'medium',
            caption: 'pH değeri bir birim değiştiğinde H⁺ derişimi on kat değişir; pH 2, pH 3’ten on kat daha asidiktir.',
            focus: [
              { title: 'Asidik bölge', body: 'pH 7’nin altında H⁺ derişimi daha yüksektir.' },
              { title: 'Nötr nokta', body: 'Saf suda H⁺ ve OH⁻ dengededir.' },
              { title: 'Bazik bölge', body: 'pH 7’nin üstünde OH⁻ etkisi baskındır.' },
            ],
          },
          {
            id: 'tb-mineral-trap', type: 'trap', title: 'Mineral görevinden yanlış sonuç çıkarma',
            wrong: '“Demir hemoglobinin yapısındaysa demir organiktir; kalsiyum kemikteyse yalnız yapısaldır.”',
            right: 'Bir mineral organik molekülün yapısına katılsa da inorganik niteliğini korur. Aynı mineral birden fazla görevde bulunabilir.',
            body: 'Sınıflandırma maddenin kimyasal niteliğine, görev ise bulunduğu biyolojik sisteme dayanır.'
          },
        ],
      },

      {
        id: 'tb-organik-kurulum', kind: 'build', title: '3. Organik moleküllerin kuruluşu: monomer, polimer, dehidrasyon ve hidroliz',
        lead: 'Büyük biyomolekülleri anlamanın anahtarı, yapı taşlarının hangi bağlarla birleştirildiğini izlemektir.',
        blocks: [
          {
            id: 'tb-kurulum-prose', type: 'prose',
            body: `Küçük yapı birimlerine **monomer**, çok sayıda benzer veya ilişkili monomerin bağlanmasıyla oluşan büyük yapılara **polimer** denir. Monosakkaritler polisakkaritlerin, amino asitler proteinlerin, nükleotitler nükleik asitlerin monomeridir. Lipitler ise çoğu kaynakta büyük organik moleküller arasında incelenir fakat gerçek polimer kabul edilmez; trigliserit gliserol ve yağ asitlerinden kurulur, tekrar eden tek tip monomer zinciri değildir.

Monomerler arasında kovalent bağ kurulurken bir su molekülünün açığa çıktığı tepkimelere **dehidrasyon sentezi** veya kondenzasyon denir. Karbonhidratlarda glikozit bağı, proteinlerde peptit bağı, trigliseritlerde ester bağı oluşurken su açığa çıkabilir. Nükleik asit zincirinde nükleotitleri fosfodiester bağları birleştirir. Bu tepkimeler enzimlerle yürütülür ve canlı hücrede enerji gerektirebilir.

Bir kovalent bağın su katılarak koparılmasına **hidroliz** denir. Suyun H ve OH bileşenleri ayrılan birimlerin uçlarına eklenir. Sindirimde büyük besinlerin emilebilir birimlere ayrılması hidroliz örneğidir. Hidroliz de kendiliğinden ve kontrolsüz gerçekleşmez; uygun enzim gerekir. Bir polimer hidroliz edilirken kullanılan su sayısı koparılan bağ sayısıyla ilişkilidir.

Doğrusal bir zincirde n monomer arasında n−1 bağ bulunur. n monomerden tek bir zincir oluşturuluyorsa çoğu TYT modelinde n−1 su açığa çıkar; zincir tamamen monomerlerine ayrılırken n−1 su kullanılır. Bu ilişki, aynı tip bağlar için geçerli sayma modelidir. Dallanma, halka oluşumu veya birden fazla ürün gibi özel durumlarda doğrudan ezber yerine kurulan ya da koparılan bağ sayısı izlenmelidir.`
          },
          {
            id: 'tb-sentez-figure', type: 'figure', kind: 'sentez-hidroliz', title: 'Dehidrasyon sentezi ve hidroliz',
            purpose: 'Bağ kurulması ve bağ kopmasında suyun yerini karşılaştırmak.', width: 'wide', complexity: 'medium',
            caption: 'Dehidrasyon bağ kurar ve su çıkarır; hidroliz su kullanır ve bağı koparır. İki yön de enzim denetimindedir.',
            focus: [
              { title: 'Sentez yönü', body: 'Monomerlerin bağlanırken hangi uçlardan H ve OH verdiğini izle.' },
              { title: 'Hidroliz yönü', body: 'Suyun bağın iki yanına nasıl eklendiğini izle.' },
            ],
          },
          {
            id: 'tb-bag-example', type: 'worked_example', title: 'Bağ ve su sayısı',
            prompt: 'On monosakkaritten oluşan doğrusal bir polisakkarit zinciri tamamen hidroliz ediliyor. Kaç glikozit bağı kopar ve kaç su kullanılır?',
            steps: [
              { title: 'Birimi belirle', body: 'Doğrusal zincirde 10 monomer vardır.' },
              { title: 'Bağı say', body: 'Doğrusal tek zincirde bağ sayısı n−1 olduğundan 9 glikozit bağı bulunur.' },
              { title: 'Hidrolizi bağla', body: 'Her bağın kopmasında bir su kullanıldığı kabul edilir.' },
            ],
            answer: '9 bağ kopar ve 9 su kullanılır.',
            takeaway: 'Monomer sayısını değil, kurulan veya koparılan bağ sayısını su sayısıyla eşleştir.'
          },
          {
            id: 'tb-kurulum-trap', type: 'trap', title: 'Sentez ve hidrolizde ATP genellemesi',
            wrong: '“Dehidrasyonda su çıktığı için enerji de mutlaka açığa çıkar; hidrolizde su kullanıldığı için ATP mutlaka harcanır.”',
            right: 'Su bilançosu enerji bilançosunu tek başına belirlemez. Canlıdaki sentezler genellikle enerji gerektirir; hidrolizin ATP üretip üretmemesi tepkimenin ve devamındaki yolların niteliğine bağlıdır.',
            body: 'Su sayısından doğrudan ATP sayısı çıkarılmaz.'
          },
        ],
      },

      {
        id: 'tb-karbonhidrat', kind: 'deepen', title: '4. Karbonhidratlar: hızlı enerji, depo ve yapı',
        lead: 'Karbonhidratın görevi, içerdiği şeker birimlerinin türüne ve bağlanma biçimine göre değişir.',
        blocks: [
          {
            id: 'tb-karbonhidrat-prose', type: 'prose',
            body: `Karbonhidratlar temel olarak C, H ve O elementlerini içerir. Hücrelerin öncelikli enerji kaynaklarından biridir; ayrıca depo ve yapı maddesi olabilir. Karbonhidratlar **monosakkarit, disakkarit ve polisakkarit** olarak sınıflandırılır.

**Monosakkaritler** daha küçük karbonhidrata hidroliz edilemeyen tek şekerlerdir. Karbon sayılarına göre trioz, pentoz ve heksoz olarak ayrılabilir. Beş karbonlu riboz RNA ile ATP’de, deoksiriboz DNA’da bulunur. Altı karbonlu glikoz hücresel solunumda sık kullanılan yakıttır. Fruktoz meyve şekeri, galaktoz süt şekerinin bileşenidir. Glikoz, fruktoz ve galaktoz aynı molekül formülüne sahip olabilir fakat atom dizilişleri farklıdır; izomerdir.

İki monosakkaritin glikozit bağıyla birleşmesiyle **disakkarit** oluşur. Glikoz + glikoz → maltoz, glikoz + fruktoz → sakkaroz, glikoz + galaktoz → laktoz olarak öğretilir. Bağ kurulurken su çıkar; disakkarit sindirilirken ilgili enzim ve su gerekir. İnsanlarda laktaz eksikliği laktozun yeterince parçalanamamasına yol açabilir.

Çok sayıda monosakkaritin birleşmesiyle **polisakkaritler** oluşur. Nişasta bitkilerin, glikojen hayvanların ve mantarların glikoz deposudur. Selüloz bitki hücre duvarının yapısına katılır. Kitin mantar hücre duvarında ve eklembacaklıların dış iskeletinde bulunur; yapısında azot vardır. İnsan sindirim sistemi nişasta ve glikojeni hidroliz edebilir; selülozu parçalayan enzimi üretmez. Selüloz besin lifi olarak bağırsak hareketlerine katkı sağlar.

Nişasta, glikojen ve selüloz glikozlardan oluşmasına rağmen bağlanma biçimleri ve dallanma düzeyleri farklıdır. Bu yapısal fark, molekülün şeklini, enzimlerin bağlara erişimini ve görevini değiştirir. Aynı monomer aynı işlev demek değildir.`
          },
          {
            id: 'tb-karbonhidrat-table', type: 'table', title: 'Karbonhidratların temel sınıfları',
            columns: ['Sınıf', 'Örnekler', 'Temel bilgi'],
            rows: [
              ['Monosakkarit', 'Riboz, deoksiriboz, glikoz, fruktoz, galaktoz', 'Sindirilmeden emilebilir; karbonhidrat monomeridir.'],
              ['Disakkarit', 'Maltoz, sakkaroz, laktoz', 'İki monosakkarit ve bir glikozit bağı içerir.'],
              ['Depo polisakkarit', 'Nişasta, glikojen', 'Nişasta bitkide; glikojen hayvan ve mantarda depolanır.'],
              ['Yapısal polisakkarit', 'Selüloz, kitin', 'Selüloz bitki hücre duvarında; kitin mantar duvarı ve eklembacaklı dış iskeletindedir.'],
            ],
            caption: 'Depo yeri ile sentezleyen canlı grubu aynı öncülde ayrı ayrı sorulabilir.'
          },
          {
            id: 'tb-karbonhidrat-check', type: 'checkpoint',
            prompt: 'Nişasta, glikojen ve selüloz glikozlardan oluştuğuna göre neden aynı görevi yapmaz ve aynı enzimle sindirilmez?',
            hint: 'Monomer türünün yanında bağ tipi ve dallanmayı düşün.',
            answer: 'Glikoz birimlerinin bağlanma yönü, bağ türü ve zincirin dallanması farklıdır. Molekülün üç boyutlu yapısı değişir; enzimler belirli bağ ve şekilleri tanıdığı için bir polisakkariti parçalayan enzim diğerine etki etmeyebilir.'
          },
          {
            id: 'tb-karbonhidrat-trap', type: 'trap', title: 'Glikozu yalnız besin sanmak',
            wrong: '“Glikoz yalnız enerji verir; yapıya katılmaz.”',
            right: 'Glikoz enerji üretiminde kullanılabilir, glikojen ve nişasta olarak depolanabilir, selüloz gibi yapısal polisakkaritlerin monomeri olabilir.',
            body: 'Bir molekülün hücredeki kaderini ihtiyaç ve metabolik yol belirler.'
          },
        ],
      },

      {
        id: 'tb-lipit', kind: 'deepen', title: '5. Lipitler: yoğun enerji deposu, zar ve düzenleme',
        lead: 'Lipitlerin ortak özelliği tek bir monomere sahip olmaları değil, suyla zayıf etkileşmeleri ve çoğunlukla hidrofobik olmalarıdır.',
        blocks: [
          {
            id: 'tb-lipit-prose', type: 'prose',
            body: `Lipitler C, H ve O içerir; bazı çeşitlerinde P ve N de bulunabilir. Oksijen oranları karbonhidratlara göre genellikle düşüktür. Birim kütlede verdikleri enerji karbonhidrat ve proteinlerden daha fazladır; bu nedenle uzun süreli enerji deposu olmaya uygundur. Suda çözünmez veya çok az çözünür, eter ve benzen gibi organik çözücülerde çözünebilir.

**Trigliserit**, bir gliserol ile üç yağ asidinin ester bağlarıyla birleşmesinden oluşur; üç su açığa çıkar. Yağ asitlerinin karbon zincirinde çift bağ yoksa **doymuş**, bir veya daha fazla çift bağ varsa **doymamış** yağ asidi denir. Doymuş yağlar düzgün paketlenmeye daha elverişli olduğundan çoğu oda sıcaklığında katı; doymamış yağlar zincir kıvrımları nedeniyle çoğu oda sıcaklığında sıvıdır. Bu ifade genel eğilimdir, kesin sınıflandırma değildir.

Trigliseritler uzun süreli enerji depolar; deri altında ısı yalıtımına, organ çevresinde mekanik korunmaya katkı verebilir. Karbonhidratlara göre daha fazla enerji vermelerine rağmen hücreler kısa süreli enerji gereksiniminde çoğunlukla karbonhidratları önce kullanır. Yağların parçalanması daha fazla oksijen gerektirebilir; suda çözünmedikleri için taşınma ve kullanıma hazırlanma süreçleri farklıdır.

**Fosfolipit**, gliserol, iki yağ asidi ve fosfatlı polar baş bölgesinden oluşur. Baş kısmı suyla etkileşir, yağ asidi kuyrukları sudan kaçınır. Sulu ortamda çift tabaka oluşturması hücre zarının temelini kurar. **Steroitler** dört halkalı karbon iskeletine sahiptir; kolesterol hayvan hücre zarında bulunur ve bazı steroit hormonların öncüsüdür. Kolesterolün varlığı ile kanda aşırı taşınmasının sağlık sonucu aynı ifade değildir. **Mumlar** su kaybını azaltan koruyucu örtüler oluşturabilir; bitki yaprağı ve bazı hayvan yüzeylerinde görülür.

Lipitler gerçek polimer sayılmaz. Trigliseritte gliserol ve yağ asitleri yapı bileşenleridir; “yağların monomeri” ifadesi okul düzeyinde pratik kullanılsa da polimer mantığıyla tam örtüşmez.`
          },
          {
            id: 'tb-lipit-figure', type: 'figure', kind: 'fosfolipit-cift-tabaka', title: 'Fosfolipit ve çift tabaka oluşumu',
            purpose: 'Fosfolipidin çift karakterinden zarın kendiliğinden düzenlenmesini çıkarmak.', width: 'wide', complexity: 'medium',
            caption: 'Hidrofilik başlar suya, hidrofobik kuyruklar birbirine döner; bu düzen hücre zarının seçici sınırını kurar.',
            focus: [
              { title: 'Polar baş', body: 'Fosfat içeren bölümün suya dönük konumunu gör.' },
              { title: 'Apolar kuyruk', body: 'Yağ asidi zincirlerinin sudan uzaklaşıp içte toplandığını gör.' },
              { title: 'Çift tabaka', body: 'İki yüzü suyla temas eden kararlı düzeni izle.' },
            ],
          },
          {
            id: 'tb-lipit-compare', type: 'compare', title: 'Karbonhidrat ve lipit',
            columns: ['Karbonhidrat', 'Lipit'],
            rows: [
              { label: 'Enerji kullanımı', values: ['Öncelikli ve hızlı kullanılabilen kaynak', 'Uzun süreli, yoğun enerji deposu'] },
              { label: 'Suda davranış', values: ['Küçük şekerler genellikle çözünür', 'Genellikle çözünmez veya çok az çözünür'] },
              { label: 'Depo biçimi', values: ['Nişasta veya glikojen', 'Çoğunlukla trigliserit'] },
              { label: 'Yapısal örnek', values: ['Selüloz, kitin', 'Fosfolipit, kolesterol, mum'] },
              { label: 'Birim kütlede enerji', values: ['Daha düşük', 'Daha yüksek'] },
            ],
            insight: '“Daha çok enerji verir” ifadesi “hücre önce kullanır” anlamına gelmez; enerji yoğunluğu ile kullanım önceliği ayrı özelliklerdir.'
          },
        ],
      },

      {
        id: 'tb-protein', kind: 'deepen', title: '6. Proteinler: amino asit dizisinden üç boyutlu işleve',
        lead: 'Bir proteinin görevi yalnız hangi amino asitleri içerdiğine değil, bunların sırasına ve zincirin katlanmasına bağlıdır.',
        blocks: [
          {
            id: 'tb-protein-prose', type: 'prose',
            body: `Proteinler temel olarak C, H, O ve N içerir; bazı proteinlerde S ve başka elementler de bulunabilir. Monomerleri **amino asitlerdir**. Her amino asitte merkez karbon atomuna bir amino grubu, bir karboksil grubu, bir hidrojen ve değişken **R grubu** bağlanır. Amino asit çeşitleri arasındaki kimyasal farkı R grubu belirler.

Bir amino asidin karboksil grubu ile diğerinin amino grubu arasında dehidrasyonla **peptit bağı** kurulur. İki amino asit dipeptit, çok sayıda amino asit polipeptit oluşturur. Bir polipeptit zincirinde amino asit sayısı n ise doğrusal zincirde peptit bağı sayısı n−1’dir. Protein sentezi ribozomda, genetik bilgiye göre gerçekleşir.

Proteinin **birincil yapısı** amino asit dizisidir. Zincirin yerel kıvrımları ikincil, tek polipeptidin bütün üç boyutlu katlanması üçüncül, birden fazla polipeptit alt birimin birleşmesi dördüncül yapı olarak incelenir. Her protein dördüncül yapıya sahip değildir. Amino asit dizisi değişirse R grupları arasındaki etkileşimler ve katlanma değişebilir; işlev etkilenebilir.

Proteinler enzim, hormon, reseptör, taşıyıcı, antikor ve kasılma proteini olarak görev yapabilir; hücre zarı, bağ doku, saç ve tırnak gibi yapılara katılabilir. Gerektiğinde enerji için kullanılabilirler fakat öncelikli enerji deposu değildir. Fazla protein vücutta “protein deposu” biçiminde saklanmaz; amino gruplarının uzaklaştırılmasıyla oluşan azotlu atıklar boşaltılır, kalan karbon iskeleti başka yollara katılabilir.

Yüksek sıcaklık, aşırı pH, yoğun tuz, bazı kimyasallar veya radyasyon proteinin üç boyutlu yapısını bozabilir. Buna **denatürasyon** denir. Peptit bağları çoğu denatürasyonda korunur; birincil yapı genellikle bozulmaz fakat işlevsel şekil kaybolur. Etken hafifse bazı proteinler uygun koşulda yeniden katlanabilir; bu **renatürasyon**dur. Her denatürasyon geri dönüşlü değildir.`
          },
          {
            id: 'tb-amino-figure', type: 'figure', kind: 'amino-asit-peptit', title: 'Amino asit ve peptit bağı',
            purpose: 'Ortak amino asit iskeletini, değişken R grubunu ve bağ kurulumunu ayırmak.', width: 'wide', complexity: 'high',
            caption: 'Peptit bağı amino ve karboksil grupları arasında kurulur; protein çeşitliliğinin temelini amino asit sırası oluşturur.',
            focus: [
              { title: 'Ortak iskelet', body: 'Merkez karbon, amino grubu ve karboksil grubunu belirle.' },
              { title: 'R grubu', body: 'Amino asit çeşidini belirleyen değişken bölgeyi bul.' },
              { title: 'Peptit bağı', body: 'Su çıkışıyla kurulan C–N bağlantısını izle.' },
            ],
          },
          {
            id: 'tb-protein-figure', type: 'figure', kind: 'protein-yapi-duzeyleri', title: 'Proteinin yapı düzeyleri',
            purpose: 'Dizilim değişikliğinin katlanma ve işleve nasıl taşındığını göstermek.', width: 'wide', complexity: 'high',
            caption: 'Birincil yapı bütün sonraki katlanma düzeylerinin bilgi temelidir.',
            focus: [
              { title: 'Birincil', body: 'Amino asit sırasını izle.' },
              { title: 'İkincil', body: 'Yerel sarmal ve tabaka oluşumunu ayır.' },
              { title: 'Üçüncül', body: 'Tek zincirin bütün katlanmasını gör.' },
              { title: 'Dördüncül', body: 'Birden fazla alt birimin birleşmesini gör.' },
            ],
          },
          {
            id: 'tb-protein-trap', type: 'trap', title: 'Denatürasyonu sindirimle karıştırma',
            wrong: '“Yumurta pişince proteinler amino asitlerine ayrılır ve besin değeri tamamen kaybolur.”',
            right: 'Pişirme proteinin üç boyutlu yapısını denatüre eder; çoğu peptit bağı korunur. Sindirim enzimleri daha sonra peptit bağlarını hidroliz eder.',
            body: 'Şeklin bozulması ile monomerlere ayrılma aynı olay değildir.'
          },
        ],
      },

      {
        id: 'tb-enzim-ilke', kind: 'deepen', title: '7. Enzimlerin yapısı ve çalışma ilkesi',
        lead: 'Enzimler tepkimenin mümkün olan yolunu hızlandırır; tepkimenin toplam enerji sonucunu ve ürün kimliğini değiştirmez.',
        blocks: [
          {
            id: 'tb-enzim-ilke-prose', type: 'prose',
            body: `**Enzimler**, canlı hücrelerdeki biyokimyasal tepkimeleri hızlandıran biyolojik katalizörlerdir. Büyük çoğunluğu protein yapılıdır; bazı RNA molekülleri de katalitik olabilir. TYT düzeyinde enzimlerin protein yapılı olduğu temel alınır. Enzimler tepkimeye girer, geçici ara kompleks oluşturur ve tepkime sonunda yapısal olarak yeniden kullanılabilir hâlde çıkar. Kullanılmamaları sonsuza kadar çalışacakları anlamına gelmez; sıcaklık, pH ve hücresel yıkım süreçleri enzimi etkileyebilir.

Bir tepkimenin başlayabilmesi için aşılması gereken enerji eşiğine **aktivasyon enerjisi** denir. Enzim, daha düşük aktivasyon enerjili alternatif yol sağlar. Tepkimenin başlangıç ve son ürünlerinin serbest enerjisini, denge yönünü veya açığa çıkan toplam enerjiyi değiştirmez. Enzim hem ileri hem geri yönü hızlandırabilir; net yönü madde derişimleri ve termodinamik koşullar belirler.

Enzimin substratı bağlayan ve tepkimenin gerçekleştiği bölümüne **aktif merkez** denir. **Substrat**, enzimin etki ettiği maddedir. Aktif merkezin şekli ve kimyasal özellikleri belirli substratlarla uyumludur; buna özgüllük denir. Güncel açıklamada aktif merkez tamamen katı bir kalıp değildir: substrat yaklaşınca enzimde küçük biçim değişiklikleri olabilir. Bu **indüklenmiş uyum** modeli, enzim–substrat etkileşimini açıklar.

Basit enzimler yalnız protein kısmından oluşur. Bileşik enzimlerde protein kısmı **apoenzim**, yardımcı kısım **kofaktör** olarak adlandırılır; aktif bütün **holoenzim**dir. Kofaktör metal iyonu olabilir. Organik yardımcı moleküle **koenzim** denir; vitaminlerin bazıları koenzimlerin yapısına katılır. Apoenzim genellikle substrat özgüllüğünde, yardımcı kısım tepkimenin kimyasal yürütülmesinde rol alır.

Enzimler çoğu kez etki ettiği substrat veya tepkime sonuna “-az” eki alır: amilaz, lipaz, proteaz gibi. Her enzim yalnız hücre içinde çalışmaz; sindirim enzimleri hücrede sentezlenip sindirim boşluğuna salgılanabilir. Enzim sentezi ribozomda olur; enzimin görev yeri farklı olabilir.`
          },
          {
            id: 'tb-aktivasyon-figure', type: 'figure', kind: 'aktivasyon-enerjisi', title: 'Aktivasyon enerjisi ve enzim',
            purpose: 'Enzimin enerji eşiğini düşürmesiyle toplam enerji değişimini ayırmak.', width: 'wide', complexity: 'medium',
            caption: 'Enzimli yolun tepe noktası daha düşüktür; başlangıç ve ürün enerji düzeyleri değişmez.',
            focus: [
              { title: 'Enzimsiz yol', body: 'Yüksek aktivasyon enerjisi tepesini gör.' },
              { title: 'Enzimli yol', body: 'Alternatif yolun daha düşük eşiğini karşılaştır.' },
              { title: 'Enerji farkı', body: 'Giren ve ürün arasındaki toplam farkın aynı kaldığını doğrula.' },
            ],
          },
          {
            id: 'tb-enzim-map', type: 'concept_map', title: 'Enzimli tepkimenin kavram ilişkileri',
            intro: 'Enzimin neyi değiştirdiği ve neyi değiştirmediği aynı haritada ayrılmalıdır.',
            nodes: [
              { id: 'enzim', label: 'Enzim', detail: 'Biyolojik katalizör' },
              { id: 'substrat', label: 'Substrat', detail: 'Aktif merkeze bağlanan giren madde' },
              { id: 'kompleks', label: 'Enzim–substrat kompleksi', detail: 'Geçici etkileşim' },
              { id: 'urun', label: 'Ürün', detail: 'Tepkime sonunda oluşur' },
              { id: 'aktivasyon', label: 'Aktivasyon enerjisi', detail: 'Enzim tarafından düşürülür' },
              { id: 'denge', label: 'Tepkime dengesi', detail: 'Enzim tarafından değiştirilmez' },
            ],
            links: [
              { from: 'enzim', to: 'substrat', label: 'özgül olarak bağlar' },
              { from: 'substrat', to: 'kompleks', label: 'enzimle oluşturur' },
              { from: 'kompleks', to: 'urun', label: 'dönüşür ve ayrılır' },
              { from: 'enzim', to: 'aktivasyon', label: 'düşürür' },
              { from: 'enzim', to: 'denge', label: 'değiştirmez' },
            ],
            caption: 'Enzim tepkimenin hızını değiştirir; ürün çeşidini, dengeyi ve toplam enerji farkını değiştirmez.'
          },
          {
            id: 'tb-enzim-trap', type: 'trap', title: 'Enzim enerji verir veya tepkimeyi başlatır yanılgısı',
            wrong: '“Enzim tepkimeye enerji verir; aktivasyon enerjisini sıfırlar ve daha fazla ürün oluşturur.”',
            right: 'Enzim aktivasyon enerjisini azaltır, sıfırlamak zorunda değildir. Dengeye daha hızlı ulaşılmasını sağlar; denge koşullarında son ürün oranını değiştirmez.',
            body: 'Hız ile tepkimenin net enerji ve denge sonucu birbirinden ayrılmalıdır.'
          },
        ],
      },

      {
        id: 'tb-enzim-faktor', kind: 'deepen', title: '8. Enzim hızını etkileyen faktörler',
        lead: 'Grafik yorumunda önce hangi değişkenin sabit, hangisinin sınırlayıcı olduğu belirlenir.',
        blocks: [
          {
            id: 'tb-enzim-faktor-prose', type: 'prose',
            body: `Enzim etkinliği sıcaklık, pH, enzim ve substrat derişimi, su miktarı, aktivatör ve inhibitörler tarafından etkilenir. Faktörün etkisi enzimin yapısını mı değiştirdiği, çarpışma sıklığını mı artırdığı veya aktif merkezleri mi sınırladığı üzerinden yorumlanır.

**Sıcaklık** arttıkça moleküllerin hareketi ve etkili çarpışmalar optimum değere kadar artar. Optimumun üstünde enzimin zayıf bağları bozulabilir, aktif merkez şekli değişir ve hız keskin düşer. Düşük sıcaklık çoğunlukla enzimi denatüre etmez; hareketi yavaşlatır. Ortam yeniden ısıtıldığında enzim çalışabilir. Çok yüksek sıcaklıkta oluşan denatürasyon çoğunlukla geri dönüşsüzdür.

Her enzimin en iyi çalıştığı bir **optimum pH** aralığı vardır. pH, amino asit yan gruplarının yükünü ve proteini tutan etkileşimleri değiştirir. Pepsin asidik midede, tripsin bazik ince bağırsak ortamında daha etkindir. “Bütün enzimler nötr pH’da çalışır” genellemesi yanlıştır.

Enzim miktarı sabitken **substrat derişimi** arttıkça boş aktif merkezler daha sık dolar ve hız yükselir. Bütün aktif merkezler sürekli dolduğunda enzim doygunluğa ulaşır; hız plato yapar. Substrat yeterliyken **enzim derişimi** artırılırsa aktif merkez sayısı ve hız artar. Substrat sınırlıysa enzim eklemek bir noktadan sonra hız artışı sağlamaz.

Enzimlerin çalışması için sulu ortam gerekir; çok düşük su miktarında moleküllerin hareketi ve etkileşimi sınırlanır. **Aktivatörler** enzimin çalışmasını artırabilir. **İnhibitörler** etkinliği azaltır. Aktif merkeze substratla yarışarak bağlanan inhibitörler rekabetçi; aktif merkez dışında bağlanıp enzimin şeklini değiştirenler rekabetçi olmayan etki gösterebilir. TYT sorusunda inhibitör türü verilmedikçe mekanizma uydurulmaz.

Bir metabolik yolun son ürünü, yolun erken basamağındaki enzimi baskılayabilir. **Geri bildirim inhibisyonu**, gereksiz ürün ve enerji harcanmasını önler. Bu durum homeostatik metabolizma kontrolünün örneğidir.`
          },
          {
            id: 'tb-enzim-grafik-figure', type: 'figure', kind: 'enzim-hiz-grafikleri', title: 'Enzim hız grafiklerinin temel biçimleri',
            purpose: 'Sıcaklık, pH ve substrat etkisini tek bir nedene indirgemeden yorumlamak.', width: 'wide', complexity: 'high',
            caption: 'Sıcaklıkta optimum sonrası denatürasyon, pH’da enzime özgü optimum, substratta aktif merkez doygunluğu belirleyicidir.',
            focus: [
              { title: 'Sıcaklık', body: 'Optimuma kadar çarpışma artışı ile optimum sonrası yapı bozulmasını ayır.' },
              { title: 'pH', body: 'Her enzimin optimum aralığının farklı olabileceğini gör.' },
              { title: 'Substrat', body: 'Platonun bütün aktif merkezlerin dolmasına bağlı olduğunu belirle.' },
            ],
          },
          {
            id: 'tb-enzim-check', type: 'checkpoint',
            prompt: 'Substratın bol olduğu bir deneyde enzim miktarı iki katına çıkarılıyor. İlk hız neden yaklaşık artabilir, fakat bu artış neden sonsuza kadar sürmez?',
            hint: 'Aktif merkez sayısı ve substratın tükenmesini ayrı düşün.',
            answer: 'Enzim artınca aynı anda substrat bağlayabilecek aktif merkez sayısı artar ve başlangıç hızı yükselebilir. Tepkime ilerledikçe substrat azalır, ürün birikir veya başka koşullar sınırlayıcı olur; enzim miktarını sürekli artırmak sınırsız hız sağlamaz.'
          },
          {
            id: 'tb-enzim-faktor-trap', type: 'trap', title: 'Düşük ve yüksek sıcaklığı aynı yorumlama',
            wrong: '“Enzim düşük sıcaklıkta çalışmıyorsa denatüre olmuştur.”',
            right: 'Düşük sıcaklık çoğunlukla geçici yavaşlamaya, aşırı yüksek sıcaklık ise proteinin yapısının bozulmasına yol açar.',
            body: 'Koşul normale döndüğünde etkinliğin geri gelmesi, kalıcı denatürasyon olmadığını düşündürür.'
          },
        ],
      },

      {
        id: 'tb-vitamin', kind: 'deepen', title: '9. Vitaminler: organik düzenleyiciler',
        lead: 'Vitaminler enerji kaynağı veya yapı taşı değil, metabolik süreçlerin sürdürülebilmesi için az miktarda gereken organik maddelerdir.',
        blocks: [
          {
            id: 'tb-vitamin-prose', type: 'prose',
            body: `Vitaminler organik yapılıdır, düzenleyici görev yapar ve enerji vermez. Çoğu insan hücresinde yeterli miktarda sentezlenemediği için besinlerle alınır. Bazıları bağırsak mikroorganizmaları tarafından üretilebilir; D vitamini öncülleri güneş ışığının etkisiyle deride etkinleşme sürecine girer. Bu örnekler “vitaminlerin hiçbiri vücutta üretilemez” genellemesini bozar.

Vitaminler **yağda çözünenler** ve **suda çözünenler** olarak ayrılır. A, D, E ve K vitaminleri yağda çözünür; yağlarla birlikte emilir, karaciğer ve yağ dokusunda depolanabilir. Uzun süre aşırı alınmaları birikme ve toksisite riski taşır. B grubu ve C vitamini suda çözünür; genel olarak depoları daha sınırlıdır ve fazlası idrarla atılabilir. B₁₂ karaciğerde önemli miktarda depolanabildiği için suda çözünenlerin depolanmadığı genellemesine istisnadır.

**A vitamini** görme pigmentleri, epitel dokunun korunması ve bağışıklıkla ilişkilidir; eksikliği gece körlüğüne yol açabilir. **D vitamini** kalsiyum–fosfor dengesi ve kemik mineralizasyonunda önemlidir; eksikliği çocukta raşitizm, erişkinde osteomalaziyle ilişkilidir. **E vitamini** hücre zarlarını oksidatif hasara karşı koruyan antioksidan sistemlere katkı verir. **K vitamini** bazı pıhtılaşma faktörlerinin etkinleşmesi için gereklidir.

**B grubu vitaminler** çoğunlukla enerji metabolizması, sinir sistemi ve kan hücresi yapımıyla ilişkili koenzimlerin bileşenidir. B₁ eksikliği beriberi, B₃ eksikliği pellegra, B₉ ve B₁₂ eksiklikleri belirli anemi türleri ve hücre bölünmesi sorunlarıyla ilişkilendirilebilir. **C vitamini** kolajen sentezi, antioksidan işlev ve demir emilimiyle ilişkilidir; ağır eksikliği skorbüte neden olabilir.

Vitaminin eksikliği kadar gereksiz yüksek doz kullanımı da zararlı olabilir. Vitaminler enzimin kendisi değildir; bazıları koenzimin yapısına katılır veya düzenleyici süreçlerde görev alır. Pişirme, ışık, oksijen ve bekletme bazı vitamin miktarlarını azaltabilir; etkilenme düzeyi vitamine ve işleme koşuluna bağlıdır.`
          },
          {
            id: 'tb-vitamin-figure', type: 'figure', kind: 'vitamin-cozunurluk', title: 'Suda ve yağda çözünen vitaminler',
            purpose: 'Çözünürlükten emilim, depolama ve toksisite farkını çıkarmak.', width: 'wide', complexity: 'medium',
            caption: 'ADEK yağda; B ve C suda çözünür. B₁₂, suda çözündüğü hâlde belirgin depolanabilen önemli istisnadır.',
            focus: [
              { title: 'Suda çözünenler', body: 'Kanla taşınma, sınırlı depo ve idrarla atılma eğilimini gör.' },
              { title: 'Yağda çözünenler', body: 'Yağlarla emilim ve dokuda birikme ilişkisini gör.' },
            ],
          },
          {
            id: 'tb-vitamin-table', type: 'table', title: 'Vitaminlerin temel görev–eksiklik özeti',
            columns: ['Vitamin', 'Temel görev', 'Belirgin eksiklik bağlantısı'],
            rows: [
              ['A', 'Görme, epitel, bağışıklık', 'Gece körlüğü'],
              ['D', 'Ca–P dengesi, kemik mineralizasyonu', 'Raşitizm / osteomalazi'],
              ['E', 'Antioksidan koruma', 'Hücre zarı ve sinir–kas sorunları'],
              ['K', 'Pıhtılaşma faktörleri', 'Kanama eğilimi'],
              ['B₁', 'Enerji metabolizması, sinir işlevi', 'Beriberi'],
              ['B₃', 'Elektron taşıyan koenzimler', 'Pellegra'],
              ['B₉–B₁₂', 'DNA sentezi ve kan hücresi yapımı', 'Anemi türleri'],
              ['C', 'Kolajen, antioksidan, demir emilimi', 'Skorbüt'],
            ],
            caption: 'Tablo tanı amacı taşımaz; TYT’de sorulan temel biyolojik bağlantıları özetler.'
          },
        ],
      },

      {
        id: 'tb-nukleotit', kind: 'deepen', title: '10. Nükleotitlerin yapısı ve çeşitliliği',
        lead: 'DNA, RNA ve ATP’yi ayırmadan önce ortak yapı birimi olan nükleotit anlaşılmalıdır.',
        blocks: [
          {
            id: 'tb-nukleotit-prose', type: 'prose',
            body: `Bir **nükleotit**; azotlu organik baz, beş karbonlu şeker ve fosfat grubundan oluşur. Baz ile şekerin birleşmiş hâline **nükleozit**, nükleozide fosfat eklenmiş hâline nükleotit denir. DNA ve RNA’nın monomerleri nükleotitlerdir. ATP de nükleotit yapılıdır fakat nükleik asit polimerinin adı değildir.

Azotlu bazlar pürin ve pirimidin olarak iki gruptur. **Adenin (A)** ve **guanin (G)** çift halkalı pürin; **sitozin (C)**, **timin (T)** ve **urasil (U)** tek halkalı pirimidindir. DNA’da A, T, G, C; RNA’da A, U, G, C bulunur. DNA nükleotidinde deoksiriboz, RNA nükleotidinde riboz şekeri vardır.

Nükleik asit zincirinde bir nükleotidin fosfatı ile diğerinin şekeri arasında **fosfodiester bağı** kurulur. Böylece şeker–fosfat omurgası oluşur; bazlar omurgadan dışa uzanır. DNA’nın iki zincirini karşılıklı bazlar arasındaki hidrojen bağları bir arada tutar. Adenin timinle iki, guanin sitozinle üç hidrojen bağı kurar. RNA’da uygun katlanma bölgelerinde adenin urasille eşleşebilir.

Bir nükleotidin adı taşıdığı baza göre belirlenebilir. Aynı baz, farklı şekerle DNA veya RNA nükleotidinin parçası olabilir. Fosfat bütün nükleotitlerde ortak bileşendir. Nükleotitler yalnız DNA ve RNA yapımında kullanılmaz; ATP gibi enerji aktarım molekülleri ve bazı koenzimlerin yapısında da bulunabilir.

Nükleotit sayısı ile baz çeşidi karıştırılmamalıdır. Bir DNA molekülünde milyonlarca nükleotit bulunabilir fakat dört baz çeşidi vardır. Bilgi, bazların sayısından çok diziliş sırasıyla taşınır.`
          },
          {
            id: 'tb-nukleotit-figure', type: 'figure', kind: 'nukleotit-yapi', title: 'Nükleotit yapısı ve baz eşleşmesi',
            purpose: 'Baz, şeker ve fosfatı; zincir bağı ile zincirler arası bağı ayırmak.', width: 'wide', complexity: 'high',
            caption: 'Fosfodiester bağı aynı zincirin omurgasında, hidrojen bağı karşılıklı bazlar arasında bulunur.',
            focus: [
              { title: 'Fosfat', body: 'Şeker–fosfat omurgasındaki yerini izle.' },
              { title: 'Şeker', body: 'Riboz ve deoksiriboz farkını belirle.' },
              { title: 'Baz', body: 'Bilgiyi taşıyan değişken kısmı ayır.' },
              { title: 'Eşleşme', body: 'Pürin–pirimidin eşlerini ve hidrojen bağlarını gör.' },
            ],
          },
          {
            id: 'tb-nukleotit-trap', type: 'trap', title: 'Nükleotit bağlarını birbirine karıştırma',
            wrong: '“DNA’nın aynı zincirindeki nükleotitleri hidrojen bağları birleştirir.”',
            right: 'Aynı zincirde nükleotitler fosfodiester bağlarıyla; karşılıklı iki zincirde tamamlayıcı bazlar hidrojen bağlarıyla ilişkilidir.',
            body: 'Bağın konumu sorulduğunda önce aynı zincir mi, karşı zincirler mi olduğuna bak.'
          },
        ],
      },

      {
        id: 'tb-dna-rna', kind: 'deepen', title: '11. DNA ve RNA: kalıtsal bilginin saklanması ve kullanılması',
        lead: 'DNA uzun süreli bilgi deposu, RNA ise bu bilginin okunması ve uygulanmasında görev alan molekül ailesidir.',
        blocks: [
          {
            id: 'tb-dna-rna-prose', type: 'prose',
            body: `**DNA**, hücresel canlıların temel kalıtsal maddesidir. Genellikle iki polinükleotit zincirinden oluşur ve çift sarmal yapı gösterir. Zincirler birbirine zıt yönlüdür. Bir zincirdeki baz dizisi diğerini tamamlayıcı eşleşme kuralıyla belirler: A–T, G–C. Bu nedenle çift zincirli DNA’da adenin sayısı timine, guanin sayısı sitozine eşittir. Toplam pürin sayısı toplam pirimidin sayısına eşittir.

DNA kendini eşleyebilir. Eşlenme sırasında iki zincir ayrılır ve her eski zincir yeni tamamlayıcı zincirin yapımında kalıp olur. Böylece oluşan her DNA’da bir eski, bir yeni zincir bulunur; bu yarı korunumlu eşlenmedir. Ayrıntılı enzimler “Genden Proteine” konusunda işlenir.

Ökaryot hücrede DNA’nın büyük bölümü çekirdektedir; mitokondri ve kloroplastta da DNA bulunur. Prokaryotlarda zarla çevrili çekirdek yoktur; DNA sitoplazmadaki nükleoit bölgede bulunur. DNA hücre bölünmesinden önce eşlenir. Bütün hücrelerin bölünmesi veya bütün DNA bölgelerinin aynı anda aktif olması gerekmez.

**RNA** çoğunlukla tek zincirlidir; riboz şekeri ve urasil bazı içerir. DNA’daki bir gen bölgesi kalıp alınarak RNA sentezlenmesine transkripsiyon denir. mRNA genetik mesajı ribozoma taşır, tRNA uygun amino asitleri getirir, rRNA ribozomun yapısına ve işlevine katılır. Bu RNA türlerinin tümü protein sentezinde görev alır. RNA, prokaryotlarda sitoplazma ve ribozomlarda; ökaryotlarda çekirdek, sitoplazma, ribozom, mitokondri ve kloroplastta bulunabilir.

“DNA çift, RNA tek zincirlidir” okul düzeyindeki genel kuraldır. Bazı virüslerde tek zincirli DNA veya çift zincirli RNA bulunabilir; virüsler hücresel canlılar değildir. Hücresel canlılar için temel karşılaştırmada DNA’nın bilgi saklama, RNA’nın bilginin kullanılmasına katılma görevi öne çıkar.`
          },
          {
            id: 'tb-dna-rna-figure', type: 'figure', kind: 'dna-rna-karsilastirma', title: 'DNA ve RNA karşılaştırması',
            purpose: 'Yapısal farkları bilgi akışındaki görevlerle eşleştirmek.', width: 'wide', complexity: 'high',
            caption: 'DNA’daki bilgi RNA’ya aktarılır; RNA türleri ribozomda protein üretimine katılır.',
            focus: [
              { title: 'DNA', body: 'Deoksiriboz, timin, çift zincir ve bilgi saklamayı ilişkilendir.' },
              { title: 'RNA', body: 'Riboz, urasil, çoğunlukla tek zincir ve bilgi kullanımını ilişkilendir.' },
              { title: 'Ribozom', body: 'mRNA, tRNA ve rRNA’nın protein sentezindeki birleşme noktasını gör.' },
            ],
          },
          {
            id: 'tb-dna-rna-compare', type: 'compare', title: 'DNA ve RNA’nın temel farkları',
            columns: ['DNA', 'RNA'],
            rows: [
              { label: 'Şeker', values: ['Deoksiriboz', 'Riboz'] },
              { label: 'Özgün baz', values: ['Timin', 'Urasil'] },
              { label: 'Zincir', values: ['Genellikle çift', 'Genellikle tek'] },
              { label: 'Temel görev', values: ['Kalıtsal bilgiyi saklama ve aktarma', 'Bilginin okunması ve protein sentezinde kullanılması'] },
              { label: 'Kendini eşleme', values: ['Uygun enzimlerle eşlenebilir', 'Hücresel canlılarda DNA’dan sentezlenir; kendini eşlemez'] },
              { label: 'Çeşit', values: ['Tek temel molekül tipi, farklı DNA bölgeleri', 'mRNA, tRNA, rRNA ve başka işlevsel RNA’lar'] },
            ],
            insight: 'DNA ile RNA arasındaki fark yalnız T–U farkı değildir; şeker, zincir kararlılığı, yer ve biyolojik görev birlikte değerlendirilir.'
          },
          {
            id: 'tb-dna-rna-check', type: 'checkpoint',
            prompt: 'Çift zincirli bir DNA parçasında 300 adenin ve 200 guanin varsa toplam kaç nükleotit ve kaç hidrojen bağı vardır?',
            hint: 'A=T, G=C; A–T arasında 2, G–C arasında 3 hidrojen bağı vardır.',
            answer: 'Timin 300, sitozin 200’dür. Toplam nükleotit 300+300+200+200=1000’dir. A–T çifti 300 olduğundan 600; G–C çifti 200 olduğundan 600 hidrojen bağı bulunur. Toplam 1200 hidrojen bağıdır.'
          },
        ],
      },

      {
        id: 'tb-atp', kind: 'deepen', title: '12. ATP: hücresel enerji aktarım birimi',
        lead: 'ATP enerjinin kendisi veya uzun süreli deposu değil, enerji veren olaylarla enerji isteyen olaylar arasında sürekli yenilenen taşıyıcıdır.',
        blocks: [
          {
            id: 'tb-atp-prose', type: 'prose',
            body: `**ATP (adenozin trifosfat)**; adenin bazı, riboz şekeri ve üç fosfat grubundan oluşan nükleotit yapılı organik moleküldür. Adenin ile riboz birlikte adenozini oluşturur. “Tri” üç fosfatı belirtir. ATP’nin fosfat grupları arasındaki bağların hidroliziyle kullanılabilir enerji açığa çıkar ve ATP, ADP ile inorganik fosfata dönüşür.

ATP + H₂O → ADP + Pi + kullanılabilir enerji biçiminde özetlenen hidroliz, enerji gerektiren hücresel olaylarla eşleştirilir. Protein sentezi, aktif taşıma, kas kasılması, hücre bölünmesi ve sinirsel süreçler ATP kullanımına örnektir. ADP’ye fosfat eklenerek ATP sentezlenmesi enerji gerektirir: ADP + Pi + enerji → ATP + H₂O biçiminde gösterilebilir.

ATP; hücresel solunum, fermantasyonun belirli basamakları, fotosentezin ışığa bağlı tepkimeleri ve kemosentez yapan canlıların enerji dönüşümleri sırasında üretilebilir. ATP üretme yöntemi canlıya ve hücre bölümüne göre değişse de bütün hücresel canlılar ATP kullanır. ATP’nin yapısı türden türe temel olarak aynıdır.

ATP hücrede uzun süre ve büyük miktarda depolanmaz; ihtiyaç oldukça üretilip tüketilir. Bir hücre başka hücreden hazır ATP alarak temel enerji gereksinimini karşılamaz. Besinlerdeki kimyasal enerji ATP ile aynı şey değildir: besinler uzun süreli enerji kaynağı, ATP kısa süreli enerji aktarım aracıdır. ATP’nin enerjisi “fosfat bağının içinde tek başına duran enerji” biçiminde düşünülmemelidir; hidroliz ürünlerinin daha kararlı olması ve tepkime sistemindeki enerji farkı kullanılabilir enerji sağlar.

ATP bir nükleotittir fakat DNA veya RNA’nın monomeri olarak zincire katılan standart nükleotitlerle görevi aynı değildir. Yapısındaki riboz nedeniyle RNA nükleotitlerine benzer; üç fosfat taşıması ve enerji aktarım döngüsüyle ayrılır.`
          },
          {
            id: 'tb-atp-figure', type: 'figure', kind: 'atp-yapisi', title: 'ATP’nin yapısı ve ATP–ADP döngüsü',
            purpose: 'ATP’nin nükleotit yapısını enerji aktarım döngüsünden ayırmadan göstermek.', width: 'wide', complexity: 'high',
            caption: 'ATP hidrolizi enerji isteyen olaylara, ATP sentezi enerji veren olaylara bağlanır.',
            focus: [
              { title: 'Adenin', body: 'Azotlu baz bölümünü belirle.' },
              { title: 'Riboz', body: 'Adeninle birlikte adenozini kuran şekeri gör.' },
              { title: 'Üç fosfat', body: 'ATP’yi ADP ve AMP’den ayıran fosfat sayısını izle.' },
              { title: 'Döngü', body: 'Hidroliz ve yeniden fosforilasyon yönlerini ayır.' },
            ],
          },
          {
            id: 'tb-atp-trap', type: 'trap', title: 'ATP’yi depo besin sanmak',
            wrong: '“En çok enerji ATP’de depolanır; ATP hücreler arasında taşınan ortak besindir.”',
            right: 'ATP kısa süreli enerji aktarım molekülüdür, depolanmaz ve temel olarak üretildiği hücrede tüketilir. Uzun süreli enerji karbonhidrat ve lipitlerde tutulur.',
            body: 'ATP bütün canlılarda ortak olsa da üretim yolu ve üretildiği hücresel yapı aynı olmak zorunda değildir.'
          },
        ],
      },

      {
        id: 'tb-butunlesik', kind: 'practice', title: '13. Bileşikler arası bütünleşik ilişkiler',
        lead: 'Hücrede hiçbir bileşik tek başına çalışmaz; yapı, enerji ve düzenleme sürekli birbirine bağlanır.',
        blocks: [
          {
            id: 'tb-butunlesik-prose', type: 'prose',
            body: `Besinlerle alınan büyük karbonhidratlar, proteinler ve trigliseritler sindirimde hidroliz edilir. Monosakkaritler, amino asitler, yağ asitleri ve gliserol gibi küçük ürünler emilir. Hücre bu birimleri doğrudan enerji üretiminde kullanabilir, kendi moleküllerini sentezleyebilir veya uygun biçimde depolayabilir. Sindirim hidrolizdir; hücre içindeki yapım olayları çoğunlukla dehidrasyon ve başka enerji gerektiren tepkimeler içerir.

Glikozun yıkımından açığa çıkan enerji ATP sentezinde kullanılabilir. ATP hidrolizi protein sentezini, aktif taşımayı ve başka yapım olaylarını destekler. Protein sentezlenen enzimler daha sonra karbonhidrat, lipit, protein ve nükleik asit metabolizmasını hızlandırır. DNA enzimlerin amino asit dizisi için bilgi taşır; RNA bu bilginin kullanılmasına aracılık eder. Vitamin ve mineraller bazı enzimlerin yardımcı bileşenleri olabilir. Su hem tepkime ortamı hem hidroliz maddesidir.

Hücre zarında fosfolipitler temel çift tabakayı, proteinler taşıma ve reseptör sistemlerini, karbonhidrat zincirleri hücresel tanıma işaretlerini, kolesterol ise hayvan hücrelerinde akışkanlık düzenini oluşturur. Tek bir hücresel yapı dört organik molekül grubunun birlikte çalışmasını gösterir.

Bir molekülün enerji için kullanılabilmesi, onun tek görevinin enerji olduğu anlamına gelmez. Glikoz yapısal polisakkaritlere; amino asitler enzime, antikora veya kasa; yağ asitleri zar fosfolipitlerine katılabilir. Proteinlerin enerji için kullanılması genellikle karbonhidrat ve yağlara göre son sırada değerlendirilir. Nükleik asitler, vitaminler, su ve mineraller TYT düzeyinde enerji verici kabul edilmez.

Canlılar dışarıdan aldığı organik molekülü çoğu zaman doğrudan kendi yapısına eklemez. Büyük molekül sindirilir, monomerleri emilir ve hücrenin genetik bilgisine ve ihtiyacına göre yeniden sentezlenir. Besindeki protein ile insan proteininin amino asit dizileri aynı olmak zorunda değildir.`
          },
          {
            id: 'tb-butunlesik-map', type: 'concept_map', title: 'Madde–bilgi–enerji ağı',
            intro: 'Temel bileşikler hücrede doğrusal değil, geri beslemeli bir ağ oluşturur.',
            nodes: [
              { id: 'besin', label: 'Besin monomerleri', detail: 'Glikoz, amino asit, yağ asidi ve gliserol' },
              { id: 'atp', label: 'ATP', detail: 'Kısa süreli enerji aktarımı' },
              { id: 'dna', label: 'DNA', detail: 'Protein bilgisi' },
              { id: 'protein', label: 'Protein ve enzim', detail: 'Yapı ve tepkime kontrolü' },
              { id: 'yardimci', label: 'Su, mineral, vitamin', detail: 'Ortam ve düzenleme' },
              { id: 'hucre', label: 'Hücresel yapı ve iş', detail: 'Zar, taşıma, sentez, hareket' },
            ],
            links: [
              { from: 'besin', to: 'atp', label: 'yıkım enerjisiyle üretir' },
              { from: 'atp', to: 'protein', label: 'sentezini destekler' },
              { from: 'dna', to: 'protein', label: 'dizisini belirler' },
              { from: 'yardimci', to: 'protein', label: 'çalışmasını destekler' },
              { from: 'protein', to: 'besin', label: 'dönüşümlerini katalizler' },
              { from: 'protein', to: 'hucre', label: 'yapı ve görev sağlar' },
              { from: 'atp', to: 'hucre', label: 'iş için enerji aktarır' },
            ],
            caption: 'Bilgi DNA’dan, kataliz enzimden, kullanılabilir enerji ATP’den gelir; su, vitamin ve mineraller çalışma koşullarını tamamlar.'
          },
          {
            id: 'tb-butunlesik-example', type: 'example', title: 'Bir lokma ekmekten hücresel işe',
            body: 'Nişasta sindirimle glikoza ayrılır. Glikoz kana emilir ve hücreye taşınır. Hücresel solunumda glikozun kimyasal enerjisinin bir bölümü ATP’ye aktarılır. ATP hidrolizi kasılma, aktif taşıma veya sentez gibi bir işe bağlanır. Aynı glikozun bir bölümü glikojen olarak depolanabilir ya da başka organik moleküllerin sentezinde karbon iskeleti sağlayabilir.'
          },
        ],
      },

      {
        id: 'tb-osym', kind: 'practice', title: '14. ÖSYM için kesin ayrımlar ve öncül denetimi',
        lead: 'Bu konuda doğru sonuç, molekül adını ezberlemekten çok öncüldeki fiili ve genellemenin kapsamını denetlemekle bulunur.',
        blocks: [
          {
            id: 'tb-osym-prose', type: 'prose',
            body: `**Enerji verir** ifadesinde karbonhidrat, lipit ve gerektiğinde protein değerlendirilir. Vitamin, enzim, nükleik asit, ATP, su ve mineral “besin olarak enerji veren” grupta sayılmaz. ATP enerji aktarır; bu nedenle “ATP enerji verir” gündelik cümlesi ile “ATP enerji verici besindir” öncülü aynı değildir.

**Sindirilir** ifadesinde molekül büyüklüğü ve zar geçişi önemlidir. Polisakkaritler, proteinler ve trigliseritler sindirimle küçük birimlere ayrılır. Monosakkaritler, amino asitler, vitaminler, su ve mineraller sindirilmeden emilebilir. Nükleik asitler besinlerle alındığında sindirilebilir. Enzim protein yapılı olduğundan sindirim kanalında başka proteinler gibi parçalanabilir; fakat görev yaptığı tepkimede harcanmaz.

**Yapıya katılır** ifadesi geniştir. Su sitoplazmaya; mineraller kemik, diş ve moleküllere; karbonhidratlar hücre duvarı ve zar yüzeyi işaretlerine; lipitler zara; proteinler hemen her hücresel yapıya; nükleik asitler kromozom ve ribozom sistemine katılabilir. “Yapısal” olmak yalnız iskelet oluşturmak değildir.

**Düzenleyicidir** ifadesi su, mineral, vitamin, enzim ve bazı protein/hormonlar için kullanılabilir. Düzenleyici olmak enerji vermemekle çelişmez. Bir molekül hem yapısal hem düzenleyici olabilir.

**Bitkiler sentezler, hayvanlar hazır alır** gibi kesin cümleler dikkat ister. Bitkiler fotosentezle organik madde üretebilir fakat mineralleri ve suyu çevreden alır. Hayvanlar gerekli organik karbonu besinle alır ancak kendi glikojenini, proteinini, fosfolipidini, DNA’sını ve ATP’sini hücrelerinde sentezler. “Heterotrof canlı organik madde sentezleyemez” yanlıştır; inorganikten organik besin üretme ile organik monomerlerden kendi molekülünü sentezleme farklıdır.

**Miktar önem ilişkisi** de yanıltıcıdır. Su vücutta çok, vitamin ve bazı mineraller az bulunabilir; az miktarda gereken madde önemsiz değildir. Eksiklik ve fazlalık, homeostaziyi farklı yollardan bozabilir.`
          },
          {
            id: 'tb-osym-table', type: 'table', title: 'Öncül fiiline göre hızlı denetim',
            columns: ['Öncüldeki ifade', 'Sorulacak kontrol', 'Sık bozulan genelleme'],
            rows: [
              ['Enerji verir', 'Besin olarak oksitlenip enerji sağlar mı?', 'ATP ve vitamin enerji verici besin değildir.'],
              ['Sindirilir', 'Zardan geçemeyecek kadar büyük mü?', 'Her organik molekül sindirilmez.'],
              ['Depolanır', 'Hangi canlıda, hangi biçimde, ne kadar?', 'ATP depolanmaz; B₁₂ istisna oluşturabilir.'],
              ['Yapıya katılır', 'Hangi hücresel veya moleküler yapıda?', 'Düzenleyici maddeler de yapıya katılabilir.'],
              ['Sentezlenir', 'Hangi canlı, hangi hücre ve hangi öncülden?', 'Hayvan hücresi organik molekül sentezler.'],
              ['Enzim etkiler', 'Substrat ve koşullar uygun mu?', 'Enzim her maddeye ve her pH’a etki etmez.'],
            ],
            caption: 'Kesin hüküm vermeden önce özne, fiil, hücresel düzey ve istisna birlikte kontrol edilir.'
          },
          {
            id: 'tb-osym-trap', type: 'trap', title: 'Aynı sözcüğü farklı düzeylerde kullanma',
            wrong: '“ATP enerji taşıdığına göre enerji verici besindir; DNA organik olduğuna göre öncelikli enerji kaynağıdır.”',
            right: 'Enerji aktarım molekülü, enerji deposu ve enerji verici besin farklı kavramlardır. Molekülün organik olması, enerji amacıyla kullanıldığı anlamına gelmez.',
            body: 'ÖSYM, doğru bir bilgiyi yanlış sınıfa taşıyan öncüller kurabilir.'
          },
        ],
      },

      {
        id: 'tb-kapanis', kind: 'close', title: '15. Konunun eksiksiz çekirdek özeti',
        lead: 'Aşağıdaki maddeler bütün konuyu yeniden anlatmaz; her bölümün zorunlu sonucunu tek yerde toplar.',
        blocks: [
          {
            id: 'tb-summary', type: 'summary', title: 'Temel bileşenler — son kontrol',
            points: [
              'İnorganikler su, mineral, asit, baz ve tuzlardır; enerji vermez ve sindirilmez. Mineraller çevreden alınır; su bazı metabolik tepkimelerde de oluşabilir.',
              'Suyun polar yapısı ve hidrojen bağları; çözücülük, kohezyon, yüksek özgül ısı, buharlaşmayla soğuma ve buzun yüzmesi gibi özelliklerin temelidir.',
              'Dehidrasyon sentezi bağ kurarken su çıkarabilir; hidroliz bağ koparırken su kullanır. Su bilançosu ATP bilançosuyla aynı değildir.',
              'Karbonhidratlar monosakkarit, disakkarit ve polisakkaritleri kapsar; enerji, depo ve yapı görevleri bağlanma biçimine göre değişir.',
              'Lipitler gerçek polimer değildir; trigliserit enerji deposu, fosfolipit zar bileşeni, steroitler yapı ve düzenleme molekülü olabilir.',
              'Proteinlerde amino asit dizisi katlanmayı, katlanma işlevi belirler. Denatürasyon şeklin bozulmasıdır; hidrolizle monomerlere ayrılma değildir.',
              'Enzim aktivasyon enerjisini düşürür; dengeyi, ürün çeşidini ve tepkimenin toplam enerji farkını değiştirmez.',
              'ADEK yağda, B ve C suda çözünür. Vitaminler enerji vermez; bazıları koenzimlerin yapısına katılır. B₁₂ depolama bakımından önemli istisnadır.',
              'Nükleotit baz, pentoz ve fosfattan oluşur. DNA deoksiriboz ve timin; RNA riboz ve urasil içerir. Bilgi baz dizisinde taşınır.',
              'ATP adenin, riboz ve üç fosfattan oluşur; uzun süre depolanmaz, üretildiği hücrede enerji veren ve enerji isteyen olayları eşleştirir.',
            ],
            body: 'Konu sorularında önce molekülün sınıfını, sonra yapısını, görevini, sindirim durumunu ve bulunduğu canlı/hücre düzeyini ayrı ayrı denetle.'
          },
          {
            id: 'tb-final-check', type: 'checkpoint',
            prompt: '“Organik moleküllerin tamamı karbon içerir, hücre zarından geçmeden önce sindirilir ve enerji verir.” cümlesinin hangi bölümleri doğrudur?',
            hint: 'Karbon, sindirim ve enerji ifadelerini birbirinden bağımsız değerlendir.',
            answer: 'TYT sınıflandırmasında organik moleküllerin temel iskeletinde karbon bulunması doğrudur. Tamamının sindirilmesi yanlıştır; monosakkarit ve vitamin gibi küçük organikler sindirilmeden geçebilir. Tamamının enerji vermesi de yanlıştır; vitamin, enzim ve nükleik asitler enerji verici besin olarak kullanılmaz.'
          },
          {
            id: 'tb-next', type: 'next_step',
            body: 'Temel bilgi tamamlandı. Aynı konu altındaki dört etkileşimli notta sırasıyla inorganikler; karbonhidrat–lipit; protein–enzim; vitamin–nükleik asit–ATP görseller ve sorularla pekiştirilir. Ardından Hücre temel notuna geçilir.',
            topics: ['İnorganik Bileşikler: etkileşimli', 'Karbonhidratlar ve Lipitler: etkileşimli', 'Proteinler ve Enzimler: etkileşimli', 'Vitaminler, Nükleik Asitler ve ATP: etkileşimli', 'Hücre: temel not'],
          },
        ],
      },
    ],
  },
}
