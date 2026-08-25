/**
 * Fizik Atlası — Basınç ve kaldırma kuvveti
 * ==================================================================
 * Sıvı basıncının **kabın şekline ve sıvı miktarına değil**, yalnızca
 * derinliğe, sıvının özkütlesine ve g'ye bağlı olduğu bu dosyanın en
 * kritik iddiasıdır (hidrostatik paradoks). Hesap bunu doğrudan yansıtır:
 * kap geometrisi formüle hiç girmez.
 */

import { G_MUFREDAT } from './hareket.js'

/** Sık kullanılan sıvıların özkütleleri (kg/m³). */
export const SIVILAR = {
  su: { ad: 'Su', ozkutle: 1000, renk: '#38bdf8' },
  tuzluSu: { ad: 'Tuzlu su (deniz)', ozkutle: 1030, renk: '#0ea5e9' },
  zeytinyagi: { ad: 'Zeytinyağı', ozkutle: 910, renk: '#facc15' },
  etilAlkol: { ad: 'Etil alkol', ozkutle: 789, renk: '#c4b5fd' },
  gliserin: { ad: 'Gliserin', ozkutle: 1260, renk: '#a3e635' },
  civa: { ad: 'Cıva', ozkutle: 13600, renk: '#94a3b8' },
}

/** Katı basıncı: P = F / A. Alan sıfır olamaz — sonsuz basınç anlamsızdır. */
export function katiBasinci(kuvvet, alan) {
  if (!alan || alan <= 0) return null
  return kuvvet / alan
}

/** Ağırlık: G = m·g */
export const agirlik = (kutle, g = G_MUFREDAT) => kutle * g

/**
 * Sıvı basıncı: P = h·d·g
 * h yalnızca **serbest yüzeyden olan derinliktir**; kabın şekli, tabanın
 * alanı ve toplam sıvı miktarı sonuca girmez.
 */
export const sividaBasinc = (derinlik, ozkutle, g = G_MUFREDAT) => derinlik * ozkutle * g

/** Sıvının tabana uyguladığı kuvvet: F = P·A (kap ağırlığından bağımsız). */
export const tabanKuvveti = (derinlik, ozkutle, tabanAlani, g = G_MUFREDAT) =>
  sividaBasinc(derinlik, ozkutle, g) * tabanAlani

/**
 * Bir noktadaki toplam basınç: açık kapta atmosfer basıncı da eklenir.
 * Kapalı kapta üstteki gaz basıncı geçerlidir.
 */
export function toplamBasinc({ derinlik, ozkutle, ustBasinc = 101325, g = G_MUFREDAT }) {
  return ustBasinc + sividaBasinc(derinlik, ozkutle, g)
}

/**
 * Pascal ilkesi — hidrolik pres.
 * Kapalı kaptaki sıvıya uygulanan basınç her yöne aynen iletilir:
 *   P₁ = P₂  →  F₁/A₁ = F₂/A₂
 * Kuvvet kazanılır ama **iş kazanılmaz**: küçük piston çok yol alır.
 */
export function hidrolikPres({ kucukAlan, buyukAlan, girisKuvveti, girisYolu = 0 }) {
  if (!kucukAlan || kucukAlan <= 0 || !buyukAlan || buyukAlan <= 0) return null
  const basinc = girisKuvveti / kucukAlan
  const cikisKuvveti = basinc * buyukAlan
  // Sıvı sıkışmaz: yer değiştiren hacimler eşittir → A₁h₁ = A₂h₂
  const cikisYolu = (kucukAlan * girisYolu) / buyukAlan
  return {
    basinc,
    cikisKuvveti,
    cikisYolu,
    kuvvetKazanci: buyukAlan / kucukAlan,
    girisIsi: girisKuvveti * girisYolu,
    cikisIsi: cikisKuvveti * cikisYolu,
  }
}

/**
 * Kaldırma kuvveti (Arşimet): F_k = d_sıvı · V_batan · g
 * Cismin kendi özkütlesi formüle **girmez**; yalnızca batan hacim önemlidir.
 */
export const kaldirmaKuvveti = (sivinOzkutlesi, batanHacim, g = G_MUFREDAT) =>
  sivinOzkutlesi * batanHacim * g

/**
 * Bir cismin sıvıdaki dengesi: yüzer, askıda kalır veya batar.
 *
 * Yüzme durumunda batan hacim oranı = d_cisim / d_sıvı. Bu oran
 * "buzdağının neden 1/9'u görünür" sorusunun cevabıdır.
 */
export function sividakiDurum({ cismikutlesi, cisimHacmi, sivinOzkutlesi, g = G_MUFREDAT }) {
  if (!cisimHacmi || cisimHacmi <= 0) return null
  const cisminOzkutlesi = cismikutlesi / cisimHacmi
  const agirlikKuvveti = cismikutlesi * g
  const tamBatikKaldirma = kaldirmaKuvveti(sivinOzkutlesi, cisimHacmi, g)

  let durum
  let batanHacim
  if (cisminOzkutlesi < sivinOzkutlesi) {
    durum = 'yuzer'
    // Denge: ağırlık = kaldırma → V_batan = m / d_sıvı
    batanHacim = cismikutlesi / sivinOzkutlesi
  } else if (Math.abs(cisminOzkutlesi - sivinOzkutlesi) < 1e-9) {
    durum = 'askida'
    batanHacim = cisimHacmi
  } else {
    durum = 'batar'
    batanHacim = cisimHacmi
  }

  const kaldirma = kaldirmaKuvveti(sivinOzkutlesi, batanHacim, g)
  return {
    cisminOzkutlesi,
    durum,
    batanHacim,
    batanOran: batanHacim / cisimHacmi,
    gorunenOran: 1 - batanHacim / cisimHacmi,
    agirlik: agirlikKuvveti,
    kaldirmaKuvveti: kaldirma,
    tamBatikKaldirma,
    // Batan cisimde tartıda okunan "görünen ağırlık".
    gorunenAgirlik: Math.max(0, agirlikKuvveti - kaldirma),
    // Batan cismin net ivmesi (serbest bırakıldığında).
    netIvme: (kaldirma - agirlikKuvveti) / cismikutlesi,
  }
}

/**
 * Yük alan geminin batma derinliği.
 * Denge: (gemi + yük) ağırlığı = kaldırma kuvveti
 *   → h = (m_toplam) / (d_sıvı · A_taban)
 */
export function geminBatmasi({ gemiKutlesi, yukKutlesi, tabanAlani, sivinOzkutlesi }) {
  if (!tabanAlani || tabanAlani <= 0) return null
  const toplam = gemiKutlesi + yukKutlesi
  return {
    toplamKutle: toplam,
    batmaDerinligi: toplam / (sivinOzkutlesi * tabanAlani),
    batanHacim: toplam / sivinOzkutlesi,
  }
}

/**
 * Barometre: cıva sütununun yüksekliği ile atmosfer basıncı.
 * Deniz seviyesinde 76 cm cıva = 101325 Pa. Sıvı değişirse yükseklik
 * özkütteyle ters orantılı değişir; su ile yaklaşık 10,3 m gerekir.
 */
export function barometre({ sivinOzkutlesi = 13600, basinc = 101325, g = G_MUFREDAT }) {
  return {
    yukseklik: basinc / (sivinOzkutlesi * g),
    basinc,
  }
}

/** Yüksekliğe göre atmosfer basıncı (barometrik formül, yaklaşık). */
export function yukseklikteBasinc(rakim) {
  return 101325 * Math.exp(-rakim / 8400)
}
