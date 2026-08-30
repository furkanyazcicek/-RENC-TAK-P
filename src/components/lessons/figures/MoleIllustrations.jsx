import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/mol-kavrami'
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

function detail(name, title, alt, note, extra = {}) {
  return {
    src: ROOT + '/details/' + name + '.jpg',
    srcSet: ROOT + '/details/' + name + '-480.jpg 480w, ' + ROOT + '/details/' + name + '.jpg 768w',
    title, alt, note, ...extra,
  }
}

function markers(entries) {
  const anchors = [
    { x: 65, y: 82, targetX: 380, targetY: 280 },
    { x: 845, y: 82, targetX: 1160, targetY: 280 },
    { x: 65, y: 944, targetX: 380, targetY: 744 },
    { x: 845, y: 944, targetX: 1160, targetY: 744 },
  ]
  return entries.map(([key, title, width = 290], index) => ({ key, title, width, ...anchors[index] }))
}

function Badges({ activeRegion, entries }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      {entries.map(({ key, x, y, label, color, width }) => (
        <g key={key} opacity={opacity(key)}>
          <rect x={x - width / 2} y={y - 38} width={width} height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={color} strokeWidth="3" />
          <text x={x} y={y + 13} textAnchor="middle" fill={color} fontSize="34" fontWeight="900">{label}</text>
        </g>
      ))}
    </>
  )
}

const countingRegions = [
  { key: 'sayma', shape: QUADS.tl, zoom: ZOOMS.tl, detail: detail('sayma-birimi', 'Sayma paketinden mole', 'Düzine nesne ile dev bir kimyasal tanecik topluluğunu karşılaştıran yakın plan.', 'Düzine nasıl 12 nesneyi gösteriyorsa mol de sabit bir tanecik sayısını gösterir. Maddenin türü paket sayısını değiştirmez.', { formula: '1 mol', formulaSub: 'tanecik sayma birimi' }) },
  { key: 'avogadro', shape: QUADS.tr, zoom: ZOOMS.tr, detail: detail('avogadro', 'Avogadro sabiti', 'Tek bir mol kabında çok büyük sayıda özdeş taneciği ölçek katmanlarıyla gösteren yakın plan.', 'Avogadro sabiti mol başına tanecik sayısıdır. Tanecik sayısı mol ile doğru orantılıdır; yarım mol yarım Avogadro sayısı tanecik içerir.', { formula: 'N = n · Nₐ', formulaSub: 'tanecik sayısı' }) },
  { key: 'tanecik', shape: QUADS.bl, zoom: ZOOMS.bl, detail: detail('tanecik-kimligi', 'Atom, molekül ve formül birimi', 'Metal atomları, su molekülleri ve iyonik kristal birimlerini ayrı kaplarda gösteren yakın plan.', 'Saydığın ana taneciği doğru adlandır: metal ve soy gazda atom; moleküler maddede molekül; iyonik katıda formül birimi.') },
  { key: 'molar', shape: QUADS.br, zoom: ZOOMS.br, detail: detail('molar-kutle', 'Formülden molar kütle', 'Renkli atom kürelerinin kütle katkılarının tek bir laboratuvar terazisinde toplandığı yakın plan.', 'Molar kütle, formüldeki bütün atomların bağıl kütle katkılarının toplamıdır. Sayısal değer gram/mol birimiyle kullanılır.') },
]

export function MoleCountingBridge({ activeRegion = null }) {
  return (
    <InteractiveIllustration src={ROOT + '/mol-sayma.jpg'} srcSet={ROOT + '/mol-sayma-900.jpg 900w, ' + ROOT + '/mol-sayma.jpg 1536w'} alt="Molün sayma birimi, Avogadro sabiti, tanecik türü ve molar kütlesini gösteren bilimsel levha." activeRegion={activeRegion} regions={countingRegions} markers={markers([['sayma', 'Sayma birimi'], ['avogadro', 'Avogadro sabiti', 320], ['tanecik', 'Tanecik kimliği', 310], ['molar', 'Molar kütle', 270]])}>
      <Badges activeRegion={activeRegion} entries={[
        { key: 'sayma', x: 385, y: 405, label: 'paketle say', color: '#287d86', width: 275 },
        { key: 'avogadro', x: 1150, y: 405, label: '6,02 × 10²³', color: '#514080', width: 300 },
        { key: 'tanecik', x: 385, y: 650, label: 'neyin molü?', color: '#a34c38', width: 275 },
        { key: 'molar', x: 1150, y: 650, label: 'gram / mol', color: '#2563a8', width: 260 },
      ]} />
    </InteractiveIllustration>
  )
}

