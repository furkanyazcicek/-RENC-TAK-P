/**
 * Tarih Atlası ham veri indirme betiği.
 *
 * Açık lisanslı dünya anlık görüntülerini indirir. Bu dosyalar toplam ~31 MB
 * olduğu için yedeğe alınmaz; gerektiğinde bu betikle yeniden indirilir.
 *
 * Kaynak: github.com/aourednik/historical-basemaps (GPL-3.0)
 * Çalıştırma: npm run atlas:indir
 */

import { mkdir, writeFile, access } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const hedefKlasor = resolve(kok, 'src/data/tarihAtlasi/ham')
const KAYNAK = 'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson'

const YILLAR = [1000, 1100, 1200, 1279, 1300, 1400, 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1880, 1900, 1914, 1920, 1930, 1938, 1945]

await mkdir(hedefKlasor, { recursive: true })

let indirilen = 0
let atlanan = 0

for (const yil of YILLAR) {
  const hedef = resolve(hedefKlasor, `world_${yil}.geojson`)

  try {
    await access(hedef)
    atlanan += 1
    continue
  } catch {
    // Dosya yok, indirilecek
  }

  const yanit = await fetch(`${KAYNAK}/world_${yil}.geojson`)
  if (!yanit.ok) {
    console.error(`${yil} indirilemedi: HTTP ${yanit.status}`)
    continue
  }

  const icerik = await yanit.text()
  await writeFile(hedef, icerik)
  indirilen += 1
  console.log(`${yil} indirildi (${Math.round(icerik.length / 1024)} KB)`)
}

console.log(`\n${indirilen} dosya indirildi, ${atlanan} dosya zaten mevcuttu.`)
if (indirilen) console.log('Sıradaki adım: npm run atlas:uret')
