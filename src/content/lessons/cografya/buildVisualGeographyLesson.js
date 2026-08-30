/**
 * Gold Standard coğrafya notlarının ortak içerik grameri.
 * Konu dosyaları yalnızca bilimsel içerik ve görsel konfigürasyon taşır;
 * öğrenme sırası ve blok rolleri burada tutarlı kalır.
 */
export function buildVisualGeographyLesson(topic) {
  const id = topic.id
  return {
    slug: topic.slug,
    placement: { examType: 'TYT', subject: 'Coğrafya', topic: topic.topic },
    order: 1,
    learningMode: 'interactive',
    partLabel: `Görsel Atlas · ${topic.sequence}. Konu`,
    title: topic.title,
    subtitle: topic.subtitle,
    document: {
      version: 2,
      estimated_minutes: topic.minutes || 46,
      prerequisites: topic.prerequisites,
      outcomes: topic.outcomes,
      sections: [
        {
          id: `${id}-opening`, kind: 'opening', title: topic.openingTitle, lead: topic.openingLead,
          blocks: [
            {
              id: `${id}-atlas`, type: 'figure', kind: 'cografya-etkilesimli-atlas', width: 'full',
              title: topic.atlasTitle, caption: topic.atlasCaption, purpose: topic.atlasPurpose,
              data: { label: topic.atlasLabel, image: topic.image, imageAlt: topic.imageAlt, hotspots: topic.hotspots, tyt: topic.atlasTyt },
            },
            { id: `${id}-overview`, type: 'prose', body: topic.overview },
            { id: `${id}-opening-note`, type: 'teacher_note', tone: 'exam', body: topic.teacherNote },
          ],
        },
        {
          id: `${id}-concepts`, kind: 'build', title: topic.conceptSectionTitle, lead: topic.conceptSectionLead,
          blocks: [
            { id: `${id}-concept`, type: 'concept', term: topic.concept.term, body: topic.concept.body },
            { id: `${id}-why`, type: 'why', question: topic.why.question, body: topic.why.body },
            { id: `${id}-compare`, type: 'compare', title: topic.compare.title, columns: topic.compare.columns, rows: topic.compare.rows, insight: topic.compare.insight },
            { id: `${id}-concept-reinforcement`, type: 'prose', body: topic.reinforcement.concept },
          ],
        },
        {
          id: `${id}-mechanism`, kind: 'deepen', title: topic.mechanismSectionTitle, lead: topic.mechanismSectionLead,
          blocks: [
            {
              id: `${id}-process`, type: 'figure', kind: 'cografya-surec-seridi', width: 'full',
              title: topic.process.captionTitle, caption: topic.process.caption, purpose: topic.process.purpose,
              data: { title: topic.process.title, intro: topic.process.intro, steps: topic.process.steps, tyt: topic.process.tyt },
            },
            {
              id: `${id}-flow`, type: 'figure', kind: 'cografya-neden-sonuc-akisi', width: 'full',
              title: topic.flow.title, caption: topic.flow.caption, purpose: topic.flow.purpose,
              data: { steps: topic.flow.steps, inference: topic.flow.inference },
            },
            { id: `${id}-deep-dive`, type: 'prose', body: topic.deepDive },
          ],
        },
        {
          id: `${id}-practice`, kind: 'practice', title: topic.practiceSectionTitle, lead: topic.practiceSectionLead,
          blocks: [
            { id: `${id}-example`, type: 'worked_example', ...topic.example },
            { id: `${id}-trap`, type: 'trap', ...topic.trap },
            { id: `${id}-checkpoint`, type: 'checkpoint', ...topic.checkpoint },
            { id: `${id}-practice-reinforcement`, type: 'prose', body: topic.reinforcement.practice },
          ],
        },
        {
          id: `${id}-close`, kind: 'close', title: topic.closeTitle, lead: topic.closeLead,
          blocks: [
            { id: `${id}-quiz`, type: 'quiz', ...topic.quiz, purpose: 'apply' },
            { id: `${id}-osym`, type: 'osym_insight', ...topic.osym },
            { id: `${id}-close-reinforcement`, type: 'teacher_note', tone: 'connection', body: topic.reinforcement.close },
            { id: `${id}-summary`, type: 'summary', title: 'Bir dakikalık zihinsel harita', points: topic.summary, body: topic.summaryBody },
            { id: `${id}-next`, type: 'next_step', body: topic.next.body, topics: topic.next.topics },
          ],
        },
      ],
    },
  }
}
