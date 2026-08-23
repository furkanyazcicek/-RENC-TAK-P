/**
 * TYT BİYOLOJİ · Canlıların Sınıflandırılması
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Konu TEK derste veriliyor. Önceki iki konu (Temel Bileşenler, Hücre)
 *   bölündü çünkü her ikisinde de çok sayıda bağımsız mekanizma vardı.
 *   Burada ise tek bir fikir var — canlıları akrabalığa göre gruplamak —
 *   ve altı âlem o fikrin uygulaması. Bölmek yapay olurdu.
 *
 * · Âlemler tablo olarak DEĞİL, karar ağacı olarak öğretiliyor. Sebebi
 *   sınav formatı: soruda âlemin adı verilmez, özellikleri verilir ve
 *   âlemi öğrencinin bulması istenir. Üç soruluk bir ağaç, altı satırlık
 *   bir tablodan çok daha kullanışlı.
 *
 * · Sınıflandırma birimlerinde asıl vurgu isim listesinde değil, İKİ ZIT
 *   EĞİLİMDE: âlemden türe inildikçe birey sayısı azalır, ortak özellik
 *   artar. Sorular neredeyse tamamen buradan çıkıyor.
 *
 * · Tür tanımındaki "verimli döl verebilme" ölçütü ayrı bir tuzak bloğu
 *   ile veriliyor; katır örneği olmadan bu ölçüt anlaşılmıyor.
 *
 * · Virüsler âlem dışı olarak, "Canlıların Ortak Özellikleri" dersindeki
 *   tartışmaya bağlanarak veriliyor — orada ölçütleri konuşmuştuk.
 */

