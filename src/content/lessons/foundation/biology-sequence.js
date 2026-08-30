/**
 * Temel biyoloji notlarının üretim sırası.
 * TYT bilgi tabanı tamamlandıktan sonra AYT sistemleri ve süreçleri gelir.
 * `topic` alanları müfredat grafiğiyle birebir aynıdır.
 */
export const BIOLOGY_FOUNDATION_SEQUENCE = Object.freeze([
  { examType: 'TYT', topic: 'Canlıların Ortak Özellikleri', slug: 'canlilarin-ortak-ozellikleri-temel' },
  { examType: 'TYT', topic: 'Canlıların Temel Bileşenleri', slug: 'canlilarin-temel-bilesenleri-temel' },
  { examType: 'TYT', topic: 'Hücre', slug: 'hucre-temel' },
  { examType: 'TYT', topic: 'Canlıların Sınıflandırılması', slug: 'canlilarin-siniflandirilmasi-temel' },
  { examType: 'TYT', topic: 'Hücre Bölünmeleri', slug: 'hucre-bolunmeleri-temel' },
  { examType: 'TYT', topic: 'Kalıtım', slug: 'kalitim-temel' },
  { examType: 'TYT', topic: 'Ekosistem Ekolojisi', slug: 'ekosistem-ekolojisi-temel' },
  { examType: 'AYT', topic: 'Sinir Sistemi', slug: 'sinir-sistemi-temel' },
  { examType: 'AYT', topic: 'Endokrin Sistem ve Hormonlar', slug: 'endokrin-sistem-temel' },
  { examType: 'AYT', topic: 'Duyu Organları', slug: 'duyu-organlari-temel' },
  { examType: 'AYT', topic: 'Destek ve Hareket Sistemi', slug: 'destek-hareket-sistemi-temel' },
  { examType: 'AYT', topic: 'Sindirim Sistemi', slug: 'sindirim-sistemi-temel' },
  { examType: 'AYT', topic: 'Dolaşım ve Bağışıklık Sistemi', slug: 'dolasim-bagisiklik-sistemi-temel' },
  { examType: 'AYT', topic: 'Solunum Sistemi', slug: 'solunum-sistemi-temel' },
  { examType: 'AYT', topic: 'Üriner Sistem', slug: 'uriner-sistem-temel' },
  { examType: 'AYT', topic: 'Üreme Sistemi ve Embriyonik Gelişim', slug: 'ureme-sistemi-embriyonik-gelisim-temel' },
  { examType: 'AYT', topic: 'Genden Proteine', slug: 'genden-proteine-temel' },
  { examType: 'AYT', topic: 'Komünite ve Popülasyon Ekolojisi', slug: 'komunite-populasyon-ekolojisi-temel' },
  { examType: 'AYT', topic: 'Canlılarda Enerji Dönüşümleri (Fotosentez - Kemosentez)', slug: 'enerji-donusumleri-temel' },
  { examType: 'AYT', topic: 'Bitki Biyolojisi', slug: 'bitki-biyolojisi-temel' },
  { examType: 'AYT', topic: 'Canlılar ve Çevre', slug: 'canlilar-ve-cevre-temel' },
])

export function biologyFoundationProgress(lessons) {
  const published = new Set(lessons.filter((lesson) => lesson.learningMode === 'foundation').map((lesson) => lesson.slug))
  return BIOLOGY_FOUNDATION_SEQUENCE.map((item, index) => ({
    ...item,
    sequence: index + 1,
    status: published.has(item.slug) ? 'complete' : 'pending',
  }))
}

