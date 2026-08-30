import { BarChart3, GraduationCap, Mail, MapPin, MessageCircle, Phone, Stethoscope } from 'lucide-react'
import { Button, Modal } from '../../ui'

const CREDENTIALS = [
  { Icon: Stethoscope, label: 'Tıp fakültesi son sınıf öğrencisi' },
  { Icon: GraduationCap, label: 'Eğitim ve öğrenci koçluğu deneyimi' },
  { Icon: BarChart3, label: 'Veriye dayalı takip yaklaşımı' },
]

export default function LandingInfoDialogs({ activeDialog, onClose }) {
  return (
    <>
      <Modal
        open={activeDialog === 'about'}
        onClose={onClose}
        title="Hakkımda"
        description="Dr. Koç’un arkasındaki yaklaşım"
        maxWidth="max-w-2xl"
        footer={<Button variant="secondary" onClick={onClose}>Kapat</Button>}
      >
        <div className="grid gap-6 sm:grid-cols-[auto_1fr] sm:items-start">
          <div className="grid h-20 w-20 place-items-center rounded-panel bg-aurora-gradient font-display text-2xl font-extrabold text-white shadow-aurora">
            FY
          </div>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-brand-600">Furkan Talha Yazçiçek</p>
            <h4 className="mt-2 font-display text-2xl font-extrabold leading-tight text-ink">
              Öğrenciyi yalnızca rakamlarla değil, bir bütün olarak ele alan bir platform.
            </h4>
            <p className="mt-4 text-sm leading-7 text-ink/65">
              Tıp eğitiminin kazandırdığı analitik bakış ile yıllardır sürdürdüğüm öğrenci koçluğu
              deneyimini bir araya getirerek Dr. Koç’u geliştirdim. Amacım; öğrencinin çalışma,
              öğrenme ve takip sürecini daha anlaşılır, ölçülebilir ve etkileşimli hâle getirmek.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-2 sm:grid-cols-3">
          {CREDENTIALS.map(({ Icon, label }) => (
            <div key={label} className="rounded-2xl border border-line bg-surface-muted p-4">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <p className="mt-3 text-xs font-bold leading-5 text-ink/70">{label}</p>
            </div>
          ))}
        </div>
      </Modal>

      <Modal
        open={activeDialog === 'contact'}
        onClose={onClose}
        title="İletişim"
        description="Platform ve koçluk programı hakkında ulaşabilirsin"
        maxWidth="max-w-xl"
      >
        <div className="grid gap-3">
          <a
            href="mailto:furkan.yazcicek35@icloud.com"
            className="focus-ring flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-500/[0.04] motion-reduce:transform-none"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-700"><Mail className="h-4 w-4" /></span>
            <span><b className="block text-xs text-ink/50">E-posta</b><span className="mt-1 block break-all text-sm font-bold text-ink">furkan.yazcicek35@icloud.com</span></span>
          </a>
          <a
            href="tel:+905467911712"
            className="focus-ring flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-surface p-4 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-brand-300 hover:bg-brand-500/[0.04] motion-reduce:transform-none"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-aqua-500/10 text-aqua-700"><Phone className="h-4 w-4" /></span>
            <span><b className="block text-xs text-ink/50">Telefon</b><span className="mt-1 block text-sm font-bold text-ink">+90 546 791 17 12</span></span>
          </a>
          <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-surface p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-info-500/10 text-info-700"><MapPin className="h-4 w-4" /></span>
            <span><b className="block text-xs text-ink/50">Konum</b><span className="mt-1 block text-sm font-bold text-ink">İzmir, Türkiye</span></span>
          </div>
        </div>

        <a
          href="mailto:furkan.yazcicek35@icloud.com"
          className="focus-ring btn-base mt-6 min-h-12 w-full bg-aurora-gradient px-6 text-sm text-white shadow-aurora transition-[transform,box-shadow,filter] duration-200 hover:-translate-y-0.5 hover:shadow-aurora-lg hover:brightness-110 motion-reduce:transform-none"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Mesaj Gönder
        </a>
      </Modal>
    </>
  )
}
