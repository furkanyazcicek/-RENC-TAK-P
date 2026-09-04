import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown, FileText, Lock } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Tabs } from '../../components/ui'
import { useIlerleme } from '../../components/ispanyolca/useIspanyolca'
import { DERSLER, kutuphaneAgaci, modulNotlari } from '../../content/ispanyolca'
import { DURUMLAR, DURUM_ETIKETLERI } from '../../lib/ispanyolca/ilerleme'
import { BECERILER, SEVIYELER, SEVIYE_SIRASI } from '../../lib/ispanyolca/seviyeler'
import { baslangicSeviyesi } from '../../lib/ispanyolca/yolHaritasi'

/**
 * Ders kütüphanesi — CEFR seviyelerine göre.
 *
 * DÜRÜSTLÜK: içeriği henüz yazılmamış modüller gizlenmez, "hazırlanıyor"
 * olarak işaretlenir. Öğrenci müfredatın tamamını görüp nereye gittiğini
 * bilmelidir; ama tıklayınca boş sayfaya düşmemelidir.
 *
 * Seviye kodları (A1, B2…) ikincil etiket olarak durur; başlık her zaman
 * o seviyenin NE KAZANDIRDIĞIDIR.
 */
export default function Kutuphane() {
  const ilerleme = useIlerleme()
  const kendiSeviyesi = baslangicSeviyesi(ilerleme)
  const [secili, setSecili] = useState(kendiSeviyesi)
  const agac = kutuphaneAgaci(SEVIYE_SIRASI)
  const seviyeAgaci = agac.find((s) => s.seviye === secili)
  const seviyeBilgi = SEVIYELER[secili]

  return (
    <AppShell
      title="Ders kütüphanesi"
      subtitle="Sıfırdan ileri düzeye, seviye seviye"
    >
      <Tabs
        items={SEVIYE_SIRASI.map((s) => {
          const dersSayisi = agac.find((a) => a.seviye === s)?.dersSayisi ?? 0
          /* Sekmede yalnız seviye kodu durur; "senin seviyen" bilgisi
             aşağıdaki seviye kartında rozet olarak zaten var. Sekme
             etiketine sıkıştırmak dar ekranda okunmuyordu. */
          return { value: s, label: s, count: dersSayisi || undefined }
        })}
        value={secili}
        onChange={setSecili}
      />

      {/* Seviyenin ne kazandırdığı — kod değil, anlam */}
      {seviyeBilgi && (
        <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line sm:p-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <h2 className="font-display text-xl font-bold text-ink">{seviyeBilgi.ad}</h2>
            <Badge tone="neutral" size="sm">{seviyeBilgi.kod}</Badge>
            {secili === kendiSeviyesi && <Badge tone="brand" size="sm">Senin seviyen</Badge>}
          </div>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-ink/70">{seviyeBilgi.ozet}</p>
          <p className="mt-2 text-sm text-ink/55">
            Hedef kelime dağarcığı: {seviyeBilgi.kelimeHedefi.metin}
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <MiniListe baslik="Bu seviyenin sonunda anlayabilirsin" maddeler={seviyeBilgi.anlayabilir} />
            <MiniListe baslik="Konuşabilirsin" maddeler={seviyeBilgi.konusabilir} />
            <MiniListe baslik="Okuyabilirsin" maddeler={seviyeBilgi.okuyabilir} />
            <MiniListe baslik="Yazabilirsin" maddeler={seviyeBilgi.yazabilir} />
          </div>
        </section>
      )}

      {/* Modüller */}
      <section className="grid gap-3">
        {(seviyeAgaci?.moduller ?? []).map((modul) => (
          <Modul key={modul.id} modul={modul} ilerleme={ilerleme} />
        ))}
        {!seviyeAgaci?.moduller?.length && (
          <p className="rounded-card bg-surface-muted px-5 py-6 text-center text-sm leading-relaxed text-ink/60 ring-1 ring-inset ring-line">
            Bu seviyenin modülleri henüz müfredat haritasına eklenmedi.
          </p>
        )}
      </section>

      {/* Seviye sonu değerlendirmesi */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="font-display text-base font-bold text-ink">
          {secili} seviye sonu değerlendirmesi
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Bu seviyedeki derslerin en az %80'ini tamamladığında açılır. Değerlendirme geçen süreye
          değil, gösterdiğin performansa bakar; geçemezsen eksik kalan beceriye özel bir tekrar
          bloğu kurulur.
        </p>
        <p className="mt-3 inline-flex items-center gap-2 rounded-input bg-surface-sunken px-3.5 py-2.5 text-sm text-ink/55 ring-1 ring-inset ring-line">
          <Lock className="h-4 w-4" aria-hidden="true" />
          {DERSLER.filter((d) => d.seviye === secili).length === 0
            ? 'Bu seviyenin dersleri henüz hazırlanmadı.'
            : 'Derslerini tamamladıkça burası açılacak.'}
        </p>
      </section>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */

function MiniListe({ baslik, maddeler }) {
  return (
    <div>
      <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">{baslik}</p>
      <ul className="mt-1.5 grid gap-1.5">
        {maddeler.map((m) => (
          <li key={m} className="flex items-start gap-2 text-sm leading-relaxed text-ink/70">
            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/40" aria-hidden="true" />
            {m}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Modul({ modul, ilerleme }) {
  const hazir = modul.dersler.length > 0
  const [acik, setAcik] = useState(hazir)

  /* Modül sonu çalışma kâğıdı: derse değil MODÜLE bağlı olduğu için
     ders listesinde görünmüyordu; modül başlığının hemen altına konuldu. */
  const calismaKagidi = modulNotlari(modul.id).find((n) => !n.ders) ?? null

  const tamamlanan = modul.dersler.filter((d) => {
    const durum = ilerleme.dersler?.[d.id]?.durum
    return durum === DURUMLAR.TAMAMLANDI || durum === DURUMLAR.GUCLENIYOR || durum === DURUMLAR.USTALASILDI
  }).length

  return (
    <section
      className={cn(
        'overflow-hidden rounded-card ring-1 ring-inset',
        hazir ? 'bg-surface ring-line shadow-card' : 'bg-surface-muted ring-line'
      )}
    >
      <button
        type="button"
        onClick={() => hazir && setAcik((v) => !v)}
        aria-expanded={hazir ? acik : undefined}
        disabled={!hazir}
        className={cn(
          'focus-ring flex w-full items-start gap-3.5 px-5 py-4 text-left',
          hazir && 'hover:bg-brand-500/[0.03]'
        )}
      >
        <span className="min-w-0 flex-1">
          <span className="flex flex-wrap items-center gap-2">
            <span className="font-display text-[1.02rem] font-bold text-ink">{modul.ad}</span>
            {hazir ? (
              <Badge tone="success" size="sm">{tamamlanan} / {modul.dersler.length} ders</Badge>
            ) : (
              <Badge tone="neutral" size="sm">İçeriği hazırlanıyor</Badge>
            )}
          </span>
          <span className="mt-1 block text-sm leading-relaxed text-ink/60">{modul.amac}</span>
          <span className="mt-1.5 block text-2xs font-semibold uppercase tracking-[0.1em] text-ink/40">
            {modul.islev}
          </span>
        </span>
        {hazir && (
          <ChevronDown
            className={cn('mt-1 h-5 w-5 shrink-0 text-ink/35 transition', acik && 'rotate-180')}
            aria-hidden="true"
          />
        )}
      </button>

      {acik && hazir && calismaKagidi && (
        <Link
          to={`/ispanyolca/yazdir/${calismaKagidi.id}`}
          className="focus-ring flex items-center gap-3 border-t border-line bg-surface-muted px-5 py-3 transition hover:bg-brand-500/[0.05]"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
            <FileText className="h-4 w-4" strokeWidth={2.1} aria-hidden="true" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-semibold text-ink">
              {calismaKagidi.baslik} — yazdırılabilir çalışma kâğıdı
            </span>
            <span className="mt-0.5 block text-sm text-ink/55">
              Modülün tamamını ölçer; öğretmen sürümünde cevap anahtarı var
            </span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-ink/25" aria-hidden="true" />
        </Link>
      )}

      {acik && hazir && (
        <div className="border-t border-line">
          <ul className="divide-y divide-line">
            {modul.dersler.map((ders) => {
              const kayit = ilerleme.dersler?.[ders.id]
              const etiket = DURUM_ETIKETLERI[kayit?.durum ?? DURUMLAR.BASLANMADI]
              return (
                <li key={ders.id}>
                  <Link
                    to={`/ispanyolca/ders/${ders.id}`}
                    className="focus-ring group flex items-start gap-3.5 px-5 py-3.5 transition hover:bg-brand-500/[0.04]"
                  >
                    <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-surface-sunken text-2xs font-bold text-ink/55 tabular">
                      {ders.sira}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[0.95rem] font-semibold text-ink">{ders.baslik}</span>
                        <Badge tone={etiket.tone} size="sm">{etiket.ad}</Badge>
                        {ders.not && (
                          <span className="inline-flex items-center gap-1 text-2xs font-semibold text-ink/40">
                            <FileText className="h-3 w-3" aria-hidden="true" /> PDF
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">
                        {ders.altBaslik}
                      </span>
                      <span className="mt-1 block text-2xs font-medium text-ink/40">
                        {BECERILER[ders.odakBeceri]?.ad} · {ders.sure} dakika ·{' '}
                        {(ders.alistirmalar?.length ?? 0) + (ders.miniSinav?.length ?? 0)} alıştırma
                      </span>
                    </span>
                    <ArrowRight className="mt-1.5 h-4 w-4 shrink-0 text-ink/25 transition group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {!hazir && (
        <p className="border-t border-line px-5 py-3 text-sm leading-relaxed text-ink/50">
          Bu modülün yeri müfredatta belli: {modul.kazanimlar.slice(0, 2).join(' · ')}. Dersleri
          yazıldığında burada görünecek.
        </p>
      )}
    </section>
  )
}
