/**
 * DRKOÇ — CEVAP DEĞERLENDİRME
 * ==================================================================
 *
 * Öğrencinin yazdığı cevabı ADİL değerlendirir. "Adil" burada şu demek:
 *
 *  • Büyük/küçük harf farkı yüzünden yanlış sayılmaz.
 *  • Baştaki/sondaki boşluk, çift boşluk, sondaki nokta yanlış saydırmaz.
 *  • Kıvrık kesme işareti (’) ile düz kesme (') aynı kabul edilir —
 *    telefon klavyeleri kıvrık üretir, içerik dosyaları düz yazar.
 *  • Kısaltma ile açık yazım aynıdır: "I'm" = "I am", "don't" = "do not".
 *  • İçerik yazarının verdiği bütün alternatifler kabul edilir.
 *  • Tek harflik yazım hatası "yanlış" değil "neredeyse doğru"dur;
 *    öğrenci utandırılmaz, yazımı düzeltmesi istenir.
 *
 * Yanlış cevapta yalnız doğrusu gösterilmez: turkceIzleri.js hatanın
 * Türkçe düşünme alışkanlığından doğup doğmadığını teşhis eder ve
 * öğrenciye aynı kalıbı tekrar kullanacağı bir mikro alıştırma verilir.
 */

import { izTeshis } from './turkceIzleri'

