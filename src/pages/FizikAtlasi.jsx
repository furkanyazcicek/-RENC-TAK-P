import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, Compass, Map as MapIcon, Moon, RotateCcw, Sun, Trash2,
} from 'lucide-react'
import AtlasHaritasi from '../components/fizik/AtlasHaritasi.jsx'
import { BOLGELER, bolgeBul } from '../data/fizik/bolgeler.js'
import { ikonBul } from '../data/fizik/ikonlar.js'
import {
  bolgeYuzdesi, ilerlemeOku, ilerlemeyiSil, konumKaydet,
} from '../lib/fizik/ilerleme.js'
import { IlerlemeCubugu, Not } from '../components/fizik/ortak/index.js'
import '../styles/fizik-atlasi.css'

/**
 * Fizik Atlası — Sayfa kabuğu
 * ==================================================================
 * Her bölge modülü ayrı pakete alınır (lazy): 13 simülasyonun tamamı
 * ana pakete girerse, tek bir bölgeye bakan öğrenci hepsini indirmiş
 * olur. Bölge açıldığında yalnızca o modül iner.
 */
const MODULLER = {
  olcme: lazy(() => import('../components/fizik/bolgeler/OlcmeBolgesi.jsx')),
  vektorler: lazy(() => import('../components/fizik/bolgeler/VektorBolgesi.jsx')),
  madde: lazy(() => import('../components/fizik/bolgeler/MaddeBolgesi.jsx')),
  'kuvvet-hareket': lazy(() => import('../components/fizik/bolgeler/HareketBolgesi.jsx')),
  atislar: lazy(() => import('../components/fizik/bolgeler/AtisBolgesi.jsx')),
  enerji: lazy(() => import('../components/fizik/bolgeler/EnerjiBolgesi.jsx')),
  isi: lazy(() => import('../components/fizik/bolgeler/IsiBolgesi.jsx')),
  basinc: lazy(() => import('../components/fizik/bolgeler/BasincBolgesi.jsx')),
  elektrostatik: lazy(() => import('../components/fizik/bolgeler/ElektrostatikBolgesi.jsx')),
  devreler: lazy(() => import('../components/fizik/bolgeler/DevreBolgesi.jsx')),
  manyetizma: lazy(() => import('../components/fizik/bolgeler/ManyetizmaBolgesi.jsx')),
  dalgalar: lazy(() => import('../components/fizik/bolgeler/DalgaBolgesi.jsx')),
  optik: lazy(() => import('../components/fizik/bolgeler/OptikBolgesi.jsx')),
}

const TEMA_ANAHTARI = 'drkoc-fizik-tema'

function BolumYukleniyor() {
  return (
    <div className="fa-bos" role="status" aria-live="polite">
      Deney hazırlanıyor…
    </div>
  )
}

