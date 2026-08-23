import { useCallback, useEffect, useRef, useState } from 'react'
import {
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  Pause,
  PenLine,
  Play,
  Target,
  TrendingUp,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import AuroraBackground from '../ui/AuroraBackground'
import { useInView, usePrefersReducedMotion } from './hooks'
import Reveal from './Reveal'
import NetTrendChart from './NetTrendChart'
import WeeklyStudyChart from './WeeklyStudyChart'
import SubjectBarChart from './SubjectBarChart'
import { FLOW_STEPS, NET_TREND, SUBJECT_NETS, WEEKLY_STUDY } from './demoData'

/**
 * HowItWorksSection — dört adımlı, kendi kendine ilerleyen akış.
 *
 * Sol tarafta adımlar; aktif adımın altındaki ince çubuk dolarken sıra
 * kendiliğinden bir sonrakine geçer. Sağ tarafta o adıma karşılık gelen
 * uygulama ekranı değişir. Kullanıcı bir adıma tıklarsa otomatik akış
 * durur (kontrol kullanıcıya geçer), üstteki düğmeyle tekrar başlatılır.
 *
 * "Hareketi azalt" tercihi açıksa otomatik geçiş hiç başlamaz.
 */

const STEP_MS = 6000
const TICK_MS = 40

const STEP_ICONS = [PenLine, ClipboardList, Target, MessageCircle]

/* ---------------------------------------------------------------- */
/* Adım ekranları                                                     */
/* ---------------------------------------------------------------- */

/* Ekran çerçevelerindeki rozet tonları — satır içi hex yerine token.
   `accent` artık bir renk kodu değil, semantik bir ad. */
const SCREEN_ACCENTS = {
  brand: 'bg-brand-700 text-white',
  success: 'bg-success-600 text-white',
  warning: 'bg-warning-600 text-white',
  accent: 'bg-accent-600 text-white',
}

function ScreenFrame({ title, subtitle, badge, accent = 'brand', children }) {
  return (
    <div className="landing-visual-interactive overflow-hidden rounded-panel border border-line bg-paper shadow-elevated">
      <div className="flex items-center justify-between gap-2 border-b border-line bg-surface px-3.5 py-2.5">
        <div className="min-w-0">
          <p className="font-display text-xs font-bold leading-tight text-ink">{title}</p>
          <p className="truncate text-[10px] leading-tight text-ink/55">{subtitle}</p>
        </div>
        {badge && (
          <span
            className={cn(
              'shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold',
              SCREEN_ACCENTS[accent] ?? SCREEN_ACCENTS.brand
            )}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-3.5">{children}</div>
    </div>
  )
}

function LogScreen() {
  const rows = [
    { subject: 'Matematik', topic: 'Çarpanlar ve Katlar', min: 75, solved: 62, bar: 'bg-brand-500' },
    { subject: 'Fen Bilimleri', topic: 'Basınç', min: 60, solved: 48, bar: 'bg-aqua-500' },
    { subject: 'Türkçe', topic: 'Paragrafta Anlam', min: 50, solved: 74, bar: 'bg-accent-500' },
    { subject: 'İngilizce', topic: 'Tenses', min: 40, solved: 40, bar: 'bg-info-500' },
  ]
  return (
    <ScreenFrame title="Günlük Takip" subtitle="12 Ocak Pazartesi · kayıt ekranı" badge="kaydedildi" accent="success">
      <div className="flex flex-col gap-2">
        {rows.map((r, i) => (
          <div
            key={r.topic}
            className="animate-fade-in-up flex items-center gap-2.5 rounded-lg border border-line bg-surface px-2.5 py-2"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <span className={cn('h-6 w-1 shrink-0 rounded-full', r.bar)} />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-bold text-ink">{r.topic}</p>
              <p className="text-[9px] text-ink/55">{r.subject}</p>
            </div>
            <span className="shrink-0 text-[11px] font-bold tabular text-brand-600">{r.min}dk</span>
            <span className="shrink-0 text-[11px] font-semibold tabular text-ink/60">{r.solved} soru</span>
          </div>
        ))}
        <div className="mt-1 rounded-lg bg-surface-sunken px-2.5 py-2">
          <WeeklyStudyChart data={WEEKLY_STUDY} />
        </div>
      </div>
    </ScreenFrame>
  )
}

function ExamScreen() {
  const rows = SUBJECT_NETS.slice(0, 4)
  return (
    <ScreenFrame title="Deneme Girişi" subtitle="7. LGS Denemesi · 4 Oca" badge="net 81,00">
      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-3 gap-2">
          {[
            { l: 'Doğru', v: '83', c: 'text-success-600' },
            { l: 'Yanlış', v: '6', c: 'text-danger-500' },
            { l: 'Boş', v: '1', c: 'text-ink/55' },
          ].map((s, i) => (
            <div
              key={s.l}
              className="animate-fade-in-up rounded-lg border border-line bg-surface px-2 py-1.5 text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <p className="text-[9px] font-bold uppercase tracking-wider text-ink/55">{s.l}</p>
              <p className={cn('font-display text-base font-bold tabular leading-tight', s.c)}>{s.v}</p>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-line bg-surface p-2.5">
          <p className="mb-2 text-[10px] font-bold text-ink">Ders bazlı net</p>
          <SubjectBarChart data={rows} />
        </div>
        <div className="rounded-lg border border-line bg-surface p-2.5">
          <p className="mb-1 text-[10px] font-bold text-ink">Önceki denemelere göre</p>
          <NetTrendChart data={NET_TREND} className="text-ink" />
        </div>
      </div>
    </ScreenFrame>
  )
}

function AnalysisScreen() {
  const rows = [
    { topic: 'Çarpanlar ve Katlar', pct: 92 },
    { topic: 'Paragrafta Anlam', pct: 88 },
    { topic: 'Basınç', pct: 80 },
    { topic: 'Üslü İfadeler', pct: 78 },
    { topic: 'Olasılık', pct: 47 },
  ]
  /* Konu tamamlama oranı bir DURUM bildirir (iyi / dikkat / zayıf),
     seri rengi değil — bu yüzden durum renklerini giyer. */
  const tone = (p) =>
    p >= 75
      ? { text: 'text-success-600', bar: 'bg-success-500' }
      : p >= 50
        ? { text: 'text-warning-700', bar: 'bg-warning-500' }
        : { text: 'text-danger-600', bar: 'bg-danger-500' }

  return (
    <ScreenFrame title="Konu Bazlı Gelişim" subtitle="son 30 günün kayıtlarından" badge="öncelik: Olasılık" accent="warning">
      <div className="flex flex-col gap-2.5">
        {rows.map((r, i) => {
          const t = tone(r.pct)
          return (
            <div key={r.topic} className="animate-fade-in-up" style={{ animationDelay: `${i * 70}ms` }}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="text-[11px] font-semibold text-ink/70">{r.topic}</span>
                <span className={cn('text-[11px] font-bold tabular', t.text)}>%{r.pct}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
                <div
                  className={cn('h-full rounded-full', t.bar)}
                  style={{
                    width: `${r.pct}%`,
                    transition: `width .9s cubic-bezier(.4,0,.2,1) ${150 + i * 70}ms`,
                  }}
                />
              </div>
            </div>
          )
        })}
        <div className="mt-1 flex items-start gap-2 rounded-lg border border-warning-500/20 bg-warning-500/10 px-2.5 py-2">
          <Target className="mt-px h-3.5 w-3.5 shrink-0 text-warning-600" strokeWidth={2.4} />
          <p className="text-[10px] font-semibold leading-relaxed text-warning-700">
            Olasılık konusu son iki denemede 3,3 net kaybettirdi — bu hafta iki tekrar öneriliyor.
          </p>
        </div>
      </div>
    </ScreenFrame>
  )
}

function CoachScreen() {
  const items = [
    {
      icon: ClipboardList,
      title: 'Olasılık — 40 soru',
      meta: 'Öğretmen · son teslim 15 Oca',
      tone: 'bg-brand-500/12 text-brand-600',
      state: 'Devam ediyor',
    },
    {
      icon: MessageCircle,
      title: 'Gönderdiğin soru yanıtlandı',
      meta: 'Matematik · 2 saat önce',
      tone: 'bg-success-500/12 text-success-700',
      state: 'Yanıtlandı',
    },
    {
      icon: CheckCircle2,
      title: 'Üslü İfadeler tekrarı',
      meta: 'Tamamlandı · 11 Oca',
      tone: 'bg-aqua-500/12 text-aqua-700',
      state: 'Tamam',
    },
  ]
  return (
    <ScreenFrame title="Ödevler & Mesajlar" subtitle="öğretmen · veli · öğrenci aynı ekranda" badge="3 aktif" accent="accent">
      <div className="flex flex-col gap-2">
        {items.map((it, i) => {
          const Icon = it.icon
          return (
            <div
              key={it.title}
              className="animate-fade-in-up flex items-center gap-2.5 rounded-lg border border-line bg-surface px-2.5 py-2.5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className={cn('grid h-7 w-7 shrink-0 place-items-center rounded-lg', it.tone)}>
                <Icon className="h-3.5 w-3.5" strokeWidth={2.3} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px] font-bold text-ink">{it.title}</p>
                <p className="text-[9px] text-ink/55">{it.meta}</p>
              </div>
              <span className={cn('shrink-0 rounded-full px-1.5 py-0.5 text-[9px] font-bold', it.tone)}>
                {it.state}
              </span>
            </div>
          )
        })}
        <div className="mt-1 flex items-center gap-2 rounded-lg border border-info-500/20 bg-info-500/10 px-2.5 py-2">
          <TrendingUp className="h-3.5 w-3.5 shrink-0 text-info-600" strokeWidth={2.3} />
          <p className="text-[10px] font-semibold text-info-700">
            Veli paneli aynı ilerlemeyi salt okunur görür.
          </p>
        </div>
      </div>
    </ScreenFrame>
  )
}

const SCREENS = [LogScreen, ExamScreen, AnalysisScreen, CoachScreen]

/* ---------------------------------------------------------------- */
/* Bölüm                                                              */
/* ---------------------------------------------------------------- */

export default function HowItWorksSection() {
  const reduced = usePrefersReducedMotion()
  const [ref, inView] = useInView({ threshold: 0.25, once: false })
  const [index, setIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [playing, setPlaying] = useState(true)
  const hoverRef = useRef(false)
  // İlerleme sayacı ref'te tutulur: StrictMode'da state güncelleyicisi iki kez
  // çalıştığı için sayaç mantığı güncelleyicinin içine konulmaz.
  const progressRef = useRef(0)

  const total = FLOW_STEPS.length
  const running = playing && inView && !reduced

  useEffect(() => {
    if (!running) return undefined
    const id = window.setInterval(() => {
      if (hoverRef.current) return
      progressRef.current += (TICK_MS / STEP_MS) * 100
      if (progressRef.current >= 100) {
        progressRef.current = 0
        setIndex((i) => (i + 1) % total)
      }
      setProgress(progressRef.current)
    }, TICK_MS)
    return () => window.clearInterval(id)
  }, [running, total])

  const select = useCallback((i) => {
    progressRef.current = 0
    setIndex(i)
    setProgress(0)
    setPlaying(false)
  }, [])

  const Screen = SCREENS[index] ?? SCREENS[0]
  const step = FLOW_STEPS[index]

  return (
    <section
      id="nasil-calisir"
      ref={ref}
      className="relative overflow-hidden border-t border-line"
    >
      <AuroraBackground variant="hero" className="opacity-70" />

      <div className="relative z-10 mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <span className="h-1 w-5 rounded-full bg-aurora-line" aria-hidden="true" />
            Nasıl çalışır
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            Kayıttan sonuca dört adım
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/60">
            Süreç kendiliğinden ilerliyor — istediğin adıma tıklayarak durdurabilir,
            o ekranı yakından inceleyebilirsin.
          </p>
        </div>

        {/* Fare adımların veya ekranın üzerindeyken otomatik geçiş bekler —
            kullanıcı okurken adım altından kaymasın diye. */}
        <div
          className="mt-12 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14"
          onMouseEnter={() => {
            hoverRef.current = true
          }}
          onMouseLeave={() => {
            hoverRef.current = false
          }}
        >
          {/* Adım listesi */}
          <ol className="flex flex-col gap-2">
            {FLOW_STEPS.map((s, i) => {
              const Icon = STEP_ICONS[i] ?? PenLine
              const on = i === index
              const done = i < index
              return (
                <li key={s.key}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-current={on ? 'step' : undefined}
                    className={cn(
                      'focus-ring group relative w-full overflow-hidden rounded-card border p-4 text-left transition-all duration-300 sm:p-5',
                      on
                        ? 'border-brand-500/20 bg-surface shadow-card'
                        : 'border-line bg-surface/50 hover:border-brand-200 hover:bg-surface'
                    )}
                  >
                    <div className="flex items-start gap-3.5">
                      <span
                        className={cn(
                          'grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-all duration-300',
                          on
                            ? 'bg-brand-700 text-white shadow-xs'
                            : done
                              ? 'bg-success-500/12 text-success-600'
                              : 'bg-ink/[0.05] text-ink/55 group-hover:text-ink/60'
                        )}
                      >
                        {done && !on ? (
                          <CheckCircle2 className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                        ) : (
                          <Icon className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
                        )}
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline gap-2">
                          <span
                            className={cn(
                              'text-[10px] font-bold uppercase tracking-[0.12em] transition-colors',
                              on ? 'text-brand-600' : 'text-ink/50'
                            )}
                          >
                            {s.badge}
                          </span>
                        </div>
                        <p
                          className={cn(
                            'mt-0.5 font-display text-base font-bold transition-colors sm:text-lg',
                            on ? 'text-ink' : 'text-ink/60 group-hover:text-ink/85'
                          )}
                        >
                          {s.title}
                        </p>

                        {/* Açıklama yalnızca aktif adımda açılır */}
                        <div
                          className={cn(
                            'grid transition-all duration-500 ease-smooth',
                            on ? 'mt-2 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="text-[13px] leading-relaxed text-ink/60">
                              {s.description}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {s.metrics.map((m) => (
                                <span
                                  key={m.label}
                                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface-muted px-2.5 py-1"
                                >
                                  <span
                                    className="h-1.5 w-1.5 rounded-full"
                                    style={{ background: m.tone }}
                                  />
                                  <span className="text-[10px] font-medium text-ink/60">
                                    {m.label}
                                  </span>
                                  <span className="text-[10px] font-bold tabular text-ink">
                                    {m.value}
                                  </span>
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* İlerleme çubuğu — yalnızca aktif adımda */}
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-ink/[0.05]">
                      <span
                        className="block h-full bg-aurora-line"
                        style={{
                          width: on ? `${running ? progress : 100}%` : '0%',
                          transition: running ? `width ${TICK_MS}ms linear` : 'width .3s ease',
                        }}
                      />
                    </span>
                  </button>
                </li>
              )
            })}

            <li className="mt-1 flex items-center justify-between gap-3 px-1">
              <button
                type="button"
                onClick={() => setPlaying((p) => !p)}
                className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold text-ink/60 transition-colors hover:border-brand-200 hover:text-ink"
              >
                {playing ? (
                  <>
                    <Pause className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                    Otomatik geçişi durdur
                  </>
                ) : (
                  <>
                    <Play className="h-3 w-3" strokeWidth={2.5} aria-hidden="true" />
                    Otomatik geçişi başlat
                  </>
                )}
              </button>
              <span className="text-[11px] font-semibold tabular text-ink/55">
                {index + 1} / {total}
              </span>
            </li>
          </ol>

          {/* Ekran */}
          <Reveal from="scale" className="relative">
            <div
              className="absolute -inset-6 rounded-[3rem]"
              style={{
                background:
                  'radial-gradient(circle at 50% 35%, rgb(var(--c-aurora-violet) / 0.3) 0%, rgb(var(--c-aurora-cyan) / 0.16) 45%, transparent 70%)',
                filter: 'blur(40px)',
              }}
              aria-hidden="true"
            />
            <div key={step.key} className="animate-fade-in-up relative mx-auto w-full max-w-[26rem] lg:max-w-none">
              <Screen />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
