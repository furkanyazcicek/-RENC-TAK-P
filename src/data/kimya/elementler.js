/**
 * Dr. Koç — Kimya Atlası / Element Verisi
 * ------------------------------------------------------------------
 * 118 elementin temel verisi. Satırlar yer kazanmak için dizi biçiminde
 * tutulur, aşağıdaki `elementiKur` işlevi bunları nesneye çevirir.
 *
 * Elektron dizilimi elle yazılmaz: Aufbau (artan enerji) sırasına göre
 * hesaplanır, bilinen istisnalar (Cr, Cu, Pd, Ag, Au, Pt…) tablo ile
 * düzeltilir. Böylece 118 satır elle yazılmış olmaktan doğan hata riski
 * ortadan kalkar. `scripts/test-kimya-atlasi.mjs` toplam elektron
 * sayısının atom numarasına eşit olduğunu her element için doğrular.
 *
 * Satır düzeni:
 * [atomNo, sembol, ad, kütle, kategori, periyot, grup, hal,
 *  elektronegatiflik, yaygın izotopun kütle numarası, yükseltgenme]
 */

/** Aufbau (artan enerji) doldurma sırası ve alt kabuk kapasiteleri. */
const AUFBAU = [
  ['1s', 2], ['2s', 2], ['2p', 6], ['3s', 2], ['3p', 6], ['4s', 2], ['3d', 10],
  ['4p', 6], ['5s', 2], ['4d', 10], ['5p', 6], ['6s', 2], ['4f', 14], ['5d', 10],
  ['6p', 6], ['7s', 2], ['5f', 14], ['6d', 10], ['7p', 6],
]

/**
 * Temel hâl diziliminin Aufbau sırasından saptığı elementler.
 * Yalnızca değişen alt kabuklar yazılır; gerisi hesaplanan dizilimden gelir.
 * (Kaynak: IUPAC temel hâl elektron dizilimleri.)
 */
const DIZILIM_ISTISNALARI = {
  24: { '4s': 1, '3d': 5 },     // Krom — yarı dolu d kararlılığı
  29: { '4s': 1, '3d': 10 },    // Bakır — tam dolu d kararlılığı
  41: { '5s': 1, '4d': 4 },     // Niyobyum
  42: { '5s': 1, '4d': 5 },     // Molibden
  44: { '5s': 1, '4d': 7 },     // Rutenyum
  45: { '5s': 1, '4d': 8 },     // Rodyum
  46: { '5s': 0, '4d': 10 },    // Paladyum
  47: { '5s': 1, '4d': 10 },    // Gümüş
  57: { '4f': 0, '5d': 1 },     // Lantan
  58: { '4f': 1, '5d': 1 },     // Seryum
  64: { '4f': 7, '5d': 1 },     // Gadolinyum
  78: { '6s': 1, '5d': 9 },     // Platin
  79: { '6s': 1, '5d': 10 },    // Altın
  89: { '5f': 0, '6d': 1 },     // Aktinyum
  90: { '5f': 0, '6d': 2 },     // Toryum
  91: { '5f': 2, '6d': 1 },     // Protaktinyum
  92: { '5f': 3, '6d': 1 },     // Uranyum
  93: { '5f': 4, '6d': 1 },     // Neptunyum
  96: { '5f': 7, '6d': 1 },     // Küriyum
  103: { '6d': 0, '7p': 1 },    // Lavrensiyum
}

