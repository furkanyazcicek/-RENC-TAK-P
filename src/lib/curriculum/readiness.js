/**
 * ÖĞRENME HAZIRLIK MOTORU (readiness engine)
 *
 * Bu modülün cevapladığı soru "öğrenci hangi konularda eksik?" DEĞİLDİR.
 * Cevapladığı soru şudur:
 *
 *     "Bu öğrenci, tam olarak şu anki seviyesinde, önündeki bu süre
 *      içerisinde, bir sonraki öğrenme adımı ne olmalı?"
 *
 * İki kavram burada kesin olarak AYRILIR:
 *   EKSİK KONU          → öğrencinin henüz öğrenmediği konu.
 *   ÖĞRENME ZAMANI GELEN → ön koşulları tamam olduğu için ŞU AN çalışılması
 *                          mantıklı olan konu.
 * "Bitki Biyolojisi eksik" doğru olabilir; "bu hafta Bitki Biyolojisi çalış"
 * aynı anda yanlış olabilir. Fark bu dosyada üretilir.
 *
 * SAF MODÜL: veritabanı, ağ ya da tarayıcı API'si kullanmaz. Hem istemcide
 * hem Vercel fonksiyonlarında (api/_lib/*) aynen çalışır. Bağımlılığı
 * yalnızca `graph.js` ve `../subjectSplit.js`'tir; iki import da uzantılı
 * yazıldığı için Node'un ESM çözümleyicisi de bulur.
 *
 * TEMEL İLKE — KÖRÜ KÖRÜNE MÜFREDAT SIRASI YOK
 * Grafik varsayılan yoldur, kural değil. Öğrencinin GERÇEK performansı
 * müfredat sırasını ezer:
 *   · Konuda kanıt varsa (soru çözmüş, süre ayırmış) ön koşullarına
 *     bakılmaksızın "öğrenilmiş" sayılır.
 *   · İleri bir konuda başarılıysa, ön koşulları da yeterli SAYILIR
 *     (bkz. `propagateImplied`) — öğrenci gereksiz yere başa döndürülmez.
 *   · Grafikte hiç olmayan bir konu ENGELLEYİCİ sayılmaz; bilinmiyor sayılır.
 */

import { foldTr, splitSubjectTopic } from '../subjectSplit.js'
import { CURRICULUM_GRAPH, examTypesFor } from './graph.js'

/* ==================================================================
   EŞİKLER — hepsi tek yerde, sihirli sayı dağıtılmıyor
   ================================================================== */

const RULES = {
  /** Anlamlı isabet ölçümü için gereken en az soru sayısı. */
  minSample: 10,
  /** Bunun altında "ölçüm" sayılmaz ama "hiç dokunmamış" da denmez. */
  smallSample: 3,
  /** Bir ön koşulun "yeterli" sayılması için gereken bilgi puanı. */
  prereqMet: 0.6,
  /** "Kısmen biliniyor" alt sınırı. */
  prereqPartial: 0.3,
  /** Bu puanın üstündeki konu artık çalışma önerisi olarak verilmez. */
  masteredAt: 0.85,
  /** Soru çözülmemiş ama bu kadar dakika ayrılmışsa "konuyu görmüş" sayılır. */
  studiedMinutes: 45,
}

const clamp01 = (n) => Math.max(0, Math.min(1, n))

/* ==================================================================
   AD EŞLEŞTİRME
   Öğrenci "fotosentez" yazar, müfredatta "Canlılarda Enerji Dönüşümleri
   (Fotosentez - Kemosentez)" yazar. İkisini aynı düğüme bağlamazsak motor
   öğrencinin çalıştığı her şeyi görmezden gelir.
   ================================================================== */

/** Birleşen aksan işaretleri (U+0300–U+036F): "â", "î" gibi şapkalı harfler. */
const COMBINING_MARKS = /[̀-ͯ]/g

/** Şapka/aksan temizler, küçültür, harf-rakam dışını boşluğa çevirir. */
function normName(value) {
  const deaccented = String(value ?? '')
    .normalize('NFD')
    .replace(COMBINING_MARKS, '')
  return foldTr(deaccented)
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Parantezli açıklamayı atar: "Özel Üçgenler (Dik, ...)" → "ozel ucgenler". */
function shortName(value) {
  const stripped = String(value ?? '').replace(/\([^)]*\)/g, ' ')
  const short = normName(stripped)
  return short || normName(value)
}

