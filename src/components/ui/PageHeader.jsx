import { ArrowLeft } from 'lucide-react'
import { cn } from '../../lib/cn'
import { IconButton } from './Button'

/**
 * PageSection — sayfa içi bölüm başlığı + içerik sarmalayıcısı.
 *
 *   <PageSection title="Öğrencilerim" description="…" action={<Button/>}>
 *     <StudentList … />
 *   </PageSection>
 */
export function PageSection({ title, description, action, className, children }) {
  return (
    <section className={cn('flex flex-col gap-3', className)}>
      {(title || action) && (
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="text-sm text-ink/60 mt-0.5">{description}</p>}
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      )}
      {children}
    </section>
  )
}

/**
 * PageHeader — sayfa içi (Navbar altındaki) büyük başlık bloğu.
 * Geri düğmesi, üst başlık (eyebrow) ve sağ aksiyon alanı destekler.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  action,
  onBack,
  className,
}) {
  return (
    <div className={cn('flex items-start justify-between gap-3', className)}>
      <div className="flex items-start gap-2 min-w-0">
        {onBack && (
          <IconButton
            icon={ArrowLeft}
            label="Geri"
            onClick={onBack}
            variant="secondary"
            className="mt-0.5 shrink-0"
          />
        )}
        <div className="min-w-0">
          {eyebrow && (
            <p className="mb-1.5 inline-flex items-center gap-1.5 text-2xs font-semibold uppercase tracking-[0.12em] text-ink/55">
              <span className="h-px w-4 bg-brand-600" aria-hidden="true" />
              {eyebrow}
            </p>
          )}
          {title && (
            <h1 className="font-display font-bold text-2xl sm:text-3xl text-ink">{title}</h1>
          )}
          {description && <p className="text-sm text-ink/65 mt-2 max-w-prose">{description}</p>}
        </div>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}
