/**
 * DERS SESİ ORTAK HATTI
 * ==================================================================
 *
 * İKİ İŞ YAPAR:
 *
 * 1) AYNI ANDA TEK SES. Ders sayfasında birden fazla oynatıcı olabilir:
 *    sayfanın üstündeki anlatım oynatıcısı, "Görseli Hocayla İncele"
 *    penceresindeki ses, ileride eklenecek başkaları. Bunlar birbirinden
 *    habersiz çalışırsa öğrenci iki sesi üst üste duyar. Her oynatıcı
 *    buraya kaydolur; biri çalmaya başladığında diğerleri susturulur.
 *
 * 2) DURUMU DIŞARI AÇAR. Anlatımın o anki durumu (çalıyor mu, hangi bölüm,
 *    kaçıncı saniye, hangi hız) tek yerden okunabilir. İleride eklenecek
 *    avatar bileşeni ses başlayınca konuşma animasyonuna, susunca bekleme
 *    pozisyonuna geçmek için bu durumu dinleyecek. Avatar bugün yok; ama
 *    mimari onu sonradan eklemeyi zorlaştırmasın diye durum şimdiden
 *    bileşenin dışında tutuluyor.
 */

const players = new Set()

/**
 * Bir <audio> öğesini ortak hatta bağlar. Geri dönen fonksiyon bağlantıyı
 * koparır — bileşen ekrandan kalkarken çağrılmalıdır.
 */
export function registerAudioElement(element) {
  if (!element) return () => {}
  players.add(element)

  const handlePlay = () => {
    players.forEach((other) => {
      if (other !== element && !other.paused) other.pause()
    })
  }

  element.addEventListener('play', handlePlay)
  return () => {
    element.removeEventListener('play', handlePlay)
    players.delete(element)
  }
}

/** Sayfadaki bütün ders seslerini durdurur (ders değişimi, sayfa kapanışı). */
export function stopAllLessonAudio() {
  players.forEach((element) => {
    if (!element.paused) element.pause()
  })
}

/* ---------------- Anlatım durumu (avatar için hazır) ---------------- */

const EMPTY_STATE = Object.freeze({
  isPlaying: false,
  lessonSlug: null,
  sectionId: null,
  sectionIndex: -1,
  blockId: null,
  currentTime: 0,
  duration: 0,
  playbackRate: 1,
})

let narrationState = EMPTY_STATE
const listeners = new Set()

export function getNarrationState() {
  return narrationState
}

export function subscribeNarrationState(listener) {
  listeners.add(listener)
  listener(narrationState)
  return () => listeners.delete(listener)
}

export function publishNarrationState(partial) {
  narrationState = { ...narrationState, ...partial }
  listeners.forEach((listener) => listener(narrationState))
}

export function resetNarrationState() {
  narrationState = EMPTY_STATE
  listeners.forEach((listener) => listener(narrationState))
}
