import { FigureSvg, Marker, region } from './primitives'

/**
 * SODYUM–POTASYUM POMPASI
 *
 * Aktif taşımanın ders kitabı örneği. Şemanın taşıdığı asıl bilgi, ok
 * yönleriyle derişim etiketlerinin ==birbirine ters== olması: sodyum
 * dışarıda zaten çokken yine dışarı, potasyum içeride zaten çokken yine
 * içeri taşınıyor.
 *
 * Öğrenci bu tersliği görmeden "derişim farkına karşı" ifadesini
 * ezberliyor. Bu yüzden her iki tarafta da derişim durumu açıkça yazıldı
 * ve oklar o yazıların üzerinden geçiyor.
 *
 * 3 Na⁺ / 2 K⁺ / 1 ATP oranı bilinçli olarak sayı ile gösterildi; TYT'de
 * doğrudan bu oran sorulabiliyor.
 */

const HEAD_XS = Array.from({ length: 30 }, (_, i) => 34 + i * 24)
const TOP_Y = 168
const BOT_Y = 250

function Lipid({ x, y, flip = false }) {
  const d = flip ? -1 : 1
  return (
    <g>
      <circle cx={x} cy={y} r="8" className="fill-brand-600" />
      <path d={`M${x - 3} ${y + d * 7} q -5 ${d * 12} 0 ${d * 24}`} className="fill-none stroke-warning-500" strokeWidth="2.6" strokeLinecap="round" />
      <path d={`M${x + 3} ${y + d * 7} q 5 ${d * 12} 0 ${d * 24}`} className="fill-none stroke-warning-500" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  )
}

export default function ActiveTransportPump({ activeRegion = null }) {
  const gap = (x) => x < 322 || x > 438

  return (
    <FigureSvg
      viewBox="0 0 760 420"
      title="Sodyum–potasyum pompası"
      desc="Pompa, üç sodyum iyonunu hücre dışına ve iki potasyum iyonunu hücre içine taşır. Her iki taşıma da derişim farkına karşıdır ve bir ATP harcanır."
    >
      <defs>
        <marker id="ap-out" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-danger-500" />
        </marker>
        <marker id="ap-in" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-info-600" />
        </marker>
      </defs>

      {/* Bölme zeminleri */}
      <rect x="20" y="52" width="720" height="106" rx="8" className="fill-info-500/8" />
      <rect x="20" y="260" width="720" height="106" rx="8" className="fill-aqua-500/10" />

      <text x="40" y="78" className="fill-info-700" fontSize="12" fontWeight="700" letterSpacing="1.3">
        HÜCRE DIŞI
      </text>
      <text x="40" y="352" className="fill-aqua-700" fontSize="12" fontWeight="700" letterSpacing="1.3">
        SİTOPLAZMA
      </text>

      {/* Çift tabaka */}
      {HEAD_XS.filter(gap).map((x) => (
        <Lipid key={`t${x}`} x={x} y={TOP_Y} />
      ))}
      {HEAD_XS.filter(gap).map((x) => (
        <Lipid key={`b${x}`} x={x} y={BOT_Y} flip />
      ))}

      {/* Pompa proteini */}
      <g {...region('pompa', activeRegion)}>
        <rect x="322" y="146" width="116" height="126" rx="22" className="fill-brand-600" />
        <text x="380" y="216" textAnchor="middle" className="fill-white" fontSize="13" fontWeight="800">
          POMPA
        </text>
        <Marker n={2} x={380} y={124} regionKey="pompa" activeRegion={activeRegion} r={13} />
      </g>

      {/* Derişim durumu — okların ters yönde olduğunu göstermek için */}
      <g {...region('gradyan-karsiti', activeRegion)}>
        <Marker n={1} x={44} y={112} regionKey="gradyan-karsiti" activeRegion={activeRegion} r={13} />
        <text x="66" y="118" className="fill-danger-600" fontSize="13" fontWeight="700">
          Na⁺ zaten dışarıda ÇOK
        </text>
        <text x="66" y="316" className="fill-info-700" fontSize="13" fontWeight="700">
          K⁺ zaten içeride ÇOK
        </text>
      </g>

      {/* Na+ dışarı — derişime karşı */}
      <g {...region('gradyan-karsiti', activeRegion)}>
        {[214, 250, 286].map((x, i) => (
          <g key={x}>
            <circle cx={x} cy="290" r="14" className="fill-danger-500/80" />
            <text x={x} y="295" textAnchor="middle" className="fill-white" fontSize="11" fontWeight="800">Na⁺</text>
            <line x1={x} y1="272" x2={x} y2="140" className="stroke-danger-500" strokeWidth="2.4" markerEnd="url(#ap-out)" />
          </g>
        ))}
        <text x="250" y="332" textAnchor="middle" className="fill-danger-600" fontSize="13" fontWeight="800">
          3 Na⁺ dışarı
        </text>
      </g>

      {/* K+ içeri — derişime karşı */}
      <g {...region('gradyan-karsiti', activeRegion)}>
        {[500, 540].map((x) => (
          <g key={x}>
            <circle cx={x} cy="128" r="14" className="fill-info-600/80" />
            <text x={x} y="133" textAnchor="middle" className="fill-white" fontSize="12" fontWeight="800">K⁺</text>
            <line x1={x} y1="146" x2={x} y2="278" className="stroke-info-600" strokeWidth="2.4" markerEnd="url(#ap-in)" />
          </g>
        ))}
        <text x="520" y="102" textAnchor="middle" className="fill-info-700" fontSize="13" fontWeight="800">
          2 K⁺ içeri
        </text>
      </g>

      {/* ATP */}
      <g {...region('atp', activeRegion)}>
        <rect x="596" y="196" width="70" height="34" rx="8" className="fill-brand-600" />
        <text x="631" y="219" textAnchor="middle" className="fill-white" fontSize="14" fontWeight="800">ATP</text>
        <line x1="596" y1="213" x2="446" y2="213" className="stroke-brand-600" strokeWidth="2.4" strokeDasharray="6 4" />
        <text x="631" y="252" textAnchor="middle" className="fill-brand-700" fontSize="12" fontWeight="700">
          1 ATP harcanır
        </text>
        <Marker n={3} x={694} y={213} regionKey="atp" activeRegion={activeRegion} r={13} />
      </g>

      <text x="380" y="400" textAnchor="middle" className="fill-ink/60" fontSize="13">
        Her iki iyon da zaten çok olduğu tarafa taşınıyor — bu yüzden ATP gerekiyor.
      </text>
    </FigureSvg>
  )
}
