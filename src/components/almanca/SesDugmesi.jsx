import { useEffect, useRef, useState } from 'react'
import { Gauge, Volume2, VolumeX } from 'lucide-react'
import { cn } from '../../lib/cn'
import { seslendir, sesiDurdur } from '../../lib/almanca/ses'

/**
 * SesDugmesi — bir Almanca metni cihazın sesiyle okutur.
 *
 * DÜRÜSTLÜK: cihazda Almanca ses yoksa bu düğme HİÇ görünmez
 * (`hazir={false}` geldiğinde `null` döner). Çalışmayan bir oynatıcı
 * göstermek, öğrenciye sesin var olduğunu düşündürür ve dinleme
 * alıştırmasını sessizce çözümsüz bırakır.
 *
 * Otomatik oynatma yok: iOS Safari sesi ancak kullanıcının dokunmasıyla
 * başlayan bir olayda çalar, ayrıca ders ortasında beklenmedik ses
 * rahatsız edicidir.
 */
export default function SesDugmesi({
  metin,
  hazir = true,
  bolge = 'de',
  yavasSecenegi = false,
  /* Ana düğme doğrudan yavaş okusun mu? Dinleme bloğundaki "Yavaş dinle"
     düğmesi bunu kullanır; etiketin söylediği ile sesin yaptığı aynı olur. */
  yavasBasla = false,
  boyut = 'md',
  etiket,
  className,
}) {
  const [caliyor, setCaliyor] = useState(false)
  const [yavas, setYavas] = useState(false)
  const sokuldu = useRef(false)

  useEffect(() => () => {
    sokuldu.current = true
    sesiDurdur()
  }, [])

  if (!hazir || !metin) return null

  const oynat = (hizli) => {
    if (caliyor) {
      sesiDurdur()
      setCaliyor(false)
      return
    }
    setCaliyor(true)
    const sonuc = seslendir(metin, {
      bolge,
      hiz: hizli ? 1 : 0.62,
      bitince: () => { if (!sokuldu.current) setCaliyor(false) },
    })
    if (!sonuc.basarili) setCaliyor(false)
  }

  const olculer = boyut === 'sm'
    ? 'h-9 min-w-9 px-2.5 text-xs'
    : 'h-11 min-w-11 px-3.5 text-sm'

  return (
    <span className={cn('inline-flex items-center gap-1.5', className)}>
      <button
        type="button"
        onClick={() => oynat(!yavasBasla)}
        aria-label={etiket ?? `Dinle: ${metin}`}
        className={cn(
          'focus-ring inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition',
          'bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15',
          'hover:bg-brand-500/[0.16] active:scale-[0.98]',
          caliyor && 'bg-brand-500/20',
          olculer
        )}
      >
        {caliyor
          ? <VolumeX className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
          : <Volume2 className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />}
        {etiket && <span>{etiket}</span>}
      </button>

      {yavasSecenegi && (
        <button
          type="button"
          onClick={() => { setYavas(true); oynat(false) }}
          aria-label={`Yavaş dinle: ${metin}`}
          title="Yavaş oku"
          className={cn(
            'focus-ring inline-flex items-center justify-center rounded-btn transition',
            'bg-ink/[0.05] text-ink/65 ring-1 ring-inset ring-ink/[0.06] hover:bg-ink/[0.08]',
            yavas && caliyor && 'bg-ink/[0.1]',
            boyut === 'sm' ? 'h-9 w-9' : 'h-11 w-11'
          )}
        >
          <Gauge className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
        </button>
      )}
    </span>
  )
}

/**
 * SesUyarisi — cihazda Almanca ses bulunamadığında gösterilen açıklama.
 * Sorunu, sonucunu ve çözümünü Türkçe söyler; sessizce geçilmez.
 */
export function SesUyarisi({ durum, className }) {
  if (!durum || durum.hazir) return null
  return (
    <div
      className={cn(
        'rounded-card bg-warning-500/[0.08] px-4 py-3 text-sm leading-relaxed text-ink/75',
        'ring-1 ring-inset ring-warning-500/20',
        className
      )}
      role="status"
    >
      <p className="font-semibold text-ink">Bu cihazda Almanca ses yok</p>
      <p className="mt-1">{durum.mesaj}</p>
      {durum.cozum && <p className="mt-1 text-ink/60">{durum.cozum}</p>}
    </div>
  )
}
