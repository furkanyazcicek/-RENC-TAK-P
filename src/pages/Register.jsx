import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('student');
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { signUp } = useAuth();
  const navigate = useNavigate();

  // Rol "veli" seçilirse sistemdeki öğrencileri çekiyoruz
  useEffect(() => {
    if (role === 'parent') {
      fetchStudents();
    }
  }, [role]);

  const fetchStudents = async () => {
    const { data } = await supabase
      .from('profiles')
      .select('id, full_name')
      .eq('role', 'student');
    if (data) {
      setStudents(data);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (role === 'parent' && !selectedStudentId) {
      setError('Lütfen bir öğrenci seçin.');
      return;
    }

    setLoading(true);
    setError('');
    
    const metadata = {
      full_name: fullName,
      role: role,
    };
    
    if (role === 'parent') {
      metadata.student_id = selectedStudentId;
    }

    const { data, error: signUpError } = await signUp({ 
      email, 
      password,
      options: {
        data: metadata
      }
    });
    
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
    } else {
      // GARANTİCİ ÇÖZÜM: Kayıt olduktan sonra rolü ve öğrenci bağını doğrudan güncelliyoruz
      if (data?.user?.id) {
        await supabase
          .from('profiles')
          .update({ 
            role: role, 
            student_id: role === 'parent' ? selectedStudentId : null 
          })
          .eq('id', data.user.id);
      }
      navigate('/');
    }
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
        <p className="text-sm text-ink/50 font-medium">Öğrenci & Veli Kaydı</p>
      </div>

      {/* Kayıt Kartı */}
      <div className="w-full max-w-md bg-white rounded-[24px] shadow-card border border-ink/5 p-6 sm:p-8">
        
        {/* Üst Sekmeler (Giriş Yap / Kayıt Ol) */}
        <div className="flex bg-paper p-1.5 rounded-2xl mb-8 border border-ink/5">
          <Link to="/login" className="flex-1 text-ink/50 text-center py-2.5 rounded-xl text-sm font-bold hover:text-ink transition-colors">
            Giriş Yap
          </Link>
          <div className="flex-1 bg-white shadow-sm text-brand-700 text-center py-2.5 rounded-xl text-sm font-bold">
            Kayıt Ol
          </div>
        </div>

        {/* Uyarı Mesajları */}
        {error && (
          <div className="mb-4 bg-red-50 border border-red-100 text-red-600 p-3 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-ink/70 mb-1.5 ml-1">Ad Soyad</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3.5 rounded-xl border border-ink/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all placeholder:text-ink/30 text-sm font-medium bg-white"
              placeholder="İsim ve Soyisim"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

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

          <div>
            <label className="block text-sm font-bold text-ink/70 mb-1.5 ml-1">Kayıt Türü</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-ink/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm font-medium bg-white"
            >
              <option value="student">Öğrenci Olarak Kaydol</option>
              <option value="parent">Veli Olarak Kaydol</option>
            </select>
          </div>

          {/* Veli seçildiyse Çocuğu Seçme Ekranı */}
          {role === 'parent' && (
            <div>
              <label className="block text-sm font-bold text-ink/70 mb-1.5 ml-1">Çocuğunuzu Seçin</label>
              <select
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl border border-ink/10 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all text-sm font-medium bg-white"
                required={role === 'parent'}
              >
                <option value="">-- Öğrenci Seçin --</option>
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.full_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-xl hover:bg-brand-700 transition-colors shadow-sm mt-4 disabled:opacity-50"
          >
            {loading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
          </button>
        </form>
      </div>
    </div>
  );
}
