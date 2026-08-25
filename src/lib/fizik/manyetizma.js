/**
 * Fizik Atlası — Manyetizma
 * ==================================================================
 * Mıknatıs alanı, akım geçen telin alanı, bobin/elektromıknatıs, sağ el
 * kuralı ve indüksiyon.
 *
 * Pedagojik sınır: manyetik alan çizgileri **fiziksel ip değildir**.
 * Uzayın her noktasında bir alan vektörü vardır; çizgiler bu vektörlerin
 * teğet eğrileridir. Arayüz bunu açıkça yazar ve çizgi yoğunluğunu alan
 * şiddetiyle orantılı çizer.
 */

/** Boşluğun manyetik geçirgenliği (T·m/A) */
export const MU0 = 4 * Math.PI * 1e-7

/**
 * Sonsuz uzun düz telin r uzaklığındaki alan şiddeti:
 *   B = μ₀·I / (2π·r)
 * Uzaklıkla **ters** orantılıdır (1/r), noktasal kaynak gibi 1/r² değil.
 */
export function telinAlani(akim, uzaklik) {
  if (!uzaklik || uzaklik <= 0) return null
  return (MU0 * Math.abs(akim)) / (2 * Math.PI * uzaklik)
}

/**
 * Düz telin bir noktadaki alan vektörü (tel z ekseni boyunca, ekran
 * düzlemine dik). Sağ el kuralı: başparmak akım yönünde, parmaklar
 * alanın dolanma yönünü verir. Akım ekrandan dışarıysa (+z) alan saat
 * yönünün tersinedir.
 */
export function telAlanVektoru({ telX, telY, akim }, nokta) {
  const dx = nokta.x - telX
  const dy = nokta.y - telY
  const r = Math.hypot(dx, dy)
  if (r < 1e-9) return { x: 0, y: 0, buyukluk: 0 }
  const B = (MU0 * akim) / (2 * Math.PI * r)
  // Teğet yön: radyal vektörün 90° döndürülmüşü.
  return { x: (-dy / r) * B, y: (dx / r) * B, buyukluk: Math.abs(B) }
}

/** Birden çok telin toplam alanı (üst üste binme). */
export function toplamAlan(teller, nokta) {
  let x = 0
  let y = 0
  for (const t of teller) {
    const B = telAlanVektoru(t, nokta)
    x += B.x
    y += B.y
  }
  return { x, y, buyukluk: Math.hypot(x, y) }
}

/**
 * Bobinin (solenoid) içindeki alan: B = μ₀·n·I
 * n = sarım yoğunluğu (sarım / metre). Sarım sayısı ve akım arttıkça
 * elektromıknatıs güçlenir — deney tam olarak bunu ölçtürür.
 */
export function bobinAlani({ sarimSayisi, uzunluk, akim }) {
  if (!uzunluk || uzunluk <= 0) return null
  const n = sarimSayisi / uzunluk
  return { sarimYogunlugu: n, alan: MU0 * n * akim }
}

/** Dairesel akım halkasının merkezindeki alan: B = μ₀·I / (2R) */
export function halkaMerkezAlani(akim, yaricap) {
  if (!yaricap || yaricap <= 0) return null
  return (MU0 * akim) / (2 * yaricap)
}

/**
 * Çubuk mıknatısın alanı — iki manyetik kutbu (kuzey +, güney −) nokta
 * kaynak gibi alan basit dipol modeli. Gerçek mıknatısta izole kutup
 * yoktur; bu yalnızca **çizim için** bir yaklaşımdır ve arayüz bunu belirtir.
 */
export function miknatisAlani(miknatislar, nokta) {
  let x = 0
  let y = 0
  for (const m of miknatislar) {
    const yari = m.uzunluk / 2
    const ac = (m.aciDerece * Math.PI) / 180
    const kutuplar = [
      { x: m.x + yari * Math.cos(ac), y: m.y + yari * Math.sin(ac), guc: m.guc },   // Kuzey
      { x: m.x - yari * Math.cos(ac), y: m.y - yari * Math.sin(ac), guc: -m.guc },  // Güney
    ]
    for (const k of kutuplar) {
      const dx = nokta.x - k.x
      const dy = nokta.y - k.y
      const r = Math.hypot(dx, dy)
      if (r < 1e-6) continue
      const B = k.guc / (r * r)
      x += B * (dx / r)
      y += B * (dy / r)
    }
  }
  return { x, y, buyukluk: Math.hypot(x, y) }
}

/** Pusula iğnesinin gösterdiği yön (derece). Alan yoksa kuzeyi gösterir. */
export function pusulaYonu(alan, dunyaAlani = { x: 0, y: 1, buyukluk: 1 }) {
  const toplam = { x: alan.x + dunyaAlani.x * 5e-5, y: alan.y + dunyaAlani.y * 5e-5 }
  const b = Math.hypot(toplam.x, toplam.y)
  if (b < 1e-15) return 90
  return (Math.atan2(toplam.y, toplam.x) * 180) / Math.PI
}

