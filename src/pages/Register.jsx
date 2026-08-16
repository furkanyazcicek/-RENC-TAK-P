import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, User } from 'lucide-react';
import AuthLayout, { AuthTabs } from '../components/auth/AuthLayout';
import ExamProfileFields from '../components/ExamProfileFields';
import { defaultExamYear, isMissingColumnError } from '../lib/examProfile';
import { Alert, Button, Field, Input, Select } from '../components/ui';

/**
 * Kayıt ekranı.
 *
 * VELİ ARTIK BURADA ÖĞRENCİ SEÇMEZ. Eskiden bu ekranda sistemdeki tüm
 * öğrencileri listeleyen bir açılır menü vardı ve veli istediğini seçip
 * doğrudan eşleşiyordu — yani herkes, herhangi bir öğrencinin velisi
 * olduğunu iddia edebiliyordu. Üstelik o liste giriş yapılmadan
 * okunduğu için `profiles` tablosu herkese açık kalmak zorundaydı.
 *
 * Yeni akış: veli önce boş bir hesap açar, sonra öğrencinin profilinden
 * aldığı tek kullanımlık kodu kendi panelinde kullanır ve öğrenci onaylar.
 * Bkz. src/lib/parentLink.js ve supabase/migration_parent_verification.sql
 */
export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Öğrenci kaydında sınav profili de baştan alınır; böylece yeni
  // öğrenciler için Anasayfa'daki anket kartı hiç çıkmaz.
  const [exam, setExam] = useState({
    grade: null,
    target_exam: '',
    is_exam_year: null,
    exam_year: null,
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (role === 'student') {
      if (!exam.grade || exam.is_exam_year === null || !exam.target_exam) {
        setError('Sınıfını, sınav durumunu ve hedef sınavını seçin.');
        return;
      }
    }

    setLoading(true);
    setError('');

    // 1. Doğrudan Supabase Auth çağrısı (AuthContext engeline takılmadan options gidiyor)
    // `student_id` bilerek GÖNDERİLMİYOR: veli bağı yalnızca parent_links
    // tablosundan, öğrencinin onayıyla kurulur.
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
          role: role
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
      const base = {
        id: userId,
        full_name: fullName,
        role: role
      };

      const noExam = exam.target_exam === 'YOK';
      const examFields =
        role === 'student'
          ? {
              grade: exam.grade,
              target_exam: exam.target_exam,
              is_exam_year: exam.is_exam_year,
              exam_year: noExam
                ? null
                : (exam.exam_year ??
                  defaultExamYear(exam.grade, exam.target_exam, exam.is_exam_year)),
              exam_profile_updated_at: new Date().toISOString()
            }
          : {};

      let { error: profileError } = await supabase
        .from('profiles')
        .upsert({ ...base, ...examFields });

      // Sınav kolonları henüz eklenmemişse (göç çalıştırılmamışsa) kayıt
      // tümden başarısız olmasın: profili sınav alanları olmadan yaz.
      // Öğrenci bilgiyi Anasayfa'daki anket kartından tamamlar.
      if (profileError && isMissingColumnError(profileError)) {
        ({ error: profileError } = await supabase.from('profiles').upsert(base));
      }

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

        {/* Öğrenci seçildiyse sınav profili — geri sayım ve seviyeye göre
            öneriler için gerekli, kayıt anında bir kez sorulur. */}
        {role === 'student' && (
          <div className="animate-slide-down rounded-card border border-line bg-surface-muted p-4">
            <p className="mb-3 text-2xs font-bold uppercase tracking-wider text-ink/55">
              Sınav bilgin
            </p>
            <ExamProfileFields value={exam} onChange={setExam} />
          </div>
        )}

        {/* Veli seçildiyse: öğrenci SEÇİLMEZ, sonraki adım anlatılır.
            Buradan öğrenci seçtirmek, herkesin istediği çocuğun velisi
            olabilmesi demekti. */}
        {role === 'parent' && (
          <div className="animate-slide-down rounded-card border border-line bg-surface-muted p-4">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-aqua-500/10 text-aqua-600">
                <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={2.1} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-ink">Öğrenci bağlantısı sonraki adımda</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/65">
                  Güvenlik gereği öğrenciyi buradan seçemezsiniz. Hesabınızı oluşturduktan sonra
                  panelinizdeki <span className="font-semibold text-ink/80">Öğrenci Doğrula</span>{' '}
                  alanına, öğrencinin kendi profilinden aldığı doğrulama kodunu gireceksiniz.
                  Bağlantı, öğrenci onayladığında aktifleşir.
                </p>
              </div>
            </div>
          </div>
        )}

        <Button type="submit" size="lg" fullWidth loading={loading} className="mt-2">
          {loading ? 'Kayıt yapılıyor…' : 'Kayıt Ol'}
        </Button>
      </form>
    </AuthLayout>
  );
}
