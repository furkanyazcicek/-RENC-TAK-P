/**
 * Dr. Koç — Kimya Atlası / Kimyasal Tür Veri Tabanı
 * ==================================================================
 * Formül çözümleyici atom sayısını **hesaplar**; ama bir formülden tek
 * başına molekül geometrisi, Lewis yapısı ya da moleküller arası
 * etkileşim çıkarılamaz. O bilgiler yapı verisi gerektirir ve bu dosyada
 * doğrulanmış biçimde tutulur.
 *
 * Bu ayrım uygulamanın her yerinde korunur:
 *   • "Hesaplanan"  → atom sayısı, element çeşidi, net yük, mol kütlesi
 *   • "Yapı verisi" → geometri, bağ açısı, Lewis, polarite, etkileşim
 * Veri tabanında olmayan bir formül girildiğinde geometri **uydurulmaz**.
 */

import { MolekulKurucu } from '../../lib/kimya/geometri3b.js'

/* ————— Sınıf etiketleri ————— */
export const SINIFLAR = {
  atom: { ad: 'Atom', molekul: false, bilesik: false, iyon: false },
  elementMolekulu: { ad: 'Element molekülü', molekul: true, bilesik: false, iyon: false },
  molekulerBilesik: { ad: 'Moleküler bileşik', molekul: true, bilesik: true, iyon: false },
  iyonikBilesik: { ad: 'İyonik bileşik', molekul: false, bilesik: true, iyon: false },
  cokAtomluIyon: { ad: 'Çok atomlu iyon', molekul: false, bilesik: false, iyon: true },
  tekAtomluIyon: { ad: 'Tek atomlu iyon', molekul: false, bilesik: false, iyon: true },
  metalikKatı: { ad: 'Metalik katı', molekul: false, bilesik: false, iyon: false },
  agKatisi: { ad: 'Ağ örgülü katı', molekul: false, bilesik: true, iyon: false },
}

/* ————— Yapı kurucu kısayolları ————— */
const K = () => new MolekulKurucu()

/** Kaya tuzu (NaCl) tipi iyonik kafes — molekül değil, örgü olduğu için ayrı kurulur. */
export function kafesKur(katyon, anyon, boyut = 3) {
  const atomlar = []
  const yariCap = (boyut - 1) / 2
  let id = 0
  for (let x = 0; x < boyut; x += 1) {
    for (let y = 0; y < boyut; y += 1) {
      for (let z = 0; z < boyut; z += 1) {
        const katyonMu = (x + y + z) % 2 === 0
        atomlar.push({
          id: id++,
          sembol: katyonMu ? katyon : anyon,
          konum: [(x - yariCap) * 1.5, (y - yariCap) * 1.5, (z - yariCap) * 1.5],
          iyonYuku: katyonMu ? '+' : '−',
        })
      }
    }
  }
  // Komşu iyonlar arasındaki elektrostatik çekim — kovalent bağ değildir,
  // bu yüzden çizimde kesikli/ince gösterilir.
  const baglar = []
  for (let i = 0; i < atomlar.length; i += 1) {
    for (let j = i + 1; j < atomlar.length; j += 1) {
      const [a, b] = [atomlar[i].konum, atomlar[j].konum]
      const uzak = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
      if (uzak < 1.6) baglar.push({ a: i, b: j, derece: 1, tur: 'iyonik' })
    }
  }
  return { atomlar, baglar, ciftler: [], kafes: true }
}

const TURLER = []

/** Kayıt ekler; ortak alanları tamamlar. */
function ekle(kayit) {
  TURLER.push({
    adlar: [],
    mai: [],
    neden: [],
    notlar: [],
    ...kayit,
    sinifBilgisi: SINIFLAR[kayit.sinif],
  })
}

/* ==================================================================
   1) ELEMENT MOLEKÜLLERİ
   ================================================================== */

ekle({
  anahtar: 'H2',
  ad: 'Hidrojen molekülü',
  adlar: ['hidrojen', 'H₂'],
  sinif: 'elementMolekulu',
  ozet: 'Aynı türden iki hidrojen atomunun ortaklaşa elektron kullanarak oluşturduğu iki atomlu element molekülü.',
  gunluk: 'Evrenin en bol maddesi; roket yakıtı ve yakıt pillerinde kullanılır.',
  merkez: null,
  elektronGeo: 'Doğrusal',
  geo: 'Doğrusal',
  aci: '180°',
  bagTuru: 'apolarKovalent',
  bagOzet: 'İki hidrojen atomunun elektronegatiflikleri eşit olduğu için ortak elektron çifti tam ortada durur.',
  polarite: {
    sonuc: 'Apolar',
    adimlar: [
      'İki atom da hidrojendir; elektronegatiflik farkı 0’dır.',
      'Ortak elektron çifti hiçbir atoma kaymaz, kısmi yük oluşmaz.',
      'Molekülde dipol yoktur.',
    ],
  },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Apolar olduğu için tek etkileşim türü anlık dipollerdir; çok zayıftır, bu yüzden H₂ oda koşullarında gazdır.' }],
  yapi: () => { const k = K(); const a = k.merkez('H', 'tekli'); k.ekle(a, 'H', { geometri: 'tekli' }); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }] },
})

ekle({
  anahtar: 'O2',
  ad: 'Oksijen molekülü',
  adlar: ['oksijen', 'O₂', 'oksijen gazı'],
  sinif: 'elementMolekulu',
  ozet: 'Yalnızca oksijen atomlarından oluştuğu için elementtir; iki atom bağlı olduğu için aynı zamanda moleküldür.',
  detay: 'Basit Lewis gösterimi O=O çift bağı verir. Ancak O₂ deneysel olarak paramanyetiktir (mıknatısa çekilir); bu, moleküler orbital kuramıyla açıklanan iki eşleşmemiş elektronun varlığını gösterir. Lise düzeyinde çift bağ gösterimi kullanılır, ama gerçeğin tamamı bu değildir.',
  gunluk: 'Soluduğumuz havanın yaklaşık %21’i; solunumun ve yanmanın vazgeçilmezi.',
  elektronGeo: 'Doğrusal',
  geo: 'Doğrusal',
  aci: '180°',
  bagTuru: 'apolarKovalent',
  bagOzet: 'İki oksijen atomu arasında ikişer elektron çiftinin ortaklaşıldığı çift bağ (O=O) vardır.',
  polarite: {
    sonuc: 'Apolar',
    adimlar: [
      'Her iki atom da oksijendir → elektronegatiflik farkı 0.',
      'Ortak elektronlar eşit paylaşılır, kısmi yük oluşmaz.',
      'Molekül apolardır.',
    ],
  },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Apolar molekül olduğu için yalnızca anlık dipol etkileşimleri görülür.' }],
  yapi: () => { const k = K(); const a = k.merkez('O', 'uc2Cift'); const b = k.ekle(a, 'O', { derece: 2, geometri: 'uc2Cift' }); k.cift(a, 2); k.cift(b, 2); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1, derece: 2 }] },
  neden: [{
    soru: 'O₂ hem element hem molekül olabilir mi?',
    adimlar: [
      'Element: yalnızca tek tür atomdan oluşan saf madde demektir.',
      'Molekül: birden çok atomun kovalent bağla bağlanmasıyla oluşan tanecik demektir.',
      'O₂ iki oksijen atomundan oluşur → tek tür atom → element.',
      'Bu iki atom kovalent bağla bağlıdır → aynı zamanda molekül.',
    ],
    sonuc: 'O₂ bir **element molekülü**dür. "Element ⇔ tek atom" demek yanlıştır.',
  }],
})

ekle({
  anahtar: 'N2',
  ad: 'Azot molekülü',
  adlar: ['azot', 'N₂', 'nitrojen'],
  sinif: 'elementMolekulu',
  ozet: 'İki azot atomu arasında üçlü bağ bulunan, havanın yaklaşık %78’ini oluşturan element molekülü.',
  detay: 'N≡N bağ enerjisi çok yüksektir (≈941 kJ/mol). Bu yüzden azot gazı kimyasal olarak oldukça tepkimesizdir; bitkiler havadaki azotu doğrudan kullanamaz.',
  gunluk: 'Havanın büyük bölümü; gıda paketlerinde bozulmayı önlemek için kullanılır.',
  elektronGeo: 'Doğrusal',
  geo: 'Doğrusal',
  aci: '180°',
  bagTuru: 'apolarKovalent',
  bagOzet: 'Üç elektron çiftinin ortaklaşıldığı üçlü bağ (N≡N). Doğadaki en güçlü kovalent bağlardan biridir.',
  polarite: { sonuc: 'Apolar', adimlar: ['Aynı iki atom → elektronegatiflik farkı 0.', 'Elektronlar eşit paylaşılır.', 'Molekül apolardır.'] },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Apolar olduğu için yalnızca anlık dipoller; kaynama noktası çok düşüktür (−196 °C).' }],
  yapi: () => { const k = K(); const a = k.merkez('N', 'uc1Cift'); const b = k.ekle(a, 'N', { derece: 3, geometri: 'uc1Cift' }); k.cift(a); k.cift(b); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'N', ciftler: 1 }, { sembol: 'N', ciftler: 1 }], baglar: [{ a: 0, b: 1, derece: 3 }] },
})

ekle({
  anahtar: 'Cl2',
  ad: 'Klor molekülü',
  adlar: ['klor', 'Cl₂'],
  sinif: 'elementMolekulu',
  ozet: 'İki klor atomunun tek bağla bağlandığı, sarımsı yeşil renkli zehirli gaz.',
  gunluk: 'Havuz ve içme suyu dezenfeksiyonunda kullanılır.',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'apolarKovalent',
  bagOzet: 'Aynı iki atom arasındaki tek kovalent bağ; elektronlar eşit paylaşılır.',
  polarite: { sonuc: 'Apolar', adimlar: ['Aynı iki atom → elektronegatiflik farkı 0.', 'Kısmi yük oluşmaz.', 'Molekül apolardır.'] },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Elektron sayısı arttıkça London kuvvetleri güçlenir: F₂ ve Cl₂ gaz, Br₂ sıvı, I₂ katıdır.' }],
  yapi: () => { const k = K(); const a = k.merkez('Cl', 'uc3Cift'); const b = k.ekle(a, 'Cl', { geometri: 'uc3Cift' }); k.cift(a, 3); k.cift(b, 3); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }], baglar: [{ a: 0, b: 1 }] },
})

