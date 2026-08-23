import { cn } from '../../lib/cn'

/**
 * EmptyState — "henüz veri yok" durumları için tutarlı, davetkâr bir boşluk ekranı.
 *
 *   <EmptyState
 *     icon={Inbox}
 *     title="Henüz ödev yok"
 *     description="Öğrencilerine ilk ödevi atadığında burada görünecek."
 *     action={<Button icon={Plus}>Ödev Ata</Button>}
 *   />
 *
 * Boş ekran "hata" gibi değil, "başlangıç" gibi görünmeli: ikonun arkasında
 * yumuşak bir Aurora ışıması, üstünde net bir başlık ve tek bir sonraki adım.
 */
export default function EmptyState({
  icon: Icon,
  title,
  description,
  action,
  compact = false,
  className,
}) {
  return (
    <div
      className={cn(
        'card relative overflow-hidden flex flex-col items-center justify-center text-center animate-fade-in',
        compact ? 'px-5 py-10' : 'px-6 py-16',
        className
      )}
    >
      {/* Zeminde tek, çok yumuşak ışık — dikkati ikona toplar */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-[60%] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--c-aurora-violet) / 0.14) 0%, rgb(var(--c-aurora-cyan) / 0.07) 45%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {Icon && (
          <span
            className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-surface text-brand-500
                       ring-1 ring-brand-500/15 shadow-[0_8px_24px_-12px_rgb(var(--c-brand-500)/0.5)]"
          >
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </span>
        )}
        {title && <p className="font-display text-base font-bold text-ink">{title}</p>}
        {description && (
          <p className="mt-1.5 max-w-sm text-sm text-ink/65 leading-relaxed">{description}</p>
        )}
        {action && <div className="mt-6">{action}</div>}
      </div>
    </div>
  )
}
