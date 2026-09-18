import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.1 Bir Kahraman Doğuyor · 2. ders
 * Kazanım : İTA.8.1.2 · İTA.8.1.3
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.1.2 → "Mustafa Kemal'in kişilik gelişimi ve yetişmesinde rol
 *               oynayan şahsiyetlere değinilir."
 *   İTA.8.1.3 → açıklama yok.
 *
 * KAPSAM KARARI
 * İTA.8.1.2 bir "çıkarımlarda bulunur" kazanımıdır. Ders bu yüzden olayları
 * sıralamakla yetinmez; her olayı KANIT → ÇIKARIM → AŞIRI ÇIKARIM ayrımıyla
 * işler. Sonradan bilineni geçmişe yükleme ("çocukken Cumhuriyet'i
 * planlıyordu") açıkça yanlış çıkarım olarak öğretilir.
 *
 * DOĞRULAMA NOTU
 * Babası Ali Rıza Efendi'nin ölüm yılı resmî kaynaklarda bile farklıdır
 * (MSB Ata sayfaları 1886 ve 1888; Atatürk Ansiklopedisi 1886 ve 1893).
 * Derse yıl yazılmadı. Harbiye'deki sıralama gibi tek kaynaklı sayılar da
 * kullanılmadı. Kayıt: LGS_KAYNAK_KAYDI.md §7.
 */

const SLUG = 'lgs-tarih-mustafa-kemalin-yetismesi'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Bir Kahraman Doğuyor',
  order: 2,
  title: 'Mustafa Kemal’in Yetişmesi: Aile, Okul, Şehir ve Fikirler',
  subtitle:
    'Bir kişilik tek bir anda oluşmaz. Selanik’teki bir okul tartışmasından Manastır’daki bir tarih dersine kadar her adım, sonraki kararlarında iz bıraktı.',
  minutes: 45,
  kazanimlar: ['İTA.8.1.2', 'İTA.8.1.3'],
  kapsamNotu:
    'Kaynaklar arasında farklı verilen bilgiler (örneğin babasının ölüm yılı) bilinçli olarak yazılmadı. Ders, olaylardan kişilik özelliklerine çıkarım yapmayı öğretir; sonradan yaşananları çocukluk yıllarına yükleyen yorumlar yanlış çıkarım olarak işaretlenir.',
  prerequisites: [
    {
      topic: '20. Yüzyıl Başında Osmanlı Devleti ve Fikir Akımları (önceki ders)',
      why: 'Mustafa Kemal’in büyüdüğü dönemin sorunlarını ve tartışılan fikirleri bilmek, onu neyin etkilediğini anlamayı kolaylaştırır.',
    },
    {
      topic: 'Kanıttan çıkarım yapma',
      why: 'Bu derste bir olaydan kişilik özelliği çıkaracaksın; kanıtın neyi desteklediğini, neyi desteklemediğini ayırmak gerekir.',
    },
  ],
  outcomes: [
    'Mustafa Kemal’in çocukluk ve öğrenim hayatını okul sırasıyla anlatabileceksin.',
    'Ailesinin, öğretmenlerinin ve arkadaşlarının kişiliğine etkisini örneklerle açıklayabileceksin.',
    'Bir olaydan kişilik özelliğine çıkarım yapabilecek, aşırı çıkarımı ayırt edebileceksin.',
    'Fikir hayatını etkileyen yazar ve düşünürleri, ondan aldığı fikirle eşleştirebileceksin.',
    'Selanik, Manastır, İstanbul ve Şam’ın onun düşünce dünyasına katkısını açıklayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Bir kişilik nereden gelir?',
    lead:
      'Bir önceki derste Mustafa Kemal’in doğduğu dünyayı gördün. Şimdi o dünyanın içinde büyüyen çocuğa bakıyoruz: hangi evde, hangi okullarda, kimlerle ve hangi kitaplarla yetişti?',
    body:
      'Mustafa Kemal 1881’de Selanik’te doğdu. Babası Ali Rıza Efendi, annesi Zübeyde Hanım’dı. Ali Rıza Efendi bir süre gümrük memurluğu yapmış, sonra kereste ticaretine başlamıştı. Ailenin altı çocuğundan yalnız Mustafa ile kız kardeşi Makbule yetişkinlik yaşına ulaştı; diğer kardeşler küçük yaşta öldü.\n\n' +
      'Bir insanın kişiliği tek bir kaynaktan beslenmez. Mustafa Kemal’inkini de dört kaynaktan izleyebilirsin: **insanlar** (ailesi, öğretmenleri, arkadaşları), **yerler** (Selanik, Manastır, İstanbul, Şam), **kitaplar** (okuduğu şairler ve düşünürler) ve **olaylar** (tanık olduğu savaşlar, isyanlar, yönetime karşı tepkiler). Bu ders dördünü de ele alır.\n\n' +
      'Bu dersin asıl becerisi **çıkarım** yapmaktır. Program senden Mustafa Kemal’in hayatını ezberlemeni değil, hayatındaki olaylardan kişilik özellikleri hakkında sonuç çıkarmanı ister. Bunun bir kuralı var: Çıkardığın sonuç, olayın gerçekten desteklediği kadar olmalı. “Annesi istemese de askerî okula girdi” bilgisi kararlılığı gösterir; “ailesini dinlemezdi” sonucunu göstermez.',
  },
  concepts: [
    {
      term: 'Kişilik özelliği',
      body: 'Bir insanın farklı durumlarda tekrar tekrar gösterdiği tutum ve davranış eğilimi: kararlılık, çalışkanlık, cesaret, akılcılık gibi. Tek bir davranıştan değil, davranışların tekrarından anlaşılır.',
    },
    {
      term: 'Çıkarım',
      body: 'Verilen bilgiden, bilgide açıkça yazmayan ama bilginin desteklediği bir sonuca ulaşmak. Bilginin desteklemediği sonuca ulaşmak ise aşırı çıkarımdır.',
    },
    {
      term: 'Mahalle mektebi ve yeni yöntem (usul-i cedit)',
      body: 'Mahalle mektebi, geleneksel yöntemle okuma ve din bilgisi öğreten okuldu. Yeni yöntemle eğitim veren okullar ise harfleri ezber yerine daha kolay yollarla ve ders araç gereçleriyle öğretiyordu. Selanik’teki Şemsi Efendi Mektebi bunlardan biriydi.',
    },
    {
      term: 'Rüştiye ve idadi',
      body: 'Osmanlı eğitim sisteminde rüştiye bugünkü ortaokula, idadi liseye yakın bir kademeydi. Askerî rüştiye ve askerî idadiler subay yetiştiren okullara öğrenci hazırlıyordu.',
    },
    {
      term: 'Kurmay subay',
      body: 'Harp Akademisi’ni bitirerek ordunun planlama ve yönetim işlerinde görev alabilecek düzeyde yetişmiş subay. Mustafa Kemal 1905’te kurmay yüzbaşı olarak mezun oldu.',
    },
  ],
  why: {
    question: 'Bir liderin çocukluğunu ve okul yıllarını neden öğreniyoruz?',
    body:
      'Çünkü büyük kararların arkasında insanlar vardır ve insanlar yetiştikleri ortamın izlerini taşır. Mustafa Kemal’in ileride eğitime, bilime ve bağımsızlığa verdiği önemi anlamak için onun bu değerlerle nerede ve nasıl tanıştığını bilmek işe yarar.\n\n' +
      'Ama dikkat: Çocukluk kaderi belirlemez. Aynı okulda okuyan, aynı kitapları okuyan pek çok kişi farklı yollar seçti. Çocukluk yılları bize “Mustafa Kemal ileride kesin şunu yapacaktı” demez; “Hangi fikirlerle ve hangi deneyimlerle tanıştı?” sorusunun cevabını verir.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Selanik’ten Şam’a (1881–1905)',
    lead: 'Her satırda bir yer, bir okul ya da bir görev ve orada karşılaştığı bir etki var. Sıralamayı ezberleme; her adımda neyin değiştiğine bak.',
    intro: 'Mustafa Kemal’in öğrenim hayatı, sivil okullardan askerî okullara uzanan bir yoldur. Yolun yönünü değiştiren kararların çoğu onun kendi kararlarıdır.',
    items: [
      { title: '1881 · Selanik’te doğdu', body: 'Babası Ali Rıza Efendi, annesi Zübeyde Hanım. Liman ve ticaret şehri Selanik’te, farklı din ve milletlerden insanların arasında büyüdü.' },
      { title: '1886 · Okula başladı', body: 'Annesinin isteğiyle önce mahalle mektebine başladı; birkaç gün sonra babası onu yeni yöntemle eğitim veren Şemsi Efendi Mektebi’ne yazdırdı.' },
      { title: 'Çocukluk yılları · Babasını kaybetti', body: 'Babasının ölümünden sonra aile geçim sıkıntısına düştü. Annesi ve kız kardeşiyle birlikte dayısı Hüseyin Ağa’nın çalıştığı Langaza’daki çiftliğe gitti; okula bir süre ara verdi.' },
      { title: 'Selanik’e dönüş · Mülkiye Rüştiyesi', body: 'Halası Emine Hanım’ın çağırmasıyla Selanik’e döndü ve Mülkiye Rüştiyesi’ne başladı. Bir öğretmeninin kendisine kötü davranması üzerine bu okulu bıraktı.' },
      { title: '1893 · Selanik Askerî Rüştiyesi', body: 'Annesi istemese de askerî rüştiyeye girdi. Matematik öğretmeni Yüzbaşı Mustafa Bey ona “Kemal” adını verdi.' },
      { title: '1896 · Manastır Askerî İdadisi', body: 'Yatılı okudu. Arkadaşı Ömer Naci ile edebiyata ilgi duydu; tarih öğretmeni Mehmet Tevfik Bey’den tarih sevgisi kazandı; tatillerde Fransızca çalıştı.' },
      { title: '1897 · Osmanlı–Yunan Savaşı', body: 'Osmanlı ordusu savaş alanında kazandı; ama büyük devletler araya girdi ve Osmanlı barışta beklediğini alamadı. Manastır’daki öğrenciler bu gelişmeleri yakından izledi.' },
      { title: '1899 · İstanbul’da Harp Okulu (Harbiye)', body: '13 Mart 1899’da başladı. Başkentte ülke sorunlarını yakından izledi; arkadaşlarıyla gizlice el yazısıyla bir gazete çıkardı.' },
      { title: '1902 · Harp Akademisi', body: 'Harp Okulu’nu teğmen rütbesiyle bitirip kurmay subay yetiştiren Harp Akademisi’ne geçti.' },
      { title: '1905 · Kurmay yüzbaşı; Şam', body: '11 Ocak 1905’te Harp Akademisi’ni kurmay yüzbaşı olarak bitirdi ve Şam’daki 5. Ordu’ya atandı.' },
      { title: 'Şam yılları · Vatan ve Hürriyet Cemiyeti', body: 'Şam’da görevliyken arkadaşlarıyla gizli Vatan ve Hürriyet Cemiyeti’ni kurdu. Düşünceleri ilk kez örgütlü bir işe dönüştü.' },
    ],
    takeaway:
      'Dikkat et: Okul değişikliklerinin çoğunda bir tercih var. Askerî okulu kendisi istedi, Fransızcayı kendi çabasıyla ilerletti, yasaklanan fikirleri kendi isteğiyle okudu. Kişiliğini bu tercihlerin toplamı biçimlendirdi.',
    body:
      'Kronolojide iki çizgi yan yana ilerler. Birincisi **öğrenim çizgisi**: mahalle mektebi → Şemsi Efendi → Mülkiye Rüştiyesi → Askerî Rüştiye → Manastır Askerî İdadisi → Harp Okulu → Harp Akademisi. İkincisi **ülke çizgisi**: Balkanlar’da milliyetçi isyanlar, 1897 savaşı, II. Abdülhamid yönetimine karşı yükselen muhalefet ve Arap bölgelerindeki huzursuzluk.\n\n' +
      'İki çizgi Manastır’da ilk kez kesişir. Mustafa Kemal orada yalnız ders çalışmadı; arkadaşlarıyla ve öğretmenleriyle ülkenin geleceğini tartıştı. Harbiye ve Harp Akademisi yıllarında bu tartışmalar derinleşti, Şam’da ise ilk kez örgütlü bir işe dönüştü.',
  },
  map: {
    title: 'Şematik atlas: Mustafa Kemal’in yetiştiği şehirler',
    intro: 'Noktalara dokun: her şehirde ne öğrendiğini ve hangi etkiyle karşılaştığını gör. Çizgiler onun yolculuğunun sırasını gösterir.',
    map_label: 'Şematik gösterim · sınırlar ve uzaklıklar ölçekli değildir',
    layers: [
      { id: 'ogrenim', label: 'Öğrenim yılları', description: 'Selanik, Langaza, Manastır ve İstanbul (1881–1905).', active: true },
      { id: 'gorev', label: 'İlk görev yeri', description: 'Şam (1905).', active: true },
    ],
    regions: [
      { label: 'MAKEDONYA', x: 18, y: 16, tone: 'land' },
      { label: 'EGE DENİZİ', x: 32, y: 70, tone: 'water' },
      { label: 'KARADENİZ', x: 62, y: 16, tone: 'water' },
      { label: 'ANADOLU', x: 66, y: 50, tone: 'land' },
      { label: 'AKDENİZ', x: 50, y: 90, tone: 'water' },
    ],
    locations: [
      { id: 'selanik', label: 'Selanik · 1881', x: 26, y: 46, layer: 'ogrenim', tone: 'brand', detail: 'Doğduğu şehir. Liman ve demir yolu bağlantısı olan bir ticaret merkeziydi; Türk, Rum, Yahudi, Bulgar ve Ermeni topluluklar bir arada yaşıyordu. Farklı kültürleri tanıdı, yeni fikirlere açık bir ortamda büyüdü.' },
      { id: 'langaza', label: 'Langaza · çiftlik', x: 30, y: 24, layer: 'ogrenim', tone: 'muted', detail: 'Babasının ölümünden sonra ailesiyle birlikte dayısının çalıştığı çiftlikte kaldı. Okula ara vermek zorunda kaldı; ailenin geçim sıkıntısını yakından yaşadı.' },
      { id: 'manastir', label: 'Manastır · 1896', x: 10, y: 30, layer: 'ogrenim', tone: 'brand', detail: 'Askerî idadide okudu. Ticaret, yönetim ve ordu merkezi olan bu şehirde Balkan milliyetçi hareketlerini ve Meşrutiyet yanlılarının tartışmalarını yakından gördü. Namık Kemal’i ve Tevfik Fikret’i burada okudu.' },
      { id: 'istanbul', label: 'İstanbul · 1899', x: 50, y: 34, layer: 'ogrenim', tone: 'brand', detail: 'Harp Okulu ve Harp Akademisi yılları. Başkentte ülkenin siyasi gelişmelerini yakından izledi; arkadaşlarıyla gizli gazete çıkardı ve ülke sorunlarını tartıştı.' },
      { id: 'sam', label: 'Şam · 1905', x: 84, y: 82, layer: 'gorev', tone: 'accent', detail: 'İlk görev yeri. Osmanlı yönetiminden hoşnut olmayan bazı Arap topluluklarının ayrılma isteklerine tanık oldu. Arkadaşlarıyla Vatan ve Hürriyet Cemiyeti’ni kurdu.' },
    ],
    routes: [
      { from: 'selanik', to: 'langaza', label: 'Babasının ölümünden sonra', layer: 'ogrenim', tone: 'muted' },
      { from: 'selanik', to: 'manastir', label: 'Askerî idadiye', layer: 'ogrenim' },
      { from: 'manastir', to: 'istanbul', label: 'Harp Okulu’na', layer: 'ogrenim' },
      { from: 'istanbul', to: 'sam', label: 'İlk görev', layer: 'gorev', tone: 'accent' },
    ],
    insight:
      'Haritadaki yol bir genişleme hikâyesidir: Makedonya’nın çok kültürlü şehirlerinden imparatorluğun başkentine, oradan Arap topraklarına. Her durakta Osmanlı’nın farklı bir sorununu gördü: Balkanlar’da milliyetçilik, İstanbul’da yönetim krizi, Şam’da ayrılıkçılık.',
    source_note:
      'Şehirler ve yıllar; MEB Özel Eğitim ve Rehberlik Hizmetleri Genel Müdürlüğü “Mustafa Kemal’in Hayatı” yayını, MSB “Atatürk Kronolojisi” ve Atatürk Ansiklopedisi esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; sınır ya da ölçek bilgisi taşımaz.',
  },
  dataTable: {
    title: 'Kanıttan çıkarıma: her olay neyi gösterir, neyi göstermez?',
    columns: ['Olay', 'Kanıt ne diyor?', 'Desteklediği çıkarım', 'Aşırı çıkarım (yapılamaz)'],
    rows: [
      ['Okul seçimi tartışması', 'Babası yeni yöntemle eğitim veren okulu istedi; annesinin isteği de gözetildi.', 'Yeniliğe açık ve uzlaşmayı bilen bir aile ortamında büyüdü.', '“Küçük yaşta inkılapçıydı.”'],
      ['Askerî rüştiyeye girmesi', 'Annesi istemese de askerî okulu seçti.', 'Kararlılık; kendi yolunu belirleme isteği.', '“Ailesini hiç dinlemezdi.”'],
      ['“Kemal” adı', 'Matematik öğretmeni başarısı ve olgunluğu nedeniyle bu adı verdi.', 'Çalışkanlık, disiplin, akılcı düşünmeye yatkınlık.', '“Yalnız matematiğe ilgi duyardı.”'],
      ['Fransızca çalışması', 'Zayıf olduğu dili tatillerde ders alarak ilerletti.', 'Azim; eksiğini görüp kapatma; dünyaya açılma isteği.', '“Okulun dil derslerini önemsemezdi.”'],
      ['Namık Kemal ve Tevfik Fikret okuması', 'Vatan ve hürriyet temalı eserleri arkadaşlarıyla gizlice okudu.', 'Vatanseverlik ve özgürlük düşüncesine ilgi.', '“Şair olmak istiyordu.”'],
      ['Mehmet Tevfik Bey’in dersleri', 'Tarih öğretmeninden tarih sevgisi ve bilinci kazandı.', 'Tarih bilinci; geçmişten ders çıkarma.', '“Tarihçi olmak için askerliği bırakmayı düşündü.”'],
      ['Gizli gazete', 'Öğrenciyken arkadaşlarıyla gizlice gazete çıkardı.', 'Cesaret; ülke sorunlarıyla ilgilenme; fikirlerini paylaşma isteği.', '“O yıllarda yönetimi devirmeyi planlıyordu.”'],
      ['Vatan ve Hürriyet Cemiyeti', 'Şam’da arkadaşlarıyla gizli bir cemiyet kurdu.', 'Örgütleyicilik; siyasi sorumluluk alma.', '“Cumhuriyet’i ilan etme kararını Şam’da verdi.”'],
    ],
    caption:
      'Son sütundaki yargıların ortak kusuru: kanıtın söylediğinden fazlasını söylemek ya da sonradan yaşananları geriye taşımak. Çıkarım sorularında bu iki kusuru taşıyan seçenekleri ele.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Mustafa Kemal’in kişiliği nasıl biçimlendi?',
    lead: 'Kişiliği tek bir kişiye ya da tek bir olaya bağlama. Birbirini besleyen etkenleri sırayla izle.',
    intro: 'Aşağıdaki zincirde her halka bir öncekinin üzerine kurulur. Sebepler çok yönlüdür; sonuç tek bir kişilik özelliği değil, özelliklerin bir bileşimidir.',
    steps: [
      { tur: 'sebep', title: 'Aile ortamı', body: 'Yeniliğe açık bir baba, eğitime önem veren ve zor günlerde aileyi ayakta tutan bir anne. Babanın erken ölümü sorumluluk duygusunu erken yaşta geliştirdi.' },
      { tur: 'sebep', title: 'Çok kültürlü şehirler', body: 'Selanik ve Manastır’da farklı din ve milletleri, yeni fikirleri ve milliyetçi hareketleri yakından gördü.' },
      { tur: 'sebep', title: 'Öğretmenler ve arkadaşlar', body: 'Mustafa Bey disiplin ve özgüven, Mehmet Tevfik Bey tarih bilinci, Ömer Naci edebiyat sevgisi kazandırdı.' },
      { tur: 'sebep', title: 'Kitaplar ve düşünürler', body: 'Namık Kemal, Tevfik Fikret, Mehmet Emin ve Ziya Gökalp’in yanında Fransız düşünürleri okudu; vatan, özgürlük, akıl ve halk egemenliği fikirleriyle tanıştı.' },
      { tur: 'gelisme', title: 'Askerî eğitim ve kurmaylık', body: 'Askerî okullarda disiplin, planlama ve sorumluluk alma alışkanlığı kazandı; Harp Akademisi’nde kurmay subay olarak yetişti.' },
      { tur: 'gelisme', title: 'Ülke sorunlarıyla erken tanışma', body: 'Balkan isyanları, 1897 savaşının sonucu, yönetime karşı muhalefet ve Arap bölgelerindeki huzursuzluk onun sorunlara çözüm arayan bir genç subay olmasını hızlandırdı.' },
      { tur: 'sonuc', title: 'Kişilik özellikleri', body: 'Kararlılık, akılcılık, çalışkanlık, vatanseverlik, özgürlükçülük, tarih bilinci, yeniliğe açıklık ve örgütleyicilik.' },
      { tur: 'sonraki-etki', title: 'Sorumluluk alan bir subay', body: 'Şam’da Vatan ve Hürriyet Cemiyeti’ni kurdu. Bu özellikler ileride askerî başarılarında, Millî Mücadele’de ve inkılaplarda yeniden görülecektir.' },
    ],
    inference:
      'Zincirden çıkan ders: Bir kişilik özelliğini açıklarken en az iki etken göster. Örneğin tarih bilinci hem Mehmet Tevfik Bey’in derslerinden hem de Balkanlar’da tanık olduğu olaylardan beslendi.',
    body:
      'Program, Mustafa Kemal’in kişilik gelişiminde rol oynayan şahsiyetlere değinilmesini ister. Bu şahsiyetleri iki gruba ayırmak işini kolaylaştırır.\n\n' +
      '**Yüz yüze tanıdıkları:** Ailesi (Ali Rıza Efendi, Zübeyde Hanım), öğretmenleri (Şemsi Efendi, Yüzbaşı Mustafa Bey, Mehmet Tevfik Bey) ve arkadaşları (Ömer Naci). Bunlar onun alışkanlıklarını, çalışma disiplinini ve ilgi alanlarını biçimlendirdi.\n\n' +
      '**Kitaplardan tanıdıkları:** Namık Kemal, Tevfik Fikret, Mehmet Emin (Yurdakul), Ziya Gökalp ve Fransız düşünürleri. Bunlar onun **fikir hayatını** etkiledi: vatan, özgürlük, millet, akıl ve halk egemenliği gibi kavramlarla bu yazarlar aracılığıyla tanıştı.\n\n' +
      'İki grubu ayırmak soruları çözerken işe yarar: “Kişiliğinin oluşması” ifadesi daha çok aile, öğretmen ve arkadaşları; “fikir hayatı” ifadesi ise yazar, düşünür ve olayları işaret eder.',
  },
  comparison: {
    title: 'Üç şehir, üç etki: Selanik, Manastır, İstanbul',
    columns: ['Selanik (1881–1896)', 'Manastır (1896–1899)', 'İstanbul (1899–1905)'],
    rows: [
      { label: 'Şehrin özelliği', values: ['Liman ve ticaret şehri; demir yolu bağlantısı; çok kültürlü nüfus', 'Makedonya’nın ticaret, yönetim ve ordu merkezi; Balkan isyanlarının ve Meşrutiyet tartışmalarının yoğun olduğu yer', 'İmparatorluğun başkenti; siyasi gelişmelerin merkezi'] },
      { label: 'Orada ne yaptı?', values: ['Mahalle mektebi, Şemsi Efendi Mektebi, Mülkiye ve Askerî Rüştiye', 'Askerî idadide okudu; tatillerde Fransızca çalıştı', 'Harp Okulu ve Harp Akademisi’ni bitirdi; kurmay yüzbaşı oldu'] },
      { label: 'Kimlerle tanıştı?', values: ['Şemsi Efendi, Yüzbaşı Mustafa Bey', 'Ömer Naci, Mehmet Tevfik Bey; kitaplardan Namık Kemal ve Tevfik Fikret', 'Millî Mücadele’de birlikte çalışacağı pek çok subay arkadaşı'] },
      { label: 'Fikir hayatına etkisi', values: ['Farklı kültürleri tanıma, yeniliğe açıklık', 'Vatan ve hürriyet düşüncesi, tarih bilinci, ülke sorunlarına ilgi', 'Ülke sorunlarını tartışma, gizli yayın yoluyla fikirlerini paylaşma'] },
    ],
    insight:
      'Şehirler büyüdükçe Mustafa Kemal’in gördüğü sorunlar da büyüdü: Selanik’te farklılıkları, Manastır’da bu farklılıkların doğurduğu çatışmaları, İstanbul’da devletin yönetim sorunlarını tanıdı.',
  },
  traps: [
    {
      title: 'Sonradan bilineni geçmişe yüklemek',
      wrong: 'Mustafa Kemal daha çocukken Cumhuriyet’i kurmayı planlıyordu.',
      right: 'Çocukluk ve okul yılları onun hangi fikirlerle tanıştığını ve hangi özelliklerin geliştiğini gösterir; ileride ne yapacağını önceden belirlemez.',
      body: 'Bu hata tarih okumada çok yaygındır: Sonucu bildiğimiz için geçmişteki her olayı o sonuca giden bir basamak sanırız. Soruda “o yıllarda … planlamıştır” gibi bir seçenek görürsen kanıtın bunu gerçekten söyleyip söylemediğini sor.',
    },
    {
      title: 'Bir özelliği tek bir kişiye bağlamak',
      wrong: 'Mustafa Kemal’in tarih bilinci yalnızca Mehmet Tevfik Bey’den gelir.',
      right: 'Mehmet Tevfik Bey tarih sevgisini güçlendirdi; ama Balkanlar’da tanık olduğu olaylar, okuduğu kitaplar ve ülkenin durumu da bu bilinci besledi.',
      body: '“Tek”, “yalnız”, “sadece” sözcükleri taşıyan çıkarımlar kişilik konusunda neredeyse her zaman aşırıdır.',
    },
    {
      title: 'Kişiyi yanlış fikirle eşleştirmek',
      wrong: 'Mustafa Kemal cumhuriyet düşüncesini Namık Kemal’den, vatanseverliği Montesquieu’den aldı.',
      right: 'Namık Kemal vatan ve hürriyet sevgisiyle, Montesquieu ise yasama, yürütme ve yargının ayrılması düşüncesi ve cumhuriyetçilikle ilişkilendirilir.',
      body: 'Eşleştirme yaparken kişinin en bilinen fikrini hatırla: Namık Kemal → vatan ve hürriyet; Tevfik Fikret → özgürlük ve yenilik; Mehmet Emin ve Ziya Gökalp → milliyetçilik; Rousseau → halk egemenliği ve yurttaşlık; Montesquieu → güçler ayrılığı ve cumhuriyetçilik; Voltaire → akıl ve bilim.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Onu yetiştiren insanlar',
    lead: 'Programın istediği gibi, Mustafa Kemal’in kişilik gelişiminde rol oynayan şahsiyetlere bakıyoruz. Her kartta “Bu kişi ona ne kattı?” sorusunun cevabını ara.',
    intro: 'İlk yedi kişiyi yüz yüze tanıdı; son dördünü kitaplarından tanıdı. Kartı açınca o kişinin hangi olayla ve hangi özellikle bağlandığını görürsün.',
    figures: [
      {
        name: 'Ali Rıza Efendi',
        period: 'Babası',
        position: 'Gümrük memurluğundan kereste ticaretine geçen baba',
        contribution: 'Oğlunun yeni yöntemle eğitim veren Şemsi Efendi Mektebi’nde okumasını istedi. Eşinin isteğini de kırmamak için onu önce mahalle mektebine, birkaç gün sonra Şemsi Efendi’ye yazdırdı.',
        connections: ['Şemsi Efendi Mektebi', 'Yeni yöntemle eğitim'],
        significance: 'Mustafa Kemal ileride çocukluğundan ilk hatırladığı şeyin bu okul tartışması olduğunu anlatmıştır. Yeniliğe açık aile ortamının ilk kanıtıdır.',
      },
      {
        name: 'Zübeyde Hanım',
        period: 'Annesi',
        position: 'Geleneklerine bağlı, eğitime önem veren anne',
        contribution: 'Oğlunun önce mahalle mektebinde okumasını istedi. Eşinin ölümünden sonra ailesini ayakta tuttu ve oğlunun öğrenimini sürdürmesini istedi. Askerî okula gitmesini başlangıçta istemedi.',
        connections: ['Mahalle mektebi', 'Langaza’daki çiftlik yılları', 'Askerî rüştiye kararı'],
        significance: 'Annesiyle farklı düşündüğü askerî okul kararı, Mustafa Kemal’in sevdiği ve saygı duyduğu insanlarla farklı düşündüğünde bile kendi yolunu seçebildiğini gösterir.',
      },
      {
        name: 'Şemsi Efendi',
        period: 'Selanik · ilkokul',
        position: 'Yeni yöntemle eğitim veren okulun kurucusu ve öğretmeni',
        contribution: 'Okulunda okumayı ezber yerine yeni yöntemlerle ve ders araç gereçleriyle öğretti.',
        connections: ['Şemsi Efendi Mektebi', 'Yeni yöntem (usul-i cedit)'],
        significance: 'Mustafa Kemal’in ilk eğitim deneyimi, geleneksel olanla yeni olanın karşılaştırılmasıyla başladı.',
      },
      {
        name: 'Yüzbaşı Mustafa Bey',
        period: 'Selanik Askerî Rüştiyesi',
        position: 'Matematik öğretmeni',
        contribution: 'Öğrencisinin matematikteki başarısını ve olgunluğunu görerek ona “Kemal” adını verdi. “Kemal” sözcüğü olgunluk, mükemmellik anlamına gelir.',
        connections: ['Askerî rüştiye', '“Kemal” adı'],
        significance: 'Bir öğretmenin gösterdiği güven ve takdir, öğrencinin özgüvenini ve çalışma disiplinini güçlendirdi.',
      },
      {
        name: 'Ömer Naci',
        period: 'Manastır Askerî İdadisi',
        position: 'Sınıf arkadaşı',
        contribution: 'Onun aracılığıyla edebiyata, özellikle şiire ilgi duymaya başladı. Bu ilgi onu Namık Kemal’in ve Tevfik Fikret’in eserlerine yöneltti.',
        connections: ['Edebiyat ve şiir', 'Namık Kemal okumaları'],
        significance: 'Bir arkadaşlığın, bir insanın okuduğu kitapları ve dolayısıyla fikir dünyasını nasıl değiştirebileceğinin örneğidir.',
      },
      {
        name: 'Mehmet Tevfik (Bilge) Bey',
        period: 'Manastır Askerî İdadisi',
        position: 'Tarih öğretmeni (kolağası)',
        contribution: 'Mustafa Kemal’in tarihe, özellikle Türk tarihine ilgi duymasında büyük payı oldu. Mustafa Kemal yıllar sonra bu öğretmenine minnet borçlu olduğunu söyledi.',
        connections: ['Tarih sevgisi ve bilinci', 'Manastır yılları'],
        significance: 'Tarih bilinci, ileride Mustafa Kemal’in tarih araştırmalarına verdiği önemin erken kaynaklarından biridir.',
      },
      {
        name: 'Namık Kemal',
        period: 'Kitaplarından · Manastır yılları',
        position: 'Vatan ve hürriyet şairi',
        contribution: 'Mustafa Kemal onun eserlerini Manastır’da arkadaşlarıyla gizlice okudu, şiirlerini ezberledi.',
        connections: ['Vatanseverlik', 'Hürriyet düşüncesi'],
        significance: 'Vatan ve millet sevgisinin pekişmesinde en çok anılan isimdir.',
      },
      {
        name: 'Tevfik Fikret',
        period: 'Kitaplarından',
        position: 'Şair',
        contribution: 'Özgürlükçü ve yenilikçi şiirleriyle Mustafa Kemal’in sevdiği şairler arasındaydı; Harbiye yıllarında onun şiirlerini sık okuduğu bilinir.',
        connections: ['Özgürlük', 'Yenilikçilik (inkılapçılık)'],
        significance: 'Mustafa Kemal’in yeniliğe ve özgürlüğe bakışını besleyen kaynaklardan biridir.',
      },
      {
        name: 'Mehmet Emin (Yurdakul)',
        period: 'Kitaplarından',
        position: '“Millî Şair” olarak tanınan şair',
        contribution: 'Sade Türkçeyle ve hece ölçüsüyle yazdığı şiirlerde Türk milletini ve millî duyguları işledi.',
        connections: ['Milliyetçilik'],
        significance: 'Mustafa Kemal’in en sevdiği şairler arasında sayılır; millî kimlik düşüncesini besledi.',
      },
      {
        name: 'Ziya Gökalp',
        period: 'Kitaplarından · II. Meşrutiyet yılları',
        position: 'Düşünür; Türkçülüğün kuramcısı',
        contribution: 'Millî kültür, dil ve tarih birliğine dayanan milliyetçilik anlayışını geliştirdi.',
        connections: ['Milliyetçilik', 'Millî kültür'],
        significance: 'Fikirleri, Cumhuriyet döneminin millî kültür çalışmalarında da iz bıraktı.',
      },
      {
        name: 'Fransız Aydınlanma düşünürleri',
        period: 'Kitaplarından · 18. yüzyıl',
        position: 'Rousseau, Montesquieu, Voltaire',
        contribution: 'Mustafa Kemal Fransızcasını ilerletirken bu düşünürlerin eserleriyle tanıştı. Rousseau halkın iradesini ve yurttaşlığı, Montesquieu yasama, yürütme ve yargının birbirinden ayrılmasını, Voltaire aklı ve düşünce özgürlüğünü öne çıkarmıştı.',
        connections: ['Halk egemenliği ve yurttaşlık', 'Güçler ayrılığı ve cumhuriyetçilik', 'Akılcılık ve bilim'],
        significance: 'Fransız İhtilali’ni hazırlayan bu fikirlerle tanışmak, onun “egemenlik kimindir?” sorusunu erken yaşta düşünmesine zemin hazırladı.',
      },
    ],
    takeaway:
      'Yüz yüze tanıdıkları onun alışkanlıklarını ve ilgi alanlarını, kitaplarından tanıdıkları ise fikirlerini biçimlendirdi. Soruda hangisinin sorulduğunu ayırt et.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-olaylar`,
      title: 'Fikir hayatını etkileyen olaylar',
      lead: 'İTA.8.1.3 yalnız kişileri değil, olayları da sorar. Mustafa Kemal’in gençlik yıllarında tanık olduğu olaylar, okuduğu kitaplardaki fikirlere gerçek hayatta karşılık buldu.',
      blocks: [
        {
          id: `${SLUG}-olaylar-anlatim`,
          type: 'prose',
          body:
            '**Balkanlar’daki milliyetçi hareketler.** Manastır’da okurken Makedonya’daki isyanları ve farklı toplulukların Osmanlı’dan ayrılma isteklerini yakından gördü. Önceki derste okuduğun milliyetçilik fikri onun için bir kitap konusu değil, yaşadığı şehrin gerçeğiydi.\n\n' +
            '**1897 Osmanlı–Yunan Savaşı.** Osmanlı ordusu savaş alanında kazandı; ama büyük devletlerin araya girmesiyle barış görüşmelerinde beklediğini alamadı ve Girit’e tanınan özerklik genişletildi. Bu savaş, askerî başarının siyasi başarıya kendiliğinden dönüşmediğini gösteren bir örnekti.\n\n' +
            '**II. Abdülhamid yönetimi ve muhalefet.** Meclisin kapalı olduğu, basının sıkı denetlendiği bu dönemde askerî okullarda Meşrutiyet’i isteyen öğrenciler vardı. Mustafa Kemal ve arkadaşlarının öğrenciyken gizlice gazete çıkarması bu ortamın ürünüdür.\n\n' +
            '**Fransız İhtilali’nin fikirleri.** Fransızca okuyabildiği için eşitlik, özgürlük ve halk egemenliği fikirlerini doğrudan kaynaklarından tanıdı. Bu fikirler, onun yönetim üzerine düşünmesinin temel kavramlarını verdi.\n\n' +
            '**Arap bölgelerindeki huzursuzluk.** Şam’daki ilk görevinde bazı Arap toplulukların Osmanlı yönetiminden ayrılma isteklerine tanık oldu. Balkanlar’da gördüğü sorunun imparatorluğun başka bir köşesinde de yaşandığını gördü.\n\n' +
            'Bu olayların ortak noktası şudur: Hepsi Osmanlı’nın bir arada kalma sorununa işaret ediyordu. Mustafa Kemal’in gençlik yıllarındaki tartışmaları bu soruya cevap arayışıydı.',
        },
        {
          id: `${SLUG}-olaylar-tablo`,
          type: 'table',
          interactive: true,
          title: 'Olay ve etkisi',
          columns: ['Olay', 'Nerede tanık oldu?', 'Onda neyi güçlendirdi?'],
          rows: [
            ['Balkanlar’daki milliyetçi isyanlar', 'Manastır', 'Vatanın bütünlüğü kaygısı; milliyetçiliğin gücünü görme'],
            ['1897 Osmanlı–Yunan Savaşı', 'Manastır', 'Askerî başarının diplomasiyle korunması gerektiği fikri'],
            ['II. Abdülhamid yönetimine karşı muhalefet', 'İstanbul', 'Meşrutiyet ve özgürlük düşüncesi; örgütlenme isteği'],
            ['Fransız İhtilali’nin fikirleri', 'Okuduğu kitaplar', 'Halk egemenliği, eşitlik, özgürlük kavramları'],
            ['Arap bölgelerindeki ayrılıkçı hareketler', 'Şam', 'İmparatorluğun bir arada kalma sorununu farklı bir bölgede görme'],
          ],
          caption: 'Üçüncü sütun bir yorumdur; olayların onun düşüncesine etkisi, sonraki davranışlarıyla birlikte değerlendirilerek çıkarılmıştır.',
        },
        {
          id: `${SLUG}-olaylar-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Dört şehir, dört ders',
          body: 'Selanik → farklılıkları tanıdı · Manastır → vatan ve tarih bilinci kazandı · İstanbul → ülke sorunlarını tartıştı · Şam → ilk kez örgütlendi.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Mustafa Kemal’in çocukluğunu en çok onun kendi anlattıklarından biliyoruz. Bu tür kaynaklar değerlidir; ama nasıl okunacağını bilmek gerekir.',
    intro:
      'Bir **hatıra** birincil kaynaktır: olayı yaşayan kişi anlatır. Ama çoğu zaman olaydan yıllar sonra anlatılır. Bu yüzden hatırada iki şey birlikte bulunur: olayın kendisi ve anlatanın o günkü bakışı. İyi bir okur ikisini ayırır.\n\n' +
      'Aşağıdaki ilk metin Mustafa Kemal’in kendi hatırasıdır; ikinci metin ise bir değerlendirme metnidir. Her iki metnin de niteliği başında yazılıdır.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in çocukluk hatırası',
        kunye: 'Mustafa Kemal Paşa’nın gazeteci Ahmet Emin (Yalman)’a anlattıkları; Vakit gazetesi, Ocak 1922.',
        nitelik: 'DRKOÇ sadeleştirmesi. Hatıranın ilgili bölümü günümüz Türkçesiyle özetlenmiştir; birebir alıntı değildir.',
        metin:
          'Çocukluğumdan ilk hatırladığım şey okula başlama meselesidir. Annem geleneksel yöntemle eğitim veren mahalle mektebine gitmemi istiyordu. Babam ise yeni açılan Şemsi Efendi Mektebi’nde yeni yöntemle okumamı istiyordu. Babam bu işi ustaca çözdü: Önce mahalle mektebine başladım, böylece annemin gönlü oldu. Birkaç gün sonra da Şemsi Efendi Mektebi’ne yazıldım.',
        soru: 'Bu hatıradan Mustafa Kemal’in ailesi hakkında hangi çıkarımlar yapılabilir? Hatıranın bir kaynak olarak sınırı nedir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olayı yaşayan kişi anlatıyor: birincil kaynak. Ancak olay 1886’da yaşandı, hatıra 1922’de anlatıldı; arada otuz yılı aşkın bir süre var.' },
          { title: 'Açıkça söyleneni ayır', body: 'Anne ve baba farklı okul istedi; baba iki isteği de gözeten bir çözüm buldu; çocuk sonunda yeni yöntemli okula gitti.' },
          { title: 'Çıkarımı kur', body: 'Aile eğitime önem veriyordu. Baba yeniliğe açıktı. Ailede farklı görüşler uzlaşmayla çözülebiliyordu. O dönemde Osmanlı’da farklı yöntemlerle eğitim veren okullar bir arada bulunuyordu.' },
          { title: 'Sınırı gör', body: 'Hatıra, anlatıldığı yıllardaki bakışı da taşıyabilir; ayrıntılar zamanla değişmiş olabilir. Bu yüzden hatıradaki olay başka kaynaklarla karşılaştırılır. Bu olay MEB ve Atatürk Ansiklopedisi kaynaklarında da aynı biçimde yer alır.' },
        ],
        cevap: 'Hatıradan ailenin eğitime önem verdiği, babanın yeniliğe açık olduğu ve ailede farklı görüşlerin uzlaşmayla çözüldüğü çıkarılabilir. Hatıranın sınırı, olaydan yıllar sonra anlatılmış olmasıdır; bu yüzden başka kaynaklarla karşılaştırılması gerekir.',
        cikarim: '“Babası gelenekçiydi” gibi bir seçenek bu hatırayla çelişir: Metinde gelenekçi tercih annenin, yenilikçi tercih babanındır. Kimin neyi istediğini karıştırma.',
      },
      {
        tur: 'ikincil',
        baslik: 'Bir değerlendirme metni',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir biyografi kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Mustafa Kemal 1896’da Manastır Askerî İdadisi’ne girdiğinde Makedonya karışıklık içindeydi. Okulda öğretmenleri ve arkadaşlarıyla ülke meselelerini tartıştı, Namık Kemal’in şiirlerini gizlice okudu. Manastır yılları, onun vatan ve özgürlük düşüncesinin kitaplardan çıkıp hayatın içine girdiği yıllardı.',
        soru: 'Metindeki olgu cümlelerini ve yorum cümlesini ayır. Son cümleye katılmak için hangi kanıtlara bakardın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Metin olaylardan sonra, onları değerlendiren biri tarafından yazılmıştır: ikincil kaynak.' },
          { title: 'Olguları ayır', body: '1896’da Manastır Askerî İdadisi’ne girmesi, Makedonya’daki karışıklık, ülke meselelerini tartışması ve Namık Kemal’i gizlice okuması başka kaynaklarla doğrulanabilen olgulardır.' },
          { title: 'Yorumu ayır', body: '“Vatan ve özgürlük düşüncesinin kitaplardan çıkıp hayatın içine girdiği yıllar” ifadesi yazarın değerlendirmesidir.' },
          { title: 'Yorumu kanıtla sına', body: 'Bu yoruma katılmak için Manastır’dan sonraki davranışlarına bakarsın: Harbiye’de gizli gazete çıkarması ve Şam’da gizli bir cemiyet kurması, düşüncelerini eyleme dönüştürdüğünü gösterir.' },
        ],
        cevap: 'Olgular: 1896’da Manastır’a girmesi, Makedonya’daki karışıklık, tartışmalar ve gizli okumalar. Yorum: Manastır yıllarının düşüncelerini hayatın içine taşıdığı değerlendirmesi. Bu yorum, sonraki yıllardaki gizli gazete ve Vatan ve Hürriyet Cemiyeti gibi kanıtlarla desteklenebilir.',
        cikarim: 'Bir yoruma katılıp katılmayacağına karar verirken metnin dışındaki kanıtları da düşün. İyi bir yorum, sonraki olaylarla tutarlıdır.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Olaydan kişilik özelliğine',
      prompt:
        'Mustafa Kemal Manastır Askerî İdadisi’nde yabancı dil derslerinde zayıf olduğunu fark etti. Bir kurmay subayın yabancı dil bilmesi gerektiğine inandığı için tatillerde Selanik’te ders alarak Fransızcasını geliştirdi. Bu durum onun hangi kişilik özelliklerini gösterir?',
      steps: [
        { title: 'Ne yaptığına bak', body: 'Zayıf olduğu bir alanı fark etti ve tatilini onu kapatmak için kullandı.' },
        { title: 'Neden yaptığına bak', body: 'Mesleğinin gelecekte ne gerektireceğini düşündü.' },
        { title: 'Eylemi özelliğe çevir', body: 'Eksiğini kapatmak için çaba göstermek azim ve çalışkanlığı; geleceğin gerektirdiğini önceden görmek ileri görüşlülüğü gösterir.' },
        { title: 'Aşırı çıkarımı ele', body: '“Okulu önemsemezdi” ya da “Yalnız Fransızcaya ilgi duyardı” sonuçları bu bilgiden çıkmaz.' },
      ],
      answer: 'Azim, çalışkanlık ve ileri görüşlülük. Ayrıca Fransızca öğrenmesi, Fransız düşünürlerini kendi dillerinden okumasının yolunu açtı.',
      takeaway: 'Kişilik sorularında önce kişinin ne yaptığını, sonra neden yaptığını bul; özellik bu ikisinin birleşiminden çıkar.',
    },
    {
      title: 'Şehirden fikre',
      prompt:
        'Selanik; liman ve demir yolu bağlantısı olan, farklı din ve milletlerden insanların birlikte yaşadığı bir ticaret şehriydi. Bu ortamın Mustafa Kemal’in düşünce dünyasına hangi katkıları yapmış olabileceğini açıkla.',
      steps: [
        { title: 'Şehrin özelliklerini ayır', body: 'Ticaret ve ulaşım merkezi (dış dünyayla bağlantı) + çok kültürlü nüfus (farklılıklar).' },
        { title: 'Her özelliği bir etkiyle eşleştir', body: 'Dış dünyayla bağlantı → yeni fikirlerin şehre kolay ulaşması; çok kültürlülük → farklı kültürleri tanıma, milliyetçi hareketleri yakından görme.' },
        { title: 'Sonucu yaz', body: 'Yeniliğe açık, farklı görüşleri tanıyan ve milliyetçiliğin gücünü erken fark eden bir kişilik gelişmesine ortam hazırlamış olabilir.' },
      ],
      answer: 'Selanik, Mustafa Kemal’in yeni fikirlerle erken tanışmasına, farklı kültürleri tanımasına ve milliyetçi hareketlerin etkisini yakından görmesine ortam hazırladı.',
      takeaway: '“Ortam hazırlamış olabilir” ifadesi bilinçli seçildi: Şehir bir etkendir, tek başına sonucu belirlemez.',
    },
    {
      title: 'Düşünürü fikirle eşleştir',
      prompt:
        'Aşağıdaki fikirleri Mustafa Kemal’in fikir hayatını etkileyen kişilerle eşleştir:\n\n- a) Vatan ve hürriyet sevgisi\n- b) Yasama, yürütme ve yargının ayrılması\n- c) Aklın ve bilimin önemi\n- d) Millî kültüre dayanan milliyetçilik',
      steps: [
        { title: 'a', body: 'Vatan ve hürriyet şairi olarak tanınan Namık Kemal.' },
        { title: 'b', body: 'Güçler ayrılığı düşüncesiyle tanınan Montesquieu.' },
        { title: 'c', body: 'Akıl ve düşünce özgürlüğünü savunan Voltaire.' },
        { title: 'd', body: 'Türkçülüğün kuramcısı Ziya Gökalp.' },
      ],
      answer: 'a) Namık Kemal · b) Montesquieu · c) Voltaire · d) Ziya Gökalp.',
      takeaway: 'Eşleştirmede her kişinin en bilinen fikrini anahtar olarak kullan; bir kişiye birden fazla fikir bağlanabilir ama anahtar fikir soruyu çözer.',
    },
  ],
  questionClue: {
    concept: 'Soruda kişilik özelliği çıkarımını nasıl yaparım?',
    statement: 'Soru Mustafa Kemal’in hayatından bir olay verip “Bu durum onun hangi özelliğini gösterir?” ya da “Hangisine ulaşılabilir?” diye sorabilir.',
    clues: [
      'Kişinin ne YAPTIĞINI bul: seçim, çaba, risk, sorumluluk',
      'Eylemi tek kelimelik bir özelliğe çevir: kararlılık, azim, cesaret, akılcılık',
      'Seçeneğin olayla doğrudan desteklenip desteklenmediğini sına',
      'Sonradan yaşananları geriye taşıyan seçenekleri ele',
    ],
    reasoning: 'Doğru seçenek, olayda görülen davranıştan tek adımda ulaşılan özelliktir. İki üç adım atlayan, geleceği tahmin eden ya da “yalnız, tek, hiç” gibi mutlak sözcükler taşıyan seçenekler aşırı çıkarımdır.',
    boundary: 'Dikkat: “Kişiliğinin oluşması” ifadesi aile, öğretmen, arkadaş ve şehirleri; “fikir hayatı” ifadesi ise yazar, düşünür ve olayları işaret eder. Soru kökündeki bu ifadeyi atlama.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'Bu iki kazanım bir hatıra, bir öğretmen anısı, bir şehir tanımı ya da bir okul listesi verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Bir olaydan kişilik özelliği çıkarma',
      'Hatıradan aile ya da dönem hakkında çıkarım yapma',
      'Okulları kronolojik sıraya koyma',
      'Yazar ya da düşünürü etkilediği fikirle eşleştirme',
      'Şehrin özelliğinden fikir hayatına etkisini bulma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Mustafa Kemal askerî okula annesi istemese de girdi. Bu bilgiden “Mustafa Kemal ailesine saygı duymazdı.” sonucu çıkarılabilir mi?',
      hint: 'Kanıt kararlılık hakkında mı, saygı hakkında mı bilgi veriyor?',
      answer: 'Çıkarılamaz. Bilgi yalnızca onun kendi mesleğini seçmekte kararlı olduğunu gösterir. Saygı hakkında bir şey söylemez; üstelik Mustafa Kemal’in annesine bağlılığını gösteren pek çok kanıt vardır. Bu bir aşırı çıkarımdır.',
    },
    {
      prompt: 'Öğrencilerin gizlice gazete çıkarması, II. Abdülhamid döneminde neden risk taşıyordu? Bu riski almak Mustafa Kemal hakkında neyi gösterir?',
      hint: 'Önceki derste meclisin ne zaman kapatıldığını hatırla.',
      answer: 'Meclisin kapalı olduğu ve basının sıkı denetlendiği bir dönemde yönetimi eleştiren yayınlar ağır sonuçlar doğurabilirdi; okuldan uzaklaştırılma bile bir subay adayının meslek hayatını bitirebilirdi. Bu riski alması cesaretini ve ülke sorunlarına ilgisini gösterir.',
    },
    {
      prompt: 'Şam’daki ilk görev, Mustafa Kemal’e Osmanlı Devleti’nin hangi sorununu farklı bir bölgede yeniden gösterdi?',
      answer: 'Bir arada kalma sorununu: Balkanlar’da milliyetçi hareketlerle gördüğü ayrılma isteğini Şam’da bazı Arap toplulukları arasında da gördü. Bu, sorunun tek bir bölgeye ait olmadığını, imparatorluğun geneline yayıldığını gösteriyordu.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.1.2 bir “çıkarımlarda bulunur” kazanımıdır: öğrenciden olayları saymasını değil, olaylardan kişilik özellikleri hakkında sonuç çıkarmasını ister. İTA.8.1.3 ise bir “kavrar” kazanımıdır: fikir hayatını etkileyen kişi ve olayları tanımayı ve etkilerini açıklamayı ister. Bu kazanımlara dayanan bir soru bir hatıra ya da biyografik bilgi verip ondan ulaşılabilecek sonucu sorabilir.',
    measures: [
      'Çocukluk ve öğrenim olaylarından kişilik özelliği çıkarma',
      'Aşırı çıkarımı ve geriye dönük yorumu ayırt etme',
      'Aile, öğretmen ve arkadaşların etkisini açıklama',
      'Yazar ve düşünürleri fikirlerle eşleştirme',
      'Yaşadığı şehirlerin ve tanık olduğu olayların etkisini açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Manastır yılları',
    passage:
      'Mustafa Kemal 1896’da Manastır Askerî İdadisi’ne girdi. O yıllarda Manastır, Balkanlar’daki milliyetçi hareketlerin etkisini yoğun biçimde yaşıyordu. Mustafa Kemal okulda arkadaşları ve öğretmenleriyle ülkenin sorunlarını tartıştı, Namık Kemal’in vatan ve hürriyet temalı eserlerini arkadaşlarıyla gizlice okudu. Tarih öğretmeni Mehmet Tevfik Bey’in derslerinden tarih sevgisi kazandı.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Manastır yıllarında Mustafa Kemal’in ülke sorunlarına ilgisi artmıştır.', explanation: 'Doğru. Ülke sorunlarını tartışması ve vatan temalı eserleri okuması bu ilginin kanıtıdır.' },
      { text: 'Mustafa Kemal askerlik mesleğini Manastır’da seçmiştir.', explanation: 'Metin bunu söylemez; üstelik o, askerî okula daha önce Selanik’teki Askerî Rüştiye ile başlamıştı. Manastır’a zaten askerî öğrenci olarak gitti.' },
      { text: 'Mustafa Kemal Cumhuriyet’i ilan etme kararını Manastır yıllarında vermiştir.', explanation: 'Sonradan yaşanan bir olayı geriye taşıyan aşırı bir çıkarımdır. Metinde böyle bir karardan söz edilmez.' },
      { text: 'Mustafa Kemal’in tarih sevgisi yalnızca Mehmet Tevfik Bey’in etkisiyle oluşmuştur.', explanation: 'Metin öğretmenin etkisini söyler ama “yalnızca” demez. Tanık olduğu olaylar ve okuduğu kitaplar da bu sevgiyi beslemiş olabilir; “yalnızca” ifadesi metnin ötesine geçer.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. Metin üç bilgi veriyor: tartışmalar, gizli okumalar, tarih dersleri. Doğru seçenek bu bilgilerin ortak sonucunu, abartmadan söyleyendir.',
    critical_point: 'En güçlü çeldirici dördüncü seçenektir: İlk yarısı metinde vardır (öğretmenin etkisi), ama “yalnızca” sözcüğü onu yanlışa çevirir. Kişilik ve fikir sorularında tek etkenli seçeneklere şüpheyle yaklaş.',
    takeaway: 'Doğru seçenek metnin bütün bilgileriyle uyumlu, hiçbir bilgiyle çelişmeyen ve metnin ötesine geçmeyen seçenektir.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Bir subayın yetişmesi',
    range: '1881–1905',
    body:
      'Selanik’te yeniliğe açık bir aile ortamında doğan Mustafa Kemal, babasını erken yaşta kaybetti ve zor bir dönem geçirdi. Askerî okulu kendisi seçti; öğretmenlerinin güveni, arkadaşlarının yönlendirmesi ve okuduğu kitaplarla kişiliğini geliştirdi. Manastır’da vatan ve tarih bilinci, İstanbul’da ülke sorunlarıyla tanışıklık kazandı; Şam’da ise düşüncelerini ilk kez örgütlü bir işe dönüştürdü. 1905’te kurmay yüzbaşı olduğunda, sorunlara çözüm arayan, okuyan ve sorumluluk alan bir genç subaydı.',
    turning_points: [
      '1881 · Selanik’te doğdu',
      '1886 · Şemsi Efendi Mektebi',
      '1893 · Selanik Askerî Rüştiyesi, “Kemal” adı',
      '1896 · Manastır Askerî İdadisi',
      '1899 · İstanbul, Harp Okulu',
      '1902 · Harp Akademisi',
      '1905 · Kurmay yüzbaşı, Şam’a atandı',
      'Şam yılları · Vatan ve Hürriyet Cemiyeti',
    ],
  },
  summary: [
    'Okul sırası: mahalle mektebi → Şemsi Efendi Mektebi → Mülkiye Rüştiyesi → Selanik Askerî Rüştiyesi → Manastır Askerî İdadisi → Harp Okulu → Harp Akademisi.',
    '**Ailesi:** Babası yeniliğe açıktı ve yeni yöntemli okulu seçti; annesi eğitime önem veren, zor günlerde aileyi ayakta tutan bir anneydi.',
    '**Öğretmenleri:** Yüzbaşı Mustafa Bey ona “Kemal” adını verdi; Mehmet Tevfik Bey tarih sevgisi kazandırdı.',
    '**Arkadaşı Ömer Naci** onu edebiyata ve şiire yöneltti.',
    '**Fikir hayatını etkileyenler:** Namık Kemal (vatan, hürriyet), Tevfik Fikret (özgürlük, yenilik), Mehmet Emin ve Ziya Gökalp (milliyetçilik), Rousseau, Montesquieu, Voltaire (halk egemenliği, güçler ayrılığı, akıl).',
    '**Şehirler:** Selanik farklılıkları, Manastır vatan ve tarih bilincini, İstanbul ülke sorunlarını, Şam örgütlenmeyi öğretti.',
    'Çıkarım yaparken kanıtın söylediğinden fazlasını söyleme; sonradan yaşananları çocukluk yıllarına yükleme.',
  ],
  quizzes: [
    {
      question: 'Mustafa Kemal’in öğrenim gördüğü okulların doğru sıralaması hangisidir?',
      options: [
        'Selanik Askerî Rüştiyesi → Manastır Askerî İdadisi → Harp Okulu → Harp Akademisi',
        'Manastır Askerî İdadisi → Selanik Askerî Rüştiyesi → Harp Akademisi → Harp Okulu',
        'Harp Okulu → Selanik Askerî Rüştiyesi → Manastır Askerî İdadisi → Harp Akademisi',
        'Selanik Askerî Rüştiyesi → Harp Okulu → Manastır Askerî İdadisi → Harp Akademisi',
      ],
      answer_index: 0,
      explanation: 'Rüştiye (ortaokul düzeyi) idadiden (lise düzeyi) önce gelir; Harp Okulu’nu bitiren subay kurmay olmak için Harp Akademisi’ne girer. Doğru sıra: 1893 Askerî Rüştiye → 1896 Manastır → 1899 Harp Okulu → 1902 Harp Akademisi.',
    },
    {
      question: 'Mustafa Kemal’e “Kemal” adını veren kimdir?',
      options: ['Tarih öğretmeni Mehmet Tevfik Bey', 'Matematik öğretmeni Yüzbaşı Mustafa Bey', 'Sınıf arkadaşı Ömer Naci', 'Şemsi Efendi'],
      answer_index: 1,
      explanation: 'Selanik Askerî Rüştiyesi’ndeki matematik öğretmeni Yüzbaşı Mustafa Bey, öğrencisinin başarısı ve olgunluğu nedeniyle ona “Kemal” adını verdi. Mehmet Tevfik Bey tarih sevgisi, Ömer Naci edebiyat ilgisi kazandırdı.',
    },
    {
      question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
      options: ['Namık Kemal – vatan ve hürriyet sevgisi', 'Montesquieu – güçler ayrılığı', 'Voltaire – akılcılık', 'Ziya Gökalp – Batı’yı her yönüyle alma'],
      answer_index: 3,
      explanation: 'Ziya Gökalp Türkçülüğün kuramcısıdır ve millî kültüre dayanan milliyetçilikle ilişkilendirilir. “Batı’yı her yönüyle alma” görüşü Batıcılığın bir kanadına, örneğin Abdullah Cevdet’e aittir.',
    },
    {
      question: '“Mustafa Kemal zayıf olduğu Fransızcayı tatillerde ders alarak geliştirdi.” Bu bilgi aşağıdaki özelliklerden en çok hangisini destekler?',
      options: ['Azim', 'Hoşgörü', 'Cömertlik', 'Mizah anlayışı'],
      answer_index: 0,
      explanation: 'Zayıf olduğu bir alanı kendi çabasıyla, tatilinden vazgeçerek geliştirmesi azmi gösterir. Diğer özellikler bu bilgiyle doğrudan desteklenmez.',
    },
  ],
  next: ['Mustafa Kemal’in Askerlik Hayatı', 'I. Dünya Savaşı: Sebepler ve Bloklaşma'],
})

export default lesson
