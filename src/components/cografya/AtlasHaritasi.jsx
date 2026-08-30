/**
 * Coğrafya Atlası — Açılış ekranı
 * ==================================================================
 * Üç katman:
 *   1) Halka açılışı — Padişah Geçidi'ndeki portre halkasının coğrafya
 *      karşılığı. Orada 36 hükümdar portresi vardı; burada on TYT
 *      konusunun kendi çizimi halkayı kuruyor.
 *   2) Keşif rotası — bölgeler arası ön koşul oklarının şeması.
 *   3) Bölge galerisi — her bölgenin çizimi, sınav künyesi ve durakları.
 *
 * Halkanın yarıçapı CSS'te `--ca-halka-r` ile tanımlıdır; başlık bloğu
 * halkanın içinde kalacak genişlikte sınırlanır, böylece dar ekranda da
 * yazı ile kartlar üst üste binmez.
 */

import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, CheckCircle2, Compass, Crosshair, Layers3, MapPinned, Minus, MousePointer2, Play, Plus, RotateCcw, Sparkles, Target } from 'lucide-react'
import { BAGLANTILAR, BOLGELER } from '../../data/cografya/bolgeler.js'
import { bolgeEtkilesimleri, bolgeKonulari } from '../../data/cografya/kapsam.js'
import BolgeCizimi from './BolgeCizimi.jsx'
import CografiMercek from './CografiMercek.jsx'
import HaritaAtlasYuzeyi from './ortak/HaritaAtlasYuzeyi.jsx'

const KAPSAM_ETIKETI = { tymm: '2026 TYMM', tyt: 'TYT kampı', tum: 'Onarım alanı' }

const SAHNE_SEKMELERI = [
  { id: 'foto', label: 'Fotoğraf' },
  { id: 'izohips', label: 'İzohips' },
  { id: 'kesit', label: 'Topografik kesit' },
  { id: 'surec', label: 'Süreç' },
  { id: 'karsilastir', label: 'Karşılaştır' },
]

const SAHNE_NOKTALARI = [
  { id: 'zirve', x: 17, y: 24, number: '01', title: 'Kar çizgisi ve zirve', text: 'Yükselti arttıkça sıcaklık düşer; kar çizgisi, iklim ile yükselti ilişkisinin görünür sınırıdır.' },
  { id: 'vadi', x: 48, y: 51, number: '02', title: 'Dar vadi', text: 'Akarsu burada eğim ve akış enerjisi yüksek olduğu için yatağını derine kazıyor.' },
  { id: 'plato', x: 71, y: 30, number: '03', title: 'Geniş plato', text: 'Aynı yükselti farkı daha uzun mesafeye yayıldığı için eğim düşük, izohipsler seyrektir.' },
  { id: 'menderes', x: 65, y: 61, number: '04', title: 'Menderes kuşağı', text: 'Eğim azalınca akarsu yana aşındırır; dış kıyıda oyulma, iç kıyıda birikme görülür.' },
  { id: 'delta', x: 82, y: 76, number: '05', title: 'Delta ve taşkın ovası', text: 'Akış enerjisi düşünce taşınan malzeme bırakılır; yataklar çoğalır ve yeni kara gelişir.' },
]

const PROFIL = [86, 78, 64, 50, 58, 71, 78, 69, 58, 44, 50, 61]

function ProfilGrafigi({ a, b, exaggeration }) {
  const start = Math.min(a, b)
  const end = Math.max(a, b)
  const windowData = PROFIL.slice(start, end + 1)
  const scale = Math.max(.75, Math.min(1.7, exaggeration / 100))
  const points = windowData.map((value, index) => `${(index / Math.max(1, windowData.length - 1)) * 100},${58 - ((value - 42) * scale)}`).join(' ')
  return <div className="ca-topo-profil" aria-label={`A–B profili, ${windowData.length} örnek noktası`}>
    <svg viewBox="0 0 100 60" role="img" aria-hidden="true">
      <path className="ca-profil-dolgu" d={`M 0 60 L ${points} L 100 60 Z`} />
      <polyline points={points} />
      <line x1="0" x2="100" y1="58" y2="58" />
    </svg>
    <div><span>A · {Math.round(PROFIL[a] * 42)} m</span><span>B · {Math.round(PROFIL[b] * 42)} m</span></div>
  </div>
}

