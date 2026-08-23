/**
 * GOLD STANDARD DERS #1 — MİTOKONDRİ (AYT Biyoloji)
 * ==================================================================
 *
 * Bu ders bir demo değildir. Kalite referansıdır: ileride üretilecek
 * bütün dersler bu belgeye bakarak ölçülecek (§56, §57).
 *
 * ÖLÇÜT ŞU: konuyu daha önce hiç görmemiş, gece evinde tek başına çalışan
 * bir öğrenci, yalnızca bu materyalle mitokondriyi öğrenebilmeli (§66).
 * Bu yüzden ders kısa değil — ama içinde tek bir dolgu cümlesi de yok.
 * "Öz" demek az yazmak değil, gereksiz kelimeyi atmak demektir (§4).
 *
 * İÇERİK KARARLARI
 *
 * · ATP bilançosu 30–32 olarak verilir, 36–38 DEĞİL. Eski kaynaklardaki
 *   36–38 rakamı NADH başına 3 ATP kabulünden geliyordu; güncel müfredat
 *   2,5 kabul ediyor. Öğrenci ikisiyle de karşılaşacağı için ders bu farkı
 *   saklamak yerine açıkça anlatır — sınavda kafa karışıklığının kaynağı
 *   tam olarak burasıdır.
 *
 * · Pirüvat oksidasyonu ayrı bir evre olarak gösterilir ama "dördüncü evre"
 *   diye ezberletilmez; matrikste olduğu için Krebs ile aynı durakta anılır.
 *
 * · Kristanın lümeni zarlar arası boşlukla süreklidir. Bu ayrıntı gereksiz
 *   gibi görünür ama kemiozmozu anlamanın anahtarıdır: proton nereye
 *   birikiyor sorusu ancak bununla cevaplanır.
 */

