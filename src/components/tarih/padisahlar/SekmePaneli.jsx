import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Crown, ExternalLink, Flag, Info, Landmark, Map as MapIcon, Scale, Scroll, Sparkles, Swords, TriangleAlert, Users } from 'lucide-react'
import { NITELIK_ALANLARI, NITELIK_KADEMELERI, TARAF_TONLARI } from '../../../data/padisahlar/tipler'
import { saltanatMetni } from '../../../data/padisahlar'
import { ALAN_TONLARI, donemHaritasi } from '../../../data/padisahlar/donemHaritalari'
import { atlasAcilabilir, atlasAdresi, atlasEtiketi } from '../../../lib/padisahAtlas'
import DonemHaritasi from './DonemHaritasi'

/** Tartışmalı tarihler kesinmiş gibi gösterilmez; işaretlenir. */
export function Tarih({ deger, kisa = false }) {
  if (!deger) return null
  return (
    <span>
      {deger.value}
      {deger.disputed && !kisa && (
        <span className="pg-tartismali" title={deger.note}>
          {' '}<TriangleAlert size={11} aria-hidden="true" />
          <span className="sr-only">Kaynaklara göre değişir: {deger.note}</span>
        </span>
      )}
    </span>
  )
}

/** Atlasa geçiş — yalnız atlasın kapsadığı yıllar için düğme çıkar. */
export function AtlasDugmesi({ baglanti }) {
  if (!atlasAcilabilir(baglanti)) return null
  return (
    <Link to={atlasAdresi(baglanti)} className="pg-dugme pg-dugme-sade pg-dugme-kucuk">
      <MapIcon size={14} aria-hidden="true" />
      {atlasEtiketi(baglanti)}
    </Link>
  )
}

function OlaySatiri({ kayit, onAc }) {
  return (
    <button type="button" className="pg-olay" data-onem={kayit.eventType} onClick={() => onAc?.(kayit)}>
      <span className="pg-olay-yil"><Tarih deger={kayit.date} kisa /></span>
      <span>
        <span className="pg-olay-ad">{kayit.title}</span>
        <span className="pg-olay-ozet">{kayit.summary}</span>
      </span>
      <ChevronRight size={16} className="pg-olay-ok" aria-hidden="true" />
    </button>
  )
}

function Nitelikler({ traits }) {
  if (!traits?.length) return null
  return (
    <div className="pg-kart">
      {traits.map((nitelik) => {
        const kademe = NITELIK_KADEMELERI[nitelik.level]
        return (
          <div className="pg-nitelik" key={`${nitelik.field}-${nitelik.label}`}>
            <div className="pg-nitelik-ust">
              <span className="pg-nitelik-ad">{nitelik.label}</span>
              <span className="pg-nitelik-kademe">{kademe.label}</span>
            </div>
            <div
              className="pg-nitelik-ray"
              role="img"
              aria-label={`${NITELIK_ALANLARI[nitelik.field]}: ${kademe.label}`}
            >
              <div className="pg-nitelik-dolgu" style={{ '--pg-oran': kademe.oran }} />
            </div>
            <p className="pg-nitelik-delil">{nitelik.evidence}</p>
          </div>
        )
      })}
    </div>
  )
}

function Kunye({ padisah }) {
  const satirlar = [
    { etiket: 'Hüküm yılları', deger: <><Tarih deger={padisah.reignStart} /> – <Tarih deger={padisah.reignEnd} /></> },
    { etiket: 'Hükümdarlık süresi', deger: saltanatMetni(padisah) },
    { etiket: 'Babası', deger: padisah.father },
    { etiket: 'Annesi', deger: padisah.mother },
    { etiket: 'Yerine geçtiği', deger: padisah.predecessor },
    { etiket: 'Yerine geçen', deger: padisah.successor },
    { etiket: 'Dönem', deger: padisah.dynastyPeriod },
    { etiket: 'Yönetim merkezi', deger: padisah.capitals?.join(' · ') },
  ].filter((satir) => satir.deger)

  return (
    <dl className="pg-kunye">
      {satirlar.map((satir) => (
        <div className="pg-kunye-hucre" key={satir.etiket}>
          <dt>{satir.etiket}</dt>
          <dd>{satir.deger}</dd>
        </div>
      ))}
    </dl>
  )
}

