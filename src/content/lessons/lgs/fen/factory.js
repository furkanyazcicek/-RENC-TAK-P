/**
 * LGS FEN BİLİMLERİ DERS FABRİKASI
 * ==================================================================
 *
 * NEDEN AYRI BİR FABRİKA?
 * Türkçe fabrikası metin çözümlemesi üzerine kuruludur: bağlam, kanıt,
 * çeldirici. Fen ise başka bir omurga ister — MEB 8. sınıf Fen Bilimleri
 * programı kazanımlarının çoğu bir OLAYI, bir MEKANİZMAYI ve bir DENEYİ
 * merkeze alır; birçok kazanımın açıklamasında değişken ayrımı açıkça
 * istenir (örn. F.8.4.5.1: "Bağımlı, bağımsız ve kontrol edilen
 * değişkenler örneklerle açıklanır.").
 *
 * ÖĞRENME OMURGASI (her LGS Fen notu bu sırayı izler)
 *   1. Olay        → gözlemlenebilir bir olay/problem + kazanım künyesi
 *                    + kavramlar + "neden böyle?"
 *   2. Mekanizma   → olayın adım adım nasıl gerçekleştiği + kavram
 *                    haritası + karşılaştırma + kavram yanılgısı
 *   3. Değişkenler → değişken ilişkisi şeması + deney düzeneği +
 *                    gözlem verisi tablosu
 *   4. Derinleşme  → konuya özgü serbest bölümler
 *   5. Uygulama    → çözümlü örnekler + günlük yaşam + dur-düşün
 *   6. Sınav       → LGS bu konuda neyi ölçüyor + mini LGS simülasyonu
 *   7. Kapanış     → özet + mini değerlendirme + sonraki adım
 *
 * PROGRAM SINIRLARI
 * Fen kazanımlarının açıklamalarında çok sayıda "girilmez / değinilmez /
 * verilmez" sınırı vardır (matematiksel bağıntılar, kimyasal denklemler,
 * hesaplamalar…). `kazanimlar[].sinir` alanı bu sınırı ÖĞRENCİYE de
 * gösterir; böylece not, müfredat dışına taşmadığını kendisi beyan eder.
 *
 * Bu dosya yalnızca semantik ders belgesi üretir; hiçbir görsel karar
 * içermez (sunum `src/components/lessons/reader/*` katmanındadır).
 */

import { FEN_RESMI_KAZANIMLAR } from './resmiProgram.js'

const blockId = (slug, section, name) => `${slug}-${section}-${name}`

/**
 * Ders dosyasındaki kazanım listesini resmî metne bağlar.
 *
 * Ders dosyası YALNIZ kodu verir ('F.8.4.4.1' ya da { kod }). Kazanım
 * cümlesi ve açıklamaları `resmiProgram.js` dosyasından gelir. Ders
 * dosyasında `metin` ya da `sinir` yazılmışsa derleme durdurulur: bu iki
 * alan elle yazıldığında programdan kayıyordu ve programda olmayan
 * sınırlar programa atfediliyordu.
 */
function resmiKazanimlar(slug, kazanimlar) {
  return kazanimlar.map((giris) => {
    const kod = typeof giris === 'string' ? giris : giris?.kod
    if (typeof giris === 'object' && giris && ('metin' in giris || 'sinir' in giris)) {
      throw new Error(
        `${slug}: ${kod} için "metin"/"sinir" elle yazılmış. Kazanım metni ve açıklamaları ` +
          `resmiProgram.js dosyasından okunur; ders dosyasında yalnız kod bulunmalıdır.`
      )
    }
    const resmi = FEN_RESMI_KAZANIMLAR[kod]
    if (!resmi) throw new Error(`${slug}: ${kod} resmî Fen programında bulunamadı.`)
    return { kod, metin: resmi.metin, aciklama: resmi.aciklama }
  })
}

/**
 * Kazanım künyesi.
 * "Programın açıklaması" başlığı altında YALNIZ programın kendi cümleleri
 * durur. Dersin kendi kapsam kararları varsa ayrı bir başlıkla ("DRKOÇ
 * kapsam notu") yazılır; ikisi hiçbir zaman karıştırılmaz.
 */
