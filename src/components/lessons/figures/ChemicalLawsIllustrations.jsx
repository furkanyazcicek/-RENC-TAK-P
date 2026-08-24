import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/kimyanin-temel-kanunlari'

function detail(name, title, alt, note, extra = {}) {
  return {
    src: ROOT + '/details/' + name + '.jpg',
    srcSet: ROOT + '/details/' + name + '-480.jpg 480w, ' + ROOT + '/details/' + name + '.jpg 768w',
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

const conservationRegions = [
  {
    key: 'kapali', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('kapali-sistem', 'Kapalı sistemde eşit terazi', 'Tıpalı tepkime kabının tepkime öncesi ve sonrası aynı değeri gösterdiği hassas terazi yakın planı.', 'Kap, hava ve bütün maddeler birlikte sistemde kalır. Kimyasal türler değişse bile başlangıçtaki toplam kütle son ürünler ve artan maddelerin toplamına eşittir.', { formula: 'm(ilk) = m(son)', formulaSub: 'kapalı sistem' }),
  },
  {
    key: 'gaz-cikisi', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('gaz-cikisi', 'Açık kaptan gaz çıkışı', 'Açık reaksiyon kabından çıkan gazın izini ve azalan terazi değerini gösteren yakın plan.', 'Terazinin üzerinde kalan kısım hafifler; fakat kaçan gaz yok olmamıştır. Son kalan kütle ile toplanan gazın kütlesi birlikte ilk toplamı verir.'),
  },
  {
    key: 'oksijen', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('oksijen-girisi', 'Havadan oksijen alan metal', 'Havadaki oksijen taneciklerinin ısıtılan metal yüzeyine katıldığı ve katı kütlesini artırdığı yakın plan.', 'Metal oksitlenirken çevreden oksijen sisteme katılır. Yalnız metal ve oluşan oksit tartılırsa artış görülür; artışın kaynağı havadan gelen oksijendir.'),
  },
  {
    key: 'atomlar', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('atom-duzeni', 'Atomların yeniden düzenlenmesi', 'Tepkime öncesi ve sonrası aynı renk ve sayıda atomların farklı bağlarla düzenlendiği moleküler yakın plan.', 'Tepkimede bağlar ve kimyasal türler değişir; her elemente ait atom sayısı korunur. Kütlenin korunumu, bu atom bilançosunun makroskobik ölçümüdür.'),
  },
]

export function ConservationExperimentMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={ROOT + '/kutle-korunumu.jpg'}
      srcSet={ROOT + '/kutle-korunumu-900.jpg 900w, ' + ROOT + '/kutle-korunumu.jpg 1536w'}
      alt="Kapalı ve açık sistemlerde kütlenin korunumu deneylerini gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={conservationRegions}
      markers={makeMarkers([
        ['kapali', 'Kapalı sistem', 290], ['gaz-cikisi', 'Gaz çıkışı', 255], ['oksijen', 'Oksijen girişi', 300], ['atomlar', 'Atom bilançosu', 305],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kapali', x: 385, y: 405, label: 'ilk = son', color: '#287d86', width: 245 },
        { key: 'gaz-cikisi', x: 1150, y: 405, label: 'gazı da say', color: '#a34c38', width: 275 },
        { key: 'oksijen', x: 385, y: 650, label: 'çevreden giriş', color: '#2563a8', width: 290 },
        { key: 'atomlar', x: 1150, y: 650, label: 'yeniden düzenlenme', color: '#514080', width: 360 },
      ]} />
    </InteractiveIllustration>
  )
}

const definiteRegions = [
  {
    key: 'kucuk', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('kucuk-ornek', 'Küçük saf bileşik örneği', 'İki renkli taneciklerden sabit sayıda birim ve onları ayrı kütle kaplarında gösteren yakın plan.', 'Saf bileşiğin küçük örneğinde A ve B kütleleri belirli bir oran verir. Örneğin boyutu oranı değil, yalnız toplam miktarı belirler.', { formula: 'm(A) / m(B)', formulaSub: 'bileşiğin sabit oranı' }),
  },
  {
    key: 'buyuk', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('buyuk-ornek', 'Ölçeklenen büyük örnek', 'Küçük örneğin tam katı tanecik ve kütle içeren büyük saf bileşik örneği yakın planı.', 'Bileşik iki katına çıkarıldığında hem A hem B kütlesi de iki katına çıkar. Oran aynı sayıyla çarpıldığı için sadeleştirildiğinde değişmez.'),
  },
  {
    key: 'artan', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('artan-madde', 'Sabit oranın dışında kalan madde', 'Bileşik tanecikleri oluştuktan sonra ayrı kalan fazla element taneciklerini gösteren yakın plan.', 'Başlangıç karışımında bir element sabit oranın gerektirdiğinden fazlaysa fazlası bileşiğe katılmaz. Bileşim değişmez; madde tepkime sonunda artar.'),
  },
  {
    key: 'yuzde', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('kutlece-yuzde', 'Kütlece yüzde bileşimi', 'Bileşik kütlesini iki renkli oran dilimlerine ayıran laboratuvar tartım yakın planı.', 'Element kütlesinin bileşik kütlesine oranının yüzle çarpımı kütlece yüzdedir. Aynı saf bileşiğin her örneğinde bu yüzdeler değişmez.'),
  },
]

export function DefiniteProportionsMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={ROOT + '/sabit-oran.jpg'}
      srcSet={ROOT + '/sabit-oran-900.jpg 900w, ' + ROOT + '/sabit-oran.jpg 1536w'}
      alt="Saf bileşikte sabit kütle oranını, ölçeklemeyi, artan maddeyi ve yüzde bileşimi gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={definiteRegions}
      markers={makeMarkers([
        ['kucuk', 'Küçük örnek', 270], ['buyuk', 'Büyük örnek', 270], ['artan', 'Artan madde', 285], ['yuzde', 'Kütlece yüzde', 300],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kucuk', x: 385, y: 405, label: '2 : 3', color: '#514080', width: 200 },
        { key: 'buyuk', x: 1150, y: 405, label: '4 : 6 = 2 : 3', color: '#287d86', width: 315 },
        { key: 'artan', x: 385, y: 650, label: 'fazlası artar', color: '#a34c38', width: 280 },
        { key: 'yuzde', x: 1150, y: 650, label: 'parça / bütün', color: '#2563a8', width: 290 },
      ]} />
    </InteractiveIllustration>
  )
}

