import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
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
  RotateCcw,
  ScanText,
  Sparkles,
} from 'lucide-react'

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
    ust: 'Sabit ivmeli atış',
    deger: '45°',
    aciklama: 'Atış açısı değişince yörünge, vektör ve menzil birlikte güncellenir.',
  },
  {
    id: 'kimya',
    etiket: 'Kimya',
    Icon: FlaskConical,
    ust: 'Molekül geometrisi',
    deger: 'H₂O',
    aciklama: 'Bağlar ve elektron çiftleri seçildikçe molekülün uzaydaki biçimi görünür.',
  },
  {
    id: 'biyoloji',
    etiket: 'Biyoloji',
    Icon: Dna,
    ust: 'Yapı–işlev ilişkisi',
    deger: 'ATP',
    aciklama: 'Mitokondri katmanları açıldıkça enerji üretiminin nerede gerçekleştiği anlaşılır.',
  },
  {
    id: 'cografya',
    etiket: 'Coğrafya',
    Icon: Earth,
    ust: 'Araziyi okuma',
    deger: '1:100K',
    aciklama: 'Ölçek ve yükselti katmanları değiştikçe arazi ile harita arasındaki bağ kurulur.',
  },
  {
    id: 'tarih',
    etiket: 'Tarih',
    Icon: Landmark,
    ust: 'Zaman ve kaynak',
    deger: '1453',
    aciklama: 'Seçili yıl, kaynak yılı ve belirsizlik aynı bağlamda görünür kalır.',
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

const FIZIK_MODELI = {
  hiz: 20,
  yercekimi: 10,
}

function fizikDegerleriniHesapla(aci) {
  const radyan = (aci * Math.PI) / 180
  const { hiz, yercekimi } = FIZIK_MODELI
  const menzil = (hiz ** 2 * Math.sin(2 * radyan)) / yercekimi
  const tepe = (hiz ** 2 * Math.sin(radyan) ** 2) / (2 * yercekimi)
  const sure = (2 * hiz * Math.sin(radyan)) / yercekimi

  return {
    menzil,
    tepe,
    sure,
  }
}

function ondalik(deger) {
  return deger.toLocaleString('tr-TR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })
}

function ProjectileModel({ aci }) {
  const sonuc = fizikDegerleriniHesapla(aci)
  const baslangicX = 34
  const zeminY = 177
  const bitisX = baslangicX + (sonuc.menzil / 40) * 292
  const tepeX = (baslangicX + bitisX) / 2
  const tepeY = zeminY - (sonuc.tepe / 15) * 90
  const kontrolY = 2 * tepeY - zeminY
  const radyan = (aci * Math.PI) / 180
  const vektorX = baslangicX + Math.cos(radyan) * 72
  const vektorY = zeminY - Math.sin(radyan) * 72
  const aciklama = `${aci} derece atışta menzil ${ondalik(sonuc.menzil)} metre, tepe yüksekliği ${ondalik(sonuc.tepe)} metre ve uçuş süresi ${ondalik(sonuc.sure)} saniye.`

  return (
    <svg
      className="editorial-projectile"
      viewBox="0 0 360 220"
      role="img"
      aria-label={aciklama}
    >
      <defs>
        <marker id="editorial-projectile-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
          <path d="M0 0L8 4L0 8Z" />
        </marker>
      </defs>
      <path className="editorial-projectile__grid" d="M22 184H338M22 136H338M22 88H338M22 40H338M70 24V194M134 24V194M198 24V194M262 24V194M326 24V194" />
      <path
        className="editorial-projectile__curve"
        d={`M${baslangicX} ${zeminY}Q${tepeX} ${kontrolY} ${bitisX} ${zeminY}`}
      />
      <path
        className="editorial-projectile__vector"
        d={`M${baslangicX} ${zeminY}L${vektorX} ${vektorY}`}
        markerEnd="url(#editorial-projectile-arrow)"
      />
      <circle className="editorial-projectile__point" cx={tepeX} cy={tepeY} r="8" />
      <path className="editorial-projectile__range" d={`M${baslangicX} 196H${bitisX}`} />
      <path className="editorial-projectile__ground" d="M22 184H338" />
    </svg>
  )
}

function AtlasModel({ ders, aci }) {
  if (ders.id === 'kimya') {
    return (
      <div className="editorial-molecule" aria-hidden="true">
        <span className="editorial-atom editorial-atom--oxygen">O</span>
        <span className="editorial-bond editorial-bond--left" />
        <span className="editorial-bond editorial-bond--right" />
        <span className="editorial-atom editorial-atom--hydrogen editorial-atom--left">H</span>
        <span className="editorial-atom editorial-atom--hydrogen editorial-atom--right">H</span>
        <span className="editorial-electron editorial-electron--one" />
        <span className="editorial-electron editorial-electron--two" />
      </div>
    )
  }

  if (ders.id === 'biyoloji') {
    return (
      <div className="editorial-mito" aria-hidden="true">
        <span className="editorial-mito__fold editorial-mito__fold--one" />
        <span className="editorial-mito__fold editorial-mito__fold--two" />
        <span className="editorial-mito__fold editorial-mito__fold--three" />
        <span className="editorial-mito__pulse">ATP</span>
      </div>
    )
  }

  if (ders.id === 'cografya') {
    return (
      <svg className="editorial-contours" viewBox="0 0 320 200" aria-hidden="true">
        <path d="M18 145C55 98 83 126 118 83S190 36 224 70s58 20 78-12" />
        <path d="M20 166c45-40 73-18 112-60s70-56 102-23 49 28 70 5" />
        <path d="M34 186c38-24 73-7 112-46s65-42 96-12 43 31 64 17" />
        <circle cx="188" cy="79" r="9" />
        <path className="editorial-contours__route" d="M58 157c40-37 70-42 101-57 34-17 69-1 102-34" />
      </svg>
    )
  }

  if (ders.id === 'tarih') {
    return (
      <div className="editorial-timeline-model" aria-hidden="true">
        <span className="editorial-timeline-model__line" />
        <span className="editorial-timeline-model__point editorial-timeline-model__point--past">1451</span>
        <span className="editorial-timeline-model__point editorial-timeline-model__point--active">1453</span>
        <span className="editorial-timeline-model__point editorial-timeline-model__point--future">1456</span>
        <span className="editorial-timeline-model__source">Kaynak yılı görünür</span>
      </div>
    )
  }

  return <ProjectileModel aci={aci} />
}

function AtlasScene() {
  const [dersId, setDersId] = useState('fizik')
  const [atisAcisi, setAtisAcisi] = useState(45)
  const ders = ATLAS_DERSLERI.find((item) => item.id === dersId) ?? ATLAS_DERSLERI[0]
  const fizikSecili = ders.id === 'fizik'
  const fizikSonucu = fizikDegerleriniHesapla(atisAcisi)
  const fizikCikarimi = atisAcisi < 43
    ? 'Daha yatık atışta tepe ve uçuş süresi azalır; açı 45°’ye yaklaştıkça menzil uzar.'
    : atisAcisi > 47
      ? 'Daha dik atışta tepe ve uçuş süresi artar; 45°’ten uzaklaştıkça menzil kısalır.'
      : 'Bu modelde 45°, aynı ilk hız için en büyük yatay menzili verir.'

  return (
    <div className="editorial-demo editorial-demo--atlas">
      <div className="editorial-demo__toolbar" aria-label="Atlas dersi seç">
        {ATLAS_DERSLERI.map(({ id, etiket, Icon }) => (
          <button
            key={id}
            type="button"
            aria-pressed={dersId === id}
            onClick={() => setDersId(id)}
            className="editorial-demo-chip focus-ring"
          >
            <Icon aria-hidden="true" />
            {etiket}
          </button>
        ))}
      </div>

      <div className="editorial-atlas-layout">
        <div className={`editorial-atlas-canvas editorial-atlas-canvas--${ders.id}`}>
          <div className="editorial-atlas-canvas__meta">
            <span>{ders.ust}</span>
            <strong className="tabular-nums">{fizikSecili ? `${atisAcisi}°` : ders.deger}</strong>
          </div>
          <AtlasModel ders={ders} aci={atisAcisi} />
          <span className="editorial-atlas-canvas__gesture">
            <span aria-hidden="true">↔</span> {fizikSecili ? 'Açıyı değiştir' : 'Dersi değiştir'}
          </span>
        </div>
        <div
          className={`editorial-atlas-copy${fizikSecili ? ' editorial-atlas-copy--physics' : ''}`}
          aria-live={fizikSecili ? undefined : 'polite'}
        >
          <span className="editorial-demo-kicker">{ders.etiket} Atlası</span>
          <h3>{ders.ust}</h3>
          {fizikSecili ? (
            <>
              <div className="editorial-physics-control">
                <div className="editorial-physics-control__heading">
                  <label htmlFor="atlas-atis-acisi">Atış açısı</label>
                  <div>
                    <output htmlFor="atlas-atis-acisi" className="tabular-nums">{atisAcisi}°</output>
                    <button
                      type="button"
                      aria-label="Atış açısını 45 dereceye sıfırla"
                      disabled={atisAcisi === 45}
                      onClick={() => setAtisAcisi(45)}
                      className="focus-ring"
                    >
                      <RotateCcw aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <input
                  id="atlas-atis-acisi"
                  type="range"
                  min="25"
                  max="65"
                  step="1"
                  value={atisAcisi}
                  aria-describedby="atlas-fizik-varsayimi"
                  onInput={(event) => setAtisAcisi(Number(event.currentTarget.value))}
                />
                <div className="editorial-physics-control__limits" aria-hidden="true">
                  <span>25° · yatık</span>
                  <span>45° · menzil</span>
                  <span>65° · dik</span>
                </div>
              </div>

              <dl className="editorial-physics-results" aria-live="polite">
                <div><dt>Menzil</dt><dd className="tabular-nums">{ondalik(fizikSonucu.menzil)} m</dd></div>
                <div><dt>Tepe</dt><dd className="tabular-nums">{ondalik(fizikSonucu.tepe)} m</dd></div>
                <div><dt>Süre</dt><dd className="tabular-nums">{ondalik(fizikSonucu.sure)} sn</dd></div>
              </dl>

              <p className="editorial-physics-insight">{fizikCikarimi}</p>
              <small id="atlas-fizik-varsayimi" className="editorial-physics-assumption">
                Model: v₀ = 20 m/sn · g = 10 m/sn² · hava direnci yok
              </small>
            </>
          ) : (
            <>
              <p>{ders.aciklama}</p>
              <div className="editorial-model-status">
                <Check aria-hidden="true" />
                Eylem ve sonuç aynı sahnede
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
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
            <Link to={aktifSahne.hedef} className="focus-ring">
              {aktifSahne.cta}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <SahneIcerigi id={aktifSahne.id} />
      </div>
    </div>
  )
}
