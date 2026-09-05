import { PAGE_WIDTH as W, PAGE_HEIGHT as H, clamp, smoothstep, coverTurn, leafTurn, pageCurve, projectPoint } from './bookModel'

const INK = '#202b3a'
const MUTED = '#687074'
const PAPER = '#f3eee4'
const PURPLE = '#6445b3'
const TEAL = '#467c79'
const SANS = '"Inter", Arial, sans-serif'
const SERIF = 'Georgia, serif'
const TW = 850
const TH = 1175

function line(ctx, x1, y1, x2, y2, color = '#cdc8bc', width = 1) {
  ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.strokeStyle = color; ctx.lineWidth = width; ctx.stroke()
}
function text(ctx, value, x, y, size = 24, color = INK, family = SANS, weight = 400) {
  ctx.fillStyle = color; ctx.font = `${weight} ${size}px ${family}`; ctx.fillText(value, x, y)
}
function multiline(ctx, value, x, y, size, color = INK, family = SANS, leading = 1.5) {
  value.split('\n').forEach((part, i) => text(ctx, part, x, y + i * size * leading, size, color, family))
}
function wrappedText(ctx, value, x, y, maxWidth, size, color = INK, family = SANS, weight = 400, leading = 1.5) {
  ctx.font = `${weight} ${size}px ${family}`
  const lines = []
  let current = ''
  value.split(/\s+/).forEach((word) => {
    const candidate = current ? `${current} ${word}` : word
    if (current && ctx.measureText(candidate).width > maxWidth) {
      lines.push(current)
      current = word
    } else current = candidate
  })
  if (current) lines.push(current)
  lines.forEach((lineText, index) => text(ctx, lineText, x, y + index * size * leading, size, color, family, weight))
  return y + Math.max(0, lines.length - 1) * size * leading
}
function makeCanvas() {
  const canvas = document.createElement('canvas'); canvas.width = TW; canvas.height = TH
  const ctx = canvas.getContext('2d')
  ctx.imageSmoothingQuality = 'high'
  return [canvas, ctx]
}
function paper(ctx) {
  ctx.fillStyle = PAPER; ctx.fillRect(0, 0, TW, TH)
  // Seeded paper fibres are generated once, never on each animation frame.
  let seed = 14893
  for (let i = 0; i < 13000; i += 1) {
    seed = (seed * 16807) % 2147483647; const x = seed % TW
    seed = (seed * 16807) % 2147483647; const y = seed % TH
    ctx.fillStyle = i % 3 ? 'rgba(112,94,64,.035)' : 'rgba(255,255,255,.15)'
    ctx.fillRect(x, y, 1.2 + (i % 3), 0.6)
  }
  const wash = ctx.createLinearGradient(0, 0, TW, 0)
  wash.addColorStop(0, 'rgba(66,51,28,.11)'); wash.addColorStop(0.09, 'rgba(66,51,28,0)'); wash.addColorStop(0.9, 'rgba(255,255,255,.08)'); wash.addColorStop(1, 'rgba(66,51,28,.06)')
  ctx.fillStyle = wash; ctx.fillRect(0, 0, TW, TH)
}

