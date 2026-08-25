import { useCallback, useEffect, useState } from 'react'
import {
  Activity, BookOpen, Check, Compass, FlaskConical, GraduationCap, Heart, Star,
} from 'lucide-react'
import { ICERIK } from '../../../data/fizik/icerik.js'
import { bolgeBul } from '../../../data/fizik/bolgeler.js'
import { ikonBul } from '../../../data/fizik/ikonlar.js'
import { FormulPaneli, GunlukHayat, HataListesi, Not } from './Panolar.jsx'
import { MiniGorev, OgrenmeKontrolu, TahminKutusu } from './Ogrenme.jsx'
import { vurguyuIsle } from './metin.jsx'
import {
  deneyiTamamla, favoriDegistir, favoriMi, ilerlemeOku, konumKaydet, seviyeTamamla,
} from '../../../lib/fizik/ilerleme.js'

const SEVIYELER = [
  { kod: 'kesfet', ad: 'Keşfet', ikon: Compass, aciklama: 'Serbestçe dene. Değerleri değiştir, ne olduğunu izle. Doğru cevap aranmıyor.' },
  { kod: 'ogren', ad: 'Öğren', ikon: BookOpen, aciklama: 'Önce tahmin et, sonra deneyde gör, ardından açıklamayı oku.' },
  { kod: 'ustalas', ad: 'Ustalaş', ikon: GraduationCap, aciklama: 'Görevi tamamla ve öğrenme kontrolünü çöz.' },
]

const AKISLAR = {
  kesfet: ['Değişkeni oynat', 'Canlı sonucu izle', 'Yeni bir soru sor'],
  ogren: ['Tahminini kaydet', 'Deneyi çalıştır', 'Kanıtla karşılaştır'],
  ustalas: ['Hedefi oku', 'Düzeneği kur', 'Kendini kontrol et'],
}

/**
 * Fizik Atlası — Modül kabuğu
 * ==================================================================
 * Her bölgenin ortak iskeleti. Deney alanı (children) her seviyede
 * ekranda kalır; değişen şey deneyin **etrafındaki** yönlendirmedir:
 *
 *   Keşfet  → yalnızca deney, serbest oyun
 *   Öğren   → tahmin → deney → açıklama → formül → günlük hayat → hata
 *   Ustalaş → görev → deney → öğrenme kontrolü
 *
 * Formüller bilinçli olarak açıklamadan sonra gelir; öğrenci ilişkiyi
 * önce deneyde görsün, formül o ilişkinin özeti olsun diye.
 */
