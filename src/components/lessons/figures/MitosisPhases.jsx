import { FigureSvg, Marker, region } from './primitives'

/**
 * MİTOZ EVRELERİ
 *
 * Dört pano, dört evre. Evrelerin adını ezberletmek değil, ==kromozomun
 * o evrede ne yaptığını== göstermek amaçlanıyor: sarılıyor, diziliyor,
 * ayrılıyor, açılıyor.
 *
 * Metafazda kromozomların TEK SIRA hâlinde dizilmesi bilinçli olarak
 * belirgin çizildi — mayoz I'de çift sıra dizilecek ve öğrenci farkı
 * ancak iki şemayı yan yana koyunca görebiliyor.
 *
 * Kardeş kromatitler her panoda aynı renkle çizildi ki anafazda ayrılan
 * şeyin ==kardeş kromatit== olduğu, homolog olmadığı anlaşılsın.
 */

const PHASES = [
  { n: 1, key: 'profaz', title: 'PROFAZ', note: 'Kromatin sarılıp kromozom olur · çekirdek zarı erir · iğ iplikleri oluşur' },
  { n: 2, key: 'metafaz', title: 'METAFAZ', note: 'Kromozomlar ekvatorda TEK SIRA dizilir' },
  { n: 3, key: 'anafaz', title: 'ANAFAZ', note: 'Kardeş kromatitler ayrılıp kutuplara çekilir' },
  { n: 4, key: 'telofaz', title: 'TELOFAZ', note: 'Çekirdek zarı yeniden oluşur · kromozomlar açılır' },
]

const W = 172
const X0 = 24
const GAP = 12
const CY = 172

function Chromosome({ x, y, scale = 1, color = 'stroke-brand-600', split = false, gap = 0 }) {
  const s = (v) => v * scale
  if (split) {
    return (
      <g>
        <path d={`M${x - s(9) - gap} ${y - s(20)} q ${-s(7)} ${s(20)} 0 ${s(40)}`} className={`fill-none ${color}`} strokeWidth={s(7)} strokeLinecap="round" />
        <path d={`M${x + s(9) + gap} ${y - s(20)} q ${s(7)} ${s(20)} 0 ${s(40)}`} className={`fill-none ${color}`} strokeWidth={s(7)} strokeLinecap="round" />
      </g>
    )
  }
  return (
    <g>
      <path d={`M${x - s(8)} ${y - s(20)} q ${-s(6)} ${s(16)} 0 ${s(20)} q ${-s(6)} ${s(6)} 0 ${s(20)}`} className={`fill-none ${color}`} strokeWidth={s(7)} strokeLinecap="round" />
      <path d={`M${x + s(8)} ${y - s(20)} q ${s(6)} ${s(16)} 0 ${s(20)} q ${s(6)} ${s(6)} 0 ${s(20)}`} className={`fill-none ${color}`} strokeWidth={s(7)} strokeLinecap="round" />
      <circle cx={x} cy={y} r={s(5)} className="fill-ink/55" />
    </g>
  )
}

