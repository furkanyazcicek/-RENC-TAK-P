/**
 * LiveKit sağlayıcısı — gerçek görüntülü/sesli görüşme.
 *
 * `provider.js` içindeki sözleşmenin aynısını uygular; stüdyo ve bekleme
 * odası bu dosyanın varlığından habersizdir.
 *
 * ═══════════════════════════════════════════════════════════════════
 * SDK NEDEN GEÇ YÜKLENİYOR
 * ═══════════════════════════════════════════════════════════════════
 * `livekit-client` sıkıştırılmış hâlde bile birkaç yüz kilobayt. Statik
 * içe aktarılsaydı canlı ders paketine girer ve dersi henüz açmamış
 * kullanıcı da indirirdi. Bu yüzden SDK yalnızca oda GERÇEKTEN
 * hazırlanırken `import()` ile yükleniyor.
 *
 * ═══════════════════════════════════════════════════════════════════
 * GİZLİ ANAHTAR BURADA YOK
 * ═══════════════════════════════════════════════════════════════════
 * Bu dosya yalnızca sunucudan aldığı kısa ömürlü belirteci kullanır.
 * API anahtarı ve gizli anahtar `api/live-lesson/room-token.js` içinde
 * kalır; tarayıcıya hiçbir zaman inmez.
 */

import { describeMediaError } from './localPreview'

const EVENTS = [
  'local-stream',
  'screen-stream',
  'devices',
  'connection',
  'participants',
  'error',
  'permission',
]

/** Sunucudan oda belirteci ister. */
async function fetchRoomToken(sessionId, accessToken) {
  const res = await fetch('/api/live-lesson/room-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
    body: JSON.stringify({ sessionId }),
  })

  let body = null
  try {
    body = await res.json()
  } catch {
    /* gövde okunamadıysa aşağıdaki genel mesaj kullanılır */
  }

  if (!res.ok) {
    const code = body?.error?.code ?? 'unknown'
    const message = body?.error?.message ?? 'Ders odasına bağlanılamadı.'
    throw Object.assign(new Error(message), { code, status: res.status })
  }
  return body
}

/** LiveKit katılımcısını arayüzün beklediği sade biçime çevirir. */
function describeParticipant(participant) {
  const tracks = [...participant.trackPublications.values()]
  const camPub = tracks.find((t) => t.source === 'camera' && t.track)
  const screenPub = tracks.find((t) => t.source === 'screen_share' && t.track)
  const micPub = tracks.find((t) => t.source === 'microphone')

  const stream = new MediaStream()
  const videoTrack = screenPub?.track ?? camPub?.track
  if (videoTrack?.mediaStreamTrack) stream.addTrack(videoTrack.mediaStreamTrack)
  for (const pub of tracks) {
    if (pub.kind === 'audio' && pub.track?.mediaStreamTrack && !pub.isMuted) {
      stream.addTrack(pub.track.mediaStreamTrack)
    }
  }

  return {
    identity: participant.identity,
    name: participant.name || participant.identity,
    stream: stream.getTracks().length ? stream : null,
    micOn: Boolean(micPub && !micPub.isMuted),
    camOn: Boolean(camPub?.track && !camPub.isMuted),
    screenOn: Boolean(screenPub?.track),
    speaking: participant.isSpeaking,
  }
}

