import { useEffect, useState } from 'react'
import { fetchMyStudents } from '../lib/liveLesson/api'
import { Alert, Field, Select } from './ui'
import QuestionForm from './QuestionForm'
import { isProductCapture } from '../lib/productCapture'

export default function TeacherQuestionForm({ onSubmitted }) {
  const [students, setStudents] = useState([])
  const [studentId, setStudentId] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    if (isProductCapture()) {
      const fixture = [{ student_id: '44000000-0000-4000-8000-000000000001', student_name: 'Deniz Kaya' }]
      setStudents(fixture); setStudentId(fixture[0].student_id)
      return () => { active = false }
    }
    fetchMyStudents().then((rows) => {
      if (!active) return
      setStudents(rows)
      setStudentId(rows[0]?.student_id ?? '')
    }).catch(() => active && setError('Öğrenci listesi alınamadı.'))
    return () => { active = false }
  }, [])

  return (
    <div className="flex flex-col gap-4">
      {error && <Alert tone="danger">{error}</Alert>}
      <Field label="Öğrenci" required>
        {({ id }) => (
          <Select id={id} value={studentId} onChange={(event) => setStudentId(event.target.value)} required>
            <option value="">Öğrenci seç</option>
            {students.map((student) => <option key={student.student_id} value={student.student_id}>{student.student_name}</option>)}
          </Select>
        )}
      </Field>
      <QuestionForm bare teacherMode studentId={studentId} onSubmitted={onSubmitted} />
    </div>
  )
}