ekle({
  anahtar: 'O3',
  ad: 'Ozon',
  adlar: ['ozon', 'O₃'],
  sinif: 'elementMolekulu',
  ozet: 'Üç oksijen atomundan oluşan, açısal yapılı element molekülü. Oksijenin allotropudur.',
  detay: 'Ozonda iki O–O bağı rezonans nedeniyle eşdeğerdir; ikisi de tek bağ ile çift bağ arasında bir karakter taşır. Merkez oksijende +1, uç oksijenlerden birinde −1 formal yük bulunur.',
  gunluk: 'Stratosferdeki ozon tabakası morötesi ışınları süzer; yer seviyesinde ise kirletici sayılır.',
  merkez: 'O',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Açısal (kırık)', aci: '≈117°',
  bagTuru: 'polarKovalent',
  bagOzet: 'Aynı elementin atomları arasında olsa da rezonans nedeniyle bağlar eşdeğerdir; molekülün kendisi açısal olduğu için küçük bir dipolü vardır.',
  rezonansNotu: 'Ozonun gerçek yapısı iki rezonans yapısının hibrididir; her iki O–O bağı da eşdeğerdir.',
  polarite: { sonuc: 'Polar', adimlar: ['Uç atomlar aynı olsa da merkez oksijenin ortaklanmamış çifti vardır.', 'Molekül açısaldır, elektron yoğunluğu simetrik dağılmaz.', 'Küçük de olsa net bir dipol momenti oluşur.'] },
  mai: [{ ad: 'Dipol-dipol etkileşimi', baskin: true }, { ad: 'London dispersiyon kuvvetleri' }],
  yapi: () => { const k = K(); const m = k.merkez('O', 'acisal1:117'); const a = k.ekle(m, 'O', { geometri: 'uc2Cift' }); const b = k.ekle(m, 'O', { geometri: 'uc2Cift' }); k.cift(m); k.cift(a, 2); k.cift(b, 2); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'O', ciftler: 1 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2, derece: 1 }] },
    { atomlar: [{ sembol: 'O', ciftler: 1 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1, derece: 1 }, { a: 0, b: 2, derece: 2 }] },
  ],
})

/* ==================================================================
   2) MOLEKÜLER BİLEŞİKLER
   ================================================================== */

ekle({
  anahtar: 'H2O',
  ad: 'Su',
  adlar: ['su', 'water', 'H₂O', 'HOH', 'dihidrojen monoksit'],
  sinif: 'molekulerBilesik',
  ozet: 'İki hidrojen ve bir oksijen atomundan oluşan, açısal yapılı polar molekül.',
  detay: 'Oksijenin çevresinde 4 elektron çifti vardır: 2 bağ çifti + 2 ortaklanmamış çift. Elektron geometrisi tetrahedral, molekül geometrisi ise açısaldır. Ortaklanmamış çiftler bağ çiftlerini daha güçlü ittiği için açı 109,5°’den 104,5°’ye daralır.',
  gunluk: 'Vücudumuzun yaklaşık %60’ı sudur; hidrojen bağları sayesinde oda sıcaklığında sıvıdır.',
  merkez: 'O',
  elektronGeo: 'Tetrahedral',
  geo: 'Açısal (kırık)',
  aci: '≈104,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'O–H bağları polar kovalenttir: oksijen (3,44) hidrojenden (2,20) daha elektronegatif olduğu için ortak elektronlar oksijene yakın durur.',
  bagDetay: 'Elektronegatiflik farkı 3,44 − 2,20 = 1,24 → polar kovalent aralık. Oksijende δ−, hidrojenlerde δ+ kısmi yükleri oluşur.',
  polarite: {
    sonuc: 'Polar',
    adimlar: [
      'Oksijen hidrojenden daha elektronegatiftir (3,44 > 2,20).',
      'Bu yüzden her iki O–H bağı da polardır; bağ dipolleri oksijene doğrudur.',
      'Molekül açısal olduğu için bu iki dipol birbirini götürmez, toplanır.',
    ],
    sonucCumlesi: 'H₂O polar bir moleküldür.',
  },
  mai: [
    { ad: 'Hidrojen bağı', baskin: true, aciklama: 'Bir molekülün H atomu, komşu molekülün oksijenindeki ortaklanmamış elektron çiftine çekilir. Suyun yüksek kaynama noktasının nedeni budur.' },
    { ad: 'Dipol-dipol etkileşimi' },
    { ad: 'London dispersiyon kuvvetleri' },
  ],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => { const k = K(); const o = k.merkez('O', 'acisal2:104.5'); k.ekle(o, 'H', { geometri: 'tekli' }); k.ekle(o, 'H', { geometri: 'tekli' }); k.cift(o, 2); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'O', ciftler: 2 }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }] },
  neden: [
    {
      soru: 'Su neden polardır?',
      adimlar: [
        'Oksijen hidrojenden daha elektronegatiftir.',
        'O–H bağları polardır; elektronlar oksijene kayar (O: δ−, H: δ+).',
        'Molekül açısal olduğu için bağ dipolleri birbirini götürmez.',
      ],
      sonuc: 'H₂O polar bir moleküldür.',
    },
    {
      soru: 'Bağ açısı neden 109,5° değil de 104,5°?',
      adimlar: [
        'Oksijenin çevresinde 4 elektron çifti var → elektron geometrisi tetrahedral (109,5°).',
        'Bu çiftlerin 2’si ortaklanmamış çifttir ve çekirdeğe daha yakın, daha "şişkin" durur.',
        'Ortaklanmamış çiftler bağ çiftlerini daha güçlü iter ve H–O–H açısını sıkıştırır.',
      ],
      sonuc: 'Açı 109,5°’den 104,5°’ye daralır.',
    },
    {
      soru: 'Su neden bu kadar yüksek sıcaklıkta kaynar?',
      adimlar: [
        'Molekül içindeki O–H bağı güçlü bir kovalent bağdır ama kaynarken bu bağ kopmaz.',
        'Kaynarken kopan şey moleküller arası hidrojen bağlarıdır.',
        'Hidrojen bağı, moleküller arası etkileşimlerin en güçlülerindendir.',
      ],
      sonuc: 'Benzer büyüklükteki H₂S (−60 °C) yanında su 100 °C’de kaynar. Fark hidrojen bağıdır.',
    },
  ],
  notlar: ['Kaynama sırasında kopan bağ O–H kovalent bağı değil, moleküller arası hidrojen bağıdır.'],
})

ekle({
  anahtar: 'CO2',
  ad: 'Karbondioksit',
  adlar: ['karbondioksit', 'CO₂', 'karbon dioksit'],
  sinif: 'molekulerBilesik',
  ozet: 'Bir karbon ve iki oksijen atomundan oluşan, doğrusal yapılı apolar molekül.',
  detay: 'Karbonun çevresinde 2 elektron kümesi (iki çift bağ) vardır; ortaklanmamış çifti yoktur. Bu yüzden elektron geometrisi de molekül geometrisi de doğrusaldır.',
  gunluk: 'Solunumda açığa çıkar, fotosentezde kullanılır; gazozdaki baloncuklar da CO₂’dir.',
  merkez: 'C',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C=O bağları polardır (fark: 3,44 − 2,55 = 0,89) ama molekül simetrik olduğu için toplam dipol sıfırdır.',
  polarite: {
    sonuc: 'Apolar',
    adimlar: [
      'Oksijen karbondan daha elektronegatiftir → C=O bağları polardır.',
      'Molekül doğrusaldır; iki bağ dipolü tam ters yönlüdür.',
      'Eşit büyüklükteki ters dipoller birbirini götürür.',
    ],
    sonucCumlesi: 'Bağları polar olmasına rağmen CO₂ apolar bir moleküldür.',
  },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Apolar olduğu için dipol-dipol veya hidrojen bağı yapamaz; bu yüzden oda koşullarında gazdır.' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'dogrusal'); const a = k.ekle(c, 'O', { derece: 2, geometri: 'uc2Cift' }); const b = k.ekle(c, 'O', { derece: 2, geometri: 'uc2Cift' }); k.cift(a, 2); k.cift(b, 2); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2, derece: 2 }] },
  neden: [{
    soru: 'Bağları polar olan CO₂ neden apolar bir molekül?',
    adimlar: [
      'Molekülün polarlığı yalnızca bağlara değil, geometriye de bağlıdır.',
      'CO₂ doğrusaldır: O=C=O. İki bağ dipolü 180° ile birbirine bakar.',
      'Eşit büyüklükte ve zıt yönde iki vektör toplandığında sonuç sıfırdır.',
    ],
    sonuc: 'Bağ polar, molekül apolar. Bu ikisi farklı sorulardır.',
  }],
  notlar: ['"Polar bağ varsa molekül de polardır" yanılgısının en klasik karşı örneği CO₂’dir.'],
})

ekle({
  anahtar: 'NH3',
  ad: 'Amonyak',
  adlar: ['amonyak', 'NH₃', 'azot trihidrür'],
  sinif: 'molekulerBilesik',
  ozet: 'Bir azot ve üç hidrojen atomundan oluşan, trigonal piramidal yapılı polar molekül.',
  detay: 'Azotun çevresinde 4 elektron çifti vardır: 3 bağ + 1 ortaklanmamış çift. Elektron geometrisi tetrahedral, molekül geometrisi trigonal piramidaldir. Ortaklanmamış çift bağları ittiği için açı 107°’ye daralır.',
  gunluk: 'Temizlik ürünlerinde ve gübre üretiminde kullanılır; keskin kokusu tanıdıktır.',
  merkez: 'N',
  elektronGeo: 'Tetrahedral', geo: 'Trigonal piramidal', aci: '≈107°',
  bagTuru: 'polarKovalent',
  bagOzet: 'N–H bağları polardır (fark: 3,04 − 2,20 = 0,84); elektronlar azota doğru kayar.',
  polarite: {
    sonuc: 'Polar',
    adimlar: [
      'Azot hidrojenden daha elektronegatiftir → N–H bağları polardır.',
      'Molekül piramidaldir, düzlemsel değildir.',
      'Üç bağ dipolü ve ortaklanmamış çiftin katkısı aynı yöne toplanır.',
    ],
    sonucCumlesi: 'NH₃ polar bir moleküldür.',
  },
  mai: [
    { ad: 'Hidrojen bağı', baskin: true, aciklama: 'H atomu doğrudan azota bağlı olduğu için amonyak molekülleri arasında hidrojen bağı kurulur.' },
    { ad: 'Dipol-dipol etkileşimi' },
    { ad: 'London dispersiyon kuvvetleri' },
  ],
  hidrojenBagi: { verici: 'H', alici: 'N' },
  yapi: () => { const k = K(); const n = k.merkez('N', 'piramidal:107'); k.ekle(n, 'H'); k.ekle(n, 'H'); k.ekle(n, 'H'); k.cift(n); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'N', ciftler: 1 }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }] },
  neden: [{
    soru: 'NH₃ neden düzlemsel değil de piramidal?',
    adimlar: [
      'Azotun çevresinde 4 elektron çifti var (3 bağ + 1 ortaklanmamış).',
      'VSEPR’a göre 4 elektron çifti tetrahedral yerleşir.',
      'Ortaklanmamış çift görünmez ama yer kaplar; geriye kalan 3 bağ bir piramit oluşturur.',
    ],
    sonuc: 'Molekül geometrisi trigonal piramidaldir; açı 107°’dir.',
  }],
})

