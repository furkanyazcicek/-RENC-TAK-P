/**
 * "Yerel önizleme" sağlayıcısı.
 *
 * Tarayıcının kendi kamera/mikrofon API'siyle çalışır: cihaz izinleri,
 * canlı önizleme, mikrofon seviyesi, cihaz değiştirme ve ekran paylaşımı
 * GERÇEKTEN çalışır. Yapmadığı tek şey akışı karşı tarafa taşımaktır —
 * bunun için bir görüşme sağlayıcısı gerekir (bkz. provider.js).
 *
 * SAHTE ÜRETİM YOK: uzak katılımcı listesi uydurulmaz, sahte video
 * gösterilmez, bağlantı "kuruldu" diye işaretlenmez. Arayüz durumu
 * olduğu gibi gösterir.
 *
 * TEMİZLİK KURALI
 * ---------------
 * Kamera ışığının dersten sonra yanık kalması kabul edilemez. `leaveRoom`
 * ve `destroy` her track'i tek tek durdurur; `destroy` çağrılmadan bileşen
 * sökülmez (bkz. useLessonMedia).
 */

const EVENTS = [
  'local-stream',
  'screen-stream',
  'devices',
  'connection',
  'participants',
  'error',
  'permission',
]

/** getUserMedia hatalarını Türkçe, eyleme dönük mesajlara çevirir. */
export function describeMediaError(error, kind = 'kamera') {
  const name = error?.name ?? ''
  switch (name) {
    case 'NotAllowedError':
    case 'PermissionDeniedError':
      return {
        code: 'permission_denied',
        title: `${kind === 'mikrofon' ? 'Mikrofon' : 'Kamera'} izni verilmedi`,
        detail:
          'Tarayıcı adres çubuğunun solundaki kilit simgesine dokunup izni "İzin ver" yapın, ardından sayfayı yenileyin. ' +
          'Telefonda: Ayarlar → Tarayıcı → Kamera/Mikrofon.',
      }
    case 'NotFoundError':
    case 'DevicesNotFoundError':
      return {
        code: 'not_found',
        title: `${kind === 'mikrofon' ? 'Mikrofon' : 'Kamera'} bulunamadı`,
        detail: `Cihazınıza bağlı bir ${kind} görünmüyor. Derse ${kind} olmadan da katılabilirsiniz.`,
      }
    case 'NotReadableError':
    case 'TrackStartError':
      return {
        code: 'in_use',
        title: `${kind === 'mikrofon' ? 'Mikrofon' : 'Kamera'} başka bir uygulamada açık`,
        detail: 'Zoom, Meet veya kamera uygulaması açıksa kapatıp tekrar deneyin.',
      }
    case 'OverconstrainedError':
      return {
        code: 'constraints',
        title: 'Seçilen cihaz kullanılamıyor',
        detail: 'Listeden başka bir cihaz seçin.',
      }
    case 'NotSupportedError':
      return {
        code: 'insecure',
        title: 'Tarayıcı kamera erişimine izin vermiyor',
        detail: 'Kamera yalnızca güvenli (https) bağlantıda çalışır. Siteyi https adresinden açın.',
      }
    default:
      return {
        code: 'unknown',
        title: `${kind === 'mikrofon' ? 'Mikrofon' : 'Kamera'} açılamadı`,
        detail: 'Cihazı kontrol edip tekrar deneyin. Sorun sürerse sayfayı yenileyin.',
      }
  }
}

