import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/kimyasal-turler-arasi-etkilesimler'

function detail(name, title, alt, note, extra = {}) {
  return {
    src: `${ROOT}/details/${name}.jpg`,
    srcSet: `${ROOT}/details/${name}-480.jpg 480w, ${ROOT}/details/${name}.jpg 620w`,
    title,
    alt,
    note,
    ...extra,
  }
}

const QUADS = {
  tl: { x: 0, y: 0, width: 768, height: 512 },
  tr: { x: 768, y: 0, width: 768, height: 512 },
  bl: { x: 0, y: 512, width: 768, height: 512 },
  br: { x: 768, y: 512, width: 768, height: 512 },
}

const ZOOMS = {
  tl: { x: 25, y: 25, scale: 1.28 },
  tr: { x: 75, y: 25, scale: 1.28 },
  bl: { x: 25, y: 75, scale: 1.28 },
  br: { x: 75, y: 75, scale: 1.28 },
}

const speciesRegions = [
  {
    key: 'atom', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('atom', 'Atom', 'Nötr bir atomun çekirdeğini ve elektron bulutunu gösteren yakın plan.', 'Atom, proton sayısına eşit elektronu bulunan nötr tek taneciktir. Soy gazlar gibi bazı elementler tek atomlu bulunabilir.'),
  },
  {
    key: 'iyon', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('iyon', 'İyon', 'Elektron bulutları farklı büyüklükte bir katyon ve anyonun yakın planı.', 'Elektron veren atom katyon olur ve genellikle küçülür; elektron alan atom anyon olur ve elektronlar arası itme arttığı için genellikle büyür.', { formula: 'q = p − e', formulaSub: 'q > 0 katyon · q < 0 anyon' }),
  },
  {
    key: 'molekul', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('molekul', 'Molekül', 'Birbirinden ayrı duran farklı geometrilerde kovalent moleküllerin yakın planı.', 'Molekül belirli sayıda atomdan oluşan ayrı kovalent birimdir. O₂ molekül ama element; H₂O hem molekül hem bileşiktir.'),
  },
  {
    key: 'orgu', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('orgu', 'Örgü yapısı', 'Alternatif iyonik kristal ile tek tür merkezlerden oluşan metal örgüyü karşılaştıran yakın plan.', 'İyonik kristal ve metal, ayrı moleküller değil bütün katı boyunca tekrarlanan örgülerdir. NaCl ifadesi bir molekülü değil en sade iyon oranını verir.'),
  },
]

const speciesMarkers = [
  { key: 'atom', title: 'Atom', x: 70, y: 80, targetX: 380, targetY: 280, width: 195 },
  { key: 'iyon', title: 'İyon', x: 850, y: 80, targetX: 1160, targetY: 280, width: 190 },
  { key: 'molekul', title: 'Molekül', x: 70, y: 945, targetX: 370, targetY: 735, width: 225 },
  { key: 'orgu', title: 'Örgü · formül birimi', x: 850, y: 945, targetX: 1160, targetY: 735, width: 345 },
]

function SpeciesOverlay({ activeRegion }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      <g opacity={opacity('atom')}><rect x="290" y="365" width="190" height="70" rx="35" fill="#fffdf7" fillOpacity=".94" stroke="#287d86" strokeWidth="3" /><text x="385" y="411" textAnchor="middle" fill="#245b67" fontSize="34" fontWeight="900">p = e</text></g>
      <g opacity={opacity('iyon')}><circle cx="1050" cy="350" r="34" fill="#2563a8" stroke="white" strokeWidth="4" /><text x="1050" y="361" textAnchor="middle" fill="white" fontSize="31" fontWeight="900">+</text><circle cx="1290" cy="350" r="34" fill="#d25d4f" stroke="white" strokeWidth="4" /><text x="1290" y="361" textAnchor="middle" fill="white" fontSize="31" fontWeight="900">−</text></g>
      <g opacity={opacity('orgu')}><rect x="1040" y="705" width="250" height="76" rx="38" fill="#fffdf7" fillOpacity=".94" stroke="#6b5aa6" strokeWidth="3" /><text x="1165" y="754" textAnchor="middle" fill="#514080" fontSize="31" fontWeight="900">oran ≠ molekül</text></g>
    </>
  )
}

