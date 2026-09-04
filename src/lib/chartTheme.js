/**
 * chartTheme — tüm Recharts grafikleri için ortak renk/eksen/tooltip ayarları.
 *
 * Amaç: her grafik dosyasında ayrı ayrı yazılmış hex kodlarını tek bir
 * kaynağa toplamak. Böylece grafikler birbirinin aynı dili konuşur ve
 * tema değiştiğinde hepsi birlikte güncellenir.
 *
 * YUMUŞAK EDİTORYAL PALET — kitap kapağının lacivertiyle uyumlu, fakat
 * her veri ailesine ayrı bir karakter veren düşük doygunluklu renkler.
 *
 * Sıra ÖNEMLİDİR — grafiklerin çoğu iki serilidir, bu yüzden ilk iki renk
 * (mor / camgöbeği) hem hue hem açıklık bakımından en uzak çift seçildi.
 * Mor ile mavi renk körlüğünde yakınlaşabildiğinden aralarına iki seri
 * konuldu. Palet döngüsel DEĞİLDİR — 7+ seri gerekiyorsa "Diğer" altında
 * toplayın veya grafiği bölün.
 */

/* Seri (kategori) renkleri — sabit sıra */
export const CATEGORICAL = [
  '#5F8C82', // adaçayı / teal
  '#C97868', // mercan
  '#C3954F', // sıcak amber
  '#6D8EAA', // puslu gök
  '#8A76AA', // dumanlı menekşe
  '#B86D82', // gül
  '#7D9879', // yumuşak yeşil
]

/* Durum renkleri — kategori renkleriyle asla karıştırılmaz */
export const STATUS = {
  good: '#5F8C72',
  warning: '#B88542',
  danger: '#B95F67',
  neutral: '#727883',
}

/* Tek renkli (büyüklük) grafikler için açıktan koyuya tek hue — Aurora moru */
export const SEQUENTIAL = ['#E8F0ED', '#D4E4DE', '#B9D2C9', '#94B8AD', '#719B8F', '#4F7C72']

export const CHART_INK = '#6B6B85'
export const CHART_GRID = '#E7E7F2'
export const CHART_SURFACE = '#FFFFFF'
export const BRAND = '#7667A8'
export const HIGHLIGHT = '#C97868'

/** i. seriye sabit renk atar (döngü yok — 6'dan sonrası nötr griye düşer). */
export function seriesColor(index) {
  return CATEGORICAL[index] ?? STATUS.neutral
}

/** Aynı ders/konu adının her grafikte aynı rengi almasını sağlar. */
export function colorForKey(key) {
  const text = String(key ?? '')
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash * 31 + text.charCodeAt(i)) % 100000
  }
  return CATEGORICAL[hash % CATEGORICAL.length]
}

/* --- Recharts ortak props'ları --- */

export const gridProps = {
  strokeDasharray: '3 3',
  stroke: CHART_GRID,
  vertical: false,
}

export const xAxisProps = {
  tick: { fontSize: 11, fill: CHART_INK },
  axisLine: { stroke: CHART_GRID },
  tickLine: false,
  dy: 4,
}

export const yAxisProps = {
  tick: { fontSize: 11, fill: CHART_INK },
  axisLine: false,
  tickLine: false,
  width: 36,
}

/* Tooltip kartı uygulamadaki kartlarla aynı dili konuşur:
   yumuşak köşe, ince çizgi, katmanlı ve violet'e çalan gölge. */
export const tooltipProps = {
  cursor: { fill: 'rgba(95, 140, 130, 0.09)' },
  contentStyle: {
    borderRadius: 14,
    border: `1px solid ${CHART_GRID}`,
    boxShadow: '0 16px 36px -14px rgba(30, 27, 58, 0.22)',
    fontSize: 12,
    padding: '9px 13px',
  },
  labelStyle: { fontWeight: 700, color: '#131329', marginBottom: 2 },
  itemStyle: { color: CHART_INK },
}

/** Çizgi grafiklerde dikey imleç, dolgu yerine ince çizgi olmalı. */
export const lineTooltipProps = {
  ...tooltipProps,
  cursor: { stroke: CHART_GRID, strokeWidth: 1.5 },
}

/* Çubuk ucu yuvarlaması ve kalınlık sınırı — ince, oturaklı çubuklar */
export const barProps = {
  radius: [6, 6, 0, 0],
  maxBarSize: 28,
}

/* Çizgi kalınlığı ve nokta boyutu — 2px çizgi, ≥8px nokta */
export const lineProps = {
  type: 'monotone',
  strokeWidth: 2.5,
  dot: { r: 3.5, strokeWidth: 2, stroke: CHART_SURFACE },
  activeDot: { r: 5.5, strokeWidth: 2, stroke: CHART_SURFACE },
}

export const chartMargin = { top: 8, right: 12, left: -12, bottom: 4 }

export default {
  CATEGORICAL,
  STATUS,
  SEQUENTIAL,
  seriesColor,
  colorForKey,
  gridProps,
  xAxisProps,
  yAxisProps,
  tooltipProps,
  lineTooltipProps,
  barProps,
  lineProps,
  chartMargin,
}
