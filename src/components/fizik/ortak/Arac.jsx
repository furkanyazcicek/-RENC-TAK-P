// Uygulamadaki sabit ivmeli hareket anlatımının ortak araç çizimi.
export default function Arac({ x = 0, y = 0, opaklik = 1, aktif = false }) {
  return (
    <g transform={`translate(${x} ${y})`} opacity={opaklik}>
      {aktif ? <ellipse cx="0" cy="7" rx="72" ry="52" fill="#22D3EE" opacity="0.11" /> : null}
      <path d="M-62 10 L-52-20 Q-48-34-30-36 L24-36 Q41-35 50-18 L63 4 L63 23 Q63 31 54 31 H-54 Q-64 31-64 21 Z" fill="#22D3EE" />
      <path d="M-34-29 H18 Q30-28 38-11 H-42 Z" fill="#10152D" opacity="0.85" />
      <path d="M-4-29 V-11" stroke="#5EE7F5" strokeWidth="4" opacity="0.75" />
      <circle cx="-39" cy="29" r="14" fill="#0A0D1C" stroke="#78819E" strokeWidth="5" />
      <circle cx="39" cy="29" r="14" fill="#0A0D1C" stroke="#78819E" strokeWidth="5" />
      <rect x="50" y="1" width="12" height="10" rx="4" fill="#F8FAFF" opacity="0.9" />
    </g>
  )
}
