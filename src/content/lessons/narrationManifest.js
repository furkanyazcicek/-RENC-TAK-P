/**
 * ÜRETİLMİŞ SES KAYITLARI DEFTERİ  (otomatik üretilir — elle düzenlemeyin)
 * ==================================================================
 *
 * `npm run ses:uret` komutu her anlatım parçası için bir kez ses üretir,
 * dosyayı `public/lesson-assets/narration/<ders>/` altına yazar ve bu
 * defteri günceller. Okuyucu önce buraya bakar:
 *
 *   · Kayıt var ve sürümü tutuyorsa → hazır mp3 çalınır (ücretsiz, hızlı,
 *     çevrimdışı da açılabilir).
 *   · Kayıt yoksa veya anlatım metni değiştiyse → istek anında üreten
 *     `/api/lessons/narrate` uç noktasına düşülür.
 *
 * `version` alanı anlatım metninden hesaplanır. Metin değişirse sürüm de
 * değişir ve eski kayıt kendiliğinden devre dışı kalır; kimse "ses neden
 * eski metni okuyor?" sorusuyla uğraşmaz.
 */

export const NARRATION_AUDIO_BASE = '/lesson-assets/narration'

export const NARRATION_MANIFEST = {}

export default NARRATION_MANIFEST
