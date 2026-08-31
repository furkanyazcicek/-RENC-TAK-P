import { useCallback, useEffect, useState } from 'react'
import { Check, Copy, Link2, Loader2, Trash2, UserPlus, Users } from 'lucide-react'
import { Alert, Badge, Button, EmptyState, Field, Input, useToast } from '../ui'
import {
  createInvite,
  endLink,
  fetchMyStudents,
  fetchOpenInvites,
  isSchemaMissing,
  revokeInvite,
} from '../../lib/liveLesson/api'
import SchemaMissingNotice from './SchemaMissingNotice'
import { formatLessonDateTime } from '../../lib/liveLesson/time'

/**
 * Öğretmenin öğrenci davet ve bağlantı yönetimi.
 *
 * GÜVENLİK NOTU — BAĞLANTI BİR KEZ GÖSTERİLİR
 * -------------------------------------------
 * Davet bağlantısındaki belirteç veritabanında AÇIK METİN OLARAK
 * TUTULMAZ, yalnızca SHA-256 özeti saklanır. Bu yüzden bağlantı üretildiği
 * anda bir kez gösterilir; sayfa yenilenirse geri getirilemez. Kaybolursa
 * yeni davet üretilir, eskisi iptal edilir. Bu bilinçli bir tercih: davet
 * bağlantıları veritabanı dökümünden okunabilir olmamalı.
 */
export default function InviteStudentsPanel({ onChanged }) {
  const toast = useToast()
  const [students, setStudents] = useState([])
  const [invites, setInvites] = useState([])
  const [loading, setLoading] = useState(true)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [creating, setCreating] = useState(false)
  const [label, setLabel] = useState('')
  const [freshLink, setFreshLink] = useState(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const [list, open] = await Promise.all([fetchMyStudents(), fetchOpenInvites()])
      setStudents(list)
      setInvites(open)
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleCreate() {
    setCreating(true)
    setError(null)
    setCopied(false)
    try {
      const invite = await createInvite({ label: label.trim() || null })
      const url = `${window.location.origin}/davet/ogretmen/${invite.invite_token}`
      setFreshLink({ url, expiresAt: invite.token_expires_at })
      setLabel('')
      await load()
      onChanged?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setCreating(false)
    }
  }

  async function copyLink() {
    if (!freshLink) return
    try {
      await navigator.clipboard.writeText(freshLink.url)
      setCopied(true)
      toast.success('Davet bağlantısı kopyalandı')
      window.setTimeout(() => setCopied(false), 2500)
    } catch {
      setError('Bağlantı kopyalanamadı. Metni elle seçip kopyalayabilirsin.')
    }
  }

  if (schemaMissing) return <SchemaMissingNotice />

  const openInvites = invites.filter(
    (i) => !i.used_at && !i.revoked_at && new Date(i.expires_at) > new Date()
  )

  return (
    <div className="flex flex-col gap-5">
      {error && (
        <Alert tone="danger" title="İşlem tamamlanamadı">
          {error}
        </Alert>
      )}

      {/* Davet üretimi */}
      <section className="rounded-card border border-line bg-surface-muted p-4">
        <h3 className="font-display text-sm font-bold text-ink">Yeni öğrenci davet et</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">
          Bağlantıyı öğrenciye gönder. Öğrenci hesabıyla açıp kabul ettiğinde verilerini
          görebilir ve ona ders planlayabilirsin.
        </p>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-end">
          <Field label="Kime gönderiyorsun? (isteğe bağlı)" className="flex-1">
            {({ id }) => (
              <Input
                id={id}
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Örn. Emin — 11. sınıf"
                maxLength={60}
              />
            )}
          </Field>
          <Button icon={UserPlus} loading={creating} onClick={handleCreate} className="sm:mb-0">
            Davet Bağlantısı Oluştur
          </Button>
        </div>

        {freshLink && (
          <div className="mt-4 rounded-input border border-brand-500/25 bg-brand-500/[0.06] p-3">
            <p className="text-xs font-semibold text-brand-800">
              Bağlantı hazır — bu ekranı kapatınca bir daha gösterilemez
            </p>
            <p className="mt-1.5 break-all rounded-input bg-surface px-3 py-2 text-xs text-ink/75">
              {freshLink.url}
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Button size="sm" variant="secondary" icon={copied ? Check : Copy} onClick={copyLink}>
                {copied ? 'Kopyalandı' : 'Bağlantıyı kopyala'}
              </Button>
              <span className="text-xs text-ink/55">
                Geçerlilik: {formatLessonDateTime(freshLink.expiresAt)}
              </span>
            </div>
          </div>
        )}
      </section>

      {/* Bekleyen davetler */}
      {openInvites.length > 0 && (
        <section>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink/50">
            Bekleyen davetler ({openInvites.length})
          </h3>
          <ul className="flex flex-col divide-y divide-line">
            {openInvites.map((invite) => (
              <li key={invite.id} className="flex items-center gap-3 py-2.5">
                <Link2 className="h-4 w-4 shrink-0 text-ink/40" strokeWidth={2} aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">
                    {invite.label || `Davet …${invite.token_hint}`}
                  </p>
                  <p className="text-xs text-ink/55">
                    Son geçerlilik: {formatLessonDateTime(invite.expires_at)}
                  </p>
                </div>
                <Button
                  size="xs"
                  variant="ghost"
                  icon={Trash2}
                  onClick={async () => {
                    try {
                      await revokeInvite(invite.id)
                      toast.success('Davet iptal edildi')
                      await load()
                    } catch (err) {
                      setError(err.message)
                    }
                  }}
                >
                  İptal
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Aktif öğrenciler */}
      <section>
        <h3 className="mb-2 text-xs font-bold uppercase tracking-wide text-ink/50">
          Öğrencilerin ({students.length})
        </h3>
        {loading ? (
          <p className="flex items-center gap-2 py-4 text-sm text-ink/55">
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Yükleniyor…
          </p>
        ) : students.length === 0 ? (
          <EmptyState
            compact
            icon={Users}
            title="Henüz bağlı öğrencin yok"
            description="Yukarıdan bir davet bağlantısı oluşturup öğrencine gönder."
          />
        ) : (
          <ul className="flex flex-col divide-y divide-line">
            {students.map((s) => (
              <li key={s.link_id} className="flex items-center gap-3 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-ink">{s.student_name}</p>
                  {s.student_email && <p className="truncate text-xs text-ink/55">{s.student_email}</p>}
                </div>
                <Badge tone="success" size="sm" dot>
                  Aktif
                </Badge>
                <Button
                  size="xs"
                  variant="ghost"
                  onClick={async () => {
                    if (!window.confirm(`${s.student_name} ile bağlantını sonlandırmak istiyor musun? Verilerine erişimin kapanır.`)) return
                    try {
                      await endLink(s.link_id)
                      toast.success('Bağlantı sonlandırıldı')
                      await load()
                      onChanged?.()
                    } catch (err) {
                      setError(err.message)
                    }
                  }}
                >
                  Kaldır
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
