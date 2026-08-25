import { useMemo, useState } from 'react'
import { BAGLANTILAR, BOLGELER, ROZETLER, TOPLAM_DENEY } from '../../data/fizik/bolgeler.js'
import { ikonBul } from '../../data/fizik/ikonlar.js'
import { bolgeYuzdesi, genelYuzde } from '../../lib/fizik/ilerleme.js'
import { IlerlemeCubugu } from './ortak/index.js'

/**
 * Fizik Atlası — Keşif haritası
 * ==================================================================
 * Ana ekran bir yönetim paneli listesi değil, bir **atlas**tır: bölgeler
 * uzayda dağılmış düğümler, aralarındaki oklar ise ön koşul ilişkileridir.
 * "Vektörler → Kuvvet → Enerji" zinciri gözle takip edilebilir.
 *
 * Öğrenci hiçbir yerde kilitlenmez; oklar bir engel değil, bir tavsiyedir.
 * Bir bölgenin üstüne gelindiğinde ona bağlı oklar vurgulanır.
 */

const HARITA_G = 1000
const HARITA_Y = 620

export default function AtlasHaritasi({ ilerleme, onBolgeSec }) {
  const [vurgulu, setVurgulu] = useState(null)

  const dugumler = useMemo(() => BOLGELER.map((b) => ({
    ...b,
    // Yüzde konumları SVG koordinatına çevrilir; kenarlardan pay bırakılır.
    cx: 70 + (b.konum.x / 100) * (HARITA_G - 140),
    cy: 55 + (b.konum.y / 100) * (HARITA_Y - 130),
    yuzde: bolgeYuzdesi(ilerleme, b.kod, b.deneyler.length),
  })), [ilerleme])

  const dugumBul = (kod) => dugumler.find((d) => d.kod === kod)

  const yuzdeGenel = genelYuzde(
    ilerleme,
    BOLGELER.map((b) => ({ kod: b.kod, deneySayisi: b.deneyler.length })),
  )
  const kazanilanRozet = ROZETLER.filter((r) => ilerleme.rozetler.includes(r.kod))

  return (
    <div>
      <div className="fa-hero">
        <h1>Fizik Atlası</h1>
        <p className="fa-hero-alt">
          On üç bölge, otuz altı deney. Formülle başlamıyoruz: önce büyüklüklerle oynuyorsun,
          sonuçları anında görüyorsun, bağıntıyı kendin keşfediyorsun.
        </p>
      </div>

      {/* Genel ilerleme şeridi */}
      <div className="fa-kart" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: '1 1 240px', minWidth: 0 }}>
            <IlerlemeCubugu yuzde={yuzdeGenel} etiket="Atlasın tamamı" />
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <span className="fa-rozet mavi">{TOPLAM_DENEY} deney</span>
            <span className="fa-rozet">{BOLGELER.length} bölge</span>
            {kazanilanRozet.length > 0 ? (
              <span className="fa-rozet olumlu">{kazanilanRozet.length} rozet</span>
            ) : null}
          </div>
        </div>
      </div>

      {/* Harita */}
      <div className="fa-harita-sarmal" style={{ marginBottom: 18 }}>
        <svg
          className="fa-harita"
          viewBox={`0 0 ${HARITA_G} ${HARITA_Y}`}
          role="group"
          aria-label="Fizik Atlası bölge haritası. Oklar önerilen sırayı gösterir."
        >
          {/* Arka plan yıldız dokusu — dekoratif, anlam taşımaz */}
          <g aria-hidden="true" opacity="0.5">
            {Array.from({ length: 60 }, (_, i) => {
              // Sabit bir dizilim: her açılışta aynı görünsün diye deterministik.
              const x = ((i * 137.5) % HARITA_G)
              const y = ((i * 241.7) % HARITA_Y)
              const r = ((i % 3) + 1) * 0.5
              return <circle key={i} cx={x} cy={y} r={r} fill="rgb(var(--fa-metin-3))" opacity={0.25} />
            })}
          </g>

          {/* Ön koşul okları */}
          <defs>
            <marker id="fa-ok" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--fa-cizgi-guclu))" />
            </marker>
            <marker id="fa-ok-vurgu" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="rgb(var(--fa-vurgu))" />
            </marker>
          </defs>

          {BAGLANTILAR.map((bag) => {
            const a = dugumBul(bag.from)
            const b = dugumBul(bag.to)
            if (!a || !b) return null
            const vurgu = vurgulu === bag.from || vurgulu === bag.to
            // Düğüm dairelerinin içine girmemesi için uçlar yarıçap kadar kısaltılır.
            const dx = b.cx - a.cx
            const dy = b.cy - a.cy
            const boy = Math.hypot(dx, dy) || 1
            const r = 34
            return (
              <line
                key={`${bag.from}-${bag.to}`}
                x1={a.cx + (dx / boy) * r}
                y1={a.cy + (dy / boy) * r}
                x2={b.cx - (dx / boy) * (r + 8)}
                y2={b.cy - (dy / boy) * (r + 8)}
                className={`fa-harita-bag ${vurgu ? 'vurgulu' : ''}`}
                markerEnd={vurgu ? 'url(#fa-ok-vurgu)' : 'url(#fa-ok)'}
              />
            )
          })}

          {/* Bölge düğümleri */}
          {dugumler.map((d) => {
            const Ikon = ikonBul(d.ikon)
            const cevre = 2 * Math.PI * 30
            return (
              <g
                key={d.kod}
                className="fa-harita-dugum"
                tabIndex={0}
                role="button"
                aria-label={`${d.ad}. Tamamlanma: yüzde ${d.yuzde}. ${d.ozet}`}
                onClick={() => onBolgeSec(d.kod)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onBolgeSec(d.kod) } }}
                onPointerEnter={() => setVurgulu(d.kod)}
                onPointerLeave={() => setVurgulu(null)}
                onFocus={() => setVurgulu(d.kod)}
                onBlur={() => setVurgulu(null)}
              >
                {/* İlerleme halkası — bölgenin ne kadarı bitti */}
                <circle
                  className="halka"
                  cx={d.cx} cy={d.cy} r={30}
                  fill="none" stroke={d.renk} strokeWidth="2.5"
                  strokeDasharray={`${(d.yuzde / 100) * cevre} ${cevre}`}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${d.cx} ${d.cy})`}
                  opacity={d.yuzde > 0 ? 1 : 0.25}
                />
                <circle
                  className="govde"
                  cx={d.cx} cy={d.cy} r={vurgulu === d.kod ? 25 : 23}
                  fill={d.renk} fillOpacity="0.2"
                  stroke={d.renk} strokeWidth="1.6"
                />
                <foreignObject x={d.cx - 11} y={d.cy - 11} width="22" height="22" style={{ pointerEvents: 'none' }}>
                  <div style={{ color: d.renk, display: 'grid', placeItems: 'center', height: '100%' }}>
                    <Ikon size={19} aria-hidden="true" />
                  </div>
                </foreignObject>
                <text className="fa-harita-ad" x={d.cx} y={d.cy + 47} textAnchor="middle">{d.kisaAd}</text>
                <text className="fa-harita-alt" x={d.cx} y={d.cy + 60} textAnchor="middle">
                  {d.yuzde > 0 ? `%${d.yuzde}` : `${d.deneyler.length} deney`}
                </text>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Bölge kartları — haritayı okuyamayan ya da liste isteyen için */}
      <div className="fa-bolum-basi">
        <h2>Bölgeler</h2>
        <p>İstediğin bölgeden başlayabilirsin. Oklar zorunluluk değil, kolaylık sırası.</p>
      </div>
      <div className="fa-izgara uc">
        {dugumler.map((d) => {
          const Ikon = ikonBul(d.ikon)
          const onKosulAdlari = d.onKosullar.map((k) => dugumBul(k)?.kisaAd).filter(Boolean)
          return (
            <button
              key={d.kod}
              type="button"
              className="fa-bolge-kart"
              style={{ '--fa-bolge-renk': d.renk }}
              onClick={() => onBolgeSec(d.kod)}
            >
              <span className="fa-bolge-serit" aria-hidden="true" />
              <span className="fa-bolge-ikon"><Ikon size={19} aria-hidden="true" /></span>
              <h3>{d.ad}</h3>
              <p>{d.ozet}</p>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 10 }}>
                <span className="fa-rozet">{d.deneyler.length} deney</span>
                {d.yuzde > 0 ? <span className="fa-rozet olumlu">%{d.yuzde}</span> : null}
              </div>
              {onKosulAdlari.length > 0 ? (
                <div style={{ fontSize: 11.5, color: 'rgb(var(--fa-metin-3))', marginTop: 8 }}>
                  Önce bakmanda yarar var: {onKosulAdlari.join(', ')}
                </div>
              ) : null}
            </button>
          )
        })}
      </div>

      {/* Rozetler */}
      <div className="fa-bolum-basi" style={{ marginTop: 26 }}>
        <h2>Rozetler</h2>
        <p>Rozetler yarışmak için değil, nereye kadar geldiğini görmek için.</p>
      </div>
      <div className="fa-izgara dort">
        {ROZETLER.map((r) => {
          const Ikon = ikonBul(r.ikon)
          const kazanildi = ilerleme.rozetler.includes(r.kod)
          return (
            <div key={r.kod} className="fa-kart dar" style={{ opacity: kazanildi ? 1 : 0.5 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{
                  display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 10, flex: 'none',
                  background: kazanildi ? 'rgb(var(--fa-enerji) / 0.18)' : 'rgb(var(--fa-yuzey-3))',
                  color: kazanildi ? 'rgb(var(--fa-enerji))' : 'rgb(var(--fa-metin-3))',
                }}
                >
                  <Ikon size={17} aria-hidden="true" />
                </span>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ fontSize: 13.5 }}>{r.ad}</h4>
                  <p style={{ fontSize: 12, color: 'rgb(var(--fa-metin-3))', marginTop: 2 }}>{r.aciklama}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
