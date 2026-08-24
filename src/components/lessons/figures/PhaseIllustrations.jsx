import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/maddenin-halleri'

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

const markers = (labels) => [
  { key: labels[0][0], title: labels[0][1], x: 65, y: 82, targetX: 380, targetY: 280, width: labels[0][2] ?? 230 },
  { key: labels[1][0], title: labels[1][1], x: 845, y: 82, targetX: 1160, targetY: 280, width: labels[1][2] ?? 230 },
  { key: labels[2][0], title: labels[2][1], x: 65, y: 944, targetX: 380, targetY: 744, width: labels[2][2] ?? 230 },
  { key: labels[3][0], title: labels[3][1], x: 845, y: 944, targetX: 1160, targetY: 744, width: labels[3][2] ?? 230 },
]

function Badges({ activeRegion, entries }) {
  const opacity = (key) => (!activeRegion || activeRegion === key ? 1 : 0.12)
  return (
    <>
      {entries.map(({ key, x, y, label, color = '#287d86', width = 250 }) => (
        <g key={key} opacity={opacity(key)}>
          <rect x={x - width / 2} y={y - 38} width={width} height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={color} strokeWidth="3" />
          <text x={x} y={y + 13} textAnchor="middle" fill={color} fontSize="34" fontWeight="900">{label}</text>
        </g>
      ))}
    </>
  )
}

const stateRegions = [
  {
    key: 'kati', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('kati', 'Katı: titreşim var, öteleme yok', 'Kristal katıda sabit konum çevresinde titreşen taneciklerin yakın planı.', 'Katı tanecikleri hareketsiz değildir; denge konumları çevresinde titreşir. Birbirlerine göre konumları korunduğu için katının biçimi ve hacmi belirgindir.', { formula: 'yakın + düzenli', formulaSub: 'titreşim hareketi' }),
  },
  {
    key: 'sivi', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('sivi', 'Sıvı: yakın ama hareketli', 'Yakın duran sıvı taneciklerinin komşuları üzerinden kaymasını gösteren yakın plan.', 'Sıvı tanecikleri yakınlığını korur fakat sabit konumlara bağlı değildir. Birbirlerinin üzerinden kayabildikleri için akar ve kabın şeklini alır.', { formula: 'yakın + düzensiz', formulaSub: 'titreşim, dönme ve öteleme' }),
  },
  {
    key: 'gaz', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('gaz', 'Gaz: büyük boşluk, serbest hareket', 'Geniş boşlukta rastgele hareket edip duvara çarpan gaz taneciklerinin yakın planı.', 'Gaz hacminin büyük bölümü boşluktur. Tanecikler hızlı ve rastgele hareket eder; çarpışmaları basıncı, büyük boşluklar ise sıkışabilirliği açıklar.', { formula: 'uzak + rastgele', formulaSub: 'kabın tamamına yayılma' }),
  },
  {
    key: 'plazma', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('plazma', 'Plazma: iyonlaşmış akışkan', 'Serbest elektronlar ve pozitif iyonların alan etkisindeki hareketini gösteren yakın plan.', 'Plazmada elektronların bir bölümü atomlardan ayrılmıştır. Hareketli yükler elektrik iletkenliği ve elektrik–manyetik alanlara ortak tepki oluşturur.', { formula: 'iyonlar + e⁻', formulaSub: 'elektriksel olarak etkin ortam' }),
  },
]

const stateMarkers = markers([
  ['kati', 'Katı', 205], ['sivi', 'Sıvı', 205], ['gaz', 'Gaz', 205], ['plazma', 'Plazma', 230],
])

