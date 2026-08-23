import { useEffect, useRef, useState } from 'react'
import { AudioLines, ImageOff } from 'lucide-react'
import Prose, { Inline } from './Prose'
import { resolveFigure } from '../figures'

/**
 * ŞEKİL
 * ==================================================================
 *
 * Bir görsel burada "kart" değil LEVHA olarak sunulur: kâğıt beyazı zemin,
 * tek saç teli çerçeve, gölge yok. Altında numaralı alt yazı vardır —
 * ders kitabı düzeni (§10).
 *
 * KÜNYE
 * Bilimsel şemaların etiketleri çizimin İÇİNE yazılmaz. İçine yazılan uzun
 * etiketler viewBox'ı taşırıp kırpılıyor, telefonda ise çizimle birlikte
 * küçülüp okunmaz hâle geliyordu. Bunun yerine çizimde numaralı işaretler,
 * altında HTML künye var: yazı her ekran genişliğinde yeniden akar.
 *
 * KÜNYE AYNI ZAMANDA ODAK DENETİMİDİR
 * Bir künye satırına dokunulduğunda çizimde o bölge dışındaki her şey
 * söner, kamera bölgeye yaklaşır ve açıklamaya özel yakın görünüm açılır.
 * Bu, "Görseli Hocayla İncele" sesi geldiğinde ses zaman
 * çizelgesinin süreceği aynı mekanizmadır (§31) — ama ses olmadan da
 * bugün işe yarıyor. Altyapıyı ses için kurup öğrenciyi bekletmek yerine
 * aynı altyapıyı hemen kullanılır hâle getirdik.
 */

