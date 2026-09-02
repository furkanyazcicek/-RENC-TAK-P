/**
 * APPLE PENCIL EL YAZISI KURALLARININ TESTİ
 *
 *   npm run test:ink
 *
 * Kopuk el yazısının üç sebebi vardı ve üçü de burada kilitleniyor:
 *   1. Düşük basınçlı nokta atılırsa çizginin başı/sonu kaybolur
 *   2. Kalem kalktığı noktanın eklenmemesi harflerin bitişini kırpar
 *   3. Geciken/tekrar eden ağ paketi çizgiyi kendi üstüne katlar
 *
 * Gerçek cihaz gerekmez: kurallar saf fonksiyon olarak ayrıldı.
 */
import {
  DEFAULT_PRESSURE,
  PEN_MIN_VISUAL_PRESSURE,
  applyRemotePoints,
  isStaleRemoteStroke,
  normalizePressure,
  shouldAcceptSample,
  shouldAppendLiftPoint,
  smoothPressure,
  strokeReport,
  boostFaintStroke,
} from '../src/lib/liveLesson/board/inkStroke.js'
import { drawInkStroke } from '../src/lib/liveLesson/board/freehandInk.js'

let pass = 0
let fail = 0
function check(name, cond, extra = '') {
  if (cond) {
    pass++
    console.log(`  ✓ ${name}`)
  } else {
    fail++
    console.log(`  ✗ ${name} ${extra}`)
  }
}

console.log('\n=== 1) BASINÇ: düşük değer noktayı ASLA düşürmez ===')
{
  const bas = normalizePressure(0, { pointerType: 'pen', previous: null })
  check('çizgi başındaki 0 basınç geçerli bir değere düşüyor', bas > 0, `bas=${bas}`)
  check('görsel alt sınıra çekiliyor', bas === PEN_MIN_VISUAL_PRESSURE, `bas=${bas}`)

  const son = normalizePressure(0, { pointerType: 'pen', previous: 0.62 })
  check('çizgi sonundaki 0 basınç son geçerli değeri koruyor', son === 0.62, `son=${son}`)

  check('gerçek basınç olduğu gibi geçiyor', normalizePressure(0.43, { pointerType: 'pen' }) === 0.43)
  check(
    'pozitif ama görünmez basınç alt sınıra çekiliyor',
    normalizePressure(0.01, { pointerType: 'pen' }) === PEN_MIN_VISUAL_PRESSURE
  )
  check('1 üstü basınç kırpılıyor', normalizePressure(3, { pointerType: 'pen' }) === 1)
  check('fare için orta değer', normalizePressure(0, { pointerType: 'mouse' }) === DEFAULT_PRESSURE)
  check('parmak için orta değer', normalizePressure(0, { pointerType: 'touch' }) === DEFAULT_PRESSURE)
  check('basınç kapalıyken sabit değer', normalizePressure(0.9, { pointerType: 'pen', enabled: false }) === DEFAULT_PRESSURE)
  check('geçersiz (NaN) basınç çökmüyor', normalizePressure(NaN, { pointerType: 'pen' }) === PEN_MIN_VISUAL_PRESSURE)
}

console.log('\n=== 2) BASINÇ YUMUŞATMA: hızlı yazıyı geciktirmiyor ===')
{
  check('ilk örnek olduğu gibi', smoothPressure(null, 0.7) === 0.7)
  const bir = smoothPressure(0.2, 1.0)
  check('tek adımda yeni değere doğru belirgin hareket', bir > 0.4, `bir=${bir}`)
  let p = 0.2
  for (let i = 0; i < 6; i++) p = smoothPressure(p, 1.0)
  check('6 örnekte neredeyse yeni değere ulaşıyor (gecikme yok)', p > 0.85, `p=${p.toFixed(3)}`)
}

console.log('\n=== 3) ÖRNEK ELEME: yalnız gerçekten gereksizi eler ===')
{
  check('boş çizgide ilk nokta her zaman kabul', shouldAcceptSample([], 5, 5, 1.1))
  const p = [10, 10, 0.5]
  check('aynı yerdeki tekrar eleniyor', shouldAcceptSample(p, 10, 10, 1.1) === false)
  check('eşiğin altındaki mikro hareket eleniyor', shouldAcceptSample(p, 10.5, 10, 1.1) === false)
  check('eşiği aşan hareket kabul', shouldAcceptSample(p, 12, 10, 1.1) === true)
}

