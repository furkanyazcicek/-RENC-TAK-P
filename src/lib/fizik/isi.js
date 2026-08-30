/**
 * Fizik Atlası — Isı, sıcaklık, hâl değişimi ve genleşme
 * ==================================================================
 * Temel ayrım: **sıcaklık** taneciklerin ortalama kinetik enerjisinin
 * ölçüsüdür (bir durum), **ısı** sıcaklık farkı yüzünden aktarılan
 * enerjidir (bir süreç). Bu dosyada ikisi asla aynı değişkende tutulmaz.
 */

/** Sık kullanılan maddelerin ısı verileri (SI). Kaynak: MEB müfredat tabloları. */
export const MADDE_ISI = {
  su: { ad: 'Su', ozIsi: 4180, ozkutle: 1000, erimeSicakligi: 0, kaynamaSicakligi: 100, erimeIsisi: 334000, buharlasmaIsisi: 2257000, katiOzIsi: 2090, gazOzIsi: 2010, renk: '#38bdf8' },
  demir: { ad: 'Demir', ozIsi: 450, ozkutle: 7860, erimeSicakligi: 1538, kaynamaSicakligi: 2862, erimeIsisi: 247000, buharlasmaIsisi: 6090000, renk: '#94a3b8' },
  bakir: { ad: 'Bakır', ozIsi: 385, ozkutle: 8960, erimeSicakligi: 1085, kaynamaSicakligi: 2562, erimeIsisi: 209000, buharlasmaIsisi: 4730000, renk: '#f97316' },
  aluminyum: { ad: 'Alüminyum', ozIsi: 900, ozkutle: 2700, erimeSicakligi: 660, kaynamaSicakligi: 2519, erimeIsisi: 397000, buharlasmaIsisi: 10500000, renk: '#cbd5e1' },
  kursun: { ad: 'Kurşun', ozIsi: 128, ozkutle: 11340, erimeSicakligi: 327, kaynamaSicakligi: 1749, erimeIsisi: 23000, buharlasmaIsisi: 871000, renk: '#64748b' },
  cam: { ad: 'Cam', ozIsi: 840, ozkutle: 2500, erimeSicakligi: 1400, kaynamaSicakligi: 2200, erimeIsisi: 200000, buharlasmaIsisi: 3000000, renk: '#a5f3fc' },
  zeytinyagi: { ad: 'Zeytinyağı', ozIsi: 1970, ozkutle: 910, erimeSicakligi: -6, kaynamaSicakligi: 300, erimeIsisi: 120000, buharlasmaIsisi: 400000, renk: '#facc15' },
  etilAlkol: { ad: 'Etil alkol', ozIsi: 2440, ozkutle: 789, erimeSicakligi: -114, kaynamaSicakligi: 78, erimeIsisi: 108000, buharlasmaIsisi: 855000, renk: '#c4b5fd' },
}

/** Isı: Q = m·c·ΔT (hâl değişimi yokken) */
export const isi = (kutle, ozIsi, deltaT) => kutle * ozIsi * deltaT

/** Isı sığası: C = m·c — "bu cismi 1 °C ısıtmak kaç jul ister?" */
export const isiSigasi = (kutle, ozIsi) => kutle * ozIsi

/** Hâl değişimi ısısı: Q = m·L (sıcaklık değişmez!) */
export const halDegisimIsisi = (kutle, gizliIsi) => kutle * gizliIsi

/**
 * Isıl denge sıcaklığı — karıştırılan cisimlerin ortak son sıcaklığı.
 *
 * Alınan ısı = verilen ısı. Hâl değişimi olmadığı varsayımıyla:
 *   T_denge = Σ(mᵢcᵢTᵢ) / Σ(mᵢcᵢ)
 *
 * Sonuç her zaman en düşük ve en yüksek başlangıç sıcaklığının
 * **arasında** kalmalıdır; test bunu denetler.
 */
export function isilDenge(cisimler) {
  let pay = 0
  let payda = 0
  for (const c of cisimler) {
    const sig = isiSigasi(c.kutle, c.ozIsi)
    pay += sig * c.sicaklik
    payda += sig
  }
  if (payda === 0) return null
  const denge = pay / payda
  return {
    dengeSicakligi: denge,
    ayrinti: cisimler.map((c) => ({
      ...c,
      alinanIsi: isi(c.kutle, c.ozIsi, denge - c.sicaklik),
      yon: denge > c.sicaklik ? 'aldı' : denge < c.sicaklik ? 'verdi' : 'değişmedi',
    })),
    // Alınan ve verilen ısıların toplamı sıfır olmalı (enerji korunumu).
    isiDengesi: cisimler.reduce((t, c) => t + isi(c.kutle, c.ozIsi, denge - c.sicaklik), 0),
  }
}

/**
 * Isınma eğrisi: sabit güçlü bir ısıtıcının maddeye verdiği ısıya karşı
 * sıcaklık grafiği. Erime ve kaynama sırasında sıcaklık **sabit kalır**;
 * bu düz platolar grafiğin en öğretici kısmıdır.
 *
 * @returns {{noktalar:{t:number,sicaklik:number,hal:string}[], asamalar:object[]}}
 */
