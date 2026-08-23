import { useEffect, useId, useState } from 'react'

function Shape({ spec, fill = 'black' }) {
  if (!spec) return null
  if (Array.isArray(spec)) return spec.map((item, index) => <Shape key={index} spec={item} fill={fill} />)
  const { type = 'rect', ...props } = spec
  if (type === 'ellipse') return <ellipse {...props} fill={fill} />
  if (type === 'circle') return <circle {...props} fill={fill} />
  if (type === 'path') return <path {...props} fill={fill} />
  return <rect {...props} fill={fill} />
}

/**
 * Bilimsel illüstrasyon ile deterministik etkileşimi aynı levhada birleştirir.
 * Raster katman doku ve anatomiyi; SVG katmanı doğru numara, ok ve odağı taşır.
 */
export default function InteractiveIllustration({
  src,
  srcSet,
  alt,
  activeRegion = null,
  regions = [],
  markers = [],
  children,
  width = 1536,
  height = 1024,
}) {
  const rawId = useId()
  const maskId = `figure-focus-${rawId.replace(/:/g, '')}`
  const selected = regions.find((item) => item.key === activeRegion)
  const [detailRegion, setDetailRegion] = useState(null)
  const [detailLoaded, setDetailLoaded] = useState(false)

  useEffect(() => {
    setDetailRegion(null)
    setDetailLoaded(false)

    if (!activeRegion || !selected?.detail) return undefined

    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(
      () => setDetailRegion(activeRegion),
      reducedMotion ? 20 : 720,
    )

    return () => window.clearTimeout(timer)
  }, [activeRegion, selected?.detail?.src])

  const detail = detailRegion === activeRegion ? selected?.detail : null
  const zoom = selected?.zoom
  const detailZoom = detail?.zoom ?? (detail?.src ? null : zoom)
  const zoomStyle = {
    transform: activeRegion && zoom ? `scale(${zoom.scale})` : 'scale(1)',
    transformOrigin: `${zoom?.x ?? 50}% ${zoom?.y ?? 50}%`,
  }

  return (
    <div
      className="relative isolate overflow-hidden rounded-[0.3rem] bg-[#fbf5e8]"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <div
        className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none"
        style={zoomStyle}
      >
        <img
          src={src}
          srcSet={srcSet}
          sizes="(min-width: 1024px) 56rem, 40rem"
          width={width}
          height={height}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="pointer-events-none absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <mask id={maskId}>
              <rect width={width} height={height} fill="white" />
              <Shape spec={selected?.shape} fill="black" />
            </mask>
          </defs>

          {selected && (
            <rect
              width={width}
              height={height}
              className="fill-surface"
              fillOpacity="0.78"
              mask={`url(#${maskId})`}
              style={{ transition: 'opacity .4s ease' }}
            />
          )}

          {children}

          {markers.map((marker, index) => {
            const dimmed = Boolean(activeRegion) && activeRegion !== marker.key
            const number = marker.label ?? index + 1

            if (marker.title) {
              const boxWidth = marker.width ?? 210
              const boxX = marker.align === 'end' ? marker.x - boxWidth + 28 : marker.x - 28
              const textX = marker.align === 'end' ? boxX + 20 : marker.x + 39

              return (
                <g key={marker.key} opacity={dimmed ? 0.18 : 1} style={{ transition: 'opacity .4s ease' }}>
                  <path
                    d={`M${marker.x} ${marker.y} L${marker.targetX} ${marker.targetY}`}
                    className="fill-none stroke-surface"
                    strokeWidth="9"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M${marker.x} ${marker.y} L${marker.targetX} ${marker.targetY}`}
                    className="fill-none stroke-brand-600"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx={marker.targetX} cy={marker.targetY} r="8" className="fill-brand-600 stroke-surface" strokeWidth="4" />
                  <rect x={boxX} y={marker.y - 28} width={boxWidth} height="56" rx="28" className="fill-surface stroke-brand-300" strokeWidth="2" fillOpacity="0.96" />
                  <circle cx={marker.x} cy={marker.y} r="27" className="fill-brand-600 stroke-surface" strokeWidth="5" />
                  <text x={marker.x} y={marker.y + 9} textAnchor="middle" className="fill-white" fontSize="28" fontWeight="850">
                    {number}
                  </text>
                  <text x={textX} y={marker.y + 9} className="fill-ink" fontSize="25" fontWeight="850">
                    {marker.title}
                  </text>
                </g>
              )
            }

            return (
              <g key={marker.key} opacity={dimmed ? 0.2 : 1} style={{ transition: 'opacity .4s ease' }}>
                <circle cx={marker.x} cy={marker.y} r="27" className="fill-brand-600 stroke-surface" strokeWidth="5" />
                <text x={marker.x} y={marker.y + 9} textAnchor="middle" className="fill-white" fontSize="28" fontWeight="850">
                  {number}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {detail && (
        <div
          className={`pointer-events-none absolute inset-0 overflow-hidden bg-ink transition-opacity duration-300 motion-reduce:transition-none ${detailLoaded ? 'opacity-100' : 'opacity-0'}`}
          aria-live="polite"
        >
          <img
            src={detail.src ?? src}
            width="960"
            height="640"
            alt={detail.alt}
            decoding="async"
            onLoad={() => setDetailLoaded(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-none"
            style={{
              transform: detailZoom ? `scale(${detailZoom.scale})` : 'scale(1)',
              transformOrigin: `${detailZoom?.x ?? 50}% ${detailZoom?.y ?? 50}%`,
            }}
          />
          <div className="absolute left-5 top-5 rounded-full border border-white/25 bg-ink/85 px-4 py-2 text-[clamp(.72rem,1.7vw,.95rem)] font-extrabold tracking-wide text-white shadow-lg backdrop-blur-sm">
            Açıklayıcı detay · {detail.title}
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/72 to-transparent px-5 pb-4 pt-16 text-white">
            {detail.note && (
              <p className="m-0 text-[clamp(.68rem,1.5vw,.84rem)] font-semibold leading-relaxed text-white/92">{detail.note}</p>
            )}
            <p className="m-0 mt-1 text-right text-[clamp(.64rem,1.4vw,.78rem)] font-bold text-white/75">
              Ana görsele dönmek için aynı maddeye tekrar dokun.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
