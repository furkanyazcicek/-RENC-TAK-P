import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft, BookOpenCheck, Dna, Map, Menu, Moon, RotateCcw,
  SearchCheck, Sun, Trash2, X,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import AtlasHaritasi from '../components/biyoloji/AtlasHaritasi.jsx'
import GlobalArama from '../components/biyoloji/GlobalArama.jsx'
import MufredatKapsami from '../components/biyoloji/MufredatKapsami.jsx'
import { BOLGELER, bolgeBul } from '../data/biyoloji/bolgeler.js'
import { bolgeKonulari } from '../data/biyoloji/kapsam.js'
import { ilerlemeOku, ilerlemeyiSil } from '../lib/biyoloji/ilerleme.js'
import '../styles/biyoloji-atlasi.css'
import '../styles/atlas-ortak.css'

const MODULLER = {
  yasam: lazy(() => import('../components/biyoloji/bolgeler/YasamBolgesi.jsx')),
  molekul: lazy(() => import('../components/biyoloji/bolgeler/MolekulBolgesi.jsx')),
  hucre: lazy(() => import('../components/biyoloji/bolgeler/HucreBolgesi.jsx')),
  siniflandirma: lazy(() => import('../components/biyoloji/bolgeler/SiniflandirmaBolgesi.jsx')),
  bolunme: lazy(() => import('../components/biyoloji/bolgeler/BolunmeBolgesi.jsx')),
  kalitim: lazy(() => import('../components/biyoloji/bolgeler/KalitimBolgesi.jsx')),
  enerji: lazy(() => import('../components/biyoloji/bolgeler/EnerjiBolgesi.jsx')),
  ekosistem: lazy(() => import('../components/biyoloji/bolgeler/EkosistemBolgesi.jsx')),
  pusula: lazy(() => import('../components/biyoloji/bolgeler/PusulaBolgesi.jsx')),
  kamp: lazy(() => import('../components/biyoloji/bolgeler/KampBolgesi.jsx')),
}

const GECERLI_BOLGELER = new Set(['harita', 'mufredat', ...BOLGELER.map((bolge) => bolge.kod)])
const KAPSAMLAR = new Set(['tyt', 'tymm', 'tum'])
const TEMA_ANAHTARI = 'drkoc-biyoloji-tema'

function Yukleniyor() {
  return (
    <div className="ba-yukleniyor" role="status" aria-live="polite">
      Canlı sistem modeli hazırlanıyor…
    </div>
  )
}

