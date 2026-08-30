/**
 * Dr. Koç — Kimya Atlası / Analiz Motoru
 * ==================================================================
 * Bir formül girildiğinde iki ayrı kutu üretilir ve bunlar hiçbir zaman
 * karıştırılmaz:
 *
 *   HESAPLANAN   → formülden kesin çıkarılabilenler
 *                  (atom sayısı, element çeşidi, net yük, mol kütlesi)
 *   YAPI VERİSİ  → yalnızca doğrulanmış veriyle verilebilenler
 *                  (geometri, bağ açısı, Lewis, polarite, etkileşim)
 *
 * Veri tabanında bulunmayan bir formül için geometri **uydurulmaz**;
 * bunun yerine ne bilinip ne bilinmediği açıkça yazılır.
 */

import { formuluCozumle, yukDuzMetin, yukMetni } from './formulParser.js'
import { ELEMENT_SOZLUGU, metalMi, ametalMi } from '../../data/kimya/elementler.js'
import { TUR_SOZLUGU, TUR_ADLARI, SINIFLAR } from '../../data/kimya/turler.js'

/* ————— Bilinen çok atomlu iyonlar (algoritmik iyonik çözümleme için) ————— */
export const POLIATOMIK_IYONLAR = [
  { formul: 'NH4', bilesim: { N: 1, H: 4 }, yuk: 1, ad: 'Amonyum iyonu' },
  { formul: 'OH', bilesim: { O: 1, H: 1 }, yuk: -1, ad: 'Hidroksit iyonu' },
  { formul: 'NO3', bilesim: { N: 1, O: 3 }, yuk: -1, ad: 'Nitrat iyonu' },
  { formul: 'NO2', bilesim: { N: 1, O: 2 }, yuk: -1, ad: 'Nitrit iyonu' },
  { formul: 'CO3', bilesim: { C: 1, O: 3 }, yuk: -2, ad: 'Karbonat iyonu' },
  { formul: 'HCO3', bilesim: { H: 1, C: 1, O: 3 }, yuk: -1, ad: 'Bikarbonat iyonu' },
  { formul: 'SO4', bilesim: { S: 1, O: 4 }, yuk: -2, ad: 'Sülfat iyonu' },
  { formul: 'SO3', bilesim: { S: 1, O: 3 }, yuk: -2, ad: 'Sülfit iyonu' },
  { formul: 'HSO4', bilesim: { H: 1, S: 1, O: 4 }, yuk: -1, ad: 'Hidrojen sülfat iyonu' },
  { formul: 'PO4', bilesim: { P: 1, O: 4 }, yuk: -3, ad: 'Fosfat iyonu' },
  { formul: 'CN', bilesim: { C: 1, N: 1 }, yuk: -1, ad: 'Siyanür iyonu' },
  { formul: 'ClO3', bilesim: { Cl: 1, O: 3 }, yuk: -1, ad: 'Klorat iyonu' },
  { formul: 'ClO4', bilesim: { Cl: 1, O: 4 }, yuk: -1, ad: 'Perklorat iyonu' },
  { formul: 'MnO4', bilesim: { Mn: 1, O: 4 }, yuk: -1, ad: 'Permanganat iyonu' },
  { formul: 'CrO4', bilesim: { Cr: 1, O: 4 }, yuk: -2, ad: 'Kromat iyonu' },
  { formul: 'Cr2O7', bilesim: { Cr: 2, O: 7 }, yuk: -2, ad: 'Dikromat iyonu' },
  { formul: 'CH3COO', bilesim: { C: 2, H: 3, O: 2 }, yuk: -1, ad: 'Asetat iyonu' },
]

/* ————— Bağ türü sınıflaması ————— */
export const BAG_ESIKLERI = { apolar: 0.4, iyonik: 1.7 }

/**
 * İki atom arasındaki bağın türünü belirler.
 * Elektronegatiflik farkı tek başına yeterli değildir; metal–ametal ayrımı
 * da bakılır. Sınır değerler kesin çizgiler değildir, bu yüzden çıktıda
 * "sınıra yakın" uyarısı da verilir.
 */
