import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, CheckCircle2, Loader2, LogIn, ShieldAlert, Users, Wifi } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Alert, AppShell, Badge, Button, Card, CardBody, EmptyState } from '../../components/ui'
import DeviceSetup from '../../components/liveLesson/DeviceSetup'
import DeviceRolePicker from '../../components/liveLesson/DeviceRolePicker'
import LessonStatusBadge from '../../components/liveLesson/LessonStatusBadge'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'
import { useLessonAuth } from '../../lib/liveLesson/preview'
import { fetchLesson, isSchemaMissing, joinLesson } from '../../lib/liveLesson/api'
import { useLessonMedia } from '../../lib/liveLesson/useLessonMedia'
import { DEVICE_ROLES, deviceRoleInfo, loadDeviceRole, saveDeviceRole } from '../../lib/liveLesson/deviceRole'
import { useLessonChannel } from '../../lib/liveLesson/channel'
import { canJoin, joinBlockReason } from '../../lib/liveLesson/status'
import { countdownLabel, durationMinutes, formatLessonDateTime } from '../../lib/liveLesson/time'

/**
 * Ders öncesi bekleme odası.
 *
 * NEDEN DOĞRUDAN STÜDYOYA GİRİLMİYOR
 * ----------------------------------
 * Dersin ilk beş dakikasının "seni duyamıyorum" ile geçmesi, bir saatlik
 * dersin en pahalı beş dakikası. Burada öğrenci kendini görüyor,
 * mikrofonuna konuşup çubuğun oynadığını görüyor, cihazını değiştiriyor
 * ve karşı tarafın odada olup olmadığını biliyor — ancak ondan sonra
 * giriyor.
 *
 * VARLIK BİLGİSİ GERÇEKTİR: "Öğretmen odada" yazısı Supabase Realtime
 * presence'tan gelir, tahmin edilmez.
 */
