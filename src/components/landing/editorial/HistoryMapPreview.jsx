import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Compass, Minus, Plus, RotateCcw } from 'lucide-react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { kaynakZamanBaglami } from '../../../lib/tarihAtlasi/veriModeli'
import {
  YEREL_ATLAS_STILI, cokOlcekliKatmanlariKur, cokOlcekliKaynaklariGuncelle,
  cokOlcekliGorunurluguUygula, cokOlcekliSecimiUygula,
} from '../../../lib/tarihAtlasi/haritaSunumu'
import '../../../styles/anasayfa-tarih-onizleme.css'

const YILLAR = [1453, 1500, 1600, 1700]
const KAMERA = { center: [29, 39], zoom: 2.65 }

async function veriGetir(url, signal) {
  const response = await fetch(url, { signal })
  if (!response.ok) throw new Error('Atlas verisi yüklenemedi.')
  return response.json()
}

function Harita({ paket, yukleniyor, hata, tekrarDene }) {
  const kapsayici = useRef(null)
  const harita = useRef(null)
  const [stilHazir, setStilHazir] = useState(false)
  const [ciziliyor, setCiziliyor] = useState(true)
  const [haritaHatasi, setHaritaHatasi] = useState(false)
  const [etiketUyarisi, setEtiketUyarisi] = useState(false)
  const [secili, setSecili] = useState(null)

  useEffect(() => {
    let map
    let darEkran = kapsayici.current.clientWidth < 500
    try {
      map = new maplibregl.Map({
        container: kapsayici.current,
        style: structuredClone(YEREL_ATLAS_STILI),
        ...KAMERA, zoom: darEkran ? 1.9 : KAMERA.zoom, minZoom: 1.3, maxZoom: 5.5,
        attributionControl: false, renderWorldCopies: false,
        cooperativeGestures: true, pitchWithRotate: false, dragRotate: false,
        locale: {
          'CooperativeGesturesHandler.WindowsHelpText': 'Yakınlaştırmak için Ctrl tuşuyla kaydır.',
          'CooperativeGesturesHandler.MacHelpText': 'Yakınlaştırmak için ⌘ tuşuyla kaydır.',
          'CooperativeGesturesHandler.MobileHelpText': 'Haritayı iki parmağınla hareket ettir.',
        },
      })
      harita.current = map
      map.getCanvas().setAttribute('aria-label', 'Tarih haritası; ok tuşlarıyla hareket ettir, artı ve eksiyle yakınlaştır')
      map.touchZoomRotate.disableRotation()
      map.on('load', () => {
        cokOlcekliKatmanlariKur(map, null, null)
        cokOlcekliGorunurluguUygula(map, new Set(['siyasi', 'etiketler']))
        setStilHazir(true)
      })
      map.on('click', 'atlas-siyasi-dolgu', (event) => {
        const ozellik = event.features?.[0]?.properties
        cokOlcekliSecimiUygula(map, ozellik?.id)
        setSecili(ozellik?.ad || null)
      })
      map.on('mouseenter', 'atlas-siyasi-dolgu', () => { map.getCanvas().style.cursor = 'pointer' })
      map.on('mouseleave', 'atlas-siyasi-dolgu', () => { map.getCanvas().style.cursor = '' })
      map.on('error', (event) => {
        if (/glyph|font|\.pbf/i.test(event.error?.message || '')) setEtiketUyarisi(true)
        else setHaritaHatasi(true)
      })
      map.on('webglcontextlost', () => setHaritaHatasi(true))
    } catch {
      setHaritaHatasi(true)
    }
    const resize = new ResizeObserver(() => {
      map?.resize()
      const yeniDarEkran = kapsayici.current.clientWidth < 500
      if (darEkran !== yeniDarEkran) {
        darEkran = yeniDarEkran
        map?.jumpTo({ zoom: darEkran ? 1.9 : KAMERA.zoom })
      }
    })
    if (map) resize.observe(kapsayici.current)
    const zamanAsimi = window.setTimeout(() => {
      if (map && !map.loaded()) setHaritaHatasi(true)
    }, 20000)
    return () => { window.clearTimeout(zamanAsimi); resize.disconnect(); map?.remove(); harita.current = null }
  }, [])

  useEffect(() => {
    const map = harita.current
    if (!stilHazir || !paket || !map) return undefined
    setCiziliyor(true)
    setSecili(null)
    cokOlcekliSecimiUygula(map, null)
    cokOlcekliKaynaklariGuncelle(map, paket.veri, null)
    const bitti = () => setCiziliyor(false)
    map.once('idle', bitti)
    return () => map.off('idle', bitti)
  }, [paket, stilHazir])

  const hareket = (islem) => {
    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 250
    if (islem === 'ilk') harita.current?.easeTo({ ...KAMERA, zoom: kapsayici.current.clientWidth < 500 ? 1.9 : KAMERA.zoom, duration })
    else if (islem === 'arti') harita.current?.zoomIn({ duration })
    else harita.current?.zoomOut({ duration })
  }
  const sorun = hata || haritaHatasi
  const bekliyor = yukleniyor || !stilHazir || ciziliyor

  return (
    <div className="history-preview__map-wrap" aria-busy={bekliyor && !sorun}>
      <div ref={kapsayici} className="history-preview__map" />
      <div className="history-preview__compass" aria-hidden="true"><span>K</span><Compass size={26} strokeWidth={1} /></div>
      <div className="history-preview__zoom" aria-label="Tarih haritası kontrolleri">
        <button type="button" onClick={() => hareket('arti')} disabled={!stilHazir || !!sorun} aria-label="Tarih haritasını yakınlaştır"><Plus size={18} /></button>
        <button type="button" onClick={() => hareket('eksi')} disabled={!stilHazir || !!sorun} aria-label="Tarih haritasını uzaklaştır"><Minus size={18} /></button>
        <button type="button" onClick={() => hareket('ilk')} disabled={!stilHazir || !!sorun} aria-label="Başlangıç haritasına dön"><RotateCcw size={16} /></button>
      </div>
      {!bekliyor && !sorun && <div className="history-preview__map-caption" role="status">
        {secili || 'Bir devlete dokun, haritada bul.'}
      </div>}
      {etiketUyarisi && !sorun && <p className="history-preview__font-warning" role="status">Yer adları yüklenemedi; siyasi harita kullanılabilir.</p>}
      {(bekliyor || sorun) && <div className="history-preview__veil" role={sorun ? 'alert' : 'status'}>
        <Compass size={30} strokeWidth={1} aria-hidden="true" />
        <p>{sorun ? 'Harita şu anda görüntülenemiyor.' : 'Kaynak haritası hazırlanıyor…'}</p>
        {sorun && <button type="button" onClick={tekrarDene}>Yeniden dene</button>}
      </div>}
    </div>
  )
}

