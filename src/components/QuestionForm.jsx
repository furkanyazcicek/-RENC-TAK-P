import { useEffect, useState } from 'react'
import { HelpCircle, ImagePlus, Send, X } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import useAcademicActivity from '../hooks/useAcademicActivity'
import { academicStatusMessage } from '../lib/learning/academicActivity/client'
import { stageAndUploadAcademicQuestionMedia } from '../lib/learning/academicActivity/media'
import { COMMON_SUBJECTS } from '../lib/examHelpers'
import { Alert, Button, Card, CardBody, CardHeader, Field, Input, Select, Textarea } from './ui'

/**
 * QuestionForm — öğrencinin takıldığı soruyu öğretmene iletmesi.
 *
 * Fotoğraf seçildiğinde küçük bir önizleme belirir; öğrenci göndermeden önce
 * doğru fotoğrafı seçtiğini görebilir.
 *
 * `bare` verilirse kendi kart çerçevesini çizmez — Modal içinde açıldığında
 * kart içinde kart görüntüsü oluşmasın diye bu kullanılır.
 */
export default function QuestionForm({ onSubmitted, bare = false, studentId = null, teacherMode = false }) {
  const { user } = useAuth()
  const academic = useAcademicActivity()
  const [content, setContent] = useState('')
  const [subject, setSubject] = useState('')
  const [topic, setTopic] = useState('')
  const [file, setFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [sending, setSending] = useState(false)
  const [feedback, setFeedback] = useState(null)

  // Önizleme URL'i bellekte tutulur; dosya değişince eskisi serbest bırakılır
  useEffect(() => {
    if (!file) {
      setPreviewUrl(null)
      return undefined
    }
    const url = URL.createObjectURL(file)
    setPreviewUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  async function handleSubmit(e) {
    e.preventDefault()
    if (!content.trim() && !file) {
      setFeedback({ tone: 'warning', text: 'Bir soru yaz ya da fotoğraf ekle.' })
      return
    }
    if (teacherMode && !studentId) {
      setFeedback({ tone: 'warning', text: 'Önce öğrenciyi seç.' })
      return
    }

    setSending(true)
    setFeedback(null)

    let mediaActionId = null
    try {
      if (file) {
        const media = await stageAndUploadAcademicQuestionMedia({
          studentId: teacherMode ? studentId : user.id,
          actorId: user.id,
          mediaKind: 'student_question',
          file,
        })
        mediaActionId = media.mediaActionId
      }

      const response = await academic.performSensitive(
        teacherMode ? 'question_teacher_share' : 'question_submit',
        {
        ...(teacherMode ? { student_id: studentId } : {}),
        content: content.trim() || null,
        subject: subject || null,
        topic: topic.trim() || null,
        media_action_id: mediaActionId,
      })
      if (response.status !== 'saved') {
        setFeedback({ tone: response.status === 'offline_pending' ? 'warning' : 'danger', text: academicStatusMessage(response.status) })
        return
      }

      setContent('')
      setSubject('')
      setTopic('')
      setFile(null)
      setFeedback({ tone: 'success', text: teacherMode ? 'Soru öğrenciyle paylaşıldı.' : 'Sorun öğretmenine iletildi.' })
      onSubmitted?.()
    } catch (err) {
      setFeedback({ tone: 'danger', text: err.message ?? 'Gönderilemedi, tekrar dene.' })
    } finally {
      setSending(false)
    }
  }

  const fields = (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ders" hint="İsteğe bağlı — arşivde filtrelemeni kolaylaştırır">
          {({ id }) => (
            <Select id={id} value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Ders seç</option>
              {COMMON_SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          )}
        </Field>

        <Field label="Konu" hint="İsteğe bağlı">
          {({ id }) => (
            <Input
              id={id}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="örn. Trigonometri"
            />
          )}
        </Field>
      </div>

      <Field label="Sorun" hint="Nerede takıldığını yazarsan yanıt daha isabetli olur">
        {({ id }) => (
          <Textarea
            id={id}
            rows={3}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Sorunu buraya yazabilirsin…"
          />
        )}
      </Field>

      {previewUrl && (
        <div className="relative w-fit">
          <img
            src={previewUrl}
            alt="Seçilen soru görseli"
            className="h-28 w-28 rounded-xl border border-line object-cover"
          />
          <button
            type="button"
            onClick={() => setFile(null)}
            aria-label="Fotoğrafı kaldır"
            className="focus-ring absolute -right-3 -top-3 grid h-11 w-11 place-items-center rounded-full bg-danger-500 text-white shadow-card"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        </div>
      )}

      <div className="flex flex-col gap-3 border-t border-line pt-4 sm:flex-row sm:items-center">
        <label className="focus-ring inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-xl border border-dashed border-brand-300 px-4 py-2.5 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-50">
          <ImagePlus className="h-4 w-4" aria-hidden="true" />
          <span className="max-w-[14rem] truncate">{file ? file.name : 'Fotoğraf ekle'}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <Button type="submit" loading={sending} icon={Send} className="sm:ml-auto">
          {sending ? 'Gönderiliyor…' : teacherMode ? 'Öğrenciye Gönder' : 'Öğretmenime Gönder'}
        </Button>
      </div>

      {feedback && <Alert tone={feedback.tone}>{feedback.text}</Alert>}
    </>
  )

  if (bare) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {fields}
      </form>
    )
  }

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <CardHeader
        title="Çözemediğin bir soru mu var?"
        description="Sorunu yaz ya da fotoğrafını ekle — öğretmenine iletilsin"
        icon={HelpCircle}
      />
      <CardBody className="flex flex-col gap-4">{fields}</CardBody>
    </Card>
  )
}
