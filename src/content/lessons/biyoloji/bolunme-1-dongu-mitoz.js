/**
 * TYT BİYOLOJİ · Hücre Bölünmeleri — 1. Bölüm
 * HÜCRE DÖNGÜSÜ VE MİTOZ
 * ==================================================================
 *
 * KONU ÜÇ BÖLÜME AYRILDI
 *   1. Hücre döngüsü ve mitoz        ← bu ders
 *   2. Mayoz ve genetik çeşitlilik
 *   3. Karşılaştırma ve üreme
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Ders "mitoz nedir" ile değil, "hücre neden bölünmek ZORUNDA" ile
 *   başlıyor. Yüzey/hacim problemi kurulmadan bölünme bir tanım olarak
 *   kalıyor; kurulunca zorunluluk hâline geliyor.
 *
 * · Kromozom terimleri (kromatit, sentromer, homolog, 2n/n) mitozdan
 *   ÖNCE veriliyor. Bu terimler oturmadan evreleri anlatmak, öğrenciyi
 *   "kromozomlar ayrılır" cümlesini ezberlemeye itiyor — neyin neyden
 *   ayrıldığını bilmeden.
 *
 * · DNA'nın S evresinde eşlendiği iki ayrı yerde (şema + tuzak bloğu)
 *   vurgulanıyor. "DNA mitozda eşlenir" bu konunun en yaygın hatası.
 *
 * · Anafazda ayrılanın KARDEŞ KROMATİT olduğu özellikle işaretleniyor;
 *   mayoz I'de homologlar ayrılacak ve fark ancak bu ayrım kurulduysa
 *   anlaşılıyor.
 *
 * · Kromozom sayısı ile DNA miktarının farklı davrandığı ayrı bir
 *   tabloyla veriliyor — TYT'de doğrudan grafik olarak soruluyor.
 */

