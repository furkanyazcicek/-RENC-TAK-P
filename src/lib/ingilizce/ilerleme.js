/**
 * DRKOÇ — İNGİLİZCE İLERLEME DEPOSU
 * ==================================================================
 *
 * Öğrencinin bu bölümdeki bütün durumu tek bir yerde tutulur: hedefleri,
 * seviye tespit sonucu, ders durumları, kelime tekrar kartları, beceri
 * ölçümleri, hata defteri ve günlük çalışma kaydı.
 *
 * NEDEN ŞİMDİLİK TARAYICIDA: bu veriyi Supabase'e yazmak yeni tablo ve
 * yeni RLS kuralı demek. Veritabanı yapısını değiştirmek onay gerektiren
 * bir iş olduğu için ilk sürüm tarayıcı deposuyla çalışıyor — atlaslarda
 * kullanılan kalıbın aynısı (bkz. lib/biyoloji/ilerleme.js).
 *
 * BULUTA TAŞIMA HAZIRLIĞI: ekranlar `localStorage`'a hiç dokunmaz; yalnız
 * buradaki fonksiyonları çağırır. Supabase tablosu açıldığında yalnız bu
 * dosyanın `oku`/`yaz` gövdesi değişir, tek bir ekran dosyası değişmez.
 * `disariAktar()` mevcut durumun tamamını JSON olarak verir; taşıma günü
 * öğrencinin ilerlemesi kaybolmaz.
 */

import { BECERI_ANAHTARLARI } from './seviyeler.js'

const ANAHTAR = 'drkoc-ingilizce-v1'
const SURUM = 1

/** Ders/modül ustalık durumları — arayüzdeki tek doğruluk kaynağı. */
export const DURUMLAR = {
  BASLANMADI: 'baslanmadi',
  CALISILIYOR: 'calisiliyor',
  TAMAMLANDI: 'tamamlandi',
  TEKRAR_GEREKLI: 'tekrar-gerekli',
  GUCLENIYOR: 'gucleniyor',
  USTALASILDI: 'ustalasildi',
}

export const DURUM_ETIKETLERI = {
  baslanmadi: { ad: 'Başlanmadı', tone: 'neutral' },
  calisiliyor: { ad: 'Çalışılıyor', tone: 'info' },
  tamamlandi: { ad: 'Tamamlandı', tone: 'brand' },
  'tekrar-gerekli': { ad: 'Tekrar gerekli', tone: 'warning' },
  gucleniyor: { ad: 'Güçleniyor', tone: 'aqua' },
  ustalasildi: { ad: 'Ustalaşıldı', tone: 'success' },
}

export const BOS_ILERLEME = {
  surum: SURUM,
  /** Başlangıç akışında toplanan hedefler. */
  profil: null,
  /** Seviye tespit sonucu (bkz. seviyeTespit.js). */
  tespit: null,
  /** dersId → { durum, deneme, dogru, toplam, sonTarih, ilkTarih, puan } */
  dersler: {},
  /** kelimeId → tekrar kartı (bkz. tekrar.js) */
  kartlar: {},
  /** beceri → { puan (0-100), olcum, sonTarih } */
  beceriler: {},
  /** Türkçe düşünme izleri: kod → { sayi, sonTarih } */
  izler: {},
  /** 'YYYY-AA-GG' → { dakika, alistirma, dogru, dersler:[] } */
  gunluk: {},
  /** Öğrencinin yazma görevi taslakları: alistirmaId → { taslak, son, tarih } */
  yazmalar: {},
  /** Öğrencinin kaydettiği (yıldızladığı) kelime id'leri */
  favoriler: [],
  /** Son açılan ders — "kaldığın yerden devam et" için */
  sonDers: null,
  /** Kılavuzun okunup okunmadığı gibi küçük arayüz durumları */
  arayuz: {},
}

/* ------------------------------------------------------------------ */
/* Depo                                                                */
/* ------------------------------------------------------------------ */

function klon(nesne) {
  return typeof structuredClone === 'function'
    ? structuredClone(nesne)
    : JSON.parse(JSON.stringify(nesne))
}

