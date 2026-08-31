import { Laptop, Monitor, PenLine } from 'lucide-react'
import { cn } from '../../lib/cn'
import { DEVICE_ROLES, DEVICE_ROLE_LIST } from '../../lib/liveLesson/deviceRole'

/**
 * "Bu cihazı ne olarak kullanacaksın?"
 *
 * Öğretmen tabletten kalemle anlatıp telefonunu kamera olarak
 * kullanabiliyor. İki cihazın işi farklı olduğu için rol TAHMİN EDİLMEZ,
 * sorulur — özellikle de ses çıkışı yüzünden: kamera cihazının hoparlörü
 * açık kalırsa tabletin sesi oradan çıkıp tabletin mikrofonuna geri girer
 * ve yankı olur.
 *
 * Seçim cihazda hatırlanır; tablet her derste yeniden sormaz.
 */

const ICONS = {
  [DEVICE_ROLES.SOLO]: Monitor,
  [DEVICE_ROLES.BOARD]: PenLine,
  [DEVICE_ROLES.CAMERA]: Laptop,
}

export default function DeviceRolePicker({ value, onChange, className }) {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div role="radiogroup" aria-label="Bu cihazın ders içindeki rolü" className="grid gap-2 sm:grid-cols-3">
        {DEVICE_ROLE_LIST.map((option) => {
          const Icon = ICONS[option.key] ?? Monitor
          const active = value === option.key
          return (
            <button
              key={option.key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option.key)}
              className={cn(
                'focus-ring flex min-h-[6rem] flex-col items-start gap-1.5 rounded-card border p-3.5 text-left transition-colors duration-150',
                active
                  ? 'border-brand-400 bg-brand-500/[0.07] ring-1 ring-inset ring-brand-500/25'
                  : 'border-line bg-surface hover:border-brand-200 hover:bg-surface-muted'
              )}
            >
              <span
                className={cn(
                  'grid h-9 w-9 place-items-center rounded-btn',
                  active ? 'bg-brand-600 text-white' : 'bg-ink/[0.05] text-ink/60'
                )}
              >
                <Icon className="h-[18px] w-[18px]" strokeWidth={2} aria-hidden="true" />
              </span>
              <span className={cn('text-sm font-semibold', active ? 'text-brand-800' : 'text-ink')}>
                {option.label}
              </span>
              <span className="text-xs leading-snug text-ink/60">{option.description}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
