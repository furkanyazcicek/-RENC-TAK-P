/**
 * PADİŞAH SESİ ÜRETİCİ  —  bir kez üret, sonsuza kadar kullan
 * ==================================================================
 *
 * NE YAPAR
 * Her padişahın belgesel anlatımını seslendirir, mp3 olarak
 * `public/lesson-assets/narration/padisahlar/` altına yazar ve
 * `src/data/padisahlar/sesDefteri.js` defterini günceller.
 *
 * NEDEN PADİŞAH BAŞINA TEK DOSYA
 * Anlatım altı yedi paragraftır ama tek bir belgesel parçasıdır.
 * Paragrafları ayrı seslendirip birleştirmek geçişleri bozar. Metnin
 * tamamı tek istekte okunur; paragraf araları anlatıcıya bırakılır.
 *
 * KULLANIM
 *   node scripts/padisah-sesi-uret.mjs --tahmin
 *       Hiç para harcamadan karakter ve maliyet raporu verir.
 *
 *   node scripts/padisah-sesi-uret.mjs yildirim-bayezid --dene
 *       TEK padişahı deneme klasörüne üretir, deftere DOKUNMAZ.
 *       Servis karşılaştırması için budur: aynı padişahı iki farklı
 *       servisle üretip yan yana dinlersin. Maliyeti birkaç kuruştur.
 *
 *   node scripts/padisah-sesi-uret.mjs
 *       Eksik olan bütün padişahların sesini üretir.
 *
 *   node scripts/padisah-sesi-uret.mjs <padisah-id>   tek padişah
 *   node scripts/padisah-sesi-uret.mjs --zorla        hepsini yeniden üret
 *   node scripts/padisah-sesi-uret.mjs --temizle      artık kullanılmayan mp3'leri sil
 *
 * ANAHTAR
 * `.env.local` içinde TTS_PROVIDER ve ilgili anahtar bulunmalıdır.
 * Anahtar yalnızca burada ve sunucuda okunur; tarayıcıya asla gitmez.
 */

import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { mp3Suresi, ortamDegiskenleriniYukle } from './lib/sesYardimcilari.mjs'

const SES_KOKU = 'public/lesson-assets/narration/padisahlar'
const DENEME_KOKU = 'public/lesson-assets/narration/padisahlar/deneme'
const DEFTER_YOLU = 'src/data/padisahlar/sesDefteri.js'

/* Türkçe belgesel temposu: dakikada yaklaşık 150 kelime ≈ 900 karakter. */
const KARAKTER_PER_DAKIKA = 900
const FIYAT = {
  openai: { birim: 'dakika', usd: 0.015, ad: 'OpenAI gpt-4o-mini-tts' },
  elevenlabs: { birim: 'karakter', usd: 0.00022, ad: 'ElevenLabs multilingual v2' },
}

const argumanlar = process.argv.slice(2)
const bayrak = (ad) => argumanlar.includes(ad)
const hedefId = argumanlar.find((deger) => !deger.startsWith('--')) || null
const sadeceTahmin = bayrak('--tahmin')
const denemeModu = bayrak('--dene')
const zorla = bayrak('--zorla')
const temizle = bayrak('--temizle')

await ortamDegiskenleriniYukle()

const { PADISAHLAR, padisahBul } = await import('../src/data/padisahlar/index.js')
const { anlatimMetni, anlatimSurumu, seslendirmeMetni } = await import('../src/lib/padisahAnlatim.js')
const { createTtsProvider } = await import('../api/_lib/tts/index.js')

let hedefler = PADISAHLAR
if (hedefId) {
  const padisah = padisahBul(hedefId)
  if (!padisah) {
    console.error(`\n  "${hedefId}" adında bir padişah bulunamadı.`)
    console.error(`  Kimlikler: ${PADISAHLAR.slice(0, 4).map((p) => p.id).join(', ')} …\n`)
    process.exit(1)
  }
  hedefler = [padisah]
}