/* ==================================================================
   GRAFİK İNDEKSİ — bir kez kurulur, sonra yeniden kullanılır
   ================================================================== */

/**
 * 'Konu' | 'Ders > Konu' | 'SINAV > Ders > Konu' biçimlerini çözer.
 * Bağlam (hangi sınav türü / hangi ders içinde yazıldığı) eksik parçaları
 * doldurur.
 */
function parseRef(ref, ctxExamType, ctxSubject) {
  const parts = String(ref)
    .split('>')
    .map((p) => p.trim())
    .filter(Boolean)

  if (parts.length >= 3) return { examType: parts[0], subject: parts[1], topic: parts[2] }
  if (parts.length === 2) return { examType: ctxExamType, subject: parts[0], topic: parts[1] }
  return { examType: ctxExamType, subject: ctxSubject, topic: parts[0] ?? '' }
}

const idOf = (examType, subject, topic) => `${examType}|${subject}|${topic}`

let INDEX = null

function buildIndex() {
  if (INDEX) return INDEX

  /** @type {Map<string, object>} */
  const byId = new Map()
  const all = []

  Object.entries(CURRICULUM_GRAPH).forEach(([examType, subjects]) => {
    Object.entries(subjects).forEach(([subject, topics]) => {
      topics.forEach((node, order) => {
        const entry = {
          id: idOf(examType, subject, node.name),
          examType,
          subject,
          subjectKey: normName(subject),
          topic: node.name,
          nameKey: normName(node.name),
          shortKey: shortName(node.name),
          aliasKeys: (node.alias ?? []).map(normName).filter(Boolean),
          order,
          weight: node.w,
          hours: node.h,
          difficulty: node.d,
          repeat: node.rep,
          rawPre: node.pre ?? [],
          prereqIds: [],
          dependentIds: [],
        }
        byId.set(entry.id, entry)
        all.push(entry)
      })
    })
  })

  /* ---- Kenarları bağla ---- */
  all.forEach((entry) => {
    entry.rawPre.forEach((ref) => {
      const { examType, subject, topic } = parseRef(ref, entry.examType, entry.subject)
      const targetId = idOf(examType, subject, topic)
      const target = byId.get(targetId)
      // Yazım hatası olan bir ön koşul SESSİZCE düşürülmez; düşürülseydi
      // grafik yanlış biçimde "ön koşulsuz" görünürdü. Ama bulunamayan
      // referans da öğrenciyi engellememeli — bu yüzden atlanır ve
      // `unresolvedPrereqs` altında kayıt bırakılır (testler bunu okur).
      if (!target) {
        ;(entry.unresolvedPrereqs ??= []).push(ref)
        return
      }
      entry.prereqIds.push(targetId)
      target.dependentIds.push(entry.id)
    })
  })

  /* ---- Derinlik (en uzun ön koşul zinciri) ve açtığı konu sayısı ---- */
  const depthMemo = new Map()
  const depthOf = (id, seen = new Set()) => {
    if (depthMemo.has(id)) return depthMemo.get(id)
    if (seen.has(id)) return 0 // döngü koruması
    seen.add(id)
    const node = byId.get(id)
    const value = node.prereqIds.length
      ? 1 + Math.max(...node.prereqIds.map((p) => depthOf(p, seen)))
      : 0
    depthMemo.set(id, value)
    return value
  }

  const unlockMemo = new Map()
  const unlocksOf = (id, seen = new Set()) => {
    if (unlockMemo.has(id)) return unlockMemo.get(id)
    if (seen.has(id)) return new Set()
    seen.add(id)
    const out = new Set()
    byId.get(id).dependentIds.forEach((dep) => {
      out.add(dep)
      unlocksOf(dep, seen).forEach((d) => out.add(d))
    })
    unlockMemo.set(id, out)
    return out
  }

  all.forEach((entry) => {
    entry.depth = depthOf(entry.id)
    entry.unlockCount = unlocksOf(entry.id).size
  })

  /* ---- Arama tabloları ---- */
  const byKey = new Map() // `${subjectKey}|${nameKey}` → id[]
  const byGlobal = new Map() // nameKey → id[] (ders adı tanınmadığında)

  const push = (map, key, id) => {
    if (!key) return
    const list = map.get(key)
    if (list) {
      if (!list.includes(id)) list.push(id)
    } else {
      map.set(key, [id])
    }
  }

  all.forEach((entry) => {
    const keys = new Set([entry.nameKey, entry.shortKey, ...entry.aliasKeys])
    keys.forEach((k) => {
      push(byKey, `${entry.subjectKey}|${k}`, entry.id)
      push(byGlobal, k, entry.id)
    })
  })

  INDEX = { byId, all, byKey, byGlobal }
  return INDEX
}

