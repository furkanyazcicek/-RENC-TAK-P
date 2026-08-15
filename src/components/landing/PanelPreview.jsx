import {
  CheckCircle2,
  Clock,
  Eye,
  HelpCircle,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { useCountUp, useInView } from './hooks'
import NetTrendChart from './NetTrendChart'
import SubjectBarChart from './SubjectBarChart'
import WeeklyStudyChart from './WeeklyStudyChart'
import ProgressRing from './ProgressRing'
import {
  NET_TREND,
  STUDENTS,
  SUBJECT_NETS,
  TOPIC_PROGRESS,
  WEEKLY_STUDY,
} from './demoData'

/* --- Küçük parçalar --- */

function MiniStat({ label, value, decimals = 0, suffix = '', icon: Icon, tone = '#7C3AED', delta }) {
  const [ref, inView] = useInView()
  const shown = useCountUp(value, { start: inView, decimals, duration: 1100 })

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-line bg-surface p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card-hover"
    >
      <span className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ background: tone }} />
      <div className="flex items-start justify-between gap-2 pl-1.5">
        <span className="text-[9px] font-bold uppercase tracking-wider text-ink/55">{label}</span>
        {Icon && (
          <span
            className="grid h-5 w-5 shrink-0 place-items-center rounded-md transition-transform duration-200 group-hover:scale-110"
            style={{ background: `${tone}14`, color: tone }}
          >
            <Icon className="h-3 w-3" strokeWidth={2.4} />
          </span>
        )}
      </div>
      <p className="pl-1.5 mt-1 font-display text-xl font-bold tabular text-ink leading-none">
        {shown}
        <span className="text-xs text-ink/55 font-semibold">{suffix}</span>
      </p>
      {delta && (
        <p className="pl-1.5 mt-1 text-[9px] font-bold text-success-600">{delta}</p>
      )}
    </div>
  )
}

function PanelCard({ title, subtitle, action, className, children }) {
  return (
    <div className={cn('rounded-xl border border-line bg-surface p-3.5', className)}>
      {(title || action) && (
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <div>
            <p className="text-[11px] font-bold text-ink">{title}</p>
            {subtitle && <p className="text-[9px] text-ink/55 mt-px">{subtitle}</p>}
          </div>
          {action}
        </div>
      )}
      {children}
    </div>
  )
}

function Pill({ children, tone = 'brand' }) {
  const tones = {
    brand: 'bg-brand-50 text-brand-700',
    success: 'bg-success-50 text-success-700',
    warning: 'bg-warning-50 text-warning-700',
    neutral: 'bg-ink/[0.06] text-ink/65',
  }
  return (
    <span className={cn('rounded-full px-1.5 py-0.5 text-[9px] font-bold', tones[tone])}>
      {children}
    </span>
  )
}

/* --- Panel içerikleri --- */

function StudentPanel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2.5">
        <MiniStat label="Son Net" value={81} icon={Target} tone="#7C3AED" delta="↑ 3,0" />
        <MiniStat label="Bu Hafta" value={25} suffix="s" icon={Clock} tone="#059669" delta="↑ 2s 40dk" />
        <MiniStat label="Çözülen" value={1188} icon={CheckCircle2} tone="#D97706" />
      </div>

      <PanelCard
        title="Deneme Net Gelişimi"
        subtitle="Son 7 LGS denemesi"
        action={<Pill tone="brand">LGS</Pill>}
      >
        <NetTrendChart data={NET_TREND} className="text-ink" />
      </PanelCard>

      <div className="grid sm:grid-cols-2 gap-3">
        <PanelCard title="Ders Bazlı Net" subtitle="Son denemede">
          <SubjectBarChart data={SUBJECT_NETS.slice(0, 4)} />
        </PanelCard>
        <PanelCard title="Haftalık Çalışma" subtitle="Son 7 gün">
          <WeeklyStudyChart data={WEEKLY_STUDY} />
        </PanelCard>
      </div>
    </div>
  )
}

function ParentPanel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2 rounded-xl border border-info-100 bg-info-50 px-3 py-2">
        <Eye className="h-3.5 w-3.5 shrink-0 text-info-600" strokeWidth={2.2} />
        <p className="text-[10px] font-semibold text-info-700">
          Gözlemci modu — veliler yalnızca görüntüler, kayıtları değiştiremez.
        </p>
      </div>

      <div className="grid grid-cols-[auto_1fr] gap-3 items-center rounded-xl border border-line bg-surface p-3.5">
        <ProgressRing value={87} size={84} color="#059669" label="hedefe" className="text-ink" />
        <div className="min-w-0">
          <p className="text-[11px] font-bold text-ink">Hedef Takibi</p>
          <p className="mt-0.5 text-[9px] text-ink/55 leading-relaxed">
            Bu dönem için belirlenen 84 net hedefine yaklaşıldı.
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Pill tone="success">Düzenli çalışıyor</Pill>
            <Pill tone="neutral">6 hafta üst üste</Pill>
          </div>
        </div>
      </div>

      <PanelCard title="Haftalık Çalışma Süresi" subtitle="Son 7 gün · toplam 25 saat">
        <WeeklyStudyChart data={WEEKLY_STUDY} color="#059669" />
      </PanelCard>

      <PanelCard title="Konu Bazlı İlerleme" subtitle="Matematik">
        <div className="flex flex-col gap-2">
          {TOPIC_PROGRESS.map((t) => (
            <SubjectRow key={t.topic} topic={t.topic} pct={t.pct} tone={t.tone} />
          ))}
        </div>
      </PanelCard>
    </div>
  )
}