ekle({
  anahtar: 'CH4',
  ad: 'Metan',
  adlar: ['metan', 'CH₄', 'doğal gaz'],
  sinif: 'molekulerBilesik',
  ozet: 'Bir karbon ve dört hidrojen atomundan oluşan, tetrahedral yapılı apolar molekül.',
  detay: 'Karbonun çevresinde 4 bağ çifti vardır, ortaklanmamış çift yoktur. Bu yüzden elektron geometrisi ile molekül geometrisi aynıdır: tetrahedral, 109,5°.',
  gunluk: 'Doğal gazın ana bileşeni; mutfaktaki ocakta yanan gaz büyük ölçüde metandır.',
  merkez: 'C',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral', aci: '≈109,5°',
  bagTuru: 'apolarKovalent',
  bagOzet: 'C–H bağı çok az polardır (fark: 2,55 − 2,20 = 0,35); pratikte apolar kabul edilir.',
  polarite: {
    sonuc: 'Apolar',
    adimlar: [
      'C–H bağlarının polarlığı çok küçüktür.',
      'Dört bağ tetrahedral olarak tamamen simetrik yerleşir.',
      'Bağ dipolleri birbirini götürür.',
    ],
    sonucCumlesi: 'CH₄ apolar bir moleküldür.',
  },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true, aciklama: 'Apolar olduğu için yalnızca anlık dipoller; kaynama noktası −162 °C.' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'tetrahedral'); k.ekle(c, 'H'); k.ekle(c, 'H'); k.ekle(c, 'H'); k.ekle(c, 'H'); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
})

ekle({
  anahtar: 'HCl',
  ad: 'Hidrojen klorür',
  adlar: ['hidroklorik asit', 'tuz ruhu', 'HCl', 'hidrojen klorür'],
  sinif: 'molekulerBilesik',
  ozet: 'Bir hidrojen ve bir klor atomundan oluşan, polar kovalent bağlı iki atomlu molekül.',
  detay: 'Saf hâlde HCl moleküler bir gazdır. Suda çözündüğünde H⁺ ve Cl⁻ iyonlarına ayrışır ve hidroklorik asit adını alır — yani "iyonik bileşik" değil, suda iyonlaşan moleküler bir bileşiktir.',
  gunluk: 'Midemizdeki mide asidi seyreltik hidroklorik asittir.',
  merkez: 'Cl',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'Elektronegatiflik farkı 3,16 − 2,20 = 0,96 → polar kovalent. Klorda δ−, hidrojende δ+ oluşur.',
  polarite: {
    sonuc: 'Polar',
    adimlar: ['Klor hidrojenden daha elektronegatiftir.', 'Ortak elektron çifti klora kayar.', 'İki atomlu molekülde bağ polarsa molekül de polardır.'],
    sonucCumlesi: 'HCl polar bir moleküldür.',
  },
  mai: [{ ad: 'Dipol-dipol etkileşimi', baskin: true }, { ad: 'London dispersiyon kuvvetleri' }],
  yapi: () => { const k = K(); const cl = k.merkez('Cl', 'uc3Cift'); k.ekle(cl, 'H', { geometri: 'tekli' }); k.cift(cl, 3); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'Cl', ciftler: 3 }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }] },
  notlar: ['HCl’de hidrojen bağı yoktur: hidrojen bağı için H’nin F, O veya N’ye bağlı olması gerekir.'],
})

/* ==================================================================
   3) ÇOK ATOMLU İYONLAR
   ------------------------------------------------------------------
   Bu türler bağımsız nötr molekül değildir: net yükleri vardır ve
   ancak karşıt yüklü iyonlarla birlikte katı bir bileşik oluştururlar.
   ================================================================== */

/** Yüklü türlerde "molekül polar mı?" sorusu moleküllere uygulandığı gibi sorulmaz. */
const IYON_POLARITE_NOTU = 'Polar/apolar sınıflaması **nötr moleküller** için kullanılır. İyonların zaten net yükü vardır; bu yüzden burada sorulması gereken soru "yük dağılımı simetrik mi?" sorusudur.'

ekle({
  anahtar: 'NO3^-',
  ad: 'Nitrat iyonu',
  adlar: ['nitrat', 'NO₃⁻', 'nitrat iyonu'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir azot ve üç oksijen atomundan oluşan, −1 yüklü, trigonal düzlemsel çok atomlu anyon.',
  detay: 'Nitratta π elektronları üç oksijen üzerine delokalizedir. Tek bir Lewis yapısı gerçeği tam anlatmaz: gerçek yapı üç rezonans yapısının hibrididir ve üç N–O bağı da eşdeğerdir (her biri yaklaşık 1⅓ bağ karakterinde).',
  gunluk: 'Gübrelerin ana bileşenlerinden; sularda nitrat kirliliği ölçülen bir parametredir.',
  merkez: 'N',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Trigonal düzlemsel', aci: '≈120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'N–O bağları polar kovalent karakterlidir; oksijen azottan daha elektronegatiftir.',
  bagDetay: 'Üç N–O bağı rezonans nedeniyle **eşdeğerdir**. Bir tanesi "çift bağ", ikisi "tek bağ" değildir; delokalize π sistemi bağ derecesini üçe böler.',
  rezonansNotu: 'Gerçek yapı bu rezonans yapılarından yalnızca biri değildir; rezonans hibriti olarak düşünülmelidir.',
  delokalize: true,
  polarite: { sonuc: 'İyon (simetrik yük dağılımı)', not: IYON_POLARITE_NOTU, adimlar: ['Yapı trigonal düzlemsel ve simetriktir.', 'Negatif yük üç oksijene eşit olarak dağılmıştır.', 'İyonun net yükü −1’dir; molekül dipolünden değil, yükten söz edilir.'] },
  mai: [
    { ad: 'İyon-dipol etkileşimi', baskin: true, aciklama: 'Suda çözündüğünde nitrat iyonu, su moleküllerinin δ+ hidrojen uçlarıyla çevrelenir.' },
    { ad: 'İyonik bağ (katı hâlde)', aciklama: 'Katı tuzlarda karşıt yüklü katyonlarla elektrostatik çekim kurar.' },
  ],
  yapi: () => { const k = K(); const n = k.merkez('N', 'trigonalDuzlemsel'); k.ekle(n, 'O', { geometri: 'uc2Cift' }); k.ekle(n, 'O', { geometri: 'uc2Cift' }); k.ekle(n, 'O', { geometri: 'uc2Cift' }); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'N' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }] },
    { atomlar: [{ sembol: 'N' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3 }] },
    { atomlar: [{ sembol: 'N' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3, derece: 2 }] },
  ],
  neden: [{
    soru: 'NO₃⁻ neden "molekül" değil?',
    adimlar: [
      'Molekül, nötr (yüksüz) ve bağımsız var olabilen bir tanecik demektir.',
      'NO₃⁻’ün net yükü −1’dir; tek başına kararlı bir madde olarak durmaz.',
      'Her zaman karşıt yüklü bir katyonla birlikte bulunur (NaNO₃, KNO₃ gibi).',
    ],
    sonuc: 'NO₃⁻ bir **çok atomlu anyondur**, molekül değildir.',
  }, {
    soru: 'Üç N–O bağı gerçekten farklı mı?',
    adimlar: [
      'Tek bir Lewis yapısı çizdiğimizde bir çift, iki tek bağ görünür.',
      'Deneysel ölçümler üç N–O bağının uzunluğunun **eşit** olduğunu gösterir.',
      'π elektronları tek bir bağa ait değildir; üç bağ üzerine yayılmıştır (delokalizasyon).',
    ],
    sonuc: 'Üç bağ da eşdeğerdir; her biri yaklaşık 1⅓ bağ karakterindedir.',
  }],
  uyari: {
    baslik: '"NO₃ molekülü" doğru bir ifade değil',
    metin: 'NO₃⁻ nötr bir molekül değil, −1 yüklü çok atomlu bir iyondur (nitrat iyonu). Yüksüz "NO₃" taneciği kararlı bir madde olarak bulunmaz.',
  },
})

