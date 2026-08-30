import { MATH_MASTERY_EXAMPLES } from './mastery-examples.js'

const slugify = (value) => value
  .toLocaleLowerCase('tr-TR')
  .replaceAll('ı', 'i')
  .replaceAll('ş', 's')
  .replaceAll('ğ', 'g')
  .replaceAll('ü', 'u')
  .replaceAll('ö', 'o')
  .replaceAll('ç', 'c')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

function idOf(topic, suffix) {
  return `mat-${slugify(topic)}-${suffix}`
}

function readinessBlocks(topic, items) {
  return items.map((item, index) => ({
    id: idOf(topic, `hazir-${index + 1}`),
    type: 'checkpoint',
    prompt: item.prompt,
    hint: item.hint || 'Cevabı işlem yapmadan önce hangi bilgiye dayandırdığını söyle.',
    answer: `${item.answer}\n\n**Yönlendirme:** ${item.review}`,
  }))
}

function conceptBlocks(topic, concepts) {
  return concepts.map((concept, index) => ({
    id: idOf(topic, `kavram-${index + 1}`),
    type: 'concept',
    term: concept.term,
    body: `${concept.definition}\n\n**Neden önemli?** ${concept.why}\n\n**Kullanım sınırı:** ${concept.boundary}`,
  }))
}

function formulaBlocks(topic, formulas = []) {
  return formulas.map((formula, index) => ({
    id: idOf(topic, `formul-${index + 1}`),
    type: 'formula',
    title: formula.title,
    latex: formula.latex,
    meaning: `${formula.meaning}\n\n**Koşul ve sık hata:** ${formula.condition}`,
    variables: formula.variables || [],
  }))
}

const LEVEL_LABELS = {
  1: 'Seviye 1 · Sıfırdan',
  2: 'Seviye 2 · Temel işlem',
  3: 'Seviye 3 · Orta düzey',
  4: 'Seviye 4 · İleri',
}

function exampleLevel(index, total) {
  if (total <= 1) return 1
  return Math.round((index * 3) / (total - 1)) + 1
}

function exampleBlocks(topic, examples) {
  return examples.map((example, index) => ({
    id: idOf(topic, `ornek-${index + 1}`),
    type: 'worked_example',
    title: `${LEVEL_LABELS[exampleLevel(index, examples.length)]} · ${example.title}`,
    prompt: example.prompt,
    steps: example.steps,
    answer: example.answer,
    takeaway: `**Bu örneğin taktiği:** ${example.takeaway}\n\n**Sonuç kontrolü:** ${example.check}`,
  }))
}

function selectGuidedQuestion(questions) {
  const priority = { Karma: 4, İleri: 3, Orta: 2, Temel: 1 }
  return questions.reduce((selected, question, index) => {
    const score = priority[question.level] || 0
    return score >= selected.score ? { question, index, score } : selected
  }, { question: questions.at(-1), index: questions.length - 1, score: -1 })
}

function guidedChallengeBlock(topic, question, tactic) {
  const letters = ['A', 'B', 'C', 'D', 'E']
  const options = question.options
    .map((option, index) => `${letters[index]}) ${option}`)
    .join('\n')
  const answerLetter = letters[question.answer] || String(question.answer + 1)

  return {
    id: idOf(topic, 'ornek-rehberli-secici'),
    type: 'worked_example',
    title: 'Seviye 5 · Rehberli seçici TYT örneği',
    prompt: `${question.question}\n\n${options}`,
    steps: [
      {
        title: '1. Soruyu tanı — hemen işleme başlama',
        body: question.idea,
      },
      {
        title: '2. İlk hamleyi ana taktikle ilişkilendir',
        body: tactic.logic,
      },
      {
        title: '3. İşlemi görünür basamaklarla tamamla',
        body: question.solution,
      },
      {
        title: '4. Tuzak yolu ayır',
        body: `${question.wrong} Bu hata, doğru işlemin hangi koşula dayandığını gösterir.`,
      },
      {
        title: '5. Sonucu bağımsız biçimde kontrol et',
        body: question.check,
      },
    ],
    answer: `${answerLetter}) ${question.options[question.answer]}`,
    takeaway: `**Bu örneğin taktiği:** ${question.idea}\n\n**Başka soruya aktar:** ${tactic.works}\n\n**Dikkat sınırı:** ${tactic.risk}`,
  }
}

