import { supabase } from './supabaseClient'

/**
 * DERS SESİ ERİŞİMİ
 *
 * `lesson-audio` bucket'ı GİZLİDİR (public değil). Öğrenciye özel anlatım
 * dosyalarının tahmin edilebilir bir URL'i olmamalı; bu yüzden dosyalar
 * imzalı, süreli bağlantıyla açılır. Master (herkese ortak) sesler de aynı
 * yoldan gider — iki farklı erişim yolu tutmak, birinde yapılacak bir
 * hatanın diğerine sızması demektir.
 *
 * Ses üretimi henüz yapılandırılmadığı için bu modül bugün çoğunlukla boş
 * döner. Boş dönmesi bir hata değildir: okuyucu sese ihtiyaç duymadan
 * çalışır (§50).
 */

const BUCKET = 'lesson-audio'
const SIGNED_URL_TTL_SECONDS = 3600

const cache = new Map()

export async function signedAudioUrl(storagePath) {
  if (!storagePath) return null
  const cached = cache.get(storagePath)
  if (cached && cached.expiresAt > Date.now()) return cached.url

  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(storagePath, SIGNED_URL_TTL_SECONDS)
  if (error || !data?.signedUrl) return null

  // Sona ermeden 5 dakika önce yenilensin; uzun bir ders okuması sırasında
  // bağlantı süresi dolup ses yarıda kesilmesin.
  cache.set(storagePath, { url: data.signedUrl, expiresAt: Date.now() + (SIGNED_URL_TTL_SECONDS - 300) * 1000 })
  return data.signedUrl
}

/** Hazır ses kayıtlarını okur; hata durumunda boş dizi döner. */
export async function loadLessonAudio(lessonId) {
  if (!lessonId) return []
  const { data, error } = await supabase
    .from('lesson_audio_assets')
    .select('id, scope, section_id, block_id, storage_path, duration_seconds, status')
    .eq('lesson_id', lessonId)
    .eq('status', 'ready')
  if (error) return []
  return data ?? []
}

/** Bölüm veya blok için hazır ses kaydını bulur. */
export function findAudio(assets, { scope, sectionId = null, blockId = null }) {
  return (
    assets.find(
      (asset) =>
        asset.scope === scope &&
        (sectionId === null || asset.section_id === sectionId) &&
        (blockId === null || asset.block_id === blockId)
    ) ?? null
  )
}