export function createLiveKitProvider({ session, user, role, displayName, getAccessToken } = {}) {
  const listeners = new Map(EVENTS.map((e) => [e, new Set()]))

  let RoomCtor = null
  let RoomEvent = null
  let Track = null
  let room = null
  let localStream = null
  let screenStream = null
  let connectionState = 'idle'
  let micEnabled = true
  let cameraEnabled = true
  let facingMode = 'user'
  let selected = { camera: null, microphone: null, speaker: null }
  let devices = { cameras: [], microphones: [], speakers: [] }
  let participants = []
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
        /* zaten kapanmış olabilir */
      }
    }
  }

  async function loadSdk() {
    if (RoomCtor) return
    const sdk = await import('livekit-client')
    RoomCtor = sdk.Room
    RoomEvent = sdk.RoomEvent
    Track = sdk.Track
  }

  async function readDevices() {
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

  /**
   * Yerel önizleme akışı.
   *
   * Odaya BAĞLANMADAN önce de kameranın çalıştığını görebilmek gerekiyor
   * (bekleme odası). Bu yüzden önizleme tarayıcının kendi API'siyle
   * açılır; odaya girildiğinde LiveKit kendi izlerini yayımlar ve bu
   * önizleme kapatılır — aynı kamerayı iki kez açık tutmak bazı
   * cihazlarda "kamera meşgul" hatası veriyor.
   */
  async function openPreview() {
    const problems = []
    stopStream(localStream)
    localStream = null

    const video = cameraEnabled
      ? selected.camera
        ? { deviceId: { exact: selected.camera } }
        : { facingMode }
      : false
    const audio = selected.microphone
      ? { deviceId: { exact: selected.microphone }, echoCancellation: true, noiseSuppression: true }
      : { echoCancellation: true, noiseSuppression: true }

    try {
      localStream = await navigator.mediaDevices.getUserMedia({ video, audio })
    } catch (err) {
      if (video) {
        problems.push(describeMediaError(err, 'kamera'))
        try {
          localStream = await navigator.mediaDevices.getUserMedia({ video: false, audio })
          cameraEnabled = false
        } catch (audioErr) {
          problems.push(describeMediaError(audioErr, 'mikrofon'))
        }
      } else {
        problems.push(describeMediaError(err, 'mikrofon'))
      }
    }

    if (localStream) {
      for (const t of localStream.getAudioTracks()) t.enabled = micEnabled
      await readDevices()
    }
    for (const problem of problems) emit('permission', problem)
    emit('local-stream', localStream)
    return { stream: localStream, problems }
  }

  function refreshParticipants() {
    if (!room) return
    participants = [...room.remoteParticipants.values()].map(describeParticipant)
    emit('participants', participants)
  }

  /** Odaya bağlandıktan sonra yerel önizlemeyi LiveKit'in izleriyle değiştirir. */
  function publishLocalView() {
    if (!room) return
    const stream = new MediaStream()
    for (const pub of room.localParticipant.trackPublications.values()) {
      if (pub.source === Track.Source.ScreenShare) continue
      if (pub.track?.mediaStreamTrack && pub.kind === 'video') {
        stream.addTrack(pub.track.mediaStreamTrack)
      }
    }
    localStream = stream.getTracks().length ? stream : null
    emit('local-stream', localStream)
  }

  return {
    name: 'livekit',
    supportsRemoteMedia: true,
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
      const result = await openPreview(options)
      setConnection(result.stream ? 'idle' : 'failed')
      return result
    },

    async joinRoom() {
      if (destroyed || room) return { ok: Boolean(room), remoteMedia: true }
      setConnection('connecting')

      let credentials
      try {
        credentials = await fetchRoomToken(session?.id, await getAccessToken?.())
      } catch (err) {
        setConnection('failed')
        emit('error', {
          code: err.code ?? 'token_failed',
          title: 'Görüşmeye bağlanılamadı',
          detail: err.message,
        })
        return { ok: false, remoteMedia: false, error: err }
      }

      try {
        await loadSdk()
        // Yerel önizlemeyi kapat: aynı kamerayı iki yerden açık tutmak
        // bazı cihazlarda "kamera başka uygulamada" hatası veriyor.
        stopStream(localStream)
        localStream = null

        room = new RoomCtor({
          adaptiveStream: true,
          dynacast: true,
          // Öğretmen tahtaya yazarken ekran paylaşımı metin ağırlıklı olur;
          // hareket yerine ÇÖZÜNÜRLÜK korunmalı, yoksa yazı okunmaz.
          publishDefaults: { screenShareEncoding: { maxBitrate: 3_000_000, maxFramerate: 5 } },
        })

        room
          .on(RoomEvent.ParticipantConnected, refreshParticipants)
          .on(RoomEvent.ParticipantDisconnected, refreshParticipants)
          .on(RoomEvent.TrackSubscribed, refreshParticipants)
          .on(RoomEvent.TrackUnsubscribed, refreshParticipants)
          .on(RoomEvent.TrackMuted, refreshParticipants)
          .on(RoomEvent.TrackUnmuted, refreshParticipants)
          .on(RoomEvent.ActiveSpeakersChanged, refreshParticipants)
          .on(RoomEvent.LocalTrackPublished, publishLocalView)
          .on(RoomEvent.LocalTrackUnpublished, publishLocalView)
          .on(RoomEvent.Reconnecting, () => setConnection('reconnecting'))
          .on(RoomEvent.Reconnected, () => {
            setConnection('connected')
            refreshParticipants()
          })
          .on(RoomEvent.Disconnected, () => {
            setConnection('closed')
            participants = []
            emit('participants', participants)
          })
          .on(RoomEvent.MediaDevicesError, (err) => {
            emit('permission', describeMediaError(err, 'kamera'))
          })

        await room.connect(credentials.url, credentials.token)

        // İzinler reddedilmişse kamera/mikrofon olmadan da derse girilir.
        try {
          await room.localParticipant.setMicrophoneEnabled(micEnabled)
        } catch (err) {
          emit('permission', describeMediaError(err, 'mikrofon'))
        }
        try {
          await room.localParticipant.setCameraEnabled(cameraEnabled)
        } catch (err) {
          emit('permission', describeMediaError(err, 'kamera'))
        }

        publishLocalView()
        refreshParticipants()
        await readDevices()
        setConnection('connected')
        return { ok: true, remoteMedia: true }
      } catch (err) {
        setConnection('failed')
        emit('error', {
          code: 'join_failed',
          title: 'Ders odasına girilemedi',
          detail:
            'Bağlantı kurulamadı. İnternetini kontrol edip "Yeniden bağlan" düğmesine dokun.',
        })
        return { ok: false, remoteMedia: false, error: err }
      }
    },

    async leaveRoom() {
      stopStream(screenStream)
      screenStream = null
      if (room) {
        try {
          await room.disconnect()
        } catch {
          /* zaten kapanmış olabilir */
        }
        room = null
      }
      stopStream(localStream)
      localStream = null
      participants = []
      emit('participants', participants)
      emit('screen-stream', null)
      emit('local-stream', null)
      setConnection('closed')
    },

    async toggleMicrophone(next) {
      micEnabled = typeof next === 'boolean' ? next : !micEnabled
      if (room) {
        try {
          await room.localParticipant.setMicrophoneEnabled(micEnabled)
        } catch (err) {
          emit('permission', describeMediaError(err, 'mikrofon'))
        }
      } else if (localStream) {
        for (const t of localStream.getAudioTracks()) t.enabled = micEnabled
      }
      return micEnabled
    },

    async toggleCamera(next) {
      cameraEnabled = typeof next === 'boolean' ? next : !cameraEnabled
      if (room) {
        try {
          await room.localParticipant.setCameraEnabled(cameraEnabled)
        } catch (err) {
          emit('permission', describeMediaError(err, 'kamera'))
        }
        publishLocalView()
      } else {
        await openPreview()
      }
      return cameraEnabled
    },

    async startScreenShare() {
      if (!room) {
        emit('error', {
          code: 'not_connected',
          title: 'Ekran paylaşımı için önce derse girin',
          detail: 'Oda bağlantısı kurulmadan ekran paylaşılamaz.',
        })
        return null
      }
      try {
        await room.localParticipant.setScreenShareEnabled(true)
        const pub = [...room.localParticipant.trackPublications.values()].find(
          (p) => p.source === Track.Source.ScreenShare
        )
        if (pub?.track?.mediaStreamTrack) {
          screenStream = new MediaStream([pub.track.mediaStreamTrack])
          pub.track.mediaStreamTrack.addEventListener('ended', () => {
            screenStream = null
            emit('screen-stream', null)
          })
          emit('screen-stream', screenStream)
        }
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
      if (room) {
        try {
          await room.localParticipant.setScreenShareEnabled(false)
        } catch {
          /* zaten kapalı olabilir */
        }
      }
      stopStream(screenStream)
      screenStream = null
      emit('screen-stream', null)
    },

    async switchCamera() {
      facingMode = facingMode === 'user' ? 'environment' : 'user'
      selected.camera = null
      if (room) {
        const cams = devices.cameras
        if (cams.length > 1) {
          const current = room.localParticipant.getTrackPublication(Track.Source.Camera)
          const currentId = current?.track?.mediaStreamTrack?.getSettings?.().deviceId
          const next = cams.find((c) => c.deviceId !== currentId)
          if (next) await room.switchActiveDevice('videoinput', next.deviceId)
        }
      } else if (cameraEnabled) {
        await openPreview()
      }
      return facingMode
    },

    getDevices: readDevices,

    async selectMicrophone(deviceId) {
      selected.microphone = deviceId || null
      if (room && deviceId) await room.switchActiveDevice('audioinput', deviceId)
      else if (!room) await openPreview()
      return selected.microphone
    },

    async selectCamera(deviceId) {
      selected.camera = deviceId || null
      if (room && deviceId) await room.switchActiveDevice('videoinput', deviceId)
      else if (!room && cameraEnabled) await openPreview()
      return selected.camera
    },

    async selectSpeaker(deviceId) {
      selected.speaker = deviceId || null
      if (room && deviceId) await room.switchActiveDevice('audiooutput', deviceId)
      return selected.speaker
    },

    getSelectedDevices() {
      return { ...selected }
    },

    getConnectionState() {
      return connectionState
    },

    getParticipants() {
      return participants
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
      return room
        ? Boolean(room.localParticipant.isCameraEnabled)
        : cameraEnabled && Boolean(localStream?.getVideoTracks().length)
    },

    async reconnect() {
      setConnection('reconnecting')
      if (room) {
        try {
          await room.disconnect()
        } catch {
          /* yoksay */
        }
        room = null
      }
      return this.joinRoom()
    },

    destroy() {
      destroyed = true
      if (room) {
        try {
          room.disconnect()
        } catch {
          /* yoksay */
        }
        room = null
      }
      stopStream(screenStream)
      stopStream(localStream)
      screenStream = null
      localStream = null
      for (const set of listeners.values()) set.clear()
    },
  }
}