export function ChemicalSpeciesMap({ activeRegion = null }) {
  return <InteractiveIllustration src={`${ROOT}/kimyasal-tur-haritasi.jpg`} srcSet={`${ROOT}/kimyasal-tur-haritasi-900.jpg 900w, ${ROOT}/kimyasal-tur-haritasi.jpg 1536w`} alt="Atom, iyon, molekül ve örgü yapısını dört sahnede karşılaştıran bilimsel kimya levhası." activeRegion={activeRegion} regions={speciesRegions} markers={speciesMarkers}><SpeciesOverlay activeRegion={activeRegion} /></InteractiveIllustration>
}

const strongRegions = [
  {
    key: 'iyon-olusumu', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('elektron-aktarimi', 'İyon oluşumu', 'Bir elektronun metalden ametale aktarılması ve zıt iyonların çekimini gösteren yakın plan.', 'Elektron aktarımı katyon ve anyonu oluşturur; iyonik bağ, aktarılan elektronun kendisi değil zıt yüklü iyonlar arasındaki elektrostatik çekimdir.'),
  },
  {
    key: 'iyonik-orgu', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('iyonik-orgu', 'İyonik kristal örgü', 'Zıt yükleri temsil eden iki tür kürenin dönüşümlü dizildiği büyük kristal.', 'Her iyon birden fazla zıt yüklü komşuyla çekilir. Bu dev yapıda tek bir molekül sınırı yoktur; formül yalnız en sade iyon oranıdır.'),
  },
  {
    key: 'kovalent', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('elektron-ortaklasma', 'Kovalent ortaklaşma', 'İki ametal çekirdeği arasında yoğunlaşan ortak elektron çiftini gösteren yakın plan.', 'Ortak elektron çifti iki çekirdek tarafından çekilir. Bir ortak çift tekli, iki ortak çift ikili, üç ortak çift üçlü kovalent bağ oluşturur.'),
  },
  {
    key: 'metalik', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('elektron-denizi', 'Metalik elektron denizi', 'Metal merkezleri arasında hareket eden delokalize elektronları ve katman kaymasını gösteren yakın plan.', 'Delokalize elektronlar elektrik ve ısı taşır. Yönsüz çekim, metal katmanları kayarken de sürer; bu nedenle metal tel ve levha hâline getirilebilir.'),
  },
]

const strongMarkers = [
  { key: 'iyon-olusumu', title: 'Elektron aktarımı', x: 70, y: 80, targetX: 375, targetY: 280, width: 325 },
  { key: 'iyonik-orgu', title: 'İyonik örgü', x: 850, y: 80, targetX: 1160, targetY: 280, width: 270 },
  { key: 'kovalent', title: 'Ortak elektron çifti', x: 70, y: 945, targetX: 365, targetY: 735, width: 330 },
  { key: 'metalik', title: 'Elektron denizi', x: 850, y: 945, targetX: 1160, targetY: 735, width: 285 },
]

function StrongOverlay({ activeRegion }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      <g opacity={opacity('iyon-olusumu')}><text x="245" y="410" textAnchor="middle" fill="#9b432f" fontSize="45" fontWeight="900">M⁺</text><text x="535" y="410" textAnchor="middle" fill="#246c78" fontSize="45" fontWeight="900">X⁻</text></g>
      <g opacity={opacity('kovalent')}><rect x="270" y="700" width="225" height="84" rx="42" fill="#fffdf7" fillOpacity=".92" stroke="#6d56a5" strokeWidth="3" /><text x="382" y="755" textAnchor="middle" fill="#514080" fontSize="38" fontWeight="900">A : B</text></g>
      <g opacity={opacity('metalik')}><rect x="1020" y="700" width="290" height="84" rx="42" fill="#fffdf7" fillOpacity=".92" stroke="#b67924" strokeWidth="3" /><text x="1165" y="755" textAnchor="middle" fill="#865817" fontSize="35" fontWeight="900">Mⁿ⁺ + e⁻ denizi</text></g>
    </>
  )
}

