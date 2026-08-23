import InteractiveIllustration from './InteractiveIllustration'

const zones = [
  { x: 0, y: 0, width: 768, height: 512 },
  { x: 768, y: 0, width: 768, height: 512 },
  { x: 0, y: 512, width: 768, height: 512 },
  { x: 768, y: 512, width: 768, height: 512 },
]

const markerPositions = [
  { x: 70, y: 78, targetX: 360, targetY: 270 },
  { x: 845, y: 78, targetX: 1160, targetY: 270 },
  { x: 70, y: 946, targetX: 360, targetY: 760 },
  { x: 845, y: 946, targetX: 1160, targetY: 760 },
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
    width: item.width ?? 280,
    ...markerPositions[index],
  }))

  return (
    <InteractiveIllustration
      src={`/lesson-assets/duyu-organlari/${src}.jpg`}
      srcSet={`/lesson-assets/duyu-organlari/${src}-900.jpg 900w, /lesson-assets/duyu-organlari/${src}.jpg 1536w`}
      alt={alt}
      activeRegion={activeRegion}
      regions={regions}
      markers={markers}
    />
  )
}

export function SensoryCodingPlate({ activeRegion = null }) {
  const items = [
    { key: 'uyari', marker: 'Uygun uyarı · reseptör', width: 330, detail: { src: '/lesson-assets/duyu-organlari/details/uygun-reseptor.jpg', title: 'Reseptör özgüllüğü', alt: 'Işık, ses, kimyasal ve basınç uyaranlarının uygun reseptörlere ulaşması.', note: 'Fotoreseptör ışığa, mekanoreseptör titreşim ve basınca, kemoreseptör çözünmüş moleküle en duyarlıdır. Reseptör adı bulunduğu organı değil, dönüştürdüğü enerji türünü anlatır.' } },
    { key: 'transduksiyon', marker: 'Reseptör potansiyeli', width: 305, detail: { src: '/lesson-assets/duyu-organlari/details/reseptor-potansiyeli.jpg', title: 'Enerjiden zar potansiyeline', alt: 'Uyaranın reseptör zarındaki iyon kanallarını değiştirerek dereceli potansiyel oluşturması.', note: 'Uyaran iyon kanallarını doğrudan ya da hücre içi bir yol üzerinden değiştirir. Oluşan dereceli reseptör potansiyeli yeterliyse duyu lifinde impuls başlar.' } },
    { key: 'kodlama', marker: 'Şiddetin kodlanması', width: 300, detail: { src: '/lesson-assets/duyu-organlari/details/siddet-kodlama.jpg', title: 'Büyük impuls değil, sık impuls', alt: 'Zayıf ve güçlü basınçta eşit genlikli fakat farklı sıklıkta impulslar.', note: 'Aksiyon potansiyeli ya hep ya hiçtir. Güçlü uyaran impuls genliğini büyütmez; impuls sıklığını ve devreye giren reseptör/lif sayısını artırabilir.' } },
    { key: 'algi', marker: 'Adaptasyon · algı', width: 275, detail: { src: '/lesson-assets/duyu-organlari/details/adaptasyon-algi.jpg', title: 'Değişmeyen uyaran geri plana alınır', alt: 'Sabit parfüm kokusunda reseptör ve beyin yanıtının zamanla azalması.', note: 'Sabit uyaran sürerken bazı reseptörlerin ve merkezî devrelerin yanıtı azalır. Uyaran yok olmaz; sinir sistemi değişime öncelik verir ve algı ilgili beyin bölgelerinde kurulur.' } },
  ]
  return <Plate src="duyu-kodlama-v1" alt="Uyarı seçimi, reseptör potansiyeli, impuls kodlaması ve algıyı gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function EyeOpticsPlate({ activeRegion = null }) {
  const items = [
    { key: 'tabakalar', marker: 'Koruma · üç tabaka', width: 285, detail: { src: '/lesson-assets/duyu-organlari/details/goz-koruma-tabaka.jpg', title: 'Yüzeyden retinaya koruma', alt: 'Gözyaşı, kapak ve gözün sert, damar ve ağ tabakalarını gösteren kesit.', note: 'Kapak, kirpik ve gözyaşı yüzeyi korur. Sert tabaka biçim ve dayanıklılık; damar tabaka beslenme ve ışık kontrolü; retina ise fotoreseptör ve sinir hücreleri sağlar.' } },
    { key: 'kornea', marker: 'Kornea · göz sıvıları', width: 310, detail: { src: '/lesson-assets/duyu-organlari/details/kornea-sivilar.jpg', title: 'Sabit güçlü kırıcı yüzey', alt: 'Işığın kornea ve ön oda sıvısından geçerek merceğe ulaşması.', note: 'Kornea gözün güçlü, sabit kırıcı yüzeyidir. Işık kornea ve aköz sıvıdan geçip pupillaya ulaşır; mercek ise kırma gücünü biçim değiştirerek ayarlar.' } },
    { key: 'iris-mercek', marker: 'İris · mercek sistemi', width: 295, detail: { src: '/lesson-assets/duyu-organlari/details/iris-mercek.jpg', title: 'Işık miktarı ve odak aynı değildir', alt: 'İrisin pupilla çapını ve kirpiksi sistemin mercek biçimini değiştirmesi.', note: 'İris pupilla açıklığıyla retinaya ulaşan ışığı ayarlar. Kirpiksi kas ve asıcı bağlar mercek biçimini değiştirerek odağı retinaya getirir.' } },
    { key: 'retina', marker: 'Sarı nokta · kör nokta', width: 310, detail: { src: '/lesson-assets/duyu-organlari/details/retina-sari-kor.jpg', title: 'Keskin merkez ve reseptörsüz çıkış', alt: 'Konice zengin fovea ile görme sinirinin çıktığı optik diskin retina kesitinde karşılaştırılması.', note: 'Foveada koniler yoğun ve keskinlik yüksektir. Görme siniri aksonlarının çıktığı optik diskte çubuk ve koni bulunmadığından burası kör noktadır.' } },
  ]
  return <Plate src="goz-optigi-v1" alt="Göz tabakaları, kornea, iris-mercek sistemi ve retina bölgelerini gösteren anatomik levha." items={items} activeRegion={activeRegion} />
}

