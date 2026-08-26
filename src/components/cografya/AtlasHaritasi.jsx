/**
 * Coğrafya Atlası — Açılış ekranı
 * ==================================================================
 * Üç katman:
 *   1) Halka açılışı — Padişah Geçidi'ndeki portre halkasının coğrafya
 *      karşılığı. Orada 36 hükümdar portresi vardı; burada on TYT
 *      konusunun kendi çizimi halkayı kuruyor.
 *   2) Keşif rotası — bölgeler arası ön koşul oklarının şeması.
 *   3) Bölge galerisi — her bölgenin çizimi, sınav künyesi ve durakları.
 *
 * Halkanın yarıçapı CSS'te `--ca-halka-r` ile tanımlıdır; başlık bloğu
 * halkanın içinde kalacak genişlikte sınırlanır, böylece dar ekranda da
 * yazı ile kartlar üst üste binmez.
 */

import { useCallback, useRef } from 'react'
import { ArrowRight, CheckCircle2, Compass, MapPinned, Sparkles, Target } from 'lucide-react'
import { BAGLANTILAR, BOLGELER, TYT_BOLGELERI } from '../../data/cografya/bolgeler.js'
import { bolgeEtkilesimleri, bolgeKonulari } from '../../data/cografya/kapsam.js'
import BolgeCizimi from './BolgeCizimi.jsx'
import CografiMercek from './CografiMercek.jsx'

const KAPSAM_ETIKETI = { tymm: '2026 TYMM', tyt: 'TYT kampı', tum: 'Onarım alanı' }

/** Kapsam filtresine göre görünen bölgeler. */
function gorunenBolgeler(kapsam) {
  return BOLGELER.filter((b) => kapsam === 'tum' || b.kapsam === 'ortak' || b.kapsam === 'tum' || b.kapsam === kapsam)
}