ekle({
  anahtar: 'NH4^+',
  ad: 'Amonyum iyonu',
  adlar: ['amonyum', 'NH₄⁺', 'amonyum iyonu'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir azot ve dört hidrojen atomundan oluşan, +1 yüklü, tetrahedral çok atomlu katyon.',
  detay: 'Amonyum, amonyağın (NH₃) ortaklanmamış elektron çiftini bir H⁺ iyonuna vermesiyle oluşur. Bu dördüncü bağ **koordine (datif) kovalent** bağdır: elektron çiftinin ikisi de azottan gelir. Bağ kurulduktan sonra dört N–H bağı birbirinden ayırt edilemez, hepsi eşdeğerdir.',
  gunluk: 'Amonyum nitrat ve amonyum sülfat gübrelerinin katyonu.',
  merkez: 'N',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral', aci: '≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'N–H bağları polar kovalenttir; biri koordine kovalent bağ olarak oluşmuştur.',
  polarite: { sonuc: 'İyon (simetrik yük dağılımı)', not: IYON_POLARITE_NOTU, adimlar: ['Yapı tam simetrik tetrahedraldir.', 'Pozitif yük tüm tanecik üzerine yayılmıştır.', 'Net yük +1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true, aciklama: 'Suda çözündüğünde su moleküllerinin δ− oksijen uçları amonyumu çevreler.' }, { ad: 'Hidrojen bağı', aciklama: 'N–H bağları sayesinde su moleküllerine hidrojen bağı da verebilir.' }],
  yapi: () => { const k = K(); const n = k.merkez('N', 'tetrahedral'); k.ekle(n, 'H'); k.ekle(n, 'H'); k.ekle(n, 'H'); k.ekle(n, 'H'); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'N' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
  neden: [{
    soru: 'Azot normalde 3 bağ yaparken NH₄⁺’te neden 4 bağ var?',
    adimlar: [
      'Azotun 5 değerlik elektronu vardır: 3 tanesi bağ yapar, 1 çift ortaklanmamış kalır.',
      'H⁺ iyonunun hiç elektronu yoktur, ama boş orbitali vardır.',
      'Azot ortaklanmamış çiftini bu boş orbitale verir → koordine kovalent bağ.',
    ],
    sonuc: 'Azotun formal yükü +1 olur ve iyonun net yükü +1’dir.',
  }],
  uyari: {
    baslik: '"NH₄ molekülü" doğru değil',
    metin: 'NH₄⁺ +1 yüklü bir katyondur. Nötr NH₄ taneciği kararlı değildir; her zaman bir anyonla birlikte bulunur (NH₄Cl gibi).',
  },
})

ekle({
  anahtar: 'CO3^2-',
  ad: 'Karbonat iyonu',
  adlar: ['karbonat', 'CO₃²⁻', 'karbonat iyonu'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir karbon ve üç oksijen atomundan oluşan, −2 yüklü, trigonal düzlemsel çok atomlu anyon.',
  detay: 'Nitrat gibi karbonatta da π elektronları delokalizedir; üç C–O bağı rezonans nedeniyle eşdeğerdir.',
  gunluk: 'Kireç taşı, mermer ve yumurta kabuğu kalsiyum karbonattır (CaCO₃).',
  merkez: 'C',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Trigonal düzlemsel', aci: '≈120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C–O bağları polar kovalenttir ve rezonans nedeniyle üçü de eşdeğerdir.',
  rezonansNotu: 'Üç rezonans yapısı da eşit katkı yapar; gerçek yapı bunların hibrididir.',
  delokalize: true,
  polarite: { sonuc: 'İyon (simetrik yük dağılımı)', not: IYON_POLARITE_NOTU, adimlar: ['Yapı düzlemsel ve simetriktir.', '−2 yük üç oksijene eşit dağılır.', 'Net yük −2’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }, { ad: 'İyonik bağ (katı hâlde)' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'trigonalDuzlemsel'); k.ekle(c, 'O', { geometri: 'uc2Cift' }); k.ekle(c, 'O', { geometri: 'uc2Cift' }); k.ekle(c, 'O', { geometri: 'uc2Cift' }); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }] },
    { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3 }] },
    { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3, derece: 2 }] },
  ],
})

ekle({
  anahtar: 'SO4^2-',
  ad: 'Sülfat iyonu',
  adlar: ['sülfat', 'SO₄²⁻', 'sulfat', 'sülfat iyonu'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir kükürt ve dört oksijen atomundan oluşan, −2 yüklü, tetrahedral çok atomlu anyon.',
  detay: 'Kükürt 3. periyottadır ve d orbitalleri kullanılabildiği için okteti genişleyebilir. Ders kitaplarında yaygın gösterim iki çift + iki tek bağdır (S’nin formal yükü 0). Yalnızca tek bağlı gösterim de geçerlidir (S: +2, her O: −1) ve modern hesaplamalara daha yakındır. Her iki gösterimde de dört S–O bağı rezonans nedeniyle **eşdeğerdir**.',
  gunluk: 'Alçıtaşı (CaSO₄·2H₂O) ve göztaşı (CuSO₄·5H₂O) sülfat tuzlarıdır.',
  merkez: 'S',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral', aci: '≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'S–O bağları polar kovalenttir; dördü de eşdeğerdir.',
  rezonansNotu: 'Çift bağların yeri rezonansla değişir; dört S–O bağı ayırt edilemez.',
  delokalize: true,
  polarite: { sonuc: 'İyon (simetrik yük dağılımı)', not: IYON_POLARITE_NOTU, adimlar: ['Yapı tetrahedral ve simetriktir.', '−2 yük dört oksijene dağılmıştır.', 'Net yük −2’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }, { ad: 'İyonik bağ (katı hâlde)' }],
  yapi: () => { const k = K(); const s = k.merkez('S', 'tetrahedral'); k.ekle(s, 'O', { geometri: 'uc2Cift' }); k.ekle(s, 'O', { geometri: 'uc2Cift' }); k.ekle(s, 'O', { geometri: 'uc2Cift' }); k.ekle(s, 'O', { geometri: 'uc2Cift' }); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'S' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
    { atomlar: [{ sembol: 'S' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3, derece: 2 }, { a: 0, b: 4 }] },
    { atomlar: [{ sembol: 'S' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }], etiket: 'Yalnızca tek bağlı gösterim (oktet korunur)' },
  ],
})

ekle({
  anahtar: 'OH^-',
  ad: 'Hidroksit iyonu',
  adlar: ['hidroksit', 'OH⁻', 'hidroksil'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir oksijen ve bir hidrojen atomundan oluşan, −1 yüklü iyon. Bazların karakteristik iyonudur.',
  gunluk: 'Sabun, çamaşır sodası ve kireç suyu gibi bazik çözeltilerde bulunur.',
  merkez: 'O',
  elektronGeo: 'Tetrahedral', geo: 'Doğrusal (iki atomlu)', aci: '—',
  bagTuru: 'polarKovalent',
  bagOzet: 'O–H bağı polar kovalenttir; oksijenin üç ortaklanmamış çifti ve −1 formal yükü vardır.',
  polarite: { sonuc: 'İyon', not: IYON_POLARITE_NOTU, adimlar: ['İki atomlu bir anyondur.', 'Negatif yük ağırlıklı olarak oksijendedir.', 'Net yük −1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }, { ad: 'Hidrojen bağı', aciklama: 'Su ile güçlü hidrojen bağı kurar.' }],
  yapi: () => { const k = K(); const o = k.merkez('O', 'uc3Cift'); k.ekle(o, 'H', { geometri: 'tekli' }); k.cift(o, 3); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'O', ciftler: 3 }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }] },
})

ekle({
  anahtar: 'PO4^3-',
  ad: 'Fosfat iyonu',
  adlar: ['fosfat', 'PO₄³⁻'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir fosfor ve dört oksijen atomundan oluşan, −3 yüklü, tetrahedral çok atomlu anyon.',
  detay: 'Dört P–O bağı rezonans nedeniyle eşdeğerdir. DNA’nın omurgasında ve ATP’de fosfat grupları bulunur.',
  gunluk: 'Kemik ve dişlerin yapısında, gübrelerde ve deterjanlarda bulunur.',
  merkez: 'P',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral', aci: '≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'P–O bağları polar kovalenttir, dördü de eşdeğerdir.',
  delokalize: true,
  polarite: { sonuc: 'İyon (simetrik yük dağılımı)', not: IYON_POLARITE_NOTU, adimlar: ['Yapı simetrik tetrahedraldir.', '−3 yük dört oksijene dağılır.', 'Net yük −3’tür.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }],
  yapi: () => { const k = K(); const p = k.merkez('P', 'tetrahedral'); k.ekle(p, 'O', { geometri: 'uc2Cift' }); k.ekle(p, 'O', { geometri: 'uc2Cift' }); k.ekle(p, 'O', { geometri: 'uc2Cift' }); k.ekle(p, 'O', { geometri: 'uc2Cift' }); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'P' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
})

ekle({
  anahtar: 'CN^-',
  ad: 'Siyanür iyonu',
  adlar: ['siyanür', 'CN⁻'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir karbon ve bir azot atomu arasında üçlü bağ bulunan, −1 yüklü iyon.',
  gunluk: 'Çok zehirlidir; madencilikte altın ayrıştırmada kullanılır.',
  merkez: 'C',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C≡N üçlü bağı; azot karbondan daha elektronegatiftir.',
  polarite: { sonuc: 'İyon', not: IYON_POLARITE_NOTU, adimlar: ['İki atomlu anyondur.', 'Negatif yük ağırlıklı olarak karbondadır (formal yük −1).', 'Net yük −1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'uc1Cift'); const n = k.ekle(c, 'N', { derece: 3, geometri: 'uc1Cift' }); k.cift(c); k.cift(n); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C', ciftler: 1 }, { sembol: 'N', ciftler: 1 }], baglar: [{ a: 0, b: 1, derece: 3 }] },
})

ekle({
  anahtar: 'NO2^-',
  ad: 'Nitrit iyonu',
  adlar: ['nitrit', 'NO₂⁻'],
  sinif: 'cokAtomluIyon',
  ozet: 'Bir azot ve iki oksijen atomundan oluşan, −1 yüklü, açısal çok atomlu anyon.',
  detay: 'Azotun ortaklanmamış bir elektron çifti vardır; bu çift bağları ittiği için yapı açısaldır. İki N–O bağı rezonansla eşdeğerdir.',
  gunluk: 'Bazı işlenmiş etlerde koruyucu olarak kullanılır (sodyum nitrit).',
  merkez: 'N',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Açısal (kırık)', aci: '≈115°',
  bagTuru: 'polarKovalent',
  bagOzet: 'N–O bağları polar kovalenttir; rezonans nedeniyle ikisi de eşdeğerdir.',
  delokalize: true,
  polarite: { sonuc: 'İyon', not: IYON_POLARITE_NOTU, adimlar: ['Yapı açısaldır.', 'Negatif yük iki oksijene dağılmıştır.', 'Net yük −1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }],
  yapi: () => { const k = K(); const n = k.merkez('N', 'acisal1:115'); k.ekle(n, 'O', { geometri: 'uc2Cift' }); k.ekle(n, 'O', { geometri: 'uc2Cift' }); k.cift(n); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'N', ciftler: 1 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }] },
    { atomlar: [{ sembol: 'N', ciftler: 1 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }] },
  ],
})

ekle({
  anahtar: 'HCO3^-',
  ad: 'Bikarbonat (hidrojen karbonat) iyonu',
  adlar: ['bikarbonat', 'hidrojen karbonat', 'HCO₃⁻'],
  sinif: 'cokAtomluIyon',
  ozet: 'Karbonat iyonunun bir hidrojen almış hâli; −1 yüklüdür.',
  gunluk: 'Kanın pH’ını dengeleyen tampon sistemin ana iyonu; karbonatlı içeceklerde bulunur.',
  merkez: 'C',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Trigonal düzlemsel (karbon çevresinde)', aci: '≈120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'Karbon çevresindeki bağlar polar kovalenttir; O–H bağı da polardır.',
  polarite: { sonuc: 'İyon', not: IYON_POLARITE_NOTU, adimlar: ['Karbon çevresi düzlemseldir.', 'Negatif yük iki oksijene dağılmıştır.', 'Net yük −1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }, { ad: 'Hidrojen bağı' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'trigonalDuzlemsel'); k.ekle(c, 'O', { derece: 2, geometri: 'uc2Cift' }); k.ekle(c, 'O', { geometri: 'uc2Cift' }); const o3 = k.ekle(c, 'O', { geometri: 'acisal2:105' }); k.ekle(o3, 'H', { geometri: 'tekli' }); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'H' }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 3, b: 4 }] },
})

ekle({
  anahtar: 'CH3COO^-',
  ad: 'Asetat iyonu',
  adlar: ['asetat', 'CH₃COO⁻', 'etanoat'],
  sinif: 'cokAtomluIyon',
  ozet: 'Asetik asidin bir hidrojen iyonu vermesiyle oluşan −1 yüklü organik anyon.',
  detay: 'Negatif yük iki oksijen arasında delokalizedir; iki C–O bağı rezonansla eşdeğerdir. Asetatın kararlı olması, asetik asidin neden asit gibi davrandığını açıklar.',
  gunluk: 'Sirkenin içindeki asetik asidin iyonlaşmış hâli.',
  merkez: 'C',
  elektronGeo: 'Trigonal düzlemsel (karboksil karbonu)', geo: 'Trigonal düzlemsel', aci: '≈120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C–O bağları rezonansla eşdeğerdir; C–H bağları neredeyse apolardır.',
  delokalize: true,
  polarite: { sonuc: 'İyon', not: IYON_POLARITE_NOTU, adimlar: ['Karboksil ucu düzlemseldir.', 'Negatif yük iki oksijene eşit dağılır.', 'Net yük −1’dir.'] },
  mai: [{ ad: 'İyon-dipol etkileşimi', baskin: true }],
  yapi: () => { const k = K(); const c1 = k.merkez('C', 'trigonalDuzlemsel'); k.ekle(c1, 'O', { geometri: 'uc2Cift' }); k.ekle(c1, 'O', { geometri: 'uc2Cift' }); const c2 = k.ekle(c1, 'C', { geometri: 'tetrahedral' }); k.ekle(c2, 'H'); k.ekle(c2, 'H'); k.ekle(c2, 'H'); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'C' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 3, b: 4 }, { a: 3, b: 5 }, { a: 3, b: 6 }] },
    { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'C' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3 }, { a: 3, b: 4 }, { a: 3, b: 5 }, { a: 3, b: 6 }] },
  ],
})
/* ==================================================================
   4) İYONİK BİLEŞİKLER
   ------------------------------------------------------------------
   Bunlar bağımsız moleküllerden değil, üç boyutlu iyon örgüsünden
   oluşur. Bu yüzden "molekül" değil "formül birimi" denir.
   ================================================================== */

const IYONIK_UYARISI = (formul) => ({
  baslik: `"${formul} molekülü" doğru bir ifade değil`,
  metin: `${formul}, bağımsız ${formul} moleküllerinden oluşan moleküler bir madde değildir. Karşıt yüklü iyonların üç boyutlu bir kristal örgü oluşturmasıyla meydana gelir. Bu nedenle "${formul} formül birimi" ifadesi doğrudur; formül, örgüdeki en basit iyon oranını gösterir.`,
})

ekle({
  anahtar: 'NaCl',
  ad: 'Sodyum klorür (yemek tuzu)',
  adlar: ['tuz', 'yemek tuzu', 'sodyum klorür', 'NaCl'],
  sinif: 'iyonikBilesik',
  ozet: 'Sodyum katyonları ile klorür anyonlarının oluşturduğu iyonik kristal. Yemek tuzunun kimyasal adıdır.',
  detay: 'Sodyum 1 değerlik elektronunu klora verir: Na → Na⁺ + e⁻, Cl + e⁻ → Cl⁻. Oluşan zıt yüklü iyonlar elektrostatik çekimle bir arada durur. Kristalde her Na⁺ 6 Cl⁻ ile, her Cl⁻ 6 Na⁺ ile komşudur; "bir sodyum bir klora bağlı" diye bir eşleşme yoktur.',
  gunluk: 'Mutfaktaki tuz; suda çözündüğünde Na⁺ ve Cl⁻ iyonlarına ayrılır ve çözelti elektriği iletir.',
  elektronGeo: null, geo: 'Yüzey merkezli kübik iyonik örgü (kaya tuzu)', aci: '90° (örgüde komşu iyonlar arası)',
  bagTuru: 'iyonik',
  bagOzet: 'Metal ile ametal arasında elektron aktarımı olur; oluşan zıt yüklü iyonlar arasındaki elektrostatik çekime iyonik bağ denir.',
  bagDetay: 'Elektronegatiflik farkı 3,16 − 0,93 = 2,23 → 1,7’nin üzerinde, iyonik karakter baskındır.',
  iyonlar: [
    { formul: 'Na', yuk: 1, adet: 1, ad: 'Sodyum iyonu' },
    { formul: 'Cl', yuk: -1, adet: 1, ad: 'Klorür iyonu' },
  ],
  polarite: { sonuc: 'İyonik (molekül polaritesi tanımlı değil)', not: 'Bağımsız molekül olmadığı için "molekül polardır/apolardır" denemez. Örgüdeki bağ tamamen iyonik karakterlidir.', adimlar: ['Sodyum metal, klor ametaldir.', 'Elektronegatiflik farkı çok büyüktür (2,23).', 'Elektron ortaklaşmaz, aktarılır.'] },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true, aciklama: 'Örgüyü ayakta tutan kuvvet budur; erime noktasının 801 °C olmasının nedeni bu güçlü çekimdir.' }, { ad: 'İyon-dipol etkileşimi', aciklama: 'Suda çözünürken su molekülleri iyonları sarar ve örgüyü çözer.' }],
  yapi: () => kafesKur('Na', 'Cl', 3),
  kafes: true,
  neden: [{
    soru: 'Neden "NaCl molekülü" denmez?',
    adimlar: [
      'Molekül, kovalent bağlarla bağlanmış, sınırları belli bir tanecik demektir.',
      'NaCl katısında bir Na⁺ iyonu tek bir Cl⁻ iyonuna ait değildir; 6 tanesiyle komşudur.',
      'Formül, örgüdeki iyon oranını gösterir: 1 Na⁺ : 1 Cl⁻.',
    ],
    sonuc: 'Doğru ifade: **NaCl formül birimi**.',
  }],
  uyari: IYONIK_UYARISI('NaCl'),
})

ekle({
  anahtar: 'MgO',
  ad: 'Magnezyum oksit',
  adlar: ['magnezyum oksit', 'MgO'],
  sinif: 'iyonikBilesik',
  ozet: 'Mg²⁺ ve O²⁻ iyonlarından oluşan iyonik bileşik. Yüksek yükler nedeniyle çok güçlü bir örgüye sahiptir.',
  detay: 'Mg²⁺ ve O²⁻ iyonlarının yükleri NaCl’dekinin iki katıdır; bu yüzden örgü enerjisi çok daha büyüktür ve erime noktası 2852 °C’dir.',
  gunluk: 'Ateşe dayanıklı tuğlalarda ve mide ilaçlarında kullanılır.',
  geo: 'Kaya tuzu tipi iyonik örgü', aci: '90°',
  bagTuru: 'iyonik',
  bagOzet: 'Metal (Mg) ile ametal (O) arasında iki elektronun aktarılmasıyla oluşur.',
  iyonlar: [
    { formul: 'Mg', yuk: 2, adet: 1, ad: 'Magnezyum iyonu' },
    { formul: 'O', yuk: -2, adet: 1, ad: 'Oksit iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'İyonik örgüde molekül polaritesi tanımlı değildir.', adimlar: ['Mg metal, O ametaldir.', 'Elektronegatiflik farkı 3,44 − 1,31 = 2,13.', 'Elektron aktarımı gerçekleşir.'] },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  yapi: () => kafesKur('Mg', 'O', 3),
  kafes: true,
  uyari: IYONIK_UYARISI('MgO'),
})

ekle({
  anahtar: 'Ca(OH)2',
  ad: 'Kalsiyum hidroksit (sönmüş kireç)',
  adlar: ['kalsiyum hidroksit', 'sönmüş kireç', 'kireç suyu', 'Ca(OH)₂'],
  sinif: 'iyonikBilesik',
  ozet: 'Bir Ca²⁺ katyonu ile iki OH⁻ anyonundan oluşan iyonik bileşik.',
  detay: 'Formüldeki parantez, hidroksit iyonunun bir bütün olarak iki kez bulunduğunu gösterir. Ca²⁺ ile OH⁻ arasındaki bağ iyoniktir; hidroksit iyonunun **içindeki** O–H bağı ise polar kovalenttir. Aynı bileşikte iki farklı bağ türü bir arada bulunur.',
  gunluk: 'Kireç suyu CO₂ ile bulanır — CO₂ testinin klasik yöntemi budur. Yapı harcında da kullanılır.',
  geo: 'İyonik örgü (tek bir molekül geometrisi yoktur)', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'Ca²⁺ ile OH⁻ arasında iyonik bağ, hidroksitin içinde polar kovalent O–H bağı bulunur.',
  iyonlar: [
    { formul: 'Ca', yuk: 2, adet: 1, ad: 'Kalsiyum iyonu' },
    { formul: 'OH', yuk: -1, adet: 2, ad: 'Hidroksit iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'Bağımsız molekül olmadığı için molekül polaritesi sorulmaz.', adimlar: ['Kalsiyum bir metaldir, hidroksit çok atomlu bir anyondur.', 'Aralarındaki çekim elektrostatiktir.', 'Yapı iyonik örgüdür.'] },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }, { ad: 'Hidrojen bağı', aciklama: 'Hidroksit iyonları arasında ve su ile hidrojen bağı kurulabilir.' }],
  ikiliBagOrnegi: true,
  uyari: IYONIK_UYARISI('Ca(OH)₂'),
  neden: [{
    soru: 'Ca(OH)₂ formülündeki parantez ne anlama geliyor?',
    adimlar: [
      'OH bir bütündür: hidroksit iyonu (OH⁻).',
      'Kalsiyum +2 yüklüdür; dengelemek için iki tane −1 yüklü hidroksit gerekir.',
      'Parantezin dışındaki 2, parantezin içindeki **tüm** atomları 2 ile çarpar.',
    ],
    sonuc: 'Ca: 1, O: 1×2 = 2, H: 1×2 = 2 → toplam 5 atom.',
  }],
})

ekle({
  anahtar: 'Al2(SO4)3',
  ad: 'Alüminyum sülfat',
  adlar: ['alüminyum sülfat', 'şap', 'Al₂(SO₄)₃'],
  sinif: 'iyonikBilesik',
  ozet: 'İki Al³⁺ katyonu ile üç SO₄²⁻ anyonundan oluşan iyonik bileşik.',
  detay: 'Yükler şöyle dengelenir: 2 × (+3) = +6 ve 3 × (−2) = −6. Al³⁺ ile SO₄²⁻ arasındaki bağ iyoniktir; sülfat iyonunun içindeki S–O bağları polar kovalenttir.',
  gunluk: 'Su arıtmada çöktürücü olarak ve kâğıt üretiminde kullanılır.',
  geo: 'İyonik örgü (tek bir molekül geometrisi yoktur)', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'Al³⁺ ile SO₄²⁻ arasında iyonik bağ; sülfatın içinde polar kovalent S–O bağları.',
  iyonlar: [
    { formul: 'Al', yuk: 3, adet: 2, ad: 'Alüminyum iyonu' },
    { formul: 'SO4', yuk: -2, adet: 3, ad: 'Sülfat iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'Bağımsız molekül olmadığı için molekül polaritesi sorulmaz.', adimlar: ['Alüminyum metal, sülfat çok atomlu anyondur.', 'Yükler +6 ve −6 olarak dengelenir.', 'Yapı iyonik örgüdür.'] },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  ikiliBagOrnegi: true,
  uyari: IYONIK_UYARISI('Al₂(SO₄)₃'),
  neden: [{
    soru: 'Al₂(SO₄)₃ formülü nasıl okunur?',
    adimlar: [
      'Al’nin yanındaki 2 yalnızca alüminyumu etkiler → 2 Al atomu.',
      'Parantezin içi sülfat iyonudur: 1 S + 4 O.',
      'Parantezin dışındaki 3, parantezin içindeki her şeyi 3 ile çarpar → 3 S, 12 O.',
    ],
    sonuc: 'Al: 2, S: 3, O: 12 → toplam 17 atom.',
  }],
})

ekle({
  anahtar: 'CaCO3',
  ad: 'Kalsiyum karbonat',
  adlar: ['kalsiyum karbonat', 'kireç taşı', 'mermer', 'CaCO₃'],
  sinif: 'iyonikBilesik',
  ozet: 'Ca²⁺ ve CO₃²⁻ iyonlarından oluşan iyonik bileşik.',
  gunluk: 'Kireç taşı, mermer, tebeşir ve yumurta kabuğu.',
  geo: 'İyonik örgü', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'Ca²⁺ ile CO₃²⁻ arasında iyonik bağ; karbonatın içinde polar kovalent C–O bağları.',
  iyonlar: [
    { formul: 'Ca', yuk: 2, adet: 1, ad: 'Kalsiyum iyonu' },
    { formul: 'CO3', yuk: -2, adet: 1, ad: 'Karbonat iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'İyonik örgüde molekül polaritesi tanımlı değildir.' },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  ikiliBagOrnegi: true,
  uyari: IYONIK_UYARISI('CaCO₃'),
})

ekle({
  anahtar: 'NaOH',
  ad: 'Sodyum hidroksit (sud kostik)',
  adlar: ['sodyum hidroksit', 'kostik', 'sud kostik', 'NaOH'],
  sinif: 'iyonikBilesik',
  ozet: 'Na⁺ ve OH⁻ iyonlarından oluşan güçlü bazik iyonik bileşik.',
  gunluk: 'Sabun üretiminde ve lavabo açıcılarda kullanılır; ciltte yakıcıdır.',
  geo: 'İyonik örgü', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'Na⁺ ile OH⁻ arasında iyonik bağ; hidroksitin içinde polar kovalent O–H bağı.',
  iyonlar: [
    { formul: 'Na', yuk: 1, adet: 1, ad: 'Sodyum iyonu' },
    { formul: 'OH', yuk: -1, adet: 1, ad: 'Hidroksit iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'İyonik örgüde molekül polaritesi tanımlı değildir.' },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  ikiliBagOrnegi: true,
  uyari: IYONIK_UYARISI('NaOH'),
})

ekle({
  anahtar: 'CaCl2',
  ad: 'Kalsiyum klorür',
  adlar: ['kalsiyum klorür', 'CaCl₂'],
  sinif: 'iyonikBilesik',
  ozet: 'Bir Ca²⁺ katyonu ile iki Cl⁻ anyonundan oluşan iyonik bileşik.',
  detay: 'Kalsiyum 2 elektron verir, her klor 1 elektron alır. Bu yüzden oran 1 : 2’dir.',
  gunluk: 'Kışın yolların buzunu çözmek için kullanılır; nem çekicidir.',
  geo: 'İyonik örgü', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'Metal–ametal arasında elektron aktarımı; elektronegatiflik farkı 3,16 − 1,00 = 2,16.',
  iyonlar: [
    { formul: 'Ca', yuk: 2, adet: 1, ad: 'Kalsiyum iyonu' },
    { formul: 'Cl', yuk: -1, adet: 2, ad: 'Klorür iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'İyonik örgüde molekül polaritesi tanımlı değildir.' },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  yapi: () => kafesKur('Ca', 'Cl', 3),
  kafes: true,
  uyari: IYONIK_UYARISI('CaCl₂'),
})

ekle({
  anahtar: 'NH4Cl',
  ad: 'Amonyum klorür (nişadır)',
  adlar: ['amonyum klorür', 'nişadır', 'NH₄Cl'],
  sinif: 'iyonikBilesik',
  ozet: 'NH₄⁺ ve Cl⁻ iyonlarından oluşan iyonik bileşik — metal içermeyen bir iyonik bileşik örneği.',
  detay: 'İyonik bileşiklerin mutlaka metal içermesi gerekmez. Burada katyon, çok atomlu amonyum iyonudur.',
  gunluk: 'Lehim macununda ve bazı pillerde kullanılır.',
  geo: 'İyonik örgü', aci: null,
  bagTuru: 'iyonik',
  bagOzet: 'NH₄⁺ ile Cl⁻ arasında iyonik bağ; amonyumun içinde polar kovalent N–H bağları.',
  iyonlar: [
    { formul: 'NH4', yuk: 1, adet: 1, ad: 'Amonyum iyonu' },
    { formul: 'Cl', yuk: -1, adet: 1, ad: 'Klorür iyonu' },
  ],
  polarite: { sonuc: 'İyonik', not: 'İyonik örgüde molekül polaritesi tanımlı değildir.' },
  mai: [{ ad: 'İyonik bağ (elektrostatik çekim)', baskin: true }],
  ikiliBagOrnegi: true,
  uyari: IYONIK_UYARISI('NH₄Cl'),
})

/* ==================================================================
   5) ASİTLER VE DİĞER MOLEKÜLLER
   ================================================================== */

ekle({
  anahtar: 'HNO3',
  ad: 'Nitrik asit',
  adlar: ['nitrik asit', 'kezzap', 'HNO₃'],
  sinif: 'molekulerBilesik',
  ozet: 'Azot merkezli, kuvvetli bir asit olan moleküler bileşik.',
  detay: 'Saf hâlde moleküler bir sıvıdır; suda tamamen iyonlaşarak H⁺ ve NO₃⁻ verir. Azot çevresindeki yapı trigonal düzlemseldir; iki N–O bağı rezonansla eşdeğerdir.',
  gunluk: 'Gübre ve patlayıcı üretiminde kullanılır; çok aşındırıcıdır.',
  merkez: 'N',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Trigonal düzlemsel (azot çevresinde)', aci: '≈120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'N–O ve O–H bağları polar kovalenttir.',
  polarite: { sonuc: 'Polar', adimlar: ['O–H ve N–O bağları polardır.', 'Molekül simetrik değildir.', 'Bağ dipolleri birbirini götürmez.'], sonucCumlesi: 'HNO₃ polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true }, { ad: 'Dipol-dipol etkileşimi' }, { ad: 'London dispersiyon kuvvetleri' }],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => { const k = K(); const n = k.merkez('N', 'trigonalDuzlemsel'); k.ekle(n, 'O', { derece: 2, geometri: 'uc2Cift' }); k.ekle(n, 'O', { geometri: 'uc2Cift' }); const oh = k.ekle(n, 'O', { geometri: 'acisal2:105' }); k.ekle(oh, 'H', { geometri: 'tekli' }); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'N' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }, { sembol: 'H' }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 3, b: 4 }] },
})

ekle({
  anahtar: 'H2SO4',
  ad: 'Sülfürik asit',
  adlar: ['sülfürik asit', 'zaç yağı', 'H₂SO₄'],
  sinif: 'molekulerBilesik',
  ozet: 'Kükürt merkezli, tetrahedral yapılı kuvvetli asit.',
  detay: 'Saf hâlde moleküler bir sıvıdır; suda iyonlaşarak H⁺ ve SO₄²⁻ verir. Kükürdün çevresinde 4 oksijen tetrahedral yerleşir; ikisi hidrojen taşır.',
  gunluk: 'Araba akülerinde bulunur; endüstride en çok üretilen kimyasallardan biridir.',
  merkez: 'S',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral (kükürt çevresinde)', aci: '≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'S–O ve O–H bağları polar kovalenttir.',
  polarite: { sonuc: 'Polar', adimlar: ['S–O ve O–H bağları polardır.', 'Molekülde iki O–H ucu vardır, simetri tam değildir.', 'Bağ dipolleri birbirini götürmez.'], sonucCumlesi: 'H₂SO₄ polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true, aciklama: 'İki O–H grubu sayesinde güçlü hidrojen bağları kurar; bu yüzden yoğun ve viskoz bir sıvıdır.' }, { ad: 'Dipol-dipol etkileşimi' }],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => { const k = K(); const s = k.merkez('S', 'tetrahedral'); k.ekle(s, 'O', { derece: 2, geometri: 'uc2Cift' }); k.ekle(s, 'O', { derece: 2, geometri: 'uc2Cift' }); const o1 = k.ekle(s, 'O', { geometri: 'acisal2:105' }); const o2 = k.ekle(s, 'O', { geometri: 'acisal2:105' }); k.ekle(o1, 'H', { geometri: 'tekli' }); k.ekle(o2, 'H', { geometri: 'tekli' }); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'S' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2, derece: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 3, b: 5 }, { a: 4, b: 6 }] },
})

ekle({
  anahtar: 'HF',
  ad: 'Hidrojen florür',
  adlar: ['hidrojen florür', 'HF', 'hidroflorik asit'],
  sinif: 'molekulerBilesik',
  ozet: 'En polar kovalent bağlardan birine sahip iki atomlu molekül.',
  detay: 'Elektronegatiflik farkı 3,98 − 2,20 = 1,78’dir. Bu değer 1,7’nin üzerindedir; yine de HF gaz fazında moleküler bir bileşiktir. Bu, "1,7 üstü mutlaka iyoniktir" kuralının kesin bir sınır olmadığını gösterir — sınır, metal-ametal ayrımıyla birlikte değerlendirilmelidir.',
  gunluk: 'Cam aşındırmada kullanılır; çok tehlikelidir.',
  merkez: 'F',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'Flor, elementler arasında en yüksek elektronegatifliğe sahiptir; ortak elektronları güçlü çeker.',
  polarite: { sonuc: 'Polar', adimlar: ['Flor hidrojenden çok daha elektronegatiftir.', 'Ortak elektronlar flora kayar.', 'İki atomlu molekülde polar bağ = polar molekül.'], sonucCumlesi: 'HF polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true, aciklama: 'H doğrudan F’ye bağlı olduğu için güçlü hidrojen bağı kurar.' }, { ad: 'Dipol-dipol etkileşimi' }],
  hidrojenBagi: { verici: 'H', alici: 'F' },
  yapi: () => { const k = K(); const f = k.merkez('F', 'uc3Cift'); k.ekle(f, 'H', { geometri: 'tekli' }); k.cift(f, 3); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'F', ciftler: 3 }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }] },
})

ekle({
  anahtar: 'H2S',
  ad: 'Hidrojen sülfür',
  adlar: ['hidrojen sülfür', 'H₂S', 'kükürtlü hidrojen'],
  sinif: 'molekulerBilesik',
  ozet: 'Suya benzer açısal yapıda, ama hidrojen bağı yapamayan polar molekül.',
  detay: 'H₂S ile H₂O karşılaştırması öğreticidir: ikisi de açısaldır, ikisi de polardır. Ama kükürt yeterince elektronegatif olmadığı için H₂S hidrojen bağı yapamaz. Sonuç: su 100 °C’de, H₂S −60 °C’de kaynar.',
  gunluk: 'Çürük yumurta kokusunun kaynağı.',
  merkez: 'S',
  elektronGeo: 'Tetrahedral', geo: 'Açısal (kırık)', aci: '≈92°',
  bagTuru: 'polarKovalent',
  bagOzet: 'S–H bağı zayıf polardır (fark: 2,58 − 2,20 = 0,38).',
  polarite: { sonuc: 'Polar', adimlar: ['S–H bağları az da olsa polardır.', 'Molekül açısaldır.', 'Dipoller birbirini götürmez.'], sonucCumlesi: 'H₂S polar bir moleküldür ama su kadar değil.' },
  mai: [{ ad: 'Dipol-dipol etkileşimi', baskin: true, aciklama: 'Hidrojen bağı yapamaz: H, F/O/N’ye bağlı değildir.' }, { ad: 'London dispersiyon kuvvetleri' }],
  yapi: () => { const k = K(); const s = k.merkez('S', 'acisal2:92'); k.ekle(s, 'H', { geometri: 'tekli' }); k.ekle(s, 'H', { geometri: 'tekli' }); k.cift(s, 2); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'S', ciftler: 2 }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }] },
})

ekle({
  anahtar: 'SO2',
  ad: 'Kükürt dioksit',
  adlar: ['kükürt dioksit', 'SO₂'],
  sinif: 'molekulerBilesik',
  ozet: 'Açısal yapılı polar molekül. CO₂ ile karşılaştırması polariteyi anlamak için çok öğreticidir.',
  detay: 'CO₂ doğrusal ve apolardır; SO₂ ise kükürtteki ortaklanmamış çift yüzünden açısaldır ve polardır. İkisi de "AO₂" biçiminde yazılır ama geometrileri farklıdır.',
  gunluk: 'Volkanik gazlarda ve fosil yakıt yanmasında oluşur; asit yağmurlarının nedenlerinden biridir.',
  merkez: 'S',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Açısal (kırık)', aci: '≈119°',
  bagTuru: 'polarKovalent',
  bagOzet: 'S–O bağları polardır; rezonans nedeniyle iki bağ eşdeğerdir.',
  delokalize: true,
  polarite: { sonuc: 'Polar', adimlar: ['S–O bağları polardır.', 'Kükürtte bir ortaklanmamış çift vardır → molekül açısaldır.', 'Bağ dipolleri birbirini götürmez.'], sonucCumlesi: 'SO₂ polar bir moleküldür.' },
  mai: [{ ad: 'Dipol-dipol etkileşimi', baskin: true }, { ad: 'London dispersiyon kuvvetleri' }],
  yapi: () => { const k = K(); const s = k.merkez('S', 'acisal1:119'); k.ekle(s, 'O', { derece: 2, geometri: 'uc2Cift' }); k.ekle(s, 'O', { derece: 2, geometri: 'uc2Cift' }); k.cift(s); return k.bitir() },
  rezonans: [
    { atomlar: [{ sembol: 'S', ciftler: 1 }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 3 }], baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }] },
    { atomlar: [{ sembol: 'S', ciftler: 1 }, { sembol: 'O', ciftler: 3 }, { sembol: 'O', ciftler: 2 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 2 }] },
  ],
})

ekle({
  anahtar: 'BF3',
  ad: 'Bor triflorür',
  adlar: ['bor triflorür', 'BF₃'],
  sinif: 'molekulerBilesik',
  ozet: 'Borun oktetini tamamlamadığı, trigonal düzlemsel apolar molekül.',
  detay: 'Borun çevresinde yalnızca 6 elektron vardır — oktet kuralının bilinen bir istisnası. Bu yüzden BF₃ elektron çifti kabul etmeye çok isteklidir (Lewis asidi).',
  gunluk: 'Endüstride tepkime hızlandırıcı (katalizör) olarak kullanılır.',
  merkez: 'B',
  elektronGeo: 'Trigonal düzlemsel', geo: 'Trigonal düzlemsel', aci: '120°',
  bagTuru: 'polarKovalent',
  bagOzet: 'B–F bağları çok polardır (fark: 3,98 − 2,04 = 1,94) ama molekül simetriktir.',
  polarite: { sonuc: 'Apolar', adimlar: ['B–F bağları güçlü polardır.', 'Üç bağ 120°’lik açılarla tam simetrik yerleşir.', 'Üç dipol vektörü toplandığında sonuç sıfırdır.'], sonucCumlesi: 'Bağları çok polar olmasına rağmen BF₃ apolar bir moleküldür.' },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true }],
  yapi: () => { const k = K(); const b = k.merkez('B', 'trigonalDuzlemsel'); const f1 = k.ekle(b, 'F', { geometri: 'uc3Cift' }); const f2 = k.ekle(b, 'F', { geometri: 'uc3Cift' }); const f3 = k.ekle(b, 'F', { geometri: 'uc3Cift' }); k.cift(f1, 3); k.cift(f2, 3); k.cift(f3, 3); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'B' }, { sembol: 'F', ciftler: 3 }, { sembol: 'F', ciftler: 3 }, { sembol: 'F', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }] },
})

ekle({
  anahtar: 'CCl4',
  ad: 'Karbon tetraklorür',
  adlar: ['karbon tetraklorür', 'CCl₄'],
  sinif: 'molekulerBilesik',
  ozet: 'Tetrahedral, tam simetrik olduğu için apolar molekül.',
  detay: 'C–Cl bağları polardır ama dört bağ simetrik yerleştiği için bileşke dipol sıfırdır. Bir hidrojen yerine geçtiğinde (CHCl₃) simetri bozulur ve molekül polar hâle gelir.',
  gunluk: 'Eskiden kuru temizlemede kullanılırdı; zehirli olduğu için terk edildi.',
  merkez: 'C',
  elektronGeo: 'Tetrahedral', geo: 'Tetrahedral', aci: '≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C–Cl bağları polardır (fark: 3,16 − 2,55 = 0,61).',
  polarite: { sonuc: 'Apolar', adimlar: ['C–Cl bağları polardır.', 'Dört bağ tetrahedral simetriyle yerleşir.', 'Dipoller birbirini tam olarak götürür.'], sonucCumlesi: 'CCl₄ apolar bir moleküldür.' },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'tetrahedral'); for (let i = 0; i < 4; i += 1) { const cl = k.ekle(c, 'Cl', { geometri: 'uc3Cift' }); k.cift(cl, 3) } return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
})

ekle({
  anahtar: 'C2H5OH',
  ad: 'Etanol (etil alkol)',
  adlar: ['etanol', 'etil alkol', 'alkol', 'C₂H₅OH', 'CH3CH2OH'],
  sinif: 'molekulerBilesik',
  ozet: 'İki karbonlu, hidroksil (–OH) grubu taşıyan polar molekül.',
  detay: 'Molekülün karbon zinciri apolar, –OH ucu polardır. Bu ikili yapı, etanolün hem suyla hem apolar maddelerle karışabilmesini açıklar. –OH grubu sayesinde hidrojen bağı kurar; bu yüzden benzer büyüklükteki etandan (−89 °C) çok daha yüksek sıcaklıkta kaynar (78 °C).',
  gunluk: 'Kolonya ve dezenfektanların etkin maddesi.',
  merkez: 'C',
  elektronGeo: 'Tetrahedral (karbonlar çevresinde)', geo: 'Karbonlarda tetrahedral, oksijende açısal', aci: '≈109,5° (C), ≈104,5° (O)',
  bagTuru: 'polarKovalent',
  bagOzet: 'O–H bağı belirgin polardır; C–H bağları neredeyse apolardır.',
  polarite: { sonuc: 'Polar', adimlar: ['–OH grubundaki O–H bağı güçlü polardır.', 'Molekülün geometrisi simetrik değildir.', 'Bağ dipolleri birbirini götürmez.'], sonucCumlesi: 'Etanol polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true, aciklama: '–OH grubu hem hidrojen bağı verir hem alır.' }, { ad: 'Dipol-dipol etkileşimi' }, { ad: 'London dispersiyon kuvvetleri', aciklama: 'Karbon zinciri uzadıkça London kuvvetleri de güçlenir.' }],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => {
    const k = K()
    const c1 = k.merkez('C', 'tetrahedral')
    const c2 = k.ekle(c1, 'C', { geometri: 'tetrahedral', burulma: 60 })
    k.ekle(c1, 'H'); k.ekle(c1, 'H'); k.ekle(c1, 'H')
    const o = k.ekle(c2, 'O', { geometri: 'acisal2:104.5' })
    k.ekle(c2, 'H'); k.ekle(c2, 'H')
    k.ekle(o, 'H', { geometri: 'tekli' }); k.cift(o, 2)
    return k.bitir()
  },
  lewis: {
    atomlar: [{ sembol: 'C' }, { sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }],
    baglar: [{ a: 0, b: 1 }, { a: 1, b: 2 }, { a: 2, b: 8 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 }, { a: 1, b: 6 }, { a: 1, b: 7 }],
  },
})

ekle({
  anahtar: 'CH3COOH',
  ad: 'Asetik asit',
  adlar: ['asetik asit', 'sirke asidi', 'etanoik asit', 'CH₃COOH'],
  sinif: 'molekulerBilesik',
  ozet: 'Karboksil (–COOH) grubu taşıyan, zayıf asit özelliği gösteren polar molekül.',
  detay: 'Karboksil karbonu trigonal düzlemseldir (≈120°), metil karbonu tetrahedraldir (≈109,5°). Sıvı hâlde iki asetik asit molekülü karşılıklı iki hidrojen bağıyla "dimer" oluşturur.',
  gunluk: 'Sirkenin ekşi tadını veren madde (yaklaşık %5).',
  merkez: 'C',
  elektronGeo: 'Trigonal düzlemsel (karboksil karbonu)', geo: 'Karboksilde düzlemsel, metilde tetrahedral', aci: '≈120° ve ≈109,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C=O ve O–H bağları güçlü polardır; C–H bağları apolara yakındır.',
  polarite: { sonuc: 'Polar', adimlar: ['Karboksil grubundaki C=O ve O–H bağları çok polardır.', 'Molekül simetrik değildir.', 'Bağ dipolleri toplanır.'], sonucCumlesi: 'Asetik asit polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true, aciklama: 'Sıvı hâlde çift hidrojen bağıyla dimer oluşturur.' }, { ad: 'Dipol-dipol etkileşimi' }, { ad: 'London dispersiyon kuvvetleri' }],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => {
    const k = K()
    const c1 = k.merkez('C', 'trigonalDuzlemsel')
    k.ekle(c1, 'O', { derece: 2, geometri: 'uc2Cift' })
    const o2 = k.ekle(c1, 'O', { geometri: 'acisal2:105' })
    const c2 = k.ekle(c1, 'C', { geometri: 'tetrahedral' })
    k.ekle(o2, 'H', { geometri: 'tekli' })
    k.ekle(c2, 'H'); k.ekle(c2, 'H'); k.ekle(c2, 'H')
    return k.bitir()
  },
  lewis: {
    atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'O', ciftler: 2 }, { sembol: 'C' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }],
    baglar: [{ a: 0, b: 1, derece: 2 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 2, b: 7 }, { a: 3, b: 4 }, { a: 3, b: 5 }, { a: 3, b: 6 }],
  },
})

ekle({
  anahtar: 'CH3OH',
  ad: 'Metanol (metil alkol)',
  adlar: ['metanol', 'metil alkol', 'CH₃OH'],
  sinif: 'molekulerBilesik',
  ozet: 'Tek karbonlu alkol; polar ve hidrojen bağı yapabilen molekül.',
  detay: 'Etanolden farkı tek karbonlu olmasıdır. İnsan vücudunda formaldehite dönüştüğü için çok zehirlidir — etanol ile karıştırılmamalıdır.',
  gunluk: 'Cam suyu ve endüstriyel çözücülerde bulunur; içilmesi öldürücüdür.',
  merkez: 'C',
  elektronGeo: 'Tetrahedral', geo: 'Karbonda tetrahedral, oksijende açısal', aci: '≈109,5° ve ≈104,5°',
  bagTuru: 'polarKovalent',
  bagOzet: 'O–H bağı polardır; C–H bağları apolara yakındır.',
  polarite: { sonuc: 'Polar', adimlar: ['–OH grubu güçlü polardır.', 'Molekül simetrik değildir.', 'Net dipol oluşur.'], sonucCumlesi: 'Metanol polar bir moleküldür.' },
  mai: [{ ad: 'Hidrojen bağı', baskin: true }, { ad: 'Dipol-dipol etkileşimi' }, { ad: 'London dispersiyon kuvvetleri' }],
  hidrojenBagi: { verici: 'H', alici: 'O' },
  yapi: () => { const k = K(); const c = k.merkez('C', 'tetrahedral'); const o = k.ekle(c, 'O', { geometri: 'acisal2:104.5' }); k.ekle(c, 'H'); k.ekle(c, 'H'); k.ekle(c, 'H'); k.ekle(o, 'H', { geometri: 'tekli' }); k.cift(o, 2); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'O', ciftler: 2 }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }, { sembol: 'H' }], baglar: [{ a: 0, b: 1 }, { a: 1, b: 5 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }] },
})

