import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  ArrowLeft, Atom, Beaker, ClipboardCheck, FlaskConical, Link2, Moon,
  Scale, Shapes, Sparkles, Sun, TestTubes, Waves,
} from 'lucide-react'
import MaddeAtlasi from '../components/kimya/MaddeAtlasi.jsx'
import YapiTaslari from '../components/kimya/YapiTaslari.jsx'
import PeriyodikSistem from '../components/kimya/PeriyodikSistem.jsx'
import AnalizLaboratuvari from '../components/kimya/AnalizLaboratuvari.jsx'
import BaglarBolumu from '../components/kimya/BaglarBolumu.jsx'
import EtkilesimlerBolumu from '../components/kimya/EtkilesimlerBolumu.jsx'
import MiniTest from '../components/kimya/MiniTest.jsx'
import KarsilastirmaModu from '../components/kimya/KarsilastirmaModu.jsx'
import GlobalArama from '../components/kimya/GlobalArama.jsx'
import { KESIF_LISTESI } from '../data/kimya/turler.js'
import '../styles/kimya-atlasi.css'

const BOLUMLER = [
  { kod: 'giris', ad: 'Başlangıç', ikon: Sparkles },
  { kod: 'madde', ad: 'Madde Atlası', ikon: Shapes },
  { kod: 'yapi', ad: 'Atom ve Molekül', ikon: Atom },
  { kod: 'periyodik', ad: 'Periyodik Sistem', ikon: TestTubes },
  { kod: 'laboratuvar', ad: 'Bileşik Analiz Laboratuvarı', ikon: FlaskConical },
  { kod: 'baglar', ad: 'Kimyasal Bağlar', ikon: Link2 },
  { kod: 'etkilesimler', ad: 'Moleküller Arası Etkileşimler', ikon: Waves },
  { kod: 'karsilastir', ad: 'Karşılaştırma', ikon: Scale },
  { kod: 'test', ad: 'Mini Test', ikon: ClipboardCheck },
]

const KESIF_KARTLARI = [
  { kod: 'madde', ikon: Shapes, baslik: 'Maddeyi Keşfet', metin: 'Element, bileşik ve karışımları tanecik düzeyinde gör.' },
  { kod: 'periyodik', ikon: TestTubes, baslik: 'Periyodik Sistemi Aç', metin: 'Elementleri atom atom incele; dizilim, katman ve Bohr modeli.' },
  { kod: 'laboratuvar', ikon: FlaskConical, baslik: 'Bir Bileşiği Analiz Et', metin: 'Kimyasal formül gir; yapısını, bağlarını ve geometrisini keşfet.' },
  { kod: 'baglar', ikon: Link2, baslik: 'Bağları Keşfet', metin: 'Atomların neden ve nasıl bağlandığını canlandırmalı olarak gör.' },
]

const HIZLI_ORNEKLER = ['H₂O', 'CO₂', 'NH₃', 'NO₃⁻', 'Ca(OH)₂']
const TEMA_ANAHTARI = 'drkoc-kimya-tema'

