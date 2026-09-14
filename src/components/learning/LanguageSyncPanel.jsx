import { useEffect, useState } from 'react'
import { Check, Cloud, CloudOff, LoaderCircle, ShieldCheck } from 'lucide-react'
import { Button } from '../ui/index.js'
import { LANGUAGE_SYNC_STATUS, languageSyncStatusLabel } from '../../lib/learning/languageActivity/outbox.js'
import { useLanguageProgressSync } from './LanguageProgressBoundary.jsx'

export default function LanguageSyncPanel({ className = '' }) {
  const sync = useLanguageProgressSync()
  const [confirmed, setConfirmed] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const previewMode = import.meta.env.DEV && typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('faz5-onizleme')
    : null
  const [previewImported, setPreviewImported] = useState(previewMode === 'tamam')
  const preview = ['aktarim', 'hata', 'tamam'].includes(previewMode)

  useEffect(() => {
    setConfirmed(false)
    setDismissed(false)
    setPreviewImported(previewMode === 'tamam')
  }, [previewMode])

  const legacyStatus = preview ? 'available' : sync.legacy.status
  const claimed = preview ? previewImported : sync.claimedByCurrentStudent
  const another = !preview && sync.claimedByAnotherStudent
  const status = previewMode === 'hata' ? LANGUAGE_SYNC_STATUS.retrying
    : previewMode === 'aktarim' ? LANGUAGE_SYNC_STATUS.needs_consent
      : previewMode === 'tamam' ? LANGUAGE_SYNC_STATUS.saved : sync.status
  const error = previewMode === 'hata'
    ? 'Aktarım henüz tamamlanamadı. Cihaz kopyan silinmedi; yeniden deneyebilirsin.'
    : sync.error

  if (!sync.isStudent && !preview) return null

  const startImport = async () => {
    if (preview) { setPreviewImported(true); return }
    await sync.importLegacy()
  }

  return (
    <div className={`grid gap-3 ${className}`}>
      {!dismissed && legacyStatus === 'available' && !claimed && !another && (
        <aside className="rounded-card border border-brand-500/20 bg-brand-500/[0.05] p-4" aria-labelledby="dil-aktarim-basligi">
          <div className="flex items-start gap-3">
            <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-brand-700" aria-hidden="true" />
            <div className="min-w-0 flex-1">
              <h3 id="dil-aktarim-basligi" className="font-display text-base font-bold text-ink">Bu cihazda eski {sync.definition.label} ilerlemesi bulundu</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink/65">
                Derslerin, kelime tekrarların, seviye sonucun ve çalışma günlerin hesabındaki kayıtlarla kayıp yaratmadan birleştirilecek. Cihaz kopyası hemen silinmeyecek.
              </p>
              <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-2 rounded-input bg-surface px-3 py-2 ring-1 ring-inset ring-line">
                <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="h-4 w-4 accent-brand-600" />
                <span className="text-sm text-ink/75">Bu ilerleme bana ait; hesabıma aktarılmasını onaylıyorum.</span>
              </label>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Button size="md" onClick={() => void startImport()} disabled={!confirmed || status === LANGUAGE_SYNC_STATUS.importing}>
                  {status === LANGUAGE_SYNC_STATUS.importing ? 'Aktarılıyor…' : 'Hesabıma aktar'}
                </Button>
                <Button size="md" variant="ghost" onClick={() => setDismissed(true)}>Şimdi değil</Button>
                {sync.pendingImport?.owner_scope && <Button size="md" variant="ghost" onClick={sync.cancelImport}>Aktarımı iptal et</Button>}
              </div>
            </div>
          </div>
        </aside>
      )}

      {another && (
        <aside className="rounded-card border border-warning-500/25 bg-warning-500/[0.06] p-4 text-sm text-ink/75" role="status">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-warning-700" aria-hidden="true" />
            <p><strong className="font-semibold text-ink">Eski cihaz kaydı korunuyor.</strong> Başka bir hesaba daha önce bağlandığı için bu hesaba otomatik aktarılmadı.</p>
          </div>
        </aside>
      )}

      {claimed && (
        <div className="flex items-start gap-2 rounded-input bg-success-500/[0.07] px-3 py-2.5 text-sm text-success-700 ring-1 ring-inset ring-success-500/15" role="status">
          <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Bu cihazdaki eski ilerleme hesabına güvenle bağlandı; yerel yedek korunuyor.</span>
        </div>
      )}

      {sync.legacy.status === 'invalid' && !preview && (
        <div className="flex items-start gap-2 rounded-input bg-warning-500/[0.06] px-3 py-2.5 text-sm text-ink/70 ring-1 ring-inset ring-warning-500/20" role="alert">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-warning-700" aria-hidden="true" />
          <span>Eski cihaz kaydının biçimi güvenle okunamadı. Kayıt değiştirilmedi veya silinmedi.</span>
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2 text-xs text-ink/55" role="status" aria-live="polite">
        {status === LANGUAGE_SYNC_STATUS.saving || status === LANGUAGE_SYNC_STATUS.loading || status === LANGUAGE_SYNC_STATUS.importing
          ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
          : status === LANGUAGE_SYNC_STATUS.saved ? <Check className="h-4 w-4 text-success-600" aria-hidden="true" />
            : <CloudOff className="h-4 w-4" aria-hidden="true" />}
        <span>{languageSyncStatusLabel(status) || 'İlerlemen bu cihazda hazır.'}</span>
        {[LANGUAGE_SYNC_STATUS.retrying, LANGUAGE_SYNC_STATUS.protected_local, LANGUAGE_SYNC_STATUS.unavailable].includes(status) && (
          <button type="button" onClick={() => void sync.retry()} className="focus-ring min-h-11 rounded px-3 font-semibold text-brand-700 hover:bg-brand-500/[0.06]">Yeniden dene</button>
        )}
      </div>
      {error && <p className="text-sm text-danger-700" role="alert">{error}</p>}
    </div>
  )
}
