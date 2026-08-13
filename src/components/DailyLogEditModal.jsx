import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { splitSubjectTopic } from '../lib/topicHelpers';
import Modal from './Modal';
import { Alert, Button, Field, Input } from './ui';

export default function DailyLogEditModal({ log, onClose, onUpdated }) {
  const { subject, topic } = splitSubjectTopic(log.topic);
  const [duration, setDuration] = useState(log.duration_minutes || 0);
  const [correct, setCorrect] = useState(log.correct || 0);
  const [incorrect, setIncorrect] = useState(log.incorrect || 0);
  const [empty, setEmpty] = useState(log.empty || 0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // .select() olmadan Supabase, RLS bu satırı filtrelese bile hata
    // döndürmez (sessizce 0 satır günceller) — bu yüzden gerçekten
    // güncellenen satırı geri isteyip kontrol ediyoruz.
    const { data, error: updateError } = await supabase
      .from('daily_logs')
      .update({
        duration_minutes: Number(duration),
        correct: Number(correct),
        incorrect: Number(incorrect),
        empty: Number(empty),
      })
      .eq('id', log.id)
      .select();

    setLoading(false);

    if (updateError) {
      setError('Güncelleme başarısız: ' + updateError.message);
      return;
    }

    if (!data || data.length === 0) {
      setError('Kayıt güncellenemedi — bu kaydı düzenleme yetkiniz olmayabilir.');
      return;
    }

    setSuccess(true);
    setTimeout(() => onUpdated(), 700); // Kullanıcı başarı mesajını görsün diye kısa bir gecikmeyle kapat ve listeyi yenile
  };

  return (
    <Modal
      open={true}
      onClose={onClose}
      title="Çalışma Kaydını Düzenle"
      footer={
        <>
          <Button variant="secondary" onClick={onClose} disabled={loading || success}>
            İptal
          </Button>
          <Button type="submit" form="daily-log-edit" loading={loading} disabled={success}>
            {success ? 'Kaydedildi ✓' : 'Kaydet'}
          </Button>
        </>
      }
    >
      <form id="daily-log-edit" onSubmit={handleSubmit} className="flex flex-col gap-4">
        {error && <Alert tone="danger">{error}</Alert>}
        {success && <Alert tone="success">Kayıt güncellendi</Alert>}

        {/* Hangi kaydı düzenlediğini gösteren bağlam kutusu */}
        <div className="rounded-input border border-brand-500/15 bg-brand-500/[0.07] px-4 py-3 text-sm">
          <p className="font-semibold text-brand-800">
            {subject}
            {topic ? <span className="font-normal text-brand-700"> · {topic}</span> : null}
          </p>
          <p className="mt-0.5 text-xs text-brand-700/80">
            {new Date(log.study_date).toLocaleDateString('tr-TR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Süre (dk)" required>
            {({ id }) => (
              <Input
                id={id}
                type="number"
                min="0"
                required
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
              />
            )}
          </Field>
          <Field label="Doğru">
            {({ id }) => (
              <Input
                id={id}
                type="number"
                min="0"
                value={correct}
                onChange={(e) => setCorrect(e.target.value)}
              />
            )}
          </Field>
          <Field label="Yanlış">
            {({ id }) => (
              <Input
                id={id}
                type="number"
                min="0"
                value={incorrect}
                onChange={(e) => setIncorrect(e.target.value)}
              />
            )}
          </Field>
          <Field label="Boş">
            {({ id }) => (
              <Input
                id={id}
                type="number"
                min="0"
                value={empty}
                onChange={(e) => setEmpty(e.target.value)}
              />
            )}
          </Field>
        </div>
      </form>
    </Modal>
  );
}
