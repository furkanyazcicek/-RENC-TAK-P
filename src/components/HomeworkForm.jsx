import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'

export default function HomeworkForm({ onAssigned, defaultStudentId }) {
  const { user } = useAuth()
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState(defaultStudentId ?? '')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  useEffect(() => {
    async function loadStudents() {
      if (defaultStudentId) return
      const { data } = await supabase.from('profiles').select('id, full_name').eq('role', 'student')
      setStudents(data ?? [])
      if (data?.length) setStudentId(data[0].id)
    }
    loadStudents()
  }, [defaultStudentId])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!studentId || !title.trim()) return

    setSaving(true)
    setFeedback(null)
    const { error } = await supabase.from('homeworks').insert({
      student_id: studentId,
      teacher_id: user.id,
      title: title.trim(),
      description: description.trim() || null,
      due_date: dueDate || null,
    })
    setSaving(false)

    if (error) {
      setFeedback({ type: 'error', text: error.message })
    } else {
      setTitle('')
      setDescription('')
      setDueDate('')
      setFeedback({ type: 'success', text: 'Ödev atandı.' })
      onAssigned?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 flex flex-col gap-3">
      <h3 className="font-display font-bold text-lg text-ink">Yeni Ödev Ata</h3>

      {!defaultStudentId && (
        <div>
          <label className="text-xs font-semibold text-ink/50">Öğrenci</label>
          <select
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm bg-white"
          >
            {students.map((s) => (
              <option key={s.id} value={s.id}>
                {s.full_name}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label className="text-xs font-semibold text-ink/50">Ödev Başlığı</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="örn. Trigonometri 20 soru"
          className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
        />
      </div>

      <div>
        <label className="text-xs font-semibold text-ink/50">Açıklama (ops.)</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={2}
          className="focus-ring mt-1 w-full rounded-xl border border-brand-100 bg-paper px-3 py-2.5 text-sm resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 items-end">
        <div>
          <label className="text-xs font-semibold text-ink/50">Teslim Tarihi (ops.)</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-3 py-2.5 text-sm"
          />
        </div>
        <button
          type="submit"
          disabled={saving}
          className="focus-ring rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:opacity-60 transition-colors"
        >
          {saving ? 'Atanıyor...' : 'Ödevi Ata'}
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
