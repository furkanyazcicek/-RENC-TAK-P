import { lazy, Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/anasayfa-atlas-onizlemeleri.css'
import {
  ArrowRight,
  Atom,
  BookOpenCheck,
  Bot,
  Check,
  ChevronRight,
  Dna,
  Earth,
  FlaskConical,
  Landmark,
  Map,
  ScanText,
  Sparkles,
} from 'lucide-react'

const HistoryMapPreview = lazy(() => import('./HistoryMapPreview'))
const ATLAS_ONIZLEMELERI = {
  fizik: lazy(() => import('./FizikOnizleme')),
  kimya: lazy(() => import('./KimyaOnizleme')),
  cografya: lazy(() => import('./CografyaOnizleme')),
  biyoloji: lazy(() => import('./BiyolojiOnizleme')),
  tarih: HistoryMapPreview,
}

const SAHNE_IKONLARI = {
  atlaslar: Map,
  notlar: BookOpenCheck,
  'soru-coz': ScanText,
  'ai-koc': Sparkles,
}

const ATLAS_DERSLERI = [
  {
    id: 'fizik',
    etiket: 'Fizik',
    Icon: Atom,
  },
  {
    id: 'kimya',
    etiket: 'Kimya',
    Icon: FlaskConical,
  },
  {
    id: 'biyoloji',
    etiket: 'Biyoloji',
    Icon: Dna,
  },
  {
    id: 'cografya',
    etiket: 'Coğrafya',
    Icon: Earth,
  },
  {
    id: 'tarih',
    etiket: 'Tarih',
    Icon: Landmark,
  },
]

const NOT_KAVRAMLARI = [
  {
    id: 'difüzyon',
    etiket: 'Basit difüzyon',
    enerji: 'ATP kullanılmaz',
    yon: 'Çok yoğun ortamdan az yoğuna',
  },
  {
    id: 'kolaylastirilmis',
    etiket: 'Kolaylaştırılmış',
    enerji: 'ATP kullanılmaz',
    yon: 'Taşıyıcı protein üzerinden az yoğuna',
  },
  {
    id: 'aktif',
    etiket: 'Aktif taşıma',
    enerji: 'ATP kullanılır',
    yon: 'Az yoğun ortamdan çok yoğuna',
  },
]

const SORU_ADIMLARI = [
  {
    etiket: 'Verileni ayır',
    baslik: 'Denklemde bilinmeyeni yalnız bırakacağız.',
    aciklama: '2x + 5 = 17 denkleminde önce sabit terimi iki taraftan da çıkar.',
    ifade: '2x = 12',
  },
  {
    etiket: 'Yöntemi uygula',
    baslik: 'Her iki tarafı bilinmeyenin katsayısına böl.',
    aciklama: 'Eşitliği korumak için iki tarafı da 2’ye böl.',
    ifade: 'x = 6',
  },
  {
    etiket: 'Sonucu kontrol et',
    baslik: 'Bulduğun değeri ilk denklemde yerine koy.',
    aciklama: '2 · 6 + 5 ifadesi 17’ye eşittir; çözüm doğrulandı.',
    ifade: '17 = 17 ✓',
  },
]

const KOC_ODAKLARI = [
  {
    id: 'matematik',
    etiket: 'Matematik',
    ozet: 'Fonksiyonlar ve problemler',
    adimlar: ['25 dk fonksiyonlar', '15 soru problemler', 'Yanlış nedenini tek cümleyle yaz'],
  },
  {
    id: 'fen',
    etiket: 'Fen',
    ozet: 'Basınç ve enerji dönüşümleri',
    adimlar: ['12 dk konu tekrarı', '10 yeni nesil soru', 'Atlas deneyini bir kez çalıştır'],
  },
  {
    id: 'turkce',
    etiket: 'Türkçe',
    ozet: 'Paragrafta ana düşünce',
    adimlar: ['20 dk süreli paragraf', 'Boşları yeniden çöz', 'İki hata kalıbını not et'],
  },
]

function AtlasScene() {
  const [dersId, setDersId] = useState('fizik')
  const Onizleme = ATLAS_ONIZLEMELERI[dersId]
  return <div className="editorial-demo editorial-demo--atlas">
    <div className="editorial-demo__toolbar" aria-label="Atlas dersi seç">
      {ATLAS_DERSLERI.map(({ id, etiket, Icon }) => <button key={id} type="button" aria-pressed={dersId === id} onClick={() => setDersId(id)} className="editorial-demo-chip focus-ring"><Icon aria-hidden="true" />{etiket}</button>)}
    </div>
    <Suspense fallback={<p className="atlas-sample__loading" role="status">{ATLAS_DERSLERI.find((d) => d.id === dersId)?.etiket} deneyi hazırlanıyor…</p>}>
      <Onizleme />
    </Suspense>
  </div>
}

function NoteScene() {
  const [kavramId, setKavramId] = useState('difüzyon')
  const kavram = NOT_KAVRAMLARI.find((item) => item.id === kavramId) ?? NOT_KAVRAMLARI[0]

  return (
    <div className="editorial-demo editorial-demo--note">
      <div className="editorial-note-heading">
        <div>
          <span className="editorial-demo-kicker">9. sınıf · Biyoloji</span>
          <h3>Hücre zarından madde geçişleri</h3>
        </div>
        <span className="editorial-note-duration">12 dakikalık etkileşim</span>
      </div>

      <div className="editorial-note-layout">
        <div className={`editorial-membrane editorial-membrane--${kavram.id}`} aria-hidden="true">
          <span className="editorial-membrane__side editorial-membrane__side--top">Hücre dışı</span>
          <span className="editorial-membrane__layer editorial-membrane__layer--top" />
          <span className="editorial-membrane__layer editorial-membrane__layer--bottom" />
          <span className="editorial-membrane__protein" />
          <span className="editorial-membrane__particle editorial-membrane__particle--one" />
          <span className="editorial-membrane__particle editorial-membrane__particle--two" />
          <span className="editorial-membrane__particle editorial-membrane__particle--three" />
          <span className="editorial-membrane__arrow">{kavram.id === 'aktif' ? '↑' : '↓'}</span>
          {kavram.id === 'aktif' && <span className="editorial-membrane__atp">ATP</span>}
          <span className="editorial-membrane__side editorial-membrane__side--bottom">Hücre içi</span>
        </div>

        <div className="editorial-note-controls">
          {NOT_KAVRAMLARI.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={kavramId === item.id}
              onClick={() => setKavramId(item.id)}
              className="editorial-note-option focus-ring"
            >
              <span>{item.etiket}</span>
              <ChevronRight aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>

      <div className="editorial-note-result" aria-live="polite">
        <span><b>Enerji:</b> {kavram.enerji}</span>
        <span><b>Yön:</b> {kavram.yon}</span>
      </div>
    </div>
  )
}

function SolveScene() {
  const [adim, setAdim] = useState(0)
  const aktif = SORU_ADIMLARI[adim]

  return (
    <div className="editorial-demo editorial-demo--solve">
      <div className="editorial-solve-layout">
        <div className="editorial-question-sheet">
          <span className="editorial-demo-kicker">Örnek soru · Denklem</span>
          <p>2x + 5 = 17 olduğuna göre x kaçtır?</p>
          <div className="editorial-question-options" aria-hidden="true">
            {['4', '5', '6', '7'].map((option) => <span key={option}>{option}</span>)}
          </div>
          <small>Bu yerel önizleme hiçbir hesaba kaydedilmez.</small>
        </div>

        <div className="editorial-solution-board">
          <div className="editorial-solution-board__top">
            <span>Çözüm yolu</span>
            <span className="tabular-nums">{adim + 1} / {SORU_ADIMLARI.length}</span>
          </div>
          <div className="editorial-solution-board__content" aria-live="polite">
            <span className="editorial-demo-kicker">{aktif.etiket}</span>
            <h3>{aktif.baslik}</h3>
            <p>{aktif.aciklama}</p>
            <strong className="tabular-nums">{aktif.ifade}</strong>
          </div>
          <div className="editorial-solution-steps" aria-label="Çözüm adımı seç">
            {SORU_ADIMLARI.map((item, index) => (
              <button
                key={item.etiket}
                type="button"
                aria-label={`${index + 1}. adım: ${item.etiket}`}
                aria-pressed={adim === index}
                onClick={() => setAdim(index)}
                className="focus-ring"
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function CoachScene() {
  const [odakId, setOdakId] = useState('matematik')
  const odak = KOC_ODAKLARI.find((item) => item.id === odakId) ?? KOC_ODAKLARI[0]

  return (
    <div className="editorial-demo editorial-demo--coach">
      <div className="editorial-coach-layout">
        <div className="editorial-coach-dialogue">
          <span className="editorial-demo-kicker">Örnek çalışma senaryosu</span>
          <div className="editorial-coach-message editorial-coach-message--student">
            Bugün ilk olarak ne yapmalıyım?
          </div>
          <div className="editorial-coach-message editorial-coach-message--coach">
            <Bot aria-hidden="true" />
            <span>
              <b>{odak.ozet}</b>
              Son kayıtlarına göre bugünkü kısa rotanı hazırladım.
            </span>
          </div>
        </div>

        <div className="editorial-route-panel">
          <div className="editorial-route-panel__top">
            <div>
              <span className="editorial-demo-kicker">Bugünkü rota</span>
              <h3>{odak.etiket}</h3>
            </div>
            <span className="editorial-route-time">45–55 dk</span>
          </div>
          <div className="editorial-route-focus" aria-label="Çalışma odağı seç">
            {KOC_ODAKLARI.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={odakId === item.id}
                onClick={() => setOdakId(item.id)}
                className="focus-ring"
              >
                {item.etiket}
              </button>
            ))}
          </div>
          <ol aria-live="polite">
            {odak.adimlar.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

function SahneIcerigi({ id }) {
  if (id === 'notlar') return <NoteScene />
  if (id === 'soru-coz') return <SolveScene />
  if (id === 'ai-koc') return <CoachScene />
  return <AtlasScene />
}

export default function InteractiveLearningStage({ sahneler, baslik, yardim }) {
  const [aktifId, setAktifId] = useState(sahneler[0]?.id)
  const sekmeRefleri = useRef([])
  const aktifSahne = sahneler.find((item) => item.id === aktifId) ?? sahneler[0]

  function klavyeSecimi(event, index) {
    const tuslar = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
    if (!tuslar.includes(event.key)) return
    event.preventDefault()

    let yeniIndex = index
    if (event.key === 'ArrowRight') yeniIndex = (index + 1) % sahneler.length
    if (event.key === 'ArrowLeft') yeniIndex = (index - 1 + sahneler.length) % sahneler.length
    if (event.key === 'Home') yeniIndex = 0
    if (event.key === 'End') yeniIndex = sahneler.length - 1

    setAktifId(sahneler[yeniIndex].id)
    sekmeRefleri.current[yeniIndex]?.focus()
  }

  return (
    <div className="editorial-stage" id="deneyim">
      <div className="editorial-stage__titlebar">
        <div>
          <span className="editorial-stage__status"><i aria-hidden="true" /> Canlı ürün önizlemesi</span>
          <p>{baslik}</p>
        </div>
        <span className="editorial-stage__help">{yardim}</span>
      </div>

      <div className="editorial-stage__tabs" role="tablist" aria-label="Öğrenme deneyimleri">
        {sahneler.map((sahne, index) => {
          const Icon = SAHNE_IKONLARI[sahne.id] ?? Sparkles
          const selected = sahne.id === aktifSahne.id
          return (
            <button
              key={sahne.id}
              ref={(element) => { sekmeRefleri.current[index] = element }}
              type="button"
              role="tab"
              id={`ogrenme-sekmesi-${sahne.id}`}
              aria-selected={selected}
              aria-controls={`ogrenme-paneli-${sahne.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setAktifId(sahne.id)}
              onKeyDown={(event) => klavyeSecimi(event, index)}
              className="editorial-stage-tab focus-ring"
            >
              <span>{sahne.sira}</span>
              <Icon aria-hidden="true" />
              {sahne.sekme}
            </button>
          )
        })}
      </div>

      <div
        key={aktifSahne.id}
        id={`ogrenme-paneli-${aktifSahne.id}`}
        role="tabpanel"
        aria-labelledby={`ogrenme-sekmesi-${aktifSahne.id}`}
        className="editorial-stage__panel"
      >
        <div className="editorial-stage__summary">
          <div>
            <span>{aktifSahne.etiket}</span>
            <h2>{aktifSahne.baslik}</h2>
            <p>{aktifSahne.aciklama}</p>
          </div>
          <div className="editorial-stage__proof">
            <span>{aktifSahne.erisimNotu}</span>
            <p>{aktifSahne.kanit}</p>
            {aktifSahne.id !== 'atlaslar' && <Link to={aktifSahne.hedef} className="focus-ring">
              {aktifSahne.cta}
              <ArrowRight aria-hidden="true" />
            </Link>}
          </div>
        </div>

        <SahneIcerigi id={aktifSahne.id} />
      </div>
    </div>
  )
}
