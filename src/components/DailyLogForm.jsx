import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'

const COMMON_TOPICS = [
  'Matematik - Türev',
  'Matematik - İntegral',
  'Matematik - Trigonometri',
  'Matematik - Polinomlar',
  'Geometri - Üçgenler',
  'Fizik - Vektörler',
  'Fizik - Kuvvet ve Hareket',
  'Kimya - Mol Kavramı',
  'Biyoloji - Hücre',
  'Türkçe - Paragraf',
]

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

export default function DailyLogForm({ onSubmitted }) {
  const { user } = useAuth()
  const [studyDate, setStudyDate] = useState(todayStr())
  const [topic, setTopic] = useState('')
  const [duration, setDuration] = useState('')
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')
  const [empty, setEmpty] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  function resetForm() {
    setStudyDate(todayStr())
    setTopic('')
    setDuration('')
    setCorrect('')
    setIncorrect('')
    setEmpty('')
    setNotes('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!topic || !studyDate) {
      setFeedback({ type: 'error', text: 'Lütfen tarih ve konu alanlarını doldur.' })
      return
    }

    setSaving(true)
    setFeedback(null)

    const { error } = await supabase.from('daily_logs').insert({
      student_id: user.id,
      study_date: studyDate,
      topic,
      duration_minutes: duration === '' ? 0 : Number(duration),
      correct: correct === '' ? 0 : Number(correct),
      incorrect: incorrect === '' ? 0 : Number(incorrect),
      empty: empty === '' ? 0 : Number(empty),
      notes: notes.trim() || null,
    })

    setSaving(false)

    if (error) {
      setFeedback({ type: 'error', text: error.message })
    } else {
      resetForm()
      setFeedback({ type: 'success', text: 'Çalışman kaydedildi. Aferin! 💪' })
      onSubmitted?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3">
      <h3 className="font-display font-bold text-lg text-ink">Bugün Ne Çalıştın?</h3>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-ink/50">Tarih</label>
          <input
            type="date"
            required
            value={studyDate}
            onChange={(e) => setStudyDate(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/50">Konu <span className="font-normal text-ink/30">(Ders - Konu, örn. Matematik - Türev)</span></label>
          <input
            list="daily-topic-options"
            required
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="örn. Matematik - Türev"
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
          <datalist id="daily-topic-options">
            {COMMON_TOPICS.map((t) => (
              <option key={t} value={t} />
            ))}
          </datalist>
        </div>
      </div>

      <div>
        <label className="text-xs font-semibold text-ink/50">Çalışma Süresi (dakika)</label>
        <input
          type="number"
          min="0"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="örn. 45"
          className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-xs font-semibold text-good">Doğru</label>
          <input
            type="number"
            min="0"
            value={correct}
            onChange={(e) => setCorrect(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-bad">Yanlış</label>
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

      <div>
        <label className="text-xs font-semibold text-ink/50">Not (ops.)</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
          placeholder="Örn. Türev konusunda zorlandığım sorular vardı..."
          className="focus-ring mt-1 w-full rounded-xl border border-brand-100 bg-paper px-3 py-2.5 text-sm resize-none"
        />
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {saving ? 'Kaydediliyor...' : 'Kaydet'}
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