export function ilerlemeOku() {
  if (typeof localStorage === 'undefined') return klon(BOS_ILERLEME)
  try {
    const ham = localStorage.getItem(ANAHTAR)
    if (!ham) return klon(BOS_ILERLEME)
    const veri = JSON.parse(ham)
    if (veri?.surum !== SURUM) return klon(BOS_ILERLEME)
    return { ...klon(BOS_ILERLEME), ...veri }
  } catch {
    return klon(BOS_ILERLEME)
  }
}

/**
 * Yamayı mevcut duruma yazar ve `ingilizce-ilerleme` olayını yayar.
 * Aynı sekmedeki başka ekranlar (üst şeritteki seri sayacı gibi) bu olayı
 * dinleyerek kendini tazeler; her ekran ayrı bir zamanlayıcı kurmaz.
 */
export function ilerlemeYaz(yama) {
  const yeni = { ...ilerlemeOku(), ...yama, surum: SURUM }
  try {
    localStorage.setItem(ANAHTAR, JSON.stringify(yeni))
  } catch {
    /* Tarayıcı depolamayı kapatmış ya da kota dolmuş olabilir. Ekran
       çalışmaya devam eder, yalnız kayıt tutulmaz. */
  }
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('ingilizce-ilerleme', { detail: yeni }))
  }
  return yeni
}

/** Öğrencinin tüm ilerlemesini JSON olarak verir (yedek / buluta taşıma). */
export function disariAktar() {
  return JSON.stringify(ilerlemeOku(), null, 2)
}

/** Yalnızca açık onayla siler — yanlışlıkla sıfırlama olmasın. */
export function ilerlemeyiSil(onay) {
  if (onay !== 'INGILIZCE-SIFIRLA') return false
  try {
    localStorage.removeItem(ANAHTAR)
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('ingilizce-ilerleme', { detail: klon(BOS_ILERLEME) }))
    }
    return true
  } catch {
    return false
  }
}

/* ------------------------------------------------------------------ */
/* Profil ve seviye tespiti                                            */
/* ------------------------------------------------------------------ */

export function profilKaydet(profil) {
  return ilerlemeYaz({ profil: { ...profil, tarih: new Date().toISOString() } })
}

export function tespitKaydet(sonuc) {
  const eski = ilerlemeOku()
  const beceriler = { ...eski.beceriler }
  Object.entries(sonuc.beceriPuanlari ?? {}).forEach(([beceri, puan]) => {
    if (puan == null) return
    beceriler[beceri] = { puan, olcum: 'seviye-tespit', sonTarih: new Date().toISOString() }
  })
  const izler = { ...eski.izler }
  ;(sonuc.izler ?? []).forEach((kod) => {
    izler[kod] = { sayi: (izler[kod]?.sayi ?? 0) + 1, sonTarih: new Date().toISOString() }
  })
  return ilerlemeYaz({
    tespit: { ...sonuc, tarih: new Date().toISOString() },
    beceriler,
    izler,
  })
}

/** Öğrenci ilk kullanım akışını tamamlamış mı? */
export function baslangicTamamMi(ilerleme = ilerlemeOku()) {
  return Boolean(ilerleme.profil)
}

export function tespitTamamMi(ilerleme = ilerlemeOku()) {
  return Boolean(ilerleme.tespit)
}

/* ------------------------------------------------------------------ */
/* Ders durumu                                                          */
/* ------------------------------------------------------------------ */

export function dersDurumu(dersId, ilerleme = ilerlemeOku()) {
  return ilerleme.dersler?.[dersId] ?? { durum: DURUMLAR.BASLANMADI, deneme: 0 }
}

export function dersBasla(dersId) {
  const eski = ilerlemeOku()
  const kayit = eski.dersler[dersId]
  if (kayit && kayit.durum !== DURUMLAR.BASLANMADI) {
    return ilerlemeYaz({ sonDers: dersId })
  }
  return ilerlemeYaz({
    sonDers: dersId,
    dersler: {
      ...eski.dersler,
      [dersId]: {
        durum: DURUMLAR.CALISILIYOR,
        deneme: 0,
        dogru: 0,
        toplam: 0,
        ilkTarih: new Date().toISOString(),
      },
    },
  })
}