const SATIRLAR = [
  [1, 'H', 'Hidrojen', 1.008, 'ametal', 1, 1, 'gaz', 2.20, 1, '+1,-1'],
  [2, 'He', 'Helyum', 4.003, 'soyGaz', 1, 18, 'gaz', null, 4, '0'],
  [3, 'Li', 'Lityum', 6.94, 'alkali', 2, 1, 'kati', 0.98, 7, '+1'],
  [4, 'Be', 'Berilyum', 9.012, 'toprakAlkali', 2, 2, 'kati', 1.57, 9, '+2'],
  [5, 'B', 'Bor', 10.81, 'yariMetal', 2, 13, 'kati', 2.04, 11, '+3'],
  [6, 'C', 'Karbon', 12.011, 'ametal', 2, 14, 'kati', 2.55, 12, '+4,+2,-4'],
  [7, 'N', 'Azot', 14.007, 'ametal', 2, 15, 'gaz', 3.04, 14, '-3,+3,+5'],
  [8, 'O', 'Oksijen', 15.999, 'ametal', 2, 16, 'gaz', 3.44, 16, '-2'],
  [9, 'F', 'Flor', 18.998, 'halojen', 2, 17, 'gaz', 3.98, 19, '-1'],
  [10, 'Ne', 'Neon', 20.180, 'soyGaz', 2, 18, 'gaz', null, 20, '0'],
  [11, 'Na', 'Sodyum', 22.990, 'alkali', 3, 1, 'kati', 0.93, 23, '+1'],
  [12, 'Mg', 'Magnezyum', 24.305, 'toprakAlkali', 3, 2, 'kati', 1.31, 24, '+2'],
  [13, 'Al', 'Alüminyum', 26.982, 'metal', 3, 13, 'kati', 1.61, 27, '+3'],
  [14, 'Si', 'Silisyum', 28.085, 'yariMetal', 3, 14, 'kati', 1.90, 28, '+4,-4'],
  [15, 'P', 'Fosfor', 30.974, 'ametal', 3, 15, 'kati', 2.19, 31, '-3,+3,+5'],
  [16, 'S', 'Kükürt', 32.06, 'ametal', 3, 16, 'kati', 2.58, 32, '-2,+4,+6'],
  [17, 'Cl', 'Klor', 35.45, 'halojen', 3, 17, 'gaz', 3.16, 35, '-1,+1,+5,+7'],
  [18, 'Ar', 'Argon', 39.948, 'soyGaz', 3, 18, 'gaz', null, 40, '0'],
  [19, 'K', 'Potasyum', 39.098, 'alkali', 4, 1, 'kati', 0.82, 39, '+1'],
  [20, 'Ca', 'Kalsiyum', 40.078, 'toprakAlkali', 4, 2, 'kati', 1.00, 40, '+2'],
  [21, 'Sc', 'Skandiyum', 44.956, 'gecis', 4, 3, 'kati', 1.36, 45, '+3'],
  [22, 'Ti', 'Titanyum', 47.867, 'gecis', 4, 4, 'kati', 1.54, 48, '+4,+3'],
  [23, 'V', 'Vanadyum', 50.942, 'gecis', 4, 5, 'kati', 1.63, 51, '+5,+4,+3,+2'],
  [24, 'Cr', 'Krom', 51.996, 'gecis', 4, 6, 'kati', 1.66, 52, '+6,+3,+2'],
  [25, 'Mn', 'Mangan', 54.938, 'gecis', 4, 7, 'kati', 1.55, 55, '+7,+4,+2'],
  [26, 'Fe', 'Demir', 55.845, 'gecis', 4, 8, 'kati', 1.83, 56, '+3,+2'],
  [27, 'Co', 'Kobalt', 58.933, 'gecis', 4, 9, 'kati', 1.88, 59, '+3,+2'],
  [28, 'Ni', 'Nikel', 58.693, 'gecis', 4, 10, 'kati', 1.91, 58, '+2,+3'],
  [29, 'Cu', 'Bakır', 63.546, 'gecis', 4, 11, 'kati', 1.90, 63, '+2,+1'],
  [30, 'Zn', 'Çinko', 65.38, 'gecis', 4, 12, 'kati', 1.65, 64, '+2'],
  [31, 'Ga', 'Galyum', 69.723, 'metal', 4, 13, 'kati', 1.81, 69, '+3'],
  [32, 'Ge', 'Germanyum', 72.630, 'yariMetal', 4, 14, 'kati', 2.01, 74, '+4,+2'],
  [33, 'As', 'Arsenik', 74.922, 'yariMetal', 4, 15, 'kati', 2.18, 75, '+5,+3,-3'],
  [34, 'Se', 'Selenyum', 78.971, 'ametal', 4, 16, 'kati', 2.55, 80, '-2,+4,+6'],
  [35, 'Br', 'Brom', 79.904, 'halojen', 4, 17, 'sivi', 2.96, 79, '-1,+1,+5'],
  [36, 'Kr', 'Kripton', 83.798, 'soyGaz', 4, 18, 'gaz', 3.00, 84, '0,+2'],
  [37, 'Rb', 'Rubidyum', 85.468, 'alkali', 5, 1, 'kati', 0.82, 85, '+1'],
  [38, 'Sr', 'Stronsiyum', 87.62, 'toprakAlkali', 5, 2, 'kati', 0.95, 88, '+2'],
  [39, 'Y', 'İtriyum', 88.906, 'gecis', 5, 3, 'kati', 1.22, 89, '+3'],
  [40, 'Zr', 'Zirkonyum', 91.224, 'gecis', 5, 4, 'kati', 1.33, 90, '+4'],
  [41, 'Nb', 'Niyobyum', 92.906, 'gecis', 5, 5, 'kati', 1.60, 93, '+5'],
  [42, 'Mo', 'Molibden', 95.95, 'gecis', 5, 6, 'kati', 2.16, 98, '+6,+4'],
  [43, 'Tc', 'Teknesyum', 98, 'gecis', 5, 7, 'kati', 1.90, 98, '+7'],
  [44, 'Ru', 'Rutenyum', 101.07, 'gecis', 5, 8, 'kati', 2.20, 102, '+4,+3'],
  [45, 'Rh', 'Rodyum', 102.906, 'gecis', 5, 9, 'kati', 2.28, 103, '+3'],
  [46, 'Pd', 'Paladyum', 106.42, 'gecis', 5, 10, 'kati', 2.20, 106, '+2,+4'],
  [47, 'Ag', 'Gümüş', 107.868, 'gecis', 5, 11, 'kati', 1.93, 107, '+1'],
  [48, 'Cd', 'Kadmiyum', 112.414, 'gecis', 5, 12, 'kati', 1.69, 114, '+2'],
  [49, 'In', 'İndiyum', 114.818, 'metal', 5, 13, 'kati', 1.78, 115, '+3'],
  [50, 'Sn', 'Kalay', 118.710, 'metal', 5, 14, 'kati', 1.96, 120, '+4,+2'],
  [51, 'Sb', 'Antimon', 121.760, 'yariMetal', 5, 15, 'kati', 2.05, 121, '+5,+3'],
  [52, 'Te', 'Tellür', 127.60, 'yariMetal', 5, 16, 'kati', 2.10, 130, '-2,+4,+6'],
  [53, 'I', 'İyot', 126.904, 'halojen', 5, 17, 'kati', 2.66, 127, '-1,+1,+5,+7'],
  [54, 'Xe', 'Ksenon', 131.293, 'soyGaz', 5, 18, 'gaz', 2.60, 132, '0,+2,+4,+6'],
  [55, 'Cs', 'Sezyum', 132.905, 'alkali', 6, 1, 'kati', 0.79, 133, '+1'],
  [56, 'Ba', 'Baryum', 137.327, 'toprakAlkali', 6, 2, 'kati', 0.89, 138, '+2'],
  [57, 'La', 'Lantan', 138.905, 'lantanit', 6, null, 'kati', 1.10, 139, '+3'],
  [58, 'Ce', 'Seryum', 140.116, 'lantanit', 6, null, 'kati', 1.12, 140, '+3,+4'],
  [59, 'Pr', 'Praseodim', 140.908, 'lantanit', 6, null, 'kati', 1.13, 141, '+3'],
  [60, 'Nd', 'Neodim', 144.242, 'lantanit', 6, null, 'kati', 1.14, 142, '+3'],
  [61, 'Pm', 'Prometyum', 145, 'lantanit', 6, null, 'kati', 1.13, 145, '+3'],
  [62, 'Sm', 'Samaryum', 150.36, 'lantanit', 6, null, 'kati', 1.17, 152, '+3,+2'],
  [63, 'Eu', 'Evropiyum', 151.964, 'lantanit', 6, null, 'kati', 1.20, 153, '+3,+2'],
  [64, 'Gd', 'Gadolinyum', 157.25, 'lantanit', 6, null, 'kati', 1.20, 158, '+3'],
  [65, 'Tb', 'Terbiyum', 158.925, 'lantanit', 6, null, 'kati', 1.20, 159, '+3'],
  [66, 'Dy', 'Disprosyum', 162.500, 'lantanit', 6, null, 'kati', 1.22, 164, '+3'],
  [67, 'Ho', 'Holmiyum', 164.930, 'lantanit', 6, null, 'kati', 1.23, 165, '+3'],
  [68, 'Er', 'Erbiyum', 167.259, 'lantanit', 6, null, 'kati', 1.24, 166, '+3'],
  [69, 'Tm', 'Tulyum', 168.934, 'lantanit', 6, null, 'kati', 1.25, 169, '+3'],
  [70, 'Yb', 'İterbiyum', 173.045, 'lantanit', 6, null, 'kati', 1.10, 174, '+3,+2'],
  [71, 'Lu', 'Lutesyum', 174.967, 'lantanit', 6, null, 'kati', 1.27, 175, '+3'],
  [72, 'Hf', 'Hafniyum', 178.486, 'gecis', 6, 4, 'kati', 1.30, 180, '+4'],
  [73, 'Ta', 'Tantal', 180.948, 'gecis', 6, 5, 'kati', 1.50, 181, '+5'],
  [74, 'W', 'Tungsten', 183.84, 'gecis', 6, 6, 'kati', 2.36, 184, '+6,+4'],
  [75, 'Re', 'Renyum', 186.207, 'gecis', 6, 7, 'kati', 1.90, 187, '+7,+4'],
  [76, 'Os', 'Osmiyum', 190.23, 'gecis', 6, 8, 'kati', 2.20, 192, '+4,+8'],
  [77, 'Ir', 'İridyum', 192.217, 'gecis', 6, 9, 'kati', 2.20, 193, '+3,+4'],
  [78, 'Pt', 'Platin', 195.084, 'gecis', 6, 10, 'kati', 2.28, 195, '+2,+4'],
  [79, 'Au', 'Altın', 196.967, 'gecis', 6, 11, 'kati', 2.54, 197, '+3,+1'],
  [80, 'Hg', 'Cıva', 200.592, 'gecis', 6, 12, 'sivi', 2.00, 202, '+2,+1'],
  [81, 'Tl', 'Talyum', 204.38, 'metal', 6, 13, 'kati', 1.62, 205, '+1,+3'],
  [82, 'Pb', 'Kurşun', 207.2, 'metal', 6, 14, 'kati', 2.33, 208, '+2,+4'],
  [83, 'Bi', 'Bizmut', 208.980, 'metal', 6, 15, 'kati', 2.02, 209, '+3,+5'],
  [84, 'Po', 'Polonyum', 209, 'yariMetal', 6, 16, 'kati', 2.00, 209, '+2,+4'],
  [85, 'At', 'Astatin', 210, 'halojen', 6, 17, 'kati', 2.20, 210, '-1,+1'],
  [86, 'Rn', 'Radon', 222, 'soyGaz', 6, 18, 'gaz', 2.20, 222, '0,+2'],
  [87, 'Fr', 'Fransiyum', 223, 'alkali', 7, 1, 'kati', 0.70, 223, '+1'],
  [88, 'Ra', 'Radyum', 226, 'toprakAlkali', 7, 2, 'kati', 0.90, 226, '+2'],
  [89, 'Ac', 'Aktinyum', 227, 'aktinit', 7, null, 'kati', 1.10, 227, '+3'],
  [90, 'Th', 'Toryum', 232.038, 'aktinit', 7, null, 'kati', 1.30, 232, '+4'],
  [91, 'Pa', 'Protaktinyum', 231.036, 'aktinit', 7, null, 'kati', 1.50, 231, '+5,+4'],
  [92, 'U', 'Uranyum', 238.029, 'aktinit', 7, null, 'kati', 1.38, 238, '+6,+4'],
  [93, 'Np', 'Neptunyum', 237, 'aktinit', 7, null, 'kati', 1.36, 237, '+5,+4'],
  [94, 'Pu', 'Plütonyum', 244, 'aktinit', 7, null, 'kati', 1.28, 244, '+4,+6'],
  [95, 'Am', 'Amerikyum', 243, 'aktinit', 7, null, 'kati', 1.30, 243, '+3'],
  [96, 'Cm', 'Küriyum', 247, 'aktinit', 7, null, 'kati', 1.30, 247, '+3'],
  [97, 'Bk', 'Berkelyum', 247, 'aktinit', 7, null, 'kati', 1.30, 247, '+3'],
  [98, 'Cf', 'Kaliforniyum', 251, 'aktinit', 7, null, 'kati', 1.30, 251, '+3'],
  [99, 'Es', 'Aynştaynyum', 252, 'aktinit', 7, null, 'bilinmiyor', 1.30, 252, '+3'],
  [100, 'Fm', 'Fermiyum', 257, 'aktinit', 7, null, 'bilinmiyor', 1.30, 257, '+3'],
  [101, 'Md', 'Mendelevyum', 258, 'aktinit', 7, null, 'bilinmiyor', 1.30, 258, '+3'],
  [102, 'No', 'Nobelyum', 259, 'aktinit', 7, null, 'bilinmiyor', 1.30, 259, '+2,+3'],
  [103, 'Lr', 'Lavrensiyum', 266, 'aktinit', 7, null, 'bilinmiyor', 1.30, 266, '+3'],
  [104, 'Rf', 'Rutherfordyum', 267, 'gecis', 7, 4, 'bilinmiyor', null, 267, '+4'],
  [105, 'Db', 'Dubniyum', 268, 'gecis', 7, 5, 'bilinmiyor', null, 268, '+5'],
  [106, 'Sg', 'Seaborgiyum', 269, 'gecis', 7, 6, 'bilinmiyor', null, 269, '+6'],
  [107, 'Bh', 'Bohriyum', 270, 'gecis', 7, 7, 'bilinmiyor', null, 270, '+7'],
  [108, 'Hs', 'Hassiyum', 269, 'gecis', 7, 8, 'bilinmiyor', null, 269, '+8'],
  [109, 'Mt', 'Meitneryum', 278, 'gecis', 7, 9, 'bilinmiyor', null, 278, '?'],
  [110, 'Ds', 'Darmstadtiyum', 281, 'gecis', 7, 10, 'bilinmiyor', null, 281, '?'],
  [111, 'Rg', 'Röntgenyum', 282, 'gecis', 7, 11, 'bilinmiyor', null, 282, '?'],
  [112, 'Cn', 'Kopernikyum', 285, 'gecis', 7, 12, 'bilinmiyor', null, 285, '+2'],
  [113, 'Nh', 'Nihonyum', 286, 'metal', 7, 13, 'bilinmiyor', null, 286, '?'],
  [114, 'Fl', 'Flerovyum', 289, 'metal', 7, 14, 'bilinmiyor', null, 289, '?'],
  [115, 'Mc', 'Moskovyum', 290, 'metal', 7, 15, 'bilinmiyor', null, 290, '?'],
  [116, 'Lv', 'Livermoryum', 293, 'metal', 7, 16, 'bilinmiyor', null, 293, '?'],
  [117, 'Ts', 'Tennessin', 294, 'halojen', 7, 17, 'bilinmiyor', null, 294, '?'],
  [118, 'Og', 'Oganesson', 294, 'soyGaz', 7, 18, 'bilinmiyor', null, 294, '?'],
]

