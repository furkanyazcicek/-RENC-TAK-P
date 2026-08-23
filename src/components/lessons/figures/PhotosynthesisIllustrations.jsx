import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 }, { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 }, { x: 768, y: 512, width: 768, height: 512 },
]
const markerPositions = [
  { x: 70, y: 78, targetX: 360, targetY: 265 }, { x: 845, y: 78, targetX: 1165, targetY: 265 },
  { x: 70, y: 946, targetX: 360, targetY: 760 }, { x: 845, y: 946, targetX: 1165, targetY: 760 },
]

function Plate({ src, alt, items, activeRegion }) {
  const regions = items.map((item, index) => ({
    ...item,
    shape: zones[index],
    zoom: { x: index % 2 ? 75 : 25, y: index < 2 ? 25 : 75, scale: 1.45 },
  }))
  const markers = items.map((item, index) => ({
    key: item.key,
    title: item.marker,
    width: item.width ?? 360,
    ...markerPositions[index],
  }))
  return <InteractiveIllustration src={`/lesson-assets/fotosentez-kemosentez/${src}.jpg`} srcSet={`/lesson-assets/fotosentez-kemosentez/${src}-900.jpg 900w, /lesson-assets/fotosentez-kemosentez/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function ChloroplastPigmentPlate({ activeRegion = null }) {
  const items = [
    { key: 'kloroplast-yapi', marker: 'Kloroplast · granum · stroma', width: 390, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/kloroplast-yapi.jpg', title: 'İki işlikli kloroplastı mekânıyla tanı', alt: 'Çift zarlı kloroplast kesitinde granum, tilakoit, stroma, lamel, DNA, ribozom ve nişasta tanesi.', note: 'Işığa bağlı tepkimeler pigment ve ETS elemanlarının bulunduğu tilakoit zarında; Calvin döngüsü ise enzimce zengin stromada yürür. Granum, tilakoit disklerinin üst üste dizilmiş hâlidir.' } },
    { key: 'pigment-spektrum', marker: 'Pigment · soğurma · yansıma', width: 385, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/pigment-spektrum.jpg', title: 'Yaprağın rengini emilen değil yansıyan ışıkla açıkla', alt: 'Mavi ve kırmızı ışığın pigmentlerce soğurulduğu, yeşilin göze yansıtıldığı ve karotenoidlerin koruma sağladığı sahne.', note: 'Klorofiller mor-mavi ve kırmızı bölgede güçlü soğurur; yeşil ışığın önemli kısmı yansıtıldığı için yaprak yeşil görünür. Karotenoidler farklı dalga boylarını toplar ve aşırı ışığa karşı fotokoruma sağlar.' } },
    { key: 'engelman-deneyi', marker: 'Engelmann · etki spektrumu', width: 370, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/engelman-deneyi.jpg', title: 'Oksijen arayan bakterileri fotosentez hızının göstergesi yap', alt: 'Prizmayla renklere ayrılan ışık altında ipliksi alg ve mor-mavi ile kırmızı bölgede kümelenen aerob bakteriler.', note: 'Aerob bakterilerin mor-mavi ve kırmızı bölgelerde toplanması, bu dalga boylarında oksijen üretiminin ve dolayısıyla fotosentezin daha yüksek olduğunu gösterir. Bu bir etki spektrumu deneyidir.' } },
    { key: 'atom-kaynagi', marker: 'O₂ sudan · karbon CO₂’den', width: 380, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/atom-kaynagi.jpg', title: 'Üründeki atomu doğru ham maddeye geri izle', alt: 'İşaretli su oksijeninin gaz hâlindeki oksijene, işaretli karbondioksit karbonunun organik moleküle geçtiği izleme sahnesi.', note: 'Oksijenli fotosentezde atmosfere verilen O₂’nin oksijen atomları suyun fotolizinden gelir. Organik molekülün karbon iskeleti ise CO₂’den kurulur; genel denklem bu atom kaynağını tek başına görünür kılmaz.' } },
  ]
  return <Plate src="kloroplast-pigment-v1" alt="Kloroplast yapısı, pigmentler, Engelmann deneyi ve fotosentezde atom kaynaklarını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function LightReactionsPlate({ activeRegion = null }) {
  const items = [
    { key: 'fotosistem-ii-fotoliz', marker: 'FS II · fotoliz · O₂', width: 320, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/fotosistem-ii-fotoliz.jpg', title: 'Eksilen elektronu suyun fotoliziyle tamamla', alt: 'Fotosistem II tepkime merkezinde ışıkla yükselen elektron ve suyun oksijen, proton ve elektrona ayrılması.', note: 'P680 ışığı soğurunca elektronunu birincil alıcıya verir. Tepkime merkezinin elektron açığı suyun fotoliziyle kapanır; O₂ yan ürün olarak çıkar, H⁺ tilakoit boşluğundaki gradyana katkı sağlar.' } },
    { key: 'ets-proton', marker: 'ETS · H⁺ gradyanı · ATP sentaz', width: 405, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/ets-proton.jpg', title: 'Elektron akışını proton basıncına, basıncı ATP’ye çevir', alt: 'Tilakoit zarındaki elektron taşıma zinciri, lümene proton aktarımı ve stromaya dönen protonlarla çalışan ATP sentaz.', note: 'Elektronlar taşıyıcılarda daha düşük enerji düzeylerine inerken açığa çıkan enerji H⁺ iyonlarını stromadan lümene taşır. H⁺ ATP sentazdan stromaya dönerken fotofosforilasyonla ATP üretilir.' } },
    { key: 'fotosistem-i-nadph', marker: 'FS I · ferredoksin · NADPH', width: 365, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/fotosistem-i-nadph.jpg', title: 'Elektrona ikinci ışık desteğini verip indirgeme gücü üret', alt: 'Fotosistem I, ferredoksin ve NADP redüktaz üzerinden stromada NADPH oluşumu.', note: 'Fotosistem I’e ulaşan elektron ikinci kez ışıkla yükseltilir. Ferredoksin ve NADP⁺ redüktaz yoluyla NADP⁺ indirgenir; Calvin döngüsünün indirgeme gücü NADPH oluşur.' } },
    { key: 'dongusel-dongusel-olmayan', marker: 'Döngüsel · döngüsel olmayan', width: 390, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/dongusel-dongusel-olmayan.jpg', title: 'Ürün ihtiyacına göre elektronun dönüş yolunu seç', alt: 'Yalnız fotosistem I ile ATP üreten döngüsel yol ve iki fotosistemle ATP, NADPH ve oksijen üreten döngüsel olmayan yol.', note: 'Döngüsel akış yalnız FS I’i kullanır; elektron geri döner, ATP oluşur fakat NADPH ve O₂ oluşmaz. Döngüsel olmayan akış FS II ve FS I’i kullanır; elektron suyla başlar, NADPH’de sonlanır.' } },
  ]
  return <Plate src="isik-reaksiyonlari-v1" alt="Işığa bağlı tepkimelerde fotosistemler, ETS, kemiozmoz ve elektron akışlarını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function CalvinCyclePlate({ activeRegion = null }) {
  const items = [
    { key: 'karbon-fiksasyonu', marker: 'CO₂ fiksasyonu · RuBisCO', width: 360, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/karbon-fiksasyonu.jpg', title: 'Bir karbonu beş karbonlu alıcıya bağla', alt: 'RuBisCO enziminin karbondioksiti RuBP’ye bağlayıp kararsız altı karbonlu ara ürünü iki üç karbonlu moleküle ayırması.', note: 'RuBisCO, CO₂’yi beş karbonlu RuBP’ye bağlar. Kararsız altı karbonlu ara ürün hemen iki üç karbonlu bileşiğe ayrılır; döngünün karbon fiksasyonu basamağı budur.' } },
    { key: 'indirgenme-pgal', marker: 'ATP + NADPH · PGAL', width: 335, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/indirgenme-pgal.jpg', title: 'Işık evresinin enerji ve elektronunu üç karbonlu ürüne yatır', alt: 'ATP ve NADPH kullanılarak üç karbonlu ara ürünlerin PGAL moleküllerine indirgenmesi.', note: 'Işığa bağlı tepkimelerden gelen ATP enerji, NADPH yüksek enerjili elektron ve hidrojen sağlar. Böylece üç karbonlu ara ürün PGAL/G3P’ye indirgenir; ADP ve NADP⁺ yeniden ışık evresine döner.' } },
    { key: 'rubp-yenilenme', marker: 'RuBP yenilenmesi · ATP', width: 350, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/rubp-yenilenme.jpg', title: 'Döngünün karbon kabul edicisini yeniden kur', alt: 'PGAL moleküllerinin çoğunun ATP harcanarak yeniden RuBP’ye dönüştürülmesi ve döngünün sürmesi.', note: 'Üretilen PGAL’nin büyük bölümü ürüne ayrılmaz; karbon iskeletleri yeniden düzenlenir ve ATP harcanarak RuBP oluşturulur. RuBP yenilenmezse yeni CO₂ bağlanamaz.' } },
    { key: 'urun-yollari', marker: 'PGAL · glikoz · diğer organikler', width: 400, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/urun-yollari.jpg', title: 'Döngüden çıkan üç karbonlu ürünü metabolik kavşağa yerleştir', alt: 'PGAL’den glikoz, sakkaroz, nişasta, selüloz, amino asit ve lipit sentezine uzanan yollar.', note: 'Calvin döngüsünün doğrudan çıktısı serbest glikoz değil üç karbonlu PGAL’dir. PGAL karbon iskeletleri glikoz ve sakkarozun, nişasta ve selülozun; mineral azot katkısıyla amino asitlerin, başka yollarla lipitlerin yapımına gider.' } },
  ]
  return <Plate src="calvin-dongusu-v1" alt="Calvin döngüsünde karbon fiksasyonu, indirgenme, RuBP yenilenmesi ve ürün yollarını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function PhotosynthesisRatePlate({ activeRegion = null }) {
  const items = [
    { key: 'isik-siddeti', marker: 'Işık şiddeti · doygunluk', width: 355, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/isik-siddeti.jpg', title: 'Artışı plato yapan yeni sınırlayıcıyı bul', alt: 'Loş ve güçlü ışık koşullarında fotosentez hızının yükselip doyuma ulaşması ve reaksiyon merkezlerinin doluluğu.', note: 'Düşük ışıkta ışık şiddeti arttıkça hız artar. Bir noktadan sonra pigment ve tepkime merkezleri kapasiteye yaklaşır; CO₂ veya sıcaklık sınırlayıcı olur ve eğri plato yapar.' } },
    { key: 'co2-minimum', marker: 'CO₂ · minimum kuralı', width: 330, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/co2-minimum.jpg', title: 'En az bulunan etmeni sistemin dar boğazı olarak gör', alt: 'Zayıf ve güçlü ışık altında farklı karbon dioksit hız eğrileri ile dar boğazla gösterilen minimum kuralı.', note: 'CO₂ artışı yalnız diğer etmenler yeterliyse hızı yükseltir. Kuvvetli ışıkta CO₂ sınırlaması daha görünür olabilir; zayıf ışıkta fazladan CO₂ ışık açığını kapatamaz. Hızı en yetersiz etmen belirler.' } },
    { key: 'sicaklik-enzim', marker: 'Sıcaklık · optimum · enzim', width: 355, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/sicaklik-enzim.jpg', title: 'Çan eğrisini enzim ve su dengesiyle açıkla', alt: 'Soğukta yavaş, optimumda hızlı ve aşırı sıcaklıkta enzim yapısı ile stomaların bozulduğu fotosentez tepkisi.', note: 'Sıcaklık Calvin döngüsündeki enzimleri etkiler: düşük sıcaklık çarpışmaları yavaşlatır, optimumda hız yükselir. Aşırı sıcak enzim yapısını bozabilir ve su kaybıyla stomaları kapatıp CO₂ girişini azaltabilir.' } },
    { key: 'stoma-klorofil', marker: 'Stoma · klorofil · yaprak yapısı', width: 400, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/stoma-klorofil.jpg', title: 'İç faktörleri ışık yakalama ve gaz giriş kapasitesine bağla', alt: 'Yaprak kesiti, palizat hücrelerindeki kloroplastlar, açık-kapalı stoma, kökten su-mineral alımı ve yaprak yaşının etkisi.', note: 'Klorofil ve kloroplast sayısı ışık yakalama kapasitesini; stoma açıklığı CO₂ girişini belirler. Yaprak yüzeyi, yaşı, su-mineral durumu ve palizat dokusunun gelişimi toplam hızı değiştirir.' } },
  ]
  return <Plate src="fotosentez-hiz-v1" alt="Fotosentez hızını etkileyen ışık, karbon dioksit, sıcaklık ve bitkisel faktörleri gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}

export function ChemosynthesisPlate({ activeRegion = null }) {
  const items = [
    { key: 'inorganik-oksidasyon', marker: 'İnorganik oksidasyon · ATP', width: 380, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/inorganik-oksidasyon.jpg', title: 'Işığın yerine inorganik maddeden elektron al', alt: 'Kemo-ototrof bakterinin amonyak, hidrojen sülfür, demir ve hidrojeni oksitleyip ETS, proton gradyanı, ATP ve karbon fiksasyonu üretmesi.', note: 'Kemo-ototroflar NH₃, NO₂⁻, H₂S, H₂ veya Fe²⁺ gibi inorganik maddeleri oksitler. Elektronlar ETS’den geçerken ATP ve indirgeme gücü oluşur; bunlar CO₂’yi organik maddeye bağlamakta kullanılır.' } },
    { key: 'nitrifikasyon', marker: 'Nitrifikasyon · iki basamak', width: 345, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/nitrifikasyon.jpg', title: 'Amonyağı iki farklı bakteri grubuyla nitrata taşı', alt: 'Toprakta amonyağın nitrite, nitritin nitrata oksitlenmesi ve nitratın bitki köküne alınması.', note: 'Nitrifikasyon iki ayrı oksidasyon basamağıdır: amonyak oksitleyenler NH₃/NH₄⁺’ü nitrite, nitrit oksitleyenler NO₂⁻’yi nitrata dönüştürür. Açığa çıkan kimyasal enerji bakteriye, oluşan nitrat ekosistemde bitkilere yarar.' } },
    { key: 'cevre-endustri', marker: 'Baca · arıtma · biyomaden', width: 350, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/cevre-endustri.jpg', title: 'Karanlık ekosistemden teknolojiye aynı metabolizmayı izle', alt: 'Derin deniz bacası besin ağı, atık su biyofiltresi ve metal cevherinde biyomadencilik uygulamaları.', note: 'Kemosentetik üreticiler güneşsiz hidrotermal baca ekosistemlerinin temelini kurar. Nitrifikasyon bakterileri atık sularda azotu dönüştürür; bazı türler cevherleri oksitleyerek metallerin ayrılmasını kolaylaştırır.' } },
    { key: 'foto-kemo-karsilastirma', marker: 'Foto–kemo · ortak karbon fiksasyonu', width: 425, detail: { src: '/lesson-assets/fotosentez-kemosentez/details/foto-kemo-karsilastirma.jpg', title: 'Enerji kaynağını ayır, ototrof amacı birleştir', alt: 'Işık ve pigment kullanan fotosentez ile inorganik oksidasyon kullanan kemosentezin ATP, indirgeme gücü ve karbon fiksasyonunda birleşmesi.', note: 'Fotosentez ışık ve pigment; kemosentez inorganik madde oksidasyonu kullanır. Her ikisi de enerji ve indirgeme gücü üretip CO₂’yi organik moleküle bağlar. Kemosentezde ışık, klorofil ve O₂ üretimi zorunlu değildir.' } },
  ]
  return <Plate src="kemosentez-v1" alt="Kemosentezin enerji mekanizması, nitrifikasyon, uygulamalar ve fotosentezle karşılaştırmasını gösteren AYT levhası." items={items} activeRegion={activeRegion} />
}
