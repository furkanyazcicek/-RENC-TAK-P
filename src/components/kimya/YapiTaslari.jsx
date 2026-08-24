import { useMemo, useState } from 'react'
import { Atom, CheckCircle2, Info, Minus, Plus, XCircle } from 'lucide-react'
import { analizEt } from '../../lib/kimya/analiz.js'
import { ELEMENT_SOZLUGU } from '../../data/kimya/elementler.js'
import { atomRengi } from '../../data/kimya/atomRenkleri.js'
import MolekulGorunumu from './MolekulGorunumu.jsx'
import BohrModeli from './BohrModeli.jsx'
import NedenKutusu from './NedenKutusu.jsx'

/** Bölümde incelenebilecek örnek türler — kavram sırasına göre dizildi. */
const ORNEKLER = [
  { formul: 'H', etiket: 'H', altBaslik: 'Tek atom' },
  { formul: 'O', etiket: 'O', altBaslik: 'Tek atom' },
  { formul: 'O2', etiket: 'O₂', altBaslik: 'Element molekülü' },
  { formul: 'N2', etiket: 'N₂', altBaslik: 'Element molekülü' },
  { formul: 'H2O', etiket: 'H₂O', altBaslik: 'Moleküler bileşik' },
  { formul: 'CO2', etiket: 'CO₂', altBaslik: 'Moleküler bileşik' },
  { formul: 'NaCl', etiket: 'NaCl', altBaslik: 'İyonik bileşik' },
  { formul: 'Na+', etiket: 'Na⁺', altBaslik: 'Katyon' },
  { formul: 'Cl-', etiket: 'Cl⁻', altBaslik: 'Anyon' },
  { formul: 'NO3-', etiket: 'NO₃⁻', altBaslik: 'Çok atomlu anyon' },
  { formul: 'NH4+', etiket: 'NH₄⁺', altBaslik: 'Çok atomlu katyon' },
]

/** Evet/hayır satırı — sorunun cevabı renkle değil, ikonla ve yazıyla verilir. */
function EvetHayir({ soru, deger, aciklama }) {
  return (
    <div className="ka-ozellik-satir" title={aciklama}>
      <dt>{soru}</dt>
      <dd style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
        {deger
          ? <CheckCircle2 size={15} style={{ color: 'rgb(var(--ka-yesil))' }} />
          : <XCircle size={15} style={{ color: 'rgb(var(--ka-metin-3))' }} />}
        {deger ? 'Evet' : 'Hayır'}
      </dd>
    </div>
  )
}

/** Nötr atom → iyon dönüşümünü canlandıran küçük etkileşimli görsel. */
function IyonlasmaOyunu() {
  const [sembol, setSembol] = useState('Na')
  const [verilen, setVerilen] = useState(0)
  const element = ELEMENT_SOZLUGU[sembol]
  const elektron = element.atomNo - verilen
  const yuk = verilen
  const renk = atomRengi(sembol)

  const secenekler = ['Na', 'Mg', 'Al', 'O', 'Cl', 'F']
  const enFazlaVerme = element.grup <= 13 ? Math.min(3, element.degerlik) : 0
  const enFazlaAlma = element.grup >= 15 ? 8 - element.degerlik : 0

  const yukMetni = yuk === 0 ? 'nötr atom' : `${Math.abs(yuk)}${yuk > 0 ? '+' : '−'} yüklü ${yuk > 0 ? 'katyon' : 'anyon'}`

  return (
    <div className="ka-kart">
      <div className="ka-ust-etiket"><Atom size={13} /> Atomdan iyona</div>
      <p className="ka-sessiz" style={{ marginBottom: 12 }}>
        Bir atom elektron verdiğinde veya aldığında ne olur? Düğmelerle elektron sayısını değiştir.
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 14 }}>
        {secenekler.map((s) => (
          <button
            key={s}
            type="button"
            className={`ka-ornek-dugme ${sembol === s ? 'secili' : ''}`}
            style={sembol === s ? { background: 'rgb(var(--ka-vurgu-yumusak))', borderColor: 'rgb(var(--ka-vurgu) / 0.4)', color: 'rgb(var(--ka-vurgu))' } : undefined}
            onClick={() => { setSembol(s); setVerilen(0) }}
          >
            {s}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 88, height: 88, borderRadius: '50%', display: 'grid', placeItems: 'center',
              background: renk.dolgu, color: renk.yazi, border: `2px solid ${renk.kenar}`,
              fontSize: 26, fontWeight: 750, position: 'relative',
            }}
          >
            {sembol}
            {yuk !== 0 && (
              <span style={{ position: 'absolute', top: 6, right: 10, fontSize: 15 }}>
                {Math.abs(yuk) === 1 ? '' : Math.abs(yuk)}{yuk > 0 ? '+' : '−'}
              </span>
            )}
          </div>
          <div style={{ marginTop: 8, fontWeight: 650, fontSize: 13.5 }}>{yukMetni}</div>
        </div>

        <div style={{ flex: 1, minWidth: 220 }}>
          <dl style={{ margin: 0 }}>
            <div className="ka-ozellik-satir"><dt>Proton sayısı</dt><dd>{element.atomNo} (hiç değişmez)</dd></div>
            <div className="ka-ozellik-satir"><dt>Elektron sayısı</dt><dd>{elektron}</dd></div>
            <div className="ka-ozellik-satir"><dt>Net yük</dt><dd>{yuk === 0 ? '0' : `${yuk > 0 ? '+' : ''}${yuk}`}</dd></div>
          </dl>

          <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
            <button
              type="button" className="ka-dugme kucuk"
              onClick={() => setVerilen((v) => v - 1)}
              disabled={-verilen >= enFazlaAlma}
            >
              <Plus size={13} /> Elektron al
            </button>
            <button
              type="button" className="ka-dugme kucuk"
              onClick={() => setVerilen((v) => v + 1)}
              disabled={verilen >= enFazlaVerme}
            >
              <Minus size={13} /> Elektron ver
            </button>
            {verilen !== 0 && (
              <button type="button" className="ka-dugme kucuk sade" onClick={() => setVerilen(0)}>Sıfırla</button>
            )}
          </div>
        </div>
      </div>

      <div className="ka-not" style={{ marginTop: 14 }}>
        <Info size={15} />
        <span>
          İyon yükü <strong>proton sayısı − elektron sayısı</strong> ile bulunur. Proton sayısı asla
          değişmez; değişirse element değişmiş olur. Metaller elektron <strong>verip katyon</strong>,
          ametaller elektron <strong>alıp anyon</strong> olma eğilimindedir.
        </span>
      </div>
    </div>
  )
}

