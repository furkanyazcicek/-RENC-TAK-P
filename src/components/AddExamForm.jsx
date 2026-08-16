import { useState } from 'react'
import { FlaskConical, Save } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { COMMON_SUBJECTS, calcNet } from '../lib/examHelpers'
import { toKey } from '../lib/insights'
import { Alert, Button, Card, CardBody, CardHeader, Field, Input, Select } from './ui'

// toISOString() UTC verir; gece yarısından sonra "dün"e düşer.
function todayStr() {
  return toKey(new Date())
}

/**
 * AddExamForm — tek ders üzerine yapılan branş denemesi girişi.
 *
 * studentId verilirse öğretmen modunda çalışır (o öğrenci adına ekler),
 * verilmezse öğrenci kendi hesabına ekler (Denemeler sayfası).
 *
 * `bare` verilirse kendi kart çerçevesini çizmez — Modal içinde açıldığında
 * kart içinde kart görüntüsü oluşmasın diye bu kullanılır.
 */
export default function AddExamForm({ studentId, onAdded, bare = false }) {
  const { user } = useAuth()
  const targetStudentId = studentId ?? user?.id

  const [subject, setSubject] = useState('')
  const [examType, setExamType] = useState('')
  const [examDate, setExamDate] = useState(todayStr)
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')
  const [empty, setEmpty] = useState('')
  // Boş bırakılabilir — o zaman süre soru sayısından tahmin edilir
  // (bkz. src/lib/examDuration.js). Deneme artık günlük çalışma
  // istatistiklerine de girdiği için süre anlam taşıyor.
  const [durationMinutes, setDurationMinutes] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const previewNet =
    correct !== '' || incorrect !== '' ? calcNet(correct || 0, incorrect || 0, examType) : null

  async function handleSubmit(e) {
    e.preventDefault()
    if (!subject || !examDate) return

    setSaving(true)
    setFeedback(null)

    const correctNum = correct === '' ? 0 : Number(correct)
    const incorrectNum = incorrect === '' ? 0 : Number(incorrect)
    // Net, Supabase'e gönderilmeden önce burada (frontend'de) hesaplanır.
    // LGS seçiliyse yanlış/3, diğer sınav türlerinde (veya tür seçilmezse) yanlış/4 uygulanır.
    const net = calcNet(correctNum, incorrectNum, examType)

    const { error } = await supabase.from('exams').insert({
      student_id: targetStudentId,
      topic: subject,
      exam_type: examType || null,
      exam_date: examDate,
      correct: correctNum,
      incorrect: incorrectNum,
      empty: empty === '' ? 0 : Number(empty),
      duration_minutes: durationMinutes === '' ? null : Number(durationMinutes),
      net,
    })
    setSaving(false)

    if (error) {
      setFeedback({ tone: 'danger', text: error.message })
    } else {
      setSubject('')
      setExamType('')
      setCorrect('')
      setIncorrect('')
      setEmpty('')
      setDurationMinutes('')
      setFeedback({ tone: 'success', text: `Branş denemesi kaydedildi (${net} net).` })
      onAdded?.()
    }
  }

  const fields = (
    <>
      <div className="grid gap-4 sm:grid-cols-3">
        <Field label="Ders" required>
          {({ id }) => (
            <Select id={id} required value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Ders seç</option>
              {COMMON_SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          )}
        </Field>

        <Field label="Sınav Türü" hint="İsteğe bağlı">
          {({ id }) => (
            <Select id={id} value={examType} onChange={(e) => setExamType(e.target.value)}>
              <option value="">Seçilmedi</option>
              <option value="LGS">LGS</option>
              <option value="TYT">TYT</option>
              <option value="AYT">AYT</option>
              <option value="KPSS">KPSS</option>
            </Select>
          )}
        </Field>

        <Field label="Tarih" required>
          {({ id }) => (
            <Input
              id={id}
              type="date"
              required
              value={examDate}
              max={todayStr()}
              onChange={(e) => setExamDate(e.target.value)}
            />
          )}
        </Field>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Field label="Doğru">
          {({ id }) => (
            <Input
              id={id}
              type="number"
              min="0"
              inputMode="numeric"
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
            />
          )}
        </Field>
        <Field label="Yanlış">
          {({ id }) => (
            <Input
              id={id}
              type="number"
              min="0"
              inputMode="numeric"
              value={incorrect}
              onChange={(e) => setIncorrect(e.target.value)}
            />
          )}
        </Field>
        <Field label="Boş">
          {({ id }) => (
            <Input
              id={id}
              type="number"
              min="0"
              inputMode="numeric"
              value={empty}
              onChange={(e) => setEmpty(e.target.value)}
            />
          )}
        </Field>
      </div>

      <Field
        label="Süre (dakika)"
        hint="İsteğe bağlı — boş bırakırsan soru sayısından tahmin edilir. Bu süre günlük çalışma toplamına eklenir."
      >
        {({ id, describedBy }) => (
          <Input
            id={id}
            aria-describedby={describedBy}
            type="number"
            min="0"
            max="1440"
            inputMode="numeric"
            placeholder="örn. 30"
            value={durationMinutes}
            onChange={(e) => setDurationMinutes(e.target.value)}
          />
        )}
      </Field>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <div>
          <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Hesaplanan Net</p>
          <p className="font-display text-2xl font-bold tabular text-ink leading-none">
            {previewNet != null ? previewNet.toLocaleString('tr-TR') : '—'}
          </p>
          <p className="mt-1 text-xs text-ink/55">
            {examType === 'LGS'
              ? '3 yanlış 1 doğruyu götürür'
              : '4 yanlış 1 doğruyu götürür (tür seçilmezse varsayılan)'}
          </p>
        </div>
        <Button type="submit" loading={saving} icon={Save}>
          {saving ? 'Ekleniyor…' : 'Sonucu Kaydet'}
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
        title="Branş Denemesi Ekle"
        description="Tek bir dersten çözülen denemenin sonucu"
        icon={FlaskConical}
      />
      <CardBody className="flex flex-col gap-4">{fields}</CardBody>
    </Card>
  )
}