function SubjectRow({ topic, pct, tone }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="group cursor-default">
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="text-[10px] font-semibold text-ink/60 transition-colors group-hover:text-ink">
          {topic}
        </span>
        <span className="text-[10px] font-bold tabular text-ink/70">%{pct}</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
        <div
          className="h-full rounded-full transition-all duration-[900ms] ease-smooth group-hover:brightness-110"
          style={{ width: inView ? `${pct}%` : '0%', background: tone }}
        />
      </div>
    </div>
  )
}

function TeacherPanel() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2.5">
        <MiniStat label="Öğrenci" value={24} icon={Users} tone="#7C3AED" delta="↑ +3 bu ay" />
        <MiniStat label="Bekleyen Soru" value={7} icon={HelpCircle} tone="#D97706" />
        <MiniStat label="Ort. Net" value={68.4} decimals={1} icon={TrendingUp} tone="#059669" delta="↑ 4,2" />
      </div>

      <PanelCard title="Öğrencilerim" subtitle="Detay için bir öğrenciye tıkla">
        <div className="flex flex-col">
          {STUDENTS.map((s, i) => (
            <div
              key={s.name}
              className={cn(
                'group flex items-center gap-2.5 py-2 transition-colors hover:bg-brand-50/60 -mx-1.5 px-1.5 rounded-lg cursor-pointer',
                i !== STUDENTS.length - 1 && 'border-b border-line'
              )}
            >
              <span
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full font-display text-[9px] font-bold text-white transition-transform duration-200 group-hover:scale-110"
                style={{ background: s.color }}
              >
                {s.initials}
              </span>
              <span className="flex-1 min-w-0 truncate text-[11px] font-semibold text-ink">
                {s.name}
              </span>
              <span className="hidden xs:block text-[10px] font-bold tabular text-brand-600">
                {Math.floor(s.minutes / 60)}s {s.minutes % 60}dk
              </span>
              <span className="text-[10px] font-semibold tabular text-ink/60">{s.solved}</span>
              <span
                className={cn(
                  'text-[9px] font-bold transition-transform duration-200 group-hover:translate-x-0.5',
                  s.trend === 'up' ? 'text-success-600' : 'text-ink/45'
                )}
              >
                {s.trend === 'up' ? '↑' : '→'}
              </span>
            </div>
          ))}
        </div>
      </PanelCard>

      <div className="grid sm:grid-cols-2 gap-3">
        <PanelCard title="Sınıf Ortalaması" subtitle="Deneme bazında">
          <NetTrendChart data={NET_TREND} color="#DB2777" className="text-ink" />
        </PanelCard>
        <PanelCard title="Ders Bazlı Dağılım" subtitle="Sınıf geneli">
          <SubjectBarChart data={SUBJECT_NETS.slice(0, 4)} />
        </PanelCard>
      </div>
    </div>
  )
}

/* --- Pencere çerçevesi --- */

const PANELS = {
  student: {
    render: StudentPanel,
    title: 'Analiz',
    path: 'drkoc.app/analiz',
    icon: Target,
    who: 'Ayşe Y. · 8. sınıf · LGS',
    avatar: 'AY',
  },
  parent: {
    render: ParentPanel,
    title: 'Veli Paneli',
    path: 'drkoc.app/veli',
    icon: Eye,
    who: 'Ayşe Y. · veli görünümü',
    avatar: 'ZY',
  },
  teacher: {
    render: TeacherPanel,
    title: 'Öğretmen Paneli',
    path: 'drkoc.app/ogretmen',
    icon: Users,
    who: 'Furkan Y. · 24 öğrenci',
    avatar: 'FY',
  },
}

/**
 * PanelPreview — uygulamanın gerçek ekranını taklit eden, çerçeveli önizleme.
 * `variant`: student | parent | teacher
 */
export default function PanelPreview({ variant = 'student', className }) {
  const config = PANELS[variant] ?? PANELS.student
  const Panel = config.render
  const Icon = config.icon

  return (
    <div
      className={cn(
        'overflow-hidden rounded-panel border border-white/60 bg-paper shadow-elevated',
        className
      )}
    >
      {/* Pencere başlığı */}
      <div className="flex items-center gap-2 border-b border-line bg-surface px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-danger-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-success-500/70" />
        </div>
        <div className="mx-auto flex items-center gap-1.5 rounded-md bg-surface-sunken px-2.5 py-1">
          <Icon className="h-3 w-3 text-ink/50" strokeWidth={2.2} aria-hidden="true" />
          <span className="text-[10px] font-medium text-ink/55">{config.path}</span>
        </div>
      </div>

      {/* Uygulama başlığı */}
      <div className="flex items-center justify-between gap-2 border-b border-line bg-surface/80 px-3.5 py-2.5">
        <div>
          <p className="font-display text-xs font-bold text-ink">{config.title}</p>
          <p className="text-[9px] text-ink/55">{config.who}</p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="hidden xs:flex items-center gap-1 rounded-full bg-success-50 px-1.5 py-0.5 text-[9px] font-bold text-success-700">
            <span className="h-1 w-1 rounded-full bg-success-500 animate-pulse-soft" />
            canlı
          </span>
          <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-500 font-display text-[9px] font-bold text-white">
            {config.avatar}
          </span>
        </div>
      </div>

      <div className="p-3 sm:p-3.5">
        <Panel />
      </div>
    </div>
  )
}
