import { Info } from 'lucide-react'
import { cn } from '../../lib/cn'
import { formatMinutes } from '../../lib/insights'

/**
 * SourceNote — "bu toplamın ne kadarı denemelerden geldi" satırı.
 *
 * NEDEN VAR
 * Deneme soruları ve süreleri günlük istatistiklere katılıyor. Ama bir
 * öğrenci aynı denemeyi hem Denemeler sekmesine girip hem de "TYT
 * denemesi çözdüm" diye günlük kayıt açmış olabilir — o zaman sayı şişer.
 * Bunu otomatik ayıklamak yanlış tahminlere yol açardı; onun yerine
 * katkıyı görünür kılıyoruz ki şişme olursa kullanıcı fark etsin.
 *
 * Süreler girilmemişse sınav türünün standart süresinden tahmin edilir
 * (bkz. lib/examDuration.js); bu durumda "~" ile işaretlenir — tahmin,
 * ölçümmüş gibi sunulmamalı.
 *
 * Deneme katkısı yoksa hiç çizilmez: boş bir bilgi satırı gürültüdür.
 */
export default function SourceNote({ split, className }) {
  if (!split) return null

  const { exams, examCount, hasEstimatedDuration } = split
  if (!examCount || (exams.minutes === 0 && exams.solved === 0)) return null

  const tilde = hasEstimatedDuration ? '~' : ''
  const parts = []
  if (exams.minutes > 0) parts.push(`${tilde}${formatMinutes(exams.minutes)}`)
  if (exams.solved > 0) parts.push(`${exams.solved} soru`)

  return (
    <p
      className={cn(
        'flex items-start gap-2 rounded-card bg-surface-sunken px-3 py-2 text-xs leading-relaxed text-ink/60',
        className
      )}
    >
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" strokeWidth={2.2} aria-hidden="true" />
      <span>
        Yukarıdaki toplamların <span className="font-semibold text-ink/75">{parts.join(' ve ')}</span>
        {"'"}sı denemelerden geliyor.
        {hasEstimatedDuration && (
          <>
            {' '}
            Süresi girilmemiş denemeler standart sınav süresinden{' '}
            <span className="font-semibold text-ink/75">tahmin edildi</span>.
          </>
        )}
      </span>
    </p>
  )
}
