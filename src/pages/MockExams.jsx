import { useCallback, useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import { Plus } from 'lucide-react'
import Navbar from '../components/Navbar'
import MockExamForm from '../components/MockExamForm'
import MockExamList from '../components/MockExamList'
import MockExamTrendChart from '../components/MockExamTrendChart'
import AddExamForm from '../components/AddExamForm'
import BranchExamNetChart from '../components/BranchExamNetChart'
import BranchExamList from '../components/BranchExamList'
import Modal from '../components/Modal'

export default function MockExams() {
  const { user } = useAuth()
  const [exams, setExams] = useState([]) // genel denemeler (LGS/TYT/AYT/KPSS)
  const [branchExams, setBranchExams] = useState([]) // branş denemeleri
  const [loading, setLoading] = useState(true)
  const [branchModalOpen, setBranchModalOpen] = useState(false)

  const load = useCallback(async () => {
    if (!user) return
    const [mockRes, examsRes] = await Promise.all([
      supabase
        .from('mock_exams')
        .select('*, mock_exam_subjects(*)')
        .eq('student_id', user.id)
        .order('exam_date', { ascending: false }),
      supabase.from('exams').select('*').eq('student_id', user.id).order('exam_date', { ascending: false }),
    ])
    setExams(mockRes.data ?? [])
    setBranchExams(examsRes.data ?? [])
    setLoading(false)
  }, [user])

  useEffect(() => {
    load()
  }, [load])

  if (loading) {
    return (
      <div className="min-h-screen grid place-items-center bg-paper">
        <div className="h-8 w-8 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-paper">
      <Navbar title="LGS / YKS / KPSS Denemeleri" subtitle="Ders bazlı deneme sonuçların ve net gelişimin" />
      <main className="mx-auto max-w-4xl px-4 sm:px-6 py-6 flex flex-col gap-6">
        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5">
          <h3 className="font-display font-bold text-lg text-ink mb-2">Genel Deneme Net Gelişimi</h3>
          <MockExamTrendChart exams={exams} />
        </div>

        <MockExamForm onSubmitted={load} />

        <section>
          <h2 className="font-display font-bold text-lg text-ink mb-3">Geçmiş Denemeler</h2>
          <MockExamList exams={exams} onChanged={load} />
        </section>

        <section>
          <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
            <h2 className="font-display font-bold text-lg text-ink">Branş Denemeleri</h2>
            <button
              onClick={() => setBranchModalOpen(true)}
              className="focus-ring inline-flex items-center gap-1.5 rounded-xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-600 transition-colors"
            >
              <Plus className="h-4 w-4" />
              Branş Denemesi Ekle
            </button>
          </div>

          <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-5 mb-4">
            <h3 className="font-display font-bold text-lg text-ink mb-2">Ders Bazlı Net Grafiği</h3>
            <BranchExamNetChart exams={branchExams} />
          </div>

          <BranchExamList exams={branchExams} onChanged={load} />
        </section>
      </main>

      <Modal open={branchModalOpen} onClose={() => setBranchModalOpen(false)} title="Branş Denemesi Ekle">
        <AddExamForm
          onAdded={() => {
            load()
            setBranchModalOpen(false)
          }}
        />
      </Modal>
    </div>
  )
}