export default function AtlasHaritasi({ kapsam, yuzdeler, onBolgeSec }) {
  const gorunenler = gorunenBolgeler(kapsam)
  const heroRef = useRef(null)

  /* İşaretçi derinliği — halka ve zemin imlecin tersine kayar. */
  const derinlikVer = useCallback((olay) => {
    const kutu = heroRef.current
    if (!kutu || olay.pointerType === 'touch') return
    const alan = kutu.getBoundingClientRect()
    const x = ((olay.clientX - alan.left) / Math.max(1, alan.width) - 0.5) * 2
    const y = ((olay.clientY - alan.top) / Math.max(1, alan.height) - 0.5) * 2
    kutu.style.setProperty('--ca-fx', `${(x * 14).toFixed(1)}px`)
    kutu.style.setProperty('--ca-fy', `${(y * 10).toFixed(1)}px`)
  }, [])
  const derinlikSifirla = useCallback(() => {
    heroRef.current?.style.setProperty('--ca-fx', '0px')
    heroRef.current?.style.setProperty('--ca-fy', '0px')
  }, [])

  const toplamDurak = BOLGELER.reduce((t, b) => t + bolgeEtkilesimleri(b.kod).length, 0)
  const toplamBaslik = BOLGELER.reduce((t, b) => t + bolgeKonulari(b.kod).length, 0)

  return (
    <>
      {/* ── 1) Halka açılışı ───────────────────────────────────────── */}
      <section
        className="ca-hero"
        ref={heroRef}
        onPointerMove={derinlikVer}
        onPointerLeave={derinlikSifirla}
      >
        <img
          className="ca-hero-gorsel"
          src="/atlas-assets/cografya/imagegen/dunya-yuksek-yorunge.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="ca-hero-perde" aria-hidden="true" />

        <div className="ca-konu-halkasi" aria-label="On TYT coğrafya konusu">
          {TYT_BOLGELERI.map((bolge, index) => (
            <button
              type="button"
              key={bolge.kod}
              style={{ '--aci': `${index * 36}deg`, '--renk': bolge.renk }}
              onClick={() => onBolgeSec(bolge.kod)}
              aria-label={`${index + 1}. konu: ${bolge.konu}`}
            >
              <BolgeCizimi kod={bolge.kod} renk={bolge.renk} sinif="halka" />
              <b>{String(index + 1).padStart(2, '0')}</b>
              <small>{bolge.kisaAd}</small>
            </button>
          ))}
        </div>

        <div className="ca-hero-merkez">
          <span>Dr. Koç · Coğrafya</span>
          <h1>Coğrafya<br />Atlası</h1>
          <p>Dünya’yı ezberleme. Kanıtla oku.</p>
          <button type="button" onClick={() => onBolgeSec('sistemler')}>
            <Compass size={15} /> Rotayı başlat
          </button>
          <small>{TYT_BOLGELERI.length} konu · {toplamDurak} laboratuvar · {toplamBaslik} başlık</small>
        </div>
      </section>

      <CografiMercek kompakt />

      {/* ── 2) Keşif rotası ───────────────────────────────────────── */}
      <section className="ca-atlas-harita">
        <div className="ca-harita-bolum-bas">
          <div><span>Önerilen rota</span><h2>Katmanlı Dünya laboratuvarı</h2></div>
          <p>Oklar ön koşul ilişkisini gösterir; kilit değildir.</p>
        </div>
        <div className="ca-atlas-alan">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="ca-ok" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                <path d="M0 0L6 3 0 6z" />
              </marker>
            </defs>
            {BAGLANTILAR.map(([a, b]) => {
              const x = BOLGELER.find((v) => v.kod === a)
              const y = BOLGELER.find((v) => v.kod === b)
              if (!x || !y || !gorunenler.includes(x) || !gorunenler.includes(y)) return null
              return <line key={`${a}-${b}`} x1={x.konum[0]} y1={x.konum[1]} x2={y.konum[0]} y2={y.konum[1]} markerEnd="url(#ca-ok)" />
            })}
          </svg>
          <div>
            {gorunenler.map((bolge) => {
              const sira = BOLGELER.indexOf(bolge) + 1
              const oran = yuzdeler[bolge.kod] ?? 0
              return (
                <button
                  key={bolge.kod}
                  type="button"
                  className="ca-atlas-dugum"
                  style={{ '--x': `${bolge.konum[0]}%`, '--y': `${bolge.konum[1]}%`, '--renk': bolge.renk }}
                  onClick={() => onBolgeSec(bolge.kod)}
                  title={bolge.amac}
                >
                  <i aria-hidden="true">{String(sira).padStart(2, '0')}</i>
                  <strong>{bolge.kisaAd}</strong>
                  <em>{bolge.kapsam === 'ortak'
                    ? <>{oran ? <CheckCircle2 /> : null}%{oran}</>
                    : KAPSAM_ETIKETI[bolge.kapsam]}</em>
                  <u>{bolge.ad}</u>
                </button>
              )
            })}
          </div>
          <i><MapPinned /> Keşif haritası şematiktir; oklar zorunlu sıra değildir.</i>
        </div>
      </section>

      {/* ── 3) Bölge galerisi ─────────────────────────────────────── */}
      <section className="ca-bolge-galeri">
        <div className="ca-harita-bolum-bas">
          <div><span>Bölgeler</span><h2>Her bölgenin kendi çizimi var</h2></div>
          <p>Çizimler süs değil; o bölgenin ana ilişkisini küçültülmüş şema olarak gösterir.</p>
        </div>
        <div className="ca-galeri-izgara">
          {gorunenler.map((bolge) => {
            const duraklar = bolgeEtkilesimleri(bolge.kod)
            const basliklar = bolgeKonulari(bolge.kod)
            const oncekiler = bolge.onKosullar.map((k) => BOLGELER.find((b) => b.kod === k)?.kisaAd).filter(Boolean)
            const sira = BOLGELER.indexOf(bolge) + 1
            return (
              <button
                key={bolge.kod}
                type="button"
                className="ca-galeri-kart"
                style={{ '--renk': bolge.renk }}
                onClick={() => onBolgeSec(bolge.kod)}
              >
                <span className="ca-galeri-gorsel">
                  <BolgeCizimi kod={bolge.kod} renk={bolge.renk} />
                </span>
                <span className="ca-galeri-govde">
                  <span className="ca-galeri-ust">
                    <i>{bolge.konu}</i>
                    <em>{String(sira).padStart(2, '0')}</em>
                  </span>
                  <strong>{bolge.ad}</strong>
                  <small>{bolge.ozet}</small>
                  <span className="ca-galeri-rozetler">
                    {duraklar.length ? <b>{duraklar.length} laboratuvar</b> : <b>pekiştirme alanı</b>}
                    {basliklar.length ? <b>{basliklar.length} başlık</b> : null}
                    {bolge.kapsam !== 'ortak' ? <b className="ayri">{KAPSAM_ETIKETI[bolge.kapsam]}</b> : null}
                  </span>
                  <span className="ca-galeri-sinav">
                    <Target size={12} />
                    <span>{bolge.sinavNotu.siklik}</span>
                  </span>
                  {oncekiler.length ? <span className="ca-galeri-onkosul">Önce bakmakta yarar var: {oncekiler.join(', ')}</span> : null}
                  <span className="ca-galeri-eylem">Bölgeye gir <ArrowRight size={13} /></span>
                </span>
              </button>
            )
          })}
        </div>
        <p className="ca-galeri-not">
          <Sparkles size={13} /> Sınav sıklıkları son yılların eğilimini özetler; TYT’de coğrafya toplam 5 soruyla temsil edilir ve dağılım yıldan yıla değişir.
        </p>
      </section>
    </>
  )
}
