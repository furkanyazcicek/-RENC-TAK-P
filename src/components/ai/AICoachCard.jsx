import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, MessageCircleQuestion, Sparkles, Target } from 'lucide-react'
import { getBriefing, QUICK_PROMPTS } from '../../lib/aiCoach'
import { formatMinutes } from '../../lib/insights'
import { Button, Card, ProgressBar, Skeleton } from '../ui'
import { cn } from '../../lib/cn'

/**
 * AICoachCard — öğrenci panelindeki AI Koç bölümü.
 *
 * Kart hiyerarşisinde `highlight` varyantı kullanılır (beyaz yüzey +
 * Aurora kenarlık): sayfadaki tek dolu gradient zaten DashboardHero'da,
 * bu kart onunla yarışmadan öne çıkar. Bkz. DESIGN_SYSTEM.md §7.
 *
 * VERİ: `/api/ai-coach/briefing` — bu uç nokta OpenAI'a gitmez, tamamen
 * öğrencinin kendi kayıtlarından hesaplanır. Yani panel açılışı ücretsiz
 * ve anlıktır; model yalnızca sohbete girildiğinde çalışır.
 */

const ACTIVITY_TONE = {
  'soru çözümü': 'text-brand-600',
  'yanlış analizi': 'text-accent-600',
  'konu tekrarı': 'text-info-600',
  deneme: 'text-aqua-700',
  ödev: 'text-warning-700',
}

export default function AICoachCard() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [state, setState] = useState('loading') // loading | ready | error

  useEffect(() => {
    let cancelled = false
    getBriefing()
      .then((result) => {
        if (cancelled) return
        setData(result)
        setState('ready')
      })
      .catch(() => {
        // Kart panelin yardımcı bir parçası; hata durumunda sayfayı
        // bozmak yerine sessizce sade bir davete düşer.
        if (!cancelled) setState('error')
      })
    return () => {
      cancelled = true
    }
  }, [])

  function ask(prompt) {
    navigate('/ai-koc', { state: { prompt } })
  }

  if (state === 'loading') {
    return (
      <Card variant="highlight" padding="lg" className="flex flex-col gap-4">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-20 w-full" />
      </Card>
    )
  }

  if (state === 'error') {
    return (
      <Card variant="highlight" padding="lg" className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-700 text-white shadow-xs">
            <Sparkles className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display font-bold text-ink">AI Koç</p>
            <p className="text-sm text-ink/60">Verilerine göre çalışma önerisi al.</p>
          </div>
        </div>
        <Button icon={ArrowRight} onClick={() => navigate('/ai-koc')}>
          AI Koç’u aç
        </Button>
      </Card>
    )
  }

  const { greeting, firstName, progress, suggestion, stats, hasData } = data

  return (
    <Card variant="highlight" glow padding="none" className="overflow-hidden">
      {/* ---------- Başlık ---------- */}
      <div className="flex items-start justify-between gap-3 px-5 pt-5 sm:px-6 sm:pt-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-700 text-white shadow-xs">
            <Sparkles className="h-5 w-5" strokeWidth={2.2} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-brand-600">AI Koç</p>
            <h2 className="truncate font-display text-lg font-extrabold text-ink">
              {greeting}
              {firstName ? ` ${firstName}` : ''}
            </h2>
          </div>
        </div>

        {stats.streak >= 2 && (
          <span className="shrink-0 rounded-full bg-brand-500/10 px-2.5 py-1 text-2xs font-bold text-brand-700 ring-1 ring-inset ring-brand-500/15">
            {stats.streak} gün seri
          </span>
        )}
      </div>

      {/* ---------- İlerleme ---------- */}
      <div className="px-5 pt-4 sm:px-6">
        {progress.pct != null ? (
          <>
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm text-ink/70">
                Bugün <strong className="font-semibold text-ink">{formatMinutes(progress.doneMinutes)}</strong>{' '}
                çalıştın — {progress.label}{' '}
                <strong className="font-semibold text-ink">%{progress.pct}</strong>’i tamamlandı.
              </p>
            </div>
            <ProgressBar value={progress.pct} tone="aurora" className="mt-2.5" />
          </>
        ) : (
          <p className="text-sm text-ink/70">
            {progress.doneMinutes > 0
              ? `Bugün şu ana kadar ${formatMinutes(progress.doneMinutes)} çalıştın.`
              : 'Bugün henüz bir çalışma kaydın yok.'}
          </p>
        )}
      </div>

      {/* ---------- Bugünün önerisi ---------- */}
      <div className="mt-5 px-5 sm:px-6">
        <div className="rounded-card border border-line bg-surface-muted p-4">
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
            <p className="font-display text-sm font-bold text-ink">{suggestion.title}</p>
          </div>

          {/* Öneriyi hangi veriden çıkardığımız — öneri kara kutu olmasın */}
          {suggestion.basis && (
            <p className="mt-1.5 text-xs leading-relaxed text-ink/60">{suggestion.basis}</p>
          )}

          {suggestion.items.length > 0 && (
            <ul className="mt-3 flex flex-col gap-2">
              {suggestion.items.map((item, i) => (
                <li
                  key={`${item.subject}-${i}`}
                  className="flex items-center justify-between gap-3 rounded-input border border-line bg-surface px-3 py-2.5"
                >
                  <span className="min-w-0 text-sm">
                    <span className="font-semibold text-ink">{item.subject}</span>
                    {item.topic && <span className="text-ink/70"> · {item.topic}</span>}
                    {item.activityLabel && (
                      <span
                        className={cn(
                          'block text-2xs font-semibold',
                          ACTIVITY_TONE[item.activityLabel] ?? 'text-ink/55'
                        )}
                      >
                        {item.activityLabel}
                      </span>
                    )}
                  </span>
                  {item.minutes != null && (
                    <span className="shrink-0 font-display text-sm font-bold tabular text-brand-600">
                      {item.minutes} dk
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}

          {suggestion.hint && (
            <p className="mt-3 text-xs leading-relaxed text-ink/60">{suggestion.hint}</p>
          )}

          <Button
            size="sm"
            icon={ArrowRight}
            className="mt-3.5"
            onClick={() =>
              ask(
                suggestion.kind === 'plan'
                  ? 'Bugünkü planımı gözden geçir. Eksik veya fazla bir şey var mı?'
                  : hasData
                    ? 'Bugün ne çalışmalıyım? Verilerime göre bir plan hazırla.'
                    : 'AI Koç nasıl çalışıyor? Nereden başlamalıyım?'
              )
            }
          >
            {suggestion.kind === 'plan' ? 'Planı gözden geçir' : 'Plan oluştur'}
          </Button>
        </div>
      </div>

      {/* ---------- AI Koç'a sor ---------- */}
      <div className="mt-5 border-t border-line bg-surface-muted/60 px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2">
          <MessageCircleQuestion
            className="h-4 w-4 shrink-0 text-ink/55"
            strokeWidth={2}
            aria-hidden="true"
          />
          <p className="text-2xs font-bold uppercase tracking-wider text-ink/55">AI Koç’a sor</p>
        </div>

        <div className="mt-2.5 flex flex-wrap gap-2">
          {QUICK_PROMPTS.slice(0, 4).map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={() => ask(item.prompt)}
              className="focus-ring rounded-full border border-line bg-surface px-3 py-1.5 text-xs
                         font-medium text-ink/75 transition-all duration-200 ease-smooth
                         hover:border-line-strong hover:bg-surface-muted hover:text-brand-800"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </Card>
  )
}