/**
 * Serbest metinden ("Biyoloji", "fotosentez") müfredat düğümlerini bulur.
 *
 * Sıra: birebir ad → kısa ad/takma ad → içerme (yalnızca tek aday varsa).
 * İçerme en sonda ve en dar koşullarla denenir; "Enerji" gibi bir kelime
 * yarım düzine konuya benzediği için yanlış eşleşme üretebilir.
 *
 * @returns {object[]} eşleşen düğümler (examTypes sırasına göre)
 */
function findNodes(subject, topic, examTypes) {
  const idx = buildIndex()
  const allowed = new Set(examTypes)
  const subjectKey = normName(subject)
  const topicKey = normName(topic)
  const topicShort = shortName(topic)
  if (!topicKey) return []

  const collect = (ids) =>
    (ids ?? [])
      .map((id) => idx.byId.get(id))
      .filter((n) => n && allowed.has(n.examType))
      .sort((a, b) => examTypes.indexOf(a.examType) - examTypes.indexOf(b.examType))

  for (const key of [topicKey, topicShort]) {
    const exact = collect(idx.byKey.get(`${subjectKey}|${key}`))
    if (exact.length) return exact
  }

  // Ders adı tanınmadı (öğrenci "Genel - Fotosentez" yazmış olabilir).
  for (const key of [topicKey, topicShort]) {
    const global = collect(idx.byGlobal.get(key))
    if (global.length) return global
  }

  // Son çare: aynı dersin içinde ad içerme. En az 5 karakter ve TEK aday.
  if (topicKey.length >= 5) {
    const candidates = idx.all.filter(
      (n) =>
        allowed.has(n.examType) &&
        n.subjectKey === subjectKey &&
        (n.nameKey.includes(topicKey) || topicKey.includes(n.nameKey))
    )
    if (candidates.length === 1) return candidates
  }

  return []
}

/** Dışarıya açık ince sarmalayıcı — tek düğüm ister. */
export function resolveTopicNode(subject, topic, examTypes) {
  return findNodes(subject, topic, examTypes)[0] ?? null
}

/* ==================================================================
   ÖĞRENCİ KANITI (evidence)
   ================================================================== */

/**
 * Günlük kayıtları "ders + konu" bazında toplar.
 * `daily_logs.topic` serbest metindir; ayrıştırma tek kaynaktan
 * (`splitSubjectTopic`) gelir ki grafiklerle AI aynı şeyi görsün.
 */
export function buildTopicEvidence(logs) {
  const map = new Map()

  ;(logs ?? []).forEach((log) => {
    const { subject, topic } = splitSubjectTopic(log.topic)
    const key = `${normName(subject)}|${normName(topic)}`
    let row = map.get(key)
    if (!row) {
      row = {
        subject,
        topic,
        correct: 0,
        incorrect: 0,
        empty: 0,
        minutes: 0,
        sessions: 0,
        lastDate: null,
      }
      map.set(key, row)
    }
    row.correct += log.correct || 0
    row.incorrect += log.incorrect || 0
    row.empty += log.empty || 0
    row.minutes += log.duration_minutes || 0
    row.sessions += 1
    if (!row.lastDate || (log.study_date && log.study_date > row.lastDate)) {
      row.lastDate = log.study_date ?? row.lastDate
    }
  })

  return [...map.values()].map((row) => {
    const attempted = row.correct + row.incorrect
    return {
      ...row,
      attempted,
      accuracy: attempted > 0 ? Math.round((row.correct / attempted) * 100) : null,
    }
  })
}

/**
 * Kanıttan 0-1 arası "bu konuyu ne kadar biliyor" puanı.
 *
 * Az örneklemde isabet oranına tam güvenilmez (3 soruda 3 doğru "hakimiyet"
 * değildir), bu yüzden indirim uygulanır. Hiç soru çözülmemişse ayrılan
 * süre kısmi kanıt sayılır — konuyu görmüş olmak, hiç görmemekten farklıdır.
 */
function knownScore(ev) {
  if (!ev) return 0
  if (ev.attempted >= RULES.minSample) return clamp01(ev.correct / ev.attempted)
  if (ev.attempted >= RULES.smallSample) return clamp01((ev.correct / ev.attempted) * 0.85)
  if (ev.minutes >= RULES.studiedMinutes) return 0.5
  if (ev.minutes > 0 || ev.sessions > 0) return 0.3
  return 0
}

