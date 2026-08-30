import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  { key: 'dendrit-soma', zoom: { x: 18, y: 46, scale: 1.55 }, shape: { x: 0, y: 0, width: 390, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/dendrit-soma-butunlesme.jpg', title: 'Dendrit ve soma bütünleşmesi', alt: 'Dendritlerden gelen uyarıların hücre gövdesinde birleşmesini gösteren nöron ayrıntısı.', note: 'Dendritler çok sayıda sinaptik girdiyi alır; soma bu dereceli değişimleri toplar. Toplam etki akson tepeciğinde eşiğe ulaşırsa aksiyon potansiyeli başlar.' } },
  { key: 'akson', zoom: { x: 42, y: 48, scale: 1.5 }, shape: { x: 390, y: 0, width: 370, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/aksonal-tasima.jpg', title: 'Aksonal taşıma', alt: 'Mikrotübüller boyunca iki yönlü organel ve vezikül taşınmasını gösteren akson kesiti.', note: 'Akson yalnız impuls ileten bir kablo değildir. Kinesin gövdeden uca, dinein uçtan gövdeye doğru vezikül ve organel taşır; bu trafik ATP harcar.' } },
  { key: 'miyelin', zoom: { x: 67, y: 48, scale: 1.5 }, shape: { x: 760, y: 0, width: 390, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/miyelin-ranvier.jpg', title: 'Miyelin ve Ranvier düğümü', alt: 'Miyelinsiz sürekli iletim ile miyelinli sıçrayıcı iletimi karşılaştıran sinir lifi.', note: 'Miyelin akson zarından iyon kaçağını azaltır. Aksiyon potansiyeli Ranvier düğümlerinde yenilendiği için iletim düğümden düğüme sıçrar ve hızlanır.' } },
  { key: 'glia', zoom: { x: 87, y: 48, scale: 1.52 }, shape: { x: 1150, y: 0, width: 386, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/glia-gorevleri.jpg', title: 'Gliaların aktif desteği', alt: 'Astrosit, oligodendrosit ve mikroglianın nöron çevresindeki görevlerini gösteren sinir dokusu.', note: 'Glialar yalnız dolgu değildir: miyelin oluşturur, iyon ve nörotransmitter dengesini düzenler, kan-beyin bariyerine katkı verir ve bağışıklık temizliği yapar.' } },
]

const MARKERS = [
  { key: 'dendrit-soma', title: 'Dendrit · soma', x: 68, y: 82, targetX: 220, targetY: 460, width: 285 },
  { key: 'akson', title: 'Akson', x: 455, y: 944, targetX: 585, targetY: 515, width: 205 },
  { key: 'miyelin', title: 'Miyelin', x: 845, y: 82, targetX: 955, targetY: 480, width: 220 },
  { key: 'glia', title: 'Glia', x: 1230, y: 944, targetX: 1365, targetY: 505, width: 190 },
]

export default function NeuronGlia({ activeRegion = null }) {
  return <InteractiveIllustration src="/lesson-assets/sinir-sistemi/noron-glia-v1.jpg" srcSet="/lesson-assets/sinir-sistemi/noron-glia-v1-900.jpg 900w, /lesson-assets/sinir-sistemi/noron-glia-v1.jpg 1536w" alt="Nöronun dendrit, gövde, akson ve miyelin yapısını glia hücreleriyle birlikte gösteren bilimsel levha." activeRegion={activeRegion} regions={REGIONS} markers={MARKERS} />
}
