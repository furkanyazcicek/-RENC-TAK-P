import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { SUBJECT_PRESETS, calcNet } from '../lib/examHelpers'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

function buildRows(type) {
  return SUBJECT_PRESETS[type].map((subject) => ({ subject, correct: '', incorrect: '', empty: '' }))
}

export default function MockExamForm({ onSubmitted }) {
  const { user } = useAuth()
  const [examType, setExamType] = useState('TYT')
  const [examName, setExamName] = useState('')
  const [examDate, setExamDate] = useState(todayStr())
  const [rows, setRows] = useState(buildRows('TYT'))
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  function handleTypeChange(type) {
    setExamType(type)
    setRows(buildRows(type))
  }

  function updateRow(index, field, value) {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, [field]: value } : r)))
  }

  const totalNet = rows.reduce((sum, r) => sum + calcNet(r.correct, r.incorrect), 0)

  async function handleSubmit(e) {
    e.preventDefault()
    setSaving(true)
    setFeedback(null)

    const { data: exam, error: examError } = await supabase
      .from('mock_exams')
      .insert({ student_id: user.id, exam_type: examType, exam_name: examName.trim() || null, exam_date: examDate })
      .select()
      .single()

    if (examError) {
      setFeedback({ type: 'error', text: examError.message })
      setSaving(false)
      return
    }

    const subjectRows = rows.map((r) => ({
      mock_exam_id: exam.id,
      subject: r.subject,
      correct: r.correct === '' ? 0 : Number(r.correct),
      incorrect: r.incorrect === '' ? 0 : Number(r.incorrect),
      empty: r.empty === '' ? 0 : Number(r.empty),
    }))

    const { error: subjectsError } = await supabase.from('mock_exam_subjects').insert(subjectRows)

    setSaving(false)

    if (subjectsError) {
      setFeedback({ type: 'error', text: subjectsError.message })
    } else {
      setExamName('')
      setRows(buildRows(examType))
      setFeedback({ type: 'success', text: 'Deneme sonucun kaydedildi!' })
      onSubmitted?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-4">
      <h3 className="font-display font-bold text-lg text-ink">Yeni Deneme Sonucu Gir</h3>

      <div className="flex gap-2">
        {Object.keys(SUBJECT_PRESETS).map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => handleTypeChange(type)}
            className={`focus-ring flex-1 rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
              examType === type ? 'border-brand-500 bg-brand-50 text-brand-700' : 'border-brand-100 text-ink/50'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold text-ink/50">Deneme Adı (ops.)</label>
          <input
            value={examName}
            onChange={(e) => setExamName(e.target.value)}
            placeholder="örn. Final Deneme 3"
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-ink/50">Tarih</label>
          <input
            type="date"
            required
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_64px_64px_64px] gap-2 text-xs font-semibold text-ink/40 px-1">
          <span>Ders</span>
          <span className="text-good text-center">D</span>
          <span className="text-bad text-center">Y</span>
          <span className="text-center">B</span>
        </div>
        {rows.map((row, i) => (
          <div key={row.subject} className="grid grid-cols-[1fr_64px_64px_64px] gap-2 items-center">
            <span className="text-sm text-ink/80 truncate">{row.subject}</span>
            <input
              type="number"
              min="0"
              value={row.correct}
              onChange={(e) => updateRow(i, 'correct', e.target.value)}
              className="focus-ring rounded-lg border border-brand-100 px-2 py-1.5 text-sm text-center"
            />
            <input
              type="number"
              min="0"
              value={row.incorrect}
              onChange={(e) => updateRow(i, 'incorrect', e.target.value)}
              className="focus-ring rounded-lg border border-brand-100 px-2 py-1.5 text-sm text-center"
            />
            <input
              type="number"
              min="0"
              value={row.empty}
              onChange={(e) => updateRow(i, 'empty', e.target.value)}
              className="focus-ring rounded-lg border border-brand-100 px-2 py-1.5 text-sm text-center"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-brand-50 pt-3">
        <span className="text-sm text-ink/50">
          Toplam Net: <strong className="text-brand-600">{Math.round(totalNet * 100) / 100}</strong>
        </span>
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {saving ? 'Kaydediliyor...' : 'Denemeyi Kaydet'}
        </button>
      </div>
      {feedback && (
        <span className={`text-sm ${feedback.type === 'success' ? 'text-good' : 'text-bad'}`}>
          {feedback.text}
        </span>
      )}
    </form>
  )
}
