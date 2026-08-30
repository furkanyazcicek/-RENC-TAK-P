/**
 * TYT BİYOLOJİ · Canlıların Temel Bileşenleri — 2. Bölüm
 * ORGANİK BİLEŞİKLER I: KARBONHİDRATLAR VE LİPİTLER
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ders, karbonhidratla değil MONOMER–POLİMER mantığıyla başlıyor.
 *   Dehidrasyon ve hidroliz bir kez kurulursa karbonhidrat, lipit,
 *   protein ve nükleik asit ayrı ayrı ezberlenmiyor; dördü de aynı
 *   iskeletin üzerine oturuyor. Bu yüzden `sentez-hidroliz` şeması
 *   bilinçli olarak konunun en başına konuldu.
 *
 * · "n monomerden n−1 su" hesabı ayrı bir çözümlü örnekle veriliyor.
 *   TYT'de doğrudan hesaplatılan yer burası ve öğrencilerin çoğu
 *   monomer sayısı kadar su çıktığını sanıyor.
 *
 * · Nişasta–glikojen–selüloz karşılaştırmasının asıl mesajı "aynı
 *   monomer, farklı bağ" fikri. Selülozun sindirilememesinin sebebinin
 *   sertlik değil ENZİM YOKLUĞU olduğu özellikle vurgulanıyor.
 *
 * · Steroidlerin yağ asidi İÇERMEDİĞİ ayrıca işaretlendi; "bütün
 *   lipitler gliserol + yağ asidinden oluşur" yaygın ve puan kaybettiren
 *   bir aşırı genelleme.
 *
 * · Fosfolipit bölümü bilerek "Hücre" konusuna köprü olacak biçimde
 *   yazıldı; zar yapısı orada sıfırdan değil buradan devam edecek.
 */

