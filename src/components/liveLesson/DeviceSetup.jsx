import { Camera, LockKeyhole, Mic, MicOff, RefreshCw, ShieldCheck, SwitchCamera, VideoOff } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Alert, Button, Field, Select } from '../ui'
import VideoTile from './VideoTile'
import { useMicLevel } from '../../lib/liveLesson/useLessonMedia'

/**
 * Bekleme odasındaki kamera/mikrofon testi.
 *
 * NEDEN AYRI BİR ADIM
 * -------------------
 * Derse girdikten sonra "seni duyamıyorum" ile başlayan beş dakika,
 * bir saatlik dersin en pahalı beş dakikası. Öğrenci daha odaya girmeden
 * kendini görüyor, mikrofonuna konuşup çubuğun hareket ettiğini
 * görüyor ve cihazını değiştirebiliyor.
 *
 * İZİN REDDEDİLDİĞİNDE "Hata oluştu" YAZILMAZ: ne olduğu ve tarayıcı
 * ayarından nasıl düzeltileceği Türkçe anlatılır (bkz. describeMediaError).
 */
export default function DeviceSetup({ media, name, compact = false }) {
  const level = useMicLevel(media.stream, media.micOn)
  const segments = 12
  const activeSegments = Math.round(level * segments)

  if (!media.prepared) {
    const privacySubject = media.wantsCamera && media.wantsMicrophone
      ? 'Görüntü ve ses'
      : media.wantsCamera
        ? 'Görüntü'
        : 'Ses'
    const permissionLabel = media.wantsCamera && media.wantsMicrophone
      ? 'Kamera ve mikrofonu etkinleştir'
      : media.wantsCamera
        ? 'Kamerayı etkinleştir'
        : 'Mikrofonu etkinleştir'

    return (
      <div className="rounded-input bg-brand-500/[0.06] p-4 ring-1 ring-inset ring-brand-500/15 sm:p-5">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-btn bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
            <LockKeyhole className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-semibold text-ink">Cihazlarını sen hazır olduğunda aç</h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/70">
              Düğmeye bastığında tarayıcının izin penceresi açılır. Ekran İngilizceyse
              <strong className="font-semibold text-ink"> “Allow”</strong>, Türkçeyse
              <strong className="font-semibold text-ink"> “İzin ver”</strong> seçeneğine dokun.
            </p>
          </div>
        </div>

        <Button
          size="lg"
          icon={media.wantsCamera ? Camera : Mic}
          loading={media.starting}
          onClick={() => media.start()}
          className="mt-4 w-full sm:w-auto"
        >
          {permissionLabel}
        </Button>

        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink/60">
          <ShieldCheck className="mt-px h-4 w-4 shrink-0 text-success-600" strokeWidth={2} aria-hidden="true" />
          {privacySubject} yalnızca canlı ders sırasında kullanılır. Ders otomatik olarak kaydedilmez.
        </p>
      </div>
    )
  }

  return (
    <div className={cn('flex flex-col gap-4', compact ? 'sm:flex-row sm:items-start sm:gap-5' : '')}>
      <div className={cn('flex flex-col gap-3', compact && 'sm:w-[19rem] sm:shrink-0')}>
        <VideoTile
          stream={media.stream}
          name={name}
          muted
          mirrored
          cameraOn={media.camOn}
          micOn={media.micOn}
          connection="connected"
          placeholder={
            !media.wantsCamera
              ? 'Bu cihazda kamera kullanılmıyor'
              : media.camOn
                ? 'Kamera hazırlanıyor…'
                : 'Kameran kapalı'
          }
          className="aspect-video w-full"
        />

        <div className="flex flex-wrap items-center gap-2">
          {media.wantsMicrophone && (
            <Button
              variant={media.micOn ? 'secondary' : 'danger'}
              size="sm"
              icon={media.micOn ? Mic : MicOff}
              onClick={() => media.toggleMic()}
              aria-pressed={media.micOn}
            >
              {media.micOn ? 'Mikrofon açık' : 'Mikrofon kapalı'}
            </Button>
          )}
          {media.wantsCamera && (
            <Button
              variant={media.camOn ? 'secondary' : 'danger'}
              size="sm"
              icon={media.camOn ? Camera : VideoOff}
              onClick={() => media.toggleCam()}
              aria-pressed={media.camOn}
            >
              {media.camOn ? 'Kamera açık' : 'Kamera kapalı'}
            </Button>
          )}
          {media.wantsCamera && media.devices.cameras.length > 1 && (
            <Button variant="ghost" size="sm" icon={SwitchCamera} onClick={media.switchCamera}>
              Çevir
            </Button>
          )}
        </div>

        {/* Mikrofon seviyesi — konuşurken hareket eder */}
        {media.wantsMicrophone && <div>
          <div className="flex items-center justify-between">
            <span className="label-base mb-0">Mikrofon seviyesi</span>
            <span className="text-xs text-ink/55">
              {media.hasAudio ? (media.micOn ? 'Konuşarak deneyin' : 'Mikrofon kapalı') : 'Mikrofon yok'}
            </span>
          </div>
          <div
            className="mt-1.5 flex h-3 items-stretch gap-1"
            role="meter"
            aria-label="Mikrofon seviyesi"
            aria-valuenow={Math.round(level * 100)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            {Array.from({ length: segments }, (_, i) => (
              <span
                key={i}
                className={cn(
                  'flex-1 rounded-full transition-colors duration-100',
                  i < activeSegments
                    ? i > segments - 3
                      ? 'bg-warning-500'
                      : 'bg-success-500'
                    : 'bg-ink/[0.08]'
                )}
              />
            ))}
          </div>
        </div>}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3">
        {media.problems.map((problem) => (
          <Alert key={problem.code} tone="warning" title={problem.title}>
            <p className="leading-relaxed">{problem.detail}</p>
            <Button variant="ghost" size="xs" icon={RefreshCw} onClick={media.retry} className="mt-2">
              İzinleri yeniden dene
            </Button>
          </Alert>
        ))}

        {media.wantsCamera && <Field label="Kamera">
          {({ id }) => (
            <Select
              id={id}
              value={media.selected.camera ?? ''}
              onChange={(e) => media.selectCamera(e.target.value || null)}
              disabled={!media.devices.cameras.length}
            >
              <option value="">
                {media.devices.cameras.length ? 'Varsayılan kamera' : 'Kamera bulunamadı'}
              </option>
              {media.devices.cameras.map((d, i) => (
                <option key={d.deviceId || i} value={d.deviceId}>
                  {d.label || `Kamera ${i + 1}`}
                </option>
              ))}
            </Select>
          )}
        </Field>}

        {media.wantsMicrophone && <Field
          label="Mikrofon"
          hint={
            media.devices.microphones.length
              ? 'Kulaklık taktıysanız listeden onu seçin.'
              : undefined
          }
        >
          {({ id }) => (
            <Select
              id={id}
              value={media.selected.microphone ?? ''}
              onChange={(e) => media.selectMicrophone(e.target.value || null)}
              disabled={!media.devices.microphones.length}
            >
              <option value="">
                {media.devices.microphones.length ? 'Varsayılan mikrofon' : 'Mikrofon bulunamadı'}
              </option>
              {media.devices.microphones.map((d, i) => (
                <option key={d.deviceId || i} value={d.deviceId}>
                  {d.label || `Mikrofon ${i + 1}`}
                </option>
              ))}
            </Select>
          )}
        </Field>}

        {media.wantsCamera && !media.hasVideo && !media.problems.length && !media.starting && (
          <p className="text-sm leading-relaxed text-ink/60">
            Kamera olmadan da derse katılabilirsin. Sesin ve tahta çalışman etkilenmez.
          </p>
        )}
      </div>
    </div>
  )
}
