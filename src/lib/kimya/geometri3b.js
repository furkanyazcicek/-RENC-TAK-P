/**
 * Dr. Koç — Kimya Atlası / 3B Molekül Geometrisi
 * ------------------------------------------------------------------
 * Molekül modelleri elle koordinat yazılarak değil, VSEPR yön kümelerinden
 * üretilir. Bir atoma bağ eklendiğinde:
 *   1. Atomun boş yön yuvalarından biri seçilir,
 *   2. Yeni atom o yönde, kovalent yarıçaplara göre hesaplanan uzaklığa konur,
 *   3. Yeni atomun kendi yön kümesi, ilk yuvası ebeveyne bakacak biçimde
 *      döndürülür (Rodrigues dönme formülü).
 * Böylece zincirli moleküllerde (etanol, asetik asit) de bağ açıları gerçek
 * geometriye uyar.
 *
 * Not: Bu bir kuvvet alanı hesabı değildir; ders düzeyinde doğru **açıları**
 * ve **şekli** verir, deneysel bağ uzunluğu iddiasında bulunmaz.
 */

const D = Math.PI / 180

/* ————— Küçük vektör yardımcıları ————— */
export const birim = (v) => {
  const u = Math.hypot(v[0], v[1], v[2]) || 1
  return [v[0] / u, v[1] / u, v[2] / u]
}
export const topla = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
export const cikar = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
export const olcekle = (v, k) => [v[0] * k, v[1] * k, v[2] * k]
export const nokta = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
export const capraz = (a, b) => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]
export const uzunluk = (v) => Math.hypot(v[0], v[1], v[2])

/** Bir vektörü verilen eksen etrafında açı kadar döndürür (Rodrigues). */
export function eksendeDondur(v, eksen, aci) {
  const k = birim(eksen)
  const c = Math.cos(aci)
  const s = Math.sin(aci)
  return topla(
    topla(olcekle(v, c), olcekle(capraz(k, v), s)),
    olcekle(k, nokta(k, v) * (1 - c)),
  )
}

/** a yönünü b yönüne taşıyan dönmeyi bir işlev olarak verir. */
export function hizalayici(a, b) {
  const u = birim(a)
  const w = birim(b)
  const c = nokta(u, w)
  if (c > 0.999999) return (v) => v
  if (c < -0.999999) {
    // Tam ters yön: herhangi bir dik eksende 180° döndür.
    let dik = capraz(u, [1, 0, 0])
    if (uzunluk(dik) < 1e-6) dik = capraz(u, [0, 1, 0])
    return (v) => eksendeDondur(v, dik, Math.PI)
  }
  const eksen = capraz(u, w)
  const aci = Math.acos(Math.max(-1, Math.min(1, c)))
  return (v) => eksendeDondur(v, eksen, aci)
}

/* ————— VSEPR yön kümeleri —————
   Kural: dizinin **başında bağ yuvaları**, **sonunda ortaklanmamış çift**
   yuvaları bulunur. `MolekulKurucu.ekle` baştan, `cift` sondan tüketir;
   böylece çağrı sırası ne olursa olsun bağlar doğru yuvalara oturur.

   Ortaklanmamış çiftler bağ çiftlerini ittiği için gerçek bağ açıları ideal
   değerden küçüktür (H₂O 104,5° · NH₃ 107°). Bu yüzden açı, yön kümesine
   parametre olarak verilir — ideal tetrahedral kümeden türetilmez. */

/** İki bağ + iki ortaklanmamış çift (AX₂E₂ — su tipi). */
function ikiBagIkiCift(bagAcisiDerece, ciftAcisiDerece = 115.5) {
  const b = (bagAcisiDerece / 2) * D
  const c = (ciftAcisiDerece / 2) * D
  return [
    [Math.sin(b), -Math.cos(b), 0],
    [-Math.sin(b), -Math.cos(b), 0],
    [0, Math.cos(c), Math.sin(c)],
    [0, Math.cos(c), -Math.sin(c)],
  ]
}

/** Üç bağ + bir ortaklanmamış çift (AX₃E — amonyak tipi). */
function ucBagBirCift(bagAcisiDerece) {
  // Bağların eksenle yaptığı açı, karşılıklı bağ açısından türetilir:
  // cos(bağ açısı) = 1,5·cos²β − 0,5
  const kare = (Math.cos(bagAcisiDerece * D) + 0.5) / 1.5
  const cosB = Math.sqrt(Math.max(0, kare))
  const sinB = Math.sqrt(Math.max(0, 1 - kare))
  const bag = [0, 120, 240].map((fi) => [
    sinB * Math.cos(fi * D),
    -cosB,
    sinB * Math.sin(fi * D),
  ])
  return [...bag, [0, 1, 0]]
}