export function MatterStateParticleMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/madde-halleri.jpg`}
      srcSet={`${ROOT}/madde-halleri-900.jpg 900w, ${ROOT}/madde-halleri.jpg 1536w`}
      alt="Katı, sıvı, gaz ve plazmayı tanecik düzeniyle karşılaştıran bilimsel levha."
      activeRegion={activeRegion}
      regions={stateRegions}
      markers={stateMarkers}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kati', x: 385, y: 405, label: 'titreşim', color: '#2563a8' },
        { key: 'sivi', x: 1150, y: 405, label: 'kayma', color: '#287d86' },
        { key: 'gaz', x: 385, y: 650, label: 'büyük boşluk', color: '#514080', width: 285 },
        { key: 'plazma', x: 1150, y: 650, label: 'iyonlaşma', color: '#a34c38' },
      ]} />
    </InteractiveIllustration>
  )
}

const importanceRegions = [
  {
    key: 'su', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('su-dongusu', 'Su döngüsü ve üç hâl', 'Buzul, göl, buharlaşma, bulut ve yağışı birlikte gösteren su döngüsü yakın planı.', 'Suyun buz, sıvı ve buhar hâlleri arasında geçişi; atmosfer, yeryüzü ve canlılar arasında sürekli madde dolaşımı sağlar.'),
  },
  {
    key: 'lpg-lng', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('lpg-lng', 'LPG ve LNG depolama', 'Basınçlı LPG tüpü ile yalıtımlı kriyojenik LNG tankının kesit karşılaştırması.', 'LPG propan–bütan ağırlıklı ve basınçla sıvılaştırılır. LNG büyük ölçüde metandır ve çok düşük sıcaklıkta sıvı tutulur. İkisinde de sıvılaştırma depolama hacmini küçültür.'),
  },
  {
    key: 'sogutucu', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('sogutucu', 'Soğutucu akışkan çevrimi', 'Buzdolabı evaporatöründe buharlaşan akışkanın çevreden enerji almasını gösteren yakın plan.', 'Soğutucu akışkan evaporatörde buharlaşırken dolap içinden enerji alır; dış serpantinde yoğunlaşırken enerjiyi çevreye verir. Akışkan kapalı çevrimde tekrar kullanılır.'),
  },
  {
    key: 'hava', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('hava-ayirma', 'Sıvı havadan gaz ayırma', 'Sıvı hava beslemeli endüstriyel ayırma kolonlarının yakın planı.', 'Hava soğutulup sıvılaştırıldıktan sonra bileşenlerin farklı kaynama sıcaklıklarından yararlanılır. Böylece azot ve oksijen gibi gazlar fiziksel yöntemle ayrılabilir.'),
  },
]

const importanceMarkers = markers([
  ['su', 'Su · üç hâl', 270], ['lpg-lng', 'LPG · LNG', 255], ['sogutucu', 'Soğutucu akışkan', 340], ['hava', 'Sıvı hava ayrımı', 320],
])

export function PhaseInDailyLife({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/gunluk-yasam.jpg`}
      srcSet={`${ROOT}/gunluk-yasam-900.jpg 900w, ${ROOT}/gunluk-yasam.jpg 1536w`}
      alt="Su döngüsü, LPG ve LNG, soğutucu akışkan ve sıvı hava ayırmayı gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={importanceRegions}
      markers={importanceMarkers}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'su', x: 385, y: 405, label: 'hâl döngüsü', color: '#2563a8', width: 285 },
        { key: 'lpg-lng', x: 1150, y: 405, label: 'küçük hacim', color: '#a34c38', width: 285 },
        { key: 'sogutucu', x: 385, y: 650, label: 'enerji aktarımı', color: '#287d86', width: 310 },
        { key: 'hava', x: 1150, y: 650, label: 'farklı kaynama', color: '#514080', width: 325 },
      ]} />
    </InteractiveIllustration>
  )
}

const solidRegions = [
  {
    key: 'iyonik', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('iyonik-kati', 'İyonik katı ve kırılganlık', 'Alternatif iyonların dizildiği örgüde katman kaymasıyla aynı yüklerin yaklaşmasını gösteren yakın plan.', 'İyonik katıda zıt yükler örgüyü tutar. Katman kayınca aynı yüklü iyonlar karşılaşır, kuvvetli itme kristali kırar. Katıda iyonlar hareket edemediği için iletkenlik görülmez.'),
  },
  {
    key: 'molekuler', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('molekuler-kati', 'Moleküler katı', 'Ayrı iki atomlu moleküllerin zayıf çekimlerle kristal oluşturduğu yakın plan.', 'Moleküler katıda güçlü bağlar molekülün içindedir; molekülleri birbirine zayıf etkileşimler bağlar. Bu nedenle erime sıcaklığı çoğunlukla iyonik ve ağ katılardan düşüktür.'),
  },
  {
    key: 'kovalent-ag', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('kovalent-ag', 'Kovalent ağ katısı', 'Bütün görüntü boyunca devam eden tetrahedral kovalent ağ yapısının yakın planı.', 'Kovalent ağda ayrı molekül yoktur; atomlar yapı boyunca güçlü kovalent bağlarla birleşir. Elmasın sertliği ve yüksek erime sıcaklığı bu sürekli ağdan doğar.'),
  },
  {
    key: 'metalik', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('metalik-kati', 'Metalik katı', 'Metal merkezleri arasındaki delokalize elektron denizi ve kayan katman yakın planı.', 'Delokalize elektronlar katı boyunca yük ve enerji taşıyabilir. Katmanlar kaydığında elektron denizi çekimi sürdürdüğü için metal çoğunlukla kırılmadan şekil alabilir.'),
  },
]

