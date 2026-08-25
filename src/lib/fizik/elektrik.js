/**
 * Fizik Atlası — Elektrostatik
 * ==================================================================
 * Coulomb kuvveti, elektrik alan, üst üste binme ilkesi, elektriklenme
 * yolları ve elektroskop.
 *
 * Önemli pedagojik sınır: alan çizgileri **yüklü parçacığın izlediği
 * yörünge değildir**; belirli bir noktadaki kuvvetin yönünü gösteren
 * yardımcı çizgilerdir. Arayüz bunu açıkça yazar.
 */

/** Coulomb sabiti (N·m²/C²) */
export const K_COULOMB = 9e9
/** Temel yük (C) */
export const E_YUKU = 1.602e-19

/**
 * İki nokta yük arasındaki Coulomb kuvvetinin büyüklüğü:
 *   F = k·|q₁·q₂| / r²
 * Uzaklık sıfırsa fiziksel model çöker; `null` döneriz.
 */
export function coulombBuyuklugu(q1, q2, r) {
  if (!r || r <= 0) return null
  return (K_COULOMB * Math.abs(q1 * q2)) / (r * r)
}

/**
 * İki yük arasındaki kuvvet vektörü — q2'nin q1 üzerine uyguladığı.
 * Aynı işaretli yüklerde itme (birbirinden uzağa), zıt işaretlide çekme.
 */
export function coulombVektoru(yuk1, yuk2) {
  const dx = yuk1.x - yuk2.x
  const dy = yuk1.y - yuk2.y
  const r = Math.hypot(dx, dy)
  if (r < 1e-9) return { x: 0, y: 0, buyukluk: 0, r: 0 }
  const F = (K_COULOMB * Math.abs(yuk1.q * yuk2.q)) / (r * r)
  // Çarpım pozitifse (aynı işaret) itme: yön q2'den q1'e doğru.
  const isaret = yuk1.q * yuk2.q > 0 ? 1 : -1
  return { x: isaret * F * (dx / r), y: isaret * F * (dy / r), buyukluk: F, r }
}

/**
 * Bir yüke etkiyen toplam kuvvet (üst üste binme ilkesi).
 * Kuvvetler vektörel toplanır; skaler toplama yapılmaz.
 */
export function toplamKuvvet(hedef, digerYukler) {
  let x = 0
  let y = 0
  for (const y2 of digerYukler) {
    if (y2 === hedef) continue
    const F = coulombVektoru(hedef, y2)
    x += F.x
    y += F.y
  }
  return { x, y, buyukluk: Math.hypot(x, y) }
}

/**
 * Bir noktadaki elektrik alan vektörü: E = k·q / r²
 * Yön, pozitif deneme yükünün hissedeceği kuvvet yönüdür: pozitif
 * yükten dışa, negatif yüke içe doğru.
 */
export function elektrikAlan(nokta, yukler) {
  let x = 0
  let y = 0
  for (const yuk of yukler) {
    const dx = nokta.x - yuk.x
    const dy = nokta.y - yuk.y
    const r = Math.hypot(dx, dy)
    if (r < 1e-6) continue // Yükün tam üstünde alan tanımsızdır.
    const E = (K_COULOMB * yuk.q) / (r * r)
    x += E * (dx / r)
    y += E * (dy / r)
  }
  return { x, y, buyukluk: Math.hypot(x, y) }
}

/** Elektrik alandaki yüke etkiyen kuvvet: F = q·E */
export const alandakiKuvvet = (q, alan) => ({ x: q * alan.x, y: q * alan.y, buyukluk: Math.abs(q) * alan.buyukluk })

/**
 * Alan çizgisi üretir: bir başlangıç noktasından başlayıp alan yönünde
 * küçük adımlarla ilerler. Pozitif yükten çıkar, negatif yükte biter
 * veya çerçeveden çıkar.
 *
 * @param {{x:number,y:number}} baslangic
 * @param {Array} yukler
 * @param {number} yon +1 pozitiften dışa, −1 negatife doğru geriye
 */
