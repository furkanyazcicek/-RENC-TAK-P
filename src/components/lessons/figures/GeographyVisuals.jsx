import { useId, useMemo, useState } from 'react'
import InteractiveGeoImage from './InteractiveGeoImage'

const clampCoordinate = (value) => Math.min(98, Math.max(2, Number(value) || 50))

/**
 * Coğrafyanın doğal ve beşerî katmanlarını tek zihinsel modelde toplar.
 * Düğüm metinleri içerikten gelir; yeni konuda bileşen değil veri değişir.
 */
export function GeoSystemsDiagram({ data = {} }) {
  const systems = Array.isArray(data.systems) ? data.systems.slice(0, 4) : []
  const [activeId, setActiveId] = useState(systems[0]?.id ?? null)
  const active = systems.find((system) => system.id === activeId) ?? systems[0]

  return (
    <div className="geo-systems" aria-label={data.ariaLabel || 'Doğal ortam ve insan arasındaki coğrafi sistem'}>
      <InteractiveGeoImage src={data.image} alt={data.imageAlt} hotspots={data.hotspots} label="Dünya sistemlerini görsel üzerinde keşfet" />
      <div className="geo-systems__tabs" aria-label="Doğal sistem katmanları">{systems.map((system) => <button key={system.id} type="button" className={`tone-${system.id} ${active?.id === system.id ? 'is-active' : ''}`} aria-pressed={active?.id === system.id} onClick={() => setActiveId(system.id)}><span className="geo-systems__tab-symbol" aria-hidden="true">{system.id === 'atmosfer' ? '◌' : system.id === 'hidrosfer' ? '≈' : system.id === 'litosfer' ? '△' : '♧'}</span><span><small>{system.kicker}</small><strong>{system.title}</strong></span></button>)}</div>
      {active && <div className="geo-systems__detail" role="status" aria-live="polite"><div><span>Sistemin işlevi</span><strong>{active.detail}</strong></div><div className="geo-systems__relation"><b>{active.naturalLink}</b><i>→</i><b>{active.humanUse}</b></div><div className="geo-systems__feedback"><span>Geri etki</span><strong>{active.feedback}</strong></div></div>}
    </div>
  )
}

/**
 * Sabit SVG tabanı + normalize yüzde koordinatları + tek açık bilgi kartı.
 * Harita yalnızca bağlam sağlar; asıl öğrenme marker verisinde yaşar.
 */
