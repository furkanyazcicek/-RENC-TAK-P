import InteractiveIllustration from './InteractiveIllustration'

const ASSET_ROOT = '/lesson-assets/atom-ve-periyodik-sistem'

function detail(name, title, alt, note, _x, _y, extra = {}) {
  return {
    src: `${ASSET_ROOT}/details/${name}.jpg`,
    srcSet: `${ASSET_ROOT}/details/${name}-480.jpg 480w, ${ASSET_ROOT}/details/${name}.jpg 620w`,
    title,
    alt,
    note,
    ...extra,
  }
}

const modelRegions = [
  {
    key: 'dalton',
    shape: { x: 0, y: 0, width: 384, height: 1024 },
    zoom: { x: 12.5, y: 52, scale: 1.28 },
    detail: detail(
      'dalton',
      'Dalton modeli',
      'Aynı elementin özdeş, farklı elementlerin farklı kürelerle temsil edildiği Dalton atom modelinin yakın görünümü.',
      'Dalton, kimyasal birleşme oranlarını içi dolu atom küreleriyle açıkladı. Model; elektronu, çekirdeği ve aynı elementin farklı nötronlu izotoplarını açıklayamaz.',
      25,
      25,
    ),
  },
  {
    key: 'thomson',
    shape: { x: 384, y: 0, width: 384, height: 1024 },
    zoom: { x: 37.5, y: 52, scale: 1.28 },
    detail: detail(
      'thomson',
      'Thomson modeli',
      'Pozitif kabul edilen küre içine dağılmış küçük elektronları gösteren Thomson atom modelinin kesiti.',
      'Katot ışınları elektronun bütün atomlarda bulunduğunu gösterdi. Thomson, toplam nötrlüğü pozitif hacim içine gömülü negatif elektronlarla açıkladı; küçük ve yoğun çekirdeği öngöremedi.',
      75,
      25,
    ),
  },
  {
    key: 'rutherford',
    shape: { x: 768, y: 0, width: 384, height: 1024 },
    zoom: { x: 62.5, y: 52, scale: 1.28 },
    detail: detail(
      'rutherford',
      'Rutherford saçılma deneyi',
      'Altın levhadan geçen alfa taneciklerinin çoğunun düz ilerlediği, az bir bölümünün saptığı yakın plan deney şeması.',
      'Çoğu taneciğin geçmesi atom hacminin büyük bölümünün boşluk olduğunu; çok az taneciğin sert sapması pozitif yük ve kütlenin çok küçük çekirdekte toplandığını gösterir.',
      25,
      75,
    ),
  },
  {
    key: 'bohr-modern',
    shape: { x: 1152, y: 0, width: 384, height: 1024 },
    zoom: { x: 87.5, y: 52, scale: 1.28 },
    detail: detail(
      'bohr',
      'Bohr enerji geçişi',
      'Elektronun yüksek enerji düzeyinden düşük düzeye inerken ışık yaymasını gösteren yakın plan.',
      'Elektron yalnız belirli enerji düzeylerinde bulunabilir. Yüksek düzeyden alçağa geçerken düzey farkı kadar enerji yayar; modern model kesin yörünge yerine bulunma olasılığını kullanır.',
      75,
      75,
      { formula: 'E₂ − E₁ = hν', formulaSub: 'Enerji farkı · yayılan/soğurulan ışık' },
    ),
  },
]

const modelMarkers = [
  { key: 'dalton', title: 'Dalton', x: 70, y: 105, targetX: 205, targetY: 410, width: 205 },
  { key: 'thomson', title: 'Thomson', x: 450, y: 105, targetX: 580, targetY: 410, width: 230 },
  { key: 'rutherford', title: 'Rutherford', x: 830, y: 105, targetX: 960, targetY: 430, width: 255 },
  { key: 'bohr-modern', title: 'Bohr → modern', x: 1210, y: 105, targetX: 1330, targetY: 430, width: 290 },
]

