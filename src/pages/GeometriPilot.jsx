import { useEffect, useRef, useState } from 'react'
import { Card, Button } from '../components/ui'
import SaveStatus from '../components/learning/SaveStatus.jsx'
import { GEOMETRI_PILOT_ID, GEOMETRI_PILOT_SORULARI } from '../data/geometri/pilotSorulari.js'
import { useServerAssessment } from '../hooks/useServerAssessment.js'

const HARFLER = ['A', 'B', 'C', 'D', 'E']
const GEOMETRI_TESTI = Object.freeze({
  id: GEOMETRI_PILOT_ID,
  subject: 'Geometri',
  topic: 'Üçgende Açılar',
  questions: GEOMETRI_PILOT_SORULARI,
})

function QuestionDiagram({ type }) {
  if (type !== 'isosceles-base-angle') return null
  return (
    <svg viewBox="0 0 200 150" className="w-full max-w-xs mx-auto mb-4 border border-slate-200 rounded-lg p-2 bg-slate-50" role="img" aria-label="Tepe açısı 40 derece olan ikizkenar üçgen">
      <polygon points="100,20 40,130 160,130" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-800" />
      <text x="92" y="45" className="text-sm font-medium fill-slate-700">40°</text>
      <path d="M 90 40 Q 100 50 110 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
      <text x="50" y="125" className="text-sm font-medium fill-slate-700">α</text>
      <path d="M 55 130 A 15 15 0 0 0 62 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
      <text x="140" y="125" className="text-sm font-medium fill-slate-700">α</text>
      <path d="M 145 130 A 15 15 0 0 1 138 120" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-500" />
    </svg>
  )
}

