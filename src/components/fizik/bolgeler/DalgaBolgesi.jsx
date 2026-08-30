import { useMemo, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import {
  Anahtar, Grafik, Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu,
  SecimSeridi, SimKontrol, useSimulasyonZamani,
} from '../ortak/index.js'
import {
  SES_HIZLARI, dalgaBoyu, dalgaProfili, havadaSesHizi, ipteDalgaHizi,
  ortamDegisimi, periyot, rezonansFrekanslari, rezonansGenligi, sesNiteligi,
  ustUsteBinme, yanki, yansimaFazi,
} from '../../../lib/fizik/dalga.js'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

const SG = 620
const SY = 240

/* ═══════════ Deney 1: Dalga Tezgâhı ═══════════ */

function DalgaTezgahi() {
  const [genlik, setGenlik] = useState(30)
  const [frekans, setFrekans] = useState(1)
  const [dalgaHizi, setDalgaHizi] = useState(2)
  const [tur, setTur] = useState('enine')
  const [isaretliTanecik, setIsaretliTanecik] = useState(true)

  const sim = useSimulasyonZamani({ bitis: 20, dongu: true })
  const t = sim.zaman
  const T = periyot(frekans) ?? 1
  const lam = dalgaBoyu(dalgaHizi, frekans) ?? 1

  /* Sahnede 1 metre = 100 piksel */
  const OLCEK = 100
  const noktalar = useMemo(() => {
    const n = []
    for (let i = 0; i <= 200; i += 1) {
      const x = (i / 200) * (SG / OLCEK)
      n.push({ x, y: dalgaProfili({ genlik, dalgaBoyu: lam, periyot: T, t, x, yon: 1 }) })
    }
    return n
  }, [genlik, lam, T, t])

  const isaretliX = 3
  const isaretliY = dalgaProfili({ genlik, dalgaBoyu: lam, periyot: T, t, x: isaretliX, yon: 1 })

  const nitelik = sesNiteligi({ frekans: frekans * 200, genlik: genlik / 60 })

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={`Dalga tezgâhı. Genlik ${sayiBicimle(genlik, 0)}, dalga boyu ${sayiBicimle(lam, 2)} metre, frekans ${sayiBicimle(frekans, 2)} hertz.`}>
            <line x1="0" x2={SG} y1={SY / 2} y2={SY / 2} stroke="rgb(var(--fa-cizgi))" strokeWidth="1" strokeDasharray="4 4" />

            {tur === 'enine' ? (
              <>
                <polyline
                  points={noktalar.map((n) => `${n.x * OLCEK},${SY / 2 - n.y}`).join(' ')}
                  fill="none" stroke="rgb(var(--fa-olcum))" strokeWidth="2.8" strokeLinecap="round"
                />
                {/* Tanecikler: yalnızca DÜŞEY hareket ederler */}
                {Array.from({ length: 16 }, (_, i) => {
                  const x = (i + 0.5) * (SG / 16) / OLCEK
                  const y = dalgaProfili({ genlik, dalgaBoyu: lam, periyot: T, t, x, yon: 1 })
                  return <circle key={i} cx={x * OLCEK} cy={SY / 2 - y} r="3.5" fill="rgb(var(--fa-metin-3))" opacity="0.7" />
                })}
              </>
            ) : (
              <>
                {/* Boyuna dalga: sıkışma ve seyrelme bölgeleri */}
                {Array.from({ length: 90 }, (_, i) => {
                  const x0 = (i / 90) * (SG / OLCEK)
                  const kayma = dalgaProfili({ genlik: genlik / 3.4, dalgaBoyu: lam, periyot: T, t, x: x0, yon: 1 })
                  return (
                    <line key={i}
                      x1={x0 * OLCEK + kayma} x2={x0 * OLCEK + kayma}
                      y1={SY / 2 - 46} y2={SY / 2 + 46}
                      stroke="rgb(var(--fa-olcum))" strokeWidth="2.4" opacity="0.75"
                    />
                  )
                })}
                <text x={SG / 2} y="34" textAnchor="middle" fontSize="11" fill="rgb(var(--fa-metin-2))">
                  Boyuna dalga: tanecikler yayılma yönü boyunca sıkışıp seyrelir (ses böyle yayılır)
                </text>
              </>
            )}

            {/* İşaretli tanecik: yerinde kalıp titreştiğini gösterir */}
            {isaretliTanecik && tur === 'enine' ? (
              <>
                <line x1={isaretliX * OLCEK} x2={isaretliX * OLCEK} y1={SY / 2 - genlik - 12} y2={SY / 2 + genlik + 12}
                  stroke="rgb(var(--fa-vektor))" strokeWidth="1.2" strokeDasharray="3 3" />
                <circle cx={isaretliX * OLCEK} cy={SY / 2 - isaretliY} r="7" fill="rgb(var(--fa-vektor))" stroke="rgb(var(--fa-yuzey))" strokeWidth="2" />
                <text x={isaretliX * OLCEK} y={SY - 12} textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-vektor))">
                  işaretli tanecik: yatayda hiç ilerlemiyor
                </text>
              </>
            ) : null}

            {/* Dalga boyu ölçüsü */}
            {tur === 'enine' ? (
              <g>
                <line x1="20" x2={20 + lam * OLCEK} y1="26" y2="26" stroke="rgb(var(--fa-mor))" strokeWidth="2" />
                <line x1="20" y1="20" x2="20" y2="32" stroke="rgb(var(--fa-mor))" strokeWidth="2" />
                <line x1={20 + lam * OLCEK} y1="20" x2={20 + lam * OLCEK} y2="32" stroke="rgb(var(--fa-mor))" strokeWidth="2" />
                <text x={20 + (lam * OLCEK) / 2} y="18" textAnchor="middle" fontSize="11" fontWeight="700" fill="rgb(var(--fa-mor))">
                  λ = {sayiBicimle(lam, 2)} m
                </text>
              </g>
            ) : null}
          </svg>

          <div className="fa-sahne-rozet">
            <span className="fa-rozet olcum">v = {sayiBicimle(dalgaHizi, 2)} m/s</span>
            <span className="fa-rozet">λ = {sayiBicimle(lam, 2)} m</span>
            <span className="fa-rozet">f = {sayiBicimle(frekans, 2)} Hz</span>
            <span className="fa-rozet">T = {sayiBicimle(T, 2)} s</span>
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={0.1} />

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            olcumler={[
              { ad: 'Genlik', deger: genlik / 100, birim: 'm', tur: 'notr', basamak: 2 },
              { ad: 'Dalga boyu λ', deger: lam, birim: 'm', vurgulu: true },
              { ad: 'Frekans f', deger: frekans, birim: 'Hz' },
              { ad: 'Periyot T', deger: T, birim: 's' },
              { ad: 'Hız v = λ·f', deger: lam * frekans, birim: 'm/s' },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Bağıntı denetimi</div>
          <div style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 13, lineHeight: 1.8, color: 'rgb(var(--fa-metin-2))' }}>
            v = λ · f = {sayiBicimle(lam, 3)} × {sayiBicimle(frekans, 2)} = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(lam * frekans, 3)} m/s</b><br />
            T = 1/f = 1/{sayiBicimle(frekans, 2)} = <b style={{ color: 'rgb(var(--fa-olcum))' }}>{sayiBicimle(T, 3)} s</b>
          </div>
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 10 }}>
            Hızı ortam belirler. Frekansı artırırsan hız değişmediği için <strong>dalga boyu kısalır</strong>.
            Genliği değiştirirsen hiçbiri değişmez — genlik yalnızca enerjiyi (sesteki gürlüğü) etkiler.
          </p>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Dalga türü" deger={tur} onChange={setTur}
            secenekler={[{ kod: 'enine', ad: 'Enine' }, { kod: 'boyuna', ad: 'Boyuna' }]} />
          <Kaydirici etiket="Genlik" deger={genlik} onChange={setGenlik} alt={5} ust={70} adim={1} basamak={0}
            ipucu="Genlik enerjiyi belirler; hızı ve dalga boyunu DEĞİŞTİRMEZ." />
          <Kaydirici etiket="Frekans" deger={frekans} onChange={setFrekans} alt={0.2} ust={4} adim={0.1} birim="Hz" basamak={2} />
          <Kaydirici etiket="Dalga hızı (ortam)" deger={dalgaHizi} onChange={setDalgaHizi} alt={0.5} ust={8} adim={0.1} birim="m/s" basamak={1}
            ipucu="Hızı ortam belirler, kaynak değil." />
          {tur === 'enine' ? (
            <Anahtar etiket="Bir taneciği işaretle" acik={isaretliTanecik} onChange={setIsaretliTanecik}
              ipucu="Dalga ilerlerken tanecik yerinde kalır: taşınan enerjidir, madde değil." />
          ) : null}
        </div>

        <Not tur="bilgi" baslik="Dalga maddeyi taşımaz">
          Denizde bir şamandıra dalgayla birlikte kıyıya gelmez; olduğu yerde aşağı yukarı sallanır.
          İşaretli taneciği aç ve izle: dalga soldan sağa ilerlerken tanecik yalnızca yukarı-aşağı
          gidiyor, yatayda hiç ilerlemiyor. Taşınan şey enerjidir.
        </Not>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Ses karşılığı</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <tbody>
                <tr><td>Frekans → yükseklik</td><td>{nitelik.yukseklik}</td></tr>
                <tr><td>Genlik → şiddet</td><td>{nitelik.siddet}</td></tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
            İki nitelik bağımsızdır: ince bir ses hafif olabilir, kalın bir ses gür olabilir.
          </p>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 2: Yansıma ve Girişim ═══════════ */

