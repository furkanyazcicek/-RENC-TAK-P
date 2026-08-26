import { useId } from 'react'

const pad = { l: 48, r: 18, t: 20, b: 40 }

/**
 * Ölçüm grafiği. Padişah Geçidi'nin okuma dili: ince ızgara, serif ve
 * tabular rakamlar, altı yumuşak degradeyle dolan eğri, son noktada halka.
 */
export default function BiyolojiGrafik({ noktalar = [], seriler = [{ key: 'y', ad: 'Değer', renk: '#61d7b0' }], xKey = 'x', xEtiket = 'Zaman', yEtiket = 'Değer', birim = '', ust, alt = 0, ariaLabel }) {
  const kimlik = useId().replace(/:/g, '')
  const w = 560, h = 230, iw = w - pad.l - pad.r, ih = h - pad.t - pad.b
  const xs = noktalar.map((n) => Number(n[xKey]) || 0); const xmax = Math.max(1, ...xs)
  const ys = noktalar.flatMap((n) => seriler.map((s) => Number(n[s.key]) || 0)); const ymax = Math.max(1, ust ?? Math.ceil(Math.max(...ys, 1) * 1.1))
  const px = (x) => pad.l + (x / xmax) * iw, py = (y) => pad.t + ih - ((y - alt) / (ymax - alt || 1)) * ih
  const son = noktalar.length ? noktalar[noktalar.length - 1] : null

  return <figure className="ba-grafik"><svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={ariaLabel ?? `${xEtiket} ile ${yEtiket} grafiği`}>
    <defs>{seriler.map((s, i) => (
      <linearGradient key={s.key} id={`ba-alan-${kimlik}-${i}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={s.renk} stopOpacity="0.26" />
        <stop offset="100%" stopColor={s.renk} stopOpacity="0" />
      </linearGradient>
    ))}</defs>

    {[0, .25, .5, .75, 1].map((q) => <g key={q}>
      <line className="grid" x1={pad.l} x2={w - pad.r} y1={pad.t + ih * q} y2={pad.t + ih * q} />
      <text x={pad.l - 9} y={pad.t + ih * q + 4} textAnchor="end">{Math.round(ymax * (1 - q))}</text>
    </g>)}
    <line className="eksen" x1={pad.l} x2={w - pad.r} y1={pad.t + ih} y2={pad.t + ih} />
    <line className="eksen" x1={pad.l} x2={pad.l} y1={pad.t} y2={pad.t + ih} />

    {seriler.map((s, i) => {
      const d = noktalar.map((n, j) => `${j ? 'L' : 'M'} ${px(Number(n[xKey]) || 0)} ${py(Number(n[s.key]) || 0)}`).join(' ')
      const taban = noktalar.length ? `${d} L ${px(Number(noktalar[noktalar.length - 1][xKey]) || 0)} ${pad.t + ih} L ${px(Number(noktalar[0][xKey]) || 0)} ${pad.t + ih} Z` : ''
      return <g key={s.key}>
        {noktalar.length > 1 ? <path d={taban} fill={`url(#ba-alan-${kimlik}-${i})`} stroke="none" /> : null}
        <path d={d} fill="none" stroke={s.renk} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        {son ? <>
          <circle className="ba-grafik-halka" cx={px(Number(son[xKey]) || 0)} cy={py(Number(son[s.key]) || 0)} r="7" fill="none" stroke={s.renk} strokeOpacity="0.35" />
          <circle cx={px(Number(son[xKey]) || 0)} cy={py(Number(son[s.key]) || 0)} r="3.4" fill={s.renk} />
        </> : null}
      </g>
    })}

    <text className="eksen-adi" x={pad.l + iw / 2} y={h - 8} textAnchor="middle">{xEtiket}</text>
    <text className="eksen-adi" transform={`translate(14 ${pad.t + ih / 2}) rotate(-90)`} textAnchor="middle">{yEtiket}{birim ? ` (${birim})` : ''}</text>
  </svg>
  <figcaption>{seriler.map((s) => <span key={s.key}><i style={{ background: s.renk }} />{s.ad}</span>)}<em>Model ölçümü · {birim || 'bağıl birim'}</em></figcaption></figure>
}
