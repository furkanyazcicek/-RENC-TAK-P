import { createLgsScienceLesson } from './factory.js'

/**
 * LGS FEN — F.8.2 DNA ve Genetik Kod · 5. ders (ünitenin son dersi)
 * Kazanım : F.8.2.5.1 · F.8.2.5.2 · F.8.2.5.3
 * Dayanak : MEB Fen Bilimleri Dersi Öğretim Programı, Ankara 2018
 *
 * PROGRAM ÇERÇEVESİ — BAĞLAYICI
 *   F.8.2.5.1 → Islah, aşılama, gen aktarımı, klonlama ve gen tedavisi
 *               gibi uygulamalar üzerinde durulur.
 *   F.8.2.5.2 → Konu İKİLEMLER üzerinden tartıştırılır; tek yönlü bir
 *               "iyidir / kötüdür" anlatımı kazanıma aykırıdır.
 *   F.8.2.5.3 → Gelecekteki olası sonuçlar hakkında TAHMİN yaptırılır.
 *
 * KAPSAM KARARI
 * Uygulamaların laboratuvar basamakları (enzim adları, plazmid, vektör
 * vb.) 8. sınıf düzeyinde istenmez; ders uygulamanın NE YAPTIĞI ve NE
 * SONUÇ DOĞURDUĞU düzeyinde kalır. Tartışma bölümü bilinçli olarak iki
 * yönlü yazıldı: kazanım ikilem ister, taraf tutmak istemez.
 */

