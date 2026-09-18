/**
 * LGS TÜRKÇE DERS FABRİKASI
 * ==================================================================
 *
 * NEDEN TYT FABRİKASINDAN AYRI?
 * `src/content/lessons/turkce/factory.js` TYT/ÖSYM bağlamına göre
 * yazılmıştır: sınav bloğunun başlığı "ÖSYM Bu Konuda Neyi Ölçüyor?"
 * olarak sabittir ve ders dili lise düzeyindedir. O dosyayı yalnız
 * `examType` değiştirerek LGS'de kullanmak, 8. sınıf öğrencisine yanlış
 * bağlam sunardı. Mevcut TYT içerikleri hiç bozulmasın diye o fabrikaya
 * dokunulmadı; LGS için ayrı bir fabrika yazıldı.
 *
 * NE ÜRETİR?
 * Yalnızca `src/lib/lesson/schema.js` şemasına uygun SEMANTİK ders
 * belgesi. Burada tek bir görsel karar yoktur: renk, kart, yuvarlaklık
 * gibi kararlar `src/components/lessons/reader/*` katmanına aittir.
 *
 * ÖĞRENME OMURGASI (her LGS Türkçe notu bu sırayı izler)
 *   1. Giriş        → kazanım künyesi, gerçek bir soruna bağlanan anlatım,
 *                     kavram tanımları, "neden böyle?"
 *   2. Kurma        → karar adımları + kavram haritası + karşılaştırma + tuzak
 *   3. Derinleşme   → konuya özgü serbest bölümler (cümle analizi, tablo…)
 *   4. Uygulama     → çözümlü örnekler, "soruda nasıl tanırım", dur-düşün
 *   5. Sınav        → LGS bu konuda neyi ölçüyor + mini LGS simülasyonu
 *   6. Kapanış      → özet, mini değerlendirme, sonraki adım
 */

const blockId = (slug, section, name) => `${slug}-${section}-${name}`

/** Kazanım künyesi: öğrenci ve öğretmen dersin resmî dayanağını görür. */
function kazanimNotu(slug, kazanimlar, soruSayisi) {
  const satirlar = kazanimlar.map((k) => `**${k.kod}** — ${k.metin}`).join('\n')
  return {
    id: blockId(slug, 'giris', 'kazanim'),
    type: 'teacher_note',
    tone: 'exam',
    body:
      `Bu ders, MEB 8. sınıf Türkçe Dersi Öğretim Programı'ndaki şu kazanımları karşılar:\n\n${satirlar}\n\n` +
      `LGS'nin birinci oturumunda Türkçe alt testi ${soruSayisi} sorudur ve sorular 8. sınıf ` +
      `öğretim programındaki kazanımlar esas alınarak hazırlanır.`,
  }
}

function kavramBloklari(slug, kavramlar = []) {
  return kavramlar.map((item, index) => ({
    id: blockId(slug, 'giris', `kavram-${index + 1}`),
    type: 'concept',
    term: item.term,
    body: item.body,
  }))
}

/**
 * Karar adımlarından kavram haritası üretir.
 *
 * Bu dekoratif bir görsel değildir: öğrenci adımları listede okurken
 * sırayı "ezberlenecek slogan" sanıyor. Yönlü harita her adımın bir
 * öncekinin sonucunu daralttığını gösterir.
 */
function kararHaritasi(slug, karar) {
  const nodes = karar.steps.map((step, index) => ({
    id: `adim-${index + 1}`,
    label: step.title,
    detail: step.body,
  }))
  return {
    id: blockId(slug, 'kurma', 'harita'),
    type: 'concept_map',
    title: `${karar.title}: adımlar birbirine nasıl bağlanıyor?`,
    intro: 'Her adım bir öncekinin sonucunu daraltır. Sıra bozulursa elindeki kanıt eksik kalır.',
    nodes,
    links: nodes.slice(0, -1).map((node, index) => ({
      from: node.id,
      to: nodes[index + 1].id,
      label: 'sonra',
    })),
    caption: karar.takeaway,
  }
}

function tuzakBloklari(slug, tuzaklar = [], bolum = 'kurma') {
  return tuzaklar.map((tuzak, index) => ({
    id: blockId(slug, bolum, `tuzak-${index + 1}`),
    type: 'trap',
    title: tuzak.title,
    wrong: tuzak.wrong,
    right: tuzak.right,
    body: tuzak.body,
  }))
}

