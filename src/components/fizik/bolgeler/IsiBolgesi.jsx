import { useMemo, useState } from 'react'
import { Flame, Plus, Trash2 } from 'lucide-react'
import {
  Anahtar, Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, SimKontrol, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  GENLESME_KATSAYILARI, MADDE_ISI, bimetal, boycaGenlesme, hacimceGenlesme,
  isi, isilDenge, isinmaEgrisi, yuzeyceGenlesme,
} from '../../../lib/fizik/isi.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 600

/* ═══════════ Deney 1: Kalorimetre ═══════════ */

function Kalorimetre() {
  const [cisimler, setCisimler] = useState([
    { id: 1, maddeKod: 'su', kutle: 1, sicaklik: 80 },
    { id: 2, maddeKod: 'su', kutle: 2, sicaklik: 20 },
  ])
  const [tahmin, setTahmin] = useState('')
  const [karistirildi, setKaristirildi] = useState(false)

  const veriler = cisimler.map((c) => ({
    ...c,
    ozIsi: MADDE_ISI[c.maddeKod].ozIsi,
    ad: MADDE_ISI[c.maddeKod].ad,
    renk: MADDE_ISI[c.maddeKod].renk,
  }))
  const sonuc = isilDenge(veriler)

  const enDusuk = Math.min(...cisimler.map((c) => c.sicaklik))
  const enYuksek = Math.max(...cisimler.map((c) => c.sicaklik))
  const tahminSayi = Number(tahmin.replace(',', '.'))
  const tahminGecerli = tahmin !== '' && !Number.isNaN(tahminSayi)
  const tahminFarki = tahminGecerli && sonuc ? Math.abs(tahminSayi - sonuc.dengeSicakligi) : null

  const guncelle = (id, alan, deger) => {
    setCisimler((e) => e.map((c) => (c.id === id ? { ...c, [alan]: deger } : c)))
    setKaristirildi(false)
  }
  const ekle = () => {
    if (cisimler.length >= 4) return
    setCisimler((e) => [...e, { id: Date.now(), maddeKod: 'su', kutle: 1, sicaklik: 50 }])
    setKaristirildi(false)
  }
  const sil = (id) => {
    if (cisimler.length <= 2) return
    setCisimler((e) => e.filter((c) => c.id !== id))
    setKaristirildi(false)
  }

  const sicaklikOran = (t) => {
    const alt = Math.min(enDusuk, 0)
    const ust = Math.max(enYuksek, 100)
    return (t - alt) / (ust - alt)
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 300`} role="img" aria-label={`Kalorimetre. Denge sıcaklığı ${sayiBicimle(sonuc?.dengeSicakligi ?? 0, 1)} santigrat derece.`}>
            {/* Kaplar */}
            {veriler.map((c, i) => {
              const x = 40 + i * (karistirildi ? 0 : 130)
              const gen = 100
              const dolu = Math.min(80, c.kutle * 26)
              const sicaklikT = karistirildi ? sonuc.dengeSicakligi : c.sicaklik
              const sicak = sicaklikOran(sicaklikT)
              if (karistirildi && i > 0) return null
              const gosterilecekKutle = karistirildi ? veriler.reduce((t, v) => t + v.kutle, 0) : c.kutle
              const gercekDolu = karistirildi ? Math.min(140, gosterilecekKutle * 26) : dolu
              const gercekGen = karistirildi ? 230 : gen
              const gercekX = karistirildi ? SG / 2 - 115 : x
              return (
                <g key={c.id}>
                  <rect x={gercekX} y={70} width={gercekGen} height={160} rx="6" fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2" />
                  <rect x={gercekX + 3} y={230 - gercekDolu} width={gercekGen - 6} height={gercekDolu}
                    fill={`color-mix(in srgb, #f87171 ${sicak * 100}%, #38bdf8)`} opacity="0.65" />
                  {/* Tanecik hareketi: sıcak olan daha yayılmış */}
                  {Array.from({ length: 14 }, (_, k) => {
                    const tx = gercekX + 12 + ((k * 37) % (gercekGen - 24))
                    const ty = 230 - gercekDolu + 8 + ((k * 53) % Math.max(10, gercekDolu - 16))
                    return <circle key={k} cx={tx} cy={ty} r={1.4 + sicak * 1.6} fill="rgb(var(--fa-metin))" opacity={0.25 + sicak * 0.4} />
                  })}
                  <text x={gercekX + gercekGen / 2} y={58} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-metin))">
                    {karistirildi ? 'Karışım' : c.ad}
                  </text>
                  <text x={gercekX + gercekGen / 2} y={252} textAnchor="middle" fontSize="12.5" fontWeight="700"
                    fill={sicak > 0.5 ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}>
                    {sayiBicimle(sicaklikT, 1)} °C
                  </text>
                  <text x={gercekX + gercekGen / 2} y={270} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
                    {sayiBicimle(gosterilecekKutle, 2)} kg
                  </text>
                </g>
              )
            })}

            {/* Isı akış okları */}
            {!karistirildi && sonuc ? veriler.map((c, i) => {
              const yon = sonuc.dengeSicakligi > c.sicaklik ? 'alacak' : sonuc.dengeSicakligi < c.sicaklik ? 'verecek' : 'aynı'
              if (yon === 'aynı') return null
              const x = 40 + i * 130 + 50
              return (
                <text key={`ok-${c.id}`} x={x} y={30} textAnchor="middle" fontSize="10.5" fontWeight="600"
                  fill={yon === 'verecek' ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-vurgu))'}>
                  {yon === 'verecek' ? '↓ ısı verecek' : '↑ ısı alacak'}
                </text>
              )
            }) : null}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">Denge: {sayiBicimle(sonuc?.dengeSicakligi ?? 0, 2)} °C</span>
            <span className="fa-rozet">Aralık: {sayiBicimle(enDusuk, 0)} – {sayiBicimle(enYuksek, 0)} °C</span>
          </div>
        </div>

        <div className="fa-kontrol">
          <button type="button" className="fa-dugme birincil" onClick={() => setKaristirildi(true)} disabled={karistirildi}>
            <Flame size={15} /> Karıştır
          </button>
          <button type="button" className="fa-dugme" onClick={() => setKaristirildi(false)}>Ayır</button>
          <input
            className="fa-kaydirici-sayi"
            style={{ width: 96, marginLeft: 'auto' }}
            type="text"
            placeholder="Tahminin"
            value={tahmin}
            onChange={(e) => setTahmin(e.target.value)}
            aria-label="Denge sıcaklığı tahminin (°C)"
          />
          <span style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))' }}>°C</span>
        </div>

        {tahminGecerli && karistirildi ? (
          <div style={{ marginTop: 10 }}>
            <Not tur={tahminFarki < 2 ? 'olumlu' : 'uyari'} baslik={tahminFarki < 2 ? 'Tahminin çok yakın' : `Tahminin ${sayiBicimle(tahminFarki, 1)} °C saptı`}>
              Tahminin {sayiBicimle(tahminSayi, 1)} °C, gerçek denge {sayiBicimle(sonuc.dengeSicakligi, 2)} °C.
              {' '}Denge sıcaklığı basit ortalama değildir; her cismin <strong>kütlesi ve öz ısısı</strong> ağırlık olarak
              işe girer. Kütlesi büyük olan taraf sonucu kendine daha çok çeker.
            </Not>
          </div>
        ) : null}

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik="Isı alışverişi"
            olcumler={[
              { ad: 'Denge sıcaklığı', deger: sonuc?.dengeSicakligi ?? 0, birim: '°C', vurgulu: true },
              ...(sonuc?.ayrinti ?? []).slice(0, 3).map((a, i) => ({
                ad: `${a.ad} ${i + 1} ${a.yon}`,
                deger: Math.abs(a.alinanIsi) / 1000,
                birim: 'kJ',
                tur: a.yon === 'aldı' ? 'olcum' : 'vektor',
              })),
              { ad: 'Toplam ısı dengesi', deger: sonuc?.isiDengesi ?? 0, birim: 'J', tur: 'notr', basamak: 6 },
            ]}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            En sağdaki kalem <strong>sıfır</strong> olmalıdır: alınan ısı verilen ısıya eşittir, enerji korunur.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        {cisimler.map((c, i) => (
          <div className="fa-kart dar" key={c.id}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong style={{ fontSize: 13.5 }}>{i + 1}. madde</strong>
              {cisimler.length > 2 ? (
                <button type="button" className="fa-dugme sade kucuk" onClick={() => sil(c.id)} aria-label="Maddeyi çıkar">
                  <Trash2 size={13} />
                </button>
              ) : null}
            </div>
            <Liste etiket="Madde" deger={c.maddeKod} onChange={(v) => guncelle(c.id, 'maddeKod', v)}
              secenekler={Object.entries(MADDE_ISI).map(([kod, m]) => ({ kod, ad: `${m.ad} (c=${m.ozIsi})` }))} />
            <Kaydirici etiket="Kütle" deger={c.kutle} onChange={(v) => guncelle(c.id, 'kutle', v)} alt={0.1} ust={10} adim={0.1} birim="kg" basamak={1} />
            <Kaydirici etiket="Sıcaklık" deger={c.sicaklik} onChange={(v) => guncelle(c.id, 'sicaklik', v)} alt={-20} ust={200} adim={1} birim="°C" basamak={0} />
          </div>
        ))}
        <button type="button" className="fa-dugme" onClick={ekle} disabled={cisimler.length >= 4}>
          <Plus size={15} /> Madde ekle
        </button>

        <Not tur="bilgi" baslik="Öz ısı ne anlatıyor?">
          Suyun öz ısısı (4180 J/kg·°C) demirinkinin (450) yaklaşık <strong>dokuz katıdır</strong>. Aynı kütlede
          su ve demiri aynı sıcaklığa getirmek için suya dokuz kat fazla enerji gerekir. Bu yüzden deniz geç
          ısınır, geç soğur. Listeden demiri seçip denge sıcaklığının nasıl kaydığını gör.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Isınma Eğrisi ═══════════ */

