import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { PageLoader } from '../../components/ui'
import ExperienceAnalytics from './ExperienceAnalytics'
import ExperienceDashboard from './ExperienceDashboard'
import { ExperienceQuestionLibrary, ExperienceTopicLibrary } from './ExperienceLibraries'
import ExperienceLesson from './ExperienceLesson'
import ExperienceShell from './ExperienceShell'
import ExperienceTest from './ExperienceTest'
import './experience.css'

const KimyaAtlasi = lazy(() => import('../KimyaAtlasi'))

export default function ExperienceRoutes() {
  return (
    <Routes>
      <Route element={<ExperienceShell />}>
        <Route index element={<ExperienceDashboard />} />
        <Route path="analiz" element={<ExperienceAnalytics />} />
        <Route path="konu-kutuphanesi" element={<ExperienceTopicLibrary />} />
        <Route path="soru-kutuphanesi" element={<ExperienceQuestionLibrary />} />
        <Route path="konu/:contentId" element={<ExperienceLesson />} />
        <Route path="test/:contentId" element={<ExperienceTest />} />
      </Route>
      <Route
        path="kimya-atlasi/*"
        element={
          <Suspense fallback={<PageLoader label="Kimya Atlası açılıyor…" />}>
            <KimyaAtlasi demo returnTo="/deneyim" />
          </Suspense>
        }
      />
      <Route path="*" element={<Navigate to="/deneyim" replace />} />
    </Routes>
  )
}
