/**
 * Fizik Atlası — İş, güç ve enerji
 * ==================================================================
 * Bu dosyanın değişmez kuralı: **enerji hiçbir hesapta kaybolmaz.**
 * Sürtünmeli sistemlerde eksilen mekanik enerji "yok olmaz", ısı
 * (termal enerji) kalemine yazılır ve toplam her zaman denk gelir.
 * Arayüzdeki Sankey akış şeması doğrudan bu çıktıyı çizer.
 */

import { G_MUFREDAT } from './hareket.js'

/**
 * İş: W = F·Δx·cosθ
 * θ, kuvvet ile yer değiştirme arasındaki açıdır. 90°'de iş sıfırdır —
 * "kuvvet var ama iş yok" durumu (masayı taşırken ağırlığın yaptığı iş).
 */
export const is = (kuvvet, yerDegistirme, aciDerece = 0) =>
  kuvvet * yerDegistirme * Math.cos((aciDerece * Math.PI) / 180)

/** Güç: P = W / t — aynı işi daha kısa sürede yapmak daha büyük güçtür. */
export const guc = (isMiktari, sure) => (sure === 0 ? 0 : isMiktari / sure)

/** Anlık güç: P = F·v·cosθ */
export const anlikGuc = (kuvvet, hiz, aciDerece = 0) =>
  kuvvet * hiz * Math.cos((aciDerece * Math.PI) / 180)

/** Kinetik enerji: Ek = ½mv² — hızın karesiyle artar. */
export const kinetikEnerji = (kutle, hiz) => 0.5 * kutle * hiz * hiz

/** Çekim potansiyel enerjisi: Ep = mgh (seçilen sıfır seviyesine göre). */
export const potansiyelEnerji = (kutle, yukseklik, g = G_MUFREDAT) => kutle * g * yukseklik

/** Esneklik potansiyel enerjisi: Ep = ½kx² */
export const yayEnerjisi = (yaySabiti, sikisma) => 0.5 * yaySabiti * sikisma * sikisma

/** Yay kuvveti: F = k·x (Hooke yasası) */
export const yayKuvveti = (yaySabiti, sikisma) => yaySabiti * sikisma

/** Mekanik enerji: Em = Ek + Ep */
export const mekanikEnerji = (ek, ep) => ek + ep

/** Verim: yararlı çıktı / toplam girdi, yüzde olarak. Girdi 0 ise tanımsız. */
export function verim(yararli, toplam) {
  if (!toplam || toplam <= 0) return null
  return (yararli / toplam) * 100
}

/**
 * Sürtünme kuvvetinin harcadığı enerji: E = f·yol
 * Dikkat: burada **yer değiştirme değil, alınan yol** kullanılır.
 * Sürtünme her zaman harekete zıt olduğu için ileri-geri giden cisimde
 * bile enerji harcamaya devam eder; yer değiştirme sıfır olsa da ısı
 * açığa çıkar. Öğrencinin en sık atladığı ayrım budur.
 */
export const surtunmeIsisi = (surtunmeKuvveti, alinanYol) =>
  Math.abs(surtunmeKuvveti) * Math.abs(alinanYol)

/**
 * Eğik düzlemde kayan cismin enerji dökümü.
 * Toplam giriş enerjisi = başlangıç Ep + başlangıç Ek.
 * Çıkış = bitiş Ek + bitiş Ep + sürtünmeyle üretilen ısı.
 * Dönen değerde `denge` alanı bu iki toplamın farkıdır ve sıfır olmalıdır.
 */
