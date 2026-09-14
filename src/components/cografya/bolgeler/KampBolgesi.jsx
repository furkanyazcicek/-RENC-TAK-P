import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowRight, Award, BookOpenCheck, Clock3, Lightbulb, RotateCcw, Sparkles, TriangleAlert,
} from 'lucide-react'
import { BolgeBasligi } from '../ortak/index.js'
import {
  TYT_AYARLARI, TYT_DENEME_ID, TYT_DENEME_SORULARI, tytSorulariniSec,
} from '../../../data/cografya/tyt.js'
import { hataKaydet, ilerlemeOku, tytDenemeKaydet } from '../../../lib/cografya/ilerleme.js'
import { useServerAssessment } from '../../../hooks/useServerAssessment.js'
import SaveStatus from '../../learning/SaveStatus.jsx'

const sureYaz = (saniye) => {
  const guvenliSaniye = Math.max(0, Number.isFinite(Number(saniye)) ? Math.floor(Number(saniye)) : 0)
  return `${String(Math.floor(guvenliSaniye / 60)).padStart(2, '0')}:${String(guvenliSaniye % 60).padStart(2, '0')}`
}

const TYT_DENEMESI = Object.freeze({
  id: TYT_DENEME_ID,
  subject: 'Coğrafya',
  topic: 'TYT Coğrafya Kampı',
  questions: TYT_DENEME_SORULARI.map((question) => ({ ...question, answer: question.cevap })),
})

