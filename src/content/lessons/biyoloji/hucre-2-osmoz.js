/**
 * TYT BİYOLOJİ · Hücre — 2. Bölüm
 * OSMOZ VE HÜCRENİN SU DENGESİ
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Osmoza ayrı bir bölüm açıldı. Bir önceki bölümde pasif taşımanın
 *   içinde iki cümleyle geçilebilirdi ama TYT'de bu konudan neredeyse
 *   her yıl soru geliyor ve sorular hücre tepkileri üzerinden kuruluyor.
 *
 * · Dersin merkezinde tek bir kafa karışıklığı var: "osmozda su çoktan
 *   aza mı, azdan çoğa mı gider?" Cevap NEYE BAKTIĞINA bağlı ve ders bu
 *   ayrımı iki ayrı yerde (şema + tuzak bloğu) kuruyor. Öğrencilerin
 *   çoğu bu iki bakışı karıştırdığı için yanlış yapıyor.
 *
 * · Hayvan ve bitki hücresi AYRI AYRI değil, KARŞILAŞTIRMALI veriliyor.
 *   Asıl öğrenilecek şey tek tek tepkiler değil, aradaki farkın tek bir
 *   sebebi olması: hücre duvarı.
 *
 * · Plazmolizin geri dönüşümlü olduğu (deplazmoliz) özellikle
 *   vurgulanıyor; öğrenciler plazmolizi "hücre öldü" diye okuyor.
 *
 * · Kontraktil koful, izotonik ortam ve tuzlu su örnekleri müfredat
 *   sınırında kalacak kadar veriliyor — amaç ek bilgi yüklemek değil,
 *   mekanizmanın gerçek hayatta karşılığını göstermek.
 */