const isler = hedefler.map((padisah) => ({
  padisah,
  // Maliyet ve rapor düz metinden; ses motoruna giden ise duraklama
  // işaretli sürümdür. İşaretler okunmaz, sessizliğe çevrilir.
  metin: anlatimMetni(padisah),
  soylenecek: seslendirmeMetni(padisah),
  surum: anlatimSurumu(padisah),
})).filter((is) => is.metin.trim().length > 0)

if (!isler.length) {
  console.error('\n  Seslendirilecek anlatım metni bulunamadı.\n')
  process.exit(1)
}

const toplamKarakter = isler.reduce((toplam, is) => toplam + is.metin.length, 0)
const tahminiDakika = toplamKarakter / KARAKTER_PER_DAKIKA

console.log(`\n  Osmanlı Padişahları · belgesel anlatımı`)
console.log(`  ${isler.length} padişah · ${toplamKarakter.toLocaleString('tr-TR')} karakter · yaklaşık ${tahminiDakika.toFixed(1)} dakika ses\n`)
if (isler.length <= 6) {
  isler.forEach((is) => console.log(`   ${String(is.padisah.order).padStart(2, '0')}  ${is.padisah.name.padEnd(18)} ${is.metin.length} karakter`))
  console.log('')
}

console.log('  Tek seferlik üretim maliyeti (tahmini):')
for (const fiyat of Object.values(FIYAT)) {
  const tutar = fiyat.birim === 'dakika' ? tahminiDakika * fiyat.usd : toplamKarakter * fiyat.usd
  console.log(`   · ${fiyat.ad.padEnd(34)} ~ $${tutar.toFixed(2)}`)
}
console.log('\n  (Bu tutar bir defalıktır. Anlatım metni değişmediği sürece ses yeniden üretilmez.)\n')

if (sadeceTahmin) {
  console.log('  --tahmin verildiği için hiçbir istek gönderilmedi.\n')
  process.exit(0)
}

const saglayici = createTtsProvider({ env: process.env, fetchImpl: globalThis.fetch })
if (!saglayici.available) {
  console.error('  Ses sağlayıcısı yapılandırılmamış.\n')
  console.error('  .env.local dosyasına şunları ekleyin:\n')
  console.error('    TTS_PROVIDER=openai')
  console.error('    OPENAI_API_KEY=...\n')
  console.error('  veya ElevenLabs için:\n')
  console.error('    TTS_PROVIDER=elevenlabs')
  console.error('    ELEVENLABS_API_KEY=...')
  console.error('    TTS_VOICE_ID=<ses kimliği>\n')
  process.exit(1)
}

const hedefKlasor = denemeModu ? DENEME_KOKU : SES_KOKU
await mkdir(hedefKlasor, { recursive: true })

if (denemeModu) {
  console.log(`  DENEME MODU — dosyalar ${hedefKlasor}/ altına yazılacak, defter değişmeyecek.\n`)
}

const defter = {}
const uretilenDosyalar = new Set()
let uretilen = 0
let atlanan = 0