export default function HistoryMapPreview() {
  const [yil, setYil] = useState(1600)
  const [paket, setPaket] = useState(null)
  const [yukleniyor, setYukleniyor] = useState(true)
  const [hata, setHata] = useState(false)
  const [deneme, setDeneme] = useState(0)
  const manifestRef = useRef(null)

  useEffect(() => {
    const controller = new AbortController()
    setYukleniyor(true)
    setHata(false)
    const zamanAsimi = window.setTimeout(() => {
      controller.abort()
      setHata(true)
      setYukleniyor(false)
    }, 18000)
    async function yukle() {
      const manifest = manifestRef.current || await veriGetir('/atlas/v3/manifest.json', controller.signal)
      if (controller.signal.aborted) return
      manifestRef.current = manifest
      const baglam = kaynakZamanBaglami(manifest, yil)
      if (!baglam) throw new Error('Kaynak dönemi bulunamadı.')
      const veri = await veriGetir(baglam.donem.politicalUrl, controller.signal)
      if (controller.signal.aborted) return
      setPaket({ veri, baglam, yil })
      setYukleniyor(false)
      window.clearTimeout(zamanAsimi)
    }
    yukle().catch(() => {
      if (controller.signal.aborted) return
      setHata(true)
      setYukleniyor(false)
      window.clearTimeout(zamanAsimi)
    })
    return () => { window.clearTimeout(zamanAsimi); controller.abort() }
  }, [yil, deneme])

  const baglam = paket?.yil === yil ? paket.baglam : null
  const atlasAdresi = `/tarih-atlasi?yil=${yil}&lng=29&lat=39&z=2.65`
  return (
    <section className="history-preview" aria-labelledby="history-preview-title">
      <header className="history-preview__header">
        <div><span className="history-preview__eyebrow">TARİH ATLASI / CANLI HARİTA</span><h3 id="history-preview-title">Zaman değişir. Harita anlatır.</h3></div>
        <Link className="history-preview__open" to={atlasAdresi}>Tam atlası aç <ArrowUpRight size={17} aria-hidden="true" /></Link>
      </header>
      <Harita key={deneme} paket={paket} yukleniyor={yukleniyor} hata={hata} tekrarDene={() => setDeneme((onceki) => onceki + 1)} />
      <div className="history-preview__time">
        <div className="history-preview__time-label"><span>DÖNEMİ DEĞİŞTİR</span><p>Aynı coğrafyayı farklı yıllarda keşfet.</p></div>
        <div className="history-preview__years" role="group" aria-label="Tarih haritası yılı">
          {YILLAR.map((deger) => <button key={deger} type="button" aria-pressed={yil === deger} onClick={() => setYil(deger)}>{deger}<span aria-hidden="true" /></button>)}
        </div>
      </div>
      <div className={`history-preview__evidence${baglam?.mutlakSapma ? ' history-preview__evidence--gap' : ''}`} aria-live="polite">
        <strong>Seçili yıl: {yil}</strong>
        <span>{hata ? 'Kaynak yüklenemedi.' : !baglam || yukleniyor ? 'Kaynak yılı yükleniyor…' : <>Kaynak harita: <b>{baglam.kaynakYili}</b>{baglam.mutlakSapma ? ` · ${baglam.mutlakSapma} yıl fark. Bu sınırlar ${yil} yılını kesin olarak göstermez.` : ' · Kaynağın kendi yılındaki görünüm.'}</>}</span>
      </div>
      <footer className="history-preview__sources">
        <span><i aria-hidden="true" /> Kesikli sınır: belirsiz · Tarama: kaynak boşluğu / bağlı yapı</span>
        <span><a href="https://github.com/aourednik/historical-basemaps" target="_blank" rel="noreferrer">Historical Basemaps</a> · <a href="https://www.naturalearthdata.com/" target="_blank" rel="noreferrer">Natural Earth</a></span>
        <small>Kıtasal öğretim ölçeği; yakınlaştırma, sınırların tarihsel kesinliğini artırmaz.</small>
      </footer>
    </section>
  )
}
