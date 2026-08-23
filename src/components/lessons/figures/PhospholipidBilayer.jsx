import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'bas',
    zoom: { x: 18, y: 24, scale: 1.55 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/phospholipid-head-hydration.jpg',
      title: 'Hidrofilik fosfat başı',
      note: 'Yüklü ve polar başın çevresinde su molekülleri yönlenerek hidrasyon kabuğu kurar. Bu enerji açısından elverişli etkileşim, başların hücre içi ve dışındaki suya dönük kalmasını sağlar.',
      alt: 'Polar fosfolipit başı çevresinde yönlenmiş su moleküllerinden oluşan hidrasyon kabuğunu gösteren sahne.',
    },
    shape: { type: 'circle', cx: 285, cy: 230, r: 190 },
  },
  {
    key: 'kuyruk',
    zoom: { x: 18, y: 63, scale: 1.45 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/phospholipid-tail-hydrophobic.jpg',
      title: 'Hidrofobik yağ asidi kuyrukları',
      note: 'Kutupsuz kuyruklar suyla hidrojen bağı kuramaz. Bir araya toplanmaları, çevredeki suyun düzenli kafeslerini azaltır ve çift tabakanın hidrofobik çekirdeğini oluşturur; doymamış kıvrımlar paketlenmeyi gevşetir.',
      alt: 'Kutupsuz kuyrukların sudan kaçıp kümelenmesini ve doymamış kıvrımın paketlenmeye etkisini gösteren sahne.',
    },
    shape: { x: 120, y: 310, width: 380, height: 620, rx: 140 },
  },
  {
    key: 'cift-tabaka',
    zoom: { x: 72, y: 52, scale: 1.22 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/bilayer-self-assembly.jpg',
      title: 'Fosfolipit çift tabaka',
      note: 'Suda başlar dışa, kuyruklar içe dönerek kendiliğinden çift tabaka kurar. Açık kenar suya hidrofobik yüzey gösterdiği için kapanır; bu nedenle zar küçük yırtıkları kendi kendine mühürleyebilir.',
      alt: 'Dağınık fosfolipitlerin çift tabaka ve kapalı kesecik oluşturmasını, açık kenarın kendiliğinden kapanmasını gösteren sahne.',
    },
    shape: { x: 520, y: 120, width: 970, height: 790, rx: 120 },
  },
]

const MARKERS = [
  { key: 'bas', title: 'Kutuplu baş', x: 105, y: 105, targetX: 285, targetY: 225, width: 255 },
  { key: 'kuyruk', title: 'Kutupsuz kuyruk', x: 105, y: 900, targetX: 300, targetY: 610, width: 310 },
  { key: 'cift-tabaka', title: 'Çift tabaka', x: 940, y: 105, targetX: 1030, targetY: 520, width: 250 },
]

export default function PhospholipidBilayer({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/fosfolipit-cift-tabaka-v2.jpg"
      alt="Tek fosfolipit molekülünü ve su içinde oluşturduğu çift tabakayı gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
