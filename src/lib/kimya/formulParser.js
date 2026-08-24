/**
 * Dr. Koç — Kimya Atlası / Formül Çözümleyici
 * ------------------------------------------------------------------
 * Gerçek bir ayrıştırıcıdır: önceden tanımlı bileşik adlarını eşleştirmez,
 * formülü karakter karakter okuyup bir ağaca (AST) çevirir, sonra bu ağacı
 * değerlendirerek atom sayılarını hesaplar.
 *
 * Desteklenenler:
 *   • Element sembolleri (büyük/küçük harf duyarlı, hatalı yazımda onarım önerisi)
 *   • Alt indisler: H2O, H₂O
 *   • Parantezler ve iç içe parantezler: Ca(OH)2, Al2(SO4)3, K4[Fe(CN)6]
 *   • İyon yükleri: NO3-, NH4+, SO4^2-, CO3²⁻, PO43-
 *   • Hidratlar: CuSO4·5H2O
 *   • Baştaki katsayı: 2H2O
 *
 * Çıktı yalnızca sayı değil, "neden bu sayı" sorusunu yanıtlayan adımları da
 * içerir (bkz. `adimlar`) — formül okuma eğitimi bu adımlardan beslenir.
 */

import { ELEMENT_SOZLUGU, ELEMENTLER, ustSimge } from '../../data/kimya/elementler.js'

const ALT_SIMGELER = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4', '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9' }
const UST_SIMGELER = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-' }
const ALT_YAZI = { 0: '₀', 1: '₁', 2: '₂', 3: '₃', 4: '₄', 5: '₅', 6: '₆', 7: '₇', 8: '₈', 9: '₉' }

/** 4 → "₄" */
export function altSimge(sayi) {
  return String(sayi).split('').map((k) => ALT_YAZI[k] ?? k).join('')
}

/** Yükü okunur biçime çevirir: -1 → "⁻", 2 → "²⁺" */
export function yukMetni(yuk) {
  if (!yuk) return ''
  const buyukluk = Math.abs(yuk)
  const isaret = yuk > 0 ? '⁺' : '⁻'
  return (buyukluk === 1 ? '' : ustSimge(buyukluk)) + isaret
}

/**
 * Yükü okunur biçimde yazar: -1 → "−1", +2 → "+2".
 * Formül üstsimgesinde ("NO₃⁻") büyüklük 1 yazılmaz, ama bir veri alanında
 * tek başına "−" görünmesi anlaşılmaz olduğu için burada sayı hep yazılır.
 */
export function yukDuzMetin(yuk) {
  if (!yuk) return 'yüksüz (nötr)'
  return `${yuk > 0 ? '+' : '−'}${Math.abs(yuk)}`
}

/**
 * Girdiyi standart biçime getirir: Unicode alt/üst simgeler düz karaktere,
 * Türkçe klavyeden gelen benzer işaretler standart işaretlere çevrilir.
 */
export function normalizeEt(ham) {
  let metin = String(ham ?? '').trim()
  metin = metin.replace(/[‐-―−]/g, '-') // tire çeşitleri → eksi
  metin = metin.replace(/[·∙•*]/g, '·')                // hidrat noktası
  metin = metin.replace(/[\[{]/g, '(').replace(/[\]}]/g, ')')
  metin = metin.split('').map((k) => ALT_SIMGELER[k] ?? UST_SIMGELER[k] ?? k).join('')
  metin = metin.replace(/\s+/g, '')
  return metin
}

/**
 * Sondaki yükü ayırır.
 * Kural (belirsizliği çözen kısım):
 *   • "^2-", "²⁻" → açıkça yük.
 *   • Sondaki işaretten önce **iki veya daha fazla** rakam varsa, sonuncusu
 *     yüktür: SO42- → SO₄ ve 2-.
 *   • Tek rakam varsa o rakam alt indistir, yükün büyüklüğü 1'dir:
 *     NO3- → NO₃⁻ (yaygın yazım kuralı budur).
 *   • "-2" / "+3" biçimi de desteklenir: SO4-2 → SO₄²⁻
 */
