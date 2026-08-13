import { cn } from '../../lib/cn'

/**
 * Avatar — isimden baş harf üreten, ismi sabit bir renge eşleyen profil dairesi.
 * Aynı isim her zaman aynı rengi alır, böylece listeler arasında tanınabilir olur.
 */

/* Aurora ailesinden altı gradient — hepsi beyaz baş harfle ≥4.5:1 kontrast
   verecek koyulukta. Parlak cyan/pembe yalnızca gradientin bitiş ucunda,
   metnin oturduğu sol üst köşede değil. */
const PALETTE = [
  'bg-gradient-to-br from-brand-600 to-info-600',
  'bg-gradient-to-br from-info-600 to-aqua-700',
  'bg-gradient-to-br from-accent-600 to-brand-600',
  'bg-gradient-to-br from-brand-700 to-accent-600',
  'bg-gradient-to-br from-aqua-700 to-brand-600',
  'bg-gradient-to-br from-brand-500 to-accent-500',
]

const SIZES = {
  xs: 'h-7 w-7 text-2xs',
  sm: 'h-9 w-9 text-xs',
  md: 'h-11 w-11 text-sm',
  lg: 'h-14 w-14 text-lg',
}

function initials(name) {
  if (!name) return '?'
  const parts = String(name).trim().split(/\s+/).filter(Boolean)
  if (!parts.length) return '?'
  if (parts.length === 1) return parts[0].charAt(0).toLocaleUpperCase('tr-TR')
  return (
    parts[0].charAt(0).toLocaleUpperCase('tr-TR') +
    parts[parts.length - 1].charAt(0).toLocaleUpperCase('tr-TR')
  )
}

function colorFor(name) {
  const key = String(name ?? '')
  let hash = 0
  for (let i = 0; i < key.length; i += 1) {
    hash = (hash * 31 + key.charCodeAt(i)) % 100000
  }
  return PALETTE[hash % PALETTE.length]
}

export default function Avatar({ name, size = 'sm', src, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt={name ?? ''}
        className={cn('rounded-full object-cover shrink-0', SIZES[size] ?? SIZES.sm, className)}
      />
    )
  }

  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid place-items-center rounded-full font-display font-bold text-white shrink-0 select-none',
        'ring-2 ring-white/70 shadow-[0_2px_8px_-2px_rgb(var(--c-shadow)/0.25)]',
        SIZES[size] ?? SIZES.sm,
        colorFor(name),
        className
      )}
    >
      {initials(name)}
    </span>
  )
}
