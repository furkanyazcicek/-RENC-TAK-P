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
  const markers = items.map((item, index) => ({ key: item.key, title: item.marker, width: item.width ?? 330, ...markerPositions[index] }))
  return <InteractiveIllustration src={`/lesson-assets/ureme-sistemi/${src}.jpg`} srcSet={`/lesson-assets/ureme-sistemi/${src}-900.jpg 900w, /lesson-assets/ureme-sistemi/${src}.jpg 1536w`} alt={alt} activeRegion={activeRegion} regions={regions} markers={markers} />
}

export function ReproductiveAnatomyPlate({ activeRegion = null }) {
  const items = [
    { key: 'testis', marker: 'Testis · seminifer tüpçük', width: 350, detail: { src: '/lesson-assets/ureme-sistemi/details/seminifer-tupcuk.jpg', title: 'Tüp duvarından lümene sperm üret', alt: 'Seminifer tüpçük duvarında gelişen sperm hücreleri, Sertoli hücreleri ve tüp dışındaki Leydig hücreleri.', note: 'Spermatogonyumlar bazal bölgeden lümene ilerlerken mayoz ve farklılaşma geçirir. Sertoli hücreleri destekler; tüpler arasındaki Leydig hücreleri LH ile testosteron üretir.' } },
    { key: 'erkek-kanal', marker: 'Epididimis · vas deferens · bezler', width: 415, detail: { src: '/lesson-assets/ureme-sistemi/details/sperm-yolu.jpg', title: 'Olgunlaştır, taşı ve semen ortamını kur', alt: 'Testis, epididimis, vas deferens, seminal kese, prostat ve bulboüretral bez boyunca sperm yolu.', note: 'Sperm epididimiste hareket kazanır, vas deferensle taşınır. Seminal kese, prostat ve bulboüretral salgılar enerji, pH ve kayganlık desteği sağlayan semen sıvısını oluşturur.' } },
    { key: 'ovaryum-tup', marker: 'Ovaryum · fimbria · yumurta kanalı', width: 405, detail: { src: '/lesson-assets/ureme-sistemi/details/ovaryum-tup.jpg', title: 'Folikülü büyüt, ikincil oositi tüpe bırak', alt: 'Ovaryumda folikül evreleri, ovulasyon, fimbrialar ve yumurta kanalına alınan ikincil oosit.', note: 'Folikül oositi ve hormon üreten destek hücrelerini taşır. Ovulasyonda ikincil oosit bırakılır; fimbrialar onu yumurta kanalına alır, döllenme çoğunlukla burada olur.' } },
    { key: 'uterus', marker: 'Endometriyum · myometriyum · serviks', width: 415, detail: { src: '/lesson-assets/ureme-sistemi/details/uterus-katmanlari.jpg', title: 'Yerleşme yüzeyiyle kas katmanını ayır', alt: 'Uterusun damarlı endometriyum, kalın myometriyum, serviks ve vajina katmanları.', note: 'Blastosist endometriyuma tutunur; myometriyum gebelikte genişler ve doğumda kasılır. Serviks rahim çıkışını, vajina doğum kanalını oluşturur.' } },
  ]
  return <Plate src="ureme-anatomi-v1" alt="Erkek ve dişi üreme organlarını üretim, taşıma ve gelişim görevleriyle gösteren anatomi levhası." items={items} activeRegion={activeRegion} />
}

export function GametogenesisPlate({ activeRegion = null }) {
  const items = [
    { key: 'spermatogenez', marker: 'Spermatogenez · dört sperm', width: 345, detail: { src: '/lesson-assets/ureme-sistemi/details/spermatogenez.jpg', title: 'Homologları, sonra kardeş kromatitleri ayır', alt: 'Birincil spermatositten mayoz I ve II ile dört spermatit, ardından dört sperm oluşumu.', note: 'Bir 2n birincil spermatosit mayoz I ile iki n ikincil spermatosit, mayoz II ile dört n spermatit verir. Spermiogenez onları bölünmeden sperm biçimine dönüştürür.' } },
    { key: 'oogenez', marker: 'Oogenez · eşitsiz sitoplazma', width: 360, detail: { src: '/lesson-assets/ureme-sistemi/details/oogenez.jpg', title: 'Sitoplazmayı tek büyük hücrede koru', alt: 'Birincil oositin eşit olmayan mayoz bölünmeleri, ikincil oosit ve kutup hücreleri.', note: 'Birincil oosit profaz I’de, ikincil oosit metafaz II’de bekler. Eşit olmayan sitoplazma paylaşımı bir büyük işlevsel ovum ve küçük kutup hücreleri oluşturur; mayoz II sperm girişiyle tamamlanır.' } },
    { key: 'gamet-yapisi', marker: 'Sperm · yumurta tasarımı', width: 335, detail: { src: '/lesson-assets/ureme-sistemi/details/gamet-yapisi.jpg', title: 'Hareket için küçül, gelişim için sitoplazma biriktir', alt: 'Akrozomlu, mitokondrili ve kamçılı sperm ile corona radiata ve zona pellusidalı büyük yumurta.', note: 'Sperm akrozom, haploit çekirdek, mitokondrili orta parça ve kuyrukla genomu taşır. Yumurta büyük sitoplazması ve koruyucu katmanlarıyla ilk gelişim ortamını sağlar.' } },
    { key: 'erkek-hormon', marker: 'GnRH · FSH · LH geri bildirimi', width: 375, detail: { src: '/lesson-assets/ureme-sistemi/details/erkek-hormon-ekseni.jpg', title: 'Sertoli ve Leydig’i iki ayrı koldan yönet', alt: 'Hipotalamus-hipofiz-testis ekseni, Sertoli ve Leydig hücreleri ile negatif geri bildirim.', note: 'GnRH ön hipofizi uyarır. FSH Sertoli/spermatogenezi, LH Leydig/testosteronu destekler; testosteron ve inhibin negatif geri bildirimle ekseni sınırlar.' } },
  ]
  return <Plate src="gametogenez-v1" alt="Spermatogenez, oogenez, gamet yapısı ve hormonal kontrolü karşılaştıran gametogenez levhası." items={items} activeRegion={activeRegion} />
}