export function StrongInteractionMechanisms({ activeRegion = null }) {
  return <InteractiveIllustration src={`${ROOT}/guclu-etkilesimler.jpg`} srcSet={`${ROOT}/guclu-etkilesimler-900.jpg 900w, ${ROOT}/guclu-etkilesimler.jpg 1536w`} alt="İyon oluşumu, iyonik kristal, kovalent ortaklaşma ve metalik elektron denizini gösteren dört sahneli bilimsel levha." activeRegion={activeRegion} regions={strongRegions} markers={strongMarkers}><StrongOverlay activeRegion={activeRegion} /></InteractiveIllustration>
}

const polarityRegions = [
  {
    key: 'lewis', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('lewis', 'Lewis sembolü', 'Bir element sembolü çevresinde değerlik elektronları için ayrılmış sekiz konum.', 'Lewis sembolü yalnız değerlik elektronlarını gösterir. Noktalar dört yana önce tek tek, sonra eşleştirilerek yerleştirilir.', { formula: '·· X ··', formulaSub: 'Değerlik elektronu muhasebesi' }),
  },
  {
    key: 'polar-bag', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('polar-bag', 'Polar kovalent bağ', 'Heteronükleer bağda elektron bulutunun bir atoma daha fazla çekildiğini gösteren yakın plan.', 'Daha elektronegatif atom ortak elektron çiftini daha güçlü çeker ve kısmi negatif, diğer uç kısmi pozitif olur. Elektron tamamen aktarılmadığı için yükler tam değil kısmidir.', { formula: 'δ⁺A—Bδ⁻', formulaSub: 'Bağ dipolü daha elektronegatif uca' }),
  },
  {
    key: 'simetri', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('simetri-iptal', 'Simetri ve dipol iptali', 'Doğrusal simetrik üç atomlu molekülde eşit zıt bağ etkilerini gösteren yakın plan.', 'CO₂’de C=O bağları polar olsa da molekül doğrusal ve simetriktir. Eşit zıt dipoller iptal olur; net dipol sıfır ve molekül apolardır.', { formula: 'Oδ⁻ ← Cδ⁺ → Oδ⁻', formulaSub: 'μₙₑₜ = 0' }),
  },
  {
    key: 'kirik', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('kirik-geometri', 'Kırık geometri ve net dipol', 'Kırık geometrili su benzeri molekülde bağ etkilerinin iptal olmadığını gösteren yakın plan.', 'H₂O’da oksijenin yalnız elektron çiftleri kırık geometri oluşturur. O–H bağ dipolleri zıt olmadığı için net dipol oksijen yönünde kalır.', { formula: 'Hδ⁺ → Oδ⁻ ← δ⁺H', formulaSub: 'μₙₑₜ ≠ 0' }),
  },
]

const polarityMarkers = [
  { key: 'lewis', title: 'Lewis sembolü', x: 70, y: 80, targetX: 380, targetY: 280, width: 285 },
  { key: 'polar-bag', title: 'Polar bağ', x: 850, y: 80, targetX: 1160, targetY: 280, width: 235 },
  { key: 'simetri', title: 'Simetri · iptal', x: 70, y: 945, targetX: 370, targetY: 735, width: 275 },
  { key: 'kirik', title: 'Kırık geometri', x: 850, y: 945, targetX: 1160, targetY: 735, width: 285 },
]

function PolarityOverlay({ activeRegion }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      <g opacity={opacity('lewis')}><rect x="305" y="190" width="165" height="165" rx="28" fill="#fffdf7" fillOpacity=".92" stroke="#287d86" strokeWidth="3" /><text x="387" y="300" textAnchor="middle" fill="#235b67" fontSize="82" fontWeight="900">X</text>{[[387,160],[500,215],[500,335],[387,390],[275,335],[275,215]].map(([x,y],i)=><circle key={i} cx={x} cy={y} r="12" fill="#514080" />)}</g>
      <g opacity={opacity('polar-bag')}><text x="1010" y="320" fill="#a34c38" fontSize="45" fontWeight="900">δ⁺</text><text x="1280" y="320" fill="#2563a8" fontSize="45" fontWeight="900">δ⁻</text><path d="M1050 365 H1260" stroke="#514080" strokeWidth="8" strokeLinecap="round" /></g>
      <g opacity={opacity('simetri')}><text x="380" y="820" textAnchor="middle" fill="#514080" fontSize="48" fontWeight="900">μₙₑₜ = 0</text></g>
      <g opacity={opacity('kirik')}><text x="1155" y="820" textAnchor="middle" fill="#a34c38" fontSize="48" fontWeight="900">μₙₑₜ ≠ 0</text></g>
    </>
  )
}

