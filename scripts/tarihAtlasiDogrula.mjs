/**
 * Tarih Atlası v3 görsel doğrulama betiği.
 *
 * Seçili yılların gerçekten kullandığı tembel dönem paketlerini ve yerel
 * dünya altlığını SVG panolara çizer. Böylece dünya kapsamı, kaynak yılı
 * farkı ve eski dikdörtgen kırpmanın geri dönmediği tarayıcıdan bağımsız
 * olarak da denetlenebilir.
 *
 * Çalıştırma: node scripts/tarihAtlasiDogrula.mjs 1282 1453 1526 1683 1923
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEVLETSIZ_KARA, TON_RENKLERI } from '../src/lib/tarihAtlasi/haritaSunumu.js'
import { kaynakDonemiBul } from '../src/lib/tarihAtlasi/veriModeli.js'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const manifest = JSON.parse(await readFile(resolve(kok, 'public/atlas/v3/manifest.json'), 'utf8'))
const kara = JSON.parse(await readFile(resolve(kok, 'public/atlas/v3/base/land-50m.json'), 'utf8'))

const argumanlar = process.argv.slice(2)
const alanArg = argumanlar.find((a) => a.startsWith('--alan='))
const yillar = argumanlar.filter((a) => !a.startsWith('--')).map(Number).filter(Number.isFinite)
const SECILI = yillar.length ? yillar : [1282, 1453, 1526, 1683, 1923]
const [BATI, GUNEY, DOGU, KUZEY] = alanArg
  ? alanArg.slice(7).split(',').map(Number)
  : [-180, -60, 180, 85]

const GENISLIK = 920
const YUKSEKLIK = Math.round(GENISLIK / ((DOGU - BATI) / (KUZEY - GUNEY)))

function izdusum([lng, lat]) {
  return [
    Math.round((((lng - BATI) / (DOGU - BATI)) * GENISLIK) * 10) / 10,
    Math.round((((KUZEY - lat) / (KUZEY - GUNEY)) * YUKSEKLIK) * 10) / 10,
  ]
}

function halkaYolu(halka) {
  return halka.map((nokta, sira) => `${sira ? 'L' : 'M'}${izdusum(nokta).join(' ')}`).join('') + 'Z'
}

function geometriYolu(geometri) {
  const poligonlar = geometri.type === 'Polygon' ? [geometri.coordinates] : geometri.coordinates
  return poligonlar.map((poligon) => poligon.map(halkaYolu).join('')).join('')
}

const karaYolu = (kara.features || [kara]).map((ozellik) => geometriYolu(ozellik.geometry)).join('')
const panolar = []

for (const yil of SECILI) {
  const donem = kaynakDonemiBul(manifest, yil)
  if (!donem) throw new Error(`${yil} için kaynak dönemi bulunamadı.`)
  const siyasi = JSON.parse(await readFile(resolve(kok, `public${donem.politicalUrl}`), 'utf8'))
  const sirali = [...siyasi.features].sort((a, b) => a.properties.onem - b.properties.onem)
  const yollar = sirali.map((ozellik) => {
    const oz = ozellik.properties
    const renk = TON_RENKLERI[oz.ton] || TON_RENKLERI.diger
    const saydamlik = oz.onem >= 2 ? 0.86 : oz.onem === 1 ? 0.64 : 0.45
    const kesik = oz.kesinlikSinifi === 'uncertain' ? '2 1.5' : 'none'
    return `<path d="${geometriYolu(ozellik.geometry)}" fill="${renk}" fill-opacity="${saydamlik}" stroke="#201d17" stroke-width=".32" stroke-dasharray="${kesik}"/>`
  }).join('\n')
  const etiketler = sirali.filter((ozellik) => ozellik.properties.onem >= 2).map((ozellik) => {
    const [x, y] = izdusum([ozellik.properties.etiketX, ozellik.properties.etiketY])
    if (x < 0 || x > GENISLIK || y < 0 || y > YUKSEKLIK) return ''
    return `<text x="${x}" y="${y}" text-anchor="middle" font-size="6.8" font-family="system-ui,sans-serif" fill="#17140d" stroke="#f4efe0" stroke-width="1.8" paint-order="stroke">${ozellik.properties.ad}</text>`
  }).join('\n')
  const fark = yil - donem.sourceYear
  panolar.push(`<section>
    <h2>${yil} <small>kaynak ${donem.sourceYear}${fark ? ` · ${fark > 0 ? '+' : ''}${fark} yıl · kaynak anlık görüntüsü` : ''} · ${siyasi.features.length} yapı</small></h2>
    <svg viewBox="0 0 ${GENISLIK} ${YUKSEKLIK}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${yil} dünya siyasi haritası">
      <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="#b8dadd"/>
      <path d="${karaYolu}" fill="${DEVLETSIZ_KARA}" fill-rule="evenodd"/>
      ${yollar}
      ${etiketler}
    </svg>
  </section>`)
}

const html = `<!doctype html>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Tarih Atlası v3 — veri doğrulama</title>
<style>
  body{margin:0;padding:24px;background:#151a19;color:#edf1ee;font:15px/1.5 ui-sans-serif,system-ui,sans-serif}
  main{max-width:980px;margin:auto} h1{font-size:21px;margin:0 0 4px} p{margin:0 0 24px;color:#aeb9b5}
  section{margin:0 0 30px} h2{font-size:15px;margin:0 0 8px;font-weight:650} h2 small{font-weight:400;color:#9facaa;margin-left:8px}
  svg{width:100%;height:auto;display:block;border-radius:10px;border:1px solid #34403d;background:#b8dadd}
</style>
<main><h1>Tarih Atlası v3 — dünya kapsamı doğrulaması</h1>
<p>Her pano uygulamanın seçili yılda tembel yüklediği gerçek dönem paketinden üretildi. Tarih ile kaynak yılı farkı başlıkta açıkça gösterilir.</p>
${panolar.join('\n')}</main>`

const cikisKlasoru = resolve(kok, 'tmp')
await mkdir(cikisKlasoru, { recursive: true })
const cikis = resolve(cikisKlasoru, 'tarih-atlasi-dogrulama.html')
await writeFile(cikis, html)
console.log('Doğrulama sayfası yazıldı:', cikis)
SECILI.forEach((yil) => {
  const donem = kaynakDonemiBul(manifest, yil)
  console.log(`  ${yil}: kaynak ${donem.sourceYear}, paket ${donem.politicalUrl}`)
})
