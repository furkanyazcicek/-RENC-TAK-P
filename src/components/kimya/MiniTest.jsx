import { useEffect, useMemo, useRef, useState } from 'react'
import { AlertTriangle, ArrowRight, CheckCircle2, RotateCcw, Trophy, XCircle } from 'lucide-react'
import { KIMYA_MINI_TEST_ID, TEST_SORULARI, testHazirla } from '../../data/kimya/testSorulari.js'
import { useServerAssessment } from '../../hooks/useServerAssessment.js'
import SaveStatus from '../learning/SaveStatus.jsx'

const HARFLER = ['A', 'B', 'C', 'D']
const KIMYA_TESTI = Object.freeze({
  id: KIMYA_MINI_TEST_ID,
  subject: 'Kimya',
  topic: 'Kimyasal Türler Arası Etkileşimler',
  questions: TEST_SORULARI,
})

export default function MiniTest() {
  const [tur, setTur] = useState(0)
  const yerelSorular = useMemo(() => testHazirla(8), [tur])
  const [indeks, setIndeks] = useState(0)
  const [yerelCevaplar, setYerelCevaplar] = useState({})
  const geriYuklenenAttempt = useRef(null)

  const sunucu = useServerAssessment({
    sourceCode: 'chemistry_atlas',
    contentKind: 'atlas_assessment',
    contentId: KIMYA_MINI_TEST_ID,
    sourceOwner: 'src/data/kimya/testSorulari.js',
    questionSet: KIMYA_TESTI,
    startAction: 'chemistry_question_start',
    answerAction: 'chemistry_question_answer',
    finalizeAction: 'chemistry_question_finalize',
    urlParam: 'kimyaAttempt',
  })

  const bulut = sunucu.isStudent
  const sorular = bulut && sunucu.attemptId ? sunucu.questions : yerelSorular
  const cevaplar = bulut ? sunucu.answers : yerelCevaplar
  const soru = sorular[indeks]
  const secimHarfi = soru ? cevaplar[soru.id] : null
  const secim = typeof secimHarfi === 'number' ? secimHarfi : HARFLER.indexOf(secimHarfi)
  const bitti = bulut
    ? sunucu.attempt?.attempt_status === 'completed'
    : sorular.length > 0 && indeks >= sorular.length

  useEffect(() => {
    if (!bulut || !sunucu.attempt || sunucu.attempt.attempt_status !== 'in_progress') return
    if (!sunucu.detailsAvailable || geriYuklenenAttempt.current === sunucu.attempt.attempt_id) return
    geriYuklenenAttempt.current = sunucu.attempt.attempt_id
    const ilkBos = sunucu.questions.findIndex((kayit) => sunucu.answers[kayit.id] === undefined)
    setIndeks(ilkBos >= 0 ? ilkBos : 0)
  }, [bulut, sunucu.answers, sunucu.attempt, sunucu.detailsAvailable, sunucu.questions])

  const cevapla = (optionIndex) => {
    if (!soru || (!bulut && secim >= 0) || bitti || sunucu.finishing) return
    if (bulut) void sunucu.answer(soru.id, HARFLER[optionIndex])
    else setYerelCevaplar((current) => ({ ...current, [soru.id]: optionIndex }))
  }

  const ilerle = () => {
    if (indeks < sorular.length - 1) setIndeks((current) => current + 1)
    else if (bulut) void sunucu.finalize()
    else setIndeks(sorular.length)
  }

  const yenidenBasla = () => {
    setTur((current) => current + 1)
    setIndeks(0)
    setYerelCevaplar({})
    geriYuklenenAttempt.current = null
    if (bulut) sunucu.restart()
  }

  if (sunucu.authLoading) {
    return <section><BolumBasi /><div className="ka-kart" role="status">Hesabın kontrol ediliyor…</div></section>
  }

  if (bulut && !sunucu.attemptId) {
    return (
      <section>
        <BolumBasi bulut />
        <div className="ka-kart" style={{ textAlign: 'center' }}>
          <Trophy size={40} style={{ color: 'rgb(var(--ka-vurgu))', margin: '0 auto 10px' }} />
          <h3 style={{ fontSize: 24 }}>8 soruluk mini test</h3>
          <p className="ka-ozet-ad" style={{ maxWidth: 560, margin: '8px auto 0' }}>
            Sorular bu denemeye sabitlenir. Seçimlerin yenilemede korunur; puanı sunucu hesaplar.
          </p>
          {sunucu.error && <p className="ka-not uyari" role="alert" style={{ maxWidth: 560, margin: '16px auto 0' }}>{sunucu.error}</p>}
          <button type="button" className="ka-dugme birincil" style={{ marginTop: 18, minHeight: 44 }} onClick={() => void sunucu.start()} disabled={!sunucu.descriptor || sunucu.starting} aria-busy={sunucu.starting || undefined}>
            {sunucu.starting ? 'Başlatılıyor…' : 'Testi başlat'} {!sunucu.starting && <ArrowRight size={14} aria-hidden="true" />}
          </button>
          <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 justify-center [&_button]:min-h-11" />
        </div>
      </section>
    )
  }

  if (bulut && sunucu.attemptId && !sunucu.loading
    && (!sunucu.attempt
      || (sunucu.attempt.attempt_status !== 'completed'
        && (!sunucu.detailsAvailable || sunucu.questions.length !== 8)))) {
    return (
      <section>
        <BolumBasi bulut />
        <div className="ka-kart" style={{ textAlign: 'center' }}>
          <AlertTriangle size={32} style={{ color: 'rgb(var(--ka-turuncu))', margin: '0 auto 10px' }} />
          <h3 style={{ fontSize: 22 }}>Bu denemeye devam edilemiyor</h3>
          <p className="ka-ozet-ad" role="alert" style={{ maxWidth: 560, margin: '8px auto 0' }}>
            {sunucu.error ?? 'Sabitlenmiş sekiz soruluk deneme doğrulanamadı.'}
          </p>
          <button type="button" className="ka-dugme birincil" style={{ marginTop: 18, minHeight: 44 }} onClick={yenidenBasla}>
            <RotateCcw size={15} /> Yeni deneme başlat
          </button>
        </div>
      </section>
    )
  }

  if (bulut && (sunucu.loading || !sunucu.attempt || (!soru && !bitti))) {
    return <section><BolumBasi bulut /><div className="ka-kart" role="status">Denemen yükleniyor…</div></section>
  }

  if (bitti) {
    const dogruSayisi = bulut
      ? Number(sunucu.attempt.correct_count ?? 0)
      : sorular.filter((kayit) => yerelCevaplar[kayit.id] === kayit.dogru).length
    const toplam = Number(bulut ? sunucu.attempt.total_count : sorular.length)
    const oran = bulut
      ? Math.round(Number(sunucu.attempt.accuracy ?? 0) * 100)
      : Math.round((dogruSayisi / Math.max(1, toplam)) * 100)
    const ayrintilarGecerli = !bulut || (
      sunucu.detailsAvailable && sorular.length === 8 && toplam === 8
    )
    const sunucuCevaplari = new Map((sunucu.attempt?.answers ?? []).map((item) => [item.question_id, item]))
    const zayifKonular = ayrintilarGecerli ? [...new Set(sorular.filter((kayit) => (
      bulut ? sunucuCevaplari.get(kayit.id)?.is_correct === false : yerelCevaplar[kayit.id] !== kayit.dogru
    )).map((kayit) => kayit.konu))] : []
    return (
      <section>
        <BolumBasi bulut={bulut} />
        <div className="ka-kart" style={{ textAlign: 'center' }}>
          <Trophy size={40} style={{ color: 'rgb(var(--ka-vurgu))', margin: '0 auto 10px' }} />
          <h3 style={{ fontSize: 26 }}>{dogruSayisi} / {toplam} doğru</h3>
          <p className="ka-ozet-ad">Başarı oranın %{oran}</p>
          {bulut && Number(sunucu.attempt.empty_count) > 0 && <p className="ka-sessiz">{sunucu.attempt.empty_count} soru boş kaldı.</p>}
          <div className="ka-ilerleme" style={{ margin: '16px auto', maxWidth: 380 }}><div className="ka-ilerleme-dolu" style={{ width: `${oran}%` }} /></div>
          {bulut && !ayrintilarGecerli ? (
            <div className="ka-not uyari" style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}>
              <AlertTriangle size={16} />
              <span>Kayıtlı puanın korundu. Bu denemenin eski içerik ayrıntıları mevcut sürümle yeniden yorumlanmadı.</span>
            </div>
          ) : zayifKonular.length > 0 ? (
            <div className="ka-not uyari" style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}><AlertTriangle size={16} /><span><strong>Tekrar etmen iyi olur: </strong>{zayifKonular.join(', ')}.</span></div>
          ) : (
            <div className="ka-not olumlu" style={{ textAlign: 'left', maxWidth: 520, margin: '0 auto' }}><CheckCircle2 size={16} /><span>Yanıtladığın sorularda kavramlar yerli yerinde.</span></div>
          )}
          {bulut && sunucu.error && <p className="ka-not uyari" role="alert" style={{ maxWidth: 520, margin: '12px auto 0' }}>{sunucu.error}</p>}
          <button type="button" className="ka-dugme birincil" style={{ marginTop: 18, minHeight: 44 }} onClick={yenidenBasla}><RotateCcw size={15} /> Yeni sorularla tekrar dene</button>
          {bulut && <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 justify-center [&_button]:min-h-11" />}
        </div>
      </section>
    )
  }

  const cevaplanan = sorular.filter((kayit) => cevaplar[kayit.id] !== undefined).length
  return (
    <section>
      <BolumBasi bulut={bulut} />
      <div className="ka-kart">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <span className="ka-rozet mor">{soru.konu}</span><span className="ka-sessiz">Soru {indeks + 1} / {sorular.length} · {cevaplanan} yanıt</span>
        </div>
        <div className="ka-ilerleme" style={{ marginBottom: 16 }}><div className="ka-ilerleme-dolu" style={{ width: `${((indeks + 1) / sorular.length) * 100}%` }} /></div>
        <h3 style={{ fontSize: 18, marginBottom: 16 }}>{soru.soru}</h3>
        <div>
          {soru.secenekler.map((option, optionIndex) => {
            const secili = optionIndex === secim
            const durum = bulut || secim < 0
              ? ''
              : (optionIndex === soru.dogru ? 'dogru' : (secili ? 'yanlis' : ''))
            return (
              <button
                key={HARFLER[optionIndex]}
                type="button"
                className={`ka-secenek ${durum}`}
                onClick={() => cevapla(optionIndex)}
                disabled={(!bulut && secim >= 0) || sunucu.finishing}
                aria-pressed={secili}
                style={bulut && secili ? {
                  borderColor: 'rgb(var(--ka-vurgu))',
                  background: 'rgb(var(--ka-vurgu) / 0.1)',
                } : undefined}
              >
                <span className="ka-secenek-harf">{HARFLER[optionIndex]}</span><span>{option}</span>
                {durum === 'dogru' && <CheckCircle2 size={17} style={{ marginLeft: 'auto', color: 'rgb(var(--ka-yesil))', flex: 'none' }} />}
                {durum === 'yanlis' && <XCircle size={17} style={{ marginLeft: 'auto', color: 'rgb(var(--ka-kirmizi))', flex: 'none' }} />}
              </button>
            )
          })}
        </div>
        {secim >= 0 && !bulut && (
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div className={`ka-not ${secim === soru.dogru ? 'olumlu' : 'uyari'}`}>
              {secim === soru.dogru ? <CheckCircle2 size={16} /> : <XCircle size={16} />}
              <span><strong>{secim === soru.dogru ? 'Doğru. ' : `Doğru cevap: ${HARFLER[soru.dogru]}. `}</strong>{soru.aciklama}</span>
            </div>
            {soru.tuzak && <div className="ka-not"><AlertTriangle size={15} /><span><strong>Sık yapılan hata: </strong>{soru.tuzak}</span></div>}
          </div>
        )}
        {bulut && sunucu.error && <p className="ka-not uyari" role="alert" style={{ marginTop: 12 }}>{sunucu.error}</p>}
        <div style={{ marginTop: 16, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <button type="button" className="ka-dugme" style={{ minHeight: 44 }} disabled={indeks === 0} onClick={() => setIndeks((current) => Math.max(0, current - 1))}>Önceki</button>
          <button type="button" className="ka-dugme birincil" style={{ minHeight: 44 }} onClick={ilerle} disabled={sunucu.finishing}>
            {indeks + 1 === sorular.length ? 'Sonucu gör' : secim < 0 ? 'Boş bırak ve geç' : 'Sonraki soru'} <ArrowRight size={14} />
          </button>
        </div>
        {bulut && <SaveStatus status={sunucu.saveStatus} onRetry={sunucu.retry} className="mt-3 [&_button]:min-h-11" />}
      </div>
    </section>
  )
}

function BolumBasi({ bulut = false }) {
  return <div className="ka-bolum-basi"><div className="ka-ust-etiket">Bölüm 7</div><h2>Mini Test</h2><p>{bulut ? <>Puanı sunucu hesaplar; doğru cevaplar ve <strong>nedenleri</strong> test tamamlanınca açılır.</> : <>Her cevabın ardından yalnızca doğru/yanlış değil, <strong>nedenini</strong> de göreceksin.</>}</p></div>
}