function trajectory(ctx) {
  text(ctx, 'Eğik atış hareketi', 86, 470, 26, INK, SANS, 500)
  const x = 100, y = 755, width = 635, height = 210
  for (let i = 0; i < 5; i += 1) line(ctx, x, y - i * 55, x + width, y - i * 55, '#dedad0')
  line(ctx, x, y, x, y - height - 20, '#969890'); line(ctx, x - 12, y, x + width + 15, y, '#969890')
  ctx.beginPath()
  for (let i = 0; i <= 60; i += 1) {
    const u = i / 60; const py = y - 4 * height * u * (1 - u)
    if (i === 0) ctx.moveTo(x, py); else ctx.lineTo(x + u * width, py)
  }
  ctx.strokeStyle = PURPLE; ctx.lineWidth = 3; ctx.stroke()
  for (let i = 0; i <= 12; i += 1) {
    const u = i / 12; ctx.beginPath(); ctx.arc(x + u * width, y - 4 * height * u * (1 - u), 5, 0, Math.PI * 2)
    ctx.fillStyle = i > 6 ? PURPLE : TEAL; ctx.fill()
  }
  ctx.setLineDash([5, 6]); line(ctx, x + width / 2, y, x + width / 2, y - height, '#9c9a92'); ctx.setLineDash([])
  text(ctx, 'hₘₐₓ', x + width / 2 + 12, y - 80, 22, MUTED, SERIF)
  text(ctx, '45°', 105, 815, 30, INK, SERIF); text(ctx, 'Atış açısı', 185, 814, 21, MUTED)
  text(ctx, '20 m/s', 460, 815, 30, INK, SERIF); text(ctx, 'İlk hız', 605, 814, 21, MUTED)
  line(ctx, 86, 855, 764, 855)
  text(ctx, 'Aynı ilk hız, farklı açı. Nasıl değişir?', 86, 902, 23, MUTED)
  // A small water molecule echoes the reference without competing with the plot.
  line(ctx, 380, 996, 343, 1033, '#aaa59b', 7); line(ctx, 380, 996, 433, 1021, '#aaa59b', 7)
  ;[[380, 996, 23, '#b87971'], [343, 1033, 14, '#d5d3cb'], [433, 1021, 14, '#d5d3cb']].forEach(([cx, cy, r, color]) => {
    const g = ctx.createRadialGradient(cx - r / 3, cy - r / 3, 2, cx, cy, r)
    g.addColorStop(0, '#f5ebe2'); g.addColorStop(0.35, color); g.addColorStop(1, '#77756d')
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill()
  })
  text(ctx, 'H₂O', 484, 1025, 24, MUTED, SERIF)
}

function leaf(ctx) {
  text(ctx, 'Fotosentez', 86, 470, 26, INK, SANS, 500)
  ctx.save(); ctx.translate(420, 665)
  ctx.beginPath(); ctx.moveTo(0, 175); ctx.bezierCurveTo(-165, 82, -141, -70, 15, -145); ctx.bezierCurveTo(136, -8, 116, 94, 0, 175)
  const g = ctx.createLinearGradient(-130, 0, 140, 0); g.addColorStop(0, '#7c9670'); g.addColorStop(0.52, '#bbc69c'); g.addColorStop(1, '#597c58')
  ctx.fillStyle = g; ctx.fill(); ctx.strokeStyle = '#557454'; ctx.lineWidth = 2; ctx.stroke()
  ctx.beginPath(); ctx.moveTo(-10, 208); ctx.quadraticCurveTo(12, 65, 15, -124); ctx.stroke()
  for (let i = 0; i < 5; i += 1) {
    const y = -75 + i * 42
    ctx.beginPath(); ctx.moveTo(9, y + 55); ctx.quadraticCurveTo(-37, y + 27, -65 - i * 3, y - 5); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(9, y + 35); ctx.quadraticCurveTo(49, y + 16, 77, y - 8); ctx.stroke()
  }
  ctx.restore()
  ctx.strokeStyle = '#cfac65'; ctx.lineWidth = 2
  ctx.beginPath(); ctx.arc(239, 556, 22, 0, Math.PI * 2); ctx.stroke()
  for (let i = 0; i < 8; i += 1) { const a = i * Math.PI / 4; line(ctx, 239 + Math.cos(a) * 31, 556 + Math.sin(a) * 31, 239 + Math.cos(a) * 43, 556 + Math.sin(a) * 43, '#cfac65', 2) }
  text(ctx, 'IŞIK', 212, 500, 18, '#9f814e'); line(ctx, 275, 583, 338, 622, '#cfac65', 2)
  text(ctx, 'CO₂ →', 177, 710, 29, MUTED, SERIF); text(ctx, '→ O₂', 582, 677, 29, TEAL, SERIF)
  text(ctx, 'H₂O ↑', 369, 919, 26, TEAL, SERIF)
  line(ctx, 86, 965, 764, 965)
  multiline(ctx, 'Işık enerjisi, organik moleküllerin\nkimyasal bağlarında depolanır.', 86, 1011, 24, MUTED)
}