ekle({
  anahtar: 'HCN',
  ad: 'Hidrojen siyanür',
  adlar: ['hidrojen siyanür', 'HCN', 'prussik asit'],
  sinif: 'molekulerBilesik',
  ozet: 'Doğrusal yapılı, üçlü bağ içeren polar molekül.',
  gunluk: 'Çok zehirli bir gazdır; acıbadem kokusuyla bilinir.',
  merkez: 'C',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C≡N bağı polardır; H–C bağı zayıf polardır.',
  polarite: { sonuc: 'Polar', adimlar: ['Azot karbondan daha elektronegatiftir.', 'Molekül doğrusal olsa da uçlar farklıdır (H ve N).', 'Dipoller birbirini götürmez, aynı yöne toplanır.'], sonucCumlesi: 'HCN doğrusal olmasına rağmen polar bir moleküldür.' },
  mai: [{ ad: 'Dipol-dipol etkileşimi', baskin: true }, { ad: 'London dispersiyon kuvvetleri' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'dogrusal'); k.ekle(c, 'H', { geometri: 'tekli' }); const n = k.ekle(c, 'N', { derece: 3, geometri: 'uc1Cift' }); k.cift(n); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C' }, { sembol: 'H' }, { sembol: 'N', ciftler: 1 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2, derece: 3 }] },
  notlar: ['Doğrusal olmak apolar olmayı garanti etmez: uçlardaki atomlar farklıysa dipoller birbirini götüremez (HCN ↔ CO₂ karşılaştırması).'],
})

ekle({
  anahtar: 'PCl5',
  ad: 'Fosfor pentaklorür',
  adlar: ['fosfor pentaklorür', 'PCl₅'],
  sinif: 'molekulerBilesik',
  ozet: 'Fosforun oktetini genişlettiği, trigonal bipiramidal yapılı apolar molekül.',
  detay: 'Fosforun çevresinde 10 elektron vardır — oktet kuralının bir istisnası. 3. periyot elementleri d orbitallerini kullanarak okteti genişletebilir.',
  merkez: 'P',
  elektronGeo: 'Trigonal bipiramidal', geo: 'Trigonal bipiramidal', aci: '120° (ekvatoral) ve 90° (eksenel)',
  bagTuru: 'polarKovalent',
  bagOzet: 'P–Cl bağları polardır (fark: 3,16 − 2,19 = 0,97) ama molekül simetriktir.',
  polarite: { sonuc: 'Apolar', adimlar: ['P–Cl bağları polardır.', 'Beş bağ simetrik yerleşir.', 'Dipoller birbirini götürür.'], sonucCumlesi: 'PCl₅ apolar bir moleküldür.' },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true }],
  yapi: () => { const k = K(); const p = k.merkez('P', 'trigonalBipiramidal'); for (let i = 0; i < 5; i += 1) { const cl = k.ekle(p, 'Cl', { geometri: 'uc3Cift' }); k.cift(cl, 3) } return k.bitir() },
  lewis: { atomlar: [{ sembol: 'P' }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }, { sembol: 'Cl', ciftler: 3 }], baglar: [{ a: 0, b: 1 }, { a: 0, b: 2 }, { a: 0, b: 3 }, { a: 0, b: 4 }, { a: 0, b: 5 }] },
})