export function bagSinifla(a, b) {
  const ea = ELEMENT_SOZLUGU[a]
  const eb = ELEMENT_SOZLUGU[b]
  if (!ea || !eb) return null
  const enA = ea.elektronegatiflik
  const enB = eb.elektronegatiflik
  const fark = (enA != null && enB != null) ? Math.round(Math.abs(enA - enB) * 100) / 100 : null
  const metalAmetal = (metalMi(a) && ametalMi(b)) || (metalMi(b) && ametalMi(a))

  let tur, ad, aciklama
  if (metalAmetal && fark != null && fark >= BAG_ESIKLERI.iyonik) {
    tur = 'iyonik'
    ad = 'İyonik bağ'
    aciklama = `Metal ile ametal arasında elektronegatiflik farkı ${fark.toString().replace('.', ',')} — elektron ortaklaşılmaz, aktarılır.`
  } else if (fark == null) {
    tur = 'belirsiz'
    ad = 'Belirlenemedi'
    aciklama = 'Bu elementlerden birinin elektronegatiflik değeri tanımlı değil (soy gazlar gibi).'
  } else if (a === b || fark < BAG_ESIKLERI.apolar) {
    tur = 'apolarKovalent'
    ad = 'Apolar kovalent bağ'
    aciklama = a === b
      ? 'Aynı iki atom arasındaki bağ: elektronegatiflik farkı 0, ortak elektronlar tam ortada.'
      : `Elektronegatiflik farkı çok küçük (${fark.toString().replace('.', ',')}); elektronlar neredeyse eşit paylaşılır.`
  } else {
    tur = 'polarKovalent'
    ad = 'Polar kovalent bağ'
    const daha = enA > enB ? a : b
    aciklama = `Elektronegatiflik farkı ${fark.toString().replace('.', ',')}; ortak elektronlar ${daha} atomuna kayar (${daha}: δ−, diğeri: δ+).`
  }
  return {
    tur,
    ad,
    aciklama,
    fark,
    daha: (enA != null && enB != null) ? (enA > enB ? a : (enB > enA ? b : null)) : null,
    sinirdaYakin: fark != null && (Math.abs(fark - BAG_ESIKLERI.apolar) < 0.1 || Math.abs(fark - BAG_ESIKLERI.iyonik) < 0.15),
  }
}

/** Yapıdaki benzersiz bağ türlerini çıkarır. */
export function yapidakiBaglar(yapi) {
  if (!yapi) return []
  const gorulen = new Map()
  for (const bag of yapi.baglar) {
    const a = yapi.atomlar.find((x) => x.id === bag.a)?.sembol
    const b = yapi.atomlar.find((x) => x.id === bag.b)?.sembol
    if (!a || !b) continue
    const anahtar = [a, b].sort().join('-') + '#' + (bag.derece ?? 1) + (bag.tur === 'iyonik' ? '#iyonik' : '')
    if (gorulen.has(anahtar)) { gorulen.get(anahtar).adet += 1; continue }
    const sinif = bag.tur === 'iyonik'
      ? { tur: 'iyonik', ad: 'İyonik çekim', aciklama: 'Zıt yüklü iyonlar arasındaki elektrostatik çekim.', fark: null }
      : bagSinifla(a, b)
    gorulen.set(anahtar, {
      a, b, derece: bag.derece ?? 1, adet: 1,
      etiket: `${a}${bag.derece === 3 ? '≡' : bag.derece === 2 ? '=' : '–'}${b}`,
      ...sinif,
    })
  }
  return [...gorulen.values()]
}

/* ————— Yardımcılar ————— */
function katMi(bilesim, hedef) {
  const anahtarlar = Object.keys(bilesim)
  const hedefAnahtarlar = Object.keys(hedef)
  if (anahtarlar.length !== hedefAnahtarlar.length) return 0
  let kat = null
  for (const s of hedefAnahtarlar) {
    if (!(s in bilesim)) return 0
    const oran = bilesim[s] / hedef[s]
    if (!Number.isInteger(oran) || oran < 1) return 0
    if (kat == null) kat = oran
    else if (kat !== oran) return 0
  }
  return kat ?? 0
}

