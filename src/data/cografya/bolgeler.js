export const BOLGELER = [
  { kod: 'sistemler', konu: 'Doğa ve İnsan', ad: 'Dünya Sistemleri', kisaAd: 'Sistemler', kapsam: 'ortak', renk: '#42c59a', konum: [10, 16], onKosullar: [], amac: 'Doğal katmanlarla insan kararı arasındaki geri etkiyi kur.' },
  { kod: 'gezegen', konu: 'Dünya’nın Şekli ve Hareketleri', ad: 'Gezegen Saati', kisaAd: 'Gezegen', kapsam: 'ortak', renk: '#f0b55a', konum: [34, 8], onKosullar: ['sistemler'], amac: 'Eksen eğikliği, tarih ve enlemle mevsimleri modelle.' },
  { kod: 'konum', konu: 'Coğrafi Konum', ad: 'Konum Laboratuvarı', kisaAd: 'Konum', kapsam: 'ortak', renk: '#5aaee8', konum: [58, 16], onKosullar: ['gezegen'], amac: 'Koordinat, yerel saat ve göreceli konum kanıtını ayır.' },
  { kod: 'harita-bilgisi', konu: 'Harita Bilgisi', ad: 'Harita Atölyesi', kisaAd: 'Harita', kapsam: 'ortak', renk: '#9a83e5', konum: [83, 8], onKosullar: ['konum'], amac: 'Ölçek, izohips, profil ve projeksiyonla araziyi oku.' },
  { kod: 'iklim', konu: 'Atmosfer ve İklim', ad: 'Atmosfer Gözlemevi', kisaAd: 'İklim', kapsam: 'ortak', renk: '#4fc8d6', konum: [80, 44], onKosullar: ['konum', 'harita-bilgisi'], amac: 'Sıcaklık, basınç, nem ve yağış kanıtlarını birleştir.' },
  { kod: 'yerkure', konu: 'Yerin Şekillenmesi (İç ve Dış Kuvvetler)', ad: 'Yerküre Dinamikleri', kisaAd: 'Yerküre', kapsam: 'ortak', renk: '#df7f68', konum: [56, 48], onKosullar: ['harita-bilgisi', 'iklim'], amac: 'Levhalardan akarsulara yeryüzünü oluşturan süreçleri izle.' },
  { kod: 'yasam-kusaklari', konu: 'Su, Toprak ve Bitkiler', ad: 'Yaşam Kuşakları', kisaAd: 'Yaşam', kapsam: 'ortak', renk: '#78bf68', konum: [30, 48], onKosullar: ['iklim', 'yerkure'], amac: 'Havza, toprak ve bitki dağılışını aynı sistemde açıkla.' },
  { kod: 'nufus', konu: 'Nüfus', ad: 'Nüfus Merceği', kisaAd: 'Nüfus', kapsam: 'ortak', renk: '#f08aa8', konum: [8, 52], onKosullar: ['sistemler', 'harita-bilgisi'], amac: 'Yoğunluk, piramit ve göç verisinden kanıtı aşmayan sonuç çıkar.' },
  { kod: 'yerlesme', konu: 'Yerleşme', ad: 'Yerleşme Ağları', kisaAd: 'Yerleşme', kapsam: 'ortak', renk: '#ff9d5c', konum: [18, 78], onKosullar: ['nufus', 'yerkure'], amac: 'Kuruluş yeri, doku, işlev ve etki alanı arasında karar ver.' },
  { kod: 'ekonomi', konu: 'Ekonomik Faaliyetler', ad: 'Üretim ve Bağlantılar', kisaAd: 'Ekonomi', kapsam: 'ortak', renk: '#e8c74f', konum: [44, 78], onKosullar: ['yerlesme', 'yasam-kusaklari'], amac: 'Kaynak, üretim, ulaşım ve pazar ağını mekânda kur.' },
  { kod: 'afet', konu: 'Afetler ve Sürdürülebilir Çevre', ad: 'Afet ve Sürdürülebilirlik', kisaAd: 'Afet', kapsam: 'tymm', renk: '#ed6969', konum: [70, 76], onKosullar: ['yerkure', 'nufus', 'yerlesme'], amac: 'Tehlike, maruziyet ve kırılganlığı katmanlayarak riski azalt.' },
  { kod: 'pusula', konu: 'Kavram Pusulası', ad: 'Kavram Pusulası', kisaAd: 'Pusula', kapsam: 'tum', renk: '#b38beb', konum: [88, 72], onKosullar: [], amac: 'Yanılgının atladığı kanıtı bul ve tekrar rotasına dön.' },
  { kod: 'kamp', konu: 'TYT Kampı', ad: 'TYT Kampı', kisaAd: 'Kamp', kapsam: 'tyt', renk: '#6d9ff2', konum: [90, 92], onKosullar: ['harita-bilgisi', 'iklim', 'nufus', 'ekonomi'], amac: 'Harita, grafik, kesit ve vaka kanıtlarını karışık turda kullan.' },
]

export const BAGLANTILAR = BOLGELER.flatMap((bolge) => bolge.onKosullar.map((once) => [once, bolge.kod]))
export const bolgeBul = (kod) => BOLGELER.find((bolge) => bolge.kod === kod) ?? null

export const TYT_KONULARI = BOLGELER.slice(0, 10).map((bolge) => bolge.konu)
