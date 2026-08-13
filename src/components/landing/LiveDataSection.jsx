import { useMemo, useState } from 'react'
import {
  ArrowUpDown,
  CheckCircle2,
  CircleSlash,
  Layers,
  Target,
  XCircle,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { useCountUp, useInView } from './hooks'
import Reveal from './Reveal'
import NetTrendChart from './NetTrendChart'
import ProgressRing from './ProgressRing'
import { EXAM_TRACKS, topicAccuracy } from './demoData'

/**
 * LiveDataSection — "Veri Masası".
 *
 * Uygulamanın içindeki iki tabloyu (deneme ders kırılımı ve konu bazlı
 * gelişim) tanıtım sayfasına taşır. Tablolar gerçek uygulamadaki alan
 * yapısını birebir kullanır: doğru / yanlış / boş / net / başarı.
 *
 * Dinamiklik üç katmanda kurulur:
 *  1) Sınav türü sekmesi   → tüm veri seti değişir (LGS / YKS / KPSS)
 *  2) Sütun başlığına tıklama → tablo sıralanır, satırlar sırayla belirir
 *  3) Ekrana girince        → sayılar sayar, çubuklar ve halka dolar
 */

/* ---------------------------------------------------------------- */
/* Küçük parçalar                                                     */
/* ---------------------------------------------------------------- */

function fmt(n, decimals = 2) {
  return Number(n).toLocaleString('tr-TR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

/** Ekrana girince 0'dan hedefe sayan metrik kutusu. */
function SummaryTile({ label, value, decimals = 0, suffix = '', hint, icon: Icon, tone }) {
  const [ref, inView] = useInView()
  const shown = useCountUp(value, { start: inView, decimals, duration: 1200 })

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-xl border border-line bg-surface p-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
    >
      <span
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: tone }}
      />
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] font-bold uppercase tracking-wider text-ink/55">{label}</span>
        <span
          className="grid h-6 w-6 shrink-0 place-items-center rounded-md transition-transform duration-200 group-hover:scale-110"
          style={{ background: `${tone}16`, color: tone }}
        >
          <Icon className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
        </span>
      </div>
      <p className="mt-1.5 font-display text-2xl font-bold tabular leading-none text-ink">
        {shown}
        <span className="text-sm font-semibold text-ink/55">{suffix}</span>
      </p>
      {hint && <p className="mt-1 text-[10px] font-medium text-ink/55">{hint}</p>}
    </div>
  )
}

