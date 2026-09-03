import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  ArrowRight, BookOpenCheck, CheckCircle2, ClipboardList, FileText,
  GraduationCap, Layers, RotateCcw, Target,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import { AppShell, Badge, Button, EmptyState } from '../../components/ui'
import DersBloklari from '../../components/almanca/DersBloklari'
import Alistirma from '../../components/almanca/alistirmalar/Alistirma'
import YazmaGorevi from '../../components/almanca/alistirmalar/YazmaGorevi'
import { useIlerleme, useSes } from '../../components/almanca/useAlmanca'
import { SesUyarisi } from '../../components/almanca/SesDugmesi'
import { dersBul, dersKelimeleri, notBul } from '../../content/almanca'
import { DURUM } from '../../lib/almanca/cevap'
import {
  beceriGuncelle, dersBasla, dersTamamla, DURUMLAR, DURUM_ETIKETLERI, yazmaKaydet,
} from '../../lib/almanca/ilerleme'
import { BECERILER } from '../../lib/almanca/seviyeler'

/**
 * Ders oynatıcı — bir dersi baştan sona çalıştırır.
 *
 * BEŞ AŞAMA: öğren → alıştır → özet → mini sınav → sonuç.
 *
 * Aşamalar bilinçli olarak AYRI ekranlarda: bütün ders tek sayfada
 * verilseydi öğrenci alıştırmaları atlayıp okuyup geçerdi. Alıştırma
 * bölümünde soru soru ilerlenir; her sorudan sonra geri bildirim gelir.
 *
 * "Dersi açmak" tamamlamak sayılmaz — durum yalnız çözülen alıştırmaların
 * oranına göre belirlenir (bkz. lib/almanca/ilerleme.js `dersTamamla`).
 */

const ASAMALAR = [
  { kod: 'anlatim', ad: 'Öğren', Icon: BookOpenCheck },
  { kod: 'alistirma', ad: 'Alıştır', Icon: Layers },
  { kod: 'ozet', ad: 'Özet', Icon: ClipboardList },
  { kod: 'sinav', ad: 'Mini sınav', Icon: Target },
  { kod: 'bitis', ad: 'Sonuç', Icon: GraduationCap },
]