export default function KimyaAtlasi() {
  const [parametreler, setParametreler] = useSearchParams()
  const [bolum, setBolum] = useState(() => {
    const istenen = parametreler.get('bolum')
    return BOLUMLER.some((b) => b.kod === istenen) ? istenen : 'giris'
  })
  const [tema, setTema] = useState(() => {
    if (typeof window === 'undefined') return 'acik'
    const kayitli = window.localStorage.getItem(TEMA_ANAHTARI)
    if (kayitli === 'acik' || kayitli === 'koyu') return kayitli
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'koyu' : 'acik'
  })
  const [seviye, setSeviye] = useState('temel')
  const [labFormul, setLabFormul] = useState(parametreler.get('formul') ?? '')
  const [seciliElement, setSeciliElement] = useState(null)
  const [girisFormul, setGirisFormul] = useState('H₂O')

  useEffect(() => {
    try { window.localStorage.setItem(TEMA_ANAHTARI, tema) } catch { /* depolama kapalı olabilir */ }
  }, [tema])

  useEffect(() => {
    const yeni = new URLSearchParams(parametreler)
    if (bolum === 'giris') yeni.delete('bolum')
    else yeni.set('bolum', bolum)
    if (labFormul) yeni.set('formul', labFormul)
    else yeni.delete('formul')
    setParametreler(yeni, { replace: true })
    // parametreler bağımlılığa eklenirse sonsuz döngü olur; kasıtlı olarak dışarıda.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bolum, labFormul])

  useEffect(() => {
    document.title = 'Kimya Atlası — Dr. Koç'
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [bolum])

  const formuluAc = useCallback((formul) => {
    setLabFormul(formul)
    setBolum('laboratuvar')
  }, [])

  const elementiAc = useCallback((element) => {
    setSeciliElement(element)
    setBolum('periyodik')
  }, [])

  const rastgeleKesfet = () => {
    const secim = KESIF_LISTESI[Math.floor(Math.random() * KESIF_LISTESI.length)]
    formuluAc(secim)
  }

  const icerik = useMemo(() => {
    switch (bolum) {
      case 'madde': return <MaddeAtlasi onFormulSec={formuluAc} />
      case 'yapi': return <YapiTaslari onFormulSec={formuluAc} />
      case 'periyodik': return <PeriyodikSistem baslangicElement={seciliElement} onFormulSec={formuluAc} />
      case 'laboratuvar': return <AnalizLaboratuvari baslangicFormul={labFormul} seviye={seviye} onElementSec={elementiAc} />
      case 'baglar': return <BaglarBolumu onFormulSec={formuluAc} />
      case 'etkilesimler': return <EtkilesimlerBolumu />
      case 'karsilastir': return <KarsilastirmaModu />
      case 'test': return <MiniTest />
      default: return (
        <GirisEkrani
          girisFormul={girisFormul}
          setGirisFormul={setGirisFormul}
          onAnaliz={() => formuluAc(girisFormul)}
          onBolum={setBolum}
          onRastgele={rastgeleKesfet}
        />
      )
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bolum, labFormul, seviye, seciliElement, girisFormul])

  return (
    <div className="kimya-atlasi" data-tema={tema}>
      <div className="ka-kabuk">
        <header className="ka-ustbar">
          <Link to="/" className="ka-marka" title="Dr. Koç ana sayfasına dön">
            <span className="ka-marka-isaret"><Beaker size={19} /></span>
            <span style={{ minWidth: 0 }}>
              <span className="ka-marka-ad" style={{ display: 'block' }}>Kimya Atlası</span>
              <span className="ka-marka-alt">Dr. Koç</span>
            </span>
          </Link>

          <GlobalArama
            bolumler={BOLUMLER}
            onElementSec={elementiAc}
            onTurSec={formuluAc}
            onBolumSec={setBolum}
          />

          <div className="ka-ustbar-bosluk" />

          <div className="ka-seviye" role="group" aria-label="Açıklama seviyesi">
            <button type="button" aria-pressed={seviye === 'temel'} onClick={() => setSeviye('temel')}>Temel</button>
            <button type="button" aria-pressed={seviye === 'detayli'} onClick={() => setSeviye('detayli')}>Detaylı</button>
          </div>

          <button
            type="button"
            className="ka-ikon-dugme"
            onClick={() => setTema((t) => (t === 'koyu' ? 'acik' : 'koyu'))}
            aria-label={tema === 'koyu' ? 'Açık temaya geç' : 'Koyu temaya geç'}
            title={tema === 'koyu' ? 'Açık tema' : 'Koyu tema'}
          >
            {tema === 'koyu' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </header>

        <div className="ka-govde">
          <nav className="ka-yan" aria-label="Kimya Atlası bölümleri">
            <div className="ka-yan-baslik">Bölümler</div>
            {BOLUMLER.map((b) => {
              const Ikon = b.ikon
              return (
                <button
                  key={b.kod}
                  type="button"
                  className={`ka-yan-oge ${bolum === b.kod ? 'etkin' : ''}`}
                  onClick={() => setBolum(b.kod)}
                  aria-current={bolum === b.kod ? 'page' : undefined}
                >
                  <Ikon size={16} />
                  {b.ad}
                </button>
              )
            })}

            <div className="ka-yan-baslik" style={{ marginTop: 18 }}>Kısayol</div>
            <button type="button" className="ka-yan-oge" onClick={rastgeleKesfet}>
              <Sparkles size={16} /> Rastgele tür getir
            </button>
            <Link to="/" className="ka-yan-oge" style={{ textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Dr. Koç'a dön
            </Link>
          </nav>

          <main className="ka-icerik">
            <div className="ka-kapsa">{icerik}</div>
          </main>
        </div>

        <nav className="ka-alt-gezinme" aria-label="Bölümler">
          {BOLUMLER.map((b) => {
            const Ikon = b.ikon
            return (
              <button
                key={b.kod}
                type="button"
                className={`ka-alt-oge ${bolum === b.kod ? 'etkin' : ''}`}
                onClick={() => setBolum(b.kod)}
                aria-current={bolum === b.kod ? 'page' : undefined}
              >
                <Ikon size={17} />
                {b.ad.split(' ')[0]}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

/* ————— Başlangıç ekranı ————— */
function GirisEkrani({ girisFormul, setGirisFormul, onAnaliz, onBolum, onRastgele }) {
  return (
    <div>
      <section className="ka-hero">
        <h1>Kimya Atlası</h1>
        <p className="ka-hero-alt">Maddeyi atomlardan başlayarak keşfet.</p>

        <div className="ka-formul-kutu">
          <div className="ka-formul-etiket">Bir formül yaz</div>
          <div className="ka-formul-satir">
            <input
              className="ka-formul-giris"
              value={girisFormul}
              onChange={(e) => setGirisFormul(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') onAnaliz() }}
              placeholder="H₂O"
              aria-label="Kimyasal formül"
              spellCheck={false}
              autoComplete="off"
            />
            <button type="button" className="ka-dugme birincil" onClick={onAnaliz}>
              <FlaskConical size={15} /> Analiz Et
            </button>
          </div>
          <div className="ka-ornekler">
            <span className="ka-sessiz" style={{ alignSelf: 'center', marginRight: 2 }}>Örnekler:</span>
            {HIZLI_ORNEKLER.map((o) => (
              <button key={o} type="button" className="ka-ornek-dugme" onClick={() => { setGirisFormul(o); onAnaliz() }}>{o}</button>
            ))}
            <button type="button" className="ka-ornek-dugme" onClick={onRastgele}>Rastgele</button>
          </div>
        </div>
      </section>

      <div className="ka-izgara dort" style={{ marginBottom: 18 }}>
        {KESIF_KARTLARI.map((k) => {
          const Ikon = k.ikon
          return (
            <button key={k.kod} type="button" className="ka-kesif-kart" onClick={() => onBolum(k.kod)}>
              <span className="ka-kesif-ikon"><Ikon size={21} /></span>
              <h3>{k.baslik}</h3>
              <p>{k.metin}</p>
            </button>
          )
        })}
      </div>

      <div className="ka-izgara iki">
        <div className="ka-kart">
          <div className="ka-ust-etiket">Bu atlas nasıl çalışır?</div>
          <div className="ka-adimlar">
            <div className="ka-adim">
              <span className="ka-adim-no">1</span>
              <span><strong>Hesaplananlar:</strong> atom sayısı, element çeşidi, net yük ve mol kütlesi doğrudan formülden hesaplanır.</span>
            </div>
            <div className="ka-adim">
              <span className="ka-adim-no">2</span>
              <span><strong>Yapı verisi:</strong> geometri, Lewis yapısı, polarite ve moleküller arası etkileşimler doğrulanmış veriden gelir.</span>
            </div>
            <div className="ka-adim sonuc">
              <span className="ka-adim-no"><Sparkles size={12} /></span>
              <span>Bir formülün yapı verisi yoksa geometri <strong>uydurulmaz</strong>; ne bilinip ne bilinmediği açıkça yazılır.</span>
            </div>
          </div>
        </div>

        <div className="ka-kart">
          <div className="ka-ust-etiket">Öğrenme yolu</div>
          <p style={{ fontSize: 13.5, color: 'rgb(var(--ka-metin-2))', marginBottom: 12 }}>
            Kavramlar birbirinin üzerine kurulur. Sırayla ilerlemek istersen:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {['Madde', 'Atom', 'Element', 'Molekül', 'Bileşik', 'Periyodik Sistem', 'Elektron', 'Kimyasal Bağ', 'Geometri', 'Polarite', 'Moleküller Arası Etkileşim'].map((a, i) => (
              <span key={a} className={`ka-rozet ${i % 3 === 0 ? 'mor' : i % 3 === 1 ? 'mavi' : ''}`}>{a}</span>
            ))}
          </div>
          <button type="button" className="ka-dugme birincil" style={{ marginTop: 16 }} onClick={() => onBolum('madde')}>
            Baştan başla <Shapes size={15} />
          </button>
        </div>
      </div>
    </div>
  )
}
