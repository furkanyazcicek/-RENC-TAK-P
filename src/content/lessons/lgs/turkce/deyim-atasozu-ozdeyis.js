import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Sözcükte Anlam · 2. ders
 * Kazanım : T.8.3.6 · T.8.4.7
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * Bu ders "bu deyim ne demek?" sorusunu değil, kazanımın gerçekten
 * sorduğu soruyu işler: kalıp söz metne NE KATIYOR?
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-deyim-atasozu-ozdeyis',
  topic: 'Sözcükte Anlam',
  order: 2,
  title: 'Deyim, Atasözü ve Özdeyiş: Metne Ne Katar?',
  subtitle:
    'Kalıp sözün anlamını bilmek yetmez; onu oraya koyan yazarın ne kazandığını görebilmek gerekir.',
  minutes: 42,
  kazanimlar: [
    { kod: 'T.8.3.6', metin: 'Deyim, atasözü ve özdeyişlerin metne katkısını belirler.' },
    { kod: 'T.8.4.7', metin: 'Yazılarını zenginleştirmek için atasözleri, deyimler ve özdeyişler kullanır.' },
  ],
  prerequisites: [
    { topic: 'Bağlamda sözcük anlamı', why: 'Kalıp sözün anlamını bağlamdan çıkaramazsan katkısını da adlandıramazsın.' },
    { topic: 'Mecaz anlam', why: 'Deyimlerin çoğu mecazlı kullanımdır; aktarmayı tanımak gerekir.' },
  ],
  outcomes: [
    'Deyim, atasözü ve özdeyişi birbirinden güvenli bir ölçütle ayırabileceksin.',
    'Bir kalıp sözün metne hangi katkıyı yaptığını adlandırabileceksin.',
    'Parçayı “özetleyen” atasözü ile parçayı “destekleyen” atasözünü ayırabileceksin.',
    'Kalıp söz kaldırıldığında metnin ne kaybettiğini gösterebileceksin.',
    'Anlamı doğru bilinen ama bağlama uymayan seçenekleri eleyebileceksin.',
  ],

  opening: {
    title: 'Yazar neden kısa yolu seçer?',
    lead: 'Bir cümlelik kalıp söz, bazen üç cümlelik açıklamanın yerini tutar. Soru da zaten bunu ölçer.',
    body: `Bir yazar “Ne yapacağını bilemedi, çaresiz kaldı, hiçbir seçenek işe yaramadı.” diye üç cümle yazabilirdi. Bunun yerine “**Elleri böğründe kaldı.**” dedi. Kısaldı mı? Evet. Ama asıl kazanç kısalık değil: okur artık çaresizliği **anlatılan bir bilgi** olarak değil, **gözünde canlanan bir görüntü** olarak alıyor.

MEB 8. sınıf Türkçe programındaki **T.8.3.6** kazanımı tam olarak bunu ister: kalıp sözün anlamını değil, **metne katkısını** belirlemek. Bu iki soru birbirine benziyor ama aynı değil. Birincisinin cevabı sözlükte bulunabilir; ikincisinin cevabı yalnız metinde bulunur.

Bu farkı bir örnekle netleştirelim. “Damlaya damlaya göl olur.” atasözünün anlamını hepimiz biliriz: küçük birikimler zamanla büyür. Peki bu atasözü bir metne konduğunda ne yapar? Tasarrufu anlatan bir yazıda **yazarın görüşünü destekler**. Sabırlı çalışmayı anlatan bir yazıda **ana fikri özetler**. Aceleci bir öğrenciyi eleştiren bir yazıda **öğüt verir**. Aynı atasözü, üç ayrı metinde üç ayrı iş yapar. Katkı, atasözünün değil metnin özelliğidir.

Üç kalıp söz türünü baştan ayıralım. **Deyim**, en az iki sözcüğün kalıplaşarak yeni bir anlam kazandığı ve genellikle bir durumu, davranışı ya da duyguyu anlatan söz grubudur; tek başına öğüt vermez. **Atasözü**, söyleyeni belli olmayan, toplumun ortak deneyiminden doğan ve bir yargı bildiren kalıplaşmış cümledir. **Özdeyiş (vecize)**, söyleyeni belli olan, yargı bildiren özlü sözdür.

Bu derste önce sınırı kesin bir ölçütle çizeceğiz, sonra kalıp sözün metne yaptığı beş katkıyı tek tek tanıyacağız, en sonunda da LGS'nin en sevdiği iki soru biçimini — “parçayı özetleyen atasözü” ile “yazarın görüşünü destekleyen atasözü” — birbirinden ayırmayı çalışacağız.`,
  },

  concepts: [
    {
      term: 'Deyim',
      body: 'En az iki sözcüğün kalıplaşarak yeni bir anlam kazandığı söz grubudur. Bir durumu, davranışı veya duyguyu anlatır; kendi başına öğüt ya da genel kural bildirmez. *Etekleri zil çalmak, pabucu dama atılmak, göz yummak.* Cümle içinde bir öge gibi görev alır.',
    },
    {
      term: 'Atasözü',
      body: 'Söyleyeni belli olmayan, toplumun ortak deneyiminden doğmuş, kalıplaşmış ve **yargı bildiren** cümledir. Öğüt verir, kural koyar ya da bir gerçeği saptar: *Sakla samanı, gelir zamanı. Damlaya damlaya göl olur.*',
    },
    {
      term: 'Özdeyiş (vecize)',
      body: 'Söyleyeni **belli olan**, yargı bildiren özlü sözdür. “Hayatta en hakiki mürşit ilimdir.” sözü Atatürk’e aittir; bu yüzden atasözü değil özdeyiştir. Ölçüt anlam değil, sözün sahibinin bilinmesidir.',
    },
    {
      term: 'Kalıplaşma',
      body: 'Sözcüklerin yerinin ve biçiminin değiştirilememesidir. “Göz yummak” yerine “göz kapamak” dersen deyim bozulur. Kalıplaşma, bu sözlerin neden ezber gibi göründüğünü ama aslında dilin ortak hafızası olduğunu açıklar.',
    },
    {
      term: 'Metne katkı',
      body: 'Kalıp sözün metinde yaptığı iştir: anlatımı kısaltmak, soyutu somutlaştırmak, yazarın görüşünü desteklemek, ana fikri özetlemek veya okurla kültürel bir ortaklık kurmak. Katkı sorusu “ne demek?” değil, “kaldırırsam ne kaybederim?” sorusuyla çözülür.',
    },
  ],

  why: {
    question: 'Neden “anlamını biliyorum” demek bu soruyu çözmeye yetmez?',
    body: `Çünkü soru kalıp sözün sözlük karşılığını değil, **metindeki işlevini** ister. Bu iki şeyin farkını görmenin en hızlı yolu şudur: kalıp sözü metinden silip cümleyi yeniden oku. Metin hâlâ aynı şeyi mi söylüyor?

Diyelim ki bir yazar öğrencilere sabırlı olmayı anlatıyor ve yazısını “**Acele işe şeytan karışır.**” diyerek bitiriyor. Bu atasözünü silersen metin yine sabrı anlatır — ama artık **yargıyı destekleyen bir dayanak** kalmaz. Yazar, kendi görüşünü toplumun ortak deneyimine yaslamıştı; sen o dayanağı çıkardın. İşte bu kayıp, atasözünün metne katkısıdır.

Aynı testi bir deyimle yapalım. “Sınav sonucu açıklanınca **etekleri zil çalıyordu**.” cümlesinden deyimi silip “çok sevindi” yazarsan bilgi kaybolmaz; **etki** kaybolur. Deyim burada duyguyu ölçüp biçmeden, canlı bir görüntüyle veriyordu.

Bu yüzden katkı sorusunda doğru cevap neredeyse hiçbir zaman “deyimin anlamını açıklayan” seçenek olmaz. O seçenek genellikle çeldiricidir ve tam da doğru anlamı verdiği için inandırıcı görünür. Doğru cevap, kalıp sözün metinde **ne yaptığını** söyleyen seçenektir: “anlatıma somutluk katmıştır”, “yazarın görüşünü desteklemiştir”, “ana düşünceyi özetlemiştir” gibi.

Kazanımın yazılışı da bunu doğruluyor: “Deyim, atasözü ve özdeyişlerin **metne katkısını** belirler.” Kazanım “anlamını bulur” demiyor; o iş bir önceki derste, T.8.3.5'te yapıldı.`,
  },

  decision: {
    title: 'Kalıp sözün metne katkısını bulma yolu',
    lead: 'Katkı, tahmin edilmez; “sil ve karşılaştır” yöntemiyle gösterilir.',
    intro:
      'Altı çizili bir kalıp sözle karşılaştığında şu beş durağı uygula. Üçüncü durak bu dersin kalbidir; onu atlarsan anlam sorusuna geri dönersin.',
    steps: [
      {
        title: '1. Türünü belirle',
        body: 'Deyim mi, atasözü mü, özdeyiş mi? Bu adım seni doğrudan daraltır: deyim çoğunlukla anlatıma renk ve somutluk katar, atasözü ve özdeyiş ise çoğunlukla bir yargıyı destekler veya özetler.',
      },
      {
        title: '2. Anlamını bağlamdan doğrula',
        body: 'Bildiğin anlamı metne yerleştir ve tut­madığı yer var mı diye bak. Aynı deyim farklı tonlarda kullanılabilir; “göz yummak” bir yerde hoşgörüyü, başka bir yerde sorumsuzluğu anlatır.',
      },
      {
        title: '3. Sil ve karşılaştır',
        body: 'Kalıp sözü metinden çıkar, yerine düz bir açıklama koy ve iki hâli yan yana oku. Ne kayboldu? Kısalık mı, görüntü mü, dayanak mı, öğüt mü? Kaybolan şey, katkının ta kendisidir.',
      },
      {
        title: '4. Katkıyı adlandır',
        body: 'Kaybolanı bir ada bağla: somutlaştırma, kısaltma, pekiştirme, dayanak gösterme, özetleme veya kültürel ortaklık kurma. Adı koymak, seçeneklerle eşleştirmeyi kolaylaştırır.',
      },
      {
        title: '5. Seçeneği kanıtla eşleştir',
        body: 'Adını koyduğun katkıyı seçeneklerde ara. Yalnız kalıp sözün anlamını tekrar eden seçeneği işaretleme; o, sorunun değil sözlüğün cevabıdır.',
      },
    ],
    takeaway: 'Katkı, kalıp sözün kendisinde değil; kaldırıldığında metinde açılan boşlukta görünür.',
  },

  decisionTree: {
    title: 'Deyim mi, atasözü mü, özdeyiş mi?',
    intro:
      'Üçünü karıştırmanın en yaygın sebebi, ayrımı “kulağa nasıl geliyor?” diye yapmaktır. Aşağıdaki iki kontrol bunu kesinleştirir.',
    checks: [
      {
        question: 'Sözün söyleyeni belli mi?',
        yes: 'Özdeyiştir (vecize). Örnek: “Yurtta sulh, cihanda sulh.” — Atatürk.',
        no: 'Anonimdir; ikinci kontrole geç.',
      },
      {
        question: 'Söz kendi başına bir yargı — öğüt, kural veya genel gerçek — bildiriyor mu?',
        yes: 'Atasözüdür. Örnek: “Ağaç yaşken eğilir.” Tek başına okunduğunda bile bir şey öğütler.',
        no: 'Deyimdir. Örnek: “ağzı kulaklarına varmak” — tek başına bir öğüt vermez, bir durumu anlatır.',
      },
      {
        question: 'Deyim olduğuna karar verdiysen: sözcüklerin yeri değiştirilebiliyor mu?',
        yes: 'Kalıplaşmamıştır; bu bir deyim değil, sıradan bir söz grubudur.',
        no: 'Kalıplaşmıştır; deyim olduğu kesinleşir.',
      },
    ],
    takeaway:
      'Bazı atasözleri de mecazlıdır; mecaz olmak deyim yapmaz. Ayrımı yapan ölçüt **yargı bildirip bildirmediğidir.**',
  },

  comparison: {
    title: 'Üç kalıp sözü kesin ölçütle ayır',
    columns: ['Deyim', 'Atasözü', 'Özdeyiş'],
    rows: [
      { label: 'Söyleyeni', values: ['Belli değil', 'Belli değil (anonim)', 'Belli'] },
      { label: 'Yargı bildirir mi?', values: ['Hayır, durum/davranış anlatır', 'Evet: öğüt, kural veya gerçek', 'Evet: düşünce veya ilke'] },
      { label: 'Cümledeki yeri', values: ['Cümlenin bir ögesi olur', 'Genellikle tek başına bir cümledir', 'Genellikle tek başına bir cümledir'] },
      { label: 'Örnek', values: ['göz yummak, etekleri zil çalmak', 'Sakla samanı, gelir zamanı.', '“Hayatta en hakiki mürşit ilimdir.”'] },
      { label: 'Metne en sık katkısı', values: ['Somutlaştırır, kısaltır, etkiyi artırır', 'Yargıyı destekler, ana fikri özetler', 'Görüşü otoriteyle pekiştirir'] },
      { label: 'Ayırt etme sorusu', values: ['Tek başına öğüt veriyor mu? Hayır.', 'Tek başına öğüt veriyor mu? Evet.', 'Sözün sahibi biliniyor mu? Evet.'] },
    ],
    insight:
      'Deyimlerin çoğu mecazlıdır ama bütün mecazlı sözler deyim değildir; atasözlerinin de mecazlı olanı vardır. Ölçüt mecaz değil, **yargı**dır.',
  },

  traps: [
    {
      title: 'Deyimin anlamını söyleyip katkı sorusunu cevapladığını sanmak',
      wrong: '“Elleri böğründe kaldı” çaresiz kaldı demek; öyleyse cevap “çaresizliği anlatmıştır”.',
      right: 'Sorunun istediği, anlamı değil katkıdır: “Soyut bir duyguyu somut bir görüntüyle anlatarak anlatıma canlılık katmıştır.”',
      body: 'Anlamı veren seçenek genellikle çeldiricidir ve doğru bilgiyi taşıdığı için inandırıcı görünür. Soru kökünde “katkı”, “anlatıma kazandırdığı”, “kullanılma amacı” geçiyorsa anlam seçeneği yanlıştır.',
    },
    {
      title: 'Mecazlı her sözü deyim sanmak',
      wrong: '“Ağaç yaşken eğilir.” mecazlı bir söz; demek ki deyim.',
      right: 'Bu söz tek başına bir öğüt veriyor: eğitime erken başlanmalı. Yargı bildirdiği için **atasözüdür**.',
      body: 'Mecaz her iki türde de bulunabilir. Ayrımı yapan ölçüt yargıdır: deyim durumu anlatır, atasözü hüküm verir.',
    },
    {
      title: '“Özetleyen” ile “destekleyen” atasözünü karıştırmak',
      wrong: 'Parçanın konusuyla ilgili görünen her atasözü işime yarar.',
      right: 'Özetleyen atasözü parçanın **ana fikrinin** yerine geçebilmeli; destekleyen atasözü ise yazarın savına **dayanak** olmalı. İkisi farklı sorulardır.',
      body: 'Soru kökündeki fiil belirleyicidir: “özetler / anlatır” mı diyor, “destekler / doğrular” mı? İki soruda doğru cevap farklı olabilir.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-deyim-katki-turleri',
      title: 'Kalıp sözün metne beş katkısı',
      lead: 'Katkıyı adlandırabilmen için önce kaç tür katkı olduğunu bilmen gerekir. Bu beşi tanıdığında seçeneklerle eşleştirmek kolaylaşır.',
      blocks: [
        {
          id: 'lgs-deyim-katki-anlatim',
          type: 'prose',
          body: `Bir kalıp söz metne rastgele girmez; yazar onunla belirli bir iş yapar. LGS'de sorulan katkılar pratikte şu beş başlıkta toplanır.

**1. Somutlaştırma.** Soyut bir duygu ya da durum, gözle görülebilir bir görüntüye çevrilir. “Çok üzüldü” yerine “**içi kan ağladı**” dendiğinde üzüntünün derecesi ölçülemez bir bilgi olmaktan çıkar, hissedilir bir sahneye dönüşür. Sınavda bu katkı genellikle “anlatıma canlılık/somutluk katmıştır” biçiminde karşına çıkar.

**2. Kısaltma (anlatım ekonomisi).** Uzun bir durum tek kalıpla verilir. “Kimsenin yardım etmediği, tek başına kalan biri” yerine “**yalnız başına kürek çeken**” denir. Yazı hem kısalır hem yoğunlaşır.

**3. Yargıyı destekleme (dayanak gösterme).** Yazar kendi görüşünü söyler, sonra atasözüyle toplumun ortak deneyimine yaslanır: “Küçük alışkanlıklar büyük sonuçlar doğurur; **damlaya damlaya göl olur**.” Bu, düşünceyi geliştirme yollarından *tanık gösterme*ye yakın bir iştir ve ileride Ders 8'de yeniden karşına çıkacak.

**4. Ana fikri özetleme.** Kalıp söz, metnin tamamının söylediğini tek cümlede toplar. Genellikle paragrafın sonunda durur ve okur onu okuduğunda “bütün yazı bunu anlatıyormuş” der.

**5. Kültürel ortaklık kurma.** Yazar okurla aynı hafızayı paylaştığını gösterir. Bu katkı en çok denemelerde ve köşe yazılarında görülür; anlatımı samimileştirir, okuru metnin içine alır.

Bu beşi ezberlemen gerekmiyor. Yapman gereken, üçüncü durakta “sil ve karşılaştır” testini uyguladıktan sonra kaybolan şeyin bu beşten hangisine benzediğine bakmak.`,
        },
        {
          id: 'lgs-deyim-katki-tablo',
          type: 'table',
          interactive: true,
          title: 'Katkıyı tanı: sil, karşılaştır, adlandır',
          columns: ['Kalıp sözlü hâli', 'Kalıp sözsüz hâli', 'Kaybolan şey', 'Katkının adı'],
          rows: [
            ['Sonucu duyunca **etekleri zil çaldı**.', 'Sonucu duyunca çok sevindi.', 'Sevincin canlı görüntüsü', 'Somutlaştırma'],
            ['Yıllardır bu işte **dirsek çürütmüş** biriydi.', 'Yıllardır bu işte uzun süre çalışmış, emek vermiş biriydi.', 'Uzun açıklama tek kalıpta toplanıyordu', 'Kısaltma'],
            ['Küçük birikim büyür; **damlaya damlaya göl olur**.', 'Küçük birikim zamanla büyür.', 'Görüşü destekleyen ortak deneyim dayanağı', 'Yargıyı destekleme'],
            ['Yazının sonunda: “**Ağaç yaşken eğilir.**”', 'Yazının sonunda hiçbir kapanış cümlesi yok.', 'Metnin tamamını toplayan kapanış', 'Ana fikri özetleme'],
            ['Bizim mahallede **komşu komşunun külüne muhtaçtır**.', 'Bizim mahallede insanlar birbirine ihtiyaç duyar.', 'Okurla paylaşılan ortak kültür sesi', 'Kültürel ortaklık'],
          ],
          caption:
            'Orta sütunu okuduğunda bilgi hâlâ duruyor; kaybolan şey her zaman bilgi değil, etki, dayanak ya da yoğunluk.',
        },
        {
          id: 'lgs-deyim-katki-cumle-analizi',
          type: 'sentence_analysis',
          title: 'Aynı cümlede iki ayrı kalıp, iki ayrı katkı',
          prompt:
            'Aşağıdaki cümlede hem bir deyim hem bir atasözü var ve ikisi farklı iş yapıyor. Parçalara tıklayarak her birinin katkısını gör.',
          segments: [
            {
              text: 'Sınavdan bir hafta önce ders çalışmaya başlayınca',
              label: 'Durum kurulumu',
              explanation:
                'Kalıp söz yok; yalnız olay veriliyor. Katkı sorusunda bu bölüm “kaybolanı” ölçmek için gerekli olan karşılaştırma zeminidir.',
              tone: 'muted',
            },
            {
              text: 'eli ayağına dolaştı;',
              label: 'Deyim → somutlaştırma',
              explanation:
                'Telaşı ve şaşkınlığı düz bir ifadeyle değil, bedensel bir görüntüyle veriyor. Silip “çok telaşlandı” yazarsan bilgi kalır, görüntü gider.',
              tone: 'brand',
            },
            {
              text: 'çünkü hazırlık bir günde olmuyordu:',
              label: 'Yazarın yargısı',
              explanation:
                'Yazar burada kendi görüşünü söylüyor. Bir sonraki parça bu görüşe dayanak arayacak.',
              tone: 'aqua',
            },
            {
              text: 'damlaya damlaya göl olur.',
              label: 'Atasözü → yargıyı destekleme',
              explanation:
                'Yazar kendi görüşünü toplumun ortak deneyimine yaslıyor. Silersen görüş kalır ama dayanağı kalmaz. Katkı burada somutlaştırma değil, desteklemedir.',
              tone: 'success',
            },
          ],
          takeaway:
            'Aynı cümlede iki kalıp söz varsa, ikisinin katkısı da aynı olmak zorunda değildir. Her birini ayrı ayrı sil ve ayrı ayrı karşılaştır.',
        },
        {
          id: 'lgs-deyim-katki-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Deyimlerin bazıları cümlede bir öge gibi görev alır: “göz yummak” bir yüklem, “eli açık” bir sıfat olabilir. Bu, Ders 12’de (Cümlenin Ögeleri) işine yarayacak. Şimdilik şunu not et: deyim cümleye **gömülür**, atasözü cümlenin **yanına** konur.',
        },
      ],
    },

    {
      id: 'lgs-turkce-deyim-secme-sorulari',
      title: '“Özetleyen” mi, “destekleyen” mi? İki soru, iki farklı cevap',
      lead: 'LGS’nin en çok kullandığı iki biçim bunlardır ve soru kökündeki tek bir fiil doğru cevabı değiştirir.',
      blocks: [
        {
          id: 'lgs-deyim-secme-anlatim',
          type: 'prose',
          body: `“Bu parçada anlatılanları **özetleyen** atasözü aşağıdakilerden hangisidir?” ile “Bu parçadaki düşünceyi **destekleyen** atasözü aşağıdakilerden hangisidir?” soruları aynı parçaya sorulabilir ve cevapları farklı olabilir. Farkı anlamak için iki kavramı ayırmak gerekir.

**Özetleyen atasözü**, parçanın **ana fikrinin yerine geçebilen** sözdür. Metni okumamış birine yalnız o atasözünü söylesen, metnin ne anlattığını kabaca anlar. Bu yüzden özetleyen atasözü parçanın tamamını kapsamalıdır; yalnız bir ayrıntıyı karşılıyorsa yanlıştır.

**Destekleyen atasözü**, yazarın savına **dayanak** olan sözdür. Metnin tamamını karşılamak zorunda değildir; yazarın ileri sürdüğü yargıyı doğrulaması yeterlidir. Bu yüzden destekleme sorularında biraz daha dar kapsamlı bir atasözü doğru olabilir.

İki soru biçiminde de çeldiriciler aynı üç yoldan gelir. **Birincisi:** parçanın konusuyla ilgili ama parçanın söylediğinden farklı bir şey söyleyen atasözü. **İkincisi:** parçanın yalnız bir cümlesini karşılayan, tamamını kapsamayan atasözü. **Üçüncüsü:** parçanın tam tersini savunan ama tanıdık geldiği için doğru sanılan atasözü.

Bir uyarı daha: atasözleri birbiriyle her zaman uyuşmaz. “Bir elin nesi var, iki elin sesi var.” ile “Ne ekersen onu biçersin.” farklı durumlar için söylenmiştir; hangisinin doğru olduğu genel olarak tartışılmaz, **bu metinde hangisinin işlediği** sorulur. Atasözünü evrensel bir kanun gibi değil, belirli bir duruma uyan bir yorum gibi düşün.

Son olarak kapsam denetimini alışkanlık hâline getir: seçtiğin atasözü parçanın hem giriş hem sonuç kısmıyla uyuşuyor mu? Yalnız son cümleyle uyuşuyorsa büyük ihtimalle ayrıntıya takılmışsındır.`,
        },
        {
          id: 'lgs-deyim-secme-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'İki soru biçimini ayır',
          columns: ['Özetleyen atasözü', 'Destekleyen atasözü'],
          rows: [
            { label: 'Soru kökündeki fiil', values: ['özetler, anlatır, karşılar', 'destekler, doğrular, dayanak olur'] },
            { label: 'Kapsam', values: ['Parçanın tamamını karşılamalı', 'Yazarın savını doğrulaması yeterli'] },
            { label: 'Test', values: ['Metni bilmeyen biri bu sözle metni tahmin edebilir mi?', 'Yazar “çünkü” deyip bunu ekleyebilir mi?'] },
            { label: 'Sık yapılan hata', values: ['Tek bir ayrıntıyı karşılayan sözü seçmek', 'Konuyla ilgili ama savı doğrulamayan sözü seçmek'] },
          ],
          insight:
            'İki soruda da ilk iş aynıdır: parçanın ana fikrini kendi cümlenle yaz. Ana fikri yazmadan seçeneklere bakarsan, tanıdık gelen atasözü doğru görünür.',
        },
        {
          id: 'lgs-deyim-secme-tuzak',
          type: 'trap',
          title: 'Tanıdık atasözünü doğru sanmak',
          wrong: 'Seçeneklerden birini daha önce çok duymuşum; büyük ihtimalle cevap odur.',
          right: 'Tanıdıklık bir kanıt değildir. Seçtiğim atasözünün parçanın ana fikriyle örtüştüğünü bir cümleyle gösterebilmeliyim.',
          body: 'Soru hazırlayanlar çeldiricileri bilerek çok bilinen atasözlerinden seçer; amaç, hatırlamayı anlamanın yerine koyan öğrenciyi ayırmaktır.',
        },
      ],
    },

    {
      id: 'lgs-turkce-deyim-sinir-durumlar',
      title: 'Sınır durumlar: karıştırılan çiftler',
      lead: 'Deyim–atasözü ayrımının zorlaştığı yerler bellidir. Bu üç durumu tanıdığında ayrım neredeyse hiç zorlamaz.',
      blocks: [
        {
          id: 'lgs-deyim-sinir-anlatim',
          type: 'prose',
          body: `**Birinci sınır durum: cümle biçiminde görünen deyimler.** Bazı deyimler cümle gibi kurulur ve bu yüzden atasözü sanılır: “**Ayağını yorganına göre uzat.**” Bu bir atasözüdür, çünkü öğüt verir. Ama “**pabucu dama atıldı**” bir cümle biçiminde görünse de yalnız bir durumu anlatır; öğüt vermez, dolayısıyla deyimdir. Ölçütün biçim değil yargı olduğunu hatırla.

**İkinci sınır durum: öğüt veriyormuş gibi duran deyimler.** “Kulak asmamak”, “göz yummak” gibi deyimler bir davranışı anlatır; cümlede olumsuz bir ton taşıyabilir. Bu ton, öğüt sanılabilir. Ama öğüt, sözün kendisinden gelmez, yazarın kurduğu cümleden gelir. Deyimi cümleden çıkarıp tek başına yaz: “göz yummak” tek başına bir şey öğütlüyor mu? Hayır.

**Üçüncü sınır durum: özdeyiş mi, atasözü mü?** Ayrım anlamla yapılmaz, **sahiplikle** yapılır. “Bir millet, savaş meydanlarında ne kadar parlak zaferler elde ederse etsin, o zaferlerin kalıcı sonuçlar vermesi ancak irfan ordusuyla mümkündür.” sözü bir yargı bildirir ama söyleyeni bilinir; bu yüzden özdeyiştir. Metinde sözün sahibi anılıyorsa ya da tırnak içinde bir kişiye bağlanıyorsa, özdeyiş olma ihtimali yüksektir.

Bu üç durumda da güvenli yol aynıdır: sözü metinden çıkar, tek başına yaz, iki soruyu sor — **sahibi belli mi?** ve **tek başına bir yargı bildiriyor mu?** İki soruya verdiğin cevap türü kesinleştirir.

Son olarak, LGS'de tür sorusu genellikle tek başına sorulmaz; katkı sorusunun içine gömülür. Türü doğru belirlemen, katkıyı doğru adlandırmanın ilk adımıdır: deyim gördüğünde önce somutlaştırma ve kısaltmayı, atasözü gördüğünde önce destekleme ve özetlemeyi düşünürsün.`,
        },
        {
          id: 'lgs-deyim-sinir-tablo',
          type: 'table',
          interactive: true,
          title: 'Karıştırılan çiftleri ölçütle ayır',
          columns: ['Söz', 'Sahibi belli mi?', 'Tek başına yargı bildirir mi?', 'Türü'],
          rows: [
            ['Ayağını yorganına göre uzat.', 'Hayır', 'Evet — öğüt veriyor', 'Atasözü'],
            ['pabucu dama atılmak', 'Hayır', 'Hayır — durum anlatıyor', 'Deyim'],
            ['Damlaya damlaya göl olur.', 'Hayır', 'Evet — genel gerçek', 'Atasözü'],
            ['göz yummak', 'Hayır', 'Hayır — davranış anlatıyor', 'Deyim'],
            ['“Hayatta en hakiki mürşit ilimdir.”', 'Evet — Atatürk', 'Evet', 'Özdeyiş'],
            ['eli açık olmak', 'Hayır', 'Hayır', 'Deyim'],
          ],
          caption:
            'İki sütunluk ölçüt hiçbir zaman değişmez. “Kulağa öğüt gibi geliyor” bir ölçüt değildir.',
        },
        {
          id: 'lgs-deyim-sinir-hafiza',
          type: 'memory',
          title: 'İki soruluk ayrım',
          body: '**Sahibi var mı?** → özdeyiş. **Yargı var mı?** → atasözü. **İkisi de yok mu?** → deyim.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Deyimin katkısını adlandır',
      prompt:
        'Şu özgün parçayı oku ve altı çizili deyimin metne katkısını belirle: “Okulun ilk günü sınıfa girdiğimde kimseyi tanımıyordum. Sıraya oturdum, önüme baktım, konuşmaya çalıştım ama sesim çıkmadı. O gün boyunca **dilimin ucundaki cümleler** hep içimde kaldı.”',
      steps: [
        { title: '1. Türünü belirle', body: '“Dilimin ucundaki cümleler” kalıplaşmış bir söz grubudur, öğüt vermez, bir durumu anlatır: **deyim**.' },
        { title: '2. Anlamını bağlamdan doğrula', body: 'Söylenmek istenen ama söylenemeyen sözler. Metindeki “sesim çıkmadı” ifadesi bunu destekliyor.' },
        { title: '3. Sil ve karşılaştır', body: 'Deyimsiz hâli: “O gün boyunca söylemek istediğim şeyleri söyleyemedim.” Bilgi aynı. Kaybolan şey: söyleyememenin fiziksel, neredeyse dokunulabilir görüntüsü.' },
        { title: '4. Katkıyı adlandır', body: 'Soyut bir çekingenlik duygusu, dilin ucunda duran somut bir görüntüye çevrilmiş: **somutlaştırma**, yanında da anlatım ekonomisi.' },
        { title: '5. Seçeneği kanıtla eşleştir', body: '“Söyleyemediğini anlatmıştır” seçeneği yalnız anlamı verir; doğru seçenek “soyut bir duyguyu somut bir görüntüyle vererek anlatıma canlılık katmıştır” olmalıdır.' },
      ],
      answer:
        'Katkı: anlatıma somutluk ve canlılık katmak. Deyim, söylenemeyen sözleri dilin ucunda duran bir nesne gibi göstererek çekingenliği hissedilir kılıyor.',
      takeaway: 'Anlamı söylemek cevabın yarısıdır; katkıyı adlandırmadan cevap tamamlanmaz.',
    },
    {
      title: 'Seviye 2 — Parçayı özetleyen atasözünü seç',
      prompt:
        'Parça: “Kardeşim her akşam beş sayfa okuyor. Bir günde ilerleme görünmüyor; ama yılın sonunda okuduğu kitapların sayısı benimkinin üç katıydı. Oysa ben ara sıra oturup bir gecede yüz sayfa okuyor, sonra haftalarca kitaba dokunmuyordum.” Bu parçayı özetleyen atasözü hangisidir? (A) Damlaya damlaya göl olur. (B) Acele işe şeytan karışır. (C) Bir elin nesi var, iki elin sesi var. (D) Ağaç yaşken eğilir.',
      steps: [
        { title: '1. Ana fikri kendi cümlenle yaz', body: 'Seçeneklere bakmadan: “Düzenli ve az ama sürekli çalışma, aralıklı ve yoğun çalışmadan daha çok sonuç verir.”' },
        { title: '2. Kapsam denetimi yap', body: 'Doğru atasözü hem kardeşin düzenini hem anlatıcının düzensizliğini karşılamalı; yalnız birini karşılıyorsa yetersizdir.' },
        { title: '3. Seçenekleri ele', body: '(B) acele etmeye karşı uyarır; parçada acele değil süreksizlik var. (C) iş birliğini anlatır; parçada iki kişi çalışmıyor, karşılaştırılıyor. (D) eğitime erken başlamayı anlatır; parçada yaş konusu yok.' },
        { title: '4. Kalanı doğrula', body: '(A) küçük ama sürekli birikimlerin büyük sonuç verdiğini söyler. Ana fikirle birebir örtüşüyor ve parçanın iki tarafını da karşılıyor.' },
        { title: '5. Tersten kontrol et', body: 'Metni bilmeyen birine yalnız “Damlaya damlaya göl olur.” desen, parçanın ne anlattığını kabaca tahmin edebilir. Özetleme testi geçti.' },
      ],
      answer: '(A) Damlaya damlaya göl olur.',
      takeaway:
        'Özetleme sorusunda önce ana fikri kendi cümlenle yaz. Yazmadan bakarsan tanıdık gelen atasözü kolayca doğru görünür.',
    },
    {
      title: 'Seviye 3 — Aynı parça, farklı soru kökü',
      prompt:
        'Yukarıdaki parçaya bu kez şöyle soralım: “Anlatıcının kendi çalışma biçimini eleştirdiğini **destekleyen** söz hangisidir?” (A) Damlaya damlaya göl olur. (B) Sakla samanı, gelir zamanı. (C) Ağaç yaşken eğilir. (D) Acele işe şeytan karışır.',
      steps: [
        { title: 'Soru kökündeki fiili oku', body: '“Destekleyen” deniyor. Artık parçanın tamamını karşılayan söz değil, **belirli bir yargıyı doğrulayan** söz aranıyor.' },
        { title: 'Hangi yargı destekleniyor?', body: 'Anlatıcının eleştirdiği şey: bir gecede yüz sayfa okuyup sonra haftalarca ara vermek. Yani düzensiz ve ani çalışma.' },
        { title: 'Seçenekleri savla eşleştir', body: '(B) biriktirmeyi anlatır, düzensizlikle ilgisi yok. (C) yaş ve eğitim başlangıcıyla ilgili. (D) aceleyle yapılan işin iyi sonuç vermediğini söyler — anlatıcının ani, sıkıştırılmış okumasını doğrudan doğrular.' },
        { title: 'Neden (A) burada zayıflıyor?', body: '(A) doğru bir yargıdır ve parçayı özetler; ama anlatıcının **kendi biçimine yönelik eleştirisini** doğrudan desteklemez, kardeşin biçimini över. Soru kökü değişince en uygun seçenek de değişti.' },
      ],
      answer: '(D) Acele işe şeytan karışır.',
      takeaway:
        'Aynı parçaya sorulan iki soruda iki farklı atasözü doğru olabilir. Belirleyici olan parça değil, soru kökündeki fiildir.',
    },
  ],

  questionClue: {
    concept: 'kalıp söz katkısı sorusu',
    statement:
      'Soru kökünde “katkısı”, “anlatıma kazandırdığı”, “kullanılma amacı”, “özetleyen”, “destekleyen” gibi ifadeler varsa sorulan şey anlam değil işlevdir.',
    clues: [
      'Altı çizili bir deyim ya da paragraf sonunda tek başına duran bir atasözü',
      'Soru kökünde “katkı / amaç / kazandırdığı” ifadeleri',
      'Seçeneklerin “…katmıştır”, “…desteklemiştir”, “…özetlemiştir” biçiminde bitmesi',
      'Seçeneklerden birinin yalnızca kalıp sözün anlamını vermesi',
      'Soru kökünde “özetleyen” veya “destekleyen” fiillerinin ayrıca belirtilmesi',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, sözlük bilgisini değil metin çözümlemesini ölçüyor. Çözüm yolu sil-ve-karşılaştır testidir; kaybolan şeyi adlandırdığın anda doğru seçenek görünür hâle gelir.',
    boundary:
      'Bu ipuçlarını “altı çizili söz varsa cevap somutlaştırmadır” gibi bir kısayola çevirme. Deyim de yargıyı destekleyebilir, atasözü de anlatıma canlılık katabilir; katkıyı metin belirler.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımının ölçülebileceği soru biçimleridir. Kalıbı tanımak cevabı vermez; hangi testi uygulayacağını söyler.',
    patterns: [
      'Bir parçadaki deyimin anlatıma katkısının sorulması',
      'Parçada anlatılanları özetleyen atasözünün seçtirilmesi',
      'Yazarın görüşünü destekleyen atasözünün seçtirilmesi',
      'Verilen sözlerden hangisinin deyim, hangisinin atasözü olduğunun sorulması',
      'Bir atasözünün hangi durumu anlattığının, kısa bir olayla eşleştirilmesi',
      'Aynı parçada geçen iki kalıp sözün farklı işlevlerinin sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        '“Kulak asmamak” ile “Ayağını yorganına göre uzat.” sözlerinden hangisi atasözüdür? Kararını, dersteki iki ölçütle gerekçelendir.',
      hint: 'Sözü cümleden çıkar, tek başına yaz ve iki soruyu sor: sahibi belli mi, yargı bildiriyor mu?',
      answer:
        '“Ayağını yorganına göre uzat.” atasözüdür: sahibi belli değil ve tek başına bir öğüt veriyor (gelirine göre harca). “Kulak asmamak” ise bir davranışı anlatır, öğüt vermez; deyimdir. Cümle biçiminde görünmesi atasözü yapmaz.',
    },
    {
      prompt:
        'Bir yazar tasarrufu anlattığı yazısını “Sakla samanı, gelir zamanı.” diyerek bitiriyor. Bu atasözünün metne katkısı, aşağıdakilerden hangisine daha yakındır: somutlaştırma mı, ana fikri özetleme mi? Gerekçeni yaz.',
      hint: 'Sil ve karşılaştır: atasözünü kaldırınca metin neyi kaybediyor — görüntüyü mü, kapanışı mı?',
      answer:
        'Ana fikri özetleme. Atasözü yazının sonunda duruyor ve metnin tamamının söylediğini tek cümlede topluyor. Somutlaştırma olsaydı soyut bir duyguyu gözle görülür bir görüntüye çevirmesi gerekirdi; burada yapılan bu değil, metni bir hükme bağlamaktır.',
    },
    {
      prompt:
        'Bir soruda seçeneklerden biri “deyimin anlamını açıklamaktadır”, diğeri “anlatıma somutluk katmıştır” diyor. Soru kökünde “katkısı” ifadesi geçiyorsa hangisi doğrudur? Neden?',
      hint: 'Katkı sorusunda anlam seçeneği ne işe yarar?',
      answer:
        '“Anlatıma somutluk katmıştır” doğrudur. Anlam seçeneği doğru bilgi taşıdığı için inandırıcı görünür ama sorunun cevabı değildir: soru işlevi sorar, anlamı değil. Anlam, katkıya giden yoldaki bir ara adımdır, varış noktası değil.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey kalıp söz dağarcığı değil, metin çözümlemesi',
    body:
      'MEB’in merkezî sınav kılavuzu soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama ve sonuç çıkarma becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı şudur: kaç deyim bildiğin değil, bir deyimi gördüğünde metinde ne iş yaptığını görebilip göremediğin ölçülür. Nitekim çeldiriciler çoğu zaman deyimin doğru anlamını verir; onları eleyebilmen için anlamın ötesine geçmiş olman gerekir.',
    measures: [
      'Deyim, atasözü ve özdeyişi ölçütle ayırabilme',
      'Kalıp sözün metindeki işlevini adlandırabilme',
      'Parçanın ana fikriyle atasözünün kapsamını karşılaştırabilme',
      'Soru kökündeki fiile göre aranan cevabı değiştirebilme',
      'Doğru anlamı veren ama soruya cevap vermeyen seçeneği eleyebilme',
      'Bir kalıp söz kaldırıldığında metnin ne kaybettiğini gösterebilme',
    ],
  },

  simulation: {
    title: 'Mini uygulama — özgün parça',
    passage: `Dedem bahçeye her yıl aynı mevsimde fidan dikerdi. Ben “Bu ağaç meyve verene kadar kaç yıl geçecek?” diye sorduğumda gülerdi. Bir gün beni fidanın yanına çağırdı, toprağı gösterdi ve “Bugün diktiğim ağacın gölgesinde ben oturmayacağım.” dedi. O gün anladım: bazı işler, sonucunu görmek için değil, **sırayı sürdürmek için** yapılır.`,
    question: 'Bu parçada altı çizili sözün anlatıma katkısı aşağıdakilerden hangisidir?',
    options: [
      {
        text: 'Dedenin bahçecilik bilgisinin genişliğini örneklerle göstermesi',
        explanation:
          'Parçada dedenin bilgisi değil, bir davranışın gerekçesi anlatılıyor. Metinde bahçecilik tekniğine dair tek bir ayrıntı bile yok. Konuya uyar görünen ama metne dayanmayan seçenek.',
      },
      {
        text: 'Kuşaklar arası devamlılık düşüncesini kısa ve somut bir ifadeyle özetlemesi',
        explanation:
          'Doğru cevap. Söz, parçanın tamamında kurulan düşünceyi — bugünün emeğinin yarına bırakılması — tek bir ifadede topluyor. “Bugün diktiğim ağacın gölgesinde ben oturmayacağım.” cümlesiyle doğrudan bağlanıyor.',
      },
      {
        text: 'Anlatıcının dedesine duyduğu özlemi dile getirmesi',
        explanation:
          'Metinde özlem bildiren tek bir ifade yok; anlatıcı bir anıyı aktarıyor ve ondan bir sonuç çıkarıyor. Duygusal olarak inandırıcı ama metinde karşılığı olmayan seçenek.',
      },
      {
        text: 'Ağaç dikmenin ekonomik yararlarını vurgulaması',
        explanation:
          'Parçada yarar, kazanç ya da ekonomi ile ilgili hiçbir ifade geçmiyor. Konuyla uzaktan ilgili görünen ama metnin söylediğinden bağımsız bir seçenek.',
      },
      {
        text: 'Dedenin sorulara doğrudan cevap vermeyi sevmediğini göstermesi',
        explanation:
          'Metinde dedenin gülüp doğrudan cevap vermediği doğru; ama bu, altı çizili sözün katkısı değil, parçanın bir ayrıntısı. Çeldiricinin klasik türü: metinde gerçekten var olan bir ayrıntıya yaslanmak.',
      },
    ],
    answer_index: 1,
    stem_analysis:
      'Soru kökü “anlatıma katkısı” diyor; yani sözün anlamı değil, metinde yaptığı iş soruluyor. Söz parçanın sonunda duruyor ve bir sonuç cümlesinin içinde geçiyor — bu konum, özetleme katkısını güçlü bir aday hâline getirir.',
    critical_point:
      'Kritik nokta, seçeneklerin üçünün de metinde gerçekten bulunan bir ayrıntıya dokunması. Ayrıntıya dokunmak yetmez; seçeneğin **altı çizili sözün işlevini** açıklaması gerekir. Sil-ve-karşılaştır testini uygula: sözü kaldırırsan parça bir sonuca bağlanmadan biter.',
    takeaway:
      'Katkı sorularında doğru seçenek, metinde en çok geçen konuyu değil, altı çizili sözün üstlendiği işi anlatır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdakilerden hangisi **deyim** değildir?',
      options: [
        'göz yummak',
        'eli açık olmak',
        'Ağaç yaşken eğilir.',
        'pabucu dama atılmak',
      ],
      answer_index: 2,
      explanation:
        '“Ağaç yaşken eğilir.” tek başına bir öğüt veriyor: eğitime erken başlanmalı. Yargı bildirdiği ve söyleyeni belli olmadığı için atasözüdür. Diğer üçü birer durumu ya da davranışı anlatır, öğüt vermez; bu yüzden deyimdir. Mecazlı olmak tek başına deyim yapmaz.',
    },
    {
      purpose: 'apply',
      question:
        '“Yıllardır aynı atölyede çalışan usta, çırağına önce süpürge tutmayı öğretti. ‘Acelen ne?’ dedi, ‘**Sabreden derviş muradına ermiş.**’” Bu parçadaki atasözünün katkısı aşağıdakilerden hangisidir?',
      options: [
        'Ustanın çırağa duyduğu güveni somutlaştırmıştır',
        'Ustanın öğüdünü toplumun ortak deneyimine dayandırarak desteklemiştir',
        'Atölyedeki çalışma düzenini ayrıntılarıyla betimlemiştir',
        'Çırağın acelesinin haklı olduğunu göstermiştir',
      ],
      answer_index: 1,
      explanation:
        'Usta önce kendi görüşünü söylüyor (“Acelen ne?”), sonra atasözüyle o görüşe dayanak getiriyor. Katkı budur. Birinci seçenek güvenden söz ediyor ama metinde güven bildiren bir ifade yok. Üçüncü seçenek betimleme diyor; parçada atölyenin hiçbir görsel ayrıntısı verilmemiş. Dördüncü seçenek metnin tam tersini söylüyor.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, “Bu parçadaki deyimin anlatıma katkısı nedir?” sorusuna “Çok korktuğunu anlatmıştır.” cevabını veriyor. Bu öğrencinin yaptığı hata aşağıdakilerden hangisidir?',
      options: [
        'Katkı sorusuna anlam cevabı vermek',
        'Deyimi atasözü sanmak',
        'Parçanın ana fikrini yanlış belirlemek',
        'Sözün sahibini yanlış bilmek',
      ],
      answer_index: 0,
      explanation:
        'Öğrenci deyimin anlamını doğru bulmuş olabilir; ama soru işlevi istiyordu. Doğru cevap “korkuyu somut bir görüntüyle vererek anlatıma canlılık katmıştır” biçiminde olmalıydı. Öğrenci türü karıştırmıyor, ana fikri de tartışmıyor; yalnız sorunun ne istediğini gözden kaçırıyor.',
    },
  ],

  summary: [
    'T.8.3.6 kazanımı kalıp sözün anlamını değil, **metne katkısını** sorar.',
    'Ayrım ölçütü ikidir: sahibi belli mi (özdeyiş), tek başına yargı bildiriyor mu (atasözü). İkisi de yoksa deyimdir.',
    'Mecazlı olmak deyim yapmaz; atasözlerinin de mecazlısı vardır.',
    'Katkıyı bulmanın yolu “sil ve karşılaştır”dır: kalıp sözü kaldır, ne kaybolduğuna bak.',
    'Beş tipik katkı: somutlaştırma, kısaltma, yargıyı destekleme, ana fikri özetleme, kültürel ortaklık kurma.',
    'Deyim cümleye gömülür ve bir öge gibi görev alır; atasözü genellikle cümlenin yanına konur.',
    '“Özetleyen” atasözü parçanın tamamını karşılamalı; “destekleyen” atasözü yazarın savını doğrulaması yeterli.',
    'Aynı parçaya sorulan iki farklı soru kökünde iki farklı atasözü doğru olabilir.',
    'Katkı sorusunda kalıp sözün anlamını veren seçenek çoğu zaman çeldiricidir.',
    'Tanıdıklık kanıt değildir: seçtiğin atasözünün ana fikirle örtüştüğünü bir cümleyle gösterebilmelisin.',
  ],

  next: [
    'Cümlede Anlam İlişkileri: Neden, Amaç, Koşul, Karşılaştırma (T.8.3.25)',
    'Söz Sanatları: Benzetme, Kişileştirme, Konuşturma, Karşıtlık, Abartma (T.8.3.7)',
    'Düşünceyi Geliştirme Yolları (T.8.3.34)',
  ],
})

export default lesson
