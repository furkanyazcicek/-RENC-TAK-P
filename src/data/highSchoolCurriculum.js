/**
 * Ortaöğretim koleksiyonları
 *
 * Kaynak: T.C. Millî Eğitim Bakanlığı, Türkiye Yüzyılı Maarif Modeli
 * resmî öğretim programları kataloğu (2026 revizyonları).
 * Doğrulama tarihi: 24.08.2026
 * https://tymm.meb.gov.tr/ogretim-programlari/
 *
 * Bu veri veritabanındaki sınav müfredatının yerine geçmez. Salt okunur
 * bir collection katmanıdır. Bir sınıf konusu ile mevcut TYT/AYT konusu aynı
 * ada sahipse `createGradeLibraryData` mevcut konu kimliğini referanslar; notu
 * veya soru setini kopyalamaz.
 */

export const HIGH_SCHOOL_CURRICULUM_META = Object.freeze({
  authority: 'T.C. Millî Eğitim Bakanlığı',
  model: 'Türkiye Yüzyılı Maarif Modeli',
  programVersion: '2026 resmî öğretim programları',
  verifiedAt: '2026-08-24',
  sourceUrl: 'https://tymm.meb.gov.tr/ogretim-programlari/',
})

const curriculum = {
  9: [
    ['Matematik', ['Sayılar', 'Nicelikler ve Değişimler', 'Geometrik Şekiller', 'Eşlik ve Benzerlik', 'Algoritma ve Bilişim', 'İstatistiksel Araştırma Süreci', 'Veriden Olasılığa']],
    ['Fizik', ['Fizik Bilimi ve Kariyer Keşfi', 'Kuvvet ve Hareket', 'Akışkanlar', 'Enerji']],
    ['Kimya', ['Etkileşim', 'Çeşitlilik', 'Sürdürülebilirlik']],
    ['Biyoloji', ['Yaşam', 'Organizasyon']],
    ['Türk Dili ve Edebiyatı', ['Sözün İnceliği', 'Anlam Arayışı', 'Anlamın Yapı Taşları', 'Dilin Zenginliği']],
    ['Tarih', ['Geçmişin İnşa Sürecinde Tarih', 'Eski Çağ Medeniyetleri', 'Orta Çağ Medeniyetleri']],
    ['Coğrafya', ['Coğrafyanın Doğası', 'Mekânsal Bilgi Teknolojileri', 'Doğal Sistemler ve Süreçler', 'Beşerî Sistemler ve Süreçler', 'Ekonomik Faaliyetler ve Etkileri', 'Afetler ve Sürdürülebilir Çevre', 'Bölgeler, Ülkeler ve Küresel Bağlantılar']],
    ['Din Kültürü ve Ahlak Bilgisi', ['Allah-İnsan İlişkisi', 'İslam’da İnanç Esasları', 'İslam’da İbadetler', 'İslam’da Ahlak İlkeleri', 'Kur’an’a Göre Hz. Muhammed']],
    ['İngilizce', ['School Life', 'Classroom Life', 'Personal Life: Physical Appearance & Personality', 'Family Life', 'Life in the House & Neighbourhood', 'Life in the City & Country', 'Life in the World & Nature', 'Life in the Universe & Future']],
  ],
  10: [
    ['Matematik', ['Geometrik Şekiller', 'İstatistiksel Araştırma Süreci', 'Sayılar', 'Nicelikler ve Değişimler', 'Sayma, Algoritma ve Bilişim', 'Analitik İnceleme', 'Veriden Olasılığa']],
    ['Fizik', ['Kuvvet ve Hareket', 'Enerji', 'Elektrik', 'Dalgalar']],
    ['Kimya', ['Etkileşim', 'Çeşitlilik', 'Sürdürülebilirlik']],
    ['Biyoloji', ['Enerji', 'Ekoloji']],
    ['Türk Dili ve Edebiyatı', ['Sözün Ezgisi', 'Kelimelerin Ritmi', 'Dünden Bugüne', 'Nesillerin Mirası']],
    ['Tarih', ['Türkistan’dan Türkiye’ye (1040-1299)', 'Beylikten Devlete Osmanlı (1299-1453)', 'Cihan Devleti Osmanlı (1453-1683)']],
    ['Coğrafya', ['Coğrafyanın Doğası', 'Mekânsal Bilgi Teknolojileri', 'Doğal Sistemler ve Süreçler', 'Beşerî Sistemler ve Süreçler', 'Ekonomik Faaliyetler ve Etkileri', 'Afetler ve Sürdürülebilir Çevre', 'Bölgeler, Ülkeler ve Küresel Bağlantılar']],
    ['Felsefe', ['Felsefenin Doğası', 'Felsefe, Mantık ve Argümantasyon', 'Varlık Felsefesi', 'Bilgi Felsefesi', 'Ahlak Felsefesi', 'Estetik ve Sanat Felsefesi', 'Siyaset Felsefesi', 'Din Felsefesi', 'Bilim Felsefesi']],
    ['Din Kültürü ve Ahlak Bilgisi', ['İslam’da Varlık ve Bilgi', 'Allah’ı Tanımak', 'İslam’ın Evrensel Mesajları', 'Din, Çevre ve Teknoloji', 'İslam Düşüncesinde İtikadi-Siyasi ve Fıkhi Yorumlar']],
    ['İngilizce', ['School Life & Education', 'Classroom Life & Learning', 'Personal Life & Well-Being', 'Family Life & Home', 'Life in the Neighbourhood, City & Social Life', 'Life in the World & Culture', 'Life in Nature & Global Problems', 'Life in the Universe & the Future']],
  ],
  11: [
    ['Matematik', ['İstatistiksel Araştırma Süreci', 'Geometrik Şekiller', 'Nicelikler ve Değişimler (1)', 'Nicelikler ve Değişimler (2)', 'Nicelikler ve Değişimler (3)']],
    ['Fizik', ['Kuvvet ve Hareket', 'Elektrik ve Manyetizma', 'Optik']],
    ['Kimya', ['Etkileşim', 'Çeşitlilik', 'Sürdürülebilirlik']],
    ['Biyoloji', ['Tepki', 'Homeostazi']],
    ['Türk Dili ve Edebiyatı', ['Bir Diyeceğim Var!', 'Kültür Yolculuğu', 'Yaşamın İzinde', 'Hayatın Aynası']],
    ['Tarih', ['Değişen Dünyada Osmanlı Devleti (1683-1789)', 'Dönüşüm Sürecinde Osmanlı (1789-1908)', 'Savaşlar Sarmalında Osmanlı (1908-1918)']],
    ['Coğrafya', ['Coğrafyanın Doğası', 'Mekânsal Bilgi Teknolojileri', 'Doğal Sistemler ve Süreçler', 'Beşerî Sistemler ve Süreçler', 'Ekonomik Faaliyetler ve Etkileri', 'Afetler ve Sürdürülebilir Çevre', 'Bölgeler, Ülkeler ve Küresel Bağlantılar']],
    ['Felsefe', ['Çevre Sorunları ve Felsefe', 'Teknoloji ve Hayat', 'Akıl ve İnanç', 'Edebiyat ve Felsefe', 'Hayatın Anlamı', 'Hukuk ve Felsefe']],
    ['Din Kültürü ve Ahlak Bilgisi', ['Kader, İrade ve Sorumluluk', 'Din, Felsefe, Bilim ve Sanat', 'İslam Medeniyeti ve Gönül Coğrafyamız', 'İnançla İlgili Meseleler', 'Yahudilik ve Hristiyanlık']],
    ['İngilizce', ['School Life & Education', 'Classroom Life & Learning', 'Personal Life & Well-Being', 'Family Life & Home', 'Life in the Neighbourhood, City & Social Life', 'Life in the World & Culture', 'Life in Nature & Global Problems', 'Life in the Universe & Future']],
  ],
  12: [
    ['Matematik', ['Nicelikler ve Değişimler (1)', 'Nicelikler ve Değişimler (2)', 'Geometrik Şekiller', 'Geometrik Cisimler', 'Değişimin Matematiği (1)', 'Değişimin Matematiği (2)', 'Değişimin Matematiği (3)', 'Hazır Veriler Üzerinde Çalışma']],
    ['Fizik', ['Kuvvet ve Hareket', 'Enerji', 'Dalgalar', 'Madde ve Doğası']],
    ['Kimya', ['Etkileşim', 'Çeşitlilik', 'Sürdürülebilirlik']],
    ['Biyoloji', ['Üreme', 'Gen']],
    ['Türk Dili ve Edebiyatı', ['Benim Yolculuğum', 'Toplumun Ahengi', 'Hayatın Dengesi', 'Hayalimdeki Yarın']],
    ['T.C. İnkılap Tarihi ve Atatürkçülük', ['Modern Türk Devletinin Doğuşu', 'Türk İnkılabı ve Atatürkçülük', 'II. Dünya Savaşı’ndan Küreselleşme Sürecine Türkiye']],
    ['Coğrafya', ['Coğrafyanın Doğası', 'Mekânsal Bilgi Teknolojileri', 'Doğal Sistemler ve Süreçler', 'Beşerî Sistemler ve Süreçler', 'Ekonomik Faaliyetler ve Etkileri', 'Afetler ve Sürdürülebilir Çevre', 'Bölgeler, Ülkeler ve Küresel Bağlantılar']],
    ['Din Kültürü ve Ahlak Bilgisi', ['Kur’an-ı Kerim', 'Din ve Aile', 'Güncel Dinî Meseleler', 'İslam Düşüncesinde Tasavvufi Yorumlar', 'Hint ve Çin Dinleri']],
    ['İngilizce', ['School Life, Classroom Life & Education', 'Personal Life & Well-Being', 'Family Life & Home', 'City & Social Life', 'Life in the Cultural and Natural World', 'Life in the Universe & Future']],
  ],
}

