import { useState } from 'react'
import { cn } from '../../lib/cn'
import { useInView, usePrefersReducedMotion } from './hooks'

/**
 * NetTrendChart — deneme netlerinin gelişimi.
 *
 * Recharts kullanılmaz: tanıtım sayfasında çizginin kendini çizmesi ve
 * imleç takibi gibi hareketleri tam kontrol edebilmek için el yazımı SVG.
 *
 * Etkileşim: imleç grafiğin üzerindeyken en yakın noktaya dikey kılavuz,
 * büyüyen nokta ve değer balonu gelir.
 */

const W = 340
const H = 150
const PAD = { top: 16, right: 10, bottom: 24, left: 30 }

/** Yumuşak (cardinal spline) çizgi — köşeli kırılmalar yerine akıcı eğri. */
function smoothPath(points) {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 0; i < points.length - 1; i += 1) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`
  }
  return d
}

export default function NetTrendChart({ data, color = '#7C3AED', maxNet = 90, className }) {
  const [ref, inView] = useInView()
  const reduced = usePrefersReducedMotion()
  const [active, setActive] = useState(null)

  const innerW = W - PAD.left - PAD.right
  const innerH = H - PAD.top - PAD.bottom
  const step = data.length > 1 ? innerW / (data.length - 1) : 0

  const points = data.map((d, i) => ({
    ...d,
    x: PAD.left + i * step,
    y: PAD.top + innerH - (d.net / maxNet) * innerH,
  }))

  const line = smoothPath(points)
  const area = `${line} L ${points[points.length - 1].x} ${PAD.top + innerH} L ${points[0].x} ${
    PAD.top + innerH
  } Z`

  const gridLines = [0, 0.25, 0.5, 0.75, 1]
  const shown = active != null ? points[active] : null
  const first = data[0].net
  const last = data[data.length - 1].net
  const delta = last - first

  return (
    <div ref={ref} className={cn('relative select-none', className)}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label={`Deneme net gelişimi: ${first} netten ${last} nete yükseldi`}
        onMouseLeave={() => setActive(null)}
      >
        <defs>
          <linearGradient id="netFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Arka plan ızgarası — geri planda kalır */}
        {gridLines.map((g) => {
          const y = PAD.top + innerH * g
          return (
            <g key={g}>
              <line
                x1={PAD.left}
                x2={W - PAD.right}
                y1={y}
                y2={y}
                stroke="currentColor"
                strokeOpacity="0.09"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <text
                x={PAD.left - 7}
                y={y + 3}
                textAnchor="end"
                fontSize="8"
                fill="currentColor"
                fillOpacity="0.35"
                fontWeight="600"
              >
                {Math.round(maxNet * (1 - g))}
              </text>
            </g>
          )
        })}

        {/* Dolgu */}
        <path
          d={area}
          fill="url(#netFill)"
          style={{
            opacity: inView || reduced ? 1 : 0,
            transition: reduced ? 'none' : 'opacity .9s ease .35s',
          }}
        />

        {/* Çizginin kendini çizmesi */}
        <path
          d={line}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            strokeDasharray: 900,
            strokeDashoffset: inView || reduced ? 0 : 900,
            transition: reduced ? 'none' : 'stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)',
          }}
        />

        {/* İmleç kılavuzu */}
        {shown && (
          <line
            x1={shown.x}
            x2={shown.x}
            y1={PAD.top - 4}
            y2={PAD.top + innerH}
            stroke={color}
            strokeOpacity="0.4"
            strokeWidth="1.5"
            strokeDasharray="4 3"
          />
        )}

        {/* Noktalar */}
        {points.map((p, i) => (
          <circle
            key={p.label}
            cx={p.x}
            cy={p.y}
            r={active === i ? 6 : 3.5}
            fill={active === i ? color : '#fff'}
            stroke={color}
            strokeWidth="2.5"
            style={{
              opacity: inView || reduced ? 1 : 0,
              transition: reduced
                ? 'none'
                : `opacity .3s ease ${0.6 + i * 0.08}s, r .18s cubic-bezier(.34,1.56,.64,1), fill .18s ease`,
            }}
          />
        ))}

        {/* Fare yakalama alanları — noktadan çok daha büyük hedefler */}
        {points.map((p, i) => (
          <rect
            key={`hit-${p.label}`}
            x={p.x - step / 2}
            y={0}
            width={Math.max(step, 24)}
            height={H}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabIndex={-1}
          />
        ))}

        {/* Alt eksen etiketleri */}
        {points.map((p, i) => (
          <text
            key={`lbl-${p.label}`}
            x={p.x}
            y={H - 6}
            textAnchor="middle"
            fontSize="8"
            fontWeight="600"
            fill="currentColor"
            fillOpacity={active === i ? 0.85 : 0.35}
            style={{ transition: 'fill-opacity .15s ease' }}
          >
            {p.date}
          </text>
        ))}
      </svg>

      {/* Değer balonu — HTML olarak, yüzde konumlandırma ile */}
      {shown && (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+12px)] rounded-lg bg-ink px-2.5 py-1.5 text-center shadow-lg animate-scale-in"
          style={{ left: `${(shown.x / W) * 100}%`, top: `${(shown.y / H) * 100}%` }}
        >
          <p className="text-[10px] font-semibold text-white/50 whitespace-nowrap">{shown.label}</p>
          <p className="text-sm font-bold text-white tabular leading-tight">
            {shown.net.toLocaleString('tr-TR', { minimumFractionDigits: 2 })}
            <span className="text-[10px] font-medium text-white/50"> net</span>
          </p>
        </div>
      )}

      {/* Özet rozet — çizginin bittiği sağ üst köşeyi kapatmasın diye solda durur */}
      <div
        className="absolute top-0 flex items-center gap-1 rounded-full bg-success-50 px-2 py-0.5 text-[10px] font-bold text-success-700"
        style={{ left: '11%' }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M4 17l7-7 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        +{delta.toLocaleString('tr-TR', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} net
      </div>
    </div>
  )
}
