/**
 * ATLAS FON MÜZİĞİ
 * ==================================================================
 *
 * NEDEN SESE GÖMÜLMÜYOR
 * Müzik, anlatım mp3'lerinin İÇİNE karıştırılmıyor; ayrı bir kanal
 * olarak çalıyor. Sebepleri:
 *
 *   · Öğrenci müziği kapatabilsin ama anlatımı duymaya devam etsin.
 *   · Müzik değiştiğinde 36 anlatımın yeniden üretilmesi gerekmesin
 *     (ses üretimi ücretli; müzik değişimi bedava olmalı).
 *   · Tek bir müzik dosyası indirilsin, 36 dosya şişmesin.
 *   · Konuşma sırasında müzik kısılıp aralarda yükselebilsin.
 *
 * MÜZİK EKLEME
 *   1. Ticari kullanıma açık bir parça bul (bkz. muzik/OKUBENI.md).
 *   2. mp3'ü `public/lesson-assets/tarih/osmanli-padisahlari/muzik/`
 *      klasörüne koy.
 *   3. Aşağıdaki `dosya` alanına adını yaz.
 *   4. `lisans` alanını doldur — ürün ticari, kaynağı kayıtlı tutuyoruz.
 *
 * `dosya` boş olduğu sürece müzik kanalı sessizce devre dışıdır;
 * arayüzde düğme görünür ama pasiftir. Yani eksik dosya hiçbir şeyi
 * bozmaz.
 */

export const ATLAS_MUZIGI = {
  /** Dosya adı — `muzik/` klasörüne göre. Boşsa müzik kapalıdır. */
  dosya: '',

  /** Ekranda ve kayıtlarda görünecek künye. */
  ad: '',
  lisans: '',
  kaynak: '',

  /**
   * Ses seviyeleri. Öğrenci saatlerce dinleyecek; müzik fark edilmeli
   * ama konuşmayla yarışmamalı. Belgesel karışımlarında müzik, konuşma
   * sırasında belirgin biçimde kısılır ve aralarda geri yükselir.
   */
  sesSeviyesi: 0.22,      // anlatım susarken
  kisikSeviye: 0.09,      // anlatım konuşurken
  yumusamaSaniye: 1.2,    // seviye değişiminin süresi
}

export const MUZIK_KOKU = '/lesson-assets/tarih/osmanli-padisahlari/muzik'

/** Müzik dosyasının adresi. Tanımlı değilse `null`. */
export function atlasMuzikAdresi() {
  return ATLAS_MUZIGI.dosya ? `${MUZIK_KOKU}/${ATLAS_MUZIGI.dosya}` : null
}

export default ATLAS_MUZIGI