function masteryChallengeBlock(topic, mastery, fallbackQuestion, tactic) {
  if (!mastery) return guidedChallengeBlock(topic, fallbackQuestion, tactic)

  return {
    id: idOf(topic, 'ornek-rehberli-secici'),
    type: 'worked_example',
    title: 'Seviye 5 · Rehberli seçici TYT örneği',
    prompt: mastery.prompt,
    steps: mastery.steps,
    answer: mastery.answer,
    takeaway: `**Bu örneğin taktiği:** ${mastery.tactic}\n\n**Başka soruya aktar:** ${mastery.transfer}\n\n**Dikkat sınırı:** ${mastery.trap}`,
  }
}

function trapBlocks(topic, traps) {
  return traps.map((trap, index) => ({
    id: idOf(topic, `hata-${index + 1}`),
    type: 'trap',
    title: trap.title,
    wrong: trap.wrong,
    right: trap.right,
    body: `**Neden olur?** ${trap.cause}\n\n**Hatayı yakala:** ${trap.check}`,
  }))
}

function practiceBlocks(topic, questions) {
  return questions.map((question, index) => ({
    id: idOf(topic, `alistirma-${index + 1}`),
    type: 'quiz',
    question: `${question.level} · ${question.question}`,
    options: question.options,
    answer_index: question.answer,
    explanation: `**Temel fikir:** ${question.idea}\n\n${question.solution}\n\n**Yaygın yanlış:** ${question.wrong}\n\n**Kontrol:** ${question.check}`,
    purpose: question.purpose || 'apply',
  }))
}

/**
 * TYT Matematik yayın sözleşmesi.
 *
 * Konuya özgü matematik `spec` içinde kalır; bu fabrika her derste aynı
 * pedagojik sırayı garanti eder: hazır bulunuşluk -> kavram ve neden ->
 * çözümlü örnek -> soru tanıma -> gerekçeli taktik -> gizli çözümlü
 * alıştırma -> hızlı tekrar ve öz değerlendirme.
 */
