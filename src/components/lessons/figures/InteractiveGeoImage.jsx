import { useMemo, useState } from 'react'

const clamp = (value) => Math.min(96, Math.max(4, Number(value) || 50))

/**
 * ImageGen ile üretilen coğrafi sahneyi erişilebilir bir öğrenme yüzeyine çevirir.
 * Bilimsel metin rasterın içine gömülmez; veri katmanında kaldığı için okunabilir,
 * düzeltilebilir ve klavyeyle gezilebilir.
 */
export default function InteractiveGeoImage({ src, alt, hotspots = [], label = 'Görseli keşfet' }) {
  const points = useMemo(() => (Array.isArray(hotspots) ? hotspots.filter((point) => point?.id && point?.title).slice(0, 9) : []), [hotspots])
  const [activeId, setActiveId] = useState(points[0]?.id ?? null)
  const active = points.find((point) => point.id === activeId) ?? points[0]

  return (
    <div className="geo-image-lab">
      <div className="geo-image-lab__topline"><span>{label}</span><small>{points.length} etkileşim noktası</small></div>
      <div className="geo-image-lab__stage">
        <img src={src} alt={alt} width="1674" height="938" loading="lazy" decoding="async" />
        {points.map((point, index) => (
          <button
            key={point.id}
            type="button"
            className={`geo-image-lab__hotspot tone-${point.tone || 'natural'} ${point.id === active?.id ? 'is-active' : ''}`}
            style={{ left: `${clamp(point.x)}%`, top: `${clamp(point.y)}%` }}
            aria-label={`${point.title}: açıklamayı aç`}
            aria-pressed={point.id === active?.id}
            onClick={() => setActiveId(point.id)}
          >
            <span>{index + 1}</span>
          </button>
        ))}
        <span className="geo-image-lab__credit">AI destekli atlas illüstrasyonu · konumlar öğretim amaçlı şematiktir</span>
      </div>

      {active && (
        <div className={`geo-image-lab__detail tone-${active.tone || 'natural'}`} aria-live="polite">
          <span className="geo-image-lab__detail-index">{String(points.findIndex((point) => point.id === active.id) + 1).padStart(2, '0')}</span>
          <div><small>{active.kicker || 'Coğrafi unsur'}</small><strong>{active.title}</strong><p>{active.body}</p></div>
          {active.tyt && <aside><span>TYT çıkarımı</span><b>{active.tyt}</b></aside>}
        </div>
      )}

      <div className="geo-image-lab__nav" aria-label="Görseldeki öğrenme noktaları">
        {points.map((point, index) => <button key={point.id} type="button" aria-pressed={point.id === active?.id} onClick={() => setActiveId(point.id)}><span>{index + 1}</span>{point.title}</button>)}
      </div>
    </div>
  )
}
