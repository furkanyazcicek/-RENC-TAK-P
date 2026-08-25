/**
 * Fizik Atlası — Öğrenci ilerlemesi (yalnızca tarayıcıda)
 * ==================================================================
 * Hiçbir veri sunucuya gitmez; her şey `localStorage` içinde durur.
 * Öğrencinin adı, e-postası veya kimliğini belirleyen bir bilgi
 * kaydedilmez — yalnızca hangi deneyi açtığı ve hangi soruyu bildiği.
 *
 * Depolama kapalıysa (gizli sekme, kota dolu) uygulama çökmemeli;
 * bütün okuma/yazma işlemleri sessizce boş sonuca düşer.
 */

const ANAHTAR = 'drkoc-fizik-ilerleme-v1'

/** Boş ilerleme kaydı — şemanın tek kaynağı. */
export function bosIlerleme() {
  return {
    surum: 1,
    tamamlanan: {},        // { bolgeKodu: { deneyKodu: true } }
    seviyeler: {},         // { bolgeKodu: { kesfet: true, ogren: true, ustalas: false } }
    rozetler: [],          // [ rozetKodu ]
    favoriler: [],         // [ 'bolge/deney' ]
    kavramPusulasi: {},    // { yanilgiKodu: { yanlis: n, dogru: n } }
    sonBolge: null,
    sonDeney: null,
    guncelleme: null,
  }
}

function guvenliOku() {
  if (typeof window === 'undefined') return bosIlerleme()
  try {
    const ham = window.localStorage.getItem(ANAHTAR)
    if (!ham) return bosIlerleme()
    const veri = JSON.parse(ham)
    // Şema değişirse eski kayıt bozulmasın: eksik alanlar tamamlanır.
    return { ...bosIlerleme(), ...veri }
  } catch {
    return bosIlerleme()
  }
}

function guvenliYaz(veri) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(ANAHTAR, JSON.stringify({ ...veri, guncelleme: Date.now() }))
  } catch {
    /* Depolama kapalı olabilir; ilerleme kaydedilmez ama uygulama çalışmaya devam eder. */
  }
}

export const ilerlemeOku = guvenliOku

/** Bir deneyi tamamlanmış işaretler ve güncel kaydı döndürür. */
export function deneyiTamamla(bolgeKodu, deneyKodu) {
  const v = guvenliOku()
  v.tamamlanan[bolgeKodu] = { ...(v.tamamlanan[bolgeKodu] ?? {}), [deneyKodu]: true }
  v.sonBolge = bolgeKodu
  v.sonDeney = deneyKodu
  guvenliYaz(v)
  return v
}

/** Öğrenme seviyesini (keşfet / öğren / ustalaş) tamamlanmış işaretler. */
export function seviyeTamamla(bolgeKodu, seviye) {
  const v = guvenliOku()
  v.seviyeler[bolgeKodu] = { ...(v.seviyeler[bolgeKodu] ?? {}), [seviye]: true }
  guvenliYaz(v)
  return v
}

/** Son bakılan yeri kaydeder — "kaldığın yerden devam et" için. */
export function konumKaydet(bolgeKodu, deneyKodu = null) {
  const v = guvenliOku()
  v.sonBolge = bolgeKodu
  v.sonDeney = deneyKodu
  guvenliYaz(v)
  return v
}

/** Favori deneyi ekler/çıkarır. */
export function favoriDegistir(bolgeKodu, deneyKodu) {
  const v = guvenliOku()
  const kod = `${bolgeKodu}/${deneyKodu}`
  v.favoriler = v.favoriler.includes(kod)
    ? v.favoriler.filter((f) => f !== kod)
    : [...v.favoriler, kod]
  guvenliYaz(v)
  return v
}

export function favoriMi(ilerleme, bolgeKodu, deneyKodu) {
  return ilerleme.favoriler.includes(`${bolgeKodu}/${deneyKodu}`)
}

/**
 * Kavram Pusulası: öğrencinin hangi yanılgıda takıldığını izler.
 * Doğru cevap verdiğinde puanı düşer, yanlışta artar. Amaç ceza değil,
 * "şu konuya bir daha bak" yönlendirmesi yapmaktır.
 */
export function kavramKaydet(yanilgiKodu, dogruMu) {
  const v = guvenliOku()
  const mevcut = v.kavramPusulasi[yanilgiKodu] ?? { yanlis: 0, dogru: 0 }
  if (dogruMu) mevcut.dogru += 1
  else mevcut.yanlis += 1
  v.kavramPusulasi[yanilgiKodu] = mevcut
  guvenliYaz(v)
  return v
}

/** Rozet kazandırır (aynı rozet iki kez eklenmez). */
export function rozetVer(rozetKodu) {
  const v = guvenliOku()
  if (!v.rozetler.includes(rozetKodu)) {
    v.rozetler = [...v.rozetler, rozetKodu]
    guvenliYaz(v)
  }
  return v
}

/**
 * Bir bölgenin tamamlanma yüzdesi.
 * Deneyler ve üç öğrenme seviyesi birlikte sayılır; böylece yalnızca
 * "aç-kapa" yapan öğrenci %100 göremez.
 */
export function bolgeYuzdesi(ilerleme, bolgeKodu, toplamDeney) {
  const yapilan = Object.keys(ilerleme.tamamlanan[bolgeKodu] ?? {}).length
  const seviye = ilerleme.seviyeler[bolgeKodu] ?? {}
  const seviyePuani = ['kesfet', 'ogren', 'ustalas'].filter((s) => seviye[s]).length
  const toplam = toplamDeney + 3
  if (toplam === 0) return 0
  return Math.min(100, Math.round(((yapilan + seviyePuani) / toplam) * 100))
}

/** Bütün atlasın tamamlanma yüzdesi. */
export function genelYuzde(ilerleme, bolgeler) {
  if (!bolgeler.length) return 0
  const toplam = bolgeler.reduce((t, b) => t + bolgeYuzdesi(ilerleme, b.kod, b.deneySayisi ?? 1), 0)
  return Math.round(toplam / bolgeler.length)
}

/**
 * İlerlemeyi tamamen siler.
 * Bilinçli olarak onay parametresi ister: yanlışlıkla çağrılıp öğrencinin
 * emeğini silmesin. Arayüz ayrıca ayrı bir onay ekranı gösterir.
 */
export function ilerlemeyiSil(onay) {
  if (onay !== 'EVET-SIL') return false
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.removeItem(ANAHTAR)
    return true
  } catch {
    return false
  }
}