export function InteractiveMap({ data = {} }) {
  const points = useMemo(
    () => (Array.isArray(data.points) ? data.points : []).filter((point) => point?.id && point?.title).slice(0, 8),
    [data.points]
  )
  const [activeId, setActiveId] = useState(points[0]?.id ?? null)
  const active = points.find((point) => point.id === activeId) ?? points[0]
  const titleId = useId()

  return (
    <div className="geo-map" aria-labelledby={titleId}>
      <div className="geo-map__heading">
        <div>
          <span className="lesson-eyebrow">Haritada gör</span>
          <strong id={titleId}>{data.title || 'Doğa–insan etkileşimi'}</strong>
        </div>
        <span>{points.length} öğrenme noktası</span>
      </div>

      <div className="geo-map__layout">
        <div className="geo-map__canvas">
          <svg viewBox="0 0 1000 520" preserveAspectRatio="none" role="img" aria-label={data.mapAlt || 'Dünya üzerindeki doğa ve insan etkileşimi örnekleri'}>
            {data.image && <image href={data.image} x="0" y="0" width="1000" height="520" preserveAspectRatio="xMidYMid slice" className="geo-map__generated-base" />}
            <rect width="1000" height="520" rx="22" className="geo-map__ocean" />
            <g className="geo-map__grid" aria-hidden="true">
              <path d="M0 130H1000M0 260H1000M0 390H1000M250 0V520M500 0V520M750 0V520" />
            </g>
            <g className="geo-map__land" aria-hidden="true">
              <path d="M75 102 142 57l112 13 48 38 54 7 42 38-34 39-75 12-36 45-48-15-24-52-55-20-30-30Z" />
              <path d="m278 262 61 18 31 55-15 87-36 73-35-59 8-62-31-51Z" />
              <path d="m448 112 55-47 93 13 40 37 95-8 89 32 82 12 31 46-48 32-68-5-49 32-63-9-36-38-49 12-26-42-67-8-42 24-46-29Z" />
              <path d="m505 230 69-15 72 35 12 77-44 95-59-21-17-74-48-42Z" />
              <path d="m798 343 67-24 75 37-16 56-76 11-49-31Z" />
              <path d="m929 251 19-8 20 14-12 18-23-5Z" />
            </g>
          </svg>

          {points.map((point, index) => {
            const selected = point.id === active?.id
            return (
              <button
                key={point.id}
                type="button"
                className={`geo-map__marker ${selected ? 'is-active' : ''}`}
                style={{ left: `${clampCoordinate(point.x)}%`, top: `${clampCoordinate(point.y)}%` }}
                aria-label={`${point.title}: bilgi kartını aç`}
                aria-pressed={selected}
                onClick={() => setActiveId(point.id)}
              >
                <span>{index + 1}</span>
              </button>
            )
          })}
          <span className="geo-map__schematic">Konumlar şematiktir</span>
        </div>

        {active && (
          <aside className="geo-map__card" aria-live="polite">
            <div className="geo-map__card-index">{points.findIndex((point) => point.id === active.id) + 1}</div>
            <div>
              {active.region && <span>{active.region}</span>}
              <h3>{active.title}</h3>
              <p>{active.summary}</p>
              {active.significance && (
                <dl>
                  <dt>Neden burada?</dt>
                  <dd>{active.significance}</dd>
                </dl>
              )}
              {active.result && (
                <dl>
                  <dt>Sonuç</dt>
                  <dd>{active.result}</dd>
                </dl>
              )}
              {active.examTip && <div className="geo-map__exam"><strong>Sınav ipucu</strong>{active.examTip}</div>}
            </div>
          </aside>
        )}
      </div>

      <div className="geo-map__mobile-nav" aria-label="Harita noktaları">
        {points.map((point, index) => (
          <button key={point.id} type="button" aria-pressed={point.id === active?.id} onClick={() => setActiveId(point.id)}>
            <span>{index + 1}</span>{point.title}
          </button>
        ))}
      </div>
    </div>
  )
}

function Landscape({ type = 'coast' }) {
  if (type === 'mountain') {
    return (
      <svg viewBox="0 0 420 190" role="img" aria-label="Eğimli ve dağlık alan kesiti">
        <path className="geo-compare__sky" d="M0 0h420v190H0z" />
        <path className="geo-compare__back" d="m0 142 86-81 45 44 50-70 79 84 56-67 104 91v47H0Z" />
        <path className="geo-compare__front" d="m0 166 112-72 80 63 70-47 77 40 81-27v67H0Z" />
        <path className="geo-compare__road" d="M32 180c71-41 111-43 174-16 54 23 96 20 176-17" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 420 190" role="img" aria-label="Düz kıyı ovası kesiti">
      <path className="geo-compare__sky" d="M0 0h420v190H0z" />
      <path className="geo-compare__sea" d="M0 110h420v80H0z" />
      <path className="geo-compare__plain" d="M0 123c98-18 169 4 247-7 68-10 113-39 173-45v119H0Z" />
      <path className="geo-compare__river" d="M58 190c52-43 113-57 184-48 72 9 110-15 154-45" />
      <g className="geo-compare__settlement"><path d="M95 117h30v25H95zM134 108h37v32h-37zM181 121h27v22h-27z" /></g>
    </svg>
  )
}

/** Görsel kesiti, neden ve sonucu aynı ritimde karşılaştırır. */
export function RegionCompare({ data = {} }) {
  const regions = Array.isArray(data.regions) ? data.regions.slice(0, 2) : []
  return (
    <div className="geo-compare-shell">
      <InteractiveGeoImage src={data.image} alt={data.imageAlt} hotspots={data.hotspots} label="Ova ve dağlık alan üzerindeki farkları keşfet" />
      <div className="geo-compare">
      {regions.map((region) => (
        <article key={region.id || region.title}>
          <div className="geo-compare__body">
            <span>{region.kicker}</span>
            <h3>{region.title}</h3>
            <p>{region.summary}</p>
            <dl>
              <dt>Doğal koşul</dt><dd>{region.natural}</dd>
              <dt>İnsanın cevabı</dt><dd>{region.human}</dd>
              <dt>Görülen sonuç</dt><dd>{region.result}</dd>
            </dl>
          </div>
        </article>
      ))}
      </div>
    </div>
  )
}