function solution(ctx) {
  text(ctx, 'Birlikte çözelim', 86, 470, 26, INK, SANS, 500)
  text(ctx, '2x + 5 = 17', 86, 551, 54, INK, SERIF)
  text(ctx, 'denkleminde x kaçtır?', 86, 599, 24, MUTED)
  ;[['01', 'Verileni ayır', '2x = 17 − 5'], ['02', 'Her iki tarafı 2’ye böl', 'x = 12 / 2 = 6'], ['03', 'Sonucu kontrol et', '2 · 6 + 5 = 17  ✓']].forEach(([n, title, answer], i) => {
    const y = 694 + i * 120; line(ctx, 86, y - 32, 764, y - 32)
    text(ctx, n, 86, y + 3, 20, PURPLE); text(ctx, title, 151, y, 23, MUTED)
    text(ctx, answer, 151, y + 46, 34, i === 2 ? TEAL : INK, SERIF)
  })
}

function plan(ctx) {
  text(ctx, 'Bugün için bir başlangıç', 86, 470, 26, INK, SANS, 500)
  text(ctx, 'ÖRNEK ÇALIŞMA ROTASI', 86, 517, 17, MUTED)
  ;[['09:00', 'Fizik · Hareket', '25 dakika  /  atlas keşfi'], ['09:30', 'Matematik · Denklemler', '15 soru  /  yöntem tekrarı'], ['10:00', 'Yanlış defteri', '10 dakika  /  bir hata, bir çıkarım']].forEach(([time, title, description], i) => {
    const y = 609 + i * 132
    line(ctx, 86, y - 30, 764, y - 30)
    text(ctx, time, 86, y + 3, 29, PURPLE, SERIF)
    text(ctx, title, 222, y, 26, INK, SANS, 500); text(ctx, description, 222, y + 42, 21, MUTED)
  })
  line(ctx, 86, 987, 764, 987)
  multiline(ctx, 'Bir sonraki adım, senin çalışma\nkayıtlarınla şekillenir.', 86, 1031, 24, MUTED)
}

function analysis(ctx) {
  text(ctx, 'Gelişimin bir çizgiden fazlası.', 86, 470, 26, INK, SANS, 500)
  text(ctx, 'ÖRNEK DENEME SONUÇLARI', 86, 516, 17, MUTED)
  const values = [56, 62, 59, 70, 74, 72, 81]
  for (let i = 0; i < 5; i += 1) line(ctx, 95, 610 + i * 51, 750, 610 + i * 51, '#d9d4c9')
  const coords = values.map((v, i) => [110 + i * 103, 818 - (v - 50) * 6])
  ctx.beginPath(); coords.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.lineWidth = 3; ctx.strokeStyle = PURPLE; ctx.stroke()
  coords.forEach(([x, y], i) => { ctx.beginPath(); ctx.arc(x, y, 6, 0, 7); ctx.fillStyle = PURPLE; ctx.fill(); text(ctx, `${i + 1}`, x - 5, 856, 19, MUTED) })
  text(ctx, '81 net', 92, 960, 47, INK, SERIF); text(ctx, 'Son örnek deneme', 92, 1002, 22, MUTED)
  text(ctx, '+25 net', 452, 960, 47, TEAL, SERIF); text(ctx, 'İlk örneğe göre fark', 452, 1002, 22, MUTED)
}

