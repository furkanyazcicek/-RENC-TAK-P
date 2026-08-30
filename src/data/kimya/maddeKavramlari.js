/**
 * Dr. Koç — Kimya Atlası / Madde Sınıflandırması
 * Kavram haritasının içeriği. Her düğüm için tanım, örnek, tanecik görseli
 * ve öğrencinin en sık karıştırdığı noktanın açıklaması bulunur.
 */

export const MADDE_AGACI = {
  kod: 'madde',
  ad: 'MADDE',
  alt: [
    { kod: 'safMadde', ad: 'Saf Madde', alt: [{ kod: 'element', ad: 'Element' }, { kod: 'bilesik', ad: 'Bileşik' }] },
    { kod: 'karisim', ad: 'Karışım', alt: [{ kod: 'homojen', ad: 'Homojen Karışım' }, { kod: 'heterojen', ad: 'Heterojen Karışım' }] },
  ],
}

export const KAVRAMLAR = {
  madde: {
    ad: 'Madde',
    kisa: 'Kütlesi ve hacmi olan her şey.',
    tanim: 'Madde, kütlesi ve hacmi olan, uzayda yer kaplayan her şeydir. Kimyanın ilk sorusu şudur: elimizdeki madde tek tür tanecikten mi oluşuyor, yoksa birden çok maddenin karışımı mı?',
    ayrim: 'Maddeler önce ikiye ayrılır: **saf maddeler** (belirli bir bileşimi vardır) ve **karışımlar** (birden çok saf maddenin bir arada bulunmasıdır).',
    ornekler: [],
    tanecik: 'atom',
    gunluk: ['Havadaki oksijen', 'Bardaktaki su', 'Masadaki tahta'],
  },
  safMadde: {
    ad: 'Saf Madde',
    kisa: 'Tek tür tanecikten oluşan, belirli özellikleri olan madde.',
    tanim: 'Saf madde tek çeşit tanecikten oluşur. Erime ve kaynama noktası gibi ayırt edici özellikleri sabittir; örneğin saf su her zaman 0 °C’de donar, 100 °C’de kaynar (1 atm’de).',
    ayrim: 'Saf maddeler ikiye ayrılır: **element** (tek tür atom) ve **bileşik** (farklı elementlerin belirli oranda birleşmesi).',
    ornekler: [{ formul: 'Fe', ad: 'Demir' }, { formul: 'H2O', ad: 'Su' }, { formul: 'O2', ad: 'Oksijen' }],
    tanecik: 'bilesik',
    gunluk: ['Damıtılmış su', 'Saf altın', 'Şeker (sakkaroz)'],
    ozellikler: ['Belirli erime/kaynama noktası vardır', 'Homojendir', 'Formülle gösterilebilir'],
  },
  element: {
    ad: 'Element',
    kisa: 'Tek tür atomdan oluşan saf madde.',
    tanim: 'Element, aynı cins atomlardan oluşan saf maddedir. Kimyasal yöntemlerle daha basit maddelere ayrıştırılamaz. Bugün bilinen 118 element vardır ve her birinin bir sembolü bulunur.',
    ayrim: '**Çok önemli:** Bir element yalnızca tek atom hâlinde bulunmak zorunda değildir. O₂ bir moleküldür ama yalnızca oksijen atomları içerdiği için aynı zamanda elementtir.',
    ornekler: [
      { formul: 'Fe', ad: 'Demir — atomik element' },
      { formul: 'O2', ad: 'Oksijen — element molekülü' },
      { formul: 'Au', ad: 'Altın — atomik element' },
      { formul: 'He', ad: 'Helyum — tek atomlu gaz' },
      { formul: 'N2', ad: 'Azot — element molekülü' },
    ],
    tanecik: 'elementMolekulu',
    gunluk: ['Bakır tel', 'Altın yüzük', 'Balondaki helyum', 'Soluduğumuz oksijen'],
    ozellikler: ['Tek cins atom içerir', 'Kimyasal yolla ayrıştırılamaz', 'Sembolle gösterilir'],
    yanlisKavram: {
      baslik: '“Element = tek atom” yanlış',
      metin: 'O₂, N₂, Cl₂, O₃ gibi türler moleküldür ama elementtir. Ölçüt atom sayısı değil, **atom çeşididir**: tek tür atom varsa elementtir.',
    },
  },
  bilesik: {
    ad: 'Bileşik',
    kisa: 'Farklı elementlerin belirli oranlarda kimyasal bağlarla birleşmesiyle oluşan saf madde.',
    tanim: 'Bileşik, en az iki farklı elementin belirli kütle oranlarında kimyasal bağ kurmasıyla oluşur. Bileşiği oluşturan elementlerin özellikleri kaybolur: sodyum patlayıcı bir metal, klor zehirli bir gazdır; ikisinden oluşan sodyum klorür ise yemek tuzudur.',
    ayrim: 'Bileşikler **fiziksel yöntemlerle** (süzme, buharlaştırma, mıknatıs) ayrılamaz. Ancak **kimyasal yöntemlerle** (elektroliz, ısıtma, tepkime) elementlerine ayrılabilir.',
    ornekler: [
      { formul: 'H2O', ad: 'Su — moleküler bileşik' },
      { formul: 'CO2', ad: 'Karbondioksit — moleküler bileşik' },
      { formul: 'NH3', ad: 'Amonyak — moleküler bileşik' },
      { formul: 'NaCl', ad: 'Sodyum klorür — iyonik bileşik' },
    ],
    tanecik: 'bilesik',
    gunluk: ['Yemek tuzu', 'Şeker', 'Karbondioksit', 'Sirke'],
    ozellikler: ['En az iki farklı element içerir', 'Belirli sabit oran vardır', 'Fiziksel yolla ayrılamaz', 'Formülle gösterilir'],
    yanlisKavram: {
      baslik: 'Her bileşik molekül değildir',
      metin: 'H₂O moleküler bir bileşiktir. Ama NaCl iyonik bir bileşiktir ve bağımsız moleküllerden oluşmaz; iyon örgüsü hâlindedir. Bu yüzden NaCl için "molekül" değil, "formül birimi" denir.',
    },
  },
  karisim: {
    ad: 'Karışım',
    kisa: 'Birden çok saf maddenin kimyasal bağ kurmadan bir arada bulunması.',
    tanim: 'Karışımda maddeler kendi kimliğini korur; aralarında kimyasal bağ oluşmaz. Bileşenlerin oranı değişebilir — çayı daha şekerli yapabilirsiniz, ama suyun formülünü H₃O yapamazsınız.',
    ayrim: 'Karışımlar **fiziksel yöntemlerle** ayrılabilir: süzme, buharlaştırma, damıtma, mıknatısla ayırma, ayırma hunisi.',
    ornekler: [{ formul: 'tuzlu su', ad: 'Homojen karışım' }, { formul: 'yağ + su', ad: 'Heterojen karışım' }],
    tanecik: 'homojen',
    gunluk: ['Hava', 'Deniz suyu', 'Çay', 'Beton'],
    ozellikler: ['Belirli formülü yoktur', 'Bileşen oranı değişebilir', 'Fiziksel yolla ayrılır', 'Bileşenler özelliklerini korur'],
  },
  homojen: {
    ad: 'Homojen Karışım (Çözelti)',
    kisa: 'Her yerinde aynı özelliği gösteren, tek fazlı karışım.',
    tanim: 'Homojen karışımda tanecikler o kadar küçük ve o kadar eşit dağılmıştır ki, karışımın her noktası aynı görünür ve aynı özelliği taşır. Bunlara çözelti de denir.',
    ayrim: 'Homojen karışım tek fazlıdır ve çıplak gözle bileşenleri ayırt edilemez. Ama **saf madde değildir**: belirli bir formülü yoktur ve oranı değiştirilebilir.',
    ornekler: [{ formul: 'tuzlu su', ad: 'Tuz + su' }, { formul: 'hava', ad: 'Azot + oksijen + …' }, { formul: 'şekerli su', ad: 'Şeker + su' }],
    tanecik: 'homojen',
    gunluk: ['Tuzlu su', 'Hava', 'Şekerli çay', 'Kolonya', 'Çelik (katı çözelti)'],
    ozellikler: ['Tek fazlıdır', 'Her yeri aynı özelliktedir', 'Tanecikler gözle görülmez'],
    yanlisKavram: {
      baslik: 'Homojen olmak saf olmak değildir',
      metin: 'Tuzlu su her yerinde aynıdır (homojendir) ama saf madde değildir: iki farklı madde içerir ve kaynama noktası sabit değildir.',
    },
  },
  heterojen: {
    ad: 'Heterojen Karışım',
    kisa: 'Bileşenleri gözle veya basit yollarla ayırt edilebilen, çok fazlı karışım.',
    tanim: 'Heterojen karışımda tanecikler eşit dağılmaz; farklı bölgelerde toplanır. Karışımın bir noktasından alınan örnek, başka noktadan alınandan farklı olabilir.',
    ayrim: 'Heterojen karışımlar birden çok faz içerir. Süspansiyon (katı-sıvı), emülsiyon (sıvı-sıvı) ve aerosol gibi türleri vardır.',
    ornekler: [{ formul: 'yağ + su', ad: 'Emülsiyon' }, { formul: 'kum + su', ad: 'Süspansiyon' }, { formul: 'ayran', ad: 'Emülsiyon' }],
    tanecik: 'heterojen',
    gunluk: ['Zeytinyağı + su', 'Kumlu su', 'Ayran', 'Salata', 'Beton', 'Sis'],
    ozellikler: ['Çok fazlıdır', 'Bileşenler ayırt edilebilir', 'Süzme veya ayırma hunisiyle ayrılabilir'],
  },
}

