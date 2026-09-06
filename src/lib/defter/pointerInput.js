/**
 * Defterim serbest çizim temasının saf yaşam döngüsü.
 *
 * React, Canvas ve kayıt katmanını bilmez. Böylece Pencil olaylarının
 * kayıp/iptal sıraları gerçek cihaz olmadan da aynı motor üzerinden
 * sınanabilir.
 */

export const POINTER_CANCEL_IDLE_MS = 120
export const POINTER_RESUME_MS = 80
export const POINTER_RESUME_DISTANCE_PX = 12
export const POINTER_PALM_GUARD_MS = 220

const varsayilanSaat = {
  now: () => performance.now(),
  set: (fn, ms) => setTimeout(fn, ms),
  clear: id => clearTimeout(id),
}

const hamOlay = event => event?.nativeEvent ?? event

/** Pointer olayının gerçek ekran teması taşıyıp taşımadığı. */
export function isPointerContact(event) {
  if (!event) return false
  if (event.pointerType === 'pen') return event.buttons !== 0 || event.pressure > 0
  if (event.pointerType === 'mouse') return event.buttons !== 0
  return event.pointerType === 'touch'
}

/** Tarayıcının aynı harekette birleştirdiği gerçek örnekler. */
export function coalescedPointerSamples(event) {
  const source = hamOlay(event)
  const samples = source?.getCoalescedEvents?.()
  if (!Array.isArray(samples) || !samples.length) return [source]
  const last = samples.at(-1)
  // Bazı motorlar ana olayın son koordinatını birleştirilmiş diziye katmaz.
  // Özellikle pointerup'ta bu koordinat harfin ucudur; farklıysa koru.
  if (last === source || (
    last?.clientX === source?.clientX &&
    last?.clientY === source?.clientY &&
    last?.pressure === source?.pressure
  )) return samples
  return [...samples, source]
}

/**
 * Tahminî örnekler yalnızca görsel uç içindir. Kalıcı nokta yoluna
 * hiçbir zaman karıştırılmaz.
 */
export function predictedPointerSamples(event) {
  const samples = hamOlay(event)?.getPredictedEvents?.()
  return Array.isArray(samples) ? samples : []
}

/**
 * Serbest çizimin sahipliğini, iptal sonrası devamını ve kayıp başlangıç
 * emniyet ağını yönetir.
 */
