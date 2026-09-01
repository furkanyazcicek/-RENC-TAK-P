import { Link, Navigate } from 'react-router-dom'
import {
  ArrowRight, BadgeCheck, BrainCircuit, CircleHelp, Compass, Info, TrendingUp,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button } from '../../components/ui'
import { DashboardHero } from '../../components/dashboard'
import { useIlerleme } from '../../components/ingilizce/useIngilizce'
import { DERSLER } from '../../content/ingilizce'
import { BECERILER, SEVIYELER, SEVIYE_SIRASI, seviyeIndeksi } from '../../lib/ingilizce/seviyeler'
import { izBul } from '../../lib/ingilizce/turkceIzleri'
import { haftalikPlan, otuzGunHedefi, sonrakiDers } from '../../lib/ingilizce/yolHaritasi'

/**
 * Seviye tespit sonucu.
 *
 * Bu ekranın tek bir kuralı var: "A2 seviyesindesin" demek YETMEZ.
 * Öğrenci şunları da görmeli — genel seviye, beceri beceri ayrı seviye,
 * güçlü ve zayıf alanlar, Türkçe düşünme alışkanlıkları, nereden
 * başlayacağı, haftalık programı, ilk 30 günlük hedefi ve BÜTÜN BUNLARIN
 * NEDEN böyle çıktığı.
 *
 * SAHTE KESİNLİK YOK: ölçülemeyen beceriler ayrı bir bölümde, "ölçülemedi"
 * diye ve neden ölçülemediği yazılarak gösterilir. Tahmin puanı düşük
 * güvenle çıktıysa bu da açıkça söylenir.
 */

const GUVEN_METNI = {
  yuksek: { ad: 'Yüksek güven', not: 'Yeterli soru cevaplandı ve sonuçlar tutarlıydı.', tone: 'success' },
  orta: { ad: 'Orta güven', not: 'Sonuç sınırda. İlk hafta sonunda yeniden değerlendirilecek.', tone: 'warning' },
  dusuk: { ad: 'Düşük güven', not: 'Az soru cevaplandı. Çalıştıkça seviyen kendiliğinden düzelecek.', tone: 'warning' },
}

