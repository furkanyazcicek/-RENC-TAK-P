import { useMemo, useState } from 'react'
import { Plus, Trash2 } from 'lucide-react'
import {
  AciYayi, Anahtar, Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, SimKontrol, VektorOku, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  G_MUFREDAT, alinanYol, grafikVerisi, hiz, hizZamanAlani, konum,
  surtunmeliHareket, yerDegistirme,
} from '../../../lib/fizik/hareket.js'
import { aci, bileske, buyukluk, kutupsaldan } from '../../../lib/fizik/vektor.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/* ═══════════ Deney 1: Hareket Laboratuvarı ═══════════ */

const YOL_G = 620
const YOL_Y = 150

/**
 * Sabit ivmeli hareket. Cismin konumu her karede **analitik** denklemle
 * hesaplanır (kare kare toplanmaz), bu yüzden ekran hızı sonucu
 * değiştirmez. Üç grafik ve animasyon aynı `zaman` değerinden beslenir;
 * dolayısıyla hep senkron kalırlar.
 */
function HareketLaboratuvari() {
  const [x0, setX0] = useState(0)
  const [v0, setV0] = useState(12)
  const [a, setA] = useState(-3)
  const [sure, setSure] = useState(10)
  const [izBirak, setIzBirak] = useState(true)
  const [alanGoster, setAlanGoster] = useState(true)

  const sim = useSimulasyonZamani({ bitis: sure })
  const t = sim.zaman

  const veri = useMemo(() => grafikVerisi({ x0, v0, a, sure, adim: 220 }), [x0, v0, a, sure])

  const anlikKonum = konum(x0, v0, a, t)
  const anlikHiz = hiz(v0, a, t)
  const anlikYerDegistirme = yerDegistirme(v0, a, t)
  const anlikYol = alinanYol(v0, a, t)
  const alan = hizZamanAlani(v0, a, 0, t)

  // Yol ölçeği: hareketin tamamı ekrana sığsın diye tüm konumların
  // en küçük ve en büyüğü alınır.
  const sinirlar = useMemo(() => {
    const xler = veri.map((n) => n.x)
    const en = Math.min(...xler)
    const eb = Math.max(...xler)
    const pay = Math.max(2, (eb - en) * 0.1)
    return { en: en - pay, eb: eb + pay }
  }, [veri])

  const px = (x) => 30 + ((x - sinirlar.en) / (sinirlar.eb - sinirlar.en)) * (YOL_G - 60)

  const izNoktalari = useMemo(() => {
    if (!izBirak) return []
    const n = []
    for (let i = 0; i <= 24; i += 1) {
      const ti = (t * i) / 24
      n.push({ t: ti, x: konum(x0, v0, a, ti) })
    }
    return n
  }, [izBirak, t, x0, v0, a])

  const seriKonum = [{ ad: 'x', renk: 'rgb(var(--fa-vurgu))', birim: 'm', veri: veri.map((n) => ({ x: n.t, y: n.x })) }]
  const seriHiz = [{ ad: 'v', renk: 'rgb(var(--fa-olcum))', birim: 'm/s', veri: veri.map((n) => ({ x: n.t, y: n.v })) }]
  const seriIvme = [{ ad: 'a', renk: 'rgb(var(--fa-vektor))', birim: 'm/s²', veri: veri.map((n) => ({ x: n.t, y: n.a })) }]

  return (
    <div>
      <div className="fa-lab">
        <div>
          <div className="fa-sahne">
            <svg viewBox={`0 0 ${YOL_G} ${YOL_Y}`} role="img" aria-label={`Hareket sahnesi. ${sayiBicimle(t, 1)} saniyede konum ${sayiBicimle(anlikKonum, 1)} metre, hız ${sayiBicimle(anlikHiz, 1)} metre bölü saniye.`}>
              {/* Yol ve ölçek işaretleri */}
              <line x1="20" x2={YOL_G - 20} y1="96" y2="96" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
              {Array.from({ length: 9 }, (_, i) => {
                const x = sinirlar.en + ((sinirlar.eb - sinirlar.en) * i) / 8
                return (
                  <g key={i}>
                    <line x1={px(x)} x2={px(x)} y1="92" y2="102" stroke="rgb(var(--fa-metin-3))" strokeWidth="1" />
                    <text x={px(x)} y="118" textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-3))">{sayiBicimle(x, 0)}</text>
                  </g>
                )
              })}
              <text x={YOL_G - 20} y="134" textAnchor="end" fontSize="10" fill="rgb(var(--fa-metin-2))">konum x (m)</text>

              {/* Başlangıç işareti */}
              <line x1={px(x0)} x2={px(x0)} y1="60" y2="96" stroke="rgb(var(--fa-metin-3))" strokeWidth="1.2" strokeDasharray="3 3" />
              <text x={px(x0)} y="52" textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-3))">başlangıç</text>

              {/* İz */}
              {izBirak ? izNoktalari.map((n, i) => (
                <circle key={i} cx={px(n.x)} cy="96" r="2.5"
                  fill="rgb(var(--fa-vurgu))" opacity={0.15 + (i / izNoktalari.length) * 0.5} />
              )) : null}

              {/* Cisim */}
              <rect x={px(anlikKonum) - 15} y="72" width="30" height="24" rx="4"
                fill="rgb(var(--fa-vurgu) / 0.45)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.8" />

              {/* Hız vektörü */}
              {Math.abs(anlikHiz) > 0.05 ? (
                <VektorOku
                  x1={px(anlikKonum)} y1="62" x2={px(anlikKonum) + anlikHiz * 5} y2="62"
                  renk="rgb(var(--fa-olcum))" etiket="v" kalinlik={2.6}
                />
              ) : null}

              {/* İvme vektörü */}
              {Math.abs(a) > 0.05 ? (
                <VektorOku
                  x1={px(anlikKonum)} y1="26" x2={px(anlikKonum) + a * 9} y2="26"
                  renk="rgb(var(--fa-vektor))" etiket="a" kalinlik={2.4}
                />
              ) : null}
            </svg>

            <div className="fa-sahne-rozet">
              <span className="fa-rozet olcum">x = {sayiBicimle(anlikKonum, 2)} m</span>
              <span className="fa-rozet olcum">v = {sayiBicimle(anlikHiz, 2)} m/s</span>
              <span className="fa-rozet vektor">a = {sayiBicimle(a, 2)} m/s²</span>
              {anlikHiz * a < -0.01 ? <span className="fa-rozet uyari">Yavaşlıyor</span> : null}
              {anlikHiz * a > 0.01 ? <span className="fa-rozet olumlu">Hızlanıyor</span> : null}
            </div>
          </div>

          <SimKontrol {...sim} adimBoyu={0.25} />

          <div style={{ marginTop: 12 }}>
            <OlcumPanosu
              olcumler={[
                { ad: 'Konum x', deger: anlikKonum, birim: 'm', vurgulu: true },
                { ad: 'Hız v', deger: anlikHiz, birim: 'm/s' },
                { ad: 'İvme a', deger: a, birim: 'm/s²', tur: 'vektor' },
                { ad: 'Yer değiştirme Δx', deger: anlikYerDegistirme, birim: 'm', tur: 'vektor' },
                { ad: 'Alınan yol', deger: anlikYol, birim: 'm', tur: 'notr' },
              ]}
            />
          </div>

          {/* Üç grafik, tek zaman ekseni */}
          <div className="fa-izgara uc" style={{ marginTop: 12 }}>
            <div className="fa-kart dar">
              <Grafik baslik="Konum – Zaman" xEtiket="t (s)" yEtiket="x (m)" seriler={seriKonum} imlecX={t} yukseklik={150} />
              <p style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 6 }}>
                Bu eğrinin <strong>eğimi hızı</strong> verir. Şu an eğim = {sayiBicimle(anlikHiz, 2)} m/s.
              </p>
            </div>
            <div className="fa-kart dar">
              <Grafik baslik="Hız – Zaman" xEtiket="t (s)" yEtiket="v (m/s)" seriler={seriHiz} imlecX={t} alanGoster={alanGoster} yukseklik={150} />
              <p style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 6 }}>
                Eğim <strong>ivmeyi</strong>, altındaki alan <strong>yer değiştirmeyi</strong> verir.
                {alanGoster ? ` Alan = ${sayiBicimle(alan, 2)} m.` : ''}
              </p>
            </div>
            <div className="fa-kart dar">
              <Grafik baslik="İvme – Zaman" xEtiket="t (s)" yEtiket="a (m/s²)" seriler={seriIvme} imlecX={t} yukseklik={150} />
              <p style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 6 }}>
                Sabit ivmeli harekette bu grafik daima yataydır.
              </p>
            </div>
          </div>

          {/* Alan–yer değiştirme eşitliğinin sayısal kanıtı */}
          {alanGoster && t > 0.2 ? (
            <div className="fa-kart sade" style={{ marginTop: 12 }}>
              <div className="fa-ust-etiket">Alan gerçekten yer değiştirmeye eşit mi?</div>
              <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, lineHeight: 1.7, color: 'rgb(var(--fa-metin-2))' }}>
                Grafik altındaki alan (sayısal) = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(alan, 4)} m</b><br />
                Δx = v₀t + ½at² (formül) = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(anlikYerDegistirme, 4)} m</b>
              </div>
              {Math.abs(anlikYol - Math.abs(anlikYerDegistirme)) > 0.05 ? (
                <div style={{ marginTop: 10 }}>
                  <Not tur="uyari" baslik="Yol ile yer değiştirme ayrıldı">
                    Cisim yön değiştirdi. Alınan yol {sayiBicimle(anlikYol, 2)} m iken yer değiştirme
                    {' '}{sayiBicimle(anlikYerDegistirme, 2)} m. Grafikte eksenin altında kalan kırmızı alan
                    negatiftir ve yer değiştirmeden düşülür; ama yol hesabında mutlak değeriyle eklenir.
                  </Not>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="fa-lab-yan">
          <div className="fa-kart dar">
            <Kaydirici etiket="Başlangıç konumu x₀" deger={x0} onChange={setX0} alt={-50} ust={50} adim={1} birim="m" basamak={0} />
            <Kaydirici etiket="İlk hız v₀" deger={v0} onChange={setV0} alt={-30} ust={30} adim={0.5} birim="m/s" basamak={1}
              ipucu="Negatif değer, cismin ters yönde başladığı anlamına gelir." />
            <Kaydirici etiket="İvme a" deger={a} onChange={setA} alt={-10} ust={10} adim={0.5} birim="m/s²" basamak={1} renk="vektor"
              ipucu="Hız ile ivme zıt işaretliyse cisim yavaşlar." />
            <Kaydirici etiket="Gözlem süresi" deger={sure} onChange={setSure} alt={2} ust={30} adim={1} birim="s" basamak={0} />
            <Anahtar etiket="İz bırak" acik={izBirak} onChange={setIzBirak} />
            <Anahtar etiket="Hız–zaman altındaki alanı boya" acik={alanGoster} onChange={setAlanGoster} />
          </div>

          <div className="fa-kart dar">
            <div className="fa-ust-etiket">Hazır durumlar</div>
            <div style={{ display: 'grid', gap: 6 }}>
              {[
                { ad: 'Düzgün doğrusal hareket', d: { x0: 0, v0: 10, a: 0, sure: 10 } },
                { ad: 'Sabit ivmeyle hızlanma', d: { x0: 0, v0: 0, a: 4, sure: 10 } },
                { ad: 'Yavaşlayıp geri dönme', d: { x0: 0, v0: 20, a: -4, sure: 10 } },
                { ad: 'Serbest düşme (g = 10)', d: { x0: 0, v0: 0, a: -10, sure: 5 } },
                { ad: 'Negatif yönde hızlanma', d: { x0: 40, v0: -5, a: -3, sure: 8 } },
              ].map((h) => (
                <button
                  key={h.ad}
                  type="button"
                  className="fa-dugme kucuk"
                  style={{ justifyContent: 'flex-start' }}
                  onClick={() => { setX0(h.d.x0); setV0(h.d.v0); setA(h.d.a); setSure(h.d.sure); sim.sifirla() }}
                >
                  {h.ad}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Kuvvet Masası ═══════════ */

const KM_G = 520
const KM_Y = 400
const KM_MERKEZ = { x: KM_G / 2, y: KM_Y / 2 }

function KuvvetMasasi() {
  const [kuvvetler, setKuvvetler] = useState([
    { id: 'F1', buyukluk: 30, aciDerece: 0 },
    { id: 'F2', buyukluk: 40, aciDerece: 90 },
  ])
  const [kutle, setKutle] = useState(5)
  const [dengeleyiciGoster, setDengeleyiciGoster] = useState(false)

  const vektorler = kuvvetler.map((k) => kutupsaldan(k.buyukluk, k.aciDerece))
  const net = bileske(vektorler)
  const netBuyukluk = buyukluk(net)
  const ivme = netBuyukluk / kutle
  const dengede = netBuyukluk < 0.5

  const olcek = 2.2 // N → piksel

  const guncelle = (id, alan, deger) => {
    setKuvvetler((e) => e.map((k) => (k.id === id ? { ...k, [alan]: deger } : k)))
  }
  const ekle = () => {
    if (kuvvetler.length >= 4) return
    setKuvvetler((e) => [...e, { id: `F${e.length + 1}`, buyukluk: 25, aciDerece: 180 + e.length * 30 }])
  }
  const sil = (id) => setKuvvetler((e) => (e.length > 1 ? e.filter((k) => k.id !== id) : e))

  const RENKLER = ['rgb(var(--fa-vektor))', 'rgb(var(--fa-mor))', 'rgb(var(--fa-olumlu))', 'rgb(var(--fa-uyari))']

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${KM_G} ${KM_Y}`} role="img" aria-label={`Kuvvet masası. Net kuvvet ${sayiBicimle(netBuyukluk, 1)} newton, ivme ${sayiBicimle(ivme, 2)} metre bölü saniyekare.`}>
            {/* Masa */}
            <circle cx={KM_MERKEZ.x} cy={KM_MERKEZ.y} r="150" fill="rgb(var(--fa-yuzey-2))" stroke="rgb(var(--fa-cizgi))" strokeWidth="1.5" />
            {/* Açı ölçeği */}
            {Array.from({ length: 24 }, (_, i) => {
              const ac = i * 15
              const r = (ac * Math.PI) / 180
              const buyuk = ac % 45 === 0
              return (
                <g key={i}>
                  <line
                    x1={KM_MERKEZ.x + Math.cos(r) * 150} y1={KM_MERKEZ.y - Math.sin(r) * 150}
                    x2={KM_MERKEZ.x + Math.cos(r) * (buyuk ? 138 : 144)} y2={KM_MERKEZ.y - Math.sin(r) * (buyuk ? 138 : 144)}
                    stroke="rgb(var(--fa-metin-3))" strokeWidth={buyuk ? 1.2 : 0.6}
                  />
                  {buyuk ? (
                    <text
                      x={KM_MERKEZ.x + Math.cos(r) * 165} y={KM_MERKEZ.y - Math.sin(r) * 165 + 4}
                      textAnchor="middle" fontSize="10" fill="rgb(var(--fa-metin-3))"
                    >
                      {ac}°
                    </text>
                  ) : null}
                </g>
              )
            })}

            {/* Kuvvet vektörleri */}
            {kuvvetler.map((k, i) => {
              const v = kutupsaldan(k.buyukluk * olcek, k.aciDerece)
              return (
                <VektorOku
                  key={k.id}
                  x1={KM_MERKEZ.x} y1={KM_MERKEZ.y}
                  x2={KM_MERKEZ.x + v.x} y2={KM_MERKEZ.y - v.y}
                  renk={RENKLER[i % RENKLER.length]} etiket={k.id} kalinlik={2.8}
                />
              )
            })}

            {/* Net kuvvet */}
            {!dengede ? (
              <VektorOku
                x1={KM_MERKEZ.x} y1={KM_MERKEZ.y}
                x2={KM_MERKEZ.x + net.x * olcek} y2={KM_MERKEZ.y - net.y * olcek}
                renk="rgb(var(--fa-vurgu))" etiket="F_net" kalinlik={3.6}
              />
            ) : null}

            {/* Dengeleyici */}
            {dengeleyiciGoster && !dengede ? (
              <VektorOku
                x1={KM_MERKEZ.x} y1={KM_MERKEZ.y}
                x2={KM_MERKEZ.x - net.x * olcek} y2={KM_MERKEZ.y + net.y * olcek}
                renk="rgb(var(--fa-olcum))" etiket="Dengeleyici" kalinlik={3} kesikli
              />
            ) : null}

            {/* Cisim */}
            <circle cx={KM_MERKEZ.x} cy={KM_MERKEZ.y} r="17"
              fill={dengede ? 'rgb(var(--fa-olumlu) / 0.35)' : 'rgb(var(--fa-vurgu) / 0.35)'}
              stroke={dengede ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-vurgu))'} strokeWidth="2" />
            <text x={KM_MERKEZ.x} y={KM_MERKEZ.y + 4} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="rgb(var(--fa-metin))">
              {sayiBicimle(kutle, 0)}kg
            </text>

            {kuvvetler.length >= 2 ? (
              <AciYayi
                merkezX={KM_MERKEZ.x} merkezY={KM_MERKEZ.y} yaricap={44}
                baslangicAci={kuvvetler[0].aciDerece} bitisAci={kuvvetler[1].aciDerece}
              />
            ) : null}
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${dengede ? 'olumlu' : 'mavi'}`}>
              {dengede ? 'Denge: net kuvvet sıfır' : `F_net = ${sayiBicimle(netBuyukluk, 1)} N`}
            </span>
            {!dengede ? <span className="fa-rozet vektor">{sayiBicimle(aci(net), 1)}° yönünde</span> : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Net kuvvet', deger: netBuyukluk, birim: 'N', vurgulu: true },
              { ad: 'Yönü', deger: aci(net), birim: '°', tur: 'vektor', basamak: 1 },
              { ad: 'F_net,x', deger: net.x, birim: 'N', tur: 'vektor' },
              { ad: 'F_net,y', deger: net.y, birim: 'N', tur: 'vektor' },
              { ad: 'İvme (a = F/m)', deger: ivme, birim: 'm/s²' },
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <Not tur={dengede ? 'olumlu' : 'bilgi'} baslik={dengede ? 'Cisim dengede' : 'Cisim ivmeleniyor'}>
            {dengede
              ? 'Kuvvetlerin bileşkesi sıfır. Newton\'ın birinci yasasına göre cisim duruyorsa durmaya, hareket ediyorsa sabit hızla hareket etmeye devam eder. Kuvvetler var ama net etki yok.'
              : `Net kuvvet ${sayiBicimle(netBuyukluk, 1)} N, kütle ${sayiBicimle(kutle, 1)} kg. Newton'ın ikinci yasasına göre ivme = ${sayiBicimle(netBuyukluk, 1)} / ${sayiBicimle(kutle, 1)} = ${sayiBicimle(ivme, 2)} m/s². Kütleyi iki katına çıkarırsan ivme yarıya iner.`}
          </Not>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Cismin kütlesi" deger={kutle} onChange={setKutle} alt={0.5} ust={30} adim={0.5} birim="kg" basamak={1} />
          <Anahtar etiket="Dengeleyici kuvveti göster" acik={dengeleyiciGoster} onChange={setDengeleyiciGoster}
            ipucu="Dengeleyici, net kuvveti sıfırlayacak kuvvettir." />
        </div>

        {kuvvetler.map((k, i) => (
          <div className="fa-kart dar" key={k.id} style={{ borderLeft: `3px solid ${RENKLER[i % RENKLER.length]}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong style={{ fontSize: 13.5 }}>{k.id}</strong>
              {kuvvetler.length > 1 ? (
                <button type="button" className="fa-dugme sade kucuk" onClick={() => sil(k.id)} aria-label={`${k.id} kuvvetini sil`}>
                  <Trash2 size={13} />
                </button>
              ) : null}
            </div>
            <Kaydirici etiket="Büyüklük" deger={k.buyukluk} onChange={(v) => guncelle(k.id, 'buyukluk', v)}
              alt={0} ust={60} adim={1} birim="N" basamak={0} renk="vektor" />
            <Kaydirici etiket="Açı" deger={k.aciDerece} onChange={(v) => guncelle(k.id, 'aciDerece', v)}
              alt={0} ust={360} adim={1} birim="°" basamak={0} renk="vektor" />
          </div>
        ))}

        <button type="button" className="fa-dugme" onClick={ekle} disabled={kuvvetler.length >= 4}>
          <Plus size={15} /> Kuvvet ekle
        </button>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Sürtünme Laboratuvarı ═══════════ */

const ZEMINLER = {
  buz: { ad: 'Buz', muS: 0.1, muK: 0.03, renk: '#bae6fd' },
  cilaliParke: { ad: 'Cilalı parke', muS: 0.2, muK: 0.15, renk: '#d6b48c' },
  ahsap: { ad: 'Ahşap', muS: 0.4, muK: 0.3, renk: '#b45309' },
  beton: { ad: 'Beton', muS: 0.6, muK: 0.5, renk: '#94a3b8' },
  lastik: { ad: 'Lastik/asfalt', muS: 0.9, muK: 0.7, renk: '#334155' },
  zimpara: { ad: 'Zımpara', muS: 1.2, muK: 1.0, renk: '#78350f' },
}

function SurtunmeLaboratuvari() {
  const [zemin, setZemin] = useState('ahsap')
  const [kutle, setKutle] = useState(10)
  const [uygulanan, setUygulanan] = useState(20)
  const [egimAcisi, setEgimAcisi] = useState(0)
  const [ozelKatsayi, setOzelKatsayi] = useState(false)
  const [muS, setMuS] = useState(0.4)
  const [muK, setMuK] = useState(0.3)

  const katsayilar = ozelKatsayi
    ? { muS, muK: Math.min(muK, muS) }
    : { muS: ZEMINLER[zemin].muS, muK: ZEMINLER[zemin].muK }

  const sonuc = surtunmeliHareket({
    kutle, uygulanan, muS: katsayilar.muS, muK: katsayilar.muK, g: G_MUFREDAT, aciDerece: egimAcisi,
  })

  // Uygulanan kuvvete karşı sürtünme kuvveti grafiği — statik sürtünmenin
  // "tepki" olduğu, sınıra kadar uygulananla birlikte büyüdüğü buradan görünür.
  const surtunmeGrafigi = useMemo(() => {
    const noktalar = []
    const enBuyuk = Math.max(60, sonuc.statikSinir * 1.8)
    for (let F = 0; F <= enBuyuk; F += enBuyuk / 60) {
      const s = surtunmeliHareket({ kutle, uygulanan: F, muS: katsayilar.muS, muK: katsayilar.muK, g: G_MUFREDAT, aciDerece: egimAcisi })
      noktalar.push({ x: F, y: Math.abs(s.surtunme) })
    }
    return [{ ad: 'Sürtünme kuvveti', renk: 'rgb(var(--fa-vektor))', birim: 'N', veri: noktalar }]
  }, [kutle, katsayilar.muS, katsayilar.muK, egimAcisi, sonuc.statikSinir])

  const SG = 600
  const SY = 300
  const acirad = (egimAcisi * Math.PI) / 180
  const egimUzunluk = 380
  const tabanX = 90
  const tabanY = 230
  const ucX = tabanX + egimUzunluk * Math.cos(acirad)
  const ucY = tabanY - egimUzunluk * Math.sin(acirad)
  // Cisim eğimin ortasında durur
  const cisimT = 0.45
  const cx = tabanX + egimUzunluk * cisimT * Math.cos(acirad)
  const cy = tabanY - egimUzunluk * cisimT * Math.sin(acirad)
  const kuvvetOlcek = 1.1

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={sonuc.hareketVar ? `Cisim ${sayiBicimle(sonuc.ivme, 2)} metre bölü saniyekare ivmeyle hareket ediyor.` : 'Cisim hareket etmiyor; statik sürtünme yetiyor.'}>
            {/* Eğik düzlem */}
            <polygon
              points={`${tabanX},${tabanY} ${ucX},${ucY} ${ucX},${tabanY}`}
              fill={ozelKatsayi ? 'rgb(var(--fa-yuzey-3))' : `${ZEMINLER[zemin].renk}44`}
              stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5"
            />
            <line x1={tabanX} y1={tabanY} x2={ucX} y2={ucY} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="3" />
            {egimAcisi > 1 ? (
              <AciYayi merkezX={ucX} merkezY={tabanY} yaricap={40} baslangicAci={180} bitisAci={180 - egimAcisi} />
            ) : null}

            {/* Cisim */}
            <g transform={`translate(${cx} ${cy}) rotate(${-egimAcisi})`}>
              <rect x="-22" y="-26" width="44" height="26" rx="4"
                fill={sonuc.hareketVar ? 'rgb(var(--fa-vurgu) / 0.4)' : 'rgb(var(--fa-olumlu) / 0.3)'}
                stroke={sonuc.hareketVar ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-olumlu))'} strokeWidth="1.8" />
              <text x="0" y="-9" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="rgb(var(--fa-metin))">{sayiBicimle(kutle, 0)} kg</text>

              {/* Kuvvet vektörleri — eğim doğrultusunda */}
              {uygulanan > 0.5 ? (
                <VektorOku x1={0} y1={-13} x2={uygulanan * kuvvetOlcek} y2={-13} renk="rgb(var(--fa-vurgu))" etiket="F" kalinlik={2.6} />
              ) : null}
              {Math.abs(sonuc.surtunme) > 0.5 ? (
                <VektorOku x1={0} y1={2} x2={sonuc.surtunme * kuvvetOlcek} y2={2} renk="rgb(var(--fa-vektor))" etiket="f" kalinlik={2.6} />
              ) : null}
              {egimAcisi > 1 ? (
                <VektorOku x1={0} y1={-13} x2={-sonuc.egimBileseni * kuvvetOlcek} y2={-13} renk="rgb(var(--fa-hata))" etiket="G·sinθ" kalinlik={2.2} opaklik={0.85} />
              ) : null}
              <VektorOku x1={0} y1={-26} x2={0} y2={-26 - sonuc.normal * kuvvetOlcek * 0.5} renk="rgb(var(--fa-mor))" etiket="N" kalinlik={2.2} opaklik={0.8} />
            </g>

            {/* Zemin */}
            <line x1="20" x2={SG - 20} y1={tabanY} y2={tabanY} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
            <text x={SG - 24} y={tabanY + 20} textAnchor="end" fontSize="11" fill="rgb(var(--fa-metin-3))">
              {ozelKatsayi ? 'Özel katsayılar' : ZEMINLER[zemin].ad} · μs = {sayiBicimle(katsayilar.muS, 2)}, μk = {sayiBicimle(katsayilar.muK, 2)}
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${sonuc.hareketVar ? 'mavi' : 'olumlu'}`}>
              {sonuc.hareketVar ? `Hareket ediyor — a = ${sayiBicimle(sonuc.ivme, 2)} m/s²` : 'Duruyor'}
            </span>
            <span className="fa-rozet vektor">f = {sayiBicimle(Math.abs(sonuc.surtunme), 1)} N</span>
            <span className="fa-rozet">Statik sınır: {sayiBicimle(sonuc.statikSinir, 1)} N</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Normal kuvvet N', deger: sonuc.normal, birim: 'N', tur: 'notr' },
              { ad: 'Statik sınır μs·N', deger: sonuc.statikSinir, birim: 'N', tur: 'notr' },
              { ad: 'Sürtünme kuvveti', deger: Math.abs(sonuc.surtunme), birim: 'N', tur: 'vektor', vurgulu: true },
              { ad: 'Net kuvvet', deger: sonuc.netKuvvet, birim: 'N' },
              { ad: 'İvme', deger: sonuc.ivme, birim: 'm/s²' },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Uygulanan kuvvet – Sürtünme kuvveti"
            xEtiket="Uygulanan F (N)" yEtiket="Sürtünme f (N)"
            seriler={surtunmeGrafigi}
            imlecX={uygulanan}
            yukseklik={175}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Grafiğin ilk kısmı <strong>45°'lik bir doğrudur</strong>: statik sürtünme, uygulanan kuvvet kadar
            büyür. Sınıra ({sayiBicimle(sonuc.statikSinir, 1)} N) gelince kırılır ve kinetik değere
            ({sayiBicimle(sonuc.kinetik, 1)} N) <strong>düşer</strong>. Cismi kımıldatmak, kımıldadıktan sonra
            itmekten daha zordur — bu kırılma tam olarak o deneyimdir.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste
            etiket="Zemin türü"
            deger={zemin} onChange={setZemin}
            secenekler={Object.entries(ZEMINLER).map(([kod, z]) => ({ kod, ad: `${z.ad} (μs=${z.muS})` }))}
          />
          <Kaydirici etiket="Cismin kütlesi" deger={kutle} onChange={setKutle} alt={1} ust={50} adim={1} birim="kg" basamak={0} />
          <Kaydirici etiket="Uygulanan kuvvet" deger={uygulanan} onChange={setUygulanan} alt={0} ust={300} adim={1} birim="N" basamak={0} />
          <Kaydirici etiket="Eğim açısı" deger={egimAcisi} onChange={setEgimAcisi} alt={0} ust={60} adim={1} birim="°" basamak={0}
            ipucu="Açı arttıkça normal kuvvet azalır, eğim bileşeni artar." />
          <Anahtar etiket="Katsayıları elle ayarla" acik={ozelKatsayi} onChange={setOzelKatsayi} />
          {ozelKatsayi ? (
            <>
              <Kaydirici etiket="Statik katsayı μs" deger={muS} onChange={setMuS} alt={0} ust={1.5} adim={0.05} basamak={2} />
              <Kaydirici etiket="Kinetik katsayı μk" deger={muK} onChange={(v) => setMuK(Math.min(v, muS))} alt={0} ust={1.5} adim={0.05} basamak={2}
                ipucu="Kinetik katsayı statikten büyük olamaz; otomatik sınırlanır." />
            </>
          ) : null}
        </div>

        <Not tur={sonuc.hareketVar ? 'bilgi' : 'uyari'} baslik={sonuc.hareketVar ? 'Neden hareket ediyor?' : 'Neden hareket etmiyor?'}>
          {sonuc.hareketVar
            ? `Cismi hareket ettirmeye çalışan kuvvet, statik sürtünmenin sınırını (${sayiBicimle(sonuc.statikSinir, 1)} N) aştı. Hareket başlayınca sürtünme kinetik değere düştü: ${sayiBicimle(sonuc.kinetik, 1)} N.`
            : `Cismi harekete zorlayan kuvvet ${sayiBicimle(Math.abs(uygulanan - sonuc.egimBileseni), 1)} N; statik sürtünmenin dayanabileceği en büyük değer ${sayiBicimle(sonuc.statikSinir, 1)} N. Sürtünme kuvveti şu an μs·N değil, tam olarak ${sayiBicimle(Math.abs(sonuc.surtunme), 1)} N — yani itmene eşit. Statik sürtünme sabit değil, bir tepkidir.`}
        </Not>

        {egimAcisi > 0 && uygulanan === 0 ? (
          <Not tur="bilgi" baslik="Kendi kendine kayar mı?">
            Eğim açısının tanjantı ({sayiBicimle(Math.tan(acirad), 3)}) statik katsayıdan
            ({sayiBicimle(katsayilar.muS, 2)}) {Math.tan(acirad) > katsayilar.muS ? 'büyük olduğu için cisim kendiliğinden kayar.' : 'küçük olduğu için cisim yerinde durur.'}
            {' '}Kritik açı: {sayiBicimle((Math.atan(katsayilar.muS) * 180) / Math.PI, 1)}°.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'hareket-laboratuvari', ad: 'Hareket Laboratuvarı', Bilesen: HareketLaboratuvari },
  { kod: 'kuvvet-masasi', ad: 'Kuvvet Masası', Bilesen: KuvvetMasasi },
  { kod: 'surtunme-laboratuvari', ad: 'Sürtünme Laboratuvarı', Bilesen: SurtunmeLaboratuvari },
]

export default function HareketBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="kuvvet-hareket" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
