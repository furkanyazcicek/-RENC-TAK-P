import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Button } from '../../components/ui'
import { profilKaydet } from '../../lib/fransizca/ilerleme'
import { BECERILER } from '../../lib/fransizca/seviyeler'
import { YOGUNLUKLAR } from '../../lib/fransizca/yolHaritasi'

/**
 * İlk kullanım akışı — hedef belirleme.
 *
 * TASARIM KARARI: yedi soru var ama hepsi TEK EKRANDA sorulmuyor. Uzun
 * bir form öğrenciyi kaçırır; ekran başına bir soru, büyük dokunma
 * hedefleri ve görünür ilerleme çubuğu tercih edildi.
 *
 * Hiçbir soru zorunlu değil: "Bilmiyorum / geç" seçeneği her adımda var.
 * Cevaplanmayan soru, yol haritasında varsayılan değerle karşılanır ve
 * öğrenci sonradan Profilinden değiştirebilir.
 */

const ADIMLAR = [
  {
    anahtar: 'amac',
    soru: 'Fransızcayı ne için öğreniyorsun?',
    aciklama: 'İçeriğin ağırlığı buna göre değişir: sınav çalışan biriyle konuşma öğrenen biri aynı şeyi çalışmaz.',
    secenekler: [
      { deger: 'okul', ad: 'Okul dersimi desteklemek', not: 'Müfredata paralel gramer ve kelime ağırlıklı' },
      { deger: 'sinav', ad: 'Sınava hazırlanmak', not: 'Okuma, kelime ve gramer yoğun' },
      { deger: 'konusma', ad: 'Konuşabilmek', not: 'Dinleme, telaffuz ve Fransızca düşünme ağırlıklı' },
      { deger: 'seyahat', ad: 'Seyahat ve günlük hayat', not: 'Kalıplar, durumlar, dinleme' },
      { deger: 'akademik', ad: 'Akademik Fransızca', not: 'Okuma, yazma ve akademik kelime' },
      { deger: 'meslek', ad: 'İş hayatı', not: 'Yazışma, sunum, mesleki kelime' },
    ],
  },
  {
    anahtar: 'oncekiDeneyim',
    soru: 'Daha önce Fransızca öğrendin mi?',
    aciklama: 'Seviye tespitine girmezsen başlangıç noktan bu cevaba göre belirlenir.',
    secenekler: [
      { deger: 'hic', ad: 'Hiç öğrenmedim', not: 'Alfabeden başlıyoruz' },
      { deger: 'okul-temel', ad: 'Okulda gördüm ama unuttum', not: 'Temelden hızlı geçiş' },
      { deger: 'orta', ad: 'Anlıyorum ama konuşamıyorum', not: 'Üretim ağırlıklı çalışma' },
      { deger: 'ileri', ad: 'İyi seviyedeyim, ilerletmek istiyorum', not: 'Doğallık ve nüans ağırlıklı' },
    ],
  },
  {
    anahtar: 'yogunluk',
    soru: 'Haftada ne kadar vakit ayırabilirsin?',
    aciklama: 'Gerçekçi ol. Tutamayacağın bir plan, hiç plan olmamasından kötüdür.',
    secenekler: Object.entries(YOGUNLUKLAR).map(([deger, y]) => ({
      deger,
      ad: y.ad,
      not: y.aciklama,
    })),
  },
  {
    anahtar: 'zorlandigiAlanlar',
    soru: 'En çok nerede zorlandığını düşünüyorsun?',
    aciklama: 'Birden fazla seçebilirsin. Bu senin tahminin; ölçüm sonrası güncellenecek.',
    cokluSecim: true,
    secenekler: [
      { deger: 'kelime', ad: 'Kelime bilmiyorum', not: 'Kelime dağarcığı dar' },
      { deger: 'gramer', ad: 'Dil bilgisi karışıyor', not: 'Zamanlar, yapılar' },
      { deger: 'dizim', ad: 'Cümle kuramıyorum', not: 'Kelimeleri biliyorum ama birleştiremiyorum' },
      { deger: 'dinleme', ad: 'Dinlediğimi anlamıyorum', not: 'Hızlı konuşulduğunda kayboluyorum' },
      { deger: 'telaffuz', ad: 'Telaffuzum kötü', not: 'Söylediğimi anlamıyorlar' },
      { deger: 'yazma', ad: 'Yazamıyorum', not: 'Metin kuramıyorum' },
      { deger: 'dusunme', ad: 'Önce Türkçe düşünüyorum', not: 'Kelime kelime çeviriyorum' },
    ],
  },
  {
    anahtar: 'duzey',
    soru: 'Hangi öğrenim düzeyindesin?',
    aciklama: 'İçeriğin dili ve örnekleri buna göre seçilir.',
    secenekler: [
      { deger: 'ortaokul', ad: 'Ortaokul', not: '5–8. sınıf' },
      { deger: 'lise', ad: 'Lise', not: '9–12. sınıf' },
      { deger: 'universite', ad: 'Üniversite', not: 'Hazırlık ya da lisans' },
      { deger: 'yetiskin', ad: 'Yetişkin', not: 'Okul dışında öğreniyorum' },
    ],
  },
]

