const STORAGE_KEY = 'drkoc-pencil-lab-v1'
const ENGINE_VERSION = 'Pencil Core 0.1.0'
const DEFAULT_COLOR = '#17172d'
const MAX_HISTORY = 80
const PALM_REJECTION_MS = 650

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => [...document.querySelectorAll(selector)]
const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const uid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`
const copyStrokes = (strokes) => strokes.slice()

function createPage(index = 1) {
  return { id: uid(), title: `Sayfa ${index}`, strokes: [] }
}

function loadNotebook() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (!parsed || parsed.version !== 1 || !Array.isArray(parsed.pages) || !parsed.pages.length) throw new Error('Geçersiz kayıt')
    return {
      version: 1,
      pages: parsed.pages.map((page, index) => ({
        id: page.id || uid(),
        title: page.title || `Sayfa ${index + 1}`,
        strokes: Array.isArray(page.strokes) ? page.strokes : [],
      })),
      currentPage: clamp(Number(parsed.currentPage) || 0, 0, parsed.pages.length - 1),
    }
  } catch {
    return { version: 1, pages: [createPage()], currentPage: 0 }
  }
}

class PencilEngine {
  constructor({ paperCanvas, inputCanvas, grid, notebook, onChange, onMetrics }) {
    this.paperCanvas = paperCanvas
    this.inputCanvas = inputCanvas
    this.paperContext = paperCanvas.getContext('2d', { alpha: true, desynchronized: true })
    this.inputContext = inputCanvas.getContext('2d', { alpha: true, desynchronized: true })
    this.grid = grid
    this.notebook = notebook
    this.onChange = onChange
    this.onMetrics = onMetrics
    this.tool = 'pen'
    this.color = DEFAULT_COLOR
    this.size = 3.2
    this.pressureEnabled = true
    this.activeStroke = null
    this.activePointerId = null
    this.erasing = null
    this.touches = new Map()
    this.gesture = null
    this.view = { x: 0, y: 0, zoom: 1 }
    this.dpr = 1
    this.width = 1
    this.height = 1
    this.lastPenAt = 0
    this.undoStack = []
    this.redoStack = []
    this.resizeFrame = 0
    this.useRawUpdate = 'onpointerrawupdate' in window
    this.metrics = this.newMetrics()
    this.bindEvents()
    this.resizeObserver = new ResizeObserver(() => {
      cancelAnimationFrame(this.resizeFrame)
      this.resizeFrame = requestAnimationFrame(() => this.resize())
    })
    this.resizeObserver.observe(this.inputCanvas.parentElement)
  }

  newMetrics() {
    return {
      downs: 0,
      ups: 0,
      strokes: 0,
      samples: 0,
      coalesced: 0,
      cancelled: 0,
      duplicateSamples: 0,
      maxEventGap: 0,
      lastEventAt: 0,
      lastPointerType: '—',
      lastPressureMin: null,
      lastPressureMax: null,
    }
  }

  get page() {
    return this.notebook.pages[this.notebook.currentPage]
  }

  bindEvents() {
    const options = { passive: false }
    this.inputCanvas.addEventListener('pointerdown', (event) => this.pointerDown(event), options)
    this.inputCanvas.addEventListener('pointermove', (event) => this.pointerMove(event, false), options)
    this.inputCanvas.addEventListener('pointerup', (event) => this.pointerUp(event), options)
    this.inputCanvas.addEventListener('pointercancel', (event) => this.pointerCancel(event), options)
    this.inputCanvas.addEventListener('contextmenu', (event) => event.preventDefault())

    // Destekleyen tarayıcılarda pointerrawupdate, ekran yenilemesini beklemeden
    // en yeni donanım örneğini getirir. Koordinat tekilleştirme iki olayın aynı
    // örneği iki kez çizmesini engeller.
    if (this.useRawUpdate) {
      this.inputCanvas.addEventListener('pointerrawupdate', (event) => this.pointerMove(event, true), options)
    }

    // Pointer capture beklenmedik biçimde kaybolsa bile son teması bitiririz.
    // Aynı olay tuvalde işlenmişse activePointerId artık null olduğu için
    // bu dinleyiciler ikinci bir çizgi oluşturmaz.
    window.addEventListener('pointerup', (event) => this.pointerUp(event), options)
    window.addEventListener('pointercancel', (event) => this.pointerCancel(event), options)
  }

  resize() {
    const bounds = this.inputCanvas.parentElement.getBoundingClientRect()
    this.width = Math.max(1, Math.round(bounds.width))
    this.height = Math.max(1, Math.round(bounds.height))
    this.dpr = clamp(window.devicePixelRatio || 1, 1, 2.5)

    for (const canvas of [this.paperCanvas, this.inputCanvas]) {
      const targetWidth = Math.round(this.width * this.dpr)
      const targetHeight = Math.round(this.height * this.dpr)
      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth
        canvas.height = targetHeight
      }
    }
    this.clearInput()
    this.renderPage()
    this.updateGrid()
  }

  setTool(tool) {
    if (this.activePointerId !== null) this.finishStroke(false)
    this.tool = tool
    this.inputCanvas.classList.toggle('is-hand', tool === 'hand')
  }

  setColor(color) { this.color = color }
  setSize(size) { this.size = Number(size) }

  clearContext(context) {
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
  }

  prepareWorldContext(context) {
    context.setTransform(this.dpr, 0, 0, this.dpr, 0, 0)
    context.translate(this.view.x, this.view.y)
    context.scale(this.view.zoom, this.view.zoom)
  }

  clearInput() { this.clearContext(this.inputContext) }

  renderPage() {
    this.clearContext(this.paperContext)
    this.prepareWorldContext(this.paperContext)
    for (const stroke of this.page.strokes) this.drawStroke(this.paperContext, stroke)
    this.onChange()
  }

  drawStroke(context, stroke) {
    const points = stroke.points || []
    if (!points.length) return
    context.save()
    context.strokeStyle = stroke.color
    context.fillStyle = stroke.color
    context.globalCompositeOperation = 'source-over'
    context.globalAlpha = stroke.tool === 'highlighter' ? 0.25 : 1
    context.lineCap = 'round'
    context.lineJoin = 'round'

    if (points.length === 1) {
      const radius = this.strokeWidth(stroke, points[0].pressure) / 2
      context.beginPath()
      context.arc(points[0].x, points[0].y, radius, 0, Math.PI * 2)
      context.fill()
      context.restore()
      return
    }

    for (let index = 1; index < points.length; index += 1) {
      this.drawSegment(context, stroke, points[index - 1], points[index])
    }
    context.restore()
  }

  drawSegment(context, stroke, from, to) {
    const pressure = (this.normalizedPressure(from.pressure) + this.normalizedPressure(to.pressure)) / 2
    context.lineWidth = this.strokeWidth(stroke, pressure)
    context.beginPath()
    context.moveTo(from.x, from.y)
    context.lineTo(to.x, to.y)
    context.stroke()
  }

  strokeWidth(stroke, pressure) {
    const base = stroke.tool === 'highlighter' ? stroke.size * 4.2 : stroke.size
    if (stroke.tool === 'highlighter' || !stroke.pressureEnabled) return base
    return base * (0.72 + this.normalizedPressure(pressure) * 0.62)
  }

  normalizedPressure(pressure) {
    return Number.isFinite(pressure) && pressure > 0 ? clamp(pressure, 0.05, 1) : 0.5
  }

  clientToWorld(clientX, clientY) {
    const bounds = this.inputCanvas.getBoundingClientRect()
    return {
      x: (clientX - bounds.left - this.view.x) / this.view.zoom,
      y: (clientY - bounds.top - this.view.y) / this.view.zoom,
    }
  }

  eventPoints(event) {
    let events = [event]
    if (typeof event.getCoalescedEvents === 'function') {
      try {
        const coalesced = event.getCoalescedEvents()
        if (coalesced.length) {
          events = coalesced
          this.metrics.coalesced += Math.max(0, coalesced.length - 1)
          const last = coalesced[coalesced.length - 1]
          if (last.clientX !== event.clientX || last.clientY !== event.clientY) events.push(event)
        }
      } catch {
        events = [event]
      }
    }

    return events.map((sample) => {
      const position = this.clientToWorld(sample.clientX, sample.clientY)
      return {
        x: position.x,
        y: position.y,
        pressure: this.normalizedPressure(sample.pressure),
        time: Number(sample.timeStamp) || performance.now(),
        tiltX: Number(sample.tiltX) || 0,
        tiltY: Number(sample.tiltY) || 0,
      }
    })
  }

  appendEvent(event) {
    if (!this.activeStroke) return
    const incoming = this.eventPoints(event)
    for (const point of incoming) {
      const previous = this.activeStroke.points[this.activeStroke.points.length - 1]
      // pointerrawupdate ile pointermove aynı donanım örneklerini farklı
      // paketlerde getirebilir. Eski zaman damgalı bir paket sonradan gelirse
      // kalem izini geriye doğru bağlamayız; yeni koordinatı asla mesafe
      // ya da hız eşiğiyle elemeyiz.
      if (previous && point.time < previous.time) {
        this.metrics.duplicateSamples += 1
        continue
      }
      if (previous && Math.abs(previous.x - point.x) < 0.01 && Math.abs(previous.y - point.y) < 0.01) {
        this.metrics.duplicateSamples += 1
        continue
      }

      this.activeStroke.points.push(point)
      this.metrics.samples += 1
      this.metrics.lastPressureMin = this.metrics.lastPressureMin === null ? point.pressure : Math.min(this.metrics.lastPressureMin, point.pressure)
      this.metrics.lastPressureMax = this.metrics.lastPressureMax === null ? point.pressure : Math.max(this.metrics.lastPressureMax, point.pressure)

      this.prepareWorldContext(this.inputContext)
      this.inputContext.save()
      this.inputContext.strokeStyle = this.activeStroke.color
      this.inputContext.fillStyle = this.activeStroke.color
      this.inputContext.globalAlpha = this.activeStroke.tool === 'highlighter' ? 0.25 : 1
      this.inputContext.lineCap = 'round'
      this.inputContext.lineJoin = 'round'
      if (!previous) {
        const radius = this.strokeWidth(this.activeStroke, point.pressure) / 2
        this.inputContext.beginPath()
        this.inputContext.arc(point.x, point.y, radius, 0, Math.PI * 2)
        this.inputContext.fill()
      } else {
        this.drawSegment(this.inputContext, this.activeStroke, previous, point)
      }
      this.inputContext.restore()
    }
    this.onMetrics(this.metrics)
  }

  pointerDown(event) {
    const pointerType = event.pointerType || 'mouse'
    this.metrics.lastPointerType = pointerType

    if (pointerType === 'pen') {
      this.lastPenAt = performance.now()
      this.onMetrics(this.metrics, true)
    }

    if (this.shouldPan(event)) {
      this.beginGesture(event)
      return
    }

    if (pointerType === 'touch') {
      event.preventDefault()
      return
    }

    // iPad bazen kalemin ardından uyumluluk amaçlı bir mouse olayı üretebilir.
    if (pointerType === 'mouse' && performance.now() - this.lastPenAt < PALM_REJECTION_MS) return

    event.preventDefault()
    if (this.activePointerId !== null) this.finishStroke(true)
    try { this.inputCanvas.setPointerCapture(event.pointerId) } catch { /* Safari eski sürüm */ }

    this.activePointerId = event.pointerId
    this.metrics.downs += 1
    this.metrics.lastPressureMin = null
    this.metrics.lastPressureMax = null
    this.metrics.lastEventAt = performance.now()

    if (this.tool === 'eraser') {
      this.erasing = { before: copyStrokes(this.page.strokes), changed: false }
      this.eraseAt(event)
      this.onMetrics(this.metrics)
      return
    }

    this.activeStroke = {
      id: uid(),
      tool: this.tool === 'highlighter' ? 'highlighter' : 'pen',
      color: this.color,
      size: this.size,
      pressureEnabled: this.pressureEnabled,
      points: [],
    }
    this.appendEvent(event)
  }

  pointerMove(event, isRawUpdate = false) {
    if (this.touches.has(event.pointerId)) {
      if (isRawUpdate) return
      this.moveGesture(event)
      return
    }
    if (event.pointerId !== this.activePointerId) return
    event.preventDefault()
    if (event.pointerType === 'pen') this.lastPenAt = performance.now()
    const now = performance.now()
    if (this.metrics.lastEventAt) this.metrics.maxEventGap = Math.max(this.metrics.maxEventGap, now - this.metrics.lastEventAt)
    this.metrics.lastEventAt = now

    if (this.erasing) {
      this.eraseAt(event)
      return
    }
    this.appendEvent(event)
  }

  pointerUp(event) {
    if (this.touches.has(event.pointerId)) {
      this.endGesture(event)
      return
    }
    if (event.pointerId !== this.activePointerId) return
    event.preventDefault()
    this.metrics.ups += 1

    if (this.erasing) {
      this.finishErasing()
    } else {
      this.appendEvent(event)
      this.finishStroke(true)
    }
    try { this.inputCanvas.releasePointerCapture(event.pointerId) } catch { /* capture zaten kalkmış olabilir */ }
    this.onMetrics(this.metrics)
  }

  pointerCancel(event) {
    if (this.touches.has(event.pointerId)) {
      this.endGesture(event)
      return
    }
    if (event.pointerId !== this.activePointerId) return
    event.preventDefault()
    this.metrics.cancelled += 1
    if (this.erasing) this.finishErasing()
    else {
      this.appendEvent(event)
      // cancel geldiğinde bile toplanan örnekleri kaybetme.
      this.finishStroke(true)
    }
    this.onMetrics(this.metrics)
  }

  finishStroke(commit) {
    const stroke = this.activeStroke
    this.activeStroke = null
    this.activePointerId = null
    this.metrics.lastEventAt = 0
    this.clearInput()
    if (commit && stroke?.points.length) {
      const before = copyStrokes(this.page.strokes)
      const nextStroke = { ...stroke, points: stroke.points.slice() }
      this.page.strokes = [...this.page.strokes, nextStroke]
      this.metrics.strokes += 1
      this.pushHistory(before, copyStrokes(this.page.strokes))
      this.renderPage()
      this.persist()
    } else {
      this.renderPage()
    }
    this.onMetrics(this.metrics)
  }

  shouldPan(event) {
    if (this.tool === 'hand') return true
    if (event.pointerType !== 'touch') return false
    // Kalemin hemen ardından gelen avuç temasını gezinme sanma.
    return performance.now() - this.lastPenAt >= PALM_REJECTION_MS
  }

  beginGesture(event) {
    event.preventDefault()
    try { this.inputCanvas.setPointerCapture(event.pointerId) } catch { /* no-op */ }
    this.touches.set(event.pointerId, { x: event.clientX, y: event.clientY })
    this.gesture = this.gestureSnapshot()
    this.inputCanvas.classList.add('is-panning')
  }

  moveGesture(event) {
    event.preventDefault()
    this.touches.set(event.pointerId, { x: event.clientX, y: event.clientY })
    const next = this.gestureSnapshot()
    const previous = this.gesture
    if (!previous || !next) {
      this.gesture = next
      return
    }

    if (next.count >= 2 && previous.count >= 2) {
      const oldZoom = this.view.zoom
      const newZoom = clamp(oldZoom * (next.distance / Math.max(1, previous.distance)), 0.5, 4)
      const bounds = this.inputCanvas.getBoundingClientRect()
      const centerX = next.center.x - bounds.left
      const centerY = next.center.y - bounds.top
      const worldX = (centerX - this.view.x) / oldZoom
      const worldY = (centerY - this.view.y) / oldZoom
      this.view.zoom = newZoom
      this.view.x = centerX - worldX * newZoom + (next.center.x - previous.center.x)
      this.view.y = centerY - worldY * newZoom + (next.center.y - previous.center.y)
    } else {
      this.view.x += next.center.x - previous.center.x
      this.view.y += next.center.y - previous.center.y
    }
    this.gesture = next
    this.renderPage()
    this.updateGrid()
  }

  endGesture(event) {
    event.preventDefault()
    this.touches.delete(event.pointerId)
    this.gesture = this.gestureSnapshot()
    if (!this.touches.size) this.inputCanvas.classList.remove('is-panning')
  }

  gestureSnapshot() {
    const points = [...this.touches.values()]
    if (!points.length) return null
    const center = points.reduce((total, point) => ({ x: total.x + point.x / points.length, y: total.y + point.y / points.length }), { x: 0, y: 0 })
    const distance = points.length >= 2 ? Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) : 0
    return { count: points.length, center, distance }
  }

  updateGrid() {
    const gridSize = 40 * this.view.zoom
    this.grid.style.backgroundSize = `${gridSize}px ${gridSize}px`
    this.grid.style.backgroundPosition = `${this.view.x - 1}px ${this.view.y - 1}px`
    $('#zoomPill').textContent = `%${Math.round(this.view.zoom * 100)}`
  }

  eraseAt(event) {
    const points = this.eventPoints(event)
    const radius = Math.max(10, this.size * 3.5) / this.view.zoom
    let strokes = this.page.strokes
    for (const point of points) {
      const filtered = strokes.filter((stroke) => !strokeHitsCircle(stroke, point, radius))
      if (filtered.length !== strokes.length) this.erasing.changed = true
      strokes = filtered
    }
    if (strokes !== this.page.strokes) {
      this.page.strokes = strokes
      this.renderPage()
    }
  }

  finishErasing() {
    const erasing = this.erasing
    this.erasing = null
    this.activePointerId = null
    if (erasing?.changed) {
      this.pushHistory(erasing.before, copyStrokes(this.page.strokes))
      this.persist()
    }
    this.renderPage()
  }

  pushHistory(before, after) {
    this.undoStack.push({ pageId: this.page.id, before, after })
    if (this.undoStack.length > MAX_HISTORY) this.undoStack.shift()
    this.redoStack = []
    this.onChange()
  }

  undo() {
    const action = this.undoStack.pop()
    if (!action) return
    const pageIndex = this.notebook.pages.findIndex((page) => page.id === action.pageId)
    if (pageIndex < 0) return
    this.notebook.currentPage = pageIndex
    this.page.strokes = copyStrokes(action.before)
    this.redoStack.push(action)
    this.clearInput()
    this.renderPage()
    this.persist()
  }

  redo() {
    const action = this.redoStack.pop()
    if (!action) return
    const pageIndex = this.notebook.pages.findIndex((page) => page.id === action.pageId)
    if (pageIndex < 0) return
    this.notebook.currentPage = pageIndex
    this.page.strokes = copyStrokes(action.after)
    this.undoStack.push(action)
    this.clearInput()
    this.renderPage()
    this.persist()
  }

  clearPage() {
    if (!this.page.strokes.length) return
    const before = copyStrokes(this.page.strokes)
    this.page.strokes = []
    this.pushHistory(before, [])
    this.renderPage()
    this.persist()
  }

  addPage() {
    this.notebook.pages.push(createPage(this.notebook.pages.length + 1))
    this.notebook.currentPage = this.notebook.pages.length - 1
    this.resetView()
    this.persist()
  }

  goToPage(index) {
    const next = clamp(index, 0, this.notebook.pages.length - 1)
    if (next === this.notebook.currentPage) return
    this.notebook.currentPage = next
    this.resetView()
    this.persist()
  }

  resetView() {
    this.view = { x: 0, y: 0, zoom: 1 }
    this.clearInput()
    this.renderPage()
    this.updateGrid()
  }

  persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this.notebook)) } catch { /* depolama kapalıysa çizim yine çalışır */ }
    this.onChange()
  }

  resetMetrics() {
    this.metrics = this.newMetrics()
    this.onMetrics(this.metrics)
  }

  exportPng() {
    const scale = 2
    const canvas = document.createElement('canvas')
    canvas.width = Math.round(this.width * scale)
    canvas.height = Math.round(this.height * scale)
    const context = canvas.getContext('2d')
    context.setTransform(scale, 0, 0, scale, 0, 0)
    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, this.width, this.height)
    context.strokeStyle = '#e9e9f2'
    context.lineWidth = 1
    const grid = 40 * this.view.zoom
    for (let x = this.view.x % grid; x < this.width; x += grid) {
      context.beginPath(); context.moveTo(x, 0); context.lineTo(x, this.height); context.stroke()
    }
    for (let y = this.view.y % grid; y < this.height; y += grid) {
      context.beginPath(); context.moveTo(0, y); context.lineTo(this.width, y); context.stroke()
    }
    context.translate(this.view.x, this.view.y)
    context.scale(this.view.zoom, this.view.zoom)
    for (const stroke of this.page.strokes) this.drawStroke(context, stroke)
    const link = document.createElement('a')
    link.download = `drkoc-kalem-sayfa-${this.notebook.currentPage + 1}.png`
    link.href = canvas.toDataURL('image/png')
    link.click()
  }
}

function distanceToSegment(point, start, end) {
  const dx = end.x - start.x
  const dy = end.y - start.y
  if (dx === 0 && dy === 0) return Math.hypot(point.x - start.x, point.y - start.y)
  const t = clamp(((point.x - start.x) * dx + (point.y - start.y) * dy) / (dx * dx + dy * dy), 0, 1)
  return Math.hypot(point.x - (start.x + t * dx), point.y - (start.y + t * dy))
}

function strokeHitsCircle(stroke, center, radius) {
  const points = stroke.points || []
  if (!points.length) return false
  const allowance = radius + (stroke.size || 1) * (stroke.tool === 'highlighter' ? 2.1 : 0.7)
  if (points.length === 1) return Math.hypot(points[0].x - center.x, points[0].y - center.y) <= allowance
  for (let index = 1; index < points.length; index += 1) {
    if (distanceToSegment(center, points[index - 1], points[index]) <= allowance) return true
  }
  return false
}

const notebook = loadNotebook()
let toastTimer = 0
let saveStateTimer = 0

function toast(message) {
  const element = $('#toast')
  element.textContent = message
  element.classList.add('is-visible')
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => element.classList.remove('is-visible'), 2200)
}

function renderUi() {
  const page = notebook.pages[notebook.currentPage]
  $('#pageCountButton').innerHTML = `Sayfa <strong>${notebook.currentPage + 1} / ${notebook.pages.length}</strong>`
  $('#previousPageButton').disabled = notebook.currentPage === 0
  $('#nextPageButton').disabled = notebook.currentPage === notebook.pages.length - 1
  $('#undoButton').disabled = engine.undoStack.length === 0
  $('#redoButton').disabled = engine.redoStack.length === 0
  $('#clearButton').disabled = page.strokes.length === 0
  $('#emptyHint').classList.toggle('is-hidden', page.strokes.length > 0)
  const summary = $('#engineSummary')
  clearTimeout(saveStateTimer)
  summary.querySelector('span:nth-child(2)').textContent = 'Değişiklik kaydedildi'
  saveStateTimer = setTimeout(() => { summary.querySelector('span:nth-child(2)').textContent = 'Yerel kayıt hazır' }, 900)
}

function renderMetrics(metrics, penDetected = false) {
  if (penDetected || metrics.lastPointerType === 'pen') {
    const status = $('#inputStatus')
    status.classList.add('is-pen')
    status.querySelector('span:last-child').textContent = 'Apple Pencil algılandı'
  }
  $('#metricDown').textContent = metrics.downs
  $('#metricStrokes').textContent = metrics.strokes
  $('#metricSamples').textContent = metrics.samples
  $('#metricCoalesced').textContent = metrics.coalesced
  $('#metricCancelled').textContent = metrics.cancelled
  $('#metricGap').textContent = `${Math.round(metrics.maxEventGap)} ms`
  $('#diagnosticsCopy').textContent = diagnosticsText(metrics)
}

function diagnosticsText(metrics) {
  const pressure = metrics.lastPressureMin === null
    ? '—'
    : `${metrics.lastPressureMin.toFixed(2)}–${metrics.lastPressureMax.toFixed(2)}`
  return [
    `motor: ${ENGINE_VERSION}`,
    `girdi: ${metrics.lastPointerType}`,
    `temas: ${metrics.downs} · bitiş: ${metrics.ups} · iz: ${metrics.strokes}`,
    `ham örnek: ${metrics.samples} · birleşik: ${metrics.coalesced}`,
    `iptal: ${metrics.cancelled} · yinelenen: ${metrics.duplicateSamples}`,
    `en uzun olay aralığı: ${Math.round(metrics.maxEventGap)} ms`,
    `son basınç: ${pressure}`,
    `basınç modu: ${engine?.pressureEnabled === false ? 'kapalı' : 'açık'}`,
    `ekran: ${window.innerWidth}×${window.innerHeight} @${window.devicePixelRatio || 1}`,
    `dokunma noktası: ${navigator.maxTouchPoints || 0}`,
    `tarayıcı: ${navigator.userAgent}`,
  ].join('\n')
}

const engine = new PencilEngine({
  paperCanvas: $('#paperCanvas'),
  inputCanvas: $('#inkCanvas'),
  grid: $('.paper-grid'),
  notebook,
  onChange: renderUi,
  onMetrics: renderMetrics,
})

engine.resize()
renderUi()
renderMetrics(engine.metrics)

$$('[data-tool]').forEach((button) => {
  button.addEventListener('click', () => {
    $$('[data-tool]').forEach((item) => {
      const selected = item === button
      item.classList.toggle('is-selected', selected)
      item.setAttribute('aria-pressed', String(selected))
    })
    engine.setTool(button.dataset.tool)
  })
})

$$('[data-color]').forEach((button) => {
  button.addEventListener('click', () => {
    $$('[data-color]').forEach((item) => {
      const selected = item === button
      item.classList.toggle('is-selected', selected)
      item.setAttribute('aria-pressed', String(selected))
    })
    engine.setColor(button.dataset.color)
    $('.size-dot').style.background = button.dataset.color
  })
})

$('#sizeInput').addEventListener('input', (event) => {
  engine.setSize(event.target.value)
  $('#sizeOutput').textContent = Number(event.target.value).toLocaleString('tr-TR', { maximumFractionDigits: 1 })
  $('.size-dot').style.width = `${clamp(Number(event.target.value) * 1.8, 6, 22)}px`
  $('.size-dot').style.height = `${clamp(Number(event.target.value) * 1.8, 6, 22)}px`
})

$('#pressureButton').addEventListener('click', () => {
  engine.pressureEnabled = !engine.pressureEnabled
  const button = $('#pressureButton')
  button.classList.toggle('is-active', engine.pressureEnabled)
  button.setAttribute('aria-pressed', String(engine.pressureEnabled))
  button.querySelector('span:last-child').textContent = engine.pressureEnabled ? 'Basınç açık' : 'Basınç kapalı'
  renderMetrics(engine.metrics)
})

$('#undoButton').addEventListener('click', () => engine.undo())
$('#redoButton').addEventListener('click', () => engine.redo())
$('#previousPageButton').addEventListener('click', () => engine.goToPage(notebook.currentPage - 1))
$('#nextPageButton').addEventListener('click', () => engine.goToPage(notebook.currentPage + 1))
$('#addPageButton').addEventListener('click', () => { engine.addPage(); toast('Yeni sayfa hazır') })
$('#exportButton').addEventListener('click', () => { engine.exportPng(); toast('Sayfa PNG olarak hazırlandı') })

function setSheet(sheet, open, focusTarget) {
  sheet.classList.toggle('is-open', open)
  sheet.setAttribute('aria-hidden', String(!open))
  if (open) requestAnimationFrame(() => focusTarget?.focus())
}

const diagnosticsSheet = $('#diagnosticsSheet')
const confirmSheet = $('#confirmSheet')
$('#diagnosticsButton').addEventListener('click', () => setSheet(diagnosticsSheet, true, $('#closeDiagnosticsButton')))
$('#closeDiagnosticsButton').addEventListener('click', () => setSheet(diagnosticsSheet, false))
$('#diagnosticsBackdrop').addEventListener('click', () => setSheet(diagnosticsSheet, false))
$('#resetDiagnosticsButton').addEventListener('click', () => { engine.resetMetrics(); toast('Tanı sayaçları sıfırlandı') })
$('#copyDiagnosticsButton').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(diagnosticsText(engine.metrics))
    toast('Tanı bilgisi kopyalandı')
  } catch {
    toast('Kopyalama izni verilmedi')
  }
})

$('#clearButton').addEventListener('click', () => setSheet(confirmSheet, true, $('#cancelClearButton')))
$('#cancelClearButton').addEventListener('click', () => setSheet(confirmSheet, false))
$('#confirmBackdrop').addEventListener('click', () => setSheet(confirmSheet, false))
$('#confirmClearButton').addEventListener('click', () => {
  engine.clearPage()
  setSheet(confirmSheet, false)
  toast('Sayfa temizlendi · geri alabilirsin')
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setSheet(diagnosticsSheet, false)
    setSheet(confirmSheet, false)
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'z') {
    event.preventDefault()
    if (event.shiftKey) engine.redo()
    else engine.undo()
  }
})

window.addEventListener('pagehide', () => engine.persist())