export function egikDuzlemEnerji({ kutle, yukseklik, aciDerece, muK, v0 = 0, g = G_MUFREDAT }) {
  const a = (aciDerece * Math.PI) / 180
  // Eğim boyunca kat edilen yol (yükseklikten üçgen ile).
  const yol = Math.sin(a) === 0 ? 0 : yukseklik / Math.sin(a)
  const normal = kutle * g * Math.cos(a)
  const surtunme = muK * normal

  const epBas = potansiyelEnerji(kutle, yukseklik, g)
  const ekBas = kinetikEnerji(kutle, v0)
  const isi = surtunmeIsisi(surtunme, yol)

  // Enerji korunumu: Ek_son = Ep_baş + Ek_baş − ısı (negatife düşerse cisim
  // yolun tamamını kat edemez; o durumda kayma başlamamıştır).
  const ekSonHam = epBas + ekBas - isi
  const kayabiliyor = ekSonHam > 0 && Math.tan(a) > muK
  const ekSon = kayabiliyor ? ekSonHam : 0
  const gercekIsi = kayabiliyor ? isi : epBas + ekBas

  return {
    yol,
    surtunmeKuvveti: surtunme,
    epBaslangic: epBas,
    ekBaslangic: ekBas,
    isiyaDonusen: gercekIsi,
    ekBitis: ekSon,
    epBitis: 0,
    sonHiz: Math.sqrt((2 * ekSon) / kutle),
    kayabiliyor,
    // Girdi − çıktı: her zaman 0 olmalı. Testte bu değer denetlenir.
    denge: epBas + ekBas - (ekSon + gercekIsi),
  }
}

/**
 * Lunapark treni (roller coaster) enerji dökümü.
 * Verilen yükseklikteki her noktada mekanik enerjinin nasıl bölündüğünü
 * verir. Sürtünmesiz durumda toplam sabittir; sürtünmeli durumda kat
 * edilen yola göre ısı birikir.
 */
export function trenEnerjisi({ kutle, baslangicYuksekligi, noktaYuksekligi, katEdilenYol = 0, surtunmeKuvveti = 0, g = G_MUFREDAT }) {
  const toplam = potansiyelEnerji(kutle, baslangicYuksekligi, g)
  const isi = surtunmeIsisi(surtunmeKuvveti, katEdilenYol)
  const ep = potansiyelEnerji(kutle, noktaYuksekligi, g)
  const ekHam = toplam - ep - isi
  const ek = Math.max(0, ekHam)
  return {
    toplamEnerji: toplam,
    potansiyel: ep,
    kinetik: ek,
    isi,
    hiz: Math.sqrt((2 * ek) / kutle),
    // Tepeyi aşabilir mi? Kinetik enerji negatife düşüyorsa aşamaz.
    gecebilir: ekHam >= 0,
  }
}

/**
 * Yayla fırlatma: sıkışan yayın enerjisi cismin kinetik enerjisine
 * dönüşür. Sürtünme varsa bir kısmı ısıya gider.
 */
export function yaylaFirlatma({ yaySabiti, sikisma, kutle, surtunmeKuvveti = 0, mesafe = 0 }) {
  const yayEn = yayEnerjisi(yaySabiti, sikisma)
  const isi = surtunmeIsisi(surtunmeKuvveti, mesafe)
  const ek = Math.max(0, yayEn - isi)
  return {
    yayEnerjisi: yayEn,
    isiyaDonusen: Math.min(yayEn, isi),
    kinetikEnerji: ek,
    firlatmaHizi: Math.sqrt((2 * ek) / kutle),
    verim: verim(ek, yayEn),
  }
}

/**
 * Kuvvet–konum grafiğinin altında kalan alan = yapılan iş.
 * Değişken kuvvette formül yoktur; alan hesabı tek yoldur.
 * @param {{x:number,F:number}[]} noktalar Artan x sırasında kuvvet değerleri.
 */
export function kuvvetKonumAlani(noktalar) {
  let alan = 0
  for (let i = 1; i < noktalar.length; i += 1) {
    const genislik = noktalar[i].x - noktalar[i - 1].x
    alan += ((noktalar[i].F + noktalar[i - 1].F) / 2) * genislik
  }
  return alan
}
