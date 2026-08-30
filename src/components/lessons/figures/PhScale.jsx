import InteractiveIllustration from './InteractiveIllustration'

const REGIONS = [
  {
    key: 'asit',
    zoom: { x: 25, y: 48, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/ph-acid-logarithmic.jpg',
      title: 'Asidik bölge',
      note: 'pH doğrusal değildir. Değer bir birim düştüğünde H⁺ derişimi 10 kat artar; protein yan grupları proton alabilir ve aktif merkezin yük dağılımı değişebilir.',
      alt: 'Komşu iki pH düzeyinde hidrojen iyonu sayısının on kat değişmesini ve proteinin protonlanmasını gösteren sahne.',
    },
    shape: { x: 45, y: 300, width: 650, height: 480, rx: 90 },
  },
  {
    key: 'notr',
    zoom: { x: 50, y: 48, scale: 1.55 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/ph-neutral-buffer.jpg',
      title: 'Nötr eşik',
      note: 'Saf suda pH 7’de H⁺ ve OH⁻ derişimleri eşittir. Kan ise tam nötr değildir; bikarbonat gibi tamponlar eklenen H⁺’ı bağlayarak pH’ı yaklaşık 7,4 çevresinde dar aralıkta tutar.',
      alt: 'Suda eşit iyon dengesini ve kanda bikarbonat tamponunun eklenen asidi yakalamasını gösteren sahne.',
    },
    shape: { x: 650, y: 280, width: 260, height: 520, rx: 90 },
  },
  {
    key: 'baz',
    zoom: { x: 76, y: 48, scale: 1.35 },
    detail: {
      src: '/lesson-assets/temel-bilesenler/details/ph-base-protonation.jpg',
      title: 'Bazik bölge',
      note: 'pH yükseldikçe H⁺ azalır, OH⁻ göreli olarak artar. Protein yan gruplarının proton kaybetmesi iyonik bağları ve aktif merkez geometrisini değiştirebilir; aşırı bazik ortam da enzimi bozabilir.',
      alt: 'Bazik çözeltide hidroksit fazlalığını ve proton kaybeden protein aktif merkezinin biçim değiştirmesini gösteren sahne.',
    },
    shape: { x: 860, y: 280, width: 635, height: 520, rx: 90 },
  },
]

const MARKERS = [
  { key: 'asit', title: 'Asidik', x: 120, y: 120, targetX: 330, targetY: 390, width: 205 },
  { key: 'notr', title: 'Nötr', x: 655, y: 120, targetX: 770, targetY: 390, width: 185 },
  { key: 'baz', title: 'Bazik', x: 1160, y: 120, targetX: 1220, targetY: 390, width: 190 },
]

export default function PhScale({ activeRegion = null }) {
  return (
    <InteractiveIllustration
      src="/lesson-assets/temel-bilesenler/ph-skalasi-v2.jpg"
      alt="Asidikten baziğe uzanan renk şeridi ve biyolojik pH örneklerini gösteren bilimsel illüstrasyon."
      activeRegion={activeRegion}
      regions={REGIONS}
      markers={MARKERS}
    />
  )
}