function pozitifBasamaklar(sembol) {
  const e = ELEMENT_SOZLUGU[sembol]
  if (!e) return []
  return e.yukseltgenme.map(Number).filter((q) => Number.isFinite(q) && q > 0)
}

function tekAmetalYuku(sembol) {
  const e = ELEMENT_SOZLUGU[sembol]
  if (!e) return null
  if (e.grup === 17) return -1
  if (e.grup === 16) return -2
  if (e.grup === 15) return -3
  if (sembol === 'H') return -1
  return null
}

/** Tek atomlu anyonların Türkçe adları. */
const ANYON_ADLARI = {
  F: 'Florür', Cl: 'Klorür', Br: 'Bromür', I: 'İyodür', O: 'Oksit', S: 'Sülfür',
  N: 'Nitrür', P: 'Fosfür', H: 'Hidrür', C: 'Karbür', Se: 'Selenür', Te: 'Tellürür',
}

export function anyonAdi(sembol) {
  return `${ANYON_ADLARI[sembol] ?? ELEMENT_SOZLUGU[sembol]?.ad ?? sembol} iyonu`
}

function cikarBilesim(kaynak, bilesim, kat) {
  const sonuc = { ...kaynak }
  for (const [sembol, adet] of Object.entries(bilesim)) {
    const kalan = (sonuc[sembol] ?? 0) - adet * kat
    if (kalan < 0) return null
    if (kalan === 0) delete sonuc[sembol]
    else sonuc[sembol] = kalan
  }
  return sonuc
}

const ANYON_ADAYLARI = POLIATOMIK_IYONLAR
  .filter((i) => i.yuk < 0)
  .sort((a, b) => Object.values(b.bilesim).reduce((t, x) => t + x, 0) - Object.values(a.bilesim).reduce((t, x) => t + x, 0))

const AMONYUM = POLIATOMIK_IYONLAR.find((i) => i.formul === 'NH4')

/**
 * Formülü iyonlarına ayırmayı dener (algoritmik).
 *
 * Arama şöyle çalışır: bilinen çok atomlu anyonlar sırayla denenir, formülden
 * k kez çıkarılır ve geriye yalnızca bir katyon (metal ya da amonyum) kalıp
 * kalmadığına bakılır. Kalıyorsa yük dengesi (m·q + k·z = 0) denetlenir.
 * Denge sağlanmazsa sonuç döndürülmez — uydurma yapılmaz.
 */
