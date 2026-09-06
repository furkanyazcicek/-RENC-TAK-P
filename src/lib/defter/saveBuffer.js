/** Hızlı el yazısında ara belge kopyalarını birleştirir; son sürümü mutlaka yazar. */
export function createSaveBuffer(write, { delay = 300, maxWait = 1200, clock = { set: (fn, ms) => setTimeout(fn, ms), clear: id => clearTimeout(id) } } = {}) {
  const pending = new Map()
  const chains = new Map()
  const inFlight = new Map()
  const failures = new Map()

  const clearTimers = entry => {
    if (!entry) return
    clock.clear(entry.timer)
    clock.clear(entry.deadline)
    entry.timer = null
    entry.deadline = null
  }

  function queuePending(id) {
    const entry = pending.get(id)
    if (!entry) return inFlight.get(id) ?? Promise.resolve()
    pending.delete(id)
    clearTimers(entry)

    // Aynı defterin yazıları sıralıdır. İlk yazı sürerken gelen yeni
    // çizgi, eski işlemin ardından ayrı bir son sürüm olarak yazılır.
    const previous = chains.get(id)
    let job
    if (previous) job = previous.catch(() => {}).then(() => write(entry.document))
    else {
      try { job = Promise.resolve(write(entry.document)) }
      catch (error) { job = Promise.reject(error) }
    }
    const chain = job.catch(() => {})
    chains.set(id, chain)
    inFlight.set(id, job)

    job.then(
      value => {
        failures.delete(id)
        entry.waiters.forEach(waiter => waiter.resolve(value))
      },
      error => {
        failures.set(id, error)
        entry.waiters.forEach(waiter => waiter.reject(error))
      },
    ).finally(() => {
      if (inFlight.get(id) === job) inFlight.delete(id)
      if (chains.get(id) === chain) chains.delete(id)
    })
    return job
  }

  async function flush(id) {
    const ids = id === undefined
      ? new Set([...pending.keys(), ...inFlight.keys(), ...failures.keys()])
      : new Set([id])
    // Yazma sürerken gelen yeni belgeyi de gör. Böylece eşitleme veya
    // sayfadan ayrılma, aradaki en son çizgiyi geride bırakmaz.
    while ([...ids].some(key => pending.has(key) || inFlight.has(key))) {
      const jobs = [...ids].map(key => pending.has(key) ? queuePending(key) : inFlight.get(key)).filter(Boolean)
      await Promise.allSettled(jobs)
      if (id === undefined) for (const key of [...pending.keys(), ...inFlight.keys()]) ids.add(key)
    }
    const failure = [...ids].map(key => failures.get(key)).find(Boolean)
    if (failure) throw failure
  }

  return {
    save(document, { defer = false } = {}) {
      failures.delete(document.id)
      const promise = new Promise((resolve, reject) => {
        let entry = pending.get(document.id)
        if (!entry) {
          entry = { document, waiters: [], timer: null, deadline: null }
          pending.set(document.id, entry)
          entry.deadline = clock.set(() => { void queuePending(document.id) }, maxWait)
        }
        entry.document = document
        entry.waiters.push({ resolve, reject })
        clock.clear(entry.timer)
        entry.timer = null
        if (defer) entry.timer = clock.set(() => { void queuePending(document.id) }, delay)
      })
      if (!defer) void queuePending(document.id)
      return promise
    },
    flush,
    get pendingCount() { return pending.size },
    get writingCount() { return inFlight.size },
    get failedCount() { return failures.size },
  }
}
