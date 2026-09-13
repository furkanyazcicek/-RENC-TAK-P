import { useEffect, useRef } from 'react'
import { ChevronDown, CornerUpRight, MicOff, Video, VideoOff, WifiOff } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar } from '../ui'

/**
 * KAMERA YERLEŞİĞİ — ÖĞRENME YÜZEYİNİ KÜÇÜLTMEYEN GÖRÜNTÜ KATMANI.
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN AYRI BİR BİLEŞEN
 * ═══════════════════════════════════════════════════════════════════
 * Eski düzende kamera kutuları YERLEŞİMİN PARÇASIYDI: masaüstünde 240 px
 * genişliğinde sabit bir sütun alıyor, dikey tablette 152×86 piksellik
 * kutu doğrudan tahtanın yazılan köşesini kapatıyordu. Kamerayı açmak
 * tahtayı küçültüyordu.
 *
 * Bu bileşen tahtanın TUVAL KABININ İÇİNE mutlak konumda basılır:
 *   • açılıp kapanması tahtanın ölçüsünü değiştirmez,
 *   • köşesi değiştirilebilir, yazının üstünde kalmak zorunda değildir,
 *   • kapalıyken yalnızca küçük bir durum rozeti kadar yer kaplar.
 *
 * ═══════════════════════════════════════════════════════════════════
 * BOŞ VİDEO KUTUSU YOK
 * ═══════════════════════════════════════════════════════════════════
 * Karşı tarafın kamerası kapalıysa ya da henüz katılmadıysa büyük siyah
 * bir dikdörtgen göstermenin hiçbir bilgi değeri yok. Onun yerine tek
 * satırlık bir durum rozeti kalır: "Kamerası kapalı", "Henüz katılmadı".
 *
 * Öğretmenin KENDİ önizlemesi tahta odak modunda sürekli gösterilmez;
 * özellikle "Tablet — anlatım ve tahta" rolünde kendi kamerası zaten
 * kapalıdır ve boş bir kutu yer kaplamamalıdır.
 */

export const KAMERA_KOSELERI = ['sag-ust', 'sag-alt', 'sol-alt', 'sol-ust']

const KOSE_SINIFI = {
  'sag-ust': 'right-2 top-2 items-end',
  'sag-alt': 'right-2 bottom-2 items-end',
  'sol-alt': 'left-2 bottom-2 items-start',
  'sol-ust': 'left-2 top-2 items-start',
}

const KOSE_ADI = {
  'sag-ust': 'sağ üst',
  'sag-alt': 'sağ alt',
  'sol-alt': 'sol alt',
  'sol-ust': 'sol üst',
}

function Video1({ stream, muted, mirrored, className }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (el.srcObject !== stream) el.srcObject = stream ?? null
  }, [stream])
  return (
    <video
      ref={ref}
      autoPlay
      playsInline
      muted={muted}
      className={cn('h-full w-full object-cover', mirrored && 'scale-x-[-1]', className)}
    />
  )
}

