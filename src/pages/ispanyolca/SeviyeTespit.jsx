import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Info, Target } from 'lucide-react'
import { AppShell, Button, Textarea } from '../../components/ui'
import Alistirma from '../../components/ispanyolca/alistirmalar/Alistirma'
import { SesUyarisi } from '../../components/ispanyolca/SesDugmesi'
import { useIlerleme, useSes } from '../../components/ispanyolca/useIspanyolca'
import { TESPIT_MADDELERI, TESPIT_YAZMA_GOREVI } from '../../content/ispanyolca'
import { tespitKaydet } from '../../lib/ispanyolca/ilerleme'
import {
  bosOturum, cevapIsle, sonrakiSoru, sonucla, SORU_BUTCESI, yazmaEkle,
} from '../../lib/ispanyolca/seviyeTespit'

/**
 * Uyarlanabilir seviye tespit sınavı.
 *
 * ÜÇ AŞAMA: tanıtım → uyarlanabilir sorular → kısa yazma görevi.
 *
 * Sınav sırasında doğru/yanlış GÖSTERİLMEZ (`olcumModu`). Sebep: geri
 * bildirim gören öğrenci sonraki soruda kalıbı taklit eder ve ölçüm bozulur.
 * Bütün geri bildirim sonuç ekranında toplu olarak verilir.
 *
 * İlerleme çubuğu "kaç soru kaldı" değil, "ne kadar ilerledin" gösterir —
 * uyarlanabilir sınavda soru sayısı öğrenciye göre değişebilir.
 */
export default function SeviyeTespit() {
  const yonlendir = useNavigate()
  const ilerleme = useIlerleme()
  const ses = useSes()
  const [asama, setAsama] = useState('tanitim')
  const [oturum, setOturum] = useState(bosOturum)
  const [yazma, setYazma] = useState('')

  const dinlemeAcik = ses?.hazir === true
  const soru = useMemo(
    () => (asama === 'sorular' ? sonrakiSoru(oturum, TESPIT_MADDELERI, { dinlemeAcik }) : null),
    [asama, oturum, dinlemeAcik]
  )

  const cevapla = (_sonuc, cevap) => {
    const yeniOturum = cevapIsle(oturum, soru, cevap)
    const devam = sonrakiSoru(yeniOturum, TESPIT_MADDELERI, { dinlemeAcik })
    setOturum(yeniOturum)
    if (!devam) setAsama('yazma')
  }

  const bitir = (metinle) => {
    const sonOturum = metinle && yazma.trim()
      ? yazmaEkle(oturum, TESPIT_YAZMA_GOREVI, yazma)
      : oturum
    const sonuc = sonucla(sonOturum, ilerleme.profil, { dinlemeOlculdu: dinlemeAcik })
    tespitKaydet(sonuc)
    yonlendir('/ispanyolca/sonuc')
  }

  /* ---------------- Tanıtım ---------------- */
  if (asama === 'tanitim') {
    return (
      <AppShell title="Seviye tespiti" subtitle="Yaklaşık 10 dakika" width="narrow">
        <section className="rounded-card border border-line bg-surface p-6 shadow-card">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
            <Target className="h-6 w-6" strokeWidth={2.1} aria-hidden="true" />
          </span>
          <h1 className="mt-4 font-display text-2xl font-bold leading-tight text-ink">
            Seviyeni ölçelim
          </h1>
          <div className="mt-3 grid gap-2.5 text-[0.95rem] leading-relaxed text-ink/70">
            <p>
              Sorular cevaplarına göre <strong className="font-semibold text-ink">zorlaşıp
              kolaylaşır</strong>. Arka arkaya doğru yaparsan zorlaşır, zorlandığında geri çekilir.
              Bu yüzden hem sıfırdan başlayan hem ileri seviyedeki öğrenci aynı sınava girebilir.
            </p>
            <p>
              Bilmediğin bir soruda <strong className="font-semibold text-ink">"Bilmiyorum, geç"</strong>{' '}
              diyebilirsin. Boş bırakmak yanlış cevaptan daha doğru bir ölçüm verir.
            </p>
            <p>
              Sonunda kısa bir yazma görevi var. Ne kadar yazabiliyorsan o kadar yaz — az yazman
              sonucu bozmaz, yalnız yazma alanı hakkında daha az bilgi verir.
            </p>
          </div>

          <SesUyarisi durum={ses} className="mt-4" />

          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
            <Button onClick={() => setAsama('sorular')} size="lg" className="justify-center">
              Sınava başla
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="justify-center"
              onClick={() => yonlendir('/ispanyolca')}
            >
              Sonra yaparım
            </Button>
          </div>
        </section>
      </AppShell>
    )
  }

  /* ---------------- Sorular ---------------- */
  if (asama === 'sorular' && soru) {
    const oran = Math.round((oturum.adim / SORU_BUTCESI) * 100)
    return (
      <AppShell title="Seviye tespiti" subtitle="Doğru ya da yanlış gösterilmiyor — bu bir ölçüm" width="narrow">
        <div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
            <div
              className="h-full rounded-full bg-aurora-line transition-[width] duration-300"
              style={{ width: `${Math.min(100, oran)}%` }}
              role="progressbar"
              aria-valuenow={Math.min(100, oran)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Sınav ilerlemesi"
            />
          </div>
          <p className="mt-2 text-xs text-ink/50 tabular">
            {oturum.adim} soru cevaplandı
          </p>
        </div>

        <Alistirma
          key={soru.id}
          alistirma={soru}
          sesHazir={dinlemeAcik}
          olcumModu
          atlanabilir
          onSonuc={cevapla}
        />

        <p className="flex items-start gap-2 text-xs leading-relaxed text-ink/45">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          Sınav sırasında cevabının doğru olup olmadığını göstermiyoruz. Geri bildirim sonuç
          ekranında toplu olarak verilecek.
        </p>
      </AppShell>
    )
  }

  /* ---------------- Yazma ---------------- */
  return (
    <AppShell title="Seviye tespiti" subtitle="Son adım: kısa yazma" width="narrow">
      <section className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
        <h1 className="font-display text-xl font-bold leading-snug text-ink">
          Son adım — kendini kısaca tanıt
        </h1>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
          İspanyolca yaz: kim olduğun, nerede yaşadığın, ne yaptığın ve neden İspanyolca öğrendiğin.
          Hata yapmaktan çekinme; burada amaç seni ölçmek, not vermek değil.
        </p>
        <p className="mt-2 rounded-input bg-info-500/[0.06] px-4 py-3 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-info-500/15">
          Bu metinden yalnız <strong className="font-semibold text-ink">sayılabilen</strong> şeylere
          bakıyoruz: uzunluk, kullandığın yapılar, bağlaçlar ve Türkçeden birebir çeviri izleri.
          İçerik kalitesine puan verilmez.
        </p>

        <Textarea
          value={yazma}
          onChange={(e) => setYazma(e.target.value)}
          rows={8}
          lang="es"
          placeholder="Écris quelques phrases sur toi en français…"
          aria-label="Kendini tanıtan metin"
          className="mt-4"
        />
        <p className="mt-1.5 text-xs text-ink/50 tabular">
          {yazma.trim() ? yazma.trim().split(/\s+/).length : 0} kelime
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:justify-end">
          <Button variant="ghost" onClick={() => bitir(false)}>
            Yazmadan bitir
          </Button>
          <Button onClick={() => bitir(true)} disabled={!yazma.trim()}>
            Sonucumu gör
          </Button>
        </div>
      </section>
    </AppShell>
  )
}