const lesson = createLgsScienceLesson({
  slug: 'lgs-fen-biyoteknoloji',
  topic: 'DNA ve Genetik Kod',
  order: 5,
  title: 'Genetik Mühendisliği ve Biyoteknoloji',
  subtitle:
    'Bir teknoloji hem hastalığı tedavi edebilir hem yeni sorular doğurabilir. Kazanım senden taraf tutmanı değil, ikilemi görmeni istiyor.',
  minutes: 44,
  kazanimlar: [
    {
      kod: 'F.8.2.5.1',
      metin: 'Genetik mühendisliğini ve biyoteknolojiyi ilişkilendirir.',
      sinir: 'Islah, aşılama, gen aktarımı, klonlama ve gen tedavisi gibi uygulamalar üzerinde durulur.',
    },
    {
      kod: 'F.8.2.5.2',
      metin:
        'Biyoteknolojik uygulamalar kapsamında oluşturulan ikilemlerle bu uygulamaların insanlık için yararlı ve zararlı yönlerini tartışır.',
      sinir: 'Konu ikilemler üzerinden tartıştırılır; tek yönlü bir değerlendirme kazanıma uymaz.',
    },
    {
      kod: 'F.8.2.5.3',
      metin:
        'Gelecekteki genetik mühendisliği uygulamalarının neler olabileceği hakkında tahminlerde bulunur.',
    },
  ],
  prerequisites: [
    { topic: 'DNA’nın Yapısı: Nükleotidden Kromozoma', why: 'Gen aktarımının ne anlama geldiğini anlamak için gen kavramı gereklidir.' },
    { topic: 'Kalıtım Kavramları: Görünen ve Yazılı Olan', why: 'Islah çalışmalarının neden saf döl elde etmeyi hedeflediği buradan anlaşılır.' },
    { topic: 'Mutasyon, Modifikasyon ve Adaptasyon', why: 'Kalıtsal değişiklik ile çevresel değişiklik ayrımı bu derste de kullanılır.' },
  ],
  outcomes: [
    'Biyoteknoloji ile genetik mühendisliği arasındaki ilişkiyi kurabileceksin.',
    'Islah, aşılama, gen aktarımı, klonlama ve gen tedavisini örnekle açıklayabileceksin.',
    'Bir uygulamanın yararlı ve zararlı yönlerini birlikte değerlendirebileceksin.',
    'Bir ikilemi, taraf tutmadan iki yönüyle yazabileceksin.',
    'Gelecekteki uygulamalar hakkında gerekçeli tahminde bulunabileceksin.',
  ],

  opening: {
    title: 'Bir bitki, iki soru',
    lead: 'Soğuğa dayanıklı hâle getirilmiş bir domates, kışın da ürün verebilir. Peki bu iyi bir şey midir?',
    body: `Bir çiftçi düşün. Yetiştirdiği domatesler ilk soğukta zarar görüyor ve ürünün bir bölümü kaybediliyor.

Şimdi şunu hayal et: domatesin genlerine, soğuğa dayanıklılık sağlayan bir gen aktarılıyor. Bitki artık düşük sıcaklıklara dayanıyor. Ürün kaybı azalıyor, daha çok insan besleniyor, çiftçinin geliri artıyor.

Kulağa tamamen olumlu geliyor. Ama hemen ardından sorular geliyor:

- Bu bitkinin uzun vadede insan sağlığına etkisi nedir?
- Doğadaki öbür bitkileri ve canlıları nasıl etkiler?
- Tohumun üretimi birkaç büyük şirketin elinde toplanırsa ne olur?
- Bu teknolojiye erişemeyen ülkeler ne yapacak?

İşte bu ders tam olarak bu ikili durumla ilgilidir.

**Biyoteknoloji**, canlılardan ya da onların parçalarından yararlanarak ürün ve hizmet üretmektir. **Genetik mühendisliği** ise canlıların genleri üzerinde yapılan çalışmalardır ve biyoteknolojinin en hızlı gelişen alanıdır.

Kazanım F.8.2.5.2 senden şunu istiyor: bu uygulamaların yararlı ve zararlı yönlerini **ikilemler üzerinden tartışmak.**

“İkilem” ne demek? İki seçeneğin de kendi içinde geçerli gerekçeleri olduğu, kolay bir doğru cevabı bulunmayan durum demektir. Bu yüzden bu ders “biyoteknoloji iyidir” ya da “biyoteknoloji kötüdür” demeyecek. İki yönü de göstereceğiz; değerlendirme senin olacak.

Bu, aynı zamanda LGS’de ölçülen bir beceridir: bir metinde verilen iki yönlü bilgiyi değerlendirip gerekçeli bir sonuca varabilmek.`,
  },

  concepts: [
    {
      term: 'Biyoteknoloji',
      body: 'Canlılardan ya da onların parçalarından yararlanarak ürün veya hizmet üretme çalışmalarıdır. Yoğurt ve peynir yapımı gibi çok eski uygulamaları da kapsar.',
    },
    {
      term: 'Genetik mühendisliği',
      body: 'Canlıların genleri üzerinde yapılan çalışmaları kapsayan alandır. Biyoteknolojinin bir parçasıdır; ona yeni ve güçlü araçlar kazandırır.',
    },
    {
      term: 'Islah',
      body: 'İstenen özellikleri taşıyan canlıların seçilip çoğaltılmasıyla daha verimli çeşitler elde etme çalışmasıdır. Kalıtım bilgisine dayanır ve çok eskiden beri uygulanır.',
    },
    {
      term: 'Aşılama',
      body: 'Bir bitkinin dalının ya da gözünün başka bir bitkiye kaynaştırılmasıdır. Böylece istenen özellikteki bitki daha hızlı ve güvenilir biçimde çoğaltılır.',
    },
    {
      term: 'Gen aktarımı',
      body: 'Bir canlıdan alınan genin başka bir canlıya aktarılmasıdır. Aktarılan gen, yeni canlıda o özelliğin ortaya çıkmasını sağlayabilir.',
    },
    {
      term: 'Klonlama',
      body: 'Bir canlının kalıtsal özellikleriyle aynı olan yeni bir canlı ya da hücre elde edilmesidir.',
    },
    {
      term: 'Gen tedavisi',
      body: 'Kalıtsal bir hastalığın nedeni olan gen sorununu gidermeye yönelik tedavi yaklaşımıdır.',
    },
    {
      term: 'İkilem',
      body: 'İki seçeneğin de kendi içinde geçerli gerekçeleri bulunduğu, kolay bir doğru cevabı olmayan durumdur. Kazanım bu uygulamaların ikilemler üzerinden tartışılmasını ister.',
    },
  ],

  why: {
    question: 'Biyoteknoloji ile genetik mühendisliği aynı şey mi?',
    body: `Hayır; ama birbirinden ayrı da değiller. Aralarındaki ilişki bir **kapsama ilişkisidir.**

**Biyoteknoloji daha geniştir.** Canlılardan yararlanarak ürün ya da hizmet üretmenin her biçimini kapsar. Bu yüzden biyoteknolojinin tarihi çok eskidir: yoğurt mayalamak, peynir yapmak, ekmek mayalamak da biyoteknolojik uygulamalardır. Bu uygulamalarda genlerle oynanmaz; yalnız canlılardan (örneğin mikroorganizmalardan) yararlanılır.

**Genetik mühendisliği daha dardır ve daha yenidir.** Canlıların genleri üzerinde yapılan çalışmaları kapsar: gen aktarımı, gen tedavisi, klonlama gibi.

İlişkiyi şöyle kurabilirsin: genetik mühendisliği, biyoteknolojinin **içinde** yer alan bir alandır. Genetik mühendisliğindeki gelişmeler biyoteknolojiye yeni araçlar kazandırmış, böylece eskiden yıllar süren işler daha kısa sürede yapılabilir hâle gelmiştir.

Bir örnekle netleştirelim.

**Islah** eski bir yöntemdir. İstenen özellikteki bireyler seçilir, çoğaltılır ve kuşaklar boyunca bu tekrarlanır. Sonuç yavaş gelir ama yöntem basittir ve kalıtım bilgisine dayanır.

**Gen aktarımı** ise yeni bir yöntemdir. İstenen özelliği sağlayan gen doğrudan aktarılır. Sonuç çok daha hızlı gelir.

İkisinin hedefi benzer (istenen özellikte canlı elde etmek), ama yolları ve hızları farklıdır.

Şimdi kritik soruya gelelim: **hız her zaman iyi midir?**

İşte kazanımın istediği ikilem tam burada başlıyor. Hızlı sonuç üretim, sağlık ve ekonomi açısından büyük yararlar sağlar. Ama uzun vadeli etkileri gözlemek için de zaman gerekir. Bir uygulamanın sonuçlarını yeterince gözlemeden yaygınlaştırmak, öngörülmeyen sorunlar doğurabilir.

Bu yüzden bu derste her uygulamayı **iki sütunlu** düşüneceğiz: ne sağlıyor, hangi soruları doğuruyor.`,
  },

  mechanism: {
    title: 'Gen aktarımı nasıl bir işlem?',
    lead:
      'Ayrıntılı laboratuvar basamakları bu düzeyde istenmez; ama mantığı bilmek uygulamayı anlamanı sağlar.',
    intro:
      'Aşağıdaki adımlar gen aktarımının genel mantığını gösterir. Her adım bir öncekinin sonucudur.',
    steps: [
      {
        title: '1. İstenen özellik belirlenir',
        body: 'Örneğin bir bitkinin soğuğa dayanıklı olması ya da bir bakterinin belirli bir maddeyi üretmesi istenir.',
      },
      {
        title: '2. Bu özelliği sağlayan gen bulunur',
        body: 'Özelliği taşıyan bir canlıda, o özellikten sorumlu gen belirlenir.',
      },
      {
        title: '3. Gen alınır',
        body: 'Belirlenen gen, taşıyıcı canlının DNA’sından ayrılır.',
      },
      {
        title: '4. Hedef canlıya aktarılır',
        body: 'Alınan gen, özelliğin kazandırılmak istendiği canlının DNA’sına yerleştirilir.',
      },
      {
        title: '5. Gen çalışır ve özellik ortaya çıkar',
        body: 'Aktarılan gen hedef canlıda görev yapmaya başlarsa, istenen özellik o canlıda görülür.',
      },
      {
        title: '6. Özellik kalıtsaldır',
        body: 'Aktarılan gen DNA’nın parçası olduğu için, bu özellik yeni canlının yavrularına da aktarılabilir. Bu, gen aktarımını modifikasyondan kesin biçimde ayırır.',
      },
    ],
    takeaway:
      'Son adım kritiktir: gen aktarımıyla kazandırılan özellik kalıtsaldır; çünkü değişiklik DNA’da yapılmıştır.',
  },

  comparison: {
    title: 'Beş uygulama, beş farklı iş',
    columns: ['Ne yapılır?', 'Neye dayanır?', 'Örnek'],
    rows: [
      { label: 'Islah', values: ['İstenen özellikteki bireyler seçilip çoğaltılır', 'Kalıtım bilgisine', 'Verimi yüksek buğday çeşitleri'] },
      { label: 'Aşılama', values: ['Bir bitkinin dalı başka bitkiye kaynaştırılır', 'Bitki yapısına', 'Meyve ağaçlarının çoğaltılması'] },
      { label: 'Gen aktarımı', values: ['Bir genin başka canlıya aktarılması', 'Genetik mühendisliğine', 'Dayanıklılık kazandırılmış bitkiler'] },
      { label: 'Klonlama', values: ['Kalıtsal özellikleri aynı canlı elde edilmesi', 'Genetik mühendisliğine', 'Kopyalanan canlılar'] },
      { label: 'Gen tedavisi', values: ['Hastalığa neden olan gen sorununun giderilmesi', 'Genetik mühendisliğine', 'Kalıtsal hastalıkların tedavisi'] },
    ],
    insight:
      'İlk iki satır ile son üç satır arasındaki fark yöntemin kendisindedir: ıslah ve aşılama genlere doğrudan müdahale etmez, son üçü eder.',
  },

  traps: [
    {
      title: 'Biyoteknolojiyi genetik mühendisliğiyle eşitlemek',
      wrong: 'Biyoteknoloji, genlerle yapılan çalışmaların adıdır.',
      right: 'Biyoteknoloji daha geniştir: canlılardan yararlanarak ürün ve hizmet üretmenin her biçimini kapsar. Genetik mühendisliği bunun **içinde** yer alan bir alandır.',
      body: 'Yoğurt ve peynir yapımı da biyoteknolojik uygulamalardır; bunlarda genlere müdahale edilmez. Bu örnek, iki kavramın neden aynı olmadığını tek başına gösterir.',
    },
    {
      title: 'Her biyoteknolojik uygulamanın yeni olduğunu sanmak',
      wrong: 'Biyoteknoloji son yıllarda ortaya çıkmış yeni bir alandır.',
      right: 'Biyoteknolojinin bazı uygulamaları çok eskidir. Islah ve mayalama binlerce yıldır yapılmaktadır. Yeni olan, genetik mühendisliğinin kazandırdığı araçlardır.',
      body: 'Sorularda “biyoteknoloji yalnız modern yöntemleri kapsar” biçiminde çeldiriciler kullanılır. Bu ayrımı bilmek doğrudan puan getirir.',
    },
    {
      title: 'Konuyu tek yönlü değerlendirmek',
      wrong: 'Biyoteknolojik uygulamalar tümüyle yararlıdır (ya da tümüyle zararlıdır).',
      right: 'Kazanım bu uygulamaların **ikilemler üzerinden** tartışılmasını ister. Her uygulamanın hem yarar sağlayan hem soru doğuran yönleri vardır.',
      body: 'Tek yönlü bir cevap, kazanımın istediği tartışma becerisini göstermez. Doğru yaklaşım iki yönü de yazıp gerekçeli bir sonuca varmaktır.',
    },
    {
      title: 'Gen aktarımıyla kazandırılan özelliği modifikasyon sanmak',
      wrong: 'Gen aktarımıyla kazandırılan özellik dışarıdan yapıldığı için yavruya geçmez.',
      right: 'Gen aktarımında değişiklik **DNA’da** yapılır. Bu yüzden kazandırılan özellik kalıtsaldır ve yavruya aktarılabilir.',
      body: 'Bir önceki dersin ölçütünü uygula: DNA değişti mi? Evetse değişiklik kalıtsaldır. Bu, gen aktarımını çevre kaynaklı değişikliklerden ayırır.',
    },
  ],

  variables: null,

  deepDiveSections: [
    {
      id: 'lgs-fen-biyo-uygulamalar',
      title: 'Beş uygulamayı tanımak',
      lead: 'Programın adıyla saydığı beş uygulama. Her birini “ne yapıyor” düzeyinde tanıman yeterlidir.',
      blocks: [
        {
          id: 'lgs-fen-biyo-uygulamalar-anlatim',
          type: 'prose',
          body: `**1. Islah.** İstenen özellikleri taşıyan canlıların seçilip çoğaltılmasıdır. Verimi yüksek buğday çeşitleri, daha çok süt veren inekler, daha iri meyve veren ağaçlar ıslah çalışmalarının sonucudur.

Islah kalıtım bilgisine dayanır: hangi özelliğin kalıtsal olduğu, saf döl elde etmenin nasıl mümkün olduğu bilinmeden ıslah yapılamaz. Bu yüzden ıslah, bu ünitede öğrendiğin her şeyin doğrudan uygulaması sayılır.

Islahın en belirgin özelliği **yavaş** olmasıdır. Sonuç kuşaklar boyunca elde edilir.

**2. Aşılama.** Bir bitkinin dalının ya da gözünün başka bir bitkiye kaynaştırılmasıdır. Amaç, istenen özellikteki bitkiyi daha hızlı ve güvenilir biçimde çoğaltmaktır. Meyve ağaçlarında yaygın olarak kullanılır.

Aşılamada genlere doğrudan bir müdahale yoktur; bitkinin kendi yapısından yararlanılır.

**3. Gen aktarımı.** Bir canlıdan alınan genin başka bir canlıya aktarılmasıdır. Bu yolla, hedef canlıda daha önce bulunmayan bir özellik ortaya çıkabilir: soğuğa dayanıklılık, zararlılara direnç, belirli bir maddeyi üretebilme gibi.

Gen aktarımının en belirgin özelliği **hızlı** olmasıdır. Islahla kuşaklar süren bir sonuç, gen aktarımıyla çok daha kısa sürede elde edilebilir.

**4. Klonlama.** Bir canlının kalıtsal özellikleriyle aynı olan yeni bir canlı ya da hücre elde edilmesidir. Klonlanan canlı, kaynak canlıyla aynı kalıtsal bilgiyi taşır.

**5. Gen tedavisi.** Kalıtsal bir hastalığın nedeni olan gen sorununu gidermeye yönelik tedavi yaklaşımıdır. Hedef, hastalığın belirtilerini geçici olarak azaltmak değil, kaynağındaki sorunu gidermektir.

Beş uygulamayı iki gruba ayırabilirsin:

- **Genlere doğrudan müdahale etmeyenler:** ıslah, aşılama
- **Genetik mühendisliğine dayananlar:** gen aktarımı, klonlama, gen tedavisi

*Kapsam notu: bu uygulamaların laboratuvar basamaklarını bilmen istenmez. Senden istenen, her uygulamanın ne yaptığını ve hangi sonuçları doğurduğunu açıklayabilmektir.*`,
        },
        {
          id: 'lgs-fen-biyo-uygulamalar-tablo',
          type: 'table',
          interactive: true,
          title: 'Islah ile gen aktarımı: aynı hedef, farklı yol',
          columns: ['Ölçüt', 'Islah', 'Gen aktarımı'],
          rows: [
            ['Hedef', 'İstenen özellikte canlı elde etmek', 'İstenen özellikte canlı elde etmek'],
            ['Yöntem', 'Seçme ve çoğaltma', 'Genin doğrudan aktarılması'],
            ['Genlere doğrudan müdahale', 'Yok', 'Var'],
            ['Süre', 'Kuşaklar boyunca, yavaş', 'Çok daha kısa'],
            ['Tarihi', 'Binlerce yıldır uygulanıyor', 'Yeni bir uygulama'],
            ['Özellik kalıtsal mı?', 'Kalıtsal', 'Kalıtsal'],
          ],
          caption:
            'Son satıra dikkat: her iki yolla elde edilen özellik de kalıtsaldır; çünkü ikisinde de değişiklik genlerle ilgilidir.',
        },
        {
          id: 'lgs-fen-biyo-uygulamalar-hoca',
          type: 'teacher_note',
          tone: 'note',
          body:
            'Sorularda bir uygulama adı verilip “bu hangi gruba girer” diye sorulabilir. Beş uygulamayı iki gruba ayıran ölçütü aklında tut: genlere doğrudan müdahale var mı, yok mu?',
        },
      ],
    },

    {
      id: 'lgs-fen-biyo-ikilem',
      title: 'İkilem: aynı uygulamanın iki yüzü',
      lead: 'Kazanım burada tartışma ister. Tartışmanın kuralı, iki yönü de gerekçesiyle yazmaktır.',
      blocks: [
        {
          id: 'lgs-fen-biyo-ikilem-anlatim',
          type: 'prose',
          body: `Bu bölümde bir şeyi açıkça söyleyeceğim: bu ders sana “biyoteknoloji iyidir” ya da “kötüdür” demeyecek. Kazanım bunu istemiyor. Kazanım **ikilem** diyor.

İkilem, iki tarafın da geçerli gerekçeleri bulunduğu durumdur. Böyle bir durumda doğru cevap “şu taraf haklı” demek değil, iki tarafın gerekçelerini görüp **kendi gerekçeli sonucunu** kurmaktır.

Önce yararlı görülen yönleri sıralayalım.

**Sağlık alanında:** kalıtsal hastalıkların kaynağına yönelik tedavi yaklaşımları geliştirilebilir; bazı ilaç ve aşıların üretimi kolaylaşır.

**Tarım ve gıda alanında:** dayanıklı çeşitler sayesinde ürün kaybı azalır; daha az alandan daha çok ürün alınabilir; bu, beslenme sorunlarının azaltılmasına katkı sağlayabilir.

**Çevre alanında:** bazı atıkların ayrıştırılmasında mikroorganizmalardan yararlanılabilir.

Şimdi soru doğuran yönlere bakalım.

**Sağlık açısından:** yeni geliştirilen ürünlerin uzun vadeli etkilerinin gözlenmesi zaman ister.

**Çevre açısından:** doğaya bırakılan bir canlının öbür canlılarla etkileşimi önceden tam olarak kestirilemeyebilir; doğadaki çeşitliliğin azalması bir risk olarak tartışılır.

**Toplum ve ekonomi açısından:** teknolojinin ve tohum üretiminin belirli ellerde toplanması, üreticilerin bağımlı hâle gelmesi tartışılan bir konudur. Teknolojiye erişimde ülkeler arasındaki fark da bir sorun olarak görülür.

**Etik açıdan:** özellikle klonlama ve insan genleri üzerindeki çalışmalar, “yapılabiliyor olması yapılmalı olduğu anlamına gelir mi?” sorusunu doğurur.

Şimdi bir uyarı. İkilemi tartışırken iki hatadan kaçın:

**Birinci hata: tek yönlü konuşmak.** “Hepsi zararlıdır” da “hepsi yararlıdır” da eksik cevaplardır. Aynı uygulamanın iki yönü birden vardır.

**İkinci hata: gerekçesiz konuşmak.** “Bence yanlış” demek bir tartışma değildir. Tartışma, gerekçeye dayanır: ne, neden, hangi koşulda?

İyi bir tartışma cevabı şöyle kurulur: *“Bu uygulama şunu sağlıyor (gerekçe). Öte yandan şu riski doğuruyor (gerekçe). Bu yüzden bence şu koşullarda kullanılmalı (sonuç).”*

Üç parçalı bu yapı, hem kazanımın istediği tartışmayı yapar hem de sorularda aranan akıl yürütmeyi gösterir.`,
        },
        {
          id: 'lgs-fen-biyo-ikilem-karsilastirma',
          type: 'compare',
          interactive: true,
          title: 'Aynı uygulama, iki sütun',
          columns: ['Sağladığı yararlar', 'Doğurduğu sorular'],
          rows: [
            { label: 'Sağlık', values: ['Kalıtsal hastalıkların kaynağına yönelik tedavi umudu', 'Uzun vadeli etkilerin gözlenmesi zaman ister'] },
            { label: 'Tarım', values: ['Dayanıklı çeşitlerle ürün kaybının azalması', 'Doğadaki çeşitliliğin azalması riski'] },
            { label: 'Ekonomi', values: ['Verim artışı ve üretim maliyetinin düşmesi', 'Tohum ve teknolojinin belirli ellerde toplanması'] },
            { label: 'Çevre', values: ['Bazı atıkların ayrıştırılmasında kullanım', 'Doğaya bırakılan canlıların etkilerinin kestirilememesi'] },
            { label: 'Etik', values: ['Tedavi edilemeyen hastalıklara çözüm arayışı', '“Yapılabiliyor olması yapılmalı mı?” sorusu'] },
          ],
          insight:
            'İki sütun da aynı satırda duruyor: bu, ikilemin tanımıdır. Bir satırda yalnız bir sütunu okuyan, konuyu yarım anlamış olur.',
        },
        {
          id: 'lgs-fen-biyo-ikilem-ornek',
          type: 'example',
          title: 'Üç parçalı tartışma cevabı nasıl yazılır?',
          body: `**Konu:** Zararlılara dayanıklı hâle getirilmiş bir mısır çeşidinin yaygın olarak ekilmesi.

**1. Yarar (gerekçeli):** Zararlılara dayanıklı olduğu için ürün kaybı azalır ve daha az ilaç kullanılması gerekebilir. Bu, hem üretimi hem çevreyi olumlu etkileyebilir.

**2. Risk (gerekçeli):** Tek bir çeşidin yaygınlaşması, ekilen bitkilerdeki çeşitliliği azaltabilir. Çeşitlilik azaldığında beklenmedik bir sorun karşısında ürünün tamamı aynı anda etkilenebilir.

**3. Gerekçeli sonuç:** Bu yüzden böyle bir çeşidin kullanımı, uzun süreli gözlem ve çeşitliliği koruyan bir plan ile birlikte yürütülmelidir.

Dikkat: sonuç bölümü “iyidir” ya da “kötüdür” demiyor; **hangi koşulda** kabul edilebilir olduğunu söylüyor. Tartışma cevaplarının aranan biçimi budur.`,
        },
      ],
    },

    {
      id: 'lgs-fen-biyo-gelecek',
      title: 'Gelecek hakkında tahmin yapmak',
      lead: 'Kazanım F.8.2.5.3 tahmin ister. Ama tahmin, hayal kurmak değildir.',
      blocks: [
        {
          id: 'lgs-fen-biyo-gelecek-anlatim',
          type: 'prose',
          body: `Kazanım “gelecekteki uygulamaların neler olabileceği hakkında **tahminlerde bulunur**” diyor. Burada önemli bir ayrım var: bilimsel tahmin ile hayal aynı şey değildir.

**Hayal**, hiçbir dayanağı olmayan bir ileri sürmedir: “Gelecekte insanlar genlerini değiştirerek uçabilecek.”

**Bilimsel tahmin**, bugünkü bilgiye ve bugünkü eğilime dayanır: “Gen tedavisi üzerine yapılan çalışmalar arttığına göre, gelecekte bugün tedavi edilemeyen bazı kalıtsal hastalıklara yönelik yeni yaklaşımlar geliştirilebilir.”

İkisi arasındaki fark **dayanaktır.** Tahminin bir dayanağı olmak zorundadır.

İyi bir tahmin üç parçadan oluşur:

1. **Bugünkü durum:** Şu anda ne yapılabiliyor?
2. **Eğilim:** Hangi yönde ilerliyor?
3. **Tahmin:** Bu eğilim sürerse ne olabilir?

Örnek üzerinde görelim.

- **Bugünkü durum:** Kalıtsal hastalıkların nedeni olan genler belirlenebiliyor.
- **Eğilim:** Gen tedavisi üzerine yapılan çalışmalar artıyor.
- **Tahmin:** Gelecekte bazı kalıtsal hastalıklar için kaynağa yönelik tedaviler yaygınlaşabilir.

Bir tahmin daha kuralım:

- **Bugünkü durum:** Tarımda dayanıklı çeşitler geliştirilebiliyor.
- **Eğilim:** İklim değişikliği tarımsal üretimi zorlaştırıyor.
- **Tahmin:** Kuraklığa ve sıcağa dayanıklı çeşitler üzerine çalışmalar artabilir.

Dikkat ettiysen iki tahminde de **“olabilir”** dedik, “olacak” demedik. Bu bir üslup tercihi değil, bilimsel bir tutumdur: tahmin kesinlik iddiası taşımaz.

Bu, aslında bu ünite boyunca tekrar ettiğimiz ayrımın başka bir görünümüdür. Çaprazlamada olasılığı kesinlikten ayırdık; burada da tahmini kesinlikten ayırıyoruz. Bilimsel dil, bilinenle bilinmeyeni birbirine karıştırmayan dildir.`,
        },
        {
          id: 'lgs-fen-biyo-gelecek-baglanti',
          type: 'connection',
          title: 'Ünite nasıl kapanıyor?',
          body:
            'Bu ders, DNA ve Genetik Kod ünitesinin son dersidir. Ünitede öğrendiğin her kavram bu derste bir uygulamaya bağlanır.',
          links: [
            'DNA ve gen kavramı → gen aktarımının ne yaptığını anlamanı sağlar.',
            'Genotip–fenotip ayrımı → ıslah çalışmalarının neyi hedeflediğini açıklar.',
            'Çaprazlama ve saf döl → ıslahın kalıtım bilgisine nasıl dayandığını gösterir.',
            'Mutasyon ve kalıtsallık → gen aktarımıyla kazandırılan özelliğin neden kalıtsal olduğunu açıklar.',
            'Olasılık dili → tahmin dilinin neden “olabilir” ile kurulduğunu anlamanı sağlar.',
          ],
        },
        {
          id: 'lgs-fen-biyo-gelecek-tuzak',
          type: 'trap',
          title: 'Tahmini dayanaksız bir iddiaya çevirmek',
          wrong: 'Gelecekte genetik mühendisliğiyle her hastalık kesin olarak yok edilecek.',
          right: 'Tahmin bugünkü bilgiye ve eğilime dayanır ve kesinlik iddiası taşımaz. Doğru ifade “bazı hastalıklara yönelik yeni yaklaşımlar geliştirilebilir” biçimindedir.',
          body: '“Kesin olarak yok edilecek” ifadesi, elde bulunan kanıtın söylediğinden fazlasını iddia eder. Bilimsel dilde tahmin, dayanağı kadar iddia eder.',
        },
      ],
    },
  ],

  workedExamples: [
    {
      title: 'Seviye 1 — Uygulamayı tanı',
      prompt:
        'Bir çiftçi, bahçesindeki en iri ve en lezzetli meyveyi veren ağacın dalını başka bir ağaca kaynaştırıyor. Bu hangi uygulamadır ve neden?',
      steps: [
        { title: '1. İşlemi tanımla', body: 'Bir bitkinin dalı başka bir bitkiye kaynaştırılıyor.' },
        { title: '2. Genlere müdahale var mı?', body: 'Hayır. Genlere doğrudan bir müdahale yapılmıyor; bitkinin kendi yapısından yararlanılıyor.' },
        { title: '3. Amacı belirle', body: 'Amaç, istenen özellikteki bitkiyi hızlı ve güvenilir biçimde çoğaltmak.' },
        { title: '4. Uygulamayı adlandır', body: 'Bu işlem **aşılamadır.**' },
        { title: '5. Gruplandır', body: 'Aşılama, genlere doğrudan müdahale etmeyen uygulamalar grubundadır; ıslahla aynı grupta yer alır.' },
      ],
      answer: 'Aşılamadır; bir bitkinin dalı başka bir bitkiye kaynaştırılmıştır ve genlere doğrudan müdahale yoktur.',
      takeaway: 'Uygulamayı adlandırmanın ölçütü tek sorudur: genlere doğrudan müdahale var mı?',
    },
    {
      title: 'Seviye 2 — İkilemi iki yönlü yaz',
      prompt:
        'Bir ülkede, kuraklığa dayanıklı hâle getirilmiş bir buğday çeşidinin yaygın olarak ekilmesi tartışılıyor. Bu konuyu ikilem olarak iki yönüyle değerlendir ve gerekçeli bir sonuca var.',
      steps: [
        { title: '1. Konuyu netleştir', body: 'Tartışılan şey, kuraklığa dayanıklı bir çeşidin yaygın ekimi.' },
        { title: '2. Yararlı yönü gerekçesiyle yaz', body: 'Kuraklık dönemlerinde ürün kaybı azalır; bu, gıda arzının sürmesine ve üreticinin gelirinin korunmasına katkı sağlar.' },
        { title: '3. Soru doğuran yönü gerekçesiyle yaz', body: 'Tek bir çeşidin yaygınlaşması ekilen bitkilerdeki çeşitliliği azaltabilir. Çeşitlilik azaldığında beklenmedik bir sorun bütün ürünü aynı anda etkileyebilir.' },
        { title: '4. İki yönü karşılaştır', body: 'Birinci yön kısa vadede net bir kazanç sunuyor; ikinci yön uzun vadeli bir risk taşıyor. İkisi de gerekçeli.' },
        { title: '5. Gerekçeli sonuca var', body: 'Bu çeşidin kullanımı, yerel çeşitlerin de korunduğu ve uzun süreli gözlemin sürdürüldüğü bir planla birlikte yürütülürse yararı riskinden fazla olabilir.' },
      ],
      answer:
        'Kısa vadede ürün güvenliğine katkı sağlar; uzun vadede çeşitliliğin azalması riski taşır. Yerel çeşitlerin korunduğu ve gözlemin sürdüğü bir planla birlikte kullanılması uygun olur.',
      takeaway:
        'Sonuç bölümü “iyidir/kötüdür” demez; **hangi koşulda** kabul edilebilir olduğunu söyler.',
    },
    {
      title: 'Seviye 3 — Dayanaklı tahmin kur',
      prompt:
        'Aşağıdaki bilgiye dayanarak gelecekle ilgili bilimsel bir tahminde bulun: “Günümüzde kalıtsal hastalıklara neden olan genler belirlenebilmekte ve gen tedavisi üzerine yapılan çalışmalar artmaktadır.” Tahminini üç parçalı olarak kur.',
      steps: [
        { title: '1. Bugünkü durumu yaz', body: 'Kalıtsal hastalıklara neden olan genler belirlenebiliyor.' },
        { title: '2. Eğilimi yaz', body: 'Gen tedavisi üzerine yapılan çalışmalar artıyor.' },
        { title: '3. İki bilgiyi birleştir', body: 'Nedeni belirlenebilen bir sorun üzerine çalışmalar artıyorsa, o soruna yönelik çözüm yaklaşımlarının gelişmesi beklenebilir.' },
        { title: '4. Tahmini kur', body: 'Gelecekte, bugün tedavi edilemeyen bazı kalıtsal hastalıklar için kaynağa yönelik tedavi yaklaşımları geliştirilebilir.' },
        { title: '5. Dili kontrol et', body: '“Geliştirilecek” değil, “geliştirilebilir” dedik. Tahmin kesinlik iddiası taşımaz.' },
      ],
      answer:
        'Kalıtsal hastalıkların nedeni belirlenebildiğine ve bu alandaki çalışmalar arttığına göre, gelecekte bazı kalıtsal hastalıklar için kaynağa yönelik tedavi yaklaşımları geliştirilebilir.',
      takeaway:
        'Tahminin değeri dayanağından gelir. Dayanağı olmayan bir ileri sürme tahmin değil, hayaldir.',
    },
  ],

  dailyLife: {
    title: 'Bu uygulamalar hayatın neresinde?',
    body:
      'Biyoteknolojik uygulamalar hem çok eski hem çok yeni; ikisi de günlük hayatın içinde.',
    links: [
      'Yoğurt, peynir ve ekmek yapımı biyoteknolojinin en eski uygulamalarındandır.',
      'Marketteki pek çok meyve ve sebze çeşidi ıslah çalışmalarının ürünüdür.',
      'Meyve ağaçlarının çoğaltılmasında aşılama yaygın olarak kullanılır.',
      'Bazı ilaç ve aşıların üretiminde biyoteknolojik yöntemlerden yararlanılır.',
      'Tarımda dayanıklı çeşitlerin kullanımı, ürün kaybını azaltmaya yöneliktir.',
    ],
  },

  questionClue: {
    concept: 'Biyoteknoloji sorusu',
    statement:
      'Soruda bir uygulama anlatılıyor ve adı soruluyorsa ya da bir uygulamanın yarar–risk yönleri veriliyorsa, ölçülen şey bu dersin kavramlarıdır.',
    clues: [
      'Bir uygulamanın anlatılıp adının sorulması (ıslah, aşılama, gen aktarımı, klonlama, gen tedavisi)',
      '“Yararlı ve zararlı yönleri” biçiminde iki yönlü ifadeler',
      'Bir tartışma metni ya da iki öğrencinin karşıt görüşü',
      'Gelecekle ilgili bir tahmin isteyen ifadeler',
      'Bir özelliğin kalıtsal olup olmadığının sorgulanması',
    ],
    reasoning:
      'Bu işaretler iki farklı beceri ister: uygulamayı doğru adlandırmak ve iki yönlü değerlendirme yapmak. İlki için “genlere müdahale var mı?” sorusunu, ikincisi için üç parçalı tartışma yapısını kullan.',
    boundary:
      'Bu ipuçlarını “biyoteknoloji geçtiyse cevap zararlıdır” gibi bir kısayola çevirme. Kazanım ikilem ister; tek yönlü cevap, sorunun istediği değerlendirmeyi göstermez.',
  },

  examShape: {
    title: 'Bu konu LGS’de hangi biçimlerde karşına çıkar?',
    body: 'Aşağıdaki kalıplar bu üç kazanımın ölçülebileceği soru biçimleridir.',
    patterns: [
      'Anlatılan bir uygulamanın adının sorulması',
      'Biyoteknoloji ile genetik mühendisliği ilişkisinin sorgulanması',
      'Bir uygulamanın yararlı ve zararlı yönlerinin birlikte değerlendirilmesi',
      'İki öğrencinin karşıt görüşünün verilip değerlendirilmesinin istenmesi',
      'Bir tahminin dayanağının olup olmadığının sorgulanması',
      'Gen aktarımıyla kazandırılan özelliğin kalıtsal olup olmadığının sorulması',
    ],
  },

  checkpoints: [
    {
      prompt:
        'Yoğurt yapımı bir biyoteknolojik uygulama mıdır? Cevabını iki kavramın ilişkisini kurarak açıkla.',
      hint: 'Biyoteknolojinin tanımı genlerle sınırlı mı?',
      answer:
        'Evet, biyoteknolojik bir uygulamadır. Biyoteknoloji, canlılardan ya da onların parçalarından yararlanarak ürün veya hizmet üretmektir; yoğurt yapımında mikroorganizmalardan yararlanılır. Bu uygulamada genlere doğrudan bir müdahale yoktur; yani genetik mühendisliği değildir. Genetik mühendisliği biyoteknolojinin **içinde** yer alan, genlerle çalışan daha dar bir alandır.',
    },
    {
      prompt:
        'Gen aktarımıyla soğuğa dayanıklı hâle getirilmiş bir bitkinin bu özelliği yavrularına geçer mi? Neden?',
      hint: 'Bir önceki dersin ölçütünü uygula: DNA değişti mi?',
      answer:
        'Geçebilir. Gen aktarımında değişiklik doğrudan **DNA’da** yapılır; aktarılan gen bitkinin genlerinin bir parçası hâline gelir. Kalıtsal olan da budur: yavruya aktarılan genlerin içinde bulunduğu için özellik yavruda da görülebilir. Bu yönüyle gen aktarımı, çevre etkisiyle oluşan ve yavruya geçmeyen modifikasyondan kesin biçimde ayrılır.',
    },
    {
      prompt:
        'Bir öğrenci “Biyoteknolojik uygulamaların hepsi zararlıdır, kullanılmamalıdır.” diyor. Bu değerlendirmenin eksiği nedir?',
      hint: 'Kazanım hangi tür bir tartışma istiyor?',
      answer:
        'Değerlendirme tek yönlüdür; oysa kazanım bu uygulamaların **ikilemler üzerinden** tartışılmasını ister. Aynı uygulamanın hem yarar sağlayan hem soru doğuran yönleri vardır: örneğin dayanıklı çeşitler ürün kaybını azaltırken çeşitliliğin azalması riskini de taşır. Doğru bir değerlendirme iki yönü de gerekçesiyle yazar ve hangi koşulda kabul edilebilir olduğunu belirten bir sonuca varır.',
    },
  ],

  examInsight: {
    title: 'Ölçülen şey tanım değil, iki yönlü değerlendirme',
    body:
      'Kazanımların fiilleri yön gösteriyor: “ilişkilendirir”, “**tartışır**”, “**tahminlerde bulunur**”. Üçü de tek bir doğru cevabı ezberlemeyi değil, bilgiyi kullanarak değerlendirme yapmayı ister. MEB merkezî sınav kılavuzu da soruların okuduğunu anlama, yorumlama ve analiz becerilerini ölçecek nitelikte hazırlandığını belirtir. Bu konuda somut karşılığı, verilen bir metinde iki yönlü bilgiyi ayırıp gerekçeli bir sonuca varabilmendir.',
    measures: [
      'Biyoteknoloji ile genetik mühendisliği arasındaki kapsama ilişkisini kurabilme',
      'Beş uygulamayı tanıyıp doğru adlandırabilme',
      'Bir uygulamanın yararlı ve zararlı yönlerini birlikte değerlendirebilme',
      'Tek yönlü bir değerlendirmenin eksiğini fark edebilme',
      'Dayanaklı tahmin ile dayanaksız iddiayı ayırt edebilme',
      'Gen aktarımıyla kazandırılan özelliğin kalıtsallığını açıklayabilme',
    ],
  },

  simulationTable: {
    title: 'Bir sınıf tartışmasında öne sürülen görüşler',
    columns: ['Öğrenci', 'Öne sürdüğü görüş'],
    rows: [
      ['Öğrenci 1', 'Dayanıklı çeşitler ürün kaybını azalttığı için tarımda kullanılmalıdır.'],
      ['Öğrenci 2', 'Tek bir çeşidin yaygınlaşması ekilen bitkilerdeki çeşitliliği azaltabilir.'],
      ['Öğrenci 3', 'Bu çeşitler kesinlikle her hastalığı ve açlığı tamamen ortadan kaldıracaktır.'],
      ['Öğrenci 4', 'Uzun vadeli etkiler gözlenirken yerel çeşitler de korunmalıdır.'],
    ],
    caption: 'Tartışma konusu: dayanıklı hâle getirilmiş bir bitki çeşidinin yaygın olarak ekilmesi.',
  },

  simulation: {
    title: 'Mini uygulama — özgün sınıf tartışması',
    passage: `Bir sınıfta, dayanıklı hâle getirilmiş bir bitki çeşidinin yaygın olarak ekilmesi tartışılıyor. Dört öğrencinin öne sürdüğü görüşler yukarıdaki tabloda verilmiştir.

Öğretmen, görüşlerden birinin bilimsel tartışma ölçütlerine uymadığını söylüyor.`,
    question: 'Öğretmenin işaret ettiği görüş hangisidir ve neden?',
    options: [
      {
        text: 'Öğrenci 1; çünkü uygulamanın yalnız yararlı yönünü söylemiştir',
        explanation:
          'Öğrenci 1 bir yararı gerekçesiyle birlikte öne sürmüştür. Bir tartışmada her katılımcının bir yönü savunması olağandır; bu tek başına bilimsel ölçütlere aykırı değildir.',
      },
      {
        text: 'Öğrenci 2; çünkü henüz gerçekleşmemiş bir riskten söz etmiştir',
        explanation:
          'Bir riskin henüz gerçekleşmemiş olması onu geçersiz kılmaz. Öğrenci 2 çeşitliliğin azalmasını gerekçeli bir olasılık olarak dile getirmiştir; bu geçerli bir tartışma katkısıdır.',
      },
      {
        text: 'Öğrenci 3; çünkü elindeki dayanağın söylediğinden fazlasını iddia etmiştir',
        explanation:
          'Doğru cevap. “Kesinlikle her hastalığı ve açlığı tamamen ortadan kaldıracaktır” ifadesi bir tahmin değil, dayanaksız bir kesinlik iddiasıdır. Bilimsel tahmin bugünkü bilgiye dayanır ve “olabilir” diliyle kurulur.',
      },
      {
        text: 'Öğrenci 4; çünkü iki görüşü birleştirerek kararsız kalmıştır',
        explanation:
          'Öğrenci 4 kararsız kalmamış, koşullu bir sonuç kurmuştur: uygulama sürerken çeşitliliğin de korunmasını önermiştir. Bu, ikilem tartışmasında aranan gerekçeli sonuç biçimidir.',
      },
      {
        text: 'Hiçbiri; dört görüş de bilimsel tartışma ölçütlerine uygundur',
        explanation:
          'Üçüncü görüş kesinlik iddiası taşıdığı için ölçütlere uymaz. Bir tartışmada öne sürülen her cümlenin, dayanağının izin verdiği kadar iddia etmesi beklenir.',
      },
    ],
    answer_index: 2,
    stem_analysis:
      'Soru dört görüşü ayrı ayrı değerlendirmeyi istiyor. Yöntem: her cümlede iddianın gücü ile dayanağın gücünü karşılaştır. Dayanağının izin verdiğinden fazlasını iddia eden cümle ölçütlere uymaz.',
    critical_point:
      'Kritik nokta “kesinlikle” ve “tamamen” sözcükleridir. Bu sözcükler cümleyi bir tahminden bir kesinlik iddiasına çevirir. Görüşün olumlu olması onu geçerli kılmaz; ölçüt, iddianın dayanağıyla orantılı olmasıdır.',
    takeaway:
      'Bilimsel dilde bir cümle, dayanağının izin verdiği kadar iddia eder. “Olabilir” ile “kesinlikle olacak” arasındaki fark budur.',
  },

  quizzes: [
    {
      purpose: 'concept',
      question: 'Biyoteknoloji ile genetik mühendisliği arasındaki ilişki aşağıdakilerden hangisidir?',
      options: [
        'İkisi aynı anlama gelir',
        'Genetik mühendisliği, biyoteknolojinin içinde yer alan bir alandır',
        'Biyoteknoloji, genetik mühendisliğinin içinde yer alan bir alandır',
        'İkisinin birbiriyle ilgisi yoktur',
      ],
      answer_index: 1,
      explanation:
        'Biyoteknoloji daha geniştir: canlılardan yararlanarak ürün ve hizmet üretmenin her biçimini kapsar; yoğurt ve peynir yapımı da buna dahildir. Genetik mühendisliği ise genler üzerinde çalışan daha dar ve daha yeni bir alandır ve biyoteknolojinin içinde yer alır. Bu yüzden birinci, üçüncü ve dördüncü seçenekler kapsama ilişkisini yanlış kurar.',
    },
    {
      purpose: 'apply',
      question:
        'Bir çiftçi, sürüsündeki en çok süt veren inekleri seçip onlardan yavru alarak kuşaklar boyunca verimi artırıyor. Bu hangi uygulamadır?',
      options: [
        'Gen aktarımı',
        'Klonlama',
        'Islah',
        'Gen tedavisi',
      ],
      answer_index: 2,
      explanation:
        'İstenen özellikteki bireylerin seçilip çoğaltılmasıyla verimli çeşitler elde etme çalışmasına ıslah denir ve kalıtım bilgisine dayanır. Burada genlere doğrudan bir müdahale yoktur; bu yüzden gen aktarımı, klonlama ya da gen tedavisi değildir. Islahın en belirgin özelliği sonucun kuşaklar boyunca elde edilmesidir.',
    },
    {
      purpose: 'error',
      question:
        'Bir öğrenci “Gen aktarımıyla kazandırılan özellik dışarıdan verildiği için yavruya geçmez.” diyor. Bu ifadedeki hata nedir?',
      options: [
        'Değişikliğin DNA’da yapıldığını, bu yüzden kalıtsal olduğunu gözden kaçırmak',
        'Gen aktarımını ıslahla karıştırmak',
        'Biyoteknolojiyi genetik mühendisliğiyle eşitlemek',
        'Modifikasyonun kalıtsal olduğunu sanmak',
      ],
      answer_index: 0,
      explanation:
        'Gen aktarımında aktarılan gen, hedef canlının DNA’sının bir parçası hâline gelir. Yavruya aktarılan şey genler olduğu için, DNA’da yapılan bu değişiklik yavruya geçebilir. Ölçüt her zaman aynıdır: DNA değiştiyse değişiklik kalıtsaldır. Öğrenci, değişikliğin “dışarıdan” yapılmış olmasını kalıtsal olmamakla karıştırmıştır.',
    },
  ],

  summary: [
    'Biyoteknoloji, canlılardan ya da parçalarından yararlanarak ürün ve hizmet üretmektir.',
    'Genetik mühendisliği, genler üzerinde yapılan çalışmalardır ve biyoteknolojinin içinde yer alır.',
    'Yoğurt ve peynir yapımı gibi çok eski uygulamalar da biyoteknolojiye dahildir.',
    'Islah: istenen özellikteki bireylerin seçilip çoğaltılmasıdır; kalıtım bilgisine dayanır.',
    'Aşılama: bir bitkinin dalının başka bir bitkiye kaynaştırılmasıdır.',
    'Gen aktarımı: bir genin başka bir canlıya aktarılmasıdır ve sonucu kalıtsaldır.',
    'Klonlama: kalıtsal özellikleri aynı olan canlı ya da hücre elde edilmesidir.',
    'Gen tedavisi: hastalığa neden olan gen sorununu gidermeye yönelik tedavi yaklaşımıdır.',
    'Bu uygulamaların hem yarar sağlayan hem soru doğuran yönleri vardır; kazanım ikilem tartışması ister.',
    'İyi bir tartışma cevabı üç parçalıdır: yarar (gerekçe), risk (gerekçe), koşullu sonuç.',
    'Bilimsel tahmin bugünkü bilgiye dayanır ve “olabilir” diliyle kurulur; kesinlik iddia etmez.',
  ],

  next: [
    'Katı Basıncı ve Değişkenleri (F.8.3.1.1)',
    'Sıvı ve Gaz Basıncı, Günlük Yaşam Uygulamaları (F.8.3.1.2, F.8.3.1.3)',
    'Mutasyon, Modifikasyon ve Adaptasyon (tekrar için)',
  ],
})

export default lesson
