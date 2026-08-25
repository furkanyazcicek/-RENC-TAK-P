import { useCallback, useMemo, useState } from 'react'
import {
  Battery, CircleDot, Gauge, Lightbulb, Minus, RotateCcw, SlidersHorizontal,
  Trash2, ToggleLeft, Zap,
} from 'lucide-react'
import {
  Anahtar, Kaydirici, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
} from '../ortak/index.js'
import {
  AMPUL_TIPLERI, devreCoz, elektrikEnerjisi, paralelEsdeger, seriEsdeger,
} from '../../../lib/fizik/devre.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/* ————— Tahta (breadboard) düzeni —————
   Öğrenci serbestçe kablo çizmek yerine ızgara düğümleri arasına eleman
   yerleştirir. Bu, gerçek bir devre kurma deneyimi verirken bağlantı
   belirsizliğini ortadan kaldırır: hangi ucun nereye bağlı olduğu her
   zaman kesindir. */
const SATIR = 3
const SUTUN = 5
const HUCRE = 108
const KENAR = 56
const TG = KENAR * 2 + (SUTUN - 1) * HUCRE
const TY = KENAR * 2 + (SATIR - 1) * HUCRE

const dugumAdi = (s, k) => `d${s}-${k}`
const dugumKonumu = (ad) => {
  const [, s, k] = ad.match(/^d(\d+)-(\d+)$/).map(Number)
  return { x: KENAR + k * HUCRE, y: KENAR + s * HUCRE, satir: s, sutun: k }
}
const komsuMu = (a, b) => {
  const p = dugumKonumu(a)
  const q = dugumKonumu(b)
  return (Math.abs(p.satir - q.satir) === 1 && p.sutun === q.sutun)
    || (Math.abs(p.sutun - q.sutun) === 1 && p.satir === q.satir)
}

const PALET = [
  { tur: 'pil', ad: 'Pil', Ikon: Battery, varsayilan: { emk: 12, icDirenc: 0 } },
  { tur: 'direnc', ad: 'Direnç', Ikon: Minus, varsayilan: { direnc: 10 } },
  { tur: 'ampul', ad: 'Ampul', Ikon: Lightbulb, varsayilan: { direnc: 12, tip: 'orta' } },
  { tur: 'anahtar', ad: 'Anahtar', Ikon: ToggleLeft, varsayilan: { kapali: true } },
  { tur: 'kablo', ad: 'Kablo', Ikon: CircleDot, varsayilan: {} },
  { tur: 'reosta', ad: 'Reosta', Ikon: SlidersHorizontal, varsayilan: { direnc: 20 } },
  { tur: 'ampermetre', ad: 'Ampermetre', Ikon: Gauge, varsayilan: {} },
  { tur: 'voltmetre', ad: 'Voltmetre', Ikon: Zap, varsayilan: {} },
]

let sayac = 1
const yeniId = () => `e${sayac++}`

