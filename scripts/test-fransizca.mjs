/**
 * FRANSIZCA İÇERİK KALİTE KAPISI
 * ==================================================================
 *
 *   node scripts/test-fransizca.mjs
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
} from '../src/content/fransizca/index.js'
import { dersDogrula, kelimeDogrula, alistirmaDogrula } from '../src/lib/fransizca/sema.js'
import { alistirmaKontrol, DURUM } from '../src/lib/fransizca/cevap.js'
import { TURKCE_IZLERI, izleriBul } from '../src/lib/fransizca/turkceIzleri.js'
import { bosOturum, cevapIsle, sonrakiSoru, sonucla, yazmaEkle } from '../src/lib/fransizca/seviyeTespit.js'
import { SEVIYE_SIRASI } from '../src/lib/fransizca/seviyeler.js'

let hata = 0
let uyari = 0

const HATA = (m) => { console.error(`  ✗ ${m}`); hata += 1 }
const UYARI = (m) => { console.warn(`  ! ${m}`); uyari += 1 }
const TAMAM = (m) => console.log(`  ✓ ${m}`)

console.log(`\n=== DRKOÇ Fransızca içerik denetimi ===`)
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
  { a: { tur: 'durum-ifade', kabul: ['Je suis élève'] }, cevap: 'Je suis eleve', beklenen: DURUM.DOGRU, ad: 'aksan eksik — klavyede é yok' },
  { a: { tur: 'durum-ifade', kabul: ["J'ai dix-sept ans"] }, cevap: 'J ai dix-sept ans', beklenen: DURUM.DOGRU, ad: 'kesme işareti boşlukla yazılmış' },
  { a: { tur: 'durum-ifade', kabul: ["J'ai dix-sept ans"] }, cevap: 'J’ai dix-sept ans', beklenen: DURUM.DOGRU, ad: 'telefon klavyesinin kıvrık kesmesi' },
  { a: { tur: 'durum-ifade', kabul: ['Je suis élève'] }, cevap: '  Je suis élève.  ', beklenen: DURUM.DOGRU, ad: 'boşluk + nokta' },
  { a: { tur: 'durum-ifade', kabul: ['Parlez-vous français'] }, cevap: 'Parlez vous français', beklenen: DURUM.DOGRU, ad: 'tire yerine boşluk' },
  { a: { tur: 'durum-ifade', kabul: ['Est-ce que tu parles français'] }, cevap: 'Est ce que tu parles français', beklenen: DURUM.DOGRU, ad: 'est-ce que ayrı yazılmış' },
  { a: { tur: 'durum-ifade', kabul: ['Je travaille lundi'] }, cevap: 'Je travaille Lundi', beklenen: DURUM.DOGRU, ad: 'gün adı büyük yazılmış — doğru ama uyarılır' },
  { a: { tur: 'durum-ifade', kabul: ['Bonjour'] }, cevap: 'Bonjuor', beklenen: DURUM.YAKIN, ad: 'yazım hatası → neredeyse doğru' },
  { a: { tur: 'durum-ifade', kabul: ['Bonjour'] }, cevap: 'Bonne nuit', beklenen: DURUM.YANLIS, ad: 'gerçekten yanlış' },
  /* Kritik: eksik ya da fazla KELİME yazım hatası sayılmamalı. Özneyi
     düşürmek, artikeli atlamak ya da olumsuzluğun bir parçasını yazmamak
     tam olarak derslerin öğretmeye çalıştığı hatadır; iki karakterlik
     fark diye affedilirse öğrenci hatasını hiç görmez. */
  { a: { tur: 'hata-bul', kabul: ['Je suis élève au lycée'] }, cevap: 'Suis élève au lycée', beklenen: DURUM.YANLIS, ad: 'özne eksik — yazım hatası SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ["J'ai un frère"] }, cevap: "J'ai frère", beklenen: DURUM.YANLIS, ad: 'artikel eksik — yazım hatası SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ['Je ne comprends pas'] }, cevap: 'Je comprends pas', beklenen: DURUM.YANLIS, ad: 'olumsuzluğun "ne" parçası eksik' },
  { a: { tur: 'durum-ifade', kabul: ["J'ai un frère"] }, cevap: "J'ai un grand frère", beklenen: DURUM.YANLIS, ad: 'fazladan kelime — yazım hatası SAYILMAZ' },
  { a: { tur: 'durum-ifade', kabul: ['Je suis professeur'] }, cevap: 'Je suis professeurr', beklenen: DURUM.YAKIN, ad: 'tek kelimede yazım hatası' },
  { a: { tur: 'durum-ifade', kabul: ['pain'] }, cevap: 'main', beklenen: DURUM.YANLIS, ad: 'kısa kelimede fark = başka kelime' },
  { a: { tur: 'durum-ifade', kabul: ['Bonjour'] }, cevap: '', beklenen: DURUM.BOS, ad: 'boş cevap' },
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
  'ozne-dusmesi': 'Suis étudiant.',
  'yas-etre': 'Je suis 17 ans.',
  'avoir-durum': 'Je suis faim.',
  'meslek-artikel': 'Je suis un étudiant.',
  'olumsuz-ne-yok': 'Je comprends pas la question.',
  'olumsuz-sira': 'Je pas comprends.',
  'cift-olumsuz': 'Je ne sais pas rien.',
  'elizyon-yok': 'Je ai un frère.',
  'artikel-eksik': 'Je lis livre.',
  'partitif-eksik': 'Je mange pain.',
  'kaynasma-yok': 'Je vais à le cinéma.',
  'sifat-yeri': 'une rouge voiture',
  'sifat-uyumu': 'Elle est fatigué.',
  'yuklem-sonda': "Je à l'école vais.",
  'soru-duz-cumle': 'Où tu habites ?',
  'var-yok': 'Il est un livre sur la table.',
  'edat-aktarimi': 'Je cherche pour mon stylo.',
  'buyuk-harf': 'je travaille Lundi',
  'aksan-anlam': 'Ou est-ce que tu habites ?',
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
  'Je suis étudiant.',
  "J'ai dix-sept ans.",
  'Je ne comprends pas.',
  'Je vais au cinéma.',
  'Elle est fatiguée.',
  'une voiture rouge',
  "Je vais à l'école.",
  'Où est-ce que tu habites ?',
  'Il y a un livre sur la table.',
  'Je cherche mon stylo.',
  'Je travaille lundi.',
  "J'ai faim.",
  'Je ne sais rien.',
  'Je mange du pain.',
  'Est-ce que tu parles français ?',
  "J'ai décidé de le faire.",
  'Il a le livre.',
  'Ma mère est contente.',
  'Je suis turc et je parle turc.',
  'Nous sommes dans la même classe.',
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
  "Bonjour. Je m'appelle Deniz et je suis élève. J'habite à Ankara et j'apprends le français parce que je voudrais voyager."
)
const yazmaSonuc = sonucla(yazmaOturum, null)
if (!yazmaSonuc.yazma?.analiz) HATA('Yazma analizi üretilmedi')
else TAMAM(`Yazma analizi çalışıyor (${yazmaSonuc.yazma.analiz.kelimeSayisi} kelime, ${yazmaSonuc.yazma.analiz.bulgular.length} bulgu)`)

// Türkçe düşünme izi olan metin yakalanmalı
const izliYazma = yazmaEkle(bosOturum(), TESPIT_YAZMA_GOREVI, "Suis étudiant. Je suis 17 ans et je comprends pas bien. Je cherche pour mes amis.")
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
