import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

const COMMON_TOPICS = ['Trigonometri', 'Polinomlar', 'Geometri', 'Fonksiyonlar', 'Türev', 'İntegral']

export default function AddExamForm({ studentId, onAdded }) {
  const [examName, setExamName] = useState('')
  const [topic, setTopic] = useState('')
  const [score, setScore] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!topic || score === '') return

    setSaving(true)
    setFeedback(null)
    const { error } = await supabase.from('exams').insert({
      student_id: studentId,
      exam_name: examName.trim() || null,
      topic,
      score: Number(score),
    })
    setSaving(false)

    if (error) {
      setFeedback({ type: 'error', text: error.message })
    } else {
      setExamName('')
      setTopic('')
      setScore('')
      setFeedback({ type: 'success', text: 'Sonuç eklendi.' })
      onAdded?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3">
      <h3 className="font-display font-bold text-lg text-ink">Yeni Deneme Sonucu Ekle</h3>
      <div className="grid sm:grid-cols-3 gap-3">
        <input
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
          placeholder="Deneme adı (ops.)"
          className="focus-ring rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
        <input
          list="topic-options"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Konu (örn. Trigonometri)"
          required
          className="focus-ring rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
        <datalist id="topic-options">
          {COMMON_TOPICS.map((t) => (
            <option key={t} value={t} />
          ))}
        </datalist>
        <input
          type="number"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          placeholder="Başarı % (0-100)"
          required
          className="focus-ring rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {saving ? 'Ekleniyor...' : 'Sonucu Kaydet'}
        </button>
        {feedback && (
          <span className={`text-sm ${feedback.type === 'success' ? 'text-good' : 'text-bad'}`}>
            {feedback.text}
          </span>
        )}
      </div>
    </form>
  )
}
