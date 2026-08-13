import { cn } from '../../lib/cn'
import AuroraBackground from './AuroraBackground'

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
 * Boş beyaz ekran yerine ürünün Aurora atmosferini gösterir; böylece
 * yüklenme anı da tasarımın parçası olur.
 */
export function PageLoader({ label = 'Yükleniyor…' }) {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden bg-paper">
      <AuroraBackground variant="page" />

      <div className="relative z-10 flex flex-col items-center gap-4 animate-fade-in">
        {/* Halka: gradient conic bir maskeyle döner — tek renkli spinner'dan
            daha "canlı" ama yine de sakin. */}
        <span className="relative grid h-14 w-14 place-items-center">
          <span
            className="absolute inset-0 animate-spin rounded-full"
            style={{
              background:
                'conic-gradient(from 0deg, transparent 0deg, rgb(var(--c-aurora-cyan)) 120deg, rgb(var(--c-aurora-violet)) 260deg, rgb(var(--c-aurora-purple)) 340deg, transparent 360deg)',
              WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)',
              mask: 'radial-gradient(farthest-side, transparent calc(100% - 3px), #000 0)',
              animationDuration: '1.1s',
            }}
            aria-hidden="true"
          />
          <span className="h-2 w-2 rounded-full bg-brand-500/50 animate-pulse-soft" aria-hidden="true" />
        </span>
        <span role="status" className="text-sm font-medium text-ink/60">
          {label}
        </span>
      </div>
    </div>
  )
}
