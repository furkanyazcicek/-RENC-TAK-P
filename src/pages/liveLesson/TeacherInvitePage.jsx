import { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CheckCircle2, GraduationCap, Loader2, LogIn, ShieldAlert, XCircle } from 'lucide-react'
import { Alert, Button, Card, CardBody, EmptyState, Logo } from '../../components/ui'
import AuroraBackground from '../../components/ui/AuroraBackground'
import { useLessonAuth } from '../../lib/liveLesson/preview'
import { isSchemaMissing, previewInvite, respondInvite } from '../../lib/liveLesson/api'
import SchemaMissingNotice from '../../components/liveLesson/SchemaMissingNotice'

/**
 * Öğretmen davetinin kabul ekranı — `/davet/ogretmen/:token`
 *
 * Ekran giriş yapılmadan da AÇILIR ama daveti kabul etmek için öğrenci
 * hesabı gerekir; aksi hâlde "kim kabul etti" sorusunun yanıtı olmaz.
 * Giriş yapılmamışsa bağlantı adreste korunarak giriş ekranına yönlendirilir.
 */
export default function TeacherInvitePage() {
  const { token } = useParams()
  const { session, role, loading: authLoading } = useLessonAuth()
  const navigate = useNavigate()

  const [state, setState] = useState({ loading: true, data: null, error: null })
  const [responding, setResponding] = useState(false)
  const [result, setResult] = useState(null)
  const [schemaMissing, setSchemaMissing] = useState(false)

  const load = useCallback(async () => {
    if (!session) return
    setState({ loading: true, data: null, error: null })
    try {
      const preview = await previewInvite(token)
      setState({ loading: false, data: preview, error: null })
    } catch (err) {
      if (isSchemaMissing(err.cause ?? err)) setSchemaMissing(true)
      setState({ loading: false, data: null, error: err.message })
    }
  }, [token, session])

  useEffect(() => {
    if (!authLoading && session) load()
    else if (!authLoading) setState({ loading: false, data: null, error: null })
  }, [authLoading, session, load])

  async function respond(accept) {
    setResponding(true)
    try {
      const outcome = await respondInvite(token, accept)
      setResult(outcome)
      if (outcome?.ok && accept) {
        window.setTimeout(() => navigate('/canli-dersler'), 1600)
      }
    } catch (err) {
      setState((s) => ({ ...s, error: err.message }))
    } finally {
      setResponding(false)
    }
  }

  const content = () => {
    if (authLoading) {
      return (
        <p className="flex items-center gap-2 text-sm text-ink/60">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Yükleniyor…
        </p>
      )
    }

    if (!session) {
      return (
        <EmptyState
          icon={LogIn}
          title="Daveti görmek için giriş yap"
          description="Bu davet bağlantısını kullanabilmek için öğrenci hesabınla giriş yapman gerekiyor. Giriş yaptıktan sonra bu bağlantıya tekrar dokun."
          action={
            <div className="flex flex-wrap justify-center gap-2">
              <Button as={Link} to="/login">
                Giriş Yap
              </Button>
              <Button as={Link} to="/register" variant="secondary">
                Hesap Oluştur
              </Button>
            </div>
          }
        />
      )
    }

    if (schemaMissing) return <SchemaMissingNotice />

    if (role !== 'student') {
      return (
        <EmptyState
          icon={ShieldAlert}
          title="Bu davet öğrenciler için"
          description="Öğretmen daveti yalnızca öğrenci hesabıyla kabul edilebilir. Öğrenci hesabınla giriş yapıp tekrar deneyin."
        />
      )
    }

    if (result) {
      if (result.ok && result.code === 'active') {
        return (
          <EmptyState
            icon={CheckCircle2}
            title={`${result.teacher_name} artık öğretmenin`}
            description="Canlı derslerin, ödevlerin ve mesajların bu öğretmenle paylaşılacak. Derslerine yönlendiriliyorsun…"
            action={
              <Button as={Link} to="/canli-dersler">
                Canlı Derslerim
              </Button>
            }
          />
        )
      }
      if (result.ok) {
        return (
          <EmptyState
            icon={XCircle}
            title="Davet reddedildi"
            description="Bu öğretmenle bağlantı kurulmadı. Verilerine erişimi olmayacak."
            action={
              <Button as={Link} to="/anasayfa">
                Anasayfaya dön
              </Button>
            }
          />
        )
      }
      return (
        <Alert tone="danger" title="Davet kullanılamadı">
          {result.message}
        </Alert>
      )
    }

    if (state.loading) {
      return (
        <p className="flex items-center gap-2 text-sm text-ink/60">
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          Davet kontrol ediliyor…
        </p>
      )
    }

    if (state.error) {
      return (
        <Alert tone="danger" title="Davet okunamadı">
          {state.error}
        </Alert>
      )
    }

    const preview = state.data
    if (!preview?.ok) {
      return (
        <EmptyState
          icon={ShieldAlert}
          title="Bu davet kullanılamıyor"
          description={preview?.message ?? 'Davet bağlantısı geçersiz. Öğretmeninden yeni bir bağlantı iste.'}
          action={
            <Button as={Link} to="/anasayfa">
              Anasayfaya dön
            </Button>
          }
        />
      )
    }

    if (preview.already_linked) {
      return (
        <EmptyState
          icon={CheckCircle2}
          title={`${preview.teacher_name} zaten öğretmenin`}
          description="Bu öğretmenle bağlantın hâlihazırda aktif. Canlı derslerine bakabilirsin."
          action={
            <Button as={Link} to="/canli-dersler">
              Canlı Derslerim
            </Button>
          }
        />
      )
    }

    return (
      <div className="text-center">
        <span className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-2xl bg-brand-500/10 text-brand-600 ring-1 ring-brand-500/15">
          <GraduationCap className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h1 className="font-display text-xl font-bold text-ink">
          {preview.teacher_name} seni öğrencisi olarak ekliyor
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-ink/65">
          Kabul edersen bu öğretmen sana canlı ders planlayabilir, ödev verebilir ve çalışma
          kayıtlarınla deneme sonuçlarını görebilir. İstediğin zaman bağlantıyı sonlandırabilirsin.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button size="lg" loading={responding} onClick={() => respond(true)}>
            Kabul Et
          </Button>
          <Button variant="secondary" loading={responding} onClick={() => respond(false)}>
            Reddet
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative grid min-h-screen place-items-center p-4">
      <AuroraBackground variant="page" />
      <div className="relative z-10 w-full max-w-lg">
        <div className="mb-5 flex justify-center">
          <Logo />
        </div>
        <Card>
          <CardBody padding="lg">{content()}</CardBody>
        </Card>
      </div>
    </div>
  )
}
