import { useId } from 'react'
import {
  ChevronLeft, ChevronRight, Pause, Play, RotateCcw,
} from 'lucide-react'
import { sayiBicimle, sinirla } from '../../../lib/fizik/birimler.js'

/**
 * Kaydırıcı — her simülasyonun temel giriş aracı.
 *
 * Yanında sayı kutusu vardır: kaba ayar için sürükleme, tam değer için
 * yazma. Girilen değer fiziksel sınırların dışına çıkarsa sessizce
 * kırpılır; "negatif kütle" gibi anlamsız bir durum hiç oluşmaz.
 * Klavyeyle de kullanılabilir (ok tuşları) — tarayıcının kendi range
 * davranışı korunur.
 */
export function Kaydirici({
  etiket, deger, onChange, alt, ust, adim = 1, birim = '', basamak = 2,
  ipucu = null, renk = 'olcum', devreDisi = false,
}) {
  const id = useId()
  const oran = ust === alt ? 0 : ((deger - alt) / (ust - alt)) * 100

  const degistir = (ham) => {
    const sayi = Number(ham)
    if (Number.isNaN(sayi)) return
    onChange(sinirla(sayi, alt, ust))
  }

  return (
    <div className="fa-kaydirici">
      <div className="fa-kaydirici-ust">
        <label className="fa-kaydirici-etiket" htmlFor={id}>{etiket}</label>
        <span className="fa-kaydirici-deger" style={renk === 'vektor' ? { color: 'rgb(var(--fa-vektor))' } : undefined}>
          {sayiBicimle(deger, basamak)}{birim ? ` ${birim}` : ''}
        </span>
      </div>
      <div className="fa-kaydirici-satir">
        <input
          id={id}
          type="range"
          min={alt}
          max={ust}
          step={adim}
          value={deger}
          disabled={devreDisi}
          onChange={(e) => degistir(e.target.value)}
          style={{ '--fa-doluluk': `${oran}%` }}
          aria-valuetext={`${sayiBicimle(deger, basamak)} ${birim}`}
        />
        <input
          className="fa-kaydirici-sayi"
          type="number"
          value={Number(deger.toFixed(basamak))}
          min={alt}
          max={ust}
          step={adim}
          disabled={devreDisi}
          onChange={(e) => degistir(e.target.value)}
          aria-label={`${etiket} sayı girişi`}
        />
        {birim ? <span className="fa-kaydirici-birim">{birim}</span> : null}
      </div>
      {ipucu ? <div className="fa-kaydirici-ipucu">{ipucu}</div> : null}
    </div>
  )
}

/** Açık/kapalı anahtarı — hava direnci, sürtünme, iz bırakma gibi seçenekler. */
export function Anahtar({ etiket, acik, onChange, ipucu = null }) {
  return (
    <div>
      <label className="fa-onay">
        <input type="checkbox" checked={acik} onChange={(e) => onChange(e.target.checked)} />
        {etiket}
      </label>
      {ipucu ? <div className="fa-kaydirici-ipucu" style={{ marginLeft: 25 }}>{ipucu}</div> : null}
    </div>
  )
}

/** Seçenek şeridi — birbirini dışlayan kısa seçimler için. */
export function SecimSeridi({ etiket, secenekler, deger, onChange }) {
  return (
    <div style={{ marginBottom: 12 }}>
      {etiket ? <span className="fa-alan-etiket">{etiket}</span> : null}
      <div className="fa-secim" role="group" aria-label={etiket ?? 'Seçim'}>
        {secenekler.map((s) => (
          <button
            key={s.kod}
            type="button"
            aria-pressed={deger === s.kod}
            onClick={() => onChange(s.kod)}
          >
            {s.ad}
          </button>
        ))}
      </div>
    </div>
  )
}

/** Açılır liste — çok sayıda seçenek olduğunda (madde, sıvı, ortam listeleri). */
export function Liste({ etiket, secenekler, deger, onChange }) {
  const id = useId()
  return (
    <div style={{ marginBottom: 12 }}>
      <label className="fa-alan-etiket" htmlFor={id}>{etiket}</label>
      <select id={id} className="fa-secme" value={deger} onChange={(e) => onChange(e.target.value)}>
        {secenekler.map((s) => (
          <option key={s.kod} value={s.kod}>{s.ad}</option>
        ))}
      </select>
    </div>
  )
}

/**
 * Simülasyon oynatma çubuğu: oynat/duraklat, adım adım ilerlet/geri al,
 * sıfırla ve zaman hızı. Her deneyde aynı yerde, aynı sırada durur.
 */
export function SimKontrol({
  calisiyor, oynat, duraklat, sifirla, adimla, geriAdimla,
  zaman, hiz, setHiz, adimBoyu = 0.1, ekstra = null,
}) {
  return (
    <div className="fa-kontrol">
      <button
        type="button"
        className="fa-dugme birincil kucuk"
        onClick={calisiyor ? duraklat : oynat}
        aria-label={calisiyor ? 'Duraklat' : 'Oynat'}
      >
        {calisiyor ? <Pause size={15} /> : <Play size={15} />}
        {calisiyor ? 'Duraklat' : 'Oynat'}
      </button>

      <button type="button" className="fa-dugme kucuk" onClick={() => geriAdimla(adimBoyu)} aria-label="Bir adım geri">
        <ChevronLeft size={15} />
      </button>
      <button type="button" className="fa-dugme kucuk" onClick={() => adimla(adimBoyu)} aria-label="Bir adım ileri">
        <ChevronRight size={15} />
      </button>

      <button type="button" className="fa-dugme kucuk" onClick={sifirla} aria-label="Deneyi sıfırla">
        <RotateCcw size={14} /> Sıfırla
      </button>

      {zaman !== undefined ? (
        <span className="fa-kontrol-zaman" aria-live="off">t = {sayiBicimle(zaman, 2)} s</span>
      ) : null}

      {ekstra}

      {setHiz ? (
        <div className="fa-kontrol-hiz">
          <span>Hız</span>
          <div className="fa-secim">
            {[0.25, 0.5, 1, 2].map((h) => (
              <button key={h} type="button" aria-pressed={hiz === h} onClick={() => setHiz(h)}>
                {h === 1 ? '1×' : `${String(h).replace('.', ',')}×`}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
