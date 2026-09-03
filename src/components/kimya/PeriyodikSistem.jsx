import { useEffect, useMemo, useRef, useState } from 'react'
import { Atom, Filter, Info, X } from 'lucide-react'
import {
  ELEMENTLER, KATEGORILER, KATEGORI_SOZLUGU, HAL_ADI, izgaraKonumu,
} from '../../data/kimya/elementler.js'
import BohrModeli from './BohrModeli.jsx'

/** Süzgeçler — her biri bir eleme kuralıdır. */
const SUZGECLER = [
  { kod: 'metal', ad: 'Metal', sina: (e) => ['alkali', 'toprakAlkali', 'gecis', 'metal', 'lantanit', 'aktinit'].includes(e.kategori) },
  { kod: 'ametal', ad: 'Ametal', sina: (e) => ['ametal', 'halojen', 'soyGaz'].includes(e.kategori) },
  { kod: 'yariMetal', ad: 'Yarı metal', sina: (e) => e.kategori === 'yariMetal' },
  { kod: 'soyGaz', ad: 'Soy gaz', sina: (e) => e.kategori === 'soyGaz' },
  { kod: 'halojen', ad: 'Halojen', sina: (e) => e.kategori === 'halojen' },
  { kod: 'alkali', ad: 'Alkali metal', sina: (e) => e.kategori === 'alkali' },
  { kod: 'toprakAlkali', ad: 'Toprak alkali', sina: (e) => e.kategori === 'toprakAlkali' },
  { kod: 'kati', ad: 'Katı', sina: (e) => e.hal === 'kati' },
  { kod: 'sivi', ad: 'Sıvı', sina: (e) => e.hal === 'sivi' },
  { kod: 'gaz', ad: 'Gaz', sina: (e) => e.hal === 'gaz' },
]

/** Değerlik elektronlarını hücrenin çevresine nokta olarak çizer. */
function DegerlikNoktalari({ element }) {
  if (element.kategori === 'gecis' || element.kategori === 'lantanit' || element.kategori === 'aktinit') return null
  const sayi = Math.min(8, element.degerlik)
  const yerler = [
    { x: 50, y: 7 }, { x: 50, y: 93 }, { x: 7, y: 50 }, { x: 93, y: 50 },
    { x: 42, y: 7 }, { x: 42, y: 93 }, { x: 7, y: 42 }, { x: 93, y: 42 },
  ]
  return (
    <svg className="degerlik-nokta" viewBox="0 0 100 100" aria-hidden="true">
      {yerler.slice(0, sayi).map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="4.5" fill="currentColor" opacity="0.85" />
      ))}
    </svg>
  )
}

export function ElementHucre({ element, secili, sonuk, onSec, degerlikGoster }) {
  const kategori = KATEGORI_SOZLUGU[element.kategori]
  return (
    <button
      type="button"
      className={`ka-element ${secili ? 'secili' : ''} ${sonuk ? 'sonuk' : ''}`}
      style={{
        gridColumn: izgaraKonumu(element).sutun,
        gridRow: izgaraKonumu(element).satir,
        '--ka-el-renk': kategori.renk,
        '--ka-el-metin': kategori.metin,
        background: kategori.renk,
        color: kategori.metin,
      }}
      onClick={() => onSec(element)}
      aria-pressed={secili}
      title={`${element.ad} — ${kategori.ad}`}
      aria-label={`${element.sembol}, ${element.ad}, atom numarası ${element.atomNo}`}
    >
      <span className="no">{element.atomNo}</span>
      <span className="sem">{element.sembol}</span>
      <span className="ad">{element.ad}</span>
      <span className="kutle">{typeof element.kutle === 'number' ? element.kutle.toFixed(element.kutle < 100 ? 2 : 1) : element.kutle}</span>
      {degerlikGoster && <DegerlikNoktalari element={element} />}
    </button>
  )
}