export default function LessonCameraDock({
  open,
  onToggle,
  corner = 'sag-alt',
  onCornerChange,
  remoteStream,
  remoteName,
  remoteCamOn = false,
  remoteMicOn = false,
  remoteSpeaking = false,
  remotePresent = false,
  remoteMediaAvailable = true,
  audioOutputEnabled = true,
  selfStream,
  selfName,
  selfCamOn = false,
  showSelf = false,
  className,
}) {
  const remoteVideoVar = Boolean(remoteStream) && remoteCamOn
  const selfVideoVar = showSelf && Boolean(selfStream) && selfCamOn

  /**
   * GÖSTERİLECEK BİR ŞEY VAR MI?
   *
   * Hiç görüntü yoksa yerleşik yalnızca DURUM taşır; açılabilir kutu
   * gösterilmez. Böylece kapalı kamerada tahtanın üstünde hiçbir kutu
   * durmaz.
   */
  const gorulebilir = remoteVideoVar || selfVideoVar
  /** Açılınca hangi görüntü gelecek? Rozetin sözü ile açılan görüntü aynı olmalı. */
  const birincilAd = remoteVideoVar ? remoteName : selfName

  const durumMetni = !remotePresent
    ? 'Henüz katılmadı'
    : !remoteMediaAvailable
      ? 'Görüntü aktarılmıyor'
      : remoteCamOn
        ? 'Kamerası açık'
        : 'Kamerası kapalı'

  const sonrakiKose = () => {
    const i = KAMERA_KOSELERI.indexOf(corner)
    return KAMERA_KOSELERI[(i + 1) % KAMERA_KOSELERI.length]
  }

  return (
    <div
      data-tahta-ustu="evet"
      className={cn(
        'pointer-events-none absolute z-20 flex flex-col gap-1.5',
        KOSE_SINIFI[corner] ?? KOSE_SINIFI['sag-alt'],
        className
      )}
    >
      {/* Kapalı durum: tek dokunuşluk küçük rozet/düğme. */}
      {(!open || !gorulebilir) && (
        <button
          type="button"
          onClick={gorulebilir ? onToggle : undefined}
          aria-expanded={gorulebilir ? open : undefined}
          aria-label={
            gorulebilir
              ? `${birincilAd ?? 'Kamera'} görüntüsünü aç`
              : `${remoteName ?? 'Karşı taraf'} — ${durumMetni}`
          }
          className={cn(
            'ders-studyo__kamera-rozet pointer-events-auto inline-flex min-h-11 items-center gap-2 rounded-btn px-3 text-2xs font-semibold',
            gorulebilir ? 'cursor-pointer' : 'cursor-default'
          )}
        >
          {gorulebilir ? (
            <Video className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          ) : remotePresent ? (
            <VideoOff className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          ) : (
            <WifiOff className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
          )}
          <span className="max-w-[7rem] truncate">{remoteName ?? 'Karşı taraf'}</span>
          <span className="text-ink/45">· {gorulebilir && !remoteVideoVar ? 'Kamerası kapalı' : durumMetni}</span>
          {remotePresent && !remoteMicOn && (
            <MicOff className="h-3.5 w-3.5 shrink-0 text-danger-600" strokeWidth={2.2} aria-label="Mikrofonu kapalı" />
          )}
        </button>
      )}

      {/* Açık durum: küçük resim içinde resim. Tahtanın ölçüsünü değiştirmez. */}
      {open && gorulebilir && (
        <div className="ders-studyo__kamera-kutu pointer-events-auto w-[11rem] overflow-hidden rounded-card sm:w-[12.5rem]">
          <div className="flex items-center gap-0.5 px-1 py-0.5">
            <span className="min-w-0 flex-1 truncate pl-1.5 text-2xs font-semibold text-white/85">
              {remoteVideoVar ? remoteName : selfName}
            </span>
            <button
              type="button"
              onClick={() => onCornerChange?.(sonrakiKose())}
              aria-label={`Kamerayı ${KOSE_ADI[sonrakiKose()]} köşeye taşı`}
              title={`Kamerayı ${KOSE_ADI[sonrakiKose()]} köşeye taşı`}
              className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-btn text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            >
              <CornerUpRight className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={open}
              aria-label="Kamerayı daralt"
              title="Kamerayı daralt"
              className="focus-ring grid h-11 w-11 shrink-0 place-items-center rounded-btn text-white/70 transition-colors hover:bg-white/15 hover:text-white"
            >
              <ChevronDown className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div
            className={cn(
              'relative aspect-video w-full overflow-hidden bg-ink',
              remoteSpeaking && 'ring-2 ring-inset ring-success-500/70'
            )}
          >
            {remoteVideoVar ? (
              <Video1 stream={remoteStream} muted={!audioOutputEnabled} />
            ) : selfVideoVar ? (
              <Video1 stream={selfStream} muted mirrored />
            ) : (
              <div className="grid h-full w-full place-items-center">
                <Avatar name={remoteName ?? selfName} size="sm" />
              </div>
            )}
            {remoteVideoVar && !remoteMicOn && (
              <span className="absolute bottom-1 right-1 grid h-6 w-6 place-items-center rounded-full bg-danger-500/90">
                <MicOff className="h-3.5 w-3.5 text-white" strokeWidth={2.4} aria-label="Mikrofonu kapalı" />
              </span>
            )}
          </div>

          {/* Kendi önizlemem yalnız İSTENDİĞİNDE ve karşı taraf zaten
              gösteriliyorsa ikinci küçük kutu olarak görünür. */}
          {remoteVideoVar && selfVideoVar && (
            <div className="relative aspect-video w-full border-t border-white/10 bg-ink">
              <Video1 stream={selfStream} muted mirrored />
              <span className="absolute left-1 top-1 rounded-full bg-ink/70 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white/80">
                Sen
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
