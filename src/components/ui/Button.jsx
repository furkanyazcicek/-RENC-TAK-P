import { forwardRef } from 'react'
import { cn } from '../../lib/cn'
import Spinner from './Spinner'

/**
 * Button — uygulamadaki tüm aksiyonların tek kaynağı.
 *
 * <Button variant="primary" size="md" icon={Plus} loading={saving}>Kaydet</Button>
 *
 * variant: primary | secondary | glass | subtle | ghost | danger | success | link
 * size:    xs | sm | md | lg
 *
 * Aurora kuralı: gradient yalnızca `primary` üzerindedir. Bir ekranda birden
 * fazla gradient düğme varsa hiyerarşi kaybolur — ikincil aksiyonlar
 * `secondary` / `glass` / `ghost` giyer.
 *
 * Kontrast notu: gradient durakları (#7C3AED → #5B4BE6 → #2563EB) beyaz
 * metinle en az 4.5:1 kontrast verecek şekilde seçildi. Daha açık bir mor
 * veya cyan eklenirse bu bozulur — parlak cyan yalnızca dekoratif
 * katmanlarda kullanılır.
 */

const VARIANTS = {
  primary:
    'bg-brand-700 text-white shadow-xs hover:bg-brand-800 focus-visible:ring-brand-500',
  secondary:
    'bg-surface text-ink border border-line shadow-xs hover:border-line-strong hover:bg-surface-muted ' +
    'focus-visible:ring-brand-400',
  glass:
    'bg-surface text-ink border border-line shadow-xs hover:border-line-strong ' +
    'focus-visible:ring-brand-400',
  subtle:
    'bg-brand-50 text-brand-700 hover:bg-brand-100 focus-visible:ring-brand-400',
  ghost:
    'bg-transparent text-ink/70 hover:bg-brand-500/[0.08] hover:text-brand-700 focus-visible:ring-brand-400',
  danger:
    'bg-danger-500 text-white shadow-xs hover:bg-danger-600 ' +
    'hover:shadow-[0_8px_24px_-10px_rgb(var(--c-danger-500)/0.6)] focus-visible:ring-danger-500',
  success:
    'bg-success-600 text-white shadow-xs hover:bg-success-700 ' +
    'hover:shadow-[0_8px_24px_-10px_rgb(var(--c-success-500)/0.6)] focus-visible:ring-success-500',
  link: 'bg-transparent text-brand-600 hover:text-brand-700 hover:underline underline-offset-4 px-0 py-0 h-auto focus-visible:ring-brand-400',
}

const SIZES = {
  xs: 'h-8 px-3 text-xs gap-1.5',
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
}

const ICON_SIZES = {
  xs: 'h-3.5 w-3.5',
  sm: 'h-4 w-4',
  md: 'h-4 w-4',
  lg: 'h-5 w-5',
}

const Button = forwardRef(function Button(
  {
    as: Component = 'button',
    variant = 'primary',
    size = 'md',
    icon: Icon,
    iconRight: IconRight,
    loading = false,
    fullWidth = false,
    className,
    children,
    disabled,
    type = 'button',
    ...props
  },
  ref
) {
  const isNativeButton = Component === 'button'

  return (
    <Component
      ref={ref}
      type={isNativeButton ? type : undefined}
      disabled={isNativeButton ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      className={cn(
        'btn-base focus-ring',
        VARIANTS[variant] ?? VARIANTS.primary,
        variant !== 'link' && (SIZES[size] ?? SIZES.md),
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? (
        <Spinner className={ICON_SIZES[size] ?? ICON_SIZES.md} />
      ) : (
        Icon && <Icon className={ICON_SIZES[size] ?? ICON_SIZES.md} strokeWidth={2} aria-hidden="true" />
      )}
      {children}
      {IconRight && !loading && (
        <IconRight className={ICON_SIZES[size] ?? ICON_SIZES.md} strokeWidth={2} aria-hidden="true" />
      )}
    </Component>
  )
})

export default Button

/**
 * IconButton — sadece ikon içeren, kare oranlı aksiyon düğmesi.
 * Erişilebilirlik için `label` zorunludur.
 */
const ICON_BUTTON_SIZES = {
  xs: 'h-7 w-7',
  sm: 'h-9 w-9',
  md: 'h-10 w-10',
  lg: 'h-11 w-11',
}

export const IconButton = forwardRef(function IconButton(
  { icon: Icon, label, variant = 'ghost', size = 'sm', className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      aria-label={label}
      title={label}
      className={cn(
        'btn-base focus-ring rounded-xl',
        VARIANTS[variant] ?? VARIANTS.ghost,
        ICON_BUTTON_SIZES[size] ?? ICON_BUTTON_SIZES.sm,
        /* Kare düğmede yatay iç boşluk yok, dikey kayma da yok */
        'p-0 hover:translate-y-0',
        className
      )}
      {...props}
    >
      {Icon && <Icon className={ICON_SIZES[size] ?? ICON_SIZES.sm} strokeWidth={2} aria-hidden="true" />}
    </button>
  )
})
