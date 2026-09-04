import { useCallback, useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, Check, RotateCcw, RefreshCw, Shuffle, Sparkles, Star, X,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button, EmptyState, ProgressBar } from '../../components/ui'
import SesDugmesi from '../../components/ispanyolca/SesDugmesi'
import { useSes } from '../../components/ispanyolca/useIspanyolca'
import { DESTELER, desteBul } from '../../content/ispanyolca'
import { gunlukKaydet, ilerlemeOku, ilerlemeYaz } from '../../lib/ispanyolca/ilerleme'

/**
 * DİL KARTLARI
 *
 * Müfredatın yanında duran, İLGİYE göre çalışılan ikinci kanal. Öğrenci
 * seviyesine değil, sevdiği konuya göre deste seçer.
 *
 * TASARIMIN ÜÇ KARARI
 *
 * 1. ÖNCE HATIRLA, SONRA ÇEVİR. Kart açıldığında yalnız ön yüz görünür.
 *    Arka yüz kendiliğinden açılmaz; öğrenci "çevir" demeden cevabı
 *    göremez. Cevabı görmeden hatırlamaya çalışmak (aktif hatırlama)
 *    öğrenmenin tamamıdır; kartı iki yüzü açık göstermek onu okumaya
 *    indirger.
 *
 * 2. KENDİ DEĞERLENDİRMESİ ÖLÇÜLÜR, YAZIMI DEĞİL. Burada cevap yazdırmak
 *    yok — o iş "Kelime ve tekrar" bölümünün. Kart, tanıma hızını
 *    çalıştırır. Öğrenci "biliyordum / bilemedim" der; bilemediği kart
 *    aynı turun sonunda yeniden karşısına çıkar.
 *
 * 3. İLERLEME SAKLANIR AMA CEZALANDIRMAZ. Bilinen kartlar kaydedilir ve
 *    destenin üstünde oran olarak görünür. Yanlışlar sayılmaz, seri
 *    bozulmaz: kart destesi bir sınav değil, bir ısınma alanıdır.
 *
 * Kayıt yeri: ilerleme nesnesindeki `kartDesteleri` ve `kartFavorileri`
 * anahtarları. `ilerlemeYaz` var olan alanları koruduğu için ilerleme.js
 * dosyasına dokunmak gerekmedi.
 */

/** İlerleme kaydından kart durumlarını okur. */
function kartDurumlariniOku() {
  const i = ilerlemeOku()
  return {
    bilinen: new Set(i.kartDesteleri?.bilinen ?? []),
    favoriler: new Set(i.kartFavorileri ?? []),
  }
}

function bilinenYaz(bilinen) {
  ilerlemeYaz({ kartDesteleri: { bilinen: [...bilinen] } })
}

function favoriYaz(favoriler) {
  ilerlemeYaz({ kartFavorileri: [...favoriler] })
}

/** Diziyi bozmadan karıştırır (Fisher–Yates). */
function karistir(dizi) {
  const k = [...dizi]
  for (let i = k.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[k[i], k[j]] = [k[j], k[i]]
  }
  return k
}

export default function Kartlar() {
  const [parametreler, setParametreler] = useSearchParams()
  const acikDesteId = parametreler.get('deste')
  const deste = acikDesteId ? desteBul(acikDesteId) : null

  const [durum, setDurum] = useState(() => kartDurumlariniOku())

  const desteAc = (id) => setParametreler(id ? { deste: id } : {})

  if (!deste) {
    return (
      <DesteSecimi
        durum={durum}
        onSec={desteAc}
        onSifirla={() => {
          bilinenYaz(new Set())
          setDurum(kartDurumlariniOku())
        }}
      />
    )
  }

  return (
    <DesteOturumu
      key={deste.id}
      deste={deste}
      durum={durum}
      setDurum={setDurum}
      onGeri={() => desteAc(null)}
    />
  )
}

/* ------------------------------------------------------------------ */
/* Deste seçimi                                                        */
/* ------------------------------------------------------------------ */