export function createMathLesson(spec, order) {
  const topic = spec.topic
  const lessonId = idOf(topic, 'ders')
  const guidedQuestion = selectGuidedQuestion(spec.questions)
  const masteryExample = MATH_MASTERY_EXAMPLES[topic]
  const independentQuestions = masteryExample
    ? spec.questions
    : spec.questions.filter((_, index) => index !== guidedQuestion.index)
  const mapNodes = [
    ...spec.prerequisites.map((item, index) => ({ id: `pre-${index}`, label: item.topic, detail: item.why })),
    { id: 'core', label: topic, detail: spec.mapCore },
    ...spec.connections.map((item, index) => ({ id: `next-${index}`, label: item, detail: 'Bu konu burada yeniden kullanılacak.' })),
  ]
  const mapLinks = [
    ...spec.prerequisites.map((_, index) => ({ from: `pre-${index}`, to: 'core', label: 'ön koşul' })),
    ...spec.connections.map((_, index) => ({ from: 'core', to: `next-${index}`, label: 'bağlantı' })),
  ]

  return {
    slug: `tyt-${spec.subject === 'Geometri' ? 'geometri' : 'matematik'}-${slugify(topic)}`,
    placement: { examType: 'TYT', subject: spec.subject || 'Matematik', topic },
    order,
    partLabel: `${order}. Konu · TYT ${spec.subject === 'Geometri' ? 'Geometri' : 'Matematik'}`,
    learningMode: 'interactive',
    goldStandard: true,
    qualityProfile: 'math',
    title: spec.title,
    subtitle: spec.subtitle,
    contentMeta: {
      version: '1.0.0',
      updatedAt: '2026-08-25',
      sourceStatus: '2026 MEB programı ve 2018-2026 resmî TYT kitapçıklarıyla eşlendi',
      contentStatus: 'published',
      mathReview: 'checked',
      editorialReview: 'checked',
      outcomes: spec.outcomes,
    },
    document: {
      version: 2,
      estimated_minutes: spec.minutes,
      prerequisites: spec.prerequisites,
      outcomes: spec.outcomes,
      sections: [
        {
          id: `${lessonId}-giris`,
          kind: 'opening',
          title: spec.openingTitle,
          lead: spec.openingLead,
          blocks: [
            {
              id: idOf(topic, 'giris-anlatim'),
              type: 'prose',
              body: `${spec.introduction}\n\n**TYT'de kullanım:** ${spec.tytUse}\n\n**En sık zorlanılan yer:** ${spec.struggle}`,
            },
            {
              id: idOf(topic, 'on-kosul-haritasi'),
              type: 'concept_map',
              title: 'Bu konu nereden geliyor, nereye gidiyor?',
              intro: 'Oklar bir ezber sırası değil, düşünme bağı gösterir. Ön koşul eksikse önce soldaki düğümü onar.',
              nodes: mapNodes,
              links: mapLinks,
              caption: `${topic}, tek başına bir ada değildir; soru çözerken bu bağlantılardan en az biri etkinleşir.`,
            },
            {
              id: idOf(topic, 'osym-bakis'),
              type: 'osym_insight',
              title: 'ÖSYM bu konuda neyi ölçüyor?',
              body: `${spec.osym.body}\n\n**Kanıt sınırı:** Bu bölüm 2018-2026 resmî kitapçıklarının DRKOÇ analizidir; gelecek sınav için soru sayısı garantisi değildir.`,
              measures: spec.osym.measures,
            },
          ],
        },
        {
          id: `${lessonId}-hazirlik`,
          kind: 'build',
          title: 'Hazır bulunuşluk kontrolü',
          lead: 'Önce üç kısa soruyu dene. Yapamıyorsan cevap yönlendirmesini kullan; yapabiliyorsan doğrudan kendi seviyendeki işlem örneklerine geç.',
          blocks: readinessBlocks(topic, spec.readiness),
        },
        {
          id: `${lessonId}-temel`,
          kind: 'build',
          title: 'Sıfırdan kuralı kur',
          lead: 'Matematiğe yeniysen kavram ve formül kartlarını sırayla oku. Konuyu biliyorsan yalnız kullanım şartlarını ve uyarıları tarayıp örneklere geç.',
          blocks: [
            ...conceptBlocks(topic, spec.concepts),
            {
              id: idOf(topic, 'neden'),
              type: 'why',
              question: spec.why.question,
              body: `${spec.why.body}\n\n**Benzetmenin sınırı:** ${spec.why.boundary}`,
            },
            ...formulaBlocks(topic, spec.formulas),
            {
              id: idOf(topic, 'kesin-bilgi-notu'),
              type: 'teacher_note',
              tone: 'warning',
              body: `**Kesin bilgi:** ${spec.certainInfo}\n\nBir yöntemi kullanmadan önce şartını söyleyemiyorsan henüz yöntem seçme aşaması tamamlanmamıştır.`,
            },
          ],
        },
        {
          id: `${lessonId}-ornekler`,
          kind: 'deepen',
          title: 'İşlem laboratuvarı: sıfırdan seçiciye',
          lead: 'Yeni başlıyorsan Seviye 1’den ilerle. Temelin varsa Seviye 3’ten, çok iyiysen Seviye 4–5’ten başla; her örnekte işlemi, taktiği ve kontrolü birlikte izle.',
          blocks: [
            {
              id: idOf(topic, 'taktik'),
              type: 'process',
              title: `İşleme başlamadan: ${spec.tactic.title}`,
              intro: `${spec.tactic.logic}\n\n**Ne zaman kullanılır?** ${spec.tactic.works}\n\n**Hangi durumda dikkat?** ${spec.tactic.risk}`,
              steps: spec.tactic.steps,
            },
            ...exampleBlocks(topic, spec.examples),
            masteryChallengeBlock(topic, masteryExample, guidedQuestion.question, spec.tactic),
          ],
        },
        {
          id: `${lessonId}-tanima`,
          kind: 'deepen',
          title: 'Soru tanıma ve hata ayıklama',
          lead: 'Şimdi çözümlerde gördüğün yöntemi yeni soru biçimlerine taşı ve hangi hatanın hangi adımda oluştuğunu ayır.',
          blocks: [
            {
              id: idOf(topic, 'karar-agaci'),
              type: 'decision_tree',
              title: 'Şunu görüyorsan önce neyi kontrol et?',
              intro: spec.recognitionIntro,
              checks: spec.decisionTree,
              takeaway: spec.recognitionTakeaway,
            },
            {
              id: idOf(topic, 'sinav-bicimi'),
              type: 'exam',
              title: 'Geçmiş sorularda gözlenen sunum biçimleri',
              body: spec.osym.patternBody,
              patterns: spec.osym.patterns,
            },
            ...trapBlocks(topic, spec.traps),
          ],
        },
        {
          id: `${lessonId}-alistirma`,
          kind: 'practice',
          title: 'Yardım kapalı yeni sorular',
          lead: 'Bunlar ders notundaki rehberli örneğin tekrarı değildir. Önce yöntemi seç, sonra işlemi yap; çözüm ve hata analizi cevabından sonra açılır.',
          blocks: [
            ...practiceBlocks(topic, independentQuestions),
            {
              id: idOf(topic, 'osym-simulasyon'),
              type: 'osym_simulation',
              title: 'ÖSYM tarzında özgün örnek',
              passage: spec.simulation.passage,
              question: spec.simulation.question,
              options: spec.simulation.options,
              answer_index: spec.simulation.answer,
              stem_analysis: spec.simulation.stemAnalysis,
              critical_point: spec.simulation.criticalPoint,
              takeaway: `${spec.simulation.takeaway}\n\nBu soru sıfırdan yazılmıştır; gerçek ÖSYM sorusu değildir.`,
            },
          ],
        },
        {
          id: `${lessonId}-kapanis`,
          kind: 'close',
          title: 'Hızlı tekrar ve öz değerlendirme',
          lead: 'Özeti kapatıp ana kuralı, ilk hamleyi ve en tehlikeli hatayı söyle. Sonra seviyene uygun bir soruyu yardımsız yeniden çöz.',
          blocks: [
            {
              id: idOf(topic, 'ozet'),
              type: 'summary',
              title: 'Bir sayfalık hızlı tekrar',
              points: spec.summary,
            },
            {
              id: idOf(topic, 'oz-degerlendirme'),
              type: 'checkpoint',
              prompt: 'Konuyu kapatıp şu altı cümleyi kendin için değerlendir: Kavramı açıklayabiliyorum; soru tipini tanıyorum; yöntemi neden seçtiğimi biliyorum; sık hatayı ayırt ediyorum; orta düzey soruyu yardımsız çözüyorum; karma soruda konuyu fark ediyorum.',
              hint: 'Her cümle için “hayır / bazen / çoğunlukla / evet” de ve kanıt olarak bir soru numarası yaz.',
              answer: `**Eksik:** Hazır bulunuşluk ve kesin bilgiye dön.\n\n**Gelişiyor:** Çözümlü örnekleri kapatıp yeniden çöz.\n\n**Yeterli:** Orta ve ÖSYM tarzı soruları süre tutarak çöz.\n\n**İleri:** Konuyu başka bir başlıkla birleştiren karma sorulara geç.`,
            },
            {
              id: idOf(topic, 'sonraki'),
              type: 'next_step',
              body: spec.nextBody,
              topics: spec.connections,
            },
          ],
        },
      ],
    },
  }
}