/* ==================================================================
   DURUM KURULUMU
   ================================================================== */

const LEVEL_LABELS = {
  0: 'ön koşullar bilinmiyor',
  1: 'ön koşullar kısmen biliniyor',
  2: 'öğrenmeye hazır',
  3: 'öğrenilmiş, performans düşük',
  4: 'öğrenilmiş, performans yeterli',
  5: 'hakimiyet yüksek',
}

/**
 * İleri bir konuda başarılı olan öğrencinin ön koşulları da yeterli SAYILIR.
 *
 * Spesifikasyon §17: "Öğrenci TYT matematik temel konularında %95 başarı
 * gösteriyorsa sırf müfredat sırasındaki önceki konular tamamlanmadı diye
 * onu başlangıç konularına döndürme." Kayıt tutmamak bilmemek değildir.
 */
function propagateImplied(states, index) {
  const queue = []
  states.forEach((s) => {
    if (s.rawScore >= RULES.prereqMet) queue.push(s.id)
  })

  const seen = new Set(queue)
  while (queue.length) {
    const id = queue.shift()
    const node = index.byId.get(id)
    node.prereqIds.forEach((pid) => {
      const parent = states.get(pid)
      if (!parent) return
      if (parent.score < RULES.prereqMet) {
        parent.score = RULES.prereqMet
        parent.implied = true
      }
      if (!seen.has(pid)) {
        seen.add(pid)
        queue.push(pid)
      }
    })
  }
}

/**
 * Öğrencinin tüm müfredat durumunu çıkarır.
 *
 * @param {object}   params
 * @param {object[]} params.logs      `daily_logs` satırları
 * @param {string}   params.examType  hedef sınav ('TYT' | 'AYT' | 'LGS' | 'KPSS')
 * @param {string?}  params.examDate  sınav tarihi 'YYYY-AA-GG' (bilinmiyorsa null)
 * @param {Date}     params.now       test edilebilirlik için
 */