function kazanimNotu(slug, kazanimlar, soruSayisi, kapsamNotu) {
  const satirlar = kazanimlar
    .map((k) => {
      const baslik = `**${k.kod}** — ${k.metin}`
      if (!k.aciklama.length) return baslik
      const maddeler = k.aciklama.map((a) => `- ${a}`).join('\n')
      return `${baslik}\n\n*Programın açıklaması:*\n${maddeler}`
    })
    .join('\n\n')
  const not = kapsamNotu ? `\n\n*DRKOÇ kapsam notu:* ${kapsamNotu}` : ''
  return {
    id: blockId(slug, 'olay', 'kazanim'),
    type: 'teacher_note',
    tone: 'exam',
    body:
      `Bu ders, MEB 8. sınıf Fen Bilimleri Dersi Öğretim Programı'ndaki şu kazanımları karşılar:\n\n${satirlar}${not}\n\n` +
      `LGS'nin ikinci oturumunda Fen Bilimleri alt testi ${soruSayisi} sorudur ve sorular 8. sınıf ` +
      `öğretim programındaki kazanımlar esas alınarak hazırlanır.`,
  }
}

function kavramBloklari(slug, kavramlar = []) {
  return kavramlar.map((item, index) => ({
    id: blockId(slug, 'olay', `kavram-${index + 1}`),
    type: 'concept',
    term: item.term,
    body: item.body,
  }))
}

/**
 * Mekanizma adımlarından kavram haritası üretir.
 * Fen'de bu harita dekoratif değildir: öğrenci adımları listede okurken
 * zinciri göremiyor; yönlü harita her adımın bir öncekinin SONUCU
 * olduğunu gösterir.
 */
function mekanizmaHaritasi(slug, mekanizma) {
  const nodes = mekanizma.steps.map((step, index) => ({
    id: `asama-${index + 1}`,
    label: step.title,
    detail: step.body,
  }))
  return {
    id: blockId(slug, 'mekanizma', 'harita'),
    type: 'concept_map',
    title: `${mekanizma.title}: zincir nasıl kuruluyor?`,
    intro: 'Her aşama bir öncekinin sonucudur. Bir halkayı atlarsan olayın nedenini değil, yalnız sonucunu ezberlemiş olursun.',
    nodes,
    links: nodes.slice(0, -1).map((node, index) => ({
      from: node.id,
      to: nodes[index + 1].id,
      label: 'sonra',
    })),
    caption: mekanizma.takeaway,
  }
}

/** Değişken ilişkisi şeması — bölge sırası registry ile aynıdır. */
function degiskenSemasi(slug, degiskenler) {
  const { question, independent, setup, dependent, controlled = [], caption, focus } = degiskenler
  return {
    id: blockId(slug, 'degisken', 'sema'),
    type: 'figure',
    kind: 'lgs-fen-degisken-iliskisi',
    title: 'Bu deneyde neyi değiştiriyorum, neyi ölçüyorum?',
    // 'full': şemanın en küçük genişliği (620 px) 40rem'lik okuma sütununa
    // dolgusuyla sığmıyor; masaüstünde gereksiz yatay kaydırma çıkıyordu.
    width: 'full',
    complexity: 'medium',
    caption,
    purpose: 'Değişken ayrımını tek bakışta görünür kılmak',
    alt:
      `Değişken ilişkisi şeması. Araştırma sorusu: ${question}. ` +
      `Bağımsız değişken: ${independent.label}. Deney düzeneği: ${setup.label}. ` +
      `Bağımlı değişken: ${dependent.label}. Sabit tutulanlar: ${controlled.join(', ')}.`,
    data: { question, independent, setup, dependent, controlled },
    // Odak maddeleri şemadaki bölge sırasıyla BİREBİR eşleşmek zorunda:
    // bagimsiz → duzenek → bagimli → kontrol.
    focus: focus ?? [
      { title: 'Değiştirdiğim', body: `${independent.label} — ${independent.note}` },
      { title: 'Düzenek', body: `${setup.label} — ${setup.note}` },
      { title: 'Ölçtüğüm', body: `${dependent.label} — ${dependent.note}` },
      { title: 'Sabit tuttuklarım', body: controlled.join(' · ') },
    ],
  }
}

