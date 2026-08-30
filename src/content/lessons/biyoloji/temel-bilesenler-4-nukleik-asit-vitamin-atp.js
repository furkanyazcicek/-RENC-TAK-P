/**
 * TYT BİYOLOJİ · Canlıların Temel Bileşenleri — 4. Bölüm
 * VİTAMİNLER, NÜKLEİK ASİTLER VE ATP
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Üç grup ilk bakışta birbirine uzak görünüyor. Aynı derste
 *   toplanmalarının sebebi rastlantı değil: üçü de ENERJİ VERMEZ,
 *   üçü de düzenleme veya bilgi/aktarım işi yapar. Ders bu ortak
 *   noktayı açıkça kurarak başlıyor.
 *
 * · ATP bilinçli olarak nükleik asitlerin ARDINDAN veriliyor. ATP bir
 *   nükleotit türevidir; nükleotidi görmeden ATP'yi anlatmak, öğrenciye
 *   ezberlenecek dördüncü bir molekül daha eklemek olur. Sırayı böyle
 *   kurunca ATP zaten bilinen bir yapının varyasyonu hâline geliyor.
 *
 * · Vitaminlerde "suda çözünen / yağda çözünen" ayrımı, ezber liste
 *   olarak değil SONUÇLARIYLA veriliyor: depolanma, günlük ihtiyaç ve
 *   aşırı doz riski bu ayrımdan çıkıyor.
 *
 * · Nükleotit hesapları (fosfat = şeker = baz sayısı) ayrı bir çözümlü
 *   örnekle veriliyor; TYT'de doğrudan hesaplatılıyor.
 *
 * · Bu ders konunun son bölümü olduğu için kapanışta yalnızca kendi
 *   özeti değil, DÖRT BÖLÜMÜN birleştirici çerçevesi de veriliyor.
 */

