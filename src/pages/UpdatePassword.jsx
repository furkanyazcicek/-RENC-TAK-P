import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import { Alert, Button, Field, Input } from '../components/ui';

export default function UpdatePassword() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Sayfa açıldığında URL'de şifre sıfırlama token'ı var mı kontrol et
    const hash = window.location.hash;
    if (!hash || !hash.includes('type=recovery')) {
      setError('Geçersiz veya süresi dolmuş bir bağlantı kullandınız.');
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setError('Şifre güncellenirken bir hata oluştu: ' + error.message);
    } else {
      setMessage('Şifreniz başarıyla güncellendi! Giriş sayfasına yönlendiriliyorsunuz...');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    }
    setLoading(false);
  };

  return (
    <AuthLayout title="Yeni Şifre Belirle" subtitle="Lütfen hesabınız için yeni bir şifre girin.">
      <form className="flex flex-col gap-5" onSubmit={handleUpdate}>
        {error && <Alert tone="danger">{error}</Alert>}
        {message && <Alert tone="success">{message}</Alert>}

        <Field label="Yeni Şifre">
          {({ id }) => (
            <Input
              id={id}
              type="password"
              required
              icon={Lock}
              autoComplete="new-password"
              placeholder="En az 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
        </Field>

        <Button
          type="submit"
          size="lg"
          fullWidth
          loading={loading}
          disabled={loading || error.includes('Geçersiz')}
        >
          {loading ? 'Güncelleniyor…' : 'Şifreyi Kaydet'}
        </Button>
      </form>
    </AuthLayout>
  );
}
