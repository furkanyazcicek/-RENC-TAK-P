import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';

export default function ParentDashboard() {
  const { user } = useAuth();
  const [studentData, setStudentData] = useState(null);
  const [logs, setLogs] = useState([]);
  const [exams, setExams] = useState([]);
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

      // 2. Öğrencinin adını çekiyoruz
      const { data: student } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', studentId)
        .single();
      
      setStudentData(student);

      // 3. Öğrencinin günlük çalışma loglarını çekiyoruz
      const { data: dailyLogs } = await supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', studentId)
        .order('study_date', { ascending: false });

      if (dailyLogs) setLogs(dailyLogs);

      // 4. Öğrencinin deneme sınavı sonuçlarını çekiyoruz (mock_exams veya exams tablosu)
      const { data: mockExams } = await supabase
        .from('mock_exams')
        .select('*')
        .eq('student_id', studentId)
        .order('date', { ascending: false });

      if (mockExams) setExams(mockExams);
    }
    setLoading(false);
  };

  // İstatistik Hesaplamaları
  const totalMinutes = logs.reduce((acc, curr) => acc + (curr.duration_minutes || 0), 0);
  const totalHours = (totalMinutes / 60).toFixed(1);
  const totalCorrect = logs.reduce((acc, curr) => acc + (curr.correct || 0), 0);
  const totalWrong = logs.reduce((acc, curr) => acc + (curr.wrong || 0), 0);
  const totalQuestions = totalCorrect + totalWrong;

  if (loading) return <div className="p-8 text-center text-gray-600">Öğrenci verileri yükleniyor...</div>;
  if (!studentData) return <div className="p-8 text-center text-red-600">Öğrenci kaydı bulunamadı. Lütfen Dr. Koç ile iletişime geçin.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Üst Bilgi Kartı */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900">Dr. Koç Veli Bilgilendirme Paneli</h1>
          <p className="text-gray-600 mt-1">Takip Edilen Öğrenci: <span className="font-bold text-brand-600 text-blue-600">{studentData.full_name}</span></p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-xl text-sm font-bold border border-blue-100">
          Aktif Takip
        </div>
      </div>

      {/* Özet İstatistik Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Toplam Çalışma Süresi</p>
          <p className="text-2xl font-extrabold text-gray-900 mt-1">{totalHours} Saat <span className="text-xs font-normal text-gray-400">({totalMinutes} dk)</span></p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Toplam Çözülen Soru</p>
          <p className="text-2xl font-extrabold text-blue-600 mt-1">{totalQuestions} Soru</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Toplam Doğru</p>
          <p className="text-2xl font-extrabold text-green-600 mt-1">{totalCorrect} Doğru</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-sm font-medium text-gray-500">Toplam Yanlış</p>
          <p className="text-2xl font-extrabold text-red-600 mt-1">{totalWrong} Yanlış</p>
        </div>
      </div>

      {/* Deneme Sınavları Sonuçları */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 mb-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Deneme Sınavı Sonuçları</h2>
        {exams.length === 0 ? (
          <p className="text-gray-500 text-sm">Öğrenci henüz bir deneme sınavı sonucu girmemiş.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deneme Adı</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net / Puan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {exams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {exam.date ? new Date(exam.date).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-gray-800">{exam.exam_name || exam.title || 'Deneme Sınavı'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-blue-600">{exam.net || exam.score || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Son Çalışma Geçmişi Tablosu */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Detaylı Çalışma Geçmişi</h2>
        {logs.length === 0 ? (
          <p className="text-gray-500 text-sm">Öğrenci henüz bir çalışma kaydı girmemiş.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Konu</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Süre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doğru/Yanlış</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {log.study_date ? new Date(log.study_date).toLocaleDateString('tr-TR') : '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <span className="font-semibold text-gray-800">{log.topic}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.duration_minutes || 0} dk</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-green-600 font-medium">{log.correct || 0} D</span> / <span className="text-red-600 font-medium">{log.wrong || 0} Y</span>
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