export function createLocalPreviewProvider({ session, user, role } = {}) {
  const listeners = new Map(EVENTS.map((e) => [e, new Set()]))

  let localStream = null
  let screenStream = null
  let connectionState = 'idle'
  let micEnabled = true
  let cameraEnabled = true
  let facingMode = 'user'
  let selected = { camera: null, microphone: null, speaker: null }
  let devices = { cameras: [], microphones: [], speakers: [] }
  let destroyed = false

  function emit(event, payload) {
    for (const fn of listeners.get(event) ?? []) {
      try {
        fn(payload)
      } catch (err) {
        console.error('Canlı ders olay dinleyicisi hata verdi:', err)
      }
    }
  }

  function setConnection(next) {
    if (connectionState === next) return
    connectionState = next
    emit('connection', next)
  }

  function stopStream(stream) {
    if (!stream) return
    for (const track of stream.getTracks()) {
      try {
        track.stop()
      } catch {
        /* track zaten kapanmış olabilir */
      }
    }
  }

  /** Cihaz listesini okur. İzin verilmeden önce etiketler boş gelir. */
  async function getDevices() {
    if (!navigator.mediaDevices?.enumerateDevices) return devices
    try {
      const all = await navigator.mediaDevices.enumerateDevices()
      devices = {
        cameras: all.filter((d) => d.kind === 'videoinput'),
        microphones: all.filter((d) => d.kind === 'audioinput'),
        speakers: all.filter((d) => d.kind === 'audiooutput'),
      }
      emit('devices', devices)
    } catch (err) {
      console.warn('Cihaz listesi okunamadı:', err)
    }
    return devices
  }

  function buildConstraints() {
    const video = cameraEnabled
      ? selected.camera
        ? { deviceId: { exact: selected.camera } }
        : { facingMode }
      : false
    const audio = selected.microphone
      ? { deviceId: { exact: selected.microphone }, echoCancellation: true, noiseSuppression: true }
      : { echoCancellation: true, noiseSuppression: true }
    return { video, audio }
  }

  /**
   * Akışı (yeniden) kurar. Kamera reddedilse bile mikrofonla devam etmeyi
   * dener: "kamerası olmayan öğrenci derse giremesin" olmaz.
   */
  async function openMedia({ withVideo = true, withAudio = true } = {}) {
    if (!navigator.mediaDevices?.getUserMedia) {
      const info = { code: 'unsupported', title: 'Tarayıcı desteklemiyor', detail: 'Bu tarayıcı kamera ve mikrofon erişimini desteklemiyor. Güncel Chrome, Safari veya Edge deneyin.' }
      emit('error', info)
      return { stream: null, problems: [info] }
    }

    const problems = []
    stopStream(localStream)
    localStream = null

    const constraints = buildConstraints()
    if (!withVideo) constraints.video = false
    if (!withAudio) constraints.audio = false

    try {
      localStream = await navigator.mediaDevices.getUserMedia(constraints)
    } catch (err) {
      // Video sorunluysa yalnız sesle dene.
      if (constraints.video && constraints.audio) {
        problems.push(describeMediaError(err, 'kamera'))
        try {
          localStream = await navigator.mediaDevices.getUserMedia({ video: false, audio: constraints.audio })
          cameraEnabled = false
        } catch (audioErr) {
          problems.push(describeMediaError(audioErr, 'mikrofon'))
        }
      } else {
        problems.push(describeMediaError(err, constraints.video ? 'kamera' : 'mikrofon'))
      }
    }

    if (localStream) {
      for (const track of localStream.getAudioTracks()) track.enabled = micEnabled
      for (const track of localStream.getVideoTracks()) track.enabled = cameraEnabled
      // İzin verildikten SONRA cihaz etiketleri okunabilir hâle gelir.
      await getDevices()
    }

    for (const problem of problems) emit('permission', problem)
    emit('local-stream', localStream)
    return { stream: localStream, problems }
  }

  return {
    name: 'local_preview',
    supportsRemoteMedia: false,
    roomId: session?.provider_room_id ?? null,

    on(event, handler) {
      const set = listeners.get(event)
      if (!set) return () => {}
      set.add(handler)
      return () => set.delete(handler)
    },

    async prepareRoom(options) {
      if (destroyed) return { stream: null, problems: [] }
      setConnection('connecting')
      const result = await openMedia(options)
      // Yerel önizlemede "bağlantı" yalnızca kendi cihazımızdır. Uzak medya
      // olmadığı için 'connected' demiyoruz — durum dürüst kalmalı.
      setConnection(result.stream ? 'idle' : 'failed')
      return result
    },

    async joinRoom() {
      if (destroyed) return { ok: false }
      if (!localStream) await openMedia()
      return { ok: true, remoteMedia: false }
    },

    async leaveRoom() {
      stopStream(screenStream)
      stopStream(localStream)
      screenStream = null
      localStream = null
      emit('screen-stream', null)
      emit('local-stream', null)
      setConnection('closed')
    },

    async toggleMicrophone(next) {
      micEnabled = typeof next === 'boolean' ? next : !micEnabled
      if (localStream) {
        const tracks = localStream.getAudioTracks()
        if (micEnabled && tracks.length === 0) {
          await openMedia()
        } else {
          for (const track of tracks) track.enabled = micEnabled
        }
      }
      return micEnabled
    },

    async toggleCamera(next) {
      const wanted = typeof next === 'boolean' ? next : !cameraEnabled
      cameraEnabled = wanted
      if (!localStream) {
        if (wanted) await openMedia()
        return cameraEnabled
      }
      const tracks = localStream.getVideoTracks()
      if (wanted && tracks.length === 0) {
        // Kamera hiç açılmamıştı; şimdi açılmak isteniyor.
        await openMedia()
      } else if (wanted) {
        for (const track of tracks) track.enabled = true
      } else {
        // Kapatırken track'i durduruyoruz: yalnız `enabled = false` yapmak
        // kamera ışığını açık bırakıyor ve öğrenci "beni izliyor" sanıyor.
        for (const track of tracks) {
          track.stop()
          localStream.removeTrack(track)
        }
        emit('local-stream', localStream)
      }
      return cameraEnabled
    },

    async startScreenShare() {
      if (!navigator.mediaDevices?.getDisplayMedia) {
        const info = {
          code: 'unsupported',
          title: 'Ekran paylaşımı desteklenmiyor',
          detail: 'Telefon tarayıcılarının çoğu ekran paylaşımına izin vermez. Masaüstünden deneyin.',
        }
        emit('error', info)
        return null
      }
      try {
        screenStream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false })
        // Kullanıcı tarayıcının kendi "Paylaşımı durdur" düğmesine basarsa
        // arayüz de haberdar olmalı.
        for (const track of screenStream.getVideoTracks()) {
          track.addEventListener('ended', () => {
            screenStream = null
            emit('screen-stream', null)
          })
        }
        emit('screen-stream', screenStream)
        return screenStream
      } catch (err) {
        if (err?.name !== 'NotAllowedError') {
          emit('error', {
            code: 'screen_failed',
            title: 'Ekran paylaşımı başlatılamadı',
            detail: 'Paylaşmak istediğiniz pencereyi seçtiğinizden emin olun ve tekrar deneyin.',
          })
        }
        return null
      }
    },

    async stopScreenShare() {
      stopStream(screenStream)
      screenStream = null
      emit('screen-stream', null)
    },

    async switchCamera() {
      facingMode = facingMode === 'user' ? 'environment' : 'user'
      selected.camera = null
      if (cameraEnabled) await openMedia()
      return facingMode
    },

    getDevices,

    async selectMicrophone(deviceId) {
      selected.microphone = deviceId || null
      await openMedia()
      return selected.microphone
    },

    async selectCamera(deviceId) {
      selected.camera = deviceId || null
      if (cameraEnabled) await openMedia()
      return selected.camera
    },

    selectSpeaker(deviceId) {
      selected.speaker = deviceId || null
      return selected.speaker
    },

    getSelectedDevices() {
      return { ...selected }
    },

    getConnectionState() {
      return connectionState
    },

    getParticipants() {
      // Uzak medya yok; katılımcı VARLIĞI Realtime presence'tan gelir
      // (bkz. channel.js). Burada uydurma liste döndürülmez.
      return [{ userId: user?.id ?? null, role: role ?? 'student', local: true }]
    },

    getLocalStream() {
      return localStream
    },

    getScreenStream() {
      return screenStream
    },

    isMicrophoneEnabled() {
      return micEnabled
    },

    isCameraEnabled() {
      return cameraEnabled && Boolean(localStream?.getVideoTracks().length)
    },

    async reconnect() {
      setConnection('reconnecting')
      const result = await openMedia()
      setConnection(result.stream ? 'idle' : 'failed')
      return result
    },

    destroy() {
      destroyed = true
      stopStream(screenStream)
      stopStream(localStream)
      screenStream = null
      localStream = null
      for (const set of listeners.values()) set.clear()
    },
  }
}
