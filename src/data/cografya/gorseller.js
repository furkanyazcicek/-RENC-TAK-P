const GORSEL_KOKU = '/atlas-assets/cografya/imagegen'

export const COGRAFYA_SAHNELERI = {
  dunya: {
    src: `${GORSEL_KOKU}/dunya-yuksek-yorunge.jpg`,
    alt: 'Yüksek yörüngeden Akdeniz havzası ve Türkiye çevresini gösteren Dünya görünümü',
    baslik: 'Dünya tek bir sistem gibi çalışır',
    katmanlar: [
      { id: 'gezegen', ad: 'Gezegen', aciklama: 'Küre biçimi, eksen hareketi ve aydınlanma çizgisi yeryüzündeki temel ritmi kurar.' },
      { id: 'atmosfer', ad: 'Atmosfer', aciklama: 'İnce atmosfer katmanı; ışık, su ve enerji dolaşımını yeryüzüne bağlar.' },
      { id: 'konum', ad: 'Konum', aciklama: 'Enlem ve boylam, bir yerin matematik konumunu ortak bir referans ağına taşır.' },
    ],
    odaklar: [
      { id: 'akdeniz', katman: 'gezegen', x: 57, y: 60, baslik: 'Akdeniz eşiği', metin: 'Kara ve denizlerin dağılışı; sıcaklık, nem ve ulaşım ilişkilerini aynı bölgede görünür kılar.' },
      { id: 'terminator', katman: 'gezegen', x: 82, y: 29, baslik: 'Aydınlanma sınırı', metin: 'Gece ile gündüzün sınırı Dünya’nın dönüşünü, gün içindeki enerji değişimini ve yerel saati kanıtlar.' },
      { id: 'atmosfer-pariltisi', katman: 'atmosfer', x: 63, y: 11, baslik: 'İnce yaşam katmanı', metin: 'Atmosfer, gezegenin boyutuna göre çok incedir; hava olayları ve yaşam bu dar kuşakta gerçekleşir.' },
      { id: 'bulut-spirali', katman: 'atmosfer', x: 18, y: 40, baslik: 'Dolaşım izi', metin: 'Bulutların kıvrımı basınç farkı, rüzgâr ve nem taşınımının birlikte çalıştığını gösterir.' },
      { id: 'koordinat', katman: 'konum', x: 49, y: 41, baslik: 'Ortak referans ağı', metin: 'Koordinat ağı, göreceli tariften farklı olarak yeri sayısal ve karşılaştırılabilir biçimde tanımlar.' },
    ],
  },
  atmosfer: {
    src: `${GORSEL_KOKU}/atmosfer-iklim-sistemi.jpg`,
    alt: 'Okyanus, bulut, dağ, yağış ve akarsu ilişkisini gösteren iklim sistemi manzarası',
    baslik: 'İklim, enerji ve suyun dolaşımıdır',
    katmanlar: [
      { id: 'enerji', ad: 'Enerji', aciklama: 'Güneşten gelen enerji yüzeyleri farklı ısıtır; basınç farkının ve dolaşımın ilk adımı budur.' },
      { id: 'nem', ad: 'Nem', aciklama: 'Su yüzeyinden atmosfere taşınan nem, bulut ve yağış için gerekli malzemeyi sağlar.' },
      { id: 'yagis', ad: 'Yağış', aciklama: 'Yükselen havanın soğuması, yoğuşma ve yamaç farkı yağışın mekânsal dağılışını değiştirir.' },
    ],
    odaklar: [
      { id: 'gunes', katman: 'enerji', x: 9, y: 36, baslik: 'Enerji kaynağı', metin: 'Geliş açısı ve yüzey özelliği değiştikçe aynı enerji farklı sıcaklık sonuçları üretir.' },
      { id: 'yamac-farki', katman: 'enerji', x: 74, y: 65, baslik: 'Bakı ve yüzey', metin: 'Eğim yönü ve bitki örtüsü, yüzeyin aldığı ve tuttuğu enerjiyi değiştirir.' },
      { id: 'buharlasma', katman: 'nem', x: 17, y: 67, baslik: 'Nem kaynağı', metin: 'Geniş su yüzeyi buharlaşma yoluyla havanın mutlak nemini artırır.' },
      { id: 'bulut', katman: 'nem', x: 43, y: 34, baslik: 'Yoğuşma alanı', metin: 'Nemli hava yükselip soğuduğunda doygunluğa yaklaşır ve bulut damlacıkları oluşur.' },
      { id: 'dag-yagisi', katman: 'yagis', x: 62, y: 44, baslik: 'Yamaç yağışı', metin: 'Dağa çarpıp yükselen hava rüzgâr önü yamacında yağış bırakırken arka yamaçta kuraklık oluşturabilir.' },
      { id: 'akarsu', katman: 'yagis', x: 72, y: 76, baslik: 'Havza yanıtı', metin: 'Yağışın miktarı ve süresi akarsuyun debisini, aşındırmasını ve taşkın olasılığını değiştirir.' },
    ],
  },
  yeryuzu: {
    src: `${GORSEL_KOKU}/yersekilleri-havza.jpg`,
    alt: 'Dağlardan deltaya uzanan akarsu havzası ve kayaç katmanları görünümü',
    baslik: 'Yeryüzü süreçlerin ortak ürünüdür',
    katmanlar: [
      { id: 'ic-kuvvet', ad: 'İç kuvvet', aciklama: 'Kıvrım, kırık ve yükselme yeryüzünün ana iskeletini oluşturur.' },
      { id: 'dis-kuvvet', ad: 'Dış kuvvet', aciklama: 'Akarsu, rüzgâr ve buzullar yüksek alanları aşındırır; malzemeyi eğim boyunca taşır.' },
      { id: 'birikim', ad: 'Birikim', aciklama: 'Taşıma gücü azaldığında malzeme birikir; ova, taraça ve delta gibi şekiller oluşur.' },
    ],
    odaklar: [
      { id: 'katman', katman: 'ic-kuvvet', x: 17, y: 82, baslik: 'Kıvrılmış kayaçlar', metin: 'Tabakaların biçimi, sıkışma ve tektonik hareketin geçmişte bıraktığı yapısal kanıttır.' },
      { id: 'dag', katman: 'ic-kuvvet', x: 25, y: 19, baslik: 'Yükselmiş kütle', metin: 'Yükselti arttıkça eğim, sıcaklık ve akarsuyun enerji potansiyeli birlikte değişir.' },
      { id: 'vadi', katman: 'dis-kuvvet', x: 39, y: 43, baslik: 'Aşındırma koridoru', metin: 'Akarsu yatağını derine ve yana aşındırarak vadinin biçimini zaman içinde değiştirir.' },
      { id: 'menderes', katman: 'dis-kuvvet', x: 53, y: 57, baslik: 'Eğim azalıyor', metin: 'Eğim ve hız azaldığında akarsu kıvrılır; dış kıyıda aşındırma, iç kıyıda birikme güçlenir.' },
      { id: 'delta', katman: 'birikim', x: 76, y: 68, baslik: 'Delta birikimi', metin: 'Akarsu denize ulaştığında taşıma gücü düşer; ince malzemeler kıyıda yeni kara oluşturur.' },
      { id: 'taraça', katman: 'birikim', x: 61, y: 42, baslik: 'Eski taban izi', metin: 'Akarsuyun yeniden yatağına gömülmesi, eski vadi tabanını basamak biçiminde yukarıda bırakabilir.' },
    ],
  },
  beseri: {
    src: `${GORSEL_KOKU}/beseri-aglar.jpg`,
    alt: 'Kırsal üretim alanlarından liman kentine uzanan yerleşme ve ulaşım ağları',
    baslik: 'İnsan faaliyetleri ağlar kurar',
    katmanlar: [
      { id: 'nufus', ad: 'Nüfus', aciklama: 'Yoğunluk; yükselti, su, iş olanağı ve ulaşılabilirlik gibi etkenlerle birlikte okunur.' },
      { id: 'ulasim', ad: 'Ulaşım', aciklama: 'Yol, demir yolu ve liman düğümleri yerleşmelerin etki alanını ve erişilebilirliğini büyütür.' },
      { id: 'uretim', ad: 'Üretim', aciklama: 'Tarım, sanayi, enerji ve ticaret farklı mekânları karşılıklı bağımlı hâle getirir.' },
    ],
    odaklar: [
      { id: 'kent', katman: 'nufus', x: 67, y: 28, baslik: 'Yoğun kent çekirdeği', metin: 'İşlev çeşitliliği ve hizmetler nüfusu toplar; yapı yoğunluğu merkeze yaklaştıkça artar.' },
      { id: 'kir-kent', katman: 'nufus', x: 23, y: 64, baslik: 'Kır–kent geçişi', metin: 'Arazi kullanımı tarımdan konuta dönüşürken yerleşme dokusu ve nüfus yoğunluğu değişir.' },
      { id: 'koridor', katman: 'ulasim', x: 53, y: 65, baslik: 'Ana bağlantı koridoru', metin: 'Ulaşım çizgileri üretim alanlarını, yerleşmeleri ve pazarı birbirine bağlayan akış kanallarıdır.' },
      { id: 'liman', katman: 'ulasim', x: 86, y: 50, baslik: 'Liman düğümü', metin: 'Kara ve deniz ulaşımının birleştiği düğüm, kentin ticaret işlevini güçlendirir.' },
      { id: 'tarim', katman: 'uretim', x: 17, y: 48, baslik: 'Kırsal üretim deseni', metin: 'Parsel biçimi, su kaynağı ve pazara uzaklık tarımsal üretimin mekânsal düzenini etkiler.' },
      { id: 'enerji', katman: 'uretim', x: 76, y: 78, baslik: 'Enerji alanı', metin: 'Enerji yatırımı doğal potansiyel kadar iletim ağına, araziye ve tüketim merkezlerine de bağlıdır.' },
    ],
  },
  risk: {
    src: `${GORSEL_KOKU}/afet-risk-havzasi.jpg`,
    alt: 'Akarsu, kent, fay izi ve dağ yamacını birlikte gösteren afet risk havzası',
    baslik: 'Afet, tehlikenin toplumsal sonuç kazanmasıdır',
    katmanlar: [
      { id: 'tehlike', ad: 'Tehlike', aciklama: 'Fay, taşkın, heyelan ve yangın olasılığı doğal sürecin nerede etkili olabileceğini gösterir.' },
      { id: 'maruziyet', ad: 'Maruziyet', aciklama: 'Nüfusun ve yapıların tehlike alanında bulunması olası kaybın ölçeğini büyütür.' },
      { id: 'direnc', ad: 'Direnç', aciklama: 'Planlama, erken uyarı, sağlam altyapı ve ekosistem koruması riski azaltır.' },
    ],
    odaklar: [
      { id: 'fay', katman: 'tehlike', x: 69, y: 57, baslik: 'Fay izi', metin: 'Yerleşme ve kritik tesis kararı yalnız fay çizgisine değil, zemin ve yapı özelliklerine de dayanmalıdır.' },
      { id: 'taşkin', katman: 'tehlike', x: 34, y: 49, baslik: 'Taşkın düzlüğü', metin: 'Akarsuyun doğal yayılma alanına giren yapılaşma, aynı yağış olayının etkisini büyütebilir.' },
      { id: 'kent-maruz', katman: 'maruziyet', x: 27, y: 64, baslik: 'Yoğun maruziyet', metin: 'Köprüler, konutlar ve ana yollar aynı koridorda toplandığında zincirleme hizmet kesintisi olasılığı artar.' },
      { id: 'tesis', katman: 'maruziyet', x: 75, y: 64, baslik: 'Kritik tesis', metin: 'Hastane, enerji ve iletişim gibi işlevlerin erişilebilir ve güvenli zeminde kalması afet yönetimi için kritiktir.' },
      { id: 'baraj', katman: 'direnc', x: 35, y: 23, baslik: 'Havza yönetimi', metin: 'Baraj tek başına çözüm değildir; debi tahmini, taşkın alanı planlaması ve erken uyarıyla birlikte işler.' },
      { id: 'orman', katman: 'direnc', x: 60, y: 35, baslik: 'Ekosistem tamponu', metin: 'Orman ve doğal örtü yüzey akışını yavaşlatır, erozyonu azaltır ve yamacın direncini destekler.' },
    ],
  },
}

export const BOLGE_SAHNE_ESLESMESI = {
  sistemler: ['dunya', 'gezegen'],
  gezegen: ['dunya', 'gezegen'],
  konum: ['dunya', 'konum'],
  'harita-bilgisi': ['yeryuzu', 'dis-kuvvet'],
  iklim: ['atmosfer', 'enerji'],
  yerkure: ['yeryuzu', 'ic-kuvvet'],
  'yasam-kusaklari': ['atmosfer', 'nem'],
  nufus: ['beseri', 'nufus'],
  yerlesme: ['beseri', 'ulasim'],
  ekonomi: ['beseri', 'uretim'],
  afet: ['risk', 'tehlike'],
  pusula: ['dunya', 'konum'],
  kamp: ['risk', 'direnc'],
}

export function bolgeSahnesi(kod) {
  const [sahneKodu, ilkKatman] = BOLGE_SAHNE_ESLESMESI[kod] ?? BOLGE_SAHNE_ESLESMESI.sistemler
  return { kod: sahneKodu, ilkKatman, ...COGRAFYA_SAHNELERI[sahneKodu] }
}