export const GRADE_COLLECTIONS = Object.freeze(
  [9, 10, 11, 12].map((grade) => ({
    key: `SINIF-${grade}`,
    grade,
    label: `${grade}. Sınıf`,
    hint: `${curriculum[grade].length} ders · MEB 2026`,
  }))
)

const SUBJECT_ALIASES = {
  'Türk Dili ve Edebiyatı': ['Türk Dili ve Edebiyatı', 'Edebiyat'],
  'T.C. İnkılap Tarihi ve Atatürkçülük': ['T.C. İnkılap Tarihi ve Atatürkçülük'],
}

function comparable(value = '') {
  return String(value)
    .toLocaleLowerCase('tr-TR')
    .replace(/[‘’']/g, '')
    .replace(/[ıİ]/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

export function isGradeCollectionKey(value) {
  return /^SINIF-(9|10|11|12)$/.test(String(value ?? '').toUpperCase())
}

export function gradeCollectionFor(value) {
  const key = String(value ?? '').toUpperCase()
  return GRADE_COLLECTIONS.find((collection) => collection.key === key) ?? null
}

export function topicSourceIds(topic) {
  return topic?.source_topic_ids?.length ? topic.source_topic_ids : topic?.id ? [topic.id] : []
}

/** Veritabanındaki sınav verisini değiştirmeden sınıf koleksiyonları üretir. */
export function createGradeLibraryData(remoteSubjects = [], remoteTopics = []) {
  const subjects = []
  const topics = []

  for (const collection of GRADE_COLLECTIONS) {
    curriculum[collection.grade].forEach(([subjectName, topicNames], subjectIndex) => {
      const subjectId = `grade-${collection.grade}-subject-${comparable(subjectName).replace(/ /g, '-')}`
      const aliases = SUBJECT_ALIASES[subjectName] ?? [subjectName]
      const sourceSubjects = remoteSubjects.filter((subject) =>
        aliases.some((alias) => comparable(alias) === comparable(subject.name))
      )

      subjects.push({
        id: subjectId,
        exam_type: collection.key,
        name: subjectName,
        order_index: subjectIndex + 1,
        is_grade_collection: true,
        grade: collection.grade,
      })

      topicNames.forEach((topicName, topicIndex) => {
        const sourceTopicIds = remoteTopics
          .filter(
            (topic) =>
              sourceSubjects.some((subject) => subject.id === topic.subject_id) &&
              comparable(topic.name) === comparable(topicName)
          )
          .map((topic) => topic.id)

        topics.push({
          id: `grade-${collection.grade}-topic-${comparable(subjectName).replace(/ /g, '-')}-${topicIndex + 1}`,
          subject_id: subjectId,
          name: topicName,
          order_index: topicIndex + 1,
          source_topic_ids: sourceTopicIds,
          is_grade_collection: true,
          grade: collection.grade,
        })
      })
    })
  }

  return { subjects, topics }
}

export const HIGH_SCHOOL_CURRICULUM = Object.freeze(curriculum)
