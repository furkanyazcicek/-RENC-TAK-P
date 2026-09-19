import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 6. ders
 * Kazanım : İTA.8.2.6 · İTA.8.2.7
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   İTA.8.2.6 → "Birinci Büyük Millet Meclisinin nasıl teşekkül ettiğine
 *               kısaca değinilir."
 *   İTA.8.2.7 → "Hıyanet-i Vataniye Kanunu'nun çıkarılma gerekçelerine ve
 *               kanunun uygulanma sürecine değinilir."
 *
 * KAPSAM KARARI
 * Misakımillî'nin maddeleri TBMM yayını "Millî Egemenlik Belgeleri"nden
 * (2015; Vikikaynak'ta sayfa görüntüsüyle birlikte) birebir alıntılandı.
 * Hıyanet-i Vataniye Kanunu'nun 1. maddesi kanun metninden birebir alındı
 * (TBMM kanun arşivi ve Vikikaynak). İsyanların günleri kaynaklarda farklı
 * verildiği için çoğunda yalnız ay ve yıl yazıldı.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 9.
 */

const SLUG = 'lgs-tarih-misakimilli-ve-bmm'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 6,
  title: 'Misakımillî, Büyük Millet Meclisi ve Meclis’e Karşı Ayaklanmalar',
  subtitle:
    'İstanbul’daki son Osmanlı meclisi milletin sınırlarını ve bağımsızlık şartlarını ilan etti; işgal bu meclisi dağıttı. Milletin iradesi Ankara’da yeni bir mecliste yeniden toplandı ve ilk sınavını içerideki ayaklanmalarla verdi.',
  minutes: 50,
  kazanimlar: ['İTA.8.2.6', 'İTA.8.2.7'],
  kapsamNotu:
    'Misakımillî ve Hıyanet-i Vataniye Kanunu’nun maddeleri resmî metinlerinden birebir alıntılanmış ve günümüz Türkçesiyle açıklanmıştır. İsyanların günleri kaynaklarda farklı verildiği için çoğunda yalnız ay ve yıl yazılmıştır.',
  prerequisites: [
    {
      topic: 'Millî Mücadele’nin Hazırlık Dönemi (önceki ders)',
      why: 'Erzurum ve Sivas kararlarını bilmek, Misakımillî’nin bu kararlardan nasıl doğduğunu anlamayı sağlar.',
    },
    {
      topic: 'Millî egemenlik ve tam bağımsızlık kavramları',
      why: 'Misakımillî ve Büyük Millet Meclisi bu iki ilke üzerine kuruldu.',
    },
  ],
  outcomes: [
    'Misakımillî’nin nasıl kabul edildiğini ve maddelerini açıklayabileceksin.',
    'Misakımillî’yi vatanın bütünlüğü, ulusal egemenlik ve tam bağımsızlık ilkeleriyle ilişkilendirebileceksin.',
    'Birinci Büyük Millet Meclisi’nin nasıl oluştuğunu ve özelliklerini açıklayabileceksin.',
    'Meclis’e karşı ayaklanmaları sebeplerine göre sınıflandırabileceksin.',
    'Hıyanet-i Vataniye Kanunu’nun gerekçelerini ve uygulanmasını açıklayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Bir meclis dağıtılıyor, bir meclis doğuyor',
    lead:
      '28 Ocak 1920’de İstanbul’daki mebuslar gizli bir oturumda milletin sınırlarını ve bağımsızlık şartlarını kabul etti. Yaklaşık iki ay sonra İstanbul resmen işgal edildi; üç ay sonra Ankara’da yeni bir meclis açıldı.',
    body:
      'Sivas Kongresi’nden sonra Heyet-i Temsiliye, İstanbul’daki Meclis-i Mebusan’ın yeniden toplanması için çalıştı. Yapılan seçimlerde Millî Mücadele’yi destekleyen adaylar büyük çoğunluğu kazandı. Meclis 12 Ocak 1920’de İstanbul’da açıldı. Mebuslar 28 Ocak 1920’de, Erzurum ve Sivas kongrelerinin kararlarına dayanan **Misakımillî**’yi (Millî Ant) kabul ettiler. Misakımillî, milletin hangi sınırlar içinde ve hangi şartlarla bağımsız yaşamak istediğini dünyaya ilan ediyordu.\n\n' +
      'İtilaf Devletleri bu kararı kendi planlarına karşı bir meydan okuma olarak gördü. 16 Mart 1920’de İstanbul resmen işgal edildi; bazı mebuslar tutuklanıp sürgüne gönderildi. Meclis-i Mebusan çalışamaz hâle geldi ve kısa süre sonra padişah tarafından kapatıldı. Mustafa Kemal bu gelişme üzerine Ankara’da olağanüstü yetkilere sahip bir meclis toplanması için seçim yapılmasını istedi. **Büyük Millet Meclisi** 23 Nisan 1920’de Ankara’da açıldı.\n\n' +
      'Yeni Meclis’in ilk sınavı dışarıdan değil içeriden geldi: İstanbul hükümetinin kışkırtmaları, azınlık çeteleri, düzenli orduya geçişe karşı çıkanlar ve ayrılıkçılar Meclis’e karşı ayaklandı. Meclis bu ayaklanmalara karşı **Hıyanet-i Vataniye Kanunu**’nu çıkardı ve **İstiklal Mahkemeleri**’ni kurdu. Bu ders iki kazanımı birlikte işliyor: Misakımillî ile Meclis’in açılışı ve Meclis’e karşı ayaklanmalar.',
  },
  concepts: [
    { term: 'Misakımillî (Millî Ant)', body: 'Son Osmanlı Meclis-i Mebusanı’nın 28 Ocak 1920’de kabul ettiği, milletin sınırlarını ve bağımsızlık şartlarını belirleyen altı maddelik karar.' },
    { term: 'Ulusal egemenlik', body: 'Ülkeyi yönetme yetkisinin millete ait olması. Büyük Millet Meclisi bu ilke üzerine kuruldu.' },
    { term: 'Tam bağımsızlık', body: 'Bir devletin siyasi, adli, mali ve diğer alanlarda hiçbir yabancı kısıtlamayı kabul etmemesi. Misakımillî’nin altıncı maddesi bu ilkenin ifadesidir.' },
    { term: 'Halk oylaması (plebisit)', body: 'Bir bölgenin geleceğinin, orada yaşayan halkın oyuyla belirlenmesi. Misakımillî bazı bölgeler için bu yolu öngörür.' },
    { term: 'Güçler birliği', body: 'Yasama (kanun yapma) ve yürütme (kanunu uygulama) yetkilerinin aynı organda toplanması. Birinci Büyük Millet Meclisi bu ilkeyle çalıştı.' },
    { term: 'Hıyanet-i Vataniye', body: '“Vatana ihanet.” Meclis’in meşruiyetine karşı çıkan ve ayaklanmaya katılan ya da kışkırtanları cezalandırmak için çıkarılan kanunun adı.' },
  ],
  why: {
    question: 'Misakımillî neden bu kadar önemli sayılır?',
    body:
      'Çünkü Millî Mücadele’nin neyi, nerede ve hangi şartlarla savunacağını açıkça belirledi. Erzurum ve Sivas kongreleri kararlarını milletin temsilcilerinden oluşan kongreler olarak almıştı; Misakımillî ise aynı kararları devletin resmî meclisinde, seçilmiş mebusların oyuyla kabul ettirdi. Böylece Millî Mücadele’nin hedefleri hukuken de milletin iradesi hâline geldi.\n\n' +
      'Misakımillî’nin bir başka önemi de sonrası için bir ölçü olmasıdır. Mustafa Kemal ve Büyük Millet Meclisi, Millî Mücadele boyunca bütün görüşmelerde ve antlaşmalarda Misakımillî’yi temel aldı. Sevr’in reddedilmesinden Lozan’daki pazarlıklara kadar sorulan soru hep aynıydı: Bu şart Misakımillî’ye uygun mu?',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: İstanbul’dan Ankara’ya bir meclis (Ocak 1920–1921)',
    lead: 'Kronolojide iki meclis ve bir kanun var. Aralarındaki bağlantıyı gör: Biri dağıtılınca öteki kuruldu; yeni meclis de varlığını korumak için bir kanun çıkardı.',
    intro: 'Önce İstanbul’daki son Osmanlı meclisi, sonra işgal, sonra Ankara’daki yeni meclis ve ona karşı ayaklanmalar.',
    items: [
      { title: '12 Ocak 1920 · Meclis-i Mebusan açıldı', body: 'Millî Mücadele’yi destekleyen mebusların çoğunlukta olduğu son Osmanlı meclisi İstanbul’da toplandı.' },
      { title: '28 Ocak 1920 · Misakımillî kabul edildi', body: 'Meclis gizli bir oturumda altı maddelik Misakımillî’yi kabul etti; karar Şubat 1920’de kamuoyuna duyuruldu.' },
      { title: '16 Mart 1920 · İstanbul resmen işgal edildi', body: 'İtilaf Devletleri İstanbul’u resmen işgal etti; bazı mebusları tutuklayıp sürgüne gönderdi.' },
      { title: 'Mart 1920 · Meclis-i Mebusan dağıldı', body: 'Meclis çalışamaz hâle gelip toplantılarına ara verdi; Nisan 1920’de padişah tarafından kapatıldı.' },
      { title: 'Mart 1920 · Ankara’ya çağrı', body: 'Mustafa Kemal, Ankara’da olağanüstü yetkili bir meclis toplanması için seçim yapılmasını istedi; İstanbul’dan kaçabilen mebuslar da bu meclise katılabilecekti.' },
      { title: 'Nisan 1920 · Fetva ve karşı fetva', body: 'İstanbul’daki Şeyhülislam Kuvâ-yı Millîye aleyhine fetva yayımladı; Ankara Müftüsü Rifat Efendi (Börekçi) ve pek çok müftü karşı fetvayla cevap verdi.' },
      { title: '23 Nisan 1920 · Büyük Millet Meclisi açıldı', body: 'Ankara’da açılan Meclis, millî egemenliğe dayanan yeni yönetimin temeli oldu. Mustafa Kemal ertesi gün Meclis Başkanı seçildi.' },
      { title: '29 Nisan 1920 · Hıyanet-i Vataniye Kanunu', body: 'Meclis’in meşruiyetine karşı çıkanları ve ayaklanmaları kışkırtanları cezalandırmak için kanun çıkarıldı.' },
      { title: '1920 · Ayaklanmalar', body: 'İstanbul hükümetinin kışkırttığı ayaklanmalar (Anzavur, Bolu–Düzce–Hendek, Yozgat, Konya), Kuvâ-yı İnzibatiye ve azınlık çeteleri Meclis’i zor durumda bıraktı.' },
      { title: 'Eylül 1920 · İstiklal Mahkemeleri', body: 'Firar edenleri ve ayaklanmalara katılanları yargılamak üzere İstiklal Mahkemeleri kuruldu.' },
      { title: 'Aralık 1920–1921 · Son ayaklanmalar', body: 'Düzenli orduya geçişe karşı çıkan Çerkez Ethem ve Demirci Mehmet Efe ayaklandı; 1921’de Koçgiri’de ayrılıkçı bir ayaklanma çıktı. Hepsi bastırıldı.' },
    ],
    takeaway:
      'Dikkat et: Misakımillî İstanbul’da kabul edildi, ama onu savunacak meclis Ankara’da kuruldu. İşgal, milletin iradesini susturmak isterken onu Ankara’da daha güçlü biçimde toplanmaya zorladı.',
    body:
      'Kronolojiyi sebep–sonuç zinciri olarak oku. **Misakımillî’nin kabulü** İtilaf Devletleri’nin paylaşım planlarına karşı bir meydan okumaydı → **İstanbul resmen işgal edildi** ve Meclis-i Mebusan dağıtıldı → milletin temsilcilerinin toplanabileceği güvenli bir yer kalmadı → **Büyük Millet Meclisi Ankara’da açıldı** → İstanbul hükümeti yeni Meclis’i yıkmak için ayaklanmaları kışkırttı → Meclis **Hıyanet-i Vataniye Kanunu** ve **İstiklal Mahkemeleri** ile karşılık verdi.\n\n' +
      'Bu zincirin sonunda Ankara’daki Meclis hem dışarıdaki düşmana hem de içerideki muhalefete karşı ayakta kaldı. Ayaklanmaların bastırılması, Meclis’in otoritesinin bütün Anadolu’da tanınmasını sağladı; ama bu süreçte zaman ve güç kaybedildi, Yunan ordusu 1920 yazında Batı Anadolu’da ilerleme fırsatı buldu.',
  },
  map: {
    title: 'Şematik atlas: Meclis’e karşı ayaklanmalar',
    intro: 'Katmanlarla ayaklanmaları sebeplerine göre ayır: İstanbul hükümetinin kışkırttıkları, Kuvâ-yı Millîye kökenli olanlar ve ayrılıkçı ya da azınlık ayaklanmaları. Ankara ve İstanbul her zaman görünür.',
    map_label: 'Şematik gösterim · ayaklanma alanı ya da sınır göstermez',
    layers: [
      { id: 'istanbul', label: 'İstanbul hükümetinin kışkırttıkları', description: 'Anzavur, Bolu–Düzce–Hendek, Yozgat, Konya.', active: true },
      { id: 'kuvay', label: 'Kuvâ-yı Millîye kökenli', description: 'Çerkez Ethem, Demirci Mehmet Efe.', active: true },
      { id: 'ayrilikci', label: 'Ayrılıkçı ve azınlık', description: 'Koçgiri; Pontus Rum çeteleri.', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 40, y: 4, tone: 'water' },
      { label: 'ANADOLU', x: 46, y: 76, tone: 'land' },
      { label: 'EGE', x: 2, y: 70, tone: 'water' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara · Meclis', x: 36, y: 40, tone: 'brand', detail: '23 Nisan 1920’de Büyük Millet Meclisi burada açıldı. Ayaklanmalara karşı tedbirler buradan alındı.' },
      { id: 'istanbul', label: 'İstanbul', x: 10, y: 16, tone: 'muted', detail: '16 Mart 1920’de resmen işgal edildi. Damat Ferit Paşa hükümeti Ankara’ya karşı fetva yayımlattı, Kuvâ-yı İnzibatiye adıyla bir kuvvet kurdu ve ayaklanmaları destekledi.' },
      { id: 'anzavur', label: 'Anzavur · Biga–Balıkesir', x: 6, y: 34, layer: 'istanbul', tone: 'danger', detail: 'Anzavur Ahmet, İstanbul hükümetinin desteğiyle Balıkesir ve Biga çevresinde Kuvâ-yı Millîye’ye karşı ayaklandı. Ayaklanma bastırıldı.' },
      { id: 'duzce', label: 'Bolu–Düzce–Hendek', x: 24, y: 18, layer: 'istanbul', tone: 'danger', detail: '1920 ilkbaharında İstanbul hükümetinin kışkırtmasıyla çıkan ayaklanmalar Ankara ile İstanbul arasındaki yolu tehdit etti.' },
      { id: 'yozgat', label: 'Yozgat', x: 54, y: 30, layer: 'istanbul', tone: 'danger', detail: '1920 yazında çıkan ayaklanma Ankara’nın hemen doğusunda Meclis’i tehdit etti; Çerkez Ethem’in Kuvâ-yı Seyyaresi’nin de katıldığı harekâtla bastırıldı.' },
      { id: 'konya', label: 'Konya', x: 36, y: 64, layer: 'istanbul', tone: 'danger', detail: '1920 sonbaharında Konya çevresinde Meclis’e karşı bir ayaklanma çıktı ve bastırıldı.' },
      { id: 'ethem', label: 'Kütahya çevresi · Çerkez Ethem', x: 18, y: 46, layer: 'kuvay', tone: 'accent', detail: 'Kuvâ-yı Seyyare komutanı Çerkez Ethem, birliklerinin düzenli orduya bağlanmasına karşı çıktı ve Aralık 1920’de ayaklandı. Yenilince Yunan tarafına geçti.' },
      { id: 'efe', label: 'Denizli çevresi · Mehmet Efe', x: 10, y: 76, layer: 'kuvay', tone: 'accent', detail: 'Kuvâ-yı Millîye önderlerinden Demirci Mehmet Efe de düzenli orduya geçişe karşı çıktı; kısa sürede teslim oldu.' },
      { id: 'kocgiri', label: 'Koçgiri', x: 70, y: 40, layer: 'ayrilikci', tone: 'muted', detail: '1921’de Sivas’ın doğusunda ayrılıkçı bir ayaklanma çıktı ve bastırıldı.' },
      { id: 'pontus', label: 'Karadeniz · Pontus çeteleri', x: 56, y: 12, layer: 'ayrilikci', tone: 'muted', detail: 'Karadeniz kıyısında bir Rum devleti kurmak isteyen Pontus çeteleri bölgede huzursuzluk çıkardı.' },
    ],
    routes: [],
    insight:
      'Haritaya bak: Ayaklanmaların önemli bir kısmı Ankara’nın çevresinde ve Ankara ile İstanbul ya da batı cephesi arasındaki yollar üzerindeydi. Bu ayaklanmalar Meclis’i yalnız içeriden sarsmakla kalmadı, batı cephesine giden yolları da tehdit etti.',
    source_note:
      'Ayaklanmaların yerleri; TDV İslâm Ansiklopedisi “Türkiye Büyük Millet Meclisi” ve “Dürrîzâde Abdullah Beyefendi” maddeleri, Atatürk Ansiklopedisi “Kuvâ-yı Seyyare” ve “Çerkes Ethem” maddeleri ile hakemli makaleler esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; ayaklanma alanını göstermez.',
  },
  dataTable: {
    title: 'Misakımillî’nin maddeleri ve ilişkili ilkeler',
    columns: ['Madde', 'İçerik (sadeleştirilmiş)', 'İlişkili ilke'],
    rows: [
      ['1', 'Mondros’ta işgal altında kalan ve Arapların çoğunlukta olduğu yerlerin geleceği halk oylamasıyla belirlenecek. Ateşkes hattının içinde ve dışında Osmanlı-İslam çoğunluğunun yaşadığı yerler hiçbir sebeple bölünemez bir bütündür.', 'Vatanın bütünlüğü'],
      ['2', 'Elviye-i Selâse (Kars, Ardahan, Batum) için gerekirse yeniden halk oylamasına başvurulabilir.', 'Ulusal egemenlik (halkın iradesi)'],
      ['3', 'Batı Trakya’nın hukuki durumu halkın serbestçe vereceği oyla belirlenmelidir.', 'Ulusal egemenlik (halkın iradesi)'],
      ['4', 'İstanbul ve Marmara Denizi’nin güvenliği sağlanmalıdır. Bu şartla Boğazların dünya ticaretine açılması konusunda ilgili devletlerle birlikte karar verilebilir.', 'Vatanın güvenliği; bağımsızlık'],
      ['5', 'Azınlık hakları, komşu ülkelerdeki Müslümanlar da aynı haklardan yararlanmak şartıyla güvence altına alınacaktır.', 'Karşılıklılık'],
      ['6', 'Siyasi, adli, mali ve diğer gelişmemizi engelleyen kayıtlara karşıyız.', 'Tam bağımsızlık (kapitülasyonlara karşı)'],
    ],
    caption:
      'Maddeleri üç ilkeyle eşleştirerek hatırla: 1. madde vatanın bütünlüğü; 2. ve 3. maddeler halkın iradesi (ulusal egemenlik); 6. madde tam bağımsızlık. Program Misakımillî’yi tam olarak bu üç ilkeyle ilişkilendirmeni ister.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Neden yeni bir meclis gerekti ve neden bu meclise karşı ayaklanıldı?',
    lead: 'Büyük Millet Meclisi’nin açılışının da, ona karşı ayaklanmaların da birden çok sebebi var. İkisini aynı zincirde gör.',
    intro: 'Zincirin başı Meclis’in neden kurulduğunu, ortası nasıl oluştuğunu, sonu da ona karşı ayaklanmaları ve alınan tedbirleri anlatır.',
    steps: [
      { tur: 'sebep', title: 'Misakımillî ve İtilaf’ın tepkisi', body: 'Misakımillî İtilaf Devletleri’nin paylaşım planlarına karşı çıkıyordu; İtilaf buna İstanbul’u resmen işgal ederek cevap verdi.' },
      { tur: 'sebep', title: 'Meclis-i Mebusan’ın dağılması', body: 'Mebusların bir kısmı tutuklanıp sürgüne gönderildi; meclis çalışamaz hâle geldi ve kapatıldı. Milletin temsilcilerinin toplanabileceği bir yer kalmadı.' },
      { tur: 'sebep', title: 'İstanbul hükümetinin tutumu', body: 'Damat Ferit Paşa hükümeti İtilaf Devletleri’yle iş birliği yaptı ve Millî Mücadele’ye karşı açıkça tavır aldı.' },
      { tur: 'gelisme', title: 'Büyük Millet Meclisi’nin açılışı', body: 'Ankara’da yeni seçilen temsilciler ve İstanbul’dan gelebilen mebuslarla Meclis 23 Nisan 1920’de açıldı; yasama ve yürütme yetkisini kendinde topladı.' },
      { tur: 'gelisme', title: 'Ayaklanmalar', body: 'İstanbul hükümetinin fetvası ve kışkırtmaları, azınlık çeteleri, düzenli orduya karşı çıkanlar ve ayrılıkçılar Meclis’e karşı ayaklandı.' },
      { tur: 'sonuc', title: 'Tedbirler', body: 'Hıyanet-i Vataniye Kanunu çıkarıldı, karşı fetva yayımlandı, İstiklal Mahkemeleri kuruldu, ayaklanmalar askerî güçle bastırıldı.' },
      { tur: 'sonraki-etki', title: 'Meclis’in otoritesi ve düzenli ordu', body: 'Ayaklanmaların bastırılmasıyla Meclis’in otoritesi bütün Anadolu’da tanındı; ama bu süreçte zaman kaybedildi. Ayaklanmalar düzenli ordu ihtiyacını da açıkça gösterdi.' },
    ],
    inference:
      'Temel çıkarım: Büyük Millet Meclisi işgalin bir sonucu olarak doğdu ve ilk yılında varlığını hem dışarıya hem içeriye karşı savunmak zorunda kaldı. Meclis’i ayakta tutan, milletin desteği ile aldığı kararlı tedbirlerdir.',
    body:
      'Program Birinci Büyük Millet Meclisi’nin nasıl oluştuğuna kısaca değinilmesini ister.\n\n' +
      '**Nasıl oluştu?** Mustafa Kemal Mart 1920’de valiliklere gönderdiği bildiriyle her sancaktan seçilecek temsilcilerin olağanüstü yetkilerle Ankara’da toplanmasını istedi. Meclis iki kaynaktan oluştu: yeni seçimle gelen temsilciler ve İstanbul’daki Meclis-i Mebusan’dan kaçıp Ankara’ya gelebilen mebuslar.\n\n' +
      '**Kimlerden oluşuyordu?** Meclis’te subaylar, memurlar, din adamları, çiftçiler, tüccarlar, avukatlar, doktorlar ve aşiret önderleri gibi toplumun farklı kesimlerinden temsilciler vardı. Bu çeşitlilik, Meclis’in milletin bütününü temsil ettiğini gösteriyordu.\n\n' +
      '**Özellikleri nelerdi?** Millî egemenliğe dayanıyordu. Yasama ve yürütme yetkilerini kendinde topladı (güçler birliği); hükümet, Meclis’in içinden seçilen bakanlardan oluştu. Olağanüstü yetkilere sahipti; savaş şartlarında hızlı karar alabiliyordu. Yeni bir devletin kuruluşunu yönettiği için kurucu bir nitelik de taşıyordu.',
  },
  comparison: {
    title: 'Son Osmanlı Meclis-i Mebusanı ve Birinci Büyük Millet Meclisi',
    columns: ['Son Meclis-i Mebusan (İstanbul)', 'Birinci Büyük Millet Meclisi (Ankara)'],
    rows: [
      { label: 'Açılışı', values: ['12 Ocak 1920', '23 Nisan 1920'] },
      { label: 'Dayanağı', values: ['Kanun-ı Esasi; padişahın onayı', 'Millî egemenlik; milletin iradesi'] },
      { label: 'En önemli kararı', values: ['Misakımillî (28 Ocak 1920)', 'Millî Mücadele’yi yönetmek; Hıyanet-i Vataniye Kanunu; düzenli ordu'] },
      { label: 'Yetkisi', values: ['Yalnız yasama; hükümet padişaha bağlı', 'Yasama ve yürütme (güçler birliği); olağanüstü yetki'] },
      { label: 'Sonu', values: ['İstanbul’un işgaliyle çalışamaz hâle geldi; Nisan 1920’de kapatıldı', 'Millî Mücadele’yi zaferle sonuçlandırdı; Cumhuriyet’i ilan etti'] },
    ],
    insight:
      'Asıl fark dayanaktadır: İstanbul’daki meclis padişahın otoritesi altında çalışıyordu; Ankara’daki Meclis ise gücünü doğrudan milletten alıyordu. Misakımillî’yi yazan İstanbul meclisiydi; onu gerçekleştiren Ankara Meclisi oldu.',
  },
  traps: [
    {
      title: 'Misakımillî’yi Büyük Millet Meclisi’nin kararı sanmak',
      wrong: 'Misakımillî, Ankara’daki Büyük Millet Meclisi’nde kabul edildi.',
      right: 'Misakımillî 28 Ocak 1920’de İstanbul’daki son Osmanlı Meclis-i Mebusanı’nda kabul edildi. Büyük Millet Meclisi Ankara’da daha sonra, 23 Nisan 1920’de açıldı.',
      body: 'Sıra ipucu: Önce Misakımillî (Ocak), sonra İstanbul’un işgali (Mart), en son Büyük Millet Meclisi (Nisan). Misakımillî’nin kabulü, Meclis-i Mebusan’ın dağıtılmasının sebeplerinden biridir.',
    },
    {
      title: 'Ayaklanmaları tek bir sebebe bağlamak',
      wrong: 'Büyük Millet Meclisi’ne karşı ayaklanmaların hepsini İstanbul hükümeti kışkırttı.',
      right: 'Ayaklanmaların önemli bir kısmını İstanbul hükümeti kışkırttı; ama azınlık çeteleri, düzenli orduya geçişe karşı çıkan Kuvâ-yı Millîye önderleri ve ayrılıkçılar da ayaklandı.',
      body: 'Ayaklanmaları dört gruba ayırarak hatırla: İstanbul hükümetinin kışkırttıkları, azınlıkların çıkardıkları, Kuvâ-yı Millîye kökenli olanlar ve ayrılıkçı olanlar.',
    },
    {
      title: 'Güçler birliğini güçler ayrılığı ile karıştırmak',
      wrong: 'Birinci Büyük Millet Meclisi yasama, yürütme ve yargıyı birbirinden ayırdı.',
      right: 'Birinci Büyük Millet Meclisi yasama ve yürütme yetkilerini kendinde topladı; bu güçler birliğidir. Savaş şartlarında hızlı karar alabilmek bu sistemin amacıydı.',
      body: 'Soruda “hükümetin Meclis’in içinden seçilmesi” ifadesi güçler birliğini işaret eder.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Meclis’in ve ayaklanmaların şahsiyetleri',
    lead: 'Bu dönemde Meclis’i kuranlar, ona karşı fetva verenler, fetvaya cevap verenler ve Meclis’e karşı ayaklananlar vardı.',
    intro: 'Kartlarda kişilerin kararlarını ve bu kararların Meclis’in geleceğine etkisini görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal',
        period: '1920',
        position: 'Heyet-i Temsiliye Başkanı; 24 Nisan 1920’den itibaren Büyük Millet Meclisi Başkanı',
        contribution: 'İstanbul’un işgali üzerine Ankara’da olağanüstü yetkili bir meclis toplanmasını istedi ve Meclis’in açılışını hazırladı. Meclis Başkanı olarak ayaklanmalara karşı alınan tedbirleri yönetti.',
        connections: ['Büyük Millet Meclisi’nin açılışı', 'Hıyanet-i Vataniye Kanunu', 'Ayaklanmaların bastırılması'],
        significance: 'Millet iradesinin İstanbul’da susturulduğu anda Ankara’da yeniden toplanmasını sağlaması, ulusal egemenliğe bağlılığının en açık örneklerindendir.',
      },
      {
        name: 'Damat Ferit Paşa',
        period: '1920 · sadrazam (yeniden)',
        position: 'İstanbul hükümetinin başı',
        contribution: 'Ankara’daki Meclis’e karşı fetva yayımlattı, Kuvâ-yı İnzibatiye’yi kurdu ve ayaklanmaları destekledi.',
        connections: ['Fetva (Nisan 1920)', 'Kuvâ-yı İnzibatiye', 'Anzavur ayaklanması'],
        significance: 'İstanbul hükümetinin Millî Mücadele’ye açıkça karşı çıktığı dönemin temsilcisidir.',
      },
      {
        name: 'Dürrizâde Abdullah Efendi',
        period: 'Nisan 1920 · Şeyhülislam',
        position: 'İstanbul’daki en yüksek din görevlisi',
        contribution: 'Damat Ferit Paşa hükümeti adına Kuvâ-yı Millîye aleyhine fetvaları imzaladı.',
        connections: ['Fetva (11 Nisan 1920)'],
        significance: 'Fetva, halkın dinî duygularını Millî Mücadele’ye karşı kullanma girişimiydi ve bazı ayaklanmaları besledi.',
      },
      {
        name: 'Rifat Efendi (Börekçi)',
        period: 'Nisan 1920 · Ankara Müftüsü',
        position: 'Karşı fetvayı hazırlayan müftü',
        contribution: 'İstanbul’daki fetvaya karşı bir fetva hazırladı; bu fetva pek çok müftü, kadı ve Meclis’teki din âlimleri tarafından imzalandı. Bu yüzden İstanbul hükümeti tarafından görevinden alındı.',
        connections: ['Karşı fetva (Nisan 1920)'],
        significance: 'Karşı fetva, halkın dinî duygularının Millî Mücadele’ye karşı kullanılmasını büyük ölçüde engelledi.',
      },
      {
        name: 'Anzavur Ahmet',
        period: '1919–1920',
        position: 'İstanbul hükümetinin desteklediği ayaklanmanın önderi',
        contribution: 'Balıkesir ve Biga çevresinde Kuvâ-yı Millîye’ye ve Meclis’e karşı ayaklandı; ayaklanması bastırıldı.',
        connections: ['Anzavur ayaklanması'],
        significance: 'İstanbul hükümetinin Millî Mücadele’yi içeriden çökertme çabasının bilinen örneklerindendir.',
      },
      {
        name: 'Çerkez Ethem',
        period: '1920–1921',
        position: 'Kuvâ-yı Seyyare komutanı',
        contribution: 'Önce bazı ayaklanmaların bastırılmasında görev aldı. Birliklerinin düzenli orduya bağlanmasına karşı çıkınca Aralık 1920’de Meclis’e karşı ayaklandı; yenilince Yunan tarafına geçti.',
        connections: ['Yozgat ayaklanmasının bastırılması', 'Düzenli orduya geçiş', 'Çerkez Ethem ayaklanması'],
        significance: 'Kuvâ-yı Millîye’den düzenli orduya geçişin neden gerekli olduğunu ve bu geçişin neden kolay olmadığını birlikte gösteren örnektir.',
      },
    ],
    takeaway:
      'Aynı dönemde dinî otorite iki farklı yönde kullanıldı: İstanbul’daki fetva Meclis’e karşı, Ankara’daki karşı fetva Meclis’ten yanaydı. Halkın hangisine inanacağı, Meclis’in ayakta kalmasında belirleyici oldu.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-ayaklanmalar`,
      title: 'Ayaklanmalar ve Hıyanet-i Vataniye Kanunu',
      lead: 'Program Meclis’e karşı ayaklanmaları ve alınan tedbirleri, özellikle de Hıyanet-i Vataniye Kanunu’nun gerekçelerini ve uygulanmasını ister.',
      blocks: [
        {
          id: `${SLUG}-ayaklanmalar-anlatim`,
          type: 'prose',
          body:
            '**Ayaklanmaların sebepleri:**\n\n' +
            '- **İstanbul hükümetinin kışkırtmaları:** Fetvalar ve propagandayla halk Meclis’e karşı kışkırtıldı; Kuvâ-yı İnzibatiye adlı bir kuvvet kuruldu. Anzavur, Bolu–Düzce–Hendek, Yozgat ve Konya ayaklanmaları bu gruptadır.\n' +
            '- **Azınlıkların faaliyetleri:** Karadeniz’de Pontus Rum çeteleri ve bazı Ermeni gruplar bölgede huzursuzluk çıkardı.\n' +
            '- **Düzenli orduya geçişe karşı çıkanlar:** Kendi birliklerinin düzenli orduya bağlanmasını istemeyen Çerkez Ethem ve Demirci Mehmet Efe ayaklandı.\n' +
            '- **Ayrılıkçı hareketler:** 1921’de Koçgiri’de ayrılıkçı bir ayaklanma çıktı.\n' +
            '- **Halkın yorgunluğu:** Uzun savaş yılları, ağır vergiler ve asker toplama işlemleri bazı bölgelerde hoşnutsuzluğu artırdı; kışkırtmalar bu ortamda karşılık buldu.\n\n' +
            '**Alınan tedbirler:**\n\n' +
            '- **Hıyanet-i Vataniye Kanunu (29 Nisan 1920):** Meclis’in meşruiyetine söz, eylem ya da yazıyla karşı çıkanları vatan haini saydı ve ağır cezalar öngördü.\n' +
            '- **Karşı fetva:** Ankara Müftüsü Rifat Efendi ve pek çok müftünün imzaladığı fetva, İstanbul’daki fetvanın etkisini kırdı.\n' +
            '- **İstiklal Mahkemeleri (Eylül 1920):** Firar edenleri ve ayaklanmalara katılanları hızla yargılamak için Meclis üyelerinden oluşan mahkemeler kuruldu.\n' +
            '- **Askerî tedbirler:** Ayaklanmalar Kuvâ-yı Millîye birlikleri ve yeni kurulan düzenli birliklerle bastırıldı.\n\n' +
            '**Sonuçları:** Ayaklanmalar Meclis’in dikkatini ve gücünü içeriye çevirdi; Yunan ordusu bu durumdan yararlanarak 1920 yazında Batı Anadolu’da ilerledi. Ama ayaklanmaların bastırılması Meclis’in otoritesini bütün Anadolu’ya kabul ettirdi ve düzenli ordunun gerekliliğini herkese gösterdi.',
        },
        {
          id: `${SLUG}-ayaklanmalar-tablo`,
          type: 'table',
          interactive: true,
          title: 'Ayaklanmalar: sebebe göre gruplar',
          columns: ['Grup', 'Örnekler', 'Amaç ya da sebep'],
          rows: [
            ['İstanbul hükümetinin kışkırttıkları', 'Anzavur, Kuvâ-yı İnzibatiye, Bolu–Düzce–Hendek, Yozgat, Konya', 'Meclis’i ve Millî Mücadele’yi çökertmek'],
            ['Azınlıkların çıkardıkları', 'Pontus Rum çeteleri', 'Ayrı devlet kurmak'],
            ['Kuvâ-yı Millîye kökenli', 'Çerkez Ethem, Demirci Mehmet Efe', 'Düzenli orduya bağlanmayı reddetmek'],
            ['Ayrılıkçı', 'Koçgiri (1921)', 'Ayrı bir yönetim kurmak'],
          ],
          caption: 'Aynı dönemde farklı gruplar farklı sebeplerle ayaklandı; hepsinin ortak sonucu Meclis’in zor durumda kalmasıydı.',
        },
        {
          id: `${SLUG}-ayaklanmalar-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Fetvaya fetva, isyana kanun, kanuna mahkeme”',
          body: 'İstanbul’un fetvasına Ankara’nın karşı fetvası; ayaklanmalara Hıyanet-i Vataniye Kanunu; kanunu hızla uygulamak için İstiklal Mahkemeleri.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste iki resmî belgeyi özgün metinleriyle okuyacaksın: Misakımillî’nin iki maddesini ve Hıyanet-i Vataniye Kanunu’nun ilk maddesini.',
    intro:
      'Kanun ve bildiri metinleri kısa ama yoğundur. Her birinde şu soruları sor: **Kim karar veriyor? Neyi koruyor? Kime karşı?** Bu soruların cevabı, belgenin hangi ilkeye dayandığını gösterir.\n\n' +
      'Birinci ve ikinci metinler birebir alıntıdır; üçüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Misakımillî’nin altıncı maddesi',
        kunye: 'Misakımillî Beyannamesi, 28 Kânunusani 1336 (28 Ocak 1920), Meclis-i Mebusan. Metin: Sefer Yazıcı (ed.), Millî Egemenlik Belgeleri, TBMM Basımevi, Ankara 2015; Vikikaynak.',
        nitelik: 'Birebir alıntı. Altıncı maddenin ilk bölümüdür.',
        metin:
          'Millî ve iktisadi inkişafâtımız daire-i imkana girmek ve daha asrî bir idare-i muntazama şeklinde tedvir-i umûra muvaffak olabilmek için her devlet gibi bizim de temin-i esbab ve inkişafâtımızda istiklal ve serbesti-i tamme mazhar olmamız üssü’l-esas-ı hayat ve bekamızdır. Bu sebeple siyasî, adlî, malî ve sair inkişafâtımıza mani kuyûda muhalifiz.',
        soru: 'Bu madde hangi ilkeyi dile getirir? “Siyasî, adlî, malî ve sair inkişafâtımıza mani kuyûd” ifadesiyle neyin kastedildiği düşünülebilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“İnkişaf”: gelişme. “Asrî”: çağdaş. “İdare-i muntazama”: düzenli yönetim. “İstiklal ve serbesti-i tamme”: bağımsızlık ve tam serbestlik. “Üssü’l-esas-ı hayat ve beka”: varlığımızın ve devamımızın temeli. “Mani kuyûd”: engelleyen kayıtlar. “Muhalifiz”: karşıyız.' },
          { title: 'Maddenin söylediğini çıkar', body: 'Her devlet gibi bizim de gelişmemizde tam bağımsız ve serbest olmamız varlığımızın temelidir; bu yüzden siyasi, adli ve mali gelişmemizi engelleyen kayıtlara karşıyız.' },
          { title: 'İlkeyi adlandır', body: 'Madde tam bağımsızlık ilkesinin ifadesidir.' },
          { title: 'Somut örneği bul', body: '“Adli” ve “mali” kayıtlar denince kapitülasyonlar ve Düyun-u Umumiye gibi yabancıların yargı ve mali alanlarda ayrıcalık ya da denetim sahibi olduğu düzenlemeler akla gelir.' },
        ],
        cevap: 'Madde tam bağımsızlık ilkesini dile getirir. “Gelişmemizi engelleyen kayıtlar” ifadesiyle kapitülasyonlar ve yabancıların yargı ve maliye üzerindeki denetimi gibi bağımsızlığı sınırlayan düzenlemeler kastedilmektedir.',
        cikarim: 'Bağımsızlık yalnız toprakla ilgili değildir: Misakımillî, yargıda ve maliyede yabancı denetiminin de kabul edilemeyeceğini söyleyerek bağımsızlığı bir bütün olarak tanımlar.',
      },
      {
        tur: 'birincil',
        baslik: 'Hıyanet-i Vataniye Kanunu’nun birinci maddesi',
        kunye: 'Hıyanet-i Vataniye Kanunu, Büyük Millet Meclisi, 29 Nisan 1920 (Kanun no: 2). Metin: TBMM kanun arşivi; Vikikaynak.',
        nitelik: 'Birebir alıntı. Kanunun birinci maddesidir.',
        metin:
          'Makamı Muallayı Hilafet ve Saltanatı ve Memaliki Mahruseyi Şahaneyi yedi ecanipten tahlis ve taarruzatı defi maksadına matuf olarak teşekkül eden Büyük Millet Meclisinin meşruiyetine isyanı mutazammın kavlen veya fiilen veya tahriren muhalefet ve ifsadatta bulunan, haini vatan addolunur.',
        soru: 'Kanun kimleri “vatan haini” sayıyor? Kanunda Meclis’in kuruluş amacı nasıl tanımlanmış ve bu tanım o günün şartlarında neden önemli olabilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Makam-ı muallâ-yı hilafet ve saltanat”: yüce halifelik ve saltanat makamı. “Memalik-i mahruse-i şahane”: padişahın ülkesi. “Yed-i ecanip”: yabancıların eli. “Tahlis”: kurtarma. “Meşruiyet”: yasallık. “Kavlen, fiilen, tahriren”: sözle, eylemle, yazıyla. “İfsadat”: bozgunculuk.' },
          { title: 'Suçu tanımla', body: 'Meclis’in yasallığına karşı ayaklanma niteliğinde sözle, eylemle ya da yazıyla muhalefet ve bozgunculuk yapanlar vatan haini sayılır.' },
          { title: 'Meclis’in amacını bul', body: 'Kanuna göre Meclis, halifeliği, saltanatı ve ülkeyi yabancıların elinden kurtarmak ve saldırıları önlemek için kurulmuştur.' },
          { title: 'Tanımın önemini düşün', body: 'İstanbul’daki fetva Meclis’i padişaha karşı bir isyan gibi göstermeye çalışıyordu. Kanun, Meclis’in amacını padişahlığı ve halifeliği kurtarmak olarak tanımlayarak bu propagandanın etkisini kırmayı ve halkın desteğini korumayı amaçlıyordu.' },
        ],
        cevap: 'Kanun, Meclis’in yasallığına sözle, eylemle ya da yazıyla karşı çıkan ve bozgunculuk yapanları vatan haini sayar. Meclis’in amacı halifeliği, saltanatı ve ülkeyi yabancıların elinden kurtarmak olarak tanımlanmıştır; bu tanım, Meclis’i padişaha karşı bir isyan gibi gösteren propagandaya karşı halkın desteğini korumaya yönelikti.',
        cikarim: 'Bir belgenin dili, yazıldığı günün şartlarını yansıtır. 1920’deki bu tanımı okurken, halkın padişaha ve halifeye bağlılığının o gün ne kadar güçlü olduğunu hesaba kat.',
      },
      {
        tur: 'ikincil',
        baslik: 'Birinci Meclis üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Birinci Büyük Millet Meclisi, subaylardan çiftçilere, din adamlarından tüccarlara kadar toplumun hemen her kesiminden temsilcileri bir araya getirdi. Yasama ve yürütme yetkisini kendinde toplaması, savaş şartlarında hızlı karar almasını sağladı. Bu yüzden Birinci Meclis, Millî Mücadele’nin gerçek karargâhıydı.',
        soru: 'Metindeki olgu ve yorumu ayır. “Gerçek karargâh” benzetmesine katılmak için hangi kanıtları kullanırdın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Meclis’in farklı kesimlerden temsilcilerden oluşması ve yasama ile yürütme yetkisini kendinde toplaması olgudur.' },
          { title: 'Yorumları ayır', body: '“Hızlı karar almasını sağladı” bir değerlendirmedir; “gerçek karargâh” ise bir benzetme ve yargıdır.' },
          { title: 'Kanıtla sına', body: 'Meclis’in ordunun kurulması, Hıyanet-i Vataniye Kanunu, İstiklal Mahkemeleri ve dış ilişkiler gibi savaşın bütün alanlarında karar vermesi benzetmeyi destekler.' },
        ],
        cevap: 'Olgular: temsilcilerin çeşitliliği ve güçler birliği. Yorumlar: hızlı karar alma ve “gerçek karargâh” benzetmesi. Meclis’in ordu, yargı ve dış ilişkiler konusunda karar veren organ olması benzetmeyi destekler.',
        cikarim: 'Benzetmeler bir yorumu akılda kalıcı yapar; ama bir benzetmeyi kabul etmeden önce onu destekleyen somut olayları bulmaya çalış.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Maddeyi ilkeyle eşleştir',
      prompt:
        'Misakımillî’nin aşağıdaki maddelerini program ilkeleriyle (vatanın bütünlüğü, ulusal egemenlik, tam bağımsızlık) eşleştir:\n\n- a) Osmanlı-İslam çoğunluğunun yaşadığı yerler hiçbir sebeple bölünemez bir bütündür.\n- b) Batı Trakya’nın durumu halkın serbestçe vereceği oyla belirlenmelidir.\n- c) Siyasi, adli, mali gelişmemizi engelleyen kayıtlara karşıyız.',
      steps: [
        { title: 'a', body: 'Toprakların bölünmezliği → vatanın bütünlüğü.' },
        { title: 'b', body: 'Kararın halka bırakılması → ulusal egemenlik (halkın iradesi).' },
        { title: 'c', body: 'Yabancı kısıtlamalara karşı çıkış → tam bağımsızlık.' },
      ],
      answer: 'a) vatanın bütünlüğü · b) ulusal egemenlik · c) tam bağımsızlık.',
      takeaway: 'Madde ile ilke eşleştirirken anahtar sözcüğü bul: “bölünemez” bütünlük, “halkın oyu” egemenlik, “kayıtlara karşıyız” bağımsızlık.',
    },
    {
      title: 'Bir kararın sonucu',
      prompt: 'Misakımillî’nin kabul edilmesi, Büyük Millet Meclisi’nin Ankara’da açılmasına nasıl yol açtı? Adım adım açıkla.',
      steps: [
        { title: '1', body: 'Misakımillî İtilaf Devletleri’nin paylaşım planlarına karşı çıkıyordu.' },
        { title: '2', body: 'İtilaf Devletleri İstanbul’u 16 Mart 1920’de resmen işgal etti; bazı mebusları sürgüne gönderdi.' },
        { title: '3', body: 'Meclis-i Mebusan çalışamaz hâle geldi ve kapatıldı; milletin temsilcilerinin toplanabileceği yer kalmadı.' },
        { title: '4', body: 'Mustafa Kemal Ankara’da olağanüstü yetkili bir meclis toplanmasını istedi; Meclis 23 Nisan 1920’de açıldı.' },
      ],
      answer: 'Misakımillî → İstanbul’un işgali → Meclis-i Mebusan’ın dağılması → Ankara’da Büyük Millet Meclisi.',
      takeaway: 'Zincir sorularında her adımın bir öncekinin sonucu olduğunu göster; tek bir halkayı atlamak cevabı eksik bırakır.',
    },
    {
      title: 'Ayaklanmayı grubuna yerleştir',
      prompt:
        'Aşağıdaki ayaklanmaları sebeplerine göre grupla:\n\n- I. Anzavur ayaklanması\n- II. Çerkez Ethem ayaklanması\n- III. Koçgiri ayaklanması\n- IV. Yozgat ayaklanması',
      steps: [
        { title: 'I', body: 'İstanbul hükümetinin desteğiyle çıktı → İstanbul hükümetinin kışkırttıkları.' },
        { title: 'II', body: 'Düzenli orduya bağlanmayı reddetti → Kuvâ-yı Millîye kökenli.' },
        { title: 'III', body: 'Ayrı bir yönetim amaçladı → ayrılıkçı.' },
        { title: 'IV', body: 'İstanbul hükümetinin kışkırtmalarıyla çıktı → İstanbul hükümetinin kışkırttıkları.' },
      ],
      answer: 'I ve IV İstanbul hükümetinin kışkırttıkları; II Kuvâ-yı Millîye kökenli; III ayrılıkçı.',
      takeaway: 'Ayaklanma sorularında “kim kışkırttı ya da neden?” sorusunu sor; grup bu soruyla belirlenir.',
    },
  ],
  questionClue: {
    concept: 'Soruda Misakımillî’yi ve Meclis’i nasıl tanırım?',
    statement: 'Soru bir karar maddesi, bir meclisin özelliği ya da bir ayaklanmanın sebebi verip çıkarım isteyebilir.',
    clues: [
      '“Bölünemez bir bütün”, “halk oylaması”, “kayıtlara karşıyız” → Misakımillî',
      '“Son Osmanlı Meclis-i Mebusanı”, “28 Ocak 1920” → Misakımillî’nin kabulü',
      '“Olağanüstü yetki”, “güçler birliği”, “23 Nisan 1920” → Büyük Millet Meclisi',
      '“Fetva”, “Kuvâ-yı İnzibatiye” → İstanbul hükümetinin Meclis’e karşı tutumu',
      '“Vatan haini”, “Meclis’in meşruiyeti” → Hıyanet-i Vataniye Kanunu',
    ],
    reasoning: 'Önce belgeyi ya da olayı tanı, sonra programın istediği ilkeyle (vatanın bütünlüğü, ulusal egemenlik, tam bağımsızlık) ya da tedbirle (kanun, fetva, mahkeme) eşleştir.',
    boundary: 'Dikkat: Misakımillî’de kesin sınırlar çizilmez; Mondros ateşkes hattı ölçü alınır ve bazı bölgeler için halk oylaması öngörülür.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'Bu kazanımlar Misakımillî’nin bir maddesi, Meclis’in özellikleri, bir ayaklanma haritası ya da Hıyanet-i Vataniye Kanunu’nun bir maddesi verilerek sorulabilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Misakımillî maddesini ilkeyle eşleştirme',
      'Misakımillî ile Meclis’in açılışı arasındaki sebep–sonuç ilişkisini kurma',
      'Birinci Meclis’in özelliklerini belirleme',
      'Ayaklanmaları sebeplerine göre gruplama',
      'Hıyanet-i Vataniye Kanunu’nun gerekçesini açıklama',
    ],
  },
  checkpoints: [
    {
      prompt: 'Misakımillî’de bazı bölgeler için halk oylaması öngörülmesi, Millî Mücadele’nin hangi ilkesine dayanır? Bu yöntem neden güçlü bir dayanak olabilirdi?',
      hint: 'O yıllarda büyük devletlerin dile getirdiği ilkeleri hatırla.',
      answer: 'Halkın geleceğine kendisinin karar vermesi ulusal egemenlik ilkesine dayanır. Bu yöntem, milletlerin kendi geleceklerini belirleme hakkını dile getiren Wilson İlkeleri’yle de uyumluydu; bu yüzden İtilaf Devletleri’nin kendi söyledikleriyle çelişmeden reddetmesi zor bir taleptir.',
    },
    {
      prompt: 'Birinci Büyük Millet Meclisi’nin yasama ve yürütmeyi kendinde toplaması savaş şartlarında hangi avantajı sağladı? Bu sistemin bir sınırı olabilir mi?',
      answer: 'Kararların hızlı alınmasını ve uygulanmasını sağladı; savaş şartlarında zaman kazandırdı. Sınırı ise yetkilerin tek bir organda toplanmasıdır; olağan dönemlerde güçlerin denetlenmesi için ayrılık daha uygun görülür. Nitekim ilerleyen yıllarda anayasal düzen değişecekti.',
    },
    {
      prompt: 'Ayaklanmalar Millî Mücadele’yi hangi yönlerden olumsuz etkiledi?',
      answer: 'Meclis’in gücünü ve dikkatini içeriye çevirdi; asker ve malzeme ayaklanmaları bastırmak için kullanıldı; bu sırada Yunan ordusu Batı Anadolu’da ilerledi; kardeş kanı döküldü. Aynı zamanda düzenli ordunun kurulmasını geciktirdi.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.2.6 bir “ilişkilendirir” kazanımıdır: öğrenciden Misakımillî’yi ve Meclis’in açılışını vatanın bütünlüğü, ulusal egemenlik ve tam bağımsızlık ilkeleriyle ilişkilendirmesini ister. İTA.8.2.7 bir “analiz eder” kazanımıdır: Meclis’e karşı ayaklanmaları ve alınan tedbirleri parçalarına ayırmasını ister. Bu kazanımlara dayanan bir soru bir madde ya da bir ayaklanma bilgisi verip ilişkili ilkeyi ya da tedbiri sorabilir.',
    measures: [
      'Misakımillî maddelerini ilkelerle ilişkilendirme',
      'Misakımillî ile Meclis’in açılışı arasındaki bağı açıklama',
      'Birinci Meclis’in oluşumunu ve özelliklerini açıklama',
      'Ayaklanmaları sebeplerine göre sınıflandırma',
      'Hıyanet-i Vataniye Kanunu’nun gerekçesini ve uygulanmasını açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Misakımillî’nin iki maddesi',
    passage:
      'Misakımillî’nin iki maddesi şöyledir (sadeleştirilmiş): “Kars, Ardahan ve Batum için gerekirse yeniden halk oylamasına başvurulabilir.” “Batı Trakya’nın hukuki durumu, orada yaşayan halkın tam bir özgürlük içinde vereceği oyla belirlenmelidir.”',
    question: 'Bu maddelerle Misakımillî’nin hangi ilkeye dayandığı söylenebilir?',
    options: [
      { text: 'Ulusal egemenlik', explanation: 'Doğru. İki maddede de bir bölgenin geleceği orada yaşayan halkın oyuna bırakılıyor; bu, egemenliğin halka ait olduğu düşüncesidir.' },
      { text: 'Laiklik', explanation: 'Maddelerde din ile devlet işlerinin ayrılmasından söz edilmez; laiklik bu maddelerle ilgili değildir.' },
      { text: 'Devletçilik', explanation: 'Devletçilik ekonomide devletin rolüyle ilgilidir; maddeler ekonomiden söz etmez.' },
      { text: 'Güçler ayrılığı', explanation: 'Maddelerde devletin organları arasındaki yetki paylaşımından söz edilmez.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü iki maddenin ortak noktasını soruyor. İki maddede de ortak ifade “halk oylaması” ve “halkın vereceği oy”dur. Bu ortak ifade doğrudan ulusal egemenliği işaret eder.',
    critical_point: 'Çeldiriciler Atatürk ilkelerinden ve anayasal kavramlardan seçilmiştir; hepsi önemli kavramlardır ama bu maddelerle ilgili değildir. Kavram sorularında seçeneğin önemli olmasına değil, metinle ilgili olmasına bak.',
    takeaway: 'İki maddenin ortak ilkesini soran sorularda önce iki maddede tekrarlanan sözcüğü bul.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Millî Ant ve millî meclis',
    range: 'Ocak 1920–1921',
    body:
      'Son Osmanlı Meclis-i Mebusanı 12 Ocak 1920’de İstanbul’da açıldı ve 28 Ocak 1920’de Misakımillî’yi kabul etti: Osmanlı-İslam çoğunluğunun yaşadığı yerler bölünemez bir bütündü; bazı bölgelerin geleceğini halk oylaması belirleyecekti; bağımsızlığı sınırlayan kayıtlar kabul edilemezdi. İtilaf Devletleri 16 Mart 1920’de İstanbul’u resmen işgal edince meclis dağıldı. Mustafa Kemal’in çağrısıyla Büyük Millet Meclisi 23 Nisan 1920’de Ankara’da açıldı; millî egemenliğe dayanıyor, yasama ve yürütmeyi kendinde topluyordu. İstanbul hükümetinin fetvası ve kışkırtmaları, azınlık çeteleri, Kuvâ-yı Millîye kökenli önderler ve ayrılıkçılar Meclis’e karşı ayaklandı. Meclis karşı fetva, Hıyanet-i Vataniye Kanunu ve İstiklal Mahkemeleri ile karşılık verdi; ayaklanmaları bastırarak otoritesini bütün Anadolu’ya kabul ettirdi.',
    turning_points: [
      '12 Ocak 1920 · Son Meclis-i Mebusan açıldı',
      '28 Ocak 1920 · Misakımillî kabul edildi',
      '16 Mart 1920 · İstanbul resmen işgal edildi',
      '23 Nisan 1920 · Büyük Millet Meclisi açıldı',
      '29 Nisan 1920 · Hıyanet-i Vataniye Kanunu',
      'Eylül 1920 · İstiklal Mahkemeleri',
      'Aralık 1920–1921 · Son ayaklanmalar bastırıldı',
    ],
  },
  summary: [
    '**Misakımillî (28 Ocak 1920):** son Osmanlı Meclis-i Mebusanı’nda kabul edildi; Şubat 1920’de duyuruldu.',
    '**Maddeler ve ilkeler:** 1. madde vatanın bütünlüğü; 2–3. maddeler halk oylaması, yani ulusal egemenlik; 6. madde tam bağımsızlık (kapitülasyonlara karşı).',
    '**İstanbul’un resmen işgali (16 Mart 1920):** Meclis-i Mebusan dağıldı; Ankara’da meclis çağrısı yapıldı.',
    '**Büyük Millet Meclisi (23 Nisan 1920):** yeni seçilen temsilciler ve İstanbul’dan gelen mebuslar; millî egemenlik, güçler birliği, olağanüstü yetki.',
    '**Ayaklanmaların grupları:** İstanbul hükümetinin kışkırttıkları (Anzavur, Düzce, Yozgat, Konya), azınlıklar (Pontus), Kuvâ-yı Millîye kökenli (Çerkez Ethem, Demirci Mehmet Efe), ayrılıkçı (Koçgiri).',
    '**Tedbirler:** karşı fetva, Hıyanet-i Vataniye Kanunu (29 Nisan 1920), İstiklal Mahkemeleri (Eylül 1920), askerî güç.',
  ],
  quizzes: [
    {
      question: 'Misakımillî hangi mecliste kabul edilmiştir?',
      options: ['Birinci Büyük Millet Meclisi', 'Son Osmanlı Meclis-i Mebusanı', 'Sivas Kongresi', 'Erzurum Kongresi'],
      answer_index: 1,
      explanation: 'Misakımillî 28 Ocak 1920’de İstanbul’daki son Osmanlı Meclis-i Mebusanı’nda kabul edildi. Büyük Millet Meclisi daha sonra, 23 Nisan 1920’de Ankara’da açıldı; kongreler ise meclis değildir.',
    },
    {
      question: 'Misakımillî’nin “Siyasi, adli, mali gelişmemizi engelleyen kayıtlara karşıyız.” maddesi en çok hangi ilkeyle ilgilidir?',
      options: ['Tam bağımsızlık', 'Laiklik', 'Halkçılık', 'İnkılapçılık'],
      answer_index: 0,
      explanation: 'Bağımsızlığı sınırlayan yabancı kayıtlara, örneğin kapitülasyonlara karşı çıkış tam bağımsızlık ilkesinin ifadesidir.',
    },
    {
      question: 'Aşağıdakilerden hangisi Birinci Büyük Millet Meclisi’nin özelliklerinden biri değildir?',
      options: ['Millî egemenliğe dayanması', 'Yasama ve yürütme yetkisini kendinde toplaması', 'Olağanüstü yetkilere sahip olması', 'Padişahın onayıyla toplanması'],
      answer_index: 3,
      explanation: 'Birinci Meclis padişahın onayıyla değil, milletin iradesiyle toplandı; bu, onu İstanbul’daki Meclis-i Mebusan’dan ayıran temel özelliktir.',
    },
    {
      question: 'Büyük Millet Meclisi’nin ayaklanmalara karşı aldığı tedbirler arasında aşağıdakilerden hangisi yer almaz?',
      options: ['Hıyanet-i Vataniye Kanunu’nun çıkarılması', 'İstiklal Mahkemeleri’nin kurulması', 'Karşı fetva yayımlanması', 'Kuvâ-yı İnzibatiye’nin kurulması'],
      answer_index: 3,
      explanation: 'Kuvâ-yı İnzibatiye’yi İstanbul hükümeti Millî Mücadele’ye karşı kurdu; bu, Meclis’in değil, Meclis’e karşı olanların aldığı bir tedbirdir.',
    },
  ],
  next: ['Sevr Antlaşması ve Tepkiler', 'Doğu ve Güney Cepheleri'],
})

export default lesson