export default function LessonFigure({ block, index, onExplain }) {
  const [activeRegion, setActiveRegion] = useState(null)
  const plateRef = useRef(null)
  const scrollable = usePlateOverflow(plateRef)
  const entry = resolveFigure(block.kind)
  const Component = entry?.Component
  const focus = Array.isArray(block.focus) ? block.focus : []
  const regions = entry?.regions ?? []
  const showInteractiveLegend = focus.length > 0 && regions.length > 0
  const showStaticLegend = focus.length > 0 && regions.length === 0
  const numbered = entry?.markers === 'numbered'

  return (
    <figure className="lesson-figure">
      <div ref={plateRef} className="lesson-figure-plate">
        <div style={entry?.minWidth ? { minWidth: entry.minWidth } : undefined}>
          {Component ? (
            <Component data={block.data} activeRegion={activeRegion} />
          ) : block.image_url ? (
            <img
              src={block.image_url}
              srcSet={block.image_srcset}
              sizes={block.image_sizes || '(min-width: 1024px) 56rem, 100vw'}
              width={block.image_width}
              height={block.image_height}
              alt={block.alt || block.title || 'Ders görseli'}
              /* `max-h` + `object-contain` görseli kutuya sığdırmak için
                 kırpıyordu: 1440x960 bir çizim 872 px'lik levhada 581 px
                 yüksekliğe gelir ve 30rem sınırına takılıp iki yanında boş
                 şerit bırakırdı. Şekil zaten kendi oranında basılmalı. */
              className="mx-auto block h-auto w-full rounded"
              loading="lazy"
              decoding="async"
            />
          ) : (
            <PlaceholderFigure title={block.title} />
          )}
        </div>
      </div>

      {scrollable && (
        <p className="m-0 mt-2 text-[0.8125rem] text-ink/40">
          Şema ekrana sığmıyor — yana kaydırarak tamamını inceleyebilirsin.
        </p>
      )}

      {showInteractiveLegend && (
        <ul className="m-0 mt-4 flex list-none flex-col p-0">
          {focus.map((item, focusIndex) => {
            const regionKey = regions[focusIndex]
            if (!regionKey) return null
            const active = activeRegion === regionKey
            const dimmed = Boolean(activeRegion) && !active

            return (
              <li key={focusIndex} className="border-t border-line last:border-b">
                <button
                  type="button"
                  onClick={() => setActiveRegion(active ? null : regionKey)}
                  aria-pressed={active}
                  className={`focus-ring flex w-full items-start gap-3 py-2.5 text-start transition-opacity ${
                    dimmed ? 'opacity-40' : 'opacity-100'
                  }`}
                >
                  <span
                    className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-[0.6875rem] font-extrabold transition-colors ${
                      active ? 'bg-brand-700 text-white' : 'bg-brand-600 text-white'
                    }`}
                    aria-hidden="true"
                  >
                    {numbered ? focusIndex + 1 : String.fromCharCode(65 + focusIndex)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[0.9375rem] font-bold leading-snug ${active ? 'text-brand-800' : 'text-ink'}`}>
                      <Inline text={item.title} />
                    </span>
                    {item.body && (
                      <span className="mt-0.5 block text-[0.875rem] leading-[1.65] text-ink/62">
                        <Inline text={item.body} />
                      </span>
                    )}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      )}

      {showStaticLegend && (
        <ul className="m-0 mt-4 grid list-none gap-x-6 gap-y-3 border-y border-line py-3 p-0 sm:grid-cols-3">
          {focus.map((item, focusIndex) => (
            <li key={focusIndex} className="flex items-start gap-2.5">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-600 text-[0.6875rem] font-extrabold text-white" aria-hidden="true">
                {focusIndex + 1}
              </span>
              <span className="min-w-0">
                <span className="block text-[0.9375rem] font-bold leading-snug text-ink">
                  <Inline text={item.title} />
                </span>
                {item.body && (
                  <span className="mt-0.5 block text-[0.875rem] leading-[1.6] text-ink/62">
                    <Inline text={item.body} />
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}

      {showInteractiveLegend && (
        <p className="m-0 mt-2 text-[0.8125rem] text-ink/40">
          {activeRegion ? (
            <button
              type="button"
              onClick={() => setActiveRegion(null)}
              className="focus-ring rounded font-semibold text-brand-700 underline underline-offset-4"
            >
              Tümünü tekrar göster
            </button>
          ) : (
            'Bir maddeye dokun: ilgili bölgeyi odakla ve açıklayıcı detayı aç.'
          )}
        </p>
      )}

      <figcaption>
        {(block.title || block.caption) && (
          <span>
            <span className="font-bold text-ink/85">Şekil {index}.</span>{' '}
            {block.title && <span className="font-semibold text-ink/80">{block.title}. </span>}
            {block.caption && <Inline text={block.caption} />}
          </span>
        )}

        {block.audio_script && (
          <span className="mt-2.5 block">
            <button
              type="button"
              onClick={() => onExplain?.(block)}
              className="focus-ring inline-flex items-center gap-1.5 rounded text-[0.9375rem] font-semibold text-brand-700 underline decoration-brand-300 decoration-2 underline-offset-4 hover:text-brand-800"
            >
              <AudioLines className="h-4 w-4" aria-hidden="true" />
              Görseli Hocayla İncele
            </button>
          </span>
        )}
      </figcaption>
    </figure>
  )
}

/**
 * Şema kendi kabına sığmıyorsa öğrenciye söyle.
 * Etiketli bilimsel bir şemayı telefon genişliğine sıkıştırmak yerine yatay
 * kaydırmayı tercih ediyoruz (§40). Ama kaydırılabildiğini görmeyen öğrenci
 * şemanın yarısını hiç görmez; bu yüzden ipucu yalnızca gerçekten taştığında
 * çıkar.
 */
function usePlateOverflow(ref) {
  const [overflowing, setOverflowing] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    const measure = () => setOverflowing(node.scrollWidth > node.clientWidth + 1)
    measure()

    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', measure)
      return () => window.removeEventListener('resize', measure)
    }
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [ref])

  return overflowing
}

function PlaceholderFigure({ title }) {
  return (
    <div className="grid min-h-40 place-items-center rounded border border-dashed border-line-strong bg-surface-muted p-6 text-center">
      <div>
        <ImageOff className="mx-auto h-6 w-6 text-ink/30" aria-hidden="true" />
        <p className="mt-2 text-sm text-ink/50">
          {title ? `“${title}” şeması henüz çizilmedi.` : 'Bu şema henüz çizilmedi.'}
        </p>
        <p className="mt-1 text-xs text-ink/35">Ders bu görsel olmadan da okunabilir.</p>
      </div>
    </div>
  )
}

/** Alt yazıdaki uzun açıklamalar için — ayrı paragraf gerektiğinde. */
export function FigureNote({ text }) {
  if (!text) return null
  return <Prose text={text} className="mt-3 text-[0.9375rem] text-ink/65" />
}
