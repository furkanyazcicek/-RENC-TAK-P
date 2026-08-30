/**
 * Basit Bohr atom modeli.
 *
 * Not: Bohr modeli elektronların gerçekte nasıl davrandığını göstermez;
 * katman (kabuk) dağılımını görselleştirmek için kullanılan tarihsel bir
 * modeldir. Bu not arayüzde de öğrenciye söylenir.
 */
export default function BohrModeli({ element, boyut = 260, hareketli = true }) {
  if (!element) return null
  const merkez = boyut / 2
  const katmanlar = element.katmanlar
  const enDisYaricap = merkez - 22
  const ilkYaricap = 30
  const adim = katmanlar.length > 1 ? (enDisYaricap - ilkYaricap) / (katmanlar.length - 1) : 0

  return (
    <svg className="ka-bohr" viewBox={`0 0 ${boyut} ${boyut}`} width={boyut} height={boyut} role="img"
      aria-label={`${element.ad} atomunun Bohr modeli: katman dağılımı ${katmanlar.join(', ')}`}>
      <defs>
        <radialGradient id="ka-cekirdek" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffd7d2" />
          <stop offset="55%" stopColor="#e2453c" />
          <stop offset="100%" stopColor="#8f231d" />
        </radialGradient>
      </defs>

      {katmanlar.map((sayi, i) => {
        const r = ilkYaricap + adim * i
        const sure = 14 + i * 7
        return (
          <g key={i}>
            <circle cx={merkez} cy={merkez} r={r} fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="2 4" />
            <g
              className={hareketli ? 'ka-bohr-elektron' : undefined}
              style={hareketli ? { animationDuration: `${sure}s`, transformOrigin: `${merkez}px ${merkez}px` } : undefined}
            >
              {Array.from({ length: sayi }).map((_, j) => {
                const aci = (j / sayi) * Math.PI * 2
                return (
                  <circle
                    key={j}
                    cx={merkez + Math.cos(aci) * r}
                    cy={merkez + Math.sin(aci) * r}
                    r="4.2"
                    fill="rgb(var(--ka-vurgu))"
                    stroke="rgb(var(--ka-yuzey))"
                    strokeWidth="1"
                  />
                )
              })}
            </g>
            <text
              x={merkez} y={merkez - r - 4}
              textAnchor="middle" fontSize="9.5" fontWeight="600"
              fill="currentColor" opacity="0.55"
            >
              {sayi}e⁻
            </text>
          </g>
        )
      })}

      <circle cx={merkez} cy={merkez} r="21" fill="url(#ka-cekirdek)" />
      <text x={merkez} y={merkez - 4} textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff">{element.atomNo}p⁺</text>
      <text x={merkez} y={merkez + 8} textAnchor="middle" fontSize="10" fontWeight="700" fill="#ffffffcc">{element.notron}n⁰</text>
    </svg>
  )
}
