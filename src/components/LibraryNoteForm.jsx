import { useState } from 'react'
import { Save, Upload } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Alert, Button, Field, Input, Textarea } from './ui'

/**
 * LibraryNoteForm — bir konuya ders notu ekleme formu.
 *
 * Modal içinde açıldığı için kendi kart çerçevesini çizmez; başlık ve kapatma
 * düğmesi Modal tarafından sağlanır.
 */
export default function LibraryNoteForm({ topicId, onAdded }) {
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Field label="Not Başlığı" required>
        {({ id }) => (
          <Input
            id={id}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="örn. Pisagor Teoremi Özet"
          />
        )}
      </Field>

      <Field label="Yazılı Not" hint="İsteğe bağlı — kısa özet, formül, uyarı">
        {({ id }) => (
          <Textarea
            id={id}
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Konunun özeti, dikkat edilmesi gerekenler…"
          />
        )}
      </Field>

      <div className="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center">
        <label className="focus-ring inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl border border-dashed border-brand-300 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50">
          <Upload className="h-4 w-4" aria-hidden="true" />
          <span className="max-w-[16rem] truncate">{file ? file.name : 'PDF veya görsel ekle'}</span>
          <input
            type="file"
            accept="application/pdf,image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <Button
          type="submit"
          loading={saving}
          disabled={!title.trim()}
          icon={Save}
          className="sm:ml-auto"
        >
          {saving ? 'Yükleniyor…' : 'Notu Kaydet'}
        </Button>
      </div>

      {error && <Alert tone="danger">{error}</Alert>}
    </form>
  )
}
