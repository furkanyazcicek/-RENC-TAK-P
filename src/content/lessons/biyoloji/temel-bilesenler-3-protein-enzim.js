/**
 * TYT BİYOLOJİ · Canlıların Temel Bileşenleri — 3. Bölüm
 * ORGANİK BİLEŞİKLER II: PROTEİNLER VE ENZİMLER
 * ==================================================================
 *
 * BU DERSİN İÇERİK KARARLARI
 *
 * · Proteinler ile enzimler AYNI derste. Sebebi basit: enzimlerin
 *   neredeyse tamamı proteindir ve enzim davranışının tamamı protein
 *   yapısından çıkar. Ayrı derslere bölünürse öğrenci denatürasyonu
 *   "enzimin bir özelliği" sanıyor; oysa proteinin özelliği.
 *
 * · Dersin omurgası tek bir zincir: DİZİLİM → ŞEKİL → İŞLEV.
 *   Yapı düzeyleri, denatürasyon, özgüllük ve sıcaklık/pH grafikleri
 *   hep bu zincirin farklı noktalarından okunuyor.
 *
 * · Enzim grafikleri bilinçli olarak birlikte veriliyor. TYT'de en çok
 *   karıştırılan şey, substrat derişimi grafiğinin diğer ikisi gibi
 *   DÜŞTÜĞÜNÜN sanılması. Doygunluk ile denatürasyon ayrı ayrı değil,
 *   karşılaştırmalı anlatıldığında oturuyor.
 *
 * · "Enzim tepkimeyi başlatır" ve "enzim tepkimede tükenir" hataları
 *   ayrı tuzak bloklarıyla kırılıyor; ikisi de doğrudan puan kaybettiriyor.
 */

