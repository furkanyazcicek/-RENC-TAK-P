import { useEffect, useState } from 'react'
import { FigureSvg, Marker, region } from './primitives'

const DETAILS = {
  katabolizma: {
    title: 'Enerji serbestleşir',
    equation: 'Glikoz → CO₂ + H₂O + enerji',
    note: 'Açığa çıkan enerjinin bir bölümü ADP + Pi’den ATP kurmak için kullanılır.',
  },
  atp: {
    title: 'Enerji standartlaştırılır',
    equation: 'ADP + Pi + enerji ⇄ ATP',
    note: 'ATP depo değildir; tekrar tekrar şarj edilen kısa süreli enerji taşıyıcısıdır.',
  },
  anabolizma: {
    title: 'Enerji biyolojik işe çevrilir',
    equation: 'Amino asitler + ATP → protein',
    note: 'Sentez tepkimeleri kendiliğinden ilerlemez; gereken enerji ATP’den gelir.',
  },
}

function focusedRegion(key, activeRegion) {
  const props = region(key, activeRegion)
  return {
    ...props,
    style: {
      ...props.style,
      transform: activeRegion === key ? 'scale(1.035)' : 'scale(1)',
      transformBox: 'fill-box',
      transformOrigin: 'center',
      transition: 'opacity .4s ease, transform .55s cubic-bezier(.22,1,.36,1)',
    },
  }
}

/**
 * METABOLİZMA VE ATP DÖNGÜSÜ
 *
 * Bu şema biyolojinin tamamında geri gelecek tek bir fikri kurar:
 * katabolizma enerji açığa çıkarır, anabolizma enerji harcar, ==ikisi
 * arasındaki köprü ATP'dir==.
 *
 * Ortadaki döngünün kapalı çizilmesi bilinçlidir: ATP tüketilip biten bir
 * yakıt değil, sürekli yeniden doldurulan bir taşıyıcıdır. Öğrencilerin
 * "ATP enerjinin kendisidir" hatası bu görselle kırılır.
 */