function chapterTexture(chapter, index) {
  const [canvas, ctx] = makeCanvas(); paper(ctx)
  text(ctx, 'DRKOÇ', 86, 64, 22, INK, SANS, 600); text(ctx, 'ÖĞRENMENİN SAYFALARI', 434, 64, 15, MUTED)
  line(ctx, 86, 90, 764, 90)
  text(ctx, `0${index + 1}  /  ${chapter.eylem.toLocaleUpperCase('tr-TR')}`, 86, 155, 18, MUTED)
  text(ctx, chapter.ad, 86, 220, 43, INK, SERIF)
  multiline(ctx, chapter.baslik, 86, 285, 37, INK, SERIF, 1.2)
  multiline(ctx, chapter.aciklama, 86, 387, 22, MUTED)
  ;[trajectory, leaf, solution, plan, analysis][index](ctx)
  line(ctx, 86, 1094, 764, 1094)
  text(ctx, chapter.alt, 86, 1128, index === 4 ? 13 : 15, MUTED)
  text(ctx, `0${index + 1}`, 729, 1128, 17, INK)
  return canvas
}

function contentsTexture(chapters, final = false, founderNote = null) {
  const [canvas, ctx] = makeCanvas(); paper(ctx)
  text(ctx, 'DRKOÇ', 86, 70, 24, INK, SANS, 600); line(ctx, 86, 99, 764, 99)
  if (!final && founderNote) {
    text(ctx, founderNote.etiket, 86, 162, 17, PURPLE, SANS, 600)
    multiline(ctx, founderNote.hitap, 86, 232, 43, INK, SERIF, 1.14)

    let bodyY = 365
    founderNote.paragraflar.forEach((paragraph) => {
      bodyY = wrappedText(ctx, paragraph, 86, bodyY, 678, 20, MUTED, SANS, 400, 1.47) + 35
    })

    line(ctx, 86, bodyY - 4, 142, bodyY - 4, PURPLE, 2)
    text(ctx, founderNote.alintiGirisi, 86, bodyY + 31, 17, MUTED, SANS, 500)
    const quoteEnd = wrappedText(ctx, `“${founderNote.alinti}”`, 86, bodyY + 83, 640, 27, INK, SERIF, 400, 1.32)
    text(ctx, `— ${founderNote.alintiSahibi}`, 86, quoteEnd + 38, 15, MUTED, SANS, 500)
    text(ctx, founderNote.imza, 528, 1080, 17, INK, SERIF)
  } else {
    text(ctx, 'SONRAKİ SAYFA SENİN.', 86, 204, 18, MUTED)
    multiline(ctx, 'Merak et,\nkeşfet, öğren.', 86, 300, 60, INK, SERIF, 1.15)
    multiline(ctx, 'Birbirine bağlanan beş deneyim.\nTek bir amaç: gerçekten anlamak.', 86, 478, 24, MUTED)
    chapters.forEach((chapter, index) => {
      const y = 597 + index * 85
      line(ctx, 86, y + 26, 764, y + 26)
      text(ctx, `0${index + 1}`, 86, y, 21, PURPLE)
      text(ctx, chapter.ad, 159, y, 30, INK, SERIF)
      text(ctx, chapter.eylem, 528, y, 19, MUTED)
    })
  }
  text(ctx, 'LGS · TYT · AYT · KPSS · OKUL DERSLERİ', 86, 1120, 18, MUTED)
  return canvas
}

