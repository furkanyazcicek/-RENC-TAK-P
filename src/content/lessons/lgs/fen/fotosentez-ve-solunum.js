import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.6 Enerji Dönüşümleri ve Çevre Bilimi · 2. ders
 * Kazanım : F.8.6.2.1 · F.8.6.2.2 · F.8.6.2.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır) — özet
 *   F.8.6.2.1 → CO₂ ve su kullanılır, besin ve oksijen üretilir;
 *               KİMYASAL DENKLEMİNE GİRİLMEZ; yapay ışıkta da olabilir;
 *               fotosentez yapan canlılar üreticidir.
 *   F.8.6.2.2 → ışık rengi, CO₂ miktarı, su miktarı, ışık şiddeti ve
 *               sıcaklık vurgulanır.
 *   F.8.6.2.3 → solunumun KİMYASAL DENKLEMİNE GİRİLMEZ; bitkilerin gece ve
 *               gündüz solunum yaptığına değinilir; oksijenli ve oksijensiz
 *               solunum EVRELERİNE GİRİLMEDEN verilir, açığa çıkan ENERJİ
 *               MİKTARLARI SAYISAL BELİRTİLMEZ; ATP’nin YAPISINA GİRİLMEDEN
 *               adından bahsedilir.
 *
 * Bu yüzden derste hiçbir kimyasal formül ya da denklem yoktur; fotosentez
 * ve solunum sözcüklerle anlatılır. Oksijenli–oksijensiz solunum yalnız
 * "hangisi daha çok enerji verir" düzeyinde karşılaştırılır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-fotosentez-ve-solunum',
  topic: 'Enerji Dönüşümleri ve Çevre Bilimi',
  order: 2,
  title: 'Fotosentez ve Solunum: Enerjinin İki Yüzü',
  subtitle:
    'Fotosentez güneş enerjisini besinde depolar; solunum o enerjiyi serbest bırakır. Biri olmadan öbürü anlamını yitirir.',
  minutes: 48,
  kazanimlar: ['F.8.6.2.1', 'F.8.6.2.2', 'F.8.6.2.3'],
  prerequisites: [
    { topic: 'Besin Zinciri, Besin Ağı ve Ekoloji Piramidi', why: 'Üreticilerin besin zincirindeki yeri orada kuruldu; bu ders onların besini nasıl ürettiğini açıklar.' },
    { topic: 'Hücre ve organelleri (6. ve 7. sınıf)', why: 'Kloroplast ve mitokondrinin görevlerini hatırlamak fotosentez ve solunumu yerleştirmeyi kolaylaştırır.' },
  ],
  outcomes: [
    'Fotosentezde neyin kullanılıp neyin üretildiğini söyleyebileceksin.',
    'Fotosentezin canlılar için önemini açıklayabileceksin.',
    'Fotosentez hızını etkileyen beş etkeni bir deney üzerinden yorumlayabileceksin.',
    'Solunumun neden bütün canlılar için zorunlu olduğunu açıklayabileceksin.',
    'Oksijenli ve oksijensiz solunumu günlük örneklerle ayırt edebileceksin.',
  ],

  opening: {
    title: 'Bir tohum, kocaman bir ağaç',
    lead: 'Küçük bir meşe palamudu yıllar içinde tonlarca ağırlığında bir ağaca dönüşür. Bu ağacın gövdesini oluşturan madde nereden geldi?',
    body: `Bir meşe palamudu avucuna sığar. Yıllar sonra aynı palamuttan boyu metrelerce uzun, gövdesi tonlarca ağırlığında bir ağaç çıkar. Bu kadar madde nereden geldi?

Çoğu öğrencinin ilk cevabı “topraktan” olur. Ama ağacın dibindeki toprak yıllar içinde neredeyse hiç azalmaz. Ağacın gövdesini oluşturan maddenin büyük kısmı, gözümüzle göremediğimiz bir yerden gelir: **havadaki karbondioksitten** ve **sudan.**

Bitkiler güneş ışığının enerjisini kullanarak havadan aldıkları karbondioksiti ve kökleriyle aldıkları suyu **besine** dönüştürür. Bu olaya **fotosentez** denir. Fotosentez sırasında havaya **oksijen** verilir.

Peki bu besin ne işe yarar? Bitkinin büyümesi, çiçek açması, tohum vermesi için **enerji** gerekir. Bitki bu enerjiyi, ürettiği besini **solunum** ile parçalayarak elde eder.

Bu derste bu iki olayı birlikte göreceğiz:

- **Fotosentez:** güneş enerjisi besinde depolanır.
- **Solunum:** besindeki enerji serbest bırakılır ve canlı tarafından kullanılır.

İkisi aynı madalyonun iki yüzü gibidir: fotosentezin ürettiği besin ve oksijen solunumda kullanılır; solunumun ürettiği karbondioksit ve su fotosentezde kullanılır.

Bir kapsam notu: *program bu konuda fotosentezin ve solunumun **kimyasal denklemine girilmemesini** ister.* Bu yüzden bu derste formül yazmayacağız; iki olayı da sözcüklerle, neyin kullanılıp neyin üretildiğiyle anlatacağız.`,
  },

  concepts: [
    {
      term: 'Fotosentez',
      body: 'Üreticilerin ışık enerjisini kullanarak **karbondioksit ve sudan besin ve oksijen** ürettiği olaydır. Bitkilerde yeşil kısımlardaki kloroplastlarda gerçekleşir.',
    },
    {
      term: 'Klorofil',
      body: 'Kloroplastlarda bulunan, ışığı soğuran yeşil renkli maddedir. Fotosentez için ışığı yakalayan maddedir; bitkilerin yeşil görünmesinin nedeni de odur.',
    },
    {
      term: 'Üretici',
      body: 'Fotosentez yaparak kendi besinini üreten canlıdır. Program fotosentez yapan canlıların üretici olduğunun ifade edilmesini ister.',
    },
    {
      term: 'Solunum',
      body: 'Canlıların besinlerdeki enerjiyi serbest bırakıp kullanılabilir hâle getirdiği olaydır. **Bütün canlılar** solunum yapar; bitkiler de gece ve gündüz solunum yapar.',
    },
    {
      term: 'Oksijenli solunum',
      body: 'Oksijen kullanılarak besinin parçalandığı solunumdur. Sonunda karbondioksit ve su oluşur; **daha çok enerji** açığa çıkar.',
    },
    {
      term: 'Oksijensiz solunum',
      body: 'Oksijen kullanılmadan besinin parçalandığı solunumdur. **Daha az enerji** açığa çıkar. Mayalar ve bazı bakteriler bu yolla enerji elde eder; ekmek hamurunun kabarması ve yoğurt yapımı bu olaya dayanır.',
    },
    {
      term: 'ATP',
      body: 'Solunumla açığa çıkan enerjinin hücrede kullanılmak üzere depolandığı moleküldür. Program bu düzeyde yalnız adının bilinmesini ister; yapısına girilmez.',
    },
  ],

  why: {
    question: 'Fotosentez neden bütün canlılar için önemlidir; yalnız bitkiler için değil?',
    body: `Çünkü fotosentez, güneş enerjisinin canlılar dünyasına girdiği **tek büyük kapıdır.**

Geçen derste besin zincirini kurduk: ot → çekirge → kurbağa → yılan. Bu zincirin her halkası enerjisini bir öncekinden alıyordu. Peki ilk halka, ot, enerjisini nereden alıyor? **Fotosentezden.**

Fotosentez olmasaydı:

1. **Besin olmazdı.** Otçulların yiyecek bitkisi, etçillerin yiyecek otçulu kalmazdı. Besin zincirinin tamamı çökerdi. Bizim yediğimiz ekmek, sebze, meyve ve hatta et de sonunda fotosentezle üretilen besine dayanır.

2. **Oksijen azalırdı.** Canlıların solunumda kullandığı oksijen, fotosentezle sürekli yenilenir. Fotosentez durursa havadaki oksijen giderek azalırdı.

3. **Karbondioksit birikirdi.** Fotosentez havadaki karbondioksiti kullanır. Fotosentez olmasaydı bu gaz havada birikirdi. Bir sonraki derste bunun iklim üzerindeki etkisini göreceğiz.

Buradan önemli bir sonuç çıkar: **fotosentez yapan canlılar, bütün ekosistemin enerji kaynağıdır.** Program da bu canlıların **üretici** olarak adlandırılmasını ister.

Şimdi solunuma geçelim. Fotosentezin ürettiği besin bir enerji deposudur; ama bu enerji **kilitli** durumdadır. Canlının kaslarını çalıştırması, büyümesi, vücut sıcaklığını koruması için bu enerjinin serbest bırakılması gerekir. İşte solunum bu kilidi açar.

Bu yüzden solunum **bütün canlılar için** zorunludur: bitki, hayvan, mantar, bakteri… Hiçbir canlı solunum yapmadan yaşayamaz; çünkü enerjisiz hiçbir yaşamsal faaliyet sürmez.

Sık yapılan bir yanılgıyı hemen düzeltelim: **bitkiler yalnız gece solunum yapmaz.** Bitkiler **gece de gündüz de** solunum yapar. Gündüz fotosentez de yaptıkları için solunumları dışarıdan fark edilmez; çünkü gündüz fotosentezle üretilen oksijen, solunumda harcanandan fazladır.

*Kapsam notu: program iki olayın da kimyasal denklemine girilmemesini ister; bu yüzden neyin kullanılıp neyin üretildiğini sözcüklerle kurduk.*`,
  },

  mechanism: {
    title: 'Fotosentezden solunuma: enerjinin yolculuğu',
    lead: 'Güneş ışığından kasının hareketine kadar uzanan yol. Her adım bir öncekinin sonucudur.',
    intro: 'Aşağıdaki zincir, güneş enerjisinin besinde depolanıp sonra canlı tarafından kullanılmasını gösterir.',
    steps: [
      {
        title: '1. Bitki gerekli maddeleri toplar',
        body: 'Kökler topraktan suyu alır; yapraklar havadan karbondioksiti alır.',
      },
      {
        title: '2. Klorofil ışığı soğurur',
        body: 'Yapraktaki kloroplastlarda bulunan klorofil güneş ışığının enerjisini yakalar. Işık yapay bir kaynaktan da gelebilir; lamba ışığında da fotosentez olur.',
      },
      {
        title: '3. Besin ve oksijen üretilir',
        body: 'Işık enerjisiyle karbondioksit ve sudan besin üretilir; oksijen havaya verilir. Güneş enerjisi artık besinin içinde depolanmıştır.',
      },
      {
        title: '4. Besin canlılara ulaşır',
        body: 'Besin bitkinin kendi hücrelerinde kullanılır ya da besin zinciriyle öbür canlılara aktarılır.',
      },
      {
        title: '5. Solunum enerjiyi serbest bırakır',
        body: 'Hücreler besini solunumla parçalar. Oksijenli solunumda oksijen kullanılır; karbondioksit ve su oluşur. Açığa çıkan enerji ATP adı verilen molekülde depolanır.',
      },
      {
        title: '6. Enerji kullanılır, maddeler döner',
        body: 'Canlı bu enerjiyi büyüme, hareket ve yaşamsal faaliyetlerde kullanır. Solunumda oluşan karbondioksit ve su yeniden fotosentezde kullanılabilir.',
      },
    ],
    takeaway:
      'Zincir bir döngü kurar: fotosentezin ürünleri solunumda, solunumun ürünleri fotosentezde kullanılır. Enerji ise güneşten gelir ve canlıda harcanır.',
  },

  comparison: {
    title: 'Fotosentez ile solunumun karşılaştırılması',
    columns: ['Fotosentez', 'Solunum'],
    rows: [
      { label: 'Hangi canlılar yapar?', values: ['Yalnız üreticiler (bitkiler, algler, bazı bakteriler)', 'Bütün canlılar'] },
      { label: 'Ne zaman olur?', values: ['Işık varken', 'Gece ve gündüz, sürekli'] },
      { label: 'Kullanılanlar', values: ['Karbondioksit ve su (ve ışık enerjisi)', 'Besin (ve oksijenli solunumda oksijen)'] },
      { label: 'Üretilenler', values: ['Besin ve oksijen', 'Enerji; oksijenli solunumda karbondioksit ve su'] },
      { label: 'Enerjiye ne olur?', values: ['Işık enerjisi besinde depolanır', 'Besindeki enerji serbest bırakılır'] },
      { label: 'Hücrede nerede?', values: ['Kloroplast', 'Oksijenli solunum büyük ölçüde mitokondri'] },
    ],
    insight:
      'Kullanılanlar ve üretilenler satırları birbirinin tersidir. Bu yüzden iki olay doğada bir denge kurar.',
  },

  traps: [
    {
      title: 'Bitkilerin yalnız gece solunum yaptığını sanmak',
      wrong: 'Bitkiler gündüz fotosentez, gece solunum yapar.',
      right: 'Bitkiler **gece ve gündüz** solunum yapar. Gündüz buna ek olarak fotosentez de yaparlar.',
      body: 'Gündüz fotosentezle üretilen oksijen solunumda harcanandan fazla olduğu için bitki dışarıya oksijen verir; bu yüzden solunum fark edilmez. Ama durmaz. Program bu noktaya değinilmesini açıkça ister.',
    },
    {
      title: 'Bitkinin maddesinin topraktan geldiğini sanmak',
      wrong: 'Ağaçlar büyümek için gereken maddenin tamamını topraktan alır.',
      right: 'Ağacın gövdesini oluşturan maddenin büyük kısmı fotosentezle **havadaki karbondioksit ve su** kullanılarak üretilen besinden gelir.',
      body: 'Topraktan alınan su ve mineraller önemlidir; ama bitkinin kütlesinin çoğu havadan alınan karbondioksitle oluşur. Ağacın dibindeki toprağın neredeyse hiç azalmaması bunun ipucudur.',
    },
    {
      title: 'Fotosentezin yalnız güneş ışığında olduğunu sanmak',
      wrong: 'Fotosentez için mutlaka güneş ışığı gerekir.',
      right: 'Fotosentez için **ışık** gerekir; bu ışık yapay bir kaynaktan da gelebilir. Seralarda lambalarla fotosentez sağlanabilir.',
      body: 'Program bu noktanın vurgulanmasını ister. Önemli olan ışığın kaynağı değil, ışığın klorofil tarafından soğurulabilmesidir.',
    },
    {
      title: 'Solunumu yalnız nefes almak sanmak',
      wrong: 'Solunum, akciğerlerle nefes alıp vermektir; bitkilerde solunum olmaz.',
      right: 'Burada anlatılan solunum, **hücrelerde** besinden enerji elde edilmesidir. Nefes alma bu sürece oksijen taşıyan bir yardımcıdır. Hücresel solunum bitkiler dâhil **bütün canlılarda** gerçekleşir.',
      body: 'Akciğeri olmayan bitkiler, mantarlar ve bakteriler de solunum yapar; çünkü hepsinin enerjiye ihtiyacı vardır.',
    },
  ],

  variables: {
    title: 'Deneyle keşfet: ışık şiddeti fotosentez hızını etkiler mi?',
    lead:
      'Kazanım fotosentez hızını etkileyen etkenlerle ilgili çıkarım ister. Bir etkenin etkisini görmek için yalnız onu değiştireceğiz.',
    question: 'Bir su bitkisine ışık kaynağı yaklaştırıldığında birim zamanda çıkan gaz kabarcığı sayısı değişir mi?',
    independent: {
      label: 'Işık şiddeti',
      note: 'Ben değiştiriyorum: lambayı yaklaştırıp uzaklaştırarak',
    },
    setup: {
      label: 'Su dolu kapta bir su bitkisi',
      note: 'Bitkiden çıkan kabarcıklar sayılır',
    },
    dependent: {
      label: 'Bir dakikada çıkan kabarcık sayısı',
      note: 'Ölçtüğüm: fotosentez hızının göstergesi',
    },
    controlled: [
      'Aynı bitki ve aynı büyüklükte dal',
      'Suyun sıcaklığı',
      'Sudaki karbondioksit miktarı',
      'Işığın rengi',
    ],
    caption:
      'Sıcaklık, karbondioksit ve ışık rengi de fotosentez hızını etkiler; bu yüzden bilerek sabit tutulur. Aksi hâlde kabarcık sayısındaki farkın nedenini bilemezdik.',
  },

  experiment: {
    title: 'Su bitkisi deneyi',
    intro:
      'Bu deney öğretmen gözetiminde yapılır. Çıkan kabarcıklar fotosentezde üretilen oksijeni gösterir; kabarcık sayısı fotosentez hızının göstergesidir.',
    steps: [
      { title: '1. Düzeneği kur', body: 'Su dolu bir kaba bir su bitkisi dalı konur. Suyun sıcaklığı ölçülüp kaydedilir.' },
      { title: '2. Tahminini yaz', body: '“Lamba yaklaştıkça kabarcık sayısı artar / azalır / değişmez.” Tahminini deneyden önce yaz.' },
      { title: '3. Uzak mesafede say', body: 'Lamba bitkiden uzak bir noktaya konur; bitkinin alışması için biraz beklenir, sonra bir dakikadaki kabarcıklar sayılır.' },
      { title: '4. Yaklaştırıp tekrar say', body: 'Lamba adım adım yaklaştırılır; her adımda aynı süre beklenip kabarcıklar sayılır. Suyun ısınmaması için lamba ile kap arasına su dolu bir kap konabilir.' },
      { title: '5. Sonuçları tabloya yaz', body: 'Her mesafe için kabarcık sayısı kaydedilir.' },
      { title: '6. Tahminle karşılaştır', body: 'Işık şiddeti arttıkça kabarcık sayısının belli bir düzeye kadar arttığı, sonra artmayı bıraktığı görülür.' },
    ],
    takeaway:
      'Dördüncü adımdaki su dolu kap, sıcaklığı sabit tutmak içindir. İyi bir deneyde kontrol edilen değişkenler için de önlem alınır.',
  },

  dataTable: {
    title: 'Gözlem kaydı: ışık şiddeti ve kabarcık sayısı',
    columns: ['Lambanın bitkiye uzaklığı', 'Işık şiddeti', 'Bir dakikada çıkan kabarcık'],
    rows: [
      ['50 cm', 'Düşük', '4'],
      ['40 cm', 'Orta', '9'],
      ['30 cm', 'Yüksek', '16'],
      ['20 cm', 'Çok yüksek', '21'],
      ['10 cm', 'En yüksek', '22'],
    ],
    caption:
      'Işık şiddeti arttıkça kabarcık sayısı artmış; son iki satırda artış neredeyse durmuştur. Bu noktadan sonra hızı başka bir etken (örneğin karbondioksit miktarı) sınırlar. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-fotosentez-hiz',
      title: 'Fotosentez hızını etkileyen beş etken',
      lead: 'Programın açıklaması beş etkeni adıyla sayar: ışık rengi, karbondioksit miktarı, su miktarı, ışık şiddeti ve sıcaklık.',
      blocks: [
        {
          id: 'lgs-fen-fotosentez-hiz-anlatim',
          type: 'prose',
          body: `Fotosentezin hızı sabit değildir; ortam koşullarına göre değişir. Program beş etkenin vurgulanmasını ister. Her birini aynı soruyla inceleyelim: **artarsa ne olur?**

**1. Işık şiddeti.** Işık şiddeti arttıkça fotosentez hızı **artar**; ama belli bir noktadan sonra artış durur ve hız **sabitlenir.** Bu noktada bitki ışığı daha hızlı kullanamaz; hızı başka bir etken sınırlar. Deney tablosunda son iki satırın bunu gösterdiğini gördün.

**2. Karbondioksit miktarı.** Karbondioksit fotosentezin hammaddelerinden biridir. Miktarı arttıkça fotosentez hızı **artar**, yine belli bir noktadan sonra **sabitlenir.** Seralarda karbondioksit miktarının artırılması bu yüzden verimi yükseltebilir.

**3. Su miktarı.** Su da fotosentezin hammaddesidir. Su yetersiz kalırsa fotosentez **yavaşlar.** Kuraklık dönemlerinde bitkilerin gelişiminin durmasının nedenlerinden biri budur.

**4. Sıcaklık.** Sıcaklık belli bir değere kadar arttıkça fotosentez hızı **artar**; bu değeri aştıktan sonra hız **azalır.** Çok sıcak ortamda fotosentez yavaşlar. Yani sıcaklıkta “ne kadar çok o kadar iyi” kuralı geçerli değildir; her bitki için en uygun bir sıcaklık vardır.

**5. Işığın rengi.** Beyaz ışık farklı renklerden oluşur. Klorofil bu renkleri **aynı ölçüde soğurmaz.** Fotosentez **kırmızı ve mor–mavi ışıkta en hızlı**, **yeşil ışıkta en yavaş** gerçekleşir. Çünkü klorofil yeşil ışığın büyük kısmını soğurmaz, yansıtır. Yaprakların yeşil görünmesinin nedeni de budur: gözümüze yansıyan ışık yeşildir.

Bu beş etkenin ortak dersi şudur: **fotosentezin hızı, o anda en yetersiz olan etkenle sınırlanır.** Bol ışık olsa bile karbondioksit azsa hız artmaz; bol karbondioksit olsa bile ışık azsa hız artmaz.

Bir deneyde bu etkenlerden birinin etkisini görmek istiyorsan, **öbür dördünü sabit tutman gerekir.** Su bitkisi deneyinde ışık şiddetini değiştirirken sıcaklığı, karbondioksiti ve ışığın rengini bu yüzden sabit tuttuk.`,
        },
        {
          id: 'lgs-fen-fotosentez-hiz-tablo',
          type: 'table',
          interactive: true,
          title: 'Beş etken, beş davranış',
          columns: ['Etken', 'Artınca ne olur?', 'Dikkat edilecek nokta'],
          rows: [
            ['Işık şiddeti', 'Hız artar, sonra sabitlenir', 'Belli bir noktadan sonra başka etken sınırlar'],
            ['Karbondioksit miktarı', 'Hız artar, sonra sabitlenir', 'Seralarda verimi artırmak için kullanılabilir'],
            ['Su miktarı', 'Yetersizse hız düşer', 'Kuraklık fotosentezi yavaşlatır'],
            ['Sıcaklık', 'Hız belli bir değere kadar artar, sonra azalır', 'Çok sıcak ortam fotosentezi yavaşlatır'],
            ['Işığın rengi', 'Kırmızı ve mor–mavide en hızlı, yeşilde en yavaş', 'Klorofil yeşil ışığı büyük ölçüde yansıtır'],
          ],
          caption: 'Sıcaklık satırı öbürlerinden farklıdır: artış belli bir noktadan sonra hızı düşürür.',
        },
        {
          id: 'lgs-fen-fotosentez-hiz-tuzak',
          type: 'trap',
          title: 'Sıcaklık arttıkça fotosentezin hep hızlanacağını sanmak',
          wrong: 'Ortam ne kadar sıcak olursa fotosentez o kadar hızlı olur.',
          right: 'Fotosentez hızı sıcaklıkla **belli bir değere kadar** artar; bu değer aşılınca **azalır.**',
          body: 'Aşırı sıcak, bitkinin fotosentez düzeneğini olumsuz etkiler. Sorularda sıcaklığa bağlı bir grafik görürsen yükselip sonra alçalan bir eğri bekle.',
        },
        {
          id: 'lgs-fen-fotosentez-hiz-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Işık rengi sorularında en sık yapılan hata “yaprak yeşil olduğu için yeşil ışık en iyisidir” düşüncesidir. Tam tersi: yaprak yeşil görünür çünkü yeşil ışığı yansıtır, yani **kullanmaz.** Fotosentez yeşil ışıkta en yavaştır.',
        },
      ],
    },

    {
      id: 'lgs-fen-fotosentez-solunum-turleri',
      title: 'Solunum: oksijenli ve oksijensiz',
      lead: 'Program iki solunum türünün evrelerine girilmeden verilmesini ve enerji miktarlarının sayısal belirtilmemesini ister.',
      blocks: [
        {
          id: 'lgs-fen-fotosentez-solunum-turleri-anlatim',
          type: 'prose',
          body: `Canlılar besindeki enerjiyi iki yolla serbest bırakabilir: **oksijen kullanarak** ya da **oksijen kullanmadan.**

**Oksijenli solunum.** Besin, oksijen kullanılarak parçalanır. Sonunda **karbondioksit ve su** oluşur ve **çok enerji** açığa çıkar. İnsanlar, hayvanlar ve bitkiler dâhil canlıların çoğu enerjisinin büyük kısmını bu yolla elde eder. Hücrede büyük ölçüde **mitokondride** gerçekleşir.

**Oksijensiz solunum.** Besin, oksijen kullanılmadan parçalanır. Oksijenli solunuma göre **daha az enerji** açığa çıkar. Bazı bakteriler ve mayalar enerjilerini bu yolla elde eder. Günlük hayatta bunun pek çok örneği vardır:

- **Ekmek hamurunun kabarması:** mayalar oksijensiz solunum yaparken karbondioksit gazı oluşur; bu gaz hamuru kabartır.
- **Yoğurt, peynir ve turşu yapımı:** bazı bakterilerin oksijensiz solunumu sonucunda oluşan maddeler sütü yoğurda dönüştürür, turşuya ekşi tadını verir.
- **Yorgun kaslar:** çok yoğun egzersizde kaslara yeterli oksijen ulaşmadığında kas hücreleri kısa süre oksijensiz solunum yapabilir; bu sırada oluşan madde kaslarda yorgunluk ve kramp hissine katkıda bulunur.

İki solunum türü arasındaki en önemli fark **açığa çıkan enerjinin miktarıdır**: oksijenli solunum **daha çok**, oksijensiz solunum **daha az** enerji verir. *Program bu miktarların sayısal olarak belirtilmemesini ister; bu yüzden yalnız “daha çok – daha az” karşılaştırmasını biliyoruz.*

Her iki solunumda da açığa çıkan enerji, hücrede **ATP** adı verilen molekülde depolanır. ATP’yi hücrenin kullandığı bir “enerji parası” gibi düşünebilirsin: hücre enerjiye ihtiyaç duyduğunda ATP’yi harcar. *Program bu düzeyde ATP’nin yalnız adının bilinmesini ister; yapısına girilmez.*`,
        },
        {
          id: 'lgs-fen-fotosentez-solunum-turleri-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Oksijenli ve oksijensiz solunum',
          columns: ['Oksijenli solunum', 'Oksijensiz solunum'],
          rows: [
            { label: 'Oksijen kullanılır mı?', values: ['Evet', 'Hayır'] },
            { label: 'Açığa çıkan enerji', values: ['Daha çok', 'Daha az'] },
            { label: 'Kimler yapar?', values: ['Canlıların çoğu', 'Bazı bakteriler, mayalar; zor durumda kas hücreleri'] },
            { label: 'Günlük örnek', values: ['Koşarken, yürürken enerji üretimi', 'Ekmek hamurunun kabarması, yoğurt yapımı'] },
            { label: 'Enerji nerede depolanır?', values: ['ATP', 'ATP'] },
          ],
          insight:
            'İki türü ayıran temel ölçüt oksijendir; bundan doğan en önemli sonuç enerji miktarındaki farktır. Miktarlar sayıyla verilmez.',
        },
        {
          id: 'lgs-fen-fotosentez-solunum-turleri-tuzak',
          type: 'trap',
          title: 'Oksijensiz solunumun hiç enerji vermediğini sanmak',
          wrong: 'Oksijen olmadan solunum olmaz; oksijensiz solunumda enerji açığa çıkmaz.',
          right: 'Oksijensiz solunumda da enerji açığa çıkar; yalnız oksijenli solunuma göre **daha azdır.**',
          body: 'Mayalar ve bazı bakteriler bu azıcık enerjiyle yaşamlarını sürdürür. Ekmek hamurunun kabarması bu enerjinin üretildiğinin günlük bir kanıtıdır.',
        },
      ],
    },

    {
      id: 'lgs-fen-fotosentez-denge',
      title: 'Fotosentez ve solunum dengesi',
      lead: 'İki olay birbirinin tersi gibi çalışır ve doğada bir denge kurar.',
      blocks: [
        {
          id: 'lgs-fen-fotosentez-denge-anlatim',
          type: 'prose',
          body: `Fotosentezle solunumu yan yana koyduğunda şaşırtıcı bir ilişki görürsün:

- Fotosentez **karbondioksit ve su** kullanır, **besin ve oksijen** üretir.
- Oksijenli solunum **besin ve oksijen** kullanır, **karbondioksit ve su** üretir.

Birinin kullandığını öbürü üretiyor. Bu yüzden iki olay doğada bir **denge** kurar: havadaki oksijen ve karbondioksit miktarları uzun süre büyük ölçüde korunur.

Şimdi bu dengeyi bir bitki üzerinde gündüz ve gece izleyelim.

**Gündüz:** Bitki hem fotosentez hem solunum yapar. Işık yeterliyse fotosentez solunumdan **daha hızlıdır.** Sonuçta bitki havaya **oksijen verir**, havadan **karbondioksit alır.**

**Gece:** Işık olmadığı için fotosentez durur; ama solunum **devam eder.** Sonuçta bitki havadan **oksijen alır**, havaya **karbondioksit verir.**

Bu, bir yanılgıyı daha düzeltir: bazı insanlar “bitkiler gece oksijen üretir” sanır. Oysa gece fotosentez olmadığı için bitki oksijen üretmez; tersine solunumda oksijen harcar.

Bu dengenin büyük ölçekteki anlamı bir sonraki dersin konusudur: ormanlar yok edildiğinde fotosentezle kullanılan karbondioksit azalır; fosil yakıtların yakılmasıyla da havaya fazladan karbondioksit karışır. Denge bozulduğunda **küresel iklim değişikliği** gündeme gelir.`,
        },
        {
          id: 'lgs-fen-fotosentez-denge-tablo',
          type: 'table',
          interactive: true,
          title: 'Bir bitkinin gündüz ve gece gaz alışverişi',
          columns: ['Zaman', 'Fotosentez', 'Solunum', 'Havaya ne verir?', 'Havadan ne alır?'],
          rows: [
            ['Gündüz (yeterli ışık)', 'Var ve solunumdan hızlı', 'Var', 'Oksijen', 'Karbondioksit'],
            ['Gece (ışık yok)', 'Yok', 'Var', 'Karbondioksit', 'Oksijen'],
          ],
          caption:
            'Solunum sütunu iki satırda da “var”dır. Bitkiler gece de gündüz de solunum yapar; gündüz yalnız fotosentez daha baskındır.',
        },
        {
          id: 'lgs-fen-fotosentez-denge-hafiza',
          type: 'memory',
          title: 'İki olay, bir döngü',
          body:
            '**Fotosentez** karbondioksit ve suyu ışıkla besine ve oksijene dönüştürür. **Solunum** besini oksijenle parçalar; enerji, karbondioksit ve su açığa çıkar. Birinin ürettiğini öbürü kullanır.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Neyi kullanır, neyi üretir?',
      prompt:
        'Bir sera bitkisi gün boyunca fotosentez yapıyor. Fotosentez için hangi maddeleri kullanır, hangilerini üretir? Fotosentez için gereken enerji nereden gelir?',
      steps: [
        { title: '1. Kullanılanları yaz', body: 'Fotosentezde **karbondioksit ve su** kullanılır. Karbondioksit havadan, su topraktan alınır.' },
        { title: '2. Üretilenleri yaz', body: 'Fotosentez sonucunda **besin ve oksijen** üretilir. Oksijen havaya verilir.' },
        { title: '3. Enerjinin kaynağını belirle', body: 'Enerji **ışıktan** gelir. Serada bu ışık güneşten ya da lambalardan gelebilir.' },
        { title: '4. Işığı yakalayanı söyle', body: 'Işık enerjisini yaprakların kloroplastlarındaki **klorofil** soğurur.' },
        { title: '5. Sonucu yaz', body: 'Karbondioksit ve su kullanılır; besin ve oksijen üretilir; enerji ışıktan gelir.' },
      ],
      answer: 'Fotosentezde karbondioksit ve su kullanılır, besin ve oksijen üretilir; gereken enerji güneş ya da yapay ışıktan gelir.',
      takeaway: 'Kimyasal denklem yazmadan da fotosentezin tamamı dört sözcükle kurulabilir: karbondioksit, su, besin, oksijen.',
    },
    {
      title: 'Seviye 2 — Deney sonucunu yorumla',
      prompt:
        'Aynı su bitkisi eşit şiddette ama farklı renklerde ışıkla aydınlatılıyor ve bir dakikada çıkan kabarcıklar sayılıyor: kırmızı ışıkta 18, yeşil ışıkta 3, mavi ışıkta 16 kabarcık. Bu sonucu açıkla.',
      steps: [
        { title: '1. Değişkenleri ayır', body: 'Değiştirilen tek şey ışığın rengi; ışık şiddeti ve bitki aynı. Bağımlı değişken kabarcık sayısı, yani fotosentez hızı.' },
        { title: '2. Sonuçları sırala', body: 'En hızlı kırmızı, sonra mavi, en yavaş yeşil ışıkta.' },
        { title: '3. Klorofili düşün', body: 'Klorofil kırmızı ve mavi ışığı iyi soğurur; yeşil ışığı ise büyük ölçüde yansıtır.' },
        { title: '4. Nedeni bağla', body: 'Soğurulmayan ışık fotosentezde kullanılamaz. Bu yüzden yeşil ışıkta fotosentez çok yavaştır.' },
        { title: '5. Sonucu yaz', body: 'Fotosentez hızı ışığın rengine bağlıdır; kırmızı ve mavide hızlı, yeşilde yavaştır.' },
      ],
      answer: 'Klorofil kırmızı ve mavi ışığı iyi soğurup yeşil ışığı yansıttığı için fotosentez kırmızı ve mavide hızlı, yeşilde yavaştır.',
      takeaway: 'Yaprak yeşil görünür çünkü yeşil ışığı kullanmaz, geri yansıtır.',
    },
    {
      title: 'Seviye 3 — Gündüz ve gece',
      prompt:
        'Kapalı bir cam fanusun içine bir saksı bitkisi konuyor. Fanustaki oksijen miktarı gündüz ölçüldüğünde artıyor, gece ölçüldüğünde azalıyor. Bu durumu fotosentez ve solunumla açıkla.',
      steps: [
        { title: '1. Gündüzü incele', body: 'Gündüz ışık vardır; bitki hem fotosentez hem solunum yapar.' },
        { title: '2. Gündüz hangisi baskın?', body: 'Yeterli ışıkta fotosentez solunumdan hızlıdır. Üretilen oksijen harcanandan fazla olduğu için fanustaki oksijen **artar.**' },
        { title: '3. Geceyi incele', body: 'Gece ışık yoktur; fotosentez durur. Ama bitki **solunum yapmaya devam eder.**' },
        { title: '4. Gece ne olur?', body: 'Solunumda oksijen harcanır, karbondioksit üretilir. Fanustaki oksijen **azalır.**' },
        { title: '5. Yanılgıyı düzelt', body: 'Bu sonuç, bitkilerin yalnız gece solunum yaptığını değil, gece ve gündüz solunum yaptığını gösterir; gündüz yalnız fotosentez daha baskındır.' },
      ],
      answer:
        'Gündüz fotosentez solunumdan hızlı olduğu için oksijen artar; gece fotosentez durur ama solunum sürdüğü için oksijen azalır.',
      takeaway: 'Bir gaz miktarındaki değişim, iki olaydan hangisinin baskın olduğunu gösterir.',
    },
  ],

  dailyLife: {
    title: 'Fotosentez ve solunum hayatın neresinde?',
    body: 'İki olay da mutfaktan seraya, spordan iklime kadar günlük hayatın içindedir.',
    links: [
      'Seralarda lambalarla ve karbondioksit desteğiyle fotosentez hızlandırılarak verim artırılır.',
      'Ekmek hamuru, mayaların oksijensiz solunumunda oluşan karbondioksitle kabarır.',
      'Yoğurt ve turşu yapımı bakterilerin oksijensiz solunumuna dayanır.',
      'Yoğun egzersizden sonra hissedilen kas yorgunluğunun bir nedeni kısa süreli oksijensiz solunumdur.',
      'Ormanlar fotosentezle havadaki karbondioksiti kullanıp oksijen üretir; bu yüzden ormanların korunması önemlidir.',
    ],
  },

  questionClue: {
    concept: 'Fotosentez ve solunum sorusu',
    statement:
      'Soruda bir bitki deneyi, farklı renkte ya da şiddette ışık, bir gaz miktarının değişimi veya bir mutfak örneği varsa, ölçülen şey bu dersin ilişkileridir.',
    clues: [
      'Su bitkisinden çıkan kabarcıkların sayılması',
      'Farklı renkte ışıkların karşılaştırılması',
      'Kapalı bir ortamda oksijen ya da karbondioksit miktarının ölçülmesi',
      'Gündüz ve gece karşılaştırması',
      'Ekmek, yoğurt, kas yorgunluğu gibi günlük örnekler',
    ],
    reasoning:
      'Bu işaretler üç işlem ister: fotosentezde ve solunumda neyin kullanılıp üretildiğini bilmek, hız deneyinde değişkenleri ayırmak ve gaz miktarındaki değişimden hangi olayın baskın olduğunu çıkarmak.',
    boundary:
      'Bu ipuçlarını kimyasal denkleme ya da sayısal enerji hesabına çevirme; program bunlara girilmemesini ister. Ayrıca “bitkiler yalnız gece solunum yapar” yanılgısına düşme.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu üç kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Fotosentezde kullanılan ve üretilen maddelerin sorulması',
      'Bir fotosentez hızı deneyinde bağımsız değişkenin belirlenmesi',
      'Işık rengine ya da şiddetine göre hız karşılaştırması',
      'Kapalı ortamda gaz miktarı değişiminin yorumlanması',
      'Oksijenli ve oksijensiz solunumun karşılaştırılması',
      'Günlük bir olayın oksijensiz solunumla açıklanması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bitkiler gece solunum yapar mı? Gündüz yapar mı? Gündüz yaptıkları solunum neden fark edilmez?',
      hint: 'Gündüz iki olay birlikte oluyor.',
      answer:
        'Bitkiler **gece de gündüz de** solunum yapar. Gündüz buna ek olarak fotosentez de yaparlar. Yeterli ışıkta fotosentez solunumdan daha hızlı olduğu için bitkinin ürettiği oksijen, solunumda harcadığından fazladır; bu yüzden dışarıdan bakıldığında bitki yalnız oksijen veriyor gibi görünür ve solunum fark edilmez. Program bitkilerin gece ve gündüz solunum yaptığına değinilmesini açıkça ister.',
    },
    {
      prompt:
        'Yapraklar neden yeşil görünür ve bu, fotosentez hızı hakkında ne söyler?',
      hint: 'Gözümüze ulaşan ışık, yaprağın kullandığı ışık mı?',
      answer:
        'Yapraktaki klorofil yeşil ışığın büyük kısmını **soğurmaz, yansıtır.** Gözümüze ulaşan bu yansıyan ışık olduğu için yapraklar yeşil görünür. Soğurulmayan ışık fotosentezde kullanılamayacağı için fotosentez **yeşil ışıkta en yavaş**, kırmızı ve mor–mavi ışıkta en hızlıdır.',
    },
    {
      prompt:
        'Ekmek hamuru mayalandığında neden kabarır? Bu olayda hangi solunum türü gerçekleşir?',
      hint: 'Maya bir canlıdır ve enerjiye ihtiyaç duyar.',
      answer:
        'Hamurdaki mayalar **oksijensiz solunum** yaparak besindeki enerjinin bir kısmını serbest bırakır. Bu sırada **karbondioksit gazı** oluşur. Gaz hamurun içinde küçük boşluklar oluşturarak hamuru kabartır. Oksijensiz solunum oksijenli solunuma göre daha az enerji verir; ama mayalar için yeterlidir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey denklem değil; girdi, çıktı ve etken',
    body:
      'Kazanımların fiilleri yön gösteriyor: fotosentezin “önemini fark eder”, hızını etkileyen faktörlerle ilgili “çıkarımlarda bulunur”, solunumun “önemini belirtir”. Program iki olayın da kimyasal denklemine girilmemesini, solunumda enerji miktarlarının sayıyla verilmemesini ve ATP’nin yalnız adının anılmasını ister. Bu yüzden senden formül değil; neyin kullanılıp üretildiğini bilmen, bir hız deneyini yorumlaman ve günlük olayları doğru solunum türüyle eşleştirmen beklenir.',
    measures: [
      'Fotosentezde kullanılan ve üretilen maddeleri bilme',
      'Fotosentezin canlılar için önemini açıklayabilme',
      'Fotosentez hızını etkileyen beş etkeni yorumlayabilme',
      'Bir hız deneyinde değişkenleri ayırt edebilme',
      'Bitkilerin gece ve gündüz solunum yaptığını açıklayabilme',
      'Oksijenli ve oksijensiz solunumu karşılaştırabilme',
    ],
  },

  simulationTable: {
    title: 'Dört ayrı düzenekte su bitkisi deneyi',
    columns: ['Düzenek', 'Işık rengi', 'Işık şiddeti', 'Suyun sıcaklığı', 'Bir dakikada kabarcık'],
    rows: [
      ['1', 'Beyaz', 'Yüksek', '20 °C', '15'],
      ['2', 'Beyaz', 'Düşük', '20 °C', '6'],
      ['3', 'Yeşil', 'Yüksek', '20 °C', '3'],
      ['4', 'Beyaz', 'Yüksek', '30 °C', '19'],
    ],
    caption: 'Dört düzenekte de aynı büyüklükte, aynı türden bitki dalları kullanılmıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün deney kaydı',
    passage: `Bir öğrenci dört düzenekte su bitkisi deneyi yapıyor ve bir dakikada çıkan kabarcıkları sayıp yukarıdaki kaydı tutuyor.

Öğrenci, ışık şiddetinin fotosentez hızına etkisini göstermek istiyor.`,
    question: 'Öğrenci bu amaç için hangi iki düzeneği karşılaştırmalıdır?',
    options: [
      {
        text: '1 ve 2',
        explanation:
          'Doğru cevap. İki düzenekte ışık rengi (beyaz) ve sıcaklık (20 °C) aynı; değişen tek şey ışık şiddeti. Kabarcık sayısının 15’ten 6’ya düşmesi yalnız ışık şiddetinden kaynaklanır.',
      },
      {
        text: '1 ve 3',
        explanation:
          'Bu iki düzenekte ışık şiddeti aynı (yüksek), değişen ışığın rengidir. Bu karşılaştırma ışık şiddetinin değil, ışık renginin etkisini gösterir.',
      },
      {
        text: '1 ve 4',
        explanation:
          'Bu iki düzenekte ışık rengi ve şiddeti aynı, değişen suyun sıcaklığıdır. Bu karşılaştırma sıcaklığın etkisini gösterir.',
      },
      {
        text: '2 ve 3',
        explanation:
          'Bu iki düzenekte hem ışık şiddeti hem ışık rengi farklıdır. İki değişken birden değiştiği için sonucun nedeni belirlenemez.',
      },
      {
        text: '3 ve 4',
        explanation:
          'Bu iki düzenekte ışık rengi ve sıcaklık farklıdır; ışık şiddeti ise aynıdır. Bu karşılaştırma amaca uygun değildir.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru, amaçlanan değişkenin farklı, öbür bütün değişkenlerin aynı olduğu iki düzeneği bulmayı istiyor. Tablodaki üç sütunu (renk, şiddet, sıcaklık) satır satır karşılaştır.',
    critical_point:
      'Kritik nokta dördüncü düzenekteki yüksek kabarcık sayısıdır. Öğrenci en büyük farkı gösteren düzeneği seçme eğilimindedir; ama o fark ışık şiddetinden değil sıcaklıktan gelir. Doğru karşılaştırma farkın büyüklüğüne değil, değişkenlerin kontrolüne bakar.',
    takeaway: 'Bir etkenin etkisini göstermek için yalnız o etkenin farklı olduğu iki düzenek seçilir.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Fotosentezle ilgili aşağıdakilerden hangisi doğrudur?',
      options: [
        'Oksijen ve besin kullanılır, karbondioksit ve su üretilir',
        'Karbondioksit ve su kullanılır, besin ve oksijen üretilir',
        'Yalnız güneş ışığında gerçekleşir, yapay ışıkta gerçekleşmez',
        'Bütün canlılar fotosentez yapar',
      ],
      answer_index: 1,
      explanation:
        'Fotosentezde ışık enerjisiyle karbondioksit ve su kullanılır; besin ve oksijen üretilir. Birinci seçenek solunumu tarif eder. Fotosentez yapay ışıkta da gerçekleşebilir; program bunun vurgulanmasını ister. Fotosentezi yalnız üreticiler yapar; solunumu ise bütün canlılar yapar.',
    },
    {
      purpose: 'apply',
      question:
        'Eşit şiddette ışıkla yapılan bir deneyde fotosentez hızı hangi renk ışıkta en düşük olur?',
      options: [
        'Kırmızı',
        'Mavi',
        'Mor',
        'Yeşil',
      ],
      answer_index: 3,
      explanation:
        'Klorofil yeşil ışığın büyük kısmını soğurmaz, yansıtır. Soğurulmayan ışık fotosentezde kullanılamadığı için fotosentez yeşil ışıkta en yavaştır. Kırmızı ve mor–mavi ışık klorofil tarafından iyi soğurulur ve fotosentez bu renklerde hızlıdır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Bitkiler gündüz fotosentez, gece solunum yapar.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Bitkilerin gündüz de solunum yaptığını gözden kaçırmak',
        'Fotosentezin ışıkta gerçekleştiğini bilmemek',
        'Oksijensiz solunumu oksijenli solunumla karıştırmak',
        'ATP’nin yapısını yanlış bilmek',
      ],
      answer_index: 0,
      explanation:
        'Bitkiler gece de gündüz de solunum yapar; çünkü her an enerjiye ihtiyaç duyarlar. Gündüz buna ek olarak fotosentez yaparlar ve fotosentez daha baskın olduğu için solunum fark edilmez. Öğrenci fotosentezin ışıkta olduğunu doğru bilmiş, ama solunumun sürekliliğini gözden kaçırmıştır.',
    },
  ],

  summary: [
    'Fotosentezde ışık enerjisiyle karbondioksit ve su kullanılır; besin ve oksijen üretilir.',
    'Fotosentez kloroplastlarda gerçekleşir; ışığı klorofil soğurur.',
    'Fotosentez yapay ışıkta da gerçekleşebilir.',
    'Fotosentez yapan canlılar üreticidir ve bütün ekosistemin enerji kaynağıdır.',
    'Fotosentez hızını ışık şiddeti, karbondioksit miktarı, su miktarı, sıcaklık ve ışık rengi etkiler.',
    'Işık şiddeti ve karbondioksit arttıkça hız artar, sonra sabitlenir; sıcaklık belli bir değerden sonra hızı düşürür.',
    'Fotosentez kırmızı ve mor–mavi ışıkta en hızlı, yeşil ışıkta en yavaştır.',
    'Solunum, besindeki enerjinin serbest bırakılmasıdır; bütün canlılar solunum yapar.',
    'Bitkiler gece ve gündüz solunum yapar; gündüz fotosentez daha baskındır.',
    'Oksijenli solunum daha çok, oksijensiz solunum daha az enerji verir.',
    'Ekmek hamurunun kabarması ve yoğurt yapımı oksijensiz solunuma dayanır.',
    'Solunumla açığa çıkan enerji ATP adı verilen molekülde depolanır.',
    'Bu düzeyde fotosentezin ve solunumun kimyasal denklemi yazılmaz.',
  ],

  next: [
    'Madde Döngüleri ve Küresel İklim Değişikliği (F.8.6.3.1–F.8.6.3.3)',
    'Sürdürülebilir Kalkınma ve Geri Dönüşüm (F.8.6.4.1–F.8.6.4.5)',
    'Besin Zinciri, Besin Ağı ve Ekoloji Piramidi (tekrar için)',
  ],
})

export default lesson