/**
 * Bir dersi bitirir ve ustalık durumunu belirler.
 *
 * Dersi AÇMAK "öğrendim" demek değildir — durum yalnız çözülen
 * alıştırmaların oranına göre değişir:
 *
 *   %90 ve üzeri → ikinci kez de başarılıysa "ustalaşıldı", ilkinde "güçleniyor"
 *   %70–%89      → "tamamlandı"
 *   %70 altı     → "tekrar gerekli"
 *
 * Öğrenci zayıf olduğu dersi tekrar çalıştığında yeni performansa göre
 * durum yükselir; eski düşük sonuç öğrenciyi kilitlemez.
 */
export function dersTamamla(dersId, { dogru, toplam, dakika = 0, izler = [] }) {
  const eski = ilerlemeOku()
  const onceki = eski.dersler[dersId] ?? { deneme: 0 }
  const oran = toplam > 0 ? dogru / toplam : 0
  const deneme = (onceki.deneme ?? 0) + 1

  let durum
  if (oran >= 0.9) {
    durum = deneme > 1 || onceki.durum === DURUMLAR.GUCLENIYOR
      ? DURUMLAR.USTALASILDI
      : DURUMLAR.GUCLENIYOR
  } else if (oran >= 0.7) {
    durum = DURUMLAR.TAMAMLANDI
  } else {
    durum = DURUMLAR.TEKRAR_GEREKLI
  }

  // Daha önce ustalaşılmış bir ders zayıf bir denemeyle geri düşmez,
  // ama "tekrar gerekli" işareti alır ki plana geri girsin.
  if (onceki.durum === DURUMLAR.USTALASILDI && durum !== DURUMLAR.USTALASILDI) {
    durum = DURUMLAR.TEKRAR_GEREKLI
  }

  const izKayit = { ...eski.izler }
  izler.forEach((kod) => {
    izKayit[kod] = { sayi: (izKayit[kod]?.sayi ?? 0) + 1, sonTarih: new Date().toISOString() }
  })

  const guncel = ilerlemeYaz({
    izler: izKayit,
    dersler: {
      ...eski.dersler,
      [dersId]: {
        ...onceki,
        durum,
        deneme,
        dogru,
        toplam,
        oran: Math.round(oran * 100),
        enIyiOran: Math.max(onceki.enIyiOran ?? 0, Math.round(oran * 100)),
        sonTarih: new Date().toISOString(),
        ilkTarih: onceki.ilkTarih ?? new Date().toISOString(),
      },
    },
  })

  gunlukKaydet({ dakika, alistirma: toplam, dogru, dersId })
  return guncel
}

/* ------------------------------------------------------------------ */
/* Beceri ölçümü                                                        */
/* ------------------------------------------------------------------ */

/**
 * Beceri puanını yumuşak günceller. Tek bir alıştırma bütün ölçümü
 * değiştirmemeli; bu yüzden yeni ölçüm mevcut puana %30 ağırlıkla karışır.
 */
export function beceriGuncelle(beceri, yeniPuan) {
  if (!BECERI_ANAHTARLARI.includes(beceri) || !Number.isFinite(yeniPuan)) return ilerlemeOku()
  const eski = ilerlemeOku()
  const mevcut = eski.beceriler[beceri]?.puan
  const puan = mevcut == null ? yeniPuan : Math.round(mevcut * 0.7 + yeniPuan * 0.3)
  return ilerlemeYaz({
    beceriler: {
      ...eski.beceriler,
      [beceri]: { puan: Math.max(0, Math.min(100, puan)), olcum: 'alistirma', sonTarih: new Date().toISOString() },
    },
  })
}

/* ------------------------------------------------------------------ */
/* Günlük çalışma kaydı                                                 */
/* ------------------------------------------------------------------ */

