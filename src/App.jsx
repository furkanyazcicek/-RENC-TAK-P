import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import { homePathForRole } from './lib/navigation'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register';
import UpdatePassword from './pages/UpdatePassword';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ParentDashboard from './pages/ParentDashboard';
import TeacherDashboard from './pages/TeacherDashboard'
import StudentDetail from './pages/StudentDetail'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Analytics from './pages/Analytics'
import DailyTracking from './pages/DailyTracking'
import Homeworks from './pages/Homeworks'
import MockExams from './pages/MockExams'
import Questions from './pages/Questions'
import Messages from './pages/Messages'
import Library from './pages/Library'
import LibraryGateway from './pages/LibraryGateway'
import QuestionLibrary from './pages/QuestionLibrary'
import AICoach from './pages/AICoach'
import AISolve from './pages/AISolve'
import LessonReader from './components/lessons/LessonReader'
import LessonPreview from './pages/LessonPreview'
import TopicTestSolve from './pages/TopicTestSolve'
import TopicTestResult from './pages/TopicTestResult'
import TarihAtlasi from './pages/TarihAtlasi'
import PadisahGecidi from './pages/PadisahGecidi'
import { PageLoader } from './components/ui'

/** Route geçişlerinde gösterilen tam sayfa yükleyici (tasarım sisteminden). */
function FullPageLoader() {
  return <PageLoader />
}

function ProtectedRoute({ children, allow }) {
  const { session, role, loading } = useAuth()
  if (loading) return <FullPageLoader />
  if (!session) return <Navigate to="/login" replace />
  if (allow && !(Array.isArray(allow) ? allow.includes(role) : role === allow)) {
    // Rolün açılış sayfası tek kaynaktan gelir (src/lib/navigation.js)
    return <Navigate to={homePathForRole(role)} replace />
  }
  return children
}

// Eski paylaşılmış bağlantılar not/test içeriğini kaybetmeden yeni, ayrışmış
// adreslerine taşınır. Bu yalnızca geçiş uyumluluğudur; yeni bağlantılar
// doğrudan `/kutuphane/*` altında üretilir.
function LegacyNoteRedirect() {
  const { lessonId } = useParams()
  return <Navigate to={`/kutuphane/notlar/ders/${lessonId}`} replace />
}

function LegacyTestRedirect() {
  const { topicSlug, testId } = useParams()
  return <Navigate to={`/kutuphane/sorular/test/${topicSlug}/${testId}`} replace />
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
            <Navigate to={homePathForRole(role)} replace />
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
            <Navigate to={homePathForRole(role)} replace />
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
            <Navigate to={homePathForRole(role)} replace />
          ) : (
            <Register />
          )
        }
      />
      
      <Route path="/update-password" element={<UpdatePassword />} />

      {/* Gizlilik politikası HERKESE AÇIK olmalı — giriş arkasına
          koyulamaz. Google Play ve App Store inceleme ekipleri bu adrese
          hesapsız bakıyor ve erişemezlerse başvuru reddediliyor. */}
      <Route path="/gizlilik" element={<PrivacyPolicy />} />
      <Route path="/ders-notu-onizleme" element={<LessonPreview />} />
      <Route path="/tarih-atlasi" element={<TarihAtlasi />} />
      <Route path="/osmanli-padisahlari" element={<PadisahGecidi />} />
      
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
          artık Anasayfa'ya yönlendirilir. */}
      <Route path="/ogrenci" element={<Navigate to="/anasayfa" replace />} />

      {/* Profil — sekme listesinde değil, sağ üstteki isim düğmesinde.
          Her rol kendi profilini görebilir. */}
      <Route
        path="/profil"
        element={
          <ProtectedRoute>
            <Profile />
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

      {/* Sadece öğrenciye özel sekmeler */}
      <Route
        path="/anasayfa"
        element={
          <ProtectedRoute allow="student">
            <Home />
          </ProtectedRoute>
        }
      />
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
      {/* AI Soru Çözüm Merkezi — AI Koç gibi yalnızca öğrenci deneyimi.
          Sunucu tarafında da `role !== 'student'` reddedilir
          (bkz. api/_lib/auth.js). */}
      <Route
        path="/soru-coz"
        element={
          <ProtectedRoute allow="student">
            <AISolve />
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
        path="/kutuphane"
        element={
          <ProtectedRoute>
            <LibraryGateway />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kutuphane/notlar"
        element={<ProtectedRoute><Library /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/notlar/:examType"
        element={<ProtectedRoute><Library /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/notlar/:examType/:subjectSlug"
        element={<ProtectedRoute><Library /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/notlar/:examType/:subjectSlug/:topicSlug"
        element={<ProtectedRoute><Library /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/sorular"
        element={<ProtectedRoute><QuestionLibrary /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/sorular/:examType"
        element={<ProtectedRoute><QuestionLibrary /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/sorular/:examType/:subjectSlug"
        element={<ProtectedRoute><QuestionLibrary /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/sorular/:examType/:subjectSlug/:topicSlug"
        element={<ProtectedRoute><QuestionLibrary /></ProtectedRoute>}
      />
      <Route
        path="/kutuphane/notlar/ders/:lessonId"
        element={
          <ProtectedRoute allow={['student', 'teacher']}>
            <LessonReader />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kutuphane/sorular/test/:topicSlug/:testId"
        element={
          <ProtectedRoute allow={['student', 'teacher']}>
            <TopicTestSolve />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kutuphane/sorular/test/:topicSlug/:testId/result"
        element={
          <ProtectedRoute allow={['student', 'teacher']}>
            <TopicTestResult />
          </ProtectedRoute>
        }
      />
      {/* Eski yer imleri kütüphane seçimine düşer; eski not/test içerikleri
          yeni ayrılmış rotalara taşındı. */}
      <Route path="/notlar" element={<Navigate to="/kutuphane/notlar" replace />} />
      <Route path="/notlar/ders/:lessonId" element={<LegacyNoteRedirect />} />
      <Route path="/notlar/test/:topicSlug/:testId" element={<LegacyTestRedirect />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
