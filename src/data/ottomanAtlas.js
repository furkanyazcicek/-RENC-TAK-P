/**
 * Osmanlı Tarih Atlası — örnek içerik şeması.
 *
 * Prototipteki bütün içerik bu dosyadan beslenir. Yeni bir dönem eklemek için
 * `periods`, yeni bir şehir/olay eklemek için `mapItems` dizisine kayıt eklemek
 * yeterlidir. `lat` ve `lng` değerleri gerçek dünya koordinatlarıdır.
 */

export const atlasPeriods = [
  {
    year: 1453,
    shortLabel: 'Fetih',
    era: 'Yükselme Dönemi',
    ruler: 'Fatih Sultan Mehmet',
    reign: '1444–1446 · 1451–1481',
    capital: 'Edirne → İstanbul',
    summary: 'İstanbul’un fethiyle Osmanlı, Balkanlar ile Anadolu arasındaki siyasi bütünlüğünü güçlendirdi.',
    focus: ['İstanbul’un Fethi', 'Bizans’ın sona ermesi', 'Başkent değişimi'],
    rivals: ['Bizans', 'Venedik', 'Ceneviz'],
    territory: 'territory-1453',
    examNote: 'Fetih; Orta Çağ’ın sonu, merkezî otoritenin güçlenmesi ve boğaz denetimi başlıklarıyla birlikte düşünülür.',
  },
  {
    year: 1526,
    shortLabel: 'Mohaç',
    era: 'Yükselme Dönemi',
    ruler: 'Kanuni Sultan Süleyman',
    reign: '1520–1566',
    capital: 'İstanbul',
    summary: 'Osmanlı’nın Orta Avrupa siyasetinde belirleyici hâle geldiği, doğu ve batı cephelerinin birlikte yönetildiği dönem.',
    focus: ['Mohaç Meydan Muharebesi', 'Macaristan’da güç dengesi', 'Orta Avrupa yolu'],
    rivals: ['Habsburglar', 'Safeviler', 'Venedik'],
    territory: 'territory-1526',
    examNote: 'Mohaç, Macar siyasi düzeninin çözülmesi ve Osmanlı–Avusturya mücadelesinin belirginleşmesiyle ilişkilendirilir.',
  },
  {
    year: 1566,
    shortLabel: 'Zirve',
    era: 'Yükselme Dönemi',
    ruler: 'Kanuni Sultan Süleyman',
    reign: '1520–1566',
    capital: 'İstanbul',
    summary: 'Üç kıtaya yayılan siyasi etkinin ve uzun Kanuni döneminin son yılı.',
    focus: ['Zigetvar Seferi', 'Kanuni’nin ölümü', 'II. Selim’in tahta çıkışı'],
    rivals: ['Habsburglar', 'Safeviler', 'Venedik'],
    territory: 'territory-1566',
    examNote: '1566, Kanuni döneminin sonu ve yönetimde yeni bir evrenin başlangıcı olarak kronolojide ayırt edilir.',
  },
  {
    year: 1606,
    shortLabel: 'Zitvatorok',
    era: 'Duraklama Dönemi',
    ruler: 'I. Ahmed',
    reign: '1603–1617',
    capital: 'İstanbul',
    summary: 'Uzun savaşların ardından diplomatik dengelerin yeniden tanımlandığı bir eşik.',
    focus: ['Zitvatorok Antlaşması', 'Avusturya cephesi', 'Diplomatik denge'],
    rivals: ['Avusturya', 'Safeviler'],
    territory: 'territory-1606',
    examNote: 'Zitvatorok, Osmanlı’nın Avusturya karşısındaki diplomatik üstünlük iddiasının değişmesiyle birlikte ele alınır.',
  },
  {
    year: 1699,
    shortLabel: 'Karlofça',
    era: 'Gerileme Dönemi',
    ruler: 'II. Mustafa',
    reign: '1695–1703',
    capital: 'İstanbul',
    summary: 'Uzun savaşların ardından büyük çaplı toprak kayıplarının antlaşmayla kabul edildiği dönüm noktası.',
    focus: ['Karlofça Antlaşması', 'Toprak kayıpları', 'Savunma siyaseti'],
    rivals: ['Avusturya', 'Lehistan', 'Venedik', 'Rusya'],
    territory: 'territory-1699',
    examNote: 'Karlofça, Osmanlı’nın Avrupa’da genişleme siyasetinden savunma ve denge arayışına geçişinin temel işaretidir.',
  },
  {
    year: 1922,
    shortLabel: 'Son',
    era: 'Dağılma Dönemi',
    ruler: 'VI. Mehmet Vahdettin',
    reign: '1918–1922',
    capital: 'İstanbul',
    summary: 'Saltanatın kaldırılmasıyla Osmanlı siyasi egemenliğinin sona erdiği yıl.',
    focus: ['Saltanatın kaldırılması', 'TBMM kararı', 'Osmanlı hanedan yönetiminin sonu'],
    rivals: ['İtilaf Devletleri', 'Yunanistan'],
    territory: 'territory-1922',
    examNote: '1 Kasım 1922’de saltanatın kaldırılması, millî egemenliğin önündeki ikili yönetim sorununu sona erdirdi.',
  },
]