export function createPointerStrokeInput({
  enabled = () => true,
  onStart,
  onSamples,
  onPrediction = () => {},
  onFinish,
  clock = varsayilanSaat,
  cancelIdleMs = POINTER_CANCEL_IDLE_MS,
  resumeMs = POINTER_RESUME_MS,
  resumeDistancePx = POINTER_RESUME_DISTANCE_PX,
  palmGuardMs = POINTER_PALM_GUARD_MS,
} = {}) {
  let owner = null
  let cancelTimer = null
  let palmUntil = 0

  const clearCancelTimer = () => {
    if (cancelTimer !== null) clock.clear(cancelTimer)
    cancelTimer = null
  }

  const clearPrediction = event => onPrediction([], event, owner?.type ?? null)

  function finish(reason = 'manual', event = null) {
    if (!owner) return false
    const finished = owner
    clearCancelTimer()
    clearPrediction(event)
    owner = null
    if (finished.type === 'pen') palmUntil = clock.now() + palmGuardMs
    onFinish?.(event, finished.type, { reason })
    return true
  }

  function scheduleCancelFinish() {
    clearCancelTimer()
    const check = () => {
      if (!owner?.cancelled) return
      const idle = clock.now() - owner.lastActivity
      if (idle < cancelIdleMs) {
        cancelTimer = clock.set(check, cancelIdleMs - idle)
        return
      }
      finish('cancel-idle')
    }
    cancelTimer = clock.set(check, cancelIdleMs)
  }

  function remember(sample) {
    if (!owner || !sample) return
    if (Number.isFinite(sample.clientX)) owner.x = sample.clientX
    if (Number.isFinite(sample.clientY)) owner.y = sample.clientY
    owner.lastActivity = clock.now()
  }

  function deliver(event, { includePrediction = true } = {}) {
    if (!owner) return
    const samples = coalescedPointerSamples(event).filter(Boolean)
    if (samples.length) {
      onSamples?.(samples, event, owner.type)
      remember(samples.at(-1))
    }
    onPrediction(includePrediction ? predictedPointerSamples(event) : [], event, owner.type)
  }

  function begin(event, recovered = false) {
    if (!enabled(event)) return { handled: false }
    const samples = coalescedPointerSamples(event).filter(Boolean)
    const first = samples[0] ?? hamOlay(event)
    if (!first || onStart?.(first, event.pointerType, { recovered }) === false) return { handled: false }
    owner = {
      id: event.pointerId,
      type: event.pointerType,
      x: first.clientX,
      y: first.clientY,
      lastActivity: clock.now(),
      cancelled: false,
      cancelledAt: 0,
    }
    if (samples.length > 1) {
      onSamples?.(samples.slice(1), event, owner.type)
      remember(samples.at(-1))
    }
    onPrediction(predictedPointerSamples(event), event, owner.type)
    return { handled: true, recovered }
  }

  function nearCancelledContact(event) {
    if (!owner?.cancelled || event.pointerType !== owner.type) return false
    const elapsed = clock.now() - owner.cancelledAt
    const distance = Math.hypot((event.clientX ?? owner.x) - owner.x, (event.clientY ?? owner.y) - owner.y)
    return elapsed <= resumeMs && distance <= resumeDistancePx
  }

  function down(event) {
    if (!event || (event.pointerType === 'mouse' && event.button !== 0)) return { handled: false }

    // Pencil devam ederken avuç ya da ikinci parmak sahipliği alamaz.
    if (event.pointerType === 'touch' && (owner?.type === 'pen' || clock.now() < palmUntil)) {
      return { handled: true, blocked: true }
    }

    if (owner) {
      if (nearCancelledContact(event)) {
        clearCancelTimer()
        owner.id = event.pointerId
        owner.cancelled = false
        deliver(event)
        return { handled: true, resumed: true }
      }
      if (owner.type === 'pen' && event.pointerType !== 'pen') return { handled: true, blocked: true }
      // Önceki kalkış kayıpsa yeni temas onu ezmeden tamamlar.
      finish('new-contact')
    }

    return begin(event, false)
  }

  function move(event) {
    if (!event) return { handled: false }
    if (owner) {
      if (event.pointerId !== owner.id) {
        if (owner.type === 'pen' && event.pointerType !== 'pen') return { handled: true, blocked: true }
        if (owner.cancelled && isPointerContact(event)) {
          if (nearCancelledContact(event)) {
            owner.id = event.pointerId
            deliver(event)
            scheduleCancelFinish()
            return { handled: true, resumed: true }
          }
          finish('new-contact')
          return begin(event, true)
        }
        return { handled: false }
      }
      // İptalden sonra havadaki kalem/avuç askıdaki çizgiye nokta ekleyemez.
      if (owner.cancelled && !isPointerContact(event)) return { handled: true, blocked: true }
      deliver(event)
      if (owner?.cancelled) scheduleCancelFinish()
      return { handled: true, resumed: Boolean(owner?.cancelled) }
    }

    // `pointerdown` kaçsa bile basınçlı/temaslı kalem hareketi iz açar.
    if (event.pointerType === 'pen' && isPointerContact(event)) return begin(event, true)
    return { handled: false }
  }

  function end(event) {
    if (!owner || event?.pointerId !== owner.id) return { handled: false }
    // Kalkış/iptal koordinatı son gerçek örnektir; hızlı izin ucu kırpılmaz.
    deliver(event, { includePrediction: false })
    if (event.type === 'pointercancel') {
      owner.cancelled = true
      owner.cancelledAt = clock.now()
      owner.lastActivity = clock.now()
      scheduleCancelFinish()
      return { handled: true, suspended: true }
    }
    finish('pointerup', event)
    return { handled: true, finished: true }
  }

  return {
    down,
    move,
    end,
    // Yakalama kaybı temas sonu değildir; pencere dinleyicisi gerçek sonu izler.
    lostCapture(event) {
      return { handled: Boolean(owner && event?.pointerId === owner.id), preserved: true }
    },
    finish: (reason = 'manual') => finish(reason),
    /** Pointer yolundan iOS Touch yoluna geçerken etkin izi kapatmadan sahipliği bırakır. */
    release() {
      const released = owner
      clearCancelTimer()
      clearPrediction(null)
      owner = null
      return released
    },
    get active() { return Boolean(owner) },
    get owner() { return owner ? { ...owner } : null },
    get palmBlocked() { return clock.now() < palmUntil },
  }
}