export default function KampBolgesi({ soruSayisi = TYT_AYARLARI.soruSayisi }) {
  const yerelSorular = useMemo(() => tytSorulariniSec(soruSayisi), [soruSayisi])
  const [index, setIndex] = useState(0)
  const [cevaplar, setCevaplar] = useState({})
  const [ipuclari, setIpuclari] = useState({})
  const [transferler, setTransferler] = useState({})
  const [zamanli, setZamanli] = useState(TYT_AYARLARI.zamanliBaslangic)
  const [kalan, setKalan] = useState(TYT_AYARLARI.sureSaniye)
  const [bitti, setBitti] = useState(false)
  const geriYuklenenAttempt = useRef(null)
  const sunucu = useServerAssessment({
    sourceCode: 'geography_atlas',
    contentKind: 'atlas_assessment',
    contentId: TYT_DENEME_ID,
    sourceOwner: 'src/data/cografya/tyt.js',
    questionSet: TYT_DENEMESI,
    startAction: 'geography_question_start',
    answerAction: 'geography_question_answer',
    finalizeAction: 'geography_question_finalize',
    urlParam: 'cografyaAttempt',
  })
  const bulut = sunucu.isStudent
  const sorular = bulut && sunucu.attemptId ? sunucu.questions : yerelSorular
  const tamamlandi = bulut ? sunucu.attempt?.attempt_status === 'completed' : bitti
  const sureli = bulut || zamanli
  const sunucuBitisZamani = Date.parse(sunucu.attempt?.expires_at ?? '')
  const sunucuSayaciHazir = bulut && Number.isFinite(sunucuBitisZamani)
  const sunucuSureSiniri = Number(sunucu.attempt?.time_limit_seconds)
  const sunucuHarcananSure = Number(sunucu.attempt?.duration_seconds)
  const etkinSunucuSureSiniri = Number.isFinite(sunucuSureSiniri) && sunucuSureSiniri > 0
    ? sunucuSureSiniri
    : TYT_AYARLARI.sureSaniye
  const sunucuSonucSuresiHazir = bulut
    && sunucu.attempt?.duration_seconds != null
    && Number.isFinite(sunucuHarcananSure)
  const sunucuSonucKalan = sunucuSonucSuresiHazir
    ? Math.max(0, Math.min(etkinSunucuSureSiniri, etkinSunucuSureSiniri - sunucuHarcananSure))
    : null
  const gosterilenKalan = bulut && !tamamlandi
    ? (sunucuSayaciHazir
        ? Math.max(0, Math.min(
            etkinSunucuSureSiniri,
            Math.ceil((sunucuBitisZamani - Date.now()) / 1000),
          ))
        : null)
    : kalan
  const soru = sorular[index]
  const kayitliCevap = bulut ? sunucu.answers[soru?.id] : cevaplar[soru?.id]
  const cevap = typeof kayitliCevap === 'string' ? kayitliCevap.charCodeAt(0) - 65 : kayitliCevap
  const cevaplandi = cevap !== undefined

  const puan = useMemo(
    () => bulut
      ? Number(sunucu.attempt?.correct_count ?? 0)
      : sorular.filter((kayit) => cevaplar[kayit.id] === kayit.cevap).length,
    [bulut, cevaplar, sorular, sunucu.attempt?.correct_count],
  )
  const cevaplanan = bulut ? Object.keys(sunucu.answers).length : Object.keys(cevaplar).length
  const toplamSoru = bulut
    ? Number(sunucu.attempt?.total_count ?? sorular.length)
    : sorular.length
  const bulutSorulariGecerli = !bulut || (
    sunucu.detailsAvailable
    && sorular.length === TYT_AYARLARI.soruSayisi
    && toplamSoru === TYT_AYARLARI.soruSayisi
  )

  const bitir = useCallback(() => {
    if (tamamlandi || sunucu.finishing) return
    if (bulut) {
      void sunucu.finalize()
      return
    }
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
  }, [bulut, cevaplar, kalan, sorular, sunucu.finalize, sunucu.finishing, tamamlandi, zamanli])

  const otomatikBitirilenRef = useRef(null)

  useEffect(() => {
    otomatikBitirilenRef.current = null
    geriYuklenenAttempt.current = null
  }, [bulut, sunucu.attemptId])

  useEffect(() => {
    if (!bulut || !sunucu.attempt || sunucu.attempt.attempt_status !== 'in_progress'
      || !bulutSorulariGecerli
      || geriYuklenenAttempt.current === sunucu.attempt.attempt_id) return
    geriYuklenenAttempt.current = sunucu.attempt.attempt_id
    const ilkBos = sorular.findIndex((kayit) => sunucu.answers[kayit.id] === undefined)
    setIndex(ilkBos >= 0 ? ilkBos : 0)
  }, [bulut, bulutSorulariGecerli, sorular, sunucu.answers, sunucu.attempt])

  useEffect(() => {
    if (!bulut || tamamlandi || !sunucuSayaciHazir) return undefined
    const kalanHesapla = () => Math.max(0, Math.min(
      etkinSunucuSureSiniri,
      Math.ceil((sunucuBitisZamani - Date.now()) / 1000),
    ))
    setKalan(kalanHesapla())
    const sayac = window.setInterval(() => setKalan(kalanHesapla()), 1000)
    return () => window.clearInterval(sayac)
  }, [bulut, etkinSunucuSureSiniri, sunucuBitisZamani, sunucuSayaciHazir, tamamlandi])

  useEffect(() => {
    if (bulut || !zamanli || tamamlandi || kalan <= 0) return undefined
    const sayac = window.setInterval(() => setKalan((deger) => Math.max(0, deger - 1)), 1000)
    return () => window.clearInterval(sayac)
  }, [bulut, tamamlandi, zamanli])

  useEffect(() => {
    const sunucuSuresiDoldu = bulut && sunucu.attemptId && sunucuSayaciHazir && kalan === 0
    const yerelSureDoldu = !bulut && zamanli && kalan === 0
    if (tamamlandi || sunucu.finishing || (!sunucuSuresiDoldu && !yerelSureDoldu)) return

    const bitirmeAnahtari = bulut ? `sunucu:${sunucu.attemptId}` : 'yerel'
    if (otomatikBitirilenRef.current === bitirmeAnahtari) return
    otomatikBitirilenRef.current = bitirmeAnahtari
    bitir()
  }, [bitir, bulut, kalan, sunucu.attemptId, sunucu.finishing, sunucuSayaciHazir, tamamlandi, zamanli])

  const yanitla = (secim) => {
    if ((!bulut && cevaplandi) || tamamlandi || sunucu.finishing) return
    if (bulut && (!sunucuSayaciHazir || sunucuBitisZamani <= Date.now())) return
    if (bulut) void sunucu.answer(soru.id, String.fromCharCode(65 + secim))
    else {
      setCevaplar((eski) => ({ ...eski, [soru.id]: secim }))
      if (secim !== soru.cevap) hataKaydet(soru.id, secim, soru.yanilgi)
    }
  }

  const transferYanitla = (secim) => {
    if (transferler[soru.id] !== undefined || tamamlandi) return
    setTransferler((eski) => ({ ...eski, [soru.id]: secim }))
  }

  const yenidenBasla = () => {
    setIndex(0)
    setCevaplar({})
    setIpuclari({})
    setTransferler({})
    setKalan(TYT_AYARLARI.sureSaniye)
    setBitti(false)
    otomatikBitirilenRef.current = null
    geriYuklenenAttempt.current = null
    if (bulut) sunucu.restart()
  }

  const hataSayisi = ilerlemeOku().hataDefteri.length
  const oncekiDeneme = ilerlemeOku().tytDenemeleri.at(-1)

  if (sunucu.authLoading) {
    return <div className="ca-bolge"><BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Hesabın kontrol ediliyor." sayi="5" /><section className="ca-kamp-sonuc" role="status">Hesabın kontrol ediliyor…</section></div>
  }

  if (bulut && !sunucu.attemptId) {
    return (
      <div className="ca-bolge">
        <BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Beş soruluk süreli oturum; seçimler yenilemede korunur, sonuç sunucuda hesaplanır." sayi="5" />
        <section className="ca-kamp-sonuc">
          <span><Clock3 aria-hidden="true" /> 05:00 süreli deneme</span>
          <h2>Hazır mısın?</h2>
          <p>Süre başlatıldığında sunucuda sabitlenir. Soruları boş bıkarak da denemeyi bitirebilirsin.</p>
          {sunucu.error ? <p role="alert">{sunucu.error}</p> : null}
          <button type="button" style={{ minHeight: 44 }} onClick={() => void sunucu.start()} disabled={!sunucu.descriptor || sunucu.starting} aria-busy={sunucu.starting || undefined}><ArrowRight aria-hidden="true" /> {sunucu.starting ? 'Başlatılıyor…' : 'Denemeyi başlat'}</button>
          <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 justify-center [&_button]:min-h-11" />
        </section>
      </div>
    )
  }

  if (bulut && sunucu.attemptId && !sunucu.loading
    && (!sunucu.attempt
      || (sunucu.attempt.attempt_status !== 'completed'
        && (!bulutSorulariGecerli || !sunucuSayaciHazir)))) {
    return (
      <div className="ca-bolge">
        <BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Bu denemenin sabit soru veya süre bilgisi doğrulanamadı." sayi="5" />
        <section className="ca-kamp-sonuc">
          <span><TriangleAlert aria-hidden="true" /> Deneme açılamadı</span>
          <h2 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>Yeni deneme gerekli</h2>
          <p role="alert">{sunucu.error ?? 'Sabitlenmiş soru listesi veya sunucu süresi eksik.'}</p>
          <button type="button" style={{ minHeight: 44 }} onClick={yenidenBasla}><RotateCcw aria-hidden="true" /> Yeni 5’li başlat</button>
        </section>
      </div>
    )
  }

  if (bulut && (sunucu.loading || !sunucu.attempt || !soru && !tamamlandi)) {
    return <div className="ca-bolge"><BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Denemen yükleniyor." sayi="5" /><section className="ca-kamp-sonuc" role="status">Denemen yükleniyor…</section></div>
  }

  if (tamamlandi) {
    const sunucuYanlis = Number(sunucu.attempt?.wrong_count ?? Math.max(0, cevaplanan - puan))
    const sunucuBos = Number(sunucu.attempt?.empty_count ?? 0)
    return (
      <div className="ca-bolge">
        <BolgeBasligi bolge="kamp" etiket="TYT Coğrafya" aciklama="Oturum tamamlandı; puanı değil, yeniden çalışman gereken kanıt türlerini oku." sayi={String(toplamSoru)} />
        <section className="ca-kamp-sonuc" aria-live="polite">
          <span><Sparkles aria-hidden="true" /> {bulut ? 'Sunucuya kaydedildi' : 'Deneme cihazda kaydedildi'}</span>
          <h2>{puan} / {toplamSoru}</h2>
          <p>{bulut ? `${sunucuYanlis} yanlış, ${sunucuBos} boş.` : `${cevaplanan} soru yanıtladın. ${Math.max(0, cevaplanan - puan)} yanılgı, Pusula’daki kanıt defterine eklendi.`}</p>
          <div>
            <span><strong>{bulut ? (sunucuSonucKalan == null ? '—' : sureYaz(sunucuSonucKalan)) : (zamanli ? sureYaz(kalan) : '—')}</strong>Kalan süre</span>
            <span><strong>{Object.keys(ipuclari).length}</strong>Kullanılan ipucu</span>
            <span><strong>{Object.keys(transferler).length}</strong>Transfer denemesi</span>
          </div>
          {bulut && sunucu.error ? <p role="alert">{sunucu.error}</p> : null}
          <button type="button" style={{ minHeight: 44 }} onClick={yenidenBasla}><RotateCcw aria-hidden="true" /> Yeni 5’li başlat</button>
          {bulut ? <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 justify-center [&_button]:min-h-11" /> : null}
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
            {bulut ? <span className="ca-zaman-secimi min-h-11">Süreli · sunucu</span> : <label className="ca-zaman-secimi min-h-11">
              <input
                type="checkbox"
                checked={zamanli}
                onChange={(olay) => {
                  setZamanli(olay.target.checked)
                  setKalan(TYT_AYARLARI.sureSaniye)
                }}
              />
              <span>{zamanli ? 'Süreli' : 'Süresiz'}</span>
            </label>}
            <div className="ca-kamp-sure" data-uyari={sureli && gosterilenKalan != null && gosterilenKalan < 60}>
              <Clock3 aria-hidden="true" /><strong>{gosterilenKalan == null ? '—' : (zamanli || bulut ? sureYaz(gosterilenKalan) : '∞')}</strong>
            </div>
            <div className="ca-kamp-skor"><Award aria-hidden="true" /><strong>{bulut ? cevaplanan : puan}</strong><small>{bulut ? 'yanıt' : 'doğru'}</small></div>
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
              style={{ minHeight: 44 }}
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
              const sinif = bulut
                ? (secili ? 'secili' : '')
                : (cevaplandi && secili ? (secim === soru.cevap ? 'dogru' : 'yanlis') : '')
              return (
                <button
                  type="button"
                  key={secenek}
                  onClick={() => yanitla(secim)}
                  className={sinif}
                  style={{
                    minHeight: 44,
                    ...(bulut && secili ? {
                      borderColor: 'var(--ca-vurgu)',
                      background: 'color-mix(in srgb, var(--ca-vurgu) 10%, var(--ca-yuzey2))',
                    } : {}),
                  }}
                  disabled={bulut ? gosterilenKalan == null || gosterilenKalan === 0 || sunucu.finishing : cevaplandi}
                  aria-pressed={secili}
                >
                  <span>{String.fromCharCode(65 + secim)}</span>{secenek}
                </button>
              )
            })}
          </div>

          {cevaplandi && !bulut ? (
            <aside className={cevap === soru.cevap ? 'dogru' : 'yanlis'} aria-live="polite">
              <strong>{cevap === soru.cevap ? 'Kanıt doğru kullanıldı' : 'Atlanan kanıtı bul'}</strong>
              <p>{soru.aciklama}</p>
              {cevap !== soru.cevap ? <small><TriangleAlert aria-hidden="true" /> Yanılgı: {soru.yanilgi}</small> : null}
            </aside>
          ) : null}

          {cevaplandi && cevap !== soru.cevap && !bulut ? (
            <section className="ca-transfer-sorusu" aria-labelledby="ca-transfer-baslik">
              <span>Benzer durum · transfer</span>
              <h3 id="ca-transfer-baslik">{soru.transfer.soru}</h3>
              <div>
                {soru.transfer.secenekler.map((secenek, secim) => {
                  const secili = transferSecim === secim
                  const sinif = transferSecim !== undefined && secili
                    ? (secim === soru.transfer.cevap ? 'dogru' : 'yanlis')
                    : ''
                  return <button type="button" className={sinif} style={{ minHeight: 44 }} disabled={transferSecim !== undefined} key={secenek} onClick={() => transferYanitla(secim)}>{secenek}</button>
                })}
              </div>
              {transferSecim !== undefined ? <p>{soru.transfer.aciklama}</p> : null}
            </section>
          ) : null}
        </article>

        <footer>
          <button type="button" style={{ minHeight: 44 }} disabled={index === 0} onClick={() => setIndex((deger) => deger - 1)}>Önceki</button>
          {index < sorular.length - 1 ? (
            <button type="button" style={{ minHeight: 44 }} disabled={!bulut && !cevaplandi} onClick={() => setIndex((deger) => deger + 1)}>
              {bulut && !cevaplandi ? 'Boş bırak ve ilerle' : 'Sonraki soru'} <ArrowRight aria-hidden="true" />
            </button>
          ) : (
            <button type="button" style={{ minHeight: 44 }} disabled={(!bulut && !cevaplandi) || sunucu.finishing} onClick={bitir}>Denemeyi bitir <ArrowRight aria-hidden="true" /></button>
          )}
        </footer>
      </section>

      {bulut && sunucu.error ? <p className="mt-3" role="alert">{sunucu.error}</p> : null}
      {bulut ? <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 [&_button]:min-h-11" /> : null}

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
