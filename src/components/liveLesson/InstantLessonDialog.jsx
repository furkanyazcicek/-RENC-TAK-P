import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Check, Copy, Loader2, Radio, Video } from 'lucide-react'
import { Alert, Button, Field, Input, Modal, Select, useToast } from '../ui'
import { createInstantLesson, fetchMyStudents } from '../../lib/liveLesson/api'

/**
 * "Hemen Ders Başlat" — Zoom'un anlık toplantısının karşılığı.
 *
 * NEDEN AYRI BİR AKIŞ
 * -------------------
 * Planlama formu bir sonraki haftanın dersini kurmak için doğru araç;
 * ama "şu an bağlanalım" dendiğinde tarih, saat, süre, gündem ve
 * hazırlık notu doldurmak akışı kesiyor. Burada tek karar var: hangi
 * öğrenci. Gerisi varsayılan.
 *
 * Ders oluşturulur oluşturulmaz oda AÇIK duruma geçer ve bağlantı
 * kopyalanabilir hâlde önüne gelir — öğretmen WhatsApp'tan yollayıp
 * stüdyoya girer.
 */
export default function InstantLessonDialog({ open, onClose, teacherId, onCreated }) {
  const navigate = useNavigate()
  const toast = useToast()

  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState('')
  const [title, setTitle] = useState('')
  const [minutes, setMinutes] = useState(60)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [created, setCreated] = useState(null)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) return
    setError(null)
    setCreated(null)
    setCopied(false)
    setLoading(true)
    fetchMyStudents()
      .then((list) => {
        setStudents(list)
        if (list.length === 1) setStudentId(list[0].student_id)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [open])

  const lessonUrl = created ? `${window.location.origin}/canli-ders/${created.id}` : ''

  async function start() {
    if (!studentId) {
      setError('Ders başlatmak için bir öğrenci seç.')
      return
    }
    setSaving(true)
    setError(null)
    try {
      const lesson = await createInstantLesson({ teacherId, studentId, title, minutes })
      setCreated(lesson)
      onCreated?.()
      // Bağlantıyı hemen panoya al: öğretmenin ilk yapacağı şey bu.
      try {
        await navigator.clipboard.writeText(`${window.location.origin}/canli-ders/${lesson.id}`)
        setCopied(true)
      } catch {
        /* pano izni yoksa kullanıcı elle kopyalar */
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(lessonUrl)
      setCopied(true)
      toast.success('Bağlantı kopyalandı')
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setError('Bağlantı kopyalanamadı. Aşağıdaki adresi elle seçip kopyalayabilirsin.')
    }
  }

  const studentName = students.find((s) => s.student_id === studentId)?.student_name

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={created ? 'Ders odası açıldı' : 'Hemen ders başlat'}
      description={
        created
          ? `${studentName ?? 'Öğrencin'} bağlantıya dokunduğu anda derse girebilir.`
          : 'Tarih ve saat sorulmaz — ders şimdi başlar.'
      }
      footer={
        created ? (
          <>
            <Button variant="ghost" onClick={onClose}>
              Kapat
            </Button>
            <Button icon={Video} onClick={() => navigate(`/canli-ders/${created.id}/studyo`)}>
              Stüdyoya Gir
            </Button>
          </>
        ) : (
          <>
            <Button variant="ghost" onClick={onClose}>
              Vazgeç
            </Button>
            <Button icon={Radio} loading={saving} disabled={loading || !students.length} onClick={start}>
              Dersi Başlat
            </Button>
          </>
        )
      }
    >
      {error && (
        <Alert tone="danger" title="İşlem tamamlanamadı" className="mb-4">
          {error}
        </Alert>
      )}

      {created ? (
        <div className="flex flex-col gap-3">
          <Field label="Öğrenciye gönderilecek bağlantı">
            <p className="break-all rounded-input border border-line bg-surface-muted px-3.5 py-2.5 text-sm text-ink/80">
              {lessonUrl}
            </p>
          </Field>
          <div>
            <Button variant="secondary" icon={copied ? Check : Copy} onClick={copyLink}>
              {copied ? 'Kopyalandı' : 'Bağlantıyı Kopyala'}
            </Button>
          </div>
          <p className="text-sm leading-relaxed text-ink/60">
            Öğrencin bu bağlantıyı açmasa bile dersi kendi <strong>Canlı Derslerim</strong>{' '}
            sayfasında görür. Bağlantı yalnızca işi kısaltmak içindir; başkasının eline geçse de
            derse giremez — odaya yalnızca dersin iki tarafı alınır.
          </p>
        </div>
      ) : loading ? (
        <p className="flex items-center gap-2 py-4 text-sm text-ink/55">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Öğrencilerin yükleniyor…
        </p>
      ) : students.length === 0 ? (
        <Alert tone="warning" title="Önce öğrenci davet et">
          Ders başlatabilmek için en az bir öğrencinin daveti kabul etmiş olması gerekiyor.
        </Alert>
      ) : (
        <div className="flex flex-col gap-4">
          <Field label="Öğrenci" required>
            {({ id }) => (
              <Select id={id} value={studentId} onChange={(e) => setStudentId(e.target.value)}>
                <option value="">Öğrenci seç</option>
                {students.map((s) => (
                  <option key={s.student_id} value={s.student_id}>
                    {s.student_name}
                  </option>
                ))}
              </Select>
            )}
          </Field>

          <Field label="Ders başlığı" hint="Boş bırakırsan 'Hızlı ders' yazar.">
            {({ id, describedBy }) => (
              <Input
                id={id}
                aria-describedby={describedBy}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Örn. Türev soru çözümü"
                maxLength={120}
              />
            )}
          </Field>

          <Field label="Süre" hint="Ders uzarsa sorun olmaz; bu yalnızca takvimdeki karşılığı.">
            {({ id, describedBy }) => (
              <Select
                id={id}
                aria-describedby={describedBy}
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
              >
                {[30, 45, 60, 90, 120].map((m) => (
                  <option key={m} value={m}>
                    {m} dakika
                  </option>
                ))}
              </Select>
            )}
          </Field>
        </div>
      )}
    </Modal>
  )
}
