import { useMemo, useState } from 'react'
import { Eye, Image, Plus, RotateCcw } from 'lucide-react'
import { riskPuani } from '../../../lib/cografya/modeller.js'
import { BolgeBasligi, Kaydirici, Mekanizma, ModulKabugu, Olcumler } from '../ortak/index.js'

const RISK_GORSELI = '/atlas-assets/cografya/imagegen/afet-risk-karsilastirma-v2.jpg'
const DONGU_GORSELI = '/atlas-assets/cografya/imagegen/afet-yonetim-dongusu-v2.jpg'
const MODEL_NOTU = 'Fotogerçekçi sahne, öğretim için üretilmiş görsel modeldir; gerçek bir kentin olay kaydı, hasar ölçümü veya risk haritası değildir.'

const RISK_KANITLARI = [
  {
    id: 'tehlike',
    ad: 'Tehlike',
    konum: [53, 77],
    aciklama: 'Fay izi aynı havzayı kesiyor. Depremin oluşma olasılığı ve şiddeti, yerleşimden bağımsız tehlike katmanıdır.',
  },
  {
    id: 'maruziyet',
    ad: 'Maruziyet',
    konum: [13, 31],
    aciklama: 'Soldaki sık yapılaşma, aynı sarsıntıya daha fazla insanın, yapının ve hizmetin maruz kalması demektir.',
  },
  {
    id: 'kirilganlik',
    ad: 'Kırılganlık',
    konum: [24, 58],
    aciklama: 'Gevşek alüvyon zemin ve dayanıksız yapılar solda hasarı büyütürüyor. Kırılganlık, tehlikenin kayba dönüşme eşiğidir.',
  },
  {
    id: 'hazirlik',
    ad: 'Hazırlık',
    konum: [79, 59],
    aciklama: 'Sağdaki açık toplanma alanı, güçlendirilmiş kamu yapıları ve kesintisiz ulaşım ağı kaybı azaltır.',
  },
  {
    id: 'sonuc',
    ad: 'Sonuç',
    konum: [51, 34],
    aciklama: 'Tehlike aynı olsa da zemin, yapı stoku, yoğunluk ve hazırlık değiştiği için iki yakada afet sonucu aynı değildir.',
  },
]

const EVRELER = [
  {
    ad: 'Risk azaltma',
    konum: [13, 55],
    aciklama: 'Olaydan önce okul güçlendirilir, drenaj yenilenir ve riskli alana yeni yapılaşma sınırlanır.',
  },
  {
    ad: 'Hazırlık',
    konum: [41, 66],
    aciklama: 'Tahliye tatbikatı, toplanma alanı, malzeme stoku ve açık ulaşım koridoru olaydan önce hazırdır.',
  },
  {
    ad: 'Müdahale',
    konum: [65, 56],
    aciklama: 'Olaydan hemen sonra arama-kurtarma, ilk yardım, geçici barınma ve ulaşımın sürmesi birlikte yürütülür.',
  },
  {
    ad: 'İyileştirme',
    konum: [87, 55],
    aciklama: 'Hasarlı alan aynı kırılganlıkla kurulmaz; daha sağlam, daha geçirgen ve daha erişilebilir biçimde yeniden yapılır.',
  },
]

