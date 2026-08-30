/**
 * ATLAS FON MÜZİĞİ — MOD BAŞINA AYRI PARÇA
 * ==================================================================
 *
 * İki mod iki ayrı deneyimdir, bu yüzden iki ayrı müzik kullanır:
 *
 *   Keşif modu    → öğrenci bilgiyi kendi hızında inceler. Müzik
 *                   geri planda kalmalı, dikkat dağıtmamalıdır.
 *   Belgesel modu → seyredilen bir anlatı. Müzik sahnenin parçasıdır;
 *                   daha karakterli, daha "tarih belgeseli" bir parça.
 *
 * NEDEN SESE GÖMÜLMÜYOR
 * Müzik, anlatım kayıtlarının İÇİNE karıştırılmıyor; ayrı bir kanal
 * olarak çalıyor. Sebepleri:
 *
 *   · Öğrenci müziği kapatabilsin ama anlatımı duymaya devam etsin.
 *   · Müzik değiştiğinde anlatımların yeniden üretilmesi gerekmesin
 *     (ses üretimi ücretli; müzik değişimi bedava olmalı).
 *   · Tek bir müzik dosyası indirilsin, her anlatımda şişmesin.
 *   · Konuşma sırasında müzik kısılıp aralarda yükselebilsin.
 *
 * SES SEVİYESİ EŞİTLENMESİ
 * Parçalar farklı yükseklikte kaydedilmiş olabilir. Yeni bir parça
 * eklenirken ortalama seviyesi ölçülüp diğerlerine eşitlenir; böylece
 * aşağıdaki yüzdeler parça değiştiğinde yeniden ayarlanmak zorunda
 * kalmaz. Bkz. muzik/OKUBENI.md.
 *
 * `dosya` boş bırakılırsa o modda müzik kanalı sessizce devre dışı
 * kalır; arayüzde düğme görünür ama pasiftir. Eksik dosya hiçbir şeyi
 * bozmaz.
 */

/** Keşif modu — sakin, geri planda. */
export const KESIF_MUZIGI = {
  dosya: 'atlas-fon-dongu.m4a',
  ad: 'Historical — Yevhen Astafiev',
  lisans: 'Pixabay lisansı (ticari kullanıma açık, kaynak belirtme şartsız)',
  kaynak: 'pixabay.com · dosya kimliği 534555',
  sesSeviyesi: 0.22,
  kisikSeviye: 0.09,
}

/** Belgesel modu — sahnenin parçası, daha karakterli. */
export const BELGESEL_MUZIGI = {
  dosya: 'atlas-fon-dongu-2.m4a',
  ad: 'Epic Historical Music — copyrightfreemusicforyou',
  lisans: 'Pixabay lisansı (ticari kullanıma açık, kaynak belirtme şartsız)',
  kaynak: 'pixabay.com · dosya kimliği 316909',
  /* Bu parça öncekinden iki kattan fazla yüksek kaydedilmişti; dosya
     0,486 ile çarpılarak aynı seviyeye indirildi. */
  sesSeviyesi: 0.24,
  kisikSeviye: 0.10,
}

/** Seviye geçişinin süresi — her iki modda ortak. */
export const YUMUSAMA_SANIYE = 1.2

export const MUZIK_KOKU = '/lesson-assets/tarih/osmanli-padisahlari/muzik'

/** Modun müzik tanımı. Bilinmeyen mod keşif sayılır. */
export function modMuzigi(mod) {
  return mod === 'belgesel' ? BELGESEL_MUZIGI : KESIF_MUZIGI
}

/** Modun müzik adresi. Tanımlı değilse `null`. */
export function atlasMuzikAdresi(mod) {
  const parca = modMuzigi(mod)
  return parca.dosya ? `${MUZIK_KOKU}/${parca.dosya}` : null
}

export default KESIF_MUZIGI
