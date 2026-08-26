import { CheckCircle2, ChevronRight, FlaskConical, Heart, Info, Lightbulb, LockKeyhole, Scale, Star, Target } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { etkilesimTamamla, favoriDegistir, ilerlemeOku } from '../../../lib/biyoloji/ilerleme.js'
import { etkilesimKaydi } from '../../../data/biyoloji/etkilesimler.js'
import { bolgeGorselPlani } from '../../../data/biyoloji/gorselPlanlari.js'
import { bolgeBul } from '../../../data/biyoloji/bolgeler.js'
import { ALT_BASLIKLAR } from '../../../data/biyoloji/kapsam.js'

const HARFLER = ['A', 'B', 'C', 'D', 'E']

// Yolculuk, Padişah Geçidi'ndeki anlatım bölümleri gibi numaralı adımlarla
// yürür: her adımın kendi durumu var, ray toplam ilerlemeyi gösterir.
const ADIMLAR = [
  { kod: 'kesfet', ad: 'Keşfet', not: 'Serbest dene' },
  { kod: 'ogren', ad: 'Öğren', not: 'Önce tahmin et' },
  { kod: 'ustalas', ad: 'Ustalaş', not: 'Kontrolü geç' },
]

export default function BiyolojiModulKabugu({ id, bolge, baslik, soru, tahminler, aciklama, yanilgi, modelVarsayimi, olcek = 'Temsili hücre/organizma ölçeği', gorevTamam = false, kontrol, children }) {
  const kayit = useMemo(() => etkilesimKaydi(id), [id])
  const gorsel = useMemo(() => bolgeGorselPlani(bolge), [bolge])
  const bolgeKaydi = useMemo(() => bolgeBul(bolge), [bolge])
  const konu = useMemo(() => ALT_BASLIKLAR.find((x) => x.etkilesimId === id) ?? null, [id])
  const [seviye, setSeviye] = useState('kesfet')
  const [tahmin, setTahmin] = useState(null)
  const [yanit, setYanit] = useState(null)
  const [hata, setHata] = useState(0)
  const [favori, setFavori] = useState(() => ilerlemeOku().favoriler.includes(id))
  const [tamam, setTamam] = useState(() => Boolean(ilerlemeOku().tamamlananlar[id]))
  const kontrolDogru = yanit === kontrol?.dogru

  const cevapla = (i) => {
    setYanit(i)
    if (i !== kontrol?.dogru) setHata((h) => h + 1)
  }

  // Üç hedef: tahmin verildi, laboratuvar görevi tamamlandı, kontrol doğru.
  const bitenler = [tahmin !== null, gorevTamam, kontrolDogru]

  // Kayıt sıraya bağlı olmamalı: öğrenci önce kontrolü doğru yanıtlayıp
  // sonra laboratuvar hedefini kurduğunda da ilerleme yazılır.
  useEffect(() => {
    if (tamam || !gorevTamam || !kontrolDogru) return
    etkilesimTamamla(id, bolge, { tahmin: tahmin !== null, gorev: true, kontrol: true })
    setTamam(true)
    window.dispatchEvent(new CustomEvent('biyoloji-ilerleme'))
  }, [tamam, gorevTamam, kontrolDogru, id, bolge, tahmin])
  const oran = bitenler.filter(Boolean).length / bitenler.length
  const adimDurumu = { kesfet: gorevTamam, ogren: tahmin !== null, ustalas: kontrolDogru }
  const adimNotu = { kesfet: gorevTamam ? 'Görev tamam' : 'Serbest dene', ogren: tahmin !== null ? 'Tahmin verildi' : 'Önce tahmin et', ustalas: kontrolDogru ? 'Kontrol geçildi' : 'Kontrolü geç' }

  return <article className="ba-modul" id={id} data-component-key={kayit?.componentKey} data-engine-key={kayit?.engineKey} data-interaction-type={kayit?.interactionType} data-gorsel-plan={gorsel.anahtar} style={{ '--ba-deney-gorseli': `url("${gorsel.src}")`, '--ba-deney-odak': gorsel.odak, '--ba-deney-ton': gorsel.ton }}>

    <header className="ba-modul-baslik">
      <div className="ba-modul-kimlik ba-kademe">
        <div className="ba-rozet-sirasi">
          <span className="ba-rozet ba-rozet-vurgu">{bolgeKaydi?.ad ?? 'Biyoloji Atlası'}</span>
          <span className="ba-rozet ba-rozet-sonuk">{kayit?.interactionType.replaceAll('-', ' ')}</span>
          {konu ? <span className="ba-rozet ba-rozet-altin">{konu.kapsam === 'tymm' ? '2026 TYMM' : 'TYT çekirdeği'}</span> : null}
          {tamam ? <span className="ba-rozet ba-rozet-olumlu"><CheckCircle2 /> Tamamlandı</span> : null}
        </div>
        <h2>{baslik}</h2>
        <p className="ba-modul-soru">{soru}</p>
      </div>
      <div className="ba-modul-eylem">
        <button className={favori ? 'etkin' : ''} type="button" aria-label={favori ? 'Favorilerden çıkar' : 'Favoriye ekle'} onClick={() => { const p = favoriDegistir(id); setFavori(p.favoriler.includes(id)) }}>
          <Heart fill={favori ? 'currentColor' : 'none'} />
        </button>
        <span className={`ba-rozet ${tamam ? 'ba-rozet-olumlu' : 'ba-rozet-sonuk'}`}>
          {tamam ? <><CheckCircle2 /> Kayıtlı</> : <><LockKeyhole /> Görev bekliyor</>}
        </span>
      </div>
    </header>

    <nav className="ba-seviye" aria-label="Öğrenme yolculuğu">
      <div className="ba-seviye-adimlar">
        {ADIMLAR.map((adim, i) => (
          <button
            key={adim.kod}
            type="button"
            className="ba-adim"
            aria-current={seviye === adim.kod ? 'step' : undefined}
            data-bitti={adimDurumu[adim.kod] ? 'true' : 'false'}
            onClick={() => setSeviye(adim.kod)}
          >
            <span className="ba-adim-no">{adimDurumu[adim.kod] ? <CheckCircle2 size={13} /> : i + 1}</span>
            <span className="ba-adim-metin"><b>{adim.ad}</b><small>{adimNotu[adim.kod]}</small></span>
          </button>
        ))}
      </div>
      <div className="ba-seviye-ray" role="img" aria-label={`Bu istasyonda ${bitenler.filter(Boolean).length} / 3 hedef tamamlandı`}>
        <i className="ba-seviye-dolgu" style={{ '--ba-oran': oran }} />
      </div>
    </nav>

    {seviye !== 'kesfet' ? (
      <section className="ba-tahmin ba-kademe" style={{ '--ba-gecikme': '60ms' }}>
        <h3><Lightbulb /> Önce tahmin et</h3>
        <div>
          {tahminler.map((x, i) => (
            <button key={x} type="button" className={tahmin === i ? 'secili' : ''} aria-pressed={tahmin === i} onClick={() => setTahmin(i)}>
              <span className="ba-secenek-harf">{HARFLER[i]}</span>
              <span>{x}</span>
              <ChevronRight className="ba-secenek-ok" aria-hidden="true" />
            </button>
          ))}
        </div>
        {tahmin !== null ? <p className={tahmin === 0 ? 'olumlu' : 'uyari'}>{tahmin === 0 ? <CheckCircle2 aria-hidden="true" /> : <Info aria-hidden="true" />}<span>{tahmin === 0 ? aciklama : yanilgi}</span></p> : null}
      </section>
    ) : null}

    <div className="ba-deney-alani">
      <div className="ba-deney-serit">
        <FlaskConical aria-hidden="true" />
        <span><strong>Laboratuvar:</strong> {bolgeKaydi?.eylem ?? 'Değişkenleri değiştir, sonucu izle.'}</span>
        <span className={`ba-rozet ${gorevTamam ? 'ba-rozet-olumlu' : 'ba-rozet-sonuk'}`}>
          {gorevTamam ? <><CheckCircle2 /> Görev tamam</> : <><Target /> Hedef durumu kur</>}
        </span>
      </div>
      {children}
    </div>

    {seviye === 'ustalas' ? (
      <section className="ba-kontrol ba-kademe" style={{ '--ba-gecikme': '60ms' }}>
        <h3><Star /> Öğrenme kontrolü</h3>
        <p>{kontrol.soru}</p>
        <div>
          {kontrol.secenekler.map((x, i) => (
            <button key={x} type="button" className={yanit === i ? (i === kontrol.dogru ? 'dogru' : 'yanlis') : ''} onClick={() => cevapla(i)}>
              <span className="ba-secenek-harf">{HARFLER[i]}</span>
              <span>{x}</span>
              <ChevronRight className="ba-secenek-ok" aria-hidden="true" />
            </button>
          ))}
        </div>
        {hata === 1 && !kontrolDogru ? <p className="ipucu"><Lightbulb aria-hidden="true" /><span>İpucu: {kontrol.ipucu}</span></p> : null}
        {hata >= 2 && !kontrolDogru ? <p className="cozum"><Info aria-hidden="true" /><span>Çözüm yaklaşımı: {kontrol.cozum}</span></p> : null}
        {kontrolDogru && !gorevTamam ? <p className="uyari"><Target aria-hidden="true" /><span>Kontrol doğru; tamamlanmak için laboratuvardaki hedef durumu da oluştur.</span></p> : null}
        {kontrolDogru && gorevTamam ? <p className="olumlu"><CheckCircle2 aria-hidden="true" /><span>Görev ve kontrol birlikte tamamlandı; ilerlemeye kaydedildi.</span></p> : null}
      </section>
    ) : null}

    <footer className="ba-model-not">
      <dl className="ba-kunye">
        <div className="ba-kunye-hucre">
          <dt><Scale aria-hidden="true" /> Temsil ölçeği</dt>
          <dd>{olcek}</dd>
        </div>
        <div className="ba-kunye-hucre">
          <dt><Info aria-hidden="true" /> Model varsayımı</dt>
          <dd>{modelVarsayimi}</dd>
        </div>
        {konu ? (
          <div className="ba-kunye-hucre">
            <dt><Target aria-hidden="true" /> Kazanım</dt>
            <dd>{konu.kazanim}</dd>
          </div>
        ) : null}
      </dl>
    </footer>
  </article>
}
