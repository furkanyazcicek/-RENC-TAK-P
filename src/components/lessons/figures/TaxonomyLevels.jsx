import { FigureSvg, Marker, region } from './primitives'

/**
 * SINIFLANDIRMA BİRİMLERİ
 *
 * Şemanın taşıdığı asıl bilgi birim isimleri DEĞİL, ==iki zıt eğilim==:
 * âlemden türe inildikçe birey sayısı azalır, ortak özellik ve akrabalık
 * artar. Sınav soruları neredeyse tamamen bu iki eğilimden çıkıyor.
 *
 * Bu yüzden basamaklar daralarak çiziliyor (birey sayısı) ve iki yanda
 * ters yönlü iki ok var. İsimler ezberlenecek liste değil, o daralmanın
 * durakları.
 *
 * Sağda insanın sınıflandırması var; soyut basamakları somut bir örneğe
 * bağlamak için.
 */

const LEVELS = [
  { name: 'Âlem', ex: 'Animalia' },
  { name: 'Şube', ex: 'Chordata' },
  { name: 'Sınıf', ex: 'Mammalia' },
  { name: 'Takım', ex: 'Primates' },
  { name: 'Aile', ex: 'Hominidae' },
  { name: 'Cins', ex: 'Homo' },
  { name: 'Tür', ex: 'sapiens' },
]

const TOP = 88
const ROW = 46
const CX = 300

export default function TaxonomyLevels({ activeRegion = null }) {
  return (
    <FigureSvg
      viewBox="0 0 760 456"
      title="Sınıflandırma birimleri ve aralarındaki ilişki"
      desc="Âlemden türe doğru inildikçe gruptaki birey sayısı ve çeşitlilik azalır, bireylerin ortak özellikleri ve akrabalık derecesi artar."
    >
      <defs>
        <marker id="tx-down" markerWidth="9" markerHeight="9" refX="4" refY="7" orient="auto">
          <path d="M0,0 L8,0 L4,8 z" className="fill-ink/50" />
        </marker>
      </defs>

      {/* Basamaklar */}
      {LEVELS.map((lv, i) => {
        const w = 300 - i * 34
        const y = TOP + i * ROW
        return (
          <g key={lv.name}>
            <rect x={CX - w / 2} y={y} width={w} height={ROW - 10} rx="6" className={i === 6 ? 'fill-brand-600' : 'fill-brand-500/25'} />
            <text
              x={CX}
              y={y + 24}
              textAnchor="middle"
              className={i === 6 ? 'fill-white' : 'fill-ink'}
              fontSize="15"
              fontWeight={i === 6 ? '800' : '700'}
            >
              {lv.name}
            </text>
          </g>
        )
      })}

      {/* Sol ok — azalan */}
      <g {...region('azalan', activeRegion)}>
        <line x1="88" y1={TOP + 6} x2="88" y2={TOP + 6 * ROW + 24} className="stroke-ink/50" strokeWidth="2.4" markerEnd="url(#tx-down)" />
        <Marker n={1} x={88} y={TOP - 24} regionKey="azalan" activeRegion={activeRegion} r={13} />
        <text x="74" y={TOP + 96} textAnchor="middle" className="fill-ink/60" fontSize="12.5" fontWeight="700" transform={`rotate(-90 74 ${TOP + 96})`}>
          BİREY SAYISI VE ÇEŞİTLİLİK AZALIR
        </text>
      </g>

      {/* Sağ ok — artan */}
      <g {...region('artan', activeRegion)}>
        <line x1="466" y1={TOP + 6} x2="466" y2={TOP + 6 * ROW + 24} className="stroke-brand-600" strokeWidth="2.4" markerEnd="url(#tx-down)" />
        <Marker n={2} x={466} y={TOP - 24} regionKey="artan" activeRegion={activeRegion} r={13} />
        <text x="482" y={TOP + 96} textAnchor="middle" className="fill-brand-700" fontSize="12.5" fontWeight="700" transform={`rotate(-90 482 ${TOP + 96})`}>
          ORTAK ÖZELLİK VE AKRABALIK ARTAR
        </text>
      </g>

      {/* Örnek — insan */}
      <g {...region('ornek', activeRegion)}>
        <Marker n={3} x={556} y={TOP - 24} regionKey="ornek" activeRegion={activeRegion} r={13} />
        <text x="578" y={TOP - 19} className="fill-ink/50" fontSize="12" fontWeight="700" letterSpacing="1.2">
          İNSAN ÖRNEĞİ
        </text>
        {LEVELS.map((lv, i) => (
          <text
            key={lv.ex}
            x="556"
            y={TOP + i * ROW + 24}
            className={i === 6 ? 'fill-brand-700' : 'fill-ink/70'}
            fontSize="14"
            fontStyle="italic"
            fontWeight={i >= 5 ? '800' : '600'}
          >
            {lv.ex}
          </text>
        ))}
        {/* Alttaki künye satırıyla çakışmaması için "Tür" kutusunun hemen
            altına alındı; ikisi aynı hizadayken üst üste biniyordu. */}
        <text x="556" y={TOP + 6 * ROW + 46} className="fill-ink/50" fontSize="12">
          Tür adı: <tspan fontStyle="italic" fontWeight="700">Homo sapiens</tspan>
        </text>
      </g>

      <text x="380" y="444" textAnchor="middle" className="fill-ink/60" fontSize="12.5">
        Aynı türdeki iki birey, aynı âlemdeki iki bireyden çok daha yakın akrabadır.
      </text>
    </FigureSvg>
  )
}
