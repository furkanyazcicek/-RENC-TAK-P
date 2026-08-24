import InteractiveIllustration from './InteractiveIllustration'

const ROOT = '/lesson-assets/kimya-her-yerde'
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
const COLORS = ['#247a79', '#38599a', '#9c5f28', '#6a4c89']

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
    <InteractiveIllustration src={ROOT + '/' + file + '.jpg'} srcSet={ROOT + '/' + file + '-900.jpg 900w, ' + ROOT + '/' + file + '.jpg 1536w'} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers}>
      <>
        {badges.map(({ key, label, width = 290 }, index) => {
          const x = index % 2 === 0 ? 385 : 1150
          const y = index < 2 ? 405 : 650
          const opacity = !activeRegion || activeRegion === key ? 1 : 0.12
          return <g key={key} opacity={opacity}><rect x={x - width / 2} y={y - 38} width={width} height="76" rx="38" fill="#fffdf7" fillOpacity=".93" stroke={COLORS[index]} strokeWidth="3" /><text x={x} y={y + 13} textAnchor="middle" fill={COLORS[index]} fontSize="34" fontWeight="900">{label}</text></g>
        })}
      </>
    </InteractiveIllustration>
  )
}

const cleaningRegions = buildRegions([
  { key: 'iki-uclu', detail: detail('yuzey-aktif-yapi', 'Polar baş ve apolar kuyruğun yönelimi', 'Yüzey aktif taneciklerin su ve yağ arayüzünde farklı uçlarıyla yöneldiği moleküler yakın plan.', 'Polar baş suyla çekim kurarken apolar kuyruk yağlı bölgeye gömülür. Aynı taneciğin iki ortamla etkileşebilmesi temizliğin moleküler anahtarıdır.') },
  { key: 'misel', detail: detail('misel-durulama', 'Yağlı kirin misel içinde taşınması', 'Kir damlacığı çevresinde kuyrukları içe, başları suya dönük yüzey aktif tanecikler ve durulama akışı.', 'Misel yağlı kiri küçük damlacıklara ayırıp suda dağılabilir hâle getirir. Sürtme kirin kopmasına, durulama ise sistemden uzaklaşmasına yardım eder.') },
  { key: 'kisisel', detail: detail('kisisel-temizlik', 'Saç, diş ve cilt için farklı formüller', 'Şampuan, diş macunu, katı ve sıvı sabunun farklı kullanım yüzeyleriyle eşleştirildiği yakın plan.', 'Her ürün hedef yüzeyin pH, hassasiyet ve kir türüne göre formüle edilir. Fazla ürün daha iyi sonuç garantilemez; tahriş ve atık yükünü artırabilir.') },
  { key: 'hijyen', detail: detail('hijyen-maddeleri', 'Ağartıcı ve kireç kaymağında güvenli kullanım', 'Çamaşır suyu ve kireç kaymağını ayrı uygulama alanlarında, eldiven-gözlük ve havalandırmayla gösteren yakın plan.', 'Çamaşır suyu yükseltgen ağartıcı/dezenfektandır; kireç kaymağı bazik hijyen maddesidir. Etiket dozu izlenir ve başka temizlik maddeleriyle karıştırılmaz.') },
])

