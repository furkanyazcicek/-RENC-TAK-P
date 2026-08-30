import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  ArrowLeft, BookOpen, ChevronLeft, ChevronRight, CircleAlert, Clock3, ExternalLink,
  Flag, Globe2, Info, Landmark, Layers3, LoaderCircle, MapPin, Menu, Minus, Pause,
  Play, Plus, RotateCcw, Route as RouteIcon, Search, ShieldCheck, Swords, X,
} from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import maplibregl from 'maplibre-gl'
import { filterByDate } from '@openhistoricalmap/maplibre-gl-dates'
import 'maplibre-gl/dist/maplibre-gl.css'
import { KILIT_TARIHLER } from '../data/tarihAtlasi/kilitTarihler'
import {
  aramaSonuclari, atlasDurumunuCoz, atlasDurumunuYaz, atlasVarliklariniBirleştir,
  detayDilimiBul, kaynakDonemiBul, kaynakZamanBaglami, varlikGecerliMi, varlikMerkezi, varlikTuruMetni,
} from '../lib/tarihAtlasi/veriModeli'
import {
  altlikEtiketleriniAyarla, cokOlcekliGorunurluguUygula, cokOlcekliKatmanlariKur,
  cokOlcekliKaynaklariGuncelle, cokOlcekliSecimiUygula, SECILEBILIR_KATMANLAR,
  YEREL_ATLAS_STILI,
} from '../lib/tarihAtlasi/haritaSunumu'
import '../styles/tarih-atlasi.css'

const OHM_STILI = 'https://www.openhistoricalmap.org/map-styles/main/main.json'
const ILK_KAMERA = { lng: 18, lat: 24, zoom: 1.65 }
const paketOnbellegi = new Map()

const MODLAR = [
  { id: 'siyasi', ad: 'Siyasi', ikon: Flag },
  { id: 'idari', ad: 'İdarî', ikon: Landmark },
  { id: 'yerlesimler', ad: 'Şehirler', ikon: MapPin },
  { id: 'olaylar', ad: 'Olaylar', ikon: Swords },
  { id: 'rotalar', ad: 'Rotalar', ikon: RouteIcon },
  { id: 'fiziki', ad: 'Fizikî', ikon: Globe2 },
  { id: 'kultur', ad: 'Kültür / dil', ikon: BookOpen },
]

const KATMANLAR = [
  { id: 'siyasi', ad: 'Siyasi dolgular' },
  { id: 'etiketler', ad: 'Türkçe devlet adları' },
  { id: 'idari', ad: 'Tahminî eyalet modeli', detayAlani: 'administrativeRegions' },
  { id: 'yerlesimler', ad: 'Yerleşimler', detayAlani: 'settlements' },
  { id: 'olaylar', ad: 'Olaylar', detayAlani: 'events' },
  { id: 'rotalar', ad: 'Temsilî rota', detayAlani: 'routes' },
  { id: 'tarihsel-altlik', ad: 'OpenHistoricalMap bağlamı' },
  { id: 'kaynak-adlari', ad: 'Altığın kaynak dilde adları', altlikGerekli: true },
]

const TUR_SIRASI = ['polity', 'administrative-region', 'settlement', 'event', 'route']

async function jsonGetir(url, signal) {
  if (paketOnbellegi.has(url)) return paketOnbellegi.get(url)
  const yanit = await fetch(url, { signal })
  if (!yanit.ok) throw new Error(`${yanit.status} ${yanit.statusText}`)
  const veri = await yanit.json()
  paketOnbellegi.set(url, veri)
  return veri
}

function detayYilaGore(detay, yil) {
  if (!detay) return null
  const suz = (koleksiyon) => ({
    type: 'FeatureCollection',
    features: (koleksiyon?.features || []).filter((ozellik) => varlikGecerliMi(ozellik, yil)),
  })
  return {
    ...detay,
    administrativeRegions: suz(detay.administrativeRegions),
    settlements: suz(detay.settlements),
    events: suz(detay.events),
    routes: suz(detay.routes),
  }
}

function gosterimAdi(ozellik) {
  return ozellik?.properties?.ad || ozellik?.properties?.nameTr || 'Adsız nesne'
}

function gosterimTuru(ozellik) {
  return ozellik?.properties?.tur || ozellik?.properties?.type || 'unknown'
}

function altTurMetni(deger) {
  return ({
    state: 'Egemen siyasi yapı',
    'subject-polity': 'Bağlı / tâbi siyasi yapı',
    'eyalet-model': 'Tahminî eyalet modeli',
    capital: 'Başkent',
    'administrative-centre': 'Yönetim merkezi',
    'campaign-stage': 'Sefer menzili',
    'fortress-city': 'Kale şehri',
    battle: 'Meydan muharebesi',
    'military-campaign-model': 'Temsilî sefer bağlantısı',
    'historical-landscape-anchor': 'Tarihsel peyzaj bağlam noktası',
    'capital-archaeological-site': 'Arkeolojik başkent alanı',
    'capital-transition': 'Başkent değişimi bağlamı',
    'treaty-site': 'Antlaşma yeri',
    conquest: 'Fetih',
    treaty: 'Antlaşma',
    'parliament-building': 'Meclis binası',
    'constitutional-change': 'Anayasal değişiklik',
  })[deger] || deger
}

