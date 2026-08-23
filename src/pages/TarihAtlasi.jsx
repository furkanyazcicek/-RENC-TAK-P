import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ArrowLeft, Crown, Flag, Info, Layers3, Map as MapIcon, Minus, Plus, RotateCcw, Sparkles, TriangleAlert, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import maplibregl from 'maplibre-gl'
import { filterByDate } from '@openhistoricalmap/maplibre-gl-dates'
import 'maplibre-gl/dist/maplibre-gl.css'
import { TON_RENKLERI } from '../data/tarihAtlasi/devletSozlugu'
import { KILIT_TARIHLER } from '../data/tarihAtlasi/kilitTarihler'
import '../styles/tarih-atlasi.css'

/** OpenHistoricalMap altlığı — ücretsiz, anahtar gerektirmez, ticari kullanıma açık. */
const ALTLIK_STILI = 'https://www.openhistoricalmap.org/map-styles/main/main.json'

const BASLANGIC_YILI = 1453
const ILK_KONUM = { merkez: [28, 40], yakinlik: 4.2 }

/** Katman düğmeleri — hangi harita katmanlarını açıp kapattığı. */
const KATMANLAR = [
  { kod: 'devletler', ad: 'Devletler', haritaKatmanlari: ['atlas-dolgu', 'atlas-sinir'] },
  { kod: 'isimler', ad: 'Devlet adları', haritaKatmanlari: ['atlas-etiket'] },
  // Altlığın kendi yer adları dönemin özgün dilinde yazılıdır (Yunanca, Latince,
  // Kiril). Güzel bir ayrıntı ama karmaşık geldiğinde kapatılabilmeli.
  { kod: 'yerAdlari', ad: 'Dönemin yer adları', haritaKatmanlari: 'altlikEtiketleri' },
]

/** Renk eşlemesi — MapLibre'ın anlayacağı biçimde. */
const DOLGU_RENGI = ['match', ['get', 'ton'], ...Object.entries(TON_RENKLERI).flat(), TON_RENKLERI.diger]

/**
 * Zaman süzgeci — atlasın kalbi.
 * Yıl değiştiğinde yeni veri indirilmez; yalnızca bu kural güncellenir.
 */
function zamanSuzgeci(yil) {
  return ['all', ['<=', ['get', 'baslangic'], yil], ['>', ['get', 'bitis'], yil]]
}

/**
 * Yakınlaşma koreografisi: uzakta devletler öne çıkar, yaklaştıkça geri çekilip
 * altlığın tarihsel coğrafyasına yer açar.
 *
 * Renk hiçbir zaman tamamen kaybolmaz. Altlıkta her bölge için ayrıntılı veri
 * olmadığından, dolgu sıfırlanınca öğrenci bomboş bir haritada kalıyordu;
 * ince bir renk kalması "burası hangi devletin" sorusunu hep yanıtlar.
 */
const DOLGU_SAYDAMLIGI = [
  'interpolate', ['linear'], ['zoom'],
  0, ['case', ['>=', ['get', 'onem'], 2], 0.68, ['==', ['get', 'onem'], 1], 0.5, 0.32],
  5, ['case', ['>=', ['get', 'onem'], 2], 0.66, ['==', ['get', 'onem'], 1], 0.5, 0.32],
  6.5, 0.44,
  7.5, 0.3,
  9, 0.18,
]

/** Etiketler önem sırasına göre kademeli açılır, yakınlaşınca altlığa yerini bırakır. */
const ETIKET_SAYDAMLIGI = [
  'step', ['zoom'],
  ['case', ['==', ['get', 'onem'], 3], 1, 0],
  4.2, ['case', ['>=', ['get', 'onem'], 2], 1, 0],
  5.4, ['case', ['>=', ['get', 'onem'], 1], 1, 0],
  6.4, 1,
  // Çok yakında yalnızca merkez devletlerin adı kalır; gerisi altlığın
  // kendi yer adlarına yer bırakır.
  8.2, ['case', ['==', ['get', 'onem'], 3], 1, 0],
]

const ETIKET_BOYUTU = [
  'interpolate', ['linear'], ['zoom'],
  2, ['case', ['==', ['get', 'onem'], 3], 12, 9],
  5, ['case', ['==', ['get', 'onem'], 3], 17, ['==', ['get', 'onem'], 2], 13, 11],
  7.5, ['case', ['==', ['get', 'onem'], 3], 22, ['==', ['get', 'onem'], 2], 16, 13],
]

