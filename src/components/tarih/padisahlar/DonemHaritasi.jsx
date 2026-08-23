import { useMemo } from 'react'
import { BOGAZLAR, BOLGE_ADLARI, DENIZLER, PROJEKSIYON, egri, mevkiKonumu, nokta } from '../../../data/padisahlar/cografya'
import { ALAN_TONLARI, donemHaritasi } from '../../../data/padisahlar/donemHaritalari'

/**
 * DÖNEM HARİTASI — şematik SVG
 *
 * Çizim sırası bilinçlidir: kara → hâkimiyet alanları → denizler.
 * Denizler en üstte olduğu için alanların denize taşan kenarları
 * kendiliğinden kırpılmış görünür; ayrı bir maske gerekmez.
 *
 * Yakınlaşma, viewBox değiştirilerek değil bir <g> öğesine CSS
 * transform verilerek yapılır — böylece geçiş GPU üzerinde akar.
 */

const TON_RENKLERI = {
  osmanli: 'rgb(138 38 46 / 0.72)',
  bagli: 'rgb(138 38 46 / 0.3)',
  bizans: 'rgb(92 132 196 / 0.34)',
  rakip: 'rgb(92 146 112 / 0.26)',
}

export default function DonemHaritasi({
  haritaId,
  vurgular = [],
  odak = null,
  yakinlik = 1,
  lejant = true,
  not = true,
  sigdir = false,
  etiketler = true,
}) {
  const harita = donemHaritasi(haritaId)

  const denizYollari = useMemo(() => DENIZLER.map((d) => ({ ...d, yol: egri(d.kiyi) })), [])
  const bogazYollari = useMemo(() => BOGAZLAR.map((b) => ({ ...b, yol: egri(b.hat, false) })), [])
  const alanYollari = useMemo(
    () => (harita?.alanlar ?? []).map((a) => ({ ...a, yol: egri(a.kiyi) })),
    [harita]
  )
  const isaretler = useMemo(
    () => (harita?.isaretler ?? []).map(mevkiKonumu).filter(Boolean),
    [harita]
  )

  // Odak varsa oraya yaklaş; yoksa bütün sahne görünür kalır.
  const donusum = useMemo(() => {
    const odakMevki = odak ? mevkiKonumu(odak) : null
    const k = odakMevki ? Math.max(yakinlik, 2.1) : yakinlik
    if (!odakMevki && k === 1) return undefined
    const merkez = odakMevki ?? { x: PROJEKSIYON.genislik / 2, y: PROJEKSIYON.yukseklik / 2 }
    const dx = PROJEKSIYON.genislik / 2 - k * merkez.x
    const dy = PROJEKSIYON.yukseklik / 2 - k * merkez.y
    return `translate(${dx.toFixed(1)} ${dy.toFixed(1)}) scale(${k})`
  }, [odak, yakinlik])

  if (!harita) return null

  const vurguKumesi = new Set(vurgular)

  return (
    <div className="pg-harita-kutu">
      <svg
        className="pg-harita"
        viewBox={`0 0 ${PROJEKSIYON.genislik} ${PROJEKSIYON.yukseklik}`}
        preserveAspectRatio={sigdir ? 'xMidYMid meet' : 'xMidYMid slice'}
        role="img"
        aria-label={`${harita.baslik} — şematik dönem haritası. ${harita.okuma}`}
      >
        <g style={{ transform: donusum, transformOrigin: '0 0', transition: 'transform 720ms cubic-bezier(0.16,1,0.3,1)' }}>
          <rect x="0" y="0" width={PROJEKSIYON.genislik} height={PROJEKSIYON.yukseklik} className="pg-harita-kara" />

          {/* Hâkimiyet alanları */}
          {alanYollari.map((alan) => (
            <path
              key={`${haritaId}-${alan.id}`}
              d={alan.yol}
              className="pg-harita-alan pg-harita-alan-giris"
              data-tur={alan.tur}
              data-ince={alan.ince ? 'true' : undefined}
            >
              <title>{alan.ad}</title>
            </path>
          ))}

          {/* Denizler en üstte — kıyı çizgisini onlar tanımlar */}
          {denizYollari.map((deniz) => (
            <path key={deniz.id} d={deniz.yol} className="pg-harita-deniz" />
          ))}
          {denizYollari.map((deniz) => (
            <path key={`${deniz.id}-kiyi`} d={deniz.yol} className="pg-harita-kiyi" />
          ))}
          {bogazYollari.map((bogaz) => (
            <path key={bogaz.id} d={bogaz.yol} className="pg-harita-bogaz" />
          ))}

          {etiketler && BOLGE_ADLARI.map((bolge) => {
            const [x, y] = nokta(bolge.konum[0], bolge.konum[1])
            return (
              <text key={bolge.ad} x={x} y={y} className="pg-harita-bolge" data-boyut={bolge.boyut}>
                {bolge.ad}
              </text>
            )
          })}

          {etiketler && DENIZLER.filter((d) => d.etiket).map((deniz) => {
            const [x, y] = nokta(deniz.etiket[0], deniz.etiket[1])
            return (
              <text key={`${deniz.id}-ad`} x={x} y={y} className="pg-harita-deniz-ad">
                {deniz.ad}
              </text>
            )
          })}

          {/* Şehirler, kaleler, savaş mevkileri */}
          {isaretler.map((mevki) => {
            const vurgulu = vurguKumesi.has(mevki.id) || odak === mevki.id
            return (
              <g key={mevki.id} className="pg-harita-mevki" data-tur={mevki.tur} data-vurgu={vurgulu ? 'true' : undefined}>
                {vurgulu && <circle cx={mevki.x} cy={mevki.y} r="9" className="pg-harita-vurgu-halka" />}
                {mevki.tur === 'baskent' ? (
                  <rect
                    x={mevki.x - 4} y={mevki.y - 4} width="8" height="8"
                    transform={`rotate(45 ${mevki.x} ${mevki.y})`}
                    className="pg-harita-mevki-nokta"
                  />
                ) : (
                  <circle cx={mevki.x} cy={mevki.y} r={mevki.tur === 'savas' ? 4.2 : 3.4} className="pg-harita-mevki-nokta" />
                )}
                {etiketler && (
                  <text x={mevki.x + 7} y={mevki.y + 3.5} className="pg-harita-mevki-ad">
                    {mevki.ad}
                  </text>
                )}
              </g>
            )
          })}
        </g>
      </svg>

      {lejant && (
        <div className="pg-harita-lejant" aria-hidden="true">
          {ALAN_TONLARI.filter((ton) => (harita.alanlar ?? []).some((a) => a.tur === ton.tur)).map((ton) => (
            <span key={ton.tur}>
              <i style={{ background: TON_RENKLERI[ton.tur] }} />
              {ton.ad}
            </span>
          ))}
        </div>
      )}

      {not && (
        <p className="pg-harita-not">
          <strong>Şematik harita.</strong> Kıyılar ve alanlar gerçek koordinatlardan
          sadeleştirildi; ölçekli sınır haritası değildir. Ayrıntılı dönem haritası için Tarih Atlası’nı kullan.
        </p>
      )}
    </div>
  )
}
