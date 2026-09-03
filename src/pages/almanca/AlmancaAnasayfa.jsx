import { Link } from 'react-router-dom'
import {
  ArrowRight, BookOpen, BrainCircuit, CalendarCheck, Compass, GraduationCap,
  LibraryBig, LineChart, Mic, RefreshCw, Sparkles, Target,
} from 'lucide-react'
import { AppShell, Badge, Button, ProgressBar } from '../../components/ui'
import { DashboardHero } from '../../components/dashboard'
import { useIlerleme } from '../../components/almanca/useAlmanca'
import { DERSLER, KELIME_HAVUZU } from '../../content/almanca'
import { baslangicTamamMi, seriHesapla, tespitTamamMi } from '../../lib/almanca/ilerleme'
import { SEVIYELER } from '../../lib/almanca/seviyeler'
import { bekleyenSayisi } from '../../lib/almanca/tekrar'
import { baslangicSeviyesi, bugunPlani, seviyeTamamlanmaDurumu } from '../../lib/almanca/yolHaritasi'

/**
 * Almanca ana sayfası.
 *
 * TASARIM KARARI: bu sayfa bir gösterge paneli DEĞİLDİR. Öğrencinin
 * ekrana girdiğinde tek bir soruya cevap alması gerekir: "Bugün ne
 * yapmalıyım?" Bu yüzden ilk ve en büyük şey bugünün görev listesidir;
 * grafikler ve sayılar aşağıya, hatta ayrı bir ekrana (Gelişim) alındı.
 *
 * Üç farklı durum vardır ve sayfa buna göre tamamen değişir:
 *   1. Hiç başlamamış  → ne olduğunu anlat, tek bir düğme göster
 *   2. Hedefi var ama seviyesi ölçülmemiş → sınava yönlendir
 *   3. Yolu kurulmuş → bugünün görevleri
 */

const GOREV_IKONLARI = {
  tekrar: RefreshCw,
  ders: BookOpen,
  destek: Target,
  dusunme: BrainCircuit,
  telaffuz: Mic,
  degerlendirme: GraduationCap,
}

export default function AlmancaAnasayfa() {
  const ilerleme = useIlerleme()
  const basladiMi = baslangicTamamMi(ilerleme)
  const tespitVar = tespitTamamMi(ilerleme)

  if (!basladiMi) return <Tanitim />
  if (!tespitVar) return <TespitBekliyor ilerleme={ilerleme} />
  return <GunlukAkis ilerleme={ilerleme} />
}

/* ------------------------------------------------------------------ */
/* 1 — Hiç başlamamış                                                  */
/* ------------------------------------------------------------------ */