export default function GeometriPilot() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [localAnswers, setLocalAnswers] = useState({})
  const [localFinished, setLocalFinished] = useState(false)
  const restoredAttempt = useRef(null)
  const server = useServerAssessment({
    sourceCode: 'geometry_pilot',
    contentKind: 'geometry_assessment',
    contentId: GEOMETRI_PILOT_ID,
    sourceOwner: 'src/data/geometri/pilotSorulari.js',
    questionSet: GEOMETRI_TESTI,
    startAction: 'geometry_question_start',
    answerAction: 'geometry_question_answer',
    finalizeAction: 'geometry_question_finalize',
    urlParam: 'attempt',
  })

  const cloud = server.isStudent
  const questions = cloud && server.attemptId ? server.questions : GEOMETRI_PILOT_SORULARI
  const answers = cloud ? server.answers : localAnswers
  const showResults = cloud ? server.attempt?.attempt_status === 'completed' : localFinished
  const detailsAvailable = !cloud || (
    server.detailsAvailable
    && questions.length === GEOMETRI_PILOT_SORULARI.length
    && Number(server.attempt?.total_count) === GEOMETRI_PILOT_SORULARI.length
  )
  const q = questions[currentQuestion] ?? questions[0]
  const selectedLetter = q ? answers[q.id] : undefined
  const selectedIndex = typeof selectedLetter === 'number' ? selectedLetter : HARFLER.indexOf(selectedLetter)

  useEffect(() => {
    if (!cloud || !server.attempt || !server.detailsAvailable
      || restoredAttempt.current === server.attempt.attempt_id) return
    restoredAttempt.current = server.attempt.attempt_id
    if (server.attempt.attempt_status === 'completed') {
      setCurrentQuestion(0)
      return
    }
    const firstBlank = server.questions.findIndex((question) => server.answers[question.id] === undefined)
    setCurrentQuestion(firstBlank >= 0 ? firstBlank : 0)
  }, [cloud, server.answers, server.attempt, server.detailsAvailable, server.questions])

  const handleOptionSelect = (optionIndex) => {
    if (showResults || !q || server.finishing) return
    if (cloud) void server.answer(q.id, HARFLER[optionIndex])
    else setLocalAnswers((current) => ({ ...current, [q.id]: optionIndex }))
  }

  const finish = () => {
    if (cloud) void server.finalize()
    else setLocalFinished(true)
  }

  const restart = () => {
    setCurrentQuestion(0)
    setLocalAnswers({})
    setLocalFinished(false)
    restoredAttempt.current = null
    if (cloud) server.restart()
  }

  if (server.authLoading) {
    return <PageShell><Card className="p-8 text-center" role="status">Hesabın kontrol ediliyor…</Card></PageShell>
  }

  if (cloud && !server.attemptId) {
    return (
      <PageShell>
        <Card className="p-6 md:p-8 shadow-lg rounded-2xl bg-white border border-slate-100 text-center">
          <p className="mx-auto max-w-xl text-slate-600">Dört soru bu denemeye sabitlenir. Seçimlerin yenilemede korunur ve sonuç sunucuda hesaplanır.</p>
          {server.error && <p className="mt-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700" role="alert">{server.error}</p>}
          <Button className="mt-6 min-h-11 bg-indigo-600 px-8 text-white hover:bg-indigo-700" onClick={() => void server.start()} disabled={!server.descriptor || server.starting} loading={server.starting}>{server.starting ? 'Başlatılıyor…' : 'Testi başlat'}</Button>
          <SaveStatus status={server.saveStatus} onRetry={server.retry} className="mt-3 justify-center [&_button]:min-h-11" />
        </Card>
      </PageShell>
    )
  }

  if (cloud && server.attemptId && !server.loading
    && (!server.attempt
      || (server.attempt.attempt_status !== 'completed' && !detailsAvailable))) {
    return (
      <PageShell>
        <Card className="p-6 text-center md:p-8">
          <h2 className="text-xl font-bold text-slate-900">Bu denemeye devam edilemiyor</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-rose-700" role="alert">
            {server.error ?? 'Sabitlenmiş soru listesi doğrulanamadı.'}
          </p>
          <Button className="mt-6 min-h-11 px-8" onClick={restart}>Yeni deneme başlat</Button>
        </Card>
      </PageShell>
    )
  }

  if (cloud && (server.loading || !server.attempt)) {
    return <PageShell><Card className="p-8 text-center" role="status">Denemen yükleniyor…</Card></PageShell>
  }

  return (
    <PageShell>
      <Card className="p-6 md:p-8 shadow-lg rounded-2xl bg-white border border-slate-100">
        {!showResults ? (
          <>
            <div className="flex justify-between items-center gap-3 mb-6">
              <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Soru {currentQuestion + 1} / {questions.length}</span>
              <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full text-right">{q.topic}</span>
            </div>
            <div className="mb-6 text-slate-800 text-lg font-medium leading-relaxed whitespace-pre-wrap">{q.text}</div>
            {q.image && <div className="mb-8 flex justify-center"><div className="relative w-full max-w-md overflow-hidden rounded-xl border border-slate-200 bg-white"><img src={q.image} alt={q.topic} className="w-full h-auto object-contain mix-blend-multiply" style={{ maxHeight: 300 }} /></div></div>}
            <QuestionDiagram type={q.diagram} />
            <div className="space-y-3 mb-8">
              {q.options.map((option, optionIndex) => {
                const selected = selectedIndex === optionIndex
                return (
                  <button key={HARFLER[optionIndex]} type="button" onClick={() => handleOptionSelect(optionIndex)} disabled={server.finishing} className={`focus-ring min-h-11 w-full text-left px-5 py-4 rounded-xl border-2 transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${selected ? 'border-indigo-500 bg-indigo-50 text-indigo-900' : 'border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-700'}`} aria-pressed={selected}>
                    <span className="inline-block w-8 font-bold">{HARFLER[optionIndex]})</span> {option}
                  </button>
                )
              })}
            </div>
            {cloud && server.error && <p className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700" role="alert">{server.error}</p>}
            <div className="flex flex-wrap justify-between items-center gap-3 pt-6 border-t border-slate-100">
              <Button onClick={() => setCurrentQuestion((current) => Math.max(0, current - 1))} disabled={currentQuestion === 0} variant="outline" className="min-h-11 px-6">Geri</Button>
              <div className="flex flex-wrap justify-end gap-2">
                <Button onClick={finish} variant="outline" disabled={server.finishing} className="min-h-11 px-5">Boşlarla bitir</Button>
                {currentQuestion < questions.length - 1 ? (
                  <Button onClick={() => setCurrentQuestion((current) => current + 1)} className="min-h-11 bg-slate-900 hover:bg-slate-800 text-white px-8">{selectedIndex < 0 ? 'Boş bırak ve ilerle' : 'İleri'}</Button>
                ) : (
                  <Button onClick={finish} disabled={server.finishing} className="min-h-11 bg-indigo-600 hover:bg-indigo-700 text-white px-8">Testi Bitir</Button>
                )}
              </div>
            </div>
            {cloud && <SaveStatus status={server.saveStatus} onRetry={server.retry} className="mt-3 [&_button]:min-h-11" />}
          </>
        ) : (
          <Results questions={questions} attempt={server.attempt} localAnswers={localAnswers} cloud={cloud} detailsAvailable={detailsAvailable} onRestart={restart} saveStatus={server.saveStatus} onRetry={server.retry} />
        )}
      </Card>
    </PageShell>
  )
}

