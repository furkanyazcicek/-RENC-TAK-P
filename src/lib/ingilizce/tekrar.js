/**
 * DRKOÇ — TEKRAR VE KALICI ÖĞRENME
 * ==================================================================
 *
 * İki ilkeye dayanır:
 *
 * 1) AKTİF HATIRLAMA — "gördüm, anladım" öğrenmek değildir. Öğrenci
 *    kelimeyi kendisi hatırlamak zorunda kalmalıdır. Bu yüzden kartlar
 *    "çevir ve bak" değil, cevap üretme biçiminde çalışır.
 *
 * 2) ARALIKLI TEKRAR — bir kelime doğru hatırlandıkça tekrar aralığı
 *    uzar, unutulduğunda kısalır. Aralıklar SM-2 ailesinin sadeleştirilmiş
 *    hâlidir: 0 → 1 → 2 → 4 → 8 → 16 → 32 → 64 gün.
 *
 * BİR KELİME DÖRT AYRI BOYUTTA ÖLÇÜLÜR. "Kelimeyi biliyorum" demek
 * bunların hepsini yapabilmek demektir:
 *
 *   tanima     : İngilizceyi görünce anlamını biliyor
 *   baglam     : Cümle içinde doğru anlamı seçebiliyor
 *   tamamlama  : Boşluğa doğru biçimde yazabiliyor (çekim, yazım)
 *   uretim     : Kendi kurduğu cümlede kullanabiliyor
 *
 * Bir boyutta iyi olmak diğerini kanıtlamaz — bu yüzden ustalık kararı
 * dört boyuta birden bakar.
 */

import { DURUMLAR } from './ilerleme.js'

/** Aşamaya karşılık gelen tekrar aralığı (gün). */
export const ARALIKLAR = [0, 1, 2, 4, 8, 16, 32, 64]

export const BOYUTLAR = {
  tanima: { ad: 'Tanıma', aciklama: 'İngilizce kelimeyi görünce anlamını biliyor musun?' },
  baglam: { ad: 'Bağlamda anlama', aciklama: 'Cümle içinde doğru anlamı seçebiliyor musun?' },
  tamamlama: { ad: 'Doğru biçim', aciklama: 'Boşluğa doğru yazabiliyor musun?' },
  uretim: { ad: 'Kendi cümlende kullanma', aciklama: 'Kendi kurduğun cümlede kullanabiliyor musun?' },
}

export const BOYUT_ANAHTARLARI = Object.keys(BOYUTLAR)

/** Yeni bir kart. */
export function yeniKart(kelimeId) {
  return {
    id: kelimeId,
    asama: 0,
    boyutlar: { tanima: 0, baglam: 0, tamamlama: 0, uretim: 0 },
    dogru: 0,
    yanlis: 0,
    sonrakiTarih: gunEkle(new Date(), 0).toISOString(),
    sonTarih: null,
  }
}

function gunEkle(tarih, gun) {
  const t = new Date(tarih)
  t.setHours(0, 0, 0, 0)
  t.setDate(t.getDate() + gun)
  return t
}

/** Kart bugün çalışılmalı mı? */
export function kartVaktiGeldiMi(kart, simdi = new Date()) {
  if (!kart) return true
  const hedef = new Date(kart.sonrakiTarih ?? 0)
  const bugun = new Date(simdi)
  bugun.setHours(23, 59, 59, 999)
  return hedef <= bugun
}

/**
 * Kartın öğrenme durumu. İlerleme ekranındaki renk ve etiket buradan gelir;
 * "yüzde kaç tamamlandı" yerine gerçek öğrenme durumu gösterilir.
 */
export function kartDurumu(kart) {
  if (!kart || (!kart.dogru && !kart.yanlis)) return DURUMLAR.BASLANMADI
  const b = kart.boyutlar ?? {}
  const hepsiSaglam = BOYUT_ANAHTARLARI.every((k) => (b[k] ?? 0) >= 2)
  if (hepsiSaglam && kart.asama >= 5) return DURUMLAR.USTALASILDI
  if (hepsiSaglam) return DURUMLAR.GUCLENIYOR
  if (kart.yanlis > kart.dogru) return DURUMLAR.TEKRAR_GEREKLI
  if (kart.asama >= 2) return DURUMLAR.TAMAMLANDI
  return DURUMLAR.CALISILIYOR
}

/**
 * Bir cevabın ardından kartı günceller.
 *
 * Doğruysa aşama bir artar ve o boyutun güveni yükselir.
 * Yanlışsa aşama İKİ basamak geri gider (sıfıra değil) — tek hata her
 * şeyi silmemeli, ama kelime yakın zamanda tekrar karşımıza çıkmalı.
 */
