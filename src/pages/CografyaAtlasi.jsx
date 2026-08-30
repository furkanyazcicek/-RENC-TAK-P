import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft, BookOpenCheck, Compass, Globe2, Map, Menu, Moon, RotateCcw,
  Route, SearchCheck, Sun, Trash2, X,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import AtlasHaritasi from '../components/cografya/AtlasHaritasi.jsx'
import BolgeKesifYuzeyi from '../components/cografya/BolgeKesifYuzeyi.jsx'
import BolgeSeridi from '../components/cografya/BolgeSeridi.jsx'
import GlobalArama from '../components/cografya/GlobalArama.jsx'
import MufredatKapsami from '../components/cografya/MufredatKapsami.jsx'
import { BOLGELER, bolgeBul } from '../data/cografya/bolgeler.js'
import { bolgeEtkilesimleri } from '../data/cografya/kapsam.js'
import { ilerlemeOku, ilerlemeyiSil } from '../lib/cografya/ilerleme.js'
import '../styles/cografya-atlasi.css'
import '../styles/cografya-atlasi-2026.css'
import '../styles/atlas-ortak.css'

const MODULLER = {
  sistemler: lazy(() => import('../components/cografya/bolgeler/SistemlerBolgesi.jsx')),
  gezegen: lazy(() => import('../components/cografya/bolgeler/GezegenBolgesi.jsx')),
  konum: lazy(() => import('../components/cografya/bolgeler/KonumBolgesi.jsx')),
  'harita-bilgisi': lazy(() => import('../components/cografya/bolgeler/HaritaBolgesi.jsx')),
  iklim: lazy(() => import('../components/cografya/bolgeler/IklimBolgesi.jsx')),
  yerkure: lazy(() => import('../components/cografya/bolgeler/YerkureBolgesi.jsx')),
  'yasam-kusaklari': lazy(() => import('../components/cografya/bolgeler/YasamKusaklariBolgesi.jsx')),
  nufus: lazy(() => import('../components/cografya/bolgeler/NufusBolgesi.jsx')),
  yerlesme: lazy(() => import('../components/cografya/bolgeler/YerlesmeBolgesi.jsx')),
  ekonomi: lazy(() => import('../components/cografya/bolgeler/EkonomiBolgesi.jsx')),
  afet: lazy(() => import('../components/cografya/bolgeler/AfetBolgesi.jsx')),
  pusula: lazy(() => import('../components/cografya/bolgeler/PusulaBolgesi.jsx')),
  kamp: lazy(() => import('../components/cografya/bolgeler/KampBolgesi.jsx')),
}

const GECERLI_BOLGELER = new Set(['harita', 'mufredat', ...BOLGELER.map((bolge) => bolge.kod)])
const KAPSAMLAR = new Set(['tyt', 'tymm', 'tum'])
const TEMA_ANAHTARI = 'drkoc-cografya-tema'

function Yukleniyor() {
  return (
    <div className="ca-yukleniyor" role="status" aria-live="polite">
      <Compass aria-hidden="true" /> Coğrafi model hazırlanıyor…
    </div>
  )
}

