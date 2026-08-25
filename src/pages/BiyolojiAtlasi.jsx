import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, BookOpenCheck, Compass, Map, Menu, Moon, RotateCcw, SearchCheck, Sun, Trash2, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import AtlasHaritasi from '../components/biyoloji/AtlasHaritasi.jsx'
import GlobalArama from '../components/biyoloji/GlobalArama.jsx'
import MufredatKapsami from '../components/biyoloji/MufredatKapsami.jsx'
import { BOLGELER, bolgeBul } from '../data/biyoloji/bolgeler.js'
import { bolgeKonulari } from '../data/biyoloji/kapsam.js'
import { ilerlemeOku, ilerlemeyiSil } from '../lib/biyoloji/ilerleme.js'
import '../styles/biyoloji-atlasi.css'

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
const GECERLI = new Set(['harita', 'mufredat', ...BOLGELER.map((b) => b.kod)])
const TEMA = 'drkoc-biyoloji-tema'
const Yukleniyor = () => <div className="ba-yukleniyor" role="status">Canlı sistem modeli hazırlanıyor…</div>

export default function BiyolojiAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const adresteki = parametreler.get('bolge') ?? 'harita'
  const [bolge, setBolge] = useState(() => GECERLI.has(adresteki) ? adresteki : 'harita')
  const [kapsam, setKapsam] = useState(() => ['tyt', 'tymm', 'tum'].includes(parametreler.get('kapsam')) ? parametreler.get('kapsam') : 'tum')
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'koyu'
    try { return localStorage.getItem(TEMA) ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'acik' : 'koyu') } catch { return 'koyu' }
  })
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)
  const [silOnayi, setSilOnayi] = useState(false)
  const [hedef, setHedef] = useState(null)
  const [mobilMenu, setMobilMenu] = useState(false)

  useEffect(() => { try { localStorage.setItem(TEMA, tema) } catch { /* depolama kapalı olabilir */ } }, [tema])
  useEffect(() => { const dinle = () => setIlerleme(ilerlemeOku()); window.addEventListener('biyoloji-ilerleme', dinle); return () => window.removeEventListener('biyoloji-ilerleme', dinle) }, [])
  useEffect(() => {
    const yeni = parametreler.get('bolge') ?? 'harita'
    if (GECERLI.has(yeni) && yeni !== bolge) setBolge(yeni)
    const yeniKapsam = parametreler.get('kapsam')
    if (['tyt', 'tymm', 'tum'].includes(yeniKapsam) && yeniKapsam !== kapsam) setKapsam(yeniKapsam)
  }, [parametreler])
  useEffect(() => { document.title = bolge === 'harita' ? 'TYT Biyoloji Atlası — Dr. Koç' : `${bolgeBul(bolge)?.ad ?? 'Müfredat'} — Biyoloji Atlası`; window.scrollTo({ top: 0, behavior: 'smooth' }) }, [bolge])
  useEffect(() => { if (!hedef || bolge === 'harita') return undefined; const z = setTimeout(() => { document.getElementById(hedef)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setHedef(null) }, 500); return () => clearTimeout(z) }, [bolge, hedef])

  const bolgeAc = useCallback((kod, id = null) => {
    setBolge(kod); setHedef(id)
    const yeni = new URLSearchParams(parametreler)
    if (kod === 'harita') yeni.delete('bolge'); else yeni.set('bolge', kod)
    yeni.set('kapsam', kapsam); setParametreler(yeni)
  }, [parametreler, kapsam, setParametreler])
  const kapsamSec = (yeniKapsam) => { setKapsam(yeniKapsam); const yeni = new URLSearchParams(parametreler); yeni.set('kapsam', yeniKapsam); setParametreler(yeni, { replace: true }) }
  const yuzdeler = useMemo(() => Object.fromEntries(BOLGELER.map((b) => { const konular = bolgeKonulari(b.kod); const biten = konular.filter((k) => ilerleme.tamamlananlar[k.etkilesimId]).length; return [b.kod, konular.length ? Math.round((biten / konular.length) * 100) : 0] })), [ilerleme])
  const genel = Math.round(Object.values(yuzdeler).reduce((a, b) => a + b, 0) / BOLGELER.length)
  const Aktif = MODULLER[bolge]

  return <div className="biyoloji-atlasi" data-tema={tema}>
    <header className="ba-ustbar"><Link to="/" className="ba-marka"><span><Compass size={20}/></span><b>Biyoloji Atlası<small>Dr. Koç</small></b></Link><GlobalArama onSec={(s) => bolgeAc(s.bolge, s.id)}/><button className="ba-ikon" type="button" onClick={() => setTema((t) => t === 'koyu' ? 'acik' : 'koyu')} aria-label={tema === 'koyu' ? 'Açık temaya geç' : 'Koyu temaya geç'}>{tema === 'koyu' ? <Sun/> : <Moon/>}</button></header>
    <div className="ba-govde"><aside className="ba-yan"><span className="ba-yan-baslik">Atlas</span><button className={bolge === 'harita' ? 'etkin' : ''} onClick={() => bolgeAc('harita')}><Map/> Keşif haritası</button><button className={bolge === 'mufredat' ? 'etkin' : ''} onClick={() => bolgeAc('mufredat')}><BookOpenCheck/> Müfredat kapsamı</button><span className="ba-yan-baslik">Bölgeler</span>{BOLGELER.map((b) => <button key={b.kod} className={bolge === b.kod ? 'etkin' : ''} onClick={() => bolgeAc(b.kod)}><i style={{ background: b.renk }}/>{b.kisaAd}<small>%{yuzdeler[b.kod]}</small></button>)}<span className="ba-yan-baslik">Atlas ilerlemesi</span><div className="ba-yan-ilerleme"><span><i style={{ width: `${genel}%` }}/></span><b>%{genel}</b></div><button onClick={() => setSilOnayi(true)}><Trash2/> İlerlemeyi sıfırla</button><Link to="/kutuphane"><ArrowLeft/> Kütüphaneye dön</Link></aside>
      <main>{silOnayi ? <div className="ba-sil-onay" role="alertdialog" aria-labelledby="sil-baslik"><Trash2/><div><b id="sil-baslik">Yerel ilerleme silinsin mi?</b><p>Tamamlanan etkileşimler, hata defteri, favoriler ve ustalık kayıtları bu tarayıcıdan silinir.</p></div><button onClick={() => { ilerlemeyiSil('BIYOLOJI-SIL'); setIlerleme(ilerlemeOku()); setSilOnayi(false) }}>Evet, sil</button><button onClick={() => setSilOnayi(false)}>Vazgeç</button></div> : null}<div className="ba-kapsam-filtre" aria-label="Müfredat kapsam filtresi">{[['tyt', 'TYT sınav çekirdeği'], ['tymm', '2026 TYMM'], ['tum', 'Tümü']].map(([k, a]) => <button key={k} className={kapsam === k ? 'etkin' : ''} onClick={() => kapsamSec(k)}>{a}</button>)}<p>TYT çekirdeği sınav odağını, TYMM etiketi yeni programdaki enerji temasını gösterir.</p></div>{bolge === 'harita' ? <AtlasHaritasi kapsam={kapsam} ilerleme={ilerleme} yuzdeler={yuzdeler} onBolgeSec={bolgeAc}/> : bolge === 'mufredat' ? <MufredatKapsami kapsam={kapsam} ilerleme={ilerleme} onSec={({ bolge: hedefBolge, id }) => bolgeAc(hedefBolge, id)}/> : Aktif ? <Suspense fallback={<Yukleniyor/>}><Aktif/></Suspense> : null}</main>
    </div>{mobilMenu?<div className="ba-mobil-cekmece" role="dialog" aria-label="Tüm biyoloji bölgeleri"><button className="kapat" onClick={()=>setMobilMenu(false)} aria-label="Menüyü kapat"><X/></button><b>Tüm bölgeler</b><div>{BOLGELER.map((b)=><button key={b.kod} onClick={()=>{bolgeAc(b.kod);setMobilMenu(false)}} className={bolge===b.kod?'etkin':''}><i style={{background:b.renk}}/><span>{b.ad}<small>%{yuzdeler[b.kod]} tamamlandı</small></span></button>)}</div></div>:null}<nav className="ba-alt" aria-label="Mobil atlas gezinmesi"><button onClick={() => bolgeAc('harita')}><Map/>Harita</button><button onClick={() => bolgeAc('mufredat')}><BookOpenCheck/>Kapsam</button><button onClick={()=>setMobilMenu(true)}><Menu/>Bölgeler</button><button onClick={() => bolgeAc('pusula')}><SearchCheck/>Pusula</button><button onClick={() => bolgeAc('kamp')}><RotateCcw/>Kamp</button></nav>
  </div>
}
