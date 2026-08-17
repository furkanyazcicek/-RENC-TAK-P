import { useId } from 'react'
import { cn } from '../../lib/cn'
import MathRenderer from './MathRenderer'

/**
 * FigureRenderer — tahtadaki şekiller (§6, §15, §16, §17, §45).
 *
 * Dört tür, dört ayrı bileşen:
 *   grafik        → koordinat sistemi, eğri, çokgen, çember, açı, vektör
 *   tablo         → veri / kimya tablosu
 *   akis          → süreç diyagramı (DNA → RNA → Protein)
 *   sayi_dogrusu  → eşitsizlik ve aralıklar
 *
 * TAMAMI SVG, HİÇBİRİ HTML DEĞİL. Verinin tek yaptığı şey sayısal
 * koordinat üretmek; hiçbir alan işaretleme (markup) olarak yorumlanmıyor.
 * Etiketler React metin düğümü olarak `<text>` içine giriyor.
 *
 * KOORDİNAT DÖNÜŞÜMÜ: matematiksel eksende y YUKARI artar, SVG'de AŞAĞI.
 * Dönüşüm tek yerde (`makeScale`) yapılır; her çizim fonksiyonunun kendi
 * çevirisini yazması, işaret hatalarının kaynağı olurdu.
 *
 * Renkler doğrudan CSS değişkenlerinden okunur (`rgb(var(--c-brand-500))`)
 * — DESIGN_SYSTEM.md §10: "Satır içi hex renk yazma."
 */

export default function FigureRenderer({ figure, className }) {
  if (!figure) return null

  const body = (() => {
    switch (figure.kind) {
      case 'grafik':
        return <PlotFigure figure={figure} />
      case 'tablo':
        return <TableFigure table={figure.table} />
      case 'akis':
        return <FlowFigure flow={figure.flow} />
      case 'sayi_dogrusu':
        return <NumberLineFigure data={figure.numberLine} />
      default:
        return null
    }
  })()

  if (!body) return null

  return (
    <figure className={cn('my-3 w-full min-w-0', className)}>
      {body}
      {figure.caption && (
        <figcaption className="mt-2 text-center text-xs text-ink/60">{figure.caption}</figcaption>
      )}
    </figure>
  )
}

/* ==================================================================
   GRAFİK / GEOMETRİ
   ================================================================== */

const PAD = 28
const VIEW_W = 520
const VIEW_H = 380

