import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  { key: 'kalsiyum', zoom: { x: 18, y: 38, scale: 1.55 }, shape: { x: 0, y: 0, width: 430, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/kalsiyum-ekzositoz.jpg', title: 'Ca²⁺ ile ekzositoz', alt: 'Aksiyon potansiyelinin kalsiyum kanallarını açıp vezikül kaynaşmasını başlatması.', note: 'İmpuls presinaptik uca ulaşınca voltaj kapılı Ca²⁺ kanalları açılır. İçeri giren Ca²⁺, veziküllerin zarla kaynaşmasını ve nörotransmitterin ekzositozla salınmasını başlatır.' } },
  { key: 'reseptor', zoom: { x: 43, y: 62, scale: 1.55 }, shape: { x: 430, y: 0, width: 360, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/epsp-ipsp.jpg', title: 'EPSP ve IPSP', alt: 'Uyarıcı ve baskılayıcı postsinaptik potansiyelleri karşılaştıran zar ayrıntısı.', note: 'Reseptörün açtığı iyon yolu belirleyicidir. Pozitif iyon girişi çoğunlukla EPSP, Cl⁻ girişi veya K⁺ çıkışı IPSP üretir. Bunlar yerel ve derecelidir; aksiyon potansiyeli değildir.' } },
  { key: 'sonlandirma', zoom: { x: 67, y: 53, scale: 1.55 }, shape: { x: 790, y: 0, width: 360, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/norotransmitter-sonlandirma.jpg', title: 'Sinyalin sonlandırılması', alt: 'Nörotransmitterin enzim, geri alım ve difüzyonla sinaptik aralıktan temizlenmesi.', note: 'İleti sürekli kalmamalıdır. Nörotransmitter enzimle parçalanır, taşıyıcıyla presinaptik uca geri alınır veya difüzyon ve glia desteğiyle uzaklaştırılır.' } },
  { key: 'toplanma', zoom: { x: 87, y: 55, scale: 1.55 }, shape: { x: 1150, y: 0, width: 386, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/toplanma-esik.jpg', title: 'Uzaysal ve zamansal toplanma', alt: 'Bir nöronda farklı uyarıcı ve baskılayıcı girdilerin akson tepeciğinde toplanması.', note: 'Farklı sinapsların aynı anda etkisi uzaysal, aynı sinapsın sık aralıklarla etkisi zamansal toplanmadır. Akson tepeciğindeki net toplam eşiği aşarsa impuls başlar.' } },
]
const MARKERS = [
  { key: 'kalsiyum', title: 'Ca²⁺ · vezikül', x: 70, y: 82, targetX: 250, targetY: 350, width: 280 },
  { key: 'reseptor', title: 'EPSP · IPSP', x: 460, y: 944, targetX: 610, targetY: 690, width: 260 },
  { key: 'sonlandirma', title: 'Sonlandırma', x: 850, y: 82, targetX: 980, targetY: 535, width: 265 },
  { key: 'toplanma', title: 'Toplanma', x: 1235, y: 944, targetX: 1370, targetY: 600, width: 230 },
]
export default function ChemicalSynapse({ activeRegion = null }) {
  return <InteractiveIllustration src="/lesson-assets/sinir-sistemi/sinaps-v1.jpg" srcSet="/lesson-assets/sinir-sistemi/sinaps-v1-900.jpg 900w, /lesson-assets/sinir-sistemi/sinaps-v1.jpg 1536w" alt="Kimyasal sinapsta nörotransmitter salınması, uyarılma, baskılanma ve toplanmayı gösteren bilimsel levha." activeRegion={activeRegion} regions={REGIONS} markers={MARKERS} />
}
