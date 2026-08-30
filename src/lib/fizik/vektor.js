/**
 * Fizik Atlası — Vektör matematiği
 * ==================================================================
 * Vektör Laboratuvarı, Kuvvet Masası, Atışlar ve Elektrostatik
 * modüllerinin ortak çekirdeği. Tüm açılar **derece** cinsinden dışarı
 * verilir (öğrenci derece ile düşünür), iç hesap radyanla yapılır.
 *
 * Ekran koordinatı ile matematik koordinatı farklıdır: SVG'de y aşağı
 * doğru büyür. Bu dosya **matematik koordinatında** çalışır (y yukarı);
 * ekrana çevirme işi çizim bileşenlerinin sorumluluğundadır.
 */

export const derece = (radyan) => (radyan * 180) / Math.PI
export const radyan = (derece) => (derece * Math.PI) / 180

/** Bileşenlerden vektör. */
export const vektor = (x, y) => ({ x, y })

/** Büyüklük ve açıdan (derece) vektör: kutupsal → dik bileşen. */
export function kutupsaldan(buyukluk, aciDerece) {
  const a = radyan(aciDerece)
  return { x: buyukluk * Math.cos(a), y: buyukluk * Math.sin(a) }
}

/** Vektörün büyüklüğü (boyu): |A| = √(x²+y²) */
export const buyukluk = (v) => Math.hypot(v.x, v.y)

/**
 * Vektörün +x ekseniyle yaptığı açı, 0–360° aralığında.
 * atan2 negatif değer döndürebildiği için 360 eklenerek normalleştirilir;
 * öğrenciye "-45°" yerine "315°" göstermek daha az kafa karıştırır.
 */
export function aci(v) {
  if (v.x === 0 && v.y === 0) return 0
  const a = derece(Math.atan2(v.y, v.x))
  return a < 0 ? a + 360 : a
}

export const topla = (...vektorler) =>
  vektorler.reduce((t, v) => ({ x: t.x + v.x, y: t.y + v.y }), { x: 0, y: 0 })

export const cikar = (a, b) => ({ x: a.x - b.x, y: a.y - b.y })

/** Skalerle çarpma. Negatif skaler yönü ters çevirir — bu görsel olarak gösterilir. */
export const skalerCarp = (v, k) => ({ x: v.x * k, y: v.y * k })

/** Ters vektör: A − B = A + (−B) eşitliğini canlandırmak için. */
export const ters = (v) => ({ x: -v.x, y: -v.y })

/** Skaler (nokta) çarpım: A·B = |A||B|cosθ — iş hesabının temeli. */
export const nokta = (a, b) => a.x * b.x + a.y * b.y

/**
 * İki vektör arasındaki açı (0–180°).
 * Sıfır vektörle açı tanımsızdır; bu durumda 0 döndürülür ve arayüz
 * "açı tanımsız" uyarısı gösterir.
 */
export function arasindakiAci(a, b) {
  const ba = buyukluk(a)
  const bb = buyukluk(b)
  if (ba === 0 || bb === 0) return 0
  // Kayan nokta yüzünden oran 1'i birkaç kuantum aşabilir; acos NaN vermesin.
  const oran = Math.min(1, Math.max(-1, nokta(a, b) / (ba * bb)))
  return derece(Math.acos(oran))
}

/** Birim vektör (yön koruyan, boyu 1). Sıfır vektörün yönü yoktur. */
export function birim(v) {
  const b = buyukluk(v)
  if (b === 0) return { x: 0, y: 0 }
  return { x: v.x / b, y: v.y / b }
}

/**
 * Bileşke vektör: verilen tüm vektörlerin toplamı.
 * Uç uca ekleme ve paralelkenar yöntemi aynı sonucu verir — modül bu
 * eşitliği iki ayrı çizimle gösterir.
 */
export const bileske = (vektorler) => topla(...vektorler)

/**
 * Dengeleyici vektör: bileşkeyi sıfırlayan vektör, yani −bileşke.
 * "Dengeleyici, bileşkenin zıttıdır" kuralının tek kaynağı burasıdır.
 */
export const dengeleyici = (vektorler) => ters(bileske(vektorler))

/** Vektörü belirli açıyla döndürür (derece, saat yönünün tersi). */
export function dondur(v, aciDerece) {
  const a = radyan(aciDerece)
  return {
    x: v.x * Math.cos(a) - v.y * Math.sin(a),
    y: v.x * Math.sin(a) + v.y * Math.cos(a),
  }
}

/**
 * Vektörün başka bir vektör üzerindeki izdüşümü (skaler).
 * Eğik düzlem ve iş hesaplarında "kuvvetin hareket yönündeki bileşeni"
 * budur.
 */
export function izdusum(v, eksen) {
  const b = buyukluk(eksen)
  if (b === 0) return 0
  return nokta(v, eksen) / b
}

/**
 * İki vektörün toplamını **kosinüs teoremiyle** doğrular.
 * Bileşen yöntemiyle bulunan sonucun geometrik yöntemle aynı çıktığını
 * test etmek için var: |R|² = |A|² + |B|² + 2|A||B|cosθ
 */
export function kosinusBuyuklugu(a, b) {
  const theta = radyan(arasindakiAci(a, b))
  return Math.sqrt(
    buyukluk(a) ** 2 + buyukluk(b) ** 2 + 2 * buyukluk(a) * buyukluk(b) * Math.cos(theta),
  )
}

/**
 * Kapalı bir rotanın alınan yolu ve yer değiştirmesi.
 * Skaler–vektörel farkının en net kanıtı: kapalı rotada yol > 0 iken
 * yer değiştirme sıfırdır.
 *
 * @param {{x:number,y:number}[]} noktalar Sırayla gezilen konumlar.
 */
export function rotaOlc(noktalar) {
  let yol = 0
  for (let i = 1; i < noktalar.length; i += 1) {
    yol += buyukluk(cikar(noktalar[i], noktalar[i - 1]))
  }
  const yerDegistirme =
    noktalar.length > 1 ? cikar(noktalar[noktalar.length - 1], noktalar[0]) : { x: 0, y: 0 }
  return {
    yol,
    yerDegistirme,
    yerDegistirmeBuyuklugu: buyukluk(yerDegistirme),
    kapali: noktalar.length > 1 && buyukluk(yerDegistirme) < 1e-9,
  }
}
