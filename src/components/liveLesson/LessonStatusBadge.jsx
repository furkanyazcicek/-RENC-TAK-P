import { Badge } from '../ui'
import { statusInfo } from '../../lib/liveLesson/status'

/**
 * Ders durumu rozeti.
 *
 * Durum YALNIZ RENKLE anlatılmaz: her rozet simge + Türkçe metin taşır.
 * Renk körü bir kullanıcı "yeşil = devam ediyor" eşlemesini yapamaz ama
 * "Devam ediyor" yazısını okur.
 */
export default function LessonStatusBadge({ status, size = 'md', className }) {
  const info = statusInfo(status)
  return (
    <Badge tone={info.tone} size={size} icon={info.Icon} className={className}>
      {info.label}
    </Badge>
  )
}
