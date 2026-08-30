import {
  ChevronLeft, ChevronRight, ExternalLink, Layers3, LocateFixed, Map,
  Minus, MousePointer2, Plus,
} from 'lucide-react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { bolgeBul } from '../../data/cografya/bolgeler.js'
import { bolgeSahnesi } from '../../data/cografya/gorseller.js'
import { bolgeEtkilesimleri } from '../../data/cografya/kapsam.js'
import BolgeCizimi from './BolgeCizimi.jsx'

const SINIRLA = (deger, alt, ust) => Math.min(ust, Math.max(alt, deger))

/*
 * Noktalar, fotoğraf koordinatı değil; her konu çiziminin kendi
 * 320×168 öğretim yüzeyine yerleştirilmiş bağlamsal konumlardır.
 * Bu sayede katman değiştiğinde işaret, anlattığı şemanın yanında kalır.
 */
const KONU_NOKTALARI = {
  sistemler: [[31, 35], [45, 67], [19, 47], [47, 82], [83, 31], [77, 75]],
  gezegen: [[73, 29], [87, 50], [74, 50], [61, 36], [73, 72], [83, 87]],
  konum: [[25, 31], [47, 31], [73, 28], [86, 48], [73, 66], [89, 66]],
  'harita-bilgisi': [[28, 27], [28, 67], [46, 45], [70, 65], [77, 29], [87, 61]],
  iklim: [[17, 42], [39, 55], [34, 37], [48, 28], [58, 47], [77, 69]],
  yerkure: [[23, 39], [39, 31], [60, 31], [70, 51], [80, 66], [91, 75]],
  'yasam-kusaklari': [[24, 36], [43, 54], [65, 32], [72, 63], [83, 31], [89, 69]],
  nufus: [[22, 68], [40, 61], [64, 27], [78, 44], [68, 70], [89, 71]],
  yerlesme: [[24, 58], [43, 38], [66, 32], [82, 47], [66, 70], [87, 72]],
  ekonomi: [[19, 52], [40, 42], [64, 28], [82, 41], [67, 70], [88, 67]],
  afet: [[22, 52], [42, 38], [64, 30], [82, 48], [67, 72], [88, 70]],
  pusula: [[25, 45], [41, 67], [64, 30], [82, 43], [67, 72], [88, 68]],
  kamp: [[21, 38], [40, 62], [63, 30], [81, 43], [67, 72], [88, 67]],
}

function noktaKonumu(bolgeKod, sahne, odak) {
  const sira = sahne.odaklar.findIndex((oge) => oge.id === odak.id)
  const tanimli = KONU_NOKTALARI[bolgeKod]?.[sira]
  if (tanimli) return { x: tanimli[0], y: tanimli[1] }
  return { x: SINIRLA(odak.x, 10, 90), y: SINIRLA(odak.y, 13, 87) }
}