console.log('\n=== 4) KALEM KALKIŞ NOKTASI: harflerin bitişi kırpılmıyor ===')
{
  check('nokta yoksa kalkış noktası eklenir', shouldAppendLiftPoint([], 3, 4))
  const p = [10, 10, 0.5]
  check('kalkış son örnekten farklıysa eklenir', shouldAppendLiftPoint(p, 14, 10) === true)
  check('kalkış son örnekle AYNIYSA eklenmez', shouldAppendLiftPoint(p, 10, 10) === false)
  check(
    'yarım piksellik fark bile eklenir (uçlar kırpılmaz)',
    shouldAppendLiftPoint(p, 10.4, 10) === true
  )
}

console.log('\n=== 5) TEK DOKUNUŞ ve KISA ÇİZGİ ===')
{
  // Nokta: yalnız pointerdown + pointerup, hiç hareket yok
  const nokta = { id: 'n1', p: [] }
  nokta.p.push(100, 100, normalizePressure(0, { pointerType: 'pen' }))
  check('tek dokunuş 1 nokta üretiyor', nokta.p.length / 3 === 1)
  check('tek dokunuşun basıncı geçerli', nokta.p[2] > 0)

  // "i" üstündeki nokta: kalkış aynı yerde → ikinci nokta eklenmez
  check('aynı yere kalkış çizgiyi bozmaz', shouldAppendLiftPoint(nokta.p, 100, 100) === false)

  // İki noktalı kısa çizgi
  const kisa = { id: 'k1', p: [10, 10, 0.4] }
  if (shouldAppendLiftPoint(kisa.p, 13, 11)) kisa.p.push(13, 11, 0.4)
  check('iki noktalı kısa çizgi korunuyor', kisa.p.length / 3 === 2)
}

console.log('\n=== 5b) BASINÇSIZ İZ GÖRÜNÜR KALINLIĞA ÇEKİLİR ===')
{
  const sadeNokta = { p: [10, 10, PEN_MIN_VISUAL_PRESSURE] }
  check('cihaz hiç basınç vermediyse nokta normal kalınlıkta', boostFaintStroke(sadeNokta) === true && sadeNokta.p[2] === DEFAULT_PRESSURE)

  const gercek = { p: [0, 0, PEN_MIN_VISUAL_PRESSURE, 1, 1, 0.7] }
  check('gerçek basınç ölçülen çizgiye DOKUNULMUYOR', boostFaintStroke(gercek) === false && gercek.p[5] === 0.7)
  check('gerçek çizginin ince başlangıcı korunuyor', gercek.p[2] === PEN_MIN_VISUAL_PRESSURE)

  const kisaSilik = { p: [0, 0, PEN_MIN_VISUAL_PRESSURE, 3, 3, PEN_MIN_VISUAL_PRESSURE] }
  check('iki noktalı silik çizgi de görünür oluyor', boostFaintStroke(kisaSilik) === true && kisaSilik.p[5] === DEFAULT_PRESSURE)
  check('boş çizgi güvenle atlanıyor', boostFaintStroke({ p: [] }) === false)
}

console.log('\n=== 6) AĞ PAKETLERİ: sıra, tekrar ve boşluk ===')
{
  const item = { id: 's1', p: [] }
  let r = applyRemotePoints(item, 0, [1, 1, 0.5, 2, 2, 0.5])
  check('ilk paket uygulanıyor', r.applied && item.p.length === 6, JSON.stringify(r))

  r = applyRemotePoints(item, 6, [3, 3, 0.5])
  check('sıradaki paket ekleniyor', r.applied && r.reason === 'sirali' && item.p.length === 9)

  r = applyRemotePoints(item, 0, [1, 1, 0.5, 2, 2, 0.5])
  check('TEKRAR eden paket yok sayılıyor (çizgi katlanmıyor)', r.applied === false && r.reason === 'tekrar' && item.p.length === 9)

  r = applyRemotePoints(item, 3, [9, 9, 0.5])
  check('geç gelen ESKİ paket yok sayılıyor', r.applied === false && item.p.length === 9)

  r = applyRemotePoints(item, 15, [4, 4, 0.5])
  check('arada paket kaybolduysa eldeki YİNE DE ekleniyor', r.applied === true && r.reason === 'bosluk' && item.p.length === 12)

  check('boş paket güvenle yok sayılıyor', applyRemotePoints(item, 12, []).applied === false)
  check('çizgi yoksa çökmüyor', applyRemotePoints(null, 0, [1, 1, 1]).applied === false)
}