export default {
  slug: 'hucresel-solunum-mitokondri',

  /**
   * YERLEŞİM KARARI
   * Ders MEB'de iki üniteye yayılıyor: mitokondrinin yapısı 9. sınıf
   * "Hücre" ünitesinde, hücresel solunumun ayrıntısı (glikoliz, Krebs,
   * ETS, kemiozmoz) 12. sınıf "Canlılarda Enerji Dönüşümleri" ünitesinde.
   *
   * Dersin ağırlığı ikinciye ait olduğu için AYT'ye yerleştirildi. Bir
   * önceki sürümde "AYT > Biyoloji > Hücre" yazıyordu — ama AYT Biyoloji
   * müfredatında "Hücre" diye bir konu YOK (o konu TYT'de). Seed betiği o
   * konuyu bulamayıp yenisini oluşturacak ve ağaca gerçekte var olmayan
   * bir başlık ekleyecekti.
   *
   * TYT "Hücre" konusuna ayrıca organel düzeyinde bir ders yazılacak; o
   * ders buraya bağlantı verecek.
   */
  placement: {
    examType: 'AYT',
    subject: 'Biyoloji',
    topic: 'Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)',
  },
  order: 10,
  partLabel: 'Hücresel solunum',
  goldStandard: true,

  title: 'Mitokondri: Hücrenin Enerji Santrali Nasıl Çalışır?',
  subtitle:
    'Yapıyı ezberleme. Her parçanın hangi işi yaptığını gör — bu konudaki soruların neredeyse tamamı yapı ile işlev arasındaki bağdan çıkıyor.',
  document: {
    version: 2,
    estimated_minutes: 34,
    prerequisites: [
      { topic: 'Hücre ve organeller', why: 'Organel kavramı ve zar yapısı oturmadan “çift zarlı olmak” bir anlam ifade etmez.' },
      { topic: 'Hücre zarından madde geçişi', why: 'Proton gradyanı, derişim farkı fikrinin üzerine kuruluyor.' },
      { topic: 'ATP ve enerji', why: 'ATP’nin ne olduğunu bilmeden bu dersin tamamı havada kalır.' },
    ],
    outcomes: [
      'Mitokondrinin her bölümünün hangi işi yaptığını söyleyebileceksin.',
      'Hücresel solunumun üç evresini doğru yerlere yerleştirebileceksin.',
      'Krista sayısının hücreden hücreye neden değiştiğini açıklayabileceksin.',
      'Oksijenin solunumda tam olarak ne yaptığını bir cümlede anlatabileceksin.',
      'ATP bilançosunun neden 30–32 verildiğini ve eski 36–38 rakamının nereden geldiğini bileceksin.',
      'Endosimbiyoz kanıtlarını sayıp her birinin neyi kanıtladığını söyleyebileceksin.',
    ],

    sections: [
      /* ================================================================
         1) AÇILIŞ
         ================================================================ */
      {
        id: 'mito-giris',
        kind: 'opening',
        title: 'Önce şu soruyu sor: hücre enerjiyi neden depolamıyor?',
        lead: 'Bu derse organel tanımıyla başlamayacağız. Önce mitokondrinin çözdüğü problemi göreceğiz; yapıyı ondan sonra konuşursak her parça bir işe karşılık gelmiş olur.',
        blocks: [
          {
            id: 'mito-giris-1',
            type: 'prose',
            body: `Bir kas hücresinde yaklaşık 5.000 mitokondri bulunabilir. Aynı vücuttaki bir deri hücresinde bu sayı birkaç yüzü geçmez. Olgun alyuvarda ise hiç yoktur.

Aynı canlının hücreleri, aynı DNA'ya sahip. O hâlde bu farkı yaratan şey ne? Cevap basit ama önemli: ==her hücre kendi enerji ihtiyacı kadar mitokondri taşır==. Mitokondri sayısı bir rastlantı değil, hücrenin yaptığı işin doğrudan ölçüsüdür.

Bu, konuyu boydan boya kesen fikirdir. Bu derste ne zaman bir yapı görsen, kendine "bu yapı hangi işi kolaylaştırıyor?" diye sor. Sınav soruları da tam olarak bu bağı ölçüyor.`,
          },
          {
            id: 'mito-giris-energy-figure',
            type: 'figure',
            width: 'full',
            title: 'Enerji ihtiyacı arttıkça mitokondri sayısı artar',
            purpose: 'Aynı DNA’ya sahip farklı hücrelerin iş yükü ile mitokondri sayısı arasındaki ilişkiyi karşılaştırmak.',
            complexity: 'low',
            image_url: '/lesson-assets/mitokondri/hucre-enerji-ihtiyaci.jpg',
            image_srcset:
              '/lesson-assets/mitokondri/hucre-enerji-ihtiyaci-720.jpg 720w, /lesson-assets/mitokondri/hucre-enerji-ihtiyaci.jpg 1440w',
            image_sizes: '(min-width: 1024px) 56rem, (min-width: 640px) 90vw, 100vw',
            image_width: 1440,
            image_height: 960,
            alt: 'Solda çok sayıda mitokondri içeren kalp kası hücresi, ortada daha az mitokondrili deri hücresi, sağda çekirdeksiz ve mitokondrisiz olgun alyuvar karşılaştırması.',
            caption:
              'Aynı DNA, farklı iş yükü: organel sayısını hücrenin adı değil, yaptığı iş ve buna bağlı **ATP ihtiyacı** belirler.',
            focus: [
              { title: 'Sol · Kalp kası', body: 'Kesintisiz kasılma yüksek ATP gerektirir; mitokondriler kasılma liflerinin arasında yoğunlaşır.' },
              { title: 'Orta · Deri hücresi', body: 'Enerji ihtiyacı daha düşüktür; aynı hücre hacminde mitokondri sayısı belirgin biçimde azalır.' },
              { title: 'Sağ · Olgun alyuvar', body: 'Mitokondrisi yoktur; taşıdığı oksijeni kendi solunumunda tüketmez.' },
            ],
          },
          {
            id: 'mito-giris-why',
            type: 'why',
            question: 'Peki hücre enerjiyi neden bir kenarda depolayıp gerektiğinde kullanmıyor?',
            body: `Çünkü ATP depolanabilecek bir molekül değildir. ATP kararsızdır; hücre onu üretir üretmez harcar. Bir insan hücresindeki ATP'nin tamamı, ortalama bir hızda çalışan hücrede yaklaşık **bir dakikada** tükenip yeniden üretilir.

Yani hücre ATP'yi bir kilerde saklamaz; kesintisiz çalışan bir santral gibi sürekli üretir. Depolanan şey ATP değil, ATP'ye çevrilecek **yakıttır** — glikojen ve yağ.

Bu yüzden mitokondri "enerji deposu" değil, ==enerji dönüştürücüdür==. Depo kelimesi seni yanıltmasın.`,
          },
          {
            id: 'mito-giris-kavram',
            type: 'concept',
            term: 'Mitokondri',
            body: `Ökaryot hücrelerde bulunan, **çift zarlı**, kendine ait halkasal DNA'sı ve ribozomu olan; besinlerdeki kimyasal bağ enerjisini oksijen kullanarak ATP'ye dönüştüren organeldir.

Bu tanımdaki her kelimenin bir karşılığı var ve dersin geri kalanı bu karşılıkları tek tek açacak:
- **çift zarlı** → iki farklı ortam yaratır, gradyan bu sayede kurulur
- **halkasal DNA + ribozom** → yarı özerklik, endosimbiyoz kanıtı
- **oksijen kullanarak** → oksijenin görevi zincirin sonundadır, başında değil`,
          },
          {
            id: 'mito-giris-note',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Mitokondriyi "enerji üreten organel" diye ezberleyip geçersen ileride oksijenli solunumda zorlanırsın. Asıl bağlantı ATP üretim mekanizmasıdır — organelin adı değil.',
          },
          {
            id: 'mito-giris-baglanti',
            type: 'connection',
            title: 'Bu konu tek başına durmuyor',
            body: `Mitokondri, biyolojinin üç ayrı yerinden aynı anda beslenen bir konu. Buradan çıkan bilgi ileride şu üç yerde geri gelecek:`,
            links: [
              'Hücresel solunum — evrelerin yeri',
              'Fotosentez — kloroplastla karşılaştırma',
              'Kalıtım — mitokondriyal DNA anneden geçer',
            ],
          },
          {
            id: 'mito-giris-audio',
            type: 'audio_script',
            label: 'Giriş · Mitokondri hangi problemi çözüyor?',
            target_block_id: 'mito-giris-1',
            highlight_block_ids: ['mito-giris-why'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Sakin, sıcak ve profesyonel bir öğretmen tonu kullan; abartma.',
            body: `Merhaba. Bu derste mitokondriyi anlatacağım, ama klasik bir tanımla başlamayacağım.

Muhtemelen daha önce şunu duydun: mitokondri hücrenin enerji santralidir. Bu cümle doğru, ama tek başına sana hiçbir şey kazandırmaz. Çünkü asıl soru şu: santral ne demek?

Şöyle düşün. Bir şehirde elektrik santrali vardır, bir de elektrik deposu. Santral üretir, depo saklar. Mitokondri bunlardan hangisi? Bir saniye dur ve karar ver.

Cevap: santral. Depo değil. Ve bunun çok somut bir sebebi var.

Hücrenin harcadığı enerji birimi ATP. Ama ATP kararsız bir molekül; hücre onu ürettiği anda harcıyor. Ortalama bir hücredeki ATP'nin tamamı yaklaşık bir dakika içinde tükenip yeniden üretiliyor. Yani hücre ATP'yi bir kenara koyup saklayamıyor.

Peki neyi depoluyor? Yakıtı. Glikojeni, yağı. Depolanan şey ATP değil, ATP'ye çevrilecek ham madde.

Şimdi burada dikkat etmeni istediğim bir nokta var. Mitokondri enerjiyi yoktan üretmiyor; dönüştürüyor. Besindeki kimyasal bağ enerjisini, hücrenin kullanabileceği forma çeviriyor. Bu ayrımı bugün kurarsan, ileride fotosentezde de aynı mantığı rahatça kullanırsın.

Son bir şey. Bir kas hücresinde beş bine yakın mitokondri bulunabilir. Aynı vücuttaki bir deri hücresinde birkaç yüz. Olgun alyuvarda ise hiç yok. Aynı DNA, farklı sayı. Bu farkı yaratan şey, hücrenin yaptığı iş.

Bu derste ne zaman yeni bir yapı görsen kendine tek bir soru sor: bu yapı hangi işi kolaylaştırıyor? Sınav soruları da tam olarak bunu ölçüyor.`,
          },
        ],
      },

      /* ================================================================
         2) YAPI
         ================================================================ */
      {
        id: 'mito-yapi',
        kind: 'build',
        title: 'Yapı: iki zar, iki ayrı ortam',
        lead: 'Şimdi organeli açıp içine bakıyoruz. Şemayı ezberlemeye çalışma; her parçayı gördüğünde "bu neden burada?" sorusunu sor. Cevapları hemen altında.',
        blocks: [
          {
            id: 'mito-yapi-figure',
            type: 'figure',
            kind: 'mitokondri-yapi',
            width: 'full',
            title: 'Mitokondrinin yapısı',
            purpose: 'Öğrencinin iki zarın yarattığı iki ayrı ortamı ve kristanın gerçek konumunu görmesi.',
            complexity: 'high',
            caption:
              'Kristaların içi matrikse değil, **zarlar arası boşluğa** açılır. Bu ayrıntı gereksiz görünüyor ama kemiozmozu anlamanın anahtarı: protonlar tam olarak buraya birikiyor.',
            focus: [
              { title: 'Dış zar', body: 'Düzdür ve porin proteinleri taşır. Küçük moleküller ve iyonlar buradan neredeyse serbestçe geçer. Yani dış zar bir bariyer değil, bir sınırdır.' },
              { title: 'Zarlar arası boşluk', body: 'İki zarın arasındaki dar bölge. Kimyasal olarak sitoplazmaya benzer ama bir farkı var: burada H⁺ derişimi yüksektir. Enerjinin geçici olarak "biriktirildiği" yer burasıdır.' },
              { title: 'İç zar', body: 'Seçici geçirgendir; küçük moleküller bile taşıyıcı olmadan geçemez. Elektron taşıma sistemi ve ATP sentaz enzimi bu zarın üzerindedir. Dersin geri kalanı büyük ölçüde bu zarla ilgili.' },
              { title: 'Krista', body: 'İç zarın matrikse doğru yaptığı katlanmalar. Tek işlevi yüzey alanını artırmaktır — daha fazla yüzey, daha fazla ETS ve ATP sentaz demektir.' },
              { title: 'Matriks', body: 'İç zarın çevrelediği sıvı bölge. Krebs döngüsü enzimleri, pirüvat oksidasyonu enzimleri, halkasal DNA ve ribozomlar burada bulunur.' },
              { title: 'Halkasal DNA ve 70S ribozom', body: 'Mitokondri kendi proteinlerinin bir kısmını kendi üretir. Bu yarı özerkliğin kanıtı ve endosimbiyoz teorisinin en güçlü dayanağıdır.' },
            ],
            audio_script: `Şimdi bu şemaya biraz daha yakından bakalım. Acele etme, sırayla gideceğiz.

Önce en dıştaki çizgiye bak. Bu dış zar. Düz olduğuna dikkat et — hiç katlanmamış. Sebebi var: dış zarın işi geçirgen bir sınır olmak, bir şey üretmek değil.

Şimdi içeri gir. İki zarın arasında ince bir boşluk göreceksin. Bu bölgeyi aklında tut, dersin ilerleyen kısmında buraya döneceğiz. Şimdilik sadece şunu bil: burası dar. Dar olması işimize yarayacak.

Şimdi ikinci zara bak. Katlanmış olan bu. Bu katlanmalara krista deniyor. Kristaların içine dikkatlice bak — içleri matriksle mi dolu, yoksa zarlar arası boşlukla mı bağlantılı? Bir saniye dur ve karar ver.

Cevap: zarlar arası boşlukla bağlantılı. Krista bir cep değil, bir girinti. Bu yüzden içi de aynı ortam. Öğrencilerin yarısı bunu yanlış hatırlıyor ve sonra protonların nereye biriktiği sorusunda takılıyor.

Son olarak ortadaki geniş alana bak. Burası matriks. İçindeki halkaya ve küçük noktalara dikkat et: halkasal DNA ve ribozomlar. Bir organelin kendi DNA'sı olması sıradan bir şey değil. Bu ayrıntı dersin sonunda bambaşka bir konuya, endosimbiyoz teorisine açılacak.`,
          },
          {
            id: 'mito-yapi-prose',
            type: 'prose',
            body: `Şemadaki en önemli bilgi şu: iki zar, ==birbirinden kimyasal olarak farklı iki ortam== yaratıyor. Matriks ve zarlar arası boşluk.

Tek zarlı bir organel bunu yapamaz. İki farklı ortam olmadan derişim farkı olmaz; derişim farkı olmadan da bu organelin ATP üretme yöntemi çalışmaz. Yani "çift zarlı olmak" bir yapı ayrıntısı değil, bütün mekanizmanın ön koşuludur.`,
          },
          {
            id: 'mito-yapi-audio-zar',
            type: 'audio_script',
            label: 'Çift zar yapısı',
            target_block_id: 'mito-yapi-figure',
            highlight_block_ids: ['mito-yapi-prose'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Sakin, sıcak ve profesyonel bir öğretmen tonu kullan; abartma.',
            body: `Şimdi organeli açıp içine giriyoruz. Ekrandaki şemaya bak; birlikte gezeceğiz.

Mitokondriyi incelerken ilk dikkat etmeni istediğim nokta şu: bu organel tek bir zarla değil, iki ayrı zarla çevrili. Ve bu iki zar birbirinin kopyası değil. İkisi farklı iş yapıyor.

En dıştaki çizgiye bak. Bu dış zar. Düz, hiç katlanmamış. Üzerinde porin denilen geçit proteinleri var; bu yüzden küçük moleküller ve iyonlar buradan neredeyse serbestçe geçiyor. Yani dış zar bir bariyer değil, sadece bir sınır.

Şimdi biraz içeri gir. İki zarın arasında ince bir aralık göreceksin. Buraya zarlar arası boşluk diyoruz. Şimdilik tek bir şeyi aklında tut: burası dar. Az sonra bu darlık işimize yarayacak.

Devam et. İkinci zara geldin. İç zar. Bu zar seçici geçirgen; dış zarın aksine buradan her şey geçemez. Dersin geri kalanı büyük ölçüde bu zarla ilgili olacak, çünkü ATP üreten yapıların hepsi bu zarın üzerinde duruyor.

En ortada kalan geniş sıvı bölge ise matriks.

Şimdi bir saniye dur ve yapıyı zihninde canlandır. Dıştan içe doğru dört katman var: dış zar, zarlar arası boşluk, iç zar, matriks. Bunu düz bir liste gibi değil, iç içe geçmiş bir yapı gibi düşün. Bir kutunun içinde ikinci bir kutu var; aradaki ince aralık da zarlar arası boşluk.

Peki bunca zahmet niye? İşte asıl cevap burada. İki zar, birbirinden kimyasal olarak farklı iki ortam yaratıyor. Matriks ayrı bir ortam, zarlar arası boşluk ayrı bir ortam. Tek zarlı bir organel bunu yapamaz.

Burada ezberlemek yerine mantığını anlamanı istiyorum. Çift zarlı olmak bir yapı ayrıntısı değil; bu organelin ATP üretme yönteminin ön koşulu.`,
          },
          {
            id: 'mito-yapi-compare',
            type: 'compare',
            title: 'İki zar, iki farklı iş',
            columns: ['Dış zar', 'İç zar'],
            rows: [
              { label: 'Biçim', values: ['Düz, katlanmamış', 'Kristalar hâlinde katlanmış'] },
              { label: 'Geçirgenlik', values: ['Porinler sayesinde küçük moleküllere geçirgen', 'Seçici geçirgen; H⁺ taşıyıcısız geçemez'] },
              { label: 'Üzerindeki yapılar', values: ['Taşıyıcı porin proteinleri', 'Elektron taşıma sistemi + ATP sentaz'] },
              { label: 'Yüzey alanı', values: ['Sabit', 'Hücrenin enerji ihtiyacına göre artar'] },
              { label: 'İşlevi', values: ['Sınır çizmek', 'ATP üretmek'] },
            ],
            insight:
              'İki zarın işlevi arasındaki fark, geçirgenlik farkından doğuyor. İç zar H⁺ geçirmediği için proton bir tarafta birikebiliyor. Dış zar geçirgen olduğu için burada bir birikim mümkün değil — bu yüzden ATP dış zarda değil, iç zarda üretilir.',
          },
          {
            id: 'mito-yapi-why-krista',
            type: 'why',
            question: 'İç zar neden katlanmış?',
            body: `Çünkü ATP üreten enzimler bir sıvının içinde yüzmüyor; ==zarın üzerine oturmuş durumdalar==. Enzim sayısını artırmanın tek yolu, onları taşıyan zarın yüzey alanını artırmak.

Katlanma bunu organelin hacmini büyütmeden yapar. Bir sayfayı akordeon gibi katladığında sayfa aynı çekmeceye sığar ama uzunluğu birkaç katına çıkar; iç zar da tam bunu yapar.

Sonuç doğrudan gözlemlenebilir: kalp kası ve karaciğer hücrelerindeki mitokondriler yoğun kristalıdır, düşük enerji ihtiyacı olan hücrelerinki ise seyrek. ==Krista yoğunluğu, hücrenin enerji ihtiyacının doğrudan göstergesidir.==`,
          },
          {
            id: 'mito-yapi-note-2',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Soruda "bu iki mitokondriden hangisi daha aktif bir hücreye aittir?" diye bir görsel gelirse cevabı krista yoğunluğuna bakarak verirsin. Boyut değil, katlanma sayısı.',
          },
          {
            id: 'mito-yapi-checkpoint',
            type: 'checkpoint',
            prompt: 'Bir bilim insanı, iç zarı yapay olarak H⁺ geçirgen hâle getiriyor. Mitokondri ATP üretmeye devam edebilir mi?',
            hint: 'Proton bir yerde birikmezse ne olmaz?',
            answer: `Hayır, edemez.

İç zar H⁺ geçirgen olursa protonlar zarın iki tarafına eşit dağılır ve derişim farkı ortadan kalkar. ATP sentaz, protonların ==tek bir yönden, kendi içinden== akmasıyla çalışır. Proton her yerden geçebiliyorsa ATP sentazdan geçmesi için bir sebep kalmaz.

Elektron taşıma sistemi bir süre daha çalışmaya devam eder, hatta protonları pompalamayı sürdürür — ama pompaladığı protonlar hemen geri sızacağı için ortaya ATP değil ısı çıkar. (Kışın uyanan kış uykusundaki hayvanlarda kahverengi yağ dokusu tam olarak bunu yapar.)`,
          },
          {
            id: 'mito-yapi-audio',
            type: 'audio_script',
            label: 'Krista ve yüzey alanı',
            target_block_id: 'mito-yapi-why-krista',
            highlight_block_ids: ['mito-yapi-note-2'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Sakin, sıcak ve profesyonel bir öğretmen tonu kullan; abartma.',
            body: `Şimdi iç zara geri dönüyoruz, çünkü onunla işimiz bitmedi.

Şemaya tekrar bak. İç zarın düz olmadığını, matrikse doğru kıvrımlar yaptığını göreceksin. Bu kıvrımlara krista diyoruz.

Devam etmeden önce şunu düşünmeni istiyorum: iç zar bu kadar kıvrımlıysa, bunun hücreye nasıl bir avantaj sağlayabileceğini tahmin edebilir misin?

Cevap yüzey alanı. ATP üreten enzimler sıvının içinde yüzmüyor; zarın üzerine oturmuş durumdalar. Enzim sayısını artırmak istiyorsan, onları taşıyan zarın alanını artırmak zorundasın. Katlanmak bunu, organelin dış boyutunu hiç büyütmeden yapıyor.

Bir kâğıdı akordeon gibi katladığını düşün. Kâğıt aynı çekmeceye sığmaya devam eder ama uzunluğu birkaç katına çıkar. İç zar tam olarak bunu yapıyor.

Bu zinciri aklında bir bütün olarak tut: krista yüzey alanını artırır; artan yüzey elektron taşıma sistemi ve ATP sentaz için daha çok yer demektir; daha çok yer de daha çok ATP demektir. Krista, yüzey alanı, ATP. Üç halka.

Bunun gözle görülür bir sonucu var. Kalp kası ve karaciğer hücrelerindeki mitokondrilerde kristalar sık ve derindir; enerji ihtiyacı düşük hücrelerde ise seyrektir.

Burası sınavlarda karşına çıkan bir detay. Sana iki mitokondri görseli verilip hangisinin daha aktif bir hücreye ait olduğu sorulursa, cevabı boyuta bakarak vermeyeceksin. Krista yoğunluğuna bakacaksın.

Bir de şu ayrımı şimdiden netleştirelim, çünkü çok karıştırılıyor. Krista iç zarın kıvrımıdır; matriks ise iç zarın çevrelediği sıvı bölgedir. Biri zar, diğeri ortam. Aynı şey değiller.`,
          },
        ],
      },

      /* ================================================================
         3) SOLUNUMUN YERİ
         ================================================================ */
      {
        id: 'mito-solunum',
        kind: 'deepen',
        title: 'Hücresel solunum tam olarak nerede oluyor?',
        lead: 'Bu bölümdeki tek hedef şu: hangi evrenin nerede gerçekleştiğini bir daha karıştırmaman. Bu karışıklık çözülmeden ATP bilançosu da anlaşılmıyor.',
        blocks: [
          {
            id: 'mito-solunum-figure',
            type: 'figure',
            kind: 'solunum-haritasi',
            width: 'full',
            title: 'Üç durak, üç ayrı yer',
            purpose: 'Evre adlarını mekânlarına bağlamak; glikolizin mitokondri dışında olduğunu görsel olarak sabitlemek.',
            complexity: 'medium',
            caption:
              'Glikoliz mitokondrinin **dışında** başlar. Bu, konunun en sık karıştırılan noktası — şemadaki 1 numaralı durağın hücre içinde ama organel dışında olduğuna dikkat et.',
            focus: [
              { title: 'Glikoliz', body: 'Sitoplazmada gerçekleşir, oksijen gerektirmez ve mitokondrisi olmayan hücreler bile bunu yapabilir. Glikoz burada iki pirüvata parçalanır; net kazanç 2 ATP ve 2 NADH.' },
              { title: 'Pirüvat oksidasyonu ve Krebs döngüsü', body: 'Pirüvat matrikse girer. Önce asetil-CoA’ya dönüşür, sonra Krebs döngüsüne katılır. Buradan çıkan asıl ürün ATP değil, elektron taşıyıcılarıdır: NADH ve FADH₂. Soluduğun karbondioksit de tam olarak burada oluşur.' },
              { title: 'ETS ve kemiozmoz', body: 'İç zarda gerçekleşir. NADH ve FADH₂ taşıdıkları elektronları buraya boşaltır, elektronlar zincir boyunca aktarılırken protonlar pompalanır ve ATP’nin büyük çoğunluğu burada üretilir.' },
            ],
            audio_script: `Şimdi bu haritaya bak ve parmağını hücrenin sol tarafına koy. Buradayız: sitoplazma. Glikoliz burada oluyor, mitokondrinin daha içine bile girmedik.

Bu çok önemli. Glikoliz mitokondride olmuyor. Sınavda sana "mitokondrisi olmayan bir hücre glikoz parçalayabilir mi?" diye sorulduğunda cevabın burada.

Şimdi parmağını sağa kaydır, organelin içine gir. Ortadaki geniş alandasın: matriks. İki numaralı durak burada. Krebs döngüsü burada dönüyor ve soluduğun karbondioksit burada oluşuyor.

Son olarak katlanmış zara bak. Üç numaralı durak orada. Şimdi şu üç yeri sırayla tekrar et: sitoplazma, matriks, iç zar. Bu üçlüyü karıştırmadan söyleyebiliyorsan bu konunun en sık kaybedilen puanını kurtardın demektir.`,
          },
          {
            id: 'mito-solunum-prose',
            type: 'prose',
            body: `Bu üç durağı ezberlemek yerine aralarındaki mantığı kur: her durak bir öncekinin ürününü alıyor.

Glikoliz, glikozu ikiye böler ama içindeki enerjinin çok küçük bir kısmını alabilir — çünkü oksijen kullanmaz ve glikozu tam olarak parçalayamaz. Elde ettiği şey iki pirüvat, yani hâlâ enerji dolu iki molekül.

Krebs döngüsü bu pirüvatları sonuna kadar parçalar; geriye karbondioksitten başka bir şey kalmaz. Ama dikkat et: Krebs'in kendisi de neredeyse hiç ATP üretmez. Ürettiği şey **elektron taşıyıcılarıdır**.

Asıl ATP üretimi üçüncü durakta, iç zarda olur. Yani ilk iki evre aslında birer *hazırlık* — enerjiyi ATP'ye değil, taşınabilir bir forma (NADH ve FADH₂) çevirirler.`,
          },
          {
            id: 'mito-solunum-trap',
            type: 'trap',
            title: 'Glikolizi mitokondriye yerleştirmek',
            wrong:
              '“Hücresel solunum mitokondride gerçekleşir” cümlesinden yola çıkıp glikolizi de matrikse yerleştirmek. Bu, glikoliz ile solunumu tek bir kutuya koymaktan doğuyor.',
            right:
              'Hücresel solunumun **birinci evresi sitoplazmada** gerçekleşir. Mitokondri ikinci evrede devreye girer. Bu yüzden mitokondrisi olmayan bir bakteri bile glikoliz yapabilir.',
            body: `Bu ayrımın sınavdaki karşılığı doğrudan: olgun alyuvarda mitokondri yoktur, ama alyuvar glikoliz yaparak ATP üretmeye devam eder. Sadece verim düşüktür — glikoz başına 2 ATP.`,
          },
          {
            id: 'mito-solunum-exam',
            type: 'exam',
            title: 'Bu bölüm sınavda nasıl karşına çıkar?',
            body: 'Bu konudan gelen sorular neredeyse hiçbir zaman "glikoliz nerede olur?" diye açık açık sormaz. Bilgiyi bir senaryonun içine gizler ve senden yeri kendin çıkarmanı bekler.',
            patterns: [
              'Mitokondrisi çıkarılmış / hiç olmayan bir hücrede hangi evrelerin devam edeceği sorulur.',
              'Oksijensiz ortamda hangi evrenin çalışmaya devam ettiği sorulur (cevap: glikoliz).',
              'Radyoaktif işaretli glikozun karbonunun hangi bileşikte, nerede ortaya çıkacağı sorulur.',
              'İç zarı hasarlı bir mitokondride hangi evrenin durduğu sorulur.',
            ],
          },
          {
            id: 'mito-solunum-audio',
            type: 'audio_script',
            label: 'Matriks ve solunumun üç durağı',
            target_block_id: 'mito-solunum-figure',
            highlight_block_ids: ['mito-solunum-prose', 'mito-solunum-trap'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Uyarı cümlelerinde tonunu değiştir ve hafifçe vurgula; gerisi sakin kalsın.',
            body: `Şimdi matriksin içinde ne olduğuna bakalım, çünkü orası sadece boş bir sıvı değil.

Matrikste üç şey var. Birincisi enzimler: pirüvat oksidasyonunun ve Krebs döngüsünün enzimleri burada. İkincisi mitokondrinin kendi halkasal DNA'sı. Üçüncüsü kendi ribozomları. Son ikisine dersin ilerleyen bölümünde ayrıca döneceğiz.

Şimdi mitokondriyi hücresel solunumdan kopuk düşünmemen için üç durağı yerlerine yerleştirelim. Ekrandaki haritaya bak.

Birinci durak: glikoliz. Burada çok dikkat et. Glikoliz mitokondride olmuyor; sitoplazmada, yani organelin dışında oluyor. Glikoz burada ikiye bölünüyor, iki pirüvat çıkıyor ve net kazanç sadece iki ATP.

İkinci durak: matriks. Pirüvat buraya giriyor, önce asetil koenzim A'ya dönüşüyor, sonra Krebs döngüsüne katılıyor. Nefesinle dışarı verdiğin karbondioksit tam olarak burada oluşuyor.

Üçüncü durak: iç zar. Elektron taşıma sistemi burada ve ATP'nin büyük kısmı burada üretiliyor.

Şimdi bu üçlüyü sırayla tekrar et: sitoplazma, matriks, iç zar.

Burası sınavlarda en çok karıştırılan yer. Öğrencilerin çoğu, hücresel solunum mitokondride olur cümlesinden yola çıkıp glikolizi de matrikse yerleştiriyor. Bu yanlış. Ve bu ayrımı bilirsen soruda çok daha rahat ilerlersin: mitokondrisi olmayan olgun bir alyuvar bile glikoliz yaparak ATP üretmeye devam eder, sadece verimi düşüktür.

Bir şeyi daha fark et. İlk iki durak neredeyse hiç ATP üretmiyor. Ürettikleri şey elektron taşıyıcıları, yani NADH ve FADH2. Bir sonraki bölümün konusu tam olarak bu.`,
          },
          {
            id: 'mito-solunum-quiz',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir hücrenin mitokondrilerinin tamamı deney ortamında uzaklaştırılıyor. Ortamda bol miktarda glikoz ve oksijen var. Bu hücre için aşağıdakilerden hangisi doğrudur?',
            options: [
              'Hiç ATP üretemez, çünkü ATP üretimi tamamen mitokondride olur.',
              'Glikoliz devam eder ve glikoz başına net 2 ATP üretilir.',
              'Krebs döngüsü sitoplazmada devam eder, verim değişmez.',
              'Oksijen bulunduğu için ETS sitoplazmada çalışmayı sürdürür.',
            ],
            answer_index: 1,
            explanation: `Glikoliz sitoplazmada gerçekleşir ve mitokondriye ihtiyaç duymaz; bu yüzden devam eder ve glikoz başına net 2 ATP üretilir.

Diğer seçenekler neden yanlış:
- Krebs döngüsü enzimleri **matrikste** bulunur, mitokondri yoksa döngü de yoktur.
- ETS **iç zar** üzerindedir; ortamda oksijen olması bir şeyi değiştirmez, çünkü elektronları taşıyacak zar yok.

Buradaki asıl ders: oksijenin varlığı tek başına yetmez, oksijeni kullanacak yapının da bulunması gerekir.`,
          },
        ],
      },

      /* ================================================================
         4) MEKANİZMA
         ================================================================ */
      {
        id: 'mito-kemiozmoz',
        kind: 'deepen',
        title: 'ATP tam olarak nasıl üretiliyor?',
        lead: 'Buraya kadar "iç zarda üretiliyor" dedik ama nasıl olduğunu söylemedik. Şimdi o boşluğu dolduruyoruz. Bu bölüm dersin en zor kısmı; acele etme.',
        blocks: [
          {
            id: 'mito-kem-figure',
            type: 'figure',
            kind: 'kemiozmoz',
            width: 'full',
            title: 'Kemiozmoz: elektron akışının ATP’ye çevrilmesi',
            purpose: 'Elektron akışı → proton pompalanması → gradyanın ATP’ye çevrilmesi zincirini tek görselde kurmak.',
            complexity: 'high',
            caption:
              'Enerji zincirin başında ATP’ye çevrilmiyor. Önce **proton derişim farkına** dönüştürülüyor, ATP en sonda üretiliyor. Barajın suyu önce biriktirip sonra türbinden geçirmesi gibi.',
            focus: [
              { title: 'Proton gradyanı', body: 'Zarlar arası boşlukta H⁺ derişimi yükselir, matrikste düşük kalır. Bu fark bir enerji birikimidir — tıpkı barajda tutulan su gibi. Kristalar bu dar hacmi daha da küçülterek gradyanın hızlı kurulmasını sağlar.' },
              { title: 'Elektron taşıma sistemi', body: 'NADH ve FADH₂ elektronlarını buraya bırakır. Elektronlar kompleksler arasında aktarılırken açığa çıkan enerji, protonları matriksten dışarı pompalamak için kullanılır. FADH₂ zincire daha ileriden katıldığı için daha az proton pompalatır — ATP verimi de bu yüzden düşüktür.' },
              { title: 'Oksijenin görevi', body: 'Oksijen zincirin **sonunda** elektronları alır ve H⁺ ile birleşip su oluşturur. Yani oksijen ATP üretmez; zincirin sonundaki elektronları temizler. Temizlenmezse zincir tıkanır ve bütün sistem durur.' },
              { title: 'ATP sentaz', body: 'İç zarda gömülü bir enzim. Protonların geri akabildiği tek kapıdır. Protonlar bu kapıdan geçerken enzimin bir kısmı fiziksel olarak döner ve bu dönme, ADP ile fosfatı birleştirerek ATP üretir.' },
            ],
            audio_script: `Bu şemaya bakarken sırayı takip et, hepsine aynı anda bakma.

Önce üstteki bölgeye bak. Burası zarlar arası boşluk ve H⁺ yazılarının çokluğuna dikkat et. Şimdi alttaki bölgeye bak: matriks. Orada çok daha az H⁺ var. Aradaki bu fark, dersin bütün cevabı.

Şimdi ortadaki mor kutulara bak. Bunlar elektron taşıma sisteminin kompleksleri. Aralarındaki kesikli ok elektronun yolunu gösteriyor. Elektron bu yolda ilerlerken enerji açığa çıkıyor ve o enerji protonları yukarı pompalıyor. Yukarı doğru kıvrılan okları takip et.

Bir saniye dur ve şunu düşün: bu protonlar sonsuza kadar yukarıda kalabilir mi?

Kalamaz. Aşağı geri dönmek istiyorlar. Ama iç zar onları geçirmiyor. Tek bir kapı var — sağdaki büyük yapıya bak. ATP sentaz. Protonlar oradan geçerken ATP üretiliyor.

Son olarak sağ alttaki oksijen satırına bak. Oksijen ATP üretmiyor. Zincirin sonunda elektronları alıp suya çeviriyor. Bu farkı iyi kur; çok sık karıştırılıyor.`,
          },
          {
            id: 'mito-kem-mechanism',
            type: 'mechanism',
            title: 'Zinciri üç hamlede kur',
            body: 'Bu mekanizmayı ezberlemek yerine üç adımlık bir hikâye olarak tut. Sınavda hangi ayrıntı sorulursa sorulsun, hikâyeyi kurabiliyorsan cevabı çıkarırsın.',
            steps: [
              {
                title: 'Elektronlar zincire girer',
                body: 'Krebs döngüsünden gelen NADH ve FADH₂, taşıdıkları yüksek enerjili elektronları iç zardaki komplekslere bırakır. Elektron kompleksler arasında aktarıldıkça enerjisi kademe kademe düşer.',
              },
              {
                title: 'Açığa çıkan enerjiyle proton pompalanır',
                body: 'Her aktarımda açığa çıkan enerji, H⁺ iyonlarını matriksten zarlar arası boşluğa **pompalamak** için kullanılır. Bu, derişime karşı yapılan aktif bir taşımadır. Sonuçta zarın iki yanı arasında hem derişim hem yük farkı oluşur.',
              },
              {
                title: 'Gradyan ATP’ye çevrilir',
                body: 'Biriken protonlar geri dönmek ister ama iç zar onları geçirmez. Tek geçiş noktası ATP sentazdır. Protonlar bu enzimin içinden akarken enzimin bir bölümü döner ve bu mekanik dönme, ADP + Pi → ATP tepkimesini gerçekleştirir.',
              },
            ],
          },
          {
            id: 'mito-kem-audio-atp',
            type: 'audio_script',
            label: 'ATP nasıl üretiliyor · kemiozmoz',
            target_block_id: 'mito-kem-mechanism',
            highlight_block_ids: ['mito-kem-figure'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Bu bölüm zor. Normalden biraz yavaş konuş, adım aralarında kısa duraklama bırak.',
            body: `Buraya kadar ATP iç zarda üretilir dedik ama nasıl olduğunu söylemedik. Şimdi o boşluğu dolduruyoruz. Dersin en zor kısmı burası, o yüzden biraz yavaşlayacağım.

Önce şunu netleştirelim: ATP nedir, neden gerekli? ATP hücrenin harcanabilir enerji birimi. Kas kasılması, maddelerin zardan aktif taşınması, protein üretimi; hepsi ATP harcıyor. Yani mitokondri ATP üretir demek, aslında hücrenin bütün işlerinin faturasını mitokondri öder demek.

Şimdi üretimin kendisine bakalım. Üç hamlede kuracağız.

Birinci hamle. Krebs döngüsünden gelen NADH ve FADH2, taşıdıkları yüksek enerjili elektronları iç zardaki komplekslere bırakıyor. Elektron bu kompleksler arasında elden ele aktarılırken enerjisi kademe kademe düşüyor.

İkinci hamle. Açığa çıkan bu enerji boşa gitmiyor. Protonları, yani hidrojen iyonlarını matriksten zarlar arası boşluğa pompalamak için kullanılıyor. Az önce dar olduğunu söylediğim o boşluğu hatırlıyor musun? Protonlar orada birikiyor. Boşluğun dar olması, derişimin hızla yükselmesini sağlıyor.

Şimdi bir saniye dur ve düşün. Bu protonlar sonsuza kadar orada kalabilir mi?

Kalamaz. Geri dönmek istiyorlar. Ama iç zar onları geçirmiyor. Tek bir kapı var.

Üçüncü hamle. O kapının adı ATP sentaz. İç zara gömülü bir enzim ve protonların geri akabildiği tek yol. Protonlar bu enzimin içinden akarken enzimin bir bölümü fiziksel olarak dönüyor; bu dönme hareketi ADP ile fosfatı birleştirip ATP'yi oluşturuyor.

Bu sistemin adı kemiozmoz. Bir barajı düşün: önce suyu biriktirirsin, sonra türbinden geçirirsin. Enerji zincirin başında ATP'ye çevrilmiyor. Önce proton farkına dönüştürülüyor, ATP en sonda üretiliyor.

Bu bölümü kapatmadan şu üç cümleyi kendi kelimelerinle söylemeyi dene. Elektron akar. Proton birikir. Kapıdan geri geçerken ATP olur.`,
          },
          {
            id: 'mito-kem-why-o2',
            type: 'why',
            question: 'Oksijen olmazsa ne olur? Neden bu kadar kritik?',
            body: `Oksijen zincirin son halkasıdır. Elektronları alıp H⁺ ile birleşerek su oluşturur.

Oksijen yoksa elektronlar zincirin sonunda birikir ve ilerleyemez. Zincir tıkanınca proton pompalanması durur, gradyan çöker, ATP sentaz durur. Ama etkisi burada bitmez: ==NADH elektronunu boşaltamadığı için NAD⁺'a geri dönemez==. NAD⁺ bitince Krebs döngüsü de durur.

Yani oksijenin yokluğu sadece son evreyi değil, ondan önceki evreyi de durdurur. Bu, "oksijen ATP üretir" cümlesinin neden yanlış olduğunu gösterir: oksijen ATP üretmez, ==zincirin akışını mümkün kılar==.`,
          },
          {
            id: 'mito-kem-trap',
            type: 'trap',
            title: 'Oksijenin görevini yanlış yere koymak',
            wrong: '“Oksijen glikozu parçalar” ya da “oksijen ATP üretir.” Bu cümleler oksijeni sürecin başına koyuyor.',
            right:
              'Oksijen glikoza hiç dokunmaz. Görevi tek ve son adımdadır: elektron taşıma sisteminin sonunda **son elektron alıcısı** olmak ve su oluşturmak.',
            body: 'Bunu bir cümleyle sabitle: *Oksijen zincirin sonunda bekleyen temizlikçidir; olmazsa arkadaki her şey tıkanır.*',
          },
          {
            id: 'mito-kem-bilanco-figure',
            type: 'figure',
            kind: 'atp-bilancosu',
            width: 'wide',
            title: 'ATP bilançosu',
            purpose: 'ATP’nin neredeyse tamamının iç zardan geldiğini oransal olarak göstermek.',
            complexity: 'low',
            caption:
              'Toplam 30–32 ATP’nin yaklaşık **%88’i** iç zardan gelir. Krista yoğunluğunun neden hücreden hücreye değiştiği sorusunun cevabı bu orandır.',
            data: {
              range: [30, 32],
              range_note: 'Sitoplazmik NADH elektronlarının mitokondriye aktarılma yolu 2 ATP fark yaratır.',
              segments: [
                { label: 'Glikoliz', place: 'sitoplazma', atp: 2, tone: 'ink' },
                { label: 'Krebs döngüsü', place: 'matriks', atp: 2, tone: 'aqua' },
                { label: 'ETS + kemiozmoz', place: 'iç zar', atp: 28, tone: 'brand' },
              ],
            },
          },
          {
            id: 'mito-kem-table',
            type: 'table',
            title: 'Evre evre kazanç',
            columns: ['Evre', 'Yer', 'Doğrudan ATP', 'Taşıyıcı'],
            rows: [
              ['Glikoliz', 'Sitoplazma', 'net 2', '2 NADH'],
              ['Pirüvat oksidasyonu', 'Matriks', '—', '2 NADH'],
              ['Krebs döngüsü', 'Matriks', '2', '6 NADH + 2 FADH₂'],
              ['ETS + kemiozmoz', 'İç zar', '≈ 26–28', '—'],
            ],
            caption:
              'Sayılar **bir glikoz molekülü** içindir. Doğrudan ATP toplamı yalnızca 4; geri kalanının tamamı taşıyıcıların iç zarda bozdurulmasından gelir.',
          },
          {
            id: 'mito-kem-note-3638',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Eski kaynaklarda 36–38 ATP yazar. O rakam NADH başına 3 ATP kabulünden geliyordu; güncel kabul 2,5. Sınavda soru 30–32 üzerinden gelir ama eski kitaptan çalışıyorsan bu farkı bilerek oku.',
          },
          {
            id: 'mito-kem-prose-range',
            type: 'prose',
            body: `"Neden 30 ile 32 arasında bir aralık veriliyor, tek bir sayı değil?" diye sorabilirsin. İki sebebi var ve ikisi de mantıklı.

Birincisi: glikolizde üretilen NADH sitoplazmadadır, ama kullanılacağı yer iç zardır. İç zar NADH'ı doğrudan geçirmez; elektronları içeri bir mekik sistemiyle aktarılır. Hangi mekiğin kullanıldığı hücreye göre değişir ve bu 2 ATP'lik bir fark yaratır.

İkincisi: proton pompalama tam sayılı bir işlem değildir; NADH başına 2,5, FADH₂ başına 1,5 ATP değerleri ortalamalardır.

Yani aralık bir belirsizlik değil, ==ölçümün dürüst hâlidir==. Biyolojide tam sayı beklemek çoğu zaman yanlış bir alışkanlıktır.`,
          },
          {
            id: 'mito-kem-worked',
            type: 'worked_example',
            title: 'Zinciri kullanarak çözelim',
            prompt:
              'Bir hücrenin mitokondrilerine, iç zarı H⁺ geçirgen hâle getiren bir madde ekleniyor. Ortamda oksijen ve glikoz yeterli miktarda bulunuyor. Bu hücrede oksijen tüketimi ve ATP üretimi nasıl değişir?',
            steps: [
              {
                title: 'Önce hangi adımın bozulduğunu bul',
                body: 'Madde iç zarı H⁺ geçirgen yapıyor. Yani bozulan adım proton **gradyanının korunması**. Elektron akışına ya da oksijene doğrudan dokunulmuyor.',
              },
              {
                title: 'Gradyan çökünce ATP sentaz ne yapar?',
                body: 'ATP sentaz protonların kendi içinden akmasıyla çalışır. Protonlar artık her yerden geçebildiği için enzimden geçmeleri için bir sebep kalmaz. Kemiozmozla ATP üretimi durur.',
              },
              {
                title: 'Elektron taşıma sistemi de durur mu?',
                body: 'Hayır. ETS’yi durduran şey gradyan değil, elektronların zincirin sonunda birikmesidir. Oksijen hâlâ var, dolayısıyla elektronlar sonunda alınmaya devam eder ve zincir çalışır. Hatta gradyanın direnci ortadan kalktığı için **daha hızlı** çalışır.',
              },
              {
                title: 'Oksijen tüketimini bağla',
                body: 'ETS hızlandığına göre son elektron alıcısına duyulan ihtiyaç da artar. Yani oksijen tüketimi artar.',
              },
            ],
            answer: 'Oksijen tüketimi artar, ATP üretimi ise (glikolizden gelen 2 ATP dışında) durur. Açığa çıkan enerji ATP yerine ısı olarak yayılır.',
            takeaway:
              'Bu soru "ATP azalırsa oksijen de azalır" refleksini kırmak için sorulur. İkisi doğrudan bağlı değildir; aralarında proton gradyanı vardır. Mekanizmayı adım adım kurduğunda ezberin yanılttığı yer burasıdır.',
          },
          {
            id: 'mito-kem-audio',
            type: 'audio_script',
            label: 'Oksijenin görevi ve ATP bilançosu',
            target_block_id: 'mito-kem-bilanco-figure',
            highlight_block_ids: ['mito-kem-table', 'mito-kem-note-3638'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Uyarı cümlelerinde tonunu değiştir ve hafifçe vurgula; gerisi sakin kalsın.',
            body: `Şimdi çok sık yanlış bilinen bir noktaya geliyoruz. Oksijen bu işin tam olarak neresinde?

Muhtemelen bir yerlerde oksijen glikozu parçalar ya da oksijen ATP üretir cümlesini duydun. İkisi de yanlış. Oksijen glikoza hiç dokunmuyor.

Oksijenin görevi zincirin en sonunda. Elektron taşıma sisteminden geçen elektronları alıyor, hidrojen iyonlarıyla birleşiyor ve su oluşturuyor. Yani oksijen son elektron alıcısı.

Peki bu neden bu kadar kritik? Şöyle düşün: sonda elektronları alan biri yoksa zincir tıkanır. Elektronlar ilerleyemez, proton pompalanması durur, derişim farkı çöker, ATP sentaz durur. Ama etkisi burada bitmiyor. NADH taşıdığı elektronu boşaltamadığı için yeniden kullanılabilir hâline dönemez; o bitince Krebs döngüsü de durur.

Yani oksijenin yokluğu sadece son evreyi değil, ondan önceki evreyi de durduruyor. Bunu tek cümlede sabitle: oksijen ATP üretmez, zincirin akmasını mümkün kılar.

Şimdi bilançoya bakalım. Bir glikoz molekülünden toplam otuz ila otuz iki ATP elde ediliyor. Bunun sadece ikisi glikolizden, ikisi Krebs döngüsünden geliyor. Geri kalanın tamamı, yaklaşık yüzde seksen sekizi, iç zardan. Kristaların neden hücreden hücreye farklı yoğunlukta olduğu sorusunun cevabı da bu oran.

İki noktaya daha dikkat çekeceğim. Birincisi, neden tek bir sayı değil de aralık veriliyor? Çünkü glikolizde üretilen NADH sitoplazmada bulunuyor, kullanılacağı yer ise iç zar. Elektronları içeri bir mekik sistemiyle aktarılıyor ve hangi mekiğin kullanıldığı iki ATP'lik fark yaratıyor. Yani aralık bir belirsizlik değil, ölçümün dürüst hâli.

İkincisi, eski kaynaklarda otuz altı ila otuz sekiz yazar. O rakam NADH başına üç ATP kabulünden geliyordu; güncel müfredat iki buçuk kabul ediyor. Sınavda soru otuz ila otuz iki üzerinden gelir. Eski bir kitaptan çalışıyorsan bu farkı bilerek oku.`,
          },
        ],
      },

      /* ================================================================
         5) ENDOSİMBİYOZ
         ================================================================ */
      {
        id: 'mito-ozerklik',
        kind: 'build',
        title: 'Bu organelin kendi DNA’sı neden var?',
        lead: 'Şemada gördüğün halkasal DNA sıradan bir ayrıntı değildi. Şimdi onun ne anlama geldiğine bakıyoruz — ve konu birden evrime bağlanacak.',
        blocks: [
          {
            id: 'mito-ozerklik-prose',
            type: 'prose',
            body: `Hücredeki organellerin neredeyse tamamı proteinlerini çekirdek DNA'sının talimatıyla, sitoplazmadaki ribozomlardan alır. Mitokondri bu kuralın dışında kalır: ==kendi DNA'sı ve kendi ribozomları vardır==, bazı proteinlerini kendi üretir.

Ama tamamını değil. Mitokondri proteinlerinin çoğu hâlâ çekirdek DNA'sında kodludur. Bu yüzden mitokondriye **özerk** değil, ==yarı özerk== denir.

Ayrıca mitokondri, hücre bölünmesinden bağımsız olarak kendi başına ikiye bölünerek çoğalır. Düzenli antrenman yapan bir sporcunun kas hücrelerindeki mitokondri sayısının artmasının sebebi budur.`,
          },
          {
            id: 'mito-ozerklik-audio-dna',
            type: 'audio_script',
            label: 'Kendi DNA\'sı ve ribozomu',
            target_block_id: 'mito-ozerklik-prose',
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Uyarı cümlelerinde tonunu değiştir ve hafifçe vurgula; gerisi sakin kalsın.',
            body: `Şemada matriksin içinde küçük bir halka ve etrafında noktalar görmüştün. Şimdi onların ne olduğuna geldik.

Hücredeki organellerin neredeyse tamamı proteinlerini çekirdekten gelen talimatla, sitoplazmadaki ribozomlardan alır. Mitokondri bu kuralın dışında kalıyor. Kendi DNA'sı var, kendi ribozomları var ve bazı proteinlerini kendisi üretebiliyor. Üstelik hücre bölünmesinden bağımsız olarak, kendi başına ikiye bölünerek çoğalabiliyor. Düzenli antrenman yapan bir sporcunun kas hücrelerinde mitokondri sayısının artmasının sebebi tam olarak bu.

Şimdi çok kritik bir uyarı yapacağım, çünkü burası tam bir sınav tuzağı.

Bütün bunlar, mitokondrinin hücreden bağımsız olduğu anlamına gelmiyor. Mitokondri proteinlerinin çoğu hâlâ çekirdek DNA'sında kodlu. Yani organel kendi ihtiyacının yalnızca küçük bir kısmını karşılayabiliyor.

Bu yüzden mitokondriye özerk demiyoruz; yarı özerk diyoruz. Tek kelimelik bir fark ama sınavda bütün cevabı değiştirir.

Şunu aklında tut: mitokondrinin kendi DNA'sının bulunması, hücreden tamamen bağımsız olduğu anlamına gelmez. Bir soruda mitokondri bütün proteinlerini kendisi üretir diyen bir seçenek görürsen, orada durup düşün.`,
          },
          {
            id: 'mito-ozerklik-figure',
            type: 'figure',
            kind: 'endosimbiyoz',
            width: 'full',
            title: 'Endosimbiyoz: bakteriden organele',
            purpose: 'Çift zarın ve yarı özerkliğin aynı köken hikâyesinde nasıl birleştiğini aşamalı göstermek.',
            complexity: 'medium',
            caption:
              'Bakteri sindirilmek yerine hücre içinde yaşamayı sürdürür. Zamanla genlerinin çoğu çekirdeğe aktarılır; **halkasal DNA, 70S ribozom ve ikiye bölünme** özellikleri ise mitokondride korunur.',
            focus: [
              { title: 'Yutulma', body: 'Aerobik bakteri, büyük bir öncül hücre tarafından zarla çevrelenir. Bu olay ileride görülen çift zarın başlangıcıdır.' },
              { title: 'Ortak yaşam', body: 'Bakteri sindirilmez; konak hücreye verimli enerji sağlarken hücrenin korunaklı ortamından yararlanır.' },
              { title: 'Organelleşme', body: 'Genlerin çoğu çekirdeğe aktarılır ve bakteri bağımsızlığını kaybeder; çift zarlı, yarı özerk mitokondri ortaya çıkar.' },
            ],
          },
          {
            id: 'mito-ozerklik-compare',
            type: 'compare',
            title: 'Mitokondri ile bakteri arasındaki benzerlik tesadüf mü?',
            columns: ['Mitokondri', 'Bakteri hücresi'],
            rows: [
              { label: 'DNA biçimi', values: ['Halkasal, histonsuz', 'Halkasal, histonsuz'] },
              { label: 'Ribozom', values: ['70S', '70S'] },
              { label: 'Çoğalma', values: ['İkiye bölünerek', 'İkiye bölünerek'] },
              { label: 'Boyut', values: ['1–2 mikrometre', '1–2 mikrometre'] },
              { label: 'Zar sayısı', values: ['Çift zar', 'Tek zar (+ hücre duvarı)'] },
            ],
            insight:
              'Bu kadar benzerlik tesadüf sayılamayacak kadar fazladır. **Endosimbiyoz teorisi** bunu şöyle açıklar: bir zamanlar serbest yaşayan aerobik bir bakteri, büyük bir öncül hücre tarafından yutulmuş ama sindirilmemiş; ikisi ortak yaşamayı sürdürmüştür. Mitokondrinin dıştaki zarı yutan hücrenin zarından, içteki zarı ise bakterinin kendi zarından gelir. Çift zarlı olmasının sebebi budur.',
          },
          {
            id: 'mito-ozerklik-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Aynı kanıt listesi kloroplast için de geçerlidir. Bir soruda “aşağıdaki organellerden hangileri endosimbiyoz ile açıklanır?” dendiğinde cevap ikisi birdendir.',
          },
          {
            id: 'mito-ozerklik-connection',
            type: 'connection',
            title: 'Kalıtıma açılan kapı',
            body: `Döllenmede spermin sitoplazması zigota neredeyse hiç katılmaz; zigotun sitoplazması yumurtadan gelir. Mitokondriler de sitoplazmada bulunduğuna göre sonuç şu: ==mitokondriyal DNA yalnızca anneden geçer==.

Bu yüzden mitokondriyal hastalıklar anneden bütün çocuklara aktarılır, babadan hiçbirine geçmez. Kalıtım konusunda soy ağacı sorularında bu desen ayırt edici bir ipucudur.`,
            links: ['Kalıtım — sitoplazmik kalıtım', 'Üreme — döllenme'],
          },
          {
            id: 'mito-ozerklik-audio-endo',
            type: 'audio_script',
            label: 'Endosimbiyoz ve anneden kalıtım',
            target_block_id: 'mito-ozerklik-compare',
            highlight_block_ids: ['mito-ozerklik-figure', 'mito-ozerklik-connection'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Sakin, sıcak ve profesyonel bir öğretmen tonu kullan; abartma.',
            body: `Şimdi bir adım geri çekilip şunu soralım: bir organelin kendi DNA'sı, kendi ribozomu neden olsun ki?

Ekrandaki karşılaştırmaya bak. Mitokondrinin DNA'sı halkasal ve histonsuz; tıpkı bakteride olduğu gibi. Ribozomu yetmiş S tipinde; yine bakteri tipi. İkiye bölünerek çoğalıyor; bakteriler gibi. Boyutu bir ila iki mikrometre; yani bir bakteri boyutunda.

Bu kadar benzerlik tesadüf sayılamayacak kadar fazla.

Endosimbiyoz teorisi bunu şöyle açıklıyor. Bir zamanlar serbest yaşayan, oksijenli solunum yapabilen bir bakteri, büyük bir öncül hücre tarafından yutulmuş ama sindirilmemiş. İkisi birlikte yaşamayı sürdürmüş; bakteri verimli enerji sağlarken hücrenin korunaklı ortamından yararlanmış. Zamanla genlerinin çoğu çekirdeğe aktarılmış ve bağımsızlığını kaybetmiş.

Şimdi bir önceki bilgiyle bunu bağlayalım. Mitokondri neden çift zarlıydı? Bu teoriye göre dıştaki zar yutan hücrenin zarından geliyor, içteki zar ise bakterinin kendi zarından. Yani dersin başında yapı olarak öğrendiğin çift zar, burada bir köken hikâyesine dönüşüyor.

Aynı kanıtlar kloroplast için de geçerli. Bir soruda hangi organeller endosimbiyozla açıklanır diye sorulursa cevap ikisi birden.

Son olarak konunun kalıtıma açılan kapısı. Döllenmede zigotun sitoplazması neredeyse tamamen yumurtadan geliyor. Mitokondriler de sitoplazmada bulunuyor. Sonuç şu: mitokondriyal DNA yalnızca anneden geçer. Bu yüzden mitokondriyal hastalıklar anneden bütün çocuklara aktarılır, babadan hiçbirine geçmez. Soy ağacı sorularında bu desen ayırt edici bir ipucudur.`,
          },
          {
            id: 'mito-ozerklik-quiz',
            type: 'quiz',
            purpose: 'concept',
            question: 'Aşağıdakilerden hangisi mitokondrinin endosimbiyoz kökenli olduğunu **desteklemez**?',
            options: [
              'Halkasal DNA taşıması',
              '70S ribozoma sahip olması',
              'Çift zarlı olması',
              'Proteinlerinin çoğunun çekirdek DNA’sında kodlu olması',
            ],
            answer_index: 3,
            explanation: `Proteinlerinin çoğunun çekirdekte kodlu olması, mitokondrinin bağımsız bir organizma gibi davranmadığını gösterir — yani endosimbiyoz kökenini desteklemez, aksine mitokondrinin zamanla hücreye bağımlı hâle geldiğini gösterir.

Diğer üç seçenek doğrudan bakteriyel özelliklerdir ve teoriyi destekler. Bu soru tipi “destekler mi / desteklemez mi” ayrımıyla oynar; okurken olumsuz ifadenin altını çiz.`,
          },
        ],
      },

      /* ================================================================
         6) UYGULAMA
         ================================================================ */
      {
        id: 'mito-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Buraya kadar okudun. Şimdi bilgiyi kullanma sırası sende. Cevaplara bakmadan önce gerçekten düşün — bakarak öğrenilen şey sınavda geri gelmiyor.',
        blocks: [
          {
            id: 'mito-uyg-audio',
            type: 'audio_script',
            label: 'Sınavda ayırt etmen gerekenler',
            target_block_id: 'mito-uyg-checkpoint',
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Uyarı cümlelerinde tonunu değiştir ve hafifçe vurgula; gerisi sakin kalsın.',
            body: `Sorulara geçmeden önce bu konuda en sık kaybedilen puanları tek tek önüne koyacağım. Bunları ayırabiliyorsan soruların çoğunu zaten çözersin.

Bir. Krista ile matriksi birbirine karıştırma. Krista iç zarın kıvrımıdır; matriks ise iç zarın çevrelediği sıvı bölgedir. Biri zar, diğeri ortam.

İki. Kristaların içi matriksle dolu değil; zarlar arası boşlukla bağlantılı. Krista bir cep değil, bir girinti. Protonların nerede biriktiği sorulduğunda bu ayrım belirleyici olur.

Üç. Glikoliz mitokondride değil, sitoplazmada gerçekleşir. Mitokondrisi olmayan bir hücre bile glikoliz yapabilir.

Dört. Oksijen ATP üretmez; zincirin sonunda elektronları alır. Ortamda oksijen bulunması tek başına yetmez, oksijeni kullanacak iç zarın da bulunması gerekir.

Beş. Mitokondrinin kendi DNA'sının bulunması, hücreden tamamen bağımsız olduğu anlamına gelmez. Doğru kelime yarı özerk.

Altı. Toplam kazanç glikoz başına otuz ila otuz iki ATP. Otuz altı ila otuz sekiz eski kabuldür.

Yedi. İki mitokondriyi karşılaştıran görsel sorularda ölçüt boyut değil, krista yoğunluğudur.

Şimdi sıra sende. Aşağıdaki soruları cevaba bakmadan çöz. Takıldığın soruda hangi halkada takıldığını da not et; yanlışın hangi bilgiden geldiğini bilmek, doğruyu bilmek kadar değerli.`,
          },
          {
            id: 'mito-uyg-checkpoint',
            type: 'checkpoint',
            prompt:
              'Kalp kası hücresi ile deri hücresinin mitokondrileri mikroskop altında karşılaştırılıyor. İki mitokondrinin dış boyutları neredeyse aynı. Aralarındaki farkı nereden anlarsın?',
            hint: 'Boyut değişmiyorsa yüzey alanı nasıl artırılabilir?',
            answer: `Krista yoğunluğundan.

Kalp kası sürekli çalışan bir dokudur ve ATP ihtiyacı çok yüksektir. Mitokondrinin dış boyutunu büyütmek bunu çözmez — çünkü ATP üreten enzimler iç zarın üzerindedir. Çözüm iç zarı daha fazla katlamaktır.

Bu yüzden kalp kası hücresinin mitokondrisinde kristalar sık ve derindir; deri hücresininkinde seyrektir. ==Aynı hacim, çok daha fazla yüzey.==`,
          },
          {
            id: 'mito-uyg-worked',
            type: 'worked_example',
            title: 'Radyoaktif işaretleme sorusu',
            prompt:
              'Bir hücreye, karbon atomları radyoaktif olarak işaretlenmiş glikoz veriliyor. Hücre oksijenli solunum yapıyor. Radyoaktif karbon ilk olarak hangi bileşikte ve hücrenin neresinde tespit edilir?',
            steps: [
              {
                title: 'Glikozun ilk uğradığı yeri belirle',
                body: 'Glikoz mitokondriye giremez; önce sitoplazmada glikolize uğrar. Yani işaretli karbon ilk olarak sitoplazmadadır.',
              },
              {
                title: 'Glikolizin ürününü yaz',
                body: 'Glikoliz sonunda glikozdan iki pirüvat oluşur. Glikozun karbonları pirüvata geçtiğine göre ilk işaretli ürün pirüvattır.',
              },
              {
                title: 'Karbondioksit ne zaman çıkar?',
                body: 'CO₂ glikolizde oluşmaz. İlk CO₂ pirüvat oksidasyonunda, geri kalanı Krebs döngüsünde çıkar — ikisi de matrikste.',
              },
              {
                title: 'Suyun karbonu var mı?',
                body: 'Yok. Su, oksijenin elektron ve H⁺ ile birleşmesinden oluşur; içinde karbon bulunmaz. Bu yüzden işaretli karbon suda hiçbir zaman görünmez.',
              },
            ],
            answer: 'İlk olarak sitoplazmada, pirüvat molekülünde tespit edilir. Karbondioksit olarak ise matrikste ortaya çıkar.',
            takeaway:
              'İşaretleme sorularında atomu takip et, evre adını değil. “Karbon nereden girdi, nereden çıktı?” sorusu bütün bu soru tipini çözer.',
          },
          {
            id: 'mito-uyg-carbon-figure',
            type: 'figure',
            kind: 'karbon-izleme',
            width: 'full',
            title: 'İşaretli karbonun izlediği yol',
            purpose: 'Radyoaktif işaretleme sorusunda karbon atomunun yer ve molekül değişimini aynı anda takip etmek.',
            complexity: 'medium',
            caption:
              'Karbonu evre adıyla değil atom olarak izle: **6C glikoz → 3C + 3C pirüvat → CO₂**. ETS’de oluşan su bu zincirin parçası değildir; karbon içermez.',
            focus: [
              { title: 'İşaretli glikoz', body: 'Altı radyoaktif karbon başlangıçta sitoplazmadaki glikozun yapısındadır.' },
              { title: 'İlk işaretli ürün', body: 'Glikoliz sonunda karbonlar iki üç karbonlu pirüvata dağılır. İlk tespit yeri sitoplazmadır.' },
              { title: 'Karbonun çıkışı', body: 'Pirüvat oksidasyonu ve Krebs matrikste gerçekleşir; işaretli karbon burada CO₂ olarak ayrılır.' },
              { title: 'Su neden işaretlenmez?', body: 'ETS’de su; oksijen, elektron ve protonlardan oluşur. Yapısında karbon olmadığı için C* suya geçmez.' },
            ],
          },
          {
            id: 'mito-uyg-quiz-1',
            type: 'quiz',
            purpose: 'error',
            question: 'Oksijensiz bir ortama bırakılan bir kas hücresinde aşağıdakilerden hangisi ilk olarak durur?',
            options: [
              'Glikoliz',
              'Elektron taşıma sistemi',
              'Sitoplazmada ATP kullanımı',
              'Hücre zarından madde geçişi',
            ],
            answer_index: 1,
            explanation: `Oksijen, elektron taşıma sisteminin son elektron alıcısıdır. Oksijen bittiği anda elektronlar zincirin sonunda birikir ve zincir tıkanır — yani ilk duran yapı ETS'tir.

Ardından proton gradyanı çöker ve kemiozmoz durur; NAD⁺ yenilenemediği için Krebs döngüsü de durur. Glikoliz ise oksijen gerektirmediği için devam eder (laktik asit fermantasyonu ile NAD⁺ geri kazanılır).

Sıralamayı aklında tut: **ETS → kemiozmoz → Krebs**. Glikoliz en son etkilenir.`,
          },
          {
            id: 'mito-uyg-quiz-2',
            type: 'quiz',
            purpose: 'concept',
            question: 'İç zarın seçici geçirgen olması hücresel solunum için neden zorunludur?',
            options: [
              'Glikozun matrikse girmesini engellediği için',
              'Enzimlerin zar üzerinde tutunmasını sağladığı için',
              'H⁺ iyonlarının serbestçe geri sızmasını engelleyip gradyanın korunmasını sağladığı için',
              'Oksijenin matrikse girmesini kolaylaştırdığı için',
            ],
            answer_index: 2,
            explanation: `ATP üretimi, protonların ATP sentazdan **tek yönlü** akmasına dayanır. İç zar H⁺ geçirseydi protonlar her yerden geri sızar, derişim farkı kurulamaz ve ATP sentaz çalışmazdı.

B seçeneği yanlış değil ama sorunun cevabı değil: enzimler zara tutunur, ancak bu tutunma "seçici geçirgenlik"ten değil zarın yapısından kaynaklanır. Sorunun sorduğu şey geçirgenliğin işlevi.`,
          },
          {
            id: 'mito-uyg-quiz-3',
            type: 'quiz',
            purpose: 'recall',
            question: 'Ökaryot bir hücrede glikoliz doğrudan nerede gerçekleşir?',
            options: ['Mitokondri matriksinde', 'Sitoplazmada', 'İç zar üzerinde', 'Zarlar arası boşlukta'],
            answer_index: 1,
            explanation: 'Glikoliz **sitoplazmada** gerçekleşir. Pirüvat oksidasyonu ve Krebs matrikste, elektron taşıma sistemi ise iç zarda yürür.',
          },
          {
            id: 'mito-uyg-quiz-4',
            type: 'quiz',
            purpose: 'concept',
            question: 'NADH ve FADH₂’nin hücresel solunumdaki temel görevi hangisidir?',
            options: ['Glikozu hücreye almak', 'Elektronları ETS’ye taşımak', 'Oksijeni üretmek', 'DNA’yı eşlemek'],
            answer_index: 1,
            explanation: 'Bu koenzimler yüksek enerjili elektronları **elektron taşıma sistemine** getirir; oksitlenirken proton pompalanmasını mümkün kılar.',
          },
          {
            id: 'mito-uyg-quiz-5',
            type: 'quiz',
            purpose: 'apply',
            question: 'ATP sentazın proton kanalını kapatan bir madde öncelikle hangi sonucu doğurur?',
            options: ['Glikolizde glikoz üretimi', 'Protonların matrikse dönüşünün ve oksidatif ATP sentezinin azalması', 'Krebs döngüsünde oksijen oluşması', 'Mitokondri DNA’sının çekirdeğe taşınması'],
            answer_index: 1,
            explanation: 'H⁺ iyonları ATP sentazdan geçemezse gradyanın enerjisi ATP üretimine çevrilemez; **oksidatif fosforilasyon** hızla azalır.',
          },
          {
            id: 'mito-uyg-quiz-6',
            type: 'quiz',
            purpose: 'error',
            question: 'Hücresel solunumda oksijenin doğrudan görevi hangisidir?',
            options: ['Glikozu pirüvata parçalamak', 'Son elektron alıcısı olmak', 'Krebs enzimlerini sentezlemek', 'ATP’yi depolamak'],
            answer_index: 1,
            explanation: 'Oksijen ETS’nin sonunda elektron ve H⁺ alarak su oluşturur. ATP’yi doğrudan üretmez; **elektron akışının sürmesini** sağlar.',
          },
          {
            id: 'mito-uyg-quiz-7',
            type: 'quiz',
            purpose: 'apply',
            question: 'Bir hücrede iç zarın krista sayısının artması en doğrudan hangi kapasiteyi artırabilir?',
            options: ['Çekirdekte DNA eşlenmesini', 'ETS ve ATP sentaz için zar yüzeyini', 'Sitoplazmada glikoliz enzimini', 'Hücre zarında endositozu'],
            answer_index: 1,
            explanation: 'Kristalar iç zarın yüzey alanını büyütür; böylece daha çok **ETS kompleksi ve ATP sentaz** yerleşebilir.',
          },
          {
            id: 'mito-uyg-quiz-8',
            type: 'quiz',
            purpose: 'concept',
            question: 'Mitokondriyal DNA’nın çoğunlukla anneden aktarılmasının temel nedeni hangisidir?',
            options: ['Spermde hiç DNA bulunmaması', 'Zigot sitoplazmasının ve organellerinin büyük ölçüde yumurtadan gelmesi', 'Babanın genlerinin çekinik olması', 'Mitokondrinin yalnız dişilerde bulunması'],
            answer_index: 1,
            explanation: 'Embriyonun sitoplazması ve mitokondrilerinin büyük bölümü **yumurta hücresinden** gelir; bu yüzden mitokondriyal kalıtım çoğunlukla anneseldir.',
          },
        ],
      },

      /* ================================================================
         7) KAPANIŞ
         ================================================================ */
      {
        id: 'mito-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Bu dersi kapatmadan önce aşağıdaki maddeleri okuyup her birine “evet, bunu anlatabilirim” diyebiliyor musun kontrol et. Diyemediğin madde varsa ilgili bölüme dön.',
        blocks: [
          {
            id: 'mito-kapanis-summary',
            type: 'summary',
            title: 'Bu dersten geriye kalması gerekenler',
            points: [
              'Mitokondri enerji **deposu** değil, enerji **dönüştürücüsüdür**. ATP depolanamaz, sürekli üretilir.',
              'Çift zar, kimyasal olarak farklı iki ortam yaratır. Bütün mekanizma bu farkın üzerine kuruludur.',
              'Dış zar geçirgen bir sınırdır; iş yapan zar iç zardır. Kristalar iç zarın yüzey alanını artırır.',
              'Hücresel solunum üç durakta gerçekleşir: glikoliz sitoplazmada, pirüvat oksidasyonu ve Krebs matrikste, ETS ve kemiozmoz iç zarda.',
              'İlk iki evre neredeyse hiç ATP üretmez; ürettikleri şey NADH ve FADH₂’dir. ATP’nin yaklaşık %88’i iç zardan gelir.',
              'Oksijen ATP üretmez. Zincirin sonunda elektronları alır; olmazsa zincir tıkanır ve arkadaki her şey durur.',
              'Toplam kazanç glikoz başına 30–32 ATP’dir. Eski kaynaklardaki 36–38, NADH başına 3 ATP kabulünden gelir.',
              'Halkasal DNA, 70S ribozom, ikiye bölünme ve çift zar; hepsi endosimbiyoz teorisini destekler.',
              'Mitokondriyal DNA yalnızca anneden geçer — sitoplazma yumurtadan geldiği için.',
            ],
          },
          {
            id: 'mito-kapanis-memory',
            type: 'memory',
            body: 'Zinciri tek cümlede tut: *Elektron akar, proton birikir, kapıdan geçerken ATP olur.* Bu cümleyi kurabildiğin sürece bu konudaki hiçbir soru seni tam olarak şaşırtamaz.',
          },
          {
            id: 'mito-kapanis-next',
            type: 'next_step',
            body: `Mitokondri oturduysa sıradaki adımın belli. Fotosentezi şimdi çalışırsan iki organeli karşılaştırmalı öğrenirsin ve ikisi de daha kolay yerleşir — çünkü kloroplast, mitokondrinin neredeyse tersine çalışır.

Ondan önce bu dersin mini quizlerine bir kez daha dön. İkisini de doğru yaptıysan konuyu bırakabilirsin.`,
            topics: ['Fotosentez', 'Kloroplast', 'Fermantasyon'],
          },
          {
            id: 'mito-kapanis-audio',
            type: 'audio_script',
            label: 'Toparlama',
            target_block_id: 'mito-kapanis-summary',
            highlight_block_ids: ['mito-kapanis-memory'],
            voice_hint: 'Kısaltmaları Türkçe harflerle oku: ATP a-te-pe, ADP a-de-pe, ETS e-te-se, NADH en-a-de-ha, FADH2 ef-a-de-ha-iki, DNA de-en-a. Sayıları Türkçe sözcükle oku. Sakin, sıcak ve profesyonel bir öğretmen tonu kullan; abartma.',
            body: `Dersi kapatıyoruz. Son bir kez zinciri baştan sona kuralım, bu sefer hızlı.

Hücre ATP'yi depolayamıyor, o yüzden sürekli üretmek zorunda. Mitokondri bu üretimi yapan yer; bir depo değil, bir dönüştürücü.

İki zarı var. Dış zar geçirgen bir sınır, iç zar ise asıl işi yapan zar. İkisinin arasında dar bir boşluk, iç zarın çevrelediği yerde ise matriks bulunuyor. Bu iki farklı ortam olmasaydı organelin yöntemi hiç çalışmazdı.

İç zar kristalar hâlinde katlanmış, çünkü ATP üreten enzimler zarın üzerinde duruyor ve daha çok yüzey daha çok enzim demek.

Solunum üç durakta gerçekleşiyor. Glikoliz sitoplazmada, pirüvat oksidasyonu ve Krebs matrikste, elektron taşıma sistemi ve kemiozmoz iç zarda. İlk iki durak neredeyse hiç ATP üretmiyor; ürettikleri NADH ve FADH2. ATP'nin yaklaşık yüzde seksen sekizi iç zardan geliyor.

Oksijen zincirin sonunda elektronları alıyor, ATP üretmiyor. Toplam kazanç otuz ila otuz iki ATP.

Halkasal DNA, yetmiş S ribozom, ikiye bölünebilme ve çift zar; hepsi endosimbiyoz teorisini destekliyor. Ama mitokondri hücreden bağımsız değil, yarı özerk.

Şimdi senden bir şey isteyeceğim. Ekrandan başını kaldır ve mitokondriyi kendi cümlelerinle, hiçbir yere bakmadan anlat. Yapıyla başla, üç durağı say, en son ATP'nin nerede üretildiğini söyle.

Takıldığın yer olursa oraya dön. Takılmadıysan bu konu sende oturmuş demektir. Sıradaki durak fotosentez. Kloroplast neredeyse mitokondrinin tersine çalışır; şimdi çalışırsan ikisi birden yerine oturur.`,
          },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
