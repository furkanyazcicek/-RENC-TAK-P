import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  { key: 'refleks', zoom: { x: 16, y: 48, scale: 1.55 }, shape: { x: 0, y: 0, width: 390, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/refleks-yayi.jpg', title: 'Refleks yayı', alt: 'Sıcak uyarısında reseptör, duyu nöronu, omurilik, motor nöron ve kas yolunu gösteren refleks yayı.', note: 'Uyarı reseptörde dönüştürülür, duyu nöronu arka kökten omuriliğe girer, ara nöron motor nöronu etkinleştirir ve ön kökten çıkan impuls efektör kası kasarak eli çeker.' } },
  { key: 'somatik-otonom', zoom: { x: 42, y: 50, scale: 1.55 }, shape: { x: 390, y: 0, width: 380, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/somatik-otonom.jpg', title: 'Somatik ve otonom motor yol', alt: 'Tek nöronlu somatik yol ile ganglionlu iki nöronlu otonom yolu karşılaştıran sahne.', note: 'Somatik motor yol MSS’den iskelet kasına tek nöronla gider. Otonom yol iki nöron ve aradaki ganglionla düz kasa, kalp kasına ya da bezlere ulaşır.' } },
  { key: 'sempatik-parasempatik', zoom: { x: 67, y: 50, scale: 1.55 }, shape: { x: 770, y: 0, width: 380, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/sempatik-parasempatik.jpg', title: 'Sempatik ve parasempatik denge', alt: 'İki otonom bölümün göz, kalp, bronş, sindirim ve mesane üzerindeki karşıt etkileri.', note: 'Sempatik sistem tehlike ve etkinlikte kalbi hızlandırıp sindirimi baskılar; parasempatik sistem dinlenme ve sindirimde ters yönde denge kurar. Organ etkisi kullanılan reseptöre göre belirlenir.' } },
  { key: 'bilinc', zoom: { x: 87, y: 48, scale: 1.55 }, shape: { x: 1150, y: 0, width: 386, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/refleks-bilincli-algi.jpg', title: 'Refleks önce, bilinçli algı sonra', alt: 'Omurilikte hızlı motor yanıt ve beyin korteksine çıkan ağrı yolunu birlikte gösteren sahne.', note: 'Omurilik motor yanıtı başlatırken duyu bilgisi aynı anda çıkan yollarla talamus ve kortekse taşınır. Elin çekilmesi bilinçli ağrı algısından önce olabilir; beyin olaydan habersiz kalmaz.' } },
]
const MARKERS = [
  { key: 'refleks', title: 'Refleks yayı', x: 70, y: 82, targetX: 220, targetY: 500, width: 250 },
  { key: 'somatik-otonom', title: 'Somatik · otonom', x: 450, y: 944, targetX: 590, targetY: 500, width: 315 },
  { key: 'sempatik-parasempatik', title: 'Sempatik · parasempatik', x: 835, y: 82, targetX: 970, targetY: 500, width: 370 },
  { key: 'bilinc', title: 'Bilinçli algı', x: 1230, y: 944, targetX: 1370, targetY: 500, width: 260 },
]
export default function PeripheralReflex({ activeRegion = null }) {
  return <InteractiveIllustration src="/lesson-assets/sinir-sistemi/refleks-cevresel-v1.jpg" srcSet="/lesson-assets/sinir-sistemi/refleks-cevresel-v1-900.jpg 900w, /lesson-assets/sinir-sistemi/refleks-cevresel-v1.jpg 1536w" alt="Çevresel sinir sistemi, somatik ve otonom yollar ile refleks yayını gösteren bilimsel levha." activeRegion={activeRegion} regions={REGIONS} markers={MARKERS} />
}
