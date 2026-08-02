import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import StatusBadge from './StatusBadge'

const STATUS_OPTIONS = ['İnceleniyor', 'Derste Çözülecek', 'Çözüldü']

function ReplyBox({ question, onChanged }) {
  const [value, setValue] = useState(question.teacher_reply ?? '')
  const [saving, setSaving] = useState(false)

  async function handleSave() {
    setSaving(true)
    const { error } = await supabase
      .from('questions')
      .update({ teacher_reply: value.trim() || null, status: 'Çözüldü' })
      .eq('id', question.id)
    setSaving(false)
    if (!error) onChanged?.()
  }

  return (
    <div className="mt-3 flex flex-col gap-2">
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        placeholder="Öğrenciye yanıtını yaz..."
        className="focus-ring w-full rounded-xl border border-brand-100 bg-paper px-3 py-2 text-sm resize-none"
      />
      <button
        onClick={handleSave}
        disabled={saving || !value.trim()}
        className="focus-ring self-start rounded-lg bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
      >
        {saving ? 'Kaydediliyor...' : 'Yanıtla ve Çözüldü Olarak İşaretle'}
      </button>
    </div>
  )
}

export default function QuestionInbox({ questions, onChanged }) {
  const [openReplyId, setOpenReplyId] = useState(null)

  async function updateStatus(id, status) {
    const { error } = await supabase.from('questions').update({ status }).eq('id', id)
    if (!error) onChanged?.()
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 text-sm text-ink/40">
        Gelen kutunuzda soru yok. 🎉
      </div>
    )
  }

  return (
    <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-brand-50">
      {questions.map((q) => (
        <div key={q.id} className="p-5 flex flex-col sm:flex-row gap-4">
          {q.image_url && (
            <img
              src={q.image_url}
              alt="Soru görseli"
              className="h-20 w-20 rounded-lg object-cover flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-ink">{q.profiles?.full_name ?? 'Bilinmeyen öğrenci'}</span>
              <span className="text-xs text-ink/40">
                {new Date(q.created_at).toLocaleDateString('tr-TR', {
                  day: 'numeric',
                  month: 'long',
                })}
              </span>
            </div>
            <p className="text-sm text-ink/70 mt-1">{q.content || 'Fotoğraf ile gönderildi'}</p>

            {q.teacher_reply && (
              <div className="mt-2 rounded-xl bg-good/5 border border-good/20 px-3 py-2">
                <p className="text-xs font-semibold text-good mb-0.5">Yanıtınız</p>
                <p className="text-sm text-ink/70">{q.teacher_reply}</p>
              </div>
            )}

            {openReplyId === q.id ? (
              <ReplyBox question={q} onChanged={() => { setOpenReplyId(null); onChanged?.() }} />
            ) : (
              <button
                onClick={() => setOpenReplyId(q.id)}
                className="focus-ring mt-2 text-xs font-semibold text-brand-600 hover:underline"
              >
                {q.teacher_reply ? 'Yanıtı düzenle' : 'Yanıtla'}
              </button>
            )}
          </div>
          <div className="flex sm:flex-col items-start sm:items-end gap-2 flex-shrink-0">
            <StatusBadge status={q.status} />
            <select
              value={q.status}
              onChange={(e) => updateStatus(q.id, e.target.value)}
              className="focus-ring text-xs border border-brand-100 rounded-lg px-2 py-1.5 bg-paper text-ink/70"
            >
              {STATUS_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </div>
  )
}
