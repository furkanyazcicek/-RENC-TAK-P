import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw, Volume2, VolumeX } from 'lucide-react'
import { seslendirmeHazirMi } from '../../../lib/padisahAnlatim'

const HIZLAR = [0.75, 1, 1.25, 1.5]

/**
 * ANLATIM KONTROLLERİ
 *
 * Bilinçli olarak video oynatıcı GİBİ görünmez: ilerleme çubuğu
 * ince, düğmeler sahnenin diliyle aynı. Öğrenci "video izliyorum"
 * değil, "anlatımı yönetiyorum" hissetmeli.
 */
export default function AnlatimKontrolleri({
  calisiyor,
  oran,
  metin,
  bolumEtiketi,
  hiz,
  onHizDegis,
  onOynatDurdur,
  onSifirla,
  onOnceki,
  onSonraki,
  oncekiVar,
  sonrakiVar,
  sesAcik,
  onSesDegis,
  bolumler = [],
  aktifBolumSirasi = -1,
  onBolumeGit,
}) {
  const sesVar = seslendirmeHazirMi()

  return (
    <div>
      {metin && (
        <p className="pg-anlatim">
          <span className="pg-anlatim-etiket">
            {bolumEtiketi}
            {!sesVar && ' · sesli anlatım yakında'}
          </span>
          {metin}
        </p>
      )}

      {bolumler.length > 1 && (
        <nav className="pg-anlatim-bolumleri" aria-label="Anlatım bölümleri">
          {bolumler.map((bolum, sira) => (
            <button
              key={bolum.id}
              type="button"
              aria-current={sira === aktifBolumSirasi ? 'step' : undefined}
              onClick={() => onBolumeGit?.(sira)}
              title={`${Math.round(bolum.start)}. saniyeye git`}
            >
              <span>{sira + 1}</span>
              {BOLUM_ADLARI[bolum.kind] ?? 'Bölüm'}
            </button>
          ))}
        </nav>
      )}

      <div className="pg-kontrol">
        <button
          type="button"
          className="pg-oynat"
          onClick={onOynatDurdur}
          aria-label={calisiyor ? 'Anlatımı duraklat' : 'Anlatımı oynat'}
        >
          {calisiyor ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: 2 }} />}
        </button>

        <button type="button" className="pg-kontrol-dugme" onClick={onSifirla}>
          <RotateCcw size={14} aria-hidden="true" /> Baştan
        </button>

        <button type="button" className="pg-kontrol-dugme" onClick={onOnceki} disabled={!oncekiVar}>
          <ChevronLeft size={14} aria-hidden="true" /> Önceki padişah
        </button>
        <button type="button" className="pg-kontrol-dugme" onClick={onSonraki} disabled={!sonrakiVar}>
          Sonraki padişah <ChevronRight size={14} aria-hidden="true" />
        </button>

        <div className="pg-ilerleme" role="progressbar" aria-label="Anlatım ilerlemesi" aria-valuenow={Math.round(oran * 100)} aria-valuemin={0} aria-valuemax={100}>
          <div className="pg-ilerleme-dolgu" style={{ '--pg-oran': oran }} />
        </div>

        <label className="pg-kontrol-dugme" style={{ cursor: 'pointer' }}>
          Hız
          <select
            value={hiz}
            onChange={(olay) => onHizDegis(Number(olay.target.value))}
            aria-label="Anlatım hızı"
            style={{ background: 'transparent', color: 'inherit', border: 0, fontWeight: 700 }}
          >
            {HIZLAR.map((deger) => (
              <option key={deger} value={deger} style={{ color: '#111' }}>{deger}×</option>
            ))}
          </select>
        </label>

        <button
          type="button"
          className="pg-kontrol-dugme"
          onClick={onSesDegis}
          disabled={!sesVar}
          title={sesVar ? 'Sesi aç/kapat' : 'Sesli anlatım henüz eklenmedi'}
          aria-label={sesAcik ? 'Sesi kapat' : 'Sesi aç'}
        >
          {sesAcik && sesVar ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </button>
      </div>
    </div>
  )
}

const BOLUM_ADLARI = {
  intro: 'Giriş',
  reign: 'Hükümdarlık',
  event: 'Dönüm noktası',
  transition: 'Devir',
}