/** Aufbau sırasına göre alt kabuk doldurma + bilinen istisnaların uygulanması. */
function dizilimiHesapla(atomNo) {
  const dolum = new Map()
  let kalan = atomNo
  for (const [kabuk, kapasite] of AUFBAU) {
    if (kalan <= 0) break
    const konan = Math.min(kapasite, kalan)
    dolum.set(kabuk, konan)
    kalan -= konan
  }
  const istisna = DIZILIM_ISTISNALARI[atomNo]
  if (istisna) for (const [kabuk, sayi] of Object.entries(istisna)) dolum.set(kabuk, sayi)
  // Sıfırlanan alt kabuklar dizilimde görünmemeli (örn. Pd'de 5s⁰).
  return AUFBAU.filter(([kabuk]) => dolum.get(kabuk) > 0)
    .map(([kabuk]) => ({ kabuk, sayi: dolum.get(kabuk), n: Number(kabuk[0]), tur: kabuk[1] }))
}

const USTSIMGE = { 0: '⁰', 1: '¹', 2: '²', 3: '³', 4: '⁴', 5: '⁵', 6: '⁶', 7: '⁷', 8: '⁸', 9: '⁹' }
/** 14 → "¹⁴" */
export function ustSimge(sayi) {
  return String(sayi).split('').map((k) => USTSIMGE[k] ?? k).join('')
}

