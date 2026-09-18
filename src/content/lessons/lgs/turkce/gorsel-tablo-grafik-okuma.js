import { createLgsTurkishLesson } from './factory.js'

/**
 * LGS TÜRKÇE — Görsel Okuma
 * Kazanım : T.8.3.32 · T.8.3.27 · T.8.3.35
 * Dayanak : MEB Türkçe Dersi Öğretim Programı, Ankara 2019, 8. sınıf
 *
 * KAZANIM AÇIKLAMALARI
 * T.8.3.27 a) Çizgi roman ve karikatürleri yorumlayarak görüşlerini
 *            bildirmeleri sağlanır.
 *          b) Haberi/bilgiyi görsel yorumcuların nasıl ilettikleri
 *            üzerinde durulur.
 * T.8.3.35 Kullanım kılavuzları inceletilir.
 *
 * NOT: "Görsel Okuma" başlığı kütüphane konu ağacında henüz yoktur;
 * supabase/migration_lgs_konu_tamamlama.sql ile eklenmesi önerilmiştir
 * ve kullanıcı onayı beklemektedir. Projedeki LGS_Turkce_Testleri soru
 * bankasında "Gorsel_Okuma" klasörü zaten bulunmaktadır.
 */

const lesson = createLgsTurkishLesson({
  slug: 'lgs-turkce-gorsel-tablo-grafik-okuma',
  topic: 'Görsel Okuma',
  order: 1,
  title: 'Görsel, Tablo ve Grafik Okuma',
  subtitle:
    'Grafik yalan söylemez ama her şeyi de söylemez. Veriden çıkanla çıkmayanı ayırmayı öğreneceğiz.',
  minutes: 43,
  kazanimlar: [
    { kod: 'T.8.3.32', metin: 'Grafik, tablo ve çizelgeyle sunulan bilgileri yorumlar.' },
    { kod: 'T.8.3.27', metin: 'Görsellerle ilgili soruları cevaplar.' },
    { kod: 'T.8.3.35', metin: 'Metindeki iş ve işlem basamaklarını kavrar.' },
  ],
  prerequisites: [
    { topic: 'Metinler arası karşılaştırma ve çıkarım', why: 'Veriden çıkarılabilen ile çıkarılamayanı ayırmanın testi orada kuruldu.' },
    { topic: 'Medya metinleri', why: 'Görsellerin de bir amacı vardır; amaç sorgusu burada da işler.' },
  ],
  outcomes: [
    'Bir grafiği başlık, eksen, birim ve kaynak sırasıyla okuyabileceksin.',
    'Veriden zorunlu olarak çıkan yargı ile çıkmayanı ayırabileceksin.',
    'Yüzde ile sayı arasındaki farkı gösterebileceksin.',
    'Bir karikatürün ilettiği mesajı görselden çıkarabileceksin.',
    'Bir kullanım kılavuzundaki işlem basamaklarını sırayla izleyebileceksin.',
  ],

  opening: {
    title: 'Veri yalan söylemez, ama her şeyi de söylemez',
    lead: 'Grafik sorularında hata bilgiden değil, verinin ölçmediği bir şeyi ondan çıkarmaktan doğar.',
    body: `Bir tabloda şunu gördüğünü düşün: bir okulun kütüphanesinden ödünç alınan kitap sayısı 2024’te 1.200, 2025’te 1.800.

Bundan ne çıkar? **Ödünç alınan kitap sayısı artmıştır.** Bu, tablonun doğrudan söylediği şeydir.

Peki şu çıkar mı: “Öğrenciler daha çok okumaya başladı.”? **Çıkmaz.** Ödünç almak okumak değildir; öğrenci alıp okumamış da olabilir. Ayrıca okul mevcudu artmış olabilir; kişi başına düşen sayı değişmemiş olabilir.

İşte bütün konu bu farkta: **verinin söylediği** ile **veriden çıkarmaya kalkıştığımız** arasındaki fark.

MEB 8. sınıf programındaki **T.8.3.32** kazanımı grafik, tablo ve çizelgeyle sunulan bilgilerin yorumlanmasını ister. **T.8.3.27** görsellerle ilgili soruların cevaplanmasını ister ve açıklamasında iki şeyi anar: çizgi roman ve karikatürlerin yorumlanması; haberi ve bilgiyi **görsel yorumcuların nasıl ilettiği**. **T.8.3.35** ise metindeki iş ve işlem basamaklarının kavranmasını ister ve açıklamasında kullanım kılavuzlarının incelenmesini söyler.

Üçü de aynı beceriye bakar: **sözcük olmayan bir kaynaktan doğru bilgi çıkarmak.**

Bu derste üç iş yapacağız:

**1. Grafik ve tabloyu sırayla okumayı öğreneceğiz** — başlık, eksen, birim, kaynak, veri.
**2. Çıkarım denetimini uygulayacağız** — bu yargı veriden zorunlu olarak çıkıyor mu?
**3. Karikatür ve kullanım kılavuzu okumayı çalışacağız.**

Baştan bir kural koyalım: bir grafikten çıkardığın her yargıyı, grafikteki hangi sayıya dayandığını göstererek savunabilmelisin.`,
  },

  concepts: [
    {
      term: 'Başlık',
      body: 'Grafiğin ya da tablonun neyi ölçtüğünü söyler. Okumaya her zaman buradan başlanır; başlığı atlayan okur, yanlış şeyi yorumlar.',
    },
    {
      term: 'Eksen ve birim',
      body: 'Sütun ve çizgi grafiklerinde yatay eksen genellikle zamanı ya da kategoriyi, dikey eksen ölçülen değeri gösterir. **Birim** kritik öneme sahiptir: kişi mi, adet mi, yüzde mi, saat mi?',
    },
    {
      term: 'Sütun grafiği',
      body: 'Kategorileri ya da dönemleri karşılaştırmak için kullanılır. Hangi sütun daha yüksek sorusunu kolay cevaplatır.',
    },
    {
      term: 'Çizgi grafiği',
      body: 'Zaman içindeki değişimi gösterir. Yükselme, düşme ve sabit kalma yönü kolayca okunur; ama değişimin **nedeni** grafikte yazmaz.',
    },
    {
      term: 'Daire grafiği',
      body: 'Bir bütünün parçalara nasıl dağıldığını yüzdeyle gösterir. Yüzde artışı sayı artışı anlamına gelmeyebilir; çünkü bütün de değişmiş olabilir.',
    },
    {
      term: 'İşlem basamağı',
      body: 'Bir işin yapılış sırasını gösteren adımlardır. Kullanım kılavuzlarında ve yönergelerde bulunur. Sıra değiştirilemez; bir adım atlanırsa sonuç değişir.',
    },
  ],

  why: {
    question: 'Neden grafikten “neden” çıkarılamaz?',
    body: `Çünkü grafik bir **ölçümdür**, bir **açıklama değil.** Grafik “ne oldu?” sorusunu cevaplar; “neden oldu?” sorusunu cevaplamaz.

Bir örnek: bir grafikte dondurma satışlarının yaz aylarında arttığı ve aynı aylarda deniz kazalarının da arttığı görülüyor. Bundan “dondurma yemek deniz kazasına yol açıyor” çıkar mı? Elbette çıkmaz. İki olay aynı anda artıyor; ama birini öteki doğurmuyor. Üçüncü bir etken (sıcaklık, tatil) ikisini birden etkiliyor.

Bu, Çıkarım dersinde kurduğumuz kuralın veri üzerindeki karşılığıdır: **iki şeyin birlikte değişmesi, birinin ötekine yol açtığını göstermez.**

Grafiklerde ikinci büyük tuzak **yüzde–sayı** karışıklığıdır. Bir daire grafiğinde bir dilimin yüzdesi artmış olabilir; ama toplam küçüldüyse o dilimin gerçek sayısı azalmış olabilir. Örnek: bir kütüphanenin roman oranı %30’dan %40’a çıkmış olabilir; ama toplam kitap sayısı 1.000’den 500’e düştüyse roman sayısı 300’den 200’e inmiştir. Yüzde arttı, sayı azaldı.

Üçüncü tuzak **birim atlamaktır.** Dikey eksende “bin kişi” yazıyorsa, 15 değeri 15 kişi değil 15.000 kişidir. Birimi okumadan yapılan yorum bin kat yanılabilir.

Dördüncü tuzak **zaman aralığıdır.** Bir grafik yalnız üç yılı gösteriyorsa, “her yıl artıyor” demek yanlıştır; yalnız o üç yıl için konuşabilirsin.

Bu dört tuzağın ortak çözümü şudur: **her yorumu grafikteki bir sayıya ya da etikete dayandır.** Dayandıramıyorsan o yorum veriden çıkmıyordur.`,
  },

  decision: {
    title: 'Grafik ve tablo okuma yolu',
    lead: 'Veriye bakmadan önce çerçeveyi oku. Çerçeveyi atlayan yorumun yanılma payı yüksektir.',
    intro:
      'Bir grafik ya da tabloyla karşılaştığında şu beş durağı uygula. İlk üç durak henüz yorum yapmadan tamamlanır.',
    steps: [
      {
        title: '1. Başlığı oku',
        body: 'Grafik neyi ölçüyor? Hangi topluluk, hangi konu? Başlığı okumadan sayılara bakmak, neyin sayısına baktığını bilmemektir.',
      },
      {
        title: '2. Eksenleri ve birimi oku',
        body: 'Yatay eksende ne var (yıl, kategori), dikey eksende ne var (sayı, yüzde, saat)? **Birim nedir?** “Bin kişi” mi, “adet” mi, “%” mi? Bu adım en çok atlanan ve en pahalı adımdır.',
      },
      {
        title: '3. Zaman aralığını ve kaynağı kontrol et',
        body: 'Veri hangi yılları kapsıyor? Kaynağı belirtilmiş mi? Kapsam dışında konuşmak, veriden çıkmayan bir yargı üretir.',
      },
      {
        title: '4. Veriyi oku',
        body: 'En büyük ve en küçük değer hangisi? Değişim yönü nedir — artıyor, azalıyor, dalgalanıyor? Bu adımda yalnız **okursun**, yorumlamazsın.',
      },
      {
        title: '5. Çıkarım denetimini uygula',
        body: 'Her yargı için sor: bu, grafikteki hangi sayıya dayanıyor? Dayanamıyorsa veriden çıkmaz. Özellikle “neden”, “niyet” ve “gelecek” yargılarına dikkat et.',
      },
    ],
    takeaway: 'Grafikten çıkardığın her yargıyı bir sayıya dayandırabilmelisin.',
  },

  decisionTree: {
    title: 'Bu yargı veriden çıkar mı?',
    intro:
      'Üç kontrol, grafik sorularının neredeyse tamamını çözer.',
    checks: [
      {
        question: 'Yargı, grafikte doğrudan okunabiliyor mu?',
        yes: 'Çıkarılabilir. Örnek: “2025’te ödünç alınan kitap sayısı 2024’ten fazladır.”',
        no: 'Doğrudan okunamıyor; ikinci kontrole geç.',
      },
      {
        question: 'Yargı, grafikteki iki ya da daha çok veriden zorunlu olarak çıkıyor mu?',
        yes: 'Çıkarılabilir. Örnek: “Üç yıl boyunca artış sürmüştür.”',
        no: 'Zorunlu değil; üçüncü kontrole geç.',
      },
      {
        question: 'Yargı, grafiğin ölçmediği bir şeyden mi söz ediyor (neden, niyet, gelecek, kalite)?',
        yes: 'Çıkarılamaz. Grafik ne olduğunu ölçer; neden olduğunu ölçmez.',
        no: 'Yargıyı yeniden yaz; muhtemelen veriyi yanlış okudun.',
      },
    ],
    takeaway:
      'Grafik “ne oldu?” sorusunu cevaplar. “Neden oldu?”, “ne olacak?” ve “iyi mi oldu?” soruları grafiğin dışındadır.',
  },

  comparison: {
    title: 'Üç grafik türü, üç iş',
    columns: ['Sütun grafiği', 'Çizgi grafiği', 'Daire grafiği'],
    rows: [
      { label: 'Ne gösterir?', values: ['Kategorileri karşılaştırır', 'Zaman içindeki değişimi gösterir', 'Bütünün dağılımını gösterir'] },
      { label: 'Kolay okunan', values: ['Hangisi daha çok?', 'Artıyor mu azalıyor mu?', 'Hangi dilim daha büyük?'] },
      { label: 'Dikkat edilecek', values: ['Eksenin sıfırdan başlayıp başlamadığı', 'Zaman aralığının kapsamı', 'Yüzde–sayı farkı'] },
      { label: 'Tipik tuzak', values: ['Birimi atlamak', '“Hep artıyor” demek', 'Yüzde artışını sayı artışı sanmak'] },
      { label: 'Çıkarılamayan', values: ['Neden bu kadar?', 'Gelecek yıl ne olacak?', 'Hangi dilim daha değerli?'] },
    ],
    insight:
      'Üç grafik türü de aynı sınırı paylaşır: ölçtükleri şeyi gösterir, ölçmedikleri şey hakkında sessizdir.',
  },

  traps: [
    {
      title: 'Grafikten neden çıkarmak',
      wrong: 'Kitap ödünç alma sayısı arttı; demek ki yeni kütüphane görevlisi başarılı oldu.',
      right: 'Grafik yalnız sayının arttığını gösteriyor. Artışın sebebini ölçmüyor; başka pek çok etken olabilir.',
      body: 'Grafik “ne oldu?” sorusunu cevaplar, “neden oldu?” sorusunu değil. Neden yargıları veriden çıkmaz.',
    },
    {
      title: 'Yüzde artışını sayı artışı sanmak',
      wrong: 'Roman oranı %30’dan %40’a çıkmış; demek ki roman sayısı artmış.',
      right: 'Toplam da değişmiş olabilir. Toplam 1.000’den 500’e düştüyse roman sayısı 300’den 200’e inmiştir: oran arttı, sayı azaldı.',
      body: 'Daire grafikleri oran gösterir. Sayı yorumu yapabilmek için toplamın da bilinmesi gerekir.',
    },
    {
      title: 'Birimi okumadan yorumlamak',
      wrong: 'Grafikte 15 yazıyor; 15 kişi demek.',
      right: 'Dikey eksende “bin kişi” yazıyorsa 15 değeri 15.000 kişidir. Birimi okumadan yapılan yorum bin kat yanılır.',
      body: 'Birim, grafiğin en küçük yazılan ama en çok yanıltan bölümüdür. Eksen etiketlerini mutlaka oku.',
    },
  ],

  deepDiveSections: [
    {
      id: 'lgs-turkce-gorsel-grafik-okuma',
      title: 'Grafiği sırayla okumak',
      lead: 'Önce çerçeve, sonra veri. Sıra değişirse yorum da değişir.',
      blocks: [
        {
          id: 'lgs-gorsel-grafik-anlatim',
          type: 'prose',
          body: `Grafik okumanın bir sırası vardır ve bu sıra rastgele değildir.

**Birinci adım: başlık.** Grafik neyi ölçüyor? “Okul kütüphanesinden ödünç alınan kitap sayısı” ile “okulda okunan kitap sayısı” aynı şey değildir. Başlık, neyin sayısına baktığını söyler.

**İkinci adım: eksenler ve birim.** Yatay eksende genellikle zaman ya da kategori bulunur; dikey eksende ölçülen değer. Birim bu adımda okunur: adet mi, kişi mi, yüzde mi, bin kişi mi?

Birimi atlamak en pahalı hatadır. “Bin kişi” birimli bir grafikte 15 değeri 15.000’dir. Bir sorunun cevabını bin kat yanlış vermek, bilgi eksikliğinden değil dikkat eksikliğinden doğar.

**Üçüncü adım: zaman aralığı ve kaynak.** Grafik hangi yılları kapsıyor? Kaynağı belirtilmiş mi? Bu adım, kapsam dışında konuşmanı engeller. Üç yıllık bir grafikten “her yıl artıyor” diye genel bir kural çıkaramazsın.

**Dördüncü adım: veriyi okumak.** En büyük değer hangisi, en küçük hangisi? Eğilim ne yönde: artıyor, azalıyor, dalgalanıyor? Bu adımda yalnız okursun; henüz yorum yapmazsın.

**Beşinci adım: yorum ve denetim.** Şimdi yorumlayabilirsin — ama her yorumu bir sayıya dayandırarak.

Tablolar da aynı sırayla okunur. Farkı, tabloların genellikle daha çok değişken taşımasıdır: satır ve sütun başlıklarını dikkatle okumak gerekir. Bir tabloda “hangi satır, hangi sütun?” sorusunu karıştırmak, tamamen yanlış bir sayı okumaya yol açar.

Son bir uyarı: bazı grafiklerde dikey eksen sıfırdan başlamaz. Bu, küçük farkların büyük görünmesine yol açar. Eksenin başlangıç değerini kontrol etmek, görsel izlenimle gerçek farkı ayırmanı sağlar.`,
        },
        {
          id: 'lgs-gorsel-grafik-tablo',
          type: 'table',
          interactive: true,
          title: 'Örnek tablo — okul kütüphanesinden ödünç alınan kitap sayısı',
          columns: ['Yıl', 'Roman', 'Bilim', 'Şiir', 'Toplam'],
          rows: [
            ['2022', '420', '180', '100', '700'],
            ['2023', '480', '260', '110', '850'],
            ['2024', '510', '390', '100', '1.000'],
            ['2025', '540', '560', '100', '1.200'],
            ['Değişim (2022→2025)', '+120', '+380', '0', '+500'],
          ],
          caption:
            'Birim: adet. Kapsam: 2022–2025. Bu tabloya bakarak şiir okumasının “azaldığı” söylenemez: sayı sabit kalmış, yalnız toplam içindeki oranı düşmüştür.',
        },
        {
          id: 'lgs-gorsel-grafik-analiz',
          type: 'sentence_analysis',
          title: 'Aynı tablo, dört yorum',
          prompt:
            'Yukarıdaki tabloya dayanan dört yorumu inceleyeceğiz. Parçalara tıklayarak hangisinin veriden çıktığını gör.',
          segments: [
            {
              text: '“2025’te en çok ödünç alınan tür bilimdir.”',
              label: 'Doğrudan okunabilir',
              explanation:
                '2025 satırında bilim 560, roman 540, şiir 100. Bilim en yüksek değer. Tabloda doğrudan okunuyor: çıkarılabilir.',
              tone: 'success',
            },
            {
              text: '“Şiir ödünç alma sayısı dört yılda azalmıştır.”',
              label: 'Veriye aykırı',
              explanation:
                'Şiir 100, 110, 100, 100: azalma yok, neredeyse sabit. Toplam içindeki **oranı** düşmüş olabilir ama sayısı düşmemiş. Yüzde–sayı karışıklığının tipik biçimi.',
              tone: 'danger',
            },
            {
              text: '“Bilim türüne ilgi romandan daha hızlı artmıştır.”',
              label: 'İki veriden çıkarılabilir',
              explanation:
                'Bilim +380, roman +120. İki değişim karşılaştırıldığında bilimin artışı daha büyük. İki sayıdan zorunlu olarak çıkıyor: çıkarılabilir.',
              tone: 'aqua',
            },
            {
              text: '“Öğrenciler artık bilim kitaplarını daha çok seviyor.”',
              label: 'Veriden çıkmaz',
              explanation:
                'Tablo ödünç alma sayısını ölçüyor; beğeniyi değil. Öğrenciler ödev için almış olabilir. “Sevme” bir duygu yargısıdır ve tablo bunu ölçmez.',
              tone: 'muted',
            },
          ],
          takeaway:
            'Dört yorumdan ikisi veriden çıkıyor, biri veriye aykırı, biri verinin ölçmediği bir şeyden söz ediyor.',
        },
        {
          id: 'lgs-gorsel-grafik-hoca',
          type: 'teacher_note',
          tone: 'exam',
          body:
            'Grafik sorularında en hızlı yol şudur: seçenekleri okumadan önce başlık, eksen ve birimi oku. Çerçeveyi kuran öğrenci, seçenekleri bir kez okumakla karar verir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-gorsel-cikarim',
      title: 'Veriden çıkan ile çıkmayan',
      lead: 'Bu bölüm, Çıkarım dersinde kurduğumuz testin veri üzerindeki karşılığıdır.',
      blocks: [
        {
          id: 'lgs-gorsel-cikarim-anlatim',
          type: 'prose',
          body: `Çıkarım dersinde bir ölçüt kurmuştuk: bir yargı, metindeki bilgilerden **zorunlu olarak** çıkıyorsa geçerlidir. Aynı ölçüt veri için de geçerlidir.

Veriden çıkan yargılar üç biçimde olur.

**Doğrudan okuma:** “2025’te bilim 560 adettir.” Tabloda yazıyor.
**İki veriden karşılaştırma:** “Bilim, romandan daha hızlı artmıştır.” İki değişim karşılaştırılıyor.
**Toplam ve oran hesabı:** “2025’te toplamın yarısından azı romandır.” 540/1.200 hesaplanabiliyor.

Veriden çıkmayan yargılar da üç biçimde olur.

**Neden yargıları:** “Bilim kitapları arttı, çünkü yeni bir bilim kulübü kuruldu.” Grafik nedeni ölçmez.
**Niyet ve duygu yargıları:** “Öğrenciler bilim kitaplarını daha çok seviyor.” Grafik beğeniyi ölçmez.
**Gelecek yargıları:** “Gelecek yıl bilim sayısı 700’e çıkacak.” Grafik geleceği ölçmez.

Buna bir dördüncü tür ekleyelim: **kapsam dışı yargılar.** “Türkiye’de öğrenciler bilim kitaplarına yöneliyor.” Tablo tek bir okulun verisini gösteriyor; ülke geneli için konuşulamaz.

Bu dört türü tanımak, grafik sorularının çeldiricilerini doğrudan eler; çünkü çeldiriciler neredeyse her zaman bu dördünden biridir.

Bir de ince bir tuzak var: **veriye aykırı ama makul görünen yargılar.** “Şiir okuması azalmış.” cümlesi mantıklı görünür (çünkü toplam artarken şiir sabit kalmış), ama tabloda şiir sayısı düşmemiştir. Oran düşmüş, sayı düşmemiştir.

Bu tuzağı aşmanın tek yolu, yargıyı **hangi sayıya dayandırdığını göstermektir**. “Şiir azaldı” diyorsan hangi iki sayıyı karşılaştırdığını söyleyebilmelisin: 100 ve 100. Söyleyemiyorsan yargı veriden çıkmıyordur.`,
        },
        {
          id: 'lgs-gorsel-cikarim-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Veriden çıkan mı, çıkmayan mı?',
          columns: ['Veriden çıkar', 'Veriden çıkmaz'],
          rows: [
            { label: 'Tür', values: ['Doğrudan okuma, karşılaştırma, oran hesabı', 'Neden, niyet, gelecek, kapsam dışı'] },
            { label: 'Örnek', values: ['2025’te bilim en yüksektir.', 'Öğrenciler bilimi daha çok seviyor.'] },
            { label: 'Test', values: ['Hangi sayıya dayanıyor?', 'Grafik bunu ölçüyor mu?'] },
            { label: 'Kanıt', values: ['Tablodaki bir ya da iki değer', 'Yok'] },
            { label: 'Çeldirici gücü', values: ['—', 'Çok yüksek: mantıklı görünür'] },
          ],
          insight:
            'Çeldiriciler neredeyse her zaman “veriden çıkmayan” sütundan gelir ve makul göründükleri için seçilirler.',
        },
        {
          id: 'lgs-gorsel-cikarim-tuzak',
          type: 'trap',
          title: 'İki verinin birlikte değişmesini neden saymak',
          wrong: 'Kütüphane saatleri uzadı ve ödünç alma arttı; demek ki uzayan saatler artışa yol açtı.',
          right: 'Grafik iki değişimi gösteriyor, aralarındaki bağı göstermiyor. Başka bir etken ikisini birden etkilemiş olabilir.',
          body: 'Bu, Çıkarım dersinde gördüğün “zaman ortaklığından neden çıkarma” hatasının veri üzerindeki biçimidir.',
        },
      ],
    },

    {
      id: 'lgs-turkce-gorsel-karikatur-kilavuz',
      title: 'Karikatür okuma ve işlem basamakları',
      lead: 'İki ayrı kazanım, iki ayrı görsel okuma biçimi: biri yorum ister, öteki sıra takibi.',
      blocks: [
        {
          id: 'lgs-gorsel-karikatur-anlatim',
          type: 'prose',
          body: `**T.8.3.27** kazanımı görsellerle ilgili soruların cevaplanmasını ister ve açıklamasında iki şeyi anar: **çizgi roman ve karikatürlerin yorumlanması**; **haberi ve bilgiyi görsel yorumcuların nasıl ilettiği.**

Karikatür, bir düşünceyi çizgiyle anlatır. Onu okumanın da bir sırası vardır.

**Birinci adım: ne görüyorum?** Karede ne var — kim, nerede, ne yapıyor? Bu adımda yalnız betimlersin, yorumlamazsın.
**İkinci adım: neyi abartıyor?** Karikatürün en güçlü aracı abartmadır. Bir şey gerçek boyutundan büyük ya da küçük çizilmişse, dikkat oraya çekiliyordur.
**Üçüncü adım: neyi karşılaştırıyor?** Çoğu karikatür iki durumu yan yana koyar: önce–sonra, büyük–küçük, söylenen–yapılan.
**Dördüncü adım: mesaj ne?** Karikatürcü neyi eleştiriyor ya da neye dikkat çekiyor?

Karikatür okumanın en yaygın hatası, onu yalnız **komik** bir çizim olarak görmektir. Oysa karikatür bir görüş bildirir; program da zaten “yorumlayarak görüşlerini bildirmeleri” der.

İkinci nokta, kazanımın b maddesidir: **görsel yorumcuların haberi nasıl ilettiği.** Bir haberin yanına konan fotoğraf, metinde yazmayan bir yargı taşıyabilir. Aynı olay iki farklı fotoğrafla verildiğinde okurda iki farklı izlenim doğar. Medya Metinleri dersinde kurduğumuz “ayrıntı seçimi” ölçütü burada görsele uygulanır.

**T.8.3.35** ise farklı bir görsel okuma biçimidir: **iş ve işlem basamakları.** Program açıklamasında kullanım kılavuzlarının inceletilmesini ister.

Bir kullanım kılavuzunda sıra bağlayıcıdır. “Önce fişi çekin, sonra kapağı açın” yönergesinde iki adımın yeri değiştirilemez; değiştirilirse sonuç değişir, hatta tehlikeli olabilir.

İşlem basamaklarını okurken üç şeye dikkat edilir: **sıra** (hangi adım önce), **koşul** (“eğer … ise”), **uyarı** (“dikkat”, “yapmayın”). Sorular genellikle bir adımın yerini değiştirir ya da bir koşulu atlar; senden bunu fark etmen istenir.`,
        },
        {
          id: 'lgs-gorsel-karikatur-tablo',
          type: 'table',
          interactive: true,
          title: 'Karikatür okuma adımları — örnek çözümleme',
          columns: ['Adım', 'Soru', 'Örnek karede', 'Çıkan bilgi'],
          rows: [
            ['1. Betimleme', 'Ne görüyorum?', 'Bir çocuk, elinde kocaman bir çanta, sırtı kambur', 'Ağır bir yük taşınıyor'],
            ['2. Abartma', 'Ne abartılmış?', 'Çanta çocuktan büyük çizilmiş', 'Dikkat yükün ağırlığına çekiliyor'],
            ['3. Karşılaştırma', 'Ne yan yana konmuş?', 'Yanındaki yetişkinin çantası minicik', 'İki yük karşılaştırılıyor'],
            ['4. Mesaj', 'Neye dikkat çekiliyor?', '—', 'Öğrencilerin taşıdığı yükün fazlalığı eleştiriliyor'],
            ['Yanlış okuma', 'Yalnız komik mi?', '—', '“Komik bir çizim” demek mesajı atlamaktır'],
          ],
          caption:
            'Dört adım sırayla uygulandığında mesaj kendiliğinden ortaya çıkar. Son satır, en sık yapılan hatayı gösterir.',
        },
        {
          id: 'lgs-gorsel-karikatur-tuzak',
          type: 'trap',
          title: 'İşlem basamaklarında sırayı önemsiz saymak',
          wrong: 'Adımların hepsi yazıyor; sıraları önemli değil.',
          right: 'Kullanım kılavuzunda sıra bağlayıcıdır. “Önce fişi çekin” uyarısı, güvenlik için sıraya bağlıdır.',
          body: 'İşlem basamağı soruları genellikle bir adımın yerini değiştirir ya da bir koşulu atlar. Sırayı ve koşulları okumadan cevap verilmez.',
        },
        {
          id: 'lgs-gorsel-karikatur-hafiza',
          type: 'memory',
          title: 'Üç soruluk görsel kontrolü',
          body: '**Birim ne?** · **Bu yargı hangi sayıya dayanıyor?** · **Görsel neyi abartıyor?**',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Tabloyu sırayla oku',
      prompt:
        'Yukarıdaki kütüphane tablosuna göre şu yargıları değerlendir: (1) “2024’te en çok ödünç alınan tür romandır.” (2) “Toplam ödünç alma sayısı her yıl artmıştır.”',
      steps: [
        { title: 'Çerçeveyi oku', body: 'Başlık: ödünç alınan kitap sayısı. Birim: adet. Kapsam: 2022–2025. Yorum yapmadan önce bu üçü okundu.' },
        { title: '(1) için veriyi oku', body: '2024 satırı: roman 510, bilim 390, şiir 100. En yüksek değer roman. → **Doğru**, doğrudan okunabiliyor.' },
        { title: '(2) için veriyi oku', body: 'Toplam sütunu: 700 → 850 → 1.000 → 1.200. Her yıl bir önceki yıldan büyük. → **Doğru**, dört veriden zorunlu olarak çıkıyor.' },
        { title: 'Kapsamı kontrol et', body: '(2) yargısı “her yıl” diyor; tablo yalnız dört yılı kapsıyor. Yargı bu dört yıl için geçerli; daha geniş bir dönem için konuşulamaz.' },
        { title: 'Kuralı yaz', body: 'Doğrudan okunabilen ve kapsam içinde kalan yargılar veriden çıkar.' },
      ],
      answer: 'İki yargı da tablodan çıkarılabilir; ancak (2) yalnız 2022–2025 aralığı için geçerlidir.',
      takeaway: 'Kapsam denetimi, doğru bir yargıyı bile sınırlandırmanı sağlar.',
    },
    {
      title: 'Seviye 2 — Yüzde mi, sayı mı?',
      prompt:
        'Bir kütüphanede 2022’de toplam 700, 2025’te 1.200 kitap ödünç alınmış. Şiirin sayısı her iki yılda da 100. Bir öğrenci “şiire ilgi azalmış” diyor. Bu yargı veriden çıkar mı?',
      steps: [
        { title: 'Sayıyı oku', body: 'Şiir 2022’de 100, 2025’te 100. Sayı değişmemiş.' },
        { title: 'Oranı hesapla', body: '2022: 100/700 ≈ %14. 2025: 100/1.200 ≈ %8. Oran düşmüş.' },
        { title: 'Yargıyı sına', body: '“Şiire ilgi azalmış” yargısı sayıya mı orana mı dayanıyor? Sayıya dayanmıyor; sayı sabit. Orana dayansa bile “ilgi” bir duygu yargısıdır.' },
        { title: 'Doğru yargıyı yaz', body: 'Veriden çıkan yargı şudur: “Şiirin toplam içindeki oranı düşmüştür.” Sayısının değişmediği de eklenmelidir.' },
        { title: 'Tuzağı adlandır', body: 'Oran düşüşünü sayı düşüşü sanmak ve buna bir de duygu yargısı (“ilgi”) eklemek: iki katmanlı bir hata.' },
      ],
      answer:
        'Çıkmaz. Şiirin sayısı değişmemiş; yalnız toplam içindeki oranı düşmüştür. “İlgi” yargısı ise verinin ölçmediği bir şeydir.',
      takeaway: 'Oran ile sayı ayrı şeylerdir. Hangi birimden konuştuğunu her zaman belirt.',
    },
    {
      title: 'Seviye 3 — Karikatürü çözümle',
      prompt:
        'Bir karikatürde, bir öğrenci sırtında kendisinden büyük bir çanta taşıyor; yanındaki yetişkinin elinde ince bir evrak çantası var. Öğrencinin çantasının üstünde “ders programı” yazıyor. Bu karikatürün mesajı nedir?',
      steps: [
        { title: '1. adım — betimle', body: 'İki kişi var: bir öğrenci ve bir yetişkin. Öğrencinin yükü çok büyük, yetişkinin yükü küçük. Yorum yok, yalnız gözlem.' },
        { title: '2. adım — abartmayı bul', body: 'Çanta öğrenciden büyük çizilmiş. Gerçekte böyle bir çanta yok; abartma dikkati yükün ağırlığına çekiyor.' },
        { title: '3. adım — karşılaştırmayı bul', body: 'İki yük yan yana konmuş. Karşılaştırma, öğrencinin yükünün orantısızlığını gösteriyor.' },
        { title: '4. adım — etiketi oku', body: 'Çantanın üstünde “ders programı” yazıyor. Yük fiziksel bir çanta değil, programın kendisi.' },
        { title: '5. adım — mesajı yaz', body: 'Karikatür, öğrencilerin ders programının ağırlığını eleştiriyor. “Komik bir çizim” demek, kazanımın istediği yorumu yapmamaktır.' },
      ],
      answer:
        'Mesaj: öğrencilerin taşıdığı ders yükü, yetişkinlerin iş yüküyle karşılaştırılamayacak ölçüde ağırdır; karikatür bunu eleştirmektedir.',
      takeaway:
        'Karikatürde abartma ve karşılaştırma, mesajın taşıyıcısıdır. Etiketler ise mesajı kesinleştirir.',
    },
  ],

  questionClue: {
    concept: 'görsel ve veri okuma sorusu',
    statement:
      'Soruda bir tablo, grafik, karikatür ya da yönerge veriliyorsa, sorulan şey görselin doğrudan söylediği ya da söylemediğidir.',
    clues: [
      'Soru kökünde “grafiğe/tabloya göre” ifadesi',
      '“Aşağıdakilerden hangisi söylenemez?” biçimindeki soru kökleri',
      'Eksen etiketlerinde birim belirtilmiş olması',
      'Bir karikatür ya da çizgi roman karesi verilmesi',
      'Numaralandırılmış işlem basamakları',
    ],
    reasoning:
      'Bu işaretler birlikte şunu söyler: soru, verinin ölçmediği bir şeyi ondan çıkarıp çıkarmadığını ölçüyor. Çözüm yolu önce çerçeveyi (başlık, eksen, birim, kapsam) okumak, sonra her yargıyı bir sayıya dayandırmaya çalışmaktır.',
    boundary:
      'Bu ipuçlarını “grafikte artış varsa olumlu bir gelişmedir” gibi bir kısayola çevirme. Grafik değeri ölçer, iyi ya da kötü olduğunu söylemez.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar 8. sınıf kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir grafiğe göre hangi yargının söylenebileceğinin sorulması',
      'Bir grafiğe göre hangi yargının söylenemeyeceğinin sorulması',
      'Tablodaki iki verinin karşılaştırılması',
      'Bir karikatürün iletmek istediği mesajın sorulması',
      'Bir kullanım kılavuzunda adımların sırasının sorulması',
      'Bir metin ile grafiğin birlikte yorumlanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir çizgi grafiğinde bir okulun kütüphane ziyaretçi sayısı üç yıl boyunca artıyor. “Gelecek yıl da artacaktır.” yargısı grafikten çıkar mı?',
      hint: 'Grafik hangi zaman aralığını ölçüyor?',
      answer:
        'Çıkmaz. Grafik yalnız ölçülen üç yılı gösterir; gelecek yıl hakkında bilgi vermez. Eğilim bir tahmin kurmanı sağlayabilir ama bu tahmin veriden **zorunlu olarak** çıkmaz. Gelecek yargıları grafiğin ölçmediği alandadır.',
    },
    {
      prompt:
        'Bir daire grafiğinde roman dilimi %30’dan %40’a çıkmış. “Roman sayısı artmıştır.” yargısı kesin midir?',
      hint: 'Daire grafiği neyi gösterir?',
      answer:
        'Kesin değildir. Daire grafiği oran gösterir, sayı değil. Toplam küçüldüyse roman sayısı azalmış olabilir: toplam 1.000’den 500’e düştüyse roman 300’den 200’e iner — oran artar, sayı azalır. Sayı yargısı için toplamın da bilinmesi gerekir.',
    },
    {
      prompt:
        'Bir kullanım kılavuzunda “1. Fişi prizden çekin. 2. Kapağı açın. 3. Filtreyi çıkarın.” yazıyor. Bir öğrenci önce kapağı açıp sonra fişi çekiyor. Neden yanlış?',
      hint: 'İşlem basamaklarında sıranın işlevi nedir?',
      answer:
        'İşlem basamaklarında sıra bağlayıcıdır. Birinci adım bir güvenlik önlemidir: cihaz elektriğe bağlıyken kapağın açılması tehlikeli olabilir. Sıra değiştirildiğinde adımların hepsi yapılmış olsa da sonuç değişir. Bu yüzden kılavuz okurken sıra, koşul ve uyarılar birlikte izlenir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey sayı okumak değil, sınırda durmak',
    body:
      'MEB’in merkezî sınav kılavuzu, soruların 8. sınıf kazanımları esas alınarak okuduğunu anlama, yorumlama, sonuç çıkarma ve analiz yapma becerilerini ölçecek nitelikte hazırlandığını belirtir. Görsel ve veri sorularında bunun somut karşılığı şudur: sayıları okumak kolaydır; asıl ölçülen, verinin ölçmediği bir şeyi ondan çıkarmamaktır. Bu yüzden çeldiriciler neden, niyet, gelecek ve kapsam dışı yargılardan üretilir.',
    measures: [
      'Grafiği başlık, eksen, birim ve kapsam sırasıyla okuyabilme',
      'Bir yargıyı grafikteki sayıya dayandırabilme',
      'Oran ile sayıyı ayırabilme',
      'Birlikte değişimden neden çıkarmama',
      'Karikatürde abartma ve karşılaştırmayı okuyabilme',
      'İşlem basamaklarında sıra ve koşulları izleyebilme',
    ],
  },

  simulationTable: {
    title: 'Bir okulun kantininde satılan içecekler (adet)',
    columns: ['Yıl', 'Su', 'Ayran', 'Meyve suyu', 'Toplam'],
    rows: [
      ['2023', '3.000', '1.500', '2.500', '7.000'],
      ['2024', '4.200', '1.600', '2.200', '8.000'],
      ['2025', '6.000', '1.800', '1.200', '9.000'],
    ],
    caption: 'Kaynak: okul kantini satış kayıtları · Birim: adet · Kapsam: 2023–2025',
  },

  simulation: {
    title: 'Mini uygulama — özgün tablo',
    passage: `Yukarıdaki tabloyu okumaya çerçeveden başla:

- **Başlık:** bir okul kantininde satılan içecekler.
- **Birim:** adet — kişi ya da yüzde değil.
- **Kapsam:** yalnız 2023, 2024 ve 2025 yılları.
- **Kaynak:** okul kantininin kendi satış kayıtları; yani tek bir okulun verisi.

Çerçeveyi okuduktan sonra aşağıdaki soruyu cevapla.`,
    question: 'Bu tabloya göre aşağıdakilerden hangisi **söylenemez**?',
    options: [
      {
        text: 'Su satışı üç yıl boyunca artmıştır',
        explanation:
          'Söylenebilir. Su sütunu: 3.000 → 4.200 → 6.000. Her yıl bir önceki yıldan büyük; doğrudan okunabiliyor.',
      },
      {
        text: 'Meyve suyu satışı 2025’te 2023’ün yarısından azdır',
        explanation:
          'Söylenebilir. 2023’te 2.500, 2025’te 1.200. 2.500’ün yarısı 1.250; 1.200 bundan azdır. İki sayıdan hesapla çıkarılabiliyor.',
      },
      {
        text: 'Toplam satış her yıl artmıştır',
        explanation:
          'Söylenebilir. Toplam sütunu: 7.000 → 8.000 → 9.000. Artış doğrudan okunuyor.',
      },
      {
        text: 'Öğrenciler sağlıklı beslenmeye daha çok önem vermeye başlamıştır',
        explanation:
          'Doğru cevap — söylenemez. Tablo satış adetlerini ölçüyor; öğrencilerin niyetini, bilincini ya da beslenme anlayışını ölçmüyor. Su satışının artmasının başka sebepleri olabilir (fiyat, meyve suyunun kaldırılması, sebil eklenmesi). Bu bir **niyet yargısıdır** ve veriden çıkmaz.',
      },
      {
        text: 'Ayran satışındaki artış, sudaki artıştan daha azdır',
        explanation:
          'Söylenebilir. Ayran 1.500 → 1.800 (+300), su 3.000 → 6.000 (+3.000). İki değişim karşılaştırıldığında ayranınki daha küçük; iki veriden zorunlu olarak çıkıyor.',
      },
    ],
    answer_index: 3,
    stem_analysis:
      'Soru kökü “söylenemez” diyor; yani dört seçeneğin tabloya dayandığını gösterip dayanmayanı işaretleyeceğim. Önce çerçeve: başlık (içecek satışları), birim (adet), kapsam (2023–2025), kaynak (kantin kayıtları).',
    critical_point:
      'Kritik nokta, dördüncü seçeneğin tablodaki gerçek bir eğilimle (su artışı) uyumlu görünmesi. Ama tablo satış adedini ölçer, öğrencilerin **niyetini** değil. Niyet ve bilinç yargıları verinin ölçmediği alandadır.',
    takeaway:
      'Bir eğilimle uyumlu olmak, veriden çıkmak demek değildir. Yargının hangi sayıya dayandığını gösterebilmelisin.',
  },

  quizzes: [
    {
      purpose: 'apply',
      question:
        'Bir grafikte dikey eksende “bin kişi” yazıyor ve bir sütunun değeri 15. Bu sütun kaç kişiyi gösterir?',
      options: [
        '15 kişi',
        '150 kişi',
        '1.500 kişi',
        '15.000 kişi',
      ],
      answer_index: 3,
      explanation:
        'Birim “bin kişi” olduğu için 15 değeri 15 × 1.000 = 15.000 kişiyi gösterir. Birimi okumadan yapılan yorum bin kat yanılır. Bu yüzden grafik okumanın ikinci adımı eksen ve birim okumaktır.',
    },
    {
      purpose: 'concept',
      question:
        'Bir çizgi grafiğinde iki değer aynı yıllarda birlikte artıyor. Aşağıdakilerden hangisi bu grafikten **çıkarılamaz**?',
      options: [
        'İki değer de artmıştır',
        'İki değerin artış hızları karşılaştırılabilir',
        'Birinci değerdeki artış ikincisine yol açmıştır',
        'İki değer aynı dönemde yükselmiştir',
      ],
      answer_index: 2,
      explanation:
        'İki şeyin birlikte artması, birinin ötekine yol açtığını göstermez. Üçüncü bir etken ikisini birden etkiliyor olabilir. Grafik “ne oldu?” sorusunu cevaplar, “neden oldu?” sorusunu değil. Diğer üç yargı doğrudan okunabilir ya da iki veriden hesaplanabilir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci, bir daire grafiğinde bir dilimin yüzdesinin arttığını görüp “bu türün sayısı artmıştır” diyor. Bu öğrencinin hatası nedir?',
      options: [
        'Oranı sayıyla karıştırmak',
        'Ekseni okumamak',
        'Kaynağı sorgulamamak',
        'Kapsam dışına çıkmak',
      ],
      answer_index: 0,
      explanation:
        'Daire grafiği bütünün dağılımını oranla gösterir. Toplam küçüldüyse bir dilimin oranı artarken gerçek sayısı azalabilir. Sayı yargısı yapabilmek için toplamın da bilinmesi gerekir. Grafikte eksen bulunmadığı için eksen okuma sorunu yoktur.',
    },
  ],

  summary: [
    'Grafik okumanın sırası vardır: başlık → eksen ve birim → kapsam ve kaynak → veri → yorum.',
    'Birim en küçük yazılan ama en çok yanıltan bölümdür: “bin kişi” birimi bin katlık hataya yol açar.',
    'Her yorumu grafikteki bir sayıya dayandırabilmelisin.',
    'Veriden çıkan yargılar üç türdür: doğrudan okuma, iki veriden karşılaştırma, oran hesabı.',
    'Veriden çıkmayan yargılar dört türdür: neden, niyet/duygu, gelecek, kapsam dışı.',
    'İki değerin birlikte değişmesi, birinin ötekine yol açtığını göstermez.',
    'Oran ile sayı ayrı şeylerdir: yüzde artarken sayı azalabilir.',
    'Karikatür dört adımda okunur: betimle, abartmayı bul, karşılaştırmayı bul, mesajı yaz.',
    'Karikatürü yalnız komik bir çizim olarak okumak, kazanımın istediği yorumu yapmamaktır.',
    'İşlem basamaklarında sıra bağlayıcıdır; koşullar ve uyarılar birlikte izlenir.',
  ],

  next: [
    'Bağlamda Sözcük Anlamı: Kanıttan Yoruma (T.8.3.5)',
    'Metinler Arası Karşılaştırma ve Çıkarım (T.8.3.23)',
    'Medya Metinleri ve Bilgi Kaynağının Güvenilirliği (T.8.3.29)',
  ],
})

export default lesson
