/**
 * İSPANYOLCA İÇERİK KALİTE KAPISI
 * ==================================================================
 *
 *   node scripts/test-ispanyolca.mjs
 *
 * Ne kontrol eder:
 *   1. Her ders içerik sözleşmesine uyuyor mu (sema.js)
 *   2. Kelime kayıtları eksiksiz mi
 *   3. Ders → kelime, ders → not, ders → sonraki ders bağlantıları kırık mı
 *   4. Alıştırmaların DOĞRU cevabı gerçekten doğru sayılıyor mu
 *      (cevap motoru kendi doğru cevabını kabul etmiyorsa öğrenci de
 *       hiçbir zaman doğru yapamaz — en tehlikeli sessiz hata budur)
 *   5. Seviye tespit motoru baştan sona çalışıyor mu
 *   6. Türkçe düşünme izleri kendi örneklerini yakalıyor mu
 *   7. Zorluk dağılımı dengeli mi (uyarı — hata değil)
 */

import {
  DERSLER,
  KELIME_HAVUZU,
  MODULLER,
  NOTLAR,
  TESPIT_MADDELERI,
  TESPIT_YAZMA_GOREVI,
  ANTRENMANLAR,
  SESLER,
  dersBul,
  kelimeBul,
  notBul,
} from '../src/content/ispanyolca/index.js'
import { dersDogrula, kelimeDogrula, alistirmaDogrula } from '../src/lib/ispanyolca/sema.js'
import { alistirmaKontrol, DURUM } from '../src/lib/ispanyolca/cevap.js'
import { TURKCE_IZLERI, izleriBul } from '../src/lib/ispanyolca/turkceIzleri.js'
import { bosOturum, cevapIsle, sonrakiSoru, sonucla, yazmaEkle } from '../src/lib/ispanyolca/seviyeTespit.js'
import { SEVIYE_SIRASI } from '../src/lib/ispanyolca/seviyeler.js'

let hata = 0
let uyari = 0

const HATA = (m) => { console.error(`  ✗ ${m}`); hata += 1 }
const UYARI = (m) => { console.warn(`  ! ${m}`); uyari += 1 }
const TAMAM = (m) => console.log(`  ✓ ${m}`)

console.log(`\n=== DRKOÇ İspanyolca içerik denetimi ===`)
console.log(`${DERSLER.length} ders · ${KELIME_HAVUZU.length} kelime · ${MODULLER.length} modül · ${NOTLAR.length} not · ${TESPIT_MADDELERI.length} tespit maddesi\n`)

/* ------------------------------------------------------------------ */
console.log('1) Ders şeması')
const dersIdleri = new Set()
for (const ders of DERSLER) {
  if (dersIdleri.has(ders.id)) HATA(`Ders id tekrar ediyor: ${ders.id}`)
  dersIdleri.add(ders.id)
  const hatalar = dersDogrula(ders)
  hatalar.forEach(HATA)
}
if (!hata) TAMAM(`${DERSLER.length} dersin tamamı şemaya uygun`)

/* ------------------------------------------------------------------ */
console.log('\n2) Kelime kayıtları')
const oncekiHata = hata
const kelimeIdleri = new Set()
for (const kelime of KELIME_HAVUZU) {
  if (kelimeIdleri.has(kelime.id)) HATA(`Kelime id tekrar ediyor: ${kelime.id}`)
  kelimeIdleri.add(kelime.id)
  kelimeDogrula(kelime).forEach(HATA)
}
if (hata === oncekiHata) TAMAM(`${KELIME_HAVUZU.length} kelime kaydı eksiksiz`)