export function kartCevapla(kart, boyut, dogruMu, simdi = new Date()) {
  const temel = kart ?? yeniKart(kart?.id)
  const boyutlar = { ...temel.boyutlar }
  if (BOYUT_ANAHTARLARI.includes(boyut)) {
    boyutlar[boyut] = dogruMu
      ? Math.min(3, (boyutlar[boyut] ?? 0) + 1)
      : Math.max(0, (boyutlar[boyut] ?? 0) - 1)
  }

  const asama = dogruMu
    ? Math.min(ARALIKLAR.length - 1, (temel.asama ?? 0) + 1)
    : Math.max(0, (temel.asama ?? 0) - 2)

  return {
    ...temel,
    boyutlar,
    asama,
    dogru: (temel.dogru ?? 0) + (dogruMu ? 1 : 0),
    yanlis: (temel.yanlis ?? 0) + (dogruMu ? 0 : 1),
    sonTarih: simdi.toISOString(),
    sonrakiTarih: gunEkle(simdi, ARALIKLAR[asama]).toISOString(),
  }
}

/**
 * Bugünün tekrar oturumunu kurar.
 *
 * Sıra bilinçli: önce UNUTULMAK ÜZERE olanlar (vakti gelmiş kartlar),
 * sonra yeni kelimeler. Yeni kelime öğrenmek, unutulan kelimeyi
 * kurtarmaktan daha az önceliklidir — aksi hâlde öğrenci sürekli yeni
 * kelime görür ve hiçbirini kalıcı hâle getiremez.
 *
 * @param {Object[]} kelimeler  havuzdaki kelime kayıtları
 * @param {Object} kartlar      ilerleme.kartlar
 * @param {Object} secenek      { yeniLimit, tekrarLimit, seviyeler }
 */
export function tekrarOturumu(kelimeler, kartlar = {}, secenek = {}) {
  const { yeniLimit = 5, tekrarLimit = 15, seviyeler = null } = secenek
  const simdi = new Date()

  const uygun = seviyeler
    ? kelimeler.filter((k) => seviyeler.includes(k.seviye))
    : kelimeler

  const vaktiGelen = []
  const yeni = []

  uygun.forEach((kelime) => {
    const kart = kartlar[kelime.id]
    if (!kart) {
      yeni.push({ kelime, kart: yeniKart(kelime.id), yeniMi: true })
    } else if (kartVaktiGeldiMi(kart, simdi)) {
      vaktiGelen.push({ kelime, kart, yeniMi: false })
    }
  })

  // En çok gecikmiş olan en önde: unutulmaya en yakın kelime önce gelir.
  vaktiGelen.sort((a, b) => new Date(a.kart.sonrakiTarih) - new Date(b.kart.sonrakiTarih))

  return [...vaktiGelen.slice(0, tekrarLimit), ...yeni.slice(0, yeniLimit)]
}

/**
 * Bir kart için sırada hangi boyutun sorulacağını seçer.
 * En zayıf boyut önce gelir; hepsi eşitse kolaydan zora ilerlenir.
 */
export function sonrakiBoyut(kart) {
  const b = kart?.boyutlar ?? {}
  let enZayif = BOYUT_ANAHTARLARI[0]
  let enDusuk = Infinity
  for (const anahtar of BOYUT_ANAHTARLARI) {
    const deger = b[anahtar] ?? 0
    if (deger < enDusuk) {
      enDusuk = deger
      enZayif = anahtar
    }
  }
  return enZayif
}

/** Kaç kelime hangi durumda — gelişim ekranındaki özet. */
export function kartOzeti(kartlar = {}) {
  const ozet = {
    [DURUMLAR.BASLANMADI]: 0,
    [DURUMLAR.CALISILIYOR]: 0,
    [DURUMLAR.TAMAMLANDI]: 0,
    [DURUMLAR.TEKRAR_GEREKLI]: 0,
    [DURUMLAR.GUCLENIYOR]: 0,
    [DURUMLAR.USTALASILDI]: 0,
  }
  Object.values(kartlar).forEach((kart) => {
    ozet[kartDurumu(kart)] += 1
  })
  return ozet
}

/** Bugün tekrar bekleyen kart sayısı. */
export function bekleyenSayisi(kartlar = {}, simdi = new Date()) {
  return Object.values(kartlar).filter((k) => kartVaktiGeldiMi(k, simdi)).length
}
