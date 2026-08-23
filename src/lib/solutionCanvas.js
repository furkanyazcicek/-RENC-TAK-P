/**
 * Dr. Koç — Dijital Kalem Çözümü / Çizim Motoru
 * ------------------------------------------------------------------
 * Öğretmenin soru görselinin üzerine tabletle çizdiği çözümün veri
 * modeli, çizim ve dışa aktarma işleri burada. React'ten tamamen
 * bağımsızdır: SolveBoard bileşeni yalnızca bu fonksiyonları çağırır.
 *
 * TEMEL KARAR — "board" koordinat uzayı
 * --------------------------------------
 * Her nokta, soru görselinin KENDİ piksel uzayında saklanır; ekran
 * pikselinde değil. Öğretmen 4x yakınlaştırıp yazsa da, telefonundan
 * baksa da aynı sayılar üretilir. Zoom yalnızca bir görüntüleme
 * dönüşümüdür (scale + öteleme), veriye hiç karışmaz. Requirement:
 * "Zoom yaptığında çizim koordinatlarının soru görseliyle doğru
 * şekilde eşleştiğinden emin ol."
 *
 * Tahta, soru görselinden DAHA UZUNDUR: görsel en üste oturur, altında
 * boş çalışma alanı kalır. Öğretmen hem sorunun üzerine hem de altına
 * çözüm yazabilsin diye (GoodNotes'ta yaptığı şey bu). Dışa aktarırken
 * kullanılmayan boşluk kırpılır, öğrenciye bomboş bir alan gitmez.
 *
 * KALEM KALINLIĞI — bilerek EKRAN biriminde seçilir, board birimine
 * `/scale` ile çevrilir. Öğretmen dar bir yere 3x yakınlaştırıp yazınca
 * kalem elinde hep aynı kalınlıkta hissedilir, ama board'a ince bir iz
 * bırakır; uzaklaşınca o çözüm küçük ve ince görünür — yani gerçekten
 * küçük yazı yazmış olur. Sabit board kalınlığı kullansaydık yakınlaşıp
 * yazılan her şey tıknaz görünürdü.
 */

export const SCHEMA_VERSION = 1

/* ------------------------------------------------------------------ */
/*  Araç paleti                                                        */
/* ------------------------------------------------------------------ */

export const PEN_COLORS = [
  { key: 'siyah', label: 'Siyah', value: '#131329' },
  { key: 'kirmizi', label: 'Kırmızı', value: '#E11D48' },
  { key: 'mavi', label: 'Mavi', value: '#2563EB' },
  { key: 'yesil', label: 'Yeşil', value: '#059669' },
]

export const HIGHLIGHT_COLORS = [
  { key: 'sari', label: 'Sarı', value: '#FACC15' },
  { key: 'yesil', label: 'Yeşil', value: '#4ADE80' },
  { key: 'mavi', label: 'Mavi', value: '#60A5FA' },
  { key: 'pembe', label: 'Pembe', value: '#F472B6' },
]

/** Kalınlıklar ekran pikseli cinsindendir (yukarıdaki nota bakın). */
export const WIDTHS = [
  { key: 'ince', label: 'İnce', pen: 2, highlight: 16, eraser: 16 },
  { key: 'orta', label: 'Orta', pen: 3.5, highlight: 24, eraser: 28 },
  { key: 'kalin', label: 'Kalın', pen: 6, highlight: 36, eraser: 48 },
]

/**
 * Fosforlu kalem `multiply` yerine düz saydamlıkla çizilir. Sebebi:
 * devam eden çizgi ayrı bir canvas'ta (görselin olmadığı bir katmanda)
 * yaşıyor; multiply orada görselle karışamayacağı için çizgi elden
 * bırakıldığı an rengi "zıplardı". Saydamlık iki katmanda da aynı
 * görünür.
 */
export const HIGHLIGHT_ALPHA = 0.42

export const MIN_SCALE = 0.08
export const MAX_SCALE = 8

const BLANK_BOARD = { w: 1400, h: 1980 }
const EXPORT_MAX_EDGE = 2400
const EXPORT_PADDING = 32

/* ------------------------------------------------------------------ */
/*  Tahta                                                              */
/* ------------------------------------------------------------------ */

/**
 * Soru görselinden tahta üretir. Görsel yoksa (yalnızca metinle
 * gönderilmiş soru) boş bir defter sayfası döner.
 */