/* ------------------------------------------------------------------ */
console.log('\n3) Bağlantılar')
const bagOncesi = hata
for (const ders of DERSLER) {
  for (const kartId of ders.kartlar ?? []) {
    if (!kelimeBul(kartId)) HATA(`${ders.id} → tanımsız kelime kartı: ${kartId}`)
  }
  if (ders.not && !notBul(ders.not)) HATA(`${ders.id} → tanımsız PDF notu: ${ders.not}`)
  if (ders.sonraki && !dersBul(ders.sonraki)) HATA(`${ders.id} → tanımsız sonraki ders: ${ders.sonraki}`)
  for (const onKosul of ders.onKosullar ?? []) {
    if (!dersBul(onKosul)) HATA(`${ders.id} → tanımsız ön koşul: ${onKosul}`)
  }
  const modul = MODULLER.find((m) => m.id === ders.modul)
  if (!modul) HATA(`${ders.id} → tanımsız modül: ${ders.modul}`)
  else if (modul.seviye !== ders.seviye) {
    HATA(`${ders.id} seviyesi (${ders.seviye}) modülün seviyesinden (${modul.seviye}) farklı`)
  }
}
for (const modul of MODULLER) {
  if (modul.durum === 'hazir' && !DERSLER.some((d) => d.modul === modul.id)) {
    HATA(`Modül "hazir" işaretli ama dersi yok: ${modul.id}`)
  }
  for (const dersId of modul.dersler ?? []) {
    if (!dersBul(dersId)) HATA(`${modul.id} → tanımsız ders: ${dersId}`)
  }
}
for (const not of NOTLAR) {
  if (not.ders && !dersBul(not.ders)) HATA(`Not ${not.id} → tanımsız ders: ${not.ders}`)
}
if (hata === bagOncesi) TAMAM('Ders, kelime, not ve modül bağlantılarının tamamı geçerli')

/* ------------------------------------------------------------------ */
console.log('\n4) Cevap motoru kendi doğru cevabını kabul ediyor mu')
const motorOncesi = hata

/** Bir alıştırma için "doğru cevabı" üretir — motorun kendi kendini sınaması. */
function dogruCevabiUret(a) {
  switch (a.tur) {
    case 'coktan-secmeli':
    case 'dinle-sec':
      return a.dogruId
    case 'dogal-secim':
      return a.secenekler.find((s) => s.dogal)?.id
    case 'bosluk':
      return a.cevaplar.map((c) => c.kabul[0])
    case 'siralama':
      return a.dogruSira
    case 'eslestirme':
      return { ...a.eslesme }
    case 'genisletme':
      return a.adimlar.map((s) => s.kabul[0])
    case 'hata-bul':
    case 'durum-ifade':
    case 'tanim-kelime':
    case 'soru-cevap':
    case 'dinle-yaz':
      return a.kabul[0]
    default:
      return null
  }
}

const tumAlistirmalar = [
  ...DERSLER.flatMap((d) => [...(d.alistirmalar ?? []), ...(d.miniSinav ?? [])]),
  ...ANTRENMANLAR.flatMap((a) => a.alistirmalar ?? []),
  ...TESPIT_MADDELERI,
]
let sinanan = 0
for (const a of tumAlistirmalar) {
  if (a.tur === 'yazma') continue
  const cevap = dogruCevabiUret(a)
  if (cevap == null) { UYARI(`${a.id}: doğru cevap üretilemedi (tür: ${a.tur})`); continue }
  const sonuc = alistirmaKontrol(a, cevap)
  sinanan += 1
  if (sonuc.durum !== DURUM.DOGRU) {
    HATA(`${a.id} (${a.tur}): kendi doğru cevabı "${sonuc.durum}" sayıldı — öğrenci bunu asla doğru yapamaz.`)
  }
  // Bütün kabul alternatifleri de doğru sayılmalı.
  if (['hata-bul', 'durum-ifade', 'tanim-kelime', 'soru-cevap', 'dinle-yaz'].includes(a.tur)) {
    for (const alternatif of a.kabul) {
      const s = alistirmaKontrol(a, alternatif)
      if (s.durum !== DURUM.DOGRU) {
        HATA(`${a.id}: kabul listesindeki "${alternatif}" doğru sayılmadı.`)
      }
    }
  }
}
if (hata === motorOncesi) TAMAM(`${sinanan} alıştırmanın doğru cevabı motor tarafından kabul edildi`)

