import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import StatusBadge from './StatusBadge'
import ImageLightbox from './ImageLightbox'

const STATUS_OPTIONS = ['İnceleniyor', 'Derste Çözülecek', 'Çözüldü']

function ReplyBox({ question, onChanged }) {
  const { user } = useAuth()
  const [value, setValue] = useState(question.teacher_reply ?? '')
  const [file, setFile] = useState(null)
  const [existingImageUrl, setExistingImageUrl] = useState(question.teacher_reply_image_url ?? null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  async function handleSave() {
    if (!value.trim() && !file && !existingImageUrl) {
      setError('Yazılı bir yanıt ya da fotoğraf ekleyin.')
      return
    }
    setSaving(true)
    setError(null)

    let imageUrl = existingImageUrl
    try {
      if (file) {
        const path = `replies/${user.id}/${Date.now()}-${file.name}`
        const { error: uploadError } = await supabase.storage.from('question-images').upload(path, file)
        if (uploadError) throw uploadError
        const { data: publicUrlData } = supabase.storage.from('question-images').getPublicUrl(path)
        imageUrl = publicUrlData.publicUrl
      }

      const { error: updateError } = await supabase
        .from('questions')
        .update({ teacher_reply: value.trim() || null, teacher_reply_image_url: imageUrl, status: 'Çözüldü' })
        .eq('id', question.id)
      if (updateError) throw updateError

      onChanged?.()
    } catch (err) {
      setError(err.message ?? 'Bir şeyler ters gitti, tekrar deneyin.')
    } finally {
      setSaving(false)
    }
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

      {(file || existingImageUrl) && (
        <div className="relative w-fit">
          <img
            src={file ? URL.createObjectURL(file) : existingImageUrl}
            alt="Yanıt görseli önizleme"
            className="h-20 w-20 rounded-lg object-cover border border-ink/10"
          />
          <button
            type="button"
            onClick={() => {
              setFile(null)
              setExistingImageUrl(null)
            }}
            className="focus-ring absolute -top-2 -right-2 h-5 w-5 rounded-full bg-bad text-white text-xs grid place-items-center"
            aria-label="Görseli kaldır"
          >
            ×
          </button>
        </div>
      )}

      <div className="flex items-center gap-2 flex-wrap">
        <label className="focus-ring cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium text-brand-600 border border-dashed border-brand-300 rounded-lg px-3 py-1.5 hover:bg-brand-50 transition-colors">
          <span>📷 Fotoğraf Ekle</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>
        <button
          onClick={handleSave}
          disabled={saving}
          className="focus-ring rounded-lg bg-brand-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-brand-600 disabled:opacity-50 transition-colors"
        >
          {saving ? 'Kaydediliyor...' : 'Yanıtla ve Çözüldü Olarak İşaretle'}
        </button>
      </div>
      {error && <p className="text-xs text-bad">{error}</p>}
    </div>
  )
}

export default function QuestionInbox({ questions, onChanged }) {
  const [openReplyId, setOpenReplyId] = useState(null)
  const [lightboxSrc, setLightboxSrc] = useState(null)

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
    <>
      <div className="rounded-xl2 bg-white shadow-card border border-ink/5 divide-y divide-brand-50">
        {questions.map((q) => (
          <div key={q.id} className="p-5 flex flex-col sm:flex-row gap-4">
            {q.image_url && (
              <button
                type="button"
                onClick={() => setLightboxSrc(q.image_url)}
                className="focus-ring flex-shrink-0 group relative"
                aria-label="Soru görselini büyüt"
              >
                <img
                  src={q.image_url}
                  alt="Soru görseli"
                  className="h-20 w-20 rounded-lg object-cover group-hover:opacity-80 transition-opacity"
                />
                <span className="absolute inset-0 rounded-lg bg-ink/0 group-hover:bg-ink/10 grid place-items-center transition-colors">
                  <svg
                    className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
                  </svg>
                </span>
              </button>
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

              {(q.teacher_reply || q.teacher_reply_image_url) && (
                <div className="mt-2 rounded-xl bg-good/5 border border-good/20 px-3 py-2 flex flex-col gap-2">
                  <p className="text-xs font-semibold text-good">Yanıtınız</p>
                  {q.teacher_reply && <p className="text-sm text-ink/70">{q.teacher_reply}</p>}
                  {q.teacher_reply_image_url && (
                    <button
                      type="button"
                      onClick={() => setLightboxSrc(q.teacher_reply_image_url)}
                      className="focus-ring w-fit"
                    >
                      <img
                        src={q.teacher_reply_image_url}
                        alt="Yanıt görseli"
                        className="h-16 w-16 rounded-lg object-cover hover:opacity-80 transition-opacity"
                      />
                    </button>
                  )}
                </div>
              )}

              {openReplyId === q.id ? (
                <ReplyBox question={q} onChanged={() => { setOpenReplyId(null); onChanged?.() }} />
              ) : (
                <button
                  onClick={() => setOpenReplyId(q.id)}
                  className="focus-ring mt-2 text-xs font-semibold text-brand-600 hover:underline"
                >
                  {q.teacher_reply || q.teacher_reply_image_url ? 'Yanıtı düzenle' : 'Yanıtla'}
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

      {lightboxSrc && <ImageLightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}
    </>
  )
}
