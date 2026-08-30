/**
 * Fizik Atlası — Optik
 * ==================================================================
 * Gölge, yansıma, kırılma, aynalar, mercekler, prizma ve renk.
 *
 * Pedagojik sınır: **sanal görüntü**, ışınların gerçekten kesiştiği bir
 * nokta değildir; uzantılarının kesiştiği yerdir. Çizimlerde uzantılar
 * her zaman kesikli çizgiyle gösterilir ve arayüz bunu açıkça söyler.
 *
 * İşaret kuralı (bu dosyanın tek kuralı):
 *   - Cisim uzaklığı d₀ daima pozitiftir.
 *   - Görüntü uzaklığı dᵢ pozitifse gerçek, negatifse sanaldır.
 *   - Odak f: çukur ayna ve ince kenarlı mercekte pozitif,
 *     tümsek ayna ve kalın kenarlı mercekte negatiftir.
 */

/** Işık hızı (boşlukta, m/s) */
export const ISIK_HIZI = 3e8

/** Ortamların kırıcılık indisleri. */
export const ORTAMLAR = {
  bosluk: { ad: 'Boşluk', n: 1.0, renk: '#0f172a' },
  hava: { ad: 'Hava', n: 1.0003, renk: '#1e293b' },
  buz: { ad: 'Buz', n: 1.31, renk: '#bae6fd' },
  su: { ad: 'Su', n: 1.33, renk: '#38bdf8' },
  etilAlkol: { ad: 'Etil alkol', n: 1.36, renk: '#c4b5fd' },
  cam: { ad: 'Cam', n: 1.5, renk: '#a5f3fc' },
  gliserin: { ad: 'Gliserin', n: 1.47, renk: '#a3e635' },
  elmas: { ad: 'Elmas', n: 2.42, renk: '#e0f2fe' },
}

/** Ortamda ışık hızı: v = c / n */
export const ortamdaIsikHizi = (n) => ISIK_HIZI / n

/** Yansıma yasası: yansıma açısı = gelme açısı (normale göre ölçülür). */
export const yansimaAcisi = (gelmeAcisi) => gelmeAcisi

/**
 * Snell yasası: n₁·sin(i) = n₂·sin(r)
 * Yoğun ortamdan az yoğuna geçerken sin(r) 1'i aşabilir — bu, ışığın
 * kırılamadığı, tamamen yansıdığı durumdur (tam yansıma).
 */
export function kirilma({ gelmeAcisi, n1, n2 }) {
  const i = (gelmeAcisi * Math.PI) / 180
  const oran = (n1 * Math.sin(i)) / n2
  if (Math.abs(oran) > 1) {
    return {
      tamYansima: true,
      kirilmaAcisi: null,
      sinirAcisi: sinirAcisi(n1, n2),
      aciklama: 'Gelme açısı sınır açısını aştı. Işık ikinci ortama geçemez, tamamen yansır.',
    }
  }
  const r = (Math.asin(oran) * 180) / Math.PI
  return {
    tamYansima: false,
    kirilmaAcisi: r,
    sinirAcisi: sinirAcisi(n1, n2),
    normaleYaklasti: n2 > n1,
    aciklama: n2 > n1
      ? 'Az yoğun ortamdan çok yoğun ortama geçiş: ışık yavaşlar ve normale yaklaşır.'
      : n2 < n1
        ? 'Çok yoğun ortamdan az yoğun ortama geçiş: ışık hızlanır ve normalden uzaklaşır.'
        : 'İki ortamın kırıcılık indisi aynı; ışık doğrultusunu değiştirmez.',
  }
}

/**
 * Sınır açısı: sin(θ_s) = n₂ / n₁
 * Yalnızca n₁ > n₂ iken (yoğundan aza geçişte) tanımlıdır.
 */
export function sinirAcisi(n1, n2) {
  if (n1 <= n2) return null
  return (Math.asin(n2 / n1) * 180) / Math.PI
}

/**
 * Ayna / mercek denklemi: 1/f = 1/d₀ + 1/dᵢ
 * Cisim tam odakta ise ışınlar paralel çıkar, görüntü oluşmaz (sonsuz).
 */
