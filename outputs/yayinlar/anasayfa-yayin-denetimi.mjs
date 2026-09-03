import assert from 'node:assert/strict'

const origin = new URL(process.argv[2]).origin
const results = []
async function get(path, type, expectedStatus = 200) {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(45000), redirect: 'follow' })
  assert.equal(response.status, expectedStatus, `${path}: HTTP durumu`)
  assert.ok(response.headers.get('content-type')?.includes(type), `${path}: içerik türü`)
  const body = await response.text()
  results.push(`${path}: ${response.status}`)
  return body
}

const html = await get('/', 'text/html')
assert.ok(html.includes('Dr. Koç'), 'Uygulama başlığı bulunmalı')
const scriptPath = html.match(/src="(\/assets\/index-[^"]+\.js)"/)?.[1]
const cssPath = html.match(/href="(\/assets\/index-[^"]+\.css)"/)?.[1]
assert.ok(scriptPath && cssPath, 'Uygulama dosyaları bulunmalı')
const [script, css] = await Promise.all([get(scriptPath, 'javascript'), get(cssPath, 'text/css')])
assert.ok(!script.includes('[SENSITIVE]'), 'Maskelenmiş ayarlar istemciye taşınmamalı')
// Kitap ana sayfası, ortak önizleme parçasıyla birlikte ayrı yüklenir.
const bookScriptPath = script.match(/assets\/KitapGecisOnizleme-[A-Za-z0-9_-]+\.js/)?.[0]
const bookCssPath = script.match(/assets\/KitapGecisOnizleme-[A-Za-z0-9_-]+\.css/)?.[0]
assert.ok(bookScriptPath && bookCssPath, 'Kitap ana sayfası parçaları bulunmalı')
const [bookScript, bookCss] = await Promise.all([get(`/${bookScriptPath}`, 'javascript'), get(`/${bookCssPath}`, 'text/css')])
for (const marker of ['book-home', 'atlas-cell-model', 'atlas-terrain-study']) assert.ok((css + bookCss).includes(marker), `${marker}: yeni stil bulunmalı`)
for (const name of ['BiyolojiOnizleme', 'CografyaOnizleme', 'FizikOnizleme', 'KimyaOnizleme', 'HistoryMapPreview']) {
  const path = (script + bookScript).match(new RegExp(`(?:assets/)?${name}-[A-Za-z0-9_-]+\\.js`))?.[0]
  assert.ok(path, `${name}: tembel yüklenen deney bulunmalı`)
  const body = await get(path.startsWith('assets/') ? `/${path}` : `/assets/${path}`, 'javascript')
  if (name === 'BiyolojiOnizleme') assert.ok(body.includes('atlas-cell-study') && body.includes('Hücreyi değiştir.'))
  if (name === 'CografyaOnizleme') assert.ok(body.includes('atlas-terrain-study') && body.includes('Havza deneyini sıfırla'))
}
for (const path of ['/login', '/register', '/gizlilik']) await get(path, 'text/html')
for (const path of ['/images/landing/book-cloth-navy.jpg', '/atlas-assets/cografya/imagegen/yer-sekilleri-havza-v2.jpg']) {
  const response = await fetch(new URL(path, origin), { method: 'HEAD', signal: AbortSignal.timeout(20000) })
  assert.equal(response.status, 200)
  assert.ok(response.headers.get('content-type')?.includes('image/jpeg'))
  results.push(`${path}: 200 image/jpeg`)
}
const manifest = JSON.parse(await get('/atlas/v3/manifest.json', 'json'))
assert.ok(Object.keys(manifest).length > 0)
await get('/manifest.webmanifest', 'json')
await get('/sw.js', 'javascript')
await get('/api/ai-coach/chat', 'json', 405)
await get('/api/ai-coach/briefing', 'json', 401)
console.log(JSON.stringify({ adres: origin, durum: 'GEÇTİ', uygulamaDosyasi: scriptPath, kontroller: results }, null, 2))
