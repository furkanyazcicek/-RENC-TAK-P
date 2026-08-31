import { Link } from 'react-router-dom'
import { ChevronRight, DoorOpen, Pencil, Video } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Avatar, Button } from '../ui'
import LessonStatusBadge from './LessonStatusBadge'
import { canJoin, isClosedStatus } from '../../lib/liveLesson/status'
import { durationMinutes, formatLessonTime } from '../../lib/liveLesson/time'

/**
 * Ders listesinin tek satırı.
 *
 * TASARIM KARARI — her ders KART DEĞİL
 * ------------------------------------
 * Günde üç dersi üç ayrı gölgeli karta koymak "kart koleksiyonu"
 * görünümü üretiyor ve hiçbiri öne çıkmıyor. Bunun yerine gün başlığı
 * altında ayraçla ayrılmış satırlar var. Tarama çapası SAATTİR: sol
 * rayda, tabular rakamla, tek hizada. Öğretmen ekrana baktığında önce
 * "kaçta" sorusunu yanıtlıyor.
 */
export default function LessonRow({ session, role, counterpartName, onEdit, compact = false }) {
  const joinable = canJoin(session, role)
  const minutes = durationMinutes(session.scheduled_start, session.scheduled_end)
  const isLive = session.status === 'live' || session.status === 'lobby_open'

  return (
    <div
      className={cn(
        'group relative flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-5',
        compact && 'py-3'
      )}
    >
      {/* Saat rayı */}
      <div className="flex shrink-0 items-baseline gap-2 sm:w-[5.5rem] sm:flex-col sm:items-start sm:gap-0.5">
        <span className="font-display text-lg font-bold tabular-nums leading-none text-ink">
          {formatLessonTime(session.scheduled_start)}
        </span>
        <span className="text-xs tabular-nums text-ink/55">{minutes} dk</span>
      </div>

      {/* Ders kimliği */}
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h3 className="min-w-0 font-display text-base font-semibold text-ink">{session.title}</h3>
          <LessonStatusBadge status={session.status} size="sm" />
          {isLive && (
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-success-500 animate-pulse-soft"
              aria-hidden="true"
            />
          )}
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink/60">
          {counterpartName && (
            <span className="inline-flex items-center gap-1.5">
              <Avatar name={counterpartName} size="xs" />
              <span className="truncate">{counterpartName}</span>
            </span>
          )}
          {session.subject && <span aria-hidden="true">·</span>}
          {session.subject && <span className="truncate">{session.subject}</span>}
          {session.topic && <span aria-hidden="true">·</span>}
          {session.topic && <span className="truncate">{session.topic}</span>}
        </div>

        {session.status === 'cancelled' && session.cancel_reason && (
          <p className="mt-1.5 text-sm text-ink/55">Gerekçe: {session.cancel_reason}</p>
        )}
      </div>

      {/* Eylemler */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Üç ayrı durum, üç ayrı eylem:
            · katılınabiliyor        → odaya gir
            · henüz açılmadı         → bekleme odasına bak (öğrenci burada
              "Özet" görmemeli; ders daha yapılmadı ki özeti olsun)
            · ders kapandı           → özet */}
        {joinable ? (
          <Button
            as={Link}
            to={`/canli-ders/${session.id}`}
            size="sm"
            variant={isLive ? 'primary' : 'secondary'}
            icon={Video}
          >
            {isLive ? 'Derse Katıl' : 'Odayı Aç'}
          </Button>
        ) : isClosedStatus(session.status) ? (
          <Button as={Link} to={`/canli-ders/${session.id}/ozet`} size="sm" variant="ghost" iconRight={ChevronRight}>
            Özet
          </Button>
        ) : (
          <Button as={Link} to={`/canli-ders/${session.id}`} size="sm" variant="ghost" icon={DoorOpen}>
            Bekleme odası
          </Button>
        )}
        {onEdit && session.status === 'scheduled' && (
          <Button size="sm" variant="ghost" icon={Pencil} onClick={() => onEdit(session)}>
            <span className="sr-only sm:not-sr-only">Düzenle</span>
          </Button>
        )}
      </div>
    </div>
  )
}