export function buildLearningState({ logs, examType, examDate = null, now = new Date() }) {
  const index = buildIndex()
  const examTypes = examTypesFor(examType)
  const allowed = new Set(examTypes)

  /* ---- 1) Kanıtı düğümlere bağla ---- */
  const evidence = buildTopicEvidence(logs)
  const evidenceByNode = new Map()
  const offGraph = []

  evidence.forEach((ev) => {
    const matches = findNodes(ev.subject, ev.topic, examTypes)
    if (!matches.length) {
      offGraph.push(ev)
      return
    }
    // Aynı ad birden fazla sınav türünde varsa (örn. TYT ve AYT Fizik'te
    // "İş, Güç ve Enerji") kanıt YALNIZCA temel seviyeye yazılır. Aksi
    // halde TYT'de çözülen soru AYT konusunu da "öğrenilmiş" gösterip
    // öğrencinin önünü yanlışlıkla açardı.
    const target = matches[0]
    const current = evidenceByNode.get(target.id)
    evidenceByNode.set(target.id, current ? mergeEvidence(current, ev) : ev)
  })

  /* ---- 2) Ham puanlar ---- */
  const states = new Map()
  index.all.forEach((node) => {
    if (!allowed.has(node.examType)) return
    const ev = evidenceByNode.get(node.id) ?? null
    const rawScore = knownScore(ev)
    states.set(node.id, {
      id: node.id,
      evidence: ev,
      rawScore,
      score: rawScore,
      implied: false,
    })
  })

  /* ---- 3) İleri başarıdan geriye çıkarım ---- */
  propagateImplied(states, index)

  /* ---- 4) Seviye ve öncelik ---- */
  const daysLeft = daysUntil(examDate, now)

  // Ders bazlı kapsama — temel konularda geride olan derse öncelik vermek
  // için gerekir (spesifikasyon §2H).
  const subjectTotals = new Map()
  states.forEach((state, id) => {
    const node = index.byId.get(id)
    const key = `${node.examType}|${node.subject}`
    const row = subjectTotals.get(key) ?? { total: 0, known: 0 }
    row.total += 1
    if (state.score >= RULES.prereqMet) row.known += 1
    subjectTotals.set(key, row)
  })

  const lowCoverage = new Set()
  subjectTotals.forEach((row, key) => {
    if (row.total >= 4 && row.known / row.total < 0.25) lowCoverage.add(key)
  })

  const topics = []
  states.forEach((state, id) => {
    const node = index.byId.get(id)
    const prereqStates = node.prereqIds
      .map((pid) => ({ id: pid, state: states.get(pid), node: index.byId.get(pid) }))
      .filter((p) => p.state)

    const level = levelOf(node, state, prereqStates)
    const missing = prereqStates
      .filter((p) => p.state.score < RULES.prereqMet)
      .map((p) => ({
        subject: p.node.subject,
        topic: p.node.topic,
        examType: p.node.examType,
        score: round2(p.state.score),
      }))

    const priority = learningValue({
      node,
      state,
      level,
      daysLeft,
      foundation: lowCoverage.has(`${node.examType}|${node.subject}`) && node.depth <= 1,
      focusFactor: focusFactorFor(examType, node.examType),
    })

    topics.push({
      id,
      examType: node.examType,
      subject: node.subject,
      topic: node.topic,
      order: node.order,
      depth: node.depth,
      unlocks: node.unlockCount,
      weight: node.weight,
      hours: node.hours,
      difficulty: node.difficulty,
      repeat: node.repeat,
      level,
      levelLabel: LEVEL_LABELS[level],
      score: round2(state.score),
      implied: state.implied,
      attempted: state.evidence?.attempted ?? 0,
      accuracy: state.evidence?.accuracy ?? null,
      minutes: state.evidence?.minutes ?? 0,
      lastDate: state.evidence?.lastDate ?? null,
      missingPrereqs: missing,
      prereqs: prereqStates.map((p) => ({
        subject: p.node.subject,
        topic: p.node.topic,
        examType: p.node.examType,
        met: p.state.score >= RULES.prereqMet,
        score: round2(p.state.score),
      })),
      priority,
      reason: reasonFor({ node, level, state, daysLeft }),
    })
  })

  const byPriority = (a, b) => b.priority - a.priority || a.depth - b.depth || a.order - b.order

  /** Çalışılabilir: ön koşulu tamam VE hâlâ boşluk var. */
  const ready = topics
    .filter((x) => x.level >= 2 && x.priority > 0 && !x.implied)
    .sort(byPriority)

  /** Eksik ama HENÜZ ERKEN: ön koşulu tamamlanmamış. */
  const blocked = topics
    .filter((x) => x.level <= 1 && x.missingPrereqs.length)
    .sort((a, b) => b.weight - a.weight || a.depth - b.depth)

  /** Öğrenilmiş ama zayıf — tekrar/soru çözümü gerektirenler. */
  const review = topics.filter((x) => x.level === 3).sort(byPriority)

  /* ---- 5) Ders bazlı kapsama tablosu ---- */
  const subjects = [...subjectTotals.entries()]
    .map(([key, row]) => {
      const [type, subject] = key.split('|')
      return {
        examType: type,
        subject,
        total: row.total,
        known: row.known,
        coveragePct: Math.round((row.known / row.total) * 100),
        readyCount: ready.filter((x) => x.examType === type && x.subject === subject).length,
        blockedCount: blocked.filter((x) => x.examType === type && x.subject === subject).length,
      }
    })
    .sort((a, b) => a.coveragePct - b.coveragePct)

  /* ---- 6) "Nereden başlamalı" — her ders için tek bir ilk adım ---- */
  const startHere = []
  subjects.forEach((s) => {
    const first = ready.find((x) => x.examType === s.examType && x.subject === s.subject)
    if (first) startHere.push(first)
  })

  return {
    examType: examType ?? null,
    examTypes,
    examDate: examDate ?? null,
    daysLeft,
    topics,
    ready,
    blocked,
    review,
    subjects,
    startHere: startHere.sort(byPriority),
    offGraph,
    /** Grafiğin tanıdığı toplam konu sayısı — "kapsam" cümleleri için. */
    totalTopics: topics.length,
    knownTopics: topics.filter((x) => x.score >= RULES.prereqMet).length,
  }
}

function mergeEvidence(a, b) {
  const correct = a.correct + b.correct
  const incorrect = a.incorrect + b.incorrect
  const attempted = correct + incorrect
  return {
    subject: a.subject,
    topic: a.topic,
    correct,
    incorrect,
    empty: a.empty + b.empty,
    minutes: a.minutes + b.minutes,
    sessions: a.sessions + b.sessions,
    lastDate: [a.lastDate, b.lastDate].filter(Boolean).sort().pop() ?? null,
    attempted,
    accuracy: attempted > 0 ? Math.round((correct / attempted) * 100) : null,
  }
}