function IsinmaEgrisi() {
  const [maddeKod, setMaddeKod] = useState('su')
  const [kutle, setKutle] = useState(0.1)
  const [baslangic, setBaslangic] = useState(-20)
  const [isiticiGucu, setIsiticiGucu] = useState(500)

  const madde = MADDE_ISI[maddeKod]
  // Tüm aşamaların görünmesi için gereken süreyi kaba olarak hesapla.
  const toplamGerekenIsi = kutle * ((madde.katiOzIsi ?? madde.ozIsi * 0.5) * Math.max(0, madde.erimeSicakligi - baslangic)
    + madde.erimeIsisi + madde.ozIsi * (madde.kaynamaSicakligi - madde.erimeSicakligi) + madde.buharlasmaIsisi * 1.05)
  const sure = Math.max(20, toplamGerekenIsi / isiticiGucu)

  const egri = useMemo(
    () => isinmaEgrisi({ maddeKod, kutle, baslangicSicakligi: baslangic, isiticiGucu, sure, adim: 400 }),
    [maddeKod, kutle, baslangic, isiticiGucu, sure],
  )

  const sim = useSimulasyonZamani({ bitis: sure })
  const t = Math.min(sim.zaman, sure)
  const aktif = egri.noktalar.find((n) => n.t >= t) ?? egri.noktalar[egri.noktalar.length - 1]

  const HAL_ADLARI = { kati: 'Katı', erime: 'Erime (katı + sıvı bir arada)', sivi: 'Sıvı', kaynama: 'Kaynama (sıvı + gaz bir arada)', gaz: 'Gaz' }
  const HAL_RENKLERI = { kati: '#60a5fa', erime: '#a78bfa', sivi: '#38bdf8', kaynama: '#fb923c', gaz: '#f87171' }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 260`} role="img" aria-label={`Isınma deneyi. Şu an ${HAL_ADLARI[aktif.hal]}, sıcaklık ${sayiBicimle(aktif.sicaklik, 1)} santigrat derece.`}>
            {/* Kap */}
            <rect x="200" y="60" width="200" height="140" rx="8" fill="none" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />
            <rect x="204" y="100" width="192" height="96" fill={HAL_RENKLERI[aktif.hal]} opacity="0.28" />

            {/* Tanecik gösterimi: hâle göre dizilim */}
            {(() => {
              const sayi = aktif.hal === 'gaz' ? 16 : aktif.hal === 'kati' ? 24 : 20
              return Array.from({ length: sayi }, (_, i) => {
                let cx; let cy; let r = 4
                if (aktif.hal === 'kati') {
                  // Düzenli örgü, yerinde titreşim
                  cx = 220 + (i % 6) * 30
                  cy = 120 + Math.floor(i / 6) * 24
                } else if (aktif.hal === 'gaz') {
                  // Dağınık, geniş aralıklı
                  cx = 212 + ((i * 71) % 176)
                  cy = 70 + ((i * 47) % 120)
                  r = 3.4
                } else {
                  // Sıvı: temas hâlinde ama düzensiz
                  cx = 214 + ((i * 43) % 172)
                  cy = 112 + ((i * 29) % 78)
                }
                return <circle key={i} cx={cx} cy={cy} r={r} fill="rgb(var(--fa-metin))" opacity={aktif.hal === 'gaz' ? 0.45 : 0.6} />
              })
            })()}

            {/* Isıtıcı */}
            <rect x="240" y="204" width="120" height="14" rx="4" fill="rgb(var(--fa-hata) / 0.6)" />
            {Array.from({ length: 5 }, (_, i) => (
              <path key={i} d={`M ${256 + i * 24} 204 q 4 -8 0 -14 q -4 -6 0 -12`}
                fill="none" stroke="rgb(var(--fa-uyari))" strokeWidth="2" opacity="0.75" />
            ))}
            <text x="300" y="236" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
              Isıtıcı: {sayiBicimle(isiticiGucu, 0)} W
            </text>

            {/* Termometre */}
            <rect x="120" y="50" width="16" height="160" rx="8" fill="rgb(var(--fa-yuzey-3))" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.5" />
            {(() => {
              const alt = Math.min(baslangic, 0)
              const ust = madde.kaynamaSicakligi * 1.15
              const oran = Math.max(0, Math.min(1, (aktif.sicaklik - alt) / (ust - alt)))
              return <rect x="123" y={207 - oran * 154} width="10" height={oran * 154 + 3} rx="5" fill="rgb(var(--fa-hata))" />
            })()}
            <text x="128" y="42" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-hata))">
              {sayiBicimle(aktif.sicaklik, 1)}°
            </text>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet" style={{ background: `${HAL_RENKLERI[aktif.hal]}30`, color: HAL_RENKLERI[aktif.hal], borderColor: `${HAL_RENKLERI[aktif.hal]}55` }}>
              {HAL_ADLARI[aktif.hal]}
            </span>
            <span className="fa-rozet olcum">{sayiBicimle(aktif.sicaklik, 1)} °C</span>
            <span className="fa-rozet enerji">Verilen ısı: {sayiBicimle(aktif.q / 1000, 1)} kJ</span>
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={sure / 40} />

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Isınma eğrisi: verilen ısıya karşı sıcaklık"
            xEtiket="Verilen ısı (kJ)" yEtiket="Sıcaklık (°C)"
            seriler={[{ ad: 'Sıcaklık', renk: 'rgb(var(--fa-hata))', birim: '°C', veri: egri.noktalar.map((n) => ({ x: n.q / 1000, y: n.sicaklik })) }]}
            imlecX={aktif.q / 1000}
            yukseklik={200}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            İki <strong>yatay plato</strong> görüyorsun: erime ve kaynama. Bu bölgelerde ısı verilmeye devam
            ediyor ama sıcaklık kımıldamıyor — çünkü enerji, taneciklerin hızını artırmak yerine aralarındaki
            bağları koparmakta kullanılıyor. Kaynama platosu erime platosundan çok daha uzundur; suyu
            buharlaştırmak eritmekten yaklaşık yedi kat fazla enerji ister.
          </p>
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Aşamalar ve gereken enerji</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Aşama</th><th>Sıcaklık</th><th style={{ textAlign: 'right' }}>Gereken ısı (kJ)</th><th style={{ textAlign: 'right' }}>Süre (s)</th></tr></thead>
              <tbody>
                {egri.asamalar.filter((a) => Number.isFinite(a.bitisQ)).map((a) => (
                  <tr key={a.ad} style={aktif.asama === a.ad ? { background: 'rgb(var(--fa-vurgu) / 0.12)' } : undefined}>
                    <td style={{ fontWeight: 600 }}>{a.ad}</td>
                    <td>{a.tBas === a.tBit ? `${sayiBicimle(a.tBas, 0)} °C sabit` : `${sayiBicimle(a.tBas, 0)} → ${sayiBicimle(a.tBit, 0)} °C`}</td>
                    <td className="sayi">{sayiBicimle((a.bitisQ - a.baslangicQ) / 1000, 1)}</td>
                    <td className="sayi">{sayiBicimle((a.bitisQ - a.baslangicQ) / isiticiGucu, 1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste etiket="Madde" deger={maddeKod} onChange={setMaddeKod}
            secenekler={Object.entries(MADDE_ISI).map(([kod, m]) => ({ kod, ad: m.ad }))} />
          <Kaydirici etiket="Kütle" deger={kutle} onChange={setKutle} alt={0.02} ust={1} adim={0.02} birim="kg" basamak={2} />
          <Kaydirici etiket="Başlangıç sıcaklığı" deger={baslangic} onChange={setBaslangic}
            alt={Math.min(-40, madde.erimeSicakligi - 50)} ust={madde.erimeSicakligi} adim={1} birim="°C" basamak={0} />
          <Kaydirici etiket="Isıtıcı gücü" deger={isiticiGucu} onChange={setIsiticiGucu} alt={100} ust={5000} adim={100} birim="W" basamak={0}
            ipucu="Güç arttıkça aynı grafik daha kısa sürede çizilir; platoların BOYU değişmez." />
        </div>

        <Not tur="bilgi" baslik="Isı ile sıcaklık aynı şey değil">
          <strong>Sıcaklık</strong> taneciklerin ortalama kinetik enerjisinin ölçüsüdür (bir durum).
          <strong> Isı</strong> ise sıcaklık farkı yüzünden aktarılan enerjidir (bir süreç). Grafiğin
          yatay eksende ısı, düşey eksende sıcaklık göstermesi tesadüf değil — ikisi ayrı büyüklüklerdir
          ve birimleri bile farklıdır (J ve °C).
        </Not>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">{madde.ad} verileri</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <tbody>
                <tr><td>Öz ısı (sıvı)</td><td className="sayi">{madde.ozIsi} J/kg·°C</td></tr>
                <tr><td>Erime sıcaklığı</td><td className="sayi">{madde.erimeSicakligi} °C</td></tr>
                <tr><td>Kaynama sıcaklığı</td><td className="sayi">{madde.kaynamaSicakligi} °C</td></tr>
                <tr><td>Erime ısısı</td><td className="sayi">{sayiBicimle(madde.erimeIsisi / 1000, 0)} kJ/kg</td></tr>
                <tr><td>Buharlaşma ısısı</td><td className="sayi">{sayiBicimle(madde.buharlasmaIsisi / 1000, 0)} kJ/kg</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Genleşme Tezgâhı ═══════════ */

function GenlesmeTezgahi() {
  const [deneyTuru, setDeneyTuru] = useState('cubuk')
  const [metal, setMetal] = useState('aluminyum')
  const [ikinciMetal, setIkinciMetal] = useState('demir')
  const [uzunluk, setUzunluk] = useState(1)
  const [deltaT, setDeltaT] = useState(100)
  const [abartiliGoster, setAbartiliGoster] = useState(true)

  const m = GENLESME_KATSAYILARI[metal]
  const uzama = boycaGenlesme(uzunluk, m.lambda, deltaT)
  const alanArtisi = yuzeyceGenlesme(uzunluk * uzunluk, m.lambda, deltaT)
  const hacimArtisi = hacimceGenlesme(uzunluk ** 3, m.lambda, deltaT)
  const bm = bimetal({ ustKod: metal, altKod: ikinciMetal, uzunluk, deltaT })

  // Gerçek genleşme gözle görülmez (binde bir); öğrenci görebilsin diye
  // bilinçli olarak abartılır ve bu açıkça yazılır.
  const abarti = abartiliGoster ? 900 : 1
  const gorselUzama = Math.min(140, uzama * abarti * 100)

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} 280`} role="img" aria-label={`Genleşme deneyi. ${sayiBicimle(deltaT, 0)} derece ısınmada uzama ${sayiBicimle(uzama * 1000, 3)} milimetre.`}>
            {deneyTuru === 'cubuk' ? (
              <>
                <text x="40" y="50" fontSize="11.5" fill="rgb(var(--fa-metin-3))">Soğuk (başlangıç)</text>
                <rect x="40" y="60" width="300" height="22" rx="3" fill={m.renk} opacity="0.55" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1" />
                <line x1="40" x2="40" y1="52" y2="180" stroke="rgb(var(--fa-cizgi))" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="340" x2="340" y1="52" y2="180" stroke="rgb(var(--fa-cizgi))" strokeWidth="1" strokeDasharray="3 3" />

                <text x="40" y="128" fontSize="11.5" fill="rgb(var(--fa-hata))">Isıtılmış (+{sayiBicimle(deltaT, 0)} °C)</text>
                <rect x="40" y="138" width={300 + gorselUzama} height="22" rx="3" fill={m.renk} opacity="0.85" stroke="rgb(var(--fa-hata))" strokeWidth="1.5" />
                <line x1={340 + gorselUzama} x2={340 + gorselUzama} y1="130" y2="180" stroke="rgb(var(--fa-hata))" strokeWidth="1.5" />

                {/* Uzama ölçüsü */}
                <line x1="340" x2={340 + gorselUzama} y1="192" y2="192" stroke="rgb(var(--fa-olcum))" strokeWidth="2" />
                <text x={340 + gorselUzama / 2} y="210" textAnchor="middle" fontSize="12" fontWeight="700" fill="rgb(var(--fa-olcum))">
                  ΔL = {sayiBicimle(uzama * 1000, 3)} mm
                </text>
                {abartiliGoster ? (
                  <text x={SG / 2} y="245" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-uyari))">
                    Uzama görülebilsin diye {abarti} kat abartılı çizildi. Gerçekte gözle fark edilmez.
                  </text>
                ) : null}
              </>
            ) : deneyTuru === 'halka' ? (
              <>
                {/* Halka: ısıtınca delik de büyür */}
                <text x={SG / 2} y="34" textAnchor="middle" fontSize="12" fill="rgb(var(--fa-metin-2))">
                  Isıtılan halkanın DELİĞİ de büyür — küçülmez.
                </text>
                {[
                  { cx: 170, dis: 70, etiket: 'Soğuk', olcek: 1, renk: 'rgb(var(--fa-cizgi-guclu))' },
                  { cx: 420, dis: 70, etiket: `Isıtılmış (+${sayiBicimle(deltaT, 0)} °C)`, olcek: 1 + m.lambda * deltaT * abarti, renk: 'rgb(var(--fa-hata))' },
                ].map((h) => (
                  <g key={h.etiket}>
                    <circle cx={h.cx} cy="140" r={h.dis * h.olcek} fill={m.renk} opacity="0.5" stroke={h.renk} strokeWidth="2" />
                    <circle cx={h.cx} cy="140" r={34 * h.olcek} fill="rgb(var(--fa-zemin-2))" stroke={h.renk} strokeWidth="2" />
                    <text x={h.cx} y="240" textAnchor="middle" fontSize="11.5" fill="rgb(var(--fa-metin-2))">{h.etiket}</text>
                    <text x={h.cx} y="146" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
                      delik: {sayiBicimle(34 * h.olcek * 2, 1)}
                    </text>
                  </g>
                ))}
              </>
            ) : (
              <>
                {/* Bimetal */}
                <text x={SG / 2} y="34" textAnchor="middle" fontSize="12" fill="rgb(var(--fa-metin-2))">
                  İki metal birleşik: çok genleşen dışa geçer, şerit kıvrılır.
                </text>
                {(() => {
                  const uzunlukPx = 300
                  const kivrilma = Math.max(-120, Math.min(120, (bm?.egrilik ?? 0) * 5000))
                  const yol = (kaydir) => {
                    const p = []
                    for (let i = 0; i <= 30; i += 1) {
                      const s = i / 30
                      const x = 130 + s * uzunlukPx
                      const y = 130 + kaydir + kivrilma * s * s
                      p.push(`${x},${y}`)
                    }
                    return p.join(' ')
                  }
                  return (
                    <>
                      <polyline points={yol(-5)} fill="none" stroke={GENLESME_KATSAYILARI[metal].renk} strokeWidth="9" strokeLinecap="round" />
                      <polyline points={yol(4)} fill="none" stroke={GENLESME_KATSAYILARI[ikinciMetal].renk} strokeWidth="9" strokeLinecap="round" />
                      <rect x="118" y="112" width="14" height="42" rx="3" fill="rgb(var(--fa-cizgi-guclu))" />
                      <text x="130" y="196" fontSize="11" fill={GENLESME_KATSAYILARI[metal].renk}>
                        Üst: {GENLESME_KATSAYILARI[metal].ad} (λ = {(GENLESME_KATSAYILARI[metal].lambda * 1e6).toFixed(1)}×10⁻⁶)
                      </text>
                      <text x="130" y="214" fontSize="11" fill={GENLESME_KATSAYILARI[ikinciMetal].renk}>
                        Alt: {GENLESME_KATSAYILARI[ikinciMetal].ad} (λ = {(GENLESME_KATSAYILARI[ikinciMetal].lambda * 1e6).toFixed(1)}×10⁻⁶)
                      </text>
                      <text x="130" y="240" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-olcum))">
                        Kıvrılma yönü: {bm?.yon === 'asagi' ? 'aşağı' : bm?.yon === 'yukari' ? 'yukarı' : 'düz (katsayılar eşit)'}
                      </text>
                    </>
                  )
                })()}
              </>
            )}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">ΔL = {sayiBicimle(uzama * 1000, 3)} mm</span>
            <span className="fa-rozet">λ = {(m.lambda * 1e6).toFixed(1)}×10⁻⁶ /°C</span>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Boyca uzama ΔL', deger: uzama * 1000, birim: 'mm', vurgulu: true, basamak: 3 },
              { ad: 'Yüzeyce artış ΔA', deger: alanArtisi * 1e4, birim: 'cm²', basamak: 3 },
              { ad: 'Hacimce artış ΔV', deger: hacimArtisi * 1e6, birim: 'cm³', basamak: 2 },
              { ad: 'Bağıl uzama', deger: (uzama / uzunluk) * 100, birim: '%', tur: 'notr', basamak: 4 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Sıcaklık artışına göre uzama (farklı metaller)"
            xEtiket="ΔT (°C)" yEtiket="ΔL (mm)"
            seriler={Object.entries(GENLESME_KATSAYILARI).slice(0, 5).map(([kod, g]) => ({
              ad: g.ad, renk: g.renk, birim: 'mm',
              veri: Array.from({ length: 21 }, (_, i) => {
                const dt = i * 15
                return { x: dt, y: boycaGenlesme(uzunluk, g.lambda, dt) * 1000 }
              }),
            }))}
            imlecX={deltaT}
            yukseklik={190}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Her metal farklı eğimli bir doğru çiziyor; eğim genleşme katsayısıdır. İnvar’ın neredeyse yatay
            olması tesadüf değil — saatlerde ve hassas ölçüm aletlerinde tam bu yüzden kullanılır.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Deney" deger={deneyTuru} onChange={setDeneyTuru}
            secenekler={[
              { kod: 'cubuk', ad: 'Çubuk' },
              { kod: 'halka', ad: 'Delikli halka' },
              { kod: 'bimetal', ad: 'Bimetal' },
            ]} />
          <Liste etiket={deneyTuru === 'bimetal' ? 'Üst metal' : 'Metal'} deger={metal} onChange={setMetal}
            secenekler={Object.entries(GENLESME_KATSAYILARI).map(([kod, g]) => ({ kod, ad: g.ad }))} />
          {deneyTuru === 'bimetal' ? (
            <Liste etiket="Alt metal" deger={ikinciMetal} onChange={setIkinciMetal}
              secenekler={Object.entries(GENLESME_KATSAYILARI).map(([kod, g]) => ({ kod, ad: g.ad }))} />
          ) : null}
          <Kaydirici etiket="Başlangıç boyu L₀" deger={uzunluk} onChange={setUzunluk} alt={0.1} ust={20} adim={0.1} birim="m" basamak={1} />
          <Kaydirici etiket="Sıcaklık artışı ΔT" deger={deltaT} onChange={setDeltaT} alt={-100} ust={500} adim={5} birim="°C" basamak={0}
            ipucu="Negatif değer soğutmadır: madde büzülür." />
          <Anahtar etiket="Uzamayı abartılı göster" acik={abartiliGoster} onChange={setAbartiliGoster}
            ipucu="Gerçek genleşme binde birler düzeyindedir, çıplak gözle görülmez." />
        </div>

        {deneyTuru === 'halka' ? (
          <Not tur="uyari" baslik="Delik büyür mü, küçülür mü?">
            Isıtılan delikli levhada delik <strong>büyür</strong>. Çünkü genleşme her doğrultuda orantılı bir
            büyütmedir; levhanın her noktası merkezden uzaklaşır, boşluk da bu büyütmeye dâhildir.
            Sıkışan kavanoz kapağının sıcak suda açılması bu yüzdendir.
          </Not>
        ) : null}

        {deneyTuru === 'bimetal' && bm ? (
          <Not tur="bilgi" baslik="Termostat böyle çalışır">
            İki metalin genleşme katsayısı farkı {(bm.lambdaFarki * 1e6).toFixed(1)}×10⁻⁶ /°C.
            {' '}Isınınca {GENLESME_KATSAYILARI[bm.lambdaFarki > 0 ? metal : ikinciMetal].ad} daha çok uzuyor
            ve şerit {bm.yon === 'asagi' ? 'aşağı' : bm.yon === 'yukari' ? 'yukarı' : ''} kıvrılıyor. Bu kıvrılma
            bir kontağı açıp kapatarak ütü, fırın ve su ısıtıcılarında sıcaklığı sabit tutar.
            {Math.abs(bm.lambdaFarki) < 1e-9 ? ' Şu an iki metal aynı; katsayı farkı sıfır olduğu için şerit hiç kıvrılmıyor.' : ''}
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'kalorimetre', ad: 'Kalorimetre', Bilesen: Kalorimetre },
  { kod: 'isinma-egrisi', ad: 'Isınma Eğrisi', Bilesen: IsinmaEgrisi },
  { kod: 'genlesme', ad: 'Genleşme Tezgâhı', Bilesen: GenlesmeTezgahi },
]

export default function IsiBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="isi" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