for (const is of isler) {
  /* Deneme dosyasının adında servis ve ses kimliği durur; iki üretimi
     yan yana dinlerken hangisinin hangisi olduğu karışmasın diye. */
  const dosyaAdi = denemeModu
    ? `${is.padisah.id}.${saglayici.id}-${String(saglayici.voiceId || 'varsayilan').slice(0, 12)}.mp3`
    : `${is.padisah.id}.${is.surum}.mp3`
  const dosyaYolu = path.join(hedefKlasor, dosyaAdi)
  uretilenDosyalar.add(dosyaAdi)
  const etiket = `${String(is.padisah.order).padStart(2, '0')}  ${is.padisah.name}`

  if (!zorla && !denemeModu && existsSync(dosyaYolu)) {
    const mevcut = await readFile(dosyaYolu)
    defter[is.padisah.id] = { file: dosyaAdi, version: is.surum, duration: mp3Suresi(mevcut) }
    atlanan += 1
    console.log(`   ⏭  ${etiket} — zaten var, atlandı`)
    continue
  }

  process.stdout.write(`   ⏳ ${etiket} — üretiliyor…`)
  try {
    const ses = await saglayici.generateSpeech({
      text: is.soylenecek,
      language: 'tr-TR',
      // Öğretmen tonu DEĞİL: bu bir tarih belgeseli anlatımıdır.
      persona: 'belgesel',
    })
    const veri = Buffer.from(await ses.arrayBuffer())
    await writeFile(dosyaYolu, veri)
    const sure = mp3Suresi(veri)
    if (!denemeModu) defter[is.padisah.id] = { file: dosyaAdi, version: is.surum, duration: sure }
    uretilen += 1
    process.stdout.write(`\r   ✓  ${etiket} — ${(veri.length / 1024).toFixed(0)} KB${sure ? `, ${sure.toFixed(0)} sn` : ''}          \n`)
  } catch (hata) {
    process.stdout.write(`\r   ✗  ${etiket} — HATA: ${hata.message}          \n`)
    process.exitCode = 1
  }
}

if (temizle && !denemeModu) {
  const dosyalar = await readdir(hedefKlasor)
  for (const dosya of dosyalar) {
    if (!dosya.endsWith('.mp3') || uretilenDosyalar.has(dosya)) continue
    await unlink(path.join(hedefKlasor, dosya))
    console.log(`   🗑  ${dosya} — artık kullanılmıyor, silindi`)
  }
}

if (denemeModu) {
  console.log(`\n  Deneme bitti. ${uretilen} kayıt üretildi.`)
  console.log(`  Dinlemek için: ${hedefKlasor}/`)
  console.log('  Beğendiğin servisi seçtikten sonra --dene olmadan çalıştır.\n')
} else {
  await defteriYaz(defter, hedefId)
  console.log(`\n  Bitti. ${uretilen} yeni ses üretildi, ${atlanan} padişah zaten hazırdı.`)
  console.log(`  Dosyalar: ${hedefKlasor}/`)
  console.log(`  Defter güncellendi: ${DEFTER_YOLU}\n`)
}

/* ================================================================== */

/**
 * Mevcut defteri okur, üretilen kayıtları yazar, dokunulmayanları korur.
 * Tek padişah üretildiğinde diğer 35'inin kaydı silinmemelidir.
 */
async function defteriYaz(yeniKayitlar, tekHedef) {
  let onceki = {}
  try {
    const modul = await import(`../${DEFTER_YOLU}?t=${Date.now()}`)
    onceki = { ...(modul.PADISAH_SES_DEFTERI ?? {}) }
  } catch {
    onceki = {}
  }

  if (!tekHedef) {
    for (const anahtar of Object.keys(onceki)) {
      if (!yeniKayitlar[anahtar]) delete onceki[anahtar]
    }
  }

  const birlesik = { ...onceki, ...yeniKayitlar }
  const satirlar = Object.keys(birlesik).sort().map((anahtar) => {
    const kayit = birlesik[anahtar]
    const sure = Number.isFinite(kayit.duration) ? Number(kayit.duration.toFixed(1)) : null
    return `  '${anahtar}': { file: '${kayit.file}', version: '${kayit.version}', duration: ${sure} },`
  })

  const mevcut = await readFile(DEFTER_YOLU, 'utf8')
  const yorum = mevcut.slice(0, mevcut.indexOf('export const PADISAH_SES_KOKU'))

  await writeFile(DEFTER_YOLU, `${yorum}export const PADISAH_SES_KOKU = '/lesson-assets/narration/padisahlar'

export const PADISAH_SES_DEFTERI = {
${satirlar.join('\n')}
}

export default PADISAH_SES_DEFTERI
`)
}