function YansimaGirisim() {
  const [ucTuru, setUcTuru] = useState('sabit')
  const [mod, setMod] = useState('yansima')
  const [genlik1, setGenlik1] = useState(35)
  const [genlik2, setGenlik2] = useState(35)
  const [fazFarki, setFazFarki] = useState(0)

  const sim = useSimulasyonZamani({ bitis: 12, dongu: true })
  const t = sim.zaman
  const faz = yansimaFazi(ucTuru)

  const noktalar = useMemo(() => {
    const n = []
    for (let i = 0; i <= 240; i += 1) {
      const x = (i / 240) * 6
      let y
      if (mod === 'yansima') {
        // Gelen atma sağa, yansıyan sola; sabit uçta ters işaretle.
        const gelen = atmaProfili(x - t * 1.2, genlik1)
        const yansiyan = (ucTuru === 'sabit' ? -1 : 1) * atmaProfili((12 - x) - t * 1.2, genlik1)
        y = gelen + yansiyan
      } else {
        y = ustUsteBinme(
          [
            { genlik: genlik1, dalgaBoyu: 2, periyot: 2, yon: 1, faz: 0 },
            { genlik: genlik2, dalgaBoyu: 2, periyot: 2, yon: -1, faz: (fazFarki * Math.PI) / 180 },
          ],
          x, t,
        )
      }
      n.push({ x, y })
    }
    return n
  }, [mod, t, genlik1, genlik2, fazFarki, ucTuru])

  const OLCEK = SG / 6

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-sahne">
          <svg viewBox={`0 0 ${SG} ${SY}`} role="img"
            aria-label={mod === 'yansima' ? `${ucTuru === 'sabit' ? 'Sabit' : 'Serbest'} uçtan yansıma.` : 'İki dalganın üst üste binmesi.'}>
            <line x1="0" x2={SG} y1={SY / 2} y2={SY / 2} stroke="rgb(var(--fa-cizgi))" strokeWidth="1" strokeDasharray="4 4" />

            {mod === 'girisim' ? (
              <>
                <polyline
                  points={Array.from({ length: 241 }, (_, i) => {
                    const x = (i / 240) * 6
                    const y = dalgaProfili({ genlik: genlik1, dalgaBoyu: 2, periyot: 2, t, x, yon: 1 })
                    return `${x * OLCEK},${SY / 2 - y}`
                  }).join(' ')}
                  fill="none" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.6" opacity="0.5" strokeDasharray="5 4"
                />
                <polyline
                  points={Array.from({ length: 241 }, (_, i) => {
                    const x = (i / 240) * 6
                    const y = dalgaProfili({ genlik: genlik2, dalgaBoyu: 2, periyot: 2, t, x, yon: -1, faz: (fazFarki * Math.PI) / 180 })
                    return `${x * OLCEK},${SY / 2 - y}`
                  }).join(' ')}
                  fill="none" stroke="rgb(var(--fa-mor))" strokeWidth="1.6" opacity="0.5" strokeDasharray="2 3"
                />
              </>
            ) : null}

            <polyline
              points={noktalar.map((n) => `${n.x * OLCEK},${SY / 2 - n.y}`).join(' ')}
              fill="none" stroke="rgb(var(--fa-olcum))" strokeWidth="3" strokeLinecap="round"
            />

            {mod === 'yansima' ? (
              <g>
                {/* Uç */}
                <line x1={SG - 6} x2={SG - 6} y1={SY / 2 - 50} y2={SY / 2 + 50}
                  stroke={ucTuru === 'sabit' ? 'rgb(var(--fa-hata))' : 'rgb(var(--fa-olumlu))'} strokeWidth="4" />
                {ucTuru === 'sabit' ? (
                  <text x={SG - 14} y={SY / 2 - 60} textAnchor="end" fontSize="11" fill="rgb(var(--fa-hata))" fontWeight="700">SABİT UÇ</text>
                ) : (
                  <>
                    <circle cx={SG - 6} cy={SY / 2} r="8" fill="none" stroke="rgb(var(--fa-olumlu))" strokeWidth="2.5" />
                    <text x={SG - 14} y={SY / 2 - 60} textAnchor="end" fontSize="11" fill="rgb(var(--fa-olumlu))" fontWeight="700">SERBEST UÇ</text>
                  </>
                )}
              </g>
            ) : null}
          </svg>

          <div className="fa-sahne-rozet">
            {mod === 'yansima' ? (
              <span className={`fa-rozet ${faz.tersDoner ? 'hata' : 'olumlu'}`}>
                Faz değişimi: {faz.fazDegisimi}°
              </span>
            ) : (
              <>
                <span className="fa-rozet">Faz farkı: {sayiBicimle(fazFarki, 0)}°</span>
                <span className={`fa-rozet ${Math.abs(fazFarki - 180) < 20 && Math.abs(genlik1 - genlik2) < 5 ? 'hata' : 'olumlu'}`}>
                  {Math.abs(fazFarki) < 20 ? 'Yapıcı girişim' : Math.abs(fazFarki - 180) < 20 ? 'Yıkıcı girişim' : 'Kısmi girişim'}
                </span>
              </>
            )}
          </div>
        </div>

        <SimKontrol {...sim} adimBoyu={0.1} />

        <div style={{ marginTop: 12 }}>
          <Not tur="bilgi" baslik={mod === 'yansima' ? 'Uçta ne oluyor?' : 'Üst üste binme'}>
            {mod === 'yansima' ? faz.aciklama : (
              <>
                İki dalganın yer değiştirmeleri her noktada <strong>cebirsel olarak toplanır</strong>.
                Tepe + tepe daha büyük bir tepe (yapıcı), tepe + çukur sönüm (yıkıcı) verir.
                Karşılaşma bittikten sonra her dalga hiçbir şey olmamış gibi yoluna devam eder —
                dalgalar birbirini bozmaz.
              </>
            )}
          </Not>
        </div>

        {mod === 'yansima' ? (
          <div className="fa-kart" style={{ marginTop: 12 }}>
            <div className="fa-ust-etiket">Sabit uç neden ters çevirir?</div>
            <p style={{ fontSize: 13.5, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.6 }}>
              Sabit ucun yer değiştirmesi <strong>her an sıfır olmak zorundadır</strong>. Gelen atma oraya
              vardığında ucu yukarı çekmeye çalışır. Uç kımıldayamayacağı için, bunu tam olarak dengeleyen
              zıt bir atma üretir. Toplamları sıfır olduğu için uç yerinde kalır; yansıyan atma ters dönmüş olur.
              Serbest uçta böyle bir zorunluluk yoktur; uç savrulur ve atma aynı yönde döner.
            </p>
          </div>
        ) : null}
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <SecimSeridi etiket="Deney" deger={mod} onChange={setMod}
            secenekler={[{ kod: 'yansima', ad: 'Yansıma' }, { kod: 'girisim', ad: 'Girişim' }]} />
          {mod === 'yansima' ? (
            <SecimSeridi etiket="Uç türü" deger={ucTuru} onChange={setUcTuru}
              secenekler={[{ kod: 'sabit', ad: 'Sabit uç' }, { kod: 'serbest', ad: 'Serbest uç' }]} />
          ) : (
            <>
              <Kaydirici etiket="1. dalga genliği" deger={genlik1} onChange={setGenlik1} alt={0} ust={50} adim={1} basamak={0} />
              <Kaydirici etiket="2. dalga genliği" deger={genlik2} onChange={setGenlik2} alt={0} ust={50} adim={1} basamak={0} />
              <Kaydirici etiket="Faz farkı" deger={fazFarki} onChange={setFazFarki} alt={0} ust={360} adim={10} birim="°" basamak={0}
                ipucu="0° tam yapıcı, 180° tam yıkıcı girişim verir (genlikler eşitse)." />
            </>
          )}
          {mod === 'yansima' ? (
            <Kaydirici etiket="Atma genliği" deger={genlik1} onChange={setGenlik1} alt={10} ust={55} adim={1} basamak={0} />
          ) : null}
        </div>

        {mod === 'girisim' && Math.abs(fazFarki - 180) < 15 && Math.abs(genlik1 - genlik2) < 4 ? (
          <Not tur="uyari" baslik="Dalga yok oldu mu?">
            Hayır. Ekranda düz bir çizgi görüyorsun ama iki dalga da hâlâ oradadır ve ilerlemeye devam
            ediyor. Yalnızca o anda her noktada toplamları sıfır. Enerji kaybolmadı; faz farkını değiştir,
            geri geldiğini gör.
          </Not>
        ) : null}
      </div>
    </div>
  )
}

