import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.3 Millî Bir Destan · 1. ders
 * Kazanım : İTA.8.3.1
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   a) Doğu Cephesi'nde kazanılan başarılar ve bunların siyasi önemi açıklanır.
 *   b) Güney Cephesi'nde vatanseverlik duygularıyla hareket eden Türk
 *      milletinin örgütlenmesi vurgulanarak millî ve yerel kahramanlara değinilir.
 *
 * KAPSAM KARARI
 * Gümrü Antlaşması'nın 10. maddesi ve Nutuk'taki değerlendirme birebir
 * alıntılandı (Vikikaynak). Güney Cephesi'nin Ankara Antlaşması'yla kapanışı
 * İTA.8.3.5'in konusudur; burada köprü olarak anılır. Kaynaklar arasında gün
 * farkı olan bilgiler (Şahin Bey'in şehit düştüğü gün gibi) ay/yıl düzeyinde
 * yazıldı.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 11.
 */

const SLUG = 'lgs-tarih-dogu-ve-guney-cepheleri'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Bir Destan: Ya İstiklal Ya Ölüm',
  order: 1,
  title: 'Doğu ve Güney Cepheleri: İlk Zafer ve Şehirlerin Direnişi',
  subtitle:
    'Doğuda düzenli bir kolordu Büyük Millet Meclisi’ne ilk askerî ve siyasi zaferi kazandırdı. Güneyde ise düzenli ordu yokken şehirler kendi evlerini, sokaklarını ve bayraklarını savundu.',
  minutes: 45,
  kazanimlar: ['İTA.8.3.1'],
  kapsamNotu:
    'Gümrü Antlaşması’nın 10. maddesi ve Nutuk’taki değerlendirme birebir alıntılanmıştır. Güney Cephesi’nin Ankara Antlaşması’yla kapanışı ilerideki bir derste işlenir. Kaynaklar arasında gün farkı olan bilgiler ay ve yıl düzeyinde yazılmıştır.',
  prerequisites: [
    {
      topic: 'Sevr Antlaşması ve Tepkiler (önceki ders)',
      why: 'Doğu Cephesi’ndeki zaferin siyasi önemi, Sevr’in Ermenistan’la ilgili hükümleri bilinmeden anlaşılmaz.',
    },
    {
      topic: 'Kuvâ-yı Millîye',
      why: 'Güney Cephesi’nde düzenli ordu yoktu; direnişi Kuvâ-yı Millîye ve halk yürüttü.',
    },
  ],
  outcomes: [
    'Doğu Cephesi’ndeki harekâtı ve Gümrü Antlaşması’nı açıklayabileceksin.',
    'Doğu Cephesi’ndeki başarının siyasi önemini maddeler hâlinde sıralayabileceksin.',
    'Güney Cephesi’nde halkın nasıl örgütlendiğini örneklerle anlatabileceksin.',
    'Maraş, Antep ve Urfa’nın direnişini ve kahramanlarını tanıyabileceksin.',
    'Doğu ve Güney cephelerini karşılaştırabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'İki cephe, iki farklı savaş',
    lead:
      'Büyük Millet Meclisi açıldığında Anadolu üç yönden tehdit altındaydı: batıda Yunanlar, doğuda Ermeniler, güneyde Fransızlar. Doğu ve güneydeki savaşlar birbirinden çok farklı yürüdü.',
    body:
      '**Doğu Cephesi’nde** Sevr’den güç alan Ermenistan, Doğu Anadolu’daki toprakları ele geçirmek için saldırılarını artırdı. Burada Büyük Millet Meclisi’nin elinde düzenli bir güç vardı: Kâzım Karabekir Paşa komutasındaki 15. Kolordu. Meclis’ten aldığı yetkiyle Eylül 1920’de harekete geçen kolordu kısa sürede Sarıkamış’ı, Kars’ı ve Gümrü’yü aldı. Aralık 1920’de imzalanan **Gümrü Antlaşması**, Büyük Millet Meclisi’nin bir devletle imzaladığı ilk antlaşma oldu.\n\n' +
      '**Güney Cephesi’nde** ise durum farklıydı. Mondros’tan sonra İngilizlerin işgal ettiği Maraş, Antep ve Urfa Ekim–Kasım 1919’da Fransızlara bırakıldı; Fransız birlikleri arasında Ermeni lejyonları da vardı. Bu bölgede düzenli ordu yoktu. Direnişi şehirlerin halkı, Kuvâ-yı Millîye birlikleri ve yerel önderler yürüttü. Maraş, Urfa ve Antep’in savunmaları, Millî Mücadele’nin en çok anılan halk direnişleri oldu.\n\n' +
      'Program bu kazanımda iki şeyi vurgular: Doğu Cephesi’ndeki başarının **siyasi önemini** ve Güney Cephesi’nde **halkın vatanseverlikle örgütlenmesini**, millî ve yerel kahramanlarıyla birlikte.',
  },
  concepts: [
    { term: 'Cephe', body: 'Bir savaşın yürütüldüğü bölge. Millî Mücadele’de doğu, güney ve batı olmak üzere üç cephe vardı.' },
    { term: 'Kolordu', body: 'Birden çok tümenden oluşan büyük askerî birlik. Doğu Cephesi’ni Kâzım Karabekir Paşa’nın komutasındaki 15. Kolordu yürüttü.' },
    { term: 'Lejyon', body: 'Bir devletin ordusunda başka milletlerden gönüllülerle kurulan birlik. Fransızlar Güney Cephesi’nde Ermeni lejyonlarını kullandı.' },
    { term: 'Müdafaa (savunma)', body: 'Bir yeri saldırıya karşı koruma. Güney Cephesi’ndeki mücadeleler çoğunlukla şehir savunmaları biçimindeydi.' },
    { term: 'Unvan', body: 'Bir kişiye ya da şehre verilen onur adı. Büyük Millet Meclisi ve sonraki meclisler Antep’e “Gazi”, Maraş’a “Kahraman”, Urfa’ya “Şanlı” unvanlarını verdi.' },
  ],
  why: {
    question: 'Güney Cephesi’nde neden düzenli ordu değil, halk savaştı?',
    body:
      'Çünkü Büyük Millet Meclisi’nin elindeki düzenli birlikler çok sınırlıydı ve bunlar en büyük tehlikenin olduğu batıya ve doğuya ayrılmıştı. Güneyde Mondros’un ardından Osmanlı birlikleri çekilmiş, bölge önce İngiliz sonra Fransız işgaline girmişti. Halk, işgalin getirdiği baskıyı —bayrağın indirilmesini, evlerin aranmasını, kadınlara yapılan saldırıları— doğrudan yaşıyordu.\n\n' +
      'Bu yüzden direniş aşağıdan yukarıya örgütlendi: mahalleler savunma birlikleri kurdu, din adamları ve eşraf halkı bir araya getirdi, Kuvâ-yı Millîye önderleri şehir dışından destek taşıdı. Güney Cephesi, milletin kendi kendini savunabileceğini gösteren en güçlü örnek oldu.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Doğu ve Güney (1919–1921)',
    lead: 'Kronolojide iki cephe iç içe ilerler. Hangi satırın doğuya, hangisinin güneye ait olduğuna dikkat et.',
    intro: 'Güneydeki direniş daha erken başladı; doğudaki zafer ise Büyük Millet Meclisi’ne ilk antlaşmayı kazandırdı.',
    items: [
      { title: 'Ekim–Kasım 1919 · Güneyde Fransız işgali', body: 'İngilizler Maraş, Antep ve Urfa’yı Fransızlara bıraktı. Fransız birlikleri arasında Ermeni lejyonları da vardı.' },
      { title: '31 Ekim 1919 · Maraş’ta ilk direniş', body: 'Maraş’ta işgal askerlerinin halka yaptığı saldırıya Sütçü İmam’ın karşılık vermesi, şehirdeki direnişin başlangıcı olarak anılır.' },
      { title: 'Ocak–12 Şubat 1920 · Maraş’ın kurtuluşu', body: 'Yaklaşık üç hafta süren sokak savaşlarından sonra Fransızlar Maraş’tan çekildi.' },
      { title: 'Mart 1920 · Şahin Bey şehit düştü', body: 'Kilis–Antep yolunda Antep’e gelen Fransız destek birliklerini durdurmaya çalışan Şahin Bey, bu çarpışmada şehit oldu.' },
      { title: '11 Nisan 1920 · Urfa’nın kurtuluşu', body: 'Kuşatılan Fransız kuvvetleri Urfa’dan çekilmeye başladı.' },
      { title: 'Eylül–Kasım 1920 · Doğu harekâtı', body: 'Kâzım Karabekir Paşa komutasındaki birlikler 29 Eylül’de Sarıkamış’ı, 30 Ekim’de Kars’ı, 7 Kasım’da Gümrü’yü aldı.' },
      { title: '2/3 Aralık 1920 · Gümrü Antlaşması', body: 'Ermenistan ile imzalanan antlaşma Büyük Millet Meclisi’nin ilk antlaşması oldu; Ermenistan Sevr’i hükümsüz saydı.' },
      { title: '6 Şubat 1921 · “Gazi” unvanı', body: 'Büyük Millet Meclisi, uzun savunması nedeniyle Antep’e “Gazi” unvanını verdi.' },
      { title: '8 Şubat 1921 · Antep’in düşüşü', body: 'Aylarca süren kuşatma ve açlıktan sonra Antep savunucuları teslim olmak zorunda kaldı; şehir Ankara Antlaşması’ndan sonra geri alındı.' },
      { title: '1921 · Moskova, Kars ve Ankara antlaşmaları', body: 'Doğu sınırı Moskova ve Kars antlaşmalarıyla kesinleşti; güneyde Fransızlar Ankara Antlaşması’yla çekildi. Bu antlaşmaları ilerideki bir derste işleyeceğiz.' },
    ],
    takeaway:
      'Dikkat et: Doğuda zaferi düzenli bir kolordu, güneyde direnişi halk kazandı. İki cephe, Millî Mücadele’nin iki farklı gücünü gösterir: düzenli ordu ve millî örgütlenme.',
    body:
      'Kronolojiyi “kim savaştı?” sorusuyla oku. **Doğuda** savaşan, Kâzım Karabekir Paşa’nın komutasındaki düzenli birliklerdi; harekât planlıydı ve kısa sürede sonuç verdi. **Güneyde** savaşan, şehirlerin halkıydı: esnaf, çiftçi, din adamı, öğrenci, kadın; yanlarında da bölgeye gelen Kuvâ-yı Millîye önderleri. Direniş aylarca sürdü ve büyük kayıplara mal oldu.\n\n' +
      'İki cephenin kapanışı da farklıdır. Doğu Cephesi, Gümrü ile askerî ve siyasi olarak kapandı. Güney Cephesi ise savaş alanında tam kapanmadı; Fransızların bölgeden çekilmesi, Sakarya zaferinden sonra imzalanan Ankara Antlaşması’yla diplomasi masasında gerçekleşti.',
  },
  map: {
    title: 'Şematik atlas: Doğu ve Güney cepheleri',
    intro: 'Katmanlarla iki cepheyi ayrı ayrı gör. Noktalara dokununca o yerde ne olduğunu okursun.',
    map_label: 'Şematik gösterim · cephe hattı, sınır ve uzaklık göstermez',
    layers: [
      { id: 'dogu', label: 'Doğu Cephesi', description: 'Erzurum, Sarıkamış, Kars, Gümrü.', active: true },
      { id: 'guney', label: 'Güney Cephesi', description: 'Adana, Maraş, Antep, Urfa.', active: true },
    ],
    regions: [
      { label: 'KARADENİZ', x: 30, y: 4, tone: 'water' },
      { label: 'AKDENİZ', x: 8, y: 92, tone: 'water' },
      { label: 'DOĞU ANADOLU', x: 64, y: 44, tone: 'land' },
    ],
    locations: [
      { id: 'erzurum', label: 'Erzurum', x: 60, y: 30, layer: 'dogu', tone: 'brand', detail: 'Doğu Cephesi’nin karargâhı. Kâzım Karabekir Paşa komutasındaki 15. Kolordu buradan harekete geçti.' },
      { id: 'sarikamis', label: 'Sarıkamış · 29 Eylül', x: 72, y: 22, layer: 'dogu', tone: 'brand', detail: 'Doğu harekâtının ilk hedefi. 29 Eylül 1920’de geri alındı.' },
      { id: 'kars', label: 'Kars · 30 Ekim', x: 80, y: 12, layer: 'dogu', tone: 'brand', detail: '30 Ekim 1920’de geri alındı. Kars, 93 Harbi’nde (1878) kaybedilen bölgenin merkeziydi; Mondros’tan sonra Ermenistan’ın yönetimine girmişti.' },
      { id: 'gumru', label: 'Gümrü', x: 88, y: 4, layer: 'dogu', tone: 'accent', detail: '7 Kasım 1920’de alındı. 2/3 Aralık 1920’de Büyük Millet Meclisi’nin ilk antlaşması burada imzalandı.' },
      { id: 'adana', label: 'Adana', x: 14, y: 74, layer: 'guney', tone: 'danger', detail: 'Fransız işgalinin merkezi. Çevresinde Kuvâ-yı Millîye birlikleri Fransızlara karşı savaştı.' },
      { id: 'maras', label: 'Maraş · 12 Şubat 1920', x: 30, y: 58, layer: 'guney', tone: 'danger', detail: 'Halk yaklaşık üç hafta süren sokak savaşlarından sonra Fransızları şehirden çıkardı. Sütçü İmam’ın direnişi ve halkın örgütlenmesiyle anılır. 1973’te “Kahraman” unvanı verildi.' },
      { id: 'antep', label: 'Antep', x: 36, y: 78, layer: 'guney', tone: 'danger', detail: 'Aylarca kuşatmaya dayandı. Şahin Bey’in şehadeti ve halkın açlığa rağmen direnişiyle anılır. 6 Şubat 1921’de Büyük Millet Meclisi “Gazi” unvanını verdi; 8 Şubat 1921’de teslim olmak zorunda kaldı.' },
      { id: 'urfa', label: 'Urfa · 11 Nisan 1920', x: 56, y: 74, layer: 'guney', tone: 'danger', detail: 'Kuşatılan Fransız kuvvetleri 11 Nisan 1920’de şehirden çekilmeye başladı. 1984’te “Şanlı” unvanı verildi.' },
    ],
    routes: [
      { from: 'erzurum', to: 'sarikamis', label: 'Doğu harekâtı', layer: 'dogu' },
      { from: 'sarikamis', to: 'kars', label: 'Kars’a', layer: 'dogu' },
      { from: 'kars', to: 'gumru', label: 'Gümrü’ye', layer: 'dogu', tone: 'accent' },
    ],
    insight:
      'Haritaya bak: Doğuda bir harekât çizgisi var; bir birlik hedefe doğru ilerliyor. Güneyde ise çizgi yok, tek tek şehirler var. Bu fark, iki cephedeki savaşın niteliğini gösterir: doğuda ordunun ilerleyişi, güneyde şehirlerin savunması.',
    source_note:
      'Yerler ve tarihler; Atatürk Ansiklopedisi (“Gümrü Antlaşması”, “Millî Mücadele’de Güney Cephesi”), TDV İslâm Ansiklopedisi (“Kâzım Karabekir”, “Kahramanmaraş”, “Şanlıurfa”), TBMM tutanakları ve hakemli makaleler esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'Güney Cephesi: şehirler, direniş ve unvanlar',
    columns: ['Şehir', 'Direniş', 'Öne çıkan kahraman', 'Sonuç', 'Unvan'],
    rows: [
      ['Maraş', 'Sokak savaşları; halkın mahalle mahalle örgütlenmesi', 'Sütçü İmam', 'Fransızlar 12 Şubat 1920’de çekildi', 'Kahraman (1973)'],
      ['Urfa', 'Fransız garnizonunun kuşatılması', 'Ali Saip Bey', 'Fransızlar 11 Nisan 1920’de çekilmeye başladı', 'Şanlı (1984)'],
      ['Antep', 'Aylarca süren kuşatmaya karşı savunma; açlığa rağmen direniş', 'Şahin Bey, Karayılan', '8 Şubat 1921’de teslim; Ankara Antlaşması’ndan sonra geri alındı', 'Gazi (1921)'],
      ['Adana ve çevresi', 'Kuvâ-yı Millîye birliklerinin Fransızlara karşı savaşı', 'Bölgenin Kuvâ-yı Millîye önderleri', 'Fransızlar Ankara Antlaşması’ndan sonra çekildi', '—'],
    ],
    caption:
      'Tablodaki unvanları verilme yıllarıyla birlikte hatırla: Antep’in unvanı savaş sürerken Büyük Millet Meclisi tarafından verildi; Maraş ve Urfa’nın unvanları Cumhuriyet döneminde, Türkiye Büyük Millet Meclisi tarafından verildi.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Doğu Cephesi’ndeki zafer neden bu kadar önemliydi?',
    lead: 'Program Doğu Cephesi’ndeki başarıların “siyasi önemini” açıklamanı ister. Askerî zaferin siyasete nasıl dönüştüğünü adım adım gör.',
    intro: 'Zincirin başı Doğu Cephesi’ndeki tehdidin sebeplerini, ortası harekâtı, sonu da zaferin siyasi sonuçlarını anlatır.',
    steps: [
      { tur: 'sebep', title: 'Sevr’in verdiği cesaret', body: 'Sevr, Doğu Anadolu’nun büyük bir kısmını Ermenistan’a bırakıyordu; Ermenistan bu hükümleri fiilen uygulamak için saldırılarını artırdı.' },
      { tur: 'sebep', title: 'Doğu halkının durumu', body: 'Bölgedeki saldırılar Türk ve Müslüman halkı doğrudan tehdit ediyordu; Meclis’in halkı koruması gerekiyordu.' },
      { tur: 'sebep', title: 'Düzenli bir kolordunun varlığı', body: 'Kâzım Karabekir Paşa’nın 15. Kolordusu Doğu’da harekât yapabilecek güçteki tek düzenli birlikti.' },
      { tur: 'gelisme', title: 'Doğu harekâtı', body: 'Eylül–Kasım 1920’de Sarıkamış, Kars ve Gümrü alındı.' },
      { tur: 'sonuc', title: 'Gümrü Antlaşması', body: 'Büyük Millet Meclisi’nin ilk antlaşması imzalandı; Ermenistan Sevr’i hükümsüz saydı.' },
      { tur: 'sonraki-etki', title: 'Siyasi kazanımlar', body: 'Meclis’in uluslararası itibarı arttı; Doğu’daki birliklerin bir kısmı batıya kaydırılabildi; Sovyet Rusya ile ilişkiler gelişti ve doğu sınırı sonraki antlaşmalarla kesinleşti.' },
    ],
    inference:
      'Temel çıkarım: Doğu Cephesi’ndeki zafer, Büyük Millet Meclisi’nin yalnız savaşabildiğini değil, bir devlet gibi antlaşma da imzalayabildiğini gösterdi. Sevr’in bir hükmü ilk kez fiilen ortadan kalktı.',
    body:
      'Doğu Cephesi’ndeki başarının siyasi önemini maddeler hâlinde hatırla:\n\n' +
      '- **İlk askerî zafer:** Büyük Millet Meclisi’nin düzenli birliklerle kazandığı ilk zaferdir.\n' +
      '- **İlk antlaşma:** Gümrü Antlaşması, Meclis’in bir devletle imzaladığı ilk antlaşmadır; bu, Meclis’in bir devlet olarak muhatap alınması demektir.\n' +
      '- **Sevr’in ilk kez geçersizleşmesi:** Ermenistan Sevr’i hükümsüz saydı; Sevr’in doğudaki hükümleri uygulanamaz hâle geldi.\n' +
      '- **Batıya güç aktarımı:** Doğu sınırı güvenceye alınınca oradaki birliklerin ve silahların bir kısmı batı cephesine gönderilebildi.\n' +
      '- **Sovyet Rusya ile ilişki:** Doğu’daki gelişmeler Sovyet Rusya ile yakınlaşmayı ve sonraki antlaşmaları kolaylaştırdı.\n\n' +
      'Nutuk’ta Mustafa Kemal Gümrü’yü “hükümet-i milliyenin akdettiği ilk muâhede” olarak anar ve bu antlaşmayla Ermenistan’ın “dava haricine çıkarıldığını” söyler. Sonradan bölgedeki durum değişince Gümrü’nün yerini Moskova ve Kars antlaşmaları aldı.',
  },
  comparison: {
    title: 'Doğu Cephesi ve Güney Cephesi',
    columns: ['Doğu Cephesi', 'Güney Cephesi'],
    rows: [
      { label: 'Karşı taraf', values: ['Ermenistan', 'Fransa (ve Fransız ordusundaki Ermeni lejyonları)'] },
      { label: 'Savaşan güç', values: ['Düzenli ordu: Kâzım Karabekir Paşa’nın 15. Kolordusu', 'Halk ve Kuvâ-yı Millîye; şehir savunmaları'] },
      { label: 'Savaşın biçimi', values: ['Planlı ilerleme harekâtı', 'Sokak savaşları, kuşatmalar, baskınlar'] },
      { label: 'Önemli olaylar', values: ['Sarıkamış, Kars, Gümrü’nün alınması', 'Maraş, Urfa ve Antep savunmaları'] },
      { label: 'Kapanış', values: ['Gümrü Antlaşması (1920); sonra Moskova ve Kars antlaşmaları (1921)', 'Ankara Antlaşması (1921) ile Fransızların çekilmesi'] },
      { label: 'Programın vurgusu', values: ['Başarıların siyasi önemi', 'Halkın vatanseverlikle örgütlenmesi; millî ve yerel kahramanlar'] },
    ],
    insight:
      'Asıl fark: Doğu Cephesi Büyük Millet Meclisi’nin bir devlet gibi savaşıp antlaşma imzalayabildiğini, Güney Cephesi ise milletin ordusuz kaldığında bile kendini savunabildiğini gösterdi.',
  },
  traps: [
    {
      title: 'Güney Cephesi’nde düzenli ordunun savaştığını sanmak',
      wrong: 'Güney Cephesi’nde Fransızlara karşı Büyük Millet Meclisi’nin düzenli ordusu savaştı.',
      right: 'Güney Cephesi’nde düzenli ordu yoktu; direnişi şehirlerin halkı ve Kuvâ-yı Millîye birlikleri yürüttü.',
      body: 'Bu yüzden program Güney Cephesi için “Türk milletinin örgütlenmesi” ve “millî ve yerel kahramanlar” ifadelerini kullanır.',
    },
    {
      title: 'Gümrü’yü Kars Antlaşması ile karıştırmak',
      wrong: 'Doğu sınırı Gümrü Antlaşması ile bugünkü hâliyle kesinleşti.',
      right: 'Gümrü, Büyük Millet Meclisi’nin ilk antlaşmasıdır; ama bölgedeki durum değişince yerini 1921’de Moskova ve Kars antlaşmaları aldı. Doğu sınırı Kars Antlaşması ile kesinleşti.',
      body: 'Sorularda “ilk antlaşma” ifadesi Gümrü’yü, “doğu sınırının kesinleşmesi” ifadesi Kars’ı işaret eder.',
    },
    {
      title: 'Unvanların hepsinin savaş sırasında verildiğini sanmak',
      wrong: 'Maraş, Antep ve Urfa’ya unvanları Millî Mücadele sırasında verildi.',
      right: 'Antep’e “Gazi” unvanı 1921’de Büyük Millet Meclisi tarafından verildi. Maraş’a “Kahraman” (1973) ve Urfa’ya “Şanlı” (1984) unvanları Cumhuriyet döneminde verildi.',
      body: 'Unvan sorularında yılı hatırlamak, savaş sırasında verilen tek unvanın Antep’in unvanı olduğunu gösterir.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Millî ve yerel kahramanlar',
    lead: 'Program Güney Cephesi’nde millî ve yerel kahramanlara değinilmesini ister. Doğu Cephesi’nin komutanı da bu kartlarda.',
    intro: 'Kartlarda her kişinin nerede, ne yaptığını ve neden anıldığını görürsün. Yerel kahramanlar, bir şehrin direnişini simgeleyen kişilerdir.',
    figures: [
      {
        name: 'Kâzım Karabekir Paşa',
        period: '1920 · Doğu Cephesi komutanı',
        position: '15. Kolordu ve Doğu Cephesi komutanı',
        contribution: 'Meclis’ten aldığı yetkiyle Eylül 1920’de Ermenistan’a karşı harekâtı başlattı; Sarıkamış, Kars ve Gümrü’yü aldı. Gümrü Antlaşması’nı Türkiye adına imzalayanların başındaydı.',
        connections: ['Doğu harekâtı', 'Gümrü Antlaşması'],
        significance: 'Büyük Millet Meclisi’ne ilk askerî ve siyasi zaferi kazandıran komutandır.',
      },
      {
        name: 'Sütçü İmam',
        period: '31 Ekim 1919 · Maraş',
        position: 'Maraş’ta direnişin simgesi',
        contribution: 'Maraş’ta işgal askerlerinin halka yaptığı saldırıya karşılık verdi. Bu olay şehirdeki direnişin başlangıcı olarak anılır.',
        connections: ['Maraş’ın savunması'],
        significance: 'Halkın onuruna yapılan saldırıya karşı tek bir kişinin gösterdiği cesaretin bütün bir şehri harekete geçirebileceğinin simgesidir.',
      },
      {
        name: 'Şahin Bey',
        period: 'Mart 1920 · Antep',
        position: 'Antep savunmasının kahramanı',
        contribution: 'Kilis–Antep yolunda, Antep’e gelen Fransız destek birliklerini durdurmak için çarpıştı ve bu çarpışmada şehit oldu.',
        connections: ['Antep savunması'],
        significance: 'Antep savunmasının en çok anılan kahramanıdır; şehrin direnişini simgeler.',
      },
      {
        name: 'Karayılan',
        period: '1920 · Antep çevresi',
        position: 'Yerel Kuvâ-yı Millîye önderi',
        contribution: 'Antep çevresinde Fransız kuvvetlerine karşı baskınlar düzenledi.',
        connections: ['Antep savunması'],
        significance: 'Yerel önderlerin Kuvâ-yı Millîye ile şehir savunmasını nasıl birbirine bağladığını gösterir.',
      },
      {
        name: 'Ali Saip Bey',
        period: '1920 · Urfa',
        position: 'Urfa’daki direnişin önderi',
        contribution: 'Urfa’daki Fransız garnizonuna karşı halkı ve Kuvâ-yı Millîye’yi örgütledi; Fransızlar Nisan 1920’de şehirden çekildi.',
        connections: ['Urfa’nın kurtuluşu'],
        significance: 'Urfa’nın kısa sürede kurtarılmasında öne çıkan önderdir.',
      },
      {
        name: 'Kılıç Ali',
        period: '1920 · Güney Cephesi',
        position: 'Kuvâ-yı Millîye komutanı',
        contribution: 'Heyet-i Temsiliye’nin görevlendirmesiyle bölgeye gönderildi; Maraş ve Antep çevresinde Kuvâ-yı Millîye’nin örgütlenmesinde görev aldı.',
        connections: ['Maraş ve Antep savunmaları'],
        significance: 'Ankara ile güneydeki halk direnişi arasındaki bağın temsilcisidir.',
      },
    ],
    takeaway:
      'Güney Cephesi’nin kahramanlarını tek başına değil, arkalarındaki halkla birlikte düşün: Bir şehrin direnişini bir kişi başlatabilir, ama ancak bütün bir şehir sürdürebilir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-guney-orgutlenme`,
      title: 'Güney Cephesi’nde halk nasıl örgütlendi?',
      lead: 'Program Güney Cephesi’nde vatanseverlik duygularıyla hareket eden Türk milletinin örgütlenmesinin vurgulanmasını ister. Bu bölümde örgütlenmenin nasıl işlediğini göreceksin.',
      blocks: [
        {
          id: `${SLUG}-guney-orgutlenme-anlatim`,
          type: 'prose',
          body:
            '**Tetikleyici olaylar:** Güneydeki direnişin başlamasında işgalin günlük hayata yansıyan baskıları etkili oldu. Maraş’ta işgal askerlerinin halka yaptığı saldırılar ve şehrin kalesindeki Türk bayrağının indirilmesi, halkın onuruna yapılmış saldırılar olarak görüldü ve büyük tepki topladı.\n\n' +
            '**Örgütlenme:** Şehirlerde mahalleler kendi savunma gruplarını kurdu. Din adamları camilerde halkı bir araya getirdi; eşraf ve esnaf para, silah ve erzak topladı. Şehir dışından gelen Kuvâ-yı Millîye önderleri ile yerel önderler birlikte hareket etti. Kadınlar cephane taşıdı, yaralılara baktı, bazı yerlerde silahlı savunmaya da katıldı.\n\n' +
            '**Ankara ile bağ:** Heyet-i Temsiliye ve ardından Büyük Millet Meclisi bölgeye subaylar ve önderler gönderdi; ama asıl yük halkın omuzlarındaydı. Direniş, Ankara’nın desteğiyle halkın kendi imkânlarının birleşmesinden doğdu.\n\n' +
            '**Sonuçları:** Maraş ve Urfa’da Fransızlar çekilmek zorunda kaldı; Antep aylarca direnip sonunda teslim olsa da Fransız kuvvetlerini uzun süre bölgede tuttu. Bu direniş Fransa’yı bölgede kalmanın bedelini yeniden düşünmeye yöneltti; Sakarya zaferinden sonra Fransa, Ankara Antlaşması’yla bölgeden çekildi.',
        },
        {
          id: `${SLUG}-guney-orgutlenme-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Maraş kahraman, Antep gazi, Urfa şanlı',
          body: 'Maraş (Sütçü İmam; 12 Şubat 1920) · Urfa (Ali Saip; 11 Nisan 1920) · Antep (Şahin Bey; 1921’de “Gazi” unvanı).',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Gümrü Antlaşması’nın bir maddesini ve Mustafa Kemal’in Gümrü hakkındaki değerlendirmesini okuyacaksın.',
    intro:
      'Bir antlaşmanın siyasi önemini anlamak için yalnız toprak maddelerine değil, taraflardan birinin neyi kabul ettiğine de bakmak gerekir. Gümrü’nün 10. maddesi bu açıdan çok öğreticidir.\n\n' +
      'Birinci metin antlaşmanın günümüz Türkçesiyle yayımlanmış metninden, ikinci metin Nutuk’tan birebir alıntıdır; üçüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Gümrü Antlaşması’nın 10. maddesi',
        kunye: 'Türkiye–Ermenistan Barış Antlaşması (Gümrü Antlaşması), 2 Aralık 1920. Metin: antlaşmanın günümüz Türkçesiyle yayımlanmış metni; Vikikaynak.',
        nitelik: 'Birebir alıntı (günümüz Türkçesiyle yayımlanmış metinden).',
        metin:
          'Erivan Hükûmeti, Türkiye Büyük Milletince kesinlikle reddedilmiş olan (Sevr) Antlaşmasını hükümsüz sayıp bunu ve kimi emperyalist hükûmet ve siyasal çevreler elinde bir kışkırtma aracı olan Avrupa ve Amerika’daki Temsilci Heyetlerini geri çağırmayı, bundan böyle iki ülke arasında her türlü yanlış düşünceleri ortadan kaldırmak iyi niyetiyle yükümlendiğini açıklar.',
        soru: 'Antlaşmanın girişinde taraflar “Türkiye Büyük Millet Meclisi Hükûmeti” ve “Ermenistan Cumhuriyeti” olarak yazılmıştır. Bu madde Sevr açısından ne anlama gelir? Antlaşmanın Büyük Millet Meclisi Hükûmeti ile imzalanması ve Sevr’in “Türkiye Büyük Milletince kesinlikle reddedilmiş” olarak anılması neyi gösterir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'İki devletin imzaladığı antlaşmanın kendi maddesidir: birincil kaynak.' },
          { title: 'Maddenin söylediğini çıkar', body: 'Ermenistan Sevr’i hükümsüz sayar ve Avrupa ile Amerika’daki temsilci heyetlerini geri çağırır.' },
          { title: 'Sevr açısından yorumla', body: 'Sevr’in Ermenistan’la ilgili hükümlerinden en çok yararlanacak olan devlet, bu hükümlerden kendisi vazgeçmiştir. Böylece Sevr’in bir parçası fiilen ortadan kalktı.' },
          { title: 'Tarafları yorumla', body: 'Ermenistan antlaşmayı İstanbul hükümetiyle değil, Büyük Millet Meclisi Hükûmeti ile imzaladı ve Sevr’in Türk milletince reddedildiğini metne yazdı. Bu, Ermenistan’ın Büyük Millet Meclisi’ni Türkiye’nin muhatabı olarak kabul ettiğini gösterir.' },
        ],
        cevap: 'Madde, Sevr’i hükümsüz sayan ilk devletin Ermenistan olduğunu gösterir ve Sevr’in doğudaki hükümlerini fiilen ortadan kaldırır. Antlaşmanın Büyük Millet Meclisi Hükûmeti ile imzalanması ve Sevr’in Türk milletince reddedildiğinin metne yazılması, Ermenistan’ın Büyük Millet Meclisi’ni Türkiye’nin muhatabı olarak kabul ettiğini gösterir.',
        cikarim: 'Bir devletin antlaşmayı senin kurumunla imzalaması, o kurumu muhatap kabul ettiği anlamına gelir. Gümrü’nün siyasi önemi bu tanınmadadır.',
      },
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in Gümrü değerlendirmesi',
        kunye: 'Mustafa Kemal, Nutuk (1927), 7. bölüm: “Hükûmet-i milliyenin akdettiği ilk muâhede: Gümrü Muâhedesi”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı.',
        metin:
          'Efendiler, Gümrü Muâhedesi hükümet-i milliyenin akdettiği ilk muâhededir. Bu muâhede ile düşmanlarımızın hayalhanesinde kendisine ta Harşit vadisine kadar olan Türk ülkeleri bahşedilmiş olan Ermenistan, Osmanlı Devleti’nin 93 Seferi’yle kaybetmiş olduğu yerleri bize, hükümet-i milliyeye terk ederek dava haricine çıkarılmıştır.',
        soru: 'Mustafa Kemal Gümrü’nün önemini hangi iki noktada görüyor? “Harşit vadisine kadar” ifadesiyle neyi anlatmak istiyor olabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Hükümet-i milliye”: millî hükümet, yani Büyük Millet Meclisi hükümeti. “Muâhede”: antlaşma. “Hayalhane”: hayal dünyası. “Bahşedilmek”: bağışlanmak, verilmek. “93 Seferi”: 1877–1878 Osmanlı–Rus Savaşı. “Dava haricine çıkarılmak”: meseleden çıkarılmak.' },
          { title: 'Birinci noktayı bul', body: 'Gümrü, millî hükümetin imzaladığı ilk antlaşmadır.' },
          { title: 'İkinci noktayı bul', body: 'Ermenistan, 1878’de kaybedilen yerleri millî hükümete bıraktı ve meseleden çekildi.' },
          { title: 'İfadeyi yorumla', body: 'Harşit, Gümüşhane ve Giresun topraklarından geçip Karadeniz’e dökülen bir akarsudur. Mustafa Kemal bu ifadeyle Sevr’in ve düşmanların Ermenistan’a Karadeniz kıyılarına kadar uzanan geniş topraklar vaat ettiğini, bu hayalin Gümrü’yle sona erdiğini anlatır.' },
        ],
        cevap: 'Mustafa Kemal Gümrü’nün önemini, millî hükümetin ilk antlaşması olmasında ve Ermenistan’ın 1878’de kaybedilen yerleri bırakıp meseleden çekilmesinde görür. “Harşit vadisine kadar” ifadesi, Ermenistan’a vaat edilen toprakların ne kadar geniş olduğunu ve bu vaadin gerçekleşmediğini anlatır.',
        cikarim: 'Nutuk’taki “ilk” vurguları, Mustafa Kemal’in bir olayın simgesel önemine verdiği değeri gösterir. “İlk antlaşma”, Meclis’in bir devlet gibi davranabildiğinin ilk kanıtıdır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Güney direnişi üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Güney Cephesi’nde Maraş, Urfa ve Antep halkı, düzenli bir ordunun yardımı olmadan işgalcilere karşı koydu. Bu direniş, Millî Mücadele’nin yalnız komutanların ve orduların değil, sıradan insanların da mücadelesi olduğunun en açık kanıtıdır. Fransa’nın sonunda bölgeden çekilmesinde bu direnişin payı büyüktür.',
        soru: 'Metindeki olguyu ve yorumları ayır. Son cümledeki yargıyı değerlendirirken başka hangi etkeni hesaba katmalısın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Maraş, Urfa ve Antep halkının düzenli ordu olmadan işgalcilere karşı koyması bir olgudur.' },
          { title: 'Yorumları ayır', body: '“En açık kanıt” ve “payı büyüktür” ifadeleri yazarın değerlendirmesidir.' },
          { title: 'Başka etkeni ekle', body: 'Fransa’nın çekilmesinde Sakarya zaferi ve Ankara Antlaşması’yla gelen diplomatik uzlaşma da belirleyiciydi. Yargı, direnişin payını vurgular ama tek sebep olduğunu söylemez; bu yüzden dengelidir.' },
        ],
        cevap: 'Olgu: halkın düzenli ordu olmadan direnmesi. Yorumlar: bunun sıradan insanların mücadelesinin en açık kanıtı olduğu ve Fransa’nın çekilmesinde payının büyük olduğu. Değerlendirirken Sakarya zaferi ve Ankara Antlaşması gibi etkenleri de hesaba katmak gerekir.',
        cikarim: '“Payı büyüktür” ile “tek sebeptir” arasındaki farka dikkat et. İyi bir tarihsel yargı, bir etkenin önemini vurgularken diğer etkenlere de yer bırakır.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Siyasi önemi sırala',
      prompt: 'Doğu Cephesi’nde kazanılan başarının siyasi önemini en az dört maddeyle açıkla.',
      steps: [
        { title: '1', body: 'Büyük Millet Meclisi’nin düzenli birliklerle kazandığı ilk askerî zaferdir.' },
        { title: '2', body: 'Gümrü Antlaşması Meclis’in imzaladığı ilk antlaşmadır; Meclis bir devlet olarak muhatap alınmıştır.' },
        { title: '3', body: 'Ermenistan Sevr’i hükümsüz saymıştır; Sevr’in doğudaki hükümleri geçersizleşmiştir.' },
        { title: '4', body: 'Doğu sınırı güvenceye alınınca buradaki güçlerin bir kısmı batıya aktarılabilmiştir.' },
      ],
      answer: 'İlk askerî zafer; ilk antlaşma ve tanınma; Sevr’in ilk kez geçersizleşmesi; batıya güç aktarımı. Ayrıca Sovyet Rusya ile ilişkilerin gelişmesi de sayılabilir.',
      takeaway: '“Siyasi önem” sorularında askerî sonucu değil, bu sonucun diplomasiye, tanınmaya ve dengeye etkisini ara.',
    },
    {
      title: 'Kahramanı şehirle eşleştir',
      prompt: 'Aşağıdaki kişileri direnişin simgesi oldukları şehirlerle eşleştir: Sütçü İmam, Şahin Bey, Ali Saip Bey.',
      steps: [
        { title: 'Sütçü İmam', body: 'Maraş’ta direnişi başlatan olayla anılır → Maraş.' },
        { title: 'Şahin Bey', body: 'Antep’e giden yolu savunurken şehit düştü → Antep.' },
        { title: 'Ali Saip Bey', body: 'Urfa’daki direnişin önderi → Urfa.' },
      ],
      answer: 'Sütçü İmam–Maraş · Şahin Bey–Antep · Ali Saip Bey–Urfa.',
      takeaway: 'Kahramanları şehirleriyle birlikte, şehirleri de unvanlarıyla birlikte hatırla: Maraş kahraman, Antep gazi, Urfa şanlı.',
    },
    {
      title: 'İki cepheyi karşılaştır',
      prompt: 'Doğu ve Güney cephelerinin “savaşan güç” ve “kapanış biçimi” bakımından farkını açıkla.',
      steps: [
        { title: 'Savaşan güç', body: 'Doğuda düzenli ordu (15. Kolordu); güneyde halk ve Kuvâ-yı Millîye.' },
        { title: 'Kapanış', body: 'Doğu, askerî zafer ve Gümrü Antlaşması ile kapandı; güney, Sakarya’dan sonra imzalanan Ankara Antlaşması ile diplomatik yolla kapandı.' },
      ],
      answer: 'Doğuda düzenli ordu savaştı ve cephe askerî zafer ve antlaşmayla kapandı; güneyde halk savaştı ve cephe diplomatik bir antlaşmayla kapandı.',
      takeaway: 'Karşılaştırma sorularında her ölçütü ayrı bir cümleyle yaz; iki cepheyi aynı ölçütle kıyasla.',
    },
  ],
  questionClue: {
    concept: 'Soruda Doğu ve Güney cephelerini nasıl ayırt ederim?',
    statement: 'Soru bir savaşın karşı tarafını, savaşan gücü ya da bir kahramanı verip hangi cepheden söz edildiğini sorabilir.',
    clues: [
      '“Ermenistan”, “Kâzım Karabekir”, “Kars”, “Gümrü” → Doğu Cephesi',
      '“Fransızlar”, “Ermeni lejyonları”, “Maraş, Antep, Urfa” → Güney Cephesi',
      '“İlk antlaşma”, “Sevr’i hükümsüz sayan ilk devlet” → Gümrü Antlaşması',
      '“Halkın örgütlenmesi”, “yerel kahramanlar”, “şehir savunması” → Güney Cephesi',
      '“Gazi, Kahraman, Şanlı unvanları” → Güney Cephesi şehirleri',
    ],
    reasoning: 'Önce karşı tarafı bul (Ermenistan mı, Fransa mı?), sonra savaşan gücü (ordu mu, halk mı?). Bu iki bilgi cepheyi kesinleştirir.',
    boundary: 'Dikkat: Fransızlar Güney Cephesi’nde Ermeni lejyonlarını kullandı; “Ermeni” sözcüğü her zaman Doğu Cephesi’ni göstermez. Karşı tarafın Fransız ordusu olup olmadığına bak.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir harita, bir antlaşma maddesi, bir kahramanın hikâyesi ya da iki cepheyi karşılaştıran bir tablo verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Doğu Cephesi’ndeki başarının siyasi önemini belirleme',
      'Kahramanı şehirle ve cepheyle eşleştirme',
      'Doğu ve Güney cephelerini karşılaştırma',
      'Güney Cephesi’nde halkın örgütlenmesini vatanseverlik ve millî birlikle ilişkilendirme',
      'Gümrü maddesinden çıkarım yapma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Doğu Cephesi’nin güvenceye alınması, Batı Cephesi’ndeki savaşı nasıl etkilemiş olabilir?',
      hint: 'Sınırlı güçleri olan bir hükümet için bir cephenin kapanması ne demektir?',
      answer: 'Doğudaki tehlike ortadan kalkınca oradaki birliklerin, silahların ve cephanenin bir kısmı batıya gönderilebildi. Büyük Millet Meclisi gücünü asıl tehlikenin olduğu Batı Cephesi’nde toplayabildi.',
    },
    {
      prompt: 'Güney Cephesi’ndeki direnişi “vatanseverlik” ve “millî birlik” kavramlarıyla nasıl ilişkilendirirsin?',
      answer: 'Halk, düzenli bir ordu olmadan kendi imkânlarıyla evini ve şehrini savundu; bu vatanseverliktir. Din adamları, esnaf, çiftçiler ve kadınlar farklılıklarını bir yana bırakıp aynı amaç için birlikte hareket etti; bu da millî birliktir.',
    },
    {
      prompt: 'Antep sonunda teslim olmak zorunda kaldığı hâlde neden “Gazi” unvanını almıştır?',
      answer: 'Antep aylarca süren kuşatmaya ve açlığa rağmen direndi; Fransız kuvvetlerini uzun süre bölgede tuttu. Unvan, savaşın sonucundan çok bu direnişin gösterdiği fedakârlığa verildi.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.3.1 bir “kavrar” kazanımıdır: öğrenciden Doğu ve Güney cephelerindeki gelişmeleri anlamasını ister. Programın açıklaması Doğu Cephesi’nde başarıların siyasi önemini, Güney Cephesi’nde ise halkın vatanseverlikle örgütlenmesini ve millî ve yerel kahramanları vurgular. Bu kazanıma dayanan bir soru bir antlaşma maddesi ya da bir şehrin direnişini anlatıp çıkarım isteyebilir.',
    measures: [
      'Doğu Cephesi’ndeki başarının siyasi önemini açıklama',
      'Gümrü Antlaşması’nın özelliğini tanıma',
      'Güney Cephesi’nde halkın örgütlenmesini açıklama',
      'Kahramanları şehirleriyle eşleştirme',
      'İki cepheyi karşılaştırma',
    ],
  },
  simulation: {
    title: 'Mini LGS: Gümrü’nün önemi',
    passage:
      'Kâzım Karabekir Paşa komutasındaki birlikler 1920 sonbaharında Ermeni kuvvetlerini yenerek Sarıkamış, Kars ve Gümrü’yü aldı. Aralık 1920’de imzalanan Gümrü Antlaşması’yla Ermenistan, Sevr Antlaşması’nı hükümsüz saydığını kabul etti. Antlaşma, Türkiye Büyük Millet Meclisi Hükûmeti adına imzalandı.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Büyük Millet Meclisi, bir devlet tarafından antlaşma yapılacak bir muhatap olarak kabul edilmiştir.', explanation: 'Doğru. Antlaşmanın Meclis hükümeti adına imzalanması, Ermenistan’ın Meclis’i Türkiye’nin temsilcisi olarak tanıdığını gösterir.' },
      { text: 'Sevr Antlaşması bütün hükümleriyle geçersiz hâle gelmiştir.', explanation: 'Metin yalnız Ermenistan’ın Sevr’i hükümsüz saydığını söyler. Sevr’in diğer hükümleri (batıdaki ve güneydeki) ancak sonraki zaferler ve Lozan ile geçersizleşti.' },
      { text: 'Doğu sınırı bugünkü hâliyle kesinleşmiştir.', explanation: 'Metinde sınırın kesinleştiğine dair bilgi yoktur; doğu sınırı 1921’de Kars Antlaşması ile kesinleşti.' },
      { text: 'Güney Cephesi’ndeki savaş da sona ermiştir.', explanation: 'Metin yalnız Doğu Cephesi’ni anlatır; Güney Cephesi 1921’de Ankara Antlaşması ile kapandı.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. Metnin kilit cümlesi, antlaşmanın Meclis hükümeti adına imzalanmasıdır; bu bilgi tanınma sonucunu doğrudan destekler.',
    critical_point: 'İkinci seçenek güçlü bir çeldiricidir: Metinde Sevr’in hükümsüz sayıldığı yazıyor, ama yalnız Ermenistan tarafından. “Bütün hükümleriyle” ifadesi metnin ötesine geçer.',
    takeaway: 'Metindeki özneye dikkat et: “Ermenistan Sevr’i hükümsüz saydı” ile “Sevr hükümsüz oldu” aynı şey değildir.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Doğuda zafer, güneyde direniş',
    range: '1919–1921',
    body:
      'Doğu Cephesi’nde Sevr’den cesaret alan Ermenistan’ın saldırılarına karşı Kâzım Karabekir Paşa komutasındaki 15. Kolordu Eylül 1920’de harekete geçti; Sarıkamış, Kars ve Gümrü alındı. Aralık 1920’de imzalanan Gümrü Antlaşması Büyük Millet Meclisi’nin ilk antlaşması oldu; Ermenistan Sevr’i hükümsüz saydı. Güney Cephesi’nde düzenli ordu yoktu; Fransız işgaline karşı Maraş, Urfa ve Antep halkı Kuvâ-yı Millîye ile birlikte direndi. Maraş (12 Şubat 1920) ve Urfa (11 Nisan 1920) kurtarıldı; Antep aylarca direndi, Büyük Millet Meclisi’nden “Gazi” unvanını aldı. Güney Cephesi 1921’de Ankara Antlaşması ile kapandı.',
    turning_points: [
      '12 Şubat 1920 · Maraş’ın kurtuluşu',
      '11 Nisan 1920 · Urfa’nın kurtuluşu',
      '30 Ekim 1920 · Kars’ın alınması',
      '2/3 Aralık 1920 · Gümrü Antlaşması',
      '6 Şubat 1921 · Antep’e “Gazi” unvanı',
      '1921 · Kars ve Ankara antlaşmaları',
    ],
  },
  summary: [
    '**Doğu Cephesi:** Ermenistan’a karşı; Kâzım Karabekir Paşa’nın 15. Kolordusu; Sarıkamış, Kars, Gümrü (1920).',
    '**Gümrü Antlaşması (2/3 Aralık 1920):** Büyük Millet Meclisi’nin ilk antlaşması; Ermenistan Sevr’i hükümsüz saydı.',
    '**Siyasi önem:** ilk askerî zafer, ilk antlaşma ve tanınma, Sevr’in ilk kez geçersizleşmesi, batıya güç aktarımı.',
    '**Güney Cephesi:** Fransızlara (ve Ermeni lejyonlarına) karşı; düzenli ordu yok; halk ve Kuvâ-yı Millîye.',
    '**Şehirler ve kahramanlar:** Maraş–Sütçü İmam (12 Şubat 1920; Kahraman), Urfa–Ali Saip (11 Nisan 1920; Şanlı), Antep–Şahin Bey (Gazi, 1921).',
    '**Kapanış:** Doğu, Gümrü ile; güney, Ankara Antlaşması (1921) ile.',
  ],
  quizzes: [
    {
      question: 'Büyük Millet Meclisi Hükûmeti’nin imzaladığı ilk antlaşma hangisidir?',
      options: ['Gümrü Antlaşması', 'Moskova Antlaşması', 'Kars Antlaşması', 'Ankara Antlaşması'],
      answer_index: 0,
      explanation: 'Gümrü Antlaşması (2/3 Aralık 1920) Büyük Millet Meclisi’nin imzaladığı ilk antlaşmadır. Moskova, Kars ve Ankara antlaşmaları 1921’de imzalandı.',
    },
    {
      question: 'Güney Cephesi’nde işgale karşı direnişi büyük ölçüde kimler yürütmüştür?',
      options: ['Kâzım Karabekir Paşa’nın düzenli kolordusu', 'Şehirlerin halkı ve Kuvâ-yı Millîye', 'İstanbul hükümetinin gönderdiği birlikler', 'Sovyet Rusya’nın gönderdiği birlikler'],
      answer_index: 1,
      explanation: 'Güney Cephesi’nde düzenli ordu yoktu; direnişi Maraş, Urfa ve Antep halkı ile Kuvâ-yı Millîye birlikleri yürüttü. Kâzım Karabekir Paşa Doğu Cephesi’nin komutanıydı.',
    },
    {
      question: 'Aşağıdaki eşleştirmelerden hangisi yanlıştır?',
      options: ['Sütçü İmam – Maraş', 'Şahin Bey – Antep', 'Ali Saip Bey – Urfa', 'Kâzım Karabekir – Adana'],
      answer_index: 3,
      explanation: 'Kâzım Karabekir Paşa Doğu Cephesi’nin komutanıdır; Adana Güney Cephesi’ndedir. Diğer eşleştirmeler doğrudur.',
    },
    {
      question: 'Doğu Cephesi’ndeki başarının sonuçları arasında aşağıdakilerden hangisi yer almaz?',
      options: ['Sevr’in doğudaki hükümlerinin geçersizleşmesi', 'Büyük Millet Meclisi’nin ilk antlaşmayı imzalaması', 'Doğudaki birliklerin bir kısmının batıya aktarılabilmesi', 'Fransızların Güney Anadolu’dan çekilmesi'],
      answer_index: 3,
      explanation: 'Fransızların güneyden çekilmesi Doğu Cephesi’nin değil, Sakarya zaferinden sonra imzalanan Ankara Antlaşması’nın sonucudur.',
    },
  ],
  next: ['Batı Cephesi: Düzenli Ordu ve İnönü Muharebeleri', 'Tekalif-i Millîye, Sakarya ve Büyük Taarruz'],
})

export default lesson
