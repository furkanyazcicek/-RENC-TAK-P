/**
 * LGS T.C. İNKILAP TARİHİ VE ATATÜRKÇÜLÜK DERS FABRİKASI
 * ==================================================================
 *
 * NEDEN AYRI BİR FABRİKA?
 * Türkçe fabrikası metin çözümlemesine, Fen fabrikası olay–mekanizma–
 * değişken omurgasına kuruludur. Tarih ise başka bir omurga ister: öğrenci
 * olayı ZAMANDA yerleştiremiyorsa, SEBEBİNİ birden fazla etkenle
 * açıklayamıyorsa ve bir BELGEDEN çıkarım yapamıyorsa konuyu bilmiyordur;
 * yalnızca tarih ve isim ezberlemiştir. LGS'deki İnkılap soruları da bu
 * yüzden büyük ölçüde bir metin, belge, harita ya da kronoloji verip
 * "bu bilgilere göre" çıkarım ister.
 *
 * ÖĞRENME OMURGASI (her LGS İnkılap notu bu sırayı izler)
 *   1. Bağlam        → kazanım künyesi + dönemin durumu + kavramlar
 *                      + "neden böyle oldu?"
 *   2. Kronoloji     → görünür zaman çizelgesi + (varsa) şematik harita
 *                      + veri tablosu
 *   3. Zincir        → sebep → gelişme → sonuç → sonraki etki
 *                      + karşılaştırma + karıştırılan noktalar
 *   4. Şahsiyetler   → kişiler biyografi olarak değil, KARARLARIYLA
 *   5. Derinleşme    → konuya özgü serbest bölümler
 *   6. Kaynaktan çıkarım → birincil ve ikincil kaynak okuma
 *   7. Uygulama      → çözümlü örnekler + soru ipucu + dur-düşün
 *   8. Sınav         → LGS bu konuda neyi ölçüyor + mini LGS simülasyonu
 *   9. Kapanış       → dönem özeti + kısa tekrar + mini değerlendirme
 *
 * BU FABRİKANIN DAYATTIĞI TARİH KURALLARI
 *   - Kazanım cümlesi ve açıklamaları YALNIZ resmiProgram.js'ten gelir.
 *   - Zincirde en az iki SEBEP bulunmak zorundadır: tek nedenli anlatım
 *     derlemeyi durdurur.
 *   - Zincir sebep, gelişme, sonuç ve sonraki etki aşamalarının dördünü
 *     de içermek zorundadır.
 *   - Kaynak okumada en az bir birincil ve bir ikincil kaynak bulunur;
 *     sadeleştirilmiş ya da DRKOÇ'un yazdığı metin bunu açıkça söyler.
 *   - Tarih haritası kullanılırsa "şematik" etiketi ve kaynak notu
 *     zorunludur; sınır, cephe hattı ya da koordinat iddiası taşımaz.
 *
 * Bu dosya yalnızca semantik ders belgesi üretir; hiçbir görsel karar
 * içermez (sunum `src/components/lessons/reader/*` katmanındadır).
 */

import { INKILAP_RESMI_KAZANIMLAR } from './resmiProgram.js'

const blockId = (slug, section, name) => `${slug}-${section}-${name}`

/** Zincir aşamalarının öğrenciye görünen adları. */
const ZINCIR_ASAMALARI = {
  sebep: 'Sebep',
  gelisme: 'Gelişme',
  sonuc: 'Sonuç',
  'sonraki-etki': 'Sonraki etki',
}

/** Kaynak türlerinin öğrenciye görünen adları. */
const KAYNAK_TURLERI = {
  birincil: 'Birincil kaynak',
  ikincil: 'İkincil kaynak',
}

/**
 * Ders dosyasındaki kazanım listesini resmî metne bağlar.
 * Ders dosyası YALNIZ kodu verir; metin elle yazılırsa derleme durur.
 */
