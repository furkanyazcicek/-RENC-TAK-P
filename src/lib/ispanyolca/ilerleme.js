/**
 * DRKOÇ — İSPANYOLCA İLERLEME DEPOSU
 * ==================================================================
 *
 * Öğrencinin bu bölümdeki bütün durumu tek bir yerde tutulur: hedefleri,
 * seviye tespit sonucu, ders durumları, kelime tekrar kartları, beceri
 * ölçümleri, hata defteri ve günlük çalışma kaydı.
 *
 * Yerel-öncelikli depo, oturum açmış öğrencide hesap kapsamlı bir cihaz
 * kopyası kullanır. Bulut senkronu LanguageProgressBoundary tarafından
 * yürütülür; eski anonim cihaz kaydı açık onay olmadan hesaba bağlanmaz.
 */

import { BECERI_ANAHTARLARI } from './seviyeler.js'
import { emitLanguageActivity, readLanguageProgress, resetLocalLanguageProgress, writeLanguageProgress } from '../learning/languageActivity/storage.js'

const DIL = 'es'
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

export function ilerlemeOku() {
  return readLanguageProgress({ language: DIL, empty: BOS_ILERLEME })
}

/**
 * Yamayı mevcut duruma yazar ve `ispanyolca-ilerleme` olayını yayar.
 * Aynı sekmedeki başka ekranlar (üst şeritteki seri sayacı gibi) bu olayı
 * dinleyerek kendini tazeler; her ekran ayrı bir zamanlayıcı kurmaz.
 */
export function ilerlemeYaz(yama) {
  return writeLanguageProgress({ language: DIL, empty: BOS_ILERLEME, patch: yama })
}

export function dilEtkinligiKaydet(etkinlik) { return emitLanguageActivity(DIL, etkinlik) }

/** Öğrencinin tüm ilerlemesini JSON olarak verir (yedek / buluta taşıma). */
export function disariAktar() {
  return JSON.stringify(ilerlemeOku(), null, 2)
}

/** Yalnızca açık onayla siler — yanlışlıkla sıfırlama olmasın. */
export function ilerlemeyiSil(onay) {
  if (onay !== 'İSPANYOLCA-SIFIRLA') return false
  return resetLocalLanguageProgress({ language: DIL, empty: BOS_ILERLEME })
}

/* ------------------------------------------------------------------ */
/* Profil ve seviye tespiti                                            */
/* ------------------------------------------------------------------ */

export function profilKaydet(profil) {
  const kayit = ilerlemeYaz({ profil: { ...profil, tarih: new Date().toISOString() } })
  dilEtkinligiKaydet({ activityType: 'self_report_snapshot', activityId: 'profil', skillDomain: 'general', completionStatus: 'updated' })
  return kayit
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
  const kayit = ilerlemeYaz({
    tespit: { ...sonuc, tarih: new Date().toISOString() },
    beceriler,
    izler,
  })
  dilEtkinligiKaydet({ activityType: 'placement_snapshot', activityId: 'seviye-tespit', skillDomain: 'general', correctCount: sonuc.dogruSayisi, incorrectCount: sonuc.yanlisSayisi, blankCount: sonuc.bosSayisi, completionStatus: 'completed', cefrLevel: sonuc.genelSeviye })
  return kayit
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
export function dersTamamla(dersId, { dogru, toplam, dakika = 0, izler = [], icerikSurumu = 'v1', beceri = 'general', seviye = null }) {
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
  dilEtkinligiKaydet({ activityType: 'lesson_result_snapshot', activityId: dersId, contentRevision: icerikSurumu, skillDomain: beceri, correctCount: dogru, incorrectCount: Math.max(0, toplam - dogru), blankCount: 0, completionStatus: 'completed', durationMinutes: dakika, cefrLevel: seviye })
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
  const kayit = ilerlemeYaz({
    beceriler: {
      ...eski.beceriler,
      [beceri]: { puan: Math.max(0, Math.min(100, puan)), olcum: 'alistirma', sonTarih: new Date().toISOString() },
    },
  })
  dilEtkinligiKaydet({ activityType: 'skill_snapshot', activityId: `beceri:${beceri}`, skillDomain: beceri, completionStatus: 'updated' })
  return kayit
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