function Results({ questions, attempt, localAnswers, cloud, detailsAvailable, onRestart, saveStatus, onRetry }) {
  const serverAnswers = new Map((attempt?.answers ?? []).map((answer) => [answer.question_id, answer]))
  const correct = cloud
    ? Number(attempt?.correct_count ?? 0)
    : questions.filter((question) => localAnswers[question.id] === question.answer).length
  const total = cloud ? Number(attempt?.total_count ?? questions.length) : questions.length
  return (
    <div className="py-4 md:py-8">
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center min-w-24 min-h-24 rounded-full bg-indigo-50 mb-4 px-4"><span className="text-3xl font-bold text-indigo-600">{correct} / {total}</span></div>
        <h2 className="text-2xl font-bold text-slate-900">Test tamamlandı</h2>
        <p className="text-slate-500 mt-2">
          {cloud && Number(attempt?.empty_count) > 0 ? `${attempt.empty_count} soru boş kaldı. ` : ''}
          {cloud ? 'Sonuç sunucuya kaydedildi.' : 'Bu pratik sonucu yalnız bu oturumda tutulur.'}
        </p>
      </div>
      {cloud && !detailsAvailable ? (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900" role="status">
          Kayıtlı puanın korundu. Bu denemenin eski soru ayrıntıları mevcut sürümle yeniden yorumlanmadı.
        </div>
      ) : <div className="space-y-8">
        {questions.map((question, index) => {
          const saved = serverAnswers.get(question.id)
          const userIndex = cloud ? HARFLER.indexOf(saved?.selected_option_id) : localAnswers[question.id]
          const correctIndex = cloud ? HARFLER.indexOf(saved?.correct_option_id) : question.answer
          const answered = Number.isInteger(userIndex) && userIndex >= 0
          const isCorrect = answered && (cloud ? saved?.is_correct === true : userIndex === correctIndex)
          return (
            <div key={question.id} className={`p-5 md:p-6 rounded-2xl border-2 ${isCorrect ? 'border-emerald-100 bg-emerald-50/30' : 'border-rose-100 bg-rose-50/30'}`}>
              <div className="flex items-start gap-4">
                <div className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full font-bold ${isCorrect ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>{index + 1}</div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-slate-900 mb-2">{question.topic}</h3>
                  <p className="text-slate-700 mb-4 whitespace-pre-wrap text-sm">{question.text}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-4 text-sm font-medium">
                    <div className={`p-3 rounded-lg ${isCorrect ? 'bg-emerald-100/50 text-emerald-800' : 'bg-rose-100/50 text-rose-800'}`}>Senin cevabın: {answered ? `${HARFLER[userIndex]}) ${question.options[userIndex]}` : 'Boş'}</div>
                    {!isCorrect && correctIndex >= 0 && <div className="p-3 rounded-lg bg-emerald-100/50 text-emerald-800">Doğru cevap: {HARFLER[correctIndex]}) {question.options[correctIndex]}</div>}
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-sm"><strong className="text-indigo-600 block mb-1">Çözüm:</strong><span className="text-slate-600 leading-relaxed">{cloud ? (saved?.explanation || 'Çözüm ayrıntısı bulunmuyor.') : question.solution}</span></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>}
      <div className="mt-10 text-center"><Button onClick={onRestart} variant="outline" className="min-h-11 px-8">Testi tekrar çöz</Button></div>
      {cloud && <SaveStatus status={saveStatus} onRetry={onRetry} className="mt-3 justify-center [&_button]:min-h-11" />}
    </div>
  )
}

function PageShell({ children }) {
  return <div className="min-h-screen bg-slate-50 py-8 md:py-12 px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto"><div className="text-center mb-8"><h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Geometri Pilot Testi</h1><p className="mt-2 text-slate-600 text-lg">TYT formatında üçgenler kazanım değerlendirmesi</p></div>{children}</div></div>
}