function resmiKazanimlar(slug, kazanimlar) {
  return kazanimlar.map((giris) => {
    const kod = typeof giris === 'string' ? giris : giris?.kod
    if (typeof giris === 'object' && giris && ('metin' in giris || 'sinir' in giris || 'aciklama' in giris)) {
      throw new Error(
        `${slug}: ${kod} için kazanım metni elle yazılmış. Kazanım metni ve açıklamaları ` +
          `resmiProgram.js dosyasından okunur; ders dosyasında yalnız kod bulunmalıdır.`
      )
    }
    const resmi = INKILAP_RESMI_KAZANIMLAR[kod]
    if (!resmi) throw new Error(`${slug}: ${kod} resmî İnkılap Tarihi programında bulunamadı.`)
    return { kod, metin: resmi.metin, aciklama: resmi.aciklama }
  })
}

/**
 * Kazanım künyesi.
 * "Programın açıklaması" altında YALNIZ programın kendi cümleleri durur.
 * Dersin kendi kapsam kararı ayrı başlıkla ("DRKOÇ kapsam notu") yazılır.
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
    id: blockId(slug, 'baglam', 'kazanim'),
    type: 'teacher_note',
    tone: 'exam',
    body:
      `Bu ders, MEB 8. sınıf T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı'ndaki şu kazanımları karşılar:\n\n${satirlar}${not}\n\n` +
      `LGS'nin birinci oturumunda T.C. İnkılap Tarihi ve Atatürkçülük alt testi ${soruSayisi} sorudur ve sorular 8. sınıf ` +
      `öğretim programındaki kazanımlar esas alınarak hazırlanır.`,
  }
}

function kavramBloklari(slug, kavramlar = []) {
  return kavramlar.map((item, index) => ({
    id: blockId(slug, 'baglam', `kavram-${index + 1}`),
    type: 'concept',
    term: item.term,
    body: item.body,
  }))
}

/**
 * Sebep → gelişme → sonuç → sonraki etki zinciri.
 * Her adım `tur` alanıyla gelir; başlığın başına aşama adı fabrikada
 * eklenir. Tek nedenli anlatımı ve eksik aşamayı derleme anında yakalar.
 */
function zincirBlogu(slug, zincir) {
  const adimlar = zincir.steps ?? []
  adimlar.forEach((adim, index) => {
    if (!ZINCIR_ASAMALARI[adim.tur]) {
      throw new Error(`${slug}: zincirin ${index + 1}. adımında geçersiz aşama "${adim.tur}". ` +
        `Geçerli aşamalar: ${Object.keys(ZINCIR_ASAMALARI).join(', ')}.`)
    }
  })
  const sebepSayisi = adimlar.filter((a) => a.tur === 'sebep').length
  if (sebepSayisi < 2) {
    throw new Error(`${slug}: zincirde ${sebepSayisi} sebep var. Tarih notunda tek nedenli anlatım yapılmaz; en az iki sebep yazılmalı.`)
  }
  const eksik = Object.keys(ZINCIR_ASAMALARI).filter((tur) => !adimlar.some((a) => a.tur === tur))
  if (eksik.length) {
    throw new Error(`${slug}: zincirde eksik aşama: ${eksik.join(', ')}.`)
  }
  return {
    id: blockId(slug, 'zincir', 'neden-sonuc'),
    type: 'cause_effect',
    title: zincir.title,
    intro: zincir.intro,
    steps: adimlar.map((adim) => ({ title: `${ZINCIR_ASAMALARI[adim.tur]} · ${adim.title}`, body: adim.body })),
    inference: zincir.inference,
  }
}

/** Şematik tarih haritası — kaynak notu ve "şematik" etiketi zorunlu. */
function haritaBlogu(slug, harita) {
  if (!harita.source_note) throw new Error(`${slug}: tarih haritasında kaynak notu (source_note) yok.`)
  const etiket = harita.map_label ?? 'Şematik gösterim · sınırlar ve uzaklıklar ölçekli değildir'
  if (!/şematik/i.test(etiket)) throw new Error(`${slug}: harita etiketi haritanın şematik olduğunu söylemiyor.`)
  return {
    id: blockId(slug, 'kronoloji', 'harita'),
    type: 'historical_map',
    ...harita,
    map_label: etiket,
  }
}

/**
 * Kaynak okuma örnekleri.
 * Her kaynak künyesiyle, türüyle ve metnin niteliğiyle (birebir alıntı mı,
 * sadeleştirme mi, DRKOÇ'un yazdığı örnek metin mi) birlikte basılır.
 * Öğrenci neyi okuduğunu bilmeden kaynağa güvenmeyi ya da kaynaktan
 * şüphe etmeyi öğrenemez.
 */
