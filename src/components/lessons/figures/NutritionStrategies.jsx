import { useId } from 'react'
import { FigureSvg, Marker, region } from './primitives'

const DETAILS = {
  ototrof: 'Karbon kaynağı CO₂ gibi inorganik maddelerdir; organik besini canlı kendisi kurar.',
  heterotrof: 'Karbon kaynağı başka canlıların ürettiği hazır organik maddelerdir.',
  ortak: 'Kaynakları farklı olsa da iki grup da organik besini hücresel solunumla ATP’ye çevirir.',
}

export default function NutritionStrategies({ activeRegion = null }) {
  const rawId = useId().replace(/:/g, '')
  const arrowId = `nutrition-arrow-${rawId}`
  const selectedText = DETAILS[activeRegion]

  return (
    <FigureSvg
      viewBox="0 0 820 500"
      title="Ototrof ve heterotrof beslenme stratejilerinin ortak enerji yolu"
      desc="Ototroflar inorganik maddelerden organik besin üretir, heterotroflar organik besini hazır alır. İki grup da organik besinleri hücresel solunumda kullanarak ATP üretir."
    >
      <defs>
        <marker id={arrowId} markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/40" />
        </marker>
      </defs>

      <text x="410" y="30" textAnchor="middle" className="fill-ink/45" fontSize="13" fontWeight="800" letterSpacing="1.5">
        ORGANİK MADDEYE GİDEN İKİ YOL
      </text>

      <g {...region('ototrof', activeRegion)}>
        <Marker n={1} x={55} y={66} regionKey="ototrof" activeRegion={activeRegion} r={14} />
        <rect x="56" y="54" width="314" height="208" rx="12" className="fill-aqua-500/[0.06] stroke-aqua-400" strokeWidth={activeRegion === 'ototrof' ? 2.5 : 1.25} />
        <text x="82" y="88" className="fill-aqua-800" fontSize="17" fontWeight="900">OTOTROF</text>
        <text x="82" y="110" className="fill-ink/55" fontSize="13">organik besini kendisi üretir</text>

        <g>
          <circle cx="112" cy="164" r="28" className="fill-aqua-500/18 stroke-aqua-400" strokeWidth="1.4" />
          <text x="112" y="160" textAnchor="middle" className="fill-ink" fontSize="14" fontWeight="800">CO₂</text>
          <text x="112" y="179" textAnchor="middle" className="fill-ink/55" fontSize="11.5">+ H₂O</text>
        </g>
        <path d="M148 164 H225" className="stroke-aqua-600" strokeWidth="2.5" markerEnd={`url(#${arrowId})`} />
        <text x="187" y="148" textAnchor="middle" className="fill-aqua-800" fontSize="11.5" fontWeight="750">ışık / kimyasal enerji</text>
        <rect x="239" y="130" width="102" height="68" rx="8" className="fill-aqua-500/22" />
        <text x="290" y="158" textAnchor="middle" className="fill-ink" fontSize="13.5" fontWeight="850">Organik</text>
        <text x="290" y="176" textAnchor="middle" className="fill-ink" fontSize="13.5" fontWeight="850">besin</text>
        <text x="82" y="230" className="fill-ink/60" fontSize="12.5">Bitki · alg · siyanobakteri · kemoototrof bakteri</text>
      </g>

      <g {...region('heterotrof', activeRegion)}>
        <Marker n={2} x={450} y={66} regionKey="heterotrof" activeRegion={activeRegion} r={14} />
        <rect x="451" y="54" width="314" height="208" rx="12" className="fill-brand-500/[0.055] stroke-brand-300" strokeWidth={activeRegion === 'heterotrof' ? 2.5 : 1.25} />
        <text x="477" y="88" className="fill-brand-800" fontSize="17" fontWeight="900">HETEROTROF</text>
        <text x="477" y="110" className="fill-ink/55" fontSize="13">organik besini hazır alır</text>

        <g>
          <circle cx="512" cy="164" r="30" className="fill-brand-500/16 stroke-brand-300" strokeWidth="1.4" />
          <path d="M499 162 Q512 143 525 162 Q512 183 499 162Z" className="fill-brand-500/45" />
          <text x="512" y="212" textAnchor="middle" className="fill-ink/55" fontSize="11.5">başka canlı</text>
        </g>
        <path d="M550 164 H625" className="stroke-brand-500" strokeWidth="2.5" markerEnd={`url(#${arrowId})`} />
        <rect x="639" y="130" width="102" height="68" rx="8" className="fill-brand-500/20" />
        <text x="690" y="158" textAnchor="middle" className="fill-ink" fontSize="13.5" fontWeight="850">Hazır</text>
        <text x="690" y="176" textAnchor="middle" className="fill-ink" fontSize="13.5" fontWeight="850">organik besin</text>
        <text x="477" y="230" className="fill-ink/60" fontSize="12.5">Hayvan · mantar · çoğu bakteri</text>
      </g>

      <g {...region('ortak', activeRegion)}>
        <Marker n={3} x={410} y={306} regionKey="ortak" activeRegion={activeRegion} r={14} />
        <path d="M290 268 C290 310 335 320 365 338" className="fill-none stroke-ink/35" strokeWidth="2.2" markerEnd={`url(#${arrowId})`} />
        <path d="M690 268 C690 310 520 320 455 338" className="fill-none stroke-ink/35" strokeWidth="2.2" markerEnd={`url(#${arrowId})`} />
        <rect x="290" y="325" width="240" height="80" rx="10" className="fill-surface-sunken stroke-line-strong" strokeWidth={activeRegion === 'ortak' ? 2.5 : 1.25} />
        <text x="410" y="355" textAnchor="middle" className="fill-ink" fontSize="16" fontWeight="900">Hücresel solunum</text>
        <text x="410" y="380" textAnchor="middle" className="fill-ink/60" fontSize="13">organik bağ enerjisi → ATP</text>
        <path d="M410 408 V440" className="stroke-brand-600" strokeWidth="3" markerEnd={`url(#${arrowId})`} />
        <rect x="365" y="438" width="90" height="38" rx="19" className="fill-brand-600" />
        <text x="410" y="463" textAnchor="middle" className="fill-white" fontSize="17" fontWeight="900">ATP</text>
      </g>

      <g opacity={selectedText ? 1 : 0} style={{ transition: 'opacity .35s ease' }}>
        <text x="410" y="494" textAnchor="middle" className="fill-ink/65" fontSize="12.5" fontWeight="700">
          {selectedText}
        </text>
      </g>
    </FigureSvg>
  )
}