export default function Baslangic() {
  const yonlendir = useNavigate()
  const [adim, setAdim] = useState(0)
  const [cevaplar, setCevaplar] = useState({ zorlandigiAlanlar: [] })

  const suanki = ADIMLAR[adim]
  const sonMu = adim === ADIMLAR.length - 1
  const mevcut = cevaplar[suanki.anahtar]
  const secildiMi = suanki.cokluSecim ? (mevcut?.length ?? 0) > 0 : Boolean(mevcut)

  const sec = (deger) => {
    if (suanki.cokluSecim) {
      const liste = cevaplar[suanki.anahtar] ?? []
      setCevaplar({
        ...cevaplar,
        [suanki.anahtar]: liste.includes(deger)
          ? liste.filter((d) => d !== deger)
          : [...liste, deger],
      })
      return
    }
    setCevaplar({ ...cevaplar, [suanki.anahtar]: deger })
    // Tek seçimli sorularda seçim yapınca kendiliğinden ilerle — fazladan
    // bir dokunuş istemenin bir faydası yok.
    if (!sonMu) window.setTimeout(() => setAdim((a) => a + 1), 180)
  }

  const bitir = () => {
    profilKaydet(cevaplar)
    yonlendir('/fransizca/seviye-tespit')
  }

  return (
    <AppShell title="Fransızca" subtitle="Önce seni tanıyalım" width="narrow">
      <div>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {ADIMLAR.map((_, i) => (
            <span
              key={i}
              className={cn(
                'h-1.5 flex-1 rounded-full transition',
                i <= adim ? 'bg-aurora-line' : 'bg-surface-sunken'
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-ink/50 tabular">
          Soru {adim + 1} / {ADIMLAR.length}
        </p>
      </div>

      <section>
        <h1 className="font-display text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]">
          {suanki.soru}
        </h1>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/60">{suanki.aciklama}</p>

        <div className="mt-5 grid gap-2.5" role="group" aria-label={suanki.soru}>
          {suanki.secenekler.map((s) => {
            const seciliMi = suanki.cokluSecim
              ? (mevcut ?? []).includes(s.deger)
              : mevcut === s.deger
            return (
              <button
                key={s.deger}
                type="button"
                aria-pressed={seciliMi}
                onClick={() => sec(s.deger)}
                className={cn(
                  'focus-ring flex min-h-[3.75rem] w-full items-center gap-3.5 rounded-card px-4 py-3.5 text-left transition',
                  'ring-1 ring-inset',
                  seciliMi
                    ? 'bg-brand-500/[0.1] ring-brand-500/30'
                    : 'bg-surface ring-line hover:bg-brand-500/[0.05] hover:ring-brand-500/20'
                )}
              >
                <span
                  className={cn(
                    'grid h-6 w-6 shrink-0 place-items-center rounded-full ring-1 ring-inset transition',
                    seciliMi
                      ? 'bg-brand-600 text-white ring-brand-600'
                      : 'bg-surface-sunken text-transparent ring-line-strong'
                  )}
                  aria-hidden="true"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-[0.98rem] font-semibold text-ink">{s.ad}</span>
                  <span className="mt-0.5 block text-sm leading-relaxed text-ink/55">{s.not}</span>
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button
          variant="ghost"
          icon={ArrowLeft}
          onClick={() => setAdim((a) => Math.max(0, a - 1))}
          disabled={adim === 0}
        >
          Geri
        </Button>

        <div className="flex flex-wrap gap-2">
          <Button
            variant="ghost"
            onClick={() => (sonMu ? bitir() : setAdim((a) => a + 1))}
          >
            {sonMu ? 'Bu soruyu geç ve bitir' : 'Bu soruyu geç'}
          </Button>
          {sonMu ? (
            <Button icon={Sparkles} onClick={bitir} disabled={!secildiMi}>
              Seviye tespitine geç
            </Button>
          ) : (
            <Button
              iconRight={ArrowRight}
              onClick={() => setAdim((a) => a + 1)}
              disabled={!secildiMi}
            >
              Devam
            </Button>
          )}
        </div>
      </div>

      {cevaplar.zorlandigiAlanlar?.length > 0 && adim === 3 && (
        <p className="text-sm leading-relaxed text-ink/55">
          Seçtiklerin: {cevaplar.zorlandigiAlanlar.map((z) => BECERILER[z]?.kisa ?? z).join(', ')}.
          Bu alanlara yol haritanda fazladan pay ayrılacak.
        </p>
      )}
    </AppShell>
  )
}