export default {
  slug: 'hucre-osmoz',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre',
  },
  order: 2,
  partLabel: '2. Bölüm',
  goldStandard: true,
  title: 'Osmoz ve Hücrenin Su Dengesi',
  subtitle:
    'Osmozda “su nereye gider?” sorusunun tek bir cevabı yok — neye baktığına bağlı. Önce o bakışı düzelt, sorular kendiliğinden çözülsün.',

  document: {
    version: 2,
    estimated_minutes: 28,
    prerequisites: [
      {
        topic: 'Hücre — 1. Bölüm',
        why: 'Seçici geçirgenlik ve pasif taşıma kavramları bu dersin başlangıç noktası.',
      },
      {
        topic: 'Canlıların Temel Bileşenleri — 1. Bölüm',
        why: 'Suyun kutupluluğu ve akuaporin kanalları burada tekrar işe yarayacak.',
      },
    ],
    outcomes: [
      'Osmozu su ve çözünen açısından ayrı ayrı ifade edebileceksin.',
      'Hipotonik, izotonik ve hipertonik ortamları tanımlayıp örnek verebileceksin.',
      'Aynı ortamda hayvan ve bitki hücresinin neden farklı tepki verdiğini açıklayabileceksin.',
      'Turgor, plazmoliz ve deplazmoliz kavramlarını doğru kullanabileceksin.',
      'Osmozla ilgili günlük hayat örneklerini mekanizmayla açıklayabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'os-giris',
        kind: 'opening',
        title: 'Aynı bardağa konan iki hücre, iki farklı son',
        lead: 'Bu bölüme bir gözlemle başlıyoruz; açıklaması dersin tamamını taşıyacak.',
        blocks: [
          {
            id: 'os-giris-1',
            type: 'prose',
            body: `Saf su dolu bir bardağa iki hücre bırakalım: bir alyuvar ve bir bitki hücresi.

Birkaç dakika sonra bakarsan alyuvarın ==patladığını==, bitki hücresinin ise gayet iyi durumda, hatta biraz daha ==dik ve gergin== olduğunu görürsün.

İkisi de aynı ortamda. İkisinin zarı da seçici geçirgen. İkisine de aynı miktarda su girdi. Buna rağmen sonuçlar taban tabana zıt.

Bu farkın tek bir sebebi var ve bu bölümün sonunda o sebebi tek cümleyle söyleyebiliyor olacaksın.`,
          },
          {
            id: 'os-giris-2',
            type: 'prose',
            body: `Ama önce daha temel bir şeyi düzeltmemiz gerekiyor: suyun neden ve nereye hareket ettiği.

Bir önceki bölümde pasif taşımanın kuralını öğrendin: madde **çok olduğu yerden az olduğu yere** gider. Su da bir madde olduğuna göre aynı kural geçerli.

Sorun şu ki öğrencilerin çoğu bu kuralı suya uygularken şaşırıyor. Çünkü bir çözeltiye baktığında gözüne ilk çarpan şey su değil, ==çözünen madde== oluyor. "Şekerli su daha yoğun" diye düşünüyor ve suyun oraya gitmesini "azdan çoğa" sanıyor.

Oysa iki ifade de doğru; sadece farklı şeylere bakıyorlar. Bunu netleştirmeden devam edersek bütün bölüm yanlış oturur.`,
          },
          {
            id: 'os-giris-note',
            type: 'teacher_note',
            tone: 'warning',
            body: 'Osmoz sorularında ilk yapman gereken şey, cümledeki “yoğun” kelimesinin neyi kastettiğini belirlemek: suyu mu, çözüneni mi? Soruların yarısı bu belirsizlik üzerine kurulu.',
          },
          {
            id: 'os-giris-audio',
            type: 'audio_script',
            body: `Bu derse bir gözlemle başlayalım.

Saf su dolu bir bardağa bir alyuvar ve bir bitki hücresi koyuyorsun. Alyuvar patlıyor, bitki hücresi ise sapasağlam duruyor — hatta daha da gerginleşiyor.

Bir saniye dur ve düşün: ikisi de aynı suda, ikisine de su giriyor. Fark nereden çıkıyor?

Cevabı ders boyunca kuracağız. Ama önce daha temel bir şeyi düzeltmemiz lazım.

Osmozda su nereye gider? Çoktan aza mı, azdan çoğa mı?

Bu soruya hemen cevap verme. Çünkü doğru cevap, neye baktığına bağlı. Bir sonraki bölümde bunu netleştireceğiz.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-mekanizma',
        kind: 'build',
        title: 'Osmoz nedir ve su hangi yöne gider?',
        lead: 'Bu bölümdeki tek hedef: “çoktan aza mı, azdan çoğa mı?” sorusunu bir daha karıştırmaman.',
        blocks: [
          {
            id: 'os-mek-concept',
            type: 'concept',
            term: 'Osmoz',
            body: `Suyun, seçici geçirgen bir zardan **pasif** olarak geçmesidir.

Yönü iki farklı biçimde ifade edilebilir ve ==ikisi de doğrudur==:

- **Suya bakarsan:** su, kendisinin çok olduğu yerden az olduğu yere gider — yani normal difüzyon kuralı.
- **Çözünene bakarsan:** su, çözünenin az olduğu yerden çok olduğu yere gider.

Bu iki cümle çelişmiyor; aynı olayı iki farklı gözle anlatıyor. Çözünen arttıkça o çözeltideki ==su oranı azalır==, çünkü aynı hacimde daha az yer suya kalır.

Osmoz bir pasif taşımadır: hücre ATP harcamaz.`,
          },
          {
            id: 'os-mek-figure',
            type: 'figure',
            kind: 'osmoz-mekanizma',
            width: 'full',
            title: 'Osmozun mekanizması',
            purpose:
              'Su ve çözünen bakışlarını aynı görselde tutarak “çoktan aza mı, azdan çoğa mı” karışıklığını çözmek.',
            complexity: 'medium',
            caption:
              'Zar suyu geçirir, çözüneni geçirmez. Çözünen geçemediği için ==denge ancak su hareketiyle== kurulabilir; bu yüzden derişik tarafın sıvı seviyesi yükselir.',
            focus: [
              {
                title: 'Seçici geçirgen zar',
                body: 'Su moleküllerini geçirir ama çözünen moleküllerini geçirmez. Osmozun tanımındaki “seçici geçirgen” ifadesi tam olarak bunu anlatır — sıradan bir elek olsaydı çözünen de geçer ve osmoz diye bir olay olmazdı.',
              },
              {
                title: 'Suyun net hareketi',
                body: 'Su iki yöne de geçer; moleküller rastgele hareket eder. Ama az derişik taraftan çok derişik tarafa geçen su miktarı daha fazla olduğu için **net akış** tek yöndedir. Denge kurulduğunda geçiş durmaz, sadece iki yön eşitlenir.',
              },
              {
                title: 'Seviye farkı',
                body: 'Derişik tarafa net su girdiği için o taraftaki sıvı seviyesi yükselir. Yükselen sütunun ağırlığı bir noktada su akışını dengeler; bu dengeye ulaşmak için gereken basınca **osmotik basınç** denir.',
              },
            ],
            audio_script: `Şemaya ortadan başla. Kesikli mor çizgiyi bul — bu seçici geçirgen zar.

Şimdi sol tarafa bak. Açık mavi, içinde neredeyse hiç molekül yok. Burası az derişik, yani su oranı yüksek.

Sağ tarafa bak. Pembe toplar var. Burası çok derişik, su oranı düşük.

Şimdi ortadaki mavi okları takip et. Su soldan sağa geçiyor.

Bir saniye dur ve şunu düşün: su hangi kurala uyuyor?

Basit difüzyon kuralına. Kendisinin çok olduğu yerden az olduğu yere gidiyor. Yani osmozda özel bir kural yok.

Şimdi zarın üstündeki kırmızı çarpı işaretini bul. Pembe bir molekül zardan geçmeye çalışıyor ama geçemiyor.

İşte bütün mesele bu. Çözünen geçemediği için denge ancak suyun hareketiyle kurulabiliyor. Sağdaki seviyenin yükselmesinin sebebi bu.`,
          },
          {
            id: 'os-mek-trap',
            type: 'trap',
            title: '“Osmozda su azdan çoğa gider” demek — ve neyi kastettiğini söylememek',
            wrong:
              'Cümleyi eksik kurmak: “su, yoğun olan tarafa geçer” demek. Hangi yoğunluktan söz edildiği belirtilmediği için cümle yarısı doğru, yarısı yanlış hâle geliyor.',
            right:
              'Cümleyi tamamla: **su, çözünenin az olduğu yerden çok olduğu yere geçer**. Ya da eşdeğer olarak: **su, kendisinin çok olduğu yerden az olduğu yere geçer**. İkisi aynı şeyi söyler.',
            body:
              'Sınavda öncüller genellikle “su yoğunluğu” ya da “çözelti yoğunluğu” diye açıkça ayırır. Hangisinin geçtiğini okumadan işaretleme — iki ifadenin yönü birbirinin tersidir.',
          },
          {
            id: 'os-mek-checkpoint',
            type: 'checkpoint',
            prompt:
              'Osmoz denge noktasına ulaştığında su geçişi tamamen durur mu? Cevabını gerekçelendir.',
            hint: 'Moleküller ne zaman hareketsiz kalır?',
            answer: `Hayır, durmaz.

Su molekülleri sıcaklık sıfırın çok üstünde olduğu sürece rastgele hareket etmeye devam eder ve zardan iki yöne de geçmeyi sürdürür.

Dengede değişen tek şey şudur: ==bir yönde geçen su miktarı, diğer yönde geçene eşitlenir==. Yani **net** geçiş sıfır olur, ama geçişin kendisi devam eder.

Bu ayrım biyolojide sık karşına çıkacak. "Denge" biyolojide genellikle "hareketsizlik" değil, ==karşılıklı hızların eşitlenmesi== demektir. İzotonik ortamda bir hücrenin hacminin değişmemesi de tam olarak bu yüzdendir — su girmiyor değil, giren kadar çıkıyor.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-ortamlar',
        kind: 'build',
        title: 'Üç ortam: hipotonik, izotonik, hipertonik',
        lead: 'Bu üç kelime hücrenin kendisiyle değil, DIŞ ortamla ilgilidir. Karıştırılmasının sebebi de bu.',
        blocks: [
          {
            id: 'os-ort-prose',
            type: 'prose',
            body: `Üç terim de dış ortamın, hücre içine göre nasıl olduğunu anlatır. Ölçüt ==çözünen derişimidir==:

- **Hipotonik ortam:** Dış ortam hücre içinden **daha az** derişiktir. Yani dışarısı daha suludur → hücreye net su **girer**.
- **İzotonik ortam:** Derişimler eşittir → net su geçişi **yoktur**.
- **Hipertonik ortam:** Dış ortam hücre içinden **daha derişiktir** → hücreden net su **çıkar**.

Ön ekleri hatırlamanın kolay yolu var: *hipo-* "altında", *hiper-* "üstünde", *izo-* "eşit" demektir. Karşılaştırma her zaman ==dış ortamın, hücre içine göre== durumudur.

Saf su, her hücre için hipotonik ortamdır — içinde hiç çözünen yoktur.`,
          },
          {
            id: 'os-ort-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Terimler dış ortamı tanımlar, hücreyi değil. “Hücre hipertoniktir” gibi bir ifade gördüğünde soruyu dikkatli oku — genelde “hücre hipertonik bir ortama konuldu” denmek istenir.',
          },
          {
            id: 'os-ort-figure',
            type: 'figure',
            kind: 'hucre-osmoz-tepkileri',
            width: 'full',
            title: 'Hayvan ve bitki hücresinin üç ortamdaki hâli',
            purpose:
              'İki hücre tipinin aynı ortamlardaki farklı tepkilerini yan yana göstererek farkın tek sebebini (hücre duvarı) görünür kılmak.',
            complexity: 'high',
            caption:
              'Üst sıra ile alt sıra arasındaki bütün fark ==hücre duvarından== çıkıyor. Duvar, hipotonik ortamda hücreyi patlamaktan korur; hipertonik ortamda ise sitoplazma büzülürken kendisi yerinde kalır.',
            focus: [
              {
                title: 'Hipotonik ortam',
                body: 'Hücreye net su girer. Hayvan hücresi şişer ve dayanıklılık sınırı aşılırsa patlar — alyuvarda bu olaya **hemoliz** denir. Bitki hücresinde sitoplazma duvara doğru itilir ve hücre gerginleşir; bu duruma **turgor** denir ve bitki için normal, hatta istenen durumdur.',
              },
              {
                title: 'İzotonik ortam',
                body: 'Giren ve çıkan su eşittir; hücrenin hacmi değişmez. İnsan vücuduna verilen serum bu yüzden izotonik hazırlanır — saf su verilseydi alyuvarlar patlardı. Bitki hücresi bu ortamda gevşektir; solmuş bir yaprağın hâli budur.',
              },
              {
                title: 'Hipertonik ortam',
                body: 'Hücreden net su çıkar. Hayvan hücresi büzüşür ve yüzeyi buruşur. Bitki hücresinde sitoplazma çekilerek hücre duvarından ayrılır; bu olaya **plazmoliz** denir. Duvar sert olduğu için yerinde kalır ve hücrenin dış görünümü fazla değişmez.',
              },
            ],
            audio_script: `Bu şemada altı hücre var. Ama asıl bakman gereken şey tek tek hücreler değil, üst sıra ile alt sıra arasındaki fark.

Önce sol sütuna bak. Hipotonik ortam, yani dışarısı daha sulu. Su içeri giriyor.

Üstteki hayvan hücresine bak: şişmiş, patlamak üzere.
Alttaki bitki hücresine bak: o da şişmiş ama patlamamış. Kalın dış çizgiyi görüyor musun? Hücre duvarı. Sitoplazmayı içeriden itiyor ama duvar direniyor.

Şimdi sağ sütuna geç. Hipertonik ortam, su dışarı çıkıyor.

Üstteki hayvan hücresi büzüşmüş, yüzeyi buruşmuş.
Alttaki bitki hücresinde ise ilginç bir şey var: içerideki mavi kısım küçülmüş ama dıştaki kalın çizgi aynı yerde duruyor.

Bir saniye dur ve şuna dikkat et: plazmolizde büzülen şey sitoplazma, duvar değil. Öğrencilerin çoğu bunu yanlış hatırlıyor.

Bütün farkın tek sebebi o kalın çizgi. Hücre duvarı.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-fark',
        kind: 'deepen',
        title: 'Tek fark: hücre duvarı',
        lead: 'Şimdi açılıştaki soruyu cevaplayabiliriz. Neden alyuvar patlıyor da bitki hücresi patlamıyor?',
        blocks: [
          {
            id: 'os-fark-why',
            type: 'why',
            question: 'Hücre duvarı patlamayı nasıl engelliyor?',
            body: `Hayvan hücresinin dışında yalnızca zar vardır ve zar esnektir. İçeri su girdikçe zar gerilir; gerilme sınırı aşıldığında yırtılır.

Bitki hücresinin zarının dışında bir de **selülozdan yapılmış sert hücre duvarı** bulunur. Bu duvar esnemez.

Su girdikçe sitoplazma duvara doğru bastırır. Duvar geri iter. Bu karşı basınca **turgor basıncı** denir ve arttıkça ==suyun içeri girmesini zorlaştırır==. Bir noktada içeri girme isteği ile duvarın direnci eşitlenir ve su girişi durur.

Yani duvar suyu engellemez; suyun ==yarattığı basıncı karşılar== ve hücrenin patlamasına izin vermeyecek bir denge kurar.

Bu aynı zamanda otsu bitkilerin nasıl dik durduğunun da cevabıdır: iskeletleri yoktur, dik duruşlarını turgor basıncından alırlar. Susuz kalınca solmalarının sebebi de budur.`,
          },
          {
            id: 'os-fark-compare',
            type: 'compare',
            title: 'Aynı ortam, iki farklı sonuç',
            columns: ['Hayvan hücresi', 'Bitki hücresi'],
            rows: [
              { label: 'Dışındaki yapı', values: ['Yalnızca hücre zarı — esnek', 'Zar + **selüloz hücre duvarı** — sert'] },
              { label: 'Hipotonik ortamda', values: ['Şişer, patlayabilir (hemoliz)', 'Turgor — gerginleşir, patlamaz'] },
              { label: 'İzotonik ortamda', values: ['Normal hâlini korur', 'Gevşek — bitki solgun görünür'] },
              { label: 'Hipertonik ortamda', values: ['Büzüşür, yüzeyi buruşur', 'Plazmoliz — sitoplazma duvardan ayrılır'] },
              { label: 'Geri dönüş', values: ['Patladıysa geri dönüş yok', 'Plazmolizden **deplazmolizle** dönebilir'] },
            ],
            insight:
              'Son satır kritik: hayvan hücresi patladığında olay biter, ama bitki hücresi plazmolize uğradığında ==henüz ölmemiştir==. Hipotonik bir ortama konursa su tekrar girer, sitoplazma duvara yeniden yaslanır ve hücre normale döner. Buna **deplazmoliz** denir. Ancak plazmoliz çok uzun sürerse hücre geri dönemez hâle gelir.',
          },
          {
            id: 'os-fark-trap',
            type: 'trap',
            title: 'Plazmolizi “hücre öldü” diye okumak',
            wrong: '“Bitki hücresi tuzlu suya konunca plazmolize uğrar ve ölür” demek.',
            right:
              'Plazmoliz **geri dönüşümlü** bir durumdur. Hücre hipotonik bir ortama alınırsa su geri girer ve **deplazmoliz** gerçekleşir. Ölüm ancak plazmoliz uzun sürerse söz konusudur.',
            body: 'Solmuş bir salatanın soğuk suya konunca tekrar dirilmesi, tam olarak deplazmolizdir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-hayat',
        kind: 'deepen',
        title: 'Mekanizmanın günlük karşılığı',
        lead: 'Bu bölümdeki örnekler ezberlenecek liste değil; her biri az önce kurduğun mekanizmanın uygulaması.',
        blocks: [
          {
            id: 'os-hayat-table',
            type: 'table',
            title: 'Gözlem → mekanizma',
            columns: ['Gözlem', 'Ortam', 'Ne oluyor?'],
            rows: [
              [
                'Salatalık tuzlanınca su bırakır',
                'Hipertonik',
                'Tuz dış ortamı derişik yapar; hücrelerden su çıkar, plazmoliz görülür',
              ],
              [
                'Solmuş marul soğuk suya konunca dirilir',
                'Hipotonik',
                'Su hücrelere girer, turgor geri kazanılır — deplazmoliz',
              ],
              [
                'Damardan saf su verilemez',
                'Hipotonik',
                'Alyuvarlara su dolar ve patlarlar (hemoliz); bu yüzden serum izotonik hazırlanır',
              ],
              [
                'Reçel ve turşu uzun süre bozulmaz',
                'Hipertonik',
                'Yüksek şeker/tuz derişimi bakteri hücrelerinden su çeker; mikroorganizma üreyemez',
              ],
              [
                'Tatlı su amibi sürekli su atar',
                'Hipotonik',
                'Ortam sürekli hipotonik olduğu için su durmadan girer; **kontraktil koful** fazlasını dışarı pompalar',
              ],
            ],
            caption:
              'Son satır bir istisna gibi görünse de değil: kontraktil kofulun su atması ==ATP harcayan aktif bir olaydır==. Osmozun kendisi pasiftir, ama sonucuyla baş etmek enerji gerektirebilir.',
          },
          {
            id: 'os-hayat-connection',
            type: 'connection',
            title: 'Bu mekanizma nereye gidiyor?',
            body:
              'Osmoz burada bitmiyor. Bitkilerde suyun kökten yaprağa taşınması, böbrekte idrarın derişikleştirilmesi ve bağırsakta su emilimi — üçü de aynı mekanizmayla çalışır. AYT’de bu konulara geldiğinde yeni bir şey öğrenmeyeceksin; buradaki fikri farklı organlarda tekrar göreceksin.',
            links: ['AYT · Üriner sistem', 'AYT · Bitki biyolojisi — su taşınması', 'AYT · Sindirim sistemi'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün üç kritik ayrımını hedefliyor.',
        blocks: [
          {
            id: 'os-uyg-worked',
            type: 'worked_example',
            title: 'Ortamı belirleyip sonucu tahmin etme',
            prompt:
              'Bir bitki hücresi ve bir alyuvar, %10 tuz çözeltisine bırakılıyor. Hücre içi tuz derişimi her ikisinde de yaklaşık %1’dir. Bir süre sonra iki hücrede de gözlenecek değişimler nelerdir?',
            steps: [
              {
                title: 'Ortamı adlandır',
                body: 'Dış ortam %10, hücre içi %1. Dış ortam daha derişik olduğuna göre ortam **hipertoniktir**.',
              },
              {
                title: 'Su yönünü belirle',
                body: 'Su, çözünenin az olduğu yerden çok olduğu yere gider. Yani hücre içinden dışarı — her iki hücreden de **su çıkar**.',
              },
              {
                title: 'Alyuvarın tepkisini yaz',
                body: 'Dışında yalnızca esnek zar var. Su çıkınca hacim azalır, zar buruşur; hücre **büzüşür**.',
              },
              {
                title: 'Bitki hücresinin tepkisini yaz',
                body: 'Su çıkınca sitoplazma çeker ve hücre duvarından ayrılır. Duvar sert olduğu için yerinde kalır. Bu **plazmolizdir** ve hücre henüz ölmemiştir.',
              },
            ],
            answer:
              'Ortam hipertoniktir; ikisinden de su çıkar. Alyuvar büzüşür, bitki hücresi plazmolize uğrar — sitoplazma duvardan ayrılır ama duvar yerinde kalır.',
            takeaway:
              'Bu soru tipinde sırayı bozma: **önce ortamı adlandır**, **sonra su yönünü belirle**, **en son hücre tipine göre sonucu yaz**. Doğrudan sonuca atlarsan hücre tipini gözden kaçırırsın.',
          },
          {
            id: 'os-uyg-quiz1',
            type: 'quiz',
            purpose: 'error',
            question: 'İzotonik bir ortamda bulunan hücre için aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Hücre ile ortam arasında su geçişi tamamen durmuştur',
              'Hücreye giren ve hücreden çıkan su miktarı eşittir',
              'Hücre sürekli su kaybeder',
              'Hücre ATP harcayarak hacmini sabit tutar',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. İzotonik ortamda su geçişi **durmaz**; iki yönde de devam eder. Değişen tek şey, giren ve çıkan miktarların eşitlenmesidir — yani **net** geçiş sıfırdır.

- **A yanlış:** Moleküller sıcaklık sıfırın üstünde olduğu sürece hareket etmeye devam eder.
- **C yanlış:** Su kaybı hipertonik ortamda görülür.
- **D yanlış:** Osmoz pasif bir olaydır; hücre bunun için ATP harcamaz.

Bu ayrım biyolojide sık geçer: ==denge, hareketsizlik değil, karşılıklı hızların eşitlenmesidir.==`,
          },
          {
            id: 'os-uyg-quiz2',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Hipotonik bir ortama konulan bitki hücresinin patlamamasının sebebi aşağıdakilerden hangisidir?',
            options: [
              'Hücre zarının su geçirmemesi',
              'Hücrenin ATP harcayarak su almayı durdurması',
              'Hücre duvarının turgor basıncını karşılaması',
              'Sitoplazmanın su tutma kapasitesinin yüksek olması',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Selülozdan yapılmış sert hücre duvarı esnemez; sitoplazma su alıp genişledikçe duvar karşı basınç uygular ve bir noktada su girişi durur.

- **A yanlış:** Hücre zarı suyu geçirir; zaten geçirmese osmoz olmazdı.
- **B yanlış:** Osmoz pasiftir, hücre onu durdurmak için ATP harcamaz.
- **D yanlış:** Sitoplazmanın "su tutma kapasitesi" diye bir sınır yoktur; hayvan hücresinde de aynı sitoplazma var ama o patlıyor.

Ayırt edici soru şu: iki hücre arasındaki **tek yapısal fark** ne? Duvar.`,
          },
          {
            id: 'os-uyg-quiz3',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Plazmolize uğramış bir bitki hücresi saf suya aktarılıyor. Bu hücrede aşağıdakilerden hangisi gözlenir?',
            options: [
              'Hiçbir değişiklik olmaz, çünkü hücre ölmüştür',
              'Sitoplazma daha da büzülür',
              'Su içeri girer ve deplazmoliz gerçekleşir',
              'Hücre duvarı parçalanır ve hücre patlar',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Saf su her hücre için **hipotonik** ortamdır. Su hücreye girer, sitoplazma tekrar hücre duvarına yaslanır ve hücre normale döner — bu olaya **deplazmoliz** denir.

- **A yanlış:** Plazmoliz geri dönüşümlüdür; hücre uzun süre o hâlde kalmadıysa ölmemiştir.
- **B yanlış:** Su çıkması için ortamın hipertonik olması gerekirdi.
- **D yanlış:** Hücre duvarı zaten patlamayı engelleyen yapıdır; hipotonik ortamda bitki hücresi turgora geçer, patlamaz.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'os-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'os-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Osmoz, suyun seçici geçirgen zardan **pasif** geçişidir — ATP harcanmaz.',
              'Su, kendisinin çok olduğu yerden az olduğu yere; yani **çözünenin az olduğu yerden çok olduğu yere** gider. İki ifade aynı şeyi söyler.',
              'Hipotonik / izotonik / hipertonik terimleri **dış ortamı** tanımlar, hücreyi değil.',
              'Hipotonik ortamda hayvan hücresi şişip patlar (**hemoliz**); bitki hücresi **turgor** kazanır.',
              'Hipertonik ortamda hayvan hücresi büzüşür; bitki hücresinde **plazmoliz** görülür.',
              'Plazmolizde büzülen şey **sitoplazmadır**; hücre duvarı yerinde kalır.',
              'Plazmoliz **geri dönüşümlüdür**: hipotonik ortamda **deplazmoliz** gerçekleşir.',
              'İki hücre tipi arasındaki farkın tek sebebi **hücre duvarıdır**.',
              'Otsu bitkilerin dik durması **turgor basıncından** gelir; susuz kalınca solmalarının sebebi budur.',
              'İzotonik ortamda su geçişi durmaz; giren ve çıkan eşitlenir — net geçiş sıfırdır.',
            ],
          },
          {
            id: 'os-kap-memory',
            type: 'memory',
            body:
              'Soruyu üç adımda çöz: *Ortam hangisi?* → *Su hangi yöne gider?* → *Hücrenin duvarı var mı?* Üçüncü soru, aynı ortamda iki farklı sonucu tek başına açıklar.',
          },
          {
            id: 'os-kap-next',
            type: 'next_step',
            body: `Buraya kadar gördüğün bütün taşımalarda ortak bir şey vardı: madde ==çoktan aza== gidiyordu ve hücre enerji harcamıyordu.

Sıradaki bölümde bu kural kırılacak. Hücre bazen maddeyi **azdan çoğa**, yani derişim farkına karşı taşımak zorunda kalır — ve bunun bir bedeli vardır: **ATP**.`,
            topics: ['Aktif taşıma ve toplu taşıma', 'Sitoplazma ve organeller'],
          },
          {
            id: 'os-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Açılıştaki soruyu hatırlıyor musun?

Aynı bardakta alyuvar patlıyordu, bitki hücresi patlamıyordu. Şimdi cevabını tek cümleyle söyleyebiliyor musun?

Hücre duvarı diyebiliyorsan bu bölüm sende oturmuş demektir.

Bir kontrol daha: plazmolizde büzülen şey ne? Sitoplazma mı, duvar mı?

Sitoplazma. Duvar yerinde kalıyor.

Bu ikisine cevap verebiliyorsan aktif taşımaya geçebilirsin.`,
          },
        ],
      },
    ],
  },
}
