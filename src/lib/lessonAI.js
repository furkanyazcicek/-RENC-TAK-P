import { supabase } from './supabaseClient'

export async function regenerateLessonSection({ lessonId, sectionId, instruction }) {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session?.access_token) throw new Error('Oturum bulunamadı.')
  const response = await fetch('/api/lessons/regenerate-section', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
    body: JSON.stringify({ lessonId, sectionId, instruction }),
  })
  const result = await response.json().catch(() => null)
  if (!response.ok || !result?.section) throw new Error(result?.error?.message ?? 'Bölüm yenilenemedi.')
  return result.section
}
