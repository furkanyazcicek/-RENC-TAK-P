import { useEffect, useState } from 'react'
import { Check, Cloud, ShieldCheck } from 'lucide-react'
import SaveStatus from './SaveStatus.jsx'

export default function AtlasOwnershipNotice({ atlas, className = '' }) {
  const [confirmed, setConfirmed] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const previewMode = import.meta.env.DEV && typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('faz3-onizleme')
    : null
  const isPreview = ['atlas-aktarim', 'atlas-aktarim-sonrasi', 'atlas-aktarim-hata'].includes(previewMode)
  const [previewClaimed, setPreviewClaimed] = useState(previewMode === 'atlas-aktarim-sonrasi')
  const [previewSaving, setPreviewSaving] = useState(false)

  useEffect(() => {
    if (!isPreview) return
    setConfirmed(false)
    setDismissed(false)
    setPreviewSaving(false)
    setPreviewClaimed(previewMode === 'atlas-aktarim-sonrasi')
  }, [isPreview, previewMode])

  const visibleAtlas = isPreview
    ? {
        ...atlas,
        isStudent: true,
        legacySummary: { allowedCount: 3, excludedCount: 5 },
        claimedByCurrentStudent: previewClaimed,
        claimedByAnotherStudent: false,
        importing: previewSaving,
        importError: previewMode === 'atlas-aktarim-hata'
          ? 'Aktarım henüz tamamlanamadı. Cihaz kaydı silinmedi; yeniden deneyebilirsin.'
          : null,
        saveStatus: previewMode === 'atlas-aktarim-hata' ? 'retrying' : previewSaving ? 'saving' : 'idle',
      }
    : atlas
  const count = visibleAtlas.legacySummary.allowedCount

  async function importVisibleLegacy() {
    if (!isPreview) return visibleAtlas.importLegacy()
    setPreviewSaving(true)
    await new Promise((resolve) => window.setTimeout(resolve, 250))
    setPreviewSaving(false)
    setPreviewClaimed(true)
    return { status: 'accepted' }
  }

  if (!visibleAtlas.isStudent || count < 1 || dismissed) return null

  if (visibleAtlas.claimedByAnotherStudent) {
    return (
      <aside className={`mb-4 rounded-xl border border-amber-300/50 bg-amber-50/95 p-3 text-sm text-amber-950 ${className}`} role="status">
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p><strong>Eski cihaz kaydı korunuyor.</strong> Bu kayıt daha önce başka bir hesap için işlendi; senin hesabına otomatik aktarılmadı.</p>
        </div>
      </aside>
    )
  }

  if (visibleAtlas.claimedByCurrentStudent) {
    return (
      <aside className={`mb-4 flex items-center gap-2 rounded-xl border border-emerald-300/40 bg-emerald-50/90 p-3 text-sm text-emerald-950 ${className}`} role="status">
        <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span>
          Bu cihazdaki eski atlas kaydı hesabına güvenle bağlandı.
          {isPreview ? <small className="ml-2 font-semibold uppercase tracking-wide text-emerald-800/70">Görsel doğrulama örneği</small> : null}
        </span>
      </aside>
    )
  }

  return (
    <aside className={`mb-4 rounded-xl border border-sky-300/45 bg-sky-50/95 p-3 text-sm text-slate-900 shadow-sm ${className}`} aria-labelledby="atlas-aktarim-basligi">
      <div className="flex items-start gap-3">
        <Cloud className="mt-0.5 h-5 w-5 shrink-0 text-sky-700" aria-hidden="true" />
        <div className="min-w-0 flex-1">
          <strong id="atlas-aktarim-basligi" className="block">Bu cihazda eski atlas ilerlemesi bulundu</strong>
          {isPreview ? <span className="mt-1 inline-block text-[0.7rem] font-semibold uppercase tracking-wide text-sky-800/70">Görsel doğrulama örneği</span> : null}
          <p className="mt-1 text-slate-700">
            {count} tamamlanmış görev aktarılabilir. Favori, tema, rozet, gezinme ve eski toplamlar kanıt sayılmaz; {visibleAtlas.legacySummary.excludedCount} yerel kayıt aktarım dışında kalır.
          </p>
          <label className="mt-3 flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border border-sky-200 bg-white/80 px-3 py-2">
            <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} className="h-4 w-4 accent-sky-700" />
            <span>Bu tamamlamalar bana ait; hesabıma aktarılmasını onaylıyorum.</span>
          </label>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button type="button" className="focus-ring min-h-11 rounded-lg bg-sky-800 px-4 font-semibold text-white hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-50" disabled={!confirmed || visibleAtlas.importing} onClick={() => void importVisibleLegacy()}>
              {visibleAtlas.importing ? 'Aktarılıyor…' : 'Hesabıma aktar'}
            </button>
            <button
              type="button"
              className="focus-ring min-h-11 rounded-lg px-3 font-semibold text-slate-600 hover:bg-white/80 hover:text-slate-900"
              onClick={() => setDismissed(true)}
            >
              Şimdi değil
            </button>
            <SaveStatus status={visibleAtlas.saveStatus} onRetry={isPreview ? importVisibleLegacy : visibleAtlas.retry} />
          </div>
          {visibleAtlas.importError ? <p className="mt-2 text-rose-700" role="alert">{visibleAtlas.importError}</p> : null}
        </div>
      </div>
    </aside>
  )
}
