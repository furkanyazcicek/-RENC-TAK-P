import { ArrowHeads, FigureSvg, region } from './primitives'

/**
 * LGS FEN — KALDIRAÇ TÜRLERİ
 * ==================================================================
 *
 * NEDEN BU ŞEMA VAR?
 * F.8.5.1.1'in açıklaması kaldıraç üzerinde durulmasını ister ve
 * "Matematiksel bağıntılara girilmez." der. Öğrencinin kaldıraçta
 * görmesi gereken şey bir formül değil, bir YERLEŞİMDİR: destek noktası,
 * yük ve kuvvetten hangisi ortada? Bu soru kaldıracın türünü ve
 * kuvvetten kazanç sağlayıp sağlamadığını belirler.
 *
 * Şema üç paneli yan yana koyar; her panel ayrı vurgulanabilir. Sayı ve
 * uzunluk değeri YOKTUR — program bağıntıya girilmemesini ister.
 *
 * BÖLGE SIRASI (registry ile aynı olmak zorunda):
 *   destek-ortada → yuk-ortada → kuvvet-ortada
 */

const DEFAULT = {
  paneller: [
    { baslik: 'Destek ortada', ornek: 'Tahterevalli, makas, pense' },
    { baslik: 'Yük ortada', ornek: 'El arabası, gazoz açacağı' },
    { baslik: 'Kuvvet ortada', ornek: 'Cımbız, maşa, olta' },
  ],
}

function Destek({ x, y }) {
  return <path d={`M${x},${y} L${x - 13},${y + 22} L${x + 13},${y + 22} Z`} className="fill-ink/70" />
}

function Yuk({ x, y }) {
  return (
    <g>
      <rect x={x - 19} y={y - 34} width="38" height="32" rx="4" className="fill-aqua-100 stroke-aqua-500" strokeWidth="1.6" />
      <text x={x} y={y - 13} textAnchor="middle" className="fill-aqua-700" fontSize="12" fontWeight="700">
        Yük
      </text>
    </g>
  )
}

function Kuvvet({ x, y, yukari }) {
  // Ok çubuğa dokunur; yukarı kuvvet çubuğun altından, aşağı kuvvet üstünden gelir.
  const y1 = yukari ? y + 58 : y - 58
  const y2 = yukari ? y + 8 : y - 8
  return (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2} className="stroke-brand-500" strokeWidth="2.6" markerEnd="url(#lgskal-arrow-brand)" />
      {/* Etiket okun soluna yazılır: kuvvet çoğu zaman çubuğun sağ ucunda
          durduğu için sağa yazılan etiket panelden taşıyordu. */}
      <text x={x - 8} y={yukari ? y1 - 2 : y1 + 12} textAnchor="end" className="fill-brand-700" fontSize="12" fontWeight="700">
        Kuvvet
      </text>
    </g>
  )
}

export default function ScienceLeverTypes({ data, activeRegion }) {
  const paneller = Array.isArray(data?.paneller) && data.paneller.length === 3 ? data.paneller : DEFAULT.paneller
  const anahtarlar = ['destek-ortada', 'yuk-ortada', 'kuvvet-ortada']
  const genislik = 232
  const bosluk = 12
  const cubukY = 160

  return (
    <FigureSvg
      viewBox="0 0 760 300"
      title="Kaldıraç türleri"
      desc={
        'Üç kaldıraç türü yan yana. Birincide destek noktası ortada, yük ve kuvvet uçlarda; örnek tahterevalli. ' +
        'İkincide yük ortada, destek bir uçta, kuvvet öbür uçta yukarı doğru; örnek el arabası. ' +
        'Üçüncüde kuvvet ortada yukarı doğru, destek bir uçta, yük öbür uçta; örnek cımbız.'
      }
    >
      <ArrowHeads prefix="lgskal" />

      {paneller.map((panel, i) => {
        const x0 = bosluk + i * (genislik + bosluk)
        const sol = x0 + 26
        const sag = x0 + genislik - 26
        const orta = (sol + sag) / 2
        const key = anahtarlar[i]
        return (
          <g key={key} {...region(key, activeRegion)}>
            <rect x={x0} y="12" width={genislik} height="276" rx="10" className="fill-surface-sunken stroke-ink/15" strokeWidth="1.2" />
            <text x={x0 + 16} y="38" className="fill-ink/50" fontSize="11" fontWeight="700" letterSpacing="0.06em">
              {`${i + 1}. TÜR`}
            </text>
            <text x={x0 + 16} y="60" className="fill-ink" fontSize="15.5" fontWeight="700">
              {panel.baslik}
            </text>

            {/* Çubuk */}
            <line x1={sol} y1={cubukY} x2={sag} y2={cubukY} className="stroke-ink/60" strokeWidth="5" strokeLinecap="round" />

            {i === 0 && (
              <>
                <Yuk x={sol + 18} y={cubukY} />
                <Destek x={orta} y={cubukY + 3} />
                <Kuvvet x={sag - 6} y={cubukY} yukari={false} />
              </>
            )}
            {i === 1 && (
              <>
                <Destek x={sol + 4} y={cubukY + 3} />
                <Yuk x={orta} y={cubukY} />
                <Kuvvet x={sag - 6} y={cubukY} yukari />
              </>
            )}
            {i === 2 && (
              <>
                <Destek x={sol + 4} y={cubukY + 3} />
                <Kuvvet x={orta} y={cubukY} yukari />
                <Yuk x={sag - 18} y={cubukY} />
              </>
            )}

            {/* Ortadaki öğenin adı — türü belirleyen tek bilgi */}
            <text x={x0 + genislik / 2} y="250" textAnchor="middle" className="fill-ink/60" fontSize="12">
              Ortada duran:
              <tspan className="fill-ink" fontWeight="700">
                {i === 0 ? ' destek noktası' : i === 1 ? ' yük' : ' kuvvet'}
              </tspan>
            </text>
            <text x={x0 + genislik / 2} y="272" textAnchor="middle" className="fill-ink/55" fontSize="11.5" fontStyle="italic">
              {panel.ornek}
            </text>
          </g>
        )
      })}
    </FigureSvg>
  )
}
