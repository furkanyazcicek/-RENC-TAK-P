import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const { signIn, signUp } = useAuth()
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student')
  const [error, setError] = useState(null)
  const [info, setInfo] = useState(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    setInfo(null)
    setLoading(true)

    if (mode === 'signin') {
      const { error } = await signIn(email, password)
      if (error) setError(error.message)
    } else {
      const { error } = await signUp({ email, password, fullName, role })
      if (error) {
        setError(error.message)
      } else {
        setInfo('Hesabın oluşturuldu! E-postana gelen doğrulama bağlantısına tıkladıktan sonra giriş yapabilirsin.')
        setMode('signin')
      }
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-paper px-4">
      <div className="w-full max-w-md">
        <Link to="/" className="focus-ring flex items-center gap-1.5 text-sm font-medium text-ink/40 hover:text-brand-600 transition-colors mb-6">
          <span aria-hidden>←</span> Anasayfaya dön
        </Link>

        <div className="text-center mb-8">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 grid place-items-center font-display font-bold text-white text-lg shadow-elevated">
            D
          </div>
          <h1 className="mt-4 text-2xl font-display font-bold tracking-tight text-ink">Dr. Koç</h1>
          <p className="text-sm text-ink/50 mt-1">Öğrenci &amp; Öğretmen Girişi</p>
        </div>

        <div className="rounded-xl2 bg-white shadow-card border border-ink/5 p-6">
          <div className="flex bg-paper rounded-xl p-1 mb-6">
            <button
              type="button"
              onClick={() => setMode('signin')}
              className={`focus-ring flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                mode === 'signin' ? 'bg-white shadow-sm text-brand-600' : 'text-ink/40'
              }`}
            >
              Giriş Yap
            </button>
            <button
              type="button"
              onClick={() => setMode('signup')}
              className={`focus-ring flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                mode === 'signup' ? 'bg-white shadow-sm text-brand-600' : 'text-ink/40'
              }`}
            >
              Kayıt Ol
            </button>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {mode === 'signup' && (
              <>
                <div>
                  <label className="text-xs font-semibold text-ink/50">Ad Soyad</label>
                  <input
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-4 py-2.5 text-sm"
                    placeholder="Ayşe Yılmaz"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-ink/50">Rolün</label>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setRole('student')}
                      className={`focus-ring rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                        role === 'student'
                          ? 'border-brand-500 bg-brand-50 text-brand-700'
                          : 'border-brand-100 text-ink/50'
                      }`}
                    >
                      Öğrenci
                    </button>
                    <button
                      type="button"
                      onClick={() => setRole('teacher')}
                      className={`focus-ring rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                        role === 'teacher'
                          ? 'border-brand-500 bg-brand-50 text-brand-700'
                          : 'border-brand-100 text-ink/50'
                      }`}
                    >
                      Öğretmen
                    </button>
                  </div>
                </div>
              </>
            )}
            <div>
              <label className="text-xs font-semibold text-ink/50">E-posta</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-4 py-2.5 text-sm"
                placeholder="ornek@eposta.com"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-ink/50">Şifre</label>
              <input
                required
                type="password"
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="focus-ring mt-1 w-full rounded-xl border border-brand-100 px-4 py-2.5 text-sm"
                placeholder="En az 6 karakter"
              />
            </div>

            {error && <p className="text-sm text-bad">{error}</p>}
            {info && <p className="text-sm text-good">{info}</p>}

            <button
              type="submit"
              disabled={loading}
              className="focus-ring mt-2 w-full rounded-xl bg-brand-500 py-3 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 disabled:opacity-60 transition-colors"
            >
              {loading ? 'Lütfen bekleyin...' : mode === 'signin' ? 'Giriş Yap' : 'Hesap Oluştur'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