export function createBoard(img) {
  if (!img?.naturalWidth || !img?.naturalHeight) {
    return { w: BLANK_BOARD.w, h: BLANK_BOARD.h, imgW: 0, imgH: 0 }
  }
  const imgW = img.naturalWidth
  const imgH = img.naturalHeight
  // Ek çalışma alanı: uzun-dar bir fotoğrafta da, geniş bir ekran
  // görüntüsünde de yazmaya değer bir boşluk kalsın diye iki ölçünün
  // büyüğü alınır.
  const workspace = Math.round(Math.max(imgH * 0.85, imgW * 0.6))
  return { w: imgW, h: imgH + workspace, imgW, imgH }
}

/* ------------------------------------------------------------------ */
/*  Stroke modeli                                                      */
/* ------------------------------------------------------------------ */

/**
 * Bir çizgi:  { t: 'pen' | 'hl', c: renk, w: board kalınlığı,
 *               p: [x, y, basınç, x, y, basınç, …] }
 *
 * Noktalar düz bir sayı dizisinde tutulur; {x,y,p} nesneleri JSON'da
 * üç kat yer kaplıyordu ve bu veri her otomatik kayıtta ağa gidiyor.
 */
export function createStroke(tool, color, boardWidth) {
  return { t: tool === 'hl' ? 'hl' : 'pen', c: color, w: boardWidth, p: [] }
}

export function pushPoint(stroke, x, y, pressure) {
  stroke.p.push(round1(x), round1(y), round2(pressure))
}

export function pointCount(stroke) {
  return stroke.p.length / 3
}

/**
 * Elden bırakılan çizgiyi seyreltir: birbirine çok yakın noktalar
 * çizimde hiçbir şey değiştirmez ama kayıt boyutunu şişirir. Eşik
 * board biriminde verilir (yakınlaştırılmışken küçülür).
 */
export function simplifyStroke(stroke, tolerance) {
  const p = stroke.p
  const n = p.length / 3
  if (n < 3) return stroke

  const out = [p[0], p[1], p[2]]
  let lx = p[0]
  let ly = p[1]
  const tol2 = tolerance * tolerance

  for (let i = 1; i < n - 1; i++) {
    const x = p[i * 3]
    const y = p[i * 3 + 1]
    const dx = x - lx
    const dy = y - ly
    if (dx * dx + dy * dy < tol2) continue
    out.push(x, y, p[i * 3 + 2])
    lx = x
    ly = y
  }
  // Son nokta her zaman korunur; yoksa çizgi elden bırakıldığı yerde
  // değil, bir önceki örnekte biter.
  out.push(p[(n - 1) * 3], p[(n - 1) * 3 + 1], p[(n - 1) * 3 + 2])
  stroke.p = out
  return stroke
}

/* ------------------------------------------------------------------ */
/*  Çizim                                                              */
/* ------------------------------------------------------------------ */

function widthAt(stroke, i) {
  if (stroke.t === 'hl') return stroke.w
  const pr = stroke.p[i * 3 + 2]
  // Basıncı olmayan girdilerde (fare, parmak) 0.5 yazılır; katsayılar
  // 0.5'te tam olarak seçilen kalınlığı verecek şekilde ayarlandı.
  const p = pr > 0 ? pr : 0.5
  return Math.max(stroke.w * 0.35, stroke.w * (0.55 + 0.9 * p))
}

/**
 * Bir çizgiyi board koordinatlarında çizer. `ctx` çağrılmadan önce
 * board→ekran dönüşümünü almış olmalıdır.
 */
