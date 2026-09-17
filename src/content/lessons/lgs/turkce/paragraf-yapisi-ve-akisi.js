import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Paragrafta Anlam · 2. ders
 * Kazanım : T.8.3.10 · T.8.3.12 · T.8.3.28 · T.8.3.4
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Bu ders paragrafın "ne dediğini" değil "nasıl kurulduğunu" işler:
 * cümleler birbirine neyle bağlanır, akış nerede kopar, yazar neyi
 * vurgular ve okur bunu nasıl izler.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-paragraf-yapisi-ve-akisi',
  topic: 'Paragrafta Anlam',
  order: 2,
  title: 'Paragrafın Yapısı ve Akışı',
  subtitle:
    'Cümleler paragrafa rastgele dizilmez. Her cümle bir öncekine tutunur; akışı bozan cümle, tutunacak yeri olmayan cümledir.',
  minutes: 44,
  kazanimlar: [
    { kod: 'T.8.3.10', metin: 'Geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısını değerlendirir.' },
    { kod: 'T.8.3.12', metin: 'Görsel ve başlıktan hareketle okuyacağı metnin konusunu tahmin eder.' },
    { kod: 'T.8.3.28', metin: 'Metinde önemli noktaların vurgulanış biçimlerini kavrar.' },
    { kod: 'T.8.3.4', metin: 'Okuma stratejilerini kullanır.' },
  ],
  prerequisites: [
    { topic: 'Konu, ana fikir, yardımcı fikir', why: 'Akışı bozan cümleyi bulmak için paragrafın neyi anlattığını önce bilmen gerekir.' },
    { topic: 'Cümlede anlam ilişkileri', why: 'Geçiş ifadelerinin yönünü okumak, ilişki bilgisine dayanır.' },
  ],
  outcomes: [
    'Bir paragrafı giriş, gelişme ve sonuç bölümlerine ayırabileceksin.',
    'Geçiş ve bağlantı ifadelerinin yönünü — ekleme, karşıtlık, açıklama, sonuç, sıralama — belirleyebileceksin.',
    'Anlam akışını bozan cümleyi çıkarma testiyle bulabileceksin.',
    'Bir paragrafın nerede ikiye bölünmesi gerektiğine karar verebileceksin.',
    'Metindeki biçimsel vurguların (koyu, italik, altı çizili) neden kullanıldığını açıklayabileceksin.',
  ],

  opening: {
    title: 'Cümleler birbirine neyle tutunur?',
    lead: 'Bir paragrafta cümleler yan yana durmaz; birbirine bağlanır. O bağı görebilen öğrenci, akış sorularını tahmine bırakmaz.',
    body: `Şu iki cümleyi arka arkaya oku: “Kütüphanede kitap sayısı arttı. Öğrenciler artık daha uzun kalıyor.” Aralarında yazılı bir bağlaç yok; ama zihninde bir bağ kuruldu, değil mi? İkincinin birincinin sonucu olduğunu anladın.

Şimdi araya bir sözcük koyalım: “Kütüphanede kitap sayısı arttı. **Oysaki** öğrenciler artık daha uzun kalıyor.” Cümle bozuldu. Çünkü “oysaki” bir **karşıtlık** işaretidir ve burada karşıtlık yok. Bir tek sözcük, iki cümle arasındaki ilişkiyi yanlış kurduğu için paragraf tökezledi.

İşte bu dersin konusu budur: paragrafta cümleler birbirine neyle tutunur ve bu tutunma nerede kopar. MEB 8. sınıf programındaki **T.8.3.10** kazanımı geçiş ve bağlantı ifadelerinin metnin anlamına olan katkısının değerlendirilmesini ister ve açıklamasında şu ifadeleri sayar: *oysaki, başka bir deyişle, özellikle, kısaca, böylece, ilk olarak, son olarak.*

Aynı derste iki kazanım daha işleyeceğiz. **T.8.3.28**, metinde önemli noktaların vurgulanış biçimlerini — altını çizme, koyu veya italik yazma, renklendirme, farklı punto kullanma — kavramayı ister. **T.8.3.12** ise görsel ve başlıktan hareketle metnin konusunu tahmin etmeyi. Üçü de aynı şeyin parçaları: bir metin, okuru yönlendirmek için **yazılı olmayan işaretler** kullanır.

Son olarak **T.8.3.4** okuma stratejilerini ekliyoruz: göz atarak, özetleyerek, not alarak, tartışarak ve eleştirerek okuma. Bunlar süs bilgisi değildir; sınavda hangi paragrafı nasıl okuyacağını belirler.`,
  },

  concepts: [
    {
      term: 'Giriş cümlesi',
      body: 'Paragrafı başlatan ve konuyu tanıtan cümledir. Kendinden önceki bir cümleye **bağlanmaz**: içinde “bu, o, bunlar, ayrıca, oysa” gibi önceye gönderen bir öge bulunmaz. Bu özellik, giriş cümlesini tanımanın en güvenilir yoludur.',
    },
    {
      term: 'Gelişme cümleleri',
      body: 'Konuyu açan, örnekleyen, kanıtlayan ve derinleştiren cümlelerdir. Her biri bir öncekine bir bağla tutunur: zamir, bağlaç, tekrar eden kavram ya da geçiş ifadesi.',
    },
    {
      term: 'Sonuç cümlesi',
      body: 'Paragrafı bir hükme bağlayan cümledir. Sıklıkla “bu yüzden, demek ki, kısacası, sonuç olarak” gibi ifadelerle gelir ve çoğu zaman ana fikri taşır.',
    },
    {
      term: 'Geçiş ve bağlantı ifadesi',
      body: 'İki cümle ya da iki düşünce arasındaki ilişkiyi gösteren sözcük veya öbektir: *oysaki, başka bir deyişle, özellikle, kısaca, böylece, ilk olarak, son olarak, ayrıca, bununla birlikte.* Her biri bir **yön** taşır.',
    },
    {
      term: 'Anlam akışı',
      body: 'Cümlelerin birbirini izlerken oluşturduğu kesintisiz düşünce zinciridir. Akış, konu birliği ve bağlantı ögeleriyle sağlanır; ikisinden biri koparsa paragraf “tökezler”.',
    },
    {
      term: 'Biçimsel vurgu',
      body: 'Yazarın bir noktayı öne çıkarmak için kullandığı görsel işaretlerdir: koyu yazı, italik, altı çizili, renk, farklı punto. Süs değildir; okurun dikkatini yönlendiren bir araçtır.',
    },
  ],

  why: {
    question: 'Neden “anlamca ilgisiz cümleyi bul” demek yanlış bir tarif?',
    body: `Çünkü akışı bozan cümle çoğu zaman **konuyla ilgilidir**. Soru hazırlayanlar, tamamen alakasız bir cümle koysalardı soru kolay olurdu; bunun yerine konuyla ilgili ama paragrafın **o anki akışına** oturmayan bir cümle koyarlar.

Bir örnek: paragraf, el yazısının öğrenmeyi nasıl kalıcı kıldığını anlatıyor. Araya “Türkiye’de her yıl milyonlarca defter üretiliyor.” cümlesi konuyor. Bu cümle konuyla ilgisiz mi? Değil — defter, yazı, üretim… hepsi aynı alanda. Ama paragrafın kurduğu düşünce zincirine tutunmuyor; ne bir öncekinin sonucu, ne açıklaması, ne örneği.

Bu yüzden tarifi değiştirmelisin: aranan şey **ilgisiz cümle** değil, **tutunacak yeri olmayan cümledir.** Bunu bulmanın yolu da tahmin değil testtir: cümleyi çıkar, kalan cümleleri arka arkaya oku. Akış düzeliyorsa bulduğun cümle doğrudur; düzelmiyorsa yanlış cümleyi çıkarmışsındır.

Aynı yanılgı geçiş ifadelerinde de görülür. Öğrencilerin çoğu “ama, fakat, ancak → karşıtlık” ezberiyle gider. Ama Türkçede “ancak” bazen karşıtlık, bazen **sınırlama**, bazen de “yalnızca” anlamında kullanılır: “Bu kapı ancak içeriden açılır.” Burada karşıtlık yok.

Sonuç olarak bu konuda ilerlemek için yapman gereken tek şey var: bağlacı değil, **iki cümle arasındaki gerçek ilişkiyi** okumak. Bağlaç bir işaret levhasıdır; yolu levha değil, arazi belirler.`,
  },

  decision: {
    title: 'Paragrafın akışını çözme yolu',
    lead: 'Akış soruları tahminle değil, tek tek bağ kurularak çözülür.',
    intro:
      'Akış, bölme ya da tamamlama sorusuyla karşılaştığında şu beş durağı uygula. Dördüncü durak bu dersin asıl testidir.',
    steps: [
      {
        title: '1. Giriş cümlesini bul',
        body: 'Kendinden öncesine gönderme yapmayan cümleyi ara: içinde “bu, o, bunlar, ayrıca, oysa, ancak” gibi bağlayıcı öge bulunmayan cümle giriştir. Sıralama sorularında ilk adım budur.',
      },
      {
        title: '2. Her cümlenin bağını göster',
        body: 'İkinci cümleden başlayarak her cümle için sor: bu cümle bir öncekine neyle tutunuyor? Zamirle mi, bağlaçla mı, tekrar eden bir kavramla mı? Bağı gösteremediğin cümle adaydır.',
      },
      {
        title: '3. Geçiş ifadesinin yönünü oku',
        body: 'Cümlenin başındaki ifade hangi yönü gösteriyor: ekleme mi, karşıtlık mı, açıklama mı, sonuç mu, sıralama mı? Yön ile cümlenin gerçek ilişkisi çelişiyorsa sorun oradadır.',
      },
      {
        title: '4. Çıkarma testini uygula',
        body: 'Aday cümleyi paragraftan çıkar ve kalanları arka arkaya oku. Akış düzeliyorsa doğru cümleyi bulmuşsundur. Düzelmiyor, hatta kopuyorsa o cümle paragrafa gerekliydi; başka adaya geç.',
      },
      {
        title: '5. Bölme veya tamamlamada iki yana birden bak',
        body: 'Paragrafı ikiye bölme sorularında, bölme noktasından sonraki cümle yeni bir konuya **giriş** yapabilmelidir. Tamamlama sorularında ise boşluğun hem öncesini hem sonrasını oku; yalnız öncesine bakmak en sık yapılan hatadır.',
      },
    ],
    takeaway: 'Akışı bozan cümle, ilgisiz cümle değil; tutunacak yeri olmayan cümledir.',
  },

  decisionTree: {
    title: 'Akışı bozan cümleyi bulma kontrolü',
    intro:
      'Aday cümle için şu üç kontrolü sırayla uygula. Üçüncü kontrol kararı kesinleştirir.',
    checks: [
      {
        question: 'Cümle paragrafın konusuyla hiç ilgili mi değil?',
        yes: 'Aday güçlüdür, ama yine de üçüncü kontrolü uygula; bu tür açık örnekler sınavda azdır.',
        no: 'Konuyla ilgili olması onu aklamaz; ikinci kontrole geç.',
      },
      {
        question: 'Cümle bir önceki cümleye bir bağla tutunuyor mu (zamir, bağlaç, tekrar eden kavram)?',
        yes: 'Tutunuyorsa akışın parçası olabilir; başka adaya bak.',
        no: 'Aday güçlendi; üçüncü kontrole geç.',
      },
      {
        question: 'Cümleyi çıkardığımda kalanlar birbirine sorunsuz bağlanıyor mu?',
        yes: 'Akışı bozan cümle budur.',
        no: 'Cümle paragrafa gerekliymiş; çıkarma testi seni yanlış adaydan kurtardı.',
      },
    ],
    takeaway:
      'Çıkarma testi olmadan verilen karar tahmindir. Testi uygulamak on saniye alır ve soruyu kesinleştirir.',
  },

  comparison: {
    title: 'Giriş, gelişme ve sonuç cümlelerini tanı',
    columns: ['Giriş cümlesi', 'Gelişme cümlesi', 'Sonuç cümlesi'],
    rows: [
      { label: 'Öncesine bağlanır mı?', values: ['Hayır', 'Evet', 'Evet'] },
      { label: 'Tanıma işareti', values: ['Zamir ve bağlaç yok', '“bu, o, ayrıca, oysa, çünkü”', '“bu yüzden, kısacası, demek ki”'] },
      { label: 'İşlevi', values: ['Konuyu tanıtır', 'Açar, örnekler, kanıtlar', 'Hükme bağlar'] },
      { label: 'Ana fikirle ilişkisi', values: ['Genellikle taşımaz', 'Destekler', 'Çoğu zaman taşır'] },
      { label: 'Sıralama sorusundaki yeri', values: ['İlk sırada', 'Ortada', 'Son sırada'] },
    ],
    insight:
      'Sıralama sorularında önce giriş cümlesini bul, sonra zincirlemeyi zamir ve bağlaçlarla kur. Sondan başlamak işi zorlaştırır.',
  },

  traps: [
    {
      title: '“Ama” gördüğü an karşıtlık demek',
      wrong: 'Cümlede “ancak” geçiyor; öyleyse iki cümle arasında karşıtlık var.',
      right: '“Ancak” bazen sınırlama bildirir: “Bu kapı ancak içeriden açılır.” Burada karşıtlık değil, tek bir koşul belirtiliyor.',
      body: 'Geçiş ifadeleri çok görevlidir. Yönü belirlemek için iki cümlenin gerçek ilişkisini oku; bağlacı yalnız bir ipucu say.',
    },
    {
      title: 'Akışı bozan cümleyi “ilgisiz” diye aramak',
      wrong: 'Konuyla ilgili görünen cümle akışı bozamaz.',
      right: 'Akışı bozan cümle çoğu zaman konuyla ilgilidir; ama bir öncekine tutunmaz ve çıkarıldığında akış düzelir.',
      body: 'Soru hazırlayanlar tamamen alakasız cümle koymaz; koysalardı soru ölçme yapmazdı. Ölçülen şey, ilgililik değil bağdır.',
    },
    {
      title: 'Tamamlama sorusunda yalnız öncesine bakmak',
      wrong: 'Boşluktan önceki cümleye uyan seçeneği işaretlerim.',
      right: 'Boşluğun hem öncesine hem sonrasına bakarım; seçilen cümle iki yanı da birbirine bağlamalıdır.',
      body: 'Çeldiriciler genellikle yalnız önceki cümleye uyacak biçimde yazılır. Sonraki cümleyle bağ kurmayan seçenek yanlıştır.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-paragraf-gecis-ifadeleri',
      title: 'Geçiş ifadelerinin yönü',
      lead: 'Her geçiş ifadesi bir yön gösterir. Yönü tanıdığında, bir sonraki cümlenin ne söyleyeceğini okumadan tahmin edebilirsin.',
      blocks: [
        {
          id: 'lgs-paragraf-gecis-anlatim',
          type: 'prose',
          body: `Programın 8. sınıf için özellikle andığı ifadeler şunlar: **oysaki, başka bir deyişle, özellikle, kısaca, böylece, ilk olarak, son olarak.** Bunları tek tek ele alalım, çünkü her biri farklı bir iş yapar.

**Oysaki** bir karşıtlık kurar; kendinden önce söylenenle çelişen bir durum getirir. “Yeni salon çok büyük yapıldı; oysaki öğrenci sayısı her yıl azalıyor.”

**Başka bir deyişle** bir açıklama getirir: aynı düşünceyi farklı sözcüklerle yineler. Bu ifadeden sonra yeni bir bilgi değil, **aynı bilginin yeni bir ifadesi** gelir. Sorularda bu ayrım işine yarar.

**Özellikle** bir daraltma yapar: genel olarak söylenenin içinden bir bölümü öne çıkarır. “Kitap okumak dikkati artırır; özellikle uzun metinler bu etkiyi güçlendirir.”

**Kısaca** bir toparlama yapar: söylenenleri özetler. Genellikle paragrafın sonlarına doğru gelir ve ana fikri taşıyan cümlenin hemen başında bulunur.

**Böylece** bir sonuç bildirir: önceki cümlede anlatılan durumun yarattığı yeni durumu verir. “Raflar sınıflara dağıtıldı; böylece her öğrenci kendi kitabına daha kolay ulaştı.”

**İlk olarak** ve **son olarak** bir sıralama kurar. Bu ikisi birlikte kullanıldığında paragrafta bir liste vardır ve sıralama sorularında bu ifadeler doğrudan yer belirtir.

Bu yönleri ezberlemekten çok, şuna alış: bir geçiş ifadesi gördüğünde **bir sonraki cümleyi tahmin et**, sonra oku. Tahminin tutuyorsa yönü doğru okumuşsun demektir. Tutmuyorsa ya ifadeyi yanlış okudun ya da paragrafta bir tutarsızlık var — ki bu, akış sorusunun cevabı olabilir.`,
        },
        {
          id: 'lgs-paragraf-gecis-tablo',
          type: 'table',
          interactive: true,
          title: 'Yön tablosu: ifade ne vaat ediyor?',
          columns: ['Geçiş ifadesi', 'Yönü', 'Sonraki cümlede ne beklerim?', 'Özgün örnek'],
          rows: [
            ['oysaki', 'Karşıtlık', 'Önceki ile çelişen bir durum', 'Salon büyütüldü; oysaki öğrenci sayısı azalıyor.'],
            ['başka bir deyişle', 'Açıklama', 'Aynı düşüncenin yeni ifadesi', 'Not tutmak seçmektir; başka bir deyişle elemektir.'],
            ['özellikle', 'Daraltma', 'Genel içinden öne çıkan bir bölüm', 'Sessizlik dikkati artırır; özellikle sabah saatlerinde.'],
            ['kısaca', 'Toparlama', 'Söylenenlerin özeti', 'Kısaca, okumanın hızı değil derinliği önemlidir.'],
            ['böylece', 'Sonuç', 'Önceki durumun doğurduğu yeni durum', 'Raflar sınıflara dağıtıldı; böylece kitaplara erişim kolaylaştı.'],
            ['ilk olarak / son olarak', 'Sıralama', 'Listenin bir ögesi', 'İlk olarak plan yapılır, son olarak sonuç yazılır.'],
            ['ayrıca / bununla birlikte', 'Ekleme', 'Aynı yönde yeni bir bilgi', 'Ayrıca yeni kitaplar da raflara yerleştirildi.'],
          ],
          caption:
            'Bu tabloyu bir tahmin aracı gibi kullan: ifadeyi gördüğünde sonraki cümleyi tahmin et, sonra oku. Tahminin tutmazsa akışta sorun olabilir.',
        },
        {
          id: 'lgs-paragraf-gecis-analiz',
          type: 'sentence_analysis',
          title: 'Cümleler birbirine neyle tutunuyor?',
          prompt:
            'Aşağıdaki dört cümlelik paragrafta her cümlenin bir öncekine tutunma noktasını göreceğiz. Parçalara tıkla.',
          segments: [
            {
              text: 'Okul kütüphanesine geçen ay iki yüz yeni kitap geldi.',
              label: 'Giriş — öncesine bağlanmıyor',
              explanation:
                'İçinde zamir, bağlaç ya da önceye gönderen bir öge yok. Tek başına okunduğunda anlaşılıyor. Bu yüzden giriş cümlesi.',
              tone: 'brand',
            },
            {
              text: 'Bu kitapların çoğu öğrencilerin kendi önerileriyle seçildi.',
              label: 'Tutunma noktası: “bu kitapların”',
              explanation:
                '“Bu” işaret sıfatı doğrudan bir önceki cümleye gönderiyor. Cümle tek başına okunsa “hangi kitaplar?” sorusu cevapsız kalır.',
              tone: 'aqua',
            },
            {
              text: 'Böylece raflar, öğrencilerin gerçekten merak ettiği başlıklarla doldu.',
              label: 'Tutunma noktası: “böylece” (sonuç)',
              explanation:
                'Geçiş ifadesi sonuç yönü gösteriyor: önceki cümledeki seçim biçiminin doğurduğu durum. Yön ile içerik uyuşuyor; akış sağlam.',
              tone: 'success',
            },
            {
              text: 'Kütüphanenin duvarları geçen yıl boyanmıştı.',
              label: 'Tutunacak yeri yok — akışı bozan cümle',
              explanation:
                'Konuyla ilgili görünüyor (yine kütüphane). Ama ne bir öncekinin sonucu, ne açıklaması, ne örneği. Çıkarma testi: bu cümleyi silersen paragraf hiçbir şey kaybetmiyor.',
              tone: 'danger',
            },
          ],
          takeaway:
            'Dördüncü cümle konuyla ilgili ama zincire takılmıyor. Akış soruları tam olarak bu ayrımı ölçer.',
        },
        {
          id: 'lgs-paragraf-gecis-hoca',
          type: 'teacher_note',
          tone: 'warning',
          body:
            'Zamirler (bu, o, onlar, bunlar) akışın en güçlü kanıtıdır. Bir cümle zamirle başlıyorsa kesinlikle bir öncesine gönderiyordur; bu yüzden **giriş cümlesi olamaz.** Sıralama sorularında bu tek kural, seçeneklerin yarısını eler.',
        },
      ],
    },

    {
      id: 'lgs-turkce-paragraf-bolme-tamamlama',
      title: 'Bölme, tamamlama ve sıralama soruları',
      lead: 'Üç soru biçimi, tek bir mantığa dayanır: bir cümlenin nereye tutunduğunu göstermek.',
      blocks: [
        {
          id: 'lgs-paragraf-bolme-anlatim',
          type: 'prose',
          body: `**Paragrafı ikiye bölme.** Bir metin iki ayrı düşünceyi anlatıyorsa, ikinci düşüncenin başladığı yerden bölünür. Bölme noktasını bulmanın ölçütü şudur: bölmeden sonraki cümle, **yeni bir giriş cümlesi gibi** durabilmeli. Yani öncesine gönderen bir zamiri, bir bağlacı olmamalı ve kendi başına bir konu açabilmeli.

Öğrencilerin çoğu bölme noktasını “konu değişmiş gibi hissettiği” yerde arar. Bu güvenilmez. Bunun yerine her cümlenin başına bak: zamirle, “bu”yla, “ayrıca”yla başlayan bir cümle **bölme noktası olamaz**, çünkü öncesine muhtaçtır.

**Paragrafı tamamlama.** Boşluk paragrafın başında, ortasında ya da sonunda olabilir. Ölçüt her zaman aynı: seçilen cümle boşluğun **iki yanını** birden bağlamalı. Boşluk sondaysa, seçilen cümle paragrafın vardığı hükmü taşımalı ve önceki cümlelerle çelişmemeli. Boşluk baştaysa, seçilen cümle giriş cümlesi niteliği taşımalı: öncesine gönderme yapmamalı.

**Cümle sıralama.** Karışık verilmiş cümleleri sıraya koyma sorusudur. Yöntem üç adımlıdır. Önce **giriş cümlesini** bul: zamiri, bağlacı, önceye göndermesi olmayan tek cümle. Sonra **zincirleme yap**: her cümlenin hangi cümleye tutunduğunu zamir ve tekrar eden kavramlarla göster. En sonunda **sonuç cümlesini** yerleştir: “bu yüzden, kısacası” gibi bir toparlama işareti taşıyan cümle sona gelir.

Üç soru biçiminde de en sık yapılan hata aynıdır: **anlamı kabaca izleyip karar vermek.** Paragraf kısa olduğu için öğrenci “bana mantıklı geldi” der ve geçer. Oysa seçeneklerin ikisi de mantıklı gelebilir; ayrımı yapan şey, cümlelerin birbirine tutunma noktalarının gösterilebilmesidir.

Bir uyarı daha: sıralama sorularında bazen iki cümle birbirine hem A→B hem B→A biçiminde bağlanabiliyor gibi görünür. Böyle bir durumda zamire bak. Zamir taşıyan cümle her zaman sonradır, çünkü gönderdiği şey ondan önce söylenmiş olmalıdır.`,
        },
        {
          id: 'lgs-paragraf-bolme-tablo',
          type: 'table',
          interactive: true,
          title: 'Üç soru biçimi, üç ölçüt',
          columns: ['Soru biçimi', 'Ne sorulur?', 'Ölçüt', 'Sık yapılan hata'],
          rows: [
            ['Bölme', 'Paragraf kaçıncı cümleden sonra ikiye ayrılmalı?', 'Bölmeden sonraki cümle giriş cümlesi olabilmeli', 'Konu değişmiş “hissine” göre bölmek'],
            ['Tamamlama (son)', 'Paragrafın sonuna hangi cümle getirilmeli?', 'Cümle paragrafın hükmünü taşımalı, çelişmemeli', 'Yalnız son cümleye bakıp karar vermek'],
            ['Tamamlama (orta)', 'Boşluğa hangi cümle gelmeli?', 'Cümle iki yanı birden bağlamalı', 'Yalnız boşluktan öncesini okumak'],
            ['Sıralama', 'Cümlelerin doğru sırası nedir?', 'Giriş cümlesi + zamir zinciri + sonuç cümlesi', 'Anlamı kabaca izleyip tahmin etmek'],
            ['Akışı bozan cümle', 'Hangi cümle çıkarılmalı?', 'Çıkarınca akış düzelmeli', '“İlgisiz cümle” aramak'],
          ],
          caption:
            'Beş biçimin de ortak yanı şudur: karar, tutunma noktasının gösterilmesiyle verilir. Gösteremiyorsan tahmin ediyorsundur.',
        },
        {
          id: 'lgs-paragraf-bolme-tuzak',
          type: 'trap',
          title: 'Zamirle başlayan cümleyi başa koymak',
          wrong: 'Bu cümle konuyu en iyi tanıtıyor; sıralamada başa koyarım.',
          right: 'Cümle “bunlar” ile başlıyorsa, gönderdiği şey daha önce söylenmiş olmalı. Zamirle başlayan cümle asla giriş cümlesi olamaz.',
          body: 'Bu tek kural, sıralama sorularında seçeneklerin çoğunu doğrudan eler ve saniyeler kazandırır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-paragraf-vurgu-strateji',
      title: 'Biçimsel vurgular ve okuma stratejileri',
      lead: 'Metin, okura yalnız sözcüklerle değil biçimle de yön verir. Bunu okuyabilmek bir beceridir ve programda ayrı bir kazanımdır.',
      blocks: [
        {
          id: 'lgs-paragraf-vurgu-anlatim',
          type: 'prose',
          body: `**T.8.3.28** kazanımı, metinde önemli noktaların vurgulanış biçimlerinin kavranmasını ister ve açıklamasında altını çizmenin, koyu veya italik yazmanın, renklendirmenin, farklı punto veya font kullanmanın işlevini vurgular.

Bu işaretler rastgele konmaz. **Koyu yazı** genellikle bir terimi ya da tanımı işaret eder: okurun aklında kalması istenen şey odur. **İtalik** çoğu zaman bir yabancı sözcüğü, bir eser adını ya da alıntılanan bir ifadeyi gösterir; bazen de vurgulu okunması istenen bir sözcüğü. **Altı çizili** kısımlar dikkat çağrısıdır ve sınav metinlerinde genellikle sorunun hedefini gösterir. **Farklı punto** bir hiyerarşi kurar: büyük punto başlıktır, küçük punto dipnot ya da açıklamadır.

Bunları okuyabilmek sınavda doğrudan işine yarar. Bir metinde altı çizili bir sözcük varsa, o sözcük hakkında bir soru geleceğini bilirsin ve okuma dikkatini oraya yoğunlaştırırsın. Bir kutu içine alınmış cümle varsa, o cümle metnin geri kalanından ayrı bir statüdedir: tanım, uyarı ya da alıntı.

**T.8.3.12** kazanımı ise görsel ve başlıktan hareketle metnin konusunu tahmin etmeyi ister. Bu, okuma öncesi bir adımdır: metne başlamadan başlığa ve varsa görsele bakıp “bu metin muhtemelen neyi anlatıyor?” diye sormak. Tahminin doğru çıkması şart değil; **tahmin etmiş olman**, okurken bilgileri yerleştireceğin bir çerçeve kurar.

**T.8.3.4** okuma stratejilerini sayar: göz atarak, özetleyerek, not alarak, tartışarak ve eleştirerek okuma. Sınav bağlamında en çok işine yarayacak ikisi şunlardır. **Göz atarak okuma**, metne başlamadan önce yapıyı görmek içindir: kaç paragraf var, başlık ne diyor, altı çizili yerler nerede. **Eleştirerek okuma** ise yazarın savını ve dayanaklarını ayırmak içindir; öznel–nesnel ayrımını yaptığın derste bunun temelini kurdun.

Bütün bunların ortak noktası şudur: metin, okurun rastgele gezmesini beklemez. Yol işaretleri koyar. İyi okur o işaretleri görür ve dikkatini ona göre dağıtır.`,
        },
        {
          id: 'lgs-paragraf-vurgu-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Biçimsel işaretler ne söyler?',
          columns: ['Koyu yazı', 'İtalik', 'Altı çizili'],
          rows: [
            { label: 'Tipik işlevi', values: ['Terim, tanım, anahtar kavram', 'Eser adı, yabancı sözcük, alıntı', 'Dikkat çağrısı, sorunun hedefi'] },
            { label: 'Okura söylediği', values: ['Bunu aklında tut', 'Bu ifade farklı bir statüde', 'Buraya dikkat et'] },
            { label: 'Sınavdaki karşılığı', values: ['Kavram sorusu gelebilir', 'Tür ya da kaynak sorusu gelebilir', 'Doğrudan bu sözcük sorulur'] },
            { label: 'Yanlış okuma', values: ['Süs sanmak', 'Yanlışlıkla vurgu sanmak', 'Görmezden gelmek'] },
          ],
          insight:
            'Bir metinde biçimsel işaret varsa, yazar okura bir şey söylüyordur. Bu işaretleri okumak, metni iki kez okumaktan daha çok kazandırır.',
        },
        {
          id: 'lgs-paragraf-vurgu-tuzak',
          type: 'trap',
          title: 'Başlığa hiç bakmadan metne dalmak',
          wrong: 'Zaman kaybetmemek için doğrudan ilk cümleden başlarım.',
          right: 'Başlığa ve varsa görsele üç saniye bakmak, metni okurken bilgileri yerleştireceğim çerçeveyi kurar.',
          body: 'T.8.3.12 tam olarak bunu ister. Çerçevesi olan okur, metnin ortasında kaybolmaz; çünkü nereye doğru gittiğini baştan tahmin etmiştir.',
        },
        {
          id: 'lgs-paragraf-vurgu-hafiza',
          type: 'memory',
          title: 'Üç soruluk akış kontrolü',
          body: '**Bu cümle neye tutunuyor?** → bağ. **Çıkarsam düzelir mi?** → akış. **Zamirle mi başlıyor?** → giriş olamaz.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Akışı bozan cümleyi bul',
      prompt:
        'Paragraf: “(I) Sınıfımızda haftada bir gün ‘sessiz okuma saati’ yapıyoruz. (II) Bu saatte kimse konuşmuyor, herkes kendi kitabını okuyor. (III) Böylece yirmi dakika boyunca sınıfın tamamı aynı işi yapıyor. (IV) Okulumuzun bahçesinde iki basketbol potası var. (V) Bu ortak sessizlik, tek başına okumaktan daha kolay odaklanmamızı sağlıyor.” Akışı bozan cümle hangisidir?',
      steps: [
        { title: 'Girişi bul', body: '(I) zamir ya da bağlaç taşımıyor, kendi başına anlaşılıyor: giriş cümlesi.' },
        { title: 'Tutunma noktalarını göster', body: '(II) “bu saatte” → (I)’e tutunuyor. (III) “böylece” → (II)’nin sonucu. (V) “bu ortak sessizlik” → (III)’teki duruma tutunuyor.' },
        { title: 'Tutunmayanı bul', body: '(IV) basketbol potalarından söz ediyor. Konu okulla ilgili, yani tamamen alakasız değil; ama ne bir öncekinin sonucu ne açıklaması. Tutunma noktası yok.' },
        { title: 'Çıkarma testini uygula', body: '(IV)’ü çıkar: “…sınıfın tamamı aynı işi yapıyor. Bu ortak sessizlik, tek başına okumaktan daha kolay odaklanmamızı sağlıyor.” Akış sorunsuz.' },
        { title: 'Yanlış adayı da test et', body: '(III)’ü çıkarsaydık: (V)’teki “bu ortak sessizlik” ifadesinin göndereceği yer kalmazdı; akış kopardı. Demek ki (III) gerekliydi. Test iki yönlü çalışıyor.' },
      ],
      answer: '(IV) numaralı cümle.',
      takeaway: 'Çıkarma testini yalnız adaya değil, şüphelendiğin diğer cümleye de uygula; kararın kesinleşir.',
    },
    {
      title: 'Seviye 2 — Cümleleri sıraya koy',
      prompt:
        'Şu cümleleri anlamlı bir paragraf olacak biçimde sırala: (I) Bunun için önce hangi bilgiyi arayacağını bilmesi gerekir. (II) Bir öğrenci, internette saatlerce gezip hiçbir şey öğrenmeyebilir. (III) Böylece arama, dolaşmaktan çıkıp bir işe dönüşür. (IV) Soruyu netleştiren öğrenci, sonucu da daha çabuk bulur.',
      steps: [
        { title: 'Girişi bul', body: '(II) hiçbir zamir ya da bağlaç taşımıyor ve kendi başına anlaşılıyor. Diğer üçü: (I) “bunun için”, (III) “böylece”, (IV) “soruyu” — üçü de öncesine muhtaç. Giriş: **(II)**.' },
        { title: '(II)’den sonra ne gelir?', body: '(I) “bunun için” diyor; neyin için? (II)’de anlatılan sorunu çözmek için. (II) → (I) bağı kuruldu.' },
        { title: '(I)’den sonra ne gelir?', body: '(I) “hangi bilgiyi arayacağını bilmek”ten söz ediyor. (IV) “soruyu netleştiren öğrenci” diyerek aynı fikri sürdürüyor. (I) → (IV).' },
        { title: 'Sonuç cümlesini yerleştir', body: '(III) “böylece” ile başlıyor ve bir sonuç bildiriyor: arama bir işe dönüşür. Toparlama işareti taşıdığı için sona gelir.' },
        { title: 'Zinciri baştan oku', body: '(II) → (I) → (IV) → (III). Her geçişte bir tutunma noktası gösterebiliyoruz; sıralama doğrulandı.' },
      ],
      answer: '(II) – (I) – (IV) – (III)',
      takeaway:
        'Sıralama sorularında önce girişi bul, sonra zamir ve bağlaçlarla zincirle. “Bana mantıklı geldi” bir gerekçe değildir.',
    },
    {
      title: 'Seviye 3 — Geçiş ifadesinin yönünü doğrula',
      prompt:
        'Şu cümlede geçiş ifadesi doğru kullanılmış mı? “Kütüphaneye gelen öğrenci sayısı her yıl artıyor; **başka bir deyişle** raflara yeni kitaplar eklendi.”',
      steps: [
        { title: 'İfadenin yönünü belirle', body: '“Başka bir deyişle” bir **açıklama** yönü taşır: kendinden sonra, aynı düşüncenin yeni bir ifadesi gelmelidir.' },
        { title: 'Gerçek ilişkiyi oku', body: 'Öğrenci sayısının artması ile raflara kitap eklenmesi aynı düşüncenin iki ifadesi değil; iki ayrı olgu. Hatta ikincisi birincinin sonucu ya da sebebi olabilir.' },
        { title: 'Çelişkiyi adlandır', body: 'İfadenin vaat ettiği yön (açıklama) ile cümlenin gerçek ilişkisi (sonuç ya da ekleme) uyuşmuyor. Geçiş ifadesi yanlış kullanılmış.' },
        { title: 'Doğru ifadeyi öner', body: '“Böylece” (sonuç) ya da “ayrıca” (ekleme) uygun olurdu: “…artıyor; böylece raflara yeni kitaplar eklendi.”' },
        { title: 'Sınavda nasıl görünür?', body: 'Bu tür sorular genellikle “aşağıdaki cümlelerin hangisinde geçiş ifadesi yanlış kullanılmıştır?” biçiminde gelir. Çözüm yolu aynıdır: yönü oku, gerçek ilişkiyle karşılaştır.' },
      ],
      answer:
        'Hayır, yanlış kullanılmış. “Başka bir deyişle” açıklama bekletir; buradaki ilişki ise sonuç ya da eklemedir.',
      takeaway:
        'Geçiş ifadesi bir vaattir. Vaat ile cümlenin gerçek ilişkisi uyuşmuyorsa hata oradadır.',
    },
  ],

  questionClue: {
    concept: 'paragraf akışı sorusu',
    statement:
      'Soru kökünde “akışı bozan cümle”, “ikiye bölünmek istense”, “sonuna getirilebilecek cümle”, “anlamlı bir bütün oluşturacak biçimde sıralanışı” ifadelerinden biri varsa, sorulan şey içerik değil bağdır.',
    clues: [
      'Cümlelerin (I), (II), (III) gibi numaralandırılmış olması',
      'Soru kökünde “akış / bütünlük / sıralanış / bölünme” terimleri',
      'Bir paragrafın ortasında boşluk bırakılmış olması',
      'Cümlelerin başında zamir ve bağlaçların bilerek yoğunlaştırılması',
      'Metinde koyu, italik ya da altı çizili bir bölüm bulunması',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, cümleler arasındaki tutunma noktalarını görüp göremediğini ölçüyor. Çözüm yolu her cümle için “bu neye tutunuyor?” sorusunu cevaplamak ve gerektiğinde çıkarma testi uygulamaktır.',
    boundary:
      'Bu ipuçlarını “zamirle başlayan cümle hep ikinci sıradadır” gibi bir kısayola çevirme. Zamirli cümle üçüncü, dördüncü de olabilir; kesin olan tek şey **birinci olamayacağıdır**.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Numaralandırılmış cümlelerden hangisinin akışı bozduğunun sorulması',
      'Paragrafın kaçıncı cümleden sonra ikiye bölünmesi gerektiğinin sorulması',
      'Paragrafın sonuna ya da ortasına getirilecek cümlenin seçtirilmesi',
      'Karışık verilen cümlelerin anlamlı sıraya konulması',
      'Bir geçiş ifadesinin yanlış kullanıldığı cümlenin bulunması',
      'Metindeki koyu ya da altı çizili bölümün neden vurgulandığının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Bunlar, geçen yıl kütüphaneye bağışlanan kitaplardı.” Bu cümle bir paragrafın giriş cümlesi olabilir mi? Neden?',
      hint: 'Cümlenin başındaki sözcüğe bak: neye gönderiyor?',
      answer:
        'Olamaz. Cümle “bunlar” zamiriyle başlıyor ve bu zamir daha önce söylenmiş bir şeye gönderiyor. Giriş cümlesi kendinden öncesine bağlanmaz; tek başına okunduğunda anlaşılır olmalıdır. Bu cümle tek başına okunduğunda “hangileri?” sorusu cevapsız kalır.',
    },
    {
      prompt:
        'Bir paragrafta akışı bozduğunu düşündüğün cümleyi çıkardın ama kalan cümleler birbirine bağlanmadı; hatta bir zamirin göndereceği yer kalmadı. Ne yapmalısın?',
      hint: 'Çıkarma testi iki yönlü çalışır.',
      answer:
        'Yanlış cümleyi çıkarmışsın demektir; o cümle paragrafa gerekliymiş. Başka bir adaya geçip testi yeniden uygulamalısın. Çıkarma testinin değeri tam da budur: doğru adayı onaylamakla kalmaz, yanlış adayı da ele verir.',
    },
    {
      prompt:
        '“Yeni düzenlemeyle kütüphane hafta sonu da açık; oysaki öğrenciler hafta içi gelmeyi tercih ediyor.” Bu cümlede geçiş ifadesi doğru kullanılmış mı?',
      hint: '“Oysaki”nin vaat ettiği yön nedir?',
      answer:
        'Evet, doğru kullanılmış. “Oysaki” karşıtlık yönü taşır ve cümlede gerçekten bir karşıtlık var: yapılan düzenleme (hafta sonu açılış) ile öğrencilerin tercihi (hafta içi) birbirine ters düşüyor. Vaat edilen yön ile gerçek ilişki uyuşuyor.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey metni anlamak değil, metnin kurulumunu görmek',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Akış sorularında bunun somut karşılığı şudur: paragrafı zaten anlıyorsun; ölçülen şey, cümlelerin birbirine nasıl bağlandığını gösterebilmen. Bu yüzden akışı bozan cümleler konuyla ilgili seçilir ve sıralama sorularında birden fazla dizilim “mantıklı” görünür.',
    measures: [
      'Giriş cümlesini bağlayıcı öge yokluğundan tanıyabilme',
      'Cümleler arasındaki tutunma noktalarını gösterebilme',
      'Geçiş ifadesinin yönü ile gerçek ilişkiyi karşılaştırabilme',
      'Çıkarma testiyle akışı bozan cümleyi doğrulayabilme',
      'Bölme noktasını “his” yerine ölçütle belirleyebilme',
      'Biçimsel vurguların işlevini okuyabilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `(I) Mahalledeki kapalı pazar yeri, hafta içi boş duruyordu. (II) Muhtar geçen yıl burayı çocuklara açmayı önerdi. (III) Böylece salı ve perşembe günleri alan, okul çıkışı oyun alanına dönüştü. (IV) Pazar esnafı yıllardır aynı tezgâhları kullanıyor. (V) Bu düzenleme, hiçbir yeni bina yapılmadan mahalleye bir oyun alanı kazandırdı.`,
    question: 'Bu parçada anlam akışını bozan cümle aşağıdakilerden hangisidir?',
    options: [
      {
        text: '(I) numaralı cümle',
        explanation:
          'Bu cümle giriş cümlesidir: zamir ya da bağlaç taşımıyor, kendi başına anlaşılıyor ve sorunu ortaya koyuyor. Çıkarırsan (II)’deki “burayı” zamirinin göndereceği yer kalmaz; akış kopar.',
      },
      {
        text: '(II) numaralı cümle',
        explanation:
          '“Burayı” zamiriyle (I)’e tutunuyor ve (III)’teki “böylece”nin dayandığı öneriyi veriyor. Çıkarırsan hem önceki hem sonraki bağ kopar. Paragrafa gerekli.',
      },
      {
        text: '(III) numaralı cümle',
        explanation:
          '“Böylece” ile (II)’nin sonucunu veriyor ve (V)’teki “bu düzenleme” ifadesinin göndereceği durumu kuruyor. Çıkarma testi kopma gösteriyor; gerekli.',
      },
      {
        text: '(IV) numaralı cümle',
        explanation:
          'Doğru cevap. Pazar esnafının tezgâhları konuyla ilgili görünür (yine pazar yeri), ama ne bir öncekinin sonucu ne açıklaması ne örneği. Çıkarıldığında (III) ile (V) sorunsuz bağlanıyor: “…oyun alanına dönüştü. Bu düzenleme… bir oyun alanı kazandırdı.”',
      },
      {
        text: '(V) numaralı cümle',
        explanation:
          '“Bu düzenleme” ifadesiyle önceki cümlelere tutunuyor ve paragrafı bir hükme bağlıyor: sonuç cümlesi. Çıkarırsan paragraf hükümsüz kalır.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “anlam akışını bozan cümle” diyor; yani aranan şey ilgisiz cümle değil, tutunma noktası olmayan cümle. İlk iş giriş cümlesini bulmak ve her cümlenin bir öncekine neyle bağlandığını göstermek.',
    critical_point:
      'Kritik nokta, (IV) numaralı cümlenin konuyla ilgili görünmesi. “Pazar” sözcüğü paragrafta zaten geçiyor; bu ortaklık cümleyi ait gösteriyor. Ama ortak sözcük bir bağ değildir. Bağ, cümlenin bir öncekiyle kurduğu anlam ilişkisidir.',
    takeaway:
      'Ortak sözcük tutunma değildir. Tutunma, zamir, bağlaç ya da anlam ilişkisiyle kurulur.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdaki cümlelerden hangisi bir paragrafın **giriş cümlesi** olabilir?',
      options: [
        'Bu yüzden proje bir yıl ertelendi.',
        'Onlar da aynı sorunla karşılaşmıştı.',
        'Okulumuzda geçen yıl bir onarım çalışması başlatıldı.',
        'Ayrıca bahçe duvarı da yenilendi.',
      ],
      answer_index: 2,
      explanation:
        'Üçüncü cümle hiçbir bağlayıcı öge taşımıyor ve tek başına okunduğunda anlaşılıyor. Birincide “bu yüzden” bir sonuç bağlacı, ikincide “onlar” zamiri, dördüncüde “ayrıca” ekleme bağlacı var; üçü de öncesine muhtaç olduğu için giriş cümlesi olamaz.',
    },
    {
      purpose: 'apply',
      question:
        '“Sınıfta gürültü arttıkça dikkat dağılıyor; **özellikle** sınav haftalarında bu durum belirginleşiyor.” Bu cümlede geçiş ifadesinin katkısı nedir?',
      options: [
        'Önceki yargıyla çelişen bir durum getirmiştir',
        'Genel bir yargının içinden bir bölümü öne çıkarmıştır',
        'Önceki cümleyi farklı sözcüklerle yinelemiştir',
        'Bir sıralama kurmuştur',
      ],
      answer_index: 1,
      explanation:
        '“Özellikle” bir daraltma yapar: genel olarak söylenenin (gürültü dikkati dağıtır) içinden bir bölümü (sınav haftaları) öne çıkarır. Karşıtlık olsaydı “oysaki”, yineleme olsaydı “başka bir deyişle”, sıralama olsaydı “ilk olarak / son olarak” beklenirdi.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci sıralama sorusunda “Bunlar arasında en çok tercih edileni kitaplardı.” cümlesini paragrafın başına koyuyor. Bu öğrencinin hatası nedir?',
      options: [
        'Zamirle başlayan bir cümleyi giriş cümlesi saymak',
        'Geçiş ifadesinin yönünü yanlış okumak',
        'Sonuç cümlesini ortaya koymak',
        'Çıkarma testini uygulamamak',
      ],
      answer_index: 0,
      explanation:
        'Cümle “bunlar” zamiriyle başlıyor ve bu zamirin gönderdiği şey daha önce söylenmiş olmalı. Zamirle başlayan bir cümle asla giriş cümlesi olamaz. Cümlede geçiş ifadesi yok, sonuç bildirmiyor ve sıralama sorularında çıkarma testi kullanılmaz.',
    },
  ],

  summary: [
    'Paragrafta cümleler birbirine tutunur: zamir, bağlaç, tekrar eden kavram ya da geçiş ifadesiyle.',
    'Giriş cümlesi kendinden öncesine bağlanmaz; zamirle ya da bağlaçla başlayan cümle giriş olamaz.',
    'Akışı bozan cümle ilgisiz cümle değil, tutunacak yeri olmayan cümledir.',
    'Çıkarma testi iki yönlü çalışır: doğru adayı onaylar, yanlış adayı ele verir.',
    'Geçiş ifadeleri yön taşır: oysaki karşıtlık, başka bir deyişle açıklama, özellikle daraltma, kısaca toparlama, böylece sonuç, ilk/son olarak sıralama.',
    'Bir geçiş ifadesinin vaat ettiği yön ile cümlenin gerçek ilişkisi uyuşmuyorsa hata oradadır.',
    'Bölme noktasından sonraki cümle, yeni bir giriş cümlesi gibi durabilmelidir.',
    'Tamamlama sorularında boşluğun hem öncesine hem sonrasına bakılır.',
    'Biçimsel vurgular (koyu, italik, altı çizili) süs değildir; okurun dikkatini yönlendirir.',
    'Başlığa ve görsele okumadan önce bakmak, metni yerleştireceğin çerçeveyi kurar.',
  ],

  next: [
    'Anlatım Biçimleri (T.8.3.11)',
    'Düşünceyi Geliştirme Yolları (T.8.3.34)',
    'Metinler Arası Karşılaştırma ve Çıkarım (T.8.3.23)',
  ],
})

export default lesson