function yukuAyir(metin) {
  // ^2-, ^-2, ^- biçimleri
  let eslesme = metin.match(/\^(\d*)([+-])$/)
  if (eslesme) {
    const buyukluk = eslesme[1] === '' ? 1 : Number(eslesme[1])
    return { govde: metin.slice(0, eslesme.index), yuk: eslesme[2] === '+' ? buyukluk : -buyukluk, belirsizdi: false }
  }
  eslesme = metin.match(/\^([+-])(\d*)$/)
  if (eslesme) {
    const buyukluk = eslesme[2] === '' ? 1 : Number(eslesme[2])
    return { govde: metin.slice(0, eslesme.index), yuk: eslesme[1] === '+' ? buyukluk : -buyukluk, belirsizdi: false }
  }
  // İşaret + rakam biçimi: SO4-2
  eslesme = metin.match(/([+-])(\d+)$/)
  if (eslesme) {
    const buyukluk = Number(eslesme[2])
    return { govde: metin.slice(0, eslesme.index), yuk: eslesme[1] === '+' ? buyukluk : -buyukluk, belirsizdi: false }
  }
  // Rakam(lar) + işaret biçimi: NO3-, SO42-, NH4+
  eslesme = metin.match(/(\d*)([+-]+)$/)
  if (eslesme) {
    const isaretler = eslesme[2]
    // "2--" gibi yazımlar hatalıdır; yalnızca aynı işaretin tekrarına izin verilir (Ca2++ değil).
    const isaret = isaretler[0]
    const tekrar = isaretler.length
    const rakamlar = eslesme[1]
    let buyukluk = tekrar
    let govde = metin.slice(0, eslesme.index)
    if (rakamlar.length >= 2) {
      buyukluk = Number(rakamlar[rakamlar.length - 1])
      govde += rakamlar.slice(0, -1)
    } else if (rakamlar.length === 1) {
      // Tek rakam kural olarak alt indistir (NO3⁻ = nitrat).
      // Tek istisna: gövde tek bir element sembolünden ibaretse rakam yüktür.
      // Ca2+ → Ca²⁺, Fe3+ → Fe³⁺, O2- → O²⁻ yazımı yaygındır.
      if (ELEMENT_SOZLUGU[govde]) buyukluk = Number(rakamlar)
      else govde += rakamlar
    }
    return { govde, yuk: isaret === '+' ? buyukluk : -buyukluk, belirsizdi: rakamlar.length === 1 }
  }
  return { govde: metin, yuk: 0, belirsizdi: false }
}

/** Sembolü yanlış büyük/küçük harfle yazılmış olsa da tanımaya çalışır. */
function sembolOnar(parca) {
  const duzgun = parca[0].toUpperCase() + parca.slice(1).toLowerCase()
  return ELEMENT_SOZLUGU[duzgun] ? duzgun : null
}

/**
 * Gövdeyi ağaca çevirir.
 * Düğümler: {tur:'element', sembol, altIndis} | {tur:'grup', icerik:[], altIndis}
 */
function agacKur(govde) {
  let konum = 0
  const onarimlar = []

  function sayiOku() {
    let rakam = ''
    while (konum < govde.length && /\d/.test(govde[konum])) rakam += govde[konum++]
    return rakam === '' ? 1 : Number(rakam)
  }

  function icerikOku(parantezIcinde) {
    const dugumler = []
    while (konum < govde.length) {
      const karakter = govde[konum]
      if (karakter === ')') {
        if (!parantezIcinde) throw new Error('Fazladan kapanan parantez var: ")"')
        konum++
        const altIndis = sayiOku()
        return { dugumler, altIndis }
      }
      if (karakter === '(') {
        konum++
        const ic = icerikOku(true)
        if (!ic.dugumler.length) throw new Error('Boş parantez kullanılamaz: "()"')
        dugumler.push({ tur: 'grup', icerik: ic.dugumler, altIndis: ic.altIndis })
        continue
      }
      if (/[A-Za-z]/.test(karakter)) {
        // Önce iki harfli sembolü dene (Cl, Na), olmazsa tek harfli (C, N)
        const ikiHarf = govde.slice(konum, konum + 2)
        let sembol = null
        if (ikiHarf.length === 2 && /[A-Za-z]/.test(ikiHarf[1]) && ELEMENT_SOZLUGU[ikiHarf]) {
          sembol = ikiHarf
          konum += 2
        } else if (ELEMENT_SOZLUGU[karakter]) {
          sembol = karakter
          konum += 1
        } else {
          // Büyük/küçük harf onarımı: "nacl" → "NaCl", "CL" → "Cl"
          const ikiOnarim = ikiHarf.length === 2 && /[A-Za-z]/.test(ikiHarf[1]) ? sembolOnar(ikiHarf) : null
          const birOnarim = sembolOnar(karakter)
          if (ikiOnarim && !(birOnarim && ELEMENT_SOZLUGU[ikiHarf[1]?.toUpperCase()])) {
            onarimlar.push({ yazilan: ikiHarf, dogru: ikiOnarim })
            sembol = ikiOnarim
            konum += 2
          } else if (birOnarim) {
            onarimlar.push({ yazilan: karakter, dogru: birOnarim })
            sembol = birOnarim
            konum += 1
          } else {
            throw new Error(`"${govde.slice(konum, konum + 2)}" bir element sembolü değil.`)
          }
        }
        const altIndis = sayiOku()
        dugumler.push({ tur: 'element', sembol, altIndis })
        continue
      }
      if (/\d/.test(karakter)) throw new Error('Alt indis bir elementin veya parantezin arkasında olmalı.')
      throw new Error(`Formülde beklenmeyen karakter: "${karakter}"`)
    }
    if (parantezIcinde) throw new Error('Kapanmayan parantez var: "("')
    return { dugumler, altIndis: 1 }
  }

  const sonuc = icerikOku(false)
  return { dugumler: sonuc.dugumler, onarimlar }
}