const multipleRegions = [
  {
    key: 'kosul', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('kosul-denetimi', 'Katlı oran koşullarını denetleme', 'İki bileşik modelinde aynı iki element renginin ve farklı bağlanma düzeninin karşılaştırıldığı yakın plan.', 'İki örnek aynı iki elementten oluşmalı ve birbirinden farklı saf bileşikler olmalıdır. Ortak yalnız bir element bulunması yeterli değildir.'),
  },
  {
    key: 'sabitle', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('elementi-sabitle', 'Ortak element kütlesini eşitleme', 'İki terazide ortak renkli element kütlelerinin aynı değere ölçeklendiği yakın plan.', 'Bir elementin kütlesini ortak kata getir. Her bileşiği kendi katsayısıyla ölçeklerken ona bağlı diğer elementin kütlesini de aynı katsayıyla çarp.'),
  },
  {
    key: 'karsilastir', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('diger-element', 'Diğer element kütlelerini karşılaştırma', 'Eşit ortak elementin yanında farklı miktarda ikinci element bulunan iki bileşik modelinin yakın plan.', 'Ortak element eşitlendikten sonra yalnız diğer element kütleleri oranlanır. Toplam bileşik kütleleri katlı oranı vermez.'),
  },
  {
    key: 'sadelestir', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('sade-oran', 'Basit tam sayılı sonuca indirgeme', 'İki farklı miktarın görsel olarak ikiye bir sadeleştirildiği oran kartı yakın planı.', 'Bulduğun oranı ortak bölenle sadeleştir ve sorunun istediği birinci/ikinci sırasını koru. Ters sıra, oranın tersini verir.'),
  },
]

