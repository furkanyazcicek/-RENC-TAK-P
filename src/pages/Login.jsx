import { useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    
    if (error) {
      setError('Giriş başarısız. Lütfen e-posta ve şifrenizi kontrol edin.');
    } else {
      // Başarılı girişte sistem otomatik yönlendirecektir (App.jsx üzerinden)
      navigate('/'); 
    }
    setLoading(false);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');
    
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/update-password`,
    });
    
    if (error) {
      setError(error.message);
    } else {
      setMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi! Lütfen gelen kutunuzu kontrol edin.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            {isForgotPassword ? 'Şifremi Unuttum' : 'Dr. Koç Sistemine Giriş'}
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isForgotPassword 
              ? 'Kayıtlı e-posta adresinizi girin, size sıfırlama linki gönderelim.' 
              : 'Hesabınıza erişmek için bilgilerinizi girin.'}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={isForgotPassword ? handleResetPassword : handleLogin}>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
          {message && <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">{message}</div>}

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">E-posta</label>
              <input
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {!isForgotPassword && (
              <div>
                <label className="block text-sm font-medium text-gray-700">Şifre</label>
                <input
                  type="password"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => {
                setIsForgotPassword(!isForgotPassword);
                setError('');
                setMessage('');
              }}
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              {isForgotPassword ? 'Giriş ekranına dön' : 'Şifremi unuttum'}
            </button>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'İşleniyor...' : (isForgotPassword ? 'Bağlantı Gönder' : 'Giriş Yap')}
            </button>
          </div>
        </form>

        {!isForgotPassword && (
          <div className="mt-4 text-sm text-center">
            <span className="text-gray-600">Hesabınız yok mu? </span>
            <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">
              Kayıt Ol
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}