export function MenstrualCyclePlate({ activeRegion = null }) {
  const items = [
    { key: 'folikul-fsh', marker: 'Folikül evresi · FSH · östrojen', width: 400, detail: { src: '/lesson-assets/ureme-sistemi/details/folikul-fsh.jpg', title: 'Folikülü büyütürken endometriyumu yeniden kur', alt: 'FSH etkisiyle gelişen foliküller, yükselen östrojen ve çoğalan endometriyum.', note: 'FSH folikül gelişimini destekler. Büyüyen folikülden östrojen artar; endometriyum mitozla onarılır ve çoğalma evresinde kalınlaşır.' } },
    { key: 'lh-piki', marker: 'Yüksek östrojen · LH piki', width: 350, detail: { src: '/lesson-assets/ureme-sistemi/details/lh-piki.jpg', title: 'Geri bildirimin işaretini değiştir ve ovulasyonu başlat', alt: 'Sürekli yüksek östrojenin hipofizde LH pikini ve folikül yırtılmasıyla ovulasyonu tetiklemesi.', note: 'Belirli süre yüksek kalan östrojen kısa pozitif geri bildirim oluşturur. LH piki olgun folikülün yırtılmasını ve ikincil oositin bırakılmasını tetikler.' } },
    { key: 'korpus-luteum', marker: 'Korpus luteum · progesteron', width: 370, detail: { src: '/lesson-assets/ureme-sistemi/details/korpus-luteum.jpg', title: 'Endometriyumu salgılı ve damarlı tut', alt: 'Ovulasyon sonrası korpus luteum, progesteron sinyali ve kalın salgılı endometriyum.', note: 'Yırtılan folikül LH ile korpus luteuma dönüşür. Progesteron endometriyum bez ve damarlarını geliştirir, implantasyona uygun yapıyı sürdürür ve yeni döngüyü baskılar.' } },
    { key: 'menstruasyon', marker: 'Hormon düşüşü · menstruasyon', width: 365, detail: { src: '/lesson-assets/ureme-sistemi/details/menstruasyon.jpg', title: 'Korpus luteum gerileyince işlevsel tabakayı bırak', alt: 'Gerileyen korpus luteum, düşen ovaryum hormonları ve endometriyumun işlevsel kısmının dökülmesi.', note: 'Gebelik yoksa korpus luteum geriler; progesteron ve östrojen düşer. Endometriyumun işlevsel tabakası parçalanır ve menstruasyon yeni döngünün birinci gününü başlatır.' } },
  ]
  return <Plate src="menstrual-dongu-v1" alt="Folikül evresi, ovulasyon, luteal evre ve menstruasyonu hormonlarla eşleştiren döngü levhası." items={items} activeRegion={activeRegion} />
}

