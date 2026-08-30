import { useState } from 'react'
import { Filter, GitBranch, MapPinned, Minus, Network, Plus } from 'lucide-react'
import { E } from '../../../data/biyoloji/etkilesimler.js'
import BiyolojiModulKabugu from '../ortak/BiyolojiModulKabugu.jsx'
import { SecimSeridi } from '../ortak/Kontroller.jsx'

const DOMAIN = {
  Bacteria: ['Peptidoglikan hücre duvarı', 'Halka DNA', 'Prokaryot'],
  Archaea: ['Peptidoglikan yok', 'Halka DNA', 'Prokaryot'],
  Eukarya: ['Zarlı çekirdek', 'Zarlı organeller', 'Ökaryot'],
}

export function UcDomainAgaci() {
  const [acik, setAcik] = useState(['Eukarya'])
  const [zoom, setZoom] = useState(1)
  const degistir = (x) => setAcik((a) => a.includes(x) ? a.filter((y) => y !== x) : [...a, x])
  return <BiyolojiModulKabugu id={E.CANLILIK_AGACI} bolge="siniflandirma" baslik="Genişletilebilir üç-domain canlılık ağacı" soru="Görünüş benzerliği ile moleküler kanıt çatışırsa modern sınıflandırma hangisini neden öne çıkarır?" tahminler={['Homolog yapı ve moleküler benzerlik ortak ata için daha güçlü kanıttır.', 'Dış görünüş her zaman akrabalığı kesinleştirir.']} aciklama="Benzer çevreler benzer görünüşe yol açabilir; kalıtsal/moleküler benzerlik ortak ata ilişkisini daha doğrudan sınar." yanilgi="Analog benzerliği homolog kanıt sanmak yakınsak evrimi akrabalıkla karıştırır." gorevTamam={acik.length === 3} kontrol={{ soru: 'Arkeler ile bakterileri ayıran kanıtlardan biri hangisidir?', secenekler: ['Hücre duvarı ve zar kimyası', 'İkisinde de DNA bulunması', 'İkisinin de mikroskobik olması'], dogru: 0, ipucu: 'Ortak özellik değil, ayırt edici moleküler özelliği ara.', cozum: 'İki domain düğümünü açıp duvar özelliklerini karşılaştır.' }} modelVarsayimi="Ağaç TYT düzeyinde üç domain ve ana ökaryot gruplarıyla sınırlandırılmıştır.">
    <div className="ba-panel-bas"><span><Network/> Canlılık ağacı</span><span className={`ba-rozet ${acik.length===3?'ba-rozet-olumlu':'ba-rozet-sonuk'}`}>{acik.length}/3 domain açık</span></div><div className="ba-agac-lab">
      <div className="ba-agac-arac"><button onClick={() => setZoom((z) => Math.max(.8, z - .1))} aria-label="Uzaklaştır"><Minus /></button><span>{Math.round(zoom * 100)}%</span><button onClick={() => setZoom((z) => Math.min(1.3, z + .1))} aria-label="Yaklaştır"><Plus /></button></div>
      <svg viewBox={`${(1 - zoom) * 360} ${(1 - zoom) * 160} ${720 / zoom} ${350 / zoom}`} role="img" aria-label="Üç domain ve ortak ata ağacı">
        <path className="dal" d="M70 175H180M180 175V55M180 175V295M180 55H300M180 175H300M180 295H300" />
        <g className="ata" transform="translate(70 175)"><circle r="38" /><text y="5" textAnchor="middle">Ortak ata</text></g>
        {Object.keys(DOMAIN).map((d, i) => {
          const y = 55 + i * 120
          return <g key={d}>
            <g className={acik.includes(d) ? 'dugum acik' : 'dugum'} transform={`translate(340 ${y})`} onClick={() => degistir(d)}><circle r="42" /><text y="5" textAnchor="middle">{d}</text></g>
            {acik.includes(d) ? <g>{DOMAIN[d].map((x, j) => <g key={x}><line className="dal ikincil" x1="382" y1={y} x2="470" y2={y - 35 + j * 35} /><rect className="ozellik" x="470" y={y - 50 + j * 35} width="190" height="28" rx="8" /><text x="480" y={y - 31 + j * 35}>{x}</text></g>)}</g> : null}
          </g>
        })}
      </svg>
      <p className="ba-sahne-legend"><span><i className="dal" />Ortak ata bağlantısı</span><span>Düğüme tıkla: özellikleri genişlet/daralt</span></p>
    </div>
    <p className={`ba-mekanizma ${acik.length === 3 ? 'olumlu' : ''}`}><b>Mekanizma:</b> {acik.length === 3 ? 'Üç domain de açık: ayırt edici özellikler yan yana okunduğunda arke–bakteri ayrımının duvar ve zar kimyasına dayandığı görünür.' : `${acik.length}/3 domain açık. Kalan düğümleri aç; ortak ata tek başına değil, ayırt edici özelliklerle birlikte kanıt olur.`}</p>
  </BiyolojiModulKabugu>
}

