import { useState } from 'react'
import { AlertTriangle, BookOpen, Eye, EyeOff, Headphones, Lightbulb, Scale, Volume2 } from 'lucide-react'
import { cn } from '../../lib/cn'
import SesDugmesi from './SesDugmesi'

/**
 * DersBloklari — bir dersin öğretim bölümünü basar.
 *
 * TASARIM: her blok karta konmaz. Kart, gerçekten ayrı bir zemin gerektiren
 * bloklar içindir (tuzak, karşılaştırma, okuma, dinleme). Düz anlatım ve
 * örnekler kartsız akar; böylece ders "kart koleksiyonu" değil, okunabilir
 * bir metin gibi durur ve öğrenme içeriği en güçlü öğe olur.
 *
 * İspanyolca metinlere `lang="es"` verilir: ekran okuyucular Türkçe
 * seslendirmeyle İspanyolca cümle okumaz.
 */

export default function DersBloklari({ bloklar = [], sesHazir = false }) {
  return (
    <div className="grid gap-7">
      {bloklar.map((blok, i) => (
        <Blok key={i} blok={blok} sesHazir={sesHazir} />
      ))}
    </div>
  )
}

function Blok({ blok, sesHazir }) {
  switch (blok.tur) {
    case 'anlatim':
      return (
        <section>
          {blok.baslik && (
            <h3 className="font-display text-lg font-bold leading-snug text-ink">{blok.baslik}</h3>
          )}
          {blok.metin && (
            <p className="mt-2 text-[0.98rem] leading-[1.75] text-ink/75">{blok.metin}</p>
          )}
          {blok.maddeler?.length > 0 && (
            <ul className="mt-3 grid gap-2">
              {blok.maddeler.map((m, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink/80">
                  <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/50" aria-hidden="true" />
                  <span lang={/[a-z]/i.test(m) && !/[çğıöşüÇĞİÖŞÜ]/.test(m) ? 'en' : undefined}>{m}</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )

    case 'ornek':
      return (
        <section>
          {blok.baslik && (
            <h3 className="mb-3 font-display text-lg font-bold leading-snug text-ink">{blok.baslik}</h3>
          )}
          <div className="grid gap-2.5">
            {blok.satirlar.map((s, i) => (
              <div
                key={i}
                className="flex flex-wrap items-start gap-x-3 gap-y-1.5 rounded-input bg-surface-muted px-4 py-3"
              >
                <p className="min-w-0 flex-1 text-[0.98rem] font-medium leading-relaxed text-ink" lang="es">
                  {s.es}
                </p>
                <SesDugmesi metin={s.es} hazir={sesHazir} boyut="sm" />
                {s.tr && <p className="w-full text-sm leading-relaxed text-ink/55">{s.tr}</p>}
                {s.not && (
                  <p className="w-full rounded-md bg-info-500/[0.07] px-3 py-2 text-xs leading-relaxed text-ink/70">
                    {s.not}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )

    case 'kalip':
      return (
        <section>
          <h3 className="mb-3 font-display text-lg font-bold leading-snug text-ink">{blok.baslik}</h3>
          <div className="grid gap-2.5">
            {blok.kaliplar.map((k, i) => (
              <div key={i} className="rounded-input bg-aqua-500/[0.06] px-4 py-3 ring-1 ring-inset ring-aqua-500/12">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="min-w-0 flex-1 font-display text-[1.02rem] font-semibold text-ink" lang="es">
                    {k.es}
                  </p>
                  <SesDugmesi metin={k.es} hazir={sesHazir} boyut="sm" />
                </div>
                <p className="mt-1 text-sm text-ink/60">{k.kullanim}</p>
                {k.ornek && (
                  <p className="mt-1.5 text-sm italic leading-relaxed text-ink/70" lang="es">{k.ornek}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )

    case 'tablo':
      return (
        <section>
          <h3 className="mb-3 font-display text-lg font-bold leading-snug text-ink">{blok.baslik}</h3>
          <div className="min-w-0 overflow-x-auto rounded-card ring-1 ring-inset ring-line">
            <table className="w-full min-w-[30rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-surface-sunken">
                  {blok.basliklar.map((b) => (
                    <th key={b} className="px-4 py-2.5 text-2xs font-bold uppercase tracking-[0.1em] text-ink/55">
                      {b}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {blok.satirlar.map((satir, i) => (
                  <tr key={i} className="border-t border-line">
                    {satir.map((hucre, j) => (
                      <td
                        key={j}
                        className={cn(
                          'px-4 py-2.5 leading-relaxed',
                          j === 0 ? 'font-semibold text-ink' : 'text-ink/75'
                        )}
                        lang={/^[\x00-\x7F\s'’.…/()+-]+$/.test(String(hucre)) ? 'en' : undefined}
                      >
                        {hucre}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )

    case 'karsilastirma':
      return (
        <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <Scale className="h-4 w-4 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
            {blok.baslik}
          </h3>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div className="rounded-input bg-success-500/[0.08] px-4 py-3 ring-1 ring-inset ring-success-500/18">
              <p className="text-2xs font-bold uppercase tracking-[0.12em] text-success-700">Doğal</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-ink" lang="es">{blok.dogal}</p>
            </div>
            <div className="rounded-input bg-ink/[0.04] px-4 py-3 ring-1 ring-inset ring-ink/[0.06]">
              <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">Yapay / yanlış</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/65" lang="es">{blok.yapay}</p>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-ink/70">{blok.aciklama}</p>
        </section>
      )

    case 'tuzak':
      return (
        <section className="rounded-card bg-warning-500/[0.07] p-5 ring-1 ring-inset ring-warning-500/20">
          <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <AlertTriangle className="h-4 w-4 text-warning-700" strokeWidth={2.2} aria-hidden="true" />
            {blok.baslik}
          </h3>
          <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink/70">
            <span className="font-semibold text-danger-700">Yanlış: </span>
            <span lang="es">{blok.yanlis}</span>
          </p>
          <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">
            <span className="font-semibold text-success-700">Doğru: </span>
            <span lang="es">{blok.dogru}</span>
          </p>
          <p className="mt-2.5 text-sm leading-relaxed text-ink/70">{blok.neden}</p>
        </section>
      )

    case 'telaffuz':
      return (
        <section>
          <h3 className="mb-3 flex items-center gap-2 font-display text-lg font-bold leading-snug text-ink">
            <Volume2 className="h-4.5 w-4.5 text-accent-600" strokeWidth={2.2} aria-hidden="true" />
            {blok.baslik}
          </h3>
          <div className="grid gap-3">
            {blok.sesler.map((ses, i) => (
              <div key={i} className="rounded-input bg-accent-500/[0.05] px-4 py-3.5 ring-1 ring-inset ring-accent-500/12">
                <p className="font-display text-base font-bold text-accent-700">{ses.ipa}</p>
                <p className="mt-1 text-sm leading-relaxed text-ink/75">{ses.aciklama}</p>
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  {ses.kelimeler.map((k) => (
                    <span key={k} className="inline-flex items-center gap-1.5">
                      <span className="rounded-md bg-surface px-2.5 py-1 text-sm font-medium text-ink ring-1 ring-inset ring-line" lang="es">
                        {k}
                      </span>
                      <SesDugmesi metin={k} hazir={sesHazir} boyut="sm" />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )

    case 'okuma':
      return <OkumaBlogu blok={blok} sesHazir={sesHazir} />

    case 'dinleme':
      return <DinlemeBlogu blok={blok} sesHazir={sesHazir} />

    case 'ipucu':
      return (
        <section className="flex items-start gap-3 rounded-card bg-info-500/[0.06] px-4 py-3.5 ring-1 ring-inset ring-info-500/15">
          <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-info-700" strokeWidth={2.3} aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink/75">{blok.metin}</p>
        </section>
      )

    default:
      return null
  }
}

/* ------------------------------------------------------------------ */

function OkumaBlogu({ blok, sesHazir }) {
  const [sozlukAcik, setSozlukAcik] = useState(false)
  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-display text-lg font-bold leading-snug text-ink">
          <BookOpen className="h-4.5 w-4.5 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
          {blok.baslik}
        </h3>
        <SesDugmesi metin={blok.metin} hazir={sesHazir} boyut="sm" etiket="Okut" />
      </div>
      <p className="mt-3 whitespace-pre-line text-[1.02rem] leading-[1.8] text-ink" lang="es">
        {blok.metin}
      </p>
      {blok.sozluk?.length > 0 && (
        <div className="mt-4 border-t border-line pt-3">
          <button
            type="button"
            onClick={() => setSozlukAcik((v) => !v)}
            aria-expanded={sozlukAcik}
            className="focus-ring inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-brand-700"
          >
            {sozlukAcik ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            Sözlük ({blok.sozluk.length} kelime)
          </button>
          {sozlukAcik && (
            <dl className="mt-2 grid gap-1.5 sm:grid-cols-2">
              {blok.sozluk.map((s) => (
                <div key={s.es} className="flex items-baseline gap-2 rounded-md bg-surface-sunken px-3 py-2">
                  <dt className="font-semibold text-ink" lang="es">{s.es}</dt>
                  <dd className="text-sm text-ink/60">{s.tr}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-2 text-xs leading-relaxed text-ink/50">
            Sözlüğe bakmadan önce kelimeyi bağlamdan tahmin etmeyi dene — okuma hızın böyle artar.
          </p>
        </div>
      )}
    </section>
  )
}

function DinlemeBlogu({ blok, sesHazir }) {
  /* Transkript BAŞTA GİZLİ: metni gören öğrenci dinlemez, okur.
     Ancak cihazda ses yoksa gizlemenin anlamı kalmaz — o durumda metin
     doğrudan açılır ve nedeni yazılır. */
  const [acik, setAcik] = useState(!sesHazir)

  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <h3 className="flex items-center gap-2 font-display text-lg font-bold leading-snug text-ink">
        <Headphones className="h-4.5 w-4.5 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
        {blok.baslik}
      </h3>

      {sesHazir ? (
        <>
          <div className="mt-3 flex flex-wrap items-center gap-2.5">
            <SesDugmesi metin={blok.metin} hazir etiket="Doğal hızda dinle" />
            <SesDugmesi metin={blok.metin} hazir etiket="Yavaş dinle" yavasBasla />
          </div>
          <p className="mt-2 text-sm text-ink/55">
            Önce ANLAMI yakalamaya çalış. İkinci dinlemede ayrıntılara odaklan.
          </p>
          <button
            type="button"
            onClick={() => setAcik((v) => !v)}
            aria-expanded={acik}
            className="focus-ring mt-3 inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm font-semibold text-brand-700"
          >
            {acik ? <EyeOff className="h-4 w-4" aria-hidden="true" /> : <Eye className="h-4 w-4" aria-hidden="true" />}
            {acik ? 'Metni gizle' : 'Metni göster (en az iki kez dinledikten sonra)'}
          </button>
        </>
      ) : (
        <p className="mt-2 rounded-input bg-warning-500/[0.07] px-3.5 py-2.5 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-warning-500/20">
          Cihazında İspanyolca ses bulunamadı. Bu çalışmayı metni okuyarak yapabilirsin; dinleme
          alıştırmaları sesli bir cihazda tekrar açılacak.
        </p>
      )}

      {acik && (
        <div className="mt-3 grid gap-2">
          {(blok.satirlar ?? []).map((satir, i) => (
            <div key={i} className="flex flex-wrap items-center gap-2.5 rounded-input bg-surface-sunken px-3.5 py-2.5">
              {satir.kisi && (
                <span className="text-2xs font-bold uppercase tracking-[0.1em] text-brand-700">{satir.kisi}</span>
              )}
              <p className="min-w-0 flex-1 text-[0.98rem] leading-relaxed text-ink" lang="es">{satir.es}</p>
              <SesDugmesi metin={satir.es} hazir={sesHazir} boyut="sm" />
            </div>
          ))}
          {!blok.satirlar?.length && (
            <p className="whitespace-pre-line text-[0.98rem] leading-relaxed text-ink" lang="es">{blok.metin}</p>
          )}
        </div>
      )}
    </section>
  )
}
