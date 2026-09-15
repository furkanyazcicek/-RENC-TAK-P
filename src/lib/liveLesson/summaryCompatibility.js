const MISSING_ACADEMIC_SUMMARY_RPC_CODES = new Set(['PGRST202', '42883'])

function needsLegacySummaryPath(error) {
  return MISSING_ACADEMIC_SUMMARY_RPC_CODES.has(String(error?.code ?? ''))
}

/**
 * Faz 4 akademik kayıtları canlı şemaya ulaşana kadar mevcut,
 * RLS korumalı ders özeti tablosuna yazar. Yalnızca yeni RPC gerçekten
 * bulunamadığında geri döner; yetki, oturum ve ağ hatalarını gizlemez.
 */
export async function saveLessonSummaryWithCompatibility(saveAcademic, saveLegacy) {
  const modern = await saveAcademic()
  if (!modern?.error || !needsLegacySummaryPath(modern.error)) return modern

  const legacy = await saveLegacy()
  if (legacy?.error) return legacy

  return {
    ...legacy,
    data: {
      status: 'created',
      record: legacy?.data ?? null,
      compatibility_mode: 'legacy_lesson_summary',
    },
  }
}

/** Yeni geri bildirim RPC'si yoksa mevcut dar, güvenli RPC'yi kullanır. */
export async function submitLessonFeedbackWithCompatibility(saveAcademic, saveLegacy) {
  const modern = await saveAcademic()
  if (!modern?.error || !needsLegacySummaryPath(modern.error)) return modern

  const legacy = await saveLegacy()
  if (legacy?.error) return legacy

  return {
    ...legacy,
    data: {
      status: 'created',
      compatibility_mode: 'legacy_lesson_student_feedback',
    },
  }
}
