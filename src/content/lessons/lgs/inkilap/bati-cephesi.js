import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.3 Millî Bir Destan · 2. ders
 * Kazanımlar: İTA.8.3.2 · İTA.8.3.3
 * Dayanak   : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (İTA.8.3.2)
 *   a) Kuvâ-yı Millîye birliklerinin faaliyetleri ve düzenli ordunun kurulma süreci ele alınır.
 *   b) I. İnönü ve II. İnönü Muharebeleri ile Kütahya-Eskişehir Muharebeleri ele alınır.
 *   c) Teşkilat-ı Esasiye Kanunu, Londra Konferansı, Afganistan ile Dostluk Antlaşması,
 *      İstiklal Marşı ve Moskova Antlaşması'na değinilir.
 * İTA.8.3.3 için programda ayrıca açıklama yoktur.
 *
 * KAPSAM KARARI
 * Teşkilât-ı Esasiye'nin ilk üç maddesi TBMM kanun arşivindeki 1921 metninden
 * (Kanun no 85), Moskova Antlaşması'nın 1. maddesi TTK yayınındaki metinden,
 * İsmet Paşa'ya çekilen telgraf Nutuk'tan, Maarif Kongresi konuşması Atatürk'ün
 * Söylev ve Demeçleri'ndeki metinden birebir alıntılandı. Kaynaklarda gün farkı
 * olan bilgiler (I. İnönü'nün bitişi, Londra Konferansı'nın başlangıcı, Maarif
 * Kongresi'nin açılışı) ay/yıl düzeyinde yazıldı. Sakarya ve Başkomutanlık
 * Kanunu bir sonraki dersin konusudur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 12.
 */

const SLUG = 'lgs-tarih-bati-cephesi'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Bir Destan: Ya İstiklal Ya Ölüm',
  order: 2,
  title: 'Batı Cephesi: Düzenli Ordu, İnönü Zaferleri ve Maarif Kongresi',
  subtitle:
    'Kuvâ-yı Millîye düşmanı yavaşlattı ama durduramadı. Meclis düzenli orduyu kurdu, İnönü’de iki zafer kazandı ve bu zaferleri masada, mecliste ve okulda sonuçlara dönüştürdü.',
  minutes: 50,
  kazanimlar: ['İTA.8.3.2', 'İTA.8.3.3'],
  kapsamNotu:
    'Teşkilât-ı Esasiye Kanunu, Moskova Antlaşması, İsmet Paşa’ya çekilen telgraf ve Maarif Kongresi konuşması birebir alıntılanmıştır. Kaynaklar arasında gün farkı olan bilgiler ay ve yıl düzeyinde yazılmıştır. Sakarya Meydan Muharebesi bir sonraki derste işlenir.',
  prerequisites: [
    {
      topic: 'Kuvâ-yı Millîye (önceki ünite)',
      why: 'Düzenli ordunun neden gerektiğini anlamak için Kuvâ-yı Millîye’nin güçlü ve zayıf yanlarını bilmek gerekir.',
    },
    {
      topic: 'Misakımillî ve Sevr',
      why: 'Londra Konferansı ve Moskova Antlaşması, Sevr ile Misakımillî arasındaki mücadelenin diplomasideki devamıdır.',
    },
  ],
  outcomes: [
    'Kuvâ-yı Millîye’den düzenli orduya geçişin sebeplerini ve sürecini açıklayabileceksin.',
    'I. İnönü, II. İnönü ve Kütahya–Eskişehir muharebelerini sonuçlarıyla karşılaştırabileceksin.',
    'Teşkilât-ı Esasiye, Londra Konferansı, Afganistan ve Moskova antlaşmaları ile İstiklal Marşı’nın önemini açıklayabileceksin.',
    'Savaşın en zor günlerinde Maarif Kongresi’nin toplanmasından Atatürk’ün eğitime verdiği önemi çıkarabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Asıl tehlike batıdaydı',
    lead:
      'Doğuda Ermenistan, güneyde Fransa ile savaşılırken en büyük tehlike batıdaydı. İzmir’e çıkan Yunan ordusu 1920 yazında Anadolu’nun içlerine doğru ilerliyordu.',
    body:
      '**Kuvâ-yı Millîye** işgalin ilk günlerinden beri batıda direniyordu. Ama 1920 yazında Yunan ordusunun büyük taarruzu karşısında bu gönüllü birlikler yetersiz kaldı: Balıkesir, Bursa ve Uşak kısa sürede düştü. Büyük Millet Meclisi şu kararı verdi: Düzenli bir orduya ihtiyaç var.\n\n' +
      'Kasım 1920’de Batı Cephesi yeniden düzenlendi ve Kuvâ-yı Millîye birlikleri düzenli ordunun içine alındı. Bu ordu Ocak 1921’de **I. İnönü**’de, Mart–Nisan 1921’de **II. İnönü**’de Yunan ordusunu durdurdu. İki zafer arasında Meclis ilk anayasasını yaptı, Londra’da İtilaf Devletleri’yle aynı masaya oturdu, Afganistan ve Sovyet Rusya ile antlaşmalar imzaladı, İstiklal Marşı’nı kabul etti.\n\n' +
      'Temmuz 1921’de ise Kütahya–Eskişehir muharebelerinde Türk ordusu yenildi ve Sakarya’nın doğusuna çekildi. Tam bu günlerde Ankara’da bir **Maarif (Eğitim) Kongresi** toplandı ve Mustafa Kemal cepheden gelip kongreyi açtı. Bu derste hem savaşı hem de bu ilginç kararı inceleyeceğiz.',
  },
  concepts: [
    { term: 'Düzenli ordu', body: 'Merkezden yönetilen, rütbe ve emir-komuta zinciri olan, askerleri kayıtlı ve eğitimli ordu. Kuvâ-yı Millîye ise gönüllülerden oluşan, yerel önderlere bağlı birliklerdi.' },
    { term: 'Muharebe', body: 'Savaş içinde belli bir yerde ve zamanda yapılan çarpışma. “İnönü Muharebesi” gibi.' },
    { term: 'Teşkilât-ı Esasiye Kanunu', body: 'Kelime anlamı “temel teşkilat kanunu”. 20 Ocak 1921’de kabul edilen ve Büyük Millet Meclisi döneminin anayasası olan kanun.' },
    { term: 'Konferans', body: 'Devletlerin temsilcilerinin bir sorunu görüşmek için bir araya geldiği toplantı. Londra Konferansı böyle bir toplantıydı.' },
    { term: 'Maarif', body: 'Eğitim ve öğretim işleri. Maarif Vekâleti bugünkü Millî Eğitim Bakanlığı’nın karşılığıdır.' },
  ],
  why: {
    question: 'Kuvâ-yı Millîye bu kadar fedakârken neden düzenli ordu gerekti?',
    body:
      'Çünkü Kuvâ-yı Millîye, ilk işgaller sırasında düşmanı oyalamak ve halkı direnişe katmak için çok değerliydi; ama büyük ve düzenli bir orduya karşı cephe savaşı vermek için yeterli değildi. Birlikler birbirinden bağımsız hareket ediyordu, eğitim ve donanım farklıydı, bazı birlik komutanları Meclis’in emirlerine uymakta zorlanıyordu.\n\n' +
      'Bu düzenli ordunun Kuvâ-yı Millîye’ye karşı kurulduğu anlamına gelmez. Tam tersine, Kuvâ-yı Millîye birliklerinin büyük kısmı düzenli ordunun içine girdi. Değişen şey, bütün gücün tek bir komuta altında ve Meclis’in denetiminde toplanmasıydı.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Batı Cephesi (1920–1921)',
    lead: 'Kronolojide savaş ve siyaset iç içe ilerler. Hangi olayın cephede, hangisinin Meclis’te ya da masada olduğuna dikkat et.',
    intro: 'Özellikle I. İnönü ile II. İnönü arasındaki üç aya dikkat et: Meclis bu kısa sürede birçok önemli adım attı.',
    items: [
      { title: 'Haziran–Temmuz 1920 · Yunan taarruzu', body: 'Yunan ordusu Balıkesir, Bursa ve Uşak’ı aldı. Kuvâ-yı Millîye bu ilerleyişi durduramadı.' },
      { title: '24 Ekim 1920 · Gediz Taarruzu', body: 'Gediz’deki Yunan birliklerine yapılan taarruz ağır kayıplarla sonuçlandı; komuta ve düzen sorunu açıkça görüldü.' },
      { title: '9 Kasım 1920 · Düzenli orduya geçiş', body: 'Batı Cephesi ikiye ayrıldı: Batı Cephesi’ne İsmet Bey, Güney Cephesi’ne Refet Bey atandı. Kuvâ-yı Millîye birlikleri düzenli orduya katıldı.' },
      { title: 'Aralık 1920–Ocak 1921 · Çerkez Ethem ayaklanması', body: 'Düzenli orduya katılmayı reddeden Çerkez Ethem ayaklandı; yenilince Yunanlıların safına geçti.' },
      { title: 'Ocak 1921 · I. İnönü Muharebesi', body: 'Düzenli ordu, Eskişehir’e doğru ilerleyen Yunan ordusunu İnönü mevzilerinde durdurdu.' },
      { title: '20 Ocak 1921 · Teşkilât-ı Esasiye Kanunu', body: 'Büyük Millet Meclisi ilk anayasasını kabul etti.' },
      { title: 'Şubat–Mart 1921 · Londra Konferansı', body: 'İtilaf Devletleri Ankara’nın temsilcilerini de davet etti. Konferans olumlu bir sonuç vermedi.' },
      { title: '1 Mart 1921 · Afganistan ile antlaşma', body: 'Moskova’da Afganistan ile dostluk antlaşması imzalandı; iki devlet birbirinin bağımsızlığını tanıdı.' },
      { title: '12 Mart 1921 · İstiklal Marşı', body: 'Mehmet Âkif’in şiiri Büyük Millet Meclisi’nde İstiklal Marşı olarak kabul edildi.' },
      { title: '16 Mart 1921 · Moskova Antlaşması', body: 'Sovyet Rusya ile dostluk antlaşması imzalandı; Sovyet Rusya Meclis’in tanımadığı antlaşmaları tanımayacağını kabul etti.' },
      { title: '23 Mart–1 Nisan 1921 · II. İnönü Muharebesi', body: 'Yunan ordusu yeniden yenildi. Mustafa Kemal İsmet Paşa’ya “milletin makûs talihini de yendiniz” diye telgraf çekti.' },
      { title: 'Temmuz 1921 · Kütahya–Eskişehir ve Maarif Kongresi', body: 'Türk ordusu Kütahya–Eskişehir’de yenilip Sakarya’nın doğusuna çekildi. Aynı günlerde Ankara’da Maarif Kongresi toplandı.' },
    ],
    takeaway:
      'Dikkat et: Batı Cephesi’nde iki zafer (I. ve II. İnönü) ve bir yenilgi (Kütahya–Eskişehir) var. Yenilgi bile bir karardır: Ordu dağılmadan geri çekildi ve Sakarya’da yeniden savaşmak için zaman kazandı.',
    body:
      'Kronolojiyi üç evrede oku. **Birinci evre (1920 yazı–sonbaharı):** Kuvâ-yı Millîye Yunan ilerleyişini durduramıyor; Gediz taarruzu düzenin önemini gösteriyor. **İkinci evre (Kasım 1920–Nisan 1921):** Düzenli ordu kuruluyor ve iki zafer kazanıyor. Bu zaferlerin arasında Meclis, anayasa, diplomasi ve millî marş gibi bir devletin temel adımlarını atıyor. **Üçüncü evre (Temmuz 1921):** Büyük bir Yunan taarruzu karşısında ordu geri çekiliyor.\n\n' +
      'Bu evreler bize bir şey gösterir: Savaş yalnız cephede kazanılmaz. Cephedeki her başarı Meclis’e güveni artırdı, diplomaside elini güçlendirdi ve yeni bir devletin kurumlarını oluşturmak için zaman kazandırdı.',
  },
  map: {
    title: 'Şematik atlas: Batı Cephesi 1920–1921',
    intro: 'Katmanları sırayla aç. Önce Yunan ilerleyişini, sonra İnönü muharebelerini, en son Kütahya–Eskişehir’den Sakarya’ya çekilişi gör.',
    map_label: 'Şematik gösterim · cephe hattı, sınır ve uzaklık göstermez',
    layers: [
      { id: 'yunan', label: '1920 Yunan ilerleyişi', description: 'İzmir’den Bursa’ya ve Uşak’a.', active: true },
      { id: 'inonu', label: 'İnönü muharebeleri', description: 'Ocak ve Mart–Nisan 1921.', active: true },
      { id: 'kutahya', label: 'Kütahya–Eskişehir', description: 'Temmuz 1921; Sakarya’ya çekiliş.', active: false },
    ],
    regions: [
      { label: 'MARMARA DENİZİ', x: 20, y: 12, tone: 'water' },
      { label: 'EGE DENİZİ', x: 2, y: 50, tone: 'water' },
      { label: 'İÇ ANADOLU', x: 76, y: 76, tone: 'land' },
    ],
    locations: [
      { id: 'ankara', label: 'Ankara', x: 88, y: 34, tone: 'brand', detail: 'Büyük Millet Meclisi’nin merkezi. Teşkilât-ı Esasiye burada kabul edildi, İstiklal Marşı burada okundu, Maarif Kongresi Temmuz 1921’de burada toplandı.' },
      { id: 'izmir', label: 'İzmir', x: 8, y: 82, layer: 'yunan', tone: 'danger', detail: 'Yunan ordusunun Mayıs 1919’da çıktığı ve ilerleyişe başladığı yer.' },
      { id: 'bursa', label: 'Bursa', x: 34, y: 30, layer: 'yunan', tone: 'danger', detail: '1920 yazındaki Yunan taarruzunda işgal edildi. İnönü’ye yapılan Yunan saldırıları bu bölgeden başladı.' },
      { id: 'usak', label: 'Uşak', x: 38, y: 80, layer: 'yunan', tone: 'danger', detail: '1920 yazında Yunan işgaline girdi. II. İnönü’de Yunan ordusunun güney kolu buradan ilerledi.' },
      { id: 'gediz', label: 'Gediz · 24 Ekim 1920', x: 38, y: 64, layer: 'yunan', tone: 'accent', detail: 'Buradaki Yunan birliklerine yapılan taarruz ağır kayıplarla sonuçlandı ve düzenli ordu ihtiyacını hızlandırdı.' },
      { id: 'inonu', label: 'İnönü', x: 48, y: 40, layer: 'inonu', tone: 'brand', detail: 'Eskişehir’in batısındaki mevziler. Düzenli ordu burada Ocak 1921’de ve Mart–Nisan 1921’de Yunan ordusunu durdurdu.' },
      { id: 'dumlupinar', label: 'Dumlupınar', x: 48, y: 70, layer: 'inonu', tone: 'accent', detail: 'II. İnönü sırasında Güney Cephesi birlikleri burada Yunan ordusunun güney koluna karşı savundu; 26 Mart’ta geri çekilmek zorunda kaldı.' },
      { id: 'afyon', label: 'Afyon', x: 60, y: 76, layer: 'inonu', tone: 'danger', detail: 'II. İnönü sırasında Yunan ordusunun güney kolu Afyon’u aldı. Temmuz 1921’de de Yunan ilerleyişinin yolu üzerindeydi.' },
      { id: 'eskisehir', label: 'Eskişehir', x: 60, y: 46, layer: 'kutahya', tone: 'danger', detail: 'Kütahya–Eskişehir muharebelerinden sonra Temmuz 1921’de Türk ordusu Eskişehir’i bırakarak doğuya çekildi.' },
      { id: 'kutahya', label: 'Kütahya', x: 48, y: 55, layer: 'kutahya', tone: 'danger', detail: 'Temmuz 1921’deki büyük Yunan taarruzunda düştü.' },
      { id: 'sakarya', label: 'Sakarya Nehri', x: 76, y: 52, layer: 'kutahya', tone: 'brand', detail: 'Mustafa Kemal ordunun bu nehrin doğusuna çekilmesine karar verdi. Bir sonraki büyük savaş burada yapılacaktı.' },
    ],
    routes: [
      { from: 'izmir', to: 'bursa', label: '1920 yazı', layer: 'yunan' },
      { from: 'izmir', to: 'usak', label: '1920 yazı', layer: 'yunan' },
      { from: 'bursa', to: 'inonu', label: 'Yunan saldırısı', layer: 'inonu' },
      { from: 'usak', to: 'dumlupinar', label: 'Güney kolu', layer: 'inonu' },
      { from: 'eskisehir', to: 'sakarya', label: 'Türk ordusunun çekilişi', layer: 'kutahya', tone: 'accent' },
    ],
    insight:
      'Haritada Ankara’nın yerine bak: Sakarya Nehri, Ankara’nın hemen batısındadır. Kütahya–Eskişehir’den sonra geri çekilen ordu, Meclis’in bulunduğu şehre çok yaklaşmıştı. Bir sonraki savaşın neden “son savunma hattı” gibi görüldüğü buradan anlaşılır.',
    source_note:
      'Yerler ve sıralama; Nutuk (10–11. bölümler), Atatürk Araştırma Merkezi Dergisi (“Harp Raporlarına Göre Birinci İnönü Muharebesi’nin Analizi”), TÜBA “Millî Mücadelenin Yerel Tarihi” (“Yunan Taarruzu ve Güney Marmara”) ve Kütahya–Eskişehir muharebeleri üzerine akademik çalışmalar esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir.',
  },
  dataTable: {
    title: 'İki İnönü arasında: Meclis’in siyasi adımları',
    columns: ['Gelişme', 'Tarih', 'Ne oldu?', 'Neden önemli?'],
    rows: [
      ['Teşkilât-ı Esasiye Kanunu', '20 Ocak 1921', 'Büyük Millet Meclisi ilk anayasasını kabul etti.', 'Egemenliğin kayıtsız şartsız millete ait olduğu anayasaya yazıldı; Meclis hükümeti sistemi kuruldu.'],
      ['Londra Konferansı', 'Şubat–Mart 1921', 'İtilaf Devletleri İstanbul hükümetiyle birlikte Ankara’nın temsilcilerini de çağırdı; Sevr’de küçük değişiklikler önerdi.', 'İtilaf Devletleri Büyük Millet Meclisi’ni fiilen muhatap aldı. Konferans sonuç vermedi; Meclis Sevr’i kabul etmedi.'],
      ['Afganistan ile Dostluk Antlaşması', '1 Mart 1921', 'Moskova’da imzalandı. İki devlet birbirinin bağımsızlığını tanıdı.', 'Büyük Millet Meclisi Hükûmeti’ni bağımsız bir devlet olarak tanıyan ve onunla antlaşma imzalayan devletlerin sayısı arttı.'],
      ['İstiklal Marşı', '12 Mart 1921', '724 şiirin katıldığı yarışmadan sonra Mehmet Âkif’in şiiri Meclis’te kabul edildi.', 'Millî Mücadele’nin inancı ve bağımsızlık kararlılığı millî marşta dile geldi.'],
      ['Moskova Antlaşması', '16 Mart 1921', 'Sovyet Rusya ile dostluk antlaşması imzalandı; kuzeydoğu sınırı belirlendi, Batum Gürcistan’a bırakıldı.', 'Sovyet Rusya, Meclis’in tanımadığı antlaşmaları (yani Sevr’i) tanımayacağını ve Misakımillî topraklarını “Türkiye” olarak kabul etti.'],
    ],
    caption:
      'Bu tablo bir sıklık bilgisi değildir; programın “değinilir” dediği beş gelişmeyi bir arada gösterir. Hepsi I. İnönü ile II. İnönü arasındaki yaklaşık üç ayda gerçekleşti.',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Kuvâ-yı Millîye’den düzenli orduya: sebep, gelişme, sonuç',
    lead: 'Program, Kuvâ-yı Millîye’nin faaliyetlerini ve düzenli ordunun kurulma sürecini birlikte ele almanı ister. Zincir bu geçişi adım adım gösterir.',
    intro: 'Zincirin başı geçişin sebeplerini, ortası nasıl yapıldığını, sonu da ilk sonuçlarını anlatır.',
    steps: [
      { tur: 'sebep', title: 'Düzenli bir düşman ordusu', body: '1920 yazında Yunan ordusu büyük bir taarruzla Bursa’ya ve Uşak’a kadar ilerledi. Gönüllü birlikler bu ilerleyişi durduramadı.' },
      { tur: 'sebep', title: 'Emir-komuta sorunu', body: 'Kuvâ-yı Millîye birlikleri birbirinden bağımsız hareket ediyordu; bazı komutanlar Meclis’in emirlerine uymakta zorlanıyordu.' },
      { tur: 'sebep', title: 'Gediz’in dersi', body: '24 Ekim 1920’de Gediz’e yapılan taarruzun ağır kayıplarla sonuçlanması, düzensiz birliklerle büyük taarruz yapmanın zorluğunu gösterdi.' },
      { tur: 'gelisme', title: 'Batı Cephesi yeniden düzenlendi', body: '9 Kasım 1920’de cephe ikiye ayrıldı; İsmet Bey Batı, Refet Bey Güney cephesinin başına getirildi. Kuvâ-yı Millîye birlikleri düzenli orduya katıldı.' },
      { tur: 'gelisme', title: 'Çerkez Ethem ayaklanması', body: 'Düzenli orduya katılmayı reddeden Çerkez Ethem ayaklandı. Yenilince Yunanlıların safına geçti.' },
      { tur: 'sonuc', title: 'I. ve II. İnönü zaferleri', body: 'Düzenli ordu Ocak 1921’de ve Mart–Nisan 1921’de Yunan ordusunu İnönü’de durdurdu.' },
      { tur: 'sonraki-etki', title: 'Güven ve siyasi güç', body: 'Zaferler Meclis’e ve orduya güveni artırdı; Meclis anayasa yaptı, Londra’da muhatap alındı ve yeni antlaşmalar imzaladı.' },
    ],
    inference:
      'Temel çıkarım: Düzenli ordu Kuvâ-yı Millîye’nin yerine değil, onun üzerine kuruldu. Değişen, gücün tek bir komutada ve Meclis’in denetiminde toplanmasıydı.',
    body:
      'Geçişin tek bir sebebi yoktur. **Askerî sebep:** Düzenli bir orduya ancak düzenli bir orduyla karşı konabilirdi. **Siyasi sebep:** Meclis, ülkenin savunmasının kendi denetiminde olmasını istiyordu; Meclis’e bağlı olmayan silahlı güçler iç düzen için de tehlikeli olabilirdi. **Deneyim:** Gediz taarruzu, iyi niyetin tek başına yetmediğini gösterdi.\n\n' +
      'Kuvâ-yı Millîye’nin katkısını küçümseme. İşgalin ilk aylarında Yunan ilerleyişini yavaşlattı, halkı direnişe kattı ve düzenli ordunun kurulması için zaman kazandırdı. Düzenli ordunun birçok subayı ve askeri Kuvâ-yı Millîye’den geldi.',
  },
  comparison: {
    title: 'Batı Cephesi’nde üç muharebe',
    columns: ['I. İnönü', 'II. İnönü', 'Kütahya–Eskişehir'],
    rows: [
      { label: 'Zaman', values: ['Ocak 1921', '23 Mart–1 Nisan 1921', '10–24 Temmuz 1921'] },
      { label: 'Türk tarafı', values: ['İsmet Bey komutasında Batı Cephesi', 'Batıda İsmet Paşa; güneyde Refet Paşa', 'Batı Cephesi; yenilgiden sonra Mustafa Kemal geri çekilme kararını verdi'] },
      { label: 'Sonuç', values: ['Yunan ilerleyişi durduruldu', 'Yunan ordusu yenilip çekildi; güneyde Afyon bir süre Yunan elinde kaldı', 'Türk ordusu yenildi, Sakarya’nın doğusuna çekildi'] },
      { label: 'Ardından', values: ['Teşkilât-ı Esasiye; Londra’ya davet; Afganistan ve Moskova antlaşmaları', '“Makûs talih” telgrafı; Bekir Sami Bey’in anlaşmalarının reddi', 'Meclis’te tartışmalar; Sakarya’ya hazırlık'] },
      { label: 'Önemi', values: ['Düzenli ordunun ilk zaferi', 'Düzenli ordunun gücü kesinleşti', 'Ordu dağılmadan korundu; zaman kazanıldı'] },
    ],
    insight:
      'Asıl fark: İlk iki muharebede ordu mevzisini korudu; üçüncüde ise mevziyi değil, orduyu korumayı seçti. Geri çekilme bir kayıptı ama ordu yok olmadığı için mücadele sürebildi.',
  },
  traps: [
    {
      title: 'Düzenli orduyu Kuvâ-yı Millîye’nin karşıtı sanmak',
      wrong: 'Düzenli ordu kurulunca Kuvâ-yı Millîye’nin Millî Mücadele’ye hiçbir katkısı olmadığı anlaşıldı.',
      right: 'Kuvâ-yı Millîye işgalin ilk aylarında düşmanı yavaşlattı ve zaman kazandırdı; birliklerinin çoğu düzenli orduya katıldı.',
      body: 'Sorularda “Kuvâ-yı Millîye’nin önemi” sorulursa zaman kazandırmasını, halkı örgütlemesini ve düzenli orduya çekirdek olmasını hatırla.',
    },
    {
      title: 'Londra Konferansı’nı başarılı saymak',
      wrong: 'Londra Konferansı’nda Sevr kaldırıldı ve barış sağlandı.',
      right: 'Konferans olumlu bir sonuç vermedi; İtilaf Devletleri Sevr’i yalnız küçük değişikliklerle önerdi. Konferansın önemi, Büyük Millet Meclisi’nin ilk kez İtilaf Devletleri tarafından muhatap alınmasıdır.',
      body: '“Sonuç vermedi” ile “önemi yoktur” aynı şey değildir. Bir olay sonuçsuz kalsa da siyasi önemi olabilir.',
    },
    {
      title: 'Teşkilât-ı Esasiye’nin cumhuriyeti ilan ettiğini sanmak',
      wrong: '1921 Teşkilât-ı Esasiye Kanunu ile cumhuriyet ilan edildi.',
      right: '1921 metninde “cumhuriyet” sözcüğü yoktur. Kanun, egemenliğin millete ait olduğunu ve devletin Büyük Millet Meclisi tarafından yönetileceğini belirledi. Cumhuriyet 29 Ekim 1923’te ilan edildi.',
      body: 'Bu kanunun 1923’teki değişikliklerle birlikte yayımlanmış metinlerinde “cumhuriyet” ifadesi geçer. İlk hâli ile sonraki hâlini karıştırma.',
    },
    {
      title: 'Maarif Kongresi’ni savaş sonrasına yerleştirmek',
      wrong: 'Maarif Kongresi, Millî Mücadele kazanıldıktan sonra barış döneminde toplandı.',
      right: 'Maarif Kongresi Temmuz 1921’de, Kütahya–Eskişehir muharebelerinin sürdüğü günlerde Ankara’da toplandı.',
      body: 'Kazanımın vurgusu tam da budur: “Millî Mücadele’nin zor bir döneminde” yapılan bir eğitim kongresi.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Batı Cephesi’nde kararlar ve kişiler',
    lead: 'Kişileri verdikleri kararlarla tanı: Kimi orduyu kurdu, kimi karşı çıktı, kimi masada Meclis’i temsil etti.',
    intro: 'Kartlarda her kişinin görevini, kararını ve bu kararın sonucunu görürsün.',
    figures: [
      {
        name: 'Mustafa Kemal Paşa',
        period: '1920–1921 · Büyük Millet Meclisi Başkanı',
        position: 'Meclis Başkanı',
        contribution: 'Düzenli orduya geçişi destekledi; Çerkez Ethem’e karşı harekete geçilmesini emretti. Kütahya–Eskişehir’den sonra ordunun Sakarya’nın doğusuna çekilmesine karar verdi. Savaşın sürdüğü Temmuz 1921’de Maarif Kongresi’ni açtı.',
        connections: ['Düzenli ordu', 'Maarif Kongresi'],
        significance: 'Askerî, siyasi ve eğitim kararlarını birlikte düşünen liderdir.',
      },
      {
        name: 'İsmet Bey (İnönü)',
        period: '1920–1921 · Batı Cephesi Komutanı',
        position: 'Batı Cephesi Komutanı',
        contribution: '9 Kasım 1920’de Batı Cephesi’nin başına getirildi; düzenli ordunun kuruluşunda görev aldı ve iki İnönü muharebesini kazandı.',
        connections: ['I. İnönü', 'II. İnönü'],
        significance: 'Düzenli ordunun ilk zaferlerini kazanan komutandır. 1934’teki Soyadı Kanunu ile “İnönü” soyadını aldı.',
      },
      {
        name: 'Refet Bey (Bele)',
        period: '1920–1921 · Güney Cephesi Komutanı',
        position: 'Güney Cephesi Komutanı',
        contribution: '9 Kasım 1920’de Güney Cephesi’nin başına getirildi; Çerkez Ethem kuvvetlerine karşı harekâtta görev aldı. II. İnönü sırasında Dumlupınar’da Yunan ordusunun güney koluna karşı savundu.',
        connections: ['Çerkez Ethem ayaklanması', 'II. İnönü'],
        significance: 'Cephenin güney kanadını yöneten komutandır.',
      },
      {
        name: 'Çerkez Ethem',
        period: '1920–1921 · Kuvâ-yı Seyyare komutanı',
        position: 'Kuvâ-yı Millîye önderi',
        contribution: 'Batı’da Kuvâ-yı Millîye birlikleriyle önemli hizmetler verdi; ancak düzenli orduya katılmayı ve Meclis’in emirlerini reddetti. Ayaklandı, yenilince Yunanlıların safına geçti.',
        connections: ['Düzenli orduya geçiş'],
        significance: 'Meclis’e bağlı olmayan silahlı gücün ne kadar tehlikeli olabileceğini gösteren örnektir.',
      },
      {
        name: 'Bekir Sami Bey',
        period: '1921 · Hariciye (Dışişleri) Vekili',
        position: 'Londra Konferansı’nda Ankara heyetinin başkanı',
        contribution: 'Londra’da konferans dışında İngiltere, Fransa ve İtalya ile ayrı anlaşmalar imzaladı. Meclis hükümeti bu anlaşmaları kabul etmedi; Bekir Sami Bey görevinden çekildi.',
        connections: ['Londra Konferansı'],
        significance: 'Meclis’in Misakımillî’ye aykırı hiçbir anlaşmayı kabul etmeyeceğini gösteren olayın öznesidir.',
      },
      {
        name: 'Mehmet Âkif (Ersoy)',
        period: '1921 · Burdur milletvekili, şair',
        position: 'İstiklal Marşı’nın şairi',
        contribution: 'Açılan yarışmaya önce ödül olduğu için katılmak istemedi; ısrar üzerine yazdığı şiir 12 Mart 1921’de İstiklal Marşı olarak kabul edildi. Ödülü kabul etmeyip bağışladı.',
        connections: ['İstiklal Marşı'],
        significance: 'Millî Mücadele’nin inancını ve kararlılığını dizelere döken şairdir.',
      },
      {
        name: 'Hamdullah Suphi (Tanrıöver)',
        period: '1921 · Maarif Vekili',
        position: 'Maarif (Eğitim) Vekili',
        contribution: 'Maarif Kongresi’ni düzenledi; İstiklal Marşı’nı Meclis kürsüsünde okudu.',
        connections: ['Maarif Kongresi', 'İstiklal Marşı'],
        significance: 'Savaş yıllarında eğitim ve kültür işlerini yürüten vekildir.',
      },
    ],
    takeaway:
      'Bu derste bir zıtlığa dikkat et: Çerkez Ethem düzenli orduya karşı çıkıp düşman safına geçti; Bekir Sami Bey Meclis’in çizgisinin dışına çıkıp görevinden ayrıldı. İkisi de Meclis’in iradesinin üstünde bir güç ya da karar kabul edilmediğini gösterir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-londra`,
      title: 'Londra Konferansı: sonuç vermeyen ama önemli bir masa',
      lead: 'Londra Konferansı sonuçsuz kaldı. Peki neden önemlidir? Bu bölümde konferansın öncesini, masadaki teklifleri ve sonrasını göreceksin.',
      blocks: [
        {
          id: `${SLUG}-londra-anlatim`,
          type: 'prose',
          body:
            '**Neden toplandı?** I. İnönü’deki yenilgi, İtilaf Devletleri’ne Sevr’in zorla uygulanamayacağını gösterdi. Sevr’de bazı değişiklikler yaparak antlaşmayı Türklere kabul ettirmek istediler ve Londra’da bir konferans topladılar. İstanbul hükümetine, Ankara’dan da temsilci getirmesi söylendi. Mustafa Kemal ise Meclis’in temsilcilerinin doğrudan Meclis tarafından seçilmesi gerektiğini savundu; Ankara ayrı bir heyet gönderdi. Heyetin başında Hariciye Vekili Bekir Sami Bey vardı.\n\n' +
            '**Masada ne vardı?** Nutuk’a göre İtilaf Devletleri’nin önerisi, Sevr’in hükümlerinde küçük değişikliklerdi: jandarma sayısını biraz artırmak, Boğazlar bölgesini biraz küçültmek, bütçe üzerindeki denetimi biraz hafifletmek gibi. İzmir için ise Yunan askerinin kalacağı özel bir yönetim öneriliyordu. Bu öneriler Misakımillî ile bağdaşmıyordu.\n\n' +
            '**Sonuç:** Konferans Mart 1921’de olumlu bir sonuç vermeden dağıldı. Heyet daha dönüş yolundayken Yunan ordusu yeniden saldırdı ve II. İnönü Muharebesi başladı.\n\n' +
            '**Önemi:** İtilaf Devletleri, Sevr’i imzalayan İstanbul hükümetinin yanında Büyük Millet Meclisi’nin temsilcilerini de masaya çağırmak zorunda kaldı. Bu, Meclis’in fiilen muhatap alınması demekti. Ayrıca Ankara heyeti Misakımillî’yi Avrupa kamuoyuna duyurma imkânı buldu.\n\n' +
            '**Sonrası:** Bekir Sami Bey Londra’da konferans dışında İngiltere, Fransa ve İtalya ile ayrı anlaşmalar imzalamıştı. Bu anlaşmalar Anadolu’da bu devletlere ekonomik ayrıcalıklar tanıyordu. Meclis hükümeti bunları kabul etmedi ve Bekir Sami Bey görevinden çekildi.',
        },
        {
          id: `${SLUG}-londra-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Londra = sonuç yok, tanınma var',
          body: 'Londra Konferansı olumlu sonuç vermedi; ama İtilaf Devletleri Büyük Millet Meclisi’ni ilk kez fiilen muhatap aldı.',
        },
      ],
    },
    {
      id: `${SLUG}-maarif`,
      title: 'Cephe gerilerken eğitim kongresi: Maarif Kongresi',
      lead: 'İTA.8.3.3, Millî Mücadele’nin zor bir döneminde toplanan Maarif Kongresi’nden Atatürk’ün eğitime verdiği önemi çıkarmanı ister.',
      blocks: [
        {
          id: `${SLUG}-maarif-anlatim`,
          type: 'prose',
          body:
            '**Ne zaman ve nerede?** Maarif Kongresi Temmuz 1921’de Ankara’da toplandı. Kaynaklar kongrenin açılış günü için farklı tarihler verir; kesin olan, kongrenin Kütahya–Eskişehir muharebelerinin sürdüğü ve Türk ordusunun geri çekildiği günlere denk gelmesidir. Kongreyi Maarif Vekili Hamdullah Suphi Bey düzenledi; ülkenin işgal altında olmayan bölgelerinden öğretmenler ve eğitimciler katıldı.\n\n' +
            '**Mustafa Kemal ne yaptı?** Mustafa Kemal cepheden gelerek kongreyi açış konuşmasıyla başlattı. Bu konuşma onun eğitim üzerine yaptığı ilk konuşma olarak kabul edilir. Konuşmada şu noktaları vurguladı:\n\n' +
            '- Ülkenin bütün imkânları şu an düşmana karşı kullanılmak zorundadır; ama savaş günlerinde bile özenle hazırlanmış bir **millî eğitim programı** yapılmalıdır.\n' +
            '- O güne kadar izlenen eğitim yöntemleri milletin geri kalmasının en önemli sebeplerinden biridir.\n' +
            '- Yeni eğitim, eski dönemin boş inanışlarından ve Doğu’dan ya da Batı’dan gelen yabancı etkilerden uzak, **millî karaktere ve tarihe uygun** bir kültüre dayanmalıdır.\n' +
            '- Öğretmenlerin görevi milletin yaşamasıyla yakından ilgilidir.\n\n' +
            '**Neden önemli?** Ordunun geri çekildiği ve Ankara’nın tehlikeye girdiği günlerde bir eğitim kongresi toplamak, Mustafa Kemal’in bağımsızlığı yalnız askerî bir zafer olarak görmediğini gösterir. Ona göre kazanılacak bağımsızlığın sürmesi, **millî ve çağdaş** bir eğitimle yetişecek nesillere bağlıydı. Kongre, sonraki yıllardaki eğitim toplantılarının ve millî eğitim şûralarının ilk örneği olarak görülür.',
        },
        {
          id: `${SLUG}-maarif-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: Cephede savaş, Ankara’da maarif',
          body: 'Temmuz 1921: Kütahya–Eskişehir’de ordu geri çekilirken Ankara’da Maarif Kongresi toplandı. Mesaj: Bağımsızlık eğitimle kalıcı olur.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste dört birincil kaynak okuyacaksın: bir anayasa, bir antlaşma, bir telgraf ve bir konuşma. Sonra bir ikincil kaynağı değerlendireceksin.',
    intro:
      'Birincil kaynaklar olayların yaşandığı günlerde yazılmış metinlerdir. Her birinde önce eski sözcükleri çöz, sonra metnin ne söylediğini, en son da bu söylediğinden ne çıkarılabileceğini düşün.\n\n' +
      'İlk dört metin birebir alıntıdır. Beşinci metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Teşkilât-ı Esasiye Kanunu’nun ilk üç maddesi',
        kunye: 'Teşkilât-ı Esasiye Kanunu, Kanun no 85, kabul 20 Ocak 1921. Metin: Türkiye Büyük Millet Meclisi kanun arşivi (Ceride-i Resmiye’de yayımlandığı biçimiyle).',
        nitelik: 'Birebir alıntı (1921’deki ilk metinden).',
        metin:
          'BİRİNCİ MADDE — Hakimiyet bilâkaydüşart milletindir, idare usulü halkın mukadderatını bizzat ve bilfiil idare etmesi esasına müstenittir. İKİNCİ MADDE — İcra kudreti ve teşri salâhiyeti milletin yegâne ve hakikî mümessili olan Büyük Millet Meclisinde tecelli ve temerküz eder. ÜÇÜNCÜ MADDE — Türkiye Devleti Büyük Millet Meclisi tarafından idare olunur ve Hükümeti «Büyük Millet Meclisi Hükümeti» unvanını taşır.',
        soru: 'Bu üç madde egemenliğin kaynağı ve devletin yönetimi hakkında ne söylüyor? Metinde hangi sözcüğün geçmediğine de dikkat et.',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Hakimiyet”: egemenlik. “Bilâkaydüşart”: kayıtsız şartsız. “Mukadderat”: gelecek, kader. “Müstenit”: dayanan. “İcra kudreti”: yürütme gücü. “Teşri salâhiyeti”: yasama yetkisi. “Mümessil”: temsilci. “Tecelli ve temerküz eder”: ortaya çıkar ve toplanır.' },
          { title: '1. maddeyi yorumla', body: 'Egemenlik kayıtsız şartsız milletindir; halk kendi geleceğini kendisi yönetir.' },
          { title: '2. ve 3. maddeleri yorumla', body: 'Yasama ve yürütme gücü milletin tek gerçek temsilcisi olan Meclis’te toplanır; devleti Meclis yönetir ve hükümetin adı “Büyük Millet Meclisi Hükümeti”dir.' },
          { title: 'Olmayanı fark et', body: 'Metinde padişah ya da “cumhuriyet” sözcüğü geçmez. Egemenlik padişaha değil millete verilmiştir; ama devletin şekli henüz adlandırılmamıştır.' },
        ],
        cevap: 'Maddeler egemenliğin kayıtsız şartsız millete ait olduğunu, yasama ve yürütme gücünün Meclis’te toplandığını ve devleti Meclis’in yönettiğini söyler. Metinde padişahtan ve cumhuriyetten söz edilmez; egemenlik padişahtan alınıp millete verilmiş, devletin şekli ise sonraya bırakılmıştır.',
        cikarim: 'Bir belgede yazmayan şey de bilgi verir. 1921 anayasası millî egemenliği ilan etti ama cumhuriyeti henüz ilan etmedi. Cumhuriyete giden yolun ilk basamağı budur.',
      },
      {
        tur: 'birincil',
        baslik: 'Moskova Antlaşması’nın 1. maddesi',
        kunye: 'Türkiye–Sovyet Rusya Dostluk ve Kardeşlik Antlaşması (Moskova Antlaşması), 16 Mart 1921, Madde 1’in ilk bölümü. Metin: İsmail Soysal, Türkiye’nin Siyasal Antlaşmaları I (TTK, 1983); Vikikaynak.',
        nitelik: 'Birebir alıntı (günümüz Türkçesiyle yayımlanmış metinden).',
        metin:
          'Bağıtlı Taraflar, herhangi birine zorla kabul ettirilmek istenilen bir barış antlaşması ya da başka bir uluslararası bağıtı tanımamayı ilke olarak benimserler. Rusya Sovyetleri Sosyalist Federal Cumhuriyeti Hükûmeti, bugün Büyük Millet Meclisince temsil edilmekte olan Türkiye ulusal Hükûmeti tarafından tanınmamış Türkiye’ye ilişkin hiç bir uluslararası bağıtı tanımamayı kabul eder. İşbu Antlaşmada yazılı ‘Türkiye’ terimi ile 28 Ocak 1920 günü İstanbul’da toplanan Meclis-î Milli’nin kapsadığı topraklar anlaşılmaktadır.',
        soru: 'Bu madde Sevr ve Misakımillî açısından ne anlama gelir? “28 Ocak 1920’de İstanbul’da toplanan Meclis-i Millî” ifadesi neyi kastediyor olabilir?',
        adimlar: [
          { title: 'Sözcükleri çöz', body: '“Bağıtlı taraflar”: antlaşmayı imzalayan taraflar. “Bağıt”: antlaşma, sözleşme.' },
          { title: 'Sevr ile ilişkilendir', body: 'Sovyet Rusya, Büyük Millet Meclisi’nin tanımadığı hiçbir antlaşmayı tanımayacaktır. Meclis Sevr’i tanımıyordu; dolayısıyla Sovyet Rusya da Sevr’i tanımayacaktır.' },
          { title: 'Misakımillî ile ilişkilendir', body: 'Misakımillî, son Osmanlı Mebusan Meclisi tarafından 28 Ocak 1920’de kabul edilmişti. “Türkiye” bu belgenin kapsadığı topraklar olarak tanımlanıyor; yani Sovyet Rusya Misakımillî’nin çizdiği sınırları kabul ediyor.' },
          { title: 'Tanınmayı gör', body: 'Madde, Türkiye’nin hükûmetini “Büyük Millet Meclisince temsil edilmekte olan” hükûmet olarak anıyor. Bu, İstanbul hükümetinin değil Meclis’in muhatap alınması demektir.' },
        ],
        cevap: 'Madde, Sovyet Rusya’nın Sevr’i tanımayacağını, Misakımillî’nin kapsadığı toprakları “Türkiye” olarak kabul ettiğini ve Büyük Millet Meclisi’ni Türkiye’nin temsilcisi saydığını gösterir. “Meclis-i Millî” ifadesi, Misakımillî’yi kabul eden son Osmanlı Mebusan Meclisi’ni kastetmektedir.',
        cikarim: 'Bir antlaşmanın tanım maddesi, taraflardan birinin hangi sınırları kabul ettiğini gösterir. Moskova’da “Türkiye” kelimesinin Misakımillî’ye göre tanımlanması, Misakımillî’nin büyük bir devlet tarafından kabul edilmesi anlamına gelir.',
      },
      {
        tur: 'birincil',
        baslik: 'Mustafa Kemal’in İsmet Paşa’ya telgrafı',
        kunye: 'Mustafa Kemal’in Metristepe’deki Garp Cephesi Kumandanı İsmet Paşa’ya telgrafı, 1 Nisan 1921. Metin: Nutuk (1927), 11. bölüm; Vikikaynak.',
        nitelik: 'Birebir alıntı (telgrafın ilk üç cümlesi).',
        metin:
          'Bütün tarih-i âlemde, sizin İnönü meydan muharebelerinde deruhde ettiğiniz vazife kadar ağır bir vazife deruhde etmiş kumandanlar enderdir. Milletimizin istiklâl ve hayatı, dâhiyâne idâreniz altında şerefle vazifelerini gören kumanda ve silâh arkadaşlarınızın kalb ve hamiyetine büyük emniyetle istinâd ediyordu. Siz orada yalnız düşmanı değil milletin ma’kûs tâli’ini de yendiniz.',
        soru: '“Milletin makûs talihini de yendiniz” sözüyle Mustafa Kemal neyi anlatmak istiyor? Bu sözü önceki yılların olaylarıyla nasıl ilişkilendirirsin?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Tarih-i âlem”: dünya tarihi. “Deruhde etmek”: üstlenmek. “Ender”: az bulunan. “İstinat etmek”: dayanmak. “Hamiyet”: vatanseverlik, fedakârlık. “Makûs talih”: ters giden kader, kötü talih.' },
          { title: 'Söyleneni bul', body: 'Mustafa Kemal, İnönü’deki görevin dünya tarihinde az görülen ağırlıkta olduğunu ve milletin geleceğinin bu komutanlara dayandığını söylüyor.' },
          { title: 'Makûs talihi yorumla', body: 'Balkan Savaşları’ndan, Birinci Dünya Savaşı’ndan ve Mondros’tan beri Türk milleti arka arkaya toprak kaybetmiş, yenilgiler yaşamıştı. “Makûs talih” bu uzun yenilgiler dizisidir.' },
          { title: 'Sonucu çıkar', body: 'İnönü zaferleri, bu dizinin kırılmaya başladığını ve düzenli ordunun kazanabildiğini gösterdi. Bu yüzden zafer yalnız askerî değil, moral ve psikolojik bir dönüm noktasıdır.' },
        ],
        cevap: 'Mustafa Kemal, İnönü zaferlerinin yıllardır süren yenilgi ve toprak kaybı dizisini kırdığını anlatmak istiyor. Balkan Savaşları, Birinci Dünya Savaşı ve Mondros’tan sonra gelen bu zaferler, milletin kaderinin değişebileceğine olan inancı güçlendirdi.',
        cikarim: 'Bir liderin zafer mesajında kullandığı kelimeler, olayın o gün nasıl algılandığını gösterir. “Makûs talih” ifadesi, zaferin moral değerinin askerî değeri kadar büyük olduğunu anlatır.',
      },
      {
        tur: 'birincil',
        baslik: 'Maarif Kongresi’ni açış konuşmasından',
        kunye: 'Mustafa Kemal’in Maarif Kongresi’ni açış konuşması, Ankara, Temmuz 1921. Metin: Atatürk’ün Söylev ve Demeçleri II; Belleten ve Erdem dergilerindeki aktarımlar.',
        nitelik: 'Birebir alıntı. Aktaran yayınlar arasında birkaç sözcükte küçük yazım farkı vardır.',
        metin:
          'Millî bir terbiye programından bahsederken, eski devrin hurafatından ve evsâf-ı fıtriyemizle hiç de münasebeti olmayan yabancı fikirlerden, Şarktan ve Garptan gelebilen bilcümle tesirlerden tamamen uzak, seciye-i milliye ve tarihiyemizle mütenasip bir kültür kastediyorum. Çünkü dehâ-yı millîmizin inkişaf-ı tammı ancak böyle bir kültür ile temin olunabilir.',
        soru: 'Mustafa Kemal nasıl bir eğitim ve kültür istiyor? Bu konuşmanın Kütahya–Eskişehir muharebelerinin sürdüğü günlerde yapılması neyi gösterir?',
        adimlar: [
          { title: 'Eski sözcükleri çöz', body: '“Terbiye”: eğitim, yetiştirme. “Hurafat”: boş inanışlar. “Evsâf-ı fıtriye”: yaratılıştan gelen özellikler. “Şark ve Garp”: Doğu ve Batı. “Bilcümle tesirler”: bütün etkiler. “Seciye-i milliye”: millî karakter. “Mütenasip”: uygun. “Dehâ-yı millî”: milletin yeteneği. “İnkişaf-ı tam”: tam gelişme.' },
          { title: 'İsteneni bul', body: 'Boş inanışlardan ve bize uymayan yabancı etkilerden uzak, millî karaktere ve tarihe uygun bir kültür.' },
          { title: 'Gerekçeyi bul', body: 'Milletin yeteneklerinin tam gelişmesi ancak böyle bir kültürle sağlanabilir.' },
          { title: 'Zamanla ilişkilendir', body: 'Ordu geri çekilirken eğitim programının konuşulması, Mustafa Kemal’in eğitimi savaşın sonrasına ertelenecek bir iş olarak değil, bağımsızlığın bir parçası olarak gördüğünü gösterir.' },
        ],
        cevap: 'Mustafa Kemal boş inanışlardan ve yabancı etkilerden uzak, millî karaktere ve tarihe uygun, milletin yeteneklerini geliştirecek bir eğitim ve kültür istiyor. Konuşmanın savaşın en zor günlerinde yapılması, onun eğitimi bağımsızlığın kalıcı olmasının şartı olarak gördüğünü gösterir.',
        cikarim: 'Bir liderin öncelikleri, en zor zamanlarda neye vakit ayırdığından anlaşılır. Cephe gerilerken eğitimin konuşulması, eğitimin savaş kadar hayati görüldüğünü gösterir.',
      },
      {
        tur: 'ikincil',
        baslik: 'Düzenli orduya geçiş üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Kasım 1920’de Batı Cephesi yeniden düzenlendi ve Kuvâ-yı Millîye birlikleri düzenli orduya katıldı. Bu karar, Millî Mücadele’nin en isabetli kararlarından biriydi. Kuvâ-yı Millîye düzenli bir orduya karşı kazanamazdı; düzenli ordu olmasaydı İnönü zaferleri de olmazdı.',
        soru: 'Metindeki olguyu ve yorumları ayır. Son cümledeki yargı hakkında ne söylersin?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaylardan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguyu ayır', body: 'Batı Cephesi’nin Kasım 1920’de yeniden düzenlenmesi ve Kuvâ-yı Millîye birliklerinin düzenli orduya katılması bir olgudur.' },
          { title: 'Yorumları ayır', body: '“En isabetli kararlarından biri” ve “Kuvâ-yı Millîye kazanamazdı” ifadeleri yazarın değerlendirmesidir.' },
          { title: 'Son cümleyi değerlendir', body: '“Olmasaydı … olmazdı” biçimindeki cümleler, gerçekte yaşanmamış bir durumu anlatır; kanıtla kesin olarak gösterilemez. Güçlü bir tahmin olabilir ama olgu değildir. Ayrıca düzenli ordunun Kuvâ-yı Millîye’nin kazandırdığı zaman ve insan gücü üzerine kurulduğunu da hesaba katmak gerekir.' },
        ],
        cevap: 'Olgu: Batı Cephesi’nin yeniden düzenlenmesi ve Kuvâ-yı Millîye’nin düzenli orduya katılması. Yorumlar: kararın en isabetli kararlardan biri olduğu ve Kuvâ-yı Millîye’nin kazanamayacağı. Son cümle yaşanmamış bir durumu anlattığı için kanıtla kesinleştirilemez; bir tahmindir.',
        cikarim: '“Olmasaydı … olmazdı” cümlelerine dikkat et: Bunlar tarihte kanıtlanamayan varsayımlardır. İyi bir tarih okuru olguyu, yorumu ve varsayımı ayırır.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Düzenli orduya geçişin sebeplerini sırala',
      prompt: 'Kuvâ-yı Millîye’den düzenli orduya geçişin sebeplerini en az üç maddeyle açıkla.',
      steps: [
        { title: 'Askerî sebep', body: 'Düzenli Yunan ordusunun 1920 yazındaki ilerleyişi Kuvâ-yı Millîye ile durdurulamadı.' },
        { title: 'Komuta sebebi', body: 'Birlikler birbirinden bağımsızdı; bazı komutanlar Meclis’in emirlerine uymakta zorlanıyordu.' },
        { title: 'Deneyim', body: 'Gediz taarruzunun ağır kayıplarla sonuçlanması düzenli bir orduya duyulan ihtiyacı gösterdi.' },
      ],
      answer: 'Düzenli bir düşman ordusuna karşı yetersizlik, emir-komuta ve disiplin sorunu, Gediz taarruzunun gösterdiği ders.',
      takeaway: 'Sebep sorularında askerî, siyasi ve deneyime dayalı sebepleri ayrı ayrı düşün; tek bir sebeple yetinme.',
    },
    {
      title: 'I. İnönü’nün sonuçlarını sınıflandır',
      prompt: 'I. İnönü zaferinden sonraki gelişmeleri “iç gelişme” ve “dış gelişme” olarak ikiye ayır: Teşkilât-ı Esasiye, Londra Konferansı, Moskova Antlaşması, İstiklal Marşı, Afganistan ile antlaşma.',
      steps: [
        { title: 'İç gelişmeler', body: 'Teşkilât-ı Esasiye Kanunu (anayasa) ve İstiklal Marşı Meclis’in kendi içinde aldığı kararlardır.' },
        { title: 'Dış gelişmeler', body: 'Londra Konferansı, Afganistan ile antlaşma ve Moskova Antlaşması başka devletlerle ilişkilerdir.' },
      ],
      answer: 'İç: Teşkilât-ı Esasiye, İstiklal Marşı. Dış: Londra Konferansı, Afganistan ile antlaşma, Moskova Antlaşması.',
      takeaway: 'Bu olayların hepsi aynı üç ayın içinde gerçekleşti ama hepsini doğrudan I. İnönü’ye bağlama. Doğru ifade: “I. İnönü’den sonraki dönemde” gerçekleşti.',
    },
    {
      title: 'Maarif Kongresi’nden çıkarım yap',
      prompt: '“Ordunun Sakarya’ya doğru çekildiği günlerde Ankara’da bir eğitim kongresi toplandı.” Bu bilgiden Mustafa Kemal’in eğitime bakışı hakkında hangi çıkarım yapılabilir?',
      steps: [
        { title: 'Durumu tespit et', body: 'Ülke savaşın en zor günlerini yaşıyor; ordu yenilmiş ve geri çekiliyor.' },
        { title: 'Kararı tespit et', body: 'Buna rağmen eğitim kongresi ertelenmiyor; Mustafa Kemal cepheden gelip açış konuşmasını yapıyor.' },
        { title: 'Çıkarımı yap', body: 'Mustafa Kemal eğitimi savaştan sonraya bırakılacak bir iş olarak değil, bağımsızlığın bir parçası ve geleceğin güvencesi olarak görüyor.' },
      ],
      answer: 'Mustafa Kemal eğitime savaş kadar önem veriyor; millî ve çağdaş bir eğitimi bağımsızlığın kalıcı olmasının şartı olarak görüyor.',
      takeaway: '“Zor bir dönemde yapılan” bir işten çıkarım isteyen sorularda, o işe verilen önemi ve öncelik sırasını düşün.',
    },
  ],
  questionClue: {
    concept: 'Soruda hangi muharebeden ya da gelişmeden söz edildiğini nasıl anlarım?',
    statement: 'Soru bir tarih, bir komutan, bir sonuç ya da bir belge verip hangi olaydan söz edildiğini sorabilir.',
    clues: [
      '“Düzenli ordunun ilk zaferi”, “Teşkilât-ı Esasiye’nin kabulü”, “Londra’ya davet” → I. İnönü ve sonrası',
      '“Makûs talih”, “Metristepe” → II. İnönü',
      '“Sakarya’nın doğusuna çekilme”, “ağır yenilgi” → Kütahya–Eskişehir',
      '“Egemenlik kayıtsız şartsız milletindir” → Teşkilât-ı Esasiye (1921)',
      '“Sevr’i tanımama”, “Batum’un Gürcistan’a bırakılması” → Moskova Antlaşması',
      '“Zor bir dönemde eğitim”, “millî eğitim programı” → Maarif Kongresi',
    ],
    reasoning: 'Önce olayın cephede mi, Meclis’te mi, yoksa masada mı geçtiğini bul. Sonra tarihine ve sonucuna bak.',
    boundary: 'Dikkat: “Sakarya” adı geçiyor diye soruyu Sakarya Meydan Muharebesi sanma. Sakarya’nın doğusuna çekilme, Kütahya–Eskişehir’in sonucudur; savaşın kendisi bir sonraki dersin konusudur.',
  },
  examShape: {
    title: 'Bu kazanımlar hangi soru biçimlerine uygun?',
    body: 'Bu kazanımlar bir kronoloji, bir harita, bir belge ya da bir liderin konuşmasından alınmış bir bölüm verilerek sorulabilir. Aşağıdaki kalıplar kazanımlarla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Düzenli orduya geçişin sebeplerini belirleme',
      'Muharebeleri kronolojik sıraya koyma ya da sonuçlarıyla eşleştirme',
      'Belge maddesinden (Teşkilât-ı Esasiye, Moskova) çıkarım yapma',
      'Londra Konferansı’nın önemini “sonuç” ile karıştırmadan açıklama',
      'Maarif Kongresi’nden Atatürk’ün eğitime verdiği önemi çıkarma',
    ],
  },
  checkpoints: [
    {
      prompt: 'Çerkez Ethem’in düzenli orduya katılmayı reddetmesi Meclis için neden ciddi bir tehlikeydi?',
      hint: 'Bir ülkede Meclis’e bağlı olmayan silahlı güçler varsa ne olur?',
      answer: 'Meclis’e bağlı olmayan silahlı bir güç, hem cephede ortak hareketi bozar hem de Meclis’in otoritesini tartışmalı hâle getirir. Ethem’in sonunda düşman safına geçmesi, bu tehlikenin ne kadar büyük olabileceğini gösterdi.',
    },
    {
      prompt: 'Londra Konferansı olumlu bir sonuç vermediği hâlde neden Büyük Millet Meclisi için bir kazanç sayılır?',
      answer: 'Çünkü İtilaf Devletleri, Sevr’i imzalayan İstanbul hükümetinin yanında Meclis’in temsilcilerini de masaya çağırmak zorunda kaldı. Bu, Meclis’in fiilen muhatap alınmasıydı. Ayrıca Misakımillî Avrupa’da duyuruldu.',
    },
    {
      prompt: 'Kütahya–Eskişehir’den sonra ordunun Sakarya’nın doğusuna çekilmesi neden yalnızca bir yenilgi olarak görülmemelidir?',
      answer: 'Çünkü geri çekilme, ordunun dağılmadan korunmasını ve yeniden toplanıp hazırlanması için zaman kazanılmasını sağladı. Düşman da ikmal merkezlerinden uzaklaşmak zorunda kaldı. Bu karar Sakarya’daki savunmanın zeminini hazırladı.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımlarda neyi ölçüyor?',
    body:
      'İTA.8.3.2 bir “kavrar” kazanımıdır: Batı Cephesi’ndeki askerî ve siyasi gelişmeleri birlikte anlamanı ister. İTA.8.3.3 de bir “kavrar” kazanımıdır ve Maarif Kongresi’nin zor bir dönemde toplanmasından Atatürk’ün millî ve çağdaş eğitime verdiği önemi çıkarmanı bekler. Bu kazanımlara dayanan bir soru, kronolojiyi ya da bir belgeyi verip çıkarım isteyebilir.',
    measures: [
      'Düzenli orduya geçişin sebeplerini ve sürecini açıklama',
      'I. İnönü, II. İnönü ve Kütahya–Eskişehir muharebelerini ayırt etme',
      'Teşkilât-ı Esasiye, Londra, Afganistan, İstiklal Marşı ve Moskova’nın önemini açıklama',
      'Maarif Kongresi’nden Atatürk’ün eğitime verdiği önemi çıkarma',
    ],
  },
  simulation: {
    title: 'Mini LGS: Savaşın ortasında bir kongre',
    passage:
      'Temmuz 1921’de Türk ordusu Kütahya–Eskişehir muharebelerinde yenilmiş ve Sakarya Nehri’nin doğusuna çekilmeye başlamıştı. Tam bu günlerde Ankara’da ülkenin dört bir yanından gelen öğretmenlerin katıldığı Maarif Kongresi toplandı. Mustafa Kemal cepheden gelerek kongreyi açtı ve konuşmasında millî karaktere ve tarihe uygun bir eğitim programı hazırlanması gerektiğini vurguladı.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Mustafa Kemal, eğitimi bağımsızlık mücadelesinin ertelenemeyecek bir parçası olarak görmüştür.', explanation: 'Doğru. Ordunun geri çekildiği günlerde bile eğitim kongresinin toplanması ve Mustafa Kemal’in cepheden gelip açış konuşmasını yapması, eğitime verdiği önemi gösterir.' },
      { text: 'Maarif Kongresi’nde alınan kararlar Sakarya Meydan Muharebesi’nin kazanılmasını sağlamıştır.', explanation: 'Metinde kongre kararlarıyla savaşın sonucu arasında bir bağ kurulmaz. Bu bilgi metnin ötesindedir.' },
      { text: 'Kütahya–Eskişehir muharebelerinde öğretmenler de cephede savaşmıştır.', explanation: 'Metinde öğretmenlerin cephede savaştığına dair bilgi yoktur; kongreye katıldıkları söylenir.' },
      { text: 'Maarif Kongresi’nden sonra yabancı dil öğretimi yasaklanmıştır.', explanation: 'Metinde böyle bir bilgi yoktur. “Yabancı etkilerden uzak” kültür, yabancı dilin yasaklanması anlamına gelmez.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. Metindeki iki bilgiyi birleştir: ordunun geri çekildiği zor günler ve buna rağmen toplanan eğitim kongresi.',
    critical_point: 'İkinci seçenek çekicidir, çünkü iki önemli olayı birbirine bağlar. Ama metinde kongrenin savaşın sonucunu etkilediğine dair hiçbir bilgi yoktur.',
    takeaway: 'Çıkarım sorularında metindeki olgudan bir adım ileri git ama metinde olmayan bir sebep-sonuç ilişkisi kurma.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Batı Cephesi 1920–1921',
    range: '1920–1921',
    body:
      '1920 yazında Yunan ordusu Bursa’ya ve Uşak’a kadar ilerledi; Kuvâ-yı Millîye bu ilerleyişi durduramadı. Gediz taarruzunun ağır kayıplarla sonuçlanmasından sonra 9 Kasım 1920’de Batı Cephesi yeniden düzenlendi ve düzenli orduya geçildi; buna karşı çıkan Çerkez Ethem ayaklandı ve Yunanlılara katıldı. Düzenli ordu Ocak 1921’de I. İnönü’de ilk zaferini kazandı. Bunu Teşkilât-ı Esasiye Kanunu (20 Ocak 1921), sonuçsuz kalan ama Meclis’in muhatap alındığı Londra Konferansı, Afganistan ile antlaşma (1 Mart), İstiklal Marşı’nın kabulü (12 Mart) ve Moskova Antlaşması (16 Mart) izledi. II. İnönü’de (23 Mart–1 Nisan 1921) Yunan ordusu yeniden yenildi. Temmuz 1921’de Kütahya–Eskişehir’de yenilen ordu Sakarya’nın doğusuna çekildi; aynı günlerde Ankara’da Maarif Kongresi toplandı.',
    turning_points: [
      '9 Kasım 1920 · Düzenli orduya geçiş',
      'Ocak 1921 · I. İnönü',
      '20 Ocak 1921 · Teşkilât-ı Esasiye',
      '16 Mart 1921 · Moskova Antlaşması',
      '23 Mart–1 Nisan 1921 · II. İnönü',
      'Temmuz 1921 · Kütahya–Eskişehir ve Maarif Kongresi',
    ],
  },
  summary: [
    '**Düzenli ordu:** Kuvâ-yı Millîye düşmanı yavaşlattı ama durduramadı; 9 Kasım 1920’de Batı Cephesi yeniden düzenlendi. Çerkez Ethem karşı çıkıp Yunanlılara katıldı.',
    '**I. İnönü (Ocak 1921):** Düzenli ordunun ilk zaferi. Ardından Teşkilât-ı Esasiye (egemenlik millete ait), Londra Konferansı (sonuç yok, tanınma var), Afganistan antlaşması, İstiklal Marşı ve Moskova Antlaşması (Sovyet Rusya Sevr’i tanımadı).',
    '**II. İnönü (23 Mart–1 Nisan 1921):** Yunan ordusu yeniden yenildi; Mustafa Kemal: “milletin makûs talihini de yendiniz.”',
    '**Kütahya–Eskişehir (Temmuz 1921):** Türk ordusu yenildi ve Sakarya’nın doğusuna çekildi; ordu korunarak zaman kazanıldı.',
    '**Maarif Kongresi (Temmuz 1921):** Savaşın en zor günlerinde Ankara’da toplandı; Mustafa Kemal millî karaktere ve tarihe uygun bir eğitim programı istedi.',
  ],
  quizzes: [
    {
      question: 'Düzenli ordunun Yunan ordusuna karşı kazandığı ilk zafer hangisidir?',
      options: ['I. İnönü Muharebesi', 'Gediz Taarruzu', 'Kütahya–Eskişehir Muharebeleri', 'Sakarya Meydan Muharebesi'],
      answer_index: 0,
      explanation: 'I. İnönü (Ocak 1921), düzenli ordunun ilk zaferidir. Gediz taarruzu ağır kayıplarla sonuçlandı; Kütahya–Eskişehir’de ise Türk ordusu yenildi.',
    },
    {
      question: '“Hakimiyet bilâkaydüşart milletindir” ifadesi ilk kez hangi belgede yer almıştır?',
      options: ['Teşkilât-ı Esasiye Kanunu (1921)', 'Moskova Antlaşması', 'Misakımillî', 'Amasya Genelgesi'],
      answer_index: 0,
      explanation: 'Bu ifade 20 Ocak 1921’de kabul edilen Teşkilât-ı Esasiye Kanunu’nun birinci maddesidir.',
    },
    {
      question: 'Londra Konferansı ile ilgili aşağıdakilerden hangisi doğrudur?',
      options: ['İtilaf Devletleri Büyük Millet Meclisi’nin temsilcilerini de masaya çağırmıştır.', 'Konferansta Sevr Antlaşması tamamen kaldırılmıştır.', 'Konferanstan sonra Yunanlılar Anadolu’dan çekilmiştir.', 'Konferansta Türkiye’nin doğu sınırı kesinleşmiştir.'],
      answer_index: 0,
      explanation: 'Konferans sonuç vermedi; Sevr kaldırılmadı ve Yunan saldırısı hemen ardından yeniden başladı. Önemi, Meclis’in fiilen muhatap alınmasıdır.',
    },
    {
      question: 'Kütahya–Eskişehir muharebelerinden sonra Türk ordusu nereye çekilmiştir?',
      options: ['Sakarya Nehri’nin doğusuna', 'İzmir’e', 'Bursa’ya', 'Afyon’un batısına'],
      answer_index: 0,
      explanation: 'Mustafa Kemal ordunun Sakarya Nehri’nin doğusuna çekilmesine karar verdi. Bir sonraki büyük savaş Sakarya’da yapıldı.',
    },
    {
      question: 'Maarif Kongresi’nin Kütahya–Eskişehir muharebelerinin sürdüğü günlerde toplanması en çok neyi gösterir?',
      options: ['Eğitime savaş kadar önem verildiğini', 'Savaşın kazanıldığını', 'Öğretmenlerin cepheye gönderildiğini', 'Meclis’in Ankara’dan taşındığını'],
      answer_index: 0,
      explanation: 'Savaşın en zor günlerinde bir eğitim kongresi toplanması, Mustafa Kemal’in eğitimi bağımsızlığın kalıcı olmasının şartı olarak gördüğünü gösterir.',
    },
  ],
  next: ['Tekalif-i Millîye, Sakarya ve Büyük Taarruz', 'Lozan Antlaşması'],
})

export default lesson
