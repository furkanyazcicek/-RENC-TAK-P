/**
 * TYT BİYOLOJİ · HAM / TEMEL ÖĞRENME NOTU
 *
 * Konunun MEB/TYT kapsamındaki bilgi tabanını kavram atlamadan verir.
 * Etkinlik, ses ve animasyon tekrarına girmez; bunlar aynı topic altında
 * bulunan interactive notun görevidir.
 */

export default {
  slug: 'canlilarin-ortak-ozellikleri-temel',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  placement: { examType: 'TYT', subject: 'Biyoloji', topic: 'Canlıların Ortak Özellikleri' },
  order: 0,
  partLabel: 'Önce temelini öğren',
  goldStandard: true,
  title: 'Canlıların Ortak Özellikleri: Ayrıntılı Temel Not',
  subtitle: 'Hücresel yapıdan adaptasyona kadar konunun bütün temel bilgisini, kavram ayrımlarını ve ÖSYM yorumlarını tek bir öğrenme sırasıyla kur.',

  document: {
    version: 2,
    estimated_minutes: 72,
    prerequisites: [
      { topic: 'Ön bilgi zorunlu değil', why: 'Hücre, molekül, enzim, ATP ve kalıtsal bilgi bu not içinde temel düzeyde açıklanır.' },
      { topic: 'Kapsam sınırı', why: 'Ayrıntılar TYT biyolojisini anlamak için gereken düzeydedir; hücresel solunum, enzimler ve kalıtım sonraki konularda derinleştirilir.' },
    ],
    outcomes: [
      'Canlılığı belirleyen özelliklerin kapsamını ve birbirleriyle ilişkisini açıklayabileceksin.',
      'Hücresel yapı, organizasyon, metabolizma, beslenme, enerji dönüşümü, boşaltım, büyüme, hareket, uyarılara tepki, homeostazi, üreme, varyasyon ve adaptasyonu ayırt edebileceksin.',
      'Bir özelliğin bütün canlılarda ortak olup olmadığını ve farklı canlılarda hangi yollarla gerçekleşebileceğini değerlendirebileceksin.',
      'ÖSYM öncüllerindeki genellemeleri ve hücre–organizma–popülasyon düzeyi ayrımlarını yorumlayabileceksin.',
    ],

    sections: [
      {
        id: 'ham-kapsam-kavramlar',
        kind: 'opening',
        title: 'Canlılık ve konunun temel kavramları',
        lead: 'Canlıların ortak özellikleri, bir varlığın canlı kabul edilmesini sağlayan hücresel ve yaşamsal ölçütlerin bütünüdür.',
        blocks: [
          {
            id: 'ham-canlilik-tanim',
            type: 'prose',
            body: `**Biyoloji**, canlıları; canlıların yapı ve işlevlerini, birbirleriyle ve çevreleriyle ilişkilerini inceleyen bilim dalıdır. **Canlılık**, hücresel bir sistemin madde ve enerji dönüşümü yapması, düzenini koruması, çevresel değişikliklere karşılık vermesi ve kalıtsal devamlılık göstermesiyle ortaya çıkan durumdur.

Canlılık tek bir belirtiyle belirlenmez. Kristaller büyüyebilir, ateş yayılabilir, makineler hareket edebilir. Buna karşın bu sistemler hücresel yapıya, kontrollü metabolizmaya, kalıtsal bilgiye ve homeostaziye birlikte sahip değildir. Bir varlığı değerlendirirken özelliklerin ==birlikte bulunması ve bağlantılı çalışması== dikkate alınır.

MEB/TYT kapsamında incelenen temel özellikler; hücresel yapı, organizasyon, beslenme, enerji üretimi ve tüketimi, metabolizma, madde alışverişi ve boşaltım, büyüme ve gelişme, hareket, uyarılara tepki, homeostazi, üreme, varyasyon ve adaptasyondur.`
          },
          { id: 'ham-organizma-kavram', type: 'concept', term: 'Organizma', body: 'Yaşam faaliyetlerini bağımsız olarak sürdürebilen canlı bireydir. Bakteri tek hücreli, insan çok hücreli bir organizmadır. Çok hücreli bir canlının tek bir hücresi canlıdır fakat çoğu hücre organizmadan ayrıldığında bağımsız organizma gibi yaşayamaz.' },
          { id: 'ham-hucre-kavram', type: 'concept', term: 'Hücre', body: 'Canlıların yapısal ve işlevsel en küçük birimidir. Yapısal birimdir çünkü bütün canlılar bir veya daha fazla hücreden oluşur; işlevsel birimdir çünkü metabolizma, enerji kullanımı, madde alışverişi ve kalıtsal bilginin kullanılması hücrede gerçekleşir.' },
          { id: 'ham-metabolizma-kavram', type: 'concept', term: 'Metabolizma', body: 'Canlıdaki bütün kontrollü yapım ve yıkım tepkimeleridir. Tepkimeler çoğunlukla enzimlerle yürütülür. Metabolizma madde dönüşümünü, ATP ise bu olaylarda enerji aktarımını ifade eder.' },
          { id: 'ham-genetik-kavram', type: 'concept', term: 'Kalıtsal bilgi', body: 'Hücrenin yapısı ve faaliyetleri için gerekli bilgidir. Hücresel canlılarda temel kalıtsal madde DNA’dır. DNA’daki bilgi RNA aracılığıyla protein üretiminde kullanılabilir; yeni hücrelere ve üreme yoluyla yeni bireylere aktarılabilir.' },
          { id: 'ham-homeostazi-kavram', type: 'concept', term: 'Homeostazi', body: 'Canlının iç ortamındaki sıcaklık, pH, su ve madde miktarı gibi değişkenleri yaşama uygun sınırlar içinde düzenlemesidir. Değerlerin değişmemesi değil, belirli bir aralıkta kontrol edilmesidir.' },
          {
            id: 'ham-ana-harita', type: 'concept_map', title: 'Canlılığın temel işleyişi',
            intro: 'Ortak özellikler birbirinden bağımsız değildir; aşağıdaki sıra canlı bir sistemin temel işleyişini gösterir.',
            nodes: [
              { id: 'yapi', label: 'Hücresel yapı', detail: 'Kontrollü iç ortam oluşturur' },
              { id: 'bilgi', label: 'Kalıtsal bilgi', detail: 'Yapı ve faaliyetleri yönlendirir' },
              { id: 'metabolizma', label: 'Metabolizma', detail: 'Maddeyi dönüştürür' },
              { id: 'enerji', label: 'Enerji dönüşümü', detail: 'ATP üretimi ve tüketimini bağlar' },
              { id: 'denge', label: 'Homeostazi', detail: 'Çalışma koşullarını korur' },
            ],
            links: [
              { from: 'yapi', to: 'bilgi', label: 'içerir' }, { from: 'bilgi', to: 'metabolizma', label: 'yönetir' },
              { from: 'metabolizma', to: 'enerji', label: 'gerektirir' }, { from: 'enerji', to: 'denge', label: 'sürdürür' },
            ],
            caption: 'Beslenme, boşaltım, büyüme, hareket ve üreme bu temel sistemin farklı sonuçlarıdır.'
          },
        ],
      },

      {
        id: 'ham-hucresel-yapi', kind: 'build', title: '1. Hücresel yapı',
        lead: 'Bütün canlılar hücrelerden oluşur; hücreden daha küçük hiçbir yapı tek başına bütün canlılık faaliyetlerini sürdüremez.',
        blocks: [
          {
            id: 'ham-hucre-ortak', type: 'prose',
            body: `Hücresel canlıların tamamında **hücre zarı, sitoplazma, ribozom, DNA ve RNA** bulunur. Hücre zarı hücrenin sınırını oluşturur ve madde alışverişini düzenler. Sitoplazma, hücresel yapıların bulunduğu ve birçok metabolik tepkimenin gerçekleştiği hücre içi bölgedir. Ribozom protein sentezler. DNA kalıtsal bilgiyi taşır; RNA bu bilginin kullanılmasında görev alır.

Bu ortak yapılar bütün hücrelerde bulunmasına rağmen hücrelerin ayrıntılı yapısı aynı değildir. Hücreler **prokaryot** ve **ökaryot** olmak üzere iki temel yapısal gruba ayrılır. Her iki hücre tipi de canlıdır, metabolizma yürütür, ATP kullanır, protein sentezler ve genetik bilgi taşır.`
          },
          {
            id: 'ham-pro-ok-compare', type: 'compare', title: 'Prokaryot ve ökaryot hücre',
            columns: ['Prokaryot hücre', 'Ökaryot hücre'],
            rows: [
              { label: 'Çekirdek', values: ['Zarla çevrili çekirdek yoktur; DNA nükleoit bölgede bulunur.', 'DNA’nın büyük bölümü çekirdek zarı içindeki çekirdekte bulunur.'] },
              { label: 'Zarlı organel', values: ['Mitokondri, Golgi ve endoplazmik retikulum gibi zarlı organeller yoktur.', 'Zarlı organeller bulunabilir.'] },
              { label: 'Canlı grupları', values: ['Bakteriler ve arkeler', 'Protistler, mantarlar, bitkiler ve hayvanlar'] },
              { label: 'Hücre sayısı', values: ['Prokaryot organizmalar tek hücrelidir.', 'Tek hücreli veya çok hücreli olabilir.'] },
              { label: 'Ortak yapılar', values: ['Zar, sitoplazma, ribozom, DNA ve RNA bulunur.', 'Zar, sitoplazma, ribozom, DNA ve RNA bulunur.'] },
            ],
            insight: 'Prokaryot hücre “organeli olmayan hücre” değildir; zarlı organelleri yoktur. Ribozom zarsız organeldir ve prokaryotlarda bulunur.'
          },
          {
            id: 'ham-tek-cok', type: 'table', title: 'Tek hücreli ve çok hücreli organizasyon',
            columns: ['Özellik', 'Tek hücreli canlı', 'Çok hücreli canlı'],
            rows: [
              ['Yaşamsal faaliyet', 'Tek hücre bütün yaşamsal faaliyetleri yürütür.', 'Hücreler arasında iş bölümü vardır.'],
              ['Doku–organ–sistem', 'Bulunmaz.', 'Bazı çok hücrelilerde hücre → doku → organ → sistem düzeni görülür.'],
              ['Büyüme', 'Genellikle hücre hacmi ve sitoplazma miktarı artar.', 'Hücre sayısı ve gerektiğinde hücre hacmi artar.'],
              ['Örnek', 'Bakteri, arke, amip, öglena, paramesyum', 'Birçok mantar, bitki ve hayvan'],
            ],
            caption: 'Tek hücrelilerde organ bulunmaması, solunum veya boşaltım gibi olayların gerçekleşmediği anlamına gelmez; bu olaylar hücresel düzeyde yürür.'
          },
          {
            id: 'ham-hucre-trap', type: 'trap', title: 'Hücresel yapı için kesin ifadeler',
            wrong: '“Bütün canlılarda çekirdek, mitokondri veya çok sayıda hücre bulunur.”',
            right: 'Bütün hücresel canlılarda hücre zarı, sitoplazma, ribozom ve nükleik asit bulunur. Çekirdek ve zarlı organeller yalnızca ökaryot hücrelerde bulunur.',
            body: 'Virüsler hücresel yapıda değildir ve ayrı bir sınır örnektir.'
          },
        ],
      },

      {
        id: 'ham-organizasyon', kind: 'build', title: '2. Organizasyon',
        lead: 'Canlılarda yapılar rastgele değil, belirli görev ilişkileri içinde düzenlenmiştir.',
        blocks: [
          {
            id: 'ham-organizasyon-prose', type: 'prose',
            body: `**Organizasyon**, canlı yapısındaki birimlerin belirli bir düzen ve iş bölümü içinde bir araya gelmesidir. Atomlar molekülleri, moleküller hücresel yapıları oluşturur. Canlılık özelliği gösteren ilk düzey hücredir.

Çok hücreli canlılarda benzer yapı ve göreve sahip hücreler **dokuyu**, farklı dokular **organı**, ortak görev yapan organlar **sistemi**, sistemler **organizmayı** oluşturur. Örneğin kas ve sinir dokuları kalbin yapısına katılır; kalp damarlarla birlikte dolaşım sisteminde görev yapar.

Bütün çok hücreli canlılarda organ ve sistem bulunması zorunlu değildir. Bazı çok hücreli alg ve mantarlarda gerçek doku–organ düzeyi görülmez. Bütün canlılar için kesin ortak ifade “hücresel organizasyona sahip olma”dır; doku, organ ve sistem ortak değildir.`
          },
          {
            id: 'ham-organizasyon-figure', type: 'figure', kind: 'organizasyon-duzeyleri', width: 'wide',
            title: 'Biyolojik organizasyon düzeyleri', purpose: 'Canlılığın hücrede başladığını; birey içi ve organizma üstü düzeylerin sınırını göstermek.',
            caption: 'Atom, molekül ve organel bir canlının yapısına katılır ancak tek başına canlı değildir. Popülasyondan itibaren birden fazla organizma incelenir.',
            focus: [
              { title: 'Yapı taşları', body: 'Atom, molekül ve organel canlılık özelliği göstermez.' },
              { title: 'Canlılık eşiği', body: 'Hücre canlılık faaliyetlerini yürüten en küçük düzeydir.' },
              { title: 'Birey içi organizasyon', body: 'Doku, organ ve sistem çok hücreli canlılarda iş bölümünü sağlar.' },
              { title: 'Organizma üstü düzeyler', body: 'Popülasyon, komünite, ekosistem ve biyosfer ekolojik düzeylerdir.' },
            ]
          },
          {
            id: 'ham-organizasyon-table', type: 'table', title: 'Organizasyon düzeylerinin sınırları',
            columns: ['Düzey', 'Tanım', 'Canlı mı?'],
            rows: [
              ['Organel', 'Hücre içinde belirli görev yapan yapı', 'Tek başına canlı değildir.'],
              ['Hücre', 'Canlılığın yapısal ve işlevsel en küçük birimi', 'Evet'],
              ['Organizma', 'Bağımsız canlı birey', 'Evet'],
              ['Popülasyon', 'Belirli yerde yaşayan aynı tür bireyler', 'Tek bir canlı değil, canlılar topluluğudur.'],
              ['Ekosistem', 'Canlı toplulukları ve cansız çevrenin bütünü', 'Tek bir canlı değildir.'],
            ],
            caption: 'ÖSYM “canlılığın başladığı düzey”, “birey içi düzey” ve “organizma üstü düzey” ayrımlarını kullanabilir.'
          },
        ],
      },

      {
        id: 'ham-metabolizma-enzim', kind: 'deepen', title: '3. Metabolizma, enzimler ve madde dönüşümü',
        lead: 'Canlılık, hücrede kesintisiz ve kontrollü kimyasal tepkimeler yürütülmesine bağlıdır.',
        blocks: [
          {
            id: 'ham-metabolizma-prose', type: 'prose',
            body: `**Metabolizma**, canlıdaki tüm yapım ve yıkım tepkimelerinin toplamıdır. Metabolik tepkimeler hücre içinde gerçekleşir; çok hücreli canlılarda organ ve sistemlerin yaptığı işler de hücresel tepkimelere dayanır.

Tepkimelerin çoğu **enzim** adı verilen biyolojik katalizörlerle yeterli hızda yürütülür. Enzimler tepkimenin başlaması için gereken aktivasyon enerjisini düşürür; tepkime sonunda harcanmaz ve yeniden kullanılabilir. Enzimler belirli maddelere etki eder, sıcaklık ve pH gibi koşullardan etkilenir. Bu durum homeostazinin neden gerekli olduğunu açıklar.

Metabolizma canlılık boyunca sürer fakat hızı sabit değildir. Uyku, dinlenme, büyüme, açlık, sıcaklık ve hücrenin görevine göre hız değişebilir. Tohum veya spor gibi yapılarda metabolizma çok yavaşlayabilir; tamamen ve kalıcı biçimde durması hücresel canlılığın sona ermesi anlamına gelir.`
          },
          {
            id: 'ham-ana-kata-compare', type: 'compare', title: 'Anabolizma ve katabolizma',
            columns: ['Anabolizma (özümleme/yapım)', 'Katabolizma (yadımlama/yıkım)'],
            rows: [
              { label: 'Molekül değişimi', values: ['Basit moleküllerden büyük ve düzenli moleküller kurulur.', 'Büyük moleküller daha küçük moleküllere parçalanır.'] },
              { label: 'Enerji', values: ['Genellikle ATP harcanır.', 'Enerji açığa çıkabilir; bir bölümü ATP üretiminde kullanılabilir.'] },
              { label: 'Örnekler', values: ['Protein ve DNA sentezi, fotosentezle glikoz sentezi', 'Hücresel solunum, sindirim, büyük moleküllerin hidrolizi'] },
              { label: 'Canlıdaki işlev', values: ['Büyüme, onarım ve yenilenme', 'Enerji ve yapı taşı sağlama'] },
            ],
            insight: 'Yıkımla sağlanan küçük moleküller ve enerji, yapım olaylarında kullanılabilir. İki metabolizma yönü birbirine bağlıdır.'
          },
          {
            id: 'ham-metabolizma-figure', type: 'figure', kind: 'metabolizma-atp', width: 'wide',
            title: 'Metabolizma ve ATP bağlantısı', purpose: 'Yapım ve yıkım olayları arasındaki enerji aktarımını göstermek.',
            caption: 'Katabolizmada açığa çıkan enerjinin tamamı ATP’ye aktarılmaz; bir kısmı ısı olarak yayılır. ATP enerji gerektiren hücresel olaylarda kullanılır.',
            focus: [
              { title: 'Katabolizma', body: 'Moleküllerin yıkımıyla enerji açığa çıkabilir.' },
              { title: 'ATP–ADP döngüsü', body: 'ADP ve fosfat enerji kullanılarak ATP’ye dönüştürülür; ATP kullanıldığında tekrar ADP ve fosfat oluşur.' },
              { title: 'Anabolizma', body: 'Düzenli molekül sentezinde ATP enerjisinden yararlanılır.' },
            ]
          },
          {
            id: 'ham-metabolizma-trap', type: 'trap', title: 'Metabolizma hakkında yanlış genellemeler',
            wrong: '“Bütün katabolik olaylar ATP üretir; anabolizma yalnızca büyüme sırasında gerçekleşir.”',
            right: 'Her yıkım doğrudan ATP üretmez. Anabolik olaylar bütün canlı hücrelerde yapı yenileme, onarım ve sentez için yürütülür.',
            body: 'Sindirim kataboliktir ancak sindirim sırasında doğrudan ATP üretilmez. Hücresel solunumda açığa çıkan enerji ATP üretiminde kullanılabilir.'
          },
        ],
      },

      {
        id: 'ham-beslenme', kind: 'build', title: '4. Beslenme',
        lead: 'Beslenme, canlının enerji kaynağı ve yapı taşı olarak kullanacağı maddeleri elde etmesidir; yalnızca yemek yeme değildir.',
        blocks: [
          {
            id: 'ham-beslenme-prose', type: 'prose',
            body: `Canlılar büyüme, onarım, molekül sentezi ve enerji dönüşümü için maddeye ihtiyaç duyar. Su, mineral ve gazlar gibi inorganik maddeler ile karbonhidrat, yağ ve protein gibi organik maddeler metabolizmada kullanılır.

Beslenme biçimi organik besinin nasıl elde edildiğine göre belirlenir. **Ototroflar** organik maddeleri karbondioksit gibi inorganik maddelerden sentezler. **Heterotroflar** organik besinlerini başka canlılardan veya canlı artıklarından hazır alır. **Karma beslenenler** ortam koşullarına göre iki yolu da kullanabilir.

Ototrof olmak dış ortamdan hiç madde almamak değildir. Ototroflar su, karbondioksit, mineral ve enerji kaynağı alır. Heterotroflar da büyük organik besinleri sindirim ve metabolik dönüşümlerle uygun yapı taşlarına ayırabilir.`
          },
          {
            id: 'ham-beslenme-table', type: 'table', title: 'Beslenme biçimleri',
            columns: ['Biçim', 'Organik madde kaynağı', 'Yöntem', 'Örnek'],
            rows: [
              ['Fotoototrof', 'İnorganik maddelerden üretir.', 'Işık enerjisini kullanır.', 'Bitkiler, algler, siyanobakteriler'],
              ['Kemoototrof', 'İnorganik maddelerden üretir.', 'İnorganik maddelerin oksidasyon enerjisini kullanır.', 'Bazı bakteri ve arkeler'],
              ['Holozoik', 'Besini katı parçalar hâlinde alır.', 'Vücut içinde sindirim', 'Hayvanlar'],
              ['Saprofit', 'Organik artıkları kullanır.', 'Dış sindirim ve emilim', 'Mantarlar, bazı bakteriler'],
              ['Parazit', 'Besini canlı konaktan sağlar.', 'Konaktan hazır organik madde alma', 'Tenya, bit, bazı bakteriler'],
              ['Karma', 'Koşula göre üretir veya hazır alır.', 'Ototrof ve heterotrof yollar', 'Öglena'],
            ],
            caption: 'Ortak özellik yöntemin aynı olması değil, bütün canlıların madde gereksinimini karşılamasıdır.'
          },
          {
            id: 'ham-beslenme-figure', type: 'figure', kind: 'beslenme-stratejileri', width: 'wide',
            title: 'Ototrof ve heterotrof beslenmenin ortak hedefi', purpose: 'Organik maddenin elde edilme yöntemleri ile kullanım amacını ayırmak.',
            caption: 'Ototrof–heterotrof ayrımı enerji üretme değil, organik besini elde etme biçimi ayrımıdır.',
            focus: [
              { title: 'Ototrof', body: 'Organik maddeyi inorganik maddelerden sentezler.' },
              { title: 'Heterotrof', body: 'Organik maddeyi dışarıdan hazır alır.' },
              { title: 'Ortak kullanım', body: 'Maddeler yapı, onarım ve enerji dönüşümünde kullanılır.' },
            ]
          },
          {
            id: 'ham-beslenme-trap', type: 'trap', title: 'Bitkilerde beslenme ve fotosentez',
            wrong: '“Bitkiler beslenmez; topraktaki besini hazır organik madde olarak alır.”',
            right: 'Bitkiler de beslenir. Çoğu bitki su ve minerali topraktan, karbondioksiti havadan alır; ışık enerjisiyle organik madde sentezler.',
            body: 'Bütün canlılar fotosentez yapmaz ve bütün ototroflar ışık kullanmaz.'
          },
        ],
      },

      {
        id: 'ham-enerji-solunum', kind: 'deepen', title: '5. Enerji üretimi ve tüketimi: ATP ve hücresel solunum',
        lead: 'Bütün canlılar enerji kullanır; enerjinin kaynağı ve ATP üretme yolu aynı olmak zorunda değildir.',
        blocks: [
          {
            id: 'ham-enerji-prose', type: 'prose',
            body: `Hücre; sentez, aktif taşıma, hareket, bölünme, büyüme, onarım ve iç dengenin korunması için enerji harcar. Besinlerdeki kimyasal enerji hücresel işlerde doğrudan kullanılamaz; enerjinin bir bölümü **ATP (adenozin trifosfat)** molekülüne aktarılır.

ATP; adenin, riboz ve üç fosfattan oluşur. Son fosfat bağının kopmasıyla ATP, ADP ve inorganik fosfata dönüşür; açığa çıkan enerji hücresel işe aktarılabilir. ATP uzun süreli enerji deposu değildir, hücreden hücreye aktarılmaz ve gerektiği yerde sürekli üretilir. Yağ, glikojen ve nişasta enerji depolayabilir; ATP kısa süreli enerji aktarım aracıdır.

**Hücresel solunum**, organik maddelerin kimyasal bağlarındaki enerjinin açığa çıkarılarak ATP üretiminde kullanılmasını sağlayan tepkimelerdir. Solunum hücresel bir olaydır; nefes alma bazı çok hücreli canlılarda gaz alışverişini sağlayan mekanik olaydır.`
          },
          {
            id: 'ham-solunum-table', type: 'table', title: 'ATP üretimiyle ilgili temel yollar',
            columns: ['Yol', 'Oksijen', 'Parçalanma', 'Sonuç'],
            rows: [
              ['Oksijenli solunum', 'Son aşamada kullanılır.', 'Organik madde büyük ölçüde inorganik son ürünlere kadar parçalanır.', 'Görece fazla ATP'],
              ['Oksijensiz solunum', 'Kullanılmaz; başka inorganik son elektron alıcıları vardır.', 'Elektron taşıma sistemi kullanılır.', 'Bazı prokaryotlarda görülür.'],
              ['Fermantasyon', 'Kullanılmaz.', 'Organik madde tam parçalanmaz; organik son ürün oluşur.', 'Az ATP'],
            ],
            caption: 'Temel ortaklık ATP üretme gereksinimidir; bütün canlıların oksijen kullanması veya aynı yolu yürütmesi ortak değildir.'
          },
          {
            id: 'ham-enerji-harita', type: 'concept_map', title: 'Madde ve enerji akışı',
            nodes: [
              { id: 'organik', label: 'Organik madde', detail: 'Beslenmeyle elde edilir veya sentezlenir' },
              { id: 'parcalanma', label: 'Enerji açığa çıkarma', detail: 'Hücresel tepkimelerle gerçekleşir' },
              { id: 'atp', label: 'ATP', detail: 'Enerjiyi kısa süreli taşır' },
              { id: 'is', label: 'Hücresel iş', detail: 'Sentez, taşıma, hareket, bölünme' },
              { id: 'isi', label: 'Isı', detail: 'Enerjinin bir bölümü çevreye yayılır' },
            ],
            links: [
              { from: 'organik', to: 'parcalanma', label: 'katılır' }, { from: 'parcalanma', to: 'atp', label: 'üretimini sağlar' },
              { from: 'atp', to: 'is', label: 'enerji verir' }, { from: 'is', to: 'isi', label: 'bir bölümü' },
            ],
            caption: 'Enerji geri dönüştürülmez; dönüşür ve bir bölümü ısı olarak yayılır. ATP döngüsel biçimde üretilip tüketilir.'
          },
          {
            id: 'ham-solunum-trap', type: 'trap', title: 'Solunum, gaz alışverişi ve fotosentez',
            wrong: '“Nefes almayan canlı solunum yapmaz; fotosentez yapan bitki solunum yapmaz; bütün canlılar oksijenli solunum yapar.”',
            right: 'Bütün canlılar ATP’ye ihtiyaç duyar. Bitkiler fotosentezle organik madde sentezlerken hücresel solunumla ATP üretir. Solunum yolları canlılara göre değişebilir.',
            body: 'Fotosentez organik madde sentezi, hücresel solunum organik maddedeki enerjinin ATP üretiminde kullanılmasıdır. Aynı hücrede ikisi de görülebilir.'
          },
        ],
      },

      {
        id: 'ham-madde-bosaltim', kind: 'build', title: '6. Madde alışverişi ve boşaltım',
        lead: 'Canlı hücreler madde alır, dönüştürür ve fazla ya da zararlı ürünleri uzaklaştırır.',
        blocks: [
          {
            id: 'ham-madde-prose', type: 'prose',
            body: `Hücre zarı seçici geçirgendir; gerekli maddelerin alınmasını ve bazı maddelerin dışarı verilmesini düzenler. Su, iyon, gaz ve besinlerin geçiş yöntemi maddenin yapısına, derişim farkına ve enerji kullanımına göre değişir. Bu yöntemler hücre zarından madde geçişleri konusunda ayrıntılı işlenecektir.

**Boşaltım**, metabolizma sonucunda oluşan zararlı ürünlerin ve gereğinden fazla maddelerin uzaklaştırılmasıdır. Karbondioksit, azotlu atıklar, fazla su ve tuz boşaltım maddesi olabilir. Atık türü ve uzaklaştırma yolu canlıya göre değişir.

Tek hücreliler atıkları hücre zarından çevreye verebilir; bazıları fazla suyu kontraktil kofulla atar. Bitkiler gazları stomalarla verebilir, maddeleri kofullarda veya yaşlı yapraklarda biriktirip yaprak dökümüyle uzaklaştırabilir. Hayvanlarda akciğer, böbrek, deri ve karaciğer boşaltıma katkı sağlayabilir.`
          },
          {
            id: 'ham-bosaltim-compare', type: 'compare', title: 'Boşaltım, dışkılama ve salgılama',
            columns: ['Olay', 'Ayırt edici özellik'],
            rows: [
              { label: 'Boşaltım', values: ['Metabolik atık veya fazla maddelerin uzaklaştırılmasıdır.', 'Karbondioksit, üre, fazla su ve tuz örnektir.'] },
              { label: 'Dışkılama', values: ['Sindirilemeyen besin artıklarının sindirim kanalından atılmasıdır.', 'Her dışkı maddesi metabolik atık değildir.'] },
              { label: 'Salgılama', values: ['Üretilen yararlı maddenin görev yapmak üzere dışarı verilmesidir.', 'Hormon ve sindirim enzimi örnektir.'] },
            ],
            insight: 'Bir maddenin vücut dışına verilmesi tek başına boşaltım olduğunu göstermez; kaynağı ve işlevi değerlendirilir.'
          },
          { id: 'ham-bosaltim-why', type: 'why', question: 'Boşaltım neden gereklidir?', body: 'Metabolizma sürdükçe yan ürünler ve fazla maddeler oluşur. Bunların birikmesi pH, su miktarı, iyon dengesi ve enzim faaliyetini bozabilir. Boşaltım bu birikimi önleyerek homeostaziye katkı sağlar.' },
          {
            id: 'ham-bosaltim-trap', type: 'trap', title: 'Bitkiler ve tek hücreliler de boşaltım yapar',
            wrong: '“Böbreği veya boşaltım sistemi olmayan canlılarda boşaltım görülmez.”',
            right: 'Boşaltım bütün canlılarda hücresel düzeyde gereklidir. Özel boşaltım organları yalnızca bazı çok hücrelilerde bulunur.',
            body: 'Ortak olan olaydır; boşaltım organı, atık çeşidi ve uzaklaştırma yöntemi ortak değildir.'
          },
        ],
      },

      {
        id: 'ham-buyume-gelisme', kind: 'build', title: '7. Büyüme ve gelişme',
        lead: 'Büyüme nicel artışı, gelişme yapı ve işlev bakımından olgunlaşmayı ifade eder.',
        blocks: [
          {
            id: 'ham-buyume-prose', type: 'prose',
            body: `**Büyüme**, hücre sayısının ve/veya hücre hacminin artmasına bağlı kalıcı kütle ve hacim artışıdır. Tek hücrelilerde büyüme temel olarak hücre hacmi ve sitoplazma miktarının artmasıdır. Hücre bölündüğünde iki yeni birey oluştuğu için bu olay tek hücreli organizma bakımından üremedir.

Çok hücrelilerde büyüme çoğunlukla mitozla hücre sayısının artması, hücrelerin büyümesi ve hücreler arası maddelerin üretilmesiyle gerçekleşir. Hayvanlarda büyüme genellikle belirli dönemde hızlıdır ve erginlikten sonra sınırlanır. Bitkilerde meristem dokunun etkinliği sayesinde yaşam boyunca belirli bölgelerde büyüme sürebilir.

**Gelişme**, hücrelerin farklılaşması, dokuların ve organların olgunlaşması, canlının ergin bireye özgü yapı ve görevleri kazanmasıdır. Zigottan embriyoya, embriyodan ergine geçiş gelişmedir. Büyüme ve gelişme birlikte ilerleyebilir ancak aynı kavram değildir.`
          },
          {
            id: 'ham-buyume-compare', type: 'compare', title: 'Büyüme ve gelişme',
            columns: ['Büyüme', 'Gelişme'],
            rows: [
              { label: 'Değişim', values: ['Nicel: hücre sayısı, hacim veya kütle artışı', 'Nitel: yapı ve işlev bakımından olgunlaşma'] },
              { label: 'Mekanizma', values: ['Hücre büyümesi, mitoz ve madde birikimi', 'Hücre farklılaşması ve görev kazanma'] },
              { label: 'Örnek', values: ['Fidanın boy ve kütlesinin artması', 'Çiçeklenme yeteneğinin kazanılması'] },
            ],
            insight: 'Gelişme işlevsel olgunlaşmayı, büyüme ölçülebilir nicel artışı vurgular.'
          },
          {
            id: 'ham-buyume-trap', type: 'trap', title: 'Cansız büyüme ile canlı büyümesi',
            wrong: 'Kristalin dışarıdan madde eklenerek büyümesini canlı büyümesiyle aynı kabul etmek.',
            right: 'Canlı büyümesi metabolizma, protein sentezi, hücre büyümesi ve çoğu çok hücrelide hücre bölünmesiyle içeriden gerçekleşir.',
            body: 'Tek başına hacim artışı canlılık kanıtı değildir.'
          },
          {
            id: 'ham-buyume-exam', type: 'exam', title: 'ÖSYM’nin ayırdığı noktalar', body: 'Tek ve çok hücreli canlılarda bölünmenin sonucu farklı yorumlanır.',
            patterns: ['Tek hücrelinin bölünmesi üremedir.', 'Çok hücrelinin büyümesinde mitozla hücre sayısı artabilir.', 'Gelişme yalnızca kütle artışı değildir.']
          },
        ],
      },

      {
        id: 'ham-hareket-uyari', kind: 'build', title: '8. Hareket ve uyarılara tepki',
        lead: 'Bütün canlılar kendi düzeylerine uygun hareketler gösterir ve çevresel değişikliklere tepki verir.',
        blocks: [
          {
            id: 'ham-hareket-prose', type: 'prose',
            body: `**Hareket**, canlının veya canlıya ait bir yapının konum ya da durum değiştirmesidir. Hayvanlarda yer değiştirme, tek hücrelilerde kamçı, sil veya yalancı ayak hareketi görülebilir. Sitoplazma hareketi, organel taşınması ve kromozomların bölünme sırasındaki hareketi hücresel hareketlerdir.

Bitkiler çoğunlukla yer değiştirmez fakat hareket eder. Işığa yönelme, kök ve gövdenin yer çekimine göre büyümesi, sarılıcı bitkinin desteğe dolanması **tropizma** örnekleridir ve büyümeye bağlı yönelimdir. Küstüm otunun yaprak kapatması gibi **nasti** hareketlerinde tepkinin yönü uyarının yönüne bağlı değildir.

**Uyarı**, iç veya dış çevrede değişiklik oluşturan etkidir. Işık, sıcaklık, basınç, dokunma, kimyasal madde, su miktarı ve ses uyarı olabilir. **Uyarılara tepki**, canlının değişikliği algılayıp metabolik, fizyolojik veya davranışsal karşılık oluşturmasıdır.`
          },
          {
            id: 'ham-hareket-table', type: 'table', title: 'Hareket ve tepki örnekleri',
            columns: ['Canlı', 'Uyarı', 'Tepki'],
            rows: [
              ['Bakteri', 'Besin veya zararlı kimyasal', 'Kamçıyla yaklaşma ya da uzaklaşma'],
              ['Amip', 'Besin', 'Yalancı ayak oluşturma'],
              ['Bitki', 'Işık', 'Sürgünün ışığa doğru büyümesi'],
              ['Küstüm otu', 'Dokunma', 'Yaprakların kapanması'],
              ['İnsan', 'Yüksek sıcaklık', 'Terleme ve davranış değişikliği'],
            ],
            caption: 'Tepki her zaman yer değiştirme değildir; salgı, metabolizma hızı değişimi veya büyüme yönelimi de tepki olabilir.'
          },
          { id: 'ham-hareket-why', type: 'why', question: 'Uyarılara tepki neden gereklidir?', body: 'Besine yaklaşma, zararlı etkiden uzaklaşma, sıcaklığı dengeleme veya ışığa yönelme yaşama ve üreme başarısını artırabilir. Uygun tepki homeostaziyle bağlantılıdır.' },
          {
            id: 'ham-hareket-trap', type: 'trap', title: 'Hareket ≠ yer değiştirme',
            wrong: '“Bitkiler yer değiştirmediği için hareket etmez.”',
            right: 'Bütün canlılarda hücresel hareketler vardır. Organizma düzeyindeki hareketin biçimi canlı grubuna göre değişir; bitkilerde tropizma ve nasti görülebilir.',
            body: '“Aktif yer değiştirme” ile “hareket etme” aynı kapsamda değildir.'
          },
        ],
      },

      {
        id: 'ham-homeostazi', kind: 'deepen', title: '9. Homeostazi',
        lead: 'Metabolik tepkimelerin sürmesi için hücre içi ve vücut içi koşullar yaşama uygun aralıklarda tutulur.',
        blocks: [
          {
            id: 'ham-homeostazi-prose', type: 'prose',
            body: `**Homeostazi**, değişen çevre koşullarına rağmen iç ortamın dinamik olarak düzenlenmesidir. Dinamik denge, değerlerin hiç değişmemesi değil değişimlerin belirli sınırlar içinde tutulmasıdır.

Enzimler belirli sıcaklık ve pH aralıklarında çalışır. Hücrenin su ve iyon dengesi zar yapısını, madde geçişini ve tepkimeleri etkiler. Kan şekeri hücrelere düzenli yakıt sağlanmasında önemlidir. Sıcaklık, pH, su, iyon ve besin düzeylerinin aşırı değişmesi metabolizmayı bozabilir.

Homeostatik düzenlemede çoğunlukla **negatif geri bildirim** kullanılır. Bir değişken normal aralıktan uzaklaştığında oluşan tepki değişimi azaltır. Sıcaklık yükselince terleme ve deri damarlarının genişlemesi; sıcaklık düşünce titreme ve damarların daralması buna örnektir.`
          },
          {
            id: 'ham-homeostazi-figure', type: 'figure', kind: 'homeostazi-dongusu', width: 'wide',
            title: 'Negatif geri bildirimle homeostazi', purpose: 'Değişkenin algılanması, düzenleyici yanıt ve dengeye dönüş sırasını göstermek.',
            caption: 'Homeostazi tek bir organın görevi değildir; çok hücrelilerde sistemler birlikte katkı verebilir.',
            focus: [
              { title: 'Değişiklik', body: 'İç ortam değişkeni normal aralıktan uzaklaşır.' }, { title: 'Algılama', body: 'Reseptör değişikliği algılar.' },
              { title: 'Kontrol', body: 'Kontrol merkezi uygun yanıtı düzenler.' }, { title: 'Uygulama', body: 'Efektör düzeltici tepki oluşturur.' },
              { title: 'Sonuç', body: 'Değişken normal aralığa yaklaşır.' }, { title: 'Geri bildirim', body: 'Sapma azaldıkça yanıt azalır.' },
            ]
          },
          {
            id: 'ham-homeostazi-table', type: 'table', title: 'Homeostazi örnekleri',
            columns: ['Değişken', 'Sapma', 'Düzeltici örnek'],
            rows: [
              ['Vücut sıcaklığı', 'Yükselme', 'Terleme ve deri damarlarında genişleme'],
              ['Vücut sıcaklığı', 'Düşme', 'Titreme ve deri damarlarında daralma'],
              ['Kan glikozu', 'Yükselme', 'Hücrelere giriş ve depolamanın artırılması'],
              ['Su miktarı', 'Azalma', 'Susama ve su kaybının azaltılması'],
              ['Kanın pH’ı', 'Sapma', 'Tampon sistemler, solunum ve böbrek faaliyetleri'],
            ],
            caption: 'Mekanizmaların ayrıntıları insan fizyolojisinde öğrenilecektir; burada ortak amaç iç ortamı korumaktır.'
          },
          {
            id: 'ham-homeostazi-trap', type: 'trap', title: 'Homeostazi sabitlik değildir',
            wrong: '“Homeostazi sayesinde sıcaklık, su ve kan şekeri hiç değişmez.”',
            right: 'Değişkenler belirli sınırlar içinde dalgalanır; düzenleyici mekanizmalar aşırı sapmaları azaltır.',
            body: 'Homeostazi bozulduğunda enzim faaliyetleri ve hücresel tepkimeler etkilenebilir.'
          },
        ],
      },

      {
        id: 'ham-ureme-kalitim', kind: 'build', title: '10. Üreme ve kalıtsal devamlılık',
        lead: 'Üreme yeni birey oluşturur, kalıtsal bilginin nesiller arasında aktarılmasını ve türün devamını sağlar.',
        blocks: [
          {
            id: 'ham-ureme-prose', type: 'prose',
            body: `**Üreme**, canlıların kendilerine benzer yeni bireyler oluşturmasıdır. Bir bireyin ürememesi yaşamasını engellemez. Bu nedenle üreme ==bireyin devamı için değil, türün devamı için zorunludur==.

**Eşeysiz üreme** tek ata canlıdan, döllenme olmadan yeni birey oluşmasıdır. Temelinde mitoz veya prokaryotlarda ikiye bölünme bulunur. Bireyler mutasyonlar dışında ata canlıyla aynı kalıtsal yapıdadır. Hızlıdır fakat genetik çeşitliliğe katkısı sınırlıdır.

**Eşeyli üreme** çoğunlukla mayozla oluşan gametlerin döllenmesiyle gerçekleşir. İki kalıtsal kaynağın birleşmesi ve mayozdaki olaylar genetik çeşitlilik oluşturur. Tür içi çeşitlilik değişen koşullarda popülasyonun devamı için önemlidir.

Bakteriler ikiye bölünebilir, mantarlar spor oluşturabilir, bitkiler tohumla veya vejetatif, hayvanlar eşeyli ya da bazı türlerde eşeysiz üreyebilir. Ortak olan yöntem değil kalıtsal devamlılıktır.`
          },
          {
            id: 'ham-ureme-compare', type: 'compare', title: 'Eşeysiz ve eşeyli üreme',
            columns: ['Eşeysiz üreme', 'Eşeyli üreme'],
            rows: [
              { label: 'Ata', values: ['Genellikle bir', 'Genellikle iki gametin katkısı'] },
              { label: 'Döllenme', values: ['Yok', 'Var'] },
              { label: 'Temel', values: ['Mitoz veya ikiye bölünme', 'Mayoz, gamet ve döllenme'] },
              { label: 'Çeşitlilik', values: ['Mutasyon dışında düşük', 'Mayoz ve döllenme nedeniyle yüksek'] },
              { label: 'Hız', values: ['Genellikle hızlı', 'Genellikle daha yavaş'] },
            ],
            insight: 'Eşeysiz üreme de gerçek üremedir. Eşeyli üremenin ayırt edici sonucu genetik çeşitliliği artırmasıdır.'
          },
          {
            id: 'ham-ureme-trap', type: 'trap', title: '“Bütün canlı bireyler ürer” genellemesi',
            wrong: 'Kısır veya üreme çağına gelmemiş bireyin ortak özelliklere uymadığını düşünmek.',
            right: 'Üreme tür düzeyinde ortak özelliktir. Her bireyin yaşamı boyunca üremesi gerekmez.',
            body: 'Katır ve işçi arılar birey–tür düzeyi ayrımını gösterir.'
          },
          {
            id: 'ham-ureme-connection', type: 'connection', title: 'İleri konu bağlantısı',
            body: 'DNA’nın eşlenmesi hücre bölünmelerine, mayoz ve döllenme çeşitliliğe, kalıtsal bilginin aktarılması kalıtım ve genden proteine temel oluşturur.',
            links: ['Hücre Bölünmeleri', 'Kalıtım', 'Genden Proteine', 'Canlılar ve Çevre']
          },
        ],
      },

      {
        id: 'ham-varyasyon-adaptasyon', kind: 'deepen', title: '11. Varyasyon ve adaptasyon',
        lead: 'Aynı türe ait bireyler tamamen aynı değildir; kalıtsal farklılıklar adaptasyonların temelidir.',
        blocks: [
          {
            id: 'ham-varyasyon-prose', type: 'prose',
            body: `**Varyasyon**, aynı türe ait bireyler arasındaki farklılıklardır. Farklılıklar kalıtsal veya çevresel olabilir. Mutasyonlar, mayoz ve döllenme kalıtsal varyasyon kaynaklarıdır. Beslenme, sıcaklık, ışık ve egzersiz fenotipi değiştirebilir; bu değişimlerin tamamı kalıtsal değildir.

**Adaptasyon**, belirli çevrede yaşama ve üreme başarısını artıran kalıtsal özelliklerdir. Adaptasyon bireyin ihtiyacı üzerine oluşmaz. Popülasyonda bulunan kalıtsal farklılıklardan çevreye daha uygun olanlara sahip bireyler daha fazla üreyebilir; özellikler nesiller boyunca yaygınlaşabilir.

Adaptasyon yapısal, fizyolojik veya davranışsal olabilir. Kutup ayısının kalın yağ tabakası yapısal, çöl memelisinin yoğun idrar oluşturması fizyolojik, kuşların mevsimsel göçü davranışsal adaptasyondur. Özelliğin adaptasyon olması için kalıtsal olması ve belirli çevrede üreme başarısına katkı sağlaması gerekir.

**Aklimasyon**, bireyin yaşamı sırasında çevreye verdiği geri dönüşümlü fizyolojik uyumdur. Yüksek rakımda alyuvar sayısının artması aklimasyona; güneşte bronzlaşma modifikasyona örnektir. Bunlar adaptasyon değildir.`
          },
          {
            id: 'ham-varyasyon-compare', type: 'compare', title: 'Adaptasyon ve bireysel çevresel değişim',
            columns: ['Adaptasyon', 'Aklimasyon / modifikasyon'],
            rows: [
              { label: 'Düzey', values: ['Popülasyon', 'Birey'] },
              { label: 'Kalıtsallık', values: ['Kalıtsal temellidir.', 'Genellikle kalıtsal değildir.'] },
              { label: 'Zaman', values: ['Nesiller boyunca yaygınlaşır.', 'Yaşam sırasında oluşur.'] },
              { label: 'Örnek', values: ['Kaktüs yapraklarının dikenleşmesi', 'Bronzlaşma veya antrenmanla kas gelişimi'] },
            ],
            insight: 'Birey adaptasyon geliştirmez; kalıtsal özelliklerin popülasyondaki sıklığı nesiller boyunca değişir.'
          },
          {
            id: 'ham-adaptasyon-harita', type: 'concept_map', title: 'Varyasyondan adaptasyona',
            nodes: [
              { id: 'varyasyon', label: 'Kalıtsal varyasyon', detail: 'Bireyler farklıdır' },
              { id: 'cevre', label: 'Çevresel seçilim', detail: 'Özellikleri farklı etkiler' },
              { id: 'basari', label: 'Üreme başarısı farkı', detail: 'Gen aktarımı değişir' },
              { id: 'nesil', label: 'Nesiller', detail: 'Özellik sıklığı değişir' },
              { id: 'adaptasyon', label: 'Adaptasyon', detail: 'Kalıtsal uyum yaygınlaşır' },
            ],
            links: [
              { from: 'varyasyon', to: 'cevre', label: 'üzerinde işler' }, { from: 'cevre', to: 'basari', label: 'oluşturur' },
              { from: 'basari', to: 'nesil', label: 'aktarılır' }, { from: 'nesil', to: 'adaptasyon', label: 'sonucunda' },
            ],
            caption: 'Bu sıra doğal seçilimin temel mantığıdır; ayrıntıları Canlılar ve Çevre konusunda işlenecektir.'
          },
          {
            id: 'ham-adaptasyon-trap', type: 'trap', title: 'Adaptasyonun amacı yoktur',
            wrong: '“Canlı ihtiyaç duyduğu için değişir ve kazandığı özelliği yavrusuna aktarır.”',
            right: 'Kalıtsal varyasyonlar önceden bulunur. Çevre, bireylerin üreme başarısını etkiler; özellik popülasyonda yaygınlaşabilir.',
            body: 'Adaptasyon bireyin çabası veya yaşam sırasında kazanımı değildir.'
          },
        ],
      },

      {
        id: 'ham-ortakliklar-sinirlar', kind: 'practice', title: '12. Ortaklıkların sınırı ve virüsler',
        lead: 'Temel işlem, olayın ortak olup olmadığını ve farklı canlılarda hangi yöntemle gerçekleştiğini ayırmaktır.',
        blocks: [
          {
            id: 'ham-ortaklik-table', type: 'table', title: 'Bütün hücresel canlılarda ortak olan ve olmayan ifadeler',
            columns: ['İfade', 'Durum', 'Gerekçe'],
            rows: [
              ['Zar, sitoplazma, ribozom ve nükleik asit', 'Ortak', 'Temel hücresel yapılardır.'],
              ['Metabolizma ve enzim kullanımı', 'Ortak', 'Kontrollü tepkimeler gereklidir.'],
              ['ATP üretme ve tüketme', 'Ortak', 'Hücresel işler enerji gerektirir.'],
              ['Oksijenli solunum', 'Ortak değil', 'Oksijensiz yollar vardır.'],
              ['Fotosentez', 'Ortak değil', 'Yalnızca bazı ototroflarda görülür.'],
              ['Aktif yer değiştirme', 'Ortak değil', 'Yer değiştirmeyen canlılar vardır.'],
              ['Doku, organ ve sistem', 'Ortak değil', 'Tek hücrelilerde bulunmaz.'],
              ['Üreme', 'Tür düzeyinde ortak', 'Her bireyin üremesi gerekmez.'],
              ['Homeostazi', 'Ortak', 'Çalışma koşulları düzenlenir.'],
              ['Adaptasyon', 'Popülasyon düzeyinde', 'Kalıtsal özellikler seçilimle ilişkilidir.'],
            ],
            caption: 'Olay ortak olabilir; yapı, yöntem ve ürün farklı olabilir.'
          },
          {
            id: 'ham-virus-prose', type: 'prose',
            body: `**Virüsler** DNA veya RNA’dan oluşan genetik maddeyi protein kılıf içinde taşır. Hücre zarı, sitoplazma, ribozom ve bağımsız metabolik sistemleri yoktur. ATP üretmez, protein sentezlemez ve tek başına çoğalamaz.

Konak hücreye girdiklerinde hücrenin enzimlerini, ribozomlarını, ham maddelerini ve enerjisini kullanarak çoğalabilirler. Kalıtsal bilgi taşımaları, mutasyona uğramaları ve evrimleşmeleri canlılara; hücresel yapı ve bağımsız metabolizmalarının olmaması cansızlara benzer özellikleridir.

Virüsler hücre dışında cansız özellik gösteren, hücre içinde çoğalabilen zorunlu hücre içi parazitlerdir. Tek bir özelliğin canlılık için yeterli olmadığını gösteren sınır örnektir.`
          },
          {
            id: 'ham-virus-figure', type: 'figure', kind: 'virus-canlilik', width: 'wide',
            title: 'Virüslerin canlılık ölçütleri', purpose: 'Virüslerin neden hücresel canlı kabul edilmediğini göstermek.',
            caption: 'Virüsün çoğalması bağımsız değildir; konak hücrenin metabolik düzenine bağlıdır.',
            focus: [
              { title: 'Genetik bilgi', body: 'DNA veya RNA taşır.' }, { title: 'Çoğalma', body: 'Yalnızca canlı konakta gerçekleşir.' },
              { title: 'Hücresel yapı', body: 'Hücre zarı, sitoplazma ve ribozom yoktur.' }, { title: 'Metabolizma', body: 'Bağımsız ATP üretimi ve protein sentezi yoktur.' },
            ]
          },
          {
            id: 'ham-ortaklik-example', type: 'worked_example', title: 'Bir öncülü değerlendirme',
            prompt: '“Bütün canlılar organik besin üretir, bu besini oksijenli solunumda parçalar ve atıkları böbrekle uzaklaştırır.” öncülünü değerlendir.',
            steps: [
              { title: 'Beslenme', body: 'Bütün canlılar organik besin üretmez; heterotroflar hazır alır.' },
              { title: 'Enerji', body: 'Bütün canlılar oksijenli solunum yapmaz; ATP gereksinimi ortaktır.' },
              { title: 'Boşaltım', body: 'Boşaltım ortaktır; böbrek yalnızca bazı hayvanlarda bulunur.' },
            ],
            answer: 'Öncüldeki üç yöntemin de bütün canlılarda ortak olduğu iddiası yanlıştır.',
            takeaway: 'Ortak olay ile gerçekleşme yöntemini birbirinden ayır.'
          },
        ],
      },

      {
        id: 'ham-osym-kapanis', kind: 'close', title: '13. ÖSYM için zorunlu ayrımlar ve kontrol',
        lead: 'Bu bölüm ayrıntılı anlatımın sınavda kullanılacak çekirdeğini toplar.',
        blocks: [
          {
            id: 'ham-kesin-summary', type: 'summary', title: 'Bu konudan kesinlikle bilmen gerekenler',
            points: [
              'Bütün hücresel canlılarda hücre zarı, sitoplazma, ribozom, DNA ve RNA vardır; çekirdek ve zarlı organeller ortak değildir.',
              'Hücre canlılık özelliği gösteren en küçük birimdir. Tek hücrelilerde bütün yaşamsal olaylar hücrede yürür.',
              'Metabolizma anabolizma ve katabolizmanın toplamıdır; tepkimeler enzimlerle yürür ve enerji aktarımında ATP kullanılır.',
              'Beslenme madde gereksinimini karşılar; ototrof, heterotrof ve karma yöntemler farklıdır.',
              'Bütün canlılar ATP üretir ve tüketir; bütün canlıların oksijenli solunum veya fotosentez yapması gerekmez.',
              'Boşaltım metabolik atık ve fazla maddelerin uzaklaştırılmasıdır; dışkılama ve salgılama ile aynı değildir.',
              'Büyüme nicel artış; gelişme farklılaşma ve işlevsel olgunlaşmadır.',
              'Hareket yalnız yer değiştirme değildir; uyarılara tepki metabolik, fizyolojik veya davranışsal olabilir.',
              'Homeostazi tam sabitlik değil, iç ortam değişkenlerinin uygun sınırlar içinde düzenlenmesidir.',
              'Üreme birey değil tür; adaptasyon birey değil popülasyon düzeyinde değerlendirilir.',
            ],
            body: '“Bütün canlılarda” ifadesinde olayın ortak olup olmadığını, yöntemin veya organın da ortak sayılıp sayılmadığını ayrı denetle.'
          },
          {
            id: 'ham-osym-exam', type: 'exam', title: 'ÖSYM bu konudan ne ölçer?',
            body: 'Sorular tanım ezberinden çok ortaklık, düzey ve yöntem ayrımı gerektirir.',
            patterns: [
              'Hücre düzeyindeki ortak olay ile organizma düzeyindeki özel yapıyı ayırma',
              'Ototrof–heterotrof ve fotosentez–solunum ilişkisini yorumlama',
              'Anabolizma–katabolizma ve ATP bağlantısını kurma',
              'Boşaltım–dışkılama, solunum–nefes alma, hareket–yer değiştirme ayrımlarını yapma',
              'Üremeyi tür; adaptasyonu popülasyon düzeyinde değerlendirme',
              '“Hepsi, yalnızca, kesinlikle, aynı şekilde” sözcüklerini sınama',
            ]
          },
          {
            id: 'ham-kontrol-1', type: 'checkpoint',
            prompt: 'Bütün canlılarda ortak beş hücresel yapıyı ve ortak olmayan üç yapıyı yaz.',
            hint: 'Prokaryot–ökaryot karşılaştırmasını kullan.',
            answer: 'Ortak: hücre zarı, sitoplazma, ribozom, DNA ve RNA. Ortak olmayan: çekirdek, mitokondri, kloroplast, Golgi veya herhangi bir zarlı organel.'
          },
          {
            id: 'ham-kontrol-2', type: 'checkpoint',
            prompt: 'Beslenme, hücresel solunum ve ATP tüketimi arasındaki ilişkiyi açıkla.',
            hint: 'Madde elde edilir, enerji aktarılır, hücresel iş yapılır.',
            answer: 'Beslenme organik madde ve yapı taşı sağlar. Organik maddedeki enerji hücresel solunumla ATP üretiminde kullanılabilir. ATP sentez, aktif taşıma, hareket, büyüme ve homeostazide tüketilir.'
          },
          {
            id: 'ham-kontrol-3', type: 'checkpoint',
            prompt: 'Homeostazi, adaptasyon ve aklimasyon arasındaki düzey farkını belirt.',
            hint: 'Anlık iç düzenleme, bireysel çevresel yanıt ve popülasyonun kalıtsal uyumunu ayır.',
            answer: 'Homeostazi bireyin iç ortam düzenlemesidir. Aklimasyon bireyin yaşam sırasında oluşan fizyolojik yanıtıdır. Adaptasyon popülasyonda nesiller boyunca yaygınlaşan kalıtsal özelliktir.'
          },
          {
            id: 'ham-next-step', type: 'next_step',
            body: 'Temel bilgi tabanını tamamladın. Şimdi aynı konunun etkileşimli notunda organizasyon, ATP döngüsü, homeostazi ve virüs sınır örneklerini görsel ve anlatımlı olarak pekiştir.',
            topics: ['Canlıların Ortak Özellikleri — Etkileşimli Not', 'Canlıların Temel Bileşenleri', 'Hücre', 'Hücresel Solunum']
          },
        ],
      },
    ],
  },
}
