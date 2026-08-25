import { useMemo, useState } from 'react'
import {
  ArrowRight, Atom, BatteryCharging, BookOpenCheck, BrainCircuit,
  CheckCircle2, Dna, FlaskConical, Leaf, Microscope, Network, Sparkles,
  Target,
} from 'lucide-react'
import { BAGLANTILAR, BOLGELER } from '../../data/biyoloji/bolgeler.js'
import OlcekMercegi from './OlcekMercegi.jsx'

const IKONLAR = {
  yasam: Sparkles,
  molekul: Atom,
  hucre: Microscope,
  siniflandirma: Network,
  bolunme: Dna,
  kalitim: BrainCircuit,
  enerji: BatteryCharging,
  ekosistem: Leaf,
  pusula: Target,
  kamp: BookOpenCheck,
}

export default function AtlasHaritasi({ kapsam, yuzdeler = {}, onBolgeSec }) {
  const gorunenler = useMemo(
    () => BOLGELER.filter((b) => kapsam === 'tum' || b.kapsam === kapsam || b.kapsam === 'tum'),
    [kapsam],
  )
  const [odak, setOdak] = useState(() => gorunenler[0]?.kod ?? 'yasam')
  const secili = gorunenler.find((b) => b.kod === odak) ?? gorunenler[0]
  const SeciliIkon = IKONLAR[secili?.kod] ?? Sparkles

  return (
    <>
      <section className="ba-atlas-yeni" aria-labelledby="atlas-baslik">
        <div className="ba-atlas-ust">
          <div>
            <span className="ba-etiket">TYT Biyoloji Atlası · Canlılık coğrafyası</span>
            <h1 id="atlas-baslik">Molekülden ekosisteme, <em>tek bir canlı sistem.</em></h1>
            <p>Bir bölgeyi seç. Önce güçlü soruyu gör, sonra laboratuvarda değişkenleri oynatıp kanıtı kendin üret.</p>
          </div>
          <div className="ba-atlas-ozet" aria-label="Atlas özeti">
            <strong>{gorunenler.length}</strong><span>görünür bölge</span>
            <strong>{gorunenler.reduce((toplam, b) => toplam + b.deneySayisi, 0)}</strong><span>öğrenme alanı</span>
          </div>
        </div>

        <div className="ba-atlas-sahne">
          <img src="/atlas-assets/biyoloji/canlilik-cografyasi-v1.png" alt="" aria-hidden="true" className="ba-atlas-resim" />
          <div className="ba-atlas-karartma" aria-hidden="true" />
          <svg className="ba-baglar" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="ba-ok-yeni" markerWidth="5" markerHeight="5" refX="4" refY="2.5" orient="auto"><path d="M0 0L5 2.5L0 5z" /></marker>
            </defs>
            {BAGLANTILAR.map(([a, b]) => {
              const bas = gorunenler.find((v) => v.kod === a)
              const son = gorunenler.find((v) => v.kod === b)
              if (!bas || !son) return null
              const ortaX = (bas.konum[0] + son.konum[0]) / 2
              const ortaY = Math.min(bas.konum[1], son.konum[1]) - 4
              return <path key={`${a}-${b}`} d={`M ${bas.konum[0]} ${bas.konum[1]} Q ${ortaX} ${ortaY} ${son.konum[0]} ${son.konum[1]}`} markerEnd="url(#ba-ok-yeni)" className={odak === a || odak === b ? 'etkin' : ''} />
            })}
          </svg>

          <div className="ba-atlas-dugumler" aria-label="Biyoloji Atlası keşif bölgeleri">
            {gorunenler.map((bolge, i) => {
              const Ikon = IKONLAR[bolge.kod] ?? Sparkles
              const etkin = bolge.kod === secili?.kod
              return (
                <button
                  key={bolge.kod}
                  type="button"
                  className={`ba-atlas-dugum ${etkin ? 'etkin' : ''}`}
                  style={{ '--bolge': bolge.renk, '--x': `${bolge.konum[0]}%`, '--y': `${bolge.konum[1]}%` }}
                  onMouseEnter={() => setOdak(bolge.kod)}
                  onFocus={() => setOdak(bolge.kod)}
                  onClick={() => onBolgeSec(bolge.kod)}
                  aria-label={`${bolge.ad}. Yüzde ${yuzdeler[bolge.kod] ?? 0} tamamlandı. Bölgeyi aç.`}
                  aria-current={etkin ? 'true' : undefined}
                >
                  <span className="ba-atlas-dugum-ikon"><Ikon /></span>
                  <span className="ba-atlas-dugum-metin"><small>{String(i + 1).padStart(2, '0')}</small><b>{bolge.kisaAd}</b></span>
                  <span className="ba-atlas-dugum-yuzde">%{yuzdeler[bolge.kod] ?? 0}</span>
                </button>
              )
            })}
          </div>

          {secili ? (
            <aside className="ba-atlas-bilgi" style={{ '--bolge': secili.renk }} aria-live="polite">
              <div className="ba-atlas-bilgi-baslik"><span><SeciliIkon /></span><div><small>{secili.kapsam === 'tymm' ? '2026 TYMM · Enerji' : secili.kapsam === 'tum' ? 'Tüm konular' : 'TYT sınav çekirdeği'}</small><h2>{secili.ad}</h2></div></div>
              <p className="ba-atlas-soru">“{secili.soru}”</p>
              <div className="ba-atlas-bilgi-satir"><FlaskConical /><span><b>Yap:</b> {secili.eylem}</span></div>
              <div className="ba-atlas-bilgi-satir"><CheckCircle2 /><span><b>Kanıt:</b> {secili.kanit}</span></div>
              <div className="ba-atlas-konu-listesi">{secili.konular.map((konu) => <span key={konu}>{konu}</span>)}</div>
              <button type="button" className="ba-atlas-ac" onClick={() => onBolgeSec(secili.kod)}>{secili.deneySayisi} alanı keşfet <ArrowRight /></button>
            </aside>
          ) : null}
          <div className="ba-atlas-ipucu">Bir bölgenin üzerine gel veya klavyeyle odaklan · Açmak için seç</div>
        </div>
      </section>
      <OlcekMercegi onBolgeSec={onBolgeSec} />
    </>
  )
}
