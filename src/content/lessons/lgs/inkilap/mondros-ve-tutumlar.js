import { createLgsHistoryLesson } from './factory.js'

/**
 * LGS İNKILAP TARİHİ — İTA.8.2 Millî Uyanış · 3. ders
 * Kazanım : İTA.8.2.3
 * Dayanak : MEB T.C. İnkılap Tarihi ve Atatürkçülük Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI
 *   "Mustafa Kemal'in ve halkın tepkisi millî birlik ve beraberlik ile
 *    vatanseverlik açısından ele alınır."
 *
 * KAPSAM KARARI
 * Ders üç tutumu (Osmanlı yönetimi, Mustafa Kemal, halk) karşılaştırma
 * omurgası üzerine kurulur. Antlaşma maddeleri TTK'nin yayımladığı resmî
 * metinden (Nihat Erim, 1953; Ali Türkgeldi'den) sadeleştirildi; İngilizlerin
 * ilk teklifi ile son metin arasındaki fark bir kaynak okuma örneği olarak
 * kullanıldı. İşgallerin günü kaynaklarda farklı verildiği için çoğunda
 * yalnız ay ve yıl yazıldı. Kuvâ-yı Millîye ve cemiyetlerin ayrıntısı
 * sonraki dersin (İTA.8.2.4) konusudur.
 *
 * DOĞRULAMA: LGS_KAYNAK_KAYDI.md §7, Ders 6.
 */

const SLUG = 'lgs-tarih-mondros-ve-tutumlar'