export const atlasItems = [
  {
    id: 'istanbul-1453',
    type: 'conquest',
    year: 1453,
    title: 'İstanbul’un Fethi',
    location: 'İstanbul',
    lat: 41.0082,
    lng: 28.9784,
    lead: 'Osmanlı başkentini ve dünya siyasetini değiştiren büyük fetih.',
    cause: 'Anadolu ve Rumeli toprakları arasındaki bağlantıyı güvenceye almak, boğazları denetlemek ve Bizans tehdidini sona erdirmek.',
    result: 'Bizans İmparatorluğu sona erdi; İstanbul başkent oldu ve Osmanlı’nın merkezî gücü arttı.',
    people: ['Fatih Sultan Mehmet', 'Çandarlı Halil Paşa', 'Giovanni Giustiniani'],
    exam: 'Şahi topları, gemilerin karadan yürütülmesi, boğaz denetimi ve çağ değişimi yorumları birlikte sorulabilir.',
  },
  {
    id: 'mohac-1526',
    type: 'battle',
    year: 1526,
    title: 'Mohaç Meydan Muharebesi',
    location: 'Macaristan · Mohaç',
    lat: 45.995,
    lng: 18.683,
    lead: 'Osmanlı’nın Orta Avrupa’daki etkisini kalıcı biçimde artıran kısa ve sonuçları büyük savaş.',
    cause: 'Macar Krallığı’nın Osmanlı ilerleyişine karşı konumu ve Orta Avrupa hâkimiyeti mücadelesi.',
    result: 'Osmanlı kesin zafer kazandı; Macar siyasi dengesi çözüldü ve Habsburg rekabeti yeni bir safhaya geçti.',
    people: ['Kanuni Sultan Süleyman', 'Pargalı İbrahim Paşa', 'II. Lajos'],
    forces: ['Osmanlı: yaklaşık 60.000', 'Macar: yaklaşık 25.000–30.000'],
    exam: 'Savaşın sonucu doğrudan “Macaristan bütünüyle Osmanlı eyaleti oldu” şeklinde okunmamalı; Budin’in eyalet oluşu 1541’dir.',
  },
  {
    id: 'bagdat-1534',
    type: 'conquest',
    year: 1534,
    title: 'Bağdat’ın Alınması',
    location: 'Bağdat',
    lat: 33.3152,
    lng: 44.3661,
    lead: 'Irakeyn Seferi sırasında Bağdat Osmanlı yönetimine geçti.',
    cause: 'Safevi nüfuzunu sınırlamak ve doğu ticaret yolları üzerindeki denetimi güçlendirmek.',
    result: 'Irak bölgesinde Osmanlı hâkimiyeti kuruldu; Basra Körfezi yönündeki stratejik hat güçlendi.',
    people: ['Kanuni Sultan Süleyman', 'Pargalı İbrahim Paşa'],
    exam: 'Doğu seferleri Safevi rekabeti, ticaret yolları ve mezhep siyasetiyle birlikte değerlendirilir.',
  },
  {
    id: 'zigetvar-1566',
    type: 'battle',
    year: 1566,
    title: 'Zigetvar Seferi',
    location: 'Macaristan · Zigetvar',
    lat: 46.0494,
    lng: 17.7985,
    lead: 'Kanuni Sultan Süleyman’ın son seferi.',
    cause: 'Habsburg sınır hattındaki baskıyı azaltmak ve Osmanlı askerî üstünlüğünü sürdürmek.',
    result: 'Kale alındı; Kanuni sefer sırasında hayatını kaybetti ve II. Selim tahta çıktı.',
    people: ['Kanuni Sultan Süleyman', 'Sokollu Mehmet Paşa', 'Miklós Zrínyi'],
    exam: 'Zigetvar, Kanuni’nin son seferi ve Sokollu’nun geçiş sürecindeki rolüyle eşleştirilir.',
  },
  {
    id: 'zitvatorok-1606',
    type: 'treaty',
    year: 1606,
    title: 'Zitvatorok Antlaşması',
    location: 'Osmanlı–Avusturya sınırı',
    lat: 47.756,
    lng: 18.318,
    lead: 'Uzun Osmanlı–Avusturya savaşlarını sona erdiren diplomatik eşik.',
    cause: 'Her iki tarafın uzun savaşın mali ve askerî yükünü taşımakta zorlanması.',
    result: 'Avusturya hükümdarının protokoldeki konumu değişti; Osmanlı’nın diplomatik üstünlük anlayışı zayıfladı.',
    people: ['I. Ahmed', 'Avusturya Arşidüklüğü temsilcileri'],
    exam: 'Antlaşma, “Avusturya hükümdarının Osmanlı sadrazamına denk sayılması” kalıbının değişmesi üzerinden sorulur.',
  },
  {
    id: 'karlofca-1699',
    type: 'treaty',
    year: 1699,
    title: 'Karlofça Antlaşması',
    location: 'Karlofça',
    lat: 45.203,
    lng: 19.934,
    lead: 'Osmanlı’nın Avrupa’daki toprak düzenini büyük ölçüde değiştiren antlaşma.',
    cause: 'Kutsal İttifak savaşlarında yaşanan askerî kayıplar ve uzun savaşın sürdürülemez hâle gelmesi.',
    result: 'Macaristan ve Erdel’in büyük bölümü Avusturya’ya; Podolya Lehistan’a; Mora ve Dalmaçya kıyılarının bir bölümü Venedik’e bırakıldı.',
    people: ['II. Mustafa', 'Amcazade Hüseyin Paşa'],
    sides: ['Osmanlı Devleti', 'Avusturya', 'Lehistan', 'Venedik'],
    exam: 'İlk büyük çaplı toprak kaybı ve savunma döneminin belirginleşmesi ana bağlantıdır.',
  },
  {
    id: 'saltanat-1922',
    type: 'milestone',
    year: 1922,
    title: 'Saltanatın Kaldırılması',
    location: 'Ankara · İstanbul',
    lat: 39.9334,
    lng: 32.8597,
    lead: 'Osmanlı saltanatının hukuken sona erdiği siyasi karar.',
    cause: 'Millî egemenliği tek merkezde toplamak ve Lozan öncesindeki temsil ikiliğini ortadan kaldırmak.',
    result: 'Saltanat kaldırıldı; Osmanlı Devleti’nin siyasi varlığı sona erdi. Halifelik bir süre daha devam etti.',
    people: ['Mustafa Kemal Paşa', 'VI. Mehmet Vahdettin', 'TBMM üyeleri'],
    exam: 'Saltanat 1922’de, halifelik 1924’te kaldırıldı; iki tarih birbirine karıştırılmamalıdır.',
  },
]

