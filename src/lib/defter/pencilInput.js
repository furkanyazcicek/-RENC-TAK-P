import { findIosStylusTouch, findTouchById, rawIosTouchPressure } from '../liveLesson/board/iosTouchInput.js'

/** Canlı dersle aynı Touch sınıflandırması; temasın ömrü Pointer'dan bağımsızdır. */
export function createPencilInput({ enabled = () => true, onStart, onMove, onFinish }) {
  let touchId = null
  const prevent = event => { if (event.cancelable) event.preventDefault() }
  const sample = touch => ({ clientX: touch.clientX, clientY: touch.clientY, pressure: rawIosTouchPressure(touch) })
  function finish() {
    if (touchId === null) return
    touchId = null
    // touchcancel de canlı tahtadaki gibi alınmış örnekleri korur.
    onFinish()
  }
  return {
    get active() { return touchId !== null },
    blocksPointer(event) {
      if (event.pointerType !== 'pen' && touchId === null) return false
      prevent(event)
      return true
    },
    start(event) {
      if (!enabled()) return
      const touch = findIosStylusTouch(event.changedTouches)
      if (!touch) return
      prevent(event)
      if (touchId !== null) {
        // Başka bir temas, ekranda kalan kalemin sahipliğini alamaz.
        if (touch.identifier !== touchId && findTouchById(event.touches, touchId)) return
        // Önceki kalkış kayıpsa iki harf birbirine bağlanmadan tamamlanır.
        finish()
      }
      touchId = touch.identifier
      onStart(sample(touch))
    },
    move(event) {
      if (touchId === null) return
      const touch = findTouchById(event.changedTouches, touchId)
      if (!touch) return
      prevent(event)
      onMove(sample(touch))
    },
    end(event) {
      if (touchId === null) return
      const touch = findTouchById(event.changedTouches, touchId)
      if (!touch && findTouchById(event.touches, touchId)) return
      prevent(event)
      if (touch) onMove(sample(touch))
      finish()
    },
    finish,
  }
}
