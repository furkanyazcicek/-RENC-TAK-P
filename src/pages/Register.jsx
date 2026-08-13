import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, User } from 'lucide-react';
import AuthLayout, { AuthTabs } from '../components/auth/AuthLayout';
import { Alert, Button, Field, Input, Select } from '../components/ui';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('student');
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

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

    // 1. Doğrudan Supabase Auth çağrısı (AuthContext engeline takılmadan options gidiyor)
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role,
          student_id: role === 'parent' ? selectedStudentId : null
        }
      }
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    // 2. Garanti Çözüm: Profiles tablosuna rolü ve öğrenci bağını doğrudan BİZ yazıyoruz
    const userId = authData?.user?.id;
    if (userId) {
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          full_name: fullName,
          role: role,
          student_id: role === 'parent' && selectedStudentId ? selectedStudentId : null
        });

      if (profileError) {
        setError('Profil kaydedilirken hata oluştu: ' + profileError.message);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    navigate('/');
  };

  return (
    <AuthLayout title="Hesabını oluştur" subtitle="Öğrenci & Veli Kaydı">
      <AuthTabs active="register" />

      {error && (
        <Alert tone="danger" className="mb-4">
          {error}
        </Alert>
      )}

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <Field label="Ad Soyad">
          {({ id }) => (
            <Input
              id={id}
              type="text"
              required
              icon={User}
              placeholder="İsim ve Soyisim"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          )}
        </Field>

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

        <Field label="Şifre" hint="En az 6 karakter">
          {({ id, describedBy }) => (
            <Input
              id={id}
              aria-describedby={describedBy}
              type="password"
              required
              icon={Lock}
              placeholder="En az 6 karakter"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          )}
        </Field>

        <Field label="Kayıt Türü">
          {({ id }) => (
            <Select id={id} value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Öğrenci Olarak Kaydol</option>
              <option value="parent">Veli Olarak Kaydol</option>
            </Select>
          )}
        </Field>

        {/* Veli seçildiyse Çocuğu Seçme Ekranı */}
        {role === 'parent' && (
          <Field label="Çocuğunuzu Seçin" className="animate-slide-down">
            {({ id }) => (
              <Select
                id={id}
                value={selectedStudentId}
                onChange={(e) => setSelectedStudentId(e.target.value)}
                required={role === 'parent'}
              >
                <option value="">-- Öğrenci Seçin --</option>
                {students.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.full_name}
                  </option>
                ))}
              </Select>
            )}
          </Field>
        )}

        <Button type="submit" size="lg" fullWidth loading={loading} className="mt-2">
          {loading ? 'Kayıt yapılıyor…' : 'Kayıt Ol'}
        </Button>
      </form>
    </AuthLayout>
  );
}