export function iyonikCozumle(cozum) {
  const atomlar = { ...cozum.atomHaritasi }
  const semboller = Object.keys(atomlar)
  const metalVar = semboller.some(metalMi)
  const amonyumOlabilir = (atomlar.N ?? 0) >= 1 && (atomlar.H ?? 0) >= 4
  if (!metalVar && !amonyumOlabilir) return null

  const katyonCoz = (kalan, k, anyon) => {
    const kalanSemboller = Object.keys(kalan)
    if (!kalanSemboller.length) return null
    // a) Tek metal katyonu
    if (kalanSemboller.length === 1 && metalMi(kalanSemboller[0])) {
      const M = kalanSemboller[0]
      const m = kalan[M]
      for (const q of pozitifBasamaklar(M)) {
        if (m * q + k * anyon.yuk === 0) {
          return {
            katyon: { formul: M, ad: `${ELEMENT_SOZLUGU[M].ad} iyonu`, yuk: q, adet: m },
            anyon: { formul: anyon.formul, ad: anyon.ad, yuk: anyon.yuk, adet: k },
            guvenilir: true,
          }
        }
      }
      return null
    }
    // b) Amonyum katyonu
    const j = katMi(kalan, AMONYUM.bilesim)
    if (j && j * AMONYUM.yuk + k * anyon.yuk === 0) {
      return {
        katyon: { formul: 'NH4', ad: AMONYUM.ad, yuk: 1, adet: j },
        anyon: { formul: anyon.formul, ad: anyon.ad, yuk: anyon.yuk, adet: k },
        guvenilir: true,
      }
    }
    return null
  }

  // 1) Çok atomlu anyon arama (en çok atomlusundan başlayarak)
  for (const anyon of ANYON_ADAYLARI) {
    for (let k = 1; k <= 6; k += 1) {
      const kalan = cikarBilesim(atomlar, anyon.bilesim, k)
      if (!kalan) break
      const sonuc = katyonCoz(kalan, k, anyon)
      if (sonuc) return sonuc
    }
  }

  // 2) İkili iyonik bileşik: metal + tek ametal
  const metaller = semboller.filter(metalMi)
  const ametaller = semboller.filter((x) => !metalMi(x))
  if (metaller.length === 1 && ametaller.length === 1) {
    const M = metaller[0]
    const A = ametaller[0]
    if (!ametalMi(A)) return null
    const z = tekAmetalYuku(A)
    if (z == null) return null
    const m = atomlar[M]
    const k = atomlar[A]
    for (const q of pozitifBasamaklar(M)) {
      if (m * q + k * z === 0) {
        return {
          katyon: { formul: M, ad: `${ELEMENT_SOZLUGU[M].ad} iyonu`, yuk: q, adet: m },
          anyon: { formul: A, ad: anyonAdi(A), yuk: z, adet: k },
          guvenilir: true,
        }
      }
    }
  }
  return null
}

/* ————— Tek atomlu iyon çözümlemesi (algoritmik) ————— */
function tekAtomluIyon(cozum) {
  if (cozum.elementCesidi !== 1 || cozum.yuk === 0) return null
  const { sembol, adet } = cozum.atomlar[0]
  if (adet !== 1) return null
  const element = ELEMENT_SOZLUGU[sembol]
  if (!element) return null
  const elektron = element.atomNo - cozum.yuk
  const soyGazlar = { 2: 'He', 10: 'Ne', 18: 'Ar', 36: 'Kr', 54: 'Xe', 86: 'Rn' }
  const esElektronik = soyGazlar[elektron] ?? null
  return {
    element,
    katyonMu: cozum.yuk > 0,
    protonSayisi: element.atomNo,
    elektronSayisi: elektron,
    verilen: cozum.yuk > 0 ? cozum.yuk : 0,
    alinan: cozum.yuk < 0 ? -cozum.yuk : 0,
    esElektronik,
  }
}

/* ————— Yanlış kavram algılama ————— */
const KAVRAM_KELIMELERI = [
  { kalip: /molek[üu]l/i, kod: 'molekul' },
  { kalip: /bile[şs]ik/i, kod: 'bilesik' },
  { kalip: /element/i, kod: 'element' },
  { kalip: /atom/i, kod: 'atom' },
  { kalip: /iyon/i, kod: 'iyon' },
]

/**
 * Kullanıcı formülün yanına kavram yazdıysa (örn. "NaCl molekülü"),
 * o kavramın doğru olup olmadığını denetler ve kırıcı olmayan bir
 * düzeltme üretir.
 */
