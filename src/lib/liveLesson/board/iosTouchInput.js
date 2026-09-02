/**
 * iPadOS APPLE PENCIL GİRİŞ KATMANI
 * ======================================
 *
 * Gerçek cihaz A/B testi aynı Canvas motorunda şunu kanıtladı:
 * Apple Pencil, Safari'nin Pointer Events yolunda hızlı ardışık
 * temasları kaybediyor; doğrudan Touch Events yolunda kaybetmiyor.
 *
 * Bu dosya yalnızca cihaz ve Touch nesnesini sınıflandırır. React,
 * Canvas ve ders durumu bilmez; dolayısıyla masaüstünde test edilebilir.
 */

/** iPadOS, masaüstü site kipinde kendini Mac gibi tanıtabilir. */
export function isIpadLikeNavigator(navigatorLike = {}) {
  const userAgent = String(navigatorLike.userAgent ?? '')
  const platform = String(navigatorLike.platform ?? '')
  const touchPoints = Number(navigatorLike.maxTouchPoints) || 0
  return /iPad|iPhone|iPod/i.test(userAgent) || (platform === 'MacIntel' && touchPoints > 1)
}

/**
 * Pointer yerine iOS Touch motorunun kullanılacağı cihaz.
 * MacBook trackpad'i `MacIntel` olsa da maxTouchPoints=0 olduğu için
 * bu yola girmez; Android/Windows kalemler mevcut Pointer yolunda kalır.
 */
export function shouldUseIosTouchInput(navigatorLike = {}, hasTouchEvents = false) {
  return Boolean(hasTouchEvents && isIpadLikeNavigator(navigatorLike))
}

/** Touch nesnesinin Safari/WebKit'e göre girdi türü. */
export function iosTouchKind(touch = {}) {
  const declared = String(touch.touchType ?? touch.webkitTouchType ?? '').toLowerCase()
  if (
    declared.includes('stylus') ||
    declared.includes('pen') ||
    declared.includes('pencil') ||
    declared === '2'
  ) {
    return 'stylus'
  }
  if (declared.includes('direct') || declared.includes('finger') || declared.includes('touch')) {
    return 'finger'
  }

  // Bazı WebKit sürümleri touchType'ı açmasa da Pencil teması küçük
  // yarıçaplı ve basınçlıdır. Bu yedek yalnızca ikisi birlikteyse
  // devreye girer; normal parmağı kalem sanma riskini düşürür.
  const radiusX = Number(touch.radiusX ?? touch.webkitRadiusX)
  const radiusY = Number(touch.radiusY ?? touch.webkitRadiusY)
  const force = Number(touch.force ?? touch.webkitForce)
  if (
    Number.isFinite(force) &&
    force > 0 &&
    Number.isFinite(radiusX) &&
    Number.isFinite(radiusY) &&
    Math.max(radiusX, radiusY) <= 5
  ) {
    return 'stylus-olasi'
  }
  return 'belirsiz'
}

/** Değişen temaslar içinden Pencil temasını seçer; parmağı döndürmez. */
export function findIosStylusTouch(touchList) {
  const touches = Array.from(touchList ?? [])
  return (
    touches.find((touch) => iosTouchKind(touch) === 'stylus') ??
    touches.find((touch) => iosTouchKind(touch) === 'stylus-olasi') ??
    null
  )
}

/** TouchList içinde belirli kimliği bulur. */
export function findTouchById(touchList, identifier) {
  return Array.from(touchList ?? []).find((touch) => touch.identifier === identifier) ?? null
}

/** Safari sürümleri arasındaki force/webkitForce farkını tekleştirir. */
export function rawIosTouchPressure(touch = {}) {
  const raw = Number(touch.force ?? touch.webkitForce)
  return Number.isFinite(raw) ? raw : 0
}
