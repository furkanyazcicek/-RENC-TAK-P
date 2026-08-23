import { useEffect, useRef, useState } from 'react'
import { AudioLines, Pause, Play } from 'lucide-react'
import Prose from './Prose'

/**
 * ÖĞRETMEN ANLATIMI
 * ==================================================================
 *
 * İKİ DURUM, TEK BİLEŞEN
 *
 * 1) Ses hazır → sade bir oynatıcı. Devasa podcast/müzik oynatıcısı
 *    KULLANILMAZ (§32): tek düğme, süre, ince ilerleme çizgisi. Ders
 *    deneyiminin içinde durur, üstüne çıkmaz.
 *
 * 2) Ses henüz yok → anlatım METNİ gösterilir, açıkça etiketlenerek.
 *
 * İkinci durum bir "bahane ekranı" değil, bilinçli bir tasarım kararıdır.
 * Ses sağlayıcısı bağlanana kadar öğretmen katmanını tamamen gizleseydik
 * (a) öğrenci bugün hiçbir şey kazanmazdı, (b) anlatım metinlerinin
 * kalitesini kimse göremez, dolayısıyla ses geldiğinde kötü bir metni
 * seslendirmiş olurduk. Metin görünür olunca hem öğrenciye faydası olur
 * hem de yayın öncesi denetlenebilir.
 *
 * Anlatım metni notun kendisini KELİMESİ KELİMESİNE OKUMAZ (§22). Notta
 * yazan şeyi tekrar etmez; yönlendirir, durdurur, bağlantı kurdurur.
 */

export default function TeacherVoice({ script, audioUrl, durationSeconds, compact = false }) {
  if (!script && !audioUrl) return null

  return (
    <div className="flex flex-col gap-4">
      {audioUrl ? (
        <AudioPlayer src={audioUrl} durationSeconds={durationSeconds} />
      ) : (
        <p className="m-0 flex items-start gap-2 text-[0.875rem] leading-relaxed text-ink/50">
          <AudioLines className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Öğretmen sesi bu bölüm için henüz kaydedilmedi. Anlatımın kendisi aşağıda — sesli sürüm hazır olduğunda aynı metin bu ekranda seslendirilecek.</span>
        </p>
      )}

      {script && (
        <div className={compact ? 'text-[0.9375rem] leading-[1.8]' : 'text-[1rem] leading-[1.85]'}>
          <Prose text={script} />
        </div>
      )}
    </div>
  )
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return '—'
  const total = Math.round(seconds)
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, '0')}`
}

/**
 * Sade oynatıcı. Ses yüklenemezse (ağ hatası, silinmiş dosya) bileşen
 * sessizce metne düşer; ders akışı bozulmaz (§50).
 */
function AudioPlayer({ src, durationSeconds }) {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(durationSeconds ?? null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setPlaying(false)
    setProgress(0)
    setFailed(false)
  }, [src])

  if (failed) {
    return (
      <p className="m-0 text-[0.875rem] text-ink/50">Ses kaydı şu anda açılamadı. Anlatımı aşağıdan okuyabilirsin.</p>
    )
  }

  function toggle() {
    const node = audioRef.current
    if (!node) return
    if (node.paused) {
      node.play().then(() => setPlaying(true)).catch(() => setFailed(true))
    } else {
      node.pause()
      setPlaying(false)
    }
  }

  const percent = duration ? Math.min(100, (progress / duration) * 100) : 0

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={toggle}
        className="focus-ring grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-600 text-white transition-colors hover:bg-brand-700"
        aria-label={playing ? 'Duraklat' : 'Anlatımı başlat'}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="ms-0.5 h-4 w-4" />}
      </button>

      <div className="min-w-0 flex-1">
        <div className="h-0.5 w-full rounded-full bg-line">
          <div className="h-0.5 rounded-full bg-brand-500 transition-[width] duration-200" style={{ width: `${percent}%` }} />
        </div>
        <p className="m-0 mt-1.5 font-mono text-[0.75rem] tabular-nums text-ink/45">
          {formatTime(progress)} / {formatTime(duration)}
        </p>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="none"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) => setProgress(event.currentTarget.currentTime)}
        onEnded={() => setPlaying(false)}
        onError={() => setFailed(true)}
      />
    </div>
  )
}
