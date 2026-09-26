/** 2026-2027 sekizinci sınıf programına bağlı, konuya özgü LGS matematik anlatımı. */
const id = (slug, part) => `${slug}-${part}`

export function createLgsMathLesson(spec) {
  const {
    slug, topic, order, minutes, codes, scope, outcomes, lead, introduction,
    why, concepts, quickFacts, map, method, formula, examples, traps,
    checkpoints, exam, simulation, quizzes, finalFacts, next,
  } = spec

  return {
    slug,
    placement: { examType: 'LGS', subject: 'Matematik', topic },
    order,
    partLabel: '8. sınıf · Matematik',
    learningMode: 'interactive',
    qualityProfile: 'math',
    title: topic,
    subtitle: lead,
    kazanimlar: codes,
    document: {
      version: 2,
      estimated_minutes: minutes,
      prerequisites: [{ topic: '7. sınıf sayı ve işlem bilgisi', why: 'İşlemlerin anlamını ve doğal sayıları kullanmak için gerekir.' }],
      outcomes,
      sections: [
        {
          id: id(slug, 'giris'), kind: 'opening', title: topic, lead,
          blocks: [
            { id: id(slug, 'kaynak'), type: 'teacher_note', tone: 'exam', body: `MEB Matematik Dersi Öğretim Programı (2018), 8. sınıf: ${codes.join(', ')}. ${scope} 2026-2027 yılında 8. sınıfta bu program uygulanır.` },
            { id: id(slug, 'giris-anlatim'), type: 'prose', body: introduction },
            { id: id(slug, 'neden'), type: 'why', question: why.question, body: why.body },
          ],
        },
        {
          id: id(slug, 'temel'), kind: 'build', title: 'Temel ayrımlar',
          lead: 'Tanımı hemen bir karşı örnekle sınayarak ilerle.',
          blocks: [
            ...concepts.map((item, index) => ({ id: id(slug, `kavram-${index + 1}`), type: 'concept', ...item })),
            { id: id(slug, 'ilk-haplar'), type: 'summary', title: 'Şimdi bil', points: quickFacts },
          ],
        },
        {
          id: id(slug, 'yontem'), kind: 'build', title: method.title,
          lead: method.lead,
          blocks: [
            { id: id(slug, 'harita'), type: 'concept_map', title: map.title, intro: map.intro, nodes: map.nodes, links: map.links, caption: map.caption },
            { id: id(slug, 'karar'), type: 'decision_tree', title: method.title, intro: method.intro, checks: method.checks, takeaway: method.takeaway },
            { id: id(slug, 'formul'), type: 'formula', ...formula },
          ],
        },
        {
          id: id(slug, 'ornekler'), kind: 'practice', title: 'İşlemi görünür yap',
          lead: 'Önce neden bu yöntemi seçtiğini söyle, sonra hesabı tamamla.',
          blocks: [
            ...examples.map((item, index) => ({ id: id(slug, `ornek-${index + 1}`), type: 'worked_example', ...item })),
            ...traps.map((item, index) => ({ id: id(slug, `tuzak-${index + 1}`), type: 'trap', ...item })),
          ],
        },
        {
          id: id(slug, 'dur-dusun'), kind: 'practice', title: 'Kendin dene',
          lead: 'Cevabı açmadan önce işlemini ve kontrolünü yaz.',
          blocks: checkpoints.map((item, index) => ({ id: id(slug, `kontrol-${index + 1}`), type: 'checkpoint', ...item })),
        },
        {
          id: id(slug, 'sinav'), kind: 'practice', title: 'LGS sorusunda kullan',
          lead: 'Özgün soruda bilgi, karar ve işlem aynı anda gerekiyor.',
          blocks: [
            { id: id(slug, 'sinav-olcum'), type: 'osym_insight', exam: 'LGS', ...exam },
            { id: id(slug, 'sinav-uygulama'), type: 'osym_simulation', exam: 'LGS', ...simulation },
          ],
        },
        {
          id: id(slug, 'kapanis'), kind: 'close', title: 'Hızlı tekrar',
          lead: 'Kuralı ezber olarak değil, hangi durumda kullanılacağını söyleyerek bitir.',
          blocks: [
            { id: id(slug, 'son-haplar'), type: 'summary', title: 'Nokta atışı bilgiler', points: finalFacts },
            ...quizzes.map((item, index) => ({ id: id(slug, `quiz-${index + 1}`), type: 'quiz', ...item })),
            { id: id(slug, 'sonraki'), type: 'next_step', body: next.body, topics: next.topics },
          ],
        },
      ],
    },
  }
}
