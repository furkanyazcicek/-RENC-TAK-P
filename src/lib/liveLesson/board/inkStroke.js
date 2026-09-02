/**
 * KALEM ÇİZGİSİNİN SAF KURALLARI.
 *
 * Tahta bileşeni React, canvas ve ağ ile iç içe; bu yüzden çizginin
 * "doğru olması gereken" kuralları buraya, tarayıcıya hiç dokunmayan saf
 * fonksiyonlara ayrıldı. Böylece Apple Pencil davranışı gerçek cihaz
 * olmadan da test edilebiliyor (bkz. scripts/test-ink-stroke.mjs).
 *
 * Buradaki üç kural, el yazısının kopuk görünmesinin doğrudan sebebiydi.
 */

/**
 * Kalemin GÖRSEL en düşük basıncı.
 *
 * Apple Pencil bir çizginin başında ve sonunda 0'a çok yakın basınç
 * bildirir. Bu değerleri olduğu gibi kullanmak çizginin ilk ve son
 * milimetresini görünmez inceltiyordu. Nokta GEÇERLİDİR, yalnızca
 * çizilirken bir alt sınıra çekilir.
 */
export const PEN_MIN_VISUAL_PRESSURE = 0.06

/** Basınç bildirmeyen girdiler (fare, parmak) için orta değer. */
export const DEFAULT_PRESSURE = 0.5

/**
 * Ham basıncı çizime uygun değere çevirir.
 *
 * KURAL: düşük basınç YÜZÜNDEN NOKTA ATILMAZ. Atılsaydı çizginin başı ve
 * sonu kaybolurdu — kullanıcının "harflerin başı eksik" dediği hata tam
 * olarak budur.
 */
export function normalizePressure(raw, { pointerType = 'pen', previous = null, enabled = true } = {}) {
  if (!enabled) return DEFAULT_PRESSURE
  if (pointerType !== 'pen') return DEFAULT_PRESSURE

  const value = Number.isFinite(raw) ? raw : 0
  // Pozitif olması tek başına görünür olduğu anlamına gelmez. Pencil yeni
  // temasta 0 ile 0.06 arasında çok küçük değerler bildirebiliyor; özellikle
  // i noktası ve A/F kolları gibi kısa izler, çizgi boyunca bir kez daha
  // yüksek basınç gelmediyse gözle seçilemeyecek kadar inceliyordu.
  if (value > 0) return Math.min(1, Math.max(PEN_MIN_VISUAL_PRESSURE, value))
  // Basınç 0 geldi: önce bu çizgideki son geçerli değere, o da yoksa
  // görsel alt sınıra düş. Noktayı ASLA reddetme.
  if (previous != null && previous > 0) return previous
  return PEN_MIN_VISUAL_PRESSURE
}

/**
 * Hafif basınç yumuşatma.
 *
 * Apple Pencil basıncı milisaniyelik sıçrar; ham değer harflerin kenarını
 * titretiyor. Ağırlık bilinçli olarak yeni örneğe yakın: fazla yumuşatma
 * hızlı yazıda kalemi "gecikmeli" hissettirir.
 */
export function smoothPressure(previous, current, weight = 0.28) {
  if (previous == null) return current
  return previous * (1 - weight) + current * weight
}

/**
 * Bu örnek çizgiye eklenmeli mi?
 *
 * Yalnızca GERÇEKTEN gereksiz (bir önceki noktayla neredeyse aynı yerde)
 * örnekler elenir. Kısa çizgiler, noktalar ve tek dokunuşlar buradan
 * geçmez — onlar zaten hiç `pointermove` üretmez.
 */
export function shouldAcceptSample(points, x, y, minStep) {
  if (!points || points.length < 3) return true
  const n = points.length
  const dx = x - points[n - 3]
  const dy = y - points[n - 2]
  return Math.hypot(dx, dy) >= minStep
}

/**
 * KALEM KALKTIĞINDAKİ NOKTA ÇİZGİYE GİRER Mİ?
 *
 * `pointerup` konumu her zaman eklenir — tek istisna, son örnekle
 * TAM OLARAK aynı yer olması. Hızlı yazıda son `pointermove` ile kalemin
 * kalktığı yer arasında birkaç piksel olur; bu nokta atılırsa harflerin
 * bitişi kırpılır.
 */
