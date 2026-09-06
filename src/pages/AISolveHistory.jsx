import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  BookOpenCheck,
  Camera,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  History,
  ImageOff,
  RefreshCcw,
  Search,
  Sparkles,
} from 'lucide-react'

import {
  AISolveError,
  listSolutions,
  setSolutionReview,
} from '../lib/aiSolve'
import {
  filterHistory,
  historyGroupForDate,
  historyMatchesTab,
  mergeStoredReviews,
  needsReview,
  readStoredReviews,
  rememberReview,
  summarizeHistory,
} from '../lib/aiSolveHistory'
import {
  buildAISolveHistoryCaptureData,
  isProductCapture,
} from '../lib/productCapture'
import { publicUrlFor } from '../lib/whiteboard/imagePrep'
import { useAuth } from '../context/AuthContext'
import {
  Alert,
  AppShell,
  Badge,
  Button,
  Card,
  CardBody,
  EmptyState,
  Input,
  Select,
  Skeleton,
  Tabs,
  useToast,
} from '../components/ui'

const TAB_DEFINITIONS = [
  { value: 'all', label: 'Tümü' },
  { value: 'review', label: 'Tekrar' },
  { value: 'wrong', label: 'Zorlandıklarım' },
  { value: 'helped', label: 'Yardım aldıklarım' },
  { value: 'checked', label: 'Kontrol ettiklerim' },
  { value: 'failed', label: 'Sorunlu' },
]

const GROUPS = ['Bugün', 'Bu hafta', 'Daha önce']

const ERROR_LABELS = {
  isaret_hatasi: 'İşaret hatası',
  islem_hatasi: 'İşlem hatası',
  formul_yanlis: 'Yanlış formül',
  kavram_yanilgisi: 'Kavram yanılgısı',
  birim_hatasi: 'Birim hatası',
  okuma_hatasi: 'Soruyu yanlış okuma',
  eksik_durum: 'Atlanan durum',
  dikkatsizlik: 'Dikkatsizlik',
}

