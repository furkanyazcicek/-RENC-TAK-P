import { useState } from 'react'
import { PenLine, Save } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { resolveTopicLabel } from '../lib/topicHelpers'
import { calcNet } from '../lib/examHelpers'
import { toKey } from '../lib/insights'
import TopicAutocomplete from './TopicAutocomplete'
import { Alert, Button, Card, CardBody, CardHeader, Field, Input, Textarea } from './ui'

// toISOString() UTC verir; Türkiye'de gece yarısından sonra "dün"e düşer ve
// geç saatte çalışan öğrenci bugüne kayıt giremezdi. toKey yerel tarihi döner
// ve insights.js'in gün hesabıyla birebir aynı biçimi üretir.
function todayStr() {
  return toKey(new Date())
}

/**
 * DailyLogForm — günlük çalışma kaydı girişi.
 *
 * Doğru/yanlış girildikçe altta o kaydın neti ve isabet oranı canlı görünür;
 * öğrenci kaydetmeden önce günün nasıl geçtiğini görebiliyor.
 */
export default function DailyLogForm({ onSubmitted, existingTopics = [] }) {
  const { user } = useAuth()
  const [studyDate, setStudyDate] = useState(todayStr())
  const [topic, setTopic] = useState('')
  const [duration, setDuration] = useState('')
  const [correct, setCorrect] = useState('')
  const [incorrect, setIncorrect] = useState('')
  const [empty, setEmpty] = useState('')
  const [notes, setNotes] = useState('')
  const [saving, setSaving] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const correctNum = Number(correct) || 0
  const incorrectNum = Number(incorrect) || 0
  const emptyNum = Number(empty) || 0
  const attempted = correctNum + incorrectNum
  const solved = attempted + emptyNum
  const liveAccuracy = attempted > 0 ? Math.round((correctNum / attempted) * 100) : null
  const liveNet = attempted > 0 ? calcNet(correctNum, incorrectNum) : null

  function resetForm() {
    setStudyDate(todayStr())
    setTopic('')
    setDuration('')
    setCorrect('')
    setIncorrect('')
    setEmpty('')
    setNotes('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const normalizedTopic = resolveTopicLabel(topic, existingTopics)
    if (!normalizedTopic || !studyDate) {
      setFeedback({ tone: 'danger', text: 'Lütfen tarih ve konu alanlarını doldur.' })
      return
    }

    setSaving(true)
    setFeedback(null)

    const { error } = await supabase.from('daily_logs').insert({
      student_id: user.id,
      study_date: studyDate,
      topic: normalizedTopic,
      duration_minutes: duration === '' ? 0 : Number(duration),
      correct: correct === '' ? 0 : Number(correct),
      incorrect: incorrect === '' ? 0 : Number(incorrect),
      empty: empty === '' ? 0 : Number(empty),
      notes: notes.trim() || null,
    })

    setSaving(false)

    if (error) {
      setFeedback({ tone: 'danger', text: error.message })
    } else {
      resetForm()
      setFeedback({ tone: 'success', text: 'Çalışman kaydedildi.' })
      onSubmitted?.()
    }
  }

  return (
    <Card as="form" onSubmit={handleSubmit}>
      <CardHeader
        title="Bugün Ne Çalıştın?"
        description="Tek bir ders/konu için süre ve soru sayılarını gir"
        icon={PenLine}
      />
      <CardBody className="flex flex-col gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Tarih" required>
            {({ id }) => (
              <Input
                id={id}
                type="date"
                required
                value={studyDate}
                max={todayStr()}
                onChange={(e) => setStudyDate(e.target.value)}
              />
            )}
          </Field>

          <Field label="Çalışma Süresi" hint="Dakika cinsinden">
            {({ id }) => (
              <Input
                id={id}
                type="number"
                min="0"
                inputMode="numeric"
                suffix="dk"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="45"
              />
            )}
          </Field>
        </div>

        <Field label="Konu" hint="Ders - Konu biçiminde yaz, örn. Matematik - Türev" required>
          {({ id }) => (
            <TopicAutocomplete
              id={id}
              value={topic}
              onChange={setTopic}
              options={existingTopics}
              placeholder="örn. Matematik - Türev"
              required
            />
          )}
        </Field>

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

        {solved > 0 && (
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-line bg-surface-muted px-4 py-3">
            <div>
              <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Çözülen</p>
              <p className="font-display text-lg font-bold tabular text-ink leading-none">{solved}</p>
            </div>
            {liveAccuracy != null && (
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">İsabet</p>
                <p className="font-display text-lg font-bold tabular text-ink leading-none">
                  %{liveAccuracy}
                </p>
              </div>
            )}
            {liveNet != null && (
              <div>
                <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">Net</p>
                <p className="font-display text-lg font-bold tabular text-ink leading-none">
                  {liveNet.toLocaleString('tr-TR')}
                </p>
              </div>
            )}
          </div>
        )}

        <Field label="Not" hint="İsteğe bağlı — zorlandığın yerler, kaynak adı vb.">
          {({ id }) => (
            <Textarea
              id={id}
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Örn. Türev konusunda zincir kuralında zorlandım…"
            />
          )}
        </Field>

        <Button type="submit" loading={saving} icon={Save} fullWidth>
          {saving ? 'Kaydediliyor…' : 'Çalışmayı Kaydet'}
        </Button>

        {feedback && <Alert tone={feedback.tone}>{feedback.text}</Alert>}
      </CardBody>
    </Card>
  )
}
