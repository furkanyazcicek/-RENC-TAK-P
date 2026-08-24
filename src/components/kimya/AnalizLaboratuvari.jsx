import { useEffect, useMemo, useRef, useState } from 'react'
import {
  AlertTriangle, Atom, Beaker, Calculator, CheckCircle2, Dices, FlaskConical,
  Info, Layers, Link2, Magnet, Search, Sparkles, Triangle, Waves, XCircle,
} from 'lucide-react'
import { analizEt, kavramDenetimi } from '../../lib/kimya/analiz.js'
import { KESIF_LISTESI } from '../../data/kimya/turler.js'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'
import { formuluCozumle } from '../../lib/kimya/formulParser.js'
import MolekulGorunumu from './MolekulGorunumu.jsx'
import LewisGorunumu from './LewisGorunumu.jsx'
import EtkilesimGorunumu from './EtkilesimGorunumu.jsx'
import NedenKutusu, { kalinYap } from './NedenKutusu.jsx'

const ORNEKLER = ['H₂O', 'CO₂', 'NH₃', 'CH₄', 'O₂', 'N₂', 'HCl', 'NaCl', 'NO₃⁻', 'NH₄⁺', 'CO₃²⁻', 'SO₄²⁻', 'Ca(OH)₂', 'Al₂(SO₄)₃']

/* ————— Küçük parçalar ————— */

function VeriKutu({ baslik, deger, vurgulu = false, ipucu = null }) {
  return (
    <div className={`ka-veri-kutu ${vurgulu ? 'vurgulu' : ''}`} title={ipucu ?? undefined}>
      <dt>{baslik}</dt>
      <dd>{deger}</dd>
    </div>
  )
}

function AtomKarti({ sembol, adet, element }) {
  const renk = atomRengi(sembol)
  return (
    <div className="ka-atom-kart">
      <span className="ka-atom-kure" style={{ background: renk.dolgu, color: renk.yazi, border: `1px solid ${renk.kenar}` }}>
        {sembol}
      </span>
      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'block', fontWeight: 650, fontSize: 13.5 }}>{element?.ad ?? sembol}</span>
        <span className="ka-sessiz">
          {element ? `Atom no ${element.atomNo} · ${element.degerlik} değerlik e⁻` : 'Bilinmeyen element'}
        </span>
      </span>
      <span className="sayi">{adet}</span>
    </div>
  )
}