/* ------------------------------------------------------------------ */
console.log('\n5) Cevap motoru esneklik sınaması')
const esneklikOncesi = hata
const esneklikVakalari = [
  { a: { tur: 'durum-ifade', kabul: ['Soy estudiante'] }, cevap: 'soy estudiante', beklenen: DURUM.DOGRU, ad: 'kucuk harf' },
  { a: { tur: 'durum-ifade', kabul: ['Tengo dieciseis anos'] }, cevap: 'Tengo dieciseis anos', beklenen: DURUM.DOGRU, ad: 'duz yazim' },
  { a: { tur: 'durum-ifade', kabul: ['Tengo dieciseis años'] }, cevap: 'Tengo dieciseis anos', beklenen: DURUM.YANLIS, ad: 'n yerine n yazilmis - ANLAM degisir, affedilmez' },
  { a: { tur: 'durum-ifade', kabul: ['Tengo dieciséis años'] }, cevap: 'Tengo dieciseis años', beklenen: DURUM.DOGRU, ad: 'aksan eksik - klavyede e yok' },
  { a: { tur: 'durum-ifade', kabul: ['¿Cómo te llamas?'] }, cevap: 'Como te llamas?', beklenen: DURUM.DOGRU, ad: 'ters soru isareti yok - klavyede yok' },
  { a: { tur: 'durum-ifade', kabul: ['Voy al parque'] }, cevap: 'Voy a el parque', beklenen: DURUM.DOGRU, ad: 'kaynasma acik yazilmis - ayrica iz olarak teshis edilir' },
  { a: { tur: 'durum-ifade', kabul: ['Soy estudiante'] }, cevap: '  Soy estudiante.  ', beklenen: DURUM.DOGRU, ad: 'bosluk + nokta' },
  { a: { tur: 'durum-ifade', kabul: ['Muchas gracias'] }, cevap: 'Muchas graciass', beklenen: DURUM.YAKIN, ad: 'yazim hatasi -> neredeyse dogru' },
  { a: { tur: 'durum-ifade', kabul: ['Hola'] }, cevap: 'Adiós', beklenen: DURUM.YANLIS, ad: 'gercekten yanlis' },
  /* Kritik: eksik ya da fazla KELIME yazim hatasi sayilmamali. Artikeli
     atlamak, donuslu eki dusurmek ya da "a" edatini yazmamak tam olarak
     derslerin ogretmeye calistigi hatadir; iki karakterlik fark diye
     affedilirse ogrenci hatasini hic gormez. */
  { a: { tur: 'durum-ifade', kabul: ['Me levanto a las siete'] }, cevap: 'Levanto a las siete', beklenen: DURUM.YANLIS, ad: 'donuslu ek eksik - yazim hatasi SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ['Tengo un hermano'] }, cevap: 'Tengo hermano', beklenen: DURUM.YANLIS, ad: 'artikel eksik - yazim hatasi SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ['Juego al fútbol'] }, cevap: 'Juego fútbol', beklenen: DURUM.YANLIS, ad: 'a edati eksik' },
  { a: { tur: 'durum-ifade', kabul: ['Tengo un hermano'] }, cevap: 'Tengo un hermano mayor', beklenen: DURUM.YANLIS, ad: 'fazladan kelime - yazim hatasi SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ['Soy profesor'] }, cevap: 'Soy profesorr', beklenen: DURUM.YAKIN, ad: 'tek kelimede yazim hatasi' },
  { a: { tur: 'durum-ifade', kabul: ['pan'] }, cevap: 'tan', beklenen: DURUM.YANLIS, ad: 'kisa kelimede fark = baska kelime' },
  { a: { tur: 'durum-ifade', kabul: ['Hola'] }, cevap: '', beklenen: DURUM.BOS, ad: 'bos cevap' },
]
for (const vaka of esneklikVakalari) {
  const sonuc = alistirmaKontrol(vaka.a, vaka.cevap)
  if (sonuc.durum !== vaka.beklenen) {
    HATA(`Esneklik "${vaka.ad}": beklenen ${vaka.beklenen}, gelen ${sonuc.durum}`)
  }
}
if (hata === esneklikOncesi) TAMAM(`${esneklikVakalari.length} esneklik vakası doğru değerlendirildi`)

