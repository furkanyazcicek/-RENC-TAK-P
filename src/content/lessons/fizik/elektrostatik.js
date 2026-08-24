const elektrostatik = {
  slug: 'elektrostatik',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Elektrostatik' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '8. Konu',
  title: 'Elektrostatik',
  subtitle: 'Yükün mikroskobik kökenini kur, elektriklenme sırasını izle ve uzaktan etkileşimi kuvvet ile alan diliyle açıkla.',
  document: {
    version: 2,
    estimated_minutes: 94,
    prerequisites: [
      { topic: 'Fizik Bilimine Giriş', why: 'Vektör, birim, oran ve bilimsel gösterim elektriksel büyüklüklerin dilidir.' },
      { topic: 'Hareket ve Kuvvet', why: 'Coulomb kuvvetini Newton yasaları ve etki–tepki çiftleriyle yorumlayacağız.' },
      { topic: 'İş, Güç ve Enerji', why: 'Elektriksel kuvvetin enerji aktarımına uzanan anlamı sonraki devre konusuna köprü kurar.' },
    ],
    outcomes: [
      'Pozitif, negatif ve nötr cisimleri proton-elektron dengesiyle açıklayabileceksin.',
      'Yükün korunumu ve kuantumlu yapısını örnekler üzerinde kullanabileceksin.',
      'Sürtünme, dokunma ve etki ile elektriklenmeyi elektron hareketiyle ayırabileceksin.',
      'Coulomb kuvvetinin yük ve uzaklığa bağlılığını oranla hesaplayabileceksin.',
      'Elektrik alan çizgilerinin yönünü ve yoğunluğunu doğru yorumlayabileceksin.',
      'İletkenlerde elektrostatik denge, sivri uç, elektroskop ve topraklamayı açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'electrostatic-opening', kind: 'opening', title: 'Görünmeyen yük, görünen etki',
        lead: 'Saça sürtülen balonun duvara tutunması, kapı kolundaki kıvılcım ve yıldırım aynı temel olaya dayanır: elektrik yüklerinin ayrılması ve uzaktan etkileşmesi.',
        blocks: [
          {
            id: 'electrostatic-opening-prose', type: 'prose',
            body: `Maddenin elektriksel davranışı proton ve elektronların yüklerinden doğar. Protonun yükü pozitif, elektronunki negatif ve büyüklükleri eşittir. Nötr cisimde toplam proton yükü ile toplam elektron yükü birbirini dengeler; nötr olmak “yük taşımamak” değil net yükün sıfır olmasıdır.

Katı bir cisim elektriklenirken çekirdekteki protonlar başka cisme geçmez. Hareket edenler dış elektronlardır. Elektron kaybeden cisimde pozitif yük fazlalığı, elektron kazanan cisimde negatif yük fazlalığı oluşur. “Pozitif yüklenme” yeni proton üretilmesi değil elektron eksilmesidir.

Yükler iki temel davranış gösterir: aynı işaretli yükler birbirini iter, zıt işaretli yükler çeker. Yüklü bir cisim nötr bir cismi de çekebilir; çünkü nötr cismin içindeki yükler kutuplanır ve yakın taraftaki zıt işaretli yüklerin çekimi daha güçlü olur. Bu nedenle “çekiyorsa kesin zıt yüklüdür” sonucu her zaman doğru değildir.

Elektrostatik, yüklerin durgun ya da dengeye ulaşmış dağılımlarını inceler. İletkende hareketli elektronlar elektriksel kuvvet etkisiyle yeniden dağılır; denge kurulduğunda iletken içinde net elektrik alan sıfır olur. Yalıtkanda yükler kolay hareket edemediği için elektriklenme daha çok oluştuğu bölgede kalır.`,
          },
          {
            id: 'electrostatic-why', type: 'why',
            question: 'Neden yüklü bir tarak küçük ve nötr kâğıt parçalarını çekebilir?',
            body: 'Tarağın elektrik alanı kâğıttaki bağlı pozitif ve negatif yükleri çok küçük miktarda ayırır. Tarağa zıt işaretli taraf daha yakında, aynı işaretli taraf daha uzakta kalır. Elektriksel kuvvet uzaklığın karesiyle azaldığından yakın çekim uzak itmeden büyük olur ve net kuvvet tarağa doğrudur.',
          },
          {
            id: 'electrostatic-map', type: 'concept_map', title: 'Yükten gözlenen sonuca',
            intro: 'Bir elektrostatik olayı yük kaynağı, hareket serbestliği ve etkileşim olarak çöz.',
            nodes: [
              { id: 'particle', label: 'Proton–elektron', detail: 'Eşit büyüklükte zıt yük' },
              { id: 'net', label: 'Net yük', detail: 'Elektron fazlası veya eksikliği' },
              { id: 'transfer', label: 'Elektron aktarımı', detail: 'Sürtünme, temas, topraklama' },
              { id: 'force', label: 'Elektriksel kuvvet', detail: 'Çekme veya itme' },
              { id: 'field', label: 'Elektrik alan', detail: 'Uzayın kuvvet özelliği' },
              { id: 'equilibrium', label: 'Elektrostatik denge', detail: 'İletken içinde E=0' },
            ],
            links: [
              { from: 'particle', to: 'net', label: 'dengesizlik' },
              { from: 'transfer', to: 'net', label: 'değiştirir' },
              { from: 'net', to: 'force', label: 'oluşturur' },
              { from: 'force', to: 'field', label: 'alanla modellenir' },
              { from: 'field', to: 'equilibrium', label: 'yükleri dağıtır' },
            ],
            caption: 'Yük bir madde değil parçacıkların özelliğidir; elektriklenme bu yüklerin toplam dengesini değiştirir.',
          },
        ],
      },
      {
        id: 'electrostatic-atlas-section', kind: 'build', title: 'Yükten alana elektrostatik atlas',
        lead: 'Mikroskobik elektron aktarımı, laboratuvar elektriklenmesi, kuvvet ve alan aynı olayın farklı ölçeklerdeki görünümleridir.',
        blocks: [
          {
            id: 'electrostatic-atlas', type: 'figure', kind: 'fizik-elektrostatik-atlas', width: 'full', complexity: 'high',
            title: 'Elektrostatik olayların dört okuma katmanı',
            purpose: 'Yük korunumu, elektriklenme yöntemleri, Coulomb kuvveti ve iletken davranışını tek etkileşimli bilimsel levhada birleştirmek.',
            caption: 'Elektronların aktarılması net yükü değiştirir; yükler kuvvet alanı oluşturur ve iletkenlerde yeni bir denge dağılımı kurar.',
            focus: [
              { title: 'Yük ve korunumu', body: 'Elektron eksikliği/fazlalığını, temel yükü ve kapalı sistem bilançosunu incele.' },
              { title: 'Elektriklenme yolları', body: 'Sürtünme, dokunma ve topraklamalı etki yöntemlerini işlem sırasıyla karşılaştır.' },
              { title: 'Coulomb kuvveti', body: 'İşaretin yönü, yük büyüklüğünün ve uzaklığın kuvveti nasıl belirlediğini gör.' },
              { title: 'Alan ve iletken', body: 'Alan çizgileri, iletken denge, elektroskop ve topraklamayı birlikte oku.' },
            ],
          },
          {
            id: 'electrostatic-atlas-compare', type: 'compare', title: 'Parçacık, cisim, kuvvet ve alanı ayır',
            columns: ['Elektron aktarımı', 'Net yük', 'Kuvvet', 'Elektrik alan'],
            rows: [
              { label: 'Ne anlatır?', values: ['Cisimler arası hareket', 'Yük dengesinin sonucu', 'İki yükün karşılıklı etkisi', 'Kaynak yükün uzaya etkisi'] },
              { label: 'Yön', values: ['Elektronun hareket yönü', 'Skaler işaret', 'Etkilenen yüke göre', 'Pozitif test yüküne göre'] },
              { label: 'Bağımlılık', values: ['Malzeme ve yöntem', 'Alınan-verilen elektron', 'q₁q₂ ve r²', 'Kaynak yük ve konum'] },
              { label: 'Gözlem', values: ['Kıvılcım, sürtünme', 'Çekme/itme eğilimi', 'İvme ve denge', 'Alan çizgileri, kutuplanma'] },
            ],
            insight: 'Elektrik alanı görmek için ikinci yük gerekmez; kuvveti ölçmek için alana yerleştirilen bir test yükü gerekir.',
          },
          {
            id: 'electrostatic-atlas-reading', type: 'prose',
            body: `Atlası soldan sağa bir neden zinciri olarak kullan. İlk odak, cismin neden pozitif veya negatif olduğunu sayısal yük bilançosuyla kurar. İkinci odak, aynı bilançonun hangi fiziksel işlemle değiştiğini gösterir. Üçüncü odak, oluşan net yüklerin birbirine uyguladığı kuvveti yön ve büyüklük olarak modeller. Dördüncü odak ise tek bir kaynak yükün çevresindeki etkiyi alan kavramıyla geneller ve iletkenin bu alan altında nasıl dengeye geldiğini açıklar.

Bir soruda yalnız son elektroskop resmi verilebilir; çözüm için zinciri tersine yürütürsün. Yaprakların açılması aynı işaretli yüklerin itildiğini, yükün topuzdan yapraklara dağıldığını ve iletken içinde geçici alan oluşup yeni dengeye ulaşıldığını anlatır. Toprak bağlantısı görülürse elektronların Dünya ile alışveriş yapabileceğini hesaba katarsın.`,
          },
        ],
      },
      {
        id: 'charge-conservation', kind: 'deep-dive', title: 'Elektrik yükü: işaret, kuantum ve korunum',
        lead: 'Net yük, proton ve elektron yüklerinin cebirsel toplamıdır; kapalı sistemde toplam değişmez.',
        blocks: [
          {
            id: 'charge-prose', type: 'prose',
            body: `Temel yük büyüklüğü e yaklaşık 1,6×10⁻¹⁹ coulomb’dur. Proton +e, elektron −e yük taşır. Bir cismin net yükü temel yükün tam sayı katıdır; bu özelliğe yükün kuantumlu olması denir. q=ne bağıntısında n pozitif veya negatif tam sayıdır. Ölçekte çok sayıda elektron bulunduğu için makroskobik yükler sürekli değişiyormuş gibi görünür.

Elektrik yükünün SI birimi coulomb’dur. Bir coulomb, temel yüke göre çok büyük bir miktardır; elektrostatik deneylerde mikroCoulomb ve nanoCoulomb sık kullanılır. 1 μC=10⁻⁶ C, 1 nC=10⁻⁹ C’dir. Bilimsel gösterimde üs dönüşümü kuvvet hesabının en sık hata kaynağıdır.

Yük korunumu, yalıtılmış bir sistemde toplam elektrik yükünün sabit kalmasıdır. Sürtünmeden önce iki cisim nötrse toplam yük sıfırdır. Birinden diğerine n elektron geçerse elektron kaybeden +ne, kazanan −ne olur; toplam yine sıfırdır. Yük “üretilmez”, sistem içinde aktarılır.

İletkenlerde serbest elektronlar cismin tamamına yayılabilir; yalıtkanlarda bağlı yükler yalnız küçük yer değiştirmelerle kutuplanır. Yalıtkanın elektriklenemediği düşüncesi yanlıştır. Yalıtkan da yüklenebilir, fakat yük hareketi ve dağılımı iletkene göre sınırlıdır.`,
          },
          {
            id: 'charge-formula', type: 'formula', title: 'Yükün kuantumu ve korunumu',
            latex: 'q=n\,e\qquad \sum q_{önce}=\sum q_{sonra}',
            meaning: 'Net yük temel yükün tam sayı katıdır; kapalı sistemde yüklerin cebirsel toplamı süreç boyunca değişmez.',
            variables: [
              { sym: 'q', desc: 'Net elektrik yükü; C' }, { sym: 'n', desc: 'Tam sayı elektron fazlası/eksikliği' },
              { sym: 'e', desc: 'Temel yük büyüklüğü; 1,6×10⁻¹⁹ C' },
            ],
          },
          {
            id: 'charge-example', type: 'worked_example', title: 'Aktarılan elektron sayısı',
            problem: 'Nötr A cisminden nötr B cismine 5×10¹² elektron aktarılıyor. Son durumda cisimlerin yükleri nedir?',
            steps: [
              { title: 'Aktarılan yükün büyüklüğü', body: '|q| = n·e = 5×10¹² × 1,6×10⁻¹⁹ = 8×10⁻⁷ C = 0,8 μC.' },
              { title: 'İşareti belirle', body: 'A elektron kaybettiği için +0,8 μC, B elektron kazandığı için −0,8 μC olur.' },
              { title: 'Korunumu denetle', body: '+0,8 μC + (−0,8 μC) = 0; başlangıç toplamı korunur.' },
            ],
            result: 'A pozitif, B negatif yüklenir; büyüklükler eşittir çünkü aynı elektronlar birinden diğerine geçmiştir.',
          },
          {
            id: 'charge-trap', type: 'trap', title: 'Pozitif yükü hareket eden proton sanma',
            wrong: '“Cisim pozitif yüklenirken içine proton gelmiştir.”',
            right: 'Katı cisim pozitif yüklenirken genellikle elektron kaybetmiştir; protonlar çekirdekte kalır.',
            body: 'Elektronun hareket yönünü çiz; pozitif işaret elektron eksikliğini gösterir.',
          },
        ],
      },
      {
        id: 'charging-methods', kind: 'deep-dive', title: 'Elektriklenme yolları: aktarım, paylaşım ve ayrışma',
        lead: 'Yöntemlerin farkı yalnız cisimlerin son işaretinde değil, elektronların hangi aşamada nereye hareket ettiğindedir.',
        blocks: [
          {
            id: 'charging-prose', type: 'prose',
            body: `**Sürtünme ile elektriklenmede** başlangıçta nötr iki farklı yalıtkan arasında elektron aktarımı olur. Elektrona ilgisi daha büyük olan elektron kazanır ve negatif, diğeri pozitif yüklenir. Kapalı kabul edilen ikili sistemde son yükler eşit büyüklükte ve zıt işaretlidir. Sürtünme yük üretmez; temas yüzeyini artırarak aktarımı kolaylaştırır.

**Dokunma ile elektriklenmede** yüklü iletken nötr iletkene değdirilir. Elektronlar ortak bir denge oluşana kadar hareket eder. Cisimler ayrıldığında nötr cisim, başlangıçta yüklü cismin işaretiyle aynı işaretli olur. Özdeş iletken kürelerde toplam yük eşit paylaşılır; küreler özdeş değilse yalnız “yükler eşittir” denemez.

**Etki ile elektriklenmede** yüklü cisim iletkene dokunmadan yaklaşır ve iletkendeki yükleri ayırır. Bu ilk ayrışma, cismin toplam yükünü tek başına değiştirmez; yalnız kutuplanma oluşturur. Kalıcı yük elde etmek için iletken topraklanır. Dünya çok büyük bir yük deposu gibi elektron alır veya verir.

İndüksiyon sırası kritiktir: indükleyen çubuk yakındayken toprak bağlantısı yapılır; yeterli elektron alışverişinden sonra **önce toprak bağlantısı kesilir**, en son çubuk uzaklaştırılır. Çubuk önce uzaklaştırılırsa yük ayrımı ortadan kalkar ve toprak bağlantısı cismi yeniden nötrleyebilir. Son yük, indükleyen cismin işaretine zıttır.`,
          },
          {
            id: 'charging-table', type: 'table', title: 'Üç yöntemin kesin farkları',
            columns: ['Yöntem', 'Temas', 'Son yük ilişkisi', 'Ana mekanizma'],
            rows: [
              ['Sürtünme', 'İki yalıtkan temas eder', 'Eşit büyüklükte zıt işaret (yalıtılmış ikili)', 'Elektron aktarımı'],
              ['Dokunma', 'İletkenler temas eder', 'Aynı işaret; özdeşse eşit paylaşım', 'Yükün ortak yüzeye yayılması'],
              ['Etki', 'Yüklü çubuk dokunmaz', 'Topraklama ile indükleyene zıt işaret', 'Kutuplanma + Dünya ile alışveriş'],
            ],
            caption: 'Kutuplanma net yüklenme değildir; kalıcı indüksiyon için topraklama adımı gerekir.',
          },
          {
            id: 'charging-example', type: 'worked_example', title: 'Özdeş kürelerde dokunma',
            problem: '+6q yüklü K ile −2q yüklü L özdeş iletken küreleri dokundurulup ayrılıyor. Son yükler nedir?',
            steps: [
              { title: 'Toplam yükü koru', body: 'Qtoplam = +6q − 2q = +4q.' },
              { title: 'Özdeşliği kullan', body: 'Özdeş küreler aynı potansiyel dengeye geldiğinde toplam yük eşit paylaşılır.' },
              { title: 'Sonucu yaz', body: 'Her küre +4q/2 = +2q olur.' },
            ],
            result: 'K ve L ayrıldığında ikisi de +2q yüklüdür; toplam +4q korunmuştur.',
          },
          {
            id: 'induction-trap', type: 'trap', title: 'İndüksiyon sırasını ters çevirme',
            wrong: '“Topraklama yapılırken önce yüklü çubuk uzaklaştırılır.”',
            right: 'Çubuk yakındayken önce toprak bağlantısı kesilir, sonra çubuk uzaklaştırılır.',
            body: 'Toprak bağlantısı kesilmeden alan kaldırılırsa elektronlar Dünya üzerinden geri akıp kalıcı yükü yok edebilir.',
          },
        ],
      },
      {
        id: 'coulomb-force', kind: 'deep-dive', title: 'Coulomb kuvveti: işaret yönü, büyüklük oranı',
        lead: 'Noktasal yükler arasındaki kuvvet yüklerin çarpımıyla büyür, uzaklığın karesiyle hızla azalır.',
        blocks: [
          {
            id: 'coulomb-prose', type: 'prose',
            body: `Coulomb yasası, boyutları aralarındaki uzaklığa göre ihmal edilebilen iki yük arasındaki elektriksel kuvvetin büyüklüğünü verir. k ortamın elektriksel özelliğine bağlı sabittir; boşluk ve hava için yaklaşık 9×10⁹ N·m²/C² alınır. Kuvvet iki yükü birleştiren doğru üzerindedir.

Bağıntıda yüklerin mutlak değerleri kullanılarak **büyüklük** bulunur; yön ayrıca işaretlerden belirlenir. Aynı işaretler iter, zıt işaretler çeker. q₁’in q₂’ye uyguladığı kuvvet ile q₂’nin q₁’e uyguladığı kuvvet Newton’ın üçüncü yasası gereği eşit büyüklükte ve zıt yönlüdür. Yüklerden birinin daha büyük olması diğer kuvveti büyütmez; farklı kütleler varsa ivmeler farklı olur.

Kuvvet yüklerden biri iki katına çıkarsa iki kat, iki yük de iki katına çıkarsa dört kat olur. Uzaklık iki katına çıkarsa kuvvet dörtte bire, üç katına çıkarsa dokuzda bire düşer. Uzaklık merkezler arasındadır; küre yüzeyleri arasındaki boşlukla karıştırılmaz.

Bir yüke birden fazla yük etki ediyorsa her kuvvet ayrı vektör olarak bulunup toplanır. Doğrusal sorularda yön işaretiyle cebirsel toplam yapılabilir. Denge noktasında net kuvvet sıfırdır; bu, o noktada hiç elektriksel kuvvet olmadığı değil karşıt vektörlerin eşit büyüklükte olduğu anlamına gelir.`,
          },
          {
            id: 'coulomb-formula', type: 'formula', title: 'Coulomb yasası',
            latex: 'F=k\frac{|q_1q_2|}{r^2}',
            meaning: 'Kuvvet büyüklüğü yüklerin mutlak değerlerinin çarpımıyla doğru, merkezler arası uzaklığın karesiyle ters orantılıdır.',
            variables: [
              { sym: 'F', desc: 'Elektriksel kuvvet; N' }, { sym: 'q₁, q₂', desc: 'Noktasal yükler; C' },
              { sym: 'r', desc: 'Yükler arası uzaklık; m' }, { sym: 'k', desc: 'Coulomb sabiti; yaklaşık 9×10⁹ N·m²/C²' },
            ],
          },
          {
            id: 'electrostatic-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Yük–uzaklık–kuvvet laboratuvarı',
            caption: 'Yük işaretleri çekme veya itmeyi, yük büyüklükleri ve uzaklık kuvvet oklarının boyunu belirler. r, 2r ve 3r karşılaştırması ters-kare değişimi görünür kılar.',
            purpose: 'Coulomb yasasının işaret, büyüklük ve ters-kare uzaklık ilişkisini yapılandırılabilir bir deneyle göstermek.',
            data: { mode: 'electrostatic', title: 'Yükleri değiştir, kuvvetin yönünü ve büyüklüğünü izle', initialChargeOne: 3, initialChargeTwo: -4, initialDistance: 0.5 },
          },
          {
            id: 'coulomb-example', type: 'worked_example', title: 'Oranla Coulomb kuvveti',
            problem: 'İki noktasal yük arasındaki kuvvet F’dir. Birinci yük 3 katına, ikinci yük 2 katına çıkarılıyor; uzaklık 2 katına çıkarılıyor. Yeni kuvvet kaç F olur?',
            steps: [
              { title: 'Yük çarpanı', body: 'q₁q₂ çarpımı 3×2=6 kat olur.' },
              { title: 'Uzaklık çarpanı', body: 'r², 2²=4 kat olur; kuvvet 1/4 ile çarpılır.' },
              { title: 'Toplam oran', body: 'F’/F = 6/4 = 3/2.' },
            ],
            result: 'Yeni kuvvet büyüklüğü 1,5F olur. İşaretler değişmediyse çekme/itme türü de değişmez.',
          },
          {
            id: 'coulomb-trap', type: 'trap', title: 'Büyük yük daha büyük kuvvet görür sanma',
            wrong: '“+6 μC yük, −2 μC yüke üç kat büyük kuvvet uygular.”',
            right: 'İki yük üzerindeki kuvvetler eşit büyüklükte ve zıt yönlüdür.',
            body: 'Coulomb bağıntısındaki q₁q₂ çarpımı her iki kuvvet için aynıdır; farklı olan kütleyse ivmeler değişebilir.',
          },
        ],
      },
      {
        id: 'field-conductor', kind: 'deep-dive', title: 'Elektrik alan, iletken denge ve elektroskop',
        lead: 'Alan, bir kaynak yükün çevresindeki uzaya kazandırdığı yönlü etkiyi test yükünden bağımsız tanımlar.',
        blocks: [
          {
            id: 'field-prose', type: 'prose',
            body: `Bir noktadaki elektrik alan, o noktaya konan küçük pozitif test yüküne etki eden kuvvetin test yüküne oranıdır. Test yükü pozitif seçildiği için alan yönü pozitif yükün göreceği kuvvet yönüdür. Kaynak pozitifse alan dışarı, negatifse içeri doğrudur.

Alan çizgileri fiziksel ipler değildir; yön ve büyüklüğü görselleştirir. Çizginin teğeti alan yönünü, çizgi yoğunluğu alanın göreli büyüklüğünü gösterir. Çizgiler pozitif yükten çıkar, negatif yüke girer; kesişmez. Tek yükte radyal, zıt yük çiftinde pozitiften negatife uzanan eğri çizgiler oluşur.

İletkende serbest elektronlar alan etkisiyle hareket eder. Elektrostatik denge kurulduğunda iletken içinde elektrik alan sıfır, fazla yük dış yüzeydedir ve alan yüzeye diktir. Sivri bölgelerde yüzey yük yoğunluğu ve hemen dışarıdaki alan daha büyüktür. Paratonerin sivri uç ve güvenli toprak hattı kullanması bu davranışla ilişkilidir.

Elektroskop, cismin yüklü olup olmadığını ve bilinen yükle birlikte kullanılırsa işaretini araştırır. Aynı işaretli yükler yapraklara dağıldığında yapraklar açılır. Yalnız açıklık miktarından işaret bulunamaz. Topraklama, iletkeni Dünya’ya bağlayarak elektron alışverişine izin verir; yük azalırsa yapraklar kapanır.`,
          },
          {
            id: 'field-formula', type: 'formula', title: 'Elektrik alan tanımı',
            latex: '\vec E=\frac{\vec F}{q_0}\qquad E=k\frac{|Q|}{r^2}',
            meaning: 'Alan yönü pozitif test yükünün kuvvet yönüdür; noktasal kaynak yükün alanı uzaklığın karesiyle azalır.',
            variables: [
              { sym: 'E', desc: 'Elektrik alan; N/C' }, { sym: 'F', desc: 'Test yüküne etki eden kuvvet; N' },
              { sym: 'q₀', desc: 'Pozitif ve küçük test yükü; C' }, { sym: 'Q', desc: 'Kaynak yük; C' },
            ],
          },
          {
            id: 'field-table', type: 'table', title: 'Alan çizgisinden fiziksel yoruma',
            columns: ['Görsel ipucu', 'Doğru yorum', 'Yanlış çıkarım'],
            rows: [
              ['Oklar dışarı', 'Kaynak pozitif', 'Test yükü de mutlaka pozitiftir'],
              ['Oklar içeri', 'Kaynak negatif', 'Alan büyüklüğü negatiftir'],
              ['Çizgiler sık', 'Alan daha büyük', 'Daha fazla gerçek çizgi vardır'],
              ['İletken içinde çizgi yok', 'Dengede E=0', 'İletkende hiç yük yoktur'],
              ['Sivri uçta çizgiler sık', 'Yüzey yük yoğunluğu büyük', 'Toplam yük yalnız uçtadır'],
            ],
            caption: 'Alan vektördür; büyüklüğü pozitif sayı, yönü oklarla gösterilir.',
          },
          {
            id: 'field-trap', type: 'trap', title: 'Negatif yükte alanı negatif büyüklük sanma',
            wrong: '“Negatif yükün elektrik alanı negatiftir.”',
            right: 'Elektrik alan büyüklüğü pozitif, yönü negatif yüke doğrudur.',
            body: 'E vektörünün işareti seçilen eksene göre bileşeni anlatabilir; fiziksel büyüklük |E| negatife düşmez.',
          },
        ],
      },
      {
        id: 'electrostatic-exam', kind: 'synthesis', title: 'TYT soru stratejisi: elektron yönü, işlem sırası, vektör',
        lead: 'Elektrostatik sorusunu ezberlenmiş çubuk-kumaş tablosundan önce yük bilançosu ve vektörle çöz.',
        blocks: [
          {
            id: 'electrostatic-final-prose', type: 'prose',
            body: `Elektriklenme sorusunda önce hareket edebilen parçacığı elektron olarak belirle. Elektronun çıktığı cismi pozitif, girdiği cismi negatif işaretle. Sistem kapalıysa son yükleri cebirsel toplayıp başlangıç toplamıyla karşılaştır. Özdeş iletkenler dokunuyorsa toplam yük eşit paylaşılır; yalıtkanlarda bu kural kullanılmaz.

Etki ile elektriklenmede her aşamanın küçük resmini çiz: çubuk yaklaşır, yükler ayrılır, toprak bağlanır, elektron akışı olur, önce toprak kesilir, sonra çubuk uzaklaşır. İşlem sırası değişirse son yük değişebilir. Yalnız kutuplanmış nötr cisimde artı ve eksi bölgeler vardır ama toplam hâlâ sıfırdır.

Coulomb sorusunda önce mikro/nano birimleri coulomb’a dönüştür ya da yalnız oran soruluyorsa sabitleri yazmadan çarpanları karşılaştır. Kuvvetin büyüklüğünü mutlak değerle bul, yönü işaretten sonra ekle. Birden fazla yükte tek bağıntı kurma; her kuvveti ayrı vektör çizip topla.

Alan çizgisinde ok yönünü pozitif test yükü tanımından türet. İletken denge sorusunda iç alanın sıfır, fazla yükün dış yüzeyde ve sivri uçta daha yoğun olduğunu hatırla. Elektroskop yapraklarının açılması yük büyüklüğü hakkında fikir verir fakat tek başına işareti kesinleştirmez.`,
          },
          {
            id: 'electrostatic-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'İlk karar', 'Kontrol'],
            rows: [
              ['Elektron aldı', 'Negatif yüklenir', 'Proton sayısı değişti mi? Hayır'],
              ['Özdeş iletkenler dokunuyor', 'Toplam yük eşit paylaşılır', 'Yük korunuyor mu?'],
              ['Çubuk dokunmadan yaklaşıyor', 'Kutuplanma/etki', 'Topraklama var mı?'],
              ['Uzaklık n kat', 'Kuvvet 1/n² kat', 'Merkezler arası uzaklık mı?'],
              ['Alan oku soruluyor', 'Pozitif test yükü yönü', 'Kaynak yükün işareti ne?'],
              ['İletken dengede', 'İçeride E=0, yük dışta', 'Sivri uç yoğunluğu unutuldu mu?'],
            ],
            caption: 'Yük işareti, kuvvet yönü ve elektron hareket yönü üç farklı oku anlatabilir; birbirine karıştırma.',
          },
          {
            id: 'electrostatic-osym', type: 'osym_simulation', title: 'Final kontrolü: etki ile elektriklenme',
            passage: 'Negatif yüklü bir çubuk, yalıtkan saplı nötr metal küreye dokunmadan yaklaştırılıyor. Çubuk yerindeyken küre toprağa bağlanıyor; bir süre sonra önce toprak bağlantısı kesiliyor, ardından çubuk uzaklaştırılıyor.',
            question: 'Son durumda küre için hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Negatif yüklüdür; çubuktan elektron geçmiştir.', explanation: 'Çubuk küreye dokunmaz. Negatif çubuk elektronları Dünya’ya iter; küre elektron eksikliğiyle pozitif kalır.' },
              { text: 'Pozitif yüklüdür; toplam proton sayısı artmıştır.', explanation: 'Pozitiflik proton artışından değil elektron eksikliğinden doğar.' },
              { text: 'Pozitif yüklüdür; topraklama sırasında elektronların bir bölümü Dünya’ya gitmiştir.', explanation: 'Negatif çubuk küredeki elektronları uzaklaştırır; toprak yolu açıkken elektronlar Dünya’ya gider. Toprak önce kesildiği için eksiklik korunur.' },
              { text: 'Nötrdür; etki ile elektriklenmede net yük oluşmaz.', explanation: 'Topraklama yoksa yalnız kutuplanma olurdu; topraklama kalıcı net yük sağlar.' },
              { text: 'Yük işareti belirlenemez.', explanation: 'İndükleyen çubuğun işareti ve işlem sırası verildiği için son işaret belirlenir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Negatif çubuğun elektronları ittiğini ve Dünya bağlantısının bu elektronlara çıkış yolu verdiğini aşama aşama izle.',
            critical_point: 'Toprak bağlantısı çubuktan önce kesildiği için elektron eksikliği kürede kilitlenir.',
            takeaway: 'İndüksiyonda son yük indükleyen cisme zıttır; sıra sonucun parçasıdır.',
          },
          {
            id: 'electrostatic-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Nötr cisimde toplam pozitif ve negatif yük eşittir; yük yok değildir.',
              'Katılarda elektriklenmede elektronlar hareket eder; elektron kaybeden pozitif olur.',
              'Yük q=ne biçiminde kuantumludur ve kapalı sistemde toplam yük korunur.',
              'Sürtünmede zıt, dokunmada aynı işaretli yüklenme; indüksiyonda topraklamayla zıt işaret oluşur.',
              'Coulomb kuvveti |q₁q₂| ile doğru, r² ile ters orantılıdır.',
              'Etki–tepki elektriksel kuvvetleri eşit büyüklükte ve zıt yönlüdür.',
              'Elektrik alan yönü pozitif test yükünün kuvvet yönüdür; çizgiler + yükten çıkar, − yüke girer.',
              'Elektrostatik dengede iletken içinde E=0, fazla yük dış yüzeyde ve sivri uçta daha yoğundur.',
              'Elektroskop yaprak açıklığı yük varlığını gösterir; tek başına işareti belirlemez.',
            ],
          },
          {
            id: 'electrostatic-connection', type: 'connection', title: 'Sıradaki konuya köprü: elektrik devreleri',
            body: 'Elektrostatikte yüklerin ayrılması, alan oluşturması ve iletkende dengeye gelmesini gördük. Elektrik devrelerinde yükleri sürekli hareket ettiren potansiyel farkı, akımı ve enerjinin devre elemanlarında dönüşümünü inceleyeceğiz.',
            links: ['Elektrik Devreleri', 'İş, Güç ve Enerji', 'Manyetizma'],
          },
        ],
      },
    ],
  },
}

export default elektrostatik