export function RetinaVisionPlate({ activeRegion = null }) {
  const items = [
    { key: 'uyum', marker: 'Yakın · uzak uyumu', width: 295, detail: { src: '/lesson-assets/duyu-organlari/details/uyum-mekanizmasi.jpg', title: 'Merceğin kırma gücünü değiştir', alt: 'Yakın ve uzak bakışta kirpiksi kas, asıcı bağ ve mercek biçiminin karşılaştırılması.', note: 'Yakında kirpiksi kas kasılır, bağ gerilimi azalır ve mercek kalınlaşır. Uzakta kas gevşer, bağ gerilir ve mercek yassılaşır.' } },
    { key: 'cubuk-koni', marker: 'Çubuk · koni', width: 245, detail: { src: '/lesson-assets/duyu-organlari/details/cubuk-koni.jpg', title: 'Karanlık duyarlılığı ve keskin renk', alt: 'Çevresel retinadaki çubuklarla foveadaki konilerin gece ve gündüz sahnesinde karşılaştırılması.', note: 'Çubuklar az ışıkta duyarlı, renk ve keskinlikte sınırlıdır. Koniler daha çok ışık ister; renk ve ayrıntılı görmeyi, özellikle foveada yüksek keskinliği sağlar.' } },
    { key: 'gorme-yolu', marker: 'Retina · görme yolu', width: 285, detail: { src: '/lesson-assets/duyu-organlari/details/gorme-yolu.jpg', title: 'Görüntü gözde başlamaz, beyinde tamamlanır', alt: 'Retina hücrelerinden görme siniri ve görme korteksine uzanan yol.', note: 'Fotoreseptör yanıtı retina ara nöronları ve ganglion hücrelerine aktarılır. Ganglion aksonları görme sinirini oluşturur, yollar kısmen çaprazlaşır ve görsel kortekse ulaşır.' } },
    { key: 'kusurlar', marker: 'Kırma kusurları', width: 250, detail: { src: '/lesson-assets/duyu-organlari/details/kirma-kusurlari.jpg', title: 'Odağın retinaya göre yerini oku', alt: 'Normal göz, miyop, hipermetrop ve astigmatın ışın diyagramları ve düzeltici mercekleri.', note: 'Miyopta odak retinanın önünde ve kalın kenarlı; hipermetropta retinanın arkasında ve ince kenarlı mercekle düzeltilir. Astigmatta eğrilik eksenlere göre düzensizdir.' } },
  ]
  return <Plate src="retina-gorme-v1" alt="Göz uyumu, fotoreseptörler, görme yolu ve kırma kusurlarını gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function EarBalancePlate({ activeRegion = null }) {
  const items = [
    { key: 'iletim', marker: 'Dış · orta kulak', width: 275, detail: { src: '/lesson-assets/duyu-organlari/details/orta-kulak-iletim.jpg', title: 'Havadan sıvıya mekanik aktarım', alt: 'Kulak yolu, kulak zarı, kemikçikler, oval pencere ve Östaki borusunu gösteren kesit.', note: 'Ses kulak zarını titreştirir; çekiç–örs–üzengi hareketi oval pencereye taşır. Östaki borusu orta kulak basıncını eşitlemeye yardım eder, ses reseptörü değildir.' } },
    { key: 'korti', marker: 'Kohlea · Korti organı', width: 305, detail: { src: '/lesson-assets/duyu-organlari/details/korti-organi.jpg', title: 'Tüy hücresinde mekanik transdüksiyon', alt: 'Baziler ve tektorial zar hareketiyle tüy hücresi stereosilyalarının bükülmesi.', note: 'Kohlea sıvı dalgası baziler zarı hareket ettirir. Tektorial zarla göreli hareket stereosilyaları büker, mekanik kanallar değişir ve işitme siniri etkinleşir.' } },
    { key: 'ses-kodlama', marker: 'Şiddet · perde', width: 245, detail: { src: '/lesson-assets/duyu-organlari/details/ses-kodlama.jpg', title: 'Genlik ve frekansı ayır', alt: 'Ses genliği ve frekansının tüy hücresi etkinliği ve baziler zar konumuyla kodlanması.', note: 'Ses şiddeti titreşim genliği, impuls sıklığı ve katılan liflerle; perde ise frekans ve baziler zarın en fazla titreşen bölgesiyle kodlanır.' } },
    { key: 'denge', marker: 'Dönme · doğrusal hareket', width: 320, detail: { src: '/lesson-assets/duyu-organlari/details/denge-reseptorleri.jpg', title: 'İki denge sensörü', alt: 'Yarım daire kanalları ile tulumcuk ve keseciğin baş hareketlerinde tüy hücrelerini uyarması.', note: 'Yarım daire kanalları başın açısal ivmesini; tulumcuk ve kesecik otolit tabakasıyla doğrusal ivme ve yer çekimine göre konumu algılar.' } },
  ]
  return <Plate src="kulak-isitme-denge-v1" alt="Dış ve orta kulak iletimi, Korti organı, ses kodlaması ve denge reseptörlerini gösteren levha." items={items} activeRegion={activeRegion} />
}

