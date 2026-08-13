import { Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register';
import UpdatePassword from './pages/UpdatePassword';
import ParentDashboard from './pages/ParentDashboard';
import TeacherDashboard from './pages/TeacherDashboard'
import StudentDetail from './pages/StudentDetail'
import Analytics from './pages/Analytics'
import DailyTracking from './pages/DailyTracking'
import Homeworks from './pages/Homeworks'
import MockExams from './pages/MockExams'
import Questions from './pages/Questions'
import Messages from './pages/Messages'
import Library from './pages/Library'
import AICoach from './pages/AICoach'
import { PageLoader } from './components/ui'

/** Route geçişlerinde gösterilen tam sayfa yükleyici (tasarım sisteminden). */
function FullPageLoader() {
  return <PageLoader />
}

function ProtectedRoute({ children, allow }) {
  const { session, role, loading } = useAuth()
  if (loading) return <FullPageLoader />
  if (!session) return <Navigate to="/login" replace />
  if (allow && role !== allow) {
    // Veli rolü eklendi
    return <Navigate to={role === 'teacher' ? '/ogretmen' : role === 'parent' ? '/veli' : '/analiz'} replace />
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
            // Veli rolü eklendi
            <Navigate to={role === 'teacher' ? '/ogretmen' : role === 'parent' ? '/veli' : '/analiz'} replace />
          ) : (
            <LandingPage />
          )
        }
      />
      <Route
        path="/login"
        element={
          loading ? (
            <FullPageLoader />
          ) : session ? (
            // Veli rolü eklendi
            <Navigate to={role === 'teacher' ? '/ogretmen' : role === 'parent' ? '/veli' : '/analiz'} replace />
          ) : (
            <Login />
          )
        }
      />
      
      {/* YENİ EKLENEN SAYFALAR BAŞLANGIÇ */}
      <Route
        path="/register"
        element={
          loading ? (
            <FullPageLoader />
          ) : session ? (
            <Navigate to={role === 'teacher' ? '/ogretmen' : role === 'parent' ? '/veli' : '/analiz'} replace />
          ) : (
            <Register />
          )
        }
      />
      
      <Route path="/update-password" element={<UpdatePassword />} />
      
      <Route
        path="/veli"
        element={
          <ProtectedRoute allow="parent">
            <ParentDashboard />
          </ProtectedRoute>
        }
      />
      {/* YENİ EKLENEN SAYFALAR BİTİŞ */}

      {/* Eski "Genel Durum" sayfası kaldırıldı — eski bağlantı/yer imleri
          artık doğrudan Profil & Analiz sayfasına yönlendirilir. */}
      <Route path="/ogrenci" element={<Navigate to="/analiz" replace />} />
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
      {/* AI Koç — ilk sürümde yalnızca öğrenci deneyimi (sunucu tarafında da
          `role !== 'student'` reddedilir, bkz. api/_lib/auth.js) */}
      <Route
        path="/ai-koc"
        element={
          <ProtectedRoute allow="student">
            <AICoach />
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