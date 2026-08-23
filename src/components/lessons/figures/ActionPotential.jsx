import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  { key: 'dinlenim', zoom: { x: 14, y: 48, scale: 1.55 }, shape: { x: 0, y: 0, width: 385, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/dinlenim-potansiyeli.jpg', title: 'Dinlenim potansiyeli', alt: 'Nöron zarında iyon dağılımı, sızıntı kanalları ve sodyum potasyum pompası.', note: 'Dinlenimde hücre içi negatiftir. Bunun başlıca anlık nedeni K⁺ sızıntısı ve seçici geçirgenliktir; Na⁺/K⁺ pompası ise 3 Na⁺ dışarı, 2 K⁺ içeri taşıyarak gradyanları uzun vadede korur.' } },
  { key: 'depolarizasyon', zoom: { x: 40, y: 48, scale: 1.55 }, shape: { x: 385, y: 0, width: 385, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/esik-depolarizasyon.jpg', title: 'Eşik ve depolarizasyon', alt: 'Eşik altı uyarı ile eşik üstü uyarının voltaj kapılı sodyum kanallarına etkisi.', note: 'Eşik aşılınca voltaj kapılı Na⁺ kanalları pozitif geri bildirimle açılır ve Na⁺ hücreye girer. Eşik altı değişim söner; eşik üstünde oluşan impuls hep aynı genliktedir.' } },
  { key: 'repolarizasyon', zoom: { x: 65, y: 48, scale: 1.55 }, shape: { x: 770, y: 0, width: 385, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/repolarizasyon-refrakter.jpg', title: 'Repolarizasyon ve refrakter dönem', alt: 'Sodyum kanal inaktivasyonu, potasyum çıkışı ve refrakter dönemleri gösteren zar şeridi.', note: 'Na⁺ kanalları inaktive olur, gecikmeli K⁺ kanalları açılır ve K⁺ çıkışı zarı yeniden negatif yapar. Kısa hiperpolarizasyon ile mutlak–göreli refrakter dönem geri iletimi ve aşırı frekansı sınırlar.' } },
  { key: 'iletim', zoom: { x: 88, y: 48, scale: 1.55 }, shape: { x: 1155, y: 0, width: 381, height: 1024 }, detail: { src: '/lesson-assets/sinir-sistemi/details/iletim-hizi-frekans.jpg', title: 'İletim hızı ve frekans kodu', alt: 'Miyelinli ve miyelinsiz akson ile zayıf ve güçlü uyarıların impuls sıklığını karşılaştıran sahne.', note: 'Çap ve miyelin iletim hızını artırır. Güçlü uyarı aynı nöronda impuls genliğini ya da hızını büyütmez; birim zamandaki impuls sayısını ve devreye katılan nöron sayısını artırır.' } },
]
const MARKERS = [
  { key: 'dinlenim', title: 'Dinlenim', x: 70, y: 78, targetX: 205, targetY: 500, width: 220 },
  { key: 'depolarizasyon', title: 'Depolarizasyon', x: 455, y: 944, targetX: 585, targetY: 500, width: 300 },
  { key: 'repolarizasyon', title: 'Repolarizasyon', x: 840, y: 78, targetX: 970, targetY: 500, width: 305 },
  { key: 'iletim', title: 'İletim kodu', x: 1230, y: 944, targetX: 1370, targetY: 500, width: 260 },
]
export default function ActionPotential({ activeRegion = null }) {
  return <InteractiveIllustration src="/lesson-assets/sinir-sistemi/aksiyon-potansiyeli-v1.jpg" srcSet="/lesson-assets/sinir-sistemi/aksiyon-potansiyeli-v1-900.jpg 900w, /lesson-assets/sinir-sistemi/aksiyon-potansiyeli-v1.jpg 1536w" alt="Dinlenimden depolarizasyon, repolarizasyon ve sıçrayıcı iletime aksiyon potansiyeli levhası." activeRegion={activeRegion} regions={REGIONS} markers={MARKERS} />
}