const solidMarkers = markers([
  ['iyonik', 'İyonik katı', 270], ['molekuler', 'Moleküler katı', 300], ['kovalent-ag', 'Kovalent ağ', 285], ['metalik', 'Metalik katı', 285],
])

export function SolidStructureMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/kati-turleri.jpg`}
      srcSet={`${ROOT}/kati-turleri-900.jpg 900w, ${ROOT}/kati-turleri.jpg 1536w`}
      alt="İyonik, moleküler, kovalent ağ ve metalik katıları karşılaştıran bilimsel levha."
      activeRegion={activeRegion}
      regions={solidRegions}
      markers={solidMarkers}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'iyonik', x: 385, y: 405, label: 'katyon · anyon', color: '#514080', width: 310 },
        { key: 'molekuler', x: 1150, y: 405, label: 'ayrı molekül', color: '#2563a8', width: 290 },
        { key: 'kovalent-ag', x: 385, y: 650, label: 'sürekli ağ', color: '#3d5968', width: 270 },
        { key: 'metalik', x: 1150, y: 650, label: 'elektron denizi', color: '#a66a21', width: 320 },
      ]} />
    </InteractiveIllustration>
  )
}

const liquidRegions = [
  {
    key: 'viskozite', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('viskozite', 'Viskozite: akmaya karşı direnç', 'Birbirine dolanmış ve güçlü çekilen taneciklerle serbestçe hareket eden tanecikleri karşılaştıran yakın plan.', 'Güçlü tanecikler arası çekim ve uzun moleküllerin dolaşması akışı zorlaştırabilir. Sıvı ısıtıldığında hareket kolaylaşır ve viskozite genellikle azalır.', { formula: 'T ↑ → viskozite ↓', formulaSub: 'sıvılar için genel eğilim' }),
  },
  {
    key: 'denge', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('dinamik-denge', 'Buharlaşma–yoğuşma dengesi', 'Kapalı kapta sıvıdan ayrılan ve sıvıya dönen taneciklerin yakın planı.', 'Dinamik dengede buharlaşma ve yoğuşma durmaz; birim zamandaki hızları eşitlenir. İki faz birlikte kaldıkça makroskobik miktarlar sabit görünür.', { formula: 'vᵦᵤₕ = vᵧₒğ', formulaSub: 'dinamik denge' }),
  },
  {
    key: 'kaynama', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('buhar-basinci-kaynama', 'Buhar basıncı ve kaynama', 'Sıvının her yerinde kararlı buhar kabarcıkları ve yüzeye etkiyen dış ortamı gösteren yakın plan.', 'Sıvının denge buhar basıncı dış basınca eşit olduğunda sıvı içinde buhar kabarcıkları çökmeyip büyüyebilir; kaynama başlar.', { formula: 'Pᵦᵤₕₐᵣ = Pₒᵣₜₐₘ', formulaSub: 'kaynama koşulu' }),
  },
  {
    key: 'nem', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('nem', 'Nem ve terin buharlaşması', 'Nemli havada deri üzerinde kalan ter damlaları ve az sayıda kaçan su taneciğini gösteren yakın plan.', 'Hava su buharına yaklaştıkça terin buharlaşması yavaşlar. Vücuttan daha az enerji uzaklaştığı için sıcak ve nemli hava daha sıcak hissedilebilir.'),
  },
]

const liquidMarkers = markers([
  ['viskozite', 'Viskozite', 250], ['denge', 'Dinamik denge', 310], ['kaynama', 'Kaynama', 235], ['nem', 'Nem', 205],
])

export function LiquidDynamicsMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={`${ROOT}/sivi-dinamikleri.jpg`}
      srcSet={`${ROOT}/sivi-dinamikleri-900.jpg 900w, ${ROOT}/sivi-dinamikleri.jpg 1536w`}
      alt="Viskozite, dinamik denge, kaynama ve nem olaylarını gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={liquidRegions}
      markers={liquidMarkers}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'viskozite', x: 385, y: 405, label: 'akış direnci', color: '#a66a21', width: 285 },
        { key: 'denge', x: 1150, y: 405, label: 'iki yön sürer', color: '#514080', width: 290 },
        { key: 'kaynama', x: 385, y: 650, label: 'Pᵦᵤₕ = Pₒᵣₜ', color: '#2563a8', width: 300 },
        { key: 'nem', x: 1150, y: 650, label: 'yavaş buharlaşma', color: '#287d86', width: 345 },
      ]} />
    </InteractiveIllustration>
  )
}
