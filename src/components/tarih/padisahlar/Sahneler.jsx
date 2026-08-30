import { ChevronRight, Play } from 'lucide-react'
import DonemHaritasi from './DonemHaritasi'

/**
 * AÇILIŞ SEKANSI
 * Öğrenci modülü açtığında bir kartla değil, bir sahneyle karşılaşır:
 * önce yıl, sonra başlık, sonra dönemin bir cümlelik durumu.
 */
export function AcilisSahnesi({ yil, baslik, alt, haritaId, vurgular = [], portre, onBasla, dugmeMetni = 'Anlatımı başlat' }) {
  return (
    <section className="pg-acilis" aria-label="Açılış sahnesi" data-portre={portre?.src ? 'true' : undefined}>
      {haritaId && (
        <div className="pg-acilis-harita" aria-hidden="true">
          <DonemHaritasi haritaId={haritaId} vurgular={vurgular} lejant={false} not={false} />
        </div>
      )}
      {portre?.src && (
        <div className="pg-acilis-portre-katmani">
          <img src={portre.src} alt={portre.alt} decoding="async" />
          <span aria-hidden="true">Temsilî illüstrasyon</span>
        </div>
      )}
      <div className="pg-acilis-icerik">
        <p className="pg-acilis-yil">{yil}</p>
        <div className="pg-acilis-cizgi" />
        <h1 className="pg-acilis-baslik">{baslik}</h1>
        <p className="pg-acilis-alt">{alt}</p>
        <div className="pg-acilis-eylem">
          <button type="button" className="pg-dugme" onClick={onBasla}>
            <Play size={16} aria-hidden="true" /> {dugmeMetni}
          </button>
        </div>
      </div>
    </section>
  )
}

/**
 * GEÇİŞ SAHNESİ
 * İki padişah arasındaki kırılma. `transitionType` sahnenin
 * karakterini belirler: olağan devir, şehadet/kesinti, bölünme,
 * yeniden birleşme, büyük fetih. Yeni bir tür eklemek için yalnızca
 * veri ve bir CSS kuralı gerekir — bileşen değişmez.
 */
export function GecisSahnesi({ gecis, sonrakiAd, onDevam, otomatik = false }) {
  return (
    <section className="pg-gecis" data-tur={gecis.transitionType} aria-label="Dönem geçişi">
      <div>
        <p className="pg-gecis-yil">{gecis.year}</p>
        <h2 className="pg-gecis-baslik">{gecis.headline}</h2>
        {gecis.body && <p className="pg-gecis-govde">{gecis.body}</p>}
        <div className="pg-gecis-eylem">
          <button type="button" className="pg-dugme" onClick={onDevam}>
            {sonrakiAd ? `${sonrakiAd} ile devam et` : 'Devam et'}
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          {otomatik && (
            <p className="pg-olay-ozet" style={{ marginTop: 10 }}>
              Belgesel modunda anlatım kendiliğinden devam eder.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

/**
 * SİLSİLENİN SONU
 * Hazır içerik bittiğinde öğrenci boş ekrana düşmemeli; nerede
 * olduğunu ve devamının geleceğini görmeli.
 */
export function SonSahnesi({ onBastanBasla }) {
  return (
    <section className="pg-gecis" data-tur="devir" aria-label="Bölüm sonu">
      <div>
        <p className="pg-gecis-yil">1299–1922</p>
        <h2 className="pg-gecis-baslik">36 Padişah · Bir Hanedan Yolculuğu</h2>
        <p className="pg-gecis-govde">
          Söğüt çevresindeki uç beyliğinden İstanbul merkezli imparatorluğa,
          klasik düzenden modernleşme arayışlarına ve saltanatın kaldırılmasına
          uzanan bütün silsileyi tamamladın. Zaman çizelgesinden istediğin
          padişaha dönebilir veya anlatımı Osman Gazi’den yeniden başlatabilirsin.
        </p>
        <div className="pg-gecis-eylem">
          <button type="button" className="pg-dugme" onClick={onBastanBasla}>
            Baştan izle
          </button>
        </div>
      </div>
    </section>
  )
}