/** Hazır devreler — öğrenci sıfırdan başlamak zorunda kalmasın. */
const HAZIR_DEVRELER = {
  seri: {
    ad: 'Seri devre (2 ampul)',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'ampul', a: 'd0-0', b: 'd0-1', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd0-2', direnc: 12, tip: 'orta', etiket: 'L2' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd1-2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  paralel: {
    ad: 'Paralel devre (2 ampul)',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'kablo', a: 'd0-0', b: 'd0-1' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd1-1', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-1', b: 'd0-2' },
      { id: yeniId(), tur: 'ampul', a: 'd0-2', b: 'd1-2', direnc: 12, tip: 'orta', etiket: 'L2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-1', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  karisik: {
    ad: 'Karışık devre',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'direnc', a: 'd0-0', b: 'd0-1', direnc: 4, etiket: 'R1' },
      { id: yeniId(), tur: 'direnc', a: 'd0-1', b: 'd1-1', direnc: 12, etiket: 'R2' },
      { id: yeniId(), tur: 'kablo', a: 'd0-1', b: 'd0-2' },
      { id: yeniId(), tur: 'direnc', a: 'd0-2', b: 'd1-2', direnc: 6, etiket: 'R3' },
      { id: yeniId(), tur: 'kablo', a: 'd1-1', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  olcum: {
    ad: 'Ölçü aletleriyle',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'ampermetre', a: 'd0-0', b: 'd0-1', etiket: 'A' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd0-2', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'voltmetre', a: 'd0-1', b: 'd0-2', etiket: 'V' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd1-2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
}

/* ═══════════ Eleman çizimi ═══════════ */

function ElemanCizimi({ eleman, sonuc, secili, onSec }) {
  const p = dugumKonumu(eleman.a)
  const q = dugumKonumu(eleman.b)
  const ortaX = (p.x + q.x) / 2
  const ortaY = (p.y + q.y) / 2
  const yatay = p.satir === q.satir
  const aci = yatay ? 0 : 90
  const akim = sonuc?.akim ?? 0
  const cizgiRengi = secili ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-cizgi-guclu))'

  const govde = () => {
    switch (eleman.tur) {
      case 'pil':
        return (
          <g>
            <line x1="-30" y1="0" x2="-9" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            <line x1="9" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            {/* Uzun çizgi + kutup, kısa çizgi − kutup */}
            <line x1="-9" y1="-16" x2="-9" y2="16" stroke="rgb(var(--fa-hata))" strokeWidth="3" />
            <line x1="0" y1="-8" x2="0" y2="8" stroke="rgb(var(--fa-metin-3))" strokeWidth="3" />
            <line x1="9" y1="-16" x2="9" y2="16" stroke="rgb(var(--fa-hata))" strokeWidth="3" />
            <text x="-16" y={yatay ? -22 : -22} fontSize="13" fontWeight="700" fill="rgb(var(--fa-hata))">−</text>
            <text x="14" y={yatay ? -22 : -22} fontSize="13" fontWeight="700" fill="rgb(var(--fa-hata))">+</text>
          </g>
        )
      case 'direnc':
      case 'reosta':
        return (
          <g>
            <line x1="-30" y1="0" x2="-18" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            <rect x="-18" y="-9" width="36" height="18" rx="2"
              fill={eleman.tur === 'reosta' ? 'rgb(var(--fa-mor) / 0.3)' : 'rgb(var(--fa-yuzey-3))'}
              stroke={cizgiRengi} strokeWidth="2" />
            <line x1="18" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            {eleman.tur === 'reosta' ? (
              <>
                <line x1="-14" y1="-20" x2="14" y2="-20" stroke="rgb(var(--fa-mor))" strokeWidth="2" />
                <line x1="6" y1="-20" x2="6" y2="-9" stroke="rgb(var(--fa-mor))" strokeWidth="2" markerEnd="" />
              </>
            ) : null}
          </g>
        )
      case 'ampul': {
        const parlaklik = sonuc?.parlaklik ?? 0
        const yandi = sonuc?.yanmisMi
        return (
          <g>
            <line x1="-30" y1="0" x2="-15" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            {parlaklik > 0.03 && !yandi ? (
              <circle cx="0" cy="0" r={15 + parlaklik * 16} fill="rgb(var(--fa-enerji))" opacity={parlaklik * 0.35} />
            ) : null}
            <circle cx="0" cy="0" r="15"
              fill={yandi ? 'rgb(var(--fa-hata) / 0.3)' : `rgb(var(--fa-enerji) / ${0.12 + parlaklik * 0.8})`}
              stroke={yandi ? 'rgb(var(--fa-hata))' : cizgiRengi} strokeWidth="2" />
            <path d="M -7 -7 L 0 4 L 7 -7" fill="none"
              stroke={yandi ? 'rgb(var(--fa-hata))' : parlaklik > 0.25 ? '#3b2a00' : 'rgb(var(--fa-metin-3))'} strokeWidth="2" />
            {yandi ? <line x1="-9" y1="9" x2="9" y2="-9" stroke="rgb(var(--fa-hata))" strokeWidth="2.5" /> : null}
            <line x1="15" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
          </g>
        )
      }
      case 'anahtar':
        return (
          <g>
            <line x1="-30" y1="0" x2="-14" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            <circle cx="-14" cy="0" r="3.5" fill={cizgiRengi} />
            <line x1="-14" y1="0" x2={eleman.kapali ? 14 : 10} y2={eleman.kapali ? 0 : -16}
              stroke={eleman.kapali ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-hata))'} strokeWidth="3" strokeLinecap="round" />
            <circle cx="14" cy="0" r="3.5" fill={cizgiRengi} />
            <line x1="14" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
          </g>
        )
      case 'kablo':
        return <line x1="-30" y1="0" x2="30" y2="0" stroke={secili ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-olumlu))'} strokeWidth="3" strokeLinecap="round" />
      case 'ampermetre':
        return (
          <g>
            <line x1="-30" y1="0" x2="-16" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
            <circle cx="0" cy="0" r="16" fill="rgb(var(--fa-olcum) / 0.15)" stroke="rgb(var(--fa-olcum))" strokeWidth="2" />
            <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="rgb(var(--fa-olcum))">A</text>
            <line x1="16" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2.5" />
          </g>
        )
      case 'voltmetre':
        return (
          <g>
            <line x1="-30" y1="0" x2="-16" y2="0" stroke={cizgiRengi} strokeWidth="2" strokeDasharray="3 3" />
            <circle cx="0" cy="0" r="16" fill="rgb(var(--fa-mor) / 0.15)" stroke="rgb(var(--fa-mor))" strokeWidth="2" />
            <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="rgb(var(--fa-mor))">V</text>
            <line x1="16" y1="0" x2="30" y2="0" stroke={cizgiRengi} strokeWidth="2" strokeDasharray="3 3" />
          </g>
        )
      default:
        return null
    }
  }

  const etiketMetni = () => {
    if (eleman.tur === 'pil') return `${sayiBicimle(eleman.emk, 0)} V`
    if (eleman.tur === 'direnc' || eleman.tur === 'reosta') return `${sayiBicimle(eleman.direnc, 1)} Ω`
    if (eleman.tur === 'ampul') return `${sayiBicimle(eleman.direnc, 0)} Ω`
    if (eleman.tur === 'anahtar') return eleman.kapali ? 'kapalı' : 'açık'
    if (eleman.tur === 'ampermetre') return `${sayiBicimle(Math.abs(akim), 2)} A`
    if (eleman.tur === 'voltmetre') return `${sayiBicimle(Math.abs(sonuc?.gerilim ?? 0), 2)} V`
    return ''
  }

  return (
    <g
      transform={`translate(${ortaX} ${ortaY}) rotate(${aci})`}
      onClick={(e) => { e.stopPropagation(); onSec(eleman.id) }}
      style={{ cursor: 'pointer' }}
      tabIndex={0}
      role="button"
      aria-label={`${eleman.etiket ?? eleman.tur} — ${etiketMetni()}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onSec(eleman.id) } }}
    >
      {secili ? <rect x="-34" y="-24" width="68" height="48" rx="8" fill="rgb(var(--fa-vurgu) / 0.14)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.5" /> : null}
      {govde()}
      <g transform={`rotate(${-aci})`}>
        <text x="0" y={yatay ? 34 : 0} dx={yatay ? 0 : 40} textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-metin-2))">
          {eleman.etiket ? `${eleman.etiket} · ` : ''}{etiketMetni()}
        </text>
        {Math.abs(akim) > 1e-6 && eleman.tur !== 'voltmetre' && eleman.tur !== 'kablo' ? (
          <text x="0" y={yatay ? 48 : 14} dx={yatay ? 0 : 40} textAnchor="middle" fontSize="10" fill="rgb(var(--fa-olcum))">
            {sayiBicimle(Math.abs(akim), 2)} A
          </text>
        ) : null}
      </g>
    </g>
  )
}

/* ═══════════ Deney 1: Devre Tezgâhı ═══════════ */

function DevreTezgahi({ baslangicDevresi = 'seri', kilitli = false, gorevMetni = null }) {
  const [elemanlar, setElemanlar] = useState(() => HAZIR_DEVRELER[baslangicDevresi].elemanlar())
  const [seciliTur, setSeciliTur] = useState('direnc')
  const [bekleyenDugum, setBekleyenDugum] = useState(null)
  const [seciliEleman, setSeciliEleman] = useState(null)
  const [akimYonu, setAkimYonu] = useState('geleneksel')
  const [surekliCalisma, setSurekliCalisma] = useState(2)

  const cozum = useMemo(() => devreCoz({ elemanlar }), [elemanlar])
  const sonucHaritasi = useMemo(
    () => Object.fromEntries(cozum.elemanlar.map((e) => [e.id, e])),
    [cozum],
  )

  const dugumTikla = useCallback((ad) => {
    if (kilitli) return
    if (bekleyenDugum === null) { setBekleyenDugum(ad); return }
    if (bekleyenDugum === ad) { setBekleyenDugum(null); return }
    if (!komsuMu(bekleyenDugum, ad)) { setBekleyenDugum(ad); return }

    const sablon = PALET.find((p) => p.tur === seciliTur)
    const etiketSayisi = elemanlar.filter((e) => e.tur === seciliTur).length + 1
    const onEk = { pil: 'Pil', direnc: 'R', ampul: 'L', anahtar: 'S', reosta: 'Rh', ampermetre: 'A', voltmetre: 'V', kablo: '' }[seciliTur]
    setElemanlar((e) => [...e, {
      id: yeniId(), tur: seciliTur, a: bekleyenDugum, b: ad,
      ...sablon.varsayilan,
      etiket: onEk ? `${onEk}${onEk === 'Pil' ? '' : etiketSayisi}` : undefined,
    }])
    setBekleyenDugum(null)
  }, [bekleyenDugum, seciliTur, elemanlar, kilitli])

  const elemanGuncelle = (id, degisiklik) => {
    setElemanlar((e) => e.map((x) => (x.id === id ? { ...x, ...degisiklik } : x)))
  }
  const elemanSil = (id) => {
    setElemanlar((e) => e.filter((x) => x.id !== id))
    setSeciliEleman(null)
  }

  const secili = elemanlar.find((e) => e.id === seciliEleman)
  const seciliSonuc = secili ? sonucHaritasi[secili.id] : null

  const pil = cozum.elemanlar.find((e) => e.tur === 'pil')
  const ampuller = cozum.elemanlar.filter((e) => e.tur === 'ampul')

  return (
    <div className="fa-lab">
      <div>
        {gorevMetni ? (
          <div style={{ marginBottom: 12 }}>
            <Not tur="bilgi" baslik="Görev">{gorevMetni}</Not>
          </div>
        ) : null}

        <div className="fa-sahne">
          <svg viewBox={`0 0 ${TG} ${TY}`} role="img"
            aria-label={`Devre tahtası. ${elemanlar.length} eleman var. ${cozum.uyarilar.length > 0 ? cozum.uyarilar[0].baslik : `Toplam akım ${sayiBicimle(cozum.toplamAkim, 2)} amper.`}`}
            onClick={() => { setSeciliEleman(null); setBekleyenDugum(null) }}
          >
            {/* Izgara noktaları */}
            {Array.from({ length: SATIR }, (_, s) => Array.from({ length: SUTUN }, (_, k) => {
              const ad = dugumAdi(s, k)
              const p = dugumKonumu(ad)
              const bekliyor = bekleyenDugum === ad
              const secilebilir = bekleyenDugum !== null && komsuMu(bekleyenDugum, ad)
              return (
                <g
                  key={ad}
                  onClick={(e) => { e.stopPropagation(); dugumTikla(ad) }}
                  style={{ cursor: kilitli ? 'default' : 'pointer' }}
                  tabIndex={kilitli ? -1 : 0}
                  role="button"
                  aria-label={`Bağlantı noktası ${s + 1}-${k + 1}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); dugumTikla(ad) } }}
                >
                  <circle cx={p.x} cy={p.y} r="16" fill="transparent" />
                  {secilebilir ? <circle cx={p.x} cy={p.y} r="12" fill="rgb(var(--fa-olumlu) / 0.25)" stroke="rgb(var(--fa-olumlu))" strokeWidth="1.5" /> : null}
                  <circle cx={p.x} cy={p.y} r={bekliyor ? 8 : 5.5}
                    fill={bekliyor ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-cizgi-guclu))'}
                    stroke={bekliyor ? 'rgb(var(--fa-metin))' : 'none'} strokeWidth="2" />
                </g>
              )
            }))}

            {/* Elemanlar */}
            {elemanlar.map((e) => (
              <ElemanCizimi
                key={e.id}
                eleman={e}
                sonuc={sonucHaritasi[e.id]}
                secili={seciliEleman === e.id}
                onSec={setSeciliEleman}
              />
            ))}

            {/* Akım yönü göstergesi — hareketli noktalar */}
            {cozum.basarili && !cozum.kisaDevre ? elemanlar.map((e) => {
              const s = sonucHaritasi[e.id]
              const akim = s?.akim
              if (!akim || Math.abs(akim) < 1e-6 || e.tur === 'voltmetre') return null
              const p = dugumKonumu(e.a)
              const q = dugumKonumu(e.b)
              // Geleneksel akım artıdan eksiye; elektron hareketi tersi.
              const ters = akimYonu === 'elektron' ? -1 : 1
              const yon = Math.sign(akim) * ters
              const nokta = 3
              return Array.from({ length: nokta }, (_, i) => {
                const oran = (i + 0.5) / nokta
                const bx = p.x + (q.x - p.x) * oran
                const by = p.y + (q.y - p.y) * oran
                return (
                  <circle key={`${e.id}-${i}`} cx={bx} cy={by} r="3.5"
                    fill={akimYonu === 'elektron' ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-olcum))'} opacity="0.85">
                    <animate
                      attributeName="opacity"
                      values={yon > 0 ? '0.2;1;0.2' : '1;0.2;1'}
                      dur={`${Math.max(0.4, 1.6 / (Math.abs(akim) + 0.4))}s`}
                      begin={`${i * 0.2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                )
              })
            }) : null}
          </svg>

          <div className="fa-sahne-rozet">
            {cozum.esdegerDirenc !== null && Number.isFinite(cozum.esdegerDirenc) ? (
              <span className="fa-rozet olcum">R_eş = {sayiBicimle(cozum.esdegerDirenc, 2)} Ω</span>
            ) : null}
            <span className="fa-rozet mavi">I = {sayiBicimle(cozum.toplamAkim, 3)} A</span>
            <span className="fa-rozet enerji">P = {sayiBicimle(cozum.toplamGuc, 2)} W</span>
            {akimYonu === 'elektron' ? <span className="fa-rozet">Elektron hareket yönü</span> : <span className="fa-rozet">Geleneksel akım yönü</span>}
          </div>
        </div>

        {/* Uyarılar: yanlış bağlantıda nedeni açıklanır */}
        {cozum.uyarilar.length > 0 ? (
          <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
            {cozum.uyarilar.map((u, i) => (
              <Not key={i} tur={u.tur === 'kisaDevre' || u.tur === 'ampulYandi' ? 'hata' : 'uyari'} baslik={u.baslik}>
                {u.mesaj}
              </Not>
            ))}
          </div>
        ) : null}

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik="Devre özeti"
            olcumler={[
              { ad: 'Eşdeğer direnç', deger: cozum.esdegerDirenc !== null && Number.isFinite(cozum.esdegerDirenc) ? cozum.esdegerDirenc : '∞', birim: 'Ω', vurgulu: true },
              { ad: 'Ana kol akımı', deger: cozum.toplamAkim, birim: 'A', basamak: 3 },
              { ad: 'Üreteç gerilimi', deger: Math.abs(pil?.gerilim ?? 0), birim: 'V', tur: 'notr' },
              { ad: 'Toplam güç', deger: cozum.toplamGuc, birim: 'W', tur: 'enerji' },
              { ad: `${sayiBicimle(surekliCalisma, 0)} saatte enerji`, deger: elektrikEnerjisi(cozum.toplamGuc, surekliCalisma * 3600) / 3.6e6, birim: 'kWh', tur: 'enerji', basamak: 4 },
            ]}
          />
        </div>

        {/* Eleman tablosu */}
        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Eleman eleman ölçümler</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead>
                <tr><th>Eleman</th><th>Tür</th><th style={{ textAlign: 'right' }}>Gerilim (V)</th><th style={{ textAlign: 'right' }}>Akım (A)</th><th style={{ textAlign: 'right' }}>Güç (W)</th></tr>
              </thead>
              <tbody>
                {cozum.elemanlar.filter((e) => e.tur !== 'kablo').map((e) => (
                  <tr key={e.id}
                    onClick={() => setSeciliEleman(e.id)}
                    style={{ cursor: 'pointer', background: seciliEleman === e.id ? 'rgb(var(--fa-vurgu) / 0.12)' : undefined }}
                  >
                    <td style={{ fontWeight: 650 }}>{e.etiket ?? e.id}</td>
                    <td style={{ color: 'rgb(var(--fa-metin-2))' }}>
                      {{ pil: 'Pil', direnc: 'Direnç', ampul: 'Ampul', anahtar: 'Anahtar', reosta: 'Reosta', ampermetre: 'Ampermetre', voltmetre: 'Voltmetre' }[e.tur]}
                    </td>
                    <td className="sayi">{sayiBicimle(Math.abs(e.gerilim ?? 0), 2)}</td>
                    <td className="sayi">{e.akim === null ? '—' : sayiBicimle(Math.abs(e.akim), 3)}</td>
                    <td className="sayi">{e.guc === null ? '—' : sayiBicimle(e.guc, 2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ampul parlaklık karşılaştırması */}
        {ampuller.length > 0 ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">Ampul parlaklıkları</div>
            <div style={{ display: 'grid', gap: 8 }}>
              {ampuller.map((a) => (
                <div key={a.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, marginBottom: 3 }}>
                    <span>{a.etiket ?? a.id}</span>
                    <span style={{ color: 'rgb(var(--fa-enerji))', fontWeight: 700 }}>
                      {sayiBicimle(a.guc ?? 0, 2)} W · anma {sayiBicimle(a.anmaGucu, 1)} W
                    </span>
                  </div>
                  <div className="fa-ilerleme-yol">
                    <div className="fa-ilerleme-dolu"
                      style={{
                        width: `${Math.min(100, (a.parlaklik ?? 0) * 100)}%`,
                        background: a.yanmisMi ? 'rgb(var(--fa-hata))' : 'linear-gradient(90deg, rgb(var(--fa-uyari)), rgb(var(--fa-enerji)))',
                      }} />
                  </div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 10 }}>
              Parlaklığı belirleyen gerilim veya akım değil, <strong>güçtür</strong> (P = V·I). Seri bağlı
              ampuller gerilimi paylaştığı için sönük; paralel bağlıysa her biri tam gerilimi gördüğü için parlak yanar.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        {!kilitli ? (
          <div className="fa-kart dar">
            <div className="fa-ust-etiket">Eleman paleti</div>
            <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginBottom: 8 }}>
              Bir eleman seç, sonra tahtada <strong>komşu iki noktaya</strong> sırayla tıkla.
            </p>
            <div className="fa-palet">
              {PALET.map((p) => {
                const Ikon = p.Ikon
                return (
                  <button
                    key={p.tur}
                    type="button"
                    className={`fa-palet-oge ${seciliTur === p.tur ? 'secili' : ''}`}
                    onClick={() => setSeciliTur(p.tur)}
                    aria-pressed={seciliTur === p.tur}
                  >
                    <Ikon size={17} />
                    {p.ad}
                  </button>
                )
              })}
            </div>
          </div>
        ) : null}

        {secili ? (
          <div className="fa-kart dar" style={{ borderColor: 'rgb(var(--fa-vurgu) / 0.4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong style={{ fontSize: 13.5 }}>{secili.etiket ?? secili.tur}</strong>
              {!kilitli ? (
                <button type="button" className="fa-dugme sade kucuk" onClick={() => elemanSil(secili.id)} aria-label="Elemanı sil">
                  <Trash2 size={14} />
                </button>
              ) : null}
            </div>

            {secili.tur === 'pil' ? (
              <>
                <Kaydirici etiket="EMK (gerilim)" deger={secili.emk} onChange={(v) => elemanGuncelle(secili.id, { emk: v })}
                  alt={1} ust={48} adim={0.5} birim="V" basamak={1} />
                <Kaydirici etiket="İç direnç" deger={secili.icDirenc ?? 0} onChange={(v) => elemanGuncelle(secili.id, { icDirenc: v })}
                  alt={0} ust={10} adim={0.1} birim="Ω" basamak={1}
                  ipucu="0 = ideal üreteç (müfredat varsayımı). Artırırsan uçlar gerilimi EMK'dan düşük olur." />
              </>
            ) : null}

            {(secili.tur === 'direnc' || secili.tur === 'reosta') ? (
              <Kaydirici etiket="Direnç" deger={secili.direnc} onChange={(v) => elemanGuncelle(secili.id, { direnc: v })}
                alt={secili.tur === 'reosta' ? 0 : 0.5} ust={100} adim={0.5} birim="Ω" basamak={1}
                ipucu={secili.tur === 'reosta' ? 'Reostayı sıfıra indirince devredeki direnci kalkar.' : null} />
            ) : null}

            {secili.tur === 'ampul' ? (
              <>
                <SecimSeridi
                  etiket="Ampul tipi"
                  deger={secili.tip ?? 'orta'}
                  onChange={(t) => elemanGuncelle(secili.id, { tip: t, direnc: AMPUL_TIPLERI[t].direnc })}
                  secenekler={Object.entries(AMPUL_TIPLERI).map(([kod, a]) => ({ kod, ad: a.ad.replace(' ampul', '') }))}
                />
                <Kaydirici etiket="Direnç" deger={secili.direnc} onChange={(v) => elemanGuncelle(secili.id, { direnc: v })}
                  alt={1} ust={60} adim={1} birim="Ω" basamak={0} />
                <div style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))' }}>
                  Anma gücü: {AMPUL_TIPLERI[secili.tip ?? 'orta'].anmaGucu} W · Anma gerilimi: {AMPUL_TIPLERI[secili.tip ?? 'orta'].anmaGerilimi} V
                </div>
              </>
            ) : null}

            {secili.tur === 'anahtar' ? (
              <Anahtar etiket="Anahtar kapalı" acik={secili.kapali} onChange={(v) => elemanGuncelle(secili.id, { kapali: v })}
                ipucu="Açık anahtar devreyi keser: hiçbir yerden akım geçmez." />
            ) : null}

            {seciliSonuc ? (
              <div className="fa-olcum-izgara" style={{ marginTop: 10 }}>
                <div className="fa-olcum-kart">
                  <div className="fa-olcum-ad">Gerilim</div>
                  <div className="fa-olcum-deger">{sayiBicimle(Math.abs(seciliSonuc.gerilim ?? 0), 2)}<span className="fa-olcum-birim">V</span></div>
                </div>
                <div className="fa-olcum-kart">
                  <div className="fa-olcum-ad">Akım</div>
                  <div className="fa-olcum-deger">{seciliSonuc.akim === null ? '—' : sayiBicimle(Math.abs(seciliSonuc.akim), 3)}<span className="fa-olcum-birim">A</span></div>
                </div>
              </div>
            ) : null}
          </div>
        ) : (
          <div className="fa-kart dar">
            <p style={{ fontSize: 13, color: 'rgb(var(--fa-metin-3))' }}>
              Değerini değiştirmek istediğin elemana tıkla.
            </p>
          </div>
        )}

        <div className="fa-kart dar">
          <SecimSeridi
            etiket="Akım gösterimi"
            deger={akimYonu} onChange={setAkimYonu}
            secenekler={[
              { kod: 'geleneksel', ad: 'Geleneksel akım' },
              { kod: 'elektron', ad: 'Elektron hareketi' },
            ]}
          />
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: -4, marginBottom: 10 }}>
            Geleneksel akım artı kutuptan eksiye doğru kabul edilir. Gerçekte hareket eden elektronlar
            ters yönde ilerler ve <strong>çok yavaştır</strong> (saatte birkaç cm). Anında yayılan şey akım
            değil, elektrik alanıdır.
          </p>
          <Kaydirici etiket="Çalışma süresi (enerji hesabı)" deger={surekliCalisma} onChange={setSurekliCalisma}
            alt={0.5} ust={24} adim={0.5} birim="saat" basamak={1} />
        </div>

        {!kilitli ? (
          <div className="fa-kart dar">
            <div className="fa-ust-etiket">Hazır devreler</div>
            <div style={{ display: 'grid', gap: 6 }}>
              {Object.entries(HAZIR_DEVRELER).map(([kod, d]) => (
                <button key={kod} type="button" className="fa-dugme kucuk" style={{ justifyContent: 'flex-start' }}
                  onClick={() => { setElemanlar(d.elemanlar()); setSeciliEleman(null); setBekleyenDugum(null) }}>
                  {d.ad}
                </button>
              ))}
              <button type="button" className="fa-dugme kucuk" style={{ justifyContent: 'flex-start' }}
                onClick={() => { setElemanlar([]); setSeciliEleman(null); setBekleyenDugum(null) }}>
                <Trash2 size={14} /> Tahtayı boşalt
              </button>
            </div>
          </div>
        ) : null}

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Eşdeğer direnç kontrolü</div>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.7 }}>
            Seri: R = R₁+R₂ → örn. {seriEsdeger([6, 3])} Ω<br />
            Paralel: 1/R = 1/R₁+1/R₂ → örn. {sayiBicimle(paralelEsdeger([6, 3]), 2)} Ω
          </div>
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            Paralel sonuç en küçük dirençten bile küçüktür — yeni bir yol açmak geçişi kolaylaştırır.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Arızayı Bul ═══════════ */

const ARIZALAR = [
  {
    kod: 'anahtar-acik',
    baslik: 'Ampul hiç yanmıyor',
    ipucu: 'Akımın geçebileceği kapalı bir yol var mı?',
    cevap: 'Anahtar açık. Açık anahtar devreyi keser; hiçbir yerden akım geçmez. Anahtarı kapatınca ampul yanar.',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'anahtar', a: 'd0-0', b: 'd0-1', kapali: false, etiket: 'S1' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd0-2', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd1-2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  {
    kod: 'kisa-devre',
    baslik: 'Ampul sönük ama pil ısınıyor',
    ipucu: 'Akım için ampulden geçmeyen, dirençsiz bir kestirme yol var mı?',
    cevap: 'Ampulün iki ucu bir kabloyla köprülenmiş (kısa devre). Akım dirençsiz yolu tercih ettiği için ampulden geçmez. Kestirme kabloyu kaldır.',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0.5, etiket: 'Pil' },
      { id: yeniId(), tur: 'ampul', a: 'd0-0', b: 'd0-1', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-0', b: 'd1-0' },
      { id: yeniId(), tur: 'kablo', a: 'd1-0', b: 'd1-1' },
      { id: yeniId(), tur: 'kablo', a: 'd1-1', b: 'd0-1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-1', b: 'd0-2' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd1-2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  {
    kod: 'voltmetre-seri',
    baslik: 'Ölçü aleti bağlandı, devre öldü',
    ipucu: 'Voltmetrenin direnci çok büyüktür. Akımın geçtiği yola konursa ne olur?',
    cevap: 'Voltmetre seri bağlanmış. Direnci çok büyük olduğu için akımı keser. Voltmetre, gerilimini ölçmek istediğin elemana PARALEL bağlanmalıdır.',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0, etiket: 'Pil' },
      { id: yeniId(), tur: 'voltmetre', a: 'd0-0', b: 'd0-1', etiket: 'V1' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd0-2', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd1-2' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
  {
    kod: 'ampermetre-paralel',
    baslik: 'Ampermetre bağlanınca ampul söndü',
    ipucu: 'İdeal ampermetrenin direnci sıfırdır. Bir elemana paralel bağlanırsa ne olur?',
    cevap: 'Ampermetre ampule paralel bağlanmış ve onu kısa devre etmiş. Akım tamamen dirençsiz ampermetreden geçiyor. Ampermetre daima SERİ bağlanır.',
    elemanlar: () => [
      { id: yeniId(), tur: 'pil', a: 'd2-0', b: 'd0-0', emk: 12, icDirenc: 0.5, etiket: 'Pil' },
      { id: yeniId(), tur: 'direnc', a: 'd0-0', b: 'd0-1', direnc: 6, etiket: 'R1' },
      { id: yeniId(), tur: 'ampul', a: 'd0-1', b: 'd0-2', direnc: 12, tip: 'orta', etiket: 'L1' },
      { id: yeniId(), tur: 'kablo', a: 'd0-1', b: 'd1-1' },
      { id: yeniId(), tur: 'ampermetre', a: 'd1-1', b: 'd1-2', etiket: 'A1' },
      { id: yeniId(), tur: 'kablo', a: 'd1-2', b: 'd0-2' },
      { id: yeniId(), tur: 'kablo', a: 'd0-2', b: 'd0-3' },
      { id: yeniId(), tur: 'kablo', a: 'd0-3', b: 'd1-3' },
      { id: yeniId(), tur: 'kablo', a: 'd1-3', b: 'd2-3' },
      { id: yeniId(), tur: 'kablo', a: 'd2-3', b: 'd2-2' },
      { id: yeniId(), tur: 'kablo', a: 'd2-2', b: 'd2-1' },
      { id: yeniId(), tur: 'kablo', a: 'd2-1', b: 'd2-0' },
    ],
  },
]

function ArizaBul() {
  const [indeks, setIndeks] = useState(0)
  const [cevapGoster, setCevapGoster] = useState(false)
  const [elemanlar, setElemanlar] = useState(() => ARIZALAR[0].elemanlar())

  const ariza = ARIZALAR[indeks]
  const cozum = useMemo(() => devreCoz({ elemanlar }), [elemanlar])
  const sonucHaritasi = useMemo(() => Object.fromEntries(cozum.elemanlar.map((e) => [e.id, e])), [cozum])

  const ampul = cozum.elemanlar.find((e) => e.tur === 'ampul')
  const onarildi = (ampul?.parlaklik ?? 0) > 0.2 && !cozum.kisaDevre && cozum.uyarilar.length === 0

  const gecis = (yeni) => {
    setIndeks(yeni)
    setElemanlar(ARIZALAR[yeni].elemanlar())
    setCevapGoster(false)
  }

  const elemanSil = (id) => setElemanlar((e) => e.filter((x) => x.id !== id))
  const anahtarCevir = (id) => setElemanlar((e) => e.map((x) => (x.id === id ? { ...x, kapali: !x.kapali } : x)))

  return (
    <div className="fa-lab">
      <div>
        <div style={{ marginBottom: 12 }}>
          <Not tur={onarildi ? 'olumlu' : 'uyari'} baslik={onarildi ? 'Devre onarıldı' : ariza.baslik}>
            {onarildi
              ? `Ampul şimdi ${sayiBicimle((ampul?.guc ?? 0), 2)} W güçle yanıyor. Sorunu buldun.`
              : `${ariza.ipucu} Hatalı elemana tıklayıp kaldır ya da anahtarı çevir.`}
          </Not>
        </div>

        <div className="fa-sahne">
          <svg viewBox={`0 0 ${TG} ${TY}`} role="img" aria-label={`Arızalı devre: ${ariza.baslik}`}>
            {Array.from({ length: SATIR }, (_, s) => Array.from({ length: SUTUN }, (_, k) => {
              const p = dugumKonumu(dugumAdi(s, k))
              return <circle key={`${s}-${k}`} cx={p.x} cy={p.y} r="5" fill="rgb(var(--fa-cizgi-guclu))" />
            }))}
            {elemanlar.map((e) => (
              <ElemanCizimi
                key={e.id}
                eleman={e}
                sonuc={sonucHaritasi[e.id]}
                secili={false}
                onSec={() => { if (e.tur === 'anahtar') anahtarCevir(e.id); else if (e.tur !== 'pil' && e.tur !== 'ampul') elemanSil(e.id) }}
              />
            ))}
          </svg>
          <div className="fa-sahne-rozet">
            <span className="fa-rozet mavi">I = {sayiBicimle(cozum.toplamAkim, 3)} A</span>
            <span className={`fa-rozet ${onarildi ? 'olumlu' : 'hata'}`}>
              Ampul: {sayiBicimle((ampul?.guc ?? 0), 2)} W
            </span>
          </div>
        </div>

        {cozum.uyarilar.length > 0 ? (
          <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
            {cozum.uyarilar.map((u, i) => (
              <Not key={i} tur={u.tur === 'kisaDevre' ? 'hata' : 'uyari'} baslik={u.baslik}>{u.mesaj}</Not>
            ))}
          </div>
        ) : null}

        <div className="fa-kontrol">
          <button type="button" className="fa-dugme kucuk" onClick={() => { setElemanlar(ariza.elemanlar()); setCevapGoster(false) }}>
            <RotateCcw size={14} /> Devreyi ilk hâline al
          </button>
          <button type="button" className="fa-dugme kucuk" onClick={() => setCevapGoster(true)} disabled={cevapGoster}>
            Çözümü göster
          </button>
        </div>

        {cevapGoster ? (
          <div style={{ marginTop: 12 }}>
            <Not tur="bilgi" baslik="Arızanın nedeni">{ariza.cevap}</Not>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Arıza vakaları</div>
          <div style={{ display: 'grid', gap: 6 }}>
            {ARIZALAR.map((a, i) => (
              <button key={a.kod} type="button"
                className={`fa-dugme kucuk ${indeks === i ? 'secili' : ''}`}
                style={{ justifyContent: 'flex-start', textAlign: 'left' }}
                onClick={() => gecis(i)}>
                {i + 1}. {a.baslik}
              </button>
            ))}
          </div>
        </div>

        <Not tur="bilgi" baslik="Nasıl onarılır?">
          Fazla kablo veya yanlış bağlanmış ölçü aletine tıklayınca devreden çıkar. Anahtara tıklarsan
          açılıp kapanır. Pil ve ampul çıkarılamaz — hata onlarda değil.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'devre-tezgahi', ad: 'Devre Tezgâhı', Bilesen: DevreTezgahi },
  { kod: 'ariza-bul', ad: 'Arızayı Bul', Bilesen: ArizaBul },
]

export default function DevreBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="devreler" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
