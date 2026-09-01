/**
 * DRKOÇ — DİL ÖĞRENME İÇERİK SÖZLEŞMESİ
 * ==================================================================
 *
 * NEDEN VAR: içerik React bileşenlerinin içine gömülürse ne öğretmen
 * ekleyebilir ne de bir editör aracı yazılabilir. Bu dosya "bir ders,
 * bir alıştırma, bir kelime kaydı nedir" sorusunun tek cevabıdır. Ekranlar
 * bu sözleşmeyi okur; içerik dosyaları bu sözleşmeye uyar.
 *
 * DİL BAĞIMSIZ: `dil` alanı bilinçli olarak zorunlu. Bugün yalnızca 'en'
 * içeriği var; Almanca/Fransızca eklendiğinde ekranlar değil, yalnız içerik
 * dosyaları çoğalır. Arayüz tarafında yarım kalmış dil sayfası açılmaz —
 * kayıt defterinde içeriği olan dil listelenir.
 *
 * ------------------------------------------------------------------
 * DERS (ders nesnesi)
 * ------------------------------------------------------------------
 *   id            benzersiz kimlik, örn. 'a1-m1-d3'
 *   surum         içerik sürümü (sayı) — içerik değişince artırılır
 *   dil           'en'
 *   seviye        'Pre-A1' | 'A1' | … | 'C2'
 *   modul         modül kimliği
 *   sira          modül içindeki sıra (1'den başlar)
 *   baslik        Türkçe ders başlığı
 *   altBaslik     bir cümlelik tanıtım
 *   odakBeceri    ana beceri anahtarı (bkz. seviyeler.js BECERILER)
 *   beceriler      derste çalışan tüm beceriler (dizi)
 *   amac          "Bu dersin sonunda…" — öğrenciye gösterilir
 *   kazanim       ölçülebilir kazanım cümlesi
 *   onKosullar    önce tamamlanması önerilen ders id'leri
 *   sure          tahmini dakika
 *   baglam        { durum, neden } — gerçek yaşam bağlamı
 *   bloklar       öğretim blokları (aşağıda)
 *   alistirmalar  alıştırma dizisi (aşağıda)
 *   ozet          madde madde ders özeti (dizi)
 *   miniSinav     alıştırma nesneleri — dersi kapatan kısa ölçüm
 *   kartlar       tekrar kartı id'leri (kelime kayıtlarından)
 *   not           PDF not kimliği (varsa)
 *   sonraki       önerilen sonraki ders id'si
 *   kaynak        { tur, aciklama } — özgün üretim ya da lisans bilgisi
 *
 * ------------------------------------------------------------------
 * ÖĞRETİM BLOKLARI (ders.bloklar[])
 * ------------------------------------------------------------------
 *   { tur: 'anlatim',      baslik, metin, maddeler? }
 *   { tur: 'ornek',        satirlar: [{ en, tr?, not? }] }
 *   { tur: 'kalip',        baslik, kaliplar: [{ en, kullanim, ornek }] }
 *   { tur: 'tablo',        baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'karsilastirma',baslik, dogal, yapay, aciklama }
 *   { tur: 'tuzak',        baslik, yanlis, dogru, neden }
 *   { tur: 'telaffuz',     baslik, sesler: [{ ipa, aciklama, kelimeler: [] }] }
 *   { tur: 'okuma',        baslik, metin, sozluk?: [{ en, tr }] }
 *   { tur: 'dinleme',      baslik, metin, hiz?, gizliTranskript? }
 *   { tur: 'ipucu',        metin }
 *
 * ------------------------------------------------------------------
 * ALIŞTIRMA TÜRLERİ (ders.alistirmalar[])
 * ------------------------------------------------------------------
 * Ortak alanlar:
 *   id, tur, yonerge, beceri, zorluk ('kolay'|'orta'|'zor'),
 *   ipucu?, aciklama? (doğru cevaptan sonra gösterilen kısa öğretim),
 *   tuzaklar?: [{ desen, baslik, aciklama, mikro? }]
 *
 *   coktan-secmeli  { soru, secenekler:[{id,metin}], dogruId, secenekNotu?:{id:metin} }
 *   bosluk          { parcalar:[…], cevaplar:[{kabul:[], ipucu?}], havuz?:[] }
 *                   `parcalar` metin ve {bosluk:i} nesnelerinin karışımıdır.
 *   siralama        { parcalar:[], dogruSira:[] }
 *   eslestirme      { sol:[{id,metin}], sag:[{id,metin}], eslesme:{solId:sagId} }
 *   hata-bul        { cumle, hataliParca, dogruParca, kabul:[] }
 *   durum-ifade     { durum, gorsel?, kabul:[], ornekCevap, yaklasimNotu? }
 *   tanim-kelime    { tanim, kabul:[], ilkHarf? }
 *   soru-cevap      { soru, kabul:[], ornekCevap }
 *   genisletme      { adimlar:[{yonerge, kabul:[]}] }
 *   dogal-secim     { baglam, secenekler:[{id,metin,dogal:boolean,neden}] }
 *   dinle-sec       { seslendir, secenekler, dogruId }
 *   dinle-yaz       { seslendir, kabul:[] }
 *   yazma           { gorev, ornekMetin, kaliplar:[], asamalar:[], olcut:[],
 *                     enAzKelime, aranan:[{etiket, desen}] }
 *
 * ------------------------------------------------------------------
 * KELİME KAYDI
 * ------------------------------------------------------------------
 *   { id, dil, kelime, tur, seviye, ingilizceTanim, turkceDestek, ipa,
 *     heceler, ornekler:[{en,tr}], esdizim:[], esAnlam:[], zitAnlam:[],
 *     aile:[], hata?, kayit?('resmi'|'gundelik'|'argo'), ingUsa?:{ing,usa},
 *     hatirlatma?, uretim?:{yonerge,kabul:[]} }
 *
 * ------------------------------------------------------------------
 * PDF NOTU
 * ------------------------------------------------------------------
 *   { id, dil, seviye, modul, baslik, altBaslik, bolumler:[…],
 *     cevapAnahtari:[…], kontrolListesi:[] }
 */