function PlotFigure({ figure }) {
  const gradientId = useId()
  const view = figure.view ?? { xmin: -10, xmax: 10, ymin: -10, ymax: 10 }

  // Ölçek: matematik koordinatı → SVG pikseli.
  const sx = (x) => PAD + ((x - view.xmin) / (view.xmax - view.xmin)) * (VIEW_W - PAD * 2)
  const sy = (y) => VIEW_H - PAD - ((y - view.ymin) / (view.ymax - view.ymin)) * (VIEW_H - PAD * 2)

  const ticks = niceTicks(view.xmin, view.xmax)
  const yTicks = niceTicks(view.ymin, view.ymax)

  // Eksenler yalnızca görünüm penceresi sıfırı içeriyorsa çizilir;
  // içermiyorsa kenara yapışmış sahte bir eksen çizmek yanıltıcı olur.
  const showXAxis = view.ymin <= 0 && view.ymax >= 0
  const showYAxis = view.xmin <= 0 && view.xmax >= 0

  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="mx-auto block h-auto w-full max-w-[34rem]"
        role="img"
        aria-label={figure.caption ?? 'Grafik'}
      >
        <defs>
          <marker
            id={`arrow-${gradientId}`}
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--c-brand-600))" />
          </marker>
        </defs>

        {/* ---- Izgara ---- */}
        <g stroke="rgb(var(--c-line))" strokeWidth="1">
          {ticks.map((t) => (
            <line key={`gx${t}`} x1={sx(t)} y1={PAD} x2={sx(t)} y2={VIEW_H - PAD} />
          ))}
          {yTicks.map((t) => (
            <line key={`gy${t}`} x1={PAD} y1={sy(t)} x2={VIEW_W - PAD} y2={sy(t)} />
          ))}
        </g>

        {/* ---- Eksenler ---- */}
        <g stroke="rgb(var(--c-ink) / 0.45)" strokeWidth="1.5">
          {showXAxis && <line x1={PAD} y1={sy(0)} x2={VIEW_W - PAD} y2={sy(0)} />}
          {showYAxis && <line x1={sx(0)} y1={PAD} x2={sx(0)} y2={VIEW_H - PAD} />}
        </g>

        {/* ---- Eksen etiketleri ---- */}
        <g fill="rgb(var(--c-ink) / 0.55)" fontSize="11" textAnchor="middle">
          {showXAxis &&
            ticks.map((t) =>
              t === 0 ? null : (
                <text key={`tx${t}`} x={sx(t)} y={sy(0) + 14}>
                  {formatTick(t)}
                </text>
              )
            )}
          {showYAxis &&
            yTicks.map((t) =>
              t === 0 ? null : (
                <text key={`ty${t}`} x={sx(0) - 8} y={sy(t) + 4} textAnchor="end">
                  {formatTick(t)}
                </text>
              )
            )}
        </g>

        {/* ---- Çemberler ---- */}
        {figure.circles?.map((c, i) => (
          <g key={`c${i}`}>
            <circle
              cx={sx(c.cx)}
              cy={sy(c.cy)}
              // Yarıçap x ekseninde ölçeklenir. x ve y ölçekleri farklıysa
              // çember elips olurdu; geometri sorusunda bu kabul edilemez,
              // bu yüzden tek ölçek kullanılır.
              r={Math.abs(sx(c.cx + c.r) - sx(c.cx))}
              fill="rgb(var(--c-brand-500) / 0.06)"
              stroke="rgb(var(--c-brand-600))"
              strokeWidth="2"
            />
            {c.label && (
              <text x={sx(c.cx)} y={sy(c.cy) - 6} textAnchor="middle" fontSize="12" fill="rgb(var(--c-ink))">
                {c.label}
              </text>
            )}
          </g>
        ))}

        {/* ---- Çokgenler / doğrular / vektörler ---- */}
        {figure.polylines?.map((p, i) => {
          const d = p.points.map((pt, j) => `${j === 0 ? 'M' : 'L'} ${sx(pt.x)} ${sy(pt.y)}`).join(' ')
          const path = p.closed ? `${d} Z` : d
          const isArrow = p.style === 'ok' || p.style === 'vektor'
          return (
            <g key={`p${i}`}>
              <path
                d={path}
                fill={p.closed ? 'rgb(var(--c-brand-500) / 0.08)' : 'none'}
                stroke={p.curve ? 'rgb(var(--c-brand-600))' : 'rgb(var(--c-ink) / 0.75)'}
                strokeWidth={p.curve ? 2 : 2.2}
                strokeDasharray={p.style === 'kesikli' ? '6 5' : undefined}
                strokeLinejoin="round"
                strokeLinecap="round"
                markerEnd={isArrow ? `url(#arrow-${gradientId})` : undefined}
              />
              {p.label && (
                <text
                  x={sx(midpoint(p.points).x)}
                  y={sy(midpoint(p.points).y) - 6}
                  textAnchor="middle"
                  fontSize="12"
                  fontWeight="600"
                  fill="rgb(var(--c-brand-700))"
                >
                  {p.label}
                </text>
              )}
            </g>
          )
        })}

        {/* ---- Açı yayları ---- */}
        {figure.arcs?.map((a, i) => (
          <g key={`a${i}`}>
            <path
              d={arcPath(a, sx, sy)}
              fill="none"
              stroke="rgb(var(--c-accent-500))"
              strokeWidth="2"
            />
            {a.label && (
              <text
                x={sx(a.cx + a.r * 1.5 * Math.cos((((a.startDeg + a.endDeg) / 2) * Math.PI) / 180))}
                y={sy(a.cy + a.r * 1.5 * Math.sin((((a.startDeg + a.endDeg) / 2) * Math.PI) / 180)) + 4}
                textAnchor="middle"
                fontSize="12"
                fill="rgb(var(--c-accent-700))"
              >
                {a.label}
              </text>
            )}
          </g>
        ))}

        {/* ---- Noktalar ---- */}
        {figure.markers?.map((m, i) => (
          <Marker key={`m${i}`} marker={m} sx={sx} sy={sy} />
        ))}

        {/* ---- Serbest etiketler ---- */}
        {figure.labels?.map((l, i) => (
          <text
            key={`l${i}`}
            x={sx(l.x)}
            y={sy(l.y)}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="rgb(var(--c-ink))"
          >
            {l.text}
          </text>
        ))}
      </svg>
    </div>
  )
}