export default function BiyolojiAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const adrestekiBolge = parametreler.get('bolge') ?? 'harita'
  const [bolge, setBolge] = useState(() => (
    GECERLI_BOLGELER.has(adrestekiBolge) ? adrestekiBolge : 'harita'
  ))
  const [kapsam, setKapsam] = useState(() => (
    KAPSAMLAR.has(parametreler.get('kapsam')) ? parametreler.get('kapsam') : 'tum'
  ))
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'koyu'
    try {
      const kayitli = window.localStorage.getItem(TEMA_ANAHTARI)
      if (kayitli === 'acik' || kayitli === 'koyu') return kayitli
      return window.matchMedia?.('(prefers-color-scheme: light)')?.matches ? 'acik' : 'koyu'
    } catch {
      return 'koyu'
    }
  })
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)
  const [silOnayi, setSilOnayi] = useState(false)
  const [hedef, setHedef] = useState(null)
  const [mobilMenu, setMobilMenu] = useState(false)
  const cekmeceRef = useRef(null)
  const menuDugmesiRef = useRef(null)

  useEffect(() => {
    try { window.localStorage.setItem(TEMA_ANAHTARI, tema) } catch { /* Depolama kapalı olabilir. */ }
  }, [tema])

  useEffect(() => {
    const ilerlemeyiYenile = () => setIlerleme(ilerlemeOku())
    window.addEventListener('biyoloji-ilerleme', ilerlemeyiYenile)
    return () => window.removeEventListener('biyoloji-ilerleme', ilerlemeyiYenile)
  }, [])

  useEffect(() => {
    const yeniBolge = parametreler.get('bolge') ?? 'harita'
    const yeniKapsam = parametreler.get('kapsam')
    if (GECERLI_BOLGELER.has(yeniBolge) && yeniBolge !== bolge) setBolge(yeniBolge)
    if (KAPSAMLAR.has(yeniKapsam) && yeniKapsam !== kapsam) setKapsam(yeniKapsam)
  }, [parametreler, bolge, kapsam])

  useEffect(() => {
    document.title = bolge === 'harita'
      ? 'Biyoloji Atlası — Dr. Koç'
      : `${bolgeBul(bolge)?.ad ?? 'Müfredat'} — Biyoloji Atlası`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bolge])

  useEffect(() => {
    if (!hedef || bolge === 'harita') return undefined
    const zamanlayici = window.setTimeout(() => {
      const oge = document.getElementById(hedef)
      if (oge) {
        oge.scrollIntoView({ behavior: 'smooth', block: 'start' })
        oge.focus?.({ preventScroll: true })
      }
      setHedef(null)
    }, 500)
    return () => window.clearTimeout(zamanlayici)
  }, [bolge, hedef])

  useEffect(() => {
    if (!mobilMenu) return undefined
    const oncekiOdak = document.activeElement
    window.requestAnimationFrame(() => cekmeceRef.current?.focus())
    const kapat = (olay) => {
      if (olay.key === 'Escape') setMobilMenu(false)
    }
    window.addEventListener('keydown', kapat)
    return () => {
      window.removeEventListener('keydown', kapat)
      if (oncekiOdak instanceof HTMLElement) oncekiOdak.focus()
    }
  }, [mobilMenu])

  const bolgeAc = useCallback((kod, id = null) => {
    setBolge(kod)
    setHedef(id)
    setMobilMenu(false)
    const yeni = new URLSearchParams(parametreler)
    if (kod === 'harita') yeni.delete('bolge')
    else yeni.set('bolge', kod)
    if (id) yeni.set('etkilesim', id)
    else yeni.delete('etkilesim')
    yeni.set('kapsam', kapsam)
    setParametreler(yeni)
  }, [parametreler, kapsam, setParametreler])

  const kapsamSec = (yeniKapsam) => {
    setKapsam(yeniKapsam)
    const yeni = new URLSearchParams(parametreler)
    yeni.set('kapsam', yeniKapsam)
    setParametreler(yeni, { replace: true })
  }

  const yuzdeler = useMemo(() => Object.fromEntries(BOLGELER.map((kayit) => {
    const konular = bolgeKonulari(kayit.kod)
    const biten = konular.filter((konu) => ilerleme.tamamlananlar[konu.etkilesimId]).length
    return [kayit.kod, konular.length ? Math.round((biten / konular.length) * 100) : 0]
  })), [ilerleme])

  const olculenBolgeler = BOLGELER.filter((kayit) => bolgeKonulari(kayit.kod).length)
  const genel = Math.round(
    olculenBolgeler.reduce((toplam, kayit) => toplam + yuzdeler[kayit.kod], 0)
      / Math.max(1, olculenBolgeler.length),
  )
  const AktifModul = MODULLER[bolge]

  return (
    <div className="biyoloji-atlasi atlas-sayfa" data-tema={tema}>
      <div className="atlas-kabuk">
        <header className="atlas-ustbar">
          <Link to="/kutuphane" className="atlas-marka" title="Dr. Koç kütüphanesine dön">
            <span className="atlas-marka-isaret"><Dna aria-hidden="true" /></span>
            <span className="atlas-marka-metin">
              <span className="atlas-marka-ad">Biyoloji Atlası</span>
              <span className="atlas-marka-alt">Dr. Koç · TYT ve 2026 TYMM</span>
            </span>
          </Link>

          <div className="atlas-ust-orta">
            <div className="atlas-arama-yuva">
              <GlobalArama onSec={(sonuc) => bolgeAc(sonuc.bolge, sonuc.id)} />
            </div>
          </div>

          <div className="atlas-ust-eylemler">
            {bolge !== 'harita' ? (
              <button
                type="button"
                className="atlas-dugme"
                onClick={() => bolgeAc('harita')}
                title="Keşif haritasına dön"
              >
                <Map aria-hidden="true" />
                <span className="atlas-dugme-yazi">Haritaya dön</span>
              </button>
            ) : null}
            <Link to="/kutuphane" className="atlas-dugme atlas-platforma-don">
              <ArrowLeft aria-hidden="true" />
              <span className="atlas-dugme-yazi">Kütüphaneye dön</span>
            </Link>
            <button
              type="button"
              className="atlas-ikon-dugme"
              onClick={() => setTema((deger) => (deger === 'koyu' ? 'acik' : 'koyu'))}
              aria-label={tema === 'koyu' ? 'Açık temaya geç' : 'Koyu temaya geç'}
              title={tema === 'koyu' ? 'Açık tema' : 'Koyu tema'}
            >
              {tema === 'koyu' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
            </button>
          </div>
        </header>

        <div className="atlas-govde">
          <aside className="atlas-yan" aria-label="Biyoloji Atlası bölgeleri">
            <span className="atlas-yan-baslik">Atlas</span>
            <button
              type="button"
              className={`atlas-yan-oge ${bolge === 'harita' ? 'etkin' : ''}`}
              onClick={() => bolgeAc('harita')}
              aria-current={bolge === 'harita' ? 'page' : undefined}
            >
              <Map aria-hidden="true" /> Keşif haritası
            </button>
            <button
              type="button"
              className={`atlas-yan-oge ${bolge === 'mufredat' ? 'etkin' : ''}`}
              onClick={() => bolgeAc('mufredat')}
              aria-current={bolge === 'mufredat' ? 'page' : undefined}
            >
              <BookOpenCheck aria-hidden="true" /> Müfredat kapsamı
            </button>

            <span className="atlas-yan-baslik">Bölgeler</span>
            {BOLGELER.map((kayit) => (
              <button
                key={kayit.kod}
                type="button"
                className={`atlas-yan-oge ${bolge === kayit.kod ? 'etkin' : ''}`}
                onClick={() => bolgeAc(kayit.kod)}
                aria-current={bolge === kayit.kod ? 'page' : undefined}
              >
                <i className="atlas-yan-nokta" style={{ background: kayit.renk }} aria-hidden="true" />
                <span className="atlas-yan-oge-metin">{kayit.kisaAd}</span>
                {yuzdeler[kayit.kod] > 0 ? (
                  <span className="atlas-yan-yuzde">%{yuzdeler[kayit.kod]}</span>
                ) : null}
              </button>
            ))}

            <span className="atlas-yan-baslik">İlerleme</span>
            <div className="atlas-yan-ilerleme" aria-label={`Atlasın yüzde ${genel} kadarı tamamlandı`}>
              <span><i style={{ width: `${genel}%` }} /></span>
              <b>%{genel}</b>
            </div>
            <button type="button" className="atlas-yan-oge tehlike" onClick={() => setSilOnayi(true)}>
              <Trash2 aria-hidden="true" /> İlerlemeyi sıfırla
            </button>
            <Link to="/kutuphane" className="atlas-yan-oge">
              <ArrowLeft aria-hidden="true" /> Kütüphaneye dön
            </Link>
          </aside>

          <main className="atlas-icerik">
            {silOnayi ? (
              <section className="atlas-uyari-satir" role="alertdialog" aria-modal="true" aria-labelledby="ba-sil-baslik">
                <Trash2 aria-hidden="true" />
                <div>
                  <b id="ba-sil-baslik">Biyoloji ilerlemesi silinsin mi?</b>
                  <p>Tamamlanan etkileşimler, hata defteri, favoriler ve ustalık kayıtları yalnızca bu tarayıcıdan silinir.</p>
                </div>
                <button
                  type="button"
                  className="atlas-dugme tehlike"
                  onClick={() => {
                    ilerlemeyiSil('BIYOLOJI-SIL')
                    setIlerleme(ilerlemeOku())
                    setSilOnayi(false)
                  }}
                >
                  Evet, sil
                </button>
                <button type="button" className="atlas-dugme" onClick={() => setSilOnayi(false)}>Vazgeç</button>
              </section>
            ) : null}

            <section className="atlas-kapsam-filtre" aria-label="Müfredat kapsam filtresi">
              {[
                ['tyt', 'TYT sınav çekirdeği'],
                ['tymm', '2026 TYMM'],
                ['tum', 'Tam atlas'],
              ].map(([kod, ad]) => (
                <button
                  key={kod}
                  type="button"
                  className={kapsam === kod ? 'etkin' : ''}
                  aria-pressed={kapsam === kod}
                  onClick={() => kapsamSec(kod)}
                >
                  {ad}
                </button>
              ))}
              <p>TYT sınav odağı ile 2026 programındaki Yaşam, Organizasyon, Enerji ve Ekoloji temaları ayrı ayrı izlenebilir.</p>
            </section>

            {bolge === 'harita' ? (
              <AtlasHaritasi kapsam={kapsam} ilerleme={ilerleme} yuzdeler={yuzdeler} onBolgeSec={bolgeAc} />
            ) : bolge === 'mufredat' ? (
              <MufredatKapsami
                kapsam={kapsam}
                ilerleme={ilerleme}
                onSec={({ bolge: hedefBolge, id }) => bolgeAc(hedefBolge, id)}
              />
            ) : AktifModul ? (
              <Suspense fallback={<Yukleniyor />}>
                <AktifModul />
              </Suspense>
            ) : null}
          </main>
        </div>

        {mobilMenu ? (
          <div
            className="atlas-mobil-cekmece"
            role="dialog"
            aria-modal="true"
            aria-label="Tüm biyoloji bölgeleri"
            tabIndex={-1}
            ref={cekmeceRef}
          >
            <div className="atlas-mobil-cekmece-ust">
              <b>Tüm biyoloji bölgeleri</b>
              <button
                type="button"
                className="atlas-ikon-dugme"
                onClick={() => setMobilMenu(false)}
                aria-label="Menüyü kapat"
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <div className="atlas-mobil-bolgeler">
              {BOLGELER.map((kayit) => (
                <button
                  type="button"
                  key={kayit.kod}
                  onClick={() => bolgeAc(kayit.kod)}
                  className={`atlas-mobil-bolge ${bolge === kayit.kod ? 'etkin' : ''}`}
                >
                  <i style={{ background: kayit.renk }} aria-hidden="true" />
                  <span>{kayit.ad}<small>%{yuzdeler[kayit.kod]} tamamlandı</small></span>
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <nav className="atlas-alt-gezinme" aria-label="Mobil atlas gezinmesi">
          <button type="button" className={bolge === 'harita' ? 'etkin' : ''} onClick={() => bolgeAc('harita')}>
            <Map aria-hidden="true" /> Harita
          </button>
          <button type="button" className={bolge === 'mufredat' ? 'etkin' : ''} onClick={() => bolgeAc('mufredat')}>
            <BookOpenCheck aria-hidden="true" /> Kapsam
          </button>
          <button type="button" ref={menuDugmesiRef} onClick={() => setMobilMenu(true)}>
            <Menu aria-hidden="true" /> Bölgeler
          </button>
          <button type="button" className={bolge === 'pusula' ? 'etkin' : ''} onClick={() => bolgeAc('pusula')}>
            <SearchCheck aria-hidden="true" /> Pusula
          </button>
          <button type="button" className={bolge === 'kamp' ? 'etkin' : ''} onClick={() => bolgeAc('kamp')}>
            <RotateCcw aria-hidden="true" /> Kamp
          </button>
        </nav>
      </div>
    </div>
  )
}
