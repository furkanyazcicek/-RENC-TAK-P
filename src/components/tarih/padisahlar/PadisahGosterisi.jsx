import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Compass, Crown, Film, Map as MapIcon } from 'lucide-react'
import {
  PADISAHLAR,
  cizelgeAraligi,
  oncekiPadisah,
  padisahAkisi,
  padisahBul,
  padisahSekmeleri,
  saltanatMetni,
  sonrakiPadisah,
} from '../../../data/padisahlar'
import { anlatimCizelgesi, anlatimSuresi, aktifBolum, bolumSirasi, kademeliGorunum } from '../../../lib/padisahAnlatim'
import { padisahSesAdresi, seslendirmeHazirMi } from '../../../lib/padisahAnlatim'
import useFonMuzigi from './useFonMuzigi'
import useAnlatimSaati from './useAnlatimSaati'
import AnlatimKontrolleri from './AnlatimKontrolleri'
import DonemHaritasi from './DonemHaritasi'
import OlaySahnesi from './OlaySahnesi'
import Portre from './Portre'
import SekmePaneli, { Tarih } from './SekmePaneli'
import ZamanCizelgesi from './ZamanCizelgesi'
import { AcilisSahnesi, GecisSahnesi, SonSahnesi } from './Sahneler'
import BelgeselAkisi from './BelgeselAkisi'
import '../../../styles/padisah-gecidi.css'
import '../../../styles/padisah-belgesel.css'

const BOLUM_ETIKETLERI = {
  intro: 'Dönemin girişi',
  reign: 'Hükümdarlık',
  event: 'Olay anlatımı',
  transition: 'Devir',
}

/**
 * OSMANLI PADİŞAHLARI GEÇİŞ GÖSTERİSİ — sahne yöneticisi
 *
 * Tek bir durum makinesi:
 *   acilis → padisah → (olay) → gecis → padisah → … → son
 *
 * İki mod aynı veriyi kullanır:
 *   belgesel → anlatım kendiliğinden akar, geçişler otomatik
 *   kesif    → öğrenci çizelgeden ve sekmelerden serbestçe gezer
 *
 * Bileşen hiçbir padişahı tanımaz; her şey `data/padisahlar`dan gelir.
 */
