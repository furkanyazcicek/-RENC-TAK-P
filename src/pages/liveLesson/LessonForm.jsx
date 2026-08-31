import { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CalendarPlus, Lock, Save, Trash2, TriangleAlert } from 'lucide-react'
import {
  Alert,
  AppShell,
  Button,
  Card,
  CardBody,
  Field,
  Input,
  Modal,
  PageSection,
  Select,
  Textarea,
  useToast,
} from '../../components/ui'
import MaterialPanel from '../../components/liveLesson/MaterialPanel'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'
import { useLessonAuth } from '../../lib/liveLesson/preview'
import {
  addMaterial,
  checkConflicts,
  createLesson,
  fetchLesson,
  fetchMaterials,
  fetchMyStudents,
  fetchPrivateNote,
  isSchemaMissing,
  removeMaterial,
  savePrivateNote,
  setLessonStatus,
  updateLesson,
} from '../../lib/liveLesson/api'
import { istanbulToUtc, nextRoundedSlot, utcToIstanbulFields } from '../../lib/liveLesson/time'

/**
 * Ders planlama ve düzenleme.
 *
 * TEKRAR EDEN DERS — BİLİNÇLİ SADELEŞTİRME
 * ----------------------------------------
 * "Her hafta aynı saat" seçildiğinde BAĞIMSIZ dersler oluşturulur, bir
 * "seri" kaydı tutulmaz. Sebep: seri düzenlemenin üç ayrı anlamı var
 * (yalnız bu ders / bu ve sonrakiler / bütün seri) ve yanlış seçilen bir
 * seçenek öğrencinin takvimini sessizce siler. Bağımsız derste her
 * düzenleme yalnızca o dersi etkiler; kural tek ve tahmin edilebilir.
 * Gerçek seri yönetimi sonraki aşamaya bırakıldı (bkz. docs/canli-ders.md).
 */

const DURATIONS = [30, 40, 45, 60, 75, 90, 120]

