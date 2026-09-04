import { useCallback, useEffect, useMemo, useState } from 'react'
import { CheckCircle2, CornerDownLeft, RotateCcw } from 'lucide-react'
import { cn } from '../../../lib/cn'
import { alistirmaKontrol, DURUM } from '../../../lib/ispanyolca/cevap'
import { Button, Input, Select } from '../../ui'
import GeriBildirim from '../GeriBildirim'
import SesDugmesi from '../SesDugmesi'

/**
 * Alistirma — bütün alıştırma türlerini çalıştıran tek bileşen.
 *
 * NEDEN TEK BİLEŞEN: doğruluk kararı her tür için `lib/ispanyolca/cevap.js`
 * içinde verilir. Her alıştırma türü için ayrı bir bileşen yazılsaydı her
 * biri kendi "doğru mu" mantığını taşır ve zamanla birbirinden ayrılırlardı.
 * Burada bileşen yalnız GİRDİYİ toplar; kararı motor verir.
 *
 * ERİŞİLEBİLİRLİK
 *  • Seçenekler gerçek düğmedir; klavyeyle gezilir, odak halkası görünür.
 *  • Seçili durum yalnız renkle değil, dolgu + işaret + `aria-pressed` ile
 *    bildirilir.
 *  • Sıralama alıştırması sürükleme GEREKTİRMEZ; tıklama/klavye ile çalışır.
 *  • Eşleştirme açılır liste kullanır — sürükle-bırak yerine, çünkü
 *    telefonda ve klavyede sürükleme güvenilir değildir.
 *  • Enter tuşu tek satırlık cevaplarda "Kontrol et" düğmesini tetikler.
 */

