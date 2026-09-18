import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.1 Bir Kahraman Doğuyor · 1. ders ★ Gold Standard
 * Kazanım : İTA.8.1.1
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (özet — tam metin resmiProgram.js'te)
 *   a) Fransız İhtilali, sömürgecilik, Tanzimat ve Meşrutiyet → "kısaca değinilir"
 *   b) Osmanlı ve Avrupa devletlerinin 20. yüzyıl başındaki durumu → "harita üzerinde gösterilir"
 *   c) Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık → "kısaca değinilir"
 *
 * KAPSAM KARARI
 * "Kısaca değinilir" sınırı nedeniyle fermanların tam metnine, antlaşma
 * maddelerine ve Avrupa tarihinin ayrıntısına girilmedi. Her gelişme,
 * Osmanlı'nın 20. yüzyıl başındaki durumunu açıklayan bir SEBEP olarak
 * kullanıldı. Harita açıklaması (b) için sınır iddiası taşımayan şematik
 * bir atlas yazıldı; konumlar yaklaşık yerleşimdir.
 *
 * DOĞRULAMA
 * Tarihler ve adlar en az iki güvenilir kaynakla karşılaştırıldı; kayıt
 * LGS_KAYNAK_KAYDI.md "İnkılap doğrulama günlüğü" bölümündedir. Tanzimat
 * ve Kanun-ı Esasi alıntıları birebir değil, sadeleştirmedir ve ders
 * içinde öyle etiketlenmiştir.
 */

