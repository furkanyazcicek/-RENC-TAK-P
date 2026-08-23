const SUBJECT = 'Din Kültürü ve Ahlak Bilgisi'

function idFor(slug, suffix) {
  return `dkab-${slug}-${suffix}`
}

function conceptMap(slug, concepts) {
  const nodes = concepts.slice(0, 5).map((concept, index) => ({
    id: `${slug}-k${index + 1}`,
    label: concept.term,
    detail: concept.short ?? concept.body,
  }))

  return {
    id: idFor(slug, 'iliski'),
    type: 'concept_map',
    title: 'Kavramlar arası ilişki',
    intro: 'Kavramları tek tek ezberlemek yerine aralarındaki yönü izle. Ok, iki kelimenin aynı olduğunu değil birinin diğerini nasıl tamamladığını gösterir.',
    nodes,
    links: nodes.slice(0, -1).map((node, index) => ({
      from: node.id,
      to: nodes[index + 1].id,
      label: concepts[index]?.link ?? 'ilişkilidir',
    })),
    caption: 'Soruda bir kavram açıkça yazmasa bile bu ilişkilerden hareketle vurguyu bulabilirsin.',
  }
}

function interpretationBlocks(slug, config) {
  return [
    {
      id: idFor(slug, 'yorum-yontemi'),
      type: 'process',
      title: 'Ayet / hadis / yorum sorusunda dört durak',
      intro: 'Metni ezberden tanımaya çalışma. Önce metnin kurduğu düşünceyi bul, sonra seçeneklere geç.',
      steps: [
        { title: 'Eylemi bul', body: 'Metin insandan ne yapmasını veya neden kaçınmasını istiyor? Fiilleri ve karşıtlıkları işaretle.' },
        { title: 'Gerekçeyi bul', body: 'Davranış hangi düşünceye dayanıyor: sorumluluk, adalet, ölçülülük, güven, bilgi, özgür irade ya da dayanışma mı?' },
        { title: 'Ana kavramı adlandır', body: 'Metindeki örneği en geniş ve doğru kavramla eşleştir. Tek bir kelime benziyor diye daha dar seçeneğe gitme.' },
        { title: 'Seçeneği sınırla', body: 'Metinde olmayan hükmü ekleyen, aşırı genelleyen veya kavramı tersine çeviren seçeneği ele.' },
      ],
    },
    {
      id: idFor(slug, 'yorum-ornek'),
      type: 'worked_example',
      title: config.interpretation.title,
      prompt: config.interpretation.prompt,
      steps: [
        { title: 'Metindeki işaret', body: config.interpretation.signal },
        { title: 'Kavram eşleştirmesi', body: config.interpretation.match },
        { title: 'Çeldirici kontrolü', body: config.interpretation.distractor },
      ],
      answer: config.interpretation.answer,
      takeaway: config.interpretation.takeaway,
    },
  ]
}

/**
 * Din Kültürü notlarının ortak pedagojik omurgası.
 * İçerik sunum sınıfı seçmez; mevcut LessonReader semantik blokları
 * Biyoloji notlarıyla aynı tipografi, tablo ve etkileşim dilini uygular.
 */
