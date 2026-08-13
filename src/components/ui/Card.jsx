import { cn } from '../../lib/cn'
import AuroraBackground from './AuroraBackground'

/**
 * Card — uygulamadaki tüm panel/kutu yapılarının ortak zemini.
 *
 *   <Card>
 *     <CardHeader title="Başlık" description="Alt açıklama" action={<Button/>} />
 *     <CardBody>…</CardBody>
 *     <CardFooter>…</CardFooter>
 *   </Card>
 *
 * variant: default | glass | gradient | outline | highlight
 * padding: none | sm | md | lg   (CardBody kullanılmayacaksa doğrudan Card'a verilebilir)
 *
 * GÖRSEL HİYERARŞİ KURALI — her kartı cam yapmak hiyerarşiyi öldürür:
 *
 *   default   → düz beyaz yüzey. Varsayılan; kartların çoğu bu olmalı.
 *   glass     → yarı saydam cam. Aurora zeminin "göründüğü" yerlerde,
 *               sayfa başına birkaç kart.
 *   gradient  → dolu Aurora gradient. Sayfa başına EN FAZLA BİR kart.
 *   outline   → yalnız çizgi + gömük zemin. İkincil/yardımcı içerik.
 *   highlight → beyaz yüzey + Aurora gradient kenarlık. Dikkat çeken ama
 *               gradient kadar baskın olmayan kart (AI, öneri, ödül).
 */

const PADDING = {
  none: '',
  sm: 'p-4',
  md: 'p-5',
  lg: 'p-6 sm:p-7',
}

const VARIANTS = {
  default: 'card',
  glass: 'card-glass',
  gradient: 'card-gradient',
  outline: 'card-outline',
  highlight: 'card border-aurora',
}

const INTERACTIVE = {
  default: 'card-interactive',
  glass: 'card-glass transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover',
  gradient: 'card-gradient transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-aurora-lg',
  outline:
    'card-outline transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:border-brand-200 hover:bg-surface',
  highlight: 'card border-aurora transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:shadow-card-hover',
}

export default function Card({
  as: Component = 'div',
  variant = 'default',
  interactive = false,
  glow = false,
  padding = 'none',
  className,
  children,
  ...props
}) {
  const base = interactive
    ? INTERACTIVE[variant] ?? INTERACTIVE.default
    : VARIANTS[variant] ?? VARIANTS.default

  return (
    <Component
      className={cn(base, glow && 'relative overflow-hidden', PADDING[padding] ?? '', className)}
      {...props}
    >
      {/* `glow` — kartın içinde çok hafif Aurora ışıması (AI/öne çıkan panel) */}
      {glow && <AuroraBackground variant="panel" />}
      {glow ? <div className="relative z-10">{children}</div> : children}
    </Component>
  )
}

export function CardHeader({ title, description, action, icon: Icon, className, children }) {
  return (
    <div
      className={cn(
        'flex items-start justify-between gap-3 px-5 pt-5 pb-4 border-b border-line',
        className
      )}
    >
      <div className="flex items-start gap-3 min-w-0">
        {Icon && (
          <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
            <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          {title && <h3 className="section-title truncate">{title}</h3>}
          {description && <p className="text-sm text-ink/65 mt-0.5">{description}</p>}
          {children}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('section-title', className)}>{children}</h3>
}

export function CardBody({ padding = 'md', className, children }) {
  return <div className={cn(PADDING[padding] ?? PADDING.md, className)}>{children}</div>
}

export function CardFooter({ className, children }) {
  return (
    <div
      className={cn(
        'flex items-center justify-end gap-2 px-5 py-4 border-t border-line bg-surface-muted rounded-b-card',
        className
      )}
    >
      {children}
    </div>
  )
}

/* ------------------------------------------------------------------
   Adlandırılmış kısayollar — sayfalarda niyeti okunur kılar.
   `<GlassCard>` yazmak `<Card variant="glass">` yazmaktan nettir.
   ------------------------------------------------------------------ */

export function GlassCard(props) {
  return <Card variant="glass" {...props} />
}

export function GradientCard(props) {
  return <Card variant="gradient" {...props} />
}

export function OutlineCard(props) {
  return <Card variant="outline" {...props} />
}

export function HighlightCard(props) {
  return <Card variant="highlight" {...props} />
}