function tuzakBloklari(slug, tuzaklar = [], bolum = 'mekanizma') {
  return tuzaklar.map((tuzak, index) => ({
    id: blockId(slug, bolum, `yanilgi-${index + 1}`),
    type: 'trap',
    title: tuzak.title,
    wrong: tuzak.wrong,
    right: tuzak.right,
    body: tuzak.body,
  }))
}

export function createLgsScienceLesson(config) {
  const {
    slug,
    topic,
    order = 0,
    title,
    subtitle,
    minutes = 42,
    goldStandard = false,
    /** ['F.8.x.y.z', …] — yalnız kod; metin ve açıklama resmiProgram.js'ten gelir. */
    kazanimlar = [],
    /** Dersin kendi kapsam kararı (programa atfedilmez, ayrı başlıkla basılır). */
    kapsamNotu = null,
    soruSayisi = 20,
    prerequisites = [],
    outcomes = [],
    /** { title, lead, body } — gözlemlenebilir olay ya da problem */
    opening,
    /** [{ term, body }] */
    concepts = [],
    /** { question, body } */
    why,
    /** { title, lead, intro, steps:[{title,body}], takeaway } — neden-sonuç zinciri */
    mechanism,
    /** { title, intro, steps:[{title,body}], inference } — sebep-olay-sonuç */
    causeEffect = null,
    /** { title, columns, rows, insight } */
    comparison = null,
    /** kavram yanılgıları */
    traps = [],
    /**
     * { title, lead, question, independent, setup, dependent, controlled, caption, focus? }
     * Kazanım bir deney ya da veri incelemesi içermiyorsa null bırakılabilir;
     * o zaman "Değişkenler" bölümü hiç üretilmez. Boş bir bölüm basmaktansa
     * bölümü hiç açmamak doğrudur.
     */
    variables = null,
    /** { title, intro, steps:[{title,body}], takeaway } — deney düzeneği/işlem sırası */
    experiment = null,
    /** { title, columns, rows, caption } — gözlem verisi */
    dataTable = null,
    /** { latex, title, meaning, variables } — YALNIZ program izin veriyorsa */
    formula = null,
    /** serbest derinleşme bölümleri */
    deepDiveSections = [],
    /** [{ title, prompt, steps, answer, takeaway }] */
    workedExamples = [],
    /** { title, body, links } — günlük yaşam bağlantısı */
    dailyLife = null,
    /** { concept, statement, clues, reasoning, boundary } */
    questionClue = null,
    /** { title, body, patterns } */
    examShape = null,
    /** [{ prompt, hint, answer }] */
    checkpoints = [],
    /** { title, body, measures } */
    examInsight,
    /** { title, columns, rows, caption } — simülasyon öncesi veri */
    simulationTable = null,
    /** { title, passage, question, options, answer_index, stem_analysis, critical_point, takeaway } */
    simulation,
    /** [{ question, options, answer_index, explanation, purpose }] */
    quizzes = [],
    summary = [],
    next = [],
  } = config

  const resmi = resmiKazanimlar(slug, kazanimlar)
  const sections = []

  /* ---------- 1. OLAY ---------- */
  sections.push({
    id: `${slug}-olay`,
    kind: 'opening',
    title: opening.title,
    lead: opening.lead,
    blocks: [
      kazanimNotu(slug, resmi, soruSayisi, kapsamNotu),
      { id: blockId(slug, 'olay', 'anlatim'), type: 'prose', body: opening.body },
      ...kavramBloklari(slug, concepts),
      { id: blockId(slug, 'olay', 'neden'), type: 'why', question: why.question, body: why.body },
    ],
  })

  /* ---------- 2. MEKANİZMA ---------- */
  sections.push({
    id: `${slug}-mekanizma`,
    kind: 'build',
    title: mechanism.title,
    lead: mechanism.lead,
    blocks: [
      {
        id: blockId(slug, 'mekanizma', 'adimlar'),
        type: 'mechanism',
        title: mechanism.title,
        body: mechanism.intro,
        steps: mechanism.steps,
      },
      mekanizmaHaritasi(slug, mechanism),
      ...(causeEffect
        ? [{
            id: blockId(slug, 'mekanizma', 'neden-sonuc'),
            type: 'cause_effect',
            title: causeEffect.title,
            intro: causeEffect.intro,
            steps: causeEffect.steps,
            inference: causeEffect.inference,
          }]
        : []),
      ...(formula
        ? [{
            id: blockId(slug, 'mekanizma', 'formul'),
            type: 'formula',
            latex: formula.latex,
            title: formula.title,
            meaning: formula.meaning,
            variables: formula.variables,
          }]
        : []),
      ...(comparison
        ? [{ id: blockId(slug, 'mekanizma', 'karsilastirma'), type: 'compare', interactive: true, ...comparison }]
        : []),
      ...tuzakBloklari(slug, traps, 'mekanizma'),
    ],
  })

  /* ---------- 3. DEĞİŞKENLER VE DENEY ---------- */
  if (variables) {
    sections.push({
    id: `${slug}-degisken`,
    kind: 'build',
    title: variables.title,
    lead: variables.lead,
    blocks: [
      degiskenSemasi(slug, variables),
      ...(experiment
        ? [{
            id: blockId(slug, 'degisken', 'deney'),
            type: 'process',
            title: experiment.title,
            intro: experiment.intro,
            steps: experiment.steps,
          }]
        : []),
      ...(dataTable
        ? [{
            id: blockId(slug, 'degisken', 'veri'),
            type: 'table',
            interactive: true,
            title: dataTable.title,
            columns: dataTable.columns,
            rows: dataTable.rows,
            caption: dataTable.caption,
          }]
        : []),
    ],
    })
  }

  /* ---------- 4. DERİNLEŞME ---------- */
  deepDiveSections.forEach((section, index) => {
    sections.push({
      kind: 'deepen',
      ...section,
      id: section.id || `${slug}-derinlesme-${index + 1}`,
    })
  })

  /* ---------- 5. UYGULAMA ---------- */
  sections.push({
    id: `${slug}-uygulama`,
    kind: 'practice',
    title: 'Öğrendiğini uygula',
    lead: 'Şimdi bilgiyi bir durumun içinde çalıştır. Sonuca değil, sonuca götüren gerekçeye dikkat et.',
    blocks: [
      ...workedExamples.map((example, index) => ({
        id: blockId(slug, 'uygulama', `cozum-${index + 1}`),
        type: 'worked_example',
        ...example,
      })),
      ...(dailyLife
        ? [{
            id: blockId(slug, 'uygulama', 'gunluk-yasam'),
            type: 'connection',
            title: dailyLife.title,
            body: dailyLife.body,
            links: dailyLife.links,
          }]
        : []),
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

  /* ---------- 6. SINAV ---------- */
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

  /* ---------- 7. KAPANIŞ ---------- */
  sections.push({
    id: `${slug}-kapanis`,
    kind: 'close',
    title: 'Son kontrol',
    lead: 'Soru çözmeye geçmeden önce aşağıdaki ilişkileri kendi cümlenle kurabildiğinden emin ol.',
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
        body: 'Konuyu kalıcı hâle getirmek için önce mekanizmayı kitabı kapatarak kendi cümlenle anlat, sonra değişkenleri ayırt ettiren sorular çöz.',
        topics: next,
      },
    ],
  })

  return {
    slug,
    learningMode: 'interactive',
    placement: { examType: 'LGS', subject: 'Fen Bilimleri', topic },
    order,
    partLabel: 'Olaydan kanıta',
    title,
    subtitle,
    goldStandard,
    kazanimlar: resmi.map((k) => k.kod),
    document: {
      version: 2,
      estimated_minutes: minutes,
      prerequisites: prerequisites.length
        ? prerequisites
        : [{ topic: 'Ön bilgi zorunlu değil', why: 'Ders gerekli kavramları sıfırdan kurarak ilerler.' }],
      outcomes,
      sections,
    },
  }
}
