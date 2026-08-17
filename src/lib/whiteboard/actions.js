/**
 * Dr. Koç — TAHTA ACTION SÖZLÜĞÜ ve DOĞRULAYICI (§7, §45, §46).
 *
 * ═══════════════════════════════════════════════════════════════════
 * BU DOSYA BİR GÜVENLİK SINIRIDIR
 * ═══════════════════════════════════════════════════════════════════
 * Tahtada gösterilen her şey buradan geçer. Kural şu:
 *
 *   TANIMADIĞIN ŞEYİ GEÇİRME.
 *
 * Bilinmeyen bir action türü, fazladan bir alan ya da yanlış tipte bir
 * değer SESSİZCE DÜŞÜRÜLÜR — "belki işe yarar" diye taşınmaz. Model
 * çıktısı asla ham hâliyle render'a ulaşmaz; her action bilinen alanları
 * bilinen tiplere zorlanmış YENİ bir nesne olarak yeniden inşa edilir.
 *
 * Böylece §46'daki "AI raw HTML üretememeli" şartı bir hatırlatma değil,
 * yapısal bir garanti olur: `content` alanı yalnızca LaTeX veya düz metin
 * olarak işaretlenmiş bir string'dir ve istemcide `dangerouslySetInnerHTML`
 * ile DEĞİL, KaTeX'in kendi güvenli render'ıyla veya React metin düğümü
 * olarak basılır.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN src/lib ALTINDA?
 * ═══════════════════════════════════════════════════════════════════
 * Hem sunucu (çözümü derlerken) hem istemci (kayıtlı oturumu açarken)
 * aynı doğrulamadan geçirmeli. İki ayrı kopya zamanla birbirinden ayrılır
 * ve ayrıldığı gün biri güvenli, diğeri değildir. `api/_lib/context.js`
 * zaten `src/lib/insights.js`'i import ediyor; aynı desen.
 */

/* ==================================================================
   SINIRLAR
   Bir çözümün tahtayı kilitleyememesi için her şeyin tavanı var.
   ================================================================== */

export const LIMITS = {
  maxSteps: 24,
  maxActionsPerStep: 8,
  maxContentChars: 400,
  maxLabelChars: 60,
  maxNarrationChars: 400,
  maxTitleChars: 90,
  maxCurves: 4,
  maxPolylines: 24,
  /** Örneklenmiş bir fonksiyon eğrisi ~160 nokta olabiliyor (plot.js). */
  maxPolylinePoints: 200,
  maxMarkers: 32,
  maxArcs: 12,
  maxLabels: 24,
  maxCircles: 8,
  maxTableRows: 20,
  maxTableCols: 8,
  maxFlowNodes: 12,
  maxFlowEdges: 16,
  maxIntervals: 8,
}

/**
 * Desteklenen action türleri (§7). Kayıt defteri bilinçli olarak
 * derleyicinin BUGÜN ürettiğinden geniş: §7 "genişletilebilir tasarla"
 * diyor ve yeni bir tür eklemek yalnızca buraya bir satır + bir renderer
 * bileşeni demek olmalı.
 */
export const ACTION_TYPES = [
  'write', // matematiksel ifade veya metin yaz
  'text', // düz açıklama metni
  'emphasis', // ifadenin bir parçasını vurgula
  'highlight', // fosforlu kalem etkisi
  'underline', // altını çiz
  'circle', // daire içine al
  'box', // kutu içine al
  'arrow', // ok
  'line', // ayraç çizgisi
  'erase', // önceki içeriği sil (yanlış yolu göstermek için)
  'move', // ifadeyi taşı (terim karşıya atma)
  'graph', // koordinat sistemi / fonksiyon grafiği
  'table', // tablo
  'flow', // akış şeması (DNA → RNA → Protein)
  'numberline', // sayı doğrusu / eşitsizlik aralığı
  'shape', // geometrik şekil
  'image', // görsel (soru görseli kırpması)
  'pause', // bekleme (anlatım ritmi)
]

const ACTION_SET = new Set(ACTION_TYPES)

/* ==================================================================
   İLKEL DOĞRULAYICILAR
   ================================================================== */

/**
 * Görünmez ve sıra dışı boşluk karakterleri: kırılmaz boşluk (NBSP),
 * sıfır genişlikli birleştiriciler, ideografik boşluk, BOM ve NUL.
 * Model çıktısında bunlar geliyor ve KaTeX'te "Unexpected character"
 * hatasına yol açıyorlar.
 *
 * DİKKAT: bunlar NORMAL BOŞLUKLA DEĞİŞTİRİLİR, silinmez. Silmek
 * "x = 6"yı "x=6" yapar; LaTeX'te zararsız görünse de anlatım
 * metinlerinde tüm kelimeleri birbirine yapıştırırdı.
 */
