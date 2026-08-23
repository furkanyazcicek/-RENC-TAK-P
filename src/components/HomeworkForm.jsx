import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Alert, Button, Card, CardBody, CardHeader, Field, Input, Select, Textarea } from './ui'

/**
 * HomeworkForm — öğretmenin ödev atama formu.
 *
 * `bare` verilirse kendi kart çerçevesini çizmez; Modal içinde açıldığında
 * kart içinde kart görüntüsü oluşmasın diye bu kullanılır.
 */
export default function HomeworkForm({ onAssigned, defaultStudentId, bare = false }) {
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
      setFeedback({ type: 'danger', text: error.message })
    } else {
      setTitle('')
      setDescription('')
      setDueDate('')
      setFeedback({ type: 'success', text: 'Ödev atandı.' })
      onAssigned?.()
    }
  }

  const fields = (
    <>
      {!defaultStudentId && (
        <Field label="Öğrenci">
          {({ id }) => (
            <Select id={id} value={studentId} onChange={(e) => setStudentId(e.target.value)}>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.full_name}
                </option>
              ))}
            </Select>
          )}
        </Field>
      )}

      <Field label="Ödev Başlığı" required>
        {({ id }) => (
          <Input
            id={id}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="örn. Trigonometri 20 soru"
          />
        )}
      </Field>

      <Field label="Açıklama" hint="İsteğe bağlı — kaynak, sayfa aralığı vb.">
        {({ id }) => (
          <Textarea
            id={id}
            rows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        )}
      </Field>

      <div className="grid items-start gap-4 sm:grid-cols-2">
        <Field label="Teslim Tarihi" hint="İsteğe bağlı">
          {({ id }) => (
            <Input id={id} type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          )}
        </Field>
        <Button type="submit" loading={saving} icon={Plus} className="sm:mt-6">
          {saving ? 'Atanıyor…' : 'Ödevi Ata'}
        </Button>
      </div>

      {feedback && <Alert tone={feedback.type}>{feedback.text}</Alert>}
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
      <CardHeader title="Yeni Ödev Ata" icon={Plus} />
      <CardBody className="flex flex-col gap-4">{fields}</CardBody>
    </Card>
  )
}