export function createReligionLesson(config) {
  const slug = config.slug
  const conceptRows = config.concepts.map((concept) => [concept.term, concept.short ?? concept.body])

  return {
    slug,
    placement: { examType: 'TYT', subject: SUBJECT, topic: config.topic },
    order: 1,
    partLabel: 'Kavram + yorum',
    title: config.title,
    subtitle: config.subtitle,
    document: {
      version: 2,
      estimated_minutes: config.minutes ?? 24,
      prerequisites: config.prerequisites ?? [
        { topic: 'Temel dinî kavramlar', why: 'Kavramları günlük anlamlarıyla değil ders bağlamındaki anlamlarıyla ayıracağız.' },
      ],
      outcomes: config.outcomes,
      sections: [
        {
          id: idFor(slug, 'on-bilgi'),
          kind: 'opening',
          title: 'Ön Bilgi: Sorunun merkezini kur',
          lead: config.lead,
          blocks: [
            { id: idFor(slug, 'giris'), type: 'prose', body: config.intro },
            {
              id: idFor(slug, 'okuma-pusulasi'),
              type: 'prose',
              body: `Bu notu çalışırken üç ayrı katmanı birbirine karıştırma. **Tanım katmanı**, kavramın ne olduğunu söyler. **Sınır katmanı**, ona benzeyen kavramdan nerede ayrıldığını gösterir. **Yorum katmanı** ise tanımı yeni bir metin veya olayda kullanmanı ister.

Örneğin bir davranışta hem yardım hem sorumluluk bulunabilir. Soru “hangi kavram vardır?” demek yerine “asıl vurgu hangisidir?” dediğinde davranışın amacına bakmalısın. Maddi paylaşım öndeyse yardım; bir görevin gereğini yerine getirme öndeyse sorumluluk merkezde olabilir. Yani bir metinde birden fazla doğru kavram bulunması, hepsinin sorunun cevabı olduğu anlamına gelmez.`,
            },
            { id: idFor(slug, 'neden'), type: 'why', question: config.why.question, body: config.why.body },
            {
              id: idFor(slug, 'on-not'),
              type: 'teacher_note',
              tone: 'exam',
              body: 'TYT çoğu zaman tanımın kendisini değil, tanımın yeni bir olay veya kısa metin içindeki karşılığını ölçer. Bu yüzden her kavram için “hangi durumda bunu söylerim?” sorusunu da cevapla.',
            },
          ],
        },
        {
          id: idFor(slug, 'kavramlar'),
          kind: 'build',
          title: 'Kavramlar: Adını değil sınırını öğren',
          lead: 'Bir kavramı bilmek, ona benzeyen kavramdan hangi ölçütle ayrıldığını söyleyebilmektir.',
          blocks: [
            {
              id: idFor(slug, 'kavram-siniri'),
              type: 'prose',
              body: `Her kavramı dört soruyla sınayabilirsin:

1. **Kaynağı ne?** İnanç, bilgi, niyet, davranış veya toplumsal kurum mu?
2. **İnsandan ne bekliyor?** Bilmek, seçmek, sakınmak, yapmak, güvenmek ya da paylaşmak mı?
3. **Karşıtı ne?** Kavramı bozan davranışı bulmak sınırı görünür kılar.
4. **En yakın kavramdan farkı ne?** TYT çeldiricisi çoğunlukla bu son ayrımda kurulur.

Bir tanımı kendi cümlenle söylerken kavramın adını kullanmadan anlatmayı dene. Sonra bu açıklamaya uyan bir örnek ve uymayan bir karşı örnek yaz. Bunu yapabiliyorsan kelimeyi değil anlamı öğrenmişsindir.

Tabloyu tekrar ederken satırları kapatıp yalnız kavram adına bak. Ayırt edici anlamı tek cümlede geri çağır; ardından “bu kavram ne değildir?” sorusuna cevap ver. Olumsuz sınırı kurmak, yakın kavramların birbirine karışmasını önler ve yorum sorusunda daha hızlı karar vermeni sağlar.`,
            },
            ...config.concepts.map((concept, index) => ({
              id: idFor(slug, `kavram-${index + 1}`),
              type: 'concept',
              term: concept.term,
              body: concept.body,
            })),
            {
              id: idFor(slug, 'kavram-tablosu'),
              type: 'table',
              title: 'Hızlı kavram tablosu',
              interactive: true,
              columns: ['Kavram', 'Ayırt edici anlam'],
              rows: conceptRows,
              caption: 'İlk sütundaki kavrama dokunarak satırı odaklayabilirsin.',
            },
          ],
        },
        {
          id: idFor(slug, 'anlatim'),
          kind: 'deepen',
          title: 'Basit Anlatım ve Kavramlar Arası İlişki',
          lead: config.simpleLead,
          blocks: [
            { id: idFor(slug, 'anlatim-metni'), type: 'prose', body: config.explanation },
            {
              id: idFor(slug, 'iliski-okuma'),
              type: 'prose',
              body: `Kavram ilişkisini okurken “A varsa mutlaka B vardır.” biçiminde acele bir sonuç kurma. Bazı ilişkiler **koşul** bildirir: sorumluluk için irade gerekir. Bazıları **sonuç** bildirir: ibadet öz denetimi destekleyebilir. Bazıları da **alan ayrımı** yapar: bilim ve din farklı yöntemlerle farklı sorulara cevap verebilir.

ÖSYM’nin güçlü çeldiricileri bu ilişki yönünü ters çevirir, “katkı sağlar” ifadesini “tek sebebidir” diye büyütür veya bir örneği bütün durumlara geneller. “Her zaman, yalnızca, mutlaka, bütünüyle” gibi kesinlik bildiren sözleri görünce metnin gerçekten bu kadar güçlü bir hüküm kurup kurmadığını kontrol et.`,
            },
            conceptMap(slug, config.concepts),
            { id: idFor(slug, 'ornek'), type: 'example', title: config.example.title, body: config.example.body },
            {
              id: idFor(slug, 'baglanti'),
              type: 'connection',
              title: 'Bu bilgi nereye bağlanıyor?',
              body: config.connection.body,
              links: config.connection.links,
            },
          ],
        },
        {
          id: idFor(slug, 'karsilastirma'),
          kind: 'practice',
          title: 'Sık Karıştırılanlar ve ÖSYM Bakışı',
          lead: 'Çeldirici çoğu zaman bütünüyle yanlış değildir; doğru kavramın yerine yakın ama farklı bir kavram koyar.',
          blocks: [
            {
              id: idFor(slug, 'kiyas'),
              type: 'compare',
              title: config.compare.title,
              interactive: true,
              columns: config.compare.columns,
              rows: config.compare.rows,
              insight: config.compare.insight,
            },
            ...(config.extraComparisons ?? []).map((comparison, index) => ({
              id: idFor(slug, `ek-kiyas-${index + 1}`),
              type: 'compare',
              title: comparison.title,
              interactive: true,
              columns: comparison.columns,
              rows: comparison.rows,
              insight: comparison.insight,
            })),
            {
              id: idFor(slug, 'tuzak'),
              type: 'trap',
              title: config.trap.title,
              wrong: config.trap.wrong,
              right: config.trap.right,
              body: config.trap.body,
            },
            {
              id: idFor(slug, 'osym'),
              type: 'exam',
              title: 'ÖSYM Bu Konuda Neyi Ölçüyor?',
              body: config.exam.body,
              patterns: config.exam.patterns,
            },
            ...interpretationBlocks(slug, config),
          ],
        },
        {
          id: idFor(slug, 'spotlar'),
          kind: 'close',
          title: 'Spot Bilgiler ve Kendini Yokla',
          lead: 'Bu bölüm kısa tekrar içindir. Her maddeyi kendi örneğinle açıklayabiliyorsan konu oturmuştur.',
          blocks: [
            { id: idFor(slug, 'ozet'), type: 'summary', title: 'Spot bilgiler', points: config.spots },
            {
              id: idFor(slug, 'aktif-tekrar'),
              type: 'prose',
              body: `**Bir dakikalık aktif tekrar**

Notu kapat ve şu cümleleri tamamla:

- Bu konunun merkez kavramı …; çünkü …
- En çok karışan iki kavram … ve …; aralarındaki temel ölçüt …
- Bir ayet veya yorum metninde … ifadesini görürsem önce … kavramını kontrol ederim.
- Bu konuda yanlış olan kesin genelleme …

Cevabın yalnız kavram adlarından oluşuyorsa henüz tanıma düzeyindesin. Her cevaba kısa bir gerekçe ve örnek ekleyebiliyorsan yorum düzeyine geçmişsin. Son olarak kendi örneğinin karşı örneğini kur: hangi küçük değişiklik cevabı başka bir kavrama dönüştürür? Bu işlem çeldiriciye karşı en etkili kontroldür.

**Son kontrol:** Seçtiğin cevabı metinden bir kanıtla destekle. Sonra diğer seçeneklerin neden elendiğini birer cümleyle söyle. “Bu seçenek yanlış” demek yetmez; metne göre fazla dar mı, fazla geniş mi, ilişkiyi ters mi kuruyor, yoksa konu dışı mı olduğunu belirle. Özellikle doğru bilgi içeren fakat sorunun ana düşüncesini karşılamayan seçeneklere dikkat et. TYT yorum sorusunda başarı, yalnız doğruyu tanımaktan değil en uygun cevabı gerekçeli biçimde seçmekten gelir.`,
            },
            {
              id: idFor(slug, 'quiz'),
              type: 'quiz',
              question: config.quiz.question,
              options: config.quiz.options,
              answer_index: config.quiz.answerIndex,
              explanation: config.quiz.explanation,
              purpose: 'apply',
            },
            {
              id: idFor(slug, 'sonraki'),
              type: 'next_step',
              body: config.next.body,
              topics: config.next.topics,
            },
          ],
        },
      ],
    },
  }
}
