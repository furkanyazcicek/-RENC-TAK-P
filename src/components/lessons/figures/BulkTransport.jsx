import { FigureSvg, Marker, region } from './primitives'

/**
 * TOPLU TAŞIMA: ENDOSİTOZ VE EKZOSİTOZ
 *
 * Üç aşamalı iki dizi. Aşamaların ayrı ayrı çizilmesi bilinçli: öğrenciler
 * "zar çukurlaşır, koful oluşur" cümlesini okuyor ama ==zarın kendisinin
 * harcandığını / kazanıldığını== fark etmiyor.
 *
 * Bu yüzden her dizinin altında zar yüzeyi değişimi ayrı bir satır olarak
 * yazıldı: endositozda AZALIR, ekzositozda ARTAR. TYT'de doğrudan sorulan
 * ayrım bu.
 */

const ROW_A = 148
const ROW_B = 316

function MembraneArc({ cx, cy, dip = 0, flip = false }) {
  const d = flip ? -1 : 1
  return (
    <path
      d={`M${cx - 74} ${cy} q 24 ${d * dip} 37 ${d * dip} q 13 0 37 ${-d * dip} `}
      className="fill-none stroke-brand-600"
      strokeWidth="4"
      strokeLinecap="round"
      transform={dip === 0 ? undefined : undefined}
    />
  )
}

export default function BulkTransport({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 440"
      title="Endositoz ve ekzositoz aşamaları"
      desc="Endositozda hücre zarı içeri çökerek maddeyi koful içine alır ve zar yüzeyi azalır. Ekzositozda koful zarla kaynaşır, içeriği dışarı verilir ve zar yüzeyi artar. İkisi de ATP harcar."
    >
      <defs>
        <marker id="bt-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-ink/45" />
        </marker>
      </defs>

      {/* ================= ENDOSİTOZ ================= */}
      <g {...region('endositoz', activeRegion)}>
        <Marker n={1} x={40} y={54} regionKey="endositoz" activeRegion={activeRegion} r={13} />
        <text x="62" y="60" className="fill-ink/70" fontSize="13" fontWeight="800" letterSpacing="1.2">
          ENDOSİTOZ — İÇERİ ALMA
        </text>

        {/* 1. aşama */}
        <line x1="40" y1={ROW_A} x2="188" y2={ROW_A} className="stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        <circle cx="114" cy={ROW_A - 42} r="19" className="fill-accent-400" />
        <text x="114" y={ROW_A + 46} textAnchor="middle" className="fill-ink/55" fontSize="11.5">madde yaklaşır</text>

        {/* 2. aşama */}
        <path d="M256 148 q 26 0 34 30 q 12 26 24 26 q 12 0 24 -26 q 8 -30 34 -30" className="fill-none stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        <circle cx="314" cy={ROW_A + 26} r="19" className="fill-accent-400" />
        <text x="314" y={ROW_A + 82} textAnchor="middle" className="fill-ink/55" fontSize="11.5">zar içeri çöker</text>

        {/* 3. aşama */}
        <line x1="452" y1={ROW_A} x2="600" y2={ROW_A} className="stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        <circle cx="526" cy={ROW_A + 44} r="27" className="fill-none stroke-brand-600" strokeWidth="3.5" />
        <circle cx="526" cy={ROW_A + 44} r="16" className="fill-accent-400" />
        <text x="526" y={ROW_A + 92} textAnchor="middle" className="fill-ink/55" fontSize="11.5">koful oluşur</text>

        <line x1="206" y1={ROW_A + 4} x2="238" y2={ROW_A + 4} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#bt-arrow)" />
        <line x1="402" y1={ROW_A + 4} x2="434" y2={ROW_A + 4} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#bt-arrow)" />

        <text x="628" y={ROW_A + 4} className="fill-danger-600" fontSize="12.5" fontWeight="800">zar yüzeyi</text>
        <text x="628" y={ROW_A + 22} className="fill-danger-600" fontSize="12.5" fontWeight="800">AZALIR</text>
      </g>

      <line x1="30" y1="252" x2="730" y2="252" className="stroke-line-strong" strokeWidth="1" />

      {/* ================= EKZOSİTOZ ================= */}
      <g {...region('ekzositoz', activeRegion)}>
        <Marker n={2} x={40} y={286} regionKey="ekzositoz" activeRegion={activeRegion} r={13} />
        <text x="62" y="292" className="fill-ink/70" fontSize="13" fontWeight="800" letterSpacing="1.2">
          EKZOSİTOZ — DIŞARI VERME
        </text>

        {/* 1. aşama */}
        <line x1="40" y1={ROW_B} x2="188" y2={ROW_B} className="stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        <circle cx="114" cy={ROW_B + 44} r="27" className="fill-none stroke-brand-600" strokeWidth="3.5" />
        <circle cx="114" cy={ROW_B + 44} r="16" className="fill-aqua-500" />
        <text x="114" y={ROW_B + 92} textAnchor="middle" className="fill-ink/55" fontSize="11.5">koful zara gelir</text>

        {/* 2. aşama */}
        <path d="M256 316 q 26 0 34 -30 q 12 -26 24 -26 q 12 0 24 26 q 8 30 34 30" className="fill-none stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        <circle cx="314" cy={ROW_B - 26} r="17" className="fill-aqua-500" />
        <text x="314" y={ROW_B + 46} textAnchor="middle" className="fill-ink/55" fontSize="11.5">zarla kaynaşır</text>

        {/* 3. aşama */}
        <line x1="452" y1={ROW_B} x2="600" y2={ROW_B} className="stroke-brand-600" strokeWidth="4" strokeLinecap="round" />
        {[[500, -46], [532, -62], [560, -40]].map(([x, dy], i) => (
          <circle key={i} cx={x} cy={ROW_B + dy} r="9" className="fill-aqua-500" />
        ))}
        <text x="526" y={ROW_B + 46} textAnchor="middle" className="fill-ink/55" fontSize="11.5">içerik dışarı verilir</text>

        <line x1="206" y1={ROW_B - 4} x2="238" y2={ROW_B - 4} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#bt-arrow)" />
        <line x1="402" y1={ROW_B - 4} x2="434" y2={ROW_B - 4} className="stroke-ink/45" strokeWidth="2" markerEnd="url(#bt-arrow)" />

        <text x="628" y={ROW_B - 4} className="fill-success-700" fontSize="12.5" fontWeight="800">zar yüzeyi</text>
        <text x="628" y={ROW_B + 14} className="fill-success-700" fontSize="12.5" fontWeight="800">ARTAR</text>
      </g>

      <g {...region('atp', activeRegion)}>
        <Marker n={3} x={44} y={418} regionKey="atp" activeRegion={activeRegion} r={13} />
        <text x="66" y="424" className="fill-ink/60" fontSize="12.5">
          İkisi de zarın şekil değiştirmesini gerektirir; bu yüzden ikisi de ATP harcar.
        </text>
      </g>
    </FigureSvg>
  )
}
