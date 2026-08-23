/**
 * TYT KİMYA DERS FABRİKASI
 * ==================================================================
 *
 * Kimya notlarının ortak yayın sözleşmesini tek yerde tutar.
 * Sonraki konular geldiğinde yerleşim, kalite etiketi ve temel belge
 * alanları yeniden yazılmaz; konuya özgü pedagojik akış ise serbest kalır.
 */

export function createChemistryLesson({
  slug,
  topic,
  order = 0,
  partLabel = 'Gold Standard',
  title,
  subtitle,
  minutes = 45,
  prerequisites = [],
  outcomes = [],
  sections = [],
}) {
  return {
    slug,
    learningMode: 'interactive',
    placement: { examType: 'TYT', subject: 'Kimya', topic },
    order,
    partLabel,
    goldStandard: true,
    title,
    subtitle,
    document: {
      version: 2,
      estimated_minutes: minutes,
      prerequisites,
      outcomes,
      sections,
    },
  }
}
