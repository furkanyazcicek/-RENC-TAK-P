/**
 * TYT BİYOLOJİ · Hücre — 5. Bölüm
 * ÇEKİRDEK VE HÜCRE TİPLERİ
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ders, bir önceki bölümde AÇIK BIRAKILAN soruyla başlıyor: ribozomda
 *   üretilecek proteinin dizilimini kim belirliyor? Konuyu "çekirdek
 *   yönetim merkezidir" cümlesiyle açmak yerine, cevabı aranan bir soru
 *   olarak kurmak öğrenciyi çekirdeğe ihtiyaç duyar hâle getiriyor.
 *
 * · Kromatin–kromozom ilişkisi ayrı bir başlık. Öğrencilerin çoğu bunları
 *   iki ayrı molekül sanıyor; oysa aynı DNA'nın iki farklı sarılma hâli.
 *   Şemada da tek bir okla bağlandılar.
 *
 * · Prokaryot–ökaryot ve bitki–hayvan karşılaştırmaları AYNI derste,
 *   çünkü ikisi de "neyin eklendiği / neyin eksildiği" mantığıyla
 *   öğreniliyor. Ayrı derslere bölünürse öğrenci iki ayrı liste
 *   ezberliyor ve karıştırıyor.
 *
 * · ORTAK YAPILAR ayrıca vurgulanıyor: hücre zarı, sitoplazma, ribozom,
 *   DNA. TYT'de "üçünde de bulunur" soruları doğrudan bu dörtlüden geliyor.
 *
 * · Bu ders Hücre konusunun sonu olduğu için kapanışta beş bölümün
 *   tamamını birleştiren bir çerçeve veriliyor.
 */

