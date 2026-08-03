import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Login from './pages/Login'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import StudentDetail from './pages/StudentDetail'
import Analytics from './pages/Analytics'
import DailyTracking from './pages/DailyTracking'
import Homeworks from './pages/Homeworks'
import MockExams from './pages/MockExams'
import Questions from './pages/Questions'
import Messages from './pages/Messages'
import Library from './pages/Library'

function FullPageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-paper">
      <div className="h-10 w-10 rounded-full border-4 border-brand-200 border-t-brand-500 animate-spin" />
    </div>
  )
}

function ProtectedRoute({ children, allow }) {
  const { session, role, loading } = useAuth()
  if (loading) return <FullPageLoader />
  if (!session) return <Navigate to="/" replace />
  if (allow && role !== allow) {
    return <Navigate to={role === 'teacher' ? '/ogretmen' : '/ogrenci'} replace />
  }
  return children
}

export default function App() {
  const { session, role, loading } = useAuth()

  return (
    <Routes>
      <Route
        path="/"
        element={
          loading ? (
            <FullPageLoader />
          ) : session ? (
            <Navigate to={role === 'teacher' ? '/ogretmen' : '/ogrenci'} replace />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/ogrenci"
        element={
          <ProtectedRoute allow="student">
            <StudentDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ogretmen"
        element={
          <ProtectedRoute allow="teacher">
            <TeacherDashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ogretmen/ogrenci/:studentId"
        element={
          <ProtectedRoute allow="teacher">
            <StudentDetail />
          </ProtectedRoute>
        }
      />

      {/* Sadece öğrenciye özel yeni sekmeler */}
      <Route
        path="/analiz"
        element={
          <ProtectedRoute allow="student">
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/denemeler"
        element={
          <ProtectedRoute allow="student">
            <MockExams />
          </ProtectedRoute>
        }
      />
      <Route
        path="/gunluk-takip"
        element={
          <ProtectedRoute allow="student">
            <DailyTracking />
          </ProtectedRoute>
        }
      />

      {/* Her iki rolün de erişebildiği yeni sekmeler */}
      <Route
        path="/odevler"
        element={
          <ProtectedRoute>
            <Homeworks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sorular"
        element={
          <ProtectedRoute>
            <Questions />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mesajlar"
        element={
          <ProtectedRoute>
            <Messages />
          </ProtectedRoute>
        }
      />
      <Route
        path="/notlar"
        element={
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