function coverTexture(cloth, copy) {
  const [canvas, ctx] = makeCanvas()
  ctx.fillStyle = '#172438'; ctx.fillRect(0, 0, TW, TH)
  if (cloth) {
    // Fine-grained repeat: this is a material, not a flat picture of a book.
    ctx.drawImage(cloth, 0, 0, TW, TH)
    ctx.fillStyle = 'rgba(15,26,42,.62)'; ctx.fillRect(0, 0, TW, TH)
  }
  const light = ctx.createLinearGradient(0, 0, TW, TH)
  light.addColorStop(0, 'rgba(111,133,162,.23)'); light.addColorStop(0.46, 'rgba(0,0,0,0)'); light.addColorStop(1, 'rgba(0,0,0,.37)')
  ctx.fillStyle = light; ctx.fillRect(0, 0, TW, TH)
  // The embossed wordmark has a dark inset and a fine lower bevel.
  ctx.textAlign = 'center'
  text(ctx, 'DRKOÇ', 458, 345, 91, 'rgba(91,117,149,.66)', SANS, 600)
  text(ctx, 'DRKOÇ', 456, 342, 91, '#080e19', SANS, 600)
  ctx.strokeStyle = 'rgba(116,137,164,.22)'; ctx.lineWidth = 1; ctx.strokeText('DRKOÇ', 456, 342)
  text(ctx, 'ETKİLEŞİMLİ ÖĞRENME', 456, 397, 17, '#8995a8')
  const coverSize = copy.baslik.length > 2 ? 48 : 61
  const coverGap = copy.baslik.length > 2 ? 58 : 72
  const coverStart = copy.baslik.length > 2 ? 523 : 551
  copy.baslik.forEach((part, i) => text(ctx, part, 456, coverStart + i * coverGap, coverSize, '#f2f0e8', SANS, 500))
  const coverRuleY = coverStart + copy.baslik.length * coverGap + 18
  line(ctx, 410, coverRuleY, 502, coverRuleY, 'rgba(190,170,123,.62)', 1)
  text(ctx, 'MERAK ET. DENE. ANLA.', 456, coverRuleY + 58, 18, '#b9b8b3')
  text(ctx, 'LGS · TYT · AYT · KPSS', 456, 1038, 17, '#939eb0')
  ctx.textAlign = 'left'
  const spine = ctx.createLinearGradient(0, 0, 78, 0)
  spine.addColorStop(0, 'rgba(2,5,10,.9)'); spine.addColorStop(0.23, 'rgba(90,110,143,.22)'); spine.addColorStop(0.50, 'rgba(5,10,17,.76)'); spine.addColorStop(0.69, 'rgba(122,145,173,.14)'); spine.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = spine; ctx.fillRect(0, 0, 78, TH)
  ctx.strokeStyle = 'rgba(161,177,195,.2)'; ctx.lineWidth = 2; ctx.strokeRect(4, 3, TW - 8, TH - 6)
  return canvas
}

// Draw a texture triangle to a projected triangle. This keeps type on the
// curved paper itself instead of floating flat above an animated rectangle.
function triangle(ctx, texture, a, b, c, sa, sb, sc) {
  const denominator = sa.x * (sb.y - sc.y) + sb.x * (sc.y - sa.y) + sc.x * (sa.y - sb.y)
  if (!denominator) return
  const coefficient = (p, q, r) => [
    (p * (sb.y - sc.y) + q * (sc.y - sa.y) + r * (sa.y - sb.y)) / denominator,
    (p * (sc.x - sb.x) + q * (sa.x - sc.x) + r * (sb.x - sa.x)) / denominator,
    (p * (sb.x * sc.y - sc.x * sb.y) + q * (sc.x * sa.y - sa.x * sc.y) + r * (sa.x * sb.y - sb.x * sa.y)) / denominator,
  ]
  const mx = coefficient(a.x, b.x, c.x), my = coefficient(a.y, b.y, c.y)
  ctx.save(); ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.lineTo(c.x, c.y); ctx.closePath(); ctx.clip()
  ctx.transform(mx[0], my[0], mx[1], my[1], mx[2], my[2]); ctx.drawImage(texture, 0, 0); ctx.restore()
}

function polygon(ctx, points, fill, stroke) {
  ctx.beginPath(); points.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.closePath()
  if (fill) { ctx.fillStyle = fill; ctx.fill() }
  if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = 0.7; ctx.stroke() }
}