export function drawStroke(ctx, stroke) {
  const p = stroke.p
  const n = p.length / 3
  if (n === 0) return

  ctx.save()
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.strokeStyle = stroke.c

  // Tek dokunuş → nokta.
  if (n === 1) {
    ctx.globalAlpha = stroke.t === 'hl' ? HIGHLIGHT_ALPHA : 1
    ctx.fillStyle = stroke.c
    ctx.beginPath()
    ctx.arc(p[0], p[1], widthAt(stroke, 0) / 2, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
    return
  }

  if (stroke.t === 'hl') {
    // Fosforlu TEK yol olarak çizilir: parça parça çizilseydi çizginin
    // kendi üzerine bindiği yerlerde saydamlık üst üste binip koyu
    // lekeler oluştururdu.
    ctx.globalAlpha = HIGHLIGHT_ALPHA
    ctx.lineWidth = stroke.w
    ctx.beginPath()
    traceSmoothPath(ctx, p, n)
    ctx.stroke()
    ctx.restore()
    return
  }

  // Kalem: her parça kendi kalınlığıyla çizilir, böylece basınç izlenir.
  // Yuvarlak uçlar parçaların eklerini görünmez kılar.
  let px = p[0]
  let py = p[1]
  for (let i = 1; i < n - 1; i++) {
    const cx = p[i * 3]
    const cy = p[i * 3 + 1]
    const mx = (cx + p[(i + 1) * 3]) / 2
    const my = (cy + p[(i + 1) * 3 + 1]) / 2
    ctx.lineWidth = widthAt(stroke, i)
    ctx.beginPath()
    ctx.moveTo(px, py)
    ctx.quadraticCurveTo(cx, cy, mx, my)
    ctx.stroke()
    px = mx
    py = my
  }
  ctx.lineWidth = widthAt(stroke, n - 1)
  ctx.beginPath()
  ctx.moveTo(px, py)
  ctx.lineTo(p[(n - 1) * 3], p[(n - 1) * 3 + 1])
  ctx.stroke()
  ctx.restore()
}

/** Orta-nokta yumuşatması: köşeli örneklemeyi akıcı bir eğriye çevirir. */
function traceSmoothPath(ctx, p, n) {
  ctx.moveTo(p[0], p[1])
  for (let i = 1; i < n - 1; i++) {
    const cx = p[i * 3]
    const cy = p[i * 3 + 1]
    ctx.quadraticCurveTo(cx, cy, (cx + p[(i + 1) * 3]) / 2, (cy + p[(i + 1) * 3 + 1]) / 2)
  }
  ctx.lineTo(p[(n - 1) * 3], p[(n - 1) * 3 + 1])
}

/**
 * Sayfayı çizer: beyaz zemin + soru görseli. `ruled` verilirse çalışma
 * alanına soluk çizgiler eklenir — yalnızca ekranda; dışa aktarılan
 * görselde defter çizgisi olmaz.
 */
export function drawPage(ctx, board, img, { ruled = false } = {}) {
  ctx.save()
  ctx.fillStyle = '#FFFFFF'
  ctx.fillRect(0, 0, board.w, board.h)

  if (img && board.imgW) {
    ctx.drawImage(img, 0, 0, board.imgW, board.imgH)
  }

  if (ruled) {
    const top = board.imgH || 0
    ctx.strokeStyle = 'rgba(19, 19, 41, 0.055)'
    ctx.lineWidth = Math.max(1, board.w / 900)
    ctx.beginPath()
    const step = Math.max(48, board.w / 22)
    for (let y = top + step; y < board.h; y += step) {
      ctx.moveTo(0, y)
      ctx.lineTo(board.w, y)
    }
    ctx.stroke()

    // Sorunun bittiği yeri belli eden ince ayraç.
    if (board.imgH) {
      ctx.strokeStyle = 'rgba(19, 19, 41, 0.14)'
      ctx.beginPath()
      ctx.moveTo(0, top)
      ctx.lineTo(board.w, top)
      ctx.stroke()
    }
  }
  ctx.restore()
}

/* ------------------------------------------------------------------ */
/*  Silgi — çizgi bazlı                                                */
/* ------------------------------------------------------------------ */

function segmentDistance(ax, ay, bx, by, px, py) {
  const dx = bx - ax
  const dy = by - ay
  const len2 = dx * dx + dy * dy
  if (len2 === 0) return Math.hypot(px - ax, py - ay)
  let t = ((px - ax) * dx + (py - ay) * dy) / len2
  t = t < 0 ? 0 : t > 1 ? 1 : t
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy))
}

/**
 * Silgi dairesi çizgiye değiyor mu? Piksel silgisi yerine ÇİZGİ silgisi
 * kullanıyoruz: veri vektör kalır, geri alma temiz çalışır ve öğretmen
 * yanlış çizgiyi tek dokunuşta götürür.
 */
export function strokeHitsCircle(stroke, cx, cy, radius) {
  const p = stroke.p
  const n = p.length / 3
  const r = radius + stroke.w / 2
  if (n === 0) return false
  if (n === 1) return Math.hypot(p[0] - cx, p[1] - cy) <= r
  for (let i = 1; i < n; i++) {
    if (segmentDistance(p[(i - 1) * 3], p[(i - 1) * 3 + 1], p[i * 3], p[i * 3 + 1], cx, cy) <= r) {
      return true
    }
  }
  return false
}

/* ------------------------------------------------------------------ */
/*  Kayıt biçimi                                                       */
/* ------------------------------------------------------------------ */

export function serialize(board, strokes) {
  return {
    v: SCHEMA_VERSION,
    board: { w: board.w, h: board.h, imgW: board.imgW, imgH: board.imgH },
    strokes,
  }
}

/**
 * Kayıttan çizgileri geri okur. Kayıt sırasındaki tahta ile şimdiki
 * tahta farklıysa (ör. soru görseli yokken çizilmiş, sonradan görsel
 * eklenmiş) çizgiler orantılı ölçeklenir — çözüm sorunun yanından
 * kaymasın.
 */
