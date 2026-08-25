/**
 * Fizik Atlası — Atış hareketleri
 * ==================================================================
 * Serbest düşme, düşey atışlar, yatay atış ve eğik atış.
 *
 * İki ayrı model vardır ve **birbirine karıştırılmaz**:
 *  1. İdeal model (hava direnci yok) — kapalı formüllerle çözülür,
 *     menzil/tepe noktası/uçuş süresi tam değerlerdir.
 *  2. Dirençli model — analitik formülü yoktur; sayısal integrasyonla
 *     (RK4) çözülür ve yalnızca **nitel karşılaştırma** için sunulur.
 *     Bu modelin sonuçlarına ideal formüller uygulanmaz.
 */

import { G_MUFREDAT } from './hareket.js'

const rad = (d) => (d * Math.PI) / 180

/**
 * İdeal eğik/yatay atış çözümü.
 * Yatay atış = açı 0, düşey atış = açı 90 (veya −90) özel hâlleridir;
 * hepsi tek denklem takımından çıkar, ayrı formül ezberi gerekmez.
 *
 * @param {object} p
 * @param {number} p.v0 İlk hız (m/s)
 * @param {number} p.aciDerece Yatayla yapılan açı (derece)
 * @param {number} p.y0 Başlangıç yüksekliği (m)
 * @param {number} p.g Yer çekimi ivmesi (m/s²)
 */
export function idealAtis({ v0, aciDerece, y0 = 0, g = G_MUFREDAT }) {
  const a = rad(aciDerece)
  const vx = v0 * Math.cos(a)
  const vy0 = v0 * Math.sin(a)

  // Tepe noktasına kadar geçen süre: düşey hız sıfırlanınca.
  const tepeSuresi = vy0 > 0 ? vy0 / g : 0
  const tepeYuksekligi = y0 + (vy0 > 0 ? (vy0 * vy0) / (2 * g) : 0)

  // y(t) = y0 + vy0·t − ½gt² = 0 → uçuş süresi (pozitif kök)
  const disk = vy0 * vy0 + 2 * g * y0
  const ucusSuresi = disk >= 0 ? (vy0 + Math.sqrt(disk)) / g : 0
  const menzil = vx * ucusSuresi

  // Yere çarpma anındaki hız bileşenleri.
  const carpmaVy = vy0 - g * ucusSuresi
  const carpmaHizi = Math.hypot(vx, carpmaVy)

  return {
    vx,
    vy0,
    tepeSuresi,
    tepeYuksekligi,
    ucusSuresi,
    menzil,
    carpmaVy,
    carpmaHizi,
    carpmaAcisi: (Math.atan2(carpmaVy, vx) * 180) / Math.PI,
  }
}

/** İdeal modelde t anındaki durum. */
export function idealDurum({ v0, aciDerece, y0 = 0, g = G_MUFREDAT }, t) {
  const a = rad(aciDerece)
  const vx = v0 * Math.cos(a)
  const vy0 = v0 * Math.sin(a)
  return {
    t,
    x: vx * t,
    y: y0 + vy0 * t - 0.5 * g * t * t,
    vx,
    vy: vy0 - g * t,
    ax: 0,
    ay: -g,
  }
}

/** İdeal yörünge noktaları — yere değene kadar. */
export function idealYorunge(p, adim = 240) {
  const { ucusSuresi } = idealAtis(p)
  const noktalar = []
  const dt = ucusSuresi / adim
  for (let i = 0; i <= adim; i += 1) {
    noktalar.push(idealDurum(p, i * dt))
  }
  return noktalar
}

/**
 * Hava dirençli yörünge — RK4 ile sayısal çözüm.
 *
 * Direnç modeli: F_d = −k·|v|·v (hıza karesiyle bağlı sürükleme).
 * `k` katsayısı kütleye bölünmüş biçimde verilir (birim: 1/m).
 * Bu model gerçek bir rüzgâr tüneli hesabı değildir; amacı öğrenciye
 * "menzil kısalır, yörünge simetrisini kaybeder, iniş açısı diklesir"
 * gerçeğini göstermektir.
 */
