import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Bell,
  BookCheck,
  CheckCheck,
  CircleHelp,
  ClipboardCheck,
  FlaskConical,
  MapPinned,
  MessageSquareText,
  NotebookPen,
  ScanSearch,
  RefreshCw,
} from 'lucide-react'

import useAccountNotifications from '../../hooks/useTeacherNotifications'
import { useAuth } from '../../context/AuthContext'
import { cn } from '../../lib/cn'
import { Button, Drawer, SoftIcon, Spinner, Tabs, UnreadBadge } from '../ui'

const KIND_PRESENTATION = {
  message: { Icon: MessageSquareText, tone: 'aqua', label: 'Mesaj' },
  question: { Icon: CircleHelp, tone: 'raspberry', label: 'Soru' },
  question_replied: { Icon: CheckCheck, tone: 'mint', label: 'Soru çözümü' },
  daily_log: { Icon: NotebookPen, tone: 'sage', label: 'Çalışma' },
  branch_exam: { Icon: FlaskConical, tone: 'orange', label: 'Branş denemesi' },
  mock_exam: { Icon: FlaskConical, tone: 'peach', label: 'Genel deneme' },
  homework_assigned: { Icon: ClipboardCheck, tone: 'indigo', label: 'Ödev' },
  homework_completed: { Icon: ClipboardCheck, tone: 'mint', label: 'Ödev' },
  lesson_completed: { Icon: BookCheck, tone: 'indigo', label: 'Ders' },
  assessment_completed: { Icon: CheckCheck, tone: 'sky', label: 'Test' },
  atlas_task_completed: { Icon: MapPinned, tone: 'teal', label: 'Atlas' },
  ai_solve_completed: { Icon: ScanSearch, tone: 'amber', label: 'AI Soru Çöz' },
}

function relativeTime(value) {
  const date = new Date(value)
  const seconds = Math.round((date.getTime() - Date.now()) / 1000)
  const absolute = Math.abs(seconds)
  const formatter = new Intl.RelativeTimeFormat('tr-TR', { numeric: 'auto' })

  if (absolute < 60) return 'şimdi'
  if (absolute < 3600) return formatter.format(Math.round(seconds / 60), 'minute')
  if (absolute < 86_400) return formatter.format(Math.round(seconds / 3600), 'hour')
  if (absolute < 604_800) return formatter.format(Math.round(seconds / 86_400), 'day')
  return date.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })
}