function GenelBakis({ padisah, akis, onOlayAc }) {
  return (
    <>
      {/* Özet kayıtlar tam içerik gibi görünmemeli. */}
      {padisah.detaySeviyesi === 'ozet' && (
        <div className="pg-kart pg-kart-uyari" style={{ marginBottom: 12 }}>
          <span className="pg-rozet pg-rozet-sonuk">Özet kayıt</span>
          <p className="pg-olay-ozet" style={{ marginTop: 8 }}>
            Bu padişahın ayrıntılı anlatımı henüz hazırlanmadı. Buradaki
            bilgiler doğrulanmış özet kayıtlardır; savaş, fetih ve önemli
            kişi anlatımları ile sesli anlatım metni sonraki aşamada eklenecek.
            Ayrıntılı örnek için Osman Gazi, Orhan Gazi veya I. Murad’a bak.
          </p>
        </div>
      )}
      {padisah.detaySeviyesi === 'anlatimli' && (
        <div className="pg-kart pg-kart-uyari" style={{ marginBottom: 12 }}>
          <span className="pg-rozet pg-rozet-sonuk">Özet kayıt · sesli anlatım hazır</span>
          <p className="pg-olay-ozet" style={{ marginTop: 8 }}>
            Bu padişahın sesli anlatımı hazırlandı; anlatım ekrandaki bilgiyi
            tekrar etmez, dönemin nedenlerini ve sonuçlarını anlatır. Aşağıdaki
            savaş, fetih ve kişi kayıtları ise şimdilik özet düzeydedir.
          </p>
        </div>
      )}
      <p className="pg-ozet">{padisah.summary}</p>

      <h3 className="pg-bolum-basligi"><Crown size={13} aria-hidden="true" /> Hanedan ve hükümdarlık</h3>
      <Kunye padisah={padisah} />

      <h3 className="pg-bolum-basligi"><Sparkles size={13} aria-hidden="true" /> Dönemin karakteri</h3>
      <Nitelikler traits={padisah.traits} />

      <h3 className="pg-bolum-basligi"><Scroll size={13} aria-hidden="true" /> Dönemin kronolojik akışı</h3>
      <div>
        {akis.map((kayit) => (
          <OlaySatiri key={`${kayit.kaynak}-${kayit.id}`} kayit={kayit} onAc={onOlayAc} />
        ))}
      </div>
    </>
  )
}

function Savaslar({ padisah, onOlayAc }) {
  return (
    <>
      <h3 className="pg-bolum-basligi"><Swords size={13} aria-hidden="true" /> Dönemin savaşları</h3>
      <div>
        {padisah.battles.map((savas) => (
          <OlaySatiri key={savas.id} kayit={savas} onAc={onOlayAc} />
        ))}
      </div>
      <p className="pg-kart pg-kart-vurgu" style={{ marginTop: 12, fontSize: 12.5, lineHeight: 1.65 }}>
        Bir savaşa dokunduğunda sahne değişir: harita öne gelir, taraflar ve
        sonuçlar sırayla açılır. Padişah ekranına geri dönebilirsin.
      </p>
    </>
  )
}

function Fetihler({ padisah, onOlayAc }) {
  const sirali = [...padisah.conquests].sort((a, b) => a.date.year - b.date.year)
  return (
    <>
      <h3 className="pg-bolum-basligi"><Flag size={13} aria-hidden="true" /> Fetihler — tarih sırasıyla</h3>
      <div>
        {sirali.map((fetih) => (
          <button type="button" className="pg-olay" key={fetih.id} onClick={() => onOlayAc?.({ ...fetih, kaynak: 'fetih' })}>
            <span className="pg-olay-yil"><Tarih deger={fetih.date} kisa /></span>
            <span>
              <span className="pg-olay-ad">{fetih.title}</span>
              <span className="pg-olay-ozet">{fetih.from ? `${fetih.from} — ` : ''}{fetih.summary}</span>
            </span>
            <ChevronRight size={16} className="pg-olay-ok" aria-hidden="true" />
          </button>
        ))}
      </div>
    </>
  )
}

function Antlasmalar({ padisah, onOlayAc }) {
  return (
    <>
      <h3 className="pg-bolum-basligi"><Scale size={13} aria-hidden="true" /> Antlaşmalar</h3>
      <div>
        {padisah.treaties.map((antlasma) => (
          <OlaySatiri key={antlasma.id} kayit={antlasma} onAc={onOlayAc} />
        ))}
      </div>
    </>
  )
}

