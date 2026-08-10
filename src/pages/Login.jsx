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
        import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResetMessage('');
    const { error: signInError } = await signIn({ email, password });
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
      setResetMessage('Şifre sıfırlama bağlantısı e-posta adresinize gönderildi. Lütfen gelen kutunuzu (ve spam klasörünü) kontrol edin.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-paper flex flex-col items-center justify-center relative px-4 py-12">
      {/* Sol Üst Geri Dön Butonu */}
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
        <Link to="/" className="text-brand-700 text-sm font-medium flex items-center gap-2 hover:underline">
          ← Anasayfaya dön
        </Link>
      </div>

      {/* Logo ve Başlık Alanı */}
      <div className="flex flex-col items-center mb-8 mt-4">
        <div className="w-14 h-14 bg-brand-700 text-white rounded-2xl flex items-center justify-center text-2xl font-bold shadow-sm mb-4">
          D
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink mb-1">Dr. Koç</h1>
        <p className="text-sm text-ink/50 font-medium">Öğrenci & Öğretmen Girişi</p>
      </div>

      {/* Giriş Kartı */}
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-card border border-ink/5 p-6 sm:p-8">
        
        {/* Üst Sekmeler (Giriş Yap / Kayıt Ol) */}
        <div className="flex bg-paper p-1.5 rounded-2xl mb-8 border border-ink/5">
          <div className="flex-1 bg-white shadow-sm text-brand-700 text-center py-2.5 rounded-xl text-sm font-bold">
            Giriş Yap
          </div>
          <Link to="/register" className="flex-1 text-ink/50 text-center py-2.5 rounded-xl text-sm font-bold hover:text-ink transition-colors">
            Kayıt Ol
          </Link>
        </div>

        {/* Uyarı Mesajları */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
        {resetMessage && (
          <div className="mb-4 bg-green-50 border border-green-100 text-green-600 p-3 rounded-xl text-sm font-medium">
            {resetMessage}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-bold text-ink/70 mb-1.5 ml-1">E-posta</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-ink/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-ink/30 text-sm font-medium bg-white"
              placeholder="ornek@eposta.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-ink/70 mb-1.5 ml-1">Şifre</label>
            <input
              type="password"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-ink/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-ink/30 text-sm font-medium bg-white"
              placeholder="En az 6 karakter"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Şifremi Unuttum */}
          <div className="flex justify-start ml-1 -mt-1">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors"
            >
              Şifremi unuttum
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-colors shadow-sm mt-2 disabled:opacity-50"
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>
      </div>
    </div>
  );
}