/** Sıralanabilir tablo başlığı. */
function SortHeader({ label, sortKey, sort, onSort, align = 'center', title }) {
  const active = sort.key === sortKey
  return (
    <th
      scope="col"
      aria-sort={active ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none'}
      className={cn(
        'px-2.5 py-2.5 sm:px-3',
        align === 'left' && 'text-left',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right'
      )}
    >
      <button
        type="button"
        onClick={() => onSort(sortKey)}
        title={title ?? `${label} sütununa göre sırala`}
        className={cn(
          'focus-ring inline-flex items-center gap-1 rounded text-[10px] font-bold uppercase tracking-wider transition-colors sm:text-[11px]',
          active ? 'text-brand-600' : 'text-ink/55 hover:text-ink/70'
        )}
      >
        {label}
        <ArrowUpDown
          className={cn(
            'h-3 w-3 transition-all duration-200',
            active ? 'opacity-100' : 'opacity-0 group-hover/table:opacity-40',
            active && sort.dir === 'asc' && 'rotate-180'
          )}
          strokeWidth={2.6}
          aria-hidden="true"
        />
      </button>
    </th>
  )
}

/** Hücre içinde başarıyı gösteren ince çubuk. */
function MiniMeter({ pct, color, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
      <div
        className="h-full rounded-full"
        style={{
          width: inView ? `${Math.min(Math.max(pct, 0), 100)}%` : '0%',
          background: color,
          transition: `width .9s cubic-bezier(.4,0,.2,1) ${delay}ms`,
        }}
      />
    </div>
  )
}

function toneForSuccess(pct) {
  if (pct >= 75) return '#059669'
  if (pct >= 50) return '#D97706'
  return '#E11D48'
}

/* ---------------------------------------------------------------- */
/* Ders kırılımı tablosu                                              */
/* ---------------------------------------------------------------- */

function SubjectTable({ track, selected, onSelect }) {
  const [sort, setSort] = useState({ key: 'net', dir: 'desc' })

  const rows = useMemo(() => {
    const list = [...track.subjects]
    list.sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      const cmp = typeof av === 'string' ? av.localeCompare(bv, 'tr') : av - bv
      return sort.dir === 'asc' ? cmp : -cmp
    })
    return list
  }, [track, sort])

  function handleSort(key) {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' }
        : { key, dir: key === 'subject' ? 'asc' : 'desc' }
    )
  }

  return (
    <div className="group/table overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[440px] text-sm">
        <caption className="sr-only">
          {track.label} denemesinde ders bazlı doğru, yanlış, boş ve net dağılımı
        </caption>
        <thead className="border-b border-line bg-surface-muted">
          <tr>
            <SortHeader label="Ders" sortKey="subject" sort={sort} onSort={handleSort} align="left" />
            <SortHeader label="D" sortKey="correct" sort={sort} onSort={handleSort} title="Doğru sayısına göre sırala" />
            <SortHeader label="Y" sortKey="wrong" sort={sort} onSort={handleSort} title="Yanlış sayısına göre sırala" />
            <SortHeader label="B" sortKey="blank" sort={sort} onSort={handleSort} title="Boş sayısına göre sırala" />
            <SortHeader label="Net" sortKey="net" sort={sort} onSort={handleSort} align="right" />
            <SortHeader label="Başarı" sortKey="success" sort={sort} onSort={handleSort} align="right" />
          </tr>
        </thead>
        <tbody key={`${track.value}-${sort.key}-${sort.dir}`}>
          {rows.map((row, i) => {
            const on = selected === row.subject
            return (
              <tr
                key={row.subject}
                onMouseEnter={() => onSelect(row.subject)}
                onMouseLeave={() => onSelect(null)}
                className={cn(
                  'animate-fade-in-up cursor-default border-b border-line/70 transition-colors last:border-0',
                  on ? 'bg-brand-50/70' : 'hover:bg-surface-muted'
                )}
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <td className="px-2.5 py-2.5 sm:px-3">
                  <span className="flex items-center gap-2">
                    <span
                      className={cn(
                        'h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-200',
                        on && 'scale-125'
                      )}
                      style={{ background: row.color }}
                    />
                    <span className="whitespace-nowrap text-[13px] font-semibold text-ink">
                      {row.subject}
                    </span>
                    <span className="hidden text-[10px] font-medium text-ink/50 sm:inline">
                      /{row.total}
                    </span>
                  </span>
                </td>
                <td className="px-2.5 py-2.5 text-center text-[13px] font-semibold tabular text-success-600 sm:px-3">
                  {row.correct}
                </td>
                <td className="px-2.5 py-2.5 text-center text-[13px] font-semibold tabular text-danger-500 sm:px-3">
                  {row.wrong}
                </td>
                <td className="px-2.5 py-2.5 text-center text-[13px] font-medium tabular text-ink/50 sm:px-3">
                  {row.blank}
                </td>
                <td className="px-2.5 py-2.5 text-right font-display text-[13px] font-bold tabular text-ink sm:px-3">
                  {fmt(row.net)}
                </td>
                <td className="px-2.5 py-2.5 sm:px-3">
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[11px] font-bold tabular" style={{ color: toneForSuccess(row.success) }}>
                      %{fmt(row.success, 0)}
                    </span>
                    <MiniMeter pct={row.success} color={row.color} delay={120 + i * 60} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr className="border-t border-line-strong bg-surface-muted">
            <td className="px-2.5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-ink/60 sm:px-3">
              Toplam
            </td>
            <td className="px-2.5 py-2.5 text-center text-[13px] font-bold tabular text-success-700 sm:px-3">
              {track.totals.correct}
            </td>
            <td className="px-2.5 py-2.5 text-center text-[13px] font-bold tabular text-danger-600 sm:px-3">
              {track.totals.wrong}
            </td>
            <td className="px-2.5 py-2.5 text-center text-[13px] font-bold tabular text-ink/55 sm:px-3">
              {track.totals.blank}
            </td>
            <td
              className="px-2.5 py-2.5 text-right font-display text-sm font-extrabold tabular sm:px-3"
              style={{ color: track.accent }}
            >
              {fmt(track.totals.net)}
            </td>
            <td className="px-2.5 py-2.5 text-right text-[11px] font-bold tabular text-ink/55 sm:px-3">
              {track.totals.total} soru
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Konu bazlı gelişim tablosu                                         */
/* ---------------------------------------------------------------- */

function TopicTable({ track }) {
  const [sort, setSort] = useState({ key: 'accuracy', dir: 'desc' })

  const rows = useMemo(() => {
    const list = track.topics.map((t) => ({
      ...t,
      accuracy: topicAccuracy(t),
      attempted: t.correct + t.wrong,
    }))
    list.sort((a, b) => {
      const av = a[sort.key]
      const bv = b[sort.key]
      const cmp = typeof av === 'string' ? av.localeCompare(bv, 'tr') : av - bv
      return sort.dir === 'asc' ? cmp : -cmp
    })
    return list
  }, [track, sort])

  function handleSort(key) {
    setSort((s) =>
      s.key === key
        ? { key, dir: s.dir === 'asc' ? 'desc' : 'asc' }
        : { key, dir: key === 'topic' || key === 'subject' ? 'asc' : 'desc' }
    )
  }

  const weakest = rows.reduce((a, b) => (b.accuracy < a.accuracy ? b : a), rows[0])

  return (
    <div className="group/table overflow-x-auto rounded-xl border border-line bg-surface">
      <table className="w-full min-w-[520px] text-sm">
        <caption className="sr-only">Konu bazlı çalışma ve başarı tablosu</caption>
        <thead className="border-b border-line bg-surface-muted">
          <tr>
            <SortHeader label="Ders" sortKey="subject" sort={sort} onSort={handleSort} align="left" />
            <SortHeader label="Konu" sortKey="topic" sort={sort} onSort={handleSort} align="left" />
            <SortHeader label="Oturum" sortKey="sessions" sort={sort} onSort={handleSort} />
            <SortHeader label="Çözülen" sortKey="attempted" sort={sort} onSort={handleSort} />
            <SortHeader label="Başarı" sortKey="accuracy" sort={sort} onSort={handleSort} align="right" />
          </tr>
        </thead>
        <tbody key={`${track.value}-${sort.key}-${sort.dir}`}>
          {rows.map((row, i) => {
            const tone = toneForSuccess(row.accuracy)
            const isWeak = weakest && row.topic === weakest.topic
            return (
              <tr
                key={`${row.subject}-${row.topic}`}
                className="animate-fade-in-up cursor-default border-b border-line/70 transition-colors last:border-0 hover:bg-surface-muted"
                style={{ animationDelay: `${i * 45}ms` }}
              >
                <td className="whitespace-nowrap px-2.5 py-2.5 text-[12px] font-medium text-ink/65 sm:px-3">
                  {row.subject}
                </td>
                <td className="px-2.5 py-2.5 sm:px-3">
                  <span className="flex items-center gap-2">
                    <span className="whitespace-nowrap text-[13px] font-semibold text-ink">
                      {row.topic}
                    </span>
                    {isWeak && (
                      <span className="rounded-full bg-warning-50 px-1.5 py-0.5 text-[9px] font-bold text-warning-700">
                        öncelikli
                      </span>
                    )}
                  </span>
                  <span className="mt-0.5 block text-[10px] text-ink/50">son çalışma · {row.last}</span>
                </td>
                <td className="px-2.5 py-2.5 text-center text-[13px] font-semibold tabular text-ink/65 sm:px-3">
                  {row.sessions}
                </td>
                <td className="px-2.5 py-2.5 text-center text-[13px] font-semibold tabular text-ink/70 sm:px-3">
                  {row.attempted}
                  <span className="ml-1 text-[10px] font-medium text-danger-500">−{row.wrong}</span>
                </td>
                <td className="px-2.5 py-2.5 sm:px-3">
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-[11px] font-bold tabular" style={{ color: tone }}>
                      %{row.accuracy}
                    </span>
                    <MiniMeter pct={row.accuracy} color={tone} delay={120 + i * 60} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Bölüm                                                              */
/* ---------------------------------------------------------------- */

export default function LiveDataSection() {
  const [trackValue, setTrackValue] = useState(EXAM_TRACKS[0].value)
  const track = EXAM_TRACKS.find((t) => t.value === trackValue) ?? EXAM_TRACKS[0]
  const [selected, setSelected] = useState(null)

  const goalPct = Math.min(100, Math.round((track.totals.net / track.goal) * 100))
  const best = track.subjects.reduce((a, b) => (b.success > a.success ? b : a))
  const focus = track.subjects.reduce((a, b) => (b.success < a.success ? b : a))

  return (
    <section id="veri" className="relative overflow-hidden border-t border-line">
      {/* Zemin dokusu — çok hafif, tabloların okunurluğunu bozmaz */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 12% 0%, rgb(var(--c-aurora-violet) / 0.08), transparent 42%), radial-gradient(circle at 88% 100%, rgb(var(--c-aurora-cyan) / 0.08), transparent 45%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <span className="h-1 w-5 rounded-full bg-aurora-line" aria-hidden="true" />
            Uygulamanın içinden
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Veri masası
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Deneme sonucunu girdiğin anda gördüğün tablolar bunlar. Sınav türünü değiştir,
            sütun başlıklarına tıklayarak sırala — hangi dersin netini taşıdığını, hangi
            konunun aşağı çektiğini kendin gör.
          </p>
        </Reveal>

        {/* Sınav türü sekmeleri */}
        <Reveal delay={80} className="mt-9 flex justify-center">
          <div
            role="tablist"
            aria-label="Sınav türü"
            className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-line bg-surface p-1 shadow-sm"
          >
            {EXAM_TRACKS.map((t) => {
              const on = t.value === trackValue
              return (
                <button
                  key={t.value}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  onClick={() => {
                    setTrackValue(t.value)
                    setSelected(null)
                  }}
                  className={cn(
                    'focus-ring rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 sm:px-6',
                    on ? 'text-white shadow-sm' : 'text-ink/60 hover:bg-surface-muted hover:text-ink'
                  )}
                  style={on ? { background: t.accent } : undefined}
                >
                  {t.label}
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Pencere çerçevesi */}
        <Reveal
          delay={140}
          className="mt-8 overflow-hidden rounded-2xl border border-line bg-surface shadow-card"
        >
          {/* Başlık şeridi */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-surface-muted px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg text-white"
                style={{ background: track.accent }}
              >
                <Layers className="h-4 w-4" strokeWidth={2.2} aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-sm font-bold leading-tight text-ink">
                  Deneme Analizi · {track.label}
                </p>
                <p className="text-[11px] leading-tight text-ink/55">
                  {track.student} · {track.caption}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-ink/[0.05] px-2.5 py-1 text-[10px] font-semibold text-ink/60">
                {track.penaltyNote}
              </span>
              <span className="flex items-center gap-1 rounded-full bg-success-50 px-2 py-1 text-[10px] font-bold text-success-700">
                <span className="h-1.5 w-1.5 rounded-full bg-success-500 animate-pulse-soft" />
                7. deneme
              </span>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            {/* Özet metrikler */}
            <div key={`sum-${track.value}`} className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
              <SummaryTile
                label="Toplam Net"
                value={track.totals.net}
                decimals={2}
                hint={`${track.goal} net hedefinin %${goalPct}'i`}
                icon={Target}
                tone={track.accent}
              />
              <SummaryTile
                label="Doğru"
                value={track.totals.correct}
                hint={`${track.totals.total} soruda`}
                icon={CheckCircle2}
                tone="#059669"
              />
              <SummaryTile
                label="Yanlış"
                value={track.totals.wrong}
                hint={track.penalty ? `net kaybı ${fmt(track.totals.wrong / track.penalty)}` : 'net kaybı yok'}
                icon={XCircle}
                tone="#E11D48"
              />
              <SummaryTile
                label="Boş"
                value={track.totals.blank}
                hint="işaretlenmemiş soru"
                icon={CircleSlash}
                tone="#6B6B85"
              />
            </div>

            {/* Tablo + grafik */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              {/* min-w-0: ızgara öğesinin varsayılan asgari genişliği içeriğin
                  min-content'idir. İçerideki tablo `min-w-[440px]` taşıdığı için
                  öğe mobilde 440px'e şişip bölümün dışına taşıyordu; `overflow-x-auto`
                  da devreye giremiyordu. min-w-0 öğeyi daraltıp kaydırmayı
                  tablonun kendi kabına bırakır. */}
              <div className="min-w-0">
                <div className="mb-2 flex items-baseline justify-between gap-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/55">
                    Ders bazlı kırılım
                  </p>
                  <p className="text-[10px] font-medium text-ink/50">
                    sıralamak için başlığa tıkla
                  </p>
                </div>
                <SubjectTable track={track} selected={selected} onSelect={setSelected} />
              </div>

              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-line bg-surface p-4">
                  <div className="mb-3 flex items-baseline justify-between gap-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/55">
                      Net gelişimi
                    </p>
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ background: track.accent }}
                    >
                      {track.label}
                    </span>
                  </div>
                  <NetTrendChart
                    key={`trend-${track.value}`}
                    data={track.trend}
                    color={track.accent}
                    maxNet={Math.ceil((track.goal * 1.15) / 10) * 10}
                    className="text-ink"
                  />
                </div>

                <div className="flex items-center gap-4 rounded-xl border border-line bg-surface p-4">
                  <ProgressRing
                    key={`ring-${track.value}`}
                    value={goalPct}
                    size={92}
                    color={track.accent}
                    label="hedefe"
                    className="shrink-0 text-ink"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-ink/55">
                      Hedef takibi
                    </p>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink/60">
                      Dönem hedefi <strong className="font-bold text-ink">{track.goal} net</strong>;
                      şu an <strong className="font-bold text-ink">{fmt(track.totals.net)}</strong>.
                      Kalan <strong className="font-bold text-ink">
                        {fmt(Math.max(0, track.goal - track.totals.net))}
                      </strong> net.
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-success-50 px-2 py-0.5 text-[10px] font-bold text-success-700">
                        güçlü · {best.subject}
                      </span>
                      <span className="rounded-full bg-warning-50 px-2 py-0.5 text-[10px] font-bold text-warning-700">
                        odak · {focus.subject}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Konu tablosu */}
            <div className="mt-5">
              <div className="mb-2 flex items-baseline justify-between gap-2">
                <p className="text-xs font-bold uppercase tracking-wider text-ink/55">
                  Konu bazlı gelişim
                </p>
                <p className="text-[10px] font-medium text-ink/50">
                  günlük kayıtlardan otomatik üretilir
                </p>
              </div>
              <TopicTable track={track} />
            </div>
          </div>
        </Reveal>

        <p className="mt-5 text-center text-[11px] text-ink/50">
          Tablolardaki veriler platformun çalışma biçimini göstermek için hazırlanmış
          örneklerdir; gerçek öğrenci kaydı değildir.
        </p>
      </div>
    </section>
  )
}
