/**
 * Dr. Koç — TAHTA DERLEYİCİSİ (§7).
 *
 * NE YAPAR
 * --------
 * Modelin ürettiği SEMANTİK çözümü (adım = başlık + anlatım + matematik +
 * gerekçe + şekil) tahtanın anladığı ACTION dizisine çevirir.
 *
 * NEDEN MODELDEN DOĞRUDAN ACTION İSTEMİYORUZ
 * ------------------------------------------
 * Üç sebep:
 *
 *   1. GÜVENLİK. Model action üretirse, ürettiği her action türünü ve
 *      alanını doğrulamak zorundayız — ve bir gün yeni bir alan eklendiğinde
 *      doğrulamayı güncellemeyi unuturuz. Semantikten action'a çeviriyi KOD
 *      yaparsa, modelin ürettiği hiçbir şey doğrudan render'a ulaşmaz.
 *
 *   2. TUTARLILIK. "Sonuç adımı kutu içine alınır" kararı ürün kararıdır,
 *      modelin o anki keyfi değil. Kodda olunca her soruda aynı görünür.
 *
 *   3. MALİYET. Action'lar semantikten türetilebiliyorsa, modele onları
 *      ürettirmek boşuna çıktı token'ı ödemektir (§26).
 *
 * Bu, `scripts/bench/schema.mjs` içinde Faz 0'da alınmış kararın devamı:
 * "Model NE olduğunu söyler; nasıl gösterileceğine DrKoç kodu karar verir."
 *
 * SAF FONKSİYON: React, DOM veya ağ bilmez. Hem sunucuda (çözüm
 * üretilirken) hem istemcide (kayıtlı oturum açılırken) çalışır.
 */

import { LIMITS, sanitizeActions, sanitizeFigure } from './actions.js'

export const BOARD_VERSION = 1

/** Şekil türünden action türüne eşleme — tek yer. */
const FIGURE_ACTION = {
  grafik: 'graph',
  tablo: 'table',
  akis: 'flow',
  sayi_dogrusu: 'numberline',
}

/**
 * Semantik çözümü tahta yapısına derler.
 *
 * @param {object} solution  buildSolutionSchema() çıktısı (model yanıtı)
 * @returns {object} tahta nesnesi — `ai_solution_sessions.board` alanına yazılır
 */
export function compileBoard(solution) {
  const rawSteps = Array.isArray(solution?.solution?.steps) ? solution.solution.steps : []
  const answer = normalizeAnswer(solution?.solution?.answer)

  const steps = []

  for (const raw of rawSteps.slice(0, LIMITS.maxSteps)) {
    const step = compileStep(raw, steps.length + 1)
    if (step) steps.push(step)
  }

  // ---- Sonuç adımı ----
  // Model çözümü "x = 6" ile bitirmiş olabilir ama bunu bir SONUÇ olarak
  // işaretlememiş olabilir. Cevabı tahtada vurgulu bir kutuyla kapatmak
  // sunum kararıdır ve burada verilir. Zaten sonuç adımıyla bittiyse
  // tekrar etmeyiz — aynı ifadeyi iki kez yazmak öğrenciyi şaşırtır.
  const lastStep = steps[steps.length - 1]
  const alreadyConcluded =
    lastStep?.kind === 'sonuc' && sameMath(lastStep.actions, answer.latex)

  if (answer.latex && !alreadyConcluded && steps.length < LIMITS.maxSteps) {
    steps.push({
      n: steps.length + 1,
      kind: 'sonuc',
      title: 'Sonuç',
      narration: answer.unit
        ? `Cevabımız ${answer.plain} ${answer.unit}.`
        : `Cevabımız ${answer.plain}.`,
      why: null,
      isKey: true,
      actions: sanitizeActions([
        { type: 'box', target: answer.latex, format: 'latex', tone: 'success' },
      ]),
    })
  }

  // ---- Kontrol adımı (§34 madde 8) ----
  // Modelin kendi beyan ettiği kontrol cümlesi. UYDURMA DEĞİL: yalnızca
  // model gerçekten yazdıysa eklenir. Doğrulamanın geçip geçmediği ayrı
  // bir bilgidir ve tahtada değil, çözüm kartında gösterilir.
  const selfCheck = trimmed(solution?.verification?.self_check)
  if (selfCheck && steps.length < LIMITS.maxSteps && lastStep?.kind !== 'kontrol') {
    steps.push({
      n: steps.length + 1,
      kind: 'kontrol',
      title: 'Kontrol edelim',
      narration: selfCheck.slice(0, LIMITS.maxNarrationChars),
      why: null,
      isKey: false,
      actions: [],
    })
  }

  return {
    v: BOARD_VERSION,
    steps,
    answer,
  }
}

/* ------------------------------------------------------------------ */