export default function YapiTaslari({ onFormulSec }) {
  const [secili, setSecili] = useState('H2O')
  const sonuc = useMemo(() => analizEt(secili), [secili])
  const tekAtom = sonuc.basarili && sonuc.toplamAtom === 1 && sonuc.yuk === 0
  const element = tekAtom ? ELEMENT_SOZLUGU[sonuc.atomlar[0].sembol] : null

  return (
    <section>
      <div className="ka-bolum-basi">
        <div className="ka-ust-etiket">Bölüm 2</div>
        <h2>Maddenin Yapı Taşları</h2>
        <p>
          Atom, element, molekül, bileşik, iyon, katyon, anyon… Bu kavramlar birbirinin yerine
          kullanılamaz. Aşağıdaki örneklere tıkla, her birinin cevabını aynı sekiz soruda karşılaştır.
        </p>
      </div>

      <div className="ka-kart" style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
          {ORNEKLER.map((o) => (
            <button
              key={o.formul}
              type="button"
              className="ka-ornek-dugme"
              style={secili === o.formul
                ? { background: 'rgb(var(--ka-vurgu-yumusak))', borderColor: 'rgb(var(--ka-vurgu) / 0.45)', color: 'rgb(var(--ka-vurgu))' }
                : undefined}
              onClick={() => setSecili(o.formul)}
              aria-pressed={secili === o.formul}
              title={o.altBaslik}
            >
              {o.etiket}
            </button>
          ))}
        </div>
      </div>

      {sonuc.basarili && (
        <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
          <div className="ka-kart">
            <div className="ka-ozet-basi" style={{ paddingBottom: 10, marginBottom: 10 }}>
              <div>
                <div className="ka-formul-buyuk" style={{ fontSize: 32 }}>{sonuc.bicimli}</div>
                {sonuc.ad && <div className="ka-ozet-ad">{sonuc.ad}</div>}
              </div>
              <span className="ka-rozet mor">{sonuc.sinifAdi}</span>
            </div>

            <dl style={{ margin: 0 }}>
              <div className="ka-ozellik-satir"><dt>Adı</dt><dd>{sonuc.ad ?? '—'}</dd></div>
              <div className="ka-ozellik-satir"><dt>Türü</dt><dd>{sonuc.sinifAdi}</dd></div>
              <div className="ka-ozellik-satir">
                <dt>İçerdiği elementler</dt>
                <dd>{sonuc.atomlar.map((a) => a.element?.ad ?? a.sembol).join(', ')}</dd>
              </div>
              <div className="ka-ozellik-satir"><dt>Atom sayısı</dt><dd>{sonuc.toplamAtom}</dd></div>
              <div className="ka-ozellik-satir"><dt>Element çeşidi</dt><dd>{sonuc.elementCesidi}</dd></div>
              <div className="ka-ozellik-satir"><dt>Yükü</dt><dd>{sonuc.yukDuz}</dd></div>
              <EvetHayir soru="Molekül mü?" deger={Boolean(sonuc.sinifBilgisi?.molekul)} aciklama="Molekül: kovalent bağlı, nötr, bağımsız var olabilen tanecik" />
              <EvetHayir soru="Bileşik mi?" deger={Boolean(sonuc.sinifBilgisi?.bilesik)} aciklama="Bileşik: farklı elementlerin belirli oranda birleşmesiyle oluşan saf madde" />
              <EvetHayir soru="İyon mu?" deger={Boolean(sonuc.sinifBilgisi?.iyon)} aciklama="İyon: net elektrik yükü olan tanecik" />
            </dl>

            {sonuc.tur?.ozet && (
              <p style={{ marginTop: 12, fontSize: 13.5, color: 'rgb(var(--ka-metin-2))' }}>{sonuc.tur.ozet}</p>
            )}

            {sonuc.uyari && (
              <div className="ka-not uyari" style={{ marginTop: 12 }}>
                <Info size={15} />
                <span><strong>{sonuc.uyari.baslik}. </strong>{sonuc.uyari.metin}</span>
              </div>
            )}

            <button
              type="button"
              className="ka-dugme kucuk"
              style={{ marginTop: 14 }}
              onClick={() => onFormulSec?.(secili)}
            >
              Laboratuvarda ayrıntılı incele
            </button>
          </div>

          <div className="ka-kart">
            <div className="ka-ust-etiket">Tanecik görünümü</div>
            {sonuc.yapi
              ? <MolekulGorunumu yapi={sonuc.yapi} yukseklik={260} delokalize={Boolean(sonuc.tur?.delokalize)} />
              : element
                ? (
                  <>
                    <BohrModeli element={element} boyut={250} />
                    <p className="ka-sessiz" style={{ marginTop: 4 }}>
                      {element.ad} atomu — {element.katmanlar.join(', ')} katman dağılımı,{' '}
                      {element.degerlik} değerlik elektronu.
                    </p>
                  </>
                )
                : (
                  <div className="ka-not">
                    <Info size={15} />
                    <span>Bu tür için 3B model bulunmuyor; yukarıdaki hesaplanan bilgiler geçerlidir.</span>
                  </div>
                )}
          </div>
        </div>
      )}

      <div className="ka-izgara iki" style={{ marginBottom: 16 }}>
        <IyonlasmaOyunu />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <NedenKutusu
            soru="Molekül ile bileşik aynı şey mi?"
            adimlar={[
              'Molekül, atomların kovalent bağla birleşmesiyle oluşan tanecik demektir.',
              'Bileşik, farklı elementlerin belirli oranda birleşmesiyle oluşan saf madde demektir.',
              'O₂ moleküldür ama bileşik değildir (tek tür atom içerir).',
              'NaCl bileşiktir ama molekül değildir (iyonik örgüdür).',
            ]}
            sonuc="Molekül **tanecik türünü**, bileşik **madde türünü** anlatır. İkisi farklı sorulardır."
          />
          <NedenKutusu
            soru="İyonun yükü nasıl belirlenir?"
            adimlar={[
              'Nötr atomda proton sayısı = elektron sayısıdır, net yük sıfırdır.',
              'Atom elektron verirse elektron sayısı azalır, pozitif yük kalır → katyon.',
              'Atom elektron alırsa elektron sayısı artar, negatif yük oluşur → anyon.',
              'Yük = proton sayısı − elektron sayısı.',
            ]}
            sonuc="Proton sayısı asla değişmez; değişseydi element değişirdi."
          />
          <NedenKutusu
            soru="Çok atomlu iyon nedir?"
            adimlar={[
              'Bazı iyonlar tek atomdan değil, birbirine kovalent bağla bağlı birkaç atomdan oluşur.',
              'Bu atom grubunun tamamı birlikte net bir yük taşır (NO₃⁻, SO₄²⁻, NH₄⁺).',
              'Grubun içindeki bağlar kovalenttir; grup, karşıt yüklü iyonla iyonik bağ kurar.',
            ]}
            sonuc="Yani aynı bileşikte hem **kovalent** hem **iyonik** bağ bulunabilir (örnek: NaNO₃)."
          />
        </div>
      </div>
    </section>
  )
}
