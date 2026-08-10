import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Yeni Şifre Belirle
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Lütfen hesabınız için yeni bir şifre girin.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleUpdate}>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
          {message && <div className="bg-green-50 text-green-600 p-3 rounded-md text-sm">{message}</div>}

          <div>
            <label className="block text-sm font-medium text-gray-700">Yeni Şifre</label>
            <input
              type="password"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading || error.includes('Geçersiz')}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {loading ? 'Güncelleniyor...' : 'Şifreyi Kaydet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}