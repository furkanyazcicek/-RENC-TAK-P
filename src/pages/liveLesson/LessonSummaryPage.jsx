import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  CalendarPlus,
  CheckCircle2,
  ClipboardList,
  Clock,
  Lock,
  Send,
  ShieldAlert,
  Users,
} from 'lucide-react'
import { cn } from '../../lib/cn'
import {
  Alert,
  AppShell,
  Badge,
  Button,
  Card,
  CardBody,
  EmptyState,
  Field,
  Input,
  PageSection,
  Textarea,
  useToast,
} from '../../components/ui'
import LessonStatusBadge from '../../components/liveLesson/LessonStatusBadge'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'
import { useLessonAuth } from '../../lib/liveLesson/preview'
import {
  createLessonHomework,
  fetchLesson,
  fetchLessonHomeworks,
  fetchMaterials,
  fetchParticipants,
  fetchPrivateNote,
  fetchSummary,
  isSchemaMissing,
  savePrivateNote,
  saveSummary,
  submitStudentFeedback,
} from '../../lib/liveLesson/api'
import { FEEDBACK_OPTIONS, feedbackLabel, materialKindLabel } from '../../lib/liveLesson/status'
import { formatDuration, formatLessonDateTime } from '../../lib/liveLesson/time'

/**
 * Ders sonu ekranı.
 *
 * "Dersi Bitir" dedikten sonra öğretmen boş bir ekrana düşmez; burada
 * dersin gerçek süresi, katılım, kullanılan materyaller ve tahta çıktısı
 * hazır bekler. Öğretmen özeti yazar, ödev verir, sonraki dersi planlar.
 *
 * ÖĞRETMENİN ÖZEL NOTU BU SAYFADA DA AYRI TUTULUR: `lesson_private_notes`
 * tablosuna yazılır, öğrenci görünümünde o tabloyu okuyan hiçbir sorgu
 * yoktur.
 */