function Marker({ marker, sx, sy }) {
  const x = sx(marker.x)
  const y = sy(marker.y)

  if (marker.style === 'dik_aci') {
    // Dik açı işareti küçük bir kare — geometri sorularında "burası 90°"
    // demenin standart yolu.
    const s = 11
    return (
      <g>
        <path
          d={`M ${x} ${y - s} L ${x + s} ${y - s} L ${x + s} ${y}`}
          fill="none"
          stroke="rgb(var(--c-accent-500))"
          strokeWidth="2"
        />
      </g>
    )
  }

  if (marker.style === 'carpi') {
    const s = 5
    return (
      <g stroke="rgb(var(--c-danger-500))" strokeWidth="2.4" strokeLinecap="round">
        <line x1={x - s} y1={y - s} x2={x + s} y2={y + s} />
        <line x1={x - s} y1={y + s} x2={x + s} y2={y - s} />
      </g>
    )
  }

  const open = marker.style === 'bos_nokta'

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="4.5"
        fill={open ? 'rgb(var(--c-surface))' : 'rgb(var(--c-brand-600))'}
        stroke="rgb(var(--c-brand-600))"
        strokeWidth="2"
      />
      {marker.label && (
        <text x={x + 8} y={y - 7} fontSize="12" fontWeight="600" fill="rgb(var(--c-ink))">
          {marker.label}
        </text>
      )}
    </g>
  )
}

/* ==================================================================
   TABLO
   ================================================================== */

