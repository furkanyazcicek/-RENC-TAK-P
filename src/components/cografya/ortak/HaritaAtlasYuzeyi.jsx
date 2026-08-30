import { useEffect, useMemo, useState } from 'react'
import { ArrowRight, Compass, Info, Layers3, MapPinned, Minus, Plus, RotateCcw } from 'lucide-react'
import { MERCEK_NOKTALARI } from '../../../data/cografya/haritaNoktalari.js'

const KATMANLAR = [
  { id: 'dogal', label: 'Doğal sistemler', color: '#67d1ae', note: 'İklim, su, relief ve biyom kanıtlarını birlikte oku.' },
  { id: 'beseri', label: 'Beşerî sistemler', color: '#e7a65f', note: 'Nüfus, yerleşme ve insan kararlarının mekânsal izlerini gör.' },
  { id: 'ekonomik', label: 'Ekonomik ağlar', color: '#e2cf66', note: 'Üretim, ulaşım ve pazar bağlantılarını karşılaştır.' },
  { id: 'risk', label: 'Risk ve afet', color: '#ed7c7c', note: 'Tehlike, maruziyet ve kırılganlığın nasıl kesiştiğini incele.' },
  { id: 'baglanti', label: 'Küresel bağlantılar', color: '#88b5f1', note: 'Bölgeler arasındaki akış ve karşılıklı bağımlılığı izle.' },
]

const OLCEKLER = [
  { id: 'yerel', label: 'Yerel', zoom: 1.42, question: 'Bu noktada hangi süreç işliyor?' },
  { id: 'bolgesel', label: 'Bölgesel', zoom: 1.22, question: 'Aynı bölgede hangi desen tekrarlanıyor?' },
  { id: 'turkiye', label: 'Türkiye', zoom: 1.1, question: 'Türkiye’de hangi değişkenler ayrışıyor?' },
  { id: 'kitasal', label: 'Kıtasal', zoom: 0.98, question: 'Kıta ölçeğinde hangi karşıtlık görülüyor?' },
  { id: 'kuresel', label: 'Küresel', zoom: 0.9, question: 'Bu dağılışın ortak küresel deseni ne?' },
]

const KARA_PARCLARI = [
  'M 68 128 L 120 77 L 205 72 L 272 104 L 325 154 L 305 202 L 249 214 L 224 258 L 165 239 L 136 196 L 91 184 Z',
  'M 273 262 L 331 282 L 342 352 L 316 438 L 286 418 L 282 360 L 248 315 Z',
  'M 442 114 L 505 69 L 574 87 L 623 125 L 696 111 L 778 118 L 873 164 L 854 211 L 775 219 L 730 248 L 669 223 L 619 249 L 573 220 L 519 229 L 469 195 L 424 204 Z',
  'M 505 257 L 572 230 L 644 262 L 671 328 L 643 397 L 602 458 L 554 424 L 529 359 L 482 322 Z',
  'M 780 343 L 842 316 L 913 349 L 940 397 L 893 435 L 821 426 L 779 391 Z',
]

const IZGARA_Y = [86, 172, 258, 344, 430]
const IZGARA_X = [170, 340, 510, 680, 850]

function noktaKonumu(point) {
  return { x: point.x * 10, y: point.y * 5.2 + 10 }
}

function kanitDegerleri(point, layerId) {
  const katmanCarpani = { dogal: 1, beseri: .88, ekonomik: .82, risk: .76, baglanti: .9 }[layerId] ?? 1
  const taban = {
    amazon: [86, 46, 68],
    anadolu: [64, 72, 58],
    himalaya: [81, 34, 54],
    japonya: [42, 82, 78],
    sahra: [76, 24, 41],
  }[point.id] ?? [50, 50, 50]
  return taban.map((value) => Math.round(value * katmanCarpani))
}

function KatmanLejandi({ katman }) {
  return (
    <div className="ca-harita-atlas-lejant" aria-label="Harita lejantı">
      <span><i style={{ background: katman.color }} /> {katman.label}</span>
      <span><i className="ca-harita-atlas-nokta" /> Seçilebilir kanıt noktası</span>
      <span><i className="ca-harita-atlas-cizgi" /> Eşit aralıklı koordinat ızgarası</span>
    </div>
  )
}

