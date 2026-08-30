const sivilarinKaldirmaKuvveti = {
  slug: 'sivilarin-kaldirma-kuvveti',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Sıvıların Kaldırma Kuvveti' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '3. Konu',
  title: 'Sıvıların Kaldırma Kuvveti',
  subtitle: 'Yüzme–batmayı cismin ağırlığından değil, basınç farkının ürettiği kaldırma kuvveti ve özkütle karşılaştırmasından kur.',
  document: {
    version: 2,
    estimated_minutes: 65,
    prerequisites: [
      { topic: 'Madde ve Özellikleri', why: 'Özkütle, hacim ve yer değiştiren sıvı hacmi kaldırma kuvvetinin temel girdileridir.' },
      { topic: 'Kuvvet dengesi', why: 'Yüzen veya askıda kalan cismin düşey kuvvetlerini karşılaştıracağız.' },
    ],
    outcomes: [
      'Kaldırma kuvvetini sıvının alt ve üst yüzeyde oluşturduğu basınç farkıyla açıklayabileceksin.',
      'Arşimet ilkesini kullanarak taşırılan sıvı ağırlığı ile kaldırma kuvvetini ilişkilendirebileceksin.',
      'Cismin batan hacmi, sıvı özkütlesi ve yer çekimi değiştiğinde kaldırma kuvvetini yorumlayabileceksin.',
      'Yüzen, askıda kalan ve batan cisimlerde kuvvet ve özkütle ilişkilerini ayırabileceksin.',
      'Bağlı cisim, taşırma kabı, gemi ve balon gibi düzeneklerde sistem sınırını doğru seçebileceksin.',
      'ÖSYM tarzı grafik ve deney sorularında kesin çıkarım yapabileceksin.',
    ],
    sections: [
      {
        id: 'skk-sezgi',
        kind: 'opening',
        title: 'Sıvı cismi neden yukarı iter?',
        lead: 'Suya giren cisim “hafiflemiş gibi” hissedilir. Bu etki sıvının niyetinden değil, derinlikle değişen basıncın cisim yüzeylerinde oluşturduğu bileşke kuvvetten doğar.',
        blocks: [
          {
            id: 'skk-map',
            type: 'concept_map',
            title: 'Kaldırma kuvvetinin neden–sonuç zinciri',
            intro: 'Formülün her çarpanı fiziksel bir basamağa karşılık gelir.',
            nodes: [
              { id: 'basinc', label: 'Basınç derinlikle artar', detail: 'Alt yüzey üst yüzeyden daha derindedir.' },
              { id: 'fark', label: 'Basınç kuvvetleri eşit değildir', detail: 'Alt yüzeydeki yukarı kuvvet daha büyüktür.' },
              { id: 'bileske', label: 'Yukarı yönlü bileşke', detail: 'Kaldırma kuvveti oluşur.' },
              { id: 'tasirma', label: 'Yer değiştiren sıvı', detail: 'Batan hacim kadar sıvı sistemden uzaklaşır.' },
              { id: 'arsimet', label: 'Arşimet ilkesi', detail: 'Fₖ, taşırılan sıvının ağırlığına eşittir.' },
              { id: 'durum', label: 'Yüzer–askıda–batar', detail: 'Fₖ ile G ve özkütleler karşılaştırılır.' },
            ],
            links: [
              { from: 'basinc', to: 'fark', label: 'oluşturur' },
              { from: 'fark', to: 'bileske', label: 'toplanır' },
              { from: 'bileske', to: 'tasirma', label: 'hacme bağlıdır' },
              { from: 'tasirma', to: 'arsimet', label: 'ölçülebilir' },
              { from: 'arsimet', to: 'durum', label: 'karar verir' },
            ],
            caption: 'Kaldırma kuvveti ayrı bir sihirli kuvvet değil, sıvı basınç kuvvetlerinin düşey bileşkesidir.',
          },
          {
            id: 'skk-sezgi-prose',
            type: 'prose',
            body: `Durgun sıvıda basınç derinlikle artar. Sıvıya tamamen batmış yatay yüzeyli bir cismin alt yüzeyi üst yüzeyinden daha derindedir. Alt yüzeye etki eden basınç kuvveti yukarı, üst yüzeye etki eden kuvvet aşağı yönlüdür; alttaki daha büyük olduğu için net kuvvet yukarı yönlü çıkar. Yan yüzeylerdeki yatay bileşenler simetrik durumda birbirini dengeler. Bu net kuvvete **kaldırma kuvveti** denir.

Bu açıklama cismin mutlaka yukarı hareket edeceği anlamına gelmez. Cisme aynı anda aşağı yönlü ağırlık da etki eder. Kaldırma kuvveti ağırlıktan büyükse cisim yukarı ivmelenir; eşitse düşey doğrultuda denge kurulabilir; küçükse aşağı ivmelenir. “Kaldırma kuvveti var” ile “cisim yüzer” aynı yargı değildir. Batan taşta da kaldırma kuvveti vardır, yalnız ağırlığını dengelemeye yetmez.

Kuvvetin kaynağını görmek için aynı cismi daha yoğun bir sıvıya tamamen batırdığını düşün. Aynı derinlik farkında daha yoğun sıvının basınç değişimi daha büyüktür; alt–üst basınç kuvvetleri arasındaki fark ve dolayısıyla kaldırma kuvveti artar. Cismin batan hacmi büyüdüğünde sıvıyla etkileşen basınç farkının bileşkesi de büyür. Arşimet ilkesi bu geometrik sonucu çok kullanışlı bir eşitlikle ifade eder: kaldırma kuvveti, cismin yer değiştirdiği sıvının ağırlığı kadardır.

Atmosferde de benzer ilke gazlar için çalışır; sıcak hava balonu ve helyum balonu çevre havasının kaldırma etkisinden yararlanır. Bu derste odağımız sıvılar olsa da kuvvetin temel nedeni akışkan içindeki basınç farkıdır.`,
          },
          {
            id: 'skk-why',
            type: 'why',
            question: 'Tamamen batmış cisim daha derine indirilince kaldırma kuvveti neden çoğu TYT modelinde değişmez?',
            body: 'Üst ve alt yüzey basınçlarının ikisi de derinlikle artar; fakat aralarındaki farkı belirleyen cismin düşey boyutu aynı kalır. Sıvı özkütlesi, yer çekimi ve batan hacim değişmiyorsa bileşke de değişmez. Mutlak basınçlar büyür, basınç farkı aynı kalır. Sıkıştırılabilirlik veya yoğunluğun derinlikle değişmesi TYT’nin standart sıvı modelinde ihmal edilir.',
          },
          {
            id: 'skk-trap',
            type: 'trap',
            title: 'Derinlik artınca her zaman Fₖ artmaz',
            wrong: '“Daha derinde sıvı basıncı daha büyük olduğuna göre tamamen batmış cisme etki eden kaldırma kuvveti de daha büyüktür.”',
            right: 'Kaldırma kuvvetini tek bir yüzeydeki basınç değil, cismin tüm yüzeylerindeki basınç kuvvetlerinin bileşkesi belirler. Türdeş sıvıda tamamen batmış rijit cismin batan hacmi değişmiyorsa Fₖ derinliğe bağlı değildir.',
            body: 'Cisim sıkışabiliyorsa hacmi derinlikle değişebilir; bu farklı bir modeldir. Sorunun “rijit”, “türdeş sıvı” ve “tamamen batmış” koşullarını izle.',
          },
        ],
      },
      {
        id: 'skk-arsimet',
        kind: 'build',
        title: 'Arşimet ilkesi: taşan sıvının ağırlığını hesapla',
        lead: 'Cismin biçimi karmaşık olsa bile yer değiştiren sıvının hacmini bilirsen kaldırma kuvvetini bulabilirsin.',
        blocks: [
          {
            id: 'skk-atlas',
            type: 'figure',
            kind: 'fizik-kaldirma-atlas',
            width: 'full',
            title: 'Yüzen, askıda kalan ve batan cisim atlası',
            purpose: 'Aynı sıvıda üç farklı hareket sonucunu, batan hacim ve taşırılan sıvı bağlamında tek sahnede karşılaştırmak.',
            complexity: 'high',
            image_url: '/lesson-assets/fizik/kaldirma-kuvveti/arsimet-atlasi.jpg',
            image_srcset: '/lesson-assets/fizik/kaldirma-kuvveti/arsimet-atlasi-900.jpg 900w, /lesson-assets/fizik/kaldirma-kuvveti/arsimet-atlasi.jpg 1440w',
            image_sizes: '(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw',
            image_width: 1440,
            image_height: 960,
            alt: 'Şeffaf su tankında kısmen yüzen mantar blok, su içinde askıda duran kapsül, tabana batmış metal küre ve taşırma ağzından ölçü kabına akan suyu gösteren dokulu bilimsel atlas çizimi.',
            caption: 'Yüzme kararı cismin yalnız kütlesine değil, toplam hacmine göre ortalama özkütlesinin sıvıyla karşılaştırılmasına bağlıdır.',
            focus: [
              { title: 'Yüzen blok', body: 'Yalnız bir bölümü batar; yer değiştirdiği sıvının ağırlığı cismin ağırlığına eşit olduğunda denge kurulur.' },
              { title: 'Askıdaki kapsül', body: 'Tamamen batmıştır ve ortalama özkütlesi sıvıya eşittir; Fₖ=G olur.' },
              { title: 'Batan küre', body: 'Tam batmışken alabileceği kaldırma kuvveti ağırlığından küçüktür; tabana ulaştığında normal kuvvet de sisteme eklenir.' },
              { title: 'Taşırma kabı', body: 'Taşan sıvının hacmi batan hacme, ağırlığı kaldırma kuvvetine eşittir.' },
            ],
          },
          {
            id: 'skk-formula',
            type: 'formula',
            title: 'Kaldırma kuvvetinin matematiksel modeli',
            latex: 'F_k = d_s \\cdot g \\cdot V_{batan}',
            meaning: 'Kaldırma kuvveti cismin özkütlesine değil, sıvının özkütlesine ve cismin sıvı içinde kalan hacmine bağlıdır. Bu çarpım yer değiştiren sıvının ağırlığıdır.',
            variables: [
              { sym: 'Fₖ', desc: 'Kaldırma kuvveti; N' },
              { sym: 'dₛ', desc: 'Sıvının özkütlesi; kg/m³' },
              { sym: 'g', desc: 'Yer çekimi ivmesi; N/kg' },
              { sym: 'Vbatan', desc: 'Sıvı içinde kalan cismin hacmi; m³' },
            ],
          },
          {
            id: 'skk-arsimet-prose',
            type: 'prose',
            body: `Arşimet ilkesinde kritik sözcük **batan hacim**dir. Cisim tamamen sıvı içindeyse batan hacim cismin toplam dış hacmine eşittir. Cisim yüzüyorsa yalnız sıvı altında kalan bölüm hesaba girer. İçi boş gemide malzeme hacmi değil, geminin su altında kalan dış hacmi suyu yer değiştirir. Geminin çelikten yapılmasına rağmen yüzebilmesi, gövde içindeki havayla birlikte toplam ortalama özkütlesinin suyun özkütlesinden küçük tutulmasıyla ilgilidir.

Formül birim uyumu ister. $d_s$ kg/m³, $V$ m³ ve $g$ N/kg alınırsa sonuç newtondur. g/cm³ ile cm³ çarpılırsa önce taşan sıvının kütlesi gram bulunur; kuvvete geçmek için kilogram ve $g$ kullanılmalıdır. Örneğin suda tamamen batan 500 cm³ cisim 500 g, yani 0,5 kg su yer değiştirir. $g=10\,N/kg$ alınırsa kaldırma kuvveti 5 N olur.

Taşırma kabı deneyinde kap taşma düzeyine kadar doldurulur. Cisim sıvıya batırıldığında batan hacim kadar sıvı taşar. Taşan sıvının kütlesi ölçülüp ağırlığı hesaplandığında, dinamometredeki görünür ağırlık azalmasına eşit olduğu görülür. Böylece iki bağımsız ölçüm aynı ilkeyi sınar: $F_k=G_{taşan}=G-G_{görünür}$.

Sıvı karışmıyor ve katmanlıysa cisim birden fazla sıvıya girebilir. Her sıvı, içinde kalan hacim parçasına ayrı kaldırma katkısı yapar; toplam kaldırma kuvveti bu katkıların toplamıdır. Tek bir “ortalama sıvı özkütlesi” kullanmak ancak hacim payları doğru ağırlıklandırılırsa güvenlidir.`,
          },
          {
            id: 'skk-example',
            type: 'worked_example',
            title: 'Dinamometre ve taşan sıvı',
            prompt: 'Havadaki ağırlığı 12 N olan bir cisim suya tamamen batırıldığında dinamometre 7 N gösteriyor. Kaldırma kuvveti ve taşan suyun kütlesi nedir? g=10 N/kg.',
            steps: [
              { title: 'Görünür ağırlık ilişkisi', body: '$G_{görünür}=G-F_k$ olduğundan $F_k=12-7=5\,N$.' },
              { title: 'Arşimet ilkesini kullan', body: 'Taşan suyun ağırlığı da 5 N’dir.' },
              { title: 'Kütleye dönüştür', body: '$m=G/g=5/10=0{,}5\,kg$.' },
            ],
            answer: 'Kaldırma kuvveti 5 N, taşan suyun kütlesi 0,5 kg’dır.',
            takeaway: 'Dinamometredeki azalma “kaybolan ağırlık” değil, sıvının yukarı yönlü kuvvetidir.',
          },
        ],
      },
      {
        id: 'skk-lab-section',
        kind: 'practice',
        title: 'Özkütleleri değiştir, yüzme kararını gözle',
        lead: 'Aynı hacimli iki cisim farklı sonuç verebilir; aynı cisim de farklı sıvılarda yüzebilir veya batabilir.',
        blocks: [
          {
            id: 'skk-lab-prose',
            type: 'prose',
            body: `Bir cisim serbest bırakıldığında ilk hareket yönünü net kuvvet belirler. Tamamen batmış cisim için kaldırma kuvveti $d_sgV$, ağırlık $d_cgV$ olur. Ortak $gV$ çarpanı karşılaştırmadan sadeleşir: $d_c<d_s$ ise yukarı, $d_c>d_s$ ise aşağı ivmelenir; özkütleler eşitse askıda kalabilir. Bu sonuç cismin hacminden bağımsız görünür çünkü iki kuvvet de aynı hacimle büyür.

Yukarı çıkan cisim yüzeye ulaştığında batan hacmi azalmaya başlar. Kaldırma kuvveti de batan hacimle azalır. Sonunda $F_k=G$ olduğunda cisim kısmen batmış hâlde yüzer. Yüzen cismin batan hacim oranı $V_{batan}/V_{cisim}=d_c/d_s$ olur. Özkütlesi suyun yarısı olan türdeş cisim hacminin yarısı su içinde kalacak şekilde dengelenir.

Yüzen cismin üzerine yük koyarsan toplam ağırlık artar. Yeni dengede daha fazla su yer değiştirmek üzere cisim biraz daha batar. Sıvı özkütlesi büyürse aynı ağırlığı dengelemek için daha küçük batan hacim yeterli olur; geminin deniz suyunda tatlı suya göre biraz daha yukarıda yüzmesi bundandır. Cisim tamamen batana kadar yük artırılabilir; bu sınır aşıldığında kaldırma kuvvetinin maksimum değeri ağırlığı dengeleyemez ve sistem batar.

Etkileşimli modelde hacmi değiştirirken aynı özkütleyi korursan cismin kütlesi de hacimle birlikte değişir. Bu nedenle yüzme kararı aynı kalırken kuvvetlerin büyüklükleri değişir. Yüzme–batma kararını kuvvetlerin mutlak büyüklüğünden önce özkütle oranıyla okumak daha hızlı ve güvenlidir.`,
          },
          {
            id: 'skk-buoyancy-lab',
            type: 'figure',
            kind: 'fizik-kesif-laboratuvari',
            width: 'full',
            title: 'Yüzme–batma ve kaldırma kuvveti laboratuvarı',
            caption: 'Özkütle oranı hareket sonucunu, hacim ise kuvvetlerin ölçeğini belirler. Yüzen cisimde batan hacim kendini Fₖ=G olacak şekilde ayarlar.',
            purpose: 'Cisim ve sıvı özkütlesi ile hacmi değiştirerek kuvvetleri, batan hacmi ve denge durumunu gerçek zamanlı ilişkilendirmek.',
            data: { mode: 'buoyancy', title: 'Cismin sıvıdaki kaderini değiştir', initialObjectDensity: 0.72, initialLiquidDensity: 1, initialVolume: 320 },
          },
          {
            id: 'skk-lab-table',
            type: 'table',
            title: 'Serbest cismin üç durumu',
            columns: ['Durum', 'İlk özkütle karşılaştırması', 'Dengedeki kuvvet', 'Hacim durumu'],
            rows: [
              ['Yüzer', 'dᶜ < dₛ', 'Fₖ = G', 'Kısmen batmış'],
              ['Askıda kalır', 'dᶜ = dₛ', 'Fₖ = G', 'Tamamen batmış'],
              ['Batar', 'dᶜ > dₛ', 'Fₖ < G (inerken)', 'Tamamen batmış'],
              ['Tabanda dengede', 'Genellikle dᶜ > dₛ', 'N + Fₖ = G', 'Tamamen batmış'],
            ],
            caption: 'Tabana temas eden cisimde normal kuvveti unutma; artık yalnız iki kuvvetli sistem değildir.',
          },
          {
            id: 'skk-lab-quiz',
            type: 'quiz',
            question: 'Suda hacminin %60’ı batmış hâlde yüzen türdeş cismin özkütlesi kaç g/cm³’tür?',
            options: ['0,4', '0,6', '1,0', '1,6'],
            answer_index: 1,
            explanation: 'Yüzen cisim için batan hacim oranı dᶜ/dₛ’ye eşittir. Su 1 g/cm³ olduğundan dᶜ=0,60 g/cm³ olur.',
            purpose: 'application',
          },
        ],
      },
      {
        id: 'skk-bagli',
        kind: 'build',
        title: 'İp, taban ve bağlı cisimlerde kuvvet diyagramı',
        lead: 'Dış bağlantı eklendiğinde yalnız özkütle karşılaştırması yetmez; ip gerilmesi veya normal kuvvet denge denklemine girer.',
        blocks: [
          {
            id: 'skk-bagli-prose',
            type: 'prose',
            body: `Özkütlesi sıvıdan küçük bir cismi tamamen batmış tutmak için aşağı yönlü ek kuvvet gerekir. Cisim kabın tabanına iple bağlıysa sıvının kaldırma kuvveti yukarı; ağırlık ve ip gerilmesi aşağı yönlüdür. Denge koşulu $F_k=G+T$ olur. İp kesilirse gerilme ortadan kalkar, kaldırma kuvveti ağırlıktan büyük kaldığı için cisim yukarı ivmelenir.

Özkütlesi sıvıdan büyük cismi sıvı içinde askıda tutmak için tavandan ip kullanılır. Bu kez ağırlık aşağı; kaldırma kuvveti ve ip gerilmesi yukarı yönlüdür: $F_k+T=G$. Cisim tabana oturursa ip yerine tabanın normal kuvveti eklenir. Temas alanının altında sıvı bulunup bulunmaması kaldırma kuvvetinin ayrıntısını etkileyebilir; TYT’nin standart sorularında cisme kaldırma kuvveti etki ettiği açıkça kabul edilirse $N+F_k=G$ yazılır.

Bağlı iki cisimde önce her cisim için ayrı serbest cisim diyagramı çiz. İp gerilmesi ideal ipte iki uçta aynı büyüklükte, zıt yönlü etki eder. Sonra istersen iki cismi tek sistem seçerek iç kuvvet olan gerilmeyi sadeleştirebilirsin. Bu seçim, gereksiz bilinmeyen sayısını azaltır.

Kap–sıvı–cisim birlikte tartılıyorsa sistem sınırı özellikle önemlidir. Cisim dışarıdaki bir desteğe bağlıyken sıvıya batırılırsa sıvı cisme yukarı $F_k$ uygular; Newton’un üçüncü yasası gereği cisim de sıvıya aşağı $F_k$ uygular. Bu tepki kabın tartı değerini artırır. Cisim tümüyle kabın içinde ve sistemin parçasıysa toplam tartı çoğunlukla toplam ağırlığı gösterir; iç kuvvetler sistem dışından bakıldığında birbirini götürür.`,
          },
          {
            id: 'skk-bagli-process',
            type: 'process',
            title: 'Bağlı düzenek çözüm sırası',
            intro: 'Çizimi denkleme çevirmeden önce sistem sınırını sabitle.',
            steps: [
              { title: 'İncelenen cismi veya sistemi seç', body: 'Tek cisim mi, bağlı cisimler bütünü mü, kap–sıvı sistemi mi?' },
              { title: 'Temasları listele', body: 'Yer çekimi, sıvı, ip, taban ve dış destek hangi kuvvetleri uyguluyor?' },
              { title: 'Yönlü kuvvet diyagramı çiz', body: 'Fₖ yukarı, G aşağıdır; T ve N bağlantının konumuna göre eklenir.' },
              { title: 'Denge veya ivme durumunu belirle', body: 'Dengede net kuvvet sıfır; hareket ediyor olmak tek başına ivme var demek değildir.' },
              { title: 'Arşimet bağıntısını batan hacme uygula', body: 'Toplam hacmi otomatik kullanma; yalnız sıvı içindeki bölüm etkilidir.' },
            ],
          },
          {
            id: 'skk-bagli-example',
            type: 'worked_example',
            title: 'Tabana bağlı hafif cisim',
            prompt: 'Ağırlığı 3 N olan cisim suya tamamen batırıldığında 8 N kaldırma kuvveti görüyor ve tabana iple bağlı dengede duruyor. İp gerilmesi kaç N’dir?',
            steps: [
              { title: 'Yönleri yaz', body: 'Yukarı Fₖ=8 N; aşağı G=3 N ve T vardır.' },
              { title: 'Denge kur', body: '$F_k=G+T$.' },
              { title: 'Gerilmeyi bul', body: '$T=8-3=5\,N$.' },
            ],
            answer: 'İp gerilmesi 5 N’dir. İp kesildiğinde ilk anda net kuvvet 5 N yukarı olur.',
            takeaway: 'İp gerilmesinin yönünü ezberleme; ip cismi kendi doğrultusunda bağlantı noktasına doğru çeker.',
          },
          {
            id: 'skk-bagli-trap',
            type: 'trap',
            title: 'Etki–tepki kuvvetlerini aynı cisme çizme',
            wrong: '“Sıvı cisme Fₖ uyguladığı için cisim üzerinde aşağı yönlü bir tepki kuvveti daha vardır.”',
            right: 'Etki ve tepki farklı cisimlere etki eder. Sıvı cisme yukarı Fₖ, cisim sıvıya aşağı Fₖ uygular. Cismin serbest cisim diyagramında yalnız ilk kuvvet bulunur.',
            body: 'İki kuvvet eşit ve zıt olsa da aynı cisim üzerinde olmadıkları için birbirini dengelemez.',
          },
        ],
      },
      {
        id: 'skk-uygulama',
        kind: 'practice',
        title: 'Gemiden balığa: ortalama özkütleyi yönetmek',
        lead: 'Mühendislik ve canlı sistemleri çoğu zaman malzemenin özkütlesini değil, sistemin toplam hacmini değiştirerek yüzmeyi kontrol eder.',
        blocks: [
          {
            id: 'skk-uygulama-prose',
            type: 'prose',
            body: `Çelik geminin yüzmesi “çelik sudan hafiftir” diye açıklanamaz. Geminin içindeki büyük hava hacmi toplam kütleyi çok artırmadan dış hacmi büyütür. Böylece gemi–hava sisteminin ortalama özkütlesi sudan küçük olur. Yük alındığında toplam kütle ve ağırlık artar; gemi daha çok batar, daha fazla su yer değiştirir ve yeni dengede yine taşırdığı suyun ağırlığı toplam ağırlığa eşit olur. Güverte üzerindeki yük sınırı, gemi tamamen su almadan sağlayabileceği en büyük yer değiştirme hacmiyle ilgilidir.

Denizaltı balast tanklarına su alarak toplam kütlesini ve ortalama özkütlesini artırır; batmak için ağırlığın kaldırma kuvvetini aşmasını sağlar. Tanklardan suyu basınçlı havayla uzaklaştırınca ortalama özkütle azalır ve yükselir. Balıkların yüzme kesesi de gaz hacmini ayarlayarak ortalama özkütle ve denge derinliğini kontrol etmeye katkı verir.

Hidrometre, sıvı özkütlesini yüzme derinliğinden ölçer. Aynı hidrometre daha yoğun sıvıda ağırlığını dengelemek için daha az hacim batırır, dolayısıyla daha yukarıda yüzer. Ölçeğin yönünü ezberlemek yerine $d_sgV_{batan}=G$ dengesini düşün. G sabitken $d_s$ büyürse gereken $V_{batan}$ küçülür.

Buzun suda yüzmesi de aynı ilkeye uyar. Buz eridiğinde, yüzerken yer değiştirdiği suyun kütlesi zaten buzun kütlesine eşittir. Eriyen buz aynı kütlede suya dönüştüğü için ideal durumda kaptaki su seviyesi değişmez. Ancak buz başka yoğunlukta sıvıda yüzüyor, içinde taş bulunuyor veya su üstünde ek cisim taşıyorsa sonuç ayrıca incelenmelidir.`,
          },
          {
            id: 'skk-application-table',
            type: 'table',
            title: 'Yüzmeyi kontrol eden sistemler',
            columns: ['Sistem', 'Değiştirilen', 'Fiziksel sonuç'],
            rows: [
              ['Gemi yük alır', 'Toplam kütle artar', 'Daha fazla batar, daha çok su taşırır'],
              ['Denizaltı balast tankı', 'Toplam kütle/ortalama özkütle', 'Batar, askıda kalır veya yükselir'],
              ['Hidrometre farklı sıvıda', 'Sıvı özkütlesi', 'Yoğun sıvıda daha az batar'],
              ['Balığın yüzme kesesi', 'Toplam hacim/ortalama özkütle', 'Denge derinliği değişir'],
            ],
            caption: 'Tek tek malzemelere değil, seçilen tüm sistemin toplam kütle ve dış hacmine bak.',
          },
          {
            id: 'skk-ice-check',
            type: 'checkpoint',
            prompt: 'Su dolu kapta serbestçe yüzen saf buz tamamen eridiğinde su seviyesi neden değişmez?',
            hint: 'Buz yüzerken kaç kütlelik suyu yer değiştiriyordu; eriyince kaç kütle suya dönüşür?',
            answer: 'Yüzerken buzun ağırlığı, yer değiştirdiği suyun ağırlığına eşittir. Bu nedenle yer değiştirdiği su kütlesi buzun kütlesidir. Eriyen buz aynı kütlede su oluşturur ve tam olarak daha önce yer değiştirdiği hacmi doldurur.',
          },
          {
            id: 'skk-application-exam',
            type: 'exam',
            title: 'ÖSYM günlük yaşam sorusunda ne arar?',
            body: 'Geminin daha çok batması, hidrometrenin daha yukarı çıkması veya buzun erimesi anlatıldığında formülü doğrudan vermeyebilir. Sistem kütlesi, sıvı özkütlesi ve yer değiştiren hacimden hangisinin değiştiğini belirlemeni bekler.',
            patterns: ['Ortalama özkütle', 'Yüzen cisim dengesi', 'Batan hacim oranı', 'Sistem sınırı', 'Taşan sıvı ağırlığı'],
          },
        ],
      },
      {
        id: 'skk-kapanis',
        kind: 'close',
        title: 'ÖSYM sentezi: kuvveti gör, hacmi seç, sistemi sınırla',
        lead: 'Her kaldırma kuvveti sorusunu üç kararla çözebilirsin: hangi hacim batmış, hangi sıvı etkiliyor, cisme başka hangi kuvvetler uygulanıyor?',
        blocks: [
          {
            id: 'skk-close-prose',
            type: 'prose',
            body: `Çözüme cismin yüzme durumunu ezberleyerek değil, serbest cisim diyagramıyla başla. Ağırlık aşağı, kaldırma kuvveti yukarıdır. İp, taban veya dış destek varsa ek kuvveti göster. Ardından Arşimet ilkesinde doğru hacmi seç: yüzende yalnız batan bölüm, tamamen batanda dış hacmin tamamı, birden çok sıvıda her katmanda kalan ayrı hacim.

Kaldırma kuvvetini artırmanın üç temel yolu vardır: sıvı özkütlesini artırmak, batan hacmi artırmak veya yer çekimi ivmesini artırmak. Cismi daha derine indirmek, türdeş ve sıkıştırılamaz sıvı modelinde tam batmış cismin kaldırma kuvvetini değiştirmez. Cismin kendi özkütlesi formülde doğrudan bulunmaz; ama ağırlığını ve serbest bırakıldığında hangi yönde hareket edeceğini belirlediği için karşılaştırmada önemlidir.

Grafik sorularında tamamen batmış sabit hacimli cisim için $F_k$–$d_s$ ve $F_k$–$V_{batan}$ ilişkileri orijinden geçen doğrulardır. Yüzen cisimde ise sıvı özkütlesi değişse bile dengede $F_k=G$ sabit kalabilir; değişen batan hacimdir. Aynı değişkenin farklı fiziksel koşullarda farklı grafik üretmesi, sorunun en önemli ayrıntısıdır.

Tartı sorusunda sistem sınırını çiz. Dışarıdan tutulan cisim sıvıya batırılırken kabın tartısı cismin sıvıya uyguladığı aşağı tepki kadar artar. Cisim kaba bağlıysa tüm sistemin toplam dış kuvvetlerini düşün. İç etki–tepki çiftlerini ikinci kez toplama. Bu düşünme biçimi sonraki basınç, hareket ve enerji konularında da aynı şekilde çalışacaktır.`,
          },
          {
            id: 'skk-osym',
            type: 'osym_simulation',
            title: 'Final kontrolü: yüzen cismi yoğun sıvıya aktar',
            passage: 'Türdeş K cismi su üzerinde hacminin %80’i batmış hâlde dengededir. Cisim, özkütlesi sudan daha büyük olan ve K ile tepkimeye girmeyen başka bir sıvıya bırakılıyor; yine serbestçe yüzüyor.',
            question: 'Yeni denge için aşağıdaki ifadelerden hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Kaldırma kuvveti artar.', explanation: 'Her iki dengede de kaldırma kuvveti cismin değişmeyen ağırlığına eşittir.' },
              { text: 'Cismin özkütlesi azalır.', explanation: 'Cisim ve koşulları değişmediği için özkütlesi değişmez.' },
              { text: 'Batan hacim oranı azalır.', explanation: 'Daha yoğun sıvıda aynı ağırlığı dengelemek için daha az hacmin batması yeterlidir.' },
              { text: 'Cismin ağırlığı azalır.', explanation: 'Kütle ve yer çekimi değişmediğinden ağırlık aynıdır.' },
              { text: 'Taşırılan sıvı hacmi artar.', explanation: 'Batan hacim azaldığı için taşırılan hacim de azalır; taşırılan sıvının ağırlığı yine cismin ağırlığıdır.' },
            ],
            answer_index: 2,
            stem_analysis: '“Yine yüzüyor” ifadesi iki durumda da $F_k=G$ olduğunu sabitler; sıvı özkütlesi artınca batan hacim azalmalıdır.',
            critical_point: 'Kaldırma kuvveti ile batan hacmi aynı şey sanma. Yüzme dengesinde kuvvet sabit kalırken hacim değişebilir.',
            takeaway: 'Önce denge koşulunu sabitle, sonra Arşimet bağıntısında hangi çarpanın uyum sağladığını bul.',
          },
          {
            id: 'skk-summary',
            type: 'summary',
            title: 'Kesin bilmen gerekenler',
            points: [
              'Kaldırma kuvveti, akışkan basınç kuvvetlerinin yukarı yönlü bileşkesidir.',
              'Fₖ=dₛgVbatan ve Fₖ taşırılan sıvının ağırlığına eşittir.',
              'Tam batmış rijit cisimde türdeş sıvı içinde Fₖ derinliğe bağlı değildir.',
              'Yüzen ve askıda kalan serbest cisimde dengede Fₖ=G’dir.',
              'Yüzen cisimde Vbatan/Vcisim=dᶜ/dₛ oranı kullanılır.',
              'Batan cisimde de kaldırma kuvveti vardır; yalnız ağırlıktan küçüktür.',
              'Taban, ip veya dış destek varsa normal ya da gerilme kuvveti denkleme eklenir.',
              'Gemiler malzeme özkütlesini değil sistemin ortalama özkütlesini ve yer değiştirme hacmini yönetir.',
              'Daha yoğun sıvıda aynı yüzen cisim daha az hacimle batar; Fₖ yine ağırlığa eşittir.',
            ],
          },
          {
            id: 'skk-connection',
            type: 'connection',
            title: 'Sıradaki konuya köprü: basınç',
            body: 'Kaldırma kuvvetinin kaynağını “alt yüzeyde daha büyük basınç” diye kurduk. Sıradaki konuda katı, sıvı ve gaz basıncını; Pascal prensibini ve açık hava basıncını ayrı sistemlerde inceleyerek bu mekanizmanın temelini daha ayrıntılı göreceksin.',
            links: ['Basınç', 'Hareket ve Kuvvet', 'İş, Güç ve Enerji'],
          },
        ],
      },
    ],
  },
}

export default sivilarinKaldirmaKuvveti
