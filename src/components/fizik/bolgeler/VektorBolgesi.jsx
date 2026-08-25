import { useCallback, useMemo, useRef, useState } from 'react'
import { Eraser, Minus, Plus, Route, Trash2 } from 'lucide-react'
import {
  AciYayi, Anahtar, Kaydirici, KoordinatDuzlemi, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, VektorOku, eksenKur,
} from '../ortak/index.js'
import {
  aci, arasindakiAci, bileske, buyukluk, cikar, dengeleyici, kosinusBuyuklugu,
  kutupsaldan, rotaOlc, skalerCarp, ters, topla,
} from '../../../lib/fizik/vektor.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SAHNE_G = 620
const SAHNE_Y = 400
/* Fizik penceresi: −10..10 birim yatay, −6,45..6,45 düşey (en-boy oranı korunur) */
const PENCERE = { x0: -10, x1: 10, y0: -6.45, y1: 6.45 }
const EKSEN = eksenKur({ genislik: SAHNE_G, yukseklik: SAHNE_Y, ...PENCERE })

const VEKTOR_RENKLERI = [
  'rgb(var(--fa-vektor))',
  'rgb(var(--fa-mor))',
  'rgb(var(--fa-olumlu))',
  'rgb(var(--fa-uyari))',
]

/* ═══════════ Deney 1: Vektör Tezgâhı ═══════════ */

