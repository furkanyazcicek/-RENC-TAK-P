/**
 * Tarih Atlası görsel doğrulama betiği.
 *
 * Üretilen dönem verisini seçilen yıllar için SVG haritaya çizer.
 * Amaç: sınırların şeklinin bozulup bozulmadığını, zaman süzgecinin
 * doğru çalışıp çalışmadığını gözle görmek.
 *
 * Çalıştırma: node scripts/tarihAtlasiDogrula.mjs 1100 1530 1700 1920
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { TON_RENKLERI } from '../src/data/tarihAtlasi/devletSozlugu.js'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const veri = JSON.parse(await readFile(resolve(kok, 'src/data/tarihAtlasi/donemler.json'), 'utf8'))

const yillar = process.argv.slice(2).map(Number).filter(Boolean)
const SECILI = yillar.length ? yillar : [1100, 1530, 1700, 1920]

// Gösterim alanı: Avrupa + Ortadoğu + Kuzey Afrika
const [BATI, GUNEY, DOGU, KUZEY] = [-13, 12, 60, 56]
const GENISLIK = 620
const YUKSEKLIK = 400

/** Basit eşdikdörtgen izdüşüm — atlas önizlemesi için yeterli. */
function izdusum([lng, lat]) {
  const x = ((lng - BATI) / (DOGU - BATI)) * GENISLIK
  const y = ((KUZEY - lat) / (KUZEY - GUNEY)) * YUKSEKLIK
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

function halkaYolu(halka) {
  return halka.map((n, i) => (i === 0 ? 'M' : 'L') + izdusum(n).join(' ')).join('') + 'Z'
}

function geometriYolu(geometri) {
  const poligonlar = geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
  return poligonlar.map((p) => p.map(halkaYolu).join('')).join('')
}

/** Zaman süzgeci — uygulamadaki kuralın aynısı. */
function yildaGecerliMi(ozellik, yil) {
  const { baslangic, bitis } = ozellik.properties
  return baslangic <= yil && yil < bitis
}

const panolar = SECILI.map((yil) => {
  const gecerli = veri.features.filter((f) => yildaGecerliMi(f, yil))
  const siralı = [...gecerli].sort((a, b) => a.properties.onem - b.properties.onem)

  const yollar = siralı.map((f) => {
    const { ton, onem } = f.properties
    const renk = TON_RENKLERI[ton] || TON_RENKLERI.diger
    const saydamlik = onem >= 2 ? 0.85 : onem === 1 ? 0.6 : 0.38
    return `<path d="${geometriYolu(f.geometry)}" fill="${renk}" fill-opacity="${saydamlik}" stroke="#2a2419" stroke-width=".4" stroke-opacity=".55"/>`
  }).join('\n')

  // Yalnızca müfredatın merkezindeki devletler etiketlenir
  const etiketler = siralı.filter((f) => f.properties.onem === 3).map((f) => {
    const [x, y] = izdusum([f.properties.etiketX, f.properties.etiketY])
    if (x < 0 || x > GENISLIK || y < 0 || y > YUKSEKLIK) return ''
    return `<text x="${x}" y="${y}" text-anchor="middle" font-size="8.5" font-family="system-ui,sans-serif" fill="#1a1509" stroke="#f2ecdc" stroke-width="2.4" paint-order="stroke" >${f.properties.ad}</text>`
  }).join('\n')

  return `
  <section>
    <h2>${yil} <small>${gecerli.length} devlet</small></h2>
    <svg viewBox="0 0 ${GENISLIK} ${YUKSEKLIK}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="#cfd9d6"/>
      ${yollar}
      ${etiketler}
    </svg>
  </section>`
}).join('\n')

const html = `<!doctype html>
<meta charset="utf-8">
<title>Tarih Atlası — veri doğrulama</title>
<style>
  body{margin:0;padding:24px;background:#1b211f;color:#e8ece9;font:15px/1.5 system-ui,sans-serif}
  h1{font-size:20px;margin:0 0 4px}
  p.alt{margin:0 0 24px;color:#93a19c;font-size:13px}
  section{margin:0 0 28px}
  h2{font-size:15px;margin:0 0 8px;font-weight:600}
  h2 small{font-weight:400;color:#93a19c;margin-left:8px}
  svg{width:100%;max-width:920px;height:auto;display:block;border-radius:8px;border:1px solid #2f3a37}
</style>
<h1>Tarih Atlası — veri doğrulama</h1>
<p class="alt">Üretilen dönem verisi, uygulamadaki zaman süzgecinin aynısıyla filtrelenip çizildi. Etiketler yalnızca müfredatın merkezindeki devletlere konuldu.</p>
${panolar}
`

const cikis = resolve(kok, 'tmp/tarih-atlasi-dogrulama.html')
await writeFile(cikis, html)
console.log('Doğrulama sayfası yazıldı:', cikis)
SECILI.forEach((yil) => {
  const sayi = veri.features.filter((f) => yildaGecerliMi(f, yil)).length
  console.log(`  ${yil}: ${sayi} devlet çizildi`)
})
