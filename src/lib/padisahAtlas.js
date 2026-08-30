/**
 * PADİŞAH GEÇİDİ ↔ TARİH ATLASI KÖPRÜSÜ
 * ==================================================================
 *
 * Geçiş gösterisindeki bir olaydan Tarih Atlası’na geçiş TEK yerden
 * kurulur. Bileşenlerin içine elle adres yazılmaz; böylece atlas
 * geliştiğinde (olay kimliği, odak bölgesi desteği geldiğinde)
 * yalnızca bu dosya değişir.
 *
 * BUGÜNKÜ DURUM
 *   Atlas `?yil=` parametresini destekler — bağlantı çalışır ve
 *   öğrenciyi doğru yıla götürür.
 *   `eventId` ve `focus` atlasa henüz bağlanmadı; adrese yazılır ama
 *   atlas bugün onları yok sayar. Bozuk bir bağlantı üretilmez:
 *   desteklenmeyen alanlar yalnızca etkisizdir.
 */

export const ATLAS_YOLU = '/tarih-atlasi'

/** Atlasın veri kapsamı — dışına düşen bir yıl için düğme gösterilmez. */
export const ATLAS_YIL_ARALIGI = { enAz: 1000, enCok: 1950 }

export function atlasAcilabilir(baglanti) {
  if (!baglanti || typeof baglanti.year !== 'number') return false
  return baglanti.year >= ATLAS_YIL_ARALIGI.enAz && baglanti.year <= ATLAS_YIL_ARALIGI.enCok
}

/**
 * `openAtlas({ year, eventId, focus })` karşılığı — atlasa gidilecek adresi üretir.
 * Uygulama içi gezinme için `to` (react-router) değeri döner.
 */
export function atlasAdresi({ year, eventId, focus } = {}) {
  const parametreler = new URLSearchParams()
  if (typeof year === 'number') parametreler.set('yil', String(year))
  if (eventId) parametreler.set('olay', eventId)
  if (focus) parametreler.set('odak', focus)
  const sorgu = parametreler.toString()
  return sorgu ? `${ATLAS_YOLU}?${sorgu}` : ATLAS_YOLU
}

/** Düğme etiketi — veri kendi etiketini vermediyse anlamlı bir metin üretir. */
export function atlasEtiketi(baglanti) {
  return baglanti?.label ?? `${baglanti?.year ?? ''} yılını haritada incele`.trim()
}
