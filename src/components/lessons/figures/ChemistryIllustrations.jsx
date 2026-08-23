import InteractiveIllustration from './InteractiveIllustration'

const languageRegions = [
  { key: 'makro', shape: { x: 0, y: 0, width: 512, height: 1024 }, zoom: { x: 16.7, y: 50, scale: 1.3 } },
  { key: 'tanecik', shape: { x: 512, y: 0, width: 512, height: 1024 }, zoom: { x: 50, y: 50, scale: 1.3 } },
  { key: 'sembolik', shape: { x: 1024, y: 0, width: 512, height: 1024 }, zoom: { x: 83.3, y: 50, scale: 1.3 } },
]

const languageMarkers = [
  { key: 'makro', title: 'Makroskobik düzey', x: 80, y: 78, targetX: 260, targetY: 310, width: 330 },
  { key: 'tanecik', title: 'Alt mikroskobik düzey', x: 590, y: 78, targetX: 770, targetY: 310, width: 370 },
  { key: 'sembolik', title: 'Sembolik düzey', x: 1100, y: 78, targetX: 1280, targetY: 310, width: 305 },
]

export function ChemistryLanguageLevels({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kimya-bilimi/gosterim-duzeyleri-v1.jpg"
      srcSet="/lesson-assets/kimya-bilimi/gosterim-duzeyleri-v1-900.jpg 900w, /lesson-assets/kimya-bilimi/gosterim-duzeyleri-v1.jpg 1536w"
      alt="Sıvı suyun makroskobik görünümünü, H₂O moleküllerinin tanecik modelini ve sembolik anlatım alanını yan yana gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={languageRegions}
      markers={languageMarkers}
    >
      <g opacity={activeRegion && activeRegion !== 'sembolik' ? 0.16 : 1} style={{ transition: 'opacity .4s ease' }}>
        <rect x="1100" y="330" width="360" height="260" rx="130" fill="#fffdf7" fillOpacity="0.92" stroke="#8b5cf6" strokeWidth="5" />
        <text x="1280" y="475" textAnchor="middle" fill="#6d28d9" fontSize="120" fontWeight="900">H₂O</text>
        <text x="1280" y="535" textAnchor="middle" fill="#2a2730" fillOpacity="0.7" fontSize="28" fontWeight="800">2 H · 1 O</text>
      </g>
    </InteractiveIllustration>
  )
}

const safetyRegions = [
  { key: 'yangin', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.35 } },
  { key: 'maruziyet', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.35 } },
  { key: 'asindirma', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.35 } },
  { key: 'ozel', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.35 } },
]

const safetyMarkers = [
  { key: 'yangin', title: 'Yangın · tepkime', x: 72, y: 72, targetX: 350, targetY: 260, width: 300 },
  { key: 'maruziyet', title: 'Vücuda maruziyet', x: 850, y: 72, targetX: 1160, targetY: 260, width: 330 },
  { key: 'asindirma', title: 'Aşındırma · çevre', x: 72, y: 950, targetX: 350, targetY: 750, width: 325 },
  { key: 'ozel', title: 'Basınç · radyasyon', x: 850, y: 950, targetX: 1160, targetY: 750, width: 340 },
]

function HazardDiamond({ x, y, kind }) {
  const glyph = (() => {
    if (kind === 'flame') return <path d="M0 22 C-18 10 -13 -8 -2 -21 C-1 -10 7 -6 10 -15 C20 -1 18 16 0 22 Z" fill="#29262f" />
    if (kind === 'oxidizer') return <><circle cx="0" cy="13" r="12" fill="none" stroke="#29262f" strokeWidth="5" /><path d="M0 1 C-12 -7 -8 -19 -1 -27 C0 -19 5 -17 8 -23 C15 -13 13 -3 0 1 Z" fill="#29262f" /></>
    if (kind === 'toxic') return <><circle cy="-9" r="13" fill="#29262f" /><circle cx="-5" cy="-11" r="3" fill="white" /><circle cx="5" cy="-11" r="3" fill="white" /><path d="M-16 16 L16 16 M-15 27 L15 6 M-15 6 L15 27" stroke="#29262f" strokeWidth="5" strokeLinecap="round" /></>
    if (kind === 'irritant') return <text x="0" y="23" textAnchor="middle" fill="#29262f" fontSize="58" fontWeight="900">!</text>
    if (kind === 'health') return <><circle cy="-16" r="10" fill="#29262f" /><path d="M-21 28 Q-18 -2 0 -2 Q18 -2 21 28 Z" fill="#29262f" /><path d="M0 3 L4 10 L12 9 L7 16 L10 24 L0 19 L-10 24 L-7 16 L-12 9 L-4 10 Z" fill="white" /></>
    if (kind === 'corrosive') return <><path d="M-25 -15 L-6 -7 M5 -18 L25 -10" stroke="#29262f" strokeWidth="6" strokeLinecap="round" /><path d="M-7 2 L-1 10 M20 1 L14 9" stroke="#29262f" strokeWidth="4" /><path d="M-28 24 H-2 M8 24 H28" stroke="#29262f" strokeWidth="5" strokeLinecap="round" /></>
    if (kind === 'environment') return <><path d="M-27 23 Q-12 10 2 22 Q16 30 28 18 M-17 15 L-8 -2 L2 15 M7 5 Q19 -9 29 1 Q20 15 7 5 Z" fill="none" stroke="#29262f" strokeWidth="4" strokeLinecap="round" /></>
    if (kind === 'gas') return <><rect x="-26" y="-8" width="52" height="17" rx="8" fill="#29262f" /><rect x="20" y="-4" width="11" height="9" rx="2" fill="#29262f" /></>
    return <path d="M-25 18 L-11 3 L-5 12 L2 -20 L9 -7 L20 -17 L17 2 L28 10 L13 15 L15 26 L0 20 L-13 26 L-12 16 Z" fill="#29262f" />
  })()

  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform="rotate(45)"><rect x="-36" y="-36" width="72" height="72" rx="3" fill="white" stroke="#c73b42" strokeWidth="5" /></g>
      {glyph}
    </g>
  )
}