const SLUG = 'lgs-tarih-yirminci-yuzyil-basinda-osmanli'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Bir Kahraman Doğuyor',
  order: 1,
  title: '20. Yüzyıl Başında Osmanlı Devleti ve Fikir Akımları',
  subtitle:
    'Mustafa Kemal’in doğduğu dünyayı tanımadan Millî Mücadele’yi anlamak zordur: Avrupa hızla değişiyor, Osmanlı Devleti ise ayakta kalmanın yolunu arıyordu.',
  minutes: 48,
  goldStandard: true,
  kazanimlar: ['İTA.8.1.1'],
  kapsamNotu:
    'Program bu kazanımda Fransız İhtilali, sömürgecilik, Tanzimat–Meşrutiyet ve fikir akımlarına kısaca değinilmesini istediği için ders fermanların tam metnine ve antlaşma maddelerine girmez; her gelişmeyi Osmanlı’nın 20. yüzyıl başındaki durumunu açıklayan bir sebep olarak kullanır. Haritadaki konumlar şematiktir; sınır ya da ölçek bilgisi taşımaz.',
  prerequisites: [
    {
      topic: 'Osmanlı Devleti’nin çok uluslu yapısı (7. sınıf Sosyal Bilgiler)',
      why: 'Osmanlı’nın farklı din ve milletlerden oluşan bir devlet olduğunu bilmek, milliyetçiliğin onun için neden tehlikeli olduğunu anlamayı sağlar.',
    },
    {
      topic: 'Yüzyıl hesabı ve kronoloji okuma',
      why: '“Yirminci yüzyılın başı” ifadesinin 1900’lü yılların ilk yıllarına karşılık geldiğini bilmek, olayları doğru sıraya koymak için gerekir.',
    },
  ],
  outcomes: [
    'Fransız İhtilali’nin yaydığı fikirlerin çok uluslu Osmanlı Devleti’ni neden sarstığını açıklayabileceksin.',
    'Sanayi İnkılabı ile sömürgecilik arasındaki bağı kurup Osmanlı’nın toprak ve ekonomi kayıplarıyla ilişkilendirebileceksin.',
    'Tanzimat, Islahat ve Meşrutiyet adımlarını amaçlarıyla birlikte kronolojik sıraya koyabileceksin.',
    '20. yüzyıl başında Osmanlı Devleti’nin ve Avrupa devletlerinin durumunu şematik bir harita üzerinde yorumlayabileceksin.',
    'Osmanlıcılık, İslamcılık, Türkçülük ve Batıcılığı önerdikleri birleştirici bağa göre ayırt edebileceksin.',
    'Birincil ve ikincil kaynağı ayırıp bir belgeden metnin ötesine geçmeyen bir çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Değişen bir dünyada büyük ama yorgun bir devlet',
    lead:
      'Yıl 1900. Avrupa’da fabrikalar gece gündüz çalışıyor, büyük devletler dünyanın dört bir yanında sömürge arıyor. Osmanlı Devleti ise hem topraklarını hem de içindeki birliği korumanın yolunu arıyor.',
    body:
      '20. yüzyılın başında Osmanlı Devleti hâlâ üç kıtada toprağı olan büyük bir devletti. Anadolu’yu, Balkanlar’ın bir bölümünü (Rumeli), Irak ve Suriye topraklarını, Arap Yarımadası’nın bir kısmını ve Kuzey Afrika’da Trablusgarp’ı yönetiyordu. Ama bu geniş görüntü yanıltıcıydı. 19. yüzyıl boyunca Cezayir, Tunus ve Mısır gibi bölgeler ya elden çıkmış ya da fiilen başka devletlerin denetimine girmişti. Balkanlar’da Osmanlı’dan ayrılan topluluklar yeni devletler kurmuştu. Devlet dış borçlarını ödeyemediği için bazı vergi gelirlerini yabancı alacaklıların denetimindeki bir kuruma bırakmak zorunda kalmıştı.\n\n' +
      'Bu tabloyu tek bir sebeple açıklayamazsın. Bir yanda Avrupa’da yaşanan büyük dönüşümler vardı: **Fransız İhtilali**’nin yaydığı fikirler ve **Sanayi İnkılabı**’nın doğurduğu sömürge yarışı. Öte yanda Osmanlı’nın kendi iç sorunları vardı: kaybedilen savaşlar, boşalan hazine ve farklı din ve milletlerden oluşan halkı bir arada tutmanın giderek zorlaşması. Osmanlı yöneticileri bu sorunlara **Tanzimat**, **Islahat** ve **Meşrutiyet** adımlarıyla cevap vermeye çalıştı. Aydınlar ise “Devlet nasıl kurtulur?” sorusuna farklı cevaplar veren **fikir akımları** geliştirdi.\n\n' +
      'Ünitenin adı “Bir Kahraman Doğuyor”. Bu ders o kahramanın doğup büyüdüğü dünyanın fotoğrafını çeker. Mustafa Kemal 1881’de Selanik’te doğdu; yani bu dersin anlattığı gelişmelerin tam ortasında büyüdü. Sonraki derslerde onun kişiliğini, fikirlerini ve kararlarını anlamaya çalışırken bu fotoğrafa sık sık döneceksin.',
  },
  concepts: [
    {
      term: 'Milliyetçilik',
      body:
        'Aynı dili, tarihi ve kültürü paylaştığına inanan insanların kendi devletlerini kurma ya da o devlete bağlanma fikri. Fransız İhtilali ile yayıldı. Kendini tek bir millet olarak gören topluluklar için birleştirici, çok uluslu imparatorluklar için parçalayıcı bir etki yaptı.',
    },
    {
      term: 'Sömürgecilik',
      body:
        'Güçlü bir devletin başka bir bölgenin ham maddesini, pazarını ve insan gücünü kendi çıkarı için denetim altına alması. Sanayi İnkılabı’ndan sonra fabrikaların ham madde ve pazar ihtiyacı büyüdü; bu ihtiyaç sömürge yarışını hızlandırdı.',
    },
    {
      term: 'Meşrutiyet',
      body:
        'Hükümdarın yanında seçilmiş temsilcilerden oluşan bir meclisin bulunduğu, hükümdarın yetkilerinin anayasa ve meclisle sınırlandığı yönetim biçimi. Hükümdar yerinde kalır; bu yüzden egemenlik henüz tamamen millete ait değildir.',
    },
    {
      term: 'Anayasa (Kanun-ı Esasi)',
      body:
        'Devletin yönetim biçimini, organların yetkilerini ve temel hakları belirleyen en üst hukuk metni. Osmanlı’nın ilk anayasası 1876’da ilan edilen Kanun-ı Esasi’dir.',
    },
    {
      term: 'Düyun-u Umumiye',
      body:
        '1881’de kurulan, Osmanlı’nın bazı vergi gelirlerini doğrudan toplayıp borçlara karşılık yabancı alacaklılara aktaran kurum. Bir devletin kendi vergisini başkasının denetimindeki bir kurumun toplaması, ekonomik bağımsızlığın zedelendiğini gösterir.',
    },
    {
      term: 'Fikir akımı',
      body:
        'Bir toplumun karşılaştığı büyük bir soruna çözüm olarak aydınların geliştirdiği düşünce sistemi. Osmanlı’nın son döneminde bütün fikir akımlarının ortak sorusu şuydu: Devlet nasıl kurtarılır?',
    },
  ],
  why: {
    question: 'Milliyetçilik neden Osmanlı için Avrupa’daki pek çok devletten daha tehlikeliydi?',
    body:
      'Çünkü milliyetçilik “her millet kendi devletini kurmalı” fikrini taşır. Kendini tek bir millet olarak gören topluluklarda bu fikir insanları bir araya getirdi; örneğin parçalı hâldeki Alman ve İtalyan toplulukları 19. yüzyılın ikinci yarısında bu fikirle siyasi birliklerini kurdu. Osmanlı Devleti ise Türk, Arap, Rum, Ermeni, Bulgar, Sırp, Arnavut gibi pek çok farklı topluluğu bir arada yöneten çok uluslu bir devletti. Aynı fikir burada birleştirmek yerine ayrıştırdı: her topluluk kendi devletini kurmak isteyebilirdi. Üstelik Avrupa devletleri bu ayrılık hareketlerini kendi çıkarları için destekledi.\n\n' +
      'Bu yüzden milliyetçilik Osmanlı için bir fikirden çok, toprak kaybı tehlikesi demekti. Tanzimat’tan fikir akımlarına kadar bu dersteki hemen her gelişmeyi bu tehlikeye verilmiş bir cevap olarak okuyabilirsin.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: 1789’dan 1912’ye',
    lead:
      'Tarihleri tek tek ezberlemek yerine her olayın bir öncekine nasıl cevap verdiğine bak. Kronoloji bir liste değil, birbirine bağlı bir hikâyedir.',
    intro:
      'Yukarıdan aşağıya sebepten sonuca doğru oku: Avrupa’daki gelişmeler baskı yaratıyor, Osmanlı reformla cevap veriyor, reform sorunu tam çözemeyince yeni bir adım geliyor.',
    items: [
      {
        title: '1789 · Fransız İhtilali',
        body: 'Eşitlik, özgürlük, adalet ve milliyetçilik fikirleri önce Avrupa’ya, oradan çok uluslu imparatorlukların içine yayıldı.',
      },
      {
        title: '18. yüzyılın sonları · Sanayi İnkılabı',
        body: 'Makineyle seri üretim İngiltere’de başladı. Fabrikaların ham madde ve pazar ihtiyacı büyük devletleri sömürge aramaya yöneltti.',
      },
      {
        title: '1830 · Yunanistan bağımsız, Cezayir işgal edildi',
        body: 'Aynı yıl iki farklı kayıp: Rumlar milliyetçilikle bağımsız devlet kurdu; Fransa ise Cezayir’i işgal etti. Milliyetçilik ve sömürgecilik yan yana iş başındaydı.',
      },
      {
        title: '1838 · Balta Limanı Antlaşması',
        body: 'İngiltere ile imzalandı. Osmanlı pazarı yabancı tüccarın rekabetine açıldı; yerli üretici korumasız kaldı.',
      },
      {
        title: '1839 · Tanzimat Fermanı',
        body: 'Herkese can, mal ve namus güvencesi verildi; kimse yargılanmadan cezalandırılmayacak, vergi ve askerlik düzene bağlanacaktı.',
      },
      {
        title: '1854 · İlk dış borç',
        body: 'Kırım Savaşı sırasında alındı. Borçlanma bir kez başlayınca sonraki yıllarda giderek büyüdü.',
      },
      {
        title: '1856 · Islahat Fermanı',
        body: 'Gayrimüslimlere Müslümanlarla eşit haklar tanındı. Amaç hem ayrılıkçılığı durdurmak hem de Avrupa devletlerinin iç işlere karışmasını önlemekti.',
      },
      {
        title: '1876 · Kanun-ı Esasi ve I. Meşrutiyet',
        body: 'İlk Osmanlı anayasası ilan edildi. 1877’de seçilmiş mebuslardan oluşan Meclis-i Mebusan ile padişahın atadığı Heyet-i Ayan toplandı.',
      },
      {
        title: '1878 · Meclis kapatıldı; Balkanlar’da yeni devletler',
        body: '93 Harbi’ni gerekçe gösteren II. Abdülhamid meclisi kapattı. Aynı yıl Berlin Antlaşması ile Sırbistan, Karadağ ve Romanya bağımsız oldu; Kıbrıs’ın yönetimi İngiltere’ye bırakıldı.',
      },
      {
        title: '1881–1882 · Düyun-u Umumiye; Tunus ve Mısır',
        body: 'Borçlar ödenemeyince alacaklılar adına vergi toplayan Düyun-u Umumiye kuruldu. 1881’de Fransa Tunus’u denetimine aldı, 1882’de İngiltere Mısır’ı işgal etti.',
      },
      {
        title: '1908 · II. Meşrutiyet',
        body: 'Kanun-ı Esasi yeniden yürürlüğe girdi, meclis yeniden toplandı. Aynı yıl Bulgaristan bağımsızlığını ilan etti, Avusturya-Macaristan Bosna-Hersek’i ilhak etti, Girit Yunanistan’a bağlandığını ilan etti.',
      },
      {
        title: '1911–1912 · Trablusgarp Savaşı',
        body: 'İtalya saldırdı. 1912’deki Uşi Antlaşması ile Osmanlı, Kuzey Afrika’da doğrudan yönettiği son toprağı bıraktı. Hemen ardından Balkan Savaşları başladı.',
      },
    ],
    takeaway:
      'Dikkat et: Osmanlı’nın reform adımları çoğu kez bir dış baskının ya da bir kaybın ardından gelir. Reformlar kendiliğinden değil, devleti ayakta tutma çabasıyla yapılmıştır.',
    body:
      'Kronolojiyi iki renkte okumayı dene. Birinci renk **kayıplar**: 1830, 1878, 1881–1882, 1908 ve 1912. İkinci renk **cevaplar**: 1839, 1856, 1876 ve 1908. İki çizgi iç içe ilerler; her kayıp yeni bir cevap arayışını, yetersiz kalan her cevap da yeni bir kaybın zeminini hazırlar.\n\n' +
      '1908 yılının iki çizgide birden bulunması tesadüf değildir. II. Meşrutiyet büyük umutlarla ilan edildi; ama aynı yılın sonbaharında üç bölge birden elden çıktı. Bu durum, yönetim biçimini değiştirmenin tek başına devleti kurtarmaya yetmediğini gösterir. 20. yüzyılın başındaki Osmanlı’yı anlamak için bu gerilimi görmek gerekir: umut ile kayıp aynı anda yaşanıyordu.',
  },
  map: {
    title: 'Şematik atlas: 20. yüzyıl başında Osmanlı ve Avrupa',
    intro:
      'Katmanları aç ve kapat. Büyük güçlerin merkezlerine, Osmanlı’dan kopan bölgelere ve Osmanlı’nın hâlâ elinde tuttuğu yerlere ayrı ayrı bak. Bir noktaya dokununca o yerle ilgili açıklama açılır.',
    map_label: 'Şematik gösterim · sınırlar ve uzaklıklar ölçekli değildir',
    layers: [
      { id: 'guc', label: 'Büyük güçler', description: 'İngiltere, Fransa, Almanya, Avusturya-Macaristan, Rusya ve İtalya’nın merkezleri.', active: true },
      { id: 'kayip', label: 'Osmanlı’dan kopan bölgeler', description: '1830–1912 arasında Osmanlı’dan ayrılan ya da başka bir devletin denetimine giren bölgeler.', active: true },
      { id: 'osmanli', label: 'Osmanlı’nın elinde kalanlar', description: '20. yüzyıl başında Osmanlı yönetimindeki başlıca merkezler.', active: false },
    ],
    regions: [
      { label: 'AVRUPA', x: 26, y: 8, tone: 'land' },
      { label: 'AKDENİZ', x: 30, y: 66, tone: 'water' },
      { label: 'KARADENİZ', x: 70, y: 36, tone: 'water' },
      { label: 'KUZEY AFRİKA', x: 22, y: 94, tone: 'land' },
      { label: 'ANADOLU', x: 72, y: 58, tone: 'land' },
    ],
    locations: [
      { id: 'londra', label: 'Londra · İngiltere', x: 10, y: 18, layer: 'guc', tone: 'accent', detail: 'Sanayi İnkılabı’nın başladığı ülke. 20. yüzyıl başında dünyanın en geniş sömürge imparatorluğuna sahipti. Hindistan yolunun güvenliği için Doğu Akdeniz’de ve Mısır’da söz sahibi olmak istedi.' },
      { id: 'paris', label: 'Paris · Fransa', x: 14, y: 36, layer: 'guc', tone: 'accent', detail: 'Fransız İhtilali’nin merkezi. Kuzey Afrika’da Cezayir (1830) ve Tunus (1881) üzerinden geniş bir sömürge alanı kurdu.' },
      { id: 'berlin', label: 'Berlin · Almanya', x: 34, y: 18, layer: 'guc', tone: 'accent', detail: '1871’de siyasi birliğini kurdu. Sömürge yarışına geç katıldığı için yeni pazar ve ham madde arıyordu; Osmanlı ile ilişkisini Bağdat Demiryolu gibi yatırımlarla geliştirdi.' },
      { id: 'viyana', label: 'Viyana · Avusturya-Macaristan', x: 38, y: 32, layer: 'guc', tone: 'accent', detail: 'Pek çok milleti bir arada yöneten bir imparatorluktu; bu yüzden milliyetçilikten o da çekiniyordu. Balkanlar’da Rusya ile rekabet etti ve 1908’de Bosna-Hersek’i ilhak etti.' },
      { id: 'petersburg', label: 'St. Petersburg · Rusya', x: 60, y: 8, layer: 'guc', tone: 'accent', detail: 'Rusya sıcak denizlere ve Boğazlar’a ulaşmak istiyordu. Balkanlar’daki Slav topluluklarını destekleyerek Osmanlı’ya karşı milliyetçiliği kullandı.' },
      { id: 'roma', label: 'Roma · İtalya', x: 30, y: 50, layer: 'guc', tone: 'accent', detail: 'Siyasi birliğini 19. yüzyılın ikinci yarısında kurdu ve sömürge yarışına geç katıldı. Gözünü Osmanlı’nın Kuzey Afrika’daki toprağı Trablusgarp’a dikti.' },
      { id: 'yunanistan', label: 'Yunanistan · 1830', x: 50, y: 62, layer: 'kayip', tone: 'danger', detail: 'Fransız İhtilali’nin yaydığı milliyetçilik fikriyle ayaklanan Rumlar 1830’da bağımsız Yunanistan’ı kurdu. Osmanlı’dan ayrılarak bağımsız devlet kuran ilk topluluk oldu.' },
      { id: 'bosna', label: 'Bosna-Hersek · 1908', x: 42, y: 44, layer: 'kayip', tone: 'danger', detail: '1878’den beri Avusturya-Macaristan yönetimindeydi; 1908’de ilhak edildi. Büyük devletlerin Balkanlar’da da çıkar peşinde olduğunu gösterir.' },
      { id: 'bulgaristan', label: 'Bulgaristan · 1908', x: 56, y: 40, layer: 'kayip', tone: 'danger', detail: '1878’de Osmanlı’ya bağlı bir prenslik olarak kuruldu. II. Meşrutiyet’in ilanından kısa süre sonra, 1908’de bağımsızlığını ilan etti.' },
      { id: 'girit', label: 'Girit · 1908', x: 52, y: 78, layer: 'kayip', tone: 'danger', detail: '1908’de Yunanistan’a bağlandığını ilan etti. Adadaki Rum topluluğunun milliyetçi hareketi Yunanistan tarafından destekleniyordu.' },
      { id: 'kibris', label: 'Kıbrıs · 1878', x: 64, y: 72, layer: 'kayip', tone: 'danger', detail: 'Yönetimi İngiltere’ye bırakıldı. İngiltere karşılığında Rusya’ya karşı Osmanlı’yı destekleme sözü verdi. Ada, Süveyş Kanalı’na giden yolun üzerindeydi.' },
      { id: 'cezayir', label: 'Cezayir · 1830', x: 6, y: 86, layer: 'kayip', tone: 'danger', detail: 'Fransa tarafından işgal edildi. Kuzey Afrika’da sömürgeciliğin Osmanlı topraklarına uzanan ilk büyük adımıdır.' },
      { id: 'tunus', label: 'Tunus · 1881', x: 24, y: 76, layer: 'kayip', tone: 'danger', detail: 'Fransa asker çıkardı ve Tunus’u denetimine aldı.' },
      { id: 'trablusgarp', label: 'Trablusgarp · 1912', x: 36, y: 86, layer: 'kayip', tone: 'danger', detail: 'İtalya 1911’de saldırdı; 1912’de imzalanan Uşi Antlaşması ile Osmanlı burayı bıraktı. Mustafa Kemal bu savaşta Tobruk ve Derne çevresinde görev yaptı.' },
      { id: 'misir', label: 'Mısır · 1882', x: 60, y: 88, layer: 'kayip', tone: 'danger', detail: 'İngiltere tarafından işgal edildi. Kâğıt üzerinde bir süre daha Osmanlı’ya bağlı sayılsa da fiilen İngiliz denetimine girdi. Süveyş Kanalı, İngiltere’nin Hindistan yolu için hayati önemdeydi.' },
      { id: 'istanbul', label: 'İstanbul · başkent', x: 60, y: 48, layer: 'osmanli', tone: 'brand', detail: 'Osmanlı’nın başkenti ve Boğazlar’ın kilidi. Büyük devletlerin hepsi Boğazlar’ın kimin denetiminde olacağıyla yakından ilgileniyordu.' },
      { id: 'selanik', label: 'Selanik', x: 50, y: 52, layer: 'osmanli', tone: 'brand', detail: 'Makedonya’nın en önemli liman şehri; Türk, Rum, Bulgar ve Yahudi toplulukların bir arada yaşadığı bir ticaret merkeziydi. Mustafa Kemal 1881’de burada doğdu.' },
      { id: 'sam', label: 'Şam · Suriye', x: 74, y: 76, layer: 'osmanli', tone: 'brand', detail: 'Suriye bölgesinin merkezi. Arap topraklarındaki Osmanlı yönetiminin önemli şehirlerinden biriydi.' },
      { id: 'bagdat', label: 'Bağdat · Irak', x: 82, y: 62, layer: 'osmanli', tone: 'brand', detail: 'Irak bölgesinin merkezi. Almanya’nın desteğiyle yapılan Bağdat Demiryolu, bu şehri Anadolu üzerinden İstanbul’a bağlamayı hedefliyordu.' },
      { id: 'hicaz', label: 'Hicaz', x: 78, y: 92, layer: 'osmanli', tone: 'brand', detail: 'Mekke ve Medine’nin bulunduğu bölge. Osmanlı padişahları aynı zamanda halife olduğu için Hicaz, devletin İslam dünyasındaki saygınlığı açısından büyük önem taşıyordu.' },
    ],
    routes: [
      { from: 'londra', to: 'misir', label: 'Hindistan yoluna uzanan İngiliz çıkarı', layer: 'guc', tone: 'accent' },
      { from: 'petersburg', to: 'istanbul', label: 'Boğazlar’a ulaşma hedefi', layer: 'osmanli', tone: 'danger' },
      { from: 'berlin', to: 'bagdat', label: 'Bağdat Demiryolu', layer: 'osmanli', tone: 'aqua' },
    ],
    insight:
      'Haritadan çıkan asıl sonuç şu: Osmanlı toprakları iki farklı yoldan aşınıyordu. Balkanlar’daki kayıpların çoğunda yerel toplulukların bağımsızlık isteği (milliyetçilik) ağır bastı. Kuzey Afrika’da ve Doğu Akdeniz’de ise büyük devletlerin işgali ve denetimi (sömürgecilik) ağır bastı. Aynı sonucu farklı sebepler doğurdu.',
    source_note:
      'Konumlar ve olay yılları; MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı (2018) İTA.8.1.1 açıklaması, TDV İslâm Ansiklopedisi “Osmanlılar”, “Osmanlıcılık” ve “Trablusgarp Savaşı” maddeleri ile Türk Tarih Kurumu yayınları esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; sınır, uzaklık ya da ölçek bilgisi taşımaz.',
  },
  dataTable: {
    title: 'Toprak kayıpları: ne zaman, nerede, hangi sebep ağır bastı?',
    columns: ['Yıl', 'Bölge', 'Ne oldu?', 'Ağır basan sebep'],
    rows: [
      ['1830', 'Yunanistan', 'Bağımsız devlet kuruldu', 'Milliyetçilik'],
      ['1830', 'Cezayir', 'Fransa işgal etti', 'Sömürgecilik'],
      ['1878', 'Sırbistan, Karadağ, Romanya', 'Berlin Antlaşması ile bağımsız oldular', 'Milliyetçilik ve büyük devletlerin dengesi'],
      ['1878', 'Kıbrıs', 'Yönetimi İngiltere’ye bırakıldı', 'Büyük devlet çıkarı (Doğu Akdeniz ve Hindistan yolu)'],
      ['1881', 'Tunus', 'Fransa denetimine aldı', 'Sömürgecilik'],
      ['1882', 'Mısır', 'İngiltere işgal etti', 'Sömürgecilik (Süveyş Kanalı)'],
      ['1908', 'Bulgaristan', 'Bağımsızlığını ilan etti', 'Milliyetçilik'],
      ['1908', 'Bosna-Hersek', 'Avusturya-Macaristan ilhak etti', 'Büyük devlet çıkarı'],
      ['1908', 'Girit', 'Yunanistan’a bağlandığını ilan etti', 'Milliyetçilik'],
      ['1912', 'Trablusgarp', 'Uşi Antlaşması ile İtalya’ya bırakıldı', 'Sömürgecilik'],
    ],
    caption:
      'Tablo, atlastaki olayları tek yerde toplar. “Ağır basan sebep” sütunu bir yorumdur: her kayıpta birden fazla etken vardı (askerî yenilgi, mali zayıflık, büyük devletlerin dengesi). Burada yalnız en belirgin olanı yazılmıştır.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Osmanlı 20. yüzyıla neden zayıflamış olarak girdi?',
    lead:
      'Tek bir sebep arama. Dışarıdan gelen fikirler ve baskılar içerideki sorunlarla birleşti; atılan her adım bir sonrakinin zeminini hazırladı.',
    intro: 'Zinciri okurken her halkada şunu sor: Bu, bir öncekinin sonucu mu, yoksa ona verilmiş bir cevap mı?',
    steps: [
      {
        tur: 'sebep',
        title: 'Fransız İhtilali’nin fikirleri',
        body: 'Eşitlik, özgürlük ve milliyetçilik fikirleri çok uluslu Osmanlı’da ayrılıkçı isyanları besledi. İlk bağımsızlığı 1830’da Yunanlar kazandı.',
      },
      {
        tur: 'sebep',
        title: 'Sanayi İnkılabı ve sömürgecilik',
        body: 'Ham madde ve pazar arayan Avrupa devletleri Osmanlı’yı hem toprak kaybına uğrattı hem de açık bir pazara çevirdi. Balta Limanı Antlaşması (1838) yerli üreticiyi yabancı rekabetine karşı korumasız bıraktı.',
      },
      {
        tur: 'sebep',
        title: 'İçerideki mali ve askerî zayıflık',
        body: 'Kaybedilen savaşlar ve azalan gelirler devleti borçlanmaya itti. İlk dış borç 1854’te Kırım Savaşı sırasında alındı.',
      },
      {
        tur: 'gelisme',
        title: 'Reformla cevap: Tanzimat ve Islahat',
        body: 'Devlet bütün tebaaya kanun güvencesi ve eşit haklar vererek hem ayrılıkçılığı durdurmayı hem de Avrupa’nın iç işlere karışmasını önlemeyi amaçladı.',
      },
      {
        tur: 'gelisme',
        title: 'Meşrutiyet: yönetime halkın katılması',
        body: '1876’da anayasa ilan edildi, meclis toplandı. Meclis 1878’de kapatıldı; 1908’de II. Meşrutiyet ile yeniden açıldı.',
      },
      {
        tur: 'sonuc',
        title: 'Reformlar dağılmayı durduramadı',
        body: 'Eşitlik vaadi bağımsızlık isteyen toplulukları tatmin etmedi. Borçlar ödenemeyince 1881’de Düyun-u Umumiye kuruldu. 1908’de üç bölge birden elden çıktı.',
      },
      {
        tur: 'sonraki-etki',
        title: 'Fikir akımları ve yeni bir kuşak',
        body: 'Aydınlar “Devlet nasıl kurtulur?” sorusuna farklı cevaplar aradı. Bu tartışmaların içinde yetişen genç subaylardan biri Mustafa Kemal’di; Trablusgarp ve Balkan yenilgileri onun kuşağının düşüncesini derinden etkiledi.',
      },
    ],
    inference:
      'Zincirden çıkan temel çıkarım: Osmanlı’daki reformlar yalnızca Avrupa’ya benzeme isteğinden değil, devleti ayakta tutma zorunluluğundan doğdu. Bir soruda bu dönemdeki bir reformun amacı sorulursa cevabı “devletin dağılmasını önlemek” ve “dış müdahaleyi engellemek” yönünde ara.',
    body:
      'Program bu kazanımda Tanzimat ve Meşrutiyet dönemlerinin Osmanlı **siyasi ve sosyal yapısına** etkisine değinilmesini ister. İki yapıyı ayrı ayrı düşünmek işini kolaylaştırır.\n\n' +
      '**Siyasi yapıdaki değişim.** Tanzimat ile padişah dâhil herkesin kanuna bağlı olacağı ilkesi benimsendi; kimse yargılanmadan cezalandırılamayacaktı. Kanun-ı Esasi ile padişahın yetkileri ilk kez bir anayasa ve meclisle paylaşıldı; halk, seçilmiş temsilcileri aracılığıyla yönetime katılmaya başladı. Ancak padişah meclisi kapatabilecek kadar güçlü kaldı. Yani yönetim tek kişinin elinden tamamen çıkmadı; ama bir daha eskisi gibi olmadı.\n\n' +
      '**Sosyal yapıdaki değişim.** Müslüman ve gayrimüslim tebaa kanun önünde eşit sayılmaya başlandı; bu, yüzyıllardır toplulukları dinlerine göre ayrı ayrı düzenleyen sistemin değişmesi demekti. Batı tarzı okullar açıldı, gazeteler yayımlanmaya başladı. Bu gazetelerde vatan, hürriyet, meşrutiyet gibi kavramlar tartışıldı ve yeni bir aydın kuşağı yetişti. Fikir akımlarını geliştirecek olan kuşak, bu okullarda okuyan ve bu gazeteleri okuyan kuşaktır.',
  },
  comparison: {
    title: 'Üç belge, üç basamak: Tanzimat, Islahat ve Kanun-ı Esasi',
    columns: ['Tanzimat Fermanı (1839)', 'Islahat Fermanı (1856)', 'Kanun-ı Esasi (1876)'],
    rows: [
      { label: 'Hangi padişah döneminde?', values: ['Abdülmecid', 'Abdülmecid', 'II. Abdülhamid'] },
      {
        label: 'Temel yenilik',
        values: [
          'Herkese can, mal ve namus güvencesi; yargılanmadan ceza verilmemesi; vergi ve askerliğin düzene bağlanması',
          'Gayrimüslimlere Müslümanlarla eşit haklar',
          'İlk anayasa; seçilmiş mebuslardan oluşan Meclis-i Mebusan ve padişahın atadığı Heyet-i Ayan',
        ],
      },
      {
        label: 'Asıl amaç',
        values: [
          'Hukuk güvencesiyle tebaanın devlete bağlılığını artırmak; Avrupa’nın desteğini kazanmak',
          'Avrupa devletlerinin gayrimüslimleri bahane ederek iç işlere karışmasını önlemek',
          'Halkı yönetime katarak ayrılıkçılığı ve dış müdahaleyi durdurmak',
        ],
      },
      {
        label: 'Halk yönetime katıldı mı?',
        values: ['Hayır; güvenceyi padişahın fermanı verir', 'Hayır; yine bir fermandır', 'Evet; ilk kez seçilmiş temsilcilerle'],
      },
      {
        label: 'Sınırı',
        values: [
          'Uygulama bölgeden bölgeye farklılaştı; ayrılıkçılığı durduramadı',
          'Bazı bölgelerde toplumsal gerilim arttı; ayrılıkçılığı durduramadı',
          'Meclis 1878’de kapatıldı; anayasa 1908’e kadar uygulanmadı',
        ],
      },
    ],
    insight:
      'Üç belgeyi bir merdivenin basamakları gibi düşün: Tanzimat “herkes kanun önünde güvende” dedi, Islahat “Müslüman ve gayrimüslim eşit” dedi, Kanun-ı Esasi “halk da yönetime katılsın” dedi. Her basamak bir öncekinin çözemediği sorunu çözmeye çalıştı.',
  },
  traps: [
    {
      title: 'Meşrutiyet ile cumhuriyeti karıştırmak',
      wrong: 'Meşrutiyet ilan edildiğine göre Osmanlı’da egemenlik artık tamamen halka geçmişti.',
      right: 'Meşrutiyette padişah yerindedir; meclis vardır ama padişah meclisi kapatabilecek kadar güçlüdür. Egemenliğin kayıtsız şartsız millete ait olması Cumhuriyet ile gerçekleşir.',
      body: 'En açık kanıt: II. Abdülhamid 1878’de meclisi kapatabildi. Soruda “padişahın yetkileri sınırlandı” ifadesi meşrutiyeti, “egemenlik tamamen millete geçti” ifadesi cumhuriyeti anlatır.',
    },
    {
      title: 'Tanzimat Fermanı’nı anayasa sanmak',
      wrong: 'Tanzimat Fermanı Osmanlı’nın ilk anayasasıdır.',
      right: 'İlk anayasa 1876’daki Kanun-ı Esasi’dir. Tanzimat Fermanı padişahın verdiği bir güvence belgesidir; meclis kurmaz, halkı yönetime katmaz.',
      body: 'Ayırt etme ipucu: Soruda “meclis”, “seçim”, “mebus” geçiyorsa Meşrutiyet; “can, mal, namus güvencesi” ya da “yargılanmadan ceza verilmemesi” geçiyorsa Tanzimat düşün.',
    },
    {
      title: 'Reformları yalnız taklit olarak görmek',
      wrong: 'Osmanlı reformları yalnızca Avrupa’ya benzemek için yapıldı.',
      right: 'Reformların asıl amacı devletin dağılmasını ve dış müdahaleyi önlemekti. Avrupa’dan alınan kurumlar bu amaca ulaşmak için birer araçtı.',
      body: 'Kronolojiye bak: Reformların çoğu bir kaybın ya da dış baskının ardından geldi. Sebep–sonuç ilişkisini kuran öğrenci, “amaç” sorularında taklit seçeneğine düşmez.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Kararlarıyla şahsiyetler',
    lead:
      'Bu dönemi kişilerin verdiği kararlar şekillendirdi. Her kartta kişinin hangi sorunla karşılaştığına ve hangi yolu seçtiğine bak.',
    intro:
      'Kartı açınca kişinin hangi olaylarla bağlandığını ve kararının sonraki gelişmeleri nasıl etkilediğini görürsün. Biyografi ezberleme; kararı ve sonucunu eşleştir.',
    figures: [
      {
        name: 'Sultan Abdülmecid',
        period: '1839–1861 · padişah',
        position: 'Tanzimat ve Islahat fermanlarını ilan ettiren padişah',
        contribution:
          'Tahta çıktığı 1839’da devlet hem Mısır Valisi Mehmet Ali Paşa’nın isyanıyla hem de Avrupa devletlerinin baskısıyla uğraşıyordu. Tanzimat Fermanı’nı ilan ettirerek hukuk güvencesiyle hem halkın bağlılığını hem de Avrupa’nın desteğini kazanmayı seçti.',
        connections: ['Tanzimat Fermanı (1839)', 'Kırım Savaşı ve ilk dış borç (1854)', 'Islahat Fermanı (1856)'],
        significance: 'Kararı, Osmanlı’da padişahın da kanuna bağlı sayıldığı yeni bir dönemi başlattı.',
      },
      {
        name: 'Mustafa Reşid Paşa',
        period: '1839 · Tanzimat',
        position: 'Hariciye nazırı (dışişleri bakanı), Tanzimat’ın hazırlayıcısı',
        contribution:
          'Avrupa’da elçilik yaptı ve Avrupa devletlerinin desteğini kazanmanın yolunu hukuk reformunda gördü. Tanzimat Fermanı’nı Gülhane’de o okudu. Balta Limanı Antlaşması’nın görüşmeleri de onun Baltalimanı’ndaki yalısında yapıldı.',
        connections: ['Balta Limanı Antlaşması (1838)', 'Tanzimat Fermanı (1839)'],
        significance: 'İç reformu dış politikayla birlikte düşünen devlet adamı tipinin örneğidir.',
      },
      {
        name: 'Mithat Paşa',
        period: '1876 · Kanun-ı Esasi',
        position: 'Sadrazam; anayasa hazırlığının öncülerinden',
        contribution:
          'Anayasa ve meclisin devleti kurtaracağına inanan devlet adamlarının başında geliyordu. 1876’da sadrazamken Kanun-ı Esasi ilan edildi. Kısa süre sonra, 1877’nin başında, anayasanın padişaha verdiği sürgün yetkisiyle görevden uzaklaştırılıp ülke dışına gönderildi.',
        connections: ['Kanun-ı Esasi (1876)', 'I. Meşrutiyet', 'Kanun-ı Esasi’nin 113. maddesi'],
        significance: 'Başına gelenler, ilk anayasanın padişaha hâlâ çok geniş yetkiler bıraktığının en açık kanıtıdır.',
      },
      {
        name: 'Sultan II. Abdülhamid',
        period: '1876–1909 · padişah',
        position: 'I. Meşrutiyet’i ilan eden, sonra meclisi kapatan padişah',
        contribution:
          'Meşrutiyeti ilan etme sözüyle tahta çıktı ve Kanun-ı Esasi’yi ilan etti. 93 Harbi’nin ağır şartlarını gerekçe göstererek 1878’de meclisi kapattı ve devleti uzun süre tek başına yönetti. Balkanlar’daki kayıplardan sonra Müslüman toplulukları devlet etrafında toplamak için İslamcılık politikasını öne çıkardı.',
        connections: ['Kanun-ı Esasi (1876)', 'Meclisin kapatılması (1878)', 'Düyun-u Umumiye (1881)', 'II. Meşrutiyet (1908)'],
        significance:
          'Kararları iki yönlü okunur: devleti dağılmadan tutmaya çalıştı; ama meclisi kapatması meşrutiyet isteyen aydınların muhalefetini büyüttü.',
      },
      {
        name: 'Namık Kemal',
        period: '1860’lar–1870’ler · Genç Osmanlılar',
        position: 'Şair ve gazeteci; Genç Osmanlıların önde gelen ismi',
        contribution:
          'Vatan, hürriyet ve meşrutiyet kavramlarını yazılarıyla geniş kitlelere tanıttı. Osmanlıcılık fikrinin en tanınmış savunucusudur. “Vatan yahut Silistre” adlı oyunu vatanseverlik duygusunu işler.',
        connections: ['Genç Osmanlılar', 'Osmanlıcılık', 'Meşrutiyet talebi'],
        significance: 'Mustafa Kemal’in gençlik yıllarında okuduğu yazarlardandır; bu bağ bir sonraki derste ele alınacak.',
      },
      {
        name: 'Yusuf Akçura',
        period: '1904 · Üç Tarz-ı Siyaset',
        position: 'Düşünür; Türkçülüğün kurucu isimlerinden',
        contribution:
          '1904’te Kahire’de yayımlanan Türk gazetesinde “Üç Tarz-ı Siyaset” makalesini yazdı. Osmanlıcılık, İslamcılık ve Türkçülüğü karşılaştırıp Türkçülüğün en uygulanabilir yol olduğunu savundu.',
        connections: ['Üç Tarz-ı Siyaset (1904)', 'Türkçülük'],
        significance: 'Fikir akımlarını sistemli biçimde karşılaştıran ilk metinlerden birini yazdığı için bu konunun anahtar isimlerindendir.',
      },
      {
        name: 'Ziya Gökalp',
        period: 'II. Meşrutiyet dönemi',
        position: 'Sosyolog ve düşünür; Türkçülüğün kuramcısı',
        contribution:
          'Türkçülüğü ortak dil, kültür ve tarih bilinci üzerine kurdu. “Türkleşmek, İslamlaşmak, Muasırlaşmak” adlı eserinde millî kültürü, dini ve çağdaş uygarlığı bir arada düşünmeyi önerdi.',
        connections: ['Türkçülük', 'II. Meşrutiyet tartışmaları'],
        significance: 'Fikirleri Cumhuriyet döneminin millî kültür ve dil çalışmalarını etkiledi.',
      },
      {
        name: 'Abdullah Cevdet',
        period: '1904 · İctihad dergisi',
        position: 'Düşünür; Batıcılığın önde gelen ismi',
        contribution:
          '1904’te Cenevre’de İctihad dergisini çıkarmaya başladı. Kurtuluşun Batı uygarlığını her yönüyle benimsemekte olduğunu savundu.',
        connections: ['Batıcılık', 'İctihad dergisi'],
        significance: 'Batıcılar içinde “Batı’yı bütünüyle alma” görüşünü temsil eder; yalnız bilim ve tekniği almayı savunan ılımlı Batıcılardan ayrılır.',
      },
      {
        name: 'Mehmet Akif',
        period: 'II. Meşrutiyet dönemi',
        position: 'Şair; İslamcılık düşüncesinin tanınmış temsilcisi',
        contribution:
          'Sırat-ı Müstakim ve Sebilürreşad dergilerinde yazdı. İslam dünyasının geri kalışının sebebini dinde değil, dinin yanlış anlaşılmasında ve bilimden uzaklaşmakta gördü; Batı’nın bilim ve tekniğinin alınmasını savundu.',
        connections: ['İslamcılık', 'Safahat'],
        significance: 'İslamcılığın Batı’yı toptan reddetmediğini, bilim ve tekniğini almayı savunduğunu gösteren en iyi örneklerden biridir.',
      },
    ],
    takeaway:
      'Şahsiyetleri iki grupta hatırla: devleti yönetenler (padişahlar ve devlet adamları) reformla, aydınlar ise fikirle cevap aradı. İki grubun sorusu aynıydı: Devlet nasıl kurtulur?',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-fikir-akimlari`,
      title: 'Fikir akımları: “Devlet nasıl kurtulur?” sorusuna dört cevap',
      lead: 'Aynı soruya dört farklı cevap verildi. Her akımı iki soruyla oku: Kimi birleştirmek istiyor? Neden yetmedi ya da nasıl iz bıraktı?',
      blocks: [
        {
          id: `${SLUG}-fikir-akimlari-anlatim`,
          type: 'prose',
          body:
            'Fikir akımlarının hepsi aynı kaygıdan doğdu: Toprak kaybeden, borçlanan ve içeriden çözülen bir devlet nasıl ayakta tutulur? Ayrıldıkları nokta, devleti bir arada tutacak **bağın** ne olacağıydı.\n\n' +
            '**Osmanlıcılık**, din ve milliyet farkı gözetmeden bütün tebaayı ortak bir “Osmanlı” kimliğinde ve eşit vatandaşlıkta birleştirmeyi amaçladı. Tanzimat ve Islahat fermanlarının ruhu buydu; Genç Osmanlılar ve Namık Kemal bu fikri yazılarıyla savundu. Ancak milliyetçilik güçlendikçe Balkan toplulukları kendi devletlerini istedi. 1912–1913 Balkan Savaşları, Osmanlıcılığın artık devleti bir arada tutamayacağını açıkça gösterdi.\n\n' +
            '**İslamcılık**, devletin Müslüman halkını ortak din bağıyla ve halifelik makamı etrafında birleştirmeyi önerdi. 1878’de Balkanlar’da büyük kayıplar yaşanıp nüfus içinde Müslümanların oranı artınca II. Abdülhamid bu fikri devlet politikası olarak öne çıkardı. İslamcılar Batı’nın bilim ve tekniğinin alınmasına genellikle karşı değildi; Mehmet Akif bu görüşün tanınmış sesidir. Birinci Dünya Savaşı sırasında bazı Arap toplulukların Osmanlı’ya karşı ayaklanması, din bağının da tek başına yetmediğini gösterdi.\n\n' +
            '**Türkçülük**, devletin asıl unsuru olan Türkleri ortak dil, tarih ve kültür bilinciyle birleştirmeyi amaçladı. Yusuf Akçura 1904’te “Üç Tarz-ı Siyaset” makalesinde üç yolu karşılaştırıp Türkçülüğü savundu; Ziya Gökalp akımın düşünce temelini geliştirdi. II. Meşrutiyet’ten sonra, özellikle Balkan Savaşları’nın ardından güç kazandı.\n\n' +
            '**Batıcılık**, geri kalmışlığın çaresini Batı uygarlığını benimsemekte gördü. Batıcıların bir kısmı Batı’yı her yönüyle almayı, bir kısmı ise bilim ve tekniğini alıp kendi kültürünü korumayı savundu. Batıcılık bir topluluğu birleştirme önerisi değil, bir çağdaşlaşma yöntemiydi; bu yüzden başka akımlarla bir arada da savunulabildi.\n\n' +
            'Mustafa Kemal bu tartışmaların içinde yetişti. Ancak Cumhuriyet’i kurarken bu akımlardan birini olduğu gibi benimsemedi: egemenliğin millete ait olduğu, çağdaş uygarlığı hedefleyen bir ulus devlet kurdu. Bu ayrımı ilerideki derslerde Atatürk ilkeleri üzerinden yeniden göreceksin.',
        },
        {
          id: `${SLUG}-fikir-akimlari-tablo`,
          type: 'table',
          interactive: true,
          title: 'Dört akımı yan yana gör',
          columns: ['Akım', 'Birleştirici bağ', 'Önde gelen isimler', 'Güç kazandığı ortam', 'Zayıflatan gelişme ya da bıraktığı iz'],
          rows: [
            ['Osmanlıcılık', 'Din ve milliyet farkı gözetmeyen eşit vatandaşlık', 'Tanzimat devlet adamları, Genç Osmanlılar, Namık Kemal', 'Tanzimat ve Islahat dönemi', '1912–1913 Balkan Savaşları ile etkisini yitirdi'],
            ['İslamcılık', 'Ortak din bağı ve halifelik', 'II. Abdülhamid dönemi politikası, Mehmet Akif', '1878 sonrası, Müslüman nüfusun oranı artınca', 'I. Dünya Savaşı’nda bazı Arap toplulukların ayaklanmasıyla zayıfladı'],
            ['Türkçülük', 'Ortak dil, tarih ve kültür bilinci', 'Yusuf Akçura, Ziya Gökalp', 'II. Meşrutiyet sonrası, özellikle Balkan Savaşları’ndan sonra', 'Cumhuriyet’in millî kültür, dil ve tarih çalışmalarında izleri görülür'],
            ['Batıcılık', 'Birleştirici bağ önermez; kurtuluşu çağdaş uygarlıkta arar', 'Abdullah Cevdet (Batı’yı bütünüyle alma görüşü)', 'Tanzimat’tan itibaren; II. Meşrutiyet’te yoğunlaştı', 'Cumhuriyet’in çağdaşlaşma hedefinde izleri görülür'],
          ],
          caption:
            'Son sütun bir değerlendirmedir; akımlar birbirinden kesin çizgilerle ayrılmaz. Aynı aydın farklı dönemlerde farklı akımlara yakın durabilmiştir.',
        },
        {
          id: `${SLUG}-fikir-akimlari-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Kimi birleştiriyor?”',
          body:
            'Osmanlıcılık → herkesi (din ve milliyet ayırt etmeden) · İslamcılık → Müslümanları · Türkçülük → Türkleri · Batıcılık → birleştirme değil, çağdaşlaşma yolu. Soruda akımın adı verilmese bile “bütün tebaa”, “ümmet ve halifelik”, “ortak dil ve tarih”, “Avrupa uygarlığı” ifadelerinden birini görürsen akımı tanırsın.',
        },
        {
          id: `${SLUG}-fikir-akimlari-yanilgi`,
          type: 'trap',
          title: 'İslamcılığı Batı düşmanlığı sanmak',
          wrong: 'İslamcılar Batı’dan hiçbir şey alınmamasını savundu; Batıcılar ise tam tersini.',
          right: 'İslamcıların çoğu Batı’nın bilim ve tekniğinin alınmasını, ama ahlak anlayışının ve yaşam biçiminin alınmamasını savundu. Batıcıların bir kısmı ise Batı’yı her yönüyle almayı istedi. Fark “Batı’dan alınsın mı?” sorusunda değil, “ne alınsın?” sorusundadır.',
          body: 'Mehmet Akif’in Batı’nın bilim ve tekniğinin alınmasını savunması bu ayrımın en bilinen örneğidir.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead:
      'Tarih bilgisi kaynaklardan gelir. LGS de bir belge, alıntı ya da tablo verip “bu bilgilere göre” ne söylenebileceğini sorabilir. Önce kaynağın türünü, sonra ne söylediğini, en son neyi söylemediğini belirle.',
    intro:
      '**Birincil kaynak**, olayın yaşandığı dönemde, olayın içinden üretilmiş belgedir: bir ferman, bir anayasa maddesi, bir mektup, dönemin gazetesi ya da bir fotoğraf. **İkincil kaynak**, olaydan sonra birincil kaynaklara dayanarak yazılmış yorumdur: bir tarih kitabı, bir ansiklopedi maddesi ya da bir araştırmacının makalesi.\n\n' +
      'İkisinin de değeri vardır. Birincil kaynak olaya en yakın tanıktır ama yazanın bakış açısını taşır. İkincil kaynak birden çok belgeyi karşılaştırır ama yazarın yorumunu da içerir. İyi bir tarih okuru her kaynağa üç soru sorar:\n\n' +
      '- Bu metni kim, ne zaman, hangi amaçla yazdı?\n- Metin açıkça ne söylüyor?\n- Metinden hangi çıkarım yapılabilir, hangisi yapılamaz?\n\n' +
      'Aşağıdaki metinlerin hiçbiri belgenin birebir aktarımı değildir. Her kaynağın başında metnin niteliği (sadeleştirme ya da DRKOÇ’un yazdığı örnek metin) açıkça yazılıdır.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Tanzimat Fermanı’ndan',
        kunye: 'Gülhane Hatt-ı Hümayunu, 3 Kasım 1839, İstanbul. Sultan Abdülmecid adına Mustafa Reşid Paşa tarafından okundu.',
        nitelik: 'DRKOÇ sadeleştirmesi. Fermanın ana hükümleri günümüz Türkçesiyle özetlenmiştir; birebir alıntı değildir.',
        metin:
          'Bundan sonra tebaamızdan hiç kimse açıkça yargılanıp mahkeme kararı verilmedikçe cezalandırılmayacaktır. Herkesin canı, malı ve namusu güvence altındadır. Vergiler herkesin gücüne göre belirlenecek, askerlik belli bir süreyle sınırlanacaktır. Bu haklardan Müslüman ve gayrimüslim bütün tebaa yararlanacaktır.',
        soru:
          'Bu belgeye bakarak Osmanlı yönetiminin 1839’da hangi sorunu çözmeye çalıştığı söylenebilir? Belgeden çıkarılamayacak bir yargı da bul.',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Belge olayın yaşandığı yıl, devletin kendisi tarafından ilan edilmiştir; bu yüzden birincil kaynaktır. Sadeleştirilmiş olması türünü değiştirmez, yalnız dilini değiştirir.' },
          { title: 'Açıkça söyleneni ayır', body: 'Yargılanmadan ceza verilmemesi, can, mal ve namus güvencesi, gücüne göre vergi, süresi belli askerlik ve bu hakların din ayrımı yapılmadan herkese tanınması.' },
          { title: 'Çıkarımı kur', body: '“Bundan sonra” ifadesi, bu güvencelerin daha önce yeterince bulunmadığını düşündürür. Hakların Müslüman–gayrimüslim ayrımı yapılmadan verilmesi, devletin farklı toplulukları kendine bağlamaya çalıştığını gösterir.' },
          { title: 'Çıkarılamayanı ayır', body: 'Belge meclisten, seçimden ya da anayasadan söz etmez. Bu yüzden “Halk yönetime katıldı” yargısı bu belgeden çıkarılamaz; güvenceyi yine padişahın fermanı vermektedir.' },
        ],
        cevap:
          'Belge, yönetimin keyfî cezalandırmayı ve düzensiz vergiyi sona erdirerek tebaanın devlete güvenini artırmaya ve farklı din ve milletten toplulukları eşit güvenceyle devlete bağlamaya çalıştığını gösterir. “Halkın yönetime katıldığı” ise bu belgeden çıkarılamaz.',
        cikarim:
          'Birincil kaynakta en değerli ipuçlarından biri zaman ifadeleridir: “bundan sonra”, “artık”, “yeniden” gibi sözcükler önceki durumu da anlatır.',
      },
      {
        tur: 'birincil',
        baslik: 'Kanun-ı Esasi’nin 113. maddesinden',
        kunye: 'Kanun-ı Esasi, 23 Aralık 1876. Osmanlı Devleti’nin ilk anayasası.',
        nitelik: 'DRKOÇ sadeleştirmesi. Maddenin padişaha sürgün yetkisi veren bölümü günümüz Türkçesiyle aktarılmıştır; birebir alıntı değildir.',
        metin:
          'Hükümetin güvenliğini bozdukları, kolluk kuvvetlerinin güvenilir soruşturmasıyla anlaşılan kişileri ülke dışına çıkarmak yalnızca padişahın yetkisindedir.',
        soru:
          'Bu madde, I. Meşrutiyet döneminde padişah ile anayasa arasındaki ilişki hakkında ne söyler? Anayasayı hazırlayanlardan Mithat Paşa’nın 1877’de bu maddeye dayanılarak ülke dışına gönderildiğini de hesaba kat.',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Anayasanın kendi maddesidir; olayın yaşandığı dönemde, devlet tarafından yazılmıştır: birincil kaynak.' },
          { title: 'Açıkça söyleneni ayır', body: 'Belirli kişileri ülke dışına çıkarma yetkisi yalnız padişaha verilmiştir. Maddede meclisin onayından söz edilmez.' },
          { title: 'Başka bilgiyle birleştir', body: 'Mithat Paşa, anayasa ilan edildikten kısa süre sonra bu maddeye dayanılarak ülke dışına gönderildi. Yani madde kâğıt üzerinde kalmadı, kullanıldı.' },
          { title: 'Çıkarımı sınırla', body: 'Bu maddeden “anayasa hiçbir şeyi değiştirmedi” sonucu çıkmaz; anayasa meclis kurmuş ve halkı yönetime katmıştı. Çıkarılabilecek sonuç, padişahın anayasayla sınırlanmakla birlikte hâlâ çok güçlü kaldığıdır.' },
        ],
        cevap:
          'Madde, I. Meşrutiyet’te padişahın yetkilerinin anayasayla paylaşıldığını ama geniş yetkilerini koruduğunu gösterir. Meşrutiyet egemenliği millete devretmemiş, padişahın yanına bir meclis eklemiştir.',
        cikarim:
          'Bir belgeden çıkarım yaparken hem “ne değişti?” hem “ne değişmedi?” sorusunu sor. Doğru çıkarım bu dengeyi kurar; tek yönlü ve abartılı yargılar metnin ötesine geçer.',
      },
      {
        tur: 'ikincil',
        baslik: 'Bir tarih kitabından örnek değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır; gerçek bir kitaptan alıntı değildir.',
        metin:
          'Tanzimat’tan II. Meşrutiyet’e uzanan dönemde Osmanlı yöneticileri devleti bir arada tutacak ortak bir kimlik aradı. Eşit vatandaşlık fikri önce umut verdi; ancak milliyetçilik güçlendikçe bu fikir Balkan topluluklarını devlete bağlamakta yetersiz kaldı. 1912–1913 Balkan Savaşları bu arayışın en ağır kırılma noktası oldu.',
        soru:
          'Metindeki hangi ifade bir olguyu, hangileri yazarın yorumunu anlatır? Metne göre Osmanlıcılık neden zayıfladı?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Metin olaydan sonra, dönemi değerlendiren biri tarafından yazılmıştır. Belge değil, belgelere dayanan bir yorumdur: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: '“1912–1913 Balkan Savaşları” bir olgudur; tarihi ve olayın kendisi başka kaynaklarla doğrulanabilir.' },
          { title: 'Yorumu ayır', body: '“Umut verdi”, “yetersiz kaldı”, “en ağır kırılma noktası” ifadeleri yazarın değerlendirmesidir. Başka bir tarihçi aynı olguya farklı bir ağırlık verebilir.' },
          { title: 'Soruyu cevapla', body: 'Metne göre Osmanlıcılık, milliyetçiliğin güçlenmesi karşısında Balkan topluluklarını devlete bağlayamadığı için zayıfladı; Balkan Savaşları bu zayıflığı açıkça gösterdi.' },
        ],
        cevap:
          'Olgu: 1912–1913 Balkan Savaşları. Yorum: eşit vatandaşlık fikrinin önce umut verip sonra yetersiz kaldığı ve savaşların en ağır kırılma noktası olduğu değerlendirmesi. Osmanlıcılık, milliyetçilik karşısında toplulukları bir arada tutamadığı için zayıfladı.',
        cikarim:
          '“Metinden hangisine ulaşılabilir?” sorusunda yorum ifadelerini olgu gibi okuma. “Kesinlikle”, “tek sebep”, “hiçbir zaman” gibi mutlak sözcükler taşıyan seçenekleri metinle tek tek sına.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Kronoloji: Hangi olay araya girer?',
      prompt:
        'Şu olayları kronolojik sıraya koy ve Osmanlı’nın ilk anayasasının hangi iki olay arasında ilan edildiğini bul:\n\n- I. Tanzimat Fermanı\n- II. Düyun-u Umumiye’nin kurulması\n- III. Islahat Fermanı\n- IV. II. Meşrutiyet’in ilanı',
      steps: [
        { title: 'Yılları yerleştir', body: 'Tanzimat 1839, Islahat 1856, Düyun-u Umumiye 1881, II. Meşrutiyet 1908.' },
        { title: 'Sırayı yaz', body: 'I → III → II → IV.' },
        { title: 'Anayasayı yerleştir', body: 'Kanun-ı Esasi 1876’da ilan edildi: 1856’dan sonra, 1881’den önce.' },
        { title: 'Yılı hatırlamıyorsan mantığı kullan', body: 'Islahat, Tanzimat’ı tamamlar; anayasa ise fermanların çözemediği sorunu meclisle çözmeye çalışır. Borçların ödenemeyip Düyun-u Umumiye’nin kurulması da meclisin kapatılmasından sonraya, II. Abdülhamid’in yönetimine denk gelir.' },
      ],
      answer: 'Sıra I → III → II → IV’tür. İlk anayasa, Islahat Fermanı (III) ile Düyun-u Umumiye’nin kurulması (II) arasında ilan edilmiştir.',
      takeaway: 'Kronoloji sorularında yıl hafızana güvenmiyorsan sebep–sonuç ilişkisini kur: Bir cevap, çözmeye çalıştığı sorundan sonra gelir.',
    },
    {
      title: 'Haritadan çıkarım: İki bölge, iki sebep',
      prompt:
        'Şematik atlasta Kuzey Afrika’daki kayıpları (Cezayir, Tunus, Mısır, Trablusgarp) ve Balkanlar’daki kayıpları (Yunanistan, Bulgaristan, Bosna-Hersek) karşılaştır. İki bölgedeki kayıpların ağır basan sebepleri arasındaki fark nedir?',
      steps: [
        { title: 'Kimin aldığına bak', body: 'Kuzey Afrika’daki dört bölgeyi Fransa, İngiltere ve İtalya aldı; yani bir Avrupa devleti işgal ya da denetimle geldi.' },
        { title: 'Balkanlar’a bak', body: 'Yunanistan ve Bulgaristan’ı bir Avrupa devleti almadı; yerel topluluklar kendi devletlerini kurdu. Bosna-Hersek ise bir istisna: onu Avusturya-Macaristan ilhak etti.' },
        { title: 'Sebebi adlandır', body: 'Kuzey Afrika’da sömürgecilik, Balkanlar’da çoğunlukla milliyetçilik ağır bastı.' },
        { title: 'İstisnayı yorumla', body: 'Bosna-Hersek örneği, büyük devletlerin Balkanlar’da da çıkar peşinde olduğunu gösterir. Bu yüzden “Balkanlar’daki bütün kayıpların sebebi milliyetçiliktir” demek yanlış olur.' },
      ],
      answer:
        'Kuzey Afrika’daki kayıplar büyük devletlerin işgaliyle (sömürgecilik), Balkanlar’daki kayıpların çoğu yerel toplulukların bağımsızlık hareketleriyle (milliyetçilik) gerçekleşti. Bosna-Hersek gibi istisnalar, iki sebebin iç içe geçebildiğini gösterir.',
      takeaway: 'Harita sorularında önce “nerede?”, sonra “kim aldı?” diye sor. Kimin aldığı çoğu zaman sebebi gösterir; ama istisnaları görmeden genelleme yapma.',
    },
    {
      title: 'Fikir akımını tanı',
      prompt:
        'Bir aydın şöyle yazıyor: “Devleti kurtaracak olan, dilini, tarihini ve kültürünü ortak bilen insanların birliğidir.” Bu görüş hangi fikir akımına aittir? Hangi gelişmeler bu akımın güç kazanmasını kolaylaştırmıştır?',
      steps: [
        { title: 'İpucu sözcükleri bul', body: '“Dil, tarih, kültür birliği” ifadesi bir milleti tanımlar; din ya da bütün tebaa değil, belirli bir millet vurgulanıyor.' },
        { title: 'Akımı adlandır', body: 'Ortak dil, tarih ve kültür bilinciyle Türkleri birleştirmeyi hedefleyen akım Türkçülüktür.' },
        { title: 'Ortamı kur', body: 'Osmanlıcılık Balkan Savaşları’yla çöktü; İslamcılığın da tek başına yetmediği görüldü. Bu boşlukta Türkçülük güç kazandı.' },
      ],
      answer: 'Görüş Türkçülüğe aittir. Osmanlıcılığın Balkan Savaşları ile çökmesi ve İslamcılığın tek başına yetersiz kalması, Türkçülüğün güç kazanmasını kolaylaştırdı.',
      takeaway: 'Akım sorularında “kimi birleştiriyor?” sorusunu sor: bütün tebaa, Müslümanlar, Türkler ya da çağdaşlaşma yolu.',
    },
  ],
  questionClue: {
    concept: 'Soruda bir reformun amacını nasıl tanırım?',
    statement:
      'Bir soru Tanzimat, Islahat ya da Meşrutiyet ile ilgili bir bilgi verip “Bu düzenlemenin amacı aşağıdakilerden hangisidir?” diye sorabilir.',
    clues: [
      '“Bütün tebaa”, “Müslüman ve gayrimüslim” → farklı toplulukları devlete bağlama',
      '“Avrupa devletlerinin müdahalesi” → dış baskıyı azaltma',
      '“Meclis”, “mebus”, “seçim” → halkı yönetime katma',
      '“Can, mal, namus”, “yargılanmadan” → hukuk güvencesi',
    ],
    reasoning:
      'Bu dönemin reformlarının neredeyse hepsi iki amaca hizmet eder: içerideki dağılmayı durdurmak ve dışarıdan gelen müdahaleyi önlemek. Seçeneklerde bu iki amaçla bağlantılı olanı ara.',
    boundary:
      'Dikkat: “Egemenliğin tamamen millete geçmesi”, “saltanatın kaldırılması”, “laikliğin kabulü” gibi seçenekler Cumhuriyet dönemine aittir; bu dönemin reformlarının amacı olarak işaretlenmez.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body:
      'İnkılap Tarihi sorularında bir bilgi metni, alıntı, tablo, harita ya da kısa bir kronoloji verilip bu bilgilerden hareketle çıkarım istenebilir. Aşağıdaki kalıplar bu kazanımla uyumlu soru biçimleridir; hangisinin ne sıklıkla sorulduğuna dair bir iddia değildir.',
    patterns: [
      'Verilen bilgilere göre ulaşılabilecek ya da ulaşılamayacak yargıyı bulma',
      'Olayları kronolojik sıraya koyma',
      'Bir reformu ya da fikir akımını açıklamasından tanıma',
      'Haritada gösterilen kayıpları sebepleriyle eşleştirme',
      'İki belgeyi karşılaştırıp ortak amacı bulma',
    ],
  },
  checkpoints: [
    {
      prompt:
        'Osmanlı 1856’da gayrimüslimlere eşit haklar tanıdı; ama 1878’de Balkanlar’da yeni devletler kuruldu. Bu iki bilgiyi birlikte düşününce Islahat Fermanı hakkında ne söyleyebilirsin?',
      hint: 'Fermanın amacını hatırla ve sonuçla karşılaştır.',
      answer:
        'Islahat Fermanı ayrılıkçı hareketleri durdurmayı amaçlamıştı; 1878’de yeni devletlerin kurulması bu amaca tam ulaşılamadığını gösterir. Eşit haklar vermek, milliyetçiliğin doğurduğu bağımsızlık isteğini karşılamaya yetmedi.',
    },
    {
      prompt:
        'Almanya ve İtalya 19. yüzyılın ikinci yarısında siyasi birliklerini kurdu. Bu iki devletin 20. yüzyıl başında sömürge konusunda İngiltere ve Fransa’dan daha istekli davranmasının sebebi ne olabilir?',
      hint: 'Sömürge yarışına kim önce başladı?',
      answer:
        'İngiltere ve Fransa sömürge yarışına erken başlamış ve geniş topraklar edinmişti. Birliğini geç kuran Almanya ve İtalya yarışa geç katıldı; bu yüzden zayıf devletlerin elindeki toprakları (İtalya için Trablusgarp) hedef aldılar. Bu rekabet büyük devletler arasındaki gerginliği artırdı ve Birinci Dünya Savaşı’na giden yolun bir parçası oldu.',
    },
    {
      prompt:
        'Düyun-u Umumiye’nin Osmanlı’nın bazı vergilerini doğrudan toplaması, devletin bağımsızlığı açısından ne anlama gelir?',
      hint: 'Vergi toplamak kimin işidir?',
      answer:
        'Vergi toplamak bir devletin en temel egemenlik haklarından biridir. Bu hakkın bir kısmını yabancı alacaklıların denetimindeki bir kurum kullanıyorsa devlet ekonomik bağımsızlığını kısmen kaybetmiş demektir. Mustafa Kemal’in ileride “tam bağımsızlık” derken ekonomik bağımsızlığı da vurgulaması bu deneyimle ilişkilidir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.1.1 bir “kavrar” kazanımıdır: öğrenciden olayları ezberden saymasını değil, 20. yüzyıl başındaki Osmanlı’nın durumunu Avrupa’daki gelişmelerle ilişkilendirmesini ister. Bu kazanıma dayanan bir soru bir durum verip o durumun sebebini ya da sonucunu sorabilir. Böyle bir soruda doğru cevap, verilen bilgilerle desteklenebilen ve aşırı genelleme yapmayan yargıdır.',
    measures: [
      'Fransız İhtilali fikirlerinin çok uluslu devlet üzerindeki etkisini açıklama',
      'Sömürgeciliği Osmanlı’nın toprak ve ekonomi kayıplarıyla ilişkilendirme',
      'Tanzimat, Islahat ve Meşrutiyet’i amaçlarıyla ayırt etme',
      'Harita üzerinde Osmanlı ve Avrupa devletlerinin durumunu yorumlama',
      'Fikir akımlarını önerdikleri birleştirici bağdan tanıma',
    ],
  },
  simulation: {
    title: 'Mini LGS: 1908 yılının iki yüzü',
    passage:
      '1908 yılının temmuz ayında II. Meşrutiyet ilan edildi; Kanun-ı Esasi yeniden yürürlüğe girdi ve yapılan seçimlerin ardından Meclis-i Mebusan yeniden toplandı. İstanbul’da ve pek çok şehirde halk “hürriyet” sözcüğüyle kutlamalar yaptı. Ancak aynı yılın sonbaharında Bulgaristan bağımsızlığını ilan etti, Avusturya-Macaristan Bosna-Hersek’i ilhak etti, Girit de Yunanistan’a bağlandığını duyurdu.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      {
        text: 'Meşrutiyetin yeniden ilanı, Osmanlı Devleti’nin toprak kayıplarını tek başına durduramamıştır.',
        explanation: 'Doğru. Meşrutiyet temmuzda ilan edildi; aynı yılın sonbaharında üç bölge birden elden çıktı. Yönetimde yapılan değişiklik, kayıpları durdurmaya yetmemiştir.',
      },
      {
        text: 'II. Meşrutiyet’in ilanı ile egemenlik kayıtsız şartsız millete geçmiştir.',
        explanation: 'Metinde padişahın yetkilerinin ortadan kalktığına dair bir bilgi yoktur. Meşrutiyette padişah yerindedir; egemenliğin tamamen millete geçmesi Cumhuriyet ile gerçekleşir.',
      },
      {
        text: 'Toprak kayıplarının tek sebebi II. Meşrutiyet’in ilan edilmesidir.',
        explanation: 'Metin iki gelişmeyi aynı yıl içinde verir ama birinin diğerinin tek sebebi olduğunu söylemez. “Tek sebep” ifadesi metnin ötesine geçer; kayıpların arkasında milliyetçilik ve büyük devletlerin çıkarları gibi başka etkenler de vardır.',
      },
      {
        text: 'Bulgaristan, Osmanlı’dan ayrılarak bağımsızlığını kazanan ilk Balkan devletidir.',
        explanation: 'Metin yalnız Bulgaristan’ın 1908’de bağımsızlığını ilan ettiğini söyler; ilk olup olmadığına dair bilgi vermez. Üstelik Yunanistan 1830’da, Sırbistan, Karadağ ve Romanya 1878’de bağımsız olmuştu.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru kökü “bu bilgilere göre” diyor: cevap yalnız metinde verilen bilgilerle desteklenmeli. Metin iki gelişmeyi yan yana koyuyor: bir yönetim değişikliği (Meşrutiyet) ve aynı yıl yaşanan kayıplar. Doğru seçenek bu iki bilgiyi aşırı yorumlamadan birleştiren seçenektir.',
    critical_point:
      'Üçüncü seçenek güçlü bir çeldiricidir. Meşrutiyetin ilanından sonraki karışıklık bu devletlere fırsat vermiş olabilir; ama metin böyle bir ilişki kurmaz ve “tek sebep” ifadesi hiçbir koşulda metinle desteklenmez. Aynı yıl yaşanmak, sebep olmak demek değildir.',
    takeaway: 'Çıkarım sorularında “tek”, “kesinlikle”, “ilk”, “her zaman” gibi mutlak sözcükler taşıyan seçenekleri metinle tek tek sına.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Avrupa’nın baskısı, Osmanlı’nın arayışı',
    range: '1789–1912',
    body:
      'Fransız İhtilali’nin yaydığı milliyetçilik ve Sanayi İnkılabı’nın doğurduğu sömürgecilik, çok uluslu ve mali açıdan zayıflamış Osmanlı Devleti’ni iki yönden sıkıştırdı. Devlet Tanzimat, Islahat ve Meşrutiyet ile hukuk güvencesi, eşitlik ve meclis getirerek dağılmayı durdurmaya çalıştı; aydınlar Osmanlıcılık, İslamcılık, Türkçülük ve Batıcılık ile kurtuluş yolu aradı. 20. yüzyıla girildiğinde Osmanlı hâlâ geniş topraklara sahipti; ama borç, toprak kaybı ve iç çözülme onu Birinci Dünya Savaşı’na zayıf bir hâlde götürüyordu.',
    turning_points: [
      '1789 · Fransız İhtilali',
      '1839 · Tanzimat Fermanı',
      '1856 · Islahat Fermanı',
      '1876 · Kanun-ı Esasi ve I. Meşrutiyet',
      '1881 · Düyun-u Umumiye',
      '1908 · II. Meşrutiyet',
      '1912 · Uşi Antlaşması',
    ],
  },
  summary: [
    'Fransız İhtilali eşitlik, özgürlük ve **milliyetçilik** fikirlerini yaydı; milliyetçilik çok uluslu Osmanlı için dağılma tehlikesi demekti.',
    '**Sanayi İnkılabı** ham madde ve pazar ihtiyacı doğurdu; bu ihtiyaç **sömürgeciliği** hızlandırdı ve Osmanlı’yı toprak ve ekonomi kaybına uğrattı.',
    '**Tanzimat (1839):** can, mal, namus güvencesi ve kanun üstünlüğü. **Islahat (1856):** gayrimüslimlere eşit haklar, dış müdahaleyi önleme.',
    '**Kanun-ı Esasi (1876):** ilk anayasa ve I. Meşrutiyet; halk ilk kez seçilmiş temsilcilerle yönetime katıldı. Meclis 1878’de kapatıldı, 1908’de II. Meşrutiyet ile yeniden açıldı.',
    'Borçlar ödenemeyince 1881’de **Düyun-u Umumiye** kuruldu; ekonomik bağımsızlık zedelendi.',
    'Kayıplarda Balkanlar’da milliyetçilik, Kuzey Afrika’da sömürgecilik ağır bastı; ama her kayıpta birden çok etken vardı.',
    'Fikir akımları: **Osmanlıcılık** herkesi, **İslamcılık** Müslümanları, **Türkçülük** Türkleri birleştirmek istedi; **Batıcılık** kurtuluşu çağdaş uygarlıkta gördü.',
    'Bu fikir ortamı ve yenilgiler, Mustafa Kemal’in yetiştiği kuşağın düşüncesini biçimlendirdi.',
  ],
  quizzes: [
    {
      question:
        'Osmanlı Devleti’nde Müslüman ve gayrimüslim tebaa arasındaki eşitliği genişleten ve Avrupa devletlerinin iç işlere karışmasını önlemeyi amaçlayan belge hangisidir?',
      options: ['Tanzimat Fermanı', 'Islahat Fermanı', 'Kanun-ı Esasi', 'Balta Limanı Antlaşması'],
      answer_index: 1,
      explanation:
        'Islahat Fermanı (1856) gayrimüslimlere Müslümanlarla eşit haklar tanıdı ve dış müdahaleyi önlemeyi amaçladı. Tanzimat genel bir hukuk güvencesi getirdi, Kanun-ı Esasi anayasa ve meclis kurdu, Balta Limanı ise bir ticaret antlaşmasıdır.',
    },
    {
      question: 'Aşağıdakilerden hangisi, Osmanlı Devleti’nin toprak kaybında sömürgeciliğin ağır bastığı bir örnektir?',
      options: ['Yunanistan’ın bağımsızlığı', 'Bulgaristan’ın bağımsızlığı', 'Cezayir’in Fransa tarafından işgali', 'Girit’in Yunanistan’a bağlandığını ilan etmesi'],
      answer_index: 2,
      explanation:
        'Cezayir’i yerel bir bağımsızlık hareketi değil, bir Avrupa devleti olan Fransa işgal etti; bu sömürgeciliğin örneğidir. Diğer üç seçenekte yerel toplulukların milliyetçi hareketleri ağır basar.',
    },
    {
      question:
        'Bir aydın “Devleti kurtarmanın yolu, dinleri ve milletleri ne olursa olsun bütün tebaayı ortak bir vatan ve kanun etrafında birleştirmektir.” diyorsa hangi fikir akımını savunuyordur?',
      options: ['Osmanlıcılık', 'İslamcılık', 'Türkçülük', 'Batıcılık'],
      answer_index: 0,
      explanation:
        'Din ve milliyet ayrımı yapmadan herkesi birleştirme hedefi Osmanlıcılığın temel fikridir. İslamcılık yalnız Müslümanları, Türkçülük Türkleri birleştirmeyi hedefler; Batıcılık ise bir birleştirme bağı değil, çağdaşlaşma yolu önerir.',
    },
    {
      question: 'I. Meşrutiyet’in Osmanlı siyasi hayatına getirdiği en önemli yenilik hangisidir?',
      options: ['Padişahlığın kaldırılması', 'Halkın seçilmiş temsilcilerle yönetime katılması', 'Halifeliğin kaldırılması', 'Kadınlara seçme hakkı tanınması'],
      answer_index: 1,
      explanation:
        'Kanun-ı Esasi ve Meclis-i Mebusan ile halk ilk kez seçilmiş temsilcileri aracılığıyla yönetime katıldı. Padişahlık ve halifelik Cumhuriyet döneminde kaldırıldı; kadınlara seçme hakkı da Cumhuriyet döneminde tanındı.',
    },
  ],
  next: ['Mustafa Kemal’in Yetişmesi: Çocukluk, Öğrenim, Fikir Hayatı', 'Mustafa Kemal’in Askerlik Hayatı', 'I. Dünya Savaşı: Sebepler ve Bloklaşma'],
})

export default lesson
