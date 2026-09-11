import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpenText,
  Bot,
  CheckCircle2,
  CircleAlert,
  Clock3,
  FlaskConical,
  LockKeyhole,
  Target,
  TestTube2,
  Trophy,
} from 'lucide-react'
import { ActivityStrip, DashboardHero, MetricTile, Panel, SubjectBars } from '../../components/dashboard'
import { Badge, Button, SoftIcon } from '../../components/ui'
import {
  EXPERIENCE_ACTIVITY,
  EXPERIENCE_AI_SOLVES,
  EXPERIENCE_MONTHS,
  EXPERIENCE_PROBLEMS,
  EXPERIENCE_PROFILE,
  EXPERIENCE_SUBJECTS,
} from './experienceData'

const solvedTotal = EXPERIENCE_MONTHS.reduce((sum, item) => sum + item.solved, 0)
const aiSolveTotal = EXPERIENCE_MONTHS.reduce((sum, item) => sum + item.aiSolves, 0)
const examTotal = EXPERIENCE_MONTHS.reduce((sum, item) => sum + item.exams, 0)

export function MonthlyProgress({ compact = false }) {
  const maxSolved = Math.max(...EXPERIENCE_MONTHS.map((item) => item.solved))

  return (
    <div>
      <div className={compact ? 'grid min-h-52 grid-cols-5 items-end gap-2 sm:gap-4' : 'grid min-h-64 grid-cols-5 items-end gap-3 sm:gap-6'} role="img" aria-label="Mayıs ile Eylül arasında aylık çözülen soru sayısı ve isabet oranı artışı">
        {EXPERIENCE_MONTHS.map((item) => (
          <div key={item.month} className="group flex h-full flex-col justify-end gap-2 text-center">
            <span className="text-xs font-extrabold tabular text-ink sm:text-sm">{item.solved}</span>
            <div className="relative mx-auto flex h-36 w-full max-w-14 items-end overflow-hidden rounded-t-xl bg-surface-sunken sm:h-44 sm:max-w-[4.5rem]">
              <span
                className="block w-full rounded-t-xl bg-aurora-gradient transition-[height,filter] duration-300 group-hover:brightness-110 motion-reduce:transition-none"
                style={{ height: `${Math.max(18, (item.solved / maxSolved) * 100)}%` }}
              />
              <span className="absolute inset-x-0 bottom-2 text-[10px] font-extrabold text-white drop-shadow sm:text-xs">%{item.accuracy}</span>
            </div>
            <span className="truncate text-[10px] font-bold text-ink/55 sm:text-xs">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-3 text-xs text-ink/55">
        <span>Sütun: çözülen soru</span>
        <span>Sütun içi: isabet oranı</span>
      </div>
    </div>
  )
}
export default function ExperienceDashboard() {
  return (
    <>
      <DashboardHero
        asPageHeader
        eyebrow="Genel Bakış"
        title={`Merhaba ${EXPERIENCE_PROFILE.fullName.split(' ')[0]}`}
        avatar={EXPERIENCE_PROFILE.initials}
        badge={{ label: EXPERIENCE_PROFILE.exam, tone: 'glass' }}
        highlights={[
          { label: 'son TYT neti', value: '72,5' },
          { label: '5 aylık isabet', value: '%70' },
          { label: 'çalışma serisi', value: '8 gün' },
        ]}
        action={<Button as={Link} to="/deneyim/soru-kutuphanesi" size="sm" icon={TestTube2}>Test çöz</Button>}
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Beş aylık özet">
        <MetricTile label="Çözülen soru" value={solvedTotal.toLocaleString('tr-TR')} icon={CheckCircle2} tone="brand" delta={{ value: '+%71', direction: 'up' }} hint="Mayıs–Eylül" trend={EXPERIENCE_MONTHS.map((item) => item.solved)} />
        <MetricTile label="Güncel isabet" value="%76" icon={Target} tone="success" delta={{ value: '+15 puan', direction: 'up' }} hint="Mayısa göre" trend={EXPERIENCE_MONTHS.map((item) => item.accuracy)} />
        <MetricTile label="Tam deneme" value={`${examTotal} TYT`} icon={Trophy} tone="warning" hint="5 ay içinde" trend={EXPERIENCE_MONTHS.map((item) => item.exams)} />
        <MetricTile label="AI soru çözümü" value={`${aiSolveTotal} soru`} icon={Bot} tone="aqua" hint="Adım adım incelendi" trend={EXPERIENCE_MONTHS.map((item) => item.aiSolves)} />
      </section>

      <section className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(18rem,.85fr)]">
        <Panel title="Beş aylık ilerleme" description="Soru hacmi artarken doğruluk da yükseliyor" icon={Target} iconTone="#7667A8">
          <MonthlyProgress compact />
        </Panel>
        <Panel title="Ders dengesi" description="Çözüm hacmi ve isabet birlikte" icon={BookOpenText} iconTone="#438F91">
          <SubjectBars data={EXPERIENCE_SUBJECTS.slice(0, 5)} />
        </Panel>
      </section>

      <Panel title="Çalışma ritmi" description="Son 28 günün gün gün yoğunluğu" icon={Clock3} iconTone="#638A6D">
        <ActivityStrip days={EXPERIENCE_ACTIVITY} periodLabel="Son 28 gün" activeUnitLabel="gün" />
      </Panel>

      <section className="grid gap-5 xl:grid-cols-2">
        <Panel
          title="Sorunlu sorular"
          description="Koçun tekrar planına aldığı son kayıtlar"
          icon={CircleAlert}
          iconTone="#B5813E"
          action={<Button as={Link} to="/deneyim/analiz" variant="ghost" size="sm" iconRight={ArrowRight}>Tüm analiz</Button>}
          padding={false}
        >
          <ul className="divide-y divide-line">
            {EXPERIENCE_PROBLEMS.slice(0, 4).map((item) => (
              <li key={item.id} className="flex items-start gap-3 px-5 py-4 sm:px-6">
                <SoftIcon icon={CircleAlert} tone={item.attempts >= 3 ? 'amber' : 'slate'} size="sm" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="font-semibold text-ink">{item.topic}</p>
                    <Badge tone={item.attempts >= 3 ? 'warning' : 'neutral'} size="sm">{item.attempts} deneme</Badge>
                  </div>
                  <p className="mt-0.5 text-xs text-ink/56">{item.subject} · {item.note}</p>
                  <p className="mt-2 text-[11px] font-bold text-brand-700">{item.status}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="AI ile çözülenler" description="Son adım adım çözüm oturumları" icon={Bot} iconTone="#5E88A7" padding={false}>
          <ul className="divide-y divide-line">
            {EXPERIENCE_AI_SOLVES.map((item) => (
              <li key={item.id} className="flex items-center gap-3 px-5 py-4 sm:px-6">
                <SoftIcon icon={Bot} tone="sky" size="sm" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-semibold text-ink">{item.topic}</p>
                  <p className="mt-0.5 truncate text-xs text-ink/56">{item.subject} · {item.result}</p>
                </div>
                <div className="shrink-0 text-right text-[11px] text-ink/48">
                  <p>{item.date}</p>
                  <p>{item.duration}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </section>

      <Panel title="Atlas deneyimi" description="Tanıtım alanında yalnız Kimya Atlası tamamen açık" icon={FlaskConical} iconTone="#438F91">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(17rem,.6fr)]">
          <Link to="/deneyim/kimya-atlasi" className="focus-ring group flex min-h-48 flex-col justify-between rounded-2xl border border-aqua-200 bg-aqua-50/55 p-5 transition hover:-translate-y-0.5 hover:border-aqua-400 hover:shadow-card motion-reduce:transform-none sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <SoftIcon icon={FlaskConical} tone="aqua" size="lg" />
              <Badge tone="success" size="sm">Tamamen açık</Badge>
            </div>
            <div className="mt-8">
              <h3 className="font-display text-xl font-extrabold text-ink">Kimya Atlası</h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-ink/60">Periyodik sistemi, atomları, bağları ve formül laboratuvarını gerçek etkileşimleriyle keşfet.</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-aqua-700">Atlası aç <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span>
            </div>
          </Link>

          <div className="rounded-2xl border border-line bg-surface-muted/60 p-5">
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.13em] text-ink/46"><LockKeyhole className="h-4 w-4" /> Üyelikle açılır</div>
            <ul className="mt-4 space-y-3 text-sm font-semibold text-ink/56">
              {['Fizik Atlası', 'Biyoloji Atlası', 'Coğrafya Atlası', 'Tarih Atlası'].map((name) => (
                <li key={name} className="flex items-center justify-between gap-3 rounded-xl border border-line bg-white px-3 py-2.5"><span>{name}</span><LockKeyhole className="h-3.5 w-3.5 text-ink/35" aria-hidden="true" /></li>
              ))}
            </ul>
          </div>
        </div>
      </Panel>
    </>
  )
}
