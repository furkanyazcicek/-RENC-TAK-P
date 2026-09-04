/**
 * DRKOÇ — DİL ÖĞRENME İÇERİK SÖZLEŞMESİ
 * ==================================================================
 *
 * NEDEN VAR: içerik React bileşenlerinin içine gömülürse ne öğretmen
 * ekleyebilir ne de bir editör aracı yazılabilir. Bu dosya "bir ders,
 * bir alıştırma, bir kelime kaydı nedir" sorusunun tek cevabıdır. Ekranlar
 * bu sözleşmeyi okur; içerik dosyaları bu sözleşmeye uyar.
 *
 * DİL BAĞIMSIZ: `dil` alanı bilinçli olarak zorunlu. Bu ağaçta yalnızca 'fr'
 * içeriği var; yeni bir dil eklendiğinde ekranlar değil, yalnız içerik
 * dosyaları çoğalır. Arayüz tarafında yarım kalmış dil sayfası açılmaz —
 * kayıt defterinde içeriği olan dil listelenir.
 *
 * ------------------------------------------------------------------
 * DERS (ders nesnesi)
 * ------------------------------------------------------------------
 *   id            benzersiz kimlik, örn. 'a1-m1-d3'
 *   surum         içerik sürümü (sayı) — içerik değişince artırılır
 *   dil           'es'
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
 *   { tur: 'ornek',        satirlar: [{ fr, tr?, not? }] }
 *   { tur: 'kalip',        baslik, kaliplar: [{ fr, kullanim, ornek }] }
 *   { tur: 'tablo',        baslik, basliklar: [], satirlar: [[]] }
 *   { tur: 'karsilastirma',baslik, dogal, yapay, aciklama }
 *   { tur: 'tuzak',        baslik, yanlis, dogru, neden }
 *   { tur: 'telaffuz',     baslik, sesler: [{ ipa, aciklama, kelimeler: [] }] }
 *   { tur: 'okuma',        baslik, metin, sozluk?: [{ fr, tr }] }
 *   { tur: 'dinleme',      baslik, metin, satirlar?: [{ kisi?, fr }], hiz? }
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
 *   { id, dil, kelime, tur, seviye, ispanyolcaTanim, turkceDestek, ipa,
 *     artikel?('el'|'la'), cins?('eril'|'disil'), cogul?, cekim?,
 *     heceler, ornekler:[{fr,tr}], esdizim:[], esAnlam:[], zitAnlam:[],
 *     aile:[], hata?, kayit?('resmi'|'gundelik'|'argo'),
 *     bolgesel?:{fr?,ca?,be?,ch?}, hatirlatma?, uretim?:{yonerge,kabul:[]} }
 *
 *   İSPANYOLCAYA ÖZGÜ ZORUNLULUK: `tur` 'isim' ise `artikel`, `cins` ve
 *   `cogul` ZORUNLUDUR. Cinsiyetsiz öğrenilen bir isim yarım öğrenilmiştir;
 *   öğrenci o kelimeyi hiçbir cümlede doğru kullanamaz (sıfat uyumu, iyelik,
 *   zamir — hepsi cinsiyete bağlıdır).
 *
 *   `cins` NEDEN AYRI BİR ALAN: İspanyolcada vurgulu "a" sesiyle başlayan
 *   DİŞİL isimler tekilde "el" artikeli alır (el agua, el aula) ama kelime
 *   dişildir ve sıfat dişil gelir: "el agua fría". Yalnız artikele bakan
 *   öğrenci burada yanılır; bu yüzden cins ayrıca yazılır. Ayrıca -a ile
 *   biten bazı isimler erildir (el problema, el día) ve bunlar da yalnız
 *   `cins` alanından öğrenilebilir. İçerik testi bunu arar.
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
 * Ekranlar bunu çalıştırmaz; içerik testi (`npm run test:ispanyolca`) çalıştırır.
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
  if (ders.dil !== 'es') ek(`beklenmeyen dil: ${ders.dil}`)
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
export const ARTIKELLER = ['el', 'la']
export const CINSLER = ['eril', 'disil']

export function kelimeDogrula(k) {
  const h = []
  const ek = (m) => h.push(`[${k?.id ?? '?'}] ${m}`)
  if (!k?.id) ek('id eksik.')
  if (!k?.kelime) ek('kelime eksik.')
  if (!k?.ispanyolcaTanim) ek('İspanyolca tanım eksik — öğrenci dostu tanım zorunlu.')
  if (!k?.ipa) ek('IPA eksik.')
  if (!Array.isArray(k?.ornekler) || k.ornekler.length < 2) ek('en az iki bağlamda örnek gerekli.')
  if (!SEVIYE_SIRASI.includes(k?.seviye)) ek(`bilinmeyen seviye: ${k?.seviye}`)

  /* İspanyolcanın kendi kuralı: isim = artikel + cinsiyet + çoğul.
     Bu üçlü eksikse kelime öğretilmiş sayılmaz. */
  if (k?.tur === 'isim') {
    if (!ARTIKELLER.includes(k?.artikel)) ek('isim için artikel (el/la) zorunlu.')
    if (!CINSLER.includes(k?.cins)) ek('isim için cins (eril/disil) zorunlu.')
    if (!k?.cogul) ek('isim için çoğul biçim zorunlu (çoğulu olmayanlarda "çoğulu yok" yazılır).')
    /* l' cinsiyeti gizler; bu durumda cins alanı tek bilgi kaynağıdır ve
       yukarıdaki kontrol zaten onu zorunlu kılar. */
  }
  /* Fiillerde düzensiz çekim varsa gösterilmeli; öğrenci ezberlemek
     zorunda olduğu biçimi kelimeyle birlikte görmeli. */
  if (k?.tur === 'fiil' && k?.duzensiz && !k?.cekim) {
    ek('düzensiz fiil için cekim alanı zorunlu (ör. "voy · vas · va · vamos").')
  }
  return h
}