export default function HaritaAtlasYuzeyi({ onBolgeSec }) {
  const [katmanId, setKatmanId] = useState('dogal')
  const [olcekId, setOlcekId] = useState('kuresel')
  const [zoom, setZoom] = useState(.9)
  const [aktifId, setAktifId] = useState('anadolu')

  const katman = KATMANLAR.find((item) => item.id === katmanId) ?? KATMANLAR[0]
  const olcek = OLCEKLER.find((item) => item.id === olcekId) ?? OLCEKLER.at(-1)
  const gorunenNoktalar = useMemo(() => {
    const filtreli = MERCEK_NOKTALARI.filter((point) => point.layers?.includes(katmanId))
    return filtreli.length ? filtreli : MERCEK_NOKTALARI
  }, [katmanId])
  const aktif = gorunenNoktalar.find((point) => point.id === aktifId) ?? gorunenNoktalar[0]
  const kanitlar = aktif ? kanitDegerleri(aktif, katmanId) : [50, 50, 50]

  useEffect(() => {
    if (aktif && aktif.id !== aktifId) setAktifId(aktif.id)
  }, [aktif, aktifId])

  const olcekSec = (id) => {
    const secilen = OLCEKLER.find((item) => item.id === id)
    setOlcekId(id)
    if (secilen) setZoom(secilen.zoom)
  }

  const haritaSifirla = () => {
    setKatmanId('dogal')
    setOlcekId('kuresel')
    setZoom(.9)
    setAktifId('anadolu')
  }

  const hedefeGit = () => {
    if (aktif?.target) onBolgeSec?.(aktif.target.bolge, aktif.target.etkilesim)
  }

  return (
    <section className="ca-harita-atlas" aria-labelledby="ca-harita-atlas-baslik">
      <header className="ca-harita-atlas-baslik">
        <div>
          <span className="ca-etiket"><Compass size={14} /> 2B harita laboratuvarı</span>
          <h1 id="ca-harita-atlas-baslik">Dünyayı <em>katman katman</em> oku.</h1>
          <p>Ölçeği ve kanıt katmanını değiştir; aynı konumun doğal, beşerî ve ekonomik anlamının nasıl farklılaştığını haritada gör.</p>
        </div>
        <div className="ca-harita-atlas-amac">
          <MapPinned size={18} aria-hidden="true" />
          <strong>{olcek.label} ölçek</strong>
          <small>{olcek.question}</small>
        </div>
      </header>

      <div className="ca-harita-atlas-araclar">
        <div className="ca-harita-atlas-katmanlar" role="group" aria-label="Harita katmanı">
          <span>Katman</span>
          {KATMANLAR.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={katmanId === item.id}
              className={katmanId === item.id ? 'etkin' : ''}
              style={{ '--katman-renk': item.color }}
              onClick={() => setKatmanId(item.id)}
            >
              <i aria-hidden="true" /> {item.label}
            </button>
          ))}
        </div>
        <div className="ca-harita-atlas-olcek" role="group" aria-label="Harita ölçeği">
          <span>Ölçek</span>
          {OLCEKLER.map((item) => (
            <button key={item.id} type="button" aria-pressed={olcekId === item.id} className={olcekId === item.id ? 'etkin' : ''} onClick={() => olcekSec(item.id)}>{item.label}</button>
          ))}
        </div>
      </div>

      <div className="ca-harita-atlas-icerik">
        <div className="ca-harita-atlas-sahne">
          <div className="ca-harita-atlas-sahne-ust">
            <span><Layers3 size={14} /> {katman.note}</span>
            <small>Şematik öğretim haritası · gerçek koordinat ve alan iddiası taşımaz</small>
          </div>
          <div className="ca-harita-atlas-tuval">
            <svg viewBox="0 0 1000 520" role="img" aria-label={`${olcek.label} ölçekte, ${katman.label} katmanını gösteren şematik dünya haritası`}>
              <defs>
                <linearGradient id="ca-atlas-su" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#123c4a" />
                  <stop offset="1" stopColor="#0d2836" />
                </linearGradient>
                <pattern id="ca-atlas-doku" width="22" height="22" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r=".8" fill="rgba(224,249,244,.08)" />
                </pattern>
              </defs>
              <rect width="1000" height="520" fill="url(#ca-atlas-su)" />
              <rect width="1000" height="520" fill="url(#ca-atlas-doku)" opacity=".45" />
              <g className="ca-harita-atlas-izgara" aria-hidden="true">
                {IZGARA_Y.map((y) => <line key={`y-${y}`} x1="0" x2="1000" y1={y} y2={y} />)}
                {IZGARA_X.map((x) => <line key={`x-${x}`} x1={x} x2={x} y1="0" y2="520" />)}
              </g>
              <g className={`ca-harita-atlas-kara ca-harita-atlas-kara-${katmanId}`} transform={`translate(${500 - 500 * zoom} ${260 - 260 * zoom}) scale(${zoom})`}>
                {KARA_PARCLARI.map((path) => <path key={path} d={path} />)}
              </g>
              <g className="ca-harita-atlas-ekvator" aria-hidden="true"><path d="M 0 260 C 240 248 420 270 610 256 S 840 252 1000 260" /><text x="16" y="252">Ekvator</text></g>
              <g className="ca-harita-atlas-etiketler" aria-hidden="true"><text x="25" y="40">Kuzey Kutbu</text><text x="845" y="500">Güney Kutbu</text><text x="475" y="505">0° başlangıç boylamı</text></g>
              <g className="ca-harita-atlas-noktalar" transform={`translate(${500 - 500 * zoom} ${260 - 260 * zoom}) scale(${zoom})`}>
                {gorunenNoktalar.map((point, index) => {
                  const pos = noktaKonumu(point)
                    const selected = aktif?.id === point.id
                  return <g key={point.id} transform={`translate(${pos.x} ${pos.y})`}>
                    <circle className={`ca-harita-atlas-odak ${selected ? 'etkin' : ''}`} r={selected ? 15 : 11} style={{ '--odak-renk': katman.color }} />
                    <text className="ca-harita-atlas-numara" y="3" textAnchor="middle">{index + 1}</text>
                    <circle className="ca-harita-atlas-tik" r="20" tabIndex="-1" aria-hidden="true" />
                  </g>
                })}
              </g>
            </svg>
            <div className="ca-harita-atlas-nokta-kontroller" style={{ '--ca-harita-zoom': zoom }} aria-label="Harita kanıt noktaları">
              {gorunenNoktalar.map((point, index) => {
                const pos = noktaKonumu(point)
                return <button key={point.id} type="button" className={aktif?.id === point.id ? 'etkin' : ''} style={{ left: `${(pos.x / 1000) * 100}%`, top: `${(pos.y / 520) * 100}%` }} aria-pressed={aktif?.id === point.id} aria-label={`${index + 1}. ${point.region}: ${point.title}`} onClick={() => setAktifId(point.id)}><span>{index + 1}</span></button>
              })}
            </div>
            <div className="ca-harita-atlas-zoom" aria-label="Harita yakınlaştırma">
              <button type="button" onClick={() => setZoom((value) => Math.min(1.7, +(value + .1).toFixed(2)))} aria-label="Haritayı yakınlaştır"><Plus size={16} /></button>
              <output aria-live="polite">{Math.round(zoom * 100)}%</output>
              <button type="button" onClick={() => setZoom((value) => Math.max(.76, +(value - .1).toFixed(2)))} aria-label="Haritayı uzaklaştır"><Minus size={16} /></button>
              <button type="button" onClick={haritaSifirla} aria-label="Harita görünümünü sıfırla"><RotateCcw size={14} /></button>
            </div>
          </div>
          <KatmanLejandi katman={katman} />
        </div>

        {aktif ? (
          <aside className="ca-harita-atlas-denetleyici" aria-live="polite" aria-label="Seçili harita kanıtı">
            <div className="ca-harita-atlas-denetleyici-ust"><span>Seçili kanıt</span><b>{aktif.scale} · {katman.label}</b></div>
            <p className="ca-harita-atlas-konum">{aktif.region}</p>
            <h2>{aktif.title}</h2>
            <p>{aktif.summary}</p>
            <dl>
              <div><dt>Neden burada?</dt><dd>{aktif.significance}</dd></div>
              <div><dt>Haritadaki sonuç</dt><dd>{aktif.result}</dd></div>
            </dl>
            <div className="ca-harita-atlas-kanit">
              <span>Katmanın kanıt yoğunluğu</span>
              <div><i style={{ '--deger': `${kanitlar[0]}%`, '--renk': katman.color }} /><b>doğal</b></div>
              <div><i style={{ '--deger': `${kanitlar[1]}%`, '--renk': katman.color }} /><b>insan</b></div>
              <div><i style={{ '--deger': `${kanitlar[2]}%`, '--renk': katman.color }} /><b>bağlantı</b></div>
            </div>
            <div className="ca-harita-atlas-ipucu"><Info size={15} /><span><strong>TYT ipucu</strong>{aktif.examTip}</span></div>
            <button type="button" className="ca-harita-atlas-cta" onClick={hedefeGit}>İlgili laboratuvarı aç <ArrowRight size={15} /></button>
          </aside>
        ) : null}
      </div>

      <footer className="ca-harita-atlas-alt">
        <span><i /> Harita → grafik → karar</span>
        <p>Bir katman değiştiğinde yalnız renk değil; kanıt, soru ve açıklama da değişir.</p>
        <small><MapPinned size={13} /> Harita noktaları öğretim amaçlı seçilmiştir.</small>
      </footer>
    </section>
  )
}
