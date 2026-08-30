import { useMemo, useState } from 'react'
import { ArrowRight, Check, Ruler, Shuffle, X } from 'lucide-react'
import {
  Kaydirici, Liste, ModulKabugu, Not, OlcumPanosu, SecimSeridi,
} from '../ortak/index.js'
import { BUYUKLUKLER, OLCUM_ARACLARI, bagilHata, olcumYap } from '../../../lib/fizik/olcme.js'
import {
  DONUSUM, TEMEL_BUYUKLUKLER, TURETILMIS_BUYUKLUKLER, cevir, gruptakiBirimler,
  sayiBicimle, sicakligaCevir,
} from '../../../lib/fizik/birimler.js'

/* ═══════════ Deney 1: Büyüklük Ayırıcı ═══════════ */

/**
 * Öğrenci her büyüklüğü skaler mi vektörel mi diye ayırır.
 * Yanlışta doğru cevap hemen söylenmez; büyüklük listeye geri döner ve
 * "yönünü söylemezsem eksik kalır mı?" sorusu hatırlatılır.
 */
function BuyuklukAyirici() {
  const [sira, setSira] = useState(() => karistir(BUYUKLUKLER))
  const [indeks, setIndeks] = useState(0)
  const [sonuc, setSonuc] = useState(null)
  const [puan, setPuan] = useState({ dogru: 0, yanlis: 0 })

  const aktif = sira[indeks]
  const bitti = indeks >= sira.length

  const sec = (tur) => {
    if (sonuc) return
    const dogruMu = tur === aktif.tur
    setSonuc({ dogruMu, secilen: tur })
    setPuan((p) => ({ dogru: p.dogru + (dogruMu ? 1 : 0), yanlis: p.yanlis + (dogruMu ? 0 : 1) }))
  }

  const ilerle = () => { setSonuc(null); setIndeks((i) => i + 1) }
  const yeniden = () => { setSira(karistir(BUYUKLUKLER)); setIndeks(0); setSonuc(null); setPuan({ dogru: 0, yanlis: 0 }) }

  return (
    <div className="fa-kart">
      <div className="fa-bolum-basi">
        <h3 style={{ fontSize: 16 }}>Büyüklük Ayırıcı</h3>
        <p style={{ fontSize: 13 }}>
          Her büyüklük için tek soruyu sor: <strong>yönünü söylemezsem eksik kalır mı?</strong>
        </p>
      </div>

      {bitti ? (
        <div style={{ textAlign: 'center', padding: 20 }}>
          <div style={{ fontSize: 30, fontWeight: 800, color: 'rgb(var(--fa-olcum))' }}>
            {puan.dogru} / {sira.length}
          </div>
          <p style={{ fontSize: 13.5, color: 'rgb(var(--fa-metin-2))', marginTop: 6 }}>
            {puan.yanlis === 0
              ? 'Tamamı doğru. Skaler–vektörel ayrımını oturtmuşsun.'
              : `${puan.yanlis} tanesinde takıldın. Takıldıklarını aşağıdaki tabloda gerekçesiyle görebilirsin.`}
          </p>
          <button type="button" className="fa-dugme birincil" style={{ marginTop: 14 }} onClick={yeniden}>
            <Shuffle size={15} /> Yeniden karıştır
          </button>
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginBottom: 10 }}>
            <span>{indeks + 1} / {sira.length}</span>
            <span>{puan.dogru} doğru · {puan.yanlis} yanlış</span>
          </div>

          <div
            style={{
              textAlign: 'center', padding: '26px 16px', borderRadius: 14,
              background: 'rgb(var(--fa-yuzey-2))', border: '1px solid rgb(var(--fa-cizgi))',
            }}
          >
            <div style={{ fontSize: 26, fontWeight: 750, letterSpacing: '-0.02em' }}>{aktif.ad}</div>
            <div style={{ fontSize: 13, color: 'rgb(var(--fa-metin-3))', marginTop: 3 }}>Birimi: {aktif.birim}</div>
          </div>

          <div style={{ display: 'flex', gap: 9, marginTop: 14 }}>
            {['skaler', 'vektorel'].map((tur) => (
              <button
                key={tur}
                type="button"
                className={`fa-dugme ${sonuc ? (tur === aktif.tur ? 'birincil' : '') : ''}`}
                style={{ flex: 1, minHeight: 46 }}
                onClick={() => sec(tur)}
                disabled={!!sonuc}
              >
                {tur === 'skaler' ? 'Skaler' : 'Vektörel'}
                {sonuc && tur === aktif.tur ? <Check size={15} /> : null}
                {sonuc && tur === sonuc.secilen && !sonuc.dogruMu ? <X size={15} /> : null}
              </button>
            ))}
          </div>

          {sonuc ? (
            <div style={{ marginTop: 12 }}>
              <Not tur={sonuc.dogruMu ? 'olumlu' : 'uyari'} baslik={sonuc.dogruMu ? 'Doğru' : `Bu büyüklük ${aktif.tur === 'skaler' ? 'skalerdir' : 'vektöreldir'}`}>
                {aktif.neden}
              </Not>
              <button type="button" className="fa-dugme birincil" style={{ marginTop: 10 }} onClick={ilerle}>
                Sonraki <ArrowRight size={15} />
              </button>
            </div>
          ) : null}
        </>
      )}

      <details style={{ marginTop: 16 }}>
        <summary style={{ cursor: 'pointer', fontSize: 13, fontWeight: 600, color: 'rgb(var(--fa-metin-2))' }}>
          Tam listeyi gerekçeleriyle gör
        </summary>
        <div className="fa-tablo-sarmal" style={{ marginTop: 10 }}>
          <table className="fa-tablo">
            <thead>
              <tr><th>Büyüklük</th><th>Tür</th><th>Birim</th><th>Neden</th></tr>
            </thead>
            <tbody>
              {BUYUKLUKLER.map((b) => (
                <tr key={b.ad}>
                  <td style={{ fontWeight: 650 }}>{b.ad}</td>
                  <td>
                    <span className={`fa-rozet ${b.tur === 'skaler' ? 'olcum' : 'vektor'}`}>
                      {b.tur === 'skaler' ? 'Skaler' : 'Vektörel'}
                    </span>
                  </td>
                  <td>{b.birim}</td>
                  <td style={{ color: 'rgb(var(--fa-metin-2))', fontSize: 12.5 }}>{b.neden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  )
}

/* ═══════════ Deney 2: Ölçüm Tezgâhı ═══════════ */

/**
 * Aynı gerçek değeri farklı duyarlılıklarla ölçtürür.
 * Görsel olarak bir cetvel çizilir; bölme aralığı duyarlılıkla değişir.
 * Öğrenci gerçek değeri kendi belirlediği için "ölçüm gerçeği değil,
 * gerçeğe erişimimizi değiştirir" fikri doğrudan görünür.
 */
function OlcumTezgahi() {
  const [aracKod, setAracKod] = useState('cetvel')
  const [duyarlilikIndeks, setDuyarlilikIndeks] = useState(1)
  const [gercek, setGercek] = useState(12.347)

  const arac = OLCUM_ARACLARI[aracKod]
  const secenek = arac.secenekler[Math.min(duyarlilikIndeks, arac.secenekler.length - 1)]
  const olcum = olcumYap({ gercekDeger: gercek, duyarlilik: secenek.duyarlilik })
  const hata = bagilHata(olcum.okunanDeger, gercek)

  // Cetvel görseli: 0–20 arası, bölmeler duyarlılığa göre sıklaşır.
  const CETVEL_G = 620
  const CETVEL_MAKS = 20
  const px = (d) => 20 + (d / CETVEL_MAKS) * (CETVEL_G - 40)
  const bolmeAdimi = Math.max(secenek.duyarlilik, 0.1)
  const bolmeSayisi = Math.min(400, Math.round(CETVEL_MAKS / bolmeAdimi))

  return (
    <div>
      <div className="fa-lab">
        <div>
          <div className="fa-sahne">
            <svg viewBox={`0 0 ${CETVEL_G} 200`} role="img" aria-label={`Ölçüm sahnesi. Gerçek değer ${gercek}, okunan değer ${olcum.okunanDeger}.`}>
              {/* Ölçülen cisim */}
              <rect x={px(0)} y={54} width={px(gercek) - px(0)} height={30} rx="4"
                fill="rgb(var(--fa-vurgu) / 0.35)" stroke="rgb(var(--fa-vurgu))" strokeWidth="1.5" />
              <text x={(px(0) + px(gercek)) / 2} y={44} textAnchor="middle" fontSize="11.5" fill="rgb(var(--fa-metin-2))" fontWeight="600">
                Ölçülen cisim
              </text>

              {/* Cetvel gövdesi */}
              <rect x={px(0) - 4} y={100} width={px(CETVEL_MAKS) - px(0) + 8} height={54} rx="5"
                fill="rgb(var(--fa-yuzey-2))" stroke="rgb(var(--fa-cizgi-guclu))" strokeWidth="1.2" />

              {/* Bölmeler */}
              {Array.from({ length: bolmeSayisi + 1 }, (_, i) => {
                const d = i * bolmeAdimi
                if (d > CETVEL_MAKS) return null
                const buyuk = Math.abs(d % 1) < 1e-9
                const orta = !buyuk && Math.abs(d % 0.5) < 1e-9
                return (
                  <g key={i}>
                    <line x1={px(d)} x2={px(d)} y1={100} y2={100 + (buyuk ? 20 : orta ? 13 : 8)}
                      stroke="rgb(var(--fa-metin-3))" strokeWidth={buyuk ? 1.3 : 0.7} />
                    {buyuk && d % 2 === 0 ? (
                      <text x={px(d)} y={100 + 34} textAnchor="middle" fontSize="9.5" fill="rgb(var(--fa-metin-3))">{d}</text>
                    ) : null}
                  </g>
                )
              })}

              {/* Gerçek değer göstergesi */}
              <line x1={px(gercek)} x2={px(gercek)} y1={84} y2={160} stroke="rgb(var(--fa-vurgu))" strokeWidth="1.4" strokeDasharray="4 3" />

              {/* Okunan değer ve belirsizlik aralığı */}
              <rect
                x={px(Math.max(0, olcum.altSinir))}
                y={162}
                width={Math.max(2, px(olcum.ustSinir) - px(Math.max(0, olcum.altSinir)))}
                height={12}
                rx="3"
                fill="rgb(var(--fa-olcum) / 0.35)" stroke="rgb(var(--fa-olcum))" strokeWidth="1"
              />
              <text x={px(olcum.okunanDeger)} y={192} textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgb(var(--fa-olcum))">
                {olcum.metin} {arac.birim}
              </text>
            </svg>
            <div className="fa-sahne-rozet">
              <span className="fa-rozet olcum">{secenek.ad}</span>
              <span className="fa-rozet">belirsizlik ±{sayiBicimle(olcum.belirsizlik, 4)} {arac.birim}</span>
            </div>
          </div>

          <div style={{ marginTop: 12 }}>
            <OlcumPanosu
              olcumler={[
                { ad: 'Gerçek değer', deger: gercek, birim: arac.birim, basamak: 3, tur: 'notr' },
                { ad: 'Okunan değer', deger: olcum.okunanDeger, birim: arac.birim, basamak: 3, vurgulu: true },
                { ad: 'Belirsizlik', deger: olcum.belirsizlik, birim: arac.birim, basamak: 4 },
                { ad: 'Bağıl hata', deger: hata ?? 0, birim: '%', basamak: 3 },
              ]}
            />
          </div>
        </div>

        <div className="fa-lab-yan">
          <div className="fa-kart dar">
            <Liste
              etiket="Ölçüm aracı"
              deger={aracKod}
              onChange={(k) => { setAracKod(k); setDuyarlilikIndeks(1) }}
              secenekler={Object.entries(OLCUM_ARACLARI).map(([kod, a]) => ({ kod, ad: `${a.ad} — ${a.olcer}` }))}
            />

            <SecimSeridi
              etiket="Duyarlılık"
              deger={String(Math.min(duyarlilikIndeks, arac.secenekler.length - 1))}
              onChange={(k) => setDuyarlilikIndeks(Number(k))}
              secenekler={arac.secenekler.map((s, i) => ({ kod: String(i), ad: sayiBicimle(s.duyarlilik, 3) }))}
            />

            <Kaydirici
              etiket="Gerçek değer (senin belirlediğin)"
              deger={gercek}
              onChange={setGercek}
              alt={0.5} ust={19.5} adim={0.001} birim={arac.birim} basamak={3}
              ipucu="Bu, doğanın gerçek değeri. Ölçüm aracı bunu ne kadar iyi okuyabiliyor?"
            />
          </div>

          <Not tur="bilgi" baslik="Duyarlılık ≠ doğruluk">
            Hassas araç daha <strong>ince</strong> okur, daha doğru okumaz. Ayarı bozuk hassas bir terazi,
            yanlış sonucu daha çok basamakla söyler.
          </Not>
        </div>
      </div>
    </div>
  )
}

/* ═══════════ Deney 3: Birim Dönüşüm Laboratuvarı ═══════════ */

/**
 * Aynı büyüklüğün tüm birim karşılıklarını yan yana gösterir.
 * Farklı gruplar arasında dönüşüm (kg → m gibi) bilinçli olarak
 * engellenir; anlamsız bir soruya sayı üretilmez.
 */
function BirimLaboratuvari() {
  const [grup, setGrup] = useState('hiz')
  const [birim, setBirim] = useState('km/sa')
  const [deger, setDeger] = useState(72)

  const gruplar = useMemo(() => {
    const set = new Map()
    for (const [kod, d] of Object.entries(DONUSUM)) {
      if (!set.has(d.grup)) set.set(d.grup, [])
      set.get(d.grup).push(kod)
    }
    return set
  }, [])

  const grupBirimleri = gruptakiBirimler(grup)
  const gecerliBirim = grupBirimleri.includes(birim) ? birim : grupBirimleri[0]

  const GRUP_ADLARI = {
    uzunluk: 'Uzunluk', kutle: 'Kütle', zaman: 'Zaman', hiz: 'Hız', alan: 'Alan',
    hacim: 'Hacim', kuvvet: 'Kuvvet', enerji: 'Enerji', guc: 'Güç', basinc: 'Basınç',
    ozkutle: 'Özkütle', frekans: 'Frekans',
  }

  return (
    <div className="fa-lab">
      <div>
        <div className="fa-kart">
          <div className="fa-bolum-basi">
            <h3 style={{ fontSize: 16 }}>Aynı büyüklük, farklı birimler</h3>
            <p style={{ fontSize: 13 }}>Değişen sayı, değişmeyen fizik. SI birimi yeşil rozetle işaretli.</p>
          </div>

          <div className="fa-tablo-sarmal">
            <table className="fa-tablo">
              <thead><tr><th>Birim</th><th>Adı</th><th style={{ textAlign: 'right' }}>Karşılığı</th></tr></thead>
              <tbody>
                {grupBirimleri.map((b) => {
                  const sonuc = cevir(deger, gecerliBirim, b)
                  const siMi = DONUSUM[b].si === b
                  return (
                    <tr key={b} style={b === gecerliBirim ? { background: 'rgb(var(--fa-vurgu) / 0.1)' } : undefined}>
                      <td style={{ fontWeight: 700 }}>
                        {b} {siMi ? <span className="fa-rozet olumlu" style={{ marginLeft: 5 }}>SI</span> : null}
                      </td>
                      <td style={{ color: 'rgb(var(--fa-metin-2))' }}>{DONUSUM[b].ad}</td>
                      <td className="sayi" style={{ color: 'rgb(var(--fa-olcum))', fontWeight: 700 }}>
                        {sayiBicimle(sonuc, 4)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sıcaklık ayrı: çarpımsal değil, toplamsal dönüşüm */}
        <div className="fa-kart" style={{ marginTop: 12 }}>
          <div className="fa-ust-etiket">Sıcaklık — neden ayrı?</div>
          <p style={{ fontSize: 13, color: 'rgb(var(--fa-metin-2))', marginBottom: 10 }}>
            Diğer birimler bir <strong>çarpanla</strong> dönüşür (1 km = 1000 m). Sıcaklıkta sıfır noktaları
            farklı olduğu için ayrıca <strong>toplama</strong> yapılır. Bu yüzden “iki katı sıcaklık” demek
            °C ile K’de aynı şeyi ifade etmez.
          </p>
          <SicaklikSatiri />
        </div>
      </div>

      <div className="fa-lab-yan">
        <div className="fa-kart dar">
          <Liste
            etiket="Büyüklük"
            deger={grup}
            onChange={(g) => { setGrup(g); setBirim(gruptakiBirimler(g)[0]) }}
            secenekler={[...gruplar.keys()].map((g) => ({ kod: g, ad: GRUP_ADLARI[g] ?? g }))}
          />
          <Liste
            etiket="Girdiğin birim"
            deger={gecerliBirim}
            onChange={setBirim}
            secenekler={grupBirimleri.map((b) => ({ kod: b, ad: `${b} — ${DONUSUM[b].ad}` }))}
          />
          <Kaydirici
            etiket="Değer"
            deger={deger}
            onChange={setDeger}
            alt={0} ust={1000} adim={0.1} birim={gecerliBirim} basamak={2}
          />
        </div>

        <Not tur="uyari" baslik="Farklı gruplar dönüşmez">
          “5 kg kaç metre eder?” sorusunun cevabı yoktur. Bu laboratuvar yalnızca aynı büyüklüğün
          birimleri arasında dönüşüm yapar; anlamsız bir soruya sayı üretmez.
        </Not>
      </div>
    </div>
  )
}

function SicaklikSatiri() {
  const [c, setC] = useState(25)
  return (
    <div>
      <Kaydirici etiket="Sıcaklık" deger={c} onChange={setC} alt={-273.15} ust={200} adim={0.1} birim="°C" basamak={1} />
      <div className="fa-olcum-izgara">
        {['°C', 'K', '°F'].map((h) => (
          <div className="fa-olcum-kart" key={h}>
            <div className="fa-olcum-ad">{h === 'K' ? 'Kelvin (SI)' : h === '°C' ? 'Celsius' : 'Fahrenheit'}</div>
            <div className="fa-olcum-deger">
              {sayiBicimle(sicakligaCevir(c, '°C', h), 2)}<span className="fa-olcum-birim">{h}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════ Bölge ═══════════ */

const DENEYLER = [
  { kod: 'buyukluk-ayirici', ad: 'Büyüklük Ayırıcı', Bilesen: BuyuklukAyirici },
  { kod: 'olcum-tezgahi', ad: 'Ölçüm Tezgâhı', Bilesen: OlcumTezgahi },
  { kod: 'birim-laboratuvari', ad: 'Birim Laboratuvarı', Bilesen: BirimLaboratuvari },
]

export default function OlcmeBolgesi() {
  const [deney, setDeney] = useState(DENEYLER[0].kod)
  const aktif = DENEYLER.find((d) => d.kod === deney) ?? DENEYLER[0]
  const Bilesen = aktif.Bilesen

  return (
    <ModulKabugu bolgeKod="olcme" deneyKod={deney} deneyBasligi={aktif.ad}>
      <SecimSeridi
        etiket="Deney seç"
        deger={deney}
        onChange={setDeney}
        secenekler={DENEYLER.map((d) => ({ kod: d.kod, ad: d.ad }))}
      />
      <Bilesen />

      <div className="fa-kart" style={{ marginTop: 14 }}>
        <div className="fa-ust-etiket"><Ruler size={13} /> SI birim sistemi</div>
        <div className="fa-izgara iki">
          <div>
            <h4 style={{ fontSize: 13.5, marginBottom: 8 }}>Temel büyüklükler (7 tane)</h4>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Büyüklük</th><th>Birim</th><th>Sembol</th></tr></thead>
                <tbody>
                  {TEMEL_BUYUKLUKLER.map((b) => (
                    <tr key={b.ad}><td>{b.ad}</td><td>{b.birim}</td><td style={{ fontWeight: 700 }}>{b.birimSembol}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13.5, marginBottom: 8 }}>Türetilmiş büyüklükler</h4>
            <div className="fa-tablo-sarmal">
              <table className="fa-tablo">
                <thead><tr><th>Büyüklük</th><th>Birim</th><th>Temel birimlerle</th></tr></thead>
                <tbody>
                  {TURETILMIS_BUYUKLUKLER.map((b) => (
                    <tr key={b.ad}>
                      <td>{b.ad}</td>
                      <td style={{ fontWeight: 700 }}>{b.birimSembol}</td>
                      <td style={{ fontFamily: 'ui-monospace, Menlo, monospace', fontSize: 12, color: 'rgb(var(--fa-olcum))' }}>{b.acilim}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ModulKabugu>
  )
}

/** Fisher–Yates karıştırma — her turda farklı sıra. */
function karistir(dizi) {
  const k = [...dizi]
  for (let i = k.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[k[i], k[j]] = [k[j], k[i]]
  }
  return k
}