/**
 * Hazırlık seviyesi (spesifikasyon §9).
 *
 * KRİTİK: Kendi kanıtı ön koşul durumundan ÖNCE gelir. Öğrenci konuyu
 * çalışmışsa, ön koşullarında kayıt olmasa bile "öğrenilmiş" sayılır.
 */
function levelOf(node, state, prereqStates) {
  const ev = state.evidence
  const hasEvidence = Boolean(ev && (ev.attempted > 0 || ev.minutes > 0))

  if (hasEvidence) {
    if (ev.attempted >= RULES.minSample && state.rawScore >= RULES.masteredAt) return 5
    if (state.rawScore >= RULES.prereqMet) return 4
    return 3
  }

  // Kanıt yok ama ileri konudaki başarıdan çıkarım yapıldıysa yeterli say.
  if (state.implied) return 4

  if (!prereqStates.length) return 2

  const met = prereqStates.filter((p) => p.state.score >= RULES.prereqMet).length
  if (met === prereqStates.length) return 2

  const partial = prereqStates.filter((p) => p.state.score >= RULES.prereqPartial).length
  return met > 0 || partial > 0 ? 1 : 0
}

/**
 * ÖĞRENME GETİRİSİ (spesifikasyon §11)
 *
 *   sınav ağırlığı × mevcut açık × sonraki konulara katkı × hazır olma
 *   ────────────────────────────────────────────────────────────────
 *                        gerekli zaman
 *
 * Formül tek başına "doğru" olmak zorunda değil; amacı sıralamayı
 * savunulabilir kılmak: aynı ağırlıktaki iki konudan çok sayıda konunun
 * kapısını açan ve öğrencinin hazır olduğu öne geçer.
 */
/**
 * Öğrencinin beyan ettiği sınav ile konunun ait olduğu havuzun uyumu.
 *
 * YKS'de TYT ve AYT tek bir hazırlık sürecidir, bu yüzden ikisi de havuzda
 * durur. Ama öğrenci "TYT" dediyse ona 2. sırada AYT Edebiyat önermek
 * yanlıştır — AYT konuları görünür kalır, sadece önceliği düşer. Tersi
 * simetrik değildir: AYT hedefleyen öğrenci TYT'ye de girer ve AYT
 * konularının ön koşulu zaten TYT'dir; oradaki indirim çok daha hafiftir.
 */
function focusFactorFor(declaredExam, nodeExam) {
  if (!declaredExam || declaredExam === nodeExam) return 1
  if (declaredExam === 'TYT' && nodeExam === 'AYT') return 0.55
  if (declaredExam === 'AYT' && nodeExam === 'TYT') return 0.85
  return 1
}

function learningValue({ node, state, level, daysLeft, foundation, focusFactor = 1 }) {
  const gap = 1 - state.score
  // Neredeyse hakim olduğu konuyu çalışma önerisi olarak vermeyiz.
  if (gap <= 1 - RULES.masteredAt) return 0

  const weight = node.weight / 5
  // Logaritmik ölçek bilinçli: 37 konunun kapısını açan "Sayı Basamakları"
  // ile 8 konununkini açan "Nüfus" arasındaki farkı korur, ama doğrusal
  // bir çarpanın yapacağı gibi sınav ağırlığını ezmez. Düz kırpma (min 8)
  // denendi ve büyük merkez konuları küçüklerle AYNI puana düşürüyordu.
  const unlockFactor = 1 + 0.35 * Math.log2(1 + node.unlockCount)
  const readinessFactor = level >= 2 ? 1 : level === 1 ? 0.35 : 0.08
  const foundationFactor = foundation ? 1.25 : 1

  let costFactor = 0.6 + node.hours / 10
  let urgencyFactor = 1

  if (daysLeft != null) {
    if (daysLeft <= 60) {
      // Az zaman kaldıysa ağırlık belirleyici olur ve uzun konular pahalılaşır.
      urgencyFactor = 0.6 + weight * 0.8
      costFactor *= 1 + node.hours / 20
    } else if (daysLeft <= 150) {
      urgencyFactor = 0.85 + weight * 0.3
    }
  }

  const value =
    (weight * gap * unlockFactor * readinessFactor * foundationFactor * urgencyFactor * focusFactor) /
    costFactor

  return Math.round(value * 1000) / 1000
}