export default {
  slug: 'temel-bilesenler-protein-enzim',
  placement: {
    examType: 'TYT',
    subject: 'Biyoloji',
    topic: 'Canlıların Temel Bileşenleri',
  },
  order: 3,
  partLabel: '3. Bölüm',
  goldStandard: true,
  title: 'Proteinler ve Enzimler: Şekil İşlevi Belirler',
  subtitle:
    'Bu bölümün tek cümlesi var: dizilim şekli, şekil işlevi belirler. Denatürasyondan enzim grafiklerine kadar her şey bu cümleden çıkıyor.',

  document: {
    version: 2,
    estimated_minutes: 34,
    prerequisites: [
      {
        topic: 'Karbonhidratlar ve Lipitler (2. Bölüm)',
        why: 'Dehidrasyon sentezi burada peptit bağı olarak tekrar karşına çıkacak.',
      },
      {
        topic: 'İnorganik Bileşikler (1. Bölüm)',
        why: 'Hidrojen bağı ve pH kavramları bu bölümün merkezinde.',
      },
    ],
    outcomes: [
      'Amino asidin genel yapısını çizip amino asitleri birbirinden ayıran kısmı gösterebileceksin.',
      'Peptit bağının nasıl kurulduğunu ve kaç su açığa çıktığını hesaplayabileceksin.',
      'Protein yapı düzeylerini sıralayıp hangisinin hangi bağla korunduğunu söyleyebileceksin.',
      'Denatürasyonda neyin bozulup neyin korunduğunu açıklayabileceksin.',
      'Enzimin aktivasyon enerjisi üzerindeki etkisini grafik üzerinden anlatabileceksin.',
      'Sıcaklık, pH ve substrat derişimi grafiklerini karıştırmadan yorumlayabileceksin.',
    ],

    sections: [
      /* ============================================================ */
      {
        id: 'pe-giris',
        kind: 'opening',
        title: 'Aynı yapı taşından bu kadar farklı iş nasıl çıkıyor?',
        lead: 'Bu soruyla başlıyoruz çünkü cevabı, bölümün tamamını taşıyan fikir.',
        blocks: [
          {
            id: 'pe-giris-1',
            type: 'prose',
            body: `Saçındaki keratin, kanındaki hemoglobin, gözündeki kristalin, midendeki pepsin, kaslarındaki aktin — hepsi **protein**.

Biri esnek bir lif, biri oksijen taşıyıcı, biri saydam bir mercek, biri kesici bir enzim, biri kasılan bir motor. Bu kadar farklı işi yapıyorlar ama hepsi ==aynı 20 çeşit amino asitten== yapılmış.

Bu nasıl mümkün?

Cevap dizilişte. 20 amino asidi farklı sırayla dizersen farklı bir zincir elde edersin. Farklı zincir farklı katlanır, farklı katlanan zincir farklı bir şekil alır — ve ==şekil, o proteinin ne iş yapacağını belirler==.

Bu dersin tamamı şu üç kelimelik zincirin açılımıdır:

**dizilim → şekil → işlev**`,
          },
          {
            id: 'pe-giris-prose2',
            type: 'prose',
            body: `Bir kıyaslama yapalım. 100 amino asitlik kısa bir protein düşün. Her pozisyona 20 farklı amino asitten biri gelebileceğine göre olası dizilim sayısı 20¹⁰⁰'dür — evrendeki atom sayısından kat kat büyük bir sayı.

Yani ==protein çeşitliliği pratikte sınırsızdır==. Canlılığın bu kadar farklı problemi çözebilmesinin sebebi budur.

Proteinlerin görevlerini kabaca gruplayalım:
- **Yapı:** kollajen (bağ doku), keratin (saç, tırnak)
- **Taşıma:** hemoglobin (oksijen), zar taşıyıcı proteinleri
- **Savunma:** antikorlar
- **Düzenleme:** insülin gibi bazı hormonlar
- **Hareket:** aktin ve miyozin
- **Hızlandırma:** enzimler

Son madde bu dersin ikinci yarısı. Ama önce yapıyı kuracağız, çünkü enzimlerin bütün davranışı protein yapısından çıkıyor.`,
          },
          {
            id: 'pe-giris-note',
            type: 'teacher_note',
            tone: 'note',
            body: 'Protein, hücrenin kuru ağırlığında en çok bulunan organik bileşiktir. Buna rağmen son enerji kaynağıdır: proteini yakmak, yapı taşlarını harcamak demektir.',
          },
          {
            id: 'pe-giris-audio',
            type: 'audio_script',
            body: `Bu derse başlamadan bir şey söyleyeyim.

Bu bölüm "Canlıların Temel Bileşenleri" konusunun en verimli kısmı. Sınavda buradan hem protein hem enzim sorusu geliyor, üstelik enzim soruları genelde grafik yorumlu.

Ama ezberlemen gereken çok az şey var. Bir tek cümleyi anlarsan gerisi kendiliğinden geliyor: dizilim şekli belirler, şekil işlevi belirler.

Bu cümleyi aklında tut. Denatürasyona geldiğimizde, enzim özgüllüğüne geldiğimizde, sıcaklık grafiğine geldiğimizde hep buraya döneceğiz.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-aminoasit',
        kind: 'build',
        title: 'Yapı taşı: amino asit ve peptit bağı',
        lead: 'Önce tek bir yapı taşına bakacağız, sonra ikisini birleştireceğiz. Buradaki tepkimeyi zaten tanıyorsun.',
        blocks: [
          {
            id: 'pe-aa-figure',
            type: 'figure',
            kind: 'amino-asit-peptit',
            width: 'full',
            title: 'Amino asit yapısı ve peptit bağı',
            purpose:
              'Bütün amino asitlerin ortak iskeletini ve farkı yaratan tek grubu göstermek; peptit bağını bilinen dehidrasyon tepkimesine bağlamak.',
            complexity: 'medium',
            caption:
              'Yirmi amino asidin yirmisinde de merkezi karbon, amino grubu, karboksil grubu ve hidrojen aynıdır. ==Değişen tek şey R grubudur== — ve proteinlerin bütün çeşitliliği oradan gelir.',
            focus: [
              {
                title: 'Ortak iskelet',
                body: 'Merkezde bir karbon; ona bağlı amino grubu (−NH₂), karboksil grubu (−COOH) ve bir hidrojen. Bu dört parça her amino asitte aynıdır. Adındaki “amino” ve “asit” bu iki gruptan gelir.',
              },
              {
                title: 'R grubu',
                body: 'Değişken kısım. Kimi R grubu kutupludur ve suyu sever, kimi kutupsuzdur ve sudan kaçar, kimi asidik veya bazik davranır. Proteinin nasıl katlanacağını belirleyen şey büyük ölçüde bu grupların dizilişidir.',
              },
              {
                title: 'Peptit bağı',
                body: 'Bir amino asidin karboksil grubu ile diğerinin amino grubu arasında kurulur. Tepkime dehidrasyon sentezidir: bir su açığa çıkar. İki amino asit birleşince dipeptit, çok sayıda birleşince polipeptit oluşur.',
              },
            ],
            audio_script: `Şemanın üst kısmına bak. Ortada bir karbon var, dört yöne bağ yapmış.

Sola bak: amino grubu. Sağa bak: karboksil grubu. Yukarı: bir hidrojen. Buraya kadar her amino asitte aynı.

Şimdi aşağıya bak. Mor kutu. R grubu. İşte fark burada.

Bir saniye dur ve şunu düşün: yirmi amino asidin yirmisi de yukarıdaki üç grubu aynı taşıyorsa, arada ne fark var?

Cevap tek: R grubu. Kimisi küçük, kimisi kocaman, kimisi kutuplu, kimisi kutupsuz. Proteinin nasıl katlanacağını bu grupların dizilişi belirliyor.

Şimdi alt satıra geç. İki amino asit birleşiyor. Sağdaki mavi daireye dikkat et: bir su çıktı.

Bu tepkimeyi tanıyorsun. Geçen bölümdeki dehidrasyon sentezinin ta kendisi. Karbonhidratta glikozlar için neyse, burada amino asitler için o.`,
          },
          {
            id: 'pe-aa-prose',
            type: 'prose',
            body: `Peptit bağı da bir dehidrasyon ürünü olduğuna göre, geçen bölümdeki hesap burada aynen geçerlidir:

- **n** amino asitten oluşan düz bir zincirde **n − 1** peptit bağı vardır
- kurulurken **n − 1** su açığa çıkar
- tamamen hidroliz edilirse **n − 1** su harcanır

Proteinin kütlesi de yine amino asitlerin toplamından, çıkan suyun kütlesi kadar azdır.

==Halkasal bir polipeptitte ise bağ sayısı monomer sayısına eşittir==, çünkü zincirin iki ucu da birbirine bağlanmıştır. Soru "düz zincir" demiyorsa bu ihtimali aklında bulundur.`,
          },
          {
            id: 'pe-aa-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Amino asitler hem asidik hem bazik grup taşıdığı için ortama göre asit ya da baz gibi davranabilir. Bu özellik onları doğal bir tampon yapar — kanın pH’ını sabit tutan sistemlerden biri de proteinlerdir.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-yapi',
        kind: 'deepen',
        title: 'Dizilimden şekle: dört yapı düzeyi',
        lead: 'Zincir düz bir ip olarak kalmaz. Kendi üzerine katlanır ve o katlanma proteinin kimliğini oluşturur.',
        blocks: [
          {
            id: 'pe-yapi-figure',
            type: 'figure',
            kind: 'protein-yapi-duzeyleri',
            width: 'full',
            title: 'Protein yapı düzeyleri',
            purpose:
              'Dizilim → şekil → işlev zincirini görselleştirmek ve dördüncül yapının her proteinde bulunmadığını göstermek.',
            complexity: 'medium',
            caption:
              'Her düzey bir öncekinin üzerine kurulur. Birincil yapı değişirse üstündeki bütün düzeyler değişir — ==tek bir amino asidin yanlış yerleşmesi proteini işlevsiz bırakabilir==.',
            focus: [
              {
                title: 'Birincil yapı',
                body: 'Amino asitlerin sırası. Peptit bağlarıyla korunur ve proteinin “kimlik bilgisi” budur. Bu sırayı DNA belirler — bu bağlantıyı AYT’de Genden Proteine konusunda kuracaksın.',
              },
              {
                title: 'İkincil yapı',
                body: 'Zincirin kendi içinde hidrojen bağlarıyla α heliks (yay biçimi) veya β yaprak (katlanmış tabaka) oluşturması. Burada henüz üç boyutlu bir kütle yok, yerel biçimlenmeler var.',
              },
              {
                title: 'Üçüncül yapı',
                body: 'Zincirin bütünüyle üç boyutlu katlanması. R grupları arasındaki hidrojen bağı, iyonik çekim, disülfit köprüsü ve hidrofobik etkileşimlerle korunur. Proteinin işlev gören şekli genellikle burada ortaya çıkar.',
              },
              {
                title: 'Dördüncül yapı',
                body: 'Birden fazla polipeptit zincirinin bir araya gelip tek bir işlevsel yapı oluşturması. Hemoglobin dört zincirden oluşur. Bu düzey her proteinde bulunmaz.',
              },
            ],
            audio_script: `Soldan sağa dört pano var. Sırayla git, atlama.

Birinci pano: boncuklar bir ipe dizilmiş. Bu birincil yapı. Sadece sıra var, şekil yok.

İkinci pano: iki farklı biçim görüyorsun. Üstteki yay gibi kıvrılmış — alfa heliks. Alttaki katlanmış tabaka — beta yaprak. Bunları tutan şey hidrojen bağları. Geçen bölümlerden hatırlıyorsun: zayıf ama çok sayıda.

Üçüncü pano: zincirin tamamı kendi üzerine katlanmış. Artık üç boyutlu bir kütle var. Proteinin iş gören şekli genelde bu.

Dördüncü pano: dört ayrı renk. Dört ayrı zincir bir araya gelmiş. Bu dördüncül yapı — ama dikkat, her proteinde yok. Tek zincirli bir protein üçüncül düzeyde biter.

Şimdi geriye dön ve birinci panoyu düşün. Oradaki sırayı bir tek boncuk değiştirirsen, sağdaki üç panonun hepsi değişir. Orak hücreli anemi tam olarak budur: tek bir amino asit değişimi.`,
          },
          {
            id: 'pe-yapi-table',
            type: 'table',
            interactive: true,
            title: 'Hangi düzeyi hangi bağ koruyor?',
            columns: ['Düzey', 'Ne anlatır', 'Koruyan bağ'],
            rows: [
              ['Birincil', 'Amino asit sırası', 'Peptit bağı (kuvvetli, kovalent)'],
              ['İkincil', 'α heliks, β yaprak', 'Hidrojen bağı (zayıf)'],
              ['Üçüncül', 'Üç boyutlu katlanma', 'Hidrojen, iyonik, disülfit, hidrofobik etkileşim'],
              ['Dördüncül', 'Zincirlerin birleşmesi', 'Aynı zayıf etkileşimler'],
            ],
            caption:
              'Sağ sütuna dikkat et: **yalnızca birincil yapı kuvvetli bağla** korunuyor. Denatürasyonun neden birincil yapıyı bozmadığının cevabı bu satırda.',
          },
          {
            id: 'pe-yapi-connection',
            type: 'connection',
            title: 'Bu sıra nereden geliyor?',
            body:
              'Birincil yapıyı, yani amino asit sırasını belirleyen şey DNA’daki gen dizilimidir. AYT’de Genden Proteine konusunda bu bağı kuracaksın: DNA → mRNA → amino asit sırası → protein şekli → işlev. Bugün öğrendiğin zincirin başına iki halka daha eklenecek, o kadar.',
            links: ['AYT · Genden Proteine', 'Nükleik asitler ve ATP', 'Kalıtım — mutasyonlar'],
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-denaturasyon',
        kind: 'deepen',
        title: 'Denatürasyon: şekil bozulunca işlev biter',
        lead: 'Bu bölüm hem proteinlerin hem enzimlerin sınavdaki en kritik ortak noktası.',
        blocks: [
          {
            id: 'pe-den-concept',
            type: 'concept',
            term: 'Denatürasyon',
            body: `Yüksek sıcaklık, uygun olmayan pH, ağır metaller veya bazı kimyasalların etkisiyle proteinin **üç boyutlu şeklinin bozulmasıdır**.

Zayıf etkileşimler (hidrojen bağı, iyonik çekim, hidrofobik etkileşim) kopar; zincir açılır ve protein işlevini kaybeder.

Kritik nokta: ==peptit bağları genellikle kopmaz==. Yani amino asit sırası, yani birincil yapı korunur. Bozulan şey diziliş değil, katlanmadır.`,
          },
          {
            id: 'pe-den-prose',
            type: 'prose',
            body: `Yumurta pişirdiğinde olan tam olarak budur. Şeffaf ve akışkan olan albümin proteini, ısı etkisiyle katlanmasını kaybeder; zincirler açılıp birbirine dolanır ve beyaz, katı bir kütle oluşur.

Yumurtayı buzdolabına koyarak eski hâline döndüremezsin. Çünkü açılan zincirler birbirine dolanmıştır ve doğru katlanmayı yeniden bulamazlar. Bu, ==geri dönüşümsüz denatürasyondur==.

Bazı hafif durumlarda (ılımlı pH değişimi gibi) koşullar düzeltilirse protein eski şeklini bulabilir; buna geri dönüşümlü denatürasyon denir. Ancak sınavda karşına çıkan örneklerin çoğu geri dönüşümsüzdür.

Bir de şunu ayır: denatürasyon **sindirim değildir**. Sindirimde peptit bağları hidrolizle koparılır ve amino asitler açığa çıkar. Denatürasyonda molekül hâlâ aynı zincirdir, sadece şekli bozulmuştur.`,
          },
          {
            id: 'pe-den-trap',
            type: 'trap',
            title: 'Denatürasyonda peptit bağlarının koptuğunu sanmak',
            wrong: '“Yüksek sıcaklıkta protein parçalanır, amino asitlerine ayrılır” demek.',
            right:
              'Denatürasyonda kopan şey **zayıf etkileşimlerdir**; peptit bağları kovalenttir ve genellikle sağlam kalır. Protein parçalanmaz, ==açılır==. Amino asit sayısı ve sırası değişmez.',
            body:
              'Sınavda ayırt edici öncül şudur: “denatüre olan proteinin amino asit sırası değişmez” — bu ifade **doğrudur**. “Denatürasyonda peptit bağı sayısı azalır” ise yanlıştır.',
          },
          {
            id: 'pe-den-checkpoint',
            type: 'checkpoint',
            prompt:
              'Ateşli bir hastalıkta vücut sıcaklığı 42 °C’yi aştığında durum hayati tehlike oluşturur. Bunun sebebini protein yapısı üzerinden açıkla.',
            hint: 'Vücuttaki bütün tepkimeleri kim yürütüyor ve onlar neyden yapılmış?',
            answer: `Vücuttaki bütün metabolik tepkimeler **enzimlerle** yürür ve enzimlerin neredeyse tamamı **proteindir**.

Sıcaklık optimum aralığın üstüne çıktığında enzimlerin üç boyutlu şekli bozulmaya başlar — yani denatüre olurlar. Şekli bozulan enzim substratını tanıyamaz; aktif bölge artık uymaz.

Sonuç zincirleme: enzimler durur → metabolizma durur → hücre ATP üretemez → doku ve organ işlevleri bozulur.

Buradaki kritik nokta şu: sorun "sıcaklığın yüksek olması" değil, ==sıcaklığın protein şeklini bozması==. Aynı 42 °C, bazı termofil bakterilerin enzimleri için gayet normaldir; çünkü onların proteinleri farklı katlanır.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-enzim',
        kind: 'build',
        title: 'Enzimler: tepkimeyi başlatmaz, hızlandırır',
        lead: 'Şimdi proteinlerin en özel grubuna geçiyoruz. Buradaki ilk cümle, en çok yapılan hatayı da düzeltiyor.',
        blocks: [
          {
            id: 'pe-enz-concept',
            type: 'concept',
            term: 'Enzim',
            body: `Canlı hücrelerde üretilen, kimyasal tepkimeleri hızlandıran **biyolojik katalizördür**. Yapısı proteindir (çok az sayıda RNA yapılı istisna dışında).

İki temel özelliği vardır:
- Tepkimenin **aktivasyon enerjisini düşürür**.
- Tepkime sonunda **değişmeden çıkar** ve tekrar kullanılır.

İkinci madde, enzimlerin neden çok az miktarda yeterli olduğunu açıklar: bir enzim molekülü saniyede binlerce tepkimeyi yürütebilir.`,
          },
          {
            id: 'pe-enz-figure',
            type: 'figure',
            kind: 'aktivasyon-enerjisi',
            width: 'full',
            title: 'Aktivasyon enerjisi ve enzimin etkisi',
            purpose:
              'Enzimin tepkimeyi başlatmadığını, enerji farkını değiştirmediğini ve yalnızca engeli alçalttığını tek grafikte göstermek.',
            complexity: 'high',
            caption:
              'İki eğri **aynı yerde başlıyor ve aynı yerde bitiyor**. Enzim tepkenlerin ya da ürünlerin enerjisini değiştirmiyor; yalnızca aradaki tepeyi alçaltıyor. Bu üç gözlem, enzimle ilgili üç ayrı hatayı aynı anda kırar.',
            focus: [
              {
                title: 'Enzimsiz tepkime',
                body: 'Tepkimenin başlaması için aşılması gereken enerji engeli (aktivasyon enerjisi) yüksektir. Tepkime yine de gerçekleşir — ama çok yavaş. Enzim olmadan sindirim tepkimelerinin yıllar süreceği hesaplanmıştır.',
              },
              {
                title: 'Enzimli tepkime',
                body: 'Engel alçalır, dolayısıyla daha az enerjiye sahip moleküller de tepkimeye girebilir ve tepkime çok hızlanır. Dikkat: engel **sıfırlanmaz**, yalnızca düşer.',
              },
              {
                title: 'Enerji farkı değişmez',
                body: 'Tepkenler ile ürünler arasındaki enerji farkı iki durumda da aynıdır. Yani enzim tepkimeden elde edilen enerjiyi artırmaz; sadece o enerjiye daha çabuk ulaşılmasını sağlar.',
              },
            ],
            audio_script: `Bu grafiği okurken acele etme, üç şeye ayrı ayrı bak.

Önce iki eğrinin başlangıç noktasına bak. Aynı yerdeler. Şimdi bitiş noktasına bak. Yine aynı yerdeler.

Bu ne demek? Enzim, tepkenlerin de ürünlerin de enerjisini değiştirmiyor. Yani enzim tepkimeden daha fazla enerji çıkarmıyor.

Şimdi tepelere bak. Gri eğrinin tepesi yüksek, mor eğrinin tepesi alçak. Enzimin yaptığı tek şey bu: tepeyi alçaltmak.

Bir saniye dur ve şunu düşün: gri eğri de sonunda ürünlere ulaşıyor mu?

Ulaşıyor. Yani enzimsiz de tepkime oluyor — sadece çok yavaş. Enzim tepkimeyi başlatmıyor, hızlandırıyor. Bu ayrımı iyi kur; sınavda doğrudan soruluyor.

Son olarak mor eğrinin tepesine tekrar bak. Alçaldı ama sıfırlanmadı. Hâlâ başlangıç seviyesinin üstünde. Enzim engeli kaldırmıyor, düşürüyor.`,
          },
          {
            id: 'pe-enz-why',
            type: 'why',
            question: 'Enzim aktivasyon enerjisini tam olarak nasıl düşürüyor?',
            body: `"Düşürür" demek kolay; ama nasıl yaptığını söylemezsek bu bir ezber olur.

Bir tepkimenin gerçekleşmesi için iki molekülün ==doğru hızda, doğru açıyla ve doğru bölgelerinden== çarpışması gerekir. Serbest ortamda bu çok düşük bir olasılıktır; moleküller çoğu zaman yanlış açıyla çarpışıp ayrılır.

Enzim bu olasılık problemini üç yoldan çözer:

- **Yönlendirme:** Substratları aktif bölgeye belirli bir konumda tutar. Artık rastgele çarpışma beklenmez; tepkimeye girecek bölgeler zaten karşı karşıya getirilmiştir.
- **Gerilim oluşturma:** Aktif bölge substrata bağlandığında molekülü hafifçe büker ve kopması gereken bağı zorlar. Zorlanmış bir bağın kopması daha az enerji ister.
- **Uygun kimyasal ortam:** Aktif bölgedeki R grupları, tepkime için gereken yerel asitlik veya yük dağılımını sağlar; bu ortam serbest çözeltide bulunmaz.

Yani enzim enerji **vermez**. Tepkimenin daha kolay bir yoldan gitmesini sağlar. Grafikteki alçalan tepe, bu üç etkinin toplamıdır.`,
          },
          {
            id: 'pe-enz-trap1',
            type: 'trap',
            title: '“Enzim tepkimeyi başlatır” demek',
            wrong: 'Enzimi, olmayan bir tepkimeyi var eden bir madde gibi düşünmek.',
            right:
              'Enzim yalnızca **kendiliğinden olabilecek** tepkimeleri hızlandırır. Termodinamik olarak gerçekleşemeyecek bir tepkimeyi enzim mümkün kılamaz. Grafikte gri eğrinin de ürüne ulaşması bunu gösteriyor.',
            body: 'Aynı mantıkla: enzim tepkimenin yönünü de değiştirmez. Ortamdaki madde derişimlerine göre tepkime hangi yöne gidiyorsa, enzim o yöndeki hızı artırır.',
          },
          {
            id: 'pe-enz-trap2',
            type: 'trap',
            title: '“Enzim tepkimede tükenir” demek',
            wrong: '“Sindirim için çok enzim gerekir çünkü her tepkimede bir enzim harcanır” diye düşünmek.',
            right:
              'Enzim tepkimeden **değişmeden** çıkar ve hemen yeni bir substrata bağlanır. Bu yüzden hücre çok küçük miktarda enzimle çok büyük iş yapabilir. Enzimler ancak denatüre olduklarında ya da yaşlandıklarında devre dışı kalır.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-enzim-yapi',
        kind: 'build',
        title: 'Enzim yapısı ve substrata özgüllük',
        lead: 'Enzimin neden yalnızca belirli bir maddeye etki ettiğini, bölümün başındaki cümleyle açıklayacağız.',
        blocks: [
          {
            id: 'pe-ey-prose',
            type: 'prose',
            body: `Enzimin etki ettiği maddeye **substrat**, enzimin substrata bağlandığı özel bölgeye **aktif bölge** denir.

Aktif bölge rastgele bir çukur değil; proteinin ==üçüncül yapısıyla ortaya çıkan, belirli bir şekle ve kimyasal ortama sahip== bir bölgedir. Substrat bu bölgeye ancak şekli uyuyorsa oturabilir.

Bu yüzden enzimler **substrata özgüdür**: laktaz yalnızca laktoza, maltaz yalnızca maltoza etki eder. Enzimlerin çoğu, etki ettiği substratın adına "-az" eki getirilerek adlandırılır.

Eskiden bu uyum katı bir "anahtar–kilit" benzetmesiyle anlatılırdı. Bugün bilinen model **indüklenmiş uyum**dur: substrat yaklaştığında aktif bölge biraz şekil değiştirerek ona daha iyi sarılır. Yani kilit tamamen sabit değil, esnek.`,
          },
          {
            id: 'pe-ey-prose2',
            type: 'prose',
            body: `Bazı enzimler tek başına protein olarak iş görür; bunlara **basit enzim** denir. Çoğu ise çalışabilmek için protein olmayan bir yardımcıya ihtiyaç duyar; bunlara **bileşik enzim** denir.

Bileşik enzimin parçaları:
- **Apoenzim:** Protein kısmı. Özgüllüğü belirleyen bölüm budur.
- **Kofaktör:** İnorganik yardımcı — Mg²⁺, Fe²⁺, Zn²⁺ gibi mineraller.
- **Koenzim:** Organik yardımcı — çoğu **vitamin türevidir** (NAD, FAD, koenzim A).

Buradaki bağlantıya dikkat et: bir önceki bölümde minerallerin "enzimi çalıştırdığını" söylemiştik. İşte mekanizması bu. Aynı şekilde vitamin eksikliğinin neden bu kadar geniş etkiler doğurduğu da anlaşılıyor — eksik vitamin, ==çalışamayan bir enzim grubu== demek.`,
          },
          {
            id: 'pe-ey-note',
            type: 'teacher_note',
            tone: 'exam',
            body: 'Enzimler çift yönlü çalışabilir: aynı enzim uygun koşullarda hem sentezi hem yıkımı hızlandırabilir. Hangi yöne gideceğini enzim değil, ortamdaki madde derişimleri belirler.',
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-grafik',
        kind: 'deepen',
        title: 'Enzim hızını etkileyen faktörler',
        lead: 'Bu bölüm sınavda en çok grafikle sorulan yer. Üç eğriyi birbirinden ayırt edebilmen yeterli.',
        blocks: [
          {
            id: 'pe-graf-figure',
            type: 'figure',
            kind: 'enzim-hiz-grafikleri',
            width: 'full',
            title: 'Sıcaklık, pH ve substrat derişimi',
            purpose:
              'Üç grafiği yan yana vererek en sık karıştırılan ayrımı kurmak: ilk ikisi düşer, üçüncüsü yataya oturur.',
            complexity: 'high',
            caption:
              'İlk iki grafikte eğri tepe yapıp **düşer**, çünkü enzim denatüre olur. Üçüncüde eğri **düşmez, yataya oturur** — çünkü enzim doymuştur, bozulmamıştır. ==Bu ayrım tek başına bir soru değerinde.==',
            focus: [
              {
                title: 'Sıcaklık',
                body: 'Optimum sıcaklığa kadar hız artar: moleküller daha hızlı hareket eder, enzim–substrat karşılaşması sıklaşır. Optimumdan sonra enzim denatüre olmaya başlar ve hız hızla düşer. Düşük sıcaklıkta enzim bozulmaz, yalnızca yavaşlar — sıcaklık yükseltilirse tekrar çalışır.',
              },
              {
                title: 'pH',
                body: 'Her enzimin kendine ait bir optimum pH’ı vardır. Midedeki pepsin pH 2 civarında, ince bağırsaktaki tripsin pH 8 civarında en verimli çalışır. Optimumdan uzaklaşınca üç boyutlu yapı bozulur ve hız düşer.',
              },
              {
                title: 'Substrat derişimi',
                body: 'Substrat arttıkça hız artar, ancak bütün enzimlerin aktif bölgesi dolduğunda hız sabitlenir. Buna **enzim doygunluğu** denir. Bu noktadan sonra hızı artırmanın tek yolu substrat eklemek değil, ==enzim miktarını artırmaktır==.',
              },
            ],
            audio_script: `Üç grafik var. Soldan sağa gidelim ama asıl dikkat edeceğin şey eğrilerin biçimi.

Birinci grafik: sıcaklık. Eğri yükseliyor, bir tepe yapıyor ve sonra düşüyor. Düşüşün sebebi ne? Denatürasyon. Enzimin şekli bozuluyor.

İkinci grafik: pH. Yine tepe var, yine düşüş var. Sebep aynı: şekil bozuluyor.

Şimdi üçüncü grafiğe bak ve durup düşün: bu eğri de düşüyor mu?

Düşmüyor. Yükseliyor ve yataya oturuyor.

Farkı gördün mü? Sıcaklık ve pH enzimi bozuyor, o yüzden hız düşüyor. Substrat derişimi ise enzimi bozmuyor; sadece bütün enzimler dolduğu için hız artamıyor.

Bu ayrımı karıştırma. Sınavda üçüncü grafiğin de düştüğünü sanan çok öğrenci var.`,
          },
          {
            id: 'pe-graf-why',
            type: 'why',
            question: 'Her enzimin optimum pH’ı neden farklı?',
            body: `Pepsin pH 2’de, tripsin pH 8’de en iyi çalışır. İkisi de protein sindiren enzim; neden aynı ortamı sevmiyorlar?

Cevap yine aktif bölgede. Aktif bölgenin şeklini ve yükünü, oradaki ==R gruplarının elektrik yükü== belirler. Bazı R grupları asidik, bazıları baziktir ve ortamdaki H⁺ derişimine göre yük kazanır ya da kaybeder.

Bir enzimin aktif bölgesi, ancak R grupları **doğru yükleri taşıdığında** substrata uyan biçimi alır. O yükleri sağlayan H⁺ derişimi hangi pH’a karşılık geliyorsa, enzimin optimum pH’ı odur.

Bu yüzden optimum pH rastgele bir sayı değil, enzimin ==çalıştığı yere uyarlanmış== bir özelliktir: pepsin mideye, tripsin ince bağırsağa göre evrimleşmiştir.

Aynı mantığı sıcaklık için de kur: sıcak su kaynaklarında yaşayan bakterilerin enzimleri 80 °C’de denatüre olmaz, çünkü o proteinler farklı katlanacak biçimde dizilmiştir.`,
          },
          {
            id: 'pe-graf-prose',
            type: 'prose',
            body: `Bu üç faktör dışında hızı etkileyen başka etkenler de vardır:

- **Enzim derişimi:** Substrat yeterliyse enzim arttıkça hız doğrusal olarak artar.
- **Su miktarı:** Enzimler ancak yeterli su bulunan ortamda çalışır. Tohum ve sporların metabolizmasının neredeyse durmasının sebebi budur; su verildiğinde çimlenme başlar.
- **İnhibitörler:** Enzimin çalışmasını engelleyen maddeler. Bazıları aktif bölgeye bağlanarak substratın yerini kapar.
- **Aktivatörler:** Enzimin çalışmasını kolaylaştıran maddeler.

Bir de yüzey alanı: aynı miktarda besin daha küçük parçalara ayrılırsa enzimin temas edebileceği yüzey artar ve sindirim hızlanır. ==Çiğnemenin biyolojik anlamı budur== — mekanik sindirim, kimyasal sindirimin hızını artırır.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-uygulama',
        kind: 'practice',
        title: 'Şimdi sen çöz',
        lead: 'Aşağıdaki sorular bu bölümün en çok puan kaybettiren noktalarını hedefliyor. Cevaba bakmadan dene.',
        blocks: [
          {
            id: 'pe-uyg-worked',
            type: 'worked_example',
            title: 'Grafik yorumu',
            prompt:
              'Bir enzim–substrat karışımında substrat derişimi sürekli artırılıyor ve tepkime hızı ölçülüyor. Hız önce artıyor, sonra sabitleniyor. Araştırmacı bu noktadan sonra hızı daha da artırmak istiyor. Hangi değişikliği yapmalı ve neden?',
            steps: [
              {
                title: 'Hızın neden sabitlendiğini belirle',
                body: 'Hız sabitlendiyse bütün enzimlerin aktif bölgeleri doludur; yani enzim doygunluğa ulaşmıştır. Enzimler bozulmuş değil, meşguldür.',
              },
              {
                title: 'Substrat eklemenin işe yarayıp yaramayacağını sorgula',
                body: 'Yeni gelen substrat molekülleri bağlanacak boş aktif bölge bulamaz, sırada bekler. Bu yüzden substrat eklemek hızı artırmaz.',
              },
              {
                title: 'Sınırlayıcı faktörü değiştir',
                body: 'Sistemi sınırlayan şey artık substrat değil, **enzim sayısıdır**. Enzim miktarı artırılırsa daha fazla aktif bölge açılır ve hız yeniden yükselir.',
              },
              {
                title: 'Sıcaklık artırmak çözüm olur mu, kontrol et',
                body: 'Ortam zaten optimum sıcaklıkta ise sıcaklığı artırmak denatürasyona yol açar ve hız **düşer**. Optimumun altındaysa işe yarayabilir; ama soruda böyle bir bilgi verilmemiş.',
              },
            ],
            answer:
              'Enzim miktarını artırmalı. Doygunluk noktasında sınırlayıcı faktör substrat değil, boş aktif bölge sayısıdır.',
            takeaway:
              '“Sınırlayıcı faktör hangisi?” sorusu bu konunun anahtarıdır. Bir grafik yataya oturmuşsa, artırdığın değişken artık sınırlayıcı değildir — başka bir değişkeni aramalısın.',
          },
          {
            id: 'pe-uyg-quiz1',
            type: 'quiz',
            purpose: 'error',
            question: 'Denatüre olmuş bir protein için aşağıdakilerden hangisi **doğrudur**?',
            options: [
              'Amino asit sayısı azalmıştır',
              'Peptit bağlarının tamamı kopmuştur',
              'Amino asit dizilimi değişmemiştir',
              'Monomerlerine ayrılarak sindirilmiştir',
            ],
            answer_index: 2,
            explanation: `Doğru cevap **C**. Denatürasyonda kopan şey zayıf etkileşimlerdir (hidrojen bağı, iyonik çekim, hidrofobik etkileşim). Peptit bağları kovalenttir ve genellikle sağlam kalır — dolayısıyla amino asit sayısı ve sırası değişmez.

Diğerleri neden yanlış:
- **A ve B:** Amino asit sayısının azalması veya peptit bağlarının kopması **hidroliz** demektir; denatürasyon hidroliz değildir.
- **D:** Sindirim, peptit bağlarının su ile koparılmasıdır. Denatürasyonda molekül hâlâ bütündür, sadece şekli bozulmuştur.

Ayırt edici cümleyi aklında tut: ==denatürasyonda protein parçalanmaz, açılır.==`,
          },
          {
            id: 'pe-uyg-quiz2',
            type: 'quiz',
            purpose: 'concept',
            question: 'Enzimlerle ilgili aşağıdaki ifadelerden hangisi **yanlıştır**?',
            options: [
              'Tepkime sonunda değişmeden çıkarlar',
              'Aktivasyon enerjisini düşürürler',
              'Gerçekleşemeyecek bir tepkimeyi gerçekleştirebilirler',
              'Substratlarına özgüdürler',
            ],
            answer_index: 2,
            explanation: `Yanlış ifade **C**. Enzim yalnızca kendiliğinden olabilecek tepkimeleri hızlandırır; termodinamik olarak gerçekleşemeyecek bir tepkimeyi mümkün kılamaz.

Grafikteki gri eğriyi hatırla: enzimsiz durumda da tepkime ürüne ulaşıyordu, sadece çok yavaş.

Diğerleri doğru:
- **A:** Enzim tüketilmez, tekrar kullanılır.
- **B:** Enzimin tanımı budur.
- **D:** Aktif bölgenin şekli yalnızca belirli bir substrata uyar.`,
          },
          {
            id: 'pe-uyg-quiz3',
            type: 'quiz',
            purpose: 'apply',
            question:
              'Bir enzimin bulunduğu ortamın sıcaklığı optimum değerin çok üstüne çıkarılıyor, sonra tekrar optimum değere düşürülüyor. Tepkime hızı için ne söylenebilir?',
            options: [
              'Eski hızına döner, çünkü sıcaklık geri geldi',
              'Eski hızına dönmez, çünkü enzim denatüre olmuştur',
              'Hız daha da artar, çünkü enzim ısınmıştır',
              'Hız değişmez, çünkü sıcaklık enzimi etkilemez',
            ],
            answer_index: 1,
            explanation: `Doğru cevap **B**. Optimumun çok üstündeki sıcaklık enzimin üç boyutlu yapısını bozar. Bu değişim genellikle **geri dönüşümsüzdür**; sıcaklık düşse bile açılan zincir doğru katlanmayı yeniden bulamaz.

Buradaki asıl ayrımı kur: **düşük sıcaklıkta** enzim bozulmaz, yalnızca yavaşlar — sıcaklık yükseltilirse tekrar çalışır. **Yüksek sıcaklıkta** ise enzim bozulur ve geri dönmez.

Bu asimetri sınavda sık sorulur: soğuk yavaşlatır, sıcak öldürür.`,
          },
        ],
      },

      /* ============================================================ */
      {
        id: 'pe-kapanis',
        kind: 'close',
        title: 'Toparlayalım',
        lead: 'Her maddeye “evet, bunu anlatabilirim” diyebiliyor musun kontrol et.',
        blocks: [
          {
            id: 'pe-kap-summary',
            type: 'summary',
            title: 'Bu bölümden geriye kalması gerekenler',
            points: [
              'Bütün amino asitlerde aynı iskelet vardır; farkı yalnızca **R grubu** yaratır.',
              'Amino asitler **peptit bağıyla** birleşir; bu bir dehidrasyon sentezidir ve n amino asitten n − 1 su çıkar.',
              'Dört yapı düzeyi vardır. Yalnızca **birincil yapı kovalent (peptit) bağla** korunur; diğerleri zayıf etkileşimlerle.',
              'Dördüncül yapı her proteinde bulunmaz; tek zincirli protein üçüncül düzeyde biter.',
              'Denatürasyonda protein **parçalanmaz, açılır**: amino asit sayısı ve sırası değişmez.',
              'Enzim tepkimeyi **başlatmaz, hızlandırır**; aktivasyon enerjisini düşürür ama sıfırlamaz.',
              'Enzim tepkimeden **değişmeden çıkar** ve tekrar kullanılır.',
              'Enzim, tepkenler ile ürünler arasındaki **enerji farkını değiştirmez**.',
              'Enzimler substrata özgüdür; aktif bölgenin şekli üçüncül yapıdan gelir.',
              'Sıcaklık ve pH grafikleri tepe yapıp **düşer** (denatürasyon); substrat grafiği **yataya oturur** (doygunluk).',
            ],
          },
          {
            id: 'pe-kap-memory',
            type: 'memory',
            body:
              'Bu bölümün tek cümlesi: *Dizilim şekli belirler, şekil işlevi belirler.* Denatürasyon da, enzim özgüllüğü de, sıcaklık grafiği de bu cümlenin farklı yüzleri.',
          },
          {
            id: 'pe-kap-next',
            type: 'next_step',
            body: `Konunun son bölümünde nükleik asitleri, vitaminleri ve ATP'yi göreceksin.

Orada bugünkü zincire bir halka daha eklenecek: amino asit sırasını kim belirliyor? Cevap DNA'da — ve nükleik asitler tam olarak o bilgiyi taşıyan moleküller.`,
            topics: ['Nükleik asitler, vitaminler ve ATP', 'Hücre', 'AYT · Genden Proteine'],
          },
          {
            id: 'pe-kap-audio',
            type: 'audio_script',
            body: `Bölüm bitti. Kapatmadan önce üç kontrol yap.

Bir: denatüre olan bir proteinin amino asit sırası değişir mi? Hayır diyebiliyorsan tamam.

İki: enzim tepkimeyi başlatır mı? Hayır, hızlandırır diyebiliyorsan tamam.

Üç: substrat derişimi grafiği düşer mi? Hayır, yataya oturur diyebiliyorsan tamam.

Üçüne de cevap verebiliyorsan bu bölümün sınavdaki bütün klasik tuzaklarını geçtin demektir. Veremediğin varsa o bölüme dön.`,
          },
        ],
      },
    ],
  },
}