function IzohipsKatmani({ interval, exaggeration, tab, akim }) {
  const çizgiler = useMemo(() => Array.from({ length: 8 }, (_, index) => {
    const y = 7 + index * 6.5
    const dalga = 2 + (index % 3)
    return `M 5 ${y + 8} C 18 ${y - dalga}, 27 ${y + dalga}, 39 ${y} S 60 ${y - dalga * 1.4}, 74 ${y + 1} S 87 ${y + dalga}, 96 ${y - 2}`
  }), [])
  const yoğunluk = Math.max(3, Math.min(8, Math.round((600 - interval) / 70)))
  return <svg className="ca-sahne-katmani" viewBox="0 0 100 56" preserveAspectRatio="none" aria-label="Deterministik coğrafi katman">
    <g className="ca-izohips-cizgileri" style={{ opacity: tab === 'foto' ? 0 : .46 + yoğunluk * .045 }}>
      {çizgiler.slice(0, yoğunluk).map((path, index) => <path key={path} d={path} style={{ transform: `translateY(${index * -.45}px) scaleY(${1 + (exaggeration - 100) / 500})`, transformOrigin: '50% 50%' }} />)}
    </g>
    {(tab === 'izohips' || tab === 'kesit') ? <g className="ca-sahne-etiketleri"><text x="8" y="11">yüksek</text><text x="75" y="11">düşük eğim</text><text x="74" y="50">taşkın ovası</text></g> : null}
    {tab === 'surec' ? <g className="ca-akis-oklari" style={{ opacity: Math.max(.45, Math.min(1, akim / 70)) }}><path d="M18 22 C 35 26, 42 38, 60 45" /><path d="M55 45 L60 45 L57 40" /><path d="M62 46 C72 52, 80 52, 91 48" /><path d="M87 44 L92 48 L87 50" /></g> : null}
    {tab === 'surec' ? <g className="ca-birikim-noktalari">{[0,1,2,3,4,5,6].map((n) => <circle key={n} cx={72 + n * 3} cy={46 + (n % 3) * 2} r=".7" />)}</g> : null}
    <path className="ca-akarsu-hatti" d={akim ? 'M 49 8 C 47 20, 48 29, 57 36 S 67 48, 78 54' : 'M 50 8 C 48 19, 48 29, 57 36 S 67 48, 78 54'} />
  </svg>
}

