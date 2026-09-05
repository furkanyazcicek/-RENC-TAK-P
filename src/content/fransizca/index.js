/**
 * DRKOÇ — FRANSIZCA İÇERİĞİ KAYIT DEFTERİ
 * ==================================================================
 *
 * Bütün ekranlar içeriğe YALNIZ buradan ulaşır. Yeni bir ders eklemek
 * için tek yapılması gereken, dersi `dersler/` altına yazıp bu dosyadaki
 * listeye eklemektir; hiçbir ekran dosyası değişmez.
 *
 * Bu ağaç, İngilizce ve Almanca bölümleriyle AYNI sözleşmeyi (bkz.
 * lib/fransizca/sema.js) kullanır ama kendi içeriği, kendi seslendirmesi
 * ve kendi ilerleme kaydı vardır. Üç bölüm birbirinden tamamen
 * bağımsızdır: Fransızca içeriğindeki bir hata diğerlerini etkilemez.
 */

import { MODULLER, modulBul, seviyeModulleri } from './mufredat.js'
import { KELIMELER as KELIMELER_TANISMA } from './kelime/a1-tanisma.js'
import { KELIMELER as KELIMELER_AILE } from './kelime/a1-aile.js'
import { KELIMELER as KELIMELER_RUTIN } from './kelime/a1-rutin.js'
import { KELIMELER as KELIMELER_SEHIR } from './kelime/a1-sehir.js'
import { KELIMELER as KELIMELER_YEMEK } from './kelime/a1-yemek.js'
import { KELIMELER as KELIMELER_BOS_ZAMAN } from './kelime/a1-bos-zaman.js'
import { KELIMELER as KELIMELER_A2_GECMIS } from './kelime/a2-gecmis.js'
import { NOTLAR, notBul, modulNotlari } from './notlar/index.js'
import { DESTELER, KART_HAVUZU, desteBul, kartBul, modulDestesi } from './kartlar/index.js'
import { SESLER, SHADOWING } from './telaffuz.js'
import { ANTRENMANLAR, IC_SES_GOREVLERI } from './dusunme.js'
import { MADDELER, YAZMA_GOREVI } from './seviyeTespitBankasi.js'

import preA1M1D1 from './dersler/prea1-m1-d1.js'
import a1M1D1 from './dersler/a1-m1-d1.js'
import a1M1D2 from './dersler/a1-m1-d2.js'
import a1M1D3 from './dersler/a1-m1-d3.js'
import a1M1D4 from './dersler/a1-m1-d4.js'
import a1M1D5 from './dersler/a1-m1-d5.js'
import a1M1D6 from './dersler/a1-m1-d6.js'
import a1M2D1 from './dersler/a1-m2-d1.js'
import a1M2D2 from './dersler/a1-m2-d2.js'
import a1M2D3 from './dersler/a1-m2-d3.js'
import a1M2D4 from './dersler/a1-m2-d4.js'
import a1M2D5 from './dersler/a1-m2-d5.js'
import a1M2D6 from './dersler/a1-m2-d6.js'
import a1M3D1 from './dersler/a1-m3-d1.js'
import a1M3D2 from './dersler/a1-m3-d2.js'
import a1M3D3 from './dersler/a1-m3-d3.js'
import a1M3D4 from './dersler/a1-m3-d4.js'
import a1M3D5 from './dersler/a1-m3-d5.js'
import a1M3D6 from './dersler/a1-m3-d6.js'
import a1M4D1 from './dersler/a1-m4-d1.js'
import a1M4D2 from './dersler/a1-m4-d2.js'
import a1M4D3 from './dersler/a1-m4-d3.js'
import a1M4D4 from './dersler/a1-m4-d4.js'
import a1M4D5 from './dersler/a1-m4-d5.js'
import a1M5D1 from './dersler/a1-m5-d1.js'
import a1M5D2 from './dersler/a1-m5-d2.js'
import a1M5D3 from './dersler/a1-m5-d3.js'
import a1M5D4 from './dersler/a1-m5-d4.js'
import a1M5D5 from './dersler/a1-m5-d5.js'
import a1M6D1 from './dersler/a1-m6-d1.js'
import a1M6D2 from './dersler/a1-m6-d2.js'
import a1M6D3 from './dersler/a1-m6-d3.js'
import a1M6D4 from './dersler/a1-m6-d4.js'
import a1M6D5 from './dersler/a1-m6-d5.js'
import a2M1D1 from './dersler/a2-m1-d1.js'
import a2M1D2 from './dersler/a2-m1-d2.js'
import a2M1D3 from './dersler/a2-m1-d3.js'
import a2M1D4 from './dersler/a2-m1-d4.js'

/**
 * MÜFREDAT SIRASI — ÖNEMLİ
 *
 * Bir dersin `sira` alanı MODÜL İÇİNDEKİ sırasıdır (1, 2, 3…), müfredattaki
 * genel sırası değil. Dersler yalnız `sira`ya göre sıralanırsa bütün
 * modüllerin 1. dersleri arka arkaya gelir ve modüller iç içe geçer.
 * Doğru sıra üç anahtarlıdır: seviye → modülün sırası → dersin sırası.
 *
 * Bu sıralama BURADA bir kez yapılır; ekranlar ve yol haritası motoru
 * `DERSLER` dizisini olduğu gibi kullanır ve kendi sıralamasını kurmaz.
 */
