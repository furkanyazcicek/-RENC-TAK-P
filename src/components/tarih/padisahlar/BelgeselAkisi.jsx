import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { ChevronDown, Crown, Info, MapPin, Music2, Pause, Play, TriangleAlert, Volume2, VolumeX } from 'lucide-react'
import { belgeselAkisi, panelSuresi } from '../../../data/padisahlar/belgeselAkisi'
import { NITELIK_ALANLARI, NITELIK_KADEMELERI } from '../../../data/padisahlar/tipler'
import { padisahBul } from '../../../data/padisahlar'
import { belgeselSesAdresi, belgeselSesSuresi } from '../../../lib/padisahAnlatim'
import { BELGESEL_ANLATIMLARI, BELGESEL_GECIS_BASLIKLARI } from '../../../data/padisahlar/belgeselAnlatimlari'
import BelgeselGirisi from './BelgeselGirisi'
import DonemHaritasi from './DonemHaritasi'
import useDerinlik from './useDerinlik'

/**
 * BELGESEL MODU — parallax anlatı akışı
 * ==================================================================
 *
 * Keşif modu bir bilgi ekranıdır; burası bir ANLATIDIR. Öğrenci
 * kaydırdıkça silsile ilerler: arka plandaki tarihî görsel yavaş,
 * harita orta hızda, metin ve portre kartı daha hızlı kayar. Aradaki
 * hız farkı "sahne geçiyor" hissini üretir.
 *
 * Katman düzeni (arkadan öne):
 *   1. Görsel  → padişahın temsilî illüstrasyonu, bulanık ve karartılmış
 *   2. Harita  → dönemin şematik hâkimiyet krokisi
 *   3. Portre  → yandan giren kart
 *   4. Metin   → yıl, başlık, anlatım
 *
 * Otomatik oynatma panelden panele yumuşak kaydırır; kullanıcı
 * kaydırmaya başladığı anda durur — anlatım öğrencinin elinden alınmaz.
 */

const GECIS_ETIKETLERI = {
  devir: 'Tahtın devri',
  kesinti: 'Kesinti',
  bolunme: 'Bölünme',
  birlesme: 'Yeniden birleşme',
  fetih: 'Büyük fetih',
}

function PanelGorselleri({ panel }) {
  if (!panel.gorsel) return null
  return (
    <div className="pgb-katman pgb-katman-gorsel" aria-hidden="true">
      <img src={panel.gorsel} alt="" loading="lazy" decoding="async" />
    </div>
  )
}

/**
 * Harita kartı — zemin dokusu olarak denendi ve okunmadı: kendi koyu
 * kara/deniz dolgusuyla panelin üzerine kirli bir kutu gibi oturuyordu.
 * Bilgi taşıyan bir öğe olduğu için artık yanda, kendi çerçevesinde ve
 * metinden farklı hızda kayarak görünür.
 */
function HaritaKarti({ panel }) {
  if (!panel.haritaId) return null
  return (
    <figure className="pgb-harita-kart">
      {/* Odaklı yakınlaşma (zoom) denendi: kart neredeyse boş kalıyor ve
          öğrenci nereye baktığını kaybediyordu. Bütün kroki gösterilip
          olayın yeri işaretleniyor — konum bağlamıyla birlikte okunuyor. */}
      <DonemHaritasi
        haritaId={panel.haritaId}
        vurgular={panel.vurgular ?? (panel.odak ? [panel.odak] : [])}
        lejant={false}
        not={false}
        sigdir
      />
      <figcaption>
        {panel.odak ? 'Olayın geçtiği yer haritada işaretli' : 'Dönem sonundaki şematik görünüm'}
      </figcaption>
    </figure>
  )
}

function Yil({ panel }) {
  return (
    <p className="pgb-yil">
      {panel.yil}
      {panel.tartismali && (
        <span className="pgb-tartismali" title={panel.tartismali}>
          <TriangleAlert size={13} aria-hidden="true" />
          <span className="sr-only">Kaynaklara göre değişir: {panel.tartismali}</span>
        </span>
      )}
    </p>
  )
}

function PortreKarti({ panel, padisah }) {
  if (!panel.gorsel) return null
  return (
    <figure className="pgb-portre">
      <img src={panel.gorsel} alt={padisah?.portrait?.alt ?? ''} loading="lazy" decoding="async" />
      <figcaption>Temsilî illüstrasyon</figcaption>
    </figure>
  )
}

