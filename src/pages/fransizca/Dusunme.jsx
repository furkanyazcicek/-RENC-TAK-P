import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BrainCircuit, CheckCircle2, Timer } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button } from '../../components/ui'
import Alistirma from '../../components/fransizca/alistirmalar/Alistirma'
import { useIlerleme, useSes } from '../../components/fransizca/useFransizca'
import { ANTRENMANLAR, IC_SES_GOREVLERI } from '../../content/fransizca'
import { DURUM } from '../../lib/fransizca/cevap'
import { beceriGuncelle, gunlukKaydet, sikIzler } from '../../lib/fransizca/ilerleme'
import { izBul } from '../../lib/fransizca/turkceIzleri'

/**
 * Fransızca düşünme antrenmanları.
 *
 * Bu ekranın var oluş sebebi tek bir cümledir: öğrenci cümleyi önce Türkçe
 * kurup çevirmeyi bırakmalı. Bu yüzden buradaki alıştırmaların hiçbiri
 * "şu Türkçe cümleyi Fransızcaya çevir" demez. Bir durum, bir niyet, bir
 * Fransızca tanım ya da bir Fransızca soru verilir; cevap doğrudan
 * Fransızca üretilir.
 *
 * Öğrencinin hata defterindeki izler de burada gösterilir: hangi Türkçe
 * düşünme alışkanlığının kaç kez tekrarlandığı görünür ve azalıp azalmadığı
 * takip edilebilir.
 */
