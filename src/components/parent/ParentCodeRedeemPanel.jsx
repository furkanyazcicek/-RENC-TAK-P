import { useState } from 'react'
import { ArrowRight, Clock, KeyRound, ShieldCheck, UserCheck } from 'lucide-react'

import { formatCode, normalizeCode, previewParentCode, redeemParentCode } from '../../lib/parentLink'
import { Alert, Badge, Button, Field, Input } from '../ui'
import { Panel } from '../dashboard'

/**
 * "Öğrenci Doğrula" — velinin kendi panelindeki kod giriş alanı.
 *
 * İki aşamalı: önce kod ÖN İZLENİR (hangi öğrenci olduğu gösterilir, hiçbir
 * kayıt oluşmaz), veli doğru kişi olduğunu görüp onaylayınca istek
 * gönderilir. İstek gönderilmesi erişim vermez — öğrenci kendi profilinden
 * onaylayana kadar veli tek satır veri göremez.
 *
 * `onLinked` bağlantı isteği oluştuğunda çağrılır; panel listesini tazeler.
 */
export default function ParentCodeRedeemPanel({ onLinked, compact = false }) {
  const [input, setInput] = useState('')
  const [checking, setChecking] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  // Ön izleme sonucu: { studentName } — doğrulama ekranını açar.
  const [preview, setPreview] = useState(null)
  const [done, setDone] = useState(null)

  const normalized = normalizeCode(input)
  const complete = normalized.length === 8

  async function handleCheck(e) {
    e.preventDefault()
    setError('')
    setChecking(true)
    const res = await previewParentCode(normalized)
    setChecking(false)

    if (res.error) {
      setError(res.error)
      return
    }
    setPreview({ studentName: res.studentName })
  }

  async function handleConfirm() {
    setError('')
    setSending(true)
    const res = await redeemParentCode(normalized)
    setSending(false)

    if (res.error) {
      setError(res.error)
      setPreview(null)
      return
    }
    setDone({ studentName: res.studentName })
    setPreview(null)
    setInput('')
    onLinked?.()
  }

  function handleCancel() {
    setPreview(null)
    setError('')
  }

  const body = (
    <div className="flex flex-col gap-4">
      {error && <Alert tone="danger">{error}</Alert>}

      {done ? (
        /* ---------- İSTEK GÖNDERİLDİ ---------- */
        <div className="rounded-card border border-warning-500/30 bg-warning-50/50 p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-warning-500/10 text-warning-600">
              <Clock className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-semibold text-ink">
                İstek gönderildi — {done.studentName} onayı bekleniyor
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">
                Öğrenci kendi profilindeki <span className="font-semibold">Veli Doğrula</span>{' '}
                bölümünden isteğinizi onayladığında paneliniz otomatik olarak dolacak. Onaylanana
                kadar hiçbir veri görüntülenmez.
              </p>
              <Button
                variant="ghost"
                size="sm"
                className="mt-3"
                onClick={() => setDone(null)}
              >
                Başka bir kod gir
              </Button>
            </div>
          </div>
        </div>
      ) : preview ? (
        /* ---------- ONAY EKRANI ---------- */
        <div className="rounded-card border border-line bg-surface-muted p-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600">
              <UserCheck className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-ink/65">Bağlantı kurmak üzere olduğunuz öğrenci:</p>
              <p className="mt-1 font-display text-lg font-bold text-ink">{preview.studentName}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink/60">
                Devam ederseniz bir bağlantı isteği oluşturulur. İstek, öğrenci kendi profilinden
                onaylayana kadar size hiçbir erişim vermez.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button icon={ArrowRight} loading={sending} onClick={handleConfirm}>
                  Bağlantı isteği gönder
                </Button>
                <Button variant="secondary" disabled={sending} onClick={handleCancel}>
                  Vazgeç
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ---------- KOD GİRİŞİ ---------- */
        <form onSubmit={handleCheck} className="flex flex-col gap-4">
          <Field
            label="Veli doğrulama kodu"
            hint="Öğrencinin profilinden aldığı 8 karakterli kod — örn. K7M2-9PXR"
          >
            {({ id, describedBy }) => (
              <Input
                id={id}
                aria-describedby={describedBy}
                icon={KeyRound}
                placeholder="XXXX-XXXX"
                autoComplete="off"
                autoCapitalize="characters"
                spellCheck={false}
                value={formatCode(input)}
                onChange={(e) => setInput(e.target.value)}
                className="font-display text-lg tracking-[0.2em] tabular"
              />
            )}
          </Field>

          <div className="flex items-center gap-3">
            <Button type="submit" icon={ArrowRight} loading={checking} disabled={!complete}>
              Kodu doğrula
            </Button>
            {!complete && normalized.length > 0 && (
              <span className="text-xs text-ink/55">{8 - normalized.length} karakter kaldı</span>
            )}
          </div>
        </form>
      )}
    </div>
  )

  if (compact) return body

  return (
    <Panel
      title="Öğrenci Doğrula"
      description="Öğrencinizin size verdiği doğrulama kodunu girin"
      icon={ShieldCheck}
      iconTone="#0891B2"
      action={<Badge tone="aqua" size="sm">Güvenli eşleşme</Badge>}
      footnote="Kod öğrencinin kendi profilinden oluşturulur ve tek kullanımlıktır. Bağlantı, öğrenci onayladıktan sonra aktifleşir."
    >
      {body}
    </Panel>
  )
}