export function alanCizgisi(baslangic, yukler, yon = 1, { adim = 4, maksAdim = 900, sinirlar = { x0: -1e5, y0: -1e5, x1: 1e5, y1: 1e5 } } = {}) {
  const noktalar = [{ ...baslangic }]
  let p = { ...baslangic }
  for (let i = 0; i < maksAdim; i += 1) {
    const E = elektrikAlan(p, yukler)
    if (E.buyukluk < 1e-12) break
    // Yalnızca yönü kullanırız; adım boyu sabit tutulur ki çizgi düzgün olsun.
    p = { x: p.x + (yon * adim * E.x) / E.buyukluk, y: p.y + (yon * adim * E.y) / E.buyukluk }
    noktalar.push({ ...p })
    if (p.x < sinirlar.x0 || p.x > sinirlar.x1 || p.y < sinirlar.y0 || p.y > sinirlar.y1) break
    // Bir yüke yeterince yaklaştıysak çizgiyi orada bitir.
    const yakin = yukler.some((y) => Math.hypot(p.x - y.x, p.y - y.y) < adim * 1.6)
    if (yakin) break
  }
  return noktalar
}

/**
 * Elektriklenme yolları. Her yolun sonunda cisimlerin yükü ne olur?
 *
 *  - Sürtünme: elektron alışverişi, iki cisim **zıt** işaretle yüklenir.
 *  - Dokunma: iletkenlerde yük toplamı korunarak paylaşılır. Özdeş
 *    küreler eşit paylaşır.
 *  - Etki (indüksiyon): yük aktarımı yok, yalnızca ayrışma olur; cisim
 *    topraklanırsa yükleyici yüke **zıt** işaretle kalıcı yüklenir.
 */
export function dokunmaylaPaylasim(yukler) {
  const toplam = yukler.reduce((t, y) => t + y, 0)
  const pay = toplam / yukler.length
  return { toplam, sonYukler: yukler.map(() => pay) }
}

/**
 * Etki ile elektriklenme + topraklama sonucu.
 * Topraklanan cisim, yaklaştırılan çubuğun yüküne **zıt** işaretle
 * yüklenir. Çubuk hiç yük vermez; yalnızca elektronları iter/çeker.
 */
export function etkiyleElektriklenme({ cubugunYuku, topraklandi }) {
  if (!topraklandi) {
    return {
      netYuk: 0,
      aciklama: 'Yük ayrıştı ama toplam net yük sıfır kaldı. Çubuk uzaklaşınca yükler yeniden dağılır.',
      kalici: false,
    }
  }
  const isaret = cubugunYuku > 0 ? -1 : 1
  return {
    netYuk: isaret,
    aciklama:
      cubugunYuku > 0
        ? 'Pozitif çubuk elektronları çekti; topraktan elektron geldi. Cisim NEGATİF yüklendi.'
        : 'Negatif çubuk elektronları itti; elektronlar toprağa kaçtı. Cisim POZİTİF yüklendi.',
    kalici: true,
  }
}

/**
 * Elektroskop yapraklarının açılma miktarı.
 * Yaprakların ikisi de aynı işaretle yüklendiği için birbirini iter;
 * açı net yükün büyüklüğüyle artar, işaretinden bağımsızdır.
 * Nötr elektroskopa yüklü cisim yaklaştırılırsa yapraklar yine açılır
 * (yük ayrışması) — bu yüzden açılma tek başına yükün işaretini vermez.
 */
export function elektroskopAcilmasi({ netYuk, yaklastirilanYuk = 0 }) {
  // Yaprakların yükü: kalıcı net yük + etkiyle aşağı itilen/çekilen yük.
  const yapraktakiYuk = netYuk + (netYuk === 0 ? Math.abs(yaklastirilanYuk) * 0.6 * Math.sign(-yaklastirilanYuk) : -yaklastirilanYuk * 0.4)
  const buyukluk = Math.abs(yapraktakiYuk)
  return {
    yapraktakiYuk,
    aciDerece: Math.min(42, buyukluk * 12),
    isaretBelliMi: netYuk !== 0 && yaklastirilanYuk === 0,
  }
}

/** Yükün elektron sayısı karşılığı: n = q / e */
export const elektronSayisi = (yukCoulomb) => yukCoulomb / E_YUKU
