import { tarih, tartismaliTarih } from './tipler.js'
import { ANLATIMLAR } from './anlatimlar.js'

/**
 * I. MURAD — HÜDAVENDİGÂR (1362 – 1389)
 * ==================================================================
 * Devletin ağırlık merkezinin Rumeli’ye kaydığı, merkezî ordunun ve
 * taşra teşkilatının kurulduğu dönem. Sınav açısından iki eksen:
 *   1) Balkan savaşları zinciri (Sırpsındığı → Çirmen → I. Kosova)
 *   2) Teşkilatlanma (Kapıkulu, kazasker, beylerbeylik, tımar)
 */
const birinciMurad = {
  id: 'birinci-murad',
  order: 3,
  detaySeviyesi: 'tam',
  name: 'I. Murad',
  epithet: 'Hüdavendigâr',
  reignStart: tarih(1362),
  reignEnd: tarih(1389),
  birth: 'Yaklaşık 1326',
  death: '1389 · I. Kosova Savaşı’nın ardından savaş alanında şehit edildi',
  father: 'Orhan Gazi',
  mother: 'Kaynaklarda Nilüfer Hatun olarak anılır',
  predecessor: 'Orhan Gazi',
  successor: 'I. Bayezid (Yıldırım)',
  dynastyPeriod: 'Kuruluş Dönemi',
  openingHeadline: 'Ağırlık Merkezi Rumeli’ye Kayıyor',
  summary:
    'Yirmi yedi yıllık hükümdarlığında Osmanlı, Balkanlarda Haçlı ittifaklarını üst üste yenerek Rumeli’ye yerleşti; başkent Edirne’ye taşındı. Aynı dönemde Kapıkulu ordusu, kazaskerlik, beylerbeylik ve tımar düzeni kurularak devlet merkezî bir yapıya kavuştu. Anadolu’da ise topraklar savaşla değil, çeyiz ve satın alma yoluyla büyüdü.',
  capitals: ['Bursa', 'Edirne (yaklaşık 1365’ten itibaren)'],

  traits: [
    { field: 'askeri', level: 'belirleyici', label: 'Balkan hâkimiyeti', evidence: 'Edirne, Filibe, Sofya ve Niş’in alınması; ders anlatımındaki Sırpsındığı (1364), belgeli Çirmen/Meriç (1371) ve I. Kosova (1389) zaferleri.' },
    { field: 'devletlesme', level: 'belirleyici', label: 'Merkezî ordu ve taşra teşkilatı', evidence: 'Pençik sistemiyle Yeniçeri Ocağı ve Kapıkulu ordusunun kurulması, Rumeli Beylerbeyliği’nin oluşturulması, tımar düzeninin yerleşmesi.' },
    { field: 'hukuk', level: 'belirgin', label: 'Adlî ve idarî düzen', evidence: 'Kazaskerliğin kurulması, kadıların merkezden atanan bir düzene bağlanması, ülkenin "hükümdar ve oğullarının" sayılması anlayışı.' },
    { field: 'diplomasi', level: 'belirgin', label: 'Savaşsız toprak kazanımı', evidence: 'Germiyanoğulları’ndan çeyizle, Hamitoğulları’ndan satın alma yoluyla toprak alınması.' },
    { field: 'ekonomi', level: 'belirgin', label: 'Tımar ve gelir düzeni', evidence: 'Fethedilen toprakların tımar olarak dağıtılması; askerin ve üretimin aynı sistemle finanse edilmesi.' },
  ],

  keyEvents: [
    {
      id: 'edirne', title: 'Edirne’nin fethi ve başkent olması', date: tartismaliTarih(1363, '1361/1363', 'Fetih yılı kaynaklarda ayrışır; ders kitaplarında çoğunlukla 1363 verilir. Başkentin taşınması yaklaşık 1365’tir.'), eventType: 'major',
      summary: 'Edirne alındı ve devletin başkenti buraya taşındı.',
      detail: 'Edirne, Balkanlara açılan yolların düğüm noktasıdır. Başkentin Bursa’dan buraya taşınması sadece bir adres değişikliği değildir: devletin yüzünü Anadolu’dan Avrupa’ya çevirdiğini, ordunun ve siyasetin ağırlığının artık Rumeli’de olduğunu gösterir. Bundan sonraki bir asır boyunca büyük seferler bu şehirden yola çıkacaktır.',
      result: 'Osmanlı, Balkan siyasetinin merkezine yerleşti; Bizans karadan kuşatılmış duruma düştü.',
      osym: 'Başkent sırası: Söğüt/Yenişehir → Bursa → EDİRNE → İstanbul. Edirne’nin fetih tarihi kaynaklara göre değiştiği için soru genelde "başkent olması" üzerinden kurulur.',
      mapFocus: 'edirne',
      atlas: { year: 1365, eventId: 'edirne-baskent', focus: 'edirne', label: 'Edirne çevresini atlasta aç' },
    },
    {
      id: 'kapikulu', title: 'Kapıkulu ordusunun ve Yeniçeri Ocağı’nın kurulması', date: tartismaliTarih(1363, '1360’lar', 'Kuruluş bir yıla değil, birkaç yıllık bir düzenlemeye yayılır.'), eventType: 'major',
      summary: 'Pençik sistemiyle doğrudan padişaha bağlı, sürekli ve maaşlı merkez ordusu kuruldu.',
      detail: 'Pençik, savaş esirlerinin beşte birinin devlete ayrılması esasına dayanır. Bu askerler eğitilerek padişaha bağlı birliklere alındı. Buradaki kritik nokta şudur: yaya ve müsellem beylere ve toprağa bağlıydı; Kapıkulu ise doğrudan padişaha bağlı, maaşlı ve sürekli bir kuvvettir. Merkezî devletin askerî temeli budur.',
      result: 'Padişahın beylerden bağımsız, her an sefere hazır bir ordusu oldu.',
      significance: 'Osmanlı’nın Balkanlarda üst üste kazanmasının kurumsal açıklaması.',
      osym: 'Kapıkulu/Yeniçeri = I. MURAD. Yaya ve müsellem = ORHAN GAZİ. Devşirme sistemi ise daha sonra, pençiğin yetersiz kalmasıyla gelişmiştir.',
    },
    {
      id: 'rumeli-beylerbeyligi', title: 'Rumeli Beylerbeyliği’nin kurulması', date: tartismaliTarih(1362, '1360’lar', 'Beylerbeyliğin kuruluşu bir düzenleme sürecidir; tek yıla bağlanamaz.'),
      summary: 'Rumeli toprakları tek bir üst yönetim biriminde toplandı; ilk beylerbeyi Lala Şahin Paşa oldu.',
      detail: 'Fetihler hızlandıkça her sancağın ayrı ayrı merkeze bağlanması yönetilemez hâle geldi. Beylerbeylik, sancakların üstünde bir kademedir. İlk beylerbeylik Rumeli’de kurulmuştur — bu, ağırlık merkezinin nerede olduğunun idari kanıtıdır.',
      osym: 'İlk beylerbeylik ANADOLU’da değil, RUMELİ’de kurulmuştur. Sıkça karıştırılır.',
    },
    {
      id: 'germiyan-cehiz', title: 'Germiyanoğulları’ndan çeyiz yoluyla toprak', date: tarih(1381),
      summary: 'Şehzade Bayezid ile Germiyan beyinin kızının evliliğinde Kütahya ve çevresi çeyiz olarak alındı.',
      detail: 'Osmanlı, Anadolu’daki Türk beylikleriyle savaşmaktan mümkün olduğunca kaçındı. Sebebi ahlaki olduğu kadar siyasidir: Müslüman beyliklerle savaşmak, Balkanlarda yürütülen gaza siyasetinin meşruiyetini zedelerdi. Bu yüzden Anadolu’da genişleme, evlilik ve satın alma gibi yollarla yürütüldü.',
      osym: 'Anadolu’da SAVAŞSIZ toprak kazanımı: Germiyan (çeyiz) ve Hamitoğulları (satın alma). En sevilen soru kalıplarından biridir.',
      mapFocus: 'kutahya',
    },
    {
      id: 'hamitogullari', title: 'Hamitoğulları’ndan satın alma', date: tartismaliTarih(1381, '1374–1381 arası', 'Kaynaklarda farklı yıllar verilir.'),
      summary: 'Akşehir, Beyşehir, Seydişehir ve Yalvaç para karşılığında satın alındı.',
      detail: 'Satın alınan bu topraklar Karamanoğulları ile Osmanlı’yı doğrudan komşu yaptı ve iki güç arasındaki gerilimi başlattı.',
      result: 'Karamanoğulları ile ilk askerî karşılaşmanın zemini oluştu.',
      osym: 'Satın alma yoluyla toprak kazanımı olarak sorulur.',
      mapFocus: 'aksehir',
    },
    {
      id: 'ploshnik', title: 'Ploşnik yenilgisi', date: tarih(1388),
      summary: 'Balkanlarda uğranılan yenilgi, Haçlı ittifakını cesaretlendirdi.',
      detail: 'Osmanlı akıncı kuvvetleri Sırp ve Bosna kuvvetleri karşısında ağır kayıp verdi. Bu yenilgi, Balkan devletlerine "Osmanlı yenilebilir" izlenimi verdi ve bir yıl sonraki büyük Haçlı ittifakını hazırladı.',
      significance: 'I. Kosova Savaşı’nın doğrudan sebeplerindendir.',
      osym: 'I. Kosova’nın sebebi sorulduğunda Ploşnik hatırlanmalıdır.',
    },
  ],

  battles: [
    {
      id: 'sirpsindigi', title: 'Sırpsındığı Savaşı', date: tartismaliTarih(1364, '1363/1364?', 'MEB/klasik ders anlatımı bu olayı 1363/1364’e yerleştirir. Modern araştırmada ayrı bir savaş olup olmadığı tartışmalıdır; bazı tarihçiler anlatının 1371 Çirmen/Meriç Savaşı ile karıştığını belirtir.'), eventType: 'major',
      summary: 'MEB ve klasik sınav anlatımında ilk Haçlı ittifakına karşı zafer; olayın 1371 Çirmen’den ayrılığı akademik olarak tartışmalıdır.',
      sides: ['Klasik anlatımda Hacı İlbey komutasındaki Osmanlı akıncıları', 'Klasik anlatımda Macar, Sırp, Bosna ve Eflak kuvvetlerinden oluşan ittifak'],
      cause: 'Ders anlatımında Edirne’nin alınması ve Osmanlı’nın Balkanlarda ilerlemesi karşısında kurulan ittifakla açıklanır.',
      detail: 'Klasik Osmanlı ve ders kitabı anlatısı, Meriç kıyısındaki kalabalık ittifak ordusunun Hacı İlbey’in gece baskınıyla dağıtıldığını aktarır. Bununla birlikte çağdaş kayıtlar ayrı bir 1364 savaşını kesinleştirmez. Modern tarih yazımında bu anlatının 26 Eylül 1371 tarihli Çirmen/Meriç Savaşı’yla birleşmiş olabileceği vurgulanır.',
      result: 'Klasik anlatıma göre ittifak ordusu dağıldı ve Balkanlardaki Osmanlı ilerleyişinin önü açıldı.',
      significance: 'Geleneksel kuruluş dönemi kronolojisinde Osmanlı’nın Balkan ittifakları karşısındaki ilk büyük başarısı olarak konumlandırılır.',
      osym: 'MEB/klasik sınav kabulü: ilk Haçlı seferi → Sırpsındığı; komutan → Hacı İlbey. Akademik not: olayın 1371 Çirmen’den ayrılığı tartışmalıdır.',
      figures: ['haci-ilbey-murad'],
      mapFocus: 'sirpsindigi',
      atlas: { year: 1364, eventId: 'sirpsindigi-savasi', focus: 'edirne', label: 'Meriç hattını atlasta aç' },
    },
    {
      id: 'cirmen', title: 'Çirmen Savaşı', date: tarih(1371), eventType: 'major',
      summary: 'Sırp kuvvetleri yenildi; Makedonya yolu Osmanlı’ya açıldı.',
      sides: ['I. Murad’ın kuvvetleri', 'Sırp despotlarının birleşik ordusu'],
      cause: 'Sırp beylerinin Osmanlı ilerleyişini Meriç hattında durdurma girişimi.',
      result: 'Sırp ordusu bozguna uğradı; Makedonya ve Bulgaristan yönündeki ilerleme hızlandı, bölge beylerinin bir kısmı Osmanlı’ya bağlandı.',
      significance: 'Balkanlarda Osmanlı üstünlüğünün pekişmesi; bağlı (vergiye bağlanmış) devletler düzeninin yaygınlaşması.',
      osym: 'Çirmen sonrası Makedonya yolunun açılması ve Bulgar krallığının Osmanlı’ya bağlanması sorulur.',
      mapFocus: 'cirmen',
    },
    {
      id: 'kosova', title: 'I. Kosova Savaşı', date: tarih(1389), eventType: 'major',
      summary: 'Balkan Haçlı ittifakı yenildi; I. Murad savaş alanında şehit edildi.',
      sides: ['I. Murad ve şehzadeleri Bayezid ile Yakub Çelebi', 'Sırp Kralı Lazar önderliğinde Sırp, Bosna, Arnavut ve Eflak kuvvetleri'],
      cause: 'Ploşnik yenilgisinin cesaretlendirdiği Balkan devletlerinin Osmanlı’yı Balkanlardan atma girişimi.',
      detail: 'Kosova ovasında yapılan savaşta Osmanlı ordusu, merkez ve kanat düzeniyle Haçlı ağır süvarisini kırdı. Savaşın kazanılmasının ardından padişah savaş alanını gezerken bir Sırp askeri tarafından şehit edildi. Ordunun dağılmaması için yerine geçen Şehzade Bayezid derhal biat aldı — hızlı hareketi nedeniyle "Yıldırım" lakabı bu dönemde belirginleşti.',
      result: 'Haçlı ordusu bozguna uğradı, Sırbistan Osmanlı’ya bağlandı. I. Murad şehit oldu, yerine I. Bayezid geçti.',
      significance: 'Balkanlarda Osmanlı hâkimiyetinin kesinleştiği savaştır. Bundan sonra Balkan devletleri tek tek değil, ancak büyük Avrupa ittifaklarıyla karşı koyabildi (bkz. 1396 Niğbolu).',
      osym: 'Savaş meydanında şehit düşen İLK ve TEK Osmanlı padişahı I. Murad’dır. I. Kosova (1389) ile II. Kosova (1448, II. Murad) karıştırılmamalıdır.',
      figures: ['lazar', 'yildirim-bayezid-sehzade'],
      mapFocus: 'kosova',
      atlas: { year: 1389, eventId: 'birinci-kosova-savasi', focus: 'kosova', label: 'Kosova ovasını atlasta aç' },
    },
    {
      id: 'frenkyazisi', title: 'Frenkyazısı (Konya) Savaşı', date: tarih(1387),
      summary: 'Karamanoğulları ile yapılan ilk büyük karşılaşma Osmanlı üstünlüğüyle bitti.',
      sides: ['I. Murad’ın kuvvetleri', 'Karamanoğulları'],
      cause: 'Hamitoğulları topraklarının satın alınmasıyla iki gücün komşu olması ve Karamanoğulları’nın bu genişlemeye tepkisi.',
      result: 'Karamanoğulları yenildi; ancak beylik ortadan kaldırılmadı, affedilerek yerinde bırakıldı.',
      significance: 'Osmanlı’nın Anadolu’daki Türk beylikleriyle ilişkisindeki ölçülü tutumu gösterir: kazanmak ama yok etmemek.',
      osym: 'Anadolu’da Türk beylikleriyle ilk büyük mücadele olarak sorulabilir.',
      mapFocus: 'konya',
    },
  ],

  conquests: [
    { id: 'edirne-fetih', title: 'Edirne', date: tartismaliTarih(1363, '1361/1363', 'Fetih yılı kaynaklarda ayrışır; ders kitaplarında çoğunlukla 1363 verilir.'), from: 'Bizans', summary: 'Balkanlara açılan yolların düğüm noktası alındı.', effect: 'Başkent buraya taşındı; devletin yönü Avrupa’ya döndü.', osym: 'Üçüncü Osmanlı başkenti.', mapFocus: 'edirne' },
    { id: 'filibe-fetih', title: 'Filibe', date: tartismaliTarih(1364, '1360’lar', 'Meriç vadisindeki fetihler birbirini izler; yıl kaynaklara göre değişir.'), from: 'Bulgar Krallığı', summary: 'Meriç vadisindeki en önemli merkez alındı.', effect: 'Sofya yönündeki ilerlemenin üssü oldu.', mapFocus: 'filibe' },
    { id: 'sofya-fetih', title: 'Sofya', date: tarih(1385), from: 'Bulgar Krallığı', summary: 'Balkanların iç kesimlerine açılan şehir alındı.', effect: 'Bulgar Krallığı Osmanlı’ya bağlandı.', mapFocus: 'sofya' },
    { id: 'nis-fetih', title: 'Niş', date: tarih(1386), from: 'Sırp Despotluğu', summary: 'Sırbistan yolundaki kilit şehir alındı.', effect: 'Sırbistan ile doğrudan temas kuruldu; Kosova’ya giden süreç başladı.', mapFocus: 'nis' },
    { id: 'selanik-fetih', title: 'Selanik', date: tartismaliTarih(1387, '1387', 'Şehir sonraki yıllarda el değiştirmiştir.'), from: 'Bizans', summary: 'Ege’nin kuzeyindeki en büyük liman şehri alındı.', effect: 'Rumeli’deki Osmanlı varlığı denize ulaştı.', mapFocus: 'selanik' },
    { id: 'kutahya-cehiz', title: 'Kütahya, Tavşanlı, Simav, Emet', date: tarih(1381), from: 'Germiyanoğulları (çeyiz)', summary: 'Savaşsız, evlilik yoluyla alındı.', effect: 'Anadolu’da Osmanlı toprakları genişledi, beyliklerle savaş riski azaldı.', osym: 'Çeyiz yoluyla toprak kazanımı.', mapFocus: 'kutahya' },
    { id: 'aksehir-satin', title: 'Akşehir, Beyşehir, Seydişehir, Yalvaç', date: tartismaliTarih(1381, '1374–1381', 'Satın alma birden çok aşamada gerçekleşmiştir; kaynaklar farklı yıl verir.'), from: 'Hamitoğulları (satın alma)', summary: 'Para karşılığında satın alındı.', effect: 'Karamanoğulları ile komşu olundu.', osym: 'Satın alma yoluyla toprak kazanımı.', mapFocus: 'aksehir' },
  ],

  reforms: [
    { id: 'pencik', title: 'Pençik sistemi ve Yeniçeri Ocağı', date: tartismaliTarih(1363, '1360’lar'), field: 'ordu', summary: 'Savaş esirlerinin beşte birinin devlete ayrılmasıyla padişaha bağlı sürekli ordu kuruldu.', why: 'Beylere ve toprağa bağlı kuvvetler, merkezî bir siyaset için yeterli değildi.', osym: 'Kapıkulu ve Yeniçeri = I. Murad. Devşirme daha sonraki bir aşamadır.' },
    { id: 'kazasker', title: 'Kazaskerliğin kurulması', field: 'hukuk', summary: 'Adlî ve ilmî işlerin başına kazasker (kadıasker) getirildi; ilk kazasker Çandarlı Kara Halil’dir.', why: 'Genişleyen ülkede kadı atamaları ve davaların denetimi tek elden yürütülmeliydi.', osym: 'İlk kazasker: Çandarlı Kara Halil — I. Murad dönemi.' },
    { id: 'beylerbeylik', title: 'Rumeli Beylerbeyliği', field: 'yonetim', summary: 'Sancakların üstünde bir üst yönetim kademesi oluşturuldu; ilk beylerbeyi Lala Şahin Paşa’dır.', why: 'Fetih hızı, doğrudan merkeze bağlı sancak sayısını yönetilemez hâle getirmişti.', osym: 'İlk beylerbeylik Rumeli’dedir.' },
    { id: 'timar', title: 'Tımar sisteminin yerleşmesi', field: 'maliye', summary: 'Fethedilen toprakların geliri, asker yetiştirme karşılığında dirlik olarak dağıtıldı.', why: 'Hazineden maaş ödemeden büyük bir eyalet ordusu beslemenin yolu buydu.', osym: 'Tımar hem askerî hem malî sistemdir; toprak mülkiyeti devlete aittir.' },
    { id: 'ulke-anlayisi', title: '“Ülke hükümdar ve oğullarınındır” anlayışı', field: 'yonetim', summary: 'Ülkenin hanedanın ortak malı sayılması anlayışından uzaklaşıldı.', why: 'Ortak mal anlayışı, her ölümde ülkenin paylaşılması ve taht kavgası riski taşıyordu.', osym: 'Veraset sistemindeki değişimin ilk aşaması olarak sorulur.' },
  ],

  importantFigures: [
    { id: 'murad-hudavendigar', name: 'I. Murad', role: 'Üçüncü Osmanlı hükümdarı', side: 'osmanli', summary: 'Devleti Balkanlarda kalıcı kılan ve merkezî ordu ile teşkilatı kuran padişah.' },
    { id: 'haci-ilbey-murad', name: 'Hacı İlbey', role: 'Akıncı komutanı', side: 'osmanli', summary: 'Klasik anlatıda Sırpsındığı gece baskınının; akademik anlatıda 1371 Çirmen/Meriç zaferinin komutanı olarak anılır.' },
    { id: 'lala-sahin-pasa', name: 'Lala Şahin Paşa', role: 'İlk Rumeli beylerbeyi', side: 'osmanli', summary: 'Rumeli fetihlerini ve yeni kurulan taşra düzenini yürüttü.' },
    { id: 'candarli-kara-halil-murad', name: 'Çandarlı Kara Halil Hayreddin Paşa', role: 'İlk kazasker, sonra vezir', side: 'osmanli', summary: 'Pençik sistemi ve adlî teşkilatın kurulmasında belirleyici oldu.' },
    { id: 'evrenos-bey', name: 'Evrenos Bey', role: 'Uç beyi', side: 'osmanli', summary: 'Makedonya ve Batı Rumeli akınlarını yürüttü.' },
    { id: 'yildirim-bayezid-sehzade', name: 'Şehzade Bayezid', role: 'Veliaht, sonraki padişah', side: 'osmanli', summary: 'Kosova’da sağ kanadı yönetti; babasının şehit edilmesinin ardından tahta geçti.' },
    { id: 'lazar', name: 'Sırp Kralı Lazar', role: 'Sırp hükümdarı', side: 'rakip', summary: 'I. Kosova’da Haçlı ittifakının önderiydi; savaşta esir alındı.' },
    { id: 'sisman', name: 'Bulgar Kralı Şişman', role: 'Bulgar hükümdarı', side: 'rakip', summary: 'Çirmen sonrası Osmanlı’ya bağlandı, vergi ve asker yükümlülüğü kabul etti.' },
  ],

  osymHighlights: [
    'Savaş meydanında şehit düşen İLK ve TEK Osmanlı padişahı: I. Murad (I. Kosova, 1389).',
    'Üçüncü başkent: EDİRNE. (Söğüt/Yenişehir → Bursa → Edirne → İstanbul)',
    'Kapıkulu ordusu ve Yeniçeri Ocağı: I. Murad. Yaya ve müsellem: Orhan Gazi. Bu iki bilgi en sık karıştırılan çifttir.',
    'İlk kazasker: Çandarlı Kara Halil. İlk beylerbeylik: RUMELİ. İlk beylerbeyi: Lala Şahin Paşa.',
    'MEB/klasik sınav kabulü: ilk Haçlı seferi → Sırpsındığı (1363/1364), komutan → Hacı İlbey. Akademik olarak olayın 1371 Çirmen’den ayrılığı tartışmalıdır.',
    'Çirmen Savaşı (1371) → Makedonya yolu açıldı, Bulgar Krallığı Osmanlı’ya bağlandı.',
    'I. Kosova (1389) I. Murad, II. Kosova (1448) II. Murad dönemidir — yıl ve padişah birlikte ezberlenmelidir.',
    'Anadolu’da toprak SAVAŞSIZ kazanıldı: Germiyan (çeyiz), Hamitoğulları (satın alma).',
    'Tımar sistemi bu dönemde yerleşti: toprağın mülkiyeti devletin, geliri askerindir.',
    '“Ülke hükümdar ve oğullarınındır” anlayışına geçilmesi, veraset sistemindeki değişimin ilk adımıdır.',
  ],

  mapState: {
    id: 'murad-1389',
    startMapId: 'orhan-1362',
    startCaption: 'I. Murad tahta geçtiğinde Osmanlı, Marmara’nın güneyine yerleşmiş ve Gelibolu çevresinde henüz dar bir Rumeli köprübaşı kurmuştu.',
    caption: 'Dönem sonunda Rumeli, Osmanlı’nın ağırlık merkezidir; Sırbistan ve Bulgaristan doğrudan yönetilmez, bağlı devlet olarak tutulur.',
    highlight: ['edirne', 'sofya', 'nis', 'kosova', 'kutahya'],
  },

  portrait: {
    kind: 'image',
    src: '/lesson-assets/tarih/osmanli-padisahlari/birinci-murad.jpg',
    alt: 'I. Murad’ın dönem özelliklerinden esinlenen eğitim amaçlı temsili illüstrasyon; tarihî portre değildir.',
    tugra: 'م',
    isim: 'Murad',
  },

  transitionOut: {
    transitionType: 'kesinti',
    year: '1389',
    headline: 'Hükümdar Savaş Alanında',
    body: 'I. Kosova kazanıldı; fakat zaferin hemen ardından I. Murad savaş alanında şehit edildi. Ordunun dağılmaması için Şehzade Bayezid derhal biat aldı ve tahta geçti. Hızlı hareket etme alışkanlığı ona "Yıldırım" adını kazandıracak, aynı hız on üç yıl sonra Ankara Ovası’nda devleti Fetret Devri’ne sürükleyecekti.',
    specialSequence: 'sehadet',
  },

  /**
   * Seslendirme metni ortak kayıt defterinde tutulur
   * (anlatimlar.js). Sebebi: metin ekrandaki bilgiyi tekrar
   * etmemek zorunda ve bu kural tek bir yerden denetleniyor
   * (scripts/padisah-anlatim-denetle.mjs).
   */
  narration: ANLATIMLAR['birinci-murad'],

  sources: [
    { label: 'MEB Tarih 10 — Beylikten Devlete Osmanlı', note: 'Teşkilat ve Balkan siyaseti çerçevesi.', url: 'https://tymm.meb.gov.tr/tarih-dersi/unite/39' },
    { label: 'YKS Tarih konu-kazanım kapsamı — Osmanlı Kuruluş Dönemi', note: 'Sık karıştırılan çiftlerin (Kapıkulu/yaya-müsellem, I./II. Kosova) seçimi.' },
    { label: 'TDV İslâm Ansiklopedisi — Murad I', note: 'Sırpsındığı/Çirmen ayrımı, Balkan seferleri ve kronoloji için akademik kontrol.', url: 'https://islamansiklopedisi.org.tr/murad-i' },
  ],
}

export default birinciMurad
