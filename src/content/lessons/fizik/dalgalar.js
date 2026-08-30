const dalgalar = {
  slug: 'dalgalar',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'Dalgalar' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '11. Konu',
  title: 'Dalgalar',
  subtitle: 'Titreşimin taşıdığı enerjiyi izle; dalga boyu, frekans ve hızdan yansıma, kırılma, ses ve depreme tek modelle ulaş.',
  document: {
    version: 2,
    estimated_minutes: 102,
    prerequisites: [
      { topic: 'Hareket ve Kuvvet', why: 'Titreşim, denge konumu, hız ve enerji aktarımı kavramlarını kullanacağız.' },
      { topic: 'Oran ve grafik', why: 'v=λf ve T=1/f ilişkilerini grafik ve oranlarla yorumlayacağız.' },
      { topic: 'Manyetizma', why: 'Hoparlörün titreşimi ses dalgasına geçiş için somut bir başlangıç oluşturur.' },
    ],
    outcomes: [
      'Dalganın madde değil enerji taşıdığını ortam parçacıklarının hareketiyle açıklayabileceksin.',
      'Genlik, dalga boyu, periyot, frekans ve hız büyüklüklerini ayırt edip v=λf bağıntısını kullanabileceksin.',
      'Enine ve boyuna dalgaları titreşim-yayılma yönlerine göre sınıflandırabileceksin.',
      'Yay atmalarının sabit ve serbest uçtan yansımasını, girişim ve süperpozisyonu yorumlayabileceksin.',
      'Su dalgalarında yansıma, kırılma ve kırınım olaylarını dalga cepheleriyle çözebileceksin.',
      'Sesin frekans, genlik, hız ve rezonans özellikleriyle P-S deprem dalgalarını açıklayabileceksin.',
    ],
    sections: [
      {
        id: 'waves-opening', kind: 'opening', title: 'İlerleyen madde değil, titreşim ve enerjidir',
        lead: 'Stadyumdaki seyirci dalgası tribün boyunca ilerlerken insanlar yer değiştirmez; dalga hareketinin özü de bu ayrımdır.',
        blocks: [
          {
            id: 'waves-opening-prose', type: 'prose',
            body: `Bir ipin ucunu bir kez yukarı-aşağı hareket ettirdiğinde oluşan şekil ip boyunca ilerler; fakat ipin her küçük bölümü yalnız kendi denge konumu çevresinde kısa süreli hareket eder. Su yüzeyindeki yaprak dalga geçerken yukarı-aşağı salınır, dalgayla birlikte kıyıya kadar sürüklenmez. **Dalga**, bir titreşimin ve enerjinin uzayda yayılmasıdır; net madde taşınması değildir.

Tek bir sarsıntının oluşturduğu kısa bozulmaya **atma**, düzenli aralıklarla yinelenen bozulmaya periyodik dalga denir. Dalga kaynağı enerji verir, ortamın komşu parçacıkları birbirini etkileyerek bu enerjiyi ileri aktarır. Mekanik dalgaların ilerlemesi için madde ortamı gerekir. Yay dalgası yayda, su dalgası su yüzeyinde, ses katı-sıvı-gaz ortamlarda yayılabilir; boşlukta mekanik dalga yayılmaz.

Elektromanyetik dalgalar ise mekanik ortam gerektirmez ve boşlukta da ilerleyebilir. Işık bu gruptadır; optik konusunda ayrıntılı incelenecektir. “Bütün dalgalar ortam ister” ve “bütün dalgalar boşlukta yayılır” ifadelerinin ikisi de yanlıştır. Önce dalganın mekanik mi elektromanyetik mi olduğunu belirlemek gerekir.

Bir dalga sorusunu çözerken üç katman kur: **kaynak** frekansı belirler, **ortam** yayılma hızını belirler, hız ve frekans birlikte **dalga boyunu** belirler. Genlik ise denge konumundan en büyük uzaklık olup kaynağın verdiği enerjiyle ilişkilidir. Bu ayrım kurulduğunda “ortam değişince hangi büyüklük değişir?” soruları ezberden çıkar ve v=λf bağıntısıyla tutarlı hâle gelir.`,
          },
          {
            id: 'waves-why', type: 'why',
            question: 'Dalga enerji taşıdığı hâlde ortamın maddesini neden birlikte götürmez?',
            body: 'Ortam parçacıkları komşularına etki ederek enerjiyi aktarır, sonra denge konumları çevresinde kalır. Bir parçacığın uzun mesafe gitmesi gerekmez; stadyum dalgasında her seyircinin oturup kalkmasına rağmen desenin tribünde ilerlemesi gibi.',
          },
          {
            id: 'waves-map', type: 'concept_map', title: 'Kaynak–ortam–dalga zinciri',
            intro: 'Değişkenleri kimin belirlediğini baştan ayır.',
            nodes: [
              { id: 'source', label: 'Kaynak', detail: 'Titreşimi ve frekansı belirler' },
              { id: 'medium', label: 'Ortam', detail: 'Dalga hızını belirler' },
              { id: 'frequency', label: 'Frekans f', detail: 'Saniyedeki titreşim' },
              { id: 'speed', label: 'Hız v', detail: 'Bozulmanın ilerleme hızı' },
              { id: 'wavelength', label: 'Dalga boyu λ', detail: 'Aynı fazlı iki nokta arası' },
              { id: 'energy', label: 'Enerji', detail: 'Genlikle artar' },
            ],
            links: [
              { from: 'source', to: 'frequency', label: 'belirler' },
              { from: 'medium', to: 'speed', label: 'belirler' },
              { from: 'frequency', to: 'wavelength', label: 'v sabitse ters' },
              { from: 'speed', to: 'wavelength', label: 'f sabitse doğru' },
              { from: 'source', to: 'energy', label: 'aktarır' },
            ],
            caption: 'Bir dalga başka ortama geçerken kaynak değişmiyorsa frekans sabit kalır; hız ve dalga boyu birlikte değişir.',
          },
        ],
      },
      {
        id: 'waves-atlas-section', kind: 'build', title: 'Dalga anatomisinden depreme bilimsel atlas',
        lead: 'Dalga kavramını tek bir sinüs çizgisine indirgemeden; kaynak, ortam, sınır ve gözlenen etki katmanlarında oku.',
        blocks: [
          {
            id: 'waves-atlas', type: 'figure', kind: 'fizik-dalgalar-atlas', width: 'full', complexity: 'high',
            title: 'Dalgaların dört gözlem katmanı',
            purpose: 'Dalga büyüklükleri, yay atmalarında yansıma-girişim, su dalgası olayları ile ses-deprem dalgalarını ayrı detay levhalarında birleştirmek.',
            caption: 'Kaynağın titreşimi ortamda dalga oluşturur; sınır koşulu yansımayı, ortam değişimi kırılmayı, açıklık kırınımı ve frekans-genlik ses algısını belirler.',
            focus: [
              { title: 'Dalga anatomisi', body: 'Enine-boyuna ayrımını, A, λ, T, f ve v büyüklüklerini aynı çizimde oku.' },
              { title: 'Yay atmaları', body: 'Sabit-serbest uç yansımalarını ve geçici süperpozisyonu önce-çakışma-sonra izle.' },
              { title: 'Su dalgaları', body: 'Yansıma, derinden sığa kırılma ve açıklıktan kırınımı dalga cepheleriyle karşılaştır.' },
              { title: 'Ses ve deprem', body: 'Sesin sıkışma-genleşmesini, frekans-genlik etkisini, rezonansı ve P-S dalgalarını incele.' },
            ],
          },
          {
            id: 'waves-atlas-compare', type: 'compare', title: 'Dalga büyüklüklerini birbirine karıştırma',
            columns: ['Genlik A', 'Dalga boyu λ', 'Frekans f', 'Hız v'],
            rows: [
              { label: 'Tanım', values: ['En büyük uzanım', 'Aynı fazlı ardışık noktalar arası', 'Saniyedeki titreşim', 'Desenin ilerleme hızı'] },
              { label: 'Belirleyen', values: ['Kaynağın enerjisi', 'v/f oranı', 'Kaynağın titreşimi', 'Ortamın özellikleri'] },
              { label: 'Birim', values: ['m', 'm', 'Hz = 1/s', 'm/s'] },
              { label: 'Ortam değişince', values: ['İdeal geçişte ayrı değerlendirilir', 'Genellikle değişir', 'Kaynak aynıysa değişmez', 'Değişebilir'] },
            ],
            insight: 'Bir şeklin yatayda sıklaşması frekansın kesin arttığını tek başına göstermez; önce hızın ve ortamın değişip değişmediğini sor.',
          },
          {
            id: 'waves-atlas-reading', type: 'prose',
            body: `Atlasın ilk odağında enine dalga çizgisi, ortam parçacığının gerçek yolu gibi değil, aynı andaki uzanımların konuma göre fotoğrafı olarak okunmalıdır. İkinci odakta sınır koşulu yansıyan atmanın yönünü belirler. Üçüncü odakta dalga cephesi aralıkları dalga boyunu, cepheye dik oklar yayılma yönünü verir. Son odakta ise aynı dalga dili havadaki basınç değişimlerine ve yer kabuğundaki sismik titreşimlere uygulanır.

Her numaralı odağın açtığı görsel bağımsız ve yüksek çözünürlüklüdür. Ana atlas genel ilişkiyi kurarken detay levhası formül, yön oku ve özel durumları büyütür. Böylece yakınlaştırma yalnız resmin aynı piksellerini büyütmez; konuya özgü yeni açıklama katmanı açar.`,
          },
        ],
      },
      {
        id: 'wave-quantities', kind: 'deep-dive', title: 'Genlik, dalga boyu, periyot, frekans ve hız',
        lead: 'Bir dalgayı ölçmek için dikey uzanımı, yatay tekrarı ve zamansal tekrarı ayrı eksenlerde düşün.',
        blocks: [
          {
            id: 'wave-quantities-prose', type: 'prose',
            body: `**Genlik A**, bir ortam noktasının denge konumundan en büyük uzaklığıdır. Tepe ile denge arası A, tepe ile çukur arası 2A’dır. Genlik büyüdükçe kaynağın dalgaya aktardığı enerji genellikle artar. Ancak temel ideal modelde genliğin büyümesi frekansı, periyodu ya da ortamın belirlediği dalga hızını değiştirmez.

**Dalga boyu λ**, aynı fazda titreşen ardışık iki nokta arasındaki en kısa uzaklıktır. İki tepe, iki çukur ya da boyuna dalgada iki sıkışma arası bir λ’dır. Tepe-ardışık çukur arası λ/2, denge konumundan en yakın tepeye yatay uzaklık λ/4’tür. Düşey uzaklığı dalga boyu sanma; λ yayılma doğrultusunda ölçülür.

**Periyot T**, bir ortam noktasının bir tam titreşimi tamamlaması için geçen süre; **frekans f**, bir saniyedeki titreşim sayısıdır. T=1/f bağıntısıyla ters orantılıdırlar. Kaynak 5 Hz ile titreşiyorsa saniyede 5 tam titreşim üretir ve her titreşim 0,2 s sürer. Dalganın farklı noktaları aynı frekansta fakat farklı fazlarda titreşebilir.

Bir periyot süresinde dalga deseni bir dalga boyu ilerler. Bu nedenle v=λ/T=λf olur. Aynı ortamda hız sabitse frekans artınca dalga boyu azalır. Ortam değişirken kaynak aynı kalırsa f sabit, v değişir ve λ aynı oranda değişir. Bağıntı yalnız işlem aracı değil değişkenlerin sorumluluk haritasıdır.

Enine dalgada parçacıkların titreşim doğrultusu yayılma yönüne diktir; ip dalgası ve elektromanyetik dalga örnektir. Boyuna dalgada titreşim yayılmaya paraleldir; yaydaki sıkışma-genleşme ve havadaki ses buna örnektir. Su yüzeyi dalgalarında parçacık hareketi daha karmaşıktır; basitçe yalnız enine demek her durumda eksik kalır.`,
          },
          {
            id: 'wave-formula', type: 'formula', title: 'Temel dalga bağıntıları',
            latex: 'T=\frac{1}{f}\qquad v=\lambda f=\frac{\lambda}{T}',
            meaning: 'Frekans ve periyot ters; dalga hızı dalga boyu ile frekansın çarpımına eşittir.',
            variables: [
              { sym: 'T', desc: 'Periyot; s' }, { sym: 'f', desc: 'Frekans; Hz' },
              { sym: 'v', desc: 'Dalga hızı; m/s' }, { sym: 'λ', desc: 'Dalga boyu; m' },
            ],
          },
          {
            id: 'wave-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Kaynak–ortam–dalga laboratuvarı',
            caption: 'Frekans, ortam hızı ve genliği ayrı ayrı değiştir; dalga boyu ve periyot okumalarının hangi nedenle değiştiğini gerçek zamanlı gör.',
            purpose: 'v=λf bağıntısında kaynak ve ortam değişkenlerini ayırmak, genliğin hız ve dalga boyundan bağımsızlığını görünür kılmak.',
            data: { mode: 'wave', title: 'Frekansı kaynak, hızı ortam belirlesin', initialSpeed: 12, initialFrequency: 2, initialAmplitude: 1 },
          },
          {
            id: 'wave-example', type: 'worked_example', title: 'Frekans iki katına çıkarsa',
            problem: 'Hızı 18 m/s olan bir ortamdaki dalganın frekansı 3 Hz’dir. Aynı ortamda kaynak frekansı 6 Hz yapılırsa dalga boyları nasıl değişir?',
            steps: [
              { title: 'İlk dalga boyu', body: 'λ₁=v/f₁=18/3=6 m.' },
              { title: 'Hızı koru', body: 'Ortam değişmediği için dalga hızı 18 m/s kalır.' },
              { title: 'Yeni dalga boyu', body: 'λ₂=18/6=3 m; frekans iki katına çıkınca dalga boyu yarıya iner.' },
            ],
            result: 'İlk dalga boyu 6 m, yeni dalga boyu 3 m’dir; genlik hakkında bilgi verilmediği için enerji karşılaştırılmaz.',
          },
          {
            id: 'wave-graph-trap', type: 'trap', title: 'Sinüs eğrisini parçacığın yolu sanma',
            wrong: '“Dalga ilerlerken her parçacık sinüs biçimli uzun bir yol izler.”',
            right: 'Grafik, farklı konumlardaki parçacıkların aynı andaki uzanımlarını gösterir; her parçacık kendi denge noktası çevresinde titreşir.',
            body: 'Yatay eksen dalganın yayılma konumu, düşey eksen parçacığın o andaki uzanımıdır.',
          },
        ],
      },
      {
        id: 'rope-pulses', kind: 'deep-dive', title: 'Yay atmalarında yansıma ve süperpozisyon',
        lead: 'Yansıyan atmanın ters ya da düz olması, sınırın hareket edip edememesine bağlıdır.',
        blocks: [
          {
            id: 'rope-pulses-prose', type: 'prose',
            body: `Bir atma sabitlenmiş uca ulaştığında uç hareket edemez. İpin ucu desteğe kuvvet uygular, destek de ipe zıt yönde tepki verir; atma baş aşağı dönmüş olarak yansır. Yukarı yönlü bir atma sabit uçtan aşağı yönlü döner. Yayılma yönü de tersine döndüğü için atmanın hız vektörü değişir; aynı ipte sürat büyüklüğü ideal modelde korunur.

Serbest uçta halka ya da hareket edebilen bağlantı yukarı-aşağı yer değiştirebilir. Atma uçtan **ters dönmeden**, yani yukarı yönlü geldiyse yukarı yönlü yansır. “Duvara çarptığı için her atma ters döner” genellemesi yanlıştır; sınırın sabit mi serbest mi olduğunu oku. Gerçek sistemlerde enerji kaybı nedeniyle yansıyan genlik azalabilir, temel sorularda ideal sınır kabul edilir.

İki atma aynı anda aynı noktaya geldiğinde **süperpozisyon ilkesi** uygulanır: her noktadaki bileşke uzanım, atmaların o noktadaki uzanımlarının cebirsel toplamıdır. İki yukarı atma çakışırsa yapıcı girişimle daha büyük yukarı uzanım; biri yukarı biri aşağıysa yıkıcı girişimle daha küçük, hatta eş genliklerde anlık sıfır uzanım oluşabilir.

Tam yıkıcı girişimde ipin bir an düz görünmesi enerjinin yok olduğu anlamına gelmez. Atmalar karşılaşma sonrasında ideal ortamda özgün biçim ve yönleriyle yollarına devam eder. Çakışma geçicidir. Girişim hesabında “tepe mi çukur mu?” yerine denge üstünü pozitif, altını negatif seçip cebirsel toplama yapmak güvenlidir.

Farklı kalınlıktaki iplerin sınırında hem yansıma hem iletim olabilir. İnce ipten kalın ipe giden atmanın yansıyan bölümü sabit uca benzer biçimde ters; kalından inceye gidenin yansıyan bölümü serbest uca benzer biçimde düz olabilir. İletilen atma diğer ortamda farklı hız ve genişlikle ilerleyebilir; sınırda frekans kaynak tarafından korunur.`,
          },
          {
            id: 'reflection-compare', type: 'compare', title: 'Sınır koşulunu oku',
            columns: ['Sabit uç', 'Serbest uç', 'İnceden kalına', 'Kalından inceye'],
            rows: [
              { label: 'Yansıyan atma', values: ['Ters', 'Düz', 'Ters', 'Düz'] },
              { label: 'Yayılma yönü', values: ['Geri', 'Geri', 'Geri', 'Geri'] },
              { label: 'İletilen atma', values: ['Yok', 'Yok', 'Kalın ortamda', 'İnce ortamda'] },
            ],
            insight: '“Ters” atmanın denge eksenine göre işaret değişimini, “geri” ise yatay yayılma yönünün değişmesini anlatır.',
          },
          {
            id: 'pulse-example', type: 'worked_example', title: 'Çakışma anında uzanım',
            problem: 'Sağa giden +4 cm genlikli atma ile sola giden −3 cm genlikli atma aynı noktada tam çakışıyor. Bileşke uzanım ve çakışma sonrası ne olur?',
            steps: [
              { title: 'İşaretli topla', body: 'y=+4+(−3)=+1 cm.' },
              { title: 'Anlık şekli söyle', body: 'Çakışma anında 1 cm yukarı uzanım görülür; yıkıcı girişimdir.' },
              { title: 'Sonrasını ayır', body: 'İdeal ipte atmalar birbirini tüketmez; özgün genlikleriyle yollarına devam eder.' },
            ],
            result: 'Bileşke anlık +1 cm’dir; sonrasında +4 cm sağa, −3 cm sola ilerlemeyi sürdürür.',
          },
          {
            id: 'interference-trap', type: 'trap', title: 'Yıkıcı girişimde enerjiyi yok etme',
            wrong: '“İki eş ve zıt atma çakışınca tamamen yok olur.”',
            right: 'İp bir an düz olabilir; atmalar çakışmadan sonra yollarına devam eder.',
            body: 'Süperpozisyon, yalnız çakışma anındaki toplam uzanımı verir; atmaların kimliğini kalıcı olarak silmez.',
          },
        ],
      },
      {
        id: 'water-waves', kind: 'deep-dive', title: 'Su dalgalarında yansıma, kırılma ve kırınım',
        lead: 'Dalga cephelerinin aralığı dalga boyunu, cephelere dik çizgi yayılma yönünü gösterir.',
        blocks: [
          {
            id: 'water-waves-prose', type: 'prose',
            body: `Doğrusal su dalgaları düz engele çarptığında yansır. Engele dik çizilen normale göre gelme açısı yansıma açısına eşittir. Açılar engel yüzeyiyle değil normalle ölçülür. Kaynak ve ortam değişmediği için yansıyan dalganın sürati, frekansı ve dalga boyu ideal durumda gelen dalgayla aynıdır; yalnız yayılma yönü değişir.

Su dalgası derin ortamdan sığ ortama geçerken hızı azalır. Kaynak aynı kaldığı için sınırda frekans değişmez. v=λf gereği hız azaldığında dalga boyu da azalır; dalga cepheleri sığ bölgede birbirine yaklaşır. Sınıra eğik geliyorsa yavaş ortama geçerken yayılma yönü normale yaklaşır. Sığdan derine geçişte hız ve dalga boyu artar, yön normalden uzaklaşır.

Dalga sınıra dik gelirse hız ve dalga boyu değişse de yön değişmez. Bu da kırılmanın “her zaman yön değiştirme” değil, farklı ortamda hız değişimi olayı olduğunu gösterir. Yön değişimi yalnız eğik geçişte görünür. Işık kırılmasında da benzer geometri kullanılacak, fakat hangi ortamda hızın büyük olduğu dalga türüne göre değerlendirilir.

Bir dalga dar aralıktan geçtiğinde ya da engelin kenarına ulaştığında geometrik gölge bölgesine yayılabilir; bu olaya **kırınım** denir. Aralık genişliği dalga boyuna yaklaştıkça veya ondan küçük oldukça yayılma belirginleşir. Aynı aralıkta dalga boyu büyütülürse kırınım artar. Çok geniş açıklıkta cepheler büyük ölçüde doğrusal kalır.

Yansıma dalganın geldiği ortama dönmesi, kırılma yeni ortamda hız ve dalga boyunun değişmesi, kırınım ise açıklık ya da kenar çevresinde yayılmasıdır. Bir düzende birden fazla olay aynı anda görülebilir. Soruda hangi kanıtın verildiğine bak: geri dönen cephe yansıma, sınır sonrası aralık değişimi kırılma, gölge bölgesine bükülme kırınımdır.`,
          },
          {
            id: 'water-table', type: 'table', title: 'Üç su dalgası olayını ayır',
            columns: ['Olay', 'Temel neden', 'Değişen', 'Korunan'],
            rows: [
              ['Yansıma', 'Engel / sınır', 'Yayılma yönü', 'Aynı ortamda v, f, λ'],
              ['Kırılma', 'Derinlik ve hız değişimi', 'v, λ; eğikse yön', 'Kaynak frekansı f'],
              ['Kırınım', 'Açıklık veya kenar', 'Cephe biçimi / yayılma alanı', 'Aynı ortamda f ve v'],
            ],
            caption: 'Ortam ve kaynak değişkenlerini ayırmak, hangi büyüklüğün sabit kaldığını belirler.',
          },
          {
            id: 'water-example', type: 'worked_example', title: 'Derinden sığa geçen dalga',
            problem: 'Derin suda hızı 30 cm/s, dalga boyu 6 cm olan periyodik dalga sığ bölgede 20 cm/s hızla ilerliyor. Frekans ve sığ sudaki dalga boyu nedir?',
            steps: [
              { title: 'Kaynak frekansını bul', body: 'f=v/λ=30/6=5 Hz.' },
              { title: 'Sınırda frekansı koru', body: 'Kaynak değişmediği için sığ bölgede de f=5 Hz.' },
              { title: 'Yeni dalga boyu', body: 'λsığ=v/f=20/5=4 cm.' },
            ],
            result: 'Frekans 5 Hz olarak kalır, dalga boyu 6 cm’den 4 cm’ye azalır.',
          },
          {
            id: 'water-trap', type: 'trap', title: 'Kırılmada frekansı değiştirme',
            wrong: '“Dalga sığ suda yavaşladığı için saniyede daha az tepe gelir; frekans azalır.”',
            right: 'Sınırı aşan her tepe süreklilikle izlenir; kaynak değişmediği için frekans sabittir, dalga boyu azalır.',
            body: 'Ortam hızı, kaynak frekansı belirler; yeni λ değeri v/f oranına uyum sağlar.',
          },
        ],
      },
      {
        id: 'sound-earthquake', kind: 'application', title: 'Ses, rezonans ve deprem dalgaları',
        lead: 'Havadaki basınç değişiminden Dünya’nın iç yapısını gösteren sismik kayıtlara kadar aynı dalga büyüklükleri çalışır.',
        blocks: [
          {
            id: 'sound-earthquake-prose', type: 'prose',
            body: `Ses, maddesel ortamın parçacıklarında oluşan mekanik titreşimlerin yayılmasıdır. Havada sıkışma ve genleşme bölgeleri ilerlediği için ses boyuna dalgadır. Ses boşlukta yayılmaz; uzay filmlerindeki dış patlama sesi fiziksel olarak gerçekçi değildir. Katı, sıvı ve gazlarda yayılabilir; hızı ortamın esnekliği, yoğunluğu ve sıcaklığına bağlıdır. Genel olarak ses katılarda gazlardan daha hızlıdır, fakat her karşılaştırmada ortam koşulları belirtilmelidir.

Sesin **frekansı** algılanan incelik-kalınlıkla ilişkilidir. Yüksek frekans ince, düşük frekans kalın ses verir. Frekans kaynağa aittir; ses başka ortama geçince değişmez, hız ve dalga boyu değişir. **Genlik** ve dalga enerjisi ses şiddetiyle ilişkilidir; büyük genlik genellikle daha gür algılanır. Gürlük ayrıca kulağın duyarlılığına ve frekansa bağlı öznel bir algıdır, şiddet ise fiziksel büyüklüktür.

Tını, aynı temel frekans ve benzer şiddetteki iki ses kaynağını ayırt etmemizi sağlayan dalga biçimi ve harmonik bileşim özelliğidir. Keman ile flüt aynı notayı çalsa bile üst frekans bileşenleri farklı olduğu için farklı duyulur. Yankı, sesin bir yüzeyden yansıyıp yeterli zaman farkıyla yeniden duyulmasıdır. Akustik tasarımda yansıma, soğurulma ve girişim birlikte yönetilir.

Bir sisteme doğal frekansına eşit ya da yakın frekansta periyodik etki uygulanırsa genliği belirgin artabilir; bu **rezonans**tır. İki özdeş diyapazondan biri titreştirildiğinde diğeri de ses verebilir. Rezonans müzik aletlerinde sesi güçlendirebilir, yapılarda ise kontrol edilmezse tehlikeli büyük salınımlara yol açabilir. “Rezonans her zaman yıkar” değil, doğru yönetildiğinde yararlı veya riskli olabilen enerji aktarımıdır.

Deprem odağında açığa çıkan enerji yer içinde sismik dalgalar üretir. P dalgaları boyuna, en hızlı dalgalardır ve katı-sıvı ortamlardan geçebilir. S dalgaları enine, daha yavaştır ve sıvılarda yayılamaz. İstasyonlara varış zamanları arasındaki fark merkez üssü uzaklığını belirlemede kullanılır; farklı yönlerden kayıtlar birleştirilerek konum bulunur. S dalgalarının Dünya’nın dış çekirdeğinden geçmemesi, bu katmanın sıvı olduğuna önemli kanıttır.`,
          },
          {
            id: 'sound-compare', type: 'compare', title: 'Ses özelliğinden fiziksel büyüklüğe',
            columns: ['İncelik / perde', 'Şiddet', 'Tını', 'Yayılma hızı'],
            rows: [
              { label: 'Temel etken', values: ['Frekans', 'Genlik ve enerji', 'Dalga biçimi / harmonikler', 'Ortam özellikleri'] },
              { label: 'Kaynak değişince', values: ['Değişebilir', 'Değişebilir', 'Kaynak türüyle değişir', 'Ortam aynıysa değişmez'] },
              { label: 'Ortam değişince', values: ['Frekans korunur', 'Kayıplarla değişebilir', 'Soğurulmayla değişebilir', 'Değişir'] },
            ],
            insight: 'Frekans “sesin hızı” değildir; aynı ortamda ince ve kalın ses ideal modelde aynı hızla yayılır.',
          },
          {
            id: 'seismic-why', type: 'why',
            question: 'S dalgalarının belirli bölgelere ulaşmaması Dünya’nın iç yapısı hakkında nasıl bilgi verir?',
            body: 'S dalgaları kayma biçiminde enine titreşim gerektirir ve sıvılar bu kayma gerilimini taşıyamaz. S-dalgası gölge bölgesi, Dünya’nın dış çekirdeğinde sıvı bir katman bulunduğuna kanıt sağlar.',
          },
        ],
      },
      {
        id: 'waves-synthesis', kind: 'synthesis', title: 'Soru çözme sistemi ve final kontrolü',
        lead: 'Kaynak, ortam ve sınırı işaretle; sonra değişmeyeni bulup v=λf ile kalanları bağla.',
        blocks: [
          {
            id: 'waves-strategy-prose', type: 'prose',
            body: `Bir dalga şekli verildiğinde önce denge çizgisini bul. Dikey ölçülerden genliği, yatay tekrar aralığından dalga boyunu çıkar. Tepe-çukur uzaklığının 2A, yatayda ardışık tepe-çukur uzaklığının λ/2 olduğunu kontrol et. Zaman grafiğinde yatay tekrar periyot, konum grafiğinde yatay tekrar dalga boyudur; eksenleri okumadan karar verme.

Ortam değişimi sorusunda kaynağın değişip değişmediğini sor. Kaynak aynıysa f ve T sabittir. Yeni ortam v’yi değiştirir, λ=v/f buna uyar. Yansıma sorusunda ortam aynı kaldığı için sürat ve dalga boyu korunur; yalnız yayılma yönü ve sınır türüne göre atmanın işareti değişebilir.

Ses sorusunda incelik için frekans, şiddet için genlik, hız için ortam ara. Deprem sorusunda P’nin boyuna ve hızlı, S’nin enine ve sıvıda ilerleyemeyen dalga olduğunu kullan. Kırınımda açıklık ile dalga boyunu karşılaştır; açıklık küçüldükçe ya da λ büyüdükçe bükülme belirginleşir.`,
          },
          {
            id: 'waves-strategy-table', type: 'table', title: 'Soru sinyalinden ilk karara',
            columns: ['Sinyal', 'İlk karar', 'Kontrol'],
            rows: [
              ['Konum grafiği', 'Yatay tekrar λ', 'Düşey değer uzanım mı?'],
              ['Zaman grafiği', 'Yatay tekrar T', 'f=1/T uygulandı mı?'],
              ['Yeni ortam', 'f sabit, v ve λ değişebilir', 'Kaynak aynı mı?'],
              ['Sabit uç', 'Atma ters yansır', 'Yayılma yönü de geri mi?'],
              ['Derinden sığa', 'v ve λ azalır', 'Frekans korundu mu?'],
              ['Dar açıklık', 'Kırınım artar', 'Açıklık/λ oranı küçüldü mü?'],
              ['İnce ses', 'Yüksek frekans', 'Hızla karıştırıldı mı?'],
            ],
            caption: 'Değişkenleri kimin belirlediğini bulmak, formülü doğru yönde kullanmayı sağlar.',
          },
          {
            id: 'waves-osym', type: 'osym_simulation', title: 'Final kontrolü: başka ortama geçen dalga',
            passage: 'Sabit frekansla çalışan bir kaynak, birinci ortamda v hızında ve λ dalga boyunda dalga üretmektedir. Dalga ikinci ortama geçince hızı 2v oluyor.',
            question: 'İkinci ortamdaki dalga için hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Frekansı 2f olur.', explanation: 'Frekansı kaynak belirler; kaynak değişmediği için f sabittir.' },
              { text: 'Periyodu T/2 olur.', explanation: 'T=1/f ve f sabit olduğu için periyot değişmez.' },
              { text: 'Dalga boyu 2λ olur.', explanation: 'λ=v/f; hız iki katına çıkarken frekans sabit kaldığı için dalga boyu iki kat olur.' },
              { text: 'Genliği kesinlikle iki kat olur.', explanation: 'Hız değişimi genliğin iki kat olmasını gerektirmez.' },
              { text: 'Dalga enerjisi kesinlikle değişmez.', explanation: 'Sınırda yansıma ve iletim oranları enerji paylaşımını etkileyebilir; bu bilgi verilmemiştir.' },
            ],
            answer_index: 2,
            stem_analysis: 'Kaynak sabit → f sabit; ortam değişir → v değişir; λ=v/f ile yeni dalga boyunu bul.',
            critical_point: 'Sınır geçişinde dalga tepeleri kaybolmaz ya da üremez; frekans süreklilik nedeniyle korunur.',
            takeaway: 'Kaynak frekansı sabitken hız hangi oranda değişirse dalga boyu da aynı oranda değişir.',
          },
          {
            id: 'waves-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Dalga enerji taşır; ortam maddesi net olarak dalgayla birlikte ilerlemez.',
              'Mekanik dalgalar ortam ister, elektromanyetik dalgalar boşlukta yayılabilir.',
              'T=1/f ve v=λf; frekansı kaynak, hızı ortam belirler.',
              'Genlik en büyük uzanım, dalga boyu aynı fazlı ardışık iki nokta arasıdır.',
              'Enine dalgada titreşim yayılmaya dik, boyuna dalgada paraleldir.',
              'Sabit uç atmayı ters, serbest uç düz yansıtır.',
              'Süperpozisyonda uzanımlar cebirsel toplanır; atmalar çakışma sonrası yollarına devam eder.',
              'Derinden sığa su dalgasında v ve λ azalır, f değişmez; eğikse yön normale yaklaşır.',
              'Kırınım açıklık/λ oranı küçüldükçe belirginleşir.',
              'Ses boşlukta yayılmaz; frekans inceliği, genlik şiddeti etkiler.',
              'P dalgası boyuna ve hızlıdır; S dalgası enine olup sıvıda yayılamaz.',
            ],
          },
          {
            id: 'waves-connection', type: 'connection', title: 'Sıradaki konuya köprü: optik',
            body: 'Dalgaların yansıma, kırılma, frekans ve hız davranışını kurduk. Optikte ışığın elektromanyetik bir dalga olarak aynalarda nasıl yansıdığını, ortamlarda nasıl kırıldığını ve merceklerde nasıl görüntü oluşturduğunu inceleyeceğiz.',
            links: ['Optik', 'Dalgalar', 'Manyetizma'],
          },
        ],
      },
    ],
  },
}

export default dalgalar