export default function KonuHaritaYuzeyi({ bolgeKod, onEtkilesimSec }) {
  const sahne = useMemo(() => bolgeSahnesi(bolgeKod), [bolgeKod])
  const bolge = bolgeBul(bolgeKod)
  const etkilesimler = useMemo(() => bolgeEtkilesimleri(bolgeKod), [bolgeKod])
  const [katman, setKatman] = useState(sahne.ilkKatman)
  const [odakId, setOdakId] = useState(null)
  const [yakinlik, setYakinlik] = useState(1)
  const [kaydirma, setKaydirma] = useState({ x: 0, y: 0 })
  const surukleme = useRef(null)

  const odaklar = useMemo(
    () => sahne.odaklar.filter((odak) => odak.katman === katman),
    [katman, sahne],
  )
  const seciliKatman = sahne.katmanlar.find((oge) => oge.id === katman) ?? sahne.katmanlar[0]
  const seciliSira = odaklar.findIndex((odak) => odak.id === odakId)
  const seciliOdak = seciliSira >= 0 ? odaklar[seciliSira] : null
  const katmanSirasi = Math.max(0, sahne.katmanlar.findIndex((oge) => oge.id === katman))
  const ilgiliEtkilesim = etkilesimler.length
    ? etkilesimler[Math.min(katmanSirasi, etkilesimler.length - 1)]
    : null

  useEffect(() => {
    setKatman(sahne.ilkKatman)
    setOdakId(null)
    setYakinlik(1)
    setKaydirma({ x: 0, y: 0 })
  }, [sahne.ilkKatman, sahne.kod])

  const gorunumuSifirla = useCallback(() => {
    setYakinlik(1)
    setKaydirma({ x: 0, y: 0 })
  }, [])

  const katmanSec = (id) => {
    setKatman(id)
    setOdakId(null)
    setKaydirma({ x: 0, y: 0 })
  }

  const odakKaydir = useCallback((yon) => {
    if (!odaklar.length) return
    const mevcut = seciliSira >= 0 ? seciliSira : 0
    const yeni = (mevcut + yon + odaklar.length) % odaklar.length
    setOdakId(odaklar[yeni].id)
  }, [odaklar, seciliSira])

  const suruklemeBaslat = (olay) => {
    if (olay.pointerType === 'touch' || olay.target.closest('button')) return
    olay.currentTarget.setPointerCapture?.(olay.pointerId)
    surukleme.current = {
      pointerId: olay.pointerId,
      baslangicX: olay.clientX,
      baslangicY: olay.clientY,
      kaydirmaX: kaydirma.x,
      kaydirmaY: kaydirma.y,
    }
    olay.currentTarget.dataset.surukleniyor = 'true'
  }

  const surukle = (olay) => {
    if (!surukleme.current || surukleme.current.pointerId !== olay.pointerId) return
    const x = surukleme.current.kaydirmaX + olay.clientX - surukleme.current.baslangicX
    const y = surukleme.current.kaydirmaY + olay.clientY - surukleme.current.baslangicY
    const sinir = 72 * yakinlik
    setKaydirma({ x: SINIRLA(x, -sinir, sinir), y: SINIRLA(y, -sinir, sinir) })
  }

  const suruklemeBitir = (olay) => {
    if (!surukleme.current || surukleme.current.pointerId !== olay.pointerId) return
    surukleme.current = null
    delete olay.currentTarget.dataset.surukleniyor
  }

  const yakinlastir = (fark) => {
    setYakinlik((deger) => {
      const yeni = SINIRLA(Number((deger + fark).toFixed(2)), 1, 1.8)
      if (yeni === 1) setKaydirma({ x: 0, y: 0 })
      return yeni
    })
  }

  return (
    <section
      className="ca-konu-haritasi"
      style={{ '--bolge-renk': bolge?.renk ?? 'var(--ca-vurgu)' }}
      aria-labelledby="ca-konu-harita-baslik"
    >
      <header className="ca-konu-harita-ust">
        <div>
          <span><Map aria-hidden="true" /> Etkileşimli 2B konu haritası</span>
          <h2 id="ca-konu-harita-baslik">{sahne.baslik}</h2>
          <p>{bolge?.ad} için katmanı seç, işaretli kanıtı incele ve ilişkiyi laboratuvarda sına.</p>
        </div>
        <div className="ca-konu-katmanlar" role="group" aria-label="Konu haritası katmanları">
          {sahne.katmanlar.map((oge) => (
            <button
              type="button"
              key={oge.id}
              aria-pressed={katman === oge.id}
              onClick={() => katmanSec(oge.id)}
            >
              <Layers3 aria-hidden="true" />
              <span>{oge.ad}</span>
            </button>
          ))}
        </div>
      </header>

      <div className="ca-konu-harita-govde">
        <div
          className="ca-konu-harita-tuval"
          data-katman-sirasi={katmanSirasi}
          onPointerDown={suruklemeBaslat}
          onPointerMove={surukle}
          onPointerUp={suruklemeBitir}
          onPointerCancel={suruklemeBitir}
          aria-label={`${seciliKatman.ad} katmanını gösteren sürüklenebilir konu haritası`}
        >
          <div
            className="ca-konu-harita-kadraj"
            style={{
              '--konu-zoom': yakinlik,
              '--konu-x': `${kaydirma.x}px`,
              '--konu-y': `${kaydirma.y}px`,
            }}
          >
            <BolgeCizimi kod={bolgeKod} renk={bolge?.renk} sinif="ca-konu-harita-cizim" />
            <div className="ca-konu-harita-vurgu" aria-hidden="true" />
            {odaklar.map((odak, index) => {
              const konum = noktaKonumu(bolgeKod, sahne, odak)
              return (
                <button
                  type="button"
                  key={odak.id}
                  className={`ca-konu-harita-nokta ${odakId === odak.id ? 'etkin' : ''}`}
                  style={{ left: `${konum.x}%`, top: `${konum.y}%` }}
                  aria-label={`${index + 1}. kanıt: ${odak.baslik}`}
                  aria-pressed={odakId === odak.id}
                  onClick={() => setOdakId(odak.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </button>
              )
            })}
          </div>

          <div className="ca-konu-harita-zoom" role="group" aria-label="Harita yakınlaştırma">
            <button type="button" onClick={() => yakinlastir(0.2)} disabled={yakinlik >= 1.8} aria-label="Yakınlaştır"><Plus /></button>
            <button type="button" onClick={() => yakinlastir(-0.2)} disabled={yakinlik <= 1} aria-label="Uzaklaştır"><Minus /></button>
            <button type="button" onClick={gorunumuSifirla} aria-label="Haritayı sıfırla"><LocateFixed /></button>
          </div>
          <p className="ca-konu-harita-ipucu"><MousePointer2 /> İşarete dokun · masaüstünde haritayı sürükle</p>
        </div>

        <aside className="ca-konu-harita-bilgi" aria-live="polite">
          <div className="ca-konu-harita-katman-bilgi">
            <small>{seciliKatman.ad} katmanı</small>
            <strong>{seciliKatman.aciklama}</strong>
          </div>

          {seciliOdak ? (
            <article>
              <span>Seçili kanıt · {String(seciliSira + 1).padStart(2, '0')}</span>
              <h3>{seciliOdak.baslik}</h3>
              <p>{seciliOdak.metin}</p>
              <div className="ca-konu-harita-gezinme">
                <button type="button" onClick={() => odakKaydir(-1)} aria-label="Önceki kanıt"><ChevronLeft /></button>
                <em>{seciliSira + 1} / {odaklar.length}</em>
                <button type="button" onClick={() => odakKaydir(1)} aria-label="Sonraki kanıt"><ChevronRight /></button>
              </div>
            </article>
          ) : (
            <div className="ca-konu-harita-bos">
              <LocateFixed aria-hidden="true" />
              <strong>Bir kanıt noktası seç</strong>
              <p>Haritadaki numaralar, bu katmanda okunması gereken iki ayrı mekânsal ipucunu gösterir.</p>
            </div>
          )}

          {ilgiliEtkilesim ? (
            <button
              type="button"
              className="ca-konu-harita-lab"
              onClick={() => onEtkilesimSec?.(ilgiliEtkilesim.id)}
            >
              <span><small>İlişkili laboratuvar</small>{ilgiliEtkilesim.baslik}</span>
              <ExternalLink aria-hidden="true" />
            </button>
          ) : null}
        </aside>
      </div>

      <footer className="ca-konu-harita-alt">
        <span><i aria-hidden="true" /> Seçili katman</span>
        <span><b>01–02</b> Etkileşimli kanıt</span>
        <em>Şematik öğretim haritası · gerçek koordinat, alan veya sınır iddiası taşımaz</em>
      </footer>
    </section>
  )
}