export default {
  slug: 'hucre-cekirdek-hucre-tipleri',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre',
  },
  order: 5,
  partLabel: '5. Bölüm',
  goldStandard: true,
  title: 'Çekirdek ve Hücre Tipleri',
  subtitle:
    'Bir önceki bölümde açık kalan soruyu kapatıyoruz: proteinin dizilimini kim belirliyor? Cevap çekirdekte — ve oradan üç hücre tipine geçeceğiz.',

  document: {
    version: 3,
    estimated_minutes: 42,
    prerequisites: [
      {
        topic: 'Hücre — 4. Bölüm',
        why: 'Salgı yolunun başında ribozom vardı; oradaki bilgi çekirdekten geliyor.',
      },
      {
        topic: 'Canlıların Temel Bileşenleri — 4. Bölüm',
        why: 'Nükleotit, DNA ve baz eşleşmesi burada tekrar karşına çıkacak.',
      },
    ],
    outcomes: [
      'Çekirdeğin dört kısmını sayıp her birinin görevini söyleyebileceksin.',
      'Çekirdek zarındaki porların neden zorunlu olduğunu açıklayabileceksin.',
      'Kromatin ile kromozomun aynı molekülün iki hâli olduğunu anlatabileceksin.',
      'DNA’nın histonlardan nükleozoma, kromatin lifinden kromozoma nasıl paketlendiğini işleviyle ilişkilendirebileceksin.',
      'Prokaryot ve ökaryot hücreyi dört ölçütle karşılaştırabileceksin.',
      'Bitki ve hayvan hücresinin farklarını ve **ortak yapılarını** ayırt edebileceksin.',
      'Çekirdeksiz hücre örnekleri verip bunun sonuçlarını tartışabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'ck-giris',
        kind: 'opening',
        title: 'Açık kalan soru',
        lead: 'Bir önceki bölümü bir soruyla bitirmiştik. Şimdi onu cevaplıyoruz.',
        blocks: [
          {
            id: 'ck-giris-1',
            type: 'prose',
            body: `Geçen bölümde salgı yolunu kurduk: ribozom → granüllü ER → Golgi → koful → ekzositoz.

Hattın ilk durağında protein sentezleniyordu. Ama bir soru açık kaldı: ==ribozom hangi amino asidi hangi sıraya koyacağını nereden biliyor?==

Bunun önemini hatırla. Proteinler konusunda öğrendiğin zincir şuydu: **dizilim şekli belirler, şekil işlevi belirler.** Yani dizilim yanlışsa protein işe yaramaz. Bu kadar kritik bir bilginin rastgele belirlenmesi düşünülemez.

Ribozom bu bilgiyi kendisi üretmez; kendisine **getirilir**. Getiren molekül mRNA'dır ve mRNA bu bilgiyi ==DNA'dan kopyalar==.

DNA da hücrenin en korunaklı bölmesinde durur: çekirdekte.`,
          },
          {
            id: 'ck-giris-why',
            type: 'why',
            question: 'DNA neden ayrı bir zarla çevrili bölmede tutuluyor?',
            body: `Prokaryotlarda DNA sitoplazmada serbest durur ve o canlılar gayet iyi yaşar. O hâlde ökaryot hücre neden bu ek yapıyı geliştirmiş?

İki sebebi var:

**Birincisi: koruma.** Sitoplazma tepkimelerin yürüdüğü kalabalık bir ortamdır; enzimler, serbest radikaller, sindirim ürünleri orada dolaşır. DNA hücrenin ==tek ve yeri doldurulamaz== bilgi kaynağıdır. Ayrı bir zarla çevrelemek, onu bu kalabalıktan korur.

**İkincisi: denetim.** Çekirdek zarı, DNA'nın okunması ile proteinin üretilmesini ==zaman ve mekân olarak ayırır==. mRNA çekirdekte üretilir, işlenir, gerekirse düzeltilir; ancak ondan sonra sitoplazmaya çıkar. Prokaryotta böyle bir ara aşama yoktur — orada okuma ve üretim aynı anda, aynı yerde olur.

Bu ayrım ökaryot hücreye gen ifadesini çok daha ince ayarlama imkânı verir. Karmaşık çok hücreli canlıların ortaya çıkabilmesinin sebeplerinden biri budur.`,
          },
          {
            id: 'ck-giris-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Çekirdek bir **organel değildir**; hücrenin ayrı bir bölümü olarak sayılır. “Aşağıdakilerden hangisi organeldir?” sorusunda çekirdeği işaretlemek yaygın bir hatadır.',
          },
          {
            id: 'ck-giris-audio',
            type: 'audio_script',
            body: `Geçen bölümü bir soruyla bitirmiştik. Hatırlıyor musun?

Ribozom protein üretiyordu. Ama hangi amino asidi hangi sıraya koyacağını nereden biliyor?

Bu sıradan bir ayrıntı değil. Proteinler konusundan hatırla: dizilim şekli belirler, şekil işlevi belirler. Yani dizilim yanlışsa protein çöp.

Cevap çekirdekte. DNA orada duruyor ve bilgi oradan geliyor.

Şimdi bir soru daha sor kendine: prokaryotlarda çekirdek yok ve gayet iyi yaşıyorlar. O hâlde ökaryot hücre neden bu zahmete girmiş?

Cevabını bölüm içinde vereceğiz. Ama ipucu şu: mesele sadece korumak değil, denetlemek.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-yapi',
        kind: 'build',
        title: 'Çekirdeğin yapısı',
        lead: 'Dört kısım var ve dördü de sınavda ayrı ayrı sorulabiliyor.',
        blocks: [
          {
            id: 'ck-yapi-figure',
            type: 'figure',
            kind: 'cekirdek-yapisi',
            width: 'full',
            title: 'Çekirdeğin yapısı ve kromatin–kromozom ilişkisi',
            purpose:
              'Çekirdek zarının çift katlı ve porlu olduğunu göstermek; kromatin ile kromozomun aynı molekülün iki hâli olduğunu tek okla kurmak.',
            complexity: 'high',
            caption:
              'Sağdaki oka dikkat et: kromatin ve kromozom ==iki ayrı yapı değil==, aynı DNA’nın iki farklı sarılma hâli. Bölünme başlayınca sarılır, bitince yeniden açılır.',
            focus: [
              {
                title: 'Çift katlı çekirdek zarı',
                body: 'Çekirdek, mitokondri ve kloroplast gibi **çift zarlıdır**. Dış zar endoplazmik retikulumla süreklidir; yani çekirdek zarı, hücrenin iç zar sisteminin bir parçasıdır.',
              },
              {
                title: 'Porlar',
                body: 'Zar üzerindeki delikler. mRNA gibi büyük moleküllerin çekirdekten çıkması, ribozom alt birimlerinin dışarı taşınması ve bazı proteinlerin içeri girmesi buradan olur. **Por olmasaydı protein sentezi hiç gerçekleşemezdi.**',
              },
              {
                title: 'Çekirdekçik',
                body: 'Çekirdeğin içindeki yoğun bölge. Görevi **ribozomun alt birimlerini üretmektir**. Zarsızdır. Bol protein üreten hücrelerde belirgin biçimde büyüktür — bu, hücrenin işini tahmin etmede bir ipucudur.',
              },
              {
                title: 'Kromatin',
                body: 'DNA’nın histon proteinlerine sarılmış, dağınık ve ince hâli. Hücre bölünmediği zamanlarda DNA bu hâldedir. **Yalnızca bu hâlde okunabilir** — çünkü sıkı sarılmış bir DNA’dan bilgi kopyalanamaz.',
              },
              {
                title: 'Kromozom',
                body: 'Bölünme başlayınca kromatinin kısalıp kalınlaşmış hâli. Amaç, uzun ve dolaşık DNA ipliklerinin bölünme sırasında **düzgün paylaştırılabilmesidir**. Bu hâldeyken DNA okunamaz.',
              },
            ],
            audio_script: `Şemaya dıştan içe doğru bak.

En dışta iki çizgi var, iç içe. Bu çekirdek zarı ve çift katlı.

Şimdi o çizgilerin üzerindeki küçük halkaları bul. Bunlar porlar, yani delikler.

Bir saniye dur ve düşün: por olmasaydı ne olurdu?

mRNA çekirdekten çıkamazdı. Ribozom sitoplazmada ama bilgi çekirdekte. İkisi buluşamazsa protein sentezi hiç olmazdı. Yani por dekoratif bir ayrıntı değil, zorunluluk.

İçeri gir. Pembe daireyi bul — çekirdekçik. Burada ribozomun parçaları üretiliyor.

Altındaki dalgalı çizgiler kromatin. DNA'nın dağınık hâli.

Şimdi sağa bak. Bir ok var ve okun ucunda kalın, X benzeri bir yapı: kromozom.

Şuna dikkat et: ok tek yönlü değil, bir dönüşümü gösteriyor. Kromatin ve kromozom iki ayrı molekül değil. Aynı DNA. Sadece biri açık, biri sarılmış.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-kromatin',
        kind: 'deepen',
        title: 'Kromatin ve kromozom: aynı DNA, iki hâl',
        lead: 'Bu ayrım sınavda doğrudan soruluyor ve en çok yanlış hatırlanan konulardan biri.',
        blocks: [
          {
            id: 'ck-krom-prose',
            type: 'prose',
            body: `Bir insan hücresindeki DNA'nın toplam uzunluğu yaklaşık **2 metredir**. Bu iplik, çapı milimetrenin binde biri kadar olan bir çekirdeğin içine sığdırılmak zorundadır.

Çözüm sarmaktır. DNA, **histon** adı verilen proteinlerin etrafına sarılır; bu sarılmış hâle **kromatin** denir.

Ama sarılma her zaman aynı yoğunlukta değildir ve bunun bir sebebi var:

- **Hücre bölünmüyorken** DNA'nın okunması gerekir. Sıkı sarılmış bir ipten bilgi kopyalanamaz, bu yüzden DNA görece gevşek durur — kromatin hâli.
- **Hücre bölünürken** DNA'nın iki yavru hücreye eksiksiz paylaştırılması gerekir. 2 metrelik dolaşık bir ipliği bölüştürmek imkânsızdır; bu yüzden DNA iyice sarılıp kısalır ve kalınlaşır — kromozom hâli.

Yani ==iki hâl, iki farklı ihtiyaca cevap veriyor==: okunabilirlik ve taşınabilirlik. Bir molekül ikisini aynı anda sağlayamaz, bu yüzden hücre duruma göre şekil değiştirir.`,
          },
          {
            id: 'ck-krom-figure',
            type: 'figure',
            kind: 'kromatin-paketlenme',
            width: 'full',
            title: 'İki metrelik DNA çekirdeğe nasıl sığar?',
            purpose:
              'DNA’nın histonlara sarılmasından nükleozom ve kromatin halkalarına, oradan yoğun kromozoma uzanan paketlenme basamaklarını tek molekülün devamı olarak göstermek.',
            complexity: 'high',
            caption:
              'Soldan sağa yeni moleküller oluşmuyor; ==aynı DNA giderek daha yoğun paketleniyor.== Nükleozom yer kazandırır, kromatin paketlenme ile okunabilirlik arasında denge kurar, kromozom ise bölünmede güvenli taşıma sağlar.',
            focus: [
              {
                title: 'Nükleozom',
                body: 'DNA, sekiz histon proteininden oluşan bir çekirdeğin çevresine sarılır. “İpe dizilmiş boncuklar” görünümündeki bu tekrar birimi, DNA paketlenmesinin ilk basamağıdır.',
              },
              {
                title: 'Kromatin lifi ve halkalar',
                body: 'Nükleozom dizisi kalınlaşır ve bir protein iskelete tutunan halkalar oluşturur. Gevşek bölgelerde genler okunabilir; sıkı bölgelerde enzimlerin DNA’ya erişimi azalır.',
              },
              {
                title: 'Kromozom',
                body: 'Bölünme öncesinde paketlenme en üst düzeye çıkar. Eşlenmiş kromozom iki kardeş kromatitten oluşur; sentromer bölgesi düzgün ayrılma için bağlantı noktasıdır.',
              },
            ],
            audio_script: `Bu görseli soldan sağa tek bir ipliği izleyerek oku.

Soldaki çift sarmal DNA. Şimdi onu turuncu protein çekirdeğinin çevresinde görüyorsun. Bu bir nükleozom; DNA paketlenmesinin ilk tekrarlayan birimi.

Nükleozomlar yan yana geldikçe daha kalın bir lif oluşuyor. Lif de halkalar yapıp bir iskelete tutunuyor. DNA hâlâ aynı DNA, yalnız kapladığı alan küçülüyor.

En sağda paketlenmenin en yoğun hâli var: kromozom.

Burada iki şeyi ayır. Nükleozom ve kromatin yalnız depolama çözümü değil; hangi genin okunabileceğini de etkiler. Kromozomun asıl işi ise bölünmede güvenli taşıma.

Kısacası: DNA değişmiyor, paketlenme derecesi ve o anda çözdüğü problem değişiyor.`,
          },
          {
            id: 'ck-krom-trap',
            type: 'trap',
            title: 'Kromatin ile kromozomu iki ayrı molekül sanmak',
            wrong:
              '“Çekirdekte kromatin bulunur, bölünme sırasında kromozomlar oluşur” cümlesini, kromozomların yeni yapıldığı biçiminde okumak.',
            right:
              'Yeni bir molekül üretilmez. Var olan kromatin **sarılarak** kromozom hâlini alır; bölünme bitince yeniden açılıp kromatine döner. ==İkisi aynı DNA’dır.==',
            body:
              'Sınavda ayırt edici öncül şudur: "Kromatin ve kromozomun kimyasal yapısı aynıdır" — bu ifade **doğrudur**. Farkları yalnızca sarılma derecesidir.',
          },
          {
            id: 'ck-krom-checkpoint',
            type: 'checkpoint',
            prompt:
              'Bir hücrenin çekirdeğinde DNA’nın tamamı kromozom hâlinde bulunsaydı hücre için ne gibi bir sorun doğardı?',
            hint: 'Sıkı sarılmış bir ipten bilgi okunabilir mi?',
            answer: `Hücre protein üretemezdi ve kısa sürede ölürdü.

Sıkı sarılmış DNA'ya, bilgiyi kopyalayacak enzimler ulaşamaz. Kromozom hâlindeyken DNA ==okunamaz==. Okunamazsa mRNA üretilemez; mRNA olmazsa ribozom hangi proteini yapacağını bilemez.

Bu yüzden hücre kromozom hâlini yalnızca **bölünme süresince** kullanır. Bölünme bittiği anda DNA yeniden açılıp kromatin hâline döner ve protein sentezi kaldığı yerden devam eder.

Buradaki genel fikir şu: biyolojide ==bir yapının iki farklı hâli olması genellikle iki farklı ihtiyaca cevap verdiği içindir==. Aynı mantığı proteinlerde de görmüştün — katlanmış hâli iş görür, açılmış hâli görmez.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-tipler',
        kind: 'build',
        title: 'Üç hücre yan yana',
        lead: 'Prokaryot, hayvan ve bitki hücresini ayrı ayrı değil, karşılaştırmalı öğreneceğiz.',
        blocks: [
          {
            id: 'ck-tip-figure',
            type: 'figure',
            kind: 'hucre-tipleri',
            width: 'full',
            title: 'Prokaryot, hayvan ve bitki hücresi',
            purpose:
              'Üç hücre tipini yan yana koyarak neyin eklendiğini ve neyin ortak kaldığını tek bakışta göstermek.',
            complexity: 'high',
            caption:
              'Soldan sağa gidildikçe yapı **eklenir**. Ama en alttaki satıra dikkat: ==hiçbiri ortak dörtlüyü kaybetmez== — hücre zarı, sitoplazma, ribozom ve DNA üçünde de vardır.',
            focus: [
              {
                title: 'Prokaryot hücre',
                body: 'Çekirdek ve zarlı organel yoktur. Ana DNA çoğunlukla **halkasaldır** ve nükleoit bölgede bulunur; 70S ribozom vardır. Bakteri duvarı **peptidoglikan**, arke duvarı ise farklı maddelerden yapılır. Bakteriler ve arkeler bu gruptadır.',
              },
              {
                title: 'Hayvan hücresi',
                body: 'Çekirdek ve zarlı organeller vardır; DNA çekirdekte, histonlara sarılı hâlde bulunur. **Sentrozom** bulunur, lizozom belirgindir. Hücre duvarı, kloroplast ve büyük merkezî koful **yoktur**. Fazla glikoz **glikojen** olarak depolanır.',
              },
              {
                title: 'Bitki hücresi',
                body: 'Hayvan hücresindeki her şeye ek olarak **selüloz hücre duvarı**, **kloroplast** ve **büyük merkezî koful** bulunur. Gelişmiş bitkilerde sentrozom yoktur. Fazla glikoz **nişasta** olarak depolanır.',
              },
            ],
            audio_script: `Üç hücre yan yana duruyor. Soldan sağa gitmeden önce bir şey söyleyeyim: bu şemayı "neyin eksik olduğu" listesi olarak okuma. "Neyin eklendiği" listesi olarak oku.

Solda prokaryot. En sade hâli. Bir zar, sitoplazma, serbest duran halkasal DNA ve ribozomlar. Çekirdek yok, zarlı organel yok.

Ortada hayvan hücresi. Ne eklendi? Çekirdek geldi, zarlı organeller geldi. DNA artık serbest değil, çekirdeğin içinde.

Sağda bitki hücresi. Hayvan hücresindeki her şey duruyor, üstüne üç şey eklendi: kalın dış çizgi hücre duvarı, yeşil ovaller kloroplast, ortadaki büyük mavi alan merkezî koful.

Şimdi en alttaki satırı oku. Üçünde de ortak olan dört yapı: hücre zarı, sitoplazma, ribozom, DNA.

Bunu aklında tut. "Üçünde de bulunur" soruları doğrudan bu dörtlüden geliyor.`,
          },
          {
            id: 'ck-tip-compare',
            type: 'compare',
            title: 'Prokaryot ve ökaryot hücre',
            columns: ['Prokaryot', 'Ökaryot'],
            rows: [
              { label: 'Çekirdek', values: ['Yok — DNA sitoplazmada serbest', 'Var — DNA çekirdek zarıyla çevrili'] },
              { label: 'DNA biçimi', values: ['Genellikle halkasal; bakteride histon yok, arkede histon/histon benzeri protein olabilir', 'Doğrusal, **histonlara sarılı**'] },
              { label: 'Zarlı organel', values: ['Yok', 'Var'] },
              { label: 'Ribozom', values: ['Var — **70S**', 'Var — sitoplazmada **80S**'] },
              { label: 'Hücre duvarı', values: ['Bakteride peptidoglikan; arkede farklı yapı', 'Bitki ve mantarda var, hayvanda yok'] },
              { label: 'Örnek', values: ['Bakteriler, arkeler', 'Bitki, hayvan, mantar, protista'] },
            ],
            insight:
              'Dördüncü satıra dikkat: ==ribozom her ikisinde de var==. “Prokaryotta organel yoktur” cümlesi eksiktir; doğrusu **zarlı organel** yoktur. Mitokondri ve kloroplastta da 70S ribozom bulunması ise endosimbiyoz teorisinin kanıtlarındandır — o organeller bir zamanlar prokaryottu.',
          },
          {
            id: 'ck-tip-trap',
            type: 'trap',
            title: 'Bitki hücresinde mitokondri aramamak',
            wrong: '“Bitki fotosentez yapıyor, o hâlde enerjiyi kloroplasttan alır; mitokondriye ihtiyacı yoktur” diye düşünmek.',
            right:
              'Bitki hücresinde **hem kloroplast hem mitokondri** bulunur. Kloroplast besin **üretir**, mitokondri o besini **ATP’ye çevirir**. Bitki de tıpkı hayvan gibi hücresel solunum yapar — üstelik gece gündüz aralıksız.',
            body:
              'Bu hatanın kaynağı fotosentezi solunumun yerine koymaktır. Oysa ikisi birbirinin alternatifi değil, ==art arda gelen iki basamaktır==: fotosentez glikozu yapar, solunum onu harcar.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-bitki-hayvan',
        kind: 'deepen',
        title: 'Bitki ve hayvan hücresi: farklar ve ortaklar',
        lead: 'Farkları saymak kolay. Asıl kaybettiren yer ortak olanları unutmak.',
        blocks: [
          {
            id: 'ck-bh-table',
            type: 'table',
            title: 'Yapı yapı karşılaştırma',
            columns: ['Yapı', 'Bitki', 'Hayvan'],
            rows: [
              ['Hücre zarı', 'Var', 'Var'],
              ['Sitoplazma', 'Var', 'Var'],
              ['Ribozom', 'Var', 'Var'],
              ['Çekirdek', 'Var', 'Var'],
              ['Mitokondri', 'Var', 'Var'],
              ['ER ve Golgi', 'Var', 'Var'],
              ['**Hücre duvarı**', 'Var — selüloz', 'Yok'],
              ['**Kloroplast**', 'Var', 'Yok'],
              ['**Merkezî koful**', 'Var — büyük', 'Yok — kofullar küçük'],
              ['**Sentrozom**', 'Gelişmiş bitkilerde yok', 'Var'],
              ['Lizozom', 'Nadir / belirsiz', 'Belirgin'],
              ['Depo maddesi', 'Nişasta', 'Glikojen'],
            ],
            caption:
              'İlk altı satır **ortak**; kalın yazılanlar ise ayırt edici. Sınavda “bitki hücresinde bulunmaz” sorusunun cevabı genelde **sentrozom**, “hayvan hücresinde bulunmaz” sorusunun cevabı ise **hücre duvarı, kloroplast veya merkezî kofuldur**.',
          },
          {
            id: 'ck-bh-prose',
            type: 'prose',
            body: `Bu tabloyu ezberlemek yerine üç soruya indirgeyebilirsin:

**1. Kendi besinini üretiyor mu?** Üretiyorsa kloroplastı vardır.
**2. Sabit mi yaşıyor?** Sabitse desteğe ihtiyacı vardır → hücre duvarı ve turgor sağlayan merkezî koful.
**3. Hareket ediyor mu?** Ediyorsa esnek olmalıdır → duvar yoktur, kofullar küçüktür.

Görüldüğü gibi farkların hepsi ==canlının yaşam biçiminden== çıkıyor. Bitki yerinde durur ve kendi besinini üretir; hayvan hareket eder ve besinini dışarıdan alır. Hücre yapısı bu iki stratejinin sonucudur.

Bir ayrıntı: bazı bitki hücrelerinde çekirdek bulunmaz. Odun borularının (trake) olgun hücreleri ölüdür; kalburlu boru hücreleri ise canlıdır ama çekirdeklerini kaybetmişlerdir. İnsanda da olgun **alyuvarların çekirdeği yoktur** — bu sayede daha fazla hemoglobin taşıyabilirler, ama bölünemez ve kendilerini onaramazlar; ömürleri yaklaşık 120 gündür.`,
          },
          {
            id: 'ck-bh-connection',
            type: 'connection',
            title: 'Buradan nereye?',
            body:
              'Kromozom kavramını burada tanıdın ama işini görmedin. Bir sonraki konuda — **Hücre Bölünmeleri** — kromozomların nasıl paylaştırıldığını göreceksin. Çekirdek, kromatin ve kromozom hakkında bugün öğrendiğin her şey oranın altyapısı. Ayrıca prokaryot–ökaryot ayrımı, **Canlıların Sınıflandırılması** konusunda âlemlerin temel ölçütlerinden biri olacak.',
            links: ['Hücre Bölünmeleri', 'Canlıların Sınıflandırılması', 'AYT · Genden Proteine'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Bu bölümün en çok puan kaybettiren üç noktası aşağıda.',
        blocks: [
          {
            id: 'ck-uyg-worked',
            type: 'worked_example',
            title: 'Bilinmeyen hücreyi tanımlama',
            prompt:
              'Bir öğrenci mikroskopta incelediği hücre hakkında şu gözlemleri yapıyor:\\n\\n**(1)** Ribozomlar görülüyor.\\n**(2)** Çekirdek zarı ayırt edilebiliyor.\\n**(3)** Mitokondri bulunuyor.\\n**(4)** Hücrenin dışında kalın, düzgün bir sınır var.\\n**(5)** Yeşil renkli organeller görülmüyor.\\n\\nBu hücre hangi tipte olabilir?',
            steps: [
              {
                title: 'Prokaryot mu, ökaryot mu?',
                body: 'İkinci gözlemde çekirdek zarı görülüyor. Bu tek başına hücrenin **ökaryot** olduğunu söyler; prokaryotta çekirdek zarı yoktur. Üçüncü gözlem de bunu destekler — mitokondri zarlı bir organeldir.',
              },
              {
                title: 'Dördüncü gözlemi yorumla',
                body: 'Kalın ve düzgün bir dış sınır **hücre duvarına** işaret eder. Hayvan hücresinde hücre duvarı bulunmaz; bu gözlem hayvan hücresini eler.',
              },
              {
                title: 'Beşinci gözlemi yorumla',
                body: 'Yeşil organel yokluğu **kloroplast bulunmadığını** gösterir. Bu, hücrenin fotosentez yapmadığını söyler — yani tipik bir yeşil bitki hücresi değildir.',
              },
              {
                title: 'Kalan ihtimali belirle',
                body: 'Ökaryot + hücre duvarı var + kloroplast yok. Bu profil **mantar hücresine** uyar. Alternatif olarak bitkinin fotosentez yapmayan bir hücresi de olabilir — örneğin kök hücresi, çünkü kökte kloroplast bulunmaz.',
              },
            ],
            answer:
              'Ökaryot ve hücre duvarı taşıyan, fotosentez yapmayan bir hücre — mantar hücresi ya da bitkinin kök gibi ışık almayan bir bölgesindeki hücresi olabilir.',
            takeaway:
              'Bu soru tipinde her gözlem **bir ihtimali eler**. Kloroplast yokluğunu doğrudan “hayvan hücresi” diye okuma; hücre duvarı varsa hayvan olamaz. ==Gözlemleri kesiştir, tek bir gözlemle karar verme.==',
          },
          {
            id: 'ck-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Prokaryot, bitki ve hayvan hücresinin **üçünde de** bulunan yapılar aşağıdakilerin hangisinde birlikte verilmiştir?',
            options: [
              'Hücre duvarı, ribozom, mitokondri',
              'Hücre zarı, sitoplazma, ribozom, DNA',
              'Çekirdek, ribozom, hücre zarı',
              'Ribozom, Golgi, DNA',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Üç hücre tipinde de ortak olan dörtlü şudur: **hücre zarı, sitoplazma, ribozom, DNA**.

Diğerleri neden yanlış:
- **A:** Hücre duvarı hayvan hücresinde yoktur; mitokondri prokaryotta yoktur.
- **C:** Çekirdek prokaryotta yoktur.
- **D:** Golgi zarlı bir organeldir; prokaryotta bulunmaz.

Bu dörtlüyü aklında tut — TYT’de “hangisi üçünde de bulunur” soruları neredeyse her zaman bu listeden gelir.`,
          },
          {
            id: 'ck-uyg-quiz2',
            type: 'quiz',
            purpose: 'error',
            question: 'Kromatin ve kromozom ile ilgili aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Kromatin DNA’dan, kromozom RNA’dan oluşur',
              'Bölünme sırasında kromatin yıkılır, yerine kromozom sentezlenir',
              'İkisi aynı DNA’nın farklı sarılma hâlleridir',
              'Kromozom hâlindeyken DNA daha kolay okunur',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Kromatin ve kromozom **aynı moleküldür**; fark yalnızca sarılma derecesindedir.

- **A yanlış:** İkisi de DNA’dır; RNA ile ilgisi yoktur.
- **B yanlış:** Yeni bir molekül sentezlenmez, var olan kromatin sarılır.
- **D yanlış:** Tam tersi. Kromozom hâlindeyken DNA **sıkı sarılıdır ve okunamaz**; okunabilmesi için kromatin hâlinde, yani gevşek olması gerekir.

D seçeneği en çok işaretlenen çeldiricidir. Mantığını kur: ==sıkı sarılmış bir ipten bilgi kopyalanamaz.==`,
          },
          {
            id: 'ck-uyg-quiz3',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bol miktarda protein salgılayan bir hücrede aşağıdakilerden hangisinin belirgin biçimde gelişmiş olması **beklenmez**?',
            options: ['Çekirdekçik', 'Granüllü endoplazmik retikulum', 'Golgi aygıtı', 'Sentrozom'],
            answer_index: 3,
            explanation: `Doğru cevap **sentrozom**. Sentrozomun görevi **hücre bölünmesinde iğ ipliklerini oluşturmaktır**; protein salgısıyla ilgisi yoktur.

Diğer üçü doğrudan salgı yoluyla ilgilidir:
- **Çekirdekçik:** Ribozomun alt birimlerini üretir. Çok protein sentezlenecekse çok ribozom gerekir.
- **Granüllü ER:** Salgı proteinleri burada katlanır.
- **Golgi:** Proteinleri işler ve paketler.

Bu soru tipinde önce **hattı** kur (ribozom → ER → Golgi → koful), sonra listede o hatta olmayanı bul.`,
          },
          {
            id: 'ck-uyg-quiz4',
            type: 'quiz',
            purpose: 'apply',
            question: 'Aşağıdakilerden hangisinin çekirdek porlarından geçmesi **beklenmez**?',
            options: [
              'Olgun mRNA’nın sitoplazmaya çıkması',
              'Ribozom alt birimlerinin sitoplazmaya çıkması',
              'Çekirdekte görev yapacak bir proteinin içeri girmesi',
              'Kromozom hâlindeki DNA’nın sitoplazmaya çıkması',
            ],
            answer_index: 3,
            explanation: `Doğru cevap **D**. Çekirdek porları seçici taşıma yapar; mRNA ve ribozom alt birimleri dışarı, çekirdek proteinleri içeri taşınabilir. Ancak hücrenin kalıtsal arşivi olan DNA çekirdekte tutulur.

Poru “her büyük molekülün geçebildiği açık delik” gibi düşünme. Por kompleksi yükü tanır, taşıma proteinleri kullanır ve yönü denetler.`,
          },
          {
            id: 'ck-uyg-quiz5',
            type: 'quiz',
            purpose: 'sequence',
            question: 'DNA’nın yoğun paketlenme sırası aşağıdakilerin hangisinde doğru verilmiştir?',
            options: [
              'DNA → kromozom → nükleozom → kromatin',
              'DNA → nükleozom → kromatin lifi/halkalar → kromozom',
              'Nükleozom → DNA → kromozom → kromatin',
              'Kromatin → histon → DNA → kromozom',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. DNA önce histon çekirdeklerine sarılarak **nükleozomları**, nükleozomlar daha kalın lif ve halkaları, bunlar da bölünme öncesinde en yoğun **kromozom** hâlini oluşturur.

Bu sıralamada yeni bir kalıtsal molekül oluşmaz. Başından sonuna kadar paketlenen madde aynı DNA’dır.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'ck-kapanis',
        kind: 'close',
        title: 'Hücre konusunu kapatalım',
        lead: 'Bu, beş bölümlük konunun sonu. Önce bu bölümü, sonra beşini birlikte toparlıyoruz.',
        blocks: [
          {
            id: 'ck-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Çekirdek **çift katlı** bir zarla çevrilidir ve zarında **porlar** bulunur; por olmadan mRNA çıkamaz.',
              'Çekirdekçik **ribozomun alt birimlerini üretir** ve zarsızdır.',
              'Kromatin ve kromozom **aynı DNA’nın** iki farklı sarılma hâlidir.',
              'DNA önce histonlara sarılı **nükleozom**, sonra kromatin lifi ve halkalar, bölünmede ise yoğun kromozom hâline gelir.',
              'DNA yalnızca **kromatin hâlindeyken okunabilir**; kromozom hâli taşınmak içindir.',
              'Çekirdek bir **organel değildir**; hücrenin ayrı bir bölümüdür.',
              'Prokaryotta **zarlı organel** yoktur — ama ribozom (70S) vardır ve DNA halkasaldır.',
              'Üç hücre tipinde de ortak dörtlü: **hücre zarı, sitoplazma, ribozom, DNA**.',
              'Bitki hücresine özgü: **hücre duvarı, kloroplast, büyük merkezî koful**. Hayvana özgü: **sentrozom**.',
              'Bitki hücresinde **hem kloroplast hem mitokondri** bulunur; fotosentez solunumun yerine geçmez.',
              'Bitki nişasta, hayvan glikojen depolar.',
            ],
          },
          {
            id: 'ck-kap-connection',
            type: 'connection',
            title: 'Beş bölümü birlikte düşün',
            body: `Hücre konusu bitti. Geriye dönüp baktığında şu çerçeveyi görebilmelisin:

**Sınır:** Hücre zarı, hem kapalı hem geçirgen olma problemini fosfolipit çift tabakasıyla çözer.
**Giriş–çıkış:** Küçük ve kutupsuz olan doğrudan geçer; kutuplu olan proteinden geçer; derişime karşı gidiliyorsa ATP gerekir; çok büyükse koful gerekir.
**Su:** Osmoz her zaman pasiftir; sonucu belirleyen şey hücrenin duvarı olup olmamasıdır.
**İş bölümü:** Organeller zar sayısına göre gruplanır ve bir hat hâlinde çalışır.
**Yönetim:** Bütün bu işlerin bilgisi çekirdekteki DNA’dadır.

Bu beş cümle, konunun tamamının iskeletidir.`,
            links: ['Hücre Bölünmeleri', 'Canlıların Sınıflandırılması', 'AYT · Canlılarda Enerji Dönüşümleri'],
          },
          {
            id: 'ck-kap-memory',
            type: 'memory',
            body:
              'Hücre tipi sorularında üç soruyu sırayla sor: *Çekirdek var mı?* (prokaryot/ökaryot) → *Hücre duvarı var mı?* (hayvanı eler) → *Kloroplast var mı?* (bitkiyi mantardan ayırır).',
          },
          {
            id: 'ck-kap-next',
            type: 'next_step',
            body: `Sıradaki konu **Hücre Bölünmeleri**.

Orada bugün tanıştığın kromozomların ne işe yaradığını göreceksin: mitozda eşit paylaştırılıyor, mayozda yarıya indiriliyor. Kromatin–kromozom dönüşümünü iyi kurduysan o konu çok daha kolay gelecek.`,
            topics: ['Hücre Bölünmeleri', 'Kalıtım'],
          },
          {
            id: 'ck-kap-audio',
            type: 'audio_script',
            body: `Hücre konusunu bitirdin. Beş bölüm.

Kapatmadan önce şunu yap: kâğıt kalem al ve üç sütun çiz — prokaryot, bitki, hayvan. Sonra şu yapıları yerleştir: hücre zarı, çekirdek, ribozom, mitokondri, kloroplast, hücre duvarı, sentrozom.

Tabloyu kitaba bakmadan doldurabiliyorsan bu konu sende oturmuş demektir.

Bir de şunu kontrol et: kromozom hâlindeki DNA okunabilir mi?

Okunamaz. Okunması için kromatin hâlinde, yani gevşek olması gerekir.

Bu ikisine cevap verebiliyorsan hücre bölünmelerine geçebilirsin.`,
          },
        ],
      },
    ],
  },
}