export default function LessonForm() {
  const { sessionId } = useParams()
  const editing = Boolean(sessionId)
  const { user } = useLessonAuth()
  const navigate = useNavigate()
  const toast = useToast()

  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [schemaMissing, setSchemaMissing] = useState(false)
  const [error, setError] = useState(null)
  const [conflict, setConflict] = useState(null)
  const [cancelAsk, setCancelAsk] = useState(false)
  const [cancelReason, setCancelReason] = useState('')
  const [materials, setMaterials] = useState([])
  const [session, setSession] = useState(null)

  const defaults = useMemo(() => {
    const slot = nextRoundedSlot()
    const fields = utcToIstanbulFields(slot.toISOString())
    return { date: fields.date, time: fields.time }
  }, [])

  const [form, setForm] = useState({
    studentId: '',
    title: '',
    subject: '',
    topic: '',
    date: defaults.date,
    time: defaults.time,
    duration: 60,
    repeatWeeks: 1,
    agenda: '',
    prepNote: '',
    privateNote: '',
  })

  const set = (patch) => setForm((f) => ({ ...f, ...patch }))

  const loadMaterials = useCallback(async () => {
    if (!sessionId) return
    try {
      setMaterials(await fetchMaterials(sessionId))
    } catch {
      /* materyal listesi kritik değil, form çalışmaya devam etsin */
    }
  }, [sessionId])

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const list = await fetchMyStudents()
        if (cancelled) return
        setStudents(list)

        if (editing) {
          const [lesson, note] = await Promise.all([
            fetchLesson(sessionId),
            fetchPrivateNote(sessionId).catch(() => null),
          ])
          if (cancelled) return
          if (!lesson) {
            setError('Ders bulunamadı veya bu ders size ait değil.')
          } else {
            setSession(lesson)
            const start = utcToIstanbulFields(lesson.scheduled_start)
            const minutes = Math.round(
              (new Date(lesson.scheduled_end) - new Date(lesson.scheduled_start)) / 60000
            )
            setForm({
              studentId: lesson.student_id,
              title: lesson.title ?? '',
              subject: lesson.subject ?? '',
              topic: lesson.topic ?? '',
              date: start.date,
              time: start.time,
              duration: minutes,
              repeatWeeks: 1,
              agenda: lesson.agenda ?? '',
              prepNote: lesson.prep_note ?? '',
              privateNote: note?.prep_note ?? '',
            })
          }
          await loadMaterials()
        } else if (list.length === 1) {
          setForm((f) => ({ ...f, studentId: list[0].student_id }))
        }
      } catch (err) {
        if (cancelled) return
        if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
        else setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()
    return () => {
      cancelled = true
    }
  }, [editing, sessionId, loadMaterials])

  const startIso = useMemo(() => istanbulToUtc(form.date, form.time)?.toISOString() ?? null, [form.date, form.time])
  const endIso = useMemo(() => {
    if (!startIso) return null
    return new Date(new Date(startIso).getTime() + form.duration * 60000).toISOString()
  }, [startIso, form.duration])

  /* Çakışma kontrolü — kaydetmeden ÖNCE uyar, engelleme. */
  useEffect(() => {
    if (!form.studentId || !startIso || !endIso) {
      setConflict(null)
      return undefined
    }
    let cancelled = false
    const timer = window.setTimeout(async () => {
      try {
        const result = await checkConflicts({
          studentId: form.studentId,
          start: startIso,
          end: endIso,
          excludeId: sessionId ?? null,
        })
        if (!cancelled) setConflict(result.teacherBusy || result.studentBusy ? result : null)
      } catch {
        if (!cancelled) setConflict(null)
      }
    }, 400)
    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [form.studentId, startIso, endIso, sessionId])

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    if (!form.studentId) return setError('Ders planlamak için bir öğrenci seçin.')
    if (!form.title.trim()) return setError('Ders başlığı boş olamaz.')
    if (!startIso || !endIso) return setError('Tarih ve saat geçerli değil.')

    setSaving(true)
    try {
      const base = {
        teacher_id: user.id,
        student_id: form.studentId,
        title: form.title.trim(),
        subject: form.subject.trim() || null,
        topic: form.topic.trim() || null,
        agenda: form.agenda.trim() || null,
        prep_note: form.prepNote.trim() || null,
      }

      if (editing) {
        await updateLesson(sessionId, {
          ...base,
          scheduled_start: startIso,
          scheduled_end: endIso,
        })
        await savePrivateNote(sessionId, user.id, { prep_note: form.privateNote.trim() || null })
        toast.success('Ders güncellendi')
        navigate('/ogretmen/canli-dersler')
      } else {
        const weeks = Math.max(1, Math.min(12, Number(form.repeatWeeks) || 1))
        const created = []
        for (let i = 0; i < weeks; i++) {
          const start = new Date(new Date(startIso).getTime() + i * 7 * 86400000)
          const end = new Date(new Date(endIso).getTime() + i * 7 * 86400000)
          const lesson = await createLesson({
            ...base,
            scheduled_start: start.toISOString(),
            scheduled_end: end.toISOString(),
          })
          created.push(lesson)
        }
        if (form.privateNote.trim() && created[0]) {
          await savePrivateNote(created[0].id, user.id, { prep_note: form.privateNote.trim() })
        }
        toast.success(weeks > 1 ? `${weeks} ders planlandı` : 'Ders planlandı')
        navigate('/ogretmen/canli-dersler')
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  if (schemaMissing) {
    return (
      <AppShell title="Ders Planla" subtitle="Canlı ders">
        <SchemaMissingNotice />
      </AppShell>
    )
  }

  const studentName = students.find((s) => s.student_id === form.studentId)?.student_name

  return (
    <AppShell
      title={editing ? 'Dersi Düzenle' : 'Ders Planla'}
      subtitle={editing ? 'Planlanmış canlı ders' : 'Yeni birebir canlı ders'}
      width="narrow"
      loading={loading}
      loadingLabel="Form hazırlanıyor…"
    >
      {error && (
        <Alert tone="danger" title="Ders kaydedilemedi">
          {error}
        </Alert>
      )}

      {students.length === 0 && !editing && (
        <Alert tone="warning" title="Önce öğrenci davet et">
          Ders planlayabilmek için en az bir öğrencinin daveti kabul etmiş olması gerekiyor.{' '}
          <Link to="/ogretmen/canli-dersler" className="font-semibold underline">
            Öğrenci davet et
          </Link>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <Card>
          <CardBody className="flex flex-col gap-4">
            <Field label="Öğrenci" required>
              {({ id }) => (
                <Select
                  id={id}
                  value={form.studentId}
                  onChange={(e) => set({ studentId: e.target.value })}
                  disabled={editing}
                >
                  <option value="">Öğrenci seçin</option>
                  {students.map((s) => (
                    <option key={s.student_id} value={s.student_id}>
                      {s.student_name}
                    </option>
                  ))}
                </Select>
              )}
            </Field>

            <Field label="Ders başlığı" required hint="Öğrencinin takviminde bu yazacak.">
              {({ id }) => (
                <Input
                  id={id}
                  value={form.title}
                  onChange={(e) => set({ title: e.target.value })}
                  placeholder="Örn. Türev — zincir kuralı tekrarı"
                  maxLength={120}
                />
              )}
            </Field>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ders / branş">
                {({ id }) => (
                  <Input
                    id={id}
                    value={form.subject}
                    onChange={(e) => set({ subject: e.target.value })}
                    placeholder="Matematik"
                  />
                )}
              </Field>
              <Field label="Konu">
                {({ id }) => (
                  <Input
                    id={id}
                    value={form.topic}
                    onChange={(e) => set({ topic: e.target.value })}
                    placeholder="Türev"
                  />
                )}
              </Field>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Tarih" required>
                {({ id }) => (
                  <Input id={id} type="date" value={form.date} onChange={(e) => set({ date: e.target.value })} />
                )}
              </Field>
              <Field label="Başlangıç saati" required hint="Türkiye saati">
                {({ id }) => (
                  <Input id={id} type="time" value={form.time} onChange={(e) => set({ time: e.target.value })} />
                )}
              </Field>
              <Field label="Süre">
                {({ id }) => (
                  <Select id={id} value={form.duration} onChange={(e) => set({ duration: Number(e.target.value) })}>
                    {DURATIONS.map((d) => (
                      <option key={d} value={d}>
                        {d} dakika
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
            </div>

            {!editing && (
              <Field
                label="Haftalık tekrar"
                hint="Her ders BAĞIMSIZ oluşturulur. Sonradan birini düzenlemek ya da iptal etmek diğerlerini etkilemez."
              >
                {({ id, describedBy }) => (
                  <Select
                    id={id}
                    aria-describedby={describedBy}
                    value={form.repeatWeeks}
                    onChange={(e) => set({ repeatWeeks: Number(e.target.value) })}
                  >
                    <option value={1}>Tekrar yok — tek ders</option>
                    {[2, 4, 8, 12].map((n) => (
                      <option key={n} value={n}>
                        {n} hafta boyunca aynı gün ve saatte
                      </option>
                    ))}
                  </Select>
                )}
              </Field>
            )}

            {conflict && (
              <Alert tone="warning" icon={TriangleAlert} title="Bu saatte çakışma var">
                {conflict.teacherBusy && <p>Bu saatte senin başka bir dersin var.</p>}
                {conflict.studentBusy && (
                  <p>{studentName || 'Öğrencinin'} bu saatte başka bir dersi görünüyor.</p>
                )}
                <p className="mt-1 opacity-90">Yine de kaydedebilirsin; karar senin.</p>
              </Alert>
            )}
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-4">
            <Field
              label="Öğrenciye görünen hazırlık notu"
              hint="Öğrenci ders kartında ve bekleme odasında görür."
            >
              {({ id, describedBy }) => (
                <Textarea
                  id={id}
                  aria-describedby={describedBy}
                  value={form.prepNote}
                  onChange={(e) => set({ prepNote: e.target.value })}
                  rows={2}
                  placeholder="Örn. Defterini ve son denemeni yanına al."
                />
              )}
            </Field>

            <Field label="Ders gündemi" hint="Derste sırayla ne yapacağın.">
              {({ id, describedBy }) => (
                <Textarea
                  id={id}
                  aria-describedby={describedBy}
                  value={form.agenda}
                  onChange={(e) => set({ agenda: e.target.value })}
                  rows={3}
                  placeholder={'1. Geçen haftanın ödevi\n2. Zincir kuralı\n3. Karma sorular'}
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
                  value={form.privateNote}
                  onChange={(e) => set({ privateNote: e.target.value })}
                  rows={2}
                  placeholder="Örn. Sınav kaygısı var, tempoyu yükseltme."
                />
              )}
            </Field>
          </CardBody>
        </Card>

        <div className="flex flex-wrap items-center gap-2">
          <Button type="submit" icon={editing ? Save : CalendarPlus} loading={saving} disabled={!students.length && !editing}>
            {editing ? 'Değişiklikleri Kaydet' : 'Dersi Planla'}
          </Button>
          <Button as={Link} to="/ogretmen/canli-dersler" variant="ghost" type="button">
            Vazgeç
          </Button>
          {editing && session?.status === 'scheduled' && (
            <Button
              type="button"
              variant="ghost"
              icon={Trash2}
              className="ml-auto text-danger-600 hover:bg-danger-500/[0.08]"
              onClick={() => setCancelAsk(true)}
            >
              Dersi İptal Et
            </Button>
          )}
        </div>
      </form>

      {editing && session && (
        <PageSection
          title="Ders materyalleri"
          description="Derse önceden eklediklerin stüdyoda hazır bekler."
        >
          <Card>
            <CardBody>
              <MaterialPanel
                sessionId={sessionId}
                teacherId={user?.id}
                studentId={session.student_id}
                materials={materials}
                onAdd={async (material) => {
                  await addMaterial(sessionId, user.id, {
                    ...material,
                    order_index: materials.length,
                  })
                  await loadMaterials()
                }}
                onRemove={async (m) => {
                  await removeMaterial(m.id)
                  await loadMaterials()
                }}
                onToggleVisible={async (m) => {
                  const { updateMaterial } = await import('../../lib/liveLesson/api')
                  await updateMaterial(m.id, { visible_to_student: !m.visible_to_student })
                  await loadMaterials()
                }}
                onOpen={(m) => {
                  if (m.url) window.open(m.url, '_blank', 'noreferrer')
                }}
                onSendToBoard={() => toast.info('Tahtaya aktarma canlı ders stüdyosunda yapılır.')}
              />
            </CardBody>
          </Card>
        </PageSection>
      )}

      <Modal
        open={cancelAsk}
        onClose={() => setCancelAsk(false)}
        title="Dersi iptal et"
        description="Öğrenci iptal bilgisini ve gerekçeni görür."
        footer={
          <>
            <Button variant="ghost" onClick={() => setCancelAsk(false)}>
              Vazgeç
            </Button>
            <Button
              variant="danger"
              onClick={async () => {
                try {
                  await setLessonStatus(sessionId, 'cancelled', cancelReason.trim() || null)
                  toast.success('Ders iptal edildi')
                  navigate('/ogretmen/canli-dersler')
                } catch (err) {
                  setError(err.message)
                  setCancelAsk(false)
                }
              }}
            >
              Dersi İptal Et
            </Button>
          </>
        }
      >
        <Field label="İptal gerekçesi (isteğe bağlı)">
          {({ id }) => (
            <Textarea
              id={id}
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              rows={2}
              placeholder="Örn. Rahatsızlandım, bu haftayı erteliyoruz."
            />
          )}
        </Field>
      </Modal>
    </AppShell>
  )
}