export function AtomModelDevelopment({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ASSET_ROOT}/atom-modelleri-gelisimi.jpg`}
      srcSet={`${ASSET_ROOT}/atom-modelleri-gelisimi-900.jpg 900w, ${ASSET_ROOT}/atom-modelleri-gelisimi.jpg 1536w`}
      alt="Dalton, Thomson, Rutherford ve Bohr-modern atom fikirlerini soldan sağa gösteren dört aşamalı bilimsel levha."
      activeRegion={activeRegion}
      regions={modelRegions}
      markers={modelMarkers}
    />
  )
}

const identityRegions = [
  {
    key: 'parcaciklar',
    shape: { x: 0, y: 0, width: 768, height: 512 },
    zoom: { x: 25, y: 25, scale: 1.3 },
    detail: detail(
      'atom-parcaciklari',
      'Proton, nötron ve elektron',
      'Çekirdekteki proton ve nötronlarla çekirdek çevresindeki elektronları karşılaştıran atom kesiti.',
      'Proton (+1) ve nötron (0) yaklaşık 1 akb kütleli olup çekirdektedir. Elektron (−1) çekirdek çevresindedir ve kütlesi TYT hesaplarında yaklaşık sıfır kabul edilir.',
      25,
      25,
    ),
  },
  {
    key: 'kunye',
    shape: { x: 768, y: 0, width: 768, height: 512 },
    zoom: { x: 75, y: 25, scale: 1.3 },
    detail: detail(
      'atom-kunyesi',
      'Atomun nüklit gösterimi',
      'Atomun kütle numarası, atom numarası ve yük konumlarını göstermek için ayrılmış boş künye kartı.',
      'Sol alttaki Z proton sayısıdır ve element kimliğini belirler. Sol üstteki A, proton ve nötron toplamıdır. Sağ üstteki yük, proton ve elektron sayılarının farkından doğar.',
      75,
      25,
      { formula: 'ᴬZXᑫ', formulaSub: 'A = p + n · Z = p · q = p − e' },
    ),
  },
  {
    key: 'iyon',
    shape: { x: 0, y: 512, width: 768, height: 512 },
    zoom: { x: 25, y: 75, scale: 1.3 },
    detail: detail(
      'iyon-olusumu',
      'İyon oluşumu',
      'Çekirdeği değişmeden bir elektron veren nötr atomun pozitif iyona dönüşmesini gösteren yakın plan.',
      'Elektron vermek proton sayısını değiştirmez; element aynı kalır. Elektron sayısı proton sayısından az olunca tür katyon, fazla olunca anyon olur.',
      25,
      75,
      { formula: 'q = p − e', formulaSub: 'e < p → katyon · e > p → anyon' },
    ),
  },
  {
    key: 'izotop',
    shape: { x: 768, y: 512, width: 768, height: 512 },
    zoom: { x: 75, y: 75, scale: 1.3 },
    detail: detail(
      'izotoplar',
      'İzotop çekirdekler',
      'Proton sayıları aynı, nötron sayıları farklı üç çekirdeği karşılaştıran bilimsel yakın plan.',
      'İzotoplarda Z aynıdır; bu yüzden aynı elementtir. Nötron ve dolayısıyla A farklıdır. Nötr izotopların elektron sayıları da aynı olur.',
      75,
      75,
      { formula: 'Z aynı · A farklı', formulaSub: 'Aynı element, farklı nötron sayısı' },
    ),
  },
]

const identityMarkers = [
  { key: 'parcaciklar', title: 'Parçacıklar', x: 70, y: 82, targetX: 340, targetY: 290, width: 255 },
  { key: 'kunye', title: 'Atom künyesi', x: 850, y: 82, targetX: 1130, targetY: 290, width: 285 },
  { key: 'iyon', title: 'İyon oluşumu', x: 70, y: 945, targetX: 350, targetY: 740, width: 280 },
  { key: 'izotop', title: 'İzotoplar', x: 850, y: 945, targetX: 1160, targetY: 740, width: 245 },
]

function IdentityOverlay({ activeRegion }) {
  const show = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      <g opacity={show('parcaciklar')} style={{ transition: 'opacity .4s ease' }}>
        <circle cx="355" cy="340" r="32" fill="#ef6b5b" stroke="#fffdf7" strokeWidth="5" />
        <text x="355" y="350" textAnchor="middle" fill="white" fontSize="29" fontWeight="900">p⁺</text>
        <circle cx="420" cy="360" r="32" fill="#187f82" stroke="#fffdf7" strokeWidth="5" />
        <text x="420" y="370" textAnchor="middle" fill="white" fontSize="29" fontWeight="900">n⁰</text>
        <circle cx="565" cy="205" r="26" fill="#2563a8" stroke="#fffdf7" strokeWidth="5" />
        <text x="565" y="214" textAnchor="middle" fill="white" fontSize="26" fontWeight="900">e⁻</text>
      </g>
      <g opacity={show('kunye')} style={{ transition: 'opacity .4s ease' }}>
        <rect x="970" y="205" width="300" height="210" rx="34" fill="#fffdf7" fillOpacity=".94" stroke="#c9a85e" strokeWidth="4" />
        <text x="1120" y="340" textAnchor="middle" fill="#263341" fontSize="112" fontWeight="900">X</text>
        <text x="1010" y="250" fill="#8a4d24" fontSize="45" fontWeight="900">A</text>
        <text x="1010" y="390" fill="#176d70" fontSize="45" fontWeight="900">Z</text>
        <text x="1220" y="250" fill="#6d47a8" fontSize="45" fontWeight="900">q</text>
      </g>
    </>
  )
}

export function AtomIdentityMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ASSET_ROOT}/atom-kimlik-haritasi.jpg`}
      srcSet={`${ASSET_ROOT}/atom-kimlik-haritasi-900.jpg 900w, ${ASSET_ROOT}/atom-kimlik-haritasi.jpg 1536w`}
      alt="Atom altı parçacıkları, nüklit gösterimini, iyon oluşumunu ve izotop çekirdekleri gösteren dört bölümlü bilimsel levha."
      activeRegion={activeRegion}
      regions={identityRegions}
      markers={identityMarkers}
    >
      <IdentityOverlay activeRegion={activeRegion} />
    </InteractiveIllustration>
  )
}

