const manyetizma = {
  slug: 'manyetizma',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Manyetizma' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '10. Konu',
  title: 'Manyetizma',
  subtitle: 'Görünmeyen alanı oklarla görünür kıl; akım, alan ve kuvvet yönlerini tek bir sağ el kuralında birleştir.',
  document: {
    version: 2,
    estimated_minutes: 96,
    prerequisites: [
      { topic: 'Elektrik Devreleri', why: 'Akımın yönünü, şiddetini ve kapalı devrede nasıl oluştuğunu kullanacağız.' },
      { topic: 'Hareket ve Kuvvet', why: 'Manyetik kuvvetin yönünü, net kuvveti ve dönme etkisini yorumlayacağız.' },
      { topic: 'Vektörler', why: 'Manyetik alan ve kuvvetin doğrultu-yön ilişkisini uzayda kuracağız.' },
    ],
    outcomes: [
      'Mıknatıs kutuplarını, alan çizgilerinin yönünü ve pusulanın davranışını açıklayabileceksin.',
      'Dünya’nın manyetik alanı ile pusula yönelimi arasındaki ilişkiyi kurabileceksin.',
      'Düz tel, akım halkası ve selenoidin oluşturduğu alanın yönünü sağ el kuralıyla bulabileceksin.',
      'Akım taşıyan tele etki eden manyetik kuvvetin büyüklüğünü ve yönünü belirleyebileceksin.',
      'Akım, alan, tel uzunluğu ve açı değişimlerinin kuvvete etkisini karşılaştırabileceksin.',
      'Elektromıknatıs, motor, röle ve hoparlörün çalışma ilkesini alan-kuvvet zinciriyle açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'magnetism-opening', kind: 'opening', title: 'Temassız etkileşimin görünmeyen aracı: manyetik alan',
        lead: 'Mıknatısın başka bir mıknatısı ya da akım taşıyan teli etkilemesi boşlukta sihirli bir sıçrama değil, uzaya yayılmış bir alanın sonucudur.',
        blocks: [
          {
            id: 'magnetism-opening-prose', type: 'prose',
            body: `Bir çubuk mıknatısı demir ataşlara yaklaştırdığında temas gerçekleşmeden önce ataşların hareket ettiğini görürsün. Pusula iğnesi de yakınında görünür bir mıknatıs olmasa bile belirli bir doğrultuya yönelir. Bu iki olayın ortak açıklaması **manyetik alandır**. Manyetik alan, bulunduğu uzay bölgesinde mıknatıslara, hareketli yüklere ve akım taşıyan iletkenlere manyetik etki oluşturabilen fiziksel büyüklüktür.

Manyetik alan **B** sembolüyle gösterilir ve SI birimi tesladır (T). B bir vektördür; her noktada hem büyüklüğü hem yönü vardır. Bir noktadaki alan yönü, o noktaya konan küçük bir pusulanın kuzeyi arayan ucunun göstereceği yön olarak tanımlanabilir. Alanı doğrudan görmeyiz; demir tozu desenleri, pusula dizileri ve yüklü parçacıkların hareketi alanı dolaylı olarak görünür kılar.

Manyetik olaylarda iki kaynak öne çıkar: kalıcı mıknatıslar ve hareketli elektrik yükleri. Bir telden akım geçtiğinde telin çevresinde manyetik alan oluşur. Bir bobinin sarımları aynı doğrultuda alan ürettiğinde etkiler birleşir ve güçlü bir elektromıknatıs elde edilir. Ters yönde, dış bir manyetik alan içindeki akım taşıyan tel kuvvet görür. Böylece elektrik devresindeki enerji harekete dönüşebilir.

Bu konunun omurgası üç sorudur: **Alan nerede ve hangi yönde? Akım hangi yönde? Kuvvet bu ikisine göre hangi yönde ve ne büyüklükte?** Şekli ezberlemek yerine her soruda bu üç katmanı ayrı kurarsan sağ el kuralı yalnız bir yön kontrol aracına dönüşür; karışık görünen motor, bobin ve tel soruları aynı ilkeye bağlanır.`,
          },
          {
            id: 'magnetism-why', type: 'why',
            question: 'Demir tozları neden mıknatısın çevresinde eğri desenler oluşturur?',
            body: 'Her demir tanesi geçici olarak mıknatıslanır ve bulunduğu noktadaki manyetik alan doğrultusuna yönelir. Çok sayıda tanenin oluşturduğu zincirler alan çizgilerinin biçimini görünür kılar; çizgiler gerçek tel ya da iz değildir, alanı temsil eden modeldir.',
          },
          {
            id: 'magnetism-map', type: 'concept_map', title: 'Kaynak–alan–etki zinciri',
            intro: 'Her manyetizma olayını kaynaktan sonuca doğru çöz.',
            nodes: [
              { id: 'source', label: 'Kaynak', detail: 'Mıknatıs veya hareketli yük' },
              { id: 'field', label: 'Manyetik alan B', detail: 'Uzayın her noktasında vektör' },
              { id: 'probe', label: 'Deneme nesnesi', detail: 'Pusula, akım taşıyan tel' },
              { id: 'force', label: 'Manyetik kuvvet F', detail: 'Akıma ve alana dik' },
              { id: 'motion', label: 'Hareket / tork', detail: 'Öteleme veya dönme' },
              { id: 'device', label: 'Teknolojik düzenek', detail: 'Motor, röle, hoparlör' },
            ],
            links: [
              { from: 'source', to: 'field', label: 'oluşturur' },
              { from: 'field', to: 'probe', label: 'etkiler' },
              { from: 'probe', to: 'force', label: 'akım varsa' },
              { from: 'force', to: 'motion', label: 'net etki' },
              { from: 'motion', to: 'device', label: 'işlev verir' },
            ],
            caption: 'Alan kaynağın çevresindeki uzaya aittir; kuvvet ise alanla etkileşen belirli cisme etki eder.',
          },
        ],
      },
      {
        id: 'magnetism-atlas-section', kind: 'build', title: 'Mıknatıstan motora manyetizma atlası',
        lead: 'Dört sahne aynı neden-sonuç zincirinin farklı ölçeklerini gösterir: kutup alanı, akım alanı, manyetik kuvvet ve uygulama.',
        blocks: [
          {
            id: 'magnetism-atlas', type: 'figure', kind: 'fizik-manyetizma-atlas', width: 'full', complexity: 'high',
            title: 'Manyetizmanın dört okuma katmanı',
            purpose: 'Alan çizgilerinden akımın alanına, tel kuvvetinden elektromanyetik düzeneklere geçişi ayrı yüksek çözünürlüklü odaklarla incelemek.',
            caption: 'Mıknatıs ya da akım alan üretir; alandaki akım kuvvet görür; kuvvetin hareket ve tork etkisi teknolojik düzeneklerde işe dönüşür.',
            focus: [
              { title: 'Mıknatıs ve alan', body: 'N–S kutuplarını, kapalı alan çizgilerini, pusulayı ve Dünya alanını incele.' },
              { title: 'Akımın alanı', body: 'Düz tel, halka ve selenoidde sağ el kuralının nasıl değişmeden çalıştığını gör.' },
              { title: 'Manyetik kuvvet', body: 'I, B ve F yönleriyle açı değişiminin kuvvet büyüklüğüne etkisini karşılaştır.' },
              { title: 'Uygulamalar', body: 'Elektromıknatıs, motor, röle ve hoparlörü aynı alan–kuvvet zincirine bağla.' },
            ],
          },
          {
            id: 'magnetism-atlas-compare', type: 'compare', title: 'Dört temel büyüklüğü ayır',
            columns: ['Mıknatıs kutbu', 'Manyetik alan', 'Elektrik akımı', 'Manyetik kuvvet'],
            rows: [
              { label: 'Rol', values: ['Alan kaynağı', 'Uzayın vektörel özelliği', 'Hareketli yük akışı', 'Etkileşim sonucu'] },
              { label: 'Yön', values: ['N ve S birlikte', 'Pusulanın N ucu', 'Geleneksel pozitif yük yönü', 'I ve B’ye dik'] },
              { label: 'Sembol / birim', values: ['N–S', 'B / tesla', 'I / amper', 'F / newton'] },
              { label: 'Kanıt', values: ['Çekme-itme', 'Demir tozu, pusula', 'Devre ölçümü', 'Telin sapması veya dönmesi'] },
            ],
            insight: 'Alan ile kuvveti karıştırma: B ortamı tanımlar, F ise o alandaki belirli telin ya da hareketli yükün gördüğü etkidir.',
          },
          {
            id: 'magnetism-atlas-reading', type: 'prose',
            body: `Atlasın ilk bölümünde mıknatısın dışındaki okları N’den S’ye izle; sonra çizginin mıknatısın içinde S’den N’ye dönerek kapandığını fark et. İkinci bölümde kalıcı mıknatıs yerine akımın alan kaynağı olabildiğini gör. Üçüncü bölüm bu iki fikri birleştirir: dış alan ile teldeki akımın etkileşimi tele kuvvet uygular. Son bölüm kuvvetin kontrollü harekete dönüştürüldüğü araçları gösterir.

Her odak tıklandığında açılan detay görseli ana resmin büyütülmüş kopyası değildir. Mıknatıs odağı kesilen mıknatısı ve Dünya alanını; akım odağı düz tel, halka ve selenoidi; kuvvet odağı üç özel açıyı ve yön ters çevirmeyi; uygulama odağı ise düzeneklerin iç yapısını ayrı bir bilimsel levhada açıklar.`,
          },
        ],
      },
      {
        id: 'magnets-field', kind: 'deep-dive', title: 'Mıknatıslar, kutuplar ve alan çizgileri',
        lead: 'Alan çizgileri yön, göreli şiddet ve süreklilik bilgisi taşır; fakat uzayda duran gerçek iplikler değildir.',
        blocks: [
          {
            id: 'magnets-field-prose', type: 'prose',
            body: `Her mıknatısın kuzey (N) ve güney (S) olarak adlandırılan iki kutbu vardır. Aynı adlı kutuplar birbirini iter, zıt adlı kutuplar çeker. Etkileşim kutuplara yakın bölgelerde daha güçlüdür. Bir mıknatıs ortadan kesildiğinde yalnız N ve yalnız S kutbu elde edilmez; her parça kendi N ve S kutuplarına sahip daha küçük bir mıknatısa dönüşür. Temel düzeyde yalıtılmış manyetik tek kutup gözlenmez.

Manyetik alan çizgileri, her noktadaki teğeti alan yönünü gösterecek biçimde çizilir. Mıknatısın **dışında N’den S’ye**, içinde ise S’den N’ye yönelir ve böylece kapalı eğriler oluşturur. Çizgilerin sık olduğu yer alanın daha güçlü olduğunu temsil eder. Alan çizgileri kesişemez; kesişseler aynı noktada iki farklı alan yönü olurdu. Çizgi sayısı gerçek bir fiziksel nesne sayısı değildir, seçilen çizim yoğunluğudur.

Bir mıknatıs başka bir ferromanyetik maddeyi, örneğin demiri, temas olmadan çekebilir. Demir yaklaştırıldığında içindeki manyetik bölgeler dış alanla daha düzenli yönlenir ve mıknatısa yakın uçta zıt kutup etkisi oluşur. Bu nedenle nötr bir demir parçası mıknatısın iki kutbu tarafından da çekilebilir. “Nötr olduğu için etkilenmez” çıkarımı elektrostatikte olduğu gibi burada da yanlıştır.

Dünya dev bir manyetik dipol gibi davranır. Pusulanın kuzeyi arayan ucu coğrafi kuzeye yakın yöneliyorsa Dünya’nın coğrafi kuzey çevresi manyetik açıdan güney kutbu karakteri göstermelidir. Coğrafi ve manyetik kutuplar tam çakışmaz; pusula coğrafi kuzeyi kusursuz gösteren bir cetvel değildir. Yine de günlük yön bulmada yerel sapma ihmal edilerek kuzey-güney doğrultusu bulunur.`,
          },
          {
            id: 'field-lines-table', type: 'table', title: 'Alan çizgisi okuma kuralları',
            columns: ['Görsel ipucu', 'Fiziksel anlam', 'Yanlış yorum'],
            rows: [
              ['Ok yönü', 'Pusulanın N ucunun yönü', 'Parçacıkların akış yolu'],
              ['Çizgilerin sıklaşması', 'Daha büyük alan şiddeti', 'Daha çok madde bulunması'],
              ['Kapalı eğri', 'Manyetik kutupların çift olması', 'Alan yalnız mıknatıs dışında vardır'],
              ['Çizgilerin kesişmemesi', 'Bir noktada tek B yönü', 'Çizgiler birbirini iter'],
            ],
            caption: 'Alan çizgisi, vektörel alanı okumak için kullanılan bir temsil aracıdır.',
          },
          {
            id: 'pole-trap', type: 'trap', title: 'Alan çizgisini mıknatısın içinde yarım bırakma',
            wrong: '“Manyetik alan N kutbundan çıkar, S kutbunda biter.”',
            right: 'Mıknatısın dışında N’den S’ye giden çizgi, mıknatısın içinde S’den N’ye dönerek kapanır.',
            body: 'Elektrik alan çizgileri yüklerde başlayıp bitebilir; manyetik alan çizgileri temel modelde kapalıdır.',
          },
        ],
      },
      {
        id: 'current-magnetic-field', kind: 'deep-dive', title: 'Akımın oluşturduğu alan: telden selenoide',
        lead: 'Hareketli elektrik yükleri manyetik alan üretir; iletkenin geometrisi alan çizgilerinin biçimini belirler.',
        blocks: [
          {
            id: 'current-field-prose', type: 'prose',
            body: `Uzun düz bir telden akım geçtiğinde telin çevresindeki alan çizgileri teli merkez alan eş merkezli çemberlerdir. Yönü bulmak için sağ elin başparmağını geleneksel akım yönünde tut; kıvrılan dört parmak B alanının dolaşım yönünü gösterir. Akım yönü ters çevrilirse alan çizgilerinin yönü de tersine döner. Telden uzaklaştıkça alan zayıflar, akım şiddeti arttıkça güçlenir.

Kâğıt düzlemine dik yönler özel sembollerle gösterilir. Okun sivri ucuna benzeyen **nokta (•)** düzlemden sana doğru, okun arkasındaki tüylerine benzeyen **çarpı (×)** düzlemden içeri doğrudur. Düz tel sayfanın içine akım taşıyorsa sağ el kuralı alanın saat yönünde; sayfadan dışarı taşıyorsa saat yönünün tersinde olduğunu verir. Sembolü ezberlemek yerine üç boyutlu oku zihninde canlandır.

Tel halka biçimine getirildiğinde her küçük tel parçasının merkezde oluşturduğu alan aynı eksen doğrultusunda birleşir. Sağ elin parmaklarını halkadaki akım yönünde kıvırdığında başparmak halkanın merkezindeki B yönünü ve kuzey yüzünü gösterir. Bir yüzünden bakıldığında akım saat yönünün tersindeyse o yüz kuzey; saat yönündeyse güney karakteri gösterir.

Çok sayıda halka art arda sarıldığında selenoid oluşur. Selenoidin içinde alan çizgileri yaklaşık paralel ve sık, dışında çubuk mıknatıs alanına benzer kapalı eğrilerdir. Sarım sayısı, akım ve uygun ferromanyetik çekirdek artırıldığında elektromıknatıs güçlenir. Akım kesilince yumuşak demir çekirdeğin mıknatıslığı büyük ölçüde kaybolabildiği için elektromıknatıs açılıp kapanabilir.`,
          },
          {
            id: 'right-hand-rule', type: 'formula', title: 'Düz tel için nitel büyüklük ilişkisi',
            latex: 'B\propto \frac{I}{r}',
            meaning: 'Uzun düz tel modelinde manyetik alan akımla artar, telden uzaklıkla azalır; yön sağ el kuralıyla bulunur.',
            variables: [
              { sym: 'B', desc: 'Manyetik alan şiddeti; T' }, { sym: 'I', desc: 'Telden geçen akım; A' },
              { sym: 'r', desc: 'Tele dik uzaklık; m' },
            ],
          },
          {
            id: 'current-field-example', type: 'worked_example', title: 'İki değişikliği birlikte yorumlama',
            problem: 'Uzun düz telden geçen akım 2 katına çıkarılırken gözlem noktası tele olan uzaklığın 3 katına taşınıyor. Alanın büyüklüğü nasıl değişir?',
            steps: [
              { title: 'Akım etkisi', body: 'B akımla doğru orantılıdır; akımın iki katı alanı 2 ile çarpar.' },
              { title: 'Uzaklık etkisi', body: 'B uzaklıkla ters orantılıdır; uzaklığın üç katı alanı 1/3 ile çarpar.' },
              { title: 'Çarpanları birleştir', body: 'B’/B = 2×(1/3)=2/3.' },
            ],
            result: 'Yeni alan ilk alanın 2/3’üdür; akım artmasına rağmen uzaklık artışı baskın gelmiştir.',
          },
          {
            id: 'current-direction-trap', type: 'trap', title: 'Elektron yönünü akım yönü sanma',
            wrong: '“Sağ el başparmağını metalde hareket eden elektronların yönüne tutarım.”',
            right: 'Başparmak geleneksel akım yönünü gösterir; elektron sürüklenmesi bunun tersidir.',
            body: 'Devre okunda verilen I yönünü doğrudan kullan; yalnız elektron yönü verilmişse önce tersini al.',
          },
        ],
      },
      {
        id: 'magnetic-force-wire', kind: 'deep-dive', title: 'Manyetik alanda akım taşıyan tele kuvvet',
        lead: 'Kuvvetin büyüklüğü telin alana dik bileşenine, yönü ise akım ile alanın sıralı vektörel ilişkisine bağlıdır.',
        blocks: [
          {
            id: 'magnetic-force-prose', type: 'prose',
            body: `Düzgün manyetik alan içine yerleştirilen akım taşıyan tel, akımın alanla yaptığı açı sıfır değilse manyetik kuvvet görür. Telin alan içindeki etkin uzunluğu L, akımı I, alan şiddeti B ve tel ile alan arasındaki küçük açı θ ise kuvvet büyüklüğü **F=BILsinθ** olur. Buradaki L telin toplam makara uzunluğu değil, düzgün alan içinde kalan düz bölümün uzunluğudur.

Tel alana dik olduğunda θ=90° ve sinθ=1 olduğu için kuvvet en büyüktür: F=BIL. Tel alana paralel ya da zıt paralel olduğunda θ=0° veya 180° ve sinθ=0 olduğundan kuvvet sıfırdır. Bu, manyetik alanın her zaman hızlandırdığı anlamına gelmediğini gösterir; yalnız akıma dik bileşen etkilidir.

Kuvvet yönü hem I’ye hem B’ye diktir. Sağ elinin işaret parmağını akım I, orta parmağını alan B yönünde açtığında başparmak pozitif geleneksel akım için tel kuvvetini gösterir. Kullanılan el kuralının parmak ataması kaynaklara göre farklı anlatılabilir; güvenli yöntem I×B sırasını korumaktır. Akım ters çevrilirse veya alan ters çevrilirse F ters döner. İkisi birden ters çevrilirse kuvvetin yönü değişmez.

Manyetik kuvvet hareketli yüklere de etki eder. Pozitif yük için yön v×B, negatif yük için bunun tersidir. Kuvvet anlık hıza dik olduğundan tek başına parçacığın süratini değiştirmez; hareket yönünü değiştirip dairesel yörünge oluşturabilir. Akım taşıyan tel bağıntısı, tel içindeki çok sayıdaki hareketli yükün kuvvetlerinin makroskobik toplamı olarak düşünülebilir.`,
          },
          {
            id: 'magnetic-force-formula', type: 'formula', title: 'Akım taşıyan telin manyetik kuvveti',
            latex: 'F=B\,I\,L\sin\theta',
            meaning: 'Kuvvet B, I ve alandaki tel uzunluğuyla doğru; tel ile alan arasındaki açının sinüsüyle orantılıdır.',
            variables: [
              { sym: 'F', desc: 'Manyetik kuvvet; N' }, { sym: 'B', desc: 'Manyetik alan; T' },
              { sym: 'I', desc: 'Akım; A' }, { sym: 'L', desc: 'Alandaki etkin tel uzunluğu; m' },
              { sym: 'θ', desc: 'Tel/akım yönü ile B arasındaki açı' },
            ],
          },
          {
            id: 'magnetism-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Manyetik kuvvet laboratuvarı',
            caption: 'B, I, L ve θ değiştiğinde kuvvet büyüklüğünü; akım veya alan ters çevrildiğinde kuvvet yönünü gerçek zamanlı karşılaştır.',
            purpose: 'F=BILsinθ bağıntısını bir sayı hesabı olmaktan çıkarıp büyüklük ve yönü aynı deney sahnesinde görünür kılmak.',
            data: { mode: 'magnetism', title: 'Akım–alan–kuvvet yönlerini birlikte yönet', initialField: 0.8, initialCurrent: 3, initialLength: 0.5, initialAngle: 90 },
          },
          {
            id: 'force-example', type: 'worked_example', title: 'Açı ve akım değişiminin ortak etkisi',
            problem: '0,5 T alanda 4 A akım taşıyan telin alan içindeki uzunluğu 0,30 m ve alanla açısı 30°’dir. Kuvvet kaç newtondur? Akım ters çevrilirse ne değişir?',
            steps: [
              { title: 'Büyüklüğü yaz', body: 'F=BILsinθ = 0,5×4×0,30×sin30°.' },
              { title: 'Sinüsü uygula', body: 'sin30°=0,5 olduğundan F=0,30 N bulunur.' },
              { title: 'Yön değişimini ayır', body: 'Akımın yalnız yönü ters çevrilirse büyüklük 0,30 N kalır, kuvvet ters yöne döner.' },
            ],
            result: 'Kuvvet 0,30 N’dur; akım ters çevrilince büyüklük değil yalnız yön değişir.',
          },
          {
            id: 'force-angle-trap', type: 'trap', title: 'Açıyı kuvvet ile alan arasında alma',
            wrong: '“Formüldeki θ, F ile B arasındaki açıdır.”',
            right: 'θ, teldeki akım yönü ile B arasındaki açıdır; F zaten hem I’ye hem B’ye diktir.',
            body: 'Şekilde önce I ve B oklarını bul, küçük aralarındaki açıyı seç, sonra sinüsünü kullan.',
          },
        ],
      },
      {
        id: 'electromagnetic-applications', kind: 'application', title: 'Elektromıknatıs, motor, röle ve hoparlör',
        lead: 'Aynı fizik ilkesi farklı düzeneklerde çekme, tork, anahtarlama veya titreşim üretir.',
        blocks: [
          {
            id: 'applications-prose', type: 'prose',
            body: `Elektromıknatıs, akım taşıyan bobinin alanını ferromanyetik çekirdekle güçlendirir. Hurda vinçlerinde akım verildiğinde demir parçalar çekilir, akım kesildiğinde yük bırakılır. Sarım sayısını veya akımı artırmak alanı güçlendirir; çekirdeğin malzemesi de sonucu etkiler. Ancak akımın artması bobinde I²R ısınmasını büyüttüğü için mühendislikte sıcaklık ve güç sınırları bulunur.

Basit doğru akım motorunda mıknatıs kutupları arasındaki dikdörtgen bobinin karşılıklı kenarlarından zıt yönlü akımlar geçer. Bu kenarlara etki eden eşit ve zıt kuvvetler aynı doğrultuda değildir; bir **kuvvet çifti** oluşturarak bobini döndüren tork üretir. Bobin yarım tur döndüğünde akım yönünün uygun anda çevrilmesi gerekir; komütatör ve fırçalar bu işi yaparak torkun aynı dönme yönünü sürdürmesini sağlar.

Rölede küçük bir kontrol akımı bobini mıknatıs yapar. Bobin, hareketli demir armatürü çekip başka bir devrenin kontaklarını açar veya kapatır. Böylece düşük güçlü bir devre daha yüksek güçlü bir devreyi elektriksel olarak kontrol edebilir. Röle “akımı büyüten” bir eleman değildir; bir devre sinyaliyle ayrı bir güç yolunu mekanik olarak anahtarlar.

Hoparlörde ses sinyaline göre yönü ve büyüklüğü değişen akım, kalıcı mıknatıs alanındaki hareketli bobinden geçer. Manyetik kuvvet bobini ve ona bağlı koniyi ileri geri hareket ettirir. Koni havada basınç değişimleri oluşturur ve ses dalgası yayılır. Mikrofonda ise ters enerji dönüşümüne benzer bir süreçle mekanik titreşim elektrik sinyaline çevrilebilir; bunun ayrıntısı elektromanyetik indüksiyonla genişler.

Manyetik alanın yararlı olması güvenliği önemsiz kılmaz. Güçlü mıknatıslar metal parçaları hızla çekebilir, elektronik ve tıbbi cihazları etkileyebilir. Akım taşıyan bobinler ısınabilir. Bir uygulamayı değerlendirirken yalnız alan şiddetini değil mekanik sıkışma, elektriksel güç ve sıcaklık risklerini de düşünmek gerekir.`,
          },
          {
            id: 'applications-table', type: 'table', title: 'Aynı ilke, farklı çıktı',
            columns: ['Düzenek', 'Giriş', 'Manyetik ara süreç', 'Çıkış'],
            rows: [
              ['Elektromıknatıs', 'Doğru akım', 'Bobin alanı çekirdeği mıknatıslar', 'Kontrollü çekme'],
              ['DC motor', 'Elektriksel enerji', 'Bobin kenarlarında zıt kuvvetler', 'Dönme / mekanik iş'],
              ['Röle', 'Küçük kontrol akımı', 'Bobin armatürü çeker', 'Ayrı devrede anahtarlama'],
              ['Hoparlör', 'Değişen ses akımı', 'Bobin kuvveti yön ve büyüklük değiştirir', 'Titreşim / ses'],
            ],
            caption: 'Düzenek adını ezberlemek yerine giriş–alan–kuvvet–çıktı zincirini izle.',
          },
          {
            id: 'motor-why', type: 'why',
            question: 'Motor bobinindeki eşit ve zıt kuvvetler neden birbirini yok etmez?',
            body: 'Kuvvetlerin vektörel toplamı sıfır olabilir, fakat uygulama noktaları farklıdır. Bu iki kuvvet bir kuvvet çifti oluşturur ve bobinin dönme ekseni çevresinde aynı yönde tork üretir.',
          },
        ],
      },
      {
        id: 'magnetism-synthesis', kind: 'synthesis', title: 'Soru çözme sistemi ve final kontrolü',
        lead: 'Önce kaynağı ve alanı, sonra akımı, en son kuvvetin büyüklük ve yönünü belirle.',
        blocks: [
          {
            id: 'magnetism-strategy', type: 'prose',
            body: `Mıknatıs sorusunda ilk iş kutupları işaretlemek ve dış alanda N’den S’ye ok çizmektir. Pusula verilmişse kuzeyi arayan ucun B yönünü göstereceğini kullan. Düz tel sorusunda başparmağı geleneksel akıma yönelt ve alanın sayfaya giriş-çıkış sembolünü belirle. Selenoidde parmaklarını sarım akımında kıvır; başparmak kuzey ucunu verir.

Kuvvet sorusunda önce büyüklük ve yönü ayrı çöz. B, I, L ve sinθ yalnız büyüklüğü verir. Yön için I×B sırasını uygula. Akım ya da alan tek başına ters çevrilirse kuvvet ters; ikisi birlikte çevrilirse aynı yönlüdür. Tel paralelse sağ el kuralı uygulamaya çalışmadan F=0 de.

Günlük düzenek sorusunda enerji dönüşümünü yaz. Elektromıknatıs elektrikten kontrollü manyetik çekmeye, motor elektrikten mekanik dönmeye, hoparlör elektrik sinyalinden mekanik titreşim ve sese gider. Rölede kontrol devresi güç devresinden ayrıdır. Bu zincir, görseli hiç görmediğin bir düzeneği bile analiz etmene yardım eder.`,
          },
          {
            id: 'magnetism-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'İlk karar', 'Kontrol'],
            rows: [
              ['Çubuk mıknatıs dışı', 'B yönü N → S', 'Çizgi içeriden dönüp kapanıyor mu?'],
              ['Düz tel ve pusula', 'Sağ el başparmağı I', 'Elektron yönü verilmiş olabilir mi?'],
              ['• veya × sembolü', 'Sayfadan dışarı / içeri', 'Üç boyutlu ok canlandırıldı mı?'],
              ['Tel B’ye paralel', 'F=0', 'θ=0° veya 180° mi?'],
              ['Akım ters çevrildi', 'F yönü ters', 'B ve açı aynı mı?'],
              ['Motor bobini', 'Karşı kenarlarda kuvvet çifti', 'Tork yönleri aynı mı?'],
            ],
            caption: 'Önce yön geometrisini kur, sonra sayısal bağıntıyı kullan.',
          },
          {
            id: 'magnetism-osym', type: 'osym_simulation', title: 'Final kontrolü: kuvveti değiştirmek',
            passage: 'Düzgün B alanına dik duran L uzunluklu telden I akımı geçerken tele F büyüklüğünde kuvvet etki ediyor. Sonra akım ve manyetik alan yönleri birlikte ters çevriliyor; büyüklükleri değişmiyor.',
            question: 'Tel üzerindeki yeni manyetik kuvvet için hangisi doğrudur?',
            options: [
              { text: 'Kuvvet sıfır olur.', explanation: 'Tel hâlâ alana diktir; sin90°=1 olduğu için kuvvet sıfır değildir.' },
              { text: 'Büyüklüğü F/2 olur.', explanation: 'B, I, L ve açı büyüklükleri değişmediği için kuvvet büyüklüğü değişmez.' },
              { text: 'Büyüklüğü F kalır ve yönü değişmez.', explanation: 'I×B ifadesinde iki vektörün birlikte ters çevrilmesi çarpım yönünü değiştirmez.' },
              { text: 'Büyüklüğü F kalır, yönü ters döner.', explanation: 'Yalnız I ya da yalnız B ters çevrilseydi yön değişirdi; ikisi birlikte çevriliyor.' },
              { text: 'Kuvvet 2F olur.', explanation: 'Yalnız yönler değişti; alan ve akım şiddeti artmadı.' },
            ],
            answer_index: 2,
            stem_analysis: 'Büyüklük için BILsinθ, yön için I×B kullan ve iki yön değişimini ayrı ayrı uygula.',
            critical_point: 'İki vektör birlikte ters çevrilirse vektörel çarpımın yönü değişmez.',
            takeaway: 'Tek yön değişimi kuvveti ters çevirir; I ve B’nin birlikte ters çevrilmesi kuvvet yönünü korur.',
          },
          {
            id: 'magnetism-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Mıknatısın aynı kutupları iter, zıt kutupları çeker; kesilen her parça yeniden N–S çifti olur.',
              'Manyetik alan çizgileri mıknatıs dışında N’den S’ye, içinde S’den N’ye gider ve kapalıdır.',
              'Pusulanın kuzeyi arayan ucu bulunduğu noktadaki B alanı yönünü gösterir.',
              'Düz tel çevresinde alan çemberseldir; başparmak akımı, kıvrılan parmaklar alan yönünü verir.',
              'Selenoidin iç alanı yaklaşık düzgün ve paraleldir; akım, sarım ve çekirdek alanı güçlendirebilir.',
              'Nokta sayfadan dışarı, çarpı sayfanın içine doğru vektörü gösterir.',
              'Akım taşıyan tel için F=BILsinθ; θ, I ile B arasındaki açıdır.',
              'Tel alana dikken kuvvet maksimum, paralelken sıfırdır.',
              'Kuvvet I ve B’ye diktir; yalnız I veya yalnız B ters çevrilirse F ters döner.',
              'Motor kuvvet çiftinin torkunu, röle manyetik çekmeyi, hoparlör değişen bobin kuvvetini kullanır.',
            ],
          },
          {
            id: 'magnetism-connection', type: 'connection', title: 'Sıradaki konuya köprü: dalgalar',
            body: 'Hoparlör konisinin ileri–geri hareketi havada basınç değişimleri oluşturur ve ses dalgası yayar. Dalgalar konusunda titreşimin enerjiyi ortam boyunca nasıl taşıdığını, dalga boyu-frekans-hız ilişkisini ve ses olaylarını inceleyeceğiz.',
            links: ['Dalgalar', 'Elektrik Devreleri', 'Hareket ve Kuvvet'],
          },
        ],
      },
    ],
  },
}

export default manyetizma
