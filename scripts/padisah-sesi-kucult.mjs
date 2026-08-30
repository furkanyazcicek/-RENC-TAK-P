/**
 * PADİŞAH SESLERİNİ KÜÇÜLT
 * ------------------------------------------------------------------
 *     node scripts/padisah-sesi-kucult.mjs            keşif modu kayıtları
 *     node scripts/padisah-sesi-kucult.mjs belgesel   belgesel modu kayıtları
 *
 * NEDEN GEREKLİ
 * Ses servisi kayıtları 128 kbps üretiyor. Bu, müzik için makul ama
 * tek kişilik anlatım için fazla: dosyalar iki katı yer kaplıyor.
 * Öğrencilerin çoğu siteye telefondan ve mobil veriyle giriyor;
 * her padişahta 2 MB yerine 1 MB indirmek doğrudan onların lehine.
 *
 * NE YAPAR
 * Klasördeki mp3'leri 64 kbps tek kanal AAC'ye çevirir, defteri yeni
 * dosya adlarıyla günceller ve eski dosyaları siler. Ses yeniden
 * ÜRETİLMEZ — servise tek bir istek gitmez, kredi harcanmaz.
 *
 * SÜRELER
 * Yeniden hesaplanmaz; sıkıştırma süreyi değiştirmez ve defterdeki
 * değerler zaten gerçek kayıttan ölçülmüştür.
 *
 * NOT: `afconvert` macOS ile birlikte gelir. Başka bir işletim
 * sisteminde çalıştırılırsa betik hiçbir şey yapmadan çıkar.
 */
import { execFile } from 'node:child_process'
import { existsSync } from 'node:fs'
import { readdir, readFile, unlink, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { promisify } from 'node:util'

const calistir = promisify(execFile)
/**
 * İki mod iki ayrı klasör ve deftere yazar; araç ikisine de hizmet
 * eder. Argüman verilmezse keşif modu varsayılır.
 */
const HEDEFLER = {
  kesif: {
    klasor: 'public/lesson-assets/narration/padisahlar',
    defter: 'src/data/padisahlar/sesDefteri.js',
    disaAktarim: 'PADISAH_SES_DEFTERI',
    kokSatiri: "export const PADISAH_SES_KOKU = '/lesson-assets/narration/padisahlar'",
  },
  belgesel: {
    klasor: 'public/lesson-assets/narration/belgesel',
    defter: 'src/data/padisahlar/belgeselSesDefteri.js',
    disaAktarim: 'BELGESEL_SES_DEFTERI',
    kokSatiri: "export const BELGESEL_SES_KOKU = '/lesson-assets/narration/belgesel'",
  },
}

const secim = process.argv[2] === 'belgesel' ? 'belgesel' : 'kesif'
const HEDEF = HEDEFLER[secim]
const KLASOR = HEDEF.klasor
const DEFTER_YOLU = HEDEF.defter
const BITRATE = 64000
console.log(`\n  Hedef: ${secim} modu · ${KLASOR}`)

try {
  await calistir('which', ['afconvert'])
} catch {
  console.log('\n  afconvert bulunamadı (yalnızca macOS). Hiçbir şey yapılmadı.\n')
  process.exit(0)
}

const defterModulu = await import(`../${DEFTER_YOLU}?t=${Date.now()}`)
const defter = { ...(defterModulu[HEDEF.disaAktarim] ?? {}) }

const dosyalar = (await readdir(KLASOR)).filter((ad) => ad.endsWith('.mp3'))
if (!dosyalar.length) {
  console.log('\n  Küçültülecek mp3 bulunamadı.\n')
  process.exit(0)
}

let oncekiToplam = 0
let sonrakiToplam = 0
let sayac = 0

for (const [padisahId, kayit] of Object.entries(defter)) {
  if (!kayit.file?.endsWith('.mp3')) continue
  const kaynak = path.join(KLASOR, kayit.file)
  if (!existsSync(kaynak)) {
    console.log(`   ⚠  ${padisahId} — dosya bulunamadı, atlandı`)
    continue
  }
  const hedefAd = kayit.file.replace(/\.mp3$/, '.m4a')
  const hedef = path.join(KLASOR, hedefAd)

  const oncekiBoyut = (await readFile(kaynak)).length
  await calistir('afconvert', ['-f', 'mp4f', '-d', 'aac', '-b', String(BITRATE), '-c', '1', kaynak, hedef])
  const sonrakiBoyut = (await readFile(hedef)).length

  await unlink(kaynak)
  defter[padisahId] = { ...kayit, file: hedefAd }

  oncekiToplam += oncekiBoyut
  sonrakiToplam += sonrakiBoyut
  sayac += 1
  console.log(`   ✓  ${padisahId.padEnd(24)} ${(oncekiBoyut / 1048576).toFixed(2)} → ${(sonrakiBoyut / 1048576).toFixed(2)} MB`)
}

await defteriYaz(defter)

console.log(`\n  ${sayac} kayıt küçültüldü.`)
console.log(`  Toplam: ${(oncekiToplam / 1048576).toFixed(1)} MB → ${(sonrakiToplam / 1048576).toFixed(1)} MB` +
  ` (%${Math.round((1 - sonrakiToplam / oncekiToplam) * 100)} tasarruf)`)
console.log('  Ses yeniden üretilmedi; kredi harcanmadı.\n')

async function defteriYaz(kayitlar) {
  const satirlar = Object.keys(kayitlar).sort().map((anahtar) => {
    const kayit = kayitlar[anahtar]
    const sure = Number.isFinite(kayit.duration) ? Number(kayit.duration.toFixed(1)) : null
    return `  '${anahtar}': { file: '${kayit.file}', version: '${kayit.version}', duration: ${sure} },`
  })
  const mevcut = await readFile(DEFTER_YOLU, 'utf8')
  const yorum = mevcut.slice(0, mevcut.indexOf(HEDEF.kokSatiri.split(' =')[0]))
  await writeFile(DEFTER_YOLU, `${yorum}${HEDEF.kokSatiri}

export const ${HEDEF.disaAktarim} = {
${satirlar.join('\n')}
}

export default ${HEDEF.disaAktarim}
`)
}