export default function MitosisPhases({ activeRegion = null }) {
  const px = (i) => X0 + i * (W + GAP)

  return (
    <FigureSvg
      viewBox="0 0 760 400"
      title="Mitozun dört evresi"
      desc="Profazda kromatin sarılarak kromozom hâlini alır ve çekirdek zarı erir. Metafazda kromozomlar ekvator düzleminde tek sıra hâlinde dizilir. Anafazda kardeş kromatitler ayrılıp zıt kutuplara çekilir. Telofazda çekirdek zarı yeniden oluşur."
    >
      {PHASES.map((ph, i) => {
        const x = px(i)
        const cx = x + W / 2
        const dim = Boolean(activeRegion) && activeRegion !== ph.key
        return (
          <g key={ph.key} opacity={dim ? 0.25 : 1} style={{ transition: 'opacity .4s ease' }}>
            <Marker n={ph.n} x={x + 18} y={44} regionKey={ph.key} activeRegion={activeRegion} r={13} />
            <text x={x + 40} y={49} className="fill-ink/75" fontSize="12" fontWeight="800" letterSpacing="1.1">
              {ph.title}
            </text>

            {/* Hücre */}
            <ellipse cx={cx} cy={CY} rx="76" ry="66" className="fill-aqua-500/10 stroke-brand-600" strokeWidth="2.5" />

            {/* Profaz: çekirdek zarı erimekte, kromozomlar dağınık */}
            {ph.key === 'profaz' && (
              <>
                <ellipse cx={cx} cy={CY} rx="50" ry="44" className="fill-none stroke-ink/30" strokeWidth="2" strokeDasharray="5 6" />
                <Chromosome x={cx - 22} y={CY - 14} scale={0.8} />
                <Chromosome x={cx + 20} y={CY + 12} scale={0.8} color="stroke-accent-500" />
              </>
            )}

            {/* Metafaz: ekvatorda tek sıra */}
            {ph.key === 'metafaz' && (
              <>
                <line x1={cx - 62} y1={CY} x2={cx + 62} y2={CY} className="stroke-ink/25" strokeWidth="1.6" strokeDasharray="5 5" />
                <Chromosome x={cx - 20} y={CY} scale={0.8} />
                <Chromosome x={cx + 20} y={CY} scale={0.8} color="stroke-accent-500" />
                <text x={cx} y={CY + 58} textAnchor="middle" className="fill-brand-700" fontSize="11" fontWeight="800">tek sıra</text>
              </>
            )}

            {/* Anafaz: kardeş kromatitler ayrılıyor */}
            {ph.key === 'anafaz' && (
              <>
                <Chromosome x={cx - 34} y={CY - 22} scale={0.7} split gap={2} />
                <Chromosome x={cx - 34} y={CY + 22} scale={0.7} split gap={2} color="stroke-accent-500" />
                <Chromosome x={cx + 34} y={CY - 22} scale={0.7} split gap={2} />
                <Chromosome x={cx + 34} y={CY + 22} scale={0.7} split gap={2} color="stroke-accent-500" />
                <line x1={cx - 8} y1={CY} x2={cx - 26} y2={CY} className="stroke-ink/40" strokeWidth="2" />
                <line x1={cx + 8} y1={CY} x2={cx + 26} y2={CY} className="stroke-ink/40" strokeWidth="2" />
              </>
            )}

            {/* Telofaz: iki çekirdek */}
            {ph.key === 'telofaz' && (
              <>
                <ellipse cx={cx - 34} cy={CY} rx="30" ry="34" className="fill-none stroke-ink/45" strokeWidth="2.4" />
                <ellipse cx={cx + 34} cy={CY} rx="30" ry="34" className="fill-none stroke-ink/45" strokeWidth="2.4" />
                <path d={`M${cx - 44} ${CY - 6} q 12 -8 22 0`} className="fill-none stroke-ink/45" strokeWidth="3" strokeLinecap="round" />
                <path d={`M${cx - 44} ${CY + 10} q 12 8 22 0`} className="fill-none stroke-accent-500" strokeWidth="3" strokeLinecap="round" />
                <path d={`M${cx + 24} ${CY - 6} q 12 -8 22 0`} className="fill-none stroke-ink/45" strokeWidth="3" strokeLinecap="round" />
                <path d={`M${cx + 24} ${CY + 10} q 12 8 22 0`} className="fill-none stroke-accent-500" strokeWidth="3" strokeLinecap="round" />
              </>
            )}
          </g>
        )
      })}

      {/* Künye */}
      <line x1="24" y1="266" x2="736" y2="266" className="stroke-line-strong" strokeWidth="1" />
      {PHASES.map((ph, i) => {
        const dim = Boolean(activeRegion) && activeRegion !== ph.key
        const y = 292 + i * 26
        return (
          <g key={ph.key} opacity={dim ? 0.3 : 1} style={{ transition: 'opacity .4s ease' }}>
            <text x="30" y={y} className="fill-ink" fontSize="12.5" fontWeight="800">
              {ph.n}. {ph.title.charAt(0) + ph.title.slice(1).toLowerCase()}
            </text>
            <text x="132" y={y} className="fill-ink/60" fontSize="12.5">
              {ph.note}
            </text>
          </g>
        )
      })}

      <text x="30" y="392" className="fill-brand-700" fontSize="12.5" fontWeight="700">
        Anafazda ayrılan şey kardeş kromatitlerdir — homolog kromozomlar değil.
      </text>
    </FigureSvg>
  )
}
