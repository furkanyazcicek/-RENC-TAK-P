import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 },
  { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 },
  { x: 768, y: 512, width: 768, height: 512 },
]

const markerPositions = [
  { x: 70, y: 78, targetX: 365, targetY: 280 },
  { x: 845, y: 78, targetX: 1160, targetY: 280 },
  { x: 70, y: 946, targetX: 365, targetY: 750 },
  { x: 845, y: 946, targetX: 1160, targetY: 750 },
]

function Plate({ src, alt, items, activeRegion }) {
  const regions = items.map((item, index) => ({
    ...item,
    shape: zones[index],
    zoom: { x: index % 2 ? 75 : 25, y: index < 2 ? 25 : 75, scale: 1.45 },
  }))
  const markers = items.map((item, index) => ({
    key: item.key,
    title: item.marker,
    width: item.width ?? 270,
    ...markerPositions[index],
  }))
  return (
    <InteractiveIllustration
      src={`/lesson-assets/endokrin-sistemi/${src}.jpg`}
      srcSet={`/lesson-assets/endokrin-sistemi/${src}-900.jpg 900w, /lesson-assets/endokrin-sistemi/${src}.jpg 1536w`}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      markers={markers}
    />
  )
}

export function EndocrineMap({ activeRegion = null }) {
  const items = [
    { key: 'hipofiz', marker: 'Hipotalamus · hipofiz', width: 325, detail: { src: '/lesson-assets/endokrin-sistemi/details/hipofiz-anatomi.jpg', title: 'İki farklı hipofiz yolu', alt: 'Hipotalamus, ön hipofiz portal damarları ve arka hipofiz akson bağlantısı.', note: 'Ön hipofiz, hipotalamustan portal damarlarla gelen düzenleyici hormonlara yanıt verir. Arka hipofiz ise hipotalamusta üretilen ADH ve oksitosini akson uçlarından kana verir.' } },
    { key: 'tiroit', marker: 'Tiroit · paratiroit', width: 300, detail: { src: '/lesson-assets/endokrin-sistemi/details/tiroit-paratiroit.jpg', title: 'Metabolizma ve kalsiyum', alt: 'Tiroit folikülleri ile paratiroit bezlerinin hedef organ bağlantıları.', note: 'Tiroit hormonları metabolizma hızını geniş dokularda etkiler. Paratiroit bezleri kan Ca²⁺ düzeyini izler; PTH kemik, böbrek ve bağırsak üzerinden kan kalsiyumunu yükseltir.' } },
    { key: 'adrenal', marker: 'Böbreküstü bezi', width: 285, detail: { src: '/lesson-assets/endokrin-sistemi/details/adrenal-anatomi.jpg', title: 'Korteks ve öz bölgesi', alt: 'Böbreküstü bezinin korteks ve öz kısmını gösteren kesit.', note: 'Korteks aldosteron ve kortizol gibi hormonları; öz bölgesi sempatik uyarıyla adrenalin/noradrenalin salgılar. Aynı bezde olsalar da kaynak ve kontrol yolları farklıdır.' } },
    { key: 'pankreas', marker: 'Pankreas · eşey bezleri', width: 350, detail: { src: '/lesson-assets/endokrin-sistemi/details/pankreas-adacik.jpg', title: 'Endokrin pankreas', alt: 'Pankreas adacığındaki alfa ve beta hücrelerinin hedef dokularla bağlantısı.', note: 'Beta hücreleri yükselen kan glikozunda insülin, alfa hücreleri düşen glikozda glukagon salgılar. Pankreasın sindirim enzimi üreten ekzokrin dokusu bu endokrin adacıklardan ayrıdır.' } },
  ]
  return <Plate src="endokrin-harita-v1" alt="İnsan endokrin bezlerinin vücuttaki konum ve hedeflerini gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function HormoneCommunication({ activeRegion = null }) {
  const items = [
    { key: 'salgi', marker: 'Üretim · kana salgı', width: 310, detail: { src: '/lesson-assets/endokrin-sistemi/details/salgi-kana.jpg', title: 'Değişkenden hormona', alt: 'İç ortam değişikliğinin endokrin hücrede hormon salgısını başlatması.', note: 'Endokrin hücre doğrudan bir iç ortam değişkenini ya da başka bir hormonun sinyalini algılar. Hormon kanalsız bezden doku sıvısına, oradan yoğun kılcal damarlara geçer.' } },
    { key: 'hedef', marker: 'Hedef hücre seçiciliği', width: 330, detail: { src: '/lesson-assets/endokrin-sistemi/details/hedef-reseptor.jpg', title: 'Kanda herkes, yanıtta seçili hücre', alt: 'Aynı hormonun yalnız uygun reseptör taşıyan hedef hücreleri etkilemesi.', note: 'Hormon kanla birçok dokuya ulaşabilir; fakat yalnız uygun reseptörü taşıyan hücre yanıt üretir. Hedef seçiciliğini hormonun gittiği yer değil, reseptör belirler.' } },
    { key: 'geri-bildirim', marker: 'Geri bildirim', width: 255, detail: { src: '/lesson-assets/endokrin-sistemi/details/geri-bildirim.jpg', title: 'Negatif ve pozitif geri bildirim', alt: 'Negatif geri bildirimle dengeye dönüş ve pozitif geri bildirimle güçlenme.', note: 'Negatif geri bildirim başlangıç değişimini azaltıp sistemi çalışma aralığına döndürür. Pozitif geri bildirim ise doğumda oksitosin gibi belirli bir sonlanma noktasına kadar yanıtı büyütür.' } },
    { key: 'karsilastirma', marker: 'Sinirsel · hormonal', width: 305, detail: { src: '/lesson-assets/endokrin-sistemi/details/sinir-endokrin.jpg', title: 'İki koordinasyon yolu', alt: 'Hızlı hedefli sinirsel ileti ile kanla yayılan hormonal ileti karşılaştırması.', note: 'Sinirsel ileti akson ve sinaps boyunca hızlı, hedefli ve çoğu kez kısa sürelidir. Hormonal ileti kanla yayılır; başlangıcı daha yavaş olabilir, reseptörlü çok sayıda hedefte daha uzun etkiler oluşturabilir.' } },
  ]
  return <Plate src="hormon-iletisimi-v1" alt="Hormon üretimi, hedef seçiciliği, geri bildirim ve sinirsel-hormonal ileti karşılaştırması." items={items} activeRegion={activeRegion} />
}

