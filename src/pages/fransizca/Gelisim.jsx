import { Link } from 'react-router-dom'
import { AlertTriangle, Download, Flame, RotateCcw, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button, Modal } from '../../components/ui'
import { useIlerleme } from '../../components/fransizca/useFransizca'
import { DERSLER, KELIME_HAVUZU } from '../../content/fransizca'
import {
  disariAktar, DURUMLAR, DURUM_ETIKETLERI, ilerlemeyiSil, seriHesapla, sikIzler, sonGunler,
} from '../../lib/fransizca/ilerleme'
import { BECERILER, SEVIYELER } from '../../lib/fransizca/seviyeler'
import { bekleyenSayisi, kartOzeti } from '../../lib/fransizca/tekrar'
import { izBul } from '../../lib/fransizca/turkceIzleri'
import { baslangicSeviyesi, seviyeTamamlanmaDurumu } from '../../lib/fransizca/yolHaritasi'

/**
 * Gelişim ekranı.
 *
 * TASARIM KARARI — GRAFİK KALABALIĞI YOK: burada tek bir zaman şeridi var,
 * o da "hangi günler çalıştım" sorusunu cevaplıyor. Beceri durumları çubuk
 * grafiğe değil, okunabilir satırlara dönüştürüldü çünkü öğrencinin
 * vereceği karar "hangi beceriye çalışayım" — bunun için grafiğe gerek yok.
 *
 * İlerleme "tamamlanan ders yüzdesi" olarak sunulmuyor. Her beceri, her
 * ders ve her kelime için AYRI ustalık durumu var: başlanmadı, çalışılıyor,
 * tamamlandı, tekrar gerekli, güçleniyor, ustalaşıldı.
 */