export function kavramDenetimi(hamGirdi, sonuc) {
  if (!hamGirdi || !sonuc?.basarili) return null
  const bulunan = KAVRAM_KELIMELERI.find((k) => k.kalip.test(hamGirdi))
  if (!bulunan) return null
  const bilgi = sonuc.sinifBilgisi
  if (!bilgi) return null
  const dogruAd = bilgi.ad

  if (bulunan.kod === 'molekul' && !bilgi.molekul) {
    return {
      tur: 'duzeltme',
      baslik: `"${sonuc.bicimli} molekülü" ifadesi doğru değil`,
      metin: sonuc.uyari?.metin
        ?? `${sonuc.bicimli} bir molekül değildir. Doğru sınıflaması: ${dogruAd}.`,
    }
  }
  if (bulunan.kod === 'bilesik' && !bilgi.bilesik) {
    return {
      tur: 'duzeltme',
      baslik: `"${sonuc.bicimli} bileşiği" ifadesi doğru değil`,
      metin: `Bileşik, farklı elementlerin kimyasal bağla birleşmesiyle oluşan **saf maddedir**. ${sonuc.bicimli} için doğru sınıflama: ${dogruAd}.`,
    }
  }
  if (bulunan.kod === 'element' && sonuc.elementCesidi > 1) {
    return {
      tur: 'duzeltme',
      baslik: `"${sonuc.bicimli} elementi" ifadesi doğru değil`,
      metin: `Element yalnızca tek tür atomdan oluşur. ${sonuc.bicimli} ${sonuc.elementCesidi} farklı element içerir → ${dogruAd}.`,
    }
  }
  if (bulunan.kod === 'atom' && sonuc.toplamAtom > 1) {
    return {
      tur: 'duzeltme',
      baslik: `"${sonuc.bicimli} atomu" ifadesi doğru değil`,
      metin: `Atom tek bir tanecik demektir. ${sonuc.bicimli} ${sonuc.toplamAtom} atomdan oluşur → ${dogruAd}.`,
    }
  }
  if (bulunan.kod === 'iyon' && !bilgi.iyon && sonuc.yuk === 0) {
    return {
      tur: 'duzeltme',
      baslik: `"${sonuc.bicimli} iyonu" ifadesi doğru değil`,
      metin: `İyonun net yükü vardır. ${sonuc.bicimli} yüksüz (nötr) bir taneciktir → ${dogruAd}.`,
    }
  }
  return { tur: 'onay', baslik: 'Kavram doğru kullanılmış', metin: `${sonuc.bicimli} gerçekten ${dogruAd.toLocaleLowerCase('tr')} sınıfındadır.` }
}

/* ————— Ana analiz ————— */

/** Girdideki kavram kelimelerini temizler ("NaCl molekülü" → "NaCl"). */
export function formuluAyikla(ham) {
  return String(ham ?? '')
    .replace(/molek[üu]l[üu]?|bile[şs]i[ğg]i?|elementi?|atomu?|iyonu?|nedir|\?/gi, '')
    .trim()
}

/**
 * Tam analiz.
 * @param {string} ham Kullanıcının yazdığı metin
 */