export default function Sonuc() {
  const ilerleme = useIlerleme()
  const sonuc = ilerleme.tespit

  if (!sonuc) return <Navigate to="/ingilizce" replace />

  const seviye = SEVIYELER[sonuc.genelSeviye]
  const guven = GUVEN_METNI[sonuc.guven] ?? GUVEN_METNI.orta
  const ilkDers = sonrakiDers(ilerleme, DERSLER)
  const { plan } = haftalikPlan(ilerleme)
  const otuzGun = otuzGunHedefi(ilerleme, DERSLER)

  return (
    <AppShell title="Seviye tespiti sonucu" subtitle="Nerede olduğun ve nereden devam edeceğin">
      <DashboardHero
        eyebrow="Sonuç"
        title={`${sonuc.genelSeviye} — ${seviye?.ad ?? ''}`}
        subtitle={seviye?.ozet}
        badge={{ label: guven.ad, tone: 'glass' }}
        highlights={[
          { label: 'Doğru', value: `${sonuc.dogruSayisi} / ${sonuc.soruSayisi}` },
          { label: 'Kelime hedefi', value: seviye?.kelimeHedefi?.metin ?? '—' },
        ]}
      />

      {/* Neden bu sonuç çıktı */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
          <Info className="h-4 w-4 text-info-700" strokeWidth={2.2} aria-hidden="true" />
          Bu sonuç neden çıktı?
        </h2>
        <div className="mt-2.5 grid gap-2">
          {sonuc.gerekce.map((g, i) => (
            <p key={i} className="text-[0.95rem] leading-relaxed text-ink/70">{g}</p>
          ))}
        </div>
        <p className={cn(
          'mt-3 rounded-input px-4 py-3 text-sm leading-relaxed ring-1 ring-inset',
          guven.tone === 'success'
            ? 'bg-success-500/[0.07] text-ink/75 ring-success-500/18'
            : 'bg-warning-500/[0.07] text-ink/75 ring-warning-500/20'
        )}>
          <strong className="font-semibold text-ink">{guven.ad}: </strong>{guven.not}
        </p>
      </section>

      {/* Bu seviye ne demek */}
      {seviye && (
        <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line sm:p-6">
          <h2 className="font-display text-lg font-bold text-ink">
            {sonuc.genelSeviye} seviyesinde neler yapabilirsin?
          </h2>
          <div className="mt-3.5 grid gap-4 sm:grid-cols-2">
            <Liste baslik="Anlayabilirsin" maddeler={seviye.anlayabilir} />
            <Liste baslik="Konuşabilirsin" maddeler={seviye.konusabilir} />
            <Liste baslik="Okuyabilirsin" maddeler={seviye.okuyabilir} />
            <Liste baslik="Yazabilirsin" maddeler={seviye.yazabilir} />
          </div>
          <div className="mt-4 rounded-input bg-surface px-4 py-3.5 ring-1 ring-inset ring-line">
            <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">
              Bir üst seviyeye geçmek için
            </p>
            <ul className="mt-2 grid gap-1.5">
              {seviye.gecisKosulu.map((k) => (
                <li key={k} className="flex items-start gap-2 text-sm leading-relaxed text-ink/75">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
                  {k}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Beceri beceri seviye */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Beceri beceri durumun
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Genel seviyen tek bir sayı değildir. Bazı becerilerin öndedir, bazıları geridedir —
          çalışma planın buna göre kurulur.
        </p>
        <div className="mt-3 grid gap-2.5">
          {Object.entries(sonuc.beceriSeviyeleri).map(([beceri, bSeviye]) => (
            <BeceriSatiri
              key={beceri}
              beceri={beceri}
              seviye={bSeviye}
              genel={sonuc.genelSeviye}
              puan={sonuc.beceriPuanlari[beceri]}
            />
          ))}
        </div>

        {sonuc.olculemeyenler.length > 0 && (
          <div className="mt-4 rounded-card bg-surface-muted p-4 ring-1 ring-inset ring-line">
            <h3 className="flex items-center gap-2 text-sm font-bold text-ink">
              <CircleHelp className="h-4 w-4 text-ink/45" strokeWidth={2.2} aria-hidden="true" />
              Ölçemediklerimiz
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-ink/60">
              Bu alanlar için tahmin üretmiyoruz. Yeterli veri olmadan verilen bir seviye,
              seviyesizlikten daha yanıltıcıdır.
            </p>
            <ul className="mt-2.5 grid gap-2">
              {sonuc.olculemeyenler.map((o) => (
                <li key={o.beceri} className="rounded-input bg-surface px-3.5 py-2.5 ring-1 ring-inset ring-line">
                  <p className="text-sm font-semibold text-ink">{BECERILER[o.beceri]?.ad ?? o.beceri}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink/60">{o.sebep}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink/50">{o.nasil}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Güçlü ve gelişecek alanlar */}
      {(sonuc.guclu.length > 0 || sonuc.gelisim.length > 0) && (
        <section className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-card bg-success-500/[0.06] p-5 ring-1 ring-inset ring-success-500/18">
            <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
              <TrendingUp className="h-4 w-4 text-success-700" strokeWidth={2.2} aria-hidden="true" />
              Güçlü olduğun alanlar
            </h3>
            {sonuc.guclu.length ? (
              <ul className="mt-2.5 grid gap-1.5">
                {sonuc.guclu.map((g) => (
                  <li key={g.beceri} className="text-sm leading-relaxed text-ink/75">
                    <strong className="font-semibold text-ink">{BECERILER[g.beceri]?.ad}</strong> — {g.seviye}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Becerilerin birbirine yakın; hepsi genel seviyende. Bu iyi bir başlangıç: dengeli
                ilerleyebilirsin.
              </p>
            )}
          </div>

          <div className="rounded-card bg-info-500/[0.06] p-5 ring-1 ring-inset ring-info-500/18">
            <h3 className="font-display text-base font-bold text-ink">Geliştirilmesi gerekenler</h3>
            {sonuc.gelisim.length ? (
              <ul className="mt-2.5 grid gap-1.5">
                {sonuc.gelisim.map((g) => (
                  <li key={g.beceri} className="text-sm leading-relaxed text-ink/75">
                    <strong className="font-semibold text-ink">{BECERILER[g.beceri]?.ad}</strong> — {g.seviye}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                Genel seviyenin belirgin biçimde altında kalan bir beceri görünmüyor.
              </p>
            )}
          </div>
        </section>
      )}

      {/* Türkçe düşünme izleri */}
      {sonuc.izler.length > 0 && (
        <section className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <BrainCircuit className="h-4 w-4 text-accent-600" strokeWidth={2.2} aria-hidden="true" />
            Türkçe düşünme alışkanlıkların
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
            Sınavdaki cevaplarında şu aktarım izlerini gördük. Bunlar bilgi eksikliği değil, cümleyi
            önce Türkçe kurup çevirmenin sonucudur — ve düzeltilebilir.
          </p>
          <div className="mt-3 grid gap-2.5">
            {sonuc.izler.map((kod) => {
              const iz = izBul(kod)
              if (!iz) return null
              return (
                <div key={kod} className="rounded-input bg-accent-500/[0.05] px-4 py-3 ring-1 ring-inset ring-accent-500/12">
                  <p className="font-display text-sm font-bold text-ink">{iz.baslik}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{iz.aciklama}</p>
                  <p className="mt-1.5 text-sm text-success-700">
                    <span className="font-semibold">Doğru kalıp: </span>
                    <span lang="en">{iz.dogru}</span>
                  </p>
                </div>
              )
            })}
          </div>
          <Button as={Link} to="/ingilizce/dusunme" variant="secondary" className="mt-4" iconRight={ArrowRight}>
            İngilizce düşünme antrenmanına git
          </Button>
        </section>
      )}

      {/* Başlangıç noktası */}
      {ilkDers && (
        <section className="rounded-card bg-brand-500/[0.07] p-5 ring-1 ring-inset ring-brand-500/18 sm:p-6">
          <h2 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
            <Compass className="h-5 w-5 text-brand-600" strokeWidth={2.1} aria-hidden="true" />
            Buradan başlıyorsun
          </h2>
          <p className="mt-2.5 font-display text-lg font-bold text-ink">{ilkDers.baslik}</p>
          <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">{ilkDers.amac}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/55">
            Neden burası: {ilkDers.seviye} seviyesindeki ilk ders bu ve ön koşulları tamamlanmış
            durumda. Kolay gelirse hızlı geçersin — sistem seni yavaşlatmaz.
          </p>
          <Button as={Link} to={`/ingilizce/ders/${ilkDers.id}`} className="mt-4" iconRight={ArrowRight}>
            Derse başla
          </Button>
        </section>
      )}

      {/* Haftalık program */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Haftalık programın
        </h2>
        <div className="mt-3 grid gap-2">
          {plan.map((gun) => (
            <div
              key={gun.gun}
              className={cn(
                'flex flex-col gap-1 rounded-input px-4 py-3 ring-1 ring-inset sm:flex-row sm:items-center sm:gap-4',
                gun.tur === 'dinlenme' ? 'bg-surface-sunken ring-line' : 'bg-surface ring-line'
              )}
            >
              <span className="w-24 shrink-0 text-sm font-bold text-ink">{gun.gun}</span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.95rem] font-medium text-ink/85">{gun.baslik}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">{gun.aciklama}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* İlk 30 gün */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="font-display text-base font-bold text-ink">İlk 30 günün hedefi</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          Hedefler süreye değil, <strong className="font-semibold text-ink">yaptığın işe</strong>{' '}
          bağlıdır. Erken bitirirsen bir sonraki blok açılır; geç kalırsan plan sessizce yeniden
          düzenlenir.
        </p>
        <ul className="mt-3 grid gap-2.5">
          {otuzGun.maddeler.map((m) => (
            <li key={m.baslik} className="rounded-input bg-surface-muted px-4 py-3 ring-1 ring-inset ring-line">
              <p className="text-[0.95rem] font-semibold text-ink">{m.baslik}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/60">{m.olcut}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <Button as={Link} to="/ingilizce" size="lg" className="justify-center" iconRight={ArrowRight}>
          Çalışmaya başla
        </Button>
        <Button as={Link} to="/ingilizce/yol-haritasi" size="lg" variant="secondary" className="justify-center">
          Yol haritamın tamamını gör
        </Button>
      </div>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */

function Liste({ baslik, maddeler }) {
  return (
    <div>
      <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">{baslik}</p>
      <ul className="mt-1.5 grid gap-1.5">
        {maddeler.map((m) => (
          <li key={m} className="flex items-start gap-2 text-sm leading-relaxed text-ink/75">
            <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/45" aria-hidden="true" />
            {m}
          </li>
        ))}
      </ul>
    </div>
  )
}

function BeceriSatiri({ beceri, seviye, genel, puan }) {
  const fark = seviyeIndeksi(seviye) - seviyeIndeksi(genel)
  const tone = fark > 0 ? 'success' : fark < 0 ? 'warning' : 'neutral'
  const yuzde = Math.max(4, Math.min(100, ((seviyeIndeksi(seviye) + 1) / SEVIYE_SIRASI.length) * 100))

  return (
    <div className="rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-[0.95rem] font-semibold text-ink">
          {BECERILER[beceri]?.ad ?? beceri}
        </span>
        <span className="flex items-center gap-2">
          <Badge tone={tone} size="sm">{seviye}</Badge>
          {fark !== 0 && (
            <span className="text-2xs font-semibold text-ink/45">
              {fark > 0 ? 'genel seviyenin üstünde' : 'genel seviyenin altında'}
            </span>
          )}
        </span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
        <div
          className={cn(
            'h-full rounded-full',
            fark > 0 ? 'bg-success-500' : fark < 0 ? 'bg-warning-500' : 'bg-brand-500'
          )}
          style={{ width: `${yuzde}%` }}
          role="progressbar"
          aria-valuenow={puan ?? 0}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${BECERILER[beceri]?.ad ?? beceri}: ${seviye}`}
        />
      </div>
    </div>
  )
}
