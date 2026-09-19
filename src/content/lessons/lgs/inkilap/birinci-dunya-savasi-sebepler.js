import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 1. ders
 * Kazanım : İTA.8.2.1
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   "Savaş öncesinde ülkeler arasındaki bloklaşmalara değinilir."
 *
 * KAPSAM KARARI
 * Savaşın genel sebepleri ve bloklaşma bu dersin merkezidir. Osmanlı
 * Devleti'nin savaşa giriş süreci (ittifak, Yavuz ve Midilli, 29 Ekim
 * 1914) "savaşın başlamasına yol açan gelişmeler" içinde, Osmanlı'nın
 * cephelerdeki durumuna (İTA.8.2.2) köprü olacak ölçüde işlenir.
 *
 * DOĞRULAMA
 * Blok tarihleri (1879, 1882, 1894, 1904, 1907) Britannica ve DergiPark;
 * Osmanlı'nın savaşa girişi TTK ve TDV; Sırbistan'a verilen nota UK
 * National Archives ve habsburger.net ile karşılaştırıldı. Kayıt:
 * LGS_KAYNAK_KAYDI.md §7.
 */

const SLUG = 'lgs-tarih-birinci-dunya-savasi-sebepler'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 1,
  title: 'Birinci Dünya Savaşı: Sebepler, Bloklar ve Osmanlı’nın Savaşa Girişi',
  subtitle:
    'Bir suikast bir dünya savaşını tek başına başlatmaz. Barut yıllar içinde biriken rekabetlerdi; Saraybosna yalnızca kıvılcımdı.',
  minutes: 45,
  kazanimlar: ['İTA.8.2.1'],
  kapsamNotu:
    'Savaşın sebepleri ve bloklaşma dersin merkezidir. Osmanlı Devleti’nin savaşa giriş süreci, cephelerdeki durumunu işleyen sonraki derse köprü olacak ölçüde anlatılır; cepheler ve savaşın sonuçları o derstedir.',
  prerequisites: [
    {
      topic: '20. Yüzyıl Başında Osmanlı Devleti (1. ünite)',
      why: 'Sömürgecilik, milliyetçilik ve Balkanlar’daki gerginlikleri bilmek, savaşın sebeplerini anlamanın temelidir.',
    },
    {
      topic: 'Mustafa Kemal’in Askerlik Hayatı (önceki ders)',
      why: 'Trablusgarp ve Balkan Savaşları’nı bilmek, Osmanlı’nın 1914’e hangi durumda girdiğini anlamayı kolaylaştırır.',
    },
  ],
  outcomes: [
    'Birinci Dünya Savaşı’nın sebeplerini en az dört başlık altında açıklayabileceksin.',
    'Savaş öncesindeki bloklaşmayı yıllarıyla ve üyeleriyle anlatabileceksin.',
    'Saraybosna suikastının neden yerel bir kriz olarak kalmadığını açıklayabileceksin.',
    'Osmanlı Devleti’nin savaşa giriş sürecini ve sebeplerini sıralayabileceksin.',
    'Bir diplomatik belgeden çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Barut fıçısı ve kıvılcım',
    lead:
      '28 Haziran 1914’te Saraybosna’da atılan iki kurşun, dört yıl sürecek ve milyonlarca insanın hayatını kaybedeceği bir savaşı başlattı. Ama neden?',
    body:
      'Birinci Dünya Savaşı 1914’te başladı ve 1918’e kadar sürdü. Avrupa’dan Orta Doğu’ya, Afrika’dan Asya’ya kadar pek çok bölgede savaşıldı. Savaşa bu kadar çok devletin katılmasının sebebi, tek bir olay değil, yıllar içinde biriken rekabetlerdi.\n\n' +
      'Tarihçiler bu durumu bir benzetmeyle anlatır: Avrupa bir **barut fıçısı** gibiydi; Saraybosna’daki suikast ise **kıvılcım** oldu. Barut; sanayileşmiş devletlerin ham madde ve pazar rekabeti, milliyetçilik akımları, silahlanma yarışı ve toprak anlaşmazlıklarıydı. Bu rekabetler devletleri iki büyük bloğa ayırmıştı. Bloklar yüzünden iki devlet arasındaki bir kriz, bütün müttefikleri savaşa çekti.\n\n' +
      'Osmanlı Devleti savaşın başında tarafsız olduğunu açıkladı; ama çok geçmeden savaşın içine girdi. Bu derste önce savaşın sebeplerini ve blokları, sonra Osmanlı’nın savaşa hangi yoldan girdiğini göreceksin. Bir sonraki derste Osmanlı’nın savaştığı cepheleri ve savaşın sonuçlarını işleyeceğiz.',
  },
  concepts: [
    { term: 'Blok', body: 'Ortak çıkarları ya da ortak düşmanları olan devletlerin kurduğu ittifak grubu. Savaş öncesinde Avrupa’da iki blok vardı: İttifak Devletleri ve İtilaf Devletleri.' },
    { term: 'İttifak Devletleri', body: 'Almanya ile Avusturya-Macaristan’ın başını çektiği blok. İtalya bu bloğun kurucuları arasındaydı ama savaş başlayınca tarafsız kaldı, 1915’te karşı tarafa geçti. Osmanlı Devleti ve Bulgaristan savaş sırasında bu bloğa katıldı.' },
    { term: 'İtilaf Devletleri', body: 'İngiltere, Fransa ve Rusya’nın oluşturduğu blok. Savaş sırasında İtalya, Japonya ve ABD gibi devletler de bu blokta yer aldı.' },
    { term: 'Silahlanma yarışı', body: 'Devletlerin birbirinden güçlü olmak için ordu ve donanmalarını hızla büyütmesi. Özellikle İngiltere ile Almanya arasında donanma yarışı yaşandı.' },
    { term: 'Seferberlik', body: 'Bir devletin savaşa hazırlanmak için askerlerini silah altına çağırması ve kaynaklarını savaşa yönlendirmesi.' },
    { term: 'Tarafsızlık', body: 'Bir savaşta hiçbir tarafa katılmama durumu. “Silahlı tarafsızlık”, tarafsız kalırken olası bir saldırıya karşı hazırlıklı olmak demektir.' },
  ],
  why: {
    question: 'İki devlet arasındaki bir suikast neden bir dünya savaşına dönüştü?',
    body:
      'Çünkü devletler birbirine ittifak antlaşmalarıyla bağlıydı. Avusturya-Macaristan Sırbistan’a savaş açınca Rusya, Slav kardeşliği ve Balkanlar’daki çıkarları nedeniyle Sırbistan’ı destekledi. Almanya müttefiki Avusturya-Macaristan’ın yanında yer aldı ve Rusya’ya savaş açtı. Fransa, Rusya’nın müttefikiydi; Almanya ona da savaş açtı. Almanya Fransa’ya ulaşmak için tarafsız Belçika’ya girince İngiltere de savaşa katıldı.\n\n' +
      'Yani ittifaklar bir zincir gibiydi: Bir halka çekilince bütün zincir hareket etti. Ama zincirin var olmasının sebebi de yıllar içinde biriken rekabetlerdi. Bu yüzden savaşın sebebini sorduklarında yalnız “Saraybosna suikastı” demek eksik bir cevaptır; suikast savaşın **görünür sebebi**, rekabetler ise **asıl sebepleridir**.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Bloklardan savaşa (1871–1914)',
    lead: 'Kronoloji iki bölümden oluşur: önce blokların kuruluşu, sonra 1914 yazının hızlı zinciri. İkinci bölümdeki olaylar arasında yalnızca günler vardır.',
    intro: 'Blokların kuruluşu otuz yıl sürdü; savaşın başlaması ise bir aydan kısa. Aradaki hız farkına dikkat et.',
    items: [
      { title: '1871 · Almanya birliğini kurdu', body: 'Fransa’yı yenen Almanya siyasi birliğini tamamladı; Alsace-Lorraine bölgesi Almanya’ya geçti. Fransa ile Almanya arasındaki düşmanlık derinleşti.' },
      { title: '1879–1882 · Üçlü İttifak', body: 'Almanya ile Avusturya-Macaristan 1879’da ittifak kurdu; 1882’de İtalya’nın katılmasıyla Üçlü İttifak oluştu.' },
      { title: '1894–1907 · Üçlü İtilaf', body: 'Fransa ile Rusya 1894’te ittifak kurdu. İngiltere 1904’te Fransa ile, 1907’de Rusya ile anlaştı. Böylece Üçlü İtilaf oluştu.' },
      { title: '1908 · Bosna-Hersek krizi', body: 'Avusturya-Macaristan Bosna-Hersek’i ilhak etti. Bölgeyi kendi topraklarına katmak isteyen Sırbistan ve onu destekleyen Rusya buna tepki gösterdi.' },
      { title: '1912–1913 · Balkan Savaşları', body: 'Balkanlar’daki savaşlar Sırbistan’ı güçlendirdi, bölgedeki gerginliği artırdı. Balkanlar “Avrupa’nın barut fıçısı” olarak anılmaya başladı.' },
      { title: '28 Haziran 1914 · Saraybosna suikastı', body: 'Avusturya-Macaristan veliahtı Franz Ferdinand ve eşi, Saraybosna’da bir Sırp milliyetçisi tarafından öldürüldü.' },
      { title: '23–28 Temmuz 1914 · Nota ve savaş ilanı', body: 'Avusturya-Macaristan Sırbistan’a 48 saat süre veren sert bir nota verdi. Sırbistan bir maddeyi kabul etmeyince 28 Temmuz’da Sırbistan’a savaş ilan etti.' },
      { title: 'Ağustos 1914 · Zincirleme savaş ilanları', body: 'Almanya 1 Ağustos’ta Rusya’ya, 3 Ağustos’ta Fransa’ya savaş ilan etti. Almanya’nın Belçika’ya girmesi üzerine İngiltere 4 Ağustos’ta savaşa katıldı.' },
      { title: '2–3 Ağustos 1914 · Osmanlı–Almanya ittifakı', body: 'Osmanlı Devleti Almanya ile gizli bir ittifak antlaşması imzaladı; ertesi gün seferberlik ve silahlı tarafsızlık ilan etti. Aynı günlerde İngiltere, parası ödenmiş iki Osmanlı savaş gemisine el koydu.' },
      { title: '10 Ağustos 1914 · Yavuz ve Midilli', body: 'İngiliz donanmasından kaçan iki Alman savaş gemisi Çanakkale Boğazı’ndan geçti. Osmanlı onları satın aldığını açıkladı ve gemiler Yavuz ile Midilli adını aldı.' },
      { title: 'Eylül–Ekim 1914 · Kapitülasyonlar kaldırıldı', body: 'Osmanlı Devleti kapitülasyonları tek taraflı olarak kaldırdığını açıkladı; karar 1 Ekim 1914’te yürürlüğe girdi.' },
      { title: '29 Ekim 1914 · Karadeniz’de bombardıman', body: 'Yavuz ve Midilli’nin de bulunduğu Osmanlı donanması Rus limanlarını bombaladı. Osmanlı Devleti fiilen savaşa girmiş oldu; savaş ilanları Kasım 1914’te geldi.' },
    ],
    takeaway:
      'Dikkat et: Blokların kuruluşu yıllar sürdü, savaşın başlaması ise haftalar. Uzun süre biriken gerilim, kısa sürede patladı.',
    body:
      'Kronolojiyi iki soruyla oku. **Birincisi:** Bloklar neden kuruldu? Her devlet kendini yalnız hissettiğinde bir müttefik aradı: Fransa 1871 yenilgisinden sonra yalnız kalmamak için Rusya’ya yaklaştı; İngiltere Almanya’nın hızla güçlenmesinden çekinerek eski rakipleri Fransa ve Rusya ile anlaştı.\n\n' +
      '**İkincisi:** Osmanlı bu tabloda nerede duruyordu? Trablusgarp ve Balkan Savaşları’ndan yeni çıkmış, yorgun ve yalnız bir devletti. Rusya Boğazlar’ı, İngiltere ve Fransa Arap topraklarını, Almanya ise Osmanlı üzerinden Orta Doğu’ya uzanan bir nüfuz alanını hesaplıyordu. Yani Osmanlı, büyük devletlerin rekabetinin tam ortasındaydı.',
  },
  map: {
    title: 'Şematik atlas: 1914’te Avrupa’nın iki bloğu',
    intro: 'Katmanları sırayla aç: önce iki bloğu, sonra kıvılcımın çıktığı yeri, en son Osmanlı’nın savaşa girdiği denizi gör. Noktalara dokununca açıklama açılır.',
    map_label: 'Şematik gösterim · sınırlar ve uzaklıklar ölçekli değildir',
    layers: [
      { id: 'ittifak', label: 'İttifak Devletleri', description: 'Almanya ve Avusturya-Macaristan; İtalya kurucu üyeydi ama 1915’te taraf değiştirdi.', active: true },
      { id: 'itilaf', label: 'İtilaf Devletleri', description: 'İngiltere, Fransa ve Rusya.', active: true },
      { id: 'kivilcim', label: 'Kıvılcım: Balkanlar', description: 'Saraybosna ve Belgrad.', active: true },
      { id: 'osmanli', label: 'Osmanlı savaşa giriyor', description: 'İstanbul, Çanakkale ve Karadeniz’deki Rus limanları.', active: false },
    ],
    regions: [
      { label: 'AVRUPA', x: 24, y: 6, tone: 'land' },
      { label: 'AKDENİZ', x: 30, y: 82, tone: 'water' },
      { label: 'KARADENİZ', x: 76, y: 46, tone: 'water' },
      { label: 'BALKANLAR', x: 44, y: 60, tone: 'land' },
      { label: 'ANADOLU', x: 82, y: 76, tone: 'land' },
    ],
    locations: [
      { id: 'berlin', label: 'Berlin · Almanya', x: 32, y: 16, layer: 'ittifak', tone: 'accent', detail: 'Hızla sanayileşen ve sömürge yarışına geç katılan Almanya, yeni pazar ve ham madde arıyordu. İngiltere ile donanma yarışına girdi. Osmanlı ile ilişkilerini Bağdat Demiryolu gibi projelerle geliştirmişti.' },
      { id: 'viyana', label: 'Viyana · Avusturya-Macaristan', x: 36, y: 32, layer: 'ittifak', tone: 'accent', detail: 'Pek çok milleti bir arada yöneten imparatorluk, Sırp milliyetçiliğini kendi varlığı için tehlike sayıyordu. Balkanlar’da Rusya ile rekabet ediyordu.' },
      { id: 'roma', label: 'Roma · İtalya', x: 26, y: 58, layer: 'ittifak', tone: 'muted', detail: 'Üçlü İttifak’ın kurucularındandı; ama savaş başlayınca tarafsız kaldı ve 1915’te İtilaf Devletleri’nin yanında savaşa girdi. Bu, ittifakların ne kadar çıkara dayalı olduğunu gösterir.' },
      { id: 'londra', label: 'Londra · İngiltere', x: 8, y: 20, layer: 'itilaf', tone: 'brand', detail: 'En geniş sömürge imparatorluğuna ve en güçlü donanmaya sahipti. Almanya’nın yükselişinden çekiniyordu; Almanya Belçika’ya girince savaşa katıldı.' },
      { id: 'paris', label: 'Paris · Fransa', x: 12, y: 40, layer: 'itilaf', tone: 'brand', detail: '1871’de Almanya’ya kaybettiği Alsace-Lorraine’i geri almak istiyordu. Rusya ile ittifakı onu savaşa çekti.' },
      { id: 'petersburg', label: 'St. Petersburg · Rusya', x: 60, y: 8, layer: 'itilaf', tone: 'brand', detail: 'Boğazlar’a ve sıcak denizlere ulaşmak istiyordu. Balkanlar’daki Slav toplulukların, özellikle Sırbistan’ın koruyucusu olarak davrandı.' },
      { id: 'saraybosna', label: 'Saraybosna', x: 40, y: 48, layer: 'kivilcim', tone: 'danger', detail: '28 Haziran 1914’te Avusturya-Macaristan veliahtı ve eşi burada bir Sırp milliyetçisi tarafından öldürüldü. Bosna-Hersek 1908’de Avusturya-Macaristan’a katılmıştı.' },
      { id: 'belgrad', label: 'Belgrad · Sırbistan', x: 48, y: 40, layer: 'kivilcim', tone: 'danger', detail: 'Avusturya-Macaristan 28 Temmuz 1914’te Sırbistan’a savaş ilan etti. Rusya’nın Sırbistan’ı desteklemesi, krizi bloklar arası bir savaşa çevirdi.' },
      { id: 'istanbul', label: 'İstanbul', x: 62, y: 60, layer: 'osmanli', tone: 'accent', detail: '2 Ağustos 1914’te Almanya ile gizli ittifak antlaşması imzalandı; ertesi gün seferberlik ilan edildi. Boğazlar hem Rusya hem de İngiltere ve Fransa için hayati önemdeydi.' },
      { id: 'canakkale', label: 'Çanakkale', x: 56, y: 68, layer: 'osmanli', tone: 'accent', detail: '10 Ağustos 1914’te İngiliz donanmasından kaçan Goeben ve Breslau gemileri Çanakkale Boğazı’ndan geçti ve Osmanlı donanmasına katıldı.' },
      { id: 'odesa', label: 'Odesa', x: 70, y: 22, layer: 'osmanli', tone: 'danger', detail: '29 Ekim 1914’te bombalanan Rus limanlarından biri. Bu saldırıyla Osmanlı Devleti fiilen savaşa girdi.' },
      { id: 'sivastopol', label: 'Sivastopol', x: 78, y: 34, layer: 'osmanli', tone: 'danger', detail: 'Rusya’nın Karadeniz donanmasının üssü. 29 Ekim 1914’te Yavuz zırhlısı tarafından bombalandı.' },
    ],
    routes: [
      { from: 'viyana', to: 'belgrad', label: 'Savaş ilanı · 28 Temmuz 1914', layer: 'kivilcim', tone: 'danger' },
      { from: 'berlin', to: 'viyana', label: 'İttifak', layer: 'ittifak', tone: 'accent' },
      { from: 'paris', to: 'londra', label: 'İtilaf', layer: 'itilaf' },
      { from: 'istanbul', to: 'sivastopol', label: '29 Ekim 1914 bombardımanı', layer: 'osmanli', tone: 'danger' },
    ],
    insight:
      'Haritadaki dağılıma bak: İttifak Devletleri Avrupa’nın ortasında, İtilaf Devletleri ise onların batısında ve doğusunda. Almanya iki cepheli bir savaştan çekiniyordu; Osmanlı’nın savaşa girmesi ise İtilaf Devletleri’ne yeni cepheler açtı ve Rusya’nın Boğazlar üzerinden müttefiklerinden yardım almasını zorlaştırdı.',
    source_note:
      'Devletlerin blok üyelikleri ve tarihler; TDV İslâm Ansiklopedisi “Birinci Dünya Savaşı”, Britannica “Triple Entente” ve “Entente Cordiale”, Türk Tarih Kurumu “Osmanlı İmparatorluğu’nun I. Dünya Harbine Girişi ve Çarpıştığı Cepheler” yazısı esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; sınır ya da cephe hattı göstermez.',
  },
  dataTable: {
    title: 'Blokların oluşumu: kim, ne zaman, hangi tarafta?',
    columns: ['Yıl', 'Gelişme', 'Taraflar', 'Blok'],
    rows: [
      ['1879', 'İkili ittifak', 'Almanya, Avusturya-Macaristan', 'İttifak'],
      ['1882', 'İtalya’nın katılmasıyla Üçlü İttifak', 'Almanya, Avusturya-Macaristan, İtalya', 'İttifak'],
      ['1894', 'Fransa–Rusya ittifakı', 'Fransa, Rusya', 'İtilaf'],
      ['1904', 'İngiltere–Fransa anlaşması', 'İngiltere, Fransa', 'İtilaf'],
      ['1907', 'İngiltere–Rusya anlaşması; Üçlü İtilaf tamamlandı', 'İngiltere, Rusya', 'İtilaf'],
      ['1914', 'Osmanlı–Almanya ittifakı', 'Osmanlı Devleti, Almanya', 'İttifak'],
      ['1915', 'İtalya taraf değiştirdi', 'İtalya', 'İtilaf'],
      ['1915', 'Bulgaristan savaşa katıldı', 'Bulgaristan', 'İttifak'],
      ['1917', 'ABD savaşa katıldı', 'ABD', 'İtilaf'],
    ],
    caption:
      'Tablodan çıkan iki sonuç: Birincisi, bloklar bir anda değil, adım adım kuruldu. İkincisi, ittifaklar kalıcı değildi; İtalya örneği, devletlerin blok seçimini çıkarlarına göre değiştirebildiğini gösterir.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Birinci Dünya Savaşı neden çıktı?',
    lead: 'Savaşın sebeplerini tek bir olaya indirgeme. Dört asıl sebebi ve bir görünür sebebi ayrı ayrı gör.',
    intro: 'Aşağıdaki zincirde ilk dört halka savaşın asıl sebepleridir; sonraki halkalar bu sebeplerin nasıl bir savaşa dönüştüğünü gösterir.',
    steps: [
      { tur: 'sebep', title: 'Ekonomik rekabet ve sömürgecilik', body: 'Sanayileşen devletler ham madde ve pazar için yarıştı. Sömürge yarışına geç katılan Almanya, İngiltere ve Fransa’nın sömürge düzenine meydan okudu.' },
      { tur: 'sebep', title: 'Milliyetçilik', body: 'Balkanlar’daki Slav milliyetçiliği Avusturya-Macaristan’ı tehdit ediyordu; Rusya Slavların koruyucusu olmak istiyordu. Fransa’da ise Alsace-Lorraine’i geri alma isteği vardı.' },
      { tur: 'sebep', title: 'Silahlanma yarışı', body: 'Büyük devletler ordularını ve donanmalarını büyüttü. İngiltere–Almanya donanma yarışı iki devlet arasındaki güvensizliği derinleştirdi.' },
      { tur: 'sebep', title: 'Toprak anlaşmazlıkları', body: 'Alsace-Lorraine, Balkanlar ve Boğazlar üzerindeki çıkar çatışmaları devletleri karşı karşıya getirdi.' },
      { tur: 'gelisme', title: 'Bloklaşma', body: 'Rekabetler Avrupa’yı iki silahlı kampa ayırdı: Üçlü İttifak ve Üçlü İtilaf. Artık iki devlet arasındaki bir kriz, müttefikleri de içine çekebilirdi.' },
      { tur: 'gelisme', title: 'Kıvılcım: Saraybosna', body: '28 Haziran 1914 suikastı ve ardından gelen nota, Avusturya-Macaristan’ın Sırbistan’a savaş açmasına yol açtı. İttifaklar zincirleme savaş ilanlarını getirdi.' },
      { tur: 'sonuc', title: 'Bir dünya savaşı', body: 'Kısa sürede Avrupa’nın büyük devletlerinin hepsi savaşa girdi; sömürgeleri ve müttefikleriyle birlikte savaş dünyaya yayıldı.' },
      { tur: 'sonraki-etki', title: 'Osmanlı’nın savaşa girmesi', body: 'Osmanlı Devleti 1914 sonunda İttifak Devletleri’nin yanında savaşa girdi. Bu karar birçok cephede savaşmasına, 1918’de Mondros Ateşkes Antlaşması’na ve ardından Millî Mücadele’ye giden yolu açtı.' },
    ],
    inference:
      'Temel çıkarım: Saraybosna suikastı savaşın görünür (yakın) sebebidir; asıl (uzak) sebepler yıllar içinde biriken rekabetlerdir. Bir soruda “savaşın çıkmasında etkili olan” gelişmeler sorulursa her iki türü de düşün.',
    body:
      'Osmanlı Devleti savaşa neden girdi? Bu soruya da tek cevap yoktur; birden çok sebep bir araya geldi.\n\n' +
      '- **Yalnızlıktan kurtulmak:** Osmanlı, İtilaf Devletleri’ne de yakınlaşmayı denemiş ama karşılık bulamamıştı. Balkan Savaşları’ndan yalnız ve yorgun çıkmıştı.\n' +
      '- **Kaybedilen toprakları geri almak:** Yöneticiler, kazanılacak bir savaşla son yıllarda kaybedilen toprakların bir kısmının geri alınabileceğini düşünüyordu.\n' +
      '- **Almanya’nın kazanacağına duyulan güven:** Alman ordusunun gücü, savaşın kısa sürede Almanya’nın zaferiyle biteceği düşüncesini güçlendirmişti.\n' +
      '- **Ekonomik bağımsızlık:** Savaş ortamı kapitülasyonları kaldırmak için bir fırsat olarak görüldü.\n' +
      '- **İngiltere’ye duyulan tepki:** Halkın bağışlarıyla parası ödenen iki savaş gemisine İngiltere’nin el koyması kamuoyunda büyük öfke yarattı.\n\n' +
      'Almanya da Osmanlı’yı yanında görmek istiyordu: Osmanlı’nın savaşa girmesi İtilaf Devletleri’ne yeni cepheler açacak, Boğazlar’ın kapanması Rusya’nın müttefiklerinden yardım almasını zorlaştıracak ve halifenin çağrısının İtilaf Devletleri’nin sömürgelerindeki Müslümanları etkileyebileceği düşünülüyordu.',
  },
  comparison: {
    title: 'Üç büyük devlet, üç hesap: İngiltere, Almanya, Rusya',
    columns: ['İngiltere', 'Almanya', 'Rusya'],
    rows: [
      { label: 'Ne istiyordu?', values: ['Sömürgelerini ve deniz üstünlüğünü korumak; Almanya’nın yükselişini durdurmak', 'Yeni pazar ve sömürge; Orta Avrupa’dan Orta Doğu’ya uzanan bir nüfuz alanı', 'Boğazlar’a ve sıcak denizlere ulaşmak; Balkan Slavlarının koruyucusu olmak'] },
      { label: 'Hangi blokta?', values: ['İtilaf', 'İttifak', 'İtilaf'] },
      { label: 'Osmanlı’ya bakışı', values: ['Hindistan yolu ve Arap toprakları açısından önemli bir bölge', 'Orta Doğu’ya açılan kapı ve değerli bir müttefik', 'Boğazlar’ın sahibi olan, geleneksel rakip'] },
      { label: 'Savaşa giriş nedeni', values: ['Almanya’nın tarafsız Belçika’ya girmesi', 'Müttefiki Avusturya-Macaristan’ı desteklemek', 'Sırbistan’ı desteklemek'] },
    ],
    insight:
      'Üç devletin hesabı da Osmanlı topraklarıyla bir biçimde ilgiliydi. Bu yüzden Osmanlı Devleti savaşın dışında kalmakta zorlandı: Hangi taraf kazanırsa kazansın, Osmanlı toprakları üzerindeki hesaplar gündeme gelecekti.',
  },
  traps: [
    {
      title: 'Savaşın sebebini yalnızca suikasta bağlamak',
      wrong: 'Birinci Dünya Savaşı’nın sebebi Saraybosna suikastıdır.',
      right: 'Suikast savaşın görünür (yakın) sebebidir. Asıl sebepler ekonomik rekabet, sömürgecilik, milliyetçilik, silahlanma yarışı, toprak anlaşmazlıkları ve bloklaşmadır.',
      body: 'Soruda “asıl sebep”, “temel neden” ifadesi varsa suikastı işaretleme; “savaşı başlatan olay” ifadesi varsa suikastı düşün.',
    },
    {
      title: 'İtalya’nın yerini karıştırmak',
      wrong: 'İtalya savaş boyunca İttifak Devletleri’nin yanında savaştı.',
      right: 'İtalya Üçlü İttifak’ın kurucusuydu; ama savaş başlayınca tarafsız kaldı ve 1915’te İtilaf Devletleri’nin yanında savaşa girdi.',
      body: 'İtalya örneği, blokların kalıcı olmadığını, devletlerin çıkarlarına göre taraf değiştirebildiğini gösteren en bilinen örnektir.',
    },
    {
      title: 'Osmanlı’nın savaşa giriş tarihini karıştırmak',
      wrong: 'Osmanlı Devleti, Almanya ile ittifak antlaşması imzaladığı gün savaşa girdi.',
      right: 'Antlaşma 2 Ağustos 1914’te imzalandı; Osmanlı ertesi gün silahlı tarafsızlık ilan etti. Fiilen savaşa girmesi 29 Ekim 1914’teki Karadeniz bombardımanıyla oldu.',
      body: 'Sıra: ittifak (Ağustos) → Yavuz ve Midilli (Ağustos) → kapitülasyonların kaldırılması (Ekim başı) → Karadeniz bombardımanı (29 Ekim).',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Kararlarıyla şahsiyetler',
    lead: 'Savaş büyük güçlerin rekabetinden doğdu; ama belirli kişilerin belirli anlarda verdiği kararlar onu hızlandırdı.',
    intro: 'Her kartta kişinin hangi kararı verdiğine ve bu kararın savaşı nasıl etkilediğine bak.',
    figures: [
      {
        name: 'Arşidük Franz Ferdinand',
        period: '1914 · Avusturya-Macaristan veliahtı',
        position: 'Saraybosna’da öldürülen veliaht',
        contribution: 'Eşiyle birlikte Saraybosna’yı ziyaret ettiği sırada bir Sırp milliyetçisi tarafından öldürüldü.',
        connections: ['Saraybosna suikastı (28 Haziran 1914)', 'Bosna-Hersek’in ilhakı (1908)'],
        significance: 'Ölümü, Avusturya-Macaristan’ın Sırbistan’a karşı sert bir tutum almasının gerekçesi oldu.',
      },
      {
        name: 'Gavrilo Princip',
        period: '1914',
        position: 'Suikastı gerçekleştiren Sırp milliyetçisi',
        contribution: 'Bosna-Hersek’in Avusturya-Macaristan’dan ayrılmasını ve Güney Slavlarının birleşmesini isteyen bir gruba bağlıydı.',
        connections: ['Saraybosna suikastı', 'Slav milliyetçiliği'],
        significance: 'Milliyetçiliğin savaşın sebepleri arasındaki yerini tek bir olayda gösteren kişidir.',
      },
      {
        name: 'İmparator II. Wilhelm',
        period: '1914 · Almanya imparatoru',
        position: 'Almanya’nın dünya politikasını yöneten imparator',
        contribution: 'Almanya’nın sömürge ve donanma yarışına girmesini destekledi; Orta Doğu’ya yönelen politikayla Osmanlı’ya yakınlaştı. Krizde müttefiki Avusturya-Macaristan’ın yanında durdu.',
        connections: ['Üçlü İttifak', 'Silahlanma yarışı', 'Bağdat Demiryolu'],
        significance: 'Almanya’nın yükselişi İngiltere’yi Fransa ve Rusya ile anlaşmaya iten başlıca gelişmelerden biriydi.',
      },
      {
        name: 'Enver Paşa',
        period: '1914 · Harbiye nazırı',
        position: 'Osmanlı savaş bakanı',
        contribution: 'Almanya ile ittifak kurulmasını savundu ve bu yönde Alman büyükelçisine teklifte bulundu. İttifak 2 Ağustos 1914’te gizlice imzalandı.',
        connections: ['Osmanlı–Almanya ittifakı', 'Seferberlik', 'Osmanlı’nın savaşa girişi'],
        significance: 'Osmanlı’nın savaşa girme kararında belirleyici isimlerdendi; bu kararın sonuçları sonraki derslerde görülecek.',
      },
      {
        name: 'Amiral Souchon',
        period: '1914 · Alman amiral',
        position: 'Yavuz ve Midilli’yi getiren, sonra Osmanlı donanmasının başına geçen amiral',
        contribution: 'Gemileri İngiliz donanmasından kaçırarak Çanakkale’ye getirdi. 29 Ekim 1914’te Osmanlı donanmasıyla Rus limanlarını bombaladı.',
        connections: ['Yavuz ve Midilli', 'Karadeniz bombardımanı (29 Ekim 1914)'],
        significance: 'Bu bombardıman Osmanlı’nın fiilen savaşa girmesini sağladı; geri dönüşü olmayan bir adımdı.',
      },
      {
        name: 'Winston Churchill',
        period: '1914 · İngiltere Deniz Bakanı',
        position: 'İngiliz donanmasının sorumlu bakanı',
        contribution: 'İngiltere’de yapılan ve parası ödenmiş iki Osmanlı savaş gemisine el konulması kararında etkili oldu.',
        connections: ['Sultan Osman ve Reşadiye gemileri', 'Osmanlı kamuoyunun İngiltere’ye tepkisi'],
        significance: 'Bu karar Osmanlı kamuoyunu İngiltere’ye karşı öfkelendirdi ve Almanya’ya yakınlaşmayı kolaylaştırdı.',
      },
    ],
    takeaway:
      'Kişilerin kararları büyük rekabetlerin içinde anlam kazanır: Bir suikastçı bir veliahtı öldürdü, ama o ölümü dünya savaşına çeviren şey devletlerin ittifak ağıydı.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-osmanli-tarafsizlik`,
      title: 'Osmanlı tarafsız kalabilir miydi?',
      lead: 'Tarih yalnızca “ne oldu?” sorusunu değil, “başka ne olabilirdi?” sorusunu da tartışır. Bu soru kesin bir cevabı olmayan ama düşünmeyi öğreten bir sorudur.',
      blocks: [
        {
          id: `${SLUG}-osmanli-tarafsizlik-anlatim`,
          type: 'prose',
          body:
            'Osmanlı Devleti savaşın başında silahlı tarafsızlık ilan etti. Birkaç ay sonra ise savaşın içindeydi. Tarihçiler bu dönemi değerlendirirken farklı noktaları öne çıkarır.\n\n' +
            'Bir görüşe göre **tarafsız kalmak çok zordu**: Osmanlı toprakları büyük devletlerin hesaplarının tam ortasındaydı; İtilaf Devletleri’ne yakınlaşma çabaları karşılık bulmamıştı; Rusya’nın Boğazlar üzerindeki isteği biliniyordu. Savaş kimin zaferiyle biterse bitsin, Osmanlı toprakları masaya gelecekti.\n\n' +
            'Başka bir görüşe göre **karar aceleyle ve dar bir yönetici grubu tarafından verildi**: Ordu Balkan Savaşları’nın yaralarını henüz sarmamıştı; savaşa girmek birçok cephede aynı anda savaşmak demekti. Antlaşmanın gizlice imzalanması ve fiilî savaşa girişin bir bombardımanla gerçekleşmesi bu görüşü destekleyen kanıtlar olarak gösterilir.\n\n' +
            'Bu iki görüş birbirini tamamen dışlamaz. Tarih okurken bir karar hakkında farklı değerlendirmeleri karşılaştırmak, tek bir yargıyı ezberlemekten daha değerlidir. LGS’de karşına bir yorum metni geldiğinde, yorumun hangi kanıtlara dayandığını sorman bu yüzden önemlidir.',
        },
        {
          id: `${SLUG}-osmanli-tarafsizlik-tablo`,
          type: 'table',
          interactive: true,
          title: 'Osmanlı ve Almanya: iki tarafın beklentisi',
          columns: ['Taraf', 'Beklenti', 'Dayanağı'],
          rows: [
            ['Osmanlı Devleti', 'Yalnızlıktan kurtulmak, kayıp toprakların bir kısmını geri almak, kapitülasyonlardan kurtulmak', 'Almanya’nın güçlü ordusu; İtilaf’ın yakınlaşma çabalarına karşılık vermemesi'],
            ['Almanya', 'İtilaf Devletleri’ne yeni cepheler açmak, Boğazlar’ı kapatarak Rusya’yı yalnız bırakmak, halifenin çağrısıyla sömürgelerdeki Müslümanları etkilemek', 'Osmanlı’nın coğrafi konumu ve halifelik makamı'],
          ],
          caption: 'İki tarafın beklentileri birbirini tamamlıyordu; ittifakın kurulmasını kolaylaştıran da bu uyumdu.',
        },
        {
          id: `${SLUG}-osmanli-tarafsizlik-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Osmanlı’nın savaşa girişi dört adımda',
          body: 'İttifak (2 Ağustos) → Gemiler (10 Ağustos) → Kapitülasyonlar kalkıyor (1 Ekim) → Karadeniz bombardımanı (29 Ekim).',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Savaşın başlamasına giden süreçteki en önemli belgelerden biri, Avusturya-Macaristan’ın Sırbistan’a verdiği notadır. Bu belgeyi okumak, “egemenlik” kavramını anlamak için de iyi bir fırsattır.',
    intro:
      'Diplomatik bir **nota**, bir devletin başka bir devlete resmî olarak ilettiği yazılı istektir. Süre verilen ve reddedilmesi durumunda savaş tehdidi içeren notalara **ültimatom** denir.\n\n' +
      'Aşağıdaki birinci metin notanın bazı maddelerinin sadeleştirmesidir; ikinci metin savaşın sorumluluğu üzerine örnek bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Avusturya-Macaristan’ın Sırbistan’a notası',
        kunye: 'Avusturya-Macaristan hükümetinin Sırbistan hükümetine verdiği nota, 23 Temmuz 1914, Belgrad.',
        nitelik: 'DRKOÇ sadeleştirmesi. Notanın bazı maddeleri günümüz Türkçesiyle özetlenmiştir; birebir çeviri değildir.',
        metin:
          'Sırbistan hükümeti, Avusturya-Macaristan’a karşı yapılan yayınları ve propagandayı yasaklayacak; bu propagandaya katılan subay ve memurları görevden alacaktır. Suikastla ilgili soruşturmaya Sırbistan topraklarında Avusturya-Macaristan görevlileri de katılacaktır. Sırbistan bu isteklere 48 saat içinde cevap verecektir.',
        soru: 'Sırbistan istenenlerin çoğunu kabul etti ama Avusturya-Macaristan görevlilerinin kendi topraklarında soruşturmaya katılmasını kabul etmedi. Sırbistan neden bu maddeye itiraz etmiş olabilir? Notanın 48 saatlik süresi neyi gösterir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olayın yaşandığı günlerde bir devletin başka bir devlete verdiği resmî belgedir: birincil kaynak.' },
          { title: 'İstekleri ayır', body: 'Yayınların yasaklanması, görevlilerin görevden alınması, yabancı görevlilerin soruşturmaya katılması ve 48 saatlik süre.' },
          { title: 'İtiraz edilen maddeyi yorumla', body: 'Bir devletin kendi topraklarında başka bir devletin görevlilerine soruşturma yetkisi vermesi, kendi yargı yetkisinden, yani egemenliğinden vazgeçmesi anlamına gelir.' },
          { title: 'Süreyi yorumla', body: 'Çok kısa bir süre verilmesi, notanın görüşme için değil, sert bir baskı için yazıldığını düşündürür. Avusturya-Macaristan, Sırbistan’ın cevabını yeterli bulmayıp birkaç gün sonra savaş ilan etti.' },
        ],
        cevap: 'Sırbistan, yabancı görevlilerin kendi topraklarında soruşturma yapmasını egemenliğine aykırı gördüğü için bu maddeye itiraz etmiş olabilir. 48 saatlik süre, notanın uzlaşma aramaktan çok sert bir baskı amacı taşıdığını gösterir.',
        cikarim: 'Bu belge, “egemenlik” kavramını somut olarak gösterir: Kendi topraklarında yargı yetkisini başkasıyla paylaşmak zorunda kalan bir devlet tam bağımsız değildir. Aynı fikir, kapitülasyonların neden kaldırılmak istendiğini de açıklar.',
      },
      {
        tur: 'ikincil',
        baslik: 'Savaşın sorumluluğu üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Tarihçiler arasındaki farklı değerlendirmeleri göstermek için yazılmıştır.',
        metin:
          'Birinci Dünya Savaşı’nın sorumluluğu uzun süre tartışıldı. Bazı tarihçiler savaşın asıl sorumluluğunu, müttefikine koşulsuz destek veren ve hızla harekete geçen Almanya’da görür. Bazıları ise sorumluluğu bütün büyük devletlerin rekabetine ve birbirine güvensizliğine yayar. İki yaklaşım da 1914 yazında atılan her adımın savaşı biraz daha kaçınılmaz kıldığı konusunda birleşir.',
        soru: 'Metinde kaç farklı görüş var? İki görüşün ortak noktası nedir? Tarihçilerin aynı olay hakkında farklı yorum yapmasının sebebi ne olabilir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaydan çok sonra, farklı tarihçilerin görüşlerini özetleyen bir metin: ikincil kaynak.' },
          { title: 'Görüşleri ayır', body: 'Birinci görüş sorumluluğu ağırlıklı olarak Almanya’da görür; ikinci görüş bütün büyük devletlere yayar.' },
          { title: 'Ortak noktayı bul', body: 'İki görüş de 1914 yazındaki adımların savaşı giderek kaçınılmaz hâle getirdiğinde birleşir.' },
          { title: 'Farklılığın sebebini düşün', body: 'Tarihçiler farklı belgeleri öne çıkarabilir, olaylara farklı ağırlık verebilir ya da farklı sorular sorabilir. Bu yüzden aynı olay hakkında birden çok yorum ortaya çıkar.' },
        ],
        cevap: 'Metinde iki görüş var: sorumluluğu ağırlıklı olarak Almanya’da gören ve bütün büyük devletlere yayan görüş. Ortak noktaları 1914 yazındaki adımların savaşı kaçınılmaz kıldığıdır. Farklı yorumlar, farklı kanıtların ve bakış açılarının öne çıkarılmasından doğar.',
        cikarim: 'Bir yorum metninde “bazı tarihçiler”, “kimilerine göre” gibi ifadeler görürsen metnin tek bir kesin yargı değil, farklı görüşler sunduğunu anla. “Kesinlikle Almanya sorumludur” gibi bir seçenek bu metinden çıkarılamaz.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Asıl sebep mi, görünür sebep mi?',
      prompt:
        'Aşağıdaki gelişmelerden hangileri Birinci Dünya Savaşı’nın asıl (uzak), hangisi görünür (yakın) sebebidir?\n\n- I. Sanayileşen devletlerin ham madde ve pazar rekabeti\n- II. Saraybosna suikastı\n- III. İngiltere–Almanya donanma yarışı\n- IV. Balkanlar’daki Slav milliyetçiliği',
      steps: [
        { title: 'Zamanı düşün', body: 'I, III ve IV yıllar içinde biriken durumlardır; II ise tek bir günde yaşanan bir olaydır.' },
        { title: 'Etkisini düşün', body: 'I, III ve IV savaşın zeminini hazırladı; II ise bu zeminde savaşı başlatan olay oldu.' },
        { title: 'Sınıflandır', body: 'Asıl sebepler: I, III, IV. Görünür sebep: II.' },
      ],
      answer: 'I, III ve IV asıl (uzak) sebeplerdir; II görünür (yakın) sebeptir.',
      takeaway: 'Yıllar içinde biriken “durumlar” asıl sebeptir; belirli bir tarihte yaşanan “olay” çoğunlukla görünür sebeptir.',
    },
    {
      title: 'Zincirleme savaş ilanlarını açıkla',
      prompt: 'Avusturya-Macaristan’ın Sırbistan’a savaş açması, birkaç gün içinde İngiltere’nin de savaşa girmesine nasıl yol açtı? Adım adım açıkla.',
      steps: [
        { title: '1. halka', body: 'Avusturya-Macaristan Sırbistan’a savaş açtı (28 Temmuz 1914).' },
        { title: '2. halka', body: 'Rusya Sırbistan’ı destekleyerek seferberlik başlattı.' },
        { title: '3. halka', body: 'Almanya müttefiki Avusturya-Macaristan’ın yanında yer alarak Rusya’ya (1 Ağustos), ardından Rusya’nın müttefiki Fransa’ya (3 Ağustos) savaş ilan etti.' },
        { title: '4. halka', body: 'Almanya Fransa’ya ulaşmak için tarafsız Belçika’ya girince İngiltere Almanya’ya savaş ilan etti (4 Ağustos).' },
      ],
      answer: 'İttifaklar bir zincir gibi çalıştı: Sırbistan → Rusya → Almanya → Fransa → Belçika → İngiltere. Her devlet müttefikini ya da çıkarını korumak için savaşa girdi.',
      takeaway: 'Zincir sorularında her halkada “Bu devlet kimin müttefikiydi?” diye sor.',
    },
    {
      title: 'Osmanlı’nın savaşa giriş sebeplerini sınıflandır',
      prompt: 'Osmanlı Devleti’nin Birinci Dünya Savaşı’na girme sebeplerini siyasi, ekonomik ve askerî olarak sınıflandır.',
      steps: [
        { title: 'Siyasi', body: 'Yalnızlıktan kurtulmak; İtilaf’ın yakınlaşma çabalarına karşılık vermemesi; kaybedilen toprakların bir kısmını geri alma isteği.' },
        { title: 'Ekonomik', body: 'Kapitülasyonlardan kurtulmak; İngiltere’nin parası ödenmiş gemilere el koyması.' },
        { title: 'Askerî', body: 'Alman ordusunun gücüne ve savaşın kısa süreceğine duyulan güven; Rusya tehdidine karşı güçlü bir müttefik bulma isteği.' },
      ],
      answer: 'Siyasi: yalnızlık ve kayıp toprakları geri alma isteği. Ekonomik: kapitülasyonlar ve gemi meselesi. Askerî: Almanya’nın gücüne güven ve Rusya tehdidi.',
      takeaway: 'Bir kararın sebeplerini alanlara ayırmak, hem hatırlamayı kolaylaştırır hem de tek nedenli açıklamadan korur.',
    },
  ],
  questionClue: {
    concept: 'Soruda bloğu ve devleti nasıl tanırım?',
    statement: 'Soru bir devletin beklentisini ya da davranışını anlatıp hangi devletten ya da hangi bloktan söz edildiğini sorabilir.',
    clues: [
      '“Boğazlar, sıcak denizler, Slavların koruyucusu” → Rusya (İtilaf)',
      '“Alsace-Lorraine’i geri alma” → Fransa (İtilaf)',
      '“Deniz üstünlüğü, geniş sömürgeler, Belçika’nın işgaline tepki” → İngiltere (İtilaf)',
      '“Sömürge yarışına geç katılma, Bağdat Demiryolu” → Almanya (İttifak)',
      '“Çok uluslu yapı, Sırp milliyetçiliğinden korku” → Avusturya-Macaristan (İttifak)',
      '“Kurucu üye olup taraf değiştirme” → İtalya',
    ],
    reasoning: 'Her devletin savaştan beklentisi, onun hangi blokta olduğunu ve neden savaşa girdiğini açıklar. İpucu sözcüğünü devletle eşleştir, sonra bloğu yerleştir.',
    boundary: 'Dikkat: Osmanlı Devleti ve Bulgaristan blokların kurucusu değildir; savaş sırasında İttifak Devletleri’ne katılmışlardır.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir harita, blok tablosu, kronoloji ya da diplomatik belge verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Asıl sebep ile görünür sebebi ayırt etme',
      'Devleti beklentisinden tanıyıp bloğa yerleştirme',
      'Zincirleme savaş ilanlarını sıralama',
      'Osmanlı’nın savaşa giriş sebeplerini sınıflandırma',
      'Belgeden egemenlik ve bağımsızlık üzerine çıkarım yapma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Bloklaşma olmasaydı Saraybosna suikastı yine bir dünya savaşına dönüşür müydü? Gerekçenle açıkla.',
      hint: 'Suikast kimleri doğrudan ilgilendiriyordu?',
      answer: 'Büyük olasılıkla dönüşmezdi ya da çok daha sınırlı kalırdı. Suikast doğrudan yalnız Avusturya-Macaristan ile Sırbistan’ı ilgilendiriyordu. Krizi dünya savaşına çeviren, Rusya’nın Sırbistan’ı, Almanya’nın Avusturya-Macaristan’ı, Fransa’nın Rusya’yı desteklemesini gerektiren ittifak ağıydı. Bu bir tahmin sorusudur; kesin cevap veremeyiz ama kanıtlar bloklaşmanın krizi büyüttüğünü gösterir.',
    },
    {
      prompt: 'İngiltere’nin parası ödenmiş iki Osmanlı savaş gemisine el koyması, Osmanlı kamuoyunu neden bu kadar etkiledi?',
      answer: 'Gemilerin parası halkın bağışlarıyla toplanmıştı; yani gemiler halkın kendi fedakârlığının ürünüydü. İngiltere’nin bunlara el koyması hem ekonomik bir kayıp hem de milletin onuruna yönelik bir haksızlık olarak görüldü. Bu öfke Almanya’ya yakınlaşmayı kolaylaştırdı.',
    },
    {
      prompt: 'Osmanlı Devleti’nin savaşa girmesi, Almanya’ya hangi askerî avantajları sağladı?',
      answer: 'Osmanlı’nın savaşa girmesiyle İtilaf Devletleri Kafkasya’da, Mısır’da, Irak’ta ve Çanakkale’de yeni cephelerde savaşmak zorunda kaldı; güçleri bölündü. Boğazlar’ın kapanması Rusya’nın müttefiklerinden yardım almasını zorlaştırdı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.1 bir “kavrar” kazanımıdır: öğrenciden Birinci Dünya Savaşı’nın sebeplerini ve savaşın başlamasına yol açan gelişmeleri anlamasını ister. Programın açıklaması savaş öncesindeki bloklaşmayı öne çıkarır. Bu kazanıma dayanan bir soru bir blok tablosu, bir harita ya da bir devletin beklentilerini verip çıkarım isteyebilir.',
    measures: [
      'Savaşın asıl ve görünür sebeplerini ayırt etme',
      'Blokları ve üyelerini tanıma',
      'Bloklaşmanın krizi nasıl büyüttüğünü açıklama',
      'Osmanlı Devleti’nin savaşa giriş sürecini sıralama',
      'Devletlerin savaştan beklentilerini karşılaştırma',
    ],
  },
  simulationTable: {
    title: 'Savaş öncesi bazı devletlerin beklentileri',
    columns: ['Devlet', 'Beklenti'],
    rows: [
      ['K', 'Boğazlar’a ve sıcak denizlere ulaşmak, Balkan Slavlarını korumak'],
      ['L', '1871’de kaybettiği toprakları geri almak'],
      ['M', 'Yeni pazarlar edinmek ve Orta Doğu’ya uzanan bir nüfuz alanı kurmak'],
      ['N', 'Deniz üstünlüğünü ve geniş sömürgelerini korumak'],
    ],
    caption: 'Tablodaki harfler devletlerin adlarının yerine kullanılmıştır.',
  },
  simulation: {
    title: 'Mini LGS: Beklentiden bloğa',
    passage: 'Yukarıdaki tabloda Birinci Dünya Savaşı öncesinde bazı devletlerin beklentileri verilmiştir.',
    question: 'Bu tabloya göre aşağıdakilerden hangisi söylenebilir?',
    options: [
      { text: 'K, L ve N devletleri savaşa aynı blokta girmiştir.', explanation: 'Doğru. K Rusya, L Fransa, N İngiltere’dir; üçü de İtilaf Devletleri’nin kurucusudur.' },
      { text: 'M devleti Üçlü İtilaf’ın kurucularındandır.', explanation: 'M, Orta Doğu’ya uzanan nüfuz alanı isteyen Almanya’dır; Almanya Üçlü İttifak’ın kurucusudur, İtilaf’ın değil.' },
      { text: 'L devleti savaş sırasında taraf değiştirmiştir.', explanation: 'L, 1871’de toprak kaybeden Fransa’dır; taraf değiştiren devlet İtalya’dır.' },
      { text: 'K ve M devletleri aynı bloktadır.', explanation: 'K Rusya (İtilaf), M Almanya’dır (İttifak); farklı bloklardadır, üstelik savaşta birbirine karşı savaşmışlardır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru devletlerin adını vermiyor; önce her beklentiyi bir devletle eşleştirmen gerekiyor. Sonra bu devletleri bloklara yerleştirip seçenekleri sınıyorsun.',
    critical_point: 'İki adımlı bir sorudur: Beklentiden devleti, devletten bloğu bulmak. İlk adımda hata yapan öğrenci ikinci adımda doğru düşünse bile yanlış cevaba ulaşır. “1871” ipucu Fransa’yı, “Boğazlar ve Slavlar” ipucu Rusya’yı kesin olarak gösterir.',
    takeaway: 'Harfli tablolarda önce bütün harfleri çöz, sonra seçeneklere geç. Seçeneklerden başlarsan çeldiricilere takılırsın.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Rekabetten savaşa',
    range: '1871–1914',
    body:
      'Sanayileşen devletlerin ham madde ve pazar rekabeti, milliyetçilik, silahlanma yarışı ve toprak anlaşmazlıkları Avrupa’yı iki bloğa ayırdı: Almanya, Avusturya-Macaristan ve İtalya’nın Üçlü İttifak’ı ile İngiltere, Fransa ve Rusya’nın Üçlü İtilaf’ı. 28 Haziran 1914’teki Saraybosna suikastı bu gerilimi ateşledi; ittifaklar zinciri birkaç hafta içinde büyük devletlerin hepsini savaşa soktu. Osmanlı Devleti yalnızlıktan kurtulmak, kayıplarını telafi etmek ve kapitülasyonlardan kurtulmak gibi beklentilerle Almanya ile ittifak kurdu ve 29 Ekim 1914’teki Karadeniz bombardımanıyla savaşa girdi.',
    turning_points: [
      '1882 · Üçlü İttifak',
      '1907 · Üçlü İtilaf tamamlandı',
      '28 Haziran 1914 · Saraybosna suikastı',
      '28 Temmuz 1914 · Avusturya-Macaristan Sırbistan’a savaş ilan etti',
      '2 Ağustos 1914 · Osmanlı–Almanya ittifakı',
      '1 Ekim 1914 · Kapitülasyonların kaldırılması yürürlüğe girdi',
      '29 Ekim 1914 · Osmanlı fiilen savaşa girdi',
    ],
  },
  summary: [
    '**Asıl sebepler:** ekonomik rekabet ve sömürgecilik, milliyetçilik, silahlanma yarışı, toprak anlaşmazlıkları, bloklaşma.',
    '**Görünür sebep:** 28 Haziran 1914 Saraybosna suikastı.',
    '**Üçlü İttifak (1882):** Almanya, Avusturya-Macaristan, İtalya. **Üçlü İtilaf (1907):** İngiltere, Fransa, Rusya.',
    '**İtalya** savaş başında tarafsız kaldı, 1915’te İtilaf yanında savaşa girdi. **Osmanlı** ve **Bulgaristan** İttifak’a katıldı; **ABD** 1917’de İtilaf yanında savaşa girdi.',
    '**Zincir:** Avusturya-Macaristan → Sırbistan; Rusya Sırbistan’ın yanında; Almanya Rusya ve Fransa’ya; Belçika’nın işgali üzerine İngiltere savaşa girdi.',
    '**Osmanlı’nın savaşa girişi:** 2 Ağustos ittifak → 10 Ağustos Yavuz ve Midilli → 1 Ekim kapitülasyonlar kalktı → 29 Ekim Karadeniz bombardımanı.',
    '**Osmanlı’nın beklentileri:** yalnızlıktan kurtulmak, kayıp toprakları geri almak, kapitülasyonlardan kurtulmak; Almanya’nın kazanacağına güven.',
  ],
  quizzes: [
    {
      question: 'Aşağıdakilerden hangisi Birinci Dünya Savaşı’nın görünür (yakın) sebebidir?',
      options: ['Sömürge yarışı', 'Silahlanma yarışı', 'Saraybosna suikastı', 'Bloklaşma'],
      answer_index: 2,
      explanation: 'Saraybosna suikastı savaşı başlatan olaydır, yani görünür sebeptir. Sömürge yarışı, silahlanma yarışı ve bloklaşma yıllar içinde biriken asıl sebeplerdir.',
    },
    {
      question: 'Üçlü İttifak’ın kurucularından olduğu hâlde savaş sırasında İtilaf Devletleri’nin yanında yer alan devlet hangisidir?',
      options: ['Rusya', 'İtalya', 'Bulgaristan', 'Fransa'],
      answer_index: 1,
      explanation: 'İtalya 1882’de Üçlü İttifak’ın kurucuları arasındaydı; savaş başlayınca tarafsız kaldı ve 1915’te İtilaf yanında savaşa girdi. Rusya ve Fransa baştan İtilaf’taydı; Bulgaristan İttifak’a katıldı.',
    },
    {
      question: 'Osmanlı Devleti’nin Birinci Dünya Savaşı’na fiilen girmesini sağlayan olay hangisidir?',
      options: ['Almanya ile ittifak antlaşması imzalanması', 'Seferberlik ilan edilmesi', 'Kapitülasyonların kaldırılması', 'Karadeniz’de Rus limanlarının bombalanması'],
      answer_index: 3,
      explanation: '29 Ekim 1914’te Rus limanlarının bombalanmasıyla Osmanlı fiilen savaşa girdi. İttifak antlaşması ve seferberlik savaşa hazırlık adımlarıdır; kapitülasyonların kaldırılması ise ekonomik bir karardır.',
    },
    {
      question: 'Rusya’nın Birinci Dünya Savaşı’ndaki beklentileri arasında aşağıdakilerden hangisi yer alır?',
      options: ['Alsace-Lorraine’i geri almak', 'Boğazlar’a ve sıcak denizlere ulaşmak', 'Deniz üstünlüğünü korumak', 'Bağdat Demiryolu’nu tamamlamak'],
      answer_index: 1,
      explanation: 'Rusya’nın temel hedefi Boğazlar’a ve sıcak denizlere ulaşmaktı. Alsace-Lorraine Fransa’nın, deniz üstünlüğü İngiltere’nin, Bağdat Demiryolu ise Almanya’nın beklentisiyle ilgilidir.',
    },
  ],
  next: ['I. Dünya Savaşı’nda Osmanlı Cepheleri', 'Mondros Ateşkes Antlaşması ve İşgaller Karşısında Tutumlar'],
})

export default lesson
