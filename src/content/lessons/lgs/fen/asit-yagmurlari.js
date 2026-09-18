import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.4 Madde ve Endüstri · 4. ders
 * Kazanım : F.8.4.4.7
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.4.4.7 → "Asit yağmurlarının oluşum sebepleri ve sonuçlarına
 *               değinilir."
 *
 * KAPSAM KARARI
 * Kazanımın fiili "ÇÖZÜM ÖNERİSİ SUNAR". Bu yüzden dersin ağırlık merkezi
 * bilgi aktarımı değil, ÇÖZÜM ÜRETME becerisidir: neden–sonuç zinciri
 * kurulur, sonra zincirin hangi halkasına müdahale edilebileceği
 * tartışılır. Bu, kazanımı karşılamanın tek dürüst yoludur.
 *
 * Kimyasal denklem ve bileşik formülleri (SO₂, NOx gibi) 8. sınıf
 * düzeyinde istenmediği için YAZILMADI; kaynak "fosil yakıtların
 * yanmasıyla havaya karışan gazlar" düzeyinde tutuldu.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-asit-yagmurlari',
  topic: 'Madde ve Endüstri',
  order: 4,
  title: 'Asit Yağmurları: Zinciri Nerede Kırabiliriz?',
  subtitle:
    'Bir çevre sorununu ezberlemek kolaydır. Zor olan, çözümün zincirin hangi halkasına yerleşeceğini görmektir.',
  minutes: 40,
  kazanimlar: ['F.8.4.4.7'],
  prerequisites: [
    { topic: 'Asitler ve Bazlar: Özellik, Ayraç, pH ve Güvenlik', why: 'pH ölçeği ve asitlerin aşındırıcı etkisi orada kuruldu.' },
    { topic: 'Fiziksel ve Kimyasal Değişim: Kimlik Değişti mi?', why: 'Yapılardaki aşınmanın neden kimyasal bir olay olduğunu açıklar.' },
  ],
  outcomes: [
    'Asit yağmurunun ne olduğunu pH üzerinden tanımlayabileceksin.',
    'Oluşum zincirini adım adım kurabileceksin.',
    'Çevreye verdiği zararları dört başlıkta sayabileceksin.',
    'Zincirin hangi halkasına müdahale edilebileceğini gösterebileceksin.',
    'Bir çözüm önerisini gerekçesiyle birlikte yazabileceksin.',
  ],

  opening: {
    title: 'Aynı heykel, elli yıl arayla',
    lead: 'Bir tarihî yapının yüz yıl önceki fotoğrafıyla bugünkü hâli yan yana konduğunda yüzeydeki ayrıntıların silindiği görülür. Yağmur bunu nasıl yapar?',
    body: `Taş, sert bir maddedir. Yüzyıllarca ayakta kalabilir. Öyleyse bir tarihî yapının yüzeyindeki ayrıntıların zamanla silinmesini neye bağlayacağız?

Sıradan yağmura değil. Çünkü sıradan yağmur suyu taşı bu hızda aşındırmaz.

Sorumlu olan şey **asit yağmurudur.**

Geçen derste asitlerin bazı yapı taşları üzerinde bozulmaya yol açabildiğini gördük. Şimdi bu etkinin doğada nasıl bir sorun hâline geldiğini göreceğiz.

Önce bir şeyi netleştirelim: **yağmur suyu zaten hafif asidiktir.** Havadaki bazı gazlar suda çözündüğü için yağmurun pH değeri 7’nin biraz altındadır. Bu normaldir ve zararlı değildir.

Sorun, yağmurun pH değerinin **normalden belirgin biçimde düşmesidir.** Bu durumda yağan yağmura **asit yağmuru** denir.

Peki pH neden düşer? Kısaca: **havaya karışan bazı gazlar** yüzünden. Bu gazlar suda çözündüğünde yağmurun asitlik durumu artar.

Şimdi bu dersin en önemli özelliğine gelelim.

Kazanımın fiili “**çözüm önerileri sunar**”. Yani senden istenen şey sorunu ezberlemek değil; **çözüm üretmek.**

Bu yüzden ders boyunca şöyle çalışacağız: önce oluşum zincirini kuracağız, sonra zincirin her halkasına bakıp soracağız — **“Buraya müdahale edebilir miyiz?”**

Bu, aslında bir düşünme alışkanlığıdır ve yalnız bu konuda değil, bütün çevre sorunlarında işe yarar: **bir sorunu çözmek için önce zincirini kur, sonra kırabileceğin halkayı bul.**`,
  },

  concepts: [
    {
      term: 'Asit yağmuru',
      body: 'pH değeri normal yağmur suyundan belirgin biçimde düşük olan yağıştır. Yağmur, kar ve dolu biçiminde olabilir.',
    },
    {
      term: 'Fosil yakıt',
      body: 'Kömür, petrol ve doğal gaz gibi yakıtlardır. Yanmaları sırasında havaya bazı gazlar karışır.',
    },
    {
      term: 'Hava kirliliği',
      body: 'Havaya karışan gaz ve parçacıkların doğal bileşimi bozmasıdır. Asit yağmurunun başlangıç noktasıdır.',
    },
    {
      term: 'Aşınma (korozyon)',
      body: 'Asidik etkiyle metal ve taş yüzeylerde oluşan bozulmadır. Bu bir **kimyasal değişimdir**; yüzeyde yeni maddeler oluşur.',
    },
    {
      term: 'Yenilenebilir enerji kaynağı',
      body: 'Güneş, rüzgâr, jeotermal ve su gücü gibi, kullanıldıkça tükenmeyen kaynaklardır. Fosil yakıt kullanımını azaltmanın başlıca yoludur.',
    },
    {
      term: 'Filtre',
      body: 'Baca gazlarındaki zararlı maddeleri tutarak havaya karışmasını azaltan düzenektir. Zincirin ikinci halkasına yapılan müdahaledir.',
    },
  ],

  why: {
    question: 'Neden sorunu değil de zinciri öğreniyoruz?',
    body: `Çünkü kazanım çözüm istiyor; çözüm ise ancak zincir kurulduğunda üretilebilir.

Şöyle düşün. Birine “asit yağmuru kötüdür” dersen, o kişi sorunu öğrenmiş olur ama elinde hiçbir araç olmaz. Oysa zinciri kurarsan, çözümün nereye yerleşeceği kendiliğinden görünür.

Asit yağmurunun zinciri şudur:

**Fosil yakıt yakılır → havaya gazlar karışır → gazlar su damlacıklarında çözünür → yağmurun pH değeri düşer → asidik yağış yeryüzüne iner → toprak, su, canlılar ve yapılar etkilenir.**

Altı halka var. Şimdi her halkaya tek tek bakalım ve soralım: **buraya müdahale edebilir miyiz?**

**1. halka — Fosil yakıt yakılması.** Evet, müdahale edilebilir. Fosil yakıt kullanımı azaltılabilir; yerine yenilenebilir enerji kaynakları kullanılabilir. Bu, zincirin **en başına** yapılan müdahaledir ve en etkilisidir.

**2. halka — Gazların havaya karışması.** Evet, müdahale edilebilir. Fabrika ve araç bacalarına filtre takılarak havaya karışan madde miktarı azaltılabilir.

**3. halka — Gazların suda çözünmesi.** Hayır, müdahale edemeyiz. Bu doğal bir olaydır; gaz havadaysa suda çözünür.

**4. halka — pH’ın düşmesi.** Hayır, bu da bir sonuçtur. Gaz çözündüyse pH düşer.

**5. halka — Yağışın inmesi.** Hayır, yağışı engelleyemeyiz.

**6. halka — Etkilenme.** Kısmen. Yapılar koruyucu maddelerle kaplanabilir, topraktaki asitlik durumu düzenlenebilir. Ama bu bir **önleme** değil, bir **onarım**dır.

Şimdi çok önemli bir sonuca vardık:

**Gerçek çözüm zincirin başındadır.** İlk iki halkaya müdahale edersen sorun oluşmadan engellenir. Son halkaya müdahale edersen yalnız zararı azaltırsın.

Bu ayrım, kazanımın istediği “önleme” fikrinin özüdür: önlemek, sorunu kaynağında durdurmaktır.

Ve bu düşünme biçimi bu konuya özel değildir. Küresel iklim değişikliği, su kirliliği, atık sorunu — hepsinde aynı soru işe yarar: **zincirin hangi halkasını kırabilirim?**`,
  },

  mechanism: {
    title: 'Asit yağmuru nasıl oluşuyor?',
    lead: 'Altı halkalı bir zincir. Her halka bir öncekinin sonucudur.',
    intro:
      'Aşağıdaki zincir asit yağmurunun oluşumunu gösterir. Çözüm önerilerini bu zincirin üzerine kuracağız.',
    steps: [
      {
        title: '1. Fosil yakıtlar yakılır',
        body: 'Isınmada, sanayide, elektrik üretiminde ve ulaşımda kömür, petrol ve doğal gaz gibi yakıtlar kullanılır.',
      },
      {
        title: '2. Havaya bazı gazlar karışır',
        body: 'Yanma sırasında açığa çıkan bazı gazlar bacalardan ve egzozlardan havaya karışır. Bu, hava kirliliğinin başlangıcıdır.',
      },
      {
        title: '3. Gazlar su damlacıklarında çözünür',
        body: 'Havadaki su damlacıkları bu gazları çözer. Bu doğal bir olaydır ve engellenemez.',
      },
      {
        title: '4. Yağışın pH değeri düşer',
        body: 'Gazlar çözündükçe damlacıkların asitlik durumu artar; yağışın pH değeri normalin altına iner.',
      },
      {
        title: '5. Asidik yağış yeryüzüne iner',
        body: 'Yağmur, kar ya da dolu biçiminde yeryüzüne ulaşır. Rüzgârla taşındığı için kaynağından uzak bölgelere de düşebilir.',
      },
      {
        title: '6. Toprak, su, canlılar ve yapılar etkilenir',
        body: 'Toprağın ve suların asitlik durumu değişir; bitkiler ve sucul canlılar olumsuz etkilenir; metal ve taş yapılarda aşınma görülür.',
      },
    ],
    takeaway:
      'Zincirin ilk iki halkası insan eliyle oluşur; bu yüzden çözüm de oraya yerleşir. Sonraki halkalar doğal sonuçlardır.',
  },

  causeEffect: {
    title: 'Sebep, gelişme, sonuç ve sonraki etki',
    intro: 'Aynı olayı dört aşamada okuduğunda çözümün yerini daha net görürsün.',
    steps: [
      { title: 'Sebep', body: 'Fosil yakıtların yoğun biçimde kullanılması ve baca gazlarının yeterince filtrelenmemesi.' },
      { title: 'Gelişme', body: 'Havaya karışan gazlar su damlacıklarında çözünür ve yağışın pH değeri düşer.' },
      { title: 'Sonuç', body: 'Asidik yağış toprağa, göllere, ormanlara ve yapılara ulaşır; aşınma ve bozulma başlar.' },
      { title: 'Sonraki etki', body: 'Toprak verimi düşer, sucul canlıların yaşam koşulları bozulur, tarihî yapılar zarar görür ve onarım maliyetleri artar.' },
    ],
    inference:
      'Zincirin başı insan kaynaklıdır; bu yüzden sorun da çözüm de insan kararlarına bağlıdır. “Doğal bir felaket” değil, yönetilebilir bir sorundur.',
  },

  comparison: {
    title: 'Önleme mi, onarım mı?',
    columns: ['Önleyici çözümler', 'Onarıcı çözümler'],
    rows: [
      { label: 'Zincirdeki yeri', values: ['1. ve 2. halka', '6. halka'] },
      { label: 'Ne yapar?', values: ['Sorunun oluşmasını engeller', 'Oluşmuş zararı azaltır'] },
      { label: 'Örnek', values: ['Yenilenebilir enerjiye geçmek, filtre kullanmak', 'Yapıları koruyucu maddeyle kaplamak, toprağı düzenlemek'] },
      { label: 'Etki alanı', values: ['Geniş — kaynağı durdurur', 'Dar — belirli bir yeri korur'] },
      { label: 'Süreklilik', values: ['Kalıcı çözüm üretir', 'Tekrarlanması gerekir'] },
      { label: 'Kazanımın istediği', values: ['**Önleme** — kazanımın fiili budur', 'Tamamlayıcıdır'] },
    ],
    insight:
      'Son satır bu dersin ölçüsüdür: kazanım “önlenmesine yönelik çözüm” istiyor. Yalnız onarım öneren bir cevap kazanımı tam karşılamaz.',
  },

  traps: [
    {
      title: 'Normal yağmurun nötr olduğunu sanmak',
      wrong: 'Normal yağmur suyunun pH değeri 7’dir; 7’nin altına düşmesi asit yağmurudur.',
      right: 'Normal yağmur suyu zaten **hafif asidiktir**; pH değeri 7’nin biraz altındadır. Asit yağmurundan söz edebilmek için pH’ın normalin **belirgin biçimde** altına inmesi gerekir.',
      body: 'Bu ayrım önemlidir; çünkü “7’nin altı asit yağmurudur” demek, her yağmuru asit yağmuru saymak anlamına gelir. Ölçüt normalden sapmadır.',
    },
    {
      title: 'Asit yağmurunu yalnız kaynağın yakınında sanmak',
      wrong: 'Asit yağmuru yalnız fabrikaların bulunduğu bölgelere yağar.',
      right: 'Havaya karışan gazlar **rüzgârla taşınır.** Bu yüzden asidik yağış, kaynağından çok uzak bölgelere de düşebilir.',
      body: 'Bu özellik sorunu uluslararası bir konu hâline getirir: bir bölgede oluşan kirlilik başka bir bölgeye yağabilir. Çözümün de ortak olması bu yüzden gerekir.',
    },
    {
      title: 'Yapıları kaplamayı “önleme” saymak',
      wrong: 'Tarihî yapıları koruyucu maddeyle kaplamak asit yağmurunu önler.',
      right: 'Kaplama bir **onarıcı/koruyucu** çözümdür; asit yağmurunun oluşmasını engellemez, yalnız o yapıya verdiği zararı azaltır.',
      body: 'Kazanım “önlenmesine yönelik çözüm” istiyor. Önleyici çözümler zincirin başındadır: fosil yakıt kullanımını azaltmak ve filtre kullanmak.',
    },
    {
      title: 'Aşınmayı fiziksel değişim sanmak',
      wrong: 'Asit yağmurunun yapı yüzeyinde yaptığı aşınma bir fiziksel değişimdir.',
      right: 'Aşınma bir **kimyasal değişimdir**: yüzeydeki madde asitle etkileşime girer ve yeni maddeler oluşur.',
      body: 'Geçen dersin ölçütünü uygula: madde hâlâ aynı madde mi? Aşınmış yüzeydeki madde başlangıçtakinden farklıdır; öyleyse kimyasal bir değişim gerçekleşmiştir.',
    },
  ],

  variables: {
    title: 'Gözlemle göster: asidik su yüzeyi etkiler mi?',
    lead:
      'Asit yağmurunun etkisini sınıfta güvenli bir modelle gözlemleyebiliriz. Kullanılan madde yalnız sirkedir.',
    question: 'Suyun asitlik durumu değiştirildiğinde tebeşir üzerindeki etki değişir mi?',
    independent: {
      label: 'Sıvının asitlik durumu',
      note: 'Ben seçiyorum: saf su / sirkeli su',
    },
    setup: {
      label: 'Eşit büyüklükte tebeşir parçaları bulunan kaplar',
      note: 'Parçalar sıvıya tamamen daldırılır',
    },
    dependent: {
      label: 'Tebeşirdeki gözlenen değişim',
      note: 'Ölçtüğüm: kütle kaybı ve yüzeydeki bozulma',
    },
    controlled: [
      'Tebeşir parçalarının büyüklüğü ve kütlesi',
      'Sıvı miktarı',
      'Bekleme süresi',
      'Ortam sıcaklığı',
    ],
    caption:
      'Tebeşir ve süre bilerek sabit tutulur. Böylece gözlenen farkın tek olası nedeni sıvının asitlik durumu olur.',
  },

  experiment: {
    title: 'Asit yağmuru modeli',
    intro:
      'Bu etkinlik öğretmen gözetiminde yapılır. Yalnız mutfakta bulunan sirke kullanılır; güçlü asitlerle çalışılmaz.',
    steps: [
      { title: '1. İki eşit tebeşir parçası hazırla', body: 'Parçaların büyüklüğü ve kütlesi eşit olmalıdır. Kütleler tartılıp kaydedilir.' },
      { title: '2. İki kaba eşit sıvı koy', body: 'Birinci kaba saf su, ikinci kaba sirkeli su konur. Sıvı miktarları eşit tutulur.' },
      { title: '3. Tebeşirleri daldır', body: 'Her kaba bir tebeşir parçası konur ve tamamen sıvıya daldırılır.' },
      { title: '4. Aynı süre bekle', body: 'İki kap da aynı süre boyunca aynı ortamda bekletilir. Süre bir kontrol değişkenidir.' },
      { title: '5. Gözle ve kaydet', body: 'Yüzeydeki değişim, kabarcıklanma ve parçanın durumu düzenli aralıklarla kaydedilir.' },
      { title: '6. Kütleleri karşılaştır', body: 'Süre sonunda parçalar çıkarılıp kurutulur ve yeniden tartılır. Kütle kayıpları karşılaştırılır.' },
    ],
    takeaway:
      'Model, asit yağmurunun yapılar üzerindeki etkisini küçük ölçekte gösterir: asidik ortamda bozulma belirgin biçimde artar.',
  },

  dataTable: {
    title: 'Gözlem kaydı: iki kap, aynı süre',
    columns: ['Kap', 'Sıvı', 'Başlangıç kütlesi', 'Süre sonu kütlesi', 'Gözlenen'],
    rows: [
      ['1', 'Saf su', '10,0 g', '9,9 g', 'Belirgin bir değişim yok'],
      ['2', 'Sirkeli su', '10,0 g', '8,4 g', 'Kabarcıklanma, yüzeyde bozulma'],
    ],
    caption:
      'İki kapta da tebeşir, miktar ve süre aynı tutulmuştur. Kütle kaybındaki fark yalnız sıvının asitlik durumundan gelir. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-asit-yagmuru-zararlar',
      title: 'Çevreye verdiği zararlar',
      lead: 'Dört başlık: toprak, su, canlılar, yapılar. Program asit yağmurlarının sonuçlarına değinilmesini ister.',
      blocks: [
        {
          id: 'lgs-fen-asit-yagmuru-zararlar-anlatim',
          type: 'prose',
          body: `Asit yağmurunun zararlarını dört başlıkta toplayabiliriz. Dördünü de aynı zincirin son halkası olarak düşün.

**1. Toprağa verdiği zarar.** Asidik yağış toprağın asitlik durumunu değiştirir. Toprakta bitkilerin ihtiyaç duyduğu maddelerin bulunabilirliği bozulur. Sonuçta bitki gelişimi olumsuz etkilenir ve tarımsal verim düşer.

**2. Sulara verdiği zarar.** Göllere ve akarsulara ulaşan asidik yağış, suyun pH değerini düşürür. Sucul canlıların çoğu belirli bir pH aralığında yaşayabilir; bu aralık dışına çıkıldığında yaşam koşulları bozulur. Özellikle balık ve küçük sucul canlılar etkilenir.

**3. Canlılara verdiği zarar.** Ormanlarda ağaçların yaprakları zarar görebilir; bu, ağacın besin üretimini etkiler. Toprak ve su üzerinden besin zincirinin tamamı etkilenebilir. Ayrıca asit yağmuruna yol açan hava kirliliği insan sağlığı için de risk oluşturur; solunum yolu rahatsızlıkları artabilir.

**4. Yapılara verdiği zarar.** Metal yapılarda aşınma, taş ve mermer yapılarda yüzey bozulması görülür. Tarihî yapılar ve heykeller bu etkiye karşı özellikle savunmasızdır; çünkü yüzeydeki ince ayrıntılar aşınmayla kalıcı olarak kaybolur. Bu, yalnız bir maddi kayıp değil, **kültürel bir kayıptır**: yerine konamaz.

Şimdi bu dört başlığın ortak bir yanına dikkat çekelim.

Dördü de **kaynağından uzakta** ortaya çıkabilir. Havaya karışan gazlar rüzgârla taşındığı için asidik yağış, kirliliğin oluştuğu bölgeden yüzlerce kilometre uzağa düşebilir.

Bu özellik sorunu iki açıdan zorlaştırır:

- **Sorumluluk dağılır.** Zararı gören bölge, kirliliği üreten bölge olmayabilir.
- **Çözüm ortaklık gerektirir.** Tek bir bölgenin aldığı önlem yeterli olmayabilir.

Bu yüzden asit yağmuru, çözümü yalnız yerel değil **ortak** olan bir sorundur. Bir sonraki bölümde çözüm önerilerini bu çerçevede kuracağız.

*Kapsam notu: bu düzeyde gazların adlarını ve formüllerini bilmen istenmez. Program “oluşum sebepleri ve sonuçlarına değinilir” diyor; senden istenen, zinciri ve zararları anlatabilmek.*`,
        },
        {
          id: 'lgs-fen-asit-yagmuru-zararlar-tablo',
          type: 'table',
          interactive: true,
          title: 'Dört alan, dört zarar',
          columns: ['Etkilenen alan', 'Ne olur?', 'Sonucu ne olur?'],
          rows: [
            ['Toprak', 'Toprağın asitlik durumu değişir', 'Bitki gelişimi ve tarımsal verim düşer'],
            ['Su kaynakları', 'Göl ve akarsuların pH’ı düşer', 'Sucul canlıların yaşam koşulları bozulur'],
            ['Canlılar', 'Yapraklar zarar görür, besin zinciri etkilenir', 'Ormanlar zayıflar, tür çeşitliliği azalır'],
            ['Yapılar', 'Metal ve taş yüzeylerde aşınma olur', 'Tarihî yapılar kalıcı biçimde zarar görür'],
            ['İnsan sağlığı', 'Hava kirliliği solunum yollarını etkiler', 'Solunum yolu rahatsızlıkları artabilir'],
          ],
          caption:
            'Son satır zincirin başına aittir: asit yağmuruna yol açan hava kirliliği, yağmur hiç yağmadan da insan sağlığını etkiler.',
        },
        {
          id: 'lgs-fen-asit-yagmuru-zararlar-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda zararlar genellikle bir metin içinde verilir ve “aşağıdakilerden hangisi çıkarılamaz?” diye sorulur. Bu tür sorularda metinde **yazmayan** seçeneği ararsın; kendi bilgini metnin önüne geçirme.',
        },
      ],
    },

    {
      id: 'lgs-fen-asit-yagmuru-cozum',
      title: 'Çözüm önerileri: zinciri nerede kıracağız?',
      lead: 'Kazanımın asıl istediği bölüm burası. Her öneri bir halkaya yerleşir.',
      blocks: [
        {
          id: 'lgs-fen-asit-yagmuru-cozum-anlatim',
          type: 'prose',
          body: `Şimdi zincire geri dönelim ve her halkaya bir çözüm yerleştirelim.

**Zincirin 1. halkası — Fosil yakıt kullanımı**

Buraya yerleşen çözümler en etkili olanlardır; çünkü sorunu kaynağında durdururlar.

- **Yenilenebilir enerji kaynaklarına yönelmek.** Güneş, rüzgâr, jeotermal ve su gücü kullanıldığında fosil yakıt yakılması azalır.
- **Enerjiyi tasarruflu kullanmak.** Daha az enerji tüketmek, daha az yakıt yakılması demektir. Evde ışıkları gereksiz yakmamak bile bu zincire dokunur.
- **Toplu taşımayı tercih etmek.** Araç sayısı azaldıkça egzozdan havaya karışan madde miktarı azalır.
- **Yürüyerek ya da bisikletle gidilebilecek mesafelerde araç kullanmamak.**
- **Yalıtım yapmak.** İyi yalıtılmış bir bina ısınmak için daha az yakıt harcar.

**Zincirin 2. halkası — Gazların havaya karışması**

Buraya yerleşen çözümler kaynağı durdurmaz ama havaya ulaşan miktarı azaltır.

- **Fabrika bacalarına filtre takmak.**
- **Araçlarda egzoz denetimlerini düzenli yapmak.**
- **Kaliteli yakıt kullanmak.**
- **Sanayi tesislerinin denetlenmesi ve yasal sınırların uygulanması.**

**Zincirin son halkası — Etkilenen alanlar**

Buradaki çözümler **önleyici değil, koruyucudur.**

- Tarihî yapıları koruyucu maddelerle kaplamak.
- Toprağın asitlik durumunu düzenlemek.
- Etkilenen göllerde iyileştirme çalışmaları yapmak.

Şimdi kritik ayrımı bir kez daha vurgulayalım:

**Kazanım “önlenmesine yönelik çözüm” istiyor.** Öyleyse iyi bir cevap ağırlığını **ilk iki halkaya** verir. Yalnız koruyucu çözümler sıralayan bir cevap, sorunun oluşmasını engellemediği için kazanımı tam karşılamaz.

Peki bireysel çözümler işe yarar mı? Bu, sık sorulan ve önemli bir sorudur.

Tek bir kişinin ışığı söndürmesi ölçülebilir bir fark yaratmaz. Ama zincirin mantığını düşün: enerji talebi azalırsa üretim azalır, üretim azalırsa yakılan yakıt azalır. Bireysel davranışlar **toplandığında** zincirin ilk halkasına dokunur.

Bu yüzden doğru ifade şudur: bireysel önlemler tek başına yeterli değildir, ama zincirin başına dokundukları için gereklidir. Kalıcı çözüm, bireysel önlemlerle birlikte **enerji politikaları ve denetim** gerektirir.

Son olarak bir çözüm önerisinin nasıl yazılacağını gösterelim. İyi bir öneri üç parçalıdır:

1. **Öneri:** Ne yapılmalı?
2. **Zincirdeki yeri:** Hangi halkaya dokunuyor?
3. **Gerekçe:** Neden işe yarar?

Örnek: *“Fabrika bacalarına filtre takılmalıdır (öneri). Bu, gazların havaya karışmasını azaltır (zincirdeki yeri). Havaya karışan madde azalırsa yağışta çözünen madde de azalır ve yağmurun pH’ı normale yakın kalır (gerekçe).”*

Bu üç parçalı yapı, kazanımın istediği “çözüm önerisi sunma” becerisinin tam karşılığıdır.`,
        },
        {
          id: 'lgs-fen-asit-yagmuru-cozum-tablo',
          type: 'table',
          interactive: true,
          title: 'Öneriyi zincirdeki yerine yerleştir',
          columns: ['Çözüm önerisi', 'Zincirdeki halka', 'Türü', 'Etkisi'],
          rows: [
            ['Yenilenebilir enerjiye yönelmek', '1 — yakıt kullanımı', 'Önleyici', 'Kaynağı azaltır'],
            ['Enerji tasarrufu yapmak', '1 — yakıt kullanımı', 'Önleyici', 'Talebi azaltır'],
            ['Toplu taşıma kullanmak', '1 — yakıt kullanımı', 'Önleyici', 'Araç kaynaklı salımı azaltır'],
            ['Bacalara filtre takmak', '2 — havaya karışma', 'Önleyici', 'Havaya ulaşan miktarı azaltır'],
            ['Egzoz denetimi yapmak', '2 — havaya karışma', 'Önleyici', 'Denetimle sınırı uygulatır'],
            ['Tarihî yapıyı kaplamak', '6 — etkilenme', 'Koruyucu', 'Yalnız o yapıyı korur'],
          ],
          caption:
            'Son satırın türü ötekilerden farklı: koruyucu çözümler zararı azaltır ama sorunun oluşmasını engellemez.',
        },
        {
          id: 'lgs-fen-asit-yagmuru-cozum-hafiza',
          type: 'memory',
          title: 'Çözüm önerisinin üç parçası',
          body:
            '**Ne yapılmalı → zincirin hangi halkasına dokunuyor → neden işe yarar.** Üç parçayı yazan cevap tamdır.',
        },
        {
          id: 'lgs-fen-asit-yagmuru-cozum-baglanti',
          type: 'connection',
          title: 'Aynı düşünme biçimi başka nerelerde işe yarar?',
          body:
            'Zincir kurup kırılacak halkayı bulmak, bütün çevre sorunlarında kullanabileceğin bir yöntemdir.',
          links: [
            'Küresel iklim değişikliğinde zincirin başı yine fosil yakıt kullanımıdır.',
            'Su kirliliğinde zincir, atıkların arıtılmadan doğaya bırakılmasıyla başlar.',
            'Katı atık sorununda çözüm, atığın oluşmasını azaltmakla başlar.',
            'Hava kirliliğinde önleyici çözümler yine kaynağa, koruyucu çözümler sonuca yerleşir.',
            'Sürdürülebilir kalkınma konusunda bu ayrımı yeniden kullanacaksın.',
          ],
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Öneriyi sınıflandır',
      prompt:
        'Aşağıdaki iki öneriden hangisi asit yağmurunun **oluşmasını önlemeye** yöneliktir? (a) Tarihî heykelleri koruyucu maddeyle kaplamak, (b) Fabrika bacalarına filtre takmak.',
      steps: [
        { title: '1. Zinciri hatırla', body: 'Zincir: yakıt yakılması → gazların havaya karışması → çözünme → pH düşüşü → yağış → etkilenme.' },
        { title: '2. (a) şıkkını yerleştir', body: 'Heykeli kaplamak, yağış zaten oluştuktan sonra devreye girer. Zincirin **son halkasına** dokunur.' },
        { title: '3. (a) için karar ver', body: 'Bu bir **koruyucu** çözümdür; asit yağmurunun oluşmasını engellemez, yalnız o yapıya verdiği zararı azaltır.' },
        { title: '4. (b) şıkkını yerleştir', body: 'Filtre, gazların havaya karışmasını azaltır. Zincirin **ikinci halkasına** dokunur.' },
        { title: '5. (b) için karar ver', body: 'Bu bir **önleyici** çözümdür; havaya ulaşan madde azalırsa yağışta çözünen madde de azalır.' },
        { title: '6. Soruyu cevapla', body: 'Oluşmayı önlemeye yönelik olan **(b) şıkkıdır.**' },
      ],
      answer: '(b) Fabrika bacalarına filtre takmak; çünkü zincirin ikinci halkasına dokunur ve gazların havaya karışmasını azaltır.',
      takeaway:
        'Bir öneriyi değerlendirmenin yolu, onu zincirde bir halkaya yerleştirmektir.',
    },
    {
      title: 'Seviye 2 — Gözlemi yoruma çevir',
      prompt:
        'Bir öğrenci eşit büyüklükte iki tebeşir parçasını, biri saf su biri sirkeli su olan kaplara koyuyor ve aynı süre bekletiyor. Sirkeli sudaki parçanın kütlesi belirgin biçimde azalıyor. Bu gözlem asit yağmuru hakkında ne söyler?',
      steps: [
        { title: '1. Değişkenleri ayır', body: 'Tebeşir, miktar ve süre sabit tutulmuş; değişen tek şey sıvının asitlik durumu.' },
        { title: '2. Gözlemi yaz', body: 'Asidik sıvıdaki parçada belirgin kütle kaybı ve yüzey bozulması görülmüş.' },
        { title: '3. Nedeni belirle', body: 'Farkın tek olası nedeni sıvının asitlik durumudur; çünkü öbür değişkenler sabittir.' },
        { title: '4. Değişimin türünü adlandır', body: 'Yüzeydeki madde asitle etkileşime girip farklı maddelere dönüşmüştür; bu bir **kimyasal değişimdir.**' },
        { title: '5. Modeli gerçeğe bağla', body: 'Asit yağmuru da taş ve mermer yapıların yüzeyinde benzer bir bozulmaya yol açar.' },
        { title: '6. Sonucu yaz', body: 'Gözlem, asidik suyun taş benzeri yüzeyleri aşındırdığını ve asit yağmurunun yapılara neden zarar verdiğini gösterir.' },
      ],
      answer:
        'Asidik suyun taş benzeri yüzeyleri aşındırdığını gösterir; asit yağmurunun tarihî yapılara verdiği zarar da aynı nedenle oluşur.',
      takeaway:
        'Bir model deneyi, büyük ölçekli bir olayı küçük ölçekte gözlenebilir kılar. Ama sonucu yorumlarken modelin sınırını da hatırla.',
    },
    {
      title: 'Seviye 3 — Üç parçalı çözüm önerisi yaz',
      prompt:
        'Bir şehirde kışın hava kirliliği artıyor ve çevredeki göllerde suyun asitlik durumunun değiştiği ölçülüyor. Bu şehir için önleyici bir çözüm önerisi yaz ve öneriyi üç parçalı olarak kur.',
      steps: [
        { title: '1. Sorunun kaynağını düşün', body: 'Kışın kirliliğin artması, ısınma amaçlı yakıt kullanımının arttığına işaret eder. Kaynak zincirin ilk halkasındadır.' },
        { title: '2. Halkayı seç', body: 'Zincirin 1. halkasına (yakıt kullanımı) müdahale etmek en etkili yoldur; çünkü sorunu kaynağında durdurur.' },
        { title: '3. Öneriyi yaz', body: '**Öneri:** Binalarda yalıtım yaygınlaştırılmalı ve ısınmada daha az kirletici kaynaklara geçilmelidir.' },
        { title: '4. Zincirdeki yerini belirt', body: '**Zincirdeki yeri:** Bu öneri 1. halkaya, yani yakıt kullanımına dokunur.' },
        { title: '5. Gerekçeyi yaz', body: '**Gerekçe:** Yalıtılmış bir bina ısınmak için daha az yakıt harcar; yakıt azalınca havaya karışan madde azalır, yağışta çözünen madde de azalır ve göllerin pH’ı normale yakın kalır.' },
        { title: '6. Öneriyi tamamla', body: 'İkinci bir öneri olarak bacalara filtre takılması (2. halka) eklenebilir. İki öneri birlikte hem kaynağı hem salımı azaltır.' },
      ],
      answer:
        'Binalarda yalıtım yaygınlaştırılmalı ve ısınmada daha az kirletici kaynaklara geçilmelidir. Bu öneri zincirin ilk halkasına dokunur; yakıt tüketimi azaldığında havaya karışan madde ve dolayısıyla yağıştaki asitlik azalır.',
      takeaway:
        'İyi bir çözüm önerisi üç parçalıdır: ne yapılmalı, hangi halkaya dokunuyor, neden işe yarar.',
    },
  ],

  dailyLife: {
    title: 'Sen ne yapabilirsin?',
    body:
      'Aşağıdaki davranışların hepsi zincirin ilk halkasına, yani yakıt kullanımına dokunur.',
    links: [
      'Kullanılmayan ışıkları ve elektrikli aletleri kapatmak enerji talebini azaltır.',
      'Kısa mesafelerde yürümek ya da bisiklet kullanmak araç kaynaklı kirliliği azaltır.',
      'Toplu taşımayı tercih etmek kişi başına düşen salımı düşürür.',
      'Evde yalıtıma özen göstermek ısınma için harcanan yakıtı azaltır.',
      'Geri dönüşüme katkı vermek üretimde harcanan enerjiyi azaltır.',
      'Çevrendeki insanlara bu zinciri anlatmak, etkiyi çoğaltan en kolay yoldur.',
    ],
  },

  questionClue: {
    concept: 'Asit yağmuru sorusu',
    statement:
      'Soruda bir çevre metni, bir gözlem kaydı ya da çözüm önerileri listesi varsa, ölçülen şey zincir kurma ve öneri değerlendirmedir.',
    clues: [
      'Fosil yakıt, baca, egzoz gibi kaynakların anlatılması',
      'Yağışın pH değerinden söz edilmesi',
      'Tarihî yapılardaki aşınmanın anlatılması',
      '“Aşağıdakilerden hangisi çözüm önerisidir?” kalıbı',
      'Göl ve orman gibi etkilenen alanların sıralanması',
    ],
    reasoning:
      'Bu işaretler tek bir işlemi ister: her öneriyi zincirde bir halkaya yerleştirmek. Öneri ilk iki halkaya dokunuyorsa önleyici, son halkaya dokunuyorsa koruyucudur.',
    boundary:
      'Bu ipuçlarını “çevreyle ilgili her şey doğrudur” gibi bir kısayola çevirme. Koruyucu bir çözüm, “oluşumu önleme” sorusunun cevabı değildir. Ayrıca metinden çıkarım isteyen sorularda kendi bilgini metnin önüne geçirme.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.4.4.7 kazanımının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Verilen önerilerden hangisinin önleyici olduğunun sorulması',
      'Asit yağmurunun oluşum zincirinin sıralanması',
      'Bir metinden zararlarla ilgili çıkarım yapılması',
      'Bir model deneyin sonucunun yorumlanması',
      'Bir öğrenci önerisinin değerlendirilmesi',
      'Önleyici ile koruyucu çözümün ayırt edilmesi',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Normal yağmur suyunun pH değeri 7 midir? Asit yağmurundan ne zaman söz edilir?',
      hint: 'Havada zaten çözünen bir şey var mı?',
      answer:
        'Hayır, normal yağmur suyunun pH değeri 7 değildir; havadaki bazı gazlar suda çözündüğü için yağmur suyu **zaten hafif asidiktir** ve pH’ı 7’nin biraz altındadır. Asit yağmurundan söz edebilmek için yağışın pH değerinin bu normal düzeyin **belirgin biçimde altına** inmesi gerekir. Ölçüt “7’nin altında olmak” değil, “normalden sapmak”tır.',
    },
    {
      prompt:
        'Tarihî bir heykeli koruyucu maddeyle kaplamak, asit yağmurunu önler mi? Gerekçeni zincir üzerinden yaz.',
      hint: 'Bu öneri hangi halkaya dokunuyor?',
      answer:
        'Önlemez. Kaplama, zincirin **son halkasına** (etkilenme) dokunur: yağış zaten oluşmuş ve yeryüzüne inmiştir; kaplama yalnız o yapıya verdiği zararı azaltır. Bu bir **koruyucu** çözümdür. Asit yağmurunun oluşmasını önleyen çözümler zincirin başındadır: fosil yakıt kullanımını azaltmak (1. halka) ve bacalara filtre takmak (2. halka). Kazanım “önlenmesine yönelik çözüm” istediği için cevabın ağırlığı bu ilk halkalarda olmalıdır.',
    },
    {
      prompt:
        'Asit yağmuru neden yalnız kirliliğin oluştuğu bölgeyi ilgilendiren bir sorun değildir?',
      hint: 'Gazlar havada hareketsiz mi duruyor?',
      answer:
        'Çünkü havaya karışan gazlar **rüzgârla taşınır.** Bu yüzden asidik yağış, kirliliğin oluştuğu bölgeden çok uzak yerlere de düşebilir. Bunun iki sonucu vardır: zararı gören bölge kirliliği üreten bölge olmayabilir ve tek bir bölgenin aldığı önlem yeterli olmayabilir. Bu özellik asit yağmurunu, çözümü ortak alınacak kararlara bağlı olan bir sorun hâline getirir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey bilgi değil, çözüm üretme',
    body:
      'Kazanımın fiili çok açık: “önlenmesine yönelik **çözüm önerileri sunar**.” Program oluşum sebepleri ve sonuçlarına “değinilmesini” ister; yani bunlar amaç değil, çözüm üretmek için gereken arka plandır. MEB merkezî sınav kılavuzu da soruların yorumlama, analiz ve değerlendirme becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konudaki somut karşılığı, verilen bir öneriyi değerlendirip önleyici mi koruyucu mu olduğunu söyleyebilmendir.',
    measures: [
      'Asit yağmurunun oluşum zincirini sıralayabilme',
      'Çevreye verdiği zararları alan alan sayabilme',
      'Bir öneriyi zincirdeki halkasına yerleştirebilme',
      'Önleyici ile koruyucu çözümü ayırt edebilme',
      'Bir model deneyin sonucunu gerçek olaya bağlayabilme',
      'Gerekçeli bir çözüm önerisi kurabilme',
    ],
  },

  simulationTable: {
    title: 'Bir sınıfta öne sürülen dört öneri',
    columns: ['Öğrenci', 'Önerisi'],
    rows: [
      ['1', 'Elektrik üretiminde rüzgâr ve güneşten daha çok yararlanılmalıdır.'],
      ['2', 'Sanayi bacalarına filtre takılması zorunlu hâle getirilmelidir.'],
      ['3', 'Tarihî yapılar koruyucu bir maddeyle kaplanmalıdır.'],
      ['4', 'Kısa mesafelerde araç yerine yürüyüş ve bisiklet tercih edilmelidir.'],
    ],
    caption: 'Tartışma konusu: asit yağmurlarının önlenmesi için neler yapılabilir?',
  },

  simulation: {
    title: 'Mini uygulama — özgün sınıf tartışması',
    passage: `Bir sınıfta asit yağmurlarının önlenmesi tartışılıyor. Dört öğrencinin önerileri yukarıdaki tabloda verilmiştir.

Öğretmen, önerilerden birinin asit yağmurunun **oluşmasını önlemeye** yönelik olmadığını söylüyor.`,
    question: 'Öğretmenin işaret ettiği öneri hangisidir ve neden?',
    options: [
      {
        text: '1. öğrencinin önerisi; çünkü yenilenebilir kaynaklar da havayı kirletir',
        explanation:
          'Yenilenebilir kaynaklara yönelmek fosil yakıt kullanımını azaltır ve zincirin ilk halkasına dokunur. Bu, önleyici çözümlerin en etkilisidir.',
      },
      {
        text: '2. öğrencinin önerisi; çünkü filtre yalnız fabrikaları ilgilendirir',
        explanation:
          'Filtre, gazların havaya karışmasını azaltarak zincirin ikinci halkasına dokunur. Yalnız fabrikaları ilgilendirmesi onu koruyucu yapmaz; havaya ulaşan madde azaldığı için önleyicidir.',
      },
      {
        text: '3. öğrencinin önerisi; çünkü yağış oluştuktan sonra devreye girer',
        explanation:
          'Doğru cevap. Kaplama zincirin son halkasına dokunur: yağış zaten oluşmuştur ve kaplama yalnız o yapıya verdiği zararı azaltır. Bu bir koruyucu çözümdür, önleyici değil.',
      },
      {
        text: '4. öğrencinin önerisi; çünkü bireysel davranışların hiçbir etkisi yoktur',
        explanation:
          'Bireysel davranışlar tek başına yeterli olmasa da toplandığında enerji talebini ve araç kaynaklı salımı azaltır; zincirin ilk halkasına dokunur. Bu yüzden önleyici bir öneridir.',
      },
      {
        text: 'Hiçbiri; dört öneri de oluşumu önlemeye yöneliktir',
        explanation:
          '3. öneri yağış oluştuktan sonra devreye girdiği için oluşumu önlemez. Önleyici çözümler zincirin başına, koruyucu çözümler sonuna yerleşir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru dört öneriyi tek tek değerlendirmeyi istiyor. Yöntem: her öneriyi zincirde bir halkaya yerleştir. İlk iki halkaya dokunanlar önleyici, son halkaya dokunanlar koruyucudur.',
    critical_point:
      'Kritik nokta 3. önerinin **yararlı** olmasıdır. Yararlı olmak ile önleyici olmak aynı şey değildir. Tarihî yapıyı kaplamak değerli bir çalışmadır; ama asit yağmurunun oluşmasını engellemez.',
    takeaway:
      'Bir öneriyi değerlendirirken “yararlı mı?” diye değil, “sorunun hangi aşamasına dokunuyor?” diye sor.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Asit yağmurlarının oluşumunda temel kaynak aşağıdakilerden hangisidir?',
      options: [
        'Denizlerden buharlaşan su miktarının artması',
        'Fosil yakıtların yakılmasıyla havaya karışan gazlar',
        'Yağmur suyunun doğal olarak pH 7 değerinde olması',
        'Toprağın asitlik durumunun kendiliğinden değişmesi',
      ],
      answer_index: 1,
      explanation:
        'Asit yağmurunun zinciri fosil yakıtların yakılmasıyla başlar: yanma sırasında havaya karışan gazlar su damlacıklarında çözünür ve yağışın pH değeri düşer. Buharlaşma miktarı yağışın asitliğini belirlemez. Yağmur suyu zaten doğal olarak hafif asidiktir, pH’ı 7 değildir. Toprağın asitlik durumu ise bu zincirin sonucudur, nedeni değil.',
    },
    {
      purpose: 'apply',
      question:
        'Aşağıdaki önerilerden hangisi asit yağmurunun oluşmasını önlemeye yönelik **değildir**?',
      options: [
        'Sanayi bacalarına filtre takmak',
        'Yenilenebilir enerji kaynaklarına yönelmek',
        'Tarihî yapıları koruyucu maddeyle kaplamak',
        'Toplu taşıma kullanımını yaygınlaştırmak',
      ],
      answer_index: 2,
      explanation:
        'Tarihî yapıları kaplamak, yağış zaten oluştuktan sonra devreye giren koruyucu bir çözümdür; asit yağmurunun oluşmasını engellemez, yalnız o yapıya verdiği zararı azaltır. Öbür üç öneri zincirin ilk iki halkasına dokunur: filtre havaya karışan miktarı, yenilenebilir enerji ve toplu taşıma ise yakılan yakıt miktarını azaltır.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Asit yağmuru yalnız fabrikaların bulunduğu bölgelere yağar.” diyor. Bu ifadenin hatası nedir?',
      options: [
        'Havaya karışan gazların rüzgârla taşındığını gözden kaçırmak',
        'Fabrikaların hava kirliliğine yol açtığını bilmemek',
        'Yağmurun pH değerinin düştüğünü kabul etmemek',
        'Asitlerin yapıları aşındırdığını bilmemek',
      ],
      answer_index: 0,
      explanation:
        'Havaya karışan gazlar rüzgârla taşınır; bu yüzden asidik yağış kaynağından yüzlerce kilometre uzaktaki bölgelere de düşebilir. Bu özellik sorunu yerel olmaktan çıkarır: zararı gören bölge kirliliği üreten bölge olmayabilir ve çözüm ortak kararlar gerektirir. Öğrenci kaynağı doğru belirlemiş, ama taşınmayı hesaba katmamıştır.',
    },
  ],

  summary: [
    'Normal yağmur suyu zaten hafif asidiktir; pH’ı 7’nin biraz altındadır.',
    'Asit yağmuru, pH değeri normalden belirgin biçimde düşük olan yağıştır.',
    'Zincir fosil yakıtların yakılmasıyla başlar.',
    'Havaya karışan gazlar su damlacıklarında çözünür ve yağışın pH’ı düşer.',
    'Gazlar rüzgârla taşındığı için asidik yağış kaynağından uzağa da düşebilir.',
    'Toprakta verim düşer, göllerde sucul canlıların yaşam koşulları bozulur.',
    'Ormanlarda ağaçlar zarar görür; besin zincirinin tamamı etkilenebilir.',
    'Metal ve taş yapılarda aşınma olur; tarihî yapılarda kalıcı kayıp oluşur.',
    'Yapılardaki aşınma bir kimyasal değişimdir.',
    'Önleyici çözümler zincirin ilk iki halkasına dokunur: yakıt kullanımı ve havaya karışma.',
    'Yenilenebilir enerji, enerji tasarrufu, toplu taşıma ve filtre önleyici çözümlerdir.',
    'Yapıları kaplamak koruyucu bir çözümdür; oluşumu önlemez.',
    'İyi bir çözüm önerisi üç parçalıdır: ne yapılmalı, hangi halkaya dokunuyor, neden işe yarar.',
  ],

  next: [
    'Maddenin Isı ile Etkileşimi ve Hâl Değişim Grafikleri (F.8.4.5.1–F.8.4.5.4)',
    'Türkiye’de Kimya Endüstrisi (F.8.4.6.1, F.8.4.6.2)',
    'Madde Döngüleri ve Küresel İklim Değişikliği (F.8.6.3.3 — aynı zincir mantığı)',
  ],
})

export default lesson