/** Katman (kabuk) dağılımı: aynı baş kuantum sayısındaki elektronların toplamı. */
function katmanlariHesapla(dizilim) {
  const katman = []
  for (const alt of dizilim) katman[alt.n - 1] = (katman[alt.n - 1] || 0) + alt.sayi
  return katman.map((x) => x || 0)
}

/**
 * Değerlik elektronu.
 * Baş gruplarda en dış katmandaki elektron sayısıdır.
 * Geçiş metallerinde ns + (n-1)d elektronları birlikte sayılır — bu elektronlar
 * bağ yapımına katılabildiği için lise düzeyinde de böyle öğretilir.
 */
function degerlikHesapla(dizilim, kategori) {
  const enBuyukN = Math.max(...dizilim.map((a) => a.n))
  const disKatman = dizilim.filter((a) => a.n === enBuyukN).reduce((t, a) => t + a.sayi, 0)
  if (kategori === 'gecis') {
    const dKabugu = dizilim.find((a) => a.n === enBuyukN - 1 && a.tur === 'd')
    return disKatman + (dKabugu ? dKabugu.sayi : 0)
  }
  return disKatman
}

/** Baş gruplarda "kaç bağ yapma eğilimi var?" — oktete kaç elektron eksik/fazla. */
function bagEgilimi(element) {
  const { grup, sembol, kategori } = element
  if (sembol === 'H') return { sayi: 1, aciklama: 'Bir elektron ortaklaşarak 2 elektronlu kararlı yapıya (dublet) ulaşır.' }
  if (kategori === 'soyGaz') return { sayi: 0, aciklama: 'Değerlik katmanı dolu olduğu için normal koşullarda bağ yapma eğilimi göstermez.' }
  if (grup === 13) return { sayi: 3, aciklama: '3 değerlik elektronu vardır; genellikle 3 bağ yapar (bazen oktetini tamamlamaz).' }
  if (grup === 14) return { sayi: 4, aciklama: 'Oktete 4 elektron eksiktir; çoğunlukla 4 bağ yapar.' }
  if (grup === 15) return { sayi: 3, aciklama: 'Oktete 3 elektron eksiktir; çoğunlukla 3 bağ + 1 ortaklanmamış çift bulundurur.' }
  if (grup === 16) return { sayi: 2, aciklama: 'Oktete 2 elektron eksiktir; çoğunlukla 2 bağ + 2 ortaklanmamış çift bulundurur.' }
  if (grup === 17) return { sayi: 1, aciklama: 'Oktete 1 elektron eksiktir; çoğunlukla 1 bağ + 3 ortaklanmamış çift bulundurur.' }
  if (grup === 1) return { sayi: 1, aciklama: '1 değerlik elektronunu vererek +1 yüklü katyon olur.' }
  if (grup === 2) return { sayi: 2, aciklama: '2 değerlik elektronunu vererek +2 yüklü katyon olur.' }
  return { sayi: null, aciklama: 'Geçiş metallerinde bağ sayısı bileşiğe göre değişir; birden çok yükseltgenme basamağı gösterir.' }
}

