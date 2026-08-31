import { useCallback, useEffect, useState } from 'react'
import { Check, UserPlus, X } from 'lucide-react'
import { Alert, Avatar, Button, useToast } from '../ui'
import { Panel } from '../dashboard'
import {
  addStudent,
  dismissStudent,
  fetchUnlinkedStudents,
  isSchemaMissing,
} from '../../lib/liveLesson/api'

/**
 * YENİ KAYIT ONAY KUYRUĞU
 * -----------------------
 * Öğretmen paneli, canlı ders göçünden sonra yalnızca `teacher_students`
 * bağı olan öğrencileri listeliyor. Kayıt sayfasından gelen bir öğrenci
 * davet bağlantısı kullanmadıysa hiçbir bağı olmuyordu ve panelde HİÇ
 * görünmüyordu — öğretmen yeni öğrencisinin kaydolduğunu fark edemiyordu.
 *
 * Bu blok o boşluğu kapatır: bağsız öğrenciler "yeni kayıt" olarak burada
 * belirir, öğretmen tek dokunuşla listesine alır.
 *
 * ÖNEMLİ: Onaydan önce öğrencinin ÇALIŞMA VERİSİ AÇILMAZ. Burada yalnızca
 * ad, sınıf/hedef sınav, kayıt tarihi ve maskeli e-posta görünür.
 *
 * Kuyruk boşsa bileşen hiçbir şey çizmez — panelde kalıcı bir "0 bekliyor"
 * kutusu bırakmak, öğretmenin her gün baktığı ekranı gereksiz meşgul eder.
 */
export default function PendingStudentsPanel({ onChanged }) {
  const toast = useToast()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [hidden, setHidden] = useState(false)
  const [busyId, setBusyId] = useState(null)
  const [error, setError] = useState(null)

  const load = useCallback(async () => {
    try {
      setRows(await fetchUnlinkedStudents())
      setError(null)
    } catch (err) {
      // Göç henüz uygulanmadıysa bu blok sessizce yok sayılır; panelin
      // geri kalanı çalışmaya devam etsin.
      if (isSchemaMissing(err.cause ?? err)) setHidden(true)
      else setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  async function handle(action, row, successMessage) {
    setBusyId(row.student_id)
    setError(null)
    try {
      await action(row.student_id)
      setRows((list) => list.filter((r) => r.student_id !== row.student_id))
      toast.success(successMessage)
      onChanged?.()
    } catch (err) {
      setError(err.message)
    } finally {
      setBusyId(null)
    }
  }

  if (hidden) return null
  if (loading) return null
  if (!error && rows.length === 0) return null

  return (
    <Panel
      title="Yeni kayıtlar"
      description="Kaydolmuş ama listende olmayan öğrenciler. Onayladığında panelinde görünür."
      icon={UserPlus}
      iconTone="#F59E0B"
      padding={false}
    >
      {error && (
        <Alert tone="danger" className="mx-5 mb-4">
          {error}
        </Alert>
      )}

      <ul className="divide-y divide-line border-t border-line">
        {rows.map((row) => {
          const busy = busyId === row.student_id
          const meta = [
            row.grade ? `${row.grade}. sınıf` : null,
            row.target_exam && row.target_exam !== 'YOK' ? row.target_exam : null,
            row.registered_at
              ? `${new Date(row.registered_at).toLocaleDateString('tr-TR', {
                  day: 'numeric',
                  month: 'long',
                })} tarihinde kaydoldu`
              : null,
          ]
            .filter(Boolean)
            .join(' · ')

          return (
            <li
              key={row.student_id}
              className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex min-w-0 items-center gap-3">
                <Avatar name={row.student_name} size="sm" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-ink">{row.student_name}</p>
                  {meta && <p className="truncate text-xs text-ink/55">{meta}</p>}
                  {row.email_hint && (
                    <p className="truncate text-xs text-ink/45">{row.email_hint}</p>
                  )}
                </div>
              </div>

              <div className="flex shrink-0 gap-2">
                <Button
                  size="sm"
                  icon={Check}
                  loading={busy}
                  onClick={() => handle(addStudent, row, `${row.student_name} listene eklendi`)}
                >
                  Öğrencim
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  icon={X}
                  disabled={busy}
                  onClick={() =>
                    handle(dismissStudent, row, 'Kayıt listeden gizlendi')
                  }
                >
                  Bana ait değil
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    </Panel>
  )
}
