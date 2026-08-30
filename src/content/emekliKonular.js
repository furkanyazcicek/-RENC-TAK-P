/**
 * EMEKLİ KONULAR
 * ==================================================================
 *
 * Müfredat güncellendiğinde eski konu başlıkları veritabanında kalır.
 * Öğrenci için bunlar gürültüdür: listeyi uzatırlar, içleri boştur ve
 * tıklanınca "burada içerik yok" derler.
 *
 * Buradaki başlıklar kütüphane listelerinde GİZLENİR — ama yalnızca
 * içleri boşsa. Konuya bir ders notu ya da soru seti bağlıysa yine
 * görünür; böylece bir gün oraya içerik eklenirse kaybolmaz.
 *
 * Bu liste veritabanına dokunmaz, yalnızca görünümü düzenler. Satırlar
 * veritabanından da silinecekse:
 *   node scripts/dinKulturuEskiKonulariTemizle.mjs
 */

const EMEKLI_KONULAR = [
  {
    examType: 'TYT',
    subject: 'Din Kültürü ve Ahlak Bilgisi',
    // 2026 MEB programından önceki geniş başlıklar. Ders içeriği artık
    // 20 üniteye göre yazılıyor (bkz. src/content/lessons/index.js).
    topics: [
      'Bilgi ve İnanç',
      'İslam ve İbadet',
      'Gençlik ve Değerler',
      'Din ve Hayat',
      'Ahlaki Tutum ve Davranışlar',
      'Din, Kültür ve Sanat',
    ],
  },
]

/** Verilen konu emekli listesinde mi? */
export function emekliKonuMu({ examType, subject, topic }) {
  return EMEKLI_KONULAR.some(
    (kayit) =>
      kayit.examType === examType &&
      kayit.subject === subject &&
      kayit.topics.includes(topic)
  )
}

export default EMEKLI_KONULAR
