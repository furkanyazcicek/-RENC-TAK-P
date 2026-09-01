import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  BookOpen,
  Check,
  Copy,
  Laptop,
  RefreshCw,
  Loader2,
  MonitorUp,
  PenLine,
  ShieldAlert,
  Video as VideoIcon,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { Alert, Badge, Button, Drawer, EmptyState, Modal, Textarea, Field, useToast } from '../../components/ui'
import CallControls from '../../components/liveLesson/CallControls'
import DeviceSetup from '../../components/liveLesson/DeviceSetup'
import DeviceRolePicker from '../../components/liveLesson/DeviceRolePicker'
import LessonBoard from '../../components/liveLesson/LessonBoard'
import LessonChatPanel from '../../components/liveLesson/LessonChatPanel'
import LessonStatusBadge from '../../components/liveLesson/LessonStatusBadge'
import MaterialPanel from '../../components/liveLesson/MaterialPanel'
import MaterialViewer from '../../components/liveLesson/MaterialViewer'
import StudentContextPanel from '../../components/liveLesson/StudentContextPanel'
import VideoTile from '../../components/liveLesson/VideoTile'
import { isLessonPreview, useLessonAuth } from '../../lib/liveLesson/preview'
import {
  addMaterial,
  fetchLesson,
  fetchMaterials,
  fetchPrivateNote,
  isSchemaMissing,
  joinLesson,
  leaveLesson,
  removeMaterial,
  savePrivateNote,
  saveSummary,
  setLessonStatus,
  updateMaterial,
} from '../../lib/liveLesson/api'
import { CHANNEL_EVENTS, useLessonChannel } from '../../lib/liveLesson/channel'
import { useLessonMedia } from '../../lib/liveLesson/useLessonMedia'
import { DEVICE_ROLES, deviceRoleInfo, loadDeviceRole, saveDeviceRole } from '../../lib/liveLesson/deviceRole'
import { CONNECTION_LABELS } from '../../lib/liveLesson/rtc/provider'
import { canJoin } from '../../lib/liveLesson/status'
import { formatClock } from '../../lib/liveLesson/time'
import { formatFileSize, MAX_UPLOAD_MB, uploadLessonFile } from '../../lib/liveLesson/materialSources'
import '../../styles/canli-ders.css'

/**
 * CANLI DERS STÜDYOSU
 *
 * ═══════════════════════════════════════════════════════════════════
 * NEDEN `AppShell` DEĞİL
 * ═══════════════════════════════════════════════════════════════════
 * AppShell sidebar, üst şerit, mobil alt çubuk ve sayfa dolgusu ekler;
 * bunların toplamı 1440 px'lik bir ekranda tahtaya kalan alanı belirgin
 * biçimde daraltıyor. Stüdyo bunun yerine kendi tam ekran kabuğunu
 * kullanır (`src/styles/canli-ders.css`). Genel gezinme kasten yok:
 * ders sırasında yanlışlıkla "Ödevler"e tıklamak dersten düşmek demek.
 * Çıkış yolu tek ve açık: "Ayrıl" düğmesi.
 *
 * ═══════════════════════════════════════════════════════════════════
 * KAHRAMAN: ÖĞRENME NESNESİ
 * ═══════════════════════════════════════════════════════════════════
 * Merkez alan her zaman tahta veya materyaldir. Video kutuları
 * masaüstünde sabit genişlikli dar bir şeritte, tablet ve telefonda ise
 * sahnenin köşesinde yüzen küçük kutulardadır. Hiçbir düzende video
 * tahtadan büyük olamaz.
 */

const DRAWERS = { NONE: null, MATERIALS: 'materials', CONTEXT: 'context', CHAT: 'chat', DEVICES: 'devices', NOTE: 'note' }

