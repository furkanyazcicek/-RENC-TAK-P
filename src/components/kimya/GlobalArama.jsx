import { useEffect, useMemo, useRef, useState } from 'react'
import { Search } from 'lucide-react'
import { ELEMENTLER } from '../../data/kimya/elementler.js'
import { TURLER } from '../../data/kimya/turler.js'
import { formuluCozumle } from '../../lib/kimya/formulParser.js'

/**
 * Genel arama.
 * Aynı kutudan element ("oksijen", "O", "8"), kimyasal tür ("su", "H2O",
 * "nitrat") ve bölüm aranabilir; sonuç doğru bölüme yönlendirir.
 */
function normalize(metin) {
  return String(metin ?? '')
    .toLocaleLowerCase('tr')
    .replace(/[ıİ]/g, 'i').replace(/[şŞ]/g, 's').replace(/[ğĞ]/g, 'g')
    .replace(/[üÜ]/g, 'u').replace(/[öÖ]/g, 'o').replace(/[çÇ]/g, 'c')
    .trim()
}

export default function GlobalArama({ bolumler, onElementSec, onTurSec, onBolumSec }) {
  const [sorgu, setSorgu] = useState('')
  const [acik, setAcik] = useState(false)
  const [imlec, setImlec] = useState(0)
  const sarmalRef = useRef(null)

  useEffect(() => {
    const disaridaTiklandi = (olay) => {
      if (sarmalRef.current && !sarmalRef.current.contains(olay.target)) setAcik(false)
    }
    document.addEventListener('mousedown', disaridaTiklandi)
    return () => document.removeEventListener('mousedown', disaridaTiklandi)
  }, [])

  const sonuclar = useMemo(() => {
    const ham = sorgu.trim()
    if (ham.length < 1) return []
    const n = normalize(ham)
    const bulunanlar = []

    /* Elementler */
    for (const e of ELEMENTLER) {
      const puan = e.sembol.toLowerCase() === ham.toLowerCase() ? 100
        : String(e.atomNo) === ham ? 95
          : normalize(e.ad).startsWith(n) ? 80
            : normalize(e.ad).includes(n) ? 55
              : e.sembol.toLowerCase().startsWith(ham.toLowerCase()) ? 50 : 0
      if (puan) bulunanlar.push({ puan, tur: 'element', rozet: e.sembol, ad: e.ad, altBaslik: `Element · atom no ${e.atomNo}`, veri: e })
    }

    /* Kimyasal türler */
    for (const t of TURLER) {
      const adaylar = [t.anahtar, t.ad, ...t.adlar]
      let puan = 0
      for (const aday of adaylar) {
        const an = normalize(aday)
        if (an === n) puan = Math.max(puan, 98)
        else if (an.startsWith(n)) puan = Math.max(puan, 78)
        else if (an.includes(n)) puan = Math.max(puan, 52)
      }
      if (puan) bulunanlar.push({ puan, tur: 'tur', rozet: t.anahtar.replace(/\^(\d?)([+-])/, '$1$2'), ad: t.ad, altBaslik: t.sinifBilgisi?.ad ?? 'Kimyasal tür', veri: t })
    }

    /* Bölümler */
    for (const b of bolumler) {
      const bn = normalize(b.ad)
      if (bn.includes(n)) bulunanlar.push({ puan: 40, tur: 'bolum', rozet: '§', ad: b.ad, altBaslik: 'Bölüme git', veri: b })
    }

    /* Formül olarak çözümlenebiliyorsa laboratuvar önerisi */
    const cozum = formuluCozumle(ham)
    if (cozum.basarili && !bulunanlar.some((x) => x.tur === 'tur' && x.rozet === cozum.anahtar)) {
      bulunanlar.push({
        puan: 70,
        tur: 'formul',
        rozet: cozum.bicimli,
        ad: `${cozum.bicimli} formülünü analiz et`,
        altBaslik: `${cozum.toplamAtom} atom · ${cozum.elementCesidi} element çeşidi`,
        veri: ham,
      })
    }

    return bulunanlar.sort((a, b) => b.puan - a.puan).slice(0, 8)
  }, [sorgu, bolumler])

  useEffect(() => { setImlec(0) }, [sorgu])

  const sec = (sonuc) => {
    setAcik(false)
    setSorgu('')
    if (sonuc.tur === 'element') onElementSec(sonuc.veri)
    else if (sonuc.tur === 'tur') onTurSec(sonuc.veri.anahtar)
    else if (sonuc.tur === 'formul') onTurSec(sonuc.veri)
    else onBolumSec(sonuc.veri.kod)
  }

  const tusla = (olay) => {
    if (!sonuclar.length) return
    if (olay.key === 'ArrowDown') { olay.preventDefault(); setImlec((i) => (i + 1) % sonuclar.length) }
    else if (olay.key === 'ArrowUp') { olay.preventDefault(); setImlec((i) => (i - 1 + sonuclar.length) % sonuclar.length) }
    else if (olay.key === 'Enter') { olay.preventDefault(); sec(sonuclar[imlec]) }
    else if (olay.key === 'Escape') setAcik(false)
  }

  return (
    <div className="ka-arama" ref={sarmalRef}>
      <Search size={15} className="ka-arama-ikon" />
      <input
        className="ka-arama-alan"
        value={sorgu}
        onChange={(e) => { setSorgu(e.target.value); setAcik(true) }}
        onFocus={() => setAcik(true)}
        onKeyDown={tusla}
        placeholder="Ara: oksijen, O, 8, su, H2O, nitrat…"
        aria-label="Kimya Atlası içinde ara"
        spellCheck={false}
        autoComplete="off"
      />
      {acik && sonuclar.length > 0 && (
        <div className="ka-arama-sonuc" role="listbox">
          {sonuclar.map((s, i) => (
            <button
              key={`${s.tur}-${s.rozet}-${i}`}
              type="button"
              className={i === imlec ? 'imlecli' : ''}
              onClick={() => sec(s)}
              onMouseEnter={() => setImlec(i)}
              role="option"
              aria-selected={i === imlec}
            >
              <span className="ka-arama-rozet">{s.rozet}</span>
              <span style={{ minWidth: 0 }}>
                <span className="ka-arama-ad" style={{ display: 'block' }}>{s.ad}</span>
                <span className="ka-arama-tur">{s.altBaslik}</span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
