import { useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import '../styles/reels-sabit-ivmeli-atis.css'

const TOPLAM_SURE = 29
const ZAMAN_NOKTALARI = [0, 1, 2, 3]

const sinirla = (deger, alt = 0, ust = 1) => Math.min(ust, Math.max(alt, deger))
const yumusat = (deger) => {
  const t = sinirla(deger)
  return 1 - ((1 - t) ** 3)
}
const aralik = (zaman, baslangic, bitis, yumusama = 0.45) => (
  sinirla((zaman - baslangic) / yumusama)
  * sinirla((bitis - zaman) / yumusama)
)
const karistir = (a, b, oran) => a + ((b - a) * oran)

const SAHNE = {
  baslangicY: 520,
  zeminY: 1320,
  serbestX: 250,
  atisX: 430,
  donusumX: 210,
  yatayAdim: 220,
}

function dusmeY(saniye) {
  return SAHNE.baslangicY + (SAHNE.zeminY - SAHNE.baslangicY) * ((saniye / 3) ** 2)
}

function Top({ x, y, renk, parilti = false, opaklik = 1, yaricap = 25 }) {
  return (
    <g opacity={opaklik}>
      {parilti ? <circle cx={x} cy={y} r={yaricap * 2.2} fill={renk} opacity="0.12" /> : null}
      <circle cx={x} cy={y} r={yaricap} fill={renk} filter="url(#topGolgesi)" />
      <circle cx={x - yaricap * 0.28} cy={y - yaricap * 0.32} r={yaricap * 0.22} fill="white" opacity="0.72" />
    </g>
  )
}

function Ok({ x1, y1, x2, y2, renk, etiket, opaklik = 1 }) {
  return (
    <g opacity={opaklik}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={renk} strokeWidth="7" strokeLinecap="round" markerEnd="url(#okUcu)" />
      {etiket ? <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 18} className="ria-ok-etiketi" fill={renk}>{etiket}</text> : null}
    </g>
  )
}

