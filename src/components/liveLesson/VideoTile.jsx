import { useEffect, useRef } from 'react'
import { MicOff, VideoOff, WifiOff } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar } from '../ui'

/**
 * Video kutusu.
 *
 * KURAL: video kutusu öğrenme alanının önüne geçmez. Bu yüzden kutu
 * küçük, sakin ve kenarlıksızdır; dikkat çeken tek şey DURUM
 * göstergeleridir (mikrofon kapalı, bağlantı yok).
 *
 * Kamera kapalıyken siyah dikdörtgen değil, kişinin baş harfleri
 * gösterilir: "bağlantı koptu mu" ile "kamerasını kapattı" arasındaki
 * farkı öğrenci anlayabilmeli.
 */
export default function VideoTile({
  stream,
  name,
  label,
  muted = false,
  cameraOn = true,
  micOn = true,
  speaking = false,
  connection = 'connected',
  mirrored = false,
  placeholder,
  className,
}) {
  const videoRef = useRef(null)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (el.srcObject !== stream) el.srcObject = stream ?? null
  }, [stream])

  const showVideo = Boolean(stream) && cameraOn
  const offline = connection === 'failed' || connection === 'closed'
  const reconnecting = connection === 'reconnecting'
  // Bağlantı katmanı açıkken yer tutucu metni GÖSTERİLMEZ: ikisi üst üste
  // binip okunamayan bir yığın oluşturuyordu.
  const showPlaceholder = Boolean(placeholder) && !offline && !reconnecting

  return (
    <div
      className={cn(
        'relative flex min-h-0 items-center justify-center overflow-hidden rounded-card',
        /* Kutu KOYU kabuğun üzerinde duruyor. Zemin de koyu olsaydı
           nesne olarak okunmaz, avatar boşlukta yüzüyormuş gibi
           görünürdü; ince bir halka ve biraz daha açık zemin kutuyu
           yüzeyden ayırır. */
        'bg-white/[0.07] ring-1 ring-inset ring-white/[0.12]',
        speaking && 'ring-2 ring-success-500/70',
        className
      )}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={muted}
          className={cn('h-full w-full object-cover', mirrored && 'scale-x-[-1]')}
        />
      ) : (
        /* pb-8: alttaki ad şeridi avatarın ve yer tutucu metnin üstüne binmesin */
        <div className="flex flex-col items-center gap-2 px-3 pb-8 pt-4 text-center">
          <Avatar name={name} size="md" />
          {showPlaceholder && (
            <p className="line-clamp-2 text-2xs leading-snug text-white/70">{placeholder}</p>
          )}
        </div>
      )}

      {/* Alt şerit: ad + durum. Her durum simge + metin taşır, yalnız renk değil. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-1.5 bg-gradient-to-t from-ink/80 to-transparent px-2.5 pb-2 pt-6">
        <span className="min-w-0 flex-1 truncate text-2xs font-semibold text-white/90">{name}</span>
        {!micOn && (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-danger-500/90 px-1.5 py-0.5 text-[10px] font-bold text-white">
            <MicOff className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
            <span className="sr-only sm:not-sr-only">Kapalı</span>
          </span>
        )}
        {!cameraOn && (
          <VideoOff className="h-3.5 w-3.5 shrink-0 text-white/70" strokeWidth={2.2} aria-label="Kamera kapalı" />
        )}
      </div>

      {label && (
        <span className="pointer-events-none absolute left-2 top-2 rounded-full bg-ink/70 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/80">
          {label}
        </span>
      )}

      {(offline || reconnecting) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-ink/70 px-3 text-center">
          <WifiOff className="h-5 w-5 text-white/80" strokeWidth={2} aria-hidden="true" />
          <p className="text-2xs font-semibold text-white/90">
            {reconnecting ? 'Yeniden bağlanılıyor…' : 'Bağlantı yok'}
          </p>
        </div>
      )}
    </div>
  )
}