/** Formül okuma eğitimi — parantez ve alt indislerin nasıl işlediğini adım adım gösterir. */
function AtomSayimi({ sonuc }) {
  const [gorunen, setGorunen] = useState(0)
  useEffect(() => { setGorunen(0) }, [sonuc.anahtar])
  const adimlar = sonuc.adimlar ?? []
  const hepsi = gorunen >= adimlar.length

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket"><Calculator size={13} /> Atomları say — formül nasıl okunur?</div>
      <p className="ka-sessiz" style={{ marginBottom: 12 }}>
        Alt indisler ve parantezler hangi atomu, kaç kez etkiliyor? Adım adım ilerle.
      </p>

      <div className="ka-adimlar">
        {adimlar.slice(0, Math.max(gorunen, 0)).map((adim, i) => (
          <div className="ka-adim" key={i} style={{ animationDelay: `${i * 30}ms` }}>
            <span className="ka-adim-no">{i + 1}</span>
            <span>{adim.aciklama}</span>
          </div>
        ))}
        {hepsi && (
          <div className="ka-adim sonuc">
            <span className="ka-adim-no"><Sparkles size={12} /></span>
            <span>
              {sonuc.atomlar.map((a) => `${a.sembol}: ${a.adet}`).join(' · ')} →{' '}
              <strong>toplam {sonuc.toplamAtom} atom, {sonuc.elementCesidi} element çeşidi</strong>
            </span>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        {!hepsi ? (
          <>
            <button type="button" className="ka-dugme kucuk birincil" onClick={() => setGorunen((g) => g + 1)}>
              {gorunen === 0 ? 'Adım adım göster' : `Sonraki adım (${gorunen}/${adimlar.length})`}
            </button>
            {gorunen > 0 && (
              <button type="button" className="ka-dugme kucuk" onClick={() => setGorunen(adimlar.length)}>Hepsini göster</button>
            )}
          </>
        ) : (
          <button type="button" className="ka-dugme kucuk" onClick={() => setGorunen(0)}>Baştan başlat</button>
        )}
      </div>
    </div>
  )
}

/** İyonik bileşiklerde iyon ayrıştırması. */
function IyonAyristirma({ sonuc }) {
  const iyonik = sonuc.iyonik
  if (!iyonik) return null
  const { katyon, anyon } = iyonik
  const yukYaz = (y) => `${Math.abs(y) === 1 ? '' : Math.abs(y)}${y > 0 ? '+' : '−'}`
  const formulYaz = (f) => formuluCozumle(f).bicimli ?? f
  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket"><Layers size={13} /> İyonlarına ayrıldığında</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <span className="ka-formul" style={{ fontSize: 22 }}>{sonuc.bicimli}</span>
        <span style={{ color: 'rgb(var(--ka-metin-3))' }}>→</span>
        <span className="ka-rozet mor" style={{ fontSize: 15, padding: '6px 12px' }}>
          {katyon.adet > 1 ? katyon.adet : ''} {formulYaz(katyon.formul)}<sup>{yukYaz(katyon.yuk)}</sup>
        </span>
        <span style={{ color: 'rgb(var(--ka-metin-3))' }}>+</span>
        <span className="ka-rozet mavi" style={{ fontSize: 15, padding: '6px 12px' }}>
          {anyon.adet > 1 ? anyon.adet : ''} {formulYaz(anyon.formul)}<sup>{yukYaz(anyon.yuk)}</sup>
        </span>
      </div>
      <div className="ka-not olumlu">
        <CheckCircle2 size={15} />
        <span>
          <strong>Yük dengesi: </strong>
          {katyon.adet} × ({katyon.yuk > 0 ? '+' : ''}{katyon.yuk}) = {katyon.adet * katyon.yuk} ve{' '}
          {anyon.adet} × ({anyon.yuk}) = {anyon.adet * anyon.yuk} → toplam {katyon.adet * katyon.yuk + anyon.adet * anyon.yuk}.
          Bileşik nötrdür.
        </span>
      </div>
      {!iyonik.veriTabanindan && (
        <p className="ka-sessiz" style={{ marginTop: 8 }}>
          Bu ayrıştırma, formüldeki atomlar ve bilinen iyon yükleri kullanılarak hesaplandı.
        </p>
      )}
    </div>
  )
}