function sheet(ctx, texture, turn, z, rigid = false, outline = true) {
  const curve = pageCurve(turn, rigid ? W + 8 : W, !rigid)
  const height = rigid ? H + 12 : H
  const project = (p, y) => projectPoint(p.x, y, p.z + z)
  const corners = [project(curve[0], -height / 2), project(curve.at(-1), -height / 2), project(curve.at(-1), height / 2), project(curve[0], height / 2)]
  // Soft shadows anchor the lifted leaves to the paper below.
  if (turn > 0.03 && turn < 0.97) {
    ctx.save(); ctx.shadowColor = 'rgba(25,22,18,.22)'; ctx.shadowBlur = 14; ctx.shadowOffsetX = 8; ctx.shadowOffsetY = 18
    polygon(ctx, corners, '#dbd2c0'); ctx.restore()
  }
  for (let i = 0; i < curve.length - 1; i += 1) {
    const a = project(curve[i], -height / 2), b = project(curve[i + 1], -height / 2)
    const c = project(curve[i + 1], height / 2), d = project(curve[i], height / 2)
    let u1 = i / (curve.length - 1) * TW, u2 = (i + 1) / (curve.length - 1) * TW
    if (turn > 0.5) { u1 = TW - u1; u2 = TW - u2 }
    // The underpaint prevents hairline gaps from antialiased triangle clips.
    polygon(ctx, [a, b, c, d], rigid ? '#18253a' : PAPER)
    triangle(ctx, texture, a, b, d, { x: u1, y: 0 }, { x: u2, y: 0 }, { x: u1, y: TH })
    triangle(ctx, texture, b, c, d, { x: u2, y: 0 }, { x: u2, y: TH }, { x: u1, y: TH })
    const tangent = Math.atan2(curve[i + 1].z - curve[i].z, curve[i + 1].x - curve[i].x)
    const shade = rigid ? 0 : 0.035 + Math.sin(tangent) * 0.14 + Math.exp(-i / 2.4) * 0.15
    polygon(ctx, [a, b, c, d], `rgba(47,35,21,${shade})`)
  }
  if (outline) {
    ctx.beginPath(); curve.forEach((p, i) => { const pt = project(p, -height / 2); if (!i) ctx.moveTo(pt.x, pt.y); else ctx.lineTo(pt.x, pt.y) })
    for (let i = curve.length - 1; i >= 0; i -= 1) { const pt = project(curve[i], height / 2); ctx.lineTo(pt.x, pt.y) }
    ctx.closePath(); ctx.lineWidth = rigid ? 1 : 0.55; ctx.strokeStyle = rigid ? '#4a5565' : 'rgba(255,250,237,.75)'; ctx.stroke()
  }
}

function block(ctx, side, opening) {
  if (side < 0 && opening < 0.03) return
  const width = side < 0 ? W * opening : W
  // Individual, irregular page edges rather than one extruded white rectangle.
  for (let i = 0; i < 17; i += 1) {
    const z = -15 + i * 1.34, inset = Math.sin(i * 1.3) * 0.7
    polygon(ctx, [projectPoint(0, -H / 2, z), projectPoint(side * (width - inset), -H / 2, z), projectPoint(side * (width - inset), H / 2, z), projectPoint(0, H / 2, z)], i % 3 ? '#d5cdbd' : '#ebe4d7', i % 2 ? '#b8b0a1' : '#ede5d7')
  }
}

