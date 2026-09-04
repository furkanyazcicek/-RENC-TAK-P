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
 *  • Aksanı klavyede bulamayan öğrenci cezalandırılmaz: "manana" yazımı
 *    "mañana" ile DEĞİL ama "cafe" yazımı "café" ile aynı sayılır.
 *    Türkiye'deki klavyede á/é/í/ó/ú yoktur; öğrenci bilmediği için değil,
 *    tuş olmadığı için yazamaz.
 *  • ÖNEMLİ AYRIM — Ñ BİR AKSAN DEĞİLDİR: İspanyolcada "ñ" alfabede ayrı
 *    bir harftir ve "n" ile aynı sayılamaz. "año" (yıl) ile "ano" (anüs)
 *    farklı kelimelerdir; bu farkı silmek öğrenciyi utandırır. Bu yüzden
 *    aksanlar düşürülürken "ñ" KORUNUR.
 *  • Ters soru ve ünlem işaretleri (¿ ¡) yazılmadıysa cevap DOĞRU sayılır,
 *    kural hatırlatılır. Bu işaretler Türk klavyesinde yoktur.
 *  • İspanyolcada gün, ay ve dil adları KÜÇÜK harfle yazılır (lunes, enero,
 *    el español). İngilizceden gelen alışkanlıkla büyük yazan öğrencinin
 *    cevabı DOĞRU sayılır, kural hatırlatılır.
 *  • İçerik yazarının verdiği bütün alternatifler kabul edilir.
 *  • Tek harflik yazım hatası "yanlış" değil "neredeyse doğru"dur;
 *    öğrenci utandırılmaz, yazımı düzeltmesi istenir.
 *
 * Yanlış cevapta yalnız doğrusu gösterilmez: turkceIzleri.js hatanın
 * Türkçe düşünme alışkanlığından doğup doğmadığını teşhis eder ve
 * öğrenciye aynı kalıbı tekrar kullanacağı bir mikro alıştırma verilir.
 */

import { izTeshis } from './turkceIzleri.js'

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
const YAZIM_ESITLEMELERI = [
  /* TERS NOKTALAMA — İspanyolcanın kendine özgü ¿ ve ¡ işaretleri Türk
     klavyesinde yoktur. Karşılaştırmada düşürülür; doğru yazım öğrenciye
     not olarak gösterilir. */
  [/[¿¡]/g, ''],

  /* KAYNAŞMA — İspanyolcada yalnız iki kaynaşma vardır ve ikisi de
     ZORUNLUDUR: a + el = al, de + el = del. İçerik hangisini yazarsa
     yazsın aynı yere düşsün diye her iki taraf da AÇIK biçime indirgenir.
     "a el" yazan öğrencinin hatası ayrıca teşhis edilir
     (bkz. turkceIzleri.js → 'kaynasma-yok'). */
  [/\bal\b/g, 'a el'],
  [/\bdel\b/g, 'de el'],
]

function yazimlariEsitle(metin) {
  let sonuc = metin
  for (const [desen, yerine] of YAZIM_ESITLEMELERI) sonuc = sonuc.replace(desen, yerine)
  return sonuc
}

/**
 * Aksanları çıkarır (yalnız KARŞILAŞTIRMA için).
 *
 * NEDEN: Türkiye'deki bir öğrencinin klavyesinde á/é/í/ó/ú yoktur.
 * Öğrenci "café" kelimesini bilse bile "cafe" yazmak zorunda kalır.
 * Aksan farkı yüzünden cevabı yanlışa düşürmek, bilgiyi değil klavyeyi
 * ölçmek olur.
 *
 * Ñ KORUNUR — BU BİR AKSAN DEĞİLDİR: İspanyol alfabesinde "ñ" bağımsız
 * bir harftir ve "n" ile aynı ses değildir. "año" (yıl) ile "ano" (anüs)
 * bambaşka kelimelerdir; bu farkı silmek öğrenciyi utandıracak bir hataya
 * açık bırakır. Bu yüzden ñ, aksan temizliğinden MUAF tutulur.
 *
 * BEDELİ VE ÇÖZÜMÜ: İspanyolcada aksan bazen anlam ayırır (tú/tu, él/el,
 * sí/si). Bu yüzden aksansız cevap doğru sayılır AMA her seferinde doğru
 * yazım gösterilir; ayrıca bu ayrımın anlam taşıdığı yerler ders içinde
 * tuzak olarak ayrıca çalıştırılır (bkz. turkceIzleri.js → 'aksan-anlam').
 *
 * DİKKAT: bu işlem yalnız karşılaştırma içindir. Ekranda öğrenciye her
 * zaman aksanlı doğru yazım gösterilir.
 */
