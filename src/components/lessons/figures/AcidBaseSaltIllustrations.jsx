import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/asit-baz-ve-tuz'
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
const COLORS = ['#a64b3d', '#315f85', '#74508b', '#5b7b43']

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

const indicatorRegions = buildRegions([
  { key: 'asit', detail: detail('asit-ozellikleri', 'Asidik ortamın gözlenebilir kanıtları', 'Limon, sirke ve asidik indikatör renklerini güvenli laboratuvar düzeninde gösteren yakın plan.', 'Asidik çözeltiler bazı indikatörleri kırmızı tonlara çevirir ve pH değerleri 7’den küçüktür. Tatma veya doğrudan temas bir test yöntemi değildir.') },
  { key: 'baz', detail: detail('baz-ozellikleri', 'Bazik ortamın gözlenebilir kanıtları', 'Sabun çözeltisi ve bazik indikatör renklerini koruyucu ekipmanla gösteren yakın plan.', 'Bazik çözeltiler kırmızı turnusolü maviye, fenolftaleini pembeye çevirebilir. Kayganlık bilgisi yalnız tanımlayıcıdır; elle test yapılmaz.') },
  { key: 'indikator', detail: detail('indikatorler', 'İndikatörlerin renk değişim aralıkları', 'Turnusol, fenolftalein, metil oranj ve kırmızı lahana özütünü karşılaştıran yakın plan.', 'İndikatör belirli pH aralıklarında renk değiştirir. Tek bir indikatör kesin pH sayısını değil, ortam hakkında bir aralık veya sınıf bilgisi verir.') },
  { key: 'ph', detail: detail('ph-olcegi', 'pH ölçeğinde asit–nötr–baz düzeni', 'Asidik ve bazik günlük örneklerin nötr su etrafında konumlandığı pH ölçeği.', '25 °C’de pH 7 nötrdür. Daha küçük değerler asidik, daha büyük değerler baziktir; TYT kapsamında logaritmik tanıma girilmez.', { formula: 'pH < 7 · pH = 7 · pH > 7', formulaSub: 'asit · nötr · baz' }) },
])