function Tanitim() {
  return (
    <AppShell
      title="Almanca"
      subtitle="Sıfırdan ileri düzeye, kendi hızında"
      width="narrow"
    >
      <DashboardHero
        eyebrow="Almanca Öğrenme Kütüphanesi"
        title="Nereden başlayacağını biz bulalım"
        subtitle="Önce hedefini soruyoruz, sonra kısa bir seviye tespitiyle nerede olduğunu ölçüyoruz. Sonunda sana özel bir çalışma yolu çıkıyor."
      />

      <section className="grid gap-4 sm:grid-cols-3">
        {[
          {
            Icon: Compass,
            baslik: 'Hedefini sor',
            metin: 'Okul, sınav, konuşma, seyahat ya da iş — hangisi olduğuna göre içerik değişir.',
          },
          {
            Icon: Target,
            baslik: 'Seviyeni ölç',
            metin: 'Sorular cevaplarına göre zorlaşıp kolaylaşır. Sıfırsan zorlanmazsın, ileriysen hafife alınmazsın.',
          },
          {
            Icon: CalendarCheck,
            baslik: 'Yolunu kur',
            metin: 'Her gün ne çalışacağını, neden çalışacağını ve ne zaman tekrar edeceğini söyler.',
          },
        ].map(({ Icon, baslik, metin }) => (
          <div key={baslik} className="rounded-card border border-line bg-surface p-5 shadow-card">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
              <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
            </span>
            <h3 className="mt-3.5 font-display text-base font-bold text-ink">{baslik}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{metin}</p>
          </div>
        ))}
      </section>

      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line sm:p-6">
        <h2 className="font-display text-lg font-bold text-ink">Bu bölüm neyi farklı yapıyor?</h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
          Türkçe konuşan öğrencilerin en büyük engeli kelime bilmemek değil, her cümleyi önce
          Türkçe kurup sonra kelime kelime çevirmek. Buradaki alıştırmaların çoğu
          <strong className="font-semibold text-ink"> "şu Türkçe cümleyi çevir" demez</strong>; bir
          durum verir ve o durumda Almanca ne söylendiğini sorar. Yanlış yaptığında da yalnız
          doğrusunu göstermez — hatanın Türkçe düşünmeden nasıl doğduğunu anlatır ve doğru kalıbı
          hemen bir kez daha kullandırır.
        </p>
      </section>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button as={Link} to="/almanca/baslangic" size="lg" icon={Sparkles} className="justify-center">
          Başlayalım
        </Button>
        <Button as={Link} to="/almanca/kilavuz" size="lg" variant="secondary" className="justify-center">
          Önce nasıl çalışacağımı okuyayım
        </Button>
      </div>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */
/* 2 — Hedef var, seviye ölçülmemiş                                    */
/* ------------------------------------------------------------------ */

function TespitBekliyor({ ilerleme }) {
  const seviye = baslangicSeviyesi(ilerleme)
  return (
    <AppShell title="Almanca" subtitle="Sıradaki adım: seviye tespiti" width="narrow">
      <DashboardHero
        eyebrow="Sıradaki adım"
        title="Seviyeni ölçelim"
        subtitle="Yaklaşık 10 dakika. Sorular cevaplarına göre zorlaşıp kolaylaşır; bilmediğin bir şey çıkarsa boş bırakabilirsin."
      />

      <div className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
        <h2 className="font-display text-lg font-bold text-ink">Sınav neleri ölçüyor?</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            'Kelime bilgisi ve kelimeyi bağlamda anlama',
            'Dil bilgisi ve cümle dizimi',
            'Okuduğunu anlama',
            'Dinlediğini anlama (cihazında Almanca ses varsa)',
            'Telaffuz farkındalığı',
            'Türkçeden birebir çeviri eğilimi',
            'Kısa bir yazma görevi',
          ].map((m) => (
            <li key={m} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/75">
              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/50" aria-hidden="true" />
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-4 rounded-input bg-info-500/[0.06] px-4 py-3 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-info-500/15">
          Sınava girmeden de çalışmaya başlayabilirsin. O durumda kendi beyanına göre{' '}
          <strong className="font-semibold text-ink">{seviye}</strong> seviyesinden başlarız ve
          çalıştıkça seviyeni kendiliğinden düzeltiriz — ama tespit çok daha isabetli olur.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button as={Link} to="/almanca/seviye-tespit" size="lg" icon={Target} className="justify-center">
          Seviye tespitine başla
        </Button>
        <Button as={Link} to="/almanca/kutuphane" size="lg" variant="secondary" className="justify-center">
          Sınavsız devam et
        </Button>
      </div>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */
/* 3 — Günlük akış                                                     */
/* ------------------------------------------------------------------ */

function GunlukAkis({ ilerleme }) {
  const seviye = baslangicSeviyesi(ilerleme)
  const seviyeBilgi = SEVIYELER[seviye]
  const { gorevler, toplamDakika, yogunluk } = bugunPlani(ilerleme, {
    dersler: DERSLER,
    kelimeler: KELIME_HAVUZU,
  })
  const seri = seriHesapla(ilerleme)
  const bekleyen = bekleyenSayisi(ilerleme.kartlar ?? {})
  const seviyeDurum = seviyeTamamlanmaDurumu(ilerleme, DERSLER, seviye)

  return (
    <AppShell
      title="Almanca"
      subtitle={`${seviye} · ${seviyeBilgi?.ad ?? ''}`}
      headerAction={
        <Button as={Link} to="/almanca/gelisim" variant="ghost" size="sm" icon={LineChart}>
          Gelişimim
        </Button>
      }
    >
      <DashboardHero
        eyebrow="Bugün"
        title={gorevler.length ? 'Bugünün çalışması hazır' : 'Bugünlük her şey tamam'}
        subtitle={
          gorevler.length
            ? `${gorevler.length} iş · yaklaşık ${toplamDakika} dakika. Sırayla ilerle; ilk sıradaki en önemlisi.`
            : 'Bugün için planlanan işleri bitirdin. İstersen kütüphaneden serbest çalışabilirsin.'
        }
        badge={seri > 0 ? { label: `${seri} gün üst üste`, tone: 'glass' } : undefined}
        highlights={[
          { label: 'Seviye', value: seviye },
          { label: 'Günlük hedef', value: `${yogunluk.gunlukDakika} dk` },
          ...(bekleyen ? [{ label: 'Tekrar bekleyen', value: `${bekleyen} kelime` }] : []),
        ]}
      />

      {/* Bugünün görevleri — sayfanın kahramanı */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Bugün ne yapmalıyım?
        </h2>
        {gorevler.length === 0 ? (
          <div className="mt-3 rounded-card border border-line bg-surface p-6 text-center shadow-card">
            <p className="text-[0.95rem] leading-relaxed text-ink/70">
              Bugünkü planı bitirdin. Yeni bir şey çalışmak istersen kütüphaneye göz atabilirsin.
            </p>
            <Button as={Link} to="/almanca/kutuphane" variant="secondary" className="mt-4">
              Kütüphaneye git
            </Button>
          </div>
        ) : (
          <ol className="mt-3 grid gap-3">
            {gorevler.map((gorev, i) => {
              const Icon = GOREV_IKONLARI[gorev.tur] ?? BookOpen
              return (
                <li key={gorev.id}>
                  <Link
                    to={gorev.rota}
                    className="focus-ring group flex items-start gap-4 rounded-card border border-line bg-surface p-5 shadow-card transition hover:border-brand-500/30 hover:shadow-card-hover"
                  >
                    <span
                      className={
                        i === 0
                          ? 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-aurora-gradient text-white shadow-aurora'
                          : 'grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15'
                      }
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-base font-bold leading-snug text-ink">
                          {gorev.baslik}
                        </span>
                        <Badge tone="neutral" size="sm">{gorev.dakika} dk</Badge>
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink/60">
                        {gorev.neden}
                      </span>
                    </span>
                    <ArrowRight
                      className="mt-2 h-5 w-5 shrink-0 text-ink/25 transition group-hover:translate-x-0.5 group-hover:text-brand-600"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              )
            })}
          </ol>
        )}
      </section>

      {/* Seviye ilerlemesi — tek çubuk, grafik yığını değil */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-display text-base font-bold text-ink">
            {seviye} seviyesi
          </h2>
          <span className="text-sm text-ink/55 tabular">
            {seviyeDurum.tamam} / {seviyeDurum.toplam} ders
          </span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">{seviyeBilgi?.ozet}</p>
        <ProgressBar value={seviyeDurum.oran} className="mt-3" tone="aurora" />
        <p className="mt-2 text-xs leading-relaxed text-ink/50">
          {seviyeDurum.hazir
            ? 'Bu seviyenin derslerinin çoğunu bitirdin. Seviye sonu değerlendirmesine girebilirsin.'
            : 'Bir seviye, derslerinin en az %80\'i tamamlandığında bitmiş sayılır. Süreye değil, yaptığın işe bakıyoruz.'}
        </p>
      </section>

      {/* Bölümler */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Bölümler
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {[
            { to: '/almanca/kutuphane', Icon: LibraryBig, ad: 'Ders kütüphanesi', not: 'Seviyelere ve modüllere göre bütün dersler' },
            { to: '/almanca/yol-haritasi', Icon: CalendarCheck, ad: 'Yol haritam', not: 'Haftalık plan, 30 günlük hedef, kontrol noktaları' },
            { to: '/almanca/tekrar', Icon: RefreshCw, ad: 'Kelime ve tekrar', not: 'Aralıklı tekrar — unutmadan önce hatırla' },
            { to: '/almanca/telaffuz', Icon: Mic, ad: 'Telaffuz laboratuvarı', not: 'Türkçede olmayan sesler, vurgu, ritim, kendi kaydın' },
            { to: '/almanca/dusunme', Icon: BrainCircuit, ad: 'Almanca düşünme', not: 'Çeviri alışkanlığını kıran antrenmanlar' },
            { to: '/almanca/kilavuz', Icon: Compass, ad: 'Çalışma kılavuzu', not: 'Bu bölüm nasıl kullanılır, nereden başlanır' },
          ].map(({ to, Icon, ad, not }) => (
            <Link
              key={to}
              to={to}
              className="focus-ring group flex items-start gap-3.5 rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-brand-500/30 hover:shadow-card-hover"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Icon className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-[0.98rem] font-semibold text-ink">{ad}</span>
                <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">{not}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </AppShell>
  )
}
