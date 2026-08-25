/**
 * BELGESEL MODU SESİ ÜRETİCİ — panel başına kayıt
 * ==================================================================
 *
 * Keşif modunun üreticisinden AYRIDIR (padisah-sesi-uret.mjs). Orada
 * padişah başına tek kayıt üretilir; burada PANEL başına.
 *
 * NEDEN PANEL BAŞINA
 * Belgesel ekranı panel panel ilerler. Tek parça kayıt kullanılsaydı
 * anlatım ile sahne ayrı hızlarda giderdi. Her panelin kendi kaydı
 * olunca panel, kaydı bitince ilerler; senkron tahminle değil sesin
 * kendi uzunluğuyla kurulur.
 *
 * KULLANIM
 *   node scripts/belgesel-sesi-uret.mjs --tahmin        maliyet raporu
 *   node scripts/belgesel-sesi-uret.mjs <padisah-id>    tek padişahın panelleri
 *   node scripts/belgesel-sesi-uret.mjs                 eksik olan her şey
 *   node scripts/belgesel-sesi-uret.mjs --zorla         hepsini yeniden üret
 *   node scripts/belgesel-sesi-uret.mjs --temizle       kullanılmayan kayıtları sil
 *
 * Üretimden sonra `node scripts/belgesel-sesi-kucult.mjs` dosyaları
 * 64 kbps'e indirir.
 */

import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { mp3Suresi, ortamDegiskenleriniYukle } from './lib/sesYardimcilari.mjs'

const SES_KOKU = 'public/lesson-assets/narration/belgesel'
const DEFTER_YOLU = 'src/data/padisahlar/belgeselSesDefteri.js'
const KARAKTER_PER_DAKIKA = 900
const FIYAT = {
  openai: { birim: 'dakika', usd: 0.015, ad: 'OpenAI gpt-4o-mini-tts' },
  elevenlabs: { birim: 'karakter', usd: 0.00022, ad: 'ElevenLabs multilingual v2' },
}
const GECICI_HATA = /fetch failed|ECONNRESET|ETIMEDOUT|ENOTFOUND|EAI_AGAIN|socket hang up|tts_upstream_(429|500|502|503|504)/i
const BEKLEMELER = [2000, 5000, 12000]

const argumanlar = process.argv.slice(2)
const bayrak = (ad) => argumanlar.includes(ad)
const hedefPadisah = argumanlar.find((d) => !d.startsWith('--')) || null
const sadeceTahmin = bayrak('--tahmin')
const zorla = bayrak('--zorla')
const temizle = bayrak('--temizle')

await ortamDegiskenleriniYukle()

const { belgeselAkisi } = await import('../src/data/padisahlar/belgeselAkisi.js')
const { BELGESEL_ANLATIMLARI } = await import('../src/data/padisahlar/belgeselAnlatimlari.js')
const { belgeselSurumu, duraklamaEkle } = await import('../src/lib/padisahAnlatim.js')
const { createTtsProvider } = await import('../api/_lib/tts/index.js')

const paneller = belgeselAkisi()
const isler = paneller
  .filter((panel) => !hedefPadisah || panel.padisahId === hedefPadisah)
  .map((panel) => ({ panel, metin: BELGESEL_ANLATIMLARI[panel.id] }))
  .filter((is) => is.metin?.trim())
  .map((is) => ({ ...is, soylenecek: duraklamaEkle(is.metin.trim()), surum: belgeselSurumu(is.metin) }))

if (!isler.length) {
  console.error('\n  Seslendirilecek panel anlatımı bulunamadı.')
  console.error('  Metinler: src/data/padisahlar/belgeselAnlatimlari.js\n')
  process.exit(1)
}

const yazilmisPanel = paneller.filter((p) => BELGESEL_ANLATIMLARI[p.id]?.trim()).length
const toplamKarakter = isler.reduce((t, is) => t + is.metin.length, 0)
const tahminiDakika = toplamKarakter / KARAKTER_PER_DAKIKA

console.log('\n  Osmanlı Padişahları · BELGESEL modu anlatımı')
console.log(`  ${isler.length} panel · ${toplamKarakter.toLocaleString('tr-TR')} karakter · yaklaşık ${tahminiDakika.toFixed(1)} dakika ses`)
console.log(`  Metni yazılmış panel: ${yazilmisPanel} / ${paneller.length}\n`)

console.log('  Tek seferlik üretim maliyeti (tahmini):')
for (const fiyat of Object.values(FIYAT)) {
  const tutar = fiyat.birim === 'dakika' ? tahminiDakika * fiyat.usd : toplamKarakter * fiyat.usd
  console.log(`   · ${fiyat.ad.padEnd(34)} ~ $${tutar.toFixed(2)}`)
}
console.log('')

