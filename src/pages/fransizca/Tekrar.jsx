import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { BookMarked, CheckCircle2, RefreshCw, Star } from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button, EmptyState, ProgressBar } from '../../components/ui'
import Alistirma from '../../components/fransizca/alistirmalar/Alistirma'
import SesDugmesi from '../../components/fransizca/SesDugmesi'
import { useIlerleme, useSes } from '../../components/fransizca/useFransizca'
import { KELIME_HAVUZU } from '../../content/fransizca'
import { DURUM } from '../../lib/fransizca/cevap'
import { favoriDegistir, gunlukKaydet, ilerlemeOku, ilerlemeYaz } from '../../lib/fransizca/ilerleme'
import {
  BOYUTLAR, kartCevapla, kartOzeti, sonrakiBoyut, tekrarOturumu,
} from '../../lib/fransizca/tekrar'
import { DURUM_ETIKETLERI } from '../../lib/fransizca/ilerleme'

/**
 * Kelime ve tekrar oturumu.
 *
 * "Gördüm" öğrenmek değildir. Her kelime DÖRT ayrı boyutta ölçülür ve her
 * turda o kelimenin EN ZAYIF boyutu sorulur:
 *
 *   tanıma      → kelimeyi görünce anlamını biliyor mu (Fransızca tanım)
 *   bağlam      → cümle içinde doğru anlamı seçebiliyor mu
 *   doğru biçim → boşluğa doğru yazabiliyor mu
 *   üretim      → kendi cümlesinde kullanabiliyor mu
 *
 * Sıra da bilinçli: önce UNUTULMAK ÜZERE olan kartlar, sonra yeni
 * kelimeler. Yeni kelime öğrenmek, unutulanı kurtarmaktan sonra gelir.
 */