/** Bağ analizi listesi. */
function BagAnalizi({ sonuc, seviye }) {
  const baglar = sonuc.baglar?.length ? sonuc.baglar : (sonuc.tahminiBag ? [{ ...sonuc.tahminiBag, etiket: `${sonuc.atomlar[0]?.sembol}–${sonuc.atomlar[1]?.sembol}`, adet: 1 }] : [])

  // İyonik örgülerde tek tek bağ çizilemez; bu durumda veri tabanındaki
  // sözel bağ açıklaması gösterilir — bölüm boş kalmasın.
  if (!baglar.length) {
    if (!sonuc.tur?.bagOzet) return null
    return (
      <div>
        <div className="ka-ust-etiket"><Link2 size={13} /> Bağlar</div>
        <div className="ka-kart sade dar">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span className="ka-rozet turuncu">{sonuc.tur.bagTuru === 'iyonik' ? 'İyonik bağ' : 'Kovalent bağ'}</span>
          </div>
          <p style={{ fontSize: 13.5, color: 'rgb(var(--ka-metin-2))' }}>{sonuc.tur.bagOzet}</p>
          {seviye === 'detayli' && sonuc.tur.bagDetay && (
            <p style={{ fontSize: 13, color: 'rgb(var(--ka-metin-2))', marginTop: 8 }}>{sonuc.tur.bagDetay}</p>
          )}
        </div>
        {sonuc.tur.ikiliBagOrnegi && (
          <div className="ka-not uyari" style={{ marginTop: 12 }}>
            <AlertTriangle size={15} />
            <span>
              <strong>Dikkat: bu bileşikte iki farklı bağ türü bir arada. </strong>
              İyonlar arasında <strong>iyonik bağ</strong>, çok atomlu iyonun kendi içinde ise
              <strong> kovalent bağ</strong> bulunur.
            </span>
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <div className="ka-ust-etiket"><Link2 size={13} /> Molekül içi (tanecik içi) bağlar</div>
      <div className="ka-izgara iki">
        {baglar.map((bag, i) => (
          <div className="ka-kart sade dar" key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span className="ka-formul" style={{ fontSize: 18 }}>{bag.etiket}</span>
              {bag.adet > 1 && <span className="ka-rozet">{bag.adet} adet</span>}
              <span className={`ka-rozet ${bag.tur === 'iyonik' ? 'turuncu' : bag.tur === 'polarKovalent' ? 'mor' : 'yesil'}`} style={{ marginLeft: 'auto' }}>
                {bag.ad}
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgb(var(--ka-metin-2))' }}>{bag.aciklama}</p>
            {bag.fark != null && (
              <div style={{ marginTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: 'rgb(var(--ka-metin-3))', marginBottom: 3 }}>
                  <span>Elektronegatiflik farkı</span>
                  <span style={{ fontWeight: 700, color: 'rgb(var(--ka-metin))' }}>{String(bag.fark).replace('.', ',')}</span>
                </div>
                <div className="ka-ilerleme">
                  <div className="ka-ilerleme-dolu" style={{ width: `${Math.min(100, (bag.fark / 3.3) * 100)}%` }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, color: 'rgb(var(--ka-metin-3))', marginTop: 3 }}>
                  <span>0 · apolar</span><span>0,4</span><span>1,7 · iyonik</span>
                </div>
              </div>
            )}
            {bag.sinirdaYakin && seviye === 'detayli' && (
              <div className="ka-not uyari" style={{ marginTop: 8, fontSize: 12.5 }}>
                <AlertTriangle size={14} />
                <span>Bu değer sınır bölgesinde. Elektronegatiflik farkı kesin bir çizgi değildir; metal–ametal ayrımıyla birlikte değerlendirilmelidir.</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {sonuc.tur?.bagDetay && seviye === 'detayli' && (
        <div className="ka-not" style={{ marginTop: 12 }}>
          <Info size={15} />
          <span>{sonuc.tur.bagDetay}</span>
        </div>
      )}

      {sonuc.tur?.ikiliBagOrnegi && (
        <div className="ka-not uyari" style={{ marginTop: 12 }}>
          <AlertTriangle size={15} />
          <span>
            <strong>Dikkat: bu bileşikte iki farklı bağ türü bir arada. </strong>
            İyonlar arasında <strong>iyonik bağ</strong>, çok atomlu iyonun kendi içinde ise
            <strong> kovalent bağ</strong> bulunur.
          </span>
        </div>
      )}
    </div>
  )
}

/** Polarite bölümü — vektör oklarıyla. */
function PolariteBolumu({ sonuc }) {
  const polarite = sonuc.tur?.polarite
  if (!polarite) return null
  const polarMi = String(polarite.sonuc).toLocaleLowerCase('tr').startsWith('polar')
  const apolarMi = String(polarite.sonuc).toLocaleLowerCase('tr').startsWith('apolar')

  return (
    <div>
      <div className="ka-ust-etiket"><Triangle size={13} /> Molekül polaritesi</div>
      <div className="ka-izgara iki">
        <div>
          <div className="ka-adimlar">
            {(polarite.adimlar ?? []).map((adim, i) => (
              <div className="ka-adim" key={i}>
                <span className="ka-adim-no">{i + 1}</span>
                <span>{adim}</span>
              </div>
            ))}
            <div className="ka-adim sonuc">
              <span className="ka-adim-no"><Sparkles size={12} /></span>
              <span dangerouslySetInnerHTML={{ __html: kalinYap(polarite.sonucCumlesi ?? `Sonuç: ${polarite.sonuc}`) }} />
            </div>
          </div>
          {polarite.not && (
            <div className="ka-not" style={{ marginTop: 10 }}>
              <Info size={15} />
              <span dangerouslySetInnerHTML={{ __html: kalinYap(polarite.not) }} />
            </div>
          )}
        </div>
        <div>
          {sonuc.yapi && !sonuc.tur?.kafes && (
            <>
              <MolekulGorunumu yapi={sonuc.yapi} yukseklik={220} dipoller ciftleriGoster={false} otomatikDon={false} />
              <p className="ka-sessiz" style={{ marginTop: 6 }}>
                Turuncu oklar <strong>bağ dipollerini</strong> gösterir; ok, elektronegatifliği büyük atoma doğrudur.
                {apolarMi && ' Bu molekülde oklar birbirini götürür, net dipol oluşmaz.'}
                {polarMi && ' Bu molekülde oklar birbirini götürmez, net bir dipol kalır.'}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

/** Moleküller arası etkileşimler bölümü. */
function EtkilesimBolumu({ sonuc }) {
  const [mod, setMod] = useState('arasi')
  const mai = sonuc.tur?.mai ?? []
  if (!mai.length) return null

  return (
    <div>
      <div className="ka-ust-etiket"><Waves size={13} /> Moleküller arası etkileşimler</div>

      <div className="ka-sekmeler" style={{ marginBottom: 12, maxWidth: 'min(100%, 520px)' }}>
        <button type="button" className="ka-sekme" aria-selected={mod === 'ici'} onClick={() => setMod('ici')}>
          Molekül içi bağları göster
        </button>
        <button type="button" className="ka-sekme" aria-selected={mod === 'arasi'} onClick={() => setMod('arasi')}>
          Moleküller arası etkileşimleri göster
        </button>
      </div>

      {sonuc.yapi && !sonuc.tur?.kafes && (
        <EtkilesimGorunumu yapi={sonuc.yapi} tur={sonuc.tur} mod={mod} />
      )}

      <div className="ka-izgara iki" style={{ marginTop: 12 }}>
        {mai.map((m) => (
          <div className={`ka-kart sade dar ${m.baskin ? '' : ''}`} key={m.ad} style={m.baskin ? { borderColor: 'rgb(var(--ka-vurgu) / 0.4)' } : undefined}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Magnet size={14} style={{ color: 'rgb(var(--ka-vurgu))' }} />
              <strong style={{ fontSize: 14 }}>{m.ad}</strong>
              {m.baskin && <span className="ka-rozet mor" style={{ marginLeft: 'auto' }}>Baskın</span>}
            </div>
            {m.aciklama && <p style={{ fontSize: 13, color: 'rgb(var(--ka-metin-2))', marginTop: 6 }}>{m.aciklama}</p>}
          </div>
        ))}
      </div>

      <div className="ka-not" style={{ marginTop: 12 }}>
        <Info size={15} />
        <span>
          <strong>Karıştırmayın: </strong>
          Molekül içi bağlar (kovalent) moleküllerin <em>kendi atomlarını</em> bir arada tutar ve çok güçlüdür.
          Moleküller arası etkileşimler ise <em>ayrı molekülleri</em> birbirine çeker ve daha zayıftır.
          Bir madde kaynarken kopan şey moleküller arası etkileşimlerdir, kovalent bağlar değil.
        </span>
      </div>
    </div>
  )
}

/* ————— Ana bileşen ————— */
export default function AnalizLaboratuvari({ baslangicFormul = '', seviye = 'temel', onElementSec }) {
  const [girdi, setGirdi] = useState(baslangicFormul || 'H₂O')
  const [sorgu, setSorgu] = useState(baslangicFormul || 'H₂O')
  const [sekme, setSekme] = useState('yapi')
  const sonucRef = useRef(null)

  useEffect(() => {
    if (baslangicFormul) { setGirdi(baslangicFormul); setSorgu(baslangicFormul) }
  }, [baslangicFormul])

  const sonuc = useMemo(() => analizEt(sorgu), [sorgu])
  const kavramNotu = useMemo(() => kavramDenetimi(sorgu, sonuc), [sorgu, sonuc])

  useEffect(() => { setSekme('yapi') }, [sonuc.anahtar])

  const analizEtTiklandi = () => setSorgu(girdi)
  const rastgele = () => {
    const secim = KESIF_LISTESI[Math.floor(Math.random() * KESIF_LISTESI.length)]
    setGirdi(secim)
    setSorgu(secim)
    sonucRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sinif = sonuc.basarili ? sonuc.sinifBilgisi : null
  const sekmeler = sonuc.basarili && sonuc.yapiVerisiVar
    ? [
      { kod: 'yapi', ad: 'Yapı ve geometri', ikon: Atom },
      ...(sonuc.tur?.lewis || sonuc.tur?.rezonans ? [{ kod: 'lewis', ad: 'Lewis yapısı', ikon: Layers }] : []),
      { kod: 'bag', ad: 'Bağlar', ikon: Link2 },
      ...(sonuc.tur?.polarite ? [{ kod: 'polarite', ad: 'Polarite', ikon: Triangle }] : []),
      ...(sonuc.tur?.mai?.length ? [{ kod: 'etkilesim', ad: 'Etkileşimler', ikon: Waves }] : []),
    ]
    : []

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 4</div>
        <h2>Bileşik Analiz Laboratuvarı</h2>
        <p>
          Bir kimyasal formül yaz; atom sayımından molekül geometrisine, Lewis yapısından
          moleküller arası etkileşimlere kadar tüm çözümlemeyi tek ekranda gör.
        </p>
      </div>

      {/* Giriş */}
      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div className="ka-formul-etiket">Bir formül yaz</div>
        <div className="ka-formul-satir">
          <input
            className="ka-formul-giris"
            value={girdi}
            onChange={(e) => setGirdi(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') analizEtTiklandi() }}
            placeholder="H2O, Ca(OH)2, NO3-, Al2(SO4)3…"
            aria-label="Kimyasal formül"
            spellCheck={false}
            autoComplete="off"
          />
          <button type="button" className="ka-dugme birincil" onClick={analizEtTiklandi}>
            <FlaskConical size={15} /> Analiz Et
          </button>
          <button type="button" className="ka-dugme" onClick={rastgele} title="Rastgele bir tür getir">
            <Dices size={15} /> Keşfet
          </button>
        </div>
        <div className="ka-ornekler">
          {ORNEKLER.map((o) => (
            <button key={o} type="button" className="ka-ornek-dugme" onClick={() => { setGirdi(o); setSorgu(o) }}>{o}</button>
          ))}
        </div>
      </div>

      <div ref={sonucRef} />

      {/* Hata */}
      {!sonuc.basarili && (
        <div className="ka-kart">
          <div className="ka-not hata">
            <XCircle size={16} />
            <span><strong>Formül okunamadı. </strong>{sonuc.hata}</span>
          </div>
          <p className="ka-sessiz" style={{ marginTop: 10 }}>
            İpuçları: element sembollerinde ilk harf büyük olur (Na, Cl, Fe). Alt indisleri rakamla
            yaz (H2O). İyon yükünü sona ekle (NO3-, SO4^2-). Parantez kullanabilirsin: Ca(OH)2.
          </p>
        </div>
      )}

      {sonuc.basarili && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Yazım onarımı bildirimi */}
          {sonuc.onarimlar?.length > 0 && (
            <div className="ka-not">
              <Info size={15} />
              <span>
                Yazımı düzelttim: {sonuc.onarimlar.map((o) => `"${o.yazilan}" → ${o.dogru}`).join(', ')}.
                Element sembollerinde <strong>ilk harf büyük, ikinci harf küçük</strong> yazılır.
              </span>
            </div>
          )}

          {/* Yük yazımı belirsizliği */}
          {sonuc.belirsizYuk && (
            <div className="ka-not">
              <Info size={15} />
              <span>
                <strong>{sonuc.bicimli}</strong> olarak okudum: sondaki rakamı alt indis, işareti ise
                yük olarak aldım. Yükü açıkça belirtmek istersen <strong>SO4^2-</strong> gibi yazabilirsin.
              </span>
            </div>
          )}

          {/* Kavram düzeltmesi */}
          {kavramNotu && (
            <div className={`ka-not ${kavramNotu.tur === 'duzeltme' ? 'uyari' : 'olumlu'}`}>
              {kavramNotu.tur === 'duzeltme' ? <AlertTriangle size={16} /> : <CheckCircle2 size={16} />}
              <span>
                <strong>{kavramNotu.baslik}. </strong>
                <span dangerouslySetInnerHTML={{ __html: kalinYap(kavramNotu.metin) }} />
              </span>
            </div>
          )}

          {/* Tür uyarısı (molekül/formül birimi ayrımı) */}
          {sonuc.uyari && !kavramNotu && (
            <div className="ka-not uyari">
              <AlertTriangle size={16} />
              <span><strong>{sonuc.uyari.baslik}. </strong>{sonuc.uyari.metin}</span>
            </div>
          )}

          {/* Özet kart */}
          <div className="ka-kart">
            <div className="ka-ozet-basi">
              <div style={{ minWidth: 0 }}>
                <div className="ka-formul-buyuk">{sonuc.bicimli}</div>
                {sonuc.ad && <div className="ka-ozet-ad">{sonuc.ad}</div>}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                  <span className="ka-rozet mor">{sonuc.sinifAdi}</span>
                  {sinif && <span className={`ka-rozet ${sinif.molekul ? 'yesil' : ''}`}>Molekül: {sinif.molekul ? 'Evet' : 'Hayır'}</span>}
                  {sinif && <span className={`ka-rozet ${sinif.bilesik ? 'yesil' : ''}`}>Bileşik: {sinif.bilesik ? 'Evet' : 'Hayır'}</span>}
                  {sinif && <span className={`ka-rozet ${sinif.iyon ? 'turuncu' : ''}`}>İyon: {sinif.iyon ? 'Evet' : 'Hayır'}</span>}
                </div>
              </div>
            </div>

            <div className="ka-ust-etiket"><Calculator size={13} /> Formülden hesaplananlar</div>
            <dl className="ka-veri-izgara" style={{ marginBottom: 14 }}>
              <VeriKutu baslik="Toplam atom" deger={sonuc.toplamAtom} vurgulu />
              <VeriKutu baslik="Element çeşidi" deger={sonuc.elementCesidi} />
              <VeriKutu baslik="Net yük" deger={sonuc.yukDuz} vurgulu={sonuc.yuk !== 0} />
              <VeriKutu baslik="Mol kütlesi" deger={sonuc.molKutlesi != null ? `${String(sonuc.molKutlesi.toFixed(2)).replace('.', ',')} g/mol` : '—'} />
            </dl>

            <div className="ka-ust-etiket">Atom dağılımı</div>
            <div className="ka-izgara uc">
              {sonuc.atomlar.map((a) => (
                <AtomKarti key={a.sembol} sembol={a.sembol} adet={a.adet} element={a.element} />
              ))}
            </div>

            {sonuc.tur?.ozet && (
              <p style={{ marginTop: 14, fontSize: 14, color: 'rgb(var(--ka-metin-2))' }}>{sonuc.tur.ozet}</p>
            )}
            {seviye === 'detayli' && sonuc.tur?.detay && (
              <div className="ka-not" style={{ marginTop: 10 }}>
                <Info size={15} />
                <span>{sonuc.tur.detay}</span>
              </div>
            )}
            {sonuc.tur?.gunluk && (
              <p className="ka-sessiz" style={{ marginTop: 10 }}>
                <strong style={{ color: 'rgb(var(--ka-metin-2))' }}>Günlük hayatta: </strong>{sonuc.tur.gunluk}
              </p>
            )}
          </div>

          {/* Atom sayımı adım adım */}
          <AtomSayimi sonuc={sonuc} />

          {/* İyonik ayrıştırma */}
          {sonuc.iyonik && <IyonAyristirma sonuc={sonuc} />}

          {/* Yapı verisi yoksa dürüst uyarı */}
          {!sonuc.yapiVerisiVar && (
            <div className="ka-kart">
              <div className="ka-not uyari">
                <AlertTriangle size={16} />
                <span>
                  <strong>Yapı verisi yok. </strong>{sonuc.yapiNotu}
                </span>
              </div>
              {sonuc.tahminiBag && (
                <div style={{ marginTop: 14 }}>
                  <BagAnalizi sonuc={sonuc} seviye={seviye} />
                  <p className="ka-sessiz" style={{ marginTop: 8 }}>
                    Yukarıdaki bağ türü, iki elementin elektronegatiflik farkından ve metal/ametal
                    olmasından çıkarıldı. Bu bilgi geometriyi belirlemez.
                  </p>
                </div>
              )}
              {sonuc.iyonBilgisi && (
                <div style={{ marginTop: 14 }}>
                  <div className="ka-ust-etiket">Bu iyon nasıl oluştu?</div>
                  <div className="ka-adimlar">
                    <div className="ka-adim">
                      <span className="ka-adim-no">1</span>
                      <span>
                        Nötr {sonuc.iyonBilgisi.element.ad} atomunda {sonuc.iyonBilgisi.protonSayisi} proton ve{' '}
                        {sonuc.iyonBilgisi.protonSayisi} elektron bulunur.
                      </span>
                    </div>
                    <div className="ka-adim">
                      <span className="ka-adim-no">2</span>
                      <span>
                        {sonuc.iyonBilgisi.katyonMu
                          ? `${sonuc.iyonBilgisi.verilen} elektron verdiğinde elektron sayısı ${sonuc.iyonBilgisi.elektronSayisi}'e düşer.`
                          : `${sonuc.iyonBilgisi.alinan} elektron aldığında elektron sayısı ${sonuc.iyonBilgisi.elektronSayisi}'e çıkar.`}
                      </span>
                    </div>
                    <div className="ka-adim sonuc">
                      <span className="ka-adim-no"><Sparkles size={12} /></span>
                      <span>
                        Proton sayısı değişmez ({sonuc.iyonBilgisi.protonSayisi}); net yük{' '}
                        {sonuc.yukDuz} olur → {sonuc.iyonBilgisi.katyonMu ? 'katyon' : 'anyon'}.
                        {sonuc.iyonBilgisi.esElektronik && ` Elektron dizilimi ${sonuc.iyonBilgisi.esElektronik} soy gazına benzer (izoelektronik).`}
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ka-dugme kucuk"
                    style={{ marginTop: 10 }}
                    onClick={() => onElementSec?.(sonuc.iyonBilgisi.element)}
                  >
                    <Search size={13} /> {sonuc.iyonBilgisi.element.ad} elementini periyodik sistemde aç
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Yapı verisi sekmeleri */}
          {sonuc.yapiVerisiVar && sekmeler.length > 0 && (
            <div className="ka-kart">
              <div className="ka-sekmeler" style={{ marginBottom: 16 }}>
                {sekmeler.map((s) => (
                  <button
                    key={s.kod}
                    type="button"
                    className="ka-sekme"
                    aria-selected={sekme === s.kod}
                    onClick={() => setSekme(s.kod)}
                  >
                    {s.ad}
                  </button>
                ))}
              </div>

              {sekme === 'yapi' && (
                <div className="ka-izgara iki">
                  <div>
                    {sonuc.yapi ? (
                      <MolekulGorunumu
                        yapi={sonuc.yapi}
                        yukseklik={300}
                        delokalize={Boolean(sonuc.tur?.delokalize)}
                        ciftleriGoster
                      />
                    ) : (
                      <div className="ka-not">
                        <Info size={15} />
                        <span>
                          Bu bileşik iyonik örgü hâlinde bulunur; tek bir molekül modeli çizilemez.
                          Aşağıdaki iyon ayrıştırmasına ve iyonların kendi yapılarına bakabilirsin.
                        </span>
                      </div>
                    )}
                    {sonuc.tur?.delokalize && (
                      <p className="ka-sessiz" style={{ marginTop: 6 }}>
                        Mor kesikli çizgiler <strong>delokalize π elektronlarını</strong> gösterir:
                        bağlar rezonans nedeniyle eşdeğerdir.
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="ka-ust-etiket"><Beaker size={13} /> Geometri (VSEPR)</div>
                    <dl style={{ margin: 0 }}>
                      {sonuc.tur?.merkez && (
                        <div className="ka-ozellik-satir"><dt>Merkez atom</dt><dd>{sonuc.tur.merkez}</dd></div>
                      )}
                      {sonuc.tur?.elektronGeo && (
                        <div className="ka-ozellik-satir"><dt>Elektron geometrisi</dt><dd>{sonuc.tur.elektronGeo}</dd></div>
                      )}
                      {sonuc.tur?.geo && (
                        <div className="ka-ozellik-satir"><dt>Molekül geometrisi</dt><dd>{sonuc.tur.geo}</dd></div>
                      )}
                      {sonuc.tur?.aci && (
                        <div className="ka-ozellik-satir"><dt>Bağ açısı</dt><dd>{sonuc.tur.aci}</dd></div>
                      )}
                      {sonuc.tur?.polarite?.sonuc && (
                        <div className="ka-ozellik-satir"><dt>Polarite</dt><dd>{sonuc.tur.polarite.sonuc}</dd></div>
                      )}
                      {sonuc.tur?.mai?.find((m) => m.baskin) && (
                        <div className="ka-ozellik-satir">
                          <dt>Baskın moleküller arası etkileşim</dt>
                          <dd>{sonuc.tur.mai.find((m) => m.baskin).ad}</dd>
                        </div>
                      )}
                    </dl>

                    {sonuc.tur?.elektronGeo && sonuc.tur?.geo && sonuc.tur.elektronGeo !== sonuc.tur.geo && (
                      <div className="ka-not" style={{ marginTop: 12 }}>
                        <Info size={15} />
                        <span>
                          <strong>Elektron geometrisi ≠ molekül geometrisi. </strong>
                          Elektron geometrisi ortaklanmamış çiftleri de sayar; molekül geometrisi
                          yalnızca <em>atomların</em> yerleşimini anlatır. Ortaklanmamış çiftler
                          görünmez ama yer kaplar ve açıyı daraltır.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {sekme === 'lewis' && (
                <div className="ka-izgara iki">
                  <LewisGorunumu
                    tanimlar={sonuc.tur.rezonans ?? [sonuc.tur.lewis]}
                    netYuk={sonuc.yuk}
                    rezonansNotu={sonuc.tur.rezonansNotu}
                  />
                  <div>
                    <div className="ka-not">
                      <Info size={15} />
                      <span>
                        <strong>Lewis yapısı geometri göstermez. </strong>
                        Burada bağların ve ortaklanmamış elektron çiftlerinin <em>dağılımı</em> gösterilir;
                        gerçek bağ açıları için "Yapı ve geometri" sekmesindeki 3B modele bak.
                      </span>
                    </div>
                    <ul className="ka-liste" style={{ marginTop: 12 }}>
                      <li><strong>Çizgi:</strong> ortaklaşılan bir elektron çifti (bağ).</li>
                      <li><strong>Mor noktalar:</strong> ortaklanmamış elektron çiftleri.</li>
                      <li><strong>Turuncu daire:</strong> formal yük (değerlik e⁻ − ortaklanmamış e⁻ − bağ sayısı).</li>
                      {sonuc.yuk !== 0 && <li><strong>Köşeli parantez:</strong> yapının bir iyon olduğunu, yükün tüm taneciğe ait olduğunu gösterir.</li>}
                    </ul>
                  </div>
                </div>
              )}

              {sekme === 'bag' && <BagAnalizi sonuc={sonuc} seviye={seviye} />}
              {sekme === 'polarite' && <PolariteBolumu sonuc={sonuc} />}
              {sekme === 'etkilesim' && <EtkilesimBolumu sonuc={sonuc} />}
            </div>
          )}

          {/* Neden? */}
          {sonuc.tur?.neden?.length > 0 && (
            <div>
              <div className="ka-ust-etiket">Bu neden böyle?</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {sonuc.tur.neden.map((n) => (
                  <NedenKutusu key={n.soru} soru={n.soru} adimlar={n.adimlar} sonuc={n.sonuc} />
                ))}
              </div>
            </div>
          )}

          {/* Ek notlar */}
          {sonuc.tur?.notlar?.length > 0 && (
            <div className="ka-kart sade">
              <div className="ka-ust-etiket">Sık yapılan hatalar</div>
              <ul className="ka-liste">
                {sonuc.tur.notlar.map((n) => <li key={n}>{n}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