export default {
  slug: 'canlilarin-siniflandirilmasi',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Sınıflandırılması',
  },
  order: 1,
  partLabel: null,
  goldStandard: true,
  title: 'Canlıların Sınıflandırılması: Akrabalığa Göre Düzen',
  subtitle:
    'Altı âlemi ezberlemek yerine üç soru öğren. Sınavda âlemin adı değil, özellikleri verilir — âlemi senin bulman istenir.',

  document: {
    version: 2,
    estimated_minutes: 28,
    prerequisites: [
      {
        topic: 'Hücre — 5. Bölüm',
        why: 'Prokaryot–ökaryot ayrımı ve hücre duvarı, âlem belirlemenin iki temel ölçütü.',
      },
      {
        topic: 'Canlıların Ortak Özellikleri',
        why: 'Virüslerin neden âlem dışı sayıldığını orada kurduğun ölçütlerle açıklayacağız.',
      },
    ],
    outcomes: [
      'Yapay ve doğal sınıflandırma arasındaki farkı açıklayabileceksin.',
      'Sınıflandırma birimlerini sırayla sayıp aralarındaki iki zıt eğilimi anlatabileceksin.',
      'Tür kavramını doğru tanımlayıp katır örneğiyle sınırını gösterebileceksin.',
      'İkili adlandırma kurallarına uygun yazım yapabileceksin.',
      'Verilen özelliklerden yola çıkarak bir canlıyı doğru âleme yerleştirebileceksin.',
      'Altı âlemin ayırt edici özelliklerini karşılaştırabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'sf-giris',
        kind: 'opening',
        title: 'Neden sınıflandırıyoruz?',
        lead: 'Bu soruya “düzen olsun diye” demek yetersiz. Sınıflandırmanın bilimsel bir amacı var.',
        blocks: [
          {
            id: 'sf-giris-1',
            type: 'prose',
            body: `Bugüne kadar yaklaşık **2 milyon** canlı türü tanımlandı ve bunun gerçek sayının küçük bir kısmı olduğu düşünülüyor.

Bu kadar çeşitlilikle çalışabilmek için bir düzen şart. Ama sınıflandırmanın amacı yalnızca ==kolay bulmak== değil.

İki farklı sınıflandırma yaklaşımı var ve aralarındaki fark tam olarak bu noktada:

- **Yapay (ampirik) sınıflandırma:** Canlılar dış görünüş, yaşam ortamı veya kullanım amacına göre gruplanır. "Uçanlar", "suda yaşayanlar", "tıbbi bitkiler" gibi. Pratiktir ama ==akrabalık hakkında bilgi vermez==: yarasa, kuş ve kelebek "uçanlar" grubuna girer ama üçü birbirine hiç yakın değildir.
- **Doğal (filogenetik) sınıflandırma:** Canlılar **ortak atadan gelme derecesine**, yani gerçek akrabalıklarına göre gruplanır. Bugün bilimde kullanılan yöntem budur.

Doğal sınıflandırma bir liste değil, ==bir hipotezdir==: "bu iki canlı yakın akraba" demek, "ortak bir atadan geldiler" demektir. Yeni kanıt bulununca sınıflandırma değişebilir — nitekim moleküler yöntemler geliştikçe birçok grup yeniden düzenlendi.`,
          },
          {
            id: 'sf-giris-why',
            type: 'why',
            question: 'Doğal sınıflandırmada hangi ölçütlere bakılır?',
            body: `Dış görünüşe bakmak yanıltıcıdır. Yunus ile köpek balığı birbirine çok benzer ama biri memeli, diğeri balıktır. Benzerlik ==aynı ortama uyum== sonucu ortaya çıkmış olabilir; bu akrabalık göstermez.

Bu yüzden doğal sınıflandırmada daha derin ölçütlere bakılır:

- **Hücre tipi ve yapısı:** prokaryot mu ökaryot mu, hücre duvarı var mı, neyden yapılmış
- **Beslenme biçimi:** ototrof mu heterotrof mu
- **Embriyonik gelişim benzerlikleri**
- **Protein ve DNA benzerliği** — bugün en güçlü ölçüt bu

Son madde belirleyicidir: ==DNA dizilimleri ne kadar benzerse akrabalık o kadar yakındır==. Görünüş aldatabilir ama genetik kayıt aldatmaz.

Bu yüzden protein benzerliği, sınavda "hangi ölçüt akrabalığı en güvenilir gösterir?" sorusunun cevabıdır.`,
          },
          {
            id: 'sf-giris-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Yapay sınıflandırma yanlış değil, farklı amaçlıdır. Bir eczacı bitkileri etkilerine göre gruplayabilir; bu pratik bir yapay sınıflandırmadır. Yanlış olan, onu akrabalık göstergesi sanmaktır.',
          },
          {
            id: 'sf-giris-audio',
            type: 'audio_script',
            body: `Bu derse bir soruyla başlayalım.

Yunus ve köpek balığı. İkisi de suda yaşıyor, ikisinin de yüzgeci var, ikisi de benzer şekilde. Aynı gruba mı girerler?

Girmezler. Yunus memeli, köpek balığı balık. Yunus sana bir kediden daha yakın akraba değil ama köpek balığından çok daha yakın.

Bu neden önemli? Çünkü sınıflandırmanın amacı benzerleri bir araya koymak değil. Amaç akrabalığı göstermek.

Benzerlik aldatabilir. Aynı ortamda yaşayan canlılar birbirine benzemeye başlar — buna uyum diyoruz.

Bu yüzden modern sınıflandırmada en güvenilir ölçüt DNA ve protein benzerliği. Görünüş yalan söyleyebilir, genetik kayıt söylemez.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'sf-birimler',
        kind: 'build',
        title: 'Sınıflandırma birimleri',
        lead: 'Yedi basamak var. Ama ezberlemen gereken şey isimler değil, basamaklar arasındaki iki eğilim.',
        blocks: [
          {
            id: 'sf-bir-figure',
            type: 'figure',
            kind: 'siniflandirma-birimleri',
            width: 'full',
            title: 'Sınıflandırma birimleri ve iki zıt eğilim',
            purpose:
              'Basamak isimlerini ezber listesi olmaktan çıkarıp, sınavda doğrudan sorulan iki eğilime (birey sayısı ve ortak özellik) bağlamak.',
            complexity: 'medium',
            caption:
              'İki ok birbirinin tersi yönde ==değil, aynı yönde== ama zıt anlamda: aşağı indikçe grup küçülür, ama içindekiler birbirine benzer. Soruların çoğu bu ters ilişkiden çıkıyor.',
            focus: [
              {
                title: 'Aşağı indikçe azalanlar',
                body: 'Gruptaki **birey sayısı** ve **çeşitlilik** azalır. Âlem devasa bir gruptur, tür ise en küçük birimdir. Aynı âlemdeki canlılar arasında muazzam farklar bulunabilir; aynı türdekiler arasında ise neredeyse yoktur.',
              },
              {
                title: 'Aşağı indikçe artanlar',
                body: '**Ortak özellik sayısı** ve **akrabalık derecesi** artar. İki canlı ne kadar alt basamakta buluşuyorsa o kadar yakın akrabadır. Aynı cinste buluşan ikili, aynı sınıfta buluşandan çok daha yakındır.',
              },
              {
                title: 'İnsan örneği',
                body: 'Animalia → Chordata → Mammalia → Primates → Hominidae → *Homo* → *sapiens*. Tür adı yazılırken cins ve tür birlikte kullanılır: ***Homo sapiens***.',
              },
            ],
            audio_script: `Bu şemada yedi basamak var ve yukarıdan aşağı daralıyorlar.

Basamakların adlarını okumadan önce iki oka bak. Solda bir ok, sağda bir ok, ikisi de aşağı bakıyor.

Sol ok ne diyor? Birey sayısı ve çeşitlilik azalır.
Sağ ok ne diyor? Ortak özellik ve akrabalık artar.

Bir saniye dur ve bunu bir örnekle düşün.

Hayvanlar âleminde kaç canlı var? Milyonlarca. Aralarında ne kadar ortak özellik var? Çok az — süngerle insan aynı âlemde.

Şimdi en alta bak. Tür. Kaç canlı var? Sadece o türün bireyleri. Aralarında ne kadar ortak özellik var? Neredeyse hepsi.

İşte iki ok bunu söylüyor. Grup küçüldükçe benzerlik artıyor.

Sağdaki insan örneğine de bak. Animalia'dan sapiens'e inen yol. En altta iki kelime birlikte kullanılıyor: Homo sapiens. Neden iki kelime olduğunu birazdan göreceğiz.`,
          },
          {
            id: 'sf-bir-prose',
            type: 'prose',
            body: `Basamakların sırası: **Âlem → Şube → Sınıf → Takım → Aile → Cins → Tür**

Bu sıradan çıkan pratik bir kural var ve sınavda çok işine yarayacak:

==İki canlı hangi basamakta ilk kez birlikte bulunuyorsa, akrabalıkları o kadar yakındır.==

Örnek: kedi ile köpek "Takım" basamağında (Carnivora) buluşur. Kedi ile kaplan ise "Aile" basamağında (Felidae) buluşur. Aile, takımdan daha alt bir basamak olduğuna göre ==kedi kaplana, köpekten daha yakın akrabadır==.

Aynı mantıkla: aynı türde olan iki birey mümkün olan en yakın akrabadır; yalnızca aynı âlemde buluşan iki birey ise en uzak.`,
          },
          {
            id: 'sf-bir-note',
            type: 'teacher_note',
            tone: 'exam',
            body: '“Aynı ailede olan iki canlı kesinlikle aynı takımdadır” — bu ifade doğrudur. Alt basamakta buluşanlar, üstteki bütün basamakları da paylaşır. Tersi ise doğru değildir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'sf-tur',
        kind: 'deepen',
        title: 'Tür ve ikili adlandırma',
        lead: 'Tür, sınıflandırmanın temel birimi. Tanımındaki her kelimenin bir sebebi var.',
        blocks: [
          {
            id: 'sf-tur-concept',
            type: 'concept',
            term: 'Tür',
            body: `Ortak bir atadan gelen, yapı ve görev bakımından benzer özellikler taşıyan, doğal koşullarda çiftleştiklerinde ==verimli döl verebilen== bireyler topluluğudur.

Tanımdaki kritik ifade sonuncusu: **verimli döl**. "Döl verebilmek" yetmez; verilen dölün de üreyebilmesi gerekir.

Tür, sınıflandırmanın hem **en küçük** hem de **temel** birimidir. Diğer bütün basamaklar türlerin gruplanmasıyla oluşur.`,
          },
          {
            id: 'sf-tur-trap',
            type: 'trap',
            title: '“Çiftleşebiliyorlarsa aynı türdendir” demek',
            wrong: '“At ile eşek çiftleşip katır veriyor, o hâlde aynı türdendirler” diye düşünmek.',
            right:
              'Katır **kısırdır**, yani üreyemez. Tanımdaki ölçüt "döl verebilmek" değil, ==verimli döl verebilmektir==. At ve eşek farklı türlerdir; aynı **cinste** (Equus) buluşurlar ama aynı türde değildirler.',
            body:
              'Aynı mantık aslan–kaplan melezi (ligron) için de geçerlidir. Sınavda bu ayrım doğrudan sorulur: melez oluşması tür birliğini kanıtlamaz, ==melezin üreyebilmesi== kanıtlar.',
          },
          {
            id: 'sf-tur-prose',
            type: 'prose',
            body: `Türleri adlandırmak için **ikili adlandırma** (binomial nomenclature) kullanılır. Bu sistemi 18. yüzyılda **Carl Linnaeus** geliştirdi ve bugün hâlâ aynen kullanılıyor.

Kuralları basit ama sınavda doğrudan sorulur:

- Tür adı **iki kelimeden** oluşur: birincisi **cins** adı, ikincisi **tanımlayıcı** ad.
- Cins adının ilk harfi **büyük**, tanımlayıcı adın ilk harfi **küçük** yazılır.
- İkisi birlikte **italik** yazılır; el yazısında **altı çizilir**.
- Ad Latince'dir.

Örnekler: *Homo sapiens* (insan), *Felis catus* (kedi), *Rosa canina* (kuşburnu), *Escherichia coli*.

Bu sistemin amacı ==tek bir canlıya dünyanın her yerinde aynı adı vermektir==. Halk arasındaki adlar ülkeden ülkeye, hatta bölgeden bölgeye değişir; bilimsel ad değişmez.`,
          },
          {
            id: 'sf-tur-note2',
            type: 'teacher_note',
            tone: 'exam',
            body: 'İki canlının bilimsel adının **ilk kelimesi aynıysa** aynı cinstendirler ve yakın akrabadırlar. *Felis catus* ile *Felis silvestris* gibi. Bu, soruda verilen adlardan akrabalık çıkarmanın en hızlı yoludur.',
          },
          {
            id: 'sf-tur-checkpoint',
            type: 'checkpoint',
            prompt:
              'Aşağıdaki üç canlıdan hangi ikisi birbirine daha yakın akrabadır? *Panthera leo* (aslan), *Panthera tigris* (kaplan), *Felis catus* (kedi).',
            hint: 'Bilimsel adın ilk kelimesi hangi basamağı gösteriyor?',
            answer: `**Aslan ve kaplan** birbirine daha yakın akrabadır.

Bilimsel adın ilk kelimesi **cins** adıdır. Aslan ve kaplanın ikisi de *Panthera* cinsindedir; kedi ise *Felis* cinsindedir.

Cins, sınıflandırma basamaklarında türden hemen önce gelir — yani çok alt bir basamaktır. Aynı cinste buluşan iki canlı, yalnızca aile veya takımda buluşan ikiliden çok daha yakın akrabadır.

Üçü de **Felidae** (kedigiller) ailesinde buluşur. Ama aslan ile kaplan bir basamak daha aşağıda, cins düzeyinde de birlikte kalır.

==Pratik kural: bilimsel adın ilk kelimesi aynı olan iki canlı, en yakın akraba adaylarıdır.==`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'sf-alemler',
        kind: 'build',
        title: 'Altı âlem',
        lead: 'Şimdi asıl işe geliyoruz. Ama âlemleri ezberlemeyeceğiz — bulmayı öğreneceğiz.',
        blocks: [
          {
            id: 'sf-alem-figure',
            type: 'figure',
            kind: 'alem-karar-agaci',
            width: 'full',
            title: 'Âlem belirleme karar ağacı',
            purpose:
              'Altı âlemi tablo hâlinde ezberletmek yerine, verilen özelliklerden âlemi bulduran üç soruluk bir yöntem vermek.',
            complexity: 'high',
            caption:
              'Sınavda âlemin adı verilmez, ==özellikleri verilir==. Bu üç soruyu sırayla sorarsan altı âlemin hangisine ait olduğunu bulursun. Protista ağacın dışında duruyor çünkü o bir “artık grup”.',
            focus: [
              {
                title: 'Prokaryot kolu',
                body: 'Çekirdek yoksa canlı **bakteri** veya **arkedir**. İkisini ayıran ölçüt hücre duvarının yapısıdır: bakteride **peptidoglikan** vardır, arkede yoktur. Arkeler ayrıca sıcak su kaynağı, aşırı tuzlu göl gibi uç ortamlarda yaşar.',
              },
              {
                title: 'Hayvanlar',
                body: 'Ökaryot ve **hücre duvarı yok**. Hepsi heterotroftur, çoğu aktif hareket eder ve sinir–kas sistemine sahiptir. Fazla glikozu glikojen olarak depolar.',
              },
              {
                title: 'Bitkiler',
                body: 'Ökaryot, duvar var ve duvar **selülozdan** yapılmış. Kloroplast taşıdıkları için ototrofturlar. Fazla glikozu nişasta olarak depolarlar.',
              },
              {
                title: 'Mantarlar',
                body: 'Ökaryot, duvar var ama duvar **kitinden** yapılmış. Kloroplast yoktur, bu yüzden **heterotrofturlar**: ya çürükçül (saprofit) ya da parazit beslenirler. Sporla ürerler.',
              },
              {
                title: 'Protista',
                body: 'Ökaryot olduğu hâlde diğer üç âlemin hiçbirine tam uymayan canlıların toplandığı gruptur. Amip, öglena, paramesyum ve algler buradadır. Bu yüzden **âlem içi çeşitlilik en fazla** olan gruptur.',
              },
            ],
            audio_script: `Bu şemayı ezberleme, kullanmayı öğren.

Üç soru var ve sırayla soracaksın.

Birinci soru: çekirdeği var mı?

Hayır ise sola git. Prokaryot. Burada iki âlem var: bakteriler ve arkeler. Ayıran şey duvar yapısı — bakteride peptidoglikan var, arkede yok.

Evet ise sağa git ve ikinci soruyu sor: hücre duvarı var mı?

Yok ise iş bitti. Hayvanlar âlemi.

Var ise üçüncü soruyu sor: duvar neyden yapılmış?

Selüloz ise bitki. Kitin ise mantar.

Şimdi sol alttaki kesikli çizgili kutuya bak. Protista. Bu ağacın içinde değil, kenarında duruyor.

Neden? Çünkü protista bir artık grup. Ökaryot olan ama diğer üçüne uymayan her şey oraya konuyor. Amip, öglena, algler.

Bu üç soruyu aklında tutarsan âlem sorularının tamamını çözersin.`,
          },
          {
            id: 'sf-alem-table',
            type: 'table',
            title: 'Âlem künyesi',
            columns: ['Âlem', 'Hücre tipi', 'Hücre duvarı', 'Beslenme', 'Örnek'],
            rows: [
              ['Bakteriler', 'Prokaryot', 'Var — peptidoglikan', 'Çoğu heterotrof, bazıları ototrof', 'E. coli, laktik asit bakterisi'],
              ['Arkeler', 'Prokaryot', 'Var — peptidoglikan **yok**', 'Çoğu kemoototrof', 'Sıcak su kaynağı ve tuz gölü canlıları'],
              ['Protista', 'Ökaryot', 'Bazılarında var', 'Hem ototrof hem heterotrof', 'Amip, öglena, paramesyum, algler'],
              ['Mantarlar', 'Ökaryot', 'Var — **kitin**', 'Heterotrof (saprofit / parazit)', 'Şapkalı mantar, küf, maya'],
              ['Bitkiler', 'Ökaryot', 'Var — **selüloz**', 'Ototrof (fotosentez)', 'Yosun, eğrelti, çiçekli bitkiler'],
              ['Hayvanlar', 'Ökaryot', '**Yok**', 'Heterotrof', 'Sünger, böcek, balık, memeli'],
            ],
            caption:
              'Üçüncü sütun tek başına dört âlemi ayırt eder: **yok** → hayvan, **selüloz** → bitki, **kitin** → mantar, **peptidoglikan** → bakteri. Bu yüzden hücre duvarı bu konunun anahtar kavramıdır.',
          },
          {
            id: 'sf-alem-trap',
            type: 'trap',
            title: 'Mantarları bitki sanmak',
            wrong: '“Mantar toprakta yetişiyor, hareket etmiyor, hücre duvarı var — o hâlde bitkidir” diye düşünmek.',
            right:
              'Mantarlar **kesinlikle bitki değildir**. Üç kritik fark var: hücre duvarları **selüloz değil kitindir**, **kloroplastları yoktur** ve **heterotrofturlar** — kendi besinlerini üretemezler. Hatta moleküler kanıtlar mantarların bitkilerden çok **hayvanlara** yakın olduğunu gösteriyor.',
            body:
              'Sabitlemek için tek soru: kendi besinini üretebiliyor mu? Üretemiyorsa bitki değildir — nerede yaşadığından ve hareket edip etmediğinden bağımsız olarak.',
          },
          {
            id: 'sf-alem-connection',
            type: 'connection',
            title: 'Virüsler neden bu listede yok?',
            body:
              'Virüslerin hücresel yapısı ve metabolizması olmadığı için tam anlamıyla canlı sayılmadıklarını “Canlıların Ortak Özellikleri” konusunda konuşmuştuk. Sınıflandırma canlıları gruplandırdığı için virüsler ==hiçbir âleme dâhil edilmez==. Sınavda “aşağıdaki âlemlerden hangisinde virüsler yer alır?” gibi bir soru görürsen cevap “hiçbiri”dir.',
            links: ['Canlıların Ortak Özellikleri', 'AYT · Dolaşım ve bağışıklık sistemi'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'sf-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu konunun üç kritik ayrımını hedefliyor.',
        blocks: [
          {
            id: 'sf-uyg-worked',
            type: 'worked_example',
            title: 'Özelliklerden âlemi bulma',
            prompt:
              'Bir canlı hakkında şu bilgiler veriliyor:\\n\\n**(1)** Hücrelerinde çekirdek ve zarlı organeller var.\\n**(2)** Hücre duvarı bulunuyor.\\n**(3)** Kloroplastı yok, besinini dış ortamdaki ölü organik maddeleri parçalayarak alıyor.\\n**(4)** Sporla çoğalıyor.\\n\\nBu canlı hangi âleme aittir?',
            steps: [
              {
                title: 'Birinci soruyu sor — çekirdek var mı?',
                body: 'Birinci bilgi çekirdek ve zarlı organel olduğunu söylüyor. Canlı **ökaryottur**. Bu, bakteri ve arke âlemlerini eler.',
              },
              {
                title: 'İkinci soruyu sor — hücre duvarı var mı?',
                body: 'İkinci bilgi duvar olduğunu söylüyor. Bu, **hayvanlar âlemini eler** — hayvan hücresinde duvar bulunmaz.',
              },
              {
                title: 'Beslenmeye bak',
                body: 'Kloroplast yok ve besinini dışarıdan alıyor; yani **heterotroftur**. Bu, bitkiler âlemini eler — bitkiler ototroftur.',
              },
              {
                title: 'Kalan ihtimalleri karşılaştır',
                body: 'Geriye mantarlar ve protista kalıyor. Dördüncü bilgi belirleyici: **sporla çoğalma** ve ölü organik maddeleri parçalayarak beslenme (saprofitlik) mantarların tipik özelliğidir.',
              },
            ],
            answer: 'Canlı **Mantarlar** âlemine aittir. Ökaryot, hücre duvarlı, heterotrof ve saprofit beslenen bir organizmadır.',
            takeaway:
              'Bu soru tipinde bilgileri sırayla kullan ve her birinde **bir âlem ele**. Dördüncü bilgiye gelene kadar zaten üç âlem elenmiş oluyor. ==Tek bir bilgiye bakıp karar verme==; “hücre duvarı var” tek başına bitkiyi de mantarı de bakteriyi de gösterebilir.',
          },
          {
            id: 'sf-uyg-quiz1',
            type: 'quiz',
            purpose: 'concept',
            question:
              'Sınıflandırma basamaklarında âlemden türe doğru inildikçe aşağıdakilerden hangisi **artar**?',
            options: [
              'Gruptaki birey sayısı',
              'Gruptaki çeşitlilik',
              'Bireylerin ortak özellik sayısı',
              'Gruba giren tür sayısı',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Aşağı indikçe grup daralır ve içindeki bireyler birbirine daha çok benzer; yani **ortak özellik sayısı ve akrabalık derecesi artar**.

Diğerlerinin hepsi **azalır**:
- Birey sayısı azalır (âlem devasa, tür küçük).
- Çeşitlilik azalır (aynı türdekiler neredeyse birebir benzer).
- Gruba giren tür sayısı azalır (türde yalnızca bir tür vardır).

Bu soru tipinde tek bir eğilimi hatırlaman yeterli: ==grup küçüldükçe benzerlik artar.==`,
          },
          {
            id: 'sf-uyg-quiz2',
            type: 'quiz',
            purpose: 'error',
            question:
              'At (*Equus caballus*) ile eşek (*Equus asinus*) çiftleştiğinde kısır olan katır oluşur. Bu bilgiye göre aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'At ve eşek aynı türdendir, çünkü çiftleşebilmişlerdir',
              'At ve eşek farklı türdendir ama aynı cinstendir',
              'Katır yeni bir tür oluşturur',
              'At ve eşek farklı ailelerdendir',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Tür tanımındaki ölçüt "çiftleşebilmek" değil, ==verimli döl verebilmektir==. Katır kısır olduğuna göre at ve eşek **farklı türlerdir**.

Ancak bilimsel adlarının ilk kelimesi aynı: *Equus*. Bu, ikisinin de **aynı cinste** olduğunu gösterir.

- **A yanlış:** Çiftleşme tek başına tür birliğini kanıtlamaz.
- **C yanlış:** Katır üreyemediği için kendi soyunu sürdüremez; tür olamaz.
- **D yanlış:** Aynı cinste olanlar aynı ailede de bulunur; cins aileden daha alt bir basamaktır.`,
          },
          {
            id: 'sf-uyg-quiz3',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Hücre duvarı **kitinden** yapılmış, kloroplast taşımayan ökaryot bir canlı hangi âleme aittir?',
            options: ['Bitkiler', 'Mantarlar', 'Protista', 'Bakteriler'],
            answer_index: 1,
            explanation: `Doğru cevap **Mantarlar**. Kitin duvar mantarlara özgüdür.

- **Bitkiler:** Duvarları **selülozdandır** ve kloroplast taşırlar.
- **Protista:** Bazılarında duvar bulunur ama kitin değildir; ayrıca grup içinde ototroflar da vardır.
- **Bakteriler:** Prokaryottur; soruda ökaryot dendiğine göre elenir.

Bu konudaki en verimli tek bilgi ==hücre duvarının yapısıdır==: yok → hayvan, selüloz → bitki, kitin → mantar, peptidoglikan → bakteri.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'sf-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'sf-kap-summary',
            type: 'summary',
            title: 'Bu dersten geriye kalması gerekenler',
            points: [
              '**Yapay** sınıflandırma benzerliğe, **doğal** sınıflandırma **akrabalığa** göre yapılır; bilimde kullanılan doğal olandır.',
              'Akrabalığı en güvenilir gösteren ölçüt **DNA ve protein benzerliğidir**; dış görünüş aldatabilir.',
              'Basamaklar: **Âlem → Şube → Sınıf → Takım → Aile → Cins → Tür**.',
              'Aşağı inildikçe birey sayısı ve çeşitlilik **azalır**; ortak özellik ve akrabalık **artar**.',
              'İki canlı hangi basamakta ilk kez buluşuyorsa akrabalıkları o kadar yakındır.',
              'Tür ölçütü çiftleşebilmek değil, ==verimli döl verebilmektir== — katır kısır olduğu için at ve eşek farklı türdür.',
              'İkili adlandırmada cins adı **büyük**, tanımlayıcı ad **küçük** harfle başlar; ikisi birlikte italik yazılır.',
              'Bilimsel adın ilk kelimesi aynı olan iki canlı **aynı cinstendir** ve yakın akrabadır.',
              'Altı âlem: Bakteriler, Arkeler, Protista, Mantarlar, Bitkiler, Hayvanlar.',
              'Hücre duvarı âlem belirlemenin anahtarıdır: **yok** → hayvan, **selüloz** → bitki, **kitin** → mantar, **peptidoglikan** → bakteri.',
              'Mantarlar bitki **değildir**: kitin duvar, kloroplast yok, heterotrof.',
              'Virüsler hiçbir âleme dâhil edilmez.',
            ],
          },
          {
            id: 'sf-kap-memory',
            type: 'memory',
            body:
              'Âlem sorusunda üç soruyu sırayla sor: *Çekirdek var mı?* → *Hücre duvarı var mı?* → *Duvar neyden?* Üç soru, altı âlem. Tablo ezberlemene gerek yok.',
          },
          {
            id: 'sf-kap-next',
            type: 'next_step',
            body: `Sıradaki konu **Hücre Bölünmeleri**.

Orada tür kavramına farklı bir açıdan döneceğiz: bir türün kromozom sayısı sabittir ve bu sayının kuşaklar boyunca korunması gerekir. Mayoz bölünmenin var olma sebebi tam olarak budur.

Ayrıca Hücre konusunda tanıştığın kromatin–kromozom dönüşümünü orada iş başında göreceksin.`,
            topics: ['Hücre Bölünmeleri', 'Kalıtım'],
          },
          {
            id: 'sf-kap-audio',
            type: 'audio_script',
            body: `Ders bitti. Üç kontrol yap.

Bir: at ile eşek aynı türden mi? Değil, çünkü katır kısır. Verimli döl veremiyorlar.

İki: mantar bitki mi? Değil. Duvarı kitin, kloroplastı yok, heterotrof.

Üç: bir canlıyı âleme yerleştirmek için hangi üç soruyu sorarsın? Çekirdek var mı, duvar var mı, duvar neyden.

Üçüne de cevap verebiliyorsan bu konu sende oturmuş demektir. Sırada hücre bölünmeleri var.`,
          },
        ],
      },
    ],
  },
}
