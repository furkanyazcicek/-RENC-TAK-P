import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArrowRight, Award, BookOpenCheck, Clock3, Lightbulb, RotateCcw, Sparkles, TriangleAlert,
} from 'lucide-react'
import { BolgeBasligi } from '../ortak/index.js'
import { TYT_AYARLARI, tytSorulariniSec } from '../../../data/cografya/tyt.js'
import { hataKaydet, ilerlemeOku, tytDenemeKaydet } from '../../../lib/cografya/ilerleme.js'

const sureYaz = (saniye) => `${String(Math.floor(saniye / 60)).padStart(2, '0')}:${String(saniye % 60).padStart(2, '0')}`

export default function KampBolgesi({ soruSayisi = TYT_AYARLARI.soruSayisi }) {
  const sorular = useMemo(() => tytSorulariniSec(soruSayisi), [soruSayisi])
  const [index, setIndex] = useState(0)
  const [cevaplar, setCevaplar] = useState({})
  const [ipuclari, setIpuclari] = useState({})
  const [transferler, setTransferler] = useState({})
  const [zamanli, setZamanli] = useState(TYT_AYARLARI.zamanliBaslangic)
  const [kalan, setKalan] = useState(TYT_AYARLARI.sureSaniye)
  const [bitti, setBitti] = useState(false)
  const soru = sorular[index]
  const cevap = cevaplar[soru?.id]
  const cevaplandi = cevap !== undefined

  const puan = useMemo(
    () => sorular.filter((kayit) => cevaplar[kayit.id] === kayit.cevap).length,
    [cevaplar, sorular],
  )
  const cevaplanan = Object.keys(cevaplar).length

  const bitir = useCallback(() => {
    if (bitti) return
    const dogru = sorular.filter((kayit) => cevaplar[kayit.id] === kayit.cevap).length
    tytDenemeKaydet({
      soruSayisi: sorular.length,
      cevaplanan: Object.keys(cevaplar).length,
      dogru,
      yanlis: Object.keys(cevaplar).length - dogru,
      zamanli,
      kalanSaniye: kalan,
    })
    setBitti(true)
  }, [bitti, cevaplar, kalan, sorular, zamanli])

  useEffect(() => {
    if (!zamanli || bitti || kalan <= 0) return undefined
    const sayac = window.setInterval(() => setKalan((deger) => Math.max(0, deger - 1)), 1000)
    return () => window.clearInterval(sayac)
  }, [bitti, kalan, zamanli])

  useEffect(() => {
    if (zamanli && kalan === 0 && !bitti) bitir()
  }, [bitir, bitti, kalan, zamanli])

  const yanitla = (secim) => {
    if (cevaplandi || bitti) return
    setCevaplar((eski) => ({ ...eski, [soru.id]: secim }))
    if (secim !== soru.cevap) hataKaydet(soru.id, secim, soru.yanilgi)
  }

  const transferYanitla = (secim) => {
    if (transferler[soru.id] !== undefined || bitti) return
    setTransferler((eski) => ({ ...eski, [soru.id]: secim }))
  }

  const yenidenBasla = () => {
    setIndex(0)
    setCevaplar({})
    setIpuclari({})
    setTransferler({})
    setKalan(TYT_AYARLARI.sureSaniye)
    setBitti(false)
  }

  const hataSayisi = ilerlemeOku().hataDefteri.length
  const oncekiDeneme = ilerlemeOku().tytDenemeleri.at(-1)

  if (bitti) {
    return (
      <div className="ca-bolge">
        <BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Oturum tamamlandı; puanı değil, yeniden çalışman gereken kanıt türlerini oku." sayi={String(sorular.length)} />
        <section className="ca-kamp-sonuc" aria-live="polite">
          <span><Sparkles aria-hidden="true" /> Deneme kaydedildi</span>
          <h2>{puan} / {sorular.length}</h2>
          <p>{cevaplanan} soru yanıtladın. {Math.max(0, cevaplanan - puan)} yanılgı, Pusula’daki kanıt defterine eklendi.</p>
          <div>
            <span><strong>{zamanli ? sureYaz(kalan) : '—'}</strong>Kalan süre</span>
            <span><strong>{Object.keys(ipuclari).length}</strong>Kullanılan ipucu</span>
            <span><strong>{Object.keys(transferler).length}</strong>Transfer denemesi</span>
          </div>
          <button type="button" onClick={yenidenBasla}><RotateCcw aria-hidden="true" /> Yeni 5’li başlat</button>
        </section>
      </div>
    )
  }

  const transferSecim = transferler[soru.id]

  return (
    <div className="ca-bolge">
      <BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="ÖSYM’nin 5 soruluk coğrafya desenini özgün kanıt görevleriyle prova et." sayi={String(sorular.length)} />

      <section className="ca-kamp-panel" aria-labelledby="ca-kamp-soru">
        <header>
          <div>
            <BookOpenCheck aria-hidden="true" />
            <span>Soru {index + 1} / {sorular.length}</span>
            <em>{soru.tur} · {soru.duzey}</em>
          </div>
          <div className="ca-kamp-ust-sag">
            <label className="ca-zaman-secimi">
              <input
                type="checkbox"
                checked={zamanli}
                onChange={(olay) => {
                  setZamanli(olay.target.checked)
                  setKalan(TYT_AYARLARI.sureSaniye)
                }}
              />
              <span>{zamanli ? 'Süreli' : 'Süresiz'}</span>
            </label>
            <div className="ca-kamp-sure" data-uyari={zamanli && kalan < 60}>
              <Clock3 aria-hidden="true" /><strong>{zamanli ? sureYaz(kalan) : '∞'}</strong>
            </div>
            <div className="ca-kamp-skor"><Award aria-hidden="true" /><strong>{puan}</strong><small>doğru</small></div>
          </div>
        </header>

        <div className="ca-kamp-ilerleme" aria-hidden="true">
          <i style={{ width: `${((index + 1) / sorular.length) * 100}%` }} />
        </div>

        <article>
          <div className="ca-kamp-kunye">
            <span>{soru.mebCiktiIds.join(' · ')}</span>
            <button
              type="button"
              aria-expanded={Boolean(ipuclari[soru.id])}
              onClick={() => setIpuclari((eski) => ({ ...eski, [soru.id]: true }))}
            >
              <Lightbulb aria-hidden="true" /> İpucu
            </button>
          </div>
          {ipuclari[soru.id] ? <p className="ca-kamp-ipucu"><Lightbulb aria-hidden="true" />{soru.ipucu}</p> : null}
          <h2 id="ca-kamp-soru">{soru.soru}</h2>
          <div className="ca-kamp-secenekler">
            {soru.secenekler.map((secenek, secim) => {
              const secili = cevap === secim
              const sinif = cevaplandi && secili ? (secim === soru.cevap ? 'dogru' : 'yanlis') : ''
              return (
                <button type="button" key={secenek} onClick={() => yanitla(secim)} className={sinif} disabled={cevaplandi}>
                  <span>{String.fromCharCode(65 + secim)}</span>{secenek}
                </button>
              )
            })}
          </div>

          {cevaplandi ? (
            <aside className={cevap === soru.cevap ? 'dogru' : 'yanlis'} aria-live="polite">
              <strong>{cevap === soru.cevap ? 'Kanıt doğru kullanıldı' : 'Atlanan kanıtı bul'}</strong>
              <p>{soru.aciklama}</p>
              {cevap !== soru.cevap ? <small><TriangleAlert aria-hidden="true" /> Yanılgı: {soru.yanilgi}</small> : null}
            </aside>
          ) : null}

          {cevaplandi && cevap !== soru.cevap ? (
            <section className="ca-transfer-sorusu" aria-labelledby="ca-transfer-baslik">
              <span>Benzer durum · transfer</span>
              <h3 id="ca-transfer-baslik">{soru.transfer.soru}</h3>
              <div>
                {soru.transfer.secenekler.map((secenek, secim) => {
                  const secili = transferSecim === secim
                  const sinif = transferSecim !== undefined && secili
                    ? (secim === soru.transfer.cevap ? 'dogru' : 'yanlis')
                    : ''
                  return <button type="button" className={sinif} disabled={transferSecim !== undefined} key={secenek} onClick={() => transferYanitla(secim)}>{secenek}</button>
                })}
              </div>
              {transferSecim !== undefined ? <p>{soru.transfer.aciklama}</p> : null}
            </section>
          ) : null}
        </article>

        <footer>
          <button type="button" disabled={index === 0} onClick={() => setIndex((deger) => deger - 1)}>Önceki</button>
          {index < sorular.length - 1 ? (
            <button type="button" disabled={!cevaplandi} onClick={() => setIndex((deger) => deger + 1)}>
              Sonraki soru <ArrowRight aria-hidden="true" />
            </button>
          ) : (
            <button type="button" disabled={!cevaplandi} onClick={bitir}>Denemeyi bitir <ArrowRight aria-hidden="true" /></button>
          )}
        </footer>
      </section>

      <aside className="ca-hata-defteri">
        <TriangleAlert aria-hidden="true" />
        <div>
          <strong>Yanılgı defteri</strong>
          <p>Atlas ve kamp boyunca kaydedilmiş {hataSayisi} kanıt eksiği var.{oncekiDeneme ? ` Son kayıt: ${oncekiDeneme.dogru}/${oncekiDeneme.soruSayisi}.` : ''}</p>
        </div>
      </aside>
    </div>
  )
}
