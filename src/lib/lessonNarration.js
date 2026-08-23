export const NARRATION_PILOT_SLUG = 'canlilar-ve-cevre'

/**
 * Belgedeki görünmez `audio_script` bloklarını sıralı oynatma listesine
 * çevirir. Açık `target_block_id` tercih edilir; eski içeriklerde script'in
 * hemen önündeki görünür blok güvenli geriye uyumluluk hedefidir.
 */
export function buildNarrationItems(document, lessonSlug) {
  if (lessonSlug !== NARRATION_PILOT_SLUG) return []

  const items = []
  ;(document?.sections ?? []).forEach((section, sectionIndex) => {
    let previousVisibleBlockId = null

    ;(section.blocks ?? []).forEach((block) => {
      if (block.type !== 'audio_script') {
        previousVisibleBlockId = block.id
        return
      }

      const script = String(block.body ?? '').trim()
      if (!script) return
      const targetBlockId = block.target_block_id || previousVisibleBlockId
      if (!targetBlockId) return

      items.push({
        id: block.id,
        sectionId: section.id,
        sectionIndex,
        sectionTitle: section.title,
        targetBlockId,
        script,
        audioUrl: narrationAudioUrl({ lessonSlug, blockId: block.id, script }),
      })
    })
  })

  return items
}

export function narrationAudioUrl({ lessonSlug, blockId, script }) {
  const query = new URLSearchParams({
    lesson: lessonSlug,
    block: blockId,
    v: stableTextVersion(script),
  })
  return `/api/lessons/narrate?${query}`
}

/** URL/CDN cache'i metin değiştiğinde kendiliğinden geçersizleşir. */
export function stableTextVersion(value) {
  let hash = 2166136261
  for (const character of String(value ?? '')) {
    hash ^= character.codePointAt(0)
    hash = Math.imul(hash, 16777619)
  }
  return (hash >>> 0).toString(36)
}

export function findAdjacentSectionIndex(items, activeIndex, direction) {
  if (!items.length || !items[activeIndex]) return -1
  const sectionIndex = items[activeIndex].sectionIndex

  if (direction > 0) {
    return items.findIndex((item, index) => index > activeIndex && item.sectionIndex > sectionIndex)
  }

  for (let index = activeIndex - 1; index >= 0; index -= 1) {
    if (items[index].sectionIndex < sectionIndex) {
      const targetSection = items[index].sectionIndex
      return items.findIndex((item) => item.sectionIndex === targetSection)
    }
  }
  return -1
}

export function narrationStorageKey(lessonSlug) {
  return `drkoc:narration:v1:${lessonSlug}`
}

export function readNarrationProgress(storage, lessonSlug, itemCount) {
  const fallback = { index: 0, currentTime: 0, rate: 1 }
  if (!storage) return fallback
  try {
    const parsed = JSON.parse(storage.getItem(narrationStorageKey(lessonSlug)))
    const index = Number.isInteger(parsed?.index) && parsed.index >= 0 && parsed.index < itemCount ? parsed.index : 0
    const currentTime = Number.isFinite(parsed?.currentTime) && parsed.currentTime >= 0 ? parsed.currentTime : 0
    const rate = [0.75, 1, 1.25, 1.5, 2].includes(parsed?.rate) ? parsed.rate : 1
    return { index, currentTime, rate }
  } catch {
    return fallback
  }
}

export function writeNarrationProgress(storage, lessonSlug, progress) {
  if (!storage) return
  try {
    storage.setItem(narrationStorageKey(lessonSlug), JSON.stringify(progress))
  } catch {
    // Depolama kapalıysa oynatma devam eder; kalıcılık yardımcı özelliktir.
  }
}
