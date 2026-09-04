import { GraduationCap } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Logo — Aurora marka işareti + kelime markası.
 *
 *   <Logo />              → işaret + "Dr. Koç"
 *   <Logo markOnly />     → yalnızca işaret (dar alanlar)
 *   <Logo tone="light" /> → koyu/gradient zemin üzerinde
 *
 * İşaret, ürünün gradient kimliğini taşıyan tek sabit öğedir: her sayfada
 * aynı köşe yarıçapı, aynı gradient, aynı ışıma.
 */

const SIZES = {
  sm: { mark: 'h-8 w-8 rounded-xl', icon: 'h-[18px] w-[18px]', text: 'text-base' },
  md: { mark: 'h-9 w-9 rounded-xl', icon: 'h-5 w-5', text: 'text-lg' },
  lg: { mark: 'h-11 w-11 rounded-2xl', icon: 'h-6 w-6', text: 'text-xl' },
}

export default function Logo({ size = 'md', markOnly = false, tone = 'default', variant = 'default', className }) {
  const s = SIZES[size] ?? SIZES.md

  if (variant === 'panel') {
    return (
      <span className={cn('panel-brand inline-flex items-center gap-2.5 select-none', className)}>
        <span className={cn('panel-brand-mark shrink-0', s.mark)} aria-hidden="true">
          <img src="/icon-512x512-maskable.png" alt="" />
        </span>
        {!markOnly && (
          <span className={cn('panel-brand-copy font-display font-extrabold tracking-tight', s.text)}>
            Dr<span>Koç</span>
          </span>
        )}
      </span>
    )
  }

  return (
    <span className={cn('inline-flex items-center gap-2.5 select-none', className)}>
      <span
        className={cn(
          'grid shrink-0 place-items-center bg-aurora-gradient text-white shadow-aurora',
          s.mark
        )}
        aria-hidden="true"
      >
        <GraduationCap className={s.icon} strokeWidth={2.2} />
      </span>
      {!markOnly && (
        <span
          className={cn(
            'font-display font-bold tracking-tight',
            s.text,
            tone === 'light' ? 'text-white' : 'text-ink'
          )}
        >
          Dr. Koç
        </span>
      )}
    </span>
  )
}