/** Kesme işareti ve tırnak çeşitlerini düz karşılıklarına indirger. */
function tirnaklariDuzelt(metin) {
  return metin
    .replace(/[‘’ʼ´`]/g, "'")
    .replace(/[“”]/g, '"')
}

/**
 * Kısaltmaları açık biçime çevirir. İki yönlü karşılaştırma yapmak yerine
 * her iki tarafı da "açık" biçime indirgemek daha güvenilir: içerik
 * "I am" yazsa da öğrenci "I'm" yazsa da aynı dizgeye düşerler.
 */
const KISALTMALAR = [
  [/\bi'm\b/g, 'i am'],
  [/\b(he|she|it|that|there|what|who|here)'s\b/g, '$1 is'],
  [/\b(you|we|they)'re\b/g, '$1 are'],
  [/\b(i|you|we|they|he|she|it)'ve\b/g, '$1 have'],
  [/\b(i|you|we|they|he|she|it)'ll\b/g, '$1 will'],
  [/\b(i|you|we|they|he|she|it)'d\b/g, '$1 would'],
  [/\bcan't\b/g, 'cannot'],
  [/\bwon't\b/g, 'will not'],
  [/\bshan't\b/g, 'shall not'],
  [/\bn't\b/g, ' not'],
  [/\blet's\b/g, 'let us'],
]

function kisaltmalariAc(metin) {
  let sonuc = metin
  for (const [desen, yerine] of KISALTMALAR) sonuc = sonuc.replace(desen, yerine)
  // "cannot" tek kelime; "can not" yazan öğrenciyi de aynı yere düşürelim.
  return sonuc.replace(/\bcan not\b/g, 'cannot')
}

/**
 * Karşılaştırma için ortak biçim: küçük harf, tek boşluk, sondaki
 * noktalama atılmış, kısaltmalar açılmış.
 */
export function normalize(metin) {
  if (metin == null) return ''
  let s = tirnaklariDuzelt(String(metin))
  s = s.toLowerCase()
  s = s.replace(/[ \s]+/g, ' ').trim()
  s = kisaltmalariAc(s)
  // Cümle sonu noktalaması anlamı değiştirmez; soru işaretini de düşürüyoruz
  // çünkü boşluk doldurmada öğrenci genellikle işareti yazmaz.
  s = s.replace(/[.!?;,]+$/g, '').trim()
  s = s.replace(/\s+/g, ' ')
  return s
}

/** Yalnız harf ve rakam bırakan sıkı biçim — noktalama farkını tamamen yok sayar. */
function sikiNormalize(metin) {
  return normalize(metin).replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim()
}

/** İki dizge arasındaki Levenshtein uzaklığı (kısa cevaplar için yeterli). */
export function uzaklik(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length
  let onceki = Array.from({ length: b.length + 1 }, (_, i) => i)
  for (let i = 1; i <= a.length; i += 1) {
    const simdiki = [i]
    for (let j = 1; j <= b.length; j += 1) {
      const bedel = a[i - 1] === b[j - 1] ? 0 : 1
      simdiki[j] = Math.min(onceki[j] + 1, simdiki[j - 1] + 1, onceki[j - 1] + bedel)
    }
    onceki = simdiki
  }
  return onceki[b.length]
}

/** Yazım hatası toleransı: kısa cevapta 1, uzun cevapta 2 karakter. */
function tolerans(dogru) {
  if (dogru.length <= 4) return 0
  if (dogru.length <= 12) return 1
  return 2
}

export const DURUM = {
  DOGRU: 'dogru',
  YAKIN: 'yakin',
  YANLIS: 'yanlis',
  BOS: 'bos',
}

/**
 * Serbest yazılan bir cevabı kabul listesine göre değerlendirir.
 *
 * @param {string} cevap    öğrencinin yazdığı
 * @param {string[]} kabul  kabul edilen doğru cevaplar
 * @param {Object} [secenek]
 * @param {boolean} [secenek.siraSerbest] kelime sırası önemsizse true
 * @returns {{durum:string, eslesen:string|null, not:string|null}}
 */
export function metinKontrol(cevap, kabul = [], secenek = {}) {
  const ham = String(cevap ?? '').trim()
  if (!ham) return { durum: DURUM.BOS, eslesen: null, not: null }

  const liste = (Array.isArray(kabul) ? kabul : [kabul]).filter(Boolean)
  if (!liste.length) return { durum: DURUM.YANLIS, eslesen: null, not: null }

  const ogrenci = normalize(ham)
  const ogrenciSiki = sikiNormalize(ham)

  // 1) Tam eşleşme (normalize edilmiş).
  for (const d of liste) {
    if (ogrenci === normalize(d)) return { durum: DURUM.DOGRU, eslesen: d, not: null }
  }

  // 2) Yalnız noktalama farkı.
  for (const d of liste) {
    if (ogrenciSiki && ogrenciSiki === sikiNormalize(d)) {
      return {
        durum: DURUM.DOGRU,
        eslesen: d,
        not: 'Doğru. Noktalama işaretlerine de dikkat edersen metnin daha düzgün görünür.',
      }
    }
  }

  // 3) Kelime sırası serbestse (ör. kelime havuzundan seçilen sözcükler).
  if (secenek.siraSerbest) {
    const parcala = (s) => sikiNormalize(s).split(' ').filter(Boolean).sort().join(' ')
    const ogrenciSirali = parcala(ham)
    for (const d of liste) {
      if (ogrenciSirali && ogrenciSirali === parcala(d)) {
        return { durum: DURUM.DOGRU, eslesen: d, not: null }
      }
    }
  }

  // 4) Yazım hatası — "neredeyse doğru".
  for (const d of liste) {
    const hedef = normalize(d)
    const fark = uzaklik(ogrenci, hedef)
    if (fark > 0 && fark <= tolerans(hedef)) {
      return {
        durum: DURUM.YAKIN,
        eslesen: d,
        not: 'Çok yaklaştın — yalnızca yazımda küçük bir fark var.',
      }
    }
  }

  return { durum: DURUM.YANLIS, eslesen: liste[0], not: null }
}

/**
 * Bir alıştırmanın tamamını değerlendirir. Alıştırma türüne göre doğru
 * kontrol yolunu seçer ve her durumda AYNI biçimde sonuç döner; böylece
 * alıştırma bileşenleri kendi doğruluk mantığını yazmak zorunda kalmaz.
 *
 * @returns {{
 *   durum: string,            'dogru' | 'yakin' | 'yanlis' | 'bos'
 *   dogruCevap: any,          gösterilecek doğru cevap
 *   not: string|null,         kısa yazım/biçim notu
 *   teshis: Object|null,      Türkçe düşünme izi (varsa)
 *   secenekNotu: string|null  seçenek bazlı içerik notu (varsa)
 * }}
 */
export function alistirmaKontrol(alistirma, cevap) {
  const bos = { durum: DURUM.BOS, dogruCevap: null, not: null, teshis: null, secenekNotu: null }
  if (!alistirma) return bos

  switch (alistirma.tur) {
    case 'coktan-secmeli':
    case 'dinle-sec': {
      if (!cevap) return bos
      const dogruMu = cevap === alistirma.dogruId
      const dogruSecenek = alistirma.secenekler.find((s) => s.id === alistirma.dogruId)
      const secilen = alistirma.secenekler.find((s) => s.id === cevap)
      return {
        durum: dogruMu ? DURUM.DOGRU : DURUM.YANLIS,
        dogruCevap: dogruSecenek?.metin ?? '',
        not: null,
        teshis: dogruMu ? null : izTeshis(secilen?.metin ?? '', alistirma),
        secenekNotu: alistirma.secenekNotu?.[cevap] ?? null,
      }
    }

    case 'dogal-secim': {
      if (!cevap) return bos
      const secilen = alistirma.secenekler.find((s) => s.id === cevap)
      const dogal = alistirma.secenekler.find((s) => s.dogal)
      return {
        durum: secilen?.dogal ? DURUM.DOGRU : DURUM.YANLIS,
        dogruCevap: dogal?.metin ?? '',
        not: null,
        teshis: null,
        secenekNotu: secilen?.neden ?? null,
      }
    }

    case 'bosluk': {
      const cevaplar = Array.isArray(cevap) ? cevap : []
      const sonuclar = alistirma.cevaplar.map((c, i) =>
        metinKontrol(cevaplar[i], c.kabul, { siraSerbest: false })
      )
      const hepsiDogru = sonuclar.every((s) => s.durum === DURUM.DOGRU)
      const yakinVar = sonuclar.some((s) => s.durum === DURUM.YAKIN)
      const bosVar = sonuclar.some((s) => s.durum === DURUM.BOS)
      const ilkYanlis = sonuclar.findIndex((s) => s.durum === DURUM.YANLIS)
      return {
        durum: hepsiDogru
          ? DURUM.DOGRU
          : bosVar && ilkYanlis === -1 && !yakinVar
            ? DURUM.BOS
            : yakinVar && ilkYanlis === -1
              ? DURUM.YAKIN
              : DURUM.YANLIS,
        dogruCevap: alistirma.cevaplar.map((c) => c.kabul[0]),
        not: sonuclar.find((s) => s.not)?.not ?? null,
        teshis: ilkYanlis >= 0 ? izTeshis(cevaplar[ilkYanlis], alistirma) : null,
        secenekNotu: null,
        detay: sonuclar.map((s) => s.durum),
      }
    }

    case 'siralama': {
      const sira = Array.isArray(cevap) ? cevap : []
      if (sira.length !== alistirma.dogruSira.length) return bos
      const dogruMu = sira.every((v, i) => v === alistirma.dogruSira[i])
      const kurulan = alistirma.dogruSira.map((_, i) => alistirma.parcalar[sira[i]]).join(' ')
      return {
        durum: dogruMu ? DURUM.DOGRU : DURUM.YANLIS,
        dogruCevap: alistirma.dogruSira.map((i) => alistirma.parcalar[i]).join(' '),
        not: null,
        teshis: dogruMu ? null : izTeshis(kurulan, alistirma),
        secenekNotu: null,
      }
    }

    case 'eslestirme': {
      const secim = cevap ?? {}
      const anahtarlar = Object.keys(alistirma.eslesme)
      if (anahtarlar.some((k) => !secim[k])) return bos
      const yanlislar = anahtarlar.filter((k) => secim[k] !== alistirma.eslesme[k])
      return {
        durum: yanlislar.length ? DURUM.YANLIS : DURUM.DOGRU,
        dogruCevap: alistirma.eslesme,
        not: null,
        teshis: null,
        secenekNotu: null,
        detay: Object.fromEntries(anahtarlar.map((k) => [k, secim[k] === alistirma.eslesme[k]])),
      }
    }

    case 'hata-bul':
    case 'durum-ifade':
    case 'tanim-kelime':
    case 'soru-cevap':
    case 'dinle-yaz': {
      const sonuc = metinKontrol(cevap, alistirma.kabul, {
        siraSerbest: Boolean(alistirma.siraSerbest),
      })
      return {
        durum: sonuc.durum,
        dogruCevap: alistirma.ornekCevap ?? alistirma.kabul[0],
        not: sonuc.not,
        teshis: sonuc.durum === DURUM.YANLIS ? izTeshis(cevap, alistirma) : null,
        secenekNotu: null,
      }
    }

    case 'genisletme': {
      const adimlar = Array.isArray(cevap) ? cevap : []
      const sonuclar = alistirma.adimlar.map((a, i) => metinKontrol(adimlar[i], a.kabul))
      const sonIndeks = sonuclar.findIndex((s) => s.durum === DURUM.YANLIS)
      return {
        durum: sonIndeks === -1
          ? sonuclar.every((s) => s.durum === DURUM.DOGRU) ? DURUM.DOGRU : DURUM.YAKIN
          : DURUM.YANLIS,
        dogruCevap: alistirma.adimlar.map((a) => a.kabul[0]),
        not: sonuclar.find((s) => s.not)?.not ?? null,
        teshis: sonIndeks >= 0 ? izTeshis(adimlar[sonIndeks], alistirma) : null,
        secenekNotu: null,
        detay: sonuclar.map((s) => s.durum),
      }
    }

    default:
      return bos
  }
}

/**
 * YAZMA görevi için otomatik geri bildirim.
 *
 * Burada dikkatli olmak gerekiyor: bir metnin "içerik kalitesi" otomatik
 * olarak puanlanamaz. Bu yüzden yalnız SAYILABİLİR ve DOĞRULANABİLİR
 * göstergelere bakılır — uzunluk, cümle sayısı, istenen yapıların
 * kullanımı, tekrar eden kelime, bağlaç kullanımı ve Türkçe düşünme
 * izleri. Bunların dışındaki ölçütler öğrenciye KENDİ kontrol edeceği
 * liste olarak verilir; sistem "9/10 aldın" gibi sahte bir kesinlik
 * üretmez.
 */
export function yazmaGeriBildirim(metin, gorev) {
  const ham = String(metin ?? '').trim()
  const kelimeler = ham ? ham.split(/\s+/).filter(Boolean) : []
  const cumleler = ham
    ? ham.split(/[.!?]+/).map((c) => c.trim()).filter(Boolean)
    : []

  const bulgular = []

  // 1) Uzunluk
  const enAz = gorev?.enAzKelime ?? 30
  if (kelimeler.length < enAz) {
    bulgular.push({
      tur: 'uzunluk',
      tone: 'warning',
      baslik: 'Metin biraz kısa',
      metin: `${kelimeler.length} kelime yazdın; bu görev için en az ${enAz} kelime bekleniyor. Bir örnek ya da bir sebep cümlesi eklemek en hızlı yol.`,
    })
  } else {
    bulgular.push({
      tur: 'uzunluk',
      tone: 'success',
      baslik: 'Uzunluk yeterli',
      metin: `${kelimeler.length} kelime, ${cumleler.length} cümle yazdın.`,
    })
  }

  // 2) İstenen yapılar
  const aranan = gorev?.aranan ?? []
  const kullanilan = []
  const eksik = []
  aranan.forEach((a) => {
    try {
      const desen = a.desen instanceof RegExp ? a.desen : new RegExp(a.desen, 'i')
      ;(desen.test(ham) ? kullanilan : eksik).push(a.etiket)
    } catch {
      /* bozuk desen görevi düşürmesin */
    }
  })
  if (aranan.length) {
    if (kullanilan.length) {
      bulgular.push({
        tur: 'yapi',
        tone: 'success',
        baslik: 'Hedef yapıları kullandın',
        metin: kullanilan.join(', '),
      })
    }
    if (eksik.length) {
      bulgular.push({
        tur: 'yapi',
        tone: 'info',
        baslik: 'Henüz kullanmadığın yapılar',
        metin: `${eksik.join(', ')} — bunları eklersen görev tam karşılanır.`,
      })
    }
  }

  // 3) Cümle uzunluğu dengesi
  if (cumleler.length >= 2) {
    const ortalama = kelimeler.length / cumleler.length
    if (ortalama > 22) {
      bulgular.push({
        tur: 'akis',
        tone: 'info',
        baslik: 'Cümleler uzun',
        metin: 'Cümle başına ortalama 22 kelimeden fazla düşüyor. Uzun cümleyi ikiye bölmek anlamı netleştirir.',
      })
    } else if (ortalama < 5) {
      bulgular.push({
        tur: 'akis',
        tone: 'info',
        baslik: 'Cümleler çok kısa',
        metin: 'Kısa cümleleri and, but, because gibi bağlaçlarla birleştirirsen metin daha akıcı olur.',
      })
    }
  }

  // 4) Bağlaç kullanımı
  const baglaclar = ['and', 'but', 'because', 'so', 'also', 'however', 'then', 'after', 'before', 'when']
  const kullanilanBaglac = baglaclar.filter((b) => new RegExp(`\\b${b}\\b`, 'i').test(ham))
  if (kelimeler.length >= enAz && kullanilanBaglac.length === 0) {
    bulgular.push({
      tur: 'akis',
      tone: 'info',
      baslik: 'Bağlaç yok',
      metin: 'Cümleler birbirine bağlanmamış. En az bir and / but / because ekle.',
    })
  }

  // 5) Türkçe düşünme izleri
  const izler = izTeshis(ham, gorev) ? [izTeshis(ham, gorev)] : []
  izler.filter(Boolean).forEach((iz) => {
    bulgular.push({
      tur: 'aktarim',
      tone: 'warning',
      baslik: `Türkçe düşünme izi: ${iz.baslik}`,
      metin: `${iz.aciklama} Doğrusu: ${iz.dogru}`,
      iz,
    })
  })

  // 6) Tekrar eden kelime
  const sayac = new Map()
  kelimeler
    .map((k) => k.toLowerCase().replace(/[^a-z']/g, ''))
    .filter((k) => k.length > 3)
    .forEach((k) => sayac.set(k, (sayac.get(k) ?? 0) + 1))
  const cokTekrar = [...sayac.entries()].filter(([, n]) => n >= 4).map(([k]) => k)
  if (cokTekrar.length) {
    bulgular.push({
      tur: 'kelime',
      tone: 'info',
      baslik: 'Aynı kelime çok tekrar ediyor',
      metin: `${cokTekrar.join(', ')} — bir eş anlamlı ya da farklı bir yapı denemek metni zenginleştirir.`,
    })
  }

  return {
    kelimeSayisi: kelimeler.length,
    cumleSayisi: cumleler.length,
    kullanilanYapilar: kullanilan,
    eksikYapilar: eksik,
    bulgular,
    /* Otomatik olarak ölçülemeyen ve öğrencinin kendi kontrol edeceği
       ölçütler. Sistem bunlara puan vermez. */
    kendinKontrolEt: gorev?.olcut ?? [],
  }
}