function RadiationBadge({ x, y }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="47" fill="#fff8d8" stroke="#29262f" strokeWidth="3" />
      <circle r="8" fill="#29262f" />
      {[0, 120, 240].map((angle) => <path key={angle} d="M0 -14 L-13 -37 A40 40 0 0 1 13 -37 Z" fill="#29262f" transform={`rotate(${angle})`} />)}
    </g>
  )
}

function SafetySymbols({ activeRegion }) {
  const clusters = [
    { key: 'yangin', items: [['explosive', 70], ['flame', 160], ['oxidizer', 250]], x: 420, y: 430 },
    { key: 'maruziyet', items: [['toxic', 70], ['irritant', 160], ['health', 250]], x: 1190, y: 430 },
    { key: 'asindirma', items: [['corrosive', 90], ['environment', 200]], x: 430, y: 590 },
    { key: 'ozel', items: [['gas', 90]], x: 1200, y: 590 },
  ]

  return clusters.map((cluster) => (
    <g key={cluster.key} opacity={activeRegion && activeRegion !== cluster.key ? 0.12 : 1} style={{ transition: 'opacity .4s ease' }}>
      <rect x={cluster.x - 12} y={cluster.y - 56} width={cluster.items.length * 90 + 34} height="112" rx="56" fill="#fffdf7" fillOpacity="0.9" stroke="#ddd3be" strokeWidth="2" />
      {cluster.items.map(([kind, offset]) => <HazardDiamond key={kind} x={cluster.x + offset - 58} y={cluster.y} kind={kind} />)}
      {cluster.key === 'ozel' && <RadiationBadge x={cluster.x + 122} y={cluster.y} />}
    </g>
  ))
}

export function ChemicalSafetyPictograms({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kimya-bilimi/guvenli-laboratuvar-v2.jpg"
      srcSet="/lesson-assets/kimya-bilimi/guvenli-laboratuvar-v2-900.jpg 900w, /lesson-assets/kimya-bilimi/guvenli-laboratuvar-v2.jpg 1536w"
      alt="Yangın ve tepkime, vücuda maruziyet, aşındırma ve çevre, basınç ve radyasyon risklerine karşı güvenli laboratuvar davranışlarını gösteren dört sahneli bilimsel levha."
      activeRegion={activeRegion}
      regions={safetyRegions}
      markers={safetyMarkers}
    >
      <SafetySymbols activeRegion={activeRegion} />
    </InteractiveIllustration>
  )
}

const toolRegions = [
  { key: 'karistir', shape: { x: 0, y: 0, width: 768, height: 512 }, zoom: { x: 25, y: 25, scale: 1.35 } },
  { key: 'olc', shape: { x: 768, y: 0, width: 768, height: 512 }, zoom: { x: 75, y: 25, scale: 1.35 } },
  { key: 'hazirla', shape: { x: 0, y: 512, width: 768, height: 512 }, zoom: { x: 25, y: 75, scale: 1.35 } },
  { key: 'ayir', shape: { x: 768, y: 512, width: 768, height: 512 }, zoom: { x: 75, y: 75, scale: 1.35 } },
]

const toolMarkers = [
  { key: 'karistir', title: 'Karıştır · ısıt', x: 72, y: 72, targetX: 365, targetY: 280, width: 280 },
  { key: 'olc', title: 'Ölç · aktar', x: 850, y: 72, targetX: 1160, targetY: 280, width: 240 },
  { key: 'hazirla', title: 'Tam hacim hazırla', x: 72, y: 950, targetX: 360, targetY: 750, width: 330 },
  { key: 'ayir', title: 'Karışmayan fazları ayır', x: 850, y: 950, targetX: 1160, targetY: 750, width: 390 },
]

export function LaboratoryTools({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/kimya-bilimi/laboratuvar-araclari-v1.jpg"
      srcSet="/lesson-assets/kimya-bilimi/laboratuvar-araclari-v1-900.jpg 900w, /lesson-assets/kimya-bilimi/laboratuvar-araclari-v1.jpg 1536w"
      alt="Beher, erlenmayer, cam balon, mezür, pipet, büret, balon joje ve ayırma hunisini işlevlerine göre dört grupta gösteren bilimsel laboratuvar levhası."
      activeRegion={activeRegion}
      regions={toolRegions}
      markers={toolMarkers}
    />
  )
}