function TopografikSahne({ onBolgeSec }) {
  const [tab, setTab] = useState('foto')
  const [katmanlarAcik, setKatmanlarAcik] = useState(true)
  const [secili, setSecili] = useState(null)
  const [zoom, setZoom] = useState(1)
  const [interval, setInterval] = useState(100)
  const [exaggeration, setExaggeration] = useState(100)
  const [akim, setAkim] = useState(55)
  const [a, setA] = useState(2)
  const [b, setB] = useState(10)
  const [oynatiliyor, setOynatiliyor] = useState(false)
  const [suruklenen, setSuruklenen] = useState(null)
  const sahneRef = useRef(null)

  useEffect(() => {
    if (!oynatiliyor || tab !== 'surec') return undefined
    const zamanlayici = window.setInterval(() => setAkim((deger) => (deger >= 88 ? 34 : deger + 4)), 360)
    return () => window.clearInterval(zamanlayici)
  }, [oynatiliyor, tab])

  const aktifNokta = SAHNE_NOKTALARI.find((nokta) => nokta.id === secili)
  const profilBaslangic = Math.min(a, b)
  const profilBitis = Math.max(a, b)
  const yukseklik = Math.round(530 + (exaggeration - 100) * 2.4)
  const egim = Math.max(4, Math.round((100 - PROFIL[Math.min(a, b)] + PROFIL[Math.max(a, b)]) * .38))
  const akis = Math.round(Math.max(30, Math.min(90, akim + (exaggeration - 100) * .12 + (100 - interval) * .08)))

  const kesitHattiSurukle = (event) => {
    if (!suruklenen || !sahneRef.current) return
    const kutu = sahneRef.current.getBoundingClientRect()
    const oran = Math.max(0, Math.min(1, (event.clientX - kutu.left) / kutu.width))
    const indeks = Math.round(oran * 11)
    if (suruklenen === 'a') setA(Math.max(0, Math.min(b - 1, indeks)))
    if (suruklenen === 'b') setB(Math.min(11, Math.max(a + 1, indeks)))
  }

  const sahneSifirla = () => { setZoom(1); setInterval(100); setExaggeration(100); setA(2); setB(10); setAkim(55); setTab('foto'); setSecili(null); setOynatiliyor(false) }

  return <section className="ca-topografya-kahraman" aria-labelledby="ca-topografya-baslik">
    <div className="ca-topo-baslik">
      <div>
        <span className="ca-topo-kicker"><Crosshair size={13} /> Öğrenme nesnesi · araziyi kanıtla</span>
        <h1 id="ca-topografya-baslik">Bir havzayı <em>katman katman</em> oku.</h1>
        <p>Fotogerçekçi sahne, aynı arazinin izohipsini, kesitini ve süreçlerini birlikte anlatır. Bir değişkeni oyna; sonucu sahnede hemen gör.</p>
      </div>
      <div className="ca-topo-baslik-eylem"><button type="button" onClick={() => onBolgeSec('harita-bilgisi')}><Compass size={15} /> Harita bilgisi laboratuvarı</button><small>Öğretim amaçlı şematik katman · gerçek koordinat değildir</small></div>
    </div>

    <div className="ca-topo-sekmeler" role="group" aria-label="Arazi gösterimi">
      {SAHNE_SEKMELERI.map((sekm) => <button key={sekm.id} type="button" aria-pressed={tab === sekm.id} onClick={() => setTab(sekm.id)}>{sekm.label}</button>)}
    </div>

    <div className="ca-topo-calısma">
      <div className="ca-topo-sahne-kapsayici">
        <div className="ca-topo-sahne-toolbar">
          <button type="button" className={katmanlarAcik ? 'etkin' : ''} onClick={() => setKatmanlarAcik((deger) => !deger)}><Layers3 size={15} /> Katmanlar</button>
          <span>{tab === 'foto' ? 'Fotoğraf kanıt yüzeyi' : tab === 'izohips' ? `${interval} m izohips aralığı` : tab === 'kesit' ? 'A–B kesit hattı' : tab === 'surec' ? 'Akış ve birikim' : 'Aynı havzada üç arazi'}</span>
        </div>
        <div ref={sahneRef} className="ca-topo-sahne" data-tab={tab} style={{ '--ca-topo-zoom': zoom }}>
          <img src="/atlas-assets/cografya/imagegen/topografya-hero-v2.jpg" alt="Karlı dağlardan plato, menderesli akarsu ve deltaya uzanan fotogerçekçi havza" />
          <div className="ca-topo-perde" aria-hidden="true" />
          {katmanlarAcik ? <IzohipsKatmani interval={interval} exaggeration={exaggeration} tab={tab} akim={akim} /> : null}
          {tab === 'kesit' ? <div className="ca-topo-kesit-hatti" style={{ left: `${18 + profilBaslangic * 5.6}%`, width: `${(profilBitis - profilBaslangic) * 5.6}%` }} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); const kutu = event.currentTarget.getBoundingClientRect(); setSuruklenen(Math.abs(event.clientX - kutu.left) < Math.abs(event.clientX - kutu.right) ? 'a' : 'b') }} onPointerMove={kesitHattiSurukle} onPointerUp={() => setSuruklenen(null)} onPointerCancel={() => setSuruklenen(null)}><span>A</span><span>B</span></div> : null}
          {SAHNE_NOKTALARI.map((nokta) => <button key={nokta.id} type="button" className={`ca-topo-nokta ${secili === nokta.id ? 'etkin' : ''}`} style={{ left: `${nokta.x}%`, top: `${nokta.y}%` }} onClick={() => setSecili(nokta.id)} aria-label={`${nokta.number}. ${nokta.title}`} aria-pressed={secili === nokta.id}><span>{nokta.number}</span></button>)}
          {aktifNokta ? <aside className="ca-topo-aciklama" aria-live="polite"><small>Kanıt {aktifNokta.number}</small><strong>{aktifNokta.title}</strong><p>{aktifNokta.text}</p><button type="button" onClick={() => setSecili(null)}>Kapat</button></aside> : null}
          <p className="ca-topo-ipucu"><MousePointer2 size={14} /> Noktalara dokun · fotoğrafı veriyle karşılaştır</p>
        </div>
        <div className="ca-topo-zoom"><button type="button" onClick={() => setZoom((deger) => Math.max(.92, +(deger - .08).toFixed(2)))} aria-label="Uzaklaştır"><Minus size={16} /></button><output>{Math.round(zoom * 100)}%</output><button type="button" onClick={() => setZoom((deger) => Math.min(1.34, +(deger + .08).toFixed(2)))} aria-label="Yakınlaştır"><Plus size={16} /></button><button type="button" onClick={sahneSifirla} aria-label="Sahneyi sıfırla"><RotateCcw size={15} /></button></div>
      </div>

      <aside className="ca-topo-denetleyici" aria-label="Arazi denetleyicisi">
        <div className="ca-topo-denetleyici-bas"><span>Canlı denetleyici</span><b>{tab === 'foto' ? 'Araziyi seç' : tab === 'kesit' ? 'Profili değiştir' : 'Değişkeni oyna'}</b></div>
        {tab === 'kesit' ? <>
          <label className="ca-topo-kaydirici"><span>A noktasının konumu <output>{a + 1}. örnek</output></span><input type="range" min="0" max="10" value={a} onChange={(e) => setA(Math.min(Number(e.target.value), b - 1))} /><small>zirve <i>→</i> delta</small></label>
          <label className="ca-topo-kaydirici"><span>B noktasının konumu <output>{b + 1}. örnek</output></span><input type="range" min="1" max="11" value={b} onChange={(e) => setB(Math.max(Number(e.target.value), a + 1))} /><small>zirve <i>→</i> delta</small></label>
          <ProfilGrafigi a={a} b={b} exaggeration={exaggeration} />
          <dl className="ca-topo-metrikler"><div><dt>En yüksek</dt><dd>{yukseklik}<small>m</small></dd></div><div><dt>Ortalama eğim</dt><dd>{egim}<small>%</small></dd></div></dl>
        </> : <>
          <label className="ca-topo-kaydirici"><span>İzohips aralığı <output>{interval} m</output></span><input type="range" min="50" max="300" step="50" value={interval} onChange={(e) => setInterval(Number(e.target.value))} /><small><i>sık</i><i>seyrek</i></small></label>
          <label className="ca-topo-kaydirici"><span>Yükselti abartısı <output>{exaggeration}%</output></span><input type="range" min="70" max="160" value={exaggeration} onChange={(e) => setExaggeration(Number(e.target.value))} /><small><i>gerçek oran</i><i>abartılı kesit</i></small></label>
          <label className="ca-topo-kaydirici"><span>Akış enerjisi <output>{akis}/100</output></span><input type="range" min="30" max="90" value={akim} onChange={(e) => setAkim(Number(e.target.value))} /><small><i>yavaş</i><i>hızlı</i></small></label>
          <dl className="ca-topo-metrikler"><div><dt>Yükselti</dt><dd>{yukseklik}<small>m</small></dd></div><div><dt>Eğim</dt><dd>{egim}<small>%</small></dd></div><div><dt>Akış yönü</dt><dd>→</dd></div></dl>
          <p className="ca-topo-mekanizma"><strong>Neden–sonuç</strong> {interval < 100 ? 'İzohipsler sıklaştı; aynı yükselti farkı daha kısa mesafeye sıkıştı.' : 'Aralık açıldıkça yüzey daha sakin görünür; eğim değil, gösterim aralığı değişir.'}</p>
        </>}
        <button type="button" className="ca-topo-oynat" onClick={() => setOynatiliyor((deger) => !deger)} aria-pressed={oynatiliyor}><Play size={14} /> {oynatiliyor ? 'Süreci duraklat' : 'Oluşum sürecini oynat'}</button>
      </aside>
    </div>

    {tab === 'karsilastir' ? <div className="ca-topo-karsilastir" aria-label="Dağ plato ova karşılaştırması"><div><span>01</span><strong>Dağ</strong><small>yüksek eğim · aşınım</small></div><div><span>02</span><strong>Plato</strong><small>yüksek ama düz yüzey</small></div><div><span>03</span><strong>Ova / delta</strong><small>düşük eğim · birikim</small></div></div> : null}
    <footer className="ca-topo-alt"><span><i /> Aynı arazi, farklı kanıt</span><small>Fotoğraf dekor değil; SVG katmanları ve profil aynı havzayı deterministik olarak açıklar.</small><button type="button" onClick={() => onBolgeSec('yerkure')}>Yerin şekillenmesine geç <ArrowRight size={14} /></button></footer>
  </section>
}