const lesson = createLgsHistoryLesson({
  slug: SLUG,
  topic: 'Milli Uyanış: Bağımsızlık Yolunda Atılan Adımlar',
  order: 3,
  title: 'Mondros Ateşkes Antlaşması ve İşgaller Karşısında Tutumlar',
  subtitle:
    'Bir ateşkes antlaşması savaşı durdurur; ama Mondros’un bazı maddeleri, işgallerin kapısını ardına kadar açtı. Aynı kapının önünde üç farklı tutum ortaya çıktı.',
  minutes: 46,
  kazanimlar: ['İTA.8.2.3'],
  kapsamNotu:
    'Antlaşma maddeleri Türk Tarih Kurumu’nun yayımladığı resmî metinden sadeleştirilmiştir. İşgallerin günü kaynaklarda farklı verildiği için çoğunda yalnız ay ve yıl yazılmıştır. Kuvâ-yı Millîye ve cemiyetler bir sonraki derste ayrıntılı işlenir.',
  prerequisites: [
    {
      topic: 'Birinci Dünya Savaşı’nda Osmanlı Devleti (önceki ders)',
      why: 'Osmanlı’nın savaştan nasıl ve neden yenik çıktığını bilmek, Mondros’un şartlarını anlamanın ön koşuludur.',
    },
    {
      topic: 'Egemenlik ve bağımsızlık kavramları',
      why: 'Bir devletin kendi toprağında karar verme gücünü kaybetmesinin ne anlama geldiğini bilmek, maddelerin ağırlığını görmeyi sağlar.',
    },
  ],
  outcomes: [
    'Mondros Ateşkes Antlaşması’nın imzalanma koşullarını ve önemli maddelerini açıklayabileceksin.',
    'Hangi maddelerin işgallere dayanak oluşturduğunu gerekçesiyle gösterebileceksin.',
    'Osmanlı yönetiminin, Mustafa Kemal’in ve halkın tutumlarını karşılaştırabileceksin.',
    'Mustafa Kemal’in ve halkın tepkisini millî birlik, beraberlik ve vatanseverlik açısından değerlendirebileceksin.',
    'Bir antlaşmanın ilk taslağı ile son metnini karşılaştırarak çıkarım yapabileceksin.',
  ],

  /* ---------------- 1. BAĞLAM ---------------- */
  opening: {
    title: 'Savaş bitti, işgal başladı',
    lead:
      '30 Ekim 1918. Limni adasındaki Mondros limanında, bir İngiliz savaş gemisinin güvertesinde Osmanlı Devleti’nin Birinci Dünya Savaşı sona erdi. Ama barış gelmedi.',
    body:
      'Bulgaristan’ın savaştan çekilmesi ve cephelerdeki yenilgiler üzerine Osmanlı hükümeti ateşkes istedi. Görüşmeler Limni adasındaki Mondros limanında, İngiliz Agamemnon zırhlısında yapıldı. Osmanlı heyetinin başında Bahriye Nazırı Rauf (Orbay) Bey, İtilaf Devletleri adına ise İngiliz Amiral Calthorpe vardı. 30 Ekim 1918’de imzalanan ateşkes, ertesi gün yürürlüğe girdi.\n\n' +
      'Ateşkes normalde savaşan tarafların silahları bırakıp barış görüşmelerine hazırlanmasıdır. Mondros ise bundan fazlasıydı: Osmanlı ordusunun büyük bölümü terhis edilecek, savaş gemileri teslim edilecek, Boğazlar açılacak, demiryolları ve haberleşme İtilaf’ın denetimine girecekti. Üstelik bazı maddeler öyle belirsiz yazılmıştı ki İtilaf Devletleri istedikleri yeri işgal edebilecekti. Nitekim antlaşmanın hemen ardından Musul’dan İzmir’e kadar pek çok yer işgal edildi.\n\n' +
      'Bu durum karşısında üç farklı tutum ortaya çıktı. İstanbul’daki **Osmanlı yönetimi** İtilaf Devletleri’yle iyi geçinerek devleti kurtarabileceğini düşündü. **Mustafa Kemal** işgallere karşı direnilmesi gerektiğini savundu. **Halk** ise bölge bölge örgütlenerek vatanını korumaya başladı. Bu dersin merkezinde bu üç tutumun karşılaştırması var.',
  },
  concepts: [
    { term: 'Ateşkes (mütareke)', body: 'Savaşan tarafların çatışmayı durdurduğu ve barış antlaşmasına kadar uyulacak şartları belirlediği antlaşma. Mondros bir barış antlaşması değil, ateşkes antlaşmasıdır.' },
    { term: 'Terhis', body: 'Askerlerin görevden ayrılıp evlerine gönderilmesi. Mondros’a göre sınırları korumak ve iç düzeni sağlamak için gerekenler dışındaki askerler terhis edilecekti.' },
    { term: 'İşgal', body: 'Bir devletin askerî gücüyle başka bir devletin toprağına girip orayı denetimi altına alması.' },
    { term: 'Stratejik nokta', body: 'Askerî açıdan önemli yer: boğazlar, geçitler, limanlar, demiryolu kavşakları. Mondros’un 7. maddesi bu kavramı tanımlamadığı için her yer “stratejik” sayılabilirdi.' },
    { term: 'Vilâyât-ı sitte (altı vilayet)', body: 'Doğu Anadolu’daki Erzurum, Van, Bitlis, Diyarbakır, Harput (Elazığ) ve Sivas vilayetleri. Mondros’un 24. maddesi bu bölgelerde işgal hakkı tanıyordu.' },
    { term: 'Millî birlik ve beraberlik', body: 'Bir milletin ortak bir tehlike ya da amaç karşısında farklılıklarını bir yana bırakıp birlikte hareket etmesi.' },
  ],
  why: {
    question: 'Bir ateşkes antlaşması neden işgallerin başlangıcı oldu?',
    body:
      'Çünkü İtilaf Devletleri Osmanlı topraklarını savaş sırasında yaptıkları gizli antlaşmalarla zaten paylaşmayı planlamıştı. Mondros bu planları uygulamanın yolunu açtı. 7. madde “güvenliklerini tehdit eden bir durum” ortaya çıkarsa herhangi bir stratejik noktayı işgal hakkı tanıyordu; ama bu durumun ne olduğuna kimin karar vereceğini söylemiyordu. Karar, işgal edecek olanın kendisine kalıyordu.\n\n' +
      'Aynı zamanda Osmanlı’nın kendini savunma araçları elinden alınıyordu: ordu terhis ediliyor, gemiler teslim ediliyor, demiryolları ve haberleşme İtilaf’ın denetimine giriyordu. Yani bir yandan işgal kapısı açılıyor, öbür yandan kapıyı savunacak güç ortadan kaldırılıyordu. Bu yüzden Mondros’u değerlendiren pek çok tarihçi, bu antlaşmayla Osmanlı Devleti’nin fiilen sona erdiğini söyler.',
  },

  /* ---------------- 2. KRONOLOJİ ---------------- */
  chronology: {
    title: 'Kısa kronoloji: Mondros’tan İzmir’in işgaline (Ekim 1918–Mayıs 1919)',
    lead: 'Yedi ayda neler değişti? Her satırda ya bir işgal ya da ona verilen bir tepki var.',
    intro: 'Kronolojide üç çizgi iç içe ilerler: işgaller, İstanbul yönetiminin kararları ve Mustafa Kemal ile halkın tepkileri.',
    items: [
      { title: '30 Ekim 1918 · Mondros imzalandı', body: 'Limni adasında, Agamemnon zırhlısında Rauf Bey ile Amiral Calthorpe ateşkesi imzaladı. Çatışmalar 31 Ekim’de durdu.' },
      { title: 'Kasım 1918 başı · İttihatçı liderler ayrıldı', body: 'Savaş yıllarında yönetimi elinde tutan İttihat ve Terakki’nin önde gelen isimleri ülkeden ayrıldı.' },
      { title: 'Kasım 1918 · Musul ve İskenderun', body: 'İngilizler Musul’u ve İskenderun’u işgal etti. Mustafa Kemal İskenderun’a asker çıkarılırsa karşı konulmasını emretti; hükümet direnilmemesini istedi.' },
      { title: '7 Kasım 1918 · Yıldırım Orduları kaldırıldı', body: 'Hükümet, Mustafa Kemal’in komutasındaki Yıldırım Orduları Grubu’nu kaldırdı; Mustafa Kemal İstanbul’a çağrıldı.' },
      { title: '13 Kasım 1918 · İtilaf donanması İstanbul’da', body: 'İtilaf Devletleri’nin savaş gemileri İstanbul önlerine demirledi. Mustafa Kemal aynı gün İstanbul’a geldi.' },
      { title: 'Aralık 1918 · Güneyde Fransız işgali', body: 'Fransızlar Adana ve Mersin çevresini işgal etti. Dörtyol’da işgal kuvvetlerine karşı silahlı direniş başladı.' },
      { title: '21 Aralık 1918 · Meclis dağıtıldı', body: 'Sultan Vahdettin Meclis-i Mebusan’ı dağıttı. Böylece milletin temsilcilerinin sesi de kesilmiş oldu.' },
      { title: '1919 başı · Antep, Maraş, Urfa', body: 'İngilizler güneydoğudaki bu şehirleri işgal etti; yıl sonunda bölgeyi Fransızlara bıraktılar.' },
      { title: '1919 ilkbaharı · İtalyan işgali', body: 'İtalyanlar Antalya ve çevresine asker çıkardı.' },
      { title: '15 Mayıs 1919 · İzmir’in işgali', body: 'Paris Barış Konferansı’nın izniyle Yunan kuvvetleri İzmir’e çıktı. Ülkenin dört bir yanında mitinglerle tepki gösterildi.' },
      { title: '16 Mayıs 1919 · Mustafa Kemal yola çıktı', body: 'Mustafa Kemal Bandırma vapuruyla İstanbul’dan Samsun’a doğru yola çıktı. Millî Mücadele’nin hazırlık dönemi başlıyordu.' },
    ],
    takeaway:
      'Dikkat et: İşgaller Mondros’un hemen ardından başladı ve giderek genişledi. İstanbul yönetimi direnilmemesini isterken halk ve Mustafa Kemal direnişin yollarını aradı.',
    body:
      'Kronolojiyi iki soruyla oku. **Birincisi:** İşgaller hangi maddeye dayanıyordu? Musul, İskenderun ve güneydoğu şehirleri 7. maddeye (stratejik nokta) dayandırıldı. İzmir’in işgali ise Paris Barış Konferansı’nda alınan bir kararla yapıldı; Yunanistan ateşkesi imzalayan taraflardan biri değildi, bu yüzden bu işgal Mondros’un da ötesine geçiyordu.\n\n' +
      '**İkincisi:** İstanbul’daki yönetim neden direnmedi? Ordu dağıtılıyor, başkent İtilaf donanmasının topları altındaydı; yönetim, direnmenin barış görüşmelerinde daha ağır şartlar getireceğinden korkuyordu. Halk ise bu bekleyişin işgalleri durdurmadığını görünce kendi yolunu aramaya başladı.',
  },
  map: {
    title: 'Şematik atlas: Mondros sonrası işgaller',
    intro: 'Katmanlarla işgal eden devletleri ayrı ayrı gör. Bir noktaya dokununca işgalin ne zaman yapıldığını ve hangi gerekçeye dayandığını okursun.',
    map_label: 'Şematik gösterim · işgal alanı ya da sınır göstermez',
    layers: [
      { id: 'ingiliz', label: 'İngiliz işgalleri', description: 'İstanbul (İtilaf ile birlikte), Musul, İskenderun, Antep–Maraş–Urfa (sonra Fransızlara bırakıldı).', active: true },
      { id: 'fransiz', label: 'Fransız işgalleri', description: 'Adana, Mersin ve çevresi.', active: true },
      { id: 'italyan', label: 'İtalyan işgalleri', description: 'Antalya ve çevresi.', active: true },
      { id: 'yunan', label: 'Yunan işgali', description: 'İzmir (15 Mayıs 1919).', active: true },
    ],
    regions: [
      { label: 'KARADENİZ', x: 46, y: 6, tone: 'water' },
      { label: 'ANADOLU', x: 36, y: 38, tone: 'land' },
      { label: 'AKDENİZ', x: 24, y: 88, tone: 'water' },
      { label: 'EGE', x: 4, y: 58, tone: 'water' },
    ],
    locations: [
      { id: 'istanbul', label: 'İstanbul', x: 16, y: 18, layer: 'ingiliz', tone: 'brand', detail: '13 Kasım 1918’de İtilaf donanması İstanbul önlerine demirledi. Başkent İtilaf Devletleri’nin denetimine girdi; resmî işgal 16 Mart 1920’de gerçekleşecekti.' },
      { id: 'izmir', label: 'İzmir · Yunan', x: 8, y: 48, layer: 'yunan', tone: 'danger', detail: '15 Mayıs 1919’da Paris Barış Konferansı’nın izniyle Yunan kuvvetleri İzmir’e çıktı. Yunanistan ateşkesi imzalayan taraflardan değildi; işgal ülke genelinde büyük tepki doğurdu.' },
      { id: 'antalya', label: 'Antalya · İtalyan', x: 26, y: 68, layer: 'italyan', tone: 'accent', detail: '1919 ilkbaharında İtalyanlar Antalya ve çevresine asker çıkardı. İtalya’ya savaş sırasında yapılan gizli antlaşmalarla bu bölgelerde pay vaat edilmişti.' },
      { id: 'toros', label: 'Toros tünelleri', x: 40, y: 58, layer: 'ingiliz', tone: 'muted', detail: 'Mondros’un 10. maddesi Toros tünellerinin İtilaf tarafından işgalini öngörüyordu. Tüneller, Anadolu ile güney arasındaki demiryolu bağlantısının kilidiydi.' },
      { id: 'adana', label: 'Adana · Fransız', x: 46, y: 72, layer: 'fransiz', tone: 'accent', detail: 'Aralık 1918’de Fransızlar Adana ve Mersin çevresini işgal etti. Yakınındaki Dörtyol’da işgal kuvvetlerine karşı silahlı direniş başladı.' },
      { id: 'iskenderun', label: 'İskenderun', x: 56, y: 86, layer: 'ingiliz', tone: 'brand', detail: 'Kasım 1918’de İngilizler tarafından işgal edildi. Mustafa Kemal karşı konulmasını istedi; hükümet direnilmemesini emretti.' },
      { id: 'maras', label: 'Maraş', x: 58, y: 50, layer: 'ingiliz', tone: 'brand', detail: '1919 başında İngilizler işgal etti, yıl sonunda bölgeyi Fransızlara bıraktı. Halkın direnişi sonraki derslerde işlenecek.' },
      { id: 'antep', label: 'Antep', x: 66, y: 62, layer: 'ingiliz', tone: 'brand', detail: '1919 başında İngilizler işgal etti, yıl sonunda Fransızlara bıraktı. Mondros’un ilk İngiliz taslağında adı açıkça geçen şehirlerdendi.' },
      { id: 'urfa', label: 'Urfa', x: 78, y: 52, layer: 'ingiliz', tone: 'brand', detail: '1919 başında İngilizler işgal etti, yıl sonunda Fransızlara bıraktı.' },
      { id: 'musul', label: 'Musul', x: 90, y: 74, layer: 'ingiliz', tone: 'brand', detail: 'Ateşkes imzalandığında Osmanlı ordusunun elindeydi; Kasım 1918’de İngilizler tarafından işgal edildi. Musul meselesi Lozan’dan sonra da tartışılacaktı.' },
    ],
    routes: [],
    insight:
      'Haritaya bak: İşgaller Anadolu’yu kıyılardan ve güneyden çevreliyor. Karadeniz’den İstanbul’a, Ege’den Akdeniz’e, güneydoğuya kadar hemen her yönde yabancı asker vardı. Bu tablo, direnişin neden Anadolu’nun içlerinden başlayacağını da açıklar.',
    source_note:
      'İşgal edilen yerler ve tarihler; Türk Tarih Kurumu’nun yayımladığı Mondros metni (Nihat Erim, 1953), TDV İslâm Ansiklopedisi “Millî Mücadele” maddesi, MSB “Millî Mücadele Dönemi” sayfası ve hakemli makaleler esas alınarak şematikleştirilmiştir. Noktalar yaklaşık yerleşimdir; işgal alanının sınırını göstermez.',
  },
  dataTable: {
    title: 'Mondros’un önemli maddeleri ve anlamı',
    columns: ['Madde', 'İçerik (sadeleştirilmiş)', 'Ne anlama geliyordu?'],
    rows: [
      ['1', 'Boğazlar açılacak, Boğaz istihkâmları İtilaf tarafından işgal edilecek.', 'İstanbul ve Boğazlar savunmasız kaldı.'],
      ['5', 'Sınırları korumak ve iç düzeni sağlamak için gerekenler dışında ordu terhis edilecek.', 'Osmanlı kendini savunacak gücünü kaybetti.'],
      ['6', 'Savaş gemileri teslim edilecek.', 'Deniz gücü ortadan kalktı.'],
      ['7', 'İtilaf Devletleri güvenliklerini tehdit eden bir durum olursa herhangi bir stratejik noktayı işgal edebilecek.', 'Belirsiz ifade, istenen her yerin işgaline kapı açtı.'],
      ['10', 'Toros tünelleri İtilaf tarafından işgal edilecek.', 'Anadolu ile güney arasındaki ulaşım İtilaf’ın eline geçti.'],
      ['12', 'Telsiz, telgraf ve kablolar İtilaf memurlarınca denetlenecek (hükümet haberleşmesi hariç).', 'Haberleşme denetim altına girdi.'],
      ['15', 'Bütün demiryolları İtilaf denetim subaylarının denetimine girecek.', 'Asker ve malzeme taşımak İtilaf’ın iznine bağlandı.'],
      ['16', 'Hicaz, Asir, Yemen, Suriye ve Irak’taki Osmanlı birlikleri en yakın İtilaf komutanına teslim olacak.', 'Arap topraklarındaki Osmanlı varlığı sona erdi.'],
      ['24', 'Altı vilayette karışıklık çıkarsa İtilaf bu vilayetlerin herhangi bir kısmını işgal edebilecek.', 'Doğu Anadolu’da bir devlet kurulmasına zemin hazırlanmak istendi.'],
    ],
    caption:
      'Maddeleri üç gruba ayırarak hatırla: Osmanlı’yı savunmasız bırakan maddeler (5, 6), ulaşım ve haberleşmeyi denetleyen maddeler (10, 12, 15) ve işgale kapı açan maddeler (1, 7, 24).',
  },

  /* ---------------- 3. ZİNCİR ---------------- */
  chain: {
    title: 'Mondros’tan direnişe: zincir nasıl kuruldu?',
    lead: 'İşgallerin sebebini yalnız ateşkesin maddelerinde arama. Savaş sırasında yapılan planlar ve Osmanlı’nın durumu da zincirin halkalarıdır.',
    intro: 'Zincirde ilk halkalar işgallerin sebeplerini, son halkalar ise işgallere verilen tepkilerin nasıl bir hareket doğurduğunu gösterir.',
    steps: [
      { tur: 'sebep', title: 'Savaşta yenilgi', body: 'Bulgaristan’ın çekilmesi ve cephelerdeki kayıplar Osmanlı’yı ateşkes istemek zorunda bıraktı.' },
      { tur: 'sebep', title: 'Gizli paylaşım planları', body: 'İtilaf Devletleri savaş sırasında yaptıkları gizli antlaşmalarla Osmanlı topraklarını aralarında paylaşmayı planlamıştı.' },
      { tur: 'sebep', title: 'Belirsiz ve ağır maddeler', body: '7. ve 24. maddeler işgale geniş bir kapı açtı; 5. ve 6. maddeler Osmanlı’yı savunmasız bıraktı.' },
      { tur: 'gelisme', title: 'İşgaller', body: 'Musul, İskenderun, İstanbul, güney şehirleri, Antalya ve sonunda İzmir işgal edildi.' },
      { tur: 'gelisme', title: 'Üç farklı tutum', body: 'İstanbul yönetimi direnmedi ve İtilaf’la iyi geçinmeye çalıştı; Mustafa Kemal direnilmesini savundu; halk bölge bölge örgütlendi.' },
      { tur: 'sonuc', title: 'Millî uyanış', body: 'Halk millî cemiyetler kurdu, mitingler düzenledi, işgal edilen bölgelerde silahlı direnişe geçti. Millî birlik ve beraberlik duygusu güçlendi.' },
      { tur: 'sonraki-etki', title: 'Millî Mücadele’nin başlangıcı', body: 'Bu dağınık direnişler, Mustafa Kemal’in Samsun’a çıkmasıyla tek bir amaç ve önderlik etrafında birleşmeye başladı.' },
    ],
    inference:
      'Temel çıkarım: Mondros işgallerin hem sebebi hem de bahanesi oldu. Ama işgaller aynı zamanda millî uyanışı başlattı: Kendini savunacak ordusu dağıtılan bir millet, kendi imkânlarıyla örgütlendi.',
    body:
      'Program, Mustafa Kemal’in ve halkın tepkisinin **millî birlik ve beraberlik** ile **vatanseverlik** açısından ele alınmasını ister. Bu iki kavramı somut davranışlarla bağla.\n\n' +
      '**Vatanseverlik:** Mustafa Kemal’in İskenderun’un işgaline karşı konulmasını emretmesi, hükümetin tutumuna rağmen vatan toprağının savunulmasını her şeyin önünde tutması demekti. Dörtyol’da, Antep’te, Maraş’ta ellerindeki sınırlı imkânlarla işgale karşı koyan halk da aynı duyguyla hareket etti.\n\n' +
      '**Millî birlik ve beraberlik:** Farklı şehirlerde, farklı meslek ve yaştan insanlar aynı tehlike karşısında bir araya geldi. İzmir’in işgalinden sonra İstanbul’da ve Anadolu’nun pek çok şehrinde düzenlenen mitinglerde işgali protesto eden halk, ortak bir tehlike karşısında ortak bir ses oluşturdu. Bu birlik, Millî Mücadele’nin temel gücü olacaktı.\n\n' +
      'Bir de şunu unutma: ABD Başkanı Wilson’ın ilkelerinde Osmanlı’nın Türk nüfusun yaşadığı bölgelerinin egemenliğinin güvence altına alınacağı söylenmişti. Mondros ve ardından gelen işgaller bu ilkelerle çelişiyordu; bu çelişki halkta haksızlığa uğrama duygusunu güçlendirdi.',
  },
  comparison: {
    title: 'Üç tutum: Osmanlı yönetimi, Mustafa Kemal, halk',
    columns: ['Osmanlı yönetimi (İstanbul)', 'Mustafa Kemal', 'Halk'],
    rows: [
      { label: 'Mondros’a bakışı', values: ['Kaçınılmaz bir sonuç; şartlara uyulursa barışta daha iyi sonuç alınabilir', 'Maddeler belirsiz ve tehlikeli; işgallere yol açacak', 'Haksız bir antlaşma; işgalleri meşrulaştırıyor'] },
      { label: 'İşgallere tepkisi', values: ['Direnilmemesini istedi', 'Direnilmesini emretti ve savundu', 'Mitinglerle ve silahlı direnişle karşı koydu'] },
      { label: 'Somut davranış', values: ['İskenderun’da direnişi engelledi; Meclis-i Mebusan’ı dağıttı; İtilaf’la iyi ilişkiler aradı', 'İskenderun için direnme emri verdi; İstanbul’da çözüm aradı; sonunda Anadolu’ya geçti', 'Millî cemiyetler kurdu; Dörtyol’da ve güneyde direnişe geçti; İzmir’in işgalini mitinglerle protesto etti'] },
      { label: 'Dayandığı düşünce', values: ['İtilaf’a karşı koymak daha ağır sonuçlar doğurur', 'Bağımsızlık ancak direnerek korunabilir', 'Vatan toprağı savunulmalıdır; kimse kurtarmayı beklemeden harekete geçilmelidir'] },
      { label: 'Programın vurgusu', values: ['—', 'Vatanseverlik, kararlılık', 'Millî birlik ve beraberlik, vatanseverlik'] },
    ],
    insight:
      'Asıl ayrım şurada: İstanbul yönetimi kurtuluşu İtilaf Devletleri’nin iyi niyetinde, Mustafa Kemal ve halk ise milletin kendi gücünde aradı. Bu ayrım Millî Mücadele boyunca sürecek temel ayrılıktır.',
  },
  traps: [
    {
      title: 'Mondros’u bir barış antlaşması sanmak',
      wrong: 'Mondros Ateşkes Antlaşması ile Osmanlı Devleti’nin yeni sınırları kesinleşti.',
      right: 'Mondros bir ateşkestir; sınırları belirlemez, barış görüşmelerine kadar uyulacak şartları belirler. Barış antlaşması 1920’de Sevr olarak hazırlandı, ama uygulanamadı.',
      body: 'Soruda “sınırların belirlenmesi” ifadesi varsa Mondros’u değil, bir barış antlaşmasını düşün.',
    },
    {
      title: 'İzmir’in işgalini doğrudan Mondros’un bir maddesine bağlamak',
      wrong: 'Yunanistan, Mondros’un 7. maddesine dayanarak ateşkesi imzalayan taraf olarak İzmir’i işgal etti.',
      right: 'Yunanistan Mondros’u imzalayan taraflardan değildi. İzmir’in işgali Paris Barış Konferansı’nda alınan kararla yapıldı; İtilaf Devletleri bunu 7. maddeyle gerekçelendirdi.',
      body: 'Bu ayrım, İzmir’in işgalinin neden bu kadar büyük bir tepki doğurduğunu da açıklar: Ateşkes şartları bile aşılmıştı.',
    },
    {
      title: 'Bütün yönetimi aynı tutumda sanmak',
      wrong: 'Osmanlı Devleti’nde görev yapan herkes işgallere karşı direnilmemesini istedi.',
      right: 'İstanbul hükümetinin genel tutumu buydu; ama Mustafa Kemal gibi komutanlar, pek çok subay ve memur işgallere karşı çıktı ve ileride Millî Mücadele’ye katıldı.',
      body: '“Osmanlı yönetimi” ile “Osmanlı Devleti’nde görev yapan herkes” aynı şey değildir. Genellemelere dikkat et.',
    },
  ],

  /* ---------------- 4. ŞAHSİYETLER ---------------- */
  people: {
    title: 'Kararlarıyla şahsiyetler',
    lead: 'Aynı günlerde farklı kişiler farklı kararlar verdi. Her kartta kişinin hangi tutumu temsil ettiğine bak.',
    intro: 'Kartları üç tutumla eşleştir: İstanbul yönetimi, Mustafa Kemal ve halk. İtilaf tarafının temsilcisi de kararlarıyla burada.',
    figures: [
      {
        name: 'Rauf (Orbay) Bey',
        period: 'Ekim 1918 · Bahriye nazırı',
        position: 'Mondros’u imzalayan Osmanlı heyetinin başkanı',
        contribution: 'Ateşkes görüşmelerinde Osmanlı heyetini yönetti ve antlaşmayı imzaladı. İngilizlerin ilk teklifinde yer alan bazı ifadeler görüşmeler sonunda değişti; ama işgale kapı açan maddeler kaldı.',
        connections: ['Mondros Ateşkes Antlaşması (30 Ekim 1918)'],
        significance: 'Mondros’un ardından İtilaf’ın maddeleri geniş yorumladığını görünce Millî Mücadele’ye katıldı. Bir antlaşmanın metni kadar uygulanışının da önemli olduğunu gösteren bir örnektir.',
      },
      {
        name: 'Amiral Calthorpe',
        period: 'Ekim 1918',
        position: 'İtilaf Devletleri adına ateşkesi imzalayan İngiliz amiral',
        contribution: 'Görüşmeleri İtilaf adına yürüttü ve antlaşmayı imzaladı.',
        connections: ['Mondros Ateşkes Antlaşması'],
        significance: 'Antlaşmanın İngiliz gemisinde, İngiliz amiralle imzalanması, İngiltere’nin Osmanlı topraklarındaki belirleyici rolünü gösterir.',
      },
      {
        name: 'Sultan Vahdettin (VI. Mehmed)',
        period: '1918–1922 · padişah',
        position: 'İstanbul yönetiminin başı',
        contribution: 'İtilaf Devletleri’yle iyi ilişkiler kurarak devleti kurtarmayı umdu. 21 Aralık 1918’de Meclis-i Mebusan’ı dağıttı.',
        connections: ['Meclisin dağıtılması', 'İstanbul yönetiminin tutumu'],
        significance: 'Meclisin dağıtılmasıyla milletin temsilcilerinin söz hakkı ortadan kalktı; bu durum Anadolu’da millî iradeye dayanan bir hareketin gerekliliğini artırdı.',
      },
      {
        name: 'Ahmet İzzet Paşa',
        period: 'Ekim–Kasım 1918 · sadrazam',
        position: 'Mondros’u imzalatan hükümetin başı',
        contribution: 'İskenderun’un işgali sırasında Mustafa Kemal’e direnilmemesini bildirdi ve Yıldırım Orduları Grubu’nu kaldırdı.',
        connections: ['İskenderun’un işgali', 'Yıldırım Orduları Grubu’nun kaldırılması'],
        significance: 'Mustafa Kemal ile İstanbul hükümetinin yollarının ayrılmaya başladığı kararın sahibidir.',
      },
      {
        name: 'Mustafa Kemal',
        period: 'Kasım 1918–Mayıs 1919',
        position: 'Yıldırım Orduları Grubu komutanı, sonra İstanbul’da görevsiz bir general',
        contribution: 'İskenderun’a asker çıkarılırsa karşı konulmasını emretti. Grubun kaldırılmasından sonra İstanbul’a geldi; burada hükümet ve siyasetçilerle görüşerek bir çözüm aradı. İstanbul’dan bir sonuç çıkmayacağını görünce Anadolu’ya geçmeye karar verdi.',
        connections: ['İskenderun’un işgali', '13 Kasım 1918', 'Samsun’a hareket (16 Mayıs 1919)'],
        significance: 'Tutumu, programın vurguladığı vatanseverliğin ve kararlılığın örneğidir.',
      },
      {
        name: 'Hasan Tahsin',
        period: '15 Mayıs 1919',
        position: 'İzmirli gazeteci',
        contribution: 'İzmir’in işgali sırasında Yunan kuvvetlerine ateş açtığı ve orada hayatını kaybettiği anlatılır.',
        connections: ['İzmir’in işgali'],
        significance: 'İşgale karşı halkın bireysel direnişinin simgesi olarak anılır.',
      },
    ],
    takeaway:
      'Kişileri tutumlarıyla eşleştir: Vahdettin ve Ahmet İzzet Paşa İstanbul yönetiminin, Mustafa Kemal direnişin, Hasan Tahsin halkın tepkisinin temsilcisidir.',
  },

  /* ---------------- 5. DERİNLEŞME ---------------- */
  deepDiveSections: [
    {
      id: `${SLUG}-istanbul`,
      title: 'Mustafa Kemal İstanbul’da (Kasım 1918–Mayıs 1919)',
      lead: 'Mustafa Kemal İstanbul’a geldiğinde hemen Anadolu’ya geçmedi. Altı ay boyunca neler yaptığını ve neden sonunda Anadolu’yu seçtiğini görmek, onun tutumunu anlamanın anahtarıdır.',
      blocks: [
        {
          id: `${SLUG}-istanbul-anlatim`,
          type: 'prose',
          body:
            'Mustafa Kemal 13 Kasım 1918’de İstanbul’a geldi. Aynı gün İtilaf Devletleri’nin savaş gemileri İstanbul önlerine demirlemişti. Yaverinin hatırasına göre Mustafa Kemal bu manzara karşısında “Geldikleri gibi giderler.” demiştir.\n\n' +
            'İstanbul’da geçirdiği altı ayda Mustafa Kemal padişahla, hükümet üyeleriyle, gazetecilerle ve eski silah arkadaşlarıyla görüştü. Amacı, işgallere karşı koyabilecek bir hükümetin kurulmasına katkı vermek ve ülkenin kurtuluşu için bir yol bulmaktı. Ancak başkent İtilaf Devletleri’nin denetimi altındaydı; hükümetler İtilaf’la iyi geçinmeyi seçiyordu ve 1919 Mart’ında sadrazam olan Damat Ferit Paşa bu çizgiyi daha da belirginleştirdi.\n\n' +
            'Bu süreçte Mustafa Kemal şu sonuca vardı: Kurtuluş İstanbul’dan değil, işgal altında olmayan Anadolu’dan ve milletin kendi iradesinden gelecekti. Doğu Anadolu’daki bazı askerî birlikleri denetlemek ve bölgede düzeni sağlamak üzere 9. Ordu Müfettişi olarak atanması ona bu fırsatı verdi. 16 Mayıs 1919’da Bandırma vapuruyla İstanbul’dan ayrıldı.\n\n' +
            'Bu altı ay, Mustafa Kemal’in kişiliği hakkında önemli bir şey söyler: Önce var olan kurumlar içinde çözüm aradı; çözüm çıkmayacağı anlaşılınca yeni bir yol açmaktan çekinmedi. Bu, hem sabır hem de kararlılık gerektiren bir tutumdu.',
        },
        {
          id: `${SLUG}-istanbul-kanca`,
          type: 'memory',
          title: 'Hafıza kancası: “Önce İstanbul, sonra Anadolu”',
          body: '13 Kasım 1918 İstanbul’a geliş → altı ay görüşmeler → 16 Mayıs 1919 Bandırma vapuru → 19 Mayıs 1919 Samsun.',
        },
        {
          id: `${SLUG}-istanbul-yanilgi`,
          type: 'trap',
          title: 'Mustafa Kemal’in İstanbul’da boş beklediğini sanmak',
          wrong: 'Mustafa Kemal İstanbul’a gelince hiçbir şey yapmadan Anadolu’ya geçmeyi bekledi.',
          right: 'İstanbul’da hükümet çevreleriyle görüşerek işgallere karşı bir çözüm aradı; bu yolun sonuç vermeyeceğini görünce Anadolu’ya geçti.',
          body: 'Bu ayrım önemlidir: Mustafa Kemal’in Anadolu kararı bir aceleciliğin değil, denenen yolların sonuç vermemesinin ürünüdür.',
        },
      ],
    },
  ],

  /* ---------------- 6. KAYNAKTAN ÇIKARIM ---------------- */
  sourceReading: {
    lead: 'Bu derste bir antlaşmanın iki hâlini okuyacaksın: İngilizlerin ilk teklifi ve imzalanan son metin. İki metni karşılaştırmak, tarihçinin en güçlü araçlarından biridir.',
    intro:
      'Türk Tarih Kurumu’nun yayımladığı Mondros metni, maddelerin **İngilizlerin ilk teklifindeki** hâlini ve **imzalanan son hâlini** yan yana verir. İki hâl arasındaki farklar, Osmanlı heyetinin görüşmelerde neyi değiştirebildiğini, neyi değiştiremediğini gösterir.\n\n' +
      'Aşağıdaki birinci metin iki maddenin sadeleştirmesidir; ikinci metin bir hatıradır; üçüncü metin DRKOÇ’un yazdığı bir değerlendirmedir.',
    sources: [
      {
        tur: 'birincil',
        baslik: 'Mondros’un 7. ve 24. maddeleri: ilk teklif ve son metin',
        kunye: 'Mondros Mütarekenamesi, 30 Ekim 1918. Metin: Nihat Erim, Devletlerarası Hukuku ve Siyasi Tarih Metinleri, Ankara 1953 (Ali Türkgeldi’den); Türk Tarih Kurumu yayını.',
        nitelik: 'DRKOÇ sadeleştirmesi. Maddelerin Osmanlı Türkçesi metni günümüz Türkçesine aktarılmıştır; birebir alıntı değildir.',
        metin:
          '7. madde, ilk teklif: Önemli stratejik noktalar İtilaf kuvvetleri tarafından işgal edilecektir. — 7. madde, son metin: İtilaf Devletleri güvenliklerini tehdit edecek bir durum ortaya çıkarsa herhangi bir stratejik noktayı işgal hakkına sahip olacaktır. — 24. madde, ilk teklif: Altı vilayette karışıklık çıkarsa bu vilayetlerin işgal hakkı saklıdır; ayrıca Sis, Haçin, Zeytun ve Antep işgal edilecektir. — 24. madde, son metin: Altı vilayette karışıklık çıkarsa İtilaf Devletleri bu vilayetlerin herhangi bir kısmını işgal etme hakkını saklı tutar.',
        soru: 'İlk teklif ile son metin arasındaki farklar nelerdir? Osmanlı heyeti neyi değiştirebilmiş, neyi değiştirememiştir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Antlaşmanın taslağı ve imzalanan metni: iki birincil kaynak.' },
          { title: '7. maddeyi karşılaştır', body: 'İlk teklifte stratejik noktalar doğrudan işgal edilecekti. Son metinde işgal “güvenliği tehdit eden bir durum” şartına bağlandı. Kâğıt üzerinde bir şart eklendi.' },
          { title: '24. maddeyi karşılaştır', body: 'İlk teklifte dört şehrin adı açıkça sayılmış ve işgalleri kesin olarak yazılmıştı. Son metinde bu şehirlerin adı çıkarıldı.' },
          { title: 'Uygulamayla sına', body: 'Eklenen şartın ne olduğunu ve ne zaman gerçekleştiğini İtilaf kendisi belirledi. Antep gibi ilk taslakta adı geçen şehirler antlaşmadan kısa süre sonra yine işgal edildi.' },
        ],
        cevap: 'Osmanlı heyeti 7. maddeye bir şart eklettirmiş, 24. maddeden şehir adlarını çıkarttırmıştır. Ama şartın ne zaman gerçekleştiğine İtilaf karar verdiği için işgal hakkı değişmemiş, ilk taslakta adı geçen yerler de işgal edilmiştir.',
        cikarim: 'Bir antlaşmadaki şartın değeri, o şartın gerçekleşip gerçekleşmediğine kimin karar verdiğine bağlıdır. Karar yetkisi karşı taraftaysa şart kâğıt üzerinde kalır.',
      },
      {
        tur: 'birincil',
        baslik: '“Geldikleri gibi giderler.”',
        kunye: 'Mustafa Kemal’in 13 Kasım 1918’de İstanbul’a gelişinde İtilaf donanmasını görünce yaveri Cevat Abbas (Gürer)’e söylediği aktarılan söz. Cevat Abbas bu anı 1939’da yayımlanan hatıralarında anlatmıştır.',
        nitelik: 'Hatıra yoluyla aktarılan söz. Mustafa Kemal’in kendi yazısı değil, yanındaki kişinin sonradan aktardığı ifadedir.',
        metin: 'Geldikleri gibi giderler.',
        soru: 'Bu söz Mustafa Kemal’in tutumu hakkında ne gösterir? Sözün bir hatıra yoluyla aktarılmış olması onu nasıl okumamızı gerektirir?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaya tanık olan birinin aktardığı söz: birincil kaynaktır ama dolaylıdır; sözü Mustafa Kemal yazmamış, yaveri hatırlayıp aktarmıştır.' },
          { title: 'Sözün anlamını çöz', body: 'İşgalci güçlerin kalıcı olmadığına, bir gün çıkarılacaklarına duyulan inanç.' },
          { title: 'Tutumla ilişkilendir', body: 'İstanbul yönetimi işgallere boyun eğerken bu söz direnme kararlılığını ve geleceğe güveni gösterir.' },
          { title: 'Sınırı gör', body: 'Söz, olaydan sonra ve bir tanığın belleğinden aktarılmıştır; kelimesi kelimesine böyle söylenmiş olması kesin değildir. Ama Mustafa Kemal’in o günlerdeki davranışları (İskenderun emri, sonra Anadolu’ya geçişi) sözün yansıttığı tutumla tutarlıdır.' },
        ],
        cevap: 'Söz, Mustafa Kemal’in işgallerin geçici olduğuna inandığını ve direnme kararlılığını gösterir. Hatıra yoluyla aktarıldığı için kelimelerine değil, yansıttığı tutuma ve bu tutumun diğer davranışlarıyla tutarlılığına odaklanmak gerekir.',
        cikarim: 'Dolaylı aktarılan bir sözü değerlendirirken “Söylediği başka kanıtlarla tutarlı mı?” diye sor. Tutarlıysa sözün yansıttığı tutum güçlü bir çıkarımdır.',
      },
      {
        tur: 'ikincil',
        baslik: 'Mondros’un anlamı üzerine bir değerlendirme',
        kunye: 'DRKOÇ tarafından bu ders için yazılmış örnek ikincil kaynak metni. Gerçek bir yazara ya da kitaba ait değildir.',
        nitelik: 'DRKOÇ örnek metni. Bir tarih kitabında karşılaşabileceğin yorum dilini göstermek için yazılmıştır.',
        metin:
          'Mondros Ateşkes Antlaşması’yla Osmanlı Devleti fiilen sona ermiştir. Ordusu dağıtılan, gemileri teslim edilen, ulaşımı ve haberleşmesi yabancı denetime giren bir devletin bağımsızlığından söz edilemezdi. Ancak Mondros’un yol açtığı işgaller, Anadolu’da millî bir uyanışı da başlattı.',
        soru: 'Metindeki olguları ve yorumu ayır. “Fiilen sona ermiştir” yargısına hangi kanıtlarla katılabilir ya da karşı çıkabilirsin?',
        adimlar: [
          { title: 'Kaynağın türünü belirle', body: 'Olaydan sonra yazılmış bir değerlendirme: ikincil kaynak.' },
          { title: 'Olguları ayır', body: 'Ordunun terhisi, gemilerin teslimi, ulaşım ve haberleşmenin denetime girmesi antlaşma maddeleriyle doğrulanabilir olgulardır.' },
          { title: 'Yorumu ayır', body: '“Fiilen sona ermiştir” ve “bağımsızlığından söz edilemezdi” yazarın değerlendirmesidir.' },
          { title: 'Yorumu sına', body: 'Destekleyen kanıt: 5, 6, 12 ve 15. maddeler. Karşı kanıt olarak düşünülebilecek şey: Padişah ve hükümet hukuken yerinde duruyordu. Yorumun “fiilen” sözcüğünü kullanması, hukuki değil gerçek durumdan söz ettiğini gösterir.' },
        ],
        cevap: 'Olgular: terhis, gemilerin teslimi, ulaşım ve haberleşmenin denetimi, işgaller. Yorum: devletin fiilen sona erdiği ve bağımsızlığın kalmadığı. Maddeler yorumu destekler; “fiilen” sözcüğü, hukuken var olan yönetimle çelişkiyi de açıklar.',
        cikarim: 'Yorum metinlerinde “fiilen”, “hukuken”, “kısmen” gibi sözcükler yargının sınırını belirler. Bu sözcükleri atlayan öğrenci, yorumu olduğundan daha kesin okur.',
      },
    ],
  },

  /* ---------------- 7. UYGULAMA ---------------- */
  workedExamples: [
    {
      title: 'Maddeden sonuca',
      prompt: 'Mondros’un 5. ve 6. maddeleri ile 7. maddesini birlikte düşündüğünde, Osmanlı Devleti’nin durumu hakkında hangi sonuca ulaşırsın?',
      steps: [
        { title: '5. ve 6. maddeler', body: 'Ordu terhis ediliyor, savaş gemileri teslim ediliyor: Osmanlı’nın kendini savunma gücü azalıyor.' },
        { title: '7. madde', body: 'İtilaf istediği stratejik noktayı işgal edebiliyor: dışarıdan gelen tehlike büyüyor.' },
        { title: 'Birleştir', body: 'Savunma gücü azalırken işgal tehlikesi artıyor.' },
      ],
      answer: 'Osmanlı Devleti, işgallere karşı kendini savunamayacak bir duruma düşürülmüştür. Bu maddeler birlikte, İtilaf’ın işgallerini hem mümkün hem de kolay hâle getirmiştir.',
      takeaway: 'Antlaşma sorularında maddeleri tek tek değil, birbirini nasıl tamamladıklarına bakarak oku.',
    },
    {
      title: 'Tutumu tanı',
      prompt:
        'Aşağıdaki davranışların hangi tutuma (Osmanlı yönetimi, Mustafa Kemal, halk) ait olduğunu belirle:\n\n- I. İskenderun’a asker çıkarılırsa karşı konulmasını emretmek\n- II. Meclis-i Mebusan’ı dağıtmak\n- III. Dörtyol’da işgal kuvvetlerine karşı silahlı direnişe geçmek\n- IV. İşgallere direnilmemesini istemek',
      steps: [
        { title: 'I', body: 'Direnme emri, Yıldırım Orduları komutanından geldi: Mustafa Kemal.' },
        { title: 'II', body: 'Meclisi dağıtma yetkisi padişahındı: Osmanlı yönetimi.' },
        { title: 'III', body: 'Yerel halkın kendi imkânlarıyla direnişi: halk.' },
        { title: 'IV', body: 'Hükümetin genel tutumu: Osmanlı yönetimi.' },
      ],
      answer: 'I Mustafa Kemal · II Osmanlı yönetimi · III halk · IV Osmanlı yönetimi.',
      takeaway: 'Davranışı yapan kişinin yetkisine bak: meclisi dağıtmak padişahın, direnme emri bir komutanın, silahlı yerel direniş halkın davranışıdır.',
    },
    {
      title: 'Kavramı davranışla eşleştir',
      prompt: 'İzmir’in işgalinden sonra İstanbul’da ve Anadolu’nun pek çok şehrinde işgali protesto eden mitingler yapıldı. Bu durum programın vurguladığı hangi kavramla ilişkilendirilebilir? Gerekçesini yaz.',
      steps: [
        { title: 'Davranışı ayır', body: 'Farklı şehirlerde, farklı insanlar aynı olaya aynı tepkiyi verdi.' },
        { title: 'Kavramı bul', body: 'Ortak bir tehlike karşısında birlikte hareket etmek millî birlik ve beraberliktir; işgale karşı çıkmak vatanseverliktir.' },
      ],
      answer: 'Millî birlik ve beraberlik (ortak tehlike karşısında ortak tepki) ve vatanseverlik (vatan toprağının işgaline karşı çıkma).',
      takeaway: 'Bir davranış birden fazla kavramla ilişkilendirilebilir; soru hangisini soruyorsa gerekçesini o kavrama göre kur.',
    },
  ],
  questionClue: {
    concept: 'Soruda Mondros’un hangi maddesinden söz edildiğini nasıl tanırım?',
    statement: 'Soru bir maddenin sadeleştirilmiş hâlini ya da sonucunu verip hangi amaca hizmet ettiğini sorabilir.',
    clues: [
      '“Terhis”, “ordunun dağıtılması” → 5. madde; savunma gücünün azalması',
      '“Savaş gemilerinin teslimi” → 6. madde',
      '“Güvenliği tehdit eden durum”, “stratejik nokta” → 7. madde; işgallere dayanak',
      '“Toros tünelleri”, “demiryolları”, “telgraf” → 10, 15, 12. maddeler; ulaşım ve haberleşmenin denetimi',
      '“Altı vilayet”, “karışıklık” → 24. madde; Doğu Anadolu’da işgal hakkı',
    ],
    reasoning: 'Maddeleri üç işlevle eşleştir: savunmasız bırakmak, denetim altına almak, işgale kapı açmak. Soru hangi işlevi soruyorsa o gruptaki maddeyi seç.',
    boundary: 'Dikkat: Sınırların belirlenmesi, tazminat, azınlık hakları gibi konular Mondros’un değil, barış antlaşmalarının (Sevr, Lozan) konusudur.',
  },
  examShape: {
    title: 'Bu kazanım hangi soru biçimlerine uygun?',
    body: 'Bu kazanım bir antlaşma maddesi, bir işgal haritası, bir hatıra ya da farklı tutumları anlatan bir metin verilerek sorulabilir. Aşağıdaki kalıplar kazanımla uyumlu biçimlerdir; sıklık iddiası değildir.',
    patterns: [
      'Maddenin işlevini bulma (işgale kapı açma, savunmasız bırakma)',
      'Tutumları karşılaştırma',
      'Davranışı millî birlik, beraberlik ya da vatanseverlikle ilişkilendirme',
      'İşgalleri gerekçeleriyle eşleştirme',
      'İlk taslak ile son metni karşılaştırma',
    ],
  },
  checkpoints: [
    {
      prompt: 'İstanbul hükümetinin işgallere direnmeme kararını hangi gerekçelerle açıklayabilirsin? Bu karar sence neden halkın tepkisini artırdı?',
      hint: 'Hükümetin elindeki imkânları ve korkularını düşün.',
      answer: 'Ordu dağıtılıyordu, başkent İtilaf donanmasının topları altındaydı; hükümet direnmenin barışta daha ağır şartlar getireceğinden korkuyordu. Ama direnmemek işgalleri durdurmadı, aksine genişletti. Halk bekleyişin sonuç vermediğini gördükçe kendi imkânlarıyla örgütlenmeye yöneldi.',
    },
    {
      prompt: 'Meclis-i Mebusan’ın dağıtılması, millî egemenlik açısından ne anlama geliyordu?',
      answer: 'Milletin seçtiği temsilcilerin karar süreçlerinden çıkarılması demekti. Ülkenin geleceği hakkındaki kararlar yalnız padişaha ve İtilaf’ın denetimindeki hükümete kalıyordu. Bu durum, ileride millet iradesine dayanan yeni bir meclis kurulmasının gerekçelerinden biri olacaktı.',
    },
    {
      prompt: 'Mustafa Kemal İstanbul’a geldikten sonra neden hemen Anadolu’ya geçmedi?',
      answer: 'Önce var olan kurumlar içinde, hükümet ve siyasetçilerle görüşerek bir çözüm aradı. İstanbul’un İtilaf denetiminde olduğunu ve hükümetlerin İtilaf’la iyi geçinmeyi seçtiğini görünce kurtuluşun Anadolu’dan ve milletin iradesinden geleceğine karar verdi.',
    },
  ],

  /* ---------------- 8. SINAV ---------------- */
  examInsight: {
    title: 'LGS bu kazanımda neyi ölçüyor?',
    body:
      'İTA.8.2.3 bir “analiz eder” kazanımıdır: öğrenciden Mondros’un imzalanması ve uygulanması karşısındaki farklı tutumları parçalarına ayırıp karşılaştırmasını ister. Programın açıklaması Mustafa Kemal’in ve halkın tepkisinin millî birlik, beraberlik ve vatanseverlik açısından ele alınmasını vurgular. Bu kazanıma dayanan bir soru bir madde ya da bir tutum anlatıp hangi sonuca ulaşılabileceğini sorabilir.',
    measures: [
      'Maddelerin işlevini açıklama',
      'Hangi maddelerin işgallere dayanak olduğunu gösterme',
      'Üç tutumu karşılaştırma',
      'Tepkileri millî birlik, beraberlik ve vatanseverlikle ilişkilendirme',
      'İşgalleri tarih ve gerekçeleriyle sıralama',
    ],
  },
  simulation: {
    title: 'Mini LGS: 7. madde',
    passage:
      'Mondros Ateşkes Antlaşması’nın 7. maddesi şöyledir (sadeleştirilmiş): “İtilaf Devletleri, güvenliklerini tehdit edecek bir durum ortaya çıkarsa herhangi bir stratejik noktayı işgal hakkına sahip olacaktır.” Antlaşmanın imzalanmasından kısa süre sonra Musul, İskenderun ve güneydoğudaki bazı şehirler bu madde gerekçe gösterilerek işgal edildi.',
    question: 'Bu bilgilere göre aşağıdakilerden hangisine ulaşılabilir?',
    options: [
      { text: 'Maddenin belirsiz ifadesi, İtilaf Devletleri’nin istedikleri yerleri işgal etmesine imkân vermiştir.', explanation: 'Doğru. “Güvenliği tehdit eden durum” ve “stratejik nokta” tanımlanmadığı için karar İtilaf’a kalmış; madde kısa sürede birçok işgalin gerekçesi olmuştur.' },
      { text: 'Madde, işgal kararını Osmanlı hükümetinin onayına bağlamıştır.', explanation: 'Maddede Osmanlı hükümetinin onayından söz edilmez; karar yetkisi İtilaf Devletleri’ndedir.' },
      { text: 'Madde yalnızca Boğazların işgalini öngörmüştür.', explanation: 'Madde “herhangi bir stratejik nokta” der; Boğazlar 1. maddenin konusudur. Metinde Musul ve İskenderun gibi başka yerlerin işgali de anlatılmıştır.' },
      { text: 'Madde, Osmanlı ordusunun tamamen dağıtılmasını istemiştir.', explanation: 'Ordunun terhisi 5. maddenin konusudur ve orada da sınırları korumak ve iç düzeni sağlamak için gereken kuvvetler dışarıda bırakılmıştır.' },
    ],
    answer_index: 0,
    stem_analysis: 'Soru kökü “bu bilgilere göre” diyor. Metin iki bilgi veriyor: maddenin ifadesi ve maddenin uygulaması. Doğru seçenek ikisini birleştiren, yani ifadenin belirsizliği ile işgallerin kolaylığı arasında bağ kuran seçenektir.',
    critical_point: 'Üçüncü ve dördüncü seçenekler başka maddelerin içeriğini 7. maddeye yükleyerek çeldirir. Mondros sorularında maddeleri birbirine karıştırmamak için her maddenin tek bir anahtar sözcüğünü hatırla: 1 Boğazlar, 5 terhis, 6 gemiler, 7 stratejik nokta, 24 altı vilayet.',
    takeaway: 'Madde sorularında önce maddenin anahtar sözcüğünü bul, sonra seçeneklerin o sözcükle uyumlu olup olmadığını sına.',
  },

  /* ---------------- 9. KAPANIŞ ---------------- */
  periodSummary: {
    title: 'Dönem özeti: Ateşkesten millî uyanışa',
    range: 'Ekim 1918–Mayıs 1919',
    body:
      'Osmanlı Devleti 30 Ekim 1918’de Mondros Ateşkes Antlaşması’nı imzaladı. Ordunun terhisi, gemilerin teslimi, ulaşım ve haberleşmenin denetimi ülkeyi savunmasız bıraktı; 7. ve 24. maddeler işgallere kapı açtı. Musul, İskenderun, İstanbul, güney şehirleri, Antalya ve İzmir işgal edildi. İstanbul yönetimi direnilmemesini istedi ve Meclis-i Mebusan’ı dağıttı. Mustafa Kemal işgallere karşı konulmasını savundu; İstanbul’da çözüm aradıktan sonra Anadolu’ya geçmeye karar verdi. Halk ise millî birlik ve beraberlik içinde mitingler düzenledi, cemiyetler kurdu ve silahlı direnişe başladı.',
    turning_points: [
      '30 Ekim 1918 · Mondros Ateşkes Antlaşması',
      'Kasım 1918 · Musul ve İskenderun’un işgali',
      '13 Kasım 1918 · İtilaf donanması İstanbul’da',
      'Aralık 1918 · Güneyde Fransız işgali, Dörtyol direnişi',
      '21 Aralık 1918 · Meclis-i Mebusan dağıtıldı',
      '15 Mayıs 1919 · İzmir’in işgali',
      '16 Mayıs 1919 · Mustafa Kemal İstanbul’dan ayrıldı',
    ],
  },
  summary: [
    '**Mondros (30 Ekim 1918):** Limni’de Agamemnon zırhlısında; Rauf Bey ile Amiral Calthorpe imzaladı.',
    '**Savunmasız bırakan maddeler:** 5 (terhis), 6 (gemilerin teslimi).',
    '**Denetim maddeleri:** 10 (Toros tünelleri), 12 (haberleşme), 15 (demiryolları).',
    '**İşgale kapı açan maddeler:** 1 (Boğazlar), 7 (stratejik nokta), 24 (altı vilayet).',
    '**Osmanlı yönetimi:** direnmeme, İtilaf’la iyi geçinme; Meclis-i Mebusan’ın dağıtılması (21 Aralık 1918).',
    '**Mustafa Kemal:** İskenderun için direnme emri; İstanbul’da çözüm arayışı; Anadolu’ya geçiş kararı. → Vatanseverlik, kararlılık.',
    '**Halk:** mitingler, millî cemiyetler, silahlı direniş (ör. Dörtyol). → Millî birlik ve beraberlik, vatanseverlik.',
  ],
  quizzes: [
    {
      question: 'Mondros Ateşkes Antlaşması’nın aşağıdaki maddelerinden hangisi İtilaf Devletleri’ne istedikleri yeri işgal etme imkânı vermiştir?',
      options: ['5. madde', '6. madde', '7. madde', '16. madde'],
      answer_index: 2,
      explanation: '7. madde, “güvenliği tehdit eden bir durum” olursa herhangi bir stratejik noktanın işgal edilebileceğini söyler; bu belirsiz ifade işgallere kapı açmıştır. 5. madde terhisi, 6. madde gemilerin teslimini, 16. madde Arap topraklarındaki birliklerin teslimini düzenler.',
    },
    {
      question: 'Aşağıdakilerden hangisi Mondros sonrasında İstanbul yönetiminin tutumunu yansıtır?',
      options: ['İskenderun’a asker çıkarılırsa karşı konulmasını emretmek', 'Meclis-i Mebusan’ı dağıtmak', 'Dörtyol’da işgalcilere karşı silahlı direnişe geçmek', 'İzmir’in işgalini mitinglerle protesto etmek'],
      answer_index: 1,
      explanation: 'Meclis-i Mebusan’ı 21 Aralık 1918’de Sultan Vahdettin dağıttı; bu İstanbul yönetiminin tutumudur. Direnme emri Mustafa Kemal’e, silahlı direniş ve mitingler halka aittir.',
    },
    {
      question: 'İzmir’in işgalinin Mondros’un da ötesine geçtiği söylenir. Bunun sebebi aşağıdakilerden hangisidir?',
      options: ['İzmir’in stratejik bir nokta olmaması', 'Yunanistan’ın ateşkesi imzalayan taraflardan olmaması', 'İşgalin Osmanlı hükümetinin isteğiyle yapılması', 'Mondros’un İzmir’i Osmanlı’ya bırakması'],
      answer_index: 1,
      explanation: 'Mondros’u Osmanlı ile İtilaf Devletleri adına İngiltere imzaladı; Yunanistan taraf değildi. İzmir’in işgali Paris Barış Konferansı’nın kararıyla yapıldı ve ateşkes şartlarını da aştı.',
    },
    {
      question: 'Mondros’tan sonra farklı şehirlerde halkın işgallere karşı mitingler düzenlemesi, programın vurguladığı kavramlardan en çok hangisiyle ilişkilidir?',
      options: ['Millî birlik ve beraberlik', 'Laiklik', 'Devletçilik', 'Halkçılık'],
      answer_index: 0,
      explanation: 'Farklı şehirlerdeki insanların ortak bir tehlike karşısında aynı tepkiyi vermesi millî birlik ve beraberliğin örneğidir. Laiklik, devletçilik ve halkçılık Atatürk ilkeleridir ve bu olayla doğrudan ilgili değildir.',
    },
  ],
  next: ['Kuvâ-yı Millîye ve Cemiyetler', 'Millî Mücadele’nin Hazırlık Dönemi: Genelgeler ve Kongreler'],
})

export default lesson
