import { cn } from '../../lib/cn'
import Logo from './Logo'

/** Küçük, her yerde kullanılabilen yükleniyor göstergesi. */
export default function Spinner({ className, label = 'Yükleniyor' }) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(
        'inline-block h-4 w-4 shrink-0 rounded-full border-2 border-current border-t-transparent animate-spin',
        className
      )}
    />
  )
}

/**
 * PageLoader — tüm sayfayı kaplayan yükleme ekranı (route geçişleri, ilk veri).
 * Paneldeki krem kâğıt, lacivert mürekkep ve pastel vurgu dilini
 * yüklenme anında da korur. Hareket bilinçli olarak küçük bir alanda
 * kalır; sayfanın tamamı yanıp sönmez.
 */
export function PageLoader({ label = 'Yükleniyor…' }) {
  return (
    <div className="page-loader" role="status" aria-live="polite" aria-label={label}>
      <span className="page-loader__glow page-loader__glow--sage" aria-hidden="true" />
      <span className="page-loader__glow page-loader__glow--coral" aria-hidden="true" />

      <div className="page-loader__card">
        <div className="page-loader__brand">
          <Logo variant="panel" size="lg" />
          <span>Kişisel çalışma alanı</span>
        </div>

        <div className="page-loader__book" aria-hidden="true">
          <span className="page-loader__cover page-loader__cover--left" />
          <span className="page-loader__cover page-loader__cover--right" />
          <span className="page-loader__page page-loader__page--one" />
          <span className="page-loader__page page-loader__page--two" />
          <span className="page-loader__spine" />
        </div>

        <div className="page-loader__copy">
          <p>{label}</p>
          <span>Notların ve çalışma verilerin düzenleniyor.</span>
        </div>

        <div className="page-loader__progress" aria-hidden="true">
          <span />
        </div>

        <div className="page-loader__foot" aria-hidden="true">
          <span><i /> Güvenli bağlantı</span>
          <small>DRKOÇ</small>
        </div>
      </div>
    </div>
  )
}