function TableFigure({ table }) {
  if (!table?.headers?.length) return null

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[18rem] border-collapse text-sm">
        <thead>
          <tr>
            {table.headers.map((h, i) => (
              <th
                key={i}
                className="border border-line bg-surface-sunken px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-ink/70"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.cells.map((cell, j) => (
                <td key={j} className="border border-line px-3 py-2 tabular text-ink/85">
                  {/* Hücreler kimya denklemi ya da formül içerebilir. */}
                  <MathCell value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/**
 * Tablo hücresi. Model kimya/matematik tablolarında hücrelere LaTeX
 * yazabiliyor; `$` ile sarılmışsa matematik olarak basılır.
 */
function MathCell({ value }) {
  if (typeof value !== 'string') return null
  if (value.includes('$')) {
    const inner = value.replace(/\$/g, '')
    return <MathRenderer latex={inner} />
  }
  return <>{value}</>
}

/* ==================================================================
   AKIŞ ŞEMASI (biyoloji süreçleri)
   ================================================================== */

function FlowFigure({ flow }) {
  if (!flow?.nodes?.length) return null

  // Düğümler dikey sıralanır: mobilde yatay bir zincir taşar, dikey
  // zincir parmakla kaydırmadan okunur (§25).
  return (
    <div className="mx-auto flex w-full max-w-sm flex-col items-center gap-1">
      {flow.nodes.map((node, i) => {
        const edge = flow.edges?.find((e) => e.from === node.id)
        return (
          <div key={node.id} className="flex w-full flex-col items-center gap-1">
            <div className="w-full rounded-input border border-brand-500/20 bg-brand-500/[0.06] px-4 py-2.5 text-center text-sm font-semibold text-ink">
              {node.label}
            </div>
            {edge && i < flow.nodes.length - 1 && (
              <div className="flex flex-col items-center py-0.5">
                <svg width="16" height="22" viewBox="0 0 16 22" aria-hidden="true">
                  <line
                    x1="8"
                    y1="0"
                    x2="8"
                    y2="15"
                    stroke="rgb(var(--c-brand-500))"
                    strokeWidth="2"
                  />
                  <path d="M 3 14 L 8 21 L 13 14 Z" fill="rgb(var(--c-brand-500))" />
                </svg>
                {edge.label && (
                  <span className="text-2xs font-semibold text-brand-700">{edge.label}</span>
                )}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

/* ==================================================================
   SAYI DOĞRUSU (eşitsizlikler)
   ================================================================== */

const NL_W = 520
const NL_H = 90

function NumberLineFigure({ data }) {
  if (!data) return null

  const { min, max } = data
  const sx = (v) => PAD + ((v - min) / (max - min)) * (NL_W - PAD * 2)
  const y = NL_H / 2
  const ticks = niceTicks(min, max)

  return (
    <div className="w-full overflow-x-auto hide-scrollbar">
      <svg
        viewBox={`0 0 ${NL_W} ${NL_H}`}
        className="mx-auto block h-auto w-full max-w-[34rem]"
        role="img"
        aria-label="Sayı doğrusu"
      >
        {/* Aralıklar önce çizilir ki noktalar üstte kalsın. */}
        {data.intervals?.map((iv, i) => (
          <g key={`iv${i}`}>
            <line
              x1={sx(iv.from)}
              y1={y}
              x2={sx(iv.to)}
              y2={y}
              stroke="rgb(var(--c-brand-500) / 0.5)"
              strokeWidth="10"
              strokeLinecap="butt"
            />
            {iv.label && (
              <text
                x={(sx(iv.from) + sx(iv.to)) / 2}
                y={y - 16}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="rgb(var(--c-brand-700))"
              >
                {iv.label}
              </text>
            )}
          </g>
        ))}

        <line x1={PAD - 12} y1={y} x2={NL_W - PAD + 12} y2={y} stroke="rgb(var(--c-ink) / 0.6)" strokeWidth="2" />

        {ticks.map((t) => (
          <g key={`t${t}`}>
            <line x1={sx(t)} y1={y - 5} x2={sx(t)} y2={y + 5} stroke="rgb(var(--c-ink) / 0.45)" strokeWidth="1.5" />
            <text x={sx(t)} y={y + 22} textAnchor="middle" fontSize="11" fill="rgb(var(--c-ink) / 0.6)">
              {formatTick(t)}
            </text>
          </g>
        ))}

        {/* Uç noktalar: dolu = dahil (≤), boş = hariç (<). */}
        {data.points?.map((p, i) => (
          <g key={`np${i}`}>
            <circle
              cx={sx(p.value)}
              cy={y}
              r="6"
              fill={p.filled ? 'rgb(var(--c-brand-600))' : 'rgb(var(--c-surface))'}
              stroke="rgb(var(--c-brand-600))"
              strokeWidth="2.5"
            />
            {p.label && (
              <text
                x={sx(p.value)}
                y={y - 14}
                textAnchor="middle"
                fontSize="12"
                fontWeight="600"
                fill="rgb(var(--c-ink))"
              >
                {p.label}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  )
}

/* ==================================================================
   YARDIMCILAR
   ================================================================== */

/**
 * Okunabilir eksen aralıkları üretir. 0.1, 0.2, 0.5, 1, 2, 5, 10…
 * dizisinden birini seçer; ham (max-min)/8 gibi bir adım "2.3333"
 * etiketleri üretirdi.
 */
function niceTicks(min, max, target = 8) {
  const span = max - min
  if (!Number.isFinite(span) || span <= 0) return []

  const rough = span / target
  const magnitude = 10 ** Math.floor(Math.log10(rough))
  const normalized = rough / magnitude
  const step = (normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10) * magnitude

  const out = []
  const first = Math.ceil(min / step) * step
  for (let v = first; v <= max + step * 0.001; v += step) {
    // Kayan nokta birikimi: 0.1 + 0.2 = 0.30000000000000004.
    out.push(Math.round(v / step) * step)
    if (out.length > 40) break
  }
  return out
}

function formatTick(value) {
  if (Math.abs(value) < 1e-9) return '0'
  const rounded = Math.round(value * 1000) / 1000
  return String(rounded)
}

function midpoint(points) {
  const mid = points[Math.floor(points.length / 2)]
  return mid ?? points[0]
}

/** Açı yayının SVG yolu. Dereceler matematik yönünde (CCW) verilir. */
function arcPath(arc, sx, sy) {
  const toRad = (d) => (d * Math.PI) / 180
  const x1 = arc.cx + arc.r * Math.cos(toRad(arc.startDeg))
  const y1 = arc.cy + arc.r * Math.sin(toRad(arc.startDeg))
  const x2 = arc.cx + arc.r * Math.cos(toRad(arc.endDeg))
  const y2 = arc.cy + arc.r * Math.sin(toRad(arc.endDeg))

  const sweep = Math.abs(arc.endDeg - arc.startDeg)
  const largeArc = sweep > 180 ? 1 : 0
  // SVG'de y aşağı arttığı için matematik yönü (CCW) ekranda CW görünür;
  // sweep-flag bu yüzden 0.
  const radius = Math.abs(sx(arc.cx + arc.r) - sx(arc.cx))

  return `M ${sx(x1)} ${sy(y1)} A ${radius} ${radius} 0 ${largeArc} 0 ${sx(x2)} ${sy(y2)}`
}