function kaynakBloklari(slug, kaynaklar = []) {
  const turler = new Set(kaynaklar.map((k) => k.tur))
  if (!turler.has('birincil') || !turler.has('ikincil')) {
    throw new Error(`${slug}: kaynak okuma bölümünde en az bir birincil ve bir ikincil kaynak bulunmalı.`)
  }
  return kaynaklar.map((kaynak, index) => {
    if (!KAYNAK_TURLERI[kaynak.tur]) throw new Error(`${slug}: geçersiz kaynak türü "${kaynak.tur}".`)
    if (!kaynak.nitelik) throw new Error(`${slug}: ${index + 1}. kaynağın niteliği (birebir / sadeleştirme / örnek metin) yazılmamış.`)
    return {
      id: blockId(slug, 'kaynak', `belge-${index + 1}`),
      type: 'worked_example',
      title: `${KAYNAK_TURLERI[kaynak.tur]} · ${kaynak.baslik}`,
      prompt:
        `**Künye:** ${kaynak.kunye}\n\n*Metnin niteliği:* ${kaynak.nitelik}\n\n` +
        `“${kaynak.metin}”\n\n**Soru:** ${kaynak.soru}`,
      steps: kaynak.adimlar,
      answer: kaynak.cevap,
      takeaway: kaynak.cikarim,
    }
  })
}

function tuzakBloklari(slug, tuzaklar = [], bolum = 'zincir') {
  return tuzaklar.map((tuzak, index) => ({
    id: blockId(slug, bolum, `yanilgi-${index + 1}`),
    type: 'trap',
    title: tuzak.title,
    wrong: tuzak.wrong,
    right: tuzak.right,
    body: tuzak.body,
  }))
}