export function createLgsTurkishLesson(config) {
  const {
    slug,
    topic,
    order = 0,
    title,
    subtitle,
    minutes = 40,
    goldStandard = false,
    /** [{ kod, metin }] — resmî kazanım künyesi. Zorunludur. */
    kazanimlar = [],
    soruSayisi = 20,
    prerequisites = [],
    outcomes = [],
    /** { title, lead, body } */
    opening,
    /** [{ term, body }] */
    concepts = [],
    /** { question, body } */
    why,
    /** { title, lead, intro, steps:[{title,body}], takeaway } */
    decision,
    /** { title, intro, checks:[{question,yes,no}], takeaway } */
    decisionTree = null,
    /** { title, columns, rows, insight } */
    comparison = null,
    /** trap listesi — kurma bölümünde */
    traps = [],
    /** serbest derinleşme bölümleri: [{ id, title, lead, blocks:[...] }] */
    deepDiveSections = [],
    /** [{ title, prompt, steps, answer, takeaway }] */
    workedExamples = [],
    /** { concept, statement, clues, reasoning, boundary } */
    questionClue = null,
    /** { title, body, patterns } — "Sınavda nasıl gelir?" */
    examShape = null,
    /** [{ prompt, hint, answer }] */
    checkpoints = [],
    /** { title, body, measures } — "LGS bu konuda neyi ölçüyor?" */
    examInsight,
    /** { title, passage, question, options, answer_index, stem_analysis, critical_point, takeaway } */
    simulation,
    /**
     * Simülasyondan ÖNCE gösterilen veri tablosu.
     * `passage` içine Markdown tablosu yazılamaz: `Prose` bileşeni bilinçli
     * olarak yalnız kalın/eğik/liste/LaTeX destekler (bkz. Prose.jsx). Tablo
     * gerekiyorsa `table` bloğu kullanılır — bu alan onu üretir.
     * { title, columns, rows, caption }
     */
    simulationTable = null,
    /** [{ question, options, answer_index, explanation, purpose }] */
    quizzes = [],
    /** string[] */
    summary = [],
    /** string[] */
    next = [],
  } = config

  const sections = []

  /* ---------- 1. GİRİŞ ---------- */
  sections.push({
    id: `${slug}-giris`,
    kind: 'opening',
    title: opening.title,
    lead: opening.lead,
    blocks: [
      kazanimNotu(slug, kazanimlar, soruSayisi),
      { id: blockId(slug, 'giris', 'anlatim'), type: 'prose', body: opening.body },
      ...kavramBloklari(slug, concepts),
      { id: blockId(slug, 'giris', 'neden'), type: 'why', question: why.question, body: why.body },
    ],
  })

  /* ---------- 2. KURMA ---------- */
  sections.push({
    id: `${slug}-kurma`,
    kind: 'build',
    title: decision.title,
    lead: decision.lead,
    blocks: [
      {
        id: blockId(slug, 'kurma', 'adimlar'),
        type: 'process',
        title: decision.title,
        intro: decision.intro,
        steps: decision.steps,
      },
      kararHaritasi(slug, decision),
      ...(decisionTree
        ? [{
            id: blockId(slug, 'kurma', 'karar-agaci'),
            type: 'decision_tree',
            title: decisionTree.title,
            intro: decisionTree.intro,
            checks: decisionTree.checks,
            takeaway: decisionTree.takeaway,
          }]
        : []),
      ...(comparison
        ? [{ id: blockId(slug, 'kurma', 'karsilastirma'), type: 'compare', interactive: true, ...comparison }]
        : []),
      ...tuzakBloklari(slug, traps, 'kurma'),
    ],
  })

  /* ---------- 3. DERİNLEŞME ---------- */
  deepDiveSections.forEach((section, index) => {
    sections.push({
      kind: 'deepen',
      ...section,
      id: section.id || `${slug}-derinlesme-${index + 1}`,
    })
  })

  /* ---------- 4. UYGULAMA ---------- */
  sections.push({
    id: `${slug}-uygulama`,
    kind: 'practice',
    title: 'Örnek üzerinde uygula',
    lead: 'Şimdi kuralı metnin içinde çalıştır. Sonuca değil, sonuca götüren kanıta dikkat et.',
    blocks: [
      ...workedExamples.map((example, index) => ({
        id: blockId(slug, 'uygulama', `cozum-${index + 1}`),
        type: 'worked_example',
        ...example,
      })),
      ...(questionClue
        ? [{
            id: blockId(slug, 'uygulama', 'ipucu'),
            type: 'question_clue',
            concept: questionClue.concept,
            statement: questionClue.statement,
            clues: questionClue.clues,
            reasoning: questionClue.reasoning,
            boundary: questionClue.boundary,
          }]
        : []),
      ...(examShape
        ? [{
            id: blockId(slug, 'uygulama', 'sinav-bicimi'),
            type: 'exam',
            title: examShape.title,
            body: examShape.body,
            patterns: examShape.patterns,
          }]
        : []),
      ...checkpoints.map((checkpoint, index) => ({
        id: blockId(slug, 'uygulama', `dur-dusun-${index + 1}`),
        type: 'checkpoint',
        ...checkpoint,
      })),
    ],
  })

  /* ---------- 5. SINAV ---------- */
  sections.push({
    id: `${slug}-sinav`,
    kind: 'practice',
    title: 'LGS’de bu konu nasıl ölçülüyor?',
    lead: 'Aşağıdaki uygulama DRKOÇ için özgün yazılmıştır; çıkmış soru kopyası değildir. Amaç soruyu ezberlemek değil, soru mantığını görmektir.',
    blocks: [
      {
        id: blockId(slug, 'sinav', 'olcum'),
        type: 'osym_insight',
        exam: 'LGS',
        title: examInsight.title,
        body: examInsight.body,
        measures: examInsight.measures,
      },
      ...(simulationTable
        ? [{
            id: blockId(slug, 'sinav', 'veri'),
            type: 'table',
            interactive: true,
            title: simulationTable.title,
            columns: simulationTable.columns,
            rows: simulationTable.rows,
            caption: simulationTable.caption,
          }]
        : []),
      {
        id: blockId(slug, 'sinav', 'simulasyon'),
        type: 'osym_simulation',
        exam: 'LGS',
        title: simulation.title,
        passage: simulation.passage,
        question: simulation.question,
        options: simulation.options,
        answer_index: simulation.answer_index,
        stem_analysis: simulation.stem_analysis,
        critical_point: simulation.critical_point,
        takeaway: simulation.takeaway,
      },
    ],
  })

  /* ---------- 6. KAPANIŞ ---------- */
  sections.push({
    id: `${slug}-kapanis`,
    kind: 'close',
    title: 'Son kontrol',
    lead: 'Soru çözmeye geçmeden önce aşağıdaki ayrımları kendi cümlenle kurabildiğinden emin ol.',
    blocks: [
      {
        id: blockId(slug, 'kapanis', 'ozet'),
        type: 'summary',
        title: 'Kısa tekrar',
        points: summary,
      },
      ...quizzes.map((quiz, index) => ({
        id: blockId(slug, 'kapanis', `quiz-${index + 1}`),
        type: 'quiz',
        purpose: quiz.purpose ?? 'apply',
        question: quiz.question,
        options: quiz.options,
        answer_index: quiz.answer_index,
        explanation: quiz.explanation,
      })),
      {
        id: blockId(slug, 'kapanis', 'sonraki'),
        type: 'next_step',
        body: 'Konuyu kalıcı hâle getirmek için önce karar adımlarını kitabı kapatarak kendi cümlenle söyle, sonra kısa metinlerde gerekçeli soru çöz.',
        topics: next,
      },
    ],
  })

  return {
    slug,
    learningMode: 'interactive',
    placement: { examType: 'LGS', subject: 'Türkçe', topic },
    order,
    partLabel: 'Kanıttan yoruma',
    title,
    subtitle,
    goldStandard,
    // Test hattı kazanım kapsamasını buradan denetler.
    kazanimlar: kazanimlar.map((k) => k.kod),
    document: {
      version: 2,
      estimated_minutes: minutes,
      prerequisites: prerequisites.length
        ? prerequisites
        : [{ topic: 'Ön bilgi zorunlu değil', why: 'Ders gerekli terimleri sıfırdan kurarak ilerler.' }],
      outcomes,
      sections,
    },
  }
}
