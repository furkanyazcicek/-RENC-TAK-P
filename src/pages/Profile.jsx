import { useCallback, useEffect, useState } from 'react'
import {
  Bell,
  BellOff,
  BellRing,
  CalendarDays,
  Clock,
  LogOut,
  Lock,
  Mail,
  ShieldCheck,
  Target,
  User,
} from 'lucide-react'

import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import useAcademicActivity from '../hooks/useAcademicActivity'
import { academicStatusMessage } from '../lib/learning/academicActivity/client'
import { isProductCapture } from '../lib/productCapture'
import {
  getPushStatus,
  isPushSupported,
  subscribeToPush,
  unsubscribeFromPush,
} from '../lib/push'
import { ROLE_LABELS, ROLE_TONES } from '../lib/navigation'
import { formatMinutes } from '../lib/insights'
import {
  defaultExamYear,
  gradeLabel,
  MIGRATION_HINT,
  resolveExamCountdown,
} from '../lib/examProfile'
import ExamProfileFields from '../components/ExamProfileFields'
import StudentParentLinkPanel from '../components/parent/StudentParentLinkPanel'
import { AppShell, Alert, Badge, Button, Field, Input, useToast } from '../components/ui'
import { CountdownRing, DashboardHero, MetricTile, Panel } from '../components/dashboard'

/**
 * Profil — hesaba ait her şey tek sayfada.
 *
 * Gezinme çubuğunda YER ALMAZ; sağ üstteki isim düğmesinden açılır
 * (bkz. components/ProfileMenu.jsx). Sekmeler günlük işe aittir — ad,
 * şifre ve bildirim ayarı günde bir kez bile açılmaz, orada yer kaplamasın.
 *
 * Rolden bağımsız çalışır; yalnızca "Hesap özeti" bölümü öğrenciye özeldir
 * (öğretmen/velinin kendi çalışma kaydı yoktur).
 */