/* Harita alanı 16/7.6 oranında. viewBox bu oranla aynı tutulunca koordinat
   sistemi eş ölçekli kalır: ok başları ezilmez, yaylar düzgün çizilir. */
const HARITA_ORANI = 7.6 / 16

/**
 * İki bölge arasındaki ön koşul yayı.
 *
 * Uçlar düğüm dairesini boş bırakacak kadar geri çekilir (düz çizgi
 * düğümün altından geçiyordu) ve hafif bir yay verilir; on üç düğüm
 * arasındaki on dokuz bağlantı düz çizgiyle çizilince ağ gibi görünüyordu.
 */
function baglantiYolu(a, b) {
  const x1 = a.konum[0]
  const y1 = a.konum[1] * HARITA_ORANI
  const x2 = b.konum[0]
  const y2 = b.konum[1] * HARITA_ORANI
  const dx = x2 - x1
  const dy = y2 - y1
  const boy = Math.hypot(dx, dy) || 1
  const ux = dx / boy
  const uy = dy / boy
  const gerile = Math.min(2.6, boy * 0.3)
  const bx1 = x1 + ux * gerile
  const by1 = y1 + uy * gerile
  const bx2 = x2 - ux * gerile
  const by2 = y2 - uy * gerile
  const yay = boy * 0.07
  const ox = (bx1 + bx2) / 2 - uy * yay
  const oy = (by1 + by2) / 2 + ux * yay
  return `M ${bx1.toFixed(2)} ${by1.toFixed(2)} Q ${ox.toFixed(2)} ${oy.toFixed(2)} ${bx2.toFixed(2)} ${by2.toFixed(2)}`
}