export function ChemicalSkinPlate({ activeRegion = null }) {
  const items = [
    { key: 'koku', marker: 'Koku epiteli', width: 245, detail: { src: '/lesson-assets/duyu-organlari/details/koku-yolu.jpg', title: 'Mukustan koku soğancığına', alt: 'Uçucu molekülün mukusta çözünüp koku reseptörlerini ve koku soğancığını etkinleştirmesi.', note: 'Uçucu moleküller burun boşluğunun üstündeki mukusta çözünür, reseptör kombinasyonlarını uyarır ve sinyal koku soğancığı üzerinden beyne gider.' } },
    { key: 'tat', marker: 'Tat tomurcuğu', width: 250, detail: { src: '/lesson-assets/duyu-organlari/details/tat-tomurcugu.jpg', title: 'Tükürükte çözünmeden sinyal olmaz', alt: 'Çözünmüş maddelerin tat porundan tat reseptör hücrelerine ulaşması.', note: 'Molekül veya iyon tükürükte çözünerek tat porundan reseptör hücrelere ulaşır. Temel tatlar farklı iyon kanalı ve reseptör yollarıyla sinir liflerini uyarır.' } },
    { key: 'deri', marker: 'Deri reseptörleri', width: 275, detail: { src: '/lesson-assets/duyu-organlari/details/deri-reseptorleri.jpg', title: 'Farklı derinlik, farklı mekanik bilgi', alt: 'Deride dokunma, basınç, titreşim, gerilme ve sıcaklık reseptörlerinin kesiti.', note: 'Deri tek tip reseptör kullanmaz. Yüzeysel ve derin mekanoreseptörler ile sıcak–soğuk ve serbest sinir uçları farklı uyaran örüntülerini ayrı liflerle taşır.' } },
    { key: 'agri', marker: 'Ağrı · bütünleşme', width: 285, detail: { src: '/lesson-assets/duyu-organlari/details/agri-butunlesme.jpg', title: 'Tehlike sinyali ve birleşik algı', alt: 'Doku hasarında ağrı yolu ile tat, koku, sıcaklık ve dokunun beyinde bütünleşmesi.', note: 'Nosiseptörler doku hasarı tehdidini bildirir ve yavaş adapte olur. Lezzet gibi günlük algılar ise tat, koku, sıcaklık ve dokunun merkezî sinir sisteminde birleşmesiyle oluşur.' } },
  ]
  return <Plate src="kimyasal-deri-v1" alt="Koku, tat, deri reseptörleri ve ağrı-duyu bütünleşmesini gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}
