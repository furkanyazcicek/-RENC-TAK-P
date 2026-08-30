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
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 290, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/dolasim-bagisiklik/${src}.jpg`} srcSet={`/lesson-assets/dolasim-bagisiklik/${src}-900.jpg 900w, /lesson-assets/dolasim-bagisiklik/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function HeartCirculationPlate({ activeRegion = null }) {
  const items = [
    { key: 'odacik-kapak', marker: 'Odacıklar · kapaklar', width: 300, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/odacik-kapak.jpg', title: 'Basınç farkıyla tek yönlü kapı', alt: 'Dört kalp odacığı, AV ve yarımay kapakları ile kirişçikleri gösteren kesit.', note: 'Triküspit ve mitral kapaklar atriyumdan ventriküle; yarımay kapaklar ventrikülden atardamara akışa izin verir. Kirişçikler AV kapakların geriye dönmesini önler.' } },
    { key: 'kucuk-buyuk', marker: 'Küçük · büyük dolaşım', width: 310, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/kucuk-buyuk-dolasim.jpg', title: 'Akciğerde oksijenlen, dokuda bırak', alt: 'Sağ kalp-akciğer ve sol kalp-doku devrelerinin seri bağlantısı.', note: 'Sağ ventrikül kanı akciğere, sol ventrikül vücuda yollar. Devreler seri bağlı olduğu için uzun vadede iki ventrikülün dakika hacmi eşittir.' } },
    { key: 'koroner', marker: 'Kalp duvarı · koronerler', width: 320, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/koroner-duvar.jpg', title: 'Pompanın kendisini ayrı damarla besle', alt: 'Kalp duvar katmanları, koroner damar ve darlık sonrası iskemik miyokart.', note: 'Endokart iç yüzeyi, miyokart kas tabakasını, perikart çevreyi oluşturur. Koroner darlık aşağı dokuda O₂ sunumunu azaltarak iskemi ve enfarktüs riski yaratır.' } },
    { key: 'tam-tur', marker: 'Bir alyuvarın tam turu', width: 310, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/tam-kan-turu.jpg', title: 'Vena kavadan dokuya kapanan rota', alt: 'Bir alyuvarın sağ kalp, akciğer, sol kalp ve doku kılcalı boyunca tam turu.', note: 'Vena kava → sağ kalp → pulmoner arter → akciğer kılcalı → pulmoner ven → sol kalp → aort → doku kılcalı → toplardamar sırası kapalı devreyi tamamlar.' } },
  ]
  return <Plate src="kalp-dolasim-v1" alt="Kalp anatomisi, küçük-büyük dolaşım, koroner beslenme ve kan turunu gösteren bilimsel levha." items={items} activeRegion={activeRegion} />
}

export function CardiacCyclePlate({ activeRegion = null }) {
  const items = [
    { key: 'ileti', marker: 'SA → AV → His → Purkinje', width: 345, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/ileti-sistemi.jpg', title: 'Atriyumdan apeks ve yukarıya', alt: 'Kalbin uyarı iletim sistemini beş aşamada gösteren kesit.', note: 'SA düğüm atriyumları uyarır; AV gecikmesi ventrikül dolumuna zaman verir. His–dal demetleri–Purkinje ağı ventrikülleri apeksden yukarı etkinleştirir.' } },
    { key: 'evreler', marker: 'Dolum · kasılma · ejeksiyon', width: 355, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/kalp-dongusu-evre.jpg', title: 'Dört mekanik evrede kapakları izle', alt: 'Dolum, izovolümetrik kasılma, ejeksiyon ve gevşeme evrelerinin çevrimi.', note: 'Dolumda AV açık; basınç kurulurken tüm kapaklar kapalı; ejeksiyonda yarımay açık; gevşemenin başında yeniden tüm kapaklar kapalıdır.' } },
    { key: 'basinc-kapak', marker: 'Basınç · kapak · ses', width: 305, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/basinc-kapak-ses.jpg', title: 'Basınç eğrisi kapağı hareket ettirir', alt: 'Atriyum, ventrikül ve aort basınçlarının kapak durumları ve kalp sesleriyle eşleşmesi.', note: 'Kapak iki yanındaki basınç farkına yanıt verir. Birinci ses AV, ikinci ses yarımay kapakların kapanmasıyla ilişkilidir; açılma normalde belirgin ses oluşturmaz.' } },
    { key: 'debi', marker: 'Nabız · atım hacmi · debi', width: 335, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/kalp-debisi.jpg', title: 'Egzersizde hızı ve hacmi birlikte artır', alt: 'Dinlenme ve koşuda kalp dolumu, ejeksiyon ve bilek nabız dalgasının karşılaştırması.', note: 'Kalp debisi hız × atım hacmidir. Egzersizde sempatik etki, venöz dönüş ve kasılma gücü artar; nabız atardamar duvarındaki basınç dalgasıdır.' } },
  ]
  return <Plate src="kalp-dongusu-v1" alt="Kalbin ileti sistemi, döngüsü, basınç-kapak ilişkisi ve debi kontrolünü gösteren levha." items={items} activeRegion={activeRegion} />
}

export function VascularMicrocirculationPlate({ activeRegion = null }) {
  const items = [
    { key: 'damar-tipleri', marker: 'Atar · toplar · kılcal', width: 310, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/damar-karsilastirma.jpg', title: 'Duvarı basınca ve göreve uyarla', alt: 'Atardamar, kapaklı toplardamar ve tek katlı kılcal damar kesitleri.', note: 'Atardamar kalın ve elastik; toplardamar ince, geniş lümenli ve kapaklı olabilir; kılcal tek katlı endotel duvarıyla değişime uygundur.' } },
    { key: 'basinc-hiz', marker: 'Basınç · hız · toplam alan', width: 350, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/basinc-hiz-alan.jpg', title: 'Kılcal ağ genişledikçe akışı yavaşlat', alt: 'Damar ağacında basınç dalgası, toplam kesit alanı ve kan hızı değişimi.', note: 'Basınç damar direnciyle azalır. Binlerce paralel kılcalın toplam alanı en büyük olduğu için aynı debi burada en düşük doğrusal hızla akar.' } },
    { key: 'kilcal', marker: 'Filtrasyon · geri emilim · lenf', width: 375, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/kilcal-degisim.jpg', title: 'Sıvıyı çıkar, çek ve fazlayı topla', alt: 'Kılcalın arter ve ven uçlarında sıvı hareketi ile lenf kılcalına drenaj.', note: 'Hidrostatik basınç sıvıyı dışarı iter; plazma proteinleri içeri çekimi destekler. Geri dönemeyen sıvı ve proteinler kör uçlu lenf kılcalına girer.' } },
    { key: 'odem', marker: 'Dört ödem mekanizması', width: 315, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/odem-mekanizmalari.jpg', title: 'Dışarı akışı artır veya geri dönüşü kes', alt: 'Ven basıncı, düşük plazma proteini, geçirgenlik ve lenf tıkanmasına bağlı ödem.', note: 'Yüksek venöz basınç, düşük albümin, inflamatuvar geçirgenlik ve lenf tıkanması farklı basamakları bozsa da doku sıvısında birikmeyle sonuçlanır.' } },
  ]
  return <Plate src="damar-mikrodolasim-v1" alt="Damar tipleri, akış değişimleri, kılcal sıvı dengesi ve ödemi gösteren levha." items={items} activeRegion={activeRegion} />
}

export function BloodLymphPlate({ activeRegion = null }) {
  const items = [
    { key: 'kan-bilesen', marker: 'Plazma · alyuvar · akyuvar · trombosit', width: 405, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/kan-bilesenleri.jpg', title: 'Aynı sıvıda dört ayrı görev', alt: 'Plazma proteinleri, alyuvarlar, farklı akyuvarlar ve trombositlerin yakın planı.', note: 'Plazma çözünmüş maddeleri ve proteinleri; alyuvar gazları; akyuvar savunmayı; trombosit damar hasarı yanıtını taşır. Biçimleri görevlerine uyar.' } },
    { key: 'pihti', marker: 'Trombosit tıkacı · fibrin', width: 315, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/hemostaz.jpg', title: 'Geçici tıkacı fibrinle güçlendir', alt: 'Damar büzülmesi, trombosit tıkacı ve fibrin ağına ilerleyen hemostaz.', note: 'Damar büzülür; trombositler yapışıp etkinleşir. Pıhtılaşma zinciri fibrinojeni çözünmez fibrine çevirir ve ağ kan hücrelerini yakalar.' } },
    { key: 'lenf', marker: 'Lenf kılcalı · düğüm · toplardamar', width: 380, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/lenf-yolu.jpg', title: 'Doku sıvısı ve yağı kana geri taşı', alt: 'Doku ve bağırsak lenfinin lenf düğümü üzerinden toplardamara dönüşü.', note: 'Kör uçlu kılcallar sıvıyı ve laktealler şilomikronu toplar. Kapak–kas–solunum pompası akışı lenf düğümleri ve büyük kanallarla köprücük altı venlerine taşır.' } },
    { key: 'kan-grubu', marker: 'ABO · Rh · aglütinasyon', width: 325, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/abo-rh.jpg', title: 'Yüzey antijenini plazma antikoruyla karşılaştır', alt: 'Farklı alyuvar yüzey antijenleri, uyumlu akış ve antikorla aglütinasyon.', note: 'Alıcı plazma antikoru verici alyuvar antijenine bağlanırsa hücreler kümelenir. Transfüzyon mantığı antijen–antikor eşleşmesine dayanır.' } },
  ]
  return <Plate src="kan-lenf-v1" alt="Kanın bileşenleri, pıhtılaşma, lenf yolu ve kan grubu uyumunu gösteren levha." items={items} activeRegion={activeRegion} />
}

export function ImmuneResponsePlate({ activeRegion = null }) {
  const items = [
    { key: 'dogal', marker: 'Bariyer · inflamasyon · fagosit', width: 365, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/bariyer-inflamasyon.jpg', title: 'Girişi kes, damarı aç, fagositi çağır', alt: 'Bariyer hasarı, histamin, nötrofil çıkışı ve makrofaj fagositozu.', note: 'Deri ve mukoza girişi sınırlar. Hasarda histamin damar genişliği/geçirgenliğini artırır; nötrofil ve makrofaj etkeni hızlı, özgül olmayan biçimde fagosite eder.' } },
    { key: 'antijen-sunum', marker: 'Antijen sunumu · yardımcı T', width: 345, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/antijen-sunumu.jpg', title: 'Doğal tanımadan özgül klona geç', alt: 'Dendritik hücrenin antijen işleyip yardımcı T hücresine sunması ve iki kola sinyal vermesi.', note: 'Dendritik hücre işlenmiş antijeni MHC ile uygun yardımcı T hücresine sunar. Sitokinler B ve sitotoksik T klonlarının seçilip çoğalmasını koordine eder.' } },
    { key: 'humoral', marker: 'B → plazma → antikor', width: 305, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/b-antikor.jpg', title: 'Uygun klonu çoğalt ve çözünür silah üret', alt: 'B hücresinin klonal çoğalması, plazma-hafıza hücreleri ve antikor etkileri.', note: 'Uygun B klonu çoğalır; plazma hücreleri antikor salgılar, hafıza B hücreleri kalır. Antikor nötralize eder, kümelendirir ve fagositoz için işaretler.' } },
    { key: 'hucresel-hafiza', marker: 'Sitotoksik T · hafıza', width: 295, detail: { src: '/lesson-assets/dolasim-bagisiklik/details/t-hafiza.jpg', title: 'Enfekte hücreyi öldür, ikinci yanıtı hızlandır', alt: 'Sitotoksik T ile enfekte hücre ölümü ve birincil-ikincil bağışıklık yanıtı.', note: 'Sitotoksik T enfekte hücrede apoptoz başlatır. Hafıza B/T hücreleri aynı antijene ikinci karşılaşmada daha hızlı, güçlü ve uzun yanıt verir.' } },
  ]
  return <Plate src="bagisiklik-yaniti-v1" alt="Doğal savunma, antijen sunumu, humoral ve hücresel bağışıklığı gösteren levha." items={items} activeRegion={activeRegion} />
}
