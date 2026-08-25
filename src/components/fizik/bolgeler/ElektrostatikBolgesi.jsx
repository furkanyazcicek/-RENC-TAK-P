import { useCallback, useMemo, useRef, useState } from 'react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import {
  Anahtar, Kaydirici, ModulKabugu, Not, OlcumPanosu, SecimSeridi, VektorOku,
} from '../ortak/index.js'
import {
  alanCizgisi, coulombBuyuklugu, dokunmaylaPaylasim, elektrikAlan,
  elektroskopAcilmasi, elektronSayisi, etkiyleElektriklenme, toplamKuvvet,
} from '../../../lib/fizik/elektrik.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620
const SY = 400
/* Sahnede 1 piksel = 1 cm kabul edilir; yükler mikrocoulomb ölçeğindedir. */
const PIKSEL_METRE = 0.01

/* ═══════════ Deney 1: Yük Alanı ═══════════ */

function YukAlani() {
  const [yukler, setYukler] = useState([
    { id: 1, x: 220, y: 200, q: 2 },
    { id: 2, x: 400, y: 200, q: -2 },
  ])
  const [seciliId, setSeciliId] = useState(1)
  const [alanCizgisiGoster, setAlanCizgisiGoster] = useState(true)
  const [kuvvetGoster, setKuvvetGoster] = useState(true)
  const [alanIzgarasi, setAlanIzgarasi] = useState(false)

  const svgRef = useRef(null)
  const surukleId = useRef(null)

  const secili = yukler.find((y) => y.id === seciliId) ?? yukler[0]

  /** Fizik birimlerine çevrilmiş yükler (mikrocoulomb → coulomb, piksel → metre) */
  const fizikYukleri = useMemo(
    () => yukler.map((y) => ({ ...y, q: y.q * 1e-6, x: y.x * PIKSEL_METRE, y: y.y * PIKSEL_METRE })),
    [yukler],
  )

  const kuvvetler = useMemo(
    () => fizikYukleri.map((y) => ({ id: y.id, ...toplamKuvvet(y, fizikYukleri) })),
    [fizikYukleri],
  )

  /** Alan çizgileri: her pozitif yükten eşit açılarla çizgi başlatılır. */
  const cizgiler = useMemo(() => {
    if (!alanCizgisiGoster) return []
    const sonuc = []
    const sinirlar = { x0: -20, y0: -20, x1: SG + 20, y1: SY + 20 }
    for (const y of yukler) {
      const adet = Math.min(16, Math.max(6, Math.round(Math.abs(y.q) * 4)))
      for (let i = 0; i < adet; i += 1) {
        const ac = (2 * Math.PI * i) / adet
        const baslangic = { x: y.x + Math.cos(ac) * 14, y: y.y + Math.sin(ac) * 14 }
        // Pozitiften dışa, negatife içe doğru izlenir.
        const yon = y.q > 0 ? 1 : -1
        // Piksel uzayında hesap: ölçek çarpanı yönü değiştirmediği için
        // çizgi şekli doğru çıkar.
        const noktalar = alanCizgisi(
          baslangic,
          yukler.map((y2) => ({ x: y2.x, y: y2.y, q: y2.q })),
          yon,
          { adim: 5, maksAdim: 220, sinirlar },
        )
        if (noktalar.length > 2) sonuc.push({ noktalar, pozitif: y.q > 0 })
      }
    }
    return sonuc
  }, [yukler, alanCizgisiGoster])

  /** Alan ızgarası: düzenli noktalarda alan yönünü gösteren küçük oklar. */
  const izgaraOklari = useMemo(() => {
    if (!alanIzgarasi) return []
    const oklar = []
    for (let x = 40; x < SG; x += 52) {
      for (let y = 40; y < SY; y += 52) {
        const E = elektrikAlan({ x: x * PIKSEL_METRE, y: y * PIKSEL_METRE }, fizikYukleri)
        if (E.buyukluk < 1e-3) continue
        const boy = Math.min(22, 6 + Math.log10(E.buyukluk + 1) * 4)
        oklar.push({ x, y, dx: (E.x / E.buyukluk) * boy, dy: (E.y / E.buyukluk) * boy, siddet: E.buyukluk })
      }
    }
    return oklar
  }, [alanIzgarasi, fizikYukleri])

  const konumaCevir = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return null
    const kutu = svg.getBoundingClientRect()
    return {
      x: ((e.clientX - kutu.left) / kutu.width) * SG,
      y: ((e.clientY - kutu.top) / kutu.height) * SY,
    }
  }, [])

  const suruklerken = (e) => {
    if (surukleId.current === null) return
    const p = konumaCevir(e)
    if (!p) return
    setYukler((eski) => eski.map((y) => (y.id === surukleId.current
      ? { ...y, x: Math.max(24, Math.min(SG - 24, p.x)), y: Math.max(24, Math.min(SY - 24, p.y)) }
      : y)))
  }

  const yukEkle = (isaret) => {
    if (yukler.length >= 5) return
    const id = Date.now()
    setYukler((e) => [...e, { id, x: 120 + e.length * 70, y: 120, q: isaret * 2 }])
    setSeciliId(id)
  }
  const yukSil = (id) => {
    if (yukler.length <= 1) return
    setYukler((e) => e.filter((y) => y.id !== id))
    setSeciliId((s) => (s === id ? yukler[0].id : s))
  }

  const seciliKuvvet = kuvvetler.find((k) => k.id === seciliId)
  const ikiliUzaklik = yukler.length >= 2
    ? Math.hypot(yukler[0].x - yukler[1].x, yukler[0].y - yukler[1].y) * PIKSEL_METRE
    : null
  const ikiliKuvvet = ikiliUzaklik
    ? coulombBuyuklugu(yukler[0].q * 1e-6, yukler[1].q * 1e-6, ikiliUzaklik)
    : null

  return (
    <div className="fa-lab">
      <div>
        <div
          className="fa-sahne surukle"
          onPointerMove={suruklerken}
          onPointerUp={() => { surukleId.current = null }}
          onPointerCancel={() => { surukleId.current = null }}
        >
          <svg ref={svgRef} viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={`Elektrik alan sahnesi. ${yukler.length} yük var. Seçili yüke etkiyen net kuvvet ${sayiBicimle(seciliKuvvet?.buyukluk ?? 0, 3)} newton.`}>
            {/* Alan çizgileri */}
            {cizgiler.map((c, i) => (
              <polyline
                key={i}
                points={c.noktalar.map((n) => `${n.x},${n.y}`).join(' ')}
                fill="none"
                stroke={c.pozitif ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}
                strokeWidth="1.1" opacity="0.42"
              />
            ))}

            {/* Alan ızgarası */}
            {izgaraOklari.map((o, i) => (
              <VektorOku key={i} x1={o.x} y1={o.y} x2={o.x + o.dx} y2={o.y + o.dy}
                renk="rgb(var(--fa-olcum))" kalinlik={1.3} opaklik={0.55} />
            ))}

            {/* Kuvvet vektörleri */}
            {kuvvetGoster ? kuvvetler.map((k) => {
              const y = yukler.find((y2) => y2.id === k.id)
              if (!y || k.buyukluk < 1e-9) return null
              // Kuvvetler çok geniş bir aralıkta değiştiği için logaritmik ölçek.
              const boy = Math.min(90, 18 + Math.log10(k.buyukluk * 1e6 + 1) * 22)
              return (
                <VektorOku
                  key={k.id}
                  x1={y.x} y1={y.y}
                  x2={y.x + (k.x / k.buyukluk) * boy}
                  y2={y.y + (k.y / k.buyukluk) * boy}
                  renk="rgb(var(--fa-vektor))" kalinlik={2.6}
                  etiket={k.id === seciliId ? 'F' : null}
                />
              )
            }) : null}

            {/* Yükler */}
            {yukler.map((y) => {
              const r = 12 + Math.min(12, Math.abs(y.q) * 2.2)
              return (
                <g
                  key={y.id}
                  onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); surukleId.current = y.id; setSeciliId(y.id) }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${y.q > 0 ? 'Pozitif' : 'Negatif'} yük, ${sayiBicimle(Math.abs(y.q), 1)} mikrocoulomb. Ok tuşlarıyla taşı.`}
                  onKeyDown={(e) => {
                    const adim = e.shiftKey ? 20 : 6
                    const k = { ArrowLeft: [-adim, 0], ArrowRight: [adim, 0], ArrowUp: [0, -adim], ArrowDown: [0, adim] }[e.key]
                    if (!k) return
                    e.preventDefault()
                    setSeciliId(y.id)
                    setYukler((eski) => eski.map((y2) => (y2.id === y.id
                      ? { ...y2, x: Math.max(24, Math.min(SG - 24, y2.x + k[0])), y: Math.max(24, Math.min(SY - 24, y2.y + k[1])) }
                      : y2)))
                  }}
                  style={{ cursor: 'grab' }}
                >
                  <circle cx={y.x} cy={y.y} r={r}
                    fill={y.q > 0 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}
                    stroke={y.id === seciliId ? 'rgb(var(--fa-metin))' : 'rgb(var(--fa-yuzey))'}
                    strokeWidth={y.id === seciliId ? 3 : 2}
                  />
                  {/* İşaret sadece renkle değil, şekille de verilir */}
                  <line x1={y.x - r * 0.45} x2={y.x + r * 0.45} y1={y.y} y2={y.y} stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                  {y.q > 0 ? (
                    <line x1={y.x} x2={y.x} y1={y.y - r * 0.45} y2={y.y + r * 0.45} stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
                  ) : null}
                  <text x={y.x} y={y.y + r + 14} textAnchor="middle" fontSize="10.5" fontWeight="700"
                    fill={y.q > 0 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}>
                    {y.q > 0 ? '+' : ''}{sayiBicimle(y.q, 1)} µC
                  </text>
                </g>
              )
            })}
          </svg>

          <div className="fa-sahne-rozet">
            {ikiliKuvvet !== null ? (
              <>
                <span className="fa-rozet vektor">F = {sayiBicimle(ikiliKuvvet, 4)} N</span>
                <span className="fa-rozet olcum">r = {sayiBicimle(ikiliUzaklik * 100, 1)} cm</span>
                <span className={`fa-rozet ${yukler[0].q * yukler[1].q > 0 ? 'hata' : 'olumlu'}`}>
                  {yukler[0].q * yukler[1].q > 0 ? 'İtme' : 'Çekme'}
                </span>
              </>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik="Seçili yük"
            olcumler={[
              { ad: 'Yük', deger: secili?.q ?? 0, birim: 'µC', tur: 'notr', basamak: 2 },
              { ad: 'Elektron sayısı', deger: Math.abs(elektronSayisi((secili?.q ?? 0) * 1e-6)) / 1e12, birim: '×10¹²', tur: 'notr', basamak: 2 },
              { ad: 'Net kuvvet', deger: seciliKuvvet?.buyukluk ?? 0, birim: 'N', tur: 'vektor', vurgulu: true, basamak: 4 },
              { ad: 'Fₓ', deger: seciliKuvvet?.x ?? 0, birim: 'N', tur: 'vektor', basamak: 4 },
              { ad: 'F_y', deger: seciliKuvvet?.y ?? 0, birim: 'N', tur: 'vektor', basamak: 4 },
            ]}
          />
        </div>

        {ikiliUzaklik ? (
          <div className="fa-kart sade" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">Uzaklık değişirse kuvvet ne olur?</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Uzaklık</th><th style={{ textAlign: 'right' }}>Kuvvet (N)</th><th>Değişim</th></tr></thead>
                <tbody>
                  {[0.5, 1, 2, 3].map((kat) => {
                    const F = coulombBuyuklugu(yukler[0].q * 1e-6, yukler[1].q * 1e-6, ikiliUzaklik * kat)
                    return (
                      <tr key={kat} style={kat === 1 ? { background: 'rgb(var(--fa-vurgu) / 0.1)' } : undefined}>
                        <td>{kat === 1 ? 'Şu anki (r)' : `${kat}·r`}</td>
                        <td className="sayi">{sayiBicimle(F, 5)}</td>
                        <td style={{ color: 'rgb(var(--fa-metin-2))', fontSize: 12.5 }}>
                          {kat === 1 ? '—' : `${sayiBicimle(1 / (kat * kat), 3)} katı`}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
              Uzaklık 2 katına çıkınca kuvvet <strong>4’te bire</strong>, 3 katına çıkınca <strong>9’da bire</strong>
              {' '}iniyor. Bu, ters kare yasasıdır ve yer çekiminde de aynen geçerlidir.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Anahtar etiket="Alan çizgilerini göster" acik={alanCizgisiGoster} onChange={setAlanCizgisiGoster} />
          <Anahtar etiket="Kuvvet vektörlerini göster" acik={kuvvetGoster} onChange={setKuvvetGoster} />
          <Anahtar etiket="Alan yön ızgarası" acik={alanIzgarasi} onChange={setAlanIzgarasi}
            ipucu="Her noktadaki alan yönünü gösteren küçük oklar." />
        </div>

        <div className="fa-kart dar">
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
            {yukler.map((y) => (
              <button key={y.id} type="button"
                className={`fa-dugme kucuk ${seciliId === y.id ? 'secili' : ''}`}
                onClick={() => setSeciliId(y.id)}
                style={{ borderLeftWidth: 3, borderLeftColor: y.q > 0 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))' }}
              >
                {y.q > 0 ? '+' : '−'}{sayiBicimle(Math.abs(y.q), 1)}
              </button>
            ))}
          </div>
          {secili ? (
            <Kaydirici
              etiket="Yük miktarı"
              deger={secili.q}
              onChange={(v) => setYukler((e) => e.map((y) => (y.id === seciliId ? { ...y, q: v } : y)))}
              alt={-6} ust={6} adim={0.1} birim="µC" basamak={1}
              ipucu="Negatif değerde yük işaret değiştirir; alan çizgileri yönünü tersine çevirir."
            />
          ) : null}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <button type="button" className="fa-dugme kucuk" onClick={() => yukEkle(1)} disabled={yukler.length >= 5}>
              <Plus size={13} /> Pozitif ekle
            </button>
            <button type="button" className="fa-dugme kucuk" onClick={() => yukEkle(-1)} disabled={yukler.length >= 5}>
              <Minus size={13} /> Negatif ekle
            </button>
            <button type="button" className="fa-dugme kucuk" onClick={() => yukSil(seciliId)} disabled={yukler.length <= 1}>
              <Trash2 size={13} />
            </button>
          </div>
        </div>

        <Not tur="uyari" baslik="Alan çizgileri yörünge değildir">
          Çizgiler yalnızca <strong>o noktadaki kuvvetin yönünü</strong> gösterir. Hızla giren bir yük
          eylemsizliği nedeniyle çizgiyi takip etmez, ondan saparak farklı bir yol izler. Çizgiler bir
          harita gibidir; yol değil, yön bilgisi verirler. Ayrıca hiçbir zaman kesişmezler — kesişselerdi
          o noktada alanın iki farklı yönü olurdu.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Elektroskop ve Elektriklenme ═══════════ */

const YOLLAR = [
  { kod: 'surtunme', ad: 'Sürtünme' },
  { kod: 'dokunma', ad: 'Dokunma' },
  { kod: 'etki', ad: 'Etki (indüksiyon)' },
]

function Elektroskop() {
  const [yol, setYol] = useState('surtunme')
  const [cubukYuku, setCubukYuku] = useState(3)
  const [yakinlik, setYakinlik] = useState(0)
  const [topraklandi, setTopraklandi] = useState(false)
  const [elektroskopYuku, setElektroskopYuku] = useState(0)
  const [adim, setAdim] = useState(0)

  const yaklastirilan = yol === 'etki' || yol === 'dokunma' ? cubukYuku * yakinlik : 0
  const acilma = elektroskopAcilmasi({ netYuk: elektroskopYuku, yaklastirilanYuk: yaklastirilan })

  const etkiSonuc = etkiyleElektriklenme({ cubugunYuku: cubukYuku, topraklandi })

  const uygula = () => {
    if (yol === 'surtunme') {
      // Sürtünen iki cisim zıt işaretle yüklenir; toplam korunur.
      setElektroskopYuku(-cubukYuku)
      setAdim(1)
    } else if (yol === 'dokunma') {
      const paylasim = dokunmaylaPaylasim([cubukYuku, elektroskopYuku])
      setElektroskopYuku(paylasim.sonYukler[1])
      setAdim(1)
    } else {
      setElektroskopYuku(topraklandi ? -Math.sign(cubukYuku) * Math.abs(cubukYuku) * 0.7 : 0)
      setAdim(1)
    }
  }

  const sifirla = () => { setElektroskopYuku(0); setYakinlik(0); setTopraklandi(false); setAdim(0) }

  const EG = 560
  const EY = 380
  const merkez = EG / 2 + 40

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${EG} ${EY}`} role="img"
            aria-label={`Elektroskop. Yaprakların açılma açısı ${sayiBicimle(acilma.aciDerece, 0)} derece. Net yük ${sayiBicimle(elektroskopYuku, 1)} birim.`}>
            {/* Yüklü çubuk */}
            {yol !== 'surtunme' ? (
              <g transform={`translate(${merkez - 200 + yakinlik * 130} 60)`}>
                <rect x="0" y="0" width="120" height="20" rx="6"
                  fill={cubukYuku > 0 ? 'rgb(var(--fa-hata) / 0.4)' : 'rgb(var(--fa-vurgu) / 0.4)'}
                  stroke={cubukYuku > 0 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'} strokeWidth="1.8" />
                {Array.from({ length: Math.min(8, Math.abs(Math.round(cubukYuku)) * 2) }, (_, i) => (
                  <text key={i} x={12 + i * 14} y="15" fontSize="12" fontWeight="700" fill="#fff">
                    {cubukYuku > 0 ? '+' : '−'}
                  </text>
                ))}
                <text x="60" y="-8" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
                  {cubukYuku > 0 ? 'Pozitif' : 'Negatif'} çubuk
                </text>
              </g>
            ) : (
              <g transform={`translate(${merkez - 210} 50)`}>
                <rect x="0" y="0" width="80" height="30" rx="5" fill="rgb(var(--fa-mor) / 0.35)" stroke="rgb(var(--fa-mor))" strokeWidth="1.6" />
                <text x="40" y="20" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin))">Yün</text>
                <rect x="96" y="0" width="80" height="30" rx="5" fill="rgb(var(--fa-uyari) / 0.3)" stroke="rgb(var(--fa-uyari))" strokeWidth="1.6" />
                <text x="136" y="20" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin))">Ebonit</text>
                <text x="88" y="-8" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">Sürtünme</text>
                {adim >= 1 ? (
                  <>
                    <text x="40" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-hata))">+{sayiBicimle(cubukYuku, 1)}</text>
                    <text x="136" y="48" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-vurgu))">−{sayiBicimle(cubukYuku, 1)}</text>
                  </>
                ) : null}
              </g>
            )}

            {/* Elektroskop */}
            <g transform={`translate(${merkez} 0)`}>
              {/* Topuz */}
              <circle cx="0" cy="120" r="24" fill="rgb(var(--fa-cizgi-guclu))" stroke="rgb(var(--fa-metin-3))" strokeWidth="1.6" />
              {/* Çubuk */}
              <rect x="-4" y="140" width="8" height="70" fill="rgb(var(--fa-cizgi-guclu))" />
              {/* Şişe */}
              <path d="M -70 200 L 70 200 L 70 330 L -70 330 Z" fill="rgb(var(--fa-vurgu) / 0.05)" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <rect x="-34" y="188" width="68" height="16" rx="4" fill="rgb(var(--fa-cizgi-guclu))" />

              {/* Yapraklar */}
              {[-1, 1].map((yon) => (
                <line
                  key={yon}
                  x1="0" y1="212"
                  x2={yon * Math.sin((acilma.aciDerece * Math.PI) / 180) * 84}
                  y2={212 + Math.cos((acilma.aciDerece * Math.PI) / 180) * 84}
                  stroke={acilma.yapraktakiYuk > 0.05 ? 'rgb(var(--fa-hata))' : acilma.yapraktakiYuk < -0.05 ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-metin-3))'}
                  strokeWidth="5" strokeLinecap="round"
                />
              ))}

              {/* Yük işaretleri */}
              {Math.abs(acilma.yapraktakiYuk) > 0.1 ? [-1, 1].map((yon) => (
                <text key={`is${yon}`}
                  x={yon * Math.sin((acilma.aciDerece * Math.PI) / 180) * 96}
                  y={218 + Math.cos((acilma.aciDerece * Math.PI) / 180) * 90}
                  textAnchor="middle" fontSize="13" fontWeight="700"
                  fill={acilma.yapraktakiYuk > 0 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}>
                  {acilma.yapraktakiYuk > 0 ? '+' : '−'}
                </text>
              )) : null}

              {/* Topuzda ayrışan yük — etki durumunda */}
              {yol === 'etki' && yakinlik > 0.1 ? (
                <text x="0" y="126" textAnchor="middle" fontSize="13" fontWeight="700"
                  fill={cubukYuku > 0 ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-hata))'}>
                  {cubukYuku > 0 ? '−' : '+'}
                </text>
              ) : null}

              {/* Topraklama */}
              {topraklandi ? (
                <g>
                  <line x1="70" y1="270" x2="130" y2="270" stroke="rgb(var(--fa-olumlu))" strokeWidth="2.5" />
                  <line x1="130" y1="270" x2="130" y2="340" stroke="rgb(var(--fa-olumlu))" strokeWidth="2.5" />
                  {[0, 1, 2].map((i) => (
                    <line key={i} x1={130 - 16 + i * 5} x2={130 + 16 - i * 5} y1={340 + i * 7} y2={340 + i * 7}
                      stroke="rgb(var(--fa-olumlu))" strokeWidth="2.5" />
                  ))}
                  <text x="130" y="262" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-olumlu))">toprak</text>
                </g>
              ) : null}
            </g>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">Açılma: {sayiBicimle(acilma.aciDerece, 0)}°</span>
            <span className={`fa-rozet ${elektroskopYuku > 0.05 ? 'hata' : elektroskopYuku < -0.05 ? 'mavi' : ''}`}>
              Net yük: {elektroskopYuku > 0 ? '+' : ''}{sayiBicimle(elektroskopYuku, 2)}
            </span>
            {!acilma.isaretBelliMi && acilma.aciDerece > 2 ? (
              <span className="fa-rozet uyari">İşaret belirsiz</span>
            ) : null}
          </div>
        </div>

        <div className="fa-kontrol">
          <button type="button" className="fa-dugme birincil kucuk" onClick={uygula}>
            {yol === 'surtunme' ? 'Sürt ve dokundur' : yol === 'dokunma' ? 'Dokundur' : 'Uygula'}
          </button>
          <button type="button" className="fa-dugme kucuk" onClick={sifirla}>Sıfırla</button>
        </div>

        <div style={{ marginTop: 12 }}>
          <Not tur={adim >= 1 ? 'olumlu' : 'bilgi'} baslik={
            yol === 'surtunme' ? 'Sürtünme ile elektriklenme'
              : yol === 'dokunma' ? 'Dokunma ile elektriklenme'
                : 'Etki ile elektriklenme'
          }>
            {yol === 'surtunme' ? (
              <>
                İki cisim sürtününce elektronlar birinden diğerine geçer. Elektron <strong>kaybeden</strong> pozitif,
                <strong> kazanan</strong> negatif yüklenir. İki cismin yükleri <strong>zıt</strong> işaretlidir ve toplamları
                sıfırdır — yük üretilmedi, yalnızca yer değiştirdi. Bu, yükün korunumu ilkesidir.
              </>
            ) : yol === 'dokunma' ? (
              <>
                İletken cisimler dokununca yük aralarında paylaşılır ve ikisi de <strong>aynı</strong> işaretli olur.
                Özdeş cisimlerde paylaşım eşittir: toplam yük ikiye bölünür. Şu an elektroskopun yükü
                {' '}{sayiBicimle(elektroskopYuku, 2)}.
              </>
            ) : (
              <>
                {etkiSonuc.aciklama}
                {' '}Çubuk elektroskopa hiç yük <strong>vermez</strong>; yalnızca içindeki elektronları iter veya çeker.
                {!topraklandi ? ' Çubuğu uzaklaştırırsan yükler yeniden dağılır ve yapraklar kapanır.' : ''}
              </>
            )}
          </Not>
        </div>

        {yol === 'etki' && yakinlik > 0.1 && elektroskopYuku === 0 ? (
          <div style={{ marginTop: 10 }}>
            <Not tur="uyari" baslik="Yapraklar açık ama elektroskop yüksüz">
              Bu, elektroskopun en kritik dersi: yaprakların açılması <strong>tek başına</strong> yükün varlığını
              kanıtlamaz. Şu an net yük sıfır; yükler sadece ayrıştı. Yükün işaretini belirlemek için önce
              elektroskopu bilinen bir yükle yüklemek gerekir.
            </Not>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Elektriklenme yolu" deger={yol} onChange={(v) => { setYol(v); sifirla() }} secenekler={YOLLAR} />
          <Kaydirici etiket="Çubuğun yükü" deger={cubukYuku} onChange={setCubukYuku} alt={-5} ust={5} adim={0.5} birim="birim" basamak={1} />
          {yol !== 'surtunme' ? (
            <Kaydirici etiket="Çubuğun yakınlığı" deger={yakinlik} onChange={setYakinlik} alt={0} ust={1} adim={0.05} basamak={2}
              ipucu="0 = uzakta, 1 = topuza değecek kadar yakın" />
          ) : null}
          {yol === 'etki' ? (
            <Anahtar etiket="Topraklama teli bağlı" acik={topraklandi} onChange={setTopraklandi}
              ipucu="Topraklama, fazla elektronların kaçmasına veya gelmesine izin verir." />
          ) : null}
        </div>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Üç yolun karşılaştırması</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Yol</th><th>Sonuç yük</th><th>Yük aktarımı</th></tr></thead>
              <tbody>
                <tr><td>Sürtünme</td><td>Zıt işaretli</td><td>Var</td></tr>
                <tr><td>Dokunma</td><td>Aynı işaretli</td><td>Var</td></tr>
                <tr><td>Etki (topraksız)</td><td>Nötr kalır</td><td>Yok</td></tr>
                <tr><td>Etki + topraklama</td><td>Zıt işaretli</td><td>Toprakla var</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <Not tur="bilgi" baslik="Yalnızca elektronlar hareket eder">
          Katılarda protonlar çekirdekte sıkıca bağlıdır; hiçbir zaman yer değiştirmez. Bir cismin
          <strong> pozitif yüklenmesi</strong>, ona proton eklenmesi değil, <strong>elektron kaybetmesi</strong>
          {' '}demektir. Bu yüzden bütün elektriklenme olayları elektron alışverişiyle açıklanır.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'yuk-alani', ad: 'Yük Alanı', Bilesen: YukAlani },
  { kod: 'elektroskop', ad: 'Elektroskop', Bilesen: Elektroskop },
]

export default function ElektrostatikBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="elektrostatik" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