const periodicRegions = [
  {
    key: 'gruplar',
    shape: { x: 230, y: 150, width: 1080, height: 465 },
    zoom: { x: 50, y: 38, scale: 1.32 },
    detail: detail(
      'gruplar',
      'Gruplar: dikey benzerlik',
      'Dikey sütun düzeninde benzer dış elektron yapısını ve aile benzerliğini çağrıştıran atomik örnekler.',
      'Aynı gruptaki ana grup elementlerinin değerlik elektron sayıları benzerdir; bu yüzden kimyasal davranışları da benzerlik gösterir. Grup, tablodaki dikey sütundur.',
      25,
      25,
    ),
  },
  {
    key: 'periyotlar',
    shape: { x: 230, y: 150, width: 1080, height: 465 },
    zoom: { x: 50, y: 38, scale: 1.32 },
    detail: detail(
      'periyotlar',
      'Periyotlar: yatay katman düzeni',
      'Yedi yatay bantta enerji katmanı fikrini gösteren bilimsel yakın plan.',
      'Periyot, tablodaki yatay sıradır. İlk 20 elementte elektron bulunan katman sayısı periyot numarasını verir.',
      75,
      25,
    ),
  },
  {
    key: 'siniflar',
    shape: { x: 0, y: 0, width: 1536, height: 1024 },
    zoom: { x: 50, y: 54, scale: 1.16 },
    detail: detail(
      'siniflar',
      'Metal, ametal ve yarı metal',
      'Metal örgüyü, kırılgan ametal kristalini ve ara özellikli yarı metal yapıyı karşılaştıran örnekler.',
      'Metaller çoğunlukla tablonun sol ve orta bölümündedir; ametaller sağ üstte toplanır. Yarı metaller sınır basamaklarında ara özellik gösterir. Hidrojen konumuna rağmen ametaldir.',
      25,
      75,
    ),
  },
  {
    key: 'soygazlar',
    shape: { x: 1240, y: 130, width: 296, height: 650 },
    zoom: { x: 89, y: 48, scale: 1.34 },
    detail: detail(
      'soygazlar',
      'Soy gaz kararlılığı',
      'Kapalı tüplerde ışıldayan soy gazları ve birbirinden ayrı duran tanecikleri gösteren yakın plan.',
      '18. grup soy gazlarının son katmanı doludur; bu yüzden genel olarak tepkimeye girme eğilimleri düşüktür. Helyum 2 elektronla dolu ilk katmana sahip özel örnektir.',
      75,
      75,
    ),
  },
]

const periodicMarkers = [
  { key: 'gruplar', title: '18 dikey grup', x: 75, y: 95, targetX: 480, targetY: 315, width: 275 },
  { key: 'periyotlar', title: '7 yatay periyot', x: 590, y: 95, targetX: 760, targetY: 400, width: 300 },
  { key: 'siniflar', title: 'Element sınıfları', x: 75, y: 930, targetX: 670, targetY: 650, width: 315 },
  { key: 'soygazlar', title: '18. grup · soy gaz', x: 1240, y: 930, targetX: 1370, targetY: 500, width: 315, align: 'end' },
]

