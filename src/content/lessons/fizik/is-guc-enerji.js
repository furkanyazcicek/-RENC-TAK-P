const isGucEnerji = {
  slug: 'is-guc-enerji',
  placement: { examType: 'TYT', subject: 'Fizik', topic: 'İş, Güç ve Enerji' },
  order: 1,
  learningMode: 'interactive',
  partLabel: '7. Konu',
  title: 'İş, Güç ve Enerji',
  subtitle: 'Kuvvetin yol boyunca etkisini enerji değişimine çevir; korunumu ve dönüşüm hızını tek bir sistem hesabında izle.',
  document: {
    version: 2,
    estimated_minutes: 92,
    prerequisites: [
      { topic: 'Hareket ve Kuvvet', why: 'Net kuvvet, yer değiştirme, hız ve sürtünme enerji hesabının mekanik temelidir.' },
      { topic: 'Fizik Bilimine Giriş', why: 'Skaler-vektörel ayrımı, SI birimleri ve grafik alanı yorumunu kullanacağız.' },
      { topic: 'Oran ve denklem kurma', why: 'Güç, verim ve enerji dönüşümleri oranlarla karşılaştırılır.' },
    ],
    outcomes: [
      'Sabit kuvvetin yaptığı işi kuvvet, yer değiştirme ve aralarındaki açıdan hesaplayabileceksin.',
      'Pozitif, negatif ve sıfır işi fiziksel sonucuyla ayırabileceksin.',
      'Kinetik ve çekim potansiyel enerjisini doğru referans ve birimle kullanabileceksin.',
      'Net iş-kinetik enerji teoremiyle hız değişimini açıklayabileceksin.',
      'Sürtünmesiz ve sürtünmeli sistemlerde enerji dönüşümlerini izleyebileceksin.',
      'Güç ile verimi birbirinden ayırıp günlük makine örneklerine uygulayabileceksin.',
    ],
    sections: [
      {
        id: 'enerji-opening', kind: 'opening', title: 'Kuvvet hareketi iki farklı dille anlatır',
        lead: 'Newton yasası hareketin her anındaki ivmeyi söyler; enerji yöntemi ise başlangıç ile son durum arasındaki toplam değişimi doğrudan görmemizi sağlar.',
        blocks: [
          {
            id: 'enerji-opening-prose', type: 'prose',
            body: `Bir sandığı iten kuvvet, sandık yer değiştirmedikçe mekanik anlamda **iş yapmış sayılmaz**. Duvarı bütün gücünle itip duvarı hareket ettiremezsen yorulursun; kaslarında kimyasal enerji dönüşür ama duvar üzerinde mekanik iş sıfırdır. Fizikte iş, günlük dildeki “emek harcama” anlamından daha dar ve ölçülebilir bir kavramdır.

Bir kuvvet cismi yer değiştirme yönünde destekliyorsa pozitif, harekete karşı koyuyorsa negatif iş yapar. Yatay yolda ilerleyen çantayı sabit yükseklikte taşıyan kişinin çantaya uyguladığı kuvvet yukarı, yer değiştirme yataydır; kuvvet ve yer değiştirme dik olduğu için kişinin çanta üzerindeki mekanik işi sıfırdır. Buna karşılık yer çekimi merdivenden çıkan çanta üzerinde negatif iş yapar.

**Enerji**, bir sistemin iş yapabilme veya değişim oluşturabilme kapasitesini betimleyen skaler büyüklüktür. Enerji bir cisimden diğerine iş, ısı ya da dalga yoluyla aktarılabilir; tür değiştirebilir fakat yalıtılmış bir sistemde yoktan var olmaz ve yok olmaz. Mekanikte en sık kinetik enerji ile çekim potansiyel enerjisini izleriz.

**Güç**, enerji miktarı değil enerji aktarım hızıdır. İki vinç aynı yükü aynı yüksekliğe çıkarırsa eşit iş yapar; bunu daha kısa sürede yapan vincin gücü daha büyüktür. **Verim** ise sisteme verilen enerjinin ne kadarının amaçlanan yararlı çıktıya dönüştüğünü söyler. Güç “ne kadar hızlı?”, verim “ne kadarı yararlı?” sorusuna cevap verir.`,
          },
          {
            id: 'energy-why', type: 'why',
            question: 'Neden kuvvet uygulanan her durumda iş yapılmış olmaz?',
            body: 'İş, kuvvetin yalnız yer değiştirme doğrultusundaki bileşeninin yol boyunca etkisidir. Yer değiştirme yoksa veya kuvvet yer değiştirmeye dikse bu bileşen sıfırdır. Kuvvet bulunması tek başına yeterli değildir; kuvvet ile yer değiştirme arasındaki geometrik ilişki de gerekir.',
          },
          {
            id: 'energy-concept-map', type: 'concept_map', title: 'Kuvvetten enerjiye karar zinciri',
            intro: 'Soruyu çözerken önce sistem ve enerji aktarım yolunu seç.',
            nodes: [
              { id: 'force', label: 'Kuvvet', detail: 'Etkileşimin büyüklüğü ve yönü' },
              { id: 'work', label: 'İş', detail: 'Yol boyunca enerji aktarımı' },
              { id: 'kinetic', label: 'Kinetik enerji', detail: 'Hareket durumuna bağlı' },
              { id: 'potential', label: 'Potansiyel enerji', detail: 'Konuma ve referansa bağlı' },
              { id: 'power', label: 'Güç', detail: 'İş yapma hızı' },
              { id: 'efficiency', label: 'Verim', detail: 'Yararlı çıkış oranı' },
            ],
            links: [
              { from: 'force', to: 'work', label: 'yer değiştirme boyunca' },
              { from: 'work', to: 'kinetic', label: 'net iş değiştirir' },
              { from: 'potential', to: 'kinetic', label: 'dönüşebilir' },
              { from: 'work', to: 'power', label: 'zamana bölünür' },
              { from: 'power', to: 'efficiency', label: 'ayrı ölçüttür' },
            ],
            caption: 'Enerji yöntemi kuvveti yok saymaz; kuvvetin yol boyunca biriktirilmiş etkisini kullanır.',
          },
        ],
      },
      {
        id: 'energy-atlas-section', kind: 'build', title: 'İşten verime bilimsel atlas',
        lead: 'Dört sahne, kuvvetin geometrisinden enerji dönüşümüne ve makinenin performansına uzanan tek düşünme zinciri kurar.',
        blocks: [
          {
            id: 'energy-atlas', type: 'figure', kind: 'fizik-is-guc-enerji-atlas', width: 'full', complexity: 'high',
            title: 'İş, enerji, korunma ve performansın dört sahnesi',
            purpose: 'İşin işaretini, enerji türlerini, mekanik enerji dönüşümünü, güç ve verimi tek etkileşimli levhada karşılaştırmak.',
            caption: 'Bir kuvvet yol boyunca enerji aktarır; enerji tür değiştirir, aktarımın hızı gücü ve yararlı payı verimi belirler.',
            focus: [
              { title: 'İşin geometrisi', body: 'Kuvvetin yer değiştirme doğrultusundaki bileşenini ve işaretini ayır.' },
              { title: 'Enerji ve teorem', body: 'Kinetik ve potansiyel enerjiyi net işin hız değişimiyle bağla.' },
              { title: 'Enerji korunumu', body: 'Sürtünmesiz ve sürtünmeli sistemlerde enerji türlerinin payını izle.' },
              { title: 'Güç ve verim', body: 'Aynı işi yapma hızını, yararlı çıkış oranından ayır.' },
            ],
          },
          {
            id: 'energy-compare', type: 'compare', title: 'Dört büyüklüğü karıştırma',
            columns: ['İş', 'Enerji', 'Güç', 'Verim'],
            rows: [
              { label: 'Anlam', values: ['Kuvvetle enerji aktarımı', 'Sistemin durum büyüklüğü', 'Enerji aktarım hızı', 'Yararlı çıkış oranı'] },
              { label: 'SI birimi', values: ['J', 'J', 'W = J/s', 'Birimsiz veya %'] },
              { label: 'İşaret', values: ['+, − veya 0', 'Seçilen türe/referansa bağlı', 'Aktarım yönü modele bağlı', '0 ile 1 arasında'] },
              { label: 'Ana soru', values: ['Kuvvet yol boyunca ne yaptı?', 'Başlangıç ve son durum nasıl?', 'Ne kadar sürede?', 'Girişin ne kadarı yararlı?'] },
            ],
            insight: 'Aynı birime sahip iş ve enerji aynı kavram değildir: iş bir aktarım sürecini, enerji sistemin durumunu anlatır.',
          },
          {
            id: 'energy-atlas-reading', type: 'prose',
            body: `Atlası soldan sağa bir formül listesi gibi değil, neden-sonuç zinciri gibi oku. İlk sahnede kuvvetin yer değiştirme doğrultusundaki bileşeni sistemle çevre arasındaki enerji aktarımını belirler. İkinci sahnede bu aktarım cismin hızına veya konumuna bağlı enerji türlerinde görünür. Üçüncü sahne, türler değişse de uygun seçilmiş kapalı sistemde toplamın korunduğunu gösterir. Son sahne ise aynı enerji dönüşümünün ne kadar hızlı gerçekleştiğini ve girişin ne kadarının amaçlanan çıktıya ulaştığını ayırır.

Bir soruda bu zincirin yalnız bir halkası verilebilir. Örneğin motor gücü ve süre verilirse önce aktarılan enerji bulunur; bu enerji yük kaldırıyorsa potansiyel enerji artışına bağlanır. Sürtünme bilgisi eklenirse mekanik enerjiyle termal enerji arasında paylaştırma yapılır. Böylece bağıntılar birbirinden kopuk değil, aynı enerji bilançosunun farklı görünümleri olur.`,
          },
        ],
      },
      {
        id: 'mechanical-work', kind: 'deep-dive', title: 'Mekanik iş: kuvvetin yol doğrultusundaki payı',
        lead: 'İş skaler bir büyüklüktür; işaretini kuvvet ile yer değiştirme arasındaki açı belirler.',
        blocks: [
          {
            id: 'work-prose', type: 'prose',
            body: `Sabit büyüklükteki bir kuvvet için yapılan iş, kuvvetin yer değiştirme doğrultusundaki bileşeni ile yer değiştirme büyüklüğünün çarpımıdır. θ açısı kuvvet ile yer değiştirme arasındadır. Açı 0° ise cosθ=1 ve iş en büyük pozitiftir. Açı 90° ise cosθ=0 ve iş sıfırdır. Açı 180° ise cosθ=−1 ve iş negatiftir.

Pozitif iş cismin kinetik enerjisini artırma eğilimindedir; negatif iş azaltma eğilimindedir. Ancak tek bir kuvvetin işine bakarak hızın nasıl değiştiğine kesin karar verilmez. Hız değişimini belirleyen, **tüm kuvvetlerin yaptığı net iş**tir. Örneğin ileri yöndeki motor kuvveti pozitif, hava direnci negatif iş yapar. Sabit süratte bu işlerin toplamı sıfır olabilir.

Ağırlığın yaptığı işi yoldan çok ilk ve son yükseklik belirler. Cisim aşağı inerken ağırlık pozitif, yukarı çıkarken negatif iş yapar. Normal kuvvet yüzeye dik ve hareket yüzey boyunca ise normal kuvvetin işi sıfırdır. Dairesel harekette merkeze yönelen kuvvet anlık yer değiştirmeye dik olduğundan sürati değiştirmez; yalnız hızın yönünü değiştirir.

İşin SI birimi joule’dür. 1 joule, 1 newtonluk kuvvetin kendi doğrultusunda 1 metre yol boyunca yaptığı iştir. İş-zaman grafiği standart bir temel grafik değildir; fakat kuvvet-konum grafiğinde eğri altında kalan işaretli alan yapılan işi verir. Değişken kuvvet sorularında bu alan yaklaşımı özellikle önemlidir.`,
          },
          {
            id: 'work-formula', type: 'formula', title: 'Sabit kuvvetin yaptığı iş',
            latex: 'W=F\,d\cos\theta',
            meaning: 'F kuvvet büyüklüğü, d yer değiştirme büyüklüğü ve θ aralarındaki açıdır.',
            variables: [
              { sym: 'W', desc: 'Yapılan iş; joule (J)' },
              { sym: 'F', desc: 'Kuvvet; newton (N)' },
              { sym: 'd', desc: 'Yer değiştirme; metre (m)' },
              { sym: 'θ', desc: 'Kuvvet ile yer değiştirme arasındaki açı' },
            ],
          },
          {
            id: 'work-example', type: 'worked_example', title: 'Açılı kuvvetle iş',
            problem: 'Bir sandık yatayda 5 m çekiliyor. İpe uygulanan 40 N kuvvet yatayla 60° açı yaptığına göre kuvvetin yaptığı iş kaç joule’dür?',
            steps: [
              { title: 'Açıyı doğru seç', body: 'Kuvvet ile yatay yer değiştirme arasındaki açı 60°’dir.' },
              { title: 'Yol doğrultusundaki bileşeni kullan', body: 'W = 40 × 5 × cos60° = 40 × 5 × 0,5.' },
              { title: 'İşareti yorumla', body: 'Kuvvetin yatay bileşeni yer değiştirmeyle aynı yönlüdür; W = +100 J.' },
            ],
            result: 'İpin kuvveti sandığa 100 J enerji aktarır. Düşey bileşen yatay yer değiştirmede iş yapmaz.',
          },
          {
            id: 'work-trap', type: 'trap', title: 'Kuvvet ile net işi eşitleme',
            wrong: '“Motor pozitif iş yapıyorsa araç mutlaka hızlanır.”',
            right: 'Aracın kinetik enerjisini tüm kuvvetlerin net işi belirler.',
            body: 'Motorun pozitif işi dirençlerin negatif işiyle aynı büyüklükteyse net iş sıfır, sürat sabit olabilir.',
          },
        ],
      },
      {
        id: 'energy-types', kind: 'deep-dive', title: 'Kinetik enerji, potansiyel enerji ve net iş',
        lead: 'Hız değişimi kinetik enerjide, konum değişimi potansiyel enerjide görünür.',
        blocks: [
          {
            id: 'energy-types-prose', type: 'prose',
            body: `Kinetik enerji hareket eden cismin enerjisidir ve kütle ile hızın karesine bağlıdır. Hız iki katına çıkarsa kinetik enerji dört katına çıkar; aynı hızda kütle iki katına çıkarsa iki katına çıkar. Kinetik enerji skaler ve negatif olmayan bir büyüklüktür. Hızın yönü değişse bile sürat aynıysa kinetik enerji değişmez.

Çekim potansiyel enerjisi, cisim-Dünya sisteminin göreli konumuna bağlıdır. TYT düzeyinde yeryüzüne yakın ve g sabit kabul edilen bölgede Ep=mgh kullanılır. Sıfır yükseklik düzeyi probleme göre seçilebilir; bu yüzden tek bir noktadaki potansiyel enerji referansa bağlıdır. Fiziksel sonuçları belirleyen potansiyel enerji **farkı**dır.

Net iş-kinetik enerji teoremi, bir cisme etki eden bütün kuvvetlerin toplam işini kinetik enerjideki değişime eşitler. Net iş pozitifse son kinetik enerji başlangıçtan büyük, negatifse küçüktür. Net iş sıfırsa sürat değişmez; hızın yönü yine değişebilir. Bu teorem, süre bilgisi olmadan başlangıç ve son hız arasında doğrudan bağ kurar.

Yay da konuma bağlı enerji depolar. İdeal yay için yay potansiyel enerjisi sıkışma ya da uzama miktarının karesiyle artar. TYT sorularında yay ayrıntısı verildiğinde enerji yaklaşımı, değişen yay kuvvetiyle tek tek hareket denklemi kurmaktan daha kısa yol sağlar.`,
          },
          {
            id: 'energy-formulas', type: 'formula', title: 'Mekanik enerjinin temel bağıntıları',
            latex: 'E_k=\frac12mv^2\qquad E_p=mgh\qquad W_{net}=\Delta E_k',
            meaning: 'Kinetik enerji hızın karesiyle; çekim potansiyel enerjisi seçilen referansa göre yükseklikle değişir. Net iş kinetik enerji değişimidir.',
            variables: [
              { sym: 'm', desc: 'Kütle; kg' }, { sym: 'v', desc: 'Sürat; m/s' },
              { sym: 'g', desc: 'Yerçekimi ivmesi; m/s²' }, { sym: 'h', desc: 'Referansa göre yükseklik; m' },
            ],
          },
          {
            id: 'work-energy-example', type: 'worked_example', title: 'Net işten son sürate',
            problem: '2 kg kütleli cisim 3 m/s süratle giderken üzerine toplam +16 J net iş yapılıyor. Son sürati kaç m/s olur?',
            steps: [
              { title: 'İlk kinetik enerji', body: 'Ek,ilk = 1/2 × 2 × 3² = 9 J.' },
              { title: 'Net işi enerjiye ekle', body: 'Wnet = Ek,son − Ek,ilk olduğundan Ek,son = 9 + 16 = 25 J.' },
              { title: 'Son sürati bul', body: '25 = 1/2 × 2 × v², buradan v²=25 ve v=5 m/s.' },
            ],
            result: 'Net pozitif iş cismin kinetik enerjisini 16 J artırmış ve süratini 5 m/s yapmıştır.',
          },
          {
            id: 'energy-reference-trap', type: 'trap', title: 'Potansiyel enerjiyi mutlak sanma',
            wrong: '“Zemine göre h=0 ise cismin hiç çekim enerjisi yoktur.”',
            right: 'Sıfır düzeyi hesap kolaylığı için seçilir; ölçülebilir sonuç enerji farkından gelir.',
            body: 'Başka bir referans seçilirse tüm potansiyel enerji değerleri aynı sabit kadar değişir, hareket sonucu değişmez.',
          },
        ],
      },
      {
        id: 'energy-conservation', kind: 'deep-dive', title: 'Enerji korunumu: kaybolan değil dönüşen enerji',
        lead: 'Sistemin sınırını doğru seçersen enerjinin hangi türden hangi türe geçtiğini görebilirsin.',
        blocks: [
          {
            id: 'conservation-prose', type: 'prose',
            body: `Yalnız korunumlu kuvvetler iş yapıyorsa kinetik ve potansiyel enerjinin toplamı olan **mekanik enerji** sabittir. Yukarıdan bırakılan cisim düşerken çekim potansiyel enerjisi azalır, kinetik enerjisi aynı miktarda artar. En alçak noktada potansiyel enerji en küçük, sürat ve kinetik enerji en büyüktür.

Sürtünme olduğunda “enerji kayboldu” demek eksiktir. Sürtünme mekanik enerjinin bir bölümünü cismin ve çevrenin iç enerjisine dönüştürür. Yalnız Ek+Ep toplamına bakarsan azalma görürsün; sistemi cisim, yüzey ve çevreyi içerecek biçimde genişletirsen toplam enerji korunur. Bu ayrım termodinamikteki ısı artışıyla mekanik sürtünmeyi birbirine bağlar.

Dışarıdan sisteme iş yapılırsa sistemin enerjisi artabilir; sistem çevre üzerinde iş yaparsa azalabilir. Bu yüzden korunum denklemini yazmadan önce “sistem nedir?” sorusu sorulur. Cisim-Dünya sistemi seçilirse çekim potansiyel enerjisi sistem içinde tutulur. Yalnız cisim seçilirse ağırlığın yaptığı iş dış enerji aktarımı gibi ele alınır. İki yaklaşım aynı fiziksel sonuca ulaşır; terimleri iki kez saymamak gerekir.

Enerji yöntemi yoldan bağımsız korunumlu kuvvetlerde güçlüdür. Sürtünmesiz iki farklı rampadan aynı yükseklik farkıyla inen eş cisimler, başlangıç süratleri de eşitse tabanda eşit sürate ulaşır. Yolun uzunluğu ya da eğimi iniş süresini değiştirebilir; fakat son kinetik enerjiyi yükseklik farkı belirler.`,
          },
          {
            id: 'conservation-formula', type: 'formula', title: 'Mekanik enerji korunumu',
            latex: 'E_{k,i}+E_{p,i}=E_{k,s}+E_{p,s}',
            meaning: 'Sürtünmesiz ve dışarıdan enerji aktarımı olmayan mekanik sistemde başlangıç ve son mekanik enerji eşittir.',
            variables: [
              { sym: 'i', desc: 'İlk durum' }, { sym: 's', desc: 'Son durum' },
              { sym: 'Ek', desc: 'Kinetik enerji' }, { sym: 'Ep', desc: 'Potansiyel enerji' },
            ],
          },
          {
            id: 'energy-lab', type: 'figure', kind: 'fizik-kesif-laboratuvari', width: 'full',
            title: 'Enerji dönüşümü ve sürtünme laboratuvarı',
            caption: 'Yüksekliği, kütleyi ve mekanik enerji kaybını değiştir; potansiyel, kinetik ve termal enerji paylarının toplamını izle.',
            purpose: 'Enerji türlerinin dönüşürken toplam enerjinin nasıl korunduğunu sayısal ve görsel olarak göstermek.',
            data: { mode: 'energy', title: 'Enerji paylarını değiştir, toplamı koru', initialMass: 4, initialHeight: 12, initialPosition: 35, initialLoss: 10 },
          },
          {
            id: 'conservation-trap', type: 'trap', title: 'Mekanik enerji ile toplam enerjiyi eşitleme',
            wrong: '“Sürtünme varsa enerji korunmaz.”',
            right: 'Sürtünmede mekanik enerji azalır; azalan pay termal enerjiye dönüşür ve toplam enerji korunur.',
            body: 'Korunumun görünmesi için sistem sınırına sürtünen yüzeyleri ve oluşan iç enerjiyi dahil et.',
          },
        ],
      },
      {
        id: 'power-efficiency', kind: 'application', title: 'Güç ve verim: hızlı olmak ile az kaybetmek aynı değildir',
        lead: 'Makinenin gücü işi yapma hızını, verimi ise giriş enerjisinin yararlı çıkışa dönüşen payını ölçer.',
        blocks: [
          {
            id: 'power-prose', type: 'prose',
            body: `Ortalama güç, yapılan işin ya da aktarılan enerjinin geçen zamana oranıdır. Bir joule enerjiyi bir saniyede aktaran sistemin gücü bir watt’tır. Aynı yükü aynı yüksekliğe çıkaran iki motor eşit iş yapar; süresi yarı olanın gücü iki katıdır. Daha güçlü motor mutlaka daha çok toplam iş yapmış değildir.

Sabit hızla hareket eden araca etki eden net kuvvet sıfır olsa da motor güç üretir. Motorun aktardığı enerji hava ve yol dirençlerine karşı yapılan işe gider. Kuvvet hareket yönüne paralelse anlık mekanik güç P=Fv olarak da yazılabilir. Aynı direnç kuvvetinde daha hızlı giden araç daha büyük güç gerektirir.

Verim, yararlı enerji veya gücün toplam giriş enerji ya da gücüne oranıdır. Boyutsuzdur ve çoğu zaman yüzde ile verilir. Gerçek makinelerde sürtünme, elektrik direnci, ses ve istenmeyen ısınma nedeniyle verim yüzde yüzden küçüktür. Kayıp enerji yok olmaz; yalnız hedeflenmeyen enerji türlerine dağılır.

Yüksek güç yüksek verim anlamına gelmez. Bir motor çok hızlı çalışıp büyük güç aktarırken önemli miktarda enerji kaybedebilir. Daha düşük güçlü başka bir motor daha yavaş ama daha verimli olabilir. Soruda önce karşılaştırılanın süre mi, giriş-çıkış oranı mı olduğuna karar ver.`,
          },
          {
            id: 'power-formulas', type: 'formula', title: 'Güç ve verim',
            latex: 'P=\frac{W}{t}=\frac{\Delta E}{t}\qquad \eta=\frac{E_{yararlı}}{E_{giriş}}=\frac{P_{yararlı}}{P_{giriş}}',
            meaning: 'Güç enerji aktarım hızıdır; verim aynı türden çıkış ve giriş büyüklüklerinin oranıdır.',
            variables: [
              { sym: 'P', desc: 'Güç; watt (W)' }, { sym: 't', desc: 'Süre; s' },
              { sym: 'η', desc: 'Verim; birimsiz veya yüzde' }, { sym: 'E', desc: 'Enerji; J' },
            ],
          },
          {
            id: 'power-example', type: 'worked_example', title: 'Motorun giriş gücü',
            problem: 'Bir motor 300 N ağırlığındaki yükü 8 m yukarı 12 s’de sabit hızla çıkarıyor. Motorun verimi %80 ise giriş gücü kaç watt’tır?',
            steps: [
              { title: 'Yararlı işi bul', body: 'Wyararlı = G × h = 300 × 8 = 2400 J.' },
              { title: 'Yararlı gücü bul', body: 'Pyararlı = 2400 / 12 = 200 W.' },
              { title: 'Verimden giriş gücüne geç', body: '0,80 = 200 / Pgiriş, dolayısıyla Pgiriş = 250 W.' },
            ],
            result: 'Motorun 250 W giriş gücünün 200 W’ı yararlı kaldırma gücüne, 50 W’ı diğer enerji türlerine dönüşür.',
          },
          {
            id: 'power-trap', type: 'trap', title: 'Güç ile işi eşitleme',
            wrong: '“Daha güçlü makine her durumda daha fazla iş yapar.”',
            right: 'Güç işin zamana oranıdır; aynı işi daha kısa sürede yapmak da gücü artırır.',
            body: 'Toplam iş için enerji miktarına, güç için hem enerjiye hem süreye bak.',
          },
        ],
      },
      {
        id: 'energy-exam', kind: 'synthesis', title: 'TYT soru stratejisi: sistem, referans, aktarım',
        lead: 'Formülü seçmeden önce cismin değil sistemin enerji hesabını kur.',
        blocks: [
          {
            id: 'energy-final-prose', type: 'prose',
            body: `İş sorusunda önce yer değiştirme yönünü çiz, sonra her kuvvetin bu doğrultudaki bileşenini ve işaretini belirle. Normal kuvvet ve merkezcil kuvvet çoğu temel düzende yer değiştirmeye dik olduğundan sıfır iş yapar. Net iş soruluyorsa tek tek işleri cebirsel topla ya da kinetik enerji değişimini kullan.

Enerji korunumu sorusunda başlangıç ve son noktaları seç; aradaki yolun biçimine yalnız sürtünme veya başka yol bağımlı etki varsa ihtiyaç duy. Potansiyel enerji için bir sıfır düzeyi belirle ve tüm yükseklikleri aynı referanstan ölç. Sürtünme varsa azalan mekanik enerji payını termal enerjiye yaz.

Güç sorusunda yapılan iş kadar süreyi de izle. Verim yüzdesini denkleme ondalık olarak koy: %80 = 0,80. Yararlı çıkışın girişten büyük çıkması fiziksel hata işaretidir. Birim kontrolü güçlü bir filtredir: iş ve enerji joule, güç watt, verim birimsizdir.

Grafik sorularında F–x alanı işi, güç–zaman alanı enerjiyi verir. Enerji-konum grafiğinin eğimi kuvvetle ilişkilidir ancak TYT sorusunda çoğunlukla nitel yorum yeterlidir. Sayı verilmemişse korunum ve oran ilişkisini gereksiz cebire boğma.`,
          },
          {
            id: 'energy-strategy-table', type: 'table', title: 'Soru sinyalinden ilk denkleme',
            columns: ['Sinyal', 'İlk model', 'Kontrol'],
            rows: [
              ['Sabit kuvvet ve yol', 'W = Fd cosθ', 'Açı kuvvet ile yer değiştirme arasında mı?'],
              ['Başlangıç-son sürat', 'Wnet = ΔEk', 'Tek kuvvet mi, net iş mi soruluyor?'],
              ['Sürtünmesiz yükseklik değişimi', 'Ek + Ep sabit', 'Aynı referans düzeyi kullanıldı mı?'],
              ['Sürtünmeli yol', 'Mekanik azalma = termal artış', 'Toplam enerji hâlâ korunuyor mu?'],
              ['Aynı iş, farklı süre', 'P = W/t', 'Kısa süre daha büyük güç verir'],
              ['Yararlı çıkış ve giriş', 'η = Eyararlı/Egiriş', 'Sonuç 0–1 aralığında mı?'],
            ],
            caption: 'Her çözümde sistem sınırı, referans düzeyi, işaret ve birim kontrolünü görünür yaz.',
          },
          {
            id: 'energy-osym', type: 'osym_simulation', title: 'Final kontrolü: sürtünmeli iniş',
            passage: 'K cismi yerden h yükseklikte durgun bırakılıyor. Cisim sürtünmeli bir yoldan zemine ulaştığında kinetik enerjisi başlangıç çekim potansiyel enerjisinin %70’i oluyor.',
            question: 'Bu süreç için hangisi kesinlikle doğrudur?',
            options: [
              { text: 'Cismin toplam enerjisinin %30’u yok olmuştur.', explanation: 'Enerji yok olmaz; mekanik enerjinin %30’u termal enerjiye dönüşmüştür.' },
              { text: 'Sürtünme kuvvetinin yaptığı iş pozitiftir.', explanation: 'Sürtünme hareket yönüne zıt olduğu için cisim üzerinde negatif iş yapar.' },
              { text: 'Cisim-yol sisteminin termal enerjisi başlangıç enerjisinin %30’u kadar artmıştır.', explanation: 'Zeminde Ep=0 seçilirse %70 kinetik enerji kalır; mekanik azalma olan %30 termal enerji artışıdır.' },
              { text: 'Normal kuvvet cismin süratini artırmıştır.', explanation: 'Yol boyunca normal kuvvet anlık yer değiştirmeye dik kabul edilir ve iş yapmaz.' },
              { text: 'Cisim zemine ulaştığında mekanik enerjisi korunmuştur.', explanation: 'Sürtünme nedeniyle mekanik enerji korunmaz; toplam enerji korunur.' },
            ],
            answer_index: 2,
            stem_analysis: 'Başlangıç enerjisini yüzde 100 kabul et; son kinetik payı çıkar ve mekanik azalmayı termal enerjiye aktar.',
            critical_point: 'Sürtünme toplam enerjiyi değil, mekanik enerjiyi azaltır.',
            takeaway: 'Enerji sorusunda “kayıp” gördüğünde hangi enerji türüne dönüştüğünü ara.',
          },
          {
            id: 'energy-summary', type: 'summary', title: 'Kesin bilmen gerekenler',
            points: [
              'Sabit kuvvetin işi W=Fd cosθ; yalnız yol doğrultusundaki kuvvet bileşeni iş yapar.',
              'Aynı yönlü kuvvet pozitif, dik kuvvet sıfır, zıt yönlü kuvvet negatif iş yapar.',
              'Net iş kinetik enerji değişimidir; tek kuvvetin işiyle karıştırılmaz.',
              'Kinetik enerji hızın karesiyle, çekim potansiyel enerjisi referansa göre yükseklikle değişir.',
              'Sürtünmesiz kapalı mekanik sistemde Ek+Ep sabittir.',
              'Sürtünmede mekanik enerji termal enerjiye dönüşür; toplam enerji korunur.',
              'Güç iş veya enerji aktarımının zamana oranıdır ve birimi watt’tır.',
              'Verim yararlı çıkışın girişe oranıdır; birimsizdir ve gerçek makinelerde %100’den küçüktür.',
              'Daha güçlü makine daha verimli olmak zorunda değildir.',
            ],
          },
          {
            id: 'energy-connection', type: 'connection', title: 'Sıradaki konuya köprü: elektrostatik',
            body: 'Mekanikte kuvvetin yol boyunca enerji aktarımını gördük. Elektrostatikte bu dili elektrik yükleri arasındaki kuvvet, alan ve elektriksel potansiyel enerjiye taşıyacağız.',
            links: ['Elektrostatik', 'Hareket ve Kuvvet', 'Isı, Sıcaklık ve Genleşme'],
          },
        ],
      },
    ],
  },
}

export default isGucEnerji