/* ------------------------------------------------------------------ */
console.log('\n6) Türkçe düşünme izleri')
const izOncesi = hata
const izOrnekleri = {
  'ser-estar-yer': 'Mi casa es en Ankara.',
  'ser-estar-kimlik': 'Estoy profesor.',
  'yas-ser': 'Soy quince años.',
  'tener-durum': 'Estoy hambre.',
  'gustar-ters': 'Yo gusto el chocolate.',
  'gustar-uyum': 'Me gusta las naranjas.',
  'hay-estar': 'Está un parque cerca de aquí.',
  'kaynasma-yok': 'Voy a el cine.',
  'sifat-yeri': 'una roja casa',
  'sifat-uyumu': 'Mi hermana es alto.',
  'yuklem-sonda': 'Yo al colegio voy.',
  'kisisel-a': 'Veo mi hermano.',
  'muy-mucho': 'Muy gracias.',
  'ozne-fazlaligi': 'Yo hablo español y yo estudio inglés.',
  'buyuk-harf': 'Soy Turco.',
  'ters-soru-isareti': 'Cómo te llamas?',
  'a-eril-isim': 'La problema es difícil.',
  'por-para': 'Gracias para tu ayuda.',
  'saber-conocer': 'Conozco hablar español.',
  'olumsuz-tekrar': 'Sé nada de español.',
  'aksan-anlam': 'Tu eres mi amigo.',
  'estar-gerundio-fazla': 'Estoy viviendo en Ankara.',
}
for (const iz of TURKCE_IZLERI) {
  const ornek = izOrnekleri[iz.kod]
  if (!ornek) { UYARI(`İz "${iz.kod}" için sınama örneği yok`); continue }
  const bulunanlar = izleriBul(ornek).map((x) => x.kod)
  if (!bulunanlar.includes(iz.kod)) {
    HATA(`İz "${iz.kod}" kendi örneğini yakalayamadı: "${ornek}"`)
  }
}
// Doğru cümleler yanlışlıkla iz olarak işaretlenmemeli.
const temizCumleler = [
  'Soy estudiante.',
  'Tengo quince años.',
  'Mi casa está en Ankara.',
  'Me gusta el chocolate.',
  'Me gustan las naranjas.',
  'Hay un parque cerca de aquí.',
  'Voy al cine.',
  'una casa roja',
  'Mi hermana es alta.',
  'Veo a mi hermano.',
  'Muchas gracias.',
  'Hablo español y estudio inglés.',
  'Soy turco y hablo turco.',
  '¿Cómo te llamas?',
  '¿Dónde vives?',
  'El agua está fría.',
  'Gracias por tu ayuda.',
  'Sé hablar español.',
  'No sé nada.',
  'Ahora estoy estudiando.',
  'Tengo hambre.',
  'Estoy cansado.',
  'El sábado pasado fui al cine.',
  'En invierno hace mucho frío.',
  'El problema es difícil.',
  'Tú eres mi amigo.',
  'Vivo en Ankara.',
  'No sé nada de español.',
]
for (const cumle of temizCumleler) {
  const bulunan = izleriBul(cumle)
  if (bulunan.length) {
    HATA(`Doğru cümle yanlışlıkla iz olarak işaretlendi: "${cumle}" → ${bulunan.map((i) => i.kod).join(', ')}`)
  }
}
if (hata === izOncesi) TAMAM(`${TURKCE_IZLERI.length} iz kendi örneğini yakalıyor, doğru cümleler temiz geçiyor`)

/* ------------------------------------------------------------------ */
console.log('\n7) Seviye tespit motoru')
const tespitOncesi = hata

