/**
 * Fizik Atlası — Bir boyutlu hareket (kinematik)
 * ==================================================================
 * Düzgün doğrusal hareket ve sabit ivmeli hareket. Simülasyon zamanı
 * ekran yenileme hızından bağımsızdır: konum doğrudan **analitik**
 * denklemle hesaplanır, kare kare toplama yapılmaz. Böylece 30 fps'te
 * de 120 fps'te de aynı fizik çıkar.
 */

/** Yer çekimi ivmesi — Türkiye müfredatında yaygın olarak 10 m/s² alınır. */
export const G_MUFREDAT = 10
/** Gerçek ortalama değer; "gerçek dünya" karşılaştırmaları için. */
export const G_GERCEK = 9.81

/** Konum: x = x₀ + v₀t + ½at² */
export const konum = (x0, v0, a, t) => x0 + v0 * t + 0.5 * a * t * t

/** Hız: v = v₀ + at */
export const hiz = (v0, a, t) => v0 + a * t

/** Yer değiştirme: Δx = v₀t + ½at² */
export const yerDegistirme = (v0, a, t) => v0 * t + 0.5 * a * t * t

/** Ortalama hız = yer değiştirme / zaman (vektörel) */
export const ortalamaHiz = (deltaX, deltaT) => (deltaT === 0 ? 0 : deltaX / deltaT)

/** Ortalama sürat = alınan yol / zaman (skaler, negatif olamaz) */
export const ortalamaSurat = (yol, deltaT) => (deltaT === 0 ? 0 : Math.abs(yol) / deltaT)

/** Zamansız denklem: v² = v₀² + 2aΔx */
export const hizKaresi = (v0, a, deltaX) => v0 * v0 + 2 * a * deltaX

/**
 * Hız sıfırlanana kadar geçen süre — dönüş anı.
 * İvme sıfırsa cisim asla dönmez; `null` döner.
 */
export function donusAni(v0, a) {
  if (a === 0) return null
  const t = -v0 / a
  return t > 0 ? t : null
}

/**
 * Alınan yol. Cisim yön değiştirdiyse yer değiştirmenin mutlak değeri
 * yolu vermez; dönüş anı ikiye bölünerek her parça ayrı toplanır.
 * Bu ayrım TYT'de en sık hata yapılan yerdir.
 */
export function alinanYol(v0, a, t) {
  const donus = donusAni(v0, a)
  if (donus === null || donus >= t) return Math.abs(yerDegistirme(v0, a, t))
  const birinci = Math.abs(yerDegistirme(v0, a, donus))
  const ikinci = Math.abs(yerDegistirme(0, a, t - donus))
  return birinci + ikinci
}

/**
 * Grafik verisi üretir: konum–zaman, hız–zaman, ivme–zaman.
 * Adım sayısı sabittir; simülasyon hızından etkilenmez.
 */
export function grafikVerisi({ x0 = 0, v0 = 0, a = 0, sure = 10, adim = 200 }) {
  const veriler = []
  const dt = sure / adim
  for (let i = 0; i <= adim; i += 1) {
    const t = i * dt
    veriler.push({
      t: Number(t.toFixed(4)),
      x: konum(x0, v0, a, t),
      v: hiz(v0, a, t),
      a,
    })
  }
  return veriler
}

/**
 * Hız–zaman grafiğinin altında kalan **işaretli** alan.
 * Trapez yöntemiyle sayısal olarak bulunur ve analitik yer değiştirmeye
 * eşit çıkmalıdır — "grafik altındaki alan = yer değiştirme" iddiasının
 * testi budur.
 */
export function hizZamanAlani(v0, a, t0, t1, adim = 2000) {
  const dt = (t1 - t0) / adim
  let alan = 0
  for (let i = 0; i < adim; i += 1) {
    const ta = t0 + i * dt
    const tb = ta + dt
    alan += ((hiz(v0, a, ta) + hiz(v0, a, tb)) / 2) * dt
  }
  return alan
}

/**
 * Konum–zaman grafiğinin bir andaki eğimi (sayısal türev).
 * Analitik hızla karşılaştırıldığında aynı çıkmalıdır.
 */
export function konumEgimi(x0, v0, a, t, h = 1e-5) {
  return (konum(x0, v0, a, t + h) - konum(x0, v0, a, t - h)) / (2 * h)
}

/** Hız–zaman grafiğinin eğimi = ivme. */
export function hizEgimi(v0, a, t, h = 1e-5) {
  return (hiz(v0, a, t + h) - hiz(v0, a, t - h)) / (2 * h)
}

/**
 * Newton II: net kuvvetten ivme. Kütle sıfır olamaz — fiziksel olarak
 * anlamsız girdi sessizce 0 ivmeye dönüşmez, `null` döner.
 */
export function ivmeHesapla(netKuvvet, kutle) {
  if (!kutle || kutle <= 0) return null
  return netKuvvet / kutle
}

/**
 * Sürtünmeli yatay yüzeyde cismin durumu.
 *
 * Statik sürtünme bir **tepki** kuvvetidir: uygulanan kuvvet kadar
 * büyür, ancak μs·N sınırını aşamaz. Bu sınır aşılmadıkça cisim durur
 * ve sürtünme kuvveti μs·N değil, uygulanan kuvvete eşittir. Öğrencinin
 * en sık kaçırdığı nokta budur.
 *
 * @returns {{hareketVar:boolean, surtunme:number, netKuvvet:number,
 *            ivme:number, statikSinir:number, normal:number}}
 */
export function surtunmeliHareket({ kutle, uygulanan, muS, muK, g = G_MUFREDAT, aciDerece = 0 }) {
  const acirad = (aciDerece * Math.PI) / 180
  // Eğik düzlemde normal kuvvet ağırlığın dik bileşenidir.
  const normal = kutle * g * Math.cos(acirad)
  // Ağırlığın eğim boyunca aşağı çeken bileşeni.
  const egimBileseni = kutle * g * Math.sin(acirad)
  const statikSinir = muS * normal
  const kinetik = muK * normal

  // Sürtünme dışındaki kuvvetlerin eğim boyunca toplamı (yukarı yönü +).
  const itici = uygulanan - egimBileseni

  if (Math.abs(itici) <= statikSinir) {
    // Statik sürtünme yeter: cisim durur, sürtünme tam dengeler.
    return {
      hareketVar: false,
      surtunme: -itici, // İtici kuvvete zıt, ona eşit büyüklükte.
      netKuvvet: 0,
      ivme: 0,
      statikSinir,
      kinetik,
      normal,
      egimBileseni,
    }
  }

  const yon = Math.sign(itici)
  const surtunme = -yon * kinetik
  const netKuvvet = itici + surtunme
  return {
    hareketVar: true,
    surtunme,
    netKuvvet,
    ivme: netKuvvet / kutle,
    statikSinir,
    kinetik,
    normal,
    egimBileseni,
  }
}