function DesteSecimi({ durum, onSec, onSifirla }) {
  const toplamKart = DESTELER.reduce((t, d) => t + d.kartlar.length, 0)
  const toplamBilinen = DESTELER.reduce(
    (t, d) => t + d.kartlar.filter((k) => durum.bilinen.has(k.id)).length,
    0
  )

  return (
    <AppShell
      title="Dil kartları"
      subtitle="Sevdiğin konudan başla — kartı çevir, karşılığını ve örnek cümleyi gör"
    >
      <section className="rounded-card border border-line bg-surface p-5 shadow-card">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h2 className="font-display text-base font-bold text-ink">
              Bu bölüm nasıl çalışır?
            </h2>
            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink/65">
              Kartın ön yüzünde İspanyolca kelime var. Anlamını hatırlamaya çalış,
              <strong className="font-semibold text-ink/80"> sonra </strong>
              kartı çevir: arkasında Türkçe karşılığı ve o kelimenin gerçek bir
              cümlede nasıl kullanıldığı yazıyor. Cevaba bakmadan önce hatırlamaya
              çalışmak, işin en önemli kısmı.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/55">
              Desteler seviyeye göre değil <strong className="font-semibold text-ink/70">ilgiye</strong> göre
              dizildi. Ders kütüphanesinden bağımsızdır; istediğin sırayla çalışabilirsin.
            </p>
          </div>
          <Badge tone="brand" size="sm">{toplamKart} kart</Badge>
        </div>

        {toplamBilinen > 0 && (
          <div className="mt-4">
            <div className="flex items-baseline justify-between gap-2">
              <span className="text-sm text-ink/60">Bildiğin kartlar</span>
              <span className="text-sm font-semibold text-ink tabular">
                {toplamBilinen} / {toplamKart}
              </span>
            </div>
            <ProgressBar
              value={Math.round((toplamBilinen / toplamKart) * 100)}
              className="mt-2"
              tone="aurora"
            />
            <button
              type="button"
              onClick={onSifirla}
              className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-semibold text-ink/50 transition hover:text-ink/80"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              İşaretlediklerimi sıfırla
            </button>
          </div>
        )}
      </section>

      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink/55">
          Desteler
        </h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {DESTELER.map((d) => {
            const bilinen = d.kartlar.filter((k) => durum.bilinen.has(k.id)).length
            const oran = Math.round((bilinen / d.kartlar.length) * 100)
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => onSec(d.id)}
                className="focus-ring group flex flex-col rounded-card border border-line bg-surface p-4 text-left shadow-card transition hover:border-brand-500/30 hover:shadow-card-hover"
              >
                <span className="flex items-start gap-3.5">
                  <span
                    aria-hidden="true"
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-xl ring-1 ring-inset ring-brand-500/15"
                  >
                    {d.simge}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-[0.98rem] font-semibold text-ink">
                        {d.ad}
                      </span>
                      <Badge tone="neutral" size="sm">{d.kartlar.length} kart</Badge>
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink/55">
                      {d.aciklama}
                    </span>
                  </span>
                </span>
                {bilinen > 0 && (
                  <span className="mt-3 block">
                    <ProgressBar value={oran} tone="aurora" />
                    <span className="mt-1.5 block text-xs text-ink/45 tabular">
                      {bilinen} / {d.kartlar.length} kart biliniyor
                    </span>
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </section>

      <p className="text-sm leading-relaxed text-ink/50">
        Kartlar ders müfredatının yerine geçmez, yanında durur. Seviye sırasıyla
        ilerlemek istersen{' '}
        <Link to="/ispanyolca/kutuphane" className="focus-ring rounded font-semibold text-brand-700 underline-offset-2 hover:underline">
          ders kütüphanesine
        </Link>{' '}
        bak; unutmamak için tekrar etmek istersen{' '}
        <Link to="/ispanyolca/tekrar" className="focus-ring rounded font-semibold text-brand-700 underline-offset-2 hover:underline">
          kelime ve tekrar
        </Link>{' '}
        bölümünü kullan.
      </p>
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */
/* Deste oturumu                                                       */
/* ------------------------------------------------------------------ */

function DesteOturumu({ deste, durum, setDurum, onGeri }) {
  const ses = useSes()
  const sesHazir = ses?.hazir === true

  /* Sıra her oturumda karıştırılır: kartları hep aynı sırada görmek,
     kelimeyi değil sırayı ezberletir. */
  const [sira, setSira] = useState(() => karistir(deste.kartlar))
  const [indeks, setIndeks] = useState(0)
  const [cevrildi, setCevrildi] = useState(false)
  const [oturumSkoru, setOturumSkoru] = useState({ bildim: 0, bilemedim: 0 })
  const [bitti, setBitti] = useState(false)

  const kart = sira[indeks]
  const toplam = sira.length

  const yenidenBasla = useCallback(() => {
    setSira(karistir(deste.kartlar))
    setIndeks(0)
    setCevrildi(false)
    setOturumSkoru({ bildim: 0, bilemedim: 0 })
    setBitti(false)
  }, [deste])

  const ilerle = useCallback((bildi) => {
    const mevcut = kartDurumlariniOku()
    const bilinen = new Set(mevcut.bilinen)
    if (bildi) bilinen.add(kart.id)
    else bilinen.delete(kart.id)
    bilinenYaz(bilinen)
    setDurum({ bilinen, favoriler: mevcut.favoriler })
    setOturumSkoru((s) => ({
      bildim: s.bildim + (bildi ? 1 : 0),
      bilemedim: s.bilemedim + (bildi ? 0 : 1),
    }))

    setCevrildi(false)

    /* Bilinemeyen kart turun SONUNA eklenir: aynı oturumda bir kez daha
       karşına çıkar. Hemen tekrar göstermek ezberletir, hiç göstermemek
       ise o kartı boşa harcar. */
    if (!bildi) {
      setSira((s) => [...s, kart])
      setIndeks((i) => i + 1)
      return
    }

    if (indeks + 1 >= sira.length) {
      gunlukKaydet({ dakika: Math.max(1, Math.round(toplam * 0.25)) })
      setBitti(true)
      return
    }
    setIndeks((i) => i + 1)
  }, [kart, indeks, sira.length, toplam, setDurum])

  const favoriDegistir = () => {
    const mevcut = kartDurumlariniOku()
    const favoriler = new Set(mevcut.favoriler)
    if (favoriler.has(kart.id)) favoriler.delete(kart.id)
    else favoriler.add(kart.id)
    favoriYaz(favoriler)
    setDurum({ bilinen: mevcut.bilinen, favoriler })
  }

  /* Klavye: boşluk/Enter çevirir, sağ-sol ok cevaplar. Kart destesi
     hızlı çalışılan bir araçtır; her tur için fareye uzanmak yavaşlatır. */
  useEffect(() => {
    if (bitti) return undefined
    const dinle = (olay) => {
      if (olay.target instanceof HTMLInputElement || olay.target instanceof HTMLTextAreaElement) return
      if (olay.code === 'Space' || olay.code === 'Enter') {
        olay.preventDefault()
        setCevrildi((c) => !c)
        return
      }
      if (!cevrildi) return
      if (olay.code === 'ArrowRight') { olay.preventDefault(); ilerle(true) }
      if (olay.code === 'ArrowLeft') { olay.preventDefault(); ilerle(false) }
    }
    window.addEventListener('keydown', dinle)
    return () => window.removeEventListener('keydown', dinle)
  }, [cevrildi, ilerle, bitti])

  if (bitti) {
    const bilinenSayisi = deste.kartlar.filter((k) => durum.bilinen.has(k.id)).length
    return (
      <AppShell title={deste.ad} subtitle="Deste tamamlandı">
        <EmptyState
          icon={Sparkles}
          title="Desteyi bitirdin"
          description={`Bu turda ${oturumSkoru.bildim} kartı bildin. Bu destede toplam ${bilinenSayisi} / ${deste.kartlar.length} kart biliniyor olarak işaretli.`}
        />
        <div className="flex flex-wrap justify-center gap-3">
          <Button onClick={yenidenBasla} icon={Shuffle}>Karıştır, baştan başla</Button>
          <Button variant="secondary" onClick={onGeri} icon={ArrowLeft}>Destelere dön</Button>
        </div>
      </AppShell>
    )
  }

  const favoriMi = durum.favoriler.has(kart.id)

  return (
    <AppShell title={deste.ad} subtitle={deste.aciklama}>
      {/* Üst şerit: geri, ilerleme, karıştır */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Button variant="ghost" size="sm" icon={ArrowLeft} onClick={onGeri}>
          Desteler
        </Button>
        <div className="flex items-center gap-3">
          <span className="text-sm text-ink/55 tabular">
            {Math.min(indeks + 1, toplam)} / {toplam}
          </span>
          <Button variant="ghost" size="sm" icon={Shuffle} onClick={yenidenBasla}>
            Karıştır
          </Button>
        </div>
      </div>
      <ProgressBar value={Math.round((indeks / toplam) * 100)} tone="aurora" />

      {/* Kart */}
      <button
        type="button"
        onClick={() => setCevrildi((c) => !c)}
        aria-label={cevrildi ? 'Kartın ön yüzünü göster' : 'Kartın arkasını çevir'}
        className={cn(
          'focus-ring relative w-full rounded-card border p-6 text-left shadow-card transition sm:p-8',
          cevrildi
            ? 'border-brand-500/25 bg-brand-500/[0.04]'
            : 'border-line bg-surface hover:border-brand-500/25 hover:shadow-card-hover'
        )}
      >
        {/* Ön yüz — her zaman görünür */}
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-display text-2xl font-bold leading-tight text-ink sm:text-[1.75rem]" lang="es">
              {kart.on}
            </p>
            {kart.okunus && (
              <p className="mt-1 text-sm text-ink/50">okunuşu: {kart.okunus}</p>
            )}
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {kart.tur && <Badge tone="neutral" size="sm">{kart.tur}</Badge>}
            <span onClick={(o) => o.stopPropagation()} role="presentation">
              <SesDugmesi metin={kart.on} hazir={sesHazir} boyut="sm" />
            </span>
          </div>
        </div>

        {!cevrildi ? (
          <p className="mt-6 text-sm text-ink/45">
            Anlamını hatırlamaya çalış, sonra kartı çevir.
            <span className="ml-1 hidden sm:inline">(boşluk tuşu)</span>
          </p>
        ) : (
          <div className="mt-5 border-t border-line pt-5">
            <p className="text-2xs font-bold uppercase tracking-[0.12em] text-brand-700">
              Türkçesi
            </p>
            <p className="mt-1 font-display text-xl font-bold leading-snug text-ink">
              {kart.arka}
            </p>

            <p className="mt-5 text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">
              Örnek cümle
            </p>
            <div className="mt-1.5 flex flex-wrap items-start gap-2.5">
              <p className="min-w-0 flex-1 text-[1.02rem] leading-relaxed text-ink" lang="es">
                {kart.ornek}
              </p>
              <span onClick={(o) => o.stopPropagation()} role="presentation">
                <SesDugmesi metin={kart.ornek} hazir={sesHazir} boyut="sm" />
              </span>
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{kart.ornekTr}</p>

            {kart.not && (
              <p className="mt-4 rounded-input bg-surface-sunken px-3.5 py-2.5 text-sm leading-relaxed text-ink/70">
                {kart.not}
              </p>
            )}
          </div>
        )}
      </button>

      {/* Eylemler */}
      {cevrildi ? (
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="secondary" icon={X} onClick={() => ilerle(false)}>
            Bilemedim
          </Button>
          <Button icon={Check} onClick={() => ilerle(true)}>
            Biliyordum
          </Button>
        </div>
      ) : (
        <div className="flex justify-center">
          <Button variant="secondary" icon={RefreshCw} onClick={() => setCevrildi(true)}>
            Kartı çevir
          </Button>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={favoriDegistir}
          aria-pressed={favoriMi}
          className={cn(
            'focus-ring inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm font-semibold transition',
            favoriMi ? 'text-warning-600' : 'text-ink/45 hover:text-ink/70'
          )}
        >
          <Star className={cn('h-4 w-4', favoriMi && 'fill-current')} aria-hidden="true" />
          {favoriMi ? 'Kaydedildi' : 'Bu kartı kaydet'}
        </button>
        <span className="text-sm text-ink/45 tabular">
          Bu tur: {oturumSkoru.bildim} bildim · {oturumSkoru.bilemedim} bilemedim
        </span>
      </div>

      <p className="text-center text-xs leading-relaxed text-ink/40">
        Bilemediğin kart bu turun sonunda bir kez daha karşına çıkar.
        Klavyeyle: boşluk çevirir, sağ ok "biliyordum", sol ok "bilemedim".
      </p>
    </AppShell>
  )
}