/** Ağacı gezip atom sayılarını toplar. */
function atomlariTopla(dugumler, carpan, birikim) {
  for (const dugum of dugumler) {
    if (dugum.tur === 'element') {
      const adet = dugum.altIndis * carpan
      birikim[dugum.sembol] = (birikim[dugum.sembol] || 0) + adet
    } else {
      atomlariTopla(dugum.icerik, dugum.altIndis * carpan, birikim)
    }
  }
  return birikim
}

/** Formül okuma eğitiminin adımlarını üretir (parantez nasıl işliyor?). */
function adimlariUret(dugumler, carpan, adimlar, kapsam) {
  for (const dugum of dugumler) {
    if (dugum.tur === 'element') {
      adimlar.push({
        sembol: dugum.sembol,
        ad: ELEMENT_SOZLUGU[dugum.sembol]?.ad ?? dugum.sembol,
        altIndis: dugum.altIndis,
        carpan,
        sonuc: dugum.altIndis * carpan,
        kapsam,
        aciklama: carpan === 1
          ? (dugum.altIndis === 1
            ? `${dugum.sembol} yalnızca 1 kez geçiyor (yazılmayan alt indis 1'dir).`
            : `${altSimge(dugum.altIndis)} yalnızca ${dugum.sembol} atomunu etkiler → ${dugum.altIndis} atom.`)
          : `Parantez içindeki ${dugum.sembol}${dugum.altIndis > 1 ? altSimge(dugum.altIndis) : ''} , parantezin dışındaki ${carpan} ile çarpılır → ${dugum.altIndis} × ${carpan} = ${dugum.altIndis * carpan} atom.`,
      })
    } else {
      const icerikMetni = dugum.icerik.map(dugumMetni).join('')
      if (dugum.altIndis > 1) {
        adimlar.push({
          tur: 'parantez',
          kapsam,
          aciklama: `Parantezin dışındaki ${altSimge(dugum.altIndis)} , parantez içindeki bütün atomları ${dugum.altIndis} ile çarpar: (${icerikMetni})${altSimge(dugum.altIndis)}`,
        })
      }
      adimlariUret(dugum.icerik, dugum.altIndis * carpan, adimlar, kapsam + 1)
    }
  }
  return adimlar
}

/** Düğümü okunur biçimde yazar (alt indisler Unicode). */
function dugumMetni(dugum) {
  if (dugum.tur === 'element') return dugum.sembol + (dugum.altIndis > 1 ? altSimge(dugum.altIndis) : '')
  const ic = dugum.icerik.map(dugumMetni).join('')
  return `(${ic})${dugum.altIndis > 1 ? altSimge(dugum.altIndis) : ''}`
}

/** Ağacı süslü biçimde yazar; yük varsa üst simge olarak ekler. */
export function agaciYaz(dugumler, yuk = 0, katsayi = 1) {
  const govde = dugumler.map(dugumMetni).join('')
  return (katsayi > 1 ? katsayi : '') + govde + yukMetni(yuk)
}