export default function LessonLobby() {
  const { sessionId } = useParams()
  const { user, profile, role } = useLessonAuth()
  const navigate = useNavigate()

  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [joining, setJoining] = useState(false)
  // Bu cihazın rolü (tek cihaz / tablet / kamera). Cihazda hatırlanır.
  const [deviceRole, setDeviceRole] = useState(() => loadDeviceRole())

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await fetchLesson(sessionId)
      if (!data) setError('not_found')
      else setSession(data)
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [sessionId])

  useEffect(() => {
    load()
  }, [load])

  /* Ders durumu değişince (öğretmen odayı açtığında) ekran kendiliğinden güncellensin */
  useEffect(() => {
    if (!session?.id) return undefined
    const timer = window.setInterval(load, 20_000)
    return () => window.clearInterval(timer)
  }, [session?.id, load])

  const media = useLessonMedia({
    session,
    user,
    role,
    displayName: profile?.full_name,
    deviceRole,
    autoStart: Boolean(session),
  })

  const channel = useLessonChannel({
    roomId: session?.provider_room_id,
    user,
    role,
    displayName: profile?.full_name,
    enabled: Boolean(session?.provider_room_id) && session?.status !== 'cancelled',
  })

  useEffect(() => {
    channel.updateState({ micOn: media.micOn, camOn: media.camOn, connection: 'lobby' })
  }, [media.micOn, media.camOn, channel])

  const isTeacher = role === 'teacher'
  const counterpart = isTeacher ? session?.student : session?.teacher
  const peerPresent = channel.peers.length > 0
  const blockReason = session ? joinBlockReason(session, role) : null
  const joinable = session ? canJoin(session, role) : false

  const checklist = useMemo(
    () => [
      {
        key: 'permission',
        label: 'Tarayıcı izinleri',
        ok: media.hasVideo || media.hasAudio,
        detail: media.hasVideo || media.hasAudio ? 'Verildi' : 'Kamera/mikrofon izni bekleniyor',
      },
      {
        key: 'mic',
        label: 'Mikrofon',
        ok: media.hasAudio,
        detail: media.hasAudio ? (media.micOn ? 'Açık' : 'Kapalı — dilersen aç') : 'Bulunamadı',
      },
      {
        key: 'cam',
        label: 'Kamera',
        ok: media.hasVideo,
        detail: media.hasVideo ? (media.camOn ? 'Açık' : 'Kapalı — dilersen aç') : 'Bulunamadı (zorunlu değil)',
      },
      {
        key: 'channel',
        label: 'Ders bağlantısı',
        ok: channel.status === 'connected',
        detail:
          channel.status === 'connected'
            ? 'Hazır'
            : channel.status === 'failed'
              ? 'Kurulamadı — internetini kontrol et'
              : 'Kuruluyor…',
      },
    ],
    [media.hasVideo, media.hasAudio, media.micOn, media.camOn, channel.status]
  )

  function chooseRole(next) {
    setDeviceRole(next)
    saveDeviceRole(next)
  }

  async function handleJoin() {
    saveDeviceRole(deviceRole)
    setJoining(true)
    setError(null)
    try {
      await joinLesson(sessionId)
      navigate(`/canli-ders/${sessionId}/studyo`)
    } catch (err) {
      setError(err.message)
      setJoining(false)
      load()
    }
  }

  if (schemaMissing) {
    return (
      <AppShell title="Canlı Ders" subtitle="Bekleme odası">
        <SchemaMissingNotice />
      </AppShell>
    )
  }

  if (!loading && (error === 'not_found' || (!session && !error))) {
    return (
      <AppShell title="Canlı Ders" subtitle="Bekleme odası" width="narrow">
        <EmptyState
          icon={ShieldAlert}
          title="Ders bulunamadı"
          description="Bu ders silinmiş olabilir ya da bu derse erişim yetkin yok. Bağlantıyı sana kimin gönderdiğini kontrol et."
          action={
            <Button as={Link} to={isTeacher ? '/ogretmen/canli-dersler' : '/canli-dersler'} icon={ArrowLeft}>
              Derslerime dön
            </Button>
          }
        />
      </AppShell>
    )
  }

  return (
    <AppShell
      title={session?.title ?? 'Canlı Ders'}
      subtitle="Bekleme odası"
      width="narrow"
      loading={loading}
      loadingLabel="Ders bilgisi alınıyor…"
    >
      {error && error !== 'not_found' && (
        <Alert tone="danger" title="Derse katılınamadı">
          {error}
        </Alert>
      )}

      {session && (
        <>
          {/* Ders kimliği */}
          <Card>
            <CardBody className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="font-display text-xl font-bold text-ink">{session.title}</h1>
                  <p className="mt-1 text-sm text-ink/65">
                    {counterpart?.full_name}
                    {session.subject ? ` · ${session.subject}` : ''}
                    {session.topic ? ` · ${session.topic}` : ''}
                  </p>
                </div>
                <LessonStatusBadge status={session.status} />
              </div>

              <p className="text-sm tabular-nums text-ink/70">
                {formatLessonDateTime(session.scheduled_start)} ·{' '}
                {durationMinutes(session.scheduled_start, session.scheduled_end)} dakika
                {session.status === 'scheduled' && countdownLabel(session.scheduled_start) && (
                  <span className="ml-2 font-semibold text-brand-700">
                    {countdownLabel(session.scheduled_start)}
                  </span>
                )}
              </p>

              {session.prep_note && (
                <p className="rounded-input bg-surface-muted px-3.5 py-2.5 text-sm leading-relaxed text-ink/75">
                  <span className="font-semibold text-ink/85">Hazırlık: </span>
                  {session.prep_note}
                </p>
              )}

              {/* Karşı taraf odada mı — gerçek presence bilgisi */}
              <p className="flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-ink/45" strokeWidth={2} aria-hidden="true" />
                <span className={peerPresent ? 'font-semibold text-success-700' : 'text-ink/60'}>
                  {peerPresent
                    ? `${counterpart?.full_name ?? 'Karşı taraf'} odada`
                    : isTeacher
                      ? 'Öğrenci henüz odaya girmedi'
                      : 'Öğretmen henüz odaya girmedi'}
                </span>
              </p>
            </CardBody>
          </Card>

          {blockReason ? (
            <Alert tone={session.status === 'cancelled' ? 'danger' : 'info'} title="Odaya şimdi girilemiyor">
              <p className="leading-relaxed">{blockReason}</p>
              {session.status === 'completed' && (
                <Button as={Link} to={`/canli-ders/${sessionId}/ozet`} size="sm" variant="secondary" className="mt-2">
                  Ders özetini gör
                </Button>
              )}
            </Alert>
          ) : null}

          {/* Bu cihazın rolü — kamera/mikrofon testinden ÖNCE, çünkü
              hangi cihazın neyi açacağını bu belirliyor. */}
          <Card>
            <CardBody className="flex flex-col gap-3">
              <div>
                <h2 className="section-title">Bu cihazı ne olarak kullanacaksın?</h2>
                <p className="mt-0.5 text-sm text-ink/60">
                  Tabletten anlatıp telefonunu kamera olarak kullanabilirsin. Seçimin bu cihazda
                  hatırlanır.
                </p>
              </div>
              <DeviceRolePicker value={deviceRole} onChange={chooseRole} />
              {deviceRole === DEVICE_ROLES.CAMERA && (
                <p className="rounded-input bg-surface-muted px-3.5 py-2.5 text-sm leading-relaxed text-ink/70">
                  Bu cihaz <strong>sessiz</strong> katılır: mikrofonu ve hoparlörü kapalı olur.
                  Yankıyı önleyen şey budur — anlatımı ve sesi tabletten yaparsın.
                </p>
              )}
            </CardBody>
          </Card>

          {/* Cihaz testi */}
          <Card>
            <CardBody className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Kamera ve mikrofon</h2>
                <p className="mt-0.5 text-sm text-ink/60">
                  Derse girmeden önce kendini gör, mikrofonuna konuşup çubuğun oynadığını kontrol et.
                </p>
              </div>

              <DeviceSetup media={media} name={profile?.full_name} compact />

              <ul className="grid gap-2 sm:grid-cols-2">
                {checklist.map((item) => (
                  <li key={item.key} className="flex items-center gap-2 text-sm">
                    <span
                      className={cn(
                        'grid h-5 w-5 shrink-0 place-items-center rounded-full',
                        item.ok ? 'bg-success-500/15 text-success-700' : 'bg-ink/[0.06] text-ink/45'
                      )}
                    >
                      {item.ok ? (
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
                      ) : (
                        <Loader2 className="h-3 w-3 animate-spin" aria-hidden="true" />
                      )}
                    </span>
                    <span className="text-ink/75">{item.label}</span>
                    <span className="ml-auto text-xs text-ink/50">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>

          {!media.remoteMediaAvailable && (
            <Alert tone="info" icon={Wifi} title="Yerel önizleme">
              Görüntülü görüşme sağlayıcısı henüz bağlanmadı. Kameran ve mikrofonun gerçekten
              çalışıyor, tahta ve mesajlar canlı olarak karşılıklı gidiyor; ancak karşı tarafın
              GÖRÜNTÜSÜ ve SESİ bu sürümde aktarılmıyor.
            </Alert>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <Button
              size="lg"
              icon={LogIn}
              loading={joining}
              disabled={!joinable}
              onClick={handleJoin}
            >
              {isTeacher && session.status === 'scheduled' ? 'Odayı Aç ve Gir' : 'Derse Katıl'}
            </Button>
            <Button
              as={Link}
              to={isTeacher ? '/ogretmen/canli-dersler' : '/canli-dersler'}
              variant="ghost"
              icon={ArrowLeft}
            >
              Derslerime dön
            </Button>
            {!media.hasVideo && joinable && (
              <Badge tone="neutral" size="sm">
                Kamerasız katılıyorsun
              </Badge>
            )}
          </div>
        </>
      )}
    </AppShell>
  )
}