export function AcidBaseIndicatorAtlas({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="indikator-atlasi" alt="Asit, baz, indikatör ve pH ölçeğini karşılaştıran bilimsel eğitim levhası." regions={indicatorRegions} labels={[['asit', 'Asit kanıtları'], ['baz', 'Baz kanıtları'], ['indikator', 'İndikatörler'], ['ph', 'pH ölçeği']]} badges={[{ key: 'asit', label: 'pH < 7' }, { key: 'baz', label: 'pH > 7' }, { key: 'indikator', label: 'renk kanıtı' }, { key: 'ph', label: '7 nötr' }]} />
}

const particleRegions = buildRegions([
  { key: 'asit-su', detail: detail('asit-su', 'Asidin suda H₃O⁺ oluşturması', 'HCl taneciğinin suya proton aktararak hidronyum ve klorür oluşturduğu moleküler yakın plan.', 'Su yalnız taşıyıcı değildir; proton alarak H₃O⁺ iyonuna dönüşür. Asidik davranış sulu ortamda oluşan hidronyumla ilişkilendirilir.', { formula: 'HCl + H₂O → H₃O⁺ + Cl⁻', formulaSub: 'proton aktarımı' }) },
  { key: 'baz-su', detail: detail('baz-su', 'Bazların suda OH⁻ oluşturması', 'NaOH ayrışması ile NH3 ve su etkileşimini karşılaştıran tanecik yakın planı.', 'NaOH doğrudan OH⁻ verir; NH₃ ise formülünde OH bulunmadığı hâlde suyla etkileşip OH⁻ oluşturur. Sonuca bakmak formüle bakmaktan güvenilirdir.') },
  { key: 'asidik-oksit', detail: detail('asidik-oksitler', 'Ametal oksitlerden asidik çözelti', 'Karbondioksit, kükürt dioksit ve diazot pentaoksidin su damlasıyla asidik ortam oluşturduğu yakın plan.', 'CO₂, SO₂ ve N₂O₅ suyla etkileştiğinde asit oluşturan oksitlere örnektir. Başlangıç formüllerinde H olmaması asidik davranışı engellemez.') },
  { key: 'bazik-oksit', detail: detail('bazik-oksitler', 'Metal oksitten bazik çözelti', 'Kalsiyum oksidin suyla tepkime vererek kalsiyum hidroksit oluşturduğu tanecik ve deney yakın planı.', 'CaO suyla Ca(OH)₂ oluşturur. Çözeltideki OH⁻ etkisi bazik özellikleri ve indikatör değişimini ortaya çıkarır.', { formula: 'CaO + H₂O → Ca(OH)₂', formulaSub: 'bazik oksit + su' }) },
])

export function AcidBaseParticleSystem({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="tanecik-sistemi" alt="Asit ve bazların suda iyon oluşturmasını ve oksitlerin suyla davranışını gösteren bilimsel levha." regions={particleRegions} labels={[['asit-su', 'Asit + su'], ['baz-su', 'Baz + su'], ['asidik-oksit', 'Asidik oksit', 315], ['bazik-oksit', 'Bazik oksit', 315]]} badges={[{ key: 'asit-su', label: 'H₃O⁺ oluşur' }, { key: 'baz-su', label: 'OH⁻ oluşur' }, { key: 'asidik-oksit', label: 'ametal oksit + su', width: 330 }, { key: 'bazik-oksit', label: 'metal oksit + su', width: 330 }]} />
}

const reactionRegions = buildRegions([
  { key: 'notrallesme', detail: detail('notrallesme', 'Nötralleşmenin tanecik özü', 'Hidronyum ve hidroksit iyonlarının su oluşturduğu, seyirci iyonların tuz çözeltisinde kaldığı yakın plan.', 'Nötralleşmenin net iyon tepkimesinde H₃O⁺ ile OH⁻ su oluşturur. Tuz iyonları çözeltide kalabilir; “tuz oluştu” her zaman katı çöktü demek değildir.', { formula: 'H₃O⁺ + OH⁻ → 2H₂O', formulaSub: 'net iyon tepkimesi' }) },
  { key: 'mol-orani', detail: detail('mol-orani', 'Katsayılardan nötralleşme oranı', 'Bir sülfürik asit birimine karşı iki sodyum hidroksit biriminin eşleştiği tanecik sayım yakın planı.', 'H₂SO₄ ile NaOH tepkimesinde 1:2 mol oranı gerekir. Eşit mol kullanmak tam nötralleşme anlamına gelmez.', { formula: '1 mol H₂SO₄ : 2 mol NaOH', formulaSub: 'tam tüketim oranı' }) },
  { key: 'metal', detail: detail('metal-etkinligi', 'Aktif, yarı soy ve soy metal davranışı', 'Magnezyum, bakır ve altının seyreltik asit içindeki farklı davranışlarını karşılaştıran deney yakın planı.', 'Aktif metal seyreltik oksijensiz asitle H₂ çıkarabilir. Cu gibi yarı soy ve Au gibi soy metaller aynı koşulda farklı direnç gösterir; özel yükseltgen asitler istisnadır.') },
  { key: 'amfoter', detail: detail('amfoter-metal', 'Alüminyumun iki yönlü tepkimesi', 'Alüminyum parçalarının ayrı kaplarda asit ve kuvvetli bazla hidrojen çıkardığı karşılaştırmalı yakın plan.', 'Al ve Zn gibi amfoter metaller hem asit hem kuvvetli baz çözeltisiyle tepkime verebilir. Amfoterlik, maddenin iki farklı kimyasal ortama tepki verebilmesidir.') },
])

export function AcidBaseReactionLab({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="tepkime-laboratuvari" alt="Nötralleşme, mol oranı, metal etkinliği ve amfoterliği karşılaştıran bilimsel laboratuvar levhası." regions={reactionRegions} labels={[['notrallesme', 'Nötralleşme', 315], ['mol-orani', 'Mol oranı'], ['metal', 'Metal etkinliği', 320], ['amfoter', 'Amfoter metal', 315]]} badges={[{ key: 'notrallesme', label: 'su + tuz' }, { key: 'mol-orani', label: 'katsayıyı oku' }, { key: 'metal', label: 'H₂ çıkar mı?' }, { key: 'amfoter', label: 'asit + kuvvetli baz', width: 345 }]} />
}

const lifeRegions = buildRegions([
  { key: 'asit-yagmuru', detail: detail('asit-yagmuru', 'Asit yağmurunun oluşum ve etkileri', 'Sanayi gazlarından buluta ve kalsiyum karbonatlı tarihî eserde aşınmaya uzanan neden-sonuç yakın planı.', 'SO₂ ve azot oksitleri atmosferde asidik türlere dönüşebilir. Asidik yağış toprak ve suların dengesini etkiler, CaCO₃ içeren yapılarda aşınmayı hızlandırır.') },
  { key: 'ev-guvenligi', detail: detail('ev-guvenligi', 'Çamaşır suyu ve tuz ruhu tehlikesi', 'İki temizlik şişesini kesin yasak işaretiyle ayıran ve havalandırma-gözlük-eldiven vurgusu yapan güvenlik yakın planı.', 'Çamaşır suyu ile tuz ruhu karıştırıldığında zehirli klor gazı oluşabilir. Kimyasallar kendi ambalajında tutulur, etiket okunur ve karışım yapılmaz.') },
  { key: 'malzeme', detail: detail('malzeme-guvenligi', 'Kireç temizliği ve güvenli seyreltme', 'Kireçli yüzey, metal aşınması ve asidin suya yavaş eklenmesini gösteren laboratuvar güvenliği yakın planı.', 'Asit kireci çözebilir ama metali de aşındırabilir. Derişik asit seyreltilirken ısıyı güvenle dağıtmak için asit yavaşça suya eklenir; tersi yapılmaz.') },
  { key: 'tuzlar', detail: detail('yaygin-tuzlar', 'Beş temel tuz ve kullanım alanları', 'NaCl, Na2CO3, NaHCO3, CaCO3 ve NH4Cl örneklerini günlük kullanım nesneleriyle gösteren bilimsel yakın plan.', 'Sofra tuzu, çamaşır sodası, yemek sodası, kireç taşı ve amonyum klorür farklı tuzlardır. Kullanım, katyon ve anyonun oluşturduğu özelliklere bağlıdır.') },
])

export function AcidBaseSafetySaltAtlas({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="guvenlik-tuz-atlasi" alt="Asit yağmuru, evsel güvenlik, malzeme uyumu ve yaygın tuzları gösteren bilimsel eğitim levhası." regions={lifeRegions} labels={[['asit-yagmuru', 'Asit yağmuru', 315], ['ev-guvenligi', 'Evsel güvenlik', 330], ['malzeme', 'Malzeme seçimi', 330], ['tuzlar', 'Yaygın tuzlar', 315]]} badges={[{ key: 'asit-yagmuru', label: 'çevresel etki' }, { key: 'ev-guvenligi', label: 'asla karıştırma', width: 315 }, { key: 'malzeme', label: 'asidi suya ekle', width: 315 }, { key: 'tuzlar', label: '5 temel tuz' }]} />
}