export function goruntuKonumu({ odak, cisimUzakligi }) {
  if (!cisimUzakligi || cisimUzakligi <= 0) return null
  const payda = 1 / odak - 1 / cisimUzakligi
  if (Math.abs(payda) < 1e-9) {
    return { sonsuz: true, goruntuUzakligi: Infinity, buyutme: Infinity, tur: 'olusmaz' }
  }
  const di = 1 / payda
  const buyutme = -di / cisimUzakligi
  return {
    sonsuz: false,
    goruntuUzakligi: di,
    buyutme,
    // dᵢ > 0 → ışınlar gerçekten kesişir (gerçek görüntü, perdeye düşer).
    gercekMi: di > 0,
    tur: di > 0 ? 'gercek' : 'sanal',
    duz: buyutme > 0,
    // |m| > 1 büyük, < 1 küçük görüntü.
    boyut: Math.abs(buyutme) > 1.001 ? 'buyuk' : Math.abs(buyutme) < 0.999 ? 'kucuk' : 'esit',
    yon: buyutme > 0 ? 'duz' : 'ters',
  }
}

/** Görüntü boyu: h_g = m · h_c */
export const goruntuBoyu = (cisimBoyu, buyutme) => cisimBoyu * buyutme

/**
 * Düzlem ayna: görüntü aynanın arkasında, cisimle simetrik konumdadır.
 * Her zaman sanal, düz ve cisimle **aynı boydadır**.
 */
export function duzlemAyna(cisimUzakligi) {
  return {
    goruntuUzakligi: -cisimUzakligi,
    buyutme: 1,
    tur: 'sanal',
    yon: 'duz',
    boyut: 'esit',
    // Cisim ve görüntü arası uzaklık: aynaya olan uzaklığın iki katı.
    aradakiUzaklik: 2 * cisimUzakligi,
    aciklama: 'Işınlar aynanın arkasında gerçekten kesişmez; uzantıları kesişir. Bu yüzden görüntü perdeye düşmez.',
  }
}

/**
 * Küresel aynada odak uzaklığı: f = R / 2
 * Çukur aynada pozitif, tümsek aynada negatiftir.
 */
export const kureselAynaOdagi = (egrilikYaricapi, tur) =>
  tur === 'cukur' ? egrilikYaricapi / 2 : -egrilikYaricapi / 2

/**
 * Gölge ve yarı gölge geometrisi.
 *
 * Nokta kaynak (boyutsuz) yalnızca **tam gölge** üretir. Yaygın kaynak
 * (boyutu olan) kenarlardan farklı ışık geldiği için tam gölgenin
 * çevresinde bir **yarı gölge** halkası oluşturur. Kaynak büyüdükçe
 * yarı gölge genişler, tam gölge daralır.
 */
export function golgeHesabi({ kaynakBoyu, engelBoyu, kaynakEngelUzakligi, engelPerdeUzakligi }) {
  const d1 = kaynakEngelUzakligi
  const d2 = engelPerdeUzakligi
  if (d1 <= 0) return null
  const oran = (d1 + d2) / d1

  // Nokta kaynakta gölge boyu benzerlikten gelir.
  const tamGolgeBoyu = Math.max(0, engelBoyu * oran - kaynakBoyu * (d2 / d1))
  const yariGolgeDisBoyu = engelBoyu * oran + kaynakBoyu * (d2 / d1)

  return {
    tamGolgeBoyu,
    yariGolgeDisBoyu,
    yariGolgeGenisligi: Math.max(0, (yariGolgeDisBoyu - tamGolgeBoyu) / 2),
    tamGolgeVarMi: tamGolgeBoyu > 0.0001,
    noktaKaynakMi: kaynakBoyu < 0.0001,
    aciklama: kaynakBoyu < 0.0001
      ? 'Nokta kaynak yalnızca tam gölge üretir; yarı gölge oluşmaz.'
      : tamGolgeBoyu > 0.0001
        ? 'Yaygın kaynak: ortada tam gölge, kenarlarda yarı gölge var.'
        : 'Kaynak engele göre çok büyük; tam gölge kalmadı, yalnızca yarı gölge var.',
  }
}

/** Aydınlanma şiddeti: E = I / d² — uzaklığın karesiyle ters orantılı. */
export function aydinlanma(isikSiddeti, uzaklik) {
  if (!uzaklik || uzaklik <= 0) return null
  return isikSiddeti / (uzaklik * uzaklik)
}

/**
 * Prizmada renklere ayrışma (dispersiyon).
 * Her rengin kırıcılık indisi farklıdır: mor en çok, kırmızı en az kırılır.
 * Bu yüzden beyaz ışık prizmadan geçince yelpaze gibi açılır.
 */
