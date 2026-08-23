import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'polarlik',
    zoom: { x: 25, y: 48, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/water-polarity-electron-density.jpg',
      title: 'Kutupluluk ve 104,5° açı',
      note: 'Oksijen bağ elektronlarını daha güçlü çeker; elektron yoğunluğu oksijen tarafında artar. Molekülün açılı geometrisi bu iki bağ kutbunun birbirini götürmesini engeller ve net dipol oluşturur.',
      alt: 'Açılı su molekülünde elektron yoğunluğunun oksijene kaymasını ve kısmi yüklerin oluşmasını gösteren mekanizma sahnesi.',
    },
    shape: { x: 40, y: 210, width: 650, height: 620, rx: 220 },
  },
  {
    key: 'hidrojen-bagi',
    zoom: { x: 74, y: 50, scale: 1.3 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/water-hbond-network.jpg',
      title: 'Moleküller arası hidrojen bağı',
      note: 'Bir suyun kısmi pozitif hidrojeni, komşu suyun kısmi negatif oksijenine çekilir. Tek bağ zayıftır; sürekli kurulup bozulan ağ birlikte kohezyon, yüzey gerilimi ve yüksek özgül ısı gibi özellikleri doğurur.',
      alt: 'Su molekülleri arasında sürekli kurulup bozulan hidrojen bağı ağını ve yüzey kohezyonunu gösteren mekanizma sahnesi.',
    },
    shape: { x: 700, y: 80, width: 790, height: 880, rx: 260 },
  },
]

const MARKERS = [
  { key: 'polarlik', title: 'Kutupluluk', x: 120, y: 120, targetX: 365, targetY: 455, width: 230 },
  { key: 'hidrojen-bagi', title: 'Hidrojen bağı', x: 920, y: 120, targetX: 1080, targetY: 500, width: 280 },
]

export default function WaterPolarity({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/su-polarlik-v2.jpg"
      alt="Solda açılı tek su molekülü, sağda hidrojen bağlarıyla bağlanan su moleküllerini gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
