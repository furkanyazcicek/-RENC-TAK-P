import { useState } from 'react'
import { ArrowRight, Check, Info, Lightbulb, RefreshCw, X } from 'lucide-react'
import { cn } from '../../lib/cn'
import { DURUM, metinKontrol } from '../../lib/almanca/cevap'
import { Button, Input } from '../ui'

/**
 * GeriBildirim — bir alıştırma cevaplandıktan sonra görünen bölüm.
 *
 * TASARIM KARARI: yanlış cevapta yalnız "doğrusu şu" demek öğretmez.
 * Sıra şudur:
 *
 *   1. Ne oldu (doğru / neredeyse / yanlış) — kısa ve utandırmadan
 *   2. Doğru cevap
 *   3. Kısa öğretim notu (içerik yazarının açıklaması)
 *   4. Hata TÜRKÇE DÜŞÜNMEDEN doğduysa: nereden geldiğinin açıklaması
 *   5. MİKRO ALIŞTIRMA — öğrenci doğru kalıbı hemen bir kez daha üretir
 *
 * 5. adım olmadan 4. adım yalnızca bilgi kalır; öğrenci kalıbı kendi
 * eliyle kurmadan alışkanlık değişmez.
 *
 * Yanlış cevap kırmızı bir alarma dönüştürülmez: durum rengi ölçülüdür,
 * dil suçlayıcı değildir ("olmadı" değil, "burada şu oldu").
 */

const DURUM_GORUNUM = {
  [DURUM.DOGRU]: {
    baslik: 'Doğru',
    Ikon: Check,
    kap: 'bg-success-500/[0.08] ring-success-500/20',
    rozet: 'bg-success-500/12 text-success-700 ring-success-500/20',
  },
  [DURUM.YAKIN]: {
    baslik: 'Neredeyse',
    Ikon: Info,
    kap: 'bg-warning-500/[0.08] ring-warning-500/20',
    rozet: 'bg-warning-500/12 text-warning-700 ring-warning-500/25',
  },
  [DURUM.YANLIS]: {
    baslik: 'Bu sefer olmadı',
    Ikon: X,
    kap: 'bg-info-500/[0.07] ring-info-500/20',
    rozet: 'bg-info-500/12 text-info-700 ring-info-500/20',
  },
}

export default function GeriBildirim({ sonuc, alistirma, onDevam, devamEtiketi = 'Devam' }) {
  const [mikroCevap, setMikroCevap] = useState('')
  const [mikroSonuc, setMikroSonuc] = useState(null)

  if (!sonuc || sonuc.durum === DURUM.BOS) return null

  const gorunum = DURUM_GORUNUM[sonuc.durum] ?? DURUM_GORUNUM[DURUM.YANLIS]
  const { Ikon } = gorunum
  const teshis = sonuc.teshis
  const mikro = teshis?.mikro

  const mikroKontrol = () => {
    setMikroSonuc(metinKontrol(mikroCevap, mikro.kabul))
  }

  const dogruCevapMetni = Array.isArray(sonuc.dogruCevap)
    ? sonuc.dogruCevap.join('  ·  ')
    : typeof sonuc.dogruCevap === 'object' && sonuc.dogruCevap !== null
      ? null
      : sonuc.dogruCevap

  return (
    <div
      className={cn('mt-4 rounded-card px-4 py-4 ring-1 ring-inset sm:px-5', gorunum.kap)}
      role="status"
      aria-live="polite"
    >
      {/* 1 — Ne oldu */}
      <div className="flex items-start gap-3">
        <span
          className={cn(
            'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full ring-1 ring-inset',
            gorunum.rozet
          )}
        >
          <Ikon className="h-4 w-4" strokeWidth={2.6} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-display text-sm font-bold text-ink">{gorunum.baslik}</p>

          {/* 2 — Doğru cevap */}
          {sonuc.durum !== DURUM.DOGRU && dogruCevapMetni && (
            <p className="mt-1 text-sm leading-relaxed text-ink/75">
              Doğrusu: <strong className="font-semibold text-ink">{dogruCevapMetni}</strong>
            </p>
          )}

          {sonuc.not && <p className="mt-1 text-sm leading-relaxed text-ink/70">{sonuc.not}</p>}

          {/* 3 — İçerik yazarının notu */}
          {sonuc.secenekNotu && (
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{sonuc.secenekNotu}</p>
          )}
          {alistirma?.aciklama && (
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{alistirma.aciklama}</p>
          )}
        </div>
      </div>

      {/* 4 — Türkçe düşünme teşhisi */}
      {teshis && (
        <div className="mt-4 rounded-input bg-surface/70 px-4 py-3 ring-1 ring-inset ring-line">
          <p className="flex items-center gap-2 text-2xs font-bold uppercase tracking-[0.12em] text-accent-700">
            <Lightbulb className="h-3.5 w-3.5" strokeWidth={2.4} aria-hidden="true" />
            Türkçe düşünme izi
          </p>
          <p className="mt-1.5 font-display text-sm font-bold text-ink">{teshis.baslik}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/70">{teshis.aciklama}</p>
          {teshis.dogru && (
            <p className="mt-2 rounded-md bg-success-500/[0.08] px-3 py-2 text-sm text-ink/80">
              <span className="font-semibold text-success-700">Doğru kalıp: </span>
              {teshis.dogru}
            </p>
          )}

          {/* 5 — Mikro alıştırma */}
          {mikro && (
            <div className="mt-3 border-t border-line pt-3">
              <p className="text-sm font-semibold text-ink">Hemen bir kez daha dene</p>
              <p className="mt-0.5 text-sm text-ink/65">{mikro.yonerge}</p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <Input
                  value={mikroCevap}
                  onChange={(e) => { setMikroCevap(e.target.value); setMikroSonuc(null) }}
                  onKeyDown={(e) => { if (e.key === 'Enter' && mikroCevap.trim()) mikroKontrol() }}
                  placeholder="Almanca cevabını yaz…"
                  className="flex-1"
                  aria-label="Mikro alıştırma cevabı"
                  lang="de"
                  autoCapitalize="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <Button
                  variant="secondary"
                  size="md"
                  onClick={mikroKontrol}
                  disabled={!mikroCevap.trim()}
                  className="sm:w-auto"
                >
                  Kontrol et
                </Button>
              </div>
              {mikroSonuc && (
                <p
                  className={cn(
                    'mt-2 flex items-start gap-2 text-sm',
                    mikroSonuc.durum === DURUM.DOGRU ? 'text-success-700' : 'text-ink/70'
                  )}
                >
                  {mikroSonuc.durum === DURUM.DOGRU ? (
                    <>
                      <Check className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.6} aria-hidden="true" />
                      <span>Şimdi oldu. Kalıp yerine oturdu.</span>
                    </>
                  ) : mikroSonuc.durum === DURUM.YAKIN ? (
                    <>
                      <Info className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.4} aria-hidden="true" />
                      <span>{mikroSonuc.not}</span>
                    </>
                  ) : (
                    <>
                      <RefreshCw className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={2.2} aria-hidden="true" />
                      <span>
                        Henüz değil. Örnek: <strong className="font-semibold text-ink">{mikro.kabul[0]}</strong>
                      </span>
                    </>
                  )}
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {onDevam && (
        <div className="mt-4 flex justify-end">
          <Button onClick={onDevam} iconRight={ArrowRight} size="md">
            {devamEtiketi}
          </Button>
        </div>
      )}
    </div>
  )
}