function ReelsSahnesi({ zaman }) {
  const ilkSahne = aralik(zaman, 0, 10.2, 0.55)
  const soru = aralik(zaman, 0, 3.25, 0.42)
  const birlikte = yumusat((zaman - 2.5) / 5.25)
  const hareketSuresi = birlikte * 3
  const hareketY = dusmeY(hareketSuresi)
  const atisHareketX = SAHNE.atisX + (hareketSuresi * 140)
  const ayniAnda = aralik(zaman, 7.65, 10.2, 0.35)

  const dusmeIzleri = aralik(zaman, 9.75, 19.8, 0.5)
  const donusumMetni = aralik(zaman, 13.7, 20.3, 0.5)
  const parabolCizimi = yumusat((zaman - 17.2) / 2.15)

  const bilesenler = aralik(zaman, 19.5, 25.7, 0.52)
  const bilesenSuresi = sinirla((zaman - 20.05) / 4.6) * 3
  const bilesenX = SAHNE.donusumX + (bilesenSuresi * SAHNE.yatayAdim)
  const bilesenY = dusmeY(bilesenSuresi)
  const kapanis = yumusat((zaman - 24.8) / 0.75)
  const markaKapanis = aralik(zaman, 25.3, 29.4, 0.55)

  const ilerleme = sinirla(zaman / TOPLAM_SURE)

  return (
    <svg viewBox="0 0 1080 1920" role="img" aria-label="Serbest düşme ile yatay atışın aynı düşey harekete sahip olduğunu gösteren dikey animasyon sahnesi">
      <defs>
        <linearGradient id="zemin" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#090B1A" />
          <stop offset="0.5" stopColor="#101329" />
          <stop offset="1" stopColor="#090A16" />
        </linearGradient>
        <radialGradient id="morIsik">
          <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.24" />
          <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="maviIsik">
          <stop offset="0" stopColor="#22D3EE" stopOpacity="0.16" />
          <stop offset="1" stopColor="#22D3EE" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="aurora" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#A78BFA" />
          <stop offset="0.52" stopColor="#7C3AED" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
        <filter id="topGolgesi" x="-100%" y="-100%" width="300%" height="300%">
          <feDropShadow dx="0" dy="12" stdDeviation="14" floodColor="#000" floodOpacity="0.42" />
        </filter>
        <filter id="yaziIsigi" x="-30%" y="-50%" width="160%" height="200%">
          <feGaussianBlur stdDeviation="24" />
        </filter>
        <marker id="okUcu" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#22D3EE" />
        </marker>
      </defs>

      <rect width="1080" height="1920" fill="url(#zemin)" />
      <circle cx="170" cy="410" r="430" fill="url(#morIsik)" />
      <circle cx="940" cy="1070" r="520" fill="url(#maviIsik)" />
      <path d="M 0 1700 C 270 1580, 630 1840, 1080 1640 L 1080 1920 L 0 1920 Z" fill="#11152C" opacity="0.72" />

      <g className="ria-marka">
        <path d="M103 119 148 96l45 23-45 23-45-23Zm13 12v29c0 17 64 17 64 0v-29" fill="none" stroke="white" strokeWidth="8" strokeLinejoin="round" strokeLinecap="round" />
        <text x="216" y="135" className="ria-marka-adi">DRKOÇ</text>
        <text x="216" y="172" className="ria-marka-seri">FİZİK · GÖREREK ÖĞREN</text>
      </g>

      <rect x="96" y="66" width="888" height="5" rx="3" fill="white" opacity="0.12" />
      <rect x="96" y="66" width={888 * ilerleme} height="5" rx="3" fill="url(#aurora)" />

      {/* Tahmin ve eş zamanlı düşüş */}
      <g opacity={ilkSahne * (1 - kapanis)}>
        <g opacity={soru}>
          <text x="540" y="300" className="ria-kanca-kucuk" textAnchor="middle">AYNI YÜKSEKLİK · AYNI ANDA</text>
          <text x="540" y="385" className="ria-kanca" textAnchor="middle">Hangisi önce</text>
          <text x="540" y="465" className="ria-kanca" textAnchor="middle">yere düşer?</text>
        </g>

        <line x1="118" y1={SAHNE.zeminY} x2="962" y2={SAHNE.zeminY} className="ria-zemin-cizgisi" />
        <path d={`M118 ${SAHNE.zeminY + 2} L962 ${SAHNE.zeminY + 2} L922 ${SAHNE.zeminY + 34} L158 ${SAHNE.zeminY + 34} Z`} fill="#1C213D" />

        <g opacity={sinirla((zaman - 0.35) / 0.5)}>
          <g opacity={soru}>
            <text x={SAHNE.serbestX} y="600" className="ria-cisim-etiketi" textAnchor="middle">BIRAKILAN</text>
            <text x={SAHNE.atisX} y="600" className="ria-cisim-etiketi mavi" textAnchor="middle">YATAY ATILAN</text>
          </g>
          <Top x={SAHNE.serbestX} y={hareketY} renk="#A78BFA" parilti />
          <Top x={atisHareketX} y={hareketY} renk="#22D3EE" parilti />
          <line x1={SAHNE.serbestX + 35} y1={hareketY} x2={atisHareketX - 35} y2={hareketY} stroke="white" strokeWidth="3" strokeDasharray="12 14" opacity={0.22 * sinirla((zaman - 2.4) / 0.4)} />
        </g>

        <g opacity={sinirla((zaman - 2.45) / 0.35) * sinirla((8.1 - zaman) / 0.35)}>
          <rect x="420" y="1438" width="240" height="76" rx="38" fill="#151A35" stroke="white" strokeOpacity="0.12" />
          <text x="540" y="1488" className="ria-zaman" textAnchor="middle">t = {hareketSuresi.toFixed(1)} s</text>
        </g>

        <g opacity={ayniAnda}>
          <rect x="287" y="1450" width="506" height="122" rx="61" fill="#12172E" stroke="#34D399" strokeOpacity="0.36" />
          <circle cx="342" cy="1511" r="12" fill="#34D399" />
          <text x="560" y="1533" className="ria-ayni-anda" textAnchor="middle">AYNI ANDA</text>
        </g>
      </g>

      {/* Düşey zaman görüntülerini yatayda taşıyarak parabolü kur */}
      <g opacity={dusmeIzleri * (1 - kapanis)}>
        <text x="540" y="300" className="ria-kanca-kucuk" textAnchor="middle">ÖNCE BİLDİĞİN HAREKETİ GÖR</text>
        <text x="540" y="390" className="ria-baslik" textAnchor="middle">Serbest düşme</text>
        <line x1={SAHNE.donusumX} y1={SAHNE.baslangicY - 44} x2={SAHNE.donusumX} y2={SAHNE.zeminY} stroke="#A78BFA" strokeWidth="3" strokeDasharray="10 14" opacity={0.3 * (1 - parabolCizimi)} />
        <line x1="112" y1={SAHNE.zeminY} x2="966" y2={SAHNE.zeminY} className="ria-zemin-cizgisi" />

        {ZAMAN_NOKTALARI.map((saniye, index) => {
          const tasima = yumusat((zaman - (14.6 + index * 0.42)) / 1.65)
          const baslangicX = SAHNE.donusumX
          const hedefX = SAHNE.donusumX + (SAHNE.yatayAdim * index)
          const x = karistir(baslangicX, hedefX, tasima)
          const y = dusmeY(saniye)
          return (
            <g key={saniye}>
              <line x1={SAHNE.donusumX} y1={y} x2={x} y2={y} stroke="#22D3EE" strokeWidth="3" strokeDasharray="10 13" opacity={0.3 * tasima} />
              <Top x={x} y={y} renk={index === 0 ? '#E8E9FF' : '#A78BFA'} opaklik={0.98} yaricap={21} />
              <g transform={`translate(${x + 41} ${y - 14})`}>
                <rect x="0" y="-30" width="88" height="50" rx="25" fill="#171C38" stroke="white" strokeOpacity="0.12" />
                <text x="44" y="4" className="ria-nokta-zamani" textAnchor="middle">{saniye} s</text>
              </g>
              {tasima > 0.08 && index > 0 ? (
                <text x={(SAHNE.donusumX + x) / 2} y={y - 24} className="ria-metre" textAnchor="middle" opacity={tasima}>
                  {index * 20} m
                </text>
              ) : null}
            </g>
          )
        })}

        <path d="M210 520 Q540 520 870 1320" fill="none" stroke="url(#aurora)" strokeWidth="12" strokeLinecap="round" pathLength="1" strokeDasharray="1" strokeDashoffset={1 - parabolCizimi} opacity={0.92} />

        <g opacity={donusumMetni * sinirla((zaman - 16.4) / 0.6)}>
          <rect x="124" y="1435" width="832" height="135" rx="34" fill="#11162E" stroke="white" strokeOpacity="0.1" />
          <circle cx="178" cy="1482" r="10" fill="#A78BFA" />
          <text x="210" y="1495" className="ria-aciklama">Düşey konum değişmedi</text>
          <circle cx="608" cy="1482" r="10" fill="#22D3EE" />
          <text x="640" y="1495" className="ria-aciklama">Her saniye 20 m yana</text>
          <text x="540" y="1542" className="ria-aciklama-alt" textAnchor="middle">Zaman noktalarını yana taşı → parabolü gör</text>
        </g>
      </g>

      {/* İki bağımsız hareketin birleşimi */}
      <g opacity={bilesenler * (1 - markaKapanis)}>
        <text x="540" y="298" className="ria-kanca-kucuk" textAnchor="middle">İKİ EKSEN · TEK HAREKET</text>
        <text x="540" y="390" className="ria-baslik" textAnchor="middle">Parabol nereden geliyor?</text>
        <line x1="112" y1={SAHNE.zeminY} x2="966" y2={SAHNE.zeminY} className="ria-zemin-cizgisi" />
        <path d="M210 520 Q540 520 870 1320" fill="none" stroke="white" strokeOpacity="0.16" strokeWidth="5" strokeDasharray="10 14" />
        <Top x={bilesenX} y={bilesenY} renk="#F6F7FF" parilti yaricap={27} />
        <Ok x1={bilesenX} y1={bilesenY} x2={Math.min(bilesenX + 126, 976)} y2={bilesenY} renk="#22D3EE" etiket="vₓ sabit" />
        <g transform={`translate(${bilesenX} ${bilesenY})`}>
          <line x1="0" y1="32" x2="0" y2="144" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" />
          <path d="M-15 126 L0 148 L15 126" fill="none" stroke="#A78BFA" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
          <text x="-22" y="105" className="ria-ok-etiketi" fill="#A78BFA" textAnchor="end">g = 10</text>
        </g>

        <g transform="translate(116 1434)">
          <rect width="397" height="140" rx="34" fill="#151831" stroke="#A78BFA" strokeOpacity="0.26" />
          <circle cx="52" cy="48" r="10" fill="#A78BFA" />
          <text x="82" y="60" className="ria-kart-baslik">DÜŞEY</text>
          <text x="52" y="112" className="ria-kart-formul">aᵧ = g = 10 m/s²</text>
        </g>
        <text x="540" y="1518" className="ria-arti" textAnchor="middle">+</text>
        <g transform="translate(567 1434)">
          <rect width="397" height="140" rx="34" fill="#151831" stroke="#22D3EE" strokeOpacity="0.26" />
          <circle cx="52" cy="48" r="10" fill="#22D3EE" />
          <text x="82" y="60" className="ria-kart-baslik">YATAY</text>
          <text x="52" y="112" className="ria-kart-formul">vₓ = sabit</text>
        </g>
      </g>

      {/* Kapanış */}
      <g opacity={markaKapanis}>
        <circle cx="540" cy="860" r="440" fill="url(#morIsik)" opacity="0.75" />
        <path d="M176 920 Q540 920 904 1280" fill="none" stroke="url(#aurora)" strokeWidth="13" strokeLinecap="round" opacity="0.8" />
        <circle cx="176" cy="920" r="20" fill="#A78BFA" />
        <circle cx="904" cy="1280" r="20" fill="#22D3EE" />
        <text x="540" y="570" className="ria-kapanis-ust" textAnchor="middle">YATAY ATIŞ</text>
        <text x="540" y="690" className="ria-kapanis" textAnchor="middle">Yeni bir hareket</text>
        <text x="540" y="795" className="ria-kapanis" textAnchor="middle">değil.</text>
        <text x="540" y="1395" className="ria-kapanis-alt" textAnchor="middle">Aynı hareketin</text>
        <text x="540" y="1460" className="ria-kapanis-alt" textAnchor="middle">iki eksendeki birleşimi.</text>
        <rect x="244" y="1530" width="592" height="104" rx="52" fill="url(#aurora)" />
        <text x="540" y="1596" className="ria-imza" textAnchor="middle">Hareketi ezberleme, gör.</text>
      </g>

      <g opacity={sinirla((zaman - 1) / 0.6) * (1 - markaKapanis)}>
        <text x="108" y="1718" className="ria-varsayim">İdeal model · Hava direnci ihmal edilmiştir.</text>
        <text x="108" y="1763" className="ria-varsayim">Dünya için g ≈ 10 m/s² alınmıştır.</text>
      </g>
      <text x="972" y="1782" className="ria-bolum" textAnchor="end">01 / YATAY ATIŞ</text>
    </svg>
  )
}

