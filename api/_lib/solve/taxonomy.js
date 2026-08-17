/**
 * AI Soru Çözüm Merkezi — konu eşleştirme (§31).
 *
 * SORUN
 * -----
 * Model konu adını serbest metin olarak yazar ("türev alma", "Türev",
 * "Fonksiyonlarda Türev"). Bunu olduğu gibi kaydedersek performans
 * analizi bir sayfada "Türev", diğerinde "türev alma" görür ve öğrencinin
 * gerçek zayıf konusu üç ayrı satıra bölünür — yani analiz çöker.
 *
 * ÇÖZÜM
 * -----
 * Serbest metni, uygulamanın ZATEN SAHİP OLDUĞU müfredat ağacına
 * (`src/lib/curriculum/graph.js`) eşleriz. Eşleştiriciyi de yeniden
 * yazmayız: `resolveTopicNode()` bu iş için zaten var ve AI Koç ile
 * Günlük Takip aynı fonksiyonu kullanıyor. Böylece üç modül aynı konuyu
 * aynı ada bağlar.
 *
 * NEDEN ŞEMADA ENUM DEĞİL?
 * ------------------------
 * Faz 0 benchmark'ı konu adını enum yapmıştı (uydurmayı imkânsız kılmak
 * için). Üründe vazgeçildi: tüm ağaç (4 sınav × 9 ders × ~40 konu) her
 * isteğe girdi token'ı olarak binerdi. Uydurma riski burada karşılanıyor —
 * eşleşmeyen konu `matched: false` olarak işaretlenir ve performans
 * verisine KANONİK ad olarak girmez.
 *
 * `api/_lib/context.js` ve `api/_lib/tools.js` de `src/lib/curriculum`
 * altından import ediyor; bu dosya aynı yerleşik deseni izler.
 */

import { CURRICULUM_GRAPH, examTypesFor } from '../../../src/lib/curriculum/graph.js'
import { resolveTopicNode } from '../../../src/lib/curriculum/readiness.js'

/**
 * Modelin ürettiği ders/konu/alt konu üçlüsünü müfredat ağacına eşler.
 *
 * ALT KONU ÖNCE DENENİR. Model "Fonksiyonlar / Bileşke Fonksiyon" derse,
 * ağaçtaki asıl düğüm büyük ihtimalle "Bileşke Fonksiyon"dur; önce ana
 * konuya bakarsak daha kaba bir eşleşmede takılıp kalırız.
 *
 * @param {object} params
 * @param {string} params.subject     'Matematik' | 'Geometri' | ...
 * @param {string} params.topic
 * @param {string|null} params.subtopic
 * @param {string|null} params.examType  Öğrencinin hedef sınavı (profilden)
 *
 * @returns {{
 *   subject: string, topic: string, subtopic: string|null,
 *   matched: boolean, canonicalTopic: string|null, examType: string|null,
 *   weight: number|null
 * }}
 */
export function resolveTopic({ subject, topic, subtopic, examType }) {
  const cleanSubject = normalizeSubject(subject)
  const cleanTopic = typeof topic === 'string' ? topic.trim() : ''
  const cleanSubtopic = typeof subtopic === 'string' && subtopic.trim() ? subtopic.trim() : null

  const base = {
    subject: cleanSubject,
    topic: cleanTopic || null,
    subtopic: cleanSubtopic,
    matched: false,
    canonicalTopic: null,
    examType: null,
    weight: null,
  }

  if (!cleanTopic && !cleanSubtopic) return base

  // Öğrencinin hedef sınavı bilinmiyorsa tüm havuzlara bakılır; bilinen
  // sınav önce denenir çünkü aynı konu adı iki sınavda farklı derinlikte
  // olabilir (TYT Türev ≠ AYT Türev).
  const pools = examType ? examTypesFor(examType) : ['TYT', 'AYT', 'LGS', 'KPSS']

  for (const candidate of [cleanSubtopic, cleanTopic].filter(Boolean)) {
    const node = resolveTopicNode(cleanSubject, candidate, pools)
    if (node) {
      // ALAN ADLARI: `readiness.js` düğümü `graph.js`teki ham nesneden
      // FARKLI adlar kullanır — orada `name`/`w`, indekste `topic`/`weight`.
      // Yanlış alanı okumak sessizce `undefined` döndürür ve konu
      // eşleşmiş görünürken kanonik ad boş kalır.
      return {
        ...base,
        matched: true,
        canonicalTopic: node.topic,
        examType: node.examType,
        weight: node.weight ?? null,
      }
    }
  }

  return base
}

/**
 * Ders adını uygulamanın kullandığı yazıma çeker. Model "matematik" ya da
 * "MATEMATİK" yazabilir; müfredat ağacının anahtarları "Matematik".
 */
function normalizeSubject(subject) {
  const raw = typeof subject === 'string' ? subject.trim() : ''
  if (!raw) return 'Diğer'

  const lower = raw.toLocaleLowerCase('tr')
  for (const examType of Object.keys(CURRICULUM_GRAPH)) {
    for (const name of Object.keys(CURRICULUM_GRAPH[examType])) {
      if (name.toLocaleLowerCase('tr') === lower) return name
    }
  }

  // Ağaçta olmayan ama uygulamanın tanıdığı dersler (COMMON_SUBJECTS).
  const known = ['Matematik', 'Geometri', 'Fizik', 'Kimya', 'Biyoloji']
  const hit = known.find((n) => n.toLocaleLowerCase('tr') === lower)
  return hit ?? raw
}

/**
 * `daily_logs.topic` ile aynı biçimde tek satırlık konu etiketi üretir:
 * "Ders - Konu". Böylece çözülen sorular, Analiz sayfasındaki konu bazlı
 * tablolarla AYNI anahtarla eşleşir (README'deki "Ders - Konu" kuralı).
 */
export function topicLabel(resolved) {
  const topic = resolved?.canonicalTopic ?? resolved?.topic
  if (!topic) return resolved?.subject ?? 'Genel'
  return `${resolved.subject} - ${topic}`
}
