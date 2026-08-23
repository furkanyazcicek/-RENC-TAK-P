const normalizeId = (value) => value
  .toLocaleLowerCase('tr-TR')
  .replaceAll('ı', 'i')
  .replaceAll('ş', 's')
  .replaceAll('ğ', 'g')
  .replaceAll('ü', 'u')
  .replaceAll('ö', 'o')
  .replaceAll('ç', 'c')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '')

function conceptSection(topicId, concept, index) {
  const id = `${topicId}-${normalizeId(concept.name)}`
  return {
    id,
    kind: index === 0 ? 'build' : 'deepen',
    title: `${concept.name}: tanımdan paragrafı tanımaya`,
    lead: concept.lead || `Bu kavramı yalnızca adıyla değil, hangi soruya nasıl cevap verdiğiyle öğren.`,
    blocks: [
      {
        id: `${id}-concept`,
        type: 'concept',
        term: concept.name,
        body: `**Tanım:** ${concept.definition}\n\n**Basit anlatım:** ${concept.simple}`,
      },
      {
        id: `${id}-daily`,
        type: 'example',
        title: 'Günlük hayat örneği',
        body: concept.daily,
      },
      {
        id: `${id}-philosophical`,
        type: 'example',
        title: 'Felsefi örnek',
        body: concept.philosophical,
      },
      {
        id: `${id}-difference`,
        type: 'trap',
        title: `${concept.name} hangi kavramla karışır?`,
        wrong: concept.confusion,
        right: concept.difference,
      },
      {
        id: `${id}-clue`,
        type: 'question_clue',
        concept: concept.name,
        statement: concept.statement,
        clues: concept.clues,
        reasoning: concept.reasoning,
        boundary: concept.boundary,
      },
    ],
  }
}

function philosopherBlocks(topicId, philosophers = []) {
  return philosophers.map((item, index) => ({
    id: `${topicId}-philosopher-${index + 1}`,
    type: 'philosopher',
    ...item,
  }))
}

/**
 * TYT Felsefe notlarını aynı pedagojik omurgadan üretir.
 *
 * Veri dosyası yalnızca alan bilgisini taşır; "tanım → basit anlatım →
 * iki örnek → ayrım → soru ipucu → ÖSYM bakışı" sırası burada tek
 * kez kurulur. Böylece on bir konuda aynı JSX veya belge iskeleti kopyalanmaz.
 */
export function buildPhilosophyLesson(spec, order) {
  const topicId = normalizeId(spec.topic)
  const comparisonBlocks = (spec.comparisons ?? []).map((comparison, index) => ({
    id: `${topicId}-compare-${index + 1}`,
    type: 'compare',
    interactive: true,
    ...comparison,
  }))

  return {
    slug: `tyt-felsefe-${topicId}`,
    placement: { examType: 'TYT', subject: 'Felsefe', topic: spec.topic },
    order,
    partLabel: `${order}. Konu`,
    goldStandard: true,
    title: spec.title,
    subtitle: spec.subtitle,
    document: {
      version: 2,
      estimated_minutes: spec.minutes ?? 34,
      prerequisites: spec.prerequisites ?? [
        { topic: 'Paragrafta ana düşünce', why: 'Görüşü tek kelimeden değil, cümlenin kurduğu ana savdan yakalayacağız.' },
      ],
      outcomes: spec.outcomes,
      sections: [
        {
          id: `${topicId}-opening`,
          kind: 'opening',
          title: spec.openingTitle,
          lead: spec.openingLead,
          blocks: [
            { id: `${topicId}-overview`, type: 'prose', body: spec.overview },
            {
              id: `${topicId}-osym`,
              type: 'osym_insight',
              title: spec.osym.title,
              body: spec.osym.body,
              measures: spec.osym.measures,
            },
          ],
        },
        ...spec.concepts.map((concept, index) => conceptSection(topicId, concept, index)),
        {
          id: `${topicId}-comparisons`,
          kind: 'deepen',
          title: 'Kavramları yan yana koy: asıl ayrım nerede?',
          lead: 'Felsefe sorularında çeldirici genellikle tamamen ilgisiz değil, komşu bir kavramdır. Ayrım eksenini görmeden iki tanımı ezberlemek yetmez.',
          blocks: comparisonBlocks,
        },
        {
          id: `${topicId}-philosophers`,
          kind: 'deepen',
          title: 'Filozof → görüş → anahtar mantık → karşı görüş',
          lead: 'Burada doğum yılı ya da uzun biyografi yok. Filozofun bir paragrafta hangi akıl yürütmeyle kendini belli ettiğine bak.',
          blocks: philosopherBlocks(topicId, spec.philosophers),
        },
        {
          id: `${topicId}-practice`,
          kind: 'practice',
          title: 'Paragrafı görüşe çevir',
          lead: 'Soru köküne gitmeden önce paragrafın savını tek cümleye indir. Sonra bu savın hangi kavramsal soruya cevap verdiğini bul.',
          blocks: [
            {
              id: `${topicId}-flow`,
              type: 'argument_flow',
              title: spec.practice.title,
              claim: spec.practice.prompt,
              steps: spec.practice.steps,
              conclusion: spec.practice.answer,
              counter: spec.practice.counter,
            },
            {
              id: `${topicId}-checkpoint`,
              type: 'checkpoint',
              prompt: spec.checkpoint.prompt,
              hint: spec.checkpoint.hint,
              answer: spec.checkpoint.answer,
            },
          ],
        },
        {
          id: `${topicId}-close`,
          kind: 'close',
          title: 'Sık karıştırılanlar ve spot bilgiler',
          lead: 'Kapanışta isimleri değil karar kurallarını topla. Bir sonraki paragrafta işine yarayacak olan budur.',
          blocks: [
            {
              id: `${topicId}-final-trap`,
              type: 'trap',
              title: spec.finalTrap.title,
              wrong: spec.finalTrap.wrong,
              right: spec.finalTrap.right,
              body: spec.finalTrap.body,
            },
            {
              id: `${topicId}-summary`,
              type: 'summary',
              title: 'Spot bilgiler',
              points: spec.spots,
            },
            {
              id: `${topicId}-next`,
              type: 'next_step',
              body: spec.next.body,
              topics: spec.next.topics,
            },
          ],
        },
      ],
    },
  }
}

