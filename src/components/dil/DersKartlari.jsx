import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, RotateCcw } from 'lucide-react'
import { cn } from '../../lib/cn'
import { Badge } from '../ui'

/**
 * DERS KARTLARI — dersin sonunda çıkan çevrilebilir kelime kartları.
 *
 * NEDEN BURADA: öğrenci dersi bitirince kelimeleri yalnız bir liste
 * olarak görüyordu; liste ezberletmez. Kart çevirmek geri getirme
 * (retrieval) işidir ve öğrenmeyi listeye bakmaktan çok daha fazla
 * pekiştirir. Bu yüzden ders bitiminde kelimeler kart hâlinde çıkar.
 *
 * DİL BAĞIMSIZ: kelime kayıtlarının alan adları dile göre değişir
 * (ornekler içinde en / de / fr / es anahtarı). Bileşen anahtarı ismiyle
 * aramaz; "tr" dışındaki ilk anahtarı hedef dil sayar. Böylece dört dil
 * de aynı bileşeni kullanır ve tek yerden bakım görür.
 */

/** Bir örnek kaydından hedef dildeki cümleyi çıkarır. */
function hedefCumle(ornek) {
  if (!ornek || typeof ornek !== 'object') return ''
  const giris = Object.entries(ornek).find(([anahtar]) => anahtar !== 'tr')
  return giris ? giris[1] : ''
}

/** Tek bir kelime kartı — tıklayınca çevrilir. */
function KelimeKarti({ kelime, dilKodu, SesDugmesi, sesHazir }) {
  const [cevrildi, setCevrildi] = useState(false)
  const onYuz = kelime.artikel ? `${kelime.artikel} ${kelime.kelime}` : kelime.kelime
  const ornek = kelime.ornekler?.[0]
  const ornekMetin = hedefCumle(ornek)

  return (
    <button
      type="button"
      onClick={() => setCevrildi((c) => !c)}
      aria-label={cevrildi ? `${onYuz} kartının ön yüzünü göster` : `${onYuz} kartını çevir`}
      className={cn(
        'focus-ring flex min-h-[7.5rem] w-full flex-col rounded-card border p-4 text-left transition',
        cevrildi
          ? 'border-brand-500/25 bg-brand-500/[0.04]'
          : 'border-line bg-surface hover:border-brand-500/25 hover:shadow-card-hover'
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="font-display text-lg font-bold leading-tight text-ink" lang={dilKodu}>
          {onYuz}
        </p>
        {SesDugmesi && (
          <span onClick={(o) => o.stopPropagation()} role="presentation" className="shrink-0">
            <SesDugmesi metin={kelime.kelime} hazir={sesHazir} boyut="sm" />
          </span>
        )}
      </div>

      {kelime.ipa && !cevrildi && (
        <p className="mt-1 text-sm text-ink/45">{kelime.ipa}</p>
      )}

      {!cevrildi ? (
        <p className="mt-auto pt-3 text-sm text-ink/45">Anlamını hatırla, sonra çevir.</p>
      ) : (
        <div className="mt-2 border-t border-line pt-2.5">
          <p className="font-display text-base font-bold leading-snug text-ink">
            {kelime.turkceDestek}
          </p>
          {ornekMetin && (
            <>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink" lang={dilKodu}>
                {ornekMetin}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">{ornek?.tr}</p>
            </>
          )}
        </div>
      )}
    </button>
  )
}

/**
 * Ders sonundaki kart bölümü.
 *
 * @param {Array}  kelimeler  Dersin kelime kayıtları.
 * @param {Object} deste      Bu dersin konusuyla ilişkili dil kartı destesi (varsa).
 * @param {string} kartlarYolu Deste ekranının yolu (ör. "/ingilizce/kartlar").
 * @param {string} dilKodu    lang niteliği için dil kodu (en / de / fr / es).
 */
export default function DersKartlari({
  kelimeler = [],
  deste = null,
  kartlarYolu,
  dilKodu = 'en',
  SesDugmesi = null,
  sesHazir = false,
}) {
  const [hepsiKapali, setHepsiKapali] = useState(0)
  if (!kelimeler.length && !deste) return null

  return (
    <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="font-display text-base font-bold text-ink">Bu dersin kartları</h2>
          <p className="mt-1 text-sm leading-relaxed text-ink/60">
            {kelimeler.length > 0
              ? `Bu ${kelimeler.length} kelime tekrar sistemine eklendi. Karta dokun, önce anlamını hatırlamaya çalış.`
              : 'Bu konuyla ilgili kart destesini aşağıdan açabilirsin.'}
          </p>
        </div>
        {kelimeler.length > 0 && (
          <button
            type="button"
            onClick={() => setHepsiKapali((n) => n + 1)}
            className="focus-ring inline-flex shrink-0 items-center gap-1.5 rounded-input px-2.5 py-1.5 text-sm font-medium text-ink/60 transition hover:bg-surface hover:text-ink"
          >
            <RotateCcw className="h-3.5 w-3.5" strokeWidth={2.2} aria-hidden="true" />
            Hepsini kapat
          </button>
        )}
      </div>

      {kelimeler.length > 0 && (
        <div key={hepsiKapali} className="mt-4 grid gap-3 sm:grid-cols-2">
          {kelimeler.map((k) => (
            <KelimeKarti
              key={k.id}
              kelime={k}
              dilKodu={dilKodu}
              SesDugmesi={SesDugmesi}
              sesHazir={sesHazir}
            />
          ))}
        </div>
      )}

      {deste && (
        <Link
          to={`${kartlarYolu}?deste=${deste.id}`}
          className="focus-ring mt-4 flex items-center justify-between gap-3 rounded-card border border-line bg-surface p-4 transition hover:border-brand-500/25 hover:shadow-card-hover"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-input bg-brand-500/10 text-xl" aria-hidden="true">
              {deste.simge ?? <Layers className="h-5 w-5 text-brand-700" strokeWidth={2.2} />}
            </span>
            <div className="min-w-0">
              <p className="font-display text-[0.95rem] font-bold text-ink">
                Bu konunun kart destesi: {deste.ad}
              </p>
              <p className="mt-0.5 text-sm text-ink/60">
                {deste.kartlar.length} kart · ilgi alanına göre hazırlandı
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Badge tone="neutral" size="sm">{deste.seviye}</Badge>
            <ArrowRight className="h-4 w-4 text-ink/40" strokeWidth={2.2} aria-hidden="true" />
          </div>
        </Link>
      )}
    </section>
  )
}
