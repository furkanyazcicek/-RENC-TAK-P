/** Kütüphane yolları tek yerde tutulur; not ve soru içerikleri asla aynı
 * rota altında açılmaz. Müfredat verisi (ders/konu) iki kütüphane için ortaktır. */
export function slugifyLibraryValue(value = '') {
  return String(value)
    .toLocaleLowerCase('tr-TR')
    .replace(/ı/g, 'i')
    .replace(/ş/g, 's')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function libraryPath(kind, { examType, subject, topic } = {}) {
  const base = kind === 'questions' ? '/kutuphane/sorular' : '/kutuphane/notlar'
  if (!examType) return base
  if (!subject) return `${base}/${slugifyLibraryValue(examType)}`
  if (!topic) return `${base}/${slugifyLibraryValue(examType)}/${slugifyLibraryValue(subject.name ?? subject)}`
  return `${base}/${slugifyLibraryValue(examType)}/${slugifyLibraryValue(subject.name ?? subject)}/${slugifyLibraryValue(topic.name ?? topic)}`
}