function VektorTezgahi() {
  const [vektorler, setVektorler] = useState([
    { id: 'A', ad: 'A', x: 6, y: 2 },
    { id: 'B', ad: 'B', x: -3, y: 4 },
  ])
  const [islem, setIslem] = useState('toplama')
  const [yontem, setYontem] = useState('ucuca')
  const [bilesenGoster, setBilesenGoster] = useState(true)
  const [dengeleyiciGoster, setDengeleyiciGoster] = useState(false)
  const [skaler, setSkaler] = useState(2)
  const [seciliId, setSeciliId] = useState('A')
  const svgRef = useRef(null)
  const surukleId = useRef(null)

  const secili = vektorler.find((v) => v.id === seciliId) ?? vektorler[0]

  /* — Hesaplanan büyüklükler — */
  const sonuc = useMemo(() => {
    if (islem === 'cikarma' && vektorler.length >= 2) {
      return cikar(vektorler[0], vektorler[1])
    }
    if (islem === 'skaler' && vektorler.length >= 1) {
      return skalerCarp(vektorler[0], skaler)
    }
    return bileske(vektorler)
  }, [vektorler, islem, skaler])

  const denge = useMemo(() => dengeleyici(vektorler), [vektorler])

  /* — Sürükleme: pointer olayları hem fare hem dokunmatikte çalışır — */
  const konumaCevir = useCallback((e) => {
    const svg = svgRef.current
    if (!svg) return null
    const kutu = svg.getBoundingClientRect()
    const px = ((e.clientX - kutu.left) / kutu.width) * SAHNE_G
    const py = ((e.clientY - kutu.top) / kutu.height) * SAHNE_Y
    return { x: EKSEN.tersX(px), y: EKSEN.tersY(py) }
  }, [])

  const surukleBasla = (id) => (e) => {
    e.currentTarget.setPointerCapture?.(e.pointerId)
    surukleId.current = id
    setSeciliId(id)
  }
  const suruklerken = (e) => {
    if (!surukleId.current) return
    const p = konumaCevir(e)
    if (!p) return
    // Fiziksel sınır: vektör görünür alanın dışına taşmasın.
    const x = Math.max(PENCERE.x0 + 0.2, Math.min(PENCERE.x1 - 0.2, p.x))
    const y = Math.max(PENCERE.y0 + 0.2, Math.min(PENCERE.y1 - 0.2, p.y))
    setVektorler((eski) => eski.map((v) => (v.id === surukleId.current ? { ...v, x, y } : v)))
  }
  const surukleBitir = () => { surukleId.current = null }

  const vektorGuncelle = (id, yeni) => {
    setVektorler((eski) => eski.map((v) => (v.id === id ? { ...v, ...yeni } : v)))
  }

  const vektorEkle = () => {
    if (vektorler.length >= 4) return
    const harf = ['A', 'B', 'C', 'D'][vektorler.length]
    setVektorler((e) => [...e, { id: harf, ad: harf, ...kutupsaldan(4, 30 + e.length * 60) }])
    setSeciliId(harf)
  }
  const vektorSil = (id) => {
    if (vektorler.length <= 1) return
    setVektorler((e) => e.filter((v) => v.id !== id))
    setSeciliId((s) => (s === id ? vektorler[0].id : s))
  }

  /* — Uç uca ekleme çizimi: her vektör bir öncekinin ucundan başlar — */
  const ucUcaZincir = useMemo(() => {
    let nokta = { x: 0, y: 0 }
    return vektorler.map((v) => {
      const bas = nokta
      const uc = topla(nokta, v)
      nokta = uc
      return { v, bas, uc }
    })
  }, [vektorler])

  const ilkIki = vektorler.length >= 2 ? [vektorler[0], vektorler[1]] : null
  const araAci = ilkIki ? arasindakiAci(ilkIki[0], ilkIki[1]) : null
  const kosinusKontrol = ilkIki ? kosinusBuyuklugu(ilkIki[0], ilkIki[1]) : null

  return (
    <div className="fa-lab">
      <div>
        <div
          className="fa-sahne surukle"
          onPointerMove={suruklerken}
          onPointerUp={surukleBitir}
          onPointerCancel={surukleBitir}
        >
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SAHNE_G} ${SAHNE_Y}`}
            role="img"
            aria-label={`Vektör tezgâhı. ${vektorler.length} vektör var. Bileşkenin büyüklüğü ${sayiBicimle(buyukluk(sonuc), 2)} birim, açısı ${sayiBicimle(aci(sonuc), 1)} derece.`}
          >
            <KoordinatDuzlemi genislik={SAHNE_G} yukseklik={SAHNE_Y} eksen={EKSEN} izgaraAdimi={1} xEtiket="x" yEtiket="y" />

            {/* Paralelkenar yöntemi: kesikli tamamlayıcı kenarlar */}
            {yontem === 'paralelkenar' && islem === 'toplama' && ilkIki ? (
              <>
                <line
                  x1={EKSEN.px(ilkIki[0].x)} y1={EKSEN.py(ilkIki[0].y)}
                  x2={EKSEN.px(sonuc.x)} y2={EKSEN.py(sonuc.y)}
                  stroke="rgb(var(--fa-metin-3))" strokeWidth="1.4" strokeDasharray="5 4"
                />
                <line
                  x1={EKSEN.px(ilkIki[1].x)} y1={EKSEN.py(ilkIki[1].y)}
                  x2={EKSEN.px(sonuc.x)} y2={EKSEN.py(sonuc.y)}
                  stroke="rgb(var(--fa-metin-3))" strokeWidth="1.4" strokeDasharray="5 4"
                />
              </>
            ) : null}

            {/* Uç uca ekleme: soluk zincir */}
            {yontem === 'ucuca' && islem === 'toplama' && vektorler.length > 1
              ? ucUcaZincir.slice(1).map(({ v, bas, uc }, i) => (
                <VektorOku
                  key={`zincir-${v.id}`}
                  x1={EKSEN.px(bas.x)} y1={EKSEN.py(bas.y)}
                  x2={EKSEN.px(uc.x)} y2={EKSEN.py(uc.y)}
                  renk={VEKTOR_RENKLERI[(i + 1) % VEKTOR_RENKLERI.length]}
                  opaklik={0.45} kalinlik={2} kesikli
                />
              ))
              : null}

            {/* Vektörlerin bileşenleri */}
            {bilesenGoster ? vektorler.map((v, i) => (
              <g key={`bilesen-${v.id}`} opacity="0.55">
                <line x1={EKSEN.px(0)} y1={EKSEN.py(0)} x2={EKSEN.px(v.x)} y2={EKSEN.py(0)}
                  stroke={VEKTOR_RENKLERI[i % VEKTOR_RENKLERI.length]} strokeWidth="1.6" strokeDasharray="4 3" />
                <line x1={EKSEN.px(v.x)} y1={EKSEN.py(0)} x2={EKSEN.px(v.x)} y2={EKSEN.py(v.y)}
                  stroke={VEKTOR_RENKLERI[i % VEKTOR_RENKLERI.length]} strokeWidth="1.6" strokeDasharray="4 3" />
              </g>
            )) : null}

            {/* Çıkarma işlemi: −B kesikli gösterilir (A − B = A + (−B)) */}
            {islem === 'cikarma' && ilkIki ? (
              <VektorOku
                x1={EKSEN.px(ilkIki[0].x)} y1={EKSEN.py(ilkIki[0].y)}
                x2={EKSEN.px(topla(ilkIki[0], ters(ilkIki[1])).x)} y2={EKSEN.py(topla(ilkIki[0], ters(ilkIki[1])).y)}
                renk="rgb(var(--fa-hata))" kesikli etiket="−B" opaklik={0.75}
              />
            ) : null}

            {/* Ana vektörler */}
            {vektorler.map((v, i) => (
              <VektorOku
                key={v.id}
                x1={EKSEN.px(0)} y1={EKSEN.py(0)}
                x2={EKSEN.px(v.x)} y2={EKSEN.py(v.y)}
                renk={VEKTOR_RENKLERI[i % VEKTOR_RENKLERI.length]}
                etiket={v.ad}
                kalinlik={v.id === seciliId ? 3.4 : 2.6}
              />
            ))}

            {/* İki vektör arasındaki açı */}
            {ilkIki && islem === 'toplama' ? (
              <AciYayi
                merkezX={EKSEN.px(0)} merkezY={EKSEN.py(0)} yaricap={34}
                baslangicAci={aci(ilkIki[0])} bitisAci={aci(ilkIki[1])}
              />
            ) : null}

            {/* Sonuç vektörü */}
            <VektorOku
              x1={EKSEN.px(0)} y1={EKSEN.py(0)}
              x2={EKSEN.px(sonuc.x)} y2={EKSEN.py(sonuc.y)}
              renk="rgb(var(--fa-vurgu))" kalinlik={3.6}
              etiket={islem === 'cikarma' ? 'A−B' : islem === 'skaler' ? `${sayiBicimle(skaler, 1)}·A` : 'R'}
            />

            {/* Dengeleyici */}
            {dengeleyiciGoster ? (
              <VektorOku
                x1={EKSEN.px(0)} y1={EKSEN.py(0)}
                x2={EKSEN.px(denge.x)} y2={EKSEN.py(denge.y)}
                renk="rgb(var(--fa-olcum))" kalinlik={3} etiket="Dengeleyici" kesikli
              />
            ) : null}

            {/* Sürükleme tutamakları */}
            {vektorler.map((v, i) => (
              <g
                key={`tut-${v.id}`}
                onPointerDown={surukleBasla(v.id)}
                tabIndex={0}
                role="button"
                aria-label={`${v.ad} vektörünün ucu. Ok tuşlarıyla oynat.`}
                onKeyDown={(e) => {
                  const adim = e.shiftKey ? 1 : 0.25
                  const k = { ArrowLeft: [-adim, 0], ArrowRight: [adim, 0], ArrowUp: [0, adim], ArrowDown: [0, -adim] }[e.key]
                  if (!k) return
                  e.preventDefault()
                  setSeciliId(v.id)
                  vektorGuncelle(v.id, {
                    x: Math.max(PENCERE.x0 + 0.2, Math.min(PENCERE.x1 - 0.2, v.x + k[0])),
                    y: Math.max(PENCERE.y0 + 0.2, Math.min(PENCERE.y1 - 0.2, v.y + k[1])),
                  })
                }}
                style={{ cursor: 'grab' }}
              >
                <circle cx={EKSEN.px(v.x)} cy={EKSEN.py(v.y)} r="16" fill="transparent" />
                <circle
                  cx={EKSEN.px(v.x)} cy={EKSEN.py(v.y)} r={v.id === seciliId ? 8 : 6.5}
                  fill={VEKTOR_RENKLERI[i % VEKTOR_RENKLERI.length]}
                  stroke="rgb(var(--fa-yuzey))" strokeWidth="2"
                />
              </g>
            ))}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet vektor">|R| = {sayiBicimle(buyukluk(sonuc), 2)}</span>
            <span className="fa-rozet mavi">{sayiBicimle(aci(sonuc), 1)}°</span>
            {araAci !== null ? <span className="fa-rozet">A–B açısı: {sayiBicimle(araAci, 1)}°</span> : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik="Sonuç"
            olcumler={[
              { ad: 'Rx (yatay bileşen)', deger: sonuc.x, tur: 'vektor', basamak: 2 },
              { ad: 'Ry (düşey bileşen)', deger: sonuc.y, tur: 'vektor', basamak: 2 },
              { ad: 'Büyüklük |R|', deger: buyukluk(sonuc), vurgulu: true, basamak: 2 },
              { ad: 'Açı', deger: aci(sonuc), birim: '°', basamak: 1 },
            ]}
          />
        </div>

        {/* Cebirsel ve geometrik çözümün aynı sonucu verdiğinin kanıtı */}
        {ilkIki && islem === 'toplama' && vektorler.length === 2 ? (
          <div className="fa-kart sade" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">İki yöntem, tek sonuç</div>
            <div className="fa-izgara iki">
              <div>
                <h4 style={{ fontSize: 13, marginBottom: 5 }}>Cebirsel (bileşenlerle)</h4>
                <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.7 }}>
                  Rx = {sayiBicimle(ilkIki[0].x, 2)} + {sayiBicimle(ilkIki[1].x, 2)} = {sayiBicimle(sonuc.x, 2)}<br />
                  Ry = {sayiBicimle(ilkIki[0].y, 2)} + {sayiBicimle(ilkIki[1].y, 2)} = {sayiBicimle(sonuc.y, 2)}<br />
                  |R| = √(Rx² + Ry²) = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(buyukluk(sonuc), 3)}</b>
                </div>
              </div>
              <div>
                <h4 style={{ fontSize: 13, marginBottom: 5 }}>Geometrik (kosinüs teoremi)</h4>
                <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.7 }}>
                  |A| = {sayiBicimle(buyukluk(ilkIki[0]), 2)}, |B| = {sayiBicimle(buyukluk(ilkIki[1]), 2)}<br />
                  θ = {sayiBicimle(araAci, 1)}°<br />
                  |R| = √(A²+B²+2AB·cosθ) = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(kosinusKontrol, 3)}</b>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi
            etiket="İşlem"
            deger={islem}
            onChange={setIslem}
            secenekler={[
              { kod: 'toplama', ad: 'Toplama' },
              { kod: 'cikarma', ad: 'A − B' },
              { kod: 'skaler', ad: 'Skalerle çarpma' },
            ]}
          />

          {islem === 'toplama' ? (
            <SecimSeridi
              etiket="Toplama yöntemi"
              deger={yontem}
              onChange={setYontem}
              secenekler={[
                { kod: 'ucuca', ad: 'Uç uca ekleme' },
                { kod: 'paralelkenar', ad: 'Paralelkenar' },
              ]}
            />
          ) : null}

          {islem === 'skaler' ? (
            <Kaydirici
              etiket="Skaler çarpan (k)"
              deger={skaler} onChange={setSkaler}
              alt={-3} ust={3} adim={0.1} basamak={1}
              ipucu="Negatif k vektörün yönünü ters çevirir; büyüklüğünü |k| katına getirir."
            />
          ) : null}

          <Anahtar etiket="Bileşenleri göster" acik={bilesenGoster} onChange={setBilesenGoster} />
          <Anahtar
            etiket="Dengeleyici vektörü göster"
            acik={dengeleyiciGoster}
            onChange={setDengeleyiciGoster}
            ipucu="Dengeleyici, bileşkeyi sıfırlayan vektördür: −R"
          />
        </div>

        {/* Seçili vektörün büyüklük/açı denetimi */}
        <div className="fa-kart dar">
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 10 }}>
            {vektorler.map((v, i) => (
              <button
                key={v.id}
                type="button"
                className={`fa-dugme kucuk ${seciliId === v.id ? 'secili' : ''}`}
                onClick={() => setSeciliId(v.id)}
                style={{ borderLeftColor: VEKTOR_RENKLERI[i % VEKTOR_RENKLERI.length], borderLeftWidth: 3 }}
              >
                {v.ad}
              </button>
            ))}
            <button type="button" className="fa-dugme kucuk" onClick={vektorEkle} disabled={vektorler.length >= 4} aria-label="Vektör ekle">
              <Plus size={14} />
            </button>
            <button type="button" className="fa-dugme kucuk" onClick={() => vektorSil(seciliId)} disabled={vektorler.length <= 1} aria-label="Seçili vektörü sil">
              <Trash2 size={14} />
            </button>
          </div>

          {secili ? (
            <>
              <Kaydirici
                etiket={`|${secili.ad}| büyüklük`}
                deger={buyukluk(secili)}
                onChange={(b) => vektorGuncelle(secili.id, kutupsaldan(b, aci(secili)))}
                alt={0.2} ust={9} adim={0.1} basamak={2} renk="vektor"
              />
              <Kaydirici
                etiket={`${secili.ad} açısı`}
                deger={aci(secili)}
                onChange={(a) => vektorGuncelle(secili.id, kutupsaldan(buyukluk(secili), a))}
                alt={0} ust={360} adim={1} birim="°" basamak={0} renk="vektor"
              />
              <div className="fa-olcum-izgara">
                <div className="fa-olcum-kart vektor">
                  <div className="fa-olcum-ad">{secili.ad}ₓ</div>
                  <div className="fa-olcum-deger">{sayiBicimle(secili.x, 2)}</div>
                </div>
                <div className="fa-olcum-kart vektor">
                  <div className="fa-olcum-ad">{secili.ad}_y</div>
                  <div className="fa-olcum-deger">{sayiBicimle(secili.y, 2)}</div>
                </div>
              </div>
            </>
          ) : null}
        </div>

        {islem === 'cikarma' ? (
          <Not tur="bilgi" baslik="A − B = A + (−B)">
            Kırmızı kesikli ok <strong>−B</strong>’dir: B ile aynı boyda, tam ters yönde. Çıkarma ayrı bir
            kural değil, ters vektörle toplamadır.
          </Not>
        ) : null}
        {islem === 'skaler' && skaler < 0 ? (
          <Not tur="uyari" baslik="Negatif skaler yönü çevirdi">
            k = {sayiBicimle(skaler, 1)} olduğu için sonuç vektörü A ile ters yöne baktı. Büyüklüğü
            |k|·|A| = {sayiBicimle(Math.abs(skaler) * buyukluk(vektorler[0]), 2)} oldu.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Yol mu, Yer Değiştirme mi? ═══════════ */

/**
 * Öğrenci haritaya tıklayarak bir rota çizer. Alınan yol her adımda
 * artarken yer değiştirme yalnızca başlangıç–bitiş arasına bakar.
 * Kapalı rota çizildiğinde yol > 0 iken yer değiştirmenin sıfır olduğu
 * anında görülür — skaler/vektörel ayrımının en net kanıtı.
 */
function YolVeYerDegistirme() {
  const [nokta, setNokta] = useState([{ x: -6, y: -3 }, { x: 2, y: -3 }, { x: 2, y: 3 }])
  const svgRef = useRef(null)

  const olcum = useMemo(() => rotaOlc(nokta), [nokta])

  const tikla = (e) => {
    const svg = svgRef.current
    if (!svg) return
    const kutu = svg.getBoundingClientRect()
    const px = ((e.clientX - kutu.left) / kutu.width) * SAHNE_G
    const py = ((e.clientY - kutu.top) / kutu.height) * SAHNE_Y
    const x = Math.round(EKSEN.tersX(px) * 2) / 2
    const y = Math.round(EKSEN.tersY(py) * 2) / 2
    setNokta((e2) => [...e2, { x, y }])
  }

  const kapat = () => setNokta((e) => (e.length > 1 ? [...e, { ...e[0] }] : e))
  const geriAl = () => setNokta((e) => (e.length > 1 ? e.slice(0, -1) : e))
  const temizle = () => setNokta([{ x: -6, y: -3 }])

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne" style={{ cursor: 'crosshair' }}>
          <svg
            ref={svgRef}
            viewBox={`0 0 ${SAHNE_G} ${SAHNE_Y}`}
            onClick={tikla}
            role="img"
            aria-label={`Rota haritası. Alınan yol ${sayiBicimle(olcum.yol, 2)} birim, yer değiştirme ${sayiBicimle(olcum.yerDegistirmeBuyuklugu, 2)} birim.`}
          >
            <KoordinatDuzlemi genislik={SAHNE_G} yukseklik={SAHNE_Y} eksen={EKSEN} izgaraAdimi={1} xEtiket="x (m)" yEtiket="y (m)" />

            {/* Rota — alınan yol */}
            <polyline
              points={nokta.map((n) => `${EKSEN.px(n.x)},${EKSEN.py(n.y)}`).join(' ')}
              fill="none" stroke="rgb(var(--fa-uyari))" strokeWidth="3"
              strokeLinejoin="round" strokeLinecap="round"
            />
            {nokta.map((n, i) => (
              <circle key={i} cx={EKSEN.px(n.x)} cy={EKSEN.py(n.y)} r={i === 0 ? 7 : 4.5}
                fill={i === 0 ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-uyari))'}
                stroke="rgb(var(--fa-yuzey))" strokeWidth="1.5" />
            ))}

            {/* Yer değiştirme vektörü */}
            {nokta.length > 1 && olcum.yerDegistirmeBuyuklugu > 0.01 ? (
              <VektorOku
                x1={EKSEN.px(nokta[0].x)} y1={EKSEN.py(nokta[0].y)}
                x2={EKSEN.px(nokta[nokta.length - 1].x)} y2={EKSEN.py(nokta[nokta.length - 1].y)}
                renk="rgb(var(--fa-vurgu))" kalinlik={3.2} etiket="Δr"
              />
            ) : null}

            {olcum.kapali ? (
              <text x={SAHNE_G / 2} y={26} textAnchor="middle" fontSize="13" fontWeight="700" fill="rgb(var(--fa-olumlu))">
                Kapalı rota: yer değiştirme = 0, ama yol = {sayiBicimle(olcum.yol, 1)} m
              </text>
            ) : null}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet uyari">Yol: {sayiBicimle(olcum.yol, 2)} m</span>
            <span className="fa-rozet mavi">Yer değiştirme: {sayiBicimle(olcum.yerDegistirmeBuyuklugu, 2)} m</span>
          </div>
        </div>

        <div className="fa-kontrol">
          <span style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))' }}>Haritaya tıklayarak durak ekle</span>
          <button type="button" className="fa-dugme kucuk" onClick={kapat}>
            <Route size={14} /> Başlangıca dön
          </button>
          <button type="button" className="fa-dugme kucuk" onClick={geriAl}>
            <Minus size={14} /> Son durağı sil
          </button>
          <button type="button" className="fa-dugme kucuk" onClick={temizle}>
            <Eraser size={14} /> Temizle
          </button>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Alınan yol (skaler)', deger: olcum.yol, birim: 'm', tur: 'notr', basamak: 2 },
              { ad: 'Yer değiştirme (vektörel)', deger: olcum.yerDegistirmeBuyuklugu, birim: 'm', vurgulu: true, basamak: 2 },
              { ad: 'Δx', deger: olcum.yerDegistirme.x, birim: 'm', tur: 'vektor', basamak: 2 },
              { ad: 'Δy', deger: olcum.yerDegistirme.y, birim: 'm', tur: 'vektor', basamak: 2 },
              { ad: 'Durak sayısı', deger: nokta.length, tur: 'notr', basamak: 0 },
            ]}
          />
        </div>
      </div>

      <div className="fa-lab-yan">
        <Not tur="bilgi" baslik="Neden farklılar?">
          <strong>Alınan yol</strong> gezdiğin her metreyi sayar; asla azalmaz. <strong>Yer değiştirme</strong>
          {' '}yalnızca nereden nereye geldiğine bakar. “Başlangıca dön” düğmesine bas: yol büyümeye devam
          ederken yer değiştirme sıfıra iner.
        </Not>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Aynı ayrımın diğer yüzleri</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Skaler</th><th>Vektörel</th></tr></thead>
              <tbody>
                <tr><td>Alınan yol</td><td>Yer değiştirme</td></tr>
                <tr><td>Sürat</td><td>Hız</td></tr>
                <tr><td>Enerji</td><td>Kuvvet</td></tr>
                <tr><td>Zaman</td><td>İvme</td></tr>
                <tr><td>Kütle</td><td>Ağırlık</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {olcum.yol > 0 ? (
          <div className="fa-kart dar">
            <div className="fa-ust-etiket">Rota özeti</div>
            <p style={{ fontSize: 13, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.6 }}>
              {olcum.kapali
                ? 'Başladığın yere döndün. Kilometre saatin ilerledi ama haritadaki konumun değişmedi: yer değiştirme sıfır.'
                : `${sayiBicimle(olcum.yol, 1)} m yol aldın ama başlangıç noktasına yalnızca ${sayiBicimle(olcum.yerDegistirmeBuyuklugu, 1)} m uzaktasın. Aradaki fark ${sayiBicimle(olcum.yol - olcum.yerDegistirmeBuyuklugu, 1)} m.`}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'vektor-tezgahi', ad: 'Vektör Tezgâhı', Bilesen: VektorTezgahi },
  { kod: 'skaler-vektorel', ad: 'Yol mu, Yer Değiştirme mi?', Bilesen: YolVeYerDegistirme },
]

export default function VektorBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="vektorler" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi
        etiket="Deney seç"
        deger={deney}
        onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))}
      />
      <Bilesen />
    </ModulKabugu>
  )
}