const HAM_DERSLER = [
  preA1M1D1,
  a1M1D1, a1M1D2, a1M1D3, a1M1D4, a1M1D5, a1M1D6,
  a1M2D1, a1M2D2, a1M2D3, a1M2D4, a1M2D5, a1M2D6,
  a1M3D1, a1M3D2, a1M3D3, a1M3D4, a1M3D5, a1M3D6,
  a1M4D1, a1M4D2, a1M4D3, a1M4D4, a1M4D5,
  a1M5D1, a1M5D2, a1M5D3, a1M5D4, a1M5D5,
  a1M6D1, a1M6D2, a1M6D3, a1M6D4, a1M6D5,
  a2M1D1, a2M1D2, a2M1D3, a2M1D4,
]

/** Seviye kodu → sıra numarası (Pre-A1 = 0). */
const SEVIYE_SIRA = {
  'Pre-A1': 0, A1: 1, A2: 2, B1: 3, B2: 4, C1: 5, C2: 6,
}

function mufredatAnahtari(ders) {
  const modul = MODULLER.find((m) => m.id === ders.modul)
  return [
    SEVIYE_SIRA[ders.seviye] ?? 99,
    modul?.sira ?? 99,
    ders.sira ?? 99,
  ]
}

export const DERSLER = [...HAM_DERSLER].sort((a, b) => {
  const x = mufredatAnahtari(a)
  const y = mufredatAnahtari(b)
  return x[0] - y[0] || x[1] - y[1] || x[2] - y[2]
})

export const KELIME_HAVUZU = [
  ...KELIMELER_TANISMA,
  ...KELIMELER_AILE,
  ...KELIMELER_RUTIN,
  ...KELIMELER_SEHIR,
  ...KELIMELER_YEMEK,
  ...KELIMELER_BOS_ZAMAN,
  ...KELIMELER_A2_GECMIS,
]

/**
 * Uygulamada içeriği bulunan diller. Arayüz bu listeden beslenir;
 * listede olmayan bir dil hiçbir yerde görünmez.
 */
export const DILLER = [
  {
    kod: 'fr',
    ad: 'Fransızca',
    fransizcaAd: 'Français',
    bayrak: '🇫🇷',
    durum: 'hazir',
    aciklama: 'Sıfırdan C2\'ye kadar planlanmış; Pre-A1 girişi ve A1 seviyesinin tamamı (altı modül) çalışılabilir durumda.',
  },
]

export {
  MODULLER,
  modulBul,
  seviyeModulleri,
  DESTELER,
  KART_HAVUZU,
  desteBul,
  modulDestesi,
  kartBul,
  NOTLAR,
  notBul,
  modulNotlari,
  SESLER,
  SHADOWING,
  ANTRENMANLAR,
  IC_SES_GOREVLERI,
  MADDELER as TESPIT_MADDELERI,
  YAZMA_GOREVI as TESPIT_YAZMA_GOREVI,
}

/* ------------------------------------------------------------------ */
/* Arama yardımcıları                                                  */
/* ------------------------------------------------------------------ */

export function dersBul(id) {
  return DERSLER.find((d) => d.id === id) ?? null
}

export function modulDersleri(modulId) {
  return DERSLER.filter((d) => d.modul === modulId).sort((a, b) => (a.sira ?? 0) - (b.sira ?? 0))
}

export function seviyeDersleri(seviye) {
  /* Sıralama YAPILMAZ: DERSLER zaten müfredat sırasındadır. Burada
     yeniden `sira`ya göre sıralamak modülleri iç içe geçirirdi. */
  return DERSLER.filter((d) => d.seviye === seviye)
}

export function kelimeBul(id) {
  return KELIME_HAVUZU.find((k) => k.id === id) ?? null
}

/** Bir dersin tekrar kartlarına karşılık gelen kelime kayıtları. */
export function dersKelimeleri(ders) {
  return (ders?.kartlar ?? []).map((id) => kelimeBul(id)).filter(Boolean)
}

/** Ders sayısı olan (yani gerçekten çalışılabilir) modüller. */
export function calisilabilirModuller() {
  return MODULLER.filter((m) => modulDersleri(m.id).length > 0)
}

/**
 * Kütüphane ağacı: seviye → modül → ders. Ekranlar bu tek yapıdan
 * beslenir, ayrı ayrı birleştirme yapmaz.
 */
export function kutuphaneAgaci(seviyeSirasi) {
  return seviyeSirasi.map((seviye) => {
    const moduller = seviyeModulleri(seviye).map((modul) => ({
      ...modul,
      dersler: modulDersleri(modul.id),
    }))
    return {
      seviye,
      moduller,
      dersSayisi: moduller.reduce((t, m) => t + m.dersler.length, 0),
    }
  })
}