const FIRST_TWENTY = [
  ['H', 1, 1, 1, 'ametal'], ['He', 2, 18, 1, 'soygaz'],
  ['Li', 3, 1, 2, 'metal'], ['Be', 4, 2, 2, 'metal'], ['B', 5, 13, 2, 'yarimetal'], ['C', 6, 14, 2, 'ametal'], ['N', 7, 15, 2, 'ametal'], ['O', 8, 16, 2, 'ametal'], ['F', 9, 17, 2, 'ametal'], ['Ne', 10, 18, 2, 'soygaz'],
  ['Na', 11, 1, 3, 'metal'], ['Mg', 12, 2, 3, 'metal'], ['Al', 13, 13, 3, 'metal'], ['Si', 14, 14, 3, 'yarimetal'], ['P', 15, 15, 3, 'ametal'], ['S', 16, 16, 3, 'ametal'], ['Cl', 17, 17, 3, 'ametal'], ['Ar', 18, 18, 3, 'soygaz'],
  ['K', 19, 1, 4, 'metal'], ['Ca', 20, 2, 4, 'metal'],
]

const cellPalette = {
  metal: ['#1d7f85', '#e7fbf7'],
  ametal: ['#ba6d20', '#fff3ce'],
  yarimetal: ['#5d7d42', '#eef6dc'],
  soygaz: ['#6d4aa5', '#f2eafe'],
}

function FirstTwentyOverlay({ activeRegion }) {
  const gridX = 285
  const gridY = 200
  const cellW = 54.2
  const cellH = 56
  const opacity = activeRegion === 'siniflar' || !activeRegion ? 1 : activeRegion === 'soygazlar' ? 0.7 : 0.42

  return (
    <g opacity={opacity} style={{ transition: 'opacity .4s ease' }}>
      {FIRST_TWENTY.map(([symbol, number, group, period, family]) => {
        const x = gridX + (group - 1) * cellW
        const y = gridY + (period - 1) * cellH
        const [stroke, fill] = cellPalette[family]
        return (
          <g key={symbol}>
            <rect x={x} y={y} width="49" height="50" rx="7" fill={fill} fillOpacity=".96" stroke={stroke} strokeWidth="2.5" />
            <text x={x + 7} y={y + 13} fill={stroke} fontSize="9" fontWeight="900">{number}</text>
            <text x={x + 24.5} y={y + 37} textAnchor="middle" fill="#24323c" fontSize="24" fontWeight="900">{symbol}</text>
          </g>
        )
      })}
    </g>
  )
}

