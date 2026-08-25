import { useState } from 'react'
import {
  CheckCircle2, Eye, HelpCircle, Lightbulb, RotateCcw, Target, XCircle,
} from 'lucide-react'
import { Not } from './Panolar.jsx'
import { vurguyuIsle } from './metin.jsx'
import { kavramKaydet } from '../../../lib/fizik/ilerleme.js'

const HARFLER = ['A', 'B', 'C', 'D', 'E']

/**
 * Tahmin kutusu — deneyden ÖNCE gelir.
 *
 * Amaç sınamak değil, öğrencinin zihnindeki modeli açığa çıkarmak.
 * Öğrenci bir tahminde bulunduktan sonra deneyi izlerse, tahmini
 * tutmadığında bunu fark eder ve kavram gerçekten değişir. Tahmin
 * yapmadan izlenen deney "güzel animasyon" olarak kalır.
 */
export function TahminKutusu({ tahmin, onCevap = null }) {
  const [secim, setSecim] = useState(null)
  const [sonucAcik, setSonucAcik] = useState(false)
  const acildi = sonucAcik

  const sec = (i) => {
    if (acildi) return
    setSecim(i)
  }

  const sonucuAc = () => {
    if (secim === null || acildi) return
    setSonucAcik(true)
    onCevap?.(tahmin.secenekler[secim].dogru)
  }

  return (
    <div className="fa-tahmin">
      <div className="fa-ust-etiket" style={{ color: 'rgb(var(--fa-mor))' }}>
        <HelpCircle size={13} /> Önce tahmin et
      </div>
      <h3 style={{ fontSize: 15.5, marginBottom: 4 }}>{tahmin.soru}</h3>
      <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))' }}>
        Deneyi açmadan önce ne olacağını tahmin et. Yanlış tahmin etmek serbest — asıl öğrenme orada başlıyor.
      </p>

      {tahmin.secenekler.map((s, i) => {
        const durum = !acildi ? (i === secim ? 'secili' : '') : s.dogru ? 'dogru' : (i === secim ? 'yanlis' : '')
        return (
          <button
            key={s.metin}
            type="button"
            className={`fa-tahmin-secenek ${durum}`}
            onClick={() => sec(i)}
            disabled={acildi}
          >
            <span className="fa-tahmin-harf">{HARFLER[i]}</span>
            <span style={{ flex: 1 }}>{s.metin}</span>
            {acildi && s.dogru ? <CheckCircle2 size={16} style={{ color: 'rgb(var(--fa-olumlu))', flex: 'none' }} /> : null}
            {acildi && i === secim && !s.dogru ? <XCircle size={16} style={{ color: 'rgb(var(--fa-hata))', flex: 'none' }} /> : null}
          </button>
        )
      })}

      {!acildi ? (
        <div className="fa-tahmin-kilit">
          <div>
            <b>{secim === null ? 'Bir tahmin seç' : 'Tahminin kaydedildi'}</b>
            <span>{secim === null ? 'Sonucu açmadan önce zihnindeki modeli işaretle.' : 'Yukarıdaki değerlerle oyna; sonra kanıtı aç.'}</span>
          </div>
          <button type="button" className="fa-dugme birincil kucuk" onClick={sonucuAc} disabled={secim === null}>
            <Eye size={14} /> Kanıtı göster
          </button>
        </div>
      ) : null}

      {acildi ? (
        <div style={{ marginTop: 12 }}>
          <Not tur={tahmin.secenekler[secim].dogru ? 'olumlu' : 'uyari'} baslik={tahmin.secenekler[secim].dogru ? 'Doğru tahmin' : 'Şimdi deneyde gör'}>
            {tahmin.aciklama}
          </Not>
          <button
            type="button"
            className="fa-dugme sade kucuk"
            style={{ marginTop: 8 }}
            onClick={() => { setSecim(null); setSonucAcik(false) }}
          >
            <RotateCcw size={13} /> Yeniden tahmin et
          </button>
        </div>
      ) : null}
    </div>
  )
}

/**
 * Öğrenme kontrolü — çoktan seçmeli sorular.
 *
 * Yanlış cevapta doğru şık **hemen söylenmez**: önce ipucu verilir ve
 * ikinci deneme hakkı tanınır. İkinci denemede de yanlışsa çözüm açılır.
 * Bu, "yanlış yaptım, cevabı gördüm, geçtim" döngüsünü kırar.
 *
 * Her sorunun `yanilgi` kodu Kavram Pusulası'na yazılır; öğrencinin
 * hangi kavramda takıldığı böylece izlenir.
 */
