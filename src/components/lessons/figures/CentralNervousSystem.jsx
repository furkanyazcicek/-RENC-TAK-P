import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  { key: 'korteks', zoom: { x: 17, y: 42, scale: 1.55 }, shape: { x: 0, y: 0, width: 395, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/beyin-kabugu-loblar.jpg', title: 'Beyin kabuğu ve loblar', alt: 'Beyin lobları, korteks, ak madde, nasırlı cisim ve çapraz vücut kontrolü.', note: 'Korteks dıştaki boz maddedir; altındaki ak madde lifleri bölgeleri bağlar. Frontal, parietal, temporal ve oksipital loblar farklı işlevlerde uzmanlaşır; motor ve duyu yollarının çoğu çapraz kontrol gösterir.' } },
  { key: 'ara-beyin', zoom: { x: 42, y: 45, scale: 1.55 }, shape: { x: 395, y: 0, width: 375, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/talamus-hipotalamus.jpg', title: 'Talamus ve hipotalamus', alt: 'Duyu yollarının talamusa, homeostazi ve hipofiz kontrolünün hipotalamusa bağlanması.', note: 'Talamus koku dışındaki duyuların çoğunu kortekse yönlendiren aktarma merkezidir. Hipotalamus sıcaklık, açlık, susama, osmotik denge ve otonom yanıtları düzenler; hipofiz üzerinden endokrin sistemi bağlar.' } },
  { key: 'beyin-sapi', zoom: { x: 66, y: 55, scale: 1.55 }, shape: { x: 770, y: 0, width: 380, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/beyincik-beyin-sapi.jpg', title: 'Beyincik ve beyin sapı', alt: 'Beyinciğin hareket düzeltmesi ile beyin sapının yaşamsal merkezlerini gösteren sagittal anatomi.', note: 'Beyincik denge, kas tonusu ve hareketin zamanlanmasını karşılaştırma–düzeltme yoluyla koordine eder. Beyin sapı solunum, kalp-damar, yutma ve öksürme gibi yaşamsal refleksleri barındırır.' } },
  { key: 'omurilik', zoom: { x: 87, y: 55, scale: 1.55 }, shape: { x: 1150, y: 0, width: 386, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/omurilik-kokler.jpg', title: 'Omurilik ve kökler', alt: 'Omurilik boz ve ak maddesi ile arka duyu ve ön motor köklerinin kesiti.', note: 'Omurilikte boz madde içte kelebek biçiminde, ak madde dıştadır. Duyu nöronu arka kökten ve gangliondan girer; motor nöron ön kökten çıkar. Ak madde çıkan–inen yolları taşır.' } },
]
const MARKERS = [
  { key: 'korteks', title: 'Korteks', x: 70, y: 82, targetX: 230, targetY: 350, width: 210 },
  { key: 'ara-beyin', title: 'Ara beyin', x: 455, y: 944, targetX: 600, targetY: 490, width: 230 },
  { key: 'beyin-sapi', title: 'Beyincik · sap', x: 845, y: 82, targetX: 980, targetY: 600, width: 290 },
  { key: 'omurilik', title: 'Omurilik', x: 1235, y: 944, targetX: 1370, targetY: 560, width: 225 },
]
export default function CentralNervousSystem({ activeRegion = null }) {
  return <InteractiveIllustration src="/lesson-assets/sinir-sistemi/merkezi-sinir-v1.jpg" srcSet="/lesson-assets/sinir-sistemi/merkezi-sinir-v1-900.jpg 900w, /lesson-assets/sinir-sistemi/merkezi-sinir-v1.jpg 1536w" alt="Beyin yarım küreleri, ara beyin, beyincik, beyin sapı ve omuriliği gösteren merkezi sinir sistemi levhası." activeRegion={activeRegion} regions={REGIONS} markers={MARKERS} />
}