export default function Tekrar() {
  const [parametreler] = useSearchParams()
  const ilerleme = useIlerleme()
  const ses = useSes()
  const sesHazir = ses?.hazir === true
  const yalnizYeni = parametreler.get('mod') === 'yeni'

  const [oturum, setOturum] = useState(null)
  const [indeks, setIndeks] = useState(0)
  const [skor, setSkor] = useState({ dogru: 0, toplam: 0 })
  /* Kelime kartı cevaptan ÖNCE gösterilirse öğrenci soruyu çözmez,
     karttan okur. Aktif hatırlamanın tamamı bu ayrıntıda. */
  const [cevaplandi, setCevaplandi] = useState(false)

  const kur = useCallback(() => {
    const liste = tekrarOturumu(KELIME_HAVUZU, ilerlemeOku().kartlar ?? {}, {
      yeniLimit: yalnizYeni ? 8 : 5,
      tekrarLimit: yalnizYeni ? 0 : 15,
    })
    setOturum(liste)
    setIndeks(0)
    setSkor({ dogru: 0, toplam: 0 })
    setCevaplandi(false)
  }, [yalnizYeni])

  useEffect(() => { kur() }, [kur])

  const suanki = oturum?.[indeks]
  const alistirma = useMemo(
    () => (suanki ? kartAlistirmasi(suanki, sesHazir) : null),
    [suanki, sesHazir]
  )

  const cevapla = (sonuc) => {
    const dogruMu = sonuc.durum === DURUM.DOGRU || sonuc.durum === DURUM.YAKIN
    const mevcut = ilerlemeOku()
    const boyut = sonrakiBoyut(suanki.kart)
    const yeniKart = kartCevapla(mevcut.kartlar?.[suanki.kelime.id] ?? suanki.kart, boyut, dogruMu)
    ilerlemeYaz({ kartlar: { ...mevcut.kartlar, [suanki.kelime.id]: yeniKart } })
    setSkor((e) => ({ dogru: e.dogru + (dogruMu ? 1 : 0), toplam: e.toplam + 1 }))
    setCevaplandi(true)
  }

  const devam = () => {
    setCevaplandi(false)
    if (indeks + 1 < oturum.length) {
      setIndeks((i) => i + 1)
      return
    }
    gunlukKaydet({ dakika: Math.max(1, Math.round(oturum.length * 0.5)), alistirma: skor.toplam, dogru: skor.dogru })
    setIndeks(oturum.length)
  }

  const ozet = kartOzeti(ilerleme.kartlar ?? {})
  const bitti = oturum && indeks >= oturum.length

  if (!oturum) return <AppShell title="Tekrar" loading />

  if (oturum.length === 0) {
    return (
      <AppShell title="Kelime tekrarı" subtitle="Bugün için bekleyen kart yok" width="narrow">
        <EmptyState
          icon={CheckCircle2}
          title="Bugün tekrar bekleyen kelime yok"
          description="Kelimelerin planlanan tekrar günlerini bekliyor. Erken tekrar etmek, doğru zamanda tekrar etmekten daha az işe yarar."
          action={<Button as={Link} to="/fransizca">Ana sayfaya dön</Button>}
        />
        <KartOzeti ozet={ozet} />
      </AppShell>
    )
  }

  if (bitti) {
    return (
      <AppShell title="Kelime tekrarı" subtitle="Oturum tamamlandı" width="narrow">
        <section className="rounded-card bg-success-500/[0.07] p-6 ring-1 ring-inset ring-success-500/20">
          <Badge tone="success">Tamamlandı</Badge>
          <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
            {skor.dogru} / {skor.toplam} doğru
          </h1>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
            Doğru bildiğin kelimeler daha uzun aralıkla, zorlandıkların daha kısa aralıkla tekrar
            karşına çıkacak. Yanlış yaptığın kelimeler silinmez — yalnız daha sık sorulur.
          </p>
        </section>
        <KartOzeti ozet={ozet} />
        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Button onClick={kur} icon={RefreshCw} className="justify-center">Yeni oturum</Button>
          <Button as={Link} to="/fransizca" variant="secondary" className="justify-center">
            Ana sayfaya dön
          </Button>
        </div>
      </AppShell>
    )
  }

  const kelime = suanki.kelime
  const boyut = sonrakiBoyut(suanki.kart)
  const favoriMi = ilerleme.favoriler?.includes(kelime.id)

  return (
    <AppShell
      title="Kelime tekrarı"
      subtitle={`${indeks + 1} / ${oturum.length}`}
      width="narrow"
    >
      <ProgressBar value={((indeks) / oturum.length) * 100} tone="aurora" />

      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={suanki.yeniMi ? 'accent' : 'aqua'} size="sm">
          {suanki.yeniMi ? 'Yeni kelime' : 'Tekrar'}
        </Badge>
        <Badge tone="neutral" size="sm">{BOYUTLAR[boyut].ad}</Badge>
        <button
          type="button"
          onClick={() => favoriDegistir(kelime.id)}
          aria-pressed={favoriMi}
          className={cn(
            'focus-ring ml-auto inline-flex h-9 items-center gap-1.5 rounded-btn px-3 text-xs font-semibold ring-1 ring-inset transition',
            favoriMi
              ? 'bg-warning-500/12 text-warning-700 ring-warning-500/25'
              : 'bg-surface text-ink/55 ring-line hover:bg-surface-muted'
          )}
        >
          <Star className={cn('h-3.5 w-3.5', favoriMi && 'fill-current')} aria-hidden="true" />
          {favoriMi ? 'Kaydedildi' : 'Kaydet'}
        </button>
      </div>

      <p className="text-sm leading-relaxed text-ink/55">{BOYUTLAR[boyut].aciklama}</p>

      <Alistirma
        key={`${kelime.id}-${boyut}`}
        alistirma={alistirma}
        sesHazir={sesHazir}
        onSonuc={cevapla}
        onDevam={devam}
        devamEtiketi={indeks + 1 < oturum.length ? 'Sonraki kelime' : 'Oturumu bitir'}
      />

      {cevaplandi ? (
        <KelimeKarti kelime={kelime} sesHazir={sesHazir} />
      ) : (
        <p className="rounded-card bg-surface-muted px-4 py-3 text-sm leading-relaxed text-ink/55 ring-1 ring-inset ring-line">
          Kelimenin tanımı, örnekleri ve telaffuzu cevabından sonra açılacak. Önce hatırlamaya
          çalışman, okuyup geçmenden çok daha kalıcı.
        </p>
      )}
    </AppShell>
  )
}