export function shouldAppendLiftPoint(points, x, y) {
  if (!points || points.length < 3) return true
  const n = points.length
  return points[n - 3] !== x || points[n - 2] !== y
}

/* ------------------------------------------------------------------ */
/*  Uzak taraf: paket sırası, tekrar ve hayalet çizgi                   */
/* ------------------------------------------------------------------ */

/**
 * Karşı taraftan gelen nokta paketini uygular.
 *
 * `offset`, gönderenin o ana kadar YOLLADIĞI sayı; bizdeki uzunlukla
 * karşılaştırılır:
 *   • offset < uzunluk  → paket tekrarı, yok sayılır (çizgi kendi
 *     üstüne katlanmasın)
 *   • offset === uzunluk → sıradaki paket, eklenir
 *   • offset > uzunluk  → arada paket kaybolmuş; YİNE DE eklenir.
 *     Kaybolan noktayı geri getiremeyiz ama elimizdekini atmak çizgiyi
 *     büsbütün kopuk gösterirdi. "Bitti" paketi zaten çizginin tamamını
 *     taşıdığı için sonuç kendini düzeltir.
 */
export function applyRemotePoints(item, offset, points) {
  if (!item || !Array.isArray(points) || points.length === 0) {
    return { applied: false, reason: 'bos' }
  }
  const current = item.p.length
  const at = typeof offset === 'number' ? offset : current

  if (at < current) return { applied: false, reason: 'tekrar' }
  const gap = at > current
  item.p.push(...points)
  return { applied: true, reason: gap ? 'bosluk' : 'sirali', gap }
}

/**
 * Karşı taraf "bitti" demeden kaybolmuş çizgi.
 *
 * Bağlantı koptuğunda ya da sekme kapandığında yarım kalan çizgi canlı
 * katmanda sonsuza dek asılı kalırdı. Belirli süre yeni nokta gelmezse
 * temizlenir.
 */
export function isStaleRemoteStroke(item, now, ttlMs = 8000) {
  return now - (item?.seenAt ?? 0) > ttlMs
}

/* ------------------------------------------------------------------ */
/*  Teşhis                                                             */
/* ------------------------------------------------------------------ */

/**
 * Bir çizginin sağlık raporu. Geliştirme kipinde tahtanın üstünde
 * gösterilir; "hangi aşamada kayboldu" sorusunu tahminsiz yanıtlar.
 */
export function strokeReport(stroke, extra = {}) {
  const count = stroke?.p ? stroke.p.length / 3 : 0
  const pressures = []
  for (let i = 2; i < (stroke?.p?.length ?? 0); i += 3) pressures.push(stroke.p[i])
  return {
    id: stroke?.id ?? null,
    noktaSayisi: count,
    ilkBasinc: pressures[0] ?? null,
    sonBasinc: pressures[pressures.length - 1] ?? null,
    enDusukBasinc: pressures.length ? Math.min(...pressures) : null,
    enYuksekBasinc: pressures.length ? Math.max(...pressures) : null,
    ...extra,
  }
}

/**
 * BASINÇ HİÇ GELMEDİYSE İZ GÖRÜNÜR OLSUN.
 *
 * Kalem, çok kısa dokunuşlarda (bir "i" noktası, bir virgül) hiçbir zaman
 * gerçek basınç bildirmeyebiliyor. Bu durumda bütün noktalar görsel alt
 * sınırda kalıyor ve iz, kalem kalınlığının yüzde altısı kadar — yani
 * gözle neredeyse görünmez — çiziliyordu. Cihaz bize hiçbir şey
 * söylemediyse işareti normal kalınlıkta çizeriz: öğrenci noktayı bilerek
 * koydu, silik bir leke görmeyi beklemiyor.
 *
 * Gerçek basınç ölçülen çizgilere DOKUNULMAZ; kalemin doğal incelip
 * kalınlaşması korunur.
 *
 * @returns {boolean} basınç yükseltildiyse true
 */
export function boostFaintStroke(item) {
  const p = item?.p
  if (!Array.isArray(p) || p.length < 3) return false
  for (let i = 2; i < p.length; i += 3) {
    if (p[i] > PEN_MIN_VISUAL_PRESSURE + 1e-6) return false
  }
  for (let i = 2; i < p.length; i += 3) p[i] = DEFAULT_PRESSURE
  return true
}
