/**
 * TYT TÜRKÇE DERS FABRİKASI
 *
 * Türkçe notlarının tümü aynı öğrenme omurgasını kullanır:
 * kavramı kur → karar algoritması → karşılaştır → özgün örnekte uygula →
 * ÖSYM'nin ölçtüğü beceriyi gör → mini kontrol yap. Sunum kararı yine
 * reader katmanındadır; bu dosya yalnızca semantik ders belgesi üretir.
 */

const blockId = (slug, section, name) => `${slug}-${section}-${name}`

function conceptBlocks(slug, concepts = []) {
  return concepts.map((item, index) => ({
    id: blockId(slug, 'kavram', `c${index + 1}`),
    type: 'concept',
    term: item.term,
    body: item.body,
  }))
}

function comparisonBlock(slug, comparison) {
  if (!comparison) return null
  return {
    id: blockId(slug, 'ayrim', 'karsilastirma'),
    type: 'compare',
    interactive: true,
    ...comparison,
  }
}

function decisionMap(slug, decision) {
  const nodes = decision.steps.map((step, index) => ({
    id: `adim-${index + 1}`,
    label: step.title,
    detail: step.body,
  }))
  return {
    id: blockId(slug, 'karar', 'harita'),
    type: 'concept_map',
    title: `${decision.title}: kısa yol haritası`,
    intro: 'Bu sıra ezberlenecek bir slogan değil; her adım bir önceki adımın sonucunu daraltır.',
    nodes,
    links: nodes.slice(0, -1).map((node, index) => ({
      from: node.id,
      to: nodes[index + 1].id,
      label: 'sonra',
    })),
    caption: decision.takeaway,
  }
}

export function createTurkishLesson(config) {
  const {
    slug,
    topic,
    order = 0,
    title,
    subtitle,
    minutes = 38,
    prerequisites = [],
    outcomes,
    opening,
    concepts,
    why,
    decision,
    comparison,
    deepDiveSections = [],
    example,
    trap,
    osym,
    checkpoint,
    quiz,
    summary,
    next = [],
  } = config

  const compare = comparisonBlock(slug, comparison)

  return {
    slug,
    // `foundation` etiketi şu anda yalnız biyolojiye özgü 3000 kelime / 4
    // bilimsel şekil kalite kapısını çalıştırıyor. Türkçe dersleri aynı
    // okuyucu ve ilerleme sisteminde etkileşimli modda yayımlanır; içerik
    // omurgası yine sıfırdan öğrenen öğrenci için temel düzeydedir.
    learningMode: 'interactive',
    placement: { examType: 'TYT', subject: 'Türkçe', topic },
    order,
    partLabel: 'Kavramdan soruya',
    title,
    subtitle,
    document: {
      version: 2,
      estimated_minutes: minutes,
      prerequisites: prerequisites.length
        ? prerequisites
        : [{ topic: 'Ön bilgi zorunlu değil', why: 'Konu, gerekli terimleri sıfırdan kurarak ilerler.' }],
      outcomes,
      sections: [
        {
          id: `${slug}-temel`,
          kind: 'opening',
          title: opening.title,
          lead: opening.lead,
          blocks: [
            { id: blockId(slug, 'temel', 'anlatim'), type: 'prose', body: opening.body },
            ...conceptBlocks(slug, concepts),
            {
              id: blockId(slug, 'temel', 'neden'),
              type: 'why',
              question: why.question,
              body: why.body,
            },
          ],
        },
        {
          id: `${slug}-karar`,
          kind: 'build',
          title: decision.title,
          lead: decision.lead,
          blocks: [
            {
              id: blockId(slug, 'karar', 'adimlar'),
              type: 'process',
              title: decision.title,
              intro: decision.intro,
              steps: decision.steps,
            },
            decisionMap(slug, decision),
            ...(compare ? [compare] : []),
            {
              id: blockId(slug, 'karar', 'hata'),
              type: 'trap',
              title: trap.title,
              wrong: trap.wrong,
              right: trap.right,
              body: trap.body,
            },
          ],
        },
        ...deepDiveSections.map((section, index) => ({
          kind: 'deepen',
          ...section,
          id: section.id || `${slug}-derinlesme-${index + 1}`,
        })),
        {
          id: `${slug}-uygulama`,
          kind: 'practice',
          title: 'Örnek üzerinde uygula',
          lead: 'Şimdi kuralı cümlenin veya parçanın içinde çalıştır. Sonuca değil, sonuca götüren ayrımlara dikkat et.',
          blocks: [
            {
              id: blockId(slug, 'uygulama', 'cozum'),
              type: 'worked_example',
              ...example,
            },
            {
              id: blockId(slug, 'uygulama', 'osym'),
              type: 'exam',
              title: 'ÖSYM Bu Konuda Neyi Ölçüyor?',
              body: osym.body,
              patterns: osym.patterns,
            },
            {
              id: blockId(slug, 'uygulama', 'kontrol'),
              type: 'checkpoint',
              ...checkpoint,
            },
          ],
        },
        {
          id: `${slug}-kapanis`,
          kind: 'close',
          title: 'Son kontrol',
          lead: 'Bir soruya geçmeden önce aşağıdaki ayrımları kendi cümlenle kurabildiğinden emin ol.',
          blocks: [
            {
              id: blockId(slug, 'kapanis', 'ozet'),
              type: 'summary',
              title: 'Kısa tekrar',
              points: summary,
            },
            {
              id: blockId(slug, 'kapanis', 'quiz'),
              type: 'quiz',
              purpose: quiz.purpose ?? 'apply',
              ...quiz,
            },
            {
              id: blockId(slug, 'kapanis', 'sonraki'),
              type: 'next_step',
              body: 'Bu konuyu kalıcı hâle getirmek için önce karar adımlarını kapalıyken yeniden söyle, sonra kısa ve gerekçeli sorular çöz.',
              topics: next,
            },
          ],
        },
      ],
    },
  }
}