export function isinmaEgrisi({ maddeKodu, kutle, baslangicSicakligi, isiticiGucu, sure, adim = 400 }) {
  const m = MADDE_ISI[maddeKodu]
  // Tanınmayan madde sessizce boş dizi döndürürse çağıran taraf "noktalar[0]"
  // diye erişip çöker. Hatayı görünür kılmak, sessizce boş dönmekten iyidir.
  if (!m) return { noktalar: [], asamalar: [], madde: null, hata: `Bilinmeyen madde: ${maddeKodu}` }

  const katiC = m.katiOzIsi ?? m.ozIsi * 0.5
  const sivic = m.ozIsi
  const gazC = m.gazOzIsi ?? m.ozIsi * 0.5

  // Aşama sınırlarını enerji cinsinden kur; sonra zamana çevir.
  const asamalar = []
  let biriken = 0
  let T = baslangicSicakligi

  if (T < m.erimeSicakligi) {
    const q = kutle * katiC * (m.erimeSicakligi - T)
    asamalar.push({ ad: 'Katı ısınıyor', hal: 'kati', baslangicQ: biriken, bitisQ: biriken + q, tBas: T, tBit: m.erimeSicakligi })
    biriken += q
    T = m.erimeSicakligi
  }
  if (T <= m.erimeSicakligi) {
    const q = kutle * m.erimeIsisi
    asamalar.push({ ad: 'Erime (sıcaklık sabit)', hal: 'erime', baslangicQ: biriken, bitisQ: biriken + q, tBas: m.erimeSicakligi, tBit: m.erimeSicakligi })
    biriken += q
  }
  {
    const q = kutle * sivic * (m.kaynamaSicakligi - m.erimeSicakligi)
    asamalar.push({ ad: 'Sıvı ısınıyor', hal: 'sivi', baslangicQ: biriken, bitisQ: biriken + q, tBas: m.erimeSicakligi, tBit: m.kaynamaSicakligi })
    biriken += q
  }
  {
    const q = kutle * m.buharlasmaIsisi
    asamalar.push({ ad: 'Kaynama (sıcaklık sabit)', hal: 'kaynama', baslangicQ: biriken, bitisQ: biriken + q, tBas: m.kaynamaSicakligi, tBit: m.kaynamaSicakligi })
    biriken += q
  }
  asamalar.push({ ad: 'Gaz ısınıyor', hal: 'gaz', baslangicQ: biriken, bitisQ: Infinity, tBas: m.kaynamaSicakligi, tBit: Infinity })

  const noktalar = []
  const dt = sure / adim
  for (let i = 0; i <= adim; i += 1) {
    const t = i * dt
    const q = isiticiGucu * t
    const asama = asamalar.find((a) => q >= a.baslangicQ && q < a.bitisQ) ?? asamalar[asamalar.length - 1]
    let sicaklik
    if (asama.hal === 'erime' || asama.hal === 'kaynama') {
      sicaklik = asama.tBas
    } else {
      const c = asama.hal === 'kati' ? katiC : asama.hal === 'sivi' ? sivic : gazC
      sicaklik = asama.tBas + (q - asama.baslangicQ) / (kutle * c)
    }
    noktalar.push({ t: Number(t.toFixed(3)), q, sicaklik, hal: asama.hal, asama: asama.ad })
  }
  return { noktalar, asamalar, madde: m }
}

/** Boyca genleşme: ΔL = L₀·λ·ΔT */
export const boycaGenlesme = (l0, lambda, deltaT) => l0 * lambda * deltaT
/** Yüzeyce genleşme: ΔA = A₀·2λ·ΔT */
export const yuzeyceGenlesme = (a0, lambda, deltaT) => a0 * 2 * lambda * deltaT
/** Hacimce genleşme: ΔV = V₀·3λ·ΔT (katılar) */
export const hacimceGenlesme = (v0, lambda, deltaT) => v0 * 3 * lambda * deltaT

/** Genleşme katsayıları (1/°C). Bimetal çifti bu farktan doğar. */
export const GENLESME_KATSAYILARI = {
  aluminyum: { ad: 'Alüminyum', lambda: 24e-6, renk: '#cbd5e1' },
  bakir: { ad: 'Bakır', lambda: 17e-6, renk: '#f97316' },
  demir: { ad: 'Demir', lambda: 12e-6, renk: '#94a3b8' },
  cam: { ad: 'Cam', lambda: 9e-6, renk: '#a5f3fc' },
  pirincMetal: { ad: 'Pirinç', lambda: 19e-6, renk: '#facc15' },
  invar: { ad: 'İnvar', lambda: 1.2e-6, renk: '#a78bfa' },
}

/**
 * Bimetal çubuğun kıvrılma yönü ve şiddeti.
 * İki metalin genleşme katsayısı farkı ne kadar büyükse kıvrılma o kadar
 * belirgindir. Isıtınca büyük katsayılı metal dışa (uzun tarafa) geçer.
 */
export function bimetal({ ustKod, altKod, uzunluk, deltaT, kalinlik = 0.002 }) {
  const ust = GENLESME_KATSAYILARI[ustKod]
  const alt = GENLESME_KATSAYILARI[altKod]
  if (!ust || !alt) return null
  const fark = ust.lambda - alt.lambda
  // Basitleştirilmiş eğrilik: κ ≈ 2·Δλ·ΔT / kalınlık
  const egrilik = (2 * fark * deltaT) / kalinlik
  return {
    ust,
    alt,
    lambdaFarki: fark,
    egrilik,
    // Kıvrılma yönü: pozitifse üst metal daha çok uzar, çubuk aşağı kıvrılır.
    yon: egrilik > 0 ? 'asagi' : egrilik < 0 ? 'yukari' : 'duz',
    ucSapmasi: (egrilik * uzunluk * uzunluk) / 2,
  }
}
