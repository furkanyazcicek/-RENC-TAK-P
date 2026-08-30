import { useMemo, useState } from 'react'
import { Target } from 'lucide-react'
import {
  Anahtar, Grafik, Kaydirici, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
  SimKontrol, VektorOku, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  direncliYorunge, dusmeSuresi, enIyiAci, idealAtis, idealDurum, idealYorunge,
} from '../../../lib/fizik/atislar.js'
import { G_MUFREDAT } from '../../../lib/fizik/hareket.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'
import { basarimKaydet } from '../../../lib/fizik/ilerleme.js'

const ATIS_TURLERI = [
  { kod: 'egik', ad: 'Eğik atış', aci: 45, aciKilitli: false, y0: 0 },
  { kod: 'yatay', ad: 'Yatay atış', aci: 0, aciKilitli: true, y0: 45 },
  { kod: 'dusey-yukari', ad: 'Düşey yukarı', aci: 90, aciKilitli: true, y0: 0 },
  { kod: 'dusey-asagi', ad: 'Düşey aşağı', aci: -90, aciKilitli: true, y0: 60 },
  { kod: 'serbest', ad: 'Serbest düşme', aci: -90, aciKilitli: true, y0: 60, v0Kilitli: true },
]

const SG = 640
const SY = 380

/* ═══════════ Deney 1: Atış Laboratuvarı ═══════════ */