const N_YERTUTUCU = '\u0001'

export function aksanAc(metin) {
  return String(metin ?? '')
    .replace(/ñ/g, N_YERTUTUCU)
    .replace(/Ñ/g, N_YERTUTUCU)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')
    .replace(new RegExp(N_YERTUTUCU, 'g'), 'ñ')
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
  s = aksanAc(s)
  s = yazimlariEsitle(s)
  // Cümle sonu noktalaması anlamı değiştirmez; soru işaretini de düşürüyoruz
  // çünkü boşluk doldurmada öğrenci genellikle işareti yazmaz.
  s = s.replace(/[.!?;,]+$/g, '').trim()
  s = s.replace(/\s+/g, ' ')
  return s
}

/** Yalnız harf ve rakam bırakan sıkı biçim — noktalama farkını tamamen yok sayar. */
function sikiNormalize(metin) {
  /* normalize() aksanları zaten düşürdüğü için sade Latin harfleri yeterli;
     "ñ" harf sınıfına AYRICA eklenir çünkü o bir aksan değil, harftir. */
  return normalize(metin)
    .replace(/-/g, ' ')
    .replace(/[^a-zñ0-9 ]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * İki kelime arasındaki uzaklık (Damerau-Levenshtein / OSA).
 *
 * Düz Levenshtein'dan farkı: iki harfin YER DEĞİŞTİRMESİ tek hata sayılır.
 * Bu önemli çünkü klavyede en sık yapılan yazım hatası budur —
 * "morning" yerine "mornign" yazan öğrenci iki hata yapmış sayılırsa
 * cevabı yanlışa düşer ve bu adil değildir.
 */
export function uzaklik(a, b) {
  if (a === b) return 0
  if (!a.length) return b.length
  if (!b.length) return a.length

  const satirlar = [
    Array.from({ length: b.length + 1 }, (_, i) => i),
  ]
  for (let i = 1; i <= a.length; i += 1) {
    const simdiki = [i]
    const onceki = satirlar[satirlar.length - 1]
    const oncekiOnceki = satirlar[satirlar.length - 2]
    for (let j = 1; j <= b.length; j += 1) {
      const bedel = a[i - 1] === b[j - 1] ? 0 : 1
      let deger = Math.min(onceki[j] + 1, simdiki[j - 1] + 1, onceki[j - 1] + bedel)
      // Yer değiştirme (transpozisyon)
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        deger = Math.min(deger, oncekiOnceki[j - 2] + 1)
      }
      simdiki[j] = deger
    }
    satirlar.push(simdiki)
    if (satirlar.length > 3) satirlar.shift()
  }
  return satirlar[satirlar.length - 1][b.length]
}

/**
 * Yazım hatası toleransı — KELİME bazında. Çok kısa kelimelerde sıfır,
 * çünkü orada bir harf farkı çoğu zaman BAŞKA bir kelimedir (bad/bed,
 * ship/sheep). Uzun kelimede iki karaktere kadar tolerans tanınır; harf
 * yer değiştirmesi (morning → mornign) tek başına iki fark üretir.
 */
function tolerans(kelime) {
  if (kelime.length <= 4) return 0
  if (kelime.length <= 8) return 1
  return 2
}

/**
 * Cevap ile hedef arasındaki fark yalnızca YAZIM hatası mı?
 *
 * ÖNEMLİ AYRIM: bütün cümleyi tek bir dizge olarak karşılaştırıp harf
 * farkına bakmak yanlıştır. "Am a student" ile "I am a student" arasında
 * yalnız iki karakter fark var; bu ölçüte göre yazım hatası sayılırdı.
 * Oysa eksik olan şey bir HARF değil, cümlenin ÖZNESİ — yani dersin tam
 * olarak öğretmeye çalıştığı şey. Bir kelimeyi affetmek, öğrenciye
 * "olmayan bir şeyi yapmışsın" demektir.
 *
 * Bu yüzden kural şu: kelime sayısı aynı olmalı ve en fazla BİR kelime,
 * o kelimenin uzunluğuna göre belirlenen tolerans içinde farklı olmalı.
 * Kelime eksik ya da fazlaysa cevap yanlıştır.
 */
function yazimHatasiMi(ogrenci, hedef) {
  if (!ogrenci || !hedef || ogrenci === hedef) return false
  const a = ogrenci.split(' ').filter(Boolean)
  const b = hedef.split(' ').filter(Boolean)
  if (a.length !== b.length) return false

  let farkliKelime = 0
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] === b[i]) continue
    farkliKelime += 1
    if (farkliKelime > 1) return false
    if (uzaklik(a[i], b[i]) > tolerans(b[i])) return false
  }
  return farkliKelime === 1
}