/** Modelin ve arayüzün "neden şimdi" sorusunu cevaplayabilmesi için. */
function reasonFor({ node, level, state, daysLeft }) {
  const bits = []

  if (level === 3) {
    const ev = state.evidence
    bits.push(
      ev?.accuracy != null
        ? `çalışılmış ama isabet %${ev.accuracy} (${ev.attempted} soruda)`
        : 'çalışılmış ama ölçülebilir soru performansı yok'
    )
  } else if (level === 2) {
    bits.push(node.prereqIds.length ? 'ön koşulları tamam' : 'ön koşulu yok')
    bits.push('henüz çalışılmamış')
  } else if (level <= 1) {
    bits.push('ön koşulları eksik')
  }

  if (node.unlockCount >= 2) bits.push(`${node.unlockCount} sonraki konunun temeli`)
  if (node.weight >= 5) bits.push('sınav ağırlığı yüksek')
  if (state.implied) bits.push('sonraki konudaki başarıdan yeterli sayıldı')
  if (daysLeft != null && daysLeft <= 60 && node.hours >= 8) {
    bits.push(`uzun konu (~${node.hours} sa), kalan süre kısa`)
  }

  return bits.join(', ')
}

function round2(n) {
  return Math.round(n * 100) / 100
}

/** 'YYYY-AA-GG' → bugüne kaç gün kaldığı. Geçersiz/boşsa null. */
export function daysUntil(dateStr, now = new Date()) {
  if (typeof dateStr !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return null
  const target = new Date(`${dateStr}T00:00:00`)
  if (Number.isNaN(target.getTime())) return null
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diff = Math.round((target - today) / 86400000)
  return diff >= 0 ? diff : null
}

/* ==================================================================
   ÖN KOŞUL SORGUSU
   "Bu hafta fotosentez çalışmak istiyorum" dendiğinde çalışır.
   ================================================================== */

/**
 * Tek bir konunun çalışılmaya hazır olup olmadığını söyler ve hazır
 * değilse ÖNCE hangi konuların geldiğini sıralı olarak verir.
 */
export function checkPrerequisites(state, subject, topic) {
  const node = resolveTopicNode(subject, topic, state.examTypes)
  if (!node) {
    return {
      found: false,
      subject,
      topic,
      note: 'Bu konu müfredat bağımlılık grafiğinde bulunamadı; ön koşul kontrolü yapılamıyor. Konu adını müfredattaki hâliyle dene ya da ön koşulsuz kabul et.',
    }
  }

  const entry = state.topics.find((x) => x.id === node.id)
  if (!entry) {
    return { found: false, subject: node.subject, topic: node.topic, note: 'Bu konu öğrencinin hedef sınavının müfredatında değil.' }
  }

  // Eksik ön koşulların kendi ön koşulları da eksik olabilir; öğrenciye
  // "önce şunu çalış" derken doğru sırayı vermek için zinciri açıyoruz.
  const chain = missingChain(state, entry)

  return {
    found: true,
    subject: entry.subject,
    topic: entry.topic,
    exam_type: entry.examType,
    readiness_level: entry.level,
    readiness_label: entry.levelLabel,
    verdict: entry.level >= 2 ? 'hazır' : entry.level === 1 ? 'erken' : 'çok erken',
    exam_weight: entry.weight,
    est_hours: entry.hours,
    unlocks: entry.unlocks,
    prerequisites: entry.prereqs,
    missing: entry.missingPrereqs,
    suggested_order: chain.map((c) => ({
      subject: c.subject,
      topic: c.topic,
      level: c.level,
      est_hours: c.hours,
    })),
    reason: entry.reason,
  }
}

/**
 * Hedef konuya giden, eksik olan ön koşulları öğrenme sırasına dizer.
 * Dönen listenin sonu hedef konunun kendisidir.
 */
function missingChain(state, entry) {
  const byId = new Map(state.topics.map((x) => [x.id, x]))
  const index = buildIndex()
  const out = []
  const seen = new Set()

  const walk = (id) => {
    if (seen.has(id)) return
    seen.add(id)
    const node = index.byId.get(id)
    const item = byId.get(id)
    if (!node || !item) return
    node.prereqIds.forEach((pid) => {
      const parent = byId.get(pid)
      if (parent && parent.score < RULES.prereqMet) walk(pid)
    })
    out.push(item)
  }

  walk(entry.id)
  return out
}

/* ==================================================================
   PLAN SIRALAMA
   ================================================================== */

/**
 * Haftalık planın KENDİ İÇİNDE de öğrenme sırasını koruması gerekir
 * (spesifikasyon §7): "Pazartesi Bitki Biyolojisi, Salı Hücre" olmaz.
 *
 * Yaklaşım: planın tarih ve süre iskeletine DOKUNULMAZ. Yalnızca maddeler
 * bağımlılık sırasına göre dizilir ve mevcut tarihler bu sıraya yeniden
 * dağıtılır. Böylece "5 gün, günde 2 madde" yapısı bozulmadan sıra düzelir.
 *
 * @returns {{items: object[], swaps: object[], warnings: object[]}}
 */
export function orderPlanItems(items, state) {
  const list = (items ?? []).map((item, i) => ({
    ...item,
    _i: i,
    _node: resolveTopicNode(item.subject, item.topic, state.examTypes),
  }))

  if (list.length < 2) {
    return { items: items ?? [], swaps: [], warnings: prereqWarnings(list, state) }
  }

  const index = buildIndex()
  const idToPositions = new Map()
  list.forEach((item, pos) => {
    if (!item._node) return
    const arr = idToPositions.get(item._node.id) ?? []
    arr.push(pos)
    idToPositions.set(item._node.id, arr)
  })

  /* ---- Plan içi bağımlılık kenarları ---- */
  const edges = new Map() // pos → Set(pos) : "önce bunlar gelmeli"
  list.forEach((item, pos) => {
    edges.set(pos, new Set())
  })

  list.forEach((item, pos) => {
    if (!item._node) return
    ancestorsOf(item._node.id, index).forEach((ancestorId) => {
      ;(idToPositions.get(ancestorId) ?? []).forEach((p) => {
        if (p !== pos) edges.get(pos).add(p)
      })
    })
  })

  /* ---- Kahn topolojik sıralama; eşitlikte özgün sıra korunur ---- */
  const remaining = new Set(list.map((_, i) => i))
  const ordered = []
  let guard = 0
  while (remaining.size && guard++ < list.length + 2) {
    const layer = [...remaining].filter((pos) => [...edges.get(pos)].every((p) => !remaining.has(p)))
    if (!layer.length) break // döngü — dokunmadan bırak
    layer.sort((a, b) => a - b).forEach((pos) => {
      ordered.push(pos)
      remaining.delete(pos)
    })
  }
  // Döngü nedeniyle kalan varsa özgün sırayla ekle.
  ;[...remaining].sort((a, b) => a - b).forEach((pos) => ordered.push(pos))

  /* ---- Tarihleri sıraya yeniden dağıt ---- */
  const dateSlots = list.map((x) => x.planned_date).sort()
  const swaps = []
  const result = ordered.map((pos, slot) => {
    const item = list[pos]
    const nextDate = dateSlots[slot]
    if (nextDate !== item.planned_date) {
      swaps.push({
        subject: item.subject,
        topic: item.topic ?? null,
        from: item.planned_date,
        to: nextDate,
      })
    }
    const { _i, _node, ...clean } = item
    return { ...clean, planned_date: nextDate }
  })

  return { items: result, swaps, warnings: prereqWarnings(list, state) }
}

/** Bir düğümün tüm (geçişli) ön koşulları. */
function ancestorsOf(id, index) {
  const out = new Set()
  const stack = [...(index.byId.get(id)?.prereqIds ?? [])]
  while (stack.length) {
    const cur = stack.pop()
    if (out.has(cur)) continue
    out.add(cur)
    ;(index.byId.get(cur)?.prereqIds ?? []).forEach((p) => stack.push(p))
  }
  return out
}

/**
 * Plandaki maddelerden ön koşulu eksik olanları raporlar.
 * Ön koşul planın KENDİSİNDE varsa uyarı verilmez — öğrenci zaten o hafta
 * öğrenecek demektir.
 */
function prereqWarnings(list, state) {
  const inPlan = new Set(list.map((x) => x._node?.id).filter(Boolean))
  const byId = new Map(state.topics.map((x) => [x.id, x]))
  const warnings = []

  list.forEach((item) => {
    if (!item._node) return
    const entry = byId.get(item._node.id)
    if (!entry || entry.level >= 2) return

    const missing = entry.missingPrereqs.filter((m) => {
      const node = resolveTopicNode(m.subject, m.topic, state.examTypes)
      return !node || !inPlan.has(node.id)
    })
    if (!missing.length) return

    warnings.push({
      subject: entry.subject,
      topic: entry.topic,
      readiness_level: entry.level,
      missing_prereqs: missing.map((m) => `${m.subject} – ${m.topic}`),
    })
  })

  return warnings
}
