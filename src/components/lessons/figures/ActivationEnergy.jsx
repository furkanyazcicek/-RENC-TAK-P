import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'enzimsiz',
    zoom: { x: 50, y: 33, scale: 1.2 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/activation-uncatalyzed-collision.jpg',
      title: 'Enzimsiz: yüksek enerji engeli',
      note: 'Enzimsiz tepkime olanaksız değildir. Fakat moleküllerin hem doğru yönde çarpışması hem bağları gerecek kadar enerji taşıması gerekir; az sayıda çarpışma geçiş durumuna ulaştığı için hız düşüktür.',
      alt: 'Rastgele moleküler çarpışmalar içinde yalnız doğru yön ve yeterli enerjiye sahip olanın geçiş durumuna ulaşmasını gösteren sahne.',
    },
    shape: { x: 250, y: 70, width: 1050, height: 500, rx: 180 },
  },
  {
    key: 'enzimli',
    zoom: { x: 50, y: 58, scale: 1.25 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/activation-enzyme-transition.jpg',
      title: 'Enzimli: daha kolay yol',
      note: 'Aktif merkez substratları doğru yönde yaklaştırır, indüklenmiş uyumla bağları gerer ve geçiş durumunu kararlılaştırır. Böylece gereken aktivasyon enerjisi azalır; enzim ürün çıktıktan sonra yeniden kullanılabilir.',
      alt: 'Enzimin substratları hizalayıp geçiş durumunu kararlılaştırarak ürünü oluşturmasını gösteren kataliz döngüsü.',
    },
    shape: { x: 250, y: 430, width: 1050, height: 330, rx: 150 },
  },
  {
    key: 'enerji-farki',
    zoom: { x: 50, y: 65, scale: 1.08 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/activation-delta-g-unchanged.jpg',
      title: 'Başlangıç ve sonuç değişmez',
      note: 'Katalizli ve katalizsiz yol aynı tepkenle başlar, aynı ürünle biter. Enzim yalnız geçiş yolunu kolaylaştırır; tepkimenin net enerji değişimini ve denge konumunu değiştirmez, dengeye ulaşmayı hızlandırır.',
      alt: 'Katalizli ve katalizsiz yolların aynı başlangıç maddeleri ve aynı ürünlere ulaştığını gösteren karşılaştırmalı sahne.',
    },
    shape: [
      { x: 40, y: 470, width: 330, height: 420, rx: 120 },
      { x: 1160, y: 550, width: 335, height: 370, rx: 120 },
    ],
  },
]

const MARKERS = [
  { key: 'enzimsiz', title: 'Enzimsiz yol', x: 105, y: 105, targetX: 770, targetY: 265, width: 285 },
  { key: 'enzimli', title: 'Enzimli yol', x: 105, y: 390, targetX: 770, targetY: 555, width: 265 },
  { key: 'enerji-farki', title: 'Enerji farkı', x: 1160, y: 900, targetX: 1290, targetY: 700, width: 275 },
]

export default function ActivationEnergy({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/aktivasyon-enerjisi-v2.jpg"
      alt="Enzimsiz yüksek ve enzimli düşük aktivasyon enerjisi yollarını aynı başlangıç ve sonuç düzeyleriyle gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