function elementiKur(satir) {
  const [atomNo, sembol, ad, kutle, kategori, periyot, grup, hal, elektronegatiflik, kutleNo, yuk] = satir
  const dizilim = dizilimiHesapla(atomNo)
  const katmanlar = katmanlariHesapla(dizilim)
  const element = {
    atomNo,
    sembol,
    ad,
    kutle,
    kategori,
    periyot,
    grup,
    hal,
    elektronegatiflik,
    kutleNo,
    notron: kutleNo - atomNo,
    yukseltgenme: yuk === '?' ? [] : yuk.split(','),
    dizilim,
    dizilimMetni: dizilim.map((a) => `${a.kabuk}${ustSimge(a.sayi)}`).join(' '),
    katmanlar,
    blok: dizilim[dizilim.length - 1].tur,
  }
  element.degerlik = degerlikHesapla(dizilim, kategori)
  element.bagEgilimi = bagEgilimi(element)
  return element
}

export const ELEMENTLER = SATIRLAR.map(elementiKur)

/** Sembolden elemente hızlı erişim: ELEMENT_SOZLUGU.O → oksijen nesnesi */
export const ELEMENT_SOZLUGU = Object.fromEntries(ELEMENTLER.map((e) => [e.sembol, e]))

/** Atom numarasından erişim. */
export const ELEMENT_NUMARA = Object.fromEntries(ELEMENTLER.map((e) => [e.atomNo, e]))