function yontemMetni(deger) {
  return ({
    'source-confident': 'Kaynakta daha güvenilir',
    approximate: 'Yaklaşık — kaynak çözünürlüğü sınırlı',
    uncertain: 'Belirsiz / tahminî',
    unknown: 'Kaynakta belirtilmemiş',
    modelled: 'Tahminî öğretim modeli',
    'location-continuity-noted': 'Kaynaklı güncel nokta; tarihsel süreklilik notlu',
    'approximate-battlefield-point': 'Yaklaşık muharebe alanı noktası',
    'source-location-context': 'Kaynaklı konum bağlamı; siyasî sınır değildir',
    'wikidata-coordinate-cross-checked-with-official-context': 'Açık koordinat, kurumsal tarih kaynağıyla çapraz kontrol edildi',
    'not-applicable-point': 'Nokta kaydı — sınır çizgisi değil',
    'external-cc0-point-with-institutional-history-reference': 'Açık nokta koordinatı, kurumsal tarih kaynağıyla doğrulandı',
    'external-cc0-event-point': 'Açık olay noktası, tarih kaynağıyla çapraz kontrol edildi',
    'external-cc0-event-point-with-academic-reference': 'Açık olay noktası, akademik kaynakla çapraz kontrol edildi',
    'official-event-at-external-cc0-building-point': 'Resmî olay kaydı, açık lisanslı yapı koordinatında gösterildi',
    'external-cc0-point-with-official-reference': 'Açık nokta koordinatı, resmî kurum kaynağıyla doğrulandı',
    reviewed: 'Kaynak ve yöntem incelendi',
    'reviewed-model': 'Tahminî model olarak incelendi',
    'draft-source-derived': 'Kaynak türevi; bağımsız inceleme bekliyor',
  })[deger] || deger
}

function lisansMetni(lisans) {
  if (!lisans) return 'Lisans kaydı yok'
  return typeof lisans === 'string' ? lisans : lisans.name || lisans.status || 'Lisans kaydı var'
}

function guvenMetni(deger) {
  return ({ high: 'Yüksek', medium: 'Orta', low: 'Düşük' })[deger] || yontemMetni(deger)
}

function arastirmaDurumuMetni(deger) {
  return ({
    'exact-general-source': 'aynı yıla ait genel kaynak',
    'exact-general-source-known-limitation': 'aynı yıl kaynağı; bilinen sınırlı kapsam',
    'nearest-general-source': 'en yakın genel kaynak',
    'nearest-general-source-known-inaccurate': 'en yakın genel kaynak; bilinen tarihsel eksik',
    'nearest-general-source-known-omission': 'en yakın genel kaynak; bilinen yapı eksik',
  })[deger] || 'özel sınır araştırılıyor'
}

function turIkonu(tur, boyut = 15) {
  const Ikon = ({
    polity: Flag,
    'administrative-region': Landmark,
    settlement: MapPin,
    event: Swords,
    route: RouteIcon,
  })[tur] || Info
  return <Ikon size={boyut} aria-hidden="true" />
}

function AtlasLogosu() {
  return (
    <div className="atlas-marka" aria-label="DRKOÇ Tarih Atlası">
      <span className="atlas-marka-simge">DK</span>
      <span><b>DRKOÇ</b><small>Tarih Atlası</small></span>
    </div>
  )
}

function kaynakFarkiMetni(yil, kanitYili, kaynakYili = kanitYili) {
  if (yil === 0 && kaynakYili === -1) return 'MÖ 1 / MS 1 geçişi için kaynak'
  const fark = yil - kanitYili
  if (fark === 0) return 'aynı yıl'
  return fark > 0 ? `${fark} yıl önceki kaynak` : `${Math.abs(fark)} yıl sonraki kaynak`
}

function yilEtiketi(yil) {
  if (yil < 0) return `MÖ ${Math.abs(yil)}`
  return String(yil)
}

function AramaKutusu({ arama, aramaDegisti, sonuclar, sec, acik, acikDegisti }) {
  const gruplar = useMemo(() => {
    const sonuc = new Map()
    sonuclar.forEach((ozellik) => {
      const tur = gosterimTuru(ozellik)
      if (!sonuc.has(tur)) sonuc.set(tur, [])
      sonuc.get(tur).push(ozellik)
    })
    return TUR_SIRASI.filter((tur) => sonuc.has(tur)).map((tur) => [tur, sonuc.get(tur)])
  }, [sonuclar])

  return (
    <div className={`atlas-arama${acik ? ' acik' : ''}`}>
      <Search size={16} aria-hidden="true" />
      <input
        data-atlas-search
        type="search"
        value={arama}
        placeholder="Devlet, eyalet, şehir veya olay ara"
        aria-label="Atlası ara"
        aria-expanded={acik && arama.length >= 2}
        aria-controls="atlas-arama-sonuclari"
        onFocus={() => acikDegisti(true)}
        onChange={(olay) => { aramaDegisti(olay.target.value); acikDegisti(true) }}
      />
      {arama && <button type="button" aria-label="Aramayı temizle" onClick={() => aramaDegisti('')}><X size={15} /></button>}
      {acik && arama.length >= 2 && (
        <div id="atlas-arama-sonuclari" className="atlas-arama-sonuclari" role="listbox">
          {gruplar.length ? gruplar.map(([tur, liste]) => (
            <section key={tur}>
              <p>{turIkonu(tur, 13)} {varlikTuruMetni(liste[0])}</p>
              {liste.map((ozellik) => (
                <button type="button" role="option" aria-selected="false" key={ozellik.properties.id} onClick={() => sec(ozellik)}>
                  <span>{gosterimAdi(ozellik)}</span>
                  <small>{ozellik.properties.adKaynak || ozellik.properties.sourceName || ''}</small>
                </button>
              ))}
            </section>
          )) : <p className="atlas-arama-bos">Bu dönemin yayınlanmış paketinde eşleşme yok.</p>}
        </div>
      )}
    </div>
  )
}

