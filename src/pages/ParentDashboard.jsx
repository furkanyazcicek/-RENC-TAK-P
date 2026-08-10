import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../supabaseClient';

export default function ParentDashboard() {
  const { user } = useAuth();
  const [studentData, setStudentData] = useState(null);
  const [logs, setLogs] = useState([]);
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
      // 2. Öğrencinin adını çekiyoruz
      const { data: student } = await supabase
        .from('profiles')
        .select('full_name')
        .eq('id', parentProfile.student_id)
        .single();
      
      setStudentData(student);

      // 3. Öğrencinin çalışma geçmişini (loglarını) çekiyoruz
      const { data: dailyLogs } = await supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', parentProfile.student_id)
        .order('date', { ascending: false });

      if (dailyLogs) setLogs(dailyLogs);
    }
    setLoading(false);
  };

  if (loading) return <div className="p-8 text-center text-gray-600">Öğrenci verileri yükleniyor...</div>;
  if (!studentData) return <div className="p-8 text-center text-red-600">Öğrenci kaydı bulunamadı. Lütfen Dr. Koç ile iletişime geçin.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dr. Koç Veli Bilgilendirme Paneli</h1>
        <p className="text-gray-600 mt-2">Takip Edilen Öğrenci: <span className="font-semibold text-blue-600">{studentData.full_name}</span></p>
      </div>

      <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Son Çalışma Geçmişi</h2>
        {logs.length === 0 ? (
          <p className="text-gray-500">Öğrenci henüz bir çalışma kaydı girmemiş.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ders / Konu</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Süre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doğru/Yanlış/Boş</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {logs.map((log) => (
                  <tr key={log.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                      {new Date(log.date).toLocaleDateString('tr-TR')}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <span className="font-semibold">{log.subject}</span> <br/>
                      <span className="text-xs text-gray-500">{log.topic}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{log.duration} dk</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <span className="text-green-600 font-medium">{log.correct || 0} D</span> / <span className="text-red-600 font-medium">{log.wrong || 0} Y</span> / <span className="text-gray-500">{log.empty || 0} B</span>
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