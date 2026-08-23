import { useState } from 'react'
import { Save } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { SUBJECT_PRESETS, calcNet } from '../lib/examHelpers'
import { EXAM_DURATIONS, durationHint } from '../lib/examDuration'
import { toKey } from '../lib/insights'
import { Alert, Button, Field, Input, Tabs } from './ui'

// toISOString() UTC verir; Türkiye'de gece yarısından sonra "dün"e düşer
// ve bugünü seçmeyi engellerdi. toKey yerel tarihi döner.
function todayStr() {
  return toKey(new Date())
}

function buildRows(type) {
  return SUBJECT_PRESETS[type].map((subject) => ({ subject, correct: '', incorrect: '', empty: '' }))
}

/**
 * MockExamForm — genel deneme sonucu giriş formu.
 *
 * Ders satırları tek tek doldurulurken alt bantta toplam net canlı olarak
 * güncellenir; öğrenci kaydetmeden önce sayının doğru olduğunu görebilir.
 * Form Modal içinde açıldığı için kendi kart çerçevesini çizmez.
 */
export default function MockExamForm({ onSubmitted }) {
  const { user } = useAuth()
  const [examType, setExamType] = useState('TYT')
  const [examName, setExamName] = useState('')
  const [examDate, setExamDate] = useState(todayStr())
  // Boş bırakılabilir — o zaman sınav türünün standart süresi kullanılır
  // (bkz. src/lib/examDuration.js). Deneme artık günlük çalışma
  // istatistiklerine de girdiği için süre anlam taşıyor.
  const [durationMinutes, setDurationMinutes] = useState('')
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

  const totalNet = rows.reduce((sum, r) => sum + calcNet(r.correct, r.incorrect, examType), 0)
  const filledRows = rows.filter(
    (r) => r.correct !== '' || r.incorrect !== '' || r.empty !== ''
  ).length

  async function handleSubmit(e) {
    e.preventDefault()

    // Hiç dokunulmamış ders satırları kaydedilmez. Aksi halde girilmemiş
    // dersler "0 net alınmış" gibi veritabanına yazılır ve ders bazlı
    // ortalamaları aşağı çeker, deneme dökümünde sahte 0,00 satırları çıkar.
    const touched = rows.filter((r) => r.correct !== '' || r.incorrect !== '' || r.empty !== '')
    if (touched.length === 0) {
      setFeedback({ tone: 'warning', text: 'En az bir dersin sonucunu gir.' })
      return
    }

    setSaving(true)
    setFeedback(null)

    const { data: exam, error: examError } = await supabase
      .from('mock_exams')
      .insert({
        student_id: user.id,
        exam_type: examType,
        exam_name: examName.trim() || null,
        exam_date: examDate,
        duration_minutes: durationMinutes === '' ? null : Number(durationMinutes),
      })
      .select()
      .single()

    if (examError) {
      setFeedback({ tone: 'danger', text: examError.message })
      setSaving(false)
      return
    }

    const subjectRows = touched.map((r) => ({
      mock_exam_id: exam.id,
      subject: r.subject,
      correct: r.correct === '' ? 0 : Number(r.correct),
      incorrect: r.incorrect === '' ? 0 : Number(r.incorrect),
      empty: r.empty === '' ? 0 : Number(r.empty),
    }))

    const { error: subjectsError } = await supabase.from('mock_exam_subjects').insert(subjectRows)

    setSaving(false)

    if (subjectsError) {
      setFeedback({ tone: 'danger', text: subjectsError.message })
    } else {
      setExamName('')
      setDurationMinutes('')
      setRows(buildRows(examType))
      setFeedback({ tone: 'success', text: 'Deneme sonucun kaydedildi.' })
      onSubmitted?.()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div role="group" aria-label="Sınav türü">
        <p className="label-base">Sınav Türü</p>
        <Tabs
          items={Object.keys(SUBJECT_PRESETS).map((type) => ({ value: type, label: type }))}
          value={examType}
          onChange={handleTypeChange}
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <Field label="Deneme Adı" hint="İsteğe bağlı — listede bunu görürsün">
          {({ id }) => (
            <Input
              id={id}
              value={examName}
              onChange={(e) => setExamName(e.target.value)}
              placeholder="örn. Final Deneme 3"
            />
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
        <Field label="Süre (dakika)" hint={durationHint(examType)}>
          {({ id, describedBy }) => (
            <Input
              id={id}
              aria-describedby={describedBy}
              type="number"
              min="0"
              max="1440"
              inputMode="numeric"
              placeholder={String(EXAM_DURATIONS[examType] ?? '')}
              value={durationMinutes}
              onChange={(e) => setDurationMinutes(e.target.value)}
            />
          )}
        </Field>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-[1fr_56px_56px_56px] gap-2 px-1 text-2xs font-bold uppercase tracking-wider text-ink/55">
          <span>Ders</span>
          <span className="text-center text-success-600">Doğru</span>
          <span className="text-center text-danger-600">Yanlış</span>
          <span className="text-center">Boş</span>
        </div>

        <div className="flex flex-col gap-2 rounded-card border border-line bg-surface-muted p-3">
          {rows.map((row, i) => (
            <div key={row.subject} className="grid grid-cols-[1fr_56px_56px_56px] items-center gap-2">
              <span className="truncate text-sm font-medium text-ink/80">{row.subject}</span>
              <Input
                type="number"
                min="0"
                inputMode="numeric"
                aria-label={`${row.subject} doğru`}
                value={row.correct}
                onChange={(e) => updateRow(i, 'correct', e.target.value)}
                className="h-10 px-1 py-0 text-center"
              />
              <Input
                type="number"
                min="0"
                inputMode="numeric"
                aria-label={`${row.subject} yanlış`}
                value={row.incorrect}
                onChange={(e) => updateRow(i, 'incorrect', e.target.value)}
                className="h-10 px-1 py-0 text-center"
              />
              <Input
                type="number"
                min="0"
                inputMode="numeric"
                aria-label={`${row.subject} boş`}
                value={row.empty}
                onChange={(e) => updateRow(i, 'empty', e.target.value)}
                className="h-10 px-1 py-0 text-center"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
        <div>
          <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Toplam Net</p>
          <p className="font-display text-2xl font-bold tabular text-ink leading-none">
            {(Math.round(totalNet * 100) / 100).toLocaleString('tr-TR')}
          </p>
          <p className="mt-1 text-xs text-ink/55">
            {filledRows}/{rows.length} ders dolduruldu
            {examType === 'LGS' ? ' · 3 yanlış 1 doğruyu götürür' : ' · 4 yanlış 1 doğruyu götürür'}
          </p>
        </div>
        <Button type="submit" loading={saving} icon={Save}>
          {saving ? 'Kaydediliyor…' : 'Denemeyi Kaydet'}
        </Button>
      </div>

      {feedback && <Alert tone={feedback.tone}>{feedback.text}</Alert>}
    </form>
  )
}