/** Etiketler ayrı bir nokta katmanından çizilir — poligon merkezi yerine seçilmiş konum. */
function etiketVerisiUret(donemVerisi) {
  return {
    type: 'FeatureCollection',
    features: donemVerisi.features.map((oz, sira) => ({
      type: 'Feature',
      id: sira,
      properties: {
        ad: oz.properties.ad,
        onem: oz.properties.onem,
        baslangic: oz.properties.baslangic,
        bitis: oz.properties.bitis,
      },
      geometry: { type: 'Point', coordinates: [oz.properties.etiketX, oz.properties.etiketY] },
    })),
  }
}

/** Seçilen yılı kapsayan dönemi bulur. */
function donemBul(meta, yil) {
  if (!meta) return null
  return meta.donemler.find((d) => d.yil <= yil && yil < d.bitis) || meta.donemler[meta.donemler.length - 1]
}

function AtlasLogosu() {
  return (
    <div className="atlas-marka" aria-label="Dr. Koç Tarih Atlası">
      <span className="atlas-marka-simge">DK</span>
      <span><b>Dr. Koç</b><small>Tarih Atlası</small></span>
    </div>
  )
}

/**
 * Zaman çizelgesi — sürükledikçe harita anında değişir.
 * Kilit tarihler nokta olarak durur; adı yalnızca üzerine gelince veya
 * seçiliyken açılır. Hepsini birden yazmak çizelgeyi okunmaz hale getiriyordu.
 */
function ZamanCizelgesi({ enAz, enCok, yil, yilDegisti }) {
  const [ustundeki, setUstundeki] = useState(null)
  const oran = (deger) => ((deger - enAz) / (enCok - enAz)) * 100

  const onlukler = useMemo(() => {
    const liste = []
    for (let y = Math.ceil(enAz / 100) * 100; y <= enCok; y += 100) liste.push(y)
    return liste
  }, [enAz, enCok])

  const secili = useMemo(() => KILIT_TARIHLER.find((olay) => olay.yil === yil), [yil])
  const gosterilen = ustundeki || secili

  return (
    <div className="atlas-cizelge">
      <div className="atlas-cizelge-baslik">
        {gosterilen ? (
          <>
            <b>{gosterilen.yil}</b>
            <strong>{gosterilen.ad}</strong>
            <span>{gosterilen.ozet}</span>
          </>
        ) : (
          <span className="atlas-cizelge-ipucu">
            Çizelgeyi sürükle veya bir olay noktasına dokun
          </span>
        )}
      </div>

      <div className="atlas-cizelge-olaylar">
        {KILIT_TARIHLER.map((olay) => (
          <button
            key={olay.yil}
            type="button"
            className={`atlas-olay${olay.yil === yil ? ' secili' : ''}`}
            style={{ left: `${oran(olay.yil)}%` }}
            onClick={() => yilDegisti(olay.yil)}
            onMouseEnter={() => setUstundeki(olay)}
            onMouseLeave={() => setUstundeki(null)}
            onFocus={() => setUstundeki(olay)}
            onBlur={() => setUstundeki(null)}
            title={`${olay.yil} · ${olay.ad}`}
            aria-label={`${olay.yil} ${olay.ad}`}
          />
        ))}
      </div>

      <div className="atlas-cizelge-cetvel" aria-hidden="true">
        {onlukler.map((y) => (
          <span key={y} style={{ left: `${oran(y)}%` }}>{y}</span>
        ))}
      </div>

      <input
        type="range"
        className="atlas-kaydirici"
        min={enAz}
        max={enCok}
        step={1}
        value={yil}
        onChange={(olay) => yilDegisti(Number(olay.target.value))}
        aria-label="Yıl seçici"
        aria-valuetext={`${yil} yılı`}
      />
    </div>
  )
}

