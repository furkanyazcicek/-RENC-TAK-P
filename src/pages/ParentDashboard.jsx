import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';

export default function ParentDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState(null);
  const [logs, setLogs] = useState([]);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchParentAndStudentData();
    }
  }, [user]);

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  const fetchParentAndStudentData = async () => {
    setLoading(true);
    // 1. Veli profilini çek
    const { data: parentProfile } = await supabase
      .from('profiles')
      .select('student_id')
      .eq('id', user.id)
      .single();

    if (parentProfile?.student_id) {
      const studentId = parentProfile.student_id;

      // 2. Öğrenci adını çek
      const { data: student } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', studentId)
        .single();
      
      setStudentData(student);

      // 3. Çalışma loglarını çek
      const { data: dailyLogs } = await supabase
        .from('daily_logs')
        .select('*')
        .eq('student_id', studentId)
        .order('study_date', { ascending: false });
      if (dailyLogs) setLogs(dailyLogs);

      // 4. Deneme sınavlarını çek
      const { data: mockExams } = await supabase
        .from('mock_exams')
        .select('*')
        .eq('student_id', studentId)
        .order('date', { ascending: false });
      if (mockExams) setExams(mockExams);
    }
    setLoading(false);
  };

  if (loading) return <div className="p-12 text-center">Yükleniyor...</div>;
  if (!studentData) return <div className="p-12 text-center text-red-500">Öğrenci kaydı bulunamadı.</div>;

  return (
    <div className="max-w-7xl mx-auto p-4 bg-gray-50 min-h-screen">
      {/* Üst Header: Çıkış Butonu Eklendi */}
      <div className="bg-white shadow-sm rounded-2xl p-6 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dr. Koç Veli Paneli</h1>
          <p className="text-sm text-gray-500">Öğrenci: <span className="font-semibold text-blue-600">{studentData.full_name}</span></p>
        </div>
        <button 
          onClick={handleLogout}
          className="bg-red-50 text-red-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors"
        >
          Çıkış Yap
        </button>
      </div>

      {/* İstatistikler */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-400 font-bold uppercase">Süre</p>
          <p className="text-lg font-bold">{Math.round(logs.reduce((a,c) => a + (c.duration_minutes || 0), 0) / 60)} Saat</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-400 font-bold uppercase">Soru Sayısı</p>
          <p className="text-lg font-bold text-blue-600">{logs.reduce((a,c) => a + (c.correct || 0) + (c.wrong || 0), 0)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-400 font-bold uppercase">Doğru</p>
          <p className="text-lg font-bold text-green-600">{logs.reduce((a,c) => a + (c.correct || 0), 0)}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border">
          <p className="text-xs text-gray-400 font-bold uppercase">Yanlış</p>
          <p className="text-lg font-bold text-red-600">{logs.reduce((a,c) => a + (c.wrong || 0), 0)}</p>
        </div>
      </div>

      {/* Deneme Sınavları Tablosu */}
      <div className="bg-white p-6 rounded-xl shadow-sm border mb-6">
        <h2 className="font-bold mb-4">Deneme Sınavları</h2>
        {exams.length === 0 ? <p className="text-gray-400 text-sm">Deneme verisi bulunamadı.</p> : (
          <table className="w-full text-sm">
            <thead><tr className="text-gray-400 text-left"><th>Tarih</th><th>Sınav</th><th>Net</th></tr></thead>
            <tbody>
              {exams.map(e => (
                <tr key={e.id} className="border-t">
                  <td className="py-2">{new Date(e.date).toLocaleDateString()}</td>
                  <td className="py-2">{e.exam_name}</td>
                  <td className="py-2 font-bold text-blue-600">{e.net}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