/** Gauss biçimli tek atma. */
function atmaProfili(x, genlik) {
  return genlik * Math.exp(-((x - 1.2) ** 2) * 9)
}

/* ═══════════ Deney 3: Ses ve Rezonans ═══════════ */

function SesRezonans() {
  const [ortam, setOrtam] = useState('hava')
  const [sicaklik, setSicaklik] = useState(20)
  const [uzaklik, setUzaklik] = useState(100)
  const [ipUzunlugu, setIpUzunlugu] = useState(1)
  const [gerilme, setGerilme] = useState(100)
  const [yogunluk, setYogunluk] = useState(0.01)
  const [surucuFrekans, setSurucuFrekans] = useState(50)
  const [sesAcik, setSesAcik] = useState(false)

  const sesHizi = ortam === 'hava' ? havadaSesHizi(sicaklik) : SES_HIZLARI[ortam].hiz
  const yankiSonuc = yanki({ uzaklik, sesHizi: sesHizi || 1 })
  const ipHizi = ipteDalgaHizi({ gerilme, cizgiselYogunluk: yogunluk }) ?? 0
  const modlar = rezonansFrekanslari({ uzunluk: ipUzunlugu, hiz: ipHizi, adet: 5 })
  const enYakinMod = modlar.reduce((en, m) => (Math.abs(m.frekans - surucuFrekans) < Math.abs(en.frekans - surucuFrekans) ? m : en), modlar[0] ?? { frekans: 1, mod: 1 })
  const genlikTepkisi = rezonansGenligi({ surucuFrekans, dogalFrekans: enYakinMod?.frekans ?? 1, sonum: 0.05 })

  const rezonansEgrisi = useMemo(() => {
    const enBuyuk = (modlar[modlar.length - 1]?.frekans ?? 100) * 1.25
    return Array.from({ length: 240 }, (_, i) => {
      const f = (i / 240) * enBuyuk + 0.5
      // Tüm modların katkısı toplanır: her modun tepe yaptığı yerde zirve olur.
      const g = modlar.reduce((t, m) => t + rezonansGenligi({ surucuFrekans: f, dogalFrekans: m.frekans, sonum: 0.04 }) / m.mod, 0)
      return { x: f, y: Math.min(60, g) }
    })
  }, [modlar])

  const ortamKarsilastirma = useMemo(
    () => ortamDegisimi({ frekans: 500, ilkHiz: SES_HIZLARI.hava.hiz, yeniHiz: sesHizi || 1 }),
    [sesHizi],
  )

  /**
   * İsteğe bağlı ses: yalnızca öğrenci düğmeye bastığında ve güvenli
   * seviyede çalar. Otomatik ses çalma yoktur.
   */
  const sesCal = () => {
    if (typeof window === 'undefined' || !window.AudioContext) return
    try {
      const ctx = new window.AudioContext()
      const osc = ctx.createOscillator()
      const kazanc = ctx.createGain()
      osc.frequency.value = Math.max(80, Math.min(2000, enYakinMod?.frekans * 8 || 440))
      osc.type = 'sine'
      // Güvenli seviye: 0.08 kazanç, yumuşak giriş-çıkış.
      kazanc.gain.setValueAtTime(0.0001, ctx.currentTime)
      kazanc.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.05)
      kazanc.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.1)
      osc.connect(kazanc).connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 1.2)
      osc.onended = () => ctx.close()
    } catch {
      /* Tarayıcı ses üretimine izin vermiyorsa sessizce geçilir. */
    }
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-kart">
          <div className="fa-ust-etiket">Sesin farklı ortamlardaki hızı</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Ortam</th><th>Hâl</th><th style={{ textAlign: 'right' }}>Hız (m/s)</th><th style={{ textAlign: 'right' }}>500 Hz'de λ (m)</th></tr></thead>
              <tbody>
                {Object.entries(SES_HIZLARI).map(([kod, o]) => (
                  <tr key={kod} style={kod === ortam ? { background: 'rgb(var(--fa-vurgu) / 0.12)' } : undefined}>
                    <td style={{ fontWeight: 600 }}>{o.ad}</td>
                    <td style={{ color: 'rgb(var(--fa-metin-2))' }}>
                      {o.hal === 'kati' ? 'Katı' : o.hal === 'sivi' ? 'Sıvı' : o.hal === 'gaz' ? 'Gaz' : '—'}
                    </td>
                    <td className="sayi">{o.hiz === 0 ? 'yayılmaz' : sayiBicimle(o.hiz, 0)}</td>
                    <td className="sayi">{o.hiz === 0 ? '—' : sayiBicimle(dalgaBoyu(o.hiz, 500) ?? 0, 3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 10 }}>
            Ses <strong>katılarda en hızlı</strong>, gazlarda en yavaştır. Belirleyici olan taneciklerin hızı
            değil, birbirlerine ne kadar yakın ve sıkı bağlı olduklarıdır. Boşlukta tanecik olmadığı için ses
            hiç yayılmaz — uzayda patlama sesi duyulmaz.
          </p>
        </div>

        <div style={{ marginTop: 12 }}>
          <OlcumPanosu
            baslik="Ortam ve yankı"
            olcumler={[
              { ad: 'Ses hızı', deger: sesHizi, birim: 'm/s', vurgulu: true, basamak: 0 },
              { ad: 'Frekans (değişmez)', deger: 500, birim: 'Hz', tur: 'notr', basamak: 0 },
              { ad: 'Dalga boyu (değişir)', deger: ortamKarsilastirma.yeniDalgaBoyu ?? 0, birim: 'm', basamak: 3 },
              { ad: 'Yankı süresi', deger: yankiSonuc.sure, birim: 's', basamak: 3 },
              { ad: 'En yakın yankı uzaklığı', deger: yankiSonuc.enYakinUzaklik, birim: 'm', basamak: 1 },
            ]}
          />
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <Grafik
            baslik="Rezonans eğrisi: sürücü frekansa karşı genlik"
            xEtiket="Sürücü frekans (Hz)" yEtiket="Genlik"
            seriler={[{ ad: 'Genlik tepkisi', renk: 'rgb(var(--fa-vektor))', birim: '', veri: rezonansEgrisi }]}
            imlecX={surucuFrekans}
            yukseklik={195}
          />
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginTop: 8 }}>
            Zirveler <strong>doğal frekanslardır</strong>. Sürücü frekans bu değerlerden birine yaklaştığında
            genlik hızla büyür — bardağı sesle kırmak, salıncağı doğru anda itmek, köprünün adım uyumundan
            zarar görmesi hep budur.
          </p>
        </div>

        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">İpin doğal frekansları (iki ucu sabit)</div>
          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Mod</th><th style={{ textAlign: 'right' }}>Frekans (Hz)</th><th style={{ textAlign: 'right' }}>λ (m)</th><th style={{ textAlign: 'right' }}>Düğüm</th><th style={{ textAlign: 'right' }}>Karın</th></tr></thead>
              <tbody>
                {modlar.map((m) => (
                  <tr key={m.mod} style={Math.abs(m.frekans - surucuFrekans) < (modlar[0]?.frekans ?? 1) * 0.08 ? { background: 'rgb(var(--fa-vektor) / 0.14)' } : undefined}>
                    <td>{m.mod}. mod{m.mod === 1 ? ' (temel)' : ''}</td>
                    <td className="sayi">{sayiBicimle(m.frekans, 2)}</td>
                    <td className="sayi">{sayiBicimle(m.dalgaBoyu, 3)}</td>
                    <td className="sayi">{m.dugumSayisi}</td>
                    <td className="sayi">{m.karinSayisi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Duran dalga görseli */}
          <svg viewBox={`0 0 ${SG} 120`} style={{ width: '100%', marginTop: 10 }} role="img"
            aria-label={`${enYakinMod?.mod ?? 1}. modda duran dalga.`}>
            <line x1="20" x2={SG - 20} y1="60" y2="60" stroke="rgb(var(--fa-cizgi))" strokeWidth="1" strokeDasharray="4 4" />
            {[1, -1].map((isaret) => (
              <polyline key={isaret}
                points={Array.from({ length: 121 }, (_, i) => {
                  const s = i / 120
                  const y = isaret * 34 * Math.min(3, genlikTepkisi / 3) * Math.sin(Math.PI * (enYakinMod?.mod ?? 1) * s)
                  return `${20 + s * (SG - 40)},${60 - y}`
                }).join(' ')}
                fill="none" stroke="rgb(var(--fa-vektor))" strokeWidth="2.4" opacity={isaret === 1 ? 1 : 0.45}
              />
            ))}
            {Array.from({ length: (enYakinMod?.mod ?? 1) + 1 }, (_, i) => {
              const s = i / (enYakinMod?.mod ?? 1)
              return <circle key={i} cx={20 + s * (SG - 40)} cy="60" r="4.5" fill="rgb(var(--fa-hata))" />
            })}
            <text x={SG / 2} y="112" textAnchor="middle" fontSize="10.5" fill="rgb(var(--fa-metin-3))">
              Kırmızı noktalar düğüm (hiç titreşmeyen noktalar)
            </text>
          </svg>
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste etiket="Ortam" deger={ortam} onChange={setOrtam}
            secenekler={Object.entries(SES_HIZLARI).map(([kod, o]) => ({ kod, ad: o.ad }))} />
          {ortam === 'hava' ? (
            <Kaydirici etiket="Hava sıcaklığı" deger={sicaklik} onChange={setSicaklik} alt={-20} ust={50} adim={1} birim="°C" basamak={0}
              ipucu="v ≈ 331 + 0,6·T — sıcak havada ses biraz daha hızlı yayılır." />
          ) : null}
          <Kaydirici etiket="Engele uzaklık (yankı)" deger={uzaklik} onChange={setUzaklik} alt={5} ust={500} adim={5} birim="m" basamak={0} />
        </div>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">Rezonans laboratuvarı</div>
          <Kaydirici etiket="İp uzunluğu" deger={ipUzunlugu} onChange={setIpUzunlugu} alt={0.2} ust={3} adim={0.1} birim="m" basamak={1} />
          <Kaydirici etiket="İpin gerilmesi" deger={gerilme} onChange={setGerilme} alt={10} ust={400} adim={10} birim="N" basamak={0}
            ipucu="Gerilme arttıkça dalga hızlanır, doğal frekanslar yükselir (gitar akordu)." />
          <Kaydirici etiket="Çizgisel yoğunluk" deger={yogunluk} onChange={setYogunluk} alt={0.002} ust={0.05} adim={0.002} birim="kg/m" basamak={3}
            ipucu="Kalın tel daha yavaş dalga taşır, sesi kalınlaşır." />
          <Kaydirici etiket="Sürücü frekans" deger={surucuFrekans} onChange={setSurucuFrekans}
            alt={1} ust={Math.max(20, (modlar[modlar.length - 1]?.frekans ?? 100) * 1.2)} adim={0.5} birim="Hz" basamak={1} />
          <div className="fa-olcum-izgara">
            <div className="fa-olcum-kart vurgulu">
              <div className="fa-olcum-ad">İpteki dalga hızı</div>
              <div className="fa-olcum-deger">{sayiBicimle(ipHizi, 1)}<span className="fa-olcum-birim">m/s</span></div>
            </div>
            <div className="fa-olcum-kart vektor">
              <div className="fa-olcum-ad">Genlik tepkisi</div>
              <div className="fa-olcum-deger">{sayiBicimle(genlikTepkisi, 2)}<span className="fa-olcum-birim">×</span></div>
            </div>
          </div>
        </div>

        <div className="fa-kart dar">
          <div className="fa-ust-etiket">İsteğe bağlı ses</div>
          <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-2))', marginBottom: 8 }}>
            İstersen temel modun sesini <strong>güvenli seviyede</strong> dinleyebilirsin. Ses kendiliğinden
            hiçbir zaman çalmaz; yalnızca bu düğmeye bastığında bir saniye çalar.
          </p>
          <button type="button" className="fa-dugme" onClick={() => { setSesAcik(true); sesCal() }}>
            {sesAcik ? <Volume2 size={15} /> : <VolumeX size={15} />} Temel modun sesini dinle
          </button>
        </div>

        <Not tur="bilgi" baslik="Frekans değişmez, hız ve λ değişir">
          Frekansı <strong>kaynak</strong> belirler; ortam değiştirmez. Bir kaynak saniyede 500 titreşim
          gönderiyorsa dalga hangi ortama girerse girsin saniyede 500 titreşim göndermeye devam eder.
          Havadan suya geçen dalga hızlanır ({sayiBicimle(SES_HIZLARI.hava.hiz, 0)} → {sayiBicimle(SES_HIZLARI.su.hiz, 0)} m/s),
          bu yüzden dalga boyu uzar.
        </Not>
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'dalga-tezgahi', ad: 'Dalga Tezgâhı', Bilesen: DalgaTezgahi },
  { kod: 'yansima-girisim', ad: 'Yansıma ve Girişim', Bilesen: YansimaGirisim },
  { kod: 'ses-rezonans', ad: 'Ses ve Rezonans', Bilesen: SesRezonans },
]

export default function DalgaBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="dalgalar" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi etiket="Deney seç" deger={deney} onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))} />
      <Bilesen />
    </ModulKabugu>
  )
}
