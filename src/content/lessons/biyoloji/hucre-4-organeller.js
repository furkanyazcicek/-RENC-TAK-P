/**
 * TYT BİYOLOJİ · Hücre — 4. Bölüm
 * SİTOPLAZMA VE ORGANELLER
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Organeller ALFABETİK ya da kitaptaki sırayla değil, İKİ ÇERÇEVEYE
 *   göre veriliyor:
 *     1) zar sayısına göre gruplama (sınavın en verimli ayrımı)
 *     2) birlikte çalıştıkları hat (salgı yolu)
 *   Tek tek "şu organel şunu yapar" listesi, öğrenciyi ezbere itiyor ve
 *   organeller arasındaki ilişkiyi görünmez kılıyor.
 *
 * · Salgı yolu bilinçli olarak bir önceki bölümün ekzositozuna bağlanıyor.
 *   Böylece organeller soyut bir liste olmaktan çıkıp, zaten öğrenilmiş
 *   bir olayın parçası hâline geliyor.
 *
 * · Mitokondri ve kloroplast burada YÜZEYSEL geçiliyor; ikisi de kendi
 *   derslerinde ayrıntılı işleniyor (mitokondri AYT'de yazıldı). Burada
 *   yalnızca "çift zarlı + kendi DNA'sı" ortak noktası kuruluyor.
 *
 * · Lizozom–otoliz ve peroksizom–katalaz ayrıntıları müfredat sınırında
 *   tutuldu; ikisi de TYT'de öncül olarak geçiyor ama derinlemesine
 *   sorulmuyor.
 */