export default function LessonSummaryPage() {
  const { sessionId } = useParams()
  const { user, role } = useLessonAuth()
  const navigate = useNavigate()
  const toast = useToast()
  const isTeacher = role === 'teacher'

  const [session, setSession] = useState(null)
  const [summary, setSummary] = useState(null)
  const [participants, setParticipants] = useState([])
  const [materials, setMaterials] = useState([])
  const [homeworks, setHomeworks] = useState([])
  const [privateNote, setPrivateNote] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [feedbackSaving, setFeedbackSaving] = useState(false)

  const [form, setForm] = useState({ covered: '', publicNote: '', nextGoal: '' })
  const [homework, setHomework] = useState({ title: '', description: '', dueDate: '' })

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const lesson = await fetchLesson(sessionId)
      if (!lesson) {
        setError('not_found')
        return
      }
      setSession(lesson)

      const [sum, parts, mats, hws] = await Promise.all([
        fetchSummary(sessionId).catch(() => null),
        fetchParticipants(sessionId).catch(() => []),
        fetchMaterials(sessionId).catch(() => []),
        fetchLessonHomeworks(sessionId).catch(() => []),
      ])
      setSummary(sum)
      setParticipants(parts)
      setMaterials(mats)
      setHomeworks(hws)
      if (sum) {
        setForm({
          covered: sum.covered_topics ?? '',
          publicNote: sum.public_note ?? '',
          nextGoal: sum.next_goal ?? '',
        })
      } else if (lesson.topic) {
        setForm((f) => ({ ...f, covered: lesson.topic }))
      }

      if (role === 'teacher') {
        const note = await fetchPrivateNote(sessionId).catch(() => null)
        setPrivateNote(note?.outcome_note ?? '')
      }
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [sessionId, role])

  useEffect(() => {
    load()
  }, [load])

  const attendance = useMemo(() => {
    const teacher = participants.find((p) => p.role === 'teacher')
    const student = participants.find((p) => p.role === 'student')
    return { teacher, student }
  }, [participants])

  const realDuration = useMemo(() => {
    if (session?.started_at && session?.ended_at) {
      return Math.round((new Date(session.ended_at) - new Date(session.started_at)) / 1000)
    }
    const longest = participants.reduce((max, p) => Math.max(max, p.total_seconds || 0), 0)
    return longest
  }, [session, participants])

  async function handleSave(share) {
    if (!session) return
    setSaving(true)
    try {
      const saved = await saveSummary(sessionId, {
        teacherId: session.teacher_id,
        studentId: session.student_id,
        covered_topics: form.covered.trim() || null,
        public_note: form.publicNote.trim() || null,
        next_goal: form.nextGoal.trim() || null,
        shared_with_student: share ?? summary?.shared_with_student ?? false,
        completed_at: summary?.completed_at ?? new Date().toISOString(),
      })
      await savePrivateNote(sessionId, session.teacher_id, { outcome_note: privateNote.trim() || null })
      setSummary(saved)
      toast.success(share ? 'Özet öğrenciyle paylaşıldı' : 'Ders özeti kaydedildi')
    } catch (err) {
      toast.error('Ders özeti kaydedilemedi', { description: err.message })
    } finally {
      setSaving(false)
    }
  }

  async function handleHomework() {
    if (!homework.title.trim() || !session) return
    setSaving(true)
    try {
      await createLessonHomework({
        sessionId,
        studentId: session.student_id,
        teacherId: session.teacher_id,
        title: homework.title.trim(),
        description: homework.description.trim(),
        dueDate: homework.dueDate,
      })
      setHomework({ title: '', description: '', dueDate: '' })
      setHomeworks(await fetchLessonHomeworks(sessionId))
      toast.success('Ödev oluşturuldu')
    } catch (err) {
      toast.error('Ödev oluşturulamadı', { description: err.message })
    } finally {
      setSaving(false)
    }
  }

  if (schemaMissing) {
    return (
      <AppShell title="Ders Özeti" subtitle="Canlı ders">
        <SchemaMissingNotice />
      </AppShell>
    )
  }

  if (!loading && (error === 'not_found' || !session)) {
    return (
      <AppShell title="Ders Özeti" subtitle="Canlı ders" width="narrow">
        <EmptyState
          icon={ShieldAlert}
          title="Ders bulunamadı"
          description="Bu ders silinmiş olabilir ya da bu derse erişim yetkin yok."
          action={
            <Button as={Link} to={isTeacher ? '/ogretmen/canli-dersler' : '/canli-dersler'}>
              Derslerime dön
            </Button>
          }
        />
      </AppShell>
    )
  }

  const counterpart = isTeacher ? session?.student : session?.teacher

  return (
    <AppShell
      title="Ders Özeti"
      subtitle={session?.title}
      width="narrow"
      loading={loading}
      loadingLabel="Ders özeti hazırlanıyor…"
    >
      {error && error !== 'not_found' && (
        <Alert tone="danger" title="Özet yüklenemedi">
          {error}
        </Alert>
      )}

      {session && (
        <>
          {/* Ders künyesi */}
          <Card>
            <CardBody className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <h1 className="font-display text-xl font-bold text-ink">{session.title}</h1>
                  <p className="mt-1 text-sm text-ink/65">
                    {counterpart?.full_name}
                    {session.subject ? ` · ${session.subject}` : ''}
                    {session.topic ? ` · ${session.topic}` : ''}
                  </p>
                </div>
                <LessonStatusBadge status={session.status} />
              </div>

              <p className="text-sm tabular-nums text-ink/70">
                {formatLessonDateTime(session.scheduled_start)}
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-input bg-surface-muted px-3 py-2.5">
                  <p className="flex items-center gap-1.5 text-2xs text-ink/55">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    Gerçek süre
                  </p>
                  <p className="mt-1 font-display text-lg font-bold tabular-nums leading-none text-ink">
                    {realDuration ? formatDuration(realDuration) : '—'}
                  </p>
                </div>
                {[
                  { key: 'teacher', label: 'Öğretmen', data: attendance.teacher },
                  { key: 'student', label: 'Öğrenci', data: attendance.student },
                ].map((row) => (
                  <div key={row.key} className="rounded-input bg-surface-muted px-3 py-2.5">
                    <p className="flex items-center gap-1.5 text-2xs text-ink/55">
                      <Users className="h-3.5 w-3.5" aria-hidden="true" />
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-tight text-ink">
                      {row.data?.attended ? formatDuration(row.data.total_seconds) : 'Katılmadı'}
                    </p>
                    {row.data?.reconnect_count > 1 && (
                      <p className="text-2xs text-ink/50">{row.data.reconnect_count} kez bağlandı</p>
                    )}
                  </div>
                ))}
              </div>

              {session.cancel_reason && (
                <Alert tone="warning" title="İptal gerekçesi">
                  {session.cancel_reason}
                </Alert>
              )}
            </CardBody>
          </Card>

          {/* Tahta çıktısı */}
          {summary?.board_image_url && (
            <PageSection title="Tahta çıktısı" description="Dersin son tahta görüntüsü">
              <Card>
                <CardBody>
                  <img
                    src={summary.board_image_url}
                    alt="Ders tahtasının son hâli"
                    className="w-full rounded-card border border-line"
                  />
                </CardBody>
              </Card>
            </PageSection>
          )}

          {/* Kullanılan materyaller */}
          {materials.length > 0 && (
            <PageSection title="Kullanılan materyaller">
              <Card>
                <CardBody padding="none" className="divide-y divide-line px-5">
                  {(isTeacher ? materials : materials.filter((m) => m.visible_to_student)).map((m) => (
                    <div key={m.id} className="flex items-center gap-3 py-3">
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-ink">{m.title}</p>
                        <p className="text-xs text-ink/55">{materialKindLabel(m.kind)}</p>
                      </div>
                      {m.url && (
                        <Button as="a" href={m.url} target="_blank" rel="noreferrer" size="xs" variant="ghost">
                          Aç
                        </Button>
                      )}
                    </div>
                  ))}
                </CardBody>
              </Card>
            </PageSection>
          )}

          {isTeacher ? (
            /* ---------------- ÖĞRETMEN GÖRÜNÜMÜ ---------------- */
            <>
              <PageSection title="Ders özeti" description="Öğrenciye paylaştığın bölüm">
                <Card>
                  <CardBody className="flex flex-col gap-4">
                    <Field label="İşlenen konular">
                      {({ id }) => (
                        <Input
                          id={id}
                          value={form.covered}
                          onChange={(e) => setForm((f) => ({ ...f, covered: e.target.value }))}
                          placeholder="Örn. Zincir kuralı, bileşke fonksiyon türevi"
                        />
                      )}
                    </Field>

                    <Field label="Öğrenciye açık değerlendirme">
                      {({ id }) => (
                        <Textarea
                          id={id}
                          value={form.publicNote}
                          onChange={(e) => setForm((f) => ({ ...f, publicNote: e.target.value }))}
                          rows={3}
                          placeholder="Örn. Tanımı iyi kavradın, işlem hatalarına dikkat etmelisin."
                        />
                      )}
                    </Field>

                    <Field label="Sonraki ders hedefi">
                      {({ id }) => (
                        <Input
                          id={id}
                          value={form.nextGoal}
                          onChange={(e) => setForm((f) => ({ ...f, nextGoal: e.target.value }))}
                          placeholder="Örn. Ters türev ve temel integral"
                        />
                      )}
                    </Field>

                    <Field
                      label={
                        <span className="inline-flex items-center gap-1.5">
                          <Lock className="h-3.5 w-3.5" aria-hidden="true" />
                          Sana özel not
                        </span>
                      }
                      hint="Öğrenciye hiçbir ekranda gösterilmez."
                    >
                      {({ id, describedBy }) => (
                        <Textarea
                          id={id}
                          aria-describedby={describedBy}
                          value={privateNote}
                          onChange={(e) => setPrivateNote(e.target.value)}
                          rows={3}
                        />
                      )}
                    </Field>

                    <div className="flex flex-wrap items-center gap-2">
                      <Button loading={saving} onClick={() => handleSave(undefined)} variant="secondary">
                        Kaydet
                      </Button>
                      <Button loading={saving} icon={Send} onClick={() => handleSave(true)}>
                        Özeti Öğrenciyle Paylaş
                      </Button>
                      {summary?.shared_with_student && (
                        <Badge tone="success" icon={CheckCircle2} size="sm">
                          Paylaşıldı
                        </Badge>
                      )}
                    </div>

                    {summary?.student_feedback && (
                      <Alert tone="info" title="Öğrencinin geri bildirimi">
                        {feedbackLabel(summary.student_feedback)}
                      </Alert>
                    )}
                  </CardBody>
                </Card>
              </PageSection>

              <PageSection title="Ödev" description="Bu derse bağlı ödev ver">
                <Card>
                  <CardBody className="flex flex-col gap-4">
                    {homeworks.length > 0 && (
                      <ul className="flex flex-col divide-y divide-line">
                        {homeworks.map((h) => (
                          <li key={h.id} className="flex items-center gap-3 py-2.5">
                            <ClipboardList className="h-4 w-4 shrink-0 text-ink/40" aria-hidden="true" />
                            <span className="min-w-0 flex-1 truncate text-sm text-ink">{h.title}</span>
                            <Badge tone={h.status === 'Tamamlandı' ? 'success' : 'warning'} size="sm">
                              {h.status}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    )}

                    <Field label="Ödev başlığı">
                      {({ id }) => (
                        <Input
                          id={id}
                          value={homework.title}
                          onChange={(e) => setHomework((h) => ({ ...h, title: e.target.value }))}
                          placeholder="Örn. Zincir kuralı — 20 soru"
                        />
                      )}
                    </Field>
                    <Field label="Açıklama">
                      {({ id }) => (
                        <Textarea
                          id={id}
                          value={homework.description}
                          onChange={(e) => setHomework((h) => ({ ...h, description: e.target.value }))}
                          rows={2}
                        />
                      )}
                    </Field>
                    <Field label="Son teslim">
                      {({ id }) => (
                        <Input
                          id={id}
                          type="date"
                          value={homework.dueDate}
                          onChange={(e) => setHomework((h) => ({ ...h, dueDate: e.target.value }))}
                        />
                      )}
                    </Field>
                    <div>
                      <Button
                        variant="secondary"
                        icon={ClipboardList}
                        loading={saving}
                        disabled={!homework.title.trim()}
                        onClick={handleHomework}
                      >
                        Ödevi Ver
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </PageSection>

              <div className="flex flex-wrap gap-2">
                <Button as={Link} to="/ogretmen/canli-dersler/yeni" variant="secondary" icon={CalendarPlus}>
                  Sonraki Dersi Planla
                </Button>
                <Button as={Link} to="/ogretmen/canli-dersler" variant="ghost">
                  Derslerime dön
                </Button>
              </div>
            </>
          ) : (
            /* ---------------- ÖĞRENCİ GÖRÜNÜMÜ ---------------- */
            <>
              {summary?.shared_with_student ? (
                <>
                  <PageSection title="Öğretmeninden">
                    <Card>
                      <CardBody className="flex flex-col gap-3">
                        {summary.covered_topics && (
                          <div>
                            <p className="text-2xs font-bold uppercase tracking-wide text-ink/45">
                              İşlenen konular
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-ink">{summary.covered_topics}</p>
                          </div>
                        )}
                        {summary.public_note && (
                          <div>
                            <p className="text-2xs font-bold uppercase tracking-wide text-ink/45">
                              Değerlendirme
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-ink">{summary.public_note}</p>
                          </div>
                        )}
                        {summary.next_goal && (
                          <div>
                            <p className="text-2xs font-bold uppercase tracking-wide text-ink/45">
                              Sonraki ders hedefi
                            </p>
                            <p className="mt-1 text-sm font-medium leading-relaxed text-brand-700">
                              {summary.next_goal}
                            </p>
                          </div>
                        )}
                      </CardBody>
                    </Card>
                  </PageSection>

                  {homeworks.length > 0 && (
                    <PageSection title="Bu dersten verilen ödev">
                      <Card>
                        <CardBody padding="none" className="divide-y divide-line px-5">
                          {homeworks.map((h) => (
                            <div key={h.id} className="flex items-center gap-3 py-3">
                              <ClipboardList className="h-4 w-4 shrink-0 text-ink/40" aria-hidden="true" />
                              <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-ink">{h.title}</p>
                                {h.description && <p className="truncate text-xs text-ink/55">{h.description}</p>}
                              </div>
                              <Badge tone={h.status === 'Tamamlandı' ? 'success' : 'warning'} size="sm">
                                {h.status}
                              </Badge>
                            </div>
                          ))}
                        </CardBody>
                      </Card>
                    </PageSection>
                  )}

                  <PageSection
                    title="Dersi nasıl anladın?"
                    description="Yanıtın öğretmenine gider, sonraki dersi buna göre planlar."
                  >
                    <div className="flex flex-wrap gap-2">
                      {FEEDBACK_OPTIONS.map((option) => {
                        const active = summary.student_feedback === option.value
                        return (
                          <Button
                            key={option.value}
                            variant={active ? 'primary' : 'secondary'}
                            loading={feedbackSaving}
                            aria-pressed={active}
                            icon={active ? CheckCircle2 : undefined}
                            onClick={async () => {
                              setFeedbackSaving(true)
                              try {
                                await submitStudentFeedback(sessionId, option.value)
                                setSummary((s) => ({ ...s, student_feedback: option.value }))
                                toast.success('Geri bildirimin kaydedildi')
                              } catch (err) {
                                toast.error('Geri bildirim kaydedilemedi', { description: err.message })
                              } finally {
                                setFeedbackSaving(false)
                              }
                            }}
                          >
                            {option.label}
                          </Button>
                        )
                      })}
                    </div>
                  </PageSection>
                </>
              ) : (
                <EmptyState
                  icon={Clock}
                  title="Ders özeti henüz paylaşılmadı"
                  description="Öğretmenin özeti hazırlayıp paylaştığında burada göreceksin. Dersin tahta çıktısı ve materyalleri hazır olduğunda da bu sayfada olur."
                />
              )}

              <Button as={Link} to="/canli-dersler" variant="ghost">
                Derslerime dön
              </Button>
            </>
          )}
        </>
      )}
    </AppShell>
  )
}