function KaynakBaglami({ manifest, yil }) {
  const baglam = kaynakZamanBaglami(manifest, yil)
  if (!baglam) return null
  const ozelYil = manifest.researchSnapshots?.find((kayit) => kayit.year === yil)
  const aralik = baglam.oncekiKanitYili === baglam.sonrakiKanitYili
    ? 'doğrudan yıl kanıtı'
    : `${yilEtiketi(baglam.oncekiKanitYili)}–${yilEtiketi(baglam.sonrakiKanitYili)} kanıt aralığı`
  return (
    <div className={`atlas-kaynak-baglami ${baglam.kesinlikSinifi}`} role="note">
      <span><Clock3 size={13} /> Seçili <b>{yilEtiketi(yil)}</b></span>
      <span><ShieldCheck size={13} /> En yakın kaynak <b>{yilEtiketi(baglam.kaynakYili)}</b></span>
      <small><i aria-hidden="true" /> {kaynakFarkiMetni(yil, baglam.kanitYili, baglam.kaynakYili)} · {aralik}{ozelYil ? ` · ${arastirmaDurumuMetni(ozelYil.politicalGeometryStatus)}` : ''}</small>
    </div>
  )
}

function Modlar({ detay, donem, mod, modDegisti }) {
  const uygunMu = (kayit) => {
    if (kayit.id === 'siyasi') return true
    if (['idari', 'yerlesimler', 'olaylar', 'rotalar'].includes(kayit.id)) {
      const alan = kayit.id === 'idari' ? 'administrativeRegions' : kayit.id === 'yerlesimler' ? 'settlements' : kayit.id === 'olaylar' ? 'events' : 'routes'
      return Boolean(detay?.[alan]?.features?.length)
    }
    return false
  }
  return (
    <div className="atlas-modlar" aria-label="Harita modları">
      {MODLAR.map((kayit) => {
        const acik = uygunMu(kayit)
        const Ikon = kayit.ikon
        return (
          <button
            key={kayit.id}
            type="button"
            className={mod === kayit.id ? 'secili' : ''}
            disabled={!acik}
            aria-pressed={mod === kayit.id}
            title={acik ? `${kayit.ad} harita modu` : 'Bu dönem için doğrulanmış veri henüz yok'}
            onClick={() => modDegisti(kayit.id)}
          >
            <Ikon size={16} /><span>{kayit.ad}</span>
          </button>
        )
      })}
    </div>
  )
}

function KatmanPaneli({ acik, kapat, katmanlar, katmanDegistir, detay, donem, mod, modDegisti }) {
  return (
    <aside className={`atlas-katman-paneli${acik ? ' acik' : ''}`} aria-label="Harita katmanları">
      <div className="atlas-panel-baslik">
        <span><Layers3 size={16} /> Keşfet</span>
        <button type="button" onClick={kapat} aria-label="Katman panelini kapat"><X size={17} /></button>
      </div>
      <p className="atlas-panel-kicker">HARİTA MODU</p>
      <Modlar detay={detay} donem={donem} mod={mod} modDegisti={modDegisti} />
      <div className="atlas-panel-ayrac" />
      <p className="atlas-panel-kicker">GÖRÜNÜR KATMANLAR</p>
      <div className="atlas-katman-listesi-v3">
        {KATMANLAR.map((katman) => {
          const devreDisi = (katman.detayAlani && !detay?.[katman.detayAlani]?.features?.length)
            || (katman.altlikGerekli && !katmanlar.has('tarihsel-altlik'))
          return (
            <button type="button" key={katman.id} disabled={devreDisi} aria-pressed={katmanlar.has(katman.id)} onClick={() => katmanDegistir(katman.id)}>
              <span className="atlas-katman-isareti" aria-hidden="true" /><span>{katman.ad}</span>{devreDisi && <small>Veri yok</small>}
            </button>
          )
        })}
      </div>
      <div className="atlas-panel-ayrac" />
      <div className="atlas-lejant-v3">
        <p><i className="atlas-lejant-cizgi guvenilir" /> Kaynakta daha güvenilir sınır</p>
        <p><i className="atlas-lejant-cizgi yaklasik" /> Yaklaşık / belirsiz sınır</p>
        <p><i className="atlas-lejant-desen bagli" /> Bağlı / tâbi yapı</p>
        <p><i className="atlas-lejant-desen model" /> Tahminî öğretim modeli</p>
        <p><i className="atlas-lejant-desen veri-yok" /> Kaynakta siyasi kayıt yok</p>
      </div>
      <p className="atlas-panel-notu">Siyasi kaynak kıtasal ölçektedir. Yakınlaştırmak, kaynakta olmayan yerel ayrıntıyı kesinleştirmez.</p>
    </aside>
  )
}