export function LewisPolarityMap({ activeRegion = null }) {
  return <InteractiveIllustration src={`${ROOT}/lewis-polarlik.jpg`} srcSet={`${ROOT}/lewis-polarlik-900.jpg 900w, ${ROOT}/lewis-polarlik.jpg 1536w`} alt="Lewis sembolü, polar bağ, simetrik dipol iptali ve kırık molekül geometrisini gösteren bilimsel levha." activeRegion={activeRegion} regions={polarityRegions} markers={polarityMarkers}><PolarityOverlay activeRegion={activeRegion} /></InteractiveIllustration>
}

const weakRegions = [
  {
    key: 'london', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('london', 'London kuvvetleri', 'İki apolar tanecikte anlık ve indüklenmiş dipol oluşumunu gösteren yakın plan.', 'Elektron bulutu anlık olarak dengesizleşir, komşu bulutu da kutuplaştırır. London bütün türlerde vardır; elektron sayısı ve polarlaşabilirlik arttıkça genellikle güçlenir.'),
  },
  {
    key: 'dipol-dipol', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('dipol-dipol', 'Dipol–dipol etkileşimi', 'Polar moleküllerin zıt kısmi yükleriyle yönlendiğini gösteren yakın plan.', 'Kalıcı dipollü moleküller kısmi pozitif ve negatif uçları yaklaşacak biçimde yönlenir. HCl molekülleri arasındaki ayırt edici çekim budur.'),
  },
  {
    key: 'iyon-dipol', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('iyon-dipol', 'İyon–dipol etkileşimi', 'Merkezdeki iyonu uygun uçlarıyla saran polar su benzeri moleküllerin yakın planı.', 'Katyonu polar molekülün kısmi negatif, anyonu kısmi pozitif ucu sarar. Bu hidratasyon, iyonik maddelerin suda dağılabilmesini açıklar.'),
  },
  {
    key: 'hidrojen', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('hidrojen-bagi', 'Hidrojen bağı', 'Su benzeri moleküller arasında hafif kesikli köprüler ve sıvı birlikteliği gösteren yakın plan.', 'H doğrudan F, O veya N’a bağlıysa, başka tanecikteki F/O/N yalnız çiftiyle hidrojen bağı kurabilir. Bu çekim kaynama noktasını belirgin yükseltir.'),
  },
]

const weakMarkers = [
  { key: 'london', title: 'London', x: 70, y: 80, targetX: 380, targetY: 280, width: 220 },
  { key: 'dipol-dipol', title: 'Dipol–dipol', x: 850, y: 80, targetX: 1160, targetY: 280, width: 265 },
  { key: 'iyon-dipol', title: 'İyon–dipol', x: 70, y: 945, targetX: 370, targetY: 735, width: 255 },
  { key: 'hidrojen', title: 'Hidrojen bağı', x: 850, y: 945, targetX: 1160, targetY: 735, width: 285 },
]

function WeakOverlay({ activeRegion }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  const badge = (key, x, y, label, color) => <g opacity={opacity(key)}><rect x={x-100} y={y-38} width="200" height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={color} strokeWidth="3" /><text x={x} y={y+13} textAnchor="middle" fill={color} fontSize="34" fontWeight="900">{label}</text></g>
  return <>{badge('london',380,390,'anlık δ','#514080')}{badge('dipol-dipol',1160,390,'δ⁺ ··· δ⁻','#a34c38')}{badge('iyon-dipol',380,650,'iyon ··· δ','#2563a8')}{badge('hidrojen',1160,650,'F/O/N–H','#287d86')}</>
}

export function WeakInteractionMap({ activeRegion = null }) {
  return <InteractiveIllustration src={`${ROOT}/zayif-etkilesimler.jpg`} srcSet={`${ROOT}/zayif-etkilesimler-900.jpg 900w, ${ROOT}/zayif-etkilesimler.jpg 1536w`} alt="London, dipol-dipol, iyon-dipol ve hidrojen bağını dört sahnede gösteren bilimsel kimya levhası." activeRegion={activeRegion} regions={weakRegions} markers={weakMarkers}><WeakOverlay activeRegion={activeRegion} /></InteractiveIllustration>
}
