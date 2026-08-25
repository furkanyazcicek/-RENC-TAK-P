import { lazy, Suspense, useCallback, useEffect, useMemo, useState } from 'react'
import { ArrowLeft, BookOpenCheck, Compass, Map, Menu, Moon, RotateCcw, Route, SearchCheck, Sun, Trash2, X } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import AtlasHaritasi from '../components/cografya/AtlasHaritasi.jsx'
import BolgeSahnesi from '../components/cografya/BolgeSahnesi.jsx'
import BolgeSeridi from '../components/cografya/BolgeSeridi.jsx'
import GlobalArama from '../components/cografya/GlobalArama.jsx'
import MufredatKapsami from '../components/cografya/MufredatKapsami.jsx'
import { BOLGELER, bolgeBul } from '../data/cografya/bolgeler.js'
import { bolgeEtkilesimleri } from '../data/cografya/kapsam.js'
import { ilerlemeOku, ilerlemeyiSil } from '../lib/cografya/ilerleme.js'
import '../styles/cografya-atlasi.css'

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

const GECERLI = new Set(['harita', 'mufredat', ...BOLGELER.map((b) => b.kod)])
const TEMA_ANAHTARI = 'drkoc-cografya-tema'
const KAPSAMLAR = new Set(['tyt', 'tymm', 'tum'])

function Yukleniyor() {
  return <div className="ca-yukleniyor" role="status" aria-live="polite"><Compass/> Coğrafi model hazırlanıyor…</div>
}

