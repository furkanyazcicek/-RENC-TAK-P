import { useId } from 'react'
import { cn } from '../../lib/cn'

/**
 * Sparkline — metrik kartlarının içine giren, eksensiz minik eğilim çizgisi.
 *
 * Tek başına bir sayı "generic" durur; yanındaki bu küçük çizgi sayının
 * nereden geldiğini anlatır. Etiket, eksen ve ızgara yoktur — bilinçli olarak.
 */
export default function Sparkline({
  data = [],
  color = '#7C3AED',
  height = 32,
  width = 96,
  filled = true,
  className,
}) {
  const gradientId = useId().replace(/:/g, '')

  const values = data.map((d) => (typeof d === 'number' ? d : d?.value ?? 0))
  if (values.length < 2) {
    return (
      <div
        className={cn('flex items-end', className)}
        style={{ width, height }}
        aria-hidden="true"
      />
    )
  }

  const max = Math.max(...values)
  const min = Math.min(...values)
  const span = max - min || 1
  const stepX = width / (values.length - 1)
  const pad = 3

  const points = values.map((v, i) => ({
    x: i * stepX,
    y: pad + (height - pad * 2) * (1 - (v - min) / span),
  }))

  // Yumuşak eğri — köşeli kırılma yerine akıcı geçiş
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    d += ` C ${p1.x + (p2.x - p0.x) / 6} ${p1.y + (p2.y - p0.y) / 6}, ${
      p2.x - (p3.x - p1.x) / 6
    } ${p2.y - (p3.y - p1.y) / 6}, ${p2.x} ${p2.y}`
  }

  const area = `${d} L ${width} ${height} L 0 ${height} Z`
  const last = points[points.length - 1]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      className={cn('overflow-visible', className)}
      aria-hidden="true"
      focusable="false"
    >
      {filled && (
        <>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.22" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d={area} fill={`url(#${gradientId})`} />
        </>
      )}
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={last.x} cy={last.y} r="2.25" fill={color} />
    </svg>
  )
}
