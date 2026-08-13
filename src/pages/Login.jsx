import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import AuthLayout, { AuthTabs } from '../components/auth/AuthLayout';
import { Alert, Button, Field, Input } from '../components/ui';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResetMessage('');

    // Supabase doğrudan çağrılarak JSON unmarshal hataları engelleniyor
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
    } else {
      navigate('/');
    }
  };

  const handleResetPassword = async () => {
    if (!email) {
      setError('Lütfen şifre sıfırlama bağlantısı için e-posta adresinizi girin.');
      return;
    }
    setLoading(true);
    setError('');
    setResetMessage('');

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });

    if (error) {
      setError(error.message);
    } else {
      setResetMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen kutunuzu kontrol edin.');
    }
    setLoading(false);
  };

  return (
    <AuthLayout title="Tekrar hoş geldin" subtitle="Öğrenci & Öğretmen Girişi">
      <AuthTabs active="login" />

      {error && (
        <Alert tone="danger" className="mb-4">
          {error}
        </Alert>
      )}
      {resetMessage && (
        <Alert tone="success" className="mb-4">
          {resetMessage}
        </Alert>
      )}

      <form onSubmit={handleLogin} className="flex flex-col gap-5">
        <Field label="E-posta">
          {({ id }) => (
            <Input
              id={id}
              type="email"
              required
              icon={Mail}
              placeholder="ornek@eposta.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
        </Field>

        <Field label="Şifre">
          {({ id }) => (
            <Input
              id={id}
              type="password"
              required
              icon={Lock}
              placeholder="En az 6 karakter"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
        </Field>

        <div className="-mt-1 flex justify-start">
          <Button variant="link" size="sm" onClick={handleResetPassword}>
            Şifremi unuttum
          </Button>
        </div>

        <Button type="submit" size="lg" fullWidth loading={loading}>
          {loading ? 'Giriş yapılıyor…' : 'Giriş Yap'}
        </Button>
      </form>
    </AuthLayout>
  );
}
