/** Ücretsiz rehber için gereken en dar öğrenci kayıtları. */
import { toKey } from '../../src/lib/insights.js'

const DAY_MS = 24 * 60 * 60 * 1000
const MAX_LOGS = 1000
const MAX_HOMEWORKS = 500
const MAX_TASKS = 500

export async function fetchFreeCoachData(supabase, studentId) {
  const logsCutoff = toKey(new Date(Date.now() - 89 * DAY_MS))
  const tasksCutoff = toKey(new Date(Date.now() - 7 * DAY_MS))

  const [logs, mockExams, homeworks, tasks] = await Promise.all([
    supabase.from('daily_logs')
      .select('study_date,topic,duration_minutes,correct,incorrect,empty')
      .eq('student_id', studentId)
      .gte('study_date', logsCutoff)
      .order('study_date', { ascending: false })
      .limit(MAX_LOGS),
    supabase.from('mock_exams')
      .select('id,exam_type,exam_name,exam_date,mock_exam_subjects(subject,correct,incorrect,empty,net)')
      .eq('student_id', studentId)
      .order('exam_date', { ascending: false })
      .limit(10),
    supabase.from('homeworks')
      .select('id,title,due_date,status,created_at')
      .eq('student_id', studentId)
      .order('due_date', { ascending: true, nullsFirst: false })
      .limit(MAX_HOMEWORKS),
    supabase.from('ai_study_tasks')
      .select('id,subject,topic,activity,planned_date,duration_minutes,status')
      .eq('student_id', studentId)
      .gte('planned_date', tasksCutoff)
      .order('planned_date', { ascending: true })
      .limit(MAX_TASKS),
  ])

  return {
    logs: logs.data ?? [],
    mockExams: mockExams.data ?? [],
    homeworks: homeworks.data ?? [],
    tasks: tasks.data ?? [],
    branchExams: [],
    questions: [],
    memory: [],
    solveSessions: [],
    // Kesilmiş bir listeyi eksiksiz kişisel istatistik gibi sunmayız.
    degraded: [logs, mockExams, homeworks, tasks].some((result) => result.error)
      || (logs.data?.length ?? 0) >= MAX_LOGS
      || (homeworks.data?.length ?? 0) >= MAX_HOMEWORKS
      || (tasks.data?.length ?? 0) >= MAX_TASKS,
  }
}
