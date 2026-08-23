import { useCallback, useEffect, useState } from 'react'
import {
  Check,
  Copy,
  KeyRound,
  RefreshCw,
  ShieldCheck,
  Trash2,
  UserCheck,
  UserPlus,
  X,
} from 'lucide-react'

import {
  formatCode,
  generateParentCode,
  getActiveParentCode,
  listStudentParentLinks,
  remainingTime,
  respondParentLink,
  revokeParentLink,
} from '../../lib/parentLink'
import { Alert, Badge, Button, EmptyState, useToast } from '../ui'
import { Panel } from '../dashboard'

/**
 * "Veli Doğrula" — öğrencinin profilindeki bölüm.
 *
 * Veli–öğrenci eşleşmesi BURADAN başlar. Eskiden veli kayıt ekranındaki
 * açılır listeden istediği öğrenciyi seçip doğrudan eşleşiyordu; artık
 * bağlantıyı öğrenci başlatır ve öğrenci onaylar. Kod tek başına yetki
 * vermez — kodu kullanan veli yalnızca "onay bekleyen istek" oluşturur,
 * veriyi açan şey aşağıdaki Onayla düğmesidir.
 */
export default function StudentParentLinkPanel() {
  const toast = useToast()

  const [code, setCode] = useState(null)
  const [expiresAt, setExpiresAt] = useState(null)
  const [links, setLinks] = useState([])
  const [loading, setLoading] = useState(true)
  const [generating, setGenerating] = useState(false)
  const [busyLinkId, setBusyLinkId] = useState(null)
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    const [codeRes, linkRes] = await Promise.all([getActiveParentCode(), listStudentParentLinks()])

    if (codeRes.error) setError(codeRes.error)
    else {
      setCode(codeRes.code ?? null)
      setExpiresAt(codeRes.expiresAt ?? null)
    }

    if (linkRes.error) setError(linkRes.error)
    else setLinks(linkRes.links)

    setLoading(false)
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handleGenerate() {
    setGenerating(true)
    setError('')
    const res = await generateParentCode()
    setGenerating(false)

    if (res.error) {
      setError(res.error)
      return
    }
    setCode(res.code)
    setExpiresAt(res.expiresAt)
    setCopied(false)
    toast.success('Doğrulama kodu oluşturuldu', {
      description: 'Kodu velinize iletin; 24 saat geçerlidir.',
    })
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(formatCode(code))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Panoya erişim yoksa (izin verilmemiş / http) kod zaten ekranda yazılı.
      toast.error('Kod kopyalanamadı', { description: 'Ekrandaki kodu elle yazabilirsiniz.' })
    }
  }

  async function handleRespond(linkId, approve, parentName) {
    setBusyLinkId(linkId)
    const res = await respondParentLink(linkId, approve)
    setBusyLinkId(null)

    if (res.error) {
      toast.error('İşlem tamamlanamadı', { description: res.error })
      return
    }
    toast.success(
      approve ? `${parentName} artık verilerinizi görebilir` : 'Bağlantı isteği reddedildi',
      {
        description: approve
          ? 'Bu bağlantıyı istediğiniz zaman kaldırabilirsiniz.'
          : 'Veli hiçbir verinize erişemez.',
      }
    )
    load()
  }

  async function handleRevoke(linkId, parentName) {
    setBusyLinkId(linkId)
    const res = await revokeParentLink(linkId)
    setBusyLinkId(null)

    if (res.error) {
      toast.error('Bağlantı kaldırılamadı', { description: res.error })
      return
    }
    toast.success(`${parentName} artık verilerinizi göremiyor`)
    load()
  }

  const pending = links.filter((l) => l.status === 'pending')
  const active = links.filter((l) => l.status === 'active')
  const codeLeft = remainingTime(expiresAt)
  const codeValid = Boolean(code && codeLeft)

  return (
    <Panel
      title="Veli Doğrula"
      description="Velinizin panelinizi görebilmesi için önce siz davet edersiniz, sonra siz onaylarsınız"
      icon={ShieldCheck}
      iconTone="#0891B2"
      footnote="Kod tek kullanımlıktır ve 24 saat sonra geçersiz olur. Kodu kullanan veli, siz onaylamadıkça hiçbir verinizi göremez."
    >
      <div className="flex flex-col gap-6">
        {error && <Alert tone="danger">{error}</Alert>}

        {/* ---------- 1. ADIM: KOD ---------- */}
        <div>
          <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-ink/55">
            1. Adım — Doğrulama kodu
          </p>

          {loading ? (
            <div className="h-24 animate-pulse rounded-card bg-surface-sunken" />
          ) : codeValid ? (
            <div className="rounded-card border border-line bg-surface-muted p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-display text-2xl font-bold tracking-[0.2em] text-ink tabular">
                    {formatCode(code)}
                  </p>
                  <p className="mt-1 text-xs text-ink/60">
                    Geçerlilik süresi: {codeLeft}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={copied ? Check : Copy}
                    onClick={handleCopy}
                  >
                    {copied ? 'Kopyalandı' : 'Kopyala'}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={RefreshCw}
                    loading={generating}
                    onClick={handleGenerate}
                  >
                    Yenile
                  </Button>
                </div>
              </div>
              <p className="mt-3 border-t border-line pt-3 text-xs leading-relaxed text-ink/60">
                Bu kodu velinize iletin. Veli kendi panelindeki{' '}
                <span className="font-semibold text-ink/75">Öğrenci Doğrula</span> alanına girecek.
                Yeni kod oluşturursanız bu kod geçersiz olur.
              </p>
            </div>
          ) : (
            <EmptyState
              icon={KeyRound}
              title="Henüz aktif kod yok"
              description="Velinizi davet etmek için bir doğrulama kodu oluşturun. Kod 24 saat geçerlidir ve yalnızca bir kez kullanılabilir."
              compact
              className="border-dashed shadow-none"
              action={
                <Button icon={KeyRound} loading={generating} onClick={handleGenerate}>
                  Doğrulama kodu oluştur
                </Button>
              }
            />
          )}
        </div>

        {/* ---------- 2. ADIM: BEKLEYEN İSTEKLER ---------- */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">
              2. Adım — Bağlantı istekleri
            </p>
            {pending.length > 0 && (
              <Badge tone="warning" size="sm">
                {pending.length} onay bekliyor
              </Badge>
            )}
          </div>

          {loading ? (
            <div className="h-16 animate-pulse rounded-card bg-surface-sunken" />
          ) : pending.length === 0 ? (
            <p className="rounded-card border border-dashed border-line px-4 py-3 text-sm text-ink/55">
              Onay bekleyen bağlantı isteği yok.
            </p>
          ) : (
            <ul className="flex flex-col gap-3">
              {pending.map((link) => (
                <li
                  key={link.link_id}
                  className="rounded-card border border-warning-500/30 bg-warning-50/50 p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-semibold text-ink">{link.parent_name}</p>
                      {link.parent_email && (
                        <p className="mt-0.5 truncate text-xs text-ink/60">{link.parent_email}</p>
                      )}
                      <p className="mt-1 text-xs text-ink/55">
                        Bu kişi verilerinizi görmek için bağlantı isteği gönderdi.
                      </p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <Button
                        size="sm"
                        icon={Check}
                        loading={busyLinkId === link.link_id}
                        onClick={() => handleRespond(link.link_id, true, link.parent_name)}
                      >
                        Onayla
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        icon={X}
                        disabled={busyLinkId === link.link_id}
                        onClick={() => handleRespond(link.link_id, false, link.parent_name)}
                      >
                        Reddet
                      </Button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ---------- ONAYLI VELİLER ---------- */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">
              Onaylı veliler
            </p>
            {active.length > 0 && (
              <Badge tone="success" size="sm">
                {active.length} kişi
              </Badge>
            )}
          </div>

          {loading ? (
            <div className="h-16 animate-pulse rounded-card bg-surface-sunken" />
          ) : active.length === 0 ? (
            <p className="rounded-card border border-dashed border-line px-4 py-3 text-sm text-ink/55">
              Henüz onayladığınız bir veli yok. Kimse verilerinizi görmüyor.
            </p>
          ) : (
            <ul className="card divide-y divide-line">
              {active.map((link) => (
                <li key={link.link_id} className="flex items-center justify-between gap-3 p-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-success-500/10 text-success-600">
                      <UserCheck className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-ink">{link.parent_name}</p>
                      {link.parent_email && (
                        <p className="truncate text-xs text-ink/60">{link.parent_email}</p>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={Trash2}
                    loading={busyLinkId === link.link_id}
                    onClick={() => handleRevoke(link.link_id, link.parent_name)}
                  >
                    Kaldır
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="flex items-start gap-2 rounded-card bg-surface-sunken p-3 text-xs leading-relaxed text-ink/60">
          <UserPlus className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.1} aria-hidden="true" />
          <span>
            Onayladığınız veli; çalışma kayıtlarınızı, deneme sonuçlarınızı ve ödevlerinizi
            görebilir. Mesajlarınız, öğretmeninize sorduğunuz sorular ve AI Koç sohbetiniz
            veliye <span className="font-semibold text-ink/75">kapalıdır</span>.
          </span>
        </p>
      </div>
    </Panel>
  )
}