function ElementPaneli({ element, onKapat }) {
  const kategori = KATEGORI_SOZLUGU[element.kategori]
  const satirlar = [
    ['Atom numarası', element.atomNo],
    ['Proton sayısı', element.atomNo],
    ['Elektron sayısı (nötr atom)', element.atomNo],
    ['Nötron sayısı', `${element.notron} (kütle numarası ${element.kutleNo} olan yaygın izotopta)`],
    ['Bağıl atom kütlesi', typeof element.kutle === 'number' ? String(element.kutle).replace('.', ',') : element.kutle],
    ['Grup', element.grup ?? (element.kategori === 'lantanit' ? 'Lantanitler' : 'Aktinitler')],
    ['Periyot', element.periyot],
    ['Kategori', kategori.ad],
    ['Blok', `${element.blok} bloğu`],
    ['Normal koşullarda hâli', HAL_ADI[element.hal]],
    ['Elektronegatiflik (Pauling)', element.elektronegatiflik != null ? String(element.elektronegatiflik).replace('.', ',') : 'Tanımlı değil'],
    ['Yaygın yükseltgenme basamakları', element.yukseltgenme.length ? element.yukseltgenme.join(', ') : 'Bilinmiyor'],
  ]

  return (
    <div className="ka-kart ka-element-panel">
      <div className="ka-element-basi">
        <div className="ka-element-kutu" style={{ background: kategori.renk, color: kategori.metin }}>
          <span className="no">{element.atomNo}</span>
          <span className="sem">{element.sembol}</span>
        </div>
        <div style={{ minWidth: 0 }}>
          <h3 style={{ fontSize: 21 }}>{element.ad}</h3>
          <span className="ka-rozet" style={{ marginTop: 5, background: `${kategori.renk}22`, color: kategori.renk, borderColor: `${kategori.renk}55` }}>
            {kategori.ad}
          </span>
        </div>
        {onKapat && (
          <button type="button" className="ka-ikon-dugme" style={{ marginLeft: 'auto' }} onClick={onKapat} aria-label="Paneli kapat">
            <X size={16} />
          </button>
        )}
      </div>

      <div className="ka-veri-kutu vurgulu" style={{ marginBottom: 12 }}>
        <dt>Elektron dizilimi</dt>
        <dd className="ka-dizilim" style={{ fontSize: 13.5, fontWeight: 600 }}>{element.dizilimMetni}</dd>
      </div>

      <div className="ka-veri-izgara" style={{ marginBottom: 12 }}>
        <div className="ka-veri-kutu">
          <dt>Katman dağılımı</dt>
          <dd>{element.katmanlar.join(' , ')}</dd>
        </div>
        <div className="ka-veri-kutu">
          <dt>Değerlik elektronu</dt>
          <dd>{element.degerlik}</dd>
        </div>
        {element.bagEgilimi.sayi != null && (
          <div className="ka-veri-kutu">
            <dt>Genel bağ eğilimi</dt>
            <dd>{element.bagEgilimi.sayi === 0 ? 'Bağ yapmaz' : `${element.bagEgilimi.sayi} bağ`}</dd>
          </div>
        )}
      </div>

      <div className="ka-not" style={{ marginBottom: 14 }}>
        <Info size={15} />
        <span>{element.bagEgilimi.aciklama}</span>
      </div>

      <dl style={{ margin: 0 }}>
        {satirlar.map(([ad, deger]) => (
          <div className="ka-ozellik-satir" key={ad}>
            <dt>{ad}</dt>
            <dd>{deger}</dd>
          </div>
        ))}
      </dl>

      <div className="ka-ust-etiket" style={{ marginTop: 18 }}><Atom size={13} /> Bohr atom modeli</div>
      <BohrModeli element={element} boyut={260} />
      <p className="ka-sessiz" style={{ marginTop: 4 }}>
        Bohr modeli elektronların gerçekte nasıl hareket ettiğini göstermez; katman dağılımını
        anlamak için kullanılan tarihsel bir modeldir. Gerçekte elektronlar orbital adı verilen
        bulunma olasılığı yüksek bölgelerde bulunur.
      </p>
    </div>
  )
}

