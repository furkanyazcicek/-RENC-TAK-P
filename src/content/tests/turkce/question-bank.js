/**
 * TYT Türkçe Soru Kütüphanesi Katalog Köprüsü
 *
 * Kaynak: MEB Ortaöğretim Türkçe / Türk Dili ve Edebiyatı Öğretim Programı
 * ve ÖSYM TYT Türkçe soru dağılımları ve standartları.
 */

export const SOURCE_REFERENCES = [
  {
    id: 'meb-turkce-programi-2025',
    title: 'MEB Türk Dili ve Edebiyatı / Türkçe Dersi Öğretim Programı',
    url: 'https://mufredat.meb.gov.tr',
    role: 'Fiilde anlam (iş, oluş, durum), kip ve kişi ekleri, ek eylem, fiil yapısı, birleşik fiiller ve fiil çatıları kazanımları',
  },
  {
    id: 'osym-tyt-turkce-2025',
    title: 'ÖSYM YKS TYT Türkçe Çıkmış Sorular ve Soru Tipleri',
    url: 'https://www.osym.gov.tr',
    role: 'Ölçme dili, soru kökleri, çeldirici kurguları ve dil bilgisi soru formatı referansı',
  },
]

export const BUNDLED_TURKCE_SUBJECT = Object.freeze({
  id: 'bundled-tyt-turkce',
  exam_type: 'TYT',
  name: 'Türkçe',
  order_index: 3,
})

export const TURKCE_TOPICS = Object.freeze([
  { name: 'Sözcükte Anlam', slug: 'sozcukte-anlam', order: 1 },
  { name: 'Cümlede Anlam', slug: 'cumlede-anlam', order: 2 },
  { name: 'Paragrafta Anlam ve Yapı', slug: 'paragrafta-anlam-ve-yapi', order: 3 },
  { name: 'Paragrafta Düşünceyi Geliştirme Yolları', slug: 'paragrafta-dusunceyi-gelistirme-yollari', order: 4 },
  { name: 'Sözcük Türleri', slug: 'sozcuk-turleri', order: 5 },
  { name: 'Fiiller', slug: 'fiiller', order: 6 },
  { name: 'Fiilimsi', slug: 'fiilimsi', order: 7 },
  { name: 'Cümlenin Öğeleri', slug: 'cumlenin-ogeleri', order: 8 },
  { name: 'Cümle Türleri', slug: 'cumle-turleri', order: 9 },
  { name: 'Anlatım Bozuklukları', slug: 'anlatim-bozukluklari', order: 10 },
  { name: 'Ses Bilgisi', slug: 'ses-bilgisi', order: 11 },
  { name: 'Yapı Bilgisi', slug: 'yapi-bilgisi', order: 12 },
  { name: 'Tamlamalar', slug: 'tamlamalar', order: 13 },
  { name: 'Yazım Kuralları', slug: 'yazim-kurallari', order: 14 },
  { name: 'Noktalama İşaretleri', slug: 'noktalama-isaretleri', order: 15 },
])

export function withTurkceQuestionBankSubjects(subjects) {
  const exists = subjects.some(
    (subject) => subject.exam_type === 'TYT' && subject.name === 'Türkçe'
  )
  return exists ? subjects : [...subjects, BUNDLED_TURKCE_SUBJECT]
}

export function withTurkceQuestionBankTopics(subjects, topics) {
  const subject = subjects.find(
    (item) => item.exam_type === 'TYT' && item.name === 'Türkçe'
  )
  if (!subject) return topics

  const nextTopics = [...topics]
  TURKCE_TOPICS.forEach((topic) => {
    const exists = nextTopics.some(
      (item) => item.subject_id === subject.id && item.name === topic.name
    )
    if (exists) return
    nextTopics.push({
      id: `bundled-turkce-topic-${topic.slug}`,
      subject_id: subject.id,
      name: topic.name,
      order_index: topic.order,
      is_bundled: true,
    })
  })

  return nextTopics
}
