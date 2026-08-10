import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

export default function ParentDashboard() {
  const { user } = useAuth();
  const [studentData, setStudentData] = useState(null);
  const [logs, setLogs] = useState([]);
  const [exams, setExams] = useState([]);
  const [homeworks, setHomeworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchParentAndStudentData();
    }
  }, [user]);

  const fetchParentAndStudentData = async () => {
    setLoading(true);
    // 1. Velinin profilinden, bağlı olduğu öğrencinin ID'sini buluyoruz
    const { data: parentProfile } = await supabase
      .from('profiles')
      .select('student_id')
      .eq('id', user.id)
      .single();

    if (parentProfile && parentProfile.student_id) {
      const studentId = parentProfile.student_id;

      // 2. Öğrencinin profil bilgilerini çekiyoruz
      const { data: student } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', studentId)
        .single();
      
      setStudentData(student);

      // 3. Günlük çalışma loglarını çekiyoruz
      const { data: dailyLogs } = await supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', studentId)
        .order('study_date', { ascending: false });

      if (dailyLogs) setLogs(dailyLogs);

      // 4. Deneme sınavı sonuçlarını çekiyoruz
      const { data: mockExams } = await supabase
        .from('mock_exams')
        .select('*')
        .eq('student_id', studentId)
        .order('date', { ascending: false });

      if (mockExams) setExams(mockExams);

      // 5. Ödevleri / Görevleri çekiyoruz
      const { data: studentHomeworks } = await supabase
        .from('homeworks')
        .select('*')
        .eq('student_id', studentId)
        .order('due_date', { ascending: false });

      if (studentHomeworks) setHomeworks(studentHomeworks);
    }
    setLoading(false);
  };

  // İstatistik ve Grafik Hesaplamaları
  const totalMinutes = logs.reduce((acc, curr) => acc + (curr.duration_minutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const totalCorrect = logs.reduce((acc, curr) => acc + (curr.correct || 0), 0);
  const totalWrong = logs.reduce((acc, curr) => acc + (curr.wrong || 0), 0);
  const totalQuestions = totalCorrect + totalWrong;
  const successRate = totalQuestions > 0 ? ((totalCorrect / totalQuestions) * 100).toFixed(1) : 0;

  // Derslere göre süre dağılımı (Grafiksel analiz için)
  const subjectStats = logs.reduce((acc, curr) => {
    const subj = curr.subject || curr.topic || 'Diğer';
    if (!acc[subj]) acc[subj] = { minutes: 0, count: 0, correct: 0, wrong: 0 };
    acc[subj].minutes += (curr.duration_minutes || 0);
    acc[subj].count += 1;
    acc[subj].correct += (curr.correct || 0);
    acc[subj].wrong += (curr.wrong || 0);
    return acc;
  }, {});

  if (loading) return <div className="p-12 text-center text-gray-500 font-medium">Öğrenci verileri yükleniyor...</div>;
  if (!studentData) return <div className="p-12 text-center text-red-500 font-semibold">Bağlı öğrenci kaydı bulunamadı. Lütfen koçunuzla görüşün.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-paper min-h-screen text-ink">
      
      {/* Üst Bilgi ve Gözlemci Rozeti */}
      <div className="bg-white shadow-card border border-ink/5 rounded-[24px] p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-ink/40">Veli Gözlemci Modu</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-ink">Dr. Koç Veli Bilgilendirme Paneli</h1>
          <p className="text-sm text-ink/60 mt-1">Takip Edilen Öğrenci: <span className="font-bold text-brand-700">{studentData.full_name}</span></p>
        </div>
        <div className="bg-brand-50 text-brand-700 px-4 py-2 rounded-xl text-xs font-bold border border-brand-100 shadow-sm">
          Salt Okunur / Canlı Takip
        </div>
      </div>

      {/* Özet İstatistik Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-[20px] shadow-card border border-ink/5">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Toplam Çalışma Süresi</p>
          <p className="text-3xl font-extrabold text-ink">{totalHours} <span className="text-lg font-bold text-ink/50">Saat</span></p>
          <p className="text-xs text-ink/50 mt-1">({totalMinutes} dakika)</p>
        </div>
        <div className="bg-white p-6 rounded-[20px] shadow-card border border-ink/5">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Toplam Çözülen Soru</p>
          <p className="text-3xl font-extrabold text-brand-600">{totalQuestions}</p>
          <p className="text-xs text-green-600 font-semibold mt-1">Başarı Oranı: %{successRate}</p>
        </div>
        <div className="bg-white p-6 rounded-[20px] shadow-card border border-ink/5">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Toplam Doğru</p>
          <p className="text-3xl font-extrabold text-green-600">{totalCorrect}</p>
          <p className="text-xs text-ink/50 mt-1">Tüm çalışmalardaki doğru</p>
        </div>
        <div className="bg-white p-6 rounded-[20px] shadow-card border border-ink/5">
          <p className="text-xs font-bold uppercase tracking-wider text-ink/40 mb-1">Toplam Yanlış</p>
          <p className="text-3xl font-extrabold text-red-600">{totalWrong}</p>
          <p className="text-xs text-ink/50 mt-1">Tüm çalışmalardaki yanlış</p>
        </div>
      </div>

      {/* Ders Bazlı Dağılım / Grafiksel İlerleme Analizi */}
      <div className="bg-white shadow-card border border-ink/5 rounded-[24px] p-6 mb-8">
        <h2 className="text-xl font-extrabold text-ink mb-6">Derslere Göre Çalışma Dağılımı</h2>
        {Object.keys(subjectStats).length === 0 ? (
          <p className="text-sm text-ink/50">Henüz ders dağılımı oluşmadı.</p>
        ) : (
          <div className="space-y-4">
            {Object.entries(subjectStats).map(([subject, data]) => {
              const percentage = totalMinutes > 0 ? Math.round((data.minutes / totalMinutes) * 100) : 0;
              return (
                <div key={subject} className="bg-paper p-4 rounded-xl border border-ink/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm text-ink">{subject}</span>
                    <span className="text-xs font-semibold text-brand-600">{data.minutes} dk ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-ink/5 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-brand-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${percentage}%` }}></div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-xs text-ink/50">
                    <span>Çalışma Adedi: {data.count}</span>
                    <span className="text-green-600 font-medium">Doğru: {data.correct}</span>
                    <span className="text-red-600 font-medium">Yanlış: {data.wrong}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Deneme Sınavı Sonuçları */}
      <div className="bg-white shadow-card border border-ink/5 rounded-[24px] p-6 mb-8">
        <h2 className="text-xl font-extrabold text-ink mb-4">Deneme Sınavı Sonuçları</h2>
        {exams.length === 0 ? (
          <p className="text-sm text-ink/50">Öğrenci henüz bir deneme sınavı sonucu girmemiş.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-ink/5">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Deneme Adı</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Net / Puan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {exams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-paper/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">
                      {exam.date ? new Date(exam.date).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-ink">{exam.exam_name || exam.title || 'Deneme Sınavı'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-extrabold text-brand-600">{exam.net || exam.score || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Öğrenci Ödevleri / Görev Durumu */}
      <div className="bg-white shadow-card border border-ink/5 rounded-[24px] p-6 mb-8">
        <h2 className="text-xl font-extrabold text-ink mb-4">Verilen Ödevler & Görevler</h2>
        {homeworks.length === 0 ? (
          <p className="text-sm text-ink/50">Atanmış bir ödev bulunmuyor.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-ink/5">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Son Teslim</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Açıklama / Görev</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Durum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {homeworks.map((hw) => (
                  <tr key={hw.id} className="hover:bg-paper/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">
                      {hw.due_date ? new Date(hw.due_date).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-ink">{hw.title || hw.description || 'Ödev'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${hw.is_completed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        {hw.is_completed ? 'Tamamlandı' : 'Bekliyor'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Detaylı Çalışma Geçmişi Tablosu */}
      <div className="bg-white shadow-card border border-ink/5 rounded-[24px] p-6">
        <h2 className="text-xl font-extrabold text-ink mb-4">Detaylı Çalışma Geçmişi</h2>
        {logs.length === 0 ? (
          <p className="text-sm text-ink/50">Öğrenci henüz bir çalışma kaydı girmemiş.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-ink/5">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Konu / İçerik</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Süre</th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-ink/40 uppercase tracking-wider">Doğru / Yanlış</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ink/5">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-paper/50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-ink">
                      {log.study_date ? new Date(log.study_date).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-ink">
                      <span className="font-bold text-ink">{log.subject || 'Genel'}</span>
                      <p className="text-xs text-ink/50">{log.topic}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-ink">{log.duration_minutes || 0} dk</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold">
                      <span className="text-green-600">{log.correct || 0} D</span> / <span className="text-red-600">{log.wrong || 0} Y</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