import { BECERI_ANAHTARLARI, SEVIYE_SIRASI } from './seviyeler.js'

export const ALISTIRMA_TURLERI = [
  'coktan-secmeli',
  'bosluk',
  'siralama',
  'eslestirme',
  'hata-bul',
  'durum-ifade',
  'tanim-kelime',
  'soru-cevap',
  'genisletme',
  'dogal-secim',
  'dinle-sec',
  'dinle-yaz',
  'yazma',
]

export const BLOK_TURLERI = [
  'anlatim',
  'ornek',
  'kalip',
  'tablo',
  'karsilastirma',
  'tuzak',
  'telaffuz',
  'okuma',
  'dinleme',
  'ipucu',
]

export const ZORLUKLAR = ['kolay', 'orta', 'zor']

/** Alıştırmanın öğrenci tarafından cevaplanabilir olup olmadığı. */
export function alistirmaCevaplanabilir(alistirma) {
  return ALISTIRMA_TURLERI.includes(alistirma?.tur)
}

/**
 * Tek bir alıştırmayı doğrular. Hata dizisi döner (boşsa geçerli).
 * Ekranlar bunu çalıştırmaz; içerik testi (`npm run test:ingilizce`) çalıştırır.
 */
export function alistirmaDogrula(a, yol = '') {
  const h = []
  const ek = (m) => h.push(`${yol}${yol ? ' → ' : ''}${m}`)

  if (!a || typeof a !== 'object') return [`${yol}: alıştırma nesnesi değil.`]
  if (!a.id) ek('id eksik.')
  if (!ALISTIRMA_TURLERI.includes(a.tur)) ek(`bilinmeyen tür: ${a.tur}`)
  if (!a.yonerge) ek('yonerge eksik — öğrenci ne yapacağını bilmeli.')
  if (a.beceri && !BECERI_ANAHTARLARI.includes(a.beceri)) ek(`bilinmeyen beceri: ${a.beceri}`)
  if (a.zorluk && !ZORLUKLAR.includes(a.zorluk)) ek(`bilinmeyen zorluk: ${a.zorluk}`)

  switch (a.tur) {
    case 'coktan-secmeli':
    case 'dinle-sec': {
      if (!Array.isArray(a.secenekler) || a.secenekler.length < 2) ek('en az iki seçenek gerekli.')
      else if (!a.secenekler.some((s) => s.id === a.dogruId)) ek('dogruId seçeneklerle eşleşmiyor.')
      if (a.tur === 'dinle-sec' && !a.seslendir) ek('dinle-sec için seslendir metni gerekli.')
      break
    }
    case 'bosluk': {
      if (!Array.isArray(a.parcalar) || !a.parcalar.length) ek('parcalar eksik.')
      const boslukSayisi = (a.parcalar ?? []).filter((p) => typeof p === 'object' && p?.bosluk != null).length
      if (!Array.isArray(a.cevaplar) || a.cevaplar.length !== boslukSayisi) {
        ek(`cevap sayısı boşluk sayısıyla uyuşmuyor (${a.cevaplar?.length} ≠ ${boslukSayisi}).`)
      }
      ;(a.cevaplar ?? []).forEach((c, i) => {
        if (!Array.isArray(c?.kabul) || !c.kabul.length) ek(`cevap[${i}] kabul listesi boş.`)
      })
      break
    }
    case 'siralama': {
      if (!Array.isArray(a.parcalar) || a.parcalar.length < 3) ek('en az üç parça gerekli.')
      if (!Array.isArray(a.dogruSira) || a.dogruSira.length !== a.parcalar?.length) {
        ek('dogruSira uzunluğu parça sayısıyla aynı olmalı.')
      }
      break
    }
    case 'eslestirme': {
      if (!Array.isArray(a.sol) || !Array.isArray(a.sag)) ek('sol/sag dizileri gerekli.')
      if (!a.eslesme || Object.keys(a.eslesme).length !== (a.sol?.length ?? 0)) {
        ek('her sol öğe için bir eşleşme gerekli.')
      }
      break
    }
    case 'hata-bul': {
      if (!a.cumle) ek('cumle eksik.')
      if (!a.hataliParca) ek('hataliParca eksik — öğrenci neyi düzeltecek?')
      if (!Array.isArray(a.kabul) || !a.kabul.length) ek('kabul listesi boş.')
      break
    }
    case 'durum-ifade':
    case 'tanim-kelime':
    case 'soru-cevap':
    case 'dinle-yaz': {
      if (!Array.isArray(a.kabul) || !a.kabul.length) ek('kabul listesi boş.')
      if (a.tur === 'durum-ifade' && !a.durum) ek('durum eksik.')
      if (a.tur === 'tanim-kelime' && !a.tanim) ek('tanim eksik.')
      if (a.tur === 'soru-cevap' && !a.soru) ek('soru eksik.')
      if (a.tur === 'dinle-yaz' && !a.seslendir) ek('seslendir eksik.')
      break
    }
    case 'genisletme': {
      if (!Array.isArray(a.adimlar) || a.adimlar.length < 2) ek('en az iki adım gerekli.')
      ;(a.adimlar ?? []).forEach((s, i) => {
        if (!Array.isArray(s?.kabul) || !s.kabul.length) ek(`adim[${i}] kabul listesi boş.`)
      })
      break
    }
    case 'dogal-secim': {
      if (!Array.isArray(a.secenekler) || a.secenekler.length < 2) ek('en az iki seçenek gerekli.')
      if (!(a.secenekler ?? []).some((s) => s.dogal)) ek('doğal seçenek işaretlenmemiş.')
      if (!(a.secenekler ?? []).every((s) => s.neden)) ek('her seçenek için "neden" gerekli.')
      break
    }
    case 'yazma': {
      if (!a.gorev) ek('gorev eksik.')
      if (!Array.isArray(a.asamalar) || a.asamalar.length < 3) ek('yazma görevi aşamalı olmalı.')
      if (!Array.isArray(a.olcut) || !a.olcut.length) ek('değerlendirme ölçütü eksik.')
      break
    }
    default:
      break
  }

  return h
}