export default function ReelsSabitIvmeliAtis() {
  const arama = useMemo(() => new URLSearchParams(window.location.search), [])
  const sabitZaman = arama.get('time')
  const temiz = arama.get('clean') === '1'
  const dongu = arama.get('loop') === '1'
  const [zaman, setZaman] = useState(() => sinirla(Number(sabitZaman) || 0, 0, TOPLAM_SURE))
  const [oynuyor, setOynuyor] = useState(sabitZaman === null)
  const baslangicRef = useRef(null)
  const oncekiZamanRef = useRef(zaman)

  useEffect(() => {
    if (!oynuyor) {
      baslangicRef.current = null
      return undefined
    }

    let kare
    const ilerlet = (damga) => {
      if (baslangicRef.current === null) baslangicRef.current = damga
      const gecen = (damga - baslangicRef.current) / 1000
      let yeniZaman = oncekiZamanRef.current + gecen
      if (yeniZaman >= TOPLAM_SURE) {
        if (dongu) {
          yeniZaman %= TOPLAM_SURE
          oncekiZamanRef.current = 0
          baslangicRef.current = damga
        } else {
          yeniZaman = TOPLAM_SURE
          setOynuyor(false)
        }
      }
      setZaman(yeniZaman)
      if (yeniZaman < TOPLAM_SURE || dongu) kare = requestAnimationFrame(ilerlet)
    }
    kare = requestAnimationFrame(ilerlet)
    return () => cancelAnimationFrame(kare)
  }, [oynuyor, dongu])

  const zamanAyarla = (deger) => {
    const yeni = Number(deger)
    setZaman(yeni)
    oncekiZamanRef.current = yeni
    baslangicRef.current = null
  }

  const oynatDuraklat = () => {
    oncekiZamanRef.current = zaman >= TOPLAM_SURE ? 0 : zaman
    if (zaman >= TOPLAM_SURE) setZaman(0)
    baslangicRef.current = null
    setOynuyor((deger) => !deger)
  }

  const bastan = () => {
    setZaman(0)
    oncekiZamanRef.current = 0
    baslangicRef.current = null
    setOynuyor(true)
  }

  return (
    <main className={`ria-onizleme ${temiz ? 'ria-temiz' : ''}`}>
      <div className="ria-cerceve">
        <ReelsSahnesi zaman={zaman} />
      </div>
      {!temiz ? (
        <div className="ria-kontroller" aria-label="Reels görsel akış önizleme kontrolleri">
          <button type="button" onClick={bastan} aria-label="Baştan oynat"><RotateCcw size={19} /></button>
          <button type="button" className="ria-oynat" onClick={oynatDuraklat} aria-label={oynuyor ? 'Duraklat' : 'Oynat'}>
            {oynuyor ? <Pause size={21} /> : <Play size={21} />}
          </button>
          <input
            type="range" min="0" max={TOPLAM_SURE} step="0.05" value={zaman}
            onChange={(olay) => zamanAyarla(olay.target.value)} aria-label="Animasyon zamanı"
          />
          <span>{zaman.toFixed(1)} / {TOPLAM_SURE} sn</span>
        </div>
      ) : null}
    </main>
  )
}