export function HypothalamusPituitary({ activeRegion = null }) {
  const items = [
    { key: 'tiroit-ekseni', marker: 'Tiroit ekseni', width: 240, detail: { src: '/lesson-assets/endokrin-sistemi/details/hpt-ekseni.jpg', title: 'Hipotalamus–hipofiz–tiroit ekseni', alt: 'Hipotalamus, ön hipofiz ve tiroit arasındaki uyarma ve geri bildirim yolları.', note: 'Hipotalamus TRH ile ön hipofizi, ön hipofiz TSH ile tiroiti uyarır. Artan tiroit hormonları hem hipofizi hem hipotalamusu baskılayarak negatif geri bildirim kurar.' } },
    { key: 'adrenal-ekseni', marker: 'Adrenal eksen', width: 245, detail: { src: '/lesson-assets/endokrin-sistemi/details/hpa-ekseni.jpg', title: 'Uzun süreli stres ekseni', alt: 'Hipotalamus, ön hipofiz ve adrenal korteksin kortizol yolunu gösteren devre.', note: 'CRH → ACTH → adrenal korteks → kortizol sırası uzun süreli stres yanıtında çalışır. Kortizol yakıt erişimini artırırken yüksek düzeyleri üst merkezleri geri bildirimle baskılar.' } },
    { key: 'buyume', marker: 'Büyüme hormonu', width: 285, detail: { src: '/lesson-assets/endokrin-sistemi/details/buyume-hormonu.jpg', title: 'GH ve büyüme dokuları', alt: 'Büyüme hormonunun karaciğer, kemik büyüme plağı ve kasla bağlantısı.', note: 'GH karaciğer aracılı büyüme sinyallerini ve bazı dokularda doğrudan metabolik etkileri destekler. Çocuklukta fazlalık devlik, eksiklik orantılı cücelik; erişkinde fazlalık akromegali oluşturabilir.' } },
    { key: 'arka-hipofiz', marker: 'ADH · oksitosin', width: 285, detail: { src: '/lesson-assets/endokrin-sistemi/details/arka-hipofiz.jpg', title: 'Arka hipofiz salgılamaz, depolar', alt: 'Hipotalamik aksonların arka hipofizden ADH ve oksitosin salması.', note: 'ADH ve oksitosin hipotalamik nöronlarda üretilir, aksonlarla arka hipofize taşınır ve buradan kana salınır. Bu yüzden arka hipofiz sentez merkezi değil, nörosekresyon çıkışıdır.' } },
  ]
  return <Plate src="hipotalamus-hipofiz-v1" alt="Hipotalamus ve hipofizin tiroit, adrenal, büyüme, su dengesi ve üreme hedefleriyle bağlantısı." items={items} activeRegion={activeRegion} />
}