if (sadeceTahmin) {
  console.log('  --tahmin verildiği için hiçbir istek gönderilmedi.\n')
  process.exit(0)
}

const saglayici = createTtsProvider({ env: process.env, fetchImpl: globalThis.fetch })
if (!saglayici.available) {
  console.error('  Ses sağlayıcısı yapılandırılmamış. Bkz. SESLENDIRME_KURULUM.md\n')
  process.exit(1)
}

await mkdir(SES_KOKU, { recursive: true })

const defter = {}
const uretilenDosyalar = new Set()
let uretilen = 0
let atlanan = 0

for (const [sira, is] of isler.entries()) {
  const dosyaAdi = `${is.panel.id}.${is.surum}.mp3`
  const dosyaYolu = path.join(SES_KOKU, dosyaAdi)
  uretilenDosyalar.add(dosyaAdi)
  const etiket = `${String(sira + 1).padStart(3, '0')}  ${is.panel.id}`

  if (!zorla && existsSync(dosyaYolu)) {
    defter[is.panel.id] = { file: dosyaAdi, version: is.surum, duration: mp3Suresi(await readFile(dosyaYolu)) }
    atlanan += 1
    continue
  }

  process.stdout.write(`   ⏳ ${etiket}…`)
  try {
    const ses = await tekrarDeneyerek(() => saglayici.generateSpeech({
      text: is.soylenecek,
      language: 'tr-TR',
      persona: 'belgesel',
    }), etiket)
    const veri = Buffer.from(await ses.arrayBuffer())
    await writeFile(dosyaYolu, veri)
    const sure = mp3Suresi(veri)
    defter[is.panel.id] = { file: dosyaAdi, version: is.surum, duration: sure }
    uretilen += 1
    process.stdout.write(`\r   ✓  ${etiket} — ${sure ? `${sure.toFixed(0)} sn` : `${(veri.length / 1024).toFixed(0)} KB`}          \n`)
    await new Promise((coz) => setTimeout(coz, 700))
  } catch (hata) {
    process.stdout.write(`\r   ✗  ${etiket} — HATA: ${hata.message}          \n`)
    process.exitCode = 1
  }
}

if (temizle) {
  for (const dosya of await readdir(SES_KOKU)) {
    if (!dosya.endsWith('.mp3') || uretilenDosyalar.has(dosya)) continue
    await unlink(path.join(SES_KOKU, dosya))
    console.log(`   🗑  ${dosya} — artık kullanılmıyor, silindi`)
  }
}

await defteriYaz(defter, Boolean(hedefPadisah))

console.log(`\n  Bitti. ${uretilen} yeni kayıt üretildi, ${atlanan} panel zaten hazırdı.`)
console.log(`  Dosyalar: ${SES_KOKU}/`)
console.log(`  Defter güncellendi: ${DEFTER_YOLU}\n`)

/* ================================================================== */

async function tekrarDeneyerek(islev, etiket) {
  let sonHata
  for (let deneme = 0; deneme <= BEKLEMELER.length; deneme += 1) {
    try {
      return await islev()
    } catch (hata) {
      sonHata = hata
      const mesaj = `${hata.message} ${hata.cause?.message ?? ''}`
      if (!GECICI_HATA.test(mesaj) || deneme === BEKLEMELER.length) throw hata
      const bekle = BEKLEMELER[deneme]
      process.stdout.write(`\r   ↻  ${etiket} — geçici hata, ${bekle / 1000} sn sonra tekrar…          `)
      await new Promise((coz) => setTimeout(coz, bekle))
    }
  }
  throw sonHata
}

/** Tek padişah üretildiğinde diğerlerinin kayıtları korunur. */
async function defteriYaz(yeniKayitlar, kismi) {
  let onceki = {}
  try {
    const modul = await import(`../${DEFTER_YOLU}?t=${Date.now()}`)
    onceki = { ...(modul.BELGESEL_SES_DEFTERI ?? {}) }
  } catch { onceki = {} }

  if (!kismi) {
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
  const yorum = mevcut.slice(0, mevcut.indexOf('export const BELGESEL_SES_KOKU'))
  await writeFile(DEFTER_YOLU, `${yorum}export const BELGESEL_SES_KOKU = '/lesson-assets/narration/belgesel'

export const BELGESEL_SES_DEFTERI = {
${satirlar.join('\n')}
}

export default BELGESEL_SES_DEFTERI
`)
}