export function OgrenmeKontrolu({ sorular, bolgeKod, onTamamla = null }) {
  const [durum, setDurum] = useState(() => sorular.map(() => ({ secim: null, deneme: 0, bitti: false })))

  const cevapla = (soruIndeks, secenekIndeks) => {
    const soru = sorular[soruIndeks]
    setDurum((eski) => {
      const yeni = [...eski]
      const d = { ...yeni[soruIndeks] }
      if (d.bitti) return eski

      const dogruMu = secenekIndeks === soru.dogru
      d.secim = secenekIndeks
      d.deneme += 1
      // İlk denemede doğruysa ya da ikinci denemeye gelindiyse soru kapanır.
      d.bitti = dogruMu || d.deneme >= 2
      yeni[soruIndeks] = d

      if (soru.yanilgi) kavramKaydet(soru.yanilgi, dogruMu)
      if (yeni.every((x) => x.bitti)) onTamamla?.(yeni.filter((x, i) => x.secim === sorular[i].dogru).length)
      return yeni
    })
  }

  const sifirla = () => setDurum(sorular.map(() => ({ secim: null, deneme: 0, bitti: false })))
  const dogruSayisi = durum.filter((d, i) => d.bitti && d.secim === sorular[i].dogru).length
  const bitenSayisi = durum.filter((d) => d.bitti).length

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
        <div className="fa-ust-etiket" style={{ margin: 0 }}>
          <Target size={13} /> Öğrenme kontrolü
        </div>
        <span className="fa-rozet olumlu">{dogruSayisi} / {sorular.length} doğru</span>
      </div>

      {sorular.map((soru, si) => {
        const d = durum[si]
        const dogruMu = d.bitti && d.secim === soru.dogru
        const ipucuGoster = d.deneme === 1 && !d.bitti

        return (
          <div className="fa-kart sade" key={soru.soru} style={{ marginBottom: 12 }}>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <span className="fa-tahmin-harf" style={{ marginTop: 1 }}>{si + 1}</span>
              <h4 style={{ fontSize: 14.5, flex: 1 }}>{vurguyuIsle(soru.soru)}</h4>
            </div>

            <div style={{ marginTop: 6 }}>
              {soru.secenekler.map((s, i) => {
                let sinif = ''
                if (d.bitti) {
                  if (i === soru.dogru) sinif = 'dogru'
                  else if (i === d.secim) sinif = 'yanlis'
                } else if (i === d.secim) sinif = 'yanlis'

                return (
                  <button
                    key={s}
                    type="button"
                    className={`fa-tahmin-secenek ${sinif}`}
                    onClick={() => cevapla(si, i)}
                    disabled={d.bitti}
                  >
                    <span className="fa-tahmin-harf">{HARFLER[i]}</span>
                    <span style={{ flex: 1 }}>{s}</span>
                    {d.bitti && i === soru.dogru ? <CheckCircle2 size={16} style={{ color: 'rgb(var(--fa-olumlu))', flex: 'none' }} /> : null}
                  </button>
                )
              })}
            </div>

            {ipucuGoster ? (
              <div style={{ marginTop: 10 }}>
                <Not tur="uyari" baslik="Bir daha dene">
                  <span style={{ display: 'flex', gap: 6, alignItems: 'flex-start' }}>
                    <Lightbulb size={15} style={{ flex: 'none', marginTop: 1 }} aria-hidden="true" />
                    {soru.ipucu}
                  </span>
                </Not>
              </div>
            ) : null}

            {d.bitti ? (
              <div style={{ marginTop: 10 }}>
                <Not tur={dogruMu ? 'olumlu' : 'bilgi'} baslik={dogruMu ? (d.deneme === 1 ? 'Doğru' : 'İkinci denemede doğru') : 'Çözüm'}>
                  {soru.cozum}
                </Not>
              </div>
            ) : null}
          </div>
        )
      })}

      {bitenSayisi === sorular.length ? (
        <button type="button" className="fa-dugme kucuk" onClick={sifirla}>
          <RotateCcw size={14} /> Soruları sıfırla
        </button>
      ) : null}
    </div>
  )
}

/** Mini görev kutusu — deneyde yapılacak somut bir meydan okuma. */
export function MiniGorev({ gorev }) {
  return (
    <div className="fa-kart" style={{ borderColor: 'rgb(var(--fa-enerji) / 0.35)', background: 'rgb(var(--fa-enerji) / 0.07)' }}>
      <div className="fa-ust-etiket" style={{ color: 'rgb(var(--fa-enerji))' }}>
        <Target size={13} /> Mini görev
      </div>
      <h3 style={{ fontSize: 15.5, marginBottom: 5 }}>{gorev.baslik}</h3>
      <p style={{ fontSize: 13.5, color: 'rgb(var(--fa-metin-2))' }}>{gorev.metin}</p>
    </div>
  )
}
