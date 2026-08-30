/**
 * Dr. Koç — Kimya Atlası / Lewis Yapısı
 * ------------------------------------------------------------------
 * Lewis yapısı **geometri göstermez**; bağ ve ortaklanmamış elektron
 * çiftlerinin dağılımını gösterir. Bu yüzden yerleşim bilinçli olarak
 * dik açılı (sağ-sol-yukarı-aşağı) kuralına göre yapılır: öğrenci
 * "Lewis yapısındaki açı gerçek bağ açısıdır" yanılgısına düşmesin.
 *
 * Formal yük elle yazılmaz, hesaplanır:
 *   formal yük = değerlik e⁻ − ortaklanmamış e⁻ − bağ sayısı
 * Toplam formal yükün türün net yüküne eşit olması testlerde doğrulanır.
 */

import { ELEMENT_SOZLUGU } from '../../data/kimya/elementler.js'

const D = Math.PI / 180

/** Merkez atomun komşularını yerleştirme sırası (derece). */
const MERKEZ_SIRASI = [0, 180, 270, 90, 45, 315, 135, 225]

/**
 * @param {{atomlar:{sembol:string, ciftler?:number}[], baglar:{a:number,b:number,derece?:number}[], merkez?:number}} tanim
 * @param {number} netYuk
 */
export function lewisKur(tanim, netYuk = 0) {
  const { atomlar: hamAtomlar, baglar: hamBaglar, merkez = 0 } = tanim
  const komsular = hamAtomlar.map(() => [])
  hamBaglar.forEach((bag, i) => {
    komsular[bag.a].push({ komsu: bag.b, bagIndeks: i })
    komsular[bag.b].push({ komsu: bag.a, bagIndeks: i })
  })

  /* ————— Yerleşim: merkezden dışa doğru genişleyen basit ağaç ————— */
  const konumlar = new Array(hamAtomlar.length).fill(null)
  const gelisAcisi = new Array(hamAtomlar.length).fill(null)
  const kullanilanAcilar = hamAtomlar.map(() => [])
  konumlar[merkez] = { x: 0, y: 0 }
  const kuyruk = [merkez]
  const gorulen = new Set([merkez])

  while (kuyruk.length) {
    const id = kuyruk.shift()
    const bosSira = gelisAcisi[id] == null
      ? MERKEZ_SIRASI
      : [gelisAcisi[id] + 180, gelisAcisi[id] + 90, gelisAcisi[id] - 90, gelisAcisi[id] + 45, gelisAcisi[id] - 45]
    let sira = 0
    for (const { komsu } of komsular[id]) {
      if (gorulen.has(komsu)) continue
      let aci = bosSira[sira % bosSira.length]
      sira += 1
      kullanilanAcilar[id].push(aci)
      const r = 1
      konumlar[komsu] = {
        x: konumlar[id].x + r * Math.cos(aci * D),
        y: konumlar[id].y - r * Math.sin(aci * D),
      }
      gelisAcisi[komsu] = aci + 180
      kullanilanAcilar[komsu].push(aci + 180)
      gorulen.add(komsu)
      kuyruk.push(komsu)
    }
  }

  /* ————— Atom bilgisi: formal yük, oktet, çift yönleri ————— */
  const atomlar = hamAtomlar.map((atom, id) => {
    const element = ELEMENT_SOZLUGU[atom.sembol]
    const degerlik = element ? element.degerlik : 0
    const ciftler = atom.ciftler ?? 0
    const bagSayisi = komsular[id].reduce((t, k) => t + (hamBaglar[k.bagIndeks].derece ?? 1), 0)
    const formalYuk = degerlik - 2 * ciftler - bagSayisi
    const cevredekiElektron = 2 * ciftler + 2 * bagSayisi
    const hedef = atom.sembol === 'H' ? 2 : (element && element.periyot === 1 ? 2 : 8)
    const uc = komsular[id].length <= 1 && hamAtomlar.length > 1

    // Ortaklanmamış çiftlerin yönü: uç atomlarda önce dik yönler (klasik gösterim)
    const doluAcilar = kullanilanAcilar[id]
    const gelis = gelisAcisi[id]
    let adaylar
    if (uc && gelis != null) {
      adaylar = [gelis + 90, gelis - 90, gelis + 180, gelis + 45, gelis - 45]
    } else {
      adaylar = MERKEZ_SIRASI.map((a) => a)
    }
    const ciftAcilari = []
    for (const aday of adaylar) {
      if (ciftAcilari.length >= ciftler) break
      const cakisma = doluAcilar.some((a) => Math.abs(((a - aday + 540) % 360) - 180) < 20)
      if (!cakisma) ciftAcilari.push(aday)
    }
    // Yer kalmadıysa kalan çiftleri ara açılara serpiştir.
    let ekAci = 22
    while (ciftAcilari.length < ciftler) { ciftAcilari.push(gelis != null ? gelis + 180 + ekAci : ekAci); ekAci += 45 }

    return {
      id,
      sembol: atom.sembol,
      etiket: atom.etiket ?? atom.sembol,
      x: konumlar[id]?.x ?? 0,
      y: konumlar[id]?.y ?? 0,
      ciftler,
      ciftAcilari,
      bagSayisi,
      formalYuk,
      cevredekiElektron,
      oktet: cevredekiElektron === hedef,
      oktetDurumu: cevredekiElektron === hedef ? 'tam'
        : cevredekiElektron < hedef ? 'eksik' : 'genisletilmis',
      degerlik,
    }
  })

  const baglar = hamBaglar.map((bag) => ({
    a: bag.a,
    b: bag.b,
    derece: bag.derece ?? 1,
    tur: bag.tur ?? 'kovalent',
  }))

  const toplamFormalYuk = atomlar.reduce((t, a) => t + a.formalYuk, 0)

  return {
    atomlar,
    baglar,
    merkez,
    netYuk,
    toplamFormalYuk,
    tutarli: toplamFormalYuk === netYuk,
    toplamDegerlik: atomlar.reduce((t, a) => t + a.degerlik, 0) - netYuk,
  }
}

/** Bir tanım listesinden rezonans yapıları kurar. */
export function rezonansKur(tanimlar, netYuk = 0) {
  return tanimlar.map((t) => lewisKur(t, netYuk))
}

/** İyon parantezi gerekiyor mu? (yüklü türlerde Lewis yapısı köşeli parantez içine alınır) */
export function parantezGerekliMi(netYuk) {
  return netYuk !== 0
}
