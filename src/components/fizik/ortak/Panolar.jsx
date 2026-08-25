import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import { sayiBicimle } from '../../../lib/fizik/birimler.js'

/**
 * Ölçüm kartı — bir büyüklüğün anlık değeri.
 * Renk rolü anlam taşır: camgöbeği ölçüm, turuncu vektör, sarı enerji.
 * Birim her zaman görünür; birimsiz sayı gösterilmez.
 */
export function OlcumKarti({ ad, deger, birim = '', basamak = 2, tur = 'olcum', vurgulu = false, ipucu = null }) {
  return (
    <div className={`fa-olcum-kart ${tur} ${vurgulu ? 'vurgulu' : ''}`} title={ipucu ?? undefined}>
      <div className="fa-olcum-ad">{ad}</div>
      <div className="fa-olcum-deger">
        {typeof deger === 'number' ? sayiBicimle(deger, basamak) : deger}
        {birim ? <span className="fa-olcum-birim">{birim}</span> : null}
      </div>
    </div>
  )
}

/** Ölçüm kartlarını ızgaraya dizer. */
export function OlcumPanosu({ olcumler, baslik = null }) {
  return (
    <div>
      {baslik ? <div className="fa-alan-etiket">{baslik}</div> : null}
      <div className="fa-olcum-izgara">
        {olcumler.map((o) => <OlcumKarti key={o.ad} {...o} />)}
      </div>
    </div>
  )
}

/**
 * Formül paneli — deneyden SONRA gösterilir.
 * Her sembolün anlamı ve birimi ayrı bir rozet olarak görünür; öğrenci
 * "k neydi?" diye başka yere bakmak zorunda kalmaz.
 */
export function FormulPaneli({ formuller, baslik = 'Bağıntılar' }) {
  return (
    <div>
      {baslik ? <div className="fa-alan-etiket">{baslik}</div> : null}
      <div style={{ display: 'grid', gap: 9 }}>
        {formuller.map((f) => (
          <div className="fa-formul" key={f.ifade}>
            <div className="fa-formul-ifade">{f.ifade}</div>
            {f.semboller?.length ? (
              <div className="fa-formul-semboller">
                {f.semboller.map((s) => (
                  <span className="fa-sembol" key={s.sembol}>
                    <b>{s.sembol}</b> {s.anlam} <i>({s.birim})</i>
                  </span>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

const NOT_IKON = { bilgi: Info, uyari: AlertTriangle, hata: XCircle, olumlu: CheckCircle2 }

/** Bilgi / uyarı kutusu. */
export function Not({ tur = 'bilgi', baslik = null, children }) {
  const Ikon = NOT_IKON[tur] ?? Info
  const sinif = tur === 'bilgi' ? '' : tur
  return (
    <div className={`fa-not ${sinif}`}>
      <Ikon size={17} aria-hidden="true" />
      <div>
        {baslik ? <strong style={{ display: 'block', marginBottom: 2 }}>{baslik}</strong> : null}
        {children}
      </div>
    </div>
  )
}

/** Sık yapılan hatalar listesi — yanlış / doğru / neden üçlüsüyle. */
export function HataListesi({ hatalar }) {
  return (
    <div>
      {hatalar.map((h) => (
        <div className="fa-hata-oge" key={h.yanlis}>
          <div className="fa-hata-yanlis">✗ {h.yanlis}</div>
          <div className="fa-hata-dogru">✓ {h.dogru}</div>
          <div className="fa-hata-neden">{h.neden}</div>
        </div>
      ))}
    </div>
  )
}

/** Günlük hayat bağlantıları. */
export function GunlukHayat({ ogeler }) {
  return (
    <div className="fa-izgara iki">
      {ogeler.map((o) => (
        <div className="fa-gunluk-oge" key={o.baslik}>
          <h4>{o.baslik}</h4>
          <p>{o.metin}</p>
        </div>
      ))}
    </div>
  )
}

/** İlerleme çubuğu. */
export function IlerlemeCubugu({ yuzde, etiket = null }) {
  return (
    <div>
      {etiket ? (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgb(var(--fa-metin-2))', marginBottom: 4 }}>
          <span>{etiket}</span>
          <span style={{ fontWeight: 700 }}>%{yuzde}</span>
        </div>
      ) : null}
      <div className="fa-ilerleme-yol" role="progressbar" aria-valuenow={yuzde} aria-valuemin={0} aria-valuemax={100} aria-label={etiket ?? 'İlerleme'}>
        <div className="fa-ilerleme-dolu" style={{ width: `${yuzde}%` }} />
      </div>
    </div>
  )
}
