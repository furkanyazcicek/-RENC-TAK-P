import { useEffect, useState } from 'react'
import { ImagePlus, Inbox, MessageSquareQuote, PenLine, Send, X, ZoomIn } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { cn } from '../lib/cn'
import { colorForKey } from '../lib/chartTheme'
import StatusBadge from './StatusBadge'
import ImageLightbox from './ImageLightbox'
import SolveBoard from './solve/SolveBoard'
import SubjectTopicFilter, { useSubjectTopicFilter } from './SubjectTopicFilter'
import { Alert, Avatar, Button, EmptyState, Select, Textarea } from './ui'

const STATUS_OPTIONS = ['İnceleniyor', 'Derste Çözülecek', 'Çözüldü']

/**
 * ReplyBox — öğretmenin bir soruya yazılı ve/veya görsel yanıt yazdığı alan.
 * Kaydedildiğinde soru otomatik olarak "Çözüldü" durumuna geçer.
 */
function ReplyBox({ question, onChanged, onCancel }) {
  const { user } = useAuth()
  const [value, setValue] = useState(question.teacher_reply ?? '')
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [existingImageUrl, setExistingImageUrl] = useState(question.teacher_reply_image_url ?? null)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!file) {
      setPreviewUrl(null)
      return undefined
    }
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

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
        const { error: uploadError } = await supabase.storage
          .from('question-images')
          .upload(path, file)
        if (uploadError) throw uploadError
        const { data: publicUrlData } = supabase.storage.from('question-images').getPublicUrl(path)
        imageUrl = publicUrlData.publicUrl
      }

      const { error: updateError } = await supabase
        .from('questions')
        .update({
          teacher_reply: value.trim() || null,
          teacher_reply_image_url: imageUrl,
          status: 'Çözüldü',
        })
        .eq('id', question.id)
      if (updateError) throw updateError

      onChanged?.()
    } catch (err) {
      setError(err.message ?? 'Bir şeyler ters gitti, tekrar deneyin.')
    } finally {
      setSaving(false)
    }
  }

  const shownImage = previewUrl ?? existingImageUrl

  return (
    <div className="mt-3 flex flex-col gap-3 rounded-xl border border-line bg-surface-muted p-3.5">
      <Textarea
        rows={2}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Öğrenciye yanıtını yaz…"
        aria-label="Yanıt metni"
      />

      {shownImage && (
        <div className="relative w-fit">
          <img
            src={shownImage}
            alt="Yanıt görseli önizleme"
            className="h-24 w-24 rounded-xl border border-line object-cover"
          />
          <button
            type="button"
            onClick={() => {
              setFile(null)
              setExistingImageUrl(null)
            }}
            aria-label="Görseli kaldır"
            className="focus-ring absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-danger-500 text-white shadow-card"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <label className="focus-ring inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-dashed border-brand-300 px-3 py-1.5 text-xs font-semibold text-brand-600 transition-colors hover:bg-brand-50">
          <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" />
          Fotoğraf ekle
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <div className="ml-auto flex items-center gap-2">
          {onCancel && (
            <Button variant="ghost" size="xs" onClick={onCancel}>
              Vazgeç
            </Button>
          )}
          <Button size="xs" icon={Send} loading={saving} onClick={handleSave}>
            {saving ? 'Kaydediliyor…' : 'Yanıtla ve kapat'}
          </Button>
        </div>
      </div>

      {error && <Alert tone="danger">{error}</Alert>}
    </div>
  )
}

/**
 * QuestionInbox — öğretmenin gelen soru kutusu.
 *
 * Yanıtlanmamış sorular soluk bir marka şeridiyle işaretlenir; öğretmen
 * listeye bakarak hangilerinin beklediğini tek bakışta görür.
 *
 * `filterable` (varsayılan: açık) ders/konu filtre şeridini bileşenin içine
 * koyar. Sorular sekmesi filtreyi kendi Panel'inde yönettiği için orada
 * `filterable={false}` verilir; öğretmen panelindeki kısa liste ise
 * filtresini buradan alır.
 */
export default function QuestionInbox({
  questions,
  onChanged,
  emptyTitle,
  emptyDescription,
  filterable = true,
}) {
  const [openReplyId, setOpenReplyId] = useState(null)
  // Soru ve yanıt görseli aynı katmanda gezilebilir olsun — öğretmen
  // çözümü kontrol ederken soruya dönebilmeli.
  const [lightbox, setLightbox] = useState(null)
  // Tablet kalemiyle sorunun üzerine çözüm yazılan tam ekran tahta.
  // Gönderme işini yine mevcut alanlar üstlenir; tahta yalnızca
  // çizimi üretir.
  const [boardQuestion, setBoardQuestion] = useState(null)

  function openLightbox(q, wanted) {
    const items = [
      q.image_url && { src: q.image_url, label: 'Öğrencinin sorusu' },
      q.teacher_reply_image_url && { src: q.teacher_reply_image_url, label: 'Yanıtınız' },
    ].filter(Boolean)
    setLightbox({ items, index: Math.max(0, items.findIndex((i) => i.src === wanted)) })
  }
  const { subject, topic, subjects, topics, filtered, selectSubject, selectTopic } =
    useSubjectTopicFilter(questions)

  const visible = filterable ? filtered : questions

  async function updateStatus(id, status) {
    const { error } = await supabase.from('questions').update({ status }).eq('id', id)
    if (!error) onChanged?.()
  }

  if (!questions || questions.length === 0) {
    return (
      <EmptyState
        icon={Inbox}
        title={emptyTitle ?? 'Gelen kutunuz boş'}
        description={emptyDescription ?? 'Öğrencilerinizden soru geldiğinde burada listelenecek.'}
        compact
      />
    )
  }

  return (
    <div className="flex flex-col gap-4">
      {filterable && subjects.length > 0 && (
        <div className="rounded-card border border-line bg-surface-muted p-4">
          <SubjectTopicFilter
            subject={subject}
            topic={topic}
            subjects={subjects}
            topics={topics}
            onSelectSubject={selectSubject}
            onSelectTopic={selectTopic}
          />
        </div>
      )}

      {visible.length === 0 ? (
        <EmptyState
          icon={Inbox}
          title="Bu ders/konuda soru yok"
          description='Filtreyi "Tümü" yaparak diğer soruları görebilirsiniz.'
          compact
        />
      ) : (
      <ul className="flex flex-col gap-3">
        {visible.map((q) => {
          const answered = Boolean(q.teacher_reply || q.teacher_reply_image_url)
          const replying = openReplyId === q.id
          // Kalemle başlanmış bir çözüm var mı? Varsa düğme "devam et"
          // anlamına gelir — öğretmen yarım bıraktığını buradan görür.
          const drafted = Boolean(q.teacher_reply_strokes?.strokes?.length)

          return (
            <li
              key={q.id}
              className={cn(
                'card relative overflow-hidden p-4 pl-5 transition-shadow hover:shadow-card-hover',
                answered && 'border-success-100'
              )}
            >
              <span
                className={cn(
                  'absolute inset-y-0 left-0 w-1',
                  answered ? 'bg-success-500' : 'bg-brand-500'
                )}
                aria-hidden="true"
              />

              <div className="flex gap-4">
                {q.image_url && (
                  <button
                    type="button"
                    onClick={() => openLightbox(q, q.image_url)}
                    className="focus-ring group relative grid h-28 w-28 shrink-0 place-items-center
                               overflow-hidden rounded-xl border border-line bg-surface-muted"
                    aria-label="Soru görselini büyüt"
                  >
                    {/* Kırpma yok: sorunun kenarındaki şık ya da şekil kesilmesin */}
                    <img
                      src={q.image_url}
                      alt="Soru görseli"
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/25">
                      <ZoomIn className="h-4 w-4 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </button>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Avatar name={q.profiles?.full_name} size="xs" />
                    <span className="text-sm font-semibold text-ink">
                      {q.profiles?.full_name ?? 'Bilinmeyen öğrenci'}
                    </span>
                    {q.subject && (
                      <span className="inline-flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink/55">
                        <span
                          className="h-1.5 w-1.5 rounded-full"
                          style={{ background: colorForKey(q.subject) }}
                          aria-hidden="true"
                        />
                        {q.subject}
                        {q.topic ? ` · ${q.topic}` : ''}
                      </span>
                    )}
                    <span className="text-2xs text-ink/55">
                      {new Date(q.created_at).toLocaleDateString('tr-TR', {
                        day: 'numeric',
                        month: 'long',
                      })}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                    {q.content || 'Fotoğraf ile gönderildi'}
                  </p>

                  {answered && !replying && (
                    <div className="mt-3 rounded-xl border border-success-100 bg-success-50/60 px-3.5 py-3">
                      <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-success-700">
                        <MessageSquareQuote className="h-3.5 w-3.5" aria-hidden="true" />
                        Yanıtınız
                      </p>
                      {q.teacher_reply && (
                        <p className="mt-1.5 text-sm leading-relaxed text-ink/75">
                          {q.teacher_reply}
                        </p>
                      )}
                      {q.teacher_reply_image_url && (
                        <button
                          type="button"
                          onClick={() => openLightbox(q, q.teacher_reply_image_url)}
                          className="focus-ring group relative mt-2 grid h-36 w-full max-w-[14rem] place-items-center
                                     overflow-hidden rounded-lg border border-line bg-surface"
                          aria-label="Yanıt görselini büyüt"
                        >
                          <img
                            src={q.teacher_reply_image_url}
                            alt="Yanıt görseli"
                            loading="lazy"
                            className="max-h-full max-w-full object-contain transition-opacity group-hover:opacity-85"
                          />
                          <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/20">
                            <ZoomIn className="h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                          </span>
                        </button>
                      )}
                    </div>
                  )}

                  {replying ? (
                    <ReplyBox
                      question={q}
                      onCancel={() => setOpenReplyId(null)}
                      onChanged={() => {
                        setOpenReplyId(null)
                        onChanged?.()
                      }}
                    />
                  ) : (
                    <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-2">
                      <Button
                        variant="secondary"
                        size="xs"
                        icon={PenLine}
                        onClick={() => setBoardQuestion(q)}
                      >
                        {drafted ? 'Çözüme devam et' : 'Kalemle Çöz'}
                      </Button>
                      <Button variant="link" size="xs" onClick={() => setOpenReplyId(q.id)}>
                        {answered ? 'Yanıtı düzenle' : 'Yanıtla'}
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <StatusBadge status={q.status} size="sm" />
                  <Select
                    value={q.status}
                    onChange={(e) => updateStatus(q.id, e.target.value)}
                    aria-label="Soru durumu"
                    className="h-9 w-auto py-0 text-xs"
                  >
                    {STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      )}

      {lightbox && (
        <ImageLightbox
          items={lightbox.items}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {boardQuestion && (
        <SolveBoard
          key={boardQuestion.id}
          question={boardQuestion}
          onSaved={onChanged}
          onClose={() => setBoardQuestion(null)}
        />
      )}
    </div>
  )
}