export function elementBul(anahtar) {
  if (anahtar == null) return null
  const metin = String(anahtar).trim()
  if (/^\d+$/.test(metin)) return ELEMENT_NUMARA[Number(metin)] ?? null
  const sembolce = ELEMENT_SOZLUGU[metin[0].toUpperCase() + metin.slice(1).toLowerCase()]
  if (sembolce) return sembolce
  const kucuk = metin.toLocaleLowerCase('tr')
  return ELEMENTLER.find((e) => e.ad.toLocaleLowerCase('tr') === kucuk) ?? null
}

/** Kategori etiketleri — arayüzdeki renk anahtarı ve süzgeçler buradan beslenir. */
export const KATEGORILER = [
  { kod: 'alkali', ad: 'Alkali metal', renk: '#f97316' },
  { kod: 'toprakAlkali', ad: 'Toprak alkali metal', renk: '#f59e0b' },
  { kod: 'gecis', ad: 'Geçiş metali', renk: '#eab308' },
  { kod: 'metal', ad: 'Metal (diğer)', renk: '#84cc16' },
  { kod: 'yariMetal', ad: 'Yarı metal', renk: '#14b8a6' },
  { kod: 'ametal', ad: 'Ametal', renk: '#3b82f6' },
  { kod: 'halojen', ad: 'Halojen', renk: '#8b5cf6' },
  { kod: 'soyGaz', ad: 'Soy gaz', renk: '#ec4899' },
  { kod: 'lantanit', ad: 'Lantanit', renk: '#06b6d4' },
  { kod: 'aktinit', ad: 'Aktinit', renk: '#0ea5e9' },
]