const ODD_SPACE = /[\u0000\u00A0\u1680\u2000-\u200D\u202F\u205F\u3000\uFEFF]/g

function text(value, max) {
  if (typeof value !== 'string') return null
  const clean = value.replace(ODD_SPACE, ' ').replace(/\s+/g, ' ').trim()
  if (!clean) return null
  return clean.slice(0, max)
}

function finite(value) {
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

/** Grafik koordinatları: sonsuz/NaN dışında, çizilebilir bir aralıkta. */
function coord(value) {
  const n = finite(value)
  if (n === null) return null
  // 1e6 üstü koordinatlar SVG'de anlamsız; şekli tamamen bozar.
  return Math.abs(n) > 1e6 ? null : n
}

function list(value, max, mapper) {
  if (!Array.isArray(value)) return []
  const out = []
  for (const item of value) {
    if (out.length >= max) break
    const mapped = mapper(item)
    if (mapped) out.push(mapped)
  }
  return out
}

function oneOf(value, allowed, fallback = null) {
  return allowed.includes(value) ? value : fallback
}

function bool(value) {
  return value === true
}

/* ==================================================================
   ŞEKİL DOĞRULAMASI
   ================================================================== */

const POLYLINE_STYLES = ['duz', 'kesikli', 'ok', 'vektor']
const MARKER_STYLES = ['nokta', 'bos_nokta', 'dik_aci', 'carpi']

function sanitizePoint(item) {
  const x = coord(item?.x)
  const y = coord(item?.y)
  if (x === null || y === null) return null
  return { x, y }
}

/**
 * Modelden gelen ham şekil nesnesini çizilebilir, güvenli bir yapıya
 * çevirir. Tek bir bozuk nokta yüzünden şeklin tamamı atılmaz; yalnızca
 * o eleman düşürülür. Ama hiç geçerli eleman kalmadıysa şekil `null` olur
 * — boş bir koordinat sistemi çizmek öğrenciyi yanıltır.
 */
export function sanitizeFigure(raw) {
  const kind = oneOf(raw?.kind, ['grafik', 'tablo', 'akis', 'sayi_dogrusu'])
  if (!kind) return null

  const caption = text(raw?.caption, LIMITS.maxLabelChars * 2)

  if (kind === 'tablo') {
    const headers = list(raw?.table?.headers, LIMITS.maxTableCols, (h) =>
      text(h, LIMITS.maxLabelChars)
    )
    const rows = list(raw?.table?.rows, LIMITS.maxTableRows, (row) => {
      const cells = list(row?.cells, LIMITS.maxTableCols, (c) =>
        // Boş hücre geçerlidir; `text()` null döndüğü için '—' ile temsil
        // edilir, yoksa sütunlar kayar.
        typeof c === 'string' ? (text(c, LIMITS.maxLabelChars) ?? '—') : null
      )
      return cells.length ? { cells } : null
    })
    if (!headers.length || !rows.length) return null
    return { kind, caption, table: { headers, rows } }
  }

  if (kind === 'akis') {
    const nodes = list(raw?.flow?.nodes, LIMITS.maxFlowNodes, (n) => {
      const id = text(n?.id, 24)
      const label = text(n?.label, LIMITS.maxLabelChars)
      return id && label ? { id, label } : null
    })
    if (!nodes.length) return null

    const ids = new Set(nodes.map((n) => n.id))
    const edges = list(raw?.flow?.edges, LIMITS.maxFlowEdges, (e) => {
      const from = text(e?.from, 24)
      const to = text(e?.to, 24)
      // Var olmayan düğüme giden ok çizilemez.
      if (!from || !to || !ids.has(from) || !ids.has(to)) return null
      return { from, to, label: text(e?.label, LIMITS.maxLabelChars) }
    })
    return { kind, caption, flow: { nodes, edges } }
  }

  if (kind === 'sayi_dogrusu') {
    const src = raw?.number_line
    const min = coord(src?.min)
    const max = coord(src?.max)
    if (min === null || max === null || max <= min) return null

    const points = list(src?.points, LIMITS.maxMarkers, (p) => {
      const value = coord(p?.value)
      if (value === null) return null
      return { value, filled: bool(p?.filled), label: text(p?.label, LIMITS.maxLabelChars) }
    })
    const intervals = list(src?.intervals, LIMITS.maxIntervals, (iv) => {
      const from = coord(iv?.from)
      const to = coord(iv?.to)
      if (from === null || to === null) return null
      return {
        from: Math.min(from, to),
        to: Math.max(from, to),
        closedStart: bool(iv?.closed_start),
        closedEnd: bool(iv?.closed_end),
        label: text(iv?.label, LIMITS.maxLabelChars),
      }
    })
    if (!points.length && !intervals.length) return null
    return { kind, caption, numberLine: { min, max, points, intervals } }
  }

  /* ---------- grafik ---------- */

  const curves = list(raw?.curves, LIMITS.maxCurves, (c) => {
    const expr = text(c?.expr, 200)
    if (!expr) return null
    // LaTeX kalıntısı çizdirilemez; sessizce yanlış eğri çizmektense atmak
    // doğru (verify.js aynı kararı veriyor).
    if (/\\[a-zA-Z]+|\$/.test(expr)) return null
    return { expr, label: text(c?.label, LIMITS.maxLabelChars) }
  })

  const polylines = list(raw?.polylines, LIMITS.maxPolylines, (p) => {
    const points = list(p?.points, LIMITS.maxPolylinePoints, sanitizePoint)
    if (points.length < 2) return null
    return {
      points,
      closed: bool(p?.closed),
      style: oneOf(p?.style, POLYLINE_STYLES, 'duz'),
      label: text(p?.label, LIMITS.maxLabelChars),
      // Sunucuda örneklenmiş bir fonksiyon eğrisi mi, yoksa elle verilmiş
      // bir doğru parçası mı (bkz. api/_lib/solve/plot.js). Renderer
      // eğriyi daha ince çizer ve köşe noktalarını işaretlemez.
      curve: bool(p?.curve),
    }
  })

  const circles = list(raw?.circles, LIMITS.maxCircles, (c) => {
    const cx = coord(c?.cx)
    const cy = coord(c?.cy)
    const r = coord(c?.r)
    if (cx === null || cy === null || r === null || r <= 0) return null
    return { cx, cy, r, label: text(c?.label, LIMITS.maxLabelChars) }
  })

  const markers = list(raw?.markers, LIMITS.maxMarkers, (m) => {
    const point = sanitizePoint(m)
    if (!point) return null
    return {
      ...point,
      style: oneOf(m?.style, MARKER_STYLES, 'nokta'),
      label: text(m?.label, LIMITS.maxLabelChars),
    }
  })

  const arcs = list(raw?.arcs, LIMITS.maxArcs, (a) => {
    const cx = coord(a?.cx)
    const cy = coord(a?.cy)
    const r = coord(a?.r)
    const start = finite(a?.start_deg)
    const end = finite(a?.end_deg)
    if (cx === null || cy === null || r === null || r <= 0) return null
    if (start === null || end === null) return null
    return { cx, cy, r, startDeg: start, endDeg: end, label: text(a?.label, LIMITS.maxLabelChars) }
  })

  const labels = list(raw?.labels, LIMITS.maxLabels, (l) => {
    const point = sanitizePoint(l)
    const value = text(l?.text, LIMITS.maxLabelChars)
    if (!point || !value) return null
    return { ...point, text: value }
  })

  if (!curves.length && !polylines.length && !circles.length && !markers.length && !arcs.length) {
    return null
  }

  return {
    kind: 'grafik',
    caption,
    view: sanitizeView(raw?.view, { curves, polylines, circles, markers, arcs, labels }),
    curves,
    polylines,
    circles,
    markers,
    arcs,
    labels,
  }
}

/**
 * Görünüm penceresi. Model vermediyse ya da saçma verdiyse (xmin >= xmax)
 * içerikten hesaplanır — boş bir pencere şekli görünmez kılar.
 */
function sanitizeView(raw, content) {
  const xmin = coord(raw?.xmin)
  const xmax = coord(raw?.xmax)
  const ymin = coord(raw?.ymin)
  const ymax = coord(raw?.ymax)

  if (xmin !== null && xmax !== null && ymin !== null && ymax !== null && xmax > xmin && ymax > ymin) {
    return { xmin, xmax, ymin, ymax }
  }

  const xs = []
  const ys = []
  const push = (x, y) => {
    xs.push(x)
    ys.push(y)
  }

  content.polylines.forEach((p) => p.points.forEach((pt) => push(pt.x, pt.y)))
  content.circles.forEach((c) => {
    push(c.cx - c.r, c.cy - c.r)
    push(c.cx + c.r, c.cy + c.r)
  })
  content.markers.forEach((m) => push(m.x, m.y))
  content.arcs.forEach((a) => {
    push(a.cx - a.r, a.cy - a.r)
    push(a.cx + a.r, a.cy + a.r)
  })
  content.labels.forEach((l) => push(l.x, l.y))

  if (!xs.length) return { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }

  const pad = 1
  const minX = Math.min(...xs) - pad
  const maxX = Math.max(...xs) + pad
  const minY = Math.min(...ys) - pad
  const maxY = Math.max(...ys) + pad

  return {
    xmin: minX,
    xmax: maxX > minX ? maxX : minX + 1,
    ymin: minY,
    ymax: maxY > minY ? maxY : minY + 1,
  }
}

/* ==================================================================
   ACTION DOĞRULAMASI
   ================================================================== */

/**
 * Tek bir action'ı doğrular. TANIMADIĞI HER ŞEYİ DÜŞÜRÜR — geçerli bir
 * action üretilemiyorsa `null` döner.
 *
 * Dönen nesne YENİDEN İNŞA EDİLİR: girdideki fazladan alanlar taşınmaz.
 * (`{...raw, type}` yazmak, modelin eklediği rastgele bir alanı render'a
 * taşırdı.)
 */
export function sanitizeAction(raw) {
  const type = ACTION_SET.has(raw?.type) ? raw.type : null
  if (!type) return null

  switch (type) {
    case 'write': {
      const content = text(raw.content, LIMITS.maxContentChars)
      if (!content) return null
      return {
        type,
        content,
        // `format` render yolunu seçer: 'latex' → KaTeX, 'text' → React
        // metin düğümü. İkisi de HTML enjeksiyonuna kapalı.
        format: oneOf(raw.format, ['latex', 'text'], 'latex'),
        emphasis: text(raw.emphasis, LIMITS.maxLabelChars),
      }
    }

    case 'text': {
      const content = text(raw.content, LIMITS.maxNarrationChars)
      if (!content) return null
      return { type, content, tone: oneOf(raw.tone, ['normal', 'muted', 'note'], 'normal') }
    }

    case 'emphasis':
    case 'highlight':
    case 'underline':
    case 'circle':
    case 'box': {
      const target = text(raw.target, LIMITS.maxContentChars)
      if (!target) return null
      return {
        type,
        target,
        format: oneOf(raw.format, ['latex', 'text'], 'latex'),
        label: text(raw.label, LIMITS.maxLabelChars),
        tone: oneOf(raw.tone, ['brand', 'success', 'warning', 'danger', 'info'], 'brand'),
      }
    }

    case 'arrow': {
      return {
        type,
        direction: oneOf(raw.direction, ['down', 'right', 'left', 'up'], 'down'),
        label: text(raw.label, LIMITS.maxLabelChars),
      }
    }

    case 'line':
      return { type }

    case 'erase': {
      const target = text(raw.target, LIMITS.maxContentChars)
      return target ? { type, target } : null
    }

    case 'move': {
      const content = text(raw.content, LIMITS.maxContentChars)
      if (!content) return null
      return {
        type,
        content,
        from: text(raw.from, LIMITS.maxLabelChars),
        to: text(raw.to, LIMITS.maxLabelChars),
      }
    }

    case 'graph':
    case 'shape':
    case 'table':
    case 'flow':
    case 'numberline': {
      const figure = sanitizeFigure(raw.figure)
      if (!figure) return null
      return { type, figure }
    }

    case 'image': {
      // Yalnızca UYGULAMANIN KENDİ depolama yolu kabul edilir. Model
      // rastgele bir URL üretirse (veri sızdırma, izleme pikseli) burada
      // düşer: `src` bir yol'dur, URL değil; istemci onu kendi Supabase
      // istemcisiyle imzalar.
      const path = text(raw.path, 300)
      if (!path || path.includes('..') || /^[a-z]+:/i.test(path)) return null
      return { type, path, alt: text(raw.alt, LIMITS.maxLabelChars) ?? 'Soru görseli' }
    }

    case 'pause': {
      const ms = finite(raw.ms)
      return { type, ms: ms === null ? 800 : Math.min(4000, Math.max(200, ms)) }
    }

    default:
      return null
  }
}

/** Bir adımın action listesini doğrular ve sayısını sınırlar. */
export function sanitizeActions(rawList) {
  return list(rawList, LIMITS.maxActionsPerStep, sanitizeAction)
}

export const _internals = { text, finite, coord, list, oneOf }