/** Kapsam filtresine göre görünen bölgeler. */
function gorunenBolgeler(kapsam) {
  return BOLGELER.filter((b) => kapsam === 'tum' || b.kapsam === 'ortak' || b.kapsam === 'tum' || b.kapsam === kapsam)
}

export default function AtlasHaritasi({ kapsam, yuzdeler, onBolgeSec }) {
  const gorunenler = gorunenBolgeler(kapsam)

  return (
    <>
      {/* ── 1) 2B harita öğrenme nesnesi ───────────────────────────── */}
      <HaritaAtlasYuzeyi onBolgeSec={onBolgeSec} />

      <CografiMercek kompakt />

      {/* ── 2) Arazi kanıtı: harita bilgisini sahnede derinleştir ───── */}
      <TopografikSahne onBolgeSec={onBolgeSec} />

      {/* ── 3) Keşif rotası ───────────────────────────────────────── */}
      <section className="ca-atlas-harita">
        <div className="ca-harita-bolum-bas">
          <div><span>Önerilen rota</span><h2>Katmanlı Dünya laboratuvarı</h2></div>
          <p>Oklar ön koşul ilişkisini gösterir; kilit değildir.</p>
        </div>
        <div className="ca-atlas-alan">
          <svg viewBox={`0 0 100 ${100 * HARITA_ORANI}`} aria-hidden="true">
            <defs>
              <marker id="ca-ok" markerWidth="1.2" markerHeight="1.2" refX="1.05" refY="0.6" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0 0L1.2 0.6 0 1.2z" />
              </marker>
            </defs>
            {BAGLANTILAR.map(([a, b]) => {
              const x = BOLGELER.find((v) => v.kod === a)
              const y = BOLGELER.find((v) => v.kod === b)
              if (!x || !y || !gorunenler.includes(x) || !gorunenler.includes(y)) return null
              return <path key={`${a}-${b}`} className="ca-bag" d={baglantiYolu(x, y)} markerEnd="url(#ca-ok)" />
            })}
          </svg>
          <div>
            {gorunenler.map((bolge) => {
              const sira = BOLGELER.indexOf(bolge) + 1
              const oran = yuzdeler[bolge.kod] ?? 0
              return (
                <button
                  key={bolge.kod}
                  type="button"
                  className="ca-atlas-dugum"
                  style={{ '--x': `${bolge.konum[0]}%`, '--y': `${bolge.konum[1]}%`, '--renk': bolge.renk }}
                  onClick={() => onBolgeSec(bolge.kod)}
                  title={bolge.amac}
                >
                  <i aria-hidden="true">{String(sira).padStart(2, '0')}</i>
                  <strong>{bolge.kisaAd}</strong>
                  <em>{bolge.kapsam === 'ortak'
                    ? <>{oran ? <CheckCircle2 /> : null}%{oran}</>
                    : KAPSAM_ETIKETI[bolge.kapsam]}</em>
                  <u>{bolge.ad}</u>
                </button>
              )
            })}
          </div>
          <i><MapPinned /> Keşif haritası şematiktir; oklar zorunlu sıra değildir.</i>
        </div>
      </section>

      {/* ── 4) Bölge galerisi ─────────────────────────────────────── */}
      <section className="ca-bolge-galeri">
        <div className="ca-harita-bolum-bas">
          <div><span>Bölgeler</span><h2>Her bölgenin kendi çizimi var</h2></div>
          <p>Çizimler süs değil; o bölgenin ana ilişkisini küçültülmüş şema olarak gösterir.</p>
        </div>
        <div className="ca-galeri-izgara">
          {gorunenler.map((bolge) => {
            const duraklar = bolgeEtkilesimleri(bolge.kod)
            const basliklar = bolgeKonulari(bolge.kod)
            const oncekiler = bolge.onKosullar.map((k) => BOLGELER.find((b) => b.kod === k)?.kisaAd).filter(Boolean)
            const sira = BOLGELER.indexOf(bolge) + 1
            return (
              <button
                key={bolge.kod}
                type="button"
                className="ca-galeri-kart"
                style={{ '--renk': bolge.renk }}
                onClick={() => onBolgeSec(bolge.kod)}
              >
                <span className="ca-galeri-gorsel">
                  <BolgeCizimi kod={bolge.kod} renk={bolge.renk} />
                </span>
                <span className="ca-galeri-govde">
                  <span className="ca-galeri-ust">
                    <i>{bolge.konu}</i>
                    <em>{String(sira).padStart(2, '0')}</em>
                  </span>
                  <strong>{bolge.ad}</strong>
                  <small>{bolge.ozet}</small>
                  <span className="ca-galeri-rozetler">
                    {duraklar.length ? <b>{duraklar.length} laboratuvar</b> : <b>pekiştirme alanı</b>}
                    {basliklar.length ? <b>{basliklar.length} başlık</b> : null}
                    {bolge.kapsam !== 'ortak' ? <b className="ayri">{KAPSAM_ETIKETI[bolge.kapsam]}</b> : null}
                  </span>
                  <span className="ca-galeri-sinav">
                    <Target size={12} />
                    <span>{bolge.sinavNotu.siklik}</span>
                  </span>
                  {oncekiler.length ? <span className="ca-galeri-onkosul">Önce bakmakta yarar var: {oncekiler.join(', ')}</span> : null}
                  <span className="ca-galeri-eylem">Bölgeye gir <ArrowRight size={13} /></span>
                </span>
              </button>
            )
          })}
        </div>
        <p className="ca-galeri-not">
          <Sparkles size={13} /> Sınav sıklıkları son yılların eğilimini özetler; TYT’de coğrafya toplam 5 soruyla temsil edilir ve dağılım yıldan yıla değişir.
        </p>
      </section>
    </>
  )
}
