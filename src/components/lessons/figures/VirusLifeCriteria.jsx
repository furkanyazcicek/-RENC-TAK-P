import { FigureSvg, Marker, region } from './primitives'

const CRITERIA = [
  { key: 'genetik', title: 'Genetik madde', result: 'VAR', note: 'DNA veya RNA taşır', x: 42, y: 54, pass: true },
  { key: 'cogalma', title: 'Çoğalma', result: 'KOŞULLU', note: 'Yalnızca konak hücre içinde', x: 452, y: 54, pass: true },
  { key: 'hucresel', title: 'Hücresel yapı', result: 'YOK', note: 'Sitoplazma ve organel bulunmaz', x: 42, y: 306, pass: false },
  { key: 'metabolizma', title: 'Bağımsız metabolizma', result: 'YOK', note: 'Kendi ATP’sini ve proteinini üretemez', x: 452, y: 306, pass: false },
]

export default function VirusLifeCriteria({ activeRegion = null }) {
  const selected = CRITERIA.find((criterion) => criterion.key === activeRegion)

  return (
    <FigureSvg
      viewBox="0 0 820 540"
      title="Virüslerin canlılık ölçütleri"
      desc="Virüsler genetik madde taşır ve konak hücre içinde çoğalabilir; ancak hücresel yapıları ve bağımsız metabolizmaları yoktur. Bu nedenle tam anlamıyla canlı sayılmazlar."
    >
      <text x="410" y="30" textAnchor="middle" className="fill-ink/45" fontSize="13" fontWeight="800" letterSpacing="1.5">
        TEK ÖZELLİK YETMEZ · ÖLÇÜTLER BİRLİKTE ARANIR
      </text>

      {CRITERIA.map((criterion, index) => (
        <g key={criterion.key} {...region(criterion.key, activeRegion)}>
          <rect
            x={criterion.x}
            y={criterion.y}
            width="326"
            height="116"
            rx="10"
            className={criterion.pass ? 'fill-success-50 stroke-success-300' : 'fill-danger-50 stroke-danger-300'}
            strokeWidth={activeRegion === criterion.key ? 2.6 : 1.25}
          />
          <Marker n={index + 1} x={criterion.x + 12} y={criterion.y + 14} regionKey={criterion.key} activeRegion={activeRegion} r={14} />
          <text x={criterion.x + 36} y={criterion.y + 32} className="fill-ink" fontSize="15" fontWeight="900">
            {criterion.title}
          </text>
          <rect
            x={criterion.x + 224}
            y={criterion.y + 14}
            width="82"
            height="28"
            rx="14"
            className={criterion.pass ? 'fill-success-600' : 'fill-danger-500'}
          />
          <text x={criterion.x + 265} y={criterion.y + 33} textAnchor="middle" className="fill-white" fontSize="11.5" fontWeight="900">
            {criterion.result}
          </text>
          <text x={criterion.x + 28} y={criterion.y + 73} className="fill-ink/65" fontSize="13.5">
            {criterion.note}
          </text>
          <text x={criterion.x + 28} y={criterion.y + 96} className={criterion.pass ? 'fill-success-700' : 'fill-danger-600'} fontSize="12.5" fontWeight="800">
            {criterion.pass ? 'canlılara benzeyen özellik' : 'temel canlılık ölçütü eksik'}
          </text>
        </g>
      ))}

      <g opacity={activeRegion ? 0.12 : 1} style={{ transition: 'opacity .4s ease' }}>
        <circle cx="410" cy="242" r="56" className="fill-brand-500/12 stroke-brand-400" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const radians = (angle * Math.PI) / 180
          const x1 = 410 + Math.cos(radians) * 57
          const y1 = 242 + Math.sin(radians) * 57
          const x2 = 410 + Math.cos(radians) * 75
          const y2 = 242 + Math.sin(radians) * 75
          return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-brand-500" strokeWidth="3" strokeLinecap="round" />
        })}
        <path d="M378 238 Q410 208 442 238 Q410 272 378 238Z" className="fill-brand-500/35" />
        <text x="410" y="250" textAnchor="middle" className="fill-brand-800" fontSize="15" fontWeight="900">VİRÜS</text>
      </g>

      <line x1="42" y1="458" x2="778" y2="458" className="stroke-line-strong" strokeWidth="1" />
      <text x="410" y="486" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="900">
        Sonuç: canlı ile cansız arasındaki sınırda
      </text>
      <text x="410" y="510" textAnchor="middle" className="fill-ink/60" fontSize="13.5">
        {selected ? selected.note : 'Genetik madde ve çoğalma tek başına yeterli değildir; hücresel yapı ve metabolizma da gerekir.'}
      </text>
    </FigureSvg>
  )
}