function PanelIcerigi({ panel, padisah }) {
  switch (panel.tur) {
    case 'kapi':
      return (
        <>
          <Yil panel={panel} />
          <div className="pgb-cizgi" />
          <h2 className="pgb-baslik pgb-baslik-buyuk">{panel.baslik}</h2>
          <p className="pgb-metin">{panel.metin}</p>
        </>
      )

    case 'kunye':
      return (
        <div className="pgb-ikili">
          <PortreKarti panel={panel} padisah={padisah} />
          <div>
            <span className="pgb-rozet">
              <Crown size={12} aria-hidden="true" /> {padisah?.order}. Padişah
            </span>
            {/* Eksik içeriğin "tam" gibi görünmesi en tehlikeli durum:
                özet kayıtlar öğrenciye açıkça söylenir. */}
            {padisah?.detaySeviyesi !== 'tam' && (
              <span className="pgb-rozet pgb-rozet-ozet">Özet kayıt</span>
            )}
            <h2 className="pgb-baslik pgb-baslik-buyuk">{panel.baslik}</h2>
            {panel.altBaslik && <p className="pgb-alt">{panel.altBaslik}</p>}
            <p className="pgb-yil pgb-yil-kucuk">{panel.yil} · {panel.metin}</p>
            {padisah?.detaySeviyesi === 'ozet' && (
              <p className="pgb-ozet-uyari">
                Bu padişahın ayrıntılı anlatımı henüz hazırlanmadı. Aşağıdaki
                bilgiler doğrulanmış özet kayıtlardır; savaş, fetih ve kişi
                anlatımları ile sesli anlatım metni sonraki aşamada eklenecek.
              </p>
            )}
            {padisah?.detaySeviyesi === 'anlatimli' && (
              <p className="pgb-ozet-uyari">
                Bu padişahın sesli anlatımı hazırlandı. Ekranda gördüğün savaş,
                fetih ve kişi kayıtları ise şimdilik doğrulanmış özet
                düzeyindedir; ayrıntılı kayıtlar sonraki aşamada eklenecek.
              </p>
            )}
            <dl className="pgb-kunye">
              {panel.kunye.map((satir) => (
                <div key={satir.etiket}>
                  <dt>{satir.etiket}</dt>
                  <dd>{satir.deger}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      )

    case 'olay':
      return (
        <div className={panel.haritaId ? 'pgb-ikili pgb-ikili-ters' : undefined}>
          <div>
            <Yil panel={panel} />
            <h2 className="pgb-baslik">{panel.baslik}</h2>
            {panel.odak && (
              <p className="pgb-odak"><MapPin size={12} aria-hidden="true" /> Yeri yandaki haritada işaretli</p>
            )}
            <p className="pgb-metin">{panel.metin}</p>
            {panel.vurgu && (
              <p className="pgb-vurgu"><strong>Sonuç:</strong> {panel.vurgu}</p>
            )}
            {panel.osym && (
              <p className="pgb-osym"><span>ÖSYM’de bil</span>{panel.osym}</p>
            )}
          </div>
          <HaritaKarti panel={panel} />
        </div>
      )

    case 'karakter':
      return (
        <div className={panel.haritaId ? 'pgb-ikili pgb-ikili-ters' : undefined}>
          <div>
          <h2 className="pgb-baslik">{panel.baslik}</h2>
          {panel.metin && <p className="pgb-metin">{panel.metin}</p>}
          <div className="pgb-nitelikler">
            {panel.traits.map((nitelik) => {
              const kademe = NITELIK_KADEMELERI[nitelik.level]
              return (
                <div className="pgb-nitelik" key={`${nitelik.field}-${nitelik.label}`}>
                  <div className="pgb-nitelik-ust">
                    <span>{nitelik.label}</span>
                    <small>{kademe.label}</small>
                  </div>
                  <div
                    className="pgb-nitelik-ray"
                    role="img"
                    aria-label={`${NITELIK_ALANLARI[nitelik.field]}: ${kademe.label}`}
                  >
                    <span style={{ '--pg-oran': kademe.oran }} />
                  </div>
                  <p>{nitelik.evidence}</p>
                </div>
              )
            })}
          </div>
          </div>
          <HaritaKarti panel={panel} />
        </div>
      )

    case 'osym':
      return (
        <>
          <h2 className="pgb-baslik">{panel.baslik}</h2>
          <ol className="pgb-osym-liste">
            {panel.maddeler.map((madde, sira) => (
              <li key={madde}><span>{sira + 1}</span>{madde}</li>
            ))}
          </ol>
        </>
      )

    case 'gecis':
      return (
        <div className="pgb-gecis-govde">
          <span className="pgb-rozet pgb-rozet-gecis">
            {GECIS_ETIKETLERI[panel.gecisTuru] ?? 'Geçiş'}
          </span>
          <Yil panel={panel} />
          {/* Veri katmanındaki başlık bilgi ekranı için yazılmıştır
              ("Taht Orhan Gazi'ye Geçiyor"). Belgeselde geçiş bir sahne
              kapanışıdır; başlık olayı değil ANLAMI duyurmalıdır.
              Yazılmamış padişah kendi veri başlığını kullanır. */}
          <h2 className="pgb-baslik pgb-baslik-buyuk">
            {BELGESEL_GECIS_BASLIKLARI[panel.padisahId] ?? panel.baslik}
          </h2>
          {panel.metin && <p className="pgb-metin">{panel.metin}</p>}
          {panel.sonrakiGorsel && (
            <div className="pgb-devir">
              <figure className="pgb-devir-eski">
                <img src={panel.gorsel} alt="" loading="lazy" decoding="async" />
              </figure>
              <ChevronDown className="pgb-devir-ok" aria-hidden="true" />
              <figure className="pgb-devir-yeni">
                <img src={panel.sonrakiGorsel} alt="" loading="lazy" decoding="async" />
                <figcaption>{panel.sonrakiAd}</figcaption>
              </figure>
            </div>
          )}
        </div>
      )

    default:
      return null
  }
}

export default function BelgeselAkisi({
  aktifId,
  onAktifDegis,
  hiz = 1,
  onOynuyorDegis,
  muzikVar = false,
  muzikAcik = false,
  onMuzikDegis,
}) {
  const kapsayiciRef = useRef(null)
  const panelRefleri = useRef(new Map())
  const [oynuyor, setOynuyor] = useState(false)
  const [aktifPanel, setAktifPanel] = useState(0)
  const [sesAcik, setSesAcik] = useState(true)
  const otomatikKaydirmaRef = useRef(false)
  const zamanlayiciRef = useRef(null)
  const sesRef = useRef(null)
  const calanPanelRef = useRef(null)

  const paneller = useMemo(() => belgeselAkisi(), [])

  /**
   * SES PANELİ SÜRER, ZAMANLAYICI DEĞİL.
   *
   * Panel süreleri (`panelSuresi`) ses yokken kullanılan tahminlerdir.
   * Kayıt varsa panel, kaydı bitince ilerler. Senkron böylece tahminle
   * değil sesin kendi uzunluğuyla kurulur: anlatıcı bir olayı
   * anlatırken ekranda başka bir sahne duramaz.
   *
   * Metni yazılmamış panel sessizce tahmini süresiyle akar; eksik
   * içerik belgeseli durdurmaz.
   */
  const suankiPanel = paneller[aktifPanel] ?? null
  const suankiMetin = suankiPanel ? BELGESEL_ANLATIMLARI[suankiPanel.id] : null
  const aktifSesAdresi = useMemo(
    () => (suankiPanel ? belgeselSesAdresi(suankiPanel.id, suankiMetin) : null),
    [suankiPanel, suankiMetin],
  )
  useDerinlik(kapsayiciRef)

  /**
   * BELİRME GÜVENLİK AĞI
   *
   * Panel belirmeleri `animation-timeline: view()` ile sürülüyor. Bu
   * animasyon `fill: both` olduğu için, zaman çizelgesi herhangi bir
   * sebeple SÜRMEZSE tarayıcı animasyonun başlangıç karesini uygular —
   * yani `--pg-belir: 0`, yani içerik GÖRÜNMEZ kalır.
   *
   * Bir eğitim ürününde kabul edilebilir en kötü sonuç "animasyon
   * olmadı"dır; "içerik gelmedi" değil. Bu yüzden iki kare sonra zaman
   * çizelgesinin gerçekten sürüp sürmediği ölçülür (`currentTime`
   * null mı?); sürmüyorsa belirme CSS'i kapatılır ve her şey doğrudan
   * görünür olur.
   */
  useEffect(() => {
    const kapsayici = kapsayiciRef.current
    if (!kapsayici) return undefined
    if (typeof CSS === 'undefined' || !CSS.supports?.('animation-timeline: view()')) return undefined

    const kontrolEt = () => {
      const oge = kapsayici.querySelector('.pgb-icerik')
      const animasyon = oge?.getAnimations?.().find((a) => a.animationName === 'pg-belirme-tetik')
      const suruyor = Boolean(animasyon) && animasyon.currentTime !== null
      kapsayici.classList.toggle('pgb-belirme-kapali', !suruyor)
    }

    // İki kare beklenir: ilk karede zaman çizelgesi henüz bağlanmamış olabilir.
    let kare = requestAnimationFrame(() => { kare = requestAnimationFrame(kontrolEt) })
    // requestAnimationFrame arka plandaki sekmede hiç çalışmayabilir;
    // zamanlayıcı ikinci bir yoldur. İkisi de aynı kontrolü yapar.
    const zamanlayici = window.setTimeout(kontrolEt, 400)
    document.addEventListener('visibilitychange', kontrolEt)
    return () => {
      cancelAnimationFrame(kare)
      window.clearTimeout(zamanlayici)
      document.removeEventListener('visibilitychange', kontrolEt)
    }
  }, [])

  // Hangi panel ekranın ortasında? Üst bar ve zaman çizelgesi buna bakar.
  useEffect(() => {
    const kapsayici = kapsayiciRef.current
    if (!kapsayici) return undefined

    /**
     * "Ekranın ortasındaki panel hangisi?" sorusu, panelin görünen
     * ORANIYLA ölçülemez: bir panel ekrandan uzun olduğunda görünen
     * oranı hiçbir zaman eşiğe ulaşmaz ve gözlemci hiç tetiklenmez —
     * bu da otomatik oynatmayı ve üstteki padişah takibini durduruyordu.
     * Bunun yerine kök, ekranın ortasında ince bir şeride daraltılır:
     * o şeridi kesen panel aktif paneldir.
     */
    const gozlemci = new IntersectionObserver(
      (girisler) => {
        const kesisen = girisler.filter((giris) => giris.isIntersecting)
        if (!kesisen.length) return
        const hedef = kesisen[0].target
        const sira = Number(hedef.dataset.sira)
        if (!Number.isInteger(sira)) return
        setAktifPanel(sira)
        const panel = paneller[sira]
        if (panel && panel.padisahId !== aktifId) onAktifDegis?.(panel.padisahId)
      },
      { root: kapsayici, rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )

    panelRefleri.current.forEach((oge) => oge && gozlemci.observe(oge))
    return () => gozlemci.disconnect()
  }, [aktifId, onAktifDegis, paneller])

  /**
   * Hedef panele git.
   *
   * `scrollIntoView` yerine hedef konum elle hesaplanıyor: öğenin
   * `offsetParent`'ı düzene göre değiştiği için offsetTop güvenilir
   * değil, kutu konumlarının farkı ise her zaman doğru.
   *
   * Ayrıca yumuşak kaydırma bazı ortamlarda hiç başlamıyor (sekme
   * arka planda, hareket azaltma, bazı gömülü tarayıcılar). Yarım
   * saniye sonra hedefe ulaşılmadıysa doğrudan atlanır — düğme her
   * koşulda bir işe yarar.
   */
  const panelinYanina = useCallback((sira) => {
    const oge = panelRefleri.current.get(sira)
    const kapsayici = kapsayiciRef.current
    if (!oge || !kapsayici) return
    otomatikKaydirmaRef.current = true

    const hedef = Math.max(
      0,
      kapsayici.scrollTop + (oge.getBoundingClientRect().top - kapsayici.getBoundingClientRect().top)
    )
    const hareketAzalt = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    kapsayici.scrollTo({ top: hedef, behavior: hareketAzalt ? 'auto' : 'smooth' })

    window.setTimeout(() => {
      if (Math.abs(kapsayici.scrollTop - hedef) > 8) kapsayici.scrollTop = hedef
      otomatikKaydirmaRef.current = false
    }, 500)
  }, [])

  // Otomatik oynatma: panelden panele ilerler.
  useEffect(() => {
    if (!oynuyor) return undefined
    const panel = paneller[aktifPanel]
    if (!panel) return undefined
    // Kaydı olan panelde ilerlemeyi ses tetikler (aşağıdaki 'ended'
    // dinleyicisi); zamanlayıcı yalnızca sessiz panellerde çalışır.
    if (belgeselSesSuresi(panel.id, BELGESEL_ANLATIMLARI[panel.id])) return undefined
    const sure = (panelSuresi(panel) / Math.max(0.25, hiz)) * 1000
    zamanlayiciRef.current = window.setTimeout(() => {
      if (aktifPanel + 1 < paneller.length) panelinYanina(aktifPanel + 1)
      else setOynuyor(false)
    }, sure)
    return () => window.clearTimeout(zamanlayiciRef.current)
  }, [aktifPanel, hiz, oynuyor, panelinYanina, paneller])

  /**
   * SESİN OYNATILMASI
   *
   * Kural: ses ancak öğrenci oynat düğmesine bastıktan sonra çalar.
   * Tarayıcılar zaten kullanıcı dokunmadan ses çalmayı engeller; ama
   * engellemeseler bile sayfayı açar açmaz konuşma başlaması rahatsız
   * edicidir.
   *
   * Padişah değiştiğinde kayıt baştan başlar. Öğrenci akışın ortasına
   * kaydırıp oynat derse, ses o padişahın panelleri içindeki konuma
   * ORANTILI yerden devam eder; yoksa anlatıcı baştan başlarken ekran
   * ortadan devam ediyor olurdu.
   */
  useEffect(() => {
    const ses = sesRef.current
    if (!ses) return undefined

    if (!oynuyor || !sesAcik || !aktifSesAdresi) {
      ses.pause()
      return undefined
    }

    // Panel değiştiyse kayıt baştan başlar.
    if (calanPanelRef.current !== aktifSesAdresi) {
      calanPanelRef.current = aktifSesAdresi
      ses.currentTime = 0
    }
    ses.playbackRate = Math.max(0.5, Math.min(2, hiz))
    void ses.play().catch(() => {})
    return undefined
  }, [oynuyor, sesAcik, aktifSesAdresi, hiz])

  /* Kayıt bitti → sıradaki panele geç. Senkronun kalbi burasıdır. */
  useEffect(() => {
    const ses = sesRef.current
    if (!ses || !aktifSesAdresi) return undefined
    const bitti = () => {
      if (!oynuyor) return
      if (aktifPanel + 1 < paneller.length) panelinYanina(aktifPanel + 1)
      else setOynuyor(false)
    }
    ses.addEventListener('ended', bitti)
    return () => ses.removeEventListener('ended', bitti)
  }, [aktifSesAdresi, aktifPanel, oynuyor, paneller.length, panelinYanina])

  // Belgesel duraklayınca fon müziği de bunu bilmeli (kısılma/yükselme).
  useEffect(() => {
    onOynuyorDegis?.(oynuyor)
  }, [oynuyor, onOynuyorDegis])

  // Kullanıcı kendisi kaydırırsa otomatik anlatım durur.
  useEffect(() => {
    const kapsayici = kapsayiciRef.current
    if (!kapsayici) return undefined
    const elleKaydirma = () => {
      if (!otomatikKaydirmaRef.current && oynuyor) setOynuyor(false)
    }
    kapsayici.addEventListener('wheel', elleKaydirma, { passive: true })
    kapsayici.addEventListener('touchmove', elleKaydirma, { passive: true })
    return () => {
      kapsayici.removeEventListener('wheel', elleKaydirma)
      kapsayici.removeEventListener('touchmove', elleKaydirma)
    }
  }, [oynuyor])

  // Dışarıdan padişah seçilirse (zaman çizelgesi) o padişahın kapısına git.
  useEffect(() => {
    const hedef = paneller.findIndex((panel) => panel.padisahId === aktifId)
    if (hedef < 0) return
    const suanki = paneller[aktifPanel]
    if (suanki?.padisahId === aktifId) return
    panelinYanina(hedef)
    // aktifPanel bilerek bağımlılığa alınmadı: bu etki yalnızca DIŞARIDAN
    // gelen padişah değişiminde çalışmalı, kaydırmanın kendisinde değil.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aktifId])

  const ilerleme = paneller.length ? (aktifPanel + 1) / paneller.length : 0

  return (
    <div className="pgb">
      <div className="pgb-akis" ref={kapsayiciRef}>
        <BelgeselGirisi
          onBasla={() => panelinYanina(0)}
          onPadisahSec={(id) => {
            const hedef = paneller.findIndex((panel) => panel.padisahId === id)
            if (hedef >= 0) panelinYanina(hedef)
          }}
        />

        {paneller.map((panel, sira) => {
          const padisah = padisahBul(panel.padisahId)
          return (
            <section
              key={panel.id}
              data-derinlik-panel=""
              data-sira={sira}
              data-tur={panel.tur}
              ref={(oge) => {
                if (oge) panelRefleri.current.set(sira, oge)
                else panelRefleri.current.delete(sira)
              }}
              className="pgb-panel"
              aria-label={`${padisah?.name ?? ''} · ${panel.baslik ?? panel.tur}`}
            >
              <PanelGorselleri panel={panel} />
              <div className="pgb-perde" aria-hidden="true" />
              <div className="pgb-icerik">
                {panel.tur !== 'kunye' && panel.tur !== 'gecis' && padisah && (
                  <p className="pgb-ustyazi">
                    {padisah.order}. {padisah.name}
                    {padisah.epithet ? ` · ${padisah.epithet}` : ''}
                  </p>
                )}
                <PanelIcerigi panel={panel} padisah={padisah} />
              </div>
            </section>
          )
        })}

        <section className="pgb-panel pgb-panel-son" data-derinlik-panel="">
          <div className="pgb-icerik">
            <h2 className="pgb-baslik pgb-baslik-buyuk">Silsile tamamlandı</h2>
            <p className="pgb-metin">
              Osman Gazi’den VI. Mehmed’e kadar otuz altı hükümdar geçti. Ayrıntılı
              inceleme için Keşif moduna geçebilir, istediğin padişahın savaşlarını,
              fetihlerini ve haritasını tek tek açabilirsin.
            </p>
            <button type="button" className="pgb-dugme" onClick={() => panelinYanina(0)}>
              Baştan izle
            </button>
          </div>
        </section>
      </div>

      {/* Anlatım kaydı: padişah değiştikçe kaynağı değişir. */}
      {aktifSesAdresi && (
        <audio ref={sesRef} src={aktifSesAdresi} preload="metadata" muted={!sesAcik} />
      )}

      <div className="pgb-kontrol">
        <button
          type="button"
          className="pgb-oynat"
          onClick={() => setOynuyor((eski) => !eski)}
          aria-label={oynuyor ? 'Otomatik anlatımı duraklat' : 'Otomatik anlatımı başlat'}
        >
          {oynuyor ? <Pause size={16} /> : <Play size={16} style={{ marginLeft: 2 }} />}
        </button>
        <button
          type="button"
          className={`pgb-ses-dugme${sesAcik && aktifSesAdresi ? '' : ' pgb-ses-dugme-sonuk'}`}
          onClick={() => setSesAcik((eski) => !eski)}
          disabled={!aktifSesAdresi}
          title={aktifSesAdresi ? 'Anlatım sesini aç/kapat' : 'Bu padişahın sesi henüz eklenmedi'}
          aria-label={sesAcik ? 'Anlatım sesini kapat' : 'Anlatım sesini aç'}
          aria-pressed={Boolean(sesAcik && aktifSesAdresi)}
        >
          {sesAcik && aktifSesAdresi ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </button>
        <button
          type="button"
          className={`pgb-ses-dugme${muzikVar && muzikAcik ? '' : ' pgb-ses-dugme-sonuk'}`}
          onClick={onMuzikDegis}
          disabled={!muzikVar}
          title={muzikVar ? 'Fon müziğini aç/kapat' : 'Fon müziği henüz eklenmedi'}
          aria-label={muzikAcik ? 'Fon müziğini kapat' : 'Fon müziğini aç'}
          aria-pressed={Boolean(muzikVar && muzikAcik)}
        >
          <Music2 size={14} />
        </button>
        <div className="pgb-ilerleme" role="progressbar" aria-label="Belgesel ilerlemesi" aria-valuenow={Math.round(ilerleme * 100)} aria-valuemin={0} aria-valuemax={100}>
          <span style={{ '--pg-oran': ilerleme }} />
        </div>
        <span className="pgb-sayac">{aktifPanel + 1} / {paneller.length}</span>
        <p className="pgb-ipucu">
          <Info size={12} aria-hidden="true" />
          Kaydırarak ilerle — oynat düğmesi sesli anlatımla birlikte akıtır.
        </p>
      </div>
    </div>
  )
}