/* ------------------------------------------------------------------ */
/* Boyuta göre alıştırma üretimi                                       */
/* ------------------------------------------------------------------ */

/**
 * Kelime kartını, ortak alıştırma motorunun anladığı bir alıştırmaya
 * çevirir. Böylece tekrar oturumu kendi doğruluk mantığını yazmaz;
 * cevap kontrolü, esneklik ve Türkçe düşünme teşhisi derslerdekiyle
 * birebir aynı motordan geçer.
 */
function kartAlistirmasi({ kelime, kart }, sesHazir) {
  const boyut = sonrakiBoyut(kart)
  const digerleri = KELIME_HAVUZU.filter((k) => k.id !== kelime.id)

  if (boyut === 'tanima') {
    const yanlislar = karistir(digerleri).slice(0, 3)
    const secenekler = karistir([
      { id: 'dogru', metin: kelime.fransizcaTanim },
      ...yanlislar.map((k, i) => ({ id: `y${i}`, metin: k.fransizcaTanim })),
    ])
    return {
      id: `tekrar-${kelime.id}-tanima`,
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'kolay',
      /* Yönergede kelimeyi tekrar etmiyoruz: kelime zaten `soru` alanında
         büyük ve tek başına duruyor — çalışılan nesne o. */
      yonerge: 'Bu kelime ne anlama geliyor?',
      soru: kelime.kelime,
      secenekler,
      dogruId: 'dogru',
      aciklama: `${kelime.kelime} ${kelime.ipa} — ${kelime.turkceDestek}`,
    }
  }

  if (boyut === 'baglam') {
    const ornek = kelime.ornekler[0]
    const yanlislar = karistir(digerleri).slice(0, 2)
    const secenekler = karistir([
      { id: 'dogru', metin: ornek.tr },
      ...yanlislar.map((k, i) => ({ id: `y${i}`, metin: k.ornekler[0].tr })),
    ])
    return {
      id: `tekrar-${kelime.id}-baglam`,
      tur: 'coktan-secmeli',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Bu cümle ne anlama geliyor?',
      soru: ornek.fr,
      secenekler,
      dogruId: 'dogru',
      aciklama: kelime.hata ?? `${kelime.kelime}: ${kelime.fransizcaTanim}`,
    }
  }

  if (boyut === 'tamamlama') {
    const ornek = kelime.ornekler[kelime.ornekler.length - 1]
    const desen = new RegExp(`\\b${kelime.kelime.split(' ')[0]}\\w*`, 'i')
    const parcalar = ornek.fr.split(desen)
    return {
      id: `tekrar-${kelime.id}-tamamlama`,
      tur: 'bosluk',
      beceri: 'kelime',
      zorluk: 'orta',
      yonerge: 'Boşluğa doğru kelimeyi yaz.',
      parcalar: parcalar.length > 1
        ? [parcalar[0], { bosluk: 0 }, parcalar.slice(1).join('')]
        : [`${ornek.tr} → `, { bosluk: 0 }],
      cevaplar: [{
        kabul: [kelime.kelime, kelime.kelime.split(' ')[0], ...(desen.exec(ornek.fr) ? [desen.exec(ornek.fr)[0]] : [])],
        ipucu: kelime.kelime[0] + '…',
      }],
      aciklama: kelime.hata ?? `Doğru biçim: ${kelime.kelime}`,
    }
  }

  // uretim
  const uretim = kelime.uretim ?? {
    yonerge: `"${kelime.kelime}" kelimesini kullanarak bir cümle yaz.`,
    kabul: [kelime.kelime],
  }
  return {
    id: `tekrar-${kelime.id}-uretim`,
    tur: 'durum-ifade',
    beceri: 'dusunme',
    zorluk: 'zor',
    yonerge: 'Kendi cümlende kullan.',
    durum: uretim.yonerge,
    kabul: uretim.kabul,
    ornekCevap: uretim.kabul[0],
    aciklama: kelime.hatirlatma ?? kelime.hata ?? null,
  }
}