/** Saf madde / karışım ayrımını sınayan hızlı sorular (Madde Atlası içinde). */
export const AYIRT_ETME_SORULARI = [
  { madde: 'Damıtılmış su', dogru: 'bilesik', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'Su, H ve O elementlerinin belirli oranda birleşmesiyle oluşmuş bir bileşiktir.' },
  { madde: 'Hava', dogru: 'homojen', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'Hava; azot, oksijen, argon ve diğer gazların homojen karışımıdır. Oranları değişebilir.' },
  { madde: 'Oksijen gazı (O₂)', dogru: 'element', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'O₂ moleküldür ama yalnızca oksijen atomu içerir → elementtir.' },
  { madde: 'Zeytinyağı + su', dogru: 'heterojen', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'İki sıvı karışmaz, ayrı fazlar oluşturur → heterojen karışım.' },
  { madde: 'Yemek tuzu (NaCl)', dogru: 'bilesik', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'Sodyum ve klor elementlerinin belirli oranda birleşmesiyle oluşan iyonik bileşiktir.' },
  { madde: 'Çelik', dogru: 'homojen', secenekler: ['element', 'bilesik', 'homojen', 'heterojen'], aciklama: 'Çelik, demir ve karbonun homojen katı karışımıdır (alaşım).' },
]