console.log('\n=== 7) HAYALET ÇİZGİ TEMİZLİĞİ ===')
{
  const taze = { seenAt: 1000 }
  check('taze çizgi silinmiyor', isStaleRemoteStroke(taze, 3000, 8000) === false)
  check('süresi dolan çizgi temizleniyor', isStaleRemoteStroke(taze, 12000, 8000) === true)
  check('hiç görülmemiş çizgi temizleniyor', isStaleRemoteStroke({}, 9000, 8000) === true)
}

console.log('\n=== 8) TEŞHİS RAPORU ===')
{
  const s = { id: 'x', p: [0, 0, 0.06, 1, 1, 0.8, 2, 2, 0.4] }
  const rapor = strokeReport(s, { pointerId: 3 })
  check('nokta sayısı doğru', rapor.noktaSayisi === 3, JSON.stringify(rapor))
  check('ilk/son basınç doğru', rapor.ilkBasinc === 0.06 && rapor.sonBasinc === 0.4)
  check('en düşük/en yüksek basınç doğru', rapor.enDusukBasinc === 0.06 && rapor.enYuksekBasinc === 0.8)
  check('ek alanlar korunuyor', rapor.pointerId === 3)
}

console.log('\n=== 9) GERÇEK EL YAZISI SENARYOSU ===')
{
  // "i" harfi: gövde (kısa dikey çizgi) + üstündeki nokta.
  // İki AYRI çizgi olmalı, birbirine bağlanmamalı.
  const govde = { id: 'i-govde', p: [] }
  let onceki = null
  for (const [x, y, ham] of [[50, 60, 0], [50, 55, 0.3], [50, 48, 0.55], [50, 42, 0.2]]) {
    const bas = normalizePressure(ham, { pointerType: 'pen', previous: onceki })
    onceki = bas
    if (shouldAcceptSample(govde.p, x, y, 1.1)) govde.p.push(x, y, bas)
  }
  if (shouldAppendLiftPoint(govde.p, 50, 40)) govde.p.push(50, 40, onceki)

  const ustNokta = { id: 'i-nokta', p: [] }
  ustNokta.p.push(50, 30, normalizePressure(0, { pointerType: 'pen' }))

  check('gövde bütün noktaları koruyor', govde.p.length / 3 === 5, `n=${govde.p.length / 3}`)
  check('gövdenin İLK noktası düşük basınçla da duruyor', govde.p[2] > 0)
  check('gövdenin SON noktası kalkış konumunda', govde.p[govde.p.length - 3] === 50 && govde.p[govde.p.length - 2] === 40)
  check('üstteki nokta ayrı bir çizgi', ustNokta.id !== govde.id && ustNokta.p.length / 3 === 1)
  check('iki çizgi birbirine bağlanmıyor', govde.p.at(-2) !== ustNokta.p[1])
}

console.log('\n=== 10) MERKEZ YOL MOTORU: HAM NOKTALAR KAYBOLMAZ ===')
{
  const calls = []
  const ctx = {
    save: () => calls.push(['save']),
    restore: () => calls.push(['restore']),
    beginPath: () => calls.push(['begin']),
    moveTo: (x, y) => calls.push(['move', x, y]),
    quadraticCurveTo: (...args) => calls.push(['quad', ...args]),
    lineTo: (x, y) => calls.push(['line', x, y]),
    arc: (...args) => calls.push(['arc', ...args]),
    fill: () => calls.push(['fill']),
    stroke: () => calls.push(['stroke']),
  }
  const hizli = {
    t: 'pen',
    c: '#131329',
    w: 4,
    p: [0, 0, 0.24, 5, 8, 0.24, 10, 3, 0.24, 15, 12, 0.24, 20, 4, 0.24],
  }
  drawInkStroke(ctx, hizli, true)
  check('hızlı çizgi tek Canvas vuruşuyla çiziliyor', calls.filter((c) => c[0] === 'stroke').length === 1)
  check('ilk ham nokta yolun başlangıcı', calls.some((c) => c[0] === 'move' && c[1] === 0 && c[2] === 0))
  check('son ham nokta yolun sonu', calls.some((c) => c[0] === 'line' && c[1] === 20 && c[2] === 4))
  check('ara noktalar yumuşak yola katılıyor', calls.filter((c) => c[0] === 'quad').length === 3)

  calls.length = 0
  drawInkStroke(ctx, { t: 'pen', c: '#131329', w: 4, p: [30, 40, 0.24] }, true)
  check('i noktası dolu daire olarak çiziliyor', calls.some((c) => c[0] === 'arc') && calls.some((c) => c[0] === 'fill'))
}

console.log(`\n=== SONUÇ: ${pass} geçti, ${fail} kaldı ===\n`)
process.exit(fail === 0 ? 0 : 1)