/* ------------------------------------------------------------------ */
/* DİL KARTLARI                                                        */
/* ------------------------------------------------------------------ */
/**
 * Dil kartları ders müfredatından BAĞIMSIZDIR ve bilinçli olarak öyledir.
 *
 * Müfredat kelimeleri (kelime/ klasörü) seviyeye göre seçilir: A1 öğrencisi
 * A1 kelimesi görür. Kartlar ise İLGİYE göre seçilir: futbol seven öğrenci
 * futbol destesini açar. Bu ikisi aynı havuzdan beslenseydi ya müfredat
 * bozulurdu ya da desteler yapay kalırdı.
 *
 * KART = ön yüz (hedef dilde) + arka yüz (Türkçe karşılık + örnek cümle).
 * Örnek cümle ZORUNLUDUR: bir kelimeyi bağlamsız ezberlemek, onu
 * kullanabilmek değildir. Örneğin Türkçesi de zorunludur; öğrenci yanında
 * öğretmen olmadan çalışıyor.
 */

/* Ön yüzdeki yardımcı fiiller ve edatlar örnek cümlede biçim değiştirir
   ya da hiç görünmez; kelimenin gerçekten geçip geçmediğini ölçerken
   bunlara bakılmaz. */
const DOLGU_KELIMELER = new Set([
  /* Yardımcı ve çok genel fiiller: örnek cümlede çekilerek biçim değiştirir. */
  'avoir', 'être', 'faire', 'aller', 'haben', 'sein', 'werden', 'machen',
  'tener', 'estar', 'hacer', 'have', 'take', 'make', 'get', 'does',
  /* Edatlar ve bağlaçlar: tek başlarına kelimeyi temsil etmez. */
  'pour', 'dans', 'avec', 'nach', 'para', 'como', 'with', 'from', 'that',
  'that', 'this', 'your', 'einen', 'eine', 'sich',
  /* YER TUTUCULAR: kartın ön yüzünde "someone / something" yazar ama örnek
     cümlede onların yerine gerçek bir kelime geçer. Bunları aramak, doğru
     kartı yanlış saymak olurdu. */
  'someone', 'something', 'somebody', 'jemanden', 'jemandem', 'etwas',
  'alguien', 'algo', 'quelque', 'chose', "quelqu'un",
])

