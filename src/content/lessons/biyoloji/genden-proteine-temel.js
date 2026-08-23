import gendenProteine from './genden-proteine.js'

const temelEkBolumler = [
  {
    id: 'gp-temel-genom-koruma',
    kind: 'deepen',
    title: 'Genomun korunması: kromatin, telomer, eşlenme hatası ve DNA onarımı',
    lead: 'DNA yalnız kopyalanmaz; erişilebilirliği düzenlenir, uçları korunur ve her gün oluşan hasarlar farklı onarım yollarıyla düzeltilir.',
    blocks: [
      {
        id: 'gp-temel-genom-prose',
        type: 'prose',
        body: `Ökaryot DNA’sı histon oktamerleri çevresine sarılarak nükleozomları oluşturur. Histonların pozitif yükü DNA’nın negatif fosfat omurgasıyla etkileşir. Nükleozom dizisi daha üst düzey döngü ve protein iskeletleriyle paketlenir. Bölünmeyen hücrede görece açık ve transkripsiyona elverişli **ökromatin**, yoğun ve çoğunlukla daha az etkin **heterokromatin** bölgeleri bulunur. Kromatin sabit bir ambalaj değildir; genlerin okunabilirliğini ayarlayan dinamik yapıdır.

Histon kuyruklarının asetillenmesi çoğu bağlamda histon–DNA etkileşimini gevşetip transkripsiyonu artırabilir; deasetilasyon sıkılaşmayı destekler. DNA’daki sitozinlerin metillenmesi, özellikle promotör çevresinde, gen ifadesini baskılayabilir. Bu kimyasal işaretler DNA baz dizisini değiştirmeden gen kullanımını etkileyen **epigenetik** düzenlemelerdir. Bazıları hücre bölünmelerinde korunabilir; fakat mutasyon gibi DNA dizisinin kalıcı harf değişimi değildir.

DNA eşlenmesi yüksek doğrulukta olsa da hata olasılığı sıfır değildir. DNA polimeraz yanlış nükleotit eklediğinde birçok polimeraz 3′→5′ düzeltme etkinliğiyle yeni zincirin ucunu kontrol eder, hatalı bazı çıkarıp doğru olanı ekler. Eşlenme sonrası **yanlış eşleşme onarımı**, gözden kaçan uyumsuz çiftleri yeni zincirde belirleyip düzeltir. Bu iki kontrol hata oranını çok büyük ölçüde düşürür.

DNA, UV ışığıyla pirimidin dimerleri, iyonlaştırıcı radyasyonla zincir kırıkları, reaktif oksijenle baz değişimleri veya kimyasallarla eklentiler yaşayabilir. **Baz çıkarım onarımı** küçük bozuk bazları; **nükleotit çıkarım onarımı** hacimli ve sarmalı bozan lezyonları çevresindeki kısa DNA parçasıyla birlikte çıkarır. Boşluk DNA polimerazla doldurulur, ligaz omurgayı kapatır. Çift zincir kırıkları homolog rekombinasyonla daha doğru veya homolog olmayan uç birleştirmeyle daha hızlı fakat hata eğilimli onarılabilir.

Hasar çok fazlaysa hücre döngüsü kontrol noktaları bölünmeyi durdurur. p53 gibi düzenleyiciler onarım için zaman kazandırabilir; onarım mümkün değilse apoptozu başlatabilir. Onarım genlerindeki mutasyonlar yeni mutasyonların birikme hızını artırarak kanser riskini yükseltebilir. Kanser tek bir mutasyonla zorunlu oluşmaz; büyüme sinyali, kontrol noktası, apoptoz, DNA onarımı, damarlanma ve invazyon gibi birçok özelliğin aşamalı değişimi gerekir.

Doğrusal kromozomların uçlarındaki **telomerler**, tekrarlayan DNA dizileri ve proteinlerden oluşur. DNA polimeraz başlatıcı kaldırıldıktan sonra geciken zincirin en ucunu tamamen dolduramaz; somatik hücrelerde telomerler her bölünmede kısalma eğilimindedir. Kritik kısalma kalıcı hücre döngüsü durması veya apoptoza katkı verir. Telomer, önemli genleri uç kaybından ve kromozom uçlarının kırık gibi algılanmasından korur.

**Telomeraz**, kendi RNA kalıbını kullanarak telomer tekrarları ekleyen ters transkriptazdır. Eşey ana hücreleri, bazı kök hücreler ve çoğu kanser hücresinde etkinliği yüksektir; birçok somatik hücrede düşüktür. Telomeraz etkinliği hücreyi otomatik olarak “genç ve sağlıklı” yapmaz; sınırsız bölünme kapasitesi kanser hücreleri için de avantajdır. Yaşlanma yalnız telomer kısalmasına indirgenemez.

DNA paketlenmesi, replikasyon ve onarım aynı genomda çakışmadan koordine edilir. Replikasyon çatalı hasarla karşılaşırsa yavaşlayabilir; özel polimerazlar lezyonu geçici olarak aşabilir fakat hata riski taşır. Hücre, doğruluk ile eşlenmeyi tamamlayabilme arasında denge kurar. Mutasyon oranının düşük ama sıfır olmaması hem bireysel hastalık riskini hem de popülasyonların evrimsel varyasyon kaynağını açıklar.`,
      },
      {
        id: 'gp-temel-genom-map',
        type: 'concept_map',
        title: 'DNA bilgisinin korunma katmanları',
        intro: 'Paketleme erişimi düzenler; polimeraz denetimi, onarım ve kontrol noktaları dizinin sürekliliğini korur.',
        nodes: [
          { id: 'kromatin', label: 'Kromatin', detail: 'Nükleozom ve erişilebilirlik' },
          { id: 'pol', label: 'Polimeraz düzeltmesi', detail: 'Yeni uçtaki yanlış bazı çıkarır' },
          { id: 'onarim', label: 'DNA onarım yolları', detail: 'Baz/nükleotit çıkarımı ve kırık onarımı' },
          { id: 'kontrol', label: 'Hücre döngüsü kontrolü', detail: 'Onarım için durma veya apoptoz' },
          { id: 'telomer', label: 'Telomer–telomeraz', detail: 'Doğrusal kromozom uçları' },
          { id: 'mutasyon', label: 'Kalan mutasyon', detail: 'Somatik veya eşey hattı sonucu' },
        ],
        links: [
          { from: 'kromatin', to: 'pol', label: 'eşlenme için açılır' },
          { from: 'pol', to: 'onarim', label: 'kaçan hata aktarılır' },
          { from: 'onarim', to: 'kontrol', label: 'hasar yanıtıyla eşgüdüm' },
          { from: 'telomer', to: 'kontrol', label: 'kritik kısalma sinyali' },
          { from: 'onarim', to: 'mutasyon', label: 'onarılmazsa kalıcılaşır' },
          { from: 'kontrol', to: 'mutasyon', label: 'hasarlı hücrenin çoğalmasını sınırlar' },
        ],
        caption: 'Genom kararlılığı tek enzim değil, birbirini yedekleyen çok katmanlı bir sistemdir.',
      },
      {
        id: 'gp-temel-onarim-table',
        type: 'table',
        title: 'DNA hasarı ve başlıca yanıt',
        columns: ['Hasar/hata', 'Başlıca kaynak', 'Temel düzeltme mantığı'],
        rows: [
          ['Yanlış eşleşmiş baz', 'Replikasyon hatası', 'Polimeraz denetimi ve mismatch onarımı'],
          ['Tek bozuk baz', 'Oksidasyon/deaminasyon', 'Baz çıkarım onarımı'],
          ['Pirimidin dimeri/hacimli lezyon', 'UV veya kimyasal eklenti', 'Nükleotit çıkarım onarımı'],
          ['Çift zincir kırığı', 'İyonlaştırıcı radyasyon/çatal çökmesi', 'Homolog rekombinasyon veya uç birleştirme'],
          ['Kromozom ucu sorunu', 'Son eşlenme problemi', 'Telomer ve uygun hücrede telomeraz'],
        ],
        caption: 'Onarım yolu hasarın kimyasal türü ve hücre döngüsü evresine göre seçilir.',
      },
      {
        id: 'gp-temel-telomer-check',
        type: 'checkpoint',
        question: 'Telomerazın kanser hücrelerinde etkinleşmesi neden hücre için avantajdır?',
        hint: 'Çok sayıda bölünmede kromozom uçlarının ne olacağını düşün.',
        answer: 'Telomeraz telomer tekrarlarını yenileyerek kritik uç kısalmasını geciktirir. Böylece kanser hücresi senesens veya ölüm sınırını aşarak daha uzun süre bölünebilir.',
      },
      {
        id: 'gp-temel-epigenetik-trap',
        type: 'trap',
        title: 'Epigenetik değişimi DNA mutasyonu sanmak',
        wrong: '“Bir gen metillendiğinde nükleotit dizisi zorunlu olarak değişmiştir.”',
        right: 'DNA metilasyonu ve histon değişiklikleri baz dizisini değiştirmeden gen erişilebilirliği ve ifadesini değiştirebilir.',
        body: 'Epigenetik işaret kalıcı veya geri dönüşümlü olabilir; mutasyonun tanımı DNA dizisi değişimidir.',
      },
    ],
  },
  {
    id: 'gp-temel-ifade-duzenleme',
    kind: 'deepen',
    title: 'Gen ifadesinin kontrolü ve proteinin olgunlaşma–hedeflenme yolculuğu',
    lead: 'DNA dizisinin varlığı yeterli değildir; gen açılmalı, RNA işlenmeli, protein katlanmalı, doğru yere taşınmalı ve gerektiğinde yıkılmalıdır.',
    blocks: [
      {
        id: 'gp-temel-ifade-prose',
        type: 'prose',
        body: `Prokaryotlar çevre değişimine gen kümelerini birlikte açıp kapatarak hızla yanıt verir. Aynı işlev yolundaki genler tek promotör ve operatör altında bir **operon** oluşturabilir; tek polisistronik mRNA’dan birden fazla protein üretilebilir. Düzenleyici protein operatöre bağlanarak RNA polimerazın ilerlemesini engelleyebilir veya aktivatör promotör etkinliğini artırabilir.

**Lac operonu**, laktoz kullanım genlerinin indüklenebilir kontrolüne örnektir. Laktoz yokken baskılayıcı operatöre bağlıdır ve transkripsiyon düşüktür. Laktoz türevi baskılayıcıya bağlanınca operatör serbestleşir. Glikoz düşükken cAMP artar, CAP aktivatörü promotör yakınında bağlanıp güçlü transkripsiyonu destekler. En yüksek ifade laktoz varken ve glikoz azken oluşur; bakteri önce kolay enerji kaynağı glikozu kullanır.

**Trp operonu**, triptofan sentez genlerini içerir ve baskılanabilir sisteme örnektir. Triptofan azken baskılayıcı tek başına etkisizdir, sentez genleri çalışır. Triptofan çoğaldığında korepresör gibi baskılayıcıya bağlanır; kompleks operatöre tutunup transkripsiyonu azaltır. Lac sistemi kullanılacak substrat geldiğinde açılır, trp sistemi ürün yeterliyken kapanır.

Ökaryotlarda kontrol daha çok katmanlıdır. Kromatinin açılması, promotör ve uzak **enhancer** dizilerine transkripsiyon faktörlerinin bağlanması, DNA’nın döngü yaparak protein komplekslerini buluşturması transkripsiyon başlangıcını belirler. Aynı transkripsiyon faktörü farklı hücrelerde başka ortak proteinler nedeniyle farklı genleri etkileyebilir. Hücresel farklılaşma, genlerin fiziksel olarak kaybolmasından değil bu düzenleme ağlarının kalıcı örüntülerinden doğar.

Ön mRNA’nın intronları çıkarılırken ekzonlar farklı kombinasyonlarda birleştirilebilir; **alternatif kesip birleştirme** tek genden farklı protein izoformları üretir. Alternatif promotör, farklı poli-A noktası ve RNA düzenlenmesi çeşitliliği artırabilir. 5′ başlık mRNA’yı yıkımdan korur ve ribozom tanınmasına; poli-A kuyruğu kararlılık ve çekirdekten çıkışa katkı verir. mRNA ömrü protein üretim miktarını güçlü biçimde belirler.

MikroRNA’lar hedef mRNA’ya tamamlayıcı bağlanıp translasyonu baskılayabilir veya mRNA yıkımını hızlandırabilir. RNA bağlayıcı proteinler mRNA’nın hücre içi konumunu, ömrünü ve çevrilmesini düzenler. Aynı miktarda transkripsiyon yapılmasına rağmen mRNA yıkımı hızlanırsa protein azalabilir; “gen ifadesi yalnız promotörde düzenlenir” yanlıştır.

Translasyon sitozolde serbest ribozomda başlar. Yeni polipeptitte ER’ye yönelten **sinyal peptidi** ortaya çıkarsa sinyal tanıma parçacığı ribozomu granüllü ER zarına götürür. Sentez kanal üzerinden lümene veya zara devam eder. Salgı proteinleri, lizozom enzimleri ve birçok zar proteini ER–Golgi yolunu kullanır. Sitozol, çekirdek, mitokondri veya peroksizom proteinleri farklı hedefleme sinyalleri taşır.

Yeni polipeptit işlevsel proteine otomatik dönüşmez. Şaperonlar doğru katlanmayı destekler; disülfit bağları, proteolitik kesim, fosforilasyon, glikozilasyon, asetilasyon veya lipid eklenmesi işlevi–konumu değiştirebilir. İnsülin öncül proteininin kesilerek olgunlaşması ve salgı proteinlerinin Golgi’de glikozillenmesi örnektir. Proteinin birincil dizisi katlanma bilgisinin büyük bölümünü taşır fakat hücresel ortam ve yardımcı proteinler gerekir.

Yanlış katlanmış proteinler ER kalite kontrolünde tutulabilir ve sitozole gönderilip **ubikuitin–proteazom** sistemiyle yıkılabilir. Kısa ömürlü düzenleyici proteinler de ubikuitin etiketleriyle seçilir. Büyük protein kompleksleri ve organeller otofaji–lizozom yoluyla parçalanabilir. Protein miktarı sentez hızı kadar yıkım hızına bağlıdır.

Bir gen ifadesi sorusunda en az altı kontrol noktası vardır: kromatin erişimi, transkripsiyon başlangıcı, RNA işlenmesi, mRNA ömrü/yerleşimi, translasyon ve protein işlenmesi–yıkımı. Mutasyon bu noktaların herhangi birini etkileyebilir. Promotör mutasyonu miktarı; splice bölgesi mutasyonu ekzon düzenini; yanlış anlamlı mutasyon katlanmayı; dur kodonu kaybı protein uzunluğunu değiştirebilir.

Merkezî dogma genel akışı açıklar ama biyolojide özel bilgi yolları vardır. RNA virüslerinde RNA’dan RNA kopyalanabilir; retrovirüslerde ters transkriptaz RNA’dan DNA üretir. Prionlarda nükleik asit olmadan yanlış protein katlanma biçimi başka proteinlere aktarılabilir. Bu örnekler protein dizisi bilgisinin DNA’ya geri çevrildiğini göstermez; merkezî dogmanın asıl ilkesi dizi bilgisinin proteinden nükleik aside geri akmamasıdır.`,
      },
      {
        id: 'gp-temel-ifade-map',
        type: 'concept_map',
        title: 'Genden işlevsel proteine kontrol noktaları',
        intro: 'Hücre protein miktarını yalnız RNA üretirken değil, yolun her basamağında ayarlar.',
        nodes: [
          { id: 'krom', label: 'Kromatin erişimi', detail: 'Epigenetik ve transkripsiyon faktörü' },
          { id: 'rna', label: 'Transkripsiyon', detail: 'Promotör–enhancer' },
          { id: 'isleme', label: 'RNA işlenmesi', detail: 'Splicing, başlık, poli-A' },
          { id: 'mrna', label: 'mRNA ömrü ve konumu', detail: 'miRNA ve bağlayıcı proteinler' },
          { id: 'ceviri', label: 'Translasyon', detail: 'Ribozom ve tRNA' },
          { id: 'protein', label: 'Katlanma–hedeflenme–yıkım', detail: 'ER–Golgi, proteazom, lizozom' },
        ],
        links: [
          { from: 'krom', to: 'rna', label: 'geni erişilebilir yapar' },
          { from: 'rna', to: 'isleme', label: 'ön RNA üretir' },
          { from: 'isleme', to: 'mrna', label: 'olgun izoform' },
          { from: 'mrna', to: 'ceviri', label: 'okunma fırsatı' },
          { from: 'ceviri', to: 'protein', label: 'polipeptit üretir' },
          { from: 'protein', to: 'krom', label: 'düzenleyici protein geri bildirimi' },
        ],
        caption: 'Aynı DNA’yı taşıyan hücreler, bu kontrol noktalarının farklı ayarlanmasıyla farklı protein profilleri oluşturur.',
      },
      {
        id: 'gp-temel-operon-table',
        type: 'compare',
        title: 'Lac ve trp operonlarının mantığı',
        columns: ['Lac operonu', 'Trp operonu'],
        rows: [
          { label: 'Genlerin işi', values: ['Laktozu kullanma', 'Triptofan sentezleme'] },
          { label: 'Varsayılan mantık', values: ['Substrat yokken baskılı', 'Ürün azken açık'] },
          { label: 'Küçük molekül etkisi', values: ['Laktoz türevi baskılayıcıyı etkisizleştirir', 'Triptofan baskılayıcıyı etkinleştirir'] },
          { label: 'En yüksek/düşük ifade', values: ['Laktoz var, glikoz az', 'Triptofan çokken düşük'] },
        ],
        insight: 'Katabolik yol substrat geldiğinde, anabolik yol ürün azaldığında açılır.',
      },
      {
        id: 'gp-temel-hedefleme-example',
        type: 'worked_example',
        title: 'Salgı proteininin yolunu kur',
        question: 'Hücre dışına salgılanacak bir proteinin sentez ve taşınma sırası nedir?',
        steps: [
          { title: 'Başlangıcı doğru yerleştir', body: 'Bütün translasyonlar gibi sentez serbest ribozomda başlar.' },
          { title: 'Sinyal peptidini izle', body: 'ER sinyali ortaya çıkınca ribozom granüllü ER’ye yönelir ve sentez lümene devam eder.' },
          { title: 'İşleme ve paketlemeyi tamamla', body: 'Protein ER’de katlanır, kesecikle Golgi’ye gider, burada işlenip salgı keseciğine ayrılır ve ekzositozla çıkar.' },
        ],
        answer: 'Serbest ribozom başlangıcı → sinyal aracılı granüllü ER → taşıma keseciği → Golgi → salgı keseciği → hücre zarı/ekzositoz.',
        takeaway: 'Salgı proteini sentezi doğrudan Golgi’de başlamaz; ribozom–ER–Golgi yolu izlenir.',
      },
      {
        id: 'gp-temel-ifade-trap',
        type: 'trap',
        title: 'Farklılaşan hücrenin gen kaybettiğini sanmak',
        wrong: '“Nöron insülin üretmiyorsa insülin geni genomundan silinmiştir.”',
        right: 'Çoğu somatik hücre aynı genomu taşır; kromatin ve düzenleyici ağlar farklı gen kümelerini ifade eder.',
        body: 'İstisnai DNA kayıpları bulunabilse de normal hücresel farklılaşmanın temel mekanizması seçici gen ifadesidir.',
      },
    ],
  },
]