function RiskSahnesi({ tehlike, maruziyet, kirilganlik, hazirlik, risk, seviye }) {
  const [odak, setOdak] = useState('sonuc')
  const secili = RISK_KANITLARI.find((kanit) => kanit.id === odak) ?? RISK_KANITLARI[4]
  const degerler = { tehlike, maruziyet, kirilganlik, hazirlik, sonuc: risk }

  return (
    <figure
      className="ca-risk-gercekci"
      style={{ '--risk': risk / 100, '--hazirlik': hazirlik / 100 }}
    >
      <div className="ca-risk-foto">
        <img
          src={RISK_GORSELI}
          alt="Aynı fay hattının solunda gevşek zeminde yoğun ve hasarlı yapılaşma; sağında sağlam zeminde açık alanlı, erişilebilir ve daha az hasarlı yerleşim"
          loading="lazy"
        />
        <div className="ca-risk-isi-haritasi" aria-hidden="true" />
        {RISK_KANITLARI.map((kanit, index) => (
          <button
            type="button"
            key={kanit.id}
            className={odak === kanit.id ? 'etkin' : ''}
            style={{
              left: `${kanit.konum[0]}%`,
              top: `${kanit.konum[1]}%`,
              '--deger': (degerler[kanit.id] ?? risk) / 100,
            }}
            aria-label={`${kanit.ad} kanıtını aç`}
            aria-pressed={odak === kanit.id}
            onClick={() => setOdak(kanit.id)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
          </button>
        ))}
        <div className="ca-risk-puan" aria-live="polite">
          <small>Hesaplanan risk</small>
          <strong>{risk}<span>/100</span></strong>
          <em>{seviye}</em>
        </div>
      </div>

      <figcaption>
        <div className="ca-risk-katmanlar" role="group" aria-label="Risk kanıt katmanları">
          {RISK_KANITLARI.map((kanit, index) => (
            <button
              type="button"
              key={kanit.id}
              className={odak === kanit.id ? 'etkin' : ''}
              aria-pressed={odak === kanit.id}
              onClick={() => setOdak(kanit.id)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>{kanit.ad}
            </button>
          ))}
        </div>
        <article aria-live="polite">
          <small><Eye /> Görsel kanıt · {secili.ad}</small>
          <p>{secili.aciklama}</p>
        </article>
      </figcaption>
    </figure>
  )
}

function AfetDongusuSahnesi({ sira, setSira, kanitla }) {
  const [evreOdak, setEvreOdak] = useState(0)
  const secili = EVRELER[evreOdak]
  const dogruSira = sira.join('|') === EVRELER.map((evre) => evre.ad).join('|')

  const evreEkle = (evre) => {
    if (sira.includes(evre)) return
    setSira((eski) => [...eski, evre])
    kanitla()
  }

  return (
    <div className="ca-afet-gercekci">
      <figure>
        <div className="ca-afet-foto">
          <img
            src={DONGU_GORSELI}
            alt="Aynı vadide okul güçlendirmesi, tahliye ve toplanma hazırlığı, afet sonrası müdahale ve daha dirençli yeniden yapılanmayı birlikte gösteren fotogerçekçi panorama"
            loading="lazy"
          />
          {EVRELER.map((evre, index) => (
            <button
              type="button"
              key={evre.ad}
              className={evreOdak === index ? 'etkin' : ''}
              style={{ left: `${evre.konum[0]}%`, top: `${evre.konum[1]}%` }}
              aria-label={`${evre.ad} kanıtını incele`}
              aria-pressed={evreOdak === index}
              onClick={() => setEvreOdak(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
            </button>
          ))}
        </div>
        <figcaption aria-live="polite">
          <div>
            <small><Image /> Fotogerçekçi kanıt · {evreOdak + 1}. evre</small>
            <strong>{secili.ad}</strong>
            <p>{secili.aciklama}</p>
          </div>
          <button type="button" disabled={sira.includes(secili.ad)} onClick={() => evreEkle(secili.ad)}>
            <Plus /> {sira.includes(secili.ad) ? 'Sıraya eklendi' : 'Bu evreyi sıraya ekle'}
          </button>
        </figcaption>
      </figure>

      <div className="ca-afet-dongu">
        <div className="ca-evre-secim">
          {EVRELER.map((evre, index) => (
            <button
              type="button"
              key={evre.ad}
              disabled={sira.includes(evre.ad)}
              onClick={() => {
                setEvreOdak(index)
                evreEkle(evre.ad)
              }}
            >
              {evre.ad}
            </button>
          ))}
          <button type="button" className="sifirla" onClick={() => setSira([])}>
            <RotateCcw size={15} /> Sıfırla
          </button>
        </div>
        <ol>
          {EVRELER.map((_, index) => (
            <li key={index} className={sira[index] ? 'dolu' : ''}>
              <span>{index + 1}</span>{sira[index] || 'Bir evre seç'}
            </li>
          ))}
        </ol>
        <Mekanizma tur={dogruSira ? 'olumlu' : 'bilgi'}>
          {sira.length < 4
            ? 'Görseldeki eylemleri neden–sonuç sırasına yerleştir. Döngü, iyileştirmeden yeniden risk azaltmaya döner.'
            : dogruSira
              ? 'Doğru zincir: riski azalt, hazırlan, olay anında müdahale et, daha dirençli iyileştir.'
              : 'Sıra mekanizmayı bozuyor; olaydan önce azaltma ve hazırlık gelmeli.'}
        </Mekanizma>
      </div>
    </div>
  )
}

export default function AfetBolgesi() {
  const [tehlike, setTehlike] = useState(75)
  const [maruziyet, setMaruziyet] = useState(70)
  const [kirilan, setKirilan] = useState(60)
  const [hazirlik, setHazirlik] = useState(25)
  const [sira, setSira] = useState([])
  const risk = useMemo(
    () => riskPuani({ tehlike, maruziyet, kirilganlik: kirilan, hazirlik }),
    [tehlike, maruziyet, kirilan, hazirlik],
  )
  const seviye = risk > 55 ? 'çok yüksek' : risk > 30 ? 'yüksek' : risk > 12 ? 'orta' : 'düşük'

  return (
    <div className="ca-bolge">
      <BolgeBasligi
        bolge="afet"
        aciklama="Tehlikeyi afetten ayır; maruziyet, kırılganlık ve hazırlık üzerinden azaltılabilir riski hesapla."
        gorselSrc={RISK_GORSELI}
        gorselAlt="Aynı fay tehlikesinde solda kırılgan ve hasarlı, sağda hazırlıklı ve dirençli iki yerleşimi karşılaştıran havza"
      />

      <ModulKabugu
        id="risk-katmanlari"
        bolge="afet"
        baslik="Risk katmanları laboratuvarı"
        aciklama="Aynı tehlikede yerleşim ve hazırlığı değiştir; afet sonucunun neden toplumsal olduğunu gözle."
        yanilgiId="tehlike-afet"
        modelNotu={MODEL_NOTU}
        tahmin={{ soru: 'Şiddetli deprem tehlikesi olan ama yapılaşma bulunmayan alanda afet kaybı nasıldır?', secenekler: ['Maruziyet düşükse sınırlı olabilir', 'Her zaman en yüksektir', 'Hazırlıktan bağımsızdır'] }}
        kontrol={{ soru: 'Afet riskini azaltmada hangisi doğrudan etkilidir?', secenekler: ['Kırılgan yapıları güçlendirmek ve hazırlığı artırmak', 'Tehlikenin adını değiştirmek', 'Boylamı değiştirmek'], cevap: 0, aciklama: 'Tehlike her zaman engellenemese de maruziyet, kırılganlık ve hazırlık yönetilebilir.' }}
        transfer={{ soru: 'Aynı sel tehlikesindeki iki mahalleden hangisinin riski daha düşüktür?', secenekler: ['Taşkın alanında plansız olan', 'Erken uyarı, geçirgen yüzey ve tahliye planı olan', 'Nüfusu daha yoğun olan'], cevap: 1, aciklama: 'Hazırlık ve risk azaltma önlemleri beklenen kaybı düşürür.' }}
      >
        {({ kanitla }) => (
          <div className="ca-sim-grid ca-risk-grid">
            <div className="ca-kontrol-panel">
              <Kaydirici etiket="Tehlike" deger={tehlike} min={0} max={100} onChange={(deger) => { setTehlike(deger); kanitla() }} />
              <Kaydirici etiket="Maruziyet" deger={maruziyet} min={0} max={100} onChange={(deger) => { setMaruziyet(deger); kanitla() }} />
              <Kaydirici etiket="Kırılganlık" deger={kirilan} min={0} max={100} onChange={(deger) => { setKirilan(deger); kanitla() }} />
              <Kaydirici etiket="Hazırlık" deger={hazirlik} min={0} max={100} onChange={(deger) => { setHazirlik(deger); kanitla() }} />
              <Olcumler degerler={[{ etiket: 'Risk puanı', deger: risk, birim: '/100', vurgu: true }, { etiket: 'Risk düzeyi', deger: seviye }]} />
              <Mekanizma tur={risk > 55 ? 'uyari' : 'olumlu'}>
                {risk > 55
                  ? 'Beklenen kayıp yüksek. Yapı güvenliği, arazi kullanımı ve hazırlık birlikte güçlendirilmeli.'
                  : 'Hazırlık ve düşük kırılganlık, tehlikeyi ortadan kaldırmadan riski azaltıyor.'}
              </Mekanizma>
            </div>
            <RiskSahnesi
              tehlike={tehlike}
              maruziyet={maruziyet}
              kirilganlik={kirilan}
              hazirlik={hazirlik}
              risk={risk}
              seviye={seviye}
            />
          </div>
        )}
      </ModulKabugu>

      <ModulKabugu
        id="afet-dongusu"
        bolge="afet"
        baslik="Afet yönetimi döngüsü"
        aciklama="Müdahaleyi tek adım sanma; risk azaltmadan iyileştirmeye kesintisiz yönetim zinciri kur."
        yanilgiId="tehlike-afet"
        modelNotu={MODEL_NOTU}
        tahmin={{ soru: 'Afet yönetimi ne zaman başlamalıdır?', secenekler: ['Afetten önce risk azaltmayla', 'Yalnız olay anında', 'Hasarlar bittikten yıllar sonra'] }}
        kontrol={{ soru: 'Dayanıksız okul binalarını güçlendirmek hangi evrededir?', secenekler: ['Risk azaltma', 'Müdahale', 'Yalnız iyileştirme'], cevap: 0, aciklama: 'Olay öncesi yapısal güçlendirme beklenen kaybı azaltır.' }}
        transfer={{ soru: 'Afetten sonra aynı riskli alana aynı biçimde yapı yapmak hangi ilkeye aykırıdır?', secenekler: ['Daha iyi yeniden inşa etme', 'Yerel saat', 'Harita ölçeği'], cevap: 0, aciklama: 'İyileştirme, eski kırılganlığı yeniden üretmek yerine gelecekteki riski azaltmalıdır.' }}
      >
        {({ kanitla }) => <AfetDongusuSahnesi sira={sira} setSira={setSira} kanitla={kanitla} />}
      </ModulKabugu>
    </div>
  )
}
