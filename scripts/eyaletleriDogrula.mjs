/**
 * Eyalet sınırlarını SVG haritaya çizip gözle kontrol ettirir.
 * Çalıştırma: npm run atlas:eyalet-dogrula
 */

import { readFile, writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { DEVLETSIZ_KARA } from '../src/lib/tarihAtlasi/haritaSunumu.js'
import { karaMaskesiHazirla } from './lib/kiyiHizalama.mjs'

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const veri = JSON.parse(await readFile(resolve(kok, 'src/data/tarihAtlasi/eyaletSinirlari.json'), 'utf8'))

const [BATI, GUNEY, DOGU, KUZEY] = [-2, 12, 52, 49]
const enBoy = (DOGU - BATI) / (KUZEY - GUNEY)
const GENISLIK = 1180
const YUKSEKLIK = Math.round(GENISLIK / enBoy)

const kara = karaMaskesiHazirla([BATI, GUNEY, DOGU, KUZEY])

function izdusum([lng, lat]) {
  return [
    Math.round(((lng - BATI) / (DOGU - BATI)) * GENISLIK * 10) / 10,
    Math.round(((KUZEY - lat) / (KUZEY - GUNEY)) * YUKSEKLIK * 10) / 10,
  ]
}

const halkaYolu = (halka) => halka.map((n, i) => (i === 0 ? 'M' : 'L') + izdusum(n).join(' ')).join('') + 'Z'
const geometriYolu = (g) => (g.type === 'Polygon' ? [g.coordinates] : g.coordinates).map((p) => p.map(halkaYolu).join('')).join('')

// Komşu eyaletlerin ayrılabilmesi için dönüşümlü ton
const TONLAR = ['#6f9a72', '#a3a05e', '#8b7fa8', '#a8785e', '#5f8fa0', '#b0925c', '#7f9b86', '#9c7b8e']

const yollar = veri.features.map((f, i) => (
  `<path d="${geometriYolu(f.geometry)}" fill="${TONLAR[i % TONLAR.length]}" fill-opacity=".72" stroke="#3a3226" stroke-width=".8" stroke-opacity=".85"/>`
)).join('\n')

const etiketler = veri.features.map((f) => {
  const [x, y] = izdusum([f.properties.etiketX, f.properties.etiketY])
  if (x < 0 || x > GENISLIK || y < 0 || y > YUKSEKLIK) return ''
  return `<text x="${x}" y="${y}" text-anchor="middle" font-size="10" font-family="system-ui,sans-serif" fill="#1d1a10" stroke="#f2ecdc" stroke-width="2.6" paint-order="stroke">${f.properties.ad}</text>`
}).join('\n')

const karaYolu = kara.map((p) => p.map(halkaYolu).join('')).join('')

const satirlar = veri.features
  .map((f) => `<tr><td>${f.properties.ad}</td><td>${f.properties.merkez}</td><td>${f.properties.kurulus}</td><td>${f.properties.not}</td></tr>`)
  .join('\n')

const html = `<!doctype html>
<meta charset="utf-8">
<title>Osmanlı eyaletleri — kontrol</title>
<style>
  body{margin:0;padding:22px;background:#1b211f;color:#e8ece9;font:15px/1.5 system-ui,sans-serif}
  h1{font-size:20px;margin:0 0 4px}
  p.alt{margin:0 0 18px;color:#93a19c;font-size:13px;max-width:70ch}
  svg{width:100%;height:auto;display:block;border-radius:8px;border:1px solid #2f3a37;margin-bottom:24px}
  table{border-collapse:collapse;width:100%;font-size:13px}
  th,td{text-align:left;padding:7px 10px;border-bottom:1px solid #2f3a37;vertical-align:top}
  th{color:#93a19c;font-size:11px;text-transform:uppercase;letter-spacing:.08em}
  td:nth-child(4){color:#a9b6b1}
</style>
<h1>Osmanlı eyaletleri — ${veri.meta.donem.baslangic} dolayları</h1>
<p class="alt">${veri.meta.uyari}</p>
<svg viewBox="0 0 ${GENISLIK} ${YUKSEKLIK}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${GENISLIK}" height="${YUKSEKLIK}" fill="#b9e4e4"/>
  <path d="${karaYolu}" fill="${DEVLETSIZ_KARA}" fill-rule="evenodd"/>
  ${yollar}
  ${etiketler}
</svg>
<table>
  <thead><tr><th>Eyalet</th><th>Merkez</th><th>Kuruluş</th><th>Müfredat notu</th></tr></thead>
  <tbody>${satirlar}</tbody>
</table>
`

const cikis = resolve(kok, 'tmp/eyalet-kontrolu.html')
await writeFile(cikis, html)
console.log('Eyalet kontrol sayfası yazıldı:', cikis)
console.log(`${veri.features.length} eyalet çizildi`)