export default function CografyaAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const adresteki = parametreler.get('bolge') ?? 'harita'
  const [bolge, setBolge] = useState(() => GECERLI.has(adresteki) ? adresteki : 'harita')
  const [kapsam, setKapsam] = useState(() => KAPSAMLAR.has(parametreler.get('kapsam')) ? parametreler.get('kapsam') : 'tum')
  const [mod, setMod] = useState(() => parametreler.get('mod') === 'kesif' || adresteki !== 'harita' ? 'kesif' : 'rota')
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'koyu'
    try { return localStorage.getItem(TEMA_ANAHTARI) ?? (matchMedia('(prefers-color-scheme: light)').matches ? 'acik' : 'koyu') } catch { return 'koyu' }
  })
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)
  const [hedef, setHedef] = useState(() => parametreler.get('etkilesim'))
  const [silOnayi, setSilOnayi] = useState(false)
  const [mobilMenu, setMobilMenu] = useState(false)

  useEffect(() => { try { localStorage.setItem(TEMA_ANAHTARI, tema) } catch { /* depolama kapalı olabilir */ } }, [tema])
  useEffect(() => { const dinle = () => setIlerleme(ilerlemeOku()); window.addEventListener('cografya-ilerleme', dinle); return () => window.removeEventListener('cografya-ilerleme', dinle) }, [])
  useEffect(() => {
    const yeniBolge = parametreler.get('bolge') ?? 'harita'
    const yeniKapsam = parametreler.get('kapsam')
    const yeniMod = parametreler.get('mod')
    if (GECERLI.has(yeniBolge) && yeniBolge !== bolge) setBolge(yeniBolge)
    if (KAPSAMLAR.has(yeniKapsam) && yeniKapsam !== kapsam) setKapsam(yeniKapsam)
    if (['rota', 'kesif'].includes(yeniMod) && yeniMod !== mod) setMod(yeniMod)
    const yeniHedef = parametreler.get('etkilesim')
    if (yeniHedef) setHedef(yeniHedef)
  }, [parametreler])
  useEffect(() => {
    document.title = bolge === 'harita' ? 'TYT Coğrafya Atlası — Dr. Koç' : `${bolgeBul(bolge)?.ad ?? 'Müfredat'} — Coğrafya Atlası`
    if (!hedef) window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bolge])
  useEffect(() => {
    if (!hedef || bolge === 'harita' || bolge === 'mufredat') return undefined
    const zamanlayici = window.setTimeout(() => {
      const oge = document.getElementById(hedef)
      if (oge) { oge.scrollIntoView({ behavior: 'smooth', block: 'start' }); oge.focus?.({ preventScroll: true }) }
      setHedef(null)
    }, 500)
    return () => window.clearTimeout(zamanlayici)
  }, [bolge, hedef])

  const bolgeAc = useCallback((kod, etkilesim = null) => {
    const yeniMod = kod === 'harita' ? 'rota' : 'kesif'
    setBolge(kod); setHedef(etkilesim); setMobilMenu(false); setMod(yeniMod)
    const yeni = new URLSearchParams(parametreler)
    if (kod === 'harita') yeni.delete('bolge'); else yeni.set('bolge', kod)
    if (etkilesim) yeni.set('etkilesim', etkilesim); else yeni.delete('etkilesim')
    yeni.set('kapsam', kapsam); yeni.set('mod', yeniMod); setParametreler(yeni)
  }, [parametreler, kapsam, setParametreler])
  const modDegis = (yeniMod) => {
    if (yeniMod === 'rota') { bolgeAc('harita'); return }
    if (bolge === 'harita' || bolge === 'mufredat') bolgeAc(ilerleme.sonBolge && bolgeBul(ilerleme.sonBolge) ? ilerleme.sonBolge : 'sistemler')
    else {
      setMod('kesif')
      const yeni = new URLSearchParams(parametreler); yeni.set('mod', 'kesif'); setParametreler(yeni, { replace: true })
    }
  }
  const kapsamSec = (deger) => {
    setKapsam(deger)
    const yeni = new URLSearchParams(parametreler); yeni.set('kapsam', deger); setParametreler(yeni, { replace: true })
  }
  const yuzdeler = useMemo(() => Object.fromEntries(BOLGELER.map((b) => {
    const duraklar = bolgeEtkilesimleri(b.kod)
    const tamam = duraklar.filter((d) => ilerleme.tamamlananlar[d.id]).length
    return [b.kod, duraklar.length ? Math.round((tamam / duraklar.length) * 100) : 0]
  })), [ilerleme])
  const olculen = BOLGELER.filter((b) => bolgeEtkilesimleri(b.kod).length)
  const genel = Math.round(olculen.reduce((toplam, b) => toplam + yuzdeler[b.kod], 0) / Math.max(1, olculen.length))
  const Aktif = MODULLER[bolge]

  useEffect(() => {
    const tus = (event) => {
      if (mod !== 'kesif' || event.altKey || event.ctrlKey || event.metaKey) return
      if (event.target instanceof HTMLElement && ['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON'].includes(event.target.tagName)) return
      const sira = BOLGELER.findIndex((b) => b.kod === bolge)
      if (sira < 0) return
      if (event.key === 'ArrowRight' && sira < BOLGELER.length - 1) { event.preventDefault(); bolgeAc(BOLGELER[sira + 1].kod) }
      if (event.key === 'ArrowLeft' && sira > 0) { event.preventDefault(); bolgeAc(BOLGELER[sira - 1].kod) }
    }
    window.addEventListener('keydown', tus)
    return () => window.removeEventListener('keydown', tus)
  }, [bolge, bolgeAc, mod])

  return <div className="cografya-atlasi" data-tema={tema} data-mod={mod}>
    <header className="ca-ustbar"><Link to="/" className="ca-marka"><span>DK</span><b>Coğrafya Atlası<small>Etkileşimli TYT Atlası</small></b></Link><div className="ca-mod-secim" role="group" aria-label="Atlas modu"><button type="button" aria-pressed={mod==='rota'} onClick={()=>modDegis('rota')}><Route/> Atlas rotası</button><button type="button" aria-pressed={mod==='kesif'} onClick={()=>modDegis('kesif')}><Compass/> Keşif modu</button></div><div className="ca-ustbar-eylem"><GlobalArama onSec={(sonuc)=>bolgeAc(sonuc.bolge, sonuc.id)}/><button type="button" className="ca-ikon" onClick={()=>setTema(t=>t==='koyu'?'acik':'koyu')} aria-label={tema==='koyu'?'Açık temaya geç':'Koyu temaya geç'}>{tema==='koyu'?<Sun/>:<Moon/>}</button><Link to="/kutuphane" className="ca-cikis"><ArrowLeft/> Kütüphaneye dön</Link></div></header>
    <div className="ca-govde">
      <main className="ca-icerik">{silOnayi?<div className="ca-sil-onay" role="alertdialog" aria-modal="true" aria-labelledby="ca-sil-baslik"><Trash2/><div><b id="ca-sil-baslik">Coğrafya ilerlemesi silinsin mi?</b><p>Tamamlanan laboratuvarlar ve yanılgı defteri yalnızca bu tarayıcıdan silinir.</p></div><button type="button" onClick={()=>{ilerlemeyiSil('COGRAFYA-SIL');setIlerleme(ilerlemeOku());setSilOnayi(false)}}>Evet, sil</button><button type="button" onClick={()=>setSilOnayi(false)}>Vazgeç</button></div>:null}<div className="ca-kapsam-filtre" aria-label="Müfredat kapsam filtresi">{[['tyt','TYT sınav çekirdeği'],['tymm','2026 TYMM'],['tum','Tümü']].map(([k,a])=><button type="button" key={k} className={kapsam===k?'etkin':''} onClick={()=>kapsamSec(k)}>{a}</button>)}<p>TYT filtresi sınav çekirdeğini; 2026 TYMM filtresi afet, sürdürülebilirlik ve beceri katmanını görünür kılar.</p></div>{bolge==='harita'?<AtlasHaritasi kapsam={kapsam} ilerleme={ilerleme} yuzdeler={yuzdeler} onBolgeSec={bolgeAc}/>:bolge==='mufredat'?<MufredatKapsami kapsam={kapsam} ilerleme={ilerleme} onSec={({bolge:hedefBolge,id})=>bolgeAc(hedefBolge,id)}/>:Aktif?<><BolgeSahnesi bolgeKod={bolge}/><Suspense fallback={<Yukleniyor/>}><Aktif/></Suspense></>:null}</main>
    </div>
    <BolgeSeridi bolge={bolge} genel={genel} yuzdeler={yuzdeler} onSec={bolgeAc} onSifirla={()=>setSilOnayi(true)}/>
    {mobilMenu?<div className="ca-mobil-cekmece" role="dialog" aria-modal="true" aria-label="Tüm coğrafya bölgeleri"><button type="button" className="kapat" onClick={()=>setMobilMenu(false)} aria-label="Menüyü kapat"><X/></button><b>Tüm bölgeler</b><div>{BOLGELER.map((b)=><button type="button" key={b.kod} onClick={()=>bolgeAc(b.kod)} className={bolge===b.kod?'etkin':''}><i style={{background:b.renk}}/><span>{b.ad}<small>{bolgeEtkilesimleri(b.kod).length?`%${yuzdeler[b.kod]} tamamlandı`:'Pekiştirme alanı'}</small></span></button>)}</div></div>:null}
    <nav className="ca-alt" aria-label="Mobil atlas gezinmesi"><button type="button" onClick={()=>bolgeAc('harita')}><Map/>Harita</button><button type="button" onClick={()=>bolgeAc('mufredat')}><BookOpenCheck/>Kapsam</button><button type="button" onClick={()=>setMobilMenu(true)}><Menu/>Bölgeler</button><button type="button" onClick={()=>bolgeAc('pusula')}><SearchCheck/>Pusula</button><button type="button" onClick={()=>bolgeAc('kamp')}><RotateCcw/>Kamp</button></nav>
  </div>
}