export default {
  slug: 'temel-bilesenler-karbonhidrat-lipit',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Temel Bileşenleri',
  },
  order: 2,
  partLabel: '2. Bölüm',
  goldStandard: true,
  title: 'Karbonhidratlar ve Lipitler: Yakıt, Depo ve Yapı',
  subtitle:
    'Dört büyük organik molekülün hepsi aynı iki tepkimeyle kurulup yıkılır. Önce o iki tepkimeyi öğren; gerisi tekrar olacak.',

  document: {
    version: 2,
    estimated_minutes: 30,
    prerequisites: [
      {
        topic: 'İnorganik Bileşikler (1. Bölüm)',
        why: 'Dehidrasyon ve hidrolizin merkezinde su var; suyun rolünü bilmeden bu tepkimeler havada kalır.',
      },
      {
        topic: 'Canlıların Ortak Özellikleri — metabolizma',
        why: 'Anabolizma–katabolizma ayrımı bu derste sürekli kullanılacak.',
      },
    ],
    outcomes: [
      'Dehidrasyon sentezi ile hidrolizi karşılaştırıp hangisinin enerji harcadığını söyleyebileceksin.',
      'n monomerden kaç su açığa çıktığını hesaplayabileceksin.',
      'Karbonhidratları mono–di–polisakkarit olarak sınıflandırıp örnek verebileceksin.',
      'Nişasta, glikojen ve selülozun aynı monomerden oluşup neden farklı işler yaptığını açıklayabileceksin.',
      'Lipit çeşitlerini ayırt edip steroidlerin neden farklı olduğunu söyleyebileceksin.',
      'Fosfolipitin yapısından yola çıkarak hücre zarının neden çift tabakalı olduğunu gerekçelendirebileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'kl-giris',
        kind: 'opening',
        title: 'Dört molekül grubu, tek kurulum mantığı',
        lead: 'Bu bölüme karbonhidratla başlamıyoruz. Önce dört grubun da ortak olan kurulma biçimini öğreneceğiz — sonrası çok kolaylaşacak.',
        blocks: [
          {
            id: 'kl-giris-1',
            type: 'prose',
            body: `Organik bileşikler dört büyük grupta toplanır: **karbonhidratlar, lipitler, proteinler ve nükleik asitler**. Bir önceki bölümde gördüğün inorganiklerden farkları, ==karbon–hidrojen iskeleti taşımaları== ve canlılar tarafından üretilebilmeleridir.

İlk bakışta bu dört grup birbirinden çok farklı görünür: nişasta, zeytinyağı, hemoglobin ve DNA aynı listede ne arıyor?

Ortak noktaları şu: dördü de **büyük moleküllerdir** ve dördü de küçük yapı taşlarının birbirine eklenmesiyle kurulur. Yapı taşına **monomer**, kurulan büyük moleküle **polimer** denir.

Daha da önemlisi: dördünün de kurulma ve yıkılma tepkimesi **aynıdır**. Bu yüzden bu iki tepkimeyi bir kez öğrendiğinde, kalan üç grubu ayrı ayrı ezberlemek zorunda kalmayacaksın.`,
          },
          {
            id: 'kl-giris-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Lipitler bu genellemenin kenarında durur: klasik anlamda monomer–polimer yapısı göstermezler. Ama yağların kurulması da yine su açığa çıkararak olur, o yüzden aynı mantığa girerler.',
          },
          {
            id: 'kl-giris-why',
            type: 'why',
            question: 'Canlı neden büyük moleküller yapma zahmetine giriyor? Küçükler yetmez mi?',
            body: `Üç somut sebebi var ve üçü de sınavda karşına çıkabilecek mantıkta.

**Birincisi: depolama.** Bir hücre binlerce glikoz molekülünü serbest hâlde tutamaz. Glikoz suda çözünür ve çözünen her molekül hücrenin ==ozmotik dengesini== bozar; hücre su çekmeye başlar. Aynı glikozlar nişasta veya glikojen olarak birleştirildiğinde çözünmez hâle gelir ve ozmotik sorun ortadan kalkar.

**İkincisi: yapı.** Küçük moleküllerle duvar örülmez. Bitkinin hücre duvarını, örümceğin ağını, saçındaki keratini ancak uzun zincirler oluşturabilir.

**Üçüncüsü: bilgi.** Dört farklı nükleotidi belirli bir sırayla dizersen ortaya bir mesaj çıkar. Tek tek nükleotidin taşıdığı bir bilgi yoktur; ==bilgi diziliştedir==. DNA'nın çalışma mantığı budur.

Yani polimerleşme sadece "büyütmek" değil; depolama, dayanıklılık ve bilgi taşıma problemlerini aynı anda çözen bir strateji.`,
          },
          {
            id: 'kl-giris-prose2',
            type: 'prose',
            body: `Bir başka noktaya dikkat: bu dört grup canlıda **eşit miktarda** bulunmaz ve görevleri de birbirinin yerine geçmez.

Suyu saymazsak bir hücrenin kuru ağırlığının en büyük kısmını **proteinler** oluşturur. Buna rağmen protein birincil yakıt değildir — hücre proteini ancak karbonhidrat ve yağ tükendiğinde enerji için kullanır, çünkü protein yakmak yapı taşlarını harcamak demektir.

Bu bölümde ilk iki grubu, yani ==enerji ve yapı işini üstlenen== karbonhidrat ile lipiti inceleyeceğiz. Proteinler ve nükleik asitler bir sonraki bölümde.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-sentez',
        kind: 'build',
        title: 'İki tepkime: dehidrasyon sentezi ve hidroliz',
        lead: 'Bu bölüm dersin omurgası. Buradaki şemayı anlarsan konunun yarısını bitirdin sayılır.',
        blocks: [
          {
            id: 'kl-sentez-figure',
            type: 'figure',
            kind: 'sentez-hidroliz',
            width: 'full',
            title: 'Dehidrasyon sentezi ve hidroliz',
            purpose:
              'Dört organik molekül grubunun da aynı iki tepkimeyle kurulup yıkıldığını tek görselde göstermek ve su–bağ ilişkisini kurmak.',
            complexity: 'medium',
            caption:
              'İki tepkime birbirinin tersidir. Kurulan **her bağ için bir su açığa çıkar**; kopan her bağ için bir su harcanır. Bu ilişki bütün hesapların temeli.',
            focus: [
              {
                title: 'Dehidrasyon sentezi',
                body: 'İki monomer birleşirken birinden −H, diğerinden −OH ayrılır ve bunlar su olarak açığa çıkar. Bağ kurmak enerji gerektirir; bu yüzden tepkime ATP harcar ve anabolizmadır.',
              },
              {
                title: 'Hidroliz',
                body: 'Bağı koparmak için araya bir su molekülü girer; −H bir tarafa, −OH diğer tarafa eklenir. Enerji açığa çıkar, tepkime katabolizmadır. Sindirim tam olarak budur.',
              },
            ],
            audio_script: `Bu şemaya üstten başla.

Solda iki monomer var. Aralarında bir ok ve okun sonunda birleşmiş hâlleri. Şimdi sağdaki mavi daireye bak: bir su molekülü açığa çıkmış.

Şunu aklına kazı: su, monomerlerin içinden çıktı. Dışarıdan gelmedi. Birinden hidrojen, diğerinden hidroksil koptu ve birleşip su oldu. Geriye kalan uçlar birbirine bağlandı.

Şimdi alttaki satıra geç. Aynı olay tersine dönüyor. Bağı koparmak için araya bir su molekülü giriyor.

Bir saniye dur ve şunu düşün: yemek yediğinde vücudunda hangi tepkime çalışıyor?

Cevap: hidroliz. Sindirim, hidrolizin ta kendisi. Ekmekteki nişastayı glikozlara ayıran şey, araya giren su molekülleri.

Ve tersi: vücudun glikojen depoladığında dehidrasyon sentezi çalışıyor, su açığa çıkıyor.`,
          },
          {
            id: 'kl-sentez-prose',
            type: 'prose',
            body: `Şemadaki ilişkiyi bir kurala çevirelim, çünkü sınavda bunu hesaplaman istenir.

**n tane monomer** düz bir zincir hâlinde birleştiğinde kurulan bağ sayısı **n − 1**'dir. Her bağ için bir su açığa çıktığına göre:

- açığa çıkan su sayısı = **n − 1**
- polimerin kütlesi = monomerlerin toplam kütlesi − açığa çıkan suyun kütlesi

Aynı polimer tamamen hidroliz edilirse bu kez **n − 1 tane su harcanır** ve geriye n tane monomer kalır.

==Sık yapılan hata monomer sayısı kadar su saymaktır.== 5 monomer birleşince 5 değil, 4 su çıkar — çünkü 5 halka arasında 4 bağlantı noktası vardır.`,
          },
          {
            id: 'kl-sentez-worked',
            type: 'worked_example',
            title: 'Su ve kütle hesabı',
            prompt:
              '120 tane glikozun (her biri 180 g/mol) birleşmesiyle bir nişasta molekülü oluşuyor. Açığa çıkan su sayısı ve oluşan nişastanın kütlesi nedir? (H₂O = 18 g/mol)',
            steps: [
              {
                title: 'Bağ sayısını bul',
                body: '120 monomer düz bir zincirde birleşiyor. Bağ sayısı monomer sayısının bir eksiğidir: 120 − 1 = **119 bağ**.',
              },
              {
                title: 'Su sayısını yaz',
                body: 'Her bağ için bir su açığa çıkar. Yani **119 su** oluşur. (120 değil — burası en çok kaybedilen adım.)',
              },
              {
                title: 'Monomerlerin toplam kütlesini hesapla',
                body: '120 × 180 = 21.600 g/mol.',
              },
              {
                title: 'Açığa çıkan suyu düş',
                body: '119 × 18 = 2.142 g/mol. Nişastanın kütlesi: 21.600 − 2.142 = **19.458 g/mol**.',
              },
            ],
            answer: '119 su açığa çıkar; oluşan nişastanın kütlesi 19.458 g/mol olur.',
            takeaway:
              'Polimer, monomerlerin toplamından **hafiftir** — çünkü her bağda bir su ayrılıp gider. Sınavda "polimerin kütlesi monomerlerin toplamına eşittir" diyen bir öncül görürsen yanlıştır.',
          },
          {
            id: 'kl-sentez-checkpoint',
            type: 'checkpoint',
            prompt:
              'Bir hücrede uzun süre yalnızca dehidrasyon sentezi çalışsaydı, hücre içi su miktarı nasıl değişirdi? Peki bu gerçekte olur mu?',
            hint: 'Sentez suyu üretir mi tüketir mi? Ve metabolizmanın iki kolu birbirinden bağımsız çalışabilir mi?',
            answer: `Dehidrasyon sentezi su **açığa çıkarır**, dolayısıyla hücre içi su miktarı artardı.

Ama gerçekte bu olmaz, çünkü ==anabolizma ve katabolizma aynı anda yürür==. Hücre bir yandan protein sentezlerken (su üretir) bir yandan glikozu parçalıyordur (su tüketir ve solunumda ayrıca su üretir).

Buradaki asıl ders şu: metabolizmanın iki kolunu birbirinden ayrı düşünmemelisin. Bir önceki konuda ATP üzerinden bağlı olduklarını görmüştün; burada su üzerinden de bağlı olduklarını görüyorsun.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-karbonhidrat',
        kind: 'build',
        title: 'Karbonhidratlar: hücrenin birincil yakıtı',
        lead: 'Şimdi ilk grubu inceliyoruz. Sınıflandırmayı ezberlemeden önce neye göre yapıldığını anla: monomer sayısına göre.',
        blocks: [
          {
            id: 'kl-kh-concept',
            type: 'concept',
            term: 'Karbonhidrat',
            body: `Yapısında **karbon, hidrojen ve oksijen** bulunan; hidrojen–oksijen oranı genellikle sudaki gibi **2:1** olan organik bileşiklerdir.

Canlının ==birincil ve en hızlı kullanılan enerji kaynağıdır==. Hücre enerji ihtiyacını önce karbonhidrattan karşılar; yağa ancak karbonhidrat yetersiz kaldığında yönelir.

Bazı karbonhidratlar enerji için değil **yapı** için kullanılır: bitki hücre duvarındaki selüloz, mantar ve böcek kabuğundaki kitin gibi.`,
          },
          {
            id: 'kl-kh-table',
            type: 'table',
            interactive: true,
            title: 'Monomer sayısına göre karbonhidratlar',
            columns: ['Grup', 'Örnekler', 'Notlar'],
            rows: [
              [
                'Monosakkarit (1 birim)',
                'Glikoz, fruktoz, galaktoz (6C) · riboz, deoksiriboz (5C)',
                'Sindirilmeden emilir. Glikoz–fruktoz–galaktoz **izomerdir**: formülleri aynı (C₆H₁₂O₆), yapıları farklı',
              ],
              [
                'Disakkarit (2 birim)',
                'Maltoz = glikoz + glikoz · Sükroz = glikoz + fruktoz · Laktoz = glikoz + galaktoz',
                'Oluşurken 1 su açığa çıkar; sindirilirken 1 su harcanır',
              ],
              [
                'Polisakkarit (çok birim)',
                'Nişasta, glikojen, selüloz, kitin',
                'Hepsi glikoz polimeridir (kitin hariç). Suda çözünmezler — bu yüzden depolamaya uygundurlar',
              ],
            ],
            caption:
              'Riboz ve deoksiriboz enerji için kullanılmaz; ==RNA ve DNA’nın yapısına katılırlar==. Nükleik asitler bölümünde tekrar karşına çıkacaklar.',
          },
          {
            id: 'kl-kh-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Polisakkaritlerin suda çözünmemesi bir kusur değil, depolama için avantajdır: çözünselerdi hücre içi ozmotik dengeyi bozarlardı.',
          },
          {
            id: 'kl-kh-prose',
            type: 'prose',
            body: `Bu üçlü sınıflandırmanın altında tek bir ölçüt var: ==kaç monomerden oluştuğu==. Ezberlemen gereken bir kural değil, sayma işi.

Sınıflandırmanın pratik sonucu ise emilimle ilgili. Sindirim sisteminden kana yalnızca **monosakkaritler** geçebilir. Disakkarit veya polisakkarit yediğinde önce hidroliz edilir, monomerlerine ayrılır, sonra emilir. Bu yüzden "sindirilmeden emilen tek karbonhidrat monosakkarittir" cümlesi doğrudur.

Monosakkaritler arasında **glikoz** özel bir yere sahiptir. Hücrenin doğrudan kullandığı şeker odur; fruktoz ve galaktoz bile karaciğerde önce glikoza çevrilir. Kan şekeri dediğimiz değer de glikoz derişimidir.`,
          },
          {
            id: 'kl-kh-why',
            type: 'why',
            question: 'Formülleri aynı olan üç molekül neden farklı tatlarda ve farklı davranışlarda?',
            body: `Glikoz, fruktoz ve galaktozun üçünün de formülü C₆H₁₂O₆. Yani her birinde 6 karbon, 12 hidrojen, 6 oksijen var. Buna rağmen fruktoz glikozdan belirgin şekilde daha tatlıdır ve vücutta farklı işlenir.

Sebebi şu: aynı atomlar ==farklı sırayla bağlanmış==. Buna **izomer** denir.

Bunu şöyle düşün: aynı harflerle "kalem" ve "melak" yazabilirsin. Harfler aynı, kelime farklı. Moleküllerde de atomların dizilişi değişince molekülün şekli değişir; şekil değişince hangi enzimin onu tanıyacağı, hangi reseptöre bağlanacağı değişir.

Bu fikir biyolojide sürekli geri gelir: ==yapı işlevi belirler==. Proteinlerde bunu çok daha çarpıcı biçimde göreceksin.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-polisakkarit',
        kind: 'deepen',
        title: 'Aynı monomer, üç farklı iş',
        lead: 'Bu bölüm karbonhidratların en öğretici kısmı: nişasta, glikojen ve selüloz aynı yapı taşından yapılır ama bambaşka işler görür.',
        blocks: [
          {
            id: 'kl-poli-compare',
            type: 'compare',
            interactive: true,
            title: 'Nişasta, glikojen ve selüloz',
            columns: ['Nişasta', 'Glikojen', 'Selüloz'],
            rows: [
              { label: 'Monomeri', values: ['Glikoz', 'Glikoz', 'Glikoz'] },
              { label: 'Bulunduğu canlı', values: ['Bitki', 'Hayvan, mantar', 'Bitki'] },
              { label: 'Görevi', values: ['Depo', 'Depo', 'Yapı — hücre duvarı'] },
              { label: 'Dallanma', values: ['Az dallı', 'Çok dallı', 'Dalsız, düz zincir'] },
              {
                label: 'İnsanda sindirim',
                values: ['Sindirilir (amilaz)', 'Sindirilir', 'Sindirilemez — enzimi yok'],
              },
            ],
            insight:
              'Üçü de glikozdan yapıldığı hâlde farklı iş görüyorlar. Farkı yaratan şey monomer değil, ==monomerler arasındaki bağın tipi ve zincirin dizilişi==. Glikojenin çok dallı olması tesadüf değil: dallar zincirin uçlarını çoğaltır, böylece gerektiğinde glikoz aynı anda birçok noktadan hızla koparılabilir. Hayvan hareket eden bir canlıdır ve enerjiye ani ihtiyaç duyar.',
          },
          {
            id: 'kl-poli-why',
            type: 'why',
            question: 'İnsan selülozu neden sindiremiyor? Sert olduğu için mi?',
            body: `Hayır. Selülozun sindirilememesinin sebebi sertliği değil, ==insanda o bağı kıracak enzimin (selülaz) bulunmaması==.

Bu ayrım önemli, çünkü mesele molekülün fiziksel özelliği değil, enzim–substrat uyumu. Nişasta ve selüloz ikisi de glikoz zinciridir; ama glikozlar arasındaki bağ farklı yönlenmiştir ve insan amilazı yalnızca nişastadaki bağı tanır.

Otçul hayvanlar da aslında selülaz üretmez. Onların sindirim sisteminde ==ortak yaşayan bakteri ve tek hücreliler== bu enzimi üretir; inek selülozdan bu ortaklık sayesinde yararlanır.

İnsanda selüloz sindirilmez ama işe yaramaz değildir: bağırsak hareketlerini düzenler ve "lif" olarak beslenmede yeri vardır.`,
          },
          {
            id: 'kl-poli-trap',
            type: 'trap',
            title: 'Sindirilememeyi yapı sertliğine bağlamak',
            wrong: '“Selüloz çok sağlam bir molekül olduğu için parçalanamaz” demek.',
            right:
              'Sindirim kimyasal bir olaydır, mekanik bir kırma değil. Bir molekülün sindirilebilmesi, o bağa **uyan bir enzimin** bulunmasına bağlıdır. Selülaz enzimini taşıyan bir canlı selülozu rahatlıkla parçalar.',
            body: 'Aynı mantık laktoz için de geçerlidir: laktoz intoleransı olan kişide laktoz molekülü değişmemiştir; eksik olan **laktaz enzimidir**.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-lipit',
        kind: 'build',
        title: 'Lipitler: yoğun depo, yalıtım ve zar yapısı',
        lead: 'Lipitler tek bir molekül grubu değil, ortak özelliği “suda çözünmemek” olan bir aile. Bu yüzden içlerinde çok farklı yapılar var.',
        blocks: [
          {
            id: 'kl-lipit-prose',
            type: 'prose',
            body: `Lipitler de karbon, hidrojen ve oksijen içerir — ama karbonhidratlardan bir farkla: ==oksijen oranları çok daha düşük, hidrojen oranları yüksektir==.

Bu küçük fark büyük bir sonuç doğurur. Enerji, karbon–hidrojen bağlarında saklıdır. Hidrojen oranı yüksek olduğu için lipitler **birim kütlede en fazla enerjiyi** verir: 1 gram yağdan yaklaşık 9 kcal, 1 gram karbonhidrattan yaklaşık 4 kcal enerji elde edilir.

Buna rağmen hücre ilk tercihini karbonhidrattan yana kullanır. Sebebi basit: yağın parçalanması daha uzun sürer ve daha fazla basamak gerektirir. ==Yağ en çok enerjiyi verir, ama en hızlı enerjiyi vermez.==

Lipitlerin ortak özelliği suda çözünmemeleridir; alkol, eter gibi organik çözücülerde çözünürler.`,
          },
          {
            id: 'kl-lipit-table',
            type: 'table',
            interactive: true,
            title: 'Lipit çeşitleri',
            columns: ['Çeşit', 'Yapısı', 'Görevi'],
            rows: [
              [
                'Nötral yağ (trigliserit)',
                '1 gliserol + 3 yağ asidi (birleşirken **3 su** açığa çıkar)',
                'Enerji depolama, yalıtım, organları koruma',
              ],
              [
                'Fosfolipit',
                '1 gliserol + 2 yağ asidi + 1 fosfat grubu',
                'Hücre zarının temel yapı taşı',
              ],
              [
                'Steroid',
                'Dört halkalı iskelet — **yağ asidi içermez**',
                'Kolesterol, eşeysel hormonlar, D vitamini',
              ],
            ],
            caption:
              'Üçüncü satıra dikkat: steroidlerin yapısında gliserol ve yağ asidi **yoktur**. “Bütün lipitler gliserol + yağ asidinden oluşur” cümlesi bu yüzden yanlıştır.',
          },
          {
            id: 'kl-lipit-compare',
            type: 'compare',
            interactive: true,
            title: 'Doymuş ve doymamış yağ asidi',
            columns: ['Doymuş', 'Doymamış'],
            rows: [
              { label: 'Karbonlar arası bağ', values: ['Yalnızca tekli bağ', 'En az bir çift bağ var'] },
              { label: 'Zincirin biçimi', values: ['Düz — sıkı paketlenir', 'Çift bağda kıvrılır — gevşek paketlenir'] },
              { label: 'Oda sıcaklığında', values: ['Genellikle katı', 'Genellikle sıvı'] },
              { label: 'Kaynağı', values: ['Çoğunlukla hayvansal (tereyağı, iç yağı)', 'Çoğunlukla bitkisel (zeytinyağı, ayçiçek yağı)'] },
            ],
            insight:
              'Katı ya da sıvı olmasını belirleyen şey, ==zincirlerin ne kadar sıkı paketlenebildiğidir==. Çift bağ zincire bir kıvrım verir, kıvrımlı zincirler birbirine tam oturamaz ve molekül akışkan kalır. Aynı fikri birazdan hücre zarının akışkanlığında tekrar göreceksin.',
          },
          {
            id: 'kl-lipit-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Yağların yıkımında en fazla **metabolik su** açığa çıkar. Deve, kanguru faresi ve kış uykusundaki hayvanlar bu suyu kullanır. “Susuz kalan hayvan yağ yakarak su elde eder” cümlesi doğrudur.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-fosfolipit',
        kind: 'deepen',
        title: 'Fosfolipit: yapıdan hücre zarına',
        lead: 'Bu bölüm bir sonraki konunun kapısını açıyor. Burada öğrendiğin şey, “Hücre” konusunda zarın temeli olacak.',
        blocks: [
          {
            id: 'kl-fosfo-figure',
            type: 'figure',
            kind: 'fosfolipit-cift-tabaka',
            width: 'full',
            title: 'Fosfolipit ve çift tabaka',
            purpose:
              'Molekülün iki uçlu yapısından çift tabakanın kendiliğinden oluşmasına giden bağı tek görselde kurmak.',
            complexity: 'medium',
            caption:
              'Çift tabakayı kimse dizmiyor. Kutuplu başlar suya yönelir, kutupsuz kuyruklar sudan kaçar; ==dizilim kendiliğinden ortaya çıkar==. Hücre zarının temeli bu basit tercihtir.',
            focus: [
              {
                title: 'Kutuplu baş',
                body: 'Fosfat grubu içerir ve kutupludur. Su ile hidrojen bağı kurabildiği için suyu sever — hidrofiliktir. Bir önceki bölümdeki kutupluluk fikri burada işe yarıyor.',
              },
              {
                title: 'Kutupsuz kuyruk',
                body: 'İki yağ asidi zinciri. Kutupsuz oldukları için su ile bağ kuramazlar ve sudan uzaklaşırlar — hidrofobiktir.',
              },
              {
                title: 'Çift tabaka',
                body: 'Su ortamında moleküller kuyrukları içeride, başları dışarıda kalacak şekilde dizilir. Böylece kuyruklar sudan korunur, başlar suyla temas eder. Bu, en düşük enerjili düzendir.',
              },
            ],
            audio_script: `Şemanın soluna bak. Tek bir fosfolipit molekülü var.

Üstteki mor daire baş kısmı. İçinde fosfat var ve kutuplu. Bir önceki bölümü hatırla: kutuplu olan şey suyla hidrojen bağı kurabiliyordu. Yani bu baş suyu seviyor.

Alttaki iki sarı zincir yağ asidi kuyrukları. Kutupsuzlar. Suyla bağ kuramıyorlar, o yüzden sudan kaçıyorlar.

Şimdi bir saniye dur ve düşün: böyle bir molekülü suya atarsan ne olur?

Baş suya girmek istiyor, kuyruk sudan kaçmak istiyor. Tek bir molekül bu ikilemi çözemez. Ama milyonlarcası bir aradaysa çözebilir.

Sağa bak. Çözüm bu: iki sıra hâlinde diziliyorlar. Kuyruklar ortada birbirine bakıyor, sudan korunuyor. Başlar dışarı, suya bakıyor.

Bunu kimse organize etmedi. Sadece su ile etkileşim böyle bir düzeni zorunlu kıldı. Hücre zarının temeli bu.`,
          },
          {
            id: 'kl-fosfo-prose',
            type: 'prose',
            body: `Fosfolipiti diğer lipitlerden ayıran şey, ==aynı molekülde iki zıt eğilimin bulunması==. Bir ucu suyu sever, diğer ucu sudan kaçar. Böyle moleküllere **amfipatik** denir.

Nötral yağda böyle bir ikilik yoktur: üç yağ asidi de kutupsuzdur, molekülün tamamı sudan kaçar. Bu yüzden yağ suda damlacıklar hâlinde toplanır, tabaka oluşturmaz.

Fosfolipitte ise gliserole bağlı üç yerden biri yağ asidi yerine **fosfat grubu** taşır. Fosfat kutupludur ve suyla hidrojen bağı kurar. Sonuç: molekül ne tamamen suda çözünebilir, ne tamamen sudan kaçabilir. Bu ikilemi çözmenin tek yolu ==başları suya, kuyrukları birbirine dönük dizilmektir==.`,
          },
          {
            id: 'kl-fosfo-prose2',
            type: 'prose',
            body: `Bu dizilimin iki sonucu var ve ikisi de hücre için belirleyici.

**Birincisi: zar kendiliğinden onarılır.** Çift tabakayı bir arada tutan şey kovalent bağ değil, su ile etkileşim. Zarda küçük bir yırtık oluştuğunda moleküller yeniden dizilir ve açık kapanır. Kimyasal bağla dikilmiş bir zar bu esnekliği gösteremezdi.

**İkincisi: zar seçici geçirgen olur.** Ortadaki kuyruk bölgesi kutupsuzdur. Yağda çözünen maddeler (O₂, CO₂, steroit hormonlar) buradan rahatça geçer. Kutuplu maddeler ve iyonlar ise bu kutupsuz bölgeden geçemez; onlar için ==taşıyıcı proteinler== gerekir.

Bir sonraki konuda hücre zarını incelerken bu iki sonucu tekrar kuracağız.`,
          },
          {
            id: 'kl-fosfo-connection',
            type: 'connection',
            title: 'Bu yapı nereye gidiyor?',
            body:
              'Bir sonraki konuda hücre zarını incelerken buradan devam edeceğiz. Zarın neden seçici geçirgen olduğu, yağda çözünen maddelerin neden kolay geçtiği ve iyonların neden taşıyıcı protein gerektirdiği — hepsinin cevabı bu çift tabakada saklı.',
            links: ['Hücre — hücre zarı ve madde geçişi', 'AYT · Mitokondri — iç zarın seçici geçirgenliği'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün en çok puan kaybettiren üç noktasını hedefliyor.',
        blocks: [
          {
            id: 'kl-uyg-quiz1',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir polisakkarit molekülü tam olarak hidroliz edildiğinde 51 su molekülü harcanmıştır. Bu polisakkariti oluşturan monomer sayısı kaçtır?',
            options: ['50', '51', '52', '102'],
            answer_index: 2,
            explanation: `Harcanan su sayısı = kopan bağ sayısı = **51**.

Düz zincirli bir polimerde bağ sayısı, monomer sayısının bir eksiğidir:
n − 1 = 51 → **n = 52**

Yaygın hata 51 demektir; yani su sayısını doğrudan monomer sayısı sanmak. Zinciri gözünde canlandır: 3 boncuk arasında 2 ip düğümü vardır, 3 değil.`,
          },
          {
            id: 'kl-uyg-quiz2',
            type: 'quiz',
            purpose: 'error',
            question: 'Lipitlerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?',
            options: [
              'Birim kütlede karbonhidratlardan daha fazla enerji verirler',
              'Hepsinin yapısında gliserol ve yağ asidi bulunur',
              'Yıkımlarında karbonhidratlara göre daha fazla metabolik su açığa çıkar',
              'Bazıları hücre zarının yapısına katılır',
            ],
            answer_index: 1,
            explanation: `Yanlış ifade **B**. Steroidler (kolesterol, eşeysel hormonlar, D vitamini) lipit oldukları hâlde yapılarında **gliserol ve yağ asidi bulunmaz**; dört halkalı bambaşka bir iskeletleri vardır.

Diğerleri doğru:
- **A:** Hidrojen oranı yüksek olduğu için birim kütlede daha fazla enerji verirler (≈9 kcal/g).
- **C:** Hidrojen oranı yüksek olduğu için yıkımlarında daha fazla su oluşur.
- **D:** Fosfolipitler hücre zarının temel yapı taşıdır.

Bu soru tipinde "hepsi", "bütün", "daima" gibi kelimeleri gördüğünde bir istisna ara — biyolojide aşırı genelleme neredeyse her zaman yanlış seçenektir.`,
          },
          {
            id: 'kl-uyg-quiz3',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Nişasta, glikojen ve selüloz için aşağıdakilerden hangisi **ortaktır**?',
            options: [
              'Aynı canlı grubunda bulunmaları',
              'İnsanda sindirilebilmeleri',
              'Aynı monomerden oluşmaları',
              'Depo görevi görmeleri',
            ],
            answer_index: 2,
            explanation: `Üçü de **glikoz** monomerinden oluşur. Ortak olan tek şey budur.

- **A yanlış:** Nişasta ve selüloz bitkide, glikojen hayvan ve mantarda bulunur.
- **B yanlış:** Selüloz insanda sindirilemez; selülaz enzimi yoktur.
- **D yanlış:** Selülozun görevi depo değil **yapıdır** (hücre duvarı).

Bu konudaki asıl fikir şu: aynı yapı taşından çok farklı işler gören moleküller yapılabilir. Farkı yaratan monomer değil, ==bağların tipi ve dizilim==.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'kl-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'kl-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Dört organik grup da monomerlerden kurulur; kurulma **dehidrasyon sentezi**, yıkılma **hidrolizdir**.',
              'Kurulan her bağ için bir su açığa çıkar; n monomerden **n − 1 su** oluşur.',
              'Polimerin kütlesi, monomerlerin toplamından açığa çıkan su kadar **azdır**.',
              'Karbonhidratlarda H:O oranı yaklaşık 2:1’dir; birincil ve en hızlı enerji kaynağıdırlar.',
              'Glikoz, fruktoz ve galaktoz izomerdir: formülleri aynı, yapıları farklı.',
              'Nişasta, glikojen ve selüloz **aynı monomerden** oluşur; farkı bağ tipi ve dallanma yaratır.',
              'Selüloz insanda sindirilemez çünkü **selülaz enzimi yoktur** — sertliğinden değil.',
              'Lipitlerde oksijen oranı düşüktür; bu yüzden birim kütlede en çok enerjiyi ve en çok metabolik suyu verirler.',
              'Steroidler lipittir ama yapılarında gliserol ve yağ asidi **bulunmaz**.',
              'Fosfolipitin kutuplu başı ve kutupsuz kuyruğu, su içinde çift tabakayı **kendiliğinden** oluşturur.',
            ],
          },
          {
            id: 'kl-kap-memory',
            type: 'memory',
            body:
              'Bu bölümün tek cümlesi: *Bağ kurulurken su çıkar, bağ kopanken su girer.* Karbonhidrat, lipit, protein, nükleik asit — dördünde de aynı cümle geçerli.',
          },
          {
            id: 'kl-kap-next',
            type: 'next_step',
            body: `Sıradaki bölümde proteinlere ve enzimlere geçiyoruz. Orada aynı dehidrasyon mantığını amino asitlerde tekrar göreceksin — ama bu kez bir fark var: proteinin ==şekli== işlevini belirliyor.

Enzimler bölümü bu konunun sınav açısından en verimli kısmı; hızlı geçme.`,
            topics: ['Proteinler ve enzimler', 'Nükleik asitler ve ATP', 'Hücre'],
          },
          {
            id: 'kl-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Kapatmadan önce iki şeyi kontrol et.

Birincisi: beş monomerden kaç su çıkar? Dört diyebiliyorsan hesap mantığı oturmuş demektir.

İkincisi: nişasta, glikojen ve selüloz aynı şeyden mi yapılıyor? Evet diyebiliyorsan ve farkın nereden geldiğini söyleyebiliyorsan bu bölüm tamam.

Bu ikisine cevap veremiyorsan ilgili bölümlere dön. Proteinlere geçmeden önce bu iki fikrin oturması gerekiyor.`,
          },
        ],
      },
    ],
  },
}