const conversionRegions = [
  { key: 'kutle', shape: QUADS.tl, zoom: ZOOMS.tl, detail: detail('kutle-mol', 'Kütle ile mol arasında', 'Gram terazisi ile mol ölçüsünü molar kütle köprüsü üzerinden bağlayan yakın plan.', 'Kütleden mole geçerken molar kütleye böl; molden kütleye geçerken molar kütleyle çarp. Birimler işlemi doğrular.', { formula: 'n = m / M', formulaSub: 'kütle → mol' }) },
  { key: 'tanecik', shape: QUADS.tr, zoom: ZOOMS.tr, detail: detail('tanecik-mol', 'Tanecik sayısı ile mol arasında', 'Tanecik kümelerinin Avogadro paketlerine ayrıldığı ölçek yakın planı.', 'Tanecikten mole geçişte Avogadro sabitine böl; molden taneciğe geçişte çarp. Sonuçtaki varlık türünü yaz.') },
  { key: 'gaz', shape: QUADS.bl, zoom: ZOOMS.bl, detail: detail('gaz-hacmi', 'Normal koşulda gaz hacmi', 'Standart sıcaklık ve basınç işaretli gaz balonunun hacim silindiriyle karşılaştırıldığı yakın plan.', 'Normal koşulda ideal davranışa yakın bir mol gaz yaklaşık 22,4 L’dir. Sıcaklık ve basınç değişirse aynı mol farklı hacim kaplar.') },
  { key: 'atom', shape: QUADS.br, zoom: ZOOMS.br, detail: detail('bilesen-atom', 'Formülün içindeki atomları sayma', 'Molekül sayısından her renk atomun alt indis kadar çoğaltıldığı moleküler yakın plan.', 'Ana tanecik sayısını ilgili alt indisle çarp. Bir mol CO₂, bir mol molekül fakat iki mol O atomu içerir.') },
]

export function MoleConversionMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration src={ROOT + '/mol-donusum.jpg'} srcSet={ROOT + '/mol-donusum-900.jpg 900w, ' + ROOT + '/mol-donusum.jpg 1536w'} alt="Kütle, tanecik sayısı, gaz hacmi ve bileşen atomlarını mol üzerinden bağlayan dönüşüm haritası." activeRegion={activeRegion} regions={conversionRegions} markers={markers([['kutle', 'Kütle ↔ mol'], ['tanecik', 'Tanecik ↔ mol', 315], ['gaz', 'Gaz hacmi ↔ mol', 335], ['atom', 'Bileşen atomu', 305]])}>
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kutle', x: 385, y: 405, label: '÷ / × M', color: '#a66a21', width: 230 },
        { key: 'tanecik', x: 1150, y: 405, label: '÷ / × Nₐ', color: '#514080', width: 250 },
        { key: 'gaz', x: 385, y: 650, label: 'NK · 22,4 L', color: '#287d86', width: 285 },
        { key: 'atom', x: 1150, y: 650, label: '× alt indis', color: '#2563a8', width: 255 },
      ]} />
    </InteractiveIllustration>
  )
}

const equationRegions = [
  { key: 'giren-urun', shape: QUADS.tl, zoom: ZOOMS.tl, detail: detail('giren-urun', 'Girenlerden ürünlere', 'Tepkime kabındaki başlangıç tanecikleri ile ürün taneciklerini okla ayıran yakın plan.', 'Okun solu girenleri, sağı ürünleri gösterir. Formüller deneysel kimliği temsil eder; denkleştirme bu kimliği değiştirmez.') },
  { key: 'envanter', shape: QUADS.tr, zoom: ZOOMS.tr, detail: detail('atom-envanteri', 'İki tarafta atom envanteri', 'Her element renginin tepkime öncesi ve sonrası ayrı sıralarda sayıldığı yakın plan.', 'Her elementin atom sayısını iki tarafta ayrı say. Bütün elementler için eşitlik kurulmadan denklem dengeli değildir.') },
  { key: 'katsayi', shape: QUADS.bl, zoom: ZOOMS.bl, detail: detail('katsayi', 'Katsayıyla denkleştirme', 'Bütün molekül gruplarının tam paketler hâlinde çoğaltıldığı, alt indislerin değişmediği yakın plan.', 'Katsayı bütün formülü çarpar; alt indis tek taneciğin kimliğidir. En küçük tam sayı katsayılarını kullan.') },
  { key: 'hal', shape: QUADS.br, zoom: ZOOMS.br, detail: detail('hal-kosul', 'Hâl sembolü ve tepkime koşulu', 'Katı, sıvı, gaz ve sulu çözelti örnekleri ile ısıtma düzeneğini gösteren yakın plan.', 'Hâl sembolleri maddenin fiziksel durumunu, okun üzerindeki işaretler koşulu belirtir. Bunlar atom sayımına katılmaz.') },
]