const CANLILAR = [
  { ad: 'Kurt', takim: 'Etçiller', familya: 'Köpekgiller', cins: 'Canis', tur: 'Canis lupus' },
  { ad: 'Ev köpeği', takim: 'Etçiller', familya: 'Köpekgiller', cins: 'Canis', tur: 'Canis familiaris' },
  { ad: 'Kızıl tilki', takim: 'Etçiller', familya: 'Köpekgiller', cins: 'Vulpes', tur: 'Vulpes vulpes' },
  { ad: 'Boz ayı', takim: 'Etçiller', familya: 'Ayıgiller', cins: 'Ursus', tur: 'Ursus arctos' },
]

export function TaksonBasamagiMercegi() {
  const [basamak, setBasamak] = useState('takim')
  const [deger, setDeger] = useState('Etçiller')
  const secenek = [...new Set(CANLILAR.map((x) => x[basamak]))]
  const filtre = CANLILAR.filter((x) => x[basamak] === deger)
  const deg = (v) => { setBasamak(v); setDeger(CANLILAR[0][v]) }
  return <BiyolojiModulKabugu id={E.TAKSON_MERCEK} bolge="siniflandirma" baslik="Takson basamağı merceği" soru="Basamak tür düzeyine daraldıkça benzerlik ve kapsanan birey sayısı nasıl değişir?" tahminler={['Benzerlik artar, kapsanan birey/çeşit azalır.', 'İkisi de aynı anda artar.']} aciklama="Dar takson daha yakın ortak ata ve daha çok ortak özellik taşır; daha az canlıyı kapsar." yanilgi="Takson büyüklüğünü yalnız isim uzunluğuyla düşünmek hiyerarşiyi kaçırır." gorevTamam={basamak === 'tur' && filtre.length === 1} kontrol={{ soru: 'Canis cinsi hangi iki örneği birlikte filtreler?', secenekler: ['Kurt ve ev köpeği', 'Kızıl tilki ve boz ayı', 'Kurt ve boz ayı'], dogru: 0, ipucu: 'Bilimsel adın ilk sözcüğü cinstir.', cozum: 'Basamağı cins, değeri Canis yap ve görünen kartları say.' }} modelVarsayimi="Örnek kümesi dört memeliyle sınırlıdır; gerçek taksonlar çok daha fazla birey içerir.">
    <div className="ba-takson-lab"><div className="ba-panel-bas"><span><Filter /> Takson filtresi</span><span className="ba-rozet ba-rozet-sonuk">{filtre.length} örnek görünür</span></div><div className="ba-kontrol-satiri"><SecimSeridi etiket="Basamak" deger={basamak} secenekler={['takim', 'familya', 'cins', 'tur']} onChange={deg} /><label>Takson<select value={deger} onChange={(e) => setDeger(e.target.value)}>{secenek.map((x) => <option key={x}>{x}</option>)}</select></label></div><div className="ba-canli-filtre">{CANLILAR.map((x) => <article key={x.ad} className={filtre.includes(x) ? 'gorunur' : 'elenen'}><b>{x.ad}</b><i>{x.tur}</i><span>{filtre.includes(x) ? 'Filtrede' : 'Elendi'}</span></article>)}</div><p className={`ba-mekanizma ${basamak === 'tur' && filtre.length === 1 ? 'olumlu' : ''}`}><b>Mekanizma:</b> {basamak} basamağında {filtre.length} örnek kalıyor; basamak daraldıkça kapsanan birey azalır, ortak özellik yoğunluğu artar.</p></div>
  </BiyolojiModulKabugu>
}