// Madde bankası bütünlüğü
const maddeIdleri = new Set()
for (const madde of TESPIT_MADDELERI) {
  if (maddeIdleri.has(madde.id)) HATA(`Tespit maddesi id tekrar ediyor: ${madde.id}`)
  maddeIdleri.add(madde.id)
  if (!SEVIYE_SIRASI.includes(madde.seviye)) HATA(`${madde.id}: geçersiz seviye ${madde.seviye}`)
  alistirmaDogrula(madde, madde.id).forEach(HATA)
}

/** Belirli bir yeteneğe sahip öğrenciyi taklit eder. */
function sanalOgrenci(yetenekIndeksi, dinlemeAcik = true) {
  let oturum = bosOturum()
  for (let i = 0; i < 30; i += 1) {
    const soru = sonrakiSoru(oturum, TESPIT_MADDELERI, { dinlemeAcik })
    if (!soru) break
    // Öğrenci kendi seviyesinin altındaki soruları doğru, üstündekileri yanlış yapar.
    const soruIndeksi = SEVIYE_SIRASI.indexOf(soru.seviye)
    const dogruYapar = soruIndeksi <= yetenekIndeksi
    const cevap = dogruYapar ? dogruCevabiUret(soru) : yanlisCevapUret(soru)
    oturum = cevapIsle(oturum, soru, cevap)
  }
  return oturum
}

function yanlisCevapUret(a) {
  switch (a.tur) {
    case 'coktan-secmeli':
    case 'dinle-sec':
      return a.secenekler.find((s) => s.id !== a.dogruId)?.id
    case 'dogal-secim':
      return a.secenekler.find((s) => !s.dogal)?.id
    case 'bosluk':
      return a.cevaplar.map(() => 'xxxx')
    case 'siralama':
      return [...a.dogruSira].reverse()
    case 'eslestirme': {
      const anahtarlar = Object.keys(a.eslesme)
      const degerler = Object.values(a.eslesme)
      return Object.fromEntries(anahtarlar.map((k, i) => [k, degerler[(i + 1) % degerler.length]]))
    }
    case 'genisletme':
      return a.adimlar.map(() => 'xxxx')
    default:
      return 'xxxx'
  }
}

for (const [ad, indeks] of [['sıfır', 0], ['A1', 1], ['A2', 2], ['B1', 3], ['B2', 4], ['C1', 5]]) {
  const oturum = sanalOgrenci(indeks)
  const sonuc = sonucla(oturum, { amac: 'okul' })
  const tahminIndeksi = SEVIYE_SIRASI.indexOf(sonuc.genelSeviye)
  const sapma = Math.abs(tahminIndeksi - indeks)
  if (oturum.gecmis.length < 8) {
    HATA(`${ad} öğrencisi için yalnız ${oturum.gecmis.length} soru soruldu (en az 8 bekleniyor)`)
  }
  if (sapma > 1) {
    HATA(`${ad} öğrencisi ${sonuc.genelSeviye} olarak ölçüldü (beklenen ${SEVIYE_SIRASI[indeks]} ±1)`)
  } else {
    TAMAM(`${ad} öğrencisi → ${sonuc.genelSeviye} (${oturum.gecmis.length} soru, güven: ${sonuc.guven})`)
  }
  if (!sonuc.gerekce?.length) HATA(`${ad}: sonuç gerekçesi üretilmedi`)
}

// Dinleme kapalıyken dinleme becerisi "ölçülemedi" olarak raporlanmalı.
const sessizOturum = sanalOgrenci(2, false)
const sessizSonuc = sonucla(sessizOturum, null, { dinlemeOlculdu: false })
if (sessizOturum.gecmis.some((g) => g.beceri === 'dinleme')) {
  HATA('Dinleme kapalıyken dinleme sorusu soruldu')
}
if (!sessizSonuc.olculemeyenler.some((o) => o.beceri === 'dinleme')) {
  HATA('Dinleme kapalıyken "ölçülemedi" bildirimi üretilmedi')
} else {
  TAMAM('Ses yokken dinleme sorulmuyor ve "ölçülemedi" olarak raporlanıyor')
}

