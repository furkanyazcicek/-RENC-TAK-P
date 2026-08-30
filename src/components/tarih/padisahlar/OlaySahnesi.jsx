import { useEffect, useRef } from 'react'
import { ArrowLeft, Info, Swords } from 'lucide-react'
import DonemHaritasi from './DonemHaritasi'
import { AtlasDugmesi, Tarih } from './SekmePaneli'

/**
 * OLAY SAHNESİ — mini belgesel sahnesi
 *
 * Bir olaya dokunulduğunda açılan modal DEĞİLDİR. Sahne komple
 * değişir: padişah geri çekilir, harita öne gelir ve olayın
 * bölgesine yaklaşır, yıl büyür, taraflar sırayla açılır.
 * "Padişaha dön" ile ana sahneye geri dönülür.
 */
export default function OlaySahnesi({ olay, haritaId, onKapat }) {
  const geriRef = useRef(null)

  // Sahne açılınca odak buraya gelir; Escape ile geri dönülür.
  useEffect(() => {
    geriRef.current?.focus()
    const dinleyici = (olayNesnesi) => {
      if (olayNesnesi.key === 'Escape') onKapat?.()
    }
    window.addEventListener('keydown', dinleyici)
    return () => window.removeEventListener('keydown', dinleyici)
  }, [onKapat])

  const bolumler = [
    { etiket: 'Nedeni', metin: olay.cause },
    { etiket: 'Ne oldu', metin: olay.detail },
    { etiket: 'Sonucu', metin: olay.result },
    { etiket: 'Osmanlı tarihi açısından önemi', metin: olay.significance ?? olay.effect },
  ].filter((bolum) => bolum.metin)

  return (
    <section className="pg-olay-sahne" role="dialog" aria-modal="true" aria-label={`${olay.title} — olay sahnesi`}>
      <header className="pg-olay-sahne-ust">
        <button type="button" ref={geriRef} className="pg-dugme pg-dugme-sade pg-dugme-kucuk" onClick={onKapat}>
          <ArrowLeft size={15} aria-hidden="true" /> Padişaha dön
        </button>
        <span className={`pg-rozet ${olay.eventType === 'major' ? 'pg-rozet-altin' : 'pg-rozet-sonuk'}`}>
          {olay.eventType === 'major' ? 'Dönüm noktası' : olay.kaynak === 'fetih' ? 'Fetih' : olay.kaynak === 'antlasma' ? 'Antlaşma' : 'Olay'}
        </span>
      </header>

      <div className="pg-olay-sahne-govde">
        <div className="pg-olay-sahne-harita">
          <DonemHaritasi
            haritaId={haritaId}
            odak={olay.mapFocus}
            vurgular={olay.mapFocus ? [olay.mapFocus] : []}
            lejant={false}
            not={false}
          />
        </div>

        <div className="pg-olay-sahne-bilgi">
          <p className="pg-olay-sahne-yil"><Tarih deger={olay.date} kisa /></p>
          <h2 className="pg-olay-sahne-ad">{olay.title}</h2>
          {olay.date?.disputed && (
            <p className="pg-olay-ozet" style={{ marginTop: 6 }}>
              <Info size={12} aria-hidden="true" /> Tarih kaynaklara göre değişir: {olay.date.note}
            </p>
          )}

          {olay.sides?.length > 0 && (
            <>
              <h3 className="pg-bolum-basligi"><Swords size={13} aria-hidden="true" /> Taraflar</h3>
              <div className="pg-taraf-listesi">
                {olay.sides.map((taraf) => (
                  <p className="pg-taraf" key={taraf}>
                    <span className="pg-taraf-nokta" aria-hidden="true" />
                    <span>{taraf}</span>
                  </p>
                ))}
              </div>
            </>
          )}

          {olay.from && (
            <div className="pg-kart" style={{ marginTop: 12 }}>
              <p className="pg-olay-ozet" style={{ margin: 0 }}>
                <strong style={{ color: 'rgb(var(--pg-altin-acik))' }}>Kimden alındı: </strong>{olay.from}
              </p>
            </div>
          )}

          {bolumler.map((bolum) => (
            <div key={bolum.etiket}>
              <h3 className="pg-bolum-basligi">{bolum.etiket}</h3>
              <p className="pg-ozet">{bolum.metin}</p>
            </div>
          ))}

          {olay.articles?.length > 0 && (
            <>
              <h3 className="pg-bolum-basligi">Önemli maddeleri</h3>
              <div className="pg-osym-liste">
                {olay.articles.map((madde, sira) => (
                  <p className="pg-osym-madde" key={madde}>
                    <span className="pg-osym-no">{sira + 1}</span>
                    <span>{madde}</span>
                  </p>
                ))}
              </div>
            </>
          )}

          {olay.osym && (
            <div className="pg-kart pg-kart-vurgu" style={{ marginTop: 14 }}>
              <span className="pg-rozet pg-rozet-altin">ÖSYM’de bil</span>
              <p className="pg-ozet" style={{ marginTop: 8 }}>{olay.osym}</p>
            </div>
          )}

          {olay.atlas && (
            <div style={{ marginTop: 14 }}>
              <AtlasDugmesi baglanti={olay.atlas} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
