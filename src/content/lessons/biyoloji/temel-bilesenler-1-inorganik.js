/**
 * TYT BİYOLOJİ · Canlıların Temel Bileşenleri — 1. Bölüm
 * İNORGANİK BİLEŞİKLER: SU, MİNERALLER, ASİT–BAZ–TUZ
 * ==================================================================
 *
 * KONU NEDEN BÖLÜNDÜ?
 * "Canlıların Temel Bileşenleri" müfredatta dokuz alt başlık taşıyor.
 * Hepsini tek derse sıkıştırmak iki kötü sonuçtan birini doğuruyor:
 * ya ders 6.000 kelimeye çıkıp okunmaz oluyor, ya da her başlık iki
 * paragrafa inip yüzeyselleşiyor. Bu yüzden konu aynı başlık altında
 * SIRALI derslere bölündü (`order` alanı sırayı taşır).
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Su, özellik listesi olarak verilmiyor. Bütün özellikler TEK bir
 *   sebepten — molekülün açılı ve kutuplu olmasından — türetiliyor.
 *   Öğrenci sebebi bir kez kurarsa altı özelliği ayrı ayrı ezberlemiyor.
 *
 * · Minerallerin "enerji vermemesi" ve "sindirilmemesi" özellikle
 *   vurgulanıyor; TYT'de doğrudan puan kaybettiren iki ayrım bunlar.
 *
 * · pH'ın logaritmik olması ayrı bir uyarıyla veriliyor. Öğrencilerin
 *   neredeyse tamamı pH 5 ile 6 arasında "biraz" fark olduğunu sanıyor.
 *
 * · Tampon sistemler müfredat sınırında kalacak kadar anlatılıyor:
 *   mekanizmanın kimyası değil, homeostaziyle bağı önemli.
 */