export default function Ders() {
  const { dersId } = useParams()
  const yonlendir = useNavigate()
  const ilerleme = useIlerleme()
  const ses = useSes()
  const ders = dersBul(dersId)

  const [asama, setAsama] = useState('anlatim')
  const [alistirmaIndeks, setAlistirmaIndeks] = useState(0)
  const [sinavIndeks, setSinavIndeks] = useState(0)
  const [skor, setSkor] = useState({ dogru: 0, toplam: 0 })
  const [izler, setIzler] = useState([])
  const [baslangicZamani] = useState(() => Date.now())
  const [sonuc, setSonuc] = useState(null)
  const ustRef = useRef(null)

  /* Skor ve izler hem ekranda gösterilir (state) hem de ders bitince
     kaydedilir. Kayıt anında en güncel değere ihtiyaç olduğu için ayrıca
     bir ref'te tutulur: state güncellemesi eşzamansızdır ve son sorunun
     cevabı henüz state'e yansımamış olabilir. */
  const skorRef = useRef({ dogru: 0, toplam: 0 })
  const izRef = useRef([])


  useEffect(() => {
    if (ders) dersBasla(ders.id)
  }, [ders?.id])

  useEffect(() => {
    ustRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [asama, alistirmaIndeks, sinavIndeks])

  const kelimeler = useMemo(() => (ders ? dersKelimeleri(ders) : []), [ders])
  const not = ders?.not ? notBul(ders.not) : null
  const sesHazir = ses?.hazir === true

  if (!ders) {
    return (
      <AppShell title="Ders" width="narrow">
        <EmptyState
          icon={BookOpenCheck}
          title="Ders bulunamadı"
          description="Bu ders kaldırılmış ya da adresi değişmiş olabilir."
          action={<Button as={Link} to="/almanca/kutuphane">Kütüphaneye dön</Button>}
        />
      </AppShell>
    )
  }

  const alistirmalar = ders.alistirmalar ?? []
  const sinav = ders.miniSinav ?? []
  const kayit = ilerleme.dersler?.[ders.id]

  const sonucKaydet = () => {
    const yeniSkor = skorRef.current
    const dakika = Math.max(1, Math.round((Date.now() - baslangicZamani) / 60000))
    dersTamamla(ders.id, {
      dogru: yeniSkor.dogru,
      toplam: yeniSkor.toplam,
      dakika,
      izler: izRef.current,
    })
    const oran = yeniSkor.toplam ? Math.round((yeniSkor.dogru / yeniSkor.toplam) * 100) : 0
    ;(ders.beceriler ?? [ders.odakBeceri]).forEach((b) => beceriGuncelle(b, oran))
    setSonuc({ ...yeniSkor, oran, dakika })
  }

  const cevapAlindi = (s) => {
    const dogruMu = s.durum === DURUM.DOGRU || s.durum === DURUM.YAKIN
    skorRef.current = {
      dogru: skorRef.current.dogru + (dogruMu ? 1 : 0),
      toplam: skorRef.current.toplam + 1,
    }
    setSkor(skorRef.current)
    if (s.teshis?.kod && !izRef.current.includes(s.teshis.kod)) {
      izRef.current = [...izRef.current, s.teshis.kod]
      setIzler(izRef.current)
    }
  }

  const sifirla = () => {
    skorRef.current = { dogru: 0, toplam: 0 }
    izRef.current = []
    setSkor(skorRef.current)
    setIzler([])
    setSonuc(null)
    setAlistirmaIndeks(0)
    setSinavIndeks(0)
    setAsama('anlatim')
  }

  const asamaIndeksi = ASAMALAR.findIndex((a) => a.kod === asama)

  return (
    <AppShell
      title={ders.baslik}
      subtitle={`${ders.seviye} · ${BECERILER[ders.odakBeceri]?.ad ?? ''}`}
      width="narrow"
      headerAction={
        <Button as={Link} to="/almanca/kutuphane" variant="ghost" size="sm">
          Kütüphane
        </Button>
      }
    >
      <span ref={ustRef} aria-hidden="true" />

      {/* Aşama şeridi */}
      <nav aria-label="Ders aşamaları" className="min-w-0 overflow-x-auto hide-scrollbar">
        <ol className="flex min-w-max items-center gap-1.5">
          {ASAMALAR.map((a, i) => {
            const aktif = a.kod === asama
            const gecildi = i < asamaIndeksi
            return (
              <li key={a.kod} className="flex items-center gap-1.5">
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-2xs font-bold uppercase tracking-[0.08em] ring-1 ring-inset transition',
                    aktif
                      ? 'bg-brand-500/12 text-brand-700 ring-brand-500/22'
                      : gecildi
                        ? 'bg-success-500/10 text-success-700 ring-success-500/18'
                        : 'bg-surface-sunken text-ink/40 ring-line'
                  )}
                  aria-current={aktif ? 'step' : undefined}
                >
                  {gecildi
                    ? <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    : <a.Icon className="h-3.5 w-3.5" aria-hidden="true" />}
                  {a.ad}
                </span>
                {i < ASAMALAR.length - 1 && (
                  <span className="h-px w-3 bg-line" aria-hidden="true" />
                )}
              </li>
            )
          })}
        </ol>
      </nav>

      {/* ---------------- ÖĞREN ---------------- */}
      {asama === 'anlatim' && (
        <>
          <section className="rounded-card bg-brand-500/[0.06] p-5 ring-1 ring-inset ring-brand-500/15 sm:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="brand" size="sm">{ders.seviye}</Badge>
              <Badge tone="neutral" size="sm">{ders.sure} dakika</Badge>
              {kayit?.durum && kayit.durum !== DURUMLAR.BASLANMADI && (
                <Badge tone={DURUM_ETIKETLERI[kayit.durum].tone} size="sm">
                  {DURUM_ETIKETLERI[kayit.durum].ad}
                </Badge>
              )}
            </div>
            <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
              {ders.baslik}
            </h1>
            <p className="mt-1.5 text-[0.98rem] leading-relaxed text-ink/65">{ders.altBaslik}</p>

            <div className="mt-4 grid gap-3">
              <Kutu baslik="Bu dersin amacı" metin={ders.amac} />
              {ders.baglam && (
                <Kutu
                  baslik="Nerede işine yarayacak"
                  metin={`${ders.baglam.durum} ${ders.baglam.neden}`}
                />
              )}
              {ders.onKosullar?.length > 0 && (
                <p className="text-sm leading-relaxed text-ink/55">
                  Ön koşul: {ders.onKosullar.map((id) => dersBul(id)?.baslik ?? id).join(', ')}
                </p>
              )}
            </div>
          </section>

          <SesUyarisi durum={ses} />

          <DersBloklari bloklar={ders.bloklar} sesHazir={sesHazir} />

          {not && (
            <Link
              to={`/almanca/yazdir/${not.id}`}
              className="focus-ring flex items-center gap-3 rounded-card border border-line bg-surface p-4 shadow-card transition hover:border-brand-500/25"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <FileText className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-[0.95rem] font-semibold text-ink">
                  {not.baslik} — yazdırılabilir not
                </span>
                <span className="mt-0.5 block text-sm text-ink/55">
                  Ekranda aç, yazdır ya da PDF olarak kaydet
                </span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink/25" aria-hidden="true" />
            </Link>
          )}

          <div className="flex justify-end">
            <Button size="lg" iconRight={ArrowRight} onClick={() => setAsama('alistirma')}>
              Alıştırmalara geç
            </Button>
          </div>
        </>
      )}

      {/* ---------------- ALIŞTIR ---------------- */}
      {asama === 'alistirma' && (
        <>
          <IlerlemeCubugu
            simdiki={alistirmaIndeks + 1}
            toplam={alistirmalar.length}
            etiket="Alıştırma"
          />

          {alistirmalar[alistirmaIndeks]?.tur === 'yazma' ? (
            <YazmaGorevi
              alistirma={alistirmalar[alistirmaIndeks]}
              baslangicTaslak={ilerleme.yazmalar?.[alistirmalar[alistirmaIndeks].id]?.taslak ?? ''}
              onTamamla={({ ilkSurum, sonSurum }) => {
                yazmaKaydet(alistirmalar[alistirmaIndeks].id, { taslak: ilkSurum, son: sonSurum })
                // Yazma görevi doğru/yanlış olarak puanlanmaz; tamamlanması
                // yeterlidir. Skora "yapıldı" olarak girer.
                skorRef.current = {
                  dogru: skorRef.current.dogru + 1,
                  toplam: skorRef.current.toplam + 1,
                }
                setSkor(skorRef.current)
                sonrakiAlistirma()
              }}
            />
          ) : (
            <Alistirma
              key={alistirmalar[alistirmaIndeks]?.id}
              alistirma={alistirmalar[alistirmaIndeks]}
              sesHazir={sesHazir}
              numara={alistirmaIndeks + 1}
              toplam={alistirmalar.length}
              onSonuc={cevapAlindi}
              onDevam={sonrakiAlistirma}
              devamEtiketi={
                alistirmaIndeks + 1 < alistirmalar.length ? 'Sonraki alıştırma' : 'Özete geç'
              }
            />
          )}

          <div className="flex justify-between">
            <Button variant="ghost" onClick={() => setAsama('anlatim')}>
              Anlatıma dön
            </Button>
            <Button variant="ghost" onClick={() => setAsama('ozet')}>
              Alıştırmaları atla
            </Button>
          </div>
        </>
      )}

      {/* ---------------- ÖZET ---------------- */}
      {asama === 'ozet' && (
        <>
          <section className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6">
            <h2 className="font-display text-lg font-bold text-ink">Ders özeti</h2>
            <ul className="mt-3 grid gap-2.5">
              {ders.ozet.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-ink/75">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success-600" strokeWidth={2.2} aria-hidden="true" />
                  {o}
                </li>
              ))}
            </ul>
          </section>

          {kelimeler.length > 0 && (
            <section className="rounded-card bg-surface-muted p-5 ring-1 ring-inset ring-line">
              <h2 className="font-display text-base font-bold text-ink">Bu dersin tekrar kartları</h2>
              <p className="mt-1 text-sm leading-relaxed text-ink/60">
                Bu {kelimeler.length} kelime tekrar sistemine eklendi. Unutma noktasına yaklaştıklarında
                günlük görevlerinde karşına çıkacaklar.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {kelimeler.map((k) => (
                  <span
                    key={k.id}
                    className="rounded-full bg-surface px-3 py-1.5 text-sm font-medium text-ink ring-1 ring-inset ring-line"
                    lang="de"
                  >
                    {k.kelime}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className="flex justify-end">
            <Button size="lg" iconRight={ArrowRight} onClick={() => setAsama('sinav')}>
              Mini sınava geç
            </Button>
          </div>
        </>
      )}

      {/* ---------------- MİNİ SINAV ---------------- */}
      {asama === 'sinav' && (
        <>
          <IlerlemeCubugu simdiki={sinavIndeks + 1} toplam={sinav.length} etiket="Mini sınav" />
          <Alistirma
            key={sinav[sinavIndeks]?.id}
            alistirma={sinav[sinavIndeks]}
            sesHazir={sesHazir}
            numara={sinavIndeks + 1}
            toplam={sinav.length}
            onSonuc={cevapAlindi}
            onDevam={sonrakiSinav}
            devamEtiketi={sinavIndeks + 1 < sinav.length ? 'Sonraki soru' : 'Sonucu gör'}
          />
        </>
      )}

      {/* ---------------- SONUÇ ---------------- */}
      {asama === 'bitis' && sonuc && (
        <Bitis
          ders={ders}
          sonuc={sonuc}
          izler={izler}
          onTekrar={sifirla}
          onSonraki={() => {
            if (ders.sonraki) {
              yonlendir(`/almanca/ders/${ders.sonraki}`)
              sifirla()
            } else {
              yonlendir('/almanca')
            }
          }}
        />
      )}
    </AppShell>
  )

  function sonrakiAlistirma() {
    if (alistirmaIndeks + 1 < alistirmalar.length) setAlistirmaIndeks((i) => i + 1)
    else setAsama('ozet')
  }

  function sonrakiSinav() {
    if (sinavIndeks + 1 < sinav.length) {
      setSinavIndeks((i) => i + 1)
      return
    }
    sonucKaydet()
    setAsama('bitis')
  }
}

/* ------------------------------------------------------------------ */

function Kutu({ baslik, metin }) {
  return (
    <div className="rounded-input bg-surface px-4 py-3 ring-1 ring-inset ring-line">
      <p className="text-2xs font-bold uppercase tracking-[0.12em] text-ink/45">{baslik}</p>
      <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/75">{metin}</p>
    </div>
  )
}

function IlerlemeCubugu({ simdiki, toplam, etiket }) {
  const oran = toplam ? Math.round((simdiki / toplam) * 100) : 0
  return (
    <div>
      <div className="flex items-baseline justify-between gap-2">
        <span className="text-2xs font-bold uppercase tracking-[0.14em] text-ink/45">{etiket}</span>
        <span className="text-xs font-semibold text-ink/55 tabular">{simdiki} / {toplam}</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-surface-sunken">
        <div
          className="h-full rounded-full bg-aurora-line transition-[width] duration-300"
          style={{ width: `${oran}%` }}
          role="progressbar"
          aria-valuenow={oran}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${etiket} ilerlemesi`}
        />
      </div>
    </div>
  )
}

function Bitis({ ders, sonuc, izler, onTekrar, onSonraki }) {
  const durum = sonuc.oran >= 90
    ? DURUMLAR.GUCLENIYOR
    : sonuc.oran >= 70 ? DURUMLAR.TAMAMLANDI : DURUMLAR.TEKRAR_GEREKLI
  const etiket = DURUM_ETIKETLERI[durum]
  const sonrakiDers = ders.sonraki ? dersBul(ders.sonraki) : null

  return (
    <>
      <section
        className={cn(
          'rounded-card p-6 ring-1 ring-inset',
          durum === DURUMLAR.TEKRAR_GEREKLI
            ? 'bg-warning-500/[0.07] ring-warning-500/20'
            : 'bg-success-500/[0.07] ring-success-500/20'
        )}
      >
        <Badge tone={etiket.tone}>{etiket.ad}</Badge>
        <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-ink">
          {sonuc.dogru} / {sonuc.toplam} doğru
        </h2>
        <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/70">
          {durum === DURUMLAR.TEKRAR_GEREKLI
            ? 'Bu ders henüz oturmadı. Yeni konuya geçmek yerine bunu bir kez daha çalışmak seni daha hızlı ilerletir — bu bir başarısızlık değil, sistemin işleyişi.'
            : durum === DURUMLAR.TAMAMLANDI
              ? 'Ders tamamlandı. Bir süre sonra tekrar karşına çıkacak; ikinci seferde de iyi gidersen "ustalaşıldı" olacak.'
              : 'Çok iyi. Bu dersi bir kez daha bu başarıyla geçersen "ustalaşıldı" durumuna geçecek.'}
        </p>
        <p className="mt-2 text-sm text-ink/50 tabular">Bu oturumda yaklaşık {sonuc.dakika} dakika çalıştın.</p>
      </section>

      {izler.length > 0 && (
        <section className="rounded-card border border-line bg-surface p-5 shadow-card">
          <h3 className="font-display text-base font-bold text-ink">
            Bu derste görülen Türkçe düşünme izleri
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink/60">
            Bunlar hata defterine eklendi. Aynı iz iki hafta üst üste çıkmazsa düzelmiş sayılacak.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {izler.map((kod) => (
              <Badge key={kod} tone="accent" size="sm">{kod}</Badge>
            ))}
          </div>
          <Button as={Link} to="/almanca/dusunme" variant="secondary" size="sm" className="mt-3">
            Bu alanda antrenman yap
          </Button>
        </section>
      )}

      <div className="flex flex-col gap-2.5 sm:flex-row">
        <Button size="lg" iconRight={ArrowRight} onClick={onSonraki} className="justify-center">
          {sonrakiDers ? `Sıradaki: ${sonrakiDers.baslik}` : 'Ana sayfaya dön'}
        </Button>
        <Button size="lg" variant="secondary" icon={RotateCcw} onClick={onTekrar} className="justify-center">
          Dersi tekrar çalış
        </Button>
      </div>
    </>
  )
}