function AtisLaboratuvari() {
  const [turKod, setTurKod] = useState('egik')
  const [v0, setV0] = useState(24)
  const [aciDerece, setAciDerece] = useState(45)
  const [y0, setY0] = useState(0)
  const [g, setG] = useState(G_MUFREDAT)
  const [havaDirenci, setHavaDirenci] = useState(false)
  const [direncK, setDirencK] = useState(0.02)
  const [izGoster, setIzGoster] = useState(true)
  const [karsilastir, setKarsilastir] = useState(false)

  const tur = ATIS_TURLERI.find((t) => t.kod === turKod)
  const gercekAci = tur.aciKilitli ? tur.aci : aciDerece
  const gercekV0 = tur.v0Kilitli ? 0 : v0

  const parametre = { v0: gercekV0, aciDerece: gercekAci, y0, g }
  const ideal = useMemo(() => idealAtis(parametre), [gercekV0, gercekAci, y0, g])
  const idealYol = useMemo(() => idealYorunge(parametre, 200), [gercekV0, gercekAci, y0, g])
  const direncli = useMemo(
    () => (havaDirenci ? direncliYorunge({ ...parametre, k: direncK }) : null),
    [havaDirenci, direncK, gercekV0, gercekAci, y0, g],
  )

  const aktifSure = havaDirenci ? direncli.ucusSuresi : ideal.ucusSuresi
  const sim = useSimulasyonZamani({ bitis: Math.max(0.1, aktifSure) })
  const t = Math.min(sim.zaman, aktifSure)

  const anlik = useMemo(() => {
    if (havaDirenci && direncli) {
      // Sayısal çözümde en yakın zaman noktası okunur.
      let en = direncli.noktalar[0]
      let fark = Infinity
      for (const n of direncli.noktalar) {
        const f = Math.abs(n.t - t)
        if (f < fark) { fark = f; en = n }
      }
      return { ...en, ax: 0, ay: -g }
    }
    return idealDurum(parametre, t)
  }, [t, havaDirenci, direncli, gercekV0, gercekAci, y0, g])

  // Ekran ölçeği: yörüngenin tamamı sığsın
  const sinir = useMemo(() => {
    const noktalar = havaDirenci && direncli ? direncli.noktalar : idealYol
    const maksX = Math.max(...noktalar.map((n) => n.x), 5)
    const maksY = Math.max(...noktalar.map((n) => n.y), 5)
    const genelMaksX = karsilastir && direncli ? Math.max(maksX, ideal.menzil) : maksX
    return { x: genelMaksX * 1.12, y: Math.max(maksY * 1.25, genelMaksX * 0.4) }
  }, [havaDirenci, direncli, idealYol, karsilastir, ideal.menzil])

  const px = (x) => 40 + (x / sinir.x) * (SG - 70)
  const py = (y) => SY - 46 - (y / sinir.y) * (SY - 80)
  const hizOlcek = 3.2

  const enIyi = useMemo(() => enIyiAci({ v0: gercekV0, y0, g }), [gercekV0, y0, g])

  const grafikSerileri = useMemo(() => {
    const kaynak = havaDirenci && direncli ? direncli.noktalar : idealYol
    return {
      konum: [
        { ad: 'x', renk: 'rgb(var(--fa-vurgu))', birim: 'm', veri: kaynak.map((n) => ({ x: n.t, y: n.x })) },
        { ad: 'y', renk: 'rgb(var(--fa-olcum))', birim: 'm', veri: kaynak.map((n) => ({ x: n.t, y: n.y })) },
      ],
      hiz: [
        { ad: 'vₓ', renk: 'rgb(var(--fa-vurgu))', birim: 'm/s', veri: kaynak.map((n) => ({ x: n.t, y: n.vx })) },
        { ad: 'v_y', renk: 'rgb(var(--fa-vektor))', birim: 'm/s', veri: kaynak.map((n) => ({ x: n.t, y: n.vy })) },
      ],
    }
  }, [havaDirenci, direncli, idealYol])

  const turDegistir = (kod) => {
    const yeni = ATIS_TURLERI.find((x) => x.kod === kod)
    setTurKod(kod)
    setY0(yeni.y0)
    if (!yeni.aciKilitli) setAciDerece(yeni.aci)
    sim.sifirla()
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={`Atış sahnesi. ${sayiBicimle(t, 2)} saniyede yatay konum ${sayiBicimle(anlik.x, 1)} metre, yükseklik ${sayiBicimle(anlik.y, 1)} metre.`}>
            {/* Izgara */}
            {Array.from({ length: 7 }, (_, i) => {
              const y = (sinir.y * i) / 6
              return (
                <g key={`y${i}`}>
                  <line x1="40" x2={SG - 20} y1={py(y)} y2={py(y)} stroke="rgb(var(--fa-cizgi))" strokeWidth="0.6" />
                  <text x="35" y={py(y) + 3} textAnchor="end" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(y, 0)}</text>
                </g>
              )
            })}
            {Array.from({ length: 7 }, (_, i) => {
              const x = (sinir.x * i) / 6
              return (
                <g key={`x${i}`}>
                  <line x1={px(x)} x2={px(x)} y1={py(sinir.y)} y2={py(0)} stroke="rgb(var(--fa-cizgi))" strokeWidth="0.6" />
                  <text x={px(x)} y={SY - 28} textAnchor="middle" fontSize="9" fill="rgb(var(--fa-metin-3))">{sayiBicimle(x, 0)}</text>
                </g>
              )
            })}

            {/* Yer */}
            <line x1="20" x2={SG - 20} y1={py(0)} y2={py(0)} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />
            <text x={SG - 22} y={SY - 12} textAnchor="end" fontSize="10" fill="rgb(var(--fa-metin-2))">yatay uzaklık x (m)</text>
            <text x="12" y="16" fontSize="10" fill="rgb(var(--fa-metin-2))">yükseklik y (m)</text>

            {/* Karşılaştırma: dirençsiz ideal yörünge soluk çizilir */}
            {karsilastir && havaDirenci ? (
              <polyline
                points={idealYol.map((n) => `${px(n.x)},${py(n.y)}`).join(' ')}
                fill="none" stroke="rgb(var(--fa-metin-3))" strokeWidth="1.8" strokeDasharray="6 4" opacity="0.7"
              />
            ) : null}

            {/* Yörünge */}
            {izGoster ? (
              <polyline
                points={(havaDirenci && direncli ? direncli.noktalar : idealYol)
                  .filter((n) => n.t <= t + 0.001)
                  .map((n) => `${px(n.x)},${py(n.y)}`).join(' ')}
                fill="none" stroke="rgb(var(--fa-vurgu))" strokeWidth="2.2" strokeLinecap="round"
              />
            ) : null}

            {/* Tepe noktası işareti */}
            {ideal.tepeSuresi > 0.05 ? (
              <g opacity="0.8">
                <line
                  x1={px(ideal.vx * ideal.tepeSuresi)} x2={px(ideal.vx * ideal.tepeSuresi)}
                  y1={py(ideal.tepeYuksekligi)} y2={py(0)}
                  stroke="rgb(var(--fa-olcum))" strokeWidth="1" strokeDasharray="3 3"
                />
                <text x={px(ideal.vx * ideal.tepeSuresi)} y={py(ideal.tepeYuksekligi) - 8}
                  textAnchor="middle" fontSize="10" fill="rgb(var(--fa-olcum))" fontWeight="600">
                  {sayiBicimle(ideal.tepeYuksekligi, 1)} m
                </text>
              </g>
            ) : null}

            {/* Cisim ve vektörler */}
            <g>
              <circle cx={px(anlik.x)} cy={py(anlik.y)} r="8" fill="rgb(var(--fa-vurgu))" stroke="rgb(var(--fa-yuzey))" strokeWidth="2" />
              {/* Hız bileşenleri */}
              <VektorOku x1={px(anlik.x)} y1={py(anlik.y)} x2={px(anlik.x) + anlik.vx * hizOlcek} y2={py(anlik.y)}
                renk="rgb(var(--fa-olcum))" kalinlik={2} etiket="vₓ" />
              <VektorOku x1={px(anlik.x)} y1={py(anlik.y)} x2={px(anlik.x)} y2={py(anlik.y) - anlik.vy * hizOlcek}
                renk="rgb(var(--fa-vektor))" kalinlik={2} etiket="v_y" />
              {/* Bileşke hız */}
              <VektorOku x1={px(anlik.x)} y1={py(anlik.y)}
                x2={px(anlik.x) + anlik.vx * hizOlcek} y2={py(anlik.y) - anlik.vy * hizOlcek}
                renk="rgb(var(--fa-mor))" kalinlik={2.6} etiket="v" />
              {/* İvme vektörü: her zaman aşağı, sabit */}
              <VektorOku x1={px(anlik.x)} y1={py(anlik.y)} x2={px(anlik.x)} y2={py(anlik.y) + g * 2.2}
                renk="rgb(var(--fa-hata))" kalinlik={2} etiket="g" opaklik={0.85} />
            </g>
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet mavi">t = {sayiBicimle(t, 2)} s</span>
            <span className="fa-rozet olcum">y = {sayiBicimle(anlik.y, 1)} m</span>
            <span className="fa-rozet vektor">v = {sayiBicimle(Math.hypot(anlik.vx, anlik.vy), 1)} m/s</span>
            {havaDirenci ? <span className="fa-rozet uyari">Hava direnci açık — sayısal çözüm</span> : null}
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={0.1} />

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik={havaDirenci ? 'Anlık değerler (dirençli model)' : 'Anlık değerler'}
            olcumler={[
              { ad: 'Yatay hız vₓ', deger: anlik.vx, birim: 'm/s', vurgulu: true },
              { ad: 'Düşey hız v_y', deger: anlik.vy, birim: 'm/s', tur: 'vektor' },
              { ad: 'Yükseklik y', deger: anlik.y, birim: 'm' },
              { ad: 'Yatay uzaklık x', deger: anlik.x, birim: 'm' },
              { ad: 'İvme', deger: g, birim: 'm/s²', tur: 'vektor' },
            ]}
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik={havaDirenci ? 'Atışın sonuçları (dirençli)' : 'Atışın sonuçları (ideal)'}
            olcumler={havaDirenci && direncli ? [
              { ad: 'Menzil', deger: direncli.menzil, birim: 'm', vurgulu: true },
              { ad: 'Uçuş süresi', deger: direncli.ucusSuresi, birim: 's' },
              { ad: 'Tepe yüksekliği', deger: direncli.tepeYuksekligi, birim: 'm' },
              { ad: 'Çarpma hızı', deger: direncli.carpmaHizi, birim: 'm/s' },
              { ad: 'İniş açısı', deger: Math.abs(direncli.carpmaAcisi), birim: '°', tur: 'notr' },
            ] : [
              { ad: 'Menzil', deger: ideal.menzil, birim: 'm', vurgulu: true },
              { ad: 'Uçuş süresi', deger: ideal.ucusSuresi, birim: 's' },
              { ad: 'Tepe yüksekliği', deger: ideal.tepeYuksekligi, birim: 'm' },
              { ad: 'Tepeye çıkış süresi', deger: ideal.tepeSuresi, birim: 's' },
              { ad: 'Çarpma hızı', deger: ideal.carpmaHizi, birim: 'm/s' },
            ]}
          />
        </div>

        <div className="fa-izgara iki" style={{ marginTop: 12 }}>
          <div className="fa-kart dar">
            <Grafik baslik="Konum – Zaman (x ve y)" xEtiket="t (s)" yEtiket="konum (m)" seriler={grafikSerileri.konum} imlecX={t} yukseklik={155} />
            <p style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 6 }}>
              x düz bir doğru (sabit hız), y ise parabol. İki hareket bağımsız.
            </p>
          </div>
          <div className="fa-kart dar">
            <Grafik baslik="Hız bileşenleri – Zaman" xEtiket="t (s)" yEtiket="hız (m/s)" seriler={grafikSerileri.hiz} imlecX={t} yukseklik={155} />
            <p style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 6 }}>
              {havaDirenci
                ? 'Direnç açıkken vₓ de azalıyor — ideal modelde bu olmazdı.'
                : 'vₓ sabit (yatay kuvvet yok), v_y doğrusal azalıyor (eğimi −g).'}
            </p>
          </div>
        </div>

        {karsilastir && havaDirenci && direncli ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">İdeal ile dirençli model karşılaştırması</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Büyüklük</th><th style={{ textAlign: 'right' }}>İdeal (direnç yok)</th><th style={{ textAlign: 'right' }}>Hava direnciyle</th><th style={{ textAlign: 'right' }}>Fark</th></tr></thead>
                <tbody>
                  {[
                    ['Menzil (m)', ideal.menzil, direncli.menzil],
                    ['Uçuş süresi (s)', ideal.ucusSuresi, direncli.ucusSuresi],
                    ['Tepe yüksekliği (m)', ideal.tepeYuksekligi, direncli.tepeYuksekligi],
                    ['Çarpma hızı (m/s)', ideal.carpmaHizi, direncli.carpmaHizi],
                  ].map(([ad, i, d]) => (
                    <tr key={ad}>
                      <td>{ad}</td>
                      <td className="sayi">{sayiBicimle(i, 2)}</td>
                      <td className="sayi" style={{ color: 'rgb(var(--fa-uyari))' }}>{sayiBicimle(d, 2)}</td>
                      <td className="sayi" style={{ color: 'rgb(var(--fa-hata))' }}>%{sayiBicimle(((d - i) / i) * 100, 1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ marginTop: 10 }}>
              <Not tur="uyari" baslik="Bu sayılar formülle bulunmadı">
                Hava dirençli hareketin kapalı bir formülü <strong>yoktur</strong>. Buradaki değerler hareket
                denklemlerinin sayısal olarak çözülmesiyle bulundu. İdeal atış formüllerini (menzil = v₀²sin2θ/g gibi)
                bu duruma uygulamak yanlış olur.
              </Not>
            </div>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi
            etiket="Atış türü"
            deger={turKod} onChange={turDegistir}
            secenekler={ATIS_TURLERI.map((t2) => ({ kod: t2.kod, ad: t2.ad }))}
          />
          {!tur.v0Kilitli ? (
            <Kaydirici etiket="İlk hız v₀" deger={v0} onChange={setV0} alt={0} ust={60} adim={1} birim="m/s" basamak={0} />
          ) : (
            <Not tur="bilgi">Serbest düşmede ilk hız tanım gereği sıfırdır.</Not>
          )}
          {!tur.aciKilitli ? (
            <Kaydirici etiket="Atış açısı" deger={aciDerece} onChange={setAciDerece} alt={0} ust={90} adim={1} birim="°" basamak={0}
              ipucu={`En uzun menzil bu koşullarda ${sayiBicimle(enIyi.aci, 1)}° açıda.`} />
          ) : (
            <div className="fa-kaydirici-ipucu" style={{ marginBottom: 12 }}>
              Bu atış türünde açı sabittir: {tur.aci}°
            </div>
          )}
          <Kaydirici etiket="Başlangıç yüksekliği" deger={y0} onChange={setY0} alt={0} ust={120} adim={1} birim="m" basamak={0} />
          <Kaydirici etiket="Yer çekimi ivmesi g" deger={g} onChange={setG} alt={1.6} ust={25} adim={0.1} birim="m/s²" basamak={1}
            ipucu="Ay'da 1,6 · Dünya'da 9,81 (müfredatta 10) · Jüpiter'de 24,8" />
          <Anahtar etiket="İz bırak" acik={izGoster} onChange={setIzGoster} />
          <Anahtar etiket="Hava direnci" acik={havaDirenci} onChange={(v) => { setHavaDirenci(v); sim.sifirla() }}
            ipucu="Açıkken model sayısal çözülür; ideal formüller uygulanmaz." />
          {havaDirenci ? (
            <>
              <Kaydirici etiket="Direnç katsayısı" deger={direncK} onChange={setDirencK} alt={0} ust={0.1} adim={0.005} basamak={3} />
              <Anahtar etiket="İdeal yörüngeyle karşılaştır" acik={karsilastir} onChange={setKarsilastir} />
            </>
          ) : null}
        </div>

        {turKod === 'yatay' ? (
          <Not tur="bilgi" baslik="Yatay atışın sırrı">
            v_y başlangıçta sıfırdır ve yalnızca yer çekimiyle büyür. Yani aynı yükseklikten
            <strong> bırakılan</strong> bir cisimle <strong>fırlatılan</strong> cisim aynı anda yere düşer.
            Başlangıç yüksekliğini {sayiBicimle(y0, 0)} m tutup v₀'ı sıfır yap: düşme süresi
            {' '}{sayiBicimle(dusmeSuresi({ h0: y0, g }).sure, 2)} s — v₀'ı büyütsen de bu süre değişmez.
          </Not>
        ) : null}

        {!tur.aciKilitli ? (
          <Not tur="bilgi" baslik="En iyi açı">
            Bu koşullarda en uzun menzili <strong>{sayiBicimle(enIyi.aci, 1)}°</strong> veriyor
            ({sayiBicimle(enIyi.menzil, 1)} m). Başlangıç yüksekliği sıfırken bu açı tam 45°'dir;
            yükseklik arttıkça 45°'nin altına düşer. Yüksekliği değiştirip kendin gör.
            {' '}Ayrıca 30° ile 60° gibi tümler açılar aynı menzili verir — dene.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Menzil Görevi ═══════════ */

/**
 * Hedefi vurma görevi. Öğrenci açı ve hızı ayarlar; isabet ölçüsü
 * "yakın/uzak" olarak geri bildirilir. Amaç deneme-yanılma değil,
 * menzil bağıntısını sezgisel olarak kurdurmak.
 */
function MenzilGorevi() {
  const [hedef, setHedef] = useState(() => yeniHedef())
  const [v0, setV0] = useState(20)
  const [aciDerece, setAciDerece] = useState(40)
  const [atisYapildi, setAtisYapildi] = useState(false)
  const [gecmis, setGecmis] = useState([])

  const g = G_MUFREDAT
  const parametre = { v0, aciDerece, y0: 0, g }
  const ideal = useMemo(() => idealAtis(parametre), [v0, aciDerece])
  const yol = useMemo(() => idealYorunge(parametre, 160), [v0, aciDerece])

  const sim = useSimulasyonZamani({ bitis: Math.max(0.1, ideal.ucusSuresi) })
  const t = Math.min(sim.zaman, ideal.ucusSuresi)
  const anlik = idealDurum(parametre, t)

  const sapma = ideal.menzil - hedef.x
  const isabet = Math.abs(sapma) <= hedef.genislik / 2

  const maksX = Math.max(ideal.menzil, hedef.x + hedef.genislik) * 1.15
  const maksY = Math.max(ideal.tepeYuksekligi * 1.3, maksX * 0.35)
  const px = (x) => 34 + (x / maksX) * (SG - 60)
  const py = (y) => SY - 46 - (y / maksY) * (SY - 80)

  const at = () => {
    setAtisYapildi(true)
    sim.sifirla()
    sim.oynat()
    setGecmis((e) => [{ v0, aciDerece, menzil: ideal.menzil, isabet }, ...e].slice(0, 5))
    // Hedefi vurmak Nişancı rozetinin koşulu.
    if (isabet) basarimKaydet('nisanci')
  }

  const yeniTur = () => { setHedef(yeniHedef()); setAtisYapildi(false); sim.sifirla(); setGecmis([]) }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img" aria-label={`Menzil görevi. Hedef ${sayiBicimle(hedef.x, 1)} metrede. Şu anki atış ${sayiBicimle(ideal.menzil, 1)} metreye düşüyor.`}>
            <line x1="20" x2={SG - 20} y1={py(0)} y2={py(0)} stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="2.5" />

            {/* Hedef */}
            <rect
              x={px(hedef.x - hedef.genislik / 2)} y={py(0) - 12}
              width={px(hedef.x + hedef.genislik / 2) - px(hedef.x - hedef.genislik / 2)} height="12"
              fill={atisYapildi && isabet ? 'rgb(var(--fa-olumlu) / 0.5)' : 'rgb(var(--fa-hata) / 0.3)'}
              stroke={atisYapildi && isabet ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-hata))'} strokeWidth="1.6"
            />
            <text x={px(hedef.x)} y={py(0) - 20} textAnchor="middle" fontSize="11" fontWeight="700"
              fill={atisYapildi && isabet ? 'rgb(var(--fa-olumlu))' : 'rgb(var(--fa-hata))'}>
              Hedef · {sayiBicimle(hedef.x, 0)} m
            </text>

            {/* Yörünge */}
            <polyline
              points={yol.filter((n) => (atisYapildi ? n.t <= t + 0.001 : true)).map((n) => `${px(n.x)},${py(n.y)}`).join(' ')}
              fill="none" stroke={atisYapildi ? 'rgb(var(--fa-vurgu))' : 'rgb(var(--fa-metin-3))'}
              strokeWidth="2.2" strokeDasharray={atisYapildi ? undefined : '5 4'} strokeLinecap="round"
            />

            {/* Top */}
            {atisYapildi ? (
              <circle cx={px(anlik.x)} cy={py(anlik.y)} r="7" fill="rgb(var(--fa-vurgu))" stroke="rgb(var(--fa-yuzey))" strokeWidth="2" />
            ) : (
              <>
                <circle cx={px(0)} cy={py(0) - 6} r="7" fill="rgb(var(--fa-vurgu))" />
                <VektorOku x1={px(0)} y1={py(0) - 6}
                  x2={px(0) + Math.cos((aciDerece * Math.PI) / 180) * v0 * 2.4}
                  y2={py(0) - 6 - Math.sin((aciDerece * Math.PI) / 180) * v0 * 2.4}
                  renk="rgb(var(--fa-vektor))" etiket="v₀" kalinlik={2.6} />
              </>
            )}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet mavi">Tahmini menzil: {sayiBicimle(ideal.menzil, 1)} m</span>
            {atisYapildi ? (
              <span className={`fa-rozet ${isabet ? 'olumlu' : 'hata'}`}>
                {isabet ? 'İsabet!' : sapma > 0 ? `${sayiBicimle(sapma, 1)} m uzağa düştü` : `${sayiBicimle(-sapma, 1)} m yakına düştü`}
              </span>
            ) : null}
          </div>
        </div>

        <div className="fa-kontrol">
          <button type="button" className="fa-dugme birincil" onClick={at}>
            <Target size={15} /> Ateşle
          </button>
          <button type="button" className="fa-dugme" onClick={yeniTur}>Yeni hedef</button>
          <span style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))', marginLeft: 'auto' }}>
            Hedef genişliği: {sayiBicimle(hedef.genislik, 1)} m
          </span>
        </div>

        {gecmis.length > 0 ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">Denemelerin</div>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>v₀ (m/s)</th><th>Açı (°)</th><th style={{ textAlign: 'right' }}>Menzil (m)</th><th>Sonuç</th></tr></thead>
                <tbody>
                  {gecmis.map((d, i) => (
                    <tr key={i}>
                      <td className="sayi">{sayiBicimle(d.v0, 0)}</td>
                      <td className="sayi">{sayiBicimle(d.aciDerece, 0)}</td>
                      <td className="sayi">{sayiBicimle(d.menzil, 1)}</td>
                      <td><span className={`fa-rozet ${d.isabet ? 'olumlu' : 'hata'}`}>{d.isabet ? 'İsabet' : 'Iska'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Kaydirici etiket="İlk hız v₀" deger={v0} onChange={(v) => { setV0(v); setAtisYapildi(false) }} alt={5} ust={45} adim={0.5} birim="m/s" basamak={1} />
          <Kaydirici etiket="Atış açısı" deger={aciDerece} onChange={(v) => { setAciDerece(v); setAtisYapildi(false) }} alt={5} ust={85} adim={1} birim="°" basamak={0} />
        </div>

        <Not tur="bilgi" baslik="İpucu">
          Menzil R = v₀²·sin(2θ)/g bağıntısına uyar. Bu, iki şey demektir:
          hızı iki katına çıkarırsan menzil <strong>dört</strong> katına çıkar; ve
          {' '}<strong>iki farklı açı</strong> aynı menzili verir (örneğin 30° ve 60°). Aynı hedefi
          iki farklı açıyla vurabilir misin?
        </Not>

        {atisYapildi && !isabet ? (
          <Not tur="uyari" baslik="Ne yapmalı?">
            {sapma > 0
              ? 'Fazla uzağa düştü. Ya hızı azalt ya da açıyı 45°\'den uzaklaştır (büyüt veya küçült).'
              : 'Yakına düştü. Ya hızı artır ya da açıyı 45°\'ye yaklaştır.'}
          </Not>
        ) : null}
      </div>
    </div>
  )
}

function yeniHedef() {
  const x = 20 + Math.random() * 60
  return { x, genislik: Math.max(3, x * 0.09) }
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'atis-laboratuvari', ad: 'Atış Laboratuvarı', Bilesen: AtisLaboratuvari },
  { kod: 'menzil-yarismasi', ad: 'Menzil Görevi', Bilesen: MenzilGorevi },
]

export default function AtisBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="atislar" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