export const atlasCities = [
  { id: 'bursa', type: 'city', title: 'Bursa', location: 'Anadolu', lat: 40.195, lng: 29.06, acquired: 1326, ruler: 'Orhan Bey', importance: 'İlk büyük Osmanlı başkenti; idari ve kültürel merkez.' },
  { id: 'edirne', type: 'city', title: 'Edirne', location: 'Rumeli', lat: 41.6771, lng: 26.5557, acquired: 1361, ruler: 'I. Murad', importance: 'Balkan seferlerinin ana üssü ve İstanbul’dan önceki başkent.' },
  { id: 'istanbul', type: 'city', title: 'İstanbul', location: 'Boğazlar', lat: 41.0082, lng: 28.9784, acquired: 1453, ruler: 'Fatih Sultan Mehmet', importance: 'Başkent, boğazların düğümü ve imparatorluğun idari merkezi.' },
  { id: 'belgrad', type: 'city', title: 'Belgrad', location: 'Balkanlar', lat: 44.7866, lng: 20.4489, acquired: 1521, ruler: 'Kanuni Sultan Süleyman', importance: 'Orta Avrupa seferleri için stratejik geçiş kapısı.' },
  { id: 'budin', type: 'city', title: 'Budin', location: 'Macaristan', lat: 47.4979, lng: 19.0402, acquired: 1541, ruler: 'Kanuni Sultan Süleyman', importance: 'Osmanlı’nın Orta Avrupa’daki eyalet merkezi.' },
  { id: 'kahire', type: 'city', title: 'Kahire', location: 'Mısır', lat: 30.0444, lng: 31.2357, acquired: 1517, ruler: 'Yavuz Sultan Selim', importance: 'Doğu Akdeniz ve Kızıldeniz ticaret yollarını birbirine bağlayan merkez.' },
  { id: 'sam', type: 'city', title: 'Şam', location: 'Suriye', lat: 33.5138, lng: 36.2765, acquired: 1516, ruler: 'Yavuz Sultan Selim', importance: 'Hac yolu, Levant ticareti ve doğu eyaletleri için ana merkez.' },
  { id: 'kudus', type: 'city', title: 'Kudüs', location: 'Filistin', lat: 31.7683, lng: 35.2137, acquired: 1517, ruler: 'Yavuz Sultan Selim', importance: 'Üç din için kutsal şehir; vakıf ve hac ağlarının önemli durağı.' },
  { id: 'bagdat', type: 'city', title: 'Bağdat', location: 'Irak', lat: 33.3152, lng: 44.3661, acquired: 1534, ruler: 'Kanuni Sultan Süleyman', importance: 'Safevi sınırı, Mezopotamya ve Basra hattı için stratejik merkez.' },
  { id: 'rodos', type: 'city', title: 'Rodos', location: 'Doğu Akdeniz', lat: 36.434, lng: 28.2176, acquired: 1522, ruler: 'Kanuni Sultan Süleyman', importance: 'Doğu Akdeniz deniz yollarının güvenliği için kritik ada.' },
]