export function deserialize(payload, board) {
  const strokes = Array.isArray(payload?.strokes) ? payload.strokes : []
  const saved = payload?.board
  const clean = strokes.filter((s) => Array.isArray(s?.p) && s.p.length >= 3)

  if (!saved?.w || !board?.w || Math.abs(saved.w - board.w) < 0.5) return clean

  const k = board.w / saved.w
  return clean.map((s) => {
    const p = new Array(s.p.length)
    for (let i = 0; i < s.p.length; i += 3) {
      p[i] = round1(s.p[i] * k)
      p[i + 1] = round1(s.p[i + 1] * k)
      p[i + 2] = s.p[i + 2]
    }
    return { ...s, w: s.w * k, p }
  })
}

/* ------------------------------------------------------------------ */
/*  Dışa aktarma                                                       */
/* ------------------------------------------------------------------ */

/**
 * Öğrenciye gidecek görselin sınırları: soru görseli + çizimlerin
 * kapladığı alan + biraz pay. Kullanılmayan çalışma alanı kırpılır,
 * yoksa öğrenci yarısı bomboş bir görsel görürdü.
 */
export function contentBounds(board, strokes) {
  // Önce yalnızca ÇİZİMLERİN kapladığı alan, etrafında biraz payla.
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const s of strokes) {
    const pad = s.w * (s.t === 'hl' ? 0.5 : 0.75) + EXPORT_PADDING
    for (let i = 0; i < s.p.length; i += 3) {
      const x = s.p[i]
      const y = s.p[i + 1]
      if (x - pad < minX) minX = x - pad
      if (y - pad < minY) minY = y - pad
      if (x + pad > maxX) maxX = x + pad
      if (y + pad > maxY) maxY = y + pad
    }
  }

  // Soru görselinin kendisi PAYSIZ eklenir: kenarı zaten doğal sınırdır,
  // pay eklersek öğrenciye sorunun altında sebepsiz beyaz bir şerit gider.
  if (board.imgW) {
    minX = Math.min(minX, 0)
    minY = Math.min(minY, 0)
    maxX = Math.max(maxX, board.imgW)
    maxY = Math.max(maxY, board.imgH)
  }

  if (!Number.isFinite(minX) || maxX <= minX || maxY <= minY) {
    return { x: 0, y: 0, w: board.w, h: Math.min(board.h, board.imgH || board.h) }
  }

  const x = Math.max(0, minX)
  const y = Math.max(0, minY)
  return {
    x,
    y,
    w: Math.min(board.w, maxX) - x,
    h: Math.min(board.h, maxY) - y,
  }
}

/**
 * Soru görseli + çizimleri tek bir canvas'a düzleştirir. Orijinal soru
 * görseli hiç değişmez; bu yalnızca öğrenciye gönderilecek çıktıdır.
 */
export function renderFlattened(board, strokes, img) {
  const box = contentBounds(board, strokes)
  const scale = Math.min(1, EXPORT_MAX_EDGE / Math.max(box.w, box.h))

  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(box.w * scale))
  canvas.height = Math.max(1, Math.round(box.h * scale))

  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingQuality = 'high'
  ctx.setTransform(scale, 0, 0, scale, -box.x * scale, -box.y * scale)
  drawPage(ctx, board, img)
  for (const s of strokes) drawStroke(ctx, s)
  return canvas
}

let exportType = null

/**
 * WebP hem fotoğrafı hem de ince kalem izlerini iyi sıkıştırır ama her
 * tarayıcı ÜRETEMEZ (yalnızca gösterir). Bir pikselle deneyip
 * desteklenmiyorsa JPEG'e düşüyoruz — PNG, telefonla çekilmiş bir soru
 * fotoğrafında birkaç MB'a çıkıyor.
 */
function pickExportType() {
  if (exportType) return exportType
  try {
    const probe = document.createElement('canvas')
    probe.width = 1
    probe.height = 1
    exportType = probe.toDataURL('image/webp').startsWith('data:image/webp')
      ? 'image/webp'
      : 'image/jpeg'
  } catch {
    exportType = 'image/jpeg'
  }
  return exportType
}

export function canvasToBlob(canvas) {
  const type = pickExportType()
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve({ blob, ext: type === 'image/webp' ? 'webp' : 'jpg' }) : reject(new Error('Görsel oluşturulamadı.'))),
      type,
      type === 'image/webp' ? 0.95 : 0.92
    )
  })
}

/* ------------------------------------------------------------------ */

function round1(n) {
  return Math.round(n * 10) / 10
}

function round2(n) {
  return Math.round(n * 100) / 100
}
