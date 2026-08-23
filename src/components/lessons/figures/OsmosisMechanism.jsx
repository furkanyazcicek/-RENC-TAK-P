import { FigureSvg, Marker, region } from './primitives'

/**
 * OSMOZUN MEKANİZMASI
 *
 * Şemanın çözmeye çalıştığı tek kafa karışıklığı şu: osmozda ne "çoktan
 * aza" ne de "azdan çoğa" tek başına doğru. Cevap ==neye baktığına==
 * bağlı:
 *
 *   SU açısından    → çoktan aza (suyun bol olduğu yerden az olduğu yere)
 *   ÇÖZÜNEN açısından → azdan çoğa gidiyormuş gibi görünür
 *
 * Bu yüzden şemada hem su okları hem çözünen molekülleri var ve çözünenin
 * geçemediği açıkça işaretli. Öğrenci ikisini aynı anda görmeden bu ayrımı
 * kuramıyor.
 */

const MEMBRANE_X = 380

export default function OsmosisMechanism({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 400"
      title="Seçici geçirgen zarla ayrılmış iki bölme arasında osmoz"
      desc="Su, çözünen derişiminin düşük olduğu bölmeden yüksek olduğu bölmeye net olarak geçer. Çözünen moleküller zardan geçemez, bu yüzden derişik tarafın sıvı seviyesi yükselir."
    >
      <defs>
        <marker id="os-water" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
          <path d="M0,0 L0,7 L9,3.5 z" className="fill-info-600" />
        </marker>
        <marker id="os-back" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-info-500/60" />
        </marker>
      </defs>

      {/* Kap */}
      <path d="M80 96 V 340 H 680 V 96" className="fill-none stroke-ink/40" strokeWidth="3" />

      {/* Sıvılar */}
      <rect x="82" y="196" width={MEMBRANE_X - 82} height="142" className="fill-info-500/12" />
      <rect x={MEMBRANE_X} y="150" width={678 - MEMBRANE_X} height="188" className="fill-accent-400/16" />

      {/* Sıvı yüzeyleri */}
      <line x1="82" y1="196" x2={MEMBRANE_X} y2="196" className="stroke-info-600" strokeWidth="2.5" />
      <line x1={MEMBRANE_X} y1="150" x2="678" y2="150" className="stroke-accent-500" strokeWidth="2.5" />

      {/* Çözünen moleküller — yalnızca sağda */}
      {[[430, 200], [500, 240], [570, 190], [620, 260], [460, 300], [545, 310], [640, 200]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="11" className="fill-accent-500/80" />
      ))}

      {/* Zar */}
      <g {...region('zar', activeRegion)}>
        <line x1={MEMBRANE_X} y1="96" x2={MEMBRANE_X} y2="340" className="stroke-brand-600" strokeWidth="3.5" strokeDasharray="9 6" />
        <Marker n={1} x={MEMBRANE_X} y={74} regionKey="zar" activeRegion={activeRegion} r={13} />
        <text x={MEMBRANE_X} y="50" textAnchor="middle" className="fill-brand-700" fontSize="12.5" fontWeight="700" letterSpacing="1.2">
          SEÇİCİ GEÇİRGEN ZAR
        </text>
      </g>

      {/* Su hareketi */}
      <g {...region('su-hareketi', activeRegion)}>
        {[236, 276, 316].map((y) => (
          <line key={y} x1={MEMBRANE_X - 78} y1={y} x2={MEMBRANE_X + 78} y2={y} className="stroke-info-600" strokeWidth="3" markerEnd="url(#os-water)" />
        ))}
        {/* Ters yönde de geçiş var ama net akış tek yönde */}
        <line x1={MEMBRANE_X + 54} y1="352" x2={MEMBRANE_X - 54} y2="352" className="stroke-info-500/60" strokeWidth="2" strokeDasharray="5 4" markerEnd="url(#os-back)" />
        <text x={MEMBRANE_X} y="376" textAnchor="middle" className="fill-ink/50" fontSize="11.5">
          geçiş çift yönlüdür — net akış tek yönde
        </text>
        <Marker n={2} x={MEMBRANE_X - 118} y={276} regionKey="su-hareketi" activeRegion={activeRegion} r={13} />
      </g>

      {/* Çözünen geçemez */}
      <g {...region('zar', activeRegion)}>
        <circle cx={MEMBRANE_X + 34} cy="122" r="11" className="fill-accent-500/80" />
        <line x1={MEMBRANE_X + 22} y1="122" x2={MEMBRANE_X - 26} y2="122" className="stroke-accent-500/70" strokeWidth="2.4" strokeDasharray="5 4" />
        <g className="stroke-danger-500" strokeWidth="3.4" strokeLinecap="round">
          <line x1={MEMBRANE_X - 12} y1="112" x2={MEMBRANE_X + 8} y2="132" />
          <line x1={MEMBRANE_X + 8} y1="112" x2={MEMBRANE_X - 12} y2="132" />
        </g>
        <text x={MEMBRANE_X - 44} y="126" textAnchor="end" className="fill-danger-600" fontSize="12" fontWeight="700">
          çözünen geçemez
        </text>
      </g>

      {/* Bölme etiketleri */}
      <text x="106" y="132" className="fill-info-700" fontSize="13" fontWeight="800" letterSpacing="1.1">
        AZ DERİŞİK
      </text>
      <text x="106" y="152" className="fill-ink/55" fontSize="12">
        su oranı yüksek
      </text>

      <text x="654" y="112" textAnchor="end" className="fill-accent-700" fontSize="13" fontWeight="800" letterSpacing="1.1">
        ÇOK DERİŞİK
      </text>
      <text x="654" y="132" textAnchor="end" className="fill-ink/55" fontSize="12">
        su oranı düşük
      </text>

      {/* Seviye farkı */}
      <g {...region('seviye-farki', activeRegion)}>
        <line x1="700" y1="150" x2="700" y2="196" className="stroke-ink/55" strokeWidth="2" />
        <line x1="692" y1="150" x2="708" y2="150" className="stroke-ink/55" strokeWidth="2" />
        <line x1="692" y1="196" x2="708" y2="196" className="stroke-ink/55" strokeWidth="2" />
        <Marker n={3} x={730} y={173} regionKey="seviye-farki" activeRegion={activeRegion} r={13} />
        <text x="700" y="228" textAnchor="middle" className="fill-ink/55" fontSize="11.5">
          seviye
        </text>
        <text x="700" y="244" textAnchor="middle" className="fill-ink/55" fontSize="11.5">
          farkı
        </text>
      </g>
    </FigureSvg>
  )
}
