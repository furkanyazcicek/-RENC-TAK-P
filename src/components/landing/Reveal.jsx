import { cn } from '../../lib/cn'
import { useInView, usePrefersReducedMotion } from './hooks'

/**
 * Reveal — içeriği ekrana girdiğinde yumuşakça belirtir.
 * Tanıtım sayfasının tamamında aynı ritmi kurmak için tek noktadan kullanılır.
 *
 *   <Reveal delay={120}><Card /></Reveal>
 *
 * from: up (aşağıdan) | left | right | scale
 */

const FROM = {
  up: 'translate-y-6',
  left: '-translate-x-6',
  right: 'translate-x-6',
  scale: 'scale-95',
}

export default function Reveal({
  as: Component = 'div',
  from = 'up',
  delay = 0,
  className,
  children,
  ...props
}) {
  const [ref, inView] = useInView({ threshold: 0.15 })
  const reduced = usePrefersReducedMotion()

  return (
    <Component
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-smooth motion-reduce:transition-none',
        inView || reduced
          ? 'opacity-100 translate-x-0 translate-y-0 scale-100'
          : cn('opacity-0', FROM[from] ?? FROM.up),
        className
      )}
      style={reduced ? undefined : { transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </Component>
  )
}