function karistir(dizi) {
  const kopya = [...dizi]
  for (let i = kopya.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[kopya[i], kopya[j]] = [kopya[j], kopya[i]]
  }
  return kopya
}

/* ------------------------------------------------------------------ */

/**
 * Artikel rengi bir SÜS değil, hafıza kancasıdır: öğrenci ismin ERİL mi
 * DİŞİL mi olduğunu kelimeyle birlikte renk olarak da hatırlar. Fransızcada
 * cinsiyeti gösteren tek işaret artikeldir; kelimenin sonuna bakarak her
 * zaman anlaşılmaz. Renkler tasarım sisteminin mevcut tonlarından seçildi.
 *
 * l' (elizyonlu biçim) ayrı bir renk almaz ve NÖTR gösterilir: çünkü "l'"
 * cinsiyeti GİZLER. Öğrenci "l'école" gördüğünde cinsiyeti bilemez; bu
 * yüzden içerik dosyaları bu kelimeleri her zaman `cins` alanıyla verir.
 */
const ARTIKEL_RENGI = {
  le: 'text-info-700',
  la: 'text-accent-700',
  "l'": 'text-ink/45',
  les: 'text-success-700',
}

function KelimeKarti({ kelime, sesHazir }) {
  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <div className="flex flex-wrap items-center gap-3">
        {/* ARTİKEL BAŞLIKTA: Fransızcada bir ismi "bilmek", cinsiyetini de
            bilmek demektir. Bu yüzden le/la kelimenin yanında değil,
            kelimeyle BİRLİKTE tek bir bütün olarak gösterilir. */}
        <h2 className="font-display text-xl font-bold text-ink" lang="fr">
          {kelime.artikel && (
            <span className={ARTIKEL_RENGI[kelime.artikel] ?? 'text-ink/45'}>{kelime.artikel} </span>
          )}
          {kelime.kelime}
        </h2>
        <span className="text-sm text-ink/50">{kelime.ipa}</span>
        <SesDugmesi
          metin={kelime.artikel ? `${kelime.artikel} ${kelime.kelime}` : kelime.kelime}
          hazir={sesHazir}
          boyut="sm"
          yavasSecenegi
        />
        <Badge tone="neutral" size="sm">{kelime.tur}</Badge>
        <Badge tone="brand" size="sm">{kelime.seviye}</Badge>
      </div>

      {(kelime.cogul || kelime.cekim) && (
        <div className="mt-3 flex flex-wrap gap-2">
          {kelime.cogul && (
            <span className="rounded-full bg-brand-500/[0.08] px-3 py-1 text-sm text-ink/75 ring-1 ring-inset ring-brand-500/15">
              <span className="font-semibold text-ink">Çoğul: </span>
              <span lang="fr">{kelime.cogul}</span>
            </span>
          )}
          {kelime.cekim && (
            <span className="rounded-full bg-aqua-500/[0.08] px-3 py-1 text-sm text-ink/75 ring-1 ring-inset ring-aqua-500/15">
              <span className="font-semibold text-ink">Çekim: </span>
              <span lang="fr">{kelime.cekim}</span>
            </span>
          )}
        </div>
      )}

      <dl className="mt-3.5 grid gap-2.5">
        <Satir etiket="Fransızca tanım" deger={kelime.fransizcaTanim} fransizca />
        <Satir etiket="Türkçe destek" deger={kelime.turkceDestek} />
        {kelime.heceler && <Satir etiket="Heceler / vurgu" deger={kelime.heceler} />}
        {kelime.vurgu && <Satir etiket="Vurgu notu" deger={kelime.vurgu} />}
      </dl>

      <div className="mt-3.5 grid gap-2">
        <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">Örnekler</p>
        {kelime.ornekler.map((o) => (
          <div key={o.fr} className="flex flex-wrap items-center gap-2.5 rounded-input bg-surface-muted px-3.5 py-2.5">
            <p className="min-w-0 flex-1 text-[0.95rem] leading-relaxed text-ink" lang="fr">{o.fr}</p>
            <SesDugmesi metin={o.fr} hazir={sesHazir} boyut="sm" />
            <p className="w-full text-sm text-ink/55">{o.tr}</p>
          </div>
        ))}
      </div>

      {kelime.esdizim?.length > 0 && (
        <div className="mt-3.5">
          <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">
            Birlikte kullanıldığı kelimeler
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {kelime.esdizim.map((e) => (
              <span key={e} className="rounded-full bg-aqua-500/10 px-2.5 py-1 text-xs font-medium text-aqua-700 ring-1 ring-inset ring-aqua-500/15" lang="fr">
                {e}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="mt-3.5 grid gap-2 sm:grid-cols-2">
        {kelime.esAnlam?.length > 0 && <Etiketler baslik="Eş anlamlı" liste={kelime.esAnlam} />}
        {kelime.zitAnlam?.length > 0 && <Etiketler baslik="Zıt anlamlı" liste={kelime.zitAnlam} />}
        {kelime.aile?.length > 0 && <Etiketler baslik="Kelime ailesi" liste={kelime.aile} />}
      </div>

      {kelime.bolgesel && (
        <p className="mt-3 rounded-input bg-info-500/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-info-500/15">
          <strong className="font-semibold text-ink">Ülkeden ülkeye değişir: </strong>
          {[
            kelime.bolgesel.fr && `Fransa ${kelime.bolgesel.fr}`,
            kelime.bolgesel.ca && `Québec ${kelime.bolgesel.ca}`,
            kelime.bolgesel.be && `Belçika ${kelime.bolgesel.be}`,
            kelime.bolgesel.ch && `İsviçre ${kelime.bolgesel.ch}`,
          ].filter(Boolean).join(' · ')}
        </p>
      )}

      {kelime.hata && (
        <p className="mt-2.5 rounded-input bg-warning-500/[0.07] px-3.5 py-2.5 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-warning-500/20">
          <strong className="font-semibold text-ink">Sık yapılan hata: </strong>{kelime.hata}
        </p>
      )}

      {kelime.hatirlatma && (
        <p className="mt-2.5 rounded-input bg-brand-500/[0.06] px-3.5 py-2.5 text-sm leading-relaxed text-ink/70 ring-1 ring-inset ring-brand-500/12">
          <strong className="font-semibold text-ink">Hatırlama ipucu: </strong>{kelime.hatirlatma}
        </p>
      )}
    </section>
  )
}

function Satir({ etiket, deger, fransizca = false }) {
  return (
    <div className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
      <dt className="w-40 shrink-0 text-2xs font-bold uppercase tracking-[0.1em] text-ink/45">{etiket}</dt>
      <dd className="min-w-0 flex-1 text-[0.95rem] leading-relaxed text-ink/80" lang={fransizca ? 'en' : undefined}>
        {deger}
      </dd>
    </div>
  )
}

function Etiketler({ baslik, liste }) {
  return (
    <div>
      <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">{baslik}</p>
      <p className="mt-1 text-sm text-ink/70" lang="fr">{liste.join(', ')}</p>
    </div>
  )
}

function KartOzeti({ ozet }) {
  const toplam = Object.values(ozet).reduce((t, n) => t + n, 0)
  if (!toplam) return null
  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card">
      <h2 className="flex items-center gap-2 font-display text-base font-bold text-ink">
        <BookMarked className="h-4 w-4 text-brand-600" strokeWidth={2.2} aria-hidden="true" />
        Kelime durumun
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
        Bir kelime, dört boyutta da sağlam olduğunda "ustalaşıldı" sayılır.
      </p>
      <div className="mt-3 grid gap-2">
        {Object.entries(ozet)
          .filter(([, n]) => n > 0)
          .map(([durum, n]) => (
            <div key={durum} className="flex items-center justify-between gap-3 rounded-input bg-surface-muted px-3.5 py-2.5">
              <Badge tone={DURUM_ETIKETLERI[durum].tone} size="sm">{DURUM_ETIKETLERI[durum].ad}</Badge>
              <span className="text-sm font-semibold text-ink/70 tabular">{n} kelime</span>
            </div>
          ))}
      </div>
    </section>
  )
}