export default function Gelisim() {
  const ilerleme = useIlerleme()
  const [silmeAcik, setSilmeAcik] = useState(false)
  const seviye = baslangicSeviyesi(ilerleme)
  const seri = seriHesapla(ilerleme)
  const gunler = sonGunler(14, ilerleme)
  const ozet = kartOzeti(ilerleme.kartlar ?? {})
  const bekleyen = bekleyenSayisi(ilerleme.kartlar ?? {})
  const durum = seviyeTamamlanmaDurumu(ilerleme, DERSLER, seviye)
  const izler = sikIzler(ilerleme, 5)

  const dersDurumlari = DERSLER.map((d) => ({
    ders: d,
    kayit: ilerleme.dersler?.[d.id],
  })).filter((x) => x.kayit)

  const toplamDakika = Object.values(ilerleme.gunluk ?? {}).reduce((t, g) => t + (g.dakika ?? 0), 0)
  const toplamAlistirma = Object.values(ilerleme.gunluk ?? {}).reduce((t, g) => t + (g.alistirma ?? 0), 0)

  const disaAktar = () => {
    const veri = disariAktar()
    const blob = new Blob([veri], { type: 'application/json' })
    const adres = URL.createObjectURL(blob)
    const bag = document.createElement('a')
    bag.href = adres
    bag.download = `drkoc-fransizca-ilerleme-${new Date().toISOString().slice(0, 10)}.json`
    bag.click()
    URL.revokeObjectURL(adres)
  }

  return (
    <AppShell title="Gelişimim" subtitle={`${seviye} · ${SEVIYELER[seviye]?.ad ?? ''}`}>
      {/* Üst özet — dört sayı, grafik yok */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Metrik etiket="Kesintisiz seri" deger={seri ? `${seri} gün` : '—'} Icon={Flame} />
        <Metrik etiket="Toplam çalışma" deger={`${toplamDakika} dk`} />
        <Metrik etiket="Çözülen alıştırma" deger={toplamAlistirma} />
        <Metrik etiket="Tekrar bekleyen" deger={`${bekleyen} kelime`} />
      </section>

      {/* Çalışma şeridi */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="font-display text-base font-bold text-ink">Son iki hafta</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">
          Boş günler için sitem yok — sistem planı sessizce yeniden düzenler. Buradaki amaç yalnızca
          düzenini görmen.
        </p>
        <div className="mt-3.5 flex items-end gap-1.5" role="img" aria-label="Son 14 günün çalışma yoğunluğu">
          {gunler.map((g) => {
            const yogunluk = Math.min(1, (g.alistirma ?? 0) / 12)
            return (
              <div key={g.gun} className="flex min-w-0 flex-1 flex-col items-center gap-1.5">
                <div
                  className={cn(
                    'w-full rounded-md transition',
                    g.alistirma ? 'bg-brand-500' : 'bg-surface-sunken'
                  )}
                  style={{
                    height: `${g.alistirma ? 12 + yogunluk * 40 : 8}px`,
                    opacity: g.alistirma ? 0.35 + yogunluk * 0.65 : 1,
                  }}
                  title={`${g.gun}: ${g.alistirma} alıştırma, ${g.dakika} dakika`}
                />
                <span className="text-[0.6rem] text-ink/35 tabular">
                  {g.tarih.getDate()}
                </span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Beceriler */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Beceri beceri durumun
        </h2>
        <div className="mt-3 grid gap-2">
          {Object.keys(BECERILER).map((beceri) => {
            const kayit = ilerleme.beceriler?.[beceri]
            return (
              <div
                key={beceri}
                className="flex flex-wrap items-center gap-3 rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line"
              >
                <span className="min-w-0 flex-1 text-[0.95rem] font-semibold text-ink">
                  {BECERILER[beceri].ad}
                </span>
                {kayit?.puan != null ? (
                  <>
                    <div className="h-1.5 w-24 shrink-0 overflow-hidden rounded-full bg-surface-sunken sm:w-40">
                      <div
                        className="h-full rounded-full bg-aurora-line"
                        style={{ width: `${kayit.puan}%` }}
                        role="progressbar"
                        aria-valuenow={kayit.puan}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={`${BECERILER[beceri].ad} gelişimi`}
                      />
                    </div>
                    <span className="w-10 shrink-0 text-right text-sm font-semibold text-ink/60 tabular">
                      {kayit.puan}
                    </span>
                  </>
                ) : (
                  <span className="text-sm text-ink/40">Henüz ölçülmedi</span>
                )}
              </div>
            )
          })}
        </div>
        <p className="mt-2 text-xs leading-relaxed text-ink/45">
          Bu sayılar bir not değil, bir eğilim göstergesidir. Yeni ölçüm eskisine %30 ağırlıkla
          karışır; tek bir kötü gün tabloyu bozmaz.
        </p>
      </section>

      {/* Dersler */}
      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Ders durumların
        </h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
          {seviye} seviyesinde {durum.tamam} / {durum.toplam} ders tamamlandı. Bir dersi açmak
          tamamlamak sayılmaz — durum yalnız çözdüğün alıştırmalara göre değişir.
        </p>
        {dersDurumlari.length === 0 ? (
          <p className="mt-3 rounded-card bg-surface-muted px-5 py-6 text-center text-sm text-ink/55 ring-1 ring-inset ring-line">
            Henüz bir derse başlamadın.
          </p>
        ) : (
          <div className="mt-3 grid gap-2">
            {dersDurumlari.map(({ ders, kayit }) => {
              const etiket = DURUM_ETIKETLERI[kayit.durum] ?? DURUM_ETIKETLERI[DURUMLAR.BASLANMADI]
              return (
                <Link
                  key={ders.id}
                  to={`/fransizca/ders/${ders.id}`}
                  className="focus-ring flex flex-wrap items-center gap-3 rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line transition hover:ring-brand-500/25"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-[0.95rem] font-semibold text-ink">{ders.baslik}</span>
                    <span className="mt-0.5 block text-sm text-ink/50">
                      {ders.seviye}
                      {kayit.deneme > 0
                        ? ` · ${kayit.deneme} deneme`
                        : ' · başladın, henüz bitirmedin'}
                      {kayit.enIyiOran != null && ` · en iyi %${kayit.enIyiOran}`}
                    </span>
                  </span>
                  <Badge tone={etiket.tone} size="sm">{etiket.ad}</Badge>
                </Link>
              )
            })}
          </div>
        )}
      </section>

      {/* Kelime durumu */}
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <h2 className="font-display text-base font-bold text-ink">Kelime kalıcılığı</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink/60">
          Havuzda {KELIME_HAVUZU.length} kelime var. Bir kelime dört boyutta da sağlamsa
          "ustalaşıldı" sayılır: tanıma, bağlamda anlama, doğru yazma ve kendi cümlende kullanma.
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {Object.entries(ozet).map(([d, n]) => (
            <div key={d} className="flex items-center justify-between gap-3 rounded-input bg-surface-muted px-3.5 py-2.5">
              <Badge tone={DURUM_ETIKETLERI[d].tone} size="sm">{DURUM_ETIKETLERI[d].ad}</Badge>
              <span className="text-sm font-semibold text-ink/70 tabular">{n}</span>
            </div>
          ))}
        </div>
        <Button as={Link} to="/fransizca/tekrar" variant="secondary" size="sm" className="mt-3">
          Tekrar oturumuna git
        </Button>
      </section>

      {/* Türkçe düşünme izleri */}
      {izler.length > 0 && (
        <section className="rounded-card bg-accent-500/[0.05] p-5 ring-1 ring-inset ring-accent-500/12">
          <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
            <TrendingUp className="h-4 w-4 text-accent-600" strokeWidth={2.2} aria-hidden="true" />
            Türkçe düşünme izlerin
          </h2>
          <div className="mt-3 grid gap-2">
            {izler.map((k) => {
              const iz = izBul(k.kod)
              if (!iz) return null
              return (
                <div key={k.kod} className="flex flex-wrap items-center gap-2.5 rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line">
                  <span className="min-w-0 flex-1 text-[0.95rem] font-medium text-ink">{iz.baslik}</span>
                  <Badge tone="warning" size="sm">{k.sayi} kez</Badge>
                </div>
              )
            })}
          </div>
          <Button as={Link} to="/fransizca/dusunme" variant="secondary" size="sm" className="mt-3">
            Bu izler üzerine antrenman yap
          </Button>
        </section>
      )}

      {/* Veri yönetimi */}
      <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
        <h2 className="font-display text-base font-bold text-ink">Verilerin</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
          Fransızca ilerlemen şu an <strong className="font-semibold text-ink">yalnızca bu
          tarayıcıda</strong> saklanıyor. Tarayıcı verilerini silersen ya da başka bir cihaza
          geçersen kaybolur. Yedek almak için aşağıdaki düğmeyi kullanabilirsin.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button onClick={disaAktar} variant="secondary" size="sm" icon={Download}>
            Yedek indir
          </Button>
          <Button onClick={() => setSilmeAcik(true)} variant="ghost" size="sm" icon={RotateCcw}>
            İlerlemeyi sıfırla
          </Button>
        </div>
      </section>

      <Modal open={silmeAcik} onClose={() => setSilmeAcik(false)} title="İlerlemeyi sıfırla">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning-600" aria-hidden="true" />
          <p className="text-[0.95rem] leading-relaxed text-ink/75">
            Ders durumların, kelime kartların, seviye tespit sonucun ve hata defterin silinecek.
            Bu işlem geri alınamaz. Önce yedek indirmek ister misin?
          </p>
        </div>
        <div className="mt-5 flex flex-wrap justify-end gap-2">
          <Button variant="secondary" onClick={() => setSilmeAcik(false)}>Vazgeç</Button>
          <Button variant="secondary" icon={Download} onClick={disaAktar}>Önce yedek al</Button>
          <Button
            variant="danger"
            onClick={() => { ilerlemeyiSil('FRANSIZCA-SIFIRLA'); setSilmeAcik(false) }}
          >
            Evet, sıfırla
          </Button>
        </div>
      </Modal>
    </AppShell>
  )
}

function Metrik({ etiket, deger, Icon }) {
  return (
    <div className="rounded-card border border-line bg-surface px-4 py-3.5 shadow-card">
      <p className="flex items-center gap-1.5 text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">
        {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
        {etiket}
      </p>
      <p className="mt-1.5 font-display text-xl font-bold text-ink tabular">{deger}</p>
    </div>
  )
}
