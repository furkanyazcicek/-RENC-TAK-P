import { useState } from 'react'
import { Upload, X } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'

export default function LibraryNoteForm({ topicId, onAdded, onCancel }) {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [file, setFile] = useState(null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return

    setSaving(true)
    setError(null)

    try {
      let fileUrl = null
      let fileType = null

      if (file) {
        fileType = file.type === 'application/pdf' ? 'pdf' : 'image'
        const path = `${topicId}/${Date.now()}-${file.name}`
        const { error: uploadError } = await supabase.storage.from('library-files').upload(path, file)
        if (uploadError) throw uploadError
        const { data: publicUrlData } = supabase.storage.from('library-files').getPublicUrl(path)
        fileUrl = publicUrlData.publicUrl
      }

      const { error: insertError } = await supabase.from('library_notes').insert({
        topic_id: topicId,
        teacher_id: user.id,
        title: title.trim(),
        content: content.trim() || null,
        file_url: fileUrl,
        file_type: fileType,
      })
      if (insertError) throw insertError

      setTitle('')
      setContent('')
      setFile(null)
      onAdded?.()
    } catch (err) {
      setError(err.message ?? 'Bir şeyler ters gitti, tekrar deneyin.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl2 bg-brand-50/60 border border-dashed border-brand-200 p-5 flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <h4 className="font-display font-bold text-ink">Yeni Ders Notu Ekle</h4>
        <button
          type="button"
          onClick={onCancel}
          className="focus-ring h-7 w-7 rounded-lg grid place-items-center text-ink/40 hover:bg-ink/5 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <input
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Not başlığı (örn. Pisagor Teoremi Özet)"
        className="focus-ring w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm bg-white"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        placeholder="Yazılı ders notu (isteğe bağlı)..."
        className="focus-ring w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm bg-white resize-none"
      />

      <div className="flex items-center gap-3 flex-wrap">
        <label className="focus-ring cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-brand-600 border border-dashed border-brand-300 rounded-xl px-4 py-2 bg-white hover:bg-brand-50 transition-colors">
          <Upload className="h-4 w-4" />
          <span>{file ? file.name : 'PDF veya Görsel Ekle'}</span>
          <input
            type="file"
            accept="application/pdf,image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>
        <button
          type="submit"
          disabled={saving || !title.trim()}
          className="focus-ring ml-auto rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
        >
          {saving ? 'Yükleniyor...' : 'Notu Kaydet'}
        </button>
      </div>
      {error && <p className="text-sm text-bad">{error}</p>}
    </form>
  )
}