const interaktifBolumler = gendenProteine.document.sections
  .filter((section) => section.id !== 'gp-quiz' && section.id !== 'gp-kapanis')
const kapanis = gendenProteine.document.sections.find((section) => section.id === 'gp-kapanis')

export default {
  ...gendenProteine,
  slug: 'genden-proteine-temel',
  order: 0,
  partLabel: 'Önce temelini öğren',
  learningMode: 'foundation',
  foundationStandard: 'biology-v1',
  title: 'Genden Proteine: Ayrıntılı Temel Not',
  subtitle: 'DNA’nın yapısını ve korunmasını, gen ifadesini, RNA–protein sentezini ve biyoteknolojik uygulamaları eksiksiz öğren.',
  document: {
    ...gendenProteine.document,
    estimated_minutes: 215,
    outcomes: [
      ...gendenProteine.document.outcomes,
      'Kromatin erişilebilirliği, DNA metilasyonu ve histon değişikliklerini epigenetik gen kontrolüyle ilişkilendirebileceksin.',
      'Polimeraz denetimi, yanlış eşleşme, çıkarım ve çift zincir kırığı onarımını hasar türüyle eşleştirebileceksin.',
      'Telomer kısalması ve telomeraz etkinliğini doğrusal kromozom eşlenmesi, kök hücre ve kanserle açıklayabileceksin.',
      'Lac ve trp operonlarını substrat–ürün varlığı ve baskılayıcı/aktivatör mantığıyla çözebileceksin.',
      'Alternatif RNA işlenmesi, miRNA, mRNA ömrü ve protein yıkımının gen ifadesine katkısını yorumlayabileceksin.',
      'Salgı ve zar proteinlerinin ribozom–ER–Golgi yolunu; katlanma, hedeflenme ve kalite kontrolüyle kurabileceksin.',
    ],
    sections: [
      ...interaktifBolumler.slice(0, 3),
      temelEkBolumler[0],
      ...interaktifBolumler.slice(3),
      temelEkBolumler[1],
      kapanis,
    ],
  },
}