/**
 * İspanyolcada gün adları, ay adları ve dil adları KÜÇÜK harfle yazılır:
 * lundi, janvier, le français. Türk öğrencinin bu hatayı yapmasının sebebi
 * Türkçe değil, daha önce öğrendiği İNGİLİZCEDİR (Monday, January, French).
 * Bu yüzden hata çok yaygındır ve kendiliğinden geçmez.
 *
 * Karar: bu bir ANLAM hatası değil, YAZIM hatasıdır. Cevabı yanlışa
 * düşürmek öğrenciyi öğretmeden cezalandırır; sessizce geçmek ise hatayı
 * kalıcı hâle getirir. Bu yüzden cevap doğru sayılır ve kural hatırlatılır.
 *
 * @returns {string|null} gösterilecek not, gerek yoksa null
 */
function kucukHarfNotu(ogrenciHam, dogruMetin) {
  const a = String(ogrenciHam ?? '').trim().split(/\s+/)
  const b = String(dogruMetin ?? '').trim().split(/\s+/)
  if (a.length !== b.length) return null

  const buyukYazilan = []
  for (let i = 0; i < b.length; i += 1) {
    const dogruKelime = b[i].replace(/[^\p{L}]/gu, '')
    const ogrenciKelime = a[i].replace(/[^\p{L}]/gu, '')
    if (!dogruKelime || !ogrenciKelime) continue
    // Cümle başı zaten büyük yazılır; oradan kural çıkarılmaz.
    if (i === 0) continue
    const dogruKucuk = dogruKelime[0] === dogruKelime[0].toLowerCase()
      && dogruKelime[0] !== dogruKelime[0].toUpperCase()
    const ogrenciBuyuk = ogrenciKelime[0] === ogrenciKelime[0].toUpperCase()
      && ogrenciKelime[0] !== ogrenciKelime[0].toLowerCase()
    if (dogruKucuk && ogrenciBuyuk) buyukYazilan.push(dogruKelime)
  }
  if (!buyukYazilan.length) return null
  return `Doğru. Yalnız şunu unutma: İspanyolcada gün, ay ve dil adları küçük harfle yazılır — ${buyukYazilan.join(', ')}.`
}

/** Fark yalnızca eksik aksan mı? ("cafe" ↔ "café") — ñ farkı aksan sayılmaz. */
function aksanFarkiMi(ogrenciHam, dogruMetin) {
  const sadelestir = (m) => aksanAc(String(m ?? ''))
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.!?;,]+$/g, '')
    .trim()
  const oDuz = sadelestir(ogrenciHam)
  const dDuz = sadelestir(dogruMetin)
  if (!oDuz || oDuz !== dDuz) return false
  /* Aksansız hâlleri aynı; yazımları farklıysa aradaki tek fark aksandır.
     Karşılaştırma ham metinler üzerinden yapılır, çünkü normalize() zaten
     aksanı düşürür ve iki taraf orada eşitlenir. */
  return tirnaklariDuzelt(String(ogrenciHam)).toLowerCase().trim()
    !== tirnaklariDuzelt(String(dogruMetin)).toLowerCase().trim()
}