/** Bir dersi baştan sona doğrular. Hata dizisi döner. */
export function dersDogrula(ders) {
  const h = []
  const ek = (m) => h.push(`[${ders?.id ?? '?'}] ${m}`)

  if (!ders || typeof ders !== 'object') return ['Ders nesnesi değil.']
  if (!ders.id) ek('id eksik.')
  if (typeof ders.surum !== 'number') ek('surum (sayı) eksik.')
  if (ders.dil !== 'en') ek(`beklenmeyen dil: ${ders.dil}`)
  if (!SEVIYE_SIRASI.includes(ders.seviye)) ek(`bilinmeyen seviye: ${ders.seviye}`)
  if (!ders.baslik) ek('baslik eksik.')
  if (!ders.amac) ek('amac eksik — öğrenci neden çalıştığını bilmeli.')
  if (!ders.kazanim) ek('kazanim eksik.')
  if (!Number.isFinite(ders.sure)) ek('sure (dakika) eksik.')
  if (!Array.isArray(ders.bloklar) || !ders.bloklar.length) ek('öğretim bloğu yok.')
  if (!Array.isArray(ders.alistirmalar) || ders.alistirmalar.length < 3) {
    ek('en az üç alıştırma gerekli — ders yalnız metin olamaz.')
  }
  if (!Array.isArray(ders.ozet) || !ders.ozet.length) ek('ozet eksik.')
  if (!Array.isArray(ders.miniSinav) || !ders.miniSinav.length) ek('miniSinav eksik.')

  ;(ders.bloklar ?? []).forEach((b, i) => {
    if (!BLOK_TURLERI.includes(b?.tur)) ek(`blok[${i}] bilinmeyen tür: ${b?.tur}`)
  })

  const idler = new Set()
  const hepsi = [...(ders.alistirmalar ?? []), ...(ders.miniSinav ?? [])]
  hepsi.forEach((a, i) => {
    if (idler.has(a?.id)) ek(`alıştırma id tekrar ediyor: ${a.id}`)
    idler.add(a?.id)
    alistirmaDogrula(a, `alıştırma[${i}]`).forEach((m) => ek(m))
  })

  return h
}

/** Bir kelime kaydını doğrular. */
export function kelimeDogrula(k) {
  const h = []
  const ek = (m) => h.push(`[${k?.id ?? '?'}] ${m}`)
  if (!k?.id) ek('id eksik.')
  if (!k?.kelime) ek('kelime eksik.')
  if (!k?.ingilizceTanim) ek('İngilizce tanım eksik — öğrenci dostu tanım zorunlu.')
  if (!k?.ipa) ek('IPA eksik.')
  if (!Array.isArray(k?.ornekler) || k.ornekler.length < 2) ek('en az iki bağlamda örnek gerekli.')
  if (!SEVIYE_SIRASI.includes(k?.seviye)) ek(`bilinmeyen seviye: ${k?.seviye}`)
  return h
}
