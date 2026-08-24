import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/karisimlar'
const SHAPES = [
  { x: 0, y: 0, width: 768, height: 512 },
  { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 },
  { x: 768, y: 512, width: 768, height: 512 },
]
const ZOOMS = [
  { x: 25, y: 25, scale: 1.28 },
  { x: 75, y: 25, scale: 1.28 },
  { x: 25, y: 75, scale: 1.28 },
  { x: 75, y: 75, scale: 1.28 },
]
const ANCHORS = [
  { x: 65, y: 82, targetX: 380, targetY: 280 },
  { x: 845, y: 82, targetX: 1160, targetY: 280 },
  { x: 65, y: 944, targetX: 380, targetY: 744 },
  { x: 845, y: 944, targetX: 1160, targetY: 744 },
]
const COLORS = ['#287d86', '#514080', '#a66a21', '#2563a8']

function detail(name, title, alt, note, extra = {}) {
  return {
    src: ROOT + '/details/' + name + '.jpg',
    srcSet: ROOT + '/details/' + name + '-480.jpg 480w, ' + ROOT + '/details/' + name + '.jpg 768w',
    title, alt, note, ...extra,
  }
}

function buildRegions(items) {
  return items.map((item, index) => ({ ...item, shape: SHAPES[index], zoom: ZOOMS[index] }))
}

function Plate({ activeRegion, file, alt, regions, labels, badges }) {
  const markers = labels.map(([key, title, width = 300], index) => ({ key, title, width, ...ANCHORS[index] }))
  return (
    <InteractiveIllustration
      src={ROOT + '/' + file + '.jpg'}
      srcSet={ROOT + '/' + file + '-900.jpg 900w, ' + ROOT + '/' + file + '.jpg 1536w'}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      markers={markers}
    >
      <>
        {badges.map(({ key, label, width = 290 }, index) => {
          const x = index % 2 === 0 ? 385 : 1150
          const y = index < 2 ? 405 : 650
          const opacity = !activeRegion || activeRegion === key ? 1 : 0.12
          return (
            <g key={key} opacity={opacity}>
              <rect x={x - width / 2} y={y - 38} width={width} height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={COLORS[index]} strokeWidth="3" />
              <text x={x} y={y + 13} textAnchor="middle" fill={COLORS[index]} fontSize="34" fontWeight="900">{label}</text>
            </g>
          )
        })}
      </>
    </InteractiveIllustration>
  )
}

const classificationRegions = buildRegions([
  { key: 'cozelti', detail: detail('cozelti', 'Moleküler ve iyonik çözelti', 'Çözünen iyon ve moleküllerin çözücü içinde tek faz oluşturduğu yakın plan.', 'Çözünen tanecikler moleküler veya iyonik düzeyde dağılır. Dağılım homojen, kararlı ve normal filtre gözeneklerinden geçecek kadar küçüktür.') },
  { key: 'suspansiyon', detail: detail('suspansiyon', 'Çöken süspansiyon tanecikleri', 'Sıvıda büyük katı taneciklerin zamanla dibe çöktüğü yakın plan.', 'Süspansiyondaki katı tanecikler moleküler boyuttan büyüktür. Yerçekimiyle çökebilir ve uygun süzgeçle sıvıdan ayrılabilir.') },
  { key: 'emulsiyon', detail: detail('emulsiyon', 'Sıvı içinde sıvı damlacıkları', 'Su temelli fazda dağılmış yağ damlacıklarının mikroskobik yakın planı.', 'Birbiri içinde çözünmeyen sıvılardan biri diğerinde damlacıklar hâlinde dağılır. Emülgatör damlacıkların birleşmesini yavaşlatabilir.') },
  { key: 'aerosol', detail: detail('aerosol-kolloid', 'Aerosol ve kolloidde ışık saçılması', 'Gaz içindeki damlacık ve katı parçacıkların ışık demetini saçtığı yakın plan.', 'Sis sıvının, duman katının gaz içinde dağıldığı aerosoldür. Kolloidal tanecikler kolay çökmez ama ışığı saçabilir.') },
])

