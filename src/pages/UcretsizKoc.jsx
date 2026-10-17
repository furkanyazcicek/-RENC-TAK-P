import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, BookOpen, ClipboardList, RefreshCw, Target } from 'lucide-react'

import { AppShell, Button, Spinner } from '../components/ui'
import { getFreeGuide } from '../lib/aiCoach'
import { isProductCapture } from '../lib/productCapture'

const PREVIEW = {
  version: 'free-coach-guide@1',
  status: 'available',
  firstName: 'Deniz',
  today: {
    title: 'Fonksiyonlar konusuna kısa bir dönüş yap',
    reason: 'Günlük çalışma kayıtlarında Matematik · Fonksiyonlar için 20 soruda %60 isabet bildirdin.',
    evidence: 'Kaynak: son 30 gündeki kendi günlük çalışma kayıtların; bu bir ustalık ölçümü değildir',
    nextCheck: 'Yeni bir soru sonucu kaydettiğinde aynı konudaki değişime tekrar bak.',
    action: { label: 'Soru kütüphanesini aç', path: '/kutuphane/sorular' },
  },
  week: {
    thisWeekMinutes: 215,
    previousWeekMinutes: 180,
    thisWeekSolved: 48,
    source: 'Günlük çalışma kayıtların; süre ve soru sayısı tek başına başarı değildir.',
  },
  topics: [{ subject: 'Matematik', topic: 'Fonksiyonlar', attempted: 20, accuracy: 60,
    source: 'Son 30 gündeki günlük çalışma kayıtların; öz bildirimdir.' }],
  latestExam: {
    name: 'TYT Genel Deneme', type: 'TYT', date: '2026-10-10', totalNet: 68.5,
    subjects: [{ subject: 'Türkçe', net: 29 }, { subject: 'Matematik', net: 18.5 }],
    source: 'Kaydedilmiş son genel deneme; farklı sınav türleri karşılaştırılmaz.',
  },
  homework: { pending: 2, overdue: 0 },
  scope: 'Bu sürüm günlük çalışma, genel deneme, ödev ve mevcut plan kayıtlarını kullanır. Ders, soru kütüphanesi ve dil ilerlemesinin birleşik analizi henüz açık değildir.',
}

function minutesLabel(value) {
  const minutes = Math.max(0, Number(value) || 0)
  if (minutes < 60) return `${minutes} dk`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  return rest ? `${hours} sa ${rest} dk` : `${hours} sa`
}

