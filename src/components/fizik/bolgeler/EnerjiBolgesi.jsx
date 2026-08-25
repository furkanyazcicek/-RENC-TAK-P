import { useMemo, useState } from 'react'
import {
  Anahtar, Grafik, Kaydirici, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
  SimKontrol, VektorOku, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  anlikGuc, egikDuzlemEnerji, guc, is, kinetikEnerji, kuvvetKonumAlani,
  potansiyelEnerji, trenEnerjisi, verim, yayEnerjisi, yaylaFirlatma,
} from '../../../lib/fizik/enerji.js'
import { G_MUFREDAT } from '../../../lib/fizik/hareket.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620
const SY = 320

/**
 * Enerji akış şeması (Sankey benzeri).
 * Her kalemin genişliği enerji miktarıyla orantılıdır; toplam giren
 * enerji, çıkan kalemlerin toplamına **tam olarak** eşittir. Şemanın
 * altında bu denklik sayıyla da gösterilir; "enerji kayboldu" izlenimi
 * hiçbir durumda doğmaz.
 */
function EnerjiAkisi({ girenler, cikanlar, baslik = 'Enerji akışı' }) {
  const toplamGiren = girenler.reduce((t, k) => t + k.deger, 0)
  const toplamCikan = cikanlar.reduce((t, k) => t + k.deger, 0)
  const enBuyuk = Math.max(toplamGiren, toplamCikan, 1e-9)

  const G = 560
  const Y = 200
  const bant = (deger) => Math.max(2, (deger / enBuyuk) * 150)

  let girenY = 25
  const girenKutular = girenler.map((k) => {
    const h = bant(k.deger)
    const kutu = { ...k, y: girenY, h }
    girenY += h + 6
    return kutu
  })

  let cikanY = 25
  const cikanKutular = cikanlar.map((k) => {
    const h = bant(k.deger)
    const kutu = { ...k, y: cikanY, h }
    cikanY += h + 6
    return kutu
  })

  return (
    <div>
      <div className="fa-ust-etiket">{baslik}</div>
      <svg viewBox={`0 0 ${G} ${Y}`} style={{ width: '100%', height: 'auto' }} role="img"
        aria-label={`${baslik}. Giren toplam ${sayiBicimle(toplamGiren, 1)} joule, çıkan toplam ${sayiBicimle(toplamCikan, 1)} joule.`}>
        <text x="70" y="16" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))" fontWeight="700">GİREN</text>
        <text x={G - 70} y="16" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))" fontWeight="700">ÇIKAN</text>

        {/* Akış bantları */}
        {girenKutular.map((gk, gi) => cikanKutular.map((ck, ci) => {
          // Her giren kalem, çıkan kalemlere payı oranında dağıtılır.
          const pay = toplamCikan === 0 ? 0 : (ck.deger / toplamCikan)
          const h = gk.h * pay
          const ustGiren = gk.y + girenKutular.slice(0, 0).length + cikanKutular.slice(0, ci).reduce((t, c) => t + gk.h * (c.deger / (toplamCikan || 1)), 0)
          const ustCikan = ck.y + girenKutular.slice(0, gi).reduce((t, g2) => t + ck.h * (g2.deger / (toplamGiren || 1)), 0)
          const hCikan = ck.h * (toplamGiren === 0 ? 0 : gk.deger / toplamGiren)
          if (h < 0.5) return null
          return (
            <path
              key={`${gk.ad}-${ck.ad}`}
              d={`M 140 ${ustGiren} C 280 ${ustGiren} 280 ${ustCikan} ${G - 140} ${ustCikan}
                  L ${G - 140} ${ustCikan + hCikan} C 280 ${ustCikan + hCikan} 280 ${ustGiren + h} 140 ${ustGiren + h} Z`}
              fill={ck.renk} opacity="0.28"
            />
          )
        }))}

        {/* Giren kutular */}
        {girenKutular.map((k) => (
          <g key={k.ad}>
            <rect x="20" y={k.y} width="120" height={k.h} rx="4" fill={k.renk} opacity="0.85" />
            <text x="80" y={k.y + k.h / 2 + 4} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0b1020">
              {k.h > 16 ? `${sayiBicimle(k.deger, 0)} J` : ''}
            </text>
            <text x="80" y={k.y - 3} textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-2))">{k.ad}</text>
          </g>
        ))}

        {/* Çıkan kutular */}
        {cikanKutular.map((k) => (
          <g key={k.ad}>
            <rect x={G - 140} y={k.y} width="120" height={k.h} rx="4" fill={k.renk} opacity="0.85" />
            <text x={G - 80} y={k.y + k.h / 2 + 4} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#0b1020">
              {k.h > 16 ? `${sayiBicimle(k.deger, 0)} J` : ''}
            </text>
            <text x={G - 80} y={k.y - 3} textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-2))">{k.ad}</text>
          </g>
        ))}
      </svg>

      <div style={{
        display: 'flex', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap',
        fontSize: 12.5, fontFamily: 'ui-monospace, Menlo, monospace', marginTop: 6,
        padding: '8px 10px', borderRadius: 10, background: 'rgb(var(--fa-yuzey-3))',
      }}
      >
        <span style={{ color: 'rgb(var(--fa-metin-2))' }}>
          Giren toplam: <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(toplamGiren, 2)} J</b>
        </span>
        <span style={{ color: 'rgb(var(--fa-metin-2))' }}>
          Çıkan toplam: <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(toplamCikan, 2)} J</b>
        </span>
        <span style={{ color: Math.abs(toplamGiren - toplamCikan) < 0.01 ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-hata))' }}>
          Fark: {sayiBicimle(toplamGiren - toplamCikan, 4)} J
        </span>
      </div>
    </div>
  )
}