export function direncliYorunge({ v0, aciDerece, y0 = 0, g = G_MUFREDAT, k = 0.02 }, dt = 0.004, maksAdim = 20000) {
  const a = rad(aciDerece)
  let durum = { x: 0, y: y0, vx: v0 * Math.cos(a), vy: v0 * Math.sin(a) }
  const noktalar = [{ t: 0, ...durum, ax: 0, ay: -g }]

  const turev = (s) => {
    const hizBuyuklugu = Math.hypot(s.vx, s.vy)
    return {
      x: s.vx,
      y: s.vy,
      vx: -k * hizBuyuklugu * s.vx,
      vy: -g - k * hizBuyuklugu * s.vy,
    }
  }
  const ilerlet = (s, d, h) => ({
    x: s.x + d.x * h, y: s.y + d.y * h, vx: s.vx + d.vx * h, vy: s.vy + d.vy * h,
  })

  let t = 0
  for (let i = 0; i < maksAdim; i += 1) {
    const k1 = turev(durum)
    const k2 = turev(ilerlet(durum, k1, dt / 2))
    const k3 = turev(ilerlet(durum, k2, dt / 2))
    const k4 = turev(ilerlet(durum, k3, dt))
    const yeni = {
      x: durum.x + (dt / 6) * (k1.x + 2 * k2.x + 2 * k3.x + k4.x),
      y: durum.y + (dt / 6) * (k1.y + 2 * k2.y + 2 * k3.y + k4.y),
      vx: durum.vx + (dt / 6) * (k1.vx + 2 * k2.vx + 2 * k3.vx + k4.vx),
      vy: durum.vy + (dt / 6) * (k1.vy + 2 * k2.vy + 2 * k3.vy + k4.vy),
    }
    t += dt
    if (yeni.y < 0) {
      // Yere değdiği anı doğrusal ara değerle bularak yörüngeyi tam bitir.
      const oran = durum.y / (durum.y - yeni.y)
      noktalar.push({
        t: t - dt + dt * oran,
        x: durum.x + (yeni.x - durum.x) * oran,
        y: 0,
        vx: durum.vx + (yeni.vx - durum.vx) * oran,
        vy: durum.vy + (yeni.vy - durum.vy) * oran,
      })
      break
    }
    durum = yeni
    // Grafiği şişirmemek için her 5 adımda bir örnek al.
    if (i % 5 === 0) noktalar.push({ t, ...durum })
  }

  const son = noktalar[noktalar.length - 1]
  const tepe = noktalar.reduce((en, n) => (n.y > en.y ? n : en), noktalar[0])
  return {
    noktalar,
    menzil: son.x,
    ucusSuresi: son.t,
    tepeYuksekligi: tepe.y,
    tepeSuresi: tepe.t,
    carpmaHizi: Math.hypot(son.vx, son.vy),
    carpmaAcisi: (Math.atan2(son.vy, son.vx) * 180) / Math.PI,
  }
}

/**
 * Serbest düşmede t anındaki yükseklik ve hız.
 * Düşey aşağı atış v0 > 0 verilerek elde edilir (aşağı yön pozitif).
 */
export function serbestDusme({ h0, v0 = 0, g = G_MUFREDAT }, t) {
  return {
    t,
    yukseklik: h0 - (v0 * t + 0.5 * g * t * t),
    hiz: v0 + g * t,
    yolAlinan: v0 * t + 0.5 * g * t * t,
  }
}

/** Serbest düşmede yere varış süresi ve hızı. */
export function dusmeSuresi({ h0, v0 = 0, g = G_MUFREDAT }) {
  const t = (-v0 + Math.sqrt(v0 * v0 + 2 * g * h0)) / g
  return { sure: t, varisHizi: v0 + g * t }
}

/**
 * En büyük menzili veren açı — ideal modelde ve y₀ = 0 iken 45°'dir.
 * Başlangıç yüksekliği varsa optimum açı 45°'nin altına düşer; modül
 * bunu deneyle keşfettirir, formül vermez.
 */
export function enIyiAci({ v0, y0 = 0, g = G_MUFREDAT }) {
  let enIyi = { aci: 0, menzil: 0 }
  for (let a = 1; a <= 89; a += 0.5) {
    const { menzil } = idealAtis({ v0, aciDerece: a, y0, g })
    if (menzil > enIyi.menzil) enIyi = { aci: a, menzil }
  }
  return enIyi
}