export function createBookRenderer(canvas, copy, cloth) {
  const ctx = canvas.getContext('2d', { alpha: true })
  if (!ctx) return null
  const cover = coverTexture(cloth, copy)
  const contents = contentsTexture(copy.bolumler, false, copy.kurucuNotu)
  const ending = contentsTexture(copy.bolumler, true)
  const chapters = copy.bolumler.map(chapterTexture)

  return {
    draw(progress, width, height, pixelRatio = 1) {
      const dpr = Math.min(pixelRatio, 2)
      if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr)
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, width, height)
      ctx.imageSmoothingQuality = 'high'
      const open = coverTurn(progress)
      const isMobile = width < 640
      const lift = Math.max(...chapters.map((_, i) => Math.sin(leafTurn(progress, i) * Math.PI)))
      const closedScale = Math.min((height - 22) / 500, (width - 64) / 390, 1.42)
      const openScale = isMobile
        ? Math.min((height - 56) / (510 + lift * 125), (width - 46) / 370, 1.15)
        : Math.min((height - 30) / (490 + lift * 120), (width - 100) / 740, 1.35)
      const scale = closedScale + (openScale - closedScale) * smoothstep(progress / 0.24)
      const x = isMobile
        ? (width / 2 - W / 2 * closedScale) * (1 - open) + 25 * open
        : width / 2 - W / 2 * scale * (1 - open)
      const y = height / 2 + 4 + open * lift * 48
      ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale)
      // Table contact shadow moves from a single volume to the open spread.
      ctx.save(); ctx.shadowColor = 'rgba(0,0,0,.76)'; ctx.shadowBlur = 33; ctx.shadowOffsetX = 12; ctx.shadowOffsetY = 25
      polygon(ctx, [projectPoint(-W * open, -H / 2, -20), projectPoint(W + 8, -H / 2, -20), projectPoint(W + 8, H / 2, -20), projectPoint(-W * open, H / 2, -20)], '#080d15'); ctx.restore()
      polygon(ctx, [projectPoint(-W * open - 5, -H / 2 - 8, -19), projectPoint(W + 9, -H / 2 - 8, -19), projectPoint(W + 9, H / 2 + 8, -19), projectPoint(-W * open - 5, H / 2 + 8, -19)], '#172338', '#3b4859')
      block(ctx, -1, open); block(ctx, 1, open)
      // A violet fabric bookmark is an intentional, restrained brand accent.
      if (open > 0.7) polygon(ctx, [projectPoint(230, H / 2, -19), projectPoint(244, H / 2, -19), projectPoint(244, H / 2 + 57, -19), projectPoint(237, H / 2 + 49, -19), projectPoint(230, H / 2 + 57, -19)], '#6f5997')
      if (open > 0.01) sheet(ctx, contents, open, 7, true)
      const leaves = chapters.map((texture, index) => {
        const turn = leafTurn(progress, index)
        return { texture, index, turn, z: 9 + (turn > 0.5 ? index : 5 - index) * 1.15, depth: Math.sin(turn * Math.PI) * 170 + (turn > 0.5 ? index : 5 - index) }
      })
      // Only the visible flat leaf on each side needs to be rasterized.
      const flatRight = leaves.find((leaf) => leaf.turn === 0)
      const flatLeft = leaves.findLast((leaf) => leaf.turn === 1)
      if (open > 0.015) {
        if (!flatRight) sheet(ctx, ending, 0, 8)
        leaves.filter((leaf) => leaf === flatLeft || leaf === flatRight || (leaf.turn > 0 && leaf.turn < 1))
          .sort((a, b) => a.depth - b.depth)
          .forEach((leaf) => sheet(ctx, leaf.texture, leaf.turn, leaf.z))
      }
      if (open < 0.995) sheet(ctx, open < 0.5 ? cover : contents, open, 19, true)
      // A narrow binding shadow joins the two halves into one physical object.
      if (open > 0.85) {
        ctx.save(); ctx.globalAlpha = clamp((open - 0.85) / 0.15)
        const gutter = ctx.createLinearGradient(-12, 0, 15, 0)
        gutter.addColorStop(0, 'rgba(25,20,12,0)'); gutter.addColorStop(0.49, 'rgba(25,20,12,.24)'); gutter.addColorStop(0.6, 'rgba(25,20,12,.15)'); gutter.addColorStop(1, 'rgba(25,20,12,0)')
        ctx.fillStyle = gutter; ctx.fillRect(-12, -H / 2 * 0.95, 27, H * 0.96); ctx.restore()
      }
      ctx.restore()
    },
  }
}