export function MultipleProportionsMap({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={ROOT + '/katli-oran.jpg'}
      srcSet={ROOT + '/katli-oran-900.jpg 900w, ' + ROOT + '/katli-oran.jpg 1536w'}
      alt="Katlı oran koşullarını, sabitleme ve sadeleştirme adımlarını gösteren bilimsel levha."
      activeRegion={activeRegion}
      regions={multipleRegions}
      markers={makeMarkers([
        ['kosul', 'Koşulları denetle', 325], ['sabitle', 'Bir elementi sabitle', 350], ['karsilastir', 'Diğerini karşılaştır', 355], ['sadelestir', 'Oranı sadeleştir', 315],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'kosul', x: 385, y: 405, label: 'aynı iki element', color: '#514080', width: 325 },
        { key: 'sabitle', x: 1150, y: 405, label: 'ortak kütle', color: '#287d86', width: 285 },
        { key: 'karsilastir', x: 385, y: 650, label: 'diğer elementi oranla', color: '#a66a21', width: 370 },
        { key: 'sadelestir', x: 1150, y: 650, label: '2 : 1', color: '#2563a8', width: 210 },
      ]} />
    </InteractiveIllustration>
  )
}

const synthesisRegions = [
  {
    key: 'bilanco', shape: QUADS.tl, zoom: ZOOMS.tl,
    detail: detail('bilanco', 'Tepkime kütle bilançosu', 'Başlangıç ve son kaplarının terazide karşılaştırıldığı, eksik kütle kutusunu vurgulayan yakın plan.', 'Tepkime öncesi ve sonrası toplam ya da eksik kütle soruluyorsa sistem sınırını çiz ve kütlenin korunumu bilançosunu kur.'),
  },
  {
    key: 'tek', shape: QUADS.tr, zoom: ZOOMS.tr,
    detail: detail('tek-bilesik', 'Tek saf bileşiğin bileşimi', 'Aynı bileşiğin farklı büyüklükte iki örneğinde değişmeyen renk oranını gösteren yakın plan.', 'Tek bir saf bileşiğin farklı miktarları karşılaştırılıyorsa bileşenlerin kütlece oranı ve kütlece yüzdesi sabittir.'),
  },
  {
    key: 'iki', shape: QUADS.bl, zoom: ZOOMS.bl,
    detail: detail('iki-bilesik', 'İki farklı bileşiğin karşılaştırılması', 'Aynı iki elementten kurulu iki farklı tanecik modelinin ortak elementleri hizalanmış yakın planı.', 'Aynı iki elementin farklı bileşikleri verildiyse bir elementin kütlesini eşitle, diğerinin kütlelerini oranla ve sadeleştir.'),
  },
  {
    key: 'denetim', shape: QUADS.br, zoom: ZOOMS.br,
    detail: detail('sonuc-denetimi', 'Sonuç için dört güvenlik kontrolü', 'Birim, oran sırası, artan madde ve toplam kütle için dört işaretli kontrol noktasını gösteren yakın plan.', 'Sonucun birimini, oran sırasını, artan maddenin işaretini ve toplam kütle bilançosunu yeniden kontrol et. İşlem doğru görünse bile fiziksel anlamı sınanmalıdır.'),
  },
]

export function ChemicalLawsDecisionLab({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src={ROOT + '/karar-laboratuvari.jpg'}
      srcSet={ROOT + '/karar-laboratuvari-900.jpg 900w, ' + ROOT + '/karar-laboratuvari.jpg 1536w'}
      alt="Kütlenin korunumu, sabit oran, katlı oran ve sonuç denetimi için karar laboratuvarı levhası."
      activeRegion={activeRegion}
      regions={synthesisRegions}
      markers={makeMarkers([
        ['bilanco', 'Sistem bilançosu', 330], ['tek', 'Tek bileşik', 265], ['iki', 'İki bileşik', 275], ['denetim', 'Sonuç denetimi', 315],
      ])}
    >
      <Badges activeRegion={activeRegion} entries={[
        { key: 'bilanco', x: 385, y: 405, label: 'başlangıç ↔ son', color: '#287d86', width: 335 },
        { key: 'tek', x: 1150, y: 405, label: 'sabit oran', color: '#514080', width: 265 },
        { key: 'iki', x: 385, y: 650, label: 'katlı oran', color: '#a66a21', width: 255 },
        { key: 'denetim', x: 1150, y: 650, label: 'birim · sıra · toplam', color: '#2563a8', width: 365 },
      ]} />
    </InteractiveIllustration>
  )
}
