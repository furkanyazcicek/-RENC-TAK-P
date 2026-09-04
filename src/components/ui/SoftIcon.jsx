import { cn } from '../../lib/cn'

/**
 * Panel içindeki bütün işaretleri aynı sakin materyal dilinde toplar.
 * Lucide sembolü anlamı korur; ImageGen ile hazırlanan kâğıt dokusu ise
 * kare yüzeyi ana sayfadaki fiziksel kitap hissine yaklaştırır.
 */
export default function SoftIcon({
  icon: Icon,
  tone = 'sage',
  size = 'md',
  active = false,
  className,
  iconClassName,
  strokeWidth = 2.15,
}) {
  if (!Icon) return null

  return (
    <span
      className={cn('soft-icon', `soft-icon--${size}`, active && 'soft-icon--active', className)}
      data-tone={tone}
      aria-hidden="true"
    >
      <Icon className={cn('soft-icon__glyph', iconClassName)} strokeWidth={strokeWidth} />
    </span>
  )
}
