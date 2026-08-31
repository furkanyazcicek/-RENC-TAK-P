/**
 * Tahta eşitlemesinin SINIRI.
 *
 * İki ayrı kanal vardır ve karıştırılmamalıdır:
 *
 *   1. ANLIK (broadcast) — karşı tarafın çizimi görmesi için. Kalem
 *      elden bırakıldığında TAMAMLANMIŞ çizgi tek parça gönderilir.
 *      Her pointer hareketini yayınlamıyoruz: bir çizgi 200 nokta
 *      içerebiliyor ve bunu 200 ayrı mesajla göndermek kanalı boğar.
 *      Bunun yerine çizim sırasında düşük frekanslı (≈12/sn) bir "ucu
 *      nerede" işareti, elden bırakınca da çizginin kendisi gider.
 *
 *   2. KALICI (veritabanı) — dersten sonra tahtanın kaybolmaması için.
 *      Sayfa başına en fazla birkaç saniyede bir yazılır, üstelik
 *      yalnızca gerçekten değiştiyse.
 *
 * Bu ayrım olmadan ya tahta gecikir (her şeyi veritabanına yazarsak) ya
 * da ders bitince kaybolur (hiçbir şey yazmazsak).
 */
import { saveBoardPage } from '../api'
import { serializePage } from './model'

/** Kalıcı kayıt aralığı. Ders içinde 4 saniye fazlasıyla yeterli. */
const SAVE_DELAY_MS = 4000
/** Çizim sırasında "ucun konumu" yayını — saniyede ~12 kare. */
export const LIVE_POINT_INTERVAL_MS = 80

/**
 * KALICI KAYDIN TEK SAHİBİ VARDIR.
 *
 * Tahtayı hem öğretmen hem öğrenci kaydediyordu. İkisinin tahtası aynı
 * olduğu sürece bu zararsızdı; ama öğrencinin bağlantısı koptuğu sırada
 * öğretmen çizmeye devam ederse öğrenci o çizimleri hiç almıyor ve geri
 * geldiğinde KENDİ ESKİ HÂLİNİ veri tabanına yazıp öğretmenin aradaki
 * bütün çizimlerini siliyordu. Kalıcı kaydı tek tarafa — dersin sahibi
 * olan öğretmene — bağlamak bu yarışı tamamen ortadan kaldırır.
 *
 * Öğrencinin çizdikleri kaybolmaz: onlar anlık kanaldan öğretmene gider
 * ve kaydı öğretmen yapar.
 */
export function createBoardSync({ sessionId, getPage, onState, canPersist = true }) {
  const timers = new Map()
  const pending = new Set()
  let destroyed = false
  let inFlight = 0

  function setState(state, detail) {
    onState?.(state, detail)
  }

  async function writePage(pageIndex) {
    const page = getPage(pageIndex)
    if (!page || destroyed) return
    inFlight += 1
    setState('saving')
    try {
      await saveBoardPage(sessionId, pageIndex, serializePage(page), page.background ?? {})
      pending.delete(pageIndex)
      if (--inFlight <= 0) setState('saved')
    } catch (error) {
      inFlight = Math.max(0, inFlight - 1)
      // Kaydedilemedi: kullanıcıya söylenir ama çizim EKRANDA KALIR.
      // Sessizce yutmak, öğretmenin sonradan "tahtam nerede" demesine yol açar.
      setState('error', error)
    }
  }

  return {
    /** Sayfa değişti — yakın zamanda kaydet. */
    markDirty(pageIndex) {
      if (destroyed || !canPersist) return
      pending.add(pageIndex)
      setState('dirty')
      if (timers.has(pageIndex)) window.clearTimeout(timers.get(pageIndex))
      timers.set(
        pageIndex,
        window.setTimeout(() => {
          timers.delete(pageIndex)
          writePage(pageIndex)
        }, SAVE_DELAY_MS)
      )
    },

    /** Bekleyen her şeyi hemen yaz (ders bitişi, sayfadan ayrılma). */
    async flushNow() {
      if (!canPersist) return
      for (const timer of timers.values()) window.clearTimeout(timer)
      timers.clear()
      const indexes = [...pending]
      await Promise.all(indexes.map((i) => writePage(i)))
    },

    hasPending() {
      return pending.size > 0
    },

    destroy() {
      destroyed = true
      for (const timer of timers.values()) window.clearTimeout(timer)
      timers.clear()
      pending.clear()
    },
  }
}
