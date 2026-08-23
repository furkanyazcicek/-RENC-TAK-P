import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'basit-difuzyon',
    zoom: { x: 26, y: 50, scale: 1.7 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/nonpolar-diffusion.jpg',
      title: 'Basit difüzyon',
      alt: 'Küçük kutupsuz moleküllerin lipit kuyruklarında çözünüp protein kullanmadan zarın karşı tarafına geçmesini gösteren mekanizma.',
      note: 'O₂ ve CO₂ zarı delmez; kutupsuz oldukları için önce kuyruk bölgesinde çözünür, sonra öbür yüzdeki suya çıkar. Yol boyunca bağlanacak protein olmadığı için özgüllük ve doygunluk oluşmaz.',
    },
    shape: { x: 20, y: 40, width: 700, height: 880, rx: 60 },
  },
  {
    key: 'kolaylastirilmis',
    zoom: { x: 76, y: 50, scale: 1.7 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/carrier-conformation.jpg',
      title: 'Kolaylaştırılmış difüzyon',
      alt: 'Taşıyıcı proteinin özgül molekülü bağlayıp şekil değiştirerek derişimin az olduğu tarafa bırakmasını gösteren üç aşama.',
      note: '“Kolaylaştırılmış” sözcüğü proteinin yolu kolaylaştırdığını söyler; hücrenin enerji verdiğini değil. Taşıyıcı döner, fakat net hareketi belirleyen hâlâ derişim farkıdır.',
    },
    shape: { x: 720, y: 40, width: 700, height: 880, rx: 60 },
  },
  {
    key: 'atp-yok',
    zoom: { x: 50, y: 30, scale: 1.55 },
    detail: {
      src: '/lesson-assets/hucre-zari/details/gradient-brownian.jpg',
      title: 'İtici güç: derişim farkı',
      alt: 'Moleküllerin rastgele hareket ederken çok yoğun bölgeden seyrek bölgeye doğru net akış oluşturmasını gösteren açıklayıcı sahne.',
      note: 'Moleküller iki yönde de rastgele hareket eder; fakat yoğun tarafta daha çok molekül bulunduğu için karşıya geçenlerin sayısı daha fazladır. Net akış dengeye kadar sürer, hücre ATP harcamaz.',
    },
    shape: { x: 70, y: 55, width: 1300, height: 280, rx: 80 },
  },
]

const MARKERS = [
  { key: 'basit-difuzyon', title: 'Doğrudan yol', x: 160, y: 830, targetX: 355, targetY: 520, width: 270 },
  { key: 'kolaylastirilmis', title: 'Proteinli yol', x: 925, y: 830, targetX: 1045, targetY: 520, width: 270 },
  { key: 'atp-yok', title: 'ATP yok', x: 650, y: 120, targetX: 720, targetY: 250, width: 205 },
]

export default function PassiveTransport({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/hucre-zari/passive-transport-v1.jpg"
      srcSet="/lesson-assets/hucre-zari/passive-transport-v1-900.jpg 900w, /lesson-assets/hucre-zari/passive-transport-v1.jpg 1440w"
      alt="Solda küçük kutupsuz moleküllerin doğrudan lipit tabakadan, sağda kutuplu moleküllerin kanal ve taşıyıcı proteinlerden çoktan aza geçişini gösteren karşılaştırma."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
      width={1440}
      height={960}
    />
  )
}
