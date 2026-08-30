/** AYT BİYOLOJİ · DOLAŞIM VE BAĞIŞIKLIK SİSTEMİ */
export default {
  slug: 'dolasim-bagisiklik-sistemi',
  placement: { examType: 'AYT', subject: 'Biyoloji', topic: 'Dolaşım ve Bağışıklık Sistemi' },
  order: 5,
  partLabel: '6. Bölüm',
  goldStandard: true,
  title: 'Dolaşım ve Bağışıklık: Taşı, Dengele, Savun',
  subtitle: 'Kalbi ayrı, damarı ayrı ezberleme; kanın hangi basınçla nereye gittiğini, kılcalda ne değiştiğini, lenfin neyi geri topladığını ve bağışıklığın yabancıyı nasıl tanıyıp hatırladığını tek iç ortam ağı olarak çöz.',
  document: {
    version: 1,
    estimated_minutes: 120,
    prerequisites: [
      { topic: 'Sindirim Sistemi', why: 'Emilen monosakkarit ve amino asitler portal kanla, yağlar ise önce lenfle dolaşıma katılır.' },
      { topic: 'Solunum Gazları', why: 'Alyuvar ve hemoglobin dokularla akciğer arasında O₂–CO₂ taşır.' },
      { topic: 'Hücre Zarı ve Taşıma', why: 'Kılcal değişim difüzyon, filtrasyon ve ozmotik basınç ilkelerine dayanır.' },
    ],
    outcomes: [
      'Kalbin dört odacığını, kapaklarını ve büyük damarlarını kanın izlediği sırayla eşleştirebileceksin.',
      'Küçük ve büyük dolaşımı; oksijen içeriğini damar adıyla karıştırmadan izleyebileceksin.',
      'Kalbin uyarı–iletim sistemini ve kalp döngüsünde basınç–kapak ilişkisini açıklayabileceksin.',
      'Atardamar, toplardamar ve kılcal damarların yapılarını taşıdıkları basınç ve görevle ilişkilendirebileceksin.',
      'Kan basıncı, toplam kesit alanı ve akış hızı grafiklerini yorumlayabileceksin.',
      'Kılcal filtrasyon, geri emilim, lenf drenajı ve ödem mekanizmasını kurabileceksin.',
      'Plazma, alyuvar, akyuvar ve trombositlerin görevlerini; pıhtılaşma basamaklarını ayırabileceksin.',
      'Lenfin doku sıvısı ve emilmiş yağları kana geri taşıma yollarını izleyebileceksin.',
      'Doğal bağışıklık ile B–T lenfositli özgül bağışıklığı hız, seçicilik ve hafıza açısından karşılaştırabileceksin.',
      'Aşı–serum, aktif–pasif bağışıklık ve birincil–ikincil yanıt sorularını mekanizmayla çözebileceksin.',
    ],
    sections: [
      {
        id: 'db-giris', kind: 'opening', title: 'Her hücrenin kapısına ulaşan taşıma ve savunma ağı',
        lead: 'Kalp akımı üretir, damarlar dağıtır, kılcallar değişim yapar, lenf fazlayı toplar; bağışıklık hücreleri aynı ağda devriye gezer.',
        blocks: [
          { id: 'db-giris-prose', type: 'prose', body: `Çok hücreli bir insanda hücrelerin çoğu dış çevreyle doğrudan temas etmez. Oksijen, besin, hormon ve ısı kanla taşınır; karbondioksit ve metabolik artıklar uzaklaştırılacak organlara götürülür. Fakat kan her hücreye değmez. Maddeler kılcal duvardan **doku sıvısına**, oradan hücreye geçer. Doku sıvısının fazlası lenf kılcallarıyla toplanıp yeniden kana verilir.

Bu kapalı dolaşımın pompası kalptir. Sağ kalp oksijence fakir kanı akciğere, sol kalp oksijence zengin kanı vücuda yollar. Damar adını kanın oksijenine göre değil, **kalbe göre akış yönüne** göre alır: kalpten çıkan atardamar, kalbe gelen toplardamardır. Bu nedenle akciğer atardamarı oksijence fakir; akciğer toplardamarı oksijence zengin kan taşır.

Bağışıklık sistemi dolaşımdan ayrı bir ordu değildir. Akyuvarlar kan ve lenf arasında hareket eder; lenf düğümleri doku sıvısından gelen antijenleri süzer. Doğal bağışıklık hızlı ve genel, kazanılmış bağışıklık daha seçici ve hafızalıdır. Konuyu beş halkayla kur: **pompa → dağıtım → değişim → geri dönüş → savunma.**` },
          { id: 'db-giris-why', type: 'why', question: 'Akciğer atardamarı neden oksijence fakir kan taşıyabilir?', body: 'Atardamarın tanımı oksijen miktarı değil kalpten uzaklaşmasıdır. Sağ karıncıktan akciğere gittiği için atardamardır; oksijenlenme akciğer kılcallarında gerçekleşir.' },
          { id: 'db-giris-trap', type: 'trap', title: 'Damar adını kanın rengiyle belirlemek', wrong: 'Her atardamarın oksijence zengin, her toplardamarın fakir kan taşıdığını düşünmek.', right: 'Adlandırmada yön kullanılır. Sistemik dolaşımda genel kural doğru görünür; akciğer ve göbek damarları önemli istisnalardır.', body: 'Soruda önce okun kalbe mi, kalpten dışarı mı baktığını belirle; sonra oksijen içeriğini bulunduğu dolaşıma göre yorumla.' },
          { id: 'db-giris-audio', type: 'audio_script', body: `Bir damarı görünce önce rengini değil okunu oku.

Kalpten çıkıyorsa atardamar, kalbe geliyorsa toplardamar. Sonra kan akciğerden geçti mi diye sor; oksijen içeriğini bu belirler.

Bu iki soruyu ayırırsan dolaşımın en klasik tuzağı daha baştan kapanır.` },
        ],
      },
      {
        id: 'db-kalp-akis', kind: 'build', title: 'Kalbin anatomisi: iki pompa, tek seri devre',
        lead: 'Sağ ve sol yarı yan yana görünür ama kanı sırayla küçük ve büyük dolaşıma gönderir.',
        blocks: [
          { id: 'db-kalp-akis-figure', type: 'figure', kind: 'kalp-dolasim-haritasi', width: 'full', title: 'Odacıktan dolaşım devresine kanın rotası', purpose: 'Kalp odacıkları–kapaklar, küçük/büyük dolaşım, koroner dolaşım ve tam kan yolunu tek beden bağlamında göstermek.', complexity: 'high', caption: 'Bir odağa dokunduğunda kalp kesiti, beden rotası veya koroner beslenme ayrı ve açıklayıcı bir sahneye dönüşür.', focus: [
            { title: 'Odacıklar ve kapaklar', body: 'Sağ atriyum → triküspit → sağ ventrikül; sol atriyum → mitral → sol ventrikül. Yarımay kapakları ventrikül çıkışındaki geri kaçışı önler.' },
            { title: 'Küçük ve büyük dolaşım', body: 'Sağ ventrikül akciğere, sol ventrikül aortla vücuda kan yollar. İki devre seri bağlıdır; birindeki akım uzun vadede diğerine eşittir.' },
            { title: 'Kalp duvarı ve koroner damarlar', body: 'Endokart iç yüzeyi, miyokart kası, perikart çevreyi oluşturur. Sol ventrikül miyokardı yüksek sistemik basınca karşı daha kalındır.' },
            { title: 'Kanın tam turu', body: 'Vena kava → sağ kalp → akciğer atardamarı → akciğer → akciğer toplardamarı → sol kalp → aort → dokular sırası kapanan bir devredir.' },
          ] },
          { id: 'db-kalp-akis-prose', type: 'prose', body: `Üst ve alt ana toplardamarla gelen sistemik venöz kan sağ atriyuma dolar. **Triküspit kapaktan** sağ ventriküle, pulmoner yarımay kapaktan akciğer atardamarına geçer. Akciğer kılcallarında gaz değişiminden sonra dört akciğer toplardamarıyla sol atriyuma döner. **Mitral kapaktan** sol ventriküle, aort yarımay kapağından aorta pompalanır.

Kapaklar aktif olarak açılıp kapanan kaslı kapılar değildir. İki taraflarındaki **basınç farkı** yönlerini belirler. Atriyum basıncı ventrikülden yüksekken AV kapaklar açılır. Ventrikül basıncı artınca AV kapaklar kapanır; ventrikül basıncı atardamar basıncını aşınca yarımay kapakları açılır. Kirişçikler ve papiller kaslar AV kapakların atriyuma ters dönmesini önler.

Kalp duvarında içte endokart, ortada kaslı miyokart, dışta epikart ve çevrede çift katlı perikart bulunur. Sol ventrikül sistemik dolaşımın yüksek direncine karşı çalıştığı için duvarı sağ ventrikülden kalındır. Fakat sağ ve sol ventrikülün bir dakikada pompaladığı kan uzun vadede aynıdır; aksi hâlde devrelerden birinde kan birikir.

Kalp kasının kendi oksijen ve besini, odacık içindeki kandan difüzyonla yeterince sağlanamaz. Aort kökünden çıkan **koroner atardamarlar** miyokardı besler. Bir koroner damarın tıkanması kalp kasının bir bölgesinde iskemi ve kalp krizine yol açabilir.` },
          { id: 'db-kalp-akis-table', type: 'table', title: 'Kalpte yapıyı görevle eşleştir', columns: ['Yapı', 'Basınç/akış görevi', 'Sınav kancası'], rows: [
            ['Atriyum', 'Toplardamardan gelen kanı kabul eder', 'İnce duvar, düşük basınç'],
            ['Ventrikül', 'Kanı atardamara pompalar', 'Sol duvar en kalın'],
            ['AV kapak', 'Atriyuma geri kaçışı önler', 'Ventrikül sistolünde kapalı'],
            ['Yarımay kapak', 'Atardamardan ventriküle dönüşü önler', 'Ventrikül diyastolünde kapalı'],
            ['Koroner damar', 'Miyokardı besler', 'Tıkanma = iskemi/enfarktüs riski'],
          ], caption: 'Kapak durumunu ezberlemek yerine iki yanındaki basıncı karşılaştır.' },
          { id: 'db-kalp-akis-check', type: 'checkpoint', question: 'Sol ventrikül duvarı daha kalın olduğu hâlde neden sağ ventrikülden daha fazla kan pompalamaz?', hint: 'İki dolaşım devresinin seri bağlı olduğunu düşün.', answer: 'Sol ventrikül daha yüksek sistemik dirence karşı aynı hacmi daha yüksek basınçla pompalar. İki ventrikülün dakika hacmi uzun vadede eşit olmak zorundadır.' },
        ],
      },
      {
        id: 'db-kalp-dongu', kind: 'deepen', title: 'Kalp döngüsü: elektriksel komuttan basınç ve sese',
        lead: 'Kalp kendi ritmini üretir; iletim sırası kasılmanın yönünü, basınç değişimi de kapakların durumunu belirler.',
        blocks: [
          { id: 'db-kalp-dongu-figure', type: 'figure', kind: 'kalp-dongusu', width: 'full', title: 'Ritim, basınç, kapak ve nabız', purpose: 'Uyarı–iletim sistemi, kalp döngüsü, basınç–kapak ilişkisi ve kalp debisi kontrolünü birlikte göstermek.', complexity: 'high', caption: 'Her odak elektriksel, mekanik veya dolaşımsal sonucu ayrı zaman dizisinde açıklar.', focus: [
            { title: 'SA düğümden Purkinje’ye', body: 'SA düğüm ritmi başlatır; uyarı atriyumlara, AV düğüm gecikmesinden His–Purkinje ağıyla ventrikül apeksine yayılır.' },
            { title: 'Diyastol ve sistol evreleri', body: 'Dolumda AV açık; izovolümetrik kasılmada tüm kapaklar kapalı; ejeksiyonda yarımay açık; gevşemede yeniden tüm kapaklar kapalıdır.' },
            { title: 'Basınç, kapak ve kalp sesleri', body: 'Birinci ses AV, ikinci ses yarımay kapaklarının kapanmasıyla ilişkilidir. Kapak açılması her zaman belirgin ses oluşturmaz.' },
            { title: 'Nabız ve kalp debisi', body: 'Kalp debisi = atım hacmi × kalp hızı. Sempatik uyarı hızı/kuvveti artırır; parasempatik uyarı özellikle hızı azaltır.' },
          ] },
          { id: 'db-kalp-dongu-prose', type: 'prose', body: `Kalp kası **miyojeniktir**; ritmik uyarı için her atımda dış sinir komutuna ihtiyaç duymaz. Sağ atriyumdaki sinoatriyal (SA) düğüm doğal pacemaker’dır. Uyarı atriyumları kasar, atriyoventriküler (AV) düğümde kısa süre gecikir; His demeti, dal demetleri ve Purkinje lifleriyle ventrikül apeksine ulaşır. Kasılmanın apeksden yukarı ilerlemesi kanı çıkış damarlarına yöneltir.

Genel diyastolde ventrikül basıncı düşüktür, AV kapaklar açıktır ve kanın çoğu pasif dolar; atriyum sistolü dolumu tamamlar. Ventrikül kasılmaya başladığında AV kapaklar kapanır; kısa **izovolümetrik kasılmada** tüm kapaklar kapalı ve hacim sabittir. Ventrikül basıncı aort/pulmoner basıncı aşınca yarımay kapaklar açılır, ejeksiyon olur. Gevşemede yarımay kapaklar kapanır; izovolümetrik gevşemeden sonra AV kapaklar yeniden açılır.

Birinci kalp sesi AV kapakların kapanması, ikinci ses yarımay kapakların kapanmasıyla ilişkilidir. Elektrokardiyogram (EKG) kalbin mekanik kasılmasını değil elektriksel etkinliği kaydeder: P dalgası atriyum depolarizasyonu, QRS ventrikül depolarizasyonu, T dalgası ventrikül repolarizasyonudur. Atriyum repolarizasyonu QRS içinde gizlenir.

**Kalp debisi**, bir ventrikülün dakikada pompaladığı kan hacmidir: kalp hızı × atım hacmi. Egzersizde sempatik etki, venöz dönüş ve kasılma gücü artarak debiyi yükseltir. Nabız, ventrikül ejeksiyonunun atardamar duvarında oluşturduğu basınç dalgasıdır; kanın kendisinin o hızla bileğe ulaşması değildir.` },
          { id: 'db-kalp-dongu-table', type: 'table', title: 'Döngüde kapak durumları', columns: ['Evre', 'AV kapak', 'Yarımay kapak', 'Sonuç'], rows: [
            ['Ventrikül dolumu', 'Açık', 'Kapalı', 'Kan atriyumdan ventriküle'],
            ['İzovolümetrik kasılma', 'Kapalı', 'Kapalı', 'Basınç artar, hacim sabit'],
            ['Ejeksiyon', 'Kapalı', 'Açık', 'Kan atardamara çıkar'],
            ['İzovolümetrik gevşeme', 'Kapalı', 'Kapalı', 'Basınç düşer, hacim sabit'],
          ], caption: '“İzovolümetrik” evrede tüm kapakların kapalı olması hacmi sabit tutar.' },
          { id: 'db-kalp-dongu-example', type: 'worked_example', title: 'Kapak hangi basınçta açılır?', question: 'Sol ventrikül basıncı 90, aort basıncı 80 mmHg olduğunda mitral ve aort kapaklarının durumu ne olur?', steps: [
            { title: 'Çıkış kapağını karşılaştır', body: 'Ventrikül basıncı aort basıncını aştığı için aort kapağı açılır.' },
            { title: 'Geri kaçışı engelle', body: 'Ventrikül basıncı atriyumdan da yüksek olduğundan mitral kapak kapalıdır.' },
            { title: 'Evreyi bul', body: 'Yarımay açık, AV kapalı olduğuna göre ventrikül ejeksiyonudur.' },
          ], answer: 'Aort kapağı açık, mitral kapak kapalıdır; kan aorta pompalanır.', takeaway: 'Kapakları sinyal değil, iki tarafındaki basınç farkı hareket ettirir.' },
        ],
      },
      {
        id: 'db-damar', kind: 'deepen', title: 'Damar ağacı: yüksek basınçtan yavaş değişime',
        lead: 'Damar duvarı ve toplam kesit alanı, kanın basıncını ve hızını her bölgede o bölgenin işine uyarlar.',
        blocks: [
          { id: 'db-damar-figure', type: 'figure', kind: 'damar-mikrodolasim', width: 'full', title: 'Atardamardan kılcala, doku sıvısından lenfe', purpose: 'Damar duvarlarını, basınç–hız değişimini, kılcal sıvı alışverişini ve ödemi aynı mikrodolaşım bağlamında göstermek.', complexity: 'high', caption: 'Bir bölgeye dokunduğunda damar kesiti, grafik veya doku sıvısı dengesi bağımsız sahnede açılır.', focus: [
            { title: 'Atardamar–toplardamar–kılcal', body: 'Atardamar kalın elastik/kaslı, toplardamar ince ve geniş lümenli–kapaklı, kılcal tek katlı endotel yapısıyla değişime uygundur.' },
            { title: 'Basınç, hız ve kesit alanı', body: 'Basınç atardamardan toplardamara azalır. Toplam kesit alanı kılcallarda en büyük olduğundan akış hızı en düşüktür.' },
            { title: 'Filtrasyon ve geri emilim', body: 'Kılcal hidrostatik basınç sıvıyı dışarı, plazma proteinlerinin ozmotik çekimi içeri yöneltir; dengelenmeyen fazla lenfe geçer.' },
            { title: 'Lenf tıkanması ve ödem', body: 'Lenf drenajı azalır, kılcal basınç/geçirgenlik artar veya plazma proteini düşerse doku sıvısı birikir ve ödem oluşur.' },
          ] },
          { id: 'db-damar-prose', type: 'prose', body: `Atardamarlar kalbin oluşturduğu yüksek ve dalgalı basınca dayanmak için kalın elastik ve düz kaslı duvar taşır. Arteriyoller direnç damarlarıdır; düz kas çapını değiştirerek organa giden akımı ve toplam periferik direnci ayarlar. Toplardamarların basıncı düşüktür, lümeni geniş ve duvarı görece incedir. Özellikle bacaklarda tek yönlü kapaklar, iskelet kası pompası ve solunum hareketleri venöz dönüşe yardım eder.

Kılcallar yalnız tek katlı endotel ve bazal zardan oluşan çok ince değişim damarlarıdır. Tek bir kılcal dar olsa da tüm kılcalların **toplam kesit alanı** çok büyüktür; bu yüzden kan hızı burada en düşüktür. Yavaş akım ve kısa difüzyon mesafesi gaz, besin, atık ve hormon değişimini kolaylaştırır.

Kılcalın atardamar ucunda kan hidrostatik basıncı baskın olduğunda su ve küçük çözünmüş maddeler doku sıvısına filtre olur; alyuvar ve büyük plazma proteinleri normalde damarda kalır. Toplardamar ucuna doğru hidrostatik basınç azalır, plazma proteinlerinin kolloid ozmotik çekimi geri emilimi destekler. Modern fizyolojide sıvının önemli bölümü lenf drenajıyla döner; AYT şemalarında arter ucunda filtrasyon, ven ucunda geri emilim modeli kullanılır.

Kan basıncı kalpten uzaklaşmaya bağlı yalnızca “yol uzadığı için” değil, damar direnci nedeniyle azalır; en büyük düşüş arteriyollerde görülür. Tansiyon ölçümündeki sistolik basınç ventrikül ejeksiyonuna, diyastolik basınç atımlar arası atardamar basıncına karşılık gelir. Nabız basıncı bu ikisinin farkıdır.` },
          { id: 'db-damar-compare', type: 'compare', title: 'Damar yapısı görevini ele verir', columns: ['Duvar/lümen', 'Temel görev'], rows: [
            { label: 'Atardamar', values: ['Kalın elastik ve kaslı; görece dar lümen', 'Yüksek basınçla dağıtım'] },
            { label: 'Toplardamar', values: ['İnce duvar, geniş lümen, kapak olabilir', 'Düşük basınçla kalbe dönüş ve kan deposu'] },
            { label: 'Kılcal', values: ['Tek katlı endotel, çok dar lümen', 'Madde ve sıvı değişimi'] },
          ], insight: 'Damarın duvar kalınlığını içindeki kanın oksijeni değil, taşıdığı basınç ve işlev belirler.' },
          { id: 'db-damar-check', type: 'checkpoint', question: 'Tek bir kılcal çok dar olduğu hâlde kan akış hızı neden kılcal yatakta en düşüktür?', hint: 'Tek damarı değil bütün paralel kılcalların toplam kesit alanını düşün.', answer: 'Binlerce paralel kılcalın toplam kesit alanı aorttan çok daha büyüktür. Aynı debi daha geniş toplam alana yayıldığı için doğrusal hız düşer.' },
        ],
      },
      {
        id: 'db-kan-lenf', kind: 'deepen', title: 'Kan ve lenf: taşıyıcı hücreler, pıhtı ve sıvı geri dönüşü',
        lead: 'Plazma çözünmüş maddeleri, hücreler özel görevleri taşır; lenf ise kılcaldan kaçan sıvı ve bağırsak yağlarını dolaşıma geri verir.',
        blocks: [
          { id: 'db-kan-lenf-figure', type: 'figure', kind: 'kan-lenf-sistemi', width: 'full', title: 'Kan hücresinden lenf kanalına', purpose: 'Kanın bileşenlerini, hemostazı, lenf dolaşımını ve kan grubu antijen–antikor mantığını birlikte göstermek.', complexity: 'high', caption: 'Her odak hücre, pıhtı, damar yolu veya antijen ölçeğinde yeni bir mekanizma sahnesi açar.', focus: [
            { title: 'Plazma ve şekilli elemanlar', body: 'Plazma su–protein–çözünmüş maddeleri; alyuvar gazları; akyuvar savunmayı; trombosit hasar yanıtını taşır.' },
            { title: 'Damar hasarı ve pıhtılaşma', body: 'Damar büzülür, trombosit tıkacı oluşur; pıhtılaşma zinciri fibrinojeni fibrin ağına çevirerek hücreleri yakalar.' },
            { title: 'Lenf kılcalından toplardamara', body: 'Kör uçlu lenf kılcalları doku sıvısını toplar; kapak, kas ve solunum pompasıyla göğüs/sağ lenf kanallarından köprücük altı toplardamarlarına döner.' },
            { title: 'ABO–Rh antijen ve antikorları', body: 'Alyuvar yüzey antijeni ile plazma antikoru eşleşirse aglütinasyon gelişir. Güvenli transfüzyonda verici alyuvar antijenleri alıcı antikorlarıyla karşılaştırılır.' },
          ] },
          { id: 'db-kan-lenf-prose', type: 'prose', body: `Kanın yaklaşık yarıdan fazlası plazmadır. Plazma su, iyon, besin, hormon, atık ve proteinleri taşır. **Albümin** ozmotik basınca, globulinler taşıma ve bağışıklığa, fibrinojen pıhtılaşmaya katkı verir. Serum, pıhtılaşma faktörlerinin önemli bölümü uzaklaştırılmış plazmadır.

Olgun insan alyuvarı çekirdek ve mitokondri taşımaz; bikonkav biçimi yüzeyi büyütür ve hemoglobine alan açar. ATP’yi anaerobik glikolizle üretir, böylece taşıdığı O₂’yi tüketmez. Akyuvarlar çekirdekli ve savunmada uzmanlaşmıştır; damar dışına çıkabilir. Trombositler kemik iliğindeki megakaryositlerden kopan hücre parçalarıdır.

Damar hasarında önce damar büzülür, trombositler açığa çıkan yüzeye yapışıp etkinleşir ve geçici tıkaç kurar. Pıhtılaşma faktörleri protrombinden trombin, fibrinojenden çözünmez fibrin oluşumuna giden zinciri güçlendirir. Fibrin ağı kan hücrelerini tutar. Pıhtılaşma damar içi hasarı kapatır; damar dışındaki açık yarada oluşan kabukla aynı kavram değildir.

Lenf sistemi kılcaldan dokuya geçen fakat kana doğrudan dönemeyen sıvı/proteinleri toplar. İnce bağırsak laktealleri şilomikronları taşır. Alt beden ve sol üst bölgenin lenfi göğüs kanalına, sağ üst kadran sağ lenf kanalına; ikisi köprücük altı toplardamarlarına dökülür. Lenf düğümleri sıvıyı süzer ve lenfositlerin antijenlerle karşılaşma alanıdır. Lenf sisteminde kalp gibi merkezî pompa ve atardamar yoktur.` },
          { id: 'db-kan-lenf-table', type: 'table', title: 'Kanın şekilli elemanları', columns: ['Yapı', 'Temel özellik', 'Görev'], rows: [
            ['Alyuvar', 'Çekirdeksiz, hemoglobinli, bikonkav', 'O₂ ve CO₂ taşınması'],
            ['Akyuvar', 'Çekirdekli, damar dışına çıkabilir', 'Doğal ve özgül savunma'],
            ['Trombosit', 'Hücre parçası', 'Tıkaç ve pıhtılaşma yüzeyi'],
          ], caption: 'Görevi biçimden çıkar: bikonkav yüzey gaz değişimine, çekirdekli hareket savunmaya, parçacık yüzeyi pıhtıya uygundur.' },
          { id: 'db-kan-lenf-trap', type: 'trap', title: 'Lenfi yalnız “renksiz kan” sanmak', wrong: 'Lenf sisteminde kan gibi kapalı bir atardamar–toplardamar devresi ve merkezî pompa olduğunu düşünmek.', right: 'Lenf kör uçlu kılcallarda başlar, tek yönde daha büyük damarlara ilerler ve toplardamara açılır; atardamarı ve kalp pompası yoktur.', body: 'Akım; doku basıncı, iskelet kası, solunum hareketi, düz kas ve kapaklarla desteklenir.' },
        ],
      },
      {
        id: 'db-bagisiklik', kind: 'deepen', title: 'Bağışıklık: engelle, tanı, çoğal ve hatırla',
        lead: 'İlk iki savunma hattı hızlı ve genel; üçüncü hat antijene özgü klonlar ve hafıza kurar.',
        blocks: [
          { id: 'db-bagisiklik-figure', type: 'figure', kind: 'bagisiklik-yaniti', width: 'full', title: 'Bariyerden immün hafızaya savunma katmanları', purpose: 'Doğal bariyer–inflamasyon, fagositoz/antijen sunumu, B hücreli humoral ve T hücreli hücresel yanıtı tek enfeksiyon bağlamında göstermek.', complexity: 'high', caption: 'Bir savunma katmanına dokunduğunda o hücresel olay bağımsız mekanizma sahnesinde açılır.', focus: [
            { title: 'Bariyer, inflamasyon ve fagositoz', body: 'Deri–mukoza girişi önler; hasarda histamin damarları genişletip geçirgenliği artırır, fagositler etkeni yutar.' },
            { title: 'Antijen sunumu ve yardımcı T', body: 'Dendritik hücre/makrofaj işlenmiş antijeni yardımcı T hücresine sunar; sitokinler özgül yanıtın B ve T kollarını koordine eder.' },
            { title: 'B hücresi, plazma ve antikor', body: 'Uygun klon çoğalır; plazma hücreleri antikor salgılar, hafıza B hücreleri kalır. Antikor nötralizasyon ve işaretleme yapar.' },
            { title: 'Sitotoksik T ve immün hafıza', body: 'Sitotoksik T enfekte hücreyi öldürür; hafıza lenfositleri aynı antijene ikinci karşılaşmada daha hızlı ve güçlü yanıt verir.' },
          ] },
          { id: 'db-bagisiklik-prose', type: 'prose', body: `Birinci savunma hattı deri, mukus, siller, mide asidi, lizozim ve normal mikrobiyotadır. Etken bariyeri aşınca doğal bağışıklığın hücreleri örüntüleri tanır. Mast hücrelerinden histamin salınması damar genişlemesi ve geçirgenlik artışı oluşturur; bölge kızarır, ısınır, şişer ve ağrıyabilir. Nötrofil ve makrofajlar fagositoz yapar. Kompleman proteinleri işaretleme, inflamasyon ve bazı zarların delinmesine; interferonlar komşu hücrelerde antiviral duruma katkı sağlar.

Kazanılmış bağışıklık **antijene özgü** B ve T lenfosit klonlarına dayanır. Antijen sunan dendritik hücre veya makrofaj, işlediği parçayı MHC ile yardımcı T hücresine gösterir. Yardımcı T sitokinleri B hücresi ve sitotoksik T yanıtlarını güçlendirir. Her antijene yanıt veren klon önceden az sayıdadır; seçilip çoğalmasına klonal seçilim denir.

B hücresi plazma hücresine dönüşüp antikor salgılar. Antikor antijene bağlanarak toksin/virüsü nötralize edebilir, etkenleri kümelendirebilir ve fagositoz için işaretleyebilir; doğrudan her mikrobu “yiyen” hücre değildir. Sitotoksik T hücresi ise virüsle enfekte veya anormal hücreyi tanıyıp programlı ölüme götürür. B hücresi humoral, sitotoksik T hücresi hücresel bağışıklığın merkezidir.

İlk karşılaşmada gecikmeli ve sınırlı birincil yanıt oluşur; hafıza B ve T hücreleri kalır. Aynı antijenle ikinci karşılaşmada yanıt daha hızlı, güçlü ve uzun sürer. Aşı hastalık oluşturmadan antijen/hafıza oluşturmayı amaçlayan **yapay aktif** bağışıklıktır. Hazır antikor içeren serum hızlı fakat geçici **yapay pasif** koruma sağlar; hafıza oluşturmaz.` },
          { id: 'db-bagisiklik-compare', type: 'compare', title: 'Doğal ve kazanılmış bağışıklık', columns: ['Hız/seçicilik', 'Temel bileşen ve hafıza'], rows: [
            { label: 'Doğal (özgül olmayan)', values: ['Dakika–saat; geniş örüntü tanıma', 'Bariyer, fagosit, NK, kompleman; klasik özgül hafıza yok'] },
            { label: 'Humoral özgül', values: ['İlk yanıtta daha yavaş; antijene özgü', 'B → plazma → antikor; hafıza B'] },
            { label: 'Hücresel özgül', values: ['Antijen sunumu ve klonal çoğalma gerekir', 'Yardımcı/sitotoksik T; hafıza T'] },
          ], insight: 'Doğal ve özgül yanıt rakip değildir: antijen sunumu ve sitokinler iki sistemi birbirine bağlar.' },
          { id: 'db-bagisiklik-table', type: 'table', title: 'Aktif–pasif bağışıklık haritası', columns: ['Tür', 'Örnek', 'Hız–süre–hafıza'], rows: [
            ['Doğal aktif', 'Hastalığı geçirmek', 'Yavaş gelişir, uzun sürebilir, hafıza var'],
            ['Yapay aktif', 'Aşı', 'Yavaş gelişir, uzun sürebilir, hafıza var'],
            ['Doğal pasif', 'Plasenta/anne sütü antikorları', 'Hızlı, geçici, hafıza yok'],
            ['Yapay pasif', 'Antiserum/immünglobulin', 'Hızlı, geçici, hafıza yok'],
          ], caption: 'Aktiflik antijenle kendi yanıtını üretmek, pasiflik hazır antikoru almaktır.' },
          { id: 'db-bagisiklik-check', type: 'checkpoint', question: 'Aşı koruması için neden zaman gerekirken antiserum hemen etki gösterir?', hint: 'Klonal çoğalma ile hazır antikoru karşılaştır.', answer: 'Aşı antijeni özgül lenfositlerin seçilip çoğalmasını, plazma ve hafıza hücrelerinin oluşmasını gerektirir. Antiserum hazır antikor verdiği için hemen etki eder; fakat hafıza bırakmaz.' },
        ],
      },
      {
        id: 'db-klinik', kind: 'deepen', title: 'Denge bozulduğunda: tansiyon, ödem, pıhtı ve bağışıklık hataları',
        lead: 'Belirtiyi hastalık adıyla değil, bozulmuş basınç–akım–savunma basamağıyla eşleştir.',
        blocks: [
          { id: 'db-klinik-prose', type: 'prose', body: `Hipertansiyon damar duvarı ve kalbin iş yükünü artırır; ateroskleroz damar lümenini daraltıp pıhtı riskini yükseltebilir. Koroner akım kesilirse miyokart enfarktüsü, beyin damarında kesinti veya yırtılma olursa inme gelişebilir. Variste ven kapakları yetersiz kaldığı için özellikle bacaklarda kan göllenir. Anemide alyuvar sayısı veya hemoglobin azalması O₂ taşıma kapasitesini düşürür.

Ödem tek nedene indirgenmez: kılcal hidrostatik basınç artışı, plazma proteinlerinin azalması, kılcal geçirgenlik artışı veya lenf tıkanması doku sıvısını artırabilir. Soruda hangi kuvvetin dışarı akışı artırdığı veya geri dönüşü azalttığı belirlenmelidir.

Bağışıklık yetersizliğinde savunma zayıf; alerjide zararsız antijene aşırı; otoimmünitede öz yapıya karşı yanlış yanıt vardır. Organ naklinde yabancı MHC/antijenler T hücreli reddi başlatabilir. Bağışıklık baskılayıcı tedavi reddi azaltırken enfeksiyon riskini artırabilir. Mekanizma aynı sistemin “az, fazla veya yanlış hedef” çalışmasıdır.` },
          { id: 'db-klinik-table', type: 'table', title: 'Bozukluğu mekanizmadan tanı', columns: ['Durum', 'Bozulan basamak', 'Beklenen sonuç'], rows: [
            ['Koroner tıkanma', 'Miyokarda O₂ sunumu', 'İskemi/enfarktüs'],
            ['Ven kapak yetersizliği', 'Düşük basınçlı geri dönüş', 'Göllenme ve varis'],
            ['Albümin azalması', 'Plazma ozmotik çekimi', 'Doku sıvısı/ödem artışı'],
            ['Lenf tıkanması', 'Fazla sıvı–protein dönüşü', 'Lokal ödem'],
            ['Alerji', 'Zararsız antijene aşırı yanıt', 'İnflamatuvar belirtiler'],
            ['Otoimmünite', 'Öz–yabancı ayrımı', 'Kendi dokusuna hasar'],
          ], caption: 'Ödem ve bağışıklık bozuklukları tek isim değil, bir denge problemidir.' },
          { id: 'db-klinik-exam', type: 'exam', title: 'AYT’de altı kritik ayrım', body: 'Atardamar–oksijen, kapak–basınç, nabız–kan hızı, filtrasyon–lenf drenajı, antikor–fagosit ve aşı–serum kavramlarını ayır. Her öncülde yön, hücre ve hafıza sorularını sırayla sor.', patterns: ['Küçük–büyük dolaşım', 'SA–AV–His–Purkinje', 'Toplam kesit alanı–hız', 'Hidrostatik–ozmotik basınç', 'B–T lenfosit', 'Aktif–pasif bağışıklık'] },
        ],
      },
      {
        id: 'db-quiz', kind: 'practice', title: '10 soruda taşıma ve savunma ağı',
        lead: 'Hedef 8/10. Önce akış yönünü, sonra basınç/hücreyi, en son sonucu belirle.',
        blocks: [
          { id: 'db-q1', type: 'quiz', purpose: 'concept', question: 'Akciğer atardamarının oksijence fakir kan taşımasının nedeni hangisidir?', options: ['Atardamarlar her zaman kirli kan taşır', 'Damar sağ ventrikülden akciğere gider ve adını akış yönünden alır', 'Kalbe doğru akar', 'Kılcal damar içermez'], answer_index: 1, explanation: 'Atardamar **kalpten çıkan** damardır; oksijenlenme akciğer kılcallarında olur.' },
          { id: 'db-q2', type: 'quiz', purpose: 'apply', question: 'Ventrikül basıncı atriyumdan yüksek, aort basıncından düşükse sol kalpte kapakların durumu nedir?', options: ['Mitral açık, aort açık', 'Mitral kapalı, aort kapalı', 'Mitral açık, aort kapalı', 'Mitral kapalı, aort açık'], answer_index: 1, explanation: 'İzovolümetrik kasılmada ventrikül basıncı AV kapağı kapatmış fakat aort kapağını henüz açamamıştır.' },
          { id: 'db-q3', type: 'quiz', purpose: 'recall', question: 'Kalbin normal ritmini başlatan yapı hangisidir?', options: ['AV düğüm', 'SA düğüm', 'Purkinje lifleri', 'Mitral kapak'], answer_index: 1, explanation: '**SA düğüm** doğal pacemaker’dır.' },
          { id: 'db-q4', type: 'quiz', purpose: 'apply', question: 'Kan akış hızının kılcallarda en düşük olmasının temel nedeni nedir?', options: ['Kılcallarda hiç basınç olmaması', 'Toplam kılcal kesit alanının çok büyük olması', 'Kılcalların kapaklı olması', 'Alyuvar bulunmaması'], answer_index: 1, explanation: 'Paralel kılcalların **toplam kesit alanı** en büyüktür; aynı debi geniş alana yayıldığı için hız düşer.' },
          { id: 'db-q5', type: 'quiz', purpose: 'concept', question: 'Plazma albümini ciddi biçimde azalırsa hangi sonuç beklenir?', options: ['Kılcal ozmotik geri çekim azalır ve ödem artar', 'Kan basıncı kesin sıfır olur', 'Alyuvarlar antikor üretir', 'Lenf sistemi atardamara dönüşür'], answer_index: 0, explanation: 'Albümin plazma kolloid ozmotik basıncına katkı verir; azalması doku sıvısının geri dönüşünü zayıflatır.' },
          { id: 'db-q6', type: 'quiz', purpose: 'recall', question: 'Pıhtı ağını oluşturan çözünmez protein hangisidir?', options: ['Albümin', 'Hemoglobin', 'Fibrin', 'Antikor'], answer_index: 2, explanation: 'Trombin, çözünür fibrinojeni çözünmez **fibrine** dönüştürür.' },
          { id: 'db-q7', type: 'quiz', purpose: 'error', question: 'Lenf sistemiyle ilgili hangisi yanlıştır?', options: ['Kör uçlu kılcallarla başlayabilir', 'Doku sıvısının fazlasını toplar', 'Şilomikronları taşıyabilir', 'Kalp gibi merkezî pompası ve ayrı atardamarları vardır'], answer_index: 3, explanation: 'Lenf sisteminin merkezî kalp pompası ve atardamarı yoktur.' },
          { id: 'db-q8', type: 'quiz', purpose: 'concept', question: 'Antikorların temel kaynağı hangi hücredir?', options: ['Plazma hücresi', 'Alyuvar', 'Trombosit', 'Sitotoksik T'], answer_index: 0, explanation: 'Etkinleşmiş B lenfositlerinden gelişen **plazma hücreleri** antikor salgılar.' },
          { id: 'db-q9', type: 'quiz', purpose: 'apply', question: 'Aynı antijenle ikinci karşılaşmada yanıtın daha hızlı olmasını sağlayan temel yapı hangisidir?', options: ['Yalnız eritrosit', 'Hafıza B ve T hücreleri', 'Fibrin ağı', 'Kalp kapakları'], answer_index: 1, explanation: 'İlk yanıt sonrası kalan **hafıza lenfositleri** ikinci yanıtı hızlandırır ve güçlendirir.' },
          { id: 'db-q10', type: 'quiz', purpose: 'concept', question: 'Aşı ve antiserum için doğru karşılaştırma hangisidir?', options: ['İkisi de hazır antikor verir', 'Aşı pasif, serum aktif bağışıklık sağlar', 'Aşı hafıza oluşturabilir; antiserum hazır antikorla hızlı fakat geçici korur', 'Antiserum her zaman ömür boyu korur'], answer_index: 2, explanation: 'Aşı **yapay aktif**, antiserum **yapay pasif** bağışıklıktır.' },
        ],
      },
      {
        id: 'db-kapanis', kind: 'close', title: 'Pompadan hafızaya bütün ağı kapat',
        lead: 'İç ortamın sürekliliği; akım, değişim, sıvı dönüşü ve seçici savunmanın aynı anda işlemesine bağlıdır.',
        blocks: [
          { id: 'db-summary', type: 'summary', title: 'Bu dersten kalması gerekenler', points: [
            'Damar adı oksijene değil, kalbe göre akış yönüne bağlıdır.',
            'Sağ kalp küçük, sol kalp büyük dolaşıma pompalar; sol ventrikül daha kalın ama iki tarafın debisi eşittir.',
            'SA düğüm ritmi başlatır; AV gecikmesi sonrası His–Purkinje uyarıyı ventrikül apeksine taşır.',
            'Kapaklar iki yanlarındaki basınç farkıyla açılır ve kapanır.',
            'Kılcalların toplam kesit alanı en büyük, kan hızı en düşüktür.',
            'Hidrostatik basınç dışarı filtrasyonu, plazma proteinleri içeri çekimi; lenf fazla sıvının dönüşünü destekler.',
            'Alyuvar gaz, akyuvar savunma, trombosit hemostaz; plazma çözünmüş madde ve protein taşır.',
            'Lenf kör uçlu kılcallarda başlar, tek yönlü damarlarla köprücük altı toplardamarlarına döner.',
            'Doğal bağışıklık hızlı ve genel; B–T lenfositli özgül bağışıklık seçici ve hafızalıdır.',
            'Aşı aktif ve hafızalı; antiserum pasif, hızlı ve geçicidir.',
          ] },
          { id: 'db-memory', type: 'memory', title: 'Beş sınav kancası', body: '**Atar kalpten çıkar. Sol duvar kalın, debi eşit. Kılcal alan büyük, hız düşük. Albümin içeri çeker, lenf fazlayı toplar. B antikor; sitotoksik T hücre öldürür; aşı hafıza, serum hazır antikor.**' },
          { id: 'db-final-exam', type: 'exam', title: 'Son 30 saniye kontrolü', body: 'Akış sorusunda oku, kapak sorusunda basıncı, damar sorusunda toplam kesit alanını, ödem sorusunda dört kuvveti, bağışıklık sorusunda hücre–ürün–hafızayı işaretle.', patterns: ['Tam kan turu', 'Kapak–basınç', 'SA–AV iletim', 'Kılcal–lenf dengesi', 'Kan hücreleri', 'Doğal–özgül ve aktif–pasif bağışıklık'] },
          { id: 'db-next', type: 'next_step', body: 'Sıradaki AYT Biyoloji konusu **Solunum Sistemi**. Havalandırma, gaz değişimi, hemoglobin taşınması ve solunum kontrolünü dolaşımla doğrudan bağlayacağız.', topics: ['Solunum yolu anatomisi', 'Akciğer hacim–basınç mekaniği', 'Alveol gaz değişimi', 'O₂–CO₂ taşınması'] },
          { id: 'db-close-audio', type: 'audio_script', body: `Dersi tek bir alyuvarı izleyerek kapat.

Vena kavadan sağ kalbe, akciğere, sol kalbe ve aortla dokuya gider. Kılcalda hız düşer; gaz ve maddeler değişir. Fazla doku sıvısını lenf toplar.

Aynı ağda fagositler hızlı yanıt verir, B hücresi antikor üretir, T hücresi enfekte hücreyi hedefler ve hafıza ikinci karşılaşmayı hızlandırır. Pompa, değişim, geri dönüş ve savunma tek devredir.` },
        ],
      },
    ],
    assessment: { threshold: 8, total: 10, retry: true },
  },
}