/** Bir kart kaydını doğrular. Hata dizisi döner (boşsa geçerli). */
export function kartDogrula(k, yol = '') {
  const h = []
  const ek = (m) => h.push(`${yol}${yol ? ' → ' : ''}[${k?.id ?? '?'}] ${m}`)
  if (!k || typeof k !== 'object') return [`${yol}: kart nesnesi değil.`]
  if (!k.id) ek('id eksik.')
  if (!k.on) ek('ön yüz eksik.')
  if (!k.arka) ek('arka yüz (Türkçe karşılık) eksik.')
  if (!k.ornek) ek('örnek cümle eksik — kelime bağlamsız öğretilemez.')
  if (!k.ornekTr) ek('örnek cümlenin Türkçesi eksik — öğrenci yalnız çalışıyor.')
  if (k.ornek && k.on) {
    /* Örnek cümle kelimeyi GERÇEKTEN içermeli; içermiyorsa öğrenci
       kelimeyi kullanımda göremez ve kart yarım kalır.
       
       AMA gevşek aranır, çünkü doğru kartlarda kelime örnekte biçim
       değiştirir: dönüşlü fiilde zamir değişir (s'entraîner → m'entraîne),
       yardımcı fiilli kalıpta yardımcı çekilir (avoir faim → j'ai faim),
       isim çoğullaşır. Bu yüzden ön yüzdeki ANLAMLI kelimelerden EN AZ
       BİRİNİN kökü örnekte geçiyorsa kart geçerli sayılır. */
    /* KÖK KAÇIŞI: bazı kelimeler örnek cümlede tanınmayacak kadar
       değişir — Almancanın kuvvetli fiilleri (verlieren → verloren) ve
       ayrılabilir fiilleri (anschauen → schauen … an) gibi. Bunlarda
       kart, örnekte aranacak kökü kendisi bildirir. Kaçış bilinçlidir
       ve içerikte açıkça görünür; sessizce gevşetilmiş bir kural değildir. */
    const govde = String(k.kok ?? k.on)
      .toLocaleLowerCase('tr')
      .replace(/^(le|la|les|un|une|der|die|das|ein|eine|el|los|las|the|to)\s+/i, '')
      .replace(/^[lsdcjmtn]'/i, '')
    const parcalar = govde
      .split(/[\s/(),]+/)
      /* Baştaki kısaltma eki ve kelimeye yapışmış noktalama temizlenir;
         "to…?" gibi bir parça hiçbir cümlede bulunamazdı. */
      .map((p) => p.replace(/^[lsdcjmtn]'/i, '').replace(/[.…?!:;"«»¿¡]+/g, ''))
      /* Yardımcı fiil ve edatlar anlam taşımaz; onlara bakılmaz. */
      .filter((p) => p.length >= 4 && !DOLGU_KELIMELER.has(p))
    const metin = String(k.ornek).toLocaleLowerCase('tr')
    const gecti = parcalar.length === 0 || parcalar.some((p) => {
      const koku = p.length > 5 ? p.slice(0, Math.ceil(p.length * 0.6)) : p.slice(0, 4)
      return metin.includes(koku)
    })
    if (!gecti) ek(`örnek cümle kelimeyi içermiyor: "${k.on}" → "${k.ornek}"`)
  }
  return h
}

/** Bir desteyi baştan sona doğrular. */
export function desteDogrula(deste) {
  const h = []
  const ek = (m) => h.push(`[${deste?.id ?? '?'}] ${m}`)
  if (!deste?.id) ek('id eksik.')
  if (!deste?.ad) ek('ad eksik.')
  if (!deste?.aciklama) ek('açıklama eksik — öğrenci destenin ne olduğunu bilmeli.')
  if (!deste?.simge) ek('simge eksik.')
  if (deste?.dil !== 'es') ek(`beklenmeyen dil: ${deste?.dil}`)
  if (!Array.isArray(deste?.kartlar) || deste.kartlar.length < 5) {
    ek('bir destede en az beş kart olmalı.')
  }
  const idler = new Set()
  ;(deste?.kartlar ?? []).forEach((k, i) => {
    if (idler.has(k?.id)) ek(`kart id tekrar ediyor: ${k.id}`)
    idler.add(k?.id)
    kartDogrula(k, `kart[${i}]`).forEach((m) => h.push(m))
  })
  return h
}