export default function AccountNotificationCenter() {
  const { role } = useAuth()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState('all')
  const {
    notifications,
    unreadCount,
    loading,
    available,
    error,
    refresh,
    markRead,
    markAllRead,
  } = useAccountNotifications()
  const isTeacher = role === 'teacher'

  const visible = useMemo(
    () => filter === 'unread' ? notifications.filter((item) => !item.read_at) : notifications,
    [filter, notifications]
  )

  // Sistem bildirimine dokunarak açılan kayıt otomatik okunmuş sayılır.
  // İşaret bir kez tüketilir ve geri/ileri gezinmesini kirletmemesi için
  // adresten kaldırılır; hedef sayfanın diğer sorgu parametreleri korunur.
  useEffect(() => {
    if (available !== true) return
    const url = new URL(window.location.href)
    const notificationId = url.searchParams.get('bildirim')
    if (!notificationId) return

    markRead(notificationId).finally(() => {
      url.searchParams.delete('bildirim')
      window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`)
    })
  }, [available, markRead])

  // Göç henüz canlıya uygulanmadıysa mevcut panelde kırık/boş bir kontrol
  // göstermeyiz. Göç gelir gelmez aynı kod otomatik görünür hâle gelir.
  if (available === false && !loading) return null

  function openNotification(item) {
    // Ağ gecikmesi hedef sayfaya geçişi bekletmesin; okundu kaydı arka
    // planda tamamlanır ve hata olursa hook sayacı yeniden eşitler.
    if (!item.read_at) void markRead(item.id)
    setOpen(false)
    navigate(item.target_path || '/ogretmen')
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={unreadCount ? `Bildirimler, ${unreadCount} okunmamış` : 'Bildirimler'}
        className="focus-ring relative grid h-11 w-11 place-items-center rounded-xl border border-line bg-surface text-ink/62 shadow-xs transition-colors hover:bg-surface-muted hover:text-ink"
      >
        <Bell className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
        <UnreadBadge count={unreadCount} className="-right-1 -top-1" />
      </button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Bildirimler"
        description={
          unreadCount
            ? isTeacher
              ? `${unreadCount} yeni öğrenci hareketi`
              : `${unreadCount} yeni öğretmen bildirimi`
            : 'Yeni bildirim yok'
        }
        width="lg"
        footer={
          unreadCount > 0 ? (
            <Button variant="secondary" size="sm" icon={CheckCheck} onClick={markAllRead}>
              Tümünü okundu yap
            </Button>
          ) : null
        }
      >
        <div className="flex min-h-full flex-col">
          <div className="mb-4 flex items-center justify-between gap-3">
            <Tabs
              items={[
                { value: 'all', label: 'Tümü', count: notifications.length },
                { value: 'unread', label: 'Okunmamış', count: unreadCount },
              ]}
              value={filter}
              onChange={setFilter}
            />
            <button
              type="button"
              onClick={() => refresh()}
              aria-label="Bildirimleri yenile"
              title="Yenile"
              className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-xl text-ink/55 transition-colors hover:bg-ink/[0.05] hover:text-ink"
            >
              <RefreshCw className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          {loading ? (
            <div className="grid flex-1 place-items-center py-16" role="status">
              <span className="flex items-center gap-2 text-sm font-semibold text-ink/60">
                <Spinner className="h-4 w-4" /> Bildirimler hazırlanıyor…
              </span>
            </div>
          ) : error ? (
            <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center" role="alert">
              <p className="text-sm font-semibold text-ink">{error}</p>
              <Button className="mt-4" variant="secondary" size="sm" onClick={() => refresh()}>
                Yeniden dene
              </Button>
            </div>
          ) : visible.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 ring-1 ring-inset ring-brand-500/15">
                <Bell className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <p className="mt-4 font-display text-base font-bold text-ink">
                {filter === 'unread' ? 'Okunmamış bildirim yok' : 'Henüz bildirim yok'}
              </p>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ink/60">
                {isTeacher
                  ? 'Öğrencilerin mesaj, çalışma, deneme ve tamamlama kayıtları burada görünecek.'
                  : 'Öğretmeninin mesaj, yeni ödev ve soru çözümleri burada görünecek.'}
              </p>
            </div>
          ) : (
            <ol
              className="-mx-2 divide-y divide-line"
              aria-label={isTeacher ? 'Öğrenci bildirimleri' : 'Öğretmen bildirimleri'}
            >
              {visible.map((item) => {
                const presentation = KIND_PRESENTATION[item.kind] ?? {
                  Icon: Bell,
                  tone: 'slate',
                  label: 'Bildirim',
                }
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => openNotification(item)}
                      className={cn(
                        'focus-ring group flex min-h-[5.5rem] w-full items-start gap-3 rounded-xl px-2 py-3 text-left transition-colors',
                        item.read_at ? 'hover:bg-ink/[0.035]' : 'bg-brand-500/[0.045] hover:bg-brand-500/[0.075]'
                      )}
                    >
                      <SoftIcon
                        icon={presentation.Icon}
                        tone={presentation.tone}
                        size="md"
                        active={!item.read_at}
                        className="mt-0.5 shrink-0"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-start justify-between gap-3">
                          <strong className={cn(
                            'text-sm leading-snug text-ink',
                            item.read_at ? 'font-semibold' : 'font-extrabold'
                          )}>
                            {item.title}
                          </strong>
                          <time
                            dateTime={item.created_at}
                            className="shrink-0 pt-0.5 text-[11px] font-semibold text-ink/45"
                          >
                            {relativeTime(item.created_at)}
                          </time>
                        </span>
                        {item.body && (
                          <span className="mt-1 block text-xs leading-relaxed text-ink/62">
                            {item.body}
                          </span>
                        )}
                        <span className="mt-1.5 flex items-center gap-2 text-[11px] font-bold text-ink/45">
                          {presentation.label}
                          {!item.read_at && (
                            <span className="inline-flex items-center gap-1 text-brand-700">
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden="true" />
                              Yeni
                            </span>
                          )}
                        </span>
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          )}
        </div>
      </Drawer>
    </>
  )
}