const ADAY = [
  { ad: 'Serçe', tuy: true, kanat: true, omurga: true, fotosentez: false },
  { ad: 'Kelebek', tuy: false, kanat: true, omurga: false, fotosentez: false },
  { ad: 'Çam', tuy: false, kanat: false, omurga: false, fotosentez: true },
  { ad: 'Kertenkele', tuy: false, kanat: false, omurga: true, fotosentez: false },
]

export function OlcutSecimliAnahtar() {
  const [kalan, setKalan] = useState(ADAY)
  const [adim, setAdim] = useState([])
  const [olcut, setOlcut] = useState('kanat')
  const [deger, setDeger] = useState(true)
  const uygula = () => { setKalan((x) => x.filter((c) => c[olcut] === deger)); setAdim((a) => [...a, `${olcut}: ${deger ? 'var' : 'yok'}`]) }
  return <BiyolojiModulKabugu id={E.DALLANMIS_ANAHTAR} bolge="siniflandirma" baslik="Ölçütünü kendin seçtiğin dallanmış anahtar" soru="İyi bir ilk ölçüt adayları nasıl ayırmalıdır?" tahminler={['Gözlenebilir ve aday kümesini anlamlı biçimde bölmelidir.', 'Yalnız en sevdiğim canlıyı tarif etmelidir.']} aciklama="Ölçüt seçimi, sonraki aday kümesini gerçekten değiştirir; tek görünüş özelliği son karar olmayabilir." yanilgi="Önceden ezberlenmiş sırayı tek doğru anahtar sanmak farklı geçerli anahtarları reddeder." gorevTamam={kalan.length === 1} kontrol={{ soru: 'Serçe ile kelebeği ayıran en doğrudan ölçüt hangisidir?', secenekler: ['Omurga varlığı', 'Kanat varlığı', 'Uçabilme'], dogru: 0, ipucu: 'İkisinde ortak olmayan yapısal özelliği seç.', cozum: 'Aday kartlarındaki omurga değerlerini karşılaştır.' }} modelVarsayimi="Dört canlı ve dört ikili gözlenebilir ölçüt kullanılır.">
    <div className="ba-anahtar-lab"><div className="ba-panel-bas"><span><GitBranch /> Ölçüt kurulumu</span><span className="ba-rozet ba-rozet-sonuk">{kalan.length} aday kaldı</span></div><div className="ba-kontrol-satiri"><label>Ölçüt<select value={olcut} onChange={(e) => setOlcut(e.target.value)}>{['tuy', 'kanat', 'omurga', 'fotosentez'].map((x) => <option key={x}>{x}</option>)}</select></label><SecimSeridi etiket="Değer" deger={String(deger)} secenekler={[{ value: 'true', label: 'Var' }, { value: 'false', label: 'Yok' }]} onChange={(v) => setDeger(v === 'true')} /><button className="ba-ana-dugme" onClick={uygula}>Ölçütü uygula</button><button onClick={() => { setKalan(ADAY); setAdim([]) }}>Sıfırla</button></div><div className="ba-canli-filtre">{ADAY.map((x) => <article key={x.ad} className={kalan.includes(x) ? 'gorunur' : 'elenen'}><b>{x.ad}</b><span>{kalan.includes(x) ? 'Aday' : 'Elendi'}</span></article>)}</div><ol>{adim.map((x, i) => <li key={i}>{x}</li>)}</ol><p className={`ba-mekanizma ${kalan.length === 1 ? 'olumlu' : ''}`}><b>Mekanizma:</b> {kalan.length === 1 ? `Tek aday kaldı: ${kalan[0].ad}. Farklı ölçüt sırası da aynı sonuca götürebilir; anahtar tek doğru sıra değildir.` : `${adim.length} ölçüt uygulandı, ${kalan.length} aday duruyor. İyi bir ölçüt kalan kümeyi gerçekten böler.`}</p></div>
  </BiyolojiModulKabugu>
}

