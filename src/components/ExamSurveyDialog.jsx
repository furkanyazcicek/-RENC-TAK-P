import { useMemo, useState } from 'react'
import { ClipboardList, Send, Users } from 'lucide-react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { EXAM_LABELS, gradeLabel } from '../lib/examProfile'
import { Alert, Badge, Button, Card, Modal, Textarea } from './ui'
import { useToast } from './ui/Toast'

const DEFAULT_MESSAGE = `Merhaba! Uygulamaya yeni bir özellik ekledik: Anasayfanda sınava kalan süreyi gösteren bir geri sayım var.

Açılması için hangi sınava hazırlandığını bilmemiz gerekiyor. Anasayfanı aç ve "Hangi sınava hazırlanıyorsun?" kartındaki üç soruyu (sınıfın, sınav senesi mi ara sınıf mı, hedef sınavın) yanıtla — bir dakika bile sürmez.

Teşekkürler!`

/**
 * ExamSurveyDialog — öğretmenin, sınav bilgisi eksik öğrencilere tek
 * seferlik hatırlatma mesajı gönderdiği kutu.
 *
 * Sınav profili uygulamaya sonradan eklendi; yeni kayıtlar bilgiyi kayıt
 * formunda veriyor ama ESKİ öğrencilerde bu alanlar boş. Anket mesajı
 * onları Anasayfa'daki kurulum kartına yönlendirir.
 *
 * ÖNEMLİ: Öğretmen burada öğrenci adına VERİ YAZMAZ, yalnızca mesaj
 * gönderir. Sınav bilgisini öğrencinin kendisi doldurur (profiles UPDATE
 * politikası da zaten yalnızca kişinin kendi satırına izin verir).
 *
 * `students` listesi profiles satırlarıdır. Sınav kolonları veritabanına
 * henüz eklenmemişse (göç çalıştırılmadıysa) alan hiç gelmez; o durumda
 * kutu, kimin eksik olduğunu uyduracağına ne yapılması gerektiğini yazar.
 */
export default function ExamSurveyDialog({ students = [], className }) {
  const { user } = useAuth()
  const toast = useToast()
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  // Kolon var mı? Bir satırda alan tanımlıysa göç çalıştırılmış demektir.
  const columnsReady = students.some((s) => 'target_exam' in (s ?? {}))

  const missing = useMemo(
    () => (columnsReady ? students.filter((s) => !s.target_exam) : []),
    [students, columnsReady]
  )
  const filled = useMemo(
    () => (columnsReady ? students.filter((s) => s.target_exam) : []),
    [students, columnsReady]
  )

  async function handleSend() {
    if (!message.trim()) {
      setError('Mesaj boş olamaz.')
      return
    }
    setSending(true)
    setError('')

    const rows = missing.map((s) => ({
      sender_id: user.id,
      receiver_id: s.id,
      content: message.trim(),
    }))

    const { error: insertError } = await supabase.from('messages').insert(rows)
    setSending(false)

    if (insertError) {
      setError('Mesaj gönderilemedi: ' + insertError.message)
      return
    }
    setOpen(false)
    toast.success(`${rows.length} öğrenciye anket gönderildi`, {
      description: 'Mesajlar sekmesinden yanıtlarını takip edebilirsin.',
    })
  }

  if (!students.length) return null

  return (
    <>
      <Card variant="outline" padding="md" className={className}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex min-w-0 items-start gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
              <ClipboardList className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-bold text-ink">Sınav bilgisi anketi</p>
              {columnsReady ? (
                <p className="mt-0.5 text-xs leading-relaxed text-ink/60">
                  {missing.length === 0
                    ? 'Tüm öğrencilerin sınıf ve hedef sınav bilgisi tamam.'
                    : `${missing.length} öğrencinin sınav bilgisi eksik — geri sayımları bu yüzden açılmıyor.`}
                </p>
              ) : (
                <p className="mt-0.5 text-xs leading-relaxed text-ink/60">
                  Bu özellik için veritabanı güncellemesi gerekiyor:{' '}
                  <code className="rounded bg-ink/[0.06] px-1 py-0.5 text-[11px]">
                    supabase/migration_student_exam_profile.sql
                  </code>{' '}
                  dosyasını Supabase → SQL Editor’de bir kez çalıştırın.
                </p>
              )}
            </div>
          </div>

          {columnsReady && missing.length > 0 && (
            <Button size="sm" icon={Send} onClick={() => setOpen(true)} className="shrink-0">
              Hatırlatma gönder
            </Button>
          )}
        </div>

        {columnsReady && filled.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5 border-t border-line pt-3">
            {filled.slice(0, 8).map((s) => (
              <Badge key={s.id} tone="success" size="sm">
                {s.full_name?.split(' ')[0]} · {EXAM_LABELS[s.target_exam] ?? s.target_exam}
                {s.grade ? ` · ${gradeLabel(s.grade)}` : ''}
              </Badge>
            ))}
            {filled.length > 8 && (
              <Badge tone="neutral" size="sm">
                +{filled.length - 8}
              </Badge>
            )}
          </div>
        )}
      </Card>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Sınav bilgisi anketi gönder"
        description={`${missing.length} öğrenciye aynı mesaj tek tek gönderilecek.`}
        maxWidth="max-w-xl"
      >
        {error && (
          <Alert tone="danger" className="mb-4">
            {error}
          </Alert>
        )}

        <div className="mb-4 rounded-card border border-line bg-surface-muted p-3">
          <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-wider text-ink/55">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Alıcılar
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {missing.map((s) => (
              <Badge key={s.id} tone="brand" size="sm">
                {s.full_name}
              </Badge>
            ))}
          </div>
        </div>

        <Textarea
          rows={8}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-label="Anket mesajı"
        />
        <p className="mt-1.5 text-xs text-ink/55">
          Mesajı göndermeden önce dilediğin gibi düzenleyebilirsin.
        </p>

        <div className="mt-5 flex flex-wrap justify-end gap-2">
          <Button variant="ghost" onClick={() => setOpen(false)} disabled={sending}>
            Vazgeç
          </Button>
          <Button icon={Send} loading={sending} onClick={handleSend}>
            {missing.length} öğrenciye gönder
          </Button>
        </div>
      </Modal>
    </>
  )
}