export default function Profile() {
  const { user, profile, role, refreshProfile, signOut } = useAuth()
  const toast = useToast()
  const academic = useAcademicActivity()

  const [fullName, setFullName] = useState('')
  const [savingName, setSavingName] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const [pushStatus, setPushStatus] = useState({
    supported: isPushSupported(),
    permission: 'default',
    subscribed: false,
  })
  const [pushBusy, setPushBusy] = useState(false)

  const [stats, setStats] = useState(null)

  const [exam, setExam] = useState({})
  const [savingExam, setSavingExam] = useState(false)
  const [examError, setExamError] = useState('')

  const isStudent = role === 'student'

  useEffect(() => {
    setFullName(profile?.full_name ?? '')
  }, [profile?.full_name])

  // Sınav alanları profil yüklendiğinde forma kopyalanır. `exam_date`
  // <input type="date"> için 'YYYY-MM-DD' olmalı; Supabase zaten bu
  // biçimde döndürür ama null gelebilir.
  useEffect(() => {
    setExam({
      grade: profile?.grade ?? null,
      target_exam: profile?.target_exam ?? '',
      is_exam_year: profile?.is_exam_year ?? null,
      exam_year: profile?.exam_year ?? null,
      exam_date: profile?.exam_date ?? '',
    })
  }, [
    profile?.grade,
    profile?.target_exam,
    profile?.is_exam_year,
    profile?.exam_year,
    profile?.exam_date,
  ])

  useEffect(() => {
    getPushStatus().then(setPushStatus).catch(() => {})
  }, [])

  const loadStats = useCallback(async () => {
    if (!user || !isStudent) return
    if (isProductCapture()) {
      setStats({ logCount: 12, minutes: 480, examCount: 4 })
      return
    }
    const [logsRes, mockRes, branchRes] = await Promise.all([
      supabase.from('daily_logs').select('duration_minutes').eq('student_id', user.id),
      supabase
        .from('mock_exams')
        .select('id', { count: 'exact', head: true })
        .eq('student_id', user.id),
      supabase.from('exams').select('id', { count: 'exact', head: true }).eq('student_id', user.id),
    ])
    const logs = logsRes.data ?? []
    setStats({
      logCount: logs.length,
      minutes: logs.reduce((sum, l) => sum + (l.duration_minutes || 0), 0),
      examCount: (mockRes.count ?? 0) + (branchRes.count ?? 0),
    })
  }, [user, isStudent])

  useEffect(() => {
    loadStats()
  }, [loadStats])

  /* ---- İşlemler ---- */

  async function handleSaveName(e) {
    e.preventDefault()
    const trimmed = fullName.trim()
    if (!trimmed) {
      toast.error('Ad soyad boş bırakılamaz')
      return
    }
    setSavingName(true)
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: trimmed })
      .eq('id', user.id)
    setSavingName(false)

    if (error) {
      toast.error('Ad soyad güncellenemedi', { description: error.message })
      return
    }
    await refreshProfile()
    toast.success('Ad soyad güncellendi')
  }

  async function handleSaveExam(e) {
    e.preventDefault()
    setExamError('')
    setSavingExam(true)

    const noExam = exam.target_exam === 'YOK'
    const payload = {
      grade: exam.grade || null,
      target_exam: exam.target_exam || null,
      is_exam_year: exam.is_exam_year,
      exam_year: noExam
        ? null
        : (exam.exam_year ??
          defaultExamYear(exam.grade, exam.target_exam, exam.is_exam_year)),
      exam_date: noExam ? null : exam.exam_date || null,
    }

    const response = await academic.perform('profile_goal', payload)
    setSavingExam(false)

    if (response.status !== 'saved') {
      setExamError(response.status === 'unavailable' ? MIGRATION_HINT : academicStatusMessage(response.status))
      return
    }
    await refreshProfile()
    toast.success('Sınav bilgin güncellendi')
  }

  async function handleChangePassword(e) {
    e.preventDefault()
    setPasswordError('')

    if (password.length < 6) {
      setPasswordError('Şifre en az 6 karakter olmalı.')
      return
    }
    if (password !== passwordAgain) {
      setPasswordError('İki şifre birbirinden farklı.')
      return
    }

    setSavingPassword(true)
    const { error } = await supabase.auth.updateUser({ password })
    setSavingPassword(false)

    if (error) {
      setPasswordError('Şifre güncellenemedi: ' + error.message)
      return
    }
    setPassword('')
    setPasswordAgain('')
    toast.success('Şifren güncellendi')
  }

  async function handleTogglePush() {
    setPushBusy(true)
    try {
      if (pushStatus.subscribed) {
        await unsubscribeFromPush()
        toast.success('Bildirimler kapatıldı', {
          description: 'Tarayıcı iznini tamamen kaldırmak için site ayarlarını kullanabilirsin.',
        })
      } else {
        await subscribeToPush(user.id)
        toast.success('Bildirimler açıldı')
      }
      setPushStatus(await getPushStatus())
    } catch (err) {
      toast.error('Bildirim ayarı değiştirilemedi', { description: err.message })
    } finally {
      setPushBusy(false)
    }
  }

  const countdown = resolveExamCountdown(profile)

  const memberSince = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : null

  const avatarInitials =
    profile?.full_name
      ?.split(' ')
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toLocaleUpperCase('tr-TR') || '?'

  return (
    <AppShell title="Profilim" subtitle="Hesap bilgilerin ve tercihlerin" width="narrow" showPageIntro={false}>
      <DashboardHero
        asPageHeader
        eyebrow="Profil"
        title={profile?.full_name || 'Profilim'}
        subtitle={user?.email}
        avatar={avatarInitials}
        badge={{ label: ROLE_LABELS[role] ?? 'Öğrenci', tone: 'glass' }}
        highlights={memberSince ? [{ label: 'Üyelik', value: memberSince }] : []}
      />

      {/* ---------- HESAP ÖZETİ (yalnızca öğrenci) ---------- */}
      {isStudent && stats && (
        <div className="grid grid-cols-3 gap-4">
          <MetricTile
            label="Toplam Çalışma"
            value={formatMinutes(stats.minutes)}
            icon={Clock}
            tone="brand"
          />
          <MetricTile
            label="Çalışma Kaydı"
            value={stats.logCount}
            hint="günlük kayıt"
            icon={CalendarDays}
            tone="info"
          />
          <MetricTile
            label="Deneme"
            value={stats.examCount}
            hint="branş + genel"
            icon={Target}
            tone="success"
          />
        </div>
      )}

      {/* ---------- HESAP BİLGİLERİ ---------- */}
      <Panel
        title="Hesap Bilgileri"
        description="Adın uygulamanın her yerinde bu şekilde görünür"
        icon={User}
      >
        <form className="flex flex-col gap-4" onSubmit={handleSaveName}>
          <Field label="Ad Soyad" required>
            {({ id }) => (
              <Input
                id={id}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Ad Soyad"
                autoComplete="name"
                maxLength={80}
              />
            )}
          </Field>

          <Field label="E-posta" hint="E-posta adresi değiştirilemez.">
            {({ id }) => (
              <Input id={id} value={user?.email ?? ''} icon={Mail} readOnly disabled />
            )}
          </Field>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-ink/60">Rol:</span>
              <Badge tone={ROLE_TONES[role] ?? 'brand'} size="sm" dot>
                {ROLE_LABELS[role] ?? 'Öğrenci'}
              </Badge>
            </div>
            {memberSince && (
              <span className="text-xs text-ink/55">Üyelik başlangıcı: {memberSince}</span>
            )}
          </div>

          <div>
            <Button
              type="submit"
              loading={savingName}
              disabled={savingName || fullName.trim() === (profile?.full_name ?? '')}
            >
              Değişiklikleri kaydet
            </Button>
          </div>
        </form>
      </Panel>

      {/* ---------- SINAV BİLGİLERİ (yalnızca öğrenci) ---------- */}
      {isStudent && (
        <Panel
          title="Sınav Bilgilerin"
          description="Anasayfandaki geri sayım ve seviyene uygun öneriler bu bilgiden çıkar"
          icon={Target}
          iconTone="#059669"
          footnote="Sınav tarihini boş bırakırsan uygulama son yılların takvimine göre tahmini bir tarih kullanır ve bunu geri sayımın altında belirtir."
        >
          <form className="flex flex-col gap-4" onSubmit={handleSaveExam}>
            {examError && <Alert tone="danger">{examError}</Alert>}

            {countdown && (
              <div className="flex flex-wrap items-center gap-5 rounded-card border border-line bg-surface-muted p-4">
                <CountdownRing countdown={countdown} size={124} stroke={10} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-ink">
                    {gradeLabel(profile?.grade) ?? 'Sınıf belirtilmedi'}
                    {profile?.is_exam_year === false ? ' · ara sınıf' : ''}
                    {profile?.is_exam_year === true ? ' · sınav senesi' : ''}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink/60">
                    Aşağıdaki alanları değiştirdiğinde geri sayım anında güncellenir.
                  </p>
                </div>
              </div>
            )}

            <ExamProfileFields value={exam} onChange={setExam} showExamDate />

            <div>
              <Button type="submit" loading={savingExam} disabled={savingExam}>
                Sınav bilgisini kaydet
              </Button>
            </div>
          </form>
        </Panel>
      )}

      {/* ---------- VELİ DOĞRULAMA (yalnızca öğrenci) ----------
          Veli–öğrenci eşleşmesinin başladığı yer burasıdır; veli kendi
          kayıt ekranından öğrenci seçemez. */}
      {isStudent && <StudentParentLinkPanel />}

      {/* ---------- BİLDİRİMLER ---------- */}
      <Panel
        title="Bildirimler"
        description={
          isStudent
            ? 'Yeni ödev, mesaj ve soru yanıtı için cihaz bildirimi'
            : role === 'teacher'
              ? 'Öğrencilerin mesaj, çalışma, deneme ve tamamlama kayıtları için cihaz bildirimi'
              : 'Hesabınla ilgili yeni gelişmeler için cihaz bildirimi'
        }
        icon={Bell}
        iconTone="#D97706"
        footnote="Bildirimler cihaz bazlıdır. iPad veya iPhone'da siteyi önce Safari'deki Paylaş menüsünden Ana Ekran'a ekle, sonra bu ekrandan aç."
      >
        {!pushStatus.supported ? (
          <Alert tone="info">Bu tarayıcı push bildirimlerini desteklemiyor.</Alert>
        ) : pushStatus.permission === 'denied' ? (
          <Alert tone="warning">
            Bildirimler tarayıcı ayarlarından engellenmiş. Açmak için adres çubuğundaki kilit
            simgesinden bu siteye bildirim izni ver.
          </Alert>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={
                  pushStatus.subscribed
                    ? 'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-success-500/10 text-success-600'
                    : 'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600'
                }
              >
                {pushStatus.subscribed ? (
                  <BellRing className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                ) : (
                  <Bell className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                )}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {pushStatus.subscribed ? 'Bildirimler açık' : 'Bildirimler kapalı'}
                </p>
                <p className="text-xs text-ink/60">
                  {pushStatus.subscribed
                    ? 'Bu cihazda bildirim alıyorsun.'
                    : role === 'teacher'
                      ? 'Açarsan öğrenci hareketlerinden anında haberin olur.'
                      : 'Açarsan mesaj, yeni ödev ve soru çözümlerinden anında haberin olur.'}
                </p>
              </div>
            </div>
            <Button
              variant={pushStatus.subscribed ? 'secondary' : 'primary'}
              icon={pushStatus.subscribed ? BellOff : Bell}
              loading={pushBusy}
              onClick={handleTogglePush}
            >
              {pushStatus.subscribed ? 'Bildirimleri kapat' : 'Bildirimleri aç'}
            </Button>
          </div>
        )}
      </Panel>

      {/* ---------- GÜVENLİK ---------- */}
      <Panel
        title="Şifre Değiştir"
        description="Yeni şifreni belirle — bir sonraki girişte bunu kullanacaksın"
        icon={ShieldCheck}
        iconTone="#059669"
      >
        <form className="flex flex-col gap-4" onSubmit={handleChangePassword}>
          {passwordError && <Alert tone="danger">{passwordError}</Alert>}

          <Field label="Yeni Şifre" hint="En az 6 karakter" required>
            {({ id }) => (
              <Input
                id={id}
                type="password"
                icon={Lock}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
              />
            )}
          </Field>

          <Field label="Yeni Şifre (tekrar)" required>
            {({ id }) => (
              <Input
                id={id}
                type="password"
                icon={Lock}
                autoComplete="new-password"
                value={passwordAgain}
                onChange={(e) => setPasswordAgain(e.target.value)}
                placeholder="••••••"
              />
            )}
          </Field>

          <div>
            <Button
              type="submit"
              loading={savingPassword}
              disabled={savingPassword || !password || !passwordAgain}
            >
              Şifreyi güncelle
            </Button>
          </div>
        </form>
      </Panel>

      {/* ---------- OTURUM ---------- */}
      <Panel title="Oturum" description="Bu cihazdaki oturumunu kapat" icon={LogOut} iconTone="#E11D48">
        <Button variant="danger" icon={LogOut} onClick={signOut}>
          Çıkış yap
        </Button>
      </Panel>
    </AppShell>
  )
}