export const atlasLayers = [
  { id: 'city', label: 'Şehirler' },
  { id: 'battle', label: 'Savaşlar' },
  { id: 'conquest', label: 'Fetihler' },
  { id: 'treaty', label: 'Antlaşmalar' },
  { id: 'milestone', label: 'Dönüm noktaları' },
]

/**
 * Prototip için sadeleştirilmiş dönem alanlarıdır; akademik sınır verisi
 * değildir. Gerçek tarihî GeoJSON verileri hazırlandığında aynı yapıya
 * doğrudan eklenebilir.
 */
export const atlasTerritories = {
  1453: {
    label: [40.5, 30.5],
    areas: [
      [[42.2, 26.1], [44.3, 22.1], [43.2, 18.8], [40.4, 19.4], [39, 23.8], [40.1, 27.4]],
      [[42.1, 27.2], [41.6, 42.2], [37.5, 43.7], [35.8, 34.8], [36.3, 27.4]],
    ],
  },
  1526: {
    label: [38.8, 29.5],
    areas: [
      [[48.2, 17], [47.7, 25.6], [44, 29.8], [39.1, 27], [38.5, 20.3], [42, 15.5], [46.2, 15.2]],
      [[42, 26], [41.7, 46.3], [35.6, 45.8], [32.2, 38.8], [29.7, 35.2], [21.8, 33.1], [22.2, 25.1], [31.4, 25.2], [35.9, 28.1]],
    ],
  },
  1566: {
    label: [35.8, 25.5],
    areas: [
      [[49.2, 15.5], [48.5, 28.7], [44, 30.6], [39, 27.8], [36.7, 20.2], [40.8, 13.2], [46.8, 14.1]],
      [[42.2, 26], [41.7, 47.5], [34.4, 47.1], [29.5, 36.4], [21.4, 34.2], [21.8, 24.8], [31.5, 24.4], [36.1, 28]],
      [[37.3, 9], [37.4, 24.8], [31.4, 25], [30.1, 9.4]],
    ],
  },
  1606: {
    label: [35.5, 26],
    areas: [
      [[49, 15.8], [48.5, 29], [43, 30.5], [38.8, 27], [36.5, 20], [40.5, 13.5], [47, 14.2]],
      [[42, 26], [41.8, 47.7], [34, 48], [29, 37], [21, 35], [21.5, 24.5], [31.2, 24], [36, 28]],
      [[37.4, 7.5], [37.2, 24.8], [31.2, 24.3], [30.2, 7.8]],
    ],
  },
  1699: {
    label: [35.7, 27.5],
    areas: [
      [[46.5, 18], [47, 27.5], [42.5, 30.4], [38.5, 27], [36.7, 20.4], [41.1, 14.5], [45, 16.2]],
      [[42, 26], [41.7, 47.3], [34, 47.4], [29.3, 37], [21.3, 34.8], [21.8, 24.5], [31.3, 24.4], [36, 28]],
      [[37.3, 8.6], [37.2, 24.8], [31.3, 24.4], [30.2, 8.8]],
    ],
  },
  1922: {
    label: [39, 32],
    areas: [
      [[42, 26], [41.8, 44.8], [36, 44.3], [35.8, 27.3], [39.3, 25.7]],
    ],
  },
}