function Harita({ acikKatmanlar, donemVerisi, secili, secimYapildi, yil }) {
  const kapsayiciRef = useRef(null)
  const haritaRef = useRef(null)
  const [durum, setDurum] = useState('yukleniyor')
  const [yakinlik, setYakinlik] = useState(ILK_KONUM.yakinlik)
  const bekleyenYil = useRef(yil)
  const cerceveRef = useRef(0)
  // Altlığın kendi yazı katmanları — stil yüklendikten sonra tespit edilir.
  const altlikEtiketleriRef = useRef([])

  const etiketVerisi = useMemo(() => etiketVerisiUret(donemVerisi), [donemVerisi])

  const haritayiSifirla = useCallback(() => {
    haritaRef.current?.flyTo({ center: ILK_KONUM.merkez, zoom: ILK_KONUM.yakinlik, duration: 700 })
  }, [])

  useEffect(() => {
    if (!kapsayiciRef.current || haritaRef.current) return undefined

    let harita
    try {
      harita = new maplibregl.Map({
        container: kapsayiciRef.current,
        style: ALTLIK_STILI,
        center: ILK_KONUM.merkez,
        zoom: ILK_KONUM.yakinlik,
        minZoom: 2,
        // Altlığın tarihsel verisi bunun ötesinde seyrekleşiyor; daha fazla
        // yaklaşmak öğrenciye boş harita göstermekten başka işe yaramıyor.
        maxZoom: 10,
        attributionControl: false,
      })
    } catch (hata) {
      console.error('Tarih haritası başlatılamadı:', hata)
      setDurum('hata')
      return undefined
    }

    haritaRef.current = harita
    harita.addControl(new maplibregl.AttributionControl({
      compact: true,
      customAttribution: 'Sınırlar: historical-basemaps',
    }), 'bottom-right')

    const zamanAsimi = window.setTimeout(() => {
      setDurum((oncekiDurum) => (oncekiDurum === 'yukleniyor' ? 'hata' : oncekiDurum))
    }, 20000)

    harita.once('load', () => {
      window.clearTimeout(zamanAsimi)

      // Altlığın yazı katmanlarını not al ki öğrenci kapatabilsin.
      altlikEtiketleriRef.current = harita.getStyle().layers
        .filter((katman) => katman.type === 'symbol')
        .map((katman) => katman.id)

      harita.addSource('atlas-devletler', { type: 'geojson', data: donemVerisi })
      harita.addSource('atlas-etiketler', { type: 'geojson', data: etiketVerisi })

      const suzgec = zamanSuzgeci(bekleyenYil.current)

      harita.addLayer({
        id: 'atlas-dolgu',
        type: 'fill',
        source: 'atlas-devletler',
        filter: suzgec,
        paint: { 'fill-color': DOLGU_RENGI, 'fill-opacity': DOLGU_SAYDAMLIGI, 'fill-antialias': true },
      })
      harita.addLayer({
        id: 'atlas-sinir',
        type: 'line',
        source: 'atlas-devletler',
        filter: suzgec,
        paint: {
          'line-color': 'rgba(28, 24, 16, .78)',
          'line-width': ['interpolate', ['linear'], ['zoom'], 2, 0.6, 5, 1.2, 8, 1.8],
          'line-opacity': ['interpolate', ['linear'], ['zoom'], 6.5, 0.85, 9, 0.45],
        },
      })
      harita.addLayer({
        id: 'atlas-vurgu',
        type: 'line',
        source: 'atlas-devletler',
        filter: ['==', ['get', 'ad'], ''],
        paint: {
          'line-color': '#f2d68d',
          'line-width': ['interpolate', ['linear'], ['zoom'], 2, 2.4, 7, 5],
          'line-blur': 0.5,
        },
      })
      harita.addLayer({
        id: 'atlas-etiket',
        type: 'symbol',
        source: 'atlas-etiketler',
        filter: suzgec,
        layout: {
          'text-field': ['get', 'ad'],
          // Altlığın kendi yazı tipi. Varsayılan font adı bu sunucuda yok ve
          // istekler 404 dönüyordu; bu font Türkçe karakterleri de taşıyor.
          'text-font': ['OpenHistorical Bold'],
          'text-size': ETIKET_BOYUTU,
          'text-letter-spacing': 0.06,
          'text-max-width': 9,
          'text-allow-overlap': false,
          'text-padding': 3,
          'symbol-sort-key': ['-', 0, ['get', 'onem']],
        },
        paint: {
          'text-color': '#1d1b12',
          'text-halo-color': 'rgba(233, 223, 192, .88)',
          'text-halo-width': 2,
          'text-opacity': ETIKET_SAYDAMLIGI,
        },
      })

      setDurum('hazir')
    })

    // Altlıkta veri bulunmayan bölgeler için sunucu 404 döner; bu beklenen bir
    // durumdur ve haritayı bozmaz. Gerçek sorunları görebilmek için onları
    // ayıklıyoruz — yoksa konsol gürültüden okunmaz hale geliyor.
    harita.on('error', (olay) => {
      const hata = olay?.error
      if (hata?.status === 404) return
      console.warn('Harita uyarısı:', hata?.message || hata)
    })

    harita.on('zoom', () => setYakinlik(harita.getZoom()))

    harita.on('mousemove', (olay) => {
      if (!harita.getLayer('atlas-dolgu')) return
      const bulunanlar = harita.queryRenderedFeatures(olay.point, { layers: ['atlas-dolgu'] })
      harita.getCanvas().style.cursor = bulunanlar.length ? 'pointer' : ''
    })

    harita.on('click', (olay) => {
      if (!harita.getLayer('atlas-dolgu')) return
      const bulunanlar = harita.queryRenderedFeatures(olay.point, { layers: ['atlas-dolgu'] })
      if (!bulunanlar.length) { secimYapildi(null); return }
      // En küçük önem değerine sahip olan üstte çizildiği için ilk sonucu almak yerine
      // en önemli devleti seçiyoruz — üst üste binen sınırlarda doğru olan bu.
      const enOnemli = bulunanlar.reduce((a, b) => (b.properties.onem > a.properties.onem ? b : a))
      secimYapildi({ ...enOnemli.properties })
    })

    return () => {
      window.clearTimeout(zamanAsimi)
      window.cancelAnimationFrame(cerceveRef.current)
      harita.remove()
      haritaRef.current = null
    }
    // Veri tek seferlik yüklenir; yıl değişimi ayrı bir etkide süzgeçle yapılır.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Yıl değişimi — kaydırıcı sürüklenirken çizim karesine bağlanır ki takılma olmasın.
  useEffect(() => {
    bekleyenYil.current = yil
    const harita = haritaRef.current
    if (!harita || durum !== 'hazir') return undefined

    window.cancelAnimationFrame(cerceveRef.current)
    cerceveRef.current = window.requestAnimationFrame(() => {
      const suzgec = zamanSuzgeci(bekleyenYil.current)
      for (const katman of ['atlas-dolgu', 'atlas-sinir', 'atlas-etiket']) {
        if (harita.getLayer(katman)) harita.setFilter(katman, suzgec)
      }
      // Altlığın tarihsel yol, sur ve yapı verisi de aynı yıla getirilir.
      try {
        filterByDate(harita, String(bekleyenYil.current))
      } catch (hata) {
        console.warn('Altlık tarih süzgeci uygulanamadı:', hata)
      }
    })

    return () => window.cancelAnimationFrame(cerceveRef.current)
  }, [durum, yil])

  // Katman aç/kapa
  useEffect(() => {
    const harita = haritaRef.current
    if (!harita || durum !== 'hazir') return
    for (const katman of KATMANLAR) {
      const gorunur = acikKatmanlar.has(katman.kod) ? 'visible' : 'none'
      const hedefler = katman.haritaKatmanlari === 'altlikEtiketleri'
        ? altlikEtiketleriRef.current
        : katman.haritaKatmanlari
      for (const haritaKatmani of hedefler) {
        if (harita.getLayer(haritaKatmani)) harita.setLayoutProperty(haritaKatmani, 'visibility', gorunur)
      }
    }
  }, [acikKatmanlar, durum])

  // Seçili devletin sınırını vurgula
  useEffect(() => {
    const harita = haritaRef.current
    if (!harita || durum !== 'hazir' || !harita.getLayer('atlas-vurgu')) return
    harita.setFilter('atlas-vurgu', secili
      ? ['all', ['==', ['get', 'ad'], secili.ad], zamanSuzgeci(yil)]
      : ['==', ['get', 'ad'], ''])
  }, [durum, secili, yil])

  return (
    <section className="atlas-harita-alani" aria-label="Etkileşimli tarih haritası">
      <div ref={kapsayiciRef} className="atlas-maplibre" />

      {durum === 'yukleniyor' && (
        <div className="atlas-harita-durum"><span className="atlas-donen" />Harita yükleniyor…</div>
      )}
      {durum === 'hata' && (
        <div className="atlas-harita-durum hatali">
          Harita altlığı yüklenemedi. İnternet bağlantını kontrol et.
        </div>
      )}

      <div className="atlas-yakinlik" aria-label="Yakınlaştırma">
        <button type="button" onClick={() => haritaRef.current?.zoomIn()} aria-label="Yakınlaştır"><Plus size={16} /></button>
        <span>{yakinlik.toFixed(1)}</span>
        <button type="button" onClick={() => haritaRef.current?.zoomOut()} aria-label="Uzaklaştır"><Minus size={16} /></button>
        <button type="button" onClick={haritayiSifirla} aria-label="Haritayı başa al"><RotateCcw size={14} /></button>
      </div>

      <p className="atlas-yakinlik-ipucu">
        {yakinlik < 5.5
          ? 'Uzaklaştıkça devletler öne çıkar'
          : yakinlik < 8
            ? 'Yaklaştıkça devlet renkleri çekilir, tarihsel coğrafya açılır'
            : 'Bu ölçekte sur, yol ve yerleşim verisi görünür'}
      </p>
    </section>
  )
}

function BilgiPaneli({ donem, kapat, secili, yil }) {
  if (!secili) {
    return (
      <aside className="atlas-bilgi bos">
        <p className="atlas-bilgi-ustbaslik"><Sparkles size={14} /> NASIL KULLANILIR</p>
        <h2>{yil} yılına bak</h2>
        <p className="atlas-bilgi-giris">
          Alttaki çizelgeyi sürükle, harita anında değişsin. Bir devlete dokunduğunda
          bilgisi burada açılır.
        </p>
        {donem?.uyari && (
          <p className="atlas-uyari"><TriangleAlert size={14} /> {donem.uyari}</p>
        )}
      </aside>
    )
  }

  const kesinlikMetni = secili.kesinlik == null
    ? 'Belirtilmemiş'
    : secili.kesinlik <= 1
      ? 'Kaynaklarla uyumlu'
      : secili.kesinlik <= 3
        ? 'Yaklaşık — kaynaklar ayrışıyor'
        : 'Büyük ölçüde tahmini'

  return (
    <aside className="atlas-bilgi">
      <button type="button" className="atlas-bilgi-kapat" onClick={kapat} aria-label="Paneli kapat"><X size={17} /></button>
      <p className="atlas-bilgi-ustbaslik"><Flag size={14} /> SİYASİ DEVLET</p>
      <h2>{secili.ad}</h2>

      <dl className="atlas-bilgi-liste">
        <div>
          <dt>Bu harita hangi tarihi gösteriyor</dt>
          <dd>{secili.baslangic} – {secili.bitis} arası</dd>
        </div>
        {secili.bagli && (
          <div>
            <dt>Bağlı olduğu devlet</dt>
            <dd>{secili.bagli}</dd>
          </div>
        )}
        <div>
          <dt>Sınırın güvenilirliği</dt>
          <dd>{kesinlikMetni}</dd>
        </div>
        <div>
          <dt>Müfredattaki yeri</dt>
          <dd>
            {secili.onem === 3 ? 'Sınavda doğrudan sorulur'
              : secili.onem === 2 ? 'Konu anlatımında geçer'
                : secili.onem === 1 ? 'Dönemi anlamak için bağlam'
                  : 'Müfredat dışı'}
          </dd>
        </div>
      </dl>

      <p className="atlas-bilgi-dipnot">
        <Info size={13} />
        Anlatım metni bu devlet için henüz yazılmadı. İçerik katmanı eklendiğinde
        kazanım, özet ve sınav notu burada görünecek.
      </p>
    </aside>
  )
}

export default function TarihAtlasi() {
  const [veri, setVeri] = useState(null)
  const [veriHatasi, setVeriHatasi] = useState(false)
  const [yil, setYil] = useState(BASLANGIC_YILI)
  const [secili, setSecili] = useState(null)
  const [acikKatmanlar, setAcikKatmanlar] = useState(() => new Set(KATMANLAR.map((k) => k.kod)))

  // Dönem verisi ayrı bir paket olarak indirilir; platformun geri kalanını yavaşlatmaz.
  useEffect(() => {
    let iptal = false
    import('../data/tarihAtlasi/donemler.json')
      .then((paket) => { if (!iptal) setVeri(paket.default) })
      .catch((hata) => {
        console.error('Dönem verisi yüklenemedi:', hata)
        if (!iptal) setVeriHatasi(true)
      })
    return () => { iptal = true }
  }, [])

  const donem = useMemo(() => donemBul(veri?.meta, yil), [veri, yil])

  const donemdekiDevletler = useMemo(() => {
    if (!veri || !donem) return []
    return veri.features
      .filter((oz) => oz.properties.baslangic === donem.yil && oz.properties.onem >= 2)
      .map((oz) => oz.properties)
      .sort((a, b) => b.onem - a.onem || a.ad.localeCompare(b.ad, 'tr'))
  }, [donem, veri])

  const sapma = donem ? yil - donem.yil : 0

  const katmanDegistir = useCallback((kod) => {
    setAcikKatmanlar((oncekiler) => {
      const yeniler = new Set(oncekiler)
      if (yeniler.has(kod)) yeniler.delete(kod)
      else yeniler.add(kod)
      return yeniler
    })
  }, [])

  const yilDegisti = useCallback((yeniYil) => {
    setYil(yeniYil)
    setSecili(null)
  }, [])

  if (veriHatasi) {
    return (
      <main className="tarih-atlasi">
        <div className="atlas-tam-durum">
          Tarih verisi yüklenemedi. Sayfayı yenilemeyi dene.
        </div>
      </main>
    )
  }

  if (!veri) {
    return (
      <main className="tarih-atlasi">
        <div className="atlas-tam-durum"><span className="atlas-donen" />Tarih atlası hazırlanıyor…</div>
      </main>
    )
  }

  return (
    <main className="tarih-atlasi">
      <header className="atlas-ustbar">
        <AtlasLogosu />
        <div className="atlas-donem-rozeti">
          <span><MapIcon size={14} /><small>SEÇİLİ YIL</small><b>{yil}</b></span>
          <span>
            <Crown size={14} />
            <small>GÖSTERİLEN HARİTA</small>
            <b>{donem?.yil} dönemi{sapma > 40 ? ` · ${sapma} yıl önce` : ''}</b>
          </span>
        </div>
        <Link to="/" className="atlas-geri"><ArrowLeft size={15} /> Platforma dön</Link>
      </header>

      <div className="atlas-govde">
        <aside className="atlas-sol">
          <div className="atlas-bolum-basligi"><Layers3 size={15} /> Katmanlar</div>
          <div className="atlas-katman-listesi">
            {KATMANLAR.map((katman) => (
              <button
                key={katman.kod}
                type="button"
                className={acikKatmanlar.has(katman.kod) ? 'acik' : ''}
                aria-pressed={acikKatmanlar.has(katman.kod)}
                onClick={() => katmanDegistir(katman.kod)}
              >
                {katman.ad}
              </button>
            ))}
          </div>

          <div className="atlas-ayirac" />

          <div className="atlas-bolum-basligi">
            <Flag size={15} /> {donem?.yil} yılının devletleri
          </div>
          <div className="atlas-devlet-listesi">
            {donemdekiDevletler.map((devlet) => (
              <button
                key={devlet.ad}
                type="button"
                className={secili?.ad === devlet.ad ? 'secili' : ''}
                onClick={() => setSecili(devlet)}
              >
                <i style={{ background: TON_RENKLERI[devlet.ton] || TON_RENKLERI.diger }} />
                <span>
                  <strong>{devlet.ad}</strong>
                  {devlet.bagli && <small>{devlet.bagli}'na bağlı</small>}
                </span>
              </button>
            ))}
          </div>

          <p className="atlas-kaynak-notu">
            Tarihsel sınırlar yaklaşıktır ve kaynaklar arasında farklılık gösterir.
            Bu atlas öğretim amaçlıdır.
          </p>
        </aside>

        <Harita
          acikKatmanlar={acikKatmanlar}
          donemVerisi={veri}
          secili={secili}
          secimYapildi={setSecili}
          yil={yil}
        />

        <BilgiPaneli donem={donem} kapat={() => setSecili(null)} secili={secili} yil={yil} />
      </div>

      <footer className="atlas-altbar">
        <ZamanCizelgesi
          enAz={veri.meta.ilkYil}
          enCok={veri.meta.sonYil}
          yil={yil}
          yilDegisti={yilDegisti}
        />
      </footer>
    </main>
  )
}