export default function MetabolismAtp({ activeRegion = null }) {
  const [detailRegion, setDetailRegion] = useState(null)

  useEffect(() => {
    setDetailRegion(null)
    if (!activeRegion) return undefined
    const timer = window.setTimeout(() => setDetailRegion(activeRegion), 480)
    return () => window.clearTimeout(timer)
  }, [activeRegion])

  const detail = DETAILS[detailRegion]

  return (
    <FigureSvg
      viewBox="0 0 760 480"
      title="Metabolizma: katabolizma, anabolizma ve ATP döngüsü"
      desc="Katabolizmada büyük moleküller yıkılır ve açığa çıkan enerjiyle ADP'den ATP üretilir. Anabolizmada ATP harcanarak küçük moleküllerden büyük moleküller sentezlenir."
    >
      <defs>
        <marker id="met-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/45" />
        </marker>
        <marker id="met-arrow-brand" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-brand-600" />
        </marker>
        <marker id="met-arrow-aqua" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-aqua-600" />
        </marker>
      </defs>

      {/* ---------- KATABOLİZMA (sol) ---------- */}
      <g {...focusedRegion('katabolizma', activeRegion)}>
        <text x="60" y="46" className="fill-aqua-700" fontSize="13" fontWeight="700" letterSpacing="1.5">
          KATABOLİZMA — YIKIM
        </text>
        <Marker n={1} x={40} y={40} regionKey="katabolizma" activeRegion={activeRegion} r={13} />
        <rect x="34" y="70" width="176" height="52" rx="7" className="fill-aqua-500/25" />
        <text x="122" y="102" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="700">
          Büyük moleküller
        </text>
        <line x1="122" y1="132" x2="122" y2="196" className="stroke-aqua-600" strokeWidth="2.5" markerEnd="url(#met-arrow-aqua)" />
        <text x="134" y="170" className="fill-ink/60" fontSize="13">
          enzimlerle yıkılır
        </text>
        <rect x="34" y="206" width="176" height="52" rx="7" className="fill-aqua-500/15" />
        <text x="122" y="238" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="700">
          Küçük moleküller
        </text>
        <text x="122" y="292" textAnchor="middle" className="fill-aqua-700" fontSize="14.5" fontWeight="700">
          enerji açığa çıkar
        </text>
      </g>

      {/* ---------- ATP DÖNGÜSÜ (orta) ---------- */}
      <g {...focusedRegion('atp', activeRegion)}>
        <circle cx="380" cy="188" r="104" className="fill-none stroke-line-strong" strokeWidth="1.5" strokeDasharray="5 5" />
        <Marker n={2} x={380} y={188} regionKey="atp" activeRegion={activeRegion} r={13} />

        <rect x="316" y="66" width="128" height="46" rx="7" className="fill-brand-600" />
        <text x="380" y="96" textAnchor="middle" className="fill-white" fontSize="19" fontWeight="800">
          ATP
        </text>

        <rect x="308" y="264" width="144" height="46" rx="7" className="fill-brand-500/25" />
        <text x="380" y="294" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="700">
          ADP + Pi
        </text>

        {/* sol yay: ADP → ATP (sentez) */}
        <path d="M300 264 A104 104 0 0 1 300 112" className="fill-none stroke-aqua-600" strokeWidth="2.6" markerEnd="url(#met-arrow-aqua)" />
        <text x="268" y="192" textAnchor="end" className="fill-aqua-700" fontSize="13.5" fontWeight="700">
          sentez
        </text>

        {/* sağ yay: ATP → ADP (yıkım) */}
        <path d="M460 112 A104 104 0 0 1 460 264" className="fill-none stroke-brand-600" strokeWidth="2.6" markerEnd="url(#met-arrow-brand)" />
        <text x="492" y="192" className="fill-brand-700" fontSize="13.5" fontWeight="700">
          yıkım
        </text>

        <text x="380" y="356" textAnchor="middle" className="fill-ink/50" fontSize="13.5">
          ATP tükenmez; sürekli kurulup bozulur
        </text>
      </g>

      {/* ---------- ANABOLİZMA (sağ) ---------- */}
      <g {...focusedRegion('anabolizma', activeRegion)}>
        <text x="700" y="46" textAnchor="end" className="fill-brand-700" fontSize="13" fontWeight="700" letterSpacing="1.5">
          ANABOLİZMA — SENTEZ
        </text>
        <Marker n={3} x={720} y={40} regionKey="anabolizma" activeRegion={activeRegion} r={13} />
        <rect x="550" y="206" width="176" height="52" rx="7" className="fill-brand-500/15" />
        <text x="638" y="238" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="700">
          Küçük moleküller
        </text>
        <line x1="638" y1="196" x2="638" y2="132" className="stroke-brand-600" strokeWidth="2.5" markerEnd="url(#met-arrow-brand)" />
        <text x="650" y="170" className="fill-ink/60" fontSize="13">
          enzimlerle birleşir
        </text>
        <rect x="550" y="70" width="176" height="52" rx="7" className="fill-brand-500/30" />
        <text x="638" y="102" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="700">
          Büyük moleküller
        </text>
        <text x="638" y="292" textAnchor="middle" className="fill-brand-700" fontSize="14.5" fontWeight="700">
          enerji harcanır
        </text>
      </g>

      <g opacity={detail ? 1 : 0} style={{ transition: 'opacity .35s ease' }}>
        <line x1="34" y1="382" x2="726" y2="382" className="stroke-line-strong" strokeWidth="1" />
        <text x="48" y="412" className="fill-brand-800" fontSize="14.5" fontWeight="900">
          {detail?.title}
        </text>
        <text x="380" y="412" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="850">
          {detail?.equation}
        </text>
        <text x="380" y="447" textAnchor="middle" className="fill-ink/62" fontSize="13.5">
          {detail?.note}
        </text>
      </g>
    </FigureSvg>
  )
}