export function analizEt(ham, derinlik = 0) {
  const temiz = formuluAyikla(ham)

  // Önce ad sözlüğü: "su" formül olarak S+U diye de okunabilir; kullanıcı
  // "su" yazdığında suyu kastediyordur. Bu yüzden ad araması önce gelir.
  if (derinlik === 0) {
    const adAramasi = TUR_ADLARI[temiz.toLocaleLowerCase('tr')] ?? TUR_ADLARI[String(ham).trim().toLocaleLowerCase('tr')]
    if (adAramasi) return analizEt(adAramasi.anahtar, 1)
  }

  const cozum = formuluCozumle(temiz)
  if (!cozum.basarili) {
    return { basarili: false, hata: cozum.hata, girdi: ham }
  }

  const tur = TUR_SOZLUGU[cozum.anahtar] ?? null
  const iyonBilgisi = tekAtomluIyon(cozum)
  const iyonik = tur?.iyonlar
    ? { katyon: { ...tur.iyonlar[0] }, anyon: { ...tur.iyonlar[1] }, guvenilir: true, veriTabanindan: true }
    : (cozum.yuk === 0 ? iyonikCozumle(cozum) : null)

  /* — Sınıflandırma — */
  let sinif = tur?.sinif ?? null
  let sinifKaynagi = tur ? 'veri' : 'hesap'
  if (!sinif) {
    if (iyonBilgisi) sinif = 'tekAtomluIyon'
    else if (cozum.yuk !== 0) sinif = 'cokAtomluIyon'
    else if (cozum.elementCesidi === 1) sinif = cozum.toplamAtom === 1 ? 'atom' : 'elementMolekulu'
    else if (iyonik) sinif = 'iyonikBilesik'
    else sinif = 'molekulerBilesik'
  }
  const sinifBilgisi = SINIFLAR[sinif]

  /* — Yapı verisi — */
  const yapi = tur?.yapi ? tur.yapi() : null
  const baglar = yapi ? yapidakiBaglar(yapi) : []
  // Veri tabanında yoksa da atomlar arası olası bağ türü söylenebilir (yalnızca ikili türlerde)
  const tahminiBag = (!tur && cozum.elementCesidi === 2 && cozum.toplamAtom <= 8)
    ? bagSinifla(cozum.atomlar[0].sembol, cozum.atomlar[1].sembol)
    : null

  const yapiVerisiVar = Boolean(tur)

  return {
    basarili: true,
    girdi: ham,
    ...cozum,
    tur,
    sinif,
    sinifAdi: tur?.sinifBilgisi?.ad ?? sinifBilgisi?.ad ?? 'Belirlenemedi',
    sinifBilgisi,
    sinifKaynagi,
    ad: tur?.ad
      ?? (iyonBilgisi
        ? (iyonBilgisi.katyonMu ? `${iyonBilgisi.element.ad} iyonu` : anyonAdi(iyonBilgisi.element.sembol))
        : (cozum.elementCesidi === 1 && cozum.toplamAtom === 1 ? ELEMENT_SOZLUGU[cozum.atomlar[0].sembol]?.ad : null)),
    yukMetni: yukMetni(cozum.yuk),
    yukDuz: yukDuzMetin(cozum.yuk),
    iyonBilgisi,
    iyonik,
    yapi,
    baglar,
    tahminiBag,
    yapiVerisiVar,
    yapiNotu: yapiVerisiVar
      ? null
      : 'Atom bileşimi hesaplandı ancak bu formülden tek başına kesin moleküler yapı belirlenemiyor. Geometri, Lewis yapısı ve moleküller arası etkileşimler için doğrulanmış yapı verisi gerekir — bu tür henüz atlasın yapı veri tabanında yok.',
    uyari: tur?.uyari ?? null,
  }
}

/** İki türü karşılaştırır; tablo satırları döner. */
export function karsilastir(aFormul, bFormul) {
  const a = analizEt(aFormul)
  const b = analizEt(bFormul)
  if (!a.basarili || !b.basarili) return { basarili: false, a, b }

  const satir = (ozellik, aDeger, bDeger, vurgu = false) => ({ ozellik, a: aDeger ?? '—', b: bDeger ?? '—', farkli: String(aDeger) !== String(bDeger), vurgu })

  const baskinEtkilesim = (x) => x.tur?.mai?.find((m) => m.baskin)?.ad ?? (x.yapiVerisiVar ? '—' : 'Yapı verisi yok')

  return {
    basarili: true,
    a,
    b,
    satirlar: [
      satir('Adı', a.ad, b.ad),
      satir('Tür', a.sinifAdi, b.sinifAdi, true),
      satir('Toplam atom', a.toplamAtom, b.toplamAtom),
      satir('Element çeşidi', a.elementCesidi, b.elementCesidi),
      satir('Net yük', a.yukDuz, b.yukDuz),
      satir('Merkez atom', a.tur?.merkez, b.tur?.merkez),
      satir('Elektron geometrisi', a.tur?.elektronGeo, b.tur?.elektronGeo),
      satir('Molekül geometrisi', a.tur?.geo, b.tur?.geo, true),
      satir('Bağ açısı', a.tur?.aci, b.tur?.aci),
      satir('Molekül içi bağ', a.baglar[0]?.ad ?? a.tahminiBag?.ad, b.baglar[0]?.ad ?? b.tahminiBag?.ad, true),
      satir('Molekül polaritesi', a.tur?.polarite?.sonuc, b.tur?.polarite?.sonuc, true),
      satir('Baskın moleküller arası etkileşim', baskinEtkilesim(a), baskinEtkilesim(b), true),
      satir('Mol kütlesi (g/mol)', a.molKutlesi?.toFixed(2)?.replace('.', ','), b.molKutlesi?.toFixed(2)?.replace('.', ',')),
    ],
  }
}