function Devlet({ padisah }) {
  return (
    <>
      <h3 className="pg-bolum-basligi"><Landmark size={13} aria-hidden="true" /> Kurumlar ve yönetim</h3>
      {padisah.reforms.map((yenilik) => (
        <div className="pg-kart" key={yenilik.id}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
            <strong style={{ fontSize: 13.5 }}>{yenilik.title}</strong>
            {yenilik.date && <span className="pg-olay-yil"><Tarih deger={yenilik.date} kisa /></span>}
          </div>
          <p className="pg-olay-ozet" style={{ marginTop: 5 }}>{yenilik.summary}</p>
          {yenilik.why && (
            <p className="pg-olay-ozet" style={{ marginTop: 6 }}>
              <strong style={{ color: 'rgb(var(--pg-altin-acik))' }}>Hangi ihtiyaçtan doğdu: </strong>
              {yenilik.why}
            </p>
          )}
          {yenilik.osym && (
            <p className="pg-osym-madde" style={{ marginTop: 8, gridTemplateColumns: 'auto minmax(0,1fr)' }}>
              <span className="pg-rozet pg-rozet-altin">ÖSYM</span>
              <span>{yenilik.osym}</span>
            </p>
          )}
        </div>
      ))}
    </>
  )
}

function Kisiler({ padisah }) {
  return (
    <>
      <h3 className="pg-bolum-basligi"><Users size={13} aria-hidden="true" /> Olay örgüsündeki kişiler</h3>
      {padisah.importantFigures.map((kisi) => (
        <div className="pg-kart" key={kisi.id}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <strong style={{ fontSize: 13.5 }}>{kisi.name}</strong>
            <span className={`pg-rozet pg-rozet-${TARAF_TONLARI[kisi.side] ?? 'sonuk'}`}>{kisi.role}</span>
          </div>
          <p className="pg-olay-ozet" style={{ marginTop: 5 }}>{kisi.summary}</p>
        </div>
      ))}
    </>
  )
}

function HaritaSekmesi({ padisah }) {
  const harita = padisah.mapState
  const [an, setAn] = useState('son')
  const [aktifTur, setAktifTur] = useState(null)
  const [seciliAlanId, setSeciliAlanId] = useState(null)
  const baslangicVar = Boolean(harita.startMapId)
  const haritaId = an === 'baslangic' && baslangicVar ? harita.startMapId : harita.id
  const gosterilenHarita = donemHaritasi(haritaId)
  const seciliAlan = gosterilenHarita?.alanlar?.find((alan) => alan.id === seciliAlanId) ?? null
  const turler = useMemo(
    () => ALAN_TONLARI.filter((ton) => gosterilenHarita?.alanlar?.some((alan) => alan.tur === ton.tur)),
    [gosterilenHarita]
  )

  useEffect(() => {
    setAn('son')
    setAktifTur(null)
    setSeciliAlanId(null)
  }, [padisah.id])

  useEffect(() => {
    setAktifTur(null)
    setSeciliAlanId(null)
  }, [haritaId])

  const okuma = an === 'baslangic' ? harita.startCaption : harita.caption

  return (
    <>
      <h3 className="pg-bolum-basligi"><MapIcon size={13} aria-hidden="true" /> Sınırları keşfet</h3>

      <div className="pg-harita-karsilastirma">
        <div>
          <span className="pg-harita-karsilastirma-etiket">{an === 'baslangic' ? 'Dönem başı' : 'Dönem sonu'}</span>
          <strong>{gosterilenHarita?.baslik}</strong>
        </div>
        {baslangicVar && (
          <div className="pg-harita-an-secim" role="group" aria-label="Harita zamanı">
            <button type="button" aria-pressed={an === 'baslangic'} onClick={() => setAn('baslangic')}>
              Başlangıç
            </button>
            <button type="button" aria-pressed={an === 'son'} onClick={() => setAn('son')}>
              Dönem sonu
            </button>
          </div>
        )}
      </div>

      <div className="pg-harita-turler" role="group" aria-label="Siyasi alan filtresi">
        <button type="button" aria-pressed={!aktifTur} onClick={() => setAktifTur(null)}>
          Tüm alanlar
        </button>
        {turler.map((ton) => (
          <button
            key={ton.tur}
            type="button"
            aria-pressed={aktifTur === ton.tur}
            onClick={() => setAktifTur((eski) => eski === ton.tur ? null : ton.tur)}
          >
            <i data-tur={ton.tur} aria-hidden="true" />
            {ton.ad}
          </button>
        ))}
      </div>

      <div className="pg-kart pg-harita-etkilesim-kart">
        <div className="pg-harita-etkilesim-cizim">
          <DonemHaritasi
            key={haritaId}
            haritaId={haritaId}
            vurgular={an === 'son' ? harita.highlight : []}
            sigdir
            lejant={false}
            not={false}
            etkilesimli
            aktifTur={aktifTur}
            seciliAlan={seciliAlanId}
            onAlanSec={setSeciliAlanId}
          />
        </div>

        <div className="pg-harita-alan-bilgi" aria-live="polite">
          {seciliAlan ? (
            <>
              <span className="pg-rozet pg-rozet-altin">
                {ALAN_TONLARI.find((ton) => ton.tur === seciliAlan.tur)?.ad ?? 'Siyasi alan'}
              </span>
              <h4>{seciliAlan.ad}</h4>
              <p>{seciliAlan.aciklama}</p>
              {seciliAlan.ince && (
                <p className="pg-harita-belirsizlik"><TriangleAlert size={13} aria-hidden="true" /> Denetimi kesintili veya tartışmalı alan</p>
              )}
            </>
          ) : (
            <>
              <span className="pg-rozet pg-rozet-sonuk">Etkileşimli harita</span>
              <h4>Bir siyasi alana dokun</h4>
              <p>Renkli bölgelerden birini seçerek doğrudan yönetim, bağlı devlet ve rakip güç ayrımını incele.</p>
            </>
          )}
        </div>
      </div>

      <p className="pg-harita-okuma"><span>{an === 'baslangic' ? 'Başlangıç okuması' : 'Dönem sonu okuması'}</span>{okuma}</p>
      <div className="pg-kart pg-kart-uyari" style={{ marginTop: 10 }}>
        <p className="pg-olay-ozet" style={{ margin: 0 }}>
          <strong style={{ color: 'rgb(var(--pg-metin))' }}>Bu harita şematiktir.</strong>{' '}
          Kıyı ve alanlar gerçek koordinatlardan sadeleştirilmiştir; ölçekli
          siyasi sınır haritası değildir. Dönemin ayrıntılı haritası için
          Tarih Atlası’nı aç.
        </p>
        <div style={{ marginTop: 10 }}>
          <AtlasDugmesi baglanti={{ year: padisah.reignEnd.year, label: `${padisah.reignEnd.year} yılını atlasta aç` }} />
        </div>
      </div>
    </>
  )
}