export function EverydayCleaningSystem({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="temizlik-sistemi" alt="Yüzey aktif yapı, misel, kişisel temizlik ve hijyen maddelerini gösteren bilimsel levha." regions={cleaningRegions} labels={[['iki-uclu', 'İki uçlu yapı'], ['misel', 'Misel · durulama', 320], ['kisisel', 'Kişisel temizlik', 330], ['hijyen', 'Hijyen maddeleri', 330]]} badges={[{ key: 'iki-uclu', label: 'polar + apolar' }, { key: 'misel', label: 'kiri sar · taşı', width: 310 }, { key: 'kisisel', label: 'doğru yüzey' }, { key: 'hijyen', label: 'karıştırma yok', width: 305 }]} />
}

const polymerRegions = buildRegions([
  { key: 'zincir', detail: detail('monomer-polimer', 'Monomerlerden polimer zinciri', 'Aynı küçük moleküler birimlerin bağlanıp uzun ve kıvrımlı bir zincir oluşturduğu yakın plan.', 'Monomerler kimyasal bağlarla art arda bağlanır; zincirde tekrar eden yapı parçası merdir. Zincir uzunluğu ve düzeni malzeme özelliğini etkiler.') },
  { key: 'turler', detail: detail('polimer-turleri', 'Yedi polimerin kullanım portreleri', 'PE, PET, PVC, PS, PTFE, kauçuk ve Kevlar kullanım nesnelerinin malzeme özellikleriyle gösterildiği yakın plan.', 'Ambalaj, lif, boru, köpük, yapışmaz kaplama, lastik ve koruyucu dokuma farklı polimer özelliklerine dayanır; polimerler birbirinin yerine sınırsız kullanılamaz.') },
  { key: 'denge', detail: detail('polimer-yarar-risk', 'Polimerlerde yarar–risk dengesi', 'Hafif tıbbi ambalaj ve yalıtım yararlarıyla tek kullanımlık atık, mikroparçacık ve uygunsuz ısıtma risklerini karşılaştıran yakın plan.', 'Hafiflik ve dayanıklılık enerji/ürün kaybını azaltabilir; aşırı tek kullanım ve yanlış atık çevresel kalıcılığı büyütür. Risk ürün ve kullanım koşuluna özgüdür.') },
  { key: 'dongu', detail: detail('malzeme-dongusu', 'Azaltma, yeniden kullanım ve geri dönüşüm döngüsü', 'Ayrı toplanmış temiz polimerlerin yeniden kullanım ve üretim akışına girdiği yaşam döngüsü yakın planı.', 'Önce gereksiz tüketim azaltılır, sonra güvenli yeniden kullanım düşünülür. Geri dönüşüm için türüne göre ayırma, temizlik ve yerel altyapı gerekir.') },
])

export function EverydayPolymerAtlas({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="polimer-atlasi" alt="Polimerleşme, yaygın polimerler, yarar-risk ve malzeme döngüsünü gösteren bilimsel atlas." regions={polymerRegions} labels={[['zincir', 'Monomer → polimer', 350], ['turler', 'Yaygın polimerler', 350], ['denge', 'Yarar · risk'], ['dongu', 'Malzeme döngüsü', 340]]} badges={[{ key: 'zincir', label: 'mer tekrarı' }, { key: 'turler', label: 'özellik → kullanım', width: 330 }, { key: 'denge', label: 'yaşam döngüsü' }, { key: 'dongu', label: 'azalt · kullan · ayır', width: 355 }]} />
}

const consumerRegions = buildRegions([
  { key: 'kozmetik', detail: detail('kozmetik-etiketi', 'Kozmetik içeriğini ve maruz kalmayı değerlendirme', 'Parfüm, saç boyası, dövme boyası ve jöle yanında içerik sırası, yama testi ve kullanım bölgesini simgeleyen yakın plan.', 'Koku, boya, çözücü ve koruyucular işlev taşır; bazı kişilerde alerji/tahriş yapabilir. Etiket, son kullanım, kullanım bölgesi ve uyarı izlenir.') },
  { key: 'form', detail: detail('ilac-formlari', 'Tablet, şurup, enjeksiyon ve merhem yolları', 'Dört ilaç formunu hedef uygulama bölgeleri ve salım biçimleriyle gösteren tıbbi eğitim yakın planı.', 'Form; etken maddenin kararlılığı, hedef bölge, emilim hızı, dozlama ve hastanın kullanımına göre seçilir. Formlar gelişigüzel birbirine çevrilmez.') },
  { key: 'kullanim', detail: detail('ilac-guvenligi', 'Doğru doz, süre ve ilaç atığı', 'Doz çizelgesi, eczacı danışmanlığı ve kullanılmayan ilacın güvenli toplama kutusuna verilmesini gösteren yakın plan.', 'İlaç paylaşılmaz, önerilen doz ve süre dışına çıkılmaz. Gereksiz kullanım direnç, yan etki, ekonomik kayıp ve çevresel kirlenme oluşturabilir.') },
  { key: 'geri', detail: detail('geri-donusum', 'Kâğıt, cam, metal ve polimer ayrımı', 'Dört temiz malzeme akışının ayrı toplanıp yeni ürün hammaddesine dönüştüğü döngüsel ekonomi yakın planı.', 'Kaynağında temiz ayırma geri kazanım kalitesini yükseltir. Geri dönüşüm enerji ve ham madde baskısını azaltabilir; fakat tüketimi azaltmanın yerini tutmaz.') },
])

export function EverydayConsumerDecisionSystem({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="tuketici-karar-sistemi" alt="Kozmetik, ilaç formları, doğru ilaç kullanımı ve geri dönüşümü gösteren bilimsel karar levhası." regions={consumerRegions} labels={[['kozmetik', 'Kozmetik etiketi', 330], ['form', 'İlaç formları', 320], ['kullanim', 'Doğru kullanım', 320], ['geri', 'Geri dönüşüm', 310]]} badges={[{ key: 'kozmetik', label: 'içerik · temas' }, { key: 'form', label: 'yol · hız · hedef', width: 315 }, { key: 'kullanim', label: 'doz · süre · atık', width: 320 }, { key: 'geri', label: 'temiz ve ayrı' }]} />
}

const foodRegions = buildRegions([
  { key: 'katki', detail: detail('gida-katkilari', 'Katkı maddelerinin farklı işlevleri', 'Koruyucu, renklendirici, emülgatör ve tatlandırıcının farklı gıda modellerindeki etkilerini karşılaştıran yakın plan.', 'Katkı maddeleri aynı işi yapmaz. Kod, maddenin kimliğini düzenler; sağlık değerlendirmesi onaylı doz, tüketim miktarı ve kişisel duyarlılıkla yapılır.') },
  { key: 'islem', detail: detail('pastorizasyon-uht', 'Pastörizasyon ve UHT ısı–süre düzeni', 'Süt akışının iki farklı kontrollü ısıtma ve ambalajlama hattından geçtiği, mikrop yükünün azaldığı yakın plan.', 'Pastörizasyon ve UHT farklı ısı–süre koşulları kullanır. Açılmamış raf ömrünü etkiler; ambalaj açıldıktan sonra etiketin saklama talimatı geçerlidir.') },
  { key: 'etiket', detail: detail('gida-etiketi', 'İçerik, alerjen, tarih ve saklama kanıtları', 'Bir gıda ambalajındaki içerik sırası, tarih, sıcaklık ve alerjen simgelerini büyüteçle inceleyen tüketici yakın planı.', 'Etiket yalnız pazarlama yüzü değildir; içerik sırası, alerjen, üretim/tüketim tarihi, porsiyon ve saklama bilgileri güvenli seçim için birlikte okunur.') },
  { key: 'yag', detail: detail('yenilebilir-yaglar', 'Katı–sıvı yağlar ve işleme terimleri', 'Tereyağı, margarin ve bitkisel sıvı yağlarla mekanik sıkım, rafinasyon, harmanlama ve soğuk süzme süreçlerini gösteren yakın plan.', 'Fiziksel hâl ile üretim terimi ayrı sınıflandırmalardır. Sızma, rafine, riviera ve vinterize sözcükleri yağın işlenme biçimine ilişkin bilgi verir.') },
])

export function EverydayFoodOilAtlas({ activeRegion = null }) {
  return <Plate activeRegion={activeRegion} file="gida-yag-atlasi" alt="Gıda katkıları, pastörizasyon-UHT, etiket okuma ve yenilebilir yağları gösteren bilimsel atlas." regions={foodRegions} labels={[['katki', 'Katkı işlevleri', 325], ['islem', 'Pastörizasyon · UHT', 370], ['etiket', 'Etiketi oku'], ['yag', 'Yenilebilir yağlar', 345]]} badges={[{ key: 'katki', label: 'işlev ≠ hüküm' }, { key: 'islem', label: 'ısı + süre' }, { key: 'etiket', label: 'içerik · tarih', width: 305 }, { key: 'yag', label: 'hâl + işleme', width: 295 }]} />
}
