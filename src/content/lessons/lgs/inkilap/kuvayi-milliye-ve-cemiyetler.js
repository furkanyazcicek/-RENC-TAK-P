import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 4. ders
 * Kazanım : İTA.8.2.4
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   "Millî cemiyetler ve millî varlığa düşman cemiyetlerin başlıca
 *    özelliklerine değinilir."
 *
 * KAPSAM KARARI
 * Program "başlıca özellikler" der; ders bu yüzden cemiyetleri tek tek
 * ezberletmek yerine iki grubun ORTAK özelliklerini öne çıkarır ve her
 * gruptan başlıca örnekleri verir. Nutuk'un ilgili bölümlerinden iki
 * kısa birebir alıntı kullanıldı (Nutuk 1927; eser kamu malıdır; metin
 * Vikikaynak'taki 1. bölümden alındı ve ders kitaplarıyla karşılaştırıldı).
 * Nutuk'un Mustafa Kemal'in bakış açısını taşıdığı derste açıkça söylenir.
 * Manda ve himaye tartışması ayrıntısıyla Erzurum–Sivas dersinde işlenir.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 7.
 */

const SLUG = 'lgs-tarih-kuvayi-milliye-ve-cemiyetler'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 4,
  title: 'Kuvâ-yı Millîye ve Cemiyetler: Milletin Kendi Kendini Savunması',
  subtitle:
    'Ordusu dağıtılan, hükümeti direnmeyen bir ülkede halk kendi silahını, kendi örgütünü ve kendi sesini buldu. Aynı günlerde bazı cemiyetler ise kurtuluşu yabancı bir devletin korumasında arıyordu.',
  minutes: 45,
  kazanimlar: ['İTA.8.2.4'],
  kapsamNotu:
    'Program cemiyetlerin başlıca özelliklerine değinilmesini istediği için ders iki grubun ortak özelliklerini öne çıkarır ve her gruptan başlıca örnekleri verir. Nutuk’tan yapılan alıntılar birebirdir ve Mustafa Kemal’in bakış açısını taşıdığı ayrıca belirtilir.',
  prerequisites: [
    {
      topic: 'Mondros Ateşkes Antlaşması ve İşgaller Karşısında Tutumlar (önceki ders)',
      why: 'Kuvâ-yı Millîye ve millî cemiyetler, Mondros’un ardından gelen işgallere halkın verdiği cevaptır.',
    },
    {
      topic: 'Manda ve himaye kavramları',
      why: 'Bazı cemiyetlerin neden “millî varlığa düşman” sayıldığını anlamak için bir devletin başka bir devletin korumasına girmesinin ne anlama geldiğini bilmek gerekir.',
    },
  ],
  outcomes: [
    'Kuvâ-yı Millîye’nin hangi şartlarda, nasıl ortaya çıktığını açıklayabileceksin.',
    'Kuvâ-yı Millîye’nin özelliklerini, yararlarını ve sınırlılıklarını sıralayabileceksin.',
    'Millî cemiyetlerin ortak özelliklerini ve başlıca örneklerini söyleyebileceksin.',
    'Millî varlığa düşman cemiyetleri amaçlarına göre sınıflandırabileceksin.',
    'Kuvâ-yı Millîye’den düzenli orduya geçişin sebeplerini açıklayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Ordu dağıldı, millet ayağa kalktı',
    lead:
      'Mondros’tan sonra ordu terhis ediliyor, İstanbul hükümeti direnilmemesini istiyordu. Peki işgal edilen bir şehirde yaşayan bir öğretmen, bir çiftçi, bir subay ne yapabilirdi?',
    body:
      'Mondros Ateşkes Antlaşması’nın ardından Anadolu’nun pek çok yeri işgal edilmeye başlandı. Osmanlı ordusu dağıtılıyor, silahlar toplanıyor, İstanbul’daki hükümet işgallere karşı konulmamasını istiyordu. Bu durumda halk iki şey yaptı. Birincisi, **cemiyetler** kurdu: Bu cemiyetler işgalleri protesto etti, Türklerin haklarını basın yoluyla ve yabancı temsilcilere gönderilen yazılarla savundu. İkincisi, işgalin geldiği yerlerde **silahlı direniş** örgütledi. Bu gönüllü silahlı gruplara “millî kuvvetler” anlamında **Kuvâ-yı Millîye** denildi.\n\n' +
      'Kuvâ-yı Millîye ilk olarak güneyde, Fransız işgaline karşı Dörtyol’da; İzmir’in işgalinden sonra da Batı Anadolu’da ortaya çıktı. Ayvalık’ta Yarbay Ali Bey (Çetinkaya) ve birliği Yunan kuvvetlerine karşı ilk direniş cephelerinden birini kurdu. Aydın’dan Balıkesir’e kadar köylüler, efeler, subaylar, öğretmenler ve din adamları bu direnişin içinde yer aldı.\n\n' +
      'Aynı dönemde bazı cemiyetler ise ülkeyi kurtarmanın yolunu başka yerde arıyordu: İngiltere’nin ya da ABD’nin koruması altına girmekte, padişahın yanında durmakta ya da ayrı bir devlet kurmakta. Program bu iki grubu ayırmanı ister: **millî cemiyetler** ve **millî varlığa düşman cemiyetler**.',
  },
  concepts: [
    { term: 'Kuvâ-yı Millîye', body: '“Millî kuvvetler.” Mondros’tan sonra işgallere karşı halkın gönüllü olarak kurduğu, bölgesel ve düzensiz silahlı direniş grupları.' },
    { term: 'Müdafaa-i Hukuk', body: '“Hakları savunma.” Millî cemiyetlerin çoğunun adında geçen bu ifade, amacın bir bölgenin halkının haklarını savunmak olduğunu gösterir.' },
    { term: 'Redd-i İlhak', body: '“Katılmayı reddetme.” İzmir’in Yunanistan’a katılmasına karşı çıkan hareket; Batı Anadolu’da Kuvâ-yı Millîye’yi örgütleyen kongrelerin de ortak ilkesiydi.' },
    { term: 'Manda', body: 'Bir ülkenin yönetiminin, kendini yönetebilecek duruma gelene kadar büyük bir devlete bırakılması. Bazı cemiyetler ABD mandasını kurtuluş yolu olarak görüyordu.' },
    { term: 'Himaye', body: 'Bir devletin başka bir devletin korumasına girmesi. İngiliz Muhipleri Cemiyeti İngiltere’nin himayesini istiyordu. Manda ve himaye, tam bağımsızlıkla bağdaşmaz.' },
    { term: 'Düzenli ordu', body: 'Merkezî bir komutaya bağlı, eğitimli, disiplinli ve düzenli ikmal alan ordu. Kuvâ-yı Millîye’nin yerini 1920’den itibaren düzenli ordu aldı.' },
  ],
  why: {
    question: 'Halk neden devletin ordusunu beklemeden kendi silahlı gruplarını kurdu?',
    body:
      'Çünkü beklenecek bir ordu kalmamıştı. Mondros’un 5. maddesiyle ordu terhis ediliyor, silahlar ve cephane toplanıyordu. İstanbul hükümeti de işgallere direnilmemesini istiyordu. Öte yandan işgaller her gün yeni bir şehre uzanıyordu; İzmir’in işgaliyle birlikte Batı Anadolu’da yerleşim yerleri doğrudan tehdit altına girdi.\n\n' +
      'Böyle bir durumda insanlar ya evlerini ve topraklarını bırakıp göç edecek ya da kendi imkânlarıyla karşı koyacaktı. Kuvâ-yı Millîye ikinci yolun seçilmesidir. Bu seçim, programın bir önceki kazanımda vurguladığı vatanseverlik ve millî birlik duygusunun silahlı direnişe dönüşmesi demekti.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Cemiyetlerden Kuvâ-yı Millîye’ye, oradan düzenli orduya (1918–1921)',
    lead: 'Önce protesto eden cemiyetler, sonra silaha sarılan gruplar, en son düzenli ordu. Bu sıralamayı bir gelişim olarak oku.',
    intro: 'Kronolojide dağınık ve bölgesel başlayan direnişin nasıl tek bir çatı altında toplandığını izle.',
    items: [
      { title: 'Aralık 1918 · İlk millî cemiyetler', body: 'Edirne’de Trakya-Paşaeli, İzmir’de Müdafaa-i Hukuk-ı Osmaniye cemiyetleri kuruldu. Merkezi İstanbul’da olan Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye Cemiyeti de Doğu Anadolu’da şubeler açtı.' },
      { title: 'Aralık 1918 · Güneyde ilk direniş', body: 'Fransız işgaline karşı Dörtyol’da silahlı direniş başladı.' },
      { title: 'Şubat 1919 · Trabzon’da cemiyet', body: 'Karadeniz kıyısında bir Rum Pontus devleti kurulmasından endişe edenler Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti’ni kurdu.' },
      { title: '14/15 Mayıs 1919 · Redd-i İlhak', body: 'İzmir’in işgal edileceği anlaşılınca bazı genç vatanseverler, işgalin Yunanistan’a katılmayla sonuçlanmasına karşı çıkma (Redd-i İlhak) ilkesini ortaya attı.' },
      { title: '15 Mayıs 1919 · İzmir işgal edildi', body: 'İşgal ülke genelinde tepkiye yol açtı; Batı Anadolu’da Kuvâ-yı Millîye hızla örgütlenmeye başladı.' },
      { title: '29 Mayıs 1919 · Ayvalık', body: 'Yarbay Ali Bey (Çetinkaya) ve birliği Ayvalık’ta Yunan kuvvetlerine karşı Batı Anadolu’daki ilk direniş cephelerinden birini kurdu.' },
      { title: 'Yaz 1919 · Batı Anadolu kongreleri', body: 'Balıkesir’de ve Ağustos’ta Alaşehir’de toplanan kongreler Kuvâ-yı Millîye’ye asker, para ve malzeme sağlamanın yollarını belirledi.' },
      { title: 'Eylül 1919 · Cemiyetler birleşti', body: 'Sivas Kongresi’nde bütün millî cemiyetler Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti adı altında birleştirildi.' },
      { title: '1920 · Düzenli orduya geçiş', body: 'Kuvâ-yı Millîye birlikleri adım adım merkezî komutaya bağlandı; düzenli ordunun kurulmasına başlandı.' },
      { title: '1921 başı · Kuvâ-yı Millîye kaldırıldı', body: 'Kuvâ-yı Millîye birlikleri tamamen kaldırıldı; savaşı artık düzenli ordu yürüttü.' },
    ],
    takeaway:
      'Dikkat et: Direniş dağınık başladı ve adım adım birleşti. Önce bölgesel cemiyetler, sonra bölgesel kongreler, en son ulusal kongre ve tek bir ordu.',
    body:
      'Kronolojide iki gelişme yan yana yürür. **Örgütlenme:** Bölgesel cemiyetler kuruldu, bölgesel kongreler toplandı, Sivas Kongresi’nde hepsi tek çatı altında birleşti. **Silahlı direniş:** Dörtyol ve Ayvalık gibi yerlerde başlayan Kuvâ-yı Millîye direnişi Batı Anadolu’ya yayıldı, sonra yerini düzenli orduya bıraktı.\n\n' +
      'Bu iki gelişmeyi birbirine bağlayan şey kongrelerdir. Balıkesir ve Alaşehir kongreleri Kuvâ-yı Millîye’ye kaynak buldu; Erzurum ve Sivas kongreleri ise dağınık direnişe ortak bir hedef ve önderlik kazandırdı. Bu kongreleri bir sonraki derste ayrıntılı işleyeceğiz.',
  },
  map: {
    title: 'Şematik atlas: Cemiyetler ve Kuvâ-yı Millîye',
    intro: 'Katmanları ayrı ayrı aç: millî cemiyetlerin merkezleri, Kuvâ-yı Millîye’nin ilk direniş noktaları, bölgesel kongreler ve millî varlığa düşman cemiyetlerin faaliyet alanları. İstanbul her katmanda görünür, çünkü iki grubun da merkezi oradaydı.',
    map_label: 'Şematik gösterim · sınır ya da cephe hattı göstermez',
    layers: [
      { id: 'milli', label: 'Millî cemiyetler', description: 'Edirne, İzmir, Trabzon ve Erzurum.', active: true },
      { id: 'direnis', label: 'Kuvâ-yı Millîye', description: 'Dörtyol, Ayvalık, Aydın.', active: true },
      { id: 'kongre', label: 'Bölgesel kongreler', description: 'Balıkesir ve Alaşehir.', active: false },
      { id: 'zararli', label: 'Millî varlığa düşman cemiyetler', description: 'Pontus (Karadeniz), Kürt Teâli (Diyarbakır çevresi), Teâli-i İslâm (Konya).', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 40, y: 4, tone: 'water' },
      { label: 'ANADOLU', x: 44, y: 36, tone: 'land' },
      { label: 'AKDENİZ', x: 30, y: 90, tone: 'water' },
      { label: 'EGE', x: 2, y: 70, tone: 'water' },
    ],
    locations: [
      { id: 'istanbul', label: 'İstanbul', x: 18, y: 14, tone: 'muted', detail: 'Hem bazı millî cemiyetlerin (Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye) hem de millî varlığa düşman cemiyetlerin (İngiliz Muhipleri, Kürt Teâli, Mavri Mira) merkezi İstanbul’daydı. Başkent İtilaf Devletleri’nin denetimindeydi.' },
      { id: 'edirne', label: 'Edirne · Trakya-Paşaeli', x: 4, y: 4, layer: 'milli', tone: 'brand', detail: 'Aralık 1918’de kurulan Trakya-Paşaeli Cemiyeti, Trakya’nın Yunanistan’a verilmesine karşı çıktı.' },
      { id: 'izmir', label: 'İzmir', x: 6, y: 52, layer: 'milli', tone: 'brand', detail: 'Aralık 1918’de İzmir Müdafaa-i Hukuk-ı Osmaniye Cemiyeti kuruldu. İşgalin arifesinde Redd-i İlhak ilkesi burada ortaya atıldı.' },
      { id: 'trabzon', label: 'Trabzon', x: 70, y: 8, layer: 'milli', tone: 'brand', detail: 'Şubat 1919’da kurulan Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti, Karadeniz kıyısında bir Rum Pontus devleti kurulmasına karşı çıktı.' },
      { id: 'erzurum', label: 'Erzurum', x: 82, y: 26, layer: 'milli', tone: 'brand', detail: 'Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye Cemiyeti’nin Erzurum şubesi, Doğu Anadolu’nun bir Ermeni devletine verilmesine karşı çıktı. Erzurum Kongresi’ni de bu şube hazırladı.' },
      { id: 'dortyol', label: 'Dörtyol', x: 58, y: 72, layer: 'direnis', tone: 'danger', detail: 'Aralık 1918’de Fransız işgal kuvvetlerine karşı silahlı direniş burada başladı. Güneydeki Kuvâ-yı Millîye direnişinin ilk örneklerindendir.' },
      { id: 'ayvalik', label: 'Ayvalık', x: 4, y: 40, layer: 'direnis', tone: 'danger', detail: '29 Mayıs 1919’da Yarbay Ali Bey (Çetinkaya) ve birliği Yunan kuvvetlerine karşı Batı Anadolu’daki ilk direniş cephelerinden birini kurdu.' },
      { id: 'aydin', label: 'Aydın', x: 12, y: 64, layer: 'direnis', tone: 'danger', detail: 'Yunan işgaline karşı efelerin ve köylülerin katıldığı Kuvâ-yı Millîye direnişinin güçlü olduğu bölgelerden biri. Demirci Mehmet Efe bu bölgedeki önderlerdendir.' },
      { id: 'balikesir', label: 'Balıkesir', x: 16, y: 30, layer: 'kongre', tone: 'accent', detail: '1919 yazında toplanan Balıkesir kongreleri Kuvâ-yı Millîye’ye asker, para ve malzeme sağlamayı ve cepheleri güçlendirmeyi kararlaştırdı.' },
      { id: 'alasehir', label: 'Alaşehir', x: 24, y: 48, layer: 'kongre', tone: 'accent', detail: 'Ağustos 1919’da toplanan Alaşehir Kongresi Batı Anadolu’daki direnişi daha geniş bir alanda örgütlemeyi amaçladı.' },
      { id: 'samsun', label: 'Samsun · Pontus', x: 50, y: 20, layer: 'zararli', tone: 'muted', detail: 'Pontus Rum Cemiyeti, Karadeniz kıyısında merkezi Samsun olacak bir Rum devleti kurmak istiyordu.' },
      { id: 'konya', label: 'Konya · Teâli-i İslâm', x: 40, y: 60, layer: 'zararli', tone: 'muted', detail: 'İstanbul’dan yönetilen Teâli-i İslâm Cemiyeti Konya ve çevresinde örgütlenmeye çalışıyor, Millî Mücadele’ye karşı propaganda yapıyordu.' },
      { id: 'diyarbakir', label: 'Diyarbakır · Kürt Teâli', x: 78, y: 56, layer: 'zararli', tone: 'muted', detail: 'İstanbul’dan yönetilen Kürt Teâli Cemiyeti, Nutuk’a göre yabancı himayesinde bir Kürt hükümeti kurmayı amaçlıyordu.' },
    ],
    routes: [],
    insight:
      'Haritaya bak: Millî cemiyetler en çok tehdit altındaki bölgelerde, yani Trakya’da, Ege’de, Karadeniz’de ve Doğu Anadolu’da kuruldu. Her biri kendi bölgesini savunuyordu; ortak bir merkezleri yoktu. Bu dağınıklık, ileride kongrelerle ve tek bir çatıyla giderilmesi gereken zayıflıktı.',
    source_note:
      'Cemiyetlerin yerleri; Nutuk’un 1. bölümü (1927; Vikikaynak metni), Atatürk Ansiklopedisi “Kuvâ-yı Millîye” ve “Trabzon Muhafaza-i Hukuk-ı Millîye Cemiyeti” maddeleri, TDV İslâm Ansiklopedisi “Balıkesir Kongreleri” ve hakemli makaleler esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'İki grup cemiyet: başlıca örnekler ve amaçları',
    columns: ['Cemiyet', 'Grup', 'Merkez ya da bölge', 'Amacı'],
    rows: [
      ['Trakya-Paşaeli', 'Millî', 'Edirne', 'Trakya’nın Yunanistan’a verilmesini önlemek'],
      ['İzmir Müdafaa-i Hukuk-ı Osmaniye', 'Millî', 'İzmir', 'Batı Anadolu’nun Yunanistan’a verilmesini önlemek'],
      ['Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye', 'Millî', 'İstanbul (Erzurum ve Elazığ şubeleri)', 'Doğu Anadolu’nun bir Ermeni devletine verilmesini önlemek'],
      ['Trabzon Muhafaza-i Hukuk-ı Milliye', 'Millî', 'Trabzon', 'Karadeniz kıyısında bir Rum Pontus devleti kurulmasını önlemek'],
      ['Mavri Mira', 'Azınlık (Rum)', 'İstanbul Rum Patrikhanesi', 'Bizans’ı yeniden canlandırmak; Rum çetelerini örgütlemek'],
      ['Pontus Rum Cemiyeti', 'Azınlık (Rum)', 'Karadeniz kıyıları', 'Karadeniz’de bir Rum devleti kurmak'],
      ['Taşnak ve Hınçak', 'Azınlık (Ermeni)', 'Doğu Anadolu', 'Doğu Anadolu’da bir Ermeni devleti kurmak'],
      ['İngiliz Muhipleri Cemiyeti', 'Türklerin kurduğu, millî varlığa düşman', 'İstanbul', 'İngiliz himayesini sağlamak'],
      ['Wilson Prensipleri Cemiyeti', 'Türklerin kurduğu, manda yanlısı', 'İstanbul', 'ABD mandasını sağlamak'],
      ['Kürt Teâli Cemiyeti', 'Ayrılıkçı', 'İstanbul (Doğu illerinde şubeler)', 'Yabancı himayesinde bir Kürt hükümeti kurmak'],
      ['Teâli-i İslâm ve Sulh ve Selâmet cemiyetleri', 'Millî Mücadele karşıtı', 'İstanbul, Konya ve başka yerler', 'Padişaha bağlılık adına Millî Mücadele’ye karşı çıkmak'],
    ],
    caption:
      'Grupları ortak özelliklerinden tanı: Millî cemiyetler bölgesel olarak kurulmuş, Türk halkının haklarını savunur. Azınlık cemiyetleri Osmanlı topraklarından yeni devletler çıkarmak ister. Türklerin kurduğu bazı cemiyetler ise kurtuluşu yabancı bir devletin korumasında ya da padişaha bağlılıkta arar.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Kuvâ-yı Millîye nasıl doğdu, neden yerini düzenli orduya bıraktı?',
    lead: 'Kuvâ-yı Millîye’nin hem doğuşunun hem de sona ermesinin birden çok sebebi var. İkisini aynı zincirde gör.',
    intro: 'Zincirin başı Kuvâ-yı Millîye’nin doğuşunu, ortası başarılarını, sonu da neden yerini düzenli orduya bıraktığını anlatır.',
    steps: [
      { tur: 'sebep', title: 'İşgaller', body: 'Mondros’un ardından başlayan işgaller, özellikle İzmir’in işgali, halkı doğrudan tehdit etti.' },
      { tur: 'sebep', title: 'Ordunun terhisi', body: 'Mondros’un 5. maddesiyle ordu dağıtılıyor, silahlar toplanıyordu; halkı koruyacak bir ordu kalmıyordu.' },
      { tur: 'sebep', title: 'Hükümetin direnmemesi', body: 'İstanbul hükümeti işgallere direnilmemesini istiyordu; halk kendi yolunu bulmak zorunda kaldı.' },
      { tur: 'gelisme', title: 'Gönüllü direniş', body: 'Dörtyol, Ayvalık ve Aydın gibi yerlerde halk, subaylar ve efeler gönüllü silahlı gruplar kurdu. Bölgesel kongreler bu gruplara kaynak buldu.' },
      { tur: 'sonuc', title: 'Kuvâ-yı Millîye’nin başarıları', body: 'Düşman ilerleyişini yavaşlattı, düzenli ordu kurulana kadar zaman kazandırdı, halkın moralini yükseltti ve Millî Mücadele’nin ilk gücünü oluşturdu.' },
      { tur: 'sonuc', title: 'Sınırları ortaya çıktı', body: 'Merkezî bir komutası yoktu, disiplin ve eğitim eksikti; düzenli bir orduya karşı büyük meydan savaşları yapamazdı. Bazı birliklerin kendi başına hareket etmesi halkı da zor durumda bıraktı.' },
      { tur: 'sonraki-etki', title: 'Düzenli ordu', body: 'Bu sınırlılıklar nedeniyle 1920’den itibaren düzenli orduya geçildi; Kuvâ-yı Millîye 1921 başında tamamen kaldırıldı. Düzenli ordunun ilk büyük sınavı Birinci İnönü Muharebesi oldu.' },
    ],
    inference:
      'Temel çıkarım: Kuvâ-yı Millîye, ordunun olmadığı bir anda milletin kendi kendini savunmasıdır. Ama bağımsızlığı kazanmak için bölgesel ve gönüllü bir direniş yetmezdi; tek bir komutaya bağlı düzenli bir ordu gerekiyordu.',
    body:
      'Kuvâ-yı Millîye’nin özelliklerini bir listeyle hatırla:\n\n' +
      '- **Gönüllülük:** Kimse zorla katılmadı; katılanlar vatanlarını savunmak için geldi.\n' +
      '- **Bölgesellik:** Her grup kendi bölgesini savundu; birlikler çoğunlukla bölgenin ya da önderlerinin adıyla anıldı.\n' +
      '- **Düzensizlik:** Merkezî bir komuta, düzenli ikmal ve askerî disiplin yoktu; baskın ve pusu gibi yöntemlerle savaştılar.\n' +
      '- **Halkın desteği:** Yiyecek, giyecek, silah ve haber halktan geldi; kadınlar cepheye malzeme taşıdı.\n' +
      '- **Geniş katılım:** Subaylar, efeler, köylüler, öğretmenler, din adamları ve memurlar birlikte hareket etti.\n\n' +
      'Bu özelliklerin bazıları Kuvâ-yı Millîye’nin gücüydü (gönüllülük, halk desteği), bazıları ise zayıflığıydı (bölgesellik, düzensizlik). Aynı özellik farklı koşullarda hem avantaj hem dezavantaj olabilir: Bölgesellik halkın kendi toprağını bildiği için hızlı hareket etmesini sağladı; ama ortak bir plan yapılmasını zorlaştırdı.',
  },
  comparison: {
    title: 'Kuvâ-yı Millîye ve düzenli ordu',
    columns: ['Kuvâ-yı Millîye', 'Düzenli ordu'],
    rows: [
      { label: 'Kuruluş', values: ['Halkın gönüllü girişimiyle, bölge bölge', 'Büyük Millet Meclisi hükümetinin kararıyla, merkezden'] },
      { label: 'Komuta', values: ['Bölgesel önderler; merkezî komuta yok', 'Tek bir komuta zinciri'] },
      { label: 'Savaş biçimi', values: ['Baskın, pusu, gerilla yöntemleri', 'Planlı meydan muharebeleri'] },
      { label: 'Güçlü yanı', values: ['Hızlı örgütlenme, halkın desteği, bölgeyi tanıma', 'Disiplin, eğitim, düzenli ikmal, ortak plan'] },
      { label: 'Zayıf yanı', values: ['Disiplin ve eğitim eksikliği; büyük orduya karşı yetersizlik', 'Kurulması zaman ve kaynak ister'] },
      { label: 'Dönemi', values: ['1918 sonu – 1921 başı', '1920’den itibaren; İnönü, Sakarya ve Büyük Taarruz'] },
    ],
    insight:
      'Kuvâ-yı Millîye ile düzenli ordu birbirinin rakibi değil, birbirinin devamıdır: Kuvâ-yı Millîye düzenli ordu kurulana kadar zamanı kazandı, düzenli ordu ise bağımsızlığı kazandı.',
  },
  traps: [
    {
      title: 'Kuvâ-yı Millîye’yi düzenli ordu sanmak',
      wrong: 'Kuvâ-yı Millîye, Büyük Millet Meclisi’nin kurduğu düzenli ordudur.',
      right: 'Kuvâ-yı Millîye halkın gönüllü olarak kurduğu, bölgesel ve düzensiz direniş gruplarıdır. Düzenli ordu 1920’den itibaren Meclis hükümetinin kararıyla kuruldu ve Kuvâ-yı Millîye’nin yerini aldı.',
      body: 'Sıralama ipucu: Önce Kuvâ-yı Millîye (1918–1921), sonra düzenli ordu (1920 ve sonrası). İki dönem kısa bir süre iç içe geçer.',
    },
    {
      title: 'Bütün cemiyetleri aynı kefeye koymak',
      wrong: 'Mondros’tan sonra kurulan bütün cemiyetler Millî Mücadele’yi destekledi.',
      right: 'Millî cemiyetler Türk halkının haklarını savundu; ama azınlıkların kurduğu cemiyetler ayrı devlet kurmak, Türklerin kurduğu bazı cemiyetler ise yabancı himayesi ya da manda istedi ve Millî Mücadele’ye karşı çıktı.',
      body: 'Soruda bir cemiyetin amacı verildiyse şunu sor: Amaç Türk halkının haklarını ve bağımsızlığı mı savunuyor, yoksa yabancı bir devletin korumasını ya da ayrı bir devleti mi?',
    },
    {
      title: 'Millî cemiyetleri baştan ulusal sanmak',
      wrong: 'Millî cemiyetler kuruldukları günden itibaren bütün vatanı savunan tek bir örgüttü.',
      right: 'Millî cemiyetler bölgeseldi; her biri kendi bölgesini savunuyordu ve aralarında bağ yoktu. Hepsi ancak Sivas Kongresi’nde Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti adıyla birleştirildi.',
      body: 'Bölgesellik, millî cemiyetlerin en önemli özelliğidir ve aynı zamanda aşılması gereken zayıflıklarıdır.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Direnişin ve karşı tutumun şahsiyetleri',
    lead: 'Kuvâ-yı Millîye’yi tek bir kişi yönetmedi; yüzlerce yerel önder vardı. Karşı tarafta da kendi yolunu savunan kişiler vardı.',
    intro: 'Kartlarda Kuvâ-yı Millîye’nin önderlerini ve millî varlığa düşman cemiyetlerin önde gelenlerini bulacaksın. Her birinin kararına ve sonucuna bak.',
    figures: [
      {
        name: 'Yarbay Ali Bey (Çetinkaya)',
        period: 'Mayıs 1919 · Ayvalık',
        position: 'Ayvalık’taki alayın komutanı',
        contribution: 'İstanbul hükümetinin direnilmemesi yönündeki tutumuna rağmen, Yunan kuvvetleri Ayvalık’a çıkınca birliğiyle karşı koydu.',
        connections: ['Ayvalık (29 Mayıs 1919)', 'Batı Anadolu Kuvâ-yı Millîyesi'],
        significance: 'Bir subayın hükümet emrine rağmen vatan savunmasını seçmesi, Kuvâ-yı Millîye’nin subaylarla halkı nasıl bir araya getirdiğini gösterir.',
      },
      {
        name: 'Demirci Mehmet Efe',
        period: '1919–1920 · Aydın çevresi',
        position: 'Kuvâ-yı Millîye önderi (efe)',
        contribution: 'Aydın ve çevresinde topladığı gönüllülerle Yunan işgaline karşı savaştı.',
        connections: ['Aydın çevresindeki direniş', 'Efelerin Kuvâ-yı Millîye’ye katılımı'],
        significance: 'Efelerin, yani bölgenin yerel önderlerinin Millî Mücadele’ye katılımının en bilinen örneklerindendir.',
      },
      {
        name: 'Sait Molla',
        period: '1919–1920 · İstanbul',
        position: 'İngiliz Muhipleri Cemiyeti’nin önde gelen üyelerinden',
        contribution: 'İngiltere’nin himayesini sağlamaya çalışan cemiyetin hem açık hem gizli faaliyetlerinde öne çıktı.',
        connections: ['İngiliz Muhipleri Cemiyeti'],
        significance: 'Nutuk’ta, himaye arayışının ve Millî Mücadele’ye karşı gizli faaliyetlerin temsilcisi olarak anılır.',
      },
      {
        name: 'Halide Edip (Adıvar)',
        period: '1919',
        position: 'Yazar; Wilson Prensipleri Cemiyeti’nin kurucularından',
        contribution: 'Ülkenin kurtuluşunu bir süre ABD mandasında gördü. İzmir’in işgalinden sonra İstanbul mitinglerinde konuştu; daha sonra Anadolu’ya geçerek Millî Mücadele’ye katıldı.',
        connections: ['Wilson Prensipleri Cemiyeti', 'İstanbul mitingleri', 'Millî Mücadele’ye katılım'],
        significance: 'Manda fikrini savunanların bir kısmının ülkeyi kurtarmanın yolunu samimi olarak orada gördüğünü ve sonradan fikir değiştirebildiğini gösteren önemli bir örnektir.',
      },
    ],
    takeaway:
      'Cemiyet üyelerini tek bir kalıba sokma: Manda fikrini savunanların bir kısmı sonradan Millî Mücadele’nin içinde yer aldı. Ölçü, kişinin sonunda bağımsızlığı mı yoksa yabancı bir devletin korumasını mı seçtiğidir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-cemiyet-ozellikleri`,
      title: 'Cemiyetleri ortak özelliklerinden tanımak',
      lead: 'Program cemiyetlerin başlıca özelliklerine değinilmesini ister. Bu bölümde iki grubu ortak özellikleriyle karşılaştıracaksın.',
      blocks: [
        {
          id: `${SLUG}-cemiyet-ozellikleri-anlatim`,
          type: 'prose',
          body:
            '**Millî cemiyetlerin ortak özellikleri:**\n\n' +
            '- Mondros’tan sonra, işgal tehlikesi altındaki bölgelerde kuruldular.\n' +
            '- Bölgeseldiler; kendi bölgelerini savundular, aralarında bir bağ yoktu.\n' +
            '- Türk halkının haklarını savundular; bölgede Türklerin çoğunlukta olduğunu belgelerle göstermeye çalıştılar.\n' +
            '- Önce basın, yayın, miting ve yabancı temsilcilere gönderilen yazılar gibi barışçı yollar denediler; bu yollar sonuç vermeyince silahlı direnişi desteklediler.\n' +
            '- Sivas Kongresi’nde tek çatı altında birleştirildiler.\n\n' +
            '**Millî varlığa düşman cemiyetlerin ortak özellikleri:**\n\n' +
            '- Bir kısmını azınlıklar kurdu ve Osmanlı topraklarında yeni devletler kurmayı amaçladı (Rum ve Ermeni cemiyetleri).\n' +
            '- Bir kısmını Türkler kurdu; ama kurtuluşu yabancı bir devletin himayesinde ya da mandasında aradılar (İngiliz Muhipleri, Wilson Prensipleri).\n' +
            '- Bir kısmı padişaha ve halifeye bağlılık adına Millî Mücadele’ye karşı çıktı ve halkı Kuvâ-yı Millîye’ye karşı kışkırttı (Teâli-i İslâm, Sulh ve Selâmet).\n' +
            '- Bir kısmı yabancı himayesinde ayrı bir devlet kurmayı amaçladı (Kürt Teâli).\n' +
            '- Çoğunun merkezi İtilaf denetimindeki İstanbul’daydı ve İtilaf Devletleri’nden destek gördüler.\n\n' +
            'İki grubu ayıran temel ölçü şudur: **Bağımsızlık mı, yabancı koruması mı?** Millî cemiyetler bağımsız bir vatanda Türk halkının haklarını savundu; ötekiler ya yeni bir devlet ya da yabancı bir koruma istedi. Mustafa Kemal’in Millî Mücadele boyunca savunduğu “tam bağımsızlık” ilkesi bu ölçünün adıdır.',
        },
        {
          id: `${SLUG}-cemiyet-ozellikleri-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Hukuk” mu, “himaye” mi?',
          body: 'Adında “Müdafaa-i Hukuk” ya da “Muhafaza-i Hukuk” geçen cemiyetler millîdir: hakları savunur. Adında bir yabancı devlet ya da yabancı bir liderin adı geçen cemiyetler (İngiliz Muhipleri, Wilson Prensipleri) yabancı koruma arar.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste Nutuk’tan iki kısa bölüm okuyacaksın. Nutuk, Mustafa Kemal’in 1927’de Millî Mücadele’yi anlattığı büyük konuşmasıdır ve bu dönemin en önemli birincil kaynaklarından biridir.',
    intro:
      'Nutuk’u okurken iki şeyi birlikte düşün. **Birincisi:** Olayları yöneten kişi tarafından anlatıldığı için çok değerli bilgiler ve belgeler içerir; Nutuk’un sonunda yüzlerce belge yer alır. **İkincisi:** 1927’de, olaylardan yıllar sonra ve Mustafa Kemal’in kendi bakış açısıyla anlatılmıştır; kişileri ve cemiyetleri değerlendirirken kendi görüşünü açıkça söyler.\n\n' +
      'Aşağıdaki iki metin Nutuk’tan birebir alıntıdır; üçüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Erzurum şubesinin üç kararı',
        kunye: 'Mustafa Kemal, Nutuk (1927), 1. bölüm: “Millî teşekküller, siyasi maksat ve hedefleri”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Nutuk, Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye Cemiyeti’nin Erzurum şubesinin kararlarını bu üç maddeyle aktarır.',
        metin:
          'Kat’iyen muhâceret etmemek. Derhal ilmî, iktisadî, dinî teşkilât yapmak. Tecâvüze ma’rûz kalacak vilâyât-ı şarkiyenin herhangi bir bucağını müdafaada birleşmek.',
        soru: 'Bu üç karar, millî cemiyetlerin hangi özelliklerini gösterir? Kararların sırası hakkında ne söylenebilir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Muhâceret”: göç. “Teşkilât”: örgütlenme. “Tecâvüze ma’rûz kalmak”: saldırıya uğramak. “Bucak”: köşe, küçük yer. “Müdafaa”: savunma.' },
          { title: 'Kararları günümüz diline çevir', body: 'Kesinlikle göç etmemek; hemen bilim, ekonomi ve din alanlarında örgütlenmek; Doğu illerinin saldırıya uğrayacak her köşesini savunmak için birleşmek.' },
          { title: 'Özelliklerle eşleştir', body: 'Göç etmemek → topraklarda kalma ve Türk varlığını koruma kararlılığı. Örgütlenmek → önce barışçı ve kurumsal yollar. Savunmada birleşmek → gerekirse silahlı direniş ve bölgesel dayanışma.' },
          { title: 'Sırayı yorumla', body: 'Sıra; önce yerinde kalma, sonra örgütlenme, en son savunma biçimindedir. Bu, cemiyetin önce barışçı yolları denediğini, silahlı savunmayı son çare olarak gördüğünü düşündürür.' },
        ],
        cevap: 'Kararlar millî cemiyetlerin bölgeselliğini (Doğu illeri), Türk halkının varlığını koruma amacını, örgütlenmeye verdiği önemi ve gerektiğinde birlikte savunma kararlılığını gösterir. Sıra, barışçı yolların önce, savunmanın sonra geldiğini düşündürür.',
        cikarim: 'Bir cemiyetin kararlarını okurken yalnız ne istediğine değil, hangi yolları hangi sırayla denediğine de bak.',
      },
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in İngiliz Muhipleri Cemiyeti değerlendirmesi',
        kunye: 'Mustafa Kemal, Nutuk (1927), 1. bölüm: “İngiliz Muhipleri Cemiyeti”. Metin: Vikikaynak.',
        nitelik: 'Birebir alıntı. Mustafa Kemal’in 1927’deki değerlendirmesidir.',
        metin:
          'Bu isimden, İngilizlere muhip olanların teşkil ettiği bir cemiyet anlaşılmasın! Bence, bu cemiyeti teşkil edenler, kendi şahıslarını ve menfaat-i şahsiyelerini sevenler ve şahıslarıyla menfaatlerinin masûniyeti çaresini Lloyd George hükümeti marifetiyle İngiliz himayesini temînde arayanlardır.',
        soru: 'Mustafa Kemal bu cemiyetin amacını nasıl değerlendiriyor? Bu metni okurken hangi özelliğini hesaba katmalısın?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Muhip”: seven, dost. “Menfaat-i şahsiye”: kişisel çıkar. “Masûniyet”: korunma. “Marifetiyle”: aracılığıyla. “Temîn”: sağlama.' },
          { title: 'Olguyu ayır', body: 'Cemiyetin İngiliz himayesini istediği bir olgudur; cemiyetin kendi açık faaliyetleri de bunu gösterir.' },
          { title: 'Yorumu ayır', body: '“Kendi şahıslarını ve menfaatlerini sevenler” ifadesi Mustafa Kemal’in üyeler hakkındaki değerlendirmesidir. “Bence” sözcüğü bunun kişisel bir yargı olduğunu açıkça gösterir.' },
          { title: 'Kaynağın özelliğini hesaba kat', body: 'Metin 1927’de, Millî Mücadele’nin önderi tarafından, karşı tarafta duranlar hakkında yazılmıştır. Değerlendirmeyi anlamak için cemiyetin kendi belgelerine ve başka kaynaklara da bakmak gerekir.' },
        ],
        cevap: 'Mustafa Kemal cemiyetin İngiliz himayesini istediğini söyler ve üyelerin bunu kişisel çıkarlarını korumak için yaptığını düşünür. Himaye isteği bir olgudur; üyelerin niyetine ilişkin yargı ise “bence” sözcüğüyle belirtilmiş kişisel bir değerlendirmedir.',
        cikarim: 'Birincil kaynaklarda “bence”, “kanaatimce” gibi ifadeler, yazarın olguyu değil görüşünü aktardığını gösterir. İyi bir okur ikisini ayırır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Kuvâ-yı Millîye üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Kuvâ-yı Millîye, Millî Mücadele’nin ilk ve en zor günlerinde milletin kendi kendini savunmasıydı. Düşmanı yenecek güçte değildi; ama düşmanın ilerleyişini yavaşlatarak düzenli ordunun kurulması için gereken zamanı kazandırdı. Bu yüzden Kuvâ-yı Millîye’nin asıl başarısı, kazandığı muharebelerden çok, kazandırdığı zamandır.',
        soru: 'Metindeki olguları ve yorumu ayır. Son cümledeki yargıya katılmak için hangi kanıtlara bakardın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Kuvâ-yı Millîye’nin ilk dönemde savaşması, düzenli bir orduyu yenebilecek güçte olmaması ve daha sonra düzenli ordunun kurulması olgulardır.' },
          { title: 'Yorumu ayır', body: '“Asıl başarısı kazandırdığı zamandır” ifadesi yazarın yargısıdır.' },
          { title: 'Yargıyı sına', body: 'Yargıyı sınamak için Yunan ilerleyişinin 1919–1920’deki hızına, düzenli ordunun kuruluş tarihlerine ve Kuvâ-yı Millîye’nin kazandığı yerel başarılara bakmak gerekir.' },
        ],
        cevap: 'Olgular: ilk dönemde direniş, düzenli orduyu yenecek güçte olmama, düzenli ordunun sonradan kurulması. Yorum: asıl başarının zaman kazandırmak olduğu. Bu yargı, düzenli ordunun 1920’den itibaren kurulduğu ve Kuvâ-yı Millîye’nin o zamana kadar direnişi sürdürdüğü bilgisiyle desteklenebilir.',
        cikarim: '“Asıl”, “en önemli” gibi sözcükler bir yargının ağırlık verdiği noktayı gösterir. Başka bir tarihçi aynı olgulara bakıp halkın moralini yükseltmeyi “asıl başarı” sayabilir.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Cemiyeti amacından tanı',
      prompt:
        'Aşağıdaki amaçların hangisi millî bir cemiyete, hangisi millî varlığa düşman bir cemiyete aittir?\n\n- I. Doğu illerinin bir Ermeni devletine verilmesini önlemek\n- II. İngiltere’nin himayesini sağlamak\n- III. Karadeniz kıyısında bir Rum devleti kurmak\n- IV. Trakya’nın Yunanistan’a verilmesine karşı çıkmak',
      steps: [
        { title: 'I', body: 'Türk halkının bulunduğu toprakları savunuyor → millî (Vilâyât-ı Şarkiye Müdafaa-i Hukuk-ı Milliye).' },
        { title: 'II', body: 'Kurtuluşu yabancı bir devletin korumasında arıyor → millî varlığa düşman (İngiliz Muhipleri).' },
        { title: 'III', body: 'Osmanlı topraklarından yeni bir devlet çıkarmak istiyor → millî varlığa düşman (Pontus Rum Cemiyeti).' },
        { title: 'IV', body: 'Bir bölgenin Türk yönetiminde kalmasını savunuyor → millî (Trakya-Paşaeli).' },
      ],
      answer: 'I ve IV millî cemiyetlere; II ve III millî varlığa düşman cemiyetlere aittir.',
      takeaway: 'Ölçü tek: Amaç bağımsız bir vatanda Türk halkının haklarını korumak mı, yoksa yabancı koruma ya da yeni bir devlet mi?',
    },
    {
      title: 'Bir özelliğin iki yüzü',
      prompt: 'Kuvâ-yı Millîye’nin “bölgesel” olması, hangi durumlarda bir avantaj, hangi durumlarda bir dezavantajdı?',
      steps: [
        { title: 'Avantaj', body: 'Direnişçiler kendi bölgelerini, yollarını ve halkını tanıyordu; hızla örgütlenip baskın yapabiliyorlardı. Halkın desteğini kolay aldılar.' },
        { title: 'Dezavantaj', body: 'Her grup yalnız kendi bölgesini düşündüğü için ortak bir plan yapılamıyordu; bir bölgeye yardım için başka bölgeden kuvvet getirmek zordu. Düzenli bir orduya karşı büyük savaş yapılamazdı.' },
      ],
      answer: 'Bölgesellik hızlı örgütlenme ve halk desteği açısından avantaj; ortak plan ve büyük savaşlar açısından dezavantajdı.',
      takeaway: 'Bir özelliği değerlendirirken “hangi koşulda?” diye sor. Tarihte aynı özellik bir dönemde güç, başka bir dönemde zayıflık olabilir.',
    },
    {
      title: 'Düzenli orduya neden geçildi?',
      prompt: 'Kuvâ-yı Millîye başarılı olduğu hâlde neden düzenli orduya geçildi? En az üç sebep yaz.',
      steps: [
        { title: '1', body: 'Yunan ordusu düzenli ve kalabalık bir orduydu; ona karşı ancak düzenli bir ordu meydan muharebesi yapabilirdi.' },
        { title: '2', body: 'Kuvâ-yı Millîye’nin merkezî komutası yoktu; ortak bir savaş planı uygulanamıyordu.' },
        { title: '3', body: 'Disiplin eksikliği nedeniyle bazı birlikler kendi başına hareket ediyor, zaman zaman halkı da zor durumda bırakıyordu.' },
      ],
      answer: 'Düzenli bir düşman ordusuna karşı düzenli bir ordu gerekmesi, merkezî komuta ve ortak plan ihtiyacı ve disiplin eksikliği.',
      takeaway: 'Bir kurumun yerini başkasına bırakması, o kurumun başarısız olduğu anlamına gelmez; ihtiyaçların değiştiği anlamına gelebilir.',
    },
  ],
  questionClue: {
    concept: 'Soruda Kuvâ-yı Millîye’yi ve cemiyetleri nasıl tanırım?',
    statement: 'Soru bir grubun ya da cemiyetin özelliklerini verip hangisinden söz edildiğini ya da hangi sonuca ulaşılabileceğini sorabilir.',
    clues: [
      '“Gönüllü”, “bölgesel”, “düzensiz”, “halk desteği”, “efe” → Kuvâ-yı Millîye',
      '“Müdafaa-i Hukuk”, “bölgenin haklarını savunma”, “basın ve mitingle protesto” → millî cemiyet',
      '“Himaye”, “manda”, “yabancı devletin koruması” → millî varlığa düşman (Türklerin kurduğu)',
      '“Rum devleti”, “Ermeni devleti”, “Bizans’ı canlandırma” → azınlık cemiyeti',
      '“Merkezî komuta”, “disiplin”, “meydan muharebesi” → düzenli ordu',
    ],
    reasoning: 'Önce anahtar sözcüğü bul, sonra grubu belirle, en son seçenekleri o grubun ortak özellikleriyle sına.',
    boundary: 'Dikkat: Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti bölgesel değil, bütün cemiyetlerin birleşmesiyle oluşan ulusal çatıdır (Sivas Kongresi).',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir cemiyet listesi, bir haritada gösterilen merkezler, Nutuk’tan bir alıntı ya da Kuvâ-yı Millîye’yi anlatan bir paragraf verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Cemiyeti amacından tanıyıp gruplandırma',
      'Kuvâ-yı Millîye’nin özelliklerini ve sınırlılıklarını belirleme',
      'Kuvâ-yı Millîye ile düzenli orduyu karşılaştırma',
      'Nutuk’tan olgu ve yorumu ayırma',
      'Cemiyetlerin ortak özelliğini bulma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Millî cemiyetlerin bölgesel olmaları, Mustafa Kemal’in Anadolu’ya geçtikten sonra yaptığı ilk işleri nasıl etkilemiş olabilir?',
      hint: 'Dağınık bir direnişi birleştirmek için ne gerekir?',
      answer: 'Cemiyetler bölgesel ve birbirinden kopuk olduğu için Mustafa Kemal’in ilk işi onları ortak bir amaç ve önderlik etrafında birleştirmek oldu. Genelgeler ve kongreler (Erzurum, Sivas) bu birleştirmenin araçlarıydı; Sivas Kongresi’nde bütün cemiyetler tek çatı altında toplandı.',
    },
    {
      prompt: 'Manda ve himaye isteyen cemiyetler neden “millî varlığa düşman” sayılmıştır?',
      answer: 'Çünkü manda ve himaye, ülkenin yönetiminin ya da korunmasının yabancı bir devlete bırakılması demektir; bu da tam bağımsızlıkla bağdaşmaz. Millî Mücadele’nin temel ilkesi tam bağımsızlık olduğu için bu cemiyetler millî varlığa aykırı görüldü.',
    },
    {
      prompt: 'Kuvâ-yı Millîye’de kadınların yeri neydi?',
      answer: 'Kadınlar cepheye yiyecek, giyecek ve cephane taşıdı, yaralılarla ilgilendi, bazı bölgelerde silahlı direnişe de katıldı. Bu katkı, Kuvâ-yı Millîye’nin bütün milletin ortak mücadelesi olduğunu gösterir.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.4 bir “kavrar” kazanımıdır: öğrenciden Kuvâ-yı Millîye’nin oluşum sürecini ve sonrasındaki gelişmeleri anlamasını ister. Programın açıklaması millî cemiyetler ile millî varlığa düşman cemiyetlerin başlıca özelliklerine değinilmesini ister. Bu kazanıma dayanan bir soru bir cemiyetin amacını ya da Kuvâ-yı Millîye’nin bir özelliğini verip çıkarım isteyebilir.',
    measures: [
      'Kuvâ-yı Millîye’nin ortaya çıkış sebeplerini açıklama',
      'Kuvâ-yı Millîye’nin özelliklerini, yararlarını ve sınırlılıklarını belirleme',
      'Cemiyetleri amaçlarına göre gruplandırma',
      'Düzenli orduya geçişin sebeplerini açıklama',
    ],
  },
  simulation: {
    title: 'Mini LGS: Bir cemiyetin kararları',
    passage:
      'Mondros’tan sonra Doğu Anadolu’da kurulan bir cemiyetin şubesi şu kararları aldı: Bölge halkı kesinlikle göç etmeyecek; hemen bilim, ekonomi ve din alanlarında örgütlenilecek; bölgenin saldırıya uğrayacak her köşesini savunmak için birleşilecek.',
    question: 'Bu kararlara göre söz konusu cemiyet hakkında aşağıdakilerden hangisi söylenebilir?',
    options: [
      { text: 'Bölge halkının varlığını korumayı amaçlamıştır.', explanation: 'Doğru. Göç etmeme, örgütlenme ve bölgeyi savunma kararlarının ortak amacı halkın bölgedeki varlığını korumaktır.' },
      { text: 'Bir yabancı devletin himayesini istemiştir.', explanation: 'Kararlarda yabancı bir devletten söz edilmez; tam tersine bölgenin kendi imkânlarıyla savunulması öngörülür.' },
      { text: 'Bütün vatanı savunan ulusal bir örgüttür.', explanation: 'Kararlar yalnız bir bölgeyi (Doğu Anadolu) kapsar; cemiyet bölgeseldir.' },
      { text: 'Yalnız silahlı mücadeleyi savunmuştur.', explanation: 'Kararlar arasında bilim, ekonomi ve din alanlarında örgütlenme de vardır; yalnız silahlı mücadele söz konusu değildir.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu kararlara göre” diyor. Üç kararın ortak amacını bulmak gerekir: göç etmemek, örgütlenmek, savunmak. Üçünün ortak noktası bölgedeki varlığı korumaktır.',
    critical_point: 'Üçüncü seçenek güçlü bir çeldiricidir: “Savunmada birleşmek” ifadesi ulusal bir örgütü çağrıştırabilir; ama birleşme yalnız Doğu Anadolu için söylenmiştir. Millî cemiyetlerin bölgeselliği bu soruda anahtardır.',
    takeaway: '“Yalnız”, “bütün”, “tamamen” gibi sözcükleri taşıyan seçenekleri metindeki her kararla tek tek sına.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Milletin kendi kendini savunması',
    range: 'Aralık 1918–1921 başı',
    body:
      'Mondros’un ardından ordu dağıtılırken ve İstanbul hükümeti direnilmemesini isterken halk kendi örgütlerini kurdu. Millî cemiyetler bölge bölge kuruldu, Türk halkının haklarını basınla, mitinglerle ve yabancı temsilcilere yazılarla savundu. İşgalin geldiği yerlerde Kuvâ-yı Millîye adı verilen gönüllü, bölgesel ve düzensiz silahlı gruplar ortaya çıktı: Dörtyol’da, Ayvalık’ta, Aydın’da. Aynı dönemde azınlıkların kurduğu cemiyetler ayrı devletler, Türklerin kurduğu bazı cemiyetler ise yabancı himayesi ya da manda istedi. Millî cemiyetler Sivas Kongresi’nde birleştirildi; Kuvâ-yı Millîye düzenli ordu kurulana kadar zaman kazandırdı ve 1921 başında yerini düzenli orduya bıraktı.',
    turning_points: [
      'Aralık 1918 · İlk millî cemiyetler; Dörtyol direnişi',
      'Şubat 1919 · Trabzon Muhafaza-i Hukuk-ı Milliye',
      '15 Mayıs 1919 · İzmir’in işgali; Redd-i İlhak',
      '29 Mayıs 1919 · Ayvalık direnişi',
      'Yaz 1919 · Balıkesir ve Alaşehir kongreleri',
      'Eylül 1919 · Cemiyetler Sivas’ta birleşti',
      '1921 başı · Kuvâ-yı Millîye kaldırıldı',
    ],
  },
  summary: [
    '**Kuvâ-yı Millîye:** işgallere karşı halkın kurduğu gönüllü, bölgesel, düzensiz silahlı gruplar. İlk örnekler: Dörtyol (Aralık 1918), Ayvalık (29 Mayıs 1919).',
    '**Yararları:** düşmanı yavaşlattı, düzenli orduya zaman kazandırdı, halkın moralini yükseltti.',
    '**Sınırlılıkları:** merkezî komuta, disiplin ve eğitim eksikliği; düzenli orduya karşı yetersizlik. → 1920’den itibaren düzenli ordu.',
    '**Millî cemiyetler:** Trakya-Paşaeli, İzmir Müdafaa-i Hukuk-ı Osmaniye, Vilâyât-ı Şarkiye, Trabzon Muhafaza-i Hukuk. Bölgesel; Türk halkının haklarını savundular; Sivas’ta birleştirildiler.',
    '**Azınlık cemiyetleri:** Mavri Mira, Pontus (Rum); Taşnak, Hınçak (Ermeni). Amaç: yeni devlet kurmak.',
    '**Türklerin kurduğu, millî varlığa aykırı cemiyetler:** İngiliz Muhipleri (himaye), Wilson Prensipleri (ABD mandası), Kürt Teâli (ayrılıkçılık), Teâli-i İslâm ve Sulh ve Selâmet (Millî Mücadele karşıtlığı).',
    '**Ölçü:** bağımsızlık mı, yabancı koruması mı?',
  ],
  quizzes: [
    {
      question: 'Aşağıdakilerden hangisi Kuvâ-yı Millîye’nin özelliklerinden biri değildir?',
      options: ['Gönüllülük esasına dayanması', 'Bölgesel olması', 'Merkezî ve disiplinli bir komutaya bağlı olması', 'Halkın desteğini alması'],
      answer_index: 2,
      explanation: 'Kuvâ-yı Millîye’nin merkezî bir komutası yoktu ve disiplin eksikti; bu, düzenli ordunun özelliğidir. Gönüllülük, bölgesellik ve halk desteği Kuvâ-yı Millîye’nin özellikleridir.',
    },
    {
      question: 'Aşağıdaki cemiyetlerden hangisi millî cemiyetlerdendir?',
      options: ['İngiliz Muhipleri Cemiyeti', 'Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti', 'Mavri Mira Cemiyeti', 'Kürt Teâli Cemiyeti'],
      answer_index: 1,
      explanation: 'Trabzon Muhafaza-i Hukuk-ı Milliye Cemiyeti, Karadeniz kıyısında bir Rum devleti kurulmasına karşı Türk halkının haklarını savundu; millî bir cemiyettir. Diğerleri himaye, yeni devlet ya da ayrılık amaçlayan cemiyetlerdir.',
    },
    {
      question: 'Wilson Prensipleri Cemiyeti’nin temel amacı aşağıdakilerden hangisidir?',
      options: ['ABD mandasını sağlamak', 'İngiliz himayesini sağlamak', 'Karadeniz’de bir devlet kurmak', 'Trakya’yı savunmak'],
      answer_index: 0,
      explanation: 'Wilson Prensipleri Cemiyeti ülkenin kurtuluşunu ABD mandasında görüyordu. İngiliz himayesi İngiliz Muhipleri’nin, Karadeniz’de devlet Pontus’un, Trakya’nın savunulması Trakya-Paşaeli’nin amacıdır.',
    },
    {
      question: 'Kuvâ-yı Millîye’den düzenli orduya geçilmesinin temel sebebi aşağıdakilerden hangisidir?',
      options: ['Halkın Millî Mücadele’yi desteklemeyi bırakması', 'Düzenli ve kalabalık bir düşman ordusuna karşı merkezî komutalı bir orduya ihtiyaç duyulması', 'Mondros’un Kuvâ-yı Millîye’yi yasaklaması', 'İşgallerin sona ermesi'],
      answer_index: 1,
      explanation: 'Yunan ordusu düzenli bir orduydu; ona karşı meydan muharebesi ancak merkezî komutalı, disiplinli bir orduyla yapılabilirdi. Halk desteği sürüyordu, işgaller devam ediyordu; Mondros’ta Kuvâ-yı Millîye’den söz edilmez.',
    },
  ],
  next: ['Millî Mücadele’nin Hazırlık Dönemi: Genelgeler ve Kongreler', 'Misakımillî ve Büyük Millet Meclisi’nin Açılışı'],
})

export default lesson