function Harita({ siyasi, detay, yil, katmanlar, mod, secili, secimYapildi, ilkKamera, kameraDegisti, yukleniyor, yuklemeHatasi }) {
  const kapsayiciRef = useRef(null)
  const haritaRef = useRef(null)
  const aktifAltlikRef = useRef(katmanlar.has('tarihsel-altlik'))
  const veriRef = useRef({ siyasi, detay, yil, katmanlar, mod, secili })
  const [hazir, setHazir] = useState(false)
  const [yakinlik, setYakinlik] = useState(ilkKamera?.zoom || ILK_KAMERA.zoom)
  const [altlikUyarisi, setAltlikUyarisi] = useState(null)
  const tarihselAltlik = katmanlar.has('tarihsel-altlik')
  veriRef.current = { siyasi, detay, yil, katmanlar, mod, secili }

  const katmanlariYenidenKur = useCallback((harita) => {
    const guncel = veriRef.current
    cokOlcekliKatmanlariKur(harita, guncel.siyasi, guncel.detay, { tarihselAltlik: guncel.katmanlar.has('tarihsel-altlik') })
    cokOlcekliGorunurluguUygula(harita, guncel.katmanlar, guncel.mod)
    cokOlcekliSecimiUygula(harita, guncel.secili?.properties?.id)
    altlikEtiketleriniAyarla(harita, guncel.katmanlar.has('kaynak-adlari'))
    if (guncel.katmanlar.has('tarihsel-altlik')) {
      try { filterByDate(harita, String(guncel.yil)) } catch { /* siyasi katman bağımsız kalır */ }
    }
    setHazir(true)
  }, [])

  useEffect(() => {
    if (!kapsayiciRef.current || haritaRef.current || !siyasi) return undefined
    const kamera = ilkKamera || ILK_KAMERA
    const harita = new maplibregl.Map({
      container: kapsayiciRef.current,
      style: tarihselAltlik ? OHM_STILI : structuredClone(YEREL_ATLAS_STILI),
      center: [kamera.lng, kamera.lat], zoom: kamera.zoom, minZoom: 1.15, maxZoom: 10,
      attributionControl: false, renderWorldCopies: false,
    })
    haritaRef.current = harita
    if (import.meta.env.DEV) window.__atlasHarita = harita
    harita.addControl(new maplibregl.AttributionControl({ compact: true, customAttribution: 'Siyasi veri: Historical Basemaps · Kara: Natural Earth' }), 'bottom-right')
    const altlikZamanAsimi = window.setTimeout(() => {
      if (!harita.isStyleLoaded() && veriRef.current.katmanlar.has('tarihsel-altlik')) {
        setAltlikUyarisi('Tarihsel altlık erişilemedi; siyasi veri yerel altlıkta korunuyor.')
        harita.setStyle(structuredClone(YEREL_ATLAS_STILI))
      }
    }, 18000)
    harita.on('style.load', () => katmanlariYenidenKur(harita))
    harita.on('zoom', () => setYakinlik(harita.getZoom()))
    harita.on('moveend', () => {
      const merkez = harita.getCenter()
      kameraDegisti({ lng: merkez.lng, lat: merkez.lat, zoom: harita.getZoom() })
    })
    harita.on('mousemove', (olay) => {
      const katmanIds = SECILEBILIR_KATMANLAR.filter((id) => harita.getLayer(id))
      const bulunan = katmanIds.length ? harita.queryRenderedFeatures(olay.point, { layers: katmanIds }) : []
      harita.getCanvas().style.cursor = bulunan.length ? 'pointer' : ''
    })
    harita.on('click', (olay) => {
      const katmanIds = SECILEBILIR_KATMANLAR.filter((id) => harita.getLayer(id))
      const bulunan = katmanIds.length ? harita.queryRenderedFeatures(olay.point, { layers: katmanIds }) : []
      secimYapildi(bulunan[0]?.properties?.id || null)
    })
    harita.on('error', (olay) => {
      const mesaj = olay?.error?.message || ''
      if (/404|tile|glyph|sprite/i.test(mesaj)) return
      console.warn('Harita uyarısı:', mesaj)
    })
    return () => {
      window.clearTimeout(altlikZamanAsimi)
      harita.remove()
      haritaRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Boolean(siyasi)])

  useEffect(() => {
    const harita = haritaRef.current
    if (!harita || !harita.isStyleLoaded() || !harita.getSource('atlas-siyasi-v3')) return
    cokOlcekliKaynaklariGuncelle(harita, siyasi, detay)
  }, [siyasi, detay])

  useEffect(() => {
    const harita = haritaRef.current
    if (!harita || !hazir) return
    cokOlcekliGorunurluguUygula(harita, katmanlar, mod)
    altlikEtiketleriniAyarla(harita, katmanlar.has('kaynak-adlari'))
    if (tarihselAltlik) {
      try { filterByDate(harita, String(yil)) } catch { /* siyasi katman bağımsız kalır */ }
    }
  }, [hazir, katmanlar, mod, tarihselAltlik, yil])

  useEffect(() => {
    const harita = haritaRef.current
    if (!harita) return
    if (aktifAltlikRef.current === tarihselAltlik) return
    aktifAltlikRef.current = tarihselAltlik
    setHazir(false)
    setAltlikUyarisi(null)
    harita.setStyle(tarihselAltlik ? OHM_STILI : structuredClone(YEREL_ATLAS_STILI))
  }, [tarihselAltlik])

  useEffect(() => {
    const harita = haritaRef.current
    if (!harita || !hazir) return
    cokOlcekliSecimiUygula(harita, secili?.properties?.id)
    const merkez = varlikMerkezi(secili)
    if (!merkez) return
    const tur = gosterimTuru(secili)
    const hedefZoom = ({ polity: 3.7, 'administrative-region': 5.5, settlement: 7, event: 7, route: 5 })[tur] || 5
    const azalt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    harita.flyTo({ center: merkez, zoom: Math.max(harita.getZoom(), hedefZoom), duration: azalt ? 0 : 850, essential: false })
  }, [hazir, secili])

  const sifirla = () => {
    const azalt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    haritaRef.current?.flyTo({ center: [ILK_KAMERA.lng, ILK_KAMERA.lat], zoom: ILK_KAMERA.zoom, duration: azalt ? 0 : 650, essential: false })
  }

  return (
    <section className="atlas-harita-alani" aria-label="Etkileşimli tarih dünya haritası">
      <div ref={kapsayiciRef} className="atlas-maplibre" />
      <p className="sr-only" aria-live="polite">{yil} yılı; {siyasi?.features?.length || 0} siyasi yapı. Yakınlaştıkça yayımlanmış idarî bölgeler, yerleşimler ve olaylar açılır.</p>
      {(!hazir || yukleniyor) && <div className="atlas-harita-yukleme" role="status"><LoaderCircle size={18} /> {yukleniyor ? 'Kaynak dönemi yükleniyor…' : 'Harita kuruluyor…'}</div>}
      {yuklemeHatasi && <div className="atlas-harita-hata" role="alert"><CircleAlert size={17} /> {yuklemeHatasi}</div>}
      {altlikUyarisi && <div className="atlas-altlik-uyarisi" role="status"><CircleAlert size={15} /> {altlikUyarisi}</div>}
      <div className="atlas-yakinlik-v3" aria-label="Harita yakınlığı">
        <button type="button" onClick={() => haritaRef.current?.zoomIn()} aria-label="Yakınlaştır"><Plus size={17} /></button>
        <span aria-hidden="true">{yakinlik.toFixed(1)}</span>
        <button type="button" onClick={() => haritaRef.current?.zoomOut()} aria-label="Uzaklaştır"><Minus size={17} /></button>
        <button type="button" onClick={sifirla} aria-label="Dünya görünümüne dön"><RotateCcw size={16} /></button>
      </div>
      <div className="atlas-olcek-anlatimi" aria-live="polite">
        {yakinlik < 3.2 ? 'Dünya ölçeği · büyük siyasi yapılar'
          : yakinlik < 4.8 ? 'Bölge ölçeği · komşular ve başkentler'
            : yakinlik < 7 ? 'Ülke / eyalet ölçeği · doğrulanmış ayrıntılar'
              : 'Yerel ölçek · yalnız kaynak bulunan nesneler'}
      </div>
    </section>
  )
}

function SecimPaneli({ secili, kapat, varliklar, kaynaklar, panelBoyu, panelBoyuDegisti }) {
  const panelRef = useRef(null)
  useEffect(() => {
    if (secili) panelRef.current?.querySelector('[tabindex="-1"]')?.focus({ preventScroll: true })
  }, [secili])
  if (!secili) return null
  const oz = secili.properties || {}
  const tur = gosterimTuru(secili)
  const ad = gosterimAdi(secili)
  const parent = varliklar.find((varlik) => varlik.properties?.id === (oz.parentId || oz.parentPolityId))
  const bolge = varliklar.find((varlik) => varlik.properties?.id === oz.parentRegionId)
  const ilgiliKaynaklar = kaynaklar.filter((kaynak) => (oz.sourceIds || [oz.kaynakId]).includes(kaynak.id))
  const kesinlik = oz.confidence || oz.kesinlikSinifi || oz.certainty || 'Kaynakta belirtilmemiş'
  const ozet = oz.ozet || oz.summary
  return (
    <aside ref={panelRef} className={`atlas-secim-paneli ${panelBoyu}`} aria-label={`${ad} bilgisi`}>
      <div className="atlas-panel-tutamac" aria-hidden="true" />
      <div className="atlas-secim-araclari">
        <span>{turIkonu(tur)} {varlikTuruMetni(secili)}</span>
        <div>
          <button type="button" className="atlas-panel-boyut" onClick={() => panelBoyuDegisti(panelBoyu === 'genis' ? 'kisa' : 'genis')} aria-label="Bilgi paneli boyutunu değiştir">{panelBoyu === 'genis' ? 'Küçült' : 'Genişlet'}</button>
          <button type="button" onClick={kapat} aria-label="Bilgi panelini kapat"><X size={18} /></button>
        </div>
      </div>
      <nav className="atlas-breadcrumb" aria-label="Nesne yolu">
        <span>Dünya</span>{parent && <><i>/</i><span>{gosterimAdi(parent)}</span></>}{bolge && <><i>/</i><span>{gosterimAdi(bolge)}</span></>}<><i>/</i><b>{ad}</b></>
      </nav>
      <h2 tabIndex="-1">{ad}</h2>
      {(oz.adKaynak || oz.sourceName) && (oz.adKaynak || oz.sourceName) !== ad && <p className="atlas-kaynak-adi">Kaynak adı: {oz.adKaynak || oz.sourceName}</p>}
      {oz.ceviriDurumu === 'source-name' && <p className="atlas-durum-notu"><Info size={14} /> Türkçe ad incelemesi tamamlanmadı; kaynak adı korunuyor.</p>}
      {ozet && <p className="atlas-secim-ozet">{ozet}</p>}
      <dl className="atlas-secim-verileri">
        {(oz.validFrom != null || oz.baslangic != null) && <div><dt>Geçerlilik</dt><dd>{oz.validFrom ?? oz.baslangic}–{(oz.validTo ?? oz.bitis) - 1}</dd></div>}
        {oz.kaynakYili != null && <div><dt>Geometri kaynak yılı</dt><dd>{oz.kaynakYili}</dd></div>}
        {oz.snapshotYear != null && <div><dt>Kanıt görüntüsü</dt><dd>{yilEtiketi(oz.snapshotYear)}</dd></div>}
        {oz.boundaryCertainty && <div><dt>Sınır niteliği</dt><dd>{yontemMetni(oz.boundaryCertainty)}</dd></div>}
        {oz.reviewStatus && <div><dt>İnceleme durumu</dt><dd>{yontemMetni(oz.reviewStatus)}</dd></div>}
        {oz.bagli && <div><dt>Bağlılık</dt><dd>{oz.bagli}</dd></div>}
        {oz.merkez && <div><dt>Yönetim merkezi</dt><dd>{oz.merkez}</dd></div>}
        {(oz.subtype || oz.altTur) && <div><dt>İşlev</dt><dd>{altTurMetni(oz.subtype || oz.altTur)}</dd></div>}
        <div><dt>Güven</dt><dd>{guvenMetni(kesinlik)}</dd></div>
        {(oz.geometryMethod || oz.geometriYontemi) && <div><dt>Geometri yöntemi</dt><dd>{yontemMetni(oz.geometryMethod || oz.geometriYontemi)}</dd></div>}
      </dl>
      {oz.eventDate && (
        <section className="atlas-olay-anlatimi">
          <h3>{oz.eventDate.from} · {oz.eventDate.precision === 'day' ? 'gün kesinliği' : oz.eventDate.precision}</h3>
          {oz.cause && <p><b>Neden</b>{oz.cause}</p>}{oz.development && <p><b>Gelişme</b>{oz.development}</p>}{oz.result && <p><b>Sonuç</b>{oz.result}</p>}
          {oz.historicalImportance && <p><b>Tarihsel önem</b>{oz.historicalImportance}</p>}{oz.sides?.length && <p><b>Taraflar</b>{oz.sides.join(' · ')}</p>}
          {oz.people?.length && <p><b>İlgili kişiler</b>{oz.people.join(' · ')}</p>}
        </section>
      )}
      {(oz.uyari || oz.warning) && <p className="atlas-belirsizlik-notu"><CircleAlert size={15} /> {oz.uyari || oz.warning}</p>}
      {ilgiliKaynaklar.length > 0 && (
        <section className="atlas-kaynaklar">
          <h3>Kaynaklar neyi kanıtlıyor?</h3>
          {ilgiliKaynaklar.map((kaynak) => (
            <a key={kaynak.id} href={kaynak.url || kaynak.catalogUrl} target="_blank" rel="noreferrer">
              <span><b>{kaynak.title}</b><small>{kaynak.creatorOrInstitution ? `${kaynak.creatorOrInstitution} · ` : ''}{lisansMetni(kaynak.license)} · {kaynak.proves}</small></span><ExternalLink size={14} />
            </a>
          ))}
        </section>
      )}
    </aside>
  )
}

function ZamanCizelgesi({ manifest, donem, yil, yilDegisti, oynuyor, oynatDegisti, hiz, hizDegisti }) {
  const enAz = manifest.supportedYears.from
  const enCok = manifest.supportedYears.to
  const oran = (deger) => ((deger - enAz) / (enCok - enAz)) * 100
  const oncekiOnYil = Math.max(enAz, Math.ceil(yil / 10) * 10 - 10)
  const sonrakiOnYil = Math.min(enCok, Math.floor(yil / 10) * 10 + 10)
  const kanit = kaynakZamanBaglami(manifest, yil)
  const kanitAraligi = kanit?.oncekiKanitYili === kanit?.sonrakiKanitYili
    ? 'Doğrudan yıl kanıtı'
    : `İki taraflı kanıt: ${yilEtiketi(kanit?.oncekiKanitYili)}–${yilEtiketi(kanit?.sonrakiKanitYili)}`
  return (
    <footer className="atlas-zaman-v3">
      <div className="atlas-zaman-araclari">
        <button type="button" className="atlas-oynat" onClick={() => oynatDegisti(!oynuyor)} aria-label={oynuyor ? 'Zamanı duraklat' : 'Zamanı oynat'}>{oynuyor ? <Pause size={17} /> : <Play size={17} />}</button>
        <button type="button" disabled={yil <= enAz} onClick={() => yilDegisti(oncekiOnYil, false)} aria-label="Önceki on yıllık durağa git"><ChevronLeft size={16} /></button>
        <div className="atlas-yil-girdisi"><input type="number" min={enAz} max={enCok} value={yil} onChange={(olay) => yilDegisti(Number(olay.target.value), true)} aria-label="Seçili yıl" /><small>SEÇİLİ YIL</small></div>
        <button type="button" disabled={yil >= enCok} onClick={() => yilDegisti(sonrakiOnYil, false)} aria-label="Sonraki on yıllık durağa git"><ChevronRight size={16} /></button>
        <label className="atlas-hiz"><span className="sr-only">Oynatma hızı</span><select value={hiz} onChange={(olay) => hizDegisti(Number(olay.target.value))}><option value={0.5}>0,5×</option><option value={1}>1×</option><option value={2}>2×</option></select></label>
      </div>
      <div className="atlas-zaman-cetveli">
        <div className="atlas-kilit-noktalar" aria-label="Kilit tarihler">
          {KILIT_TARIHLER.filter((olay) => olay.yil >= enAz && olay.yil <= enCok).map((olay) => (
            <button type="button" key={olay.yil} style={{ left: `${oran(olay.yil)}%` }} className={olay.yil === yil ? 'secili' : ''} title={`${olay.yil} · ${olay.ad}`} aria-label={`${olay.yil} ${olay.ad}`} onClick={() => yilDegisti(olay.yil, false)} />
          ))}
        </div>
        <input type="range" min={enAz} max={enCok} step="1" value={yil} onChange={(olay) => yilDegisti(Number(olay.target.value), true)} aria-label="Yıl zaman çizelgesi" aria-valuetext={`${yil} yılı; ${donem?.sourceYear} kaynak görüntüsü`} />
        <div className="atlas-zaman-etiketleri" aria-hidden="true">{[0, 400, 800, 1200, 1600, 1960].map((etiket) => <span key={etiket} style={{ left: `${oran(etiket)}%` }}>{etiket}</span>)}</div>
      </div>
      <div className={`atlas-zaman-kaynak ${kanit?.kesinlikSinifi || ''}`}><span>En yakın kaynak <b>{yilEtiketi(donem?.sourceYear)}</b></span><small>10 yıllık duraklar etkin · {kanitAraligi} · {kaynakFarkiMetni(yil, kanit?.kanitYili, kanit?.kaynakYili)}</small></div>
    </footer>
  )
}

export default function TarihAtlasi() {
  const [aramaParametreleri, setAramaParametreleri] = useSearchParams()
  const ilkDurum = useMemo(() => atlasDurumunuCoz(aramaParametreleri), [])
  const [manifest, setManifest] = useState(null)
  const [siyasi, setSiyasi] = useState(null)
  const [detay, setDetay] = useState(null)
  const [yil, setYil] = useState(ilkDurum.yil)
  const [mod, setMod] = useState(ilkDurum.mod)
  const [katmanlar, setKatmanlar] = useState(ilkDurum.katmanlar)
  const [seciliId, setSeciliId] = useState(ilkDurum.seciliId)
  const [kamera, setKamera] = useState(ilkDurum.kamera || ILK_KAMERA)
  const [katmanPaneliAcik, setKatmanPaneliAcik] = useState(false)
  const [arama, setArama] = useState('')
  const [aramaAcik, setAramaAcik] = useState(false)
  const [durum, setDurum] = useState('manifest-yukleniyor')
  const [hata, setHata] = useState(null)
  const [oynuyor, setOynuyor] = useState(false)
  const [hiz, setHiz] = useState(1)
  const [panelBoyu, setPanelBoyu] = useState('kisa')
  const [gecersizSecim, setGecersizSecim] = useState(null)
  const sonKameraYazimi = useRef(0)
  const guncelDurumRef = useRef({ yil, mod, seciliId, katmanlar, kamera })
  guncelDurumRef.current = { yil, mod, seciliId, katmanlar, kamera }

  const adresiGuncelle = useCallback((yama, replace = true) => {
    const yeni = { ...guncelDurumRef.current, ...yama }
    setAramaParametreleri(atlasDurumunuYaz(yeni), { replace })
  }, [setAramaParametreleri])

  useEffect(() => {
    const controller = new AbortController()
    jsonGetir('/atlas/v3/manifest.json', controller.signal)
      .then((veri) => { setManifest(veri); setDurum('paket-yukleniyor') })
      .catch((istekHatasi) => {
        if (istekHatasi.name === 'AbortError') return
        setHata('Atlas manifesti yüklenemedi. Yerel siyasi veri erişilemiyor.')
        setDurum('hata')
      })
    return () => controller.abort()
  }, [])

  const donem = useMemo(() => kaynakDonemiBul(manifest, yil), [manifest, yil])
  const detayDilimi = useMemo(() => detayDilimiBul(manifest, yil), [manifest, yil])
  const detayUrl = detayDilimi?.url || (manifest && yil >= 1590 && yil < 1700 ? manifest.detailPackages?.['1600'] : null)

  useEffect(() => {
    if (!donem) return undefined
    const controller = new AbortController()
    let gecerli = true
    const baslangic = Date.now()
    setDurum('paket-yukleniyor')
    setHata(null)
    Promise.all([jsonGetir(donem.politicalUrl, controller.signal), detayUrl ? jsonGetir(detayUrl, controller.signal) : Promise.resolve(null)])
      .then(([siyasiPaket, detayPaketi]) => {
        if (!gecerli) return
        setSiyasi(siyasiPaket); setDetay(detayPaketi); setDurum('hazir')
        if (import.meta.env.DEV) console.info(`Atlas ${donem.sourceYear} paketi ${Date.now() - baslangic} ms içinde hazırlandı.`)
      }).catch((istekHatasi) => {
        if (istekHatasi.name === 'AbortError' || !gecerli) return
        setHata(`${donem.sourceYear} kaynak paketi yüklenemedi. Önceki görünüm korunuyor.`); setDurum('hata')
      })
    return () => { gecerli = false; controller.abort() }
  }, [detayUrl, donem?.politicalUrl, donem?.sourceYear])

  const etkinDetay = useMemo(() => detayYilaGore(detay, yil), [detay, yil])
  const varliklar = useMemo(() => atlasVarliklariniBirleştir(siyasi, etkinDetay, yil), [siyasi, etkinDetay, yil])
  const secili = useMemo(() => varliklar.find((ozellik) => ozellik.properties?.id === seciliId) || null, [seciliId, varliklar])
  const kaynaklar = useMemo(() => {
    const tekil = new Map()
    ;[...(manifest?.sources || []), ...(detay?.meta?.sources || [])].forEach((kaynak) => tekil.set(kaynak.id, kaynak))
    return [...tekil.values()]
  }, [detay, manifest])
  const sonuclar = useMemo(() => aramaSonuclari(varliklar, arama), [arama, varliklar])

  useEffect(() => {
    if (!seciliId || durum !== 'hazir' || secili) return
    setGecersizSecim(seciliId); setSeciliId(null); adresiGuncelle({ seciliId: null }, true)
  }, [adresiGuncelle, durum, secili, seciliId])

  useEffect(() => {
    const cozulmus = atlasDurumunuCoz(aramaParametreleri, manifest?.supportedYears)
    if (cozulmus.yil !== yil) setYil(cozulmus.yil)
    if (cozulmus.mod !== mod) setMod(cozulmus.mod)
    if (cozulmus.seciliId !== seciliId) setSeciliId(cozulmus.seciliId)
    const gelen = [...cozulmus.katmanlar].sort().join(',')
    const mevcut = [...katmanlar].sort().join(',')
    if (gelen !== mevcut) setKatmanlar(cozulmus.katmanlar)
    if (cozulmus.kamera) setKamera(cozulmus.kamera)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aramaParametreleri])

  useEffect(() => {
    if (!oynuyor || !manifest) return undefined
    const azalt = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const gecikme = (azalt ? 1600 : 850) / hiz
    const zamanlayici = window.setInterval(() => {
      setYil((onceki) => {
        const yeni = onceki >= manifest.supportedYears.to ? manifest.supportedYears.from : onceki + 1
        adresiGuncelle({ yil: yeni, seciliId: null }, true)
        return yeni
      })
    }, gecikme)
    return () => window.clearInterval(zamanlayici)
  }, [adresiGuncelle, hiz, manifest, oynuyor])

  useEffect(() => {
    const tus = (olay) => {
      if (olay.key !== 'Escape') return
      if (aramaAcik) { setAramaAcik(false); return }
      if (katmanPaneliAcik) { setKatmanPaneliAcik(false); return }
      if (seciliId) { setSeciliId(null); adresiGuncelle({ seciliId: null }, false); document.querySelector('[data-atlas-search]')?.focus() }
    }
    window.addEventListener('keydown', tus)
    return () => window.removeEventListener('keydown', tus)
  }, [adresiGuncelle, aramaAcik, katmanPaneliAcik, seciliId])

  const yilDegisti = useCallback((yeniYil, replace = true) => {
    if (!manifest || !Number.isFinite(yeniYil)) return
    const guvenli = Math.max(manifest.supportedYears.from, Math.min(manifest.supportedYears.to, Math.round(yeniYil)))
    setYil(guvenli); setGecersizSecim(null); adresiGuncelle({ yil: guvenli }, replace)
  }, [adresiGuncelle, manifest])

  const secimYapildi = useCallback((id, replace = false) => {
    setSeciliId(id); setPanelBoyu('kisa'); setAramaAcik(false); setArama(''); adresiGuncelle({ seciliId: id }, replace)
  }, [adresiGuncelle])

  const aramadanSec = useCallback((ozellik) => secimYapildi(ozellik.properties.id, false), [secimYapildi])

  const katmanDegistir = useCallback((id) => {
    const yeniler = new Set(katmanlar)
    if (yeniler.has(id)) yeniler.delete(id); else yeniler.add(id)
    if (id === 'tarihsel-altlik' && !yeniler.has(id)) yeniler.delete('kaynak-adlari')
    setKatmanlar(yeniler); adresiGuncelle({ katmanlar: yeniler }, false)
  }, [adresiGuncelle, katmanlar])

  const modDegisti = useCallback((yeniMod) => {
    const yeniler = new Set(katmanlar); yeniler.add(yeniMod)
    setMod(yeniMod); setKatmanlar(yeniler); adresiGuncelle({ mod: yeniMod, katmanlar: yeniler }, false)
  }, [adresiGuncelle, katmanlar])

  const kameraDegisti = useCallback((yeniKamera) => {
    setKamera(yeniKamera)
    const simdi = Date.now()
    if (simdi - sonKameraYazimi.current < 500) return
    sonKameraYazimi.current = simdi; adresiGuncelle({ kamera: yeniKamera }, true)
  }, [adresiGuncelle])

  if (!manifest || !siyasi) {
    return (
      <main className="tarih-atlasi atlas-baslangic-durumu">
        <AtlasLogosu />
        {hata ? <><CircleAlert size={22} /><p>{hata}</p></> : <><LoaderCircle size={24} /><p>Dünya atlası hazırlanıyor…</p></>}
      </main>
    )
  }

  return (
    <main className="tarih-atlasi">
      <header className="atlas-ustbar-v3">
        <AtlasLogosu />
        <button type="button" className="atlas-menu-ac" onClick={() => setKatmanPaneliAcik(true)} aria-label="Harita modlarını ve katmanları aç"><Menu size={19} /></button>
        <AramaKutusu arama={arama} aramaDegisti={setArama} sonuclar={sonuclar} sec={aramadanSec} acik={aramaAcik} acikDegisti={setAramaAcik} />
        <KaynakBaglami manifest={manifest} yil={yil} />
        <Link to="/" className="atlas-platforma-don"><ArrowLeft size={15} /><span>Platforma dön</span></Link>
      </header>
      <div className="atlas-sahne-v3">
        <button type="button" className="atlas-katman-yuzen" onClick={() => setKatmanPaneliAcik(true)} aria-label="Harita modlarını ve katmanları aç"><Layers3 size={19} /><span>Katmanlar</span></button>
        <KatmanPaneli acik={katmanPaneliAcik} kapat={() => setKatmanPaneliAcik(false)} katmanlar={katmanlar} katmanDegistir={katmanDegistir} detay={etkinDetay} donem={donem} mod={mod} modDegisti={modDegisti} />
        <Harita siyasi={siyasi} detay={etkinDetay} yil={yil} katmanlar={katmanlar} mod={mod} secili={secili} secimYapildi={secimYapildi} ilkKamera={kamera} kameraDegisti={kameraDegisti} yukleniyor={durum === 'paket-yukleniyor'} yuklemeHatasi={hata} />
        {!secili && <div className="atlas-kesif-ipucu"><Globe2 size={16} /><span><b>Dünyayı keşfet</b> Yakınlaştır, ara veya bir siyasi yapıya dokun.</span></div>}
        {gecersizSecim && <div className="atlas-gecersiz-secim" role="status"><CircleAlert size={15} /> Seçtiğin nesne {yil} bağlamında yayında değil; seçim temizlendi.<button type="button" onClick={() => setGecersizSecim(null)} aria-label="Bildirimi kapat"><X size={14} /></button></div>}
        <SecimPaneli secili={secili} kapat={() => { secimYapildi(null, false); window.setTimeout(() => document.querySelector('[data-atlas-search]')?.focus(), 0) }} varliklar={varliklar} kaynaklar={kaynaklar} panelBoyu={panelBoyu} panelBoyuDegisti={setPanelBoyu} />
      </div>
      <ZamanCizelgesi manifest={manifest} donem={donem} yil={yil} yilDegisti={yilDegisti} oynuyor={oynuyor} oynatDegisti={setOynuyor} hiz={hiz} hizDegisti={setHiz} />
    </main>
  )
}