export default function Alistirma({
  alistirma,
  sesHazir = false,
  onSonuc,
  onDevam,
  devamEtiketi = 'Devam',
  numara,
  toplam,
  /**
   * ÖLÇÜM MODU — seviye tespitinde kullanılır. Cevaptan sonra doğru/yanlış
   * GÖSTERİLMEZ; ölçüm sırasında geri bildirim vermek hem sonucu bozar
   * (öğrenci sonraki soruda kalıbı taklit eder) hem de sınavı ders hâline
   * getirir. Geri bildirim sonuç ekranında toplu olarak verilir.
   */
  olcumModu = false,
  /** Ölçüm modunda boş bırakmaya izin verilir. */
  atlanabilir = false,
}) {
  const [cevap, setCevap] = useState(() => baslangicCevabi(alistirma))
  const [sonuc, setSonuc] = useState(null)

  useEffect(() => {
    setCevap(baslangicCevabi(alistirma))
    setSonuc(null)
  }, [alistirma?.id])

  const kontrolEt = useCallback(() => {
    if (sonuc) return
    const yeni = alistirmaKontrol(alistirma, cevap)
    if (yeni.durum === DURUM.BOS && !olcumModu) return
    if (olcumModu) {
      onSonuc?.(yeni, cevap)
      return
    }
    setSonuc(yeni)
    onSonuc?.(yeni, cevap)
  }, [alistirma, cevap, sonuc, onSonuc, olcumModu])

  const cevaplanabilir = useMemo(() => doluMu(alistirma, cevap), [alistirma, cevap])
  const kilitli = Boolean(sonuc)

  if (!alistirma) return null

  return (
    <section className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
      <header className="mb-4">
        <div className="flex flex-wrap items-center gap-2">
          {numara != null && (
            <span className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45 tabular">
              {numara}{toplam ? ` / ${toplam}` : ''}
            </span>
          )}
          {alistirma.zorluk && (
            <span className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/35">
              {alistirma.zorluk}
            </span>
          )}
        </div>
        <p className="mt-1.5 font-display text-base font-bold leading-snug text-ink">
          {alistirma.yonerge}
        </p>
        {alistirma.yaklasimNotu && (
          <p className="mt-1 text-sm leading-relaxed text-ink/55">{alistirma.yaklasimNotu}</p>
        )}
      </header>

      <Govde
        alistirma={alistirma}
        cevap={cevap}
        setCevap={setCevap}
        kilitli={kilitli}
        sesHazir={sesHazir}
        sonuc={sonuc}
        kontrolEt={kontrolEt}
      />

      {alistirma.ipucu && !kilitli && (
        <p className="mt-3 text-sm text-ink/55">
          <span className="font-semibold text-ink/70">İpucu: </span>{alistirma.ipucu}
        </p>
      )}

      {!kilitli && (
        <div className="mt-5 flex flex-wrap items-center justify-end gap-2">
          {olcumModu && atlanabilir && (
            <Button variant="ghost" onClick={kontrolEt}>
              Bilmiyorum, geç
            </Button>
          )}
          <Button
            onClick={kontrolEt}
            disabled={!cevaplanabilir}
            icon={olcumModu ? undefined : CheckCircle2}
          >
            {olcumModu ? 'Sonraki soru' : 'Kontrol et'}
          </Button>
        </div>
      )}

      {!olcumModu && (
        <GeriBildirim
          sonuc={sonuc}
          alistirma={alistirma}
          onDevam={onDevam}
          devamEtiketi={devamEtiketi}
        />
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Başlangıç ve doluluk                                                */
/* ------------------------------------------------------------------ */

function baslangicCevabi(a) {
  switch (a?.tur) {
    case 'bosluk':
      return (a.cevaplar ?? []).map(() => '')
    case 'siralama':
      return []
    case 'eslestirme':
      return {}
    case 'genisletme':
      return (a.adimlar ?? []).map(() => '')
    default:
      return ''
  }
}

function doluMu(a, cevap) {
  switch (a?.tur) {
    case 'bosluk':
      return Array.isArray(cevap) && cevap.every((c) => String(c ?? '').trim())
    case 'siralama':
      return Array.isArray(cevap) && cevap.length === (a.parcalar?.length ?? 0)
    case 'eslestirme':
      return Object.keys(a.eslesme ?? {}).every((k) => cevap?.[k])
    case 'genisletme':
      return Array.isArray(cevap) && cevap.every((c) => String(c ?? '').trim())
    default:
      return Boolean(String(cevap ?? '').trim())
  }
}

/* ------------------------------------------------------------------ */
/* Tür gövdeleri                                                       */
/* ------------------------------------------------------------------ */

function Govde({ alistirma, cevap, setCevap, kilitli, sesHazir, sonuc, kontrolEt }) {
  switch (alistirma.tur) {
    case 'coktan-secmeli':
      return (
        <Secenekler
          soru={alistirma.soru}
          secenekler={alistirma.secenekler}
          secili={cevap}
          onSec={setCevap}
          kilitli={kilitli}
          dogruId={sonuc ? alistirma.dogruId : null}
        />
      )

    case 'dinle-sec':
      return (
        <>
          <DinlemeSeridi metin={alistirma.seslendir} sesHazir={sesHazir} />
          <Secenekler
            secenekler={alistirma.secenekler}
            secili={cevap}
            onSec={setCevap}
            kilitli={kilitli}
            dogruId={sonuc ? alistirma.dogruId : null}
          />
        </>
      )

    case 'dogal-secim':
      return (
        <Secenekler
          soru={alistirma.baglam}
          secenekler={alistirma.secenekler}
          secili={cevap}
          onSec={setCevap}
          kilitli={kilitli}
          dogruId={sonuc ? alistirma.secenekler.find((s) => s.dogal)?.id : null}
          ispanyolca
        />
      )

    case 'bosluk':
      return (
        <Bosluk
          alistirma={alistirma}
          cevap={cevap}
          setCevap={setCevap}
          kilitli={kilitli}
          detay={sonuc?.detay}
        />
      )

    case 'siralama':
      return (
        <Siralama
          parcalar={alistirma.parcalar}
          secim={cevap}
          setSecim={setCevap}
          kilitli={kilitli}
        />
      )

    case 'eslestirme':
      return (
        <Eslestirme
          alistirma={alistirma}
          cevap={cevap}
          setCevap={setCevap}
          kilitli={kilitli}
          detay={sonuc?.detay}
        />
      )

    case 'hata-bul':
      return (
        <>
          <p className="rounded-input bg-surface-sunken px-4 py-3 font-body text-base text-ink" lang="es">
            {alistirma.cumle}
          </p>
          <p className="mt-2 text-sm text-ink/55">
            Hatalı kısım: <strong className="font-semibold text-ink/80">{alistirma.hataliParca}</strong>
          </p>
          <MetinCevap value={cevap} onChange={setCevap} kilitli={kilitli} onEnter={kontrolEt} cokSatir />
        </>
      )

    case 'durum-ifade':
      return (
        <>
          <div className="rounded-input bg-brand-500/[0.06] px-4 py-3 ring-1 ring-inset ring-brand-500/12">
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-brand-700">Durum</p>
            <p className="mt-1 text-base leading-relaxed text-ink">{alistirma.durum}</p>
          </div>
          <MetinCevap
            value={cevap}
            onChange={setCevap}
            kilitli={kilitli}
            onEnter={kontrolEt}
            cokSatir
            yerTutucu="İspanyolca ne söylersin?"
          />
        </>
      )

    case 'tanim-kelime':
      return (
        <>
          <div className="rounded-input bg-surface-sunken px-4 py-3">
            <p className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">Definition</p>
            <p className="mt-1 text-base leading-relaxed text-ink" lang="es">{alistirma.tanim}</p>
            {alistirma.ilkHarf && (
              <p className="mt-2 text-sm text-ink/55">
                İlk harf: <strong className="font-semibold text-ink/80">{alistirma.ilkHarf}</strong>
              </p>
            )}
          </div>
          <MetinCevap value={cevap} onChange={setCevap} kilitli={kilitli} onEnter={kontrolEt} yerTutucu="Kelimeyi yaz…" />
        </>
      )

    case 'soru-cevap':
      return (
        <>
          <div className="flex flex-wrap items-center gap-3 rounded-input bg-surface-sunken px-4 py-3">
            <p className="min-w-0 flex-1 text-base leading-relaxed text-ink" lang="es">{alistirma.soru}</p>
            <SesDugmesi metin={alistirma.soru} hazir={sesHazir} boyut="sm" />
          </div>
          <MetinCevap value={cevap} onChange={setCevap} kilitli={kilitli} onEnter={kontrolEt} cokSatir yerTutucu="Réponds en français…" />
        </>
      )

    case 'dinle-yaz':
      return (
        <>
          <DinlemeSeridi metin={alistirma.seslendir} sesHazir={sesHazir} />
          <MetinCevap value={cevap} onChange={setCevap} kilitli={kilitli} onEnter={kontrolEt} yerTutucu="Duyduğunu yaz…" />
        </>
      )

    case 'genisletme':
      return (
        <Genisletme
          adimlar={alistirma.adimlar}
          cevap={cevap}
          setCevap={setCevap}
          kilitli={kilitli}
          detay={sonuc?.detay}
        />
      )

    default:
      return (
        <p className="text-sm text-ink/55">
          Bu alıştırma türü henüz desteklenmiyor: {alistirma.tur}
        </p>
      )
  }
}

/* ------------------------------------------------------------------ */

function DinlemeSeridi({ metin, sesHazir }) {
  if (!sesHazir) {
    /* Ses yoksa alıştırma çözümsüz kalmasın: metin YAZILI olarak açılır
       ve durumun neden böyle olduğu söylenir. Sahte oynatıcı yok. */
    return (
      <div className="mb-4 rounded-input bg-warning-500/[0.07] px-4 py-3 ring-1 ring-inset ring-warning-500/20">
        <p className="text-2xs font-bold uppercase tracking-[0.14em] text-warning-700">
          Ses yok — yazılı sürüm
        </p>
        <p className="mt-1 text-base leading-relaxed text-ink" lang="es">{metin}</p>
        <p className="mt-1.5 text-xs text-ink/55">
          Cihazında İspanyolca ses bulunamadı, bu yüzden metni okuyarak çözüyorsun.
        </p>
      </div>
    )
  }
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3 rounded-input bg-surface-sunken px-4 py-3">
      <SesDugmesi metin={metin} hazir etiket="Dinle" yavasSecenegi />
      <span className="text-sm text-ink/55">Gerektiği kadar tekrar dinleyebilirsin.</span>
    </div>
  )
}

function Secenekler({ soru, secenekler, secili, onSec, kilitli, dogruId, ispanyolca = false }) {
  return (
    <>
      {soru && (
        <p
          className={cn('mb-3 text-base leading-relaxed text-ink', ispanyolca && 'text-ink/70')}
          lang={ispanyolca ? undefined : 'en'}
        >
          {soru}
        </p>
      )}
      <div className="grid gap-2" role="group">
        {secenekler.map((s, sira) => {
          const seciliMi = secili === s.id
          const dogruMu = dogruId != null && s.id === dogruId
          const yanlisSecim = kilitli && seciliMi && !dogruMu
          return (
            <button
              key={s.id}
              type="button"
              disabled={kilitli}
              aria-pressed={seciliMi}
              onClick={() => onSec(s.id)}
              className={cn(
                'focus-ring flex min-h-[3rem] w-full items-start gap-3 rounded-input px-4 py-3 text-left transition',
                'ring-1 ring-inset',
                !kilitli && 'hover:bg-brand-500/[0.06]',
                seciliMi && !kilitli
                  ? 'bg-brand-500/[0.1] ring-brand-500/30'
                  : 'bg-surface-muted ring-line',
                dogruMu && 'bg-success-500/[0.1] ring-success-500/30',
                yanlisSecim && 'bg-danger-500/[0.07] ring-danger-500/25',
                kilitli && 'cursor-default'
              )}
            >
              <span
                className={cn(
                  'mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-2xs font-bold ring-1 ring-inset',
                  seciliMi || dogruMu
                    ? 'bg-ink/[0.08] text-ink ring-ink/15'
                    : 'bg-surface text-ink/45 ring-line'
                )}
                aria-hidden="true"
              >
                {/* Sıra harfi kullanılır, seçeneğin KİMLİĞİ değil: tekrar
                    oturumunda seçenekler kod içinde üretiliyor ve kimlikler
                    "dogru" / "y1" gibi olabiliyor — rozet cevabı ele verirdi. */}
                {dogruMu ? '✓' : yanlisSecim ? '×' : String.fromCharCode(65 + sira)}
              </span>
              <span className="min-w-0 flex-1 text-[0.95rem] leading-relaxed text-ink" lang="es">
                {s.metin}
              </span>
            </button>
          )
        })}
      </div>
    </>
  )
}

function Bosluk({ alistirma, cevap, setCevap, kilitli, detay }) {
  let boslukSayaci = -1
  return (
    <>
      {alistirma.havuz?.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="w-full text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">
            Kelime havuzu
          </span>
          {alistirma.havuz.map((k) => (
            <span
              key={k}
              className="rounded-full bg-aqua-500/10 px-3 py-1 text-sm font-medium text-aqua-700 ring-1 ring-inset ring-aqua-500/15"
              lang="es"
            >
              {k}
            </span>
          ))}
        </div>
      )}

      <p className="whitespace-pre-line text-base leading-loose text-ink" lang="es">
        {alistirma.parcalar.map((parca, i) => {
          if (typeof parca === 'string') return <span key={i}>{parca}</span>
          boslukSayaci += 1
          const indeks = boslukSayaci
          const durum = detay?.[indeks]
          return (
            <input
              key={i}
              type="text"
              value={cevap[indeks] ?? ''}
              disabled={kilitli}
              onChange={(e) => {
                const yeni = [...cevap]
                yeni[indeks] = e.target.value
                setCevap(yeni)
              }}
              aria-label={`Boşluk ${indeks + 1}${alistirma.cevaplar[indeks]?.ipucu ? ` — ipucu: ${alistirma.cevaplar[indeks].ipucu}` : ''}`}
              placeholder={alistirma.cevaplar[indeks]?.ipucu ?? '…'}
              lang="es"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              className={cn(
                'focus-ring mx-1 inline-block min-w-[6.5rem] rounded-md border-b-2 bg-surface-sunken px-2 py-1',
                'text-base text-ink placeholder:text-ink/30',
                durum === 'dogru' ? 'border-success-500 bg-success-500/[0.08]'
                  : durum === 'yakin' ? 'border-warning-500 bg-warning-500/[0.08]'
                    : durum === 'yanlis' ? 'border-danger-500 bg-danger-500/[0.06]'
                      : 'border-line-strong'
              )}
            />
          )
        })}
      </p>
    </>
  )
}

function Siralama({ parcalar, secim, setSecim, kilitli }) {
  const kalanlar = parcalar.map((_, i) => i).filter((i) => !secim.includes(i))
  return (
    <div>
      {/* Kurulan cümle */}
      <div
        className="min-h-[3.5rem] rounded-input bg-surface-sunken px-3 py-2.5 ring-1 ring-inset ring-line"
        aria-live="polite"
      >
        {secim.length === 0 ? (
          <span className="text-sm text-ink/40">Aşağıdaki kelimelere tıklayarak cümleyi kur.</span>
        ) : (
          <span className="flex flex-wrap gap-2">
            {secim.map((indeks, sira) => (
              <button
                key={`${indeks}-${sira}`}
                type="button"
                disabled={kilitli}
                onClick={() => setSecim(secim.filter((_, i) => i !== sira))}
                aria-label={`"${parcalar[indeks]}" kelimesini çıkar`}
                className={cn(
                  'focus-ring rounded-md bg-brand-500/[0.12] px-3 py-1.5 text-[0.95rem] font-medium text-ink',
                  'ring-1 ring-inset ring-brand-500/20',
                  !kilitli && 'hover:bg-brand-500/[0.18]'
                )}
                lang="es"
              >
                {parcalar[indeks]}
              </button>
            ))}
          </span>
        )}
      </div>

      {/* Havuz */}
      <div className="mt-3 flex flex-wrap gap-2">
        {kalanlar.map((indeks) => (
          <button
            key={indeks}
            type="button"
            disabled={kilitli}
            onClick={() => setSecim([...secim, indeks])}
            className={cn(
              'focus-ring min-h-[2.5rem] rounded-md bg-surface-muted px-3 py-1.5 text-[0.95rem] text-ink',
              'ring-1 ring-inset ring-line transition hover:bg-brand-500/[0.08] hover:ring-brand-500/20'
            )}
            lang="es"
          >
            {parcalar[indeks]}
          </button>
        ))}
      </div>

      {secim.length > 0 && !kilitli && (
        <button
          type="button"
          onClick={() => setSecim([])}
          className="focus-ring mt-3 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-sm text-ink/55 hover:text-ink"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Baştan başla
        </button>
      )}
    </div>
  )
}

function Eslestirme({ alistirma, cevap, setCevap, kilitli, detay }) {
  return (
    <div className="grid gap-2.5">
      {alistirma.sol.map((sol) => {
        const durum = detay?.[sol.id]
        return (
          <div
            key={sol.id}
            className={cn(
              'flex flex-col gap-2 rounded-input px-3.5 py-3 ring-1 ring-inset sm:flex-row sm:items-center',
              durum === true ? 'bg-success-500/[0.07] ring-success-500/20'
                : durum === false ? 'bg-danger-500/[0.05] ring-danger-500/20'
                  : 'bg-surface-muted ring-line'
            )}
          >
            <span className="min-w-0 flex-1 text-[0.95rem] leading-relaxed text-ink">{sol.metin}</span>
            <Select
              value={cevap[sol.id] ?? ''}
              disabled={kilitli}
              onChange={(e) => setCevap({ ...cevap, [sol.id]: e.target.value })}
              aria-label={`${sol.metin} için eşleşme seç`}
              className="sm:w-56"
            >
              <option value="">Seç…</option>
              {alistirma.sag.map((sag) => (
                <option key={sag.id} value={sag.id}>{sag.metin}</option>
              ))}
            </Select>
          </div>
        )
      })}
    </div>
  )
}

function Genisletme({ adimlar, cevap, setCevap, kilitli, detay }) {
  return (
    <ol className="grid gap-3">
      {adimlar.map((adim, i) => {
        const acikMi = i === 0 || String(cevap[i - 1] ?? '').trim() || kilitli
        const durum = detay?.[i]
        return (
          <li
            key={i}
            className={cn(
              'rounded-input px-4 py-3 ring-1 ring-inset transition',
              durum === 'dogru' ? 'bg-success-500/[0.07] ring-success-500/20'
                : durum === 'yanlis' ? 'bg-danger-500/[0.05] ring-danger-500/20'
                  : 'bg-surface-muted ring-line',
              !acikMi && 'opacity-50'
            )}
          >
            <p className="text-sm font-medium text-ink/75">{adim.yonerge}</p>
            <Input
              value={cevap[i] ?? ''}
              disabled={kilitli || !acikMi}
              onChange={(e) => {
                const yeni = [...cevap]
                yeni[i] = e.target.value
                setCevap(yeni)
              }}
              className="mt-2"
              lang="es"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label={`${i + 1}. adım cevabı`}
              placeholder={acikMi ? 'Cümleni yaz…' : 'Önceki adımı tamamla'}
            />
          </li>
        )
      })}
    </ol>
  )
}

function MetinCevap({ value, onChange, kilitli, onEnter, cokSatir = false, yerTutucu = 'Cevabını yaz…' }) {
  const ortak = {
    value,
    disabled: kilitli,
    onChange: (e) => onChange(e.target.value),
    placeholder: yerTutucu,
    lang: 'en',
    autoCapitalize: 'off',
    autoCorrect: 'off',
    spellCheck: false,
    'aria-label': 'Cevabın',
    className: 'mt-3',
  }
  if (!cokSatir) {
    return (
      <Input
        {...ortak}
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onEnter?.() } }}
      />
    )
  }
  return (
    <div className="mt-3">
      <Input
        {...ortak}
        className=""
        onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); onEnter?.() } }}
      />
      <p className="mt-1.5 flex items-center gap-1.5 text-xs text-ink/45">
        <CornerDownLeft className="h-3 w-3" aria-hidden="true" />
        Enter tuşu cevabını kontrol eder.
      </p>
    </div>
  )
}