/** Mol kütlesi (g/mol) — bilinmeyen kütle yoksa hesaplanır. */
function molKutlesi(atomlar) {
  let toplam = 0
  for (const [sembol, adet] of Object.entries(atomlar)) {
    const element = ELEMENT_SOZLUGU[sembol]
    if (!element) return null
    toplam += element.kutle * adet
  }
  return Math.round(toplam * 1000) / 1000
}

/**
 * Ana giriş noktası.
 * @returns {{ basarili:boolean, hata?:string, ... }}
 */
export function formuluCozumle(ham) {
  const girdi = String(ham ?? '').trim()
  if (!girdi) return { basarili: false, hata: 'Önce bir kimyasal formül yaz.', girdi }

  const normal = normalizeEt(girdi)
  if (!normal) return { basarili: false, hata: 'Önce bir kimyasal formül yaz.', girdi }

  // Hidrat: CuSO4·5H2O → iki parça
  const parcalar = normal.split('·').filter(Boolean)
  const cozulmusParcalar = []
  let toplamYuk = 0
  let belirsizYuk = false
  const onarimlar = []

  try {
    for (const parca of parcalar) {
      const katsayiEslesme = parca.match(/^(\d+)(?=[A-Za-z(])/)
      const katsayi = katsayiEslesme ? Number(katsayiEslesme[1]) : 1
      const katsayisiz = katsayiEslesme ? parca.slice(katsayiEslesme[1].length) : parca
      const { govde, yuk, belirsizdi } = yukuAyir(katsayisiz)
      if (!govde) throw new Error('Formülde element sembolü bulunamadı.')
      const { dugumler, onarimlar: parcaOnarim } = agacKur(govde)
      onarimlar.push(...parcaOnarim)
      toplamYuk += yuk * katsayi
      belirsizYuk = belirsizYuk || belirsizdi
      cozulmusParcalar.push({ katsayi, yuk, dugumler })
    }
  } catch (hata) {
    return { basarili: false, hata: hata.message, girdi, normal }
  }

  const atomlar = {}
  for (const parca of cozulmusParcalar) atomlariTopla(parca.dugumler, parca.katsayi, atomlar)

  const adimlar = []
  for (const parca of cozulmusParcalar) adimlariUret(parca.dugumler, parca.katsayi, adimlar, 0)

  const siraliAtomlar = Object.entries(atomlar)
    .map(([sembol, adet]) => ({ sembol, adet, element: ELEMENT_SOZLUGU[sembol] }))
    .sort((a, b) => b.adet - a.adet || a.element.atomNo - b.element.atomNo)

  const toplamAtom = siraliAtomlar.reduce((t, a) => t + a.adet, 0)
  const bicimli = cozulmusParcalar
    .map((p) => agaciYaz(p.dugumler, p.yuk, p.katsayi))
    .join(' · ')

  return {
    basarili: true,
    girdi,
    normal,
    bicimli,
    // Karşılaştırma / veri tabanı eşleşmesi için sadeleştirilmiş anahtar
    anahtar: parcalar.length === 1
      ? cozulmusParcalar[0].dugumler.map(dugumMetni).join('').replace(/[₀-₉]/g, (k) => ALT_SIMGELER[k])
        + (toplamYuk ? `^${Math.abs(toplamYuk) === 1 ? '' : Math.abs(toplamYuk)}${toplamYuk > 0 ? '+' : '-'}` : '')
      : normal,
    atomlar: siraliAtomlar,
    atomHaritasi: atomlar,
    toplamAtom,
    elementCesidi: siraliAtomlar.length,
    yuk: toplamYuk,
    belirsizYuk,
    onarimlar,
    hidrat: parcalar.length > 1,
    parcalar: cozulmusParcalar,
    adimlar,
    molKutlesi: molKutlesi(atomlar),
    agac: cozulmusParcalar[0]?.dugumler ?? [],
  }
}

/** Girilen metnin formül olup olmadığını kabaca kestirir (arama kutusu için). */
export function formulGibiMi(metin) {
  const temiz = normalizeEt(metin)
  if (!temiz || temiz.length > 40) return false
  if (!/^[A-Za-z0-9()·^+-]+$/.test(temiz)) return false
  if (!/[A-Z]/.test(temiz) && !/^[a-z]+\d/.test(temiz)) return false
  return formuluCozumle(temiz).basarili
}

/** Sembol listesinden element adlarına köprü — arama sonuçlarında kullanılır. */
export const TUM_SEMBOLLER = ELEMENTLER.map((e) => e.sembol)