export default {
  slug: 'bolunme-dongu-mitoz',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Hücre Bölünmeleri',
  },
  order: 1,
  partLabel: '1. Bölüm',
  goldStandard: true,
  title: 'Hücre Döngüsü ve Mitoz',
  subtitle:
    'Önce şunu soralım: hücre neden bölünmek zorunda? Cevabı bilirsen mitozun bütün evreleri bir amaca hizmet eder hâle gelir.',

  document: {
    version: 2,
    estimated_minutes: 30,
    prerequisites: [
      {
        topic: 'Hücre — 5. Bölüm',
        why: 'Kromatin–kromozom dönüşümünü orada kurmuştun; burada iş başında göreceksin.',
      },
      {
        topic: 'Hücre — 1. Bölüm',
        why: 'Yüzey/hacim problemi, zardan madde geçişinin sınırlarıyla ilgili.',
      },
    ],
    outcomes: [
      'Hücrenin neden sınırsız büyüyemediğini yüzey/hacim ilişkisiyle açıklayabileceksin.',
      'Kromozom, kromatit, sentromer ve homolog kromozom kavramlarını ayırt edebileceksin.',
      'Hücre döngüsünün evrelerini sayıp DNA’nın hangi evrede eşlendiğini söyleyebileceksin.',
      'Mitozun dört evresini kromozomların davranışıyla birlikte anlatabileceksin.',
      'Bitki ve hayvan hücresinde sitokinezin farkını açıklayabileceksin.',
      'Kromozom sayısı ile DNA miktarının döngü boyunca nasıl değiştiğini yorumlayabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'mt-giris',
        kind: 'opening',
        title: 'Hücre neden sınırsız büyüyemez?',
        lead: 'Bölünmeyi bir tanım olarak değil, bir zorunluluk olarak kuracağız.',
        blocks: [
          {
            id: 'mt-giris-1',
            type: 'prose',
            body: `Bir fil ile bir farenin hücreleri neredeyse aynı büyüklüktedir. Fil daha büyük hücrelere sahip değildir; ==daha çok hücreye== sahiptir.

Bu tesadüf değil. Hücrenin büyüyebileceği bir üst sınır var ve sebebi basit bir geometri kuralı:

Bir hücre büyüdüğünde **hacmi kübik**, **yüzeyi ise karesel** olarak artar. Yani hacim her zaman yüzeyden daha hızlı büyür.

Neden sorun olsun? Çünkü hücrenin ihtiyaçları hacmiyle, madde alışverişi ise yüzeyiyle orantılıdır. Hücre büyüdükçe ==daha fazla besine ihtiyaç duyar ama onu alacak yüzeyi orantılı artmaz==.

Bir noktadan sonra zar, içerideki hacmi besleyemez hâle gelir. Hücrenin önünde iki seçenek kalır: ya büyümeyi durdurur ya da bölünür.`,
          },
          {
            id: 'mt-giris-table',
            type: 'table',
            title: 'Küp biçimli bir hücrede yüzey/hacim',
            columns: ['Kenar', 'Yüzey alanı', 'Hacim', 'Yüzey / Hacim'],
            rows: [
              ['1 birim', '6', '1', '**6,00**'],
              ['2 birim', '24', '8', '3,00'],
              ['4 birim', '96', '64', '1,50'],
              ['6 birim', '216', '216', '1,00'],
            ],
            caption:
              'Son sütun sürekli düşüyor. Hücre büyüdükçe **birim hacim başına düşen zar alanı azalır** — yani madde alışverişi yetersizleşir. Bölünme bu oranı bir anda yeniden yükseltir.',
          },
          {
            id: 'mt-giris-why',
            type: 'why',
            question: 'Yüzey/hacim tek sebep mi? Başka bir sınır var mı?',
            body: `Hayır, tek sebep değil. İkinci bir sınır daha var: ==çekirdek/sitoplazma oranı==.

Çekirdekteki DNA, sitoplazmadaki bütün işleri yönetir. Ama bir çekirdeğin yönetebileceği sitoplazma miktarının bir sınırı vardır. Hücre büyüdükçe sitoplazma artar, DNA miktarı ise aynı kalır. Bir noktadan sonra çekirdek ==yetişemez==.

Bölünme her iki sorunu birden çözer:
- Yüzey/hacim oranı yeniden yükselir.
- Her yavru hücre kendi çekirdeğine kavuşur, çekirdek/sitoplazma oranı normale döner.

Buradan çıkan genel fikir şu: **büyüme, hücrenin sayısını artırarak olur; boyutunu değil.** Kilo aldığında hücrelerin şişmez, çoğalır.`,
          },
          {
            id: 'mt-giris-audio',
            type: 'audio_script',
            body: `Bu derse bir soruyla başlayalım.

Fil mi daha büyük hücrelere sahip, fare mi?

Cevap: ikisi de aynı. Filin hücreleri daha büyük değil, daha çok.

Peki neden? Neden hücre büyüyüp fil boyutuna gelmiyor da bölünmeyi tercih ediyor?

Cevap geometride. Bir küpün kenarını iki katına çıkarırsan hacmi sekiz kat artar ama yüzeyi sadece dört kat.

Şimdi düşün: hücrenin besin ihtiyacı hacmiyle orantılı, besin alma kapasitesi ise yüzeyiyle.

Yani hücre büyüdükçe açlığı, yemek yeme kapasitesinden daha hızlı artıyor.

Bir noktadan sonra bu iş yürümüyor. Ve hücre bölünüyor.

Bu dersteki her evre, bu zorunluluğun bir parçası. Ezberlemeden önce sebebini aklında tut.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'mt-kavram',
        kind: 'build',
        title: 'Önce terimler: kromozom, kromatit, homolog',
        lead: 'Bu dört terim oturmadan evreleri anlatmak, “kromozomlar ayrılır” cümlesini ezberlemekten öteye gitmez.',
        blocks: [
          {
            id: 'mt-kav-concept',
            type: 'concept',
            term: 'Kromozom ve kardeş kromatit',
            body: `**Kromozom**, DNA’nın sarılmış hâlidir — Hücre konusundan hatırlıyorsun.

DNA **S evresinde eşlendiğinde** her kromozom kendinin bir kopyasını üretir. Bu iki özdeş kopya bir noktadan birbirine bağlı kalır ve tek bir kromozom gibi görünür:

- **Kardeş kromatit:** Eşlenme sonrası oluşan iki özdeş yarımdan her biri.
- **Sentromer:** İki kardeş kromatiti birbirine bağlayan bölge.

Kritik nokta: kardeş kromatitler ayrılmadığı sürece ==hâlâ tek bir kromozom sayılır==. Yani eşlenme kromozom sayısını değiştirmez, yalnızca DNA miktarını iki katına çıkarır.`,
          },
          {
            id: 'mt-kav-concept2',
            type: 'concept',
            term: 'Homolog kromozom',
            body: `Biri anneden, biri babadan gelen; **aynı büyüklükte, aynı şekilde ve aynı karakterleri taşıyan** kromozom çiftidir.

Dikkat: homolog kromozomlar **özdeş değildir**. Aynı karakterin bilgisini taşırlar ama farklı biçimlerini taşıyabilirler — biri mavi göz, diğeri kahverengi göz bilgisi gibi.

Bu ayrım kritik:
- **Kardeş kromatitler** birbirinin ==tıpatıp kopyasıdır== (aynı kromozomdan çoğaltılmıştır).
- **Homolog kromozomlar** ==benzerdir ama aynı değildir== (farklı ebeveynlerden gelmiştir).

İnsan vücut hücrelerinde 23 çift, yani **46 kromozom** bulunur. Homolog çifti bulunan hücrelere **diploit (2n)**, tek takım taşıyanlara **haploit (n)** denir.`,
          },
          {
            id: 'mt-kav-trap',
            type: 'trap',
            title: 'Kardeş kromatit ile homolog kromozomu karıştırmak',
            wrong: '“Anafazda homolog kromozomlar ayrılır” demek.',
            right:
              'Mitoz anafazında ayrılan şey **kardeş kromatitlerdir**. Homolog kromozomların ayrılması yalnızca **mayoz I** sırasında olur. İki olayı karıştırmak, mitoz ile mayozu karıştırmanın en yaygın sebebidir.',
            body:
              'Sabitlemek için: kardeş kromatit = **kopya**, homolog = **eş**. Mitozda kopyalar, mayoz I’de eşler ayrılır.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'mt-dongu',
        kind: 'build',
        title: 'Hücre döngüsü',
        lead: 'Mitoz, hücrenin hayatının küçük bir dilimidir. Şaşırtıcı gelebilir ama şemada göreceksin.',
        blocks: [
          {
            id: 'mt-don-figure',
            type: 'figure',
            kind: 'hucre-dongusu',
            width: 'full',
            title: 'Hücre döngüsü',
            purpose:
              'İnterfazın döngünün neredeyse tamamı olduğunu ve DNA’nın S evresinde eşlendiğini görünür kılmak.',
            complexity: 'medium',
            caption:
              'Yayların uzunluğuna dikkat et: ==interfaz döngünün yaklaşık %90’ıdır==. Mitoz, hücrenin sürekli yaptığı bir iş değil; hazırlığı çok uzun süren kısa bir olaydır.',
            focus: [
              {
                title: 'G1 — büyüme',
                body: 'Hücre hacmi artar, organel sayısı çoğalır, protein sentezi yoğundur. Döngünün en uzun evresi budur. Bölünmeyecek hücreler bu evreden çıkıp **G0** adı verilen dinlenme durumuna geçer — sinir hücreleri gibi.',
              },
              {
                title: 'S — DNA eşlenmesi',
                body: 'DNA kendini eşler. Her kromozom iki kardeş kromatitli hâle gelir. **DNA miktarı iki katına çıkar ama kromozom sayısı değişmez.** Bu evre bu konunun en kritik noktasıdır.',
              },
              {
                title: 'G2 — son hazırlık',
                body: 'Bölünme için gereken proteinler üretilir, organel sayısı son kez kontrol edilir, eşlenen DNA’da hata olup olmadığına bakılır.',
              },
              {
                title: 'M — bölünme',
                body: 'Önce **mitoz** (çekirdek bölünmesi: profaz, metafaz, anafaz, telofaz), ardından **sitokinez** (sitoplazma bölünmesi) gerçekleşir. Döngünün en kısa bölümüdür.',
              },
            ],
            audio_script: `Bu şemada bir çember var ve dört dilime bölünmüş.

Önce dilimlerin büyüklüğüne bak, adlarına değil.

En büyük dilim hangisi? G1. Sonra S, sonra G2. Bu üçü birlikte interfaz.

Şimdi M dilimini bul. En küçüğü. Bu mitoz ve sitokinez.

Bir saniye dur ve düşün: hücre zamanının çoğunu ne yaparak geçiriyor?

Bölünerek değil. Hazırlanarak.

Ortadaki yazıya bak: interfaz yaklaşık yüzde doksan.

Şimdi asıl kritik bilgiye gel. Koyu renkli S dilimini bul.

DNA burada eşleniyor. Mitozda değil, S evresinde.

Bu ayrımı iyi kur. Sınavda "DNA hangi evrede eşlenir" diye sorulduğunda cevap S. Mitoz diyen çok öğrenci var.`,
          },
          {
            id: 'mt-don-trap',
            type: 'trap',
            title: '“DNA mitoz sırasında eşlenir” sanmak',
            wrong: 'Kromozomların mitozda belirginleşmesine bakıp, çoğalmanın da orada olduğunu düşünmek.',
            right:
              'DNA **interfazın S evresinde** eşlenir. Mitoz başladığında iş çoktan bitmiştir; mitozda yalnızca ==eşlenmiş malzeme paylaştırılır==.',
            body:
              'Benzetme: S evresi fotokopi çekmektir, mitoz ise kopyaları iki dosyaya dağıtmaktır. Dağıtım sırasında fotokopi çekilmez.',
          },
          {
            id: 'mt-don-table',
            type: 'table',
            title: 'Döngü boyunca ne değişiyor?',
            columns: ['Evre', 'Kromozom sayısı', 'DNA miktarı', 'Kromatit'],
            rows: [
              ['G1 sonu', '2n (46)', '2C', 'Her kromozomda 1'],
              ['S sonu', '**2n (46)** — değişmez', '**4C** — iki katına çıktı', 'Her kromozomda 2'],
              ['G2 / Metafaz', '2n (46)', '4C', 'Her kromozomda 2'],
              ['Anafaz sonrası', '4n görünür (geçici)', '4C', 'Ayrıldı — her biri 1'],
              ['Telofaz / yavru hücre', '2n (46)', '2C', 'Her kromozomda 1'],
            ],
            caption:
              'İkinci ve üçüncü sütun **birlikte değişmiyor**. S evresinde DNA ikiye katlanırken kromozom sayısı sabit kalır. TYT’de bu iki değişkenin grafiği ayrı ayrı sorulur; karıştırma.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'mt-mitoz',
        kind: 'deepen',
        title: 'Mitozun dört evresi',
        lead: 'Evrelerin adını değil, kromozomun her evrede ne yaptığını öğreneceğiz.',
        blocks: [
          {
            id: 'mt-mit-figure',
            type: 'figure',
            kind: 'mitoz-evreleri',
            width: 'full',
            title: 'Mitozun dört evresi',
            purpose:
              'Evre adlarını kromozom davranışına bağlamak ve metafazdaki tek sıra dizilimini belirgin kılmak (mayoz I ile karşılaştırma için).',
            complexity: 'high',
            caption:
              'Metafazdaki ==tek sıra== dizilime dikkat et. Mayoz I’de kromozomlar **çift sıra** dizilecek ve iki bölünmeyi ayırt etmenin en hızlı yolu bu olacak.',
            focus: [
              {
                title: 'Profaz',
                body: 'Kromatin sarılarak kromozom hâlini alır ve mikroskopta görünür olur. Çekirdek zarı ve çekirdekçik erir. İğ iplikleri oluşmaya başlar; hayvan hücresinde bunu **sentrozom** yönetir.',
              },
              {
                title: 'Metafaz',
                body: 'Kromozomlar hücrenin ortasında, ekvator düzleminde **tek sıra** hâlinde dizilir. İğ iplikleri sentromerlere bağlanır. Kromozomların en belirgin göründüğü evre budur — karyotip çıkarmak için bu evre kullanılır.',
              },
              {
                title: 'Anafaz',
                body: 'Sentromerler bölünür ve **kardeş kromatitler** birbirinden ayrılarak zıt kutuplara çekilir. Ayrılan andan itibaren her kromatit ayrı bir kromozom sayılır; bu yüzden kromozom sayısı geçici olarak iki katı görünür.',
              },
              {
                title: 'Telofaz',
                body: 'Kromozomlar kutuplara ulaşır ve yeniden açılarak kromatin hâline döner. Her kutupta yeni bir çekirdek zarı oluşur, çekirdekçik yeniden belirir, iğ iplikleri kaybolur.',
              },
            ],
            audio_script: `Dört pano var. Soldan sağa gideceğiz ama her panoda tek bir şeye bakacaksın: kromozomlar ne yapıyor?

Birinci pano, profaz. Kromozomlar belirginleşiyor, çekirdek zarı kesikli çizilmiş — eriyor.

İkinci pano, metafaz. Kromozomlar ortada dizilmiş. Şimdi dikkat: kaç sıra hâlinde?

Tek sıra. Bunu aklında tut, çok önemli. Mayozda çift sıra dizilecekler ve farkı buradan anlayacaksın.

Üçüncü pano, anafaz. Kromozomlar ayrılıp kutuplara çekiliyor.

Bir saniye dur ve şunu sor: ayrılan şey ne? Kardeş kromatitler mi, homolog kromozomlar mı?

Kardeş kromatitler. Yani birbirinin tıpatıp kopyası olan iki yarım. Bu yüzden oluşan iki hücre birbirinin aynısı olacak.

Dördüncü pano, telofaz. İki çekirdek oluşuyor, kromozomlar tekrar açılıyor.

Dört evre, tek amaç: eşlenmiş DNA'yı iki eşit parçaya bölmek.`,
          },
          {
            id: 'mt-mit-prose',
            type: 'prose',
            body: `Mitoz **çekirdek bölünmesidir**. Sitoplazmanın bölünmesi ayrı bir olaydır ve **sitokinez** adını alır. İkisi genellikle art arda gerçekleşir ama aynı şey değildir.

Sitokinez iki hücre tipinde farklı yürür ve sebebi tanıdık:

- **Hayvan hücresinde:** Zar ortadan içeri doğru **boğumlanır** ve hücre ikiye ayrılır. Esnek zar buna izin verir.
- **Bitki hücresinde:** Sert hücre duvarı boğumlanmaya izin vermez. Bunun yerine hücrenin ortasında **ara lamel** (orta lamel) oluşur ve iki yeni hücre duvarı buradan gelişir. Ara lameli oluşturan kesecikleri **Golgi** sağlar.

Bu fark, Hücre konusunda kurduğun mantığın bir sonucu: ==duvarın sertliği hem koruma sağlıyor hem kısıt getiriyor.== Aynı sebeple bitki hücresinde endositoz da görülmüyordu.`,
          },
          {
            id: 'mt-mit-prose2',
            type: 'prose',
            body: `Mitozun sonucunda **birbirinin ve ana hücrenin aynısı olan iki hücre** oluşur. Kromozom sayısı değişmez: 2n hücreden 2n iki hücre çıkar.

Bunun üç sonucu var:

- **Büyüme:** Çok hücreli canlılar mitozla hücre sayısını artırır.
- **Yenilenme ve onarım:** Deri, kan ve bağırsak hücreleri sürekli mitozla yenilenir; yara iyileşmesi de mitozla olur.
- **Eşeysiz üreme:** Tek hücrelilerde ve bazı çok hücreli canlılarda (bitkilerde vejetatif üreme, denizyıldızında rejenerasyon) yeni birey mitozla oluşur.

Üçünde de ortak nokta şu: ==mitoz genetik çeşitlilik yaratmaz==. Oluşan hücreler ana hücreyle özdeştir. Çeşitliliğin nereden geldiğini bir sonraki bölümde göreceksin.`,
          },
          {
            id: 'mt-mit-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Mitoz **bütün** ökaryotlarda görülür — hem eşeyli hem eşeysiz üreyen canlılarda. “Mitoz yalnızca eşeysiz üreyen canlılarda görülür” ifadesi yanlıştır.',
          },
          {
            id: 'mt-mit-checkpoint',
            type: 'checkpoint',
            prompt:
              'Kanser hücrelerinin en belirgin özelliği kontrolsüz bölünmedir. Hücre döngüsünün hangi aşamasındaki bir aksaklık buna yol açabilir?',
            hint: 'Döngüde hangi evrede “devam edeyim mi?” kontrolü yapılıyordu?',
            answer: `Döngünün **kontrol noktalarındaki** aksaklık.

Normal bir hücre her evrenin sonunda "devam edilsin mi?" kararını verir. Örneğin **G2 evresinde** eşlenen DNA’da hata olup olmadığı denetlenir; hata varsa döngü durdurulur ve hücre ya onarılır ya da kendini yok eder.

Bu denetimi yapan proteinlerin genleri bozulursa hücre:
- hatalı DNA ile bölünmeye devam eder,
- büyüme sinyali gelmese bile bölünür,
- bölünmeyi durdurması gereken yerde durmaz.

Sonuç kontrolsüz çoğalmadır.

Buradaki asıl fikir şu: kanser "hücrenin çok hızlı bölünmesi" değil, ==bölünmeyi durduracak frenin çalışmamasıdır==. Bu yüzden kanser bir hücre döngüsü hastalığı sayılır.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'mt-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün en çok puan kaybettiren noktalarını hedefliyor.',
        blocks: [
          {
            id: 'mt-uyg-worked',
            type: 'worked_example',
            title: 'Kromozom ve DNA grafiğini okuma',
            prompt:
              'Bir hücrede DNA miktarının zamana göre değişimi ölçülüyor. Grafikte DNA miktarı önce sabit kalıyor, sonra kademeli olarak iki katına çıkıyor, bir süre iki katında kalıyor ve ardından aniden yarıya düşüyor.\\n\\nBu üç aşama hücre döngüsünün hangi evrelerine karşılık gelir? Aynı süre boyunca kromozom sayısı nasıl değişir?',
            steps: [
              {
                title: 'Sabit kalan ilk bölümü adlandır',
                body: 'DNA henüz eşlenmemiş; hücre büyüyor. Bu **G1 evresidir**.',
              },
              {
                title: 'Kademeli artışı adlandır',
                body: 'DNA miktarı iki katına çıkıyor. Eşlenme yalnızca tek bir evrede olur: **S evresi**.',
              },
              {
                title: 'İki katında kalan bölümü adlandır',
                body: 'Eşlenme bitmiş, bölünme henüz tamamlanmamış. Bu **G2 ve mitozun büyük kısmıdır** (profaz, metafaz, anafaz).',
              },
              {
                title: 'Ani düşüşü adlandır',
                body: 'DNA yarıya iniyor. Bu, sitoplazmanın bölünüp iki hücre oluşması demektir: **telofaz sonu / sitokinez**.',
              },
              {
                title: 'Kromozom sayısını ayrı düşün',
                body: 'Kromozom sayısı G1, S, G2 ve metafaz boyunca **2n olarak sabit** kalır. Yalnızca **anafazda** kardeş kromatitler ayrıldığı için geçici olarak 4n görünür; sitokinezden sonra her yavru hücrede yeniden 2n olur.',
              },
            ],
            answer:
              'Sabit bölüm G1, artış S, iki katında kalan bölüm G2 ve mitoz, ani düşüş ise sitokinezdir. Kromozom sayısı ise yalnızca anafazda geçici olarak iki katına çıkar; DNA grafiğiyle aynı biçimde değişmez.',
            takeaway:
              'Bu soru tipinde ==DNA grafiği ile kromozom grafiği aynı değildir==. DNA S evresinde katlanır, kromozom sayısı anafazda katlanır. İkisini ayrı ayrı takip et.',
          },
          {
            id: 'mt-uyg-quiz1',
            type: 'quiz',
            purpose: 'error',
            question: 'Mitoz bölünme ile ilgili aşağıdakilerden hangisi **yanlıştır**?',
            options: [
              'Oluşan hücreler ana hücreyle aynı kromozom sayısına sahiptir',
              'DNA eşlenmesi profaz evresinde gerçekleşir',
              'Anafazda kardeş kromatitler ayrılır',
              'Bitki hücresinde sitokinez ara lamel oluşumuyla gerçekleşir',
            ],
            answer_index: 1,
            explanation: `Yanlış ifade **B**. DNA eşlenmesi mitozdan **önce**, interfazın **S evresinde** gerçekleşir. Mitoz başladığında eşlenme çoktan tamamlanmıştır.

Diğerleri doğru:
- **A:** Mitozda 2n hücreden 2n iki hücre oluşur; kromozom sayısı korunur.
- **C:** Mitoz anafazında ayrılan şey kardeş kromatitlerdir (homolog kromozomlar değil).
- **D:** Bitki hücresinde sert duvar boğumlanmaya izin vermediği için ara lamel oluşur.

Bu konudaki en yaygın hata B seçeneğidir. ==Fotokopi interfazda çekilir, dağıtım mitozda yapılır.==`,
          },
          {
            id: 'mt-uyg-quiz2',
            type: 'quiz',
            purpose: 'concept',
            question:
              'İnsanın vücut hücresinde S evresi tamamlandığında kromozom sayısı ve kromatit sayısı sırasıyla kaçtır?',
            options: ['46 ve 46', '46 ve 92', '92 ve 92', '92 ve 46'],
            answer_index: 1,
            explanation: `Doğru cevap **46 ve 92**.

S evresinde her kromozom kendini eşler ve iki kardeş kromatitli hâle gelir. Ama kardeş kromatitler **sentromerle bağlı kaldığı sürece tek kromozom sayılır**.

- Kromozom sayısı: **46** (değişmez)
- Kromatit sayısı: 46 × 2 = **92**
- DNA miktarı: iki katına çıkmıştır

Kromozom sayısının gerçekten 92 göründüğü tek an **anafazdır** — sentromerler bölünüp kromatitler ayrıldığında. Ama bu geçicidir; sitokinezden sonra her hücrede yine 46 olur.`,
          },
          {
            id: 'mt-uyg-quiz3',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Hücrenin sınırsız büyüyememesinin sebebi aşağıdakilerden hangisiyle **en iyi** açıklanır?',
            options: [
              'Hücre zarının esneme sınırının olması',
              'Hacim, yüzey alanından daha hızlı arttığı için madde alışverişinin yetersizleşmesi',
              'Sitoplazmanın belirli bir yoğunluğu aşamaması',
              'Organel sayısının artamaması',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Hücre büyüdüğünde hacim **kübik**, yüzey **karesel** artar. İhtiyaçlar hacimle, madde alışverişi ise yüzeyle orantılı olduğu için bir noktadan sonra zar içeriyi besleyemez hâle gelir.

- **A yanlış:** Zar esnektir ve bu bir sınır oluşturmaz; kaldı ki bitki hücresinde duvar var ve aynı kural geçerli.
- **C ve D yanlış:** İkisi de sonuçtur, sebep değil.

İkinci bir sınır daha vardı: ==çekirdek/sitoplazma oranı==. Bir çekirdeğin yönetebileceği sitoplazma miktarı sınırlıdır. Bölünme her iki sorunu birden çözer.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'mt-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'mt-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Hücre sınırsız büyüyemez: hacim **kübik**, yüzey **karesel** artar; ayrıca çekirdek/sitoplazma oranı sınırlıdır.',
              'Büyüme, hücre sayısının artmasıyla olur — hücre boyutunun değil.',
              '**Kardeş kromatit** birbirinin tıpatıp kopyasıdır; **homolog kromozom** benzerdir ama aynı değildir.',
              'Kardeş kromatitler sentromerle bağlı olduğu sürece **tek kromozom** sayılır.',
              'Hücre döngüsü = interfaz (G1 + S + G2) + M evresi. İnterfaz döngünün **≈%90’ıdır**.',
              'DNA yalnızca **S evresinde** eşlenir; mitozda değil.',
              'S evresinde **DNA miktarı iki katına çıkar, kromozom sayısı değişmez**.',
              'Mitoz evreleri: **profaz → metafaz → anafaz → telofaz**.',
              'Metafazda kromozomlar **tek sıra** dizilir; anafazda **kardeş kromatitler** ayrılır.',
              'Sitokinez hayvanda **boğumlanma**, bitkide **ara lamel** ile olur.',
              'Mitoz sonucu 2n’den 2n iki **özdeş** hücre oluşur — ==genetik çeşitlilik yaratmaz==.',
            ],
          },
          {
            id: 'mt-kap-memory',
            type: 'memory',
            body:
              'Tek cümlede tut: *Fotokopi S evresinde çekilir, dağıtım mitozda yapılır.* DNA eşlenmesiyle ilgili bütün sorular bu cümleyle çözülür.',
          },
          {
            id: 'mt-kap-next',
            type: 'next_step',
            body: `Mitoz özdeş hücreler üretiyor. Peki kardeşler neden birbirine benzemiyor? Çeşitlilik nereden geliyor?

Sıradaki bölümde **mayozu** göreceksin. Orada iki yeni olay var: homolog kromozomların ayrılması ve **krossing over**. İkisi birlikte, canlılar dünyasındaki çeşitliliğin ana kaynağını oluşturuyor.

Metafazdaki tek sıra dizilimi aklında tut — mayozda çift sıra olacak.`,
            topics: ['Mayoz ve genetik çeşitlilik', 'Kalıtım'],
          },
          {
            id: 'mt-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Üç kontrol yap.

Bir: DNA hangi evrede eşlenir? S evresinde. Mitozda değil.

İki: S evresinde kromozom sayısı değişir mi? Değişmez. Değişen DNA miktarı ve kromatit sayısı.

Üç: anafazda ayrılan şey ne? Kardeş kromatitler.

Üçüne de cevap verebiliyorsan mayoza geçebilirsin. Orada bu üçünün de karşılığı farklı olacak — ve farkı ancak bunları bildiğin için görebileceksin.`,
          },
        ],
      },
    ],
  },
}
