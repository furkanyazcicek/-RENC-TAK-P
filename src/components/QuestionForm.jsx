import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { COMMON_SUBJECTS } from '../lib/examHelpers'

export default function QuestionForm({ onSubmitted }) {
  const { user } = useAuth()
  const [content, setContent] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [file, setFile] = useState(null)
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!content.trim() && !file) {
      setFeedback({ type: 'error', text: 'Lütfen bir soru yazın ya da bir fotoğraf ekleyin.' })
      return
    }

    setSending(true)
    setFeedback(null)

    let imageUrl = null
    try {
      if (file) {
        const path = `${user.id}/${Date.now()}-${file.name}`
        const { error: uploadError } = await supabase.storage
          .from('question-images')
          .upload(path, file)
        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage
          .from('question-images')
          .getPublicUrl(path)
        imageUrl = publicUrlData.publicUrl
      }

      const { error: insertError } = await supabase.from('questions').insert({
        student_id: user.id,
        content: content.trim() || null,
        subject: subject || null,
        topic: topic.trim() || null,
        image_url: imageUrl,
        status: 'İnceleniyor',
      })
      if (insertError) throw insertError

      setContent('')
      setSubject('')
      setTopic('')
      setFile(null)
      setFeedback({ type: 'success', text: 'Sorunuz öğretmeninize iletildi!' })
      onSubmitted?.()
    } catch (err) {
      setFeedback({ type: 'error', text: err.message ?? 'Bir şeyler ters gitti, tekrar deneyin.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3">
      <h3 className="font-display font-bold text-lg text-ink">Çözemediğin bir soru mu var?</h3>

      <div className="grid sm:grid-cols-2 gap-3">
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="focus-ring w-full rounded-xl border border-brand-100 bg-paper px-4 py-2.5 text-sm text-ink/70"
        >
          <option value="">Ders seç (opsiyonel)</option>
          {COMMON_SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Konu (örn. Trigonometri)"
          className="focus-ring w-full rounded-xl border border-brand-100 bg-paper px-4 py-2.5 text-sm placeholder:text-ink/30"
        />
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Sorunu buraya yazabilirsin..."
        rows={3}
        className="focus-ring w-full rounded-xl border border-brand-100 bg-paper px-4 py-3 text-sm placeholder:text-ink/30 resize-none"
      />
      <div className="flex flex-col sm:flex-row sm:items-center gap-3">
        <label className="focus-ring cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-brand-600 border border-dashed border-brand-300 rounded-xl px-4 py-2 hover:bg-brand-50 transition-colors">
          <span>{file ? file.name : 'Fotoğraf ekle'}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>
        <button
          type="submit"
          disabled={sending}
          className="focus-ring ml-auto inline-flex items-center justify-center rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {sending ? 'Gönderiliyor...' : 'Öğretmenime Gönder'}
        </button>
      </div>
      {feedback && (
        <p className={`text-sm ${feedback.type === 'success' ? 'text-good' : 'text-bad'}`}>
          {feedback.text}
        </p>
      )}
    </form>
  )
}
