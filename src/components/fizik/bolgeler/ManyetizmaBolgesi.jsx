import { useCallback, useMemo, useRef, useState } from 'react'
import { Check, X } from 'lucide-react'
import {
  Anahtar, Grafik, Kaydirici, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
  SimKontrol, VektorOku, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  bobinAlani, halkaMerkezAlani, indüksiyonEmk, manyetikAki, miknatisAlani,
  pusulaYonu, sagElKurali, telAlanVektoru, teleEtkiyenKuvvet, telinAlani, toplamAlan,
} from '../../../lib/fizik/manyetizma.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620
const SY = 400

/* ═══════════ Deney 1: Manyetik Alan Tezgâhı ═══════════ */

function AlanTezgahi() {
  const [mod, setMod] = useState('miknatis')
  const [miknatislar, setMiknatislar] = useState([
    { id: 1, x: 220, y: 200, aciDerece: 0, guc: 2600, uzunluk: 90 },
  ])
  const [teller, setTeller] = useState([{ id: 1, telX: 310, telY: 200, akim: 20 }])
  const [pusulalar, setPusulalar] = useState([
    { id: 1, x: 400, y: 150 }, { id: 2, x: 400, y: 250 }, { id: 3, x: 150, y: 130 },
  ])
  const [alanCizgisiGoster, setAlanCizgisiGoster] = useState(true)
  const [dunyaAlani, setDunyaAlani] = useState(false)
  const [seciliMiknatis, setSeciliMiknatis] = useState(1)
  const [bobinSarim, setBobinSarim] = useState(200)
  const [bobinAkim, setBobinAkim] = useState(2)
  const [bobinUzunluk, setBobinUzunluk] = useState(0.2)

  const svgRef = useRef(null)
  const surukle = useRef(null)

  /** Bir noktadaki toplam alan — modun kaynaklarına göre. */
  const alanHesapla = useCallback((nokta) => {
    if (mod === 'miknatis') return miknatisAlani(miknatislar, nokta)
    return toplamAlan(teller, nokta)
  }, [mod, miknatislar, teller])

  /** Alan çizgileri: mıknatısta kutuplardan, telde eş merkezli çemberler. */
  const cizgiler = useMemo(() => {
    if (!alanCizgisiGoster) return []
    if (mod === 'tel') {
      // Düz telin alanı tel çevresinde çemberdir; doğrudan çember çizilir.
      return teller.flatMap((t) => [24, 46, 72, 104, 142].map((r) => ({
        tur: 'cember', cx: t.telX, cy: t.telY, r, yon: Math.sign(t.akim),
      })))
    }
    const sonuc = []
    for (const m of miknatislar) {
      const yari = m.uzunluk / 2
      const ac = (m.aciDerece * Math.PI) / 180
      const kuzey = { x: m.x + yari * Math.cos(ac), y: m.y + yari * Math.sin(ac) }
      for (let i = 0; i < 12; i += 1) {
        const baslangicAci = (2 * Math.PI * i) / 12
        let p = { x: kuzey.x + Math.cos(baslangicAci) * 12, y: kuzey.y + Math.sin(baslangicAci) * 12 }
        const noktalar = [{ ...p }]
        for (let adim = 0; adim < 200; adim += 1) {
          const B = miknatisAlani(miknatislar, p)
          if (B.buyukluk < 1e-9) break
          p = { x: p.x + (B.x / B.buyukluk) * 5, y: p.y + (B.y / B.buyukluk) * 5 }
          noktalar.push({ ...p })
          if (p.x < -30 || p.x > SG + 30 || p.y < -30 || p.y > SY + 30) break
          // Güney kutbuna vardıysa dur.
          const guney = { x: m.x - yari * Math.cos(ac), y: m.y - yari * Math.sin(ac) }
          if (Math.hypot(p.x - guney.x, p.y - guney.y) < 9) break
        }
        if (noktalar.length > 3) sonuc.push({ tur: 'egri', noktalar })
      }
    }
    return sonuc
  }, [alanCizgisiGoster, mod, miknatislar, teller])

  const konumaCevir = (e) => {
    const svg = svgRef.current
    if (!svg) return null
    const kutu = svg.getBoundingClientRect()
    return {
      x: ((e.clientX - kutu.left) / kutu.width) * SG,
      y: ((e.clientY - kutu.top) / kutu.height) * SY,
    }
  }

  const suruklerken = (e) => {
    if (!surukle.current) return
    const p = konumaCevir(e)
    if (!p) return
    const { tur, id } = surukle.current
    const x = Math.max(30, Math.min(SG - 30, p.x))
    const y = Math.max(30, Math.min(SY - 30, p.y))
    if (tur === 'miknatis') setMiknatislar((eski) => eski.map((m) => (m.id === id ? { ...m, x, y } : m)))
    else if (tur === 'tel') setTeller((eski) => eski.map((t) => (t.id === id ? { ...t, telX: x, telY: y } : t)))
    else setPusulalar((eski) => eski.map((c) => (c.id === id ? { ...c, x, y } : c)))
  }

  const secili = miknatislar.find((m) => m.id === seciliMiknatis) ?? miknatislar[0]
  const bobin = bobinAlani({ sarimSayisi: bobinSarim, uzunluk: bobinUzunluk, akim: bobinAkim })

  const telUzaklikVerisi = useMemo(() => Array.from({ length: 50 }, (_, i) => {
    const r = 0.005 + i * 0.004
    return { x: r * 100, y: (telinAlani(teller[0]?.akim ?? 1, r) ?? 0) * 1e6 }
  }), [teller])

  return (
    <div className="fa-lab">
      <div>
        <div
          className="fa-sahne surukle"
          onPointerMove={suruklerken}
          onPointerUp={() => { surukle.current = null }}
          onPointerCancel={() => { surukle.current = null }}
        >
          <svg ref={svgRef} viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={mod === 'miknatis' ? 'Mıknatıs alan haritası. Pusulaları sürükleyerek alan yönünü okuyabilirsin.' : 'Akım geçen telin manyetik alanı.'}>
            {/* Alan çizgileri */}
            {cizgiler.map((c, i) => (c.tur === 'cember' ? (
              <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="none"
                stroke="rgb(var(--fa-vurgu))" strokeWidth="1.2" opacity="0.4" />
            ) : (
              <polyline key={i} points={c.noktalar.map((n) => `${n.x},${n.y}`).join(' ')}
                fill="none" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.1" opacity="0.4" />
            )))}

            {mod === 'miknatis' ? miknatislar.map((m) => {
              const yari = m.uzunluk / 2
              const ac = (m.aciDerece * Math.PI) / 180
              const kx = m.x + yari * Math.cos(ac)
              const ky = m.y + yari * Math.sin(ac)
              const gx = m.x - yari * Math.cos(ac)
              const gy = m.y - yari * Math.sin(ac)
              return (
                <g key={m.id}
                  onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); surukle.current = { tur: 'miknatis', id: m.id }; setSeciliMiknatis(m.id) }}
                  style={{ cursor: 'grab' }}
                  tabIndex={0} role="button" aria-label="Çubuk mıknatıs. Ok tuşlarıyla taşı."
                  onKeyDown={(e) => {
                    const k = { ArrowLeft: [-8, 0], ArrowRight: [8, 0], ArrowUp: [0, -8], ArrowDown: [0, 8] }[e.key]
                    if (!k) return
                    e.preventDefault()
                    setMiknatislar((eski) => eski.map((m2) => (m2.id === m.id ? { ...m2, x: m2.x + k[0], y: m2.y + k[1] } : m2)))
                  }}
                >
                  <g transform={`translate(${m.x} ${m.y}) rotate(${-m.aciDerece})`}>
                    <rect x={-yari} y="-17" width={yari} height="34" rx="3" fill="rgb(var(--fa-vurgu))" opacity="0.85" />
                    <rect x="0" y="-17" width={yari} height="34" rx="3" fill="rgb(var(--fa-hata))" opacity="0.85" />
                    <text x={-yari / 2} y="6" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">G</text>
                    <text x={yari / 2} y="6" textAnchor="middle" fontSize="15" fontWeight="800" fill="#fff">K</text>
                    {seciliMiknatis === m.id ? (
                      <rect x={-yari - 4} y="-21" width={m.uzunluk + 8} height="42" rx="5" fill="none" stroke="rgb(var(--fa-metin))" strokeWidth="1.6" strokeDasharray="4 3" />
                    ) : null}
                  </g>
                  <circle cx={kx} cy={ky} r="3" fill="rgb(var(--fa-hata))" opacity="0" />
                  <circle cx={gx} cy={gy} r="3" fill="rgb(var(--fa-vurgu))" opacity="0" />
                </g>
              )
            }) : teller.map((t) => (
              <g key={t.id}
                onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); surukle.current = { tur: 'tel', id: t.id } }}
                style={{ cursor: 'grab' }}
                tabIndex={0} role="button" aria-label={`Akım geçen tel. Akım ${sayiBicimle(t.akim, 0)} amper.`}
              >
                {/* Tel ekrana dik: akım dışarıysa nokta, içeriyse çarpı */}
                <circle cx={t.telX} cy={t.telY} r="15" fill="rgb(var(--fa-yuzey-3))" stroke="rgb(var(--fa-olcum))" strokeWidth="2.5" />
                {t.akim >= 0 ? (
                  <circle cx={t.telX} cy={t.telY} r="5" fill="rgb(var(--fa-olcum))" />
                ) : (
                  <>
                    <line x1={t.telX - 8} y1={t.telY - 8} x2={t.telX + 8} y2={t.telY + 8} stroke="rgb(var(--fa-olcum))" strokeWidth="3" />
                    <line x1={t.telX - 8} y1={t.telY + 8} x2={t.telX + 8} y2={t.telY - 8} stroke="rgb(var(--fa-olcum))" strokeWidth="3" />
                  </>
                )}
                <text x={t.telX} y={t.telY + 32} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-olcum))" fontWeight="700">
                  I = {sayiBicimle(Math.abs(t.akim), 0)} A {t.akim >= 0 ? '(dışarı)' : '(içeri)'}
                </text>
              </g>
            ))}

            {/* Pusulalar */}
            {pusulalar.map((c) => {
              const B = alanHesapla({ x: c.x, y: c.y })
              const yon = mod === 'tel'
                ? Math.atan2(B.y, B.x) * 180 / Math.PI
                : pusulaYonu(B, dunyaAlani ? { x: 0, y: -1, buyukluk: 1 } : { x: 0, y: 0, buyukluk: 0 })
              const gercekYon = mod === 'tel' ? yon : yon
              return (
                <g key={c.id}
                  onPointerDown={(e) => { e.currentTarget.setPointerCapture?.(e.pointerId); surukle.current = { tur: 'pusula', id: c.id } }}
                  style={{ cursor: 'grab' }}
                  tabIndex={0} role="button" aria-label={`Pusula. Gösterdiği yön ${sayiBicimle(gercekYon, 0)} derece.`}
                >
                  <circle cx={c.x} cy={c.y} r="16" fill="rgb(var(--fa-yuzey))" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.6" opacity="0.95" />
                  <g transform={`translate(${c.x} ${c.y}) rotate(${gercekYon})`}>
                    <polygon points="13,0 -4,-5 -4,5" fill="rgb(var(--fa-hata))" />
                    <polygon points="-13,0 -4,-5 -4,5" fill="rgb(var(--fa-metin-3))" />
                  </g>
                  <circle cx={c.x} cy={c.y} r="2" fill="rgb(var(--fa-metin))" />
                </g>
              )
            })}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet mavi">
              {mod === 'miknatis' ? 'Alan çizgileri K → G (dışarıda)' : 'Alan tel etrafında çember çizer'}
            </span>
            {mod === 'tel' ? (
              <span className="fa-rozet olcum">
                10 cm'de B = {sayiBicimle((telinAlani(Math.abs(teller[0]?.akim ?? 0), 0.1) ?? 0) * 1e6, 2)} µT
              </span>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          {mod === 'tel' ? (
            <OlcumPanosu olcumler={[
              { ad: 'Akım', deger: Math.abs(teller[0]?.akim ?? 0), birim: 'A', tur: 'notr' },
              { ad: 'B (1 cm)', deger: (telinAlani(Math.abs(teller[0]?.akim ?? 0), 0.01) ?? 0) * 1e6, birim: 'µT', vurgulu: true },
              { ad: 'B (5 cm)', deger: (telinAlani(Math.abs(teller[0]?.akim ?? 0), 0.05) ?? 0) * 1e6, birim: 'µT' },
              { ad: 'B (10 cm)', deger: (telinAlani(Math.abs(teller[0]?.akim ?? 0), 0.1) ?? 0) * 1e6, birim: 'µT' },
            ]} />
          ) : (
            <OlcumPanosu olcumler={[
              { ad: 'Mıknatıs sayısı', deger: miknatislar.length, tur: 'notr', basamak: 0 },
              { ad: 'Pusula sayısı', deger: pusulalar.length, tur: 'notr', basamak: 0 },
              { ad: 'Mıknatıs açısı', deger: secili?.aciDerece ?? 0, birim: '°', tur: 'notr', basamak: 0 },
              { ad: 'Bobin alanı', deger: (bobin?.alan ?? 0) * 1000, birim: 'mT', vurgulu: true, basamak: 3 },
            ]} />
          )}
        </div>

        {mod === 'tel' ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <Grafik
              baslik="Telden uzaklığa göre manyetik alan"
              xEtiket="Uzaklık (cm)" yEtiket="B (µT)"
              seriler={[{ ad: 'B = μ₀I/(2πr)', renk: 'rgb(var(--fa-olcum))', birim: 'µT', veri: telUzaklikVerisi }]}
              yukseklik={175}
            />
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
              Alan uzaklıkla <strong>1/r</strong> olarak azalır — ters kare değil. Nokta kaynaklar (yük, kütle)
              ters kareyle azalır ama tel bir <strong>çizgi kaynağıdır</strong>; bu yüzden azalma daha yavaştır.
            </p>
          </div>
        ) : null}

        {/* Elektromıknatıs karşılaştırması */}
        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Elektromıknatıs: sarım ve akım</div>
          <div className="fa-izgara iki">
            <div>
              <Kaydirici etiket="Sarım sayısı" deger={bobinSarim} onChange={setBobinSarim} alt={10} ust={1000} adim={10} basamak={0} />
              <Kaydirici etiket="Akım" deger={bobinAkim} onChange={setBobinAkim} alt={0} ust={10} adim={0.1} birim="A" basamak={1} />
              <Kaydirici etiket="Bobin uzunluğu" deger={bobinUzunluk} onChange={setBobinUzunluk} alt={0.05} ust={0.6} adim={0.01} birim="m" basamak={2} />
            </div>
            <div>
              <div className="fa-olcum-izgara">
                <div className="fa-olcum-kart vurgulu">
                  <div className="fa-olcum-ad">Bobin içi alan</div>
                  <div className="fa-olcum-deger">{sayiBicimle((bobin?.alan ?? 0) * 1000, 3)}<span className="fa-olcum-birim">mT</span></div>
                </div>
                <div className="fa-olcum-kart">
                  <div className="fa-olcum-ad">Sarım yoğunluğu</div>
                  <div className="fa-olcum-deger">{sayiBicimle(bobin?.sarimYogunlugu ?? 0, 0)}<span className="fa-olcum-birim">1/m</span></div>
                </div>
                <div className="fa-olcum-kart">
                  <div className="fa-olcum-ad">Halka merkezi (r = 5 cm)</div>
                  <div className="fa-olcum-deger">{sayiBicimle((halkaMerkezAlani(bobinAkim, 0.05) ?? 0) * 1e6, 1)}<span className="fa-olcum-birim">µT</span></div>
                </div>
              </div>
              <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 10 }}>
                B = μ₀·n·I. Sarımı iki katına çıkarmakla akımı iki katına çıkarmak <strong>aynı</strong> sonucu verir.
                Ama akımı artırmak teli ısıtır ve daha çok enerji harcar; sarım artırmak bedavaya yakındır.
                Elektromıknatısın en büyük üstünlüğü ise <strong>kapatılabilmesidir</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Alan kaynağı" deger={mod} onChange={setMod}
            secenekler={[{ kod: 'miknatis', ad: 'Çubuk mıknatıs' }, { kod: 'tel', ad: 'Akım geçen tel' }]} />
          <Anahtar etiket="Alan çizgilerini göster" acik={alanCizgisiGoster} onChange={setAlanCizgisiGoster} />
          {mod === 'miknatis' ? (
            <>
              <Anahtar etiket="Dünya'nın manyetik alanı" acik={dunyaAlani} onChange={setDunyaAlani}
                ipucu="Açıkken pusulalar mıknatıs yokken kuzeyi gösterir." />
              <Kaydirici etiket="Mıknatıs açısı" deger={secili?.aciDerece ?? 0}
                onChange={(v) => setMiknatislar((e) => e.map((m) => (m.id === seciliMiknatis ? { ...m, aciDerece: v } : m)))}
                alt={0} ust={360} adim={5} birim="°" basamak={0} />
              <Kaydirici etiket="Mıknatıs gücü" deger={secili?.guc ?? 0}
                onChange={(v) => setMiknatislar((e) => e.map((m) => (m.id === seciliMiknatis ? { ...m, guc: v } : m)))}
                alt={500} ust={6000} adim={100} basamak={0} />
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                <button type="button" className="fa-dugme kucuk"
                  onClick={() => {
                    if (miknatislar.length >= 3) return
                    const id = Date.now()
                    setMiknatislar((e) => [...e, { id, x: 400, y: 260, aciDerece: 180, guc: 2600, uzunluk: 90 }])
                    setSeciliMiknatis(id)
                  }}
                  disabled={miknatislar.length >= 3}
                >
                  Mıknatıs ekle
                </button>
                <button type="button" className="fa-dugme kucuk"
                  onClick={() => setMiknatislar((e) => (e.length > 1 ? e.filter((m) => m.id !== seciliMiknatis) : e))}
                  disabled={miknatislar.length <= 1}
                >
                  Sil
                </button>
              </div>
            </>
          ) : (
            <>
              <Kaydirici etiket="Telden geçen akım" deger={teller[0]?.akim ?? 0}
                onChange={(v) => setTeller((e) => e.map((t, i) => (i === 0 ? { ...t, akim: v } : t)))}
                alt={-40} ust={40} adim={1} birim="A" basamak={0}
                ipucu="Negatif değer akım yönünü tersine çevirir; alan da ters yöne dolanır." />
              <button type="button" className="fa-dugme kucuk"
                onClick={() => setTeller((e) => (e.length < 2
                  ? [...e, { id: Date.now(), telX: 420, telY: 200, akim: -20 }]
                  : e.slice(0, 1)))}
              >
                {teller.length < 2 ? 'İkinci tel ekle' : 'İkinci teli kaldır'}
              </button>
            </>
          )}
          <button type="button" className="fa-dugme kucuk" style={{ marginTop: 8 }}
            onClick={() => setPusulalar((e) => [...e, { id: Date.now(), x: 300 + e.length * 20, y: 320 }])}>
            Pusula ekle
          </button>
        </div>

        <Not tur="uyari" baslik="Alan çizgileri ip değildir">
          Uzayın her noktasında bir alan <strong>vektörü</strong> vardır; çizgiler bu vektörlerin teğet
          eğrileridir. Demir tozları çizgi gibi dizilir ama bu, tozların alan yönünde hizalanmasıdır —
          ortada fiziksel bir ip yoktur. Çizgiler asla kesişmez; kesişselerdi o noktada alanın iki farklı
          yönü olurdu.
        </Not>

        {mod === 'miknatis' ? (
          <Not tur="bilgi" baslik="Tek kutup neden yok?">
            Mıknatısı ikiye bölersen iki kutuplu iki küçük mıknatıs elde edersin. Manyetizmanın kaynağı
            yüklerin hareketidir; kutuplar, ayrılabilen yükler gibi değildir. Bugüne kadar tek kutuplu
            (monopol) bir mıknatıs bulunamamıştır.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Sağ El Kuralı ═══════════ */

const YON_ADLARI = {
  sag: 'Sağa', sol: 'Sola', yukari: 'Yukarı', asagi: 'Aşağı',
  disari: 'Ekrandan dışarı', iceri: 'Ekrana doğru içeri', yok: 'Kuvvet oluşmaz',
}

function SagElKurali() {
  const [akimYonu, setAkimYonu] = useState('sag')
  const [alanYonu, setAlanYonu] = useState('disari')
  const [tahmin, setTahmin] = useState(null)
  const [alanSiddeti, setAlanSiddeti] = useState(0.5)
  const [akimSiddeti, setAkimSiddeti] = useState(4)
  const [telUzunlugu, setTelUzunlugu] = useState(0.3)
  const [aciDerece, setAciDerece] = useState(90)

  const sonuc = sagElKurali(akimYonu, alanYonu)
  const kuvvet = teleEtkiyenKuvvet({ alan: alanSiddeti, akim: akimSiddeti, uzunluk: telUzunlugu, aciDerece })
  const dogruMu = tahmin !== null && tahmin === sonuc?.yon

  const YONLER = ['sag', 'sol', 'yukari', 'asagi', 'disari', 'iceri']

  const okCiz = (yon, renk, etiket, merkez) => {
    const harita = {
      sag: [70, 0], sol: [-70, 0], yukari: [0, -70], asagi: [0, 70],
    }
    if (yon === 'disari') {
      return (
        <g>
          <circle cx={merkez.x} cy={merkez.y} r="22" fill="none" stroke={renk} strokeWidth="3" />
          <circle cx={merkez.x} cy={merkez.y} r="7" fill={renk} />
          <text x={merkez.x} y={merkez.y + 44} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={renk}>{etiket} (dışarı)</text>
        </g>
      )
    }
    if (yon === 'iceri') {
      return (
        <g>
          <circle cx={merkez.x} cy={merkez.y} r="22" fill="none" stroke={renk} strokeWidth="3" />
          <line x1={merkez.x - 15} y1={merkez.y - 15} x2={merkez.x + 15} y2={merkez.y + 15} stroke={renk} strokeWidth="4" />
          <line x1={merkez.x - 15} y1={merkez.y + 15} x2={merkez.x + 15} y2={merkez.y - 15} stroke={renk} strokeWidth="4" />
          <text x={merkez.x} y={merkez.y + 44} textAnchor="middle" fontSize="11.5" fontWeight="700" fill={renk}>{etiket} (içeri)</text>
        </g>
      )
    }
    const d = harita[yon]
    if (!d) return null
    return <VektorOku x1={merkez.x} y1={merkez.y} x2={merkez.x + d[0]} y2={merkez.y + d[1]} renk={renk} kalinlik={3.4} etiket={etiket} />
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 340`} role="img"
            aria-label={`Sağ el kuralı. Akım ${YON_ADLARI[akimYonu]}, alan ${YON_ADLARI[alanYonu]}. Kuvvet ${YON_ADLARI[sonuc?.yon ?? 'yok']}.`}>
            <text x="120" y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-olcum))">AKIM (I)</text>
            <text x={SG / 2} y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-vurgu))">ALAN (B)</text>
            <text x={SG - 120} y="34" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-vektor))">KUVVET (F)</text>

            {okCiz(akimYonu, 'rgb(var(--fa-olcum))', 'I', { x: 120, y: 160 })}
            {okCiz(alanYonu, 'rgb(var(--fa-vurgu))', 'B', { x: SG / 2, y: 160 })}
            {tahmin !== null ? okCiz(sonuc?.yon, 'rgb(var(--fa-vektor))', 'F', { x: SG - 120, y: 160 }) : (
              <text x={SG - 120} y="166" textAnchor="middle" fontSize="13" fill="rgb(var(--fa-metin-3))">?</text>
            )}

            <line x1="215" x2="245" y1="160" y2="160" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="230" y="150" textAnchor="middle" fontSize="14" fill="rgb(var(--fa-metin-3))">×</text>
            <line x1={SG - 245} x2={SG - 215} y1="160" y2="160" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x={SG - 230} y="150" textAnchor="middle" fontSize="14" fill="rgb(var(--fa-metin-3))">=</text>

            <text x={SG / 2} y="318" textAnchor="middle" fontSize="11.5" fill="rgb(var(--fa-metin-2))">
              F = B·I·L·sinθ · Kuvvet hem akıma hem alana DİKTİR
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">F = {sayiBicimle(kuvvet, 4)} N</span>
            {sonuc?.paralel ? <span className="fa-rozet uyari">Akım ile alan aynı doğrultuda: kuvvet yok</span> : null}
          </div>
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Önce tahmin et: kuvvet hangi yönde?</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {[...YONLER, 'yok'].map((y) => {
              const secildi = tahmin === y
              const dogru = tahmin !== null && y === sonuc?.yon
              const yanlis = secildi && y !== sonuc?.yon
              return (
                <button
                  key={y}
                  type="button"
                  className={`fa-dugme kucuk ${dogru ? 'secili' : ''}`}
                  style={yanlis ? { borderColor: 'rgb(var(--fa-hata))', color: 'rgb(var(--fa-hata))' } : undefined}
                  onClick={() => setTahmin(y)}
                  disabled={tahmin !== null}
                >
                  {YON_ADLARI[y]}
                  {dogru ? <Check size={13} /> : null}
                  {yanlis ? <X size={13} /> : null}
                </button>
              )
            })}
          </div>

          {tahmin !== null ? (
            <div style={{ marginTop: 12 }}>
              <Not tur={dogruMu ? 'olumlu' : 'uyari'} baslik={dogruMu ? 'Doğru' : `Doğru cevap: ${YON_ADLARI[sonuc?.yon ?? 'yok']}`}>
                {sonuc?.aciklama}
              </Not>
              <button type="button" className="fa-dugme kucuk" style={{ marginTop: 8 }} onClick={() => setTahmin(null)}>
                Yeniden dene
              </button>
            </div>
          ) : (
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
              Sağ elini kullan: parmakların akım yönünde, avuç içi alan yönüne baksın. Başparmağın kuvveti gösterir.
            </p>
          )}
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Manyetik alan B', deger: alanSiddeti, birim: 'T', tur: 'notr' },
              { ad: 'Akım I', deger: akimSiddeti, birim: 'A', tur: 'notr' },
              { ad: 'Tel uzunluğu L', deger: telUzunlugu, birim: 'm', tur: 'notr' },
              { ad: 'Açı θ', deger: aciDerece, birim: '°', tur: 'notr', basamak: 0 },
              { ad: 'Kuvvet F', deger: kuvvet, birim: 'N', vurgulu: true, basamak: 4 },
            ]}
          />
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Akım yönü" deger={akimYonu} onChange={(v) => { setAkimYonu(v); setTahmin(null) }}
            secenekler={YONLER.map((y) => ({ kod: y, ad: YON_ADLARI[y] }))} />
          <SecimSeridi etiket="Alan yönü" deger={alanYonu} onChange={(v) => { setAlanYonu(v); setTahmin(null) }}
            secenekler={YONLER.map((y) => ({ kod: y, ad: YON_ADLARI[y] }))} />
        </div>

        <div className="fa-kart dar">
          <Kaydirici etiket="Alan şiddeti B" deger={alanSiddeti} onChange={setAlanSiddeti} alt={0} ust={2} adim={0.05} birim="T" basamak={2} />
          <Kaydirici etiket="Akım I" deger={akimSiddeti} onChange={setAkimSiddeti} alt={0} ust={20} adim={0.5} birim="A" basamak={1} />
          <Kaydirici etiket="Tel uzunluğu L" deger={telUzunlugu} onChange={setTelUzunlugu} alt={0.05} ust={2} adim={0.05} birim="m" basamak={2} />
          <Kaydirici etiket="Akım–alan açısı θ" deger={aciDerece} onChange={setAciDerece} alt={0} ust={180} adim={5} birim="°" basamak={0}
            ipucu="0° veya 180°'de sinθ = 0 → kuvvet sıfırdır." />
        </div>

        <Not tur="bilgi" baslik="Elektrik motoru bu kuvvetle döner">
          Manyetik alandaki akım taşıyan bobinin bir kenarına yukarı, karşı kenarına aşağı kuvvet etkir.
          Bu kuvvet çifti bobini döndürür. Elektrikli süpürgen, çamaşır makinen ve elektrikli otomobil —
          hepsi tam olarak bu deneyin büyütülmüş hâlidir.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: İndüksiyon ═══════════ */

function Induksiyon() {
  const [sarimSayisi, setSarimSayisi] = useState(200)
  const [hiz, setHiz] = useState(1)
  const [miknatisGucu, setMiknatisGucu] = useState(0.02)
  const [otomatik, setOtomatik] = useState(true)
  const [elleUzaklik, setElleUzaklik] = useState(0.2)

  const sim = useSimulasyonZamani({ bitis: 8, dongu: true })
  // Otomatik modda mıknatıs sinüs biçiminde gidip gelir.
  const uzaklik = otomatik
    ? 0.16 + 0.13 * Math.sin(sim.zaman * hiz * 1.4)
    : elleUzaklik
  const dUzaklik = otomatik ? 0.13 * hiz * 1.4 * Math.cos(sim.zaman * hiz * 1.4) : 0

  const bobinAlaniM2 = 0.004
  const aki = manyetikAki((miknatisGucu / (uzaklik * uzaklik)), bobinAlaniM2, 0)
  // Akıyı zamana göre türevleyerek EMK bulunur.
  const dt = 0.01
  const uzaklikSonra = uzaklik + dUzaklik * dt
  const akiSonra = manyetikAki((miknatisGucu / (uzaklikSonra * uzaklikSonra)), bobinAlaniM2, 0)
  const emk = indüksiyonEmk({ sarimSayisi, akiIlk: aki, akiSon: akiSonra, sure: dt })

  const yaklasiyor = dUzaklik < -1e-6
  const uzaklasiyor = dUzaklik > 1e-6
  const durgun = !yaklasiyor && !uzaklasiyor

  const grafikVeri = useMemo(() => {
    const n = []
    for (let i = 0; i <= 200; i += 1) {
      const t = (i / 200) * 8
      const u = 0.16 + 0.13 * Math.sin(t * hiz * 1.4)
      const du = 0.13 * hiz * 1.4 * Math.cos(t * hiz * 1.4)
      const a1 = manyetikAki(miknatisGucu / (u * u), bobinAlaniM2, 0)
      const u2 = u + du * dt
      const a2 = manyetikAki(miknatisGucu / (u2 * u2), bobinAlaniM2, 0)
      const e = indüksiyonEmk({ sarimSayisi, akiIlk: a1, akiSon: a2, sure: dt })
      n.push({ t, aki: a1 * 1000, emk: e?.emk ?? 0 })
    }
    return n
  }, [hiz, miknatisGucu, sarimSayisi])

  const IG = 600
  const IY = 300
  const bobinX = 400
  const miknatisX = bobinX - 90 - uzaklik * 700

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${IG} ${IY}`} role="img"
            aria-label={`İndüksiyon deneyi. Mıknatıs ${durgun ? 'duruyor' : yaklasiyor ? 'yaklaşıyor' : 'uzaklaşıyor'}. İndüksiyon EMK'sı ${sayiBicimle(emk?.emk ?? 0, 3)} volt.`}>
            {/* Bobin */}
            {Array.from({ length: 8 }, (_, i) => (
              <ellipse key={i} cx={bobinX + i * 13} cy="150" rx="9" ry="46"
                fill="none" stroke="rgb(var(--fa-vektor))" strokeWidth="3" opacity="0.85" />
            ))}
            <text x={bobinX + 45} y="228" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
              Bobin · {sayiBicimle(sarimSayisi, 0)} sarım
            </text>

            {/* Mıknatıs */}
            <g transform={`translate(${Math.max(40, miknatisX)} 150)`}>
              <rect x="-45" y="-16" width="45" height="32" rx="3" fill="rgb(var(--fa-vurgu))" opacity="0.85" />
              <rect x="0" y="-16" width="45" height="32" rx="3" fill="rgb(var(--fa-hata))" opacity="0.85" />
              <text x="-22" y="6" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">G</text>
              <text x="22" y="6" textAnchor="middle" fontSize="14" fontWeight="800" fill="#fff">K</text>
              {!durgun ? (
                <VektorOku x1="50" y1="0" x2={50 + (yaklasiyor ? 42 : -42)} y2="0"
                  renk="rgb(var(--fa-olumlu))" kalinlik={2.6} etiket={yaklasiyor ? 'yaklaşıyor' : 'uzaklaşıyor'} />
              ) : null}
            </g>

            {/* Galvanometre */}
            <g transform={`translate(${bobinX + 45} 62)`}>
              <line x1="-45" y1="42" x2="-45" y2="14" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <line x1="45" y1="42" x2="45" y2="14" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <line x1="-45" y1="14" x2="-26" y2="14" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <line x1="45" y1="14" x2="26" y2="14" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <circle cx="0" cy="14" r="26" fill="rgb(var(--fa-yuzey-3))" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              <line x1="0" y1="14"
                x2={Math.sin(Math.max(-1.1, Math.min(1.1, (emk?.emk ?? 0) * 4))) * 20}
                y2={14 - Math.cos(Math.max(-1.1, Math.min(1.1, (emk?.emk ?? 0) * 4))) * 20}
                stroke="rgb(var(--fa-hata))" strokeWidth="2.5" strokeLinecap="round" />
              <text x="0" y="-18" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">Galvanometre</text>
              <text x="0" y="48" textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-3))">− 0 +</text>
            </g>

            {/* İndüksiyon akımının yönü */}
            {!durgun ? (
              <text x={IG / 2} y="272" textAnchor="middle" fontSize="11.5" fontWeight="700"
                fill={yaklasiyor ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}>
                {yaklasiyor
                  ? 'Akı artıyor → indüksiyon akımı artışa KARŞI koyar (mıknatısı iter)'
                  : 'Akı azalıyor → indüksiyon akımı azalmayı ENGELLEMEYE çalışır (mıknatısı çeker)'}
              </text>
            ) : (
              <text x={IG / 2} y="272" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin-3))">
                Mıknatıs duruyor → akı sabit → indüksiyon akımı YOK
              </text>
            )}
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${durgun ? '' : 'olcum'}`}>EMK = {sayiBicimle(emk?.emk ?? 0, 4)} V</span>
            <span className="fa-rozet">Akı: {sayiBicimle(aki * 1000, 3)} mWb</span>
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={0.15} />

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Uzaklık', deger: uzaklik * 100, birim: 'cm', tur: 'notr' },
              { ad: 'Manyetik akı Φ', deger: aki * 1000, birim: 'mWb', basamak: 3 },
              { ad: 'İndüksiyon EMK', deger: emk?.emk ?? 0, birim: 'V', vurgulu: true, basamak: 4 },
              { ad: 'Sarım sayısı N', deger: sarimSayisi, tur: 'notr', basamak: 0 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Akı ve indüksiyon EMK'sı — zamanla"
            xEtiket="t (s)" yEtiket=""
            seriler={[
              { ad: 'Akı Φ (mWb)', renk: 'rgb(var(--fa-vurgu))', birim: 'mWb', veri: grafikVeri.map((n) => ({ x: n.t, y: n.aki })) },
              { ad: 'EMK (V)', renk: 'rgb(var(--fa-vektor))', birim: 'V', veri: grafikVeri.map((n) => ({ x: n.t, y: n.emk })) },
            ]}
            imlecX={otomatik ? sim.zaman : null}
            yukseklik={195}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            EMK, akının <strong>eğimidir</strong> — akının kendisi değil. Akı en büyük değerdeyken eğim sıfır
            olduğu için EMK de sıfırdır. Akı en hızlı değiştiği anda EMK zirvededir. Hareket yönü değişince
            EMK işaret değiştirir; işte alternatif akımın kaynağı budur.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Anahtar etiket="Mıknatıs otomatik gidip gelsin" acik={otomatik} onChange={setOtomatik} />
          {otomatik ? (
            <Kaydirici etiket="Hareket hızı" deger={hiz} onChange={setHiz} alt={0} ust={3} adim={0.1} basamak={1}
              ipucu="Hızı sıfır yap: mıknatıs durur ve EMK biter. Akım için DEĞİŞİM şart." />
          ) : (
            <Kaydirici etiket="Mıknatıs uzaklığı" deger={elleUzaklik} onChange={setElleUzaklik} alt={0.04} ust={0.4} adim={0.005} birim="m" basamak={3}
              ipucu="Elle yavaşça oynat: hareket ettirdiğin sürece galvanometre sapar, bıraktığında sıfırlanır." />
          )}
          <Kaydirici etiket="Sarım sayısı N" deger={sarimSayisi} onChange={setSarimSayisi} alt={10} ust={1000} adim={10} basamak={0}
            ipucu="EMK sarım sayısıyla doğru orantılıdır: N iki katına çıkarsa EMK de iki katına çıkar." />
          <Kaydirici etiket="Mıknatıs gücü" deger={miknatisGucu} onChange={setMiknatisGucu} alt={0.005} ust={0.08} adim={0.005} basamak={3} />
        </div>

        <Not tur="bilgi" baslik="Lenz yasası: doğa değişime direnir">
          Eksi işaret tesadüf değil. İndüksiyon akımı, kendisini doğuran değişime <strong>karşı koyacak</strong>
          {' '}yönde akar. Mıknatıs yaklaşırken bobin onu iter, uzaklaşırken çeker. Her iki durumda da hareketi
          zorlaştırır — bu yüzden jeneratörü çevirmek enerji ister. Bedava elektrik yoktur; harcanan mekanik
          enerji elektriğe dönüşür.
        </Not>

        <Not tur="uyari" baslik="Sabit alan akım üretmez">
          Mıknatısı bobinin içine koyup bırakırsan, alan çok güçlü olsa bile akım oluşmaz. Akımı doğuran
          alanın kendisi değil, <strong>akının değişmesidir</strong>. Hareket hızını sıfıra indirip gör.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'alan-tezgahi', ad: 'Manyetik Alan Tezgâhı', Bilesen: AlanTezgahi },
  { kod: 'sag-el', ad: 'Sağ El Kuralı', Bilesen: SagElKurali },
  { kod: 'induksiyon', ad: 'İndüksiyon Deneyi', Bilesen: Induksiyon },
]

export default function ManyetizmaBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="manyetizma" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