/** İki bağ + bir ortaklanmamış çift (AX₂E — SO₂, O₃ tipi). */
function ikiBagBirCift(bagAcisiDerece) {
  const b = (bagAcisiDerece / 2) * D
  return [
    [Math.sin(b), -Math.cos(b), 0],
    [-Math.sin(b), -Math.cos(b), 0],
    [0, 1, 0],
  ]
}

const KOK3 = 1 / Math.sqrt(3)

const SABIT_KUMELER = {
  dogrusal: [[1, 0, 0], [-1, 0, 0]],
  trigonalDuzlemsel: [
    [0, 1, 0],
    [Math.cos(210 * D), Math.sin(210 * D), 0],
    [Math.cos(330 * D), Math.sin(330 * D), 0],
  ],
  tetrahedral: [
    [KOK3, KOK3, KOK3],
    [KOK3, -KOK3, -KOK3],
    [-KOK3, KOK3, -KOK3],
    [-KOK3, -KOK3, KOK3],
  ],
  trigonalBipiramidal: [
    [1, 0, 0],
    [Math.cos(120 * D), Math.sin(120 * D), 0],
    [Math.cos(240 * D), Math.sin(240 * D), 0],
    [0, 0, 1], [0, 0, -1],
  ],
  oktahedral: [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
  /** Tek bağ yapan uç atomlar (H, halojenler) — yön kümesi tek yuvalıdır. */
  tekli: [[0, 1, 0]],
  /** Uç atomun üç ortaklanmamış çifti (halojenler): bağ + 3 çift. */
  uc3Cift: [[0, 1, 0], [0, -0.5, 0.866], [0.816, -0.5, -0.408], [-0.816, -0.5, -0.408]],
  /** Uç oksijen: bağ + 2 çift (açısal yerleşim). */
  uc2Cift: [[0, 1, 0], [0, -0.5, 0.866], [0, -0.5, -0.866]],
  /** Uç azot (C≡N gibi): bağ + 1 çift, doğrusal. */
  uc1Cift: [[0, 1, 0], [0, -1, 0]],
}

const kumeOnbellegi = new Map()

/**
 * Yön kümesini adına göre verir.
 * Açılı kümeler "ad:açı" biçiminde istenir: "piramidal:107", "acisal2:104.5"
 */
export function yonKumesiAl(ad = 'tetrahedral') {
  if (Array.isArray(ad)) return ad.map(birim)
  if (kumeOnbellegi.has(ad)) return kumeOnbellegi.get(ad)
  const [tur, aciMetni] = String(ad).split(':')
  const aci = Number(aciMetni)
  let kume
  if (tur === 'acisal2') kume = ikiBagIkiCift(Number.isFinite(aci) ? aci : 104.5)
  else if (tur === 'piramidal') kume = ucBagBirCift(Number.isFinite(aci) ? aci : 107)
  else if (tur === 'acisal1') kume = ikiBagBirCift(Number.isFinite(aci) ? aci : 119)
  else kume = SABIT_KUMELER[tur] ?? SABIT_KUMELER.tetrahedral
  const birimli = kume.map(birim)
  kumeOnbellegi.set(ad, birimli)
  return birimli
}

export const YON_KUMELERI = SABIT_KUMELER

/** Yaklaşık kovalent yarıçaplar (pm) — yalnızca çizim oranı içindir. */
const YARICAP = {
  H: 31, He: 28, Li: 128, Be: 96, B: 84, C: 76, N: 71, O: 66, F: 57, Ne: 58,
  Na: 166, Mg: 141, Al: 121, Si: 111, P: 107, S: 105, Cl: 102, Ar: 106,
  K: 203, Ca: 176, Ti: 160, Cr: 139, Mn: 139, Fe: 132, Co: 126, Ni: 124,
  Cu: 132, Zn: 122, Ga: 122, Ge: 120, As: 119, Se: 120, Br: 120, Kr: 116,
  Rb: 220, Sr: 195, Ag: 145, Sn: 139, I: 139, Xe: 140, Ba: 215, Pt: 136,
  Au: 136, Hg: 132, Pb: 146,
}

/** İki atom arasındaki çizim uzaklığı (bağ derecesi arttıkça kısalır). */
export function bagUzunlugu(a, b, derece = 1) {
  const toplamPm = (YARICAP[a] ?? 110) + (YARICAP[b] ?? 110)
  const kisalma = derece === 3 ? 0.78 : derece === 2 ? 0.87 : 1
  return (toplamPm / 100) * kisalma
}

/**
 * Molekül kurucusu.
 * Kullanımı:
 *   const k = new MolekulKurucu()
 *   const o = k.merkez('O', 'acisal104')
 *   k.ekle(o, 'H'); k.ekle(o, 'H')
 *   const yapi = k.bitir()
 */
export class MolekulKurucu {
  constructor() {
    this.atomlar = []
    this.baglar = []
    this.ciftler = []
  }

  #atomEkle(sembol, konum, geometri, yonler) {
    const id = this.atomlar.length
    // `siradaki` bağ yuvalarını baştan, `sondaki` çift yuvalarını sondan tüketir.
    this.atomlar.push({ id, sembol, konum, geometri, yonler, siradaki: 0, sondaki: yonler.length - 1 })
    return id
  }

  /** Kök atom — koordinat başlangıcına konur. */
  merkez(sembol, geometri = 'tetrahedral') {
    return this.#atomEkle(sembol, [0, 0, 0], geometri, yonKumesiAl(geometri))
  }

  /** Atomun bir sonraki boş yön yuvasını tüketir. */
  #yonAl(atomId) {
    const atom = this.atomlar[atomId]
    if (atom.siradaki > atom.sondaki) {
      throw new Error(`${atom.sembol} atomunun boş bağ yuvası kalmadı (geometri: ${atom.geometri}).`)
    }
    return atom.yonler[atom.siradaki++]
  }

  /** Ortaklanmamış çift yuvası — dizinin sonundan alınır. */
  #ciftYonuAl(atomId) {
    const atom = this.atomlar[atomId]
    if (atom.sondaki < atom.siradaki) {
      throw new Error(`${atom.sembol} atomunda ortaklanmamış çift için yuva kalmadı.`)
    }
    return atom.yonler[atom.sondaki--]
  }

  /**
   * Ebeveyne yeni bir atom bağlar.
   * @param {number} ebeveynId
   * @param {string} sembol
   * @param {{geometri?:string, derece?:number, burulma?:number, uzunluk?:number}} secenekler
   */
  ekle(ebeveynId, sembol, secenekler = {}) {
    const { geometri = 'tetrahedral', derece = 1, burulma = 0, uzunluk: ozelUzunluk } = secenekler
    const ebeveyn = this.atomlar[ebeveynId]
    const yon = this.#yonAl(ebeveynId)
    const mesafe = ozelUzunluk ?? bagUzunlugu(ebeveyn.sembol, sembol, derece)
    const konum = topla(ebeveyn.konum, olcekle(yon, mesafe))

    // Yeni atomun yön kümesi: ilk yuva ebeveyne bakacak biçimde döndürülür.
    const ham = yonKumesiAl(geometri)
    const dondur = hizalayici(ham[0], olcekle(yon, -1))
    let yonler = ham.map(dondur)
    if (burulma) yonler = yonler.map((v) => eksendeDondur(v, yon, burulma * D))

    const id = this.#atomEkle(sembol, konum, geometri, yonler)
    this.atomlar[id].siradaki = 1 // ilk yuva ebeveyne ayrıldı
    this.baglar.push({ a: ebeveynId, b: id, derece })
    return id
  }

  /** Atoma ortaklanmamış elektron çifti ekler (bir yön yuvası tüketir). */
  cift(atomId, adet = 1) {
    for (let i = 0; i < adet; i += 1) {
      const yon = this.#ciftYonuAl(atomId)
      this.ciftler.push({ atomId, yon })
    }
    return this
  }

  /** Var olan iki atomu birbirine bağlar (halka kapatma). */
  bagla(a, b, derece = 1) {
    this.baglar.push({ a, b, derece })
    return this
  }

  bitir() {
    // Modeli koordinat merkezine oturt.
    const n = this.atomlar.length || 1
    const orta = this.atomlar.reduce((t, a) => topla(t, a.konum), [0, 0, 0])
    const merkez = olcekle(orta, 1 / n)
    return {
      atomlar: this.atomlar.map(({ id, sembol, konum }) => ({ id, sembol, konum: cikar(konum, merkez) })),
      baglar: this.baglar.map((b) => ({ ...b })),
      ciftler: this.ciftler.map((c) => ({ ...c })),
    }
  }
}

/** İki bağ arasındaki açıyı derece cinsinden hesaplar (test ve doğrulama için). */
export function bagAcisi(yapi, merkezId, aId, bId) {
  const konum = (id) => yapi.atomlar.find((a) => a.id === id).konum
  const u = birim(cikar(konum(aId), konum(merkezId)))
  const v = birim(cikar(konum(bId), konum(merkezId)))
  return (Math.acos(Math.max(-1, Math.min(1, nokta(u, v)))) / D)
}

/** 3B noktayı ekrana yansıtır (dönme + basit perspektif). */
export function yansit(konum, { donusY = 0, donusX = 0, olcek = 1 } = {}) {
  let v = eksendeDondur(konum, [0, 1, 0], donusY * D)
  v = eksendeDondur(v, [1, 0, 0], donusX * D)
  const derinlik = 6
  const perspektif = derinlik / (derinlik - v[2] * 0.55)
  return { x: v[0] * olcek * perspektif, y: -v[1] * olcek * perspektif, z: v[2], olcekF: perspektif }
}