export default function PadisahGosterisi({ baslangicId = PADISAHLAR[0]?.id }) {
  const anaRef = useRef(null)
  const panelRef = useRef(null)
  const [aktifId, setAktifId] = useState(baslangicId)
  const [sahne, setSahne] = useState('acilis')
  const [mod, setMod] = useState('belgesel')
  const [sekme, setSekme] = useState('genel')
  const [seciliOlay, setSeciliOlay] = useState(null)
  const [hiz, setHiz] = useState(1)
  const [sesAcik, setSesAcik] = useState(true)
  const gecisZamanlayici = useRef(null)

  const padisah = padisahBul(aktifId) ?? PADISAHLAR[0]
  const onceki = oncekiPadisah(aktifId)
  const sonraki = sonrakiPadisah(aktifId)
  const kayitlar = useMemo(() => cizelgeAraligi(2), [])
  const sekmeler = useMemo(() => padisahSekmeleri(padisah), [padisah])
  const akis = useMemo(() => padisahAkisi(padisah), [padisah])
  const cizelge = useMemo(() => anlatimCizelgesi(padisah), [padisah])
  const toplamSure = useMemo(() => anlatimSuresi(cizelge), [cizelge])
  // Sesi kapatmak audio kaynağını sökmez; yalnızca susturur. Böylece
  // yeniden açıldığında anlatım kaldığı saniyeden devam eder.
  const sesAdresi = padisahSesAdresi(padisah)
  const sesHazir = seslendirmeHazirMi(padisah)
  const sekmeRefleri = useRef(new Map())

  const { an, calisiyor, bitti, sesRef, oynatDurdur, bolumeGit, sifirla, setCalisiyor } = useAnlatimSaati({
    cizelge,
    toplam: toplamSure,
    sesAdresi,
    // Belgesel modu artık kendi parallax akışını sürüyor; bu saat
    // yalnızca Keşif modundaki anlatım şeridini besler ve elle başlatılır.
    otomatik: false,
    hiz,
  })

  // Fon müziği anlatımdan ayrı kanaldır; anlatım konuşurken kendini kısar.
  const muzik = useFonMuzigi({ calisiyor })

  const aktifAnlatim = aktifBolum(cizelge, an)
  const anlatimSira = bolumSirasi(cizelge, an)
  const gecikmeler = useMemo(() => kademeliGorunum(10), [])

  /** Padişah değiştir — sahneyi ve sekmeyi de doğru duruma alır. */
  const padisahaGec = useCallback((id, yeniSahne = 'padisah') => {
    if (!padisahBul(id)) return
    setAktifId(id)
    setSekme('genel')
    setSeciliOlay(null)
    setSahne(yeniSahne)
  }, [])

  /** Geçiş sahnesini aç; sonraki padişah yoksa bölüm sonuna gider. */
  const gecisiAc = useCallback(() => {
    if (!padisah.transitionOut || !sonraki) {
      setSahne('son')
      return
    }
    setSahne('gecis')
  }, [padisah.transitionOut, sonraki])

  // Belgesel modunda anlatım bitince geçiş sahnesi kendiliğinden gelir.
  useEffect(() => {
    if (mod !== 'belgesel' || sahne !== 'padisah' || !bitti) return undefined
    gecisZamanlayici.current = setTimeout(gecisiAc, 900)
    return () => clearTimeout(gecisZamanlayici.current)
  }, [bitti, gecisiAc, mod, sahne])

  // Geçiş sahnesi belgesel modunda kendiliğinden ilerler.
  useEffect(() => {
    if (mod !== 'belgesel' || sahne !== 'gecis' || !sonraki) return undefined
    gecisZamanlayici.current = setTimeout(() => padisahaGec(sonraki.id), 6500)
    return () => clearTimeout(gecisZamanlayici.current)
  }, [mod, padisahaGec, sahne, sonraki])

  // Keşif moduna geçildiğinde anlatım durur; öğrenci yönetimi devralır.
  useEffect(() => {
    if (mod === 'kesif') setCalisiyor(false)
  }, [mod, setCalisiyor])

  // Klavye: ← → padişah değiştirir, boşluk anlatımı durdurur/başlatır.
  useEffect(() => {
    const dinleyici = (olay) => {
      const hedef = olay.target
      if (hedef instanceof HTMLElement && ['INPUT', 'SELECT', 'TEXTAREA'].includes(hedef.tagName)) return
      if (sahne === 'olay') return
      if (olay.key === 'ArrowRight' && sonraki) { olay.preventDefault(); padisahaGec(sonraki.id) }
      if (olay.key === 'ArrowLeft' && onceki) { olay.preventDefault(); padisahaGec(onceki.id) }
      if (olay.code === 'Space' && sahne === 'padisah') { olay.preventDefault(); oynatDurdur() }
    }
    window.addEventListener('keydown', dinleyici)
    return () => window.removeEventListener('keydown', dinleyici)
  }, [onceki, oynatDurdur, padisahaGec, sahne, sonraki])

  // Geniş ekranda sinematik sahne sabittir; uzun bilgi sağ panelde akar.
  // Kullanıcı imleci harita/portre üzerindeyken de tekerlek hareketini
  // bilgi paneline aktar. Mobilde sayfanın doğal kaydırması kullanılır.
  useEffect(() => {
    const ana = anaRef.current
    const panel = panelRef.current
    if (!ana || !panel) return undefined

    const kaydir = (olay) => {
      if (window.matchMedia('(max-width: 1023px)').matches) return
      if (sahne !== 'padisah') return
      if (olay.target instanceof Element && olay.target.closest('.pg-panel')) return
      if (Math.abs(olay.deltaX) > Math.abs(olay.deltaY)) return
      panel.scrollBy({ top: olay.deltaY, behavior: 'auto' })
    }

    ana.addEventListener('wheel', kaydir, { passive: true })
    return () => ana.removeEventListener('wheel', kaydir)
  }, [sahne])

  // Harita, portre ve kimlik bloğunu farklı hızlarda hareket ettiren parallax.
  // Masaüstünde sağ panelin, mobilde sayfanın kaydırma konumu kullanılır;
  // imleç yalnızca ince bir yön hissi ekler. React durumu yerine CSS
  // değişkenleri güncellendiği için her karede yeniden render oluşmaz.
  useEffect(() => {
    const ana = anaRef.current
    const panel = panelRef.current
    if (!ana || !panel) return undefined

    const hareketAzalt = window.matchMedia('(prefers-reduced-motion: reduce)')
    let imlecX = 0
    let imlecY = 0
    let kare = 0

    const sinirla = (deger, alt, ust) => Math.min(ust, Math.max(alt, deger))

    const uygula = () => {
      kare = 0
      if (hareketAzalt.matches) return

      const mobil = window.matchMedia('(max-width: 1023px)').matches
      const kaydirma = mobil ? window.scrollY : panel.scrollTop
      const gorunum = Math.max(window.innerHeight, 640)
      const ilerleme = sinirla(kaydirma / gorunum, 0, 1.35)

      ana.style.setProperty('--pg-zemin-x', `${imlecX * -10}px`)
      ana.style.setProperty('--pg-zemin-y', `${imlecY * -7 - ilerleme * 14}px`)
      ana.style.setProperty('--pg-doku-y', `${ilerleme * -18}px`)
      ana.style.setProperty('--pg-harita-x', `${imlecX * -22}px`)
      ana.style.setProperty('--pg-harita-y', `${imlecY * -12 - ilerleme * 48}px`)
      ana.style.setProperty('--pg-portre-x', `${imlecX * 9}px`)
      ana.style.setProperty('--pg-portre-y', `${imlecY * 6 - ilerleme * 16}px`)
      ana.style.setProperty('--pg-kimlik-x', `${imlecX * 4}px`)
      ana.style.setProperty('--pg-kimlik-y', `${imlecY * 3 - ilerleme * 7}px`)
    }

    const sirayaAl = () => {
      if (!kare) kare = window.requestAnimationFrame(uygula)
    }

    const imleciIzle = (olay) => {
      if (olay.pointerType === 'touch') return
      const alan = ana.getBoundingClientRect()
      imlecX = sinirla(((olay.clientX - alan.left) / Math.max(alan.width, 1)) * 2 - 1, -1, 1)
      imlecY = sinirla(((olay.clientY - alan.top) / Math.max(window.innerHeight, 1)) * 2 - 1, -1, 1)
      sirayaAl()
    }

    const imleciSifirla = () => {
      imlecX = 0
      imlecY = 0
      sirayaAl()
    }

    const hareketTercihiDegisti = () => {
      if (hareketAzalt.matches) {
        ana.style.removeProperty('--pg-zemin-x')
        ana.style.removeProperty('--pg-zemin-y')
        ana.style.removeProperty('--pg-doku-y')
        ana.style.removeProperty('--pg-harita-x')
        ana.style.removeProperty('--pg-harita-y')
        ana.style.removeProperty('--pg-portre-x')
        ana.style.removeProperty('--pg-portre-y')
        ana.style.removeProperty('--pg-kimlik-x')
        ana.style.removeProperty('--pg-kimlik-y')
      } else {
        sirayaAl()
      }
    }

    ana.addEventListener('pointermove', imleciIzle, { passive: true })
    ana.addEventListener('pointerleave', imleciSifirla)
    panel.addEventListener('scroll', sirayaAl, { passive: true })
    window.addEventListener('scroll', sirayaAl, { passive: true })
    window.addEventListener('resize', sirayaAl, { passive: true })
    hareketAzalt.addEventListener('change', hareketTercihiDegisti)
    uygula()

    return () => {
      if (kare) window.cancelAnimationFrame(kare)
      ana.removeEventListener('pointermove', imleciIzle)
      ana.removeEventListener('pointerleave', imleciSifirla)
      panel.removeEventListener('scroll', sirayaAl)
      window.removeEventListener('scroll', sirayaAl)
      window.removeEventListener('resize', sirayaAl)
      hareketAzalt.removeEventListener('change', hareketTercihiDegisti)
    }
  }, [])

  const olayAc = useCallback((olay) => {
    setCalisiyor(false)
    setSeciliOlay(olay)
    setSahne('olay')
  }, [setCalisiyor])

  const olayKapat = useCallback(() => {
    setSeciliOlay(null)
    setSahne('padisah')
  }, [])

  const oran = toplamSure ? Math.min(1, an / toplamSure) : 0

  const sekmeTuslari = (olay, sira) => {
    let hedef = null
    if (olay.key === 'ArrowRight') hedef = (sira + 1) % sekmeler.length
    if (olay.key === 'ArrowLeft') hedef = (sira - 1 + sekmeler.length) % sekmeler.length
    if (olay.key === 'Home') hedef = 0
    if (olay.key === 'End') hedef = sekmeler.length - 1
    if (hedef === null) return
    olay.preventDefault()
    const kod = sekmeler[hedef].kod
    setSekme(kod)
    sekmeRefleri.current.get(kod)?.focus()
  }

  /**
   * Keşif moduna geçerken açılış perdesi ekranda kalmamalı: belgesel
   * modu `sahne` durumunu hiç kullanmadığı için, kullanıcı henüz
   * "Anlatımı başlat" demeden geçtiğinde perde asılı kalıyordu.
   */
  function modDegis(yeniMod) {
    setMod(yeniMod)
    if (yeniMod === 'kesif' && sahne === 'acilis') setSahne('padisah')
  }

  return (
    <main className="padisah-gecidi" data-mod={mod} ref={anaRef}>
      <header className="pg-ustbar">
        <div className="pg-marka">
          <span className="pg-marka-simge" aria-hidden="true">DK</span>
          <span className="pg-marka-yazi">
            <b>Osmanlı Padişahları</b>
            <small>Geçiş Gösterisi</small>
          </span>
        </div>

        <div className="pg-mod-secim" role="group" aria-label="Anlatım modu">
          <button type="button" aria-pressed={mod === 'belgesel'} onClick={() => setMod('belgesel')}>
            <Film size={14} aria-hidden="true" /> Belgesel modu
          </button>
          <button type="button" aria-pressed={mod === 'kesif'} onClick={() => modDegis('kesif')}>
            <Compass size={14} aria-hidden="true" /> Keşif modu
          </button>
        </div>

        <Link to="/kutuphane/notlar" className="pg-cikis">
          <ArrowLeft size={14} aria-hidden="true" /> Kütüphaneye dön
        </Link>
      </header>

      {/* İKİ MOD, İKİ AYRI SAHNE DİLİ
          belgesel → kaydırdıkça akan parallax anlatı (BelgeselAkisi)
          keşif    → sekmeli inceleme ekranı (aşağıdaki iki sütun)
          İkisi de aynı `data/padisahlar` kaynağını okur. */}
      {mod === 'belgesel' ? (
        <>
          <BelgeselAkisi aktifId={aktifId} onAktifDegis={setAktifId} hiz={hiz} />
          <ZamanCizelgesi kayitlar={kayitlar} aktifId={aktifId} onSec={setAktifId} />
        </>
      ) : (
      <div className="pg-sahne">
        <div className="pg-sol">
          <div className="pg-sol-harita" data-gecis={sahne === 'gecis' ? 'true' : undefined} aria-hidden="true">
            <DonemHaritasi
              key={padisah.mapState.id}
              haritaId={padisah.mapState.id}
              vurgular={padisah.mapState.highlight}
              lejant={false}
              not={false}
            />
          </div>

          <div className="pg-portre-alan">
            <Portre key={padisah.id} padisah={padisah} cikis={sahne === 'gecis'} />
          </div>

          <div className="pg-kimlik">
            <span className="pg-kimlik-sira pg-kademe" style={{ '--pg-gecikme': `${gecikmeler[0] * 1000}ms` }}>
              <Crown size={12} aria-hidden="true" /> {padisah.order}. Padişah · {padisah.dynastyPeriod}
            </span>
            <h1 className="pg-kimlik-ad pg-kademe" style={{ '--pg-gecikme': `${gecikmeler[1] * 1000}ms` }}>
              {padisah.name}
            </h1>
            {padisah.epithet && (
              <p className="pg-kimlik-unvan pg-kademe" style={{ '--pg-gecikme': `${gecikmeler[2] * 1000}ms` }}>
                {padisah.epithet}
              </p>
            )}
            <p className="pg-kimlik-yil pg-kademe" style={{ '--pg-gecikme': `${gecikmeler[3] * 1000}ms` }}>
              <Tarih deger={padisah.reignStart} /> – <Tarih deger={padisah.reignEnd} /> · {saltanatMetni(padisah)}
            </p>
          </div>

          <ZamanCizelgesi
            kayitlar={kayitlar}
            aktifId={aktifId}
            onSec={(id) => { setMod('kesif'); padisahaGec(id) }}
          />

          <div className="pg-harita-serit">
            <div>
              <MapIcon size={14} aria-hidden="true" />
              <span>
                <strong>{padisah.mapState.caption}</strong>{' '}
                Harita şematiktir; ölçekli sınır haritası değildir.
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setMod('kesif')
                setSekme('harita')
              }}
            >
              Sınırları keşfet <ChevronRight size={13} aria-hidden="true" />
            </button>
          </div>

        </div>

        <div className="pg-sag">
          <div className="pg-panel" ref={panelRef}>
            <div className="pg-sekmeler" role="tablist" aria-label="Padişah bilgi sekmeleri">
              {sekmeler.map((oge, sira) => (
                <button
                  key={oge.kod}
                  ref={(dugme) => {
                    if (dugme) sekmeRefleri.current.set(oge.kod, dugme)
                    else sekmeRefleri.current.delete(oge.kod)
                  }}
                  type="button"
                  role="tab"
                  id={`pg-tab-${padisah.id}-${oge.kod}`}
                  aria-controls={`pg-panel-${padisah.id}-${oge.kod}`}
                  aria-selected={sekme === oge.kod}
                  tabIndex={sekme === oge.kod ? 0 : -1}
                  onClick={() => setSekme(oge.kod)}
                  onKeyDown={(olay) => sekmeTuslari(olay, sira)}
                >
                  {oge.ad}
                  {oge.adet ? <span className="pg-sekme-adet">{oge.adet}</span> : null}
                </button>
              ))}
            </div>

            <div
              role="tabpanel"
              id={`pg-panel-${padisah.id}-${sekme}`}
              aria-labelledby={`pg-tab-${padisah.id}-${sekme}`}
              tabIndex={0}
            >
              <SekmePaneli sekme={sekme} padisah={padisah} akis={akis} onOlayAc={olayAc} />
            </div>
          </div>

          <AnlatimKontrolleri
            calisiyor={calisiyor}
            oran={oran}
            metin={aktifAnlatim?.text}
            bolumEtiketi={`${BOLUM_ETIKETLERI[aktifAnlatim?.kind] ?? 'Anlatım'} · ${Math.max(1, anlatimSira + 1)}/${cizelge.length}`}
            hiz={hiz}
            onHizDegis={setHiz}
            onOynatDurdur={oynatDurdur}
            onSifirla={sifirla}
            onOnceki={() => onceki && padisahaGec(onceki.id)}
            onSonraki={() => (sonraki ? padisahaGec(sonraki.id) : gecisiAc())}
            oncekiVar={Boolean(onceki)}
            sonrakiVar={Boolean(sonraki) || Boolean(padisah.transitionOut)}
            sesAcik={sesAcik}
            sesHazir={sesHazir}
            onSesDegis={() => setSesAcik((eski) => !eski)}
            muzikVar={muzik.muzikVar}
            muzikAcik={muzik.acik}
            onMuzikDegis={muzik.degistir}
            bolumler={cizelge}
            aktifBolumSirasi={anlatimSira}
            onBolumeGit={bolumeGit}
          />
          {/* Ses geldiğinde bu öğe kaynağı alır; bugün adres yok, sessizdir. */}
          {sesAdresi && <audio ref={sesRef} src={sesAdresi} preload="metadata" muted={!sesAcik} />}
          {/* Döngüde çalar; seviyesini useFonMuzigi yönetir. */}
          {muzik.adres && <audio ref={muzik.sesRef} src={muzik.adres} preload="none" loop />}
        </div>

        {/* Sinematik sahneler iki sütunun da üzerine gelir. Böylece açılışta
            bilgi kartları erken görünmez; olay anlatımı da dar portre alanına
            sıkışmaz. Üst bar ve kronoloji omurgası erişilebilir kalır. */}
        {sahne === 'acilis' && (
          <AcilisSahnesi
            yil={padisah.reignStart.value}
            baslik={padisah.openingHeadline}
            alt={padisah.summary}
            haritaId={padisah.mapState.id}
            vurgular={padisah.mapState.highlight}
            portre={padisah.portrait}
            onBasla={() => setSahne('padisah')}
          />
        )}

        {sahne === 'gecis' && padisah.transitionOut && (
          <GecisSahnesi
            gecis={padisah.transitionOut}
            sonrakiAd={sonraki?.name}
            otomatik={mod === 'belgesel'}
            onDevam={() => (sonraki ? padisahaGec(sonraki.id) : setSahne('son'))}
          />
        )}

        {sahne === 'son' && (
          <SonSahnesi
            onBastanBasla={() => padisahaGec(PADISAHLAR[0].id, 'acilis')}
          />
        )}

        {sahne === 'olay' && seciliOlay && (
          <OlaySahnesi olay={seciliOlay} haritaId={padisah.mapState.id} onKapat={olayKapat} />
        )}
      </div>
      )}

    </main>
  )
}