export default {
  slug: 'temel-bilesenler-inorganik',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Temel Bileşenleri',
  },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'İnorganik Bileşikler: Su, Mineraller ve pH',
  subtitle:
    'Suyun bütün özelliklerini tek tek ezberleme. Hepsi tek bir sebepten çıkıyor — molekülün kutuplu olmasından. Önce o sebebi kur.',

  document: {
    version: 2,
    estimated_minutes: 28,
    prerequisites: [
      {
        topic: 'Canlıların Ortak Özellikleri',
        why: 'Metabolizma ve homeostazi kavramları burada sürekli kullanılacak.',
      },
      {
        topic: 'Temel kimya — atom, molekül, bağ',
        why: 'Kovalent bağ ve elektron paylaşımı fikri olmadan kutupluluk anlatılamaz.',
      },
    ],
    outcomes: [
      'Su molekülünün neden kutuplu olduğunu ve hidrojen bağının nasıl kurulduğunu açıklayabileceksin.',
      'Suyun altı temel özelliğini tek bir sebebe — kutupluluğa — bağlayabileceksin.',
      'Minerallerin canlılardaki görevlerini sayıp neden enerji vermediklerini gerekçelendirebileceksin.',
      'pH skalasının logaritmik olduğunu bilerek asit–baz karşılaştırması yapabileceksin.',
      'Tampon sistemlerin homeostaziyle ilişkisini kurabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'inorg-giris',
        kind: 'opening',
        title: 'Bir canlının çoğu sudur. Bu bir dolgu maddesi mi?',
        lead: 'Bu bölümde suyu “içinde her şeyin yüzdüğü sıvı” olmaktan çıkarıp aktif bir bileşen olarak göreceğiz.',
        blocks: [
          {
            id: 'inorg-giris-1',
            type: 'prose',
            body: `İnsan vücudunun yaklaşık %65'i, bir hücrenin ise %70–90'ı sudur. Denizanasında bu oran %98'e çıkar.

Bu sayıları duyunca akla gelen ilk düşünce genelde şudur: "demek ki canlının çoğu aslında boşluk, dolgu." Bu düşünce yanlış.

Su hücrede pasif bir dolgu değildir. ==Aynı anda dört ayrı iş yapar==:
- çözücüdür — tepkimelerin gerçekleşeceği ortamı sağlar
- tepkimeye girer — hidrolizde doğrudan kullanılır
- taşıyıcıdır — maddeleri hücreye sokar, atıkları çıkarır
- ısı düzenleyicidir — sıcaklığın ani değişmesini engeller

Bu dört işin dördü de aynı tek sebepten kaynaklanır. Bu dersin asıl konusu o sebep.`,
          },
          {
            id: 'inorg-giris-why',
            type: 'why',
            question: 'Su bu kadar sıradan bir molekülse, neden yaşam onsuz kurulamıyor?',
            body: `Su gerçekten sıradan görünür: iki hidrojen, bir oksijen. Buna rağmen uzayda yaşam ararken önce suyun izini sürmemizin bir sebebi var.

Bir canlının içindeki tepkimelerin neredeyse tamamı ==çözelti içinde== gerçekleşir. Katı hâlde moleküller birbirine ulaşamaz, gaz hâlde ise fazla dağınıktır. Tepkimenin olabilmesi için moleküllerin serbestçe hareket edip birbirini bulabildiği bir ortam gerekir.

Su bu ortamı sağlar ve bunu ==dar bir sıcaklık aralığında sıvı kalarak== yapar. Dünya koşullarında 0–100 °C arasında sıvıdır; bu aralık canlılık için tam da gereken aralıktır.

Üstelik su, sadece ortam sağlamakla kalmaz. Bir sonraki bölümde göreceğin gibi, tepkimelerin kendisine de katılır.`,
          },
          {
            id: 'inorg-giris-prose2',
            type: 'prose',
            body: `Bu derste inceleyeceğimiz **inorganik bileşikler** üç gruptur: su, mineraller ve asit–baz–tuzlar.

"İnorganik" kelimesi kafa karıştırabilir; bir bileşiği inorganik yapan şey canlıda bulunmaması değildir. Ayrım şudur:

- **Organik bileşikler** karbon–hidrojen iskeleti taşır ve genellikle canlılar tarafından üretilir. Karbonhidrat, lipit, protein, nükleik asit bu gruptadır.
- **İnorganik bileşikler** böyle bir iskelet taşımaz. Canlı bunları ==üretemez, dışarıdan hazır almak zorundadır==.

Bu ayrımın sınavdaki karşılığı doğrudan: inorganik bileşikler enerji vermez ve sindirilmez. Sebebini bölüm içinde tek tek göreceğiz.`,
          },
          {
            id: 'inorg-giris-note',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Suyun özelliklerini altı maddelik bir liste olarak ezberleme. O liste, kutupluluğun sonuçlarıdır. Sebebi kurarsan liste kendiliğinden çıkar.',
          },
          {
            id: 'inorg-giris-audio',
            type: 'audio_script',
            body: `Bu derse başlamadan bir soru sorayım: bir canlının %70'i su ise, geri kalan %30 neden bu kadar önemli görünüyor?

Cevap şu: su o %30'un çalışabilmesi için gereken şartları kuruyor. Proteinler suda katlanıyor, tepkimeler suda yürüyor, maddeler suyla taşınıyor.

Şimdi asıl soruya geç: su bunu nasıl başarıyor? Cevap tek bir molekülün biçiminde saklı.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-su-yapi',
        kind: 'build',
        title: 'Sebep: molekül açılıdır, bu yüzden kutupludur',
        lead: 'Buradaki tek cümleyi anlarsan bölümün geri kalanı kendiliğinden gelir.',
        blocks: [
          {
            id: 'inorg-su-figure',
            type: 'figure',
            kind: 'su-polarlik',
            width: 'full',
            title: 'Suyun kutupluluğu ve hidrojen bağı',
            purpose:
              'Suyun bütün biyolojik özelliklerinin kaynağı olan kutupluluğu ve bundan doğan hidrojen bağını tek görselde kurmak.',
            complexity: 'medium',
            caption:
              'Molekül düz olsaydı yükler birbirini götürür, su kutupsuz kalırdı. ==Açılı olması== her şeyi değiştiriyor: bir uç kısmi negatif, diğer uç kısmi pozitif oluyor.',
            focus: [
              {
                title: 'Kutupluluk',
                body: 'Oksijen, hidrojenden daha güçlü çeker; ortak elektronlar oksijene daha yakın durur. Oksijen ucu kısmi negatif (δ−), hidrojen uçları kısmi pozitif (δ+) yüklenir. Molekül nötrdür ama yük dağılımı eşit değildir.',
              },
              {
                title: 'Hidrojen bağı',
                body: 'Bir molekülün δ+ hidrojeni, komşu molekülün δ− oksijenini çeker. Bu çekim kovalent bağdan çok daha zayıftır ve sürekli kopup yeniden kurulur — ama sayıları çok olduğu için toplamda güçlü davranır.',
              },
            ],
            audio_script: `Şemanın soluna bak. Tek bir su molekülü var.

Ortadaki kırmızı büyük küre oksijen, iki küçük gri küre hidrojen. Şimdi dikkat: bu üçü düz bir çizgi üzerinde durmuyor. Aralarında yüz dört buçuk derecelik bir açı var.

Bir saniye dur ve şunu düşün: molekül düz olsaydı ne değişirdi?

Cevap: hiçbir şey olmazdı. İki hidrojen tam karşılıklı dursaydı, çekim etkileri birbirini götürür ve molekül kutupsuz kalırdı. Su o zaman yağ gibi davranırdı ve bu dersin tamamı gereksizleşirdi.

Şimdi sağa geç. Dört molekül var ve aralarında kesikli çizgiler görüyorsun. Bunlar hidrojen bağları. Bir molekülün artı ucu, diğerinin eksi ucunu çekiyor.

Bu bağların zayıf olduğunu unutma. Sürekli kopuyor, sürekli yeniden kuruluyor. Suyun akışkan olması bu yüzden. Ama aynı anda milyarlarcası bulunduğu için toplamda güçlü davranıyorlar.`,
          },
          {
            id: 'inorg-su-concept',
            type: 'concept',
            term: 'Hidrojen bağı',
            body: `Kutuplu bir moleküldeki kısmi pozitif hidrojen ile komşu moleküldeki kısmi negatif atom (oksijen, azot, flor) arasındaki **zayıf** çekimdir.

İki noktaya dikkat et:
- Bu bir **bağ** değil, güçlü bir **çekimdir**. Kovalent bağın yaklaşık yirmide biri kadar güçlüdür.
- Zayıf olması bir kusur değil, bir tasarımdır: kolay kurulup kolay koptuğu için canlı sistemler hızlı değişebilir.

Hidrojen bağı sadece suda yoktur. ==Proteinlerin katlanmasını ve DNA'nın iki zincirini bir arada tutan da bu bağdır.== Bu yüzden şimdi kuracağın fikir iki yıl boyunca geri gelecek.`,
          },
          {
            id: 'inorg-su-connection',
            type: 'connection',
            title: 'Bu bağ nerede tekrar karşına çıkacak?',
            body:
              'Hidrojen bağı, biyolojinin en çok tekrar eden kavramlarından biri. Proteinlerin üç boyutlu şeklini, DNA çift sarmalını ve bitkilerde suyun yapraklara kadar çıkmasını hep bu zayıf çekim açıklar.',
            links: ['Proteinler ve enzimler', 'Nükleik asitler — DNA yapısı', 'Bitki Biyolojisi — su taşınması'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-su-ozellik',
        kind: 'deepen',
        title: 'Sonuç: kutupluluktan doğan altı özellik',
        lead: 'Şimdi listeye geçiyoruz — ama her maddenin yanında “neden” sütunu var. Ezberlemen gereken tek şey sebep.',
        blocks: [
          {
            id: 'inorg-su-table',
            type: 'table',
            interactive: true,
            title: 'Özellik → sebep → biyolojik sonuç',
            columns: ['Özellik', 'Kutuplulukla bağı', 'Canlıdaki sonucu'],
            rows: [
              [
                'Çözücülük',
                'Kutuplu su, kutuplu ve iyonik maddeleri sarıp ayırır',
                'Tepkimeler suda yürür; maddeler kanda ve öz suda taşınır',
              ],
              [
                'Yüksek özgül ısı',
                'Isının bir kısmı hidrojen bağlarını kırmaya harcanır',
                'Vücut sıcaklığı ani değişmez — homeostazi korunur',
              ],
              [
                'Yüksek buharlaşma ısısı',
                'Buharlaşmak için çok sayıda bağın kopması gerekir',
                'Terleme az suyla çok ısı atar',
              ],
              [
                'Kohezyon (su–su)',
                'Moleküller hidrojen bağıyla birbirine tutunur',
                'Bitkide su sütunu kopmadan yaprağa kadar çıkar',
              ],
              [
                'Adezyon (su–yüzey)',
                'Kutuplu su, kutuplu yüzeylere de tutunur',
                'Kılcal borularda su yükselir',
              ],
              [
                'Katı hâli suda yüzer',
                'Donarken hidrojen bağları düzenli açılır, hacim artar',
                'Göl yüzeyden donar; altta canlılar yaşamaya devam eder',
              ],
            ],
            caption:
              'Sağdaki sütuna dikkat et: her özellik bir **canlılık sorununu** çözüyor. Sınavda genelde ortadaki sütun atlanıp doğrudan sol ile sağ eşleştirilmesi istenir.',
          },
          {
            id: 'inorg-su-why',
            type: 'why',
            question: 'Buz neden suda batmaz? Bu neden hayat kurtarır?',
            body: `Maddelerin neredeyse tamamı katı hâlde daha yoğundur, çünkü tanecikler soğuyunca birbirine yaklaşır. Su bu kuralın dışında kalır.

Su donarken hidrojen bağları **düzenli** bir kafes yapısına oturur ve bu kafes, sıvı hâldeki dağınık dizilimden ==daha fazla yer kaplar==. Hacim artınca yoğunluk düşer; buz suyun üstünde kalır.

Sonucu düşün: göl yüzeyden donmaya başlar. Yüzeydeki buz tabakası bir yalıtkan gibi davranır ve altındaki suyun donmasını yavaşlatır. Balıklar ve diğer su canlıları kışı dip suda geçirebilir.

Su normal davransaydı göller dipten donardı ve her kış bütün göl ekosistemi yok olurdu.`,
          },
          {
            id: 'inorg-su-note2',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Kohezyon su–su, adezyon su–başka yüzey arasındadır. Sınavda ikisi bilinçli olarak yer değiştirilir; hangisinin “aynı tür molekül” olduğunu hatırla.',
          },
          {
            id: 'inorg-su-trap',
            type: 'trap',
            title: 'Suyu yalnızca çözücü sanmak',
            wrong:
              '“Su tepkimelerin gerçekleştiği ortamdır” deyip bırakmak; suyun kendisinin tepkimeye girdiğini atlamak.',
            right:
              'Su birçok tepkimede **doğrudan tepkimeye girer**. Büyük moleküllerin sindirimi (hidroliz) su harcanarak gerçekleşir; sentez tepkimelerinde ise su **açığa çıkar**. Yani su hem ortam hem tepken hem üründür.',
            body:
              'Bu yüzden "su tüketilmez, sadece çözer" biçimindeki bir öncül yanlıştır. Hidroliz konusunu bir sonraki bölümde ayrıntılı göreceksin.',
          },
          {
            id: 'inorg-su-checkpoint',
            type: 'checkpoint',
            prompt:
              'Çöl bitkilerinin çoğu gündüz stomalarını kapatır ve terlemeyi neredeyse durdurur. Bu davranışın bitkiye bir maliyeti var mı? Suyun hangi özelliği üzerinden düşünmelisin?',
            hint: 'Terleme yalnızca su kaybı mı, başka bir işe de yarıyor mu?',
            answer: `Evet, maliyeti var — ve tam olarak suyun **yüksek buharlaşma ısısı** özelliğiyle ilgili.

Terleme bitkinin serinleme yöntemidir: suyun buharlaşması çok fazla ısı götürür, çünkü buharlaşmak için çok sayıda hidrojen bağının kopması gerekir. Stomalar kapanınca bu soğutma durur ve yaprak sıcaklığı yükselir.

Ayrıca stomalar kapalıyken CO₂ de giremez; fotosentez yavaşlar.

Yani çöl bitkisi ==su kaybını azaltmak için hem serinlemeden hem fotosentezden ödün verir==. Biyolojide tek yönlü kazanç neredeyse hiç yoktur; her uyum bir bedelle gelir.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-mineral',
        kind: 'build',
        title: 'Mineraller: az miktarda, ama vazgeçilmez',
        lead: 'Mineraller vücudun çok küçük bir kısmını oluşturur. Buna rağmen eksiklikleri doğrudan hastalıkla sonuçlanır. Sebebini görelim.',
        blocks: [
          {
            id: 'inorg-min-prose',
            type: 'prose',
            body: `Mineraller **inorganik** maddelerdir; yani karbon–hidrojen iskeleti taşımazlar. Canlıya ==dışarıdan hazır alınırlar== ve vücutta üretilemezler.

Üç ortak özellikleri sınav açısından kritiktir:

- **Sindirilmezler.** Zaten monomer değildirler, parçalanacak bir bağ yoktur; sindirim sisteminde olduğu gibi emilirler.
- **Enerji vermezler.** Yıkıldıklarında ATP üretilmez.
- **Hem yapıya katılırlar hem düzenleyicidirler.** Kemikteki kalsiyum yapıya katılmadır; enzimi çalıştıran çinko düzenlemedir.

Vücutta ihtiyaç duyulan miktara göre ikiye ayrılırlar: günde 100 mg'dan fazlası gerekenler **makro mineral**, daha azı yetenler **mikro mineral (iz element)**.`,
          },
          {
            id: 'inorg-min-table',
            type: 'table',
            interactive: true,
            title: 'Sık sorulan mineraller ve görevleri',
            columns: ['Mineral', 'Nerede görev alır', 'Eksikliğinde'],
            rows: [
              ['Kalsiyum (Ca)', 'Kemik ve diş yapısı, kas kasılması, kan pıhtılaşması', 'Kemik erimesi, kaslarda kramp'],
              ['Fosfor (P)', 'ATP, DNA–RNA, fosfolipit, kemik', 'Enerji aktarımı ve kemik yapımı bozulur'],
              ['Demir (Fe)', 'Hemoglobinin yapısı — oksijen taşınması', 'Kansızlık (anemi)'],
              ['İyot (I)', 'Tiroksin hormonunun yapısı', 'Guatr'],
              ['Magnezyum (Mg)', 'Klorofilin yapısı, birçok enzimin çalışması', 'Bitkide yaprak sararması'],
              ['Sodyum–Potasyum (Na, K)', 'Sinir hücresinde uyartı iletimi, osmotik denge', 'İletim ve sıvı dengesi bozulur'],
            ],
            caption:
              'Bu tabloyu ezberlemeden önce mantığını kur: mineral genelde **bir molekülün yapısına katılır** (Fe→hemoglobin, I→tiroksin, Mg→klorofil, P→ATP) ya da **bir enzimi çalıştırır**.',
          },
          {
            id: 'inorg-min-trap',
            type: 'trap',
            title: 'Minerallerin enerji verdiğini sanmak',
            wrong: '“Demir eksikliğinde halsizlik oluyor, demek ki demir enerji veriyor” diye düşünmek.',
            right:
              'Mineraller enerji vermez. Demir eksikliğinde halsizlik olmasının sebebi, hemoglobin üretilemediği için **oksijen taşınamaması** ve dolayısıyla oksijenli solunumun aksamasıdır. Enerji yine besinlerden gelir; demir sadece o zincirin bir parçasını mümkün kılar.',
            body: 'Aynı mantık su için de geçerlidir: su da enerji vermez. “Enerji veren bileşikler” denince cevap karbonhidrat, lipit ve proteindir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-ph',
        kind: 'deepen',
        title: 'Asitler, bazlar, tuzlar ve pH',
        lead: 'Enzimlerin çalışıp çalışmaması büyük ölçüde buna bağlı. Bu yüzden pH, kimyadan çok biyolojinin konusu.',
        blocks: [
          {
            id: 'inorg-ph-concept',
            type: 'concept',
            term: 'Asit, baz ve tuz',
            body: `- **Asit:** Suda çözündüğünde H⁺ (hidrojen iyonu) veren maddedir. pH'ı 7'nin altındadır.
- **Baz:** Suda OH⁻ veren ya da ortamdaki H⁺'yi alan maddedir. pH'ı 7'nin üstündedir.
- **Tuz:** Bir asitle bir bazın tepkimesinden (nötrleşme) oluşan bileşiktir; yanında su açığa çıkar.

**pH**, bir çözeltideki H⁺ derişiminin ölçüsüdür. H⁺ arttıkça pH düşer — yani sayı küçüldükçe asitlik artar.`,
          },
          {
            id: 'inorg-ph-figure',
            type: 'figure',
            kind: 'ph-skalasi',
            width: 'full',
            title: 'pH skalası',
            purpose: 'Skalanın logaritmik olduğunu ve biyolojik sıvıların dar bir aralıkta tutulduğunu göstermek.',
            complexity: 'low',
            caption:
              'Kanın pH’ı 7,35–7,45 gibi çok dar bir aralıkta tutulur. Bu aralığın dışına çıkmak enzimlerin şeklini bozar ve metabolizmayı durdurur — yani pH bir konfor değil, ==hayatta kalma== meselesidir.',
            focus: [
              { title: 'Asidik bölge', body: 'pH 7’nin altı. Ortamda H⁺ fazladır. Mide öz suyu (pH ≈ 1,5–2) proteinleri parçalayan pepsin enzimi için gerekli ortamı sağlar.' },
              { title: 'Nötr nokta', body: 'pH 7. Saf suda H⁺ ve OH⁻ derişimleri eşittir. Hücre içi genellikle bu değere yakın tutulur.' },
              { title: 'Bazik bölge', body: 'pH 7’nin üstü. Ortamda OH⁻ fazladır. İnce bağırsakta safra ve pankreas öz suyu ortamı bazikleştirir; oradaki enzimler bu ortamda çalışır.' },
            ],
            audio_script: `Bu ölçeğe bakarken bir noktayı kaçırma.

Ölçek sıradan bir sayı doğrusu değil. Logaritmik. Yani pH beş ile pH altı arasındaki fark bir birim değil, on kat.

Şimdi kan işaretine bak. Yedi virgül dört civarında, çok dar bir aralıkta. Bu tesadüf değil; vücut bu aralığı aktif olarak koruyor.

Bir de mide öz suyuna bak. Neredeyse iki. Kan ile mide arasında beş buçuk birimlik fark var. Logaritmik ölçekte bu, yaklaşık üç yüz bin kat demek.

Aynı vücutta, aynı anda. Bu farkı kurmak ve korumak başlı başına bir iş — ve o işin adı homeostazi.`,
          },
          {
            id: 'inorg-ph-prose',
            type: 'prose',
            body: `Enzimlerin her biri belirli bir pH aralığında en verimli çalışır. Bu aralığın dışına çıkıldığında enzimin üç boyutlu şekli bozulur ve iş göremez hâle gelir.

Bu yüzden canlılar pH'ı rastgele bırakamaz. Kanın pH'ı 7,35–7,45 arasında tutulur; bu aralıktan sapma doğrudan yaşamı tehdit eder.

Sabit tutmayı sağlayan yapılara **tampon (buffer) sistemler** denir. Ortama H⁺ eklendiğinde onu bağlar, H⁺ azaldığında salarlar; böylece pH'daki dalgalanmayı sınırlarlar. İnsanda en önemlisi karbonik asit–bikarbonat tampon sistemidir.`,
          },
          {
            id: 'inorg-ph-connection',
            type: 'connection',
            title: 'Tampon = homeostazi',
            body:
              'Tampon sistemler, bir önceki konuda öğrendiğin negatif geri bildirimin kimyasal karşılığıdır: bir sapma oluşur, sistem onu söndürür. Aynı mantığı AYT’de solunum ve boşaltım sistemlerinde tekrar göreceksin — akciğer CO₂ atarak, böbrek H⁺ atarak aynı işi yapar.',
            links: ['Canlıların Ortak Özellikleri — homeostazi', 'AYT · Solunum Sistemi', 'AYT · Üriner Sistem'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Bu bölümdeki sorular ezber değil, çıkarım istiyor. Cevaba bakmadan önce gerçekten dene.',
        blocks: [
          {
            id: 'inorg-uyg-worked',
            type: 'worked_example',
            title: 'Özgül ısı ve iklim',
            prompt:
              'Deniz kıyısındaki bir şehirde gece ile gündüz arasındaki sıcaklık farkı, aynı enlemdeki iç kesim şehrine göre belirgin biçimde daha azdır. Bu farkı suyun hangi özelliği açıklar ve mekanizması nedir?',
            steps: [
              {
                title: 'Hangi özellik sıcaklık değişimiyle ilgili, onu seç',
                body: 'Çözücülük, kohezyon veya adezyon sıcaklıkla ilgili değil. Sıcaklık değişimini yavaşlatan özellik **yüksek özgül ısıdır**.',
              },
              {
                title: 'Özgül ısının yüksek olmasının sebebini yaz',
                body: 'Suya verilen ısının bir kısmı sıcaklığı yükseltmek yerine hidrojen bağlarını kırmaya harcanır. Bu yüzden aynı miktarda ısı, suyun sıcaklığını karadan çok daha az yükseltir.',
              },
              {
                title: 'Gündüz ne olur?',
                body: 'Güneş enerjisi hem karayı hem denizi ısıtır. Kara hızla ısınır, deniz çok daha yavaş ısınır ve kıyıdaki havayı serin tutar.',
              },
              {
                title: 'Gece ne olur?',
                body: 'Kara hızla soğur. Deniz ise gündüz depoladığı ısıyı yavaşça salar ve kıyıyı ılık tutar.',
              },
            ],
            answer:
              'Suyun yüksek özgül ısısı. Deniz gündüz yavaş ısınıp gece yavaş soğuduğu için kıyıdaki sıcaklık dalgalanmasını baskılar.',
            takeaway:
              'Aynı mekanizma vücut içinde de çalışır: hücrenin çoğu su olduğu için metabolizmadan çıkan ısı sıcaklığı ani yükseltmez. ==Ekolojik ölçekte gördüğün şey, hücre ölçeğinde de geçerlidir.==',
          },
          {
            id: 'inorg-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Su ve mineraller için aşağıdakilerden hangisi **ortak** bir özelliktir?',
            options: [
              'Yıkıldıklarında ATP üretilmesi',
              'Sindirilmeden hücreye alınabilmeleri',
              'Karbon iskeleti taşımaları',
              'Yalnızca ototrof canlılarda bulunmaları',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **sindirilmeden alınabilmeleri**. İkisi de inorganiktir, monomer–polimer yapısı taşımaz, dolayısıyla parçalanacak bir bağ yoktur; doğrudan emilirler.

Diğerleri neden yanlış:
- **ATP üretimi:** Ne su ne mineral enerji verir. Enerji veren bileşikler karbonhidrat, lipit ve proteindir.
- **Karbon iskeleti:** İkisi de inorganiktir; karbon–hidrojen iskeleti organik bileşiklerin özelliğidir.
- **Yalnızca ototroflarda:** Bütün canlılarda bulunurlar.`,
          },
          {
            id: 'inorg-uyg-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir çözeltinin pH’ı 4’ten 6’ya çıkarılıyor. Bu değişim için aşağıdakilerden hangisi doğrudur?',
            options: [
              'Çözelti 2 kat daha az asidik hâle gelmiştir',
              'H⁺ derişimi 100 kat azalmıştır',
              'H⁺ derişimi 100 kat artmıştır',
              'Çözelti bazik hâle gelmiştir',
            ],
            answer_index: 1,
            explanation: `pH skalası logaritmiktir: bir birimlik değişim 10 kat derişim farkı demektir. 4’ten 6’ya iki birim çıkıldığı için H⁺ derişimi 10 × 10 = **100 kat azalmıştır**.

- A yanlış: fark 2 kat değil, 100 kat.
- C yanlış: pH yükseldiğinde H⁺ **azalır**, artmaz.
- D yanlış: pH 6 hâlâ 7’nin altındadır, yani çözelti hâlâ asidiktir — sadece daha az asidik.

Bu soru tipinde önce “kaç birim değişti?” sorusunu sor, sonra 10’un o kuvvetini al.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'inorg-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Maddeleri okurken her birine “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'inorg-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Su molekülü **açılıdır**, bu yüzden kutupludur; oksijen ucu δ−, hidrojen uçları δ+ yüklenir.',
              'Kutupluluk hidrojen bağını doğurur. Bu bağ zayıftır ama sayısı çok olduğu için toplamda güçlüdür.',
              'Suyun çözücülük, yüksek özgül ısı, buharlaşma ısısı, kohezyon, adezyon ve donunca genleşme özelliklerinin **tamamı** kutupluluktan çıkar.',
              'Su yalnızca ortam değildir; hidrolizde tepkimeye girer, sentezde ürün olarak açığa çıkar.',
              'Buz suda yüzer çünkü donarken hidrojen bağları düzenli açılıp hacmi artırır — bu, göllerin dipten donmasını engeller.',
              'Mineraller sindirilmez, enerji vermez; hem yapıya katılır hem düzenleyici görev yapar.',
              'Mineral genelde ya bir molekülün yapısına girer (Fe→hemoglobin, I→tiroksin, Mg→klorofil) ya da bir enzimi çalıştırır.',
              'pH logaritmiktir: bir birimlik fark 10 kat derişim farkı demektir.',
              'Tampon sistemler pH dalgalanmasını sınırlar; bu, homeostazinin kimyasal karşılığıdır.',
            ],
          },
          {
            id: 'inorg-kap-memory',
            type: 'memory',
            body:
              'Suyla ilgili herhangi bir soruda önce şunu sor: *bu özellik kutupluluktan mı, hidrojen bağından mı çıkıyor?* İkisinden biri neredeyse her zaman cevabı verir.',
          },
          {
            id: 'inorg-kap-next',
            type: 'next_step',
            body: `Şimdi organik bileşiklere geçiyoruz. Sıradaki bölümde karbonhidratları ve lipitleri göreceksin.

Orada ilk öğreneceğin şey, bu bölümde tanıştığın suyun rolünü tamamlayacak: büyük moleküller ==su açığa çıkararak== kuruluyor, ==su harcanarak== yıkılıyor.`,
            topics: ['Karbonhidratlar ve lipitler', 'Proteinler ve enzimler'],
          },
          {
            id: 'inorg-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Kapatmadan önce şunu dene:

Suyun altı özelliğini saymaya çalışma. Onun yerine tek bir cümle kur — "su kutupludur, çünkü molekülü açılıdır" — ve bu cümleden yola çıkarak özellikleri kendin türet.

Türetebiliyorsan bu bölüm sende oturmuş demektir. Türetemiyorsan şemaya dön; listeye değil, şemaya.`,
          },
        ],
      },
    ],
  },
}