export function ModulKabugu({ bolgeKod, deneyKod = null, children, deneyBasligi = null }) {
  const bolge = bolgeBul(bolgeKod)
  const icerik = ICERIK[bolgeKod]
  const [seviye, setSeviye] = useState('kesfet')
  const [ilerleme, setIlerleme] = useState(ilerlemeOku)

  useEffect(() => {
    konumKaydet(bolgeKod, deneyKod)
    // Modül açıldığında öğrenci zaten Keşfet seviyesindedir ve deney
    // önünde durur; bunu ayrıca tıklamasını beklemek ilerlemeyi olduğundan
    // düşük gösterirdi.
    setIlerleme(seviyeTamamla(bolgeKod, 'kesfet'))
  }, [bolgeKod, deneyKod])

  const seviyeSec = useCallback((yeni) => {
    setSeviye(yeni)
    // Seviyeye girmek tamamlamak değildir; keşfet seviyesi açılınca
    // deneyin görüldüğü kaydedilir, diğer ikisi işi bitirince işaretlenir.
    if (yeni === 'kesfet') setIlerleme(seviyeTamamla(bolgeKod, 'kesfet'))
  }, [bolgeKod])

  const favori = deneyKod ? favoriMi(ilerleme, bolgeKod, deneyKod) : false
  const seviyeDurumu = ilerleme.seviyeler[bolgeKod] ?? {}

  if (!bolge || !icerik) {
    return <div className="fa-bos">Bu bölge bulunamadı.</div>
  }

  const AktifSeviye = SEVIYELER.find((s) => s.kod === seviye)
  const BolgeIkon = ikonBul(bolge.ikon)
  const deneySirasi = deneyKod ? bolge.deneyler.findIndex((d) => d.kod === deneyKod) : -1

  return (
    <div>
      <header className="fa-modul-kapak" style={{ '--fa-modul-renk': bolge.renk }}>
        <span className="fa-modul-kapak-ikon"><BolgeIkon size={25} aria-hidden="true" /></span>
        <div className="fa-modul-kapak-metin">
          <div className="fa-ust-etiket" style={{ color: bolge.renk }}>
            {bolge.ad}
            {deneySirasi >= 0 ? <span>Deney {deneySirasi + 1}/{bolge.deneyler.length}</span> : null}
          </div>
          <h2>{deneyBasligi ?? bolge.ad}</h2>
          <p>{bolge.ozet}</p>
        </div>
        <div className="fa-modul-kapak-durum">
          <span><Activity size={14} /> Etkileşimli deney</span>
          <small>Değerleri değiştir; sonuç anında güncellensin.</small>
        </div>
      </header>

      {/* Seviye şeridi */}
      <div className="fa-seviye-serit" role="tablist" aria-label="Öğrenme seviyesi">
        {SEVIYELER.map((s) => {
          const Ikon = s.ikon
          return (
            <button
              key={s.kod}
              type="button"
              role="tab"
              aria-selected={seviye === s.kod}
              className={`fa-seviye-dugme ${seviye === s.kod ? 'etkin' : ''}`}
              onClick={() => seviyeSec(s.kod)}
            >
              <Ikon size={15} />
              {s.ad}
              {seviyeDurumu[s.kod] ? <Check size={13} className="bitti" aria-label="tamamlandı" /> : null}
            </button>
          )
        })}
        {deneyKod ? (
          <button
            type="button"
            className={`fa-seviye-dugme ${favori ? 'etkin' : ''}`}
            style={{ marginLeft: 'auto' }}
            onClick={() => setIlerleme(favoriDegistir(bolgeKod, deneyKod))}
            aria-pressed={favori}
          >
            <Heart size={15} style={favori ? { fill: 'currentColor' } : undefined} />
            {favori ? 'Favorilerde' : 'Favorilere ekle'}
          </button>
        ) : null}
      </div>

      <div className="fa-ogrenme-akisi" aria-label={`${AktifSeviye.ad} seviyesi öğrenme akışı`}>
        {AKISLAR[seviye].map((ad, indeks) => (
          <div className="fa-ogrenme-adimi" key={ad}>
            <span>{indeks + 1}</span>
            <b>{ad}</b>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 14 }}>
        <Not tur="bilgi" baslik={`${AktifSeviye.ad} seviyesi`}>{AktifSeviye.aciklama}</Not>
      </div>

      {/* ÖĞREN: önce kavramsal giriş ve tahmin */}
      {seviye === 'ogren' ? (
        <div style={{ display: 'grid', gap: 14, marginBottom: 16 }}>
          <div className="fa-kart">
            <div className="fa-ust-etiket"><Star size={13} /> Kısaca</div>
            <p style={{ fontSize: 14, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.6 }}>
              {vurguyuIsle(icerik.giris)}
            </p>
          </div>
          <TahminKutusu tahmin={icerik.tahmin} />
        </div>
      ) : null}

      {/* USTALAŞ: görev deneyin üstünde durur ki öğrenci hedefi bilerek denesin */}
      {seviye === 'ustalas' ? (
        <div style={{ marginBottom: 16 }}>
          <MiniGorev gorev={icerik.miniGorev} />
        </div>
      ) : null}

      {/* Deney alanı — her seviyede görünür */}
      <div className="fa-deney-alani">
        <div className="fa-deney-alani-baslik">
          <span><FlaskConical size={15} /> Canlı deney alanı</span>
          <small><span className="fa-canli-nokta" aria-hidden="true" /> Değişiklikler anında hesaplanır</small>
        </div>
        {children}
      </div>

      {/* ÖĞREN: deneyden sonra açıklama, formül, günlük hayat, hatalar */}
      {seviye === 'ogren' ? (
        <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
          <div className="fa-kart">
            <div className="fa-ust-etiket">Fiziksel açıklama</div>
            <div style={{ display: 'grid', gap: 14 }}>
              {icerik.aciklama.map((a) => (
                <div key={a.baslik}>
                  <h4 style={{ fontSize: 14.5, marginBottom: 4 }}>{a.baslik}</h4>
                  <p style={{ fontSize: 13.5, color: 'rgb(var(--fa-metin-2))', lineHeight: 1.6 }}>{vurguyuIsle(a.metin)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fa-kart">
            <div className="fa-ust-etiket">Bağıntılar</div>
            <p style={{ fontSize: 12.5, color: 'rgb(var(--fa-metin-3))', marginBottom: 10 }}>
              Bu bağıntılar yukarıda deneyde gördüğün ilişkilerin kısa yazılışıdır. Her sembolün anlamı ve birimi yanında duruyor.
            </p>
            <FormulPaneli formuller={icerik.formuller} baslik={null} />
          </div>

          <div className="fa-kart">
            <div className="fa-ust-etiket">Günlük hayatta</div>
            <GunlukHayat ogeler={icerik.gunlukHayat} />
          </div>

          <div className="fa-kart">
            <div className="fa-ust-etiket" style={{ color: 'rgb(var(--fa-hata))' }}>Sık yapılan hatalar</div>
            <HataListesi hatalar={icerik.sikHata} />
          </div>

          <button
            type="button"
            className="fa-dugme birincil"
            onClick={() => {
              setIlerleme(seviyeTamamla(bolgeKod, 'ogren'))
              seviyeSec('ustalas')
            }}
          >
            <Check size={15} /> Öğren bölümünü bitirdim, göreve geç
          </button>
        </div>
      ) : null}

      {/* USTALAŞ: öğrenme kontrolü */}
      {seviye === 'ustalas' ? (
        <div style={{ marginTop: 20 }}>
          <div className="fa-kart">
            <OgrenmeKontrolu
              sorular={icerik.kontrol}
              bolgeKod={bolgeKod}
              onTamamla={() => {
                setIlerleme(seviyeTamamla(bolgeKod, 'ustalas'))
                if (deneyKod) setIlerleme(deneyiTamamla(bolgeKod, deneyKod))
              }}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}


export default ModulKabugu
