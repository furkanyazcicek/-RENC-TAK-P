const elektrikDevreleri = {
  slug: 'elektrik-devreleri',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Elektrik Devreleri' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '9. Konu',
  title: 'Elektrik Devreleri',
  subtitle: 'Yük akışını enerji aktarımından ayır; gerilim, direnç ve bağlantı biçiminden bütün devrenin davranışını kur.',
  document: {
    version: 2,
    estimated_minutes: 98,
    prerequisites: [
      { topic: 'Elektrostatik', why: 'Yük, iletken, potansiyel farkı ve elektrik alan devredeki akımın temelidir.' },
      { topic: 'İş, Güç ve Enerji', why: 'Devre elemanlarında enerji dönüşümü, güç ve verim ilişkilerini kullanacağız.' },
      { topic: 'Oran ve grafik', why: 'Ohm yasası, eşdeğer direnç ve V-I grafikleri oran mantığıyla okunur.' },
    ],
    outcomes: [
      'Elektrik akımını birim zamanda geçen yük miktarıyla açıklayabileceksin.',
      'Potansiyel farkı ve elektromotor kuvveti birim yük başına enerjiyle yorumlayabileceksin.',
      'Ohm yasasını ve bir telin direncini etkileyen değişkenleri kullanabileceksin.',
      'Ampermetre ve voltmetreyi devreye doğru biçimde bağlayabileceksin.',
      'Seri ve paralel dirençlerde eşdeğer direnç, akım ve gerilim ilişkilerini kurabileceksin.',
      'Elektriksel güç, enerji, kWh, sigorta ve kısa devreyi günlük uygulamalara bağlayabileceksin.',
    ],
    sections: [
      {
        id: 'circuit-opening', kind: 'opening', title: 'Devrede dolaşan yük, aktarılan enerji',
        lead: 'Pil devreye elektron sağlamaktan çok, iletkende zaten bulunan yükleri harekete geçirecek enerji ve potansiyel farkını sağlar.',
        blocks: [
          {
            id: 'circuit-opening-prose', type: 'prose',
            body: `Bir metal telin içinde devre kurulmadan önce de çok sayıda serbest elektron vardır. Pil bağlanıp devre kapatıldığında elektrik alan tel boyunca çok hızlı kurulur ve elektronlar rastgele termal hareketlerine ek olarak yavaş bir **sürüklenme hareketi** yapar. Lambanın hemen yanması, tek bir elektronun pilden lambaya ışık hızında gitmesi değildir.

Elektrik akımı, bir kesitten birim zamanda geçen net yük miktarıdır. Geleneksel akım yönü tarihsel olarak pozitif yüklerin hareket yönü seçilmiştir: kaynağın dış devresinde pozitif kutuptan negatif kutba doğrudur. Metal tellerde hareket eden elektronların sürüklenme yönü bunun tersidir. Hesaplarda ve devre oklarında geleneksel akım kullanılır.

Akım devre elemanında “harcanmaz”. Kararlı devrede bir dirençten saniyede giren yük miktarı çıkanla aynıdır; yoksa elemanda sürekli yük birikirdi. Harcanan ya da dönüşen büyüklük **elektriksel enerjidir**. Lamba yüklerin enerjisini ışık ve ısıya, motor mekanik enerjiye, ısıtıcı iç enerjiye dönüştürür.

Sürekli akım için kapalı bir iletken yol ve potansiyel farkı gerekir. Anahtar açık olduğunda devre yolu kesilir ve ideal modelde akım sıfırdır. Gerilim bulunması tek başına akım garantisi değildir; uçlar arasında kapalı yol ve sonlu eşdeğer direnç de gerekir.`,
          },
          {
            id: 'circuit-why', type: 'why',
            question: 'Neden anahtar kapanınca pilden uzaktaki lamba hemen yanar?',
            body: 'İletkenin her yerinde serbest elektronlar zaten bulunur. Anahtar kapanınca elektrik alan devre boyunca elektromanyetik olarak çok hızlı kurulur ve bütün elektronlar yaklaşık aynı anda sürüklenmeye başlar. Enerji devre alanı üzerinden aktarılır; tek bir elektronun tüm yolu hızla katetmesi gerekmez.',
          },
          {
            id: 'circuit-map', type: 'concept_map', title: 'Kaynak–akım–enerji zinciri',
            intro: 'Devre sorusunda yük akışı ile enerji dönüşümünü ayrı katmanlarda izle.',
            nodes: [
              { id: 'source', label: 'Kaynak', detail: 'Yükleri ayırır, enerji sağlar' },
              { id: 'voltage', label: 'Potansiyel farkı', detail: 'Birim yük başına enerji farkı' },
              { id: 'current', label: 'Akım', detail: 'Birim zamanda geçen yük' },
              { id: 'resistance', label: 'Direnç', detail: 'Akım-gerilim oranı' },
              { id: 'power', label: 'Güç', detail: 'Enerji dönüşüm hızı' },
              { id: 'safety', label: 'Güvenlik', detail: 'Aşırı akımı keser' },
            ],
            links: [
              { from: 'source', to: 'voltage', label: 'oluşturur' },
              { from: 'voltage', to: 'current', label: 'kapalı yolda sürer' },
              { from: 'resistance', to: 'current', label: 'sınırlar' },
              { from: 'current', to: 'power', label: 'enerji taşır' },
              { from: 'current', to: 'safety', label: 'fazlası kesilir' },
            ],
            caption: 'Kaynak yük üretmez; yük başına enerji vererek iletkendeki yüklerin düzenli akışını sürdürür.',
          },
        ],
      },
      {
        id: 'circuit-atlas-section', kind: 'build', title: 'Akımdan güvenliğe elektrik devreleri atlası',
        lead: 'Aynı devreyi mikroskobik yük hareketi, ölçüm, bağlantı ve enerji dönüşümü katmanlarında okuyabilmek gerekir.',
        blocks: [
          {
            id: 'circuit-atlas', type: 'figure', kind: 'fizik-elektrik-devreleri-atlas', width: 'full', complexity: 'high',
            title: 'Elektrik devrelerinin dört okuma katmanı',
            purpose: 'Akım-gerilim, Ohm yasası, seri-paralel bağlantılar ve güç-güvenlik ilişkilerini tek etkileşimli bilimsel levhada birleştirmek.',
            caption: 'Kaynağın kurduğu potansiyel farkı kapalı devrede akım oluşturur; bağlantı biçimi akım-gerilim paylaşımını, bunlar da güç ve güvenliği belirler.',
            focus: [
              { title: 'Akım ve gerilim', body: 'Kaynağın enerji sağlamasını, geleneksel akım ve elektron yönünü ayır.' },
              { title: 'Ohm yasası', body: 'Doğru ölçü aleti bağlantısını, V-I grafiğini ve tel direncini incele.' },
              { title: 'Seri ve paralel', body: 'Akım, gerilim ve eşdeğer direncin bağlantı türüne göre değişimini karşılaştır.' },
              { title: 'Güç ve güvenlik', body: 'Elektriksel enerji dönüşümü, kWh sayacı, sigorta ve ölçüm bağlantılarını gör.' },
            ],
          },
          {
            id: 'circuit-atlas-compare', type: 'compare', title: 'Temel devre büyüklüklerini ayır',
            columns: ['Akım', 'Gerilim', 'Direnç', 'Güç'],
            rows: [
              { label: 'Anlam', values: ['Yük akış hızı', 'Birim yük başına enerji farkı', 'Akıma karşı devre özelliği', 'Enerji dönüşüm hızı'] },
              { label: 'Birim', values: ['A = C/s', 'V = J/C', 'Ω = V/A', 'W = J/s'] },
              { label: 'Ölçüm', values: ['Ampermetre seri', 'Voltmetre paralel', 'V/I oranı', 'V·I hesabı'] },
              { label: 'Devrede', values: ['Düğümde kollara ayrılır', 'Eleman uçları arasında düşer', 'Bağlantıyla eşdeğerleşir', 'Elemanda enerji dönüşür'] },
            ],
            insight: 'Akımın azalması yükün yok olması değil, birim zamanda geçen yük miktarının azalmasıdır.',
          },
          {
            id: 'circuit-atlas-reading', type: 'prose',
            body: `Atlası bir deney akışı gibi oku. İlk odak kaynağın yükleri ayırıp kapalı devrede alan kurmasını gösterir. İkinci odak, bu devrede bir elemanın gerilim ve akımını doğru ölçerek direnç modelini çıkarır. Üçüncü odak, aynı dirençlerin bağlantı biçimi değiştiğinde bütün devrenin eşdeğerini ve paylaşım kurallarını dönüştürür. Son odak, bulunan akım ve gerilimi enerji dönüşüm hızına çevirir ve aşırı akımın neden güvenlik riski olduğunu açıklar.

Bir soruda lambanın parlaklığı soruluyorsa doğrudan “akımı büyük olan parlaktır” ezberi yerine lambanın gücünü karşılaştır. Özdeş lambalarda aynı bağlantı koşullarında akım karşılaştırması yeterli olabilir; farklı direnç veya gerilimlerde P=VI, P=I²R ya da P=V²/R bağıntılarından uygun olanını seç.`,
          },
        ],
      },
      {
        id: 'current-voltage', kind: 'deep-dive', title: 'Akım, potansiyel farkı ve kaynak',
        lead: 'Akım yük akışını, gerilim aynı yükün iki nokta arasında değiştirdiği enerjiyi anlatır.',
        blocks: [
          {
            id: 'current-voltage-prose', type: 'prose',
            body: `Bir iletken kesitinden Δt sürede geçen net yük Δq ise ortalama akım I=Δq/Δt’dir. Akım skalerdir fakat devre üzerinde bir referans yönü seçilir. Elektronlar seçilen akım yönüne ters hareket ederse negatif yükün ters yön hareketi pozitif geleneksel akıma karşılık gelir.

Potansiyel farkı, birim yük başına enerji farkıdır. İki nokta arasında V kadar gerilim varsa q yükü için enerji değişimi qV büyüklüğündedir. Voltmetre iki noktanın potansiyel farkını ölçtüğü için elemanın uçlarına paralel bağlanır. İdeal voltmetrenin direnci çok büyük kabul edilir; devreden anlamlı akım çekmez.

Ampermetre, üzerinden geçen akımı ölçtüğü için akım yoluna seri bağlanır. İdeal ampermetrenin direnci sıfıra yakın kabul edilir. Ampermetreyi kaynağa doğrudan paralel bağlamak kısa devre oluşturabilir ve büyük akıma yol açar. Ölçü aletinin bağlantısı yalnız çizim kuralı değil güvenlik kuralıdır.

Elektromotor kuvvet, kaynağın birim yüke sağladığı enerjidir ve volt birimiyle ölçülür. Adında “kuvvet” geçse de mekanik kuvvet değildir. İdeal kaynakta uç gerilimi emk’ye eşittir. Gerçek kaynakta iç direnç nedeniyle akım varken uç gerilimi azalabilir; TYT basit devrelerinde aksi belirtilmedikçe kaynak ideal alınır.`,
          },
          {
            id: 'current-formula', type: 'formula', title: 'Akım ve potansiyel farkı',
            latex: 'I=\frac{\Delta q}{\Delta t}\qquad V=\frac{\Delta E}{q}',
            meaning: 'Akım birim zamanda geçen yük, potansiyel farkı birim yük başına enerji farkıdır.',
            variables: [
              { sym: 'I', desc: 'Elektrik akımı; A' }, { sym: 'Δq', desc: 'Geçen net yük; C' },
              { sym: 'Δt', desc: 'Süre; s' }, { sym: 'V', desc: 'Potansiyel farkı; V' },
            ],
          },
          {
            id: 'current-example', type: 'worked_example', title: 'Kesitten geçen elektron sayısı',
            problem: 'Bir telden 4 saniye boyunca 0,8 A sabit akım geçiyor. Bu sürede kesitten geçen yük ve elektron sayısı nedir?',
            steps: [
              { title: 'Geçen yükü bul', body: 'Δq = I·Δt = 0,8×4 = 3,2 C.' },
              { title: 'Temel yüke böl', body: 'n = q/e = 3,2/(1,6×10⁻¹⁹) = 2×10¹⁹ elektron.' },
              { title: 'Yönü yorumla', body: 'Elektron sürüklenmesi geleneksel akım yönünün tersidir.' },
            ],
            result: 'Kesitten 3,2 C büyüklüğünde yük, yani 2×10¹⁹ elektron geçer.',
          },
          {
            id: 'current-trap', type: 'trap', title: 'Akımın lambada tüketildiğini sanma',
            wrong: '“Lambadan sonra akım azalır çünkü lamba akımı harcar.”',
            right: 'Tek kollu kararlı devrede lambaya giren ve çıkan akım aynıdır; lamba elektriksel enerjiyi dönüştürür.',
            body: 'Akımı yük akış hızı, enerjiyi yüklerin taşıdığı dönüşebilir büyüklük olarak ayrı izle.',
          },
        ],
      },
      {
        id: 'ohm-resistance', kind: 'deep-dive', title: 'Ohm yasası ve iletken direnci',
        lead: 'Ohmik iletkende sıcaklık sabitken gerilim ile akım doğru orantılı, V/I oranı sabittir.',
        blocks: [
          {
            id: 'ohm-prose', type: 'prose',
            body: `Ohm yasası V=IR, belirli sıcaklıkta ohmik davranan iletken için geçerlidir. Kaynak gerilimi iki katına çıkarılır ve direnç değişmezse akım iki katına çıkar. V-I grafiği orijinden geçen doğrudur. Düşey eksen V, yatay eksen I ise eğim R; eksenler tersse eğim 1/R olur. Eksen etiketini okumadan “eğim dirençtir” denmez.

Direnç, iletkenin geometrisine ve malzemesine bağlıdır. Aynı malzemeden telin boyu arttıkça elektronların karşılaştığı yol uzar ve direnç artar. Kesit alanı büyüdükçe yük akışı için daha geniş yol oluşur ve direnç azalır. Özdirenç ρ malzeme özelliğidir; sıcaklığa bağlı olabilir.

Metallerde sıcaklık arttıkça örgü titreşimleri artar, elektronların düzenli hareketi daha çok engellenir ve direnç genellikle yükselir. Bu nedenle “R sabit” kabulü sıcaklık sabit koşuluna bağlıdır. Akkor lamba teli ısındığında V-I grafiği doğrusal olmayabilir; her devre elemanı ohmik değildir.

Direnç enerji tüketen bir madde değildir; elektriksel enerjinin iç enerjiye dönüşüm hızını etkileyen devre özelliğidir. İdeal bağlantı tellerinin direnci sıfır kabul edilir. Gerçekte her telin direnci vardır; uzun enerji iletim hatlarında kayıpların azaltılması önemli bir mühendislik problemidir.`,
          },
          {
            id: 'ohm-formula', type: 'formula', title: 'Ohm yasası ve tel direnci',
            latex: 'V=I\,R\qquad R=\rho\frac{L}{A}',
            meaning: 'Sıcaklık sabitken ohmik iletkende V/I=R; aynı malzemede direnç boyla doğru, kesit alanıyla ters orantılıdır.',
            variables: [
              { sym: 'R', desc: 'Direnç; Ω' }, { sym: 'ρ', desc: 'Özdirenç; Ω·m' },
              { sym: 'L', desc: 'Tel boyu; m' }, { sym: 'A', desc: 'Kesit alanı; m²' },
            ],
          },
          {
            id: 'ohm-example', type: 'worked_example', title: 'Telin geometrisini değiştirme',
            problem: 'Aynı malzemeden bir telin boyu 3 katına, yarıçapı 2 katına çıkarılıyor. Yeni direnç ilk direncin kaç katıdır?',
            steps: [
              { title: 'Boy çarpanı', body: 'Direnç boyla doğru orantılıdır: L’=3L.' },
              { title: 'Kesit çarpanı', body: 'A=πr² olduğundan yarıçap 2 kat ise alan 4 kat olur.' },
              { title: 'Toplam oran', body: 'R’/R = 3/4.' },
            ],
            result: 'Yeni direnç 0,75R olur; boy uzatıcı, kalınlaşma azaltıcı etki yapmıştır.',
          },
          {
            id: 'meter-trap', type: 'trap', title: 'Ölçü aletlerini ters bağlama',
            wrong: '“Voltmetre seri, ampermetre paralel bağlanır.”',
            right: 'Ampermetre seri, voltmetre ölçülecek elemanın uçlarına paralel bağlanır.',
            body: 'Ampermetre akımın içinden geçmesini, voltmetre iki noktayı karşılaştırmayı gerektirir.',
          },
        ],
      },
      {
        id: 'series-parallel', kind: 'deep-dive', title: 'Seri ve paralel devreler: yol sayısı paylaşımı belirler',
        lead: 'Seride tek yol bulunduğu için akım aynı; paralelde ortak iki düğüm bulunduğu için gerilim aynıdır.',
        blocks: [
          {
            id: 'series-parallel-prose', type: 'prose',
            body: `Seri bağlı elemanlar aynı akım yolundadır. Düğümde ayrılma olmadığı için her dirençten aynı akım geçer. Kaynak gerilimi dirençler üzerinde paylaşılır ve gerilim düşümlerinin toplamı kaynak gerilimine eşittir. Eşdeğer direnç R₁+R₂+… biçiminde büyür; seri eleman eklemek ideal sabit gerilim kaynağında toplam akımı azaltır.

Paralel bağlı elemanların iki ucu aynı iki düğüme bağlıdır. Bu nedenle her kolun gerilimi kaynak gerilimine eşittir. Toplam akım düğümde kollara ayrılır; kol akımları dirençlerle ters orantılıdır. Daha küçük dirençli koldan daha büyük akım geçer. Akım yalnız kollar eş dirençliyse eşit bölünür.

Paralel eşdeğer direnç, en küçük kol direncinden de küçüktür. Çünkü kaynağın önüne yük akışı için ek yol açılmış olur. Paralel kol eklenince ideal kaynağın gördüğü eşdeğer direnç azalır ve toplam akım artar. Ev cihazları paralel bağlanır; böylece her cihaz şebeke gerilimini alır ve biri kapandığında diğerlerinin yolu kesilmez.

Lamba parlaklığı elektriksel güçle karşılaştırılır. Özdeş lambalar seride kaynağın gerilimini paylaşır ve tek lambaya göre sönük olabilir. Paralelde her lamba tam kaynak gerilimini alır. Ancak kaynak ideal değilse iç direnç ve güç sınırı sonucu değiştirebilir; temel TYT modelinde ideal kaynak varsayılır.`,
          },
          {
            id: 'series-parallel-formula', type: 'formula', title: 'İki direnç için eşdeğer',
            latex: 'R_{seri}=R_1+R_2\qquad R_{paralel}=\frac{R_1R_2}{R_1+R_2}',
            meaning: 'Seri eşdeğer her dirençten büyük, paralel eşdeğer her bir kol direncinden küçüktür.',
            variables: [
              { sym: 'R₁, R₂', desc: 'Kol dirençleri; Ω' }, { sym: 'Reş', desc: 'Kaynağın gördüğü eşdeğer direnç; Ω' },
            ],
          },
          {
            id: 'circuit-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Seri–paralel devre laboratuvarı',
            caption: 'Aynı kaynak ve dirençlerle bağlantı değiştiğinde eşdeğer direnç, toplam akım, kol akımları, eleman gerilimleri ve toplam güç birlikte değişir.',
            purpose: 'Seri ve paralel bağlantıların bütün devre büyüklüklerini gerçek zamanlı ve tutarlı bir bilanço içinde karşılaştırmak.',
            data: { mode: 'circuit', title: 'Bağlantıyı değiştir, bütün devreyi yeniden hesapla', initialTopology: 'series', initialVoltage: 12, initialResistanceOne: 4, initialResistanceTwo: 8 },
          },
          {
            id: 'series-example', type: 'worked_example', title: 'Aynı dirençleri iki biçimde bağlama',
            problem: '6 Ω ve 3 Ω dirençler 18 V ideal kaynağa önce seri, sonra paralel bağlanıyor. Toplam akımlar nedir?',
            steps: [
              { title: 'Seri eşdeğer', body: 'Rseri=6+3=9 Ω; Iseri=18/9=2 A.' },
              { title: 'Paralel eşdeğer', body: 'Rparalel=(6×3)/(6+3)=18/9=2 Ω.' },
              { title: 'Paralel toplam akım', body: 'Itoplam=18/2=9 A. Kollar 3 A ve 6 A taşır; toplam 9 A’dır.' },
            ],
            result: 'Paralel bağlantı eşdeğer direnci azaltıp ideal kaynaktan çekilen toplam akımı büyütür.',
          },
          {
            id: 'parallel-trap', type: 'trap', title: 'Paralelde akımı eşit bölme',
            wrong: '“Paralel iki kola toplam akım her zaman yarı yarıya dağılır.”',
            right: 'Kol gerilimleri eşittir; akım dirençle ters orantılıdır ve yalnız eş dirençlerde eşit bölünür.',
            body: 'Önce ortak düğümleri bul, sonra her kola ayrı I=V/R uygula.',
          },
        ],
      },
      {
        id: 'power-safety', kind: 'application', title: 'Elektriksel güç, enerji ve güvenlik',
        lead: 'Cihaz etiketi enerjiyi ne hızla dönüştürdüğünü, sayaç ise zaman boyunca toplam ne kadar enerji kullandığını gösterir.',
        blocks: [
          {
            id: 'power-safety-prose', type: 'prose',
            body: `Bir devre elemanının elektriksel gücü P=VI’dir. Ohmik direnç için Ohm yasası kullanılarak P=I²R veya P=V²/R biçimleri elde edilir. Hangi bağıntının kullanılacağı sabit tutulan büyüklüğe bağlıdır. Aynı gerilimde küçük direnç daha büyük güç çeker; aynı akımda büyük direnç daha büyük güç harcar.

Elektriksel enerji E=Pt ile bulunur. Joule SI birimidir; elektrik sayaçları pratikte kilowatt-saat kullanır. 1 kWh, 1 kW gücündeki cihazın 1 saat çalışırken dönüştürdüğü enerjidir ve 3,6×10⁶ J’ye eşittir. kWh güç değil enerji birimidir.

Sigorta devreye seri bağlanır ve belirli değerin üzerindeki akımda devreyi açar. Kısa devrede çok küçük dirençli yol oluştuğundan ideal modele göre akım çok büyür; teller ısınabilir ve yangın riski doğar. Sigortayı iletken telle köprülemek korumayı kaldırır ve tehlikelidir.

Ev devrelerinde cihazlar paralel bağlanır. Çok sayıda yüksek güçlü cihaz aynı hatta çalışırsa toplam akım kol akımlarının toplamı olarak artar ve sigorta atabilir. Toprak hattı, cihaz gövdesine kaçak olduğunda düşük dirençli güvenli yol sağlayıp koruma düzeninin devreyi kesmesine yardımcı olur. Islak ortam ve insan vücudu direnci güvenlik açısından kritik olduğundan elektrikle temas edilmez.`,
          },
          {
            id: 'power-safety-formula', type: 'formula', title: 'Elektriksel güç ve enerji',
            latex: 'P=V\,I=I^2R=\frac{V^2}{R}\qquad E=P\,t',
            meaning: 'Güç enerji dönüşüm hızıdır; kullanılan toplam enerji güç ile çalışma süresinin çarpımıdır.',
            variables: [
              { sym: 'P', desc: 'Güç; W' }, { sym: 'E', desc: 'Enerji; J veya kWh' },
              { sym: 't', desc: 'Çalışma süresi; s veya h' },
            ],
          },
          {
            id: 'power-example', type: 'worked_example', title: 'Elektrik enerjisi ve maliyet',
            problem: '1500 W ısıtıcı günde 2 saat, 30 gün çalışıyor. Kaç kWh enerji kullanır?',
            steps: [
              { title: 'Gücü kW’a çevir', body: '1500 W = 1,5 kW.' },
              { title: 'Toplam süre', body: 't = 2×30 = 60 saat.' },
              { title: 'Enerjiyi bul', body: 'E = P·t = 1,5×60 = 90 kWh.' },
            ],
            result: 'Isıtıcı bir ayda 90 kWh enerji kullanır; maliyet için bu değer birim enerji fiyatıyla çarpılır.',
          },
          {
            id: 'power-trap', type: 'trap', title: 'kWh’ı güç sanma',
            wrong: '“Sayaç 12 kWh gösteriyorsa cihazın gücü 12 kW’tır.”',
            right: 'kWh enerji miktarıdır; gücü bulmak için kullanım süresi de gerekir.',
            body: 'W ve kW güç, J ve kWh enerji birimleridir.',
          },
        ],
      },
      {
        id: 'circuit-exam', kind: 'synthesis', title: 'TYT soru stratejisi: düğüm, yol, ölçüm ve enerji',
        lead: 'Devreyi formül yığını olarak değil, yük ve enerji bilançosu kuran bir ağ olarak çöz.',
        blocks: [
          {
            id: 'circuit-final-prose', type: 'prose',
            body: `Önce devrenin düğümlerini işaretle. Arasında dallanma olmayan elemanlar seri; iki ucu aynı iki düğüme bağlı elemanlar paraleldir. Çizimin geometrisine aldanma: yan yana çizilen elemanlar paralel olmayabilir, farklı yerde çizilen iki kol aynı düğümlere bağlıysa paraleldir.

Eşdeğer direnci en iç gruptan başlayarak sadeleştir. Seri toplamın büyümesi, paralel eşdeğerin en küçük koldan küçük olması hızlı sonuç kontrolüdür. İdeal kaynakta toplam akım V/Reş’tir. Sonra paralel kol gerilimlerini eşit, seri eleman akımlarını eşit kullanarak ayrıntıya geri dön.

Ölçü aleti sorusunda ampermetrenin akım yolunda, voltmetrenin iki nokta arasında olduğunu gör. İdeal ampermetre tel, ideal voltmetre açık devre gibi davranır. Anahtar değişince devre topolojisini yeniden çiz; artık üzerinden akım geçmeyen veya kısa devreyle uçları aynı potansiyele gelen elemanları belirle.

Parlaklık sorusunda güç karşılaştır. Güvenlik sorusunda eşdeğer direnç azalınca toplam akımın büyüdüğünü ve sigortanın seri olarak devreyi açtığını izle. Birimlerde mA’yı A’ya, kW’ı W’a ve saat-saniye dönüşümünü seçilen enerji birimine göre yap.`,
          },
          {
            id: 'circuit-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'İlk karar', 'Kontrol'],
            rows: [
              ['Tek akım yolu', 'Elemanlar seri', 'Akım hepsinde aynı mı?'],
              ['Aynı iki düğüm', 'Elemanlar paralel', 'Gerilimler eşit mi?'],
              ['V-I doğrusu', 'Eksenlere göre eğim', 'V düşeyse eğim R'],
              ['Ampermetre', 'Seri ve düşük direnç', 'Kaynağa paralel mi? Tehlikeli'],
              ['Voltmetre', 'Eleman uçlarına paralel', 'İdeal olarak akım çekmez'],
              ['Parlaklık', 'Güç karşılaştır', 'Sabit V mi, sabit I mı?'],
              ['Sigorta atıyor', 'Toplam akım sınırı aştı', 'Paralel yeni yük eklendi mi?'],
            ],
            caption: 'Topoloji çözülmeden formül seçme; önce düğüm ve akım yollarını belirle.',
          },
          {
            id: 'circuit-osym', type: 'osym_simulation', title: 'Final kontrolü: paralel kol eklemek',
            passage: 'İdeal gerilim kaynağına R direnci bağlıyken devre akımı I’dir. Aynı R direncinden bir tane daha ilk dirence paralel bağlanıyor.',
            question: 'Yeni durumda hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Eşdeğer direnç 2R olur.', explanation: 'İki eş direnç paralelde R/2 eşdeğer verir.' },
              { text: 'Her dirençten geçen akım I/2 olur.', explanation: 'Kaynak gerilimi değişmediği için her kol yine V/R=I akımı taşır.' },
              { text: 'Kaynağın verdiği toplam akım 2I olur.', explanation: 'Her paralel kol I taşır; düğümde toplam akım I+I=2I olur.' },
              { text: 'İlk direncin uç gerilimi yarıya iner.', explanation: 'İdeal kaynakta paralel kolların gerilimi kaynak gerilimine eşit kalır.' },
              { text: 'Devrenin toplam gücü değişmez.', explanation: 'Ptoplam=V·Itoplam; toplam akım iki kat olduğu için güç iki kat olur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Paralel yeni kolun kaynakla aynı gerilimi aldığını ve kendi başına I akımı çektiğini kullan.',
            critical_point: 'Paralelde ideal kaynak gerilimi sabit kalır; artan büyüklük toplam akımdır.',
            takeaway: 'Paralel kol eklemek eşdeğer direnci azaltır, ideal kaynaktan çekilen toplam akımı artırır.',
          },
          {
            id: 'circuit-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Akım birim zamanda geçen yük miktarıdır; geleneksel yön elektron sürüklenmesine terstir.',
              'Akım elemanda tüketilmez; elektriksel enerji başka türlere dönüşür.',
              'Potansiyel farkı birim yük başına enerji farkı, emk kaynağın birim yüke sağladığı enerjidir.',
              'Ohmik iletkende sabit sıcaklıkta V=IR; V düşey I yatay grafikte eğim R’dir.',
              'Aynı malzemede tel direnci boyla doğru, kesit alanıyla ters orantılıdır.',
              'Ampermetre seri ve düşük dirençli, voltmetre paralel ve yüksek dirençlidir.',
              'Seride akım aynı ve dirençler toplanır; paralelde gerilim aynı ve akımlar toplanır.',
              'Paralel eşdeğer, en küçük kol direncinden küçüktür.',
              'Elektriksel güç P=VI, enerji E=Pt; kWh enerji birimidir.',
              'Sigorta aşırı akımda seri yolu açar; kısa devre çok küçük direnç nedeniyle tehlikelidir.',
            ],
          },
          {
            id: 'circuit-connection', type: 'connection', title: 'Sıradaki konuya köprü: manyetizma',
            body: 'Devrede hareket eden yüklerin akım oluşturduğunu gördük. Manyetizmada bu akımın çevresinde manyetik alan oluşturmasını, mıknatıslarla etkileşimini ve elektrik enerjisinin harekete dönüşmesini inceleyeceğiz.',
            links: ['Manyetizma', 'Elektrostatik', 'İş, Güç ve Enerji'],
          },
        ],
      },
    ],
  },
}

export default elektrikDevreleri