ekle({
  anahtar: 'CO',
  ad: 'Karbon monoksit',
  adlar: ['karbon monoksit', 'CO'],
  sinif: 'molekulerBilesik',
  ozet: 'Karbon ve oksijen arasında üçlü bağ bulunan, renksiz ve kokusuz zehirli gaz.',
  detay: 'CO’da karbon ile oksijen arasında üçlü bağ vardır; bağların biri koordine kovalenttir. Formal yükler C: −1, O: +1 çıkar. Bu, elektronegatifliğe ters göründüğü için CO’nun dipol momenti beklenenden küçüktür.',
  gunluk: 'Bacalarda eksik yanma sonucu oluşur; "sessiz katil" denir çünkü kokusuzdur.',
  merkez: 'C',
  elektronGeo: 'Doğrusal', geo: 'Doğrusal', aci: '180°',
  bagTuru: 'polarKovalent',
  bagOzet: 'C≡O üçlü bağı; bağ enerjisi bilinen en yüksek bağ enerjilerinden biridir.',
  polarite: { sonuc: 'Polar (çok zayıf)', adimlar: ['Farklı iki atom → bağ polardır.', 'Ancak formal yükler elektronegatifliğin tersi yöndedir.', 'Bu iki etki büyük ölçüde birbirini dengeler.'], sonucCumlesi: 'CO çok küçük bir dipol momentine sahiptir.' },
  mai: [{ ad: 'London dispersiyon kuvvetleri', baskin: true }, { ad: 'Dipol-dipol etkileşimi', aciklama: 'Dipol çok küçük olduğu için katkısı sınırlıdır.' }],
  yapi: () => { const k = K(); const c = k.merkez('C', 'uc1Cift'); const o = k.ekle(c, 'O', { derece: 3, geometri: 'uc1Cift' }); k.cift(c); k.cift(o); return k.bitir() },
  lewis: { atomlar: [{ sembol: 'C', ciftler: 1 }, { sembol: 'O', ciftler: 1 }], baglar: [{ a: 0, b: 1, derece: 3 }] },
})

/* ————— Dizinler ————— */
export { TURLER }

/** Anahtar → tür. Aramada ve analizde ilk başvurulan yer. */
export const TUR_SOZLUGU = Object.fromEntries(TURLER.map((t) => [t.anahtar, t]))

/** Ad/takma ad → tür (küçük harfe indirgenmiş). */
export const TUR_ADLARI = (() => {
  const harita = {}
  for (const tur of TURLER) {
    const adaylar = [tur.ad, ...tur.adlar, tur.anahtar]
    for (const aday of adaylar) harita[String(aday).toLocaleLowerCase('tr')] = tur
  }
  return harita
})()

/** Rastgele keşif için uygun türler (yapı verisi olanlar). */
export const KESIF_LISTESI = TURLER.filter((t) => t.yapi || t.iyonlar).map((t) => t.anahtar)
