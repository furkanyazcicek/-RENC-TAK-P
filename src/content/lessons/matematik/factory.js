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

function exampleBlocks(topic, examples) {
  return examples.map((example, index) => ({
    id: idOf(topic, `ornek-${index + 1}`),
    type: 'worked_example',
    title: example.title,
    prompt: example.prompt,
    steps: example.steps,
    answer: example.answer,
    takeaway: `${example.takeaway}\n\n**Sonuç kontrolü:** ${example.check}`,
  }))
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
    partLabel: `${order}. Konu · TYT Matematik`,
    learningMode: 'interactive',
    goldStandard: true,
    qualityProfile: 'default',
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
          lead: 'Soruları önce yardım almadan cevapla. Yanlış, bu ders için bir etiket değil; hangi basamağın onarılacağını gösteren veridir.',
          blocks: readinessBlocks(topic, spec.readiness),
        },
        {
          id: `${lessonId}-temel`,
          kind: 'build',
          title: 'Kesin bilgi, anlam ve kullanım şartları',
          lead: 'Kuralı yalnız yazmak yetmez. Ne anlattığını, neden çalıştığını ve hangi koşulda bozulduğunu birlikte kur.',
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
          title: 'Kolaydan seçiciye çözümlü örnekler',
          lead: 'Her çözümde verilen, istenen, yöntem seçimi ve kontrol ayrı görünür. İşlem kısaldıkça gerekçe kaybolmaz.',
          blocks: exampleBlocks(topic, spec.examples),
        },
        {
          id: `${lessonId}-tanima`,
          kind: 'deepen',
          title: 'Soru tanıma rehberi ve DRKOÇ taktiği',
          lead: 'Soru tipi ezberlemek yerine verilenlerin hangi ilişkiyi kurduğunu fark et. Karar ağacı yöntemi seçtirir; sonucu garanti eden yine koşulları doğru uygulamandır.',
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
              id: idOf(topic, 'taktik'),
              type: 'process',
              title: `DRKOÇ taktiği: ${spec.tactic.title}`,
              intro: `${spec.tactic.logic}\n\n**İşe yarar:** ${spec.tactic.works}\n\n**Riskli veya işe yaramaz:** ${spec.tactic.risk}`,
              steps: spec.tactic.steps,
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
          title: 'Konu alıştırmaları',
          lead: 'Seçeneği işaretlemeden önce yöntemi bir cümleyle adlandır. Çözüm ve hata analizi, cevabını verdikten sonra açılır.',
          blocks: [
            ...practiceBlocks(topic, spec.questions),
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
          lead: 'Kapanışın amacı yeni bilgi eklemek değil, soru görünce hangi düşünme sırasını çalıştıracağını sabitlemektir.',
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