export function MixtureClassificationAtlas({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="siniflandirma" alt="Çözelti, süspansiyon, emülsiyon ve aerosol-kolloid dağılımlarını karşılaştıran bilimsel levha." regions={classificationRegions} labels={[['cozelti', 'Çözelti'], ['suspansiyon', 'Süspansiyon'], ['emulsiyon', 'Emülsiyon'], ['aerosol', 'Aerosol · kolloid', 330]]} badges={[{ key: 'cozelti', label: 'tek faz' }, { key: 'suspansiyon', label: 'çökebilir' }, { key: 'emulsiyon', label: 'sıvı damlacık', width: 310 }, { key: 'aerosol', label: 'ışığı saçar' }]} />
}

const solutionRegions = buildRegions([
  { key: 'solvatasyon', detail: detail('solvatasyon', 'Çözücü taneciklerinin sarma hareketi', 'Polar çözücü moleküllerinin iyonları uygun uçlarıyla çevrelediği yakın plan.', 'Çözücü tanecikleri ayrılan çözünen taneciklerin çevresini sarar ve yeni çekimler kurar. Su kullanılıyorsa hidratasyon denir.') },
  { key: 'benzerlik', detail: detail('benzerlik', 'Polar ve apolar eşleşme', 'Polar çözünenin polar, apolar çözünenin apolar ortamda dağıldığı karşılaştırmalı yakın plan.', 'Benzer etkileşim karakterindeki türler birbirlerinin eski çekimlerinin yerini daha kolay alır. İlke eğilimdir; çözünürlüğün tek belirleyicisi değildir.') },
  { key: 'derisim', detail: detail('derisim', 'Çözünen payını ölçme', 'Çözünen ve çözücü kütlelerinin toplam çözelti terazisinde gösterildiği yakın plan.', 'Kütlece yüzde çözünen kütlesinin çözelti toplamına oranıdır. Payda yalnız çözücü değildir.', { formula: '% = çözünen / çözelti', formulaSub: 'aynı tür nicelikler' }) },
  { key: 'seyreltme', detail: detail('seyreltme', 'Seyreltmede çözünen korunur', 'Aynı sayıda çözünen taneciğin daha büyük sıvı hacmine dağıldığı yakın plan.', 'Çözücü eklendiğinde çözünen tanecik sayısı aynı kalır; toplam çözelti miktarı arttığı için birim miktardaki payı azalır.') },
])

export function DissolutionConcentrationMap({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="cozunme-derisim" alt="Solvatasyon, polarite benzerliği, derişim ve seyreltmeyi gösteren bilimsel levha." regions={solutionRegions} labels={[['solvatasyon', 'Solvatasyon'], ['benzerlik', 'Benzerlik ilkesi', 310], ['derisim', 'Derişim oranı'], ['seyreltme', 'Seyreltme']]} badges={[{ key: 'solvatasyon', label: 'sar · ayır · dağıt', width: 330 }, { key: 'benzerlik', label: 'uygun etkileşim', width: 315 }, { key: 'derisim', label: 'parça / bütün' }, { key: 'seyreltme', label: 'çözünen sabit', width: 300 }]} />
}

const colligativeRegions = buildRegions([
  { key: 'buhar', detail: detail('buhar-basinci', 'Yüzeyden kaçan çözücü tanecikleri', 'Saf çözücü ve çözeltinin yüzeyindeki buharlaşma sayısını karşılaştıran yakın plan.', 'Uçucu olmayan çözünen yüzeyde çözücü payını azaltır. Aynı sıcaklıkta gaz fazına kaçabilen çözücü sayısı ve denge buhar basıncı azalır.') },
  { key: 'kaynama', detail: detail('kaynama-yukselmesi', 'Kaynama sıcaklığının yükselmesi', 'Saf çözücü ve çözeltinin farklı termometre değerlerinde kaynadığı karşılaştırmalı yakın plan.', 'Çözeltinin düşük buhar basıncını dış basınca eşitlemek için daha yüksek sıcaklık gerekir. Derişim arttıkça yükselme belirginleşir.') },
  { key: 'donma', detail: detail('donma-dusmesi', 'Kristal örgünün kurulmasının zorlaşması', 'Çözünen taneciklerin çözücü kristal düzenini bozduğu donma yakın planı.', 'Çözünen tanecikler düzenli katı yapının kurulmasını zorlaştırır; çözelti saf çözücüden daha düşük sıcaklıkta donmaya başlar.') },
  { key: 'osmoz', detail: detail('osmoz', 'Yarı geçirgen zardan net çözücü geçişi', 'Seyreltik ve derişik çözeltileri ayıran zar boyunca su geçişini gösteren yakın plan.', 'Zar çözücüyü geçirip çözüneni tutuyorsa çözücü seyreltik taraftan derişik tarafa net geçer. Geçişi durduran dış basınç osmotik basınçtır.') },
])

export function ColligativePropertiesSystem({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="koligatif" alt="Buhar basıncı, kaynama, donma ve osmoz üzerindeki çözünen etkisini gösteren bilimsel levha." regions={colligativeRegions} labels={[['buhar', 'Buhar basıncı', 315], ['kaynama', 'Kaynama noktası', 320], ['donma', 'Donma noktası', 305], ['osmoz', 'Osmoz']]} badges={[{ key: 'buhar', label: 'buhar basıncı ↓', width: 330 }, { key: 'kaynama', label: 'kaynama T ↑', width: 285 }, { key: 'donma', label: 'donma T ↓', width: 270 }, { key: 'osmoz', label: 'seyreltik → derişik', width: 345 }]} />
}

const separationRegions = buildRegions([
  { key: 'boyut', detail: detail('boyut-manyetik', 'Tanecik boyutu ve manyetik seçim', 'Elek, filtre, yarı geçirgen zar ve mıknatısın farklı parçacıkları ayırdığı yakın plan.', 'Eleme, süzme ve diyaliz farklı boyutları; mıknatıs ise güçlü çekilen metal bileşeni seçer. Yöntem karışımın fazına göre seçilir.') },
  { key: 'yogunluk', detail: detail('yogunluk', 'Ayırma hunisinde iki sıvı faz', 'Yoğunlukları farklı ve çözünmeyen iki sıvının ayırma hunisinde katmanlandığı yakın plan.', 'Birbirinde çözünmeyen sıvılar iki faz oluşturur. Alt musluktan önce yoğunluğu büyük olan faz alınır; yoğunluk farkı tek başına, tek fazlı sıvılarda yetmez.') },
  { key: 'kaynama', detail: detail('damitma', 'Buharlaştırma ve yoğunlaştırma', 'Basit damıtma ile fraksiyon kolonu düzeneklerini karşılaştıran yakın plan.', 'Basit damıtma çözelti çözücüsünü, ayrımsal damıtma birbirine karışan uçucu sıvıları kaynama farkıyla ayırır.') },
  { key: 'cozunurluk', detail: detail('cozunurluk-ayirma', 'Özütleme ve kristallendirme', 'Seçici çözücüye geçen madde ve soğutmayla oluşan kristalleri gösteren yakın plan.', 'Özütleme seçici çözünürlüğü; kristallendirme sıcaklıkla çözünürlük değişimini; ayrımsal kristallendirme iki katının farklı çözünürlüğünü kullanır.') },
])

export function MixtureSeparationLab({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="ayirma-laboratuvari" alt="Karışımları tanecik boyutu, yoğunluk, kaynama noktası ve çözünürlük farkıyla ayıran bilimsel levha." regions={separationRegions} labels={[['boyut', 'Boyut · mıknatıs', 330], ['yogunluk', 'Yoğunluk'], ['kaynama', 'Kaynama noktası', 325], ['cozunurluk', 'Çözünürlük']]} badges={[{ key: 'boyut', label: 'ele · süz · seç', width: 315 }, { key: 'yogunluk', label: 'iki sıvı faz' }, { key: 'kaynama', label: 'buhar → yoğunlaş', width: 335 }, { key: 'cozunurluk', label: 'özütle · kristallendir', width: 360 }]} />
}
