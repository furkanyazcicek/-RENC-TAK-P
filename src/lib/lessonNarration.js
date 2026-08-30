/**
 * DERS SESLİ ANLATIMI — ORTAK KATMAN
 * ==================================================================
 *
 * Bu dosya "hangi bölüm, hangi metinle, hangi ses dosyasıyla anlatılıyor"
 * sorusunun tek cevabıdır. Hem okuyucu (LessonReader), hem önizleme
 * sayfası, hem de sunucudaki ses uç noktası aynı listeyi buradan üretir.
 * İki ayrı yerde üretilseydi, ses ile ekran er geç birbirinden ayrılırdı.
 *
 * ÜÇ TASARIM KARARI
 *
 * 1) ANLATIM METNİ ≠ EKRANDAKİ METİN. `audio_script` blokları öğrenciye
 *    metin olarak görünmez; notu kelimesi kelimesine okumazlar. Öğretmenin
 *    aynı bilgiyi kendi ağzıyla anlattığı ayrı bir katmandır.
 *
 * 2) BİR BÖLÜMDE BİRDEN FAZLA ANLATIM OLABİLİR. Uzun bir bölüm tek parça
 *    sesle anlatılırsa öğrenci istediği yere dönemez. Bu yüzden liste
 *    bölüm değil, ANLATIM PARÇASI düzeyinde tutulur; `sectionIndex` ile
 *    bölüm atlama yine çalışır.
 *
 * 3) SES ÖNCE HAZIR DOSYADAN OKUNUR. `narrationManifest` içinde aynı
 *    sürüme ait üretilmiş bir mp3 varsa doğrudan o çalınır; yoksa istek
 *    anında üreten API uç noktasına düşülür. Böylece aynı ses ikinci kez
 *    ücretli olarak üretilmez.
 */
import { NARRATION_AUDIO_BASE, NARRATION_MANIFEST } from '../content/lessons/narrationManifest.js'

/** Sesli anlatımın açık olduğu dersler. Yeni ders buraya eklenerek açılır. */
export const NARRATION_PILOT_SLUGS = Object.freeze([
  'canlilar-ve-cevre',
  'hucresel-solunum-mitokondri',
])

export function isNarrationEnabled(lessonSlug) {
  return NARRATION_PILOT_SLUGS.includes(lessonSlug)
}

/**
 * Belgedeki görünmez `audio_script` bloklarını sıralı oynatma listesine
 * çevirir. Açık `target_block_id` tercih edilir; eski içeriklerde script'in
 * hemen önündeki görünür blok güvenli geriye uyumluluk hedefidir.
 */
export function buildNarrationItems(document, lessonSlug) {
  if (!isNarrationEnabled(lessonSlug)) return []

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

      const version = stableTextVersion(script)
      const prepared = preparedAudio(lessonSlug, block.id, version)

      items.push({
        id: block.id,
        sectionId: section.id,
        sectionIndex,
        sectionTitle: section.title,
        // Bölüm başlığı yerine parçanın kendi adı: bir bölümde birden fazla
        // anlatım olduğunda öğrenci hangi parçada olduğunu görebilsin.
        label: block.label || section.title,
        targetBlockId,
        // Anlatım sırasında ayrıca vurgulanacak görsel/blok kimlikleri.
        highlightBlockIds: uniqueIds([targetBlockId, ...(block.highlight_block_ids ?? [])]),
        script,
        voiceHint: block.voice_hint || '',
        version,
        durationSeconds: prepared?.duration ?? null,
        audioUrl: prepared?.url ?? narrationAudioUrl({ lessonSlug, blockId: block.id, script }),
        isPrepared: Boolean(prepared),
      })
    })
  })

  return items
}

/**
 * Önceden üretilmiş ses dosyası yalnızca SÜRÜMÜ TUTUYORSA kullanılır.
 * Anlatım metni değiştiğinde eski kayıt sessizce çalmaya devam etmesin.
 */
function preparedAudio(lessonSlug, blockId, version) {
  const entry = NARRATION_MANIFEST?.[`${lessonSlug}/${blockId}`]
  if (!entry || entry.version !== version || !entry.file) return null
  return {
    url: `${NARRATION_AUDIO_BASE}/${lessonSlug}/${entry.file}`,
    duration: Number.isFinite(entry.duration) ? entry.duration : null,
  }
}

function uniqueIds(values) {
  return [...new Set(values.filter(Boolean))]
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
