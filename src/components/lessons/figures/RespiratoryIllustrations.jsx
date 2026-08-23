import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 },
  { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 },
  { x: 768, y: 512, width: 768, height: 512 },
]
const markerPositions = [
  { x: 70, y: 78, targetX: 365, targetY: 275 },
  { x: 845, y: 78, targetX: 1165, targetY: 275 },
  { x: 70, y: 946, targetX: 365, targetY: 755 },
  { x: 845, y: 946, targetX: 1165, targetY: 755 },
]

function Plate({ src, alt, items, activeRegion }) {
  const regions = items.map((item, index) => ({
    ...item,
    shape: zones[index],
    zoom: { x: index % 2 ? 75 : 25, y: index < 2 ? 25 : 75, scale: 1.45 },
  }))
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 310, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/solunum-sistemi/${src}.jpg`} srcSet={`/lesson-assets/solunum-sistemi/${src}-900.jpg 900w, /lesson-assets/solunum-sistemi/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function RespiratoryTractPlate({ activeRegion = null }) {
  const items = [
    { key: 'burun', marker: 'Burun · koşullandırma', width: 315, detail: { src: '/lesson-assets/solunum-sistemi/details/burun-hava-kosullama.jpg', title: 'Havayı döndür, süz, ısıt ve nemlendir', alt: 'Burun konkalarında türbülans, mukusta parçacık tutulması ve damarlarla hava koşullandırma.', note: 'Konkalar hava akımını bol damarlı nemli mukozaya yayar. Kıl ve mukus parçacıkları tutarken geniş temas alanı havayı alt yollara uygun sıcaklık ve neme getirir.' } },
    { key: 'girtlak', marker: 'Yutak · gırtlak · ses', width: 310, detail: { src: '/lesson-assets/solunum-sistemi/details/girtlak-epiglot-ses.jpg', title: 'Ortak yolu koru, hava akımını sese çevir', alt: 'Yutma sırasında gırtlak girişinin korunması ve hava geçen ses tellerinin titreşimi.', note: 'Yutmada gırtlak yükselir ve epiglot alt yolu korumaya yardım eder. Solukta açık glottisten geçen hava, gerilmiş ses tellerini titreştirerek ses oluşturur.' } },
    { key: 'mukosiliyer', marker: 'Mukus · siller · temizlik', width: 330, detail: { src: '/lesson-assets/solunum-sistemi/details/mukosiliyer-temizlik.jpg', title: 'Parçacığı yakala ve yutağa taşı', alt: 'Goblet hücresi mukusu ile koordineli sillerin parçacıkları yukarı taşıması ve duman hasarı.', note: 'Mukus toz ve mikrobu yakalar; siller tabakayı yutağa doğru süpürür. Duman silleri baskılayıp epitele zarar verdiğinde salgı ve etkenler alt yollarda birikir.' } },
    { key: 'brons-plevra', marker: 'Bronş ağacı · plevra', width: 305, detail: { src: '/lesson-assets/solunum-sistemi/details/brons-plevra.jpg', title: 'Kıkırdaklı yoldan ince değişim yüzeyine', alt: 'Bronşların bronşçuk ve alveollere dallanması, akciğer lobları ve çift plevra tabakası.', note: 'Bronşlarda kıkırdak yolu açık tutar; bronşçukta düz kas çapı ayarlar. Sağ akciğer üç, sol iki lobludur; plevra yaprakları akciğeri göğüs hareketine bağlar.' } },
  ]
  return <Plate src="solunum-yolu-v1" alt="Burun, gırtlak, mukosiliyer temizlik, bronş ağacı ve plevrayı gösteren solunum yolu levhası." items={items} activeRegion={activeRegion} />
}

export function VentilationMechanismPlate({ activeRegion = null }) {
  const items = [
    { key: 'inspirasyon', marker: 'İnspirasyon · hacim artışı', width: 350, detail: { src: '/lesson-assets/solunum-sistemi/details/inspirasyon.jpg', title: 'Kasılmayı basınç düşüşüne dönüştür', alt: 'Diyafram ve dış interkostal kasılmasıyla göğüs genişlemesi, alveol açılması ve içeri hava akımı.', note: 'Diyafram aşağı, kaburgalar yukarı–dışa gider. Plevra akciğeri genişletir; alveol basıncı atmosferin altına düşünce hava içeri akar.' } },
    { key: 'ekspirasyon', marker: 'Ekspirasyon · elastik dönüş', width: 355, detail: { src: '/lesson-assets/solunum-sistemi/details/ekspirasyon.jpg', title: 'Sakin solukta elastik enerjiyi geri ver', alt: 'Kasların gevşemesiyle kubbeleşen diyafram ve zorlu vermede karın kaslarının etkisi.', note: 'Sakin vermede kaslar gevşer, elastik geri dönüş basıncı yükseltir ve hava çıkar. Zorlu vermede iç interkostal ve karın kasları süreci aktif güçlendirir.' } },
    { key: 'plevra', marker: 'Plevra · pnömotoraks', width: 320, detail: { src: '/lesson-assets/solunum-sistemi/details/plevra-pnomotoraks.jpg', title: 'Negatif basınç bağı koparsa akciğer çöker', alt: 'Sağlam plevral bağlantı ile hava girmiş plevra boşluğunda çökmüş akciğerin karşılaştırılması.', note: 'Kapalı plevra boşluğu akciğer ile göğüs duvarını birlikte hareket ettirir. Boşluğa hava girince basınç eşitlenir, mekanik bağ kaybolur ve akciğer içe çöker.' } },
    { key: 'hacimler', marker: 'Hacimler · spirometri', width: 300, detail: { src: '/lesson-assets/solunum-sistemi/details/akciger-hacimleri.jpg', title: 'Normal nefesten rezervlere hacim haritası', alt: 'Spirometri sırasında normal soluklar, maksimal alma-verme ve renkli akciğer hacim bölmeleri.', note: 'Soluk hacmi rezervlerin arasında salınır. Vital kapasite IRV + TV + ERV’dir; zorlu vermeden sonra kalan rezidüel hacim basit spirometreyle doğrudan ölçülemez.' } },
  ]
  return <Plate src="ventilasyon-v1" alt="İnspirasyon, ekspirasyon, plevra bağlantısı ve akciğer hacimlerini gösteren ventilasyon levhası." items={items} activeRegion={activeRegion} />
}

export function AlveolarGasExchangePlate({ activeRegion = null }) {
  const items = [
    { key: 'zar', marker: 'İnce solunum zarı', width: 290, detail: { src: '/lesson-assets/solunum-sistemi/details/solunum-zari.jpg', title: 'Alyuvarı havaya mikrometrelerce yaklaştır', alt: 'Tip I alveol hücresi, kaynaşmış bazal zar ve kılcal endotelin oluşturduğu ince bariyer.', note: 'Tek katlı alveol epiteli ve kılcal endotel çoğu yerde ortak ince bazal katmana yaklaşır. Kısa mesafe, büyük alan ve yoğun kılcal ağ hızlı difüzyon sağlar.' } },
    { key: 'parsiyel', marker: 'PO₂ · PCO₂ gradyanı', width: 320, detail: { src: '/lesson-assets/solunum-sistemi/details/parsiyel-basinc.jpg', title: 'Her gaz kendi basınç eğimini izler', alt: 'Alveolden kana oksijen ve kandan alveole karbondioksit difüzyonu.', note: 'Alveol PO₂’si venöz kandan yüksek olduğu için O₂ kana; venöz PCO₂ alveolden yüksek olduğu için CO₂ alveole geçer. İkisi zıt yönde aynı anda difüze olur.' } },
    { key: 'surfaktan', marker: 'Tip I · Tip II · surfaktan', width: 350, detail: { src: '/lesson-assets/solunum-sistemi/details/surfaktan-hucreler.jpg', title: 'İnce yüzeyi kur, yüzey gerilimini azalt', alt: 'Tip I ve Tip II alveol hücreleri, surfaktan filmi ve parçacık fagosite eden makrofaj.', note: 'Tip I hücre gaz yüzeyini, Tip II hücre surfaktanı oluşturur. Film özellikle küçük alveollerin çökmesini sınırlar; makrofaj distal parçacıkları temizler.' } },
    { key: 'v-q', marker: 'Ventilasyon · perfüzyon', width: 335, detail: { src: '/lesson-assets/solunum-sistemi/details/ventilasyon-perfuzyon.jpg', title: 'Hava ile kanı aynı alveolde buluştur', alt: 'Eşleşmiş alveol, perfüzyonsuz ventilasyon ve ventilasyonsuz perfüzyon karşılaştırması.', note: 'Sağlıklı ünitede hava ve kan birlikte gelir. Damar tıkanırsa hava boşa gider; yol tıkanırsa kan havalanmayan alveolden geçer. İki durumda da gaz değişimi verimi düşer.' } },
  ]
  return <Plate src="alveol-gaz-v1" alt="Solunum zarı, parsiyel basınç, surfaktan hücreleri ve ventilasyon-perfüzyon eşleşmesini gösteren alveol levhası." items={items} activeRegion={activeRegion} />
}

export function GasTransportPlate({ activeRegion = null }) {
  const items = [
    { key: 'hb-o2', marker: 'Hemoglobin · O₂ yükü', width: 320, detail: { src: '/lesson-assets/solunum-sistemi/details/hemoglobin-oksijen.jpg', title: 'Akciğerde yükle, dokuda geri bırak', alt: 'Oksijenin alveolden hemoglobine yüklenip aktif doku mitokondrisine bırakıldığı tam rota.', note: 'Yüksek akciğer PO₂’si hemoglobini doldurur. Düşük doku PO₂’si bağın tersine dönmesini ve O₂’nin hücreye difüzyonunu sağlar; bağlanma geri dönüşümlüdür.' } },
    { key: 'bohr', marker: 'Bohr etkisi · sağa kayma', width: 340, detail: { src: '/lesson-assets/solunum-sistemi/details/bohr-etkisi.jpg', title: 'Çalışan kasın kimyası O₂’yi serbest bıraksın', alt: 'Serin akciğer yükleme ortamı ile sıcak, asidik ve karbondioksitli kas boşaltma ortamı.', note: 'Aktif kasta CO₂, H⁺ ve sıcaklık artışı hemoglobinin O₂ ilgisini azaltır. Sağa kayma aynı PO₂’de daha çok O₂’nin dokuya bırakılması demektir.' } },
    { key: 'co2', marker: 'CO₂ · bikarbonat · klorür', width: 360, detail: { src: '/lesson-assets/solunum-sistemi/details/karbondioksit-tasima.jpg', title: 'CO₂’yi çözünebilir bikarbonata çevir', alt: 'Alyuvarda karbonik anhidraz tepkimesi, hemoglobin tamponu ve klorür kayması.', note: 'Karbonik anhidraz CO₂’yi H⁺ ve HCO₃⁻ yoluna taşır. H⁺ hemoglobinle tamponlanır; bikarbonat plazmaya çıkarken Cl⁻ içeri girer. Akciğerde tepkime ters döner.' } },
    { key: 'co', marker: 'Karbonmonoksit · hipoksi', width: 335, detail: { src: '/lesson-assets/solunum-sistemi/details/karbonmonoksit.jpg', title: 'Hemoglobini işgal et, dokuyu görünmezce oksijensiz bırak', alt: 'Yanma kaynağından gelen karbonmonoksitin hemoglobine bağlanması ve kalp-beyin hipoksisi.', note: 'CO hemoglobine çok güçlü bağlanarak O₂ yerlerini kapatır ve kalan O₂’nin bırakılmasını zorlaştırır. Kan kırmızı görünse bile kalp ve beyin ağır hipoksi yaşayabilir.' } },
  ]
  return <Plate src="gaz-tasima-v1" alt="Hemoglobinle oksijen, Bohr etkisi, bikarbonat yolu ve karbonmonoksit zehirlenmesini gösteren gaz taşıma levhası." items={items} activeRegion={activeRegion} />
}

export function RespiratoryControlPlate({ activeRegion = null }) {
  const items = [
    { key: 'ritim', marker: 'Medulla · pons · kaslar', width: 325, detail: { src: '/lesson-assets/solunum-sistemi/details/ritim-merkezi.jpg', title: 'Ritmik sinyali diyafram hareketine çevir', alt: 'Medulla ve ponstan omurilik, frenik-interkostal sinirler ve solunum kaslarına motor yol.', note: 'Medulla temel inspirasyon ritmini kurar, pons geçişleri biçimlendirir. Frenik ve interkostal motor yollar diyafram ile kaburga kaslarını sırayla etkinleştirir.' } },
    { key: 'kemoreseptor', marker: 'CO₂ · pH · düşük O₂', width: 315, detail: { src: '/lesson-assets/solunum-sistemi/details/kemoreseptorler.jpg', title: 'Kan kimyasını negatif geri bildirimle düzelt', alt: 'Merkezî kemoreseptör, karotis-aort cisimcikleri ve akciğer arasında geri bildirim döngüsü.', note: 'Merkezî reseptör CO₂’nin beyin sıvısında oluşturduğu pH düşüşüne; çevresel cisimcikler belirgin düşük O₂, yüksek CO₂ ve düşük pH’a yanıt verir.' } },
    { key: 'egzersiz', marker: 'Egzersiz · ön besleme', width: 305, detail: { src: '/lesson-assets/solunum-sistemi/details/egzersiz-uyumu.jpg', title: 'Hareket başlarken ventilasyonu erkenden yükselt', alt: 'Koşucuda motor korteks, eklem-kas duyusu, kalp-akciğer ve çalışan kas koordinasyonu.', note: 'Motor komuttan ön besleme ve hareket reseptörleri ventilasyonu hızla artırır. Metabolik CO₂, H⁺ ve ısı daha sonra kimyasal ayarı sürdürür.' } },
    { key: 'hastalik', marker: 'Astım · amfizem · zatürre', width: 350, detail: { src: '/lesson-assets/solunum-sistemi/details/astim-amfizem.jpg', title: 'Aynı nefes darlığında farklı halkayı bul', alt: 'Normal, astımlı, amfizemli ve zatürreli hava yolu-alveol birimlerinin karşılaştırması.', note: 'Astım hava yolu çapını, amfizem yüzey alanı ve geri dönüşü, zatürre ise zar kalınlığı ve hava doluluğunu bozar. Soruda yapısal hasarı işlev sonucuna bağla.' } },
  ]
  return <Plate src="solunum-kontrol-v1" alt="Solunum ritmi, kemoreseptörler, egzersiz uyumu ve temel akciğer hastalıklarını gösteren kontrol levhası." items={items} activeRegion={activeRegion} />
}