// Yazma analizi
const yazmaOturum = yazmaEkle(
  sanalOgrenci(2),
  TESPIT_YAZMA_GOREVI,
  'Hola. Me llamo Deniz y soy estudiante. Vivo en Ankara y estudio español porque quiero viajar a España.'
)
const yazmaSonuc = sonucla(yazmaOturum, null)
if (!yazmaSonuc.yazma?.analiz) HATA('Yazma analizi üretilmedi')
else TAMAM(`Yazma analizi çalışıyor (${yazmaSonuc.yazma.analiz.kelimeSayisi} kelime, ${yazmaSonuc.yazma.analiz.bulgular.length} bulgu)`)

// Türkçe düşünme izi olan metin yakalanmalı
const izliYazma = yazmaEkle(bosOturum(), TESPIT_YAZMA_GOREVI, 'Yo soy quince años. Mi casa es en Ankara y yo gusto el chocolate. Gracias para tu ayuda.')
if (!izliYazma.yazma.analiz.bulgular.some((b) => b.tur === 'aktarim')) {
  HATA('Yazma analizinde Türkçe düşünme izi yakalanmadı')
} else {
  TAMAM('Yazma metnindeki Türkçe düşünme izi yakalanıyor')
}

if (hata === tespitOncesi) TAMAM('Seviye tespit motoru baştan sona çalışıyor')

/* ------------------------------------------------------------------ */
console.log('\n8) Zorluk ve beceri dağılımı (uyarı düzeyi)')
for (const ders of DERSLER) {
  const hepsi = [...(ders.alistirmalar ?? []), ...(ders.miniSinav ?? [])]
  const dagilim = { kolay: 0, orta: 0, zor: 0 }
  hepsi.forEach((a) => { if (a.zorluk) dagilim[a.zorluk] += 1 })
  if (dagilim.kolay === 0) UYARI(`${ders.id}: hiç kolay alıştırma yok`)
  if (dagilim.zor === 0) UYARI(`${ders.id}: hiç zor alıştırma yok`)
  const turler = new Set(hepsi.map((a) => a.tur))
  if (turler.size < 3) UYARI(`${ders.id}: yalnız ${turler.size} alıştırma türü var (en az 3 önerilir)`)
  const aciklamaEksik = hepsi.filter((a) => !a.aciklama && !a.secenekNotu && a.tur !== 'yazma').length
  if (aciklamaEksik > hepsi.length / 2) {
    UYARI(`${ders.id}: alıştırmaların yarısından fazlasında açıklama yok`)
  }
}
for (const madde of TESPIT_MADDELERI) {
  if (!madde.beceri) UYARI(`${madde.id}: beceri etiketi yok`)
}
const beceriSayaci = {}
TESPIT_MADDELERI.forEach((m) => { beceriSayaci[m.beceri] = (beceriSayaci[m.beceri] ?? 0) + 1 })
console.log('  Tespit bankası beceri dağılımı:', Object.entries(beceriSayaci).map(([k, v]) => `${k}=${v}`).join(' · '))

/* ------------------------------------------------------------------ */
console.log('\n9) Telaffuz laboratuvarı')
const telOncesi = hata
for (const ses of SESLER) {
  const eksik = ['nasilUretilir', 'agizKonumu', 'kelimeler', 'karsitlik', 'cumle', 'sikHata', 'olcut']
    .filter((alan) => !ses[alan])
  if (eksik.length) HATA(`Ses ${ses.id}: eksik alanlar → ${eksik.join(', ')}`)
  if (!ses.karsitlik?.ciftler?.length) HATA(`Ses ${ses.id}: karşıtlık çifti yok`)
}
if (hata === telOncesi) TAMAM(`${SESLER.length} ses kaydı eksiksiz`)

/* ------------------------------------------------------------------ */
console.log(`\n=== Sonuç: ${hata} hata, ${uyari} uyarı ===\n`)
process.exit(hata > 0 ? 1 : 0)