export function PeriodicSystemMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ASSET_ROOT}/periyodik-sistem-haritasi.jpg`}
      srcSet={`${ASSET_ROOT}/periyodik-sistem-haritasi-900.jpg 900w, ${ASSET_ROOT}/periyodik-sistem-haritasi.jpg 1536w`}
      alt="Periyodik tablo iskeletini metal, ametal, yarı metal ve soy gaz örnekleriyle çevreleyen bilimsel kimya atlası."
      activeRegion={activeRegion}
      regions={periodicRegions}
      markers={periodicMarkers}
    >
      <FirstTwentyOverlay activeRegion={activeRegion} />
    </InteractiveIllustration>
  )
}

const trendRegions = [
  {
    key: 'yaricap',
    shape: { x: 0, y: 0, width: 768, height: 512 },
    zoom: { x: 25, y: 25, scale: 1.28 },
    detail: detail(
      'atom-yaricapi',
      'Atom yarıçapı',
      'Katman sayısı arttıkça büyüyen, aynı katmanda çekirdek çekimi arttıkça küçülen atomları gösteren yakın plan.',
      'Aşağı indikçe yeni katman eklenir ve yarıçap büyür. Periyotta sağa gidildikçe proton sayısı artarken katman sayısı değişmez; etkin çekim güçlenir ve yarıçap genel olarak küçülür.',
      25,
      25,
      { formula: 'Yarıçap: ← ve ↓ artar', formulaSub: 'Katman sayısı · etkin çekirdek çekimi' },
    ),
  },
  {
    key: 'iyonlasma',
    shape: { x: 768, y: 0, width: 768, height: 512 },
    zoom: { x: 75, y: 25, scale: 1.28 },
    detail: detail(
      'iyonlasma-enerjisi',
      'İyonlaşma enerjisi',
      'Atomdan elektron koparılırken çekirdeğin elektrona uyguladığı çekimi gösteren yakın plan.',
      'Gaz hâlindeki nötr atomdan ilk elektronu koparmak için gereken enerjidir. Elektron çekirdeğe daha güçlü bağlıysa daha çok enerji gerekir; genel eğilim sağa ve yukarı artıştır.',
      75,
      25,
      { formula: 'İE₁: → ve ↑ artar', formulaSub: 'X(g) + enerji → X⁺(g) + e⁻' },
    ),
  },
  {
    key: 'elektronegatiflik',
    shape: { x: 0, y: 512, width: 768, height: 512 },
    zoom: { x: 25, y: 75, scale: 1.28 },
    detail: detail(
      'elektronegatiflik',
      'Elektronegatiflik',
      'Bir bağdaki ortak elektron bulutunun iki atomdan birine daha güçlü çekildiğini gösteren yakın plan.',
      'Elektronegatiflik, bağlı atomun ortak elektronları çekme eğilimidir. Genel olarak sağa ve yukarı artar; flor en yüksek değere sahiptir. Soy gazlar çoğu temel karşılaştırmaya alınmaz.',
      25,
      75,
      { formula: 'EN: → ve ↑ artar', formulaSub: 'Bağ elektronlarını çekme eğilimi' },
    ),
  },
  {
    key: 'metalik',
    shape: { x: 768, y: 512, width: 768, height: 512 },
    zoom: { x: 75, y: 75, scale: 1.28 },
    detail: detail(
      'metalik-karakter',
      'Metalik karakter',
      'Düzenli, parlak metal örgüsü ile kırılgan ametal kristalini karşılaştıran yakın plan.',
      'Metalik karakter elektron verme eğilimiyle birlikte düşünülür. Atom büyüyüp dış elektron daha zayıf tutuldukça metalik karakter artar; genel artış yönü sola ve aşağıdır.',
      75,
      75,
      { formula: 'Metallik: ← ve ↓ artar', formulaSub: 'Elektron verme eğilimi' },
    ),
  },
]

const trendMarkers = [
  { key: 'yaricap', title: 'Atom yarıçapı', x: 70, y: 80, targetX: 360, targetY: 285, width: 285 },
  { key: 'iyonlasma', title: 'İyonlaşma enerjisi', x: 850, y: 80, targetX: 1160, targetY: 280, width: 345 },
  { key: 'elektronegatiflik', title: 'Elektronegatiflik', x: 70, y: 945, targetX: 350, targetY: 730, width: 330 },
  { key: 'metalik', title: 'Metalik karakter', x: 850, y: 945, targetX: 1160, targetY: 730, width: 310 },
]

function TrendArrows({ activeRegion }) {
  const items = [
    ['yaricap', 290, 390, '←  ↓'],
    ['iyonlasma', 1160, 390, '→  ↑'],
    ['elektronegatiflik', 290, 650, '→  ↑'],
    ['metalik', 1160, 650, '←  ↓'],
  ]
  return items.map(([key, x, y, label]) => (
    <g key={key} opacity={!activeRegion || activeRegion === key ? 1 : 0.12} style={{ transition: 'opacity .4s ease' }}>
      <rect x={x - 92} y={y - 39} width="184" height="78" rx="39" fill="#fffdf7" fillOpacity=".92" stroke="#b79c62" strokeWidth="3" />
      <text x={x} y={y + 16} textAnchor="middle" fill="#263341" fontSize="47" fontWeight="900">{label}</text>
    </g>
  ))
}

export function PeriodicTrendMechanism({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ASSET_ROOT}/periyodik-egilimler-mekanizmasi.jpg`}
      srcSet={`${ASSET_ROOT}/periyodik-egilimler-mekanizmasi-900.jpg 900w, ${ASSET_ROOT}/periyodik-egilimler-mekanizmasi.jpg 1536w`}
      alt="Atom yarıçapı, iyonlaşma enerjisi, elektronegatiflik ve metalik karakterin fiziksel anlamını dört sahnede gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={trendRegions}
      markers={trendMarkers}
    >
      <TrendArrows activeRegion={activeRegion} />
    </InteractiveIllustration>
  )
}
