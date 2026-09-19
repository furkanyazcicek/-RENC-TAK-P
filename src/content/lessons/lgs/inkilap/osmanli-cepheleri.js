import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 2. ders
 * Kazanım : İTA.8.2.2
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (tam metin resmiProgram.js'te)
 *   a) Cepheler taarruz ve savunma özellikleriyle harita üzerinde
 *   b) Çanakkale deniz ve kara zaferleri, Kut'ül-Amâre, Sarıkamış
 *   c) Mustafa Kemal ve diğer şahsiyetler, çeşitli alıntılar üzerinden
 *   ç) 1915 Olayları ve Tehcir Kanunu
 *   d) Birinci Dünya Savaşı'nın sonuçları
 *
 * KAPSAM KARARI
 * Açıklamanın beş maddesinin her biri ayrı bir bölüm ya da blokla
 * karşılandı. Harita (a) şematik atlas olarak yazıldı; cephe hattı çizilmez.
 * (c) için Mustafa Kemal'in 1918 tarihli mülakatındaki sözler BİREBİR
 * alıntılandı (MSB'nin yayımladığı metin). (ç) programın "değinilir"
 * sınırında, olgusal ve dengeli bir dille; hükümetin gerekçesi, göç
 * sırasındaki can kayıpları ve bugünkü farklı değerlendirmeler birlikte
 * verildi. Kayıp sayıları kaynaklar arasında çok farklı olduğu için sayı
 * yazılmadı.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 5.
 */

const SLUG = 'lgs-tarih-osmanli-cepheleri'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 2,
  title: 'Birinci Dünya Savaşı’nda Osmanlı Devleti: Cepheler, Zaferler ve Sonuçlar',
  subtitle:
    'Kafkasya’nın karlı dağlarından Hicaz’ın çöllerine kadar pek çok cephede savaşan Osmanlı Devleti, Çanakkale’de ve Kut’ta büyük zaferler kazandı; ama savaşın sonunda ağır bir yenilgiyle karşılaştı.',
  minutes: 55,
  kazanimlar: ['İTA.8.2.2'],
  kapsamNotu:
    'Programın açıklamasındaki beş maddenin her biri ayrı bir bölümde karşılanır. Kayıp sayıları kaynaklar arasında çok farklı verildiği için yazılmamıştır. 1915 Olayları programın istediği ölçüde, olgusal bir dille ele alınır.',
  prerequisites: [
    {
      topic: 'Birinci Dünya Savaşı: Sebepler, Bloklar ve Osmanlı’nın Savaşa Girişi (önceki ders)',
      why: 'Osmanlı’nın hangi blokta, hangi beklentilerle savaşa girdiğini bilmeden cephelerin amacını anlamak zordur.',
    },
    {
      topic: 'Mustafa Kemal’in Askerlik Hayatı',
      why: 'Mustafa Kemal’in savaş öncesi deneyimlerini bilmek, cephelerdeki başarısını bağlamına oturtur.',
    },
  ],
  outcomes: [
    'Osmanlı’nın savaştığı cepheleri taarruz ve savunma niteliğiyle ayırıp şematik harita üzerinde gösterebileceksin.',
    'Çanakkale deniz ve kara zaferlerini, Kut’ül-Amâre Zaferi’ni ve Sarıkamış Harekâtı’nı açıklayabileceksin.',
    'Mustafa Kemal ve diğer şahsiyetlerin cephelerdeki görev ve başarılarını alıntılar üzerinden yorumlayabileceksin.',
    '1915 Olayları ve Tehcir Kanunu hakkında temel bilgileri ve farklı değerlendirmeleri açıklayabileceksin.',
    'Birinci Dünya Savaşı’nın dünya ve Osmanlı Devleti için sonuçlarını sıralayabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Dört yıl, pek çok cephe',
    lead:
      'Kasım 1914’te savaşa giren Osmanlı Devleti, dört yıl boyunca aynı anda birçok cephede savaştı. Bazılarında saldıran, bazılarında savunan taraftı.',
    body:
      'Osmanlı Devleti Birinci Dünya Savaşı’nda çok geniş bir coğrafyada savaştı: doğuda Kafkasya’da Rusya’ya karşı, güneyde Süveyş Kanalı’nda, Irak’ta, Suriye–Filistin’de ve Hicaz–Yemen’de İngiltere’ye karşı, batıda Çanakkale’de İngiltere ve Fransa’ya karşı. Ayrıca müttefiklerine yardım için Avrupa’daki bazı cephelere de asker gönderdi.\n\n' +
      'Bu cepheleri iki gruba ayırmak konuyu anlamanın anahtarıdır. **Taarruz (saldırı) cepheleri**, Osmanlı’nın kendi başlattığı harekâtlardır: Kafkas ve Kanal cepheleri. **Savunma cepheleri** ise düşmanın saldırısına karşı Osmanlı topraklarının savunulduğu cephelerdir: Çanakkale, Irak, Suriye–Filistin ve Hicaz–Yemen. Bir de müttefiklere yardım için açılan **yardım cepheleri** vardır: Galiçya, Makedonya ve Romanya.\n\n' +
      'Osmanlı ordusu bu savaşta Çanakkale’de ve Kut’ül-Amâre’de dünyanın en güçlü devletlerine karşı büyük zaferler kazandı. Ama çok sayıda cephede birden savaşmak, zayıf ekonomi ve ulaşım sorunları, müttefiklerin yenilmesi gibi etkenler sonunda ağır bir yenilgiyi getirdi. Savaş 30 Ekim 1918’de Mondros Ateşkes Antlaşması ile sona erdi.',
  },
  concepts: [
    { term: 'Cephe', body: 'Savaşın yapıldığı bölge ve orada karşı karşıya gelen orduların oluşturduğu hat.' },
    { term: 'Taarruz cephesi', body: 'Bir devletin kendi başlattığı saldırı harekâtıyla açılan cephe. Osmanlı için Kafkas ve Kanal cepheleri.' },
    { term: 'Savunma cephesi', body: 'Düşmanın saldırısına karşı toprakların korunduğu cephe. Osmanlı için Çanakkale, Irak, Suriye–Filistin ve Hicaz–Yemen cepheleri.' },
    { term: 'Yardım cephesi', body: 'Müttefiklere destek olmak için asker gönderilen, Osmanlı topraklarının dışındaki cepheler: Galiçya, Makedonya, Romanya.' },
    { term: 'Tehcir', body: 'Bir topluluğun, bulunduğu yerden başka bir bölgeye zorunlu olarak göç ettirilmesi. 1915’teki uygulamanın dayanağı olan geçici kanunun adı Sevk ve İskân Kanunu’dur.' },
    { term: 'Manda', body: 'Savaştan sonra, kendini yönetemeyeceği ileri sürülen bölgelerin yönetiminin büyük bir devlete bırakılması. Birinci Dünya Savaşı’ndan sonra Osmanlı’nın Arap toprakları için uygulandı.' },
  ],
  why: {
    question: 'Çanakkale ve Kut’ta büyük zaferler kazanan Osmanlı Devleti savaşı neden kaybetti?',
    body:
      'Çünkü bir savaşın sonucu tek bir cephede değil, bütün cephelerin ve bütün ekonominin toplamında belirlenir. Osmanlı aynı anda çok sayıda cephede savaşıyordu; asker, silah ve erzak her yere yetişemiyordu. Demiryolu ağı zayıftı; Kafkasya’ya, Irak’a ya da Hicaz’a asker ve malzeme ulaştırmak haftalar sürüyordu. Sanayisi zayıf olduğu için savaş malzemesinde Almanya’ya bağımlıydı.\n\n' +
      'Buna İngiltere’nin Arap topraklarındaki kışkırtmaları ve 1916’da başlayan Şerif Hüseyin isyanı eklendi. 1918 sonbaharında Bulgaristan savaştan çekilince Almanya ile kara bağlantısı kesildi; müttefiklerin yenilgisi Osmanlı’yı da ateşkese zorladı. Zaferler savaşın gidişini değiştirdi, onu uzattı; ama genel yenilgiyi önleyemedi.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Osmanlı’nın dört yıllık savaşı (1914–1918)',
    lead: 'Aynı yıl içinde farklı cephelerde farklı sonuçlar alındı. Her satırda hangi cepheden söz edildiğine dikkat et.',
    intro: 'Kronolojide zaferler ve yenilgiler iç içedir. Bir cephedeki zafer, başka bir cephedeki yenilginin hemen yanında durabilir.',
    items: [
      { title: 'Kasım 1914 · Irak Cephesi açıldı', body: 'Savaş ilanlarının ardından İngilizler Basra’ya çıktı. Amaçları İran petrollerini ve Hindistan yolunu güvenceye almaktı.' },
      { title: 'Aralık 1914–Ocak 1915 · Sarıkamış Harekâtı', body: 'Enver Paşa komutasında Ruslara karşı başlatılan kış harekâtı ağır soğuk, yetersiz donanım ve hastalıklar yüzünden büyük kayıpla sonuçlandı.' },
      { title: 'Şubat 1915 · I. Kanal Harekâtı', body: 'Cemal Paşa komutasındaki kuvvetler Süveyş Kanalı’nı geçmeyi denedi; başarılı olamadı.' },
      { title: '18 Mart 1915 · Çanakkale deniz zaferi', body: 'İngiliz ve Fransız donanması Boğaz’ı geçmeye çalıştı; Nusret gemisinin döktüğü mayınlar ve kıyı topçusu karşısında büyük kayıplar verip çekildi.' },
      { title: '25 Nisan 1915 · Kara savaşları başladı', body: 'İtilaf kuvvetleri Gelibolu Yarımadası’na çıktı. 19. Tümen komutanı Mustafa Kemal Arıburnu’nda ilerlemeyi durdurdu.' },
      { title: '27 Mayıs 1915 · Sevk ve İskân Kanunu', body: 'Savaş bölgelerindeki Ermeni nüfusun başka bölgelere göç ettirilmesini düzenleyen geçici kanun çıkarıldı.' },
      { title: 'Ağustos 1915 · Anafartalar ve Conkbayırı', body: 'Anafartalar Grubu Komutanı Mustafa Kemal, İtilaf kuvvetlerinin yeni çıkarma ve taarruzlarını durdurdu.' },
      { title: 'Aralık 1915–Ocak 1916 · İtilaf Çanakkale’den çekildi', body: 'Boğazları geçemeyen İtilaf kuvvetleri yarımadayı boşalttı. Ekim 1915’te Bulgaristan İttifak Devletleri’nin yanında savaşa girmişti.' },
      { title: '29 Nisan 1916 · Kut’ül-Amâre Zaferi', body: 'Halil Paşa komutasındaki Osmanlı kuvvetleri, beş ay kuşattıkları Kut’ta İngiliz General Townshend ve birliklerini teslim aldı.' },
      { title: '1916 · Hicaz isyanı; Muş ve Bitlis', body: 'Haziran’da Şerif Hüseyin İngilizlerle iş birliği yaparak isyan etti; Fahreddin Paşa Medine’yi savunmaya başladı. Ağustos’ta Mustafa Kemal Muş ve Bitlis’i Ruslardan geri aldı.' },
      { title: '1917 · Bağdat ve Kudüs kaybedildi', body: 'İngilizler Mart’ta Bağdat’ı, Aralık’ta Kudüs’ü aldı. Rusya’da ihtilal çıktı ve Rusya savaştan çekilme yoluna girdi.' },
      { title: '1918 · Mondros’a giden yol', body: 'Mart’ta Brest-Litovsk Antlaşması ile Kars, Ardahan ve Batum geri alındı. Eylül’de Filistin’de ağır yenilgi yaşandı; Mustafa Kemal geri çekilen birlikleri Halep’in kuzeyinde toparladı. 30 Ekim’de Mondros Ateşkes Antlaşması imzalandı.' },
    ],
    takeaway:
      'Dikkat et: Osmanlı’nın büyük zaferleri (Çanakkale, Kut) savunma cephelerinde kazanıldı; taarruz amaçlı başlatılan harekâtlar (Sarıkamış, Kanal) ise başarısız oldu.',
    body:
      'Kronolojiyi cephe cephe de okuyabilirsin. **Kafkas:** Sarıkamış yenilgisi → Rusların Doğu Anadolu’da ilerlemesi → Mustafa Kemal’in Muş ve Bitlis’i geri alması → Rusya’nın savaştan çekilmesi ve Kars, Ardahan, Batum’un geri alınması. **Kanal ve Suriye–Filistin:** iki başarısız Kanal harekâtı → İngilizlerin Filistin’e ilerlemesi → Kudüs’ün kaybı → 1918 yenilgisi. **Irak:** Basra’nın kaybı → Kut’ül-Amâre Zaferi → Bağdat’ın kaybı. **Çanakkale:** 18 Mart deniz zaferi → kara savaşları → İtilaf’ın çekilmesi.\n\n' +
      'Bu okuma bir şeyi açıkça gösterir: Kut’taki zafer Irak’taki genel gidişi, Çanakkale’deki zafer de savaşın genel sonucunu değiştiremedi. Ama her iki zafer de Osmanlı’nın dayanma gücünü ve askerin fedakârlığını gösterdi; Çanakkale ayrıca savaşın süresini ve Rusya’nın kaderini etkiledi.',
  },
  map: {
    title: 'Şematik atlas: Osmanlı’nın savaştığı cepheler',
    intro: 'Katmanları aç ve kapat: taarruz cephelerini, savunma cephelerini ve yardım cephelerini ayrı ayrı gör. Bir noktaya dokununca o cephede ne olduğunu okursun.',
    map_label: 'Şematik gösterim · cephe hattı, sınır ve uzaklık göstermez',
    layers: [
      { id: 'taarruz', label: 'Taarruz cepheleri', description: 'Kafkas ve Kanal cepheleri.', active: true },
      { id: 'savunma', label: 'Savunma cepheleri', description: 'Çanakkale, Irak, Suriye–Filistin, Hicaz–Yemen.', active: true },
      { id: 'yardim', label: 'Yardım cepheleri', description: 'Galiçya, Makedonya, Romanya.', active: false },
    ],
    regions: [
      { label: 'KARADENİZ', x: 36, y: 10, tone: 'water' },
      { label: 'ANADOLU', x: 40, y: 32, tone: 'land' },
      { label: 'AKDENİZ', x: 12, y: 52, tone: 'water' },
      { label: 'KIZILDENİZ', x: 34, y: 88, tone: 'water' },
      { label: 'BASRA KÖRFEZİ', x: 90, y: 80, tone: 'water' },
      { label: 'IRAK', x: 80, y: 44, tone: 'land' },
    ],
    locations: [
      { id: 'sarikamis', label: 'Sarıkamış · Kafkas', x: 70, y: 18, layer: 'taarruz', tone: 'danger', detail: 'Kafkas Cephesi (taarruz). Amaç Rusların elindeki toprakları geri almak ve Rusya’yı bu cepheye bağlamaktı. Aralık 1914–Ocak 1915’teki Sarıkamış Harekâtı ağır kış şartları, yetersiz donanım ve salgın hastalıklar yüzünden büyük kayıpla sonuçlandı. Ruslar ardından Doğu Anadolu’da ilerledi.' },
      { id: 'mus', label: 'Muş ve Bitlis · 1916', x: 66, y: 34, layer: 'taarruz', tone: 'accent', detail: 'Ağustos 1916’da Mustafa Kemal komutasındaki kuvvetler Muş ve Bitlis’i Ruslardan geri aldı. Kafkas Cephesi’ndeki kötü gidişin içinde önemli bir başarıydı.' },
      { id: 'kanal', label: 'Süveyş Kanalı · Kanal', x: 22, y: 68, layer: 'taarruz', tone: 'danger', detail: 'Kanal Cephesi (taarruz). Amaç İngiltere’nin Hindistan yolunu kesmek ve Mısır’ı geri almaktı. 1915 ve 1916’daki iki harekât başarısız oldu; ardından İngilizler Filistin’e ilerledi.' },
      { id: 'canakkale', label: 'Çanakkale', x: 12, y: 28, layer: 'savunma', tone: 'brand', detail: 'Çanakkale Cephesi (savunma). 18 Mart 1915’te deniz, 25 Nisan 1915’ten itibaren kara savaşları yapıldı. İtilaf kuvvetleri Boğaz’ı geçemedi ve 1915 sonu–1916 başında çekildi.' },
      { id: 'kut', label: 'Kut’ül-Amâre · Irak', x: 80, y: 60, layer: 'savunma', tone: 'brand', detail: 'Irak Cephesi (savunma). İngilizler Basra’dan Bağdat’a ilerlemek istedi. 29 Nisan 1916’da Kut’ta kuşatılan İngiliz kuvvetleri teslim oldu. Ancak Bağdat Mart 1917’de İngilizlerin eline geçti.' },
      { id: 'kudus', label: 'Kudüs · Suriye–Filistin', x: 30, y: 58, layer: 'savunma', tone: 'brand', detail: 'Suriye–Filistin Cephesi (savunma). Kanal harekâtlarından sonra İngilizler Filistin’e ilerledi; Kudüs Aralık 1917’de kaybedildi. Eylül 1918’deki yenilgiden sonra Mustafa Kemal geri çekilen birlikleri Halep’in kuzeyinde toparladı.' },
      { id: 'halep', label: 'Halep · 1918', x: 44, y: 44, layer: 'savunma', tone: 'accent', detail: 'Mustafa Kemal 1918 sonbaharında geri çekilen birlikleri Halep’in kuzeyinde toparladı ve İngiliz ilerleyişini durdurdu. Bu çizgi, Millî Mücadele’de vatanın sınırları tartışılırken önem kazanacaktı.' },
      { id: 'medine', label: 'Medine · Hicaz', x: 44, y: 82, layer: 'savunma', tone: 'brand', detail: 'Hicaz–Yemen Cephesi (savunma). Kutsal şehirleri korumak amaçlanıyordu. 1916’da Şerif Hüseyin isyan etti; Fahreddin Paşa Medine’yi savaşın sonuna kadar, hatta Mondros’tan sonra da bir süre savundu ve Ocak 1919’da teslim oldu.' },
      { id: 'yemen', label: 'Yemen', x: 58, y: 94, layer: 'savunma', tone: 'brand', detail: 'Hicaz–Yemen Cephesi’nin güney ucu. Buradaki Osmanlı kuvvetleri İngilizlerin Aden çevresindeki kuvvetlerine karşı savaştı; Hicaz isyanından sonra ana ordudan koptu.' },
      { id: 'galicya', label: 'Galiçya', x: 4, y: 6, layer: 'yardim', tone: 'muted', detail: 'Avusturya-Macaristan’a yardım için Ruslara karşı savaşılan cephe.' },
      { id: 'romanya', label: 'Romanya', x: 18, y: 6, layer: 'yardim', tone: 'muted', detail: 'Romanya İtilaf yanında savaşa girince İttifak Devletleri’ne yardım için asker gönderildi.' },
      { id: 'makedonya', label: 'Makedonya', x: 4, y: 16, layer: 'yardim', tone: 'muted', detail: 'Bulgaristan’a yardım için İtilaf kuvvetlerine karşı savaşılan cephe.' },
    ],
    routes: [],
    insight:
      'Haritaya bak: Savunma cepheleri Osmanlı topraklarının çevresini sarıyor. İngiltere Irak’tan, Filistin’den ve Hicaz’dan; İngiltere ile Fransa Çanakkale’den saldırıyordu. Osmanlı iki taarruzla (Kafkas ve Kanal) bu kuşatmayı kırmak istedi, ama iki taarruz da başarısız oldu.',
    source_note:
      'Cephelerin niteliği ve olay tarihleri; MEB programının İTA.8.2.2 açıklaması, Türk Tarih Kurumu “100. Yılında 1. Dünya Savaşı” sitesi, TTK “Osmanlı İmparatorluğu’nun I. Dünya Harbine Girişi ve Çarpıştığı Cepheler” yazısı ve TDV İslâm Ansiklopedisi (“Sarıkamış Harekâtı”, “Kûtülamâre”) esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; cephe hattı ya da sınır göstermez.',
  },
  dataTable: {
    title: 'Cepheler: nitelik, karşı taraf, amaç ve sonuç',
    columns: ['Cephe', 'Niteliği', 'Karşı taraf', 'Amaç ya da önemli olay', 'Sonuç'],
    rows: [
      ['Kafkas', 'Taarruz', 'Rusya', 'Kaybedilen toprakları geri almak; Sarıkamış Harekâtı', 'Sarıkamış’ta büyük kayıp; Rusya savaştan çekilince Kars, Ardahan, Batum geri alındı'],
      ['Kanal', 'Taarruz', 'İngiltere', 'Hindistan yolunu kesmek, Mısır’ı geri almak', 'İki harekât başarısız; İngilizler Filistin’e ilerledi'],
      ['Çanakkale', 'Savunma', 'İngiltere, Fransa', 'Boğazları ve İstanbul’u korumak', 'Deniz ve kara zaferi; İtilaf çekildi'],
      ['Irak', 'Savunma', 'İngiltere', 'Basra’dan Bağdat’a ilerleyen İngilizleri durdurmak', 'Kut’ül-Amâre Zaferi; ama Bağdat 1917’de kaybedildi'],
      ['Suriye–Filistin', 'Savunma', 'İngiltere', 'Filistin ve Suriye’yi korumak', 'Kudüs 1917’de kaybedildi; 1918’de Halep’in kuzeyine çekilindi'],
      ['Hicaz–Yemen', 'Savunma', 'İngiltere ve Şerif Hüseyin kuvvetleri', 'Kutsal şehirleri korumak', 'Medine savaşın sonuna kadar savunuldu; Ocak 1919’da teslim edildi'],
      ['Galiçya, Makedonya, Romanya', 'Yardım', 'İtilaf Devletleri', 'Müttefiklere destek olmak', 'Müttefiklerin yenilgisiyle sonuçsuz kaldı'],
    ],
    caption:
      'Tablodan çıkan iki genelleme: Osmanlı’nın başlattığı taarruzlar başarısız oldu; savunma cephelerinde ise önemli zaferler kazanıldı ama çoğu bölge savaşın sonunda kaybedildi. Genellemeyi kurarken istisnayı da gör: Kafkas Cephesi’nde kayıplar, Rusya’nın savaştan çekilmesiyle kısmen geri alındı.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Osmanlı Devleti savaşı neden kaybetti?',
    lead: 'Yenilginin tek bir sebebi yoktur. Askerî, ekonomik ve siyasi etkenleri birlikte düşün.',
    intro: 'Zincirin ilk halkaları yenilginin sebepleri, sonraki halkalar ise bu sebeplerin savaşın sonuna nasıl yansıdığıdır.',
    steps: [
      { tur: 'sebep', title: 'Çok cephede birden savaş', body: 'Osmanlı aynı anda altı cephede ve müttefiklerine yardım için Avrupa’da savaştı. Asker ve malzeme her yere yetişemedi.' },
      { tur: 'sebep', title: 'Zayıf ekonomi ve ulaşım', body: 'Sanayi zayıftı, savaş malzemesinde Almanya’ya bağımlıydı. Demiryolu ağı yetersiz olduğu için cephelere ulaşım haftalar sürüyordu.' },
      { tur: 'sebep', title: 'İç ayaklanmalar ve kışkırtmalar', body: 'İngiltere’nin desteklediği Şerif Hüseyin isyanı Arap topraklarındaki savunmayı zayıflattı.' },
      { tur: 'sebep', title: 'Müttefiklerin yenilgisi', body: 'Eylül 1918’de Bulgaristan savaştan çekilince Almanya ile kara bağlantısı kesildi; Almanya ve Avusturya-Macaristan da çöküşteydi.' },
      { tur: 'gelisme', title: 'Zaferler ve kayıplar iç içe', body: 'Çanakkale ve Kut’ta büyük zaferler kazanıldı; ama Kafkasya’da, Irak’ta, Filistin’de ve Hicaz’da toprak kaybedildi.' },
      { tur: 'sonuc', title: 'Mondros Ateşkes Antlaşması', body: '30 Ekim 1918’de Mondros Ateşkes Antlaşması imzalandı; Osmanlı Devleti savaştan yenik çıktı.' },
      { tur: 'sonraki-etki', title: 'İşgaller ve Millî Mücadele', body: 'Ateşkesin ardından Anadolu’da işgaller başladı. Bu işgallere karşı halkın ve Mustafa Kemal’in tepkisi Millî Mücadele’yi doğuracaktı.' },
    ],
    inference:
      'Temel çıkarım: Bir cephedeki zafer, savaşın bütününü kazandırmaz. Osmanlı’nın yenilgisi askerî cesaret eksikliğinden değil; çok cepheli savaş, ekonomik ve teknik yetersizlik ve müttefiklerin çöküşünün birleşiminden kaynaklandı.',
    body:
      'Program Çanakkale’nin **deniz ve kara zaferlerine**, Irak’taki **Kut’ül-Amâre Zaferi’ne** ve Kafkasya’daki **Sarıkamış Harekâtı’na** değinilmesini ister. Üçünü birlikte düşünmek önemlidir; çünkü biri savunmada kazanılan, biri kuşatmayla kazanılan, biri de taarruzda kaybedilen bir mücadeledir.\n\n' +
      '**Sarıkamış (Aralık 1914–Ocak 1915):** Enver Paşa, Ruslara karşı geniş bir kuşatma harekâtı planladı. Ağır kış, karlı dağ yolları, yetersiz kışlık donanım, ikmal sorunları ve salgın hastalıklar yüzünden harekât başarısız oldu; on binlerce asker hayatını kaybetti. Bu yenilgiden sonra Ruslar Doğu Anadolu’da ilerledi.\n\n' +
      '**Kut’ül-Amâre (29 Nisan 1916):** Bağdat’a doğru ilerleyen İngiliz kuvvetleri geri çekilerek Kut’a sığındı. Halil Paşa komutasındaki Osmanlı kuvvetleri kasabayı yaklaşık beş ay kuşattı; kuşatmayı kırma girişimleri de başarısız olunca İngiliz General Townshend ve birlikleri teslim oldu. Zafer İngiltere’nin itibarına büyük bir darbe vurdu.\n\n' +
      'Çanakkale’deki deniz ve kara zaferleri ise bu dersin derinleşme bölümünde ayrıca ele alınıyor.',
  },
  comparison: {
    title: 'Üç önemli mücadele: Sarıkamış, Çanakkale, Kut’ül-Amâre',
    columns: ['Sarıkamış (1914–1915)', 'Çanakkale (1915)', 'Kut’ül-Amâre (1916)'],
    rows: [
      { label: 'Cephe ve niteliği', values: ['Kafkas · taarruz', 'Çanakkale · savunma', 'Irak · savunma'] },
      { label: 'Karşı taraf', values: ['Rusya', 'İngiltere, Fransa (ve sömürge birlikleri)', 'İngiltere'] },
      { label: 'Osmanlı komutanları', values: ['Enver Paşa', 'Mustafa Kemal, Cevat Bey (Çobanlı), Liman von Sanders ve diğerleri', 'Halil Paşa'] },
      { label: 'Sonuç', values: ['Büyük kayıpla başarısızlık', 'Deniz ve kara zaferi; İtilaf çekildi', 'İngiliz kuvvetleri teslim oldu'] },
      { label: 'Sonraki etki', values: ['Rusların Doğu Anadolu’da ilerlemesi', 'Rusya’ya yardım gidemedi, savaş uzadı, Mustafa Kemal tanındı', 'İngiltere’nin itibarı sarsıldı; ama Bağdat 1917’de kaybedildi'] },
    ],
    insight:
      'Üçü birlikte şunu öğretir: Hazırlık, ikmal ve doğa şartları bir harekâtın sonucunu belirleyebilir. Sarıkamış’ta bunlar aleyhteydi; Çanakkale’de ve Kut’ta ise savunan tarafın hazırlığı ve kararlılığı belirleyici oldu.',
  },
  traps: [
    {
      title: 'Taarruz ve savunma cephelerini karıştırmak',
      wrong: 'Çanakkale Cephesi, Osmanlı’nın İngiltere’ye saldırmak için açtığı bir cephedir.',
      right: 'Çanakkale bir savunma cephesidir: İngiltere ve Fransa Boğazları geçip İstanbul’u almak için saldırdı, Osmanlı savundu. Osmanlı’nın taarruz cepheleri Kafkas ve Kanal cepheleridir.',
      body: 'Ayırt etme ipucu: Savaşın yapıldığı yer Osmanlı toprağıysa ve düşman gelmişse savunma; Osmanlı kendi başlattığı harekâtla düşman kontrolündeki bir yere gitmişse taarruz.',
    },
    {
      title: 'Zaferleri savaşın sonucu sanmak',
      wrong: 'Çanakkale ve Kut zaferleri sayesinde Osmanlı Birinci Dünya Savaşı’ndan galip çıktı.',
      right: 'Osmanlı bu zaferlere rağmen savaşı kaybetti ve 1918’de Mondros Ateşkes Antlaşması’nı imzaladı. Zaferler savaşın gidişini etkiledi ama genel sonucu değiştirmedi.',
      body: 'Soru bir zaferin sonuçlarını sorduğunda “savaşın kazanılması” seçeneğine dikkat et; bu, Osmanlı için hiçbir zaferin sonucu değildir.',
    },
    {
      title: 'Kut’ül-Amâre’yi Irak’ın korunması sanmak',
      wrong: 'Kut’ül-Amâre Zaferi ile Irak savaşın sonuna kadar Osmanlı’da kaldı.',
      right: 'Kut zaferinden bir yıl sonra, Mart 1917’de Bağdat İngilizlerin eline geçti. Zafer, İngiliz ilerleyişini geciktirdi ama durduramadı.',
      body: 'Bir zaferin hemen sonucu ile uzun vadeli sonucunu ayırt et.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Cephelerdeki şahsiyetler',
    lead: 'Program Mustafa Kemal ve diğer önemli şahsiyetlerin cephelerdeki görev ve başarılarının ele alınmasını ister. Her kartta kişinin nerede, ne yaptığını ve bunun sonucunu gör.',
    intro: 'Bazı kartlarda bir komutan, bazılarında bir asker ya da bir gemi komutanı var. Zaferler yalnız generallerin değil, cephedeki herkesin ortak eseridir.',
    figures: [
      {
        name: 'Mustafa Kemal',
        period: '1915–1918',
        position: '19. Tümen komutanı, Anafartalar Grubu komutanı, sonra kolordu ve ordu komutanı',
        contribution: '25 Nisan 1915’te Arıburnu’nda İtilaf kuvvetlerinin ilerlemesini durdurdu. 1 Haziran 1915’te albay oldu. 8 Ağustos 1915’te Anafartalar Grubu komutanlığına getirildi; Anafartalar ve Conkbayırı’nda yeni saldırıları durdurdu. 1 Nisan 1916’da generalliğe yükseldi; Ağustos 1916’da Muş ve Bitlis’i geri aldı. 1918’de Suriye’de geri çekilen birlikleri Halep’in kuzeyinde toparladı.',
        connections: ['Arıburnu (25 Nisan 1915)', 'Anafartalar ve Conkbayırı (Ağustos 1915)', 'Muş ve Bitlis (1916)', 'Halep’in kuzeyi (1918)'],
        significance: 'Çanakkale’deki başarıları onu bütün ülkede tanınan bir komutan yaptı. Bu tanınmışlık, Millî Mücadele’de halkın ona güvenmesinde önemli bir etken oldu.',
      },
      {
        name: 'Enver Paşa',
        period: '1914–1918 · Başkomutan vekili ve Harbiye nazırı',
        position: 'Sarıkamış Harekâtı’nın komutanı',
        contribution: 'Kafkas Cephesi’nde Ruslara karşı kış ortasında geniş bir kuşatma harekâtı planladı ve yönetti. Harekât ağır kış şartları ve hazırlık eksikliği yüzünden büyük kayıpla sonuçlandı.',
        connections: ['Sarıkamış Harekâtı', 'Osmanlı’nın savaşa girişi'],
        significance: 'Sarıkamış, hazırlıksız başlatılan bir harekâtın ağır bedelini gösteren örnek olarak anılır.',
      },
      {
        name: 'Cemal Paşa',
        period: '1915–1917 · 4. Ordu komutanı',
        position: 'Kanal harekâtlarının komutanı',
        contribution: 'Süveyş Kanalı’nı geçmek için 1915’te ilk harekâtı yönetti; harekât başarısız oldu. Suriye’deki yönetimi sırasında aldığı sert tedbirler bölgede gerginliği artırdı.',
        connections: ['I. ve II. Kanal harekâtları', 'Suriye–Filistin Cephesi'],
        significance: 'Kanal Cephesi, Osmanlı’nın İngiltere’nin sömürge yollarını hedef alan taarruz cephesiydi; başarısızlığı İngilizlerin Filistin’e ilerlemesini kolaylaştırdı.',
      },
      {
        name: 'Cevat Bey (Çobanlı)',
        period: '1915 · Çanakkale Müstahkem Mevki komutanı',
        position: '18 Mart deniz savaşında Boğaz savunmasının komutanı',
        contribution: 'Kıyı bataryalarını ve mayın hatlarını içeren Boğaz savunmasını yönetti. 18 Mart 1915’te İtilaf donanması Boğaz’ı geçemedi.',
        connections: ['18 Mart 1915 deniz zaferi', 'Nusret’in mayın hattı'],
        significance: 'Deniz zaferi, İtilaf Devletleri’ni kara çıkarması yapmaya zorladı.',
      },
      {
        name: 'Hakkı Bey ve Nusret mayın gemisi',
        period: '8 Mart 1915',
        position: 'Nusret mayın gemisinin komutanı',
        contribution: 'Nusret, 8 Mart 1915 sabahı Erenköy Koyu’na 26 mayın döktü. İtilaf donanmasının 18 Mart’taki kayıplarında bu mayın hattı önemli rol oynadı.',
        connections: ['18 Mart 1915 deniz zaferi'],
        significance: 'Küçük bir geminin gizlice döktüğü mayınlar, dünyanın en güçlü donanmalarının Boğaz’ı geçme planını bozdu.',
      },
      {
        name: 'Seyit Onbaşı',
        period: '18 Mart 1915',
        position: 'Çanakkale’de topçu eri',
        contribution: 'Deniz savaşı sırasında topun mermi taşıma düzeneği bozulunca ağır bir top mermisini sırtında taşıyarak topa yerleştirdiği anlatılır.',
        connections: ['18 Mart 1915', 'Mehmetçiğin fedakârlığı'],
        significance: 'Çanakkale’nin yalnız komutanların değil, adı bilinen ya da bilinmeyen askerlerin fedakârlığıyla kazanıldığının simgesi olmuştur.',
      },
      {
        name: 'Halil Paşa (Kut)',
        period: '1916 · Irak’taki 6. Ordu komutanı',
        position: 'Kut’ül-Amâre kuşatmasının komutanı',
        contribution: 'Kut’ta kuşatılan İngiliz kuvvetlerine karşı kuşatmayı sürdürdü ve kuşatmayı kırma girişimlerini engelledi. 29 Nisan 1916’da İngiliz General Townshend ve birlikleri teslim oldu.',
        connections: ['Kut’ül-Amâre Zaferi'],
        significance: 'Soyadı Kanunu’ndan sonra “Kut” soyadını aldı. Zafer, İngiltere’nin Irak planlarına büyük bir darbe vurdu.',
      },
      {
        name: 'Fahreddin Paşa',
        period: '1916–1919 · Medine muhafızı',
        position: 'Hicaz’da Medine savunmasının komutanı',
        contribution: 'Şerif Hüseyin isyanından sonra Medine’yi uzun bir kuşatmaya karşı savundu. Mondros Ateşkes Antlaşması’ndan sonra da bir süre teslim olmadı; şehir Ocak 1919’da teslim edildi.',
        connections: ['Hicaz isyanı (1916)', 'Medine savunması'],
        significance: 'Medine savunması, Hicaz’daki Osmanlı direnişinin simgesi olarak anılır.',
      },
      {
        name: 'Liman von Sanders',
        period: '1915 · 5. Ordu komutanı',
        position: 'Çanakkale’deki Osmanlı 5. Ordusu’nun Alman komutanı',
        contribution: 'Gelibolu Yarımadası’nın savunmasını yönetti; Ağustos 1915’te Mustafa Kemal’i Anafartalar Grubu komutanlığına getirdi.',
        connections: ['Çanakkale kara savaşları', 'Anafartalar'],
        significance: 'Osmanlı–Alman iş birliğinin Çanakkale’deki en görünür örneklerinden biridir.',
      },
    ],
    takeaway:
      'Cephelerdeki başarıyı tek bir kişiye bağlama: Çanakkale’de bir gemi komutanının cesareti, bir topçu erinin gücü ve Mustafa Kemal’in kararları birlikte zafer getirdi.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-canakkale`,
      title: 'Çanakkale: deniz ve kara zaferleri',
      lead: 'Program Çanakkale’deki deniz ve kara zaferlerine ayrıca değinilmesini ister. İki aşamayı ve sonuçlarını birlikte gör.',
      blocks: [
        {
          id: `${SLUG}-canakkale-anlatim`,
          type: 'prose',
          body:
            '**İtilaf Devletleri neden Çanakkale’ye saldırdı?** Boğazları geçip İstanbul’u alarak Osmanlı’yı savaş dışı bırakmak, Rusya’ya silah ve malzeme yardımı ulaştırmak, Balkan devletlerini kendi yanlarına çekmek ve savaşı kısaltmak istiyorlardı.\n\n' +
            '**Deniz savaşları (18 Mart 1915):** Şubat ayındaki bombardımanlardan sonra İngiliz ve Fransız donanması 18 Mart’ta Boğaz’ı zorladı. Nusret gemisinin 8 Mart’ta Erenköy Koyu’na döktüğü mayınlar ve kıyı topçusunun ateşi karşısında Bouvet, Irresistible ve Ocean zırhlıları battı, başka gemiler ağır hasar gördü. Donanma geri çekildi. Boğaz’ın yalnız donanmayla geçilemeyeceği anlaşılınca İtilaf Devletleri kara çıkarmasına karar verdi.\n\n' +
            '**Kara savaşları (25 Nisan 1915–Ocak 1916):** İtilaf kuvvetleri 25 Nisan’da Gelibolu Yarımadası’nda Arıburnu ve Seddülbahir’e çıktı. Arıburnu’nda Yarbay Mustafa Kemal komutasındaki 19. Tümen, stratejik tepeleri ele geçirmek isteyen kuvvetleri durdurdu. Ağustos 1915’te İtilaf kuvvetleri Anafartalar’a yeni bir çıkarma yaptı; Anafartalar Grubu Komutanı Mustafa Kemal, Anafartalar ve Conkbayırı’nda bu saldırıları da durdurdu. Boğazı geçemeyen İtilaf kuvvetleri Aralık 1915 ile Ocak 1916 arasında yarımadayı boşalttı.\n\n' +
            '**Sonuçları:** Rusya’ya Boğazlar yoluyla yardım ulaştırılamadı; Rusya’nın ekonomik ve askerî sıkıntısı derinleşti ve bu durum 1917 ihtilaline giden süreci hızlandırdı. Savaş uzadı. Bulgaristan İttifak Devletleri’nin yanında savaşa girdi. Balkan Savaşları’nda sarsılan Osmanlı ordusunun güveni yeniden kazanıldı. Mustafa Kemal bütün ülkede tanındı. Ancak iki taraf da çok ağır kayıplar verdi; kayıp sayıları kaynaklara göre değişmekle birlikte yüz binlerle ifade edilir.',
        },
        {
          id: `${SLUG}-canakkale-tablo`,
          type: 'table',
          interactive: true,
          title: 'Çanakkale’nin iki aşaması',
          columns: ['Aşama', 'Tarih', 'Olay', 'Sonuç'],
          rows: [
            ['Deniz', '8 Mart 1915', 'Nusret Erenköy Koyu’na mayın döktü', 'İtilaf donanmasının saldırı yolu mayınlandı'],
            ['Deniz', '18 Mart 1915', 'İtilaf donanması Boğaz’ı zorladı', 'Üç zırhlı battı; donanma çekildi'],
            ['Kara', '25 Nisan 1915', 'Arıburnu ve Seddülbahir çıkarmaları', 'Mustafa Kemal Arıburnu’nda ilerlemeyi durdurdu'],
            ['Kara', 'Ağustos 1915', 'Anafartalar çıkarması ve Conkbayırı saldırıları', 'Mustafa Kemal yeni saldırıları durdurdu'],
            ['Kara', 'Aralık 1915–Ocak 1916', 'İtilaf kuvvetlerinin çekilmesi', 'Boğazlar Osmanlı’da kaldı'],
          ],
          caption: 'Deniz zaferi kara savaşlarını doğurdu; kara savaşlarının kazanılması da Boğazların kapalı kalmasını sağladı.',
        },
        {
          id: `${SLUG}-canakkale-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “18 Mart deniz, 25 Nisan kara”',
          body: 'Deniz zaferi 18 Mart, kara savaşlarının başlangıcı 25 Nisan, Mustafa Kemal’in Anafartalar zaferi Ağustos, çekiliş Aralık–Ocak.',
        },
      ],
    },
    {
      id: `${SLUG}-1915`,
      title: '1915 Olayları ve Tehcir Kanunu',
      lead: 'Program bu konuya değinilmesini ister. Konu bugün de farklı biçimlerde değerlendirildiği için olguları, hükümetin gerekçesini ve farklı değerlendirmeleri ayrı ayrı okumak gerekir.',
      blocks: [
        {
          id: `${SLUG}-1915-anlatim`,
          type: 'prose',
          body:
            '**Ortam:** Birinci Dünya Savaşı sürerken Rus ordusu Doğu Anadolu’da ilerliyordu. 19. yüzyılın sonundan beri faaliyet gösteren bazı Ermeni komiteleri, savaş sırasında Rus ordusuyla iş birliği yaptı; 1915 baharında Van’da ayaklanma çıktı. 24 Nisan 1915’te İstanbul’da Ermeni komitelerinin önde gelen isimleri tutuklandı.\n\n' +
            '**Karar:** Osmanlı hükümeti 27 Mayıs 1915’te **Sevk ve İskân Kanunu**’nu (geçici kanun) çıkardı. Hükümetin gerekçesi askerî güvenlikti: Cephe gerisinde düşmanla iş birliği yapıldığı ve ordunun ikmal yollarının tehdit edildiği ileri sürüldü. Kanunla savaş bölgelerindeki ve bazı vilayetlerdeki Ermeni nüfus, Osmanlı topraklarındaki Suriye ve Irak bölgelerine göç ettirildi. Uygulama 1917’de sona erdi.\n\n' +
            '**Göç sırasında yaşananlar:** Savaşın ortasında, uzun ve zor yollarda yapılan göç sırasında salgın hastalıklar, açlık, iklim şartları ve göç kafilelerine yapılan saldırılar nedeniyle çok sayıda Ermeni hayatını kaybetti. Kayıp sayıları kaynaklar arasında büyük farklılık gösterir. Aynı yıllarda savaş, salgınlar ve göçler nedeniyle Anadolu’daki Müslüman halk da çok büyük kayıplar verdi.\n\n' +
            '**Bugünkü değerlendirmeler:** 1915 Olayları günümüzde farklı biçimlerde nitelendirilmektedir; bazı ülkelerin parlamentoları ve yetkilileri olayları Türkiye’nin kabul etmediği biçimlerde tanımlamıştır. Türkiye, olayların siyasi çıkarlara alet edilmeden tarihçiler tarafından arşiv belgeleriyle incelenmesini savunur; arşivlerini araştırmacılara açmış ve 2005’te Türk ve Ermeni tarihçilerden oluşacak ortak bir tarih komisyonu kurulmasını önermiştir.',
        },
        {
          id: `${SLUG}-1915-tablo`,
          type: 'table',
          interactive: true,
          title: 'Olgu, gerekçe ve değerlendirme',
          columns: ['Tür', 'İçerik'],
          rows: [
            ['Olgu', '27 Mayıs 1915’te Sevk ve İskân Kanunu çıkarıldı; Ermeni nüfus savaş bölgelerinden Suriye ve Irak bölgelerine göç ettirildi; uygulama 1917’de sona erdi.'],
            ['Olgu', 'Göç sırasında hastalık, açlık, zor yol şartları ve saldırılar nedeniyle çok sayıda Ermeni hayatını kaybetti.'],
            ['Hükümetin gerekçesi', 'Savaş sırasında cephe gerisinin güvenliği; bazı komitelerin Rus ordusuyla iş birliği ve ayaklanmalar.'],
            ['Bugünkü değerlendirmeler', 'Olaylar farklı ülkelerde ve çevrelerde farklı nitelendirilmektedir; Türkiye ortak tarih komisyonu ve arşiv araştırması önermektedir.'],
          ],
          caption: 'Tarih okurken olguyu, bir tarafın gerekçesini ve sonraki değerlendirmeleri ayırmak, her konuda olduğu gibi bu konuda da temel beceridir.',
        },
      ],
    },
    {
      id: `${SLUG}-sonuclar`,
      title: 'Birinci Dünya Savaşı’nın sonuçları',
      lead: 'Savaş 1918’de sona erdiğinde dünya haritası ve dünya düzeni değişmişti. Sonuçları dünya ve Osmanlı Devleti için ayrı ayrı gör.',
      blocks: [
        {
          id: `${SLUG}-sonuclar-anlatim`,
          type: 'prose',
          body:
            '**Dünya için sonuçlar:** Savaş milyonlarca insanın ölümüne yol açtı. Dört büyük imparatorluk yıkıldı: Osmanlı, Avusturya-Macaristan, Rusya ve Alman imparatorlukları. Rusya’da 1917’de ihtilal oldu ve Sovyet yönetimi kuruldu. Avrupa’da yeni devletler ortaya çıktı. Barışı korumak için Milletler Cemiyeti kuruldu. ABD Başkanı Wilson’ın 1918’de açıkladığı ilkeler, milletlerin kendi geleceklerini belirleme hakkını gündeme getirdi. Yenilen devletlere ağır barış antlaşmaları imzalatıldı; özellikle Almanya’ya imzalatılan Versay Antlaşması’nın ağır şartları, ileride yeni bir büyük savaşın zeminini hazırlayan etkenlerden biri oldu.\n\n' +
            '**Osmanlı Devleti için sonuçlar:** Osmanlı 30 Ekim 1918’de Mondros Ateşkes Antlaşması’nı imzaladı. Arap toprakları elden çıktı; bu bölgelerin bir kısmı manda adı altında İngiltere ve Fransa’nın yönetimine girdi. Ateşkesin ardından Anadolu’nun çeşitli bölgeleri işgal edilmeye başlandı. Galip devletler 1920’de Osmanlı hükümetine Sevr Antlaşması’nı imzalattı; ama bu antlaşma Türk milletinin Millî Mücadelesi sonucunda uygulanamadı.',
        },
        {
          id: `${SLUG}-sonuclar-tablo`,
          type: 'table',
          interactive: true,
          title: 'Yenilen devletler ve imzaladıkları antlaşmalar',
          columns: ['Devlet', 'Antlaşma', 'Önemli sonuç'],
          rows: [
            ['Almanya', 'Versay (1919)', 'Toprak kaybetti, ordusu sınırlandırıldı, ağır savaş tazminatı yüklendi'],
            ['Avusturya', 'Saint-Germain (1919)', 'Avusturya-Macaristan İmparatorluğu dağıldı'],
            ['Bulgaristan', 'Nöyyi (1919)', 'Toprak kaybetti, ordusu sınırlandırıldı'],
            ['Macaristan', 'Trianon (1920)', 'Geniş topraklar kaybetti'],
            ['Osmanlı Devleti', 'Mondros Ateşkesi (1918) → Sevr (1920)', 'Sevr, Millî Mücadele sonucunda uygulanamadı; yerini 1923’te Lozan Antlaşması aldı'],
          ],
          caption: 'Osmanlı, yenilen devletler arasında barış antlaşması uygulanamayan tek devlettir; bunun sebebi Millî Mücadele’dir.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Program, şahsiyetlerin cephelerdeki görev ve başarılarının alıntılar üzerinden ele alınmasını ister. Bu bölümde Mustafa Kemal’in kendi sözlerini ve bir değerlendirme metnini okuyacaksın.',
    intro:
      'Bir alıntıyı okurken iki soruyu unutma: **Bu sözler ne zaman ve kime söylendi?** ve **Söyleyen kişi olayın neresindeydi?** Olayı yaşayan bir komutanın sözleri çok değerli bir birincil kaynaktır; ama anlatılan olay, anlatanın gözünden görülür.\n\n' +
      'Birinci metin birebir alıntıdır. İkinci metin DRKOÇ’un yazdığı bir örnek değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in 25 Nisan 1915’i anlatışı',
        kunye: 'Ruşen Eşref (Ünaydın), “Anafartalar Kumandanı Mustafa Kemal ile Mülakat”. Görüşme 24–28 Mart 1918’de yapıldı, aynı yıl Yeni Mecmua’nın Çanakkale özel sayısında yayımlandı. Metin: Millî Savunma Bakanlığı Ata sayfaları.',
        nitelik: 'Birebir alıntı. Mustafa Kemal’in kendi sözleridir; yalnız tırnak içindeki bölüm verilmiştir.',
        metin:
          'Bu öyle alelade bir taarruz değil, herkesin muvaffak olmak veya ölmek azmiyle harekete teşne olduğu taarruzdur. Hatta ben, kumandanlara şifahen verdiğim emirlerde şunu ilave etmişimdir: “Size ben taarruz emretmiyorum, ölmeyi emrediyorum. Biz ölünceye kadar geçecek zaman zarfında yerimize başka kuvvetler ve kumandanlar kaim olabilir.”',
        soru: 'Mustafa Kemal bu emri neden vermiş olabilir? Emrin ikinci cümlesi onun komutanlık anlayışı hakkında ne söyler? Bu kaynağın bir sınırı var mı?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olayı yöneten komutanın kendi anlatımıdır: birincil kaynak. Olaydan yaklaşık üç yıl sonra, 1918’de bir gazeteciye anlatılmıştır.' },
          { title: 'Eski sözcükleri çöz', body: '“Alelade”: sıradan. “Muvaffak olmak”: başarmak. “Teşne”: istekli. “Şifahen”: sözlü olarak. “Zaman zarfında”: süre içinde. “Kaim olmak”: yerini almak.' },
          { title: 'Emrin amacını yorumla', body: 'İkinci cümle emrin mantığını açıklar: Askerler direndikçe zaman kazanılacak, bu sürede takviye kuvvetler yetişecekti. Emir, çaresizlikten değil, bir hesaptan doğmuştur.' },
          { title: 'Sınırı gör', body: 'Anlatım Mustafa Kemal’in kendi bakışıdır ve olaydan sonra yapılmıştır. Olayların genel akışı diğer kaynaklarla, örneğin Arıburnu muharebelerine ilişkin askerî raporlarla karşılaştırılarak doğrulanır.' },
        ],
        cevap: 'Emir, üstün düşman kuvvetleri karşısında takviye birlikler yetişene kadar zaman kazanmak için verilmiştir. İkinci cümle, Mustafa Kemal’in durumu soğukkanlılıkla hesaplayan ve askerlerden istediği fedakârlığın amacını bilen bir komutan olduğunu gösterir. Kaynağın sınırı, olaydan sonra ve anlatanın kendi bakışıyla aktarılmış olmasıdır.',
        cikarim: 'Bir alıntıyı yalnız etkileyici cümlesiyle değil, bütünüyle oku. “Ölmeyi emrediyorum” cümlesinin anlamını, ardından gelen “zaman kazanma” açıklaması tamamlar.',
      },
      {
        tur: 'ikincil',
        baslik: 'Çanakkale’nin etkisi üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'İtilaf Devletleri Çanakkale’de Boğazları geçemeyince Rusya’ya deniz yoluyla silah ve malzeme gönderemedi. Rus ordusu cephede zorlanırken ülkede ekonomik sıkıntılar büyüdü. Bu yüzden Çanakkale’deki savunma, yalnız Osmanlı’nın değil, Rusya’nın da kaderini etkileyen bir olaydı; 1917 ihtilaline giden yolda önemli bir halka oldu.',
        soru: 'Metindeki olguları ve yorumu ayır. Son cümledeki yorumu desteklemek ya da sınamak için hangi bilgilere ihtiyaç duyarsın?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış ve olaylar arasında bağ kuran bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'İtilaf’ın Boğazları geçememesi, Rusya’ya deniz yoluyla yardım gönderilememesi, Rusya’da ekonomik sıkıntıların büyümesi ve 1917 ihtilali.' },
          { title: 'Yorumu ayır', body: '“Rusya’nın kaderini etkileyen bir olaydı” ve “ihtilale giden yolda önemli bir halka” ifadeleri yazarın kurduğu sebep–sonuç ilişkisidir.' },
          { title: 'Yorumu sına', body: 'Yorumu sınamak için Rusya’nın savaş sırasındaki malzeme ihtiyacına, ihtilalin diğer sebeplerine (yenilgiler, açlık, yönetime tepki) ve Boğazlar dışındaki yardım yollarına bakmak gerekir. Tek bir sebep ihtilali açıklamaz.' },
        ],
        cevap: 'Olgular: Boğazların geçilememesi, yardımın ulaşamaması, ekonomik sıkıntılar, 1917 ihtilali. Yorum: Çanakkale’nin Rusya’nın kaderini etkilediği ve ihtilale giden yolda önemli bir halka olduğu. Bu yorum güçlüdür ama ihtilalin başka sebepleri de olduğu unutulmamalıdır.',
        cikarim: '“Önemli bir halka” ifadesi ile “tek sebep” ifadesi arasındaki farka dikkat et. İyi bir yorum bir etkeni öne çıkarır ama diğerlerini yok saymaz.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Cepheyi niteliğiyle eşleştir',
      prompt:
        'Aşağıdaki açıklamaların hangi cepheye ait olduğunu ve bu cephenin taarruz mu savunma mı olduğunu bul:\n\n- a) Amaç İngiltere’nin Hindistan yolunu kesmek ve Mısır’ı geri almaktı.\n- b) İngiliz kuvvetleri beş ay kuşatıldıktan sonra teslim oldu.\n- c) Kutsal şehirleri korumak için savaşıldı; bir komutan şehri ateşkesten sonra da bir süre teslim etmedi.\n- d) Ağır kış şartlarında başlatılan kuşatma harekâtı büyük kayıpla sonuçlandı.',
      steps: [
        { title: 'a', body: 'Süveyş ve Mısır → Kanal Cephesi · taarruz.' },
        { title: 'b', body: 'Beş aylık kuşatma ve teslim → Kut’ül-Amâre, Irak Cephesi · savunma.' },
        { title: 'c', body: 'Kutsal şehirler ve Fahreddin Paşa → Hicaz–Yemen Cephesi · savunma.' },
        { title: 'd', body: 'Kış ve kuşatma harekâtı → Sarıkamış, Kafkas Cephesi · taarruz.' },
      ],
      answer: 'a) Kanal · taarruz · b) Irak · savunma · c) Hicaz–Yemen · savunma · d) Kafkas · taarruz.',
      takeaway: 'Cephe sorularında önce amaca ya da olaya bak; amaç “ele geçirmek” ise taarruz, “korumak” ise savunma cephesidir.',
    },
    {
      title: 'Bir zaferin sonuçlarını sırala',
      prompt: 'Çanakkale zaferinin sonuçlarını “Osmanlı için”, “Rusya için” ve “savaşın geneli için” başlıkları altında sınıflandır.',
      steps: [
        { title: 'Osmanlı için', body: 'Boğazlar ve İstanbul korundu; ordunun güveni yeniden kazanıldı; Mustafa Kemal bütün ülkede tanındı.' },
        { title: 'Rusya için', body: 'Müttefiklerinden deniz yoluyla yardım alamadı; ekonomik ve askerî sıkıntıları derinleşti.' },
        { title: 'Savaşın geneli için', body: 'Savaş uzadı; Bulgaristan İttifak Devletleri’nin yanında savaşa girdi.' },
      ],
      answer: 'Osmanlı: Boğazlar korundu, güven kazanıldı, Mustafa Kemal tanındı. Rusya: yardım alamadı, sıkıntıları derinleşti. Genel: savaş uzadı, Bulgaristan savaşa girdi.',
      takeaway: 'Sonuç sorularında “kimin için?” diye sor; aynı olayın farklı taraflar için farklı sonuçları vardır.',
    },
    {
      title: 'Olgu mu, gerekçe mi, değerlendirme mi?',
      prompt:
        'Aşağıdaki ifadelerin hangisinin bir olgu, hangisinin hükümetin gerekçesi, hangisinin sonraki bir değerlendirme olduğunu belirle:\n\n- I. Sevk ve İskân Kanunu 27 Mayıs 1915’te çıkarıldı.\n- II. Kanun, cephe gerisinin güvenliğini sağlamak amacıyla çıkarıldı.\n- III. Türkiye, 1915 Olayları’nın ortak bir tarih komisyonunca incelenmesini önermiştir.',
      steps: [
        { title: 'I', body: 'Tarihi ve adı belgelerle doğrulanabilen bir bilgi: olgu.' },
        { title: 'II', body: 'Kanunu çıkaranların açıkladığı amaç: hükümetin gerekçesi.' },
        { title: 'III', body: 'Olaylardan çok sonra, olayların nasıl incelenmesi gerektiğine dair bir tutum: sonraki değerlendirme.' },
      ],
      answer: 'I olgu, II hükümetin gerekçesi, III sonraki bir değerlendirmedir.',
      takeaway: 'Tartışmalı konularda bu üç türü ayırmak, hem bilgiyi doğru aktarmayı hem de farklı görüşleri anlamayı sağlar.',
    },
  ],
  questionClue: {
    concept: 'Soruda cepheyi nasıl tanırım?',
    statement: 'Soru bir cephenin adını vermeden amacını, karşı tarafı ya da önemli bir olayını anlatıp hangi cepheden söz edildiğini sorabilir.',
    clues: [
      '“Süveyş”, “Hindistan yolu”, “Mısır” → Kanal (taarruz)',
      '“Sarıkamış”, “kış şartları”, “Rusya” → Kafkas (taarruz)',
      '“Boğazlar”, “18 Mart”, “Arıburnu”, “Anafartalar” → Çanakkale (savunma)',
      '“Basra”, “Bağdat”, “Kut”, “Townshend” → Irak (savunma)',
      '“Kudüs”, “Filistin”, “Halep” → Suriye–Filistin (savunma)',
      '“Kutsal şehirler”, “Şerif Hüseyin”, “Medine” → Hicaz–Yemen (savunma)',
    ],
    reasoning: 'Önce ipucu sözcükten cepheyi bul, sonra cephenin niteliğini (taarruz ya da savunma) ve sonucunu hatırla. Seçenekler çoğunlukla bu üç bilgiden birini karıştırır.',
    boundary: 'Dikkat: Galiçya, Makedonya ve Romanya yardım cepheleridir; programın “harita üzerinde gösterilir” dediği altı cephe arasında sayılmaz.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir harita, bir cephe tablosu, bir komutanın sözü ya da bir olay paragrafı verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Cepheyi amacından ya da olayından tanıma',
      'Taarruz ve savunma cephelerini ayırma',
      'Bir zaferin sonuçlarını sıralama',
      'Bir alıntıdan komutanın özelliği ya da amacı hakkında çıkarım yapma',
      'Savaşın dünya ve Osmanlı için sonuçlarını ayırma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Osmanlı Devleti’nin iki taarruz cephesinin (Kafkas ve Kanal) ortak özelliği nedir? İkisi de neden başarısız olmuş olabilir?',
      hint: 'İki cephenin coğrafyasını ve ulaşım şartlarını düşün.',
      answer: 'İkisi de Osmanlı’nın kendi başlattığı ve düşmanın elindeki bölgeleri hedef alan harekâtlardı. İkisinde de zorlu doğa şartları (Kafkasya’da kış, Kanal’da çöl), uzun ikmal yolları ve yetersiz hazırlık başarısızlıkta etkili oldu.',
    },
    {
      prompt: 'Fahreddin Paşa’nın Medine’yi Mondros’tan sonra da bir süre teslim etmemesi onun hakkında ne söyler? Bu davranışın bir sınırı olabilir mi?',
      answer: 'Görevine ve korumakla sorumlu olduğu şehre bağlılığını, kararlılığını gösterir. Ancak ateşkes antlaşması devletin resmî kararıydı; bu yüzden direniş uzun süremedi ve şehir Ocak 1919’da teslim edildi. Bir komutanın kararlılığı, devletin genel durumunu değiştiremeyebilir.',
    },
    {
      prompt: 'Aynı olay hakkında farklı ülkelerde farklı değerlendirmeler olmasının sebepleri neler olabilir?',
      hint: 'Kaynakları, siyasi çıkarları ve bakış açılarını düşün.',
      answer: 'Farklı arşivlerin ve belgelerin öne çıkarılması, olayların farklı taraflarca farklı yaşanması, siyasi çıkarlar ve kavramların farklı yorumlanması değerlendirmeleri farklılaştırabilir. Bu yüzden tarihçiler olayların belgelerle, farklı tarafların arşivleri karşılaştırılarak incelenmesini önemser.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.2 bir “çıkarımlarda bulunur” kazanımıdır: öğrenciden Birinci Dünya Savaşı’nda Osmanlı Devleti’nin durumu hakkında sonuç çıkarmasını ister. Programın açıklaması cepheleri, Çanakkale, Kut ve Sarıkamış’ı, şahsiyetlerin alıntılarını, 1915 Olayları’nı ve savaşın sonuçlarını kapsar. Bu kazanıma dayanan bir soru bir cephe tablosu ya da harita verip Osmanlı’nın durumu hakkında hangi sonuca ulaşılabileceğini sorabilir.',
    measures: [
      'Cepheleri taarruz ve savunma niteliğiyle ayırma',
      'Çanakkale, Kut ve Sarıkamış’ı açıklama',
      'Alıntıdan şahsiyetin tutumu hakkında çıkarım yapma',
      'Olgu, gerekçe ve değerlendirmeyi ayırt etme',
      'Savaşın sonuçlarını sınıflandırma',
    ],
  },
  simulationTable: {
    title: 'Bazı cepheler ve sonuçları',
    columns: ['Cephe', 'Niteliği', 'Önemli gelişme'],
    rows: [
      ['Kafkas', 'Taarruz', 'Sarıkamış Harekâtı büyük kayıpla sonuçlandı.'],
      ['Kanal', 'Taarruz', 'İki harekât da başarısız oldu.'],
      ['Çanakkale', 'Savunma', 'İtilaf kuvvetleri Boğazları geçemeden çekildi.'],
      ['Irak', 'Savunma', 'Kut’ül-Amâre’de zafer kazanıldı; bir yıl sonra Bağdat kaybedildi.'],
    ],
    caption: 'Tablo, Birinci Dünya Savaşı’nda Osmanlı’nın savaştığı bazı cepheleri özetler.',
  },
  simulation: {
    title: 'Mini LGS: Cephe tablosundan çıkarım',
    passage: 'Yukarıdaki tabloda Osmanlı Devleti’nin Birinci Dünya Savaşı’nda savaştığı bazı cepheler ve bu cephelerdeki önemli gelişmeler verilmiştir.',
    question: 'Bu tabloya göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Osmanlı Devleti’nin taarruz amacıyla başlattığı harekâtlar başarısız olmuştur.', explanation: 'Doğru. Tablodaki iki taarruz cephesinde (Kafkas ve Kanal) de harekâtlar başarısız olmuştur.' },
      { text: 'Osmanlı Devleti savunma cephelerinin tamamında kalıcı başarı elde etmiştir.', explanation: 'Tablo Irak’ta Kut zaferinden bir yıl sonra Bağdat’ın kaybedildiğini söylüyor; “tamamında kalıcı başarı” yargısı tabloyla çelişir.' },
      { text: 'Kanal harekâtları İngiltere’nin savaştan çekilmesine yol açmıştır.', explanation: 'Tablo Kanal harekâtlarının başarısız olduğunu söylüyor; İngiltere’nin savaştan çekildiğine dair bir bilgi yok.' },
      { text: 'Çanakkale’deki başarı Kafkas Cephesi’ndeki kayıpları önlemiştir.', explanation: 'Tablo iki cephe arasında böyle bir ilişki kurmaz; Sarıkamış kayıpları Çanakkale savaşlarından önce yaşanmıştır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu tabloya göre” diyor: cevap yalnız tablodaki bilgilerle desteklenmeli. Tablo cepheleri nitelikleriyle birlikte veriyor; doğru seçenek niteliğe göre bir genelleme yapan ve tabloyla tam uyumlu olan seçenektir.',
    critical_point: 'İkinci seçenek güçlü bir çeldiricidir: Çanakkale ve Kut zaferleri akla gelince “savunmada başarılı olundu” genellemesi cazip görünür. Ama “tamamında” ve “kalıcı” sözcükleri, Bağdat’ın kaybedildiği bilgisiyle çelişir.',
    takeaway: 'Genelleme yapan seçenekleri tablodaki her satırla sına; tek bir istisna bile “tamamı” ifadesini yanlış yapar.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Zaferler ve yenilgi',
    range: 'Kasım 1914–Ekim 1918',
    body:
      'Osmanlı Devleti Birinci Dünya Savaşı’nda Kafkas ve Kanal cephelerinde taarruz, Çanakkale, Irak, Suriye–Filistin ve Hicaz–Yemen cephelerinde savunma savaşları yaptı; müttefiklerine yardım için Avrupa’ya da asker gönderdi. Sarıkamış ve Kanal harekâtları başarısız oldu. Çanakkale’de 18 Mart deniz zaferi ve Mustafa Kemal’in öne çıktığı kara savaşları kazanıldı; Kut’ül-Amâre’de İngiliz kuvvetleri teslim alındı. 1915’te çıkarılan Sevk ve İskân Kanunu ile Ermeni nüfus savaş bölgelerinden göç ettirildi. Çok cepheli savaş, zayıf ekonomi, iç isyanlar ve müttefiklerin çöküşü sonunda Osmanlı 30 Ekim 1918’de Mondros Ateşkes Antlaşması’nı imzaladı. Savaş dört imparatorluğu yıktı ve dünya düzenini değiştirdi.',
    turning_points: [
      'Aralık 1914–Ocak 1915 · Sarıkamış Harekâtı',
      '18 Mart 1915 · Çanakkale deniz zaferi',
      '25 Nisan 1915 · Arıburnu; Mustafa Kemal',
      'Ağustos 1915 · Anafartalar ve Conkbayırı',
      '29 Nisan 1916 · Kut’ül-Amâre Zaferi',
      '1917 · Bağdat ve Kudüs’ün kaybı; Rusya’da ihtilal',
      '30 Ekim 1918 · Mondros Ateşkes Antlaşması',
    ],
  },
  summary: [
    '**Taarruz cepheleri:** Kafkas (Rusya) ve Kanal (İngiltere). İkisinde de harekâtlar başarısız oldu.',
    '**Savunma cepheleri:** Çanakkale, Irak, Suriye–Filistin, Hicaz–Yemen. **Yardım cepheleri:** Galiçya, Makedonya, Romanya.',
    '**Sarıkamış (1914–1915):** Enver Paşa; kış, donanım eksikliği ve hastalık yüzünden büyük kayıp.',
    '**Çanakkale:** 18 Mart 1915 deniz zaferi (Nusret’in mayınları); 25 Nisan’dan itibaren kara savaşları; Mustafa Kemal Arıburnu, Anafartalar ve Conkbayırı’nda; İtilaf 1915 sonu–1916 başında çekildi.',
    '**Kut’ül-Amâre (29 Nisan 1916):** Halil Paşa; İngiliz General Townshend teslim oldu. Bağdat yine de 1917’de kaybedildi.',
    '**1915 Olayları:** 27 Mayıs 1915 Sevk ve İskân Kanunu; hükümetin gerekçesi güvenlik; göç sırasında çok sayıda can kaybı; olaylar bugün farklı değerlendirilmekte, Türkiye ortak tarih komisyonu önermektedir.',
    '**Sonuçlar:** dört imparatorluk yıkıldı, Milletler Cemiyeti kuruldu, yeni devletler doğdu; Osmanlı Mondros’u imzaladı, Arap toprakları kaybedildi, işgaller başladı.',
  ],
  quizzes: [
    {
      question: 'Aşağıdakilerden hangisi Osmanlı Devleti’nin Birinci Dünya Savaşı’ndaki taarruz cephelerinden biridir?',
      options: ['Çanakkale', 'Irak', 'Kanal', 'Hicaz–Yemen'],
      answer_index: 2,
      explanation: 'Kanal Cephesi, İngiltere’nin Hindistan yolunu kesmek için Osmanlı’nın başlattığı bir taarruz cephesidir. Çanakkale, Irak ve Hicaz–Yemen savunma cepheleridir.',
    },
    {
      question: 'İngiliz General Townshend ve birliklerinin teslim alındığı zafer hangisidir?',
      options: ['Kut’ül-Amâre Zaferi', 'Anafartalar Zaferi', '18 Mart Deniz Zaferi', 'Conkbayırı Zaferi'],
      answer_index: 0,
      explanation: 'Irak Cephesi’nde Halil Paşa komutasındaki kuvvetler 29 Nisan 1916’da Kut’ta Townshend ve birliklerini teslim aldı. Diğer üçü Çanakkale Cephesi’ndeki zaferlerdir.',
    },
    {
      question: 'Çanakkale Savaşları’nın sonuçları arasında aşağıdakilerden hangisi yer almaz?',
      options: ['Rusya’ya Boğazlar yoluyla yardım ulaştırılamaması', 'Savaşın uzaması', 'Mustafa Kemal’in tanınması', 'Osmanlı Devleti’nin savaşı kazanması'],
      answer_index: 3,
      explanation: 'Osmanlı Devleti Çanakkale zaferine rağmen savaşı kaybetti ve 1918’de Mondros’u imzaladı. Diğer üç seçenek Çanakkale’nin sonuçlarıdır.',
    },
    {
      question: 'Birinci Dünya Savaşı’ndan sonra yenilen devletler arasında barış antlaşması uygulanamayan devlet hangisidir?',
      options: ['Almanya', 'Bulgaristan', 'Osmanlı Devleti', 'Avusturya'],
      answer_index: 2,
      explanation: 'Osmanlı Devleti’ne imzalatılan Sevr Antlaşması, Türk milletinin Millî Mücadelesi sonucunda uygulanamadı ve yerini Lozan Antlaşması aldı. Diğer devletlerin antlaşmaları uygulandı.',
    },
  ],
  next: ['Mondros Ateşkes Antlaşması ve İşgaller Karşısında Tutumlar', 'Kuvâ-yı Millîye ve Cemiyetler'],
})

export default lesson