export default function CografyaAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const adrestekiBolge = parametreler.get('bolge') ?? 'harita'
  const [bolge, setBolge] = useState(() => (
    GECERLI_BOLGELER.has(adrestekiBolge) ? adrestekiBolge : 'harita'
  ))
  const [kapsam, setKapsam] = useState(() => (
    KAPSAMLAR.has(parametreler.get('kapsam')) ? parametreler.get('kapsam') : 'tum'
  ))
  const [mod, setMod] = useState(() => (
    parametreler.get('mod') === 'kesif' || adrestekiBolge !== 'harita' ? 'kesif' : 'rota'
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
  const [hedef, setHedef] = useState(() => parametreler.get('etkilesim'))
  const [silOnayi, setSilOnayi] = useState(false)
  const [mobilMenu, setMobilMenu] = useState(false)
  const cekmeceRef = useRef(null)

  useEffect(() => {
    try { window.localStorage.setItem(TEMA_ANAHTARI, tema) } catch { /* Depolama kapalı olabilir. */ }
  }, [tema])

  useEffect(() => {
    const ilerlemeyiYenile = () => setIlerleme(ilerlemeOku())
    window.addEventListener('cografya-ilerleme', ilerlemeyiYenile)
    return () => window.removeEventListener('cografya-ilerleme', ilerlemeyiYenile)
  }, [])

  useEffect(() => {
    const yeniBolge = parametreler.get('bolge') ?? 'harita'
    const yeniKapsam = parametreler.get('kapsam')
    const yeniMod = parametreler.get('mod')
    const yeniHedef = parametreler.get('etkilesim')
    if (GECERLI_BOLGELER.has(yeniBolge) && yeniBolge !== bolge) setBolge(yeniBolge)
    if (KAPSAMLAR.has(yeniKapsam) && yeniKapsam !== kapsam) setKapsam(yeniKapsam)
    if (['rota', 'kesif'].includes(yeniMod) && yeniMod !== mod) setMod(yeniMod)
    if (yeniHedef) setHedef(yeniHedef)
  }, [parametreler, bolge, kapsam, mod])

  useEffect(() => {
    document.title = bolge === 'harita'
      ? 'Coğrafya Atlası — Dr. Koç'
      : `${bolgeBul(bolge)?.ad ?? 'Müfredat'} — Coğrafya Atlası`
    if (!hedef) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bolge, hedef])

  useEffect(() => {
    if (!hedef || bolge === 'harita' || bolge === 'mufredat') return undefined
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

  const bolgeAc = useCallback((kod, etkilesim = null) => {
    const yeniMod = kod === 'harita' ? 'rota' : 'kesif'
    setBolge(kod)
    setHedef(etkilesim)
    setMobilMenu(false)
    setMod(yeniMod)
    const yeni = new URLSearchParams(parametreler)
    if (kod === 'harita') yeni.delete('bolge')
    else yeni.set('bolge', kod)
    if (etkilesim) yeni.set('etkilesim', etkilesim)
    else yeni.delete('etkilesim')
    yeni.set('kapsam', kapsam)
    yeni.set('mod', yeniMod)
    setParametreler(yeni)
  }, [parametreler, kapsam, setParametreler])

  const modDegis = (yeniMod) => {
    if (yeniMod === 'rota') {
      bolgeAc('harita')
      return
    }
    if (bolge === 'harita' || bolge === 'mufredat') {
      const sonBolge = ilerleme.sonBolge && bolgeBul(ilerleme.sonBolge)
        ? ilerleme.sonBolge
        : 'sistemler'
      bolgeAc(sonBolge)
      return
    }
    setMod('kesif')
    const yeni = new URLSearchParams(parametreler)
    yeni.set('mod', 'kesif')
    setParametreler(yeni, { replace: true })
  }

  const kapsamSec = (yeniKapsam) => {
    setKapsam(yeniKapsam)
    const yeni = new URLSearchParams(parametreler)
    yeni.set('kapsam', yeniKapsam)
    setParametreler(yeni, { replace: true })
  }

  const yuzdeler = useMemo(() => Object.fromEntries(BOLGELER.map((kayit) => {
    const duraklar = bolgeEtkilesimleri(kayit.kod)
    const tamam = duraklar.filter((durak) => ilerleme.tamamlananlar[durak.id]).length
    return [kayit.kod, duraklar.length ? Math.round((tamam / duraklar.length) * 100) : 0]
  })), [ilerleme])

  const olculenBolgeler = BOLGELER.filter((kayit) => bolgeEtkilesimleri(kayit.kod).length)
  const genel = Math.round(
    olculenBolgeler.reduce((toplam, kayit) => toplam + yuzdeler[kayit.kod], 0)
      / Math.max(1, olculenBolgeler.length),
  )
  const AktifModul = MODULLER[bolge]

  useEffect(() => {
    const klavyeGezinmesi = (olay) => {
      if (mod !== 'kesif' || olay.altKey || olay.ctrlKey || olay.metaKey) return
      if (
        olay.target instanceof HTMLElement
        && ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(olay.target.tagName)
      ) return
      const sira = BOLGELER.findIndex((kayit) => kayit.kod === bolge)
      if (sira < 0) return
      if (olay.key === 'ArrowRight' && sira < BOLGELER.length - 1) {
        olay.preventDefault()
        bolgeAc(BOLGELER[sira + 1].kod)
      }
      if (olay.key === 'ArrowLeft' && sira > 0) {
        olay.preventDefault()
        bolgeAc(BOLGELER[sira - 1].kod)
      }
    }
    window.addEventListener('keydown', klavyeGezinmesi)
    return () => window.removeEventListener('keydown', klavyeGezinmesi)
  }, [bolge, bolgeAc, mod])

  return (
    <div className="cografya-atlasi atlas-sayfa" data-tema={tema} data-mod={mod}>
      <div className="atlas-kabuk">
        <header className="atlas-ustbar">
          <Link to="/kutuphane" className="atlas-marka" title="Dr. Koç kütüphanesine dön">
            <span className="atlas-marka-isaret"><Globe2 aria-hidden="true" /></span>
            <span className="atlas-marka-metin">
              <span className="atlas-marka-ad">Coğrafya Atlası</span>
              <span className="atlas-marka-alt">Dr. Koç · TYT ve 2026 TYMM</span>
            </span>
          </Link>

          <div className="atlas-ust-orta">
            <div className="atlas-segmentli" role="group" aria-label="Atlas modu">
              <button type="button" aria-pressed={mod === 'rota'} onClick={() => modDegis('rota')}>
                <Route aria-hidden="true" /><span>Atlas rotası</span>
              </button>
              <button type="button" aria-pressed={mod === 'kesif'} onClick={() => modDegis('kesif')}>
                <Compass aria-hidden="true" /><span>Keşif modu</span>
              </button>
            </div>
            <div className="atlas-arama-yuva">
              <GlobalArama onSec={(sonuc) => bolgeAc(sonuc.bolge, sonuc.id)} />
            </div>
          </div>

          <div className="atlas-ust-eylemler">
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
          <aside className="atlas-yan" aria-label="Coğrafya Atlası bölgeleri">
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
              <section className="atlas-uyari-satir" role="alertdialog" aria-modal="true" aria-labelledby="ca-sil-baslik">
                <Trash2 aria-hidden="true" />
                <div>
                  <b id="ca-sil-baslik">Coğrafya ilerlemesi silinsin mi?</b>
                  <p>Tamamlanan laboratuvarlar ve yanılgı defteri yalnızca bu tarayıcıdan silinir.</p>
                </div>
                <button
                  type="button"
                  className="atlas-dugme tehlike"
                  onClick={() => {
                    ilerlemeyiSil('COGRAFYA-SIL')
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
                  type="button"
                  key={kod}
                  className={kapsam === kod ? 'etkin' : ''}
                  aria-pressed={kapsam === kod}
                  onClick={() => kapsamSec(kod)}
                >
                  {ad}
                </button>
              ))}
              <p>TYT sınav odağı ile 2026 programındaki mekânsal bilgi, sistemler, afet ve sürdürülebilirlik katmanları birlikte izlenebilir.</p>
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
              <>
                <BolgeKesifYuzeyi bolgeKod={bolge} onEtkilesimSec={(id) => bolgeAc(bolge, id)} />
                <Suspense fallback={<Yukleniyor />}>
                  <AktifModul />
                </Suspense>
              </>
            ) : null}
          </main>
        </div>

        <BolgeSeridi
          bolge={bolge}
          genel={genel}
          yuzdeler={yuzdeler}
          onSec={bolgeAc}
          onSifirla={() => setSilOnayi(true)}
        />

        {mobilMenu ? (
          <div
            className="atlas-mobil-cekmece"
            role="dialog"
            aria-modal="true"
            aria-label="Tüm coğrafya bölgeleri"
            tabIndex={-1}
            ref={cekmeceRef}
          >
            <div className="atlas-mobil-cekmece-ust">
              <b>Tüm coğrafya bölgeleri</b>
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
                  <span>
                    {kayit.ad}
                    <small>{bolgeEtkilesimleri(kayit.kod).length ? `%${yuzdeler[kayit.kod]} tamamlandı` : 'Pekiştirme alanı'}</small>
                  </span>
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
          <button type="button" onClick={() => setMobilMenu(true)}>
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
