/**
 * Ders / Konu ayrıştırma — TEK KAYNAK.
 *
 * `daily_logs.topic` tek bir serbest metin alanıdır ve öğrenciler onu üç
 * farklı biçimde yazıyor:
 *
 *   "Matematik - Türev"            → kanonik biçim (tire, boşluklu)
 *   "Matematik-Problemler"         → tire, boşluksuz
 *   "matematik köklü ifadeler"     → ayırıcı YOK, ders adı önek olarak yazılmış
 *
 * Üçünü de tanımazsak aynı ders birden fazla "ders" gibi görünür: H.Ekrem'in
 * 4 dersi sistemde 8 ders olarak sayılıyordu ve hem grafikler hem AI Koç'un
 * bağlamı bozuluyordu.
 *
 * NEDEN AYRI DOSYA?
 * Aynı mantığa dört yer ihtiyaç duyuyor: `topicHelpers.js` (grafikler),
 * `insights.js` (içgörü cümleleri), `api/_lib/context.js` ve
 * `api/_lib/tools.js` (AI Koç). Kopyalarsak zamanla ayrışırlar — nitekim
 * ayrışmışlardı: insights bare '-' ile, topicHelpers ' - ' ile bölüyordu.
 *
 * Bu modül SUNUCUDA DA çalışır: bağımlılığı yalnızca `./examHelpers.js`
 * ve uzantı açıkça yazıldığı için Node'un ESM çözümleyicisi de bulur.
 */

import { COMMON_SUBJECTS, SUBJECT_PRESETS } from './examHelpers.js'

/**
 * Türkçe karakterleri sadeleştirir ve küçük harfe indirir.
 * Öğrenciler "türkce", "gercek sayılar", "ozellikleri" gibi şapkasız
 * yazıyor; eşleştirme bunu tolere etmeli.
 */
export function foldTr(value) {
  return String(value ?? '')
    .toLocaleLowerCase('tr-TR')
    .replace(/ç/g, 'c')
    .replace(/ğ/g, 'g')
    .replace(/ı/g, 'i')
    .replace(/i̇/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ş/g, 's')
    .replace(/ü/g, 'u')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * Tanınan ders adları — sınav müfredatlarından ve ortak ders listesinden.
 * Uzundan kısaya sıralı: "Din Kültürü" varken "Din" ile eşleşmesin.
 */
const KNOWN_SUBJECTS = [
  ...new Set([...Object.values(SUBJECT_PRESETS).flat(), ...COMMON_SUBJECTS]),
]
  .filter((name) => name && name !== 'Diğer')
  .sort((a, b) => b.length - a.length)
  .map((name) => ({ name, folded: foldTr(name) }))

/** Tire ayracı — iki yanında boşluk olabilir de olmayabilir de. */
const DASH_SPLIT = /^(.{3,}?)\s*[-–—]\s*(.+)$/

/**
 * Ders adını kanonik yazımına çevirir: "türkçe" / "turkce" / "TÜRKÇE" → "Türkçe".
 *
 * Tanınmayan bir ad olduğu gibi bırakılır — "Türkç" gibi yazım hatalarını
 * düzeltmeye ÇALIŞMAYIZ; tahmin yürütmek yanlış birleştirmeye yol açar.
 */
function canonicalSubject(name) {
  const folded = foldTr(name)
  const match = KNOWN_SUBJECTS.find((s) => s.folded === folded)
  return match ? match.name : String(name).trim()
}

/**
 * Metnin başındaki ders adını bulur.
 * "matematik köklü ifadeler" → { subject: 'Matematik', rest: 'köklü ifadeler' }
 * Eşleşme yoksa null döner.
 *
 * Ders adının ardından KELİME SINIRI aranır; "Matematiksel" gibi bir kelime
 * yanlışlıkla "Matematik" diye bölünmesin.
 */
function matchSubjectPrefix(text) {
  const folded = foldTr(text)

  for (const subject of KNOWN_SUBJECTS) {
    if (!folded.startsWith(subject.folded)) continue

    const after = folded.slice(subject.folded.length)
    if (after === '') {
      // Metnin tamamı ders adı: "Geometri"
      return { subject: subject.name, rest: '' }
    }
    if (!after.startsWith(' ')) continue // "Matematiksel" — eşleşme sayılmaz

    // Orijinal metinden (şapkalı hâliyle) konuyu kes; uzunluklar birebir
    // örtüşür çünkü foldTr karakter sayısını değiştirmez.
    const rest = String(text).trim().slice(subject.folded.length).trim()
    return { subject: subject.name, rest }
  }

  return null
}

/**
 * "Matematik - Türev" / "Matematik-Türev" / "matematik türev"
 *   → { subject: 'Matematik', topic: 'Türev' }
 *
 * Hiçbir kalıba uymayan metinlerde ders ve konu aynı kalır — uydurma yapılmaz.
 */
export function splitSubjectTopic(topicStr) {
  const collapsed = String(topicStr ?? '').trim().replace(/\s+/g, ' ')
  if (!collapsed) return { subject: 'Genel', topic: 'Belirtilmemiş' }

  // 1) Açık ayırıcı her zaman önceliklidir — öğrencinin niyeti bellidir.
  //    Ders adı yine de kanonik yazıma çekilir; aksi halde "türkçe-deneme" ile
  //    "Türkçe - Paragraf" iki ayrı ders sayılıyordu.
  const dash = collapsed.match(DASH_SPLIT)
  if (dash) {
    return { subject: canonicalSubject(dash[1]), topic: dash[2].trim() }
  }

  // 2) Ayırıcı yoksa bilinen bir ders adıyla başlıyor mu?
  const prefix = matchSubjectPrefix(collapsed)
  if (prefix) {
    return {
      subject: prefix.subject,
      topic: prefix.rest || prefix.subject,
    }
  }

  // 3) Tanınmadı — olduğu gibi bırak.
  return { subject: collapsed, topic: collapsed }
}

/** Yalnızca ders adı gerektiğinde (dağılım grafikleri, gruplama). */
export function subjectOf(topicStr) {
  return splitSubjectTopic(topicStr).subject
}