export default function Dusunme() {
  const ilerleme = useIlerleme()
  const ses = useSes()
  const [aktif, setAktif] = useState(null)

  if (aktif) {
    return <Antrenman antrenman={aktif} sesHazir={ses?.hazir === true} onCik={() => setAktif(null)} />
  }

  const izler = sikIzler(ilerleme, 6)

  return (
    <AppShell
      title="Fransızca düşünme"
      subtitle="Çeviri alışkanlığını kıran antrenmanlar"
    >
      <section className="rounded-card bg-accent-500/[0.06] p-5 ring-1 ring-inset ring-accent-500/15 sm:p-6">
        <h1 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink">
          <BrainCircuit className="h-6 w-6 text-accent-600" strokeWidth={2} aria-hidden="true" />
          Neden bu antrenmanlar var?
        </h1>
        <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink/75">
          Türkçe konuşan öğrencilerin en büyük engeli kelime bilmemek değil. Cümleyi önce Türkçe
          kurup sonra kelime kelime çevirmek — bu hem yavaşlatır hem de Türkçenin yapısını
          Fransızcaya taşıdığı için hataya yol açar.
        </p>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
          Burada Türkçe tamamen yasak değil: yönergeler ve açıklamalar Türkçe. Ama{' '}
          <strong className="font-semibold text-ink">ürettiğin şey hep Fransızca</strong> ve hiçbir
          alıştırma sana "şunu çevir" demiyor.
        </p>
      </section>

      {/* Hata defteri */}
      {izler.length > 0 && (
        <section className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 className="font-display text-base font-bold text-ink">Senin hata defterin</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
            Bunlar çalışmalarında en sık gördüğümüz aktarım izleri. Aynı iz iki hafta üst üste
            çıkmazsa düzelmiş sayılır.
          </p>
          <div className="mt-3 grid gap-2.5">
            {izler.map((kayit) => {
              const iz = izBul(kayit.kod)
              if (!iz) return null
              return (
                <div key={kayit.kod} className="rounded-input bg-surface-muted px-4 py-3 ring-1 ring-inset ring-line">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-display text-sm font-bold text-ink">{iz.baslik}</p>
                    <Badge tone="warning" size="sm">{kayit.sayi} kez</Badge>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{iz.aciklama}</p>
                  <p className="mt-1.5 text-sm text-success-700">
                    <span className="font-semibold">Doğrusu: </span>
                    <span lang="fr">{iz.dogru}</span>
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Antrenmanlar */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Antrenmanlar
        </h2>
        <div className="mt-3 grid gap-3">
          {ANTRENMANLAR.map((a) => (
            <button
              key={a.id}
              type="button"
              onClick={() => setAktif(a)}
              className="focus-ring group flex items-start gap-4 rounded-card border border-line bg-surface p-5 text-left shadow-card transition hover:border-accent-500/30 hover:shadow-card-hover"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-500/10 text-accent-600 ring-1 ring-inset ring-accent-500/15">
                {a.hizli
                  ? <Timer className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                  : <BrainCircuit className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-display text-base font-bold text-ink">{a.ad}</span>
                  <Badge tone="neutral" size="sm">{a.seviye}</Badge>
                  <Badge tone="neutral" size="sm">{a.sure} dk</Badge>
                  <Badge tone="neutral" size="sm">{a.alistirmalar.length} soru</Badge>
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-ink/65">{a.aciklama}</span>
                <span className="mt-1.5 block text-sm leading-relaxed text-ink/45">{a.neden}</span>
              </span>
              <ArrowRight className="mt-2 h-5 w-5 shrink-0 text-ink/25 transition group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
          ))}
        </div>
      </section>

      {/* İç ses görevleri */}
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">İç ses antrenmanları</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
          Bunlar ekranda yapılmaz. Gün içinde, telefonu bile açmadan yapacağın küçük alışkanlıklar —
          ve Fransızca düşünmeye geçişin asıl gerçekleştiği yer burasıdır.
        </p>
        <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
          {IC_SES_GOREVLERI.map((g) => (
            <div key={g.id} className="rounded-input bg-surface px-4 py-3.5 ring-1 ring-inset ring-line">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-display text-sm font-bold text-ink">{g.baslik}</p>
                <Badge tone="neutral" size="sm">{g.sure}</Badge>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{g.gorev}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/45">{g.neden}</p>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */

function Antrenman({ antrenman, sesHazir, onCik }) {
  const [indeks, setIndeks] = useState(0)
  const [skor, setSkor] = useState({ dogru: 0, toplam: 0 })
  const bitti = indeks >= antrenman.alistirmalar.length

  const cevapla = (sonuc) => {
    const dogruMu = sonuc.durum === DURUM.DOGRU || sonuc.durum === DURUM.YAKIN
    setSkor((e) => ({ dogru: e.dogru + (dogruMu ? 1 : 0), toplam: e.toplam + 1 }))
  }

  const devam = () => {
    if (indeks + 1 < antrenman.alistirmalar.length) {
      setIndeks((i) => i + 1)
      return
    }
    const oran = skor.toplam ? Math.round((skor.dogru / skor.toplam) * 100) : 0
    beceriGuncelle('dusunme', oran)
    gunlukKaydet({ dakika: antrenman.sure, alistirma: skor.toplam, dogru: skor.dogru })
    setIndeks(antrenman.alistirmalar.length)
  }

  if (bitti) {
    return (
      <AppShell title={antrenman.ad} subtitle="Antrenman tamamlandı" width="narrow">
        <section className="rounded-card bg-success-500/[0.07] p-6 ring-1 ring-inset ring-success-500/20">
          <Badge tone="success">Tamamlandı</Badge>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
            {skor.dogru} / {skor.toplam} doğru
          </h1>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
            Bu antrenmanda hiç Türkçe cümle çevirmedin — hepsini doğrudan Fransızca ürettin.
            Alışkanlık tam olarak böyle değişir: az ama sık.
          </p>
        </section>
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Button onClick={onCik} className="justify-center">Antrenman listesine dön</Button>
          <Button as={Link} to="/fransizca" variant="secondary" className="justify-center">
            Ana sayfa
          </Button>
        </div>
      </AppShell>
    )
  }

  const oran = Math.round((indeks / antrenman.alistirmalar.length) * 100)

  return (
    <AppShell
      title={antrenman.ad}
      subtitle={`${indeks + 1} / ${antrenman.alistirmalar.length}`}
      width="narrow"
      headerAction={<Button variant="ghost" size="sm" onClick={onCik}>Çık</Button>}
    >
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
        <div
          className="h-full rounded-full bg-aurora-line transition-[width] duration-300"
          style={{ width: `${oran}%` }}
          role="progressbar"
          aria-valuenow={oran}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Antrenman ilerlemesi"
        />
      </div>

      <p
        className={cn(
          'rounded-input px-4 py-3 text-sm leading-relaxed ring-1 ring-inset',
          antrenman.hizli
            ? 'bg-warning-500/[0.07] text-ink/75 ring-warning-500/20'
            : 'bg-accent-500/[0.06] text-ink/75 ring-accent-500/12'
        )}
      >
        {antrenman.hizli && <strong className="font-semibold text-ink">Hızlı tepki: </strong>}
        {antrenman.aciklama}
      </p>

      <Alistirma
        key={antrenman.alistirmalar[indeks].id}
        alistirma={antrenman.alistirmalar[indeks]}
        sesHazir={sesHazir}
        numara={indeks + 1}
        toplam={antrenman.alistirmalar.length}
        onSonuc={cevapla}
        onDevam={devam}
        devamEtiketi={
          indeks + 1 < antrenman.alistirmalar.length ? 'Sonraki' : 'Antrenmanı bitir'
        }
      />

      <p className="flex items-start gap-2 text-xs leading-relaxed text-ink/45">
        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        Birden fazla doğru cevap olabilir. Anlamı karşılayan doğal her cevap kabul edilir.
      </p>
    </AppShell>
  )
}