const BOLGE = {
  marmara: { ad: 'Marmara', endemik: 18, tur: 420, ornek: 'İstanbul nazendesi' }, ege: { ad: 'Ege', endemik: 41, tur: 610, ornek: 'Datça hurması' },
  akdeniz: { ad: 'Akdeniz', endemik: 83, tur: 780, ornek: 'Kasnak meşesi' }, dogu: { ad: 'Doğu Anadolu', endemik: 56, tur: 540, ornek: 'Van ters lalesi' },
}

export function TurkiyeBiyocesitlilikHaritasi() {
  const [sec, setSec] = useState('akdeniz')
  const d = BOLGE[sec]
  return <BiyolojiModulKabugu id={E.BIYO_VERI} bolge="siniflandirma" baslik="Türkiye biyoçeşitlilik veri haritası" soru="Bir bölgede toplam tür sayısı ile endemik tür sayısı aynı bilgiyi mi verir?" tahminler={['Hayır; endemizm yalnız sınırlı dağılışlı türleri gösterir.', 'Evet; iki sayı her zaman aynıdır.']} aciklama="Toplam zenginlik çeşitliliği, endemik sayı ise coğrafi özgünlüğü vurgular." yanilgi="Çok tür bulunan her bölgenin aynı oranda endemik olacağını varsaymak iki ölçüyü karıştırır." gorevTamam={sec === 'dogu'} kontrol={{ soru: 'Endemik tür neyi anlatır?', secenekler: ['Doğal yayılışı belirli bir alanla sınırlı türü', 'Her kıtada yaşayan türü', 'Yalnız nesli tükenmiş türü'], dogru: 0, ipucu: 'Endemik sözcüğünü coğrafi yayılışla ilişkilendir.', cozum: 'Haritada bir bölge seç ve örnek türün dağılış notunu oku.' }} modelVarsayimi="Sayısal değerler eğitim amaçlı örnek veri setidir; güncel koruma kararı için resmi envanter gerekir.">
    <div className="ba-panel-bas"><span><MapPinned/> Bölge verisi</span><span className="ba-rozet ba-rozet-sonuk">{d.ad}</span></div><div className="ba-turkiye-lab"><svg viewBox="0 0 620 260" role="img" aria-label="Türkiye bölgelerinden örnek biyoçeşitlilik haritası"><path className={sec === 'marmara' ? 'secili' : ''} onClick={() => setSec('marmara')} d="M55 100l120-35 65 45-90 55-95-15z" /><path className={sec === 'ege' ? 'secili' : ''} onClick={() => setSec('ege')} d="M55 150l95 15 90-55 40 95-165 35z" /><path className={sec === 'akdeniz' ? 'secili' : ''} onClick={() => setSec('akdeniz')} d="M115 240l165-35 155 20-30 30H160z" /><path className={sec === 'dogu' ? 'secili' : ''} onClick={() => setSec('dogu')} d="M280 80l240-20 60 80-145 85-155-20z" /></svg><div className="ba-biyo-veri"><MapPinned /><b>{d.ad}</b><span>{d.tur} örnek toplam tür kaydı</span><span>{d.endemik} örnek endemik kayıt</span><strong>Örnek: {d.ornek}</strong></div></div>
    <p className="ba-mekanizma"><b>Mekanizma:</b> {d.ad} bölgesinde {d.tur} tür kaydına karşılık {d.endemik} endemik kayıt var; toplam zenginlik çeşitliliği, endemik sayı ise coğrafi özgünlüğü ölçer. İki sayı birlikte okunmalıdır.</p>
  </BiyolojiModulKabugu>
}
