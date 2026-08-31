import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2, Radio } from 'lucide-react'
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

  useEffect(() => {
    if (!open) return
    setError(null)
    setLoading(true)
    fetchMyStudents()
      .then((list) => {
        setStudents(list)
        if (list.length === 1) setStudentId(list[0].student_id)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [open])

  /**
   * DERS OLUŞUNCA DOĞRUDAN STÜDYOYA GİRİLİR.
   *
   * Önce bağlantıyı gösteren bir ara adım vardı; "Dersi Başlat"a basan
   * öğretmen derse girdiğini sanıp ekranın değişmemesine takılıyordu.
   * Beklenti net: başlat = derse gir. Bağlantı arka planda panoya
   * kopyalanır, stüdyonun üst şeridinde de "Bağlantı" düğmesi durur.
   */
  async function start() {
    if (!studentId) {
      setError('Ders başlatmak için önce bir öğrenci seç.')
      return
    }
    setSaving(true)
    setError(null)
    try {
      const lesson = await createInstantLesson({ teacherId, studentId, title, minutes })
      onCreated?.()

      let panoyaAlindi = false
      try {
        await navigator.clipboard.writeText(`${window.location.origin}/canli-ders/${lesson.id}`)
        panoyaAlindi = true
      } catch {
        /* pano izni yoksa öğretmen stüdyodaki düğmeden kopyalar */
      }

      toast.success(
        panoyaAlindi
          ? 'Ders açıldı — bağlantı kopyalandı, öğrencine gönderebilirsin'
          : 'Ders açıldı — bağlantıyı üstteki "Bağlantı" düğmesinden kopyalayabilirsin'
      )
      onClose?.()
      navigate(`/canli-ders/${lesson.id}/studyo`)
    } catch (err) {
      setError(err.message)
      setSaving(false)
    }
  }


  const studentName = students.find((s) => s.student_id === studentId)?.student_name

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Hemen ders başlat"
      description={
        studentName
          ? `${studentName} bağlantıya dokunduğu anda derse girebilir.`
          : 'Tarih ve saat sorulmaz — ders şimdi başlar.'
      }
      footer={
        <>
          <Button variant="ghost" onClick={onClose}>
            Vazgeç
          </Button>
          <Button
            icon={Radio}
            loading={saving}
            /* Öğrenci seçilmeden düğme AKTİF OLMAZ: aksi hâlde basılıyor,
               hata çıkıyor ve "hiçbir şey olmadı" gibi görünüyordu. */
            disabled={loading || !students.length || !studentId}
            onClick={start}
          >
            Dersi Başlat
          </Button>
        </>
      }
    >
      {error && (
        <Alert tone="danger" title="İşlem tamamlanamadı" className="mb-4">
          {error}
        </Alert>
      )}

      {loading ? (

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
          <Field
            label="Öğrenci"
            required
            hint={studentId ? undefined : 'Dersi başlatmak için listeden bir öğrenci seç.'}
          >
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
