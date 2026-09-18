import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.3 Basınç · 2. ders
 * Kazanım : F.8.3.1.2 · F.8.3.1.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAM SINIRLARI — BAĞLAYICI VE SERT
 *   F.8.3.1.2 → a) Gazların da basınç uyguladığı ve AÇIK HAVA BASINCININ
 *                  varlığı belirtilir.
 *               b) MATEMATİKSEL BAĞINTILARA GİRİLMEZ.
 *               c) GAZ BASINCININ BAĞLI OLDUĞU DEĞİŞKENLERE GİRİLMEZ.
 *   F.8.3.1.3 → Pascal prensibi vurgulanır; "ilke" ve "prensip"
 *               kavramlarına değinilir.
 *
 * Bu yüzden derste:
 *   • Sıvı basıncı formülü (P = h·d·g) HİÇ YAZILMAZ, sayısal hesap yok.
 *   • Gaz basıncını etkileyen değişkenler (hacim, sıcaklık, molekül
 *     sayısı) ANLATILMAZ. Gaz için yalnız "basınç uygular" ve "açık hava
 *     basıncı vardır" düzeyinde kalınır. Bu, piyasadaki kaynakların en
 *     sık ihlal ettiği sınırdır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-sivi-ve-gaz-basinci',
  topic: 'Basınç',
  order: 2,
  title: 'Sıvı ve Gaz Basıncı: Derinlik, Yoğunluk, Açık Hava',
  subtitle:
    'Sıvı basıncını kabın biçimi de içindeki su miktarı da belirlemez. Belirleyen iki şey vardır.',
  minutes: 44,
  kazanimlar: [
    {
      kod: 'F.8.3.1.2',
      metin: 'Sıvı basıncını etkileyen değişkenleri tahmin eder ve tahminlerini test eder.',
      sinir:
        'Gazların da basınç uyguladığı ve açık hava basıncının varlığı belirtilir. **Matematiksel bağıntılara girilmez** ve **gaz basıncının bağlı olduğu değişkenlere girilmez.**',
    },
    {
      kod: 'F.8.3.1.3',
      metin:
        'Katı, sıvı ve gaz basıncının günlük yaşam ve teknolojideki uygulamalarına örnekler verir.',
      sinir: 'Pascal prensibi vurgulanır; “ilke” ve “prensip” kavramlarına değinilir.',
    },
  ],
  prerequisites: [
    { topic: 'Katı Basıncı: Ağırlık mı, Yüzey mi?', why: 'Basınç kavramı ve değişken kontrolü kuralı orada kuruldu.' },
    { topic: 'Yoğunluk', why: 'Sıvı basıncını etkileyen iki değişkenden biri sıvının yoğunluğudur.' },
  ],
  outcomes: [
    'Sıvı basıncını etkileyen iki değişkeni söyleyebileceksin.',
    'Kabın biçiminin ve sıvı miktarının neden etkili olmadığını açıklayabileceksin.',
    'Bir tahmini nasıl test edeceğini bir deneyle kurabileceksin.',
    'Gazların da basınç uyguladığını ve açık hava basıncını örnekle anlatabileceksin.',
    'Pascal prensibini ve hidrolik sistemlerdeki karşılığını açıklayabileceksin.',
  ],

  opening: {
    title: 'Aynı barajda, farklı derinlikte',
    lead: 'Baraj duvarları neden yukarıda ince, aşağıda kalın yapılır? Suyun ağırlığı aynı duvara etki ediyor olsa da…',
    body: `Bir baraj duvarına dışarıdan bakarsan ilginç bir şey fark edersin: duvar yukarıda incedir, aşağıya indikçe kalınlaşır.

Bu bir süsleme tercihi değil. Mühendislik kararıdır ve nedeni şudur: **suyun duvara uyguladığı basınç, derinlik arttıkça artar.** Aşağıda basınç yüksek olduğu için duvarın orada daha güçlü olması gerekir.

Aynı olayı havuzda da yaşamışsındır. Havuzun derinine daldığında kulaklarında bir basınç hissedersin. Yüzeye yaklaştığında bu his azalır. Suyun cinsi değişmedi, havuz değişmedi; değişen tek şey **derinlik.**

Geçen derste katı basıncını öğrendik: bir cismin ağırlığı ve temas yüzeyi. Şimdi soru şu: **sıvılar basıncı nasıl uygular?**

Sıvılar katılardan farklıdır. Bir katı, ağırlığını yalnız altındaki yüzeye uygular. Bir sıvı ise bulunduğu kabın **tabanına da, yan duvarlarına da** basınç uygular. Çünkü sıvı akışkandır; parçacıkları serbestçe hareket eder ve basıncı her yöne iletir.

Bu derste üç iş yapacağız:

1. **Sıvı basıncını** etkileyen değişkenleri bulacağız — ve etkilemeyenleri de ayıklayacağız. Bu ikincisi daha önemli: çünkü öğrencilerin çoğu burada yanılıyor.
2. **Gazların da basınç uyguladığını** ve açık hava basıncını göreceğiz.
3. **Pascal prensibini** ve bunun teknolojide nasıl kullanıldığını öğreneceğiz.

İki kapsam uyarısı — ikisi de programın açık sınırı:

*Birincisi: bu derste **matematiksel bağıntıya girilmez.*** Sıvı basıncı formülü yazmayacağız, sayısal hesap yapmayacağız. İlişkiyi yönüyle kuracağız.

*İkincisi: **gaz basıncının bağlı olduğu değişkenlere girilmez.*** Yani gaz basıncının neye göre değiştiğini bu düzeyde öğrenmeyeceğiz. Gaz için bilmen gereken iki şey var: gazlar da basınç uygular ve çevremizde bir açık hava basıncı vardır. Piyasadaki bazı kaynaklar bu sınırı aşıyor; sen zamanını doğru yere harca.`,
  },

  concepts: [
    {
      term: 'Sıvı basıncı',
      body: 'Bir sıvının, bulunduğu kabın tabanına ve yan duvarlarına uyguladığı basınçtır. Sıvılar akışkan olduğu için basınç yalnız aşağıya değil, **her yöne** etki eder.',
    },
    {
      term: 'Derinlik',
      body: 'Sıvının yüzeyinden aşağıya doğru olan uzaklıktır. Sıvı basıncını etkileyen iki değişkenden biridir: **derinlik arttıkça sıvı basıncı artar.**',
    },
    {
      term: 'Sıvının yoğunluğu',
      body: 'Sıvı basıncını etkileyen öbür değişkendir. Aynı derinlikte, **yoğunluğu büyük olan sıvı daha büyük basınç uygular.**',
    },
    {
      term: 'Açık hava basıncı',
      body: 'Çevremizi saran havanın uyguladığı basınçtır. Havanın da bir ağırlığı vardır ve üzerimizde sürekli bir basınç oluşturur. Program bu basıncın varlığının belirtilmesini ister.',
    },
    {
      term: 'Pascal prensibi',
      body: 'Kapalı bir kaptaki durgun sıvıya uygulanan basınç, sıvının **her noktasına aynen iletilir.** Hidrolik sistemlerin temeli budur.',
    },
    {
      term: 'İlke ve prensip',
      body: 'Çok sayıda gözlemle doğrulanmış, bir alanda genel geçer kabul edilen temel kurala **ilke** (prensip) denir. “Pascal prensibi” adındaki “prensip” sözcüğü bunu anlatır.',
    },
  ],

  why: {
    question: 'Sıvı basıncını neden kabın biçimi ve içindeki sıvı miktarı belirlemiyor?',
    body: `Bu, konunun en çok yanılgı üreten noktasıdır; bu yüzden üzerinde duralım.

Önce yanlış sezgiyi tanıyalım. Öğrencilerin çoğu şöyle düşünür: *“Kapta daha çok su varsa, suyun ağırlığı daha fazladır; öyleyse tabana daha büyük basınç uygular.”*

Bu düşünce mantıklı görünür ama **yanlıştır.** Nedenini görelim.

İki kap düşün: biri dar ve uzun bir boru, öbürü geniş bir leğen. Boruya 1 litre su, leğene 10 litre su koyalım. Ama suyun **yüksekliği** ikisinde de aynı olsun — borudaki su 20 cm yükseklikte, leğendeki su da 20 cm yükseklikte.

Tabana uygulanan basınç ikisinde de **aynıdır.**

Neden? Çünkü tabandaki bir noktaya basıncı uygulayan şey, kabın içindeki suyun tamamı değil, **o noktanın üzerindeki su sütunudur.** Leğende su geniş bir alana yayılmıştır; her noktanın üzerinde yine 20 cm’lik bir su sütunu vardır. Suyun toplam miktarı arttı ama her noktanın üzerindeki yükseklik değişmedi.

Bu yüzden belirleyici olan **derinliktir**, miktar değil.

Aynı mantık kabın biçimi için de geçerlidir. Kap konik, silindirik ya da düzensiz olabilir; bir noktadaki basıncı belirleyen yine o noktanın **yüzeyden ne kadar aşağıda** olduğudur.

Şimdi ikinci değişkene gelelim: **sıvının yoğunluğu.**

Aynı derinlikte iki farklı sıvı düşün: su ve ondan daha yoğun bir sıvı. Aynı yükseklikteki sütunlarda, yoğun sıvının sütunu daha ağırdır. Bu yüzden aynı derinlikte **yoğunluğu büyük olan sıvı daha büyük basınç uygular.**

Öyleyse sıvı basıncını etkileyen değişkenler iki tanedir:

**1. Derinlik** — artarsa basınç artar.
**2. Sıvının yoğunluğu** — artarsa basınç artar.

Ve etkilemeyenler:

- Kabın biçimi
- Kabın taban alanı
- Kaptaki sıvının toplam miktarı

Bu ikinci liste en az birincisi kadar önemlidir. Sorular çoğu zaman “hangisi sıvı basıncını **etkilemez**?” biçiminde sorar.

*Kapsam notu: bu ilişkileri bir formülle değil, yönüyle kurduk; program bu düzeyde matematiksel bağıntı istemez.*`,
  },

  mechanism: {
    title: 'Sıvı basıncı nasıl oluşuyor?',
    lead: 'Zinciri kurduğunda, derinliğin neden belirleyici olduğunu ezberlemeden anlarsın.',
    intro:
      'Aşağıdaki adımlar, bir sıvının kabın tabanına ve duvarlarına nasıl basınç uyguladığını gösterir.',
    steps: [
      {
        title: '1. Sıvının bir ağırlığı vardır',
        body: 'Her sıvı madde gibi sıvıların da kütlesi ve ağırlığı vardır. Bu ağırlık, sıvının bulunduğu kabın içinde aşağı doğru etki eder.',
      },
      {
        title: '2. Sıvı akışkandır',
        body: 'Sıvı parçacıkları birbiri üzerinde serbestçe hareket eder. Bu yüzden sıvı, katılardan farklı olarak basıncı yalnız aşağıya değil **her yöne** iletir.',
      },
      {
        title: '3. Her noktaya üstündeki sütun etki eder',
        body: 'Sıvı içindeki bir noktaya, o noktanın üzerinde kalan sıvı sütunu basınç uygular. Kabın öbür bölgelerindeki sıvı o noktayı belirlemez.',
      },
      {
        title: '4. Derinlik arttıkça sütun uzar',
        body: 'Aşağı indikçe bir noktanın üzerinde kalan sıvı sütunu uzar. Sütun uzadıkça o noktadaki basınç artar.',
      },
      {
        title: '5. Yoğunluk sütunun ağırlığını değiştirir',
        body: 'Aynı yükseklikteki iki sütundan, yoğunluğu büyük olan sıvının sütunu daha ağırdır. Bu yüzden aynı derinlikte daha büyük basınç oluşturur.',
      },
      {
        title: '6. Basınç yan duvarlara da etki eder',
        body: 'Sıvı basıncı her yöne etki ettiği için kabın yan duvarlarına da uygulanır. Duvardaki basınç da aşağı indikçe artar; baraj duvarının aşağıda kalınlaşmasının nedeni budur.',
      },
    ],
    takeaway:
      'Zincirin kalbi 3. adımdır: bir noktadaki basıncı belirleyen şey, kaptaki toplam sıvı değil, o noktanın üzerindeki sütundur.',
  },

  comparison: {
    title: 'Sıvı basıncını ne etkiler, ne etkilemez?',
    columns: ['Etkiler', 'Etkilemez'],
    rows: [
      { label: 'Birinci madde', values: ['Derinlik (sıvı yüksekliği)', 'Kabın biçimi'] },
      { label: 'İkinci madde', values: ['Sıvının yoğunluğu', 'Kabın taban alanı'] },
      { label: 'Üçüncü madde', values: ['—', 'Kaptaki sıvının toplam miktarı'] },
      { label: 'Nasıl sınanır?', values: ['Biri değiştirilir, öbürü sabit tutulur', 'Değiştirilse bile sonuç değişmez'] },
      { label: 'Günlük karşılığı', values: ['Baraj duvarının aşağıda kalınlaşması', 'Farklı biçimdeki kaplarda aynı yükseklikte aynı basınç'] },
    ],
    insight:
      'Sağ sütun sorularda daha çok işine yarar: “hangisi sıvı basıncını etkilemez?” sorusunun cevabı hep oradadır.',
  },

  traps: [
    {
      title: 'Sıvı miktarının basıncı belirlediğini sanmak',
      wrong: 'Kapta ne kadar çok su varsa tabana uyguladığı basınç o kadar büyüktür.',
      right: 'Belirleyici olan **derinliktir**, miktar değil. Farklı biçimdeki iki kapta sıvı yüksekliği aynıysa tabandaki basınç da aynıdır.',
      body: 'Nedeni şu: tabandaki bir noktaya, kaptaki suyun tamamı değil, yalnız o noktanın üzerindeki su sütunu etki eder. Geniş bir kapta su yayılır ama her noktanın üzerindeki yükseklik değişmez.',
    },
    {
      title: 'Kabın biçiminin basıncı değiştirdiğini sanmak',
      wrong: 'Dar bir kapta su sıkıştığı için basınç daha büyük olur.',
      right: 'Kabın biçimi sıvı basıncını **etkilemez.** Aynı sıvıda aynı derinlikteki iki nokta, kapların biçimi farklı olsa bile aynı basınca sahiptir.',
      body: 'Bu yüzden birbirine bağlı farklı biçimdeki kaplara su konduğunda su hepsinde aynı seviyede durur. Seviyeyi belirleyen basınçtır; basıncı belirleyen de derinliktir.',
    },
    {
      title: 'Sıvı basıncının yalnız aşağı doğru etki ettiğini sanmak',
      wrong: 'Sıvı ağırlığı nedeniyle yalnız kabın tabanına basınç uygular.',
      right: 'Sıvılar akışkan olduğu için basıncı **her yöne** iletir. Kabın yan duvarlarına da basınç uygulanır.',
      body: 'Su dolu bir şişenin yan tarafına delik açtığında suyun yanlara fışkırması bunun kanıtıdır. Katı basıncında böyle bir durum yoktur; katı basıncı yalnız uygulanan kuvvet doğrultusundadır.',
    },
    {
      title: 'Gaz basıncının değişkenlerini bu derste aramak',
      wrong: 'Gaz basıncının hacme ve sıcaklığa nasıl bağlı olduğunu da öğrenmeliyim.',
      right: 'Program bu kazanımda **gaz basıncının bağlı olduğu değişkenlere girilmemesini** açıkça ister. Senden istenen iki şey: gazların da basınç uyguladığını ve açık hava basıncının varlığını bilmek.',
      body: 'Bu sınırı bilmek çalışma zamanını korur. Kapsam dışı bir konuya harcanan saat, kapsam içi bir konudan çalınır.',
    },
  ],

  variables: {
    title: 'Tahminini test et: derinlik gerçekten etkiliyor mu?',
    lead:
      'Kazanım “tahmin eder ve tahminlerini test eder” diyor. Önce tahmin, sonra deney; sıra budur.',
    question: 'Bir şişenin farklı yüksekliklerine açılan deliklerden su aynı uzaklığa mı fışkırır?',
    independent: {
      label: 'Deliğin şişedeki derinliği',
      note: 'Ben belirliyorum: üst, orta, alt delik',
    },
    setup: {
      label: 'Üç delikli, su dolu plastik şişe',
      note: 'Delikler aynı anda açılır, şişe sabit durur',
    },
    dependent: {
      label: 'Suyun fışkırdığı uzaklık',
      note: 'Ölçtüğüm: şişe dibinden itibaren mesafe',
    },
    controlled: [
      'Şişedeki sıvı (aynı su)',
      'Deliklerin büyüklüğü',
      'Şişedeki su yüksekliği',
      'Şişenin durduğu zemin ve yükseklik',
    ],
    caption:
      'Deliklerin büyüklüğü bilerek eşit tutulur. Eşit olmasaydı fışkırma farkının delik boyutundan mı derinlikten mi geldiğini söyleyemezdik.',
  },

  experiment: {
    title: 'İki deney: derinlik ve yoğunluk',
    intro:
      'Kazanım önce tahmin, sonra test ister. Her deneyden önce tahminini yaz; sonra sonucu tahmininle karşılaştır.',
    steps: [
      { title: '1. Tahminini yaz', body: 'Deneyden önce şunu yaz: “Alt delikten çıkan su daha uzağa fışkırır / aynı uzağa fışkırır.” Tahminini kaydetmek, sonucu sonradan kendine göre yorumlamanı engeller.' },
      { title: '2. A deneyi — şişeyi hazırla', body: 'Plastik bir şişenin alt, orta ve üst kısmına aynı büyüklükte üç delik açılır. Delikler bantla kapatılır, şişe suyla doldurulur.' },
      { title: '3. Bantları aynı anda aç', body: 'Üç delik aynı anda açılır ve suyun fışkırma uzaklıkları karşılaştırılır. En alttaki delikten çıkan su en uzağa fışkırır.' },
      { title: '4. Sonucu tahminle karşılaştır', body: 'Tahminin doğru çıktıysa desteklenmiş oldu; yanlış çıktıysa tahminini gözden geçir. Bilimde yanlış çıkan tahmin de bilgi üretir.' },
      { title: '5. B deneyi — sıvıyı değiştir', body: 'Aynı şişe düzeneğinde, aynı yükseklikte iki farklı yoğunlukta sıvı kullanılır (örneğin su ve tuzlu su). Delik yüksekliği ve sıvı yüksekliği sabit tutulur.' },
      { title: '6. Yoğunluğun etkisini oku', body: 'Aynı derinlikte, yoğunluğu büyük olan sıvı daha uzağa fışkırır. Bu, yoğunluğun sıvı basıncını etkilediğini gösterir.' },
    ],
    takeaway:
      'İki deney ayrı kuruldu; çünkü her birinde yalnız bir değişken değişmeli. A deneyinde derinlik, B deneyinde yoğunluk sınandı.',
  },

  dataTable: {
    title: 'Gözlem kaydı: fışkırma uzaklıkları',
    columns: ['Deney', 'Delik konumu', 'Sıvı', 'Fışkırma uzaklığı', 'Çıkarım'],
    rows: [
      ['A-1', 'Üst delik', 'Su', '6 cm', 'Derinlik az, basınç düşük'],
      ['A-2', 'Orta delik', 'Su', '13 cm', 'Derinlik arttı, fışkırma arttı'],
      ['A-3', 'Alt delik', 'Su', '21 cm', 'En derin nokta, en büyük basınç'],
      ['B-1', 'Orta delik', 'Su', '13 cm', 'Karşılaştırma ölçümü'],
      ['B-2', 'Orta delik', 'Tuzlu su (daha yoğun)', '16 cm', 'Aynı derinlikte yoğunluk artınca basınç arttı'],
    ],
    caption:
      'A satırları derinliğin, B satırları yoğunluğun etkisini gösterir. B’de delik konumu bilerek sabit tutulmuştur. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir; basınç hesabı yapılmamıştır.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-sivi-basinci-gaz',
      title: 'Gazlar da basınç uygular: açık hava basıncı',
      lead: 'Programın istediği tam olarak bu: varlığını bilmek ve örnekleyebilmek.',
      blocks: [
        {
          id: 'lgs-fen-sivi-basinci-gaz-anlatim',
          type: 'prose',
          body: `Havayı çoğu zaman “hiçbir şey” gibi düşünürüz. Oysa hava bir maddedir; kütlesi ve ağırlığı vardır.

Ağırlığı olan her şey gibi hava da bir basınç oluşturur. Çevremizi saran havanın uyguladığı bu basınca **açık hava basıncı** denir.

Peki bu basıncı neden hissetmiyoruz? Çünkü bu basınç bize her yönden etki eder ve vücudumuz buna uyumludur. Ancak varlığını gösteren pek çok gözlem vardır.

**Gözlem 1 — Pipetle içecek içmek.** Pipetten hava çektiğinde pipet içindeki basınç azalır. Bardaktaki sıvının yüzeyine etki eden açık hava basıncı, sıvıyı pipetten yukarı iter. Sıvıyı yukarı “çeken” sen değilsin; **açık hava basıncı itiyor.**

**Gözlem 2 — Vantuz.** Vantuzu yüzeye bastırdığında altındaki hava dışarı çıkar. Dışarıdaki açık hava basıncı vantuzu yüzeye doğru bastırır ve vantuz yapışık kalır.

**Gözlem 3 — Ağzı kapalı su şişesi.** Boş bir plastik şişenin havasını çekip ağzını kapatırsan şişe ezilir. Bunu yapan, dışarıdan etki eden açık hava basıncıdır.

**Gözlem 4 — Yükseklik.** Yükseklere çıkıldıkça açık hava basıncı azalır; çünkü üstte kalan hava sütunu kısalır. Bu, sıvı basıncındaki derinlik ilişkisinin havadaki benzeridir: aşağıda basınç yüksek, yukarıda düşüktür.

Şimdi çok önemli bir kapsam uyarısı.

*Program bu kazanımda **gaz basıncının bağlı olduğu değişkenlere girilmemesini** açıkça ister.* Yani gaz basıncının neye göre arttığını ya da azaldığını inceleyen bir çalışma bu düzeyde istenmez.

Senden istenen iki şey var, ikisi de programın kendi cümlesinde yazılı:

1. **Gazların da basınç uyguladığını** bilmek.
2. **Açık hava basıncının varlığını** bilmek ve örnekleyebilmek.

Bu kadar. Piyasadaki bazı kaynaklar gaz basıncını etkileyen değişkenleri de anlatıyor; bu, 8. sınıf kazanımının dışındadır.

Son bir karşılaştırma yapalım. Katı, sıvı ve gaz basınçlarının ortak yanı, hepsinin bir **ağırlıktan** doğmasıdır. Farkları ise iletme biçimlerindedir: katı basıncı yalnız uygulandığı doğrultuda etki ederken, sıvı ve gaz akışkan oldukları için basıncı **her yöne** iletir.`,
        },
        {
          id: 'lgs-fen-sivi-basinci-gaz-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Katı, sıvı ve gaz basıncı',
          columns: ['Katı basıncı', 'Sıvı basıncı', 'Gaz basıncı'],
          rows: [
            { label: 'Hangi yönlere etki eder?', values: ['Yalnız uygulandığı doğrultuda', 'Her yöne', 'Her yöne'] },
            { label: 'Etkileyen değişkenler', values: ['Ağırlık ve temas yüzeyi', 'Derinlik ve yoğunluk', 'Bu düzeyde incelenmez'] },
            { label: 'Kabın biçimi etkiler mi?', values: ['Temas yüzeyi önemlidir', 'Etkilemez', 'Bu düzeyde incelenmez'] },
            { label: 'Günlük örnek', values: ['Kar ayakkabısı, bıçak', 'Baraj duvarı, dalgıç kıyafeti', 'Pipet, vantuz, açık hava basıncı'] },
            { label: 'Birimi', values: ['Pascal', 'Pascal', 'Pascal'] },
          ],
          insight:
            'İkinci satırın üçüncü sütununa dikkat: orada bir bilgi eksikliği yok, bir **program sınırı** var. Gaz basıncının değişkenleri 8. sınıf kazanımının dışındadır.',
        },
        {
          id: 'lgs-fen-sivi-basinci-gaz-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Pipet sorusu klasik bir çeldirici üretir: “sıvıyı yukarı çeken emme kuvvetidir” denir. Doğrusu, pipetteki basınç azalınca sıvıyı yukarı iten şeyin **açık hava basıncı** olmasıdır. “Çekme” değil, “itme” diye düşün.',
        },
      ],
    },

    {
      id: 'lgs-fen-sivi-basinci-pascal',
      title: 'Pascal prensibi ve hidrolik sistemler',
      lead: 'Programın açıkça vurgulanmasını istediği konu; aynı zamanda “ilke/prensip” kavramının da yeri.',
      blocks: [
        {
          id: 'lgs-fen-sivi-basinci-pascal-anlatim',
          type: 'prose',
          body: `Önce kavramın kendisiyle başlayalım: **ilke** (prensip) nedir?

Bilimde, çok sayıda gözlemle doğrulanmış ve bir alanda genel geçer kabul edilen temel kurallara **ilke** ya da **prensip** denir. Bir ilke tek bir deneyin sonucu değildir; tekrar tekrar sınanmış ve hep aynı sonucu vermiş bir kuraldır. Program bu kavrama değinilmesini ister; “Pascal prensibi” adındaki “prensip” sözcüğü tam olarak bunu anlatır.

Şimdi prensibin kendisine gelelim.

**Pascal prensibi:** Kapalı bir kaptaki durgun sıvıya uygulanan basınç, sıvının **her noktasına aynen iletilir.**

Cümledeki üç sözcük önemlidir:

- **Kapalı kap:** sıvı dışarı kaçamaz.
- **Durgun sıvı:** sıvı akmıyor, duruyor.
- **Aynen iletilir:** basınç azalmadan, her noktaya aynı büyüklükte ulaşır.

Bunu somutlaştıralım. Su dolu ve her yanında delikler bulunan kapalı bir kabın pistonuna bastırdığını düşün. Su bütün deliklerden aynı anda fışkırır. Uyguladığın basınç yalnız bastırdığın yöne değil, sıvının **tamamına** iletilmiştir.

Bu prensip teknolojide çok işe yarar; çünkü küçük bir kuvvetle büyük bir iş yapmayı mümkün kılar.

**Hidrolik sistemler** bu prensiple çalışır. Birbirine bağlı, sıvı dolu iki koldan birine kuvvet uygulanır; basınç sıvı yoluyla öbür kola iletilir ve orada iş yapılır.

Günlük hayattaki karşılıkları:

- **Hidrolik fren:** pedala uygulanan kuvvet, sıvı yoluyla tekerleklerdeki fren düzeneğine iletilir.
- **Hidrolik kaldırıcı (oto lift):** ağır araçlar küçük bir kuvvetle yukarı kaldırılır.
- **İş makinelerinin kolları:** kepçenin kolu hidrolik sistemlerle hareket eder.
- **Hidrolik pres:** malzemeler büyük kuvvetlerle sıkıştırılır.
- **Berber koltuğu ve hidrolik kapı kapatıcıları:** aynı prensibin küçük ölçekli uygulamalarıdır.

Şimdi katı, sıvı ve gaz basıncının günlük yaşamdaki uygulamalarını bir arada toplayalım; kazanım F.8.3.1.3 bunu ister:

**Katı basıncı uygulamaları:** kar ayakkabısı, paletli araçlar, geniş temeller, bıçak ve iğnenin inceliği, çivinin sivri ucu.

**Sıvı basıncı uygulamaları:** baraj duvarlarının aşağıda kalınlaşması, su depolarının yüksek yerlere kurulması, dalgıç kıyafetleri, hidrolik sistemler.

**Gaz basıncı uygulamaları:** pipet, vantuz, enjektör, lastiklerin şişirilmesi, açık hava basıncını kullanan araçlar.

Su depolarının yüksek yerlere kurulmasına özellikle dikkat et: depo yükseldikçe musluğa göre derinlik artar, bu da suyun daha güçlü akmasını sağlar. Bu, sıvı basıncı bilgisinin doğrudan bir mühendislik kararına dönüşmesidir.`,
        },
        {
          id: 'lgs-fen-sivi-basinci-pascal-tablo',
          type: 'table',
          interactive: true,
          title: 'Üç basınç türünün günlük yaşam uygulamaları',
          columns: ['Basınç türü', 'Uygulama', 'Amaç'],
          rows: [
            ['Katı', 'Kar ayakkabısı, paletli araç', 'Basıncı azaltmak (batmamak)'],
            ['Katı', 'Bıçak, iğne, çivi', 'Basıncı artırmak (kesmek, delmek)'],
            ['Sıvı', 'Baraj duvarının aşağıda kalınlaşması', 'Derinlikteki yüksek basınca dayanmak'],
            ['Sıvı', 'Su deposunun yüksek yere kurulması', 'Musluktaki su basıncını artırmak'],
            ['Sıvı', 'Hidrolik fren, hidrolik kaldırıcı', 'Pascal prensibiyle kuvveti iletmek'],
            ['Gaz', 'Pipet, vantuz, enjektör', 'Açık hava basıncından yararlanmak'],
          ],
          caption:
            'Tabloyu ezberleme; her satırda “hangi basınç, hangi amaç” ilişkisini kur. Yeni bir örnek geldiğinde de aynı soruyu sorarsın.',
        },
        {
          id: 'lgs-fen-sivi-basinci-pascal-hafiza',
          type: 'memory',
          title: 'İki cümlede ders',
          body:
            '**Sıvı basıncı:** derinlik ve yoğunluk artarsa artar; kap biçimi ve sıvı miktarı etkilemez. **Pascal prensibi:** kapalı kaptaki durgun sıvıya uygulanan basınç her noktaya aynen iletilir.',
        },
        {
          id: 'lgs-fen-sivi-basinci-pascal-tuzak',
          type: 'trap',
          title: 'Pascal prensibini açık kaplara uygulamak',
          wrong: 'Her sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir.',
          right: 'Prensip **kapalı** kaptaki **durgun** sıvı için geçerlidir. Cümledeki bu iki koşul atlanamaz.',
          body: 'Açık bir kapta sıvı yer değiştirebilir ve basınç aynen iletilmez. Hidrolik sistemlerin kapalı olmasının nedeni budur.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Hangisi etkilemez?',
      prompt:
        'Aynı sıvıyla doldurulmuş, biçimleri farklı iki kap var. Sıvı yüksekliği ikisinde de aynı, ama birinci kapta sıvı miktarı ikincinin iki katı. İki kabın tabanına uygulanan sıvı basıncı için ne söylenebilir?',
      steps: [
        { title: '1. Değişkenleri listele', body: 'Sıvı basıncını iki değişken etkiler: derinlik (sıvı yüksekliği) ve sıvının yoğunluğu.' },
        { title: '2. Sıvıyı kontrol et', body: 'İki kapta da aynı sıvı var; öyleyse yoğunluk aynıdır.' },
        { title: '3. Derinliği kontrol et', body: 'Sıvı yüksekliği ikisinde de aynı; öyleyse tabandaki derinlik de aynıdır.' },
        { title: '4. Etkisiz değişkenleri ayıkla', body: 'Farklı olan iki şey var: kabın biçimi ve sıvı miktarı. Bunların ikisi de sıvı basıncını etkilemez.' },
        { title: '5. Sonucu yaz', body: 'İki kabın tabanına uygulanan sıvı basıncı **eşittir.**' },
      ],
      answer: 'İki kabın tabanındaki sıvı basıncı eşittir; çünkü derinlik ve sıvının yoğunluğu aynıdır.',
      takeaway:
        'Soruda değişen şeyleri listele, sonra hangilerinin basıncı etkilediğine bak. Etkilemeyenler sonucu değiştirmez.',
    },
    {
      title: 'Seviye 2 — Tahmini test et',
      prompt:
        'Bir öğrenci “Sıvı basıncını sıvının cinsi de etkiler.” diye tahmin ediyor. Bu tahmini test etmek için nasıl bir deney kurmalıdır? Değişkenleri belirt.',
      steps: [
        { title: '1. Tahmini çevir', body: 'Tahmin şunu söylüyor: aynı derinlikte farklı sıvılar farklı basınç uygulayabilir. Sınanacak değişken sıvının yoğunluğudur.' },
        { title: '2. Bağımsız değişkeni belirle', body: 'Bilerek değiştirilecek şey: kullanılan sıvı (örneğin su ve tuzlu su).' },
        { title: '3. Bağımlı değişkeni belirle', body: 'Ölçülecek şey: delikten fışkıran suyun uzaklığı ya da basınç göstergesinin değeri.' },
        { title: '4. Kontrol edilenleri say', body: 'Delik yüksekliği, sıvı yüksekliği, delik büyüklüğü, kabın konumu ve ölçüm yöntemi sabit tutulmalıdır.' },
        { title: '5. Deneyi kur', body: 'Aynı şişe düzeneğinde, aynı yükseklikte önce su, sonra tuzlu su kullanılır. Aynı delikten fışkırma uzaklığı ölçülür.' },
        { title: '6. Sonucu yorumla', body: 'Yoğunluğu büyük olan sıvı daha uzağa fışkırırsa tahmin desteklenmiş olur. Bu durumda sıvı basıncını yoğunluğun etkilediği sonucuna varılır.' },
      ],
      answer:
        'Delik yüksekliği ve sıvı yüksekliği sabit tutularak yalnız sıvı değiştirilmelidir. Bağımsız değişken sıvının yoğunluğu, bağımlı değişken fışkırma uzaklığıdır.',
      takeaway:
        'Kazanım “tahmin eder ve test eder” diyor: bir tahmini test etmek, onu tek değişkenli bir deneye çevirmek demektir.',
    },
    {
      title: 'Seviye 3 — Prensibi uygulamaya bağla',
      prompt:
        'Bir oto tamirhanesinde ağır bir araç, küçük bir kola basılarak yukarı kaldırılıyor. Bu sistem hangi prensiple çalışır? Prensibi ve çalışma mantığını açıkla.',
      steps: [
        { title: '1. Sistemi tanı', body: 'Sıvı dolu, kapalı ve birbirine bağlı kollardan oluşan bir düzenek var. Bu bir hidrolik sistemdir.' },
        { title: '2. Prensibi yaz', body: 'Pascal prensibi: kapalı bir kaptaki durgun sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir.' },
        { title: '3. Koşulları kontrol et', body: 'Sistem kapalı (sıvı dışarı çıkmıyor) ve sıvı durgun. Prensibin iki koşulu da sağlanıyor.' },
        { title: '4. İletimi anlat', body: 'Küçük kola uygulanan basınç, sıvı yoluyla büyük kola aynen iletilir.' },
        { title: '5. Sonucu yaz', body: 'Basınç büyük kolun geniş yüzeyine etki ettiği için orada büyük bir kuvvet oluşur ve ağır araç kaldırılabilir.' },
        { title: '6. Kavramı adlandır', body: 'Bu, Pascal prensibinin teknolojideki uygulamasıdır; aynı mantık hidrolik frenlerde ve iş makinelerinin kollarında da kullanılır.' },
      ],
      answer:
        'Sistem Pascal prensibiyle çalışır: kapalı kaptaki durgun sıvıya uygulanan basınç her noktaya aynen iletilir ve geniş yüzeyde büyük bir kuvvete dönüşür.',
      takeaway:
        'Bir teknolojiyi açıklamak, arkasındaki prensibi adıyla söyleyip koşullarını göstermektir.',
    },
  ],

  dailyLife: {
    title: 'Sıvı ve gaz basıncı hayatın neresinde?',
    body:
      'Aşağıdaki örneklerin hepsi bu dersteki iki değişkenle ya da Pascal prensibiyle açıklanır.',
    links: [
      'Baraj duvarları derinlikte basınç arttığı için aşağıya doğru kalınlaştırılır.',
      'Su depoları yüksek yerlere kurulur; böylece musluklardaki su basıncı artar.',
      'Dalgıçlar derinlerde artan basınca karşı özel donanım kullanır.',
      'Hidrolik frenler ve oto liftleri Pascal prensibiyle çalışır.',
      'Pipetle içecek içmek açık hava basıncı sayesinde mümkün olur.',
      'Vantuz, altındaki hava boşaltıldığında açık hava basıncıyla yüzeye bastırılır.',
    ],
  },

  questionClue: {
    concept: 'Sıvı ve gaz basıncı sorusu',
    statement:
      'Soruda farklı biçimlerde kaplar, farklı derinlikte noktalar ya da bir hidrolik düzenek varsa, ölçülen şey bu dersin ilişkileridir.',
    clues: [
      'Farklı biçimde kaplarda aynı ya da farklı sıvı yüksekliği',
      '“Hangisi sıvı basıncını etkilemez?” kalıbı',
      'Şişenin farklı yüksekliklerine açılmış delikler',
      'Pipet, vantuz, enjektör gibi araçların anlatılması',
      'Kapalı bir kapta sıvıya uygulanan kuvvetten söz edilmesi',
    ],
    reasoning:
      'Bu işaretler tek bir elemeyi ister: derinlik ve yoğunluk dışındaki her şeyi ayıkla. Kabın biçimi, taban alanı ve sıvı miktarı sıvı basıncını etkilemez.',
    boundary:
      'Bu ipuçlarını “su çoksa basınç çoktur” gibi bir kısayola çevirme; bu, konunun en yaygın yanılgısıdır. Ayrıca gaz basıncının değişkenlerini arama: program bu düzeyde onlara girilmemesini ister.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar F.8.3.1.2 ve F.8.3.1.3 kazanımlarının ölçülebileceği soru biçimleridir.',
    patterns: [
      'Farklı biçimde kaplarda taban basıncının karşılaştırılması',
      'Sıvı basıncını etkilemeyen değişkenin sorulması',
      'Delikli şişe düzeneğinde fışkırma uzaklıklarının yorumlanması',
      'Bir tahmini test edecek deneyin seçilmesi',
      'Açık hava basıncının varlığını gösteren örneğin belirlenmesi',
      'Bir teknolojik uygulamanın hangi prensiple çalıştığının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Birbirine bağlı, biçimleri farklı kaplara su dolduruluyor. Su hepsinde aynı seviyede duruyor. Bu gözlem sıvı basıncı hakkında ne söyler?',
      hint: 'Seviyeyi belirleyen şey ne?',
      answer:
        'Bu gözlem, sıvı basıncının **kabın biçiminden bağımsız** olduğunu gösterir. Su, basınçların dengelendiği noktada durur; basınç da derinliğe bağlı olduğu için bütün kaplarda aynı yükseklikte dengelenir. Kapların biçimi ya da genişliği farklı olsa bile sonuç değişmez. Eğer kabın biçimi basıncı etkileseydi, su kaplarda farklı seviyelerde dururdu.',
    },
    {
      prompt:
        'Pipetle su içerken suyu yukarı çeken şey nedir? “Emme kuvveti” açıklaması doğru mudur?',
      hint: 'Pipetin içindeki basınca ne oluyor?',
      answer:
        'Doğru değildir. Pipetten hava çektiğinde pipetin içindeki basınç azalır. Bardaktaki suyun yüzeyine etki eden **açık hava basıncı** ise değişmez ve suyu pipetten yukarı **iter.** Yani su çekilmiyor, itiliyor. Bu gözlem, gazların da basınç uyguladığının ve çevremizde bir açık hava basıncı bulunduğunun kanıtlarından biridir.',
    },
    {
      prompt:
        'Pascal prensibini yazarken “kapalı kap” ve “durgun sıvı” koşullarını atlamak neden sorun olur?',
      hint: 'Koşullar sağlanmazsa ne değişir?',
      answer:
        'Çünkü prensip yalnız bu koşullarda geçerlidir. Kap açıksa sıvı yer değiştirebilir ve uygulanan basınç her noktaya aynen iletilmez. Sıvı akmaktaysa da durum değişir. Hidrolik sistemlerin kapalı olarak tasarlanmasının nedeni tam olarak budur: prensibin işleyebilmesi için sıvının kapalı bir sistemde ve durgun olması gerekir.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey hesap değil, doğru değişkeni seçmek',
    body:
      'Kazanımın fiili “tahmin eder ve tahminlerini **test eder**” biçiminde. Program ayrıca matematiksel bağıntılara ve gaz basıncının değişkenlerine girilmemesini ister. Üçü birlikte şunu söyler: bu konuda senden hesap beklenmez; hangi değişkenin etkili olduğunu seçmen, etkisiz olanları ayıklaman ve bir tahmini test edecek deneyi kurabilmen beklenir. MEB merkezî sınav kılavuzu da soruların yorumlama, analiz ve bilimsel süreç becerilerini ölçecek nitelikte hazırlandığını belirtir.',
    measures: [
      'Sıvı basıncını etkileyen iki değişkeni bilme',
      'Kabın biçimi ve sıvı miktarının etkisiz olduğunu gerekçesiyle söyleyebilme',
      'Bir tahmini test edecek tek değişkenli deneyi kurabilme',
      'Gözlem verisinden derinlik–basınç ilişkisini çıkarabilme',
      'Açık hava basıncının varlığını örnekle gösterebilme',
      'Pascal prensibini koşullarıyla birlikte ifade edip uygulamaya bağlayabilme',
    ],
  },

  simulationTable: {
    title: 'Dört kapla yapılan bir çalışmanın kaydı',
    columns: ['Kap', 'Kabın biçimi', 'Sıvı', 'Sıvı yüksekliği', 'Kaptaki sıvı miktarı'],
    rows: [
      ['K', 'Dar silindir', 'Su', '20 cm', 'Az'],
      ['L', 'Geniş silindir', 'Su', '20 cm', 'Çok'],
      ['M', 'Geniş silindir', 'Su', '30 cm', 'Çok'],
      ['N', 'Dar silindir', 'Tuzlu su (daha yoğun)', '20 cm', 'Az'],
    ],
    caption: 'Dört kap da aynı zemine konmuş ve taban basınçları aynı yöntemle karşılaştırılmıştır.',
  },

  simulation: {
    title: 'Mini uygulama — özgün kap kaydı',
    passage: `Bir öğrenci dört kapla çalışıyor ve her kabın tabanına uygulanan sıvı basıncını karşılaştırmak istiyor. Kapların özellikleri yukarıdaki tabloda verilmiştir.

Öğrenci, taban basıncı **birbirine eşit olan** kapları bulmaya çalışıyor.`,
    question: 'Bu kayda göre taban basınçları eşit olan kaplar hangileridir?',
    options: [
      {
        text: 'K ve L',
        explanation:
          'Doğru cevap. İki kapta da aynı sıvı (su) ve aynı sıvı yüksekliği (20 cm) var. Kabın biçimi ve içindeki sıvı miktarı sıvı basıncını etkilemediği için taban basınçları eşittir.',
      },
      {
        text: 'L ve M',
        explanation:
          'İki kabın biçimi ve sıvısı aynı; ama sıvı yükseklikleri farklı (20 cm ve 30 cm). Derinlik sıvı basıncını etkilediği için M’nin taban basıncı daha büyüktür.',
      },
      {
        text: 'K ve N',
        explanation:
          'İki kapta da yükseklik 20 cm; ama sıvılar farklı. Tuzlu su daha yoğun olduğu için aynı derinlikte daha büyük basınç uygular; basınçlar eşit değildir.',
      },
      {
        text: 'M ve N',
        explanation:
          'Bu iki kapta hem sıvı yüksekliği hem sıvının yoğunluğu farklı. İki değişken birden değiştiği için basınçların eşit olması beklenemez.',
      },
      {
        text: 'Dördünde de taban basıncı eşittir',
        explanation:
          'Eşitlik için derinliğin ve yoğunluğun aynı olması gerekir. M’de yükseklik, N’de sıvının yoğunluğu farklıdır; bu yüzden dördü birden eşit olamaz.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru dört satırı ikişerli karşılaştırmayı istiyor. Yöntem: yalnız iki sütuna bak — sıvı yüksekliği ve sıvının cinsi. Kabın biçimi ve sıvı miktarı sütunları bilerek konmuş çeldiricilerdir.',
    critical_point:
      'Kritik nokta K ile L’nin sıvı miktarlarının farklı olmasıdır. “Miktar farklıysa basınç da farklıdır” diye düşünen öğrenci bu seçeneği eler ve yanılır. Oysa tabandaki basıncı belirleyen, kaptaki toplam sıvı değil, o noktanın üzerindeki sütunun yüksekliğidir.',
    takeaway:
      'Tabloda verilen her sütun sonucu etkilemez. Hangi sütunların etkili olduğunu bilmek, sorunun yarısını çözer.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Aşağıdakilerden hangisi sıvı basıncını **etkilemez**?',
      options: [
        'Sıvının derinliği',
        'Sıvının yoğunluğu',
        'Kabın biçimi ve içindeki sıvı miktarı',
        'Sıvının cinsi',
      ],
      answer_index: 2,
      explanation:
        'Sıvı basıncını yalnız iki değişken etkiler: derinlik ve sıvının yoğunluğu. Kabın biçimi ve kaptaki sıvı miktarı basıncı etkilemez; çünkü bir noktadaki basıncı belirleyen, kaptaki toplam sıvı değil, o noktanın üzerindeki sıvı sütunudur. “Sıvının cinsi” seçeneği ise yoğunlukla ilgilidir; farklı cins sıvıların yoğunlukları farklı olduğu için bu bir etkili değişkendir.',
    },
    {
      purpose: 'apply',
      question:
        'Bir şişenin alt, orta ve üst kısmına aynı büyüklükte üç delik açılıp şişe suyla dolduruluyor. Delikler açıldığında ne gözlenir?',
      options: [
        'Üç delikten de su aynı uzaklığa fışkırır',
        'En üstteki delikten çıkan su en uzağa fışkırır',
        'En alttaki delikten çıkan su en uzağa fışkırır',
        'Suyun fışkırma uzaklığı deliklerin konumuna bağlı değildir',
      ],
      answer_index: 2,
      explanation:
        'Sıvı basıncı derinlikle artar. En alttaki delik en derin noktada bulunduğu için oradaki sıvı basıncı en büyüktür ve su en uzağa fışkırır. Delikler aynı büyüklükte olduğu için fark delik boyutundan değil, yalnız derinlikten gelir. Bu deney, derinlik–basınç ilişkisinin en bilinen gösterimidir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Sıvıya uygulanan basınç her zaman sıvının her noktasına aynen iletilir.” diyor. Bu ifadenin eksiği nedir?',
      options: [
        'Prensibin yalnız kapalı kaptaki durgun sıvı için geçerli olduğunu belirtmemek',
        'Sıvı basıncının derinlikle arttığını söylememek',
        'Basınç birimini yazmamak',
        'Gazların da basınç uyguladığını belirtmemek',
      ],
      answer_index: 0,
      explanation:
        'Pascal prensibi “**kapalı** bir kaptaki **durgun** sıvıya uygulanan basınç, sıvının her noktasına aynen iletilir” biçimindedir. Bu iki koşul prensibin parçasıdır ve atlanamaz. Açık bir kapta sıvı yer değiştirebilir; bu durumda basınç aynen iletilmez. Hidrolik sistemlerin kapalı tasarlanmasının nedeni de budur.',
    },
  ],

  summary: [
    'Sıvılar akışkandır; basıncı yalnız tabana değil, her yöne uygular.',
    'Sıvı basıncını iki değişken etkiler: derinlik ve sıvının yoğunluğu.',
    'Derinlik arttıkça sıvı basıncı artar; baraj duvarları bu yüzden aşağıda kalınlaşır.',
    'Aynı derinlikte, yoğunluğu büyük olan sıvı daha büyük basınç uygular.',
    'Kabın biçimi, taban alanı ve kaptaki sıvı miktarı sıvı basıncını etkilemez.',
    'Bir noktadaki basıncı belirleyen, o noktanın üzerindeki sıvı sütunudur.',
    'Gazların da ağırlığı vardır ve basınç uygularlar.',
    'Çevremizi saran havanın uyguladığı basınca açık hava basıncı denir.',
    'Pipet, vantuz ve enjektör açık hava basıncının varlığını gösterir.',
    'Pascal prensibi: kapalı kaptaki durgun sıvıya uygulanan basınç her noktaya aynen iletilir.',
    'Hidrolik fren, hidrolik kaldırıcı ve iş makinelerinin kolları bu prensiple çalışır.',
    'Bu düzeyde basınç formülü ve gaz basıncının değişkenleri istenmez.',
  ],

  next: [
    'Periyodik Sistem: Grup, Periyot, Metal–Ametal (F.8.4.1.1, F.8.4.1.2)',
    'Maddenin Isı ile Etkileşimi (F.8.4.5.1 — aynı değişken kuralı orada da işler)',
    'Katı Basıncı: Ağırlık mı, Yüzey mi? (tekrar için)',
  ],
})

export default lesson
