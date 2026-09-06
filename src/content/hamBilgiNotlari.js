/**
 * HAM BİLGİ NOTLARI DEFTERİ  (otomatik üretilir — elle düzenlemeyin)
 * ==================================================================
 *
 * Her etkileşimli ders notunun yanında duran, yazdırılabilir PDF
 * çalışma notudur. Dosyalar `public/kutuphane-notlari/` altında
 * durur ve siteyle birlikte yayına gider; kütüphane bu defterden
 * hangi konuda hangi notun olduğunu öğrenir.
 *
 * Yeniden üretmek için:  python3 scripts/ham-bilgi/uret.py
 */

export const HAM_BILGI_NOTLARI = [
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Canlıların Ortak Özellikleri",
    "baslik": "Canlıların Ortak Özellikleri",
    "ozet": "Ham bilgi notu — canlılık ölçütleri, virüsler ve organizasyon basamakları; ÖSYM tuzakları ve 40 soruluk çalışma fasikülü",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/canlilarin-ortak-ozellikleri.pdf",
    "sayfa": 14,
    "boyutKB": 109
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Canlıların Sınıflandırılması",
    "baslik": "Canlıların Sınıflandırılması",
    "ozet": "Ham bilgi notu — sınıflandırma ölçütleri, taksonomik birimler ve altı âlemin tam dökümü; 40 soruluk çalışma fasikülü",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/canlilarin-siniflandirilmasi.pdf",
    "sayfa": 13,
    "boyutKB": 98
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Canlıların Temel Bileşenleri",
    "baslik": "Canlıların Temel Bileşenleri",
    "ozet": "Ham bilgi notu — inorganik ve organik bileşikler, enzimler, nükleik asitler ve ATP; grafik yorumu ve 45 soruluk fasikül",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/canlilarin-temel-bilesenleri.pdf",
    "sayfa": 14,
    "boyutKB": 113
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Ekosistem Ekolojisi",
    "baslik": "Ekosistem Ekolojisi",
    "ozet": "Ham bilgi notu — ekosistem bileşenleri, besin zinciri, enerji akışı, madde döngüleri ve popülasyon; 45 soruluk çalışma fasikülü",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/ekosistem-ekolojisi.pdf",
    "sayfa": 12,
    "boyutKB": 103
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Hücre Bölünmeleri",
    "baslik": "Hücre Bölünmeleri",
    "ozet": "Ham bilgi notu — hücre döngüsü, mitoz, mayoz ve üreme; kromozom-DNA grafikleri ve 45 soruluk çalışma fasikülü",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/hucre-bolunmeleri.pdf",
    "sayfa": 12,
    "boyutKB": 103
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Hücre",
    "baslik": "Hücre",
    "ozet": "Ham bilgi notu — hücre zarı ve madde geçişleri, organeller, çekirdek; osmoz grafikleri ve 50 soruluk çalışma fasikülü",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/hucre.pdf",
    "sayfa": 14,
    "boyutKB": 109
  },
  {
    "sinav": "TYT",
    "ders": "Biyoloji",
    "konu": "Kalıtım",
    "baslik": "Kalıtım",
    "ozet": "Ham bilgi notu — Mendel ilkeleri, çaprazlama teknikleri, kan grupları, eşeye bağlı kalıtım ve soy ağacı; 45 soruluk fasikül",
    "dosya": "/kutuphane-notlari/tyt-biyoloji/kalitim.pdf",
    "sayfa": 12,
    "boyutKB": 92
  }
]

/** Bir konunun ham bilgi notunu döndürür; yoksa null. */
export function hamBilgiNotuBul({ examType, subject, topic }) {
  return (
    HAM_BILGI_NOTLARI.find(
      (kayit) =>
        kayit.sinav === examType &&
        kayit.ders === subject &&
        kayit.konu === topic,
    ) ?? null
  )
}

export default HAM_BILGI_NOTLARI