/**
 * Akım taşıyan telin manyetik alanda gördüğü kuvvet:
 *   F = B·I·L·sinθ
 * θ, akım yönü ile alan arasındaki açıdır. Paralel olduklarında (θ = 0)
 * kuvvet sıfırdır — "alan var, akım var ama kuvvet yok" durumu.
 */
export function teleEtkiyenKuvvet({ alan, akim, uzunluk, aciDerece = 90 }) {
  return alan * akim * uzunluk * Math.sin((aciDerece * Math.PI) / 180)
}

/**
 * Sağ el kuralı — üç dik yön arasındaki ilişki (F = I L × B).
 * Girdi: akım ve alan yönleri ('sag','sol','yukari','asagi','disari','iceri')
 * Çıktı: kuvvetin yönü. Öğrenci elini kullanmadan önce tahmin eder,
 * sonra sonucu görür.
 */
const YON_VEKTORU = {
  sag: [1, 0, 0], sol: [-1, 0, 0],
  yukari: [0, 1, 0], asagi: [0, -1, 0],
  disari: [0, 0, 1], iceri: [0, 0, -1],
}
const VEKTOR_ADI = (v) => {
  const [x, y, z] = v
  if (Math.abs(x) > 0.5) return x > 0 ? 'sag' : 'sol'
  if (Math.abs(y) > 0.5) return y > 0 ? 'yukari' : 'asagi'
  if (Math.abs(z) > 0.5) return z > 0 ? 'disari' : 'iceri'
  return 'yok'
}
export function sagElKurali(akimYonu, alanYonu) {
  const I = YON_VEKTORU[akimYonu]
  const B = YON_VEKTORU[alanYonu]
  if (!I || !B) return null
  // Vektörel çarpım I × B
  const F = [
    I[1] * B[2] - I[2] * B[1],
    I[2] * B[0] - I[0] * B[2],
    I[0] * B[1] - I[1] * B[0],
  ]
  const ad = VEKTOR_ADI(F)
  return {
    yon: ad,
    paralel: ad === 'yok',
    aciklama: ad === 'yok'
      ? 'Akım ile alan aynı doğrultuda. sin0° = 0 olduğu için kuvvet oluşmaz.'
      : `Sağ elin parmakları akım yönünde (${akimYonu}), avuç içi alan yönüne (${alanYonu}) bakacak şekilde tutulursa başparmak ${ad} yönünü gösterir.`,
  }
}

/**
 * Manyetik akı: Φ = B·A·cosθ (weber)
 * θ, alan ile yüzeyin normali arasındaki açıdır.
 */
export const manyetikAki = (alan, yuzeyAlani, aciDerece = 0) =>
  alan * yuzeyAlani * Math.cos((aciDerece * Math.PI) / 180)

/**
 * İndüksiyon EMK'sı (Faraday + Lenz): ε = −N·ΔΦ/Δt
 *
 * Eksi işaret Lenz yasasıdır: indüksiyon akımı, kendisini doğuran
 * değişime karşı koyar. Mıknatıs yaklaşırken akı artar → indüksiyon
 * akımı bunu azaltacak yönde akar; uzaklaşırken tersi olur. Bu yüzden
 * hareket yönü değişince akımın yönü de değişir.
 */
export function indüksiyonEmk({ sarimSayisi, akiIlk, akiSon, sure }) {
  if (!sure || sure <= 0) return null
  const deltaAki = akiSon - akiIlk
  const emk = -sarimSayisi * (deltaAki / sure)
  return {
    deltaAki,
    emk,
    buyukluk: Math.abs(emk),
    yon: deltaAki > 0 ? 'saatYonu' : deltaAki < 0 ? 'saatTersi' : 'yok',
    aciklama: deltaAki > 0
      ? 'Akı artıyor. Lenz yasasına göre indüksiyon akımı bu artışa karşı koyacak yönde akar.'
      : deltaAki < 0
        ? 'Akı azalıyor. İndüksiyon akımı azalmayı engellemeye çalışacak yönde akar.'
        : 'Akı değişmiyor; indüksiyon akımı oluşmaz. Akım için hareket ya da değişim şart.',
  }
}

/** Hareket eden mıknatısın bobinde doğurduğu ani EMK (sayısal türev). */
export function miknatisIndüksiyonu({ sarimSayisi, bobinAlaniM2, miknatisGucu, uzaklik, hiz, dt = 0.01 }) {
  const aki = (r) => (r <= 0 ? 0 : ((miknatisGucu / (r * r)) * bobinAlaniM2))
  const akiIlk = aki(uzaklik)
  const akiSon = aki(Math.max(0.001, uzaklik - hiz * dt))
  return indüksiyonEmk({ sarimSayisi, akiIlk, akiSon, sure: dt })
}