export default function LessonStudio() {
  const { sessionId } = useParams()
  const { user, profile, role } = useLessonAuth()
  const navigate = useNavigate()
  const toast = useToast()

  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)
  const [accessError, setAccessError] = useState(null)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [materials, setMaterials] = useState([])
  const [openMaterial, setOpenMaterial] = useState(null)
  const [drawer, setDrawer] = useState(DRAWERS.NONE)
  const [mobileView, setMobileView] = useState('board')
  const [unreadChat, setUnreadChat] = useState(0)
  const [elapsed, setElapsed] = useState(0)
  const [endAsk, setEndAsk] = useState(false)
  const [privateNote, setPrivateNote] = useState('')
  const [savingNote, setSavingNote] = useState(false)
  const [ending, setEnding] = useState(false)
  const [announcement, setAnnouncement] = useState('')

  const boardApiRef = useRef(null)
  const joinedAtRef = useRef(Date.now())
  const myJoinedAtRef = useRef(new Date().toISOString())
  const [autoMuted, setAutoMuted] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const [deviceRole, setDeviceRole] = useState(() => loadDeviceRole())
  const leftRef = useRef(false)

  const isTeacher = role === 'teacher'

  /* ---------------- Ders yükleme ve yetki ---------------- */
  const load = useCallback(async () => {
    try {
      const data = await fetchLesson(sessionId)
      if (!data) {
        setAccessError('Ders bulunamadı veya bu derse erişim yetkin yok.')
        return null
      }
      setSession(data)
      return data
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      else setAccessError(err.message)
      return null
    }
  }, [sessionId])

  useEffect(() => {
    let cancelled = false

    async function boot() {
      const data = await load()
      if (cancelled || !data) {
        setLoading(false)
        return
      }

      // Bekleme odasından gelinmediyse katılım kaydını burada aç.
      const flag = `drk-lesson-joined-${sessionId}`
      if (!window.sessionStorage.getItem(flag)) {
        try {
          await joinLesson(sessionId)
          window.sessionStorage.setItem(flag, '1')
        } catch (err) {
          if (!cancelled) {
            setAccessError(err.message)
            setLoading(false)
          }
          return
        }
        if (!cancelled) await load()
      }

      if (!cancelled) {
        try {
          setMaterials(await fetchMaterials(sessionId))
        } catch {
          /* materyaller kritik değil */
        }
        if (isTeacher) {
          const note = await fetchPrivateNote(sessionId).catch(() => null)
          if (!cancelled) setPrivateNote(note?.outcome_note ?? '')
        }
        setLoading(false)
      }
    }

    boot()
    return () => {
      cancelled = true
    }
  }, [sessionId, load, isTeacher])

  /* ---------------- Medya ve kanal ---------------- */
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
    enabled: Boolean(session?.provider_room_id),
  })

  /**
   * DURUM BİLDİRİMİ — SONSUZ DÖNGÜYE DİKKAT.
   *
   * Bağımlılıkta `channel` NESNESİ vardı; o nesne her karede yeniden
   * üretildiği için bu etki her karede çalışıyor, her çalışmasında
   * "buradayım" bildirimi gönderiyordu. Bildirim karşı tarafta bir
   * eşitleme olayı doğuruyor, o olay yeni bir kare çizdiriyor ve etki
   * yeniden çalışıyordu: saniyede onlarca gereksiz bildirim. Anlık
   * kanalın saniyelik mesaj hakkı bununla dolup taşıyor, sunucu kanalı
   * kapatıyor ve ekranda sürekli "Yeniden bağlanılıyor" yazıyordu.
   * Artık yalnızca GERÇEKTEN değişen bilgiler bildirimi tetikler.
   */
  const bildirDurum = channel.updateState
  const kanalDurumu = channel.status
  useEffect(() => {
    bildirDurum({
      micOn: media.micOn,
      camOn: media.camOn,
      screenOn: media.screenOn,
      connection: kanalDurumu,
    })
  }, [media.micOn, media.camOn, media.screenOn, bildirDurum, kanalDurumu])

  /**
   * GERÇEK GÖRÜŞME ODASINA KATIL.
   *
   * Bekleme odası yalnızca yerel önizleme yapar; sesin ve görüntünün
   * karşı tarafa gitmesi buradan başlar. Sağlayıcı yapılandırılmamışsa
   * bu çağrı sessizce "yerel önizleme" modunda kalır — hata gösterip
   * öğretmeni korkutmaz, arayüz zaten durumu açıkça yazar.
   */
  const joinedRoomRef = useRef(false)
  useEffect(() => {
    if (!session || !media.remoteMediaAvailable || joinedRoomRef.current) return
    joinedRoomRef.current = true
    media.join()
  }, [session, media])

  /* Süre sayacı */
  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsed(Math.floor((Date.now() - joinedAtRef.current) / 1000))
    }, 1000)
    return () => window.clearInterval(timer)
  }, [])

  /* Ayrılırken katılım süresini yaz ve medyayı kapat */
  useEffect(() => {
    return () => {
      if (leftRef.current) return
      leftRef.current = true
      const seconds = Math.floor((Date.now() - joinedAtRef.current) / 1000)
      leaveLesson(sessionId, seconds)
      window.sessionStorage.removeItem(`drk-lesson-joined-${sessionId}`)
    }
  }, [sessionId])

  /* Ders durumu değişikliğini anlık dinle (öğretmen dersi bitirirse
     öğrenci de özet ekranına düşsün) */
  useEffect(() => {
    if (!session?.id) return undefined
    const timer = window.setInterval(async () => {
      const fresh = await load()
      if (fresh && ['completed', 'cancelled', 'no_show'].includes(fresh.status)) {
        navigate(`/canli-ders/${sessionId}/ozet`, { replace: true })
      }
    }, 15_000)
    return () => window.clearInterval(timer)
  }, [session?.id, load, navigate, sessionId])

  /* Okunmamış mesaj sayacı */
  useEffect(() => {
    if (!channel?.subscribe) return undefined
    return channel.subscribe(CHANNEL_EVENTS.CHAT, (payload) => {
      if (payload?.from === channel.deviceId) return
      setUnreadChat((n) => (drawer === DRAWERS.CHAT ? 0 : n + 1))
    })
  }, [channel, drawer])

  /* Karşı tarafın gelişi/gidişi — aşırı bildirim üretmeden tek cümle */
  // "Karşı taraf" yalnızca DİĞER kişidir. Kendi ikinci cihazın
  // (bilgisayar + tablet) katılımcı sayılmaz, yoksa öğretmen kendini
  // öğrenci sanır ve ders kendiliğinden "başladı" olurdu.
  const peerPresent = channel.remotePeers.length > 0
  const otherOwnDevices = channel.ownDevices
  const counterpart = isTeacher ? session?.student : session?.teacher
  useEffect(() => {
    if (!counterpart?.full_name) return
    setAnnouncement(
      peerPresent ? `${counterpart.full_name} derse katıldı.` : `${counterpart.full_name} odadan ayrıldı.`
    )
  }, [peerPresent, counterpart?.full_name])

  /**
   * İKİ CİHAZDAN BAĞLANMA — YANKI ÖNLEME
   *
   * Öğretmen bilgisayardan kamerayı açıp tabletten tahtaya yazabiliyor.
   * İki cihaz aynı odadaysa ve ikisinin de mikrofonu açıksa biri
   * diğerinin hoparlörünü duyar; ortaya çığlık gibi bir yankı çıkar.
   * Bu yüzden SONRA katılan cihaz mikrofonunu kendiliğinden kapatır.
   * Karar tarafsız: iki cihaz da aynı katılım zamanlarına bakıp aynı
   * sonuca varır, ikisi birden susmaz. Öğretmen isterse elle açar.
   */
  useEffect(() => {
    // Rol açıkça seçildiyse karışma: kullanıcı ne istediğini söylemiş.
    if (deviceRole !== DEVICE_ROLES.SOLO) return
    if (autoMuted || !media.micOn || otherOwnDevices.length === 0) return
    const iAmLater = otherOwnDevices.some((d) => d.joinedAt && d.joinedAt < myJoinedAtRef.current)
    if (!iAmLater) return
    setAutoMuted(true)
    media.toggleMic(false)
  }, [otherOwnDevices, media, autoMuted, deviceRole])

  /**
   * Öğrenci odaya girdiğinde ders kendiliğinden "Devam ediyor" olur.
   *
   * Bağımlılık `session` NESNESİ DEĞİL, `session.status`: ders bilgisi
   * 15 saniyede bir yeniden okunuyor ve her okumada yeni bir nesne
   * üretiyor. Nesneye bağlanınca efekt her tazelemede yeniden çalışıp
   * aynı isteği tekrar tekrar gönderiyordu.
   */
  const liveMarkedRef = useRef(false)
  useEffect(() => {
    if (!isTeacher || !session || liveMarkedRef.current) return
    if (session.status === 'lobby_open' && peerPresent) {
      liveMarkedRef.current = true
      setLessonStatus(sessionId, 'live')
        .then(load)
        .catch(() => {
          liveMarkedRef.current = false
        })
    }
  }, [isTeacher, session?.status, peerPresent, sessionId, load])

  /* ---------------- Materyal işlemleri ---------------- */
  const reloadMaterials = useCallback(async () => {
    try {
      setMaterials(await fetchMaterials(sessionId))
    } catch {
      /* yoksay */
    }
  }, [sessionId])

  /**
   * Tahtadaki "PDF aç" düğmesi için kısa yol.
   * Dosya önce ortak depoya gider; böylece öğrenci de aynı PDF sayfasını
   * kendi cihazında çizer. Yalnızca yerel bir dosya adresi kullanmak,
   * öğrenci tarafında boş sayfa gösterirdi.
   */
  const importPdfToBoard = useCallback(
    async (file) => {
      if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
        throw new Error(
          `Bu PDF ${formatFileSize(file.size)}. Üst sınır ${MAX_UPLOAD_MB} MB; dosyayı sıkıştırıp tekrar dene.`
        )
      }
      const title = file.name.replace(/\.pdf$/i, '')
      // Geliştirici önizlemesinde canlı depoya dosya yazmayız.
      if (isLessonPreview()) return { url: URL.createObjectURL(file), title }

      const url = await uploadLessonFile(sessionId, file)
      await addMaterial(sessionId, user.id, {
        kind: 'pdf',
        title,
        url,
        visible_to_student: true,
        order_index: materials.length,
      })
      await reloadMaterials()
      return { url, title }
    },
    [materials.length, reloadMaterials, sessionId, user?.id]
  )

  const handleOpenMaterial = useCallback(
    (material) => {
      setOpenMaterial(material)
      setMobileView('material')
      setDrawer(DRAWERS.NONE)
      channel.send(CHANNEL_EVENTS.FOCUS, { materialId: material.id, by: user?.id })
    },
    [channel, user?.id]
  )

  /* Öğretmen bir materyali açtığında öğrencinin ekranı da oraya baksın */
  useEffect(() => {
    if (!channel?.subscribe) return undefined
    return channel.subscribe(CHANNEL_EVENTS.FOCUS, (payload) => {
      if (!payload || payload.from === channel.deviceId) return
      if (payload.materialId === null) {
        setOpenMaterial(null)
        setMobileView('board')
        return
      }
      const found = materials.find((m) => m.id === payload.materialId)
      if (found && (isTeacher || found.visible_to_student)) {
        setOpenMaterial(found)
        setMobileView('material')
      }
    })
  }, [channel, materials, isTeacher])

  /**
   * BELGEYİ TAHTAYA AÇ — dersin asıl çalışma biçimi.
   *
   * PDF'in her sayfası, o sayfayı zemin alan bir tahta sayfasına dönüşür;
   * öğretmen üstüne kalemle yazar. Görselde ise tek sayfa açılır.
   * Materyal aynı zamanda derse eklenir ve öğrenciyle paylaşılır — yoksa
   * öğrenci belgeyi kendi tarafında çizemez.
   */
  const openOnBoard = useCallback(
    async (item) => {
      const url = item.meta?.imageUrl ?? item.url
      if (!url) return { ok: false }

      /**
       * ÖNCE TAHTAYA DÖN.
       *
       * Merkez alanda bir materyal açıkken tahta bileşeni SÖKÜLÜ olur ve
       * `boardApiRef.current` boştur. Sıra ters olsaydı "Tahtada aç"
       * materyal görüntüleyicisi açıkken hiçbir şey yapmazdı.
       */
      setOpenMaterial(null)
      setMobileView('board')
      setDrawer(DRAWERS.NONE)
      channel.send(CHANNEL_EVENTS.FOCUS, { materialId: null, by: user?.id })
      // Tahtanın monte olup kendini ölçmesi için bir kare bekle.
      await new Promise((resolve) => window.setTimeout(resolve, 80))
      if (!boardApiRef.current) return { ok: false }

      const isPdf = item.kind === 'pdf' || /\.pdf($|\?)/i.test(url)
      let result
      if (isPdf) {
        result = await boardApiRef.current.openPdf(url, { title: item.title })
      } else {
        boardApiRef.current.placeImage(url, item.title)
        result = { ok: true }
      }

      if (result?.ok) {

        // Öğrencinin de belgeyi görebilmesi için derse ekli ve paylaşılmış olmalı.
        const existing = materials.find((m) => m.url === url)
        try {
          if (!existing) {
            await addMaterial(sessionId, user.id, {
              kind: isPdf ? 'pdf' : 'image',
              title: item.title,
              url,
              visible_to_student: true,
              order_index: materials.length,
            })
            await reloadMaterials()
          } else if (!existing.visible_to_student) {
            await updateMaterial(existing.id, { visible_to_student: true })
            await reloadMaterials()
          }
        } catch {
          // Paylaşım yazılamadıysa ders durmaz; öğretmen çekmeceden elle paylaşabilir.
        }
        toast.success(
          isPdf && result.count > 1 ? `${result.count} sayfa tahtaya açıldı` : 'Tahtaya açıldı'
        )
      }
      return result ?? { ok: false }
    },
    [channel, materials, reloadMaterials, sessionId, toast, user?.id]
  )

  const sendToBoard = useCallback(
    async (material) => {
      const url = material.meta?.imageUrl ?? material.url
      if (!url) {
        toast.error('Bu materyalin tahtaya aktarılabilir bir görseli yok.')
        return
      }
      // Tahta sökülüyse önce geri getir (bkz. openOnBoard'daki aynı not).
      setOpenMaterial(null)
      setMobileView('board')
      channel.send(CHANNEL_EVENTS.FOCUS, { materialId: null, by: user?.id })
      await new Promise((resolve) => window.setTimeout(resolve, 80))
      boardApiRef.current?.placeImage(url, material.title)
      toast.success('Görsel tahtaya eklendi')
    },
    [channel, toast, user?.id]
  )

  /** Öğrenciye gönderilecek ders bağlantısı. */
  async function copyLessonLink() {
    try {
      await navigator.clipboard.writeText(`${window.location.origin}/canli-ders/${sessionId}`)
      setLinkCopied(true)
      toast.success('Ders bağlantısı kopyalandı')
      window.setTimeout(() => setLinkCopied(false), 2500)
    } catch {
      toast.error('Bağlantı kopyalanamadı', {
        description: 'Adres çubuğundaki bağlantıyı elle kopyalayabilirsin.',
      })
    }
  }

  /* ---------------- Ayrılma ve bitirme ---------------- */
  async function handleLeave() {
    leftRef.current = true
    const seconds = Math.floor((Date.now() - joinedAtRef.current) / 1000)
    await boardApiRef.current?.flush()
    await leaveLesson(sessionId, seconds)
    await media.leave()
    window.sessionStorage.removeItem(`drk-lesson-joined-${sessionId}`)
    navigate(isTeacher ? '/ogretmen/canli-dersler' : '/canli-dersler')
  }

  async function handleEndForEveryone() {
    setEnding(true)
    try {
      await boardApiRef.current?.flush()

      // Tahta çıktısını özete iliştir — ders bitince kaybolmasın.
      let boardImage = null
      try {
        if (boardApiRef.current?.hasContent()) {
          const canvas = boardApiRef.current.exportCurrentPage(0.9)
          boardImage = canvas.toDataURL('image/webp', 0.72)
          // Veri URL'i çok büyükse özete koymuyoruz: satır şişer ve
          // öğrencinin özet sayfası ağırlaşır.
          if (boardImage.length > 900_000) boardImage = null
        }
      } catch {
        boardImage = null
      }

      await saveSummary(sessionId, {
        teacherId: session.teacher_id,
        studentId: session.student_id,
        completed_at: new Date().toISOString(),
        board_image_url: boardImage,
      })
      await setLessonStatus(sessionId, 'completed')
      leftRef.current = true
      await leaveLesson(sessionId, Math.floor((Date.now() - joinedAtRef.current) / 1000))
      await media.leave()
      window.sessionStorage.removeItem(`drk-lesson-joined-${sessionId}`)
      navigate(`/canli-ders/${sessionId}/ozet`, { replace: true })
    } catch (err) {
      toast.error('Ders bitirilemedi', { description: err.message })
      setEnding(false)
      setEndAsk(false)
    }
  }

  /* ---------------- Erken çıkışlar ---------------- */
  if (schemaMissing || accessError) {
    return (
      <div className="grid min-h-screen place-items-center bg-paper p-6">
        <EmptyState
          icon={ShieldAlert}
          title={schemaMissing ? 'Canlı ders altyapısı kurulmadı' : 'Bu derse erişemiyorsun'}
          description={
            schemaMissing
              ? 'Veritabanı kurulumu (supabase/migration_live_lessons.sql) henüz uygulanmadı.'
              : accessError
          }
          action={
            <Button onClick={() => navigate(isTeacher ? '/ogretmen/canli-dersler' : '/canli-dersler')}>
              Derslerime dön
            </Button>
          }
        />
      </div>
    )
  }

  if (loading || !session) {
    return (
      <div className="grid min-h-screen place-items-center bg-ink text-white">
        <p className="flex items-center gap-2 text-sm">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Ders stüdyosu hazırlanıyor…
        </p>
      </div>
    )
  }

  if (!canJoin(session, role)) {
    return (
      <div className="grid min-h-screen place-items-center bg-paper p-6">
        <EmptyState
          icon={ShieldAlert}
          title="Ders sona erdi"
          description="Bu ders artık açık değil. Ders özetine bakabilirsin."
          action={
            <Button onClick={() => navigate(`/canli-ders/${sessionId}/ozet`)}>Ders özetini gör</Button>
          }
        />
      </div>
    )
  }

  const peerState = channel.remotePeers[0] ?? null
  // Karşı tarafın GERÇEK görüntüsü: LiveKit katılımcıları kimlik olarak
  // Supabase kullanıcı numarasını taşır, bu yüzden eşleştirme kesindir.
  const counterpartId = isTeacher ? session?.student_id : session?.teacher_id
  /**
   * Karşı taraf iki cihazdan bağlanmış olabilir (öğretmenin bilgisayarı +
   * tableti). Kamerası açık olanı tercih ediyoruz; hiçbiri açık değilse
   * ilkini alıyoruz. Aksi hâlde öğrenci, öğretmenin kamerasız tabletine
   * bakıp "hocam görünmüyor" derdi.
   */
  const counterpartDevices = media.remoteParticipants.filter((p) => p.userId === counterpartId)
  const remote = counterpartDevices.find((p) => p.camOn || p.screenOn) ?? counterpartDevices[0] ?? null
  const showMaterial = Boolean(openMaterial) && (mobileView === 'material' || window.innerWidth >= 768)

  /**
   * Video kutuları üç yerde görünür: masaüstü şeridi, telefonun tahta
   * altındaki şeridi ve telefonun "Görüntü" sekmesi. Üçünde de yükseklik
   * kuralı farklı olduğu için kutu sınıfı dışarıdan verilir.
   */
  const renderTiles = (tileClass) => (
    <>
      <VideoTile
        stream={media.stream}
        name={profile?.full_name ?? 'Sen'}
        label="Sen"
        muted
        mirrored
        cameraOn={media.camOn}
        micOn={media.micOn}
        connection="connected"
        placeholder={media.camOn ? 'Kamera açılıyor…' : 'Kameran kapalı'}
        className={tileClass}
      />
      <VideoTile
        stream={remote?.stream ?? null}
        /* Kamera cihazında uzak ses ÇALINMAZ: tabletin sesi buradan
           çıkıp tabletin mikrofonuna geri girer ve yankı olurdu. */
        muted={!media.audioOutputEnabled}
        name={counterpart?.full_name ?? (isTeacher ? 'Öğrenci' : 'Öğretmen')}
        cameraOn={remote?.camOn ?? false}
        micOn={remote?.micOn ?? peerState?.micOn ?? false}
        speaking={remote?.speaking ?? false}
        connection={remote || peerPresent ? 'connected' : 'closed'}
        placeholder={
          remote
            ? 'Kamerası kapalı'
            : peerPresent
              ? media.remoteMediaAvailable
                ? 'Görüntü bekleniyor…'
                : 'Odada — görüntü bu sürümde aktarılmıyor'
              : 'Henüz katılmadı'
        }
        className={tileClass}
      />
    </>
  )

  return (
    <div className="ders-studyo">
      {/* Üst şerit */}
      <header className="flex shrink-0 items-center gap-3 px-3 py-2 text-white sm:px-4">
        <div className="ders-studyo__baslik flex-1">
          <p className="ders-studyo__baslik font-display text-sm font-bold sm:text-base">{session.title}</p>
          <p className="ders-studyo__baslik text-2xs text-white/55">
            {counterpart?.full_name}
            {session.subject ? ` · ${session.subject}` : ''}
            {session.topic ? ` · ${session.topic}` : ''}
          </p>
        </div>

        {isTeacher && (
          <button
            type="button"
            onClick={copyLessonLink}
            aria-label="Ders bağlantısını kopyala"
            title="Ders bağlantısını kopyala — öğrenciye gönder"
            className="focus-ring inline-flex h-9 items-center gap-1.5 rounded-btn px-2.5 text-2xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            {linkCopied ? (
              <Check className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
            ) : (
              <Copy className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            )}
            <span className="hidden md:inline">{linkCopied ? 'Kopyalandı' : 'Bağlantı'}</span>
          </button>
        )}

        {/* Bu cihazın rolü — yanlış cihazdan girildiyse hemen görülsün */}
        {deviceRole !== DEVICE_ROLES.SOLO && (
          <button
            type="button"
            onClick={() => setDrawer(DRAWERS.DEVICES)}
            title="Cihaz rolünü değiştir"
            className="focus-ring hidden h-9 items-center gap-1.5 rounded-full bg-white/10 px-2.5 text-2xs font-semibold text-white/80 transition-colors hover:bg-white/[0.16] sm:inline-flex"
          >
            {deviceRoleInfo(deviceRole).short}
          </button>
        )}

        <span className="hidden sm:block">
          <LessonStatusBadge status={session.status} size="sm" />
        </span>

        <span
          className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-semibold tabular-nums text-white/85"
          aria-label={`Ders süresi ${formatClock(elapsed)}`}
        >
          {formatClock(elapsed)}
        </span>

        <span
          className={cn(
            'hidden items-center gap-1.5 rounded-full px-2.5 py-1 text-2xs font-semibold sm:inline-flex',
            channel.status === 'connected' ? 'bg-success-500/20 text-success-500' : 'bg-warning-500/20 text-warning-500'
          )}
        >
          <span
            className={cn(
              'h-1.5 w-1.5 rounded-full',
              channel.status === 'connected' ? 'bg-success-500' : 'bg-warning-500 animate-pulse-soft'
            )}
            aria-hidden="true"
          />
          {CONNECTION_LABELS[channel.status] ?? 'Bağlantı'}
        </span>

        {/* Bağlantı toparlanmadıysa elle deneme yolu AÇIK olmalı —
            "sayfayı yenile" ders ortasında kabul edilebilir bir çözüm değil. */}
        {(channel.status === 'failed' || channel.status === 'reconnecting') && (
          <button
            type="button"
            onClick={() => channel.reconnect()}
            className="focus-ring inline-flex h-9 items-center gap-1.5 rounded-btn bg-warning-500/20 px-2.5 text-2xs font-semibold text-warning-500 transition-colors hover:bg-warning-500/30"
          >
            <RefreshCw className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Yeniden bağlan
          </button>
        )}
      </header>

      {/* Ekran okuyucu duyuruları — tek, sakin bölge */}
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>

      {/* Mobil odak seçici */}
      <div className="flex shrink-0 gap-1 px-3 pb-2 md:hidden">
        {[
          { key: 'board', label: 'Tahta', Icon: PenLine },
          { key: 'material', label: 'Materyal', Icon: BookOpen, disabled: !openMaterial },
          { key: 'video', label: 'Görüntü', Icon: VideoIcon },
        ].map((item) => (
          <button
            key={item.key}
            type="button"
            disabled={item.disabled}
            onClick={() => setMobileView(item.key)}
            aria-pressed={mobileView === item.key}
            className={cn(
              'focus-ring flex min-h-[2.5rem] flex-1 items-center justify-center gap-1.5 rounded-btn px-2 text-xs font-semibold transition-colors',
              'disabled:opacity-35',
              mobileView === item.key ? 'bg-white/15 text-white' : 'text-white/60 hover:bg-white/10'
            )}
          >
            <item.Icon className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            {item.label}
          </button>
        ))}
      </div>

      {/* Ana alan */}
      <main className="flex min-h-0 flex-1 gap-2.5 px-2.5 pb-2 sm:px-3">
        <section className="relative flex min-h-0 min-w-0 flex-1 flex-col">
          <div
            className={cn(
              'ders-studyo__sahne relative',
              mobileView === 'video' && 'hidden md:flex'
            )}
          >
            {media.screenOn ? (
              <div className="flex min-h-0 flex-1 flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge tone="info" icon={MonitorUp} size="sm">
                    Ekranını paylaşıyorsun
                  </Badge>
                  <Button size="xs" variant="ghost" onClick={media.stopScreen}>
                    Paylaşımı durdur
                  </Button>
                  <Button size="xs" variant="secondary" icon={PenLine} onClick={media.stopScreen} className="ml-auto">
                    Tahtaya dön
                  </Button>
                </div>
                <VideoTile
                  stream={media.screenStream}
                  name="Paylaşılan ekran"
                  muted
                  cameraOn
                  micOn
                  connection="connected"
                  className="min-h-0 flex-1"
                />
              </div>
            ) : showMaterial ? (
              <MaterialViewer
                material={openMaterial}
                onSendToBoard={isTeacher ? sendToBoard : undefined}
                onClose={() => {
                  setOpenMaterial(null)
                  setMobileView('board')
                  channel.send(CHANNEL_EVENTS.FOCUS, { materialId: null, by: user?.id })
                }}
              />
            ) : (
              <LessonBoard
                sessionId={sessionId}
                userId={user?.id}
                deviceId={channel.deviceId}
                canEdit
                isTeacher={isTeacher}
                channel={channel}
                boardApiRef={boardApiRef}
                onImportPdf={isTeacher ? importPdfToBoard : undefined}
                /* TELEFONDA TAHTA EN-BOY ORANINA SABİTLENİR.
                   Sayfa 16:10 yatay, telefon ekranı ise dikey. Tahtayı
                   kalan bütün yüksekliğe yaymak, sayfayı ortada küçük
                   bırakıp altında ve üstünde bomboş bir alan üretiyordu.
                   Kabı sayfanın oranına sabitleyince boşluk kalmıyor ve
                   kazanılan alan katılımcı şeridine gidiyor. */
                wrapperClassName="max-md:flex-none max-md:aspect-[16/10]"
                overlay={
                  /* Tablet ve telefonda yüzen kamera kutusu. Tahtanın
                     TUVAL kabının içine basılır; sahnenin köşesine
                     konsaydı araç çubuğunun üstüne biner ve araçları
                     örterdi. */
                  <div className="ders-studyo__yuzen max-md:hidden">
                    <VideoTile
                      stream={media.stream}
                      name={profile?.full_name ?? 'Sen'}
                      muted
                      mirrored
                      cameraOn={media.camOn}
                      micOn={media.micOn}
                      connection="connected"
                      className="aspect-video w-full shadow-elevated"
                    />
                  </div>
                }
              />
            )}
          </div>

          {/* Telefonda tahta altındaki katılımcı şeridi — tahtanın en-boy
              kısıtından kazanılan alan burada değerlendirilir. */}
          {mobileView === 'board' && !media.screenOn && !showMaterial && (
            /* Şerit kalan yüksekliği ALIR: tahta oranına sabitlendiği için
               artan alan boş koyu bir bant olarak kalmasın, karşı tarafın
               kutusu büyüsün. */
            <div className="mt-2.5 grid min-h-[6rem] flex-1 grid-cols-2 gap-2.5 md:hidden">
              {renderTiles('h-full w-full')}
            </div>
          )}

          {/* Telefonda "Görüntü" sekmesi */}
          {mobileView === 'video' && (
            <div className="flex min-h-0 flex-1 flex-col gap-2.5 md:hidden">
              {renderTiles('aspect-video w-full')}
              {!media.remoteMediaAvailable && (
                <Alert tone="info" title="Yerel önizleme">
                  Karşı tarafın görüntüsü bu sürümde aktarılmıyor. Sesli anlatım için telefonla
                  arama, tahta ve mesajlar için bu ekran kullanılabilir.
                </Alert>
              )}
            </div>
          )}
        </section>

        {/* Masaüstü video şeridi */}
        <aside className="ders-studyo__seritler" aria-label="Katılımcılar">
          {renderTiles('aspect-video w-full')}
          {!media.remoteMediaAvailable && (
            <p className="rounded-card bg-white/[0.06] px-3 py-2 text-2xs leading-relaxed text-white/60">
              Görüntülü görüşme sağlayıcısı bağlanmadı. Tahta, materyaller ve mesajlar canlı
              çalışıyor; karşı tarafın görüntüsü ve sesi aktarılmıyor.
            </p>
          )}
        </aside>
      </main>

      {/* Kontrol şeridi */}
      {/* İkinci cihaz bilgisi — öğretmen bilgisayar + tablet kullanırken */}
      {otherOwnDevices.length > 0 && (
        <div className="shrink-0 px-2.5 pb-1.5 sm:px-3">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-btn bg-white/[0.07] px-3 py-2 text-2xs text-white/70">
            <Laptop className="h-3.5 w-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
            <span className="font-semibold text-white/85">
              Bu derse {otherOwnDevices.length + 1} cihazından bağlısın.
            </span>
            <span>
              {autoMuted
                ? 'Yankı olmasın diye bu cihazın mikrofonu kapatıldı — anlatımı diğer cihazdan yap.'
                : 'İki cihazın mikrofonu birden açıksa yankı olur; birini kapalı tut.'}
            </span>
          </p>
        </div>
      )}

      <footer className="shrink-0 px-2.5 pb-2 sm:px-3">
        <CallControls
          role={role}
          micOn={media.micOn}
          camOn={media.camOn}
          screenOn={media.screenOn}
          onToggleMic={() => media.toggleMic()}
          onToggleCam={() => media.toggleCam()}
          onToggleScreen={() => (media.screenOn ? media.stopScreen() : media.startScreen())}
          onOpenDevices={() => setDrawer(DRAWERS.DEVICES)}
          onOpenMaterials={() => setDrawer(DRAWERS.MATERIALS)}
          onOpenContext={() => setDrawer(DRAWERS.CONTEXT)}
          onOpenChat={() => {
            setDrawer(DRAWERS.CHAT)
            setUnreadChat(0)
          }}
          onOpenNote={() => setDrawer(DRAWERS.NOTE)}
          onBackToBoard={() => {
            setOpenMaterial(null)
            setMobileView('board')
            channel.send(CHANNEL_EVENTS.FOCUS, { materialId: null, by: user?.id })
          }}
          showBackToBoard={Boolean(openMaterial)}
          unreadChat={unreadChat}
          onLeave={handleLeave}
          onEnd={() => setEndAsk(true)}
        />
      </footer>

      {/* ---------------- Çekmeceler ---------------- */}
      <Drawer
        open={drawer === DRAWERS.MATERIALS}
        onClose={() => setDrawer(DRAWERS.NONE)}
        title="Materyaller"
        description="Derste açılacak soru, not ve kaynaklar"
        width="lg"
      >
        <MaterialPanel
          sessionId={sessionId}
          teacherId={isTeacher ? user?.id : null}
          studentId={session.student_id}
          materials={isTeacher ? materials : materials.filter((m) => m.visible_to_student)}
          onAdd={async (material) => {
            await addMaterial(sessionId, user.id, { ...material, order_index: materials.length })
            await reloadMaterials()
          }}
          onRemove={async (m) => {
            await removeMaterial(m.id)
            await reloadMaterials()
          }}
          onToggleVisible={async (m) => {
            await updateMaterial(m.id, { visible_to_student: !m.visible_to_student })
            await reloadMaterials()
          }}
          onOpen={handleOpenMaterial}
          onSendToBoard={sendToBoard}
          onOpenOnBoard={openOnBoard}
        />
      </Drawer>

      {isTeacher && (
        <Drawer
          open={drawer === DRAWERS.CONTEXT}
          onClose={() => setDrawer(DRAWERS.NONE)}
          title={counterpart?.full_name ?? 'Öğrenci'}
          description="Ders bağlamı"
          width="md"
        >
          <StudentContextPanel
            sessionId={sessionId}
            teacherId={session.teacher_id}
            studentId={session.student_id}
            studentName={counterpart?.full_name}
          />
        </Drawer>
      )}

      <Drawer
        open={drawer === DRAWERS.CHAT}
        onClose={() => setDrawer(DRAWERS.NONE)}
        title="Ders mesajları"
        description={`${counterpart?.full_name ?? ''} ile yazışma`}
        width="md"
        className="sm:max-w-md"
      >
        <div className="h-[60vh] sm:h-[calc(100vh-11rem)]">
          <LessonChatPanel
            userId={user?.id}
            deviceId={channel.deviceId}
            peerId={isTeacher ? session.student_id : session.teacher_id}
            peerName={counterpart?.full_name ?? ''}
            channel={channel}
            onRead={() => setUnreadChat(0)}
          />
        </div>
      </Drawer>

      <Drawer
        open={drawer === DRAWERS.DEVICES}
        onClose={() => setDrawer(DRAWERS.NONE)}
        title="Kamera ve mikrofon"
        description="Cihaz rolü, seçim ve test"
        width="md"
      >
        <div className="flex flex-col gap-5">
          <div>
            <p className="label-base">Bu cihazın rolü</p>
            <DeviceRolePicker
              value={deviceRole}
              onChange={(next) => {
                setDeviceRole(next)
                saveDeviceRole(next)
              }}
            />
            {deviceRole === DEVICE_ROLES.CAMERA && (
              <p className="mt-2 rounded-input bg-surface-muted px-3.5 py-2.5 text-sm leading-relaxed text-ink/70">
                Bu cihaz sessiz: mikrofonu ve hoparlörü kapalı. Anlatımı ve sesi diğer cihazdan
                yapıyorsun.
              </p>
            )}
          </div>
          <DeviceSetup media={media} name={profile?.full_name} />
        </div>
      </Drawer>

      {isTeacher && (
        <Drawer
          open={drawer === DRAWERS.NOTE}
          onClose={() => setDrawer(DRAWERS.NONE)}
          title="Ders özeti notun"
          description="Yalnızca sen görürsün"
          width="md"
        >
          <div className="flex flex-col gap-3">
            <Field
              label="Ders sırasında aklına geleni buraya yaz"
              hint="Ders sonu ekranında karşına gelir. Öğrenciye hiçbir zaman gösterilmez."
            >
              {({ id, describedBy }) => (
                <Textarea
                  id={id}
                  aria-describedby={describedBy}
                  value={privateNote}
                  onChange={(e) => setPrivateNote(e.target.value)}
                  rows={8}
                  placeholder="Örn. Limit tanımını hâlâ ezberden söylüyor, kavramsal anlatım gerekiyor."
                />
              )}
            </Field>
            <Button
              loading={savingNote}
              onClick={async () => {
                setSavingNote(true)
                try {
                  await savePrivateNote(sessionId, session.teacher_id, {
                    outcome_note: privateNote.trim() || null,
                  })
                  toast.success('Not kaydedildi')
                } catch (err) {
                  toast.error('Not kaydedilemedi', { description: err.message })
                } finally {
                  setSavingNote(false)
                }
              }}
            >
              Notu Kaydet
            </Button>
          </div>
        </Drawer>
      )}

      {/* Dersi herkes için bitir — yanlış dokunuşa karşı onay */}
      <Modal
        open={endAsk}
        onClose={() => setEndAsk(false)}
        title="Dersi herkes için bitir"
        description="Öğrencinin de ders odası kapanır."
        footer={
          <>
            <Button variant="ghost" onClick={() => setEndAsk(false)}>
              Vazgeç
            </Button>
            <Button variant="danger" loading={ending} onClick={handleEndForEveryone}>
              Dersi Bitir
            </Button>
          </>
        }
      >
        <p className="text-sm leading-relaxed text-ink/70">
          Ders tamamlandı olarak işaretlenir, tahtanın son hâli kaydedilir ve ders sonu özeti
          ekranı açılır. Yalnızca sen çıkmak istiyorsan bunun yerine <strong>Ayrıl</strong>{' '}
          düğmesini kullan — ders devam eder.
        </p>
      </Modal>
    </div>
  )
}
