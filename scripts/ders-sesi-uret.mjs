/**
 * DERS SESİ ÜRETİCİ  —  bir kez üret, sonsuza kadar kullan
 * ==================================================================
 *
 * NE YAPAR
 * Bir dersin anlatım parçalarını (audio_script blokları) tek tek seslendirir,
 * mp3 olarak `public/lesson-assets/narration/<ders>/` altına yazar ve
 * `src/content/lessons/narrationManifest.js` defterini günceller.
 *
 * NEDEN BÖYLE
 * Ses her sayfa açılışında yeniden üretilseydi, aynı cümle için binlerce kez
 * para ödenirdi. Anlatım metni değişmediği sürece ses de değişmez; bu yüzden
 * dosya adına metinden hesaplanan bir SÜRÜM damgası konur. Metin değişirse
 * sürüm değişir, eski kayıt kendiliğinden devre dışı kalır ve yalnızca o
 * parça yeniden üretilir.
 *
 * KULLANIM
 *   node scripts/ders-sesi-uret.mjs --tahmin          → hiç para harcamadan
 *                                                       karakter ve maliyet raporu
 *   node scripts/ders-sesi-uret.mjs                   → eksik sesleri üretir
 *   node scripts/ders-sesi-uret.mjs <ders-slug>       → başka bir ders
 *   node scripts/ders-sesi-uret.mjs --zorla           → hepsini yeniden üretir
 *   node scripts/ders-sesi-uret.mjs --temizle         → artık kullanılmayan
 *                                                       eski mp3'leri siler
 *
 * ANAHTAR
 * `.env.local` içinde TTS_PROVIDER ve ilgili anahtar bulunmalıdır. Anahtar
 * yalnızca burada ve sunucuda okunur; tarayıcıya hiçbir zaman gitmez.
 */