/**
 * Cevap doğruyken gösterilecek kısa yazım notu. Sıra önemlidir: önce anlam
 * taşıyabilen fark (aksan), sonra kural farkı (küçük harf), en sonda biçim
 * farkı (kesme/tire). Not yoksa null döner ve ekran hiçbir şey göstermez.
 */
function yazimNotu(ham, dogru) {
  if (aksanFarkiMi(ham, dogru)) {
    return `Doğru. Aksana dikkat: doğru yazımı "${dogru}". Aksan İspanyolcada bazen anlamı değiştirir (tú = sen · tu = senin · él = o · el = artikel).`
  }
  /* Ters soru/ünlem işareti Türk klavyesinde yoktur; cevap düşmez ama
     kural hatırlatılır çünkü yazılı sınavda beklenir. */
  const tersIsaret = /[¿¡]/.test(String(dogru ?? '')) && !/[¿¡]/.test(String(ham ?? ''))
  if (tersIsaret) {
    return `Doğru. İspanyolcada soru ve ünlem cümleleri TERS işaretle başlar: "${dogru}".`
  }
  const kucuk = kucukHarfNotu(ham, dogru)
  if (kucuk) return kucuk
  const bicimsiz = (m) => String(m ?? '').toLowerCase().replace(/['’\-\s]/g, '')
  /* Kıvrık kesme (’) telefon klavyesinin ürettiği biçimdir; öğrenci hata
     yapmış sayılmaz, bu yüzden karşılaştırmadan önce düzleştirilir. */
  const hamDuz = tirnaklariDuzelt(String(ham ?? '')).toLowerCase().trim()
  const dogruDuz = tirnaklariDuzelt(String(dogru ?? '')).toLowerCase().trim()
  if (hamDuz !== dogruDuz && bicimsiz(ham) === bicimsiz(dogru)) {
    return `Doğru. Yazımı tam biçimiyle not et: "${dogru}". İspanyolcada ters soru ve ünlem işaretleri yazımın parçasıdır.`
  }
  return null
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

  // 1) Tam eşleşme (normalize edilmiş). Aksan, küçük harf ve kesme/tire
  //     farkları burada eşitlenmiş olur; öğrenciye doğru yazım not olarak
  //     gösterilir ama cevabı düşmez.
  for (const d of liste) {
    if (ogrenci === normalize(d)) {
      return { durum: DURUM.DOGRU, eslesen: d, not: yazimNotu(ham, d) }
    }
  }

  // 2) Yalnız noktalama farkı.
  for (const d of liste) {
    if (ogrenciSiki && ogrenciSiki === sikiNormalize(d)) {
      return {
        durum: DURUM.DOGRU,
        eslesen: d,
        not: yazimNotu(ham, d)
          ?? 'Doğru. Noktalamaya da dikkat edersen yazım tam olur (ör. ¿Cómo estás?, ¡Hola!).',
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
    if (yazimHatasiMi(ogrenci, normalize(d))) {
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
        metin: 'Kısa cümleleri und, aber, weil gibi bağlaçlarla birleştirirsen metin daha akıcı olur.',
      })
    }
  }

  // 4) Bağlaç kullanımı
  const baglaclar = ['und', 'aber', 'weil', 'denn', 'oder', 'dann', 'danach', 'deshalb', 'trotzdem', 'wenn', 'als', 'dass']
  const kullanilanBaglac = baglaclar.filter((b) => new RegExp(`\\b${b}\\b`, 'i').test(ham))
  if (kelimeler.length >= enAz && kullanilanBaglac.length === 0) {
    bulgular.push({
      tur: 'akis',
      tone: 'info',
      baslik: 'Bağlaç yok',
      metin: 'Cümleler birbirine bağlanmamış. En az bir und / aber / weil ekle. Unutma: weil ve dass yan cümlesinde fiil SONA gider.',
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
    .map((k) => k.toLowerCase().replace(/[^a-zäöüß']/g, ''))
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