export function EquationBalancingAtlas({ activeRegion = null }) {
  return (
    <InteractiveIllustration src={ROOT + '/denklestirme.jpg'} srcSet={ROOT + '/denklestirme-900.jpg 900w, ' + ROOT + '/denklestirme.jpg 1536w'} alt="Kimyasal tepkime denklemini atom sayısını koruyarak denkleştirme adımlarını gösteren bilimsel levha." activeRegion={activeRegion} regions={equationRegions} markers={markers([['giren-urun', 'Giren → ürün', 285], ['envanter', 'Atom envanteri', 305], ['katsayi', 'Katsayı seçimi', 300], ['hal', 'Hâl ve koşul', 275]])}>
      <Badges activeRegion={activeRegion} entries={[
        { key: 'giren-urun', x: 385, y: 405, label: 'sol → sağ', color: '#287d86', width: 250 },
        { key: 'envanter', x: 1150, y: 405, label: 'atomları say', color: '#514080', width: 275 },
        { key: 'katsayi', x: 385, y: 650, label: 'alt indis sabit', color: '#a34c38', width: 305 },
        { key: 'hal', x: 1150, y: 650, label: 'hâl · ısı · katalizör', color: '#2563a8', width: 345 },
      ]} />
    </InteractiveIllustration>
  )
}

const stoichRegions = [
  { key: 'verilen', shape: QUADS.tl, zoom: ZOOMS.tl, detail: detail('verileni-mol', 'Verilen niceliği mole çevir', 'Kütle, tanecik ve gaz hacmi ölçülerinin ortak mol durağına aktığı yakın plan.', 'Verinin birimini tanı. Gramı M’ye, taneciği NA’ya, normal koşul gaz hacmini 22,4 L’ye bölerek mole geç.') },
  { key: 'oran', shape: QUADS.tr, zoom: ZOOMS.tr, detail: detail('katsayi-orani', 'Dengelenmiş katsayı oranı', 'Bir tepkime köprüsünde tam tanecik paketlerinin katsayı oranıyla geçtiği yakın plan.', 'İstenen maddenin molü, verilen molle dengelenmiş katsayıların oranı kullanılarak bulunur. Denklem dengeli değilse köprü yanlıştır.') },
  { key: 'istenen', shape: QUADS.bl, zoom: ZOOMS.bl, detail: detail('istenen-birim', 'Molü istenen birime dönüştür', 'Hedef mol miktarının gram, tanecik ve gaz hacmi ölçülerine dağıldığı yakın plan.', 'Katsayı köprüsünden çıkan hedef molü sorunun istediği gram, tanecik veya gaz hacmine uygun çarpanla dönüştür.') },
  { key: 'denetim', shape: QUADS.br, zoom: ZOOMS.br, detail: detail('korunum-denetimi', 'Birim ve korunum denetimi', 'Atom renkleri ve toplam kütlelerin iki kefede eşitlendiği kontrol yakın planı.', 'Birimlerin sadeleşmesini, atom sayılarını ve toplam kütleyi kontrol et. Sonucun büyüklük mertebesi başlangıç verisiyle uyumlu olmalıdır.') },
]

export function StoichiometryRoadMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration src={ROOT + '/stokiyometri.jpg'} srcSet={ROOT + '/stokiyometri-900.jpg 900w, ' + ROOT + '/stokiyometri.jpg 1536w'} alt="Kimyasal tepkime hesabında verilenden mole, katsayı oranından istenen birime giden yol haritası." activeRegion={activeRegion} regions={stoichRegions} markers={markers([['verilen', 'Verileni mole çevir', 350], ['oran', 'Katsayı oranı', 295], ['istenen', 'İstenen birime dön', 340], ['denetim', 'Sonucu denetle', 305]])}>
      <Badges activeRegion={activeRegion} entries={[
        { key: 'verilen', x: 385, y: 405, label: 'verilen → mol', color: '#a66a21', width: 300 },
        { key: 'oran', x: 1150, y: 405, label: 'katsayı köprüsü', color: '#514080', width: 325 },
        { key: 'istenen', x: 385, y: 650, label: 'mol → istenen', color: '#287d86', width: 300 },
        { key: 'denetim', x: 1150, y: 650, label: 'birim · atom · kütle', color: '#2563a8', width: 365 },
      ]} />
    </InteractiveIllustration>
  )
}