export function EndocrineHomeostasis({ activeRegion = null }) {
  const items = [
    { key: 'glikoz', marker: 'Glikoz dengesi', width: 255, detail: { src: '/lesson-assets/endokrin-sistemi/details/glikoz-dengesi.jpg', title: 'İnsülin ve glukagon', alt: 'Tokluk ve açlıkta kan glikozunun pankreas hormonlarıyla dengelenmesi.', note: 'Toklukta insülin hücre alımını ve glikojen/yağ depolanmasını artırarak kan glikozunu düşürür. Açlıkta glukagon özellikle karaciğerde glikojen yıkımı ve glikoz çıkışını artırır.' } },
    { key: 'kalsiyum', marker: 'Kalsiyum dengesi', width: 285, detail: { src: '/lesson-assets/endokrin-sistemi/details/kalsiyum-dengesi.jpg', title: 'PTH ve kalsitonin', alt: 'Kemik, böbrek ve bağırsak arasında kan kalsiyum dengesini gösteren devre.', note: 'Düşük kan Ca²⁺ düzeyi PTH’yi artırır; böbrekten geri emilim, D vitamini aracılı bağırsak emilimi ve kemikten kana geçiş desteklenir. Kalsitonin yüksek Ca²⁺ durumunda ters yönde katkı verir.' } },
    { key: 'su-sodyum', marker: 'Su · sodyum dengesi', width: 310, detail: { src: '/lesson-assets/endokrin-sistemi/details/su-sodyum-dengesi.jpg', title: 'ADH ve aldosteron aynı değildir', alt: 'Nefronda ADH ile su, aldosteronla sodyum geri emilimini gösteren sahne.', note: 'ADH toplayıcı kanalların su geçirgenliğini artırır ve idrarı yoğunlaştırır. Aldosteron distal nefronda Na⁺ geri emilimini artırır; su ozmotik olarak izler. Uyarıları ve doğrudan hedefleri farklıdır.' } },
    { key: 'stres', marker: 'Akut stres yanıtı', width: 285, detail: { src: '/lesson-assets/endokrin-sistemi/details/akut-stres.jpg', title: 'Savaş ya da kaç', alt: 'Sempatik sinirler ile adrenal özün kalp, bronş, karaciğer ve kasa etkileri.', note: 'Tehditte sempatik sistem adrenal özü uyarır; adrenalin kalp debisi, hava yolu açıklığı ve yakıt erişimini artırır. Sinir ve endokrin sistem aynı homeostatik hedef için eş güdüm kurar.' } },
  ]
  return <Plate src="homeostazi-devreleri-v1" alt="Kan glikozu, kalsiyum, su-sodyum ve stres homeostazisini gösteren dört devre." items={items} activeRegion={activeRegion} />
}

export function EndocrineCases({ activeRegion = null }) {
  const items = [
    { key: 'tiroit-klinik', marker: 'Tiroit geri bildirimi', width: 305, detail: { src: '/lesson-assets/endokrin-sistemi/details/tiroit-klinik.jpg', title: 'Birincil mi, merkezî mi?', alt: 'Tiroit hormonu fazlalığı ve eksikliğini geri bildirim ekseniyle karşılaştıran vaka sahnesi.', note: 'Tiroit hormonu düşükken TSH yüksekse tiroit yanıt veremiyor olabilir; ikisi de düşükse hipofiz/hipotalamus düzeyi düşünülür. Hormon değerlerini tek tek değil eksen ilişkisiyle oku.' } },
    { key: 'adrenal-zon', marker: 'Adrenal iş bölümü', width: 290, detail: { src: '/lesson-assets/endokrin-sistemi/details/adrenal-zonlar.jpg', title: 'Aldosteron, kortizol, adrenalin', alt: 'Adrenal korteks katmanları ile öz bölgesinin farklı hedeflerini gösteren kesit.', note: 'Aldosteron böbrekte Na⁺ dengesini, kortizol metabolizma ve stres uyumunu, adrenal öz hormonları akut savaş-kaç yanıtını etkiler. Korteks ve öz bölgesinin kontrolü aynı değildir.' } },
    { key: 'istah', marker: 'Açlık · tokluk', width: 255, detail: { src: '/lesson-assets/endokrin-sistemi/details/istah-enerji.jpg', title: 'Mide, yağ dokusu ve bağırsak da sinyal verir', alt: 'Ghrelin, leptin ve bağırsak tokluk sinyallerinin hipotalamusta bütünleşmesi.', note: 'Boş mide ghrelinle açlık sinyalini güçlendirebilir; yağ dokusu leptinle enerji deposu hakkında bilgi verir; yemek sonrası bağırsak sinyalleri tokluğu destekler. Hipotalamus bu verileri bütünleştirir.' } },
    { key: 'vaka', marker: 'Fazlalık · eksiklik', width: 295, detail: { src: '/lesson-assets/endokrin-sistemi/details/fazlalik-eksiklik.jpg', title: 'Belirtiden mekanizmaya', alt: 'GH, ADH, insülin ve tiroit hormonlarının fazlalık ve eksiklik sonuçlarını karşılaştıran sahne.', note: 'Çok seyrek ve açık idrar ADH etkisinin azlığını; sürekli yüksek glikoz insülin etkisinin yetersizliğini; büyüme ve metabolizma değişimleri GH veya tiroit eksenlerini düşündürür. Belirtiyi hedef organla eşleştir.' } },
  ]
  return <Plate src="klinik-endokrin-v1" alt="Tiroit, adrenal, açlık-tokluk ve hormon fazlalık-eksiklik vakalarını gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}