export const RENK_INDISLERI = [
  { ad: 'Kırmızı', dalgaBoyuNm: 700, nCam: 1.513, renk: '#ef4444' },
  { ad: 'Turuncu', dalgaBoyuNm: 620, nCam: 1.517, renk: '#f97316' },
  { ad: 'Sarı', dalgaBoyuNm: 580, nCam: 1.520, renk: '#eab308' },
  { ad: 'Yeşil', dalgaBoyuNm: 530, nCam: 1.525, renk: '#22c55e' },
  { ad: 'Mavi', dalgaBoyuNm: 470, nCam: 1.531, renk: '#3b82f6' },
  { ad: 'Çivit', dalgaBoyuNm: 445, nCam: 1.536, renk: '#4f46e5' },
  { ad: 'Mor', dalgaBoyuNm: 410, nCam: 1.543, renk: '#8b5cf6' },
]

/** Prizmadan çıkan her rengin sapma açısı. */
export function prizmaAyrismasi({ gelmeAcisi, prizmaAcisi = 60 }) {
  return RENK_INDISLERI.map((r) => {
    const ilk = kirilma({ gelmeAcisi, n1: 1, n2: r.nCam })
    if (ilk.tamYansima) return { ...r, cikabildi: false, sapma: null }
    // İkinci yüzeye geliş açısı: A − r₁
    const ikinciGelme = prizmaAcisi - ilk.kirilmaAcisi
    const ikinci = kirilma({ gelmeAcisi: ikinciGelme, n1: r.nCam, n2: 1 })
    if (ikinci.tamYansima) return { ...r, cikabildi: false, sapma: null }
    return {
      ...r,
      cikabildi: true,
      icAci1: ilk.kirilmaAcisi,
      cikisAcisi: ikinci.kirilmaAcisi,
      // Toplam sapma: δ = i₁ + i₂ − A
      sapma: gelmeAcisi + ikinci.kirilmaAcisi - prizmaAcisi,
    }
  })
}

/**
 * Toplamsal renk karışımı (ışık): kırmızı + yeşil + mavi = beyaz.
 * Işık kaynakları üst üste bindiğinde renkler **eklenir**.
 */
export function isikKarisimi({ kirmizi, yesil, mavi }) {
  const k = kirmizi ? 1 : 0
  const y = yesil ? 1 : 0
  const m = mavi ? 1 : 0
  const kod = `${k}${y}${m}`
  const tablo = {
    '000': { ad: 'Siyah (ışık yok)', hex: '#000000' },
    '100': { ad: 'Kırmızı', hex: '#ff0000' },
    '010': { ad: 'Yeşil', hex: '#00ff00' },
    '001': { ad: 'Mavi', hex: '#0000ff' },
    '110': { ad: 'Sarı', hex: '#ffff00' },
    '101': { ad: 'Macenta', hex: '#ff00ff' },
    '011': { ad: 'Camgöbeği (Cyan)', hex: '#00ffff' },
    '111': { ad: 'Beyaz', hex: '#ffffff' },
  }
  return tablo[kod]
}

/**
 * Çıkarımsal renk (filtre / pigment): filtre kendi rengini **geçirir**,
 * diğerlerini soğurur. Beyaz ışık kırmızı filtreden geçince kırmızı
 * kalır; ardından mavi filtre konursa hiçbir şey geçmez → siyah.
 */
export function filtredenGecen({ gelenRenkler, filtreRengi }) {
  const filtreGecirir = {
    kirmizi: ['kirmizi'],
    yesil: ['yesil'],
    mavi: ['mavi'],
    sari: ['kirmizi', 'yesil'],
    macenta: ['kirmizi', 'mavi'],
    camgobegi: ['yesil', 'mavi'],
    seffaf: ['kirmizi', 'yesil', 'mavi'],
  }
  const gecirilen = filtreGecirir[filtreRengi] ?? []
  const sonuc = gelenRenkler.filter((r) => gecirilen.includes(r))
  return {
    gecen: sonuc,
    sonuc: isikKarisimi({
      kirmizi: sonuc.includes('kirmizi'),
      yesil: sonuc.includes('yesil'),
      mavi: sonuc.includes('mavi'),
    }),
    sogurulan: gelenRenkler.filter((r) => !gecirilen.includes(r)),
  }
}