function Osym({ padisah }) {
  return (
    <>
      <h3 className="pg-bolum-basligi"><Info size={13} aria-hidden="true" /> Sınavdan önce son tekrar</h3>
      <div className="pg-osym-liste">
        {padisah.osymHighlights.map((madde, sira) => (
          <p className="pg-osym-madde" key={madde}>
            <span className="pg-osym-no">{sira + 1}</span>
            <span>{madde}</span>
          </p>
        ))}
      </div>
      {padisah.sources?.length > 0 && (
        <>
          <h3 className="pg-bolum-basligi"><Scroll size={13} aria-hidden="true" /> Kaynak çerçevesi</h3>
          <div className="pg-kaynaklar">
            {padisah.sources.map((kaynak) => {
              const govde = (
                <>
                  <span>
                    <strong>{kaynak.label}</strong>
                    {kaynak.note && <small>{kaynak.note}</small>}
                  </span>
                  {kaynak.url && <ExternalLink size={13} aria-hidden="true" />}
                </>
              )
              return kaynak.url ? (
                <a key={kaynak.label} href={kaynak.url} target="_blank" rel="noreferrer" className="pg-kaynak">
                  {govde}
                </a>
              ) : (
                <div key={kaynak.label} className="pg-kaynak">{govde}</div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default function SekmePaneli({ sekme, padisah, akis, onOlayAc }) {
  switch (sekme) {
    case 'savaslar': return <Savaslar padisah={padisah} onOlayAc={onOlayAc} />
    case 'fetihler': return <Fetihler padisah={padisah} onOlayAc={onOlayAc} />
    case 'antlasmalar': return <Antlasmalar padisah={padisah} onOlayAc={onOlayAc} />
    case 'devlet': return <Devlet padisah={padisah} />
    case 'kisiler': return <Kisiler padisah={padisah} />
    case 'harita': return <HaritaSekmesi padisah={padisah} />
    case 'osym': return <Osym padisah={padisah} />
    default: return <GenelBakis padisah={padisah} akis={akis} onOlayAc={onOlayAc} />
  }
}
