import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/doga-ve-kimya'

function detail(name, title, alt, note, extra = {}) {
  return {
    src: `${ROOT}/details/${name}.jpg`,
    srcSet: `${ROOT}/details/${name}-480.jpg 480w, ${ROOT}/details/${name}.jpg 768w`,
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

function makeMarkers(entries) {
  const anchors = [
    { x: 65, y: 82, targetX: 380, targetY: 280 },
    { x: 845, y: 82, targetX: 1160, targetY: 280 },
    { x: 65, y: 944, targetX: 380, targetY: 744 },
    { x: 845, y: 944, targetX: 1160, targetY: 744 },
  ]
  return entries.map(([key, title, width = 280], index) => ({ key, title, width, ...anchors[index] }))
}

function Badges({ activeRegion, entries }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      {entries.map(({ key, x, y, label, color = '#287d86', width = 285 }) => (
        <g key={key} opacity={opacity(key)}>
          <rect x={x - width / 2} y={y - 38} width={width} height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={color} strokeWidth="3" />
          <text x={x} y={y + 13} textAnchor="middle" fill={color} fontSize="34" fontWeight="900">{label}</text>
        </g>
      ))}
    </>
  )
}

const waterLifeRegions = [
  {
    key: 'cozucu', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('su-cozucu', 'Çözücü ve tepkime ortamı', 'Su moleküllerinin iyon ve polar besin türlerini çevrelediği hücresel yakın plan.', 'Su, kısmi yüklü uçlarıyla iyonları ve birçok polar molekülü çevreler. Dağılan türler aynı sulu ortamda hareket edebilir ve hücresel tepkimelere katılabilir.', { formula: 'iyon / polar tür + H₂O', formulaSub: 'uygun yeni etkileşimler' }),
  },
  {
    key: 'tasima', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('tasima', 'Canlılarda taşıma ortamı', 'Kan damarı ve bitki ksileminde çözünmüş taneciklerin taşınmasını karşılaştıran yakın plan.', 'Kan plazması besin, iyon, gaz ve atıkların; bitki öz suyu ise su ve minerallerin taşınmasına ortam sağlar. Taşınan türler suyun içinde çözünmüş veya dağılmış olabilir.'),
  },
  {
    key: 'isi', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('isi-dengesi', 'Isı dengesi ve buharlaşma', 'Terin deriden buharlaşması ile büyük bir su kütlesinin sıcaklık tamponunu gösteren yakın plan.', 'Su sıcaklığını değiştirmek için görece çok enerji gerekir; geniş su kütleleri sıcaklık değişimini sınırlar. Ter buharlaşırken enerjiyi deriden alır ve serinleme sağlar.'),
  },
  {
    key: 'habitat', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('habitat', 'Su ekosistemi ve yüzen buz', 'Yüzeydeki buz tabakasının altında sıvı kalan tatlı su ekosisteminin yakın planı.', 'Buz sıvı sudan daha düşük yoğunluklu olduğu için yüzer. Yüzeyde oluşan tabaka alttaki suyu yalıtabilir; gölün tamamının hızla donmasını zorlaştırır.'),
  },
]

export function WaterLifeSystem({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/su-yasam.jpg`}
      srcSet={`${ROOT}/su-yasam-900.jpg 900w, ${ROOT}/su-yasam.jpg 1536w`}
      alt="Suyun çözücü, taşıyıcı, ısı dengeleyici ve habitat rollerini gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={waterLifeRegions}
      markers={makeMarkers([
        ['cozucu', 'Çözücü ortam', 290], ['tasima', 'Taşıma', 225], ['isi', 'Isı dengesi', 275], ['habitat', 'Yaşam alanı', 275],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'cozucu', x: 385, y: 405, label: 'çöz · buluştur', color: '#514080', width: 310 },
        { key: 'tasima', x: 1150, y: 405, label: 'taşı', color: '#a34c38', width: 210 },
        { key: 'isi', x: 385, y: 650, label: 'enerji tamponu', color: '#2563a8', width: 320 },
        { key: 'habitat', x: 1150, y: 650, label: 'buz yüzer', color: '#287d86', width: 265 },
      ]} />
    </InteractiveIllustration>
  )
}

const sourceRegions = [
  {
    key: 'kaynak', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('dogal-kaynak', 'Havza, yüzey suyu ve yer altı suyu', 'Yağışın akarsu, baraj ve akiferi beslediği havza kesiti.', 'Yağışın bir bölümü yüzey akışıyla akarsu ve göllere, bir bölümü toprağa sızarak yer altı suyuna ulaşır. Çekim yenilenme hızını aşarsa kaynak seviyesi düşebilir.'),
  },
  {
    key: 'kullanim', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('kullanim', 'Ortak havzada su kullanımı', 'Yerleşim, tarım ve sanayinin aynı su havzasından yararlandığını gösteren yakın plan.', 'Ev, tarım ve sanayi aynı su sistemine bağlıdır. Bir kullanıcının aşırı çekimi veya kirletici deşarjı aşağı havzadaki kullanıcıları ve ekosistemi etkileyebilir.'),
  },
  {
    key: 'aritma', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('aritma', 'Atık su arıtımı', 'Çöktürme, biyolojik havuz ve yapay sulak alan aşamalarını gösteren yakın plan.', 'Kirleticinin türüne göre fiziksel ayırma, biyolojik parçalama ve kimyasal işlemler birlikte gerekebilir. Arıtma enerji ve maliyet ister; her kirletici aynı kolaylıkta uzaklaştırılmaz.'),
  },
  {
    key: 'tasarruf', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('tasarruf', 'Tasarruf ve güvenli yeniden kullanım', 'Kaçak onarımı, verimli armatür, damla sulama ve ayrı gri su hattı yakın planı.', 'Kaçağı onarmak doğrudan kaybı önler; verimli ekipman aynı işi daha az suyla yapar. Gri su yalnız kalite gereksinimi uygun kullanımda ve hijyenik hat ayrımıyla değerlendirilir.'),
  },
]

export function WaterResourceProtection({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/su-kaynaklari.jpg`}
      srcSet={`${ROOT}/su-kaynaklari-900.jpg 900w, ${ROOT}/su-kaynaklari.jpg 1536w`}
      alt="Su kaynağı, kullanım, arıtma ve tasarruf halkalarını gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={sourceRegions}
      markers={makeMarkers([
        ['kaynak', 'Doğal kaynak', 285], ['kullanim', 'Kullanım', 235], ['aritma', 'Arıtma', 220], ['tasarruf', 'Tasarruf', 235],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kaynak', x: 385, y: 405, label: 'yenilenme hızı', color: '#2563a8', width: 320 },
        { key: 'kullanim', x: 1150, y: 405, label: 'ortak havza', color: '#a66a21', width: 275 },
        { key: 'aritma', x: 385, y: 650, label: 'enerji + maliyet', color: '#514080', width: 320 },
        { key: 'tasarruf', x: 1150, y: 650, label: 'önce kaybı azalt', color: '#287d86', width: 345 },
      ]} />
    </InteractiveIllustration>
  )
}

const hardnessRegions = [
  {
    key: 'mineraller', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('mineral-iyonlari', 'Sertliğin mineral kaynağı', 'Kireç taşı gözeneklerinden suya geçen iki farklı mineral iyon türünün yakın planı.', 'Su kayaçlardan geçerken başta Ca²⁺ ve Mg²⁺ olmak üzere çözünmüş iyonlar kazanabilir. Bu iyonların derişimi yükseldikçe su sertliği genellikle artar.', { formula: 'Ca²⁺ + Mg²⁺', formulaSub: 'başlıca sertlik iyonları' }),
  },
  {
    key: 'sabun', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('sabun-kopuk', 'Sabun tortusu ve köpürme', 'Sertlik iyonları çevresinde oluşan sabun tortusu ile kararlı köpüğü karşılaştıran yakın plan.', 'Sertlik iyonları sabun anyonlarıyla suda az çözünen tortu oluşturabilir. Sabunun bir bölümü temizlik yerine çökelmeye harcanır; köpürmek için daha fazla sabun gerekir.'),
  },
  {
    key: 'kirec', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('kirec', 'Isıtıcı ve boruda kireçlenme', 'Kettle rezistansı ve boru iç yüzeyindeki mineral tabakanın yakın planı.', 'Isıtma veya buharlaşma mineral çökelmesini kolaylaştırabilir. Oluşan tabaka boru kesitini daraltır ve ısıtıcı yüzeyinde enerji aktarımını zorlaştırır.'),
  },
  {
    key: 'yumusatma', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('yumusatma', 'İyon değişimiyle yumuşatma', 'Reçine taneciklerinin sertlik iyonlarını tutup başka iyonları suya verdiği yakın plan.', 'İyon değiştirici reçine Ca²⁺ ve Mg²⁺ iyonlarını seçici olarak tutarken başka iyonları suya verir. Yumuşatma, bütün çözünmüş maddeleri uzaklaştırıp saf su üretmek değildir.'),
  },
]

export function WaterHardnessMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/sert-yumusak-su.jpg`}
      srcSet={`${ROOT}/sert-yumusak-su-900.jpg 900w, ${ROOT}/sert-yumusak-su.jpg 1536w`}
      alt="Su sertliğinin mineral kaynağı, köpük, kireç ve yumuşatma etkilerini gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={hardnessRegions}
      markers={makeMarkers([
        ['mineraller', 'Mineral iyonları', 315], ['sabun', 'Sabun · köpük', 300], ['kirec', 'Kireç tabakası', 300], ['yumusatma', 'Yumuşatma', 260],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'mineraller', x: 385, y: 405, label: 'Ca²⁺ · Mg²⁺', color: '#514080', width: 275 },
        { key: 'sabun', x: 1150, y: 405, label: 'tortu → az köpük', color: '#2563a8', width: 330 },
        { key: 'kirec', x: 385, y: 650, label: 'ısı aktarımı zor', color: '#a66a21', width: 320 },
        { key: 'yumusatma', x: 1150, y: 650, label: 'iyon değişimi', color: '#287d86', width: 295 },
      ]} />
    </InteractiveIllustration>
  )
}

const pollutantRegions = [
  {
    key: 'hava', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('hava-kirleticileri', 'Hava emisyonu ve atmosferde taşınma', 'Taşıt ve endüstri emisyonlarının nemli bulutla etkileşip manzaraya çökelmesini gösteren yakın plan.', 'Yanma kaynaklı NOₓ, SOₓ ve CO₂ aynı bacadan çıkabilse de aynı etkiyi oluşturmaz. Rüzgâr taşır; bazı türler atmosferde dönüşür ve yağışla başka ortama döner.'),
  },
  {
    key: 'su', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('su-kirleticileri', 'Suya ulaşan farklı kirleticiler', 'Plastik, deterjanlı evsel atık su ve endüstriyel organik sıvının ayrı kaynaklardan nehre girişini gösteren yakın plan.', 'Plastik fiziksel ve kalıcı parçacık sorunu; deterjan yüzey aktif madde ve besin yükü; yağ–çözücü ise film, oksijen dengesi veya toksisite sorunu oluşturabilir. Tek çözüm hepsine uymaz.'),
  },
  {
    key: 'toprak', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('toprak-kirleticileri', 'Pil ve ağır metal sızıntısı', 'Toprakta aşınan pil çevresindeki kalıcı metal parçacıkları ve yer altı suyuna sızıntı yakın planı.', 'Bazı metaller parçalanarak yok olmaz; toprakta kalabilir, sızıntıyla yer altı suyuna veya canlı dokusuna geçebilir. Atık pil bu yüzden ayrı toplanır.'),
  },
  {
    key: 'gecis', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('ortamlar-arasi', 'Önleme, tutma ve ekosistemi koruma', 'Kirleticiyi sulak alana ulaşmadan tutan yeşil altyapı ve sağlıklı canlı topluluğu yakın planı.', 'En etkili çözüm kaynağı azaltmaktır. Kaçınılamayan yüzey akışı uygun tutma–arıtma yapılarıyla kesilebilir; izleme, kirleticinin suya ve besin ağına ulaşmasını erken gösterir.'),
  },
]

export function PollutantPathwayMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/cevre-kirleticileri.jpg`}
      srcSet={`${ROOT}/cevre-kirleticileri-900.jpg 900w, ${ROOT}/cevre-kirleticileri.jpg 1536w`}
      alt="Hava, su, toprak kirleticileri ve ortamlar arası taşınmayı gösteren bilimsel çevre kimyası levhası."
      activeRegion={activeRegion}
      regions={pollutantRegions}
      markers={makeMarkers([
        ['hava', 'Hava', 205], ['su', 'Su', 195], ['toprak', 'Toprak', 225], ['gecis', 'Ortamlar arası', 310],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'hava', x: 385, y: 405, label: 'emisyon', color: '#6f5967', width: 240 },
        { key: 'su', x: 1150, y: 405, label: 'deşarj + akış', color: '#2563a8', width: 285 },
        { key: 'toprak', x: 385, y: 650, label: 'birikim + sızıntı', color: '#a66a21', width: 335 },
        { key: 'gecis', x: 1150, y: 650, label: 'önle → tut → arıt', color: '#287d86', width: 345 },
      ]} />
    </InteractiveIllustration>
  )
}
