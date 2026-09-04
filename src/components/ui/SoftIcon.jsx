import { cn } from '../../lib/cn'

/**
 * Panel içindeki bütün işaretleri aynı sakin materyal dilinde toplar.
 * Genel öğeler Lucide sembolü, diller ise birbirine karışmayan kısa bir
 * tipografik işaret kullanır. Kâğıt dokusu yüzeyi ana sayfadaki fiziksel
 * kitap hissine yaklaştırır.
 */
export default function SoftIcon({
  icon: Icon,
  mark,
  tone = 'sage',
  size = 'md',
  active = false,
  className,
  iconClassName,
  strokeWidth = 2.15,
}) {
  if (!Icon && !mark) return null

  return (
    <span
      className={cn('soft-icon', `soft-icon--${size}`, active && 'soft-icon--active', className)}
      data-tone={tone}
      aria-hidden="true"
    >
      {mark ? (
        <span className={cn('soft-icon__mark', iconClassName)}>{mark}</span>
      ) : (
        <Icon className={cn('soft-icon__glyph', iconClassName)} strokeWidth={strokeWidth} />
      )}
    </span>
  )
}