import { existsSync } from 'node:fs'
import { mkdir, readFile, readdir, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { mp3Suresi, ortamDegiskenleriniYukle } from './lib/sesYardimcilari.mjs'

const VARSAYILAN_DERS = 'hucresel-solunum-mitokondri'
const SES_KOKU = 'public/lesson-assets/narration'
const DEFTER_YOLU = 'src/content/lessons/narrationManifest.js'

/* Konuşma hızı yaklaşık 900 karakter/dakika (Türkçe, öğretmen temposu). */
const KARAKTER_PER_DAKIKA = 900
const FIYAT = {
  openai: { birim: 'dakika', usd: 0.015, ad: 'OpenAI gpt-4o-mini-tts' },
  elevenlabs: { birim: 'karakter', usd: 0.00022, ad: 'ElevenLabs multilingual v2' },
}

const argumanlar = process.argv.slice(2)
const bayrak = (ad) => argumanlar.includes(ad)
const dersSlug = argumanlar.find((deger) => !deger.startsWith('--')) || VARSAYILAN_DERS
const sadeceTahmin = bayrak('--tahmin')
const zorla = bayrak('--zorla')
const temizle = bayrak('--temizle')

await ortamDegiskenleriniYukle()

const { lessonBySlug } = await import('../src/content/lessons/index.js')
const { normalizeLessonDocument } = await import('../src/lib/lesson/schema.js')
const { buildNarrationItems, isNarrationEnabled } = await import('../src/lib/lessonNarration.js')
const { createTtsProvider } = await import('../api/_lib/tts/index.js')

const ders = lessonBySlug(dersSlug)
if (!ders) {
  console.error(`\n  "${dersSlug}" adında bir ders bulunamadı.\n`)
  process.exit(1)
}
if (!isNarrationEnabled(dersSlug)) {
  console.error(`\n  "${dersSlug}" için sesli anlatım açık değil.`)
  console.error('  src/lib/lessonNarration.js içindeki NARRATION_PILOT_SLUGS listesine ekleyin.\n')
  process.exit(1)
}

/**
 * Okuyucu belgeyi normalize edilmiş hâliyle görüyor. Sürüm damgasının iki
 * tarafta da aynı çıkması için burada da aynı normalizasyon uygulanır;
 * aksi hâlde üretilen dosya "sürümü tutmuyor" diye hiç kullanılmazdı.
 */
const belge = normalizeLessonDocument(ders.document)
const parcalar = buildNarrationItems(belge, dersSlug)

if (!parcalar.length) {
  console.error(`\n  "${dersSlug}" dersinde anlatım metni (audio_script) bulunamadı.\n`)
  process.exit(1)
}

const toplamKarakter = parcalar.reduce((toplam, parca) => toplam + parca.script.length, 0)
const tahminiDakika = toplamKarakter / KARAKTER_PER_DAKIKA

console.log(`\n  ${ders.title}`)
console.log(`  ${parcalar.length} anlatım parçası · ${toplamKarakter.toLocaleString('tr-TR')} karakter · yaklaşık ${tahminiDakika.toFixed(1)} dakika ses\n`)
parcalar.forEach((parca, sira) => {
  console.log(`   ${String(sira + 1).padStart(2, '0')}  ${parca.label}  (${parca.script.length} karakter)`)
})

console.log('\n  Tek seferlik üretim maliyeti (tahmini):')
for (const [anahtar, fiyat] of Object.entries(FIYAT)) {
  const tutar = fiyat.birim === 'dakika' ? tahminiDakika * fiyat.usd : toplamKarakter * fiyat.usd
  console.log(`   · ${fiyat.ad.padEnd(34)} ~ $${tutar.toFixed(2)}`)
}
console.log('\n  (Bu tutar bir defalıktır. Metin değişmediği sürece ses yeniden üretilmez.)\n')

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

const hedefKlasor = path.join(SES_KOKU, dersSlug)
await mkdir(hedefKlasor, { recursive: true })

const defter = {}
const uretilenDosyalar = new Set()
let uretilen = 0
let atlanan = 0

for (const [sira, parca] of parcalar.entries()) {
  const dosyaAdi = `${parca.id}.${parca.version}.mp3`
  const dosyaYolu = path.join(hedefKlasor, dosyaAdi)
  uretilenDosyalar.add(dosyaAdi)
  const etiket = `${String(sira + 1).padStart(2, '0')}  ${parca.label}`

  if (!zorla && existsSync(dosyaYolu)) {
    const mevcut = await readFile(dosyaYolu)
    defter[`${dersSlug}/${parca.id}`] = { file: dosyaAdi, version: parca.version, duration: mp3Suresi(mevcut) }
    atlanan += 1
    console.log(`   ⏭  ${etiket} — zaten var, atlandı`)
    continue
  }

  process.stdout.write(`   ⏳ ${etiket} — üretiliyor…`)
  try {
    const ses = await saglayici.generateSpeech({
      text: parca.script,
      language: 'tr-TR',
      style: parca.voiceHint,
    })
    const veri = Buffer.from(await ses.arrayBuffer())
    await writeFile(dosyaYolu, veri)
    const sure = mp3Suresi(veri)
    defter[`${dersSlug}/${parca.id}`] = { file: dosyaAdi, version: parca.version, duration: sure }
    uretilen += 1
    process.stdout.write(`\r   ✓  ${etiket} — ${(veri.length / 1024).toFixed(0)} KB${sure ? `, ${sure.toFixed(0)} sn` : ''}          \n`)
  } catch (hata) {
    process.stdout.write(`\r   ✗  ${etiket} — HATA: ${hata.message}          \n`)
    process.exitCode = 1
  }
}

if (temizle) {
  const dosyalar = await readdir(hedefKlasor)
  for (const dosya of dosyalar) {
    if (!dosya.endsWith('.mp3') || uretilenDosyalar.has(dosya)) continue
    await unlink(path.join(hedefKlasor, dosya))
    console.log(`   🗑  ${dosya} — artık kullanılmıyor, silindi`)
  }
}

await defteriYaz(dersSlug, defter)

console.log(`\n  Bitti. ${uretilen} yeni ses üretildi, ${atlanan} parça zaten hazırdı.`)
console.log(`  Dosyalar: ${hedefKlasor}/`)
console.log(`  Defter güncellendi: ${DEFTER_YOLU}\n`)

/* ================================================================== */

/** Mevcut defteri okur, bu dersin kayıtlarını değiştirir, diğerlerini korur. */
async function defteriYaz(slug, yeniKayitlar) {
  let onceki = {}
  try {
    const modul = await import(`../${DEFTER_YOLU}?t=${Date.now()}`)
    onceki = { ...(modul.NARRATION_MANIFEST ?? {}) }
  } catch {
    onceki = {}
  }

  for (const anahtar of Object.keys(onceki)) {
    if (anahtar.startsWith(`${slug}/`)) delete onceki[anahtar]
  }

  const birlesik = { ...onceki, ...yeniKayitlar }
  const siraliAnahtarlar = Object.keys(birlesik).sort()
  const satirlar = siraliAnahtarlar.map((anahtar) => {
    const kayit = birlesik[anahtar]
    const sure = Number.isFinite(kayit.duration) ? Number(kayit.duration.toFixed(1)) : null
    return `  '${anahtar}': { file: '${kayit.file}', version: '${kayit.version}', duration: ${sure} },`
  })

  const baslik = await readFile(DEFTER_YOLU, 'utf8')
  const yorum = baslik.slice(0, baslik.indexOf('export const NARRATION_AUDIO_BASE'))

  const icerik = `${yorum}export const NARRATION_AUDIO_BASE = '/lesson-assets/narration'

export const NARRATION_MANIFEST = {
${satirlar.join('\n')}
}

export default NARRATION_MANIFEST
`
  await writeFile(DEFTER_YOLU, icerik)
}
