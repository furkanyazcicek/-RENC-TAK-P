import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Modal from './Modal';

export default function DailyLogEditModal({ log, onClose, onUpdated }) {
  const [duration, setDuration] = useState(log.duration_minutes || 0);
  const [correct, setCorrect] = useState(log.correct || 0);
  const [incorrect, setIncorrect] = useState(log.incorrect || 0);
  const [empty, setEmpty] = useState(log.empty || 0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Supabase veritabanını güncelliyoruz
    const { error: updateError } = await supabase
      .from('daily_logs')
      .update({
        duration_minutes: Number(duration),
        correct: Number(correct),
        incorrect: Number(incorrect),
        empty: Number(empty)
      })
      .eq('id', log.id);

    if (updateError) {
      setError('Güncelleme başarısız: ' + updateError.message);
      setLoading(false);
    } else {
      setLoading(false);
      onUpdated(); // Başarılıysa pencereyi kapat ve listeyi yenile
    }
  };

  return (
    <Modal open={true} onClose={onClose} title="Çalışma Kaydını Düzenle">
      <form onSubmit={handleSubmit} className="space-y-4 mt-2">
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
        
        <div className="bg-brand-50 text-brand-800 p-3 rounded-lg text-sm mb-4">
          <span className="font-semibold">{log.subject}</span> - {log.topic} <br />
          <span className="text-brand-600/80 text-xs">{new Date(log.study_date).toLocaleDateString('tr-TR')}</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-ink/70">Süre (Dk)</label>
            <input
              type="number"
              min="0"
              required
              className="mt-1 block w-full border border-ink/20 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/70">Doğru</label>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full border border-ink/20 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              value={correct}
              onChange={(e) => setCorrect(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/70">Yanlış</label>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full border border-ink/20 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              value={incorrect}
              onChange={(e) => setIncorrect(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-ink/70">Boş</label>
            <input
              type="number"
              min="0"
              className="mt-1 block w-full border border-ink/20 rounded-md shadow-sm py-2 px-3 focus:ring-brand-500 focus:border-brand-500 sm:text-sm"
              value={empty}
              onChange={(e) => setEmpty(e.target.value)}
            />
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 border border-ink/20 rounded-md shadow-sm text-sm font-medium text-ink/70 bg-white hover:bg-ink/5"
          >
            İptal
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 disabled:opacity-50"
          >
            {loading ? 'Kaydediliyor...' : 'Kaydet'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
