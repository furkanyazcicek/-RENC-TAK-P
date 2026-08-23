/** AYT BİYOLOJİ · DESTEK VE HAREKET SİSTEMİ */
export default {
  slug: 'destek-hareket-sistemi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Destek ve Hareket Sistemi' },
  order: 3,
  partLabel: '4. Bölüm',
  goldStandard: true,
  title: 'Destek ve Hareket Sistemi: Komuttan Kuvvete',
  subtitle: 'Kemik, eklem ve kası ayrı listeler gibi ezberleme; sinirsel komutun kaldıraç sisteminde harekete dönüşmesini, dokuların nasıl beslendiğini ve kasılmada bantların neden değiştiğini mekanizmayla çöz.',
  document: {
    version: 1,
    estimated_minutes: 100,
    prerequisites: [
      { topic: 'Sinir Sistemi', why: 'Motor nöron ve nöromüsküler kavşak, iskelet kasındaki kasılmayı başlatır.' },
      { topic: 'Duyu Organları', why: 'Denge, kas iğciği ve eklem reseptörlerinden gelen geri bildirim hareketin ayarlanmasına katılır.' },
      { topic: 'Hücresel Solunum ve ATP', why: 'Çapraz köprü döngüsü, Ca²⁺ pompaları ve kas gevşemesi doğrudan ATP gerektirir.' },
    ],
    outcomes: [
      'İskeletin destek, koruma, hareket, mineral deposu ve kan hücresi üretimi görevlerini birbiriyle ilişkilendirebileceksin.',
      'Eksen ve üyeler iskeletini; uzun kemiğin epifiz, diyafiz, periost, kompakt ve süngerimsi bölgelerini ayırabileceksin.',
      'Osteoblast, osteoklast ve osteositlerin kemik yapım–yıkım dengesindeki rollerini yorumlayabileceksin.',
      'Hiyalin, elastik ve lifli kıkırdağı yapı, yer ve işlev bakımından karşılaştırabileceksin.',
      'Oynamaz, yarı oynar ve oynar eklemleri; sinovyal eklemin kıkırdak, kapsül, bağ ve sıvı bileşenleriyle açıklayabileceksin.',
      'Kas dokusu çeşitlerini ve iskelet kasının kas–demet–lif–miyofibril–sarkomer örgütlenmesini sıralayabileceksin.',
      'Nöromüsküler kavşaktan Ca²⁺ salınmasına ve çapraz köprü döngüsüne kadar kasılma basamaklarını kurabileceksin.',
      'Sarkomer kasılırken A bandı, I bandı, H bölgesi, Z çizgileri ve filament boylarında ne olduğunu çıkarabileceksin.',
      'Motor birim katılımı, uyarı sıklığı, enerji sistemleri, yorgunluk ve antagonistik kas çalışmasını yorumlayabileceksin.',
    ],
    sections: [
      {
        id: 'dh-giris', kind: 'opening', title: 'Hareket tek organın işi değil, kapalı bir kontrol döngüsüdür',
        lead: 'Kas kuvvet üretir, tendon kuvveti kemiğe taşır, eklem hareket eksenini belirler; sinir sistemi ise ne kadar ve ne zaman kasılacağını ayarlar.',
        blocks: [
          { id: 'dh-giris-prose', type: 'prose', body: `Ayağa kalkmak gibi sıradan bir hareket bile birden çok düzeyin eş güdümünü gerektirir. Motor korteks ve omurilik devreleri iskelet kaslarına komut gönderir. Kas liflerinde kimyasal enerji mekanik kuvvete çevrilir. **Tendon**, kası kemiğe bağlayarak bu kuvveti iskelete aktarır. **Eklem**, kemikler arasındaki hareketin yönünü ve sınırını belirler. Duyu reseptörlerinden gelen geri bildirim de postür ve kuvveti sürekli düzeltir.

İskelet pasif bir askı değildir. Organları korur, kaslara tutunma yüzeyi sağlar, kaldıraç görevi görür, Ca²⁺ ve fosfat deposudur; kırmızı kemik iliğinde kan hücreleri üretilir. Kemik doku yaşam boyunca yapım ve yıkımla yenilenir. Kas da yalnız kısalan bir ip değildir; sinir uyarısını alır, Ca²⁺ ile düzenlenen aktin–miyozin etkileşimini başlatır ve ATP kullanarak kuvvet üretir.

Bu konuda her soruyu dört halkayla çöz: **komut → kas kuvveti → tendon–kemik aktarımı → eklemde hareket.** Hareketin yönü ve dengesi, karşıt kas grupları ile duyu geri bildiriminin ortak sonucudur. Bir halkadaki bozukluk diğerleri sağlam olsa bile hareketi azaltabilir.` },
          { id: 'dh-giris-why', type: 'why', question: 'Kas yalnız çekebildiği hâlde eklem iki yönde nasıl hareket eder?', body: 'Bir iskelet kası aktif olarak kısalıp bağlı olduğu kemiği kendine doğru çeker; kemiği aktif biçimde itemez. Zıt yönlü hareketler için eklemin iki yanında bulunan antagonistik kaslar sırayla kasılır. Dirsek bükülürken biseps kasılıp triseps gevşer; açılırken düzen tersine döner.' },
          { id: 'dh-giris-trap', type: 'trap', title: 'Kemik–kas–eklemi bağımsız sistemler sanmak', wrong: 'Kasın tek başına hareket ettiğini, eklemin yalnız iki kemiğin temas noktası olduğunu düşünmek.', right: 'Kas kuvveti tendonla kemiğe geçer; eklem eksen ve hareket aralığı sağlar; bağlar eklemi, sinirsel geri bildirim ise hareketin dozunu denetler.', body: 'AYT’de tendon kopması, sinir hasarı veya eklem kıkırdağı bozukluğu farklı basamakları etkiler; aynı “hareket azalması” sonucuna farklı mekanizmalarla ulaşabilir.' },
          { id: 'dh-giris-audio', type: 'audio_script', body: `Harekete bakarken önce çalışan kası değil, hareket eden eklemi bul.

Sonra üç soruyu sor: Kuvveti hangi kas üretiyor? Bu kuvvet hangi tendonla hangi kemiğe geçiyor? Karşıt kas o sırada ne yapıyor?

Bu üç ok yerindeyse destek ve hareket sistemi ezberlenmiş bir iskelet resmi değil, çalışan bir mekanik devredir.` },
        ],
      },
      {
        id: 'dh-butunluk', kind: 'build', title: 'İskelet–eklem–kas: bir kaldıraç sisteminin anatomisi',
        lead: 'Kemik kaldıraç, eklem dayanak ve kas kuvvet kaynağı gibi çalışır; fakat biyolojik sistemde her parça canlı ve uyarlanabilirdir.',
        blocks: [
          { id: 'dh-butunluk-figure', type: 'figure', kind: 'hareket-butunlugu', width: 'full', title: 'Komuttan harekete dört katman', purpose: 'Eksen–üyeler iskeleti, koruma, kaldıraç ve antagonistik kas çalışmasını tek beden bağlamında göstermek.', complexity: 'high', caption: 'Her odak vücuttaki yerinde seçilir; ardından o işlevi açıklayan ayrı mekanik veya anatomik sahne açılır.', focus: [
            { title: 'Eksen ve üyeler iskeleti', body: 'Kafatası, omurga ve göğüs kafesi eksen iskeletini; omuz–kalça kemerleri ile kol ve bacaklar üyeler iskeletini oluşturur. Biri merkezî destek–koruma, diğeri hareketle güçlü ilişkilidir.' },
            { title: 'Destek, koruma ve depo', body: 'Kafatası beyni, omurga omuriliği, göğüs kafesi kalp ve akciğerleri korur. Kemik matriksi Ca²⁺–fosfat deposu, kırmızı ilik kan hücresi üretim alanıdır.' },
            { title: 'Kaldıraç ve eklem ekseni', body: 'Kemik kaldıraç kolu, eklem dönme noktası, kas kuvvet kaynağıdır. Kasın kemiğe bağlandığı yer ve yükün konumu hareket hızını ve kuvvet avantajını değiştirir.' },
            { title: 'Antagonistik kas çifti', body: 'Bir kas eklemi bükerken karşıtı kontrollü biçimde gevşer; ters yönde roller değişir. Eş zamanlı hafif kasılma eklem kararlılığına katkı verir.' },
          ] },
          { id: 'dh-butunluk-prose', type: 'prose', body: `İnsan iskeleti iki ana bölümde incelenir. **Eksen iskeleti** kafatası, omurga ve göğüs kafesinden oluşur; vücudun merkezî eksenini destekler ve yaşamsal organları korur. **Üyeler iskeleti** omuz ve kalça kemerleri ile kol–bacak kemiklerini içerir; geniş hareket kapasitesi sağlar. Omuz kemeri hareketliliği artırırken kalça kemeri gövde ağırlığını alt üyeye aktarmak için daha kararlı bir bağlantı kurar.

Kaldıraç sisteminde kuvvet kazancı ile hareket hızı/mesafesi arasında değiş tokuş vardır. İnsanda birçok eklemde kasın yapışma noktası ekleme yakın olduğundan kas büyük kuvvet üretmek zorunda kalabilir; karşılığında el veya ayak daha geniş yol ve hız kazanır. Bu nedenle “kas yükten güçlü görünmüyorsa hareket edemez” şeklindeki yalnız boyuta dayalı yorum yanlıştır.

Bağ dokusu bileşenlerini ayır: **tendon kası kemiğe**, **ligament (bağ) kemiği kemiğe** bağlar. Tendon kas kuvvetini aktarır; ligament eklem yüzlerinin aşırı ayrılmasını sınırlar. İkisinin de kollajen lifleri yük taşır fakat görev ve bağlantı uçları aynı değildir.` },
          { id: 'dh-butunluk-table', type: 'table', title: 'Yapı–bağlantı–işlev haritası', columns: ['Yapı', 'Neyi bağlar/oluşturur?', 'Temel sonuç'], rows: [
            ['Tendon', 'Kas → kemik', 'Kas kuvvetini iskelete aktarır'],
            ['Ligament', 'Kemik → kemik', 'Eklemi sınırlar ve kararlı tutar'],
            ['Kıkırdak', 'Eklem yüzünü örter veya esnek destek kurar', 'Sürtünme ve darbe yükünü azaltır'],
            ['Sinovyal sıvı', 'Oynar eklem boşluğu', 'Yağlama ve eklem kıkırdağının beslenmesine katkı'],
            ['Kemik', 'İskelet kaldıraçları', 'Destek, koruma, depo ve hareket'],
          ], caption: 'Bağlantının iki ucunu belirlemek tendon–ligament sorularını hızla çözer.' },
          { id: 'dh-butunluk-check', type: 'checkpoint', question: 'Dirsek bükülürken bisepsin tendonu koparsa motor sinir ve kas lifleri sağlam olsa bile hareket neden zayıflar?', hint: 'Kuvvet üretimi ile kemiğe aktarımı ayır.', answer: 'Kas lifleri kasılsa bile üretilen kuvvet tendon üzerinden ön kol kemiğine etkili biçimde aktarılamaz. Sorun komut veya kuvvet üretiminde değil, kas–kemik bağlantı halkasındadır.' },
        ],
      },
      {
        id: 'dh-kemik', kind: 'deepen', title: 'Kemik doku: sert matrisin içinde yaşayan yenileme sistemi',
        lead: 'Kemiğin sert olması cansız olduğu anlamına gelmez; damar, hücre ve matriks sürekli yük ve mineral dengesine yanıt verir.',
        blocks: [
          { id: 'dh-kemik-figure', type: 'figure', kind: 'kemik-doku', width: 'full', title: 'Uzun kemikten osteona ve yenilenmeye', purpose: 'Uzun kemiğin bölgelerini, kompakt–süngerimsi dokuyu, osteonu ve hücresel yeniden şekillenmeyi birlikte göstermek.', complexity: 'high', caption: 'Ana kesitte seçilen her yapı, kendi doku mimarisi veya yapım–yıkım sahnesiyle açıklanır.', focus: [
            { title: 'Uzun kemiğin bölgeleri', body: 'Epifiz uçları eklem kıkırdağıyla örtülür ve süngerimsi doku taşır; diyafiz kompakt duvar ve ilik boşluğu bakımından belirgindir. Periost dış yüzeyi sarar.' },
            { title: 'Kompakt ve süngerimsi kemik', body: 'Kompakt kemik yoğun osteonlarla dayanıklıdır. Süngerimsi kemik trabekülleri yük çizgilerine göre düzenlenir; hafif yapı içinde ilik boşlukları bırakır.' },
            { title: 'Osteon, damar ve hücreler', body: 'Osteon merkez kanal çevresinde halkalı matrikstir. Lakünlerde osteositler, kanalcıklarda uzantıları bulunur; damarlar besin ve gaz taşır.' },
            { title: 'Yapım–yıkım ve mineral dengesi', body: 'Osteoblast matriks yapar, osteoklast kemik yıkar, osteosit matriksi izler. Yük, hormon, Ca²⁺–fosfat ve yaş bu dengeyi etkiler.' },
          ] },
          { id: 'dh-kemik-prose', type: 'prose', body: `Uzun kemiğin gövdesi **diyafiz**, uçları **epifiz** olarak adlandırılır. Büyüme döneminde aradaki epifiz plağı boyuna uzamayı sağlar; büyüme tamamlandığında kemikleşir. Dıştaki **periost**, damar–sinirler ve kemik yapıcı öncül hücreler taşır; tendon ve bağların tutunmasına katkı verir. Eklem yüzünde periost yerine hiyalin eklem kıkırdağı bulunur.

Kemik matriksinin organik bölümündeki kollajen çekmeye karşı esneklik, inorganik hidroksiapatit kristalleri basınca karşı sertlik sağlar. Mineral uzaklaştırılırsa kemik esnekleşir; organik kısım bozulursa kırılganlaşır. Bu iki bileşen birlikte kompozit dayanıklılık oluşturur.

**Kompakt kemik** özellikle diyafiz duvarında yoğundur. Temel birimi olan osteonda merkezî Havers kanalı çevresinde konsantrik lameller bulunur; Volkmann kanalları komşu damar yollarını bağlar. **Süngerimsi kemik**, trabekül adı verilen ince kirişlerden oluşur; epifizlerde ve yassı kemiklerin içinde belirgindir. Trabeküller yük yönlerine göre yeniden düzenlenebilir.

Osteoblastlar organik kemik matriksini üretir ve mineral birikimini destekler. Matriks içinde kalan olgun hücreler osteosite dönüşür. Çok çekirdekli osteoklastlar mineral ve matriksi parçalayarak kemik rezorpsiyonu yapar. Bu karşıt süreçler büyüme, kırık onarımı, mekanik uyum ve kan Ca²⁺ dengesinde birlikte çalışır. **Kırmızı kemik iliği** kan hücresi üretir; **sarı ilik** yağ bakımından zengindir.` },
          { id: 'dh-kemik-compare', type: 'compare', title: 'Kemik hücreleri', columns: ['Ana iş', 'Sınavda beklenen sonuç'], rows: [
            { label: 'Osteoblast', values: ['Yeni organik matriks üretimi ve mineralizasyona destek', 'Yapım baskınsa kemik kütlesi artma yönündedir'] },
            { label: 'Osteoklast', values: ['Kemik matriksini parçalama/rezorpsiyon', 'Kana mineral geçişi ve yeniden şekillenme artabilir'] },
            { label: 'Osteosit', values: ['Olgun matriksi sürdürme ve mekanik yükü algılama', 'Kanalcıklarla hücre–damar iletişimi kurar'] },
          ], insight: 'Osteoblast ile osteoklast düşman değil; sağlıklı kemik ikisinin yer ve zamanda eş güdümlü çalışmasıyla yenilenir.' },
          { id: 'dh-kemik-example', type: 'worked_example', title: 'Kemiğin iki bileşenini deneyle ayır', question: 'Bir kemik asitte bekletildiğinde bükülebiliyor; başka bir kemik uzun süre yakıldığında kolay kırılıyor. Neden?', steps: [
            { title: 'Asit deneyini yorumla', body: 'Asit mineral tuzları uzaklaştırır; kollajen ağı kaldığı için sertlik azalır, esneklik belirginleşir.' },
            { title: 'Yakma deneyini yorumla', body: 'Yüksek ısı organik kollajeni bozar; mineral kısım kalsa da çekmeye karşı dayanıklılık ve tokluk kaybolur.' },
            { title: 'Birleştir', body: 'Kemik dayanıklılığı organik esneklik ile inorganik sertliğin ortak ürünüdür.' },
          ], answer: 'Asit mineral sertliği, yakma organik esnekliği ortadan kaldırır; tek başına kalan bileşen sağlıklı kemiğin mekanik özelliklerini veremez.', takeaway: 'Kollajen = çekmeye karşı esneklik; mineral = basınca karşı sertlik.' },
        ],
      },
      {
        id: 'dh-kikirdak-eklem', kind: 'deepen', title: 'Kıkırdak ve eklem: hareketliliği sürtünmesiz, kontrollü ve kararlı kıl',
        lead: 'Hareket için yalnız boşluk yetmez; eklem yüzü, kapsül, bağ, sıvı ve çevre kaslar aynı yükü paylaşır.',
        blocks: [
          { id: 'dh-eklem-figure', type: 'figure', kind: 'kikirdak-eklem', width: 'full', title: 'Kıkırdak tipleri ve sinovyal eklem', purpose: 'Kıkırdakların işlevsel farklarını, eklem sınıflarını ve oynar eklemin yük azaltan mimarisini göstermek.', complexity: 'high', caption: 'Her odak ana eklem bağlamından ayrılıp doku kesiti, hareket ekseni veya yaralanma mekanizmasıyla derinleşir.', focus: [
            { title: 'Hiyalin, elastik ve lifli kıkırdak', body: 'Hiyalin eklem yüzü ve solunum yollarında; elastik kulak kepçesi gibi esnek yapılarda; lifli kıkırdak omurlar arası disk ve menisküste yüksek çekme–basınç yükünde bulunur.' },
            { title: 'Oynamaz, yarı oynar, oynar', body: 'Kafatası sütürleri oynamaz; omurlar arası bağlantılar sınırlı; sinovyal omuz, dirsek, diz gibi eklemler geniş hareketlidir.' },
            { title: 'Sinovyal eklemin anatomisi', body: 'Eklem kıkırdağı, kapsül, sinovyal zar–sıvı ve bağlar yüzleri korur. Bazı eklemlerde menisküs ve bursa yük dağılımına katkı verir.' },
            { title: 'Hareket, yük ve yaralanma', body: 'Ligament burkulmada, tendon zorlanmada, eklem kıkırdağı aşınmada etkilenebilir. Hareket yönü eklem yüzü ve bağlarla sınırlanır.' },
          ] },
          { id: 'dh-eklem-prose', type: 'prose', body: `Kıkırdak dokuda kondrositler lakünlerde bulunur; matriks su, proteoglikan ve lif bakımından zengindir. Kan damarı taşımadığı için beslenme çevre dokudan difüzyonla olur ve onarımı genellikle yavaştır. **Hiyalin kıkırdak** düzgün, basınca dayanıklı yüzey oluşturur; eklem uçları, kaburga–sternum bağlantısı, soluk borusu ve gelişmekte olan iskelette görülür. **Elastik kıkırdak** elastik liflerle biçimini koruyarak bükülebilir; kulak kepçesi ve epiglot örnektir. **Lifli kıkırdak** kalın kollajen demetleriyle yüksek çekme ve basınç yükü taşır; omurlar arası disk ve diz menisküsünde bulunur.

Eklemler hareket derecesine göre oynamaz, yarı oynar ve oynar olarak sınıflanabilir. Oynar, yani **sinovyal eklemde** kemik uçları hiyalin kıkırdakla kaplıdır. Eklem kapsülünün iç sinovyal zarı sıvı üretir. Sinovyal sıvı yüzeyleri yağlar, basıncı dağıtır ve damarsız eklem kıkırdağının beslenmesine katkı verir. Ligamentler aşırı hareketi sınırlar; çevre kas–tendonlar aktif kararlılık sağlar.

Eklemin geniş hareketli olması her yönde aynı serbestlik demek değildir. Menteşe tipi dirsek ağırlıklı olarak bükülme–açılma, küre–yuva tipi omuz çok eksenli hareket sağlar. Omzun hareketliliği yüksek ama kemiksel kararlılığı görece düşüktür; kalça daha derin yuva ve güçlü bağlarla kararlıdır. Yapı–işlev dengesi sınavda “hareketlilik arttıkça çıkık riski kesin azalır” gibi yanlış genellemeleri çürütür.` },
          { id: 'dh-eklem-table', type: 'table', title: 'Kıkırdak tiplerini yerden tanı', columns: ['Tip', 'Matriks özelliği', 'Örnek ve işlev'], rows: [
            ['Hiyalin', 'İnce kollajen, düzgün ve basınca dayanıklı', 'Eklem yüzü; sürtünmeyi azaltma'],
            ['Elastik', 'Elastik lifçe zengin', 'Kulak kepçesi; bükülüp biçime dönme'],
            ['Lifli', 'Kalın kollajen demetleri', 'Disk/menisküs; çekme ve darbeye dayanma'],
          ], caption: 'Kıkırdak tipi; bulunduğu yerdeki baskın mekanik gereksinimi yansıtır.' },
          { id: 'dh-eklem-trap', type: 'trap', title: 'Sinovyal sıvıyı yalnız “kaygan yağ” saymak', wrong: 'Sıvının tek görevinin eklem yüzlerini kaydırmak olduğunu düşünmek.', right: 'Sıvı sürtünmeyi azaltır, yük dağılımına ve damarsız eklem kıkırdağının beslenmesine katkı verir.', body: 'Hareketsizlikte sıvı dolaşımı ve kıkırdak beslenmesi de olumsuz etkilenebilir; uygun mekanik yük doku sağlığının parçasıdır.' },
        ],
      },
      {
        id: 'dh-kas-yapi', kind: 'deepen', title: 'İskelet kası: organdan sarkomere hiyerarşi',
        lead: 'Kuvvetin kaynağı sarkomerdir; fakat kuvvetin yönü ve büyüklüğü tüm kasın bağ dokusu, motor birim ve tendon düzeniyle belirlenir.',
        blocks: [
          { id: 'dh-kas-yapi-figure', type: 'figure', kind: 'iskelet-kasi-yapi', width: 'full', title: 'Kas, lif, miyofibril ve motor birim', purpose: 'Kasın hiyerarşik paketlenmesini, üç kas dokusunu, nöromüsküler kavşağı ve motor birimi birlikte kurmak.', complexity: 'high', caption: 'Seçilen katman ana kas bağlamından çıkarılıp hücresel veya sinir–kas ayrıntısını gösteren yeni sahneye dönüşür.', focus: [
            { title: 'Üç kas dokusu', body: 'İskelet kası çizgili–istemli ve çok çekirdekli; kalp kası çizgili–istemsiz, dallanmış ve ara diskli; düz kas çizgisiz–istemsizdir.' },
            { title: 'Kas → demet → lif → miyofibril', body: 'Bağ dokusu katmanları tüm kası, fasikülü ve lifi sarar. Uzun çok çekirdekli liflerde miyofibriller paralel uzanır; tendonla kuvvet bütünleşir.' },
            { title: 'Sarkomer ve filament düzeni', body: 'Z çizgileri arasındaki sarkomerde ince aktin ve kalın miyozin filamentleri kısmen örtüşür. Düzenli tekrar çizgili görünümü oluşturur.' },
            { title: 'Nöromüsküler kavşak ve motor birim', body: 'Motor nöron ACh ile kas lifini uyarır. Bir motor nöron ve bağlandığı tüm lifler motor birimdir; ince hareketlerde motor birimler küçüktür.' },
          ] },
          { id: 'dh-kas-yapi-prose', type: 'prose', body: `Kas dokuları aktin–miyozin etkileşimiyle kuvvet üretse de örgütlenmeleri farklıdır. **İskelet kası** uzun, silindirik, çok çekirdekli ve enine çizgilidir; somatik motor nöronlarla uyarılır. **Kalp kası** çizgili fakat dallanmış hücrelerden oluşur, çoğunlukla tek çekirdeklidir ve ara disklerle elektriksel–mekanik bağ kurar. **Düz kas** iğ biçimli, tek çekirdekli ve çizgisizdir; iç organ duvarlarında yavaş, uzun süreli kasılmalar yapabilir.

İskelet kası dıştan epimisyumla, kas demetleri perimisyumla, tek kas lifleri endomisyumla sarılır. Bu bağ dokuları kasılma kuvvetini tendonlara toplar. Kas lifi özel bir hücredir; zarı **sarkolemma**, sitoplazması **sarkoplazma** olarak adlandırılır. Sarkoplazmik retikulum Ca²⁺ depolar; T tübülleri zar uyarısını lifin derinine taşır.

Her lifte çok sayıda **miyofibril**, her miyofibrilde art arda sarkomer bulunur. Kalın filamentin ana motor proteini miyozin; ince filament aktin, tropomiyozin ve troponin kompleksini içerir. Z çizgisi aktini sınırlar; A bandı kalın filament uzunluğunu, I bandı yalnız ince filament alanını, H bölgesi yalnız kalın filament alanını temsil eder. M çizgisi kalın filamentlerin merkez düzenine katkı verir.

Bir motor nöron akson ucu ile kas lifi arasındaki sinaps **nöromüsküler kavşaktır**. Salınan asetilkolin kas zarında uyarı başlatır. Aynı motor nöronun uyardığı tüm kas lifleri bir **motor birim** oluşturur. Göz ve parmak gibi ince kontrol gereken kaslarda bir motor nöron az; kaba kuvvet kaslarında daha çok lif yönetebilir.` },
          { id: 'dh-kas-yapi-compare', type: 'compare', title: 'Üç kas dokusu', columns: ['İskelet kası', 'Kalp kası', 'Düz kas'], rows: [
            { label: 'Görünüm', values: ['Çizgili, uzun lif', 'Çizgili, dallanmış', 'Çizgisiz, iğ biçimli'] },
            { label: 'Çekirdek', values: ['Çok, çevresel', 'Genellikle 1–2, merkezî', 'Tek, merkezî'] },
            { label: 'Kontrol', values: ['Somatik/istemli başlatılabilir', 'İstemsiz, ritmik', 'İstemsiz, yavaş'] },
            { label: 'Özel yapı', values: ['Motor uç plak, çok miyofibril', 'Ara diskler', 'Sarkomer düzeni yok'] },
          ], insight: 'Çizgili görünüm “istemli” demek değildir; kalp kası çizgili olmasına rağmen istemsiz çalışır.' },
        ],
      },
      {
        id: 'dh-kasilma', kind: 'deepen', title: 'Kasılma: filamentler kısalmaz, birbirinin üzerine kayar',
        lead: 'Ca²⁺ bağlanma bölgelerini açar; miyozin başı ATP enerjisiyle aktini çeker; binlerce çapraz köprü sarkomeri kısaltır.',
        blocks: [
          { id: 'dh-kasilma-figure', type: 'figure', kind: 'kas-kasilma', width: 'full', title: 'Uyarıdan gevşemeye kayma modeli', purpose: 'Nöromüsküler uyarı, Ca²⁺ düzeni, çapraz köprü–ATP döngüsü ve sarkomer bant değişimini sıraya koymak.', complexity: 'high', caption: 'Her aşama ana kasılma levhasından ayrılıp moleküler bağlamı koruyan ayrı bir mekanizma sahnesinde açıklanır.', focus: [
            { title: 'Motor uç plak ve Ca²⁺ salınması', body: 'ACh kas zarında impuls başlatır; T tübülleri uyarıyı içe taşır ve sarkoplazmik retikulumdan Ca²⁺ sitoplazmaya verilir.' },
            { title: 'Troponin–tropomiyozin anahtarı', body: 'Ca²⁺ troponine bağlanınca tropomiyozin yer değiştirir ve aktindeki miyozin bağlanma bölgeleri açılır.' },
            { title: 'Çapraz köprü ve ATP döngüsü', body: 'Miyozin aktine bağlanır, güç vuruşu yapar; yeni ATP bağlanması miyozini aktinden ayırır. ATP hidrolizi başı yeniden kurar.' },
            { title: 'Bantlar ve gevşeme', body: 'Z çizgileri yaklaşır; I ve H daralır, A bandı ve filament boyları değişmez. Ca²⁺ pompalanınca bağlanma bölgeleri kapanır ve kas gevşer.' },
          ] },
          { id: 'dh-kasilma-prose', type: 'prose', body: `Motor nöron impulsu akson ucuna geldiğinde Ca²⁺ bağımlı olarak asetilkolin salınır. ACh motor uç plak reseptörlerini uyarır ve kas zarında aksiyon potansiyeli başlar. Uyarı T tübülleriyle lifin derinine ilerler; sarkoplazmik retikulum Ca²⁺ kanallarını açar. Sitoplazmik Ca²⁺ artışı kasılma anahtarını çevirir.

Dinlenmede tropomiyozin aktin üzerindeki miyozin bağlanma bölgelerini örter. Ca²⁺ **troponine** bağlanınca tropomiyozin çekilir. Enerjice kurulmuş miyozin başı aktine bağlanır, fosfat/ADP ayrılmasıyla güç vuruşu yapar ve ince filamenti M çizgisine doğru çeker. Yeni ATP miyozin başına bağlandığında aktinden ayrılma olur; ATP hidrolizi başı yeniden yüksek enerjili konuma getirir. Ca²⁺ ve ATP sürdükçe döngü tekrarlanır.

**Kayma iplikçikleri modelinde aktin ve miyozin filamentlerinin boyu değişmez.** İnce filamentler kalın filamentler üzerinde merkeze kayar, örtüşme artar. Z çizgileri yaklaşır ve sarkomer kısalır. Yalnız ince filamentli I bandı ve yalnız kalın filamentli H bölgesi daralır; kalın filament uzunluğunu gösteren A bandı sabit kalır. Çok güçlü kasılmada H bölgesi kaybolabilir.

Uyarı kesildiğinde ACh parçalanır, Ca²⁺ aktif pompalarla sarkoplazmik retikuluma geri alınır. Troponin Ca²⁺ kaybeder, tropomiyozin bağlanma bölgelerini yeniden kapatır ve yeni çapraz köprü kurulamaz. Gevşeme pasif bir “enerjisizlik” değildir: Ca²⁺ pompaları ve çapraz köprü ayrılması ATP gerektirir. Ölüm sonrası ATP üretimi durduğunda miyozin aktinden ayrılamaz ve **ölüm katılığı** oluşur.` },
          { id: 'dh-kasilma-table', type: 'table', title: 'Sarkomer kasılırken ne değişir?', columns: ['Yapı', 'Kasılmadaki değişim', 'Neden'], rows: [
            ['Z çizgileri arası', 'Azalır', 'Sarkomer kısalır'],
            ['I bandı', 'Daralır', 'Yalnız aktinli alan küçülür'],
            ['H bölgesi', 'Daralır/kaybolabilir', 'Yalnız miyozinli alan küçülür'],
            ['A bandı', 'Değişmez', 'Kalın filament boyu sabittir'],
            ['Aktin ve miyozin boyu', 'Değişmez', 'Filamentler kısalmaz, kayar'],
            ['Örtüşme miktarı', 'Artar', 'İnce filament merkeze çekilir'],
          ], caption: 'Bant sorusunda önce “bu bölge hangi filamenti temsil ediyor?” diye sor.' },
          { id: 'dh-kasilma-example', type: 'worked_example', title: 'ATP yoksa neden gevşeme olmaz?', question: 'Kas hücresinde ATP üretimi aniden durduğunda bir süre sonra kas neden sertleşebilir?', steps: [
            { title: 'Çapraz köprüyü kontrol et', body: 'Yeni ATP miyozin başının aktinden ayrılması için gereklidir.' },
            { title: 'Ca²⁺ geri alımını kontrol et', body: 'Sarkoplazmik retikuluma Ca²⁺ pompalayan sistem de ATP harcar.' },
            { title: 'Sonucu birleştir', body: 'Miyozin bağlı kalabilir ve sitoplazmik Ca²⁺ düşürülemez; gevşeme engellenir.' },
          ], answer: 'ATP yalnız kasılma gücü için değil, çapraz köprü ayrılması ve Ca²⁺ geri pompalanması için de gereklidir.', takeaway: 'ATP yokluğu “kas çalışmaz ve gevşer” değil, bağların çözülememesi nedeniyle sertlik oluşturabilir.' },
        ],
      },
      {
        id: 'dh-enerji-kontrol', kind: 'deepen', title: 'Kuvveti ayarla: motor birim, enerji ve yorgunluk',
        lead: 'Tek lif ya hep ya hiç yanıt verir; bütün kasın kuvveti ise katılan motor birim ve uyarı sıklığıyla kademelenir.',
        blocks: [
          { id: 'dh-enerji-prose', type: 'prose', body: `Tek bir kas lifi eşik üstü uyarıda aksiyon potansiyeli ve kasılma yanıtı oluşturur; ancak tüm kasın kuvveti sabit değildir. Daha fazla **motor birim katılımı** ve aynı motor birimde daha yüksek uyarı sıklığı kuvveti artırır. Uyarılar gevşeme tamamlanmadan gelirse kasılmalar toplanır; çok sık uyarıda süreğen tetanik kasılma görülebilir. Fizyolojik tetanos, enfeksiyon hastalığı olan tetanosla aynı kavram değildir.

Kasın hazır ATP deposu birkaç saniyelik iş için sınırlıdır. **Kreatin fosfat** ADP’ye hızla fosfat aktararak ATP’yi kısa süre yeniler. Oksijen sunumu ve mitokondri kapasitesi yeterliyse aerobik solunum uzun süreli ATP sağlar. Çok yoğun kısa aktivitede anaerobik glikoliz hızlı ATP üretimine katkı verir ve laktat oluşabilir. Yorgunluğu yalnız “laktik asit birikti” cümlesine indirgeme; iyon dengesi, yakıt azalması, sinirsel sürüş, metabolitler, ısı ve mikrohasar birlikte etkili olabilir.

Kas lifi özellikleri aktiviteye göre farklılaşır. Yavaş oksidatif lifler miyoglobin, kılcal damar ve mitokondrice zengin; görece düşük kuvvetli fakat yorgunluğa dayanıklıdır. Hızlı glikolitik lifler büyük kuvvet ve hız üretir, anaerobik kapasitesi yüksek fakat daha hızlı yorulabilir. Çoğu kas birden çok lif tipini karışık taşır.

Hareket sırasında agonist kas ana kuvveti üretirken antagonist kontrollü gevşer veya hareketi frenlemek için eksantrik kasılabilir. **İzometrik kasılmada** kas kuvvet üretir fakat toplam uzunluk belirgin değişmez; duvarı itmek veya postürü korumak örnektir. **İzotonik/dinamik kasılmada** kas uzunluğu değişerek yük hareket eder. Kasılma sözcüğü her zaman kasın net kısalacağı anlamına gelmez.` },
          { id: 'dh-enerji-compare', type: 'compare', title: 'Kasın hızlı enerji kaynakları', columns: ['Hız', 'Kapasite ve kullanım'], rows: [
            { label: 'Hazır ATP', values: ['Anında', 'Çok az; ilk saniyeler'] },
            { label: 'Kreatin fosfat', values: ['Çok hızlı', 'Kısa, yüksek şiddetli iş'] },
            { label: 'Anaerobik glikoliz', values: ['Hızlı', 'Sınırlı süre; laktat ve metabolit değişimleri'] },
            { label: 'Aerobik solunum', values: ['Daha yavaş devreye girer', 'Yüksek toplam kapasite; uzun süreli aktivite'] },
          ], insight: 'Enerji yolları sırayla tamamen kapanıp açılmaz; aktivitenin şiddet ve süresine göre katkı oranları değişir.' },
          { id: 'dh-enerji-exam', type: 'exam', title: 'Kas sorusunda üç ayrı ölçek', body: 'Tek kas lifinde ya hep ya hiç kuralını, bütün kasta motor birim katılımını ve sarkomerde bant değişimini birbirine karıştırma. “Kasın kuvveti arttı” bilgisi tek impulsun büyüdüğünü değil daha sık uyarı veya daha çok motor birim çalıştığını gösterebilir.', patterns: ['Tek lif–tüm kas ayrımı', 'Toplanma ve tetanik kasılma', 'İzometrik–dinamik kasılma', 'Kreatin fosfat–glikoliz–aerobik solunum', 'Yavaş–hızlı lif', 'Agonist–antagonist'] },
          { id: 'dh-enerji-check', type: 'checkpoint', question: 'Aynı kas daha ağır bir yükü kaldırırken tek aksiyon potansiyelinin genliği neden büyümez; kuvvet nasıl artar?', hint: 'Sinir Sistemi dersindeki ya hep ya hiç kuralını motor birimlerle birleştir.', answer: 'Aksiyon potansiyeli genliği eşik üstünde sabittir. Merkezî sinir sistemi daha çok motor birimi devreye alabilir ve motor nöronların ateşleme sıklığını artırabilir; kasılma toplanmasıyla toplam kuvvet yükselir.' },
        ],
      },
      {
        id: 'dh-quiz', kind: 'practice', title: '10 soruda komuttan kuvvete',
        lead: 'Hedef 8/10. Her soruda yapının yerini, bağlantısını ve mekanik sonucunu birlikte düşün.',
        blocks: [
          { id: 'dh-q1', type: 'quiz', purpose: 'concept', question: 'Tendon ve ligament için doğru eşleştirme hangisidir?', options: ['Tendon kemik–kemik, ligament kas–kemik', 'Tendon kas–kemik, ligament kemik–kemik', 'İkisi de yalnız kas–kas bağlar', 'İkisi de sinir dokusudur'], answer_index: 1, explanation: '**Tendon kas kuvvetini kemiğe taşır; ligament kemikleri eklem çevresinde birbirine bağlar.**' },
          { id: 'dh-q2', type: 'quiz', purpose: 'recall', question: 'Kemik matriksini parçalayıp rezorpsiyon yapan hücre hangisidir?', options: ['Osteoblast', 'Osteosit', 'Osteoklast', 'Kondrosit'], answer_index: 2, explanation: 'Çok çekirdekli **osteoklast** kemik matriksini parçalar; osteoblast yeni matriks üretir.' },
          { id: 'dh-q3', type: 'quiz', purpose: 'apply', question: 'Bir kemik asitte bekletildikten sonra bükülebilir hâle geliyorsa hangi bileşen büyük ölçüde uzaklaştırılmıştır?', options: ['Kollajen lifler', 'Mineral tuzlar', 'Osteosit çekirdekleri', 'Sinovyal sıvı'], answer_index: 1, explanation: 'Asit mineral tuzları uzaklaştırır; kollajen kaldığı için sertlik azalır ve esneklik belirginleşir.' },
          { id: 'dh-q4', type: 'quiz', purpose: 'error', question: 'Sinovyal eklemle ilgili hangisi yanlıştır?', options: ['Kemik uçları eklem kıkırdağıyla örtülüdür', 'Sinovyal sıvı sürtünmeyi azaltır', 'Ligamentler aşırı hareketi sınırlayabilir', 'Eklem kıkırdağı yoğun damar ağıyla doğrudan beslenir'], answer_index: 3, explanation: 'Eklem kıkırdağı damarsızdır; beslenmesine sinovyal sıvı ve çevre dokudan difüzyon katkı verir.' },
          { id: 'dh-q5', type: 'quiz', purpose: 'recall', question: 'Aşağıdaki yapılardan hangisi bir motor birimi tanımlar?', options: ['Bir tendon ve bağlandığı kemik', 'Bir motor nöron ve uyardığı tüm kas lifleri', 'Bir sarkomer ve iki Z çizgisi', 'Bir eklem kapsülü ve sinovyal sıvı'], answer_index: 1, explanation: '**Motor birim**, bir motor nöron ile onun dallarının uyardığı bütün iskelet kası liflerinden oluşur.' },
          { id: 'dh-q6', type: 'quiz', purpose: 'apply', question: 'İskelet kası sarkomeri kasılırken hangisi değişmez?', options: ['Z çizgileri arası uzaklık', 'I bandı genişliği', 'H bölgesi genişliği', 'A bandı genişliği'], answer_index: 3, explanation: 'A bandı kalın filament boyunu gösterir ve **değişmez**; I ve H daralır, Z çizgileri yaklaşır.' },
          { id: 'dh-q7', type: 'quiz', purpose: 'concept', question: 'Ca²⁺ iskelet kasında kasılmayı doğrudan hangi yolla kolaylaştırır?', options: ['Troponine bağlanıp tropomiyozinin yerini değiştirmesiyle', 'Aktin filamentini kısaltmasıyla', 'A bandını büyütmesiyle', 'ATP üretimini tamamen durdurmasıyla'], answer_index: 0, explanation: 'Ca²⁺ troponine bağlanır; tropomiyozin çekilir ve aktindeki miyozin bağlanma bölgeleri açılır.' },
          { id: 'dh-q8', type: 'quiz', purpose: 'error', question: 'ATP’nin kas çalışmasındaki rolüyle ilgili hangisi yanlıştır?', options: ['Miyozin başının aktinden ayrılmasına yardım eder', 'Ca²⁺’ın sarkoplazmik retikuluma pompalanmasında kullanılır', 'Miyozin başının yeniden kurulmasına enerji sağlar', 'Aktin ve miyozin filamentlerini kalıcı olarak kısaltır'], answer_index: 3, explanation: 'Filamentler kısalmaz; birbirinin üzerine kayar. ATP ayrılma, yeniden kurulma ve Ca²⁺ geri alımında gereklidir.' },
          { id: 'dh-q9', type: 'quiz', purpose: 'apply', question: 'Bütün bir kasın daha büyük kuvvet üretmesinin en uygun açıklaması hangisidir?', options: ['Tek impulsun genliği büyür', 'Daha çok motor birim katılır ve uyarı sıklığı artabilir', 'A bandı uzar', 'Tüm tendonlar gevşer'], answer_index: 1, explanation: 'Tek impuls genliği sabittir; toplam kuvvet **motor birim katılımı ve frekans artışıyla** yükselir.' },
          { id: 'dh-q10', type: 'quiz', purpose: 'concept', question: 'Dirsek bükülürken antagonistik kas çifti için hangisi doğrudur?', options: ['Biseps ve triseps aynı yönde kemiği iter', 'Biseps kasılırken triseps kontrollü gevşer', 'İki kasın tendonu zorunlu olarak kopar', 'Triseps kasılırken biseps her zaman felç olur'], answer_index: 1, explanation: 'Bükülmede biseps agonist olarak kasılır; karşıtı triseps gevşer veya hareketi denetlemek için kontrollü etkinlik gösterebilir.' },
        ],
      },
      {
        id: 'dh-kapanis', kind: 'close', title: 'Hareketi tek bir mekanik–hücresel zincir olarak kapat',
        lead: 'Sinirsel komuttan ATP kullanan çapraz köprüye, tendondan eklem eksenine kadar bütün halkalar aynı hareketin farklı ölçekleridir.',
        blocks: [
          { id: 'dh-summary', type: 'summary', title: 'Bu dersten kalması gerekenler', points: [
            'Kemik destek, koruma, hareket, mineral deposu ve kan hücresi üretimi görevlerini birlikte yürütür.',
            'Tendon kası kemiğe, ligament kemiği kemiğe bağlar; sinovyal sıvı yağlama ve kıkırdak beslenmesine katkı verir.',
            'Kemik kollajenle esneklik, mineral tuzlarla sertlik kazanır; osteoblast yapar, osteoklast yıkar, osteosit matriksi sürdürür.',
            'Kompakt kemik osteonlarla yoğun, süngerimsi kemik trabeküllerle hafif ve yüke uyarlanabilir yapıdadır.',
            'Hiyalin kıkırdak düzgün eklem yüzü, elastik kıkırdak bükülebilir destek, lifli kıkırdak yüksek yük dayanımı sağlar.',
            'İskelet kası kas–demet–lif–miyofibril–sarkomer sırasıyla örgütlenir; motor birim bir nöron ve uyardığı liflerdir.',
            'Ca²⁺ troponine bağlanıp tropomiyozini çeker; miyozin–aktin çapraz köprü döngüsü ATP kullanır.',
            'Kasılmada Z çizgileri yaklaşır, I ve H daralır; A bandı ve filament boyları değişmez.',
            'Gevşeme de ATP gerektirir: çapraz köprü ayrılır ve Ca²⁺ sarkoplazmik retikuluma pompalanır.',
            'Bütün kas kuvveti motor birim katılımı ve uyarı sıklığıyla; hareket yönü agonist–antagonist eş güdümüyle ayarlanır.',
          ] },
          { id: 'dh-memory', type: 'memory', title: 'Dört sınav kancası', body: '**Tendon kas–kemik, ligament kemik–kemik. Blast yapar, klast kırar. Kasılmada I ve H daralır, A aynı kalır. Ca açar; ATP ayırır ve Ca’yı geri toplar.**' },
          { id: 'dh-final-exam', type: 'exam', title: 'Son 30 saniye kontrolü', body: 'Kasılma sorusunda önce ölçeği seç: tek lif mi, bütün kas mı, sarkomer mi? Eklem sorusunda bağlantı uçlarını; kemik sorusunda organik–inorganik matriksi; hareket sorusunda agonist–antagonist yönünü işaretle.', patterns: ['Komut → Ca²⁺ → çapraz köprü → tendon → eklem', 'Osteoblast–osteoklast karşıtlığı', 'Kıkırdak tipi–mekanik gereksinim', 'A–I–H bant değişimi', 'Tek lif–motor birim–tüm kas ayrımı', 'Aerobik–anaerobik enerji katkısı'] },
          { id: 'dh-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Sindirim Sistemi**. Besinin mekanik ve kimyasal sindirimini; enzim, organ, emilim yüzeyi ve dolaşıma katılma yollarını ağızdan ince bağırsağa izleyerek kuracağız.', topics: ['Sindirim kanalının anatomisi', 'Enzimler ve besinlerin parçalanması', 'Karaciğer–pankreas', 'İnce bağırsakta emilim'] },
          { id: 'dh-close-audio', type: 'audio_script', body: `Dersi bitirirken hareket zincirini yüksek sesle söyle.

Motor nöron kas lifini uyarır. Sarkoplazmik retikulum kalsiyum verir. Kalsiyum bağlanma bölgelerini açar. Miyozin ATP kullanarak aktini çeker. Tendon kuvveti kemiğe aktarır. Eklem hareket eder ve karşıt kas yönü denetler.

Şimdi bantları kapat: Z yaklaşır, I ve H daralır, A aynı kalır. Bu zincir tamamsa kasılma modeli hazırdır.` },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