export default {
  slug: 'hucre-organeller',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre',
  },
  order: 4,
  partLabel: '4. Bölüm',
  goldStandard: true,
  title: 'Sitoplazma ve Organeller',
  subtitle:
    'Organelleri tek tek ezberleme. İki çerçeveye yerleştir: kaç zarı var ve hangi hatta çalışıyor. Soruların çoğu bu ikisinden çıkıyor.',

  document: {
    version: 3,
    estimated_minutes: 42,
    prerequisites: [
      {
        topic: 'Hücre — 3. Bölüm',
        why: 'Salgı yolunun son adımı ekzositoz; orada öğrendiğin olay buraya bağlanacak.',
      },
      {
        topic: 'Canlıların Temel Bileşenleri — 3. Bölüm',
        why: 'Ribozomda üretilen şeyin protein olduğunu ve proteinin katlanmasının önemini orada kurmuştun.',
      },
    ],
    outcomes: [
      'Organelleri zar sayısına göre üç gruba ayırabileceksin.',
      'Salgı proteininin ribozomdan hücre dışına kadar izlediği yolu sırayla anlatabileceksin.',
      'Her organelin görevini, hangi hücrede bulunduğunu ve zar sayısını söyleyebileceksin.',
      'Bir hücrenin hangi organelinin bol olduğuna bakarak ne iş yaptığını tahmin edebileceksin.',
      'Lizozom, koful ve peroksizomu birbirinden ayırt edebileceksin.',
      'Bir organelin yapısının görevini nasıl mümkün kıldığını mekanizma üzerinden açıklayabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'or-giris',
        kind: 'opening',
        title: 'Zarın içine giriyoruz',
        lead: 'Üç bölümdür zarla uğraşıyorduk. Şimdi içeriye bakıyoruz — ama liste ezberlemeyeceğiz.',
        blocks: [
          {
            id: 'or-giris-1',
            type: 'prose',
            body: `**Sitoplazma**, hücre zarı ile çekirdek arasındaki bölgedir ve iki kısımdan oluşur:

- **Sitozol:** Yarı akışkan sıvı kısım. Suyun yanı sıra iyonlar, enzimler ve besin molekülleri içerir. Glikoliz gibi bazı tepkimeler doğrudan burada gerçekleşir.
- **Organeller:** Sitozolün içine dağılmış, belirli görevleri olan yapılar.

"Organel" kelimesi ==küçük organ== demektir ve benzetme yerinde: nasıl vücutta sindirim ayrı, solunum ayrı organlarda yürütülüyorsa, hücrede de işler bölünmüştür.

Bu bölünmenin bir avantajı var. Birbirine karışması sakıncalı tepkimeler ayrı zarlı bölmelerde tutulur. Örneğin sindirim enzimleri lizozomun içine kapatılmıştır; serbest dolaşsalardı hücrenin kendisini sindirirlerdi.`,
          },
          {
            id: 'or-giris-why',
            type: 'why',
            question: 'Hücre neden işleri bölmelere ayırma zahmetine giriyor?',
            body: `Bütün tepkimeler tek bir karışık çorbada yürüseydi ne olurdu?

Üç ayrı sorun çıkardı ve bölmelenme üçünü birden çözüyor:

**Birincisi: tepkimeler birbirini bozardı.** Sindirim enzimleri hücrenin kendi proteinlerini de parçalayabilir. Bu yüzden lizozomun içine kapatılmışlardır. Aynı şekilde peroksizomdaki hidrojen peroksit, serbest kalsa hücreye zarar verir.

**İkincisi: farklı tepkimeler farklı koşullar ister.** Bir önceki konudan hatırla: her enzimin kendi optimum pH’ı vardır. Lizozomun içi sitoplazmadan belirgin biçimde daha asidiktir — o enzimler ancak orada çalışır. Tek bir ortam olsaydı bu enzimlerin bir kısmı hiç çalışamazdı.

**Üçüncüsü: derişim kurulamazdı.** Mitokondrinin ATP üretmesi, iç zarın iki yanı arasında proton farkı olmasına bağlıydı. Zarla ayrılmış bir bölme olmasaydı böyle bir fark hiç oluşamazdı.

Yani bölmelenme bir düzen merakı değil; ==kimyasal olarak zorunlu bir çözüm==.`,
          },
          {
            id: 'or-giris-prose2',
            type: 'prose',
            body: `Bir noktayı baştan netleştirelim: **organel** sözcüğünün kullanımı kaynağa göre değişebilir. Modern biyolojide çekirdek çoğu zaman zarlı bir organel olarak adlandırılır; lise sınıflandırmalarında ise büyüklüğü ve yönetici rolü nedeniyle ayrı başlıkta işlenebilir. Hücre zarı, hücre duvarı ve sitoskeleton ise organel değil, hücresel yapılardır.

Bu yüzden sınavda sorunun dilini dikkatle oku. "Çift zarlı yapılar" denirse çekirdek de gruba girer; "çift zarlı organeller" denirse TYT kaynakları çoğunlukla mitokondri ve kloroplastı hedefler. ==Bilimsel bilgiyi soru kökünün sınıflandırma dilinden ayır==.

Şimdi iki çerçeveyi kuralım.`,
          },
          {
            id: 'or-giris-note',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Bu bölümü “on organel, on görev” listesi olarak ezberlemeye çalışma. Aşağıdaki iki çerçeveye yerleştirirsen hem daha az ezber yapar hem daha çok soru çözersin.',
          },
          {
            id: 'or-giris-audio',
            type: 'audio_script',
            body: `Bu bölüme başlarken seni bir tuzaktan korumak istiyorum.

Organeller konusu, öğrencilerin en çok ezbere kaçtığı yer. On tane isim, on tane görev, hepsini üst üste ezberliyorsun ve sınavda karıştırıyorsun.

Biz öyle yapmayacağız. İki çerçeve kuracağız.

Birincisi: kaç zarı var? Sıfır, bir ya da iki. Sınav sorularının büyük kısmı bu ayrımdan çıkıyor.

İkincisi: hangi organeller birlikte çalışıyor? Çünkü organeller tek tek değil, bir hat hâlinde iş görüyor.

Bu iki çerçeveyi kurarsan liste kendiliğinden yerine oturur.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'or-zar',
        kind: 'build',
        title: 'Birinci çerçeve: kaç zarı var?',
        lead: 'Bu ayrım, TYT’de bu konudan gelen soruların büyük kısmını tek başına çözüyor.',
        blocks: [
          {
            id: 'or-zar-figure',
            type: 'figure',
            kind: 'organel-zar-gruplari',
            width: 'full',
            title: 'Organellerin zar sayısına göre grupları',
            purpose:
              'Organelleri isim listesi olmaktan çıkarıp zar sayısı, kurabildikleri iç ortam ve yarı özerklik özellikleri üzerinden karşılaştırmak.',
            complexity: 'high',
            caption:
              'Önce ana levhada üç grubu karşılaştır. Sonra bir maddeye dokun: kısa odak animasyonunun ardından, zar sayısının o grubun çalışma biçimini nasıl değiştirdiğini gösteren ayrı mekanizma sahnesi açılır.',
            focus: [
              {
                title: 'Zarsız organeller',
                body: 'Ribozom ve sentrozom. Zarları olmadığı için sitozolden farklı bir iç ortam kuramazlar. **Ribozom prokaryotlarda da bulunur** ve protein sentezini yürütür. Sentrozom hayvan hücrelerinde belirgindir; gelişmiş bitki hücrelerinde tipik sentriyollü sentrozom bulunmaz.',
              },
              {
                title: 'Tek zarlı organeller',
                body: 'Endoplazmik retikulum, Golgi, lizozom, koful ve peroksizom. Tek zar, her birinde sitozolden farklı kimyasal koşul kurulmasını sağlar. **ER, Golgi, lizozom ve koful endomembran trafiğiyle bağlantılıdır; peroksizomu aynı hattın basit bir devamı sayma.**',
              },
              {
                title: 'Çift zarlı organeller',
                body: 'Mitokondri ve kloroplast. İkisinin de halkasal DNA’sı ve 70S ribozomları vardır; bölünerek çoğalabilirler. Bu ortaklıklar **endosimbiyoz teorisini** destekler. Fakat çoğu proteinleri çekirdek genlerinden geldiği için hücreden bağımsız değillerdir; doğru ifade **yarı özerk**tir.',
              },
            ],
            audio_script: `Bu şemada üç sütun var. Sütun başlıklarını okuma, önce ortadaki küçük şekillere bak.

Sol sütun: dolu bir oval, etrafında çizgi yok. Zarsız.
Orta sütun: tek çizgili oval. Tek zarlı.
Sağ sütun: iç içe iki çizgi. Çift zarlı.

Şimdi isimlere bak.

Zarsızlar ikişer tane: ribozom ve sentrozom. Az sayıda, ezberlemesi kolay.

Tek zarlılar beş ana başlık. ER, Golgi, lizozom ve koful zar trafiğiyle birbirine bağlanır; peroksizom ise aynı zar sayısına sahip olsa da ayrı bir bakım kimyası yürütür.

Çift zarlılar da ikişer tane: mitokondri ve kloroplast.

Şimdi bir saniye dur ve şunu düşün: neden sadece bu ikisi çift zarlı?

Cevap endosimbiyoz. İkisi de bir zamanlar bağımsız bakterilerdi ve yutulduklarında bir zar daha kazandılar. Kendi DNA'larının olmasının sebebi de bu.`,
          },
          {
            id: 'or-zar-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Soru “çift zarlı organel” diyorsa TYT’de hedef mitokondri veya kloroplasttır. “Çift zarlı yapı” diyorsa çekirdek zarfı da iki zardan oluştuğu için seçenekleri yeniden değerlendir. Tek kelime, cevap kümesini değiştirir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'or-hat',
        kind: 'deepen',
        title: 'İkinci çerçeve: birlikte çalışan hat',
        lead: 'Organeller tek tek iş görmez. Bir salgı proteininin yolunu izlersek dördü aynı anda anlaşılıyor.',
        blocks: [
          {
            id: 'or-hat-figure',
            type: 'figure',
            kind: 'salgi-yolu',
            width: 'full',
            title: 'Salgı proteininin izlediği yol',
            purpose:
              'Ribozom, ER, Golgi ve kofulu ayrı ayrı tanımlar yerine tek bir üretim hattı olarak öğretmek ve hattı ekzositoza bağlamak.',
            complexity: 'high',
            caption:
              'Ana levha hattın tamamını gösterir. Her durağa dokunduğunda yalnız büyütme değil; o durakta proteinin başına ne geldiğini gösteren bağımsız bir mekanizma sahnesi açılır.',
            focus: [
              {
                title: 'Ribozom',
                body: 'Amino asit dizisi ribozomda kurulur. Salgı proteininin başlangıç sinyali ribozomu ER zarındaki kanala yönlendirir; büyüyen zincir sentez sürerken lümene aktarılır. Ribozomun kendisi kalıcı olarak “ER ribozomu” değildir; hedeflenen mRNA’yı çevirirken ER’ye bağlanır.',
              },
              {
                title: 'Granüllü endoplazmik retikulum',
                body: 'Üzerinde ribozom bulunduğu için granüllü görünür. Buraya giren protein zinciri **doğru üç boyutlu şekline katlanır** ve hatalı katlananlar ayıklanır. Granülsüz ER’de ise ribozom yoktur; orada lipit sentezi, zehir etkisizleştirme ve kalsiyum depolama yapılır.',
              },
              {
                title: 'Golgi aygıtı',
                body: 'ER’den gelen ürünleri cis yüzden alır; karbonhidrat zincirlerini ekleyebilir veya düzenleyebilir, ürünleri sarnıçlar boyunca işler ve trans yüzde hedeflerine göre ayırır. Ayrıca lizozomal enzimlerin doğru bölmeye yönlendirilmesinde ve bitki hücre duvarı maddelerinin salgılanmasında rol alır.',
              },
              {
                title: 'Salgı kofulu ve ekzositoz',
                body: 'Golgi’den kopan kesecik hücre zarına gider, zarla kaynaşır ve içeriğini dışarı boşaltır. Bu, bir önceki bölümde öğrendiğin **ekzositozdur** — ve ATP harcar.',
              },
            ],
            audio_script: `Bu şemayı soldan sağa, bir üretim hattı gibi oku.

Birinci durak ribozom. Protein burada yapılıyor. Ama henüz kullanıma hazır değil — sadece amino asitler doğru sırayla dizildi.

İkinci durak granüllü endoplazmik retikulum. Protein burada katlanıyor. Geçen konudan hatırla: dizilim şekli belirler, şekil işlevi belirler. Katlanma burada oluyor.

Üçüncü durak Golgi. Protein burada işleniyor, üzerine şeker ekleniyor, paketleniyor.

Dördüncü durak salgı kofulu. Paket zara doğru yola çıkıyor.

Ve son adım — bir saniye dur ve düşün: koful zara vardığında ne oluyor?

Ekzositoz. Geçen bölümde öğrendin. Koful zarla kaynaşıyor, içerik dışarı çıkıyor, zar yüzeyi artıyor.

Gördün mü? Yeni bir şey öğrenmedin, sadece bildiğin iki şeyi birleştirdin.`,
          },
          {
            id: 'or-hat-connection',
            type: 'connection',
            title: 'Hattın yoğunluğu hücrenin işini söyler',
            body:
              'Bir hücrede granüllü ER ve Golgi çok gelişmişse, o hücre bol protein salgılıyor demektir — pankreas ve tükürük bezi hücreleri buna örnektir. Mitokondrisi bol bir hücre çok enerji harcıyordur (kas, karaciğer). Lizozomu bol bir hücre çok sindirim yapıyordur (akyuvar). ==Organel yoğunluğuna bakarak hücrenin görevini tahmin edebilirsin==; TYT’de bu tarz sorular sık geliyor.',
            links: ['AYT · Sindirim sistemi', 'AYT · Dolaşım ve bağışıklık', 'AYT · Canlılarda enerji dönüşümleri'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'or-tek-tek',
        kind: 'build',
        title: 'Organeller tek tek',
        lead: 'İki çerçeveyi kurduk. Şimdi ayrıntıları o çerçevelerin içine yerleştiriyoruz.',
        blocks: [
          {
            id: 'or-tt-table',
            type: 'table',
            title: 'Organel künyesi',
            columns: ['Organel', 'Zar', 'Görevi', 'Nerede bulunur'],
            rows: [
              ['Ribozom', 'Yok', 'Protein sentezi', 'TYT genellemesinde **bütün hücre tiplerinde**'],
              ['Sentrozom', 'Yok', 'Bölünmede iğ ipliklerini oluşturur', 'Hayvan hücresi ve bazı ilkel bitkiler'],
              ['Granüllü ER', '1', 'Protein katlanması ve taşınması', 'Ökaryot hücreler'],
              ['Granülsüz ER', '1', 'Lipit sentezi, zehir etkisizleştirme, Ca depolama', 'Ökaryot hücreler'],
              ['Golgi aygıtı', '1', 'İşleme, hedefe göre ayırma ve salgı', 'Ökaryot hücreler'],
              ['Lizozom', '1', 'Hücre içi sindirim (hidroliz enzimleri)', 'Özellikle hayvan hücresi'],
              ['Koful', '1', 'Depolama, boşaltım, su dengesi', 'Bitkide **büyük ve merkezî**, hayvanda küçük'],
              ['Peroksizom', '1', 'Zararlı H₂O₂’yi katalazla parçalar', 'Ökaryot hücreler'],
              ['Mitokondri', '2', 'Oksijenli solunum — ATP üretimi', 'Neredeyse tüm ökaryotlarda'],
              ['Kloroplast', '2', 'Fotosentez', 'Bitki ve alg hücreleri'],
            ],
            caption:
              'İkinci sütun birçok soruyu çözer; son sütun ise hücre tipini tahmin ettirir. TYT genellemesinde ribozom bütün hücre tiplerinde ortak kabul edilir; zarlı organeller yalnız ökaryotlarda bulunur.',
          },
          {
            id: 'or-tt-maintenance-figure',
            type: 'figure',
            kind: 'hucre-bakim-sistemi',
            width: 'full',
            title: 'Üç ayrı sorun, üç ayrı bölme',
            purpose:
              'Lizozom, koful ve peroksizomu yalnız içerik listesiyle değil, hücrenin hangi sorununu nasıl çözdükleri üzerinden ayırt etmek.',
            complexity: 'high',
            caption:
              'Üçü de tek zarlıdır; fakat aynı işi yapmaz. Maddeye dokunarak geri dönüşüm, turgor ve katalaz mekanizmalarını ayrı sahnelerde incele.',
            focus: [
              {
                title: 'Lizozom: parçala ve geri kazan',
                body: 'Asidik lümeni ve hidroliz enzimleriyle makromolekülleri monomerlerine ayırır. Besin kofuluyla birleşebildiği gibi, hasarlı organellerin **otofaji** yoluyla geri dönüştürülmesine de katılır. Kontrolsüz zar hasarı yaygın sindirime ve hücre ölümüne katkı sağlayabilir; otolizi tek bir “patlayan kesecik” ezberine indirgeme.',
              },
              {
                title: 'Koful: depola ve basınç kur',
                body: 'Bitkinin merkezî kofulu su, iyon, pigment, atık ve bazı savunma maddelerini depolar. Su aldığında tonoplast genişler, sitoplazmayı hücre duvarına iter ve **turgor basıncı** oluşturur. Böylece koful hem kimyasal depo hem de hidrostatik destek sistemidir.',
              },
              {
                title: 'Peroksizom: tehlikeli ara ürünü içeride tut',
                body: 'Bazı yağ asitlerini oksitlerken H₂O₂ oluşabilir. Aynı organeldeki **katalaz**, H₂O₂’yi su ve oksijene çevirir. Sınav ayrımı nettir: lizozom hidrolizle sindirir; peroksizom yükseltgenme tepkimelerini ve peroksit kontrolünü yürütür.',
              },
            ],
            audio_script: `Bu üç organelin ortak özelliği tek zarlı olması. Ama soruda hepsini aynı torbaya atarsan kaybedersin.

Lizozomun ana fiili parçalamak. Asidik ortam ve hidroliz enzimleri var. Hasarlı parçayı monomerlerine ayırıp geri kazandırıyor.

Kofulun ana fiili depolamak; bitkide buna basınç kurmak da ekleniyor. Su dolu merkezî koful hücreyi içeriden duvara doğru itiyor.

Peroksizomun ana fiili etkisizleştirmek. H iki O iki oluşuyor, katalaz bunu su ve oksijene çeviriyor.

Üç kısa eşleşme: lizozom–hidroliz, koful–turgor, peroksizom–katalaz. Şimdi maddelere dokun ve bu fiillerin görselde nasıl gerçekleştiğine bak.`,
          },
          {
            id: 'or-tt-compare',
            type: 'compare',
            title: 'Karıştırılan üçlü: lizozom, koful, peroksizom',
            columns: ['Lizozom', 'Koful', 'Peroksizom'],
            rows: [
              { label: 'İçeriği', values: ['Sindirim (hidroliz) enzimleri', 'Su, besin, atık, pigment', 'Katalaz ve oksidaz enzimleri'] },
              { label: 'Ana görevi', values: ['Madde sindirimi', 'Depolama ve boşaltım', 'Zararlı H₂O₂’yi parçalamak'] },
              { label: 'Sistem bağlantısı', values: ['Endomembran trafiği', 'Endomembran trafiği', 'Büyüme ve bölünmeyle çoğalır; ayrı protein trafiği vardır'] },
              { label: 'Öne çıktığı hücre', values: ['Akyuvar — bakteri sindirimi', 'Bitki hücresi — merkezî koful', 'Karaciğer ve böbrek hücreleri'] },
            ],
            insight:
              'Üçü de tek zarlı ve içeride ayrı kimya kurar. Ayrım ana tepkimededir: lizozom **hidrolizle parçalar**, koful **depolar ve su basıncı kurar**, peroksizom **yükseltgenme tepkimeleri ile H₂O₂ kontrolünü** yürütür.',
          },
          {
            id: 'or-tt-why',
            type: 'why',
            question: 'Bitki hücresindeki koful neden bu kadar büyük?',
            body: `Bir bitki hücresini mikroskopta gördüğünde hacminin çoğunu tek bir dev kofulun kapladığını fark edersin. Bu bir israf değil, ==iki ayrı işi birden çözen bir tasarım==.

**Birincisi: turgor.** Bir önceki bölümde bitkinin dik duruşunu turgor basıncından aldığını görmüştün. O basıncı yaratan şey, kofulun su ile dolup sitoplazmayı hücre duvarına doğru itmesidir. Koful ne kadar büyükse basınç o kadar etkili olur.

**İkincisi: ucuz büyüme.** Bir hücrenin büyümesi normalde daha fazla sitoplazma, daha fazla protein, daha fazla organel üretmeyi gerektirir — yani pahalıdır. Bitki hücresi bunun yerine ==kofulunu suyla şişirerek== büyür. Su bedavadır.

Bu yüzden bitki hücreleri hayvan hücrelerinden genellikle daha büyüktür ama sitoplazma miktarları orantılı olarak artmaz.`,
          },
          {
            id: 'or-tt-trap',
            type: 'trap',
            title: 'Ribozomu “ökaryota özgü” sanmak',
            wrong: '“Prokaryotlarda organel yoktur, o hâlde ribozom da yoktur” diye düşünmek.',
            right:
              'Prokaryotlarda **zarlı organel** yoktur; ama zarsız olan **ribozom bulunur**. Protein sentezi olmadan hiçbir hücre yaşayamaz. Prokaryotta ribozom 70S, ökaryotun sitoplazmasında 80S’tir.',
            body:
              'Mitokondri ve kloroplastta da 70S ribozom bulunur — endosimbiyoz teorisinin kanıtlarından biri de budur. “Ribozom bulunmayan hücre” diye bir şey yoktur.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'or-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Bu bölümdeki sorular, iki çerçeveyi gerçekten kurup kurmadığını ölçüyor.',
        blocks: [
          {
            id: 'or-uyg-worked',
            type: 'worked_example',
            title: 'Organel yoğunluğundan hücrenin işini bulma',
            prompt:
              'Bir araştırmacı üç farklı hücreyi elektron mikroskobunda inceliyor:\\n\\n**Hücre A:** Granüllü ER ve Golgi çok gelişmiş.\\n**Hücre B:** Mitokondri sayısı olağanüstü fazla.\\n**Hücre C:** Lizozom sayısı çok yüksek.\\n\\nBu hücreler sırasıyla hangi görevleri yapıyor olabilir?',
            steps: [
              {
                title: 'A hücresi — hangi hat gelişmiş?',
                body: 'Granüllü ER ve Golgi, salgı yolunun iki durağı. İkisi birden gelişmişse hücre bol miktarda **protein salgılıyor** demektir. Pankreasın enzim salgılayan hücreleri veya hormon salgılayan bez hücreleri bu profile uyar.',
              },
              {
                title: 'B hücresi — hangi ihtiyaç yüksek?',
                body: 'Mitokondri ATP üretir. Sayısının fazla olması, hücrenin **çok enerji harcadığını** gösterir. Kalp kası, iskelet kası ve karaciğer hücreleri bu gruptadır.',
              },
              {
                title: 'C hücresi — lizozom ne yapar?',
                body: 'Lizozom hücre içi sindirim yapar. Bol olması, hücrenin sürekli **madde sindirdiğini** gösterir. Akyuvarlar bakteri yuttukları için bu profile uyar.',
              },
              {
                title: 'Genel kuralı çıkar',
                body: 'Üç durumda da aynı mantık işledi: bir organelin bolluğu, o organelin yaptığı işin hücrede yoğun olduğunu gösterir.',
              },
            ],
            answer:
              'A salgı yapan bir bez hücresi, B yüksek enerji harcayan bir kas veya karaciğer hücresi, C ise fagositoz yapan bir akyuvar olabilir.',
            takeaway:
              'Bu soru tipinde organelin görevini bilmek yetmez; ==görevi hücrenin işine çevirmek== gerekir. “Bu organel çok ise hücre ne yapıyordur?” sorusunu her organel için kendine bir kez sor.',
          },
          {
            id: 'or-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question: 'Aşağıdaki organellerden hangisi **hem bitki hem hayvan** hücresinde bulunur ve **zarsızdır**?',
            options: ['Sentrozom', 'Ribozom', 'Kloroplast', 'Lizozom'],
            answer_index: 1,
            explanation: `Doğru cevap **ribozom**. Zarsızdır; hem bitki hem hayvan hücresinde ve prokaryotlarda bulunur.

- **Sentrozom:** Zarsızdır ama **bitki hücresinde bulunmaz** (gelişmiş bitkilerde).
- **Kloroplast:** Yalnızca bitki ve alglerde bulunur, üstelik **çift zarlıdır**.
- **Lizozom:** Her iki hücrede bulunabilir ama **tek zarlıdır**; ayrıca hayvan hücresinde çok daha belirgindir.

Soru iki ölçütü aynı anda istiyor. Bu tip sorularda ölçütleri tek tek uygulayıp eleme yap.`,
          },
          {
            id: 'or-uyg-quiz2',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Salgı proteini üreten bir hücrede radyoaktif işaretli amino asit veriliyor. İşaretli protein sırasıyla hangi yapılarda görülür?',
            options: [
              'Golgi → Granüllü ER → Ribozom → Salgı kofulu',
              'Ribozom → Granüllü ER → Golgi → Salgı kofulu',
              'Granüllü ER → Ribozom → Salgı kofulu → Golgi',
              'Ribozom → Golgi → Granüllü ER → Salgı kofulu',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Salgı yolu şu sırayı izler:

**Ribozom** (protein sentezlenir) → **Granüllü ER** (katlanır) → **Golgi** (işlenir, paketlenir) → **Salgı kofulu** (zara taşınır) → **ekzositoz**.

Amino asit ilk olarak protein sentezinin yapıldığı yerde, yani ribozomda görülür. Diğer sıralamalar bu başlangıç noktasını ya da hattın mantığını bozuyor.

İşaretleme sorularında hep aynı soruyu sor: ==bu madde ilk olarak nerede kullanılıyor?==`,
          },
          {
            id: 'or-uyg-quiz3',
            type: 'quiz',
            purpose: 'error',
            question: 'Prokaryot bir hücre için aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Hiçbir organeli yoktur',
              'Ribozomu vardır ama zarlı organeli yoktur',
              'Mitokondrisi vardır ama çekirdeği yoktur',
              'Protein sentezi yapamaz',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Prokaryotlarda **zarlı organel** bulunmaz; ancak zarsız olan **ribozom vardır** (70S).

- **A yanlış:** Ribozom bir organeldir ve prokaryotta bulunur. Doğru ifade “zarlı organeli yoktur” olmalıdır.
- **C yanlış:** Mitokondri çift zarlıdır; prokaryotta bulunmaz. Oksijenli solunum yapan prokaryotlarda elektron taşıma zinciri **hücre zarında** bulunur. “Mezozom” eski çizimlerde geçen, güncel biyolojide örnek hazırlama artefaktı kabul edilen bir yapıdır.
- **D yanlış:** Ribozomu olduğuna göre protein sentezi yapar. Zaten yapmasaydı yaşayamazdı.

A ile B arasındaki fark tek kelime: ==zarlı==. Sınav sorularının çoğu bu tek kelimenin üzerine kuruludur.`,
          },
          {
            id: 'or-uyg-quiz4',
            type: 'quiz',
            purpose: 'mechanism',
            question: 'Bir hücrede katalaz enzimi çalışamaz hâle gelirse aşağıdaki maddelerden hangisinin birikmesi en doğrudan beklenir?',
            options: ['Amino asit', 'Hidrojen peroksit', 'Laktik asit', 'Glikojen'],
            answer_index: 1,
            explanation: `Doğru cevap **hidrojen peroksit (H₂O₂)**. Peroksizomda oluşabilen bu reaktif molekülü katalaz, su ve oksijene dönüştürür.

Soru organel adını değil mekanizmanın sonucunu soruyor: **katalaz azalırsa H₂O₂ tüketimi azalır ve birikme riski artar**. Lizozomun hidroliz enzimleriyle, kofulun turgor göreviyle karıştırma.`,
          },
          {
            id: 'or-uyg-quiz5',
            type: 'quiz',
            purpose: 'sequence',
            question: 'Salgılanacak bir proteinin yolunda aşağıdakilerden hangisi Golgi aygıtından **önce** gerçekleşir?',
            options: [
              'Salgı vezikülünün hücre zarıyla kaynaşması',
              'Ürünün hedefe göre son kez ayrılması',
              'Polipeptidin granüllü ER lümenine aktarılması',
              'Ekzositozla hücre dışına bırakılması',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Hedef sinyali taşıyan polipeptit, ribozomda sentezlenirken granüllü ER lümenine aktarılır; doğru katlanan ürün taşıma vezikülüyle Golgi’ye gelir.

Diğer üç seçenek Golgi’nin trans yüzündeki ayırma basamağında veya ondan sonra gerçekleşir. Zaman çizgisi: **ribozom/GER → taşıma vezikülü → Golgi → salgı vezikülü → ekzositoz**.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'or-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'or-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Sitoplazma = sitozol + organeller. Bölmelenme, birbirine karışması sakıncalı tepkimeleri ayırır.',
              '**Zarsız:** ribozom, sentrozom. **Tek zarlı:** ER, Golgi, lizozom, koful, peroksizom. **Çift zarlı:** mitokondri, kloroplast.',
              'Mitokondri ve kloroplast çift zarlı, halkasal DNA ve 70S ribozom taşıyan **yarı özerk** organellerdir; bu ortaklıklar endosimbiyoz teorisini destekler.',
              'Salgı yolu: **ribozom → granüllü ER → Golgi → salgı kofulu → ekzositoz**.',
              'Granüllü ER protein katlar; granülsüz ER lipit sentezler ve zehir etkisizleştirir.',
              'Golgi cis yüzden alır, sarnıçlarda işler ve trans yüzde ürünleri hedeflerine göre ayırır.',
              'Lizozom hidrolizle parçalar ve geri dönüştürür; koful depolar ve turgor kurar; peroksizom katalazla H₂O₂ kontrolü yapar.',
              'Bitkideki büyük merkezî koful hem **turgor basıncını** sağlar hem hücrenin ucuza büyümesini mümkün kılar.',
              'TYT genellemesinde ribozom bütün hücre tiplerinde ortaktır; prokaryotlarda zarlı organel bulunmaz.',
            ],
          },
          {
            id: 'or-kap-memory',
            type: 'memory',
            body:
              'Bir organel sorusuyla karşılaştığında iki şey sor: *Kaç zarı var?* ve *Hangi hatta çalışıyor?* Bu iki soru, on organelin künyesini ezberlemekten daha çok iş görür.',
          },
          {
            id: 'or-kap-next',
            type: 'next_step',
            body: `Hücre konusunun son bölümünde **çekirdeği** ve hücre tiplerini göreceğiz.

Orada bu bölümde açık kalan bir soruyu kapatacağız: ribozomda üretilecek proteinin dizilimini kim belirliyor? Cevap çekirdekte — ve oradan prokaryot–ökaryot ile bitki–hayvan karşılaştırmalarına geçeceğiz.`,
            topics: ['Çekirdek ve hücre tipleri', 'Canlıların Sınıflandırılması'],
          },
          {
            id: 'or-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. İki kontrol yap.

Bir: mitokondri ve kloroplastın ortak üç özelliği ne? Çift zar, kendi DNA'sı, kendi ribozomu diyebiliyorsan tamam.

İki: salgı yolunu sırayla söyleyebiliyor musun? Ribozom, granüllü ER, Golgi, koful, ekzositoz.

Bu ikisine cevap verebiliyorsan son bölüme geçebilirsin. Orada çekirdeği açacağız.`,
          },
        ],
      },
    ],
  },
}