export default {
  slug: 'temel-bilesenler-nukleik-asit-vitamin-atp',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Temel Bileşenleri',
  },
  order: 4,
  partLabel: '4. Bölüm',
  goldStandard: true,
  title: 'Vitaminler, Nükleik Asitler ve ATP',
  subtitle:
    'Bu üç grup enerji vermez — ama olmadan hiçbir şey çalışmaz. Biri düzenler, biri bilgiyi taşır, biri enerjiyi aktarır.',

  document: {
    version: 2,
    estimated_minutes: 30,
    prerequisites: [
      {
        topic: 'Proteinler ve Enzimler (3. Bölüm)',
        why: 'Koenzim kavramı doğrudan enzim yapısının üzerine kuruluyor.',
      },
      {
        topic: 'Karbonhidratlar ve Lipitler (2. Bölüm)',
        why: 'Riboz ve deoksiriboz orada tanıtıldı; burada nükleotidin parçası olarak geri geliyor.',
      },
    ],
    outcomes: [
      'Vitaminlerin neden enerji vermediğini ve sindirilmediğini açıklayabileceksin.',
      'Suda ve yağda çözünen vitaminlerin farkını depolanma üzerinden gerekçelendirebileceksin.',
      'Nükleotidin üç parçasını sayıp nükleotit sayısı hesabı yapabileceksin.',
      'DNA ile RNA’yı şeker, baz, zincir sayısı ve görev bakımından karşılaştırabileceksin.',
      'Baz eşleşme kuralını ve hidrojen bağı sayılarını kullanarak soru çözebileceksin.',
      'ATP’nin neden bir nükleotit türevi olduğunu ve enerjiyi nasıl aktardığını anlatabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'nv-giris',
        kind: 'opening',
        title: 'Enerji vermeyen ama vazgeçilmez üç grup',
        lead: 'Bu üç grubun aynı derste olması tesadüf değil. Ortak noktalarını kurarak başlayalım.',
        blocks: [
          {
            id: 'nv-giris-1',
            type: 'prose',
            body: `Şimdiye kadar enerji veren organik bileşikleri gördük: karbonhidratlar, lipitler ve gerektiğinde proteinler.

Bu bölümde kalan üç grup var ve üçünün de ortak bir özelliği var: ==hiçbiri enerji vermez==.

Buna rağmen üçü de hayati:
- **Vitaminler** metabolizmayı düzenler; birçok enzimin çalışabilmesi onlara bağlıdır.
- **Nükleik asitler** kalıtsal bilgiyi taşır ve protein sentezini yönetir.
- **ATP** hücrenin enerji aktarım molekülüdür.

Yani bu üç grup enerjinin *kaynağı* değil, enerjinin ve bilginin ==yönetim katmanıdır==. Bir fabrikaya benzetirsek: yakıt karbonhidrat ve yağdır, ama üretim planı, kontrol sistemi ve iç taşıma bu üç grupta.`,
          },
          {
            id: 'nv-giris-why',
            type: 'why',
            question: 'Vitaminler neden bu kadar az miktarda yeterli oluyor?',
            body: `Günlük C vitamini ihtiyacın yaklaşık 75 miligram; B₁₂ ihtiyacın ise ==mikrogram== düzeyinde. Karbonhidratta günde yüzlerce gramdan söz ederken burada milyonda birlerden söz ediyoruz. Bu fark nereden geliyor?

Cevap, vitaminlerin ne işe yaradığında saklı. Karbonhidrat ve yağ **tüketilir**: parçalanır, enerjisi alınır, biter. Bu yüzden sürekli yenilenmesi gerekir.

Vitaminlerin çoğu ise koenzim olarak çalışır ve koenzimler tıpkı enzimler gibi ==tepkime sonunda değişmeden çıkar==. Aynı molekül defalarca kullanılır.

Bir öncekiyle bağını kur: enzimlerin çok az miktarda yeterli olmasının sebebi de buydu. Vitamin, o enzimin yardımcısı olduğu için aynı ekonomiden yararlanıyor.

Bu aynı zamanda eksikliklerin neden yavaş ortaya çıktığını da açıklar: molekül tüketilmediği için depo yavaş biter.`,
          },
          {
            id: 'nv-giris-prose2',
            type: 'prose',
            body: `Bu üç grubu bir arada tutan ikinci bir ortak nokta daha var: hiçbiri ==doğrudan yapı taşı değil==.

Karbonhidrat hücre duvarını, lipit zarı, protein kası oluşturur. Bunlar canlının "gövdesini" yapar.

Vitamin, nükleik asit ve ATP ise gövdenin parçası değildir; gövdenin nasıl kurulacağını ve nasıl çalışacağını belirler. Nükleik asit planı taşır, vitamin üretim hattını çalışır tutar, ATP işin yapılacağı yere enerjiyi getirir.

Bu ayrımı aklında tut, çünkü sınavda "yapıya katılır mı?" sorusu sık sorulur. Nükleik asit ve ATP ==yapıya katılmaz==; vitaminlerin de birkaç istisna dışında yapısal görevi yoktur.`,
          },
          {
            id: 'nv-giris-note',
            type: 'teacher_note',
            tone: 'exam',
            body: '“Enerji vermeyen bileşikler” sorulduğunda cevap listesi şudur: su, mineraller, vitaminler, nükleik asitler ve ATP. Bunlardan yalnızca su ve mineraller inorganiktir; diğer üçü organiktir.',
          },
          {
            id: 'nv-giris-audio',
            type: 'audio_script',
            body: `Bu konunun son bölümündeyiz.

Buraya kadar canlının neyden yapıldığını öğrendik: su, mineraller, karbonhidrat, lipit, protein. Şimdi kalan üç grup var ve hepsi bir arada duruyor çünkü hiçbiri enerji vermiyor.

Bir soru sorayım: enerji vermiyorlarsa neden vazgeçilmezler?

Cevabı şöyle düşün. Bir arabada benzin enerji verir. Ama direksiyon, fren ve gösterge paneli enerji vermez — buna rağmen onlarsız araba işe yaramaz.

Vitaminler, nükleik asitler ve ATP tam olarak o katman.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-vitamin',
        kind: 'build',
        title: 'Vitaminler: az miktarda, düzenleyici',
        lead: 'Vitaminleri minerallerden ayıran tek şey organik olmaları. Geri kalan davranışları çok benzer.',
        blocks: [
          {
            id: 'nv-vit-concept',
            type: 'concept',
            term: 'Vitamin',
            body: `Canlının çok az miktarda ihtiyaç duyduğu, **organik** yapılı düzenleyici bileşiklerdir.

Üç ortak özellikleri sınavda doğrudan sorulur:

- **Enerji vermezler.** Yıkıldıklarında ATP üretilmez.
- **Sindirilmezler.** Küçük moleküllerdir, monomer–polimer yapısı taşımazlar; sindirim kanalından doğrudan emilirler.
- **Çoğu vücutta üretilemez**, dışarıdan alınmak zorundadır.

Son maddede önemli istisnalar var: **K vitamini ve bazı B vitaminleri** kalın bağırsaktaki yararlı bakteriler tarafından üretilir, **D vitamini** deride güneş ışığı yardımıyla sentezlenir.`,
          },
          {
            id: 'nv-vit-prose',
            type: 'prose',
            body: `Vitaminlerin en önemli görevi bir önceki bölümde tanıştığın kavramla doğrudan ilgili: birçoğu **koenzim** olarak iş görür.

Hatırla: bileşik enzimlerin protein kısmına apoenzim, organik yardımcısına koenzim deniyordu. İşte o koenzimlerin çoğu ==vitamin türevidir==. B grubu vitaminlerinden türeyen NAD ve FAD, hücresel solunumda elektron taşıyan moleküllerdir.

Bu bağlantı, vitamin eksikliğinin neden bu kadar geniş etki yarattığını açıklar. Eksik olan tek bir vitamin değil, ==o vitaminin koenzim olarak çalıştığı bütün enzim grubudur==. Tek bir eksiklik onlarca tepkimeyi aynı anda yavaşlatır.`,
          },
          {
            id: 'nv-vit-figure',
            type: 'figure',
            kind: 'vitamin-cozunurluk',
            width: 'full',
            title: 'Çözünürlük, vitaminin vücuttaki kaderini belirler',
            purpose:
              'Suda ve yağda çözünen vitaminlerin taşınma, depolanma ve aşırı doz farklarını tek görsel neden–sonuç ilişkisiyle kurmak.',
            complexity: 'medium',
            caption:
              'Solda su akışıyla kolay taşınıp atılan B ve C vitaminleri; sağda yağ dokusu ve karaciğerde tutulan A, D, E ve K vitaminleri görülüyor. ==Depolanma ve zehirlenme farkının nedeni çözünürlüktür.==',
            focus: [
              {
                title: 'Suda çözünen vitaminler',
                body: 'B ve C vitaminleri sulu ortamda taşınır, büyük ölçüde depolanmaz ve fazlası idrarla atılır. Bu nedenle düzenli alınmaları gerekir ve eksiklikleri daha hızlı ortaya çıkabilir.',
              },
              {
                title: 'Yağda çözünen vitaminler',
                body: 'A, D, E ve K vitaminleri yağlarla birlikte emilir; karaciğer ve yağ dokusunda depolanır. Depo geç eksiklik avantajı sağlar ama aşırı alımda hipervitaminoz riski doğurur.',
              },
            ],
            audio_script: `Görseli ortadan ikiye ayır.

Soldaki mavi tarafta su akışını ve kan damarını görüyorsun. B ve C vitaminleri suda çözündüğü için kanda kolay taşınır. Ama aynı özellik böbrekten süzülüp atılmalarına da yol açar. Bu yüzden düzenli alınmaları gerekir.

Şimdi sağdaki sarı bölgeye geç. Yağ dokusu ve karaciğer var. A, D, E ve K vitaminleri yağda çözündüğü için burada tutulabilir.

Bu iyi mi kötü mü? İkisi de. Depo olduğu için eksiklik geç ortaya çıkar. Fakat fazla alındığında atılamaz ve birikerek zarar verebilir.

Ezberleme: çözünürlük, vitaminin vücuttaki kaderini belirler.`,
          },
          {
            id: 'nv-vit-compare',
            type: 'compare',
            interactive: true,
            title: 'Suda çözünen ve yağda çözünen vitaminler',
            columns: ['Suda çözünen (B, C)', 'Yağda çözünen (A, D, E, K)'],
            rows: [
              { label: 'Depolanma', values: ['Vücutta depolanmaz', 'Karaciğer ve yağ dokusunda depolanır'] },
              { label: 'Fazlası', values: ['İdrarla atılır', 'Vücutta birikir — aşırı doz zehirlenme yapabilir'] },
              { label: 'Alım sıklığı', values: ['Düzenli, neredeyse her gün alınmalı', 'Daha seyrek alınması yeterli olabilir'] },
              { label: 'Eksiklik belirtisi', values: ['Nispeten hızlı ortaya çıkar', 'Depo tükendikten sonra, geç ortaya çıkar'] },
              { label: 'Emilim koşulu', values: ['Suyla birlikte kolay emilir', 'Emilimi için ortamda yağ bulunmalı'] },
            ],
            insight:
              'Bütün farklar tek bir özellikten çıkıyor: ==çözünürlük==. Suda çözünen bir molekül kanda taşınır ve böbrekten süzülüp atılır; depolanamaz. Yağda çözünen ise yağ dokusunda tutulur, atılamaz — bu yüzden hem daha uzun süre yeter hem de fazlası birikip zarar verebilir. Bir önceki bölümlerde kurduğun **kutuplu/kutupsuz** ayrımı burada da işi çözüyor.',
          },
          {
            id: 'nv-vit-trap',
            type: 'trap',
            title: '“Vitamin aldıkça faydası artar” sanmak',
            wrong: 'Vitaminlerin zararsız olduğunu, fazlasının her durumda atıldığını düşünmek.',
            right:
              'Bu yalnızca **suda çözünen** vitaminler için doğrudur. Yağda çözünen A, D, E ve K vitaminleri depolandığı için aşırı alımda birikir ve zehirlenmeye (hipervitaminoz) yol açabilir.',
            body: 'Sınavda "fazla alınan vitamin idrarla atılır" biçimindeki bir öncül, hangi vitaminden söz edildiği belirtilmemişse eksik/yanlıştır.',
          },
          {
            id: 'nv-vit-table',
            type: 'table',
            interactive: true,
            title: 'Sık sorulan eksiklikler',
            columns: ['Vitamin', 'Öne çıkan görevi', 'Eksikliğinde'],
            rows: [
              ['A', 'Görme pigmentinin yapısı, epitel sağlığı', 'Gece körlüğü'],
              ['D', 'Kalsiyum ve fosfor emilimi', 'Raşitizm, kemik erimesi'],
              ['E', 'Hücre zarını oksidasyondan koruma', 'Hücre zarı hasarı'],
              ['K', 'Kanın pıhtılaşması', 'Kanamanın durmaması'],
              ['B grubu', 'Koenzim olarak enzimlerde görev', 'Beriberi, pellagra, kansızlık'],
              ['C', 'Kollajen sentezi, bağışıklık', 'Skorbüt — diş eti kanaması'],
            ],
            caption:
              'Bu tabloyu ezberlemeden önce mantığını kur: her vitamin ya bir **molekülün yapısına katılır** (A → görme pigmenti) ya da bir **enzim grubunu çalıştırır** (B grubu). Eksiklik belirtisi, o işin aksamasıdır.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-nukleotit',
        kind: 'build',
        title: 'Nükleik asitler: bilgiyi taşıyan moleküller',
        lead: 'Önce yapı taşına bakacağız. Üç parçalı bir molekül; üçünü de daha önce gördün.',
        blocks: [
          {
            id: 'nv-nuk-figure',
            type: 'figure',
            kind: 'nukleotit-yapi',
            width: 'full',
            title: 'Nükleotit yapısı ve baz eşleşmesi',
            purpose:
              'Nükleotidin üç parçasını göstermek ve bu parçaların DNA’da nasıl karşılıklı dizildiğini aynı görselde kurmak.',
            complexity: 'high',
            caption:
              'Nükleotidin adı taşıdığı **bazdan** gelir; şeker ve fosfat bütün nükleotitlerde aynıdır. Sağdaki eşleşmede ==bağ çizgilerini say==: A–T ikili, G–C üçlü. Bu fark DNA’nın kararlılığıyla doğrudan ilgilidir.',
            focus: [
              {
                title: 'Fosfat grubu',
                body: 'Her nükleotitte bir tane bulunur ve hepsinde aynıdır. Nükleotitleri birbirine bağlayan zincir, şeker ile fosfatın sırayla dizilmesiyle oluşur.',
              },
              {
                title: 'Beş karbonlu şeker',
                body: 'DNA’da deoksiriboz, RNA’da riboz. Aradaki tek fark bir oksijen atomudur ama bu fark iki molekülün adını ve kararlılığını belirler. İkisini de karbonhidratlar bölümünde görmüştün.',
              },
              {
                title: 'Organik baz',
                body: 'Değişken parça. DNA’da adenin, timin, guanin, sitozin; RNA’da timin yerine urasil bulunur. Nükleotidin adı bu bazdan gelir — “adenin nükleotidi” gibi.',
              },
              {
                title: 'Baz eşleşmesi',
                body: 'DNA’da adenin daima timinle iki hidrojen bağı, guanin daima sitozinle üç hidrojen bağı kurar. Bu kural sayesinde bir zincirin dizilimi diğerini belirler — DNA’nın kendini eşleyebilmesinin temeli budur.',
              },
            ],
            audio_script: `Şemanın soluna bak. Tek bir nükleotit var ve üç parçadan oluşuyor.

En üstte turuncu daire: fosfat. Ortada beşgen: şeker. Sağda mor dikdörtgen: baz.

Şimdi şunu aklında tut. Fosfat bütün nükleotitlerde aynı. Şeker de aynı — DNA'da deoksiriboz, RNA'da riboz, ama bir molekülün içinde hep aynı.

Değişen tek parça baz. Bu yüzden nükleotidin adı bazdan geliyor.

Şimdi sağa geç. DNA'nın iki zinciri karşı karşıya.

Kesikli mavi çizgileri say. En üstte A ile T arasında kaç çizgi var? İki. Ortada G ile C arasında? Üç.

Bir saniye dur ve düşün: hangi eşleşmeyi ayırmak daha zordur?

G ile C. Üç bağ, iki bağdan güçlü. Bu yüzden guanin–sitozin oranı yüksek olan DNA bölgeleri daha kararlıdır ve ayrılmaları için daha fazla enerji gerekir.`,
          },
          {
            id: 'nv-nuk-prose',
            type: 'prose',
            body: `Nükleotitler birbirine bağlanırken yine tanıdığın tepkime çalışır: **dehidrasyon sentezi**. Bir nükleotidin fosfatı ile diğerinin şekeri arasında bağ kurulur ve su açığa çıkar.

Bu yüzden hesaplar da tanıdık:

- Bir nükleik asitte ==fosfat sayısı = şeker sayısı = baz sayısı = nükleotit sayısı==
- n nükleotitten oluşan tek zincirde n − 1 bağ ve n − 1 su vardır
- **DNA çift zincirli olduğu için** toplam nükleotit sayısı çifttir

DNA'da ayrıca **Chargaff kuralı** geçerlidir: A sayısı T sayısına, G sayısı C sayısına eşittir. Buradan şu da çıkar: adenin + guanin toplamı, timin + sitozin toplamına eşittir.

RNA tek zincirli olduğu için bu eşitlikler ==RNA'da geçerli değildir==. Sınavda en çok kaçırılan ayrımlardan biri budur.`,
          },
          {
            id: 'nv-nuk-worked',
            type: 'worked_example',
            title: 'Nükleotit hesabı',
            prompt:
              'Çift zincirli bir DNA molekülünde toplam 800 nükleotit bulunuyor ve adenin sayısı 180’dir. Bu DNA’da guanin sayısı ve toplam hidrojen bağı sayısı kaçtır?',
            steps: [
              {
                title: 'Chargaff kuralını uygula',
                body: 'Adenin 180 ise timin de 180’dir. A + T toplamı 360 eder.',
              },
              {
                title: 'Kalan nükleotitleri bul',
                body: 'Toplam 800 nükleotit var. 800 − 360 = 440 nükleotit guanin ve sitozindir.',
              },
              {
                title: 'Guanin sayısını ayır',
                body: 'G = C olduğuna göre 440 / 2 = **220 guanin** vardır (ve 220 sitozin).',
              },
              {
                title: 'Hidrojen bağlarını topla',
                body: 'A–T çiftleri ikişer bağ kurar: 180 çift × 2 = 360. G–C çiftleri üçer bağ kurar: 220 çift × 3 = 660. Toplam: 360 + 660 = **1020 hidrojen bağı**.',
              },
            ],
            answer: 'Guanin sayısı 220’dir; molekülde toplam 1020 hidrojen bağı bulunur.',
            takeaway:
              'Bu soru tipinde iki şeyi karıştırma: **nükleotit sayısı** ile **baz çifti sayısı** aynı değildir. 800 nükleotit = 400 baz çifti. Bağ sayısını çift üzerinden hesapla, nükleotit üzerinden değil.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-dna-rna',
        kind: 'deepen',
        title: 'DNA ve RNA: aynı fikir, farklı görev',
        lead: 'İkisi de nükleotitten yapılır ama işleri farklıdır. Farkı üç noktada topluyoruz.',
        blocks: [
          {
            id: 'nv-dr-figure',
            type: 'figure',
            kind: 'dna-rna-karsilastirma',
            width: 'full',
            title: 'DNA arşivdir, RNA çalışma kopyasıdır',
            purpose:
              'DNA’nın çift zincirli ve korunaklı yapısıyla RNA’nın tek zincirli, geçici çalışma yapısını görevleriyle birlikte karşılaştırmak.',
            complexity: 'medium',
            caption:
              'DNA bilgiyi uzun süre koruyan **arşiv**, RNA bu bilgiyi kullanılacağı yere taşıyan **çalışma kopyasıdır**. Yapı farkları görev farklarının sonucudur.',
            focus: [
              {
                title: 'DNA — arşiv',
                body: 'Çift zincirli ve daha kararlı yapı, kalıtsal bilginin korunmasını, kopyalanmasını ve karşı zincire bakılarak onarılmasını sağlar.',
              },
              {
                title: 'RNA — çalışma kopyası',
                body: 'Tek zincirlidir; hızlı üretilir, bilgiyi taşır ve görev bitince yıkılır. Riboz şekeri ve urasil bazı taşır.',
              },
              {
                title: 'Ribozomda bilgi kullanımı',
                body: 'RNA, DNA’daki dizilim bilgisini ribozoma getirir. Ribozom bu bilgiyi amino asit sırasına çevirerek proteinin yapımını başlatır.',
              },
            ],
            audio_script: `Görselin solundaki kalın, çift sarmala bak. Bu DNA. Onu bir arşiv gibi düşün: bilgi uzun süre korunacak, gerektiğinde eksiksiz kopyalanacak.

Şimdi sağdaki tek zincire geç. Bu RNA. Arşivin kendisi değil, arşivden alınmış geçici bir çalışma kopyası.

Sağdaki açık renkli yapıya dikkat et: ribozom. RNA üzerindeki bilgi burada okunur ve protein üretiminde kullanılır.

Buradaki sınav cümlesi şu: DNA saklar, RNA taşır ve kullandırır. Yapıları farklıdır çünkü görevleri farklıdır.`,
          },
          {
            id: 'nv-dr-compare',
            type: 'compare',
            interactive: true,
            title: 'DNA ve RNA karşılaştırması',
            columns: ['DNA', 'RNA'],
            rows: [
              { label: 'Şekeri', values: ['Deoksiriboz', 'Riboz'] },
              { label: 'Bazları', values: ['A, T, G, C', 'A, **U**, G, C — timin yerine urasil'] },
              { label: 'Zincir sayısı', values: ['Çift zincir (sarmal)', 'Tek zincir'] },
              { label: 'Baz eşitliği', values: ['A = T ve G = C geçerli', 'Geçerli değil'] },
              { label: 'Kendini eşleme', values: ['Eşleyebilir (replikasyon)', 'Eşleyemez'] },
              { label: 'Bulunduğu yer', values: ['Çekirdek, mitokondri, kloroplast', 'Çekirdek, sitoplazma, ribozom'] },
              { label: 'Görevi', values: ['Kalıtsal bilgiyi saklar ve aktarır', 'Bilgiyi taşır ve protein sentezinde kullanır'] },
            ],
            insight:
              'Farkların çoğu tek bir tasarım tercihine bağlanır: DNA **arşivdir**, RNA **kopyadır**. Arşivin kararlı ve korunaklı olması gerekir — bu yüzden çift zincirli ve daha dayanıklı şekerle yapılmıştır. Kopyanın ise hızlı üretilip iş bitince yok edilmesi gerekir — bu yüzden tek zincirli ve daha kısa ömürlüdür.',
          },
          {
            id: 'nv-dr-why',
            type: 'why',
            question: 'DNA neden çift zincirli? Tek zincir bilgiyi taşımaya yetmez miydi?',
            body: `Bilgiyi taşımaya yeterdi — RNA tek zincirle bunu zaten yapıyor. Ama DNA'nın işi bilgiyi taşımak değil, ==kuşaklar boyunca korumak==. İkinci zincir tam olarak bu iş için var.

İki somut faydası var:

**Birincisi: eşlenme kalıbı.** Baz eşleşmesi kuralı sabit olduğu için, bir zincirin dizilimi diğerini zorunlu kılar. Zincirler ayrıldığında her biri kendi karşısını yeniden yazdırabilir. Tek zincirli bir molekül böyle bir kalıp sunamaz.

**İkincisi: hata onarımı.** Bir zincirdeki baz bozulursa, hücrenin onarım enzimleri karşı zincire bakarak doğrusunun ne olması gerektiğini anlar. ==Yedeği olan bilgi düzeltilebilir; yedeği olmayan bilgi kaybolur.==

RNA'nın tek zincirli olması ise bir eksiklik değil, işine uygunluk. RNA kısa ömürlü bir kopyadır; korunması değil, hızlı üretilip görevi bitince yıkılması istenir.`,
          },
          {
            id: 'nv-dr-trap',
            type: 'trap',
            title: '“DNA sadece çekirdekte bulunur” demek',
            wrong: 'Ökaryot hücrede DNA’yı yalnızca çekirdeğe yerleştirmek.',
            right:
              'DNA çekirdeğin yanı sıra **mitokondri ve kloroplastta** da bulunur. Prokaryotlarda ise çekirdek yoktur; DNA doğrudan sitoplazmadadır.',
            body:
              'Mitokondri ve kloroplastın kendi DNA’sının olması rastlantı değil — endosimbiyoz teorisinin en güçlü kanıtlarından biri. AYT’de bu bağlantıyı ayrıntılı kuracaksın.',
          },
          {
            id: 'nv-dr-connection',
            type: 'connection',
            title: 'Zincirin tamamlanması',
            body:
              'Bir önceki bölümde “proteinin işlevini şekli, şeklini amino asit dizilimi belirler” demiştik ve orada bir soru açık kalmıştı: dizilimi kim belirliyor? Cevap burada — DNA’daki baz sırası. AYT’de Genden Proteine konusunda zincirin tamamını göreceksin: DNA → mRNA → amino asit sırası → protein şekli → işlev.',
            links: ['Proteinler ve enzimler', 'AYT · Genden Proteine', 'Kalıtım'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-atp',
        kind: 'deepen',
        title: 'ATP: nükleotitten türeyen enerji taşıyıcısı',
        lead: 'ATP’yi bu bölümün sonuna bıraktık çünkü yapısını ancak nükleotidi gördükten sonra tanıyabilirsin.',
        blocks: [
          {
            id: 'nv-atp-figure',
            type: 'figure',
            kind: 'atp-yapisi',
            width: 'full',
            title: 'ATP yapısı ve ATP–ADP dönüşümü',
            purpose:
              'ATP’nin bir nükleotit türevi olduğunu göstermek ve enerji aktarımının hangi bağdan geldiğini işaretlemek.',
            complexity: 'medium',
            caption:
              'Adenin + riboz + fosfat = bir nükleotit. ATP’de fosfat sayısı üçe çıkar, o kadar. ==ATP bambaşka bir molekül değil, tanıdığın yapının bir varyasyonudur.==',
            focus: [
              {
                title: 'Adenin',
                body: 'Nükleik asitlerde de bulunan organik baz. RNA’nın adenin nükleotidiyle aynı bazdır — ATP ile nükleik asitler arasındaki akrabalık buradan gelir.',
              },
              {
                title: 'Riboz',
                body: 'Beş karbonlu şeker. RNA’daki şekerle aynıdır. Adenin ile riboz birlikte **adenozin** adını alır; molekülün adındaki “adenozin” buradan gelir.',
              },
              {
                title: 'Üç fosfat',
                body: 'Arka arkaya bağlı üç fosfat grubu. Adının açılımı bu: **A**denozin **T**ri**f**osfat. Fosfat sayısı ikiye inerse ADP, bire inerse AMP olur.',
              },
              {
                title: '“Yüksek enerjili” bağlar',
                body: 'Son iki fosfat arasındaki bağlar koptuğunda görece çok enerji açığa çıkar. Bunun sebebi bağın kendisinin olağanüstü olması değil; yan yana duran negatif yüklü fosfatların birbirini itmesi ve ayrıldıklarında daha kararlı hâle geçmeleridir.',
              },
            ],
            audio_script: `Bu şemayı soldan sağa oku.

Solda mor kutu: adenin. Bu bir organik baz ve nükleik asitlerde de var.

Yanında beşgen: riboz. Bu da tanıdık — RNA'nın şekeri.

Şimdi dur ve düşün: adenin artı riboz artı fosfat neye eşitti?

Bir nükleotide. Yani ATP'nin sol yarısı zaten bildiğin bir yapı.

Sağa devam et. Bir değil, üç fosfat var. Fark bu. Adının açılımı da bu: adenozin trifosfat.

Şimdi fosfatların arasındaki kırmızı dalgalı işaretlere bak. Bunlar yüksek enerjili bağlar.

Neden yüksek enerjili? Çünkü fosfatların hepsi negatif yüklü ve yan yana duruyorlar. Birbirlerini itiyorlar. Sıkıştırılmış bir yay gibi. Bağ koptuğunda o gerilim serbest kalıyor.

Alt satıra bak: ATP koptu, ADP ve fosfat kaldı, enerji açığa çıktı. Ve en sağdaki nota dikkat et — tepkime tersine de işliyor.`,
          },
          {
            id: 'nv-atp-prose',
            type: 'prose',
            body: `ATP'nin çalışma biçimi çok basit bir döngüdür:

**ATP → ADP + Pi + enerji** (hücre iş yaptığında)
**ADP + Pi + enerji → ATP** (hücre besin yıktığında)

Bu döngüyü ilk bölümde metabolizma şemasında görmüştün; şimdi molekülün kendisini de tanıyorsun.

Bir noktayı tekrar vurgulayalım, çünkü en sık yapılan hata burada: ==ATP bir enerji deposu değildir==. Kararsız bir moleküldür ve üretildikten sonra saniyeler içinde harcanır. Hücre ATP biriktirmez; ihtiyaç duydukça üretir.

Enerjinin gerçek deposu glikojen, nişasta ve yağdır. ATP ise o depolardan çekilen enerjiyi ==işin yapılacağı yere taşıyan araçtır==.`,
          },
          {
            id: 'nv-atp-checkpoint',
            type: 'checkpoint',
            prompt:
              'ATP hem enerji taşır hem de yapısı bir nükleotide benzer. Bu iki özelliğin aynı molekülde bulunması sence tesadüf mü, yoksa bir avantaj mı?',
            hint: 'Hücre kaç farklı molekül tipi üretmek zorunda kalıyor? Ve nükleotitler başka nerede kullanılıyor?',
            answer: `Tesadüf değil, ==ekonomi==.

Hücre zaten nükleotit üretmek zorundadır — DNA ve RNA için. Aynı yapı taşını küçük bir değişiklikle (fosfat sayısını üçe çıkararak) enerji taşıyıcısı olarak da kullanmak, hücreye ayrı bir üretim hattı kurma zahmetinden kurtarır.

Aynı ekonomi başka yerlerde de görülür: NAD ve FAD gibi elektron taşıyıcıları da nükleotit türevidir.

Buradan çıkan genel fikir şu: canlı sistemler mümkün olduğunca ==az sayıda yapı taşını çok sayıda işte== kullanır. Karbonhidratlarda aynı glikozdan nişasta, glikojen ve selüloz yapıldığını görmüştün; burada da aynı tasarım mantığı çalışıyor.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Bu bölümün en çok puan kaybettiren üç noktası aşağıda.',
        blocks: [
          {
            id: 'nv-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question: 'Vitaminlerle ilgili aşağıdakilerden hangisi **yanlıştır**?',
            options: [
              'Organik bileşiklerdir',
              'Enerji vermezler',
              'Tamamı vücutta üretilemez, dışarıdan alınmalıdır',
              'Sindirilmeden emilirler',
            ],
            answer_index: 2,
            explanation: `Yanlış ifade **C**. Vitaminlerin çoğu dışarıdan alınmak zorundadır ama **istisnalar vardır**:
- **K vitamini ve bazı B vitaminleri:** kalın bağırsaktaki yararlı bakteriler üretir.
- **D vitamini:** deride güneş ışığı yardımıyla sentezlenir.

Diğerleri doğru:
- **A:** Vitaminler organiktir — bu onları su ve minerallerden ayırır.
- **B:** Düzenleyicidirler, enerji vermezler.
- **D:** Küçük moleküllerdir; monomer–polimer yapısı taşımadıkları için sindirilmezler.

Bu soru tipinde "tamamı", "hepsi", "daima" kelimelerini gördüğünde bir istisna ara.`,
          },
          {
            id: 'nv-uyg-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir nükleik asit örneğinde adenin sayısı urasil sayısına eşit değil ve molekülde timin bulunmuyor. Bu molekül için ne söylenebilir?',
            options: [
              'Çift zincirli DNA’dır',
              'Tek zincirli RNA’dır',
              'Tek zincirli DNA’dır',
              'Hem DNA hem RNA karışımıdır',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. İki ipucu var ve ikisi de aynı sonuca çıkıyor:

- **Timin yok, urasil var** → molekül RNA’dır. Timin DNA’ya, urasil RNA’ya özgüdür.
- **A ≠ U** → baz eşitliği yok, yani zincirler karşılıklı değil. Bu tek zincirli olduğunu gösterir.

A ve C seçenekleri timin içermeyen bir DNA gerektirirdi ki bu mümkün değil. D seçeneği ise tek bir molekül için anlamsızdır.

Bu soru tipinde önce **baz kimliğine** (T mi U mu?), sonra **baz eşitliğine** bak. İkisi birlikte molekülü tek başına tanımlar.`,
          },
          {
            id: 'nv-uyg-quiz3',
            type: 'quiz',
            purpose: 'error',
            question: 'ATP ile ilgili aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Hücrenin uzun süreli enerji deposudur',
              'Yapısında adenin, riboz ve üç fosfat bulunur',
              'Yalnızca hayvan hücrelerinde üretilir',
              'Yıkıldığında ADP ve glikoz oluşur',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. ATP = adenin + riboz + 3 fosfat. Adı da bunu söyler: **A**denozin **T**ri**f**osfat.

Diğerleri neden yanlış:
- **A:** ATP kararsızdır ve hızla harcanır; depo değil **taşıyıcıdır**. Gerçek depolar glikojen, nişasta ve yağdır.
- **C:** ATP bütün canlı hücrelerde üretilir — bitki, bakteri, mantar dahil.
- **D:** ATP yıkıldığında ADP ve **inorganik fosfat** oluşur; glikozla ilgisi yoktur.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'nv-kapanis',
        kind: 'close',
        title: 'Konuyu kapatalım',
        lead: 'Bu, dört bölümlük konunun sonu. Önce bu bölümü, sonra dördünü birlikte toparlayalım.',
        blocks: [
          {
            id: 'nv-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Vitaminler **organiktir**, enerji vermez ve sindirilmez; çoğu koenzim olarak görev yapar.',
              'K ve bazı B vitaminleri bağırsak bakterilerince, D vitamini deride üretilir — “hepsi dışarıdan alınır” yanlıştır.',
              'Suda çözünenler (B, C) depolanmaz; yağda çözünenler (A, D, E, K) depolanır ve fazlası zehirlenme yapabilir.',
              'Nükleotit üç parçadan oluşur: fosfat + 5 karbonlu şeker + organik baz. Adı **bazdan** gelir.',
              'Bir nükleik asitte fosfat = şeker = baz = nükleotit sayısıdır.',
              'DNA’da A = T ve G = C (Chargaff); RNA tek zincirli olduğu için bu eşitlik **geçerli değildir**.',
              'A–T arasında 2, G–C arasında 3 hidrojen bağı bulunur.',
              'DNA çekirdeğin yanı sıra **mitokondri ve kloroplastta** da bulunur.',
              'ATP bir **nükleotit türevidir**: adenin + riboz + üç fosfat.',
              'ATP enerji **deposu değil taşıyıcısıdır**; kararsızdır ve sürekli kurulup bozulur.',
            ],
          },
          {
            id: 'nv-kap-connection',
            type: 'connection',
            title: 'Dört bölümü birlikte düşün',
            body: `Konu bitti. Şimdi geriye dönüp baktığında şu çerçeveyi görebilmelisin:

**Enerji verenler:** karbonhidrat, lipit, protein (son çare)
**Enerji vermeyenler:** su, mineral, vitamin, nükleik asit, ATP
**İnorganik olanlar:** su, mineral, asit–baz–tuz
**Organik olanlar:** kalan hepsi
**Sindirilmeden emilenler:** su, mineral, vitamin, monosakkarit, amino asit, yağ asidi

Sınavda "aşağıdakilerden hangisi ortaktır / hangisi değildir" tipi sorular tam olarak bu çerçeveden yazılır.`,
            links: ['Hücre', 'Hücre Bölünmeleri', 'AYT · Canlılarda Enerji Dönüşümleri'],
          },
          {
            id: 'nv-kap-memory',
            type: 'memory',
            body:
              'Bu bölümün tek cümlesi: *Vitamin düzenler, nükleik asit bilgiyi taşır, ATP enerjiyi taşır — üçü de enerji vermez.*',
          },
          {
            id: 'nv-kap-next',
            type: 'next_step',
            body: `Artık canlının neyden yapıldığını biliyorsun. Sıradaki konuda bu bileşenlerin ==nasıl bir araya gelip çalışan bir sistem oluşturduğuna== bakacağız: **Hücre**.

Orada fosfolipit çift tabakası hücre zarı olarak, proteinler taşıyıcı ve enzim olarak, nükleik asitler çekirdek içeriği olarak geri gelecek. Bu konuyu iyi kurduysan hücre çok daha kolay gelecek.`,
            topics: ['Hücre', 'Canlıların Sınıflandırılması'],
          },
          {
            id: 'nv-kap-audio',
            type: 'audio_script',
            body: `Konu bitti. Dört bölümü tamamladın.

Kapatmadan önce şunu yap: kâğıt kalem al ve iki sütun çiz. Bir tarafa enerji veren bileşikleri, diğer tarafa vermeyenleri yaz.

Sonra ikinci bir ayrım yap: organik olanlar ve inorganik olanlar.

Bu iki listeyi kitaba bakmadan çıkarabiliyorsan bu konu sende oturmuş demektir. Çıkaramıyorsan kapanış bölümündeki çerçeveye dön.

Sıradaki konu hücre. Orada bu bölümde öğrendiğin her şey tekrar karşına çıkacak — ama bu kez tek tek moleküller olarak değil, birlikte çalışan bir sistem olarak.`,
          },
        ],
      },
    ],
  },
}
