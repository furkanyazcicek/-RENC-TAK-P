/**
 * MEB 2018 Matematik Dersi Öğretim Programı, 8. sınıf, matematik başlıkları.
 * Metinler resmî kazanımların özgün kısa özetleridir; birebir alıntı değildir.
 * Geometri kazanımları kütüphanedeki ayrı Geometri alanına aittir.
 * https://mufredat.meb.gov.tr/Dosyalar/201813017165445-MATEMAT%C4%B0K%20%C3%96%C4%9ERET%C4%B0M%20PROGRAMI%202018v.pdf
 */
const group = (prefix, summaries) => summaries.map((metin, index) => ({
  kod: `${prefix}.${index + 1}`,
  metin,
  kapsam: 'olculur',
}))

export const LGS_MATEMATIK_KAZANIMLARI = [
  ...group('M.8.1.1', [
    'Pozitif tam sayıların çarpanlarını bulur ve asal çarpan yapısını üslü biçimde gösterir.',
    'İki doğal sayının EBOB ve EKOK değerlerini hesaplar, ilgili problemleri çözer.',
    'İki doğal sayının aralarında asal olup olmadığına karar verir.',
  ]),
  ...group('M.8.1.2', [
    'Tam sayıların tam sayı kuvvetlerini hesaplar.',
    'Üslü ifadelerin temel işlem kurallarıyla denk biçimler kurar.',
    'Ondalık gösterimi 10’un tam sayı kuvvetleriyle çözümler.',
    'Bir sayıyı 10’un farklı tam sayı kuvvetleriyle yazar.',
    'Pozitif büyük ve küçük sayıları bilimsel gösterimle ifade edip karşılaştırır.',
  ]),
  ...group('M.8.1.3', [
    'Tam kare pozitif tam sayı ile karekökü arasındaki ilişkiyi açıklar.',
    'Tam kare olmayan bir karekökün bulunduğu iki doğal sayıyı belirler.',
    'Kareköklü ifadede katsayıyı kök dışına veya içine taşır.',
    'Kareköklü ifadelerde çarpma ve bölme yapar.',
    'Kareköklü ifadelerde toplama ve çıkarma yapar.',
    'Çarpımı doğal sayı yapan kareköklü çarpanlara örnek verir.',
    'Uygun ondalık sayıların karekökünü bulur.',
    'Gerçek sayıları rasyonel ve irrasyonel sayılarla ilişkilendirir.',
  ]),
  ...group('M.8.4.1', [
    'En çok üç veri grubunun çizgi ve sütun grafiklerini yorumlar.',
    'Verileri sütun, daire ve çizgi grafikleriyle gösterip gösterimler arasında dönüştürür.',
  ]),
  ...group('M.8.5.1', [
    'Basit bir olaya ait olası durumları sayar.',
    'Olayları daha fazla, eşit ve daha az olasılıklı olarak karşılaştırır.',
    'Eşit şanslı çıktıların her birinin olasılığını açıklar.',
    'Olasılığın sıfır ile bir arasında olduğunu açıklar.',
    'Basit bir olayın olasılığını hesaplar.',
  ]),
  ...group('M.8.2.1', [
    'Basit cebirsel ifadeleri tanır ve farklı biçimlerde yazar.',
    'Cebirsel ifadeleri çarpar.',
    'Belirlenen temel özdeşlikleri modellerle açıklar.',
    'Kapsamdaki cebirsel ifadeleri çarpanlarına ayırır.',
  ]),
  ...group('M.8.2.2', [
    'Birinci dereceden bir bilinmeyenli denklemleri çözer.',
    'Koordinat sistemini tanır ve sıralı ikilileri gösterir.',
    'Doğrusal ilişkiyi tablo ve denklemle ifade eder.',
    'Doğrusal denklemlerin grafiğini çizer.',
    'Gerçek yaşamın doğrusal ilişkisini denklem, tablo ve grafikle yorumlar.',
    'Doğrunun eğimini model, denklem ve grafikle ilişkilendirir.',
  ]),
  ...group('M.8.2.3', [
    'Günlük yaşam durumuna uygun birinci dereceden eşitsizlik yazar.',
    'Birinci dereceden eşitsizlikleri sayı doğrusunda gösterir.',
    'Birinci dereceden bir bilinmeyenli eşitsizlikleri çözer.',
  ]),
]