/**
 * Bir zemin rengi üzerinde okunur metin rengini seçer.
 * WCAG bağıl parlaklık hesabıyla beyaz ve koyu metin arasından kontrastı
 * yüksek olanı döndürür — böylece sarı/yeşil hücrelerde beyaz yazı kalmaz.
 */
export function okunurMetinRengi(hex) {
  const kanal = (deger) => {
    const oran = deger / 255
    return oran <= 0.03928 ? oran / 12.92 : ((oran + 0.055) / 1.055) ** 2.4
  }
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  const parlaklik = 0.2126 * kanal(r) + 0.7152 * kanal(g) + 0.0722 * kanal(b)
  const beyazKontrast = 1.05 / (parlaklik + 0.05)
  const koyuKontrast = (parlaklik + 0.05) / 0.0561 // #101223 için
  return koyuKontrast > beyazKontrast ? '#101223' : '#ffffff'
}

for (const kategori of KATEGORILER) kategori.metin = okunurMetinRengi(kategori.renk)

export const KATEGORI_SOZLUGU = Object.fromEntries(KATEGORILER.map((k) => [k.kod, k]))

export const HAL_ADI = { kati: 'Katı', sivi: 'Sıvı', gaz: 'Gaz', bilinmiyor: 'Bilinmiyor' }

/** Metal / ametal / yarı metal üst sınıfı — bağ türü tahmininde kullanılır. */
export function metalMi(sembol) {
  const e = ELEMENT_SOZLUGU[sembol]
  if (!e) return false
  return ['alkali', 'toprakAlkali', 'gecis', 'metal', 'lantanit', 'aktinit'].includes(e.kategori)
}

export function ametalMi(sembol) {
  const e = ELEMENT_SOZLUGU[sembol]
  if (!e) return false
  return ['ametal', 'halojen', 'soyGaz'].includes(e.kategori)
}

/** Periyodik tablodaki ızgara konumu (satır, sütun). f bloğu alta iner. */
export function izgaraKonumu(element) {
  if (element.kategori === 'lantanit') return { satir: 9, sutun: element.atomNo - 57 + 3 }
  if (element.kategori === 'aktinit') return { satir: 10, sutun: element.atomNo - 89 + 3 }
  return { satir: element.periyot, sutun: element.grup }
}