function compileStep(raw, fallbackIndex) {
  const title = trimmed(raw?.title)
  const narration = trimmed(raw?.narration)
  const math = trimmed(raw?.math)
  const figure = raw?.figure ? sanitizeFigure(raw.figure) : null

  // Ne anlatımı ne matematiği ne de şekli olan adım, boş bir tahta karesi
  // demektir; öğrenciye "İleri" bastırıp hiçbir şey göstermemek kötü.
  if (!narration && !math && !figure) return null

  const kind = normalizeKind(raw?.kind)
  const actions = []

  if (math) {
    // Adımın türü, matematiğin nasıl vurgulanacağını belirler:
    //   sonuc   → kutu (cevap)
    //   kontrol → altı çizili (doğrulama)
    //   diğer   → düz yazım + isteğe bağlı vurgu
    if (kind === 'sonuc') {
      actions.push({ type: 'box', target: math, format: 'latex', tone: 'success' })
    } else if (kind === 'kontrol') {
      actions.push({ type: 'underline', target: math, format: 'latex', tone: 'info' })
    } else {
      actions.push({ type: 'write', content: math, format: 'latex', emphasis: trimmed(raw?.emphasis) })
    }
  }

  // Kavram adımı: formül/teorem hatırlatması. Matematiği yoksa metin olarak
  // gösterilir ki adım boş kalmasın.
  if (kind === 'kavram' && !math && narration) {
    actions.push({ type: 'text', content: narration, tone: 'note' })
  }

  if (figure) {
    const type = FIGURE_ACTION[figure.kind]
    if (type) actions.push({ type, figure })
  }

  return {
    n: Number.isInteger(raw?.n) && raw.n > 0 ? raw.n : fallbackIndex,
    kind,
    title: title ? title.slice(0, LIMITS.maxTitleChars) : `Adım ${fallbackIndex}`,
    narration: narration ? narration.slice(0, LIMITS.maxNarrationChars) : '',
    // "Neden?" düğmesi bunu gösterir. ÖNCEDEN üretilir: her tıklamada yeni
    // bir API çağrısı yapmak hem yavaş hem pahalı olurdu (§10, §26).
    why: trimmed(raw?.why)?.slice(0, LIMITS.maxNarrationChars) ?? null,
    isKey: raw?.is_key === true,
    actions: sanitizeActions(actions),
  }
}

/**
 * İki girdi biçimini de kabul eder:
 *   · model yanıtı        → { value_latex, plain, unit, choice }
 *   · kayıtlı tahta       → { latex,       plain, unit, choice }
 * Tek normalleştirici olması, `rehydrateBoard` ile `compileBoard`ın aynı
 * cevabı üretmesini garanti eder.
 */
function normalizeAnswer(raw) {
  return {
    latex: trimmed(raw?.value_latex ?? raw?.latex)?.slice(0, LIMITS.maxContentChars) ?? null,
    plain: trimmed(raw?.plain)?.slice(0, LIMITS.maxLabelChars) ?? null,
    unit: trimmed(raw?.unit)?.slice(0, 24) ?? null,
    // Şık harfi tek karakter olmalı; model "A şıkkı" yazarsa ilk harfi alırız.
    choice: normalizeChoice(raw?.choice),
  }
}

function normalizeChoice(value) {
  const clean = trimmed(value)
  if (!clean) return null
  const match = clean.toLocaleUpperCase('tr').match(/[A-E]/)
  return match ? match[0] : null
}

const KINDS = new Set(['kurulum', 'donusum', 'hesap', 'yerine_koyma', 'sonuc', 'kontrol', 'kavram'])

function normalizeKind(value) {
  return KINDS.has(value) ? value : 'donusum'
}

/**
 * Sıra dışı boşluk karakterlerini (kırılmaz boşluk, sıfır genişlikli
 * birleştirici, BOM) NORMAL BOŞLUĞA çevirir ve fazlalıkları toplar.
 *
 * Bu karakterleri SİLMEK değil DEĞİŞTİRMEK gerekiyor: silmek "x = 6"yı
 * "x=6" yapar ve anlatım cümlelerindeki tüm kelimeleri birbirine
 * yapıştırırdı. (`src/lib/whiteboard/actions.js` içindeki `text()` ile
 * aynı kural.)
 */
const ODD_SPACE = /[\u0000\u00A0\u1680\u2000-\u200D\u202F\u205F\u3000\uFEFF]/g

function trimmed(value) {
  if (typeof value !== 'string') return null
  const clean = value.replace(ODD_SPACE, ' ').replace(/\s+/g, ' ').trim()
  return clean || null
}

/** Sonuç adımının cevabı zaten yazıp yazmadığını anlamak için. */
function sameMath(actions, latex) {
  if (!latex) return false
  const needle = latex.replace(/\s+/g, '')
  return (actions ?? []).some((a) => {
    const value = a.target ?? a.content
    return typeof value === 'string' && value.replace(/\s+/g, '') === needle
  })
}

/**
 * Kayıtlı (veritabanından gelen) bir tahtayı yeniden doğrular.
 *
 * NEDEN GEREKLİ: tahta JSON'u veritabanında duruyor. Satır bizim
 * yazdığımız hâliyle güvenli, ama şema sürümü ilerlediğinde ya da bir
 * migration sırasında beklenmedik bir şey girdiğinde render'ın hazırlıksız
 * yakalanmaması gerekir. Aynı doğrulayıcıdan bir kez daha geçirmek ucuz.
 */
export function rehydrateBoard(stored) {
  if (!stored || typeof stored !== 'object') return { v: BOARD_VERSION, steps: [], answer: normalizeAnswer(null) }

  const steps = (Array.isArray(stored.steps) ? stored.steps : [])
    .slice(0, LIMITS.maxSteps)
    .map((step, i) => ({
      n: Number.isInteger(step?.n) && step.n > 0 ? step.n : i + 1,
      kind: normalizeKind(step?.kind),
      title: trimmed(step?.title)?.slice(0, LIMITS.maxTitleChars) ?? `Adım ${i + 1}`,
      narration: trimmed(step?.narration)?.slice(0, LIMITS.maxNarrationChars) ?? '',
      why: trimmed(step?.why)?.slice(0, LIMITS.maxNarrationChars) ?? null,
      isKey: step?.isKey === true,
      actions: sanitizeActions(step?.actions),
    }))

  return { v: BOARD_VERSION, steps, answer: normalizeAnswer(stored.answer ?? {}) }
}
