export const YANILGILAR = [
  { id: 'determinist', bolge: 'sistemler', iddia: 'Doğal koşul insan faaliyetini tek başına belirler.', eksikKanit: 'teknoloji, ekonomi, kültür ve politika', dogrusu: 'Doğa olanak ve sınır üretir; insanın cevabı toplumsal koşullarla değişir.' },
  { id: 'yakinlik-mevsim', bolge: 'gezegen', iddia: 'Yazın Dünya Güneş’e daha yakın olduğu için sıcaktır.', eksikKanit: 'eksen eğikliği ve ışın açısı', dogrusu: 'Mevsimleri eksen eğikliği, ışın açısı ve gündüz süresi oluşturur.' },
  { id: 'boylam-iklim', bolge: 'konum', iddia: 'Boylam iklimi, enlem yerel saati belirler.', eksikKanit: 'referans ekseni', dogrusu: 'Enlem geometrik/iklimsel temel; boylam yerel saat farkı verir.' },
  { id: 'ayni-enlem', bolge: 'konum', iddia: 'Aynı enlemdeki her yerin iklimi aynıdır.', eksikKanit: 'yükselti, denizellik, akıntı ve rüzgâr', dogrusu: 'Enlem ortak bir enerji temeli verir; yerel koşullar gerçek iklimi değiştirir.' },
  { id: 'buyuk-olcek', bolge: 'harita-bilgisi', iddia: 'Büyük ölçekli harita daha büyük alan gösterir.', eksikKanit: 'payda ve küçültme oranı', dogrusu: 'Payda küçüldükçe ölçek büyür; alan daralır, ayrıntı artar.' },
  { id: 'izohips-yukseklik', bolge: 'harita-bilgisi', iddia: 'İzohipslerin sık olduğu yer mutlaka en yüksek yerdir.', eksikKanit: 'eğri değerleri', dogrusu: 'Çizgi sıklığı eğimi, yazılı değer yükseltiyi gösterir.' },
  { id: 'sicak-basinc', bolge: 'iklim', iddia: 'Sıcak hava her zaman yüksek basınçtır.', eksikKanit: 'yükselme/alçalma ve basınç türü', dogrusu: 'Yüzeyde ısınan hava genellikle yükselerek termik alçak basınç oluşturur.' },
  { id: 'bagil-nem', bolge: 'iklim', iddia: 'Bağıl nem yüksekse su buharı miktarı mutlaka fazladır.', eksikKanit: 'sıcaklık ve doyma kapasitesi', dogrusu: 'Bağıl nem bir orandır; soğuk hava az buharla da doygunluğa yaklaşabilir.' },
  { id: 'akarsu-guney', bolge: 'yasam-kusaklari', iddia: 'Akarsular haritada aşağıya, yani güneye akar.', eksikKanit: 'yükselti değişimi', dogrusu: 'Akış yönü sayfa yönüne değil yüksekten alçağa bağlıdır.' },
  { id: 'sekil-ad', bolge: 'yerkure', iddia: 'Yer şeklinin adı biliniyorsa oluşum süreci de kanıtlanmıştır.', eksikKanit: 'kayaç, iklim ve süreç izi', dogrusu: 'Benzer görünümler farklı süreçlerle oluşabilir; mekanizma kanıtı gerekir.' },
  { id: 'yogunluk-gelisme', bolge: 'nufus', iddia: 'Nüfus yoğunluğu yüksek yer mutlaka gelişmiştir.', eksikKanit: 'gelir, üretim ve yaşam kalitesi', dogrusu: 'Yoğunluk alan başına nüfustur; gelişmişlik ölçütü değildir.' },
  { id: 'kiyi-liman', bolge: 'yerlesme', iddia: 'Kıyıdaki her yerleşme büyük liman kentidir.', eksikKanit: 'hinterlant, ulaşım ve ticaret akışı', dogrusu: 'Kıyı konumu olanak sunar; liman işlevini ağ bağlantıları büyütür.' },
  { id: 'yenilenebilir-etkisiz', bolge: 'ekonomi', iddia: 'Yenilenebilir enerji çevresel etki oluşturmaz.', eksikKanit: 'yer, ölçek ve habitat etkisi', dogrusu: 'Emisyon avantajı etkiyi sıfırlamaz; yer ve tasarım sonucu değiştirir.' },
  { id: 'tehlike-afet', bolge: 'afet', iddia: 'Doğal tehlike tek başına afettir.', eksikKanit: 'maruziyet ve kırılganlık', dogrusu: 'Afet, tehlikenin maruz ve kırılgan bir toplumda ciddi kayıp üretmesidir.' },
]

export const yanilgiBul = (id) => YANILGILAR.find((yanilgi) => yanilgi.id === id) ?? null
