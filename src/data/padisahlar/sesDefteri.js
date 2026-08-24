/**
 * PADİŞAH SESLERİ DEFTERİ  (otomatik üretilir — elle düzenlemeyin)
 * ==================================================================
 *
 * `npm run padisah:ses` komutu her padişahın anlatımını BİR kez seslendirir,
 * mp3'ü `public/lesson-assets/narration/padisahlar/` altına yazar ve bu
 * defteri günceller.
 *
 * NEDEN PADİŞAH BAŞINA TEK DOSYA?
 * Anlatım altı yedi paragraftan oluşuyor ama tek bir belgesel parçasıdır.
 * Paragrafları ayrı ayrı seslendirip arka arkaya eklemek, cümleler arası
 * doğal geçişi bozar ve dinleyici "yapıştırılmış" hissi alır. Bu yüzden
 * metnin tamamı tek istekte okunur; paragraf araları anlatıcıya bırakılır.
 *
 * `version` alanı anlatım metninden hesaplanır. Bir padişahın metnini
 * düzeltirsen sürüm değişir, eski kayıt kendiliğinden devre dışı kalır ve
 * yalnızca o padişah yeniden üretilir — 36'sı için tekrar para ödenmez.
 *
 * `duration` gerçek ses uzunluğudur (saniye). Anlatım şeridi bölüm
 * sınırlarını bu gerçek süreye göre ölçekler; böylece ekrandaki vurgu
 * duyulan cümleyle aynı anda gelir.
 */

export const PADISAH_SES_KOKU = '/lesson-assets/narration/padisahlar'

export const PADISAH_SES_DEFTERI = {}

export default PADISAH_SES_DEFTERI