export function FertilizationImplantationPlate({ activeRegion = null }) {
  const items = [
    { key: 'akrozom', marker: 'Kapasitasyon · akrozom tepkisi', width: 375, detail: { src: '/lesson-assets/ureme-sistemi/details/akrozom-kapasitasyon.jpg', title: 'Tür özgül tanı ve yerel enzim yolu kur', alt: 'Kapasite kazanmış spermlerin corona radiata ve zona pellusidaya ulaşıp akrozom tepkisi göstermesi.', note: 'Dişi kanalında kapasitasyon geçiren sperm zona pellusida yapılarına bağlanır. Akrozom enzimleri folikül hücreleri ve zona içinde yalnız temas bölgesinde yol açmaya yardım eder.' } },
    { key: 'kortikal', marker: 'Kortikal tepki · polispermiyi engelle', width: 395, detail: { src: '/lesson-assets/ureme-sistemi/details/kortikal-reaksiyon.jpg', title: 'İlk sperm girdikten sonra kapıyı kapat', alt: 'Sperm-oosit zar kaynaşması, kalsiyum dalgası ve kortikal granüllerin zona pellusidayı değiştirmesi.', note: 'İlk zar kaynaşması oositte Ca²⁺ dalgası ve kortikal granül boşalması oluşturur. Zona yapısı değişir; başka spermlerin girişi sınırlandırılarak polispermiden korunur.' } },
    { key: 'pronukleus', marker: 'Mayoz II · pronükleus · zigot', width: 380, detail: { src: '/lesson-assets/ureme-sistemi/details/pronukleus-zigot.jpg', title: 'Oosit mayozunu bitir ve diploitliği geri kur', alt: 'İkincil oositin mayoz II’yi tamamlaması, dişi ve erkek pronükleuslarının yaklaşması ve zigot.', note: 'Sperm girişi metafaz II’de duran oositi harekete geçirir. Ovum ve kutup hücresi oluşur; dişi ve erkek pronükleuslarının birleşmesi 2n zigotu kurar.' } },
    { key: 'implantasyon', marker: 'Segmentasyon · blastosist · yerleşme', width: 410, detail: { src: '/lesson-assets/ureme-sistemi/details/segmentasyon-implantasyon.jpg', title: 'Büyümeden bölün ve rahimde bağ kur', alt: 'Zigot, iki-dört hücre, morula, blastosist, zona dışına çıkış ve damarlı endometriyuma implantasyon.', note: 'Segmentasyonda hücre sayısı artar, blastomerler küçülür. Morula boşluklu blastosiste dönüşür; blastosist zona pellusidadan çıkar ve endometriyuma tutunur.' } },
  ]
  return <Plate src="dollenme-implantasyon-v1" alt="Akrozom tepkisinden zigot ve blastosist implantasyonuna ilk haftayı gösteren döllenme levhası." items={items} activeRegion={activeRegion} />
}

export function EmbryonicDevelopmentPlate({ activeRegion = null }) {
  const items = [
    { key: 'gastrulasyon', marker: 'Gastrulasyon · üç germ tabakası', width: 390, detail: { src: '/lesson-assets/ureme-sistemi/details/gastrulasyon.jpg', title: 'Hücreleri hareket ettirip vücut planını kur', alt: 'Gastrulasyon kıvrımlarıyla dış ektoderm, orta mezoderm ve iç endodermin oluşması.', note: 'Hücre hareketleri üç tabakayı ve ilkel sindirim boşluğunu kurar. Ektoderm dış, endoderm iç, mezoderm arada yerleşir; bunlar sonraki doku soylarının başlangıcıdır.' } },
    { key: 'organogenez', marker: 'Organogenez · tabaka türevleri', width: 365, detail: { src: '/lesson-assets/ureme-sistemi/details/organogenez.jpg', title: 'Üç tabakayı uzman doku ve organlara dönüştür', alt: 'Ektodermden nöral tüp, mezodermden somit ve kalp, endodermden ilkel bağırsak gelişimi.', note: 'Ektoderm sinir sistemi/epidermis; mezoderm kas-kemik-dolaşım-böbrek-gonat; endoderm sindirim-solunum epiteli ve ilişkili bezlerin çoğunu oluşturur.' } },
    { key: 'plasenta', marker: 'Plasenta · iki arter · bir ven', width: 360, detail: { src: '/lesson-assets/ureme-sistemi/details/plasenta-kordon.jpg', title: 'Kanları karıştırmadan değişim yüzeyi kur', alt: 'Koryon villusu içinde fetal kılcallar, çevresinde anne kanı ve göbek kordonunda iki arter bir ven.', note: 'Anne ve fetüs kanı normalde doğrudan karışmaz. Villus bariyerinden gaz, besin, atık ve bazı antikorlar geçer; iki umbilikal arter plasentaya, tek ven fetüse kan taşır.' } },
    { key: 'gebelik-dogum', marker: 'hCG · plasenta · oksitosin', width: 355, detail: { src: '/lesson-assets/ureme-sistemi/details/gebelik-dogum-hormonlari.jpg', title: 'Gebeliği koru, doğumda pozitif geri bildirim kur', alt: 'hCG ile korpus luteum desteği, plasental hormonlar, serviks gerilmesi-oksitosin-kasılma döngüsü ve süt üretim-salım ayrımı.', note: 'hCG erken dönemde korpus luteumu korur, sonra plasenta steroid üretimini devralır. Doğumda serviks gerilmesi oksitosini, oksitosin kasılmayı artırır; prolaktin süt üretir, oksitosin sütü salgılatır.' } },
  ]
  return <Plate src="embriyonik-gelisim-v1" alt="Gastrulasyon, organogenez, plasenta ve gebelik-doğum hormonlarını gösteren embriyonik gelişim levhası." items={items} activeRegion={activeRegion} />
}
