import { useState } from 'react'
import { CalendarClock, Check, Sparkles } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import {
  defaultExamYear,
  isMissingColumnError,
  MIGRATION_HINT,
  suggestForGrade,
} from '../lib/examProfile'
import ExamProfileFields from './ExamProfileFields'
import { Alert, Button, Card } from './ui'
import { useToast } from './ui/Toast'

const SNOOZE_KEY = 'drkoc:exam-setup-snoozed-until'
const SNOOZE_DAYS = 3

export function isExamSetupSnoozed() {
  try {
    const until = Number(localStorage.getItem(SNOOZE_KEY) || 0)
    return Date.now() < until
  } catch {
    return false
  }
}

/**
 * ExamSetupCard — mevcut öğrencilere gösterilen tek seferlik sınav anketi.
 *
 * Sınav bilgisi uygulamaya sonradan eklendi; bugüne kadar kayıt olmuş
 * öğrencilerin sınıfı ve hedef sınavı hiç sorulmadı. Öğretmen Mesajlar
 * sekmesinden hatırlatma gönderir, öğrenci de bu kartı doldurur —
 * veriyi öğrencinin KENDİSİ yazar (profiles UPDATE politikası zaten
 * yalnızca kişinin kendi satırına izin veriyor).
 *
 * Kaydedildiği anda Anasayfa'daki geri sayım dairesi açılır.
 */
export default function ExamSetupCard({ onSaved, onSnooze }) {
  const { user, profile, refreshProfile } = useAuth()
  const toast = useToast()

  const [form, setForm] = useState(() => {
    const grade = profile?.grade ?? null
    const suggestion = grade ? suggestForGrade(grade) : { targetExam: '', isExamYear: null }
    return {
      grade,
      target_exam: profile?.target_exam ?? suggestion.targetExam ?? '',
      is_exam_year: profile?.is_exam_year ?? suggestion.isExamYear ?? null,
      exam_year: profile?.exam_year ?? null,
    }
  })
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  const noExam = form.target_exam === 'YOK'
  const ready =
    Boolean(form.grade) &&
    form.is_exam_year !== null &&
    Boolean(form.target_exam) &&
    (noExam || Boolean(form.exam_year))

  async function handleSave() {
    setSaving(true)
    setError('')

    const payload = {
      grade: form.grade,
      target_exam: form.target_exam,
      is_exam_year: form.is_exam_year,
      exam_year: noExam
        ? null
        : (form.exam_year ??
          defaultExamYear(form.grade, form.target_exam, form.is_exam_year)),
      exam_profile_updated_at: new Date().toISOString(),
    }

    const { error: updateError } = await supabase
      .from('profiles')
      .update(payload)
      .eq('id', user.id)
    setSaving(false)

    if (updateError) {
      setError(isMissingColumnError(updateError) ? MIGRATION_HINT : updateError.message)
      return
    }

    await refreshProfile()
    toast.success('Sınav bilgin kaydedildi', {
      description: noExam ? undefined : 'Geri sayım Anasayfanda açıldı.',
    })
    onSaved?.()
  }

  function handleSnooze() {
    try {
      localStorage.setItem(SNOOZE_KEY, String(Date.now() + SNOOZE_DAYS * 24 * 60 * 60 * 1000))
    } catch {
      /* localStorage kapalıysa sorun değil — kart sadece yeniden görünür */
    }
    onSnooze?.()
  }

  return (
    <Card variant="highlight" glow padding="none" className="overflow-hidden">
      <div className="flex items-start gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aurora-gradient text-white shadow-aurora">
          <CalendarClock className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-2xs font-bold uppercase tracking-[0.14em] text-brand-600">
            Tek seferlik
          </p>
          <h2 className="font-display text-lg font-extrabold text-ink">
            Hangi sınava hazırlanıyorsun?
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-ink/65">
            Bu üç soruyu yanıtladığında Anasayfanda sınava kalan süreyi gösteren geri sayım
            açılır; AI Koç da önerilerini seviyene göre verir.
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
        {error && (
          <Alert tone="danger" className="mb-4">
            {error}
          </Alert>
        )}

        <ExamProfileFields value={form} onChange={setForm} />

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <Button icon={Check} loading={saving} disabled={!ready || saving} onClick={handleSave}>
            Kaydet ve geri sayımı aç
          </Button>
          <Button variant="ghost" onClick={handleSnooze} disabled={saving}>
            Sonra
          </Button>
          <span className="ml-auto inline-flex items-center gap-1.5 text-2xs text-ink/50">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Profil sayfasından her zaman değiştirebilirsin
          </span>
        </div>
      </div>
    </Card>
  )
}
