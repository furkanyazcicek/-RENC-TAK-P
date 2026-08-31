import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CalendarPlus, ExternalLink, FileText, Timer, Video } from 'lucide-react'
import { Avatar, Button } from '../ui'
import LessonStatusBadge from './LessonStatusBadge'
import { canJoin } from '../../lib/liveLesson/status'
import {
  countdownLabel,
  durationMinutes,
  formatLessonDateTime,
  relativeDayLabel,
  formatLessonRange,
} from '../../lib/liveLesson/time'

/**
 * "Sıradaki Ders" — öğretmen panelinin ve öğrenci anasayfasının en üstünde
 * duran tek eylem bloğu.
 *
 * TASARIM KARARI
 * --------------
 * Bu, sayfadaki tek `highlight` yüzeydir (beyaz zemin + gradient kenarlık).
 * Dolu gradient KULLANILMADI: panelde zaten bir `DashboardHero` var ve
 * sayfa başına en fazla bir dolu gradient kuralı geçerli (DESIGN_SYSTEM §3).
 * Öne çıkma buradaki kenarlık, ölçek ve boşlukla kuruluyor.
 *
 * Geri sayım dakikada bir güncellenir — saniyede bir güncellemek
 * öğretmenin ekranında sürekli oynayan bir sayı bırakırdı ve
 * `tabular-nums` olmadan yerleşimi zıplatırdı.
 */
export default function NextLessonPanel({
  session,
  role,
  counterpartName,
  onAddMaterial,
  studentProfileHref,
  createHref,
}) {
  const [, setTick] = useState(0)

  useEffect(() => {
    if (!session) return undefined
    const timer = window.setInterval(() => setTick((t) => t + 1), 60_000)
    return () => window.clearInterval(timer)
  }, [session])

  if (!session) {
    return (
      <section className="card border-aurora overflow-hidden p-5 sm:p-6">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">Canlı ders</p>
        <h2 className="mt-1.5 font-display text-xl font-bold text-ink">
          {role === 'teacher' ? 'Planlanmış dersin yok' : 'Yaklaşan dersin yok'}
        </h2>
        <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-ink/60">
          {role === 'teacher'
            ? 'Bir öğrencinle ders planladığında burada saati, konusu ve katılım düğmesiyle birlikte görünür.'
            : 'Öğretmenin ders planladığında burada görürsün ve tek dokunuşla katılırsın.'}
        </p>
        {role === 'teacher' && createHref && (
          <Button as={Link} to={createHref} icon={CalendarPlus} className="mt-5">
            Ders Planla
          </Button>
        )}
      </section>
    )
  }

  const joinable = canJoin(session, role)
  const countdown = countdownLabel(session.scheduled_start)
  const minutes = durationMinutes(session.scheduled_start, session.scheduled_end)
  const isLive = session.status === 'live'

  return (
    <section className="card border-aurora relative overflow-hidden p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">Sıradaki ders</p>
        <LessonStatusBadge status={session.status} size="sm" />
      </div>

      <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0">
          <h2 className="font-display text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
            {session.title}
          </h2>

          <div className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-ink/65">
            {counterpartName && (
              <span className="inline-flex items-center gap-2">
                <Avatar name={counterpartName} size="sm" />
                <span className="font-medium text-ink/80">{counterpartName}</span>
              </span>
            )}
            {session.subject && <span aria-hidden="true">·</span>}
            {session.subject && <span>{session.subject}</span>}
            {session.topic && <span aria-hidden="true">·</span>}
            {session.topic && <span>{session.topic}</span>}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
            <span className="inline-flex items-center gap-1.5 text-ink/70">
              <Timer className="h-4 w-4 text-ink/45" strokeWidth={2} aria-hidden="true" />
              <span className="tabular-nums">
                {relativeDayLabel(session.scheduled_start)}{' '}
                {formatLessonRange(session.scheduled_start, session.scheduled_end)}
              </span>
              <span className="text-ink/45">· {minutes} dk</span>
            </span>
            {!isLive && countdown && (
              <span className="font-semibold text-brand-700" aria-live="polite">
                {countdown}
              </span>
            )}
          </div>

          {session.prep_note && (
            <p className="mt-3 max-w-prose rounded-input bg-surface-muted px-3.5 py-2.5 text-sm leading-relaxed text-ink/70">
              <span className="font-semibold text-ink/80">Hazırlık: </span>
              {session.prep_note}
            </p>
          )}
        </div>

        <div className="flex shrink-0 flex-wrap items-center gap-2">
          {joinable && (
            <Button as={Link} to={`/canli-ders/${session.id}`} size="lg" icon={Video}>
              {role === 'teacher' ? 'Ders Stüdyosunu Aç' : 'Derse Katıl'}
            </Button>
          )}
          {role === 'teacher' && onAddMaterial && (
            <Button variant="secondary" icon={FileText} onClick={() => onAddMaterial(session)}>
              Materyal Ekle
            </Button>
          )}
          {role === 'teacher' && studentProfileHref && (
            <Button as={Link} to={studentProfileHref} variant="ghost" icon={ExternalLink}>
              Öğrenci Profili
            </Button>
          )}
        </div>
      </div>

      {/* Ekran okuyucu için tam tarih — görselde kısaltılmış hâli var */}
      <span className="sr-only">{formatLessonDateTime(session.scheduled_start)}</span>
    </section>
  )
}