export function bugunAnahtari(tarih = new Date()) {
  const y = tarih.getFullYear()
  const a = String(tarih.getMonth() + 1).padStart(2, '0')
  const g = String(tarih.getDate()).padStart(2, '0')
  return `${y}-${a}-${g}`
}

export function gunlukKaydet({ dakika = 0, alistirma = 0, dogru = 0, dersId = null }) {
  const eski = ilerlemeOku()
  const gun = bugunAnahtari()
  const onceki = eski.gunluk[gun] ?? { dakika: 0, alistirma: 0, dogru: 0, dersler: [] }
  return ilerlemeYaz({
    gunluk: {
      ...eski.gunluk,
      [gun]: {
        dakika: onceki.dakika + dakika,
        alistirma: onceki.alistirma + alistirma,
        dogru: onceki.dogru + dogru,
        dersler: dersId && !onceki.dersler.includes(dersId)
          ? [...onceki.dersler, dersId]
          : onceki.dersler,
      },
    },
  })
}

/**
 * Kesintisiz çalışma serisi (gün). Bugün henüz çalışılmadıysa dün
 * çalışılmışsa seri KIRILMIŞ sayılmaz — gün daha bitmedi. Öğrenciyi
 * gereksiz yere cezalandırmamak için bilinçli bir tercih.
 */
export function seriHesapla(ilerleme = ilerlemeOku()) {
  const gunler = new Set(Object.keys(ilerleme.gunluk ?? {}).filter((g) => (ilerleme.gunluk[g]?.alistirma ?? 0) > 0))
  if (!gunler.size) return 0
  const bugun = new Date()
  let seri = 0
  const imlec = new Date(bugun)
  if (!gunler.has(bugunAnahtari(imlec))) imlec.setDate(imlec.getDate() - 1)
  while (gunler.has(bugunAnahtari(imlec))) {
    seri += 1
    imlec.setDate(imlec.getDate() - 1)
  }
  return seri
}

/** Son N günün çalışma özeti — gelişim ekranındaki şerit için. */
export function sonGunler(n = 14, ilerleme = ilerlemeOku()) {
  const liste = []
  for (let i = n - 1; i >= 0; i -= 1) {
    const t = new Date()
    t.setDate(t.getDate() - i)
    const anahtar = bugunAnahtari(t)
    liste.push({ gun: anahtar, tarih: t, ...(ilerleme.gunluk[anahtar] ?? { dakika: 0, alistirma: 0, dogru: 0, dersler: [] }) })
  }
  return liste
}

/* ------------------------------------------------------------------ */
/* Yardımcılar                                                          */
/* ------------------------------------------------------------------ */

export function favoriDegistir(kelimeId) {
  const eski = ilerlemeOku()
  const varMi = eski.favoriler.includes(kelimeId)
  return ilerlemeYaz({
    favoriler: varMi ? eski.favoriler.filter((x) => x !== kelimeId) : [...eski.favoriler, kelimeId],
  })
}

export function yazmaKaydet(alistirmaId, { taslak, son }) {
  const eski = ilerlemeOku()
  return ilerlemeYaz({
    yazmalar: {
      ...eski.yazmalar,
      [alistirmaId]: {
        taslak: taslak ?? eski.yazmalar[alistirmaId]?.taslak ?? '',
        son: son ?? eski.yazmalar[alistirmaId]?.son ?? '',
        tarih: new Date().toISOString(),
      },
    },
  })
}

export function arayuzKaydet(anahtar, deger) {
  const eski = ilerlemeOku()
  return ilerlemeYaz({ arayuz: { ...eski.arayuz, [anahtar]: deger } })
}

/** En sık tekrar eden Türkçe düşünme izleri (çoktan aza). */
export function sikIzler(ilerleme = ilerlemeOku(), adet = 5) {
  return Object.entries(ilerleme.izler ?? {})
    .map(([kod, v]) => ({ kod, ...v }))
    .sort((a, b) => b.sayi - a.sayi)
    .slice(0, adet)
}
