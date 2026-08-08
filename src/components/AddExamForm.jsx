import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { COMMON_SUBJECTS, calcNet } from '../lib/examHelpers'

// studentId verilirse öğretmen modunda çalışır (o öğrenci adına ekler).
// studentId verilmezse öğrenci kendi hesabına ekler (Denemeler sayfası).
export default function AddExamForm({ studentId, onAdded }) {
  const { user } = useAuth()
  const targetStudentId = studentId ?? user?.id

  const [subject, setSubject] = useState('')
  const [examDate, setExamDate] = useState(() => new Date().toISOString().slice(0, 10))
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')
  const [empty, setEmpty] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const previewNet = correct !== '' || incorrect !== '' ? calcNet(correct || 0, incorrect || 0) : null

  async function handleSubmit(e) {
    e.preventDefault()
    if (!subject || !examDate) return

    setSaving(true)
    setFeedback(null)
    const { error } = await supabase.from('exams').insert({
      student_id: targetStudentId,
      topic: subject,
      exam_date: examDate,
      correct: correct === '' ? 0 : Number(correct),
      incorrect: incorrect === '' ? 0 : Number(incorrect),
      empty: empty === '' ? 0 : Number(empty),
    })
    setSaving(false)

    if (error) {
      setFeedback({ type: 'error', text: error.message })
    } else {
      setSubject('')
      setCorrect('')
      setIncorrect('')
      setEmpty('')
      setFeedback({ type: 'success', text: `Branş denemesi kaydedildi (${previewNet ?? 0} net).` })
      onAdded?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3">
      <h3 className="font-display font-bold text-lg text-ink">Branş Denemesi Ekle</h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
          className="focus-ring rounded-xl border border-brand-100 px-3 py-2.5 text-sm text-ink/70"
        >
          <option value="">Ders seç</option>
          {COMMON_SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          type="date"
          value={examDate}
          onChange={(e) => setExamDate(e.target.value)}
          required
          className="focus-ring rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-semibold text-ink/40">Doğru</label>
          <input
            type="number"
            min="0"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/40">Yanlış</label>
          <input
            type="number"
            min="0"
            value={incorrect}
            onChange={(e) => setIncorrect(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/40">Boş</label>
          <input
            type="number"
            min="0"
            value={empty}
            onChange={(e) => setEmpty(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {saving ? 'Ekleniyor...' : 'Sonucu Kaydet'}
        </button>
        {previewNet != null && (
          <span className="text-sm text-ink/50">
            Net: <strong className="text-brand-600">{previewNet}</strong>
          </span>
        )}
        {feedback && (
          <span className={`text-sm ${feedback.type === 'success' ? 'text-good' : 'text-bad'}`}>
            {feedback.text}
          </span>
        )}
      </div>
    </form>
  )
}