function dateLabel(value) {
  if (!value || Number.isNaN(new Date(value).getTime())) return 'Tarih bilinmiyor'
  return new Date(value).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function UcretsizKoc() {
  const navigate = useNavigate()
  const preview = isProductCapture()
  const [guide, setGuide] = useState(() => (preview ? PREVIEW : null))
  const [state, setState] = useState(preview ? 'ready' : 'loading')
  const [requestId, setRequestId] = useState(0)

  useEffect(() => {
    if (preview) return undefined
    let cancelled = false
    getFreeGuide()
      .then((result) => {
        if (cancelled) return
        setGuide(result)
        setState('ready')
      })
      .catch(() => {
        if (!cancelled) setState('error')
      })
    return () => { cancelled = true }
  }, [preview, requestId])

  function refresh() {
    if (preview) return
    setState('loading')
    setRequestId((value) => value + 1)
  }

  return (
    <AppShell title="AI Koç" subtitle="Ücretsiz çalışma rehberi">
      <div className="mx-auto max-w-5xl pb-8">
        <div className="mb-7 flex flex-wrap items-start justify-between gap-4 border-b border-line pb-5">
          <p className="max-w-2xl text-sm leading-relaxed text-ink/70">
            Kayıtlarından hesaplanan çalışma yönü. Bu sürüm serbest sohbet etmez, ücretli model çağrısı yapmaz
            ve verisi olmayan bir başarıyı tahmin etmez.
          </p>
          {!preview && (
            <Button variant="secondary" size="sm" icon={RefreshCw} onClick={refresh} disabled={state === 'loading'}>
              Yenile
            </Button>
          )}
        </div>

        {preview && (
          <p className="mb-5 text-xs font-semibold text-info-700">Yalnız geliştirme önizlemesi: aşağıdaki kayıtlar örnektir.</p>
        )}

        {state === 'loading' && (
          <div className="flex min-h-64 items-center justify-center gap-3 text-sm text-ink/70" role="status">
            <Spinner /> Kayıtların inceleniyor…
          </div>
        )}

        {state === 'error' && (
          <div className="rounded-card border border-line bg-surface p-6" role="alert">
            <h2 className="font-display text-lg font-bold text-ink">Kayıtların şu anda okunamıyor</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">
              Eksik veriden kişisel öneri üretmiyorum. Bağlantını kontrol edip yeniden deneyebilirsin.
            </p>
            <Button className="mt-5" icon={RefreshCw} onClick={refresh}>Yeniden dene</Button>
          </div>
        )}

        {state === 'ready' && guide && (
          <>
            <section className="relative overflow-hidden rounded-panel bg-surface px-5 py-6 shadow-card ring-1 ring-line sm:px-8 sm:py-8" aria-labelledby="free-coach-today">
              <div className="absolute inset-y-0 left-0 w-1 bg-aurora-gradient" aria-hidden="true" />
              <div className="flex items-center gap-2 text-2xs font-bold uppercase tracking-[0.14em] text-brand-700">
                <Target className="h-4 w-4" aria-hidden="true" /> Bugünün odağı
              </div>
              <h2 id="free-coach-today" className="mt-3 max-w-3xl font-display text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                {guide.firstName ? `${guide.firstName}, ` : ''}{guide.today.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75 sm:text-base">{guide.today.reason}</p>
              <p className="mt-4 max-w-3xl text-xs leading-relaxed text-ink/60">{guide.today.evidence}</p>
              {guide.today.items?.length > 0 && (
                <ul className="mt-5 space-y-2 text-sm text-ink/75">
                  {guide.today.items.map((item, index) => (
                    <li key={`${item.subject}-${item.topic}-${index}`}>
                      <span className="font-semibold text-ink">{item.subject}</span>
                      {item.topic ? ` · ${item.topic}` : ''}
                      {item.minutes > 0 ? ` · ${item.minutes} dk` : ''}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Button icon={ArrowRight} onClick={() => navigate(guide.today.action.path)}>
                  {guide.today.action.label}
                </Button>
                <p className="max-w-md text-xs leading-relaxed text-ink/60">Sonraki kontrol: {guide.today.nextCheck}</p>
              </div>
            </section>

            <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
              <section aria-labelledby="free-coach-week">
                <div className="flex items-center gap-2">
                  <ClipboardList className="h-5 w-5 text-brand-600" aria-hidden="true" />
                  <h2 id="free-coach-week" className="font-display text-xl font-bold text-ink">Bu haftaki kayıtların</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4 border-y border-line py-5 sm:grid-cols-3">
                  <div>
                    <p className="text-xs text-ink/60">Bu hafta</p>
                    <p className="mt-1 font-display text-xl font-bold tabular-nums text-ink">{minutesLabel(guide.week.thisWeekMinutes)}</p>
                  </div>
                  <div>
                    <p className="text-xs text-ink/60">Geçen hafta</p>
                    <p className="mt-1 font-display text-xl font-bold tabular-nums text-ink">{minutesLabel(guide.week.previousWeekMinutes)}</p>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <p className="text-xs text-ink/60">Bu hafta kaydettiğin soru</p>
                    <p className="mt-1 font-display text-xl font-bold tabular-nums text-ink">{guide.week.thisWeekSolved}</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-ink/60">{guide.week.source}</p>
                <Button variant="link" size="sm" icon={ArrowRight} className="mt-3" onClick={() => navigate('/gunluk-takip')}>
                  Günlük kayıtlarımı aç
                </Button>
              </section>

              <section aria-labelledby="free-coach-homework">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-info-600" aria-hidden="true" />
                  <h2 id="free-coach-homework" className="font-display text-xl font-bold text-ink">Ödevlerin</h2>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-ink/75">
                  {guide.homework.pending > 0
                    ? `${guide.homework.pending} bekleyen ödevin var${guide.homework.overdue ? `; ${guide.homework.overdue} tanesinin teslim tarihi geçmiş` : ''}.`
                    : 'Bekleyen ödev görünmüyor.'}
                </p>
                <Button variant="link" size="sm" icon={ArrowRight} className="mt-3" onClick={() => navigate('/odevler')}>
                  Ödevlerimi aç
                </Button>
              </section>
            </div>

            <div className="mt-9 grid gap-8 border-t border-line pt-8 lg:grid-cols-2">
              <section aria-labelledby="free-coach-topics">
                <h2 id="free-coach-topics" className="font-display text-xl font-bold text-ink">Dönüp bakılabilecek konular</h2>
                {guide.topics.length ? (
                  <ol className="mt-4 divide-y divide-line">
                    {guide.topics.map((item) => (
                      <li key={`${item.subject}:${item.topic}`} className="py-4 first:pt-0">
                        <p className="font-semibold text-ink">{item.subject} · {item.topic}</p>
                        <p className="mt-1 text-sm text-ink/70">{item.attempted} soruda bildirilen isabet %{item.accuracy}</p>
                        <p className="mt-1 text-xs text-ink/60">{item.source}</p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">
                    Yeterli konu bazlı soru kaydı yok. Sırf liste dolsun diye zayıf konu uydurmuyorum.
                  </p>
                )}
              </section>

              <section aria-labelledby="free-coach-exam">
                <h2 id="free-coach-exam" className="font-display text-xl font-bold text-ink">Son genel denemen</h2>
                {guide.latestExam ? (
                  <div className="mt-4">
                    <p className="font-semibold text-ink">{guide.latestExam.name}</p>
                    <p className="mt-1 text-sm text-ink/70">{dateLabel(guide.latestExam.date)} · Toplam {guide.latestExam.totalNet} net</p>
                    {guide.latestExam.subjects.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/75">
                        {guide.latestExam.subjects.map((subject) => (
                          <li key={subject.subject}>{subject.subject} <strong className="tabular-nums text-ink">{subject.net}</strong> net</li>
                        ))}
                      </ul>
                    )}
                    <p className="mt-4 text-xs leading-relaxed text-ink/60">{guide.latestExam.source}</p>
                  </div>
                ) : (
                  <p className="mt-4 text-sm leading-relaxed text-ink/70">Henüz kayıtlı genel deneme yok.</p>
                )}
                <Button variant="link" size="sm" icon={ArrowRight} className="mt-3" onClick={() => navigate('/denemeler')}>
                  Denemelerimi aç
                </Button>
              </section>
            </div>

            <p className="mt-9 border-t border-line pt-5 text-xs leading-relaxed text-ink/60">{guide.scope}</p>
          </>
        )}
      </div>
    </AppShell>
  )
}