export default function PeriyodikSistem({ baslangicElement = null, onFormulSec }) {
  const [secili, setSecili] = useState(baslangicElement ?? ELEMENTLER[7])
  const [suzgecler, setSuzgecler] = useState([])
  const [degerlikGoster, setDegerlikGoster] = useState(false)
  const panelRef = useRef(null)

  useEffect(() => {
    if (baslangicElement) {
      setSecili(baslangicElement)
      panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }
  }, [baslangicElement])

  const etkinSuzgecler = useMemo(() => SUZGECLER.filter((s) => suzgecler.includes(s.kod)), [suzgecler])

  const sonukMu = (element) => etkinSuzgecler.length > 0 && !etkinSuzgecler.some((s) => s.sina(element))

  const suzgeciDegistir = (kod) => {
    setSuzgecler((mevcut) => (mevcut.includes(kod) ? mevcut.filter((k) => k !== kod) : [...mevcut, kod]))
  }

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 3</div>
        <h2>Etkileşimli Periyodik Sistem</h2>
        <p>118 elementin tamamı. Bir elemente tıkla; elektron dizilimi, katman dağılımı, değerlik elektronu ve Bohr modeli sağdaki panelde açılır.</p>
      </div>

      <div className="ka-kart" style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, flexWrap: 'wrap' }}>
          <Filter size={15} style={{ color: 'rgb(var(--ka-metin-3))' }} />
          <span className="ka-ust-etiket" style={{ margin: 0 }}>Süzgeçler</span>
          {suzgecler.length > 0 && (
            <button type="button" className="ka-dugme kucuk sade" onClick={() => setSuzgecler([])}>Temizle</button>
          )}
          <button
            type="button"
            className={`ka-dugme kucuk ${degerlikGoster ? 'secili' : ''}`}
            style={{ marginLeft: 'auto' }}
            onClick={() => setDegerlikGoster((d) => !d)}
            aria-pressed={degerlikGoster}
          >
            Bağ kurma eğilimini göster
          </button>
        </div>
        <div className="ka-periyodik-anahtar">
          {SUZGECLER.map((s) => (
            <button
              key={s.kod}
              type="button"
              className={`ka-anahtar-oge ${suzgecler.includes(s.kod) ? 'etkin' : ''}`}
              onClick={() => suzgeciDegistir(s.kod)}
              aria-pressed={suzgecler.includes(s.kod)}
            >
              {s.ad}
            </button>
          ))}
        </div>
        {degerlikGoster && (
          <div className="ka-not" style={{ marginTop: 10 }}>
            <Info size={15} />
            <span>
              Hücrelerdeki noktalar <strong>değerlik elektronu</strong> sayısını gösterir. Baş gruplarda
              bu sayı, elementin kaç bağ yapmaya eğilimli olduğunu belirler. Geçiş metallerinde
              değerlik elektronları d orbitallerini de kapsadığı için nokta gösterimi kullanılmaz.
            </span>
          </div>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 16 }}>
        <div className="ka-kart">
          <div className="ka-periyodik-sarmal">
            <div className="ka-periyodik">
              {ELEMENTLER.map((element) => (
                <ElementHucre
                  key={element.atomNo}
                  element={element}
                  secili={secili?.atomNo === element.atomNo}
                  sonuk={sonukMu(element)}
                  onSec={setSecili}
                  degerlikGoster={degerlikGoster}
                />
              ))}
              <div className="ka-fblok-etiket" style={{ gridRow: 9 }}>57–71<br />Lantanitler</div>
              <div className="ka-fblok-etiket" style={{ gridRow: 10 }}>89–103<br />Aktinitler</div>
            </div>
          </div>

          <div className="ka-periyodik-anahtar" style={{ marginTop: 12 }}>
            {KATEGORILER.map((k) => (
              <span key={k.kod} className="ka-anahtar-oge" style={{ cursor: 'default' }}>
                <span className="ka-anahtar-nokta" style={{ background: k.renk }} />
                {k.ad}
              </span>
            ))}
          </div>
        </div>

        <div ref={panelRef}>
          {secili && <ElementPaneli element={secili} />}
        </div>
      </div>
    </section>
  )
}
