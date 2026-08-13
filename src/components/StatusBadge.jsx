import { Badge } from './ui'

/** Soru durumlarının rengini tek yerde tanımlar. */
const STATUS_TONES = {
  İnceleniyor: 'warning',
  'Derste Çözülecek': 'brand',
  Çözüldü: 'success',
  Yapılıyor: 'info',
  Tamamlandı: 'success',
}

export default function StatusBadge({ status, size = 'md', className }) {
  return (
    <Badge tone={STATUS_TONES[status] ?? 'neutral'} size={size} dot className={className}>
      {status}
    </Badge>
  )
}