export function createLgsHistoryLesson(config) {
  const {
    slug,
    topic,
    order = 0,
    title,
    subtitle,
    minutes = 45,
    goldStandard = false,
    /** ['İTA.8.x.y', …] — yalnız kod; metin ve açıklama resmiProgram.js'ten gelir. */
    kazanimlar = [],
    /** Dersin kendi kapsam kararı (programa atfedilmez, ayrı başlıkla basılır). */
    kapsamNotu = null,
    soruSayisi = 10,
    prerequisites = [],
    outcomes = [],
    /** { title, lead, body } — dönemin durumu */
    opening,
    /** [{ term, body }] */
    concepts = [],
    /** { question, body } */
    why,
    /** { title, lead, intro, items:[{title,body}], takeaway, body? } — kronoloji */
    chronology,
    /** historical_map alanları; source_note zorunlu */
    map = null,
    /** { title, columns, rows, caption } */
    dataTable = null,
    /** { title, lead, intro, steps:[{tur,title,body}], inference, body? } */
    chain,
    /** { title, columns, rows, insight } */
    comparison = null,
    traps = [],
    /** { title, lead, intro, figures:[…], takeaway, body? } */
    people,
    deepDiveSections = [],
    /** { lead, intro, sources:[{tur,baslik,kunye,nitelik,metin,soru,adimlar,cevap,cikarim}] } */
    sourceReading,
    workedExamples = [],
    questionClue = null,
    examShape = null,
    checkpoints = [],
    examInsight,
    simulationTable = null,
    simulation,
    /** { title, range, body, turning_points } */
    periodSummary,
    quizzes = [],
    summary = [],
    next = [],
    nextBody = 'Konuyu kalıcı hâle getirmek için önce kronolojiyi kitabı kapatarak sırala, sonra her olayın en az iki sebebini ve bir sonraki etkisini kendi cümlenle yaz.',
  } = config

  const resmi = resmiKazanimlar(slug, kazanimlar)
  const sections = []

  /* ---------- 1. BAĞLAM ---------- */
  sections.push({
    id: `${slug}-baglam`,
    kind: 'opening',
    title: opening.title,
    lead: opening.lead,
    blocks: [
      kazanimNotu(slug, resmi, soruSayisi, kapsamNotu),
      { id: blockId(slug, 'baglam', 'anlatim'), type: 'prose', body: opening.body },
      ...kavramBloklari(slug, concepts),
      { id: blockId(slug, 'baglam', 'neden'), type: 'why', question: why.question, body: why.body },
    ],
  })

  /* ---------- 2. KRONOLOJİ ---------- */
  sections.push({
    id: `${slug}-kronoloji`,
    kind: 'build',
    title: chronology.title,
    lead: chronology.lead,
    blocks: [
      {
        id: blockId(slug, 'kronoloji', 'zaman'),
        type: 'timeline',
        title: chronology.title,
        intro: chronology.intro,
        items: chronology.items,
        takeaway: chronology.takeaway,
      },
      ...(chronology.body ? [{ id: blockId(slug, 'kronoloji', 'anlatim'), type: 'prose', body: chronology.body }] : []),
      ...(map ? [haritaBlogu(slug, map)] : []),
      ...(dataTable
        ? [{
            id: blockId(slug, 'kronoloji', 'veri'),
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

  /* ---------- 3. ZİNCİR ---------- */
  sections.push({
    id: `${slug}-zincir`,
    kind: 'build',
    title: chain.title,
    lead: chain.lead,
    blocks: [
      zincirBlogu(slug, chain),
      ...(chain.body ? [{ id: blockId(slug, 'zincir', 'anlatim'), type: 'prose', body: chain.body }] : []),
      ...(comparison
        ? [{ id: blockId(slug, 'zincir', 'karsilastirma'), type: 'compare', interactive: true, ...comparison }]
        : []),
      ...tuzakBloklari(slug, traps, 'zincir'),
    ],
  })

  /* ---------- 4. ŞAHSİYETLER ---------- */
  sections.push({
    id: `${slug}-sahsiyetler`,
    kind: 'deepen',
    title: people.title,
    lead: people.lead,
    blocks: [
      {
        id: blockId(slug, 'sahsiyetler', 'kisiler'),
        type: 'historical_figures',
        title: people.title,
        intro: people.intro,
        figures: people.figures,
        takeaway: people.takeaway,
      },
      ...(people.body ? [{ id: blockId(slug, 'sahsiyetler', 'anlatim'), type: 'prose', body: people.body }] : []),
    ],
  })

  /* ---------- 5. DERİNLEŞME ---------- */
  deepDiveSections.forEach((section, index) => {
    sections.push({
      kind: 'deepen',
      ...section,
      id: section.id || `${slug}-derinlesme-${index + 1}`,
    })
  })

  /* ---------- 6. KAYNAKTAN ÇIKARIM ---------- */
  sections.push({
    id: `${slug}-kaynak`,
    kind: 'practice',
    title: 'Kaynaktan çıkarım',
    lead: sourceReading.lead,
    blocks: [
      { id: blockId(slug, 'kaynak', 'giris'), type: 'prose', body: sourceReading.intro },
      ...kaynakBloklari(slug, sourceReading.sources),
    ],
  })

  /* ---------- 7. UYGULAMA ---------- */
  sections.push({
    id: `${slug}-uygulama`,
    kind: 'practice',
    title: 'Öğrendiğini uygula',
    lead: 'Şimdi bilgiyi bir durumun içinde çalıştır. Tarihi değil, tarihin arkasındaki gerekçeyi yakala.',
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

  /* ---------- 8. SINAV ---------- */
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

  /* ---------- 9. KAPANIŞ ---------- */
  sections.push({
    id: `${slug}-kapanis`,
    kind: 'close',
    title: 'Son kontrol',
    lead: 'Soru çözmeye geçmeden önce aşağıdaki ilişkileri kendi cümlenle kurabildiğinden emin ol.',
    blocks: [
      {
        id: blockId(slug, 'kapanis', 'donem'),
        type: 'period_summary',
        title: periodSummary.title,
        range: periodSummary.range,
        body: periodSummary.body,
        turning_points: periodSummary.turning_points,
      },
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
        body: nextBody,
        topics: next,
      },
    ],
  })

  return {
    slug,
    learningMode: 'interactive',
    qualityProfile: 'history',
    placement: { examType: 'LGS', subject: 'T.C. İnkılap Tarihi ve Atatürkçülük', topic },
    order,
    partLabel: 'Kronolojiden kanıta',
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