export default function AISolveHistory() {
  const { user } = useAuth()
  const captureMode = isProductCapture()
  const toast = useToast()
  const [items, setItems] = useState(() =>
    captureMode ? buildAISolveHistoryCaptureData() : []
  )
  const [loading, setLoading] = useState(!captureMode)
  const [error, setError] = useState(null)
  const [tab, setTab] = useState('all')
  const [query, setQuery] = useState('')
  const [subject, setSubject] = useState('all')
  const [savingId, setSavingId] = useState(null)

  useEffect(() => {
    if (captureMode) return undefined
    let active = true

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const sessions = await listSolutions({ limit: 50 })
        if (active) setItems(mergeStoredReviews(sessions, readStoredReviews(user?.id)))
      } catch (err) {
        if (active) {
          setError(
            err instanceof AISolveError
              ? err.message
              : 'Çözüm geçmişin şu anda açılamıyor.'
          )
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [captureMode, user?.id])

  const subjects = useMemo(
    () => [...new Set(items.map((item) => item.subject).filter(Boolean))].sort((a, b) =>
      a.localeCompare(b, 'tr-TR')
    ),
    [items]
  )

  const tabs = useMemo(
    () => TAB_DEFINITIONS.map((item) => ({
      ...item,
      count: items.filter((row) => historyMatchesTab(row, item.value)).length,
    })),
    [items]
  )

  const filtered = useMemo(
    () => filterHistory(items, { tab, query, subject }),
    [items, query, subject, tab]
  )

  const grouped = useMemo(
    () => GROUPS.map((label) => ({
      label,
      items: filtered.filter((item) => historyGroupForDate(item.created_at) === label),
    })).filter((group) => group.items.length > 0),
    [filtered]
  )

  const summary = useMemo(() => summarizeHistory(items), [items])
  const filtersActive = tab !== 'all' || subject !== 'all' || query.trim().length > 0

  async function changeReview(item, reviewStatus) {
    setSavingId(item.id)
    setItems((rows) => rows.map((row) =>
      row.id === item.id ? { ...row, review_status: reviewStatus } : row
    ))
    rememberReview(user?.id, item.id, reviewStatus)

    if (captureMode) {
      setSavingId(null)
      toast.success(reviewStatus === 'completed' ? 'Tekrar tamamlandı.' : 'Tekrar listene eklendi.')
      return
    }

    try {
      await setSolutionReview({ sessionId: item.id, reviewStatus })
      toast.success(reviewStatus === 'completed' ? 'Tekrar tamamlandı.' : 'Tekrar listene eklendi.')
    } catch {
      toast.warning('Tekrar durumu bu cihazda kaydedildi.', {
        description: 'Hesaplar arası eşitleme şu anda kullanılamıyor.',
      })
    } finally {
      setSavingId(null)
    }
  }

  function clearFilters() {
    setTab('all')
    setQuery('')
    setSubject('all')
  }

  return (
    <AppShell
      title="Çözüm Geçmişim"
      subtitle="Takıldığın sorulara dön, cevabı görmeden yeniden dene"
      headerAction={
        <Button as={Link} to="/soru-coz" size="sm" icon={Camera}>
          <span className="hidden sm:inline">Yeni soru çöz</span>
          <span className="sm:hidden">Yeni soru</span>
        </Button>
      }
    >
      <Button
        as={Link}
        to="/soru-coz"
        variant="link"
        size="sm"
        icon={ArrowLeft}
        className="w-fit"
      >
        AI Soru Çöz'e dön
      </Button>

      {loading ? (
        <HistorySkeleton />
      ) : error ? (
        <Alert tone="danger">{error}</Alert>
      ) : items.length === 0 ? (
        <EmptyState
          icon={Sparkles}
          title="Henüz çözdüğün soru yok"
          description="İlk sorunu çözdüğünde burada birikmeye ve tekrar planına dönüşmeye başlar."
          action={
            <Button as={Link} to="/soru-coz" icon={Camera}>
              İlk sorumu çöz
            </Button>
          }
        />
      ) : (
        <>
          <LearningSummary summary={summary} />

          <Card variant="outline">
            <CardBody className="flex flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_13rem]">
                <Input
                  type="search"
                  icon={Search}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Konu veya soru ara"
                  aria-label="Geçmişte ara"
                />
                <Select
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  aria-label="Derse göre filtrele"
                >
                  <option value="all">Tüm dersler</option>
                  {subjects.map((value) => (
                    <option key={value} value={value}>{value}</option>
                  ))}
                </Select>
              </div>
              <Tabs items={tabs} value={tab} onChange={setTab} className="w-full" />
            </CardBody>
          </Card>

          {filtered.length === 0 ? (
            <EmptyState
              compact
              icon={Search}
              title="Bu filtrede soru bulamadım"
              description="Arama kelimesini veya seçtiğin filtreleri değiştirerek yeniden deneyebilirsin."
              action={
                <Button variant="secondary" onClick={clearFilters}>
                  Filtreleri temizle
                </Button>
              }
            />
          ) : (
            <div className="flex flex-col gap-6">
              {grouped.map((group, index) => (
                <section key={group.label} aria-labelledby={`history-group-${index}`}>
                  <div className="mb-2.5 flex items-center gap-2 px-1">
                    <h2
                      id={`history-group-${index}`}
                      className="font-display text-sm font-bold text-ink"
                    >
                      {group.label}
                    </h2>
                    <span className="text-xs font-semibold tabular-nums text-ink/45">
                      {group.items.length}
                    </span>
                  </div>
                  <Card className="overflow-hidden">
                    <ul className="divide-y divide-line">
                      {group.items.map((item) => (
                        <HistoryRow
                          key={item.id}
                          item={item}
                          saving={savingId === item.id}
                          onReview={changeReview}
                        />
                      ))}
                    </ul>
                  </Card>
                </section>
              ))}
            </div>
          )}

          {filtersActive && filtered.length > 0 && (
            <p className="text-center text-xs text-ink/50" aria-live="polite">
              {filtered.length} soru gösteriliyor
            </p>
          )}
        </>
      )}
    </AppShell>
  )
}

function LearningSummary({ summary }) {
  return (
    <Card variant="highlight" glow>
      <CardBody className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-start gap-3.5">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-brand-500/10 text-brand-700 ring-1 ring-inset ring-brand-500/15">
            <BookOpenCheck className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-bold text-ink">Kısa öğrenme özetin</p>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink/68">
              Son kayıtlarında {summary.solvedCount} soru çözdün.
              {' '}{summary.reviewCount > 0
                ? `${summary.reviewCount} soru tekrar bekliyor.`
                : 'Bekleyen tekrarın yok.'}
              {summary.focusTopic ? ` En çok ${summary.focusTopic} üzerinde durdun.` : ''}
            </p>
          </div>
        </div>
        {summary.reviewCount > 0 && (
          <Badge tone="warning" icon={RefreshCcw} className="w-fit shrink-0">
            {summary.reviewCount} tekrar
          </Badge>
        )}
      </CardBody>
    </Card>
  )
}

function HistoryRow({ item, saving, onReview }) {
  const successful = item.status === 'ok'
  const review = needsReview(item)
  const title = item.canonical_topic ?? item.topic ?? item.subject ?? 'Soru'
  const imageUrl = publicUrlFor(item.image_path)

  if (!successful) {
    const unreadable = item.status === 'unreadable'
    const StatusIcon = unreadable ? ImageOff : CircleAlert
    return (
      <li className="flex flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:px-5">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-warning-500/10 text-warning-700 ring-1 ring-inset ring-warning-500/20">
          <StatusIcon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-display text-sm font-bold text-ink">{title}</p>
            <Badge tone="warning" size="sm">
              {unreadable ? 'Okunamadı' : 'Çözüm gösterilmedi'}
            </Badge>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-ink/62">
            {unreadable
              ? 'Fotoğraf yeterince net değildi. Daha aydınlık ve düz açıyla yeniden çekebilirsin.'
              : 'Güvenilir bir sonuca ulaşılamadı. Soruyu kontrol edip yeniden gönderebilirsin.'}
          </p>
          <HistoryDate value={item.created_at} />
        </div>
        <Button
          as={Link}
          to="/soru-coz"
          variant="secondary"
          size="sm"
          icon={Camera}
          className="h-11 sm:h-9"
        >
          Yeniden dene
        </Button>
      </li>
    )
  }

  return (
    <li className="px-4 py-5 sm:px-5">
      <div className="flex gap-3.5 sm:gap-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=""
            className="h-14 w-14 shrink-0 rounded-xl border border-line bg-surface-sunken object-cover sm:h-16 sm:w-16"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-brand-500/[0.07] text-brand-700 ring-1 ring-inset ring-brand-500/12 sm:h-16 sm:w-16">
            <History className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
          </span>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-display text-sm font-bold text-ink sm:text-[0.9375rem]">{title}</h3>
            {item.review_status === 'pending' && (
              <Badge tone="warning" size="sm" icon={RefreshCcw}>Tekrar bekliyor</Badge>
            )}
            {item.review_status === 'completed' && (
              <Badge tone="success" size="sm" icon={CheckCircle2}>Tekrarlandı</Badge>
            )}
          </div>

          <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-ink/68">
            {item.question_text ?? 'Soru metni kaydedilmedi.'}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            {item.subject && <Badge size="sm">{item.subject}</Badge>}
            {item.subtopic && <Badge size="sm">{item.subtopic}</Badge>}
            {item.difficulty && <Badge size="sm">Zorluk {item.difficulty}/5</Badge>}
            {item.student_correct === false && (
              <Badge tone="danger" size="sm">Zorlandım</Badge>
            )}
            {Number(item.help_requested ?? 0) > 0 && (
              <Badge tone="info" size="sm">{item.help_requested} kez yardım aldım</Badge>
            )}
            {item.error_type && (
              <Badge tone="warning" size="sm">
                {ERROR_LABELS[item.error_type] ?? item.error_type}
              </Badge>
            )}
          </div>
          <HistoryDate value={item.created_at} />
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2 sm:ml-20">
        <Button
          as={Link}
          to={`/soru-coz?tekrar=${encodeURIComponent(item.id)}`}
          variant="subtle"
          size="sm"
          icon={RefreshCcw}
          className="h-11 sm:h-9"
        >
          Tekrar çöz
        </Button>
        <Button
          as={Link}
          to={`/soru-coz?oturum=${encodeURIComponent(item.id)}`}
          variant="ghost"
          size="sm"
          icon={ClipboardCheck}
          className="h-11 sm:h-9"
        >
          Çözümü incele
        </Button>
        {item.review_status === 'pending' ? (
          <Button
            variant="ghost"
            size="sm"
            icon={CheckCircle2}
            loading={saving}
            className="h-11 sm:h-9"
            onClick={() => onReview(item, 'completed')}
          >
            Tamamlandı
          </Button>
        ) : item.review_status !== 'completed' || review ? (
          <Button
            variant="ghost"
            size="sm"
            icon={BookOpenCheck}
            loading={saving}
            className="h-11 sm:h-9"
            onClick={() => onReview(item, 'pending')}
          >
            Tekrar listeme ekle
          </Button>
        ) : null}
      </div>
    </li>
  )
}

function HistoryDate({ value }) {
  const date = new Date(value)
  const formatted = Number.isNaN(date.getTime())
    ? 'Tarih bilinmiyor'
    : date.toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit',
      })

  return <p className="mt-2 text-xs text-ink/45">{formatted}</p>
}

function HistorySkeleton() {
  return (
    <div className="flex flex-col gap-5" aria-label="Çözüm geçmişi yükleniyor">
      <Skeleton className="h-28 rounded-card" />
      <Skeleton className="h-32 rounded-card" />
      <div className="flex flex-col gap-3">
        <Skeleton className="h-24 rounded-card" />
        <Skeleton className="h-24 rounded-card" />
        <Skeleton className="h-24 rounded-card" />
      </div>
    </div>
  )
}
