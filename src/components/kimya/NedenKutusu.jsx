import { useState } from 'react'
import { ChevronRight, HelpCircle, Sparkles } from 'lucide-react'

/**
 * "Bu neden böyle?" kutusu.
 * Açıklama tek seferde dökülmez; öğrenci adımları sırayla açar. Böylece
 * her adımda kendi cevabını tahmin etme fırsatı bulur.
 */
export default function NedenKutusu({ soru, adimlar = [], sonuc = null, acikBasla = false }) {
  const [acik, setAcik] = useState(acikBasla)
  const [gorunen, setGorunen] = useState(acikBasla ? adimlar.length : 0)

  const hepsiAcik = gorunen >= adimlar.length

  return (
    <div className="ka-kart sade dar" style={{ borderStyle: acik ? 'solid' : 'dashed' }}>
      <button
        type="button"
        className="ka-dugme sade"
        style={{ width: '100%', justifyContent: 'flex-start', padding: 0, minHeight: 0 }}
        onClick={() => { setAcik((a) => !a); if (!acik && gorunen === 0) setGorunen(1) }}
        aria-expanded={acik}
      >
        <HelpCircle size={16} style={{ color: 'rgb(var(--ka-vurgu))' }} />
        <span style={{ fontWeight: 700, color: 'rgb(var(--ka-metin))', textAlign: 'left' }}>{soru}</span>
        <ChevronRight
          size={16}
          style={{ marginLeft: 'auto', transform: acik ? 'rotate(90deg)' : 'none', transition: 'transform 180ms' }}
        />
      </button>

      {acik && (
        <div style={{ marginTop: 12 }}>
          <div className="ka-adimlar">
            {adimlar.slice(0, gorunen).map((adim, i) => (
              <div className="ka-adim" key={i} style={{ animationDelay: `${i * 40}ms` }}>
                <span className="ka-adim-no">{i + 1}</span>
                <span>{adim}</span>
              </div>
            ))}
            {hepsiAcik && sonuc && (
              <div className="ka-adim sonuc">
                <span className="ka-adim-no"><Sparkles size={12} /></span>
                <span dangerouslySetInnerHTML={{ __html: kalinYap(sonuc) }} />
              </div>
            )}
          </div>

          {!hepsiAcik && (
            <button
              type="button"
              className="ka-dugme kucuk"
              style={{ marginTop: 10 }}
              onClick={() => setGorunen((g) => g + 1)}
            >
              Sonraki adım ({gorunen}/{adimlar.length})
            </button>
          )}
        </div>
      )}
    </div>
  )
}

/** Metindeki **kalın** işaretlerini <strong> etiketine çevirir. */
function kalinYap(metin) {
  return String(metin)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
}

export { kalinYap }
