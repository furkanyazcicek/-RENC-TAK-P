import { Link } from 'react-router-dom'
import { ArrowRight, CalendarCheck, Flag, MapPin, Repeat, Route } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button, ProgressBar } from '../../components/ui'
import { useIlerleme } from '../../components/almanca/useAlmanca'
import { DERSLER, KELIME_HAVUZU, modulBul } from '../../content/almanca'
import { DURUMLAR, DURUM_ETIKETLERI } from '../../lib/almanca/ilerleme'
import { BECERILER, SEVIYELER, SEVIYE_SIRASI, seviyeIndeksi } from '../../lib/almanca/seviyeler'
import {
  baslangicSeviyesi, bugunPlani, enZayifBeceri, haftalikPlan,
  kontrolNoktalari, otuzGunHedefi, seviyeTamamlanmaDurumu,
} from '../../lib/almanca/yolHaritasi'

/**
 * Kişisel öğrenme yol haritası.
 *
 * "Uzun görev listesi" değil, sırayla okunabilen bir yol: bugün → bu hafta
 * → bu ay → seviyeyi bitirme koşulu. Her adımın yanında NEDEN orada olduğu
 * yazar; öğrenci anlamadığı bir plana uymaz.
 */
export default function YolHaritasi() {
  const ilerleme = useIlerleme()
  const seviye = baslangicSeviyesi(ilerleme)
  const seviyeBilgi = SEVIYELER[seviye]
  const { gorevler, toplamDakika, yogunluk } = bugunPlani(ilerleme, {
    dersler: DERSLER,
    kelimeler: KELIME_HAVUZU,
  })
  const { plan } = haftalikPlan(ilerleme)
  const otuzGun = otuzGunHedefi(ilerleme, DERSLER)
  const noktalar = kontrolNoktalari(ilerleme)
  const durum = seviyeTamamlanmaDurumu(ilerleme, DERSLER, seviye)
  const zayif = enZayifBeceri(ilerleme)
  const ustSeviye = SEVIYE_SIRASI[Math.min(SEVIYE_SIRASI.length - 1, seviyeIndeksi(seviye) + 1)]

  /* DERSLER kayıt defterinde zaten müfredat sırasındadır; burada yeniden
     sıralamak modülleri iç içe geçiriyordu. */
  const seviyeDersleri = DERSLER.filter((d) => d.seviye === seviye)

  return (
    <AppShell title="Yol haritam" subtitle={`${seviye} · ${yogunluk.ad} tempo`}>
      {/* Bugün */}
      <section className="rounded-card bg-brand-500/[0.07] p-5 ring-1 ring-inset ring-brand-500/18 sm:p-6">
        <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
          <MapPin className="h-5 w-5 text-brand-600" strokeWidth={2.1} aria-hidden="true" />
          Bugün
        </h2>
        {gorevler.length ? (
          <>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
              {gorevler.length} iş · yaklaşık {toplamDakika} dakika
            </p>
            <ol className="mt-3 grid gap-2">
              {gorevler.map((g, i) => (
                <li key={g.id}>
                  <Link
                    to={g.rota}
                    className="focus-ring flex items-start gap-3 rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line transition hover:ring-brand-500/25"
                  >
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-500/12 text-2xs font-bold text-brand-700 tabular">
                      {i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.95rem] font-semibold text-ink">{g.baslik}</span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-ink/60">{g.neden}</span>
                    </span>
                    <span className="shrink-0 text-xs text-ink/45 tabular">{g.dakika} dk</span>
                  </Link>
                </li>
              ))}
            </ol>
          </>
        ) : (
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
            Bugünkü planı bitirdin. Fazladan çalışmak istersen kütüphaneden istediğin dersi açabilirsin.
          </p>
        )}
      </section>

      {/* Ders sırası */}
      <section>
        <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          <Route className="h-4 w-4" aria-hidden="true" />
          {seviye} seviyesindeki ders sıran
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Sıra pedagojik olarak kuruldu: her ders bir öncekinin üstüne biner. İstersen atlayabilirsin,
          ama ön koşulu tamamlanmamış ders "bugün" listesine gelmez.
        </p>
        <ProgressBar value={durum.oran} className="mt-3" tone="aurora" label={`${durum.tamam} / ${durum.toplam} ders tamamlandı`} showValue />

        <ol className="mt-3 grid gap-2">
          {seviyeDersleri.map((ders, indeks) => {
            const kayit = ilerleme.dersler?.[ders.id]
            const d = kayit?.durum ?? DURUMLAR.BASLANMADI
            const etiket = DURUM_ETIKETLERI[d]
            const modul = modulBul(ders.modul)
            return (
              <li key={ders.id}>
                <Link
                  to={`/almanca/ders/${ders.id}`}
                  className="focus-ring group flex items-start gap-3.5 rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-brand-500/25 hover:shadow-card-hover"
                >
                  {/* Seviyedeki genel sıra gösterilir; `ders.sira` modül içi
                      sıradır ve her modülde 1'den başladığı için tek listede
                      tekrar ederdi. Modül adı zaten altta yazıyor. */}
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-surface-sunken text-sm font-bold text-ink/55 tabular">
                    {indeks + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-[0.98rem] font-semibold text-ink">{ders.baslik}</span>
                      <Badge tone={etiket.tone} size="sm">{etiket.ad}</Badge>
                      {kayit?.enIyiOran != null && (
                        <span className="text-2xs font-semibold text-ink/45 tabular">en iyi %{kayit.enIyiOran}</span>
                      )}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">
                      {modul?.ad} · {BECERILER[ders.odakBeceri]?.ad} · {ders.sure} dk
                    </span>
                  </span>
                  <ArrowRight className="mt-2 h-4 w-4 shrink-0 text-ink/25 transition group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </ol>
      </section>

      {/* Hafta */}
      <section>
        <h2 className="flex items-center gap-2 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          <CalendarCheck className="h-4 w-4" aria-hidden="true" />
          Haftalık düzen
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          {yogunluk.aciklama}. Gün kaçırırsan bir şey bozulmaz — plan kendini yeniden düzenler.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {plan.map((gun) => (
            <div
              key={gun.gun}
              className={cn(
                'rounded-input px-4 py-3 ring-1 ring-inset',
                gun.tur === 'dinlenme'
                  ? 'bg-surface-sunken ring-line'
                  : gun.tur === 'tekrar'
                    ? 'bg-aqua-500/[0.07] ring-aqua-500/18'
                    : 'bg-surface ring-line'
              )}
            >
              <div className="flex items-center gap-2">
                {gun.tur === 'tekrar' && <Repeat className="h-3.5 w-3.5 text-aqua-700" aria-hidden="true" />}
                <span className="text-sm font-bold text-ink">{gun.gun}</span>
              </div>
              <p className="mt-1 text-[0.95rem] font-medium text-ink/85">{gun.baslik}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/55">{gun.aciklama}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Zayıf alan desteği */}
      {zayif && (
        <section className="rounded-card bg-info-500/[0.06] p-5 ring-1 ring-inset ring-info-500/18">
          <h2 className="font-display text-base font-bold text-ink">
            Zayıf alanına ayrılan pay: {BECERILER[zayif]?.ad ?? zayif}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
            Ölçümlerinde en düşük çıkan alan bu. Haftalık planda bu alana fazladan bir gün ayrıldı ve
            günlük görev listende düzenli olarak bir destek çalışması görünecek.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {zayif === 'telaffuz' && (
              <Button as={Link} to="/almanca/telaffuz" variant="secondary" size="sm">Telaffuz laboratuvarı</Button>
            )}
            {(zayif === 'dusunme' || zayif === 'dizim') && (
              <Button as={Link} to="/almanca/dusunme" variant="secondary" size="sm">Almanca düşünme antrenmanı</Button>
            )}
            {(zayif === 'kelime') && (
              <Button as={Link} to="/almanca/tekrar" variant="secondary" size="sm">Kelime tekrarı</Button>
            )}
          </div>
        </section>
      )}

      {/* 30 gün */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
          <Flag className="h-4 w-4 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
          İlk 30 gün
        </h2>
        <ul className="mt-3 grid gap-2.5">
          {otuzGun.maddeler.map((m) => (
            <li key={m.baslik} className="rounded-input bg-surface-muted px-4 py-3 ring-1 ring-inset ring-line">
              <p className="text-[0.95rem] font-semibold text-ink">{m.baslik}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/60">{m.olcut}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Kontrol noktaları */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Kontrol noktaları
        </h2>
        <div className="mt-3 grid gap-2">
          {noktalar.map((n) => (
            <div key={n.ad} className="flex flex-col gap-1 rounded-input bg-surface-muted px-4 py-3 ring-1 ring-inset ring-line sm:flex-row sm:gap-4">
              <span className="w-32 shrink-0 text-sm font-bold text-ink">{n.ad}</span>
              <span className="min-w-0 flex-1 text-sm leading-relaxed text-ink/65">{n.olcum}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Seviye tamamlama koşulu */}
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">
          {seviye} seviyesini ne zaman bitirmiş olurum?
        </h2>
        <ul className="mt-2.5 grid gap-1.5">
          {(seviyeBilgi?.gecisKosulu ?? []).map((k) => (
            <li key={k} className="flex items-start gap-2 text-sm leading-relaxed text-ink/75">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/45" aria-hidden="true" />
              {k}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-ink/55">
          Bu koşullar sağlandığında {ustSeviye} seviyesi açılır. Ölçüt geçen gün sayısı değil,
          gösterdiğin performanstır.
        </p>
      </section>
    </AppShell>
  )
}