export default function FizikAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const [bolge, setBolge] = useState(() => {
    const istenen = parametreler.get('bolge')
    return BOLGELER.some((b) => b.kod === istenen) ? istenen : 'harita'
  })
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'koyu'
    const kayitli = window.localStorage.getItem(TEMA_ANAHTARI)
    if (kayitli === 'acik' || kayitli === 'koyu') return kayitli
    // Atlas koyu zemin için tasarlandı; sistem tercihi açıksa ona uyulur.
    return window.matchMedia?.('(prefers-color-scheme: light)')?.matches ? 'acik' : 'koyu'
  })
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)
  const [silOnayi, setSilOnayi] = useState(false)

  useEffect(() => {
    try { window.localStorage.setItem(TEMA_ANAHTARI, tema) } catch { /* depolama kapalı olabilir */ }
  }, [tema])

  useEffect(() => {
    const yeni = new URLSearchParams(parametreler)
    if (bolge === 'harita') yeni.delete('bolge')
    else yeni.set('bolge', bolge)
    setParametreler(yeni, { replace: true })
    // `parametreler` bağımlılığa eklenirse sonsuz döngü olur; kasıtlı olarak dışarıda.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bolge])

  useEffect(() => {
    document.title = bolge === 'harita'
      ? 'Fizik Atlası — Dr. Koç'
      : `${bolgeBul(bolge)?.ad ?? 'Fizik Atlası'} — Fizik Atlası`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bolge])

  const bolgeAc = useCallback((kod) => {
    setBolge(kod)
    setIlerleme(konumKaydet(kod))
  }, [])

  const yuzdeler = useMemo(() => Object.fromEntries(
    BOLGELER.map((b) => [b.kod, bolgeYuzdesi(ilerleme, b.kod, b.deneyler.length)]),
  ), [ilerleme])

  const devamEt = ilerleme.sonBolge && BOLGELER.some((b) => b.kod === ilerleme.sonBolge)
    ? bolgeBul(ilerleme.sonBolge)
    : null

  const AktifModul = bolge !== 'harita' ? MODULLER[bolge] : null

  return (
    <div className="fizik-atlasi" data-tema={tema}>
      <div className="fa-kabuk">
        <header className="fa-ustbar">
          <Link to="/" className="fa-marka" title="Dr. Koç ana sayfasına dön">
            <span className="fa-marka-isaret"><Compass size={19} aria-hidden="true" /></span>
            <span style={{ minWidth: 0 }}>
              <span className="fa-marka-ad">Fizik Atlası</span>
              <span className="fa-marka-alt">Dr. Koç</span>
            </span>
          </Link>

          <div className="fa-ustbar-bosluk" />

          {bolge !== 'harita' ? (
            <button type="button" className="fa-dugme kucuk" onClick={() => bolgeAc('harita')}>
              <MapIcon size={15} /> Haritaya dön
            </button>
          ) : null}

          <button
            type="button"
            className="fa-ikon-dugme"
            onClick={() => setTema((t) => (t === 'koyu' ? 'acik' : 'koyu'))}
            aria-label={tema === 'koyu' ? 'Açık temaya geç' : 'Koyu temaya geç'}
            title={tema === 'koyu' ? 'Açık tema' : 'Koyu tema'}
          >
            {tema === 'koyu' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </header>

        <div className="fa-govde">
          <nav className="fa-yan" aria-label="Fizik Atlası bölgeleri">
            <div className="fa-yan-baslik">Atlas</div>
            <button
              type="button"
              className={`fa-yan-oge ${bolge === 'harita' ? 'etkin' : ''}`}
              onClick={() => bolgeAc('harita')}
              aria-current={bolge === 'harita' ? 'page' : undefined}
            >
              <MapIcon size={16} /> Keşif haritası
            </button>

            <div className="fa-yan-baslik" style={{ marginTop: 16 }}>Bölgeler</div>
            {BOLGELER.map((b) => {
              const Ikon = ikonBul(b.ikon)
              return (
                <button
                  key={b.kod}
                  type="button"
                  className={`fa-yan-oge ${bolge === b.kod ? 'etkin' : ''}`}
                  onClick={() => bolgeAc(b.kod)}
                  aria-current={bolge === b.kod ? 'page' : undefined}
                >
                  <Ikon size={16} style={{ color: b.renk }} />
                  <span style={{ minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {b.kisaAd}
                  </span>
                  {yuzdeler[b.kod] > 0 ? <span className="fa-yan-yuzde">%{yuzdeler[b.kod]}</span> : null}
                </button>
              )
            })}

            <div className="fa-yan-baslik" style={{ marginTop: 16 }}>İlerleme</div>
            <div style={{ padding: '0 10px 10px' }}>
              <IlerlemeCubugu
                yuzde={Math.round(
                  BOLGELER.reduce((t, b) => t + yuzdeler[b.kod], 0) / BOLGELER.length,
                )}
                etiket="Atlasın tamamı"
              />
            </div>
            <button
              type="button"
              className="fa-yan-oge"
              onClick={() => setSilOnayi(true)}
              style={{ color: 'rgb(var(--fa-hata))' }}
            >
              <Trash2 size={16} /> İlerlemeyi sıfırla
            </button>
            <Link to="/" className="fa-yan-oge" style={{ textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Dr. Koç'a dön
            </Link>
          </nav>

          <main className="fa-icerik">
            <div className="fa-kapsa">
              {silOnayi ? (
                <div className="fa-kart" style={{ marginBottom: 16, borderColor: 'rgb(var(--fa-hata) / 0.4)' }}>
                  <Not tur="hata" baslik="İlerlemeni silmek üzeresin">
                    Tamamladığın deneyler, rozetlerin, favorilerin ve Kavram Pusulası kayıtların
                    silinecek. Bu işlem geri alınamaz. Veriler yalnızca bu tarayıcıda tutulduğu için
                    başka bir yerden geri getirilemez.
                  </Not>
                  <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="fa-dugme"
                      style={{ borderColor: 'rgb(var(--fa-hata) / 0.5)', color: 'rgb(var(--fa-hata))' }}
                      onClick={() => {
                        ilerlemeyiSil('EVET-SIL')
                        setIlerleme(ilerlemeOku())
                        setSilOnayi(false)
                      }}
                    >
                      <Trash2 size={15} /> Evet, hepsini sil
                    </button>
                    <button type="button" className="fa-dugme birincil" onClick={() => setSilOnayi(false)}>
                      Vazgeç
                    </button>
                  </div>
                </div>
              ) : null}

              {bolge === 'harita' ? (
                <>
                  {devamEt ? (
                    <div className="fa-kart" style={{ marginBottom: 16, borderColor: `${devamEt.renk}55` }}>
                      <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1 1 220px', minWidth: 0 }}>
                          <div className="fa-ust-etiket" style={{ color: devamEt.renk, margin: 0 }}>Kaldığın yer</div>
                          <h3 style={{ fontSize: 16, marginTop: 3 }}>{devamEt.ad}</h3>
                        </div>
                        <button type="button" className="fa-dugme birincil" onClick={() => bolgeAc(devamEt.kod)}>
                          <RotateCcw size={15} /> Kaldığın yerden devam et
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <AtlasHaritasi ilerleme={ilerleme} onBolgeSec={bolgeAc} />
                </>
              ) : AktifModul ? (
                <Suspense fallback={<BolumYukleniyor />}>
                  <AktifModul />
                </Suspense>
              ) : null}
            </div>
          </main>
        </div>

        <nav className="fa-alt-gezinme" aria-label="Bölgeler">
          <button
            type="button"
            className={`fa-alt-oge ${bolge === 'harita' ? 'etkin' : ''}`}
            onClick={() => bolgeAc('harita')}
            aria-current={bolge === 'harita' ? 'page' : undefined}
          >
            <MapIcon size={17} /> Harita
          </button>
          {BOLGELER.map((b) => {
            const Ikon = ikonBul(b.ikon)
            return (
              <button
                key={b.kod}
                type="button"
                className={`fa-alt-oge ${bolge === b.kod ? 'etkin' : ''}`}
                onClick={() => bolgeAc(b.kod)}
                aria-current={bolge === b.kod ? 'page' : undefined}
              >
                <Ikon size={17} style={{ color: bolge === b.kod ? undefined : b.renk }} />
                {b.kisaAd.split(' ')[0]}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