/* ═══════════ Deney 1: Enerji Parkuru ═══════════ */

/** Parkur profili: iki tepe ve bir çukurdan oluşan yumuşak eğri. */
function parkurYuksekligi(s, tepe1, tepe2) {
  // s: 0–1 arası parkur boyunca ilerleme
  if (s < 0.35) return tepe1 * (1 - s / 0.35) ** 1.6
  if (s < 0.62) return tepe2 * ((s - 0.35) / 0.27) ** 1.8
  return tepe2 * (1 - (s - 0.62) / 0.38) ** 1.4
}

function EnerjiParkuru() {
  const [kutle, setKutle] = useState(500)
  const [tepe1, setTepe1] = useState(30)
  const [tepe2, setTepe2] = useState(18)
  const [surtunmeVar, setSurtunmeVar] = useState(false)
  const [surtunmeKuvveti, setSurtunmeKuvveti] = useState(400)

  const g = G_MUFREDAT
  const parkurUzunlugu = 220 // metre

  const sim = useSimulasyonZamani({ bitis: 12, dongu: false })

  /* Parkur boyunca enerji dökümü — s'ye göre. */
  const noktalar = useMemo(() => {
    const liste = []
    for (let i = 0; i <= 200; i += 1) {
      const s = i / 200
      const h = parkurYuksekligi(s, tepe1, tepe2)
      const yol = s * parkurUzunlugu
      const e = trenEnerjisi({
        kutle, baslangicYuksekligi: tepe1, noktaYuksekligi: h,
        katEdilenYol: yol, surtunmeKuvveti: surtunmeVar ? surtunmeKuvveti : 0, g,
      })
      liste.push({ s, h, yol, ...e })
    }
    return liste
  }, [kutle, tepe1, tepe2, surtunmeVar, surtunmeKuvveti])

  /** Tren nerede duruyor? Enerji yetmiyorsa orada kalır. */
  const durmaIndeksi = useMemo(() => {
    const i = noktalar.findIndex((n, idx) => idx > 3 && !n.gecebilir)
    return i === -1 ? noktalar.length - 1 : i - 1
  }, [noktalar])

  const ilerlemeOrani = Math.min(1, sim.zaman / 10)
  const aktifIndeks = Math.min(durmaIndeksi, Math.round(ilerlemeOrani * (noktalar.length - 1)))
  const aktif = noktalar[Math.max(0, aktifIndeks)]

  const takildiMi = durmaIndeksi < noktalar.length - 1

  const px = (s) => 30 + s * (SG - 60)
  const enYuksek = Math.max(tepe1, tepe2) * 1.25
  const py = (h) => SY - 55 - (h / enYuksek) * (SY - 100)

  const parkurYol = noktalar.map((n) => `${px(n.s)},${py(n.h)}`).join(' ')

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={`Enerji parkuru. Trenin hızı ${sayiBicimle(aktif.hiz, 1)} metre bölü saniye, yüksekliği ${sayiBicimle(aktif.h, 1)} metre.`}>
            {/* Yükseklik ızgarası */}
            {Array.from({ length: 5 }, (_, i) => {
              const h = (enYuksek * i) / 4
              return (
                <g key={i}>
                  <line x1="28" x2={SG - 24} y1={py(h)} y2={py(h)} stroke="rgb(var(--fa-cizgi))" strokeWidth="0.6" />
                  <text x="24" y={py(h) + 3} textAnchor="end" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(h, 0)}</text>
                </g>
              )
            })}

            {/* Parkur */}
            <polyline points={parkurYol} fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <polyline points={parkurYol} fill="none" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.6" opacity="0.5" />
            <line x1="20" x2={SG - 20} y1={py(0)} y2={py(0)} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />

            {/* Tren */}
            <g>
              <rect x={px(aktif.s) - 13} y={py(aktif.h) - 20} width="26" height="16" rx="3"
                fill="rgb(var(--fa-enerji))" stroke="rgb(var(--fa-metin))" strokeWidth="1" />
              <circle cx={px(aktif.s) - 7} cy={py(aktif.h) - 3} r="3.5" fill="rgb(var(--fa-metin-3))" />
              <circle cx={px(aktif.s) + 7} cy={py(aktif.h) - 3} r="3.5" fill="rgb(var(--fa-metin-3))" />
              {aktif.hiz > 0.5 ? (
                <VektorOku x1={px(aktif.s)} y1={py(aktif.h) - 30} x2={px(aktif.s) + aktif.hiz * 3.2} y2={py(aktif.h) - 30}
                  renk="rgb(var(--fa-olcum))" etiket="v" kalinlik={2.2} />
              ) : null}
            </g>

            {/* Takılma noktası uyarısı */}
            {takildiMi ? (
              <g>
                <line x1={px(noktalar[durmaIndeksi].s)} x2={px(noktalar[durmaIndeksi].s)}
                  y1={py(noktalar[durmaIndeksi].h)} y2={py(0)}
                  stroke="rgb(var(--fa-hata))" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x={px(noktalar[durmaIndeksi].s)} y={py(0) + 18} textAnchor="middle"
                  fontSize="10.5" fontWeight="700" fill="rgb(var(--fa-hata))">
                  Buradan öteye enerji yetmiyor
                </text>
              </g>
            ) : null}

            {/* Enerji sütunları */}
            <g transform={`translate(${SG - 76} 18)`}>
              {[
                { ad: 'Ek', deger: aktif.kinetik, renk: 'rgb(var(--fa-olcum))' },
                { ad: 'Ep', deger: aktif.potansiyel, renk: 'rgb(var(--fa-vurgu))' },
                { ad: 'Isı', deger: aktif.isi, renk: 'rgb(var(--fa-hata))' },
              ].map((k, i) => {
                const tam = aktif.toplamEnerji || 1
                const h = (k.deger / tam) * 110
                return (
                  <g key={k.ad}>
                    <rect x={i * 22} y={110 - h} width="16" height={Math.max(1, h)} rx="2" fill={k.renk} />
                    <text x={i * 22 + 8} y="126" textAnchor="middle" fontSize="9" fill="rgb(var(--fa-metin-3))">{k.ad}</text>
                  </g>
                )
              })}
              <line x1="-4" x2="62" y1="110" y2="110" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1" />
            </g>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet enerji">Toplam: {sayiBicimle(aktif.toplamEnerji / 1000, 1)} kJ</span>
            <span className="fa-rozet olcum">v = {sayiBicimle(aktif.hiz, 1)} m/s</span>
            {surtunmeVar ? <span className="fa-rozet hata">Isı: {sayiBicimle(aktif.isi / 1000, 1)} kJ</span> : null}
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={0.4} />

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Yükseklik', deger: aktif.h, birim: 'm', tur: 'notr' },
              { ad: 'Potansiyel Ep', deger: aktif.potansiyel / 1000, birim: 'kJ', tur: 'enerji' },
              { ad: 'Kinetik Ek', deger: aktif.kinetik / 1000, birim: 'kJ', tur: 'enerji', vurgulu: true },
              { ad: 'Isıya dönüşen', deger: aktif.isi / 1000, birim: 'kJ', tur: 'enerji' },
              { ad: 'Hız', deger: aktif.hiz, birim: 'm/s' },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <EnerjiAkisi
            baslik="Bu anda enerji nerede?"
            girenler={[
              { ad: 'Başlangıç potansiyeli', deger: aktif.toplamEnerji, renk: 'rgb(var(--fa-vurgu))' },
            ]}
            cikanlar={[
              { ad: 'Kinetik enerji', deger: aktif.kinetik, renk: 'rgb(var(--fa-olcum))' },
              { ad: 'Potansiyel enerji', deger: aktif.potansiyel, renk: 'rgb(var(--fa-vurgu))' },
              ...(aktif.isi > 0 ? [{ ad: 'Isı (sürtünme)', deger: aktif.isi, renk: 'rgb(var(--fa-hata))' }] : []),
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Parkur boyunca enerji dağılımı"
            xEtiket="Kat edilen yol (m)" yEtiket="Enerji (kJ)"
            seriler={[
              { ad: 'Potansiyel', renk: 'rgb(var(--fa-vurgu))', birim: 'kJ', veri: noktalar.map((n) => ({ x: n.yol, y: n.potansiyel / 1000 })) },
              { ad: 'Kinetik', renk: 'rgb(var(--fa-olcum))', birim: 'kJ', veri: noktalar.map((n) => ({ x: n.yol, y: n.kinetik / 1000 })) },
              { ad: 'Isı', renk: 'rgb(var(--fa-hata))', birim: 'kJ', veri: noktalar.map((n) => ({ x: n.yol, y: n.isi / 1000 })) },
              { ad: 'Toplam', renk: 'rgb(var(--fa-enerji))', birim: 'kJ', veri: noktalar.map((n) => ({ x: n.yol, y: (n.potansiyel + n.kinetik + n.isi) / 1000 })) },
            ]}
            imlecX={aktif.yol}
            yukseklik={190}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Sarı çizgi (toplam) {surtunmeVar
              ? 'yatay kalıyor: mekanik enerji azalıyor ama ısıyla birlikte toplam korunuyor. Enerji yok olmadı, biçim değiştirdi.'
              : 'tamamen yatay: sürtünme olmadığında mekanik enerji hiç değişmiyor. Potansiyel azaldıkça kinetik tam o kadar artıyor.'}
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Tren kütlesi" deger={kutle} onChange={setKutle} alt={100} ust={2000} adim={50} birim="kg" basamak={0} />
          <Kaydirici etiket="Başlangıç tepesi" deger={tepe1} onChange={setTepe1} alt={5} ust={60} adim={1} birim="m" basamak={0} />
          <Kaydirici etiket="İkinci tepe" deger={tepe2} onChange={setTepe2} alt={2} ust={60} adim={1} birim="m" basamak={0}
            ipucu="İkinci tepeyi birinciden yüksek yaparsan tren aşamaz — enerji yetmez." />
          <Anahtar etiket="Sürtünme var" acik={surtunmeVar} onChange={setSurtunmeVar} />
          {surtunmeVar ? (
            <Kaydirici etiket="Sürtünme kuvveti" deger={surtunmeKuvveti} onChange={setSurtunmeKuvveti} alt={0} ust={2000} adim={50} birim="N" basamak={0} />
          ) : null}
        </div>

        <Not tur={takildiMi ? 'uyari' : 'olumlu'} baslik={takildiMi ? 'Tren takıldı' : 'Tren parkuru tamamlıyor'}>
          {takildiMi
            ? `Trenin başlangıç enerjisi ${sayiBicimle(kutle * g * tepe1 / 1000, 1)} kJ. ${surtunmeVar ? `Sürtünme ${sayiBicimle(noktalar[durmaIndeksi].isi / 1000, 1)} kJ'ünü ısıya çevirdi. ` : ''}Kalan enerji ${sayiBicimle(tepe2, 0)} m'lik tepeyi aşmaya yetmiyor. Ya başlangıç tepesini yükselt ya ikinci tepeyi alçalt${surtunmeVar ? ' ya da sürtünmeyi azalt' : ''}.`
            : `Başlangıç enerjisi (${sayiBicimle(kutle * g * tepe1 / 1000, 1)} kJ) tüm parkur için yeterli. Kütleyi değiştirsen bile sonuç aynı: kütle hem potansiyel hem kinetik enerjide olduğu için sadeleşir.`}
        </Not>

        {surtunmeVar ? (
          <Not tur="bilgi" baslik="Kaybolan enerji nereye gitti?">
            Sürtünme, mekanik enerjiyi <strong>ısıya</strong> çevirir. Yukarıdaki akış şemasında bu kalem
            kırmızıyla görünüyor ve girenle çıkan toplam her zaman eşit kalıyor. Gerçek bir lunaparkta
            bunu ray sıcaklığında hissedersin.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: İş ve Açı ═══════════ */

function IsVeAci() {
  const [kuvvet, setKuvvet] = useState(50)
  const [aciDerece, setAciDerece] = useState(30)
  const [mesafe, setMesafe] = useState(8)
  const [sure, setSure] = useState(4)
  const [degiskenKuvvet, setDegiskenKuvvet] = useState(false)

  const yapilanIs = is(kuvvet, mesafe, aciDerece)
  const gucDegeri = guc(yapilanIs, sure)
  const yatayBilesen = kuvvet * Math.cos((aciDerece * Math.PI) / 180)

  // Değişken kuvvet: konuma göre doğrusal azalan kuvvet — alan hesabı gerekir
  const kuvvetNoktalari = useMemo(() => {
    const n = []
    for (let i = 0; i <= 60; i += 1) {
      const x = (mesafe * i) / 60
      const F = degiskenKuvvet ? yatayBilesen * (1 - (x / mesafe) * 0.7) : yatayBilesen
      n.push({ x, F })
    }
    return n
  }, [mesafe, yatayBilesen, degiskenKuvvet])

  const alanIs = kuvvetKonumAlani(kuvvetNoktalari)

  const gorselAci = (aciDerece * Math.PI) / 180

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 240`} role="img" aria-label={`Kuvvet ${sayiBicimle(aciDerece, 0)} derece açıyla uygulanıyor. Yapılan iş ${sayiBicimle(yapilanIs, 1)} joule.`}>
            <line x1="30" x2={SG - 30} y1="170" y2="170" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />

            {/* Yer değiştirme okunu göster */}
            <VektorOku x1="80" y1="196" x2={80 + mesafe * 40} y2="196" renk="rgb(var(--fa-metin-3))" kalinlik={2} etiket={`Δx = ${sayiBicimle(mesafe, 1)} m`} />

            {/* Cisim */}
            <rect x="60" y="138" width="44" height="32" rx="4" fill="rgb(var(--fa-vurgu) / 0.4)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.8" />

            {/* Uygulanan kuvvet */}
            <VektorOku
              x1="82" y1="154"
              x2={82 + Math.cos(gorselAci) * kuvvet * 2.2}
              y2={154 - Math.sin(gorselAci) * kuvvet * 2.2}
              renk="rgb(var(--fa-vektor))" kalinlik={3} etiket="F"
            />
            {/* Yatay bileşen — işi yapan kısım */}
            <VektorOku x1="82" y1="154" x2={82 + yatayBilesen * 2.2} y2="154"
              renk="rgb(var(--fa-olumlu))" kalinlik={2.2} kesikli etiket="F·cosθ" />
            {/* Düşey bileşen — iş yapmaz */}
            {aciDerece > 1 ? (
              <VektorOku x1={82 + yatayBilesen * 2.2} y1="154"
                x2={82 + Math.cos(gorselAci) * kuvvet * 2.2} y2={154 - Math.sin(gorselAci) * kuvvet * 2.2}
                renk="rgb(var(--fa-metin-3))" kalinlik={1.8} kesikli />
            ) : null}

            <text x="82" y="222" fontSize="11" fill="rgb(var(--fa-metin-2))">
              Açı: {sayiBicimle(aciDerece, 0)}° · cos{sayiBicimle(aciDerece, 0)}° = {sayiBicimle(Math.cos(gorselAci), 3)}
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className={`fa-rozet ${Math.abs(yapilanIs) < 0.01 ? 'uyari' : yapilanIs > 0 ? 'enerji' : 'hata'}`}>
              W = {sayiBicimle(yapilanIs, 1)} J
            </span>
            {Math.abs(aciDerece - 90) < 0.5 ? <span className="fa-rozet uyari">90°: iş sıfır</span> : null}
            {aciDerece > 90 ? <span className="fa-rozet hata">Negatif iş: enerji çekiliyor</span> : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Uygulanan kuvvet', deger: kuvvet, birim: 'N', tur: 'vektor' },
              { ad: 'İşi yapan bileşen', deger: yatayBilesen, birim: 'N', tur: 'vektor' },
              { ad: 'Yapılan iş', deger: yapilanIs, birim: 'J', tur: 'enerji', vurgulu: true },
              { ad: 'Güç', deger: gucDegeri, birim: 'W', tur: 'enerji' },
              { ad: 'Anlık güç (v = Δx/t)', deger: anlikGuc(kuvvet, mesafe / sure, aciDerece), birim: 'W', tur: 'enerji' },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Kuvvet – Konum: altındaki alan yapılan iştir"
            xEtiket="Konum (m)" yEtiket="Kuvvet (N)"
            seriler={[{ ad: 'F(x)', renk: 'rgb(var(--fa-vektor))', birim: 'N', veri: kuvvetNoktalari.map((n) => ({ x: n.x, y: n.F })) }]}
            alanGoster
            yukseklik={175}
          />
          <div style={{ marginTop: 8, fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12.5, color: 'rgb(var(--fa-metin-2))' }}>
            Grafik altındaki alan = <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(alanIs, 2)} J</b>
            {!degiskenKuvvet ? <> · Formülle W = F·Δx·cosθ = <b style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(yapilanIs, 2)} J</b></> : null}
          </div>
          {degiskenKuvvet ? (
            <div style={{ marginTop: 10 }}>
              <Not tur="bilgi" baslik="Değişken kuvvette formül yetmez">
                Kuvvet sabit olmadığı için W = F·Δx yazılamaz. Tek yol grafiğin altındaki alanı hesaplamaktır.
                Bu, alanın neden bu kadar önemli bir araç olduğunu gösterir.
              </Not>
            </div>
          ) : null}
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Kuvvet" deger={kuvvet} onChange={setKuvvet} alt={0} ust={100} adim={1} birim="N" basamak={0} renk="vektor" />
          <Kaydirici etiket="Kuvvet–yer değiştirme açısı" deger={aciDerece} onChange={setAciDerece} alt={0} ust={180} adim={1} birim="°" basamak={0}
            ipucu="90°'de iş sıfır; 90°'nin üstünde iş negatif olur." />
          <Kaydirici etiket="Yer değiştirme" deger={mesafe} onChange={setMesafe} alt={1} ust={12} adim={0.5} birim="m" basamak={1} />
          <Kaydirici etiket="Geçen süre" deger={sure} onChange={setSure} alt={0.5} ust={20} adim={0.5} birim="s" basamak={1}
            ipucu="Aynı işi kısa sürede yapmak gücü büyütür; işi değiştirmez." />
          <Anahtar etiket="Kuvvet konuma göre değişsin" acik={degiskenKuvvet} onChange={setDegiskenKuvvet} />
        </div>

        <Not tur={Math.abs(aciDerece - 90) < 1 ? 'uyari' : 'bilgi'} baslik={
          Math.abs(aciDerece - 90) < 1 ? 'Kuvvet var, iş yok'
            : aciDerece > 90 ? 'İş neden negatif?' : 'Açı işi nasıl etkiliyor?'
        }>
          {Math.abs(aciDerece - 90) < 1
            ? 'Kuvvet yer değiştirmeye tam dik. cos90° = 0 olduğu için iş sıfırdır. Ağır bir çantayı elinde tutup yatay yürüdüğünde ağırlığa karşı yaptığın iş de tam olarak budur: sıfır.'
            : aciDerece > 90
              ? 'Kuvvetin hareket yönündeki bileşeni geriye bakıyor. Bu durumda kuvvet cisimden enerji çeker, ona enerji vermez. Sürtünme kuvveti daima böyle davranır.'
              : `Kuvvetin yalnızca hareket yönündeki bileşeni (${sayiBicimle(yatayBilesen, 1)} N) iş yapar. Düşey bileşen cismi yere bastırır veya kaldırır ama yatay hareket boyunca iş yapmaz.`}
        </Not>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Güç karşılaştırması</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Süre</th><th style={{ textAlign: 'right' }}>İş (J)</th><th style={{ textAlign: 'right' }}>Güç (W)</th></tr></thead>
              <tbody>
                {[1, 2, 5, 10].map((s) => (
                  <tr key={s}>
                    <td>{s} s</td>
                    <td className="sayi">{sayiBicimle(yapilanIs, 1)}</td>
                    <td className="sayi" style={{ color: 'rgb(var(--fa-enerji))' }}>{sayiBicimle(guc(yapilanIs, s), 1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            İş sütunu hiç değişmiyor, güç sütunu değişiyor. İkisi farklı büyüklüklerdir.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Yay Fırlatıcı ═══════════ */

function YayFirlatici() {
  const [yaySabiti, setYaySabiti] = useState(800)
  const [sikismaCm, setSikismaCm] = useState(20)
  const [kutle, setKutle] = useState(2)
  const [surtunmeVar, setSurtunmeVar] = useState(false)
  const [surtunmeKuvveti, setSurtunmeKuvveti] = useState(4)
  const [mesafe, setMesafe] = useState(3)

  const sikisma = sikismaCm / 100
  const sonuc = yaylaFirlatma({
    yaySabiti, sikisma, kutle,
    surtunmeKuvveti: surtunmeVar ? surtunmeKuvveti : 0,
    mesafe: surtunmeVar ? mesafe : 0,
  })

  const yayNoktalari = useMemo(() => {
    const n = []
    for (let i = 0; i <= 40; i += 1) {
      const x = (sikisma * i) / 40
      n.push({ x: x * 100, F: yaySabiti * x })
    }
    return n
  }, [sikisma, yaySabiti])

  const YG = 600
  const YY = 210
  const yaySikisikBoyu = 150 - sikismaCm * 3

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${YG} ${YY}`} role="img" aria-label={`Yay ${sayiBicimle(sikismaCm, 0)} santimetre sıkışmış. Fırlatma hızı ${sayiBicimle(sonuc.firlatmaHizi, 2)} metre bölü saniye.`}>
            <line x1="20" x2={YG - 20} y1="150" y2="150" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />
            {/* Duvar */}
            <rect x="26" y="70" width="12" height="80" fill="rgb(var(--fa-cizgi-guclu))" />

            {/* Yay — sıkışma arttıkça sarımlar sıklaşır */}
            {(() => {
              const sarim = 10
              const bas = 38
              const boy = Math.max(20, yaySikisikBoyu)
              const adim = boy / sarim
              const yol = [`M ${bas} 110`]
              for (let i = 0; i < sarim; i += 1) {
                yol.push(`L ${bas + adim * (i + 0.5)} ${i % 2 === 0 ? 88 : 132}`)
              }
              yol.push(`L ${bas + boy} 110`)
              return <path d={yol.join(' ')} fill="none" stroke="rgb(var(--fa-mor))" strokeWidth="3" strokeLinejoin="round" />
            })()}

            {/* Cisim */}
            <rect x={38 + Math.max(20, yaySikisikBoyu)} y="88" width="40" height="44" rx="4"
              fill="rgb(var(--fa-vurgu) / 0.4)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.8" />
            <text x={38 + Math.max(20, yaySikisikBoyu) + 20} y="114" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-metin))">
              {sayiBicimle(kutle, 1)}kg
            </text>

            {/* Fırlatma hızı */}
            {sonuc.firlatmaHizi > 0.1 ? (
              <VektorOku
                x1={38 + Math.max(20, yaySikisikBoyu) + 44} y1="110"
                x2={38 + Math.max(20, yaySikisikBoyu) + 44 + sonuc.firlatmaHizi * 14} y2="110"
                renk="rgb(var(--fa-olcum))" kalinlik={3} etiket={`${sayiBicimle(sonuc.firlatmaHizi, 1)} m/s`}
              />
            ) : null}

            {/* Sürtünmeli bölge */}
            {surtunmeVar ? (
              <>
                <rect x={38 + Math.max(20, yaySikisikBoyu) + 44} y="150" width={mesafe * 55} height="8"
                  fill="rgb(var(--fa-hata) / 0.35)" />
                <text x={38 + Math.max(20, yaySikisikBoyu) + 44 + (mesafe * 55) / 2} y="176" textAnchor="middle"
                  fontSize="10.5" fill="rgb(var(--fa-hata))">
                  sürtünmeli bölge · {sayiBicimle(mesafe, 1)} m
                </text>
              </>
            ) : null}

            <text x="30" y="60" fontSize="10.5" fill="rgb(var(--fa-metin-3))">Sıkışma: {sayiBicimle(sikismaCm, 0)} cm</text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet enerji">Yay enerjisi: {sayiBicimle(sonuc.yayEnerjisi, 1)} J</span>
            <span className="fa-rozet olcum">v = {sayiBicimle(sonuc.firlatmaHizi, 2)} m/s</span>
            {sonuc.verim !== null ? <span className="fa-rozet">Verim: %{sayiBicimle(sonuc.verim, 1)}</span> : null}
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Yay enerjisi ½kx²', deger: sonuc.yayEnerjisi, birim: 'J', tur: 'enerji', vurgulu: true },
              { ad: 'Isıya dönüşen', deger: sonuc.isiyaDonusen, birim: 'J', tur: 'enerji' },
              { ad: 'Kinetik enerji', deger: sonuc.kinetikEnerji, birim: 'J', tur: 'enerji' },
              { ad: 'Fırlatma hızı', deger: sonuc.firlatmaHizi, birim: 'm/s' },
              { ad: 'Verim', deger: sonuc.verim ?? 0, birim: '%', tur: 'notr', basamak: 1 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <EnerjiAkisi
            girenler={[{ ad: 'Yayda depolanan', deger: sonuc.yayEnerjisi, renk: 'rgb(var(--fa-mor))' }]}
            cikanlar={[
              { ad: 'Kinetik enerji', deger: sonuc.kinetikEnerji, renk: 'rgb(var(--fa-olcum))' },
              ...(sonuc.isiyaDonusen > 0 ? [{ ad: 'Isı (sürtünme)', deger: sonuc.isiyaDonusen, renk: 'rgb(var(--fa-hata))' }] : []),
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Yay kuvveti – Sıkışma: alan depolanan enerjidir"
            xEtiket="Sıkışma (cm)" yEtiket="Kuvvet (N)"
            seriler={[{ ad: 'F = k·x', renk: 'rgb(var(--fa-mor))', birim: 'N', veri: yayNoktalari.map((n) => ({ x: n.x, y: n.F })) }]}
            alanGoster
            yukseklik={170}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Doğrunun altındaki üçgenin alanı = ½·taban·yükseklik = ½·x·(k·x) = <strong>½kx²</strong>.
            Formül ezberlenmesi gereken bir şey değil; grafikteki üçgenin alanından çıkıyor.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="Yay sabiti k" deger={yaySabiti} onChange={setYaySabiti} alt={100} ust={3000} adim={50} birim="N/m" basamak={0} />
          <Kaydirici etiket="Sıkışma miktarı" deger={sikismaCm} onChange={setSikismaCm} alt={0} ust={40} adim={1} birim="cm" basamak={0}
            ipucu="Sıkışmayı iki katına çıkarırsan enerji DÖRT katına çıkar (kareyle orantılı)." />
          <Kaydirici etiket="Cismin kütlesi" deger={kutle} onChange={setKutle} alt={0.2} ust={10} adim={0.1} birim="kg" basamak={1} />
          <Anahtar etiket="Sürtünmeli bölge ekle" acik={surtunmeVar} onChange={setSurtunmeVar} />
          {surtunmeVar ? (
            <>
              <Kaydirici etiket="Sürtünme kuvveti" deger={surtunmeKuvveti} onChange={setSurtunmeKuvveti} alt={0} ust={40} adim={0.5} birim="N" basamak={1} />
              <Kaydirici etiket="Sürtünmeli bölge uzunluğu" deger={mesafe} onChange={setMesafe} alt={0} ust={8} adim={0.5} birim="m" basamak={1} />
            </>
          ) : null}
        </div>

        <Not tur="bilgi" baslik="Enerji hep aynı yolu izliyor">
          Elastik potansiyel enerji (½kx²) → kinetik enerji (½mv²)
          {surtunmeVar ? ' → bir kısmı ısı' : ''}. Kütleyi artırırsan enerji değişmez ama hız düşer:
          aynı enerji daha ağır bir cismi daha yavaş fırlatır (v = √(2E/m)).
        </Not>

        {sonuc.kinetikEnerji === 0 && sonuc.yayEnerjisi > 0 ? (
          <Not tur="uyari" baslik="Cisim çıkamadı">
            Sürtünmenin harcadığı enerji ({sayiBicimle(surtunmeKuvveti * mesafe, 1)} J), yayın verdiği
            enerjiden ({sayiBicimle(sonuc.yayEnerjisi, 1)} J) büyük. Cisim sürtünmeli bölgeyi geçemeden durur.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'enerji-parkuru', ad: 'Enerji Parkuru', Bilesen: EnerjiParkuru },
  { kod: 'is-acisi', ad: 'İş ve Açı', Bilesen: IsVeAci },
  { kod: 'yay-firlatici', ad: 'Yay Fırlatıcı', Bilesen: YayFirlatici },
]

export default function EnerjiBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="enerji" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
