import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.2 DNA ve Genetik Kod · 4. ders
 * Kazanım : F.8.2.3.1 · F.8.2.3.2 · F.8.2.3.3 · F.8.2.4.1
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAMIN AÇIKLAMASI (resmiProgram.js'ten basılır)
 *   F.8.2.4.1 → "Adaptasyonların kalıtsal olduğu vurgulanır."
 *   F.8.2.3.1–3 için açıklama yoktur.
 *   Konu / Kavramlar (F.8.2.4): "Adaptasyon, doğal seçilim, varyasyon" —
 *   bu yüzden adaptasyon bölümünde doğal seçilim ve varyasyon adıyla
 *   tanımlanır.
 *
 * KAPSAM KARARI
 * Üç kavram tek derste toplandı; çünkü kazanım F.8.2.3.3 doğrudan
 * "aradaki farklar" üzerine kurulu ve adaptasyon da ancak kalıtsallık
 * ekseninde bu ikisiyle birlikte ayırt edilebiliyor. Ayrı derslerde
 * anlatmak, öğrencinin en çok karıştırdığı ayrımı görünmez kılardı.
 *
 * Mutasyon çeşitlerinin adlandırılması (gen/kromozom mutasyonu, sendrom
 * adları) 8. sınıf kazanımında istenmez; bu ders örnek ve ayrım
 * düzeyinde kalır.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-mutasyon-modifikasyon-adaptasyon',
  topic: 'DNA ve Genetik Kod',
  order: 4,
  title: 'Mutasyon, Modifikasyon ve Adaptasyon',
  subtitle:
    'Üç kavramın tek ayırt edici sorusu var: DNA değişti mi, değişiklik yavruya geçer mi?',
  minutes: 45,
  kazanimlar: ['F.8.2.3.1', 'F.8.2.3.2', 'F.8.2.3.3', 'F.8.2.4.1'],
  prerequisites: [
    { topic: 'DNA’nın Yapısı: Nükleotidden Kromozoma', why: 'Mutasyonun DNA’daki bir değişiklik olduğunu anlamak için gereklidir.' },
    { topic: 'Kalıtım Kavramları: Görünen ve Yazılı Olan', why: 'Genotip–fenotip ayrımı kurulmadan bu üç kavram ayırt edilemez.' },
  ],
  outcomes: [
    'Mutasyonu ve modifikasyonu örnek üzerinden tanıyabileceksin.',
    'Bir değişikliğin yavruya aktarılıp aktarılmayacağını gerekçesiyle söyleyebileceksin.',
    'Mutasyon ile modifikasyonu bir tabloda karşılaştırabileceksin.',
    'Adaptasyonun neden kalıtsal olduğunu açıklayabileceksin.',
    'Bir örnek verildiğinde üç kavramdan hangisi olduğunu karar ağacıyla bulabileceksin.',
  ],

  opening: {
    title: 'Aynı yumurtadan kraliçe de çıkar, işçi de',
    lead: 'Bir arı kovanında kraliçe arı ile işçi arılar genotip bakımından aynı olabilir. Farkı yaratan besindir.',
    body: `Bir arı kovanında iki farklı arı düşün. Biri kraliçe: iri, uzun ömürlü, yumurta bırakabiliyor. Öbürü işçi: küçük, kısa ömürlü, yumurta bırakmıyor.

Şaşırtıcı olan şu: bu iki arı genotip bakımından aynı olabilir. Aradaki farkı yaratan, larva döneminde aldıkları **besindir.** Kraliçe olacak larva farklı beslenir ve farklı bir birey olarak gelişir.

Burada genlerde hiçbir değişiklik yok. Değişen, çevrenin sunduğu koşul.

Şimdi bambaşka bir örnek: bir bitkinin tohumlarından biri, DNA’sında oluşan bir değişiklik yüzünden farklı renkte çiçek açıyor. Bu bitkinin yavrularında da aynı renk görülüyor.

İki örnek de bir “değişiklik” içeriyor. Ama ikisi aynı şey değil.

**Birinci örnekte DNA değişmedi, yalnız görünüş değişti ve bu değişiklik yavruya geçmez.**
**İkinci örnekte DNA değişti ve bu değişiklik yavruya geçebilir.**

Bu derste üç kavramı kuracağız: **mutasyon, modifikasyon, adaptasyon.** Üçü de bir değişiklik ya da uyumla ilgilidir; ama aralarındaki fark nettir.

Öğrencilerin bu üç kavramı karıştırmasının nedeni, hepsini ayrı ayrı ezberlemeye çalışmaktır. Oysa üçünü birbirinden ayıran **tek bir soru** vardır ve o soruyu bu derste kuracağız:

> **DNA’da bir değişiklik var mı, ve bu değişiklik yavruya aktarılır mı?**

Kazanım F.8.2.3.3 zaten “farklar ile ilgili çıkarımda bulunur” diyor. Yani senden istenen tanımları ezberlemek değil, bir örnek verildiğinde hangisi olduğunu **ayırt edebilmek.**`,
  },

  concepts: [
    {
      term: 'Mutasyon',
      body: 'DNA’da meydana gelen değişikliktir. Kendiliğinden oluşabileceği gibi bazı dış etkenlerle de oluşabilir. **Kalıtsaldır**: üreme hücrelerinde oluşmuşsa yavruya aktarılır.',
    },
    {
      term: 'Modifikasyon',
      body: 'Çevre koşullarının etkisiyle **fenotipte** oluşan değişikliktir. DNA’da bir değişiklik yoktur; bu yüzden **kalıtsal değildir** ve yavruya aktarılmaz.',
    },
    {
      term: 'Adaptasyon (uyum)',
      body: 'Bir canlının yaşadığı çevrede hayatta kalmasını ve üremesini kolaylaştıran **kalıtsal** özelliklerdir. Uzun süre içinde ortaya çıkar ve yavruya aktarılır.',
    },
    {
      term: 'Varyasyon',
      body: 'Aynı türün bireyleri arasındaki **kalıtsal farklılıklardır.** Doğal seçilimin üzerinde çalıştığı çeşitliliği sağlar.',
    },
    {
      term: 'Doğal seçilim',
      body: 'Çevreye uygun kalıtsal özellikleri taşıyan bireylerin daha çok hayatta kalıp daha çok üremesi ve bu özelliklerin kuşaklar boyunca **yaygınlaşmasıdır.**',
    },
    {
      term: 'Mutasyona neden olan etkenler',
      body: 'Radyasyon, bazı kimyasal maddeler ve bazı ışınlar DNA’da değişikliğe yol açabilir. Mutasyonlar kendiliğinden de oluşabilir.',
    },
    {
      term: 'Üreme hücresi ve vücut hücresi',
      body: 'Bir değişikliğin yavruya geçip geçmemesi, **hangi hücrede oluştuğuna** bağlıdır. Üreme hücresinde oluşan mutasyon yavruya aktarılır; yalnız vücut hücresinde oluşan mutasyon aktarılmaz.',
    },
  ],

  why: {
    question: 'Neden bazı değişiklikler yavruya geçiyor, bazıları geçmiyor?',
    body: `Cevap tek bir yerde saklı: **değişiklik DNA’da mı oldu?**

Yavruya aktarılan şey, ebeveynin görünüşü değildir. Aktarılan şey **genlerdir.** Yavru, ebeveyninden üreme hücresi yoluyla gen alır. Öyleyse bir değişikliğin yavruya geçebilmesi için o değişikliğin **genlerde yazılı olması** gerekir.

Bunu iki örnekle görelim.

**Örnek 1 — Güneşte koyulaşan ten rengi.** Güneşte kalan bir insanın teni koyulaşır. Bu, çevrenin (güneş ışığının) fenotipte yaptığı bir değişikliktir. Kişinin genlerinde yazan değişmemiştir. Bu yüzden çocuğu koyu tenli doğmaz. Bu bir **modifikasyondur.**

**Örnek 2 — DNA’da oluşan bir değişiklik.** Bir canlının üreme hücresindeki DNA’da bir değişiklik olursa, bu değişiklik yavruya aktarılan genlerin içindedir. Yavru da bu değişikliği taşır. Bu bir **mutasyondur.**

Aradaki fark artık net: modifikasyon “boyamak” gibidir, mutasyon “yazıyı değiştirmek” gibi. Boyanın rengi yeni kopyaya geçmez; ama yazı değiştiyse kopya da değişik çıkar.

Şimdi adaptasyona gelelim. Adaptasyon, canlının çevresinde hayatta kalmasını kolaylaştıran özelliklerdir: develerin su kaybını azaltan yapısı, kutup ayısının kalın yağ tabakası, kaktüsün yaprak yerine dikene sahip olması gibi.

Burada çok önemli bir nokta var ve **program bunun vurgulanmasını açıkça ister: adaptasyonlar kalıtsaldır.**

Bu neden önemli? Çünkü öğrencilerin büyük bölümü adaptasyonu şöyle anlıyor: “canlı çevreye alışır ve zamanla değişir.” Bu yanlıştır. Bir canlı, hayatı boyunca çevreye alışarak kalıtsal bir özellik kazanmaz. Adaptasyon, bir bireyin yaşamı içinde ortaya çıkan bir alışkanlık değil, **kuşaklar boyunca aktarılan kalıtsal bir özelliktir.**

Üç kavramı tek soruyla ayırt edebilirsin:

**DNA değişti mi?** Hayırsa → modifikasyon. Evetse → mutasyon.
**Kalıtsal ve çevrede yaşama avantajı sağlıyor mu?** Evetse → adaptasyon.`,
  },

  mechanism: {
    title: 'Bir değişiklik yavruya nasıl geçer?',
    lead: 'Zinciri takip edersen, hangi değişikliğin aktarılacağını ezberlemeden bulursun.',
    intro:
      'Aşağıdaki adımlar, bir değişikliğin yavruya aktarılıp aktarılmayacağını belirleyen yolu gösterir.',
    steps: [
      {
        title: '1. Bir etken canlıyı etkiler',
        body: 'Etken çevresel olabilir (besin, ışık, sıcaklık) ya da DNA’yı etkileyen bir etken olabilir (radyasyon, bazı kimyasallar).',
      },
      {
        title: '2. Değişiklik nerede oluştu?',
        body: 'Değişiklik yalnız fenotipte mi kaldı, yoksa DNA’da mı oldu? Ayrım buradan başlar.',
      },
      {
        title: '3. Yalnız fenotip değiştiyse',
        body: 'DNA’da yazan aynıdır. Bu bir modifikasyondur. Yavruya aktarılacak genler değişmediği için değişiklik yavruya geçmez.',
      },
      {
        title: '4. DNA değiştiyse: hangi hücrede?',
        body: 'Değişiklik yalnız vücut hücrelerinde oluşmuşsa yavruya aktarılmaz; çünkü yavruya gen aktaran hücre üreme hücresidir.',
      },
      {
        title: '5. Üreme hücresinde oluştuysa',
        body: 'Değişiklik, yavruya aktarılan genlerin içindedir. Yavru bu değişikliği taşır. Mutasyon bu yolla kuşaklara geçer.',
      },
      {
        title: '6. Değişiklik avantaj sağlıyorsa',
        body: 'Kalıtsal bir özellik, canlının yaşadığı çevrede hayatta kalmasını ve üremesini kolaylaştırıyorsa, kuşaklar içinde yaygınlaşır. Uyum (adaptasyon) böyle ortaya çıkar.',
      },
    ],
    takeaway:
      'Zincirin kırılma noktası 2. adımdır: “DNA değişti mi?” sorusuna verdiğin cevap, geri kalan her şeyi belirler.',
  },

  comparison: {
    title: 'Mutasyon ile modifikasyonun farkları',
    columns: ['Mutasyon', 'Modifikasyon'],
    rows: [
      { label: 'DNA’da değişiklik var mı?', values: ['Var', 'Yok'] },
      { label: 'Neyi etkiler?', values: ['Genotipi (ve fenotipe yansıyabilir)', 'Yalnız fenotipi'] },
      { label: 'Kalıtsal mı?', values: ['Kalıtsaldır', 'Kalıtsal değildir'] },
      { label: 'Yavruya geçer mi?', values: ['Üreme hücresindeyse geçer', 'Geçmez'] },
      { label: 'Nedeni ne olabilir?', values: ['Radyasyon, bazı kimyasallar; kendiliğinden', 'Besin, ışık, sıcaklık, nem gibi çevre koşulları'] },
      { label: 'Kalıcı mı?', values: ['DNA’da kaldığı için kalıcıdır', 'Koşul ortadan kalkınca genellikle geri döner'] },
      { label: 'Örnek', values: ['DNA’daki değişiklik sonucu farklı renkte çiçek açan bitki', 'Işık miktarına göre yaprak rengi değişen bitki'] },
    ],
    insight:
      'Tablonun ilk satırı geri kalan bütün satırları belirler. “DNA değişti mi?” sorusuna verdiğin cevap, kalıtsallığı da aktarımı da kalıcılığı da tayin eder.',
  },

  traps: [
    {
      title: 'Adaptasyonu “canlının çabayla kazandığı özellik” sanmak',
      wrong: 'Zürafalar yüksek dallara uzanmaya çalıştıkları için boyunları uzadı ve bunu yavrularına aktardılar.',
      right: 'Bir canlı, yaşamı boyunca kullanarak ya da çabalayarak kalıtsal bir özellik kazanmaz. **Adaptasyonlar kalıtsaldır**; bireyin çabasıyla değil, kalıtım yoluyla kuşaklara aktarılır.',
      body: 'Program bu noktanın vurgulanmasını açıkça ister. Bir sporcunun gelişen kasları yavrusuna geçmez; çünkü bu bir modifikasyondur, DNA’da bir değişiklik değildir.',
    },
    {
      title: 'Her mutasyonun zararlı olduğunu sanmak',
      wrong: 'Mutasyon her zaman canlıya zarar verir.',
      right: 'Mutasyonların bir kısmı zararlıdır, bir kısmı canlıyı etkilemez, küçük bir kısmı ise canlıya **avantaj** sağlayabilir.',
      body: 'Avantaj sağlayan kalıtsal değişikliklerin kuşaklar içinde yaygınlaşması, canlıların çevrelerine uyumunun kaynağıdır. Bu yüzden “mutasyon = kötü” denklemi bilimsel olarak yanlıştır.',
    },
    {
      title: 'Modifikasyonu kalıcı sanmak',
      wrong: 'Bir bitkinin çevre etkisiyle değişen görünüşü artık kalıcıdır.',
      right: 'Modifikasyon çevre koşuluna bağlıdır. Koşul ortadan kalktığında değişiklik genellikle geri döner; çünkü genotipte bir değişiklik olmamıştır.',
      body: 'Güneşte koyulaşan tenin zamanla eski rengine dönmesi bunun günlük hayattan örneğidir.',
    },
    {
      title: 'Vücut hücresindeki mutasyonun yavruya geçeceğini sanmak',
      wrong: 'DNA’da bir değişiklik olduysa bu mutlaka yavruya aktarılır.',
      right: 'Yavruya gen aktaran hücre **üreme hücresidir.** Yalnız vücut hücrelerinde oluşan bir mutasyon yavruya aktarılmaz.',
      body: 'Bu ayrım, “mutasyon kalıtsaldır” ifadesinin doğru okunmasını sağlar: mutasyon kalıtsal bir değişikliktir, ama aktarılması için üreme hücresinde bulunması gerekir.',
    },
  ],

  variables: {
    title: 'Gözlemle ayırt et: bu değişiklik kalıtsal mı?',
    lead:
      'Bir değişikliğin modifikasyon mu olduğunu anlamanın yolu, çevre koşulunu değiştirip sonucu gözlemektir.',
    question: 'Aynı genotipe sahip bitkiler farklı ışık koşullarında farklı görünür mü, bu fark yavrulara geçer mi?',
    independent: {
      label: 'Bitkinin aldığı ışık miktarı',
      note: 'Ben değiştiriyorum: bol ışık / az ışık',
    },
    setup: {
      label: 'Aynı genotipli fasulye bitkileri',
      note: 'Aynı bitkiden alınmış, genotipi aynı fideler',
    },
    dependent: {
      label: 'Bitkinin yaprak rengi ve boyu',
      note: 'Ölçtüğüm: görünüşteki fark',
    },
    controlled: [
      'Bitkilerin genotipi (aynı bitkiden alınmış)',
      'Toprak türü ve miktarı',
      'Verilen su miktarı',
      'Ortam sıcaklığı',
    ],
    caption:
      'Genotip bilerek sabit tutuluyor. Böylece gözlenen farkın tek kaynağı ışık olur; fark genden gelemez, çünkü genotip aynıdır.',
  },

  experiment: {
    title: 'Gözlem nasıl yapılır?',
    intro:
      'Bu, sınıfta yapılabilecek bir gözlem tasarımıdır. Amaç bir hesap yapmak değil, değişikliğin kaynağını belirlemektir.',
    steps: [
      { title: '1. Aynı genotipli fideler hazırla', body: 'Aynı bitkiden alınan fideler kullanılır; böylece genotipin aynı olduğundan emin oluruz.' },
      { title: '2. İki gruba ayır', body: 'Fideler iki gruba ayrılır. Bir grup bol ışıklı bir yere, öbür grup az ışıklı bir yere konur.' },
      { title: '3. Öbür koşulları sabit tut', body: 'Toprak, su ve sıcaklık iki grupta da aynı tutulur. Yoksa farkın nereden geldiğini söyleyemeyiz.' },
      { title: '4. İki hafta gözle ve kaydet', body: 'Yaprak rengi ve bitki boyu düzenli aralıklarla kaydedilir.' },
      { title: '5. Koşulu tersine çevir', body: 'Az ışıkta kalan bitkiler bol ışıklı ortama alınır. Görünüşün değişip değişmediği gözlenir.' },
      { title: '6. Yavruları incele', body: 'Her iki gruptan elde edilen tohumlar aynı koşullarda ekilir. Yavru bitkiler arasında bir fark görülüp görülmediği kaydedilir.' },
    ],
    takeaway:
      'Son iki adım kritiktir: koşul değişince fark ortadan kalkıyor ve yavrularda fark görülmüyorsa, gözlenen değişiklik bir modifikasyondur.',
  },

  dataTable: {
    title: 'Gözlem kaydı: iki grup, dört ölçüm',
    columns: ['Grup', 'Işık koşulu', 'Yaprak rengi', 'Ortalama boy', 'Yavrularda fark'],
    rows: [
      ['1. grup', 'Bol ışık', 'Koyu yeşil', '24 cm', 'Yok'],
      ['2. grup', 'Az ışık', 'Açık yeşil', '31 cm', 'Yok'],
      ['2. grup (ışığa alındıktan 10 gün sonra)', 'Bol ışık', 'Koyu yeşil', '32 cm', 'Yok'],
    ],
    caption:
      'Üçüncü satır belirleyicidir: koşul değişince yaprak rengi eski hâline dönmüş. Son sütun da yavrularda fark olmadığını gösteriyor. İki kanıt birlikte, bunun modifikasyon olduğunu söyler. *(Sayılar bu ders için kurgulanmış örnek gözlem verisidir.)*',
  },

  deepDiveSections: [
    {
      id: 'lgs-fen-mutasyon-nedenler',
      title: 'Mutasyon: nedenleri ve sonuçları',
      lead: 'Mutasyon bir “felaket” değil, DNA’daki bir değişikliktir. Sonucu değişikliğin yerine bağlıdır.',
      blocks: [
        {
          id: 'lgs-fen-mutasyon-nedenler-anlatim',
          type: 'prose',
          body: `Mutasyon, DNA’da meydana gelen değişikliktir. Nedenlerine bakalım.

**Kendiliğinden oluşabilir.** DNA kendini eşlerken yanlış bir nükleotid yerleşebilir. Geçen derste gördük: hücrede bu hataları onaran mekanizmalar bulunur. Ancak onarılamayan hatalar kalıcı bir değişikliğe dönüşür — yani bir mutasyona.

**Dış etkenlerle oluşabilir.** Bazı etkenler DNA’da değişiklik olasılığını artırır:

- Radyasyon ve bazı ışınlar
- Bazı kimyasal maddeler
- Aşırı ve bilinçsiz ilaç kullanımı gibi etkenler

Şimdi sonuçlarına bakalım. Öğrencilerin çoğu mutasyonu doğrudan “zarar” ile eşitler. Bu eksik bir bakıştır. Mutasyonların sonuçları üç başlıkta toplanır:

**1. Zararlı olabilir.** DNA’da önemli bir bölgede oluşan değişiklik, canlının yaşamını olumsuz etkileyebilir.

**2. Etkisiz olabilir.** Değişiklik canlıda gözle görülür bir fark yaratmayabilir.

**3. Yararlı olabilir.** Küçük bir kısım mutasyon, canlıya yaşadığı çevrede **avantaj** sağlayabilir.

Üçüncü madde bu dersin sonraki bölümünün kapısıdır: avantaj sağlayan kalıtsal özellikler kuşaklar içinde yaygınlaşır ve canlıların çevrelerine uyumunu oluşturur.

Bir ayrım daha kuralım — bu, soruların sık ölçtüğü bir noktadır. Mutasyonun **kalıtsal olması** ile **yavruya aktarılması** aynı cümlenin iki farklı yanıdır:

- Mutasyon DNA’da olduğu için **kalıtsal bir değişikliktir.**
- Ama yavruya aktarılabilmesi için **üreme hücresinde** bulunması gerekir.
- Yalnız vücut hücrelerinde oluşan bir mutasyon, o bireyde kalır; yavruya geçmez.

*Kapsam notu: bu düzeyde mutasyon çeşitlerini adlandırman ya da belirli hastalık adlarını ezberlemen istenmez. Kazanım “örneklerden yola çıkarak açıklar” diyor; yani örneği tanıyıp ne olduğunu söyleyebilmen yeterlidir.*`,
        },
        {
          id: 'lgs-fen-mutasyon-nedenler-tablo',
          type: 'table',
          interactive: true,
          title: 'Mutasyonun sonuçları üç başlıkta',
          columns: ['Sonuç', 'Ne olur?', 'Kuşaklar içinde ne olur?'],
          rows: [
            ['Zararlı', 'Canlının yaşamını olumsuz etkiler', 'Genellikle yaygınlaşmaz'],
            ['Etkisiz', 'Gözle görülür bir fark yaratmaz', 'Taşınmaya devam edebilir'],
            ['Yararlı', 'Canlıya yaşadığı çevrede avantaj sağlar', 'Kuşaklar içinde yaygınlaşabilir'],
          ],
          caption:
            'Son satır, adaptasyonun nereden geldiğini açıklar: avantaj sağlayan kalıtsal özellikler kuşaklar boyunca daha çok görülür hâle gelir.',
        },
        {
          id: 'lgs-fen-mutasyon-nedenler-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda “mutasyon her zaman zararlıdır” ifadesi çok sık çeldirici olarak kullanılır. Bu ifadeyi gördüğünde yanlış olduğunu hatırla: mutasyonun sonucu zararlı, etkisiz ya da yararlı olabilir.',
        },
      ],
    },

    {
      id: 'lgs-fen-mutasyon-adaptasyon',
      title: 'Adaptasyon: neden kalıtsal olmak zorunda?',
      lead: 'Programın açıkça vurgulanmasını istediği nokta budur; ve öğrencilerin en çok yanıldığı yer de burasıdır.',
      blocks: [
        {
          id: 'lgs-fen-mutasyon-adaptasyon-anlatim',
          type: 'prose',
          body: `**Adaptasyon (uyum)**, bir canlının yaşadığı çevrede hayatta kalmasını ve üremesini kolaylaştıran kalıtsal özelliklerdir.

Örneklerle görelim:

- **Deve:** su kaybını azaltan yapısı ve sıcak iklime dayanıklılığı
- **Kutup ayısı:** kalın yağ tabakası ve yoğun kürkü
- **Kaktüs:** su kaybını azaltmak için yaprakların diken biçimini alması
- **Çöl bitkileri:** derine inen kök yapısı
- **Bazı hayvanlar:** bulundukları ortama benzeyen renk ve desenler

Bütün bu örneklerin ortak özelliği nedir? **Hepsi kalıtsaldır.** Yani bu özellikler yavruya aktarılır.

Şimdi en kritik noktaya gelelim. Öğrencilerin büyük bölümü adaptasyonu şöyle anlıyor:

> “Canlı çevreye alışır, zamanla değişir ve bu değişikliği yavrularına aktarır.”

Bu **yanlıştır.** Neden yanlış olduğunu artık biliyorsun: bir bireyin yaşamı boyunca çevreye alışarak kazandığı özellikler fenotipte kalır; DNA’da bir değişiklik yaratmaz. Yani bunlar **modifikasyondur** ve yavruya aktarılmaz.

Doğru anlayış şudur: **Adaptasyon kalıtsal özelliklere dayanır.** Bir popülasyonda zaten var olan kalıtsal farklardan, o çevrede avantaj sağlayanlar kuşaklar boyunca daha çok aktarılır ve yaygınlaşır. Süreç bir bireyin yaşamı içinde değil, **kuşaklar boyunca** gerçekleşir.

Bu süreçteki iki kavramın adını koyalım; ikisi de programın kavram listesinde yer alır.

**Varyasyon:** Aynı türün bireyleri arasındaki **kalıtsal farklılıklardır.** Bir tavşan popülasyonunda kimi bireylerin kürkü daha kalın, kimininki daha incedir; kimi daha açık, kimi daha koyu renklidir. Mutasyonlar ve üremede genlerin farklı biçimlerde bir araya gelmesi bu çeşitliliğin kaynaklarıdır.

**Doğal seçilim:** Çevre koşullarına uygun kalıtsal özellikleri taşıyan bireylerin **daha çok hayatta kalıp daha çok üremesi**, böylece bu özelliklerin sonraki kuşaklarda **yaygınlaşmasıdır.** Karlı bir bölgede açık renkli tavşanlar yırtıcılardan daha kolay saklanır; daha çok hayatta kalır, daha çok yavru bırakır. Kuşaklar geçtikçe popülasyonda açık renkli bireylerin oranı artar.

Üç kavram bir zincir kurar: **varyasyon** seçilecek çeşitliliği sağlar, **doğal seçilim** çevreye uygun olanı ayıklar, sonuçta ortaya çıkan kalıtsal uyum **adaptasyondur.** Dikkat et: bu zincirin hiçbir halkasında bireyin çabayla bir özellik kazanması yoktur.

İki cümleyi yan yana koyalım; fark net görünsün:

- **Modifikasyon:** birey yaşamı boyunca değişir, değişiklik yavruya geçmez.
- **Adaptasyon:** kalıtsal özellikler kuşaklar boyunca yaygınlaşır, özellik yavruya geçer.

Şimdi bir ayırt etme sorusu: bir sporcunun antrenmanla gelişen kasları adaptasyon mudur?

Hayır. Bu bir modifikasyondur; çünkü DNA’da bir değişiklik yoktur ve bu gelişme yavruya aktarılmaz. Adaptasyon olabilmesi için özelliğin kalıtsal olması gerekirdi.

Peki kutup ayısının kalın kürkü neden adaptasyondur? Çünkü kalıtsal bir özelliktir; yavrusu da kalın kürklü doğar. Ayının soğukta yaşayarak “kürk kazanması” söz konusu değildir.

*Programın vurgusu: “Adaptasyonların kalıtsal olduğu vurgulanır.” Bu tek cümle, konunun en sık yapılan hatasını doğrudan hedef alır.*`,
        },
        {
          id: 'lgs-fen-mutasyon-adaptasyon-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Modifikasyon mu, adaptasyon mu?',
          columns: ['Modifikasyon', 'Adaptasyon'],
          rows: [
            { label: 'Kalıtsal mı?', values: ['Değil', 'Kalıtsaldır'] },
            { label: 'Ne kadar sürede oluşur?', values: ['Bireyin yaşamı içinde', 'Kuşaklar boyunca'] },
            { label: 'Kimde görülür?', values: ['Tek bireyde', 'Popülasyonda yaygınlaşır'] },
            { label: 'Yavruya geçer mi?', values: ['Geçmez', 'Geçer'] },
            { label: 'Koşul değişince', values: ['Genellikle geri döner', 'Kalıtsal olduğu için kalır'] },
            { label: 'Örnek', values: ['Güneşte koyulaşan ten rengi', 'Kaktüsün yaprak yerine dikeni'] },
          ],
          insight:
            'İki sütunu ayıran asıl satır birincidir. “Kalıtsal mı?” sorusuna verilen cevap, geri kalan bütün satırları belirler.',
        },
        {
          id: 'lgs-fen-mutasyon-adaptasyon-tuzak',
          type: 'trap',
          title: 'Adaptasyonu bireyin yaşamı içinde gerçekleşen bir olay sanmak',
          wrong: 'Sıcak bir bölgeye taşınan bir hayvan zamanla o iklime uyum sağlar ve bu uyumu yavrusuna aktarır.',
          right: 'Bireyin yaşamı içinde ortaya çıkan değişiklikler fenotipte kalır ve yavruya aktarılmaz. Adaptasyon **kalıtsal** özelliklere dayanır ve kuşaklar boyunca yaygınlaşır.',
          body: 'Bu ayrımı test etmenin kolay yolu şu soruyu sormaktır: “Bu özellik yavruda da görülür mü?” Cevap hayırsa adaptasyon değildir.',
        },
      ],
    },

    {
      id: 'lgs-fen-mutasyon-karar',
      title: 'Bir örnek verildiğinde nasıl karar vereceksin?',
      lead: 'Üç kavramı ayırt etmek için üç soruluk bir karar yolu yeterlidir.',
      blocks: [
        {
          id: 'lgs-fen-mutasyon-karar-agac',
          type: 'decision_tree',
          title: 'Mutasyon mu, modifikasyon mu, adaptasyon mu?',
          intro:
            'Soruları **sırayla** uygula. Sıra önemlidir: ilk soruya verdiğin cevap yolu belirler.',
          checks: [
            {
              question: 'Değişiklik DNA’da mı oldu, yoksa yalnız görünüşte mi kaldı?',
              yes: 'DNA’da olduysa mutasyondur; ikinci soruya geç.',
              no: 'Yalnız görünüşte kaldıysa modifikasyondur; karar verdin.',
            },
            {
              question: 'Değişiklik yavruya aktarılıyor mu?',
              yes: 'Aktarılıyorsa değişiklik üreme hücresindedir ve kalıtsaldır.',
              no: 'Aktarılmıyorsa değişiklik yalnız vücut hücrelerindedir; o bireyde kalır.',
            },
            {
              question: 'Söz konusu özellik kalıtsal ve canlıya çevresinde yaşama avantajı sağlıyor mu?',
              yes: 'Evetse bu bir adaptasyondur (uyum).',
              no: 'Hayırsa yalnız bir mutasyon ya da modifikasyon olarak kalır.',
            },
          ],
          takeaway:
            'Tek cümlelik kural: **DNA değiştiyse mutasyon, yalnız görünüş değiştiyse modifikasyon, kalıtsal ve avantaj sağlıyorsa adaptasyon.**',
        },
        {
          id: 'lgs-fen-mutasyon-karar-ornekler',
          type: 'table',
          interactive: true,
          title: 'Karar yolunu örnekler üzerinde çalıştır',
          columns: ['Örnek', 'DNA değişti mi?', 'Yavruya geçer mi?', 'Kavram'],
          rows: [
            ['Güneşte koyulaşan ten rengi', 'Hayır', 'Hayır', 'Modifikasyon'],
            ['Larva döneminde farklı beslenen arının kraliçe olması', 'Hayır', 'Hayır', 'Modifikasyon'],
            ['Antrenmanla gelişen kaslar', 'Hayır', 'Hayır', 'Modifikasyon'],
            ['Üreme hücresinde oluşan DNA değişikliği', 'Evet', 'Evet', 'Mutasyon'],
            ['Kaktüsün yaprak yerine dikene sahip olması', 'Kalıtsal özellik', 'Evet', 'Adaptasyon'],
            ['Kutup ayısının kalın yağ tabakası', 'Kalıtsal özellik', 'Evet', 'Adaptasyon'],
          ],
          caption:
            'Tabloyu ezberleme; karar yolunu her satırda yeniden çalıştır. Amaç, yeni bir örnek geldiğinde de doğru kararı verebilmektir.',
        },
        {
          id: 'lgs-fen-mutasyon-karar-hafiza',
          type: 'memory',
          title: 'Üç kavram, üç anahtar sözcük',
          body:
            '**Mutasyon → DNA. Modifikasyon → çevre. Adaptasyon → kalıtsal avantaj.** Örneği okurken bu üç anahtardan hangisinin geçtiğine bak.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Örneği sınıflandır',
      prompt:
        'Bir bitki az ışıklı ortamda yetiştirildiğinde yaprakları açık yeşil oluyor. Bol ışıklı ortama alındığında yaprakları yeniden koyulaşıyor. Bu bir mutasyon mudur, modifikasyon mudur?',
      steps: [
        { title: '1. Birinci soruyu sor', body: 'DNA’da bir değişiklik var mı? Bitkinin genlerinde bir değişiklikten söz edilmiyor; değişen yalnız görünüş.' },
        { title: '2. Geri dönüşü değerlendir', body: 'Koşul değiştiğinde yaprak rengi eski hâline dönüyor. Bu, genotipte bir değişiklik olmadığının işaretidir.' },
        { title: '3. Nedeni belirle', body: 'Değişikliğin nedeni ışık miktarı, yani bir çevre koşulu.' },
        { title: '4. Aktarımı düşün', body: 'Genotip değişmediğine göre yavrulara aktarılacak genler de değişmemiştir; bu değişiklik yavruya geçmez.' },
        { title: '5. Karar ver', body: 'Çevre kaynaklı, geri dönebilen, kalıtsal olmayan bir fenotip değişikliği: bu bir **modifikasyondur.**' },
      ],
      answer: 'Modifikasyondur; DNA’da değişiklik yoktur ve yavruya aktarılmaz.',
      takeaway:
        'Geri dönebilirlik, modifikasyonun en görünür işaretlerinden biridir.',
    },
    {
      title: 'Seviye 2 — Aktarılır mı, aktarılmaz mı?',
      prompt:
        'Bir canlının DNA’sında bir değişiklik oluşuyor. Bu değişikliğin yavruya aktarılıp aktarılmayacağını belirlemek için hangi bilgiye ihtiyaç var? Gerekçeni yaz.',
      steps: [
        { title: '1. Değişikliğin türünü belirle', body: 'DNA’da oluşan bir değişiklikten söz ediliyor. Bu bir mutasyondur.' },
        { title: '2. Aktarımın yolunu hatırla', body: 'Yavruya gen aktaran hücre üreme hücresidir. Yavru, ebeveyninden üreme hücresi yoluyla gen alır.' },
        { title: '3. İki durumu ayır', body: 'Değişiklik üreme hücresinde oluştuysa yavruya aktarılan genlerin içindedir. Yalnız vücut hücrelerinde oluştuysa aktarılan genlerin içinde değildir.' },
        { title: '4. Eksik bilgiyi adlandır', body: 'Öyleyse bilmemiz gereken şey, mutasyonun **hangi hücrede** oluştuğudur.' },
        { title: '5. Sonucu yaz', body: 'Üreme hücresinde oluştuysa aktarılır; yalnız vücut hücrelerinde oluştuysa aktarılmaz.' },
      ],
      answer:
        'Mutasyonun hangi hücrede oluştuğu bilinmelidir: üreme hücresinde oluştuysa yavruya aktarılır, yalnız vücut hücrelerinde oluştuysa aktarılmaz.',
      takeaway:
        '“Mutasyon kalıtsaldır” ifadesi, her mutasyonun her durumda aktarıldığı anlamına gelmez.',
    },
    {
      title: 'Seviye 3 — Yanlış açıklamayı düzelt',
      prompt:
        'Bir öğrenci şöyle yazıyor: “Çöl bitkilerinin yaprakları, susuz ortamda yaşaya yaşaya zamanla dikene dönüşmüştür. Bitkiler bu değişikliği yavrularına aktarmıştır.” Bu açıklamadaki hatayı bul ve doğrusunu yaz.',
      steps: [
        { title: '1. İddiayı iki parçaya ayır', body: 'Birinci parça: bitkiler yaşayarak değişmiş. İkinci parça: bu değişikliği yavrularına aktarmış.' },
        { title: '2. Birinci parçayı sına', body: 'Bir bitkinin yaşamı içinde çevre etkisiyle uğradığı değişiklik fenotipte kalır; DNA’da bir değişiklik yaratmaz. Bu bir modifikasyondur.' },
        { title: '3. İkinci parçayı sına', body: 'Modifikasyon kalıtsal olmadığı için yavruya aktarılmaz. Öyleyse öğrencinin kurduğu zincir burada kopar.' },
        { title: '4. Hatayı adlandır', body: 'Öğrenci adaptasyonu, bireyin yaşamı içinde kazanıp aktardığı bir özellik gibi anlatmış. Oysa adaptasyonlar kalıtsaldır.' },
        { title: '5. Doğrusunu kur', body: 'Dikenli yapı kalıtsal bir özelliktir. Su kaybını azalttığı için çöl koşullarında avantaj sağlar ve bu özelliği taşıyan bitkiler kuşaklar boyunca daha çok üreyerek yaygınlaşmıştır.' },
        { title: '6. Sonucu yaz', body: 'Bu bir adaptasyondur; ama bireyin çabasıyla kazanılmamış, kalıtsal olarak aktarılmıştır.' },
      ],
      answer:
        'Hata, adaptasyonun bireyin yaşamı içinde kazanılıp aktarıldığının söylenmesidir. Adaptasyonlar kalıtsaldır ve kuşaklar boyunca yaygınlaşır.',
      takeaway:
        'Bir açıklamayı sınamanın yolu, “bu özellik yavruda da görülür mü?” sorusunu sormaktır.',
    },
  ],

  dailyLife: {
    title: 'Bu kavramlar günlük hayatta nerede karşına çıkıyor?',
    body:
      'Üç kavram da doğada ve günlük hayatta sürekli karşımıza çıkan durumları açıklar.',
    links: [
      'Radyasyondan korunma önlemleri, DNA’da değişiklik olasılığını azaltmaya yöneliktir.',
      'Tarımda farklı iklimlere uygun bitki çeşitlerinin seçilmesi kalıtsal özelliklere dayanır.',
      'Aynı tür bitkinin farklı bölgelerde farklı boyda yetişmesi çevre etkisiyle açıklanır.',
      'Hayvanların bulundukları ortama uygun renk ve yapıları kalıtsal uyumlardır.',
      'Güneşten korunma önerileri, ten renginde oluşan değişikliklerin yanı sıra DNA’nın korunmasıyla da ilgilidir.',
    ],
  },

  questionClue: {
    concept: 'Mutasyon–modifikasyon–adaptasyon sorusu',
    statement:
      'Soruda bir canlıda oluşan değişiklik anlatılıyor ve “yavruya aktarılır mı / kalıtsal mıdır” diye soruluyorsa, ölçülen şey bu üç kavramın ayrımıdır.',
    clues: [
      'Bir canlıdaki değişikliğin nedeninin belirtilmesi (besin, ışık, radyasyon)',
      '“Kalıtsal mıdır”, “yavruya aktarılır mı” ifadeleri',
      'Değişikliğin koşul ortadan kalkınca geri dönmesi',
      'Bir özelliğin canlıya çevresinde avantaj sağladığının söylenmesi',
      'Bir öğrenci açıklamasının verilip değerlendirilmesinin istenmesi',
    ],
    reasoning:
      'Bu işaretler karar yolunu çalıştırmanı ister: önce DNA’da değişiklik olup olmadığına, sonra aktarımın olup olmadığına bak. Sonuç bu iki cevaptan çıkar.',
    boundary:
      'Bu ipuçlarını “çevre geçtiyse modifikasyon” gibi bir kelime avına çevirme. Çevre koşulu radyasyon gibi DNA’yı etkileyen bir etkense sonuç mutasyon olabilir. Belirleyici olan sözcük değil, DNA’da değişiklik olup olmadığıdır.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu dört kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Bir örneğin mutasyon mu modifikasyon mu olduğunun sorulması',
      'Bir değişikliğin yavruya aktarılıp aktarılmayacağının sorulması',
      'Mutasyon ile modifikasyonun karşılaştırılması',
      'Bir öğrenci açıklamasındaki adaptasyon yanılgısının bulunması',
      'Verilen canlı örneklerinde uyum sağlayan özelliklerin belirlenmesi',
      'Bir gözlem kaydından değişikliğin kalıtsal olup olmadığının çıkarılması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Bir sporcunun antrenmanla gelişen kasları çocuğuna aktarılır mı? Cevabını kavram adı kullanarak gerekçelendir.',
      hint: 'Bu değişiklik DNA’da mı oldu?',
      answer:
        'Aktarılmaz. Antrenmanla gelişen kaslar bir **modifikasyondur**: değişiklik yalnız fenotipte olmuştur, DNA’da bir değişiklik yoktur. Yavruya aktarılan şey genlerdir; genlerde yazan değişmediği için bu gelişme çocuğa geçmez. Antrenman bırakıldığında kas gelişiminin gerilemesi de bu değişikliğin geri dönebilir olduğunu gösterir.',
    },
    {
      prompt:
        '“Mutasyon her zaman canlıya zarar verir.” ifadesi doğru mudur? Gerekçeni yaz.',
      hint: 'Mutasyonun kaç farklı sonucu olabilir?',
      answer:
        'Doğru değildir. Mutasyonların sonuçları üç başlıkta toplanır: zararlı olabilir, canlıyı gözle görülür biçimde etkilemeyebilir ya da canlıya yaşadığı çevrede **avantaj sağlayabilir.** Avantaj sağlayan kalıtsal değişikliklerin kuşaklar içinde yaygınlaşması, canlıların çevrelerine uyumunun temelini oluşturur. Bu yüzden “mutasyon = zarar” denklemi bilimsel olarak yanlıştır.',
    },
    {
      prompt:
        'Kutup ayısının kalın kürkü neden adaptasyondur da, güneşte koyulaşan ten rengi neden değildir?',
      hint: 'İki durumda da bir “uyum” var gibi görünüyor. Fark nerede?',
      answer:
        'Kutup ayısının kalın kürkü **kalıtsal** bir özelliktir; yavrusu da kalın kürklü doğar ve bu özellik soğuk ortamda yaşama avantajı sağlar. Güneşte koyulaşan ten rengi ise çevrenin fenotipte yaptığı bir değişikliktir; DNA’da bir değişiklik yoktur, yavruya aktarılmaz ve güneşten uzak kalınca geri döner. İkisini ayıran ölçüt **kalıtsallıktır**; program da adaptasyonların kalıtsal olduğunun vurgulanmasını ister.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, örneği doğru sınıflandırma',
    body:
      'Kazanımların fiilleri açık: “örneklerden yola çıkarak açıklar”, “farklar ile ilgili **çıkarımda bulunur**”, “gözlem yaparak açıklar”. Yani sorular tanım sormaz; bir örnek ya da gözlem verir ve senden doğru kavramı seçmeni ister. MEB merkezî sınav kılavuzu da soruların yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir.',
    measures: [
      'Verilen bir örneği mutasyon–modifikasyon–adaptasyon olarak sınıflandırabilme',
      'Bir değişikliğin kalıtsal olup olmadığını gerekçelendirebilme',
      'Mutasyon ile modifikasyonu birden çok ölçütte karşılaştırabilme',
      'Adaptasyonların kalıtsal olduğunu örnekle açıklayabilme',
      'Bir gözlem kaydından kalıtsallık hakkında çıkarım yapabilme',
      'Yaygın yanılgıları (çabayla kazanılan uyum, her mutasyon zararlıdır) fark edebilme',
    ],
  },

  simulationTable: {
    title: 'Üç canlıda gözlenen değişikliklerin kaydı',
    columns: ['Canlı', 'Gözlenen değişiklik', 'Değişikliğin nedeni', 'Yavrularda görülüyor mu?'],
    rows: [
      ['K bitkisi', 'Yaprakları küçüldü', 'Az sulama', 'Görülmüyor'],
      ['L bitkisi', 'Çiçek rengi değişti', 'DNA’da oluşan değişiklik', 'Görülüyor'],
      ['M hayvanı', 'Kışın tüyleri kalınlaştı', 'Ortam sıcaklığının düşmesi', 'Görülmüyor'],
    ],
    caption: 'Üç canlı da aynı süre boyunca gözlenmiş ve kayıtlar aynı biçimde tutulmuştur.',
  },

  simulation: {
    title: 'Mini uygulama — özgün gözlem kaydı',
    passage: `Bir öğrenci üç canlıyı bir süre gözlemliyor ve gözlediği değişiklikleri yukarıdaki tabloya kaydediyor.

Öğrenci kayda bakarak “Bu üç değişiklikten yalnız biri kalıtsaldır.” diyor.`,
    question: 'Bu kayda göre aşağıdakilerden hangisi doğrudur?',
    options: [
      {
        text: 'K ve M’deki değişiklikler modifikasyon, L’deki mutasyondur',
        explanation:
          'Doğru cevap. K’deki değişikliğin nedeni sulama, M’deki değişikliğin nedeni sıcaklık; ikisi de çevre koşuludur ve yavrularda görülmüyor. L’de ise DNA’da bir değişiklik var ve yavrularda görülüyor; bu bir mutasyondur.',
      },
      {
        text: 'Üç değişiklik de çevre kaynaklı olduğu için üçü de modifikasyondur',
        explanation:
          'L’deki değişikliğin nedeni tabloda açıkça DNA’daki bir değişiklik olarak verilmiş ve yavrularda da görülüyor. Bu iki bilgi birlikte, L’nin modifikasyon olamayacağını gösterir.',
      },
      {
        text: 'M’deki değişiklik kalıtsaldır; çünkü hayvana soğukta avantaj sağlamaktadır',
        explanation:
          'Bir özelliğin avantaj sağlaması onu tek başına kalıtsal yapmaz. Tabloda M’deki değişikliğin yavrularda görülmediği yazıyor; öyleyse kalıtsal değildir ve bir modifikasyondur.',
      },
      {
        text: 'K’deki değişiklik mutasyondur; çünkü bitkinin görünüşü kalıcı olarak değişmiştir',
        explanation:
          'Tabloda K’deki değişikliğin nedeni az sulama olarak verilmiş ve yavrularda görülmüyor. Bir değişikliğin mutasyon sayılabilmesi için DNA’da oluşması gerekir; görünüşteki değişiklik tek başına yeterli değildir.',
      },
      {
        text: 'Yavrularda görülüp görülmediği bilgisi olmadan hiçbir çıkarım yapılamaz',
        explanation:
          'Bu bilgi tabloda zaten verilmiştir; son sütun tam olarak bunu gösterir. Üstelik ikinci sütundaki neden bilgisi de tek başına önemli bir ipucu sunmaktadır.',
      },
    ],
    answer_index: 0,
    stem_analysis:
      'Soru üç satırı ayrı ayrı değerlendirmeyi istiyor. Yöntem: her satırda önce nedene (DNA mı, çevre mi), sonra son sütuna (yavrularda görülüyor mu) bak. İki bilgi birlikte kavramı belirler.',
    critical_point:
      'Kritik nokta M satırıdır. Kışın tüylerin kalınlaşması bir “uyum” gibi göründüğü için öğrenciler bunu adaptasyon sanır. Oysa son sütun yavrularda görülmediğini söylüyor; kalıtsal olmayan bir değişiklik adaptasyon olamaz.',
    takeaway:
      'Bir değişikliğin yararlı görünmesi onu kalıtsal yapmaz. Ölçüt her zaman kalıtsallıktır.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Mutasyon ile modifikasyon arasındaki temel fark aşağıdakilerden hangisidir?',
      options: [
        'Mutasyon canlıya zarar verir, modifikasyon yarar sağlar',
        'Mutasyonda DNA’da değişiklik vardır, modifikasyonda yoktur',
        'Mutasyon çevre koşullarından, modifikasyon kendiliğinden oluşur',
        'Mutasyon yalnız bitkilerde, modifikasyon yalnız hayvanlarda görülür',
      ],
      answer_index: 1,
      explanation:
        'Temel fark DNA’dadır: mutasyonda DNA’da bir değişiklik olur, modifikasyonda yalnız fenotip değişir. Kalıtsallık, aktarım ve kalıcılık farkları hep bu tek farktan doğar. Birinci seçenek yanlıştır; çünkü mutasyonun sonucu zararlı, etkisiz ya da yararlı olabilir. Son iki seçenek ise nedenleri ve canlı gruplarını yanlış eşleştirir.',
    },
    {
      purpose: 'apply',
      question:
        'Aşağıdaki değişikliklerden hangisi yavruya aktarılır?',
      options: [
        'Az ışıkta yetişen bir bitkinin yapraklarının açık yeşil olması',
        'Bol beslenen bir hayvanın kilo alması',
        'Bir canlının üreme hücresindeki DNA’da oluşan değişiklik',
        'Güneşte kalan bir kişinin ten renginin koyulaşması',
      ],
      answer_index: 2,
      explanation:
        'Yavruya aktarılan şey genlerdir ve genler üreme hücresi yoluyla aktarılır. Üreme hücresindeki DNA’da oluşan bir değişiklik, yavruya aktarılan genlerin içindedir. Öbür üç seçenekte DNA’da bir değişiklik yoktur; üçü de çevre etkisiyle oluşan modifikasyondur ve yavruya geçmez.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Develer çölde yaşaya yaşaya susuzluğa dayanıklı hâle gelmiş ve bunu yavrularına aktarmıştır.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Adaptasyonların kalıtsal olduğunu gözden kaçırmak',
        'Mutasyonun her zaman zararlı olduğunu sanmak',
        'Genotip ile fenotipi karıştırmak',
        'Çevrenin fenotipi etkilemediğini sanmak',
      ],
      answer_index: 0,
      explanation:
        'Bir canlı, yaşamı boyunca çevrede bulunarak kalıtsal bir özellik kazanmaz; bireyin yaşamı içinde oluşan değişiklikler modifikasyondur ve yavruya aktarılmaz. Adaptasyonlar **kalıtsal** özelliklere dayanır ve kuşaklar boyunca yaygınlaşır. Program da bu noktanın vurgulanmasını açıkça ister.',
    },
  ],

  summary: [
    'Mutasyon, DNA’da meydana gelen değişikliktir ve kalıtsaldır.',
    'Mutasyon kendiliğinden oluşabileceği gibi radyasyon ve bazı kimyasallarla da oluşabilir.',
    'Bir mutasyonun yavruya aktarılması için üreme hücresinde bulunması gerekir.',
    'Mutasyonun sonucu zararlı, etkisiz ya da yararlı olabilir.',
    'Modifikasyon, çevre koşullarının fenotipte yaptığı değişikliktir.',
    'Modifikasyonda DNA değişmez; bu yüzden kalıtsal değildir ve yavruya geçmez.',
    'Modifikasyon, koşul ortadan kalkınca genellikle geri döner.',
    'Adaptasyon, canlının çevresinde yaşamasını kolaylaştıran kalıtsal özelliklerdir.',
    'Adaptasyonlar kalıtsaldır; bireyin çabasıyla kazanılmaz, kuşaklar boyunca yaygınlaşır.',
    'Varyasyon bireyler arasındaki kalıtsal farklılıklardır; doğal seçilim çevreye uygun olanların yaygınlaşmasını sağlar.',
    'Üç kavramı ayırmanın yolu iki sorudur: DNA değişti mi, değişiklik yavruya geçiyor mu?',
  ],

  next: [
    'Genetik Mühendisliği ve Biyoteknoloji (F.8.2.5.1–F.8.2.5.3)',
    'Katı Basıncı ve Değişkenleri (F.8.3.1.1)',
    'DNA’nın Yapısı: Nükleotidden Kromozoma (tekrar için)',
  ],
})

export default lesson
