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
import {
  getPushPermissionState,
  isPushSupported,
  subscribeToPush,
  unsubscribeFromPush,
} from '../lib/push'
import { ROLE_LABELS, ROLE_TONES } from '../lib/navigation'
import { formatMinutes } from '../lib/insights'
import {
  defaultExamYear,
  gradeLabel,
  isMissingColumnError,
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

  const [fullName, setFullName] = useState('')
  const [savingName, setSavingName] = useState(false)

  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')
  const [savingPassword, setSavingPassword] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const [permission, setPermission] = useState('default')
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
    getPushPermissionState().then(setPermission)
  }, [])

  const loadStats = useCallback(async () => {
    if (!user || !isStudent) return
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
      exam_profile_updated_at: new Date().toISOString(),
    }

    const { error } = await supabase.from('profiles').update(payload).eq('id', user.id)
    setSavingExam(false)

    if (error) {
      setExamError(isMissingColumnError(error) ? MIGRATION_HINT : error.message)
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
      if (permission === 'granted') {
        await unsubscribeFromPush()
        toast.success('Bildirimler kapatıldı', {
          description: 'Tarayıcı iznini tamamen kaldırmak için site ayarlarını kullanabilirsin.',
        })
        setPermission(await getPushPermissionState())
      } else {
        await subscribeToPush(user.id)
        setPermission('granted')
        toast.success('Bildirimler açıldı')
      }
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
    <AppShell title="Profilim" subtitle="Hesap bilgilerin ve tercihlerin" width="narrow">
      <DashboardHero
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
        description="Yeni ödev, mesaj ve soru yanıtı için tarayıcı bildirimi"
        icon={Bell}
        iconTone="#D97706"
        footnote="Bildirimler cihaz bazlıdır — kullandığın her tarayıcıda ayrı açman gerekir."
      >
        {!isPushSupported() ? (
          <Alert tone="info">Bu tarayıcı push bildirimlerini desteklemiyor.</Alert>
        ) : permission === 'denied' ? (
          <Alert tone="warning">
            Bildirimler tarayıcı ayarlarından engellenmiş. Açmak için adres çubuğundaki kilit
            simgesinden bu siteye bildirim izni ver.
          </Alert>
        ) : (
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span
                className={
                  permission === 'granted'
                    ? 'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-success-500/10 text-success-600'
                    : 'grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-600'
                }
              >
                {permission === 'granted' ? (
                  <BellRing className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                ) : (
                  <Bell className="h-5 w-5" strokeWidth={2.1} aria-hidden="true" />
                )}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink">
                  {permission === 'granted' ? 'Bildirimler açık' : 'Bildirimler kapalı'}
                </p>
                <p className="text-xs text-ink/60">
                  {permission === 'granted'
                    ? 'Bu cihazda bildirim alıyorsun.'
                    : 'Açarsan ödev ve mesajlardan anında haberin olur.'}
                </p>
              </div>
            </div>
            <Button
              variant={permission === 'granted' ? 'secondary' : 'primary'}
              icon={permission === 'granted' ? BellOff : Bell}
              loading={pushBusy}
              onClick={handleTogglePush}
            >
              {permission === 'granted' ? 'Bildirimleri kapat' : 'Bildirimleri aç'}
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
