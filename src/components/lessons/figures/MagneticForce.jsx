import { FigureSvg, region } from './primitives'

/**
 * MANYETİK KUVVET — v, B ve F'nin yönleri
 * Üç oku aynı çizimde ama üç farklı renkte tutar; öğrencinin sağ el
 * kuralını uygularken hangi okun ne olduğunu karıştırmasını engeller.
 */
export default function MagneticForce({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 620 340"
      title="Manyetik alan içinde hareket eden pozitif yüke etkiyen kuvvet"
      desc="Sayfadan dışarı çıkan manyetik alan içinde sağa doğru hareket eden pozitif yüke yukarı yönlü manyetik kuvvet etki eder."
    >
      <defs>
        <marker id="mf-aqua" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-aqua-600" />
        </marker>
        <marker id="mf-accent" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" className="fill-accent-500" />
        </marker>
      </defs>

      {/* B alanı: sayfadan dışarı — nokta sembolü */}
      <g {...region('B', activeRegion)}>
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5].map((col) => (
            <g key={`${row}-${col}`}>
              <circle cx={90 + col * 88} cy={70 + row * 62} r="9" className="fill-none stroke-brand-400" strokeWidth="1.5" />
              <circle cx={90 + col * 88} cy={70 + row * 62} r="2.5" className="fill-brand-500" />
            </g>
          ))
        )}
        <text x="40" y="36" className="fill-brand-600" fontSize="14" fontWeight="700">
          B — sayfadan dışarı
        </text>
      </g>

      {/* Yük */}
      <circle cx="250" cy="194" r="26" className="fill-ink" />
      <text x="250" y="203" textAnchor="middle" className="fill-paper" fontSize="24" fontWeight="800">+</text>

      {/* Hız */}
      <g {...region('v', activeRegion)}>
        <line x1="282" y1="194" x2="424" y2="194" className="stroke-aqua-600" strokeWidth="4" markerEnd="url(#mf-aqua)" />
        <text x="352" y="182" textAnchor="middle" className="fill-aqua-700" fontSize="17" fontWeight="800">v</text>
      </g>

      {/* Kuvvet */}
      <g {...region('F', activeRegion)}>
        <line x1="250" y1="162" x2="250" y2="52" className="stroke-accent-500" strokeWidth="4" markerEnd="url(#mf-accent)" />
        <text x="268" y="100" className="fill-accent-600" fontSize="17" fontWeight="800">F</text>
      </g>

      <text x="40" y="308" className="fill-ink/55" fontSize="13.5">
        Sağ el kuralı: parmaklar v yönünde, avuç içi B'yi kesiyorsa başparmak F'yi verir.
      </text>
      <text x="40" y="328" className="fill-ink/55" fontSize="13.5">
        Yük negatifse bulduğun yönü ters çevir.
      </text>
    </FigureSvg>
  )
